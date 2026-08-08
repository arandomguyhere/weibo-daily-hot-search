# Weibo Signal Tracker — Safari Extension

A Safari Web Extension that shows the daily Weibo trending hot-search list in a toolbar popup, with the same lifecycle badges (`NEW`, `RISING`, `HOT`, `FALLING`, `GONE`), velocity indicators, English translations, search, and status filters as the [web frontend](https://arandomguyhere.github.io/weibo-daily-hot-search).

Data is fetched straight from this repository's `raw/YYYY-MM-DD.json` files on GitHub (updated every 5 minutes by the scraper), cached locally for 5 minutes.

## Install in Safari (macOS)

Safari requires web extensions to be wrapped in a native app. Apple ships a converter with Xcode that does this automatically:

```bash
xcrun safari-web-extension-converter safari-extension \
  --project-location safari-app \
  --app-name "Weibo Signal Tracker" \
  --macos-only
```

Then:

1. Open the generated Xcode project (`safari-app/Weibo Signal Tracker/…`) and press **Run**.
2. In Safari, enable **Develop menu** (Safari → Settings → Advanced → "Show features for web developers"), then check **Develop → Allow Unsigned Extensions** (needed for local, unsigned builds; must be re-enabled each Safari launch).
3. Enable the extension in **Safari → Settings → Extensions**.
4. Click the toolbar icon to see today's hot searches.

To also target iOS/iPadOS (15+), drop the `--macos-only` flag and Xcode will generate both app targets. Distribution beyond your own machine requires an Apple Developer account and the App Store.

## Install in Chrome / Edge / Firefox

The extension uses the standard WebExtensions API (Manifest V3), so it also loads directly in other browsers:

- **Chrome/Edge**: `chrome://extensions` → enable Developer mode → **Load unpacked** → select the `safari-extension/` folder.
- **Firefox**: `about:debugging#/runtime/this-firefox` → **Load Temporary Add-on** → select `manifest.json`.

## Files

```
safari-extension/
├── manifest.json   # MV3 manifest (action popup + host permission for raw.githubusercontent.com)
├── popup.html      # Popup markup
├── popup.css       # Styling (light/dark via prefers-color-scheme, matches the web frontend palette)
├── popup.js        # Fetch, cache, filter, and render logic
└── images/         # Generated icons (16–512 px)
```
