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

1. [浪姐改赛制 (Sister Lang changes the competition system)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%94%B9%E8%B5%9B%E5%88%B6%23) `945.0K 🔥` `NEW`
1. [张若昀发唐艺昕直拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%8F%91%E5%94%90%E8%89%BA%E6%98%95%E7%9B%B4%E6%8B%8D%23) `389.0K 🔥` `NEW`
1. [网传居家打金零损耗是谣言](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%B1%85%E5%AE%B6%E6%89%93%E9%87%91%E9%9B%B6%E6%8D%9F%E8%80%97%E6%98%AF%E8%B0%A3%E8%A8%80%23) `366.2K 🔥` `NEW`
1. [没有一诺的AG](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E4%B8%80%E8%AF%BA%E7%9A%84AG%23) `165.4K 🔥` `NEW`
1. [黄灿灿赢了何宣林](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E8%B5%A2%E4%BA%86%E4%BD%95%E5%AE%A3%E6%9E%97%23) `165.1K 🔥` `NEW`
1. [浪姐今晚不淘汰](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BB%8A%E6%99%9A%E4%B8%8D%E6%B7%98%E6%B1%B0%23) `161.4K 🔥` `NEW`
1. [王俊凯东方公子](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%9C%E6%96%B9%E5%85%AC%E5%AD%90%23) `159.3K 🔥` `NEW`
1. [金昊已被执行死刑](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%98%8A%E5%B7%B2%E8%A2%AB%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `158.2K 🔥` `NEW`
1. [女子称猫咪被卡自动猫砂盆死亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E7%8C%AB%E5%92%AA%E8%A2%AB%E5%8D%A1%E8%87%AA%E5%8A%A8%E7%8C%AB%E7%A0%82%E7%9B%86%E6%AD%BB%E4%BA%A1%23) `156.5K 🔥` `NEW`
1. [多地派出所回应身份证并非全国统一](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E6%B4%BE%E5%87%BA%E6%89%80%E5%9B%9E%E5%BA%94%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%B9%B6%E9%9D%9E%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%23) `155.1K 🔥` `NEW`
1. [唐艺昕因皮肤原因4年未拍戏 (Tang Yixin stopped filming for 4 years due to skin reasons)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%9B%A0%E7%9A%AE%E8%82%A4%E5%8E%9F%E5%9B%A04%E5%B9%B4%E6%9C%AA%E6%8B%8D%E6%88%8F%23) `154.0K 🔥` `NEW`
1. [兽用麻醉药被抑郁的未成年人盯上](https://s.weibo.com/weibo?q=%23%E5%85%BD%E7%94%A8%E9%BA%BB%E9%86%89%E8%8D%AF%E8%A2%AB%E6%8A%91%E9%83%81%E7%9A%84%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9B%AF%E4%B8%8A%23) `151.5K 🔥` `NEW`
1. [何宣林 黑马](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%20%E9%BB%91%E9%A9%AC%23) `150.1K 🔥` `NEW`
1. [浪姐人情世故太明显了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%BA%E6%83%85%E4%B8%96%E6%95%85%E5%A4%AA%E6%98%8E%E6%98%BE%E4%BA%86%23) `147.7K 🔥` `NEW`
1. [乌兰图雅骑着马上台接受采访](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%E9%AA%91%E7%9D%80%E9%A9%AC%E4%B8%8A%E5%8F%B0%E6%8E%A5%E5%8F%97%E9%87%87%E8%AE%BF%23) `131.1K 🔥` `NEW`
1. [cpb减肥法](https://s.weibo.com/weibo?q=%23cpb%E5%87%8F%E8%82%A5%E6%B3%95%23) `130.2K 🔥` `NEW`
1. [东部战区发布海报为了这个省](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E5%8F%91%E5%B8%83%E6%B5%B7%E6%8A%A5%E4%B8%BA%E4%BA%86%E8%BF%99%E4%B8%AA%E7%9C%81%23) `111.1K 🔥` `NEW`
1. [美证实一架战斗机在伊境内被击落](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%AF%81%E5%AE%9E%E4%B8%80%E6%9E%B6%E6%88%98%E6%96%97%E6%9C%BA%E5%9C%A8%E4%BC%8A%E5%A2%83%E5%86%85%E8%A2%AB%E5%87%BB%E8%90%BD%23) `109.8K 🔥` `NEW`
1. [庄法 钢管舞倒立飙高音](https://s.weibo.com/weibo?q=%23%E5%BA%84%E6%B3%95%20%E9%92%A2%E7%AE%A1%E8%88%9E%E5%80%92%E7%AB%8B%E9%A3%99%E9%AB%98%E9%9F%B3%23) `109.7K 🔥` `NEW`
1. [妻子控诉丈夫的愚孝让全家压抑](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E6%8E%A7%E8%AF%89%E4%B8%88%E5%A4%AB%E7%9A%84%E6%84%9A%E5%AD%9D%E8%AE%A9%E5%85%A8%E5%AE%B6%E5%8E%8B%E6%8A%91%23) `109.7K 🔥` `NEW`
1. [章小蕙让阚清子放下过去 (Zhang Xiaohui asked Kan Qingzi to let go of the past)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%B0%8F%E8%95%99%E8%AE%A9%E9%98%9A%E6%B8%85%E5%AD%90%E6%94%BE%E4%B8%8B%E8%BF%87%E5%8E%BB%23) `86.9K 🔥` `NEW`
1. [王楚钦打完比赛又去加练](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%93%E5%AE%8C%E6%AF%94%E8%B5%9B%E5%8F%88%E5%8E%BB%E5%8A%A0%E7%BB%83%23) `85.8K 🔥` `NEW`
1. [Able队夺冠](https://s.weibo.com/weibo?q=%23Able%E9%98%9F%E5%A4%BA%E5%86%A0%23) `83.0K 🔥` `NEW`
1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `4.6M 🔥` `+200%`
1. [马兴瑞被查 (Ma Xingrui was investigated)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%B4%E7%91%9E%E8%A2%AB%E6%9F%A5%23) `1.2M 🔥` `+395%`
1. [赏花踏青特色主题专列来了](https://s.weibo.com/weibo?q=%23%E8%B5%8F%E8%8A%B1%E8%B8%8F%E9%9D%92%E7%89%B9%E8%89%B2%E4%B8%BB%E9%A2%98%E4%B8%93%E5%88%97%E6%9D%A5%E4%BA%86%23) `1.0M 🔥` `+46%`
1. [孩子一张口身份证掉出来了](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%B8%80%E5%BC%A0%E5%8F%A3%E8%BA%AB%E4%BB%BD%E8%AF%81%E6%8E%89%E5%87%BA%E6%9D%A5%E4%BA%86%23) `131.5K 🔥` `+29%`
1. [工信部紧急提醒苹果用户 (Ministry of Industry and Information Technology urgently reminds Apple users)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%B4%A7%E6%80%A5%E6%8F%90%E9%86%92%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%23) `345.9K 🔥`
1. [以色列铁穹被伊朗击穿](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%93%81%E7%A9%B9%E8%A2%AB%E4%BC%8A%E6%9C%97%E5%87%BB%E7%A9%BF%23) `174.0K 🔥`
1. [男子发私照让豆包测评身材被封号](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%91%E7%A7%81%E7%85%A7%E8%AE%A9%E8%B1%86%E5%8C%85%E6%B5%8B%E8%AF%84%E8%BA%AB%E6%9D%90%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `161.9K 🔥`
1. [代斯票数](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%96%AF%E7%A5%A8%E6%95%B0%23) `148.3K 🔥`
1. [孙怡 好美的洋娃娃](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%A5%BD%E7%BE%8E%E7%9A%84%E6%B4%8B%E5%A8%83%E5%A8%83%23) `145.4K 🔥`
1. [王楚钦直言0比2落后真没机会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%9B%B4%E8%A8%800%E6%AF%942%E8%90%BD%E5%90%8E%E7%9C%9F%E6%B2%A1%E6%9C%BA%E4%BC%9A%23) `140.5K 🔥`
1. [AG对战狼队 (AG vs. Wolves)](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `127.1K 🔥`
1. [李马克解约退团 (Mark Li terminates contract and quits group)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A9%AC%E5%85%8B%E8%A7%A3%E7%BA%A6%E9%80%80%E5%9B%A2%23) `121.5K 🔥`
1. [周杰伦演唱会 (Jay Chou concert)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `117.6K 🔥`
1. [浪姐全场观众喊代斯 (Sister Lang, the whole audience shouted "Dai Si")](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%85%A8%E5%9C%BA%E8%A7%82%E4%BC%97%E5%96%8A%E4%BB%A3%E6%96%AF%23) `109.7K 🔥`
1. [王橹杰画的咴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%94%BB%E7%9A%84%E5%92%B4%23) `106.4K 🔥`
1. [苹果会涨价吗](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E4%BC%9A%E6%B6%A8%E4%BB%B7%E5%90%97%23) `89.0K 🔥`
1. [优思益发布海外工厂情况声明 (Unisei releases statement on overseas factory conditions)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%8F%91%E5%B8%83%E6%B5%B7%E5%A4%96%E5%B7%A5%E5%8E%82%E6%83%85%E5%86%B5%E5%A3%B0%E6%98%8E%23) `87.1K 🔥`
1. [优思益称无力售后 (Yousiyi says it is unable to provide after-sales service)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E7%A7%B0%E6%97%A0%E5%8A%9B%E5%94%AE%E5%90%8E%23) `405.2K 🔥` `-23%`
1. [当你过午不食六个月](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E8%BF%87%E5%8D%88%E4%B8%8D%E9%A3%9F%E5%85%AD%E4%B8%AA%E6%9C%88%23) `288.5K 🔥` `-37%`
1. [阚清子 尊重游戏规则](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%20%E5%B0%8A%E9%87%8D%E6%B8%B8%E6%88%8F%E8%A7%84%E5%88%99%23) `163.9K 🔥` `-74%`
1. [王楚钦说不应该因比赛成绩嘲笑运动员](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E4%B8%8D%E5%BA%94%E8%AF%A5%E5%9B%A0%E6%AF%94%E8%B5%9B%E6%88%90%E7%BB%A9%E5%98%B2%E7%AC%91%E8%BF%90%E5%8A%A8%E5%91%98%23) `148.3K 🔥` `-84%`
1. [温峥嵘 二重唱](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%20%E4%BA%8C%E9%87%8D%E5%94%B1%23) `138.1K 🔥` `-22%`
1. [张凌赫因为帅被同学偷拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%A0%E4%B8%BA%E5%B8%85%E8%A2%AB%E5%90%8C%E5%AD%A6%E5%81%B7%E6%8B%8D%23) `127.7K 🔥` `-22%`
1. [兰州大学惊现虐猫房车](https://s.weibo.com/weibo?q=%23%E5%85%B0%E5%B7%9E%E5%A4%A7%E5%AD%A6%E6%83%8A%E7%8E%B0%E8%99%90%E7%8C%AB%E6%88%BF%E8%BD%A6%23) `109.6K 🔥` `-32%`
1. [上海夫妇被假将军女儿骗走近半亿 (Shanghai couple was defrauded of nearly half a million yuan by fake general’s daughter)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%AB%E5%A6%87%E8%A2%AB%E5%81%87%E5%B0%86%E5%86%9B%E5%A5%B3%E5%84%BF%E9%AA%97%E8%B5%B0%E8%BF%91%E5%8D%8A%E4%BA%BF%23) `96.3K 🔥` `-47%`
1. [王楚钦11比13F勒布伦 (Wang Chuqin 11-13F Le Brun)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A611%E6%AF%9413F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `95.6K 🔥` `-46%`
1. [C罗梅西世纪同框](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%A2%85%E8%A5%BF%E4%B8%96%E7%BA%AA%E5%90%8C%E6%A1%86%23) `86.5K 🔥` `-37%`

Updated at 2026-04-03 23:24:48

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
