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

1. [内娱大点兵 (Domestic entertainment is more important)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%A4%A7%E7%82%B9%E5%85%B5%23) `818.2K 🔥` `NEW`
1. [雷军笑称直播超变态超疯狂](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%AC%91%E7%A7%B0%E7%9B%B4%E6%92%AD%E8%B6%85%E5%8F%98%E6%80%81%E8%B6%85%E7%96%AF%E7%8B%82%23) `318.7K 🔥` `NEW`
1. [间谍策反中企员工致项目停工停产](https://s.weibo.com/weibo?q=%23%E9%97%B4%E8%B0%8D%E7%AD%96%E5%8F%8D%E4%B8%AD%E4%BC%81%E5%91%98%E5%B7%A5%E8%87%B4%E9%A1%B9%E7%9B%AE%E5%81%9C%E5%B7%A5%E5%81%9C%E4%BA%A7%23) `240.2K 🔥` `NEW`
1. [这些人是心源性猝死高危人群](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E4%BA%BA%E6%98%AF%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%E9%AB%98%E5%8D%B1%E4%BA%BA%E7%BE%A4%23) `212.6K 🔥` `NEW`
1. [刘萧旭带帝王蟹录综艺](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%90%A7%E6%97%AD%E5%B8%A6%E5%B8%9D%E7%8E%8B%E8%9F%B9%E5%BD%95%E7%BB%BC%E8%89%BA%23) `204.1K 🔥` `NEW`
1. [吴昕说会在婚前做财产公证](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%95%E8%AF%B4%E4%BC%9A%E5%9C%A8%E5%A9%9A%E5%89%8D%E5%81%9A%E8%B4%A2%E4%BA%A7%E5%85%AC%E8%AF%81%23) `200.2K 🔥` `NEW`
1. [王子杰日本籍](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E6%9D%B0%E6%97%A5%E6%9C%AC%E7%B1%8D%23) `183.4K 🔥` `NEW`
1. [特朗普希望达成永久停火和平协议](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B8%8C%E6%9C%9B%E8%BE%BE%E6%88%90%E6%B0%B8%E4%B9%85%E5%81%9C%E7%81%AB%E5%92%8C%E5%B9%B3%E5%8D%8F%E8%AE%AE%23) `155.1K 🔥` `NEW`
1. [张颂文咖位](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A2%82%E6%96%87%E5%92%96%E4%BD%8D%23) `151.1K 🔥` `NEW`
1. [钟丽缇55岁了](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%8755%E5%B2%81%E4%BA%86%23) `148.6K 🔥` `NEW`
1. [谢娜回应浪姐张杰演唱会团建 (Xie Na responded to Sister Lang’s team building at Zhang Jie’s concert)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9B%9E%E5%BA%94%E6%B5%AA%E5%A7%90%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A2%E5%BB%BA%23) `113.8K 🔥` `NEW`
1. [浪姐集体重返二十岁](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E9%9B%86%E4%BD%93%E9%87%8D%E8%BF%94%E4%BA%8C%E5%8D%81%E5%B2%81%23) `98.3K 🔥` `NEW`
1. [特朗普称伊朗逾20年不会有核武器](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%BC%8A%E6%9C%97%E9%80%BE20%E5%B9%B4%E4%B8%8D%E4%BC%9A%E6%9C%89%E6%A0%B8%E6%AD%A6%E5%99%A8%23) `97.5K 🔥` `NEW`
1. [莫氏鸡煲老板让李国麟别说好吃](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E8%AE%A9%E6%9D%8E%E5%9B%BD%E9%BA%9F%E5%88%AB%E8%AF%B4%E5%A5%BD%E5%90%83%23) `93.8K 🔥` `NEW`
1. [狼队发文回应](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%23) `78.5K 🔥` `NEW`
1. [赵子琪连发数条内容被质疑蹭热度](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E8%BF%9E%E5%8F%91%E6%95%B0%E6%9D%A1%E5%86%85%E5%AE%B9%E8%A2%AB%E8%B4%A8%E7%96%91%E8%B9%AD%E7%83%AD%E5%BA%A6%23) `78.5K 🔥` `NEW`
1. [Token第一股年内狂飙547%](https://s.weibo.com/weibo?q=%23Token%E7%AC%AC%E4%B8%80%E8%82%A1%E5%B9%B4%E5%86%85%E7%8B%82%E9%A3%99547%25%23) `78.5K 🔥` `NEW`
1. [饮料会涨价吗](https://s.weibo.com/weibo?q=%23%E9%A5%AE%E6%96%99%E4%BC%9A%E6%B6%A8%E4%BB%B7%E5%90%97%23) `78.5K 🔥` `NEW`
1. [郝熠然终止代言诚实一口](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%E7%BB%88%E6%AD%A2%E4%BB%A3%E8%A8%80%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%23) `78.5K 🔥` `NEW`
1. [TF四代我们的少年时代2杀青蛋糕](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E6%9D%80%E9%9D%92%E8%9B%8B%E7%B3%95%23) `78.5K 🔥` `NEW`
1. [停火生效前以军大规模空袭黎 (Israel launches massive airstrikes on Lebanon before ceasefire takes effect)](https://s.weibo.com/weibo?q=%23%E5%81%9C%E7%81%AB%E7%94%9F%E6%95%88%E5%89%8D%E4%BB%A5%E5%86%9B%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%A9%BA%E8%A2%AD%E9%BB%8E%23) `78.5K 🔥` `NEW`
1. [140年来最强厄尔尼诺正在酝酿](https://s.weibo.com/weibo?q=%23140%E5%B9%B4%E6%9D%A5%E6%9C%80%E5%BC%BA%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E6%AD%A3%E5%9C%A8%E9%85%9D%E9%85%BF%23) `78.5K 🔥` `NEW`
1. [Bin无缘全胜晋级MSI](https://s.weibo.com/weibo?q=%23Bin%E6%97%A0%E7%BC%98%E5%85%A8%E8%83%9C%E6%99%8B%E7%BA%A7MSI%23) `78.5K 🔥` `NEW`
1. [Creme无视Bin](https://s.weibo.com/weibo?q=%23Creme%E6%97%A0%E8%A7%86Bin%23) `78.5K 🔥` `NEW`
1. [中国科学家造出超级铜箔](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%AE%B6%E9%80%A0%E5%87%BA%E8%B6%85%E7%BA%A7%E9%93%9C%E7%AE%94%23) `78.5K 🔥` `NEW`
1. [四大一线城市房价全涨 (House prices in four major first-tier cities all rose)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%A4%A7%E4%B8%80%E7%BA%BF%E5%9F%8E%E5%B8%82%E6%88%BF%E4%BB%B7%E5%85%A8%E6%B6%A8%23) `1.1M 🔥` `+62%`
1. [十五五首季中国经济增长好于预期 (China’s economic growth was better than expected in the first quarter of the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E9%A6%96%E5%AD%A3%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%A2%9E%E9%95%BF%E5%A5%BD%E4%BA%8E%E9%A2%84%E6%9C%9F%23) `656.3K 🔥` `+25%`
1. [张晚意实现巧乐兹自由](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E5%AE%9E%E7%8E%B0%E5%B7%A7%E4%B9%90%E5%85%B9%E8%87%AA%E7%94%B1%23) `629.3K 🔥` `+25%`
1. [骆驼被排挤走失主人寻回把它骂哭了](https://s.weibo.com/weibo?q=%23%E9%AA%86%E9%A9%BC%E8%A2%AB%E6%8E%92%E6%8C%A4%E8%B5%B0%E5%A4%B1%E4%B8%BB%E4%BA%BA%E5%AF%BB%E5%9B%9E%E6%8A%8A%E5%AE%83%E9%AA%82%E5%93%AD%E4%BA%86%23) `261.2K 🔥` `+28%`
1. [魏牌V9X正式开启预售 (Wei brand V9X officially starts pre-sale)](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E7%89%8CV9X%E6%AD%A3%E5%BC%8F%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE%23) `256.4K 🔥` `+920%`
1. [欧洲仅剩够用6周航空燃油](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E4%BB%85%E5%89%A9%E5%A4%9F%E7%94%A86%E5%91%A8%E8%88%AA%E7%A9%BA%E7%87%83%E6%B2%B9%23) `243.2K 🔥` `+333%`
1. [诚实一口道歉](https://s.weibo.com/weibo?q=%23%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%E9%81%93%E6%AD%89%23) `204.1K 🔥` `+68%`
1. [曝清清性骚扰 (Qingqing sexual harassment exposed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B8%85%E6%B8%85%E6%80%A7%E9%AA%9A%E6%89%B0%23) `114.1K 🔥` `+23%`
1. [清清 指尖](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%B8%85%20%E6%8C%87%E5%B0%96%23) `113.9K 🔥` `+23%`
1. [张凌赫深圳 (Zhang Linghe Shenzhen)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%B7%B1%E5%9C%B3%23) `113.7K 🔥` `+39%`
1. [低精力都去查一下维d (If you have low energy, check out Vitamin D.)](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E9%83%BD%E5%8E%BB%E6%9F%A5%E4%B8%80%E4%B8%8B%E7%BB%B4d%23) `113.7K 🔥` `+92%`
1. [邓超年轻时候长这样 (Deng Chao looked like this when he was young)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%B9%B4%E8%BD%BB%E6%97%B6%E5%80%99%E9%95%BF%E8%BF%99%E6%A0%B7%23) `92.5K 🔥` `+63%`
1. [诚实一口 (Be honest)](https://s.weibo.com/weibo?q=%23%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%23) `78.5K 🔥` `+33%`
1. [马龙许昕赴成都助力国乒备战](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E8%B5%B4%E6%88%90%E9%83%BD%E5%8A%A9%E5%8A%9B%E5%9B%BD%E4%B9%92%E5%A4%87%E6%88%98%23) `78.5K 🔥` `+39%`
1. [肺癌成中国女性第一大癌症 (Lung cancer becomes the number one cancer among Chinese women)](https://s.weibo.com/weibo?q=%23%E8%82%BA%E7%99%8C%E6%88%90%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%80%A7%E7%AC%AC%E4%B8%80%E5%A4%A7%E7%99%8C%E7%97%87%23) `265.0K 🔥`
1. [何润东回宿迁的排面拉满了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%9B%9E%E5%AE%BF%E8%BF%81%E7%9A%84%E6%8E%92%E9%9D%A2%E6%8B%89%E6%BB%A1%E4%BA%86%23) `114.2K 🔥`
1. [清清否认性骚扰](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%B8%85%E5%90%A6%E8%AE%A4%E6%80%A7%E9%AA%9A%E6%89%B0%23) `114.0K 🔥`
1. [心源性猝死为什么盯上年轻人](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%E4%B8%BA%E4%BB%80%E4%B9%88%E7%9B%AF%E4%B8%8A%E5%B9%B4%E8%BD%BB%E4%BA%BA%23) `101.7K 🔥`
1. [猝死来临前6个隐匿信号 (6 hidden signs before sudden death)](https://s.weibo.com/weibo?q=%23%E7%8C%9D%E6%AD%BB%E6%9D%A5%E4%B8%B4%E5%89%8D6%E4%B8%AA%E9%9A%90%E5%8C%BF%E4%BF%A1%E5%8F%B7%23) `81.3K 🔥`
1. [张晚意求职](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E6%B1%82%E8%81%8C%23) `78.8K 🔥`
1. [94斤女生打司美格鲁肽减肥被送急诊 (A 94-pound girl was sent to the emergency room after taking semaglutide to lose weight.)](https://s.weibo.com/weibo?q=%2394%E6%96%A4%E5%A5%B3%E7%94%9F%E6%89%93%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E5%87%8F%E8%82%A5%E8%A2%AB%E9%80%81%E6%80%A5%E8%AF%8A%23) `78.5K 🔥`
1. [最不困的人叫醒最困的人 (The least sleepy person wakes up the sleepiest person)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E4%B8%8D%E5%9B%B0%E7%9A%84%E4%BA%BA%E5%8F%AB%E9%86%92%E6%9C%80%E5%9B%B0%E7%9A%84%E4%BA%BA%23) `203.4K 🔥` `-78%`
1. [美国多位机密领域科学家失踪或死亡 (Many scientists in classified fields in the United States are missing or dead)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%9A%E4%BD%8D%E6%9C%BA%E5%AF%86%E9%A2%86%E5%9F%9F%E7%A7%91%E5%AD%A6%E5%AE%B6%E5%A4%B1%E8%B8%AA%E6%88%96%E6%AD%BB%E4%BA%A1%23) `142.3K 🔥` `-31%`
1. [曼宁格因火车撞击去世](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%AE%81%E6%A0%BC%E5%9B%A0%E7%81%AB%E8%BD%A6%E6%92%9E%E5%87%BB%E5%8E%BB%E4%B8%96%23) `114.2K 🔥` `-56%`
1. [四川地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `106.4K 🔥` `-45%`
1. [大疆Pocket4 (DJI Pocket4)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%23) `78.5K 🔥` `-25%`

Updated at 2026-04-17 09:10:47

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
