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

1. [中国银行逃税近24亿被审计署通报 (Bank of China evaded nearly 2.4 billion in taxes and was notified by the National Audit Office)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%93%B6%E8%A1%8C%E9%80%83%E7%A8%8E%E8%BF%9124%E4%BA%BF%E8%A2%AB%E5%AE%A1%E8%AE%A1%E7%BD%B2%E9%80%9A%E6%8A%A5%23) `17.8M 🔥` `NEW`
1. [中国银行回应涉税违规问题](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%93%B6%E8%A1%8C%E5%9B%9E%E5%BA%94%E6%B6%89%E7%A8%8E%E8%BF%9D%E8%A7%84%E9%97%AE%E9%A2%98%23) `2.7M 🔥` `NEW`
1. [河南高考分数线](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `1.3M 🔥` `NEW`
1. [千问出分提醒和高考分数同时到达](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%87%BA%E5%88%86%E6%8F%90%E9%86%92%E5%92%8C%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E5%90%8C%E6%97%B6%E5%88%B0%E8%BE%BE%23) `1.2M 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `1.2M 🔥` `NEW`
1. [毛晓彤吓到我了](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23) `1.2M 🔥` `NEW`
1. [剑来全阵容正式官宣](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%E5%85%A8%E9%98%B5%E5%AE%B9%E6%AD%A3%E5%BC%8F%E5%AE%98%E5%AE%A3%23) `1.2M 🔥` `NEW`
1. [第四届链博会](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E5%9B%9B%E5%B1%8A%E9%93%BE%E5%8D%9A%E4%BC%9A%23) `821.7K 🔥` `NEW`
1. [审计署点名多家银行](https://s.weibo.com/weibo?q=%23%E5%AE%A1%E8%AE%A1%E7%BD%B2%E7%82%B9%E5%90%8D%E5%A4%9A%E5%AE%B6%E9%93%B6%E8%A1%8C%23) `537.4K 🔥` `NEW`
1. [十日终焉众生集结角色短片](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E4%BC%97%E7%94%9F%E9%9B%86%E7%BB%93%E8%A7%92%E8%89%B2%E7%9F%AD%E7%89%87%23) `536.9K 🔥` `NEW`
1. [影石大疆实际体验谁更好 (Which one is better in actual experience between Shadowstone and DJI?)](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E7%9F%B3%E5%A4%A7%E7%96%86%E5%AE%9E%E9%99%85%E4%BD%93%E9%AA%8C%E8%B0%81%E6%9B%B4%E5%A5%BD%23) `527.6K 🔥` `NEW`
1. [侯明昊歌手 归零](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%AD%8C%E6%89%8B%20%E5%BD%92%E9%9B%B6%23) `511.9K 🔥` `NEW`
1. [宇树R1机器人降价](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91R1%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%99%8D%E4%BB%B7%23) `471.9K 🔥` `NEW`
1. [表妹万福](https://s.weibo.com/weibo?q=%23%E8%A1%A8%E5%A6%B9%E4%B8%87%E7%A6%8F%23) `448.0K 🔥` `NEW`
1. [六年前资助的小孩 现在成为我的依靠](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%B9%B4%E5%89%8D%E8%B5%84%E5%8A%A9%E7%9A%84%E5%B0%8F%E5%AD%A9%20%E7%8E%B0%E5%9C%A8%E6%88%90%E4%B8%BA%E6%88%91%E7%9A%84%E4%BE%9D%E9%9D%A0%23) `435.4K 🔥` `NEW`
1. [郑钦文vs陶森](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E9%99%B6%E6%A3%AE%23) `435.4K 🔥` `NEW`
1. [农行违规放贷110亿被通报](https://s.weibo.com/weibo?q=%23%E5%86%9C%E8%A1%8C%E8%BF%9D%E8%A7%84%E6%94%BE%E8%B4%B7110%E4%BA%BF%E8%A2%AB%E9%80%9A%E6%8A%A5%23) `435.0K 🔥` `NEW`
1. [十日终焉角色妆造](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E8%A7%92%E8%89%B2%E5%A6%86%E9%80%A0%23) `434.8K 🔥` `NEW`
1. [女生高考查出690分激动落泪](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E9%AB%98%E8%80%83%E6%9F%A5%E5%87%BA690%E5%88%86%E6%BF%80%E5%8A%A8%E8%90%BD%E6%B3%AA%23) `434.4K 🔥` `NEW`
1. [王俊凯 就算不喜欢也没关系](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E5%B0%B1%E7%AE%97%E4%B8%8D%E5%96%9C%E6%AC%A2%E4%B9%9F%E6%B2%A1%E5%85%B3%E7%B3%BB%23) `421.4K 🔥` `NEW`
1. [印度5名歹徒轮奸30岁已婚女子 (Five gangsters gang-rape 30-year-old married woman in India)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A65%E5%90%8D%E6%AD%B9%E5%BE%92%E8%BD%AE%E5%A5%B830%E5%B2%81%E5%B7%B2%E5%A9%9A%E5%A5%B3%E5%AD%90%23) `414.8K 🔥` `NEW`
1. [吴邪私家笔记2官宣](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%82%AA%E7%A7%81%E5%AE%B6%E7%AC%94%E8%AE%B02%E5%AE%98%E5%AE%A3%23) `384.4K 🔥` `NEW`
1. [十日终焉 许宏宇](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%20%E8%AE%B8%E5%AE%8F%E5%AE%87%23) `354.1K 🔥` `NEW`
1. [巴西队史射手王回来了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E9%98%9F%E5%8F%B2%E5%B0%84%E6%89%8B%E7%8E%8B%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `345.8K 🔥` `NEW`
1. [尚公主生死相依版预告](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E7%94%9F%E6%AD%BB%E7%9B%B8%E4%BE%9D%E7%89%88%E9%A2%84%E5%91%8A%23) `326.7K 🔥` `NEW`
1. [C罗回应老了该退役了](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%9B%9E%E5%BA%94%E8%80%81%E4%BA%86%E8%AF%A5%E9%80%80%E5%BD%B9%E4%BA%86%23) `319.5K 🔥` `NEW`
1. [瘦子 夏天没食欲](https://s.weibo.com/weibo?q=%23%E7%98%A6%E5%AD%90%20%E5%A4%8F%E5%A4%A9%E6%B2%A1%E9%A3%9F%E6%AC%B2%23) `307.8K 🔥` `NEW`
1. [丁禹兮伸手牵宋祖儿](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E4%BC%B8%E6%89%8B%E7%89%B5%E5%AE%8B%E7%A5%96%E5%84%BF%23) `294.9K 🔥` `NEW`
1. [王者荣耀婉拒逆水寒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%A9%89%E6%8B%92%E9%80%86%E6%B0%B4%E5%AF%92%23) `283.5K 🔥` `NEW`
1. [豆包专业版替我负重前行](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E4%B8%93%E4%B8%9A%E7%89%88%E6%9B%BF%E6%88%91%E8%B4%9F%E9%87%8D%E5%89%8D%E8%A1%8C%23) `275.6K 🔥` `NEW`
1. [金靖瘦下来像沈佳润 (Jin Jing loses weight and looks like Shen Jiarun)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E7%98%A6%E4%B8%8B%E6%9D%A5%E5%83%8F%E6%B2%88%E4%BD%B3%E6%B6%A6%23) `274.5K 🔥` `NEW`
1. [赵本山女儿家保姆谈工资待遇](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E5%A5%B3%E5%84%BF%E5%AE%B6%E4%BF%9D%E5%A7%86%E8%B0%88%E5%B7%A5%E8%B5%84%E5%BE%85%E9%81%87%23) `259.1K 🔥` `NEW`
1. [大学生因食堂消费少收到0.65元补助](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%9B%A0%E9%A3%9F%E5%A0%82%E6%B6%88%E8%B4%B9%E5%B0%91%E6%94%B6%E5%88%B00.65%E5%85%83%E8%A1%A5%E5%8A%A9%23) `258.6K 🔥` `NEW`
1. [副院长出轨眼科主任女方离职男复出](https://s.weibo.com/weibo?q=%23%E5%89%AF%E9%99%A2%E9%95%BF%E5%87%BA%E8%BD%A8%E7%9C%BC%E7%A7%91%E4%B8%BB%E4%BB%BB%E5%A5%B3%E6%96%B9%E7%A6%BB%E8%81%8C%E7%94%B7%E5%A4%8D%E5%87%BA%23) `233.7K 🔥` `NEW`
1. [邓为回应被陈哲远认错](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%99%88%E5%93%B2%E8%BF%9C%E8%AE%A4%E9%94%99%23) `233.5K 🔥` `NEW`
1. [金枝首发预告](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9E%9D%E9%A6%96%E5%8F%91%E9%A2%84%E5%91%8A%23) `227.8K 🔥` `NEW`
1. [暴雨模式避险指南](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E6%A8%A1%E5%BC%8F%E9%81%BF%E9%99%A9%E6%8C%87%E5%8D%97%23) `1.2M 🔥` `+36%`
1. [原来游泳减肥容易变成带鱼身材](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B8%B8%E6%B3%B3%E5%87%8F%E8%82%A5%E5%AE%B9%E6%98%93%E5%8F%98%E6%88%90%E5%B8%A6%E9%B1%BC%E8%BA%AB%E6%9D%90%23) `528.0K 🔥` `+45%`
1. [李金铭农村婆婆发声 (Li Jinming’s rural mother-in-law speaks out)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%86%9C%E6%9D%91%E5%A9%86%E5%A9%86%E5%8F%91%E5%A3%B0%23) `522.5K 🔥` `+46%`
1. [周也的美甲是芭蕾舞鞋 (Zhou Ye’s manicure is ballet shoes)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E7%9A%84%E7%BE%8E%E7%94%B2%E6%98%AF%E8%8A%AD%E8%95%BE%E8%88%9E%E9%9E%8B%23) `520.1K 🔥` `+49%`
1. [心疼文科生](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E6%96%87%E7%A7%91%E7%94%9F%23) `517.0K 🔥` `+45%`
1. [Lisa确认分手](https://s.weibo.com/weibo?q=%23Lisa%E7%A1%AE%E8%AE%A4%E5%88%86%E6%89%8B%23) `435.1K 🔥` `+32%`
1. [流量退去后莫氏鸡煲日销不足20只 (After the traffic subsided, the daily sales of Moh’s Chicken Pot were less than 20 pieces.)](https://s.weibo.com/weibo?q=%23%E6%B5%81%E9%87%8F%E9%80%80%E5%8E%BB%E5%90%8E%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E6%97%A5%E9%94%80%E4%B8%8D%E8%B6%B320%E5%8F%AA%23) `434.7K 🔥` `+48%`
1. [三体2官宣](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BD%932%E5%AE%98%E5%AE%A3%23) `435.5K 🔥`
1. [普京说忍了8年才对乌动手](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AF%B4%E5%BF%8D%E4%BA%868%E5%B9%B4%E6%89%8D%E5%AF%B9%E4%B9%8C%E5%8A%A8%E6%89%8B%23) `359.1K 🔥`
1. [官俊臣高考成绩在预估范围内](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%E5%9C%A8%E9%A2%84%E4%BC%B0%E8%8C%83%E5%9B%B4%E5%86%85%23) `274.1K 🔥`
1. [杨紫皮肤 以为开了磨皮](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9A%AE%E8%82%A4%20%E4%BB%A5%E4%B8%BA%E5%BC%80%E4%BA%86%E7%A3%A8%E7%9A%AE%23) `245.5K 🔥`
1. [江苏高考分数线](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `340.3K 🔥` `-70%`
1. [高考分数线 (College Entrance Examination Score Cutoff)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `314.1K 🔥` `-22%`
1. [河北高考分数线 (Hebei college entrance examination score line)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `262.7K 🔥` `-21%`
1. [王橹杰穆祉丞带妆彩排后台](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%A9%86%E7%A5%89%E4%B8%9E%E5%B8%A6%E5%A6%86%E5%BD%A9%E6%8E%92%E5%90%8E%E5%8F%B0%23) `258.6K 🔥` `-25%`

Updated at 2026-06-24 21:30:53

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
