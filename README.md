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

1. [四大一线城市房价全涨 (House prices in four major first-tier cities all rose)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%A4%A7%E4%B8%80%E7%BA%BF%E5%9F%8E%E5%B8%82%E6%88%BF%E4%BB%B7%E5%85%A8%E6%B6%A8%23) `681.9K 🔥` `NEW`
1. [曼宁格因火车撞击去世](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%AE%81%E6%A0%BC%E5%9B%A0%E7%81%AB%E8%BD%A6%E6%92%9E%E5%87%BB%E5%8E%BB%E4%B8%96%23) `258.3K 🔥` `NEW`
1. [骆驼被排挤走失主人寻回把它骂哭了](https://s.weibo.com/weibo?q=%23%E9%AA%86%E9%A9%BC%E8%A2%AB%E6%8E%92%E6%8C%A4%E8%B5%B0%E5%A4%B1%E4%B8%BB%E4%BA%BA%E5%AF%BB%E5%9B%9E%E6%8A%8A%E5%AE%83%E9%AA%82%E5%93%AD%E4%BA%86%23) `204.8K 🔥` `NEW`
1. [四川地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `193.2K 🔥` `NEW`
1. [清清否认性骚扰](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%B8%85%E5%90%A6%E8%AE%A4%E6%80%A7%E9%AA%9A%E6%89%B0%23) `123.4K 🔥` `NEW`
1. [何润东回宿迁的排面拉满了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%9B%9E%E5%AE%BF%E8%BF%81%E7%9A%84%E6%8E%92%E9%9D%A2%E6%8B%89%E6%BB%A1%E4%BA%86%23) `120.3K 🔥` `NEW`
1. [清清 指尖](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%B8%85%20%E6%8C%87%E5%B0%96%23) `92.5K 🔥` `NEW`
1. [葛夕胖了十几斤](https://s.weibo.com/weibo?q=%23%E8%91%9B%E5%A4%95%E8%83%96%E4%BA%86%E5%8D%81%E5%87%A0%E6%96%A4%23) `91.4K 🔥` `NEW`
1. [papi妈妈称将起诉小区物业](https://s.weibo.com/weibo?q=%23papi%E5%A6%88%E5%A6%88%E7%A7%B0%E5%B0%86%E8%B5%B7%E8%AF%89%E5%B0%8F%E5%8C%BA%E7%89%A9%E4%B8%9A%23) `59.5K 🔥` `NEW`
1. [泼水节多人向车内老人喷水车主发声](https://s.weibo.com/weibo?q=%23%E6%B3%BC%E6%B0%B4%E8%8A%82%E5%A4%9A%E4%BA%BA%E5%90%91%E8%BD%A6%E5%86%85%E8%80%81%E4%BA%BA%E5%96%B7%E6%B0%B4%E8%BD%A6%E4%B8%BB%E5%8F%91%E5%A3%B0%23) `57.7K 🔥` `NEW`
1. [邓超年轻时候长这样 (Deng Chao looked like this when he was young)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%B9%B4%E8%BD%BB%E6%97%B6%E5%80%99%E9%95%BF%E8%BF%99%E6%A0%B7%23) `56.8K 🔥` `NEW`
1. [马龙许昕赴成都助力国乒备战](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E8%B5%B4%E6%88%90%E9%83%BD%E5%8A%A9%E5%8A%9B%E5%9B%BD%E4%B9%92%E5%A4%87%E6%88%98%23) `56.5K 🔥` `NEW`
1. [欧洲仅剩够用6周航空燃油](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E4%BB%85%E5%89%A9%E5%A4%9F%E7%94%A86%E5%91%A8%E8%88%AA%E7%A9%BA%E7%87%83%E6%B2%B9%23) `56.2K 🔥` `NEW`
1. [最不困的人叫醒最困的人 (The least sleepy person wakes up the sleepiest person)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E4%B8%8D%E5%9B%B0%E7%9A%84%E4%BA%BA%E5%8F%AB%E9%86%92%E6%9C%80%E5%9B%B0%E7%9A%84%E4%BA%BA%23) `923.7K 🔥` `+698%`
1. [十五五首季中国经济增长好于预期 (China’s economic growth was better than expected in the first quarter of the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E9%A6%96%E5%AD%A3%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%A2%9E%E9%95%BF%E5%A5%BD%E4%BA%8E%E9%A2%84%E6%9C%9F%23) `524.0K 🔥` `+50%`
1. [美国多位机密领域科学家失踪或死亡 (Many scientists in classified fields in the United States are missing or dead)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%9A%E4%BD%8D%E6%9C%BA%E5%AF%86%E9%A2%86%E5%9F%9F%E7%A7%91%E5%AD%A6%E5%AE%B6%E5%A4%B1%E8%B8%AA%E6%88%96%E6%AD%BB%E4%BA%A1%23) `206.7K 🔥` `+47%`
1. [张伦硕妈妈曾遗憾没有亲孙子](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%A6%E7%A1%95%E5%A6%88%E5%A6%88%E6%9B%BE%E9%81%97%E6%86%BE%E6%B2%A1%E6%9C%89%E4%BA%B2%E5%AD%99%E5%AD%90%23) `148.2K 🔥` `+22%`
1. [马丽你怎么管的沈腾](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%BD%E4%BD%A0%E6%80%8E%E4%B9%88%E7%AE%A1%E7%9A%84%E6%B2%88%E8%85%BE%23) `124.2K 🔥` `+53%`
1. [诚实一口道歉](https://s.weibo.com/weibo?q=%23%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%E9%81%93%E6%AD%89%23) `121.5K 🔥` `+31%`
1. [美防长称伊朗最高领袖受伤但活着 (US defense chief says Iran's supreme leader injured but alive)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%98%B2%E9%95%BF%E7%A7%B0%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%8F%97%E4%BC%A4%E4%BD%86%E6%B4%BB%E7%9D%80%23) `115.9K 🔥` `+60%`
1. [中国不吸烟女性二手烟暴露率达70% (Secondhand smoke exposure rate among non-smoking women in China reaches 70%)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%8D%E5%90%B8%E7%83%9F%E5%A5%B3%E6%80%A7%E4%BA%8C%E6%89%8B%E7%83%9F%E6%9A%B4%E9%9C%B2%E7%8E%87%E8%BE%BE70%25%23) `108.1K 🔥` `+107%`
1. [大疆Pocket4 (DJI Pocket4)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%23) `104.6K 🔥` `+87%`
1. [潘石屹发文](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%9F%B3%E5%B1%B9%E5%8F%91%E6%96%87%23) `103.2K 🔥` `+28%`
1. [张晚意求职](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E6%B1%82%E8%81%8C%23) `92.8K 🔥` `+51%`
1. [曝清清性骚扰 (Qingqing sexual harassment exposed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B8%85%E6%B8%85%E6%80%A7%E9%AA%9A%E6%89%B0%23) `92.5K 🔥` `+89%`
1. [400毫升献血证被炒到2000元 (400ml blood donation certificate sold for 2,000 yuan)](https://s.weibo.com/weibo?q=%23400%E6%AF%AB%E5%8D%87%E7%8C%AE%E8%A1%80%E8%AF%81%E8%A2%AB%E7%82%92%E5%88%B02000%E5%85%83%23) `92.0K 🔥` `+66%`
1. [94斤女生打司美格鲁肽减肥被送急诊 (A 94-pound girl was sent to the emergency room after taking semaglutide to lose weight.)](https://s.weibo.com/weibo?q=%2394%E6%96%A4%E5%A5%B3%E7%94%9F%E6%89%93%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E5%87%8F%E8%82%A5%E8%A2%AB%E9%80%81%E6%80%A5%E8%AF%8A%23) `91.5K 🔥` `+33%`
1. [猝死来临前6个隐匿信号 (6 hidden signs before sudden death)](https://s.weibo.com/weibo?q=%23%E7%8C%9D%E6%AD%BB%E6%9D%A5%E4%B8%B4%E5%89%8D6%E4%B8%AA%E9%9A%90%E5%8C%BF%E4%BF%A1%E5%8F%B7%23) `71.1K 🔥` `+47%`
1. [蜜语纪](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%23) `59.7K 🔥` `+34%`
1. [地球或今年冲击高温极限 (The earth may hit the high temperature limit this year)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E6%88%96%E4%BB%8A%E5%B9%B4%E5%86%B2%E5%87%BB%E9%AB%98%E6%B8%A9%E6%9E%81%E9%99%90%23) `58.8K 🔥` `+37%`
1. [警方通报火锅店女老板被顾客骚扰](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%81%AB%E9%94%85%E5%BA%97%E5%A5%B3%E8%80%81%E6%9D%BF%E8%A2%AB%E9%A1%BE%E5%AE%A2%E9%AA%9A%E6%89%B0%23) `58.5K 🔥` `+44%`
1. [伊朗早有后手 (Iran has already had a backup plan)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%97%A9%E6%9C%89%E5%90%8E%E6%89%8B%23) `58.3K 🔥` `+35%`
1. [浪姐张杰鸟巢演唱会团建 (Lang Jie Zhang Jie Bird's Nest Concert Team Building)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A2%E5%BB%BA%23) `57.6K 🔥` `+42%`
1. [迪丽热巴生离死别哭戏](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%94%9F%E7%A6%BB%E6%AD%BB%E5%88%AB%E5%93%AD%E6%88%8F%23) `57.2K 🔥` `+41%`
1. [粉色蓝莓炒至400元一斤](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E8%93%9D%E8%8E%93%E7%82%92%E8%87%B3400%E5%85%83%E4%B8%80%E6%96%A4%23) `57.0K 🔥` `+40%`
1. [韩红问李乃文是真唱吗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E9%97%AE%E6%9D%8E%E4%B9%83%E6%96%87%E6%98%AF%E7%9C%9F%E5%94%B1%E5%90%97%23) `55.9K 🔥` `+38%`
1. [老板说滚员工离岗被辞获赔近16万 (The boss said he was fired and the employee resigned and was compensated nearly 160,000 yuan.)](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E8%AF%B4%E6%BB%9A%E5%91%98%E5%B7%A5%E7%A6%BB%E5%B2%97%E8%A2%AB%E8%BE%9E%E8%8E%B7%E8%B5%94%E8%BF%9116%E4%B8%87%23) `55.6K 🔥` `+32%`
1. [深圳一男子确诊罕见传染病 (A man in Shenzhen was diagnosed with a rare infectious disease)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E7%94%B7%E5%AD%90%E7%A1%AE%E8%AF%8A%E7%BD%95%E8%A7%81%E4%BC%A0%E6%9F%93%E7%97%85%23) `55.5K 🔥` `+37%`
1. [零跑D19售价21.98万起 (Leapmoon D19 starts at 219,800)](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E8%B7%91D19%E5%94%AE%E4%BB%B721.98%E4%B8%87%E8%B5%B7%23) `55.3K 🔥` `+36%`
1. [中方回应特朗普称访华不受影响 (China responds to Trump's statement that visit to China will not be affected)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%AE%BF%E5%8D%8E%E4%B8%8D%E5%8F%97%E5%BD%B1%E5%93%8D%23) `54.9K 🔥` `+33%`
1. [张晚意实现巧乐兹自由](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E5%AE%9E%E7%8E%B0%E5%B7%A7%E4%B9%90%E5%85%B9%E8%87%AA%E7%94%B1%23) `502.7K 🔥`
1. [被强拉开车门泼水女子称或将追责](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%BC%BA%E6%8B%89%E5%BC%80%E8%BD%A6%E9%97%A8%E6%B3%BC%E6%B0%B4%E5%A5%B3%E5%AD%90%E7%A7%B0%E6%88%96%E5%B0%86%E8%BF%BD%E8%B4%A3%23) `117.6K 🔥`
1. [张凌赫深圳 (Zhang Linghe Shenzhen)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%B7%B1%E5%9C%B3%23) `81.6K 🔥`
1. [低精力都去查一下维d](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E9%83%BD%E5%8E%BB%E6%9F%A5%E4%B8%80%E4%B8%8B%E7%BB%B4d%23) `59.3K 🔥`
1. [诚实一口 (Be honest)](https://s.weibo.com/weibo?q=%23%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%23) `59.2K 🔥`
1. [黄灿灿梦回武大校花](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%A2%A6%E5%9B%9E%E6%AD%A6%E5%A4%A7%E6%A0%A1%E8%8A%B1%23) `58.8K 🔥`
1. [特朗普称以黎停火10天 (Trump calls for 10-day ceasefire between Israel and Lebanon)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%BB%A5%E9%BB%8E%E5%81%9C%E7%81%AB10%E5%A4%A9%23) `58.0K 🔥`
1. [肺癌成中国女性第一大癌症 (Lung cancer becomes the number one cancer among Chinese women)](https://s.weibo.com/weibo?q=%23%E8%82%BA%E7%99%8C%E6%88%90%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%80%A7%E7%AC%AC%E4%B8%80%E5%A4%A7%E7%99%8C%E7%97%87%23) `257.9K 🔥` `-56%`
1. [心源性猝死为什么盯上年轻人](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%E4%B8%BA%E4%BB%80%E4%B9%88%E7%9B%AF%E4%B8%8A%E5%B9%B4%E8%BD%BB%E4%BA%BA%23) `116.6K 🔥` `-28%`
1. [诚实一口开除涉事主播 (Honesty and fire the anchor involved)](https://s.weibo.com/weibo?q=%23%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%E5%BC%80%E9%99%A4%E6%B6%89%E4%BA%8B%E4%B8%BB%E6%92%AD%23) `69.5K 🔥` `-25%`
1. [36岁小伙全职当孙子月入5000](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E5%B0%8F%E4%BC%99%E5%85%A8%E8%81%8C%E5%BD%93%E5%AD%99%E5%AD%90%E6%9C%88%E5%85%A55000%23) `56.5K 🔥` `-64%`

Updated at 2026-04-17 07:45:37

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
