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

1. [阚清子团比孙怡团票数高 (Kan Qingzi’s group had more votes than Sun Yi’s group)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%9B%A2%E6%AF%94%E5%AD%99%E6%80%A1%E5%9B%A2%E7%A5%A8%E6%95%B0%E9%AB%98%23) `4.1M 🔥` `NEW`
1. [OPPOFindX9sPro今日官宣](https://s.weibo.com/weibo?q=%23OPPOFindX9sPro%E4%BB%8A%E6%97%A5%E5%AE%98%E5%AE%A3%23) `907.0K 🔥` `NEW`
1. [赵子琪淘汰](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E6%B7%98%E6%B1%B0%23) `471.7K 🔥` `NEW`
1. [范丞丞花西子彩妆代言人](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%8A%B1%E8%A5%BF%E5%AD%90%E5%BD%A9%E5%A6%86%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `459.8K 🔥` `NEW`
1. [霍元甲编舞](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%85%83%E7%94%B2%E7%BC%96%E8%88%9E%23) `322.0K 🔥` `NEW`
1. [JDG战胜AL](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CAL%23) `316.8K 🔥` `NEW`
1. [网红一栗小莎子因癌症剃光头](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E5%9B%A0%E7%99%8C%E7%97%87%E5%89%83%E5%85%89%E5%A4%B4%23) `307.2K 🔥` `NEW`
1. [买车为什么一定要有动力冗余](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%BD%A6%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%89%E5%8A%A8%E5%8A%9B%E5%86%97%E4%BD%99%23) `302.7K 🔥` `NEW`
1. [孔刘老了](https://s.weibo.com/weibo?q=%23%E5%AD%94%E5%88%98%E8%80%81%E4%BA%86%23) `228.8K 🔥` `NEW`
1. [警方通报父母离婚不接年幼乘客](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%88%B6%E6%AF%8D%E7%A6%BB%E5%A9%9A%E4%B8%8D%E6%8E%A5%E5%B9%B4%E5%B9%BC%E4%B9%98%E5%AE%A2%23) `143.7K 🔥` `NEW`
1. [伊朗武装部队称随时准备开火 (Iran's armed forces say they are ready to open fire at any time)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A6%E8%A3%85%E9%83%A8%E9%98%9F%E7%A7%B0%E9%9A%8F%E6%97%B6%E5%87%86%E5%A4%87%E5%BC%80%E7%81%AB%23) `135.8K 🔥` `NEW`
1. [穆祉丞 我爱杰哥](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E6%88%91%E7%88%B1%E6%9D%B0%E5%93%A5%23) `134.3K 🔥` `NEW`
1. [田曦薇这肌肉居然不是p的](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%BF%99%E8%82%8C%E8%82%89%E5%B1%85%E7%84%B6%E4%B8%8D%E6%98%AFp%E7%9A%84%23) `129.0K 🔥` `NEW`
1. [孙燕姿演唱会花车巡场](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8A%B1%E8%BD%A6%E5%B7%A1%E5%9C%BA%23) `95.6K 🔥` `NEW`
1. [阚清子团全员晋级](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%9B%A2%E5%85%A8%E5%91%98%E6%99%8B%E7%BA%A7%23) `86.3K 🔥` `NEW`
1. [孙怡阚清子pk唱遗憾](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%98%9A%E6%B8%85%E5%AD%90pk%E5%94%B1%E9%81%97%E6%86%BE%23) `86.3K 🔥` `NEW`
1. [交警回应私家车遭运钞车别车](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E5%9B%9E%E5%BA%94%E7%A7%81%E5%AE%B6%E8%BD%A6%E9%81%AD%E8%BF%90%E9%92%9E%E8%BD%A6%E5%88%AB%E8%BD%A6%23) `85.9K 🔥` `NEW`
1. [星巴克女王体验卡](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%E5%A5%B3%E7%8E%8B%E4%BD%93%E9%AA%8C%E5%8D%A1%23) `85.6K 🔥` `NEW`
1. [中国科学家揭示左撇子真相](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E5%AE%B6%E6%8F%AD%E7%A4%BA%E5%B7%A6%E6%92%87%E5%AD%90%E7%9C%9F%E7%9B%B8%23) `85.4K 🔥` `NEW`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `85.2K 🔥` `NEW`
1. [曝折叠iPhone或采用iPad操作方式 (Folding iPhone or iPad operation method revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%8A%98%E5%8F%A0iPhone%E6%88%96%E9%87%87%E7%94%A8iPad%E6%93%8D%E4%BD%9C%E6%96%B9%E5%BC%8F%23) `84.7K 🔥` `NEW`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `84.7K 🔥` `NEW`
1. [一半一半现场 真唱](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8D%8A%E4%B8%80%E5%8D%8A%E7%8E%B0%E5%9C%BA%20%E7%9C%9F%E5%94%B1%23) `83.2K 🔥` `NEW`
1. [武汉雨后10斤鲤鱼上岸目击者发声](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E9%9B%A8%E5%90%8E10%E6%96%A4%E9%B2%A4%E9%B1%BC%E4%B8%8A%E5%B2%B8%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `82.6K 🔥` `NEW`
1. [男子微信群多次侮辱全红婵被拘 (Man was arrested for repeatedly insulting Quan Hongchan in WeChat group)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BE%AE%E4%BF%A1%E7%BE%A4%E5%A4%9A%E6%AC%A1%E4%BE%AE%E8%BE%B1%E5%85%A8%E7%BA%A2%E5%A9%B5%E8%A2%AB%E6%8B%98%23) `1.2M 🔥` `+1359%`
1. [孙怡组真唱](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%BB%84%E7%9C%9F%E5%94%B1%23) `871.1K 🔥` `+264%`
1. [疑似涉伊朗战事内幕交易被曝](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%B6%89%E4%BC%8A%E6%9C%97%E6%88%98%E4%BA%8B%E5%86%85%E5%B9%95%E4%BA%A4%E6%98%93%E8%A2%AB%E6%9B%9D%23) `471.7K 🔥` `+95%`
1. [这些品牌竟然都是假洋牌](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%93%81%E7%89%8C%E7%AB%9F%E7%84%B6%E9%83%BD%E6%98%AF%E5%81%87%E6%B4%8B%E7%89%8C%23) `322.4K 🔥` `+33%`
1. [赵丽颖工作室疑似表达对捆绑的不满](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%96%91%E4%BC%BC%E8%A1%A8%E8%BE%BE%E5%AF%B9%E6%8D%86%E7%BB%91%E7%9A%84%E4%B8%8D%E6%BB%A1%23) `318.3K 🔥` `+45%`
1. [白鹿晒晚餐](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%99%92%E6%99%9A%E9%A4%90%23) `313.4K 🔥` `+142%`
1. [JDG对战AL](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98AL%23) `310.0K 🔥` `+41%`
1. [浪姐一公直播 (Lang Jie Yigong live broadcast)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%80%E5%85%AC%E7%9B%B4%E6%92%AD%23) `309.0K 🔥` `+33%`
1. [周杰伦方回应演唱会划水](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%BC%94%E5%94%B1%E4%BC%9A%E5%88%92%E6%B0%B4%23) `304.7K 🔥` `+32%`
1. [波兰国家队助教晨跑时晕倒去世](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E5%85%B0%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%8A%A9%E6%95%99%E6%99%A8%E8%B7%91%E6%97%B6%E6%99%95%E5%80%92%E5%8E%BB%E4%B8%96%23) `87.5K 🔥` `+32%`
1. [吴世勋西装金丝眼镜 (Wu Shixun suit gold glasses)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E8%A5%BF%E8%A3%85%E9%87%91%E4%B8%9D%E7%9C%BC%E9%95%9C%23) `86.4K 🔥` `+34%`
1. [我国海水直接制氢取得研究新突破](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B5%B7%E6%B0%B4%E7%9B%B4%E6%8E%A5%E5%88%B6%E6%B0%A2%E5%8F%96%E5%BE%97%E7%A0%94%E7%A9%B6%E6%96%B0%E7%AA%81%E7%A0%B4%23) `947.5K 🔥`
1. [莫氏鸡煲公开秘方 (Mo’s Chicken Pot Secret Recipe Revealed)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%85%AC%E5%BC%80%E7%A7%98%E6%96%B9%23) `270.8K 🔥`
1. [快乐家族在张杰演唱会团建](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E4%B9%90%E5%AE%B6%E6%97%8F%E5%9C%A8%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A2%E5%BB%BA%23) `242.4K 🔥`
1. [黄瓜拌菠萝火了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E6%8B%8C%E8%8F%A0%E8%90%9D%E7%81%AB%E4%BA%86%23) `200.8K 🔥`
1. [十日终焉开机 (Will be launched in ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%BC%80%E6%9C%BA%23) `130.1K 🔥`
1. [95后女生回村养6万条蛇年入百万](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%A5%B3%E7%94%9F%E5%9B%9E%E6%9D%91%E5%85%BB6%E4%B8%87%E6%9D%A1%E8%9B%87%E5%B9%B4%E5%85%A5%E7%99%BE%E4%B8%87%23) `111.9K 🔥`
1. [张凌赫新剧这一秒过火路透](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%96%B0%E5%89%A7%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%B7%AF%E9%80%8F%23) `111.0K 🔥`
1. [为什么穿睡衣那么显瘦](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%A9%BF%E7%9D%A1%E8%A1%A3%E9%82%A3%E4%B9%88%E6%98%BE%E7%98%A6%23) `98.7K 🔥`
1. [金正恩会见王毅](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%AD%A3%E6%81%A9%E4%BC%9A%E8%A7%81%E7%8E%8B%E6%AF%85%23) `85.3K 🔥`
1. [冰湖重生 (Ice lake rebirth)](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%23) `84.7K 🔥`
1. [中方回应日本降级中日关系 (China responds to Japan's downgrade of Sino-Japanese relations)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E9%99%8D%E7%BA%A7%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%23) `84.5K 🔥`
1. [鸡煲老板遇撞脸刘雨鑫记者场面失控](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E9%81%87%E6%92%9E%E8%84%B8%E5%88%98%E9%9B%A8%E9%91%AB%E8%AE%B0%E8%80%85%E5%9C%BA%E9%9D%A2%E5%A4%B1%E6%8E%A7%23) `82.0K 🔥`
1. [婴儿出生9斤一个月瘦到7斤](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%87%BA%E7%94%9F9%E6%96%A4%E4%B8%80%E4%B8%AA%E6%9C%88%E7%98%A6%E5%88%B07%E6%96%A4%23) `455.6K 🔥` `-55%`
1. [浪姐直播 对口型 (Sister Lang live lip-syncing)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%20%E5%AF%B9%E5%8F%A3%E5%9E%8B%23) `314.7K 🔥` `-88%`
1. [冰湖重生官微删博](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%AE%98%E5%BE%AE%E5%88%A0%E5%8D%9A%23) `301.4K 🔥` `-35%`
1. [发现了辛苦了这句话的最佳回复](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%BA%86%E8%BE%9B%E8%8B%A6%E4%BA%86%E8%BF%99%E5%8F%A5%E8%AF%9D%E7%9A%84%E6%9C%80%E4%BD%B3%E5%9B%9E%E5%A4%8D%23) `122.4K 🔥` `-39%`
1. [奔跑吧ins取关TWS](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7ins%E5%8F%96%E5%85%B3TWS%23) `111.7K 🔥` `-50%`

Updated at 2026-04-10 22:40:14

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
