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

1. [问界 四界](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%20%E5%9B%9B%E7%95%8C%23) `737.2K 🔥` `NEW`
1. [短剧大满贯王道铁帅得有理有据](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E5%A4%A7%E6%BB%A1%E8%B4%AF%E7%8E%8B%E9%81%93%E9%93%81%E5%B8%85%E5%BE%97%E6%9C%89%E7%90%86%E6%9C%89%E6%8D%AE%23) `571.5K 🔥` `NEW`
1. [中美两国元首夫妇观看海军陆战队表演](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E4%B8%A4%E5%9B%BD%E5%85%83%E9%A6%96%E5%A4%AB%E5%A6%87%E8%A7%82%E7%9C%8B%E6%B5%B7%E5%86%9B%E9%99%86%E6%88%98%E9%98%9F%E8%A1%A8%E6%BC%94%23) `494.4K 🔥` `NEW`
1. [鞠婧祎万花世界](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%23) `364.0K 🔥` `NEW`
1. [孙颖莎丁宁 颁奖互动](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%81%E5%AE%81%20%E9%A2%81%E5%A5%96%E4%BA%92%E5%8A%A8%23) `321.8K 🔥` `NEW`
1. [美方应慎重处理台湾问题](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%96%B9%E5%BA%94%E6%85%8E%E9%87%8D%E5%A4%84%E7%90%86%E5%8F%B0%E6%B9%BE%E9%97%AE%E9%A2%98%23) `284.2K 🔥` `NEW`
1. [中美经贸团队达成一份新的联合安排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E7%BB%8F%E8%B4%B8%E5%9B%A2%E9%98%9F%E8%BE%BE%E6%88%90%E4%B8%80%E4%BB%BD%E6%96%B0%E7%9A%84%E8%81%94%E5%90%88%E5%AE%89%E6%8E%92%23) `280.8K 🔥` `NEW`
1. [樊振东为何未参加亚运会](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%BA%E4%BD%95%E6%9C%AA%E5%8F%82%E5%8A%A0%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `278.5K 🔥` `NEW`
1. [胖东来按国标盖楼看哭土木人](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%8C%89%E5%9B%BD%E6%A0%87%E7%9B%96%E6%A5%BC%E7%9C%8B%E5%93%AD%E5%9C%9F%E6%9C%A8%E4%BA%BA%23) `273.1K 🔥` `NEW`
1. [特朗普与中方随行人员握手脱皮手套](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%8E%E4%B8%AD%E6%96%B9%E9%9A%8F%E8%A1%8C%E4%BA%BA%E5%91%98%E6%8F%A1%E6%89%8B%E8%84%B1%E7%9A%AE%E6%89%8B%E5%A5%97%23) `272.1K 🔥` `NEW`
1. [遭性侵后女子姥姥大骂继父不是人](https://s.weibo.com/weibo?q=%23%E9%81%AD%E6%80%A7%E4%BE%B5%E5%90%8E%E5%A5%B3%E5%AD%90%E5%A7%A5%E5%A7%A5%E5%A4%A7%E9%AA%82%E7%BB%A7%E7%88%B6%E4%B8%8D%E6%98%AF%E4%BA%BA%23) `270.1K 🔥` `NEW`
1. [中秋文案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E6%96%87%E6%A1%88%23) `268.1K 🔥` `NEW`
1. [章若楠分享了自己快速瘦手臂的方法](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%88%86%E4%BA%AB%E4%BA%86%E8%87%AA%E5%B7%B1%E5%BF%AB%E9%80%9F%E7%98%A6%E6%89%8B%E8%87%82%E7%9A%84%E6%96%B9%E6%B3%95%23) `261.4K 🔥` `NEW`
1. [多宝鱼协会称低价鱼是病死鱼](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%9D%E9%B1%BC%E5%8D%8F%E4%BC%9A%E7%A7%B0%E4%BD%8E%E4%BB%B7%E9%B1%BC%E6%98%AF%E7%97%85%E6%AD%BB%E9%B1%BC%23) `225.9K 🔥` `NEW`
1. [张本智和 高调发声](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%20%E9%AB%98%E8%B0%83%E5%8F%91%E5%A3%B0%23) `224.4K 🔥` `NEW`
1. [国乒男团丢银怀念张继科](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E4%B8%A2%E9%93%B6%E6%80%80%E5%BF%B5%E5%BC%A0%E7%BB%A7%E7%A7%91%23) `223.6K 🔥` `NEW`
1. [C罗 欧国联](https://s.weibo.com/weibo?q=%23C%E7%BD%97%20%E6%AC%A7%E5%9B%BD%E8%81%94%23) `223.6K 🔥` `NEW`
1. [升糖最快的主食不是米饭而是这6种](https://s.weibo.com/weibo?q=%23%E5%8D%87%E7%B3%96%E6%9C%80%E5%BF%AB%E7%9A%84%E4%B8%BB%E9%A3%9F%E4%B8%8D%E6%98%AF%E7%B1%B3%E9%A5%AD%E8%80%8C%E6%98%AF%E8%BF%996%E7%A7%8D%23) `223.0K 🔥` `NEW`
1. [刘学义转发少年歌行悼念游本昌](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E8%BD%AC%E5%8F%91%E5%B0%91%E5%B9%B4%E6%AD%8C%E8%A1%8C%E6%82%BC%E5%BF%B5%E6%B8%B8%E6%9C%AC%E6%98%8C%23) `221.8K 🔥` `NEW`
1. [王楚钦 亚运六金](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%20%E4%BA%9A%E8%BF%90%E5%85%AD%E9%87%91%23) `221.4K 🔥` `NEW`
1. [C罗空门不进](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%A9%BA%E9%97%A8%E4%B8%8D%E8%BF%9B%23) `168.5K 🔥` `NEW`
1. [樊振东雅加达亚运男团定海神针](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E9%9B%85%E5%8A%A0%E8%BE%BE%E4%BA%9A%E8%BF%90%E7%94%B7%E5%9B%A2%E5%AE%9A%E6%B5%B7%E7%A5%9E%E9%92%88%23) `165.6K 🔥` `NEW`
1. [余承东回应四界发展策略](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%9B%9E%E5%BA%94%E5%9B%9B%E7%95%8C%E5%8F%91%E5%B1%95%E7%AD%96%E7%95%A5%23) `159.1K 🔥` `NEW`
1. [花少北热转区](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%8C%97%E7%83%AD%E8%BD%AC%E5%8C%BA%23) `152.0K 🔥` `NEW`
1. [白鹿未公开童年照](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9C%AA%E5%85%AC%E5%BC%80%E7%AB%A5%E5%B9%B4%E7%85%A7%23) `147.3K 🔥` `NEW`
1. [保研后分享喜悦被创了](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%A0%94%E5%90%8E%E5%88%86%E4%BA%AB%E5%96%9C%E6%82%A6%E8%A2%AB%E5%88%9B%E4%BA%86%23) `144.8K 🔥` `NEW`
1. [孙颖莎小声称赞丁宁](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%B0%8F%E5%A3%B0%E7%A7%B0%E8%B5%9E%E4%B8%81%E5%AE%81%23) `141.5K 🔥` `NEW`
1. [日本男团主帅谈张本智和3比0王楚钦](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E5%9B%A2%E4%B8%BB%E5%B8%85%E8%B0%88%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C3%E6%AF%940%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `141.5K 🔥` `NEW`
1. [中美一定能走出大国正确相处之道](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E4%B8%80%E5%AE%9A%E8%83%BD%E8%B5%B0%E5%87%BA%E5%A4%A7%E5%9B%BD%E6%AD%A3%E7%A1%AE%E7%9B%B8%E5%A4%84%E4%B9%8B%E9%81%93%23) `137.1K 🔥` `NEW`
1. [中美元首华盛顿会晤](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%8D%8E%E7%9B%9B%E9%A1%BF%E4%BC%9A%E6%99%A4%23) `1.0M 🔥` `+153%`
1. [丰收画卷里的中国味道](https://s.weibo.com/weibo?q=%23%E4%B8%B0%E6%94%B6%E7%94%BB%E5%8D%B7%E9%87%8C%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%91%B3%E9%81%93%23) `590.8K 🔥` `+149%`
1. [中秋节](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E8%8A%82%23) `408.0K 🔥` `+276%`
1. [港媒取的标题也太好笑了](https://s.weibo.com/weibo?q=%23%E6%B8%AF%E5%AA%92%E5%8F%96%E7%9A%84%E6%A0%87%E9%A2%98%E4%B9%9F%E5%A4%AA%E5%A5%BD%E7%AC%91%E4%BA%86%23) `275.9K 🔥` `+222%`
1. [潘展乐责任全在我](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%E8%B4%A3%E4%BB%BB%E5%85%A8%E5%9C%A8%E6%88%91%23) `255.2K 🔥` `+204%`
1. [喝完泰奶差点要见太奶了](https://s.weibo.com/weibo?q=%23%E5%96%9D%E5%AE%8C%E6%B3%B0%E5%A5%B6%E5%B7%AE%E7%82%B9%E8%A6%81%E8%A7%81%E5%A4%AA%E5%A5%B6%E4%BA%86%23) `253.9K 🔥` `+199%`
1. [张本智和说以前国乒场下还3位高手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E4%BB%A5%E5%89%8D%E5%9B%BD%E4%B9%92%E5%9C%BA%E4%B8%8B%E8%BF%983%E4%BD%8D%E9%AB%98%E6%89%8B%23) `225.6K 🔥` `+161%`
1. [饭桌上吃得越少别人越拿不准](https://s.weibo.com/weibo?q=%23%E9%A5%AD%E6%A1%8C%E4%B8%8A%E5%90%83%E5%BE%97%E8%B6%8A%E5%B0%91%E5%88%AB%E4%BA%BA%E8%B6%8A%E6%8B%BF%E4%B8%8D%E5%87%86%23) `225.5K 🔥` `+181%`
1. [王皓回应丢冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E5%9B%9E%E5%BA%94%E4%B8%A2%E5%86%A0%23) `225.1K 🔥` `+178%`
1. [邓亚萍谈国乒男团输日本](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%B0%88%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E8%BE%93%E6%97%A5%E6%9C%AC%23) `224.8K 🔥` `+185%`
1. [花少北复活了](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%8C%97%E5%A4%8D%E6%B4%BB%E4%BA%86%23) `224.0K 🔥` `+188%`
1. [刘国梁 日本队](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%20%E6%97%A5%E6%9C%AC%E9%98%9F%23) `222.8K 🔥` `+184%`
1. [井柏然刘雯 大大方方](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%20%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%23) `222.6K 🔥` `+190%`
1. [国乒男团颁奖后纷纷摘下银牌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E9%A2%81%E5%A5%96%E5%90%8E%E7%BA%B7%E7%BA%B7%E6%91%98%E4%B8%8B%E9%93%B6%E7%89%8C%23) `222.2K 🔥` `+191%`
1. [养了17年发现儿子非亲生后自缢](https://s.weibo.com/weibo?q=%23%E5%85%BB%E4%BA%8617%E5%B9%B4%E5%8F%91%E7%8E%B0%E5%84%BF%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%90%8E%E8%87%AA%E7%BC%A2%23) `221.3K 🔥` `+303%`
1. [国乒 樊振东](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `221.2K 🔥` `+178%`
1. [中秋福利取消让仇人释怀](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E7%A6%8F%E5%88%A9%E5%8F%96%E6%B6%88%E8%AE%A9%E4%BB%87%E4%BA%BA%E9%87%8A%E6%80%80%23) `220.2K 🔥` `+190%`
1. [王楚钦评价争议](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%84%E4%BB%B7%E4%BA%89%E8%AE%AE%23) `202.6K 🔥` `+162%`
1. [男性真正的强壮是不恐惧亲密](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%80%A7%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%BC%BA%E5%A3%AE%E6%98%AF%E4%B8%8D%E6%81%90%E6%83%A7%E4%BA%B2%E5%AF%86%23) `135.8K 🔥` `+120%`
1. [国乒女团金牌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E9%87%91%E7%89%8C%23) `130.7K 🔥` `+46%`
1. [邀请10万名美国青少年来华交流学习](https://s.weibo.com/weibo?q=%23%E9%82%80%E8%AF%B710%E4%B8%87%E5%90%8D%E7%BE%8E%E5%9B%BD%E9%9D%92%E5%B0%91%E5%B9%B4%E6%9D%A5%E5%8D%8E%E4%BA%A4%E6%B5%81%E5%AD%A6%E4%B9%A0%23) `145.5K 🔥` `-51%`

Updated at 2026-09-25 08:45:31

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
