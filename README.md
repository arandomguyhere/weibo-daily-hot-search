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

1. [新能源汽车月度新车销量占比首超60% (New energy vehicles accounted for more than 60% of monthly new car sales for the first time)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E6%9C%88%E5%BA%A6%E6%96%B0%E8%BD%A6%E9%94%80%E9%87%8F%E5%8D%A0%E6%AF%94%E9%A6%96%E8%B6%8560%25%23) `1.6M 🔥` `NEW`
1. [美国7月CPI数据](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD7%E6%9C%88CPI%E6%95%B0%E6%8D%AE%23) `501.7K 🔥` `NEW`
1. [我欲乘风](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `395.9K 🔥` `NEW`
1. [荣耀Magic9外观首曝](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80Magic9%E5%A4%96%E8%A7%82%E9%A6%96%E6%9B%9D%23) `395.7K 🔥` `NEW`
1. [任敏漂亮到不敢认](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E6%BC%82%E4%BA%AE%E5%88%B0%E4%B8%8D%E6%95%A2%E8%AE%A4%23) `395.1K 🔥` `NEW`
1. [时代峰峻招聘薪资](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%8B%9B%E8%81%98%E8%96%AA%E8%B5%84%23) `394.1K 🔥` `NEW`
1. [张睿 李若嘉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%20%E6%9D%8E%E8%8B%A5%E5%98%89%23) `393.6K 🔥` `NEW`
1. [两女子帮助黑人至中国幼儿园任教被判刑](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A5%B3%E5%AD%90%E5%B8%AE%E5%8A%A9%E9%BB%91%E4%BA%BA%E8%87%B3%E4%B8%AD%E5%9B%BD%E5%B9%BC%E5%84%BF%E5%9B%AD%E4%BB%BB%E6%95%99%E8%A2%AB%E5%88%A4%E5%88%91%23) `392.5K 🔥` `NEW`
1. [送礼要送有溢价的东西](https://s.weibo.com/weibo?q=%23%E9%80%81%E7%A4%BC%E8%A6%81%E9%80%81%E6%9C%89%E6%BA%A2%E4%BB%B7%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `392.3K 🔥` `NEW`
1. [方博止步瑞典大满贯首轮](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%8D%9A%E6%AD%A2%E6%AD%A5%E7%91%9E%E5%85%B8%E5%A4%A7%E6%BB%A1%E8%B4%AF%E9%A6%96%E8%BD%AE%23) `382.8K 🔥` `NEW`
1. [李雪健已抗癌26年 (Li Xuejian has been fighting cancer for 26 years)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E5%81%A5%E5%B7%B2%E6%8A%97%E7%99%8C26%E5%B9%B4%23) `374.1K 🔥` `NEW`
1. [荣耀RobotPhone价格](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80RobotPhone%E4%BB%B7%E6%A0%BC%23) `323.5K 🔥` `NEW`
1. [张新成直播取消](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E6%88%90%E7%9B%B4%E6%92%AD%E5%8F%96%E6%B6%88%23) `284.4K 🔥` `NEW`
1. [柳柳直播](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3%E7%9B%B4%E6%92%AD%23) `269.7K 🔥` `NEW`
1. [精密制造能力在机器人手机上具象化](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E5%AF%86%E5%88%B6%E9%80%A0%E8%83%BD%E5%8A%9B%E5%9C%A8%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%89%8B%E6%9C%BA%E4%B8%8A%E5%85%B7%E8%B1%A1%E5%8C%96%23) `245.7K 🔥` `NEW`
1. [英仙座流星雨](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BB%99%E5%BA%A7%E6%B5%81%E6%98%9F%E9%9B%A8%23) `240.2K 🔥` `NEW`
1. [幼童趁母亲熟睡爬到17楼窗外](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E8%B6%81%E6%AF%8D%E4%BA%B2%E7%86%9F%E7%9D%A1%E7%88%AC%E5%88%B017%E6%A5%BC%E7%AA%97%E5%A4%96%23) `230.9K 🔥` `NEW`
1. [郭兰英讣告](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%85%B0%E8%8B%B1%E8%AE%A3%E5%91%8A%23) `230.3K 🔥` `NEW`
1. [长期饥一顿饱一顿的受害者出现了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E9%A5%A5%E4%B8%80%E9%A1%BF%E9%A5%B1%E4%B8%80%E9%A1%BF%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `225.4K 🔥` `NEW`
1. [泰国失联女孩祁萌更新社媒](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%A4%B1%E8%81%94%E5%A5%B3%E5%AD%A9%E7%A5%81%E8%90%8C%E6%9B%B4%E6%96%B0%E7%A4%BE%E5%AA%92%23) `179.5K 🔥` `NEW`
1. [新闻联播 (news broadcast)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%97%BB%E8%81%94%E6%92%AD%23) `2.5M 🔥` `+807%`
1. [韩雨彤送考曾辉 (Han Yutong sends Zeng Hui to take exam)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E9%9B%A8%E5%BD%A4%E9%80%81%E8%80%83%E6%9B%BE%E8%BE%89%23) `474.3K 🔥` `+81%`
1. [江泽民同志诞辰100周年](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B3%BD%E6%B0%91%E5%90%8C%E5%BF%97%E8%AF%9E%E8%BE%B0100%E5%91%A8%E5%B9%B4%23) `394.8K 🔥` `+39%`
1. [张睿李若嘉在一起十年了 (Zhang Rui and Li Ruojia have been together for ten years)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%9D%8E%E8%8B%A5%E5%98%89%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%8D%81%E5%B9%B4%E4%BA%86%23) `392.0K 🔥` `+94%`
1. [一句中国台湾全场齐喊欢迎回家](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%A5%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%E5%85%A8%E5%9C%BA%E9%BD%90%E5%96%8A%E6%AC%A2%E8%BF%8E%E5%9B%9E%E5%AE%B6%23) `245.8K 🔥` `+26%`
1. [黄灿灿刷经纪人卡做了新美甲](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%88%B7%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%8D%A1%E5%81%9A%E4%BA%86%E6%96%B0%E7%BE%8E%E7%94%B2%23) `235.3K 🔥` `+31%`
1. [姜潮麦迪娜婚礼伴手礼](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E5%A9%9A%E7%A4%BC%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `229.3K 🔥` `+30%`
1. [B级满配家轿海豹06上市9.99万起 (B-class fully equipped family sedan Seal 06 launched starting at 99,900)](https://s.weibo.com/weibo?q=%23B%E7%BA%A7%E6%BB%A1%E9%85%8D%E5%AE%B6%E8%BD%BF%E6%B5%B7%E8%B1%B906%E4%B8%8A%E5%B8%829.99%E4%B8%87%E8%B5%B7%23) `1.4M 🔥`
1. [喜欢穿洞洞鞋的人天塌了 (People who like to wear Crocs are in trouble)](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `806.2K 🔥`
1. [李雪健已经完全听不见了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E5%81%A5%E5%B7%B2%E7%BB%8F%E5%AE%8C%E5%85%A8%E5%90%AC%E4%B8%8D%E8%A7%81%E4%BA%86%23) `395.5K 🔥`
1. [内娱今年仅12人上身大牌高定](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E4%BB%8A%E5%B9%B4%E4%BB%8512%E4%BA%BA%E4%B8%8A%E8%BA%AB%E5%A4%A7%E7%89%8C%E9%AB%98%E5%AE%9A%23) `394.5K 🔥`
1. [华人富豪全裸坠亡女友发声](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BA%BA%E5%AF%8C%E8%B1%AA%E5%85%A8%E8%A3%B8%E5%9D%A0%E4%BA%A1%E5%A5%B3%E5%8F%8B%E5%8F%91%E5%A3%B0%23) `394.0K 🔥`
1. [演唱会 11连坐 (Concert 11 consecutive seats)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%2011%E8%BF%9E%E5%9D%90%23) `393.4K 🔥`
1. [荣耀发布会](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E5%8F%91%E5%B8%83%E4%BC%9A%23) `393.0K 🔥`
1. [邵兵 退赛](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%85%B5%20%E9%80%80%E8%B5%9B%23) `392.7K 🔥`
1. [迪丽热巴偷偷打卡被监控拍到 (Dilireba secretly clocked in and was caught on camera)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%81%B7%E5%81%B7%E6%89%93%E5%8D%A1%E8%A2%AB%E7%9B%91%E6%8E%A7%E6%8B%8D%E5%88%B0%23) `376.6K 🔥`
1. [帮180斤女友减肥致死男子智力仅及格](https://s.weibo.com/weibo?q=%23%E5%B8%AE180%E6%96%A4%E5%A5%B3%E5%8F%8B%E5%87%8F%E8%82%A5%E8%87%B4%E6%AD%BB%E7%94%B7%E5%AD%90%E6%99%BA%E5%8A%9B%E4%BB%85%E5%8F%8A%E6%A0%BC%23) `264.8K 🔥`
1. [C罗宣布结婚 (Cristiano Ronaldo announces marriage)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `258.2K 🔥`
1. [丁禹兮回应脖子前倾](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%9B%9E%E5%BA%94%E8%84%96%E5%AD%90%E5%89%8D%E5%80%BE%23) `238.2K 🔥`
1. [邵兵回应退赛](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%85%B5%E5%9B%9E%E5%BA%94%E9%80%80%E8%B5%9B%23) `167.6K 🔥`
1. [留几手说娜扎比热巴好看 (Leave a few words to say that Nazha is prettier than Reba)](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E8%AF%B4%E5%A8%9C%E6%89%8E%E6%AF%94%E7%83%AD%E5%B7%B4%E5%A5%BD%E7%9C%8B%23) `166.2K 🔥`
1. [旅游了很多次才知道的事](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E4%BA%86%E5%BE%88%E5%A4%9A%E6%AC%A1%E6%89%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%23) `165.6K 🔥`
1. [朱镕基同志逝世 (Comrade Zhu Rongji passed away)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `4.3M 🔥` `-63%`
1. [微信群聊可以彻底关闭通知了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%BE%A4%E8%81%8A%E5%8F%AF%E4%BB%A5%E5%BD%BB%E5%BA%95%E5%85%B3%E9%97%AD%E9%80%9A%E7%9F%A5%E4%BA%86%23) `1.1M 🔥` `-48%`
1. [银行能办结婚证了](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `645.9K 🔥` `-40%`
1. [上半年全国结婚登记327.5万对](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0327.5%E4%B8%87%E5%AF%B9%23) `396.1K 🔥` `-53%`
1. [贾冰否认私人饭局爆粗口 (Jia Bing denies swearing during private dinner)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E5%86%B0%E5%90%A6%E8%AE%A4%E7%A7%81%E4%BA%BA%E9%A5%AD%E5%B1%80%E7%88%86%E7%B2%97%E5%8F%A3%23) `275.3K 🔥` `-27%`
1. [日全食 (total solar eclipse)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%85%A8%E9%A3%9F%23) `273.1K 🔥` `-39%`
1. [朱镕基同志永垂不朽](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E6%B0%B8%E5%9E%82%E4%B8%8D%E6%9C%BD%23) `247.2K 🔥` `-71%`
1. [社保实缴严查中 (Social security payment is under strict inspection)](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E5%AE%9E%E7%BC%B4%E4%B8%A5%E6%9F%A5%E4%B8%AD%23) `245.7K 🔥` `-60%`
1. [网传小S主持声生不息宝岛季](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%B0%8FS%E4%B8%BB%E6%8C%81%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E5%AE%9D%E5%B2%9B%E5%AD%A3%23) `166.6K 🔥` `-35%`

Updated at 2026-08-12 21:13:54

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
