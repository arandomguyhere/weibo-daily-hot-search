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

1. [东航通报空姐下跪事件](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%88%AA%E9%80%9A%E6%8A%A5%E7%A9%BA%E5%A7%90%E4%B8%8B%E8%B7%AA%E4%BA%8B%E4%BB%B6%23) `2.6M 🔥` `NEW`
1. [怪不得小诊所看病好得快](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%B0%8F%E8%AF%8A%E6%89%80%E7%9C%8B%E7%97%85%E5%A5%BD%E5%BE%97%E5%BF%AB%23) `1.9M 🔥` `NEW`
1. [2500亿元国补资金已下达](https://s.weibo.com/weibo?q=%232500%E4%BA%BF%E5%85%83%E5%9B%BD%E8%A1%A5%E8%B5%84%E9%87%91%E5%B7%B2%E4%B8%8B%E8%BE%BE%23) `1.6M 🔥` `NEW`
1. [问界新M8开启预售](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E6%96%B0M8%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE%23) `1.6M 🔥` `NEW`
1. [亚运国足vs韩国](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E5%9B%BD%E8%B6%B3vs%E9%9F%A9%E5%9B%BD%23) `1.6M 🔥` `NEW`
1. [现在就出发4定档](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%E5%AE%9A%E6%A1%A3%23) `1.2M 🔥` `NEW`
1. [飞天奖提名发布会](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E5%A4%A9%E5%A5%96%E6%8F%90%E5%90%8D%E5%8F%91%E5%B8%83%E4%BC%9A%23) `1.2M 🔥` `NEW`
1. [亚运国足1比2韩国](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E5%9B%BD%E8%B6%B31%E6%AF%942%E9%9F%A9%E5%9B%BD%23) `847.7K 🔥` `NEW`
1. [陈芋汐一天要称十次体重](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%8A%8B%E6%B1%90%E4%B8%80%E5%A4%A9%E8%A6%81%E7%A7%B0%E5%8D%81%E6%AC%A1%E4%BD%93%E9%87%8D%23) `614.4K 🔥` `NEW`
1. [迪拜飞以色列航班疑遭劫持](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E9%A3%9E%E4%BB%A5%E8%89%B2%E5%88%97%E8%88%AA%E7%8F%AD%E7%96%91%E9%81%AD%E5%8A%AB%E6%8C%81%23) `602.1K 🔥` `NEW`
1. [韩国队 裁判](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%20%E8%A3%81%E5%88%A4%23) `560.6K 🔥` `NEW`
1. [文春曝张本智和私生活](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%98%A5%E6%9B%9D%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%A7%81%E7%94%9F%E6%B4%BB%23) `546.4K 🔥` `NEW`
1. [惠英红团队在巴黎被砸车抢劫](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E5%9B%A2%E9%98%9F%E5%9C%A8%E5%B7%B4%E9%BB%8E%E8%A2%AB%E7%A0%B8%E8%BD%A6%E6%8A%A2%E5%8A%AB%23) `543.7K 🔥` `NEW`
1. [飞天奖提名名单](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E5%A4%A9%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `479.6K 🔥` `NEW`
1. [刘欢妻子辟谣网传临终传闻后事图片](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%A6%BB%E5%AD%90%E8%BE%9F%E8%B0%A3%E7%BD%91%E4%BC%A0%E4%B8%B4%E7%BB%88%E4%BC%A0%E9%97%BB%E5%90%8E%E4%BA%8B%E5%9B%BE%E7%89%87%23) `474.1K 🔥` `NEW`
1. [这居然是林志玲](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%85%E7%84%B6%E6%98%AF%E6%9E%97%E5%BF%97%E7%8E%B2%23) `440.7K 🔥` `NEW`
1. [女装防拆带](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E9%98%B2%E6%8B%86%E5%B8%A6%23) `396.8K 🔥` `NEW`
1. [妙瓦底电诈园已发布招聘信息超9300则](https://s.weibo.com/weibo?q=%23%E5%A6%99%E7%93%A6%E5%BA%95%E7%94%B5%E8%AF%88%E5%9B%AD%E5%B7%B2%E5%8F%91%E5%B8%83%E6%8B%9B%E8%81%98%E4%BF%A1%E6%81%AF%E8%B6%859300%E5%88%99%23) `370.3K 🔥` `NEW`
1. [孙怡曾称没有和董子健彻底掰了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E6%9B%BE%E7%A7%B0%E6%B2%A1%E6%9C%89%E5%92%8C%E8%91%A3%E5%AD%90%E5%81%A5%E5%BD%BB%E5%BA%95%E6%8E%B0%E4%BA%86%23) `347.2K 🔥` `NEW`
1. [曝沙玥儿家庭正在干预她和赵希伦感情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B2%99%E7%8E%A5%E5%84%BF%E5%AE%B6%E5%BA%AD%E6%AD%A3%E5%9C%A8%E5%B9%B2%E9%A2%84%E5%A5%B9%E5%92%8C%E8%B5%B5%E5%B8%8C%E4%BC%A6%E6%84%9F%E6%83%85%23) `333.7K 🔥` `NEW`
1. [东方甄选回应劣质溜溜凳事件](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%9B%9E%E5%BA%94%E5%8A%A3%E8%B4%A8%E6%BA%9C%E6%BA%9C%E5%87%B3%E4%BA%8B%E4%BB%B6%23) `264.7K 🔥` `NEW`
1. [徐彬失误](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BD%AC%E5%A4%B1%E8%AF%AF%23) `264.6K 🔥` `NEW`
1. [官方通报13岁男孩被家长独留出租屋](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A513%E5%B2%81%E7%94%B7%E5%AD%A9%E8%A2%AB%E5%AE%B6%E9%95%BF%E7%8B%AC%E7%95%99%E5%87%BA%E7%A7%9F%E5%B1%8B%23) `259.7K 🔥` `NEW`
1. [东方航空通报空姐下跪道歉](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E8%88%AA%E7%A9%BA%E9%80%9A%E6%8A%A5%E7%A9%BA%E5%A7%90%E4%B8%8B%E8%B7%AA%E9%81%93%E6%AD%89%23) `258.3K 🔥` `NEW`
1. [25岁女画师约稿被骗4万后坠亡](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%A5%B3%E7%94%BB%E5%B8%88%E7%BA%A6%E7%A8%BF%E8%A2%AB%E9%AA%974%E4%B8%87%E5%90%8E%E5%9D%A0%E4%BA%A1%23) `254.5K 🔥` `NEW`
1. [胡歌陈龙都哭了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E9%99%88%E9%BE%99%E9%83%BD%E5%93%AD%E4%BA%86%23) `251.0K 🔥` `NEW`
1. [女子陪丈夫年薪五十万只是备选](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%99%AA%E4%B8%88%E5%A4%AB%E5%B9%B4%E8%96%AA%E4%BA%94%E5%8D%81%E4%B8%87%E5%8F%AA%E6%98%AF%E5%A4%87%E9%80%89%23) `250.5K 🔥` `NEW`
1. [文春 张本智和](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%98%A5%20%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `247.6K 🔥` `NEW`
1. [女子出月子发现吃到426斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%BA%E6%9C%88%E5%AD%90%E5%8F%91%E7%8E%B0%E5%90%83%E5%88%B0426%E6%96%A4%23) `243.4K 🔥` `NEW`
1. [饭后出现4个症状或是胃癌信号](https://s.weibo.com/weibo?q=%23%E9%A5%AD%E5%90%8E%E5%87%BA%E7%8E%B04%E4%B8%AA%E7%97%87%E7%8A%B6%E6%88%96%E6%98%AF%E8%83%83%E7%99%8C%E4%BF%A1%E5%8F%B7%23) `242.3K 🔥` `NEW`
1. [陈艺文获女子3米板金牌](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%89%BA%E6%96%87%E8%8E%B7%E5%A5%B3%E5%AD%903%E7%B1%B3%E6%9D%BF%E9%87%91%E7%89%8C%23) `241.6K 🔥` `NEW`
1. [游本昌去世前1个小时和孙女打视频](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%9C%AC%E6%98%8C%E5%8E%BB%E4%B8%96%E5%89%8D1%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%92%8C%E5%AD%99%E5%A5%B3%E6%89%93%E8%A7%86%E9%A2%91%23) `240.3K 🔥` `NEW`
1. [迪丽热巴编辑掉盛典活动](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BC%96%E8%BE%91%E6%8E%89%E7%9B%9B%E5%85%B8%E6%B4%BB%E5%8A%A8%23) `238.7K 🔥` `NEW`
1. [林诗栋发博总结亚运会](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E5%8F%91%E5%8D%9A%E6%80%BB%E7%BB%93%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `237.6K 🔥` `NEW`
1. [请3休13的人现在都到哪里了](https://s.weibo.com/weibo?q=%23%E8%AF%B73%E4%BC%9113%E7%9A%84%E4%BA%BA%E7%8E%B0%E5%9C%A8%E9%83%BD%E5%88%B0%E5%93%AA%E9%87%8C%E4%BA%86%23) `236.8K 🔥` `NEW`
1. [飞天奖颁奖典礼新闻发布会](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E5%A4%A9%E5%A5%96%E9%A2%81%E5%A5%96%E5%85%B8%E7%A4%BC%E6%96%B0%E9%97%BB%E5%8F%91%E5%B8%83%E4%BC%9A%23) `235.0K 🔥` `NEW`
1. [沙玥儿恋综巨婴](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%8E%A5%E5%84%BF%E6%81%8B%E7%BB%BC%E5%B7%A8%E5%A9%B4%23) `234.3K 🔥` `NEW`
1. [超8千人进群蹲Tiffany月饼后续](https://s.weibo.com/weibo?q=%23%E8%B6%858%E5%8D%83%E4%BA%BA%E8%BF%9B%E7%BE%A4%E8%B9%B2Tiffany%E6%9C%88%E9%A5%BC%E5%90%8E%E7%BB%AD%23) `233.5K 🔥` `NEW`
1. [柯淳升咖](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B7%B3%E5%8D%87%E5%92%96%23) `232.9K 🔥` `NEW`
1. [日本网红否认南京大屠杀](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E7%BA%A2%E5%90%A6%E8%AE%A4%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%23) `232.1K 🔥` `NEW`
1. [U23国足1比2落后韩国](https://s.weibo.com/weibo?q=%23U23%E5%9B%BD%E8%B6%B31%E6%AF%942%E8%90%BD%E5%90%8E%E9%9F%A9%E5%9B%BD%23) `210.8K 🔥` `NEW`
1. [拍摄者称空姐下跪道歉了两三次](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E6%91%84%E8%80%85%E7%A7%B0%E7%A9%BA%E5%A7%90%E4%B8%8B%E8%B7%AA%E9%81%93%E6%AD%89%E4%BA%86%E4%B8%A4%E4%B8%89%E6%AC%A1%23) `204.9K 🔥` `NEW`
1. [空姐下跪事发3天为何仍无官方回应](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E5%A7%90%E4%B8%8B%E8%B7%AA%E4%BA%8B%E5%8F%913%E5%A4%A9%E4%B8%BA%E4%BD%95%E4%BB%8D%E6%97%A0%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%23) `204.9K 🔥` `NEW`
1. [陈梦晒与邓亚萍合照](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A2%A6%E6%99%92%E4%B8%8E%E9%82%93%E4%BA%9A%E8%90%8D%E5%90%88%E7%85%A7%23) `203.7K 🔥` `NEW`
1. [金鹰二封视后的至今只有六位](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E4%BA%8C%E5%B0%81%E8%A7%86%E5%90%8E%E7%9A%84%E8%87%B3%E4%BB%8A%E5%8F%AA%E6%9C%89%E5%85%AD%E4%BD%8D%23) `203.5K 🔥` `NEW`
1. [曝拉塞尔签约上海男篮](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%8B%89%E5%A1%9E%E5%B0%94%E7%AD%BE%E7%BA%A6%E4%B8%8A%E6%B5%B7%E7%94%B7%E7%AF%AE%23) `198.8K 🔥` `NEW`
1. [宋佳距大满贯一步之遥](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E8%B7%9D%E5%A4%A7%E6%BB%A1%E8%B4%AF%E4%B8%80%E6%AD%A5%E4%B9%8B%E9%81%A5%23) `174.3K 🔥` `NEW`
1. [坠亡女画师一张画售250元](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%A5%B3%E7%94%BB%E5%B8%88%E4%B8%80%E5%BC%A0%E7%94%BB%E5%94%AE250%E5%85%83%23) `167.3K 🔥` `NEW`
1. [王钰栋攻破韩国队球门](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%92%B0%E6%A0%8B%E6%94%BB%E7%A0%B4%E9%9F%A9%E5%9B%BD%E9%98%9F%E7%90%83%E9%97%A8%23) `164.7K 🔥` `NEW`
1. [东方甄选道歉](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E9%81%93%E6%AD%89%23) `156.1K 🔥` `NEW`
1. [油车与电车没有对比就没有伤害](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E8%BD%A6%E4%B8%8E%E7%94%B5%E8%BD%A6%E6%B2%A1%E6%9C%89%E5%AF%B9%E6%AF%94%E5%B0%B1%E6%B2%A1%E6%9C%89%E4%BC%A4%E5%AE%B3%23) `154.6K 🔥` `NEW`

Updated at 2026-09-30 16:28:09

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
