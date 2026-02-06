# Weibo Daily Hot Search

Automatically scrapes and archives Weibo trending search data, recording hot search history since 2025-01-01.

## Live Demo

**[https://arandomguyhere.github.io/weibo-daily-hot-search](https://arandomguyhere.github.io/weibo-daily-hot-search)**

Browse historical trending data by date with a visual interface.

## Features

- Scheduled scraping of Weibo's trending search rankings every 5 minutes
- Daily archival with historical data lookup
- Raw data in JSON format and Markdown archives
- GitHub Pages frontend for browsing
- Time-of-day weighting algorithm for more accurate trend representation

## Today's Hot Searches

<!-- BEGIN -->

空空如也

数据更新于 2026-02-07 07:44:20

<!-- END -->

## Data Reference

### Directory Structure

```
├── raw/                    # Raw JSON data
│   └── YYYY-MM-DD.json     # Daily hot search data
├── archives/               # Markdown archives
│   └── YYYY-MM-DD.md       # Daily hot search archive
├── index.html              # GitHub Pages frontend
└── mod.ts                  # Scraping script (Deno)
```

### Data Format

Daily JSON format (`raw/YYYY-MM-DD.json`):

```json
[
  {
    "url": "/weibo?q=%23Topic%23",
    "text": "Topic",
    "count": 1234567
  }
]
```

| Field | Description |
|-------|-------------|
| `url` | Weibo search link path |
| `text` | Trending topic text |
| `count` | Heat value (adjusted by time-of-day weight) |

### Time-of-Day Weights

Heat values are weighted by time of day during collection to better reflect true popularity:

| Period | Hours (CST) | Weight |
|--------|-------------|--------|
| Night | 02:00-05:00 | 0.5x |
| Morning | 06:00-10:00 | 0.8x |
| Peak | 11:00-13:00, 17:00-23:00, 00:00 | 1.2x |
| Default | 01:00, 14:00-16:00 | 1.0x |

## Tech Stack

- **Runtime**: [Deno](https://deno.land/)
- **Automation**: GitHub Actions (cron)
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Hosting**: GitHub Pages

## Local Development

```bash
# Install Deno
curl -fsSL https://deno.land/install.sh | sh

# Run the scraper
deno run --allow-net --allow-read --allow-write --import-map=import_map.json mod.ts
```

## Archives

Browse all historical data: [./archives](./archives)

## Related Projects

- [V2EX Daily Hot Topics](https://github.com/boojack/v2ex-daily-hot-topic)
- [jackylee1/weibo-daily-hot-search](https://github.com/jackylee1/weibo-daily-hot-search) — Original project

## License

MIT
