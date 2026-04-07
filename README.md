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

1. [陈丽华儿子担任富华国际集团总裁 (Chen Laiwa’s son serves as president of Fuhua International Group)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E5%84%BF%E5%AD%90%E6%8B%85%E4%BB%BB%E5%AF%8C%E5%8D%8E%E5%9B%BD%E9%99%85%E9%9B%86%E5%9B%A2%E6%80%BB%E8%A3%81%23) `1.1M 🔥` `NEW`
1. [电商要更好服务实体经济](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%95%86%E8%A6%81%E6%9B%B4%E5%A5%BD%E6%9C%8D%E5%8A%A1%E5%AE%9E%E4%BD%93%E7%BB%8F%E6%B5%8E%23) `624.8K 🔥` `NEW`
1. [张雪的妈妈是厦大中文系毕业的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E7%9A%84%E5%A6%88%E5%A6%88%E6%98%AF%E5%8E%A6%E5%A4%A7%E4%B8%AD%E6%96%87%E7%B3%BB%E6%AF%95%E4%B8%9A%E7%9A%84%23) `609.9K 🔥` `NEW`
1. [国家继续出手调控油价](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%BB%A7%E7%BB%AD%E5%87%BA%E6%89%8B%E8%B0%83%E6%8E%A7%E6%B2%B9%E4%BB%B7%23) `287.6K 🔥` `NEW`
1. [新加坡前外长说美国极度危险](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%89%8D%E5%A4%96%E9%95%BF%E8%AF%B4%E7%BE%8E%E5%9B%BD%E6%9E%81%E5%BA%A6%E5%8D%B1%E9%99%A9%23) `194.8K 🔥` `NEW`
1. [电影青铜葵花定档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E9%9D%92%E9%93%9C%E8%91%B5%E8%8A%B1%E5%AE%9A%E6%A1%A3%23) `187.6K 🔥` `NEW`
1. [郭艾伦将追责](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E5%B0%86%E8%BF%BD%E8%B4%A3%23) `179.6K 🔥` `NEW`
1. [郭艾伦工作室声明](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A3%B0%E6%98%8E%23) `158.8K 🔥` `NEW`
1. [大学生西湖边当陪拍日赚1800](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%A5%BF%E6%B9%96%E8%BE%B9%E5%BD%93%E9%99%AA%E6%8B%8D%E6%97%A5%E8%B5%9A1800%23) `128.5K 🔥` `NEW`
1. [魏建军说卖车要带着良心](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%BB%BA%E5%86%9B%E8%AF%B4%E5%8D%96%E8%BD%A6%E8%A6%81%E5%B8%A6%E7%9D%80%E8%89%AF%E5%BF%83%23) `120.9K 🔥` `NEW`
1. [危险关系 房思琪 (Dangerous Liaisons Fang Siqi)](https://s.weibo.com/weibo?q=%23%E5%8D%B1%E9%99%A9%E5%85%B3%E7%B3%BB%20%E6%88%BF%E6%80%9D%E7%90%AA%23) `118.4K 🔥` `NEW`
1. [重庆一业主40万卖房后被判赔80万](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E4%B8%80%E4%B8%9A%E4%B8%BB40%E4%B8%87%E5%8D%96%E6%88%BF%E5%90%8E%E8%A2%AB%E5%88%A4%E8%B5%9480%E4%B8%87%23) `114.7K 🔥` `NEW`
1. [马思纯走出抑郁后的状态](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E8%B5%B0%E5%87%BA%E6%8A%91%E9%83%81%E5%90%8E%E7%9A%84%E7%8A%B6%E6%80%81%23) `103.9K 🔥` `NEW`
1. [关晓彤比例 没有拉腿的义务](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%AF%94%E4%BE%8B%20%E6%B2%A1%E6%9C%89%E6%8B%89%E8%85%BF%E7%9A%84%E4%B9%89%E5%8A%A1%23) `100.3K 🔥` `NEW`
1. [郭艾伦说自己下地都费劲](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E8%AF%B4%E8%87%AA%E5%B7%B1%E4%B8%8B%E5%9C%B0%E9%83%BD%E8%B4%B9%E5%8A%B2%23) `99.7K 🔥` `NEW`
1. [一定要买明天就能穿的衣服](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%9A%E8%A6%81%E4%B9%B0%E6%98%8E%E5%A4%A9%E5%B0%B1%E8%83%BD%E7%A9%BF%E7%9A%84%E8%A1%A3%E6%9C%8D%23) `95.2K 🔥` `NEW`
1. [赵丽颖欧豪孙千来给陈宇宙撑场面了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%AC%A7%E8%B1%AA%E5%AD%99%E5%8D%83%E6%9D%A5%E7%BB%99%E9%99%88%E5%AE%87%E5%AE%99%E6%92%91%E5%9C%BA%E9%9D%A2%E4%BA%86%23) `93.7K 🔥` `NEW`
1. [猫一屁股坐糖葫芦上了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E4%B8%80%E5%B1%81%E8%82%A1%E5%9D%90%E7%B3%96%E8%91%AB%E8%8A%A6%E4%B8%8A%E4%BA%86%23) `89.1K 🔥` `NEW`
1. [陈丽华曾回应百亿遗产如何分配](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E6%9B%BE%E5%9B%9E%E5%BA%94%E7%99%BE%E4%BA%BF%E9%81%97%E4%BA%A7%E5%A6%82%E4%BD%95%E5%88%86%E9%85%8D%23) `88.0K 🔥` `NEW`
1. [广东暴雨后频现巨型蜗牛](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E6%9A%B4%E9%9B%A8%E5%90%8E%E9%A2%91%E7%8E%B0%E5%B7%A8%E5%9E%8B%E8%9C%97%E7%89%9B%23) `84.0K 🔥` `NEW`
1. [截瘫女子回应被指责是捞女 (Paraplegic woman responds to accusations of being a prostitute)](https://s.weibo.com/weibo?q=%23%E6%88%AA%E7%98%AB%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8C%87%E8%B4%A3%E6%98%AF%E6%8D%9E%E5%A5%B3%23) `82.5K 🔥` `NEW`
1. [多方回应截瘫女子车祸时坐姿](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E6%88%AA%E7%98%AB%E5%A5%B3%E5%AD%90%E8%BD%A6%E7%A5%B8%E6%97%B6%E5%9D%90%E5%A7%BF%23) `287.4K 🔥` `+121%`
1. [迟重瑞说全家人每天必须一起吃晚饭](https://s.weibo.com/weibo?q=%23%E8%BF%9F%E9%87%8D%E7%91%9E%E8%AF%B4%E5%85%A8%E5%AE%B6%E4%BA%BA%E6%AF%8F%E5%A4%A9%E5%BF%85%E9%A1%BB%E4%B8%80%E8%B5%B7%E5%90%83%E6%99%9A%E9%A5%AD%23) `285.0K 🔥` `+81%`
1. [江语晨说才刚离婚别这样](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E8%AF%B4%E6%89%8D%E5%88%9A%E7%A6%BB%E5%A9%9A%E5%88%AB%E8%BF%99%E6%A0%B7%23) `239.5K 🔥` `+22%`
1. [桃晚安回应](https://s.weibo.com/weibo?q=%23%E6%A1%83%E6%99%9A%E5%AE%89%E5%9B%9E%E5%BA%94%23) `191.3K 🔥` `+115%`
1. [鞠婧祎 你是不是想陷害姐姐](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%20%E4%BD%A0%E6%98%AF%E4%B8%8D%E6%98%AF%E6%83%B3%E9%99%B7%E5%AE%B3%E5%A7%90%E5%A7%90%23) `174.9K 🔥` `+29%`
1. [伊朗若同意停火战争或再次爆发](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%8B%A5%E5%90%8C%E6%84%8F%E5%81%9C%E7%81%AB%E6%88%98%E4%BA%89%E6%88%96%E5%86%8D%E6%AC%A1%E7%88%86%E5%8F%91%23) `157.8K 🔥` `+62%`
1. [曝某牛奶直播间涉黄涉低俗](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E7%89%9B%E5%A5%B6%E7%9B%B4%E6%92%AD%E9%97%B4%E6%B6%89%E9%BB%84%E6%B6%89%E4%BD%8E%E4%BF%97%23) `623.5K 🔥`
1. [郭艾伦否认被骗](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E5%90%A6%E8%AE%A4%E8%A2%AB%E9%AA%97%23) `425.6K 🔥`
1. [情侣因换座与女乘客发生争执](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%9B%A0%E6%8D%A2%E5%BA%A7%E4%B8%8E%E5%A5%B3%E4%B9%98%E5%AE%A2%E5%8F%91%E7%94%9F%E4%BA%89%E6%89%A7%23) `381.5K 🔥`
1. [金莎孙丞潇已经结婚了吗 (Is Jinsha Sun Chengxiao married?)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E5%B7%B2%E7%BB%8F%E7%BB%93%E5%A9%9A%E4%BA%86%E5%90%97%23) `187.3K 🔥`
1. [女子住酒店在浴巾发现用过的伟哥](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%85%92%E5%BA%97%E5%9C%A8%E6%B5%B4%E5%B7%BE%E5%8F%91%E7%8E%B0%E7%94%A8%E8%BF%87%E7%9A%84%E4%BC%9F%E5%93%A5%23) `162.1K 🔥`
1. [找到邓家佳不来浪姐的原因了 (I found the reason why Deng Jiajia didn’t come to Sister Lang.)](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%88%B0%E9%82%93%E5%AE%B6%E4%BD%B3%E4%B8%8D%E6%9D%A5%E6%B5%AA%E5%A7%90%E7%9A%84%E5%8E%9F%E5%9B%A0%E4%BA%86%23) `126.1K 🔥`
1. [日本一老人咬陌生人手臂被捕后死亡](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%80%E8%80%81%E4%BA%BA%E5%92%AC%E9%99%8C%E7%94%9F%E4%BA%BA%E6%89%8B%E8%87%82%E8%A2%AB%E6%8D%95%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `104.2K 🔥`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `89.3K 🔥`
1. [5月放假12天 (12 days off in May)](https://s.weibo.com/weibo?q=%235%E6%9C%88%E6%94%BE%E5%81%8712%E5%A4%A9%23) `841.5K 🔥` `-25%`
1. [金莎孙丞潇上夫妻综艺了](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E4%B8%8A%E5%A4%AB%E5%A6%BB%E7%BB%BC%E8%89%BA%E4%BA%86%23) `364.5K 🔥` `-30%`
1. [原来这叫软孤立啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%8F%AB%E8%BD%AF%E5%AD%A4%E7%AB%8B%E5%95%8A%23) `293.1K 🔥` `-43%`
1. [周杰伦 江语晨](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%20%E6%B1%9F%E8%AF%AD%E6%99%A8%23) `287.6K 🔥` `-24%`
1. [陈丽华叫迟重瑞迟先生](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E5%8F%AB%E8%BF%9F%E9%87%8D%E7%91%9E%E8%BF%9F%E5%85%88%E7%94%9F%23) `287.6K 🔥` `-22%`
1. [余茵暴瘦](https://s.weibo.com/weibo?q=%23%E4%BD%99%E8%8C%B5%E6%9A%B4%E7%98%A6%23) `243.1K 🔥` `-33%`
1. [郑丽文率团抵达](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E7%8E%87%E5%9B%A2%E6%8A%B5%E8%BE%BE%23) `234.1K 🔥` `-40%`
1. [妻子的浪漫旅行嘉宾阵容 (Wife’s Romantic Travel Guest Lineup)](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%9A%84%E6%B5%AA%E6%BC%AB%E6%97%85%E8%A1%8C%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `222.6K 🔥` `-73%`
1. [陈丽华身家470亿元 (Chen Laiwa’s net worth is NT$47 billion)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E8%BA%AB%E5%AE%B6470%E4%BA%BF%E5%85%83%23) `196.1K 🔥` `-46%`
1. [伊朗称以放弃北部城市承认了失败 (Iran says it admitted defeat by abandoning northern city)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E4%BB%A5%E6%94%BE%E5%BC%83%E5%8C%97%E9%83%A8%E5%9F%8E%E5%B8%82%E6%89%BF%E8%AE%A4%E4%BA%86%E5%A4%B1%E8%B4%A5%23) `193.7K 🔥` `-49%`
1. [金卡戴珊汉密尔顿承认恋情](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8D%A1%E6%88%B4%E7%8F%8A%E6%B1%89%E5%AF%86%E5%B0%94%E9%A1%BF%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `137.9K 🔥` `-27%`
1. [张豆豆没头脑孙杨不高兴](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E6%B2%A1%E5%A4%B4%E8%84%91%E5%AD%99%E6%9D%A8%E4%B8%8D%E9%AB%98%E5%85%B4%23) `105.2K 🔥` `-46%`
1. [潘玮柏女儿5岁近照](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%8E%AE%E6%9F%8F%E5%A5%B3%E5%84%BF5%E5%B2%81%E8%BF%91%E7%85%A7%23) `94.8K 🔥` `-56%`
1. [黄一鸣被执行55万](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%B8%80%E9%B8%A3%E8%A2%AB%E6%89%A7%E8%A1%8C55%E4%B8%87%23) `88.8K 🔥` `-35%`
1. [你愿意为车内的仪式感买单吗](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%84%BF%E6%84%8F%E4%B8%BA%E8%BD%A6%E5%86%85%E7%9A%84%E4%BB%AA%E5%BC%8F%E6%84%9F%E4%B9%B0%E5%8D%95%E5%90%97%23) `85.6K 🔥` `-55%`

Updated at 2026-04-07 15:17:55

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
