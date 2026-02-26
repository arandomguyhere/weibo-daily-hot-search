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

1. [考研成绩 (Postgraduate entrance examination results)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E6%88%90%E7%BB%A9%23) `1.1M 🔥` `NEW`
1. [美国从陈志案获利150亿美元](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BB%8E%E9%99%88%E5%BF%97%E6%A1%88%E8%8E%B7%E5%88%A9150%E4%BA%BF%E7%BE%8E%E5%85%83%23) `624.0K 🔥` `NEW`
1. [中国手机行业将迎来全面涨价](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%89%8B%E6%9C%BA%E8%A1%8C%E4%B8%9A%E5%B0%86%E8%BF%8E%E6%9D%A5%E5%85%A8%E9%9D%A2%E6%B6%A8%E4%BB%B7%23) `384.5K 🔥` `NEW`
1. [肖秀荣怒斥假消息影响考生心态](https://s.weibo.com/weibo?q=%23%E8%82%96%E7%A7%80%E8%8D%A3%E6%80%92%E6%96%A5%E5%81%87%E6%B6%88%E6%81%AF%E5%BD%B1%E5%93%8D%E8%80%83%E7%94%9F%E5%BF%83%E6%80%81%23) `258.3K 🔥` `NEW`
1. [平顶山打人夫妻有2个孩子](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E9%A1%B6%E5%B1%B1%E6%89%93%E4%BA%BA%E5%A4%AB%E5%A6%BB%E6%9C%892%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `256.6K 🔥` `NEW`
1. [上海迪士尼10岁生日](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%AA%E5%A3%AB%E5%B0%BC10%E5%B2%81%E7%94%9F%E6%97%A5%23) `243.9K 🔥` `NEW`
1. [孙千演技](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E6%BC%94%E6%8A%80%23) `240.5K 🔥` `NEW`
1. [中方投下弃权票是最大的担当](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E6%8A%95%E4%B8%8B%E5%BC%83%E6%9D%83%E7%A5%A8%E6%98%AF%E6%9C%80%E5%A4%A7%E7%9A%84%E6%8B%85%E5%BD%93%23) `221.9K 🔥` `NEW`
1. [一点点 资助](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E7%82%B9%20%E8%B5%84%E5%8A%A9%23) `215.2K 🔥` `NEW`
1. [时代峰峻否认王橹杰私联](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%90%A6%E8%AE%A4%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%A7%81%E8%81%94%23) `209.7K 🔥` `NEW`
1. [王骁生理性演技 (Wang Xiao's physiological acting skills)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%E7%94%9F%E7%90%86%E6%80%A7%E6%BC%94%E6%8A%80%23) `207.0K 🔥` `NEW`
1. [台湾女孩疑在日本街头被恶意撞倒](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%A5%B3%E5%AD%A9%E7%96%91%E5%9C%A8%E6%97%A5%E6%9C%AC%E8%A1%97%E5%A4%B4%E8%A2%AB%E6%81%B6%E6%84%8F%E6%92%9E%E5%80%92%23) `203.3K 🔥` `NEW`
1. [俄罗斯](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%23) `196.9K 🔥` `NEW`
1. [女子嘴角起泡未重视竟脑死亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%98%B4%E8%A7%92%E8%B5%B7%E6%B3%A1%E6%9C%AA%E9%87%8D%E8%A7%86%E7%AB%9F%E8%84%91%E6%AD%BB%E4%BA%A1%23) `194.2K 🔥` `NEW`
1. [陈飞宇 江忍](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%20%E6%B1%9F%E5%BF%8D%23) `182.0K 🔥` `NEW`
1. [杨幂柳智敏Prada撞衫](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9F%B3%E6%99%BA%E6%95%8FPrada%E6%92%9E%E8%A1%AB%23) `173.1K 🔥` `NEW`
1. [谷爱凌再次闪耀米兰时装周](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%8D%E6%AC%A1%E9%97%AA%E8%80%80%E7%B1%B3%E5%85%B0%E6%97%B6%E8%A3%85%E5%91%A8%23) `172.1K 🔥` `NEW`
1. [刘晓庆75岁再演少女](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%8675%E5%B2%81%E5%86%8D%E6%BC%94%E5%B0%91%E5%A5%B3%23) `168.4K 🔥` `NEW`
1. [周杰伦结婚田馥甄有了讽刺的情书](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%BB%93%E5%A9%9A%E7%94%B0%E9%A6%A5%E7%94%84%E6%9C%89%E4%BA%86%E8%AE%BD%E5%88%BA%E7%9A%84%E6%83%85%E4%B9%A6%23) `162.5K 🔥` `NEW`
1. [男子坐顺风车排泄后失联](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9D%90%E9%A1%BA%E9%A3%8E%E8%BD%A6%E6%8E%92%E6%B3%84%E5%90%8E%E5%A4%B1%E8%81%94%23) `161.3K 🔥` `NEW`
1. [男子2500万元买房10余年无法过户 (Man bought a house for 25 million yuan but couldn't transfer it for more than 10 years)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%902500%E4%B8%87%E5%85%83%E4%B9%B0%E6%88%BF10%E4%BD%99%E5%B9%B4%E6%97%A0%E6%B3%95%E8%BF%87%E6%88%B7%23) `144.7K 🔥` `NEW`
1. [研究证明八段锦真的能降血压](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E8%AF%81%E6%98%8E%E5%85%AB%E6%AE%B5%E9%94%A6%E7%9C%9F%E7%9A%84%E8%83%BD%E9%99%8D%E8%A1%80%E5%8E%8B%23) `142.9K 🔥` `NEW`
1. [王鹤棣乱入白鹿拍摄现场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E4%B9%B1%E5%85%A5%E7%99%BD%E9%B9%BF%E6%8B%8D%E6%91%84%E7%8E%B0%E5%9C%BA%23) `138.9K 🔥` `NEW`
1. [大存储手机或将暴涨2000元](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%98%E5%82%A8%E6%89%8B%E6%9C%BA%E6%88%96%E5%B0%86%E6%9A%B4%E6%B6%A82000%E5%85%83%23) `137.2K 🔥` `NEW`
1. [官方通报医生完不成创收指标被待岗](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8C%BB%E7%94%9F%E5%AE%8C%E4%B8%8D%E6%88%90%E5%88%9B%E6%94%B6%E6%8C%87%E6%A0%87%E8%A2%AB%E5%BE%85%E5%B2%97%23) `133.2K 🔥` `NEW`
1. [企业招聘限男性限已婚已育](https://s.weibo.com/weibo?q=%23%E4%BC%81%E4%B8%9A%E6%8B%9B%E8%81%98%E9%99%90%E7%94%B7%E6%80%A7%E9%99%90%E5%B7%B2%E5%A9%9A%E5%B7%B2%E8%82%B2%23) `129.4K 🔥` `NEW`
1. [教育局回应中学早5晚11超长作息表](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E4%B8%AD%E5%AD%A6%E6%97%A95%E6%99%9A11%E8%B6%85%E9%95%BF%E4%BD%9C%E6%81%AF%E8%A1%A8%23) `119.8K 🔥` `NEW`
1. [办公室牛肉饭节后长出15cm黑发](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%85%AC%E5%AE%A4%E7%89%9B%E8%82%89%E9%A5%AD%E8%8A%82%E5%90%8E%E9%95%BF%E5%87%BA15cm%E9%BB%91%E5%8F%91%23) `109.1K 🔥` `NEW`
1. [向佐说很爱弟弟向佑](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E8%AF%B4%E5%BE%88%E7%88%B1%E5%BC%9F%E5%BC%9F%E5%90%91%E4%BD%91%23) `106.1K 🔥` `NEW`
1. [女子被疑似粪便污物砸中](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%96%91%E4%BC%BC%E7%B2%AA%E4%BE%BF%E6%B1%A1%E7%89%A9%E7%A0%B8%E4%B8%AD%23) `102.5K 🔥` `NEW`
1. [内娱年代剧老辈子帅哥上新了 (Domestic entertainment period drama, the handsome old man is new)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%B9%B4%E4%BB%A3%E5%89%A7%E8%80%81%E8%BE%88%E5%AD%90%E5%B8%85%E5%93%A5%E4%B8%8A%E6%96%B0%E4%BA%86%23) `101.7K 🔥` `NEW`
1. [你又把什么放进梦想清单](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%8F%88%E6%8A%8A%E4%BB%80%E4%B9%88%E6%94%BE%E8%BF%9B%E6%A2%A6%E6%83%B3%E6%B8%85%E5%8D%95%23) `100.6K 🔥` `NEW`
1. [孙子带女友回家80岁奶奶激动扔菜拥抱](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E5%B8%A6%E5%A5%B3%E5%8F%8B%E5%9B%9E%E5%AE%B680%E5%B2%81%E5%A5%B6%E5%A5%B6%E6%BF%80%E5%8A%A8%E6%89%94%E8%8F%9C%E6%8B%A5%E6%8A%B1%23) `96.8K 🔥` `NEW`
1. [四六级查分入口](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%9F%A5%E5%88%86%E5%85%A5%E5%8F%A3%23) `94.7K 🔥` `NEW`
1. [爱泼斯坦案再升级](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%86%8D%E5%8D%87%E7%BA%A7%23) `88.1K 🔥` `NEW`
1. [年后耗糖快的动作](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%90%8E%E8%80%97%E7%B3%96%E5%BF%AB%E7%9A%84%E5%8A%A8%E4%BD%9C%23) `87.3K 🔥` `NEW`
1. [孩子转圈找爸爸时我也泪目了](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E8%BD%AC%E5%9C%88%E6%89%BE%E7%88%B8%E7%88%B8%E6%97%B6%E6%88%91%E4%B9%9F%E6%B3%AA%E7%9B%AE%E4%BA%86%23) `81.2K 🔥` `NEW`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `79.3K 🔥` `NEW`
1. [众多职业球员为孙颖莎行为点赞](https://s.weibo.com/weibo?q=%23%E4%BC%97%E5%A4%9A%E8%81%8C%E4%B8%9A%E7%90%83%E5%91%98%E4%B8%BA%E5%AD%99%E9%A2%96%E8%8E%8E%E8%A1%8C%E4%B8%BA%E7%82%B9%E8%B5%9E%23) `78.3K 🔥` `NEW`
1. [美伊对峙](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%AF%B9%E5%B3%99%23) `75.1K 🔥` `NEW`
1. [俄乌冲突 (Russia-Ukraine conflict)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B9%8C%E5%86%B2%E7%AA%81%23) `810.2K 🔥` `+377%`
1. [向华强拒绝和向佑见面](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%8D%8E%E5%BC%BA%E6%8B%92%E7%BB%9D%E5%92%8C%E5%90%91%E4%BD%91%E8%A7%81%E9%9D%A2%23) `154.0K 🔥`
1. [谷爱凌回怼美副总统](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E6%80%BC%E7%BE%8E%E5%89%AF%E6%80%BB%E7%BB%9F%23) `140.4K 🔥`
1. [晚5秒要付1700高速费当事人发声 (The person who is late for 5 seconds has to pay 1700 highway toll speaks out)](https://s.weibo.com/weibo?q=%23%E6%99%9A5%E7%A7%92%E8%A6%81%E4%BB%981700%E9%AB%98%E9%80%9F%E8%B4%B9%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `238.3K 🔥` `-79%`
1. [试管婴儿出生右脚缺4趾产检未发现 (Four toes on the right foot of a baby born from IVF were not found during prenatal examination)](https://s.weibo.com/weibo?q=%23%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%E5%87%BA%E7%94%9F%E5%8F%B3%E8%84%9A%E7%BC%BA4%E8%B6%BE%E4%BA%A7%E6%A3%80%E6%9C%AA%E5%8F%91%E7%8E%B0%23) `219.0K 🔥` `-43%`
1. [短剧从哪找来这么像的三张脸](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E4%BB%8E%E5%93%AA%E6%89%BE%E6%9D%A5%E8%BF%99%E4%B9%88%E5%83%8F%E7%9A%84%E4%B8%89%E5%BC%A0%E8%84%B8%23) `153.9K 🔥` `-62%`
1. [脸上有5种表现说明气血不足](https://s.weibo.com/weibo?q=%23%E8%84%B8%E4%B8%8A%E6%9C%895%E7%A7%8D%E8%A1%A8%E7%8E%B0%E8%AF%B4%E6%98%8E%E6%B0%94%E8%A1%80%E4%B8%8D%E8%B6%B3%23) `100.2K 🔥` `-31%`
1. [魅族 (Meizu)](https://s.weibo.com/weibo?q=%23%E9%AD%85%E6%97%8F%23) `93.0K 🔥` `-42%`
1. [财不入急门也不入脏门 (Wealth does not enter the urgent door, nor does it enter the dirty door.)](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E4%B8%8D%E5%85%A5%E6%80%A5%E9%97%A8%E4%B9%9F%E4%B8%8D%E5%85%A5%E8%84%8F%E9%97%A8%23) `84.6K 🔥` `-52%`
1. [田柾国直播](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9F%BE%E5%9B%BD%E7%9B%B4%E6%92%AD%23) `79.4K 🔥` `-35%`

Updated at 2026-02-26 11:31:35

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
