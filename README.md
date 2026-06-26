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

1. [杨紫经纪人抱着杨紫哭 (Yang Zi’s manager hugged Yang Zi and cried)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%8A%B1%E7%9D%80%E6%9D%A8%E7%B4%AB%E5%93%AD%23) `390.0K 🔥` `NEW`
1. [法国4比1挪威](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD4%E6%AF%941%E6%8C%AA%E5%A8%81%23) `386.3K 🔥` `NEW`
1. [张凌赫关晓彤身高差](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%85%B3%E6%99%93%E5%BD%A4%E8%BA%AB%E9%AB%98%E5%B7%AE%23) `383.7K 🔥` `NEW`
1. [涉事男子妻子回应性侵争议称你情我愿](https://s.weibo.com/weibo?q=%23%E6%B6%89%E4%BA%8B%E7%94%B7%E5%AD%90%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E6%80%A7%E4%BE%B5%E4%BA%89%E8%AE%AE%E7%A7%B0%E4%BD%A0%E6%83%85%E6%88%91%E6%84%BF%23) `380.4K 🔥` `NEW`
1. [14岁少女谈吸毒后割腕](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%B0%91%E5%A5%B3%E8%B0%88%E5%90%B8%E6%AF%92%E5%90%8E%E5%89%B2%E8%85%95%23) `378.3K 🔥` `NEW`
1. [85花白玉兰全部战败](https://s.weibo.com/weibo?q=%2385%E8%8A%B1%E7%99%BD%E7%8E%89%E5%85%B0%E5%85%A8%E9%83%A8%E6%88%98%E8%B4%A5%23) `367.4K 🔥` `NEW`
1. [17岁患癌男生回应高考620分](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E6%82%A3%E7%99%8C%E7%94%B7%E7%94%9F%E5%9B%9E%E5%BA%94%E9%AB%98%E8%80%83620%E5%88%86%23) `357.1K 🔥` `NEW`
1. [高考查分](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%9F%A5%E5%88%86%23) `353.2K 🔥` `NEW`
1. [白玉兰](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `351.7K 🔥` `NEW`
1. [DeepSeek新晋独角兽第一](https://s.weibo.com/weibo?q=%23DeepSeek%E6%96%B0%E6%99%8B%E7%8B%AC%E8%A7%92%E5%85%BD%E7%AC%AC%E4%B8%80%23) `348.8K 🔥` `NEW`
1. [亚马尔首发](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E9%A6%96%E5%8F%91%23) `340.5K 🔥` `NEW`
1. [你是周杰伦那台上是谁](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%98%AF%E5%91%A8%E6%9D%B0%E4%BC%A6%E9%82%A3%E5%8F%B0%E4%B8%8A%E6%98%AF%E8%B0%81%23) `331.7K 🔥` `NEW`
1. [陈赫张子萱手牵手](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%BC%A0%E5%AD%90%E8%90%B1%E6%89%8B%E7%89%B5%E6%89%8B%23) `327.0K 🔥` `NEW`
1. [76岁老人运毒被抓后想靠高龄博同情](https://s.weibo.com/weibo?q=%2376%E5%B2%81%E8%80%81%E4%BA%BA%E8%BF%90%E6%AF%92%E8%A2%AB%E6%8A%93%E5%90%8E%E6%83%B3%E9%9D%A0%E9%AB%98%E9%BE%84%E5%8D%9A%E5%90%8C%E6%83%85%23) `323.1K 🔥` `NEW`
1. [高考699分女生说要让父母过好日子](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83699%E5%88%86%E5%A5%B3%E7%94%9F%E8%AF%B4%E8%A6%81%E8%AE%A9%E7%88%B6%E6%AF%8D%E8%BF%87%E5%A5%BD%E6%97%A5%E5%AD%90%23) `320.0K 🔥` `NEW`
1. [智谱股价为何是小米的100倍](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%B0%B1%E8%82%A1%E4%BB%B7%E4%B8%BA%E4%BD%95%E6%98%AF%E5%B0%8F%E7%B1%B3%E7%9A%84100%E5%80%8D%23) `317.6K 🔥` `NEW`
1. [国货拯救欧洲高温](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B4%A7%E6%8B%AF%E6%95%91%E6%AC%A7%E6%B4%B2%E9%AB%98%E6%B8%A9%23) `316.6K 🔥` `NEW`
1. [挪威1比4法国 (Norway 1 to 4 France)](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%811%E6%AF%944%E6%B3%95%E5%9B%BD%23) `2.1M 🔥` `+70%`
1. [哈兰德姆巴佩王不见王](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%8E%8B%E4%B8%8D%E8%A7%81%E7%8E%8B%23) `843.5K 🔥` `+30%`
1. [第38届大众电影百花奖 (The 38th Popular Film Hundred Flowers Awards)](https://s.weibo.com/weibo?q=%23%E7%AC%AC38%E5%B1%8A%E5%A4%A7%E4%BC%97%E7%94%B5%E5%BD%B1%E7%99%BE%E8%8A%B1%E5%A5%96%23) `744.8K 🔥` `+74%`
1. [藏海传 挂零](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A0%20%E6%8C%82%E9%9B%B6%23) `740.3K 🔥` `+129%`
1. [还以为五六点醒是身体出问题了](https://s.weibo.com/weibo?q=%23%E8%BF%98%E4%BB%A5%E4%B8%BA%E4%BA%94%E5%85%AD%E7%82%B9%E9%86%92%E6%98%AF%E8%BA%AB%E4%BD%93%E5%87%BA%E9%97%AE%E9%A2%98%E4%BA%86%23) `732.7K 🔥` `+169%`
1. [好多人发文祝贺杨紫 (Many people posted messages to congratulate Yang Zi)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E4%BA%BA%E5%8F%91%E6%96%87%E7%A5%9D%E8%B4%BA%E6%9D%A8%E7%B4%AB%23) `582.0K 🔥` `+65%`
1. [韩国队被全世界针对 (The Korean team is targeted around the world)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E8%A2%AB%E5%85%A8%E4%B8%96%E7%95%8C%E9%92%88%E5%AF%B9%23) `396.2K 🔥` `+130%`
1. [登贝莱帽子戏法 (Dembele hat trick)](https://s.weibo.com/weibo?q=%23%E7%99%BB%E8%B4%9D%E8%8E%B1%E5%B8%BD%E5%AD%90%E6%88%8F%E6%B3%95%23) `394.7K 🔥` `+104%`
1. [5.6亿云养牛骗局实际一头牛都没有](https://s.weibo.com/weibo?q=%235.6%E4%BA%BF%E4%BA%91%E5%85%BB%E7%89%9B%E9%AA%97%E5%B1%80%E5%AE%9E%E9%99%85%E4%B8%80%E5%A4%B4%E7%89%9B%E9%83%BD%E6%B2%A1%E6%9C%89%23) `394.1K 🔥` `+441%`
1. [塞内加尔5比0伊拉克](https://s.weibo.com/weibo?q=%23%E5%A1%9E%E5%86%85%E5%8A%A0%E5%B0%945%E6%AF%940%E4%BC%8A%E6%8B%89%E5%85%8B%23) `392.2K 🔥` `+72%`
1. [微信朋友圈互删清空对方全部痕迹 (Delete each other in WeChat Moments and clear all traces of each other)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%BA%92%E5%88%A0%E6%B8%85%E7%A9%BA%E5%AF%B9%E6%96%B9%E5%85%A8%E9%83%A8%E7%97%95%E8%BF%B9%23) `382.4K 🔥` `+92%`
1. [女子溪谷中玩水身体被卡石缝身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%BA%AA%E8%B0%B7%E4%B8%AD%E7%8E%A9%E6%B0%B4%E8%BA%AB%E4%BD%93%E8%A2%AB%E5%8D%A1%E7%9F%B3%E7%BC%9D%E8%BA%AB%E4%BA%A1%23) `376.4K 🔥` `+458%`
1. [两大90花都有主流视后了 (The two major 90-year-old girls are now mainstream viewers.)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A4%A790%E8%8A%B1%E9%83%BD%E6%9C%89%E4%B8%BB%E6%B5%81%E8%A7%86%E5%90%8E%E4%BA%86%23) `374.8K 🔥` `+110%`
1. [白玉兰获奖名单](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `372.3K 🔥` `+93%`
1. [姆巴佩只关注了樊振东一个真人 (Mbappe only follows Fan Zhendong, a real person)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8F%AA%E5%85%B3%E6%B3%A8%E4%BA%86%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%80%E4%B8%AA%E7%9C%9F%E4%BA%BA%23) `370.8K 🔥` `+593%`
1. [我打差评不是为了让店员丢工作](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%89%93%E5%B7%AE%E8%AF%84%E4%B8%8D%E6%98%AF%E4%B8%BA%E4%BA%86%E8%AE%A9%E5%BA%97%E5%91%98%E4%B8%A2%E5%B7%A5%E4%BD%9C%23) `364.8K 🔥` `+432%`
1. [杨幂 陪跑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E9%99%AA%E8%B7%91%23) `362.8K 🔥` `+119%`
1. [杨紫白玉兰视后](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%23) `361.0K 🔥` `+112%`
1. [发现在北京生活特别显年轻 (I find that living in Beijing makes me look particularly young.)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%94%9F%E6%B4%BB%E7%89%B9%E5%88%AB%E6%98%BE%E5%B9%B4%E8%BD%BB%23) `359.8K 🔥` `+344%`
1. [侯明昊淘汰 (Hou Minghao eliminated)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%B7%98%E6%B1%B0%23) `355.0K 🔥` `+271%`
1. [心疼沙溢](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E6%B2%99%E6%BA%A2%23) `350.1K 🔥` `+99%`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `347.0K 🔥` `+289%`
1. [85花 白玉兰陪跑](https://s.weibo.com/weibo?q=%2385%E8%8A%B1%20%E7%99%BD%E7%8E%89%E5%85%B0%E9%99%AA%E8%B7%91%23) `344.0K 🔥` `+380%`
1. [WTT美国大满贯2026 (WTT US Grand Slam 2026)](https://s.weibo.com/weibo?q=%23WTT%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF2026%23) `342.6K 🔥` `+208%`
1. [孙俪八提白玉兰像熹妃回宫](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%85%AB%E6%8F%90%E7%99%BD%E7%8E%89%E5%85%B0%E5%83%8F%E7%86%B9%E5%A6%83%E5%9B%9E%E5%AE%AB%23) `338.2K 🔥` `+367%`
1. [太平年横扫](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E6%A8%AA%E6%89%AB%23) `336.9K 🔥` `+432%`
1. [膝盖的大小居然和脸型一样](https://s.weibo.com/weibo?q=%23%E8%86%9D%E7%9B%96%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%B1%85%E7%84%B6%E5%92%8C%E8%84%B8%E5%9E%8B%E4%B8%80%E6%A0%B7%23) `335.4K 🔥` `+243%`
1. [长期沉溺短期关系可能影响心理](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E6%B2%89%E6%BA%BA%E7%9F%AD%E6%9C%9F%E5%85%B3%E7%B3%BB%E5%8F%AF%E8%83%BD%E5%BD%B1%E5%93%8D%E5%BF%83%E7%90%86%23) `329.6K 🔥` `+474%`
1. [难听 (ugly)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `325.1K 🔥` `+350%`
1. [张凌赫关晓彤主持人 (Zhang Linghe Guan Xiaotong Host)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%85%B3%E6%99%93%E5%BD%A4%E4%B8%BB%E6%8C%81%E4%BA%BA%23) `322.2K 🔥` `+557%`
1. [白玉兰我不知道你们咋了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%88%91%E4%B8%8D%E7%9F%A5%E9%81%93%E4%BD%A0%E4%BB%AC%E5%92%8B%E4%BA%86%23) `387.3K 🔥`

Updated at 2026-06-27 07:39:44

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
