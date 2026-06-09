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

1. [世界杯主裁被美国拒签 (World Cup referee denied visa by US)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%BB%E8%A3%81%E8%A2%AB%E7%BE%8E%E5%9B%BD%E6%8B%92%E7%AD%BE%23) `1.8M 🔥` `NEW`
1. [天赐7官宣](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%B5%907%E5%AE%98%E5%AE%A3%23) `1.2M 🔥` `NEW`
1. [平壤体育馆专场文艺演出高清大图](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%A3%A4%E4%BD%93%E8%82%B2%E9%A6%86%E4%B8%93%E5%9C%BA%E6%96%87%E8%89%BA%E6%BC%94%E5%87%BA%E9%AB%98%E6%B8%85%E5%A4%A7%E5%9B%BE%23) `977.6K 🔥` `NEW`
1. [六年没消息的群突然响了一声](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%B9%B4%E6%B2%A1%E6%B6%88%E6%81%AF%E7%9A%84%E7%BE%A4%E7%AA%81%E7%84%B6%E5%93%8D%E4%BA%86%E4%B8%80%E5%A3%B0%23) `968.9K 🔥` `NEW`
1. [腾讯给白鹿丞磊莫离随份子99999](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E7%BB%99%E7%99%BD%E9%B9%BF%E4%B8%9E%E7%A3%8A%E8%8E%AB%E7%A6%BB%E9%9A%8F%E4%BB%BD%E5%AD%9099999%23) `911.9K 🔥` `NEW`
1. [特朗普看NBA总决赛睡着了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%9C%8BNBA%E6%80%BB%E5%86%B3%E8%B5%9B%E7%9D%A1%E7%9D%80%E4%BA%86%23) `856.9K 🔥` `NEW`
1. [天猫给内娱发球星卡了](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E7%BB%99%E5%86%85%E5%A8%B1%E5%8F%91%E7%90%83%E6%98%9F%E5%8D%A1%E4%BA%86%23) `773.6K 🔥` `NEW`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `724.7K 🔥` `NEW`
1. [马刺1比2尼克斯](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BA1%E6%AF%942%E5%B0%BC%E5%85%8B%E6%96%AF%23) `635.9K 🔥` `NEW`
1. [马刺vs尼克斯](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BAvs%E5%B0%BC%E5%85%8B%E6%96%AF%23) `569.8K 🔥` `NEW`
1. [iPhone17无缘苹果最强端侧大模型 (iPhone 17 misses Apple’s most powerful end-side model)](https://s.weibo.com/weibo?q=%23iPhone17%E6%97%A0%E7%BC%98%E8%8B%B9%E6%9E%9C%E6%9C%80%E5%BC%BA%E7%AB%AF%E4%BE%A7%E5%A4%A7%E6%A8%A1%E5%9E%8B%23) `526.2K 🔥` `NEW`
1. [森碟吃醋管叶一茜叫姐姐](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E7%A2%9F%E5%90%83%E9%86%8B%E7%AE%A1%E5%8F%B6%E4%B8%80%E8%8C%9C%E5%8F%AB%E5%A7%90%E5%A7%90%23) `522.2K 🔥` `NEW`
1. [化学二卷出题人什么时候开见面会](https://s.weibo.com/weibo?q=%23%E5%8C%96%E5%AD%A6%E4%BA%8C%E5%8D%B7%E5%87%BA%E9%A2%98%E4%BA%BA%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%BC%80%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `520.0K 🔥` `NEW`
1. [创始人去世24岁女儿拟继承近5亿家产](https://s.weibo.com/weibo?q=%23%E5%88%9B%E5%A7%8B%E4%BA%BA%E5%8E%BB%E4%B8%9624%E5%B2%81%E5%A5%B3%E5%84%BF%E6%8B%9F%E7%BB%A7%E6%89%BF%E8%BF%915%E4%BA%BF%E5%AE%B6%E4%BA%A7%23) `515.0K 🔥` `NEW`
1. [曝白鹿重组团队](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E9%B9%BF%E9%87%8D%E7%BB%84%E5%9B%A2%E9%98%9F%23) `485.5K 🔥` `NEW`
1. [山姆打包哥虐狗事件受害者发声](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E6%89%93%E5%8C%85%E5%93%A5%E8%99%90%E7%8B%97%E4%BA%8B%E4%BB%B6%E5%8F%97%E5%AE%B3%E8%80%85%E5%8F%91%E5%A3%B0%23) `401.0K 🔥` `NEW`
1. [李小冉前后的操作](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%89%8D%E5%90%8E%E7%9A%84%E6%93%8D%E4%BD%9C%23) `395.0K 🔥` `NEW`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `385.2K 🔥` `NEW`
1. [化工厂事故致3死23伤多人串供](https://s.weibo.com/weibo?q=%23%E5%8C%96%E5%B7%A5%E5%8E%82%E4%BA%8B%E6%95%85%E8%87%B43%E6%AD%BB23%E4%BC%A4%E5%A4%9A%E4%BA%BA%E4%B8%B2%E4%BE%9B%23) `378.4K 🔥` `NEW`
1. [警方对山姆打包哥实施强制措施](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%AF%B9%E5%B1%B1%E5%A7%86%E6%89%93%E5%8C%85%E5%93%A5%E5%AE%9E%E6%96%BD%E5%BC%BA%E5%88%B6%E6%8E%AA%E6%96%BD%23) `377.5K 🔥` `NEW`
1. [金饰克价下跌400元 (Price of gold jewelry drops by 400 yuan per gram)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E4%B8%8B%E8%B7%8C400%E5%85%83%23) `363.9K 🔥` `NEW`
1. [虞书欣身材状态](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%BA%AB%E6%9D%90%E7%8A%B6%E6%80%81%23) `351.7K 🔥` `NEW`
1. [王橹杰的眉毛呢](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%9A%84%E7%9C%89%E6%AF%9B%E5%91%A2%23) `325.4K 🔥` `NEW`
1. [终于知道小孩出门为什么总要抱了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E5%B0%8F%E5%AD%A9%E5%87%BA%E9%97%A8%E4%B8%BA%E4%BB%80%E4%B9%88%E6%80%BB%E8%A6%81%E6%8A%B1%E4%BA%86%23) `304.1K 🔥` `NEW`
1. [向太说刘亦菲14岁已谈吐惊人](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%88%98%E4%BA%A6%E8%8F%B214%E5%B2%81%E5%B7%B2%E8%B0%88%E5%90%90%E6%83%8A%E4%BA%BA%23) `289.9K 🔥` `NEW`
1. [河南农商行骗贷手法多样](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%86%9C%E5%95%86%E8%A1%8C%E9%AA%97%E8%B4%B7%E6%89%8B%E6%B3%95%E5%A4%9A%E6%A0%B7%23) `287.1K 🔥` `NEW`
1. [韩国爱豆误入贺峻霖粉丝直播间](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%88%B1%E8%B1%86%E8%AF%AF%E5%85%A5%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%B2%89%E4%B8%9D%E7%9B%B4%E6%92%AD%E9%97%B4%23) `285.9K 🔥` `NEW`
1. [高考统考科目考试全部结束](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%BB%9F%E8%80%83%E7%A7%91%E7%9B%AE%E8%80%83%E8%AF%95%E5%85%A8%E9%83%A8%E7%BB%93%E6%9D%9F%23) `284.6K 🔥` `NEW`
1. [特朗普遭全场嘘声](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E9%81%AD%E5%85%A8%E5%9C%BA%E5%98%98%E5%A3%B0%23) `283.9K 🔥` `NEW`
1. [高考地理](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%9C%B0%E7%90%86%23) `282.7K 🔥` `NEW`
1. [苹果官宣牵手安卓 (Apple officially announces partnership with Android)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%AE%98%E5%AE%A3%E7%89%B5%E6%89%8B%E5%AE%89%E5%8D%93%23) `280.4K 🔥` `NEW`
1. [NBA总决赛](https://s.weibo.com/weibo?q=%23NBA%E6%80%BB%E5%86%B3%E8%B5%9B%23) `278.6K 🔥` `NEW`
1. [尼克斯马刺冲突](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%85%8B%E6%96%AF%E9%A9%AC%E5%88%BA%E5%86%B2%E7%AA%81%23) `277.6K 🔥` `NEW`
1. [郑钦文怎么了](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%80%8E%E4%B9%88%E4%BA%86%23) `276.3K 🔥` `NEW`
1. [莫离开播](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E5%BC%80%E6%92%AD%23) `275.3K 🔥` `NEW`
1. [高考物理](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%89%A9%E7%90%86%23) `272.9K 🔥` `NEW`
1. [宋祖儿路透眼睛比嘴巴大](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E8%B7%AF%E9%80%8F%E7%9C%BC%E7%9D%9B%E6%AF%94%E5%98%B4%E5%B7%B4%E5%A4%A7%23) `272.2K 🔥` `NEW`
1. [台湾有事菲律宾敢有事吗](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E6%9C%89%E4%BA%8B%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%95%A2%E6%9C%89%E4%BA%8B%E5%90%97%23) `270.9K 🔥` `NEW`
1. [山东物理](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E7%89%A9%E7%90%86%23) `269.5K 🔥` `NEW`
1. [女生背着十几斤试卷走出考场](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%83%8C%E7%9D%80%E5%8D%81%E5%87%A0%E6%96%A4%E8%AF%95%E5%8D%B7%E8%B5%B0%E5%87%BA%E8%80%83%E5%9C%BA%23) `267.2K 🔥` `NEW`
1. [曝十个勤天合作推广费500万 (Ten Qintian cooperation promotion fee of RMB 5 million revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E5%90%88%E4%BD%9C%E6%8E%A8%E5%B9%BF%E8%B4%B9500%E4%B8%87%23) `266.6K 🔥` `NEW`
1. [薛之谦官宣天赐的声音7](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%AE%98%E5%AE%A3%E5%A4%A9%E8%B5%90%E7%9A%84%E5%A3%B0%E9%9F%B37%23) `265.1K 🔥` `NEW`
1. [金价下跌后郑州金店被挤爆](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C%E5%90%8E%E9%83%91%E5%B7%9E%E9%87%91%E5%BA%97%E8%A2%AB%E6%8C%A4%E7%88%86%23) `263.3K 🔥` `NEW`
1. [巴黎偶遇李嫣](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%81%B6%E9%81%87%E6%9D%8E%E5%AB%A3%23) `261.5K 🔥` `NEW`
1. [周冠宇全速领航员](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%A0%E5%AE%87%E5%85%A8%E9%80%9F%E9%A2%86%E8%88%AA%E5%91%98%23) `260.5K 🔥` `NEW`
1. [于正晒晚晚画的自己](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E6%99%92%E6%99%9A%E6%99%9A%E7%94%BB%E7%9A%84%E8%87%AA%E5%B7%B1%23) `259.0K 🔥` `NEW`
1. [长相思翘楚名场面对比](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%9B%B8%E6%80%9D%E7%BF%98%E6%A5%9A%E5%90%8D%E5%9C%BA%E9%9D%A2%E5%AF%B9%E6%AF%94%23) `257.4K 🔥` `NEW`
1. [尼克斯主场致敬林书豪](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%85%8B%E6%96%AF%E4%B8%BB%E5%9C%BA%E8%87%B4%E6%95%AC%E6%9E%97%E4%B9%A6%E8%B1%AA%23) `256.2K 🔥` `NEW`
1. [艾米低调最后进考场](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E4%BD%8E%E8%B0%83%E6%9C%80%E5%90%8E%E8%BF%9B%E8%80%83%E5%9C%BA%23) `288.5K 🔥` `+101%`
1. [于谦美团闪购名酒推荐官](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E8%B0%A6%E7%BE%8E%E5%9B%A2%E9%97%AA%E8%B4%AD%E5%90%8D%E9%85%92%E6%8E%A8%E8%8D%90%E5%AE%98%23) `972.1K 🔥`
1. [高考 (college entrance examination)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%23) `381.0K 🔥` `-64%`

Updated at 2026-06-09 12:33:22

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
