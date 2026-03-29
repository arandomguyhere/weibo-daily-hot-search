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

1. [中国将在长江水下开高铁 (China plans to build high-speed rail under water in the Yangtze River)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%86%E5%9C%A8%E9%95%BF%E6%B1%9F%E6%B0%B4%E4%B8%8B%E5%BC%80%E9%AB%98%E9%93%81%23) `1.1M 🔥` `NEW`
1. [1.99元就能买1斤猪肉](https://s.weibo.com/weibo?q=%231.99%E5%85%83%E5%B0%B1%E8%83%BD%E4%B9%B01%E6%96%A4%E7%8C%AA%E8%82%89%23) `1.1M 🔥` `NEW`
1. [DeepSeek崩了](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B4%A9%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [村民办白事酒席老外误当成饭店](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E5%8A%9E%E7%99%BD%E4%BA%8B%E9%85%92%E5%B8%AD%E8%80%81%E5%A4%96%E8%AF%AF%E5%BD%93%E6%88%90%E9%A5%AD%E5%BA%97%23) `1.0M 🔥` `NEW`
1. [亚洲3国与伊朗达成协议](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%B4%B23%E5%9B%BD%E4%B8%8E%E4%BC%8A%E6%9C%97%E8%BE%BE%E6%88%90%E5%8D%8F%E8%AE%AE%23) `1.0M 🔥` `NEW`
1. [袁泉 影后演技](https://s.weibo.com/weibo?q=%23%E8%A2%81%E6%B3%89%20%E5%BD%B1%E5%90%8E%E6%BC%94%E6%8A%80%23) `1.0M 🔥` `NEW`
1. [伊朗向美以进一步摊牌](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%91%E7%BE%8E%E4%BB%A5%E8%BF%9B%E4%B8%80%E6%AD%A5%E6%91%8A%E7%89%8C%23) `1.0M 🔥` `NEW`
1. [狼队KSG巅峰对决](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9FKSG%E5%B7%85%E5%B3%B0%E5%AF%B9%E5%86%B3%23) `1.0M 🔥` `NEW`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `1.0M 🔥` `NEW`
1. [檀健次比心ending](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E6%AF%94%E5%BF%83ending%23) `1.0M 🔥` `NEW`
1. [Breathe加入iG (Breathe joins iG)](https://s.weibo.com/weibo?q=%23Breathe%E5%8A%A0%E5%85%A5iG%23) `1.0M 🔥` `NEW`
1. [九寨沟震后首次实拍到野生大熊猫活体](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E9%9C%87%E5%90%8E%E9%A6%96%E6%AC%A1%E5%AE%9E%E6%8B%8D%E5%88%B0%E9%87%8E%E7%94%9F%E5%A4%A7%E7%86%8A%E7%8C%AB%E6%B4%BB%E4%BD%93%23) `1.0M 🔥` `NEW`
1. [桃黑黑再次预言热巴新剧](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%86%8D%E6%AC%A1%E9%A2%84%E8%A8%80%E7%83%AD%E5%B7%B4%E6%96%B0%E5%89%A7%23) `1.0M 🔥` `NEW`
1. [漫长的三月](https://s.weibo.com/weibo?q=%23%E6%BC%AB%E9%95%BF%E7%9A%84%E4%B8%89%E6%9C%88%23) `1.0M 🔥` `NEW`
1. [雀巢12吨巧克力被盗 (12 tons of Nestlé chocolate stolen)](https://s.weibo.com/weibo?q=%23%E9%9B%80%E5%B7%A212%E5%90%A8%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%A2%AB%E7%9B%97%23) `1.1M 🔥` `+39%`
1. [儿子一家去世老人骑行30年治愈自己 (His son's family passed away and the old man healed himself by cycling for 30 years)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E4%B8%80%E5%AE%B6%E5%8E%BB%E4%B8%96%E8%80%81%E4%BA%BA%E9%AA%91%E8%A1%8C30%E5%B9%B4%E6%B2%BB%E6%84%88%E8%87%AA%E5%B7%B1%23) `1.1M 🔥` `+68%`
1. [数据感知中国经济活力满满 (Data senses that China’s economy is full of vitality)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E6%8D%AE%E6%84%9F%E7%9F%A5%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E6%B4%BB%E5%8A%9B%E6%BB%A1%E6%BB%A1%23) `1.1M 🔥` `+66%`
1. [薛之谦因为下雨退票](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%9B%A0%E4%B8%BA%E4%B8%8B%E9%9B%A8%E9%80%80%E7%A5%A8%23) `1.1M 🔥` `+67%`
1. [凌晨3点孩子等家长睡熟偷平板玩](https://s.weibo.com/weibo?q=%23%E5%87%8C%E6%99%A83%E7%82%B9%E5%AD%A9%E5%AD%90%E7%AD%89%E5%AE%B6%E9%95%BF%E7%9D%A1%E7%86%9F%E5%81%B7%E5%B9%B3%E6%9D%BF%E7%8E%A9%23) `1.1M 🔥` `+71%`
1. [檀健次美甲](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%BE%8E%E7%94%B2%23) `1.1M 🔥` `+567%`
1. [蔡磊感觉最对不起的就是妻子](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E6%84%9F%E8%A7%89%E6%9C%80%E5%AF%B9%E4%B8%8D%E8%B5%B7%E7%9A%84%E5%B0%B1%E6%98%AF%E5%A6%BB%E5%AD%90%23) `1.1M 🔥` `+75%`
1. [很多食物都是面朝下更好吃](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E9%A3%9F%E7%89%A9%E9%83%BD%E6%98%AF%E9%9D%A2%E6%9C%9D%E4%B8%8B%E6%9B%B4%E5%A5%BD%E5%90%83%23) `1.1M 🔥` `+80%`
1. [薛之谦演唱会 (Joker Xue Concert)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `1.1M 🔥` `+76%`
1. [狼队对战KSG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98KSG%23) `1.1M 🔥` `+193%`
1. [张凌赫摄影师 撕拉片不是P的 (Photographer Zhang Linghe, the tear-off tab is not P)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%91%84%E5%BD%B1%E5%B8%88%20%E6%92%95%E6%8B%89%E7%89%87%E4%B8%8D%E6%98%AFP%E7%9A%84%23) `1.0M 🔥` `+82%`
1. [严浩翔分享歌曲 (Yan Haoxiang shares songs)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%88%86%E4%BA%AB%E6%AD%8C%E6%9B%B2%23) `1.0M 🔥` `+202%`
1. [单依纯 舞娘 (Shan Yichun Dancer)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E8%88%9E%E5%A8%98%23) `1.0M 🔥` `+338%`
1. [迪丽热巴演技](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%BC%94%E6%8A%80%23) `1.0M 🔥` `+258%`
1. [儿子蛇缠腰父亲涂抹符水圈住疱疹](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E8%9B%87%E7%BC%A0%E8%85%B0%E7%88%B6%E4%BA%B2%E6%B6%82%E6%8A%B9%E7%AC%A6%E6%B0%B4%E5%9C%88%E4%BD%8F%E7%96%B1%E7%96%B9%23) `1.0M 🔥` `+350%`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `1.0M 🔥` `+558%`
1. [迪丽热巴什么时候原谅现偶](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%23) `1.0M 🔥` `+431%`
1. [带状疱疹72小时内一定要做这件事 (This must be done within 72 hours of treating shingles)](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E7%8A%B6%E7%96%B1%E7%96%B972%E5%B0%8F%E6%97%B6%E5%86%85%E4%B8%80%E5%AE%9A%E8%A6%81%E5%81%9A%E8%BF%99%E4%BB%B6%E4%BA%8B%23) `1.0M 🔥` `+528%`
1. [田曦薇直播](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%9B%B4%E6%92%AD%23) `1.0M 🔥` `+340%`
1. [12306回应D3665列车停电被困隧道](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94D3665%E5%88%97%E8%BD%A6%E5%81%9C%E7%94%B5%E8%A2%AB%E5%9B%B0%E9%9A%A7%E9%81%93%23) `1.0M 🔥` `+333%`
1. [孙颖莎瘦了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%98%A6%E4%BA%86%23) `1.0M 🔥` `+463%`
1. [伊朗公布击毁美军E3预警机卫星图](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E5%87%BB%E6%AF%81%E7%BE%8E%E5%86%9BE3%E9%A2%84%E8%AD%A6%E6%9C%BA%E5%8D%AB%E6%98%9F%E5%9B%BE%23) `1.0M 🔥` `+70%`
1. [北京偶遇宋亚轩贺峻霖](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%81%B6%E9%81%87%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%B4%BA%E5%B3%BB%E9%9C%96%23) `1.0M 🔥` `+437%`
1. [氯雷他定 (Loratadine)](https://s.weibo.com/weibo?q=%23%E6%B0%AF%E9%9B%B7%E4%BB%96%E5%AE%9A%23) `1.0M 🔥` `+344%`
1. [李莎旻子救场](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8E%8E%E6%97%BB%E5%AD%90%E6%95%91%E5%9C%BA%23) `1.0M 🔥` `+495%`
1. [狼队 小胖 (Wolves chubby)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%20%E5%B0%8F%E8%83%96%23) `1.0M 🔥` `+638%`
1. [鸭嘴钳是无数女性做检查时的噩梦](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E5%98%B4%E9%92%B3%E6%98%AF%E6%97%A0%E6%95%B0%E5%A5%B3%E6%80%A7%E5%81%9A%E6%A3%80%E6%9F%A5%E6%97%B6%E7%9A%84%E5%99%A9%E6%A2%A6%23) `1.0M 🔥` `+344%`
1. [朴志晟哭到站不住](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BF%97%E6%99%9F%E5%93%AD%E5%88%B0%E7%AB%99%E4%B8%8D%E4%BD%8F%23) `1.0M 🔥` `+689%`
1. [母亲隐瞒近40岁女儿已婚骗17万彩礼 (Mother concealed that her nearly 40-year-old daughter was married and defrauded her of 170,000 yuan in gift money)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E9%9A%90%E7%9E%92%E8%BF%9140%E5%B2%81%E5%A5%B3%E5%84%BF%E5%B7%B2%E5%A9%9A%E9%AA%9717%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `1.0M 🔥` `+909%`
1. [内存条价格出现断崖式下跌](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E4%BB%B7%E6%A0%BC%E5%87%BA%E7%8E%B0%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E8%B7%8C%23) `1.0M 🔥` `+894%`
1. [仙逆 (Immortal Ni)](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `1.0M 🔥` `+910%`
1. [邪恶砂糖橘 窝囊西红柿](https://s.weibo.com/weibo?q=%23%E9%82%AA%E6%81%B6%E7%A0%82%E7%B3%96%E6%A9%98%20%E7%AA%9D%E5%9B%8A%E8%A5%BF%E7%BA%A2%E6%9F%BF%23) `1.0M 🔥` `+666%`
1. [白鹿入夏ccd](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%85%A5%E5%A4%8Fccd%23) `1.0M 🔥` `+901%`
1. [伊朗说美方唯一能听懂的就是武力](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AF%B4%E7%BE%8E%E6%96%B9%E5%94%AF%E4%B8%80%E8%83%BD%E5%90%AC%E6%87%82%E7%9A%84%E5%B0%B1%E6%98%AF%E6%AD%A6%E5%8A%9B%23) `1.0M 🔥` `+786%`
1. [李荣浩4连质问单依纯 (Li Ronghao questioned Shan Yichun 4 times in a row)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A94%E8%BF%9E%E8%B4%A8%E9%97%AE%E5%8D%95%E4%BE%9D%E7%BA%AF%23) `7.8M 🔥`
1. [D3665列车被困隧道3小时](https://s.weibo.com/weibo?q=%23D3665%E5%88%97%E8%BD%A6%E8%A2%AB%E5%9B%B0%E9%9A%A7%E9%81%933%E5%B0%8F%E6%97%B6%23) `1.0M 🔥`

Updated at 2026-03-29 22:02:05

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
