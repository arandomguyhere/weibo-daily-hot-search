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

1. [哈兰德替补 (Haaland substitute)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%9B%BF%E8%A1%A5%23) `733.5K 🔥` `NEW`
1. [30万内猎装车首选启境GT7](https://s.weibo.com/weibo?q=%2330%E4%B8%87%E5%86%85%E7%8C%8E%E8%A3%85%E8%BD%A6%E9%A6%96%E9%80%89%E5%90%AF%E5%A2%83GT7%23) `471.9K 🔥` `NEW`
1. [好多人发文祝贺杨紫](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E4%BA%BA%E5%8F%91%E6%96%87%E7%A5%9D%E8%B4%BA%E6%9D%A8%E7%B4%AB%23) `444.4K 🔥` `NEW`
1. [心疼沙溢](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E6%B2%99%E6%BA%A2%23) `402.7K 🔥` `NEW`
1. [华为乾崑助力全新猛士M817上市](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E5%8A%A9%E5%8A%9B%E5%85%A8%E6%96%B0%E7%8C%9B%E5%A3%ABM817%E4%B8%8A%E5%B8%82%23) `389.8K 🔥` `NEW`
1. [挪威vs法国](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81vs%E6%B3%95%E5%9B%BD%23) `303.5K 🔥` `NEW`
1. [哈兰德姆巴佩王不见王](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%8E%8B%E4%B8%8D%E8%A7%81%E7%8E%8B%23) `279.8K 🔥` `NEW`
1. [两大90花都有主流视后了](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A4%A790%E8%8A%B1%E9%83%BD%E6%9C%89%E4%B8%BB%E6%B5%81%E8%A7%86%E5%90%8E%E4%BA%86%23) `183.5K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `177.5K 🔥` `NEW`
1. [女子溪谷中玩水身体被卡石缝身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%BA%AA%E8%B0%B7%E4%B8%AD%E7%8E%A9%E6%B0%B4%E8%BA%AB%E4%BD%93%E8%A2%AB%E5%8D%A1%E7%9F%B3%E7%BC%9D%E8%BA%AB%E4%BA%A1%23) `154.5K 🔥` `NEW`
1. [跑男 (running man)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `138.3K 🔥` `NEW`
1. [塞内加尔vs伊拉克](https://s.weibo.com/weibo?q=%23%E5%A1%9E%E5%86%85%E5%8A%A0%E5%B0%94vs%E4%BC%8A%E6%8B%89%E5%85%8B%23) `137.5K 🔥` `NEW`
1. [叠纸漠视玩家声音拿什么重建信任](https://s.weibo.com/weibo?q=%23%E5%8F%A0%E7%BA%B8%E6%BC%A0%E8%A7%86%E7%8E%A9%E5%AE%B6%E5%A3%B0%E9%9F%B3%E6%8B%BF%E4%BB%80%E4%B9%88%E9%87%8D%E5%BB%BA%E4%BF%A1%E4%BB%BB%23) `136.0K 🔥` `NEW`
1. [梁博 表态](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%8D%9A%20%E8%A1%A8%E6%80%81%23) `131.7K 🔥` `NEW`
1. [姆巴佩只关注了樊振东一个真人](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8F%AA%E5%85%B3%E6%B3%A8%E4%BA%86%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%80%E4%B8%AA%E7%9C%9F%E4%BA%BA%23) `96.3K 🔥` `NEW`
1. [爱奇艺赢麻了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `95.6K 🔥` `NEW`
1. [我打差评不是为了让店员丢工作](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%89%93%E5%B7%AE%E8%AF%84%E4%B8%8D%E6%98%AF%E4%B8%BA%E4%BA%86%E8%AE%A9%E5%BA%97%E5%91%98%E4%B8%A2%E5%B7%A5%E4%BD%9C%23) `95.6K 🔥` `NEW`
1. [侯明昊安可](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%AE%89%E5%8F%AF%23) `95.4K 🔥` `NEW`
1. [长期沉溺短期关系可能影响心理](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E6%B2%89%E6%BA%BA%E7%9F%AD%E6%9C%9F%E5%85%B3%E7%B3%BB%E5%8F%AF%E8%83%BD%E5%BD%B1%E5%93%8D%E5%BF%83%E7%90%86%23) `95.3K 🔥` `NEW`
1. [5.6亿云养牛骗局实际一头牛都没有](https://s.weibo.com/weibo?q=%235.6%E4%BA%BF%E4%BA%91%E5%85%BB%E7%89%9B%E9%AA%97%E5%B1%80%E5%AE%9E%E9%99%85%E4%B8%80%E5%A4%B4%E7%89%9B%E9%83%BD%E6%B2%A1%E6%9C%89%23) `95.1K 🔥` `NEW`
1. [发现在北京生活特别显年轻 (I find that living in Beijing makes me look particularly young.)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%94%9F%E6%B4%BB%E7%89%B9%E5%88%AB%E6%98%BE%E5%B9%B4%E8%BD%BB%23) `238.7K 🔥` `+44%`
1. [微信朋友圈互删清空对方全部痕迹 (Delete each other in WeChat Moments and clear all traces of each other)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%BA%92%E5%88%A0%E6%B8%85%E7%A9%BA%E5%AF%B9%E6%96%B9%E5%85%A8%E9%83%A8%E7%97%95%E8%BF%B9%23) `636.6K 🔥` `-57%`
1. [第38届大众电影百花奖 (The 38th Popular Film Hundred Flowers Awards)](https://s.weibo.com/weibo?q=%23%E7%AC%AC38%E5%B1%8A%E5%A4%A7%E4%BC%97%E7%94%B5%E5%BD%B1%E7%99%BE%E8%8A%B1%E5%A5%96%23) `479.6K 🔥` `-23%`
1. [藏海传 挂零](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A0%20%E6%8C%82%E9%9B%B6%23) `436.0K 🔥` `-29%`
1. [膝盖的大小居然和脸型一样](https://s.weibo.com/weibo?q=%23%E8%86%9D%E7%9B%96%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%B1%85%E7%84%B6%E5%92%8C%E8%84%B8%E5%9E%8B%E4%B8%80%E6%A0%B7%23) `242.0K 🔥` `-61%`
1. [杨幂 陪跑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E9%99%AA%E8%B7%91%23) `238.6K 🔥` `-61%`
1. [孙俪八提白玉兰像熹妃回宫](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%85%AB%E6%8F%90%E7%99%BD%E7%8E%89%E5%85%B0%E5%83%8F%E7%86%B9%E5%A6%83%E5%9B%9E%E5%AE%AB%23) `236.5K 🔥` `-62%`
1. [白玉兰获奖名单](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `225.9K 🔥` `-64%`
1. [侯明昊淘汰 (Hou Minghao eliminated)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%B7%98%E6%B1%B0%23) `194.8K 🔥` `-68%`
1. [杨紫白玉兰视后](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%23) `183.3K 🔥` `-70%`
1. [恋与深空新PV海外评价](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%96%B0PV%E6%B5%B7%E5%A4%96%E8%AF%84%E4%BB%B7%23) `177.3K 🔥` `-42%`
1. [恋与深空4万人次投诉仍不回应](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA4%E4%B8%87%E4%BA%BA%E6%AC%A1%E6%8A%95%E8%AF%89%E4%BB%8D%E4%B8%8D%E5%9B%9E%E5%BA%94%23) `167.6K 🔥` `-68%`
1. [难听 (ugly)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `146.5K 🔥` `-46%`
1. [85花 白玉兰陪跑](https://s.weibo.com/weibo?q=%2385%E8%8A%B1%20%E7%99%BD%E7%8E%89%E5%85%B0%E9%99%AA%E8%B7%91%23) `145.6K 🔥` `-76%`
1. [哈兰德大战姆巴佩 (Haaland vs Mbappe)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%A7%E6%88%98%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `136.3K 🔥` `-78%`
1. [工作后才明白爸妈为什么买熟菜回家](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E6%89%8D%E6%98%8E%E7%99%BD%E7%88%B8%E5%A6%88%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B9%B0%E7%86%9F%E8%8F%9C%E5%9B%9E%E5%AE%B6%23) `134.1K 🔥` `-78%`
1. [缉毒警的遗言被警嫂一巴掌打断](https://s.weibo.com/weibo?q=%23%E7%BC%89%E6%AF%92%E8%AD%A6%E7%9A%84%E9%81%97%E8%A8%80%E8%A2%AB%E8%AD%A6%E5%AB%82%E4%B8%80%E5%B7%B4%E6%8E%8C%E6%89%93%E6%96%AD%23) `133.3K 🔥` `-75%`
1. [太平年最佳中国电视剧](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E6%9C%80%E4%BD%B3%E4%B8%AD%E5%9B%BD%E7%94%B5%E8%A7%86%E5%89%A7%23) `132.7K 🔥` `-55%`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `106.9K 🔥` `-67%`
1. [张凌赫关晓彤主持人 (Zhang Linghe Guan Xiaotong Host)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%85%B3%E6%99%93%E5%BD%A4%E4%B8%BB%E6%8C%81%E4%BA%BA%23) `105.8K 🔥` `-70%`
1. [太平年横扫](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E6%A8%AA%E6%89%AB%23) `95.5K 🔥` `-56%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `95.5K 🔥` `-68%`
1. [刘亦菲白玉兰出逃一周年](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%99%BD%E7%8E%89%E5%85%B0%E5%87%BA%E9%80%83%E4%B8%80%E5%91%A8%E5%B9%B4%23) `95.4K 🔥` `-67%`
1. [万妮达第一](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E7%AC%AC%E4%B8%80%23) `95.4K 🔥` `-61%`
1. [张远 模仿薛之谦](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%20%E6%A8%A1%E4%BB%BF%E8%96%9B%E4%B9%8B%E8%B0%A6%23) `95.3K 🔥` `-59%`
1. [iPhone未涨价原因 (Reasons why iPhone prices haven’t increased)](https://s.weibo.com/weibo?q=%23iPhone%E6%9C%AA%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `95.3K 🔥` `-84%`
1. [DeepSeek招聘薪资待遇](https://s.weibo.com/weibo?q=%23DeepSeek%E6%8B%9B%E8%81%98%E8%96%AA%E8%B5%84%E5%BE%85%E9%81%87%23) `95.2K 🔥` `-68%`
1. [杨幂 绿瓷美人](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E7%BB%BF%E7%93%B7%E7%BE%8E%E4%BA%BA%23) `95.2K 🔥` `-69%`
1. [明日方舟终末地](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E7%BB%88%E6%9C%AB%E5%9C%B0%23) `95.2K 🔥` `-42%`
1. [姆巴佩哈兰德新绝代双骄对决](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%93%88%E5%85%B0%E5%BE%B7%E6%96%B0%E7%BB%9D%E4%BB%A3%E5%8F%8C%E9%AA%84%E5%AF%B9%E5%86%B3%23) `95.1K 🔥` `-84%`

Updated at 2026-06-27 03:17:17

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
