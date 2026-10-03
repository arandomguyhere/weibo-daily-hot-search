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

1. [巴勒斯坦球员向国足道歉](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%E7%90%83%E5%91%98%E5%90%91%E5%9B%BD%E8%B6%B3%E9%81%93%E6%AD%89%23) `1.2M 🔥` `NEW`
1. [为什么现在退房时酒店不查房了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E9%80%80%E6%88%BF%E6%97%B6%E9%85%92%E5%BA%97%E4%B8%8D%E6%9F%A5%E6%88%BF%E4%BA%86%23) `917.7K 🔥` `NEW`
1. [中国队创亚运境外参赛金牌新纪录](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%88%9B%E4%BA%9A%E8%BF%90%E5%A2%83%E5%A4%96%E5%8F%82%E8%B5%9B%E9%87%91%E7%89%8C%E6%96%B0%E7%BA%AA%E5%BD%95%23) `664.2K 🔥` `NEW`
1. [小米澎程第N空间十一特展](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E7%AC%ACN%E7%A9%BA%E9%97%B4%E5%8D%81%E4%B8%80%E7%89%B9%E5%B1%95%23) `618.1K 🔥` `NEW`
1. [对手退赛郑钦文中网晋级](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%89%8B%E9%80%80%E8%B5%9B%E9%83%91%E9%92%A6%E6%96%87%E4%B8%AD%E7%BD%91%E6%99%8B%E7%BA%A7%23) `433.7K 🔥` `NEW`
1. [孙心然vs布克沙](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%BF%83%E7%84%B6vs%E5%B8%83%E5%85%8B%E6%B2%99%23) `410.8K 🔥` `NEW`
1. [U23国足铜牌](https://s.weibo.com/weibo?q=%23U23%E5%9B%BD%E8%B6%B3%E9%93%9C%E7%89%8C%23) `409.3K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `404.5K 🔥` `NEW`
1. [披荆斩棘直播](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `401.4K 🔥` `NEW`
1. [女子别车遭脚踹被罚200元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%88%AB%E8%BD%A6%E9%81%AD%E8%84%9A%E8%B8%B9%E8%A2%AB%E7%BD%9A200%E5%85%83%23) `397.3K 🔥` `NEW`
1. [JDG大师轮换清融花缘](https://s.weibo.com/weibo?q=%23JDG%E5%A4%A7%E5%B8%88%E8%BD%AE%E6%8D%A2%E6%B8%85%E8%9E%8D%E8%8A%B1%E7%BC%98%23) `396.2K 🔥` `NEW`
1. [田馥甄亲手毁掉了自己的演艺生涯](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E4%BA%B2%E6%89%8B%E6%AF%81%E6%8E%89%E4%BA%86%E8%87%AA%E5%B7%B1%E7%9A%84%E6%BC%94%E8%89%BA%E7%94%9F%E6%B6%AF%23) `392.7K 🔥` `NEW`
1. [烟草局招聘体育特长生](https://s.weibo.com/weibo?q=%23%E7%83%9F%E8%8D%89%E5%B1%80%E6%8B%9B%E8%81%98%E4%BD%93%E8%82%B2%E7%89%B9%E9%95%BF%E7%94%9F%23) `387.8K 🔥` `NEW`
1. [鞠婧祎直播](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%9B%B4%E6%92%AD%23) `384.8K 🔥` `NEW`
1. [东航称旅客欧某某严重侵害员工尊严](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%88%AA%E7%A7%B0%E6%97%85%E5%AE%A2%E6%AC%A7%E6%9F%90%E6%9F%90%E4%B8%A5%E9%87%8D%E4%BE%B5%E5%AE%B3%E5%91%98%E5%B7%A5%E5%B0%8A%E4%B8%A5%23) `379.3K 🔥` `NEW`
1. [郑州相亲设体制内专区](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E7%9B%B8%E4%BA%B2%E8%AE%BE%E4%BD%93%E5%88%B6%E5%86%85%E4%B8%93%E5%8C%BA%23) `376.4K 🔥` `NEW`
1. [小沈阳回应什么意思夫妇票房破亿](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E5%9B%9E%E5%BA%94%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D%E5%A4%AB%E5%A6%87%E7%A5%A8%E6%88%BF%E7%A0%B4%E4%BA%BF%23) `373.1K 🔥` `NEW`
1. [北京欢乐谷偶遇沈腾带儿子游玩](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%AC%A2%E4%B9%90%E8%B0%B7%E5%81%B6%E9%81%87%E6%B2%88%E8%85%BE%E5%B8%A6%E5%84%BF%E5%AD%90%E6%B8%B8%E7%8E%A9%23) `371.6K 🔥` `NEW`
1. [刘乐妍称祝福祖国台湾艺人仅19位](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B9%90%E5%A6%8D%E7%A7%B0%E7%A5%9D%E7%A6%8F%E7%A5%96%E5%9B%BD%E5%8F%B0%E6%B9%BE%E8%89%BA%E4%BA%BA%E4%BB%8519%E4%BD%8D%23) `338.9K 🔥` `NEW`
1. [JDG对战EDGM](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98EDGM%23) `316.1K 🔥` `NEW`
1. [AI面试被指不尊重人](https://s.weibo.com/weibo?q=%23AI%E9%9D%A2%E8%AF%95%E8%A2%AB%E6%8C%87%E4%B8%8D%E5%B0%8A%E9%87%8D%E4%BA%BA%23) `306.6K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `306.4K 🔥` `NEW`
1. [对手将李昊记录扑点习惯水瓶扔上看台](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%89%8B%E5%B0%86%E6%9D%8E%E6%98%8A%E8%AE%B0%E5%BD%95%E6%89%91%E7%82%B9%E4%B9%A0%E6%83%AF%E6%B0%B4%E7%93%B6%E6%89%94%E4%B8%8A%E7%9C%8B%E5%8F%B0%23) `304.7K 🔥` `NEW`
1. [一直不谈恋爱不会等来很好的人](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%B8%8D%E8%B0%88%E6%81%8B%E7%88%B1%E4%B8%8D%E4%BC%9A%E7%AD%89%E6%9D%A5%E5%BE%88%E5%A5%BD%E7%9A%84%E4%BA%BA%23) `303.9K 🔥` `NEW`
1. [白鹿给宋雨琦新歌打歌](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%99%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%96%B0%E6%AD%8C%E6%89%93%E6%AD%8C%23) `281.9K 🔥` `NEW`
1. [闲鱼 黑话](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%20%E9%BB%91%E8%AF%9D%23) `280.9K 🔥` `NEW`
1. [大兴安岭景区出现吊牌衣](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%85%B4%E5%AE%89%E5%B2%AD%E6%99%AF%E5%8C%BA%E5%87%BA%E7%8E%B0%E5%90%8A%E7%89%8C%E8%A1%A3%23) `275.8K 🔥` `NEW`
1. [刘学义经纪人否认与刘学义恋情](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%90%A6%E8%AE%A4%E4%B8%8E%E5%88%98%E5%AD%A6%E4%B9%89%E6%81%8B%E6%83%85%23) `243.7K 🔥` `NEW`
1. [黄灿灿在横店拍戏被车撞飞](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%9C%A8%E6%A8%AA%E5%BA%97%E6%8B%8D%E6%88%8F%E8%A2%AB%E8%BD%A6%E6%92%9E%E9%A3%9E%23) `238.2K 🔥` `NEW`
1. [减肥放纵一个国庆后会怎样](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E6%94%BE%E7%BA%B5%E4%B8%80%E4%B8%AA%E5%9B%BD%E5%BA%86%E5%90%8E%E4%BC%9A%E6%80%8E%E6%A0%B7%23) `231.0K 🔥` `NEW`
1. [包文婧说包贝尔是世界上最好的老公](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E8%AF%B4%E5%8C%85%E8%B4%9D%E5%B0%94%E6%98%AF%E4%B8%96%E7%95%8C%E4%B8%8A%E6%9C%80%E5%A5%BD%E7%9A%84%E8%80%81%E5%85%AC%23) `224.5K 🔥` `NEW`
1. [迪丽热巴 迪奥](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E8%BF%AA%E5%A5%A5%23) `224.3K 🔥` `NEW`
1. [Celine大秀](https://s.weibo.com/weibo?q=%23Celine%E5%A4%A7%E7%A7%80%23) `224.0K 🔥` `NEW`
1. [国庆假期第3日跨区域人员流动超3亿](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%81%87%E6%9C%9F%E7%AC%AC3%E6%97%A5%E8%B7%A8%E5%8C%BA%E5%9F%9F%E4%BA%BA%E5%91%98%E6%B5%81%E5%8A%A8%E8%B6%853%E4%BA%BF%23) `223.6K 🔥` `NEW`
1. [男子跌向火锅整锅热汤泼脸痛苦大喊](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B7%8C%E5%90%91%E7%81%AB%E9%94%85%E6%95%B4%E9%94%85%E7%83%AD%E6%B1%A4%E6%B3%BC%E8%84%B8%E7%97%9B%E8%8B%A6%E5%A4%A7%E5%96%8A%23) `223.6K 🔥` `NEW`
1. [黄安两个妹妹剃度出家](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AE%89%E4%B8%A4%E4%B8%AA%E5%A6%B9%E5%A6%B9%E5%89%83%E5%BA%A6%E5%87%BA%E5%AE%B6%23) `214.9K 🔥` `NEW`
1. [兰香如故沈家有后了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%B2%88%E5%AE%B6%E6%9C%89%E5%90%8E%E4%BA%86%23) `208.1K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `198.6K 🔥` `NEW`
1. [吴千语疑似怀孕了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%8D%83%E8%AF%AD%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%E4%BA%86%23) `196.1K 🔥` `NEW`
1. [田馥甄是不是在阴阳当初说她的网友](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E6%98%AF%E4%B8%8D%E6%98%AF%E5%9C%A8%E9%98%B4%E9%98%B3%E5%BD%93%E5%88%9D%E8%AF%B4%E5%A5%B9%E7%9A%84%E7%BD%91%E5%8F%8B%23) `169.8K 🔥` `NEW`
1. [郑钦文卡林斯卡娅决胜盘](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%8D%A1%E6%9E%97%E6%96%AF%E5%8D%A1%E5%A8%85%E5%86%B3%E8%83%9C%E7%9B%98%23) `159.5K 🔥` `NEW`
1. [甘棠嫁给了小莲的哥哥](https://s.weibo.com/weibo?q=%23%E7%94%98%E6%A3%A0%E5%AB%81%E7%BB%99%E4%BA%86%E5%B0%8F%E8%8E%B2%E7%9A%84%E5%93%A5%E5%93%A5%23) `158.6K 🔥` `NEW`
1. [深圳走应急车道被罚三千当事人发声](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E8%B5%B0%E5%BA%94%E6%80%A5%E8%BD%A6%E9%81%93%E8%A2%AB%E7%BD%9A%E4%B8%89%E5%8D%83%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `157.9K 🔥` `NEW`
1. [吴千语胖了好多](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%8D%83%E8%AF%AD%E8%83%96%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `157.4K 🔥` `NEW`
1. [法国高中生飞踹落单女警](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%AB%98%E4%B8%AD%E7%94%9F%E9%A3%9E%E8%B8%B9%E8%90%BD%E5%8D%95%E5%A5%B3%E8%AD%A6%23) `149.2K 🔥` `NEW`
1. [LOEWE这季有点东西](https://s.weibo.com/weibo?q=%23LOEWE%E8%BF%99%E5%AD%A3%E6%9C%89%E7%82%B9%E4%B8%9C%E8%A5%BF%23) `146.5K 🔥` `NEW`
1. [ZmjjKK转会传闻](https://s.weibo.com/weibo?q=%23ZmjjKK%E8%BD%AC%E4%BC%9A%E4%BC%A0%E9%97%BB%23) `146.0K 🔥` `NEW`
1. [Celine大秀明星阵容太豪华](https://s.weibo.com/weibo?q=%23Celine%E5%A4%A7%E7%A7%80%E6%98%8E%E6%98%9F%E9%98%B5%E5%AE%B9%E5%A4%AA%E8%B1%AA%E5%8D%8E%23) `145.2K 🔥` `NEW`
1. [跟王濛抄睡眠作业稳了](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%8E%8B%E6%BF%9B%E6%8A%84%E7%9D%A1%E7%9C%A0%E4%BD%9C%E4%B8%9A%E7%A8%B3%E4%BA%86%23) `145.0K 🔥` `NEW`
1. [卡林斯卡娅退赛](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E6%9E%97%E6%96%AF%E5%8D%A1%E5%A8%85%E9%80%80%E8%B5%9B%23) `145.0K 🔥` `NEW`
1. [Mate90麒麟芯片能耗看傻眼](https://s.weibo.com/weibo?q=%23Mate90%E9%BA%92%E9%BA%9F%E8%8A%AF%E7%89%87%E8%83%BD%E8%80%97%E7%9C%8B%E5%82%BB%E7%9C%BC%23) `144.9K 🔥` `NEW`

Updated at 2026-10-03 20:06:02

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
