/* Service worker for Weibo Signal Tracker.
 * Shell (page, manifest, icons): cached on install, refreshed in the background.
 * Data (raw/*.json): network-first so scrapes stay fresh, cached copy served offline.
 */
const VERSION = 'v1';
const SHELL_CACHE = `shell-${VERSION}`;
const DATA_CACHE = `data-${VERSION}`;
const MAX_DATA_ENTRIES = 45;

const SHELL_ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(SHELL_CACHE)
            .then((cache) => cache.addAll(SHELL_ASSETS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys.filter((k) => k !== SHELL_CACHE && k !== DATA_CACHE)
                    .map((k) => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

async function trimDataCache() {
    const cache = await caches.open(DATA_CACHE);
    const keys = await cache.keys();
    if (keys.length <= MAX_DATA_ENTRIES) return;
    // Requests are date-named (raw/YYYY-MM-DD.json); drop the oldest dates first.
    const sorted = keys.slice().sort((a, b) => a.url.localeCompare(b.url));
    await Promise.all(sorted.slice(0, keys.length - MAX_DATA_ENTRIES).map((k) => cache.delete(k)));
}

// Network-first: serve fresh data when online, cached data offline.
async function networkFirstData(request) {
    const cache = await caches.open(DATA_CACHE);
    try {
        const response = await fetch(request);
        if (response.ok) {
            // Strip the ?v= cache-buster so each date stores one entry.
            const url = new URL(request.url);
            url.search = '';
            await cache.put(url.href, response.clone());
            trimDataCache();
        }
        return response;
    } catch (err) {
        const cached = await cache.match(request, { ignoreSearch: true });
        if (cached) return cached;
        throw err;
    }
}

// Stale-while-revalidate: instant shell load, silent refresh for next visit.
async function staleWhileRevalidateShell(request, fallbackUrl) {
    const cache = await caches.open(SHELL_CACHE);
    const cached = await cache.match(fallbackUrl || request);
    const network = fetch(request)
        .then((response) => {
            if (response.ok) cache.put(fallbackUrl || request, response.clone());
            return response;
        })
        .catch(() => null);
    if (cached) {
        network.catch(() => {});
        return cached;
    }
    const response = await network;
    if (response) return response;
    throw new Error('Offline and not cached: ' + request.url);
}

self.addEventListener('fetch', (event) => {
    const request = event.request;
    if (request.method !== 'GET') return;
    const url = new URL(request.url);
    if (url.origin !== self.location.origin) return;

    if (url.pathname.includes('/raw/')) {
        event.respondWith(networkFirstData(request));
    } else if (request.mode === 'navigate') {
        event.respondWith(staleWhileRevalidateShell(request, './index.html'));
    } else {
        event.respondWith(staleWhileRevalidateShell(request));
    }
});
