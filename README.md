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

1. [武汉癌症村需要真相不是敷衍 (Wuhan Cancer Village needs the truth, not perfunctory treatment)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E7%99%8C%E7%97%87%E6%9D%91%E9%9C%80%E8%A6%81%E7%9C%9F%E7%9B%B8%E4%B8%8D%E6%98%AF%E6%95%B7%E8%A1%8D%23) `1.3M 🔥` `NEW`
1. [文班亚马世界名画](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E4%B8%96%E7%95%8C%E5%90%8D%E7%94%BB%23) `1.0M 🔥` `NEW`
1. [网警侦破利用工作便利买卖公民个人信息案](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%AD%A6%E4%BE%A6%E7%A0%B4%E5%88%A9%E7%94%A8%E5%B7%A5%E4%BD%9C%E4%BE%BF%E5%88%A9%E4%B9%B0%E5%8D%96%E5%85%AC%E6%B0%91%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E6%A1%88%23) `842.3K 🔥` `NEW`
1. [五月份不要轻易离职](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%9C%88%E4%BB%BD%E4%B8%8D%E8%A6%81%E8%BD%BB%E6%98%93%E7%A6%BB%E8%81%8C%23) `835.2K 🔥` `NEW`
1. [奔跑吧发孟子义](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E5%8F%91%E5%AD%9F%E5%AD%90%E4%B9%89%23) `796.9K 🔥` `NEW`
1. [普京访华](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AE%BF%E5%8D%8E%23) `758.9K 🔥` `NEW`
1. [超会买指南](https://s.weibo.com/weibo?q=%23%E8%B6%85%E4%BC%9A%E4%B9%B0%E6%8C%87%E5%8D%97%23) `735.4K 🔥` `NEW`
1. [丁程鑫一天官宣两档综艺](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%80%E5%A4%A9%E5%AE%98%E5%AE%A3%E4%B8%A4%E6%A1%A3%E7%BB%BC%E8%89%BA%23) `724.8K 🔥` `NEW`
1. [给阿嬷的情书 先骗来演了再说](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E5%85%88%E9%AA%97%E6%9D%A5%E6%BC%94%E4%BA%86%E5%86%8D%E8%AF%B4%23) `660.3K 🔥` `NEW`
1. [拼豆已经进化成我拼不起的样子了](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E8%B1%86%E5%B7%B2%E7%BB%8F%E8%BF%9B%E5%8C%96%E6%88%90%E6%88%91%E6%8B%BC%E4%B8%8D%E8%B5%B7%E7%9A%84%E6%A0%B7%E5%AD%90%E4%BA%86%23) `655.9K 🔥` `NEW`
1. [尚界汽车报案 (Shangjie Auto Report)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8C%E6%B1%BD%E8%BD%A6%E6%8A%A5%E6%A1%88%23) `549.5K 🔥` `NEW`
1. [跑男 加塞](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%20%E5%8A%A0%E5%A1%9E%23) `547.1K 🔥` `NEW`
1. [徐若晗没有理方媛](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E6%B2%A1%E6%9C%89%E7%90%86%E6%96%B9%E5%AA%9B%23) `547.0K 🔥` `NEW`
1. [人果然对吃都是有执念的](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%9E%9C%E7%84%B6%E5%AF%B9%E5%90%83%E9%83%BD%E6%98%AF%E6%9C%89%E6%89%A7%E5%BF%B5%E7%9A%84%23) `528.5K 🔥` `NEW`
1. [第一次见给手机放双休的人](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E7%BB%99%E6%89%8B%E6%9C%BA%E6%94%BE%E5%8F%8C%E4%BC%91%E7%9A%84%E4%BA%BA%23) `493.0K 🔥` `NEW`
1. [用婴儿形象玩具擦边让人不寒而栗](https://s.weibo.com/weibo?q=%23%E7%94%A8%E5%A9%B4%E5%84%BF%E5%BD%A2%E8%B1%A1%E7%8E%A9%E5%85%B7%E6%93%A6%E8%BE%B9%E8%AE%A9%E4%BA%BA%E4%B8%8D%E5%AF%92%E8%80%8C%E6%A0%97%23) `485.9K 🔥` `NEW`
1. [文班亚马超远三分](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E8%B6%85%E8%BF%9C%E4%B8%89%E5%88%86%23) `479.6K 🔥` `NEW`
1. [白鹿腿一瘸一拐走机场](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%85%BF%E4%B8%80%E7%98%B8%E4%B8%80%E6%8B%90%E8%B5%B0%E6%9C%BA%E5%9C%BA%23) `457.3K 🔥` `NEW`
1. [多方祝贺小米YU7GT新纪录](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E7%A5%9D%E8%B4%BA%E5%B0%8F%E7%B1%B3YU7GT%E6%96%B0%E7%BA%AA%E5%BD%95%23) `455.8K 🔥` `NEW`
1. [英国大学表白墙发布歧视中国人言论](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%A4%A7%E5%AD%A6%E8%A1%A8%E7%99%BD%E5%A2%99%E5%8F%91%E5%B8%83%E6%AD%A7%E8%A7%86%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%A8%80%E8%AE%BA%23) `453.9K 🔥` `NEW`
1. [警方通报驾校招生宣称文盲包过 (Police report that driving school admissions claims that illiteracy will pass)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E9%A9%BE%E6%A0%A1%E6%8B%9B%E7%94%9F%E5%AE%A3%E7%A7%B0%E6%96%87%E7%9B%B2%E5%8C%85%E8%BF%87%23) `451.1K 🔥` `NEW`
1. [林俊杰现身七七毕业典礼](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E7%8E%B0%E8%BA%AB%E4%B8%83%E4%B8%83%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%23) `448.6K 🔥` `NEW`
1. [减肥咖啡查出违禁成分17名宝妈获刑](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E5%92%96%E5%95%A1%E6%9F%A5%E5%87%BA%E8%BF%9D%E7%A6%81%E6%88%90%E5%88%8617%E5%90%8D%E5%AE%9D%E5%A6%88%E8%8E%B7%E5%88%91%23) `447.9K 🔥` `NEW`
1. [怦然七轩CP官宣](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E4%B8%83%E8%BD%A9CP%E5%AE%98%E5%AE%A3%23) `443.8K 🔥` `NEW`
1. [印度2只大象河边打斗一女子被砸死](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A62%E5%8F%AA%E5%A4%A7%E8%B1%A1%E6%B2%B3%E8%BE%B9%E6%89%93%E6%96%97%E4%B8%80%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%A0%B8%E6%AD%BB%23) `442.3K 🔥` `NEW`
1. [AI的告白](https://s.weibo.com/weibo?q=%23AI%E7%9A%84%E5%91%8A%E7%99%BD%23) `439.4K 🔥` `NEW`
1. [李冰冰说来生绝不和妹妹一起工作](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%86%B0%E5%86%B0%E8%AF%B4%E6%9D%A5%E7%94%9F%E7%BB%9D%E4%B8%8D%E5%92%8C%E5%A6%B9%E5%A6%B9%E4%B8%80%E8%B5%B7%E5%B7%A5%E4%BD%9C%23) `436.4K 🔥` `NEW`
1. [女子亲宝宝脚丫嘴唇肿成香肠](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%B2%E5%AE%9D%E5%AE%9D%E8%84%9A%E4%B8%AB%E5%98%B4%E5%94%87%E8%82%BF%E6%88%90%E9%A6%99%E8%82%A0%23) `433.8K 🔥` `NEW`
1. [毛巾少爷道歉](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%B7%BE%E5%B0%91%E7%88%B7%E9%81%93%E6%AD%89%23) `431.2K 🔥` `NEW`
1. [怦然心动20岁](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%23) `428.6K 🔥` `NEW`
1. [生理假 (menstrual leave)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E5%81%87%23) `425.8K 🔥` `NEW`
1. [家养1.2万只蚕宝宝养到想报警](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%85%BB1.2%E4%B8%87%E5%8F%AA%E8%9A%95%E5%AE%9D%E5%AE%9D%E5%85%BB%E5%88%B0%E6%83%B3%E6%8A%A5%E8%AD%A6%23) `422.7K 🔥` `NEW`
1. [刘宇宁丁程鑫体型差](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%B8%81%E7%A8%8B%E9%91%AB%E4%BD%93%E5%9E%8B%E5%B7%AE%23) `419.0K 🔥` `NEW`
1. [儿子想做蚕丝被家人网购1万粒蚕卵](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E6%83%B3%E5%81%9A%E8%9A%95%E4%B8%9D%E8%A2%AB%E5%AE%B6%E4%BA%BA%E7%BD%91%E8%B4%AD1%E4%B8%87%E7%B2%92%E8%9A%95%E5%8D%B5%23) `416.3K 🔥` `NEW`
1. [七月小轩亲了](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%9C%88%E5%B0%8F%E8%BD%A9%E4%BA%B2%E4%BA%86%23) `415.7K 🔥` `NEW`
1. [倪萍三观](https://s.weibo.com/weibo?q=%23%E5%80%AA%E8%90%8D%E4%B8%89%E8%A7%82%23) `413.2K 🔥` `NEW`
1. [向鹏回应缺席美国大满贯](https://s.weibo.com/weibo?q=%23%E5%90%91%E9%B9%8F%E5%9B%9E%E5%BA%94%E7%BC%BA%E5%B8%AD%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%23) `411.4K 🔥` `NEW`
1. [开推4官宣阵容](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8E%A84%E5%AE%98%E5%AE%A3%E9%98%B5%E5%AE%B9%23) `408.1K 🔥` `NEW`
1. [孙杨的执着让马頔和伊能静都没招了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E7%9A%84%E6%89%A7%E7%9D%80%E8%AE%A9%E9%A9%AC%E9%A0%94%E5%92%8C%E4%BC%8A%E8%83%BD%E9%9D%99%E9%83%BD%E6%B2%A1%E6%8B%9B%E4%BA%86%23) `406.0K 🔥` `NEW`
1. [女子随手扔筷子戳穿对面男子眼镜](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9A%8F%E6%89%8B%E6%89%94%E7%AD%B7%E5%AD%90%E6%88%B3%E7%A9%BF%E5%AF%B9%E9%9D%A2%E7%94%B7%E5%AD%90%E7%9C%BC%E9%95%9C%23) `402.8K 🔥` `NEW`
1. [中国人中国车创纽北新纪录 (Chinese car sets new record in New York)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%B8%AD%E5%9B%BD%E8%BD%A6%E5%88%9B%E7%BA%BD%E5%8C%97%E6%96%B0%E7%BA%AA%E5%BD%95%23) `398.6K 🔥` `NEW`
1. [武汉调查一村庄585人62人患癌](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E8%B0%83%E6%9F%A5%E4%B8%80%E6%9D%91%E5%BA%84585%E4%BA%BA62%E4%BA%BA%E6%82%A3%E7%99%8C%23) `397.5K 🔥` `NEW`
1. [女子发现丈夫出轨侦探式取证](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A8%E4%BE%A6%E6%8E%A2%E5%BC%8F%E5%8F%96%E8%AF%81%23) `394.6K 🔥` `NEW`
1. [郭宇欣张翅婚礼路透](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E5%BC%A0%E7%BF%85%E5%A9%9A%E7%A4%BC%E8%B7%AF%E9%80%8F%23) `392.8K 🔥` `NEW`
1. [原相机素颜的女明星们](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%9B%B8%E6%9C%BA%E7%B4%A0%E9%A2%9C%E7%9A%84%E5%A5%B3%E6%98%8E%E6%98%9F%E4%BB%AC%23) `389.8K 🔥` `NEW`
1. [非洲暴发埃博拉疫情](https://s.weibo.com/weibo?q=%23%E9%9D%9E%E6%B4%B2%E6%9A%B4%E5%8F%91%E5%9F%83%E5%8D%9A%E6%8B%89%E7%96%AB%E6%83%85%23) `387.0K 🔥` `NEW`
1. [郭富城拎土特产和方媛回香港](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E6%8B%8E%E5%9C%9F%E7%89%B9%E4%BA%A7%E5%92%8C%E6%96%B9%E5%AA%9B%E5%9B%9E%E9%A6%99%E6%B8%AF%23) `384.9K 🔥` `NEW`
1. [文班亚马41分24篮板](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC41%E5%88%8624%E7%AF%AE%E6%9D%BF%23) `383.0K 🔥` `NEW`
1. [NBA季后赛 (NBA playoffs)](https://s.weibo.com/weibo?q=%23NBA%E5%AD%A3%E5%90%8E%E8%B5%9B%23) `838.7K 🔥` `+236%`
1. [周杰伦昆凌大女儿长这么大了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%98%86%E5%87%8C%E5%A4%A7%E5%A5%B3%E5%84%BF%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `438.2K 🔥` `+100%`
1. [医保个账新规来了 (New rules for medical insurance accounts are coming)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E4%B8%AA%E8%B4%A6%E6%96%B0%E8%A7%84%E6%9D%A5%E4%BA%86%23) `425.2K 🔥` `-78%`
1. [倪萍让给阿嬷的情书男女主别乱接片](https://s.weibo.com/weibo?q=%23%E5%80%AA%E8%90%8D%E8%AE%A9%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%94%B7%E5%A5%B3%E4%B8%BB%E5%88%AB%E4%B9%B1%E6%8E%A5%E7%89%87%23) `400.7K 🔥` `-56%`

Updated at 2026-05-19 13:57:00

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
