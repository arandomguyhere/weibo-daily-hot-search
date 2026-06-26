# Weibo Signal Tracker

Narrative signal monitoring system that tracks Weibo trending search data with velocity analysis and lifecycle detection.

## Live Demo

**[https://arandomguyhere.github.io/weibo-daily-hot-search](https://arandomguyhere.github.io/weibo-daily-hot-search)**

Browse historical trending data with status badges, velocity indicators, and category filters.

## Features

- **Signal tracking**: Scrapes Weibo trending every 5 minutes, tracks up to 100 topics per day
- **Lifecycle detection**: Each topic tagged as `NEW`, `RISING`, `HOT`, `FALLING`, or `GONE`
- **Velocity analysis**: Percentage change between scrapes shows acceleration/deceleration
- **Suppression detection**: Topics that disappear from the feed are marked as `GONE`
- **English translations**: Auto-translated via Google Translate for non-Chinese readers
- **Dark mode + filters**: Filter by status category, search by Chinese or English text
- **Engagement metrics**: Top topics enriched with likes, comments, and reposts from related posts

## Today's Hot Searches

<!-- BEGIN -->

1. [登贝莱帽子戏法 (Dembele hat trick)](https://s.weibo.com/weibo?q=%23%E7%99%BB%E8%B4%9D%E8%8E%B1%E5%B8%BD%E5%AD%90%E6%88%8F%E6%B3%95%23) `358.8K 🔥` `NEW`
1. [白玉兰我不知道你们咋了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%88%91%E4%B8%8D%E7%9F%A5%E9%81%93%E4%BD%A0%E4%BB%AC%E5%92%8B%E4%BA%86%23) `342.3K 🔥` `NEW`
1. [WTT美国大满贯2026](https://s.weibo.com/weibo?q=%23WTT%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF2026%23) `93.4K 🔥` `NEW`
1. [马宁姆巴佩握手](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%8F%A1%E6%89%8B%23) `90.1K 🔥` `NEW`
1. [挪威半场1比3法国](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E5%8D%8A%E5%9C%BA1%E6%AF%943%E6%B3%95%E5%9B%BD%23) `69.6K 🔥` `NEW`
1. [恭喜杨紫获视后的明星](https://s.weibo.com/weibo?q=%23%E6%81%AD%E5%96%9C%E6%9D%A8%E7%B4%AB%E8%8E%B7%E8%A7%86%E5%90%8E%E7%9A%84%E6%98%8E%E6%98%9F%23) `69.0K 🔥` `NEW`
1. [登贝莱梅开二度](https://s.weibo.com/weibo?q=%23%E7%99%BB%E8%B4%9D%E8%8E%B1%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `67.5K 🔥` `NEW`
1. [日本淘汰赛首轮对阵巴西](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B7%98%E6%B1%B0%E8%B5%9B%E9%A6%96%E8%BD%AE%E5%AF%B9%E9%98%B5%E5%B7%B4%E8%A5%BF%23) `66.8K 🔥` `NEW`
1. [朱媛媛 意难平](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AA%9B%E5%AA%9B%20%E6%84%8F%E9%9A%BE%E5%B9%B3%23) `66.1K 🔥` `NEW`
1. [白玉兰视后 谁拿都创造了历史](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%20%E8%B0%81%E6%8B%BF%E9%83%BD%E5%88%9B%E9%80%A0%E4%BA%86%E5%8E%86%E5%8F%B2%23) `60.5K 🔥` `NEW`
1. [登贝莱杀疯了 (Dembele went crazy)](https://s.weibo.com/weibo?q=%23%E7%99%BB%E8%B4%9D%E8%8E%B1%E6%9D%80%E7%96%AF%E4%BA%86%23) `46.3K 🔥` `NEW`
1. [世界杯预测](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A2%84%E6%B5%8B%23) `42.2K 🔥` `NEW`
1. [哈兰德姆巴佩王不见王](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%8E%8B%E4%B8%8D%E8%A7%81%E7%8E%8B%23) `484.2K 🔥` `+73%`
1. [藏海传 挂零](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A0%20%E6%8C%82%E9%9B%B6%23) `351.0K 🔥`
1. [第38届大众电影百花奖 (The 38th Popular Film Hundred Flowers Awards)](https://s.weibo.com/weibo?q=%23%E7%AC%AC38%E5%B1%8A%E5%A4%A7%E4%BC%97%E7%94%B5%E5%BD%B1%E7%99%BE%E8%8A%B1%E5%A5%96%23) `351.8K 🔥` `-27%`
1. [好多人发文祝贺杨紫](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E4%BA%BA%E5%8F%91%E6%96%87%E7%A5%9D%E8%B4%BA%E6%9D%A8%E7%B4%AB%23) `351.4K 🔥` `-21%`
1. [微信朋友圈互删清空对方全部痕迹 (Delete each other in WeChat Moments and clear all traces of each other)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%BA%92%E5%88%A0%E6%B8%85%E7%A9%BA%E5%AF%B9%E6%96%B9%E5%85%A8%E9%83%A8%E7%97%95%E8%BF%B9%23) `318.7K 🔥` `-50%`
1. [挪威vs法国](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81vs%E6%B3%95%E5%9B%BD%23) `191.2K 🔥` `-37%`
1. [哈兰德替补 (Haaland substitute)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%9B%BF%E8%A1%A5%23) `121.6K 🔥` `-83%`
1. [塞内加尔vs伊拉克](https://s.weibo.com/weibo?q=%23%E5%A1%9E%E5%86%85%E5%8A%A0%E5%B0%94vs%E4%BC%8A%E6%8B%89%E5%85%8B%23) `94.1K 🔥` `-32%`
1. [心疼沙溢](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E6%B2%99%E6%BA%A2%23) `94.0K 🔥` `-77%`
1. [杨幂 陪跑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E9%99%AA%E8%B7%91%23) `93.8K 🔥` `-61%`
1. [两大90花都有主流视后了](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A4%A790%E8%8A%B1%E9%83%BD%E6%9C%89%E4%B8%BB%E6%B5%81%E8%A7%86%E5%90%8E%E4%BA%86%23) `93.6K 🔥` `-49%`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `92.6K 🔥` `-48%`
1. [白玉兰获奖名单](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `91.8K 🔥` `-59%`
1. [侯明昊淘汰 (Hou Minghao eliminated)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%B7%98%E6%B1%B0%23) `90.4K 🔥` `-54%`
1. [膝盖的大小居然和脸型一样](https://s.weibo.com/weibo?q=%23%E8%86%9D%E7%9B%96%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%B1%85%E7%84%B6%E5%92%8C%E8%84%B8%E5%9E%8B%E4%B8%80%E6%A0%B7%23) `70.3K 🔥` `-71%`
1. [杨紫白玉兰视后](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%23) `69.9K 🔥` `-62%`
1. [爱奇艺赢麻了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `68.5K 🔥` `-28%`
1. [难听 (ugly)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `67.5K 🔥` `-54%`
1. [女子溪谷中玩水身体被卡石缝身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%BA%AA%E8%B0%B7%E4%B8%AD%E7%8E%A9%E6%B0%B4%E8%BA%AB%E4%BD%93%E8%A2%AB%E5%8D%A1%E7%9F%B3%E7%BC%9D%E8%BA%AB%E4%BA%A1%23) `67.5K 🔥` `-56%`
1. [恋与深空4万人次投诉仍不回应](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA4%E4%B8%87%E4%BA%BA%E6%AC%A1%E6%8A%95%E8%AF%89%E4%BB%8D%E4%B8%8D%E5%9B%9E%E5%BA%94%23) `67.2K 🔥` `-60%`
1. [太平年最佳中国电视剧](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E6%9C%80%E4%BD%B3%E4%B8%AD%E5%9B%BD%E7%94%B5%E8%A7%86%E5%89%A7%23) `66.7K 🔥` `-50%`
1. [孙俪八提白玉兰像熹妃回宫](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%85%AB%E6%8F%90%E7%99%BD%E7%8E%89%E5%85%B0%E5%83%8F%E7%86%B9%E5%A6%83%E5%9B%9E%E5%AE%AB%23) `66.4K 🔥` `-72%`
1. [发现在北京生活特别显年轻 (I find that living in Beijing makes me look particularly young.)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%94%9F%E6%B4%BB%E7%89%B9%E5%88%AB%E6%98%BE%E5%B9%B4%E8%BD%BB%23) `66.3K 🔥` `-72%`
1. [我打差评不是为了让店员丢工作](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%89%93%E5%B7%AE%E8%AF%84%E4%B8%8D%E6%98%AF%E4%B8%BA%E4%BA%86%E8%AE%A9%E5%BA%97%E5%91%98%E4%B8%A2%E5%B7%A5%E4%BD%9C%23) `65.8K 🔥` `-31%`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `65.6K 🔥` `-39%`
1. [85花 白玉兰陪跑](https://s.weibo.com/weibo?q=%2385%E8%8A%B1%20%E7%99%BD%E7%8E%89%E5%85%B0%E9%99%AA%E8%B7%91%23) `65.4K 🔥` `-55%`
1. [梁博 表态](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%8D%9A%20%E8%A1%A8%E6%80%81%23) `53.5K 🔥` `-59%`
1. [恋与深空新PV海外评价](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%96%B0PV%E6%B5%B7%E5%A4%96%E8%AF%84%E4%BB%B7%23) `48.4K 🔥` `-73%`
1. [姆巴佩只关注了樊振东一个真人](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8F%AA%E5%85%B3%E6%B3%A8%E4%BA%86%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%80%E4%B8%AA%E7%9C%9F%E4%BA%BA%23) `48.3K 🔥` `-50%`
1. [跑男 (running man)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `47.5K 🔥` `-66%`
1. [太平年横扫](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E6%A8%AA%E6%89%AB%23) `45.4K 🔥` `-52%`
1. [长期沉溺短期关系可能影响心理](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E6%B2%89%E6%BA%BA%E7%9F%AD%E6%9C%9F%E5%85%B3%E7%B3%BB%E5%8F%AF%E8%83%BD%E5%BD%B1%E5%93%8D%E5%BF%83%E7%90%86%23) `43.8K 🔥` `-54%`
1. [张凌赫关晓彤主持人 (Zhang Linghe Guan Xiaotong Host)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%85%B3%E6%99%93%E5%BD%A4%E4%B8%BB%E6%8C%81%E4%BA%BA%23) `39.4K 🔥` `-63%`
1. [叠纸漠视玩家声音拿什么重建信任](https://s.weibo.com/weibo?q=%23%E5%8F%A0%E7%BA%B8%E6%BC%A0%E8%A7%86%E7%8E%A9%E5%AE%B6%E5%A3%B0%E9%9F%B3%E6%8B%BF%E4%BB%80%E4%B9%88%E9%87%8D%E5%BB%BA%E4%BF%A1%E4%BB%BB%23) `39.4K 🔥` `-71%`
1. [明日方舟终末地](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E7%BB%88%E6%9C%AB%E5%9C%B0%23) `39.4K 🔥` `-59%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `39.4K 🔥` `-59%`

Updated at 2026-06-27 04:59:37

<!-- END -->

## Data Reference

### Directory Structure

```
├── raw/                    # Raw JSON data
│   └── YYYY-MM-DD.json     # Daily hot search data
├── index.html              # GitHub Pages frontend
├── mod.ts                  # Scraping script (Deno)
├── bridge.py               # Data bridge to WeiboInsight/MongoDB
└── WeiboInsight/           # Submodule: Playwright-based deep analysis
```

### Data Format

Daily JSON format (`raw/YYYY-MM-DD.json`):

```json
[
  {
    "url": "/weibo?q=%23Topic%23",
    "text": "Topic",
    "textEn": "Topic in English",
    "count": 1234567,
    "firstSeen": "2026-02-07T08:15:00.000Z",
    "peakCount": 1500000,
    "prevCount": 900000,
    "status": "rising",
    "velocity": 37,
    "engagement": { "posts": 15, "likes": 45200, "comments": 3100, "reposts": 8900 }
  }
]
```

| Field | Description |
|-------|-------------|
| `url` | Weibo search link path |
| `text` | Trending topic text (Chinese) |
| `textEn` | English translation (optional) |
| `count` | Heat value from Weibo API |
| `firstSeen` | ISO timestamp when topic first appeared today |
| `peakCount` | Highest count recorded for this topic today |
| `prevCount` | Count from previous scrape cycle |
| `status` | Lifecycle stage: `new`, `rising`, `hot`, `falling`, `gone` |
| `velocity` | Percentage change from previous scrape |
| `engagement` | Post engagement metrics (top 10 topics): posts, likes, comments, reposts |

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

## WeiboInsight Integration

This project includes [WeiboInsight](https://github.com/arandomguyhere/WeiboInsight) as a submodule for deep NLP analysis of trending topics.

**What each project does:**
- **weibo-daily-hot-search** — Lightweight Deno scraper that tracks trending topics every 5 min via JSON APIs, with lifecycle/velocity analysis
- **WeiboInsight** — Python/Playwright-based scraper with Scrapy pipelines, MongoDB storage, Jieba segmentation, LDA topic modeling, and K-Means clustering

**How they connect:**
1. This scraper collects trending topics + engagement data every 5 minutes
2. `bridge.py` imports the JSON data into MongoDB with text segmentation
3. WeiboInsight's `analyze_weibo_data.py` runs NLP analysis on the imported data

```bash
# Setup
git submodule update --init
cd WeiboInsight && pip install -r requirements.txt && cd ..
pip install pymongo jieba

# Import data into MongoDB
python bridge.py --all

# Run NLP analysis
cd WeiboInsight/scrapy_project
python analyze_weibo_data.py
```

## Related Projects

- [WeiboInsight](https://github.com/arandomguyhere/WeiboInsight) — Playwright-based Weibo CTI analysis
- [V2EX Daily Hot Topics](https://github.com/boojack/v2ex-daily-hot-topic)
- [jackylee1/weibo-daily-hot-search](https://github.com/jackylee1/weibo-daily-hot-search) — Original project

## License

MIT
