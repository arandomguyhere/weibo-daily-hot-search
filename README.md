# Weibo Daily Hot Search

Automatically scrapes and archives Weibo trending topics, recording hot search data since December 29, 2020.

## Live Demo

**[https://arandomguyhere.github.io/weibo-daily-hot-search](https://arandomguyhere.github.io/weibo-daily-hot-search)**

Browse historical trending data with an interactive web interface.

## Features

- Automated scraping of Weibo hot search rankings
- Daily archives with historical data lookup
- Raw JSON data and Markdown formatted archives
- GitHub Pages visualization interface
- Time-weighted algorithm for accurate popularity tracking

## Today's Hot Search

<!-- BEGIN -->

空空如也

数据更新于 2026-01-25 19:59:35

<!-- END -->

## Data Documentation

### Directory Structure

```
├── raw/                    # Raw JSON data
│   └── YYYY-MM-DD.json     # Daily hot search data
├── archives/               # Markdown archives
│   └── YYYY-MM-DD.md       # Daily hot search archives
├── index.html              # GitHub Pages frontend
└── mod.ts                  # Data scraping script (Deno)
```

### Data Format

Daily JSON format (`raw/YYYY-MM-DD.json`):

```json
[
  {
    "url": "/weibo?q=%23topic%23",
    "text": "Topic Text",
    "count": 1234567
  }
]
```

| Field | Description |
|-------|-------------|
| `url` | Weibo search link path |
| `text` | Hot search topic text |
| `count` | Popularity score (time-weighted) |

### Time Weighting

To more accurately reflect topic popularity, data collection applies time-based weights:

| Period | Time Range | Weight |
|--------|------------|--------|
| Night | 02:00-05:00 | 0.5x |
| Morning | 06:00-10:00 | 0.8x |
| Peak | 11:00-23:00 | 1.2x |
| Other | - | 1.0x |

## Tech Stack

- **Runtime**: [Deno](https://deno.land/)
- **Automation**: GitHub Actions (scheduled tasks)
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Deployment**: GitHub Pages

## Local Development

```bash
# Install Deno
curl -fsSL https://deno.land/install.sh | sh

# Run the scraping script
deno run --unstable --allow-net --allow-read --allow-write --import-map=import_map.json mod.ts
```

## Historical Archives

Browse all historical data: [./archives](./archives)

## Related Projects

- [V2EX Daily Hot Topics](https://github.com/boojack/v2ex-daily-hot-topic)

## License

MIT
