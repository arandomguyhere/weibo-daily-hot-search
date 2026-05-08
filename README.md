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

1. [五一消费潜力充分释放 (May Day consumption potential fully unleashed)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E6%B6%88%E8%B4%B9%E6%BD%9C%E5%8A%9B%E5%85%85%E5%88%86%E9%87%8A%E6%94%BE%23) `1.7M 🔥` `NEW`
1. [林诗栋vs张禹珍](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8Bvs%E5%BC%A0%E7%A6%B9%E7%8F%8D%23) `1.7M 🔥` `NEW`
1. [央视首次转播樊振东欧冠联赛](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E9%A6%96%E6%AC%A1%E8%BD%AC%E6%92%AD%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AC%A7%E5%86%A0%E8%81%94%E8%B5%9B%23) `1.1M 🔥` `NEW`
1. [汪苏泷明日世界巡回演唱会](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%98%8E%E6%97%A5%E4%B8%96%E7%95%8C%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `1.1M 🔥` `NEW`
1. [网传浪姐四公分组](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC%E5%88%86%E7%BB%84%23) `984.1K 🔥` `NEW`
1. [猫帮我提了离职](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%B8%AE%E6%88%91%E6%8F%90%E4%BA%86%E7%A6%BB%E8%81%8C%23) `722.0K 🔥` `NEW`
1. [70%卵巢癌患者确诊时已是晚期](https://s.weibo.com/weibo?q=%2370%25%E5%8D%B5%E5%B7%A2%E7%99%8C%E6%82%A3%E8%80%85%E7%A1%AE%E8%AF%8A%E6%97%B6%E5%B7%B2%E6%98%AF%E6%99%9A%E6%9C%9F%23) `686.4K 🔥` `NEW`
1. [印度学霸改成绩单被父亲电锯割喉](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%AD%A6%E9%9C%B8%E6%94%B9%E6%88%90%E7%BB%A9%E5%8D%95%E8%A2%AB%E7%88%B6%E4%BA%B2%E7%94%B5%E9%94%AF%E5%89%B2%E5%96%89%23) `627.0K 🔥` `NEW`
1. [换乘恋爱4 抓马](https://s.weibo.com/weibo?q=%23%E6%8D%A2%E4%B9%98%E6%81%8B%E7%88%B14%20%E6%8A%93%E9%A9%AC%23) `545.9K 🔥` `NEW`
1. [关晓彤 姐姐太没用了](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%20%E5%A7%90%E5%A7%90%E5%A4%AA%E6%B2%A1%E7%94%A8%E4%BA%86%23) `474.8K 🔥` `NEW`
1. [国务院成立浏阳烟花爆炸事故调查组 (The State Council sets up Liuyang Fireworks Explosion Accident Investigation Team)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8A%A1%E9%99%A2%E6%88%90%E7%AB%8B%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E7%88%86%E7%82%B8%E4%BA%8B%E6%95%85%E8%B0%83%E6%9F%A5%E7%BB%84%23) `405.2K 🔥` `NEW`
1. [裴秀智林允儿红毯撞衫](https://s.weibo.com/weibo?q=%23%E8%A3%B4%E7%A7%80%E6%99%BA%E6%9E%97%E5%85%81%E5%84%BF%E7%BA%A2%E6%AF%AF%E6%92%9E%E8%A1%AB%23) `355.7K 🔥` `NEW`
1. [世乒赛](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B9%92%E8%B5%9B%23) `313.2K 🔥` `NEW`
1. [迪奥Cigale手袋她的520首选](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A5%A5Cigale%E6%89%8B%E8%A2%8B%E5%A5%B9%E7%9A%84520%E9%A6%96%E9%80%89%23) `221.3K 🔥` `NEW`
1. [国乒男团变阵](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%8F%98%E9%98%B5%23) `221.2K 🔥` `NEW`
1. [再有消息就是要结婚了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E6%9C%89%E6%B6%88%E6%81%AF%E5%B0%B1%E6%98%AF%E8%A6%81%E7%BB%93%E5%A9%9A%E4%BA%86%23) `191.4K 🔥` `NEW`
1. [4只皮皮虾1035元消费者删评销号](https://s.weibo.com/weibo?q=%234%E5%8F%AA%E7%9A%AE%E7%9A%AE%E8%99%BE1035%E5%85%83%E6%B6%88%E8%B4%B9%E8%80%85%E5%88%A0%E8%AF%84%E9%94%80%E5%8F%B7%23) `179.2K 🔥` `NEW`
1. [原神前瞻](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%E5%89%8D%E7%9E%BB%23) `154.9K 🔥` `NEW`
1. [桃花坞初见面再现尴尬9分钟](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E%E5%88%9D%E8%A7%81%E9%9D%A2%E5%86%8D%E7%8E%B0%E5%B0%B4%E5%B0%AC9%E5%88%86%E9%92%9F%23) `147.3K 🔥` `NEW`
1. [国家继续出手调控油价](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%BB%A7%E7%BB%AD%E5%87%BA%E6%89%8B%E8%B0%83%E6%8E%A7%E6%B2%B9%E4%BB%B7%23) `143.0K 🔥` `NEW`
1. [王楚钦8比11吴晙诚 (Wang Chuqin 8 to 11 Wu Changcheng)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A68%E6%AF%9411%E5%90%B4%E6%99%99%E8%AF%9A%23) `142.4K 🔥` `NEW`
1. [增距镜成为韩国人必买中国特产](https://s.weibo.com/weibo?q=%23%E5%A2%9E%E8%B7%9D%E9%95%9C%E6%88%90%E4%B8%BA%E9%9F%A9%E5%9B%BD%E4%BA%BA%E5%BF%85%E4%B9%B0%E4%B8%AD%E5%9B%BD%E7%89%B9%E4%BA%A7%23) `130.6K 🔥` `NEW`
1. [王楚钦vs吴晙诚](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%90%B4%E6%99%99%E8%AF%9A%23) `2.1M 🔥` `+387%`
1. [中国男团vs韩国 (Chinese men's team vs. South Korea)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2vs%E9%9F%A9%E5%9B%BD%23) `1.8M 🔥` `+500%`
1. [赢家 田曦薇](https://s.weibo.com/weibo?q=%23%E8%B5%A2%E5%AE%B6%20%E7%94%B0%E6%9B%A6%E8%96%87%23) `945.2K 🔥` `+149%`
1. [刚出锅的洞洞鞋](https://s.weibo.com/weibo?q=%23%E5%88%9A%E5%87%BA%E9%94%85%E7%9A%84%E6%B4%9E%E6%B4%9E%E9%9E%8B%23) `807.6K 🔥` `+189%`
1. [向太不满向佑恋情称绝不认这种儿媳](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E4%B8%8D%E6%BB%A1%E5%90%91%E4%BD%91%E6%81%8B%E6%83%85%E7%A7%B0%E7%BB%9D%E4%B8%8D%E8%AE%A4%E8%BF%99%E7%A7%8D%E5%84%BF%E5%AA%B3%23) `712.4K 🔥` `+73%`
1. [小米18系列或成最激进一代](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318%E7%B3%BB%E5%88%97%E6%88%96%E6%88%90%E6%9C%80%E6%BF%80%E8%BF%9B%E4%B8%80%E4%BB%A3%23) `369.4K 🔥` `+21%`
1. [汉坦病毒 (hantavirus)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%23) `368.5K 🔥` `+21%`
1. [TOP吃饭用盆装菜](https://s.weibo.com/weibo?q=%23TOP%E5%90%83%E9%A5%AD%E7%94%A8%E7%9B%86%E8%A3%85%E8%8F%9C%23) `401.5K 🔥`
1. [百想艺术大赏](https://s.weibo.com/weibo?q=%23%E7%99%BE%E6%83%B3%E8%89%BA%E6%9C%AF%E5%A4%A7%E8%B5%8F%23) `223.5K 🔥`
1. [OPPO回应母亲节文案争议 (OPPO responds to Mother’s Day copywriting controversy)](https://s.weibo.com/weibo?q=%23OPPO%E5%9B%9E%E5%BA%94%E6%AF%8D%E4%BA%B2%E8%8A%82%E6%96%87%E6%A1%88%E4%BA%89%E8%AE%AE%23) `221.3K 🔥`
1. [新娘的陪嫁是一对龙凤胎 (The bride's dowry is a pair of twins)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%9A%84%E9%99%AA%E5%AB%81%E6%98%AF%E4%B8%80%E5%AF%B9%E9%BE%99%E5%87%A4%E8%83%8E%23) `218.2K 🔥`
1. [这老师已经不属于桃李满天下了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%80%81%E5%B8%88%E5%B7%B2%E7%BB%8F%E4%B8%8D%E5%B1%9E%E4%BA%8E%E6%A1%83%E6%9D%8E%E6%BB%A1%E5%A4%A9%E4%B8%8B%E4%BA%86%23) `192.6K 🔥`
1. [宋亚轩初中校运会旧照 (Old photos of Song Yaxuan at the school sports meeting of junior high school)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%88%9D%E4%B8%AD%E6%A0%A1%E8%BF%90%E4%BC%9A%E6%97%A7%E7%85%A7%23) `187.2K 🔥`
1. [戛纳电影节华语艺人出席名单](https://s.weibo.com/weibo?q=%23%E6%88%9B%E7%BA%B3%E7%94%B5%E5%BD%B1%E8%8A%82%E5%8D%8E%E8%AF%AD%E8%89%BA%E4%BA%BA%E5%87%BA%E5%B8%AD%E5%90%8D%E5%8D%95%23) `154.8K 🔥`
1. [榴莲仅退款买家被行拘](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `1.2M 🔥` `-29%`
1. [湖南卫视综艺本周停播](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E7%BB%BC%E8%89%BA%E6%9C%AC%E5%91%A8%E5%81%9C%E6%92%AD%23) `403.7K 🔥` `-35%`
1. [中国男团vs韩国对阵名单](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2vs%E9%9F%A9%E5%9B%BD%E5%AF%B9%E9%98%B5%E5%90%8D%E5%8D%95%23) `399.1K 🔥` `-48%`
1. [榴莲仅退款商家拒绝调解](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E5%95%86%E5%AE%B6%E6%8B%92%E7%BB%9D%E8%B0%83%E8%A7%A3%23) `307.0K 🔥` `-36%`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `302.8K 🔥` `-59%`
1. [汪海林限高](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B5%B7%E6%9E%97%E9%99%90%E9%AB%98%23) `264.4K 🔥` `-30%`
1. [台湾出现汉坦病毒致死病例](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%87%BA%E7%8E%B0%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E8%87%B4%E6%AD%BB%E7%97%85%E4%BE%8B%23) `224.7K 🔥` `-26%`
1. [许昕为世乒赛开场](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E4%B8%BA%E4%B8%96%E4%B9%92%E8%B5%9B%E5%BC%80%E5%9C%BA%23) `204.8K 🔥` `-56%`
1. [外网把中国视频偷给日本成常态 (It has become normal for external networks to steal Chinese videos to Japan)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E6%8A%8A%E4%B8%AD%E5%9B%BD%E8%A7%86%E9%A2%91%E5%81%B7%E7%BB%99%E6%97%A5%E6%9C%AC%E6%88%90%E5%B8%B8%E6%80%81%23) `203.0K 🔥` `-35%`
1. [工作后大家的朋友圈都变了 (After work, everyone’s circle of friends has changed.)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E5%A4%A7%E5%AE%B6%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%83%BD%E5%8F%98%E4%BA%86%23) `196.5K 🔥` `-48%`
1. [男生感染HPV身体会怎样 (What will happen if a boy is infected with HPV?)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%84%9F%E6%9F%93HPV%E8%BA%AB%E4%BD%93%E4%BC%9A%E6%80%8E%E6%A0%B7%23) `172.0K 🔥` `-42%`
1. [央视或低价拿下世界杯转播权 (CCTV may win the World Cup broadcasting rights at a low price)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%88%96%E4%BD%8E%E4%BB%B7%E6%8B%BF%E4%B8%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `170.0K 🔥` `-43%`
1. [陆克华受贿1.89亿余元 (Lu Kehua accepted more than 189 million yuan in bribes)](https://s.weibo.com/weibo?q=%23%E9%99%86%E5%85%8B%E5%8D%8E%E5%8F%97%E8%B4%BF1.89%E4%BA%BF%E4%BD%99%E5%85%83%23) `162.4K 🔥` `-82%`
1. [曝时代少年团新企划](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%96%B0%E4%BC%81%E5%88%92%23) `139.9K 🔥` `-27%`

Updated at 2026-05-08 21:01:08

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
