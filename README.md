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

1. [上海突发强雷暴 (Severe thunderstorm breaks out in Shanghai)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%AA%81%E5%8F%91%E5%BC%BA%E9%9B%B7%E6%9A%B4%23) `1.1M 🔥` `NEW`
1. [曝BLG签约新上单](https://s.weibo.com/weibo?q=%23%E6%9B%9DBLG%E7%AD%BE%E7%BA%A6%E6%96%B0%E4%B8%8A%E5%8D%95%23) `660.4K 🔥` `NEW`
1. [人机大战世界杯终极预言](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%9C%BA%E5%A4%A7%E6%88%98%E4%B8%96%E7%95%8C%E6%9D%AF%E7%BB%88%E6%9E%81%E9%A2%84%E8%A8%80%23) `562.8K 🔥` `NEW`
1. [情侣裸睡遭陌生人闯入酒店拒道歉](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E8%A3%B8%E7%9D%A1%E9%81%AD%E9%99%8C%E7%94%9F%E4%BA%BA%E9%97%AF%E5%85%A5%E9%85%92%E5%BA%97%E6%8B%92%E9%81%93%E6%AD%89%23) `406.6K 🔥` `NEW`
1. [全国乒乓球锦标赛](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E4%B9%92%E4%B9%93%E7%90%83%E9%94%A6%E6%A0%87%E8%B5%9B%23) `383.1K 🔥` `NEW`
1. [姆巴佩说我们也是人](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%AF%B4%E6%88%91%E4%BB%AC%E4%B9%9F%E6%98%AF%E4%BA%BA%23) `336.5K 🔥` `NEW`
1. [这一秒过火强吻好尬](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%BC%BA%E5%90%BB%E5%A5%BD%E5%B0%AC%23) `336.5K 🔥` `NEW`
1. [唐嫣紧身衣身材](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E7%B4%A7%E8%BA%AB%E8%A1%A3%E8%BA%AB%E6%9D%90%23) `336.5K 🔥` `NEW`
1. [贝林厄姆在女友与哈兰德身边对比](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E5%9C%A8%E5%A5%B3%E5%8F%8B%E4%B8%8E%E5%93%88%E5%85%B0%E5%BE%B7%E8%BA%AB%E8%BE%B9%E5%AF%B9%E6%AF%94%23) `336.5K 🔥` `NEW`
1. [旭旭宝宝回应言论争议](https://s.weibo.com/weibo?q=%23%E6%97%AD%E6%97%AD%E5%AE%9D%E5%AE%9D%E5%9B%9E%E5%BA%94%E8%A8%80%E8%AE%BA%E4%BA%89%E8%AE%AE%23) `336.4K 🔥` `NEW`
1. [马斯克宣称要赶超Kimi (Musk claims to catch up with Kimi)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%AE%A3%E7%A7%B0%E8%A6%81%E8%B5%B6%E8%B6%85Kimi%23) `336.4K 🔥` `NEW`
1. [日本惹怒俄罗斯](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%83%B9%E6%80%92%E4%BF%84%E7%BD%97%E6%96%AF%23) `336.4K 🔥` `NEW`
1. [王橹杰说回来突围](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%AF%B4%E5%9B%9E%E6%9D%A5%E7%AA%81%E5%9B%B4%23) `336.4K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `336.3K 🔥` `NEW`
1. [张凌赫逐玉质感](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%90%E7%8E%89%E8%B4%A8%E6%84%9F%23) `250.3K 🔥` `NEW`
1. [其实减肥是越减越轻松的](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E5%87%8F%E8%82%A5%E6%98%AF%E8%B6%8A%E5%87%8F%E8%B6%8A%E8%BD%BB%E6%9D%BE%E7%9A%84%23) `248.9K 🔥` `NEW`
1. [灿如繁星大结局](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E5%A4%A7%E7%BB%93%E5%B1%80%23) `240.5K 🔥` `NEW`
1. [迪丽热巴路演去广州和珠海](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B7%AF%E6%BC%94%E5%8E%BB%E5%B9%BF%E5%B7%9E%E5%92%8C%E7%8F%A0%E6%B5%B7%23) `210.8K 🔥` `NEW`
1. [才发现上班其实很省钱](https://s.weibo.com/weibo?q=%23%E6%89%8D%E5%8F%91%E7%8E%B0%E4%B8%8A%E7%8F%AD%E5%85%B6%E5%AE%9E%E5%BE%88%E7%9C%81%E9%92%B1%23) `209.0K 🔥` `NEW`
1. [Bin或轮换](https://s.weibo.com/weibo?q=%23Bin%E6%88%96%E8%BD%AE%E6%8D%A2%23) `197.0K 🔥` `NEW`
1. [重庆山体崩塌属大型崩塌 (Chongqing mountain collapse is a large-scale collapse)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%E5%B1%9E%E5%A4%A7%E5%9E%8B%E5%B4%A9%E5%A1%8C%23) `184.7K 🔥` `NEW`
1. [穆祉丞手捧红玫瑰](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%89%8B%E6%8D%A7%E7%BA%A2%E7%8E%AB%E7%91%B0%23) `183.6K 🔥` `NEW`
1. [赵樱子每月给父母3000元生活费](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90%E6%AF%8F%E6%9C%88%E7%BB%99%E7%88%B6%E6%AF%8D3000%E5%85%83%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `163.1K 🔥` `NEW`
1. [马来西亚宣布驱逐所有以色列人](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E5%AE%A3%E5%B8%83%E9%A9%B1%E9%80%90%E6%89%80%E6%9C%89%E4%BB%A5%E8%89%B2%E5%88%97%E4%BA%BA%23) `157.4K 🔥` `NEW`
1. [王俊凯这个升key](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%BF%99%E4%B8%AA%E5%8D%87key%23) `157.1K 🔥` `NEW`
1. [三问生父被控性侵案二审反转](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%97%AE%E7%94%9F%E7%88%B6%E8%A2%AB%E6%8E%A7%E6%80%A7%E4%BE%B5%E6%A1%88%E4%BA%8C%E5%AE%A1%E5%8F%8D%E8%BD%AC%23) `152.3K 🔥` `NEW`
1. [弟弟将高位截瘫姐姐抱起来康复训练](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E5%B0%86%E9%AB%98%E4%BD%8D%E6%88%AA%E7%98%AB%E5%A7%90%E5%A7%90%E6%8A%B1%E8%B5%B7%E6%9D%A5%E5%BA%B7%E5%A4%8D%E8%AE%AD%E7%BB%83%23) `151.5K 🔥` `NEW`
1. [旭旭宝宝遭谩骂委屈吗](https://s.weibo.com/weibo?q=%23%E6%97%AD%E6%97%AD%E5%AE%9D%E5%AE%9D%E9%81%AD%E8%B0%A9%E9%AA%82%E5%A7%94%E5%B1%88%E5%90%97%23) `141.6K 🔥` `NEW`
1. [这一秒过火口碑](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%8F%A3%E7%A2%91%23) `139.4K 🔥` `NEW`
1. [存钱过万一定要办理纸质存单](https://s.weibo.com/weibo?q=%23%E5%AD%98%E9%92%B1%E8%BF%87%E4%B8%87%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8A%9E%E7%90%86%E7%BA%B8%E8%B4%A8%E5%AD%98%E5%8D%95%23) `681.8K 🔥` `+371%`
1. [田曦薇演黑帮大佬的威慑力 (Tian Xiwei's intimidating power as a gangster)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%BC%94%E9%BB%91%E5%B8%AE%E5%A4%A7%E4%BD%AC%E7%9A%84%E5%A8%81%E6%85%91%E5%8A%9B%23) `439.3K 🔥` `+179%`
1. [官俊臣疑似回应考上重庆大学 (Guan Junchen suspected of being admitted to Chongqing University)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E8%80%83%E4%B8%8A%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%23) `336.4K 🔥` `+23%`
1. [世界两大AI组织都是狠角色](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%A4%E5%A4%A7AI%E7%BB%84%E7%BB%87%E9%83%BD%E6%98%AF%E7%8B%A0%E8%A7%92%E8%89%B2%23) `336.4K 🔥` `+93%`
1. [女子戴2年牙齿保持器停戴1周反弹](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%88%B42%E5%B9%B4%E7%89%99%E9%BD%BF%E4%BF%9D%E6%8C%81%E5%99%A8%E5%81%9C%E6%88%B41%E5%91%A8%E5%8F%8D%E5%BC%B9%23) `336.3K 🔥` `+94%`
1. [我国多领域硬核成果密集上新](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%A4%9A%E9%A2%86%E5%9F%9F%E7%A1%AC%E6%A0%B8%E6%88%90%E6%9E%9C%E5%AF%86%E9%9B%86%E4%B8%8A%E6%96%B0%23) `688.9K 🔥`
1. [现在有的老人连车都打不到](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%9C%89%E7%9A%84%E8%80%81%E4%BA%BA%E8%BF%9E%E8%BD%A6%E9%83%BD%E6%89%93%E4%B8%8D%E5%88%B0%23) `593.7K 🔥`
1. [虞书欣泉州簪花](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%B3%89%E5%B7%9E%E7%B0%AA%E8%8A%B1%23) `336.3K 🔥`
1. [国乒 断层危机](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E6%96%AD%E5%B1%82%E5%8D%B1%E6%9C%BA%23) `327.6K 🔥`
1. [黄灿灿的状态不像演的](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E7%9A%84%E7%8A%B6%E6%80%81%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `172.3K 🔥`
1. [孙颖莎是怎么限制袁励岑的](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%98%AF%E6%80%8E%E4%B9%88%E9%99%90%E5%88%B6%E8%A2%81%E5%8A%B1%E5%B2%91%E7%9A%84%23) `160.6K 🔥`
1. [人一旦开始用AI后](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E5%BC%80%E5%A7%8B%E7%94%A8AI%E5%90%8E%23) `140.2K 🔥`
1. [雷军祝贺赖斯世界杯首粒进球 (Lei Jun congratulates Rice on his first World Cup goal)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A5%9D%E8%B4%BA%E8%B5%96%E6%96%AF%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E7%B2%92%E8%BF%9B%E7%90%83%23) `139.4K 🔥`
1. [这一秒过火 红果亦是果 (This second went too far, the red fruit is also a fruit)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E7%BA%A2%E6%9E%9C%E4%BA%A6%E6%98%AF%E6%9E%9C%23) `831.8K 🔥` `-42%`
1. [阿根廷夺冠概率40%](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%A4%BA%E5%86%A0%E6%A6%82%E7%8E%8740%25%23) `336.5K 🔥` `-39%`
1. [当我坐飞机忘记关导航时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E5%9D%90%E9%A3%9E%E6%9C%BA%E5%BF%98%E8%AE%B0%E5%85%B3%E5%AF%BC%E8%88%AA%E6%97%B6%23) `214.7K 🔥` `-71%`
1. [那个从来都不喝水的朋友](https://s.weibo.com/weibo?q=%23%E9%82%A3%E4%B8%AA%E4%BB%8E%E6%9D%A5%E9%83%BD%E4%B8%8D%E5%96%9D%E6%B0%B4%E7%9A%84%E6%9C%8B%E5%8F%8B%23) `201.4K 🔥` `-71%`
1. [苏州暴雨](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E%E6%9A%B4%E9%9B%A8%23) `191.6K 🔥` `-42%`
1. [这一秒过火 AI片头](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20AI%E7%89%87%E5%A4%B4%23) `190.6K 🔥` `-30%`
1. [马龙许昕3比0林高远袁烜松](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%953%E6%AF%940%E6%9E%97%E9%AB%98%E8%BF%9C%E8%A2%81%E7%83%9C%E6%9D%BE%23) `168.2K 🔥` `-67%`
1. [这一秒过火 短剧感 (This second went too far, it felt like a short drama)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E7%9F%AD%E5%89%A7%E6%84%9F%23) `165.7K 🔥` `-69%`
1. [伊朗直接掀了桌子](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9B%B4%E6%8E%A5%E6%8E%80%E4%BA%86%E6%A1%8C%E5%AD%90%23) `139.5K 🔥` `-31%`

Updated at 2026-07-19 18:35:25

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
