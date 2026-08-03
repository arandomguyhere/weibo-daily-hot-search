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

1. [DeepSeek一天消耗了8万亿 (DeepSeek consumes 8 trillion a day)](https://s.weibo.com/weibo?q=%23DeepSeek%E4%B8%80%E5%A4%A9%E6%B6%88%E8%80%97%E4%BA%868%E4%B8%87%E4%BA%BF%23) `1.0M 🔥` `NEW`
1. [日本7人地震逃生后回商场被炸死](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7%E4%BA%BA%E5%9C%B0%E9%9C%87%E9%80%83%E7%94%9F%E5%90%8E%E5%9B%9E%E5%95%86%E5%9C%BA%E8%A2%AB%E7%82%B8%E6%AD%BB%23) `532.0K 🔥` `NEW`
1. [没有BGM的导弹测试原声](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89BGM%E7%9A%84%E5%AF%BC%E5%BC%B9%E6%B5%8B%E8%AF%95%E5%8E%9F%E5%A3%B0%23) `483.3K 🔥` `NEW`
1. [低精力可以去医院查有没有疾病](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E5%8F%AF%E4%BB%A5%E5%8E%BB%E5%8C%BB%E9%99%A2%E6%9F%A5%E6%9C%89%E6%B2%A1%E6%9C%89%E7%96%BE%E7%97%85%23) `473.5K 🔥` `NEW`
1. [孙亚龙宣布复出](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BA%9A%E9%BE%99%E5%AE%A3%E5%B8%83%E5%A4%8D%E5%87%BA%23) `269.9K 🔥` `NEW`
1. [曝SHE将合体开演唱会](https://s.weibo.com/weibo?q=%23%E6%9B%9DSHE%E5%B0%86%E5%90%88%E4%BD%93%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `227.4K 🔥` `NEW`
1. [网友发视频造谣西瓜随便摘被抓](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%8F%91%E8%A7%86%E9%A2%91%E9%80%A0%E8%B0%A3%E8%A5%BF%E7%93%9C%E9%9A%8F%E4%BE%BF%E6%91%98%E8%A2%AB%E6%8A%93%23) `226.8K 🔥` `NEW`
1. [陈伟霆九门直播哭了](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%B9%9D%E9%97%A8%E7%9B%B4%E6%92%AD%E5%93%AD%E4%BA%86%23) `226.3K 🔥` `NEW`
1. [煮火锅突然爆炸全屋溅满红油](https://s.weibo.com/weibo?q=%23%E7%85%AE%E7%81%AB%E9%94%85%E7%AA%81%E7%84%B6%E7%88%86%E7%82%B8%E5%85%A8%E5%B1%8B%E6%BA%85%E6%BB%A1%E7%BA%A2%E6%B2%B9%23) `215.3K 🔥` `NEW`
1. [严浩翔又没绷住笑](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%8F%88%E6%B2%A1%E7%BB%B7%E4%BD%8F%E7%AC%91%23) `209.0K 🔥` `NEW`
1. [DeepSeek登顶全球第一 (DeepSeek ranks first in the world)](https://s.weibo.com/weibo?q=%23DeepSeek%E7%99%BB%E9%A1%B6%E5%85%A8%E7%90%83%E7%AC%AC%E4%B8%80%23) `208.7K 🔥` `NEW`
1. [罗正一年花170元146给了苹果](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E4%B8%80%E5%B9%B4%E8%8A%B1170%E5%85%83146%E7%BB%99%E4%BA%86%E8%8B%B9%E6%9E%9C%23) `208.5K 🔥` `NEW`
1. [迪丽热巴 闵塔鲨](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E9%97%B5%E5%A1%94%E9%B2%A8%23) `208.3K 🔥` `NEW`
1. [东莞9岁女孩确诊性早熟](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%8E%9E9%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%A1%AE%E8%AF%8A%E6%80%A7%E6%97%A9%E7%86%9F%23) `208.0K 🔥` `NEW`
1. [U17国足3比2阿森纳U17](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B33%E6%AF%942%E9%98%BF%E6%A3%AE%E7%BA%B3U17%23) `207.8K 🔥` `NEW`
1. [柳智敏致歉称吃太多](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E8%87%B4%E6%AD%89%E7%A7%B0%E5%90%83%E5%A4%AA%E5%A4%9A%23) `207.3K 🔥` `NEW`
1. [罗正 千万存款](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%20%E5%8D%83%E4%B8%87%E5%AD%98%E6%AC%BE%23) `207.3K 🔥` `NEW`
1. [9岁女孩长期吃蛋糕熬夜确诊性早熟](https://s.weibo.com/weibo?q=%239%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%95%BF%E6%9C%9F%E5%90%83%E8%9B%8B%E7%B3%95%E7%86%AC%E5%A4%9C%E7%A1%AE%E8%AF%8A%E6%80%A7%E6%97%A9%E7%86%9F%23) `206.8K 🔥` `NEW`
1. [虞书欣开球](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BC%80%E7%90%83%23) `206.5K 🔥` `NEW`
1. [看出九尾在巴黎有多热了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%87%BA%E4%B9%9D%E5%B0%BE%E5%9C%A8%E5%B7%B4%E9%BB%8E%E6%9C%89%E5%A4%9A%E7%83%AD%E4%BA%86%23) `206.4K 🔥` `NEW`
1. [宋亚轩用身体给粉丝送love (Song Yaxuan uses her body to send love to fans)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%94%A8%E8%BA%AB%E4%BD%93%E7%BB%99%E7%B2%89%E4%B8%9D%E9%80%81love%23) `206.2K 🔥` `NEW`
1. [医生提醒洞洞鞋不要长期穿](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E6%B4%9E%E6%B4%9E%E9%9E%8B%E4%B8%8D%E8%A6%81%E9%95%BF%E6%9C%9F%E7%A9%BF%23) `205.2K 🔥` `NEW`
1. [马嘉祺膝盖抽筋](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E8%86%9D%E7%9B%96%E6%8A%BD%E7%AD%8B%23) `204.4K 🔥` `NEW`
1. [刘耀文跳了GGEZ](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%B7%B3%E4%BA%86GGEZ%23) `203.8K 🔥` `NEW`
1. [孙颖莎回应缺席发布仪式](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E7%BC%BA%E5%B8%AD%E5%8F%91%E5%B8%83%E4%BB%AA%E5%BC%8F%23) `202.8K 🔥` `NEW`
1. [白鹿回复孙珍妮](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E5%AD%99%E7%8F%8D%E5%A6%AE%23) `202.0K 🔥` `NEW`
1. [陈浚铭说张桂源像猩猩](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%E8%AF%B4%E5%BC%A0%E6%A1%82%E6%BA%90%E5%83%8F%E7%8C%A9%E7%8C%A9%23) `201.4K 🔥` `NEW`
1. [美国女子4年不洗头震惊理发师](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%904%E5%B9%B4%E4%B8%8D%E6%B4%97%E5%A4%B4%E9%9C%87%E6%83%8A%E7%90%86%E5%8F%91%E5%B8%88%23) `200.7K 🔥` `NEW`
1. [刘耀文深V扣子崩开了](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%B7%B1V%E6%89%A3%E5%AD%90%E5%B4%A9%E5%BC%80%E4%BA%86%23) `200.7K 🔥` `NEW`
1. [马嘉祺脚怎么了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E8%84%9A%E6%80%8E%E4%B9%88%E4%BA%86%23) `200.7K 🔥` `NEW`
1. [以后不准再叫中国烹饪大师了 (Don't call me "Chinese Cooking Master" anymore.)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E4%B8%8D%E5%87%86%E5%86%8D%E5%8F%AB%E4%B8%AD%E5%9B%BD%E7%83%B9%E9%A5%AA%E5%A4%A7%E5%B8%88%E4%BA%86%23) `200.7K 🔥` `NEW`
1. [无畏没白去巴黎](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E6%B2%A1%E7%99%BD%E5%8E%BB%E5%B7%B4%E9%BB%8E%23) `200.7K 🔥` `NEW`
1. [捅死男友女子父母多次给男方父母道歉下跪](https://s.weibo.com/weibo?q=%23%E6%8D%85%E6%AD%BB%E7%94%B7%E5%8F%8B%E5%A5%B3%E5%AD%90%E7%88%B6%E6%AF%8D%E5%A4%9A%E6%AC%A1%E7%BB%99%E7%94%B7%E6%96%B9%E7%88%B6%E6%AF%8D%E9%81%93%E6%AD%89%E4%B8%8B%E8%B7%AA%23) `200.7K 🔥` `NEW`
1. [时代峰峻回应严浩翔膝盖无大碍](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9B%9E%E5%BA%94%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%86%9D%E7%9B%96%E6%97%A0%E5%A4%A7%E7%A2%8D%23) `200.7K 🔥` `NEW`
1. [TF四代iG更新站位](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3iG%E6%9B%B4%E6%96%B0%E7%AB%99%E4%BD%8D%23) `200.7K 🔥` `NEW`
1. [u17国足读秒绝杀阿森纳u17](https://s.weibo.com/weibo?q=%23u17%E5%9B%BD%E8%B6%B3%E8%AF%BB%E7%A7%92%E7%BB%9D%E6%9D%80%E9%98%BF%E6%A3%AE%E7%BA%B3u17%23) `200.7K 🔥` `NEW`
1. [律师称蔡徐坤红手套不构成抄袭](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E7%A7%B0%E8%94%A1%E5%BE%90%E5%9D%A4%E7%BA%A2%E6%89%8B%E5%A5%97%E4%B8%8D%E6%9E%84%E6%88%90%E6%8A%84%E8%A2%AD%23) `200.7K 🔥` `NEW`
1. [沙宝亮回复张凌赫](https://s.weibo.com/weibo?q=%23%E6%B2%99%E5%AE%9D%E4%BA%AE%E5%9B%9E%E5%A4%8D%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `200.6K 🔥` `NEW`
1. [日企承认令女孩返岗致其遇难并致歉](https://s.weibo.com/weibo?q=%23%E6%97%A5%E4%BC%81%E6%89%BF%E8%AE%A4%E4%BB%A4%E5%A5%B3%E5%AD%A9%E8%BF%94%E5%B2%97%E8%87%B4%E5%85%B6%E9%81%87%E9%9A%BE%E5%B9%B6%E8%87%B4%E6%AD%89%23) `200.6K 🔥` `NEW`
1. [偶遇胡一天在韩国坐地铁](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E8%83%A1%E4%B8%80%E5%A4%A9%E5%9C%A8%E9%9F%A9%E5%9B%BD%E5%9D%90%E5%9C%B0%E9%93%81%23) `200.6K 🔥` `NEW`
1. [AI短剧女主60秒广告报价25万8 (The AI ​​short drama heroine’s 60-second advertising quotation is 250,800)](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%E5%A5%B3%E4%B8%BB60%E7%A7%92%E5%B9%BF%E5%91%8A%E6%8A%A5%E4%BB%B725%E4%B8%878%23) `200.6K 🔥` `NEW`
1. [我小时候全撕了一点一点撒的算什么](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B0%8F%E6%97%B6%E5%80%99%E5%85%A8%E6%92%95%E4%BA%86%E4%B8%80%E7%82%B9%E4%B8%80%E7%82%B9%E6%92%92%E7%9A%84%E7%AE%97%E4%BB%80%E4%B9%88%23) `200.6K 🔥` `NEW`
1. [蔡徐坤撤回两次](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%92%A4%E5%9B%9E%E4%B8%A4%E6%AC%A1%23) `200.6K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `200.6K 🔥` `NEW`
1. [人无法接住自己没有的东西](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%97%A0%E6%B3%95%E6%8E%A5%E4%BD%8F%E8%87%AA%E5%B7%B1%E6%B2%A1%E6%9C%89%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `200.6K 🔥` `NEW`
1. [985博士后孕期出轨女生还见亲友](https://s.weibo.com/weibo?q=%23985%E5%8D%9A%E5%A3%AB%E5%90%8E%E5%AD%95%E6%9C%9F%E5%87%BA%E8%BD%A8%E5%A5%B3%E7%94%9F%E8%BF%98%E8%A7%81%E4%BA%B2%E5%8F%8B%23) `200.6K 🔥` `NEW`
1. [雪崩遇难10人为各国登山高手](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E5%B4%A9%E9%81%87%E9%9A%BE10%E4%BA%BA%E4%B8%BA%E5%90%84%E5%9B%BD%E7%99%BB%E5%B1%B1%E9%AB%98%E6%89%8B%23) `200.6K 🔥` `NEW`
1. [恒怡cp](https://s.weibo.com/weibo?q=%23%E6%81%92%E6%80%A1cp%23) `200.6K 🔥` `NEW`
1. [韦唯和王楚钦王曼昱同唱亚洲雄风](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E5%94%AF%E5%92%8C%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%90%8C%E5%94%B1%E4%BA%9A%E6%B4%B2%E9%9B%84%E9%A3%8E%23) `200.5K 🔥` `NEW`
1. [中秋国庆休3班3再休7](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E5%9B%BD%E5%BA%86%E4%BC%913%E7%8F%AD3%E5%86%8D%E4%BC%917%23) `200.5K 🔥` `NEW`
1. [瑞幸发布2026年Q2财报 (Luckin releases 2026 Q2 financial report)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%8F%91%E5%B8%832026%E5%B9%B4Q2%E8%B4%A2%E6%8A%A5%23) `200.5K 🔥` `NEW`

Updated at 2026-08-04 00:55:42

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
