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

1. [哪吒2票房升至全球第4 (Ne Zha 2 box office rises to 4th in the world)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%922%E7%A5%A8%E6%88%BF%E5%8D%87%E8%87%B3%E5%85%A8%E7%90%83%E7%AC%AC4%23) `1.1M 🔥` `NEW`
1. [B站官宣暂停广告](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E5%AE%98%E5%AE%A3%E6%9A%82%E5%81%9C%E5%B9%BF%E5%91%8A%23) `798.5K 🔥` `NEW`
1. [麻辣烫里最拉的菜](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E7%83%AB%E9%87%8C%E6%9C%80%E6%8B%89%E7%9A%84%E8%8F%9C%23) `683.5K 🔥` `NEW`
1. [跟着白鹿住必住](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E7%99%BD%E9%B9%BF%E4%BD%8F%E5%BF%85%E4%BD%8F%23) `537.4K 🔥` `NEW`
1. [伊朗拉万炼油厂发生爆炸](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8B%89%E4%B8%87%E7%82%BC%E6%B2%B9%E5%8E%82%E5%8F%91%E7%94%9F%E7%88%86%E7%82%B8%23) `370.5K 🔥` `NEW`
1. [鹿晗任敏认识十一年了](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%BB%BB%E6%95%8F%E8%AE%A4%E8%AF%86%E5%8D%81%E4%B8%80%E5%B9%B4%E4%BA%86%23) `368.0K 🔥` `NEW`
1. [十日终焉官微 用户1231](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%AE%98%E5%BE%AE%20%E7%94%A8%E6%88%B71231%23) `181.0K 🔥` `NEW`
1. [国资委成立境外国资工作局](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B5%84%E5%A7%94%E6%88%90%E7%AB%8B%E5%A2%83%E5%A4%96%E5%9B%BD%E8%B5%84%E5%B7%A5%E4%BD%9C%E5%B1%80%23) `151.7K 🔥` `NEW`
1. [拼多多为何西藏买垃圾袋也能包邮](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E4%B8%BA%E4%BD%95%E8%A5%BF%E8%97%8F%E4%B9%B0%E5%9E%83%E5%9C%BE%E8%A2%8B%E4%B9%9F%E8%83%BD%E5%8C%85%E9%82%AE%23) `149.2K 🔥` `NEW`
1. [伊朗议长将率团与美国谈判](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AE%AE%E9%95%BF%E5%B0%86%E7%8E%87%E5%9B%A2%E4%B8%8E%E7%BE%8E%E5%9B%BD%E8%B0%88%E5%88%A4%23) `147.0K 🔥` `NEW`
1. [海关证实网红汤普森护肝片成分虚标 (Customs confirmed that the ingredients of Internet celebrity Thompson’s Liver Protection Tablets were falsely labeled)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%85%B3%E8%AF%81%E5%AE%9E%E7%BD%91%E7%BA%A2%E6%B1%A4%E6%99%AE%E6%A3%AE%E6%8A%A4%E8%82%9D%E7%89%87%E6%88%90%E5%88%86%E8%99%9A%E6%A0%87%23) `144.3K 🔥` `NEW`
1. [小米官宣6款充电宝新品](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%AE%98%E5%AE%A36%E6%AC%BE%E5%85%85%E7%94%B5%E5%AE%9D%E6%96%B0%E5%93%81%23) `135.1K 🔥` `NEW`
1. [金虔佑暂停活动](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%99%94%E4%BD%91%E6%9A%82%E5%81%9C%E6%B4%BB%E5%8A%A8%23) `134.5K 🔥` `NEW`
1. [老爸过生日人脉硬到一个个不吱声](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E8%BF%87%E7%94%9F%E6%97%A5%E4%BA%BA%E8%84%89%E7%A1%AC%E5%88%B0%E4%B8%80%E4%B8%AA%E4%B8%AA%E4%B8%8D%E5%90%B1%E5%A3%B0%23) `119.3K 🔥` `NEW`
1. [电费刺客找到了](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%B4%B9%E5%88%BA%E5%AE%A2%E6%89%BE%E5%88%B0%E4%BA%86%23) `119.1K 🔥` `NEW`
1. [ALD1 七人团](https://s.weibo.com/weibo?q=%23ALD1%20%E4%B8%83%E4%BA%BA%E5%9B%A2%23) `115.5K 🔥` `NEW`
1. [河北省考成绩](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E7%9C%81%E8%80%83%E6%88%90%E7%BB%A9%23) `110.8K 🔥` `NEW`
1. [原来焦虑症是这么来的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%84%A6%E8%99%91%E7%97%87%E6%98%AF%E8%BF%99%E4%B9%88%E6%9D%A5%E7%9A%84%23) `109.3K 🔥` `NEW`
1. [李羲承改活动名](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E6%94%B9%E6%B4%BB%E5%8A%A8%E5%90%8D%23) `106.0K 🔥` `NEW`
1. [YouTube现90秒不可跳过广告](https://s.weibo.com/weibo?q=%23YouTube%E7%8E%B090%E7%A7%92%E4%B8%8D%E5%8F%AF%E8%B7%B3%E8%BF%87%E5%B9%BF%E5%91%8A%23) `98.1K 🔥` `NEW`
1. [喜人真来桃花坞团建了 (Xiren really came to Taohuawu for team building)](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%BA%BA%E7%9C%9F%E6%9D%A5%E6%A1%83%E8%8A%B1%E5%9D%9E%E5%9B%A2%E5%BB%BA%E4%BA%86%23) `87.1K 🔥` `NEW`
1. [美国袭击伊朗哈尔克岛上50余个军事目标](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E5%93%88%E5%B0%94%E5%85%8B%E5%B2%9B%E4%B8%8A50%E4%BD%99%E4%B8%AA%E5%86%9B%E4%BA%8B%E7%9B%AE%E6%A0%87%23) `85.6K 🔥` `NEW`
1. [大熊猫家美大崽去世](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%AE%B6%E7%BE%8E%E5%A4%A7%E5%B4%BD%E5%8E%BB%E4%B8%96%23) `85.4K 🔥` `NEW`
1. [十日终焉动了](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%8A%A8%E4%BA%86%23) `84.4K 🔥` `NEW`
1. [TF四代一班不会以演员身份出道](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%B8%80%E7%8F%AD%E4%B8%8D%E4%BC%9A%E4%BB%A5%E6%BC%94%E5%91%98%E8%BA%AB%E4%BB%BD%E5%87%BA%E9%81%93%23) `77.0K 🔥` `NEW`
1. [金价反复闪崩有人巨亏](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%8F%8D%E5%A4%8D%E9%97%AA%E5%B4%A9%E6%9C%89%E4%BA%BA%E5%B7%A8%E4%BA%8F%23) `75.2K 🔥` `NEW`
1. [物业大撤退](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E5%A4%A7%E6%92%A4%E9%80%80%23) `725.9K 🔥` `+91%`
1. [婚前房产婚后加名离婚时能对半分吗](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%89%8D%E6%88%BF%E4%BA%A7%E5%A9%9A%E5%90%8E%E5%8A%A0%E5%90%8D%E7%A6%BB%E5%A9%9A%E6%97%B6%E8%83%BD%E5%AF%B9%E5%8D%8A%E5%88%86%E5%90%97%23) `282.7K 🔥` `+45%`
1. [低血糖假性饥饿](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E8%A1%80%E7%B3%96%E5%81%87%E6%80%A7%E9%A5%A5%E9%A5%BF%23) `234.2K 🔥` `+102%`
1. [美国杀人分尸19岁少年专杀性犯罪者 (19-year-old boy in the US kills and dismembers sex offenders)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9D%80%E4%BA%BA%E5%88%86%E5%B0%B819%E5%B2%81%E5%B0%91%E5%B9%B4%E4%B8%93%E6%9D%80%E6%80%A7%E7%8A%AF%E7%BD%AA%E8%80%85%23) `223.0K 🔥` `+86%`
1. [以军宣布暂停打击伊朗](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%AE%A3%E5%B8%83%E6%9A%82%E5%81%9C%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%23) `109.9K 🔥` `+31%`
1. [春假撞怀清明春日消费火力全开 (Spring break makes me pregnant during Qingming Festival, and spring consumption is on full swing)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%81%87%E6%92%9E%E6%80%80%E6%B8%85%E6%98%8E%E6%98%A5%E6%97%A5%E6%B6%88%E8%B4%B9%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80%23) `726.3K 🔥`
1. [十日终焉 (End of ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `140.5K 🔥`
1. [女子孕期得知丈夫出轨20余人 (Woman learns her husband cheated on more than 20 people during pregnancy)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%95%E6%9C%9F%E5%BE%97%E7%9F%A5%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A820%E4%BD%99%E4%BA%BA%23) `123.5K 🔥`
1. [徐艺洋回应黄子韬身体状况 (Xu Yiyang responded to Huang Zitao’s physical condition)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9B%9E%E5%BA%94%E9%BB%84%E5%AD%90%E9%9F%AC%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `122.9K 🔥`
1. [穆祉丞 代言](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E4%BB%A3%E8%A8%80%23) `119.2K 🔥`
1. [美媒称伊朗阿曼将收霍尔木兹通行费](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E4%BC%8A%E6%9C%97%E9%98%BF%E6%9B%BC%E5%B0%86%E6%94%B6%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E9%80%9A%E8%A1%8C%E8%B4%B9%23) `97.3K 🔥`
1. [宇文玥捞上来了](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%96%87%E7%8E%A5%E6%8D%9E%E4%B8%8A%E6%9D%A5%E4%BA%86%23) `690.9K 🔥` `-37%`
1. [住酒店不带毛巾的人天塌了 (If you stay in a hotel without a towel, the sky is falling.)](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E9%85%92%E5%BA%97%E4%B8%8D%E5%B8%A6%E6%AF%9B%E5%B7%BE%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `493.7K 🔥` `-30%`
1. [12人花30万买月薪2500的高铁工作](https://s.weibo.com/weibo?q=%2312%E4%BA%BA%E8%8A%B130%E4%B8%87%E4%B9%B0%E6%9C%88%E8%96%AA2500%E7%9A%84%E9%AB%98%E9%93%81%E5%B7%A5%E4%BD%9C%23) `369.2K 🔥` `-44%`
1. [美军大批F35将入驻日本三泽基地](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%A4%A7%E6%89%B9F35%E5%B0%86%E5%85%A5%E9%A9%BB%E6%97%A5%E6%9C%AC%E4%B8%89%E6%B3%BD%E5%9F%BA%E5%9C%B0%23) `214.6K 🔥` `-73%`
1. [王濛 组内唯一大vocal](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E7%BB%84%E5%86%85%E5%94%AF%E4%B8%80%E5%A4%A7vocal%23) `206.2K 🔥` `-36%`
1. [刘思维当爸爸了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%80%9D%E7%BB%B4%E5%BD%93%E7%88%B8%E7%88%B8%E4%BA%86%23) `137.6K 🔥` `-29%`
1. [孙怡 幼态脸高妹](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%B9%BC%E6%80%81%E8%84%B8%E9%AB%98%E5%A6%B9%23) `130.8K 🔥` `-32%`
1. [浪姐史上最难听的小考](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%9A%BE%E5%90%AC%E7%9A%84%E5%B0%8F%E8%80%83%23) `122.1K 🔥` `-38%`
1. [好仙的刘诗诗 (The lovely Liu Shishi)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E4%BB%99%E7%9A%84%E5%88%98%E8%AF%97%E8%AF%97%23) `92.5K 🔥` `-37%`
1. [粉色蓝莓](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E8%93%9D%E8%8E%93%23) `86.7K 🔥` `-29%`
1. [田曦薇飞吻](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%A3%9E%E5%90%BB%23) `86.4K 🔥` `-37%`
1. [冰湖重生开局0广](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%BC%80%E5%B1%800%E5%B9%BF%23) `86.2K 🔥` `-26%`
1. [伊美双方停火生效](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%BE%8E%E5%8F%8C%E6%96%B9%E5%81%9C%E7%81%AB%E7%94%9F%E6%95%88%23) `82.7K 🔥` `-52%`
1. [江语晨小考突然离场 (Jiang Yuchen suddenly left the quiz)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%B0%8F%E8%80%83%E7%AA%81%E7%84%B6%E7%A6%BB%E5%9C%BA%23) `78.5K 🔥` `-30%`

Updated at 2026-04-08 17:51:04

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
