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

1. [姆巴佩金靴 (Mbappe golden boots)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%87%91%E9%9D%B4%23) `5.1M 🔥` `NEW`
1. [西班牙夺冠含金量太高了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%BA%E5%86%A0%E5%90%AB%E9%87%91%E9%87%8F%E5%A4%AA%E9%AB%98%E4%BA%86%23) `3.5M 🔥` `NEW`
1. [西班牙阿根廷赛后打起来了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%B5%9B%E5%90%8E%E6%89%93%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `3.2M 🔥` `NEW`
1. [罗德里获世界杯金球奖](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%BE%B7%E9%87%8C%E8%8E%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E9%87%91%E7%90%83%E5%A5%96%23) `2.7M 🔥` `NEW`
1. [阿根廷全员落寞](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%85%A8%E5%91%98%E8%90%BD%E5%AF%9E%23) `2.6M 🔥` `NEW`
1. [金球奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%90%83%E5%A5%96%23) `2.6M 🔥` `NEW`
1. [特朗普为西班牙颁奖](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%BA%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A2%81%E5%A5%96%23) `2.5M 🔥` `NEW`
1. [夏奇拉好美](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A5%87%E6%8B%89%E5%A5%BD%E7%BE%8E%23) `2.5M 🔥` `NEW`
1. [苏醒恭喜西班牙队](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E6%81%AD%E5%96%9C%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%9F%23) `2.5M 🔥` `NEW`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `2.4M 🔥` `NEW`
1. [四年又四年 (Four years and four years)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B9%B4%E5%8F%88%E5%9B%9B%E5%B9%B4%23) `2.4M 🔥` `NEW`
1. [坦克300献给都市年轻人的脚办](https://s.weibo.com/weibo?q=%23%E5%9D%A6%E5%85%8B300%E7%8C%AE%E7%BB%99%E9%83%BD%E5%B8%82%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E8%84%9A%E5%8A%9E%23) `2.4M 🔥` `NEW`
1. [佛得角含金量](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%90%AB%E9%87%91%E9%87%8F%23) `2.3M 🔥` `NEW`
1. [孩子攀爬公园幕布家长全程旁观](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E6%94%80%E7%88%AC%E5%85%AC%E5%9B%AD%E5%B9%95%E5%B8%83%E5%AE%B6%E9%95%BF%E5%85%A8%E7%A8%8B%E6%97%81%E8%A7%82%23) `2.3M 🔥` `NEW`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `2.2M 🔥` `NEW`
1. [阿根廷队哭了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E5%93%AD%E4%BA%86%23) `2.2M 🔥` `NEW`
1. [动物园回应非洲狮坐三蹦子通勤](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E7%89%A9%E5%9B%AD%E5%9B%9E%E5%BA%94%E9%9D%9E%E6%B4%B2%E7%8B%AE%E5%9D%90%E4%B8%89%E8%B9%A6%E5%AD%90%E9%80%9A%E5%8B%A4%23) `2.2M 🔥` `NEW`
1. [男子回应花3000元带两台空调飞巴黎](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E8%8A%B13000%E5%85%83%E5%B8%A6%E4%B8%A4%E5%8F%B0%E7%A9%BA%E8%B0%83%E9%A3%9E%E5%B7%B4%E9%BB%8E%23) `2.2M 🔥` `NEW`
1. [樊振东祝贺西班牙夺冠](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%A5%9D%E8%B4%BA%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%BA%E5%86%A0%23) `2.2M 🔥` `NEW`
1. [陈靖可回应虞书欣化妆](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9D%96%E5%8F%AF%E5%9B%9E%E5%BA%94%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8C%96%E5%A6%86%23) `2.2M 🔥` `NEW`
1. [王源深圳演唱会彩蛋 (Wang Yuan Shenzhen concert easter egg)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%B7%B1%E5%9C%B3%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BD%A9%E8%9B%8B%23) `2.1M 🔥` `NEW`
1. [帕雷德斯赛后染红](https://s.weibo.com/weibo?q=%23%E5%B8%95%E9%9B%B7%E5%BE%B7%E6%96%AF%E8%B5%9B%E5%90%8E%E6%9F%93%E7%BA%A2%23) `2.1M 🔥` `NEW`
1. [世界杯最新冠军榜](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E6%96%B0%E5%86%A0%E5%86%9B%E6%A6%9C%23) `2.1M 🔥` `NEW`
1. [天文台辟谣新疆阿勒泰惊现UFO](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%96%87%E5%8F%B0%E8%BE%9F%E8%B0%A3%E6%96%B0%E7%96%86%E9%98%BF%E5%8B%92%E6%B3%B0%E6%83%8A%E7%8E%B0UFO%23) `2.7M 🔥` `+444%`
1. [澎湖海战 撤档](https://s.weibo.com/weibo?q=%23%E6%BE%8E%E6%B9%96%E6%B5%B7%E6%88%98%20%E6%92%A4%E6%A1%A3%23) `2.7M 🔥` `+1672%`
1. [来不及说我爱你 (Too late to say I love you)](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E4%B8%8D%E5%8F%8A%E8%AF%B4%E6%88%91%E7%88%B1%E4%BD%A0%23) `2.7M 🔥` `+2629%`
1. [西班牙阿根廷冲突](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%86%B2%E7%AA%81%23) `2.6M 🔥` `+136%`
1. [世界杯中场秀 不转播](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9C%BA%E7%A7%80%20%E4%B8%8D%E8%BD%AC%E6%92%AD%23) `2.6M 🔥` `+21%`
1. [特朗普摸大力神杯](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%91%B8%E5%A4%A7%E5%8A%9B%E7%A5%9E%E6%9D%AF%23) `2.6M 🔥` `+289%`
1. [劝告大家聊天记录真不能删除 (I advise you not to delete chat history.)](https://s.weibo.com/weibo?q=%23%E5%8A%9D%E5%91%8A%E5%A4%A7%E5%AE%B6%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E7%9C%9F%E4%B8%8D%E8%83%BD%E5%88%A0%E9%99%A4%23) `2.6M 🔥` `+501%`
1. [王源演唱会上座率 (Wang Yuan’s concert attendance rate)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `2.5M 🔥` `+3577%`
1. [阿根廷 拿不到球 (Argentina can't get the ball)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E6%8B%BF%E4%B8%8D%E5%88%B0%E7%90%83%23) `2.5M 🔥` `+53%`
1. [男子闪婚后发现妻子吸毒坐牢患梅毒](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%97%AA%E5%A9%9A%E5%90%8E%E5%8F%91%E7%8E%B0%E5%A6%BB%E5%AD%90%E5%90%B8%E6%AF%92%E5%9D%90%E7%89%A2%E6%82%A3%E6%A2%85%E6%AF%92%23) `2.5M 🔥` `+842%`
1. [王一博你让多少人脸红了 (Wang Yibo, how many people have you made blush?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BD%A0%E8%AE%A9%E5%A4%9A%E5%B0%91%E4%BA%BA%E8%84%B8%E7%BA%A2%E4%BA%86%23) `2.5M 🔥` `+1098%`
1. [美国打伊朗越打越尴尬](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%89%93%E4%BC%8A%E6%9C%97%E8%B6%8A%E6%89%93%E8%B6%8A%E5%B0%B4%E5%B0%AC%23) `2.4M 🔥` `+724%`
1. [蔡依林唱心引力送给王俊凯 (Jolin Tsai sings "Gravity" to Wang Junkai)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%94%B1%E5%BF%83%E5%BC%95%E5%8A%9B%E9%80%81%E7%BB%99%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `2.4M 🔥` `+4291%`
1. [马龙许昕男双冠军](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E7%94%B7%E5%8F%8C%E5%86%A0%E5%86%9B%23) `2.4M 🔥` `+691%`
1. [西班牙玄学 对手伤退](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%8E%84%E5%AD%A6%20%E5%AF%B9%E6%89%8B%E4%BC%A4%E9%80%80%23) `2.4M 🔥` `+221%`
1. [西班牙1比0阿根廷](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%991%E6%AF%940%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `2.3M 🔥` `+123%`
1. [BTS世界杯中场秀](https://s.weibo.com/weibo?q=%23BTS%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9C%BA%E7%A7%80%23) `2.3M 🔥` `+859%`
1. [阿根廷90分钟0射门](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B790%E5%88%86%E9%92%9F0%E5%B0%84%E9%97%A8%23) `2.3M 🔥` `+224%`
1. [西班牙阿根廷加时赛](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%8A%A0%E6%97%B6%E8%B5%9B%23) `2.3M 🔥` `+44%`
1. [再诱人也别碰的十大街边小吃](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%AF%B1%E4%BA%BA%E4%B9%9F%E5%88%AB%E7%A2%B0%E7%9A%84%E5%8D%81%E5%A4%A7%E8%A1%97%E8%BE%B9%E5%B0%8F%E5%90%83%23) `2.3M 🔥` `+1469%`
1. [阿根廷被西班牙压着打](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A2%AB%E8%A5%BF%E7%8F%AD%E7%89%99%E5%8E%8B%E7%9D%80%E6%89%93%23) `2.2M 🔥` `+121%`
1. [世界杯中场秀 (world cup halftime show)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9C%BA%E7%A7%80%23) `2.1M 🔥` `+207%`
1. [西班牙冠军 (spanish champion)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%86%A0%E5%86%9B%23) `18.7M 🔥`
1. [大马丁 门神降临阿根廷](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A9%AC%E4%B8%81%20%E9%97%A8%E7%A5%9E%E9%99%8D%E4%B8%B4%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `2.3M 🔥`
1. [走读汕头的侨乡家国情 (Read about the national conditions of overseas Chinese in Shantou)](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E8%AF%BB%E6%B1%95%E5%A4%B4%E7%9A%84%E4%BE%A8%E4%B9%A1%E5%AE%B6%E5%9B%BD%E6%83%85%23) `4.0M 🔥` `-35%`
1. [恩佐两黄变一红](https://s.weibo.com/weibo?q=%23%E6%81%A9%E4%BD%90%E4%B8%A4%E9%BB%84%E5%8F%98%E4%B8%80%E7%BA%A2%23) `2.7M 🔥` `-51%`
1. [劳塔罗不上了](https://s.weibo.com/weibo?q=%23%E5%8A%B3%E5%A1%94%E7%BD%97%E4%B8%8D%E4%B8%8A%E4%BA%86%23) `2.6M 🔥` `-30%`
1. [西班牙vs阿根廷 (Spain vs Argentina)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99vs%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `2.5M 🔥` `-77%`

Updated at 2026-07-20 07:32:09

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
