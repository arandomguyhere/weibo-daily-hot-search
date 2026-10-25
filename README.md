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

1. [姆巴佩绝杀巴萨](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%BB%9D%E6%9D%80%E5%B7%B4%E8%90%A8%23) `939.2K 🔥` `NEW`
1. [巴萨1比2皇马](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A81%E6%AF%942%E7%9A%87%E9%A9%AC%23) `671.2K 🔥` `NEW`
1. [金牌闪耀赛场人生不惧残缺](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%89%8C%E9%97%AA%E8%80%80%E8%B5%9B%E5%9C%BA%E4%BA%BA%E7%94%9F%E4%B8%8D%E6%83%A7%E6%AE%8B%E7%BC%BA%23) `542.5K 🔥` `NEW`
1. [武契奇承认败选](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E6%89%BF%E8%AE%A4%E8%B4%A5%E9%80%89%23) `522.2K 🔥` `NEW`
1. [iG战胜HLE](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CHLE%23) `324.8K 🔥` `NEW`
1. [我国家庭规模持续缩小](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%AE%B6%E5%BA%AD%E8%A7%84%E6%A8%A1%E6%8C%81%E7%BB%AD%E7%BC%A9%E5%B0%8F%23) `222.3K 🔥` `NEW`
1. [湖人vs爵士](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BAvs%E7%88%B5%E5%A3%AB%23) `159.3K 🔥` `NEW`
1. [贝林厄姆脚后跟策动绝杀](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E8%84%9A%E5%90%8E%E8%B7%9F%E7%AD%96%E5%8A%A8%E7%BB%9D%E6%9D%80%23) `147.8K 🔥` `NEW`
1. [VOGUE绝色红毯](https://s.weibo.com/weibo?q=%23VOGUE%E7%BB%9D%E8%89%B2%E7%BA%A2%E6%AF%AF%23) `128.2K 🔥` `NEW`
1. [皇马2比1领先巴萨姆巴佩双响](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC2%E6%AF%941%E9%A2%86%E5%85%88%E5%B7%B4%E8%90%A8%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8F%8C%E5%93%8D%23) `118.5K 🔥` `NEW`
1. [中年失业冲法考做律师现实吗](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B9%B4%E5%A4%B1%E4%B8%9A%E5%86%B2%E6%B3%95%E8%80%83%E5%81%9A%E5%BE%8B%E5%B8%88%E7%8E%B0%E5%AE%9E%E5%90%97%23) `115.1K 🔥` `NEW`
1. [皇马取胜后距巴萨仅差3分](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E5%8F%96%E8%83%9C%E5%90%8E%E8%B7%9D%E5%B7%B4%E8%90%A8%E4%BB%85%E5%B7%AE3%E5%88%86%23) `113.0K 🔥` `NEW`
1. [美国客户一口气买了200套房](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AE%A2%E6%88%B7%E4%B8%80%E5%8F%A3%E6%B0%94%E4%B9%B0%E4%BA%86200%E5%A5%97%E6%88%BF%23) `111.9K 🔥` `NEW`
1. [巴西大选](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%A4%A7%E9%80%89%23) `106.0K 🔥` `NEW`
1. [亚锦赛日本3冠](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%94%A6%E8%B5%9B%E6%97%A5%E6%9C%AC3%E5%86%A0%23) `89.8K 🔥` `NEW`
1. [甲状腺癌50岁以下患者占65%](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E7%99%8C50%E5%B2%81%E4%BB%A5%E4%B8%8B%E6%82%A3%E8%80%85%E5%8D%A065%25%23) `88.4K 🔥` `NEW`
1. [男孩养大的狗被卖当场痛哭](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%85%BB%E5%A4%A7%E7%9A%84%E7%8B%97%E8%A2%AB%E5%8D%96%E5%BD%93%E5%9C%BA%E7%97%9B%E5%93%AD%23) `84.8K 🔥` `NEW`
1. [王多多谈iG与TES晋级](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%9A%E5%A4%9A%E8%B0%88iG%E4%B8%8ETES%E6%99%8B%E7%BA%A7%23) `82.8K 🔥` `NEW`
1. [MKOI DK](https://s.weibo.com/weibo?q=%23MKOI%20DK%23) `74.7K 🔥` `NEW`
1. [Smash世界赛首个五杀](https://s.weibo.com/weibo?q=%23Smash%E4%B8%96%E7%95%8C%E8%B5%9B%E9%A6%96%E4%B8%AA%E4%BA%94%E6%9D%80%23) `72.2K 🔥` `NEW`
1. [巴萨欧冠联赛两连败](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A8%E6%AC%A7%E5%86%A0%E8%81%94%E8%B5%9B%E4%B8%A4%E8%BF%9E%E8%B4%A5%23) `70.3K 🔥` `NEW`
1. [比亚迪腾势将持续加强闪充场站管理](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E8%85%BE%E5%8A%BF%E5%B0%86%E6%8C%81%E7%BB%AD%E5%8A%A0%E5%BC%BA%E9%97%AA%E5%85%85%E5%9C%BA%E7%AB%99%E7%AE%A1%E7%90%86%23) `67.0K 🔥` `NEW`
1. [iG与TES双双晋级2-1组](https://s.weibo.com/weibo?q=%23iG%E4%B8%8ETES%E5%8F%8C%E5%8F%8C%E6%99%8B%E7%BA%A72-1%E7%BB%84%23) `437.0K 🔥` `+82%`
1. [24岁女子赴泰见男网友被绑往边境](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E5%AD%90%E8%B5%B4%E6%B3%B0%E8%A7%81%E7%94%B7%E7%BD%91%E5%8F%8B%E8%A2%AB%E7%BB%91%E5%BE%80%E8%BE%B9%E5%A2%83%23) `403.3K 🔥` `+732%`
1. [被一株三角梅燃到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%B8%80%E6%A0%AA%E4%B8%89%E8%A7%92%E6%A2%85%E7%87%83%E5%88%B0%E4%BA%86%23) `161.9K 🔥` `+412%`
1. [黄子韬我结婚生子碍你事了吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%88%91%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%E7%A2%8D%E4%BD%A0%E4%BA%8B%E4%BA%86%E5%90%97%23) `161.5K 🔥` `+136%`
1. [张智霖与前女友许秋怡世纪合体](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%BA%E9%9C%96%E4%B8%8E%E5%89%8D%E5%A5%B3%E5%8F%8B%E8%AE%B8%E7%A7%8B%E6%80%A1%E4%B8%96%E7%BA%AA%E5%90%88%E4%BD%93%23) `160.3K 🔥` `+154%`
1. [强烈建议给家里老人用苹果手机](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E7%83%88%E5%BB%BA%E8%AE%AE%E7%BB%99%E5%AE%B6%E9%87%8C%E8%80%81%E4%BA%BA%E7%94%A8%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%23) `160.2K 🔥` `+407%`
1. [蔡康永依旧没有说一句我是中国人](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%E4%BE%9D%E6%97%A7%E6%B2%A1%E6%9C%89%E8%AF%B4%E4%B8%80%E5%8F%A5%E6%88%91%E6%98%AF%E4%B8%AD%E5%9B%BD%E4%BA%BA%23) `159.6K 🔥` `+157%`
1. [徐艺洋赶来安抚黄子韬的情绪](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E8%B5%B6%E6%9D%A5%E5%AE%89%E6%8A%9A%E9%BB%84%E5%AD%90%E9%9F%AC%E7%9A%84%E6%83%85%E7%BB%AA%23) `155.8K 🔥` `+217%`
1. [林俊杰杨幂 茉莉雨](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E6%9D%A8%E5%B9%82%20%E8%8C%89%E8%8E%89%E9%9B%A8%23) `150.3K 🔥` `+209%`
1. [不上班后发现上海才是最宜居的城市](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%B8%8A%E7%8F%AD%E5%90%8E%E5%8F%91%E7%8E%B0%E4%B8%8A%E6%B5%B7%E6%89%8D%E6%98%AF%E6%9C%80%E5%AE%9C%E5%B1%85%E7%9A%84%E5%9F%8E%E5%B8%82%23) `147.9K 🔥` `+275%`
1. [刘宇宁神级出场](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%A5%9E%E7%BA%A7%E5%87%BA%E5%9C%BA%23) `145.7K 🔥` `+242%`
1. [温瑞博袁励岑抗议颁奖放错国旗](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A%E8%A2%81%E5%8A%B1%E5%B2%91%E6%8A%97%E8%AE%AE%E9%A2%81%E5%A5%96%E6%94%BE%E9%94%99%E5%9B%BD%E6%97%97%23) `141.2K 🔥` `+392%`
1. [最封建的不是古代而是影视剧](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%B0%81%E5%BB%BA%E7%9A%84%E4%B8%8D%E6%98%AF%E5%8F%A4%E4%BB%A3%E8%80%8C%E6%98%AF%E5%BD%B1%E8%A7%86%E5%89%A7%23) `135.5K 🔥` `+187%`
1. [iG战胜HLE晋级2-1组](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CHLE%E6%99%8B%E7%BA%A72-1%E7%BB%84%23) `126.0K 🔥` `+75%`
1. [众解说看iG战胜HLE反应](https://s.weibo.com/weibo?q=%23%E4%BC%97%E8%A7%A3%E8%AF%B4%E7%9C%8BiG%E6%88%98%E8%83%9CHLE%E5%8F%8D%E5%BA%94%23) `111.6K 🔥` `+253%`
1. [Ning为iG鸣不平](https://s.weibo.com/weibo?q=%23Ning%E4%B8%BAiG%E9%B8%A3%E4%B8%8D%E5%B9%B3%23) `111.5K 🔥` `+253%`
1. [新剧开播没几天就限免](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%89%A7%E5%BC%80%E6%92%AD%E6%B2%A1%E5%87%A0%E5%A4%A9%E5%B0%B1%E9%99%90%E5%85%8D%23) `110.6K 🔥` `+279%`
1. [长期熬夜或是甲状腺癌诱因之一](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%86%AC%E5%A4%9C%E6%88%96%E6%98%AF%E7%94%B2%E7%8A%B6%E8%85%BA%E7%99%8C%E8%AF%B1%E5%9B%A0%E4%B9%8B%E4%B8%80%23) `96.7K 🔥` `+158%`
1. [做自媒体再也不怕被熟人刷到的方法](https://s.weibo.com/weibo?q=%23%E5%81%9A%E8%87%AA%E5%AA%92%E4%BD%93%E5%86%8D%E4%B9%9F%E4%B8%8D%E6%80%95%E8%A2%AB%E7%86%9F%E4%BA%BA%E5%88%B7%E5%88%B0%E7%9A%84%E6%96%B9%E6%B3%95%23) `95.2K 🔥` `+201%`
1. [白桃星座一周运势](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%E4%B8%80%E5%91%A8%E8%BF%90%E5%8A%BF%23) `85.3K 🔥` `+73%`
1. [这么大一勺居然一点没沾到瓶子](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B9%88%E5%A4%A7%E4%B8%80%E5%8B%BA%E5%B1%85%E7%84%B6%E4%B8%80%E7%82%B9%E6%B2%A1%E6%B2%BE%E5%88%B0%E7%93%B6%E5%AD%90%23) `68.9K 🔥` `+118%`
1. [TES战胜G2](https://s.weibo.com/weibo?q=%23TES%E6%88%98%E8%83%9CG2%23) `147.9K 🔥`
1. [众解说看TES战胜G2反应](https://s.weibo.com/weibo?q=%23%E4%BC%97%E8%A7%A3%E8%AF%B4%E7%9C%8BTES%E6%88%98%E8%83%9CG2%E5%8F%8D%E5%BA%94%23) `67.7K 🔥`
1. [杨幂给林俊杰伴舞](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%BB%99%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%BC%B4%E8%88%9E%23) `196.1K 🔥` `-49%`
1. [张杰家每天有22条腿在走路](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%AE%B6%E6%AF%8F%E5%A4%A9%E6%9C%8922%E6%9D%A1%E8%85%BF%E5%9C%A8%E8%B5%B0%E8%B7%AF%23) `90.9K 🔥` `-30%`
1. [张本智和逆转夺冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E9%80%86%E8%BD%AC%E5%A4%BA%E5%86%A0%23) `89.3K 🔥` `-72%`

Updated at 2026-10-26 07:43:54

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
