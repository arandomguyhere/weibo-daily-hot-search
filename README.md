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

1. [高考 (college entrance examination)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%23) `1.0M 🔥` `NEW`
1. [于谦美团闪购名酒推荐官](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E8%B0%A6%E7%BE%8E%E5%9B%A2%E9%97%AA%E8%B4%AD%E5%90%8D%E9%85%92%E6%8E%A8%E8%8D%90%E5%AE%98%23) `978.0K 🔥` `NEW`
1. [郑钦文止步女王杯首轮](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%AD%A2%E6%AD%A5%E5%A5%B3%E7%8E%8B%E6%9D%AF%E9%A6%96%E8%BD%AE%23) `967.5K 🔥` `NEW`
1. [李小冉乘风下班哭了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B9%98%E9%A3%8E%E4%B8%8B%E7%8F%AD%E5%93%AD%E4%BA%86%23) `791.7K 🔥` `NEW`
1. [网络辟谣标签](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E8%BE%9F%E8%B0%A3%E6%A0%87%E7%AD%BE%23) `685.9K 🔥` `NEW`
1. [韩剧迎来了它的四大战神](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%89%A7%E8%BF%8E%E6%9D%A5%E4%BA%86%E5%AE%83%E7%9A%84%E5%9B%9B%E5%A4%A7%E6%88%98%E7%A5%9E%23) `660.5K 🔥` `NEW`
1. [李在明回应日韩军事合作](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E5%9B%9E%E5%BA%94%E6%97%A5%E9%9F%A9%E5%86%9B%E4%BA%8B%E5%90%88%E4%BD%9C%23) `204.8K 🔥` `NEW`
1. [虫子半夜吃饭吧唧嘴被男子当场处决](https://s.weibo.com/weibo?q=%23%E8%99%AB%E5%AD%90%E5%8D%8A%E5%A4%9C%E5%90%83%E9%A5%AD%E5%90%A7%E5%94%A7%E5%98%B4%E8%A2%AB%E7%94%B7%E5%AD%90%E5%BD%93%E5%9C%BA%E5%A4%84%E5%86%B3%23) `188.2K 🔥` `NEW`
1. [因为题太难考生出考场后直接哭了](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E9%A2%98%E5%A4%AA%E9%9A%BE%E8%80%83%E7%94%9F%E5%87%BA%E8%80%83%E5%9C%BA%E5%90%8E%E7%9B%B4%E6%8E%A5%E5%93%AD%E4%BA%86%23) `186.8K 🔥` `NEW`
1. [叶一茜抱歉大家看到的一直是负面的我](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%E6%8A%B1%E6%AD%89%E5%A4%A7%E5%AE%B6%E7%9C%8B%E5%88%B0%E7%9A%84%E4%B8%80%E7%9B%B4%E6%98%AF%E8%B4%9F%E9%9D%A2%E7%9A%84%E6%88%91%23) `173.6K 🔥` `NEW`
1. [膳魔师紧急召回百万件产品 (Thermos issues emergency recall of millions of products)](https://s.weibo.com/weibo?q=%23%E8%86%B3%E9%AD%94%E5%B8%88%E7%B4%A7%E6%80%A5%E5%8F%AC%E5%9B%9E%E7%99%BE%E4%B8%87%E4%BB%B6%E4%BA%A7%E5%93%81%23) `157.7K 🔥` `NEW`
1. [印度为何顶着高温也要限制中国空调](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%BA%E4%BD%95%E9%A1%B6%E7%9D%80%E9%AB%98%E6%B8%A9%E4%B9%9F%E8%A6%81%E9%99%90%E5%88%B6%E4%B8%AD%E5%9B%BD%E7%A9%BA%E8%B0%83%23) `156.9K 🔥` `NEW`
1. [马立奥减肥原因](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%8B%E5%A5%A5%E5%87%8F%E8%82%A5%E5%8E%9F%E5%9B%A0%23) `150.4K 🔥` `NEW`
1. [iOS27升级汇总](https://s.weibo.com/weibo?q=%23iOS27%E5%8D%87%E7%BA%A7%E6%B1%87%E6%80%BB%23) `144.8K 🔥` `NEW`
1. [艾米低调最后进考场](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E4%BD%8E%E8%B0%83%E6%9C%80%E5%90%8E%E8%BF%9B%E8%80%83%E5%9C%BA%23) `143.2K 🔥` `NEW`
1. [苹果WWDC26一文汇总](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CWWDC26%E4%B8%80%E6%96%87%E6%B1%87%E6%80%BB%23) `138.4K 🔥` `NEW`
1. [全球70%PPE树脂供应中断](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%8370%25PPE%E6%A0%91%E8%84%82%E4%BE%9B%E5%BA%94%E4%B8%AD%E6%96%AD%23) `114.4K 🔥` `NEW`
1. [消费者称希望金价降到500元](https://s.weibo.com/weibo?q=%23%E6%B6%88%E8%B4%B9%E8%80%85%E7%A7%B0%E5%B8%8C%E6%9C%9B%E9%87%91%E4%BB%B7%E9%99%8D%E5%88%B0500%E5%85%83%23) `113.3K 🔥` `NEW`
1. [艾米童星出道北电艺考第三名](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E7%AB%A5%E6%98%9F%E5%87%BA%E9%81%93%E5%8C%97%E7%94%B5%E8%89%BA%E8%80%83%E7%AC%AC%E4%B8%89%E5%90%8D%23) `96.6K 🔥` `NEW`
1. [第一次见这种纹路的西瓜](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E8%BF%99%E7%A7%8D%E7%BA%B9%E8%B7%AF%E7%9A%84%E8%A5%BF%E7%93%9C%23) `88.4K 🔥` `NEW`
1. [保定一西瓜大盗午夜作案 (A watermelon thief committed a crime at midnight in Baoding)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%AE%9A%E4%B8%80%E8%A5%BF%E7%93%9C%E5%A4%A7%E7%9B%97%E5%8D%88%E5%A4%9C%E4%BD%9C%E6%A1%88%23) `84.9K 🔥` `NEW`
1. [辽宁3岁狗狗连续3年高考闭麦](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%813%E5%B2%81%E7%8B%97%E7%8B%97%E8%BF%9E%E7%BB%AD3%E5%B9%B4%E9%AB%98%E8%80%83%E9%97%AD%E9%BA%A6%23) `82.5K 🔥` `NEW`
1. [郑钦文不敌克里斯蒂安](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%B8%8D%E6%95%8C%E5%85%8B%E9%87%8C%E6%96%AF%E8%92%82%E5%AE%89%23) `65.7K 🔥` `NEW`
1. [iOS27 调休闹钟 (iOS27 snooze alarm clock)](https://s.weibo.com/weibo?q=%23iOS27%20%E8%B0%83%E4%BC%91%E9%97%B9%E9%92%9F%23) `2.2M 🔥` `+255%`
1. [平壤各界群众和少年儿童身着节日盛装](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%A3%A4%E5%90%84%E7%95%8C%E7%BE%A4%E4%BC%97%E5%92%8C%E5%B0%91%E5%B9%B4%E5%84%BF%E7%AB%A5%E8%BA%AB%E7%9D%80%E8%8A%82%E6%97%A5%E7%9B%9B%E8%A3%85%23) `995.8K 🔥` `+190%`
1. [双胞胎姐妹遭袭一死一伤案最新进展 (The latest developments in the case of twin sisters who were attacked, one killed and the other injured)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A7%90%E5%A6%B9%E9%81%AD%E8%A2%AD%E4%B8%80%E6%AD%BB%E4%B8%80%E4%BC%A4%E6%A1%88%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `727.3K 🔥` `+140%`
1. [国行iPhone 悬着的心终于死了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%A1%8CiPhone%20%E6%82%AC%E7%9D%80%E7%9A%84%E5%BF%83%E7%BB%88%E4%BA%8E%E6%AD%BB%E4%BA%86%23) `597.6K 🔥` `+114%`
1. [人在什么状态下学习效率最高](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%9C%A8%E4%BB%80%E4%B9%88%E7%8A%B6%E6%80%81%E4%B8%8B%E5%AD%A6%E4%B9%A0%E6%95%88%E7%8E%87%E6%9C%80%E9%AB%98%23) `548.3K 🔥` `+164%`
1. [郑钦文vs克里斯蒂安](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%85%8B%E9%87%8C%E6%96%AF%E8%92%82%E5%AE%89%23) `510.6K 🔥` `+877%`
1. [全世界倒数第一体面的运动](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%E4%BD%93%E9%9D%A2%E7%9A%84%E8%BF%90%E5%8A%A8%23) `508.2K 🔥` `+277%`
1. [iOS27](https://s.weibo.com/weibo?q=%23iOS27%23) `495.4K 🔥` `+52%`
1. [美股 (US stocks)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `291.3K 🔥` `+126%`
1. [跑男团全员包场白鹿莫离](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E5%9B%A2%E5%85%A8%E5%91%98%E5%8C%85%E5%9C%BA%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%23) `274.3K 🔥` `+103%`
1. [张月方停止浪姐选歌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%96%B9%E5%81%9C%E6%AD%A2%E6%B5%AA%E5%A7%90%E9%80%89%E6%AD%8C%23) `234.6K 🔥` `+59%`
1. [孙红雷在埃菲尔铁塔下很想龚俊 (Sun Honglei misses Gong Jun under the Eiffel Tower)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E5%9C%A8%E5%9F%83%E8%8F%B2%E5%B0%94%E9%93%81%E5%A1%94%E4%B8%8B%E5%BE%88%E6%83%B3%E9%BE%9A%E4%BF%8A%23) `198.9K 🔥` `+86%`
1. [高考作文 给阿嬷的情书 (College Entrance Examination Composition A Love Letter to Grandma)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%20%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `191.9K 🔥` `+61%`
1. [男子伪装店员带走醉酒女子后性侵](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BC%AA%E8%A3%85%E5%BA%97%E5%91%98%E5%B8%A6%E8%B5%B0%E9%86%89%E9%85%92%E5%A5%B3%E5%AD%90%E5%90%8E%E6%80%A7%E4%BE%B5%23) `188.9K 🔥` `+107%`
1. [司机避开远光灯惊见多人车道聚餐](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E9%81%BF%E5%BC%80%E8%BF%9C%E5%85%89%E7%81%AF%E6%83%8A%E8%A7%81%E5%A4%9A%E4%BA%BA%E8%BD%A6%E9%81%93%E8%81%9A%E9%A4%90%23) `186.2K 🔥` `+239%`
1. [前同事离职忘记删聊天记录](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%90%8C%E4%BA%8B%E7%A6%BB%E8%81%8C%E5%BF%98%E8%AE%B0%E5%88%A0%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `156.5K 🔥` `+63%`
1. [伊朗打击以色列两处军事基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%A4%E5%A4%84%E5%86%9B%E4%BA%8B%E5%9F%BA%E5%9C%B0%23) `150.1K 🔥` `+171%`
1. [李小冉咋了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%92%8B%E4%BA%86%23) `140.6K 🔥` `+50%`
1. [张月的情商](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E7%9A%84%E6%83%85%E5%95%86%23) `137.8K 🔥` `+33%`
1. [李昀锐小说眼角通红具像化了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%B0%8F%E8%AF%B4%E7%9C%BC%E8%A7%92%E9%80%9A%E7%BA%A2%E5%85%B7%E5%83%8F%E5%8C%96%E4%BA%86%23) `111.7K 🔥` `+37%`
1. [女子减肥戒碳水暴瘦头秃了一大片](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8F%E8%82%A5%E6%88%92%E7%A2%B3%E6%B0%B4%E6%9A%B4%E7%98%A6%E5%A4%B4%E7%A7%83%E4%BA%86%E4%B8%80%E5%A4%A7%E7%89%87%23) `102.5K 🔥` `+97%`
1. [高考英语 (College Entrance Examination English)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E8%8B%B1%E8%AF%AD%23) `91.8K 🔥` `+77%`
1. [王鹤棣包场白鹿莫离 (Wang Hedi privately rents Bailu Moli)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%8C%85%E5%9C%BA%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%23) `91.5K 🔥` `+21%`
1. [奔跑吧 (run)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `89.6K 🔥` `+64%`
1. [千万别和年纪大的导师开玩笑 (Never joke with an older mentor)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E5%92%8C%E5%B9%B4%E7%BA%AA%E5%A4%A7%E7%9A%84%E5%AF%BC%E5%B8%88%E5%BC%80%E7%8E%A9%E7%AC%91%23) `78.2K 🔥` `+49%`
1. [韦雪直播怒斥员工 (Wei Xue angrily denounces employees on live broadcast)](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E9%9B%AA%E7%9B%B4%E6%92%AD%E6%80%92%E6%96%A5%E5%91%98%E5%B7%A5%23) `155.6K 🔥`
1. [苹果开发者大会](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%BC%80%E5%8F%91%E8%80%85%E5%A4%A7%E4%BC%9A%23) `143.9K 🔥`
1. [为什么面试要填家庭成员信息 (Why do you need to fill in family member information during the interview?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9D%A2%E8%AF%95%E8%A6%81%E5%A1%AB%E5%AE%B6%E5%BA%AD%E6%88%90%E5%91%98%E4%BF%A1%E6%81%AF%23) `292.0K 🔥` `-34%`

Updated at 2026-06-09 08:08:16

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
