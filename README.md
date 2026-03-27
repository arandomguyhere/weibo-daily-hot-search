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

1. [4500元冲锋衣被湿巾擦坏仅赔278元 (A 4,500 yuan jacket was damaged by a wet wipe and only 278 yuan was paid.)](https://s.weibo.com/weibo?q=%234500%E5%85%83%E5%86%B2%E9%94%8B%E8%A1%A3%E8%A2%AB%E6%B9%BF%E5%B7%BE%E6%93%A6%E5%9D%8F%E4%BB%85%E8%B5%94278%E5%85%83%23) `776.9K 🔥` `NEW`
1. [保留奔跑吧艺人剩菜店家道歉](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%95%99%E5%A5%94%E8%B7%91%E5%90%A7%E8%89%BA%E4%BA%BA%E5%89%A9%E8%8F%9C%E5%BA%97%E5%AE%B6%E9%81%93%E6%AD%89%23) `267.8K 🔥` `NEW`
1. [国足赢了世界杯球队](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E8%B5%A2%E4%BA%86%E4%B8%96%E7%95%8C%E6%9D%AF%E7%90%83%E9%98%9F%23) `264.6K 🔥` `NEW`
1. [中共中央政治局3月27日召开会议](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%85%B1%E4%B8%AD%E5%A4%AE%E6%94%BF%E6%B2%BB%E5%B1%803%E6%9C%8827%E6%97%A5%E5%8F%AC%E5%BC%80%E4%BC%9A%E8%AE%AE%23) `252.8K 🔥` `NEW`
1. [洛克王国世界第一只炫彩](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%E5%8F%AA%E7%82%AB%E5%BD%A9%23) `201.7K 🔥` `NEW`
1. [男子脑出血后夜晚对着空荡墙角说话](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%84%91%E5%87%BA%E8%A1%80%E5%90%8E%E5%A4%9C%E6%99%9A%E5%AF%B9%E7%9D%80%E7%A9%BA%E8%8D%A1%E5%A2%99%E8%A7%92%E8%AF%B4%E8%AF%9D%23) `137.1K 🔥` `NEW`
1. [王一博微博改名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BE%AE%E5%8D%9A%E6%94%B9%E5%90%8D%23) `134.2K 🔥` `NEW`
1. [刘昊然 商K](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%20%E5%95%86K%23) `133.0K 🔥` `NEW`
1. [女子手指截肢放肚里养1个月变小肉球](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%8B%E6%8C%87%E6%88%AA%E8%82%A2%E6%94%BE%E8%82%9A%E9%87%8C%E5%85%BB1%E4%B8%AA%E6%9C%88%E5%8F%98%E5%B0%8F%E8%82%89%E7%90%83%23) `131.0K 🔥` `NEW`
1. [王一博乐华续约](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B9%90%E5%8D%8E%E7%BB%AD%E7%BA%A6%23) `114.8K 🔥` `NEW`
1. [昆凌旧照 看完理解周杰伦了 (After reading Kunling’s old photos, I now understand Jay Chou)](https://s.weibo.com/weibo?q=%23%E6%98%86%E5%87%8C%E6%97%A7%E7%85%A7%20%E7%9C%8B%E5%AE%8C%E7%90%86%E8%A7%A3%E5%91%A8%E6%9D%B0%E4%BC%A6%E4%BA%86%23) `114.3K 🔥` `NEW`
1. [香港一夜之间赢麻了](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E4%B8%80%E5%A4%9C%E4%B9%8B%E9%97%B4%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `111.6K 🔥` `NEW`
1. [拍摄郭麒麟私人聚会视频已违法](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E6%91%84%E9%83%AD%E9%BA%92%E9%BA%9F%E7%A7%81%E4%BA%BA%E8%81%9A%E4%BC%9A%E8%A7%86%E9%A2%91%E5%B7%B2%E8%BF%9D%E6%B3%95%23) `111.4K 🔥` `NEW`
1. [挑了半天的衣服老爸一穿上就仅退款](https://s.weibo.com/weibo?q=%23%E6%8C%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E7%9A%84%E8%A1%A3%E6%9C%8D%E8%80%81%E7%88%B8%E4%B8%80%E7%A9%BF%E4%B8%8A%E5%B0%B1%E4%BB%85%E9%80%80%E6%AC%BE%23) `111.3K 🔥` `NEW`
1. [国足赚5.51积分](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E8%B5%9A5.51%E7%A7%AF%E5%88%86%23) `110.8K 🔥` `NEW`
1. [金价还会猛跌吗](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%BF%98%E4%BC%9A%E7%8C%9B%E8%B7%8C%E5%90%97%23) `110.7K 🔥` `NEW`
1. [王橹杰新手机壳是天使](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%96%B0%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%98%AF%E5%A4%A9%E4%BD%BF%23) `99.0K 🔥` `NEW`
1. [华虹半导体拟更名](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%99%B9%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%8B%9F%E6%9B%B4%E5%90%8D%23) `97.1K 🔥` `NEW`
1. [迪丽热巴陈飞宇吃同一块葱油饼](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E5%90%83%E5%90%8C%E4%B8%80%E5%9D%97%E8%91%B1%E6%B2%B9%E9%A5%BC%23) `96.0K 🔥` `NEW`
1. [吴京回应水肿](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E5%9B%9E%E5%BA%94%E6%B0%B4%E8%82%BF%23) `94.2K 🔥` `NEW`
1. [特朗普称与伊朗谈判顺利 (Trump says talks with Iran are going well)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%B8%8E%E4%BC%8A%E6%9C%97%E8%B0%88%E5%88%A4%E9%A1%BA%E5%88%A9%23) `90.3K 🔥` `NEW`
1. [中国平安 利润](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B9%B3%E5%AE%89%20%E5%88%A9%E6%B6%A6%23) `78.0K 🔥` `NEW`
1. [乒乓球澳门世界杯](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E6%BE%B3%E9%97%A8%E4%B8%96%E7%95%8C%E6%9D%AF%23) `75.3K 🔥` `NEW`
1. [孙颖莎出发澳门世界杯](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%87%BA%E5%8F%91%E6%BE%B3%E9%97%A8%E4%B8%96%E7%95%8C%E6%9D%AF%23) `72.7K 🔥` `NEW`
1. [大脑或用临终30秒为你放映一生](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%84%91%E6%88%96%E7%94%A8%E4%B8%B4%E7%BB%8830%E7%A7%92%E4%B8%BA%E4%BD%A0%E6%94%BE%E6%98%A0%E4%B8%80%E7%94%9F%23) `71.0K 🔥` `NEW`
1. [花2块钱坐公交坐出了航班的感觉](https://s.weibo.com/weibo?q=%23%E8%8A%B12%E5%9D%97%E9%92%B1%E5%9D%90%E5%85%AC%E4%BA%A4%E5%9D%90%E5%87%BA%E4%BA%86%E8%88%AA%E7%8F%AD%E7%9A%84%E6%84%9F%E8%A7%89%23) `69.6K 🔥` `NEW`
1. [罗云熙为陈瑶打call](https://s.weibo.com/weibo?q=%23%E7%BD%97%E4%BA%91%E7%86%99%E4%B8%BA%E9%99%88%E7%91%B6%E6%89%93call%23) `68.5K 🔥` `NEW`
1. [店家回应留奔跑吧明星剩饭](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%AE%B6%E5%9B%9E%E5%BA%94%E7%95%99%E5%A5%94%E8%B7%91%E5%90%A7%E6%98%8E%E6%98%9F%E5%89%A9%E9%A5%AD%23) `367.3K 🔥` `+32%`
1. [中国博士后遭美方约谈盘问后自杀](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8D%9A%E5%A3%AB%E5%90%8E%E9%81%AD%E7%BE%8E%E6%96%B9%E7%BA%A6%E8%B0%88%E7%9B%98%E9%97%AE%E5%90%8E%E8%87%AA%E6%9D%80%23) `353.1K 🔥` `+88%`
1. [余华定居三亚 (Yu Hua settled in Sanya)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%8D%8E%E5%AE%9A%E5%B1%85%E4%B8%89%E4%BA%9A%23) `253.2K 🔥` `+24%`
1. [巴西女子杀死性侵女儿男子被判无罪](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%A5%B3%E5%AD%90%E6%9D%80%E6%AD%BB%E6%80%A7%E4%BE%B5%E5%A5%B3%E5%84%BF%E7%94%B7%E5%AD%90%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%23) `247.9K 🔥` `+136%`
1. [乘风2026定档 (Chengfeng 2026 scheduled)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%AE%9A%E6%A1%A3%23) `230.9K 🔥` `+25%`
1. [阚清子说浪姐强度大要养好身体 (Kan Qingzi said that Sister Lang is very strong and needs to take good care of her body.)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%AF%B4%E6%B5%AA%E5%A7%90%E5%BC%BA%E5%BA%A6%E5%A4%A7%E8%A6%81%E5%85%BB%E5%A5%BD%E8%BA%AB%E4%BD%93%23) `196.6K 🔥` `+73%`
1. [乘风2026官宣阵容 (Chengfeng 2026 official lineup announced)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%AE%98%E5%AE%A3%E9%98%B5%E5%AE%B9%23) `1.1M 🔥`
1. [海南自贸港封关运作100天 (Hainan Free Trade Port closed for 100 days)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8D%97%E8%87%AA%E8%B4%B8%E6%B8%AF%E5%B0%81%E5%85%B3%E8%BF%90%E4%BD%9C100%E5%A4%A9%23) `617.9K 🔥`
1. [张凌赫回应逐玉大结局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E9%80%90%E7%8E%89%E5%A4%A7%E7%BB%93%E5%B1%80%23) `262.4K 🔥`
1. [王濛 浪姐](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E6%B5%AA%E5%A7%90%23) `209.6K 🔥`
1. [宁波男子网贷60万打赏女主播确诊生病](https://s.weibo.com/weibo?q=%23%E5%AE%81%E6%B3%A2%E7%94%B7%E5%AD%90%E7%BD%91%E8%B4%B760%E4%B8%87%E6%89%93%E8%B5%8F%E5%A5%B3%E4%B8%BB%E6%92%AD%E7%A1%AE%E8%AF%8A%E7%94%9F%E7%97%85%23) `137.2K 🔥`
1. [Naiyou终身禁赛](https://s.weibo.com/weibo?q=%23Naiyou%E7%BB%88%E8%BA%AB%E7%A6%81%E8%B5%9B%23) `230.5K 🔥` `-48%`
1. [熬夜的人要多吃一类食物](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E7%9A%84%E4%BA%BA%E8%A6%81%E5%A4%9A%E5%90%83%E4%B8%80%E7%B1%BB%E9%A3%9F%E7%89%A9%23) `154.5K 🔥` `-22%`
1. [曾沛慈终于上浪姐了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%BB%88%E4%BA%8E%E4%B8%8A%E6%B5%AA%E5%A7%90%E4%BA%86%23) `152.0K 🔥` `-53%`
1. [刘海宽拒绝吃陈情令老本](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%B7%E5%AE%BD%E6%8B%92%E7%BB%9D%E5%90%83%E9%99%88%E6%83%85%E4%BB%A4%E8%80%81%E6%9C%AC%23) `130.1K 🔥` `-32%`
1. [郭麒麟对接回应KTV传闻](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%E5%AF%B9%E6%8E%A5%E5%9B%9E%E5%BA%94KTV%E4%BC%A0%E9%97%BB%23) `128.8K 🔥` `-37%`
1. [相亲型社交](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E4%BA%B2%E5%9E%8B%E7%A4%BE%E4%BA%A4%23) `116.4K 🔥` `-61%`
1. [乘风2026师姐帮帮唱 (Chengfeng 2026 senior sister helps sing)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%B8%88%E5%A7%90%E5%B8%AE%E5%B8%AE%E5%94%B1%23) `113.5K 🔥` `-29%`
1. [文淇都敢演这段戏了](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%E9%83%BD%E6%95%A2%E6%BC%94%E8%BF%99%E6%AE%B5%E6%88%8F%E4%BA%86%23) `89.7K 🔥` `-26%`
1. [时团要和跑男对抗撕名牌了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%9B%A2%E8%A6%81%E5%92%8C%E8%B7%91%E7%94%B7%E5%AF%B9%E6%8A%97%E6%92%95%E5%90%8D%E7%89%8C%E4%BA%86%23) `82.0K 🔥` `-22%`
1. [严浩翔新专概念视频](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E4%B8%93%E6%A6%82%E5%BF%B5%E8%A7%86%E9%A2%91%23) `76.7K 🔥` `-27%`
1. [孔雪儿壁纸是cortis (Kong Xueer wallpaper is cortis)](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E5%A3%81%E7%BA%B8%E6%98%AFcortis%23) `72.1K 🔥` `-42%`

Updated at 2026-03-27 17:36:44

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
