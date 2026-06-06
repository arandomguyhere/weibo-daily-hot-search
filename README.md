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

1. [雪人 哭成泪人 (Snowman cried into tears)](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E4%BA%BA%20%E5%93%AD%E6%88%90%E6%B3%AA%E4%BA%BA%23) `1.0M 🔥` `NEW`
1. [高考期间这些地区雨势较大](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%9C%9F%E9%97%B4%E8%BF%99%E4%BA%9B%E5%9C%B0%E5%8C%BA%E9%9B%A8%E5%8A%BF%E8%BE%83%E5%A4%A7%23) `821.9K 🔥` `NEW`
1. [黄灿灿一开口曾沛慈就哭了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%B8%80%E5%BC%80%E5%8F%A3%E6%9B%BE%E6%B2%9B%E6%85%88%E5%B0%B1%E5%93%AD%E4%BA%86%23) `804.3K 🔥` `NEW`
1. [瑞幸咖啡去冰仅半杯可退款](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%92%96%E5%95%A1%E5%8E%BB%E5%86%B0%E4%BB%85%E5%8D%8A%E6%9D%AF%E5%8F%AF%E9%80%80%E6%AC%BE%23) `754.5K 🔥` `NEW`
1. [万千惠输了一百多票](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E8%BE%93%E4%BA%86%E4%B8%80%E7%99%BE%E5%A4%9A%E7%A5%A8%23) `753.9K 🔥` `NEW`
1. [中国女排vs塞尔维亚女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E5%A1%9E%E5%B0%94%E7%BB%B4%E4%BA%9A%E5%A5%B3%E6%8E%92%23) `748.7K 🔥` `NEW`
1. [安德列娃vs赫瓦林斯卡](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%B7%E5%88%97%E5%A8%83vs%E8%B5%AB%E7%93%A6%E6%9E%97%E6%96%AF%E5%8D%A1%23) `743.3K 🔥` `NEW`
1. [丈夫在妻子轻生四月后选择殉情](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%9C%A8%E5%A6%BB%E5%AD%90%E8%BD%BB%E7%94%9F%E5%9B%9B%E6%9C%88%E5%90%8E%E9%80%89%E6%8B%A9%E6%AE%89%E6%83%85%23) `737.9K 🔥` `NEW`
1. [谢娜演唱会全国巡演](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E5%85%A8%E5%9B%BD%E5%B7%A1%E6%BC%94%23) `734.7K 🔥` `NEW`
1. [多地调整机关单位高考期间上班时间](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E8%B0%83%E6%95%B4%E6%9C%BA%E5%85%B3%E5%8D%95%E4%BD%8D%E9%AB%98%E8%80%83%E6%9C%9F%E9%97%B4%E4%B8%8A%E7%8F%AD%E6%97%B6%E9%97%B4%23) `729.7K 🔥` `NEW`
1. [陈瑶 雪人 (Chen Yao Snowman)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%20%E9%9B%AA%E4%BA%BA%23) `727.5K 🔥` `NEW`
1. [白鹿粉丝云包场30万座](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%B2%89%E4%B8%9D%E4%BA%91%E5%8C%85%E5%9C%BA30%E4%B8%87%E5%BA%A7%23) `719.2K 🔥` `NEW`
1. [心疼张月](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E5%BC%A0%E6%9C%88%23) `714.8K 🔥` `NEW`
1. [王濛把我唱笑了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%8A%8A%E6%88%91%E5%94%B1%E7%AC%91%E4%BA%86%23) `713.6K 🔥` `NEW`
1. [改善骨盆前倾不伤腰动作](https://s.weibo.com/weibo?q=%23%E6%94%B9%E5%96%84%E9%AA%A8%E7%9B%86%E5%89%8D%E5%80%BE%E4%B8%8D%E4%BC%A4%E8%85%B0%E5%8A%A8%E4%BD%9C%23) `710.5K 🔥` `NEW`
1. [萧蔷为了短发剪了短发](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E4%B8%BA%E4%BA%86%E7%9F%AD%E5%8F%91%E5%89%AA%E4%BA%86%E7%9F%AD%E5%8F%91%23) `706.7K 🔥` `NEW`
1. [孙怡赢了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%B5%A2%E4%BA%86%23) `704.6K 🔥` `NEW`
1. [男生630分上法大退学复读考北大](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F630%E5%88%86%E4%B8%8A%E6%B3%95%E5%A4%A7%E9%80%80%E5%AD%A6%E5%A4%8D%E8%AF%BB%E8%80%83%E5%8C%97%E5%A4%A7%23) `697.8K 🔥` `NEW`
1. [苹果iOS27渲染视频](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CiOS27%E6%B8%B2%E6%9F%93%E8%A7%86%E9%A2%91%23) `694.6K 🔥` `NEW`
1. [JISOO这张照片在X上又火起来了](https://s.weibo.com/weibo?q=%23JISOO%E8%BF%99%E5%BC%A0%E7%85%A7%E7%89%87%E5%9C%A8X%E4%B8%8A%E5%8F%88%E7%81%AB%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `692.6K 🔥` `NEW`
1. [单依纯橄榄树 神女吟唱 (Shan Yi Pure Olive Tree Goddess Sings)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%A9%84%E6%A6%84%E6%A0%91%20%E7%A5%9E%E5%A5%B3%E5%90%9F%E5%94%B1%23) `611.0K 🔥` `NEW`
1. [萨摩耶坐飞机累得都不耶了](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E5%9D%90%E9%A3%9E%E6%9C%BA%E7%B4%AF%E5%BE%97%E9%83%BD%E4%B8%8D%E8%80%B6%E4%BA%86%23) `579.2K 🔥` `NEW`
1. [张月让万千惠不要在乎票数](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E8%AE%A9%E4%B8%87%E5%8D%83%E6%83%A0%E4%B8%8D%E8%A6%81%E5%9C%A8%E4%B9%8E%E7%A5%A8%E6%95%B0%23) `572.5K 🔥` `NEW`
1. [淡淡看到分数哭了](https://s.weibo.com/weibo?q=%23%E6%B7%A1%E6%B7%A1%E7%9C%8B%E5%88%B0%E5%88%86%E6%95%B0%E5%93%AD%E4%BA%86%23) `554.8K 🔥` `NEW`
1. [浪姐一天到晚让姐姐们哭](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%80%E5%A4%A9%E5%88%B0%E6%99%9A%E8%AE%A9%E5%A7%90%E5%A7%90%E4%BB%AC%E5%93%AD%23) `546.3K 🔥` `NEW`
1. [谢楠的手一直在抖](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%E7%9A%84%E6%89%8B%E4%B8%80%E7%9B%B4%E5%9C%A8%E6%8A%96%23) `535.2K 🔥` `NEW`
1. [台湾太阳花女王逃美7年被押解返台](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%A4%AA%E9%98%B3%E8%8A%B1%E5%A5%B3%E7%8E%8B%E9%80%83%E7%BE%8E7%E5%B9%B4%E8%A2%AB%E6%8A%BC%E8%A7%A3%E8%BF%94%E5%8F%B0%23) `528.4K 🔥` `NEW`
1. [被张可盈演的小三气到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%BC%A0%E5%8F%AF%E7%9B%88%E6%BC%94%E7%9A%84%E5%B0%8F%E4%B8%89%E6%B0%94%E5%88%B0%E4%BA%86%23) `517.8K 🔥` `NEW`
1. [动手一揉不如顺手一滴](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E6%89%8B%E4%B8%80%E6%8F%89%E4%B8%8D%E5%A6%82%E9%A1%BA%E6%89%8B%E4%B8%80%E6%BB%B4%23) `513.7K 🔥` `NEW`
1. [樊振东的原声高考祝福](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%9A%84%E5%8E%9F%E5%A3%B0%E9%AB%98%E8%80%83%E7%A5%9D%E7%A6%8F%23) `505.9K 🔥` `NEW`
1. [黄灿灿 谢谢你姐姐 (Huang Cancan Thank you sister)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%20%E8%B0%A2%E8%B0%A2%E4%BD%A0%E5%A7%90%E5%A7%90%23) `385.8K 🔥` `NEW`
1. [孙怡音色 老天赏饭](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%9F%B3%E8%89%B2%20%E8%80%81%E5%A4%A9%E8%B5%8F%E9%A5%AD%23) `381.2K 🔥` `NEW`
1. [王濛 让周杰伦听到我](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E8%AE%A9%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%90%AC%E5%88%B0%E6%88%91%23) `356.3K 🔥` `NEW`
1. [ai广告](https://s.weibo.com/weibo?q=%23ai%E5%B9%BF%E5%91%8A%23) `356.1K 🔥` `NEW`
1. [京东洗衣机直播间来就送全家筒](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%B4%97%E8%A1%A3%E6%9C%BA%E7%9B%B4%E6%92%AD%E9%97%B4%E6%9D%A5%E5%B0%B1%E9%80%81%E5%85%A8%E5%AE%B6%E7%AD%92%23) `354.1K 🔥` `NEW`
1. [狗狗濒死奔向主人见最后一面](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E6%BF%92%E6%AD%BB%E5%A5%94%E5%90%91%E4%B8%BB%E4%BA%BA%E8%A7%81%E6%9C%80%E5%90%8E%E4%B8%80%E9%9D%A2%23) `352.5K 🔥` `NEW`
1. [浪姐直播 (Sister Lang live broadcast)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `1.5M 🔥` `+22%`
1. [吃完的榴莲别急着扔](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%AE%8C%E7%9A%84%E6%A6%B4%E8%8E%B2%E5%88%AB%E6%80%A5%E7%9D%80%E6%89%94%23) `746.2K 🔥` `+50%`
1. [曝沈月文章抄袭](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B2%88%E6%9C%88%E6%96%87%E7%AB%A0%E6%8A%84%E8%A2%AD%23) `738.4K 🔥` `+146%`
1. [曝郭宇欣私下说绝对不和刘萧旭二搭](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E5%AE%87%E6%AC%A3%E7%A7%81%E4%B8%8B%E8%AF%B4%E7%BB%9D%E5%AF%B9%E4%B8%8D%E5%92%8C%E5%88%98%E8%90%A7%E6%97%AD%E4%BA%8C%E6%90%AD%23) `731.0K 🔥` `+212%`
1. [英伟达市值一夜蒸发2.2万亿](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC%E4%B8%80%E5%A4%9C%E8%92%B8%E5%8F%912.2%E4%B8%87%E4%BA%BF%23) `723.8K 🔥` `+29%`
1. [AI文风太好认 (AI writing style is too recognizable)](https://s.weibo.com/weibo?q=%23AI%E6%96%87%E9%A3%8E%E5%A4%AA%E5%A5%BD%E8%AE%A4%23) `721.2K 🔥` `+229%`
1. [2岁女儿给爸爸降温背上多了四张人脸](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%A5%B3%E5%84%BF%E7%BB%99%E7%88%B8%E7%88%B8%E9%99%8D%E6%B8%A9%E8%83%8C%E4%B8%8A%E5%A4%9A%E4%BA%86%E5%9B%9B%E5%BC%A0%E4%BA%BA%E8%84%B8%23) `702.1K 🔥` `+257%`
1. [1499元茅台消失了](https://s.weibo.com/weibo?q=%231499%E5%85%83%E8%8C%85%E5%8F%B0%E6%B6%88%E5%A4%B1%E4%BA%86%23) `700.0K 🔥` `+302%`
1. [何猷君保姆坐奚梦瑶父母旁边](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E4%BF%9D%E5%A7%86%E5%9D%90%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%88%B6%E6%AF%8D%E6%97%81%E8%BE%B9%23) `573.9K 🔥` `+193%`
1. [老师考前遗失整摞准考证被市民捡到](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E8%80%83%E5%89%8D%E9%81%97%E5%A4%B1%E6%95%B4%E6%91%9E%E5%87%86%E8%80%83%E8%AF%81%E8%A2%AB%E5%B8%82%E6%B0%91%E6%8D%A1%E5%88%B0%23) `560.4K 🔥` `+179%`
1. [尼日尔车撒哈拉沙漠抛锚超49人渴死](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%97%A5%E5%B0%94%E8%BD%A6%E6%92%92%E5%93%88%E6%8B%89%E6%B2%99%E6%BC%A0%E6%8A%9B%E9%94%9A%E8%B6%8549%E4%BA%BA%E6%B8%B4%E6%AD%BB%23) `540.3K 🔥` `+262%`
1. [谢娜今晚有好消息宣布](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%BB%8A%E6%99%9A%E6%9C%89%E5%A5%BD%E6%B6%88%E6%81%AF%E5%AE%A3%E5%B8%83%23) `503.1K 🔥` `+107%`
1. [高考时间](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%97%B6%E9%97%B4%23) `381.3K 🔥` `+46%`
1. [女生嘴含夹竹桃拍照中毒过敏 (Girl poisoned and allergic after taking photo with oleander in mouth)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%98%B4%E5%90%AB%E5%A4%B9%E7%AB%B9%E6%A1%83%E6%8B%8D%E7%85%A7%E4%B8%AD%E6%AF%92%E8%BF%87%E6%95%8F%23) `751.5K 🔥` `-34%`

Updated at 2026-06-06 22:12:25

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
