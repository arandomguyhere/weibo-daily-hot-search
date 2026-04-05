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

1. [美5名顶尖科学家离奇失踪或死亡 (Five top U.S. scientists mysteriously disappeared or died)](https://s.weibo.com/weibo?q=%23%E7%BE%8E5%E5%90%8D%E9%A1%B6%E5%B0%96%E7%A7%91%E5%AD%A6%E5%AE%B6%E7%A6%BB%E5%A5%87%E5%A4%B1%E8%B8%AA%E6%88%96%E6%AD%BB%E4%BA%A1%23) `1.1M 🔥` `NEW`
1. [张雪回应一个子儿没有言论](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%9B%9E%E5%BA%94%E4%B8%80%E4%B8%AA%E5%AD%90%E5%84%BF%E6%B2%A1%E6%9C%89%E8%A8%80%E8%AE%BA%23) `756.9K 🔥` `NEW`
1. [清明假期新业态解锁新体验](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E5%81%87%E6%9C%9F%E6%96%B0%E4%B8%9A%E6%80%81%E8%A7%A3%E9%94%81%E6%96%B0%E4%BD%93%E9%AA%8C%23) `601.9K 🔥` `NEW`
1. [张月曾沛慈 评级人数](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%9B%BE%E6%B2%9B%E6%85%88%20%E8%AF%84%E7%BA%A7%E4%BA%BA%E6%95%B0%23) `368.7K 🔥` `NEW`
1. [女孩2岁确诊孤独症父母花100万求医](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A92%E5%B2%81%E7%A1%AE%E8%AF%8A%E5%AD%A4%E7%8B%AC%E7%97%87%E7%88%B6%E6%AF%8D%E8%8A%B1100%E4%B8%87%E6%B1%82%E5%8C%BB%23) `254.5K 🔥` `NEW`
1. [原来软柿子在人群里这么明显](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BD%AF%E6%9F%BF%E5%AD%90%E5%9C%A8%E4%BA%BA%E7%BE%A4%E9%87%8C%E8%BF%99%E4%B9%88%E6%98%8E%E6%98%BE%23) `230.8K 🔥` `NEW`
1. [给老祖宗上坟熊孩子把钱顺回来了](https://s.weibo.com/weibo?q=%23%E7%BB%99%E8%80%81%E7%A5%96%E5%AE%97%E4%B8%8A%E5%9D%9F%E7%86%8A%E5%AD%A9%E5%AD%90%E6%8A%8A%E9%92%B1%E9%A1%BA%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `218.8K 🔥` `NEW`
1. [谢娜的话筒一直是在冲着李小冉的](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%9A%84%E8%AF%9D%E7%AD%92%E4%B8%80%E7%9B%B4%E6%98%AF%E5%9C%A8%E5%86%B2%E7%9D%80%E6%9D%8E%E5%B0%8F%E5%86%89%E7%9A%84%23) `216.1K 🔥` `NEW`
1. [以色列被曝正等待美国开绿灯](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AB%E6%9B%9D%E6%AD%A3%E7%AD%89%E5%BE%85%E7%BE%8E%E5%9B%BD%E5%BC%80%E7%BB%BF%E7%81%AF%23) `195.6K 🔥` `NEW`
1. [孙颖莎vs温特](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E6%B8%A9%E7%89%B9%23) `175.8K 🔥` `NEW`
1. [美国前参议员表示特朗普已经住院 (Former US senator says Trump has been hospitalized)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%89%8D%E5%8F%82%E8%AE%AE%E5%91%98%E8%A1%A8%E7%A4%BA%E7%89%B9%E6%9C%97%E6%99%AE%E5%B7%B2%E7%BB%8F%E4%BD%8F%E9%99%A2%23) `173.3K 🔥` `NEW`
1. [何炅没开口维嘉就哭了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E6%B2%A1%E5%BC%80%E5%8F%A3%E7%BB%B4%E5%98%89%E5%B0%B1%E5%93%AD%E4%BA%86%23) `167.5K 🔥` `NEW`
1. [黄婷婷没去浪姐去了演综](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A9%B7%E5%A9%B7%E6%B2%A1%E5%8E%BB%E6%B5%AA%E5%A7%90%E5%8E%BB%E4%BA%86%E6%BC%94%E7%BB%BC%23) `155.4K 🔥` `NEW`
1. [黄金大买家狂抛](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%A4%A7%E4%B9%B0%E5%AE%B6%E7%8B%82%E6%8A%9B%23) `152.7K 🔥` `NEW`
1. [李小冉曾自曝给谢娜收拾脱的脏衣服](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%9B%BE%E8%87%AA%E6%9B%9D%E7%BB%99%E8%B0%A2%E5%A8%9C%E6%94%B6%E6%8B%BE%E8%84%B1%E7%9A%84%E8%84%8F%E8%A1%A3%E6%9C%8D%23) `141.6K 🔥` `NEW`
1. [伊媒称美军试图炸死在伊失联飞行员](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%AA%92%E7%A7%B0%E7%BE%8E%E5%86%9B%E8%AF%95%E5%9B%BE%E7%82%B8%E6%AD%BB%E5%9C%A8%E4%BC%8A%E5%A4%B1%E8%81%94%E9%A3%9E%E8%A1%8C%E5%91%98%23) `130.2K 🔥` `NEW`
1. [郝蕾说张昊唯废了](https://s.weibo.com/weibo?q=%23%E9%83%9D%E8%95%BE%E8%AF%B4%E5%BC%A0%E6%98%8A%E5%94%AF%E5%BA%9F%E4%BA%86%23) `129.9K 🔥` `NEW`
1. [网友爸爸曾在昆明石林偶遇张国荣](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%88%B8%E7%88%B8%E6%9B%BE%E5%9C%A8%E6%98%86%E6%98%8E%E7%9F%B3%E6%9E%97%E5%81%B6%E9%81%87%E5%BC%A0%E5%9B%BD%E8%8D%A3%23) `129.0K 🔥` `NEW`
1. [刘雨鑫探店莫氏鸡煲视频点赞超130万](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E9%91%AB%E6%8E%A2%E5%BA%97%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%A7%86%E9%A2%91%E7%82%B9%E8%B5%9E%E8%B6%85130%E4%B8%87%23) `127.7K 🔥` `NEW`
1. [飞机 烟灰缸](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%20%E7%83%9F%E7%81%B0%E7%BC%B8%23) `126.8K 🔥` `NEW`
1. [迪丽热巴陈飞宇白日提灯热度涨幅 (Dilireba, Chen Feiyu and Lantern Popularity Increase During the Day)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%83%AD%E5%BA%A6%E6%B6%A8%E5%B9%85%23) `126.7K 🔥` `NEW`
1. [周杰伦演唱会大屏上的昆凌](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A4%A7%E5%B1%8F%E4%B8%8A%E7%9A%84%E6%98%86%E5%87%8C%23) `105.6K 🔥` `NEW`
1. [为什么人到中年要坚持运动](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E8%A6%81%E5%9D%9A%E6%8C%81%E8%BF%90%E5%8A%A8%23) `94.4K 🔥` `NEW`
1. [男子钓7条鱼获利50元被判刑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%92%937%E6%9D%A1%E9%B1%BC%E8%8E%B7%E5%88%A950%E5%85%83%E8%A2%AB%E5%88%A4%E5%88%91%23) `92.5K 🔥` `NEW`
1. [乘风Queen前三](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8EQueen%E5%89%8D%E4%B8%89%23) `92.5K 🔥` `NEW`
1. [中国电车全球爆火](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B5%E8%BD%A6%E5%85%A8%E7%90%83%E7%88%86%E7%81%AB%23) `91.6K 🔥` `NEW`
1. [全红婵快乐成长吧](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%BF%AB%E4%B9%90%E6%88%90%E9%95%BF%E5%90%A7%23) `84.5K 🔥` `NEW`
1. [10后眼里的90后](https://s.weibo.com/weibo?q=%2310%E5%90%8E%E7%9C%BC%E9%87%8C%E7%9A%8490%E5%90%8E%23) `82.3K 🔥` `NEW`
1. [特朗普一直呆在白宫](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%80%E7%9B%B4%E5%91%86%E5%9C%A8%E7%99%BD%E5%AE%AB%23) `82.2K 🔥` `NEW`
1. [董宇辉遭遇回旋镖](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E9%81%AD%E9%81%87%E5%9B%9E%E6%97%8B%E9%95%96%23) `81.1K 🔥` `NEW`
1. [毛新宇携家人到杨开慧烈士陵园祭扫 (Mao Xinyu and his family went to the Martyr Yang Kaihui Cemetery to pay tribute)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%96%B0%E5%AE%87%E6%90%BA%E5%AE%B6%E4%BA%BA%E5%88%B0%E6%9D%A8%E5%BC%80%E6%85%A7%E7%83%88%E5%A3%AB%E9%99%B5%E5%9B%AD%E7%A5%AD%E6%89%AB%23) `80.5K 🔥` `NEW`
1. [嘴甜羞耻症](https://s.weibo.com/weibo?q=%23%E5%98%B4%E7%94%9C%E7%BE%9E%E8%80%BB%E7%97%87%23) `79.7K 🔥` `NEW`
1. [熬夜时最害怕听见的声音](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E6%97%B6%E6%9C%80%E5%AE%B3%E6%80%95%E5%90%AC%E8%A7%81%E7%9A%84%E5%A3%B0%E9%9F%B3%23) `79.5K 🔥` `NEW`
1. [疯狂动物城2原设定有狐兔鼻尖糖](https://s.weibo.com/weibo?q=%23%E7%96%AF%E7%8B%82%E5%8A%A8%E7%89%A9%E5%9F%8E2%E5%8E%9F%E8%AE%BE%E5%AE%9A%E6%9C%89%E7%8B%90%E5%85%94%E9%BC%BB%E5%B0%96%E7%B3%96%23) `79.0K 🔥` `NEW`
1. [监狱版浪姐](https://s.weibo.com/weibo?q=%23%E7%9B%91%E7%8B%B1%E7%89%88%E6%B5%AA%E5%A7%90%23) `77.1K 🔥` `NEW`
1. [何炅告白维嘉](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E5%91%8A%E7%99%BD%E7%BB%B4%E5%98%89%23) `75.7K 🔥` `NEW`
1. [美议员称公开外星人简报会让国家混乱](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%AE%AE%E5%91%98%E7%A7%B0%E5%85%AC%E5%BC%80%E5%A4%96%E6%98%9F%E4%BA%BA%E7%AE%80%E6%8A%A5%E4%BC%9A%E8%AE%A9%E5%9B%BD%E5%AE%B6%E6%B7%B7%E4%B9%B1%23) `73.8K 🔥` `NEW`
1. [浪姐垫音](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%9E%AB%E9%9F%B3%23) `73.7K 🔥` `NEW`
1. [王楚钦约奇克收视率](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%BA%A6%E5%A5%87%E5%85%8B%E6%94%B6%E8%A7%86%E7%8E%87%23) `63.4K 🔥` `NEW`
1. [我的清明假期belike](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E6%B8%85%E6%98%8E%E5%81%87%E6%9C%9Fbelike%23) `62.9K 🔥` `NEW`
1. [白日提灯热度涨幅 (Increasing popularity of lanterns during the day)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%83%AD%E5%BA%A6%E6%B6%A8%E5%B9%85%23) `62.2K 🔥` `NEW`
1. [扫墓回来的大朋友偶遇春游小朋友](https://s.weibo.com/weibo?q=%23%E6%89%AB%E5%A2%93%E5%9B%9E%E6%9D%A5%E7%9A%84%E5%A4%A7%E6%9C%8B%E5%8F%8B%E5%81%B6%E9%81%87%E6%98%A5%E6%B8%B8%E5%B0%8F%E6%9C%8B%E5%8F%8B%23) `59.4K 🔥` `NEW`
1. [四川一索道有游客从缆车掉入防护网](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B8%80%E7%B4%A2%E9%81%93%E6%9C%89%E6%B8%B8%E5%AE%A2%E4%BB%8E%E7%BC%86%E8%BD%A6%E6%8E%89%E5%85%A5%E9%98%B2%E6%8A%A4%E7%BD%91%23) `57.3K 🔥` `NEW`
1. [医生回应女童假死3天奇迹生还](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%A5%B3%E7%AB%A5%E5%81%87%E6%AD%BB3%E5%A4%A9%E5%A5%87%E8%BF%B9%E7%94%9F%E8%BF%98%23) `55.6K 🔥` `NEW`
1. [曝creme不想和Tian打比赛](https://s.weibo.com/weibo?q=%23%E6%9B%9Dcreme%E4%B8%8D%E6%83%B3%E5%92%8CTian%E6%89%93%E6%AF%94%E8%B5%9B%23) `52.8K 🔥` `NEW`
1. [李清明  清明节myday](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B8%85%E6%98%8E%20%20%E6%B8%85%E6%98%8E%E8%8A%82myday%23) `132.2K 🔥` `+53%`
1. [清明节](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E8%8A%82%23) `76.9K 🔥`
1. [多方回应快递沾染血迹被更换包装 (Many parties responded that the package was changed after the express was stained with blood.)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%BF%AB%E9%80%92%E6%B2%BE%E6%9F%93%E8%A1%80%E8%BF%B9%E8%A2%AB%E6%9B%B4%E6%8D%A2%E5%8C%85%E8%A3%85%23) `90.2K 🔥` `-61%`
1. [3岁女童被毒蛇咬伤假死3天奇迹生还 (3-year-old girl was bitten by a venomous snake and miraculously survived for 3 days after pretending to be dead)](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%A2%AB%E6%AF%92%E8%9B%87%E5%92%AC%E4%BC%A4%E5%81%87%E6%AD%BB3%E5%A4%A9%E5%A5%87%E8%BF%B9%E7%94%9F%E8%BF%98%23) `71.0K 🔥` `-90%`
1. [文淇第一次做妇科检查的不适感受](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%81%9A%E5%A6%87%E7%A7%91%E6%A3%80%E6%9F%A5%E7%9A%84%E4%B8%8D%E9%80%82%E6%84%9F%E5%8F%97%23) `57.5K 🔥` `-39%`

Updated at 2026-04-05 11:33:54

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
