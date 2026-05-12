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

1. [宇树机甲390万起 (Yushu Mecha starts from 3.9 million)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E7%94%B2390%E4%B8%87%E8%B5%B7%23) `2.1M 🔥` `NEW`
1. [科学避险自救指南](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%AD%A6%E9%81%BF%E9%99%A9%E8%87%AA%E6%95%91%E6%8C%87%E5%8D%97%23) `962.6K 🔥` `NEW`
1. [深圳夫妻囤存储芯片5个月狂涨320亿](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%A4%AB%E5%A6%BB%E5%9B%A4%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%875%E4%B8%AA%E6%9C%88%E7%8B%82%E6%B6%A8320%E4%BA%BF%23) `962.3K 🔥` `NEW`
1. [演出完退礼服女孩演出已暂停](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%87%BA%E5%AE%8C%E9%80%80%E7%A4%BC%E6%9C%8D%E5%A5%B3%E5%AD%A9%E6%BC%94%E5%87%BA%E5%B7%B2%E6%9A%82%E5%81%9C%23) `962.2K 🔥` `NEW`
1. [中餐厅10录制](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%8510%E5%BD%95%E5%88%B6%23) `867.1K 🔥` `NEW`
1. [詹姆斯 湖人](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%20%E6%B9%96%E4%BA%BA%23) `431.4K 🔥` `NEW`
1. [外交部就中美关系和台湾问题答问](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%B0%B1%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E5%92%8C%E5%8F%B0%E6%B9%BE%E9%97%AE%E9%A2%98%E7%AD%94%E9%97%AE%23) `431.3K 🔥` `NEW`
1. [女子酒店一丝不挂被开房门](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%85%92%E5%BA%97%E4%B8%80%E4%B8%9D%E4%B8%8D%E6%8C%82%E8%A2%AB%E5%BC%80%E6%88%BF%E9%97%A8%23) `430.8K 🔥` `NEW`
1. [腾讯 已读访客功能不会开发](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%20%E5%B7%B2%E8%AF%BB%E8%AE%BF%E5%AE%A2%E5%8A%9F%E8%83%BD%E4%B8%8D%E4%BC%9A%E5%BC%80%E5%8F%91%23) `430.4K 🔥` `NEW`
1. [无忧传媒创始人凌晨发朋友圈](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%BF%A7%E4%BC%A0%E5%AA%92%E5%88%9B%E5%A7%8B%E4%BA%BA%E5%87%8C%E6%99%A8%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `430.3K 🔥` `NEW`
1. [空调 霉菌 (Air conditioning mold)](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%20%E9%9C%89%E8%8F%8C%23) `430.0K 🔥` `NEW`
1. [遭15岁男孩冲撞女子拒绝和解](https://s.weibo.com/weibo?q=%23%E9%81%AD15%E5%B2%81%E7%94%B7%E5%AD%A9%E5%86%B2%E6%92%9E%E5%A5%B3%E5%AD%90%E6%8B%92%E7%BB%9D%E5%92%8C%E8%A7%A3%23) `429.9K 🔥` `NEW`
1. [白鹿综艺互动为何会被逐帧审判](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%BC%E8%89%BA%E4%BA%92%E5%8A%A8%E4%B8%BA%E4%BD%95%E4%BC%9A%E8%A2%AB%E9%80%90%E5%B8%A7%E5%AE%A1%E5%88%A4%23) `429.5K 🔥` `NEW`
1. [何小鹏和朋友们聚会品鉴小鹏GX](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%B0%8F%E9%B9%8F%E5%92%8C%E6%9C%8B%E5%8F%8B%E4%BB%AC%E8%81%9A%E4%BC%9A%E5%93%81%E9%89%B4%E5%B0%8F%E9%B9%8FGX%23) `429.3K 🔥` `NEW`
1. [南京审计大学一男子被曝偷拍女生](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%AE%A1%E8%AE%A1%E5%A4%A7%E5%AD%A6%E4%B8%80%E7%94%B7%E5%AD%90%E8%A2%AB%E6%9B%9D%E5%81%B7%E6%8B%8D%E5%A5%B3%E7%94%9F%23) `429.1K 🔥` `NEW`
1. [RNG复活了](https://s.weibo.com/weibo?q=%23RNG%E5%A4%8D%E6%B4%BB%E4%BA%86%23) `428.8K 🔥` `NEW`
1. [商家称演出完退礼服女孩想私下和解](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%AE%B6%E7%A7%B0%E6%BC%94%E5%87%BA%E5%AE%8C%E9%80%80%E7%A4%BC%E6%9C%8D%E5%A5%B3%E5%AD%A9%E6%83%B3%E7%A7%81%E4%B8%8B%E5%92%8C%E8%A7%A3%23) `428.6K 🔥` `NEW`
1. [白鹿泼水李晨](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%B3%BC%E6%B0%B4%E6%9D%8E%E6%99%A8%23) `428.6K 🔥` `NEW`
1. [特朗普称访华行程将非常精彩](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%AE%BF%E5%8D%8E%E8%A1%8C%E7%A8%8B%E5%B0%86%E9%9D%9E%E5%B8%B8%E7%B2%BE%E5%BD%A9%23) `428.4K 🔥` `NEW`
1. [机票价格大跳水](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E7%A5%A8%E4%BB%B7%E6%A0%BC%E5%A4%A7%E8%B7%B3%E6%B0%B4%23) `402.1K 🔥` `NEW`
1. [百念好何be (What's so good about having a hundred thoughts?)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%BF%B5%E5%A5%BD%E4%BD%95be%23) `357.1K 🔥` `NEW`
1. [15岁撞人男生当天撞了2个女孩](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E6%92%9E%E4%BA%BA%E7%94%B7%E7%94%9F%E5%BD%93%E5%A4%A9%E6%92%9E%E4%BA%862%E4%B8%AA%E5%A5%B3%E5%AD%A9%23) `356.1K 🔥` `NEW`
1. [宇树载人变形机甲](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E8%BD%BD%E4%BA%BA%E5%8F%98%E5%BD%A2%E6%9C%BA%E7%94%B2%23) `185.6K 🔥` `NEW`
1. [田曦薇入围亚洲内容大赏视后](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%85%A5%E5%9B%B4%E4%BA%9A%E6%B4%B2%E5%86%85%E5%AE%B9%E5%A4%A7%E8%B5%8F%E8%A7%86%E5%90%8E%23) `184.0K 🔥` `NEW`
1. [詹姆斯回应是否退役](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E9%80%80%E5%BD%B9%23) `183.2K 🔥` `NEW`
1. [月嫂上户2天夜里粗暴摇晃婴儿](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%AB%82%E4%B8%8A%E6%88%B72%E5%A4%A9%E5%A4%9C%E9%87%8C%E7%B2%97%E6%9A%B4%E6%91%87%E6%99%83%E5%A9%B4%E5%84%BF%23) `182.3K 🔥` `NEW`
1. [雷霆4比0湖人](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%864%E6%AF%940%E6%B9%96%E4%BA%BA%23) `181.5K 🔥` `NEW`
1. [退货女孩演出当天曾说礼服有问题](https://s.weibo.com/weibo?q=%23%E9%80%80%E8%B4%A7%E5%A5%B3%E5%AD%A9%E6%BC%94%E5%87%BA%E5%BD%93%E5%A4%A9%E6%9B%BE%E8%AF%B4%E7%A4%BC%E6%9C%8D%E6%9C%89%E9%97%AE%E9%A2%98%23) `179.8K 🔥` `NEW`
1. [沪上阿姨回应企微发5000陪一晚](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%E5%9B%9E%E5%BA%94%E4%BC%81%E5%BE%AE%E5%8F%915000%E9%99%AA%E4%B8%80%E6%99%9A%23) `179.0K 🔥` `NEW`
1. [杨幂烫伤在逐渐痊愈了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%83%AB%E4%BC%A4%E5%9C%A8%E9%80%90%E6%B8%90%E7%97%8A%E6%84%88%E4%BA%86%23) `178.1K 🔥` `NEW`
1. [迅猛龙被问小澈在她家住过的反应 (Velociraptor's reaction when asked if Xiao Che had lived in her house)](https://s.weibo.com/weibo?q=%23%E8%BF%85%E7%8C%9B%E9%BE%99%E8%A2%AB%E9%97%AE%E5%B0%8F%E6%BE%88%E5%9C%A8%E5%A5%B9%E5%AE%B6%E4%BD%8F%E8%BF%87%E7%9A%84%E5%8F%8D%E5%BA%94%23) `177.5K 🔥` `NEW`
1. [湖人站着死](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E7%AB%99%E7%9D%80%E6%AD%BB%23) `173.4K 🔥` `NEW`
1. [优酷招商大会微指百指](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B7%E6%8B%9B%E5%95%86%E5%A4%A7%E4%BC%9A%E5%BE%AE%E6%8C%87%E7%99%BE%E6%8C%87%23) `172.4K 🔥` `NEW`
1. [黑夜告白凶手](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%A4%9C%E5%91%8A%E7%99%BD%E5%87%B6%E6%89%8B%23) `172.1K 🔥` `NEW`
1. [詹姆斯回应雷霆4比0湖人](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9B%9E%E5%BA%94%E9%9B%B7%E9%9C%864%E6%AF%940%E6%B9%96%E4%BA%BA%23) `170.8K 🔥` `NEW`
1. [女子回应遭15岁男孩冲撞](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E9%81%AD15%E5%B2%81%E7%94%B7%E5%AD%A9%E5%86%B2%E6%92%9E%23) `170.4K 🔥` `NEW`
1. [原来健康的人身体是静音的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%81%A5%E5%BA%B7%E7%9A%84%E4%BA%BA%E8%BA%AB%E4%BD%93%E6%98%AF%E9%9D%99%E9%9F%B3%E7%9A%84%23) `962.5K 🔥` `+179%`
1. [放羊的星星演员李威被判刑](https://s.weibo.com/weibo?q=%23%E6%94%BE%E7%BE%8A%E7%9A%84%E6%98%9F%E6%98%9F%E6%BC%94%E5%91%98%E6%9D%8E%E5%A8%81%E8%A2%AB%E5%88%A4%E5%88%91%23) `430.6K 🔥` `+23%`
1. [打司美格鲁肽减重的人怎么样了](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E5%87%8F%E9%87%8D%E7%9A%84%E4%BA%BA%E6%80%8E%E4%B9%88%E6%A0%B7%E4%BA%86%23) `400.0K 🔥` `+22%`
1. [双休和单休其实差了两天 (There is actually a difference of two days between weekend breaks and single breaks.)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BC%91%E5%92%8C%E5%8D%95%E4%BC%91%E5%85%B6%E5%AE%9E%E5%B7%AE%E4%BA%86%E4%B8%A4%E5%A4%A9%23) `374.0K 🔥` `+27%`
1. [给阿嬷的情书 观众的报复性投票](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E8%A7%82%E4%BC%97%E7%9A%84%E6%8A%A5%E5%A4%8D%E6%80%A7%E6%8A%95%E7%A5%A8%23) `431.0K 🔥`
1. [医生才是最不听医嘱的 (Doctors are the ones who don’t listen to medical advice the most)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%89%8D%E6%98%AF%E6%9C%80%E4%B8%8D%E5%90%AC%E5%8C%BB%E5%98%B1%E7%9A%84%23) `379.7K 🔥`
1. [降噪耳机受害者出现 (Noise-canceling headphone victims emerge)](https://s.weibo.com/weibo?q=%23%E9%99%8D%E5%99%AA%E8%80%B3%E6%9C%BA%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%23) `1.0M 🔥` `-69%`
1. [黑夜告白大结局](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%A4%9C%E5%91%8A%E7%99%BD%E5%A4%A7%E7%BB%93%E5%B1%80%23) `188.0K 🔥` `-48%`
1. [曝蒋毅有老婆孩子 (It is revealed that Jiang Yi has a wife and children)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%92%8B%E6%AF%85%E6%9C%89%E8%80%81%E5%A9%86%E5%AD%A9%E5%AD%90%23) `187.3K 🔥` `-47%`
1. [演出完退礼服女孩发声](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%87%BA%E5%AE%8C%E9%80%80%E7%A4%BC%E6%9C%8D%E5%A5%B3%E5%AD%A9%E5%8F%91%E5%A3%B0%23) `186.6K 🔥` `-48%`
1. [汶川地震的可乐男孩入职可口可乐](https://s.weibo.com/weibo?q=%23%E6%B1%B6%E5%B7%9D%E5%9C%B0%E9%9C%87%E7%9A%84%E5%8F%AF%E4%B9%90%E7%94%B7%E5%AD%A9%E5%85%A5%E8%81%8C%E5%8F%AF%E5%8F%A3%E5%8F%AF%E4%B9%90%23) `184.4K 🔥` `-83%`
1. [小猫的脚原来这么臭](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%9A%84%E8%84%9A%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E8%87%AD%23) `177.0K 🔥` `-48%`
1. [美国确认首例汉坦病毒感染病例](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%A1%AE%E8%AE%A4%E9%A6%96%E4%BE%8B%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E6%84%9F%E6%9F%93%E7%97%85%E4%BE%8B%23) `175.3K 🔥` `-68%`
1. [热依扎是单亲妈妈](https://s.weibo.com/weibo?q=%23%E7%83%AD%E4%BE%9D%E6%89%8E%E6%98%AF%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%88%23) `174.6K 🔥` `-48%`

Updated at 2026-05-12 15:52:10

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
