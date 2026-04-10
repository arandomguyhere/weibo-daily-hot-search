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

1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `1.2M 🔥` `NEW`
1. [温峥嵘](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%23) `297.0K 🔥` `NEW`
1. [孙怡爆哭](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%88%86%E5%93%AD%23) `292.4K 🔥` `NEW`
1. [以军当学生面打死加沙小女孩](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%BD%93%E5%AD%A6%E7%94%9F%E9%9D%A2%E6%89%93%E6%AD%BB%E5%8A%A0%E6%B2%99%E5%B0%8F%E5%A5%B3%E5%AD%A9%23) `289.6K 🔥` `NEW`
1. [夸克 海外剧](https://s.weibo.com/weibo?q=%23%E5%A4%B8%E5%85%8B%20%E6%B5%B7%E5%A4%96%E5%89%A7%23) `173.8K 🔥` `NEW`
1. [伊斯兰堡已进入红色警戒](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%96%AF%E5%85%B0%E5%A0%A1%E5%B7%B2%E8%BF%9B%E5%85%A5%E7%BA%A2%E8%89%B2%E8%AD%A6%E6%88%92%23) `170.4K 🔥` `NEW`
1. [EXO开场唱MAMA](https://s.weibo.com/weibo?q=%23EXO%E5%BC%80%E5%9C%BA%E5%94%B1MAMA%23) `145.3K 🔥` `NEW`
1. [伦敦世乒赛种子位参赛名单](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E7%A7%8D%E5%AD%90%E4%BD%8D%E5%8F%82%E8%B5%9B%E5%90%8D%E5%8D%95%23) `96.5K 🔥` `NEW`
1. [虞书欣Ins更新](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3Ins%E6%9B%B4%E6%96%B0%23) `96.3K 🔥` `NEW`
1. [孙千晒和刘诗诗王安宇朴宝剑合照](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E6%99%92%E5%92%8C%E5%88%98%E8%AF%97%E8%AF%97%E7%8E%8B%E5%AE%89%E5%AE%87%E6%9C%B4%E5%AE%9D%E5%89%91%E5%90%88%E7%85%A7%23) `96.2K 🔥` `NEW`
1. [阚清子换气声 (Kan Qingzi's breathing sound)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%8D%A2%E6%B0%94%E5%A3%B0%23) `91.2K 🔥` `NEW`
1. [Tarzan被Junjia刷绝食](https://s.weibo.com/weibo?q=%23Tarzan%E8%A2%ABJunjia%E5%88%B7%E7%BB%9D%E9%A3%9F%23) `78.3K 🔥` `NEW`
1. [美伊谈判桌下可能还有雷](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%88%A4%E6%A1%8C%E4%B8%8B%E5%8F%AF%E8%83%BD%E8%BF%98%E6%9C%89%E9%9B%B7%23) `72.8K 🔥` `NEW`
1. [代斯看到镜头长度统计了](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%96%AF%E7%9C%8B%E5%88%B0%E9%95%9C%E5%A4%B4%E9%95%BF%E5%BA%A6%E7%BB%9F%E8%AE%A1%E4%BA%86%23) `72.7K 🔥` `NEW`
1. [华为Pura90系列配色](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura90%E7%B3%BB%E5%88%97%E9%85%8D%E8%89%B2%23) `72.7K 🔥` `NEW`
1. [魏大勋胡先煦十日终焉开机照](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E8%83%A1%E5%85%88%E7%85%A6%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%BC%80%E6%9C%BA%E7%85%A7%23) `72.7K 🔥` `NEW`
1. [张函瑞空降给粉丝唱歌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E7%A9%BA%E9%99%8D%E7%BB%99%E7%B2%89%E4%B8%9D%E5%94%B1%E6%AD%8C%23) `70.0K 🔥` `NEW`
1. [HLE战胜BFX](https://s.weibo.com/weibo?q=%23HLE%E6%88%98%E8%83%9CBFX%23) `58.5K 🔥` `NEW`
1. [中国科学家揭示左撇子真相](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%AE%B6%E6%8F%AD%E7%A4%BA%E5%B7%A6%E6%92%87%E5%AD%90%E7%9C%9F%E7%9B%B8%23) `293.9K 🔥` `+244%`
1. [穆祉丞 我爱杰哥](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E6%88%91%E7%88%B1%E6%9D%B0%E5%93%A5%23) `281.7K 🔥` `+110%`
1. [警方通报父母离婚不接年幼乘客 (Police report parents' divorce and refuse to pick up young passengers)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%88%B6%E6%AF%8D%E7%A6%BB%E5%A9%9A%E4%B8%8D%E6%8E%A5%E5%B9%B4%E5%B9%BC%E4%B9%98%E5%AE%A2%23) `229.9K 🔥` `+60%`
1. [田曦薇这肌肉居然不是p的](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%BF%99%E8%82%8C%E8%82%89%E5%B1%85%E7%84%B6%E4%B8%8D%E6%98%AFp%E7%9A%84%23) `229.0K 🔥` `+77%`
1. [交警回应私家车遭运钞车别车](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E5%9B%9E%E5%BA%94%E7%A7%81%E5%AE%B6%E8%BD%A6%E9%81%AD%E8%BF%90%E9%92%9E%E8%BD%A6%E5%88%AB%E8%BD%A6%23) `107.8K 🔥` `+25%`
1. [华为高尔夫手表今日开售 (Huawei golf watch goes on sale today)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%AB%98%E5%B0%94%E5%A4%AB%E6%89%8B%E8%A1%A8%E4%BB%8A%E6%97%A5%E5%BC%80%E5%94%AE%23) `577.7K 🔥`
1. [这些品牌竟然都是假洋牌](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%93%81%E7%89%8C%E7%AB%9F%E7%84%B6%E9%83%BD%E6%98%AF%E5%81%87%E6%B4%8B%E7%89%8C%23) `298.8K 🔥`
1. [网红一栗小莎子因癌症剃光头](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E5%9B%A0%E7%99%8C%E7%97%87%E5%89%83%E5%85%89%E5%A4%B4%23) `287.0K 🔥`
1. [浪姐直播 对口型 (Sister Lang live lip-syncing)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%20%E5%AF%B9%E5%8F%A3%E5%9E%8B%23) `284.6K 🔥`
1. [莫氏鸡煲公开秘方 (Mo’s Chicken Pot Secret Recipe Revealed)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%85%AC%E5%BC%80%E7%A7%98%E6%96%B9%23) `283.6K 🔥`
1. [白鹿晒晚餐](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%99%92%E6%99%9A%E9%A4%90%23) `280.5K 🔥`
1. [JDG战胜AL](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CAL%23) `278.6K 🔥`
1. [赵丽颖工作室疑似表达对捆绑的不满](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%96%91%E4%BC%BC%E8%A1%A8%E8%BE%BE%E5%AF%B9%E6%8D%86%E7%BB%91%E7%9A%84%E4%B8%8D%E6%BB%A1%23) `278.2K 🔥`
1. [黄瓜拌菠萝火了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E6%8B%8C%E8%8F%A0%E8%90%9D%E7%81%AB%E4%BA%86%23) `174.9K 🔥`
1. [为什么穿睡衣那么显瘦](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%A9%BF%E7%9D%A1%E8%A1%A3%E9%82%A3%E4%B9%88%E6%98%BE%E7%98%A6%23) `91.3K 🔥`
1. [孙燕姿演唱会花车巡场 (Stefanie Sun concert float parade)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8A%B1%E8%BD%A6%E5%B7%A1%E5%9C%BA%23) `76.3K 🔥`
1. [冰湖重生 (Ice lake rebirth)](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%23) `73.4K 🔥`
1. [男子微信群多次侮辱全红婵被拘 (Man was arrested for repeatedly insulting Quan Hongchan in WeChat group)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BE%AE%E4%BF%A1%E7%BE%A4%E5%A4%9A%E6%AC%A1%E4%BE%AE%E8%BE%B1%E5%85%A8%E7%BA%A2%E5%A9%B5%E8%A2%AB%E6%8B%98%23) `851.3K 🔥` `-27%`
1. [我国海水直接制氢取得研究新突破](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B5%B7%E6%B0%B4%E7%9B%B4%E6%8E%A5%E5%88%B6%E6%B0%A2%E5%8F%96%E5%BE%97%E7%A0%94%E7%A9%B6%E6%96%B0%E7%AA%81%E7%A0%B4%23) `671.7K 🔥` `-29%`
1. [阚清子团比孙怡团票数高 (Kan Qingzi’s group had more votes than Sun Yi’s group)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%9B%A2%E6%AF%94%E5%AD%99%E6%80%A1%E5%9B%A2%E7%A5%A8%E6%95%B0%E9%AB%98%23) `512.3K 🔥` `-87%`
1. [婴儿出生9斤一个月瘦到7斤](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%87%BA%E7%94%9F9%E6%96%A4%E4%B8%80%E4%B8%AA%E6%9C%88%E7%98%A6%E5%88%B07%E6%96%A4%23) `295.4K 🔥` `-35%`
1. [赵子琪淘汰](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E6%B7%98%E6%B1%B0%23) `291.1K 🔥` `-38%`
1. [周杰伦方回应演唱会划水](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%BC%94%E5%94%B1%E4%BC%9A%E5%88%92%E6%B0%B4%23) `231.1K 🔥` `-24%`
1. [孔刘老了](https://s.weibo.com/weibo?q=%23%E5%AD%94%E5%88%98%E8%80%81%E4%BA%86%23) `177.6K 🔥` `-22%`
1. [快乐家族在张杰演唱会团建](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E4%B9%90%E5%AE%B6%E6%97%8F%E5%9C%A8%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A2%E5%BB%BA%23) `169.4K 🔥` `-30%`
1. [冰湖重生官微删博](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%AE%98%E5%BE%AE%E5%88%A0%E5%8D%9A%23) `164.5K 🔥` `-45%`
1. [发现了辛苦了这句话的最佳回复](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%BA%86%E8%BE%9B%E8%8B%A6%E4%BA%86%E8%BF%99%E5%8F%A5%E8%AF%9D%E7%9A%84%E6%9C%80%E4%BD%B3%E5%9B%9E%E5%A4%8D%23) `95.4K 🔥` `-22%`
1. [奔跑吧ins取关TWS](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7ins%E5%8F%96%E5%85%B3TWS%23) `78.5K 🔥` `-30%`
1. [张凌赫新剧这一秒过火路透 (Zhang Linghe’s new drama goes too far in one second Reuters)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%96%B0%E5%89%A7%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%B7%AF%E9%80%8F%23) `78.2K 🔥` `-30%`
1. [95后女生回村养6万条蛇年入百万](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%A5%B3%E7%94%9F%E5%9B%9E%E6%9D%91%E5%85%BB6%E4%B8%87%E6%9D%A1%E8%9B%87%E5%B9%B4%E5%85%A5%E7%99%BE%E4%B8%87%23) `74.3K 🔥` `-34%`
1. [十日终焉开机 (Will be launched in ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%BC%80%E6%9C%BA%23) `68.8K 🔥` `-47%`
1. [吴世勋西装金丝眼镜 (Wu Shixun suit gold glasses)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E8%A5%BF%E8%A3%85%E9%87%91%E4%B8%9D%E7%9C%BC%E9%95%9C%23) `63.2K 🔥` `-27%`
1. [武汉雨后10斤鲤鱼上岸目击者发声](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E9%9B%A8%E5%90%8E10%E6%96%A4%E9%B2%A4%E9%B1%BC%E4%B8%8A%E5%B2%B8%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `60.2K 🔥` `-27%`

Updated at 2026-04-10 23:35:02

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
