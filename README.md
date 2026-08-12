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

1. [60万亿元消费蓝海要来了 (The 60 trillion yuan consumption blue ocean is coming)](https://s.weibo.com/weibo?q=%2360%E4%B8%87%E4%BA%BF%E5%85%83%E6%B6%88%E8%B4%B9%E8%93%9D%E6%B5%B7%E8%A6%81%E6%9D%A5%E4%BA%86%23) `1.7M 🔥` `NEW`
1. [这个暑假玩点啥](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E6%9A%91%E5%81%87%E7%8E%A9%E7%82%B9%E5%95%A5%23) `844.2K 🔥` `NEW`
1. [内娱今年仅12人上身大牌高定](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E4%BB%8A%E5%B9%B4%E4%BB%8512%E4%BA%BA%E4%B8%8A%E8%BA%AB%E5%A4%A7%E7%89%8C%E9%AB%98%E5%AE%9A%23) `436.9K 🔥` `NEW`
1. [天宫送你一份宇宙级浪漫](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%AB%E9%80%81%E4%BD%A0%E4%B8%80%E4%BB%BD%E5%AE%87%E5%AE%99%E7%BA%A7%E6%B5%AA%E6%BC%AB%23) `419.5K 🔥` `NEW`
1. [迪丽热巴偷偷打卡被监控拍到](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%81%B7%E5%81%B7%E6%89%93%E5%8D%A1%E8%A2%AB%E7%9B%91%E6%8E%A7%E6%8B%8D%E5%88%B0%23) `386.2K 🔥` `NEW`
1. [荣耀发布会](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E5%8F%91%E5%B8%83%E4%BC%9A%23) `337.1K 🔥` `NEW`
1. [胚胎案原配否认花5万给狗庆生](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E5%90%A6%E8%AE%A4%E8%8A%B15%E4%B8%87%E7%BB%99%E7%8B%97%E5%BA%86%E7%94%9F%23) `296.6K 🔥` `NEW`
1. [新闻联播](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%97%BB%E8%81%94%E6%92%AD%23) `280.6K 🔥` `NEW`
1. [荣耀RobotPhone拉高手机影像天花板](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80RobotPhone%E6%8B%89%E9%AB%98%E6%89%8B%E6%9C%BA%E5%BD%B1%E5%83%8F%E5%A4%A9%E8%8A%B1%E6%9D%BF%23) `210.3K 🔥` `NEW`
1. [一句中国台湾全场齐喊欢迎回家](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%A5%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%E5%85%A8%E5%9C%BA%E9%BD%90%E5%96%8A%E6%AC%A2%E8%BF%8E%E5%9B%9E%E5%AE%B6%23) `195.1K 🔥` `NEW`
1. [有了AI后开车终于不会无聊了 (With AI, driving will no longer be boring.)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%86AI%E5%90%8E%E5%BC%80%E8%BD%A6%E7%BB%88%E4%BA%8E%E4%B8%8D%E4%BC%9A%E6%97%A0%E8%81%8A%E4%BA%86%23) `188.8K 🔥` `NEW`
1. [曝春楠偷税漏税](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%98%A5%E6%A5%A0%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23) `184.7K 🔥` `NEW`
1. [王者新赛季新英雄即将揭晓](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E8%B5%9B%E5%AD%A3%E6%96%B0%E8%8B%B1%E9%9B%84%E5%8D%B3%E5%B0%86%E6%8F%AD%E6%99%93%23) `159.7K 🔥` `NEW`
1. [多地向新婚夫妇发消费券](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%90%91%E6%96%B0%E5%A9%9A%E5%A4%AB%E5%A6%87%E5%8F%91%E6%B6%88%E8%B4%B9%E5%88%B8%23) `157.7K 🔥` `NEW`
1. [开封一2岁女童目睹母亲外婆被杀](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B0%81%E4%B8%802%E5%B2%81%E5%A5%B3%E7%AB%A5%E7%9B%AE%E7%9D%B9%E6%AF%8D%E4%BA%B2%E5%A4%96%E5%A9%86%E8%A2%AB%E6%9D%80%23) `155.9K 🔥` `NEW`
1. [微信群聊可以彻底关闭通知了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%BE%A4%E8%81%8A%E5%8F%AF%E4%BB%A5%E5%BD%BB%E5%BA%95%E5%85%B3%E9%97%AD%E9%80%9A%E7%9F%A5%E4%BA%86%23) `2.2M 🔥` `+169%`
1. [B级满配家轿海豹06上市9.99万起 (B-class fully equipped family sedan Seal 06 launched starting at 99,900)](https://s.weibo.com/weibo?q=%23B%E7%BA%A7%E6%BB%A1%E9%85%8D%E5%AE%B6%E8%BD%BF%E6%B5%B7%E8%B1%B906%E4%B8%8A%E5%B8%829.99%E4%B8%87%E8%B5%B7%23) `1.4M 🔥` `+111%`
1. [银行能办结婚证了](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `1.1M 🔥` `+182%`
1. [朱镕基同志永垂不朽](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E6%B0%B8%E5%9E%82%E4%B8%8D%E6%9C%BD%23) `841.2K 🔥` `+61%`
1. [朱镕基同志享年98岁](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E4%BA%AB%E5%B9%B498%E5%B2%81%23) `612.8K 🔥` `+27%`
1. [喜欢穿洞洞鞋的人天塌了 (People who like to wear Crocs are in trouble)](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `844.2K 🔥`
1. [日全食 (total solar eclipse)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%85%A8%E9%A3%9F%23) `448.3K 🔥`
1. [李雪健已经完全听不见了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E5%81%A5%E5%B7%B2%E7%BB%8F%E5%AE%8C%E5%85%A8%E5%90%AC%E4%B8%8D%E8%A7%81%E4%BA%86%23) `439.4K 🔥`
1. [演唱会 11连坐 (Concert 11 consecutive seats)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%2011%E8%BF%9E%E5%9D%90%23) `414.9K 🔥`
1. [邵兵 退赛](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%85%B5%20%E9%80%80%E8%B5%9B%23) `404.2K 🔥`
1. [华人富豪全裸坠亡女友发声](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BA%BA%E5%AF%8C%E8%B1%AA%E5%85%A8%E8%A3%B8%E5%9D%A0%E4%BA%A1%E5%A5%B3%E5%8F%8B%E5%8F%91%E5%A3%B0%23) `398.2K 🔥`
1. [帮180斤女友减肥致死男子智力仅及格](https://s.weibo.com/weibo?q=%23%E5%B8%AE180%E6%96%A4%E5%A5%B3%E5%8F%8B%E5%87%8F%E8%82%A5%E8%87%B4%E6%AD%BB%E7%94%B7%E5%AD%90%E6%99%BA%E5%8A%9B%E4%BB%85%E5%8F%8A%E6%A0%BC%23) `267.8K 🔥`
1. [网传小S主持声生不息宝岛季](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%B0%8FS%E4%B8%BB%E6%8C%81%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E5%AE%9D%E5%B2%9B%E5%AD%A3%23) `257.9K 🔥`
1. [为什么方便面又好卖了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%96%B9%E4%BE%BF%E9%9D%A2%E5%8F%88%E5%A5%BD%E5%8D%96%E4%BA%86%23) `212.8K 🔥`
1. [朱镕基同志逝世 (Comrade Zhu Rongji passed away)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `11.9M 🔥` `-39%`
1. [上半年全国结婚登记327.5万对](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0327.5%E4%B8%87%E5%AF%B9%23) `844.6K 🔥` `-60%`
1. [社保实缴严查中 (Social security payment is under strict inspection)](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E5%AE%9E%E7%BC%B4%E4%B8%A5%E6%9F%A5%E4%B8%AD%23) `611.0K 🔥` `-21%`
1. [贾冰否认私人饭局爆粗口 (Jia Bing denies swearing during private dinner)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E5%86%B0%E5%90%A6%E8%AE%A4%E7%A7%81%E4%BA%BA%E9%A5%AD%E5%B1%80%E7%88%86%E7%B2%97%E5%8F%A3%23) `379.1K 🔥` `-21%`
1. [姆巴佩签约中国品牌 (Mbappe signs with Chinese brand)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%AD%BE%E7%BA%A6%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%23) `298.8K 🔥` `-24%`
1. [丁禹兮回应脖子前倾](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%9B%9E%E5%BA%94%E8%84%96%E5%AD%90%E5%89%8D%E5%80%BE%23) `291.5K 🔥` `-39%`
1. [江泽民同志诞辰100周年](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B3%BD%E6%B0%91%E5%90%8C%E5%BF%97%E8%AF%9E%E8%BE%B0100%E5%91%A8%E5%B9%B4%23) `283.7K 🔥` `-22%`
1. [C罗宣布结婚 (Cristiano Ronaldo announces marriage)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `277.8K 🔥` `-43%`
1. [活力数据感知经济发展稳进好](https://s.weibo.com/weibo?q=%23%E6%B4%BB%E5%8A%9B%E6%95%B0%E6%8D%AE%E6%84%9F%E7%9F%A5%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%B1%95%E7%A8%B3%E8%BF%9B%E5%A5%BD%23) `272.7K 🔥` `-83%`
1. [韩雨彤送考曾辉 (Han Yutong sends Zeng Hui to take exam)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E9%9B%A8%E5%BD%A4%E9%80%81%E8%80%83%E6%9B%BE%E8%BE%89%23) `262.1K 🔥` `-33%`
1. [留几手说娜扎比热巴好看 (Leave a few words to say that Nazha is prettier than Reba)](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E8%AF%B4%E5%A8%9C%E6%89%8E%E6%AF%94%E7%83%AD%E5%B7%B4%E5%A5%BD%E7%9C%8B%23) `208.4K 🔥` `-53%`
1. [旅游了很多次才知道的事](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E4%BA%86%E5%BE%88%E5%A4%9A%E6%AC%A1%E6%89%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%23) `207.0K 🔥` `-56%`
1. [原来姚安娜是艺名](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A7%9A%E5%AE%89%E5%A8%9C%E6%98%AF%E8%89%BA%E5%90%8D%23) `203.7K 🔥` `-58%`
1. [张睿李若嘉在一起十年了 (Zhang Rui and Li Ruojia have been together for ten years)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%9D%8E%E8%8B%A5%E5%98%89%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%8D%81%E5%B9%B4%E4%BA%86%23) `202.6K 🔥` `-26%`
1. [20岁的林徽因在北京真实样貌](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E7%9A%84%E6%9E%97%E5%BE%BD%E5%9B%A0%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%9C%9F%E5%AE%9E%E6%A0%B7%E8%B2%8C%23) `198.0K 🔥` `-57%`
1. [邵兵回应退赛](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%85%B5%E5%9B%9E%E5%BA%94%E9%80%80%E8%B5%9B%23) `197.4K 🔥` `-58%`
1. [时代峰峻在招聘了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9C%A8%E6%8B%9B%E8%81%98%E4%BA%86%23) `191.1K 🔥` `-48%`
1. [有车以后才明白的道理](https://s.weibo.com/weibo?q=%23%E6%9C%89%E8%BD%A6%E4%BB%A5%E5%90%8E%E6%89%8D%E6%98%8E%E7%99%BD%E7%9A%84%E9%81%93%E7%90%86%23) `185.4K 🔥` `-47%`
1. [黄灿灿刷经纪人卡做了新美甲](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%88%B7%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%8D%A1%E5%81%9A%E4%BA%86%E6%96%B0%E7%BE%8E%E7%94%B2%23) `180.3K 🔥` `-42%`
1. [公司不收门票已经是一种福利了吗](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E4%B8%8D%E6%94%B6%E9%97%A8%E7%A5%A8%E5%B7%B2%E7%BB%8F%E6%98%AF%E4%B8%80%E7%A7%8D%E7%A6%8F%E5%88%A9%E4%BA%86%E5%90%97%23) `177.8K 🔥` `-35%`
1. [姜潮麦迪娜婚礼伴手礼](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E5%A9%9A%E7%A4%BC%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `176.3K 🔥` `-62%`
1. [腾讯自由现金流 (Tencent free cash flow)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E8%87%AA%E7%94%B1%E7%8E%B0%E9%87%91%E6%B5%81%23) `174.9K 🔥` `-63%`
1. [张雅琪 中餐厅存在感 (Zhang Yaqi Chinese restaurant presence)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E4%B8%AD%E9%A4%90%E5%8E%85%E5%AD%98%E5%9C%A8%E6%84%9F%23) `160.3K 🔥` `-30%`

Updated at 2026-08-12 19:55:43

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
