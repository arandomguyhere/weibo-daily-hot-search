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

1. [比利时让2追3 (Belgium let 2 chase 3)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E8%AE%A92%E8%BF%BD3%23) `2.6M 🔥` `NEW`
1. [小小红船已变身巍巍巨轮](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B0%8F%E7%BA%A2%E8%88%B9%E5%B7%B2%E5%8F%98%E8%BA%AB%E5%B7%8D%E5%B7%8D%E5%B7%A8%E8%BD%AE%23) `834.8K 🔥` `NEW`
1. [王楚钦孙颖莎vsA勒布伦大藤沙月](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8EvsA%E5%8B%92%E5%B8%83%E4%BC%A6%E5%A4%A7%E8%97%A4%E6%B2%99%E6%9C%88%23) `593.9K 🔥` `NEW`
1. [李斌感谢母校北大](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%8C%E6%84%9F%E8%B0%A2%E6%AF%8D%E6%A0%A1%E5%8C%97%E5%A4%A7%23) `178.8K 🔥` `NEW`
1. [全球最美女孩结婚](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%9C%80%E7%BE%8E%E5%A5%B3%E5%AD%A9%E7%BB%93%E5%A9%9A%23) `178.1K 🔥` `NEW`
1. [比利时点球绝杀](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E7%82%B9%E7%90%83%E7%BB%9D%E6%9D%80%23) `176.3K 🔥` `NEW`
1. [霍震霆回应霍启山娜然结婚传闻](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E9%9C%87%E9%9C%86%E5%9B%9E%E5%BA%94%E9%9C%8D%E5%90%AF%E5%B1%B1%E5%A8%9C%E7%84%B6%E7%BB%93%E5%A9%9A%E4%BC%A0%E9%97%BB%23) `171.0K 🔥` `NEW`
1. [霍启山曾为章子怡缺席家族聚会](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%B1%B1%E6%9B%BE%E4%B8%BA%E7%AB%A0%E5%AD%90%E6%80%A1%E7%BC%BA%E5%B8%AD%E5%AE%B6%E6%97%8F%E8%81%9A%E4%BC%9A%23) `169.9K 🔥` `NEW`
1. [刘宇宁顶胯那几下](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E9%A1%B6%E8%83%AF%E9%82%A3%E5%87%A0%E4%B8%8B%23) `164.8K 🔥` `NEW`
1. [孙颖莎给勒布伦打趴下了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%BB%99%E5%8B%92%E5%B8%83%E4%BC%A6%E6%89%93%E8%B6%B4%E4%B8%8B%E4%BA%86%23) `163.2K 🔥` `NEW`
1. [香港演员黄一山儿子北大硕士毕业 (Hong Kong actor Huang Yishan’s son graduated from Peking University with a master’s degree)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%BC%94%E5%91%98%E9%BB%84%E4%B8%80%E5%B1%B1%E5%84%BF%E5%AD%90%E5%8C%97%E5%A4%A7%E7%A1%95%E5%A3%AB%E6%AF%95%E4%B8%9A%23) `161.2K 🔥` `NEW`
1. [卢卡库破门](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E5%8D%A1%E5%BA%93%E7%A0%B4%E9%97%A8%23) `160.1K 🔥` `NEW`
1. [王楚钦孙颖莎逆转进四强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E9%80%86%E8%BD%AC%E8%BF%9B%E5%9B%9B%E5%BC%BA%23) `158.6K 🔥` `NEW`
1. [孙颖莎王楚钦让二追三晋级四强](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89%E6%99%8B%E7%BA%A7%E5%9B%9B%E5%BC%BA%23) `154.0K 🔥` `NEW`
1. [杨紫时代面孔月度人物](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%97%B6%E4%BB%A3%E9%9D%A2%E5%AD%94%E6%9C%88%E5%BA%A6%E4%BA%BA%E7%89%A9%23) `153.3K 🔥` `NEW`
1. [塞内加尔 可惜](https://s.weibo.com/weibo?q=%23%E5%A1%9E%E5%86%85%E5%8A%A0%E5%B0%94%20%E5%8F%AF%E6%83%9C%23) `150.0K 🔥` `NEW`
1. [比利时 内讧](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%20%E5%86%85%E8%AE%A7%23) `2.7M 🔥` `+2957%`
1. [胃癌晚期特效药99万一针多活2.43个月](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E7%89%B9%E6%95%88%E8%8D%AF99%E4%B8%87%E4%B8%80%E9%92%88%E5%A4%9A%E6%B4%BB2.43%E4%B8%AA%E6%9C%88%23) `769.1K 🔥` `+313%`
1. [陈晓被打耳光路透 (Chen Xiao was slapped Reuters)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%99%93%E8%A2%AB%E6%89%93%E8%80%B3%E5%85%89%E8%B7%AF%E9%80%8F%23) `600.9K 🔥` `+248%`
1. [英格兰2比1民主刚果](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B02%E6%AF%941%E6%B0%91%E4%B8%BB%E5%88%9A%E6%9E%9C%23) `537.9K 🔥` `+84%`
1. [曾志伟婉拒了成毅粉丝](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E5%BF%97%E4%BC%9F%E5%A9%89%E6%8B%92%E4%BA%86%E6%88%90%E6%AF%85%E7%B2%89%E4%B8%9D%23) `235.0K 🔥` `+203%`
1. [机器人伴侣你会买吗 (Would you buy a robot companion?)](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BC%B4%E4%BE%A3%E4%BD%A0%E4%BC%9A%E4%B9%B0%E5%90%97%23) `179.5K 🔥` `+266%`
1. [人工智能冲击婚纱影楼](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%86%B2%E5%87%BB%E5%A9%9A%E7%BA%B1%E5%BD%B1%E6%A5%BC%23) `177.6K 🔥` `+53%`
1. [儿子嫌饭难吃扬言杀全家被父砍伤](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%AB%8C%E9%A5%AD%E9%9A%BE%E5%90%83%E6%89%AC%E8%A8%80%E6%9D%80%E5%85%A8%E5%AE%B6%E8%A2%AB%E7%88%B6%E7%A0%8D%E4%BC%A4%23) `176.6K 🔥` `+148%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `174.5K 🔥` `+195%`
1. [英格兰 不是点球](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%20%E4%B8%8D%E6%98%AF%E7%82%B9%E7%90%83%23) `174.1K 🔥` `+154%`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `172.4K 🔥` `+378%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `171.3K 🔥` `+190%`
1. [把孩子托举到能独立生存](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E5%AD%A9%E5%AD%90%E6%89%98%E4%B8%BE%E5%88%B0%E8%83%BD%E7%8B%AC%E7%AB%8B%E7%94%9F%E5%AD%98%23) `169.2K 🔥` `+211%`
1. [丁禹兮 姜珮瑶 (Ding Yuxi Jiang Peiyao)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%20%E5%A7%9C%E7%8F%AE%E7%91%B6%23) `168.8K 🔥` `+187%`
1. [英格兰](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `167.5K 🔥` `+153%`
1. [金价 (gold price)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `167.1K 🔥` `+193%`
1. [小狗理发被剪成芒果核](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E7%90%86%E5%8F%91%E8%A2%AB%E5%89%AA%E6%88%90%E8%8A%92%E6%9E%9C%E6%A0%B8%23) `166.3K 🔥` `+127%`
1. [丁程鑫时刻记得自己是周柯宇哥哥 (Ding Chengxin always remembers that he is Zhou Keyu’s brother)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%97%B6%E5%88%BB%E8%AE%B0%E5%BE%97%E8%87%AA%E5%B7%B1%E6%98%AF%E5%91%A8%E6%9F%AF%E5%AE%87%E5%93%A5%E5%93%A5%23) `165.0K 🔥` `+383%`
1. [今年我国首个台风来了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%88%91%E5%9B%BD%E9%A6%96%E4%B8%AA%E5%8F%B0%E9%A3%8E%E6%9D%A5%E4%BA%86%23) `164.1K 🔥` `+308%`
1. [凯恩梅开二度 (Kane scores twice)](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `162.5K 🔥` `+190%`
1. [A股将取消5%涨跌停板](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B0%86%E5%8F%96%E6%B6%885%25%E6%B6%A8%E8%B7%8C%E5%81%9C%E6%9D%BF%23) `160.5K 🔥` `+307%`
1. [湖人交易得到凯斯勒](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E4%BA%A4%E6%98%93%E5%BE%97%E5%88%B0%E5%87%AF%E6%96%AF%E5%8B%92%23) `158.9K 🔥` `+168%`
1. [四渡赤水获金鸡奖特别奖](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E6%B8%A1%E8%B5%A4%E6%B0%B4%E8%8E%B7%E9%87%91%E9%B8%A1%E5%A5%96%E7%89%B9%E5%88%AB%E5%A5%96%23) `157.3K 🔥` `+395%`
1. [大猫挑衅小猫结果被一招压制](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%8C%AB%E6%8C%91%E8%A1%85%E5%B0%8F%E7%8C%AB%E7%BB%93%E6%9E%9C%E8%A2%AB%E4%B8%80%E6%8B%9B%E5%8E%8B%E5%88%B6%23) `156.8K 🔥` `+352%`
1. [恋与深空价值观偏差是病灶 (Love and deep space value deviation are the focus)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%BB%B7%E5%80%BC%E8%A7%82%E5%81%8F%E5%B7%AE%E6%98%AF%E7%97%85%E7%81%B6%23) `156.2K 🔥` `+301%`
1. [你们都显老到什么程度了 (How old do you all look?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E9%83%BD%E6%98%BE%E8%80%81%E5%88%B0%E4%BB%80%E4%B9%88%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `155.6K 🔥` `+350%`
1. [英格兰被漏判点球](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E8%A2%AB%E6%BC%8F%E5%88%A4%E7%82%B9%E7%90%83%23) `154.5K 🔥` `+120%`
1. [晚期胃癌药99万元一人份](https://s.weibo.com/weibo?q=%23%E6%99%9A%E6%9C%9F%E8%83%83%E7%99%8C%E8%8D%AF99%E4%B8%87%E5%85%83%E4%B8%80%E4%BA%BA%E4%BB%BD%23) `152.2K 🔥` `+369%`
1. [母鸡俯身把小鸡背在身上](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E9%B8%A1%E4%BF%AF%E8%BA%AB%E6%8A%8A%E5%B0%8F%E9%B8%A1%E8%83%8C%E5%9C%A8%E8%BA%AB%E4%B8%8A%23) `151.4K 🔥` `+252%`
1. [真实的乡镇公务员是这样的](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%AE%9E%E7%9A%84%E4%B9%A1%E9%95%87%E5%85%AC%E5%8A%A1%E5%91%98%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `151.1K 🔥` `+277%`
1. [英格兰vs民主刚果 (England vs Democratic Congo)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E6%B0%91%E4%B8%BB%E5%88%9A%E6%9E%9C%23) `149.0K 🔥` `+224%`
1. [赖斯燃尽了](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%96%AF%E7%87%83%E5%B0%BD%E4%BA%86%23) `148.6K 🔥` `+199%`
1. [比利时vs塞内加尔 (Belgium vs Senegal)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6vs%E5%A1%9E%E5%86%85%E5%8A%A0%E5%B0%94%23) `175.4K 🔥` `-70%`

Updated at 2026-07-02 07:45:19

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
