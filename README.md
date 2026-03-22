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

1. [重庆大学通报实验室爆炸致伤亡 (Chongqing University reports laboratory explosion causing casualties)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%88%86%E7%82%B8%E8%87%B4%E4%BC%A4%E4%BA%A1%23) `1.1M 🔥` `NEW`
1. [今天世界水日](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E4%B8%96%E7%95%8C%E6%B0%B4%E6%97%A5%23) `628.9K 🔥` `NEW`
1. [希林娜依高回应伯克利没毕业](https://s.weibo.com/weibo?q=%23%E5%B8%8C%E6%9E%97%E5%A8%9C%E4%BE%9D%E9%AB%98%E5%9B%9E%E5%BA%94%E4%BC%AF%E5%85%8B%E5%88%A9%E6%B2%A1%E6%AF%95%E4%B8%9A%23) `317.6K 🔥` `NEW`
1. [逐玉反盗版声明](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%8F%8D%E7%9B%97%E7%89%88%E5%A3%B0%E6%98%8E%23) `249.9K 🔥` `NEW`
1. [高市早苗访美照片遭日本网友怒喷](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%AE%BF%E7%BE%8E%E7%85%A7%E7%89%87%E9%81%AD%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E6%80%92%E5%96%B7%23) `248.0K 🔥` `NEW`
1. [逐玉 超点](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E8%B6%85%E7%82%B9%23) `244.5K 🔥` `NEW`
1. [伊朗回应特朗普袭击电厂威胁](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E8%A2%AD%E5%87%BB%E7%94%B5%E5%8E%82%E5%A8%81%E8%83%81%23) `232.0K 🔥` `NEW`
1. [杜兰特超越乔丹位列历史得分榜第五](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B9%E8%B6%85%E8%B6%8A%E4%B9%94%E4%B8%B9%E4%BD%8D%E5%88%97%E5%8E%86%E5%8F%B2%E5%BE%97%E5%88%86%E6%A6%9C%E7%AC%AC%E4%BA%94%23) `231.3K 🔥` `NEW`
1. [逐玉的兵 不贪盗版](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%9A%84%E5%85%B5%20%E4%B8%8D%E8%B4%AA%E7%9B%97%E7%89%88%23) `224.7K 🔥` `NEW`
1. [张佳宁说单眼皮因拍戏变不回来了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BD%B3%E5%AE%81%E8%AF%B4%E5%8D%95%E7%9C%BC%E7%9A%AE%E5%9B%A0%E6%8B%8D%E6%88%8F%E5%8F%98%E4%B8%8D%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `221.1K 🔥` `NEW`
1. [新疆一处沙漠惊现沙尘豹 (Sand leopard suddenly appears in Xinjiang desert)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E4%B8%80%E5%A4%84%E6%B2%99%E6%BC%A0%E6%83%8A%E7%8E%B0%E6%B2%99%E5%B0%98%E8%B1%B9%23) `219.3K 🔥` `NEW`
1. [刘宇宁直播麻药劲还没过](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%E9%BA%BB%E8%8D%AF%E5%8A%B2%E8%BF%98%E6%B2%A1%E8%BF%87%23) `214.2K 🔥` `NEW`
1. [逐玉 盗版没弹幕快乐少一半](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E7%9B%97%E7%89%88%E6%B2%A1%E5%BC%B9%E5%B9%95%E5%BF%AB%E4%B9%90%E5%B0%91%E4%B8%80%E5%8D%8A%23) `208.8K 🔥` `NEW`
1. [吃到了上学时独来独往的红利](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%88%B0%E4%BA%86%E4%B8%8A%E5%AD%A6%E6%97%B6%E7%8B%AC%E6%9D%A5%E7%8B%AC%E5%BE%80%E7%9A%84%E7%BA%A2%E5%88%A9%23) `207.0K 🔥` `NEW`
1. [腾讯视频收集逐玉盗版线索](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91%E6%94%B6%E9%9B%86%E9%80%90%E7%8E%89%E7%9B%97%E7%89%88%E7%BA%BF%E7%B4%A2%23) `194.7K 🔥` `NEW`
1. [挟猫妈以令诸咪](https://s.weibo.com/weibo?q=%23%E6%8C%9F%E7%8C%AB%E5%A6%88%E4%BB%A5%E4%BB%A4%E8%AF%B8%E5%92%AA%23) `161.6K 🔥` `NEW`
1. [在家吃饭可以懒到什么程度](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%AE%B6%E5%90%83%E9%A5%AD%E5%8F%AF%E4%BB%A5%E6%87%92%E5%88%B0%E4%BB%80%E4%B9%88%E7%A8%8B%E5%BA%A6%23) `143.7K 🔥` `NEW`
1. [水原希子鞋子广告](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E5%8E%9F%E5%B8%8C%E5%AD%90%E9%9E%8B%E5%AD%90%E5%B9%BF%E5%91%8A%23) `143.2K 🔥` `NEW`
1. [梅姨假装答应同居老人领证后失联](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%81%87%E8%A3%85%E7%AD%94%E5%BA%94%E5%90%8C%E5%B1%85%E8%80%81%E4%BA%BA%E9%A2%86%E8%AF%81%E5%90%8E%E5%A4%B1%E8%81%94%23) `142.0K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `140.6K 🔥` `NEW`
1. [中国变压器全球爆火 (Chinese transformers explode globally)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8F%98%E5%8E%8B%E5%99%A8%E5%85%A8%E7%90%83%E7%88%86%E7%81%AB%23) `121.8K 🔥` `NEW`
1. [肯纳德三分绝杀](https://s.weibo.com/weibo?q=%23%E8%82%AF%E7%BA%B3%E5%BE%B7%E4%B8%89%E5%88%86%E7%BB%9D%E6%9D%80%23) `116.2K 🔥` `NEW`
1. [张元英水手服](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E6%B0%B4%E6%89%8B%E6%9C%8D%23) `102.5K 🔥` `NEW`
1. [歌手演唱时被辱骂用话筒打人](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%BC%94%E5%94%B1%E6%97%B6%E8%A2%AB%E8%BE%B1%E9%AA%82%E7%94%A8%E8%AF%9D%E7%AD%92%E6%89%93%E4%BA%BA%23) `99.5K 🔥` `NEW`
1. [伊朗16艘货船遭美以袭击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%9716%E8%89%98%E8%B4%A7%E8%88%B9%E9%81%AD%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%23) `97.9K 🔥` `NEW`
1. [被拐男孩称梅姨眼神是童年噩梦](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%8B%90%E7%94%B7%E5%AD%A9%E7%A7%B0%E6%A2%85%E5%A7%A8%E7%9C%BC%E7%A5%9E%E6%98%AF%E7%AB%A5%E5%B9%B4%E5%99%A9%E6%A2%A6%23) `97.2K 🔥` `NEW`
1. [油价或重回9元时代](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%88%96%E9%87%8D%E5%9B%9E9%E5%85%83%E6%97%B6%E4%BB%A3%23) `95.0K 🔥` `NEW`
1. [薛之谦机器人](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `94.5K 🔥` `NEW`
1. [苏州95后董事长高能量的一天](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E95%E5%90%8E%E8%91%A3%E4%BA%8B%E9%95%BF%E9%AB%98%E8%83%BD%E9%87%8F%E7%9A%84%E4%B8%80%E5%A4%A9%23) `91.1K 🔥` `NEW`
1. [羽毛球大降价](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E6%AF%9B%E7%90%83%E5%A4%A7%E9%99%8D%E4%BB%B7%23) `79.6K 🔥` `NEW`
1. [伊朗超预期反击 (Iran counterattacks beyond expectations)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%B6%85%E9%A2%84%E6%9C%9F%E5%8F%8D%E5%87%BB%23) `76.1K 🔥` `NEW`
1. [孔雪儿深夜发长文谈俞浅浅](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E6%B7%B1%E5%A4%9C%E5%8F%91%E9%95%BF%E6%96%87%E8%B0%88%E4%BF%9E%E6%B5%85%E6%B5%85%23) `76.1K 🔥` `NEW`
1. [贺峻霖半夜还在找桃花币](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%8D%8A%E5%A4%9C%E8%BF%98%E5%9C%A8%E6%89%BE%E6%A1%83%E8%8A%B1%E5%B8%81%23) `74.9K 🔥` `NEW`
1. [武汉马拉松下起樱花雨](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E9%A9%AC%E6%8B%89%E6%9D%BE%E4%B8%8B%E8%B5%B7%E6%A8%B1%E8%8A%B1%E9%9B%A8%23) `71.4K 🔥` `NEW`
1. [消防员医护结婚领证尾号119遇120](https://s.weibo.com/weibo?q=%23%E6%B6%88%E9%98%B2%E5%91%98%E5%8C%BB%E6%8A%A4%E7%BB%93%E5%A9%9A%E9%A2%86%E8%AF%81%E5%B0%BE%E5%8F%B7119%E9%81%87120%23) `71.0K 🔥` `NEW`
1. [去伊犁赴一场杏花之约](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E4%BC%8A%E7%8A%81%E8%B5%B4%E4%B8%80%E5%9C%BA%E6%9D%8F%E8%8A%B1%E4%B9%8B%E7%BA%A6%23) `70.4K 🔥` `NEW`
1. [美以停止侵略行为才能结束战争](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E5%81%9C%E6%AD%A2%E4%BE%B5%E7%95%A5%E8%A1%8C%E4%B8%BA%E6%89%8D%E8%83%BD%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%23) `69.7K 🔥` `NEW`
1. [湖人战胜魔术](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E6%88%98%E8%83%9C%E9%AD%94%E6%9C%AF%23) `67.6K 🔥` `NEW`
1. [G2天涯6比0](https://s.weibo.com/weibo?q=%23G2%E5%A4%A9%E6%B6%AF6%E6%AF%940%23) `67.0K 🔥` `NEW`
1. [同居老人称梅姨常带不同的孩子回家](https://s.weibo.com/weibo?q=%23%E5%90%8C%E5%B1%85%E8%80%81%E4%BA%BA%E7%A7%B0%E6%A2%85%E5%A7%A8%E5%B8%B8%E5%B8%A6%E4%B8%8D%E5%90%8C%E7%9A%84%E5%AD%A9%E5%AD%90%E5%9B%9E%E5%AE%B6%23) `66.3K 🔥` `NEW`
1. [一群人野餐不商量能吃到什么 (When a group of people have a picnic, they don’t discuss what they can eat.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BE%A4%E4%BA%BA%E9%87%8E%E9%A4%90%E4%B8%8D%E5%95%86%E9%87%8F%E8%83%BD%E5%90%83%E5%88%B0%E4%BB%80%E4%B9%88%23) `63.9K 🔥` `NEW`
1. [伊朗导弹袭击以核设施附近城市](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BB%A5%E6%A0%B8%E8%AE%BE%E6%96%BD%E9%99%84%E8%BF%91%E5%9F%8E%E5%B8%82%23) `60.2K 🔥` `NEW`
1. [男子因睡眠呼吸暂停1年撞坏3辆车](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E7%9D%A1%E7%9C%A0%E5%91%BC%E5%90%B8%E6%9A%82%E5%81%9C1%E5%B9%B4%E6%92%9E%E5%9D%8F3%E8%BE%86%E8%BD%A6%23) `253.6K 🔥` `+362%`
1. [鹿晗 关晓彤 (Lu Han Guan Xiaotong)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `139.2K 🔥` `+46%`
1. [男子醉酒摸女孩胸部被高中生制服 (Drunk man touched girl's breast and was restrained by high school student)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%86%89%E9%85%92%E6%91%B8%E5%A5%B3%E5%AD%A9%E8%83%B8%E9%83%A8%E8%A2%AB%E9%AB%98%E4%B8%AD%E7%94%9F%E5%88%B6%E6%9C%8D%23) `137.3K 🔥` `+53%`
1. [女子制售自拍淫秽视频获刑3年 (Woman sentenced to 3 years in prison for producing and selling self-made obscene videos)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%88%B6%E5%94%AE%E8%87%AA%E6%8B%8D%E6%B7%AB%E7%A7%BD%E8%A7%86%E9%A2%91%E8%8E%B7%E5%88%913%E5%B9%B4%23) `137.1K 🔥` `+21%`
1. [齐旻卑微跪求俞浅浅当他皇后](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%97%BB%E5%8D%91%E5%BE%AE%E8%B7%AA%E6%B1%82%E4%BF%9E%E6%B5%85%E6%B5%85%E5%BD%93%E4%BB%96%E7%9A%87%E5%90%8E%23) `80.6K 🔥`
1. [梅姨到哪也不出示身份证 (Aunt Mei never shows her ID card wherever she goes.)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%88%B0%E5%93%AA%E4%B9%9F%E4%B8%8D%E5%87%BA%E7%A4%BA%E8%BA%AB%E4%BB%BD%E8%AF%81%23) `749.3K 🔥` `-29%`
1. [男子反对加装电梯后反悔遭全楼反对](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%8D%E5%AF%B9%E5%8A%A0%E8%A3%85%E7%94%B5%E6%A2%AF%E5%90%8E%E5%8F%8D%E6%82%94%E9%81%AD%E5%85%A8%E6%A5%BC%E5%8F%8D%E5%AF%B9%23) `174.3K 🔥` `-56%`
1. [当年亲爱的热爱的被泄漏反创新高 (Back then, my dear love was leaked and set a new high)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%B9%B4%E4%BA%B2%E7%88%B1%E7%9A%84%E7%83%AD%E7%88%B1%E7%9A%84%E8%A2%AB%E6%B3%84%E6%BC%8F%E5%8F%8D%E5%88%9B%E6%96%B0%E9%AB%98%23) `71.3K 🔥` `-52%`

Updated at 2026-03-22 11:17:01

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
