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

1. [JDG DYG](https://s.weibo.com/weibo?q=%23JDG%20DYG%23) `318.9K 🔥` `NEW`
1. [TTG对战KSG](https://s.weibo.com/weibo?q=%23TTG%E5%AF%B9%E6%88%98KSG%23) `315.2K 🔥` `NEW`
1. [郑丽文试乘小米汽车](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E8%AF%95%E4%B9%98%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23) `182.8K 🔥` `NEW`
1. [小酒窝和爸爸逛面包节](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E5%92%8C%E7%88%B8%E7%88%B8%E9%80%9B%E9%9D%A2%E5%8C%85%E8%8A%82%23) `179.4K 🔥` `NEW`
1. [AG打RW](https://s.weibo.com/weibo?q=%23AG%E6%89%93RW%23) `176.4K 🔥` `NEW`
1. [孙子怕爷爷去世每天偷偷带肉回家](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E6%80%95%E7%88%B7%E7%88%B7%E5%8E%BB%E4%B8%96%E6%AF%8F%E5%A4%A9%E5%81%B7%E5%81%B7%E5%B8%A6%E8%82%89%E5%9B%9E%E5%AE%B6%23) `173.3K 🔥` `NEW`
1. [花海阿豆抽签](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7%E9%98%BF%E8%B1%86%E6%8A%BD%E7%AD%BE%23) `172.0K 🔥` `NEW`
1. [挑杯抽签](https://s.weibo.com/weibo?q=%23%E6%8C%91%E6%9D%AF%E6%8A%BD%E7%AD%BE%23) `149.4K 🔥` `NEW`
1. [朴宝剑王安宇怎么认识的](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E7%8E%8B%E5%AE%89%E5%AE%87%E6%80%8E%E4%B9%88%E8%AE%A4%E8%AF%86%E7%9A%84%23) `147.3K 🔥` `NEW`
1. [西班牙首相和夫人参观颐和园](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E7%9B%B8%E5%92%8C%E5%A4%AB%E4%BA%BA%E5%8F%82%E8%A7%82%E9%A2%90%E5%92%8C%E5%9B%AD%23) `144.9K 🔥` `NEW`
1. [伊朗接连回怼美国 (Iran attacks the United States one after another)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8E%A5%E8%BF%9E%E5%9B%9E%E6%80%BC%E7%BE%8E%E5%9B%BD%23) `134.5K 🔥` `NEW`
1. [AXIZ战胜Wolves](https://s.weibo.com/weibo?q=%23AXIZ%E6%88%98%E8%83%9CWolves%23) `134.4K 🔥` `NEW`
1. [阿尔卡拉斯vs辛纳](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E5%8D%A1%E6%8B%89%E6%96%AFvs%E8%BE%9B%E7%BA%B3%23) `131.8K 🔥` `NEW`
1. [刘耀文高会更新](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E9%AB%98%E4%BC%9A%E6%9B%B4%E6%96%B0%23) `126.3K 🔥` `NEW`
1. [热刺 降级](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%88%BA%20%E9%99%8D%E7%BA%A7%23) `107.7K 🔥` `NEW`
1. [广西4名学生下河游泳溺亡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF4%E5%90%8D%E5%AD%A6%E7%94%9F%E4%B8%8B%E6%B2%B3%E6%B8%B8%E6%B3%B3%E6%BA%BA%E4%BA%A1%23) `105.7K 🔥` `NEW`
1. [BLG战胜WBG](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CWBG%23) `102.6K 🔥` `NEW`
1. [陈楚生直播](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%E7%9B%B4%E6%92%AD%23) `102.4K 🔥` `NEW`
1. [韦世豪绝杀](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E4%B8%96%E8%B1%AA%E7%BB%9D%E6%9D%80%23) `97.9K 🔥` `NEW`
1. [山西猥亵当事人法官被停职](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%8C%A5%E4%BA%B5%E5%BD%93%E4%BA%8B%E4%BA%BA%E6%B3%95%E5%AE%98%E8%A2%AB%E5%81%9C%E8%81%8C%23) `93.3K 🔥` `NEW`
1. [耗资24亿大庸古城空城迎转机 (Spending 2.4 billion, the empty city of Dayong Ancient City welcomes the turn of events)](https://s.weibo.com/weibo?q=%23%E8%80%97%E8%B5%8424%E4%BA%BF%E5%A4%A7%E5%BA%B8%E5%8F%A4%E5%9F%8E%E7%A9%BA%E5%9F%8E%E8%BF%8E%E8%BD%AC%E6%9C%BA%23) `92.2K 🔥` `NEW`
1. [老外用手比划点餐中国老板秒懂](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E7%94%A8%E6%89%8B%E6%AF%94%E5%88%92%E7%82%B9%E9%A4%90%E4%B8%AD%E5%9B%BD%E8%80%81%E6%9D%BF%E7%A7%92%E6%87%82%23) `92.1K 🔥` `NEW`
1. [央视曝光AI造黄产业链](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89AI%E9%80%A0%E9%BB%84%E4%BA%A7%E4%B8%9A%E9%93%BE%23) `794.1K 🔥` `+208%`
1. [伊方说封锁伊朗无法让霍尔木兹海峡开放](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%96%B9%E8%AF%B4%E5%B0%81%E9%94%81%E4%BC%8A%E6%9C%97%E6%97%A0%E6%B3%95%E8%AE%A9%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%BC%80%E6%94%BE%23) `175.5K 🔥` `+31%`
1. [郭碧婷生一胎的时候没备孕 (Guo Biting did not prepare for pregnancy when she gave birth to her first child)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%94%9F%E4%B8%80%E8%83%8E%E7%9A%84%E6%97%B6%E5%80%99%E6%B2%A1%E5%A4%87%E5%AD%95%23) `112.8K 🔥` `+43%`
1. [罗永浩是怎么被蒸馏的](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%98%AF%E6%80%8E%E4%B9%88%E8%A2%AB%E8%92%B8%E9%A6%8F%E7%9A%84%23) `92.1K 🔥` `+21%`
1. [官方回应为什么不能把杨柳树都砍了 (Official response: Why can’t all willow trees be cut down?)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%83%BD%E6%8A%8A%E6%9D%A8%E6%9F%B3%E6%A0%91%E9%83%BD%E7%A0%8D%E4%BA%86%23) `1.1M 🔥`
1. [中国航天不断刷新宇宙级精彩 (China's aerospace industry continues to create world-class excitement)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E4%B8%8D%E6%96%AD%E5%88%B7%E6%96%B0%E5%AE%87%E5%AE%99%E7%BA%A7%E7%B2%BE%E5%BD%A9%23) `596.8K 🔥`
1. [妈妈辅导作业被气到引爆脑瘤](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%BE%85%E5%AF%BC%E4%BD%9C%E4%B8%9A%E8%A2%AB%E6%B0%94%E5%88%B0%E5%BC%95%E7%88%86%E8%84%91%E7%98%A4%23) `231.6K 🔥`
1. [王石否认被抓 (Wang Shi denies being arrested)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9F%B3%E5%90%A6%E8%AE%A4%E8%A2%AB%E6%8A%93%23) `219.2K 🔥`
1. [浪姐封神舞台 (Sister Lang's Conferred God Stage)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%B0%81%E7%A5%9E%E8%88%9E%E5%8F%B0%23) `182.0K 🔥`
1. [朴宝剑探班王安宇](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E6%8E%A2%E7%8F%AD%E7%8E%8B%E5%AE%89%E5%AE%87%23) `181.0K 🔥`
1. [王濛的底气](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%9A%84%E5%BA%95%E6%B0%94%23) `180.9K 🔥`
1. [李荣浩真转我五百了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9C%9F%E8%BD%AC%E6%88%91%E4%BA%94%E7%99%BE%E4%BA%86%23) `178.6K 🔥`
1. [王石 秦枫 (Wang Shi Qin Feng)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9F%B3%20%E7%A7%A6%E6%9E%AB%23) `177.9K 🔥`
1. [赵子琪硬刚浪姐 (Zhao Ziqi is tough on Sister Lang)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E7%A1%AC%E5%88%9A%E6%B5%AA%E5%A7%90%23) `177.1K 🔥`
1. [瑶一瑶妈妈晒与老公恋爱时的照片](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%A6%88%E5%A6%88%E6%99%92%E4%B8%8E%E8%80%81%E5%85%AC%E6%81%8B%E7%88%B1%E6%97%B6%E7%9A%84%E7%85%A7%E7%89%87%23) `176.0K 🔥`
1. [何超蕸去世 (He Chaogui passed away)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E5%8E%BB%E4%B8%96%23) `173.9K 🔥`
1. [老人私栓绳子致男孩气管全断裂 (An old man tied a rope privately, causing the boy's trachea to completely rupture)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%A7%81%E6%A0%93%E7%BB%B3%E5%AD%90%E8%87%B4%E7%94%B7%E5%AD%A9%E6%B0%94%E7%AE%A1%E5%85%A8%E6%96%AD%E8%A3%82%23) `172.4K 🔥`
1. [业内称平台不再相信演员能单扛了](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E7%A7%B0%E5%B9%B3%E5%8F%B0%E4%B8%8D%E5%86%8D%E7%9B%B8%E4%BF%A1%E6%BC%94%E5%91%98%E8%83%BD%E5%8D%95%E6%89%9B%E4%BA%86%23) `151.0K 🔥`
1. [钢铁森林 删吻戏](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%20%E5%88%A0%E5%90%BB%E6%88%8F%23) `116.3K 🔥`
1. [赌王何鸿燊17名子女已有3人离世 (Three of gambling king Stanley Ho’s 17 children have passed away)](https://s.weibo.com/weibo?q=%23%E8%B5%8C%E7%8E%8B%E4%BD%95%E9%B8%BF%E7%87%8A17%E5%90%8D%E5%AD%90%E5%A5%B3%E5%B7%B2%E6%9C%893%E4%BA%BA%E7%A6%BB%E4%B8%96%23) `114.3K 🔥`
1. [三甲医生回应郭碧婷二胎生育损伤](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E9%83%AD%E7%A2%A7%E5%A9%B7%E4%BA%8C%E8%83%8E%E7%94%9F%E8%82%B2%E6%8D%9F%E4%BC%A4%23) `98.4K 🔥`
1. [辽宁铁岭一风力发电机断裂坠地](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E9%93%81%E5%B2%AD%E4%B8%80%E9%A3%8E%E5%8A%9B%E5%8F%91%E7%94%B5%E6%9C%BA%E6%96%AD%E8%A3%82%E5%9D%A0%E5%9C%B0%23) `97.4K 🔥`
1. [楚乔传 知否](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%20%E7%9F%A5%E5%90%A6%23) `248.7K 🔥` `-68%`
1. [王橹杰杀青](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%9D%80%E9%9D%92%23) `174.6K 🔥` `-26%`
1. [迪丽热巴补偿去巴黎的粉丝 (Dilireba compensates fans who went to Paris)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A1%A5%E5%81%BF%E5%8E%BB%E5%B7%B4%E9%BB%8E%E7%9A%84%E7%B2%89%E4%B8%9D%23) `144.0K 🔥` `-21%`
1. [王濛公司大部分是退役运动员](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%85%AC%E5%8F%B8%E5%A4%A7%E9%83%A8%E5%88%86%E6%98%AF%E9%80%80%E5%BD%B9%E8%BF%90%E5%8A%A8%E5%91%98%23) `113.3K 🔥` `-36%`
1. [脑雾](https://s.weibo.com/weibo?q=%23%E8%84%91%E9%9B%BE%23) `111.3K 🔥` `-43%`
1. [你们俩是要毁了芒果吗 (Are you two going to destroy the mango?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E4%BF%A9%E6%98%AF%E8%A6%81%E6%AF%81%E4%BA%86%E8%8A%92%E6%9E%9C%E5%90%97%23) `102.9K 🔥` `-23%`

Updated at 2026-04-12 22:54:37

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
