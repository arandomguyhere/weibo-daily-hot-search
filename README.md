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

1. [金像奖爆冷 (Academy Awards upset)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E7%88%86%E5%86%B7%23) `657.1K 🔥` `NEW`
1. [韩警方就中国女生被日男子骚扰致歉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E5%B0%B1%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E8%A2%AB%E6%97%A5%E7%94%B7%E5%AD%90%E9%AA%9A%E6%89%B0%E8%87%B4%E6%AD%89%23) `393.4K 🔥` `NEW`
1. [伊军称将很快报复美军](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%86%9B%E7%A7%B0%E5%B0%86%E5%BE%88%E5%BF%AB%E6%8A%A5%E5%A4%8D%E7%BE%8E%E5%86%9B%23) `389.4K 🔥` `NEW`
1. [李雨桐爆料薛之谦被拘谁该颤抖](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E7%88%86%E6%96%99%E8%96%9B%E4%B9%8B%E8%B0%A6%E8%A2%AB%E6%8B%98%E8%B0%81%E8%AF%A5%E9%A2%A4%E6%8A%96%23) `359.4K 🔥` `NEW`
1. [金银突发跳水](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E7%AA%81%E5%8F%91%E8%B7%B3%E6%B0%B4%23) `356.5K 🔥` `NEW`
1. [业内对田曦薇的评价](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E5%AF%B9%E7%94%B0%E6%9B%A6%E8%96%87%E7%9A%84%E8%AF%84%E4%BB%B7%23) `338.0K 🔥` `NEW`
1. [专家称黄金翻倍没有悬念](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E9%BB%84%E9%87%91%E7%BF%BB%E5%80%8D%E6%B2%A1%E6%9C%89%E6%82%AC%E5%BF%B5%23) `327.5K 🔥` `NEW`
1. [总感觉现在的月亮电量不足了](https://s.weibo.com/weibo?q=%23%E6%80%BB%E6%84%9F%E8%A7%89%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%9C%88%E4%BA%AE%E7%94%B5%E9%87%8F%E4%B8%8D%E8%B6%B3%E4%BA%86%23) `311.1K 🔥` `NEW`
1. [张艺凡回应脱鞋合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%87%A1%E5%9B%9E%E5%BA%94%E8%84%B1%E9%9E%8B%E5%90%88%E7%85%A7%23) `295.4K 🔥` `NEW`
1. [上班时间禁止偷吃同事](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%97%B6%E9%97%B4%E7%A6%81%E6%AD%A2%E5%81%B7%E5%90%83%E5%90%8C%E4%BA%8B%23) `280.1K 🔥` `NEW`
1. [五哈老舅回归 (Uncle Wuha returns)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%E8%80%81%E8%88%85%E5%9B%9E%E5%BD%92%23) `278.4K 🔥` `NEW`
1. [伊朗确认将参加2026年世界杯](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A1%AE%E8%AE%A4%E5%B0%86%E5%8F%82%E5%8A%A02026%E5%B9%B4%E4%B8%96%E7%95%8C%E6%9D%AF%23) `272.6K 🔥` `NEW`
1. [窈窈有期杀青](https://s.weibo.com/weibo?q=%23%E7%AA%88%E7%AA%88%E6%9C%89%E6%9C%9F%E6%9D%80%E9%9D%92%23) `271.1K 🔥` `NEW`
1. [如果一个人特别会穿搭](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%89%B9%E5%88%AB%E4%BC%9A%E7%A9%BF%E6%90%AD%23) `267.5K 🔥` `NEW`
1. [张杰谢娜后台拥抱](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%B0%A2%E5%A8%9C%E5%90%8E%E5%8F%B0%E6%8B%A5%E6%8A%B1%23) `252.5K 🔥` `NEW`
1. [猪宝子 星星](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E5%AE%9D%E5%AD%90%20%E6%98%9F%E6%98%9F%23) `163.7K 🔥` `NEW`
1. [特朗普称二谈伊朗拒谈](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%BA%8C%E8%B0%88%E4%BC%8A%E6%9C%97%E6%8B%92%E8%B0%88%23) `163.5K 🔥` `NEW`
1. [金像奖影后廖子妤是90后](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%90%8E%E5%BB%96%E5%AD%90%E5%A6%A4%E6%98%AF90%E5%90%8E%23) `163.4K 🔥` `NEW`
1. [高瀚宇 最好的老板](https://s.weibo.com/weibo?q=%23%E9%AB%98%E7%80%9A%E5%AE%87%20%E6%9C%80%E5%A5%BD%E7%9A%84%E8%80%81%E6%9D%BF%23) `155.4K 🔥` `NEW`
1. [解放军过航横当水道](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E8%BF%87%E8%88%AA%E6%A8%AA%E5%BD%93%E6%B0%B4%E9%81%93%23) `138.3K 🔥` `NEW`
1. [aespa回归预告 (aespa return notice)](https://s.weibo.com/weibo?q=%23aespa%E5%9B%9E%E5%BD%92%E9%A2%84%E5%91%8A%23) `137.9K 🔥` `NEW`
1. [拜仁提前4轮夺冠](https://s.weibo.com/weibo?q=%23%E6%8B%9C%E4%BB%81%E6%8F%90%E5%89%8D4%E8%BD%AE%E5%A4%BA%E5%86%A0%23) `122.3K 🔥` `NEW`
1. [章子怡惠英红 自古红蓝出cp](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E8%87%AA%E5%8F%A4%E7%BA%A2%E8%93%9D%E5%87%BAcp%23) `119.6K 🔥` `NEW`
1. [鹿晗 关晓彤](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `14.9M 🔥` `+5031%`
1. [今年5月将进入厄尔尼诺状态](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B45%E6%9C%88%E5%B0%86%E8%BF%9B%E5%85%A5%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E7%8A%B6%E6%80%81%23) `875.0K 🔥` `+170%`
1. [华为Pura系列新品发布 (Huawei Pura series new products released)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura%E7%B3%BB%E5%88%97%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%23) `666.0K 🔥` `+241%`
1. [成毅焕彩新Yi程 (Cheng Yi's new journey)](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%84%95%E5%BD%A9%E6%96%B0Yi%E7%A8%8B%23) `591.9K 🔥` `+93%`
1. [豆包变豆脚了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%8F%98%E8%B1%86%E8%84%9A%E4%BA%86%23) `429.5K 🔥` `+31%`
1. [程序员追不上机器人干脆开电瓶车跟](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E5%BA%8F%E5%91%98%E8%BF%BD%E4%B8%8D%E4%B8%8A%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B9%B2%E8%84%86%E5%BC%80%E7%94%B5%E7%93%B6%E8%BD%A6%E8%B7%9F%23) `382.1K 🔥` `+22%`
1. [张雪机车比赛因红旗中断](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%AF%94%E8%B5%9B%E5%9B%A0%E7%BA%A2%E6%97%97%E4%B8%AD%E6%96%AD%23) `324.8K 🔥` `+77%`
1. [NBA季后赛](https://s.weibo.com/weibo?q=%23NBA%E5%AD%A3%E5%90%8E%E8%B5%9B%23) `171.4K 🔥` `+50%`
1. [24岁女研究生赢发呆比赛冠军 (24-year-old female graduate student wins trance competition)](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E8%B5%A2%E5%8F%91%E5%91%86%E6%AF%94%E8%B5%9B%E5%86%A0%E5%86%9B%23) `157.8K 🔥` `+39%`
1. [2米蟒蛇吞下1只鸡后被卡鸡笼 (2-meter python gets stuck in chicken cage after swallowing a chicken)](https://s.weibo.com/weibo?q=%232%E7%B1%B3%E8%9F%92%E8%9B%87%E5%90%9E%E4%B8%8B1%E5%8F%AA%E9%B8%A1%E5%90%8E%E8%A2%AB%E5%8D%A1%E9%B8%A1%E7%AC%BC%23) `116.4K 🔥` `+26%`
1. [金像奖影后廖子妤 (Academy Award-winning Best Actress Liao Ziyu)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%90%8E%E5%BB%96%E5%AD%90%E5%A6%A4%23) `1.2M 🔥`
1. [150秒透视中国消费市场澎湃活力 (A 150-second insight into the surging vitality of China’s consumer market)](https://s.weibo.com/weibo?q=%23150%E7%A7%92%E9%80%8F%E8%A7%86%E4%B8%AD%E5%9B%BD%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%E6%BE%8E%E6%B9%83%E6%B4%BB%E5%8A%9B%23) `667.7K 🔥`
1. [本周做什么都顺的星座 (Zodiac signs that will go well with anything you do this week)](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `637.2K 🔥`
1. [酱园弄颗粒无收](https://s.weibo.com/weibo?q=%23%E9%85%B1%E5%9B%AD%E5%BC%84%E9%A2%97%E7%B2%92%E6%97%A0%E6%94%B6%23) `632.5K 🔥`
1. [陈赫晒鹿晗live图 (Chen He posted live pictures of Lu Han)](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E6%99%92%E9%B9%BF%E6%99%97live%E5%9B%BE%23) `373.5K 🔥`
1. [美军武力拦截伊朗货船](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%AD%A6%E5%8A%9B%E6%8B%A6%E6%88%AA%E4%BC%8A%E6%9C%97%E8%B4%A7%E8%88%B9%23) `347.3K 🔥`
1. [虞书欣父亲索赔17w败诉 (Yu Shuxin’s father lost the lawsuit claiming 17w)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%88%B6%E4%BA%B2%E7%B4%A2%E8%B5%9417w%E8%B4%A5%E8%AF%89%23) `337.6K 🔥`
1. [小米徐洁云喊话造谣者](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%BE%90%E6%B4%81%E4%BA%91%E5%96%8A%E8%AF%9D%E9%80%A0%E8%B0%A3%E8%80%85%23) `326.9K 🔥`
1. [一小时不到只花了六分钟](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B0%8F%E6%97%B6%E4%B8%8D%E5%88%B0%E5%8F%AA%E8%8A%B1%E4%BA%86%E5%85%AD%E5%88%86%E9%92%9F%23) `317.5K 🔥`
1. [薛之谦 李雨桐](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%20%E6%9D%8E%E9%9B%A8%E6%A1%90%23) `314.7K 🔥`
1. [金莎晒结婚五金 (Jinsha sun wedding hardware)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E6%99%92%E7%BB%93%E5%A9%9A%E4%BA%94%E9%87%91%23) `312.4K 🔥`
1. [刘宇宁收官哭了 (Liu Yuning cried at the end)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%94%B6%E5%AE%98%E5%93%AD%E4%BA%86%23) `148.9K 🔥`
1. [何润东健身是不想输给外国艺人](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%81%A5%E8%BA%AB%E6%98%AF%E4%B8%8D%E6%83%B3%E8%BE%93%E7%BB%99%E5%A4%96%E5%9B%BD%E8%89%BA%E4%BA%BA%23) `136.5K 🔥`
1. [东部战区舰艇编队过航横当水道](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E8%88%B0%E8%89%87%E7%BC%96%E9%98%9F%E8%BF%87%E8%88%AA%E6%A8%AA%E5%BD%93%E6%B0%B4%E9%81%93%23) `322.0K 🔥` `-58%`
1. [梁家辉5封金像奖影帝爆哭 (Tony Leung Ka Fai bursts into tears with 5 Academy Awards Best Actor)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%895%E5%B0%81%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%B8%9D%E7%88%86%E5%93%AD%23) `309.2K 🔥` `-53%`
1. [铁路12306已拒绝出票105.6万张 (Railway 12306 has refused to issue 1.056 million tickets)](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF12306%E5%B7%B2%E6%8B%92%E7%BB%9D%E5%87%BA%E7%A5%A8105.6%E4%B8%87%E5%BC%A0%23) `163.7K 🔥` `-45%`
1. [谢娜上张杰鸟巢演唱会小火车](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%B8%8A%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%B0%8F%E7%81%AB%E8%BD%A6%23) `163.6K 🔥` `-32%`

Updated at 2026-04-20 09:13:34

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
