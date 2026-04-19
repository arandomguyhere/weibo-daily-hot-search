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

1. [攻玉回应换男主 (Gong Yu responded by changing the male lead)](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%E5%9B%9E%E5%BA%94%E6%8D%A2%E7%94%B7%E4%B8%BB%23) `1.1M 🔥` `NEW`
1. [曝李小冉退出浪姐](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%B0%8F%E5%86%89%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `609.6K 🔥` `NEW`
1. [生命缘官宣](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E7%BC%98%E5%AE%98%E5%AE%A3%23) `585.9K 🔥` `NEW`
1. [自家孩子趴桌睡为何给别人捐躺椅](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%AE%B6%E5%AD%A9%E5%AD%90%E8%B6%B4%E6%A1%8C%E7%9D%A1%E4%B8%BA%E4%BD%95%E7%BB%99%E5%88%AB%E4%BA%BA%E6%8D%90%E8%BA%BA%E6%A4%85%23) `439.2K 🔥` `NEW`
1. [机器人马拉松 豆包变豆脚了](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%A9%AC%E6%8B%89%E6%9D%BE%20%E8%B1%86%E5%8C%85%E5%8F%98%E8%B1%86%E8%84%9A%E4%BA%86%23) `347.3K 🔥` `NEW`
1. [福原爱三胎生子](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%8E%9F%E7%88%B1%E4%B8%89%E8%83%8E%E7%94%9F%E5%AD%90%23) `328.8K 🔥` `NEW`
1. [邓超现在洗澡离不开黑泥](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E7%8E%B0%E5%9C%A8%E6%B4%97%E6%BE%A1%E7%A6%BB%E4%B8%8D%E5%BC%80%E9%BB%91%E6%B3%A5%23) `326.4K 🔥` `NEW`
1. [王者荣耀 哪吒2](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%20%E5%93%AA%E5%90%922%23) `321.3K 🔥` `NEW`
1. [日本与澳大利亚签订合同](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%8E%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E7%AD%BE%E8%AE%A2%E5%90%88%E5%90%8C%23) `317.2K 🔥` `NEW`
1. [千万身家老板倾家荡产不敢告诉女儿](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E8%BA%AB%E5%AE%B6%E8%80%81%E6%9D%BF%E5%80%BE%E5%AE%B6%E8%8D%A1%E4%BA%A7%E4%B8%8D%E6%95%A2%E5%91%8A%E8%AF%89%E5%A5%B3%E5%84%BF%23) `316.6K 🔥` `NEW`
1. [机器人都跑出残影了 (The robots all ran out of afterimages)](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%83%BD%E8%B7%91%E5%87%BA%E6%AE%8B%E5%BD%B1%E4%BA%86%23) `311.6K 🔥` `NEW`
1. [马頔为了通告费亲嘴李纯知道吗](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E4%B8%BA%E4%BA%86%E9%80%9A%E5%91%8A%E8%B4%B9%E4%BA%B2%E5%98%B4%E6%9D%8E%E7%BA%AF%E7%9F%A5%E9%81%93%E5%90%97%23) `302.5K 🔥` `NEW`
1. [卸沙现场一具尸体随沙料倾泻而出](https://s.weibo.com/weibo?q=%23%E5%8D%B8%E6%B2%99%E7%8E%B0%E5%9C%BA%E4%B8%80%E5%85%B7%E5%B0%B8%E4%BD%93%E9%9A%8F%E6%B2%99%E6%96%99%E5%80%BE%E6%B3%BB%E8%80%8C%E5%87%BA%23) `280.0K 🔥` `NEW`
1. [攻玉](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%23) `277.8K 🔥` `NEW`
1. [方媛给郭富城抬头纹磨皮](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E7%BB%99%E9%83%AD%E5%AF%8C%E5%9F%8E%E6%8A%AC%E5%A4%B4%E7%BA%B9%E7%A3%A8%E7%9A%AE%23) `276.0K 🔥` `NEW`
1. [郑恺这期收视率高吧我拿命换的](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E8%BF%99%E6%9C%9F%E6%94%B6%E8%A7%86%E7%8E%87%E9%AB%98%E5%90%A7%E6%88%91%E6%8B%BF%E5%91%BD%E6%8D%A2%E7%9A%84%23) `225.3K 🔥` `NEW`
1. [网传攻玉男主换曾舜晞](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%94%BB%E7%8E%89%E7%94%B7%E4%B8%BB%E6%8D%A2%E6%9B%BE%E8%88%9C%E6%99%9E%23) `213.0K 🔥` `NEW`
1. [赵丽颖38岁状态](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%9638%E5%B2%81%E7%8A%B6%E6%80%81%23) `208.8K 🔥` `NEW`
1. [谢娜晒拍的马嘉祺丁程鑫贺峻霖](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%99%92%E6%8B%8D%E7%9A%84%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%81%E7%A8%8B%E9%91%AB%E8%B4%BA%E5%B3%BB%E9%9C%96%23) `193.9K 🔥` `NEW`
1. [CT的辐射每一次都是带来隐患](https://s.weibo.com/weibo?q=%23CT%E7%9A%84%E8%BE%90%E5%B0%84%E6%AF%8F%E4%B8%80%E6%AC%A1%E9%83%BD%E6%98%AF%E5%B8%A6%E6%9D%A5%E9%9A%90%E6%82%A3%23) `169.9K 🔥` `NEW`
1. [美国1年投1300万美元在中国搞渗透 (The United States invests US$13 million in one year to infiltrate China)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD1%E5%B9%B4%E6%8A%951300%E4%B8%87%E7%BE%8E%E5%85%83%E5%9C%A8%E4%B8%AD%E5%9B%BD%E6%90%9E%E6%B8%97%E9%80%8F%23) `169.4K 🔥` `NEW`
1. [来战](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E6%88%98%23) `169.3K 🔥` `NEW`
1. [官方通报卸沙现场出现一具男尸](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8D%B8%E6%B2%99%E7%8E%B0%E5%9C%BA%E5%87%BA%E7%8E%B0%E4%B8%80%E5%85%B7%E7%94%B7%E5%B0%B8%23) `496.4K 🔥` `+89%`
1. [逐玉播出后最爆的是何润东](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%92%AD%E5%87%BA%E5%90%8E%E6%9C%80%E7%88%86%E7%9A%84%E6%98%AF%E4%BD%95%E6%B6%A6%E4%B8%9C%23) `311.0K 🔥` `+47%`
1. [AI让人越来越累](https://s.weibo.com/weibo?q=%23AI%E8%AE%A9%E4%BA%BA%E8%B6%8A%E6%9D%A5%E8%B6%8A%E7%B4%AF%23) `306.4K 🔥` `+80%`
1. [女子产后被男友起诉退彩礼和分娩费](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%A7%E5%90%8E%E8%A2%AB%E7%94%B7%E5%8F%8B%E8%B5%B7%E8%AF%89%E9%80%80%E5%BD%A9%E7%A4%BC%E5%92%8C%E5%88%86%E5%A8%A9%E8%B4%B9%23) `305.4K 🔥` `+47%`
1. [日舰闯台海这天中国人不会忘](https://s.weibo.com/weibo?q=%23%E6%97%A5%E8%88%B0%E9%97%AF%E5%8F%B0%E6%B5%B7%E8%BF%99%E5%A4%A9%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%B8%8D%E4%BC%9A%E5%BF%98%23) `289.5K 🔥` `+83%`
1. [本周狗屎运最旺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E7%8B%97%E5%B1%8E%E8%BF%90%E6%9C%80%E6%97%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `230.2K 🔥` `+43%`
1. [刘浩存走完红毯拧裙子上的水](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E8%B5%B0%E5%AE%8C%E7%BA%A2%E6%AF%AF%E6%8B%A7%E8%A3%99%E5%AD%90%E4%B8%8A%E7%9A%84%E6%B0%B4%23) `228.4K 🔥` `+40%`
1. [宇树机器人打破人类1500米世界纪录](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%89%93%E7%A0%B4%E4%BA%BA%E7%B1%BB1500%E7%B1%B3%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `801.7K 🔥`
1. [五一列车增开 (More trains run on May Day)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%88%97%E8%BD%A6%E5%A2%9E%E5%BC%80%23) `628.8K 🔥`
1. [谁家猫怀孕都怀到脖子上了](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%AE%B6%E7%8C%AB%E6%80%80%E5%AD%95%E9%83%BD%E6%80%80%E5%88%B0%E8%84%96%E5%AD%90%E4%B8%8A%E4%BA%86%23) `606.0K 🔥`
1. [何润东狂接商务](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E7%8B%82%E6%8E%A5%E5%95%86%E5%8A%A1%23) `334.2K 🔥`
1. [虞书欣好辣](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A5%BD%E8%BE%A3%23) `317.9K 🔥`
1. [酒店回访电话暴露开房致女子离婚 (Hotel return call revealed hotel booking led to woman's divorce)](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97%E5%9B%9E%E8%AE%BF%E7%94%B5%E8%AF%9D%E6%9A%B4%E9%9C%B2%E5%BC%80%E6%88%BF%E8%87%B4%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A%23) `305.9K 🔥`
1. [攻玉 辞演 (Gong Yu Resignation)](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%20%E8%BE%9E%E6%BC%94%23) `291.0K 🔥`
1. [杜兰特 火箭 (durant rockets)](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B9%20%E7%81%AB%E7%AE%AD%23) `282.8K 🔥`
1. [梁朝伟迪丽热巴好像在拍电影](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A5%BD%E5%83%8F%E5%9C%A8%E6%8B%8D%E7%94%B5%E5%BD%B1%23) `223.8K 🔥`
1. [杨紫新剧老年妆](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%96%B0%E5%89%A7%E8%80%81%E5%B9%B4%E5%A6%86%23) `204.3K 🔥`
1. [你是真的火了李小冉](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%98%AF%E7%9C%9F%E7%9A%84%E7%81%AB%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%23) `178.2K 🔥`
1. [苏超南京队赞助商ip连夜改名](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%8D%97%E4%BA%AC%E9%98%9F%E8%B5%9E%E5%8A%A9%E5%95%86ip%E8%BF%9E%E5%A4%9C%E6%94%B9%E5%90%8D%23) `170.3K 🔥`
1. [被骗3200万老板从住豪宅到租房住](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%AA%973200%E4%B8%87%E8%80%81%E6%9D%BF%E4%BB%8E%E4%BD%8F%E8%B1%AA%E5%AE%85%E5%88%B0%E7%A7%9F%E6%88%BF%E4%BD%8F%23) `169.0K 🔥`
1. [睡觉时被空调砸到头了](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E6%97%B6%E8%A2%AB%E7%A9%BA%E8%B0%83%E7%A0%B8%E5%88%B0%E5%A4%B4%E4%BA%86%23) `339.2K 🔥` `-49%`
1. [花少8 南美 (Hua Shao 8 South America)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%20%E5%8D%97%E7%BE%8E%23) `338.1K 🔥` `-75%`
1. [华住会否认酒店回访致女子离婚 (Huazhu Club denies hotel return visit caused woman’s divorce)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BD%8F%E4%BC%9A%E5%90%A6%E8%AE%A4%E9%85%92%E5%BA%97%E5%9B%9E%E8%AE%BF%E8%87%B4%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A%23) `313.9K 🔥` `-24%`
1. [曝歌手2026阵容](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%AD%8C%E6%89%8B2026%E9%98%B5%E5%AE%B9%23) `307.9K 🔥` `-22%`
1. [湖人战胜火箭](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E6%88%98%E8%83%9C%E7%81%AB%E7%AE%AD%23) `285.2K 🔥` `-43%`
1. [宇树H1机器人被担架抬离赛道](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91H1%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%A2%AB%E6%8B%85%E6%9E%B6%E6%8A%AC%E7%A6%BB%E8%B5%9B%E9%81%93%23) `224.4K 🔥` `-64%`
1. [宇树H1机器人半马赛场终点累倒](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91H1%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8D%8A%E9%A9%AC%E8%B5%9B%E5%9C%BA%E7%BB%88%E7%82%B9%E7%B4%AF%E5%80%92%23) `209.2K 🔥` `-28%`
1. [低精力 杏仁核长期应激 (Low energy, chronic stress on the amygdala)](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%20%E6%9D%8F%E4%BB%81%E6%A0%B8%E9%95%BF%E6%9C%9F%E5%BA%94%E6%BF%80%23) `197.4K 🔥` `-52%`

Updated at 2026-04-19 14:13:12

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
