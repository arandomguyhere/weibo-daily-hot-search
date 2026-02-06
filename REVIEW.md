# Code Review: weibo-daily-hot-search

## Overview

This is a Deno-based scraper that automatically fetches Weibo trending search data every 5 minutes via GitHub Actions, archives it as JSON + Markdown, and serves a GitHub Pages frontend. The codebase is small (~160 lines of TypeScript + ~180 lines of HTML/JS) with a straightforward architecture.

---

## Critical Issues

### 1. XSS Vulnerability in `index.html:439-444`

The `renderHotList()` function interpolates `item.text` and `item.url` directly into HTML without sanitization:

```js
<a href="${fullUrl}" class="hot-title" ... title="${item.text}">
    ${item.text}
</a>
```

Since data originates from an external source (Weibo), a crafted trending topic like `<img src=x onerror=alert(1)>` would execute in visitors' browsers. Both `item.text` and `item.url` should be escaped before insertion. Use `textContent` assignment or a sanitization function instead of string interpolation into `innerHTML`.

### 2. XSS in Error Display — `index.html:429`

```js
<p>加载失败: ${error.message}</p>
```

`error.message` is also interpolated unsanitized into `innerHTML`.

### 3. Duplicate Competing Workflows

Both `.github/workflows/deno.yml` and `.github/workflows/schedule.yml` trigger on the exact same `*/5 * * * *` cron schedule. This means **every 5 minutes, two separate workflow runs** are launched — both fetching, committing, and pushing. This wastes Actions minutes, creates race conditions on `git push`, and will produce duplicate/conflicting commits.

**Recommendation:** Delete `deno.yml` entirely — `schedule.yml` is the newer, corrected version.

### 4. `deno.yml` Contains Placeholder Credentials

```yaml
git config --local user.email "EMAIL"
git config --local user.name "USER_NAME"
```

These are clearly placeholder values that were never filled in. Combined with the duplicate workflow issue, this workflow should be removed.

---

## High-Severity Issues

### 5. Severely Outdated Deno Standard Library — `import_map.json:3`

```json
"std/": "https://deno.land/std@0.81.0/"
```

Version 0.81.0 dates from **December 2020**. The Deno standard library has gone through significant breaking changes and security fixes since then. This version is no longer maintained.

### 6. `deno.yml` Uses Deprecated Action

```yaml
uses: denolib/setup-deno@master
```

`denolib/setup-deno` is **deprecated** and archived. The newer `schedule.yml` correctly uses `denoland/setup-deno@v1`. This is another reason to delete `deno.yml`.

### 7. Unconditional `git add .` in Workflows

Both workflows use `git add .` which stages **everything** in the working directory. If a workflow step accidentally creates log files, `.env` files, or debug artifacts, they'll be committed. Use explicit paths:

```yaml
git add raw/ archives/ README.md
```

### 8. No Error Handling for JSON Parse — `mod.ts:62`

```ts
todayRawData = JSON.parse(content);
```

If the daily JSON file is corrupted (e.g., from a partial write during a previous race-condition push), this will throw an unhandled error and crash the script with no recovery. A `try/catch` with a fallback to an empty array would prevent data loss.

---

## Medium-Severity Issues

### 9. `splice` vs `slice` — `mod.ts:50`

```ts
return words.splice(0, 50);
```

`splice` **mutates** the source array. While the mutation doesn't cause a bug here since `words` is a local variable, `slice(0, 50)` communicates the intent more clearly (extracting a subset without side effects) and is the idiomatic choice.

### 10. Misleading Time Period Name — `consts.ts:5`

```ts
noon: [11, 12, 13, 17, 18, 19, 20, 21, 22, 23, 0],
```

This is labeled `noon` but includes hours 17:00-23:00 and midnight (0:00). It's really a "peak hours" bucket. Also, hours 14, 15, 16 (2 PM-4 PM) and hour 1 (1 AM) are missing from all categories, falling through to the default weight of 1.0x. This gap may be intentional but is undocumented.

### 11. `count` Becomes a Float — `mod.ts:25`

```ts
count: parseInt(x[3]) * rank,
```

When `rank` is 0.5, 0.8, or 1.2, the integer heat count becomes a float (e.g., `1234567 * 0.5 = 617283.5`). This produces fractional values in the JSON output and slightly misleading display numbers. Consider rounding: `Math.round(parseInt(x[3]) * rank)`.

### 12. Timezone Dependency — `utils.ts:41`

```ts
const currentHours = (new Date()).getHours();
```

`getHours()` uses the runtime's local timezone. The workflow sets `TZ: Asia/Shanghai`, but local development or a different CI runner could produce different time weights for the same data. Consider making the timezone explicit.

### 13. `getCountStr` Mutates its Parameter — `utils.ts:60-63`

```ts
export function getCountStr(num: number): string {
  // ...
  while (num / 1000 >= 1 && idx < 3) {
    num = num / 1000;  // reassigns parameter
  }
```

While this works (JS primitives are pass-by-value), reassigning parameters is generally considered poor practice. Using a local variable like `let value = num` is clearer.

### 14. GitHub Pages Deploys Entire Repository — `pages.yml:33-34`

```yaml
with:
  path: '.'
```

This publishes **everything**: TypeScript source, `.github/` workflows, `.vscode/` settings, `raw/` data, and `archives/` markdown. The frontend only needs `index.html` and `raw/`. Deploying the full repo exposes internals and increases artifact size unnecessarily.

---

## Low-Severity Issues

### 15. `run.sh` Missing Shebang

The script has no `#!/bin/sh` or `#!/bin/bash` header. While it works when invoked explicitly with `bash run.sh` or `sh run.sh`, it will fail if run as `./run.sh`.

### 16. `--unstable` Deno Flag

The `--unstable` flag grants access to unstable Deno APIs. The code doesn't appear to use any unstable APIs (`fetch`, `readTextFile`, `writeTextFile`, `exists` are all stable). This flag may cause warnings or behavior changes in newer Deno versions.

### 17. Hardcoded Content Filter — `mod.ts:42`

```ts
.filter((w) => !w.text.includes("肖战"))
```

A specific celebrity name is hardcoded as a filter. If this is intentional, it should be extracted to a configurable blocklist in `consts.ts` for maintainability. If it was a temporary measure, it should be removed.

### 18. Frontend Format Mismatch with Backend

The backend `getCountStr()` in `utils.ts` formats numbers with K/M/B suffixes (Western convention), while the frontend `formatCount()` in `index.html:360-367` uses 万/千万 (Chinese convention). The frontend displays raw JSON `count` values, so users see Chinese-formatted numbers on the website but Western-formatted numbers in the Markdown archives. This inconsistency is minor but worth noting.

### 19. No Retry Logic for Weibo Fetch — `mod.ts:11`

The `fetch("https://s.weibo.com/top/summary")` has no retry on transient failures. A single network hiccup causes the entire run to `Deno.exit(-1)`. Since this runs every 5 minutes, a single failure isn't catastrophic, but a simple retry would improve reliability.

### 20. `deno.yml` Commits Even When There Are No Changes

```yaml
git commit -m "-update by github action;"
```

Unlike `schedule.yml` which uses `git diff --staged --quiet || git commit`, `deno.yml` will fail on empty commits (no `--allow-empty`). Yet another reason to remove it.

---

## Summary

| Severity | Count | Key Items |
|----------|-------|-----------|
| Critical | 4 | XSS vulnerabilities, duplicate workflows, placeholder credentials |
| High | 4 | Outdated stdlib, deprecated action, `git add .`, no JSON parse error handling |
| Medium | 6 | `splice`/`slice`, naming, float counts, timezone, parameter mutation, over-deployment |
| Low | 6 | Missing shebang, `--unstable` flag, hardcoded filter, format mismatch, no retry, empty commits |

The most impactful changes would be: (1) delete `deno.yml`, (2) fix the XSS in `index.html`, and (3) update the Deno standard library version.
