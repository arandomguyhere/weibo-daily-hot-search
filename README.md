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

1. [梅西帽子戏法 (Messi hat trick)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E5%B8%BD%E5%AD%90%E6%88%8F%E6%B3%95%23) `9.8M 🔥` `NEW`
1. [压力给到C罗](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%8A%9B%E7%BB%99%E5%88%B0C%E7%BD%97%23) `2.1M 🔥` `NEW`
1. [我国成功发射实践31号卫星](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%88%90%E5%8A%9F%E5%8F%91%E5%B0%84%E5%AE%9E%E8%B7%B531%E5%8F%B7%E5%8D%AB%E6%98%9F%23) `1.7M 🔥` `NEW`
1. [看球上京东点烧烤冰啤住观赛房](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%90%83%E4%B8%8A%E4%BA%AC%E4%B8%9C%E7%82%B9%E7%83%A7%E7%83%A4%E5%86%B0%E5%95%A4%E4%BD%8F%E8%A7%82%E8%B5%9B%E6%88%BF%23) `1.5M 🔥` `NEW`
1. [王楚然只能笑卢昱晓不敢笑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%8F%AA%E8%83%BD%E7%AC%91%E5%8D%A2%E6%98%B1%E6%99%93%E4%B8%8D%E6%95%A2%E7%AC%91%23) `1.3M 🔥` `NEW`
1. [司机高速上睡了6次乘客录下全程](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E9%AB%98%E9%80%9F%E4%B8%8A%E7%9D%A1%E4%BA%866%E6%AC%A1%E4%B9%98%E5%AE%A2%E5%BD%95%E4%B8%8B%E5%85%A8%E7%A8%8B%23) `1.1M 🔥` `NEW`
1. [哈兰德 梅西太疯狂了](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%20%E6%A2%85%E8%A5%BF%E5%A4%AA%E7%96%AF%E7%8B%82%E4%BA%86%23) `925.5K 🔥` `NEW`
1. [诸神先别黄昏了](https://s.weibo.com/weibo?q=%23%E8%AF%B8%E7%A5%9E%E5%85%88%E5%88%AB%E9%BB%84%E6%98%8F%E4%BA%86%23) `867.7K 🔥` `NEW`
1. [奔跑吧路透](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E8%B7%AF%E9%80%8F%23) `491.5K 🔥` `NEW`
1. [梅西回应落泪](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E5%9B%9E%E5%BA%94%E8%90%BD%E6%B3%AA%23) `490.1K 🔥` `NEW`
1. [奥地利vs约旦 (Austria vs Jordan)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%9C%B0%E5%88%A9vs%E7%BA%A6%E6%97%A6%23) `489.1K 🔥` `NEW`
1. [石凯曾甩了谈了多年的素人女友](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%87%AF%E6%9B%BE%E7%94%A9%E4%BA%86%E8%B0%88%E4%BA%86%E5%A4%9A%E5%B9%B4%E7%9A%84%E7%B4%A0%E4%BA%BA%E5%A5%B3%E5%8F%8B%23) `486.5K 🔥` `NEW`
1. [第一个发明这么吃辣条的是天才](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%91%E6%98%8E%E8%BF%99%E4%B9%88%E5%90%83%E8%BE%A3%E6%9D%A1%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%23) `483.1K 🔥` `NEW`
1. [苏醒评梅西](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E8%AF%84%E6%A2%85%E8%A5%BF%23) `481.9K 🔥` `NEW`
1. [产检发现胎儿在妈妈腹中拉肚子](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E6%A3%80%E5%8F%91%E7%8E%B0%E8%83%8E%E5%84%BF%E5%9C%A8%E5%A6%88%E5%A6%88%E8%85%B9%E4%B8%AD%E6%8B%89%E8%82%9A%E5%AD%90%23) `479.1K 🔥` `NEW`
1. [高市早苗在G7峰会转椅子被批没教养](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%9C%A8G7%E5%B3%B0%E4%BC%9A%E8%BD%AC%E6%A4%85%E5%AD%90%E8%A2%AB%E6%89%B9%E6%B2%A1%E6%95%99%E5%85%BB%23) `474.5K 🔥` `NEW`
1. [包上恩算IP粉碎机吗](https://s.weibo.com/weibo?q=%23%E5%8C%85%E4%B8%8A%E6%81%A9%E7%AE%97IP%E7%B2%89%E7%A2%8E%E6%9C%BA%E5%90%97%23) `471.9K 🔥` `NEW`
1. [关晓彤也有拍戏垫板子的一天](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E4%B9%9F%E6%9C%89%E6%8B%8D%E6%88%8F%E5%9E%AB%E6%9D%BF%E5%AD%90%E7%9A%84%E4%B8%80%E5%A4%A9%23) `469.2K 🔥` `NEW`
1. [曝微信正测试AI支付功能](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BE%AE%E4%BF%A1%E6%AD%A3%E6%B5%8B%E8%AF%95AI%E6%94%AF%E4%BB%98%E5%8A%9F%E8%83%BD%23) `467.3K 🔥` `NEW`
1. [诸神早八](https://s.weibo.com/weibo?q=%23%E8%AF%B8%E7%A5%9E%E6%97%A9%E5%85%AB%23) `463.8K 🔥` `NEW`
1. [蒙淇淇已被禁言 (Meng Qiqi has been banned)](https://s.weibo.com/weibo?q=%23%E8%92%99%E6%B7%87%E6%B7%87%E5%B7%B2%E8%A2%AB%E7%A6%81%E8%A8%80%23) `462.5K 🔥` `NEW`
1. [要不说地铁是文学的温床](https://s.weibo.com/weibo?q=%23%E8%A6%81%E4%B8%8D%E8%AF%B4%E5%9C%B0%E9%93%81%E6%98%AF%E6%96%87%E5%AD%A6%E7%9A%84%E6%B8%A9%E5%BA%8A%23) `456.6K 🔥` `NEW`
1. [何猷君儿子幼儿园每年学费杂费超10万](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%84%BF%E5%AD%90%E5%B9%BC%E5%84%BF%E5%9B%AD%E6%AF%8F%E5%B9%B4%E5%AD%A6%E8%B4%B9%E6%9D%82%E8%B4%B9%E8%B6%8510%E4%B8%87%23) `455.4K 🔥` `NEW`
1. [上京东刘宇宁请吃肯德基](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%AC%E4%B8%9C%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B7%E5%90%83%E8%82%AF%E5%BE%B7%E5%9F%BA%23) `452.9K 🔥` `NEW`
1. [梅西回应帽子戏法](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E5%9B%9E%E5%BA%94%E5%B8%BD%E5%AD%90%E6%88%8F%E6%B3%95%23) `451.3K 🔥` `NEW`
1. [特朗普称已在太空部署摄像头](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%B7%B2%E5%9C%A8%E5%A4%AA%E7%A9%BA%E9%83%A8%E7%BD%B2%E6%91%84%E5%83%8F%E5%A4%B4%23) `448.3K 🔥` `NEW`
1. [翘楚大结局](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E5%A4%A7%E7%BB%93%E5%B1%80%23) `445.5K 🔥` `NEW`
1. [余承东透露打造享界G9初衷](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E9%80%8F%E9%9C%B2%E6%89%93%E9%80%A0%E4%BA%AB%E7%95%8CG9%E5%88%9D%E8%A1%B7%23) `443.3K 🔥` `NEW`
1. [梅西太猛了](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E5%A4%AA%E7%8C%9B%E4%BA%86%23) `441.9K 🔥` `NEW`
1. [家长称被孩子老师骗至家中性侵](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E7%A7%B0%E8%A2%AB%E5%AD%A9%E5%AD%90%E8%80%81%E5%B8%88%E9%AA%97%E8%87%B3%E5%AE%B6%E4%B8%AD%E6%80%A7%E4%BE%B5%23) `438.9K 🔥` `NEW`
1. [健身房偶遇刘宇宁 (Encountering Liu Yuning at the gym)](https://s.weibo.com/weibo?q=%23%E5%81%A5%E8%BA%AB%E6%88%BF%E5%81%B6%E9%81%87%E5%88%98%E5%AE%87%E5%AE%81%23) `436.0K 🔥` `NEW`
1. [国台办回应张凌赫海峡论坛演讲](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%B5%B7%E5%B3%A1%E8%AE%BA%E5%9D%9B%E6%BC%94%E8%AE%B2%23) `434.2K 🔥` `NEW`
1. [范志毅的嘴又开光了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%BF%97%E6%AF%85%E7%9A%84%E5%98%B4%E5%8F%88%E5%BC%80%E5%85%89%E4%BA%86%23) `431.4K 🔥` `NEW`
1. [阿根廷vs阿尔及利亚](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E9%98%BF%E5%B0%94%E5%8F%8A%E5%88%A9%E4%BA%9A%23) `429.9K 🔥` `NEW`
1. [骗儿子进戒网瘾机构母亲称无法道歉](https://s.weibo.com/weibo?q=%23%E9%AA%97%E5%84%BF%E5%AD%90%E8%BF%9B%E6%88%92%E7%BD%91%E7%98%BE%E6%9C%BA%E6%9E%84%E6%AF%8D%E4%BA%B2%E7%A7%B0%E6%97%A0%E6%B3%95%E9%81%93%E6%AD%89%23) `426.6K 🔥` `NEW`
1. [忙忙碌碌寻宝藏2定档](https://s.weibo.com/weibo?q=%23%E5%BF%99%E5%BF%99%E7%A2%8C%E7%A2%8C%E5%AF%BB%E5%AE%9D%E8%97%8F2%E5%AE%9A%E6%A1%A3%23) `425.0K 🔥` `NEW`
1. [3280元眼镜进价126](https://s.weibo.com/weibo?q=%233280%E5%85%83%E7%9C%BC%E9%95%9C%E8%BF%9B%E4%BB%B7126%23) `422.0K 🔥` `NEW`
1. [奚梦瑶婚后首次公开亮相](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E5%90%8E%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%E4%BA%AE%E7%9B%B8%23) `419.8K 🔥` `NEW`
1. [重庆一张床垫让路人集体躺平](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E4%B8%80%E5%BC%A0%E5%BA%8A%E5%9E%AB%E8%AE%A9%E8%B7%AF%E4%BA%BA%E9%9B%86%E4%BD%93%E8%BA%BA%E5%B9%B3%23) `417.5K 🔥` `NEW`
1. [杨天真 不赚钱的事不做](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%20%E4%B8%8D%E8%B5%9A%E9%92%B1%E7%9A%84%E4%BA%8B%E4%B8%8D%E5%81%9A%23) `415.2K 🔥` `NEW`
1. [贺峻霖中传毕业大合照 (He Junlin's graduation photo)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E4%B8%AD%E4%BC%A0%E6%AF%95%E4%B8%9A%E5%A4%A7%E5%90%88%E7%85%A7%23) `412.8K 🔥` `NEW`
1. [梅西世界波](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E4%B8%96%E7%95%8C%E6%B3%A2%23) `410.4K 🔥` `NEW`
1. [得了皮肤病一定不要自以为是](https://s.weibo.com/weibo?q=%23%E5%BE%97%E4%BA%86%E7%9A%AE%E8%82%A4%E7%97%85%E4%B8%80%E5%AE%9A%E4%B8%8D%E8%A6%81%E8%87%AA%E4%BB%A5%E4%B8%BA%E6%98%AF%23) `407.7K 🔥` `NEW`
1. [歌手本周新登场6个补位歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%9C%AC%E5%91%A8%E6%96%B0%E7%99%BB%E5%9C%BA6%E4%B8%AA%E8%A1%A5%E4%BD%8D%E6%AD%8C%E6%89%8B%23) `405.5K 🔥` `NEW`
1. [寺庙保安31棍打死70岁老人被逮捕](https://s.weibo.com/weibo?q=%23%E5%AF%BA%E5%BA%99%E4%BF%9D%E5%AE%8931%E6%A3%8D%E6%89%93%E6%AD%BB70%E5%B2%81%E8%80%81%E4%BA%BA%E8%A2%AB%E9%80%AE%E6%8D%95%23) `404.4K 🔥` `NEW`
1. [小猫为吃的使出浑身解数](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%B8%BA%E5%90%83%E7%9A%84%E4%BD%BF%E5%87%BA%E6%B5%91%E8%BA%AB%E8%A7%A3%E6%95%B0%23) `400.7K 🔥` `NEW`
1. [京东一夜之间给城市降温](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E4%B8%80%E5%A4%9C%E4%B9%8B%E9%97%B4%E7%BB%99%E5%9F%8E%E5%B8%82%E9%99%8D%E6%B8%A9%23) `398.5K 🔥` `NEW`
1. [京东看球免单](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E7%9C%8B%E7%90%83%E5%85%8D%E5%8D%95%23) `396.1K 🔥` `NEW`
1. [孙俪晒迪士尼10年对比照](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%99%92%E8%BF%AA%E5%A3%AB%E5%B0%BC10%E5%B9%B4%E5%AF%B9%E6%AF%94%E7%85%A7%23) `394.1K 🔥` `NEW`
1. [天猫和影视飓风探索下一代AI硬件](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E5%92%8C%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E6%8E%A2%E7%B4%A2%E4%B8%8B%E4%B8%80%E4%BB%A3AI%E7%A1%AC%E4%BB%B6%23) `922.0K 🔥` `+542%`
1. [石凯 张楚寒 (Shi Kai Zhang Chuhan)](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%87%AF%20%E5%BC%A0%E6%A5%9A%E5%AF%92%23) `459.3K 🔥` `+75%`

Updated at 2026-06-17 13:05:02

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
