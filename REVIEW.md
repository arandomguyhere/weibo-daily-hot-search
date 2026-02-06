# Code Review: weibo-daily-hot-search

## Overview

This is a Deno-based scraper that automatically fetches Weibo trending search data every 5 minutes via GitHub Actions, archives it as JSON + Markdown, and serves a GitHub Pages frontend. The codebase is small (~160 lines of TypeScript + ~180 lines of HTML/JS) with a straightforward architecture.

Findings are organized by severity, then grouped by component within each level.

---

## Critical

### 1. XSS Vulnerability in `renderHotList()` — `index.html:436-453`

The `renderHotList()` function interpolates `item.text` and `item.url` directly into HTML via `innerHTML` without sanitization:

```js
const fullUrl = item.url.startsWith('http') ? item.url : WEIBO_BASE_URL + item.url;
return `
    <div class="hot-item">
        ...
        <a href="${fullUrl}" class="hot-title" ... title="${item.text}">
            ${item.text}
        </a>
        ...
    </div>
`;
```

The data originates from Weibo's HTML, is scraped by the backend, and stored in JSON files served on GitHub Pages. If a trending topic ever contains HTML metacharacters (e.g., `<script>` or `<img onerror=...>`), they would be parsed and executed in visitors' browsers. Both `item.text` (injected as element content and attribute value) and `item.url` (injected into an `href`) are affected.

The risk is partially mitigated by the scraping regex which constrains what content gets captured, but the frontend should not rely on backend scraping as a sanitization layer. Use `textContent` assignment or an explicit escaping function instead of string interpolation into `innerHTML`.

### 2. Duplicate Competing Workflows — `.github/workflows/deno.yml` + `schedule.yml`

Both `deno.yml` and `schedule.yml` trigger on the exact same `*/5 * * * *` cron schedule. Every 5 minutes, **two separate workflow runs** are launched — both fetching Weibo data, committing, and pushing. This causes:

- **Wasted CI minutes** — double the GitHub Actions usage.
- **Race conditions** — two concurrent `git push` operations to the same branch. One will fail, or worse, one could overwrite the other's commit.
- **Corrupted data** — a failed push mid-write could leave the JSON file in a bad state.

`deno.yml` is clearly the older, unmaintained version. It has three additional problems that `schedule.yml` has already fixed:

1. **Placeholder git credentials**: `user.email "EMAIL"` and `user.name "USER_NAME"` were never filled in.
2. **Deprecated action**: Uses archived `denolib/setup-deno@master` instead of `denoland/setup-deno@v1`.
3. **No empty-commit guard**: `git commit -m "..."` with no `git diff --staged --quiet ||` prefix will fail when there are no changes.

**Recommendation:** Delete `deno.yml` entirely.

---

## High

### 3. Severely Outdated Deno Standard Library — `import_map.json:3`

```json
"std/": "https://deno.land/std@0.81.0/"
```

Version 0.81.0 dates from **December 2020**. The Deno standard library has had significant breaking changes, bug fixes, and security patches since then. This version is no longer maintained. The project should update to a current version of the Deno standard library (or migrate to JSR packages for Deno 2.x).

### 4. No Error Handling for JSON Parse — `mod.ts:60-63`

```ts
if (await exists(rawFilePath)) {
  const content = await Deno.readTextFile(rawFilePath);
  todayRawData = JSON.parse(content);
}
```

If the daily JSON file is corrupted — possible from a partial write during the race condition in finding #2, or from a disk error — `JSON.parse` throws an unhandled exception and the entire script crashes. All newly fetched data for that run is lost. A `try/catch` with a fallback to an empty array would allow the script to continue and rebuild the day's data from fresh fetches.

---

## Medium

### 5. Frontend `addDays()` Timezone Bug — `index.html:378-382`

```js
function addDays(dateStr, days) {
    const date = new Date(dateStr);
    date.setDate(date.getDate() + days);
    return formatDate(date);
}
```

`new Date('2026-01-01')` parses the date-only string as **UTC midnight**. However, `getDate()`, `setDate()`, `getFullYear()`, `getMonth()` all operate in the browser's **local timezone**. For users west of UTC, the UTC midnight date rolls back to the previous day in local time, causing the arithmetic to be off by one.

**Example in UTC-5:**
1. `new Date('2026-01-01')` → Jan 1 00:00 UTC = **Dec 31 19:00 local**
2. `getDate()` → **31** (local Dec 31)
3. `setDate(31 + 1)` → Dec 32 → wraps to **Jan 1 19:00 local** = Jan 2 00:00 UTC
4. `formatDate()` uses local getters → `getDate()` = **1** → returns `'2026-01-01'`

Result: `addDays('2026-01-01', 1)` returns `'2026-01-01'` — the same date. The Previous/Next day buttons appear stuck.

This bug does **not** affect users in UTC+0 or positive offsets (including the primary Chinese audience at UTC+8), but it breaks date navigation for users in the Americas.

### 6. Heat Count Becomes a Float — `mod.ts:25`

```ts
count: parseInt(x[3]) * rank,
```

When `rank` is 0.5, 0.8, or 1.2, the integer heat count becomes a float (e.g., `1234567 * 0.5 = 617283.5`). These fractional values are persisted to JSON and propagated to the frontend display. Use `Math.round()` to keep counts as integers: `Math.round(parseInt(x[3]) * rank)`.

### 7. `parseInt` on Non-Numeric Content Produces NaN — `mod.ts:10,25`

The regex captures `(.+)` from `<span>(.+)</span>`:

```ts
const regexp = /<a href="(\/weibo\?q=[^"]+)".*?>(.+)<\/a>[\s]+<span>(.+)<\/span>/g;
// ...
count: parseInt(x[3]) * rank,
```

If Weibo changes its HTML format and the `<span>` contains non-numeric text (e.g., `"热"`, `"沸"`), `parseInt` returns `NaN`. The resulting entry has `count: NaN`, which propagates through: sorting (`NaN` comparisons return inconsistent ordering), JSON output (`"count": null` via `JSON.stringify`), and frontend display (`NaN` rendered as count).

### 8. Time-Weight Configuration: Naming, Gaps, and Documentation Mismatch — `consts.ts` + `utils.ts:40-53`

Three related issues with the time-weight system:

**a) Misleading name:** The `noon` array contains hours 11-13, 17-23, and 0 (midnight). This is really "peak hours", not "noon".

**b) Undocumented gaps:** Hours 14, 15, 16 (2-4 PM) and hour 1 (1 AM) are absent from all three arrays, silently falling through to the 1.0x default in `getCurrentRank()`. Hour 1 AM likely belongs with `night` (0.5x), and 14-16 are active daytime hours that likely belong with peak (1.2x). The code even includes a `// NOTE: 数值待完善` comment acknowledging incompleteness.

**c) README mismatch:** The README documents peak hours as `11:00-23:00 → 1.2x`, but the code actually gives hours 14:00-16:59 a weight of 1.0x. The documentation does not match the implementation.

### 9. Backend Timezone Dependency — `utils.ts:41`

```ts
const currentHours = (new Date()).getHours();
```

`getHours()` uses the runtime's local timezone. The GitHub Actions workflow sets `TZ: Asia/Shanghai`, making this work in CI. But local development on a machine in a different timezone would produce different time weights for the same fetch, causing inconsistent heat values. The timezone should be explicit in the code rather than relying on an environment variable.

### 10. `git add .` Stages Everything — `schedule.yml:33`

```yaml
git add .
```

This stages all files in the working directory. In a fresh GitHub Actions checkout, only the files the script modifies (`raw/`, `archives/`, `README.md`) should be present. But if the Deno runtime or script creates unexpected artifacts (crash dumps, cache files), they would be silently committed. Using explicit paths (`git add raw/ archives/ README.md`) is safer and more intentional.

### 11. GitHub Pages Deploys Entire Repository — `pages.yml:33-35`

```yaml
with:
  path: '.'
```

This publishes everything: TypeScript source, `.github/` workflows, `.vscode/` settings, `raw/` data, and `archives/` markdown. The frontend only needs `index.html` and the `raw/` directory. Deploying the full repository exposes internals and increases the artifact size unnecessarily.

---

## Low

### 12. XSS Pattern in Error Display — Not Exploitable — `index.html:428`

```js
<p>加载失败: ${error.message}</p>
```

The original review flagged this as critical XSS. On re-examination, `error.message` only comes from:
- `throw new Error('数据不存在')` — a hardcoded Chinese string
- Browser-generated fetch errors — e.g., `"Failed to fetch"`
- JSON parse errors — e.g., `"Unexpected token..."`

None of these sources contain attacker-controlled content. The `date` parameter in `loadData()` is validated by `isValidDate()` before the fetch. This is still a poor pattern (prefer `textContent` over `innerHTML` for error messages), but it is not exploitable in this codebase.

### 13. `splice` vs `slice` — `mod.ts:50`

```ts
return words.splice(0, 50);
```

`splice` mutates the source array and returns the removed elements. While the mutation is harmless here (`words` is a local variable not used afterward), `slice(0, 50)` communicates intent more clearly — it says "give me a subset" without the side effect of emptying the original array.

### 14. Frontend/Backend Number Format Mismatch

The backend `getCountStr()` in `utils.ts:56-66` formats numbers with K/M/B suffixes (Western convention), used in markdown archives. The frontend `formatCount()` in `index.html:360-367` formats the same raw counts with 万/千万 (Chinese convention) for the web UI. Users see different formats for the same data depending on whether they read the markdown archive or the web page.

### 15. Hardcoded Content Filter — `mod.ts:42`

```ts
.filter((w) => !w.text.includes("肖战"))
```

A specific celebrity name is hardcoded in the processing pipeline. If this is intentional, it should be extracted to a configurable blocklist in `consts.ts` for maintainability. If it was a temporary measure, it should be removed.

### 16. `getCountStr` Reassigns Parameter — `utils.ts:56-65`

```ts
export function getCountStr(num: number): string {
  // ...
  while (num / 1000 >= 1 && idx < 3) {
    idx++;
    num = num / 1000;  // reassigns the parameter binding
  }
```

JavaScript primitives are pass-by-value, so this has no external side effects. But reassigning a function parameter makes it harder to reason about the function's behavior. A local variable (`let value = num`) would be clearer.

### 17. No Retry Logic for Weibo Fetch — `mod.ts:11-16`

```ts
const response = await fetch("https://s.weibo.com/top/summary");
if (!response.ok) {
  console.error(response.statusText);
  Deno.exit(-1);
}
```

A single transient network failure causes the script to exit immediately with no retry. Since the cron runs every 5 minutes, one missed run isn't catastrophic, but a simple retry (1-2 attempts with a short delay) would improve reliability at minimal cost.

### 18. `run.sh` Missing Shebang

The script has no `#!/bin/sh` or `#!/bin/bash` header. It works when invoked explicitly with `bash run.sh`, but fails with a permission or format error when run as `./run.sh`.

### 19. Unnecessary `--unstable` Deno Flag — `run.sh`, `schedule.yml:27`

The `--unstable` flag enables unstable Deno runtime APIs. The code only uses stable APIs: `fetch`, `Deno.readTextFile`, `Deno.writeTextFile`, `Deno.exit`. The standard library `exists` function is a userland utility and does not require the runtime unstable flag. Removing `--unstable` avoids unintended exposure to unstable API behavior in newer Deno versions.

---

## Summary

| Severity | Count | Key Items |
|----------|-------|-----------|
| Critical | 2 | XSS in `renderHotList()`, duplicate competing workflows |
| High | 2 | Outdated Deno std library, no JSON parse error handling |
| Medium | 7 | Frontend timezone bug, float counts, NaN from `parseInt`, time-weight config issues, backend timezone, `git add .`, over-deployment |
| Low | 8 | Non-exploitable XSS pattern, `splice`/`slice`, format mismatch, hardcoded filter, parameter reassignment, no retry, missing shebang, `--unstable` flag |

### Changes from Initial Review

1. **Demoted** "XSS in error display" from Critical to Low — `error.message` never contains attacker-controlled input in this codebase.
2. **Consolidated** four `deno.yml` findings (#3, #4, #6, #20) into a single Critical finding with clear sub-points.
3. **Added** frontend `addDays()` timezone bug (Medium) — real correctness issue causing broken date navigation for users west of UTC.
4. **Added** `parseInt` / `NaN` propagation risk (Medium) — fragile assumption that Weibo's `<span>` content is always numeric.
5. **Added** README/code documentation mismatch on time-weight ranges to the existing time-period naming finding.
6. **Reordered** all findings by severity first, then grouped by component (security, CI/CD, backend, frontend, config) within each level.
7. **Demoted** `git add .` from High to Medium — realistic risk is limited in a fresh CI checkout.
