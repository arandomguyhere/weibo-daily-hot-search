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

1. [粉笔 谁是公考培训界的良心](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%20%E8%B0%81%E6%98%AF%E5%85%AC%E8%80%83%E5%9F%B9%E8%AE%AD%E7%95%8C%E7%9A%84%E8%89%AF%E5%BF%83%23) `1.7M 🔥` `NEW`
1. [粉笔 超格](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%20%E8%B6%85%E6%A0%BC%23) `880.6K 🔥` `NEW`
1. [第23届东博会峰会](https://s.weibo.com/weibo?q=%23%E7%AC%AC23%E5%B1%8A%E4%B8%9C%E5%8D%9A%E4%BC%9A%E5%B3%B0%E4%BC%9A%23) `769.2K 🔥` `NEW`
1. [GEO终于有标准了](https://s.weibo.com/weibo?q=%23GEO%E7%BB%88%E4%BA%8E%E6%9C%89%E6%A0%87%E5%87%86%E4%BA%86%23) `739.5K 🔥` `NEW`
1. [公考大战](https://s.weibo.com/weibo?q=%23%E5%85%AC%E8%80%83%E5%A4%A7%E6%88%98%23) `727.4K 🔥` `NEW`
1. [偶像来了 国际大花](https://s.weibo.com/weibo?q=%23%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%20%E5%9B%BD%E9%99%85%E5%A4%A7%E8%8A%B1%23) `511.2K 🔥` `NEW`
1. [医生回应举手式睡姿是身体在求救](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E4%B8%BE%E6%89%8B%E5%BC%8F%E7%9D%A1%E5%A7%BF%E6%98%AF%E8%BA%AB%E4%BD%93%E5%9C%A8%E6%B1%82%E6%95%91%23) `338.9K 🔥` `NEW`
1. [袁东直播间乱成一锅粥了](https://s.weibo.com/weibo?q=%23%E8%A2%81%E4%B8%9C%E7%9B%B4%E6%92%AD%E9%97%B4%E4%B9%B1%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%E4%BA%86%23) `330.1K 🔥` `NEW`
1. [如果你出生于1992年至2003年之间](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E4%BD%A0%E5%87%BA%E7%94%9F%E4%BA%8E1992%E5%B9%B4%E8%87%B32003%E5%B9%B4%E4%B9%8B%E9%97%B4%23) `300.9K 🔥` `NEW`
1. [我恨我没有钱但特别识货](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%81%A8%E6%88%91%E6%B2%A1%E6%9C%89%E9%92%B1%E4%BD%86%E7%89%B9%E5%88%AB%E8%AF%86%E8%B4%A7%23) `229.3K 🔥` `NEW`
1. [小鹏G9L价格炸裂](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FG9L%E4%BB%B7%E6%A0%BC%E7%82%B8%E8%A3%82%23) `183.7K 🔥` `NEW`
1. [粉笔疯了](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E7%96%AF%E4%BA%86%23) `183.4K 🔥` `NEW`
1. [杨某媛疑似在西班牙读博](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%9F%90%E5%AA%9B%E7%96%91%E4%BC%BC%E5%9C%A8%E8%A5%BF%E7%8F%AD%E7%89%99%E8%AF%BB%E5%8D%9A%23) `182.7K 🔥` `NEW`
1. [原来杜翠雀第一个想给李兰香下毒](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%9D%9C%E7%BF%A0%E9%9B%80%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%83%B3%E7%BB%99%E6%9D%8E%E5%85%B0%E9%A6%99%E4%B8%8B%E6%AF%92%23) `175.9K 🔥` `NEW`
1. [影视飓风评测 看完不想买了](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E8%AF%84%E6%B5%8B%20%E7%9C%8B%E5%AE%8C%E4%B8%8D%E6%83%B3%E4%B9%B0%E4%BA%86%23) `163.3K 🔥` `NEW`
1. [JackeyLove眼含热泪](https://s.weibo.com/weibo?q=%23JackeyLove%E7%9C%BC%E5%90%AB%E7%83%AD%E6%B3%AA%23) `157.3K 🔥` `NEW`
1. [2岁幼童18楼坠亡邻居发声](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%B9%BC%E7%AB%A518%E6%A5%BC%E5%9D%A0%E4%BA%A1%E9%82%BB%E5%B1%85%E5%8F%91%E5%A3%B0%23) `156.8K 🔥` `NEW`
1. [30岁后找对象比赚钱还难](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%90%8E%E6%89%BE%E5%AF%B9%E8%B1%A1%E6%AF%94%E8%B5%9A%E9%92%B1%E8%BF%98%E9%9A%BE%23) `153.5K 🔥` `NEW`
1. [何炅官宣我们来了重启](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E5%AE%98%E5%AE%A3%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%E9%87%8D%E5%90%AF%23) `149.4K 🔥` `NEW`
1. [武大口腔手术纠纷](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E5%8F%A3%E8%85%94%E6%89%8B%E6%9C%AF%E7%BA%A0%E7%BA%B7%23) `149.2K 🔥` `NEW`
1. [iOS27电池图标 年年吐槽年年买](https://s.weibo.com/weibo?q=%23iOS27%E7%94%B5%E6%B1%A0%E5%9B%BE%E6%A0%87%20%E5%B9%B4%E5%B9%B4%E5%90%90%E6%A7%BD%E5%B9%B4%E5%B9%B4%E4%B9%B0%23) `149.0K 🔥` `NEW`
1. [iOS27电池图标 丑](https://s.weibo.com/weibo?q=%23iOS27%E7%94%B5%E6%B1%A0%E5%9B%BE%E6%A0%87%20%E4%B8%91%23) `148.6K 🔥` `NEW`
1. [HYROX失禁女选手致歉](https://s.weibo.com/weibo?q=%23HYROX%E5%A4%B1%E7%A6%81%E5%A5%B3%E9%80%89%E6%89%8B%E8%87%B4%E6%AD%89%23) `148.3K 🔥` `NEW`
1. [女子生孩子后双目失明双耳失聪](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E5%AD%A9%E5%AD%90%E5%90%8E%E5%8F%8C%E7%9B%AE%E5%A4%B1%E6%98%8E%E5%8F%8C%E8%80%B3%E5%A4%B1%E8%81%AA%23) `147.8K 🔥` `NEW`
1. [丞磊徐若晗新剧尺度](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E5%BE%90%E8%8B%A5%E6%99%97%E6%96%B0%E5%89%A7%E5%B0%BA%E5%BA%A6%23) `147.5K 🔥` `NEW`
1. [关晓彤林一新剧13秒亲了4次](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%9E%97%E4%B8%80%E6%96%B0%E5%89%A713%E7%A7%92%E4%BA%B2%E4%BA%864%E6%AC%A1%23) `147.3K 🔥` `NEW`
1. [香港历史上首个五年规划](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%8E%86%E5%8F%B2%E4%B8%8A%E9%A6%96%E4%B8%AA%E4%BA%94%E5%B9%B4%E8%A7%84%E5%88%92%23) `147.1K 🔥` `NEW`
1. [粉笔说做生意却哄着小孩喊恩师](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E8%AF%B4%E5%81%9A%E7%94%9F%E6%84%8F%E5%8D%B4%E5%93%84%E7%9D%80%E5%B0%8F%E5%AD%A9%E5%96%8A%E6%81%A9%E5%B8%88%23) `146.6K 🔥` `NEW`
1. [兰香如故预告](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E9%A2%84%E5%91%8A%23) `146.3K 🔥` `NEW`
1. [2026湾区升明月你最期待谁](https://s.weibo.com/weibo?q=%232026%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%E4%BD%A0%E6%9C%80%E6%9C%9F%E5%BE%85%E8%B0%81%23) `145.9K 🔥` `NEW`
1. [王楚钦练到力竭](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%BB%83%E5%88%B0%E5%8A%9B%E7%AB%AD%23) `145.6K 🔥` `NEW`
1. [Wayward侮辱TheShy](https://s.weibo.com/weibo?q=%23Wayward%E4%BE%AE%E8%BE%B1TheShy%23) `145.3K 🔥` `NEW`
1. [健身房老板的天都塌了](https://s.weibo.com/weibo?q=%23%E5%81%A5%E8%BA%AB%E6%88%BF%E8%80%81%E6%9D%BF%E7%9A%84%E5%A4%A9%E9%83%BD%E5%A1%8C%E4%BA%86%23) `145.2K 🔥` `NEW`
1. [拒绝了十五年前拒绝过我的学校](https://s.weibo.com/weibo?q=%23%E6%8B%92%E7%BB%9D%E4%BA%86%E5%8D%81%E4%BA%94%E5%B9%B4%E5%89%8D%E6%8B%92%E7%BB%9D%E8%BF%87%E6%88%91%E7%9A%84%E5%AD%A6%E6%A0%A1%23) `144.6K 🔥` `NEW`
1. [我们来了阵容配置](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%E9%98%B5%E5%AE%B9%E9%85%8D%E7%BD%AE%23) `144.5K 🔥` `NEW`
1. [殷桃回应嫌弃邓为](https://s.weibo.com/weibo?q=%23%E6%AE%B7%E6%A1%83%E5%9B%9E%E5%BA%94%E5%AB%8C%E5%BC%83%E9%82%93%E4%B8%BA%23) `144.1K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `143.8K 🔥` `NEW`
1. [AG菲菲和长生连线](https://s.weibo.com/weibo?q=%23AG%E8%8F%B2%E8%8F%B2%E5%92%8C%E9%95%BF%E7%94%9F%E8%BF%9E%E7%BA%BF%23) `143.4K 🔥` `NEW`
1. [TES晋级S16](https://s.weibo.com/weibo?q=%23TES%E6%99%8B%E7%BA%A7S16%23) `143.3K 🔥` `NEW`
1. [西雅图吸毒者末世景象](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E9%9B%85%E5%9B%BE%E5%90%B8%E6%AF%92%E8%80%85%E6%9C%AB%E4%B8%96%E6%99%AF%E8%B1%A1%23) `142.9K 🔥` `NEW`
1. [18万爱马仕退款14万等2年包还没退](https://s.weibo.com/weibo?q=%2318%E4%B8%87%E7%88%B1%E9%A9%AC%E4%BB%95%E9%80%80%E6%AC%BE14%E4%B8%87%E7%AD%892%E5%B9%B4%E5%8C%85%E8%BF%98%E6%B2%A1%E9%80%80%23) `142.6K 🔥` `NEW`
1. [周也这样宣传真的可以吗](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E8%BF%99%E6%A0%B7%E5%AE%A3%E4%BC%A0%E7%9C%9F%E7%9A%84%E5%8F%AF%E4%BB%A5%E5%90%97%23) `142.2K 🔥` `NEW`
1. [Wayward回应TES战胜iG](https://s.weibo.com/weibo?q=%23Wayward%E5%9B%9E%E5%BA%94TES%E6%88%98%E8%83%9CiG%23) `141.9K 🔥` `NEW`
1. [九毛九股价跌至九毛九](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E6%AF%9B%E4%B9%9D%E8%82%A1%E4%BB%B7%E8%B7%8C%E8%87%B3%E4%B9%9D%E6%AF%9B%E4%B9%9D%23) `141.4K 🔥` `NEW`
1. [兰香如故大爷开始搞暗恋了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%A4%A7%E7%88%B7%E5%BC%80%E5%A7%8B%E6%90%9E%E6%9A%97%E6%81%8B%E4%BA%86%23) `141.1K 🔥` `NEW`
1. [檀健次王鹤棣将有个人综艺](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%B0%86%E6%9C%89%E4%B8%AA%E4%BA%BA%E7%BB%BC%E8%89%BA%23) `141.0K 🔥` `NEW`
1. [女子直播遭400多斤发情公鹿偷袭](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9B%B4%E6%92%AD%E9%81%AD400%E5%A4%9A%E6%96%A4%E5%8F%91%E6%83%85%E5%85%AC%E9%B9%BF%E5%81%B7%E8%A2%AD%23) `140.5K 🔥` `NEW`
1. [小米澎湃OS4](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E6%B9%83OS4%23) `140.3K 🔥` `NEW`
1. [苹果新机冰火两重天](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%96%B0%E6%9C%BA%E5%86%B0%E7%81%AB%E4%B8%A4%E9%87%8D%E5%A4%A9%23) `140.0K 🔥` `NEW`
1. [浪姐8观众投票决定组队选曲](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%908%E8%A7%82%E4%BC%97%E6%8A%95%E7%A5%A8%E5%86%B3%E5%AE%9A%E7%BB%84%E9%98%9F%E9%80%89%E6%9B%B2%23) `139.7K 🔥` `NEW`
1. [儿子刚上初三不幸离世父亲抱鞋痛哭](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%88%9A%E4%B8%8A%E5%88%9D%E4%B8%89%E4%B8%8D%E5%B9%B8%E7%A6%BB%E4%B8%96%E7%88%B6%E4%BA%B2%E6%8A%B1%E9%9E%8B%E7%97%9B%E5%93%AD%23) `139.3K 🔥` `NEW`

Updated at 2026-09-18 01:01:46

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
