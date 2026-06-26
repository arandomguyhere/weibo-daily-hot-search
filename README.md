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

1. [微信朋友圈互删清空对方全部痕迹 (Delete each other in WeChat Moments and clear all traces of each other)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%BA%92%E5%88%A0%E6%B8%85%E7%A9%BA%E5%AF%B9%E6%96%B9%E5%85%A8%E9%83%A8%E7%97%95%E8%BF%B9%23) `1.5M 🔥` `NEW`
1. [膝盖的大小居然和脸型一样](https://s.weibo.com/weibo?q=%23%E8%86%9D%E7%9B%96%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%B1%85%E7%84%B6%E5%92%8C%E8%84%B8%E5%9E%8B%E4%B8%80%E6%A0%B7%23) `621.8K 🔥` `NEW`
1. [第38届大众电影百花奖](https://s.weibo.com/weibo?q=%23%E7%AC%AC38%E5%B1%8A%E5%A4%A7%E4%BC%97%E7%94%B5%E5%BD%B1%E7%99%BE%E8%8A%B1%E5%A5%96%23) `621.4K 🔥` `NEW`
1. [白玉兰获奖名单](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `620.5K 🔥` `NEW`
1. [藏海传 挂零](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A0%20%E6%8C%82%E9%9B%B6%23) `618.3K 🔥` `NEW`
1. [孙俪八提白玉兰像熹妃回宫](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%85%AB%E6%8F%90%E7%99%BD%E7%8E%89%E5%85%B0%E5%83%8F%E7%86%B9%E5%A6%83%E5%9B%9E%E5%AE%AB%23) `617.4K 🔥` `NEW`
1. [哈兰德大战姆巴佩](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%A7%E6%88%98%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `616.3K 🔥` `NEW`
1. [工作后才明白爸妈为什么买熟菜回家](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E6%89%8D%E6%98%8E%E7%99%BD%E7%88%B8%E5%A6%88%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B9%B0%E7%86%9F%E8%8F%9C%E5%9B%9E%E5%AE%B6%23) `615.5K 🔥` `NEW`
1. [iPhone未涨价原因](https://s.weibo.com/weibo?q=%23iPhone%E6%9C%AA%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `614.3K 🔥` `NEW`
1. [姆巴佩哈兰德新绝代双骄对决](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%93%88%E5%85%B0%E5%BE%B7%E6%96%B0%E7%BB%9D%E4%BB%A3%E5%8F%8C%E9%AA%84%E5%AF%B9%E5%86%B3%23) `613.0K 🔥` `NEW`
1. [侯明昊淘汰 (Hou Minghao eliminated)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%B7%98%E6%B1%B0%23) `611.8K 🔥` `NEW`
1. [杨紫白玉兰视后](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%23) `609.8K 🔥` `NEW`
1. [85花 白玉兰陪跑](https://s.weibo.com/weibo?q=%2385%E8%8A%B1%20%E7%99%BD%E7%8E%89%E5%85%B0%E9%99%AA%E8%B7%91%23) `607.9K 🔥` `NEW`
1. [杨幂 陪跑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E9%99%AA%E8%B7%91%23) `607.0K 🔥` `NEW`
1. [刘涛祝贺杨紫](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E7%A5%9D%E8%B4%BA%E6%9D%A8%E7%B4%AB%23) `533.0K 🔥` `NEW`
1. [恋与深空4万人次投诉仍不回应](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA4%E4%B8%87%E4%BA%BA%E6%AC%A1%E6%8A%95%E8%AF%89%E4%BB%8D%E4%B8%8D%E5%9B%9E%E5%BA%94%23) `531.3K 🔥` `NEW`
1. [缉毒警的遗言被警嫂一巴掌打断](https://s.weibo.com/weibo?q=%23%E7%BC%89%E6%AF%92%E8%AD%A6%E7%9A%84%E9%81%97%E8%A8%80%E8%A2%AB%E8%AD%A6%E5%AB%82%E4%B8%80%E5%B7%B4%E6%8E%8C%E6%89%93%E6%96%AD%23) `524.3K 🔥` `NEW`
1. [幼童被家长放医院检查床上后跌落](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E8%A2%AB%E5%AE%B6%E9%95%BF%E6%94%BE%E5%8C%BB%E9%99%A2%E6%A3%80%E6%9F%A5%E5%BA%8A%E4%B8%8A%E5%90%8E%E8%B7%8C%E8%90%BD%23) `521.0K 🔥` `NEW`
1. [女子被前夫和女邻居冒名贷款买房成黑户](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%89%8D%E5%A4%AB%E5%92%8C%E5%A5%B3%E9%82%BB%E5%B1%85%E5%86%92%E5%90%8D%E8%B4%B7%E6%AC%BE%E4%B9%B0%E6%88%BF%E6%88%90%E9%BB%91%E6%88%B7%23) `515.9K 🔥` `NEW`
1. [杨紫哭了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%93%AD%E4%BA%86%23) `515.1K 🔥` `NEW`
1. [张凌赫关晓彤主持人 (Zhang Linghe Guan Xiaotong Host)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%85%B3%E6%99%93%E5%BD%A4%E4%B8%BB%E6%8C%81%E4%BA%BA%23) `349.2K 🔥` `NEW`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `328.5K 🔥` `NEW`
1. [杨幂 绿瓷美人](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E7%BB%BF%E7%93%B7%E7%BE%8E%E4%BA%BA%23) `305.9K 🔥` `NEW`
1. [恋与深空新PV海外评价](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%96%B0PV%E6%B5%B7%E5%A4%96%E8%AF%84%E4%BB%B7%23) `305.0K 🔥` `NEW`
1. [DeepSeek招聘薪资待遇](https://s.weibo.com/weibo?q=%23DeepSeek%E6%8B%9B%E8%81%98%E8%96%AA%E8%B5%84%E5%BE%85%E9%81%87%23) `302.2K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `298.6K 🔥` `NEW`
1. [太平年最佳中国电视剧](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E6%9C%80%E4%BD%B3%E4%B8%AD%E5%9B%BD%E7%94%B5%E8%A7%86%E5%89%A7%23) `297.0K 🔥` `NEW`
1. [奥斯卡欠C罗一座小金人](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E6%96%AF%E5%8D%A1%E6%AC%A0C%E7%BD%97%E4%B8%80%E5%BA%A7%E5%B0%8F%E9%87%91%E4%BA%BA%23) `292.5K 🔥` `NEW`
1. [岸田文雄谈中日关系走向](https://s.weibo.com/weibo?q=%23%E5%B2%B8%E7%94%B0%E6%96%87%E9%9B%84%E8%B0%88%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%E8%B5%B0%E5%90%91%23) `291.8K 🔥` `NEW`
1. [刘亦菲白玉兰出逃一周年](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%99%BD%E7%8E%89%E5%85%B0%E5%87%BA%E9%80%83%E4%B8%80%E5%91%A8%E5%B9%B4%23) `289.8K 🔥` `NEW`
1. [难听 (ugly)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `271.0K 🔥` `NEW`
1. [万妮达第一](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E7%AC%AC%E4%B8%80%23) `245.8K 🔥` `NEW`
1. [张远 模仿薛之谦](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%20%E6%A8%A1%E4%BB%BF%E8%96%9B%E4%B9%8B%E8%B0%A6%23) `235.1K 🔥` `NEW`
1. [太平年横扫](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E6%A8%AA%E6%89%AB%23) `216.6K 🔥` `NEW`
1. [于和伟白玉兰视帝](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E5%92%8C%E4%BC%9F%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%B8%9D%23) `208.2K 🔥` `NEW`
1. [孙俪我最差也是第五名了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%88%91%E6%9C%80%E5%B7%AE%E4%B9%9F%E6%98%AF%E7%AC%AC%E4%BA%94%E5%90%8D%E4%BA%86%23) `175.5K 🔥` `NEW`
1. [侯明昊选的歌太难了](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E9%80%89%E7%9A%84%E6%AD%8C%E5%A4%AA%E9%9A%BE%E4%BA%86%23) `174.4K 🔥` `NEW`
1. [2026F1奥地利大奖赛](https://s.weibo.com/weibo?q=%232026F1%E5%A5%A5%E5%9C%B0%E5%88%A9%E5%A4%A7%E5%A5%96%E8%B5%9B%23) `172.5K 🔥` `NEW`
1. [iPhone17以旧换新增超3倍](https://s.weibo.com/weibo?q=%23iPhone17%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E5%A2%9E%E8%B6%853%E5%80%8D%23) `170.3K 🔥` `NEW`
1. [再进化下去西瓜皮要没有了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%BF%9B%E5%8C%96%E4%B8%8B%E5%8E%BB%E8%A5%BF%E7%93%9C%E7%9A%AE%E8%A6%81%E6%B2%A1%E6%9C%89%E4%BA%86%23) `169.5K 🔥` `NEW`
1. [发现在北京生活特别显年轻 (I find that living in Beijing makes me look particularly young.)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%94%9F%E6%B4%BB%E7%89%B9%E5%88%AB%E6%98%BE%E5%B9%B4%E8%BD%BB%23) `166.3K 🔥` `NEW`
1. [明日方舟终末地](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E7%BB%88%E6%9C%AB%E5%9C%B0%23) `163.7K 🔥` `NEW`
1. [AG 首发名单](https://s.weibo.com/weibo?q=%23AG%20%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95%23) `162.3K 🔥` `NEW`
1. [删好友后微信朋友圈互动还在吗](https://s.weibo.com/weibo?q=%23%E5%88%A0%E5%A5%BD%E5%8F%8B%E5%90%8E%E5%BE%AE%E4%BF%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%BA%92%E5%8A%A8%E8%BF%98%E5%9C%A8%E5%90%97%23) `160.2K 🔥` `NEW`
1. [苏醒张远歌手直播助力哈兰德](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E5%BC%A0%E8%BF%9C%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%E5%8A%A9%E5%8A%9B%E5%93%88%E5%85%B0%E5%BE%B7%23) `156.8K 🔥` `NEW`
1. [鸣潮](https://s.weibo.com/weibo?q=%23%E9%B8%A3%E6%BD%AE%23) `155.9K 🔥` `NEW`
1. [法国民众超市疯抢空调](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%B0%91%E4%BC%97%E8%B6%85%E5%B8%82%E7%96%AF%E6%8A%A2%E7%A9%BA%E8%B0%83%23) `153.1K 🔥` `NEW`
1. [韩国若能小组第三出线将战G组第1](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%8B%A5%E8%83%BD%E5%B0%8F%E7%BB%84%E7%AC%AC%E4%B8%89%E5%87%BA%E7%BA%BF%E5%B0%86%E6%88%98G%E7%BB%84%E7%AC%AC1%23) `150.4K 🔥` `NEW`

Updated at 2026-06-27 01:23:34

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
