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

1. [父亲退还18.8万彩礼新娘发声 (Bride speaks out after father returns 188,000 yuan gift)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E9%80%80%E8%BF%9818.8%E4%B8%87%E5%BD%A9%E7%A4%BC%E6%96%B0%E5%A8%98%E5%8F%91%E5%A3%B0%23) `1.2M 🔥` `NEW`
1. [怪不得高启强不让他弟碰毒](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%AB%98%E5%90%AF%E5%BC%BA%E4%B8%8D%E8%AE%A9%E4%BB%96%E5%BC%9F%E7%A2%B0%E6%AF%92%23) `863.7K 🔥` `NEW`
1. [2026年全国两会新闻中心启用](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E5%85%A8%E5%9B%BD%E4%B8%A4%E4%BC%9A%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83%E5%90%AF%E7%94%A8%23) `657.2K 🔥` `NEW`
1. [中国人民银行公告](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E9%93%B6%E8%A1%8C%E5%85%AC%E5%91%8A%23) `346.1K 🔥` `NEW`
1. [魅族公告](https://s.weibo.com/weibo?q=%23%E9%AD%85%E6%97%8F%E5%85%AC%E5%91%8A%23) `331.1K 🔥` `NEW`
1. [网约车电车晕车的原因](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A6%E8%BD%A6%E7%94%B5%E8%BD%A6%E6%99%95%E8%BD%A6%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `321.0K 🔥` `NEW`
1. [爱奇艺利润暴跌七成](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E5%88%A9%E6%B6%A6%E6%9A%B4%E8%B7%8C%E4%B8%83%E6%88%90%23) `218.1K 🔥` `NEW`
1. [6组数据看流动中国活力画卷](https://s.weibo.com/weibo?q=%236%E7%BB%84%E6%95%B0%E6%8D%AE%E7%9C%8B%E6%B5%81%E5%8A%A8%E4%B8%AD%E5%9B%BD%E6%B4%BB%E5%8A%9B%E7%94%BB%E5%8D%B7%23) `211.2K 🔥` `NEW`
1. [将微胖还给真正胖的人](https://s.weibo.com/weibo?q=%23%E5%B0%86%E5%BE%AE%E8%83%96%E8%BF%98%E7%BB%99%E7%9C%9F%E6%AD%A3%E8%83%96%E7%9A%84%E4%BA%BA%23) `209.2K 🔥` `NEW`
1. [金泰梨对杨幂比心](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E6%A2%A8%E5%AF%B9%E6%9D%A8%E5%B9%82%E6%AF%94%E5%BF%83%23) `199.1K 🔥` `NEW`
1. [FIBA社媒称中国男篮偷走胜利 (FIBA social media said the Chinese men's basketball team stole the victory)](https://s.weibo.com/weibo?q=%23FIBA%E7%A4%BE%E5%AA%92%E7%A7%B0%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E5%81%B7%E8%B5%B0%E8%83%9C%E5%88%A9%23) `186.4K 🔥` `NEW`
1. [逐玉定档](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%AE%9A%E6%A1%A3%23) `184.4K 🔥` `NEW`
1. [育儿嫂疑在房间打孩子被玻璃照出](https://s.weibo.com/weibo?q=%23%E8%82%B2%E5%84%BF%E5%AB%82%E7%96%91%E5%9C%A8%E6%88%BF%E9%97%B4%E6%89%93%E5%AD%A9%E5%AD%90%E8%A2%AB%E7%8E%BB%E7%92%83%E7%85%A7%E5%87%BA%23) `184.0K 🔥` `NEW`
1. [杨幂Prada顶级待遇](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82Prada%E9%A1%B6%E7%BA%A7%E5%BE%85%E9%81%87%23) `182.8K 🔥` `NEW`
1. [巴基斯坦对阿富汗政府公开宣战](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E5%AF%B9%E9%98%BF%E5%AF%8C%E6%B1%97%E6%94%BF%E5%BA%9C%E5%85%AC%E5%BC%80%E5%AE%A3%E6%88%98%23) `181.3K 🔥` `NEW`
1. [疑似白宇前女友发文](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%99%BD%E5%AE%87%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%8F%91%E6%96%87%23) `180.0K 🔥` `NEW`
1. [开工1天签5千万单的女子再签4千万](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B7%A51%E5%A4%A9%E7%AD%BE5%E5%8D%83%E4%B8%87%E5%8D%95%E7%9A%84%E5%A5%B3%E5%AD%90%E5%86%8D%E7%AD%BE4%E5%8D%83%E4%B8%87%23) `179.6K 🔥` `NEW`
1. [网传现在就出发4没有金晨](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%E6%B2%A1%E6%9C%89%E9%87%91%E6%99%A8%23) `178.2K 🔥` `NEW`
1. [巴基斯坦空袭阿富汗](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E7%A9%BA%E8%A2%AD%E9%98%BF%E5%AF%8C%E6%B1%97%23) `162.0K 🔥` `NEW`
1. [宝格丽代言人名单](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%90%8D%E5%8D%95%23) `161.4K 🔥` `NEW`
1. [曝白宇还和刘萌萌在一起 (It was revealed that Bai Yu was still with Liu Mengmeng)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E5%AE%87%E8%BF%98%E5%92%8C%E5%88%98%E8%90%8C%E8%90%8C%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `157.9K 🔥` `NEW`
1. [谷爱凌回应九亿少女的梦](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94%E4%B9%9D%E4%BA%BF%E5%B0%91%E5%A5%B3%E7%9A%84%E6%A2%A6%23) `149.8K 🔥` `NEW`
1. [徐志胜贴脸开大宋妍霏臭脸](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E8%B4%B4%E8%84%B8%E5%BC%80%E5%A4%A7%E5%AE%8B%E5%A6%8D%E9%9C%8F%E8%87%AD%E8%84%B8%23) `148.2K 🔥` `NEW`
1. [最容易胖肚子的一种食物](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%AE%B9%E6%98%93%E8%83%96%E8%82%9A%E5%AD%90%E7%9A%84%E4%B8%80%E7%A7%8D%E9%A3%9F%E7%89%A9%23) `145.4K 🔥` `NEW`
1. [BLACKPINK 回归](https://s.weibo.com/weibo?q=%23BLACKPINK%20%E5%9B%9E%E5%BD%92%23) `145.3K 🔥` `NEW`
1. [勾中指竟然是个养生动作](https://s.weibo.com/weibo?q=%23%E5%8B%BE%E4%B8%AD%E6%8C%87%E7%AB%9F%E7%84%B6%E6%98%AF%E4%B8%AA%E5%85%BB%E7%94%9F%E5%8A%A8%E4%BD%9C%23) `138.1K 🔥` `NEW`
1. [沈月个人工作室](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E4%B8%AA%E4%BA%BA%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `127.3K 🔥` `NEW`
1. [智能手机全面涨价才刚开始](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%83%BD%E6%89%8B%E6%9C%BA%E5%85%A8%E9%9D%A2%E6%B6%A8%E4%BB%B7%E6%89%8D%E5%88%9A%E5%BC%80%E5%A7%8B%23) `119.4K 🔥` `NEW`
1. [柳智敏G社出图](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8FG%E7%A4%BE%E5%87%BA%E5%9B%BE%23) `110.3K 🔥` `NEW`
1. [女子花8800寻猫发现没丢想退款遭拒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B18800%E5%AF%BB%E7%8C%AB%E5%8F%91%E7%8E%B0%E6%B2%A1%E4%B8%A2%E6%83%B3%E9%80%80%E6%AC%BE%E9%81%AD%E6%8B%92%23) `109.4K 🔥` `NEW`
1. [方圆脸如何颜值最大化 (How to maximize the appearance of square and round faces)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E8%84%B8%E5%A6%82%E4%BD%95%E9%A2%9C%E5%80%BC%E6%9C%80%E5%A4%A7%E5%8C%96%23) `108.4K 🔥` `NEW`
1. [何炅亲爱的客栈版十万个为什么](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E4%BA%B2%E7%88%B1%E7%9A%84%E5%AE%A2%E6%A0%88%E7%89%88%E5%8D%81%E4%B8%87%E4%B8%AA%E4%B8%BA%E4%BB%80%E4%B9%88%23) `99.9K 🔥` `NEW`
1. [巴音布鲁克的风吹到了洛杉矶](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%9F%B3%E5%B8%83%E9%B2%81%E5%85%8B%E7%9A%84%E9%A3%8E%E5%90%B9%E5%88%B0%E4%BA%86%E6%B4%9B%E6%9D%89%E7%9F%B6%23) `99.7K 🔥` `NEW`
1. [美国发动网攻侵占全球虚拟资产](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%91%E5%8A%A8%E7%BD%91%E6%94%BB%E4%BE%B5%E5%8D%A0%E5%85%A8%E7%90%83%E8%99%9A%E6%8B%9F%E8%B5%84%E4%BA%A7%23) `98.5K 🔥` `NEW`
1. [1男4女5胞胎出生画面让人动容](https://s.weibo.com/weibo?q=%231%E7%94%B74%E5%A5%B35%E8%83%9E%E8%83%8E%E5%87%BA%E7%94%9F%E7%94%BB%E9%9D%A2%E8%AE%A9%E4%BA%BA%E5%8A%A8%E5%AE%B9%23) `98.1K 🔥` `NEW`
1. [田曦薇 樊长玉](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%A8%8A%E9%95%BF%E7%8E%89%23) `98.1K 🔥` `NEW`
1. [官方通报老人因无人抬担架延误离世](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E8%80%81%E4%BA%BA%E5%9B%A0%E6%97%A0%E4%BA%BA%E6%8A%AC%E6%8B%85%E6%9E%B6%E5%BB%B6%E8%AF%AF%E7%A6%BB%E4%B8%96%23) `95.5K 🔥` `NEW`
1. [爱奇艺会员和广告双双走低](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E4%BC%9A%E5%91%98%E5%92%8C%E5%B9%BF%E5%91%8A%E5%8F%8C%E5%8F%8C%E8%B5%B0%E4%BD%8E%23) `95.1K 🔥` `NEW`
1. [吴孟达离开已经五年了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AD%9F%E8%BE%BE%E7%A6%BB%E5%BC%80%E5%B7%B2%E7%BB%8F%E4%BA%94%E5%B9%B4%E4%BA%86%23) `93.6K 🔥` `NEW`
1. [不建议在朋友圈展示技能](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%9C%A8%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%B1%95%E7%A4%BA%E6%8A%80%E8%83%BD%23) `92.1K 🔥` `NEW`
1. [王安宇 毕正明的证明 (Proof of Wang Anyu Bi Zhengming)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%20%E6%AF%95%E6%AD%A3%E6%98%8E%E7%9A%84%E8%AF%81%E6%98%8E%23) `87.8K 🔥` `NEW`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `310.4K 🔥` `+155%`
1. [00后女骑手送餐遭顾客骚扰报警](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%A5%B3%E9%AA%91%E6%89%8B%E9%80%81%E9%A4%90%E9%81%AD%E9%A1%BE%E5%AE%A2%E9%AA%9A%E6%89%B0%E6%8A%A5%E8%AD%A6%23) `138.6K 🔥` `+47%`
1. [庆奶吻戏男主回复又老又年轻靠滤镜](https://s.weibo.com/weibo?q=%23%E5%BA%86%E5%A5%B6%E5%90%BB%E6%88%8F%E7%94%B7%E4%B8%BB%E5%9B%9E%E5%A4%8D%E5%8F%88%E8%80%81%E5%8F%88%E5%B9%B4%E8%BD%BB%E9%9D%A0%E6%BB%A4%E9%95%9C%23) `185.3K 🔥`
1. [好潦草的烟花真是设计鬼才](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%BD%A6%E8%8D%89%E7%9A%84%E7%83%9F%E8%8A%B1%E7%9C%9F%E6%98%AF%E8%AE%BE%E8%AE%A1%E9%AC%BC%E6%89%8D%23) `99.5K 🔥`
1. [南京档案馆找到谷爱凌外婆户籍卡 (Grandma Gu Ailing’s household registration card found in Nanjing Archives)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E6%A1%A3%E6%A1%88%E9%A6%86%E6%89%BE%E5%88%B0%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%96%E5%A9%86%E6%88%B7%E7%B1%8D%E5%8D%A1%23) `297.2K 🔥` `-42%`
1. [四六级查分 (Level 4 and Level 6 Score Check)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%9F%A5%E5%88%86%23) `264.5K 🔥` `-75%`
1. [六级](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%23) `100.6K 🔥` `-31%`
1. [陈丽君台湾巡演人气大爆](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E5%8F%B0%E6%B9%BE%E5%B7%A1%E6%BC%94%E4%BA%BA%E6%B0%94%E5%A4%A7%E7%88%86%23) `91.7K 🔥` `-57%`

Updated at 2026-02-27 11:30:44

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
