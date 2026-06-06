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

1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `1.3M 🔥` `NEW`
1. [泪桥 最佳舞台](https://s.weibo.com/weibo?q=%23%E6%B3%AA%E6%A1%A5%20%E6%9C%80%E4%BD%B3%E8%88%9E%E5%8F%B0%23) `861.0K 🔥` `NEW`
1. [高考](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%23) `667.6K 🔥` `NEW`
1. [安崎给张月道歉](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E7%BB%99%E5%BC%A0%E6%9C%88%E9%81%93%E6%AD%89%23) `646.2K 🔥` `NEW`
1. [杜祥琬院士辟谣核技术用于垃圾焚烧](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E7%A5%A5%E7%90%AC%E9%99%A2%E5%A3%AB%E8%BE%9F%E8%B0%A3%E6%A0%B8%E6%8A%80%E6%9C%AF%E7%94%A8%E4%BA%8E%E5%9E%83%E5%9C%BE%E7%84%9A%E7%83%A7%23) `478.5K 🔥` `NEW`
1. [安德列娃法网女单冠军](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%B7%E5%88%97%E5%A8%83%E6%B3%95%E7%BD%91%E5%A5%B3%E5%8D%95%E5%86%A0%E5%86%9B%23) `431.9K 🔥` `NEW`
1. [孙颖莎祝考生金榜题名](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%A5%9D%E8%80%83%E7%94%9F%E9%87%91%E6%A6%9C%E9%A2%98%E5%90%8D%23) `430.4K 🔥` `NEW`
1. [北京下雪](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E4%B8%8B%E9%9B%AA%23) `425.7K 🔥` `NEW`
1. [野人先生忽然在日本引起了讨论](https://s.weibo.com/weibo?q=%23%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E5%BF%BD%E7%84%B6%E5%9C%A8%E6%97%A5%E6%9C%AC%E5%BC%95%E8%B5%B7%E4%BA%86%E8%AE%A8%E8%AE%BA%23) `419.5K 🔥` `NEW`
1. [唐艺昕又过敏了吗](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%8F%88%E8%BF%87%E6%95%8F%E4%BA%86%E5%90%97%23) `417.7K 🔥` `NEW`
1. [宇树回应联手英伟达 (Yushu responds to join forces with Nvidia)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%9B%9E%E5%BA%94%E8%81%94%E6%89%8B%E8%8B%B1%E4%BC%9F%E8%BE%BE%23) `410.8K 🔥` `NEW`
1. [4所公立幼儿园报名看家长工资流水](https://s.weibo.com/weibo?q=%234%E6%89%80%E5%85%AC%E7%AB%8B%E5%B9%BC%E5%84%BF%E5%9B%AD%E6%8A%A5%E5%90%8D%E7%9C%8B%E5%AE%B6%E9%95%BF%E5%B7%A5%E8%B5%84%E6%B5%81%E6%B0%B4%23) `407.6K 🔥` `NEW`
1. [侯宇 谨言慎行](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%AE%87%20%E8%B0%A8%E8%A8%80%E6%85%8E%E8%A1%8C%23) `404.7K 🔥` `NEW`
1. [孙怡江语晨看到分数的表情](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E6%B1%9F%E8%AF%AD%E6%99%A8%E7%9C%8B%E5%88%B0%E5%88%86%E6%95%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `403.6K 🔥` `NEW`
1. [万千惠路边哭惨了](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E8%B7%AF%E8%BE%B9%E5%93%AD%E6%83%A8%E4%BA%86%23) `399.3K 🔥` `NEW`
1. [银环蛇被装进塑料袋挂在车上](https://s.weibo.com/weibo?q=%23%E9%93%B6%E7%8E%AF%E8%9B%87%E8%A2%AB%E8%A3%85%E8%BF%9B%E5%A1%91%E6%96%99%E8%A2%8B%E6%8C%82%E5%9C%A8%E8%BD%A6%E4%B8%8A%23) `395.1K 🔥` `NEW`
1. [关晓彤撑伞必出神图](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%92%91%E4%BC%9E%E5%BF%85%E5%87%BA%E7%A5%9E%E5%9B%BE%23) `371.5K 🔥` `NEW`
1. [母女每天深夜捡垃圾堆满出租屋](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E5%A5%B3%E6%AF%8F%E5%A4%A9%E6%B7%B1%E5%A4%9C%E6%8D%A1%E5%9E%83%E5%9C%BE%E5%A0%86%E6%BB%A1%E5%87%BA%E7%A7%9F%E5%B1%8B%23) `366.8K 🔥` `NEW`
1. [宠物店老板指使烈犬咬死顾客宠物猫](https://s.weibo.com/weibo?q=%23%E5%AE%A0%E7%89%A9%E5%BA%97%E8%80%81%E6%9D%BF%E6%8C%87%E4%BD%BF%E7%83%88%E7%8A%AC%E5%92%AC%E6%AD%BB%E9%A1%BE%E5%AE%A2%E5%AE%A0%E7%89%A9%E7%8C%AB%23) `365.7K 🔥` `NEW`
1. [金店老板说一觉醒来资产缩水300万](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%BA%97%E8%80%81%E6%9D%BF%E8%AF%B4%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E8%B5%84%E4%BA%A7%E7%BC%A9%E6%B0%B4300%E4%B8%87%23) `361.9K 🔥` `NEW`
1. [赵兆情商 (Zhao Zhao EQ)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%85%86%E6%83%85%E5%95%86%23) `357.2K 🔥` `NEW`
1. [范玮琪演唱会听到孙怡赢了的反应](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%AC%E5%88%B0%E5%AD%99%E6%80%A1%E8%B5%A2%E4%BA%86%E7%9A%84%E5%8F%8D%E5%BA%94%23) `355.0K 🔥` `NEW`
1. [王哲林回应删朱芳雨微信](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%93%B2%E6%9E%97%E5%9B%9E%E5%BA%94%E5%88%A0%E6%9C%B1%E8%8A%B3%E9%9B%A8%E5%BE%AE%E4%BF%A1%23) `353.0K 🔥` `NEW`
1. [雪饼猴称4元烤肠嫌贵可以不吃](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E9%A5%BC%E7%8C%B4%E7%A7%B04%E5%85%83%E7%83%A4%E8%82%A0%E5%AB%8C%E8%B4%B5%E5%8F%AF%E4%BB%A5%E4%B8%8D%E5%90%83%23) `348.2K 🔥` `NEW`
1. [女子开错车连夜联系车主归还](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BC%80%E9%94%99%E8%BD%A6%E8%BF%9E%E5%A4%9C%E8%81%94%E7%B3%BB%E8%BD%A6%E4%B8%BB%E5%BD%92%E8%BF%98%23) `347.6K 🔥` `NEW`
1. [高考期间这些地区雨势较大](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%9C%9F%E9%97%B4%E8%BF%99%E4%BA%9B%E5%9C%B0%E5%8C%BA%E9%9B%A8%E5%8A%BF%E8%BE%83%E5%A4%A7%23) `671.7K 🔥`
1. [ai广告](https://s.weibo.com/weibo?q=%23ai%E5%B9%BF%E5%91%8A%23) `401.7K 🔥`
1. [狗狗濒死奔向主人见最后一面](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E6%BF%92%E6%AD%BB%E5%A5%94%E5%90%91%E4%B8%BB%E4%BA%BA%E8%A7%81%E6%9C%80%E5%90%8E%E4%B8%80%E9%9D%A2%23) `380.1K 🔥`
1. [王濛 让周杰伦听到我](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E8%AE%A9%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%90%AC%E5%88%B0%E6%88%91%23) `351.0K 🔥`
1. [谢娜演唱会全国巡演](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E5%85%A8%E5%9B%BD%E5%B7%A1%E6%BC%94%23) `568.9K 🔥` `-23%`
1. [瑞幸咖啡去冰仅半杯可退款 (Luckin Coffee can be refunded if only half a cup is removed from the ice)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%92%96%E5%95%A1%E5%8E%BB%E5%86%B0%E4%BB%85%E5%8D%8A%E6%9D%AF%E5%8F%AF%E9%80%80%E6%AC%BE%23) `428.0K 🔥` `-43%`
1. [女生嘴含夹竹桃拍照中毒过敏 (Girl poisoned and allergic after taking photo with oleander in mouth)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%98%B4%E5%90%AB%E5%A4%B9%E7%AB%B9%E6%A1%83%E6%8B%8D%E7%85%A7%E4%B8%AD%E6%AF%92%E8%BF%87%E6%95%8F%23) `427.9K 🔥` `-43%`
1. [曝沈月文章抄袭](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B2%88%E6%9C%88%E6%96%87%E7%AB%A0%E6%8A%84%E8%A2%AD%23) `422.8K 🔥` `-43%`
1. [黄灿灿一开口曾沛慈就哭了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%B8%80%E5%BC%80%E5%8F%A3%E6%9B%BE%E6%B2%9B%E6%85%88%E5%B0%B1%E5%93%AD%E4%BA%86%23) `421.6K 🔥` `-48%`
1. [曝郭宇欣私下说绝对不和刘萧旭二搭](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E5%AE%87%E6%AC%A3%E7%A7%81%E4%B8%8B%E8%AF%B4%E7%BB%9D%E5%AF%B9%E4%B8%8D%E5%92%8C%E5%88%98%E8%90%A7%E6%97%AD%E4%BA%8C%E6%90%AD%23) `415.8K 🔥` `-43%`
1. [萨摩耶坐飞机累得都不耶了](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E5%9D%90%E9%A3%9E%E6%9C%BA%E7%B4%AF%E5%BE%97%E9%83%BD%E4%B8%8D%E8%80%B6%E4%BA%86%23) `412.2K 🔥` `-29%`
1. [万千惠输了一百多票](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E8%BE%93%E4%BA%86%E4%B8%80%E7%99%BE%E5%A4%9A%E7%A5%A8%23) `408.7K 🔥` `-46%`
1. [陈瑶 雪人 (Chen Yao Snowman)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%20%E9%9B%AA%E4%BA%BA%23) `396.3K 🔥` `-46%`
1. [萧蔷为了短发剪了短发](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E4%B8%BA%E4%BA%86%E7%9F%AD%E5%8F%91%E5%89%AA%E4%BA%86%E7%9F%AD%E5%8F%91%23) `393.4K 🔥` `-44%`
1. [JISOO这张照片在X上又火起来了](https://s.weibo.com/weibo?q=%23JISOO%E8%BF%99%E5%BC%A0%E7%85%A7%E7%89%87%E5%9C%A8X%E4%B8%8A%E5%8F%88%E7%81%AB%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `390.3K 🔥` `-44%`
1. [安德列娃vs赫瓦林斯卡](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%B7%E5%88%97%E5%A8%83vs%E8%B5%AB%E7%93%A6%E6%9E%97%E6%96%AF%E5%8D%A1%23) `389.0K 🔥` `-48%`
1. [尼日尔车撒哈拉沙漠抛锚超49人渴死](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%97%A5%E5%B0%94%E8%BD%A6%E6%92%92%E5%93%88%E6%8B%89%E6%B2%99%E6%BC%A0%E6%8A%9B%E9%94%9A%E8%B6%8549%E4%BA%BA%E6%B8%B4%E6%AD%BB%23) `386.5K 🔥` `-28%`
1. [心疼张月 (Feeling sorry for Zhang Yue)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E5%BC%A0%E6%9C%88%23) `384.6K 🔥` `-46%`
1. [白鹿粉丝云包场30万座](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%B2%89%E4%B8%9D%E4%BA%91%E5%8C%85%E5%9C%BA30%E4%B8%87%E5%BA%A7%23) `381.9K 🔥` `-47%`
1. [谢楠的手一直在抖](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%E7%9A%84%E6%89%8B%E4%B8%80%E7%9B%B4%E5%9C%A8%E6%8A%96%23) `379.0K 🔥` `-29%`
1. [单依纯橄榄树 神女吟唱 (Shan Yi Pure Olive Tree Goddess Sings)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%A9%84%E6%A6%84%E6%A0%91%20%E7%A5%9E%E5%A5%B3%E5%90%9F%E5%94%B1%23) `377.7K 🔥` `-38%`
1. [中国女排vs塞尔维亚女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E5%A1%9E%E5%B0%94%E7%BB%B4%E4%BA%9A%E5%A5%B3%E6%8E%92%23) `375.2K 🔥` `-50%`
1. [雪人 哭成泪人 (Snowman cried into tears)](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E4%BA%BA%20%E5%93%AD%E6%88%90%E6%B3%AA%E4%BA%BA%23) `372.9K 🔥` `-63%`
1. [台湾太阳花女王逃美7年被押解返台](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%A4%AA%E9%98%B3%E8%8A%B1%E5%A5%B3%E7%8E%8B%E9%80%83%E7%BE%8E7%E5%B9%B4%E8%A2%AB%E6%8A%BC%E8%A7%A3%E8%BF%94%E5%8F%B0%23) `369.8K 🔥` `-30%`
1. [丈夫在妻子轻生四月后选择殉情](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%9C%A8%E5%A6%BB%E5%AD%90%E8%BD%BB%E7%94%9F%E5%9B%9B%E6%9C%88%E5%90%8E%E9%80%89%E6%8B%A9%E6%AE%89%E6%83%85%23) `363.2K 🔥` `-51%`
1. [多地调整机关单位高考期间上班时间](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E8%B0%83%E6%95%B4%E6%9C%BA%E5%85%B3%E5%8D%95%E4%BD%8D%E9%AB%98%E8%80%83%E6%9C%9F%E9%97%B4%E4%B8%8A%E7%8F%AD%E6%97%B6%E9%97%B4%23) `358.8K 🔥` `-51%`

Updated at 2026-06-06 23:41:34

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
