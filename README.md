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

1. [申论 (Arguments)](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%AE%BA%23) `292.2K 🔥` `NEW`
1. [丰巢超时收5毛钱恶心又得咽下](https://s.weibo.com/weibo?q=%23%E4%B8%B0%E5%B7%A2%E8%B6%85%E6%97%B6%E6%94%B65%E6%AF%9B%E9%92%B1%E6%81%B6%E5%BF%83%E5%8F%88%E5%BE%97%E5%92%BD%E4%B8%8B%23) `268.6K 🔥` `NEW`
1. [何炅逞能公主抱导致肩伤](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E9%80%9E%E8%83%BD%E5%85%AC%E4%B8%BB%E6%8A%B1%E5%AF%BC%E8%87%B4%E8%82%A9%E4%BC%A4%23) `210.1K 🔥` `NEW`
1. [江汉大米重金属污染风险高系谣言](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B1%89%E5%A4%A7%E7%B1%B3%E9%87%8D%E9%87%91%E5%B1%9E%E6%B1%A1%E6%9F%93%E9%A3%8E%E9%99%A9%E9%AB%98%E7%B3%BB%E8%B0%A3%E8%A8%80%23) `206.2K 🔥` `NEW`
1. [省考答案](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%E7%AD%94%E6%A1%88%23) `199.2K 🔥` `NEW`
1. [河南省考图推](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E7%9C%81%E8%80%83%E5%9B%BE%E6%8E%A8%23) `175.9K 🔥` `NEW`
1. [申论考100分就能上岸了](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%AE%BA%E8%80%83100%E5%88%86%E5%B0%B1%E8%83%BD%E4%B8%8A%E5%B2%B8%E4%BA%86%23) `168.1K 🔥` `NEW`
1. [刘昊然周冬雨同款帽子](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E5%91%A8%E5%86%AC%E9%9B%A8%E5%90%8C%E6%AC%BE%E5%B8%BD%E5%AD%90%23) `156.8K 🔥` `NEW`
1. [中国女足vs中国台北女足首发出炉](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B3vs%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E5%A5%B3%E8%B6%B3%E9%A6%96%E5%8F%91%E5%87%BA%E7%82%89%23) `151.0K 🔥` `NEW`
1. [春天是洞洞鞋的统治区](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%A4%A9%E6%98%AF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9A%84%E7%BB%9F%E6%B2%BB%E5%8C%BA%23) `150.4K 🔥` `NEW`
1. [享界粉白新色亮相上海AWE (Xiangjie’s new pink and white color debuts at Shanghai AWE)](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8C%E7%B2%89%E7%99%BD%E6%96%B0%E8%89%B2%E4%BA%AE%E7%9B%B8%E4%B8%8A%E6%B5%B7AWE%23) `149.8K 🔥` `NEW`
1. [宋雨琦是懂白色情人节的](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%98%AF%E6%87%82%E7%99%BD%E8%89%B2%E6%83%85%E4%BA%BA%E8%8A%82%E7%9A%84%23) `149.6K 🔥` `NEW`
1. [省考 没有上岸的风险](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%20%E6%B2%A1%E6%9C%89%E4%B8%8A%E5%B2%B8%E7%9A%84%E9%A3%8E%E9%99%A9%23) `147.9K 🔥` `NEW`
1. [周云杰家电界最严厉的父亲](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BA%91%E6%9D%B0%E5%AE%B6%E7%94%B5%E7%95%8C%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E4%BA%B2%23) `147.3K 🔥` `NEW`
1. [省考弃考率显著下降](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%E5%BC%83%E8%80%83%E7%8E%87%E6%98%BE%E8%91%97%E4%B8%8B%E9%99%8D%23) `133.0K 🔥` `NEW`
1. [拉塞尔夺F1中国站冲刺赛冠军](https://s.weibo.com/weibo?q=%23%E6%8B%89%E5%A1%9E%E5%B0%94%E5%A4%BAF1%E4%B8%AD%E5%9B%BD%E7%AB%99%E5%86%B2%E5%88%BA%E8%B5%9B%E5%86%A0%E5%86%9B%23) `117.6K 🔥` `NEW`
1. [河北省考 行测好难](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E7%9C%81%E8%80%83%20%E8%A1%8C%E6%B5%8B%E5%A5%BD%E9%9A%BE%23) `115.9K 🔥` `NEW`
1. [原神](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `112.4K 🔥` `NEW`
1. [多方回应火锅店老板砍伤广场舞人群](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E7%81%AB%E9%94%85%E5%BA%97%E8%80%81%E6%9D%BF%E7%A0%8D%E4%BC%A4%E5%B9%BF%E5%9C%BA%E8%88%9E%E4%BA%BA%E7%BE%A4%23) `111.9K 🔥` `NEW`
1. [余秀华曾抑郁半个月无法下床](https://s.weibo.com/weibo?q=%23%E4%BD%99%E7%A7%80%E5%8D%8E%E6%9B%BE%E6%8A%91%E9%83%81%E5%8D%8A%E4%B8%AA%E6%9C%88%E6%97%A0%E6%B3%95%E4%B8%8B%E5%BA%8A%23) `109.0K 🔥` `NEW`
1. [吴昕在活动后台被错认成维嘉 (Wu Xin was mistakenly identified as Weijia at the event backstage)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%95%E5%9C%A8%E6%B4%BB%E5%8A%A8%E5%90%8E%E5%8F%B0%E8%A2%AB%E9%94%99%E8%AE%A4%E6%88%90%E7%BB%B4%E5%98%89%23) `100.2K 🔥` `NEW`
1. [14年后好声音顶流们现在怎么样了](https://s.weibo.com/weibo?q=%2314%E5%B9%B4%E5%90%8E%E5%A5%BD%E5%A3%B0%E9%9F%B3%E9%A1%B6%E6%B5%81%E4%BB%AC%E7%8E%B0%E5%9C%A8%E6%80%8E%E4%B9%88%E6%A0%B7%E4%BA%86%23) `100.2K 🔥` `NEW`
1. [当派对主题是穿错衣服](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%B4%BE%E5%AF%B9%E4%B8%BB%E9%A2%98%E6%98%AF%E7%A9%BF%E9%94%99%E8%A1%A3%E6%9C%8D%23) `100.2K 🔥` `NEW`
1. [省考 比国考难](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%20%E6%AF%94%E5%9B%BD%E8%80%83%E9%9A%BE%23) `98.8K 🔥` `NEW`
1. [两名中国公民在澳大利亚洪灾中遇难](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%90%8D%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%9C%A8%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E6%B4%AA%E7%81%BE%E4%B8%AD%E9%81%87%E9%9A%BE%23) `97.0K 🔥` `NEW`
1. [辽宁行测](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E8%A1%8C%E6%B5%8B%23) `96.9K 🔥` `NEW`
1. [安徽省考](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E7%9C%81%E8%80%83%23) `96.1K 🔥` `NEW`
1. [王艺迪4比3申裕斌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AA4%E6%AF%943%E7%94%B3%E8%A3%95%E6%96%8C%23) `93.3K 🔥` `NEW`
1. [省考数量](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%E6%95%B0%E9%87%8F%23) `88.4K 🔥` `NEW`
1. [孔雪儿邓凯白色情人节大片](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E9%82%93%E5%87%AF%E7%99%BD%E8%89%B2%E6%83%85%E4%BA%BA%E8%8A%82%E5%A4%A7%E7%89%87%23) `85.6K 🔥` `NEW`
1. [省考图推 (Provincial Examination Tuition)](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%E5%9B%BE%E6%8E%A8%23) `874.6K 🔥` `+306%`
1. [十五五向你发出奋斗邀请 (The 15th Five-Year Plan sends you an invitation to struggle.)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E5%90%91%E4%BD%A0%E5%8F%91%E5%87%BA%E5%A5%8B%E6%96%97%E9%82%80%E8%AF%B7%23) `696.8K 🔥` `+25%`
1. [美团外卖周末半价吃大餐 (Meituan Takeaway offers half-price meals on weekends)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E5%91%A8%E6%9C%AB%E5%8D%8A%E4%BB%B7%E5%90%83%E5%A4%A7%E9%A4%90%23) `632.1K 🔥` `+385%`
1. [近半老年人在租房时被拒绝](https://s.weibo.com/weibo?q=%23%E8%BF%91%E5%8D%8A%E8%80%81%E5%B9%B4%E4%BA%BA%E5%9C%A8%E7%A7%9F%E6%88%BF%E6%97%B6%E8%A2%AB%E6%8B%92%E7%BB%9D%23) `185.4K 🔥` `+98%`
1. [妻子的浪漫旅行8路透 (Wife’s Romantic Travel 8 Reuters)](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%9A%84%E6%B5%AA%E6%BC%AB%E6%97%85%E8%A1%8C8%E8%B7%AF%E9%80%8F%23) `141.2K 🔥`
1. [被丢弃厕所女婴生母感谢养母](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%B8%A2%E5%BC%83%E5%8E%95%E6%89%80%E5%A5%B3%E5%A9%B4%E7%94%9F%E6%AF%8D%E6%84%9F%E8%B0%A2%E5%85%BB%E6%AF%8D%23) `101.1K 🔥`
1. [省考](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%23) `1.2M 🔥` `-44%`
1. [伊朗30枚超重导弹袭击以色列 (Iran attacks Israel with 30 super-heavy missiles)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%9730%E6%9E%9A%E8%B6%85%E9%87%8D%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%23) `196.8K 🔥` `-35%`
1. [成为中国人何以海外出圈](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%B8%BA%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%BD%95%E4%BB%A5%E6%B5%B7%E5%A4%96%E5%87%BA%E5%9C%88%23) `179.6K 🔥` `-38%`
1. [田曦薇张凌赫经纪人依旧纯恨中 (Tian Xiwei, Zhang Linghe’s manager is still in pure hatred)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%BB%8F%E7%BA%AA%E4%BA%BA%E4%BE%9D%E6%97%A7%E7%BA%AF%E6%81%A8%E4%B8%AD%23) `179.4K 🔥` `-38%`
1. [男子狂扇自己称后悔花10万再婚](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%8B%82%E6%89%87%E8%87%AA%E5%B7%B1%E7%A7%B0%E5%90%8E%E6%82%94%E8%8A%B110%E4%B8%87%E5%86%8D%E5%A9%9A%23) `165.7K 🔥` `-42%`
1. [鞠婧祎杂志开售](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%9D%82%E5%BF%97%E5%BC%80%E5%94%AE%23) `151.2K 🔥` `-46%`
1. [第31届白玉兰奖](https://s.weibo.com/weibo?q=%23%E7%AC%AC31%E5%B1%8A%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%23) `148.8K 🔥` `-64%`
1. [弟弟的脐带血15年后救了哥哥](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E7%9A%84%E8%84%90%E5%B8%A6%E8%A1%8015%E5%B9%B4%E5%90%8E%E6%95%91%E4%BA%86%E5%93%A5%E5%93%A5%23) `148.8K 🔥` `-42%`
1. [杨幂赵丽颖 白玉兰 (Yang Mi, Zhao Liying, Magnolia)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E7%99%BD%E7%8E%89%E5%85%B0%23) `148.6K 🔥` `-31%`
1. [我们的少年时代2 (Our Boyhood 2)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `148.3K 🔥` `-85%`
1. [人民大会堂的热水瓶用了30年](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%E7%9A%84%E7%83%AD%E6%B0%B4%E7%93%B6%E7%94%A8%E4%BA%8630%E5%B9%B4%23) `146.8K 🔥` `-50%`
1. [女孩用胡萝卜啃出70cm高黄鹤楼 (Girl gnaws out a 70cm tall Yellow Crane Tower from carrots)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%94%A8%E8%83%A1%E8%90%9D%E5%8D%9C%E5%95%83%E5%87%BA70cm%E9%AB%98%E9%BB%84%E9%B9%A4%E6%A5%BC%23) `122.2K 🔥` `-49%`
1. [湖北省考](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E7%9C%81%E8%80%83%23) `117.4K 🔥` `-27%`
1. [严屹宽 别让老霸总演这些](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%20%E5%88%AB%E8%AE%A9%E8%80%81%E9%9C%B8%E6%80%BB%E6%BC%94%E8%BF%99%E4%BA%9B%23) `114.7K 🔥` `-59%`
1. [原来被老天爷追着喂饭是这样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%A2%AB%E8%80%81%E5%A4%A9%E7%88%B7%E8%BF%BD%E7%9D%80%E5%96%82%E9%A5%AD%E6%98%AF%E8%BF%99%E6%A0%B7%23) `100.0K 🔥` `-46%`
1. [ELLE四月刊鞠婧祎封面](https://s.weibo.com/weibo?q=%23ELLE%E5%9B%9B%E6%9C%88%E5%88%8A%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B0%81%E9%9D%A2%23) `93.8K 🔥` `-24%`

Updated at 2026-03-14 12:57:11

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
