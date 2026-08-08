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

1. [2026我们的家园幸福美丽西藏 (2026 Our home is happy and beautiful Tibet)](https://s.weibo.com/weibo?q=%232026%E6%88%91%E4%BB%AC%E7%9A%84%E5%AE%B6%E5%9B%AD%E5%B9%B8%E7%A6%8F%E7%BE%8E%E4%B8%BD%E8%A5%BF%E8%97%8F%23) `886.9K 🔥` `NEW`
1. [西村力演唱会的状态](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E7%8A%B6%E6%80%81%23) `683.9K 🔥` `NEW`
1. [王楚钦出席市运会开幕式](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%87%BA%E5%B8%AD%E5%B8%82%E8%BF%90%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%23) `291.3K 🔥` `NEW`
1. [曝丁禹兮虞书欣将三搭](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%81%E7%A6%B9%E5%85%AE%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B0%86%E4%B8%89%E6%90%AD%23) `291.2K 🔥` `NEW`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `291.0K 🔥` `NEW`
1. [孙红雷艾特错王玉雯](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E8%89%BE%E7%89%B9%E9%94%99%E7%8E%8B%E7%8E%89%E9%9B%AF%23) `290.1K 🔥` `NEW`
1. [汪海林回应被举报](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B5%B7%E6%9E%97%E5%9B%9E%E5%BA%94%E8%A2%AB%E4%B8%BE%E6%8A%A5%23) `289.8K 🔥` `NEW`
1. [小酒窝朵朵左右亲吻佟丽娅](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E6%9C%B5%E6%9C%B5%E5%B7%A6%E5%8F%B3%E4%BA%B2%E5%90%BB%E4%BD%9F%E4%B8%BD%E5%A8%85%23) `285.4K 🔥` `NEW`
1. [迪丽热巴香港路透](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A6%99%E6%B8%AF%E8%B7%AF%E9%80%8F%23) `285.3K 🔥` `NEW`
1. [T1对战HLE](https://s.weibo.com/weibo?q=%23T1%E5%AF%B9%E6%88%98HLE%23) `260.5K 🔥` `NEW`
1. [微博文化交流之夜泰国站 (Weibo Cultural Exchange Night Thailand Station)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B9%8B%E5%A4%9C%E6%B3%B0%E5%9B%BD%E7%AB%99%23) `246.6K 🔥` `NEW`
1. [男子因噪音狂斩邻居30多刀后坠楼](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E5%99%AA%E9%9F%B3%E7%8B%82%E6%96%A9%E9%82%BB%E5%B1%8530%E5%A4%9A%E5%88%80%E5%90%8E%E5%9D%A0%E6%A5%BC%23) `245.5K 🔥` `NEW`
1. [美国AI开始攻击真人了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BDAI%E5%BC%80%E5%A7%8B%E6%94%BB%E5%87%BB%E7%9C%9F%E4%BA%BA%E4%BA%86%23) `185.5K 🔥` `NEW`
1. [ai漫剧也是有底线的](https://s.weibo.com/weibo?q=%23ai%E6%BC%AB%E5%89%A7%E4%B9%9F%E6%98%AF%E6%9C%89%E5%BA%95%E7%BA%BF%E7%9A%84%23) `184.9K 🔥` `NEW`
1. [微博奇遇记](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E5%A5%87%E9%81%87%E8%AE%B0%23) `184.1K 🔥` `NEW`
1. [以色列驻成都总领事馆正式关闭](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%A9%BB%E6%88%90%E9%83%BD%E6%80%BB%E9%A2%86%E4%BA%8B%E9%A6%86%E6%AD%A3%E5%BC%8F%E5%85%B3%E9%97%AD%23) `179.4K 🔥` `NEW`
1. [ai结合实拍才是长剧的未来](https://s.weibo.com/weibo?q=%23ai%E7%BB%93%E5%90%88%E5%AE%9E%E6%8B%8D%E6%89%8D%E6%98%AF%E9%95%BF%E5%89%A7%E7%9A%84%E6%9C%AA%E6%9D%A5%23) `166.6K 🔥` `NEW`
1. [网友马代偶遇Angelababy](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%A9%AC%E4%BB%A3%E5%81%B6%E9%81%87Angelababy%23) `148.5K 🔥` `NEW`
1. [披荆斩棘2026确定名单](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%982026%E7%A1%AE%E5%AE%9A%E5%90%8D%E5%8D%95%23) `378.6K 🔥` `+22%`
1. [影石LunaUltra和大Pocket4P全面对比](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E7%9F%B3LunaUltra%E5%92%8C%E5%A4%A7Pocket4P%E5%85%A8%E9%9D%A2%E5%AF%B9%E6%AF%94%23) `290.4K 🔥` `+79%`
1. [汪海林多年前曾回应偷税漏税 (Wang Hailin responded to tax evasion many years ago)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B5%B7%E6%9E%97%E5%A4%9A%E5%B9%B4%E5%89%8D%E6%9B%BE%E5%9B%9E%E5%BA%94%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23) `285.3K 🔥` `+81%`
1. [驻泰使馆关于赴泰参加文体活动的提醒 (Reminder from the Embassy in Thailand about participating in cultural and sports activities in Thailand)](https://s.weibo.com/weibo?q=%23%E9%A9%BB%E6%B3%B0%E4%BD%BF%E9%A6%86%E5%85%B3%E4%BA%8E%E8%B5%B4%E6%B3%B0%E5%8F%82%E5%8A%A0%E6%96%87%E4%BD%93%E6%B4%BB%E5%8A%A8%E7%9A%84%E6%8F%90%E9%86%92%23) `257.5K 🔥` `+58%`
1. [峰哥实名举报汪海林偷税漏税 (Brother Feng reported Wang Hailin’s tax evasion with his real name)](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E5%AE%9E%E5%90%8D%E4%B8%BE%E6%8A%A5%E6%B1%AA%E6%B5%B7%E6%9E%97%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23) `3.2M 🔥`
1. [费大厨塌房了吗](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E5%A1%8C%E6%88%BF%E4%BA%86%E5%90%97%23) `1.1M 🔥`
1. [刘宇宁抱王玉雯林一的区别](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%8A%B1%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%9E%97%E4%B8%80%E7%9A%84%E5%8C%BA%E5%88%AB%23) `745.3K 🔥`
1. [亚马逊广告全流域助力伦敦合伙人](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E9%80%8A%E5%B9%BF%E5%91%8A%E5%85%A8%E6%B5%81%E5%9F%9F%E5%8A%A9%E5%8A%9B%E4%BC%A6%E6%95%A6%E5%90%88%E4%BC%99%E4%BA%BA%23) `530.0K 🔥`
1. [白海豚已闭眼](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%B7%B2%E9%97%AD%E7%9C%BC%23) `292.8K 🔥`
1. [名创优品一次性内裤 颜面尽失 (Miniso’s premium disposable underwear, losing face)](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E4%B8%80%E6%AC%A1%E6%80%A7%E5%86%85%E8%A3%A4%20%E9%A2%9C%E9%9D%A2%E5%B0%BD%E5%A4%B1%23) `291.0K 🔥`
1. [朋友称佟丽娅与陈思诚是新型离婚关系](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E7%A7%B0%E4%BD%9F%E4%B8%BD%E5%A8%85%E4%B8%8E%E9%99%88%E6%80%9D%E8%AF%9A%E6%98%AF%E6%96%B0%E5%9E%8B%E7%A6%BB%E5%A9%9A%E5%85%B3%E7%B3%BB%23) `290.7K 🔥`
1. [金饰克价一夜涨回1300元 (Price of gold jewelry rose back to 1,300 yuan per gram overnight)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E4%B8%80%E5%A4%9C%E6%B6%A8%E5%9B%9E1300%E5%85%83%23) `290.5K 🔥`
1. [自媒体红利期只剩AI了 (Only AI is left in the self-media dividend period)](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%AA%92%E4%BD%93%E7%BA%A2%E5%88%A9%E6%9C%9F%E5%8F%AA%E5%89%A9AI%E4%BA%86%23) `290.1K 🔥`
1. [白鹿柳智敏 蛇塑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9F%B3%E6%99%BA%E6%95%8F%20%E8%9B%87%E5%A1%91%23) `289.5K 🔥`
1. [取消调休补班90%的人就满意了](https://s.weibo.com/weibo?q=%23%E5%8F%96%E6%B6%88%E8%B0%83%E4%BC%91%E8%A1%A5%E7%8F%AD90%25%E7%9A%84%E4%BA%BA%E5%B0%B1%E6%BB%A1%E6%84%8F%E4%BA%86%23) `289.3K 🔥`
1. [关晓彤已到最佳赏味期 (Guan Xiaotong has reached the best period of appreciation)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%B7%B2%E5%88%B0%E6%9C%80%E4%BD%B3%E8%B5%8F%E5%91%B3%E6%9C%9F%23) `289.2K 🔥`
1. [小心这种手机壳正在偷拍你的隐私](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%BF%83%E8%BF%99%E7%A7%8D%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%AD%A3%E5%9C%A8%E5%81%B7%E6%8B%8D%E4%BD%A0%E7%9A%84%E9%9A%90%E7%A7%81%23) `285.3K 🔥`
1. [金智秀哭了](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%93%AD%E4%BA%86%23) `267.2K 🔥`
1. [刘旸秒删 (Liu Yang deleted it instantly)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%97%B8%E7%A7%92%E5%88%A0%23) `254.9K 🔥`
1. [等风热吻你](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `244.5K 🔥`
1. [欢迎来龙餐馆](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%23) `240.4K 🔥`
1. [这就是跟老人的有效沟通 (This is effective communication with the elderly)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E8%B7%9F%E8%80%81%E4%BA%BA%E7%9A%84%E6%9C%89%E6%95%88%E6%B2%9F%E9%80%9A%23) `239.9K 🔥`
1. [荷兰弟大嘴巴人设崩了](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E5%A4%A7%E5%98%B4%E5%B7%B4%E4%BA%BA%E8%AE%BE%E5%B4%A9%E4%BA%86%23) `239.9K 🔥`
1. [胃癌直博生曾向父亲借钱旅游被拒](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E7%9B%B4%E5%8D%9A%E7%94%9F%E6%9B%BE%E5%90%91%E7%88%B6%E4%BA%B2%E5%80%9F%E9%92%B1%E6%97%85%E6%B8%B8%E8%A2%AB%E6%8B%92%23) `206.9K 🔥`
1. [张泽禹一路向海剪辑争议](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%BD%E7%A6%B9%E4%B8%80%E8%B7%AF%E5%90%91%E6%B5%B7%E5%89%AA%E8%BE%91%E4%BA%89%E8%AE%AE%23) `184.9K 🔥`
1. [樊振东全运男单夺冠一镜到底](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%85%A8%E8%BF%90%E7%94%B7%E5%8D%95%E5%A4%BA%E5%86%A0%E4%B8%80%E9%95%9C%E5%88%B0%E5%BA%95%23) `166.6K 🔥`
1. [杨洋 现偶](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%20%E7%8E%B0%E5%81%B6%23) `166.4K 🔥`
1. [小夜灯 性早熟](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%9C%E7%81%AF%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `692.6K 🔥` `-23%`
1. [两个淡人谈恋爱是极其美味的 (Two light people falling in love is extremely delicious)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E6%B7%A1%E4%BA%BA%E8%B0%88%E6%81%8B%E7%88%B1%E6%98%AF%E6%9E%81%E5%85%B6%E7%BE%8E%E5%91%B3%E7%9A%84%23) `464.1K 🔥` `-33%`
1. [暑期档 撤档 (Summer schedule withdrawn)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%A1%A3%20%E6%92%A4%E6%A1%A3%23) `289.7K 🔥` `-52%`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `187.0K 🔥` `-24%`
1. [这才是好皮肤的正确打开方式 (This is the correct way to open up good skin)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E5%A5%BD%E7%9A%AE%E8%82%A4%E7%9A%84%E6%AD%A3%E7%A1%AE%E6%89%93%E5%BC%80%E6%96%B9%E5%BC%8F%23) `179.8K 🔥` `-26%`
1. [用Token还是词元事关科技话语权](https://s.weibo.com/weibo?q=%23%E7%94%A8Token%E8%BF%98%E6%98%AF%E8%AF%8D%E5%85%83%E4%BA%8B%E5%85%B3%E7%A7%91%E6%8A%80%E8%AF%9D%E8%AF%AD%E6%9D%83%23) `166.9K 🔥` `-38%`

Updated at 2026-08-08 17:47:16

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
