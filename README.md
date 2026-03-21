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

1. [逐玉 泄露 (Zhuyu leaked)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E6%B3%84%E9%9C%B2%23) `11.2M 🔥` `NEW`
1. [狼队对战AG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98AG%23) `257.3K 🔥` `NEW`
1. [你好星期六预告](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E9%A2%84%E5%91%8A%23) `256.1K 🔥` `NEW`
1. [逐玉大结局](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%A4%A7%E7%BB%93%E5%B1%80%23) `204.2K 🔥` `NEW`
1. [11岁男孩脸肿竟是肿瘤骨头断了](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E7%94%B7%E5%AD%A9%E8%84%B8%E8%82%BF%E7%AB%9F%E6%98%AF%E8%82%BF%E7%98%A4%E9%AA%A8%E5%A4%B4%E6%96%AD%E4%BA%86%23) `190.0K 🔥` `NEW`
1. [逐玉 删戏份](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%88%A0%E6%88%8F%E4%BB%BD%23) `184.1K 🔥` `NEW`
1. [逐玉 爱奇艺](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E7%88%B1%E5%A5%87%E8%89%BA%23) `176.5K 🔥` `NEW`
1. [逐玉 一天一集果然会出事](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E4%B8%80%E5%A4%A9%E4%B8%80%E9%9B%86%E6%9E%9C%E7%84%B6%E4%BC%9A%E5%87%BA%E4%BA%8B%23) `168.7K 🔥` `NEW`
1. [迪丽热巴新经纪人疑似回应入职嘉行](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%96%B0%E7%BB%8F%E7%BA%AA%E4%BA%BA%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E5%85%A5%E8%81%8C%E5%98%89%E8%A1%8C%23) `158.5K 🔥` `NEW`
1. [PUBG](https://s.weibo.com/weibo?q=%23PUBG%23) `143.0K 🔥` `NEW`
1. [陈飞宇被热巴扑倒幕后花絮 (Behind-the-scenes footage of Chen Feiyu being knocked down by Reba)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E8%A2%AB%E7%83%AD%E5%B7%B4%E6%89%91%E5%80%92%E5%B9%95%E5%90%8E%E8%8A%B1%E7%B5%AE%23) `110.2K 🔥` `NEW`
1. [帮助梅姨案家属的记者去世了](https://s.weibo.com/weibo?q=%23%E5%B8%AE%E5%8A%A9%E6%A2%85%E5%A7%A8%E6%A1%88%E5%AE%B6%E5%B1%9E%E7%9A%84%E8%AE%B0%E8%80%85%E5%8E%BB%E4%B8%96%E4%BA%86%23) `94.2K 🔥` `NEW`
1. [董洁说90斤不敢上称](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%B4%81%E8%AF%B490%E6%96%A4%E4%B8%8D%E6%95%A2%E4%B8%8A%E7%A7%B0%23) `93.4K 🔥` `NEW`
1. [谢霆锋朋友圈步数第一](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%AD%A5%E6%95%B0%E7%AC%AC%E4%B8%80%23) `93.2K 🔥` `NEW`
1. [女子久坐头晕牵出电商报告造假黑幕](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%85%E5%9D%90%E5%A4%B4%E6%99%95%E7%89%B5%E5%87%BA%E7%94%B5%E5%95%86%E6%8A%A5%E5%91%8A%E9%80%A0%E5%81%87%E9%BB%91%E5%B9%95%23) `93.1K 🔥` `NEW`
1. [田柾国开场](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9F%BE%E5%9B%BD%E5%BC%80%E5%9C%BA%23) `93.1K 🔥` `NEW`
1. [丈夫凌晨3点打鼾被妻子肘击打醒](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%87%8C%E6%99%A83%E7%82%B9%E6%89%93%E9%BC%BE%E8%A2%AB%E5%A6%BB%E5%AD%90%E8%82%98%E5%87%BB%E6%89%93%E9%86%92%23) `71.8K 🔥` `NEW`
1. [日本女足1比0澳大利亚女足](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E8%B6%B31%E6%AF%940%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E5%A5%B3%E8%B6%B3%23) `70.4K 🔥` `NEW`
1. [日本女足夺得亚洲杯冠军](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E8%B6%B3%E5%A4%BA%E5%BE%97%E4%BA%9A%E6%B4%B2%E6%9D%AF%E5%86%A0%E5%86%9B%23) `69.8K 🔥` `NEW`
1. [这段话杀死了我的精神内耗 (This sentence killed my inner spirit)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E7%B2%BE%E7%A5%9E%E5%86%85%E8%80%97%23) `180.2K 🔥` `+30%`
1. [梅姨曾与60多岁老人同居2年 (Aunt Mei once lived with an old man in his 60s for 2 years)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%9B%BE%E4%B8%8E60%E5%A4%9A%E5%B2%81%E8%80%81%E4%BA%BA%E5%90%8C%E5%B1%852%E5%B9%B4%23) `158.8K 🔥` `+37%`
1. [阿娇的邪修减肥法是刷牙](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A8%87%E7%9A%84%E9%82%AA%E4%BF%AE%E5%87%8F%E8%82%A5%E6%B3%95%E6%98%AF%E5%88%B7%E7%89%99%23) `158.5K 🔥` `+91%`
1. [梅姨被逮捕 (Aunt May was arrested)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%A2%AB%E9%80%AE%E6%8D%95%23) `1.1M 🔥`
1. [警方曾释放梅姨不存在的信号 (The police once released a signal that Aunt May did not exist)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E6%9B%BE%E9%87%8A%E6%94%BE%E6%A2%85%E5%A7%A8%E4%B8%8D%E5%AD%98%E5%9C%A8%E7%9A%84%E4%BF%A1%E5%8F%B7%23) `780.7K 🔥`
1. [总会被一棵树的张力震撼到 (I will always be shocked by the tension of a tree)](https://s.weibo.com/weibo?q=%23%E6%80%BB%E4%BC%9A%E8%A2%AB%E4%B8%80%E6%A3%B5%E6%A0%91%E7%9A%84%E5%BC%A0%E5%8A%9B%E9%9C%87%E6%92%BC%E5%88%B0%23) `629.6K 🔥`
1. [东风日产NX8大大大五座SUV预售 (Dongfeng Nissan NX8 five-seater SUV pre-sale)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%A3%8E%E6%97%A5%E4%BA%A7NX8%E5%A4%A7%E5%A4%A7%E5%A4%A7%E4%BA%94%E5%BA%A7SUV%E9%A2%84%E5%94%AE%23) `625.9K 🔥`
1. [老师为什么能发现家长签名是假的](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E4%B8%BA%E4%BB%80%E4%B9%88%E8%83%BD%E5%8F%91%E7%8E%B0%E5%AE%B6%E9%95%BF%E7%AD%BE%E5%90%8D%E6%98%AF%E5%81%87%E7%9A%84%23) `164.5K 🔥`
1. [鹿晗 关晓彤 (Lu Han Guan Xiaotong)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `163.7K 🔥`
1. [曝迪丽热巴新经纪人入职嘉行](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%96%B0%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%85%A5%E8%81%8C%E5%98%89%E8%A1%8C%23) `159.8K 🔥`
1. [金饰价格已下跌超300元 (The price of gold jewelry has dropped by more than 300 yuan)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E5%B7%B2%E4%B8%8B%E8%B7%8C%E8%B6%85300%E5%85%83%23) `159.5K 🔥`
1. [黄霄雲 莫挨老子 (Huang Xiaoyun, don’t touch me)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%9C%84%E9%9B%B2%20%E8%8E%AB%E6%8C%A8%E8%80%81%E5%AD%90%23) `159.2K 🔥`
1. [曝梁小龙去世两个月没下葬将停棺10年](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%A2%81%E5%B0%8F%E9%BE%99%E5%8E%BB%E4%B8%96%E4%B8%A4%E4%B8%AA%E6%9C%88%E6%B2%A1%E4%B8%8B%E8%91%AC%E5%B0%86%E5%81%9C%E6%A3%BA10%E5%B9%B4%23) `142.4K 🔥`
1. [伊朗对以色列发动饱和攻击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E4%BB%A5%E8%89%B2%E5%88%97%E5%8F%91%E5%8A%A8%E9%A5%B1%E5%92%8C%E6%94%BB%E5%87%BB%23) `111.9K 🔥`
1. [重庆铜梁龙vs成都蓉城](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E9%93%9C%E6%A2%81%E9%BE%99vs%E6%88%90%E9%83%BD%E8%93%89%E5%9F%8E%23) `69.4K 🔥`
1. [JDG战胜DYG (JDG defeated DYG)](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CDYG%23) `210.9K 🔥` `-51%`
1. [伊朗手中握有真正的筹码](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%8B%E4%B8%AD%E6%8F%A1%E6%9C%89%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%AD%B9%E7%A0%81%23) `196.3K 🔥` `-33%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `189.6K 🔥` `-50%`
1. [季冠霖发文抵制AI (Ji Guanlin issued a letter boycotting AI)](https://s.weibo.com/weibo?q=%23%E5%AD%A3%E5%86%A0%E9%9C%96%E5%8F%91%E6%96%87%E6%8A%B5%E5%88%B6AI%23) `174.0K 🔥` `-29%`
1. [月经弄脏卧铺当事人详述事件经过](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E5%BD%93%E4%BA%8B%E4%BA%BA%E8%AF%A6%E8%BF%B0%E4%BA%8B%E4%BB%B6%E7%BB%8F%E8%BF%87%23) `172.3K 🔥` `-24%`
1. [370万买5套老破小90后宝妈发声](https://s.weibo.com/weibo?q=%23370%E4%B8%87%E4%B9%B05%E5%A5%97%E8%80%81%E7%A0%B4%E5%B0%8F90%E5%90%8E%E5%AE%9D%E5%A6%88%E5%8F%91%E5%A3%B0%23) `165.8K 🔥` `-32%`
1. [得知梅姨被捕家长激动到呕吐](https://s.weibo.com/weibo?q=%23%E5%BE%97%E7%9F%A5%E6%A2%85%E5%A7%A8%E8%A2%AB%E6%8D%95%E5%AE%B6%E9%95%BF%E6%BF%80%E5%8A%A8%E5%88%B0%E5%91%95%E5%90%90%23) `165.4K 🔥` `-23%`
1. [梅姨同居男友都看不到她的身份证 (Even Aunt Mei’s live-in boyfriend can’t see her ID card)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%90%8C%E5%B1%85%E7%94%B7%E5%8F%8B%E9%83%BD%E7%9C%8B%E4%B8%8D%E5%88%B0%E5%A5%B9%E7%9A%84%E8%BA%AB%E4%BB%BD%E8%AF%81%23) `162.4K 🔥` `-31%`
1. [梅姨同居男友说她不戴首饰 (Aunt Mei’s live-in boyfriend said she doesn’t wear jewelry)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%90%8C%E5%B1%85%E7%94%B7%E5%8F%8B%E8%AF%B4%E5%A5%B9%E4%B8%8D%E6%88%B4%E9%A6%96%E9%A5%B0%23) `162.1K 🔥` `-59%`
1. [李怀安樊长玉决裂 (Li Huaian and Fan Changyu break up)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%80%E5%AE%89%E6%A8%8A%E9%95%BF%E7%8E%89%E5%86%B3%E8%A3%82%23) `161.2K 🔥` `-44%`
1. [云旗走秀造型 (Yunqi catwalk style)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E8%B5%B0%E7%A7%80%E9%80%A0%E5%9E%8B%23) `159.2K 🔥` `-26%`
1. [张凌赫男大自拍 (Zhang Linghe male selfie)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B7%E5%A4%A7%E8%87%AA%E6%8B%8D%23) `115.7K 🔥` `-27%`
1. [痞幼因网红身份被邻居排挤 (A young boy is ostracized by his neighbors because of his status as an internet celebrity)](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E5%9B%A0%E7%BD%91%E7%BA%A2%E8%BA%AB%E4%BB%BD%E8%A2%AB%E9%82%BB%E5%B1%85%E6%8E%92%E6%8C%A4%23) `106.3K 🔥` `-24%`
1. [离Angelababy的脸只有两厘米](https://s.weibo.com/weibo?q=%23%E7%A6%BBAngelababy%E7%9A%84%E8%84%B8%E5%8F%AA%E6%9C%89%E4%B8%A4%E5%8E%98%E7%B1%B3%23) `89.3K 🔥` `-43%`
1. [十年前妈妈自己设计装修的家](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%B9%B4%E5%89%8D%E5%A6%88%E5%A6%88%E8%87%AA%E5%B7%B1%E8%AE%BE%E8%AE%A1%E8%A3%85%E4%BF%AE%E7%9A%84%E5%AE%B6%23) `79.1K 🔥` `-53%`
1. [刘宇宁直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%23) `79.0K 🔥` `-43%`
1. [邓凯 比巴掌先来的是俞浅浅的香味](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%20%E6%AF%94%E5%B7%B4%E6%8E%8C%E5%85%88%E6%9D%A5%E7%9A%84%E6%98%AF%E4%BF%9E%E6%B5%85%E6%B5%85%E7%9A%84%E9%A6%99%E5%91%B3%23) `69.6K 🔥` `-35%`

Updated at 2026-03-21 21:26:48

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
