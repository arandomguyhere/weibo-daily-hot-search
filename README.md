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

1. [白玉兰预测 (Magnolia Forecast)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%23) `823.7K 🔥` `NEW`
1. [6图看电子商务如何做强做优做大](https://s.weibo.com/weibo?q=%236%E5%9B%BE%E7%9C%8B%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1%E5%A6%82%E4%BD%95%E5%81%9A%E5%BC%BA%E5%81%9A%E4%BC%98%E5%81%9A%E5%A4%A7%23) `812.1K 🔥` `NEW`
1. [杨紫主动让C位](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B8%BB%E5%8A%A8%E8%AE%A9C%E4%BD%8D%23) `787.0K 🔥` `NEW`
1. [工位吃饭羞耻症](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%8D%E5%90%83%E9%A5%AD%E7%BE%9E%E8%80%BB%E7%97%87%23) `757.0K 🔥` `NEW`
1. [多人编造麦田流血水等谣言被罚](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BA%BA%E7%BC%96%E9%80%A0%E9%BA%A6%E7%94%B0%E6%B5%81%E8%A1%80%E6%B0%B4%E7%AD%89%E8%B0%A3%E8%A8%80%E8%A2%AB%E7%BD%9A%23) `731.4K 🔥` `NEW`
1. [原来这就是镜头畸变](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E9%95%9C%E5%A4%B4%E7%95%B8%E5%8F%98%23) `730.0K 🔥` `NEW`
1. [孙兴慜道歉](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%85%B4%E6%85%9C%E9%81%93%E6%AD%89%23) `707.5K 🔥` `NEW`
1. [被杨幂美得大吸一口凉气](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%9D%A8%E5%B9%82%E7%BE%8E%E5%BE%97%E5%A4%A7%E5%90%B8%E4%B8%80%E5%8F%A3%E5%87%89%E6%B0%94%23) `657.0K 🔥` `NEW`
1. [韩国 内讧](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%20%E5%86%85%E8%AE%A7%23) `642.6K 🔥` `NEW`
1. [田曦薇爱豆级别的机场出发图](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%88%B1%E8%B1%86%E7%BA%A7%E5%88%AB%E7%9A%84%E6%9C%BA%E5%9C%BA%E5%87%BA%E5%8F%91%E5%9B%BE%23) `614.6K 🔥` `NEW`
1. [为人处世如何做到大大方方 (How to be generous and generous in dealing with others)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BA%BA%E5%A4%84%E4%B8%96%E5%A6%82%E4%BD%95%E5%81%9A%E5%88%B0%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%23) `606.4K 🔥` `NEW`
1. [印度富二代坠亡系未婚妻和情人推下](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%AF%8C%E4%BA%8C%E4%BB%A3%E5%9D%A0%E4%BA%A1%E7%B3%BB%E6%9C%AA%E5%A9%9A%E5%A6%BB%E5%92%8C%E6%83%85%E4%BA%BA%E6%8E%A8%E4%B8%8B%23) `575.8K 🔥` `NEW`
1. [杨紫大花青衣气质](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%A4%A7%E8%8A%B1%E9%9D%92%E8%A1%A3%E6%B0%94%E8%B4%A8%23) `573.4K 🔥` `NEW`
1. [麻醉医生待遇要看医院](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E9%86%89%E5%8C%BB%E7%94%9F%E5%BE%85%E9%81%87%E8%A6%81%E7%9C%8B%E5%8C%BB%E9%99%A2%23) `552.2K 🔥` `NEW`
1. [男子暴雨夜钓到118斤青鱼](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9A%B4%E9%9B%A8%E5%A4%9C%E9%92%93%E5%88%B0118%E6%96%A4%E9%9D%92%E9%B1%BC%23) `366.0K 🔥` `NEW`
1. [白鹿当时听的是茶花开了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BD%93%E6%97%B6%E5%90%AC%E7%9A%84%E6%98%AF%E8%8C%B6%E8%8A%B1%E5%BC%80%E4%BA%86%23) `365.4K 🔥` `NEW`
1. [杨幂白宇白玉兰合照](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%99%BD%E5%AE%87%E7%99%BD%E7%8E%89%E5%85%B0%E5%90%88%E7%85%A7%23) `354.1K 🔥` `NEW`
1. [尊界S800典藏大观极致内饰工艺](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8CS800%E5%85%B8%E8%97%8F%E5%A4%A7%E8%A7%82%E6%9E%81%E8%87%B4%E5%86%85%E9%A5%B0%E5%B7%A5%E8%89%BA%23) `354.0K 🔥` `NEW`
1. [白鹿又去哪进修哭戏了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%88%E5%8E%BB%E5%93%AA%E8%BF%9B%E4%BF%AE%E5%93%AD%E6%88%8F%E4%BA%86%23) `353.9K 🔥` `NEW`
1. [00后不愿意办卡了](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E4%B8%8D%E6%84%BF%E6%84%8F%E5%8A%9E%E5%8D%A1%E4%BA%86%23) `353.7K 🔥` `NEW`
1. [男生高考718分第二天照常早起理发 (A boy got a score of 718 in the college entrance examination and got up early the next day to get a haircut.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E9%AB%98%E8%80%83718%E5%88%86%E7%AC%AC%E4%BA%8C%E5%A4%A9%E7%85%A7%E5%B8%B8%E6%97%A9%E8%B5%B7%E7%90%86%E5%8F%91%23) `353.6K 🔥` `NEW`
1. [镇海中学又又又上榜了](https://s.weibo.com/weibo?q=%23%E9%95%87%E6%B5%B7%E4%B8%AD%E5%AD%A6%E5%8F%88%E5%8F%88%E5%8F%88%E4%B8%8A%E6%A6%9C%E4%BA%86%23) `353.6K 🔥` `NEW`
1. [学生平时考500多分高考出分考了666](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%94%9F%E5%B9%B3%E6%97%B6%E8%80%83500%E5%A4%9A%E5%88%86%E9%AB%98%E8%80%83%E5%87%BA%E5%88%86%E8%80%83%E4%BA%86666%23) `353.5K 🔥` `NEW`
1. [宝丽来被指区别对待中国消费者](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E4%B8%BD%E6%9D%A5%E8%A2%AB%E6%8C%87%E5%8C%BA%E5%88%AB%E5%AF%B9%E5%BE%85%E4%B8%AD%E5%9B%BD%E6%B6%88%E8%B4%B9%E8%80%85%23) `353.4K 🔥` `NEW`
1. [黄觉称愿参演藏海传2](https://s.weibo.com/weibo?q=%23%E9%BB%84%E8%A7%89%E7%A7%B0%E6%84%BF%E5%8F%82%E6%BC%94%E8%97%8F%E6%B5%B7%E4%BC%A02%23) `353.4K 🔥` `NEW`
1. [李羲承solo初舞台](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BFsolo%E5%88%9D%E8%88%9E%E5%8F%B0%23) `353.3K 🔥` `NEW`
1. [作文以去世父亲为题男生高考653分](https://s.weibo.com/weibo?q=%23%E4%BD%9C%E6%96%87%E4%BB%A5%E5%8E%BB%E4%B8%96%E7%88%B6%E4%BA%B2%E4%B8%BA%E9%A2%98%E7%94%B7%E7%94%9F%E9%AB%98%E8%80%83653%E5%88%86%23) `353.3K 🔥` `NEW`
1. [老莫感谢刘雨鑫让自己还清欠债](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%8E%AB%E6%84%9F%E8%B0%A2%E5%88%98%E9%9B%A8%E9%91%AB%E8%AE%A9%E8%87%AA%E5%B7%B1%E8%BF%98%E6%B8%85%E6%AC%A0%E5%80%BA%23) `353.2K 🔥` `NEW`
1. [工作日小狗发现人没有去上班](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E6%97%A5%E5%B0%8F%E7%8B%97%E5%8F%91%E7%8E%B0%E4%BA%BA%E6%B2%A1%E6%9C%89%E5%8E%BB%E4%B8%8A%E7%8F%AD%23) `353.2K 🔥` `NEW`
1. [丁禹兮拼豆届来了个研究生](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%8B%BC%E8%B1%86%E5%B1%8A%E6%9D%A5%E4%BA%86%E4%B8%AA%E7%A0%94%E7%A9%B6%E7%94%9F%23) `353.0K 🔥` `NEW`
1. [Amodei谈百度 (Amodei talks about Baidu)](https://s.weibo.com/weibo?q=%23Amodei%E8%B0%88%E7%99%BE%E5%BA%A6%23) `352.9K 🔥` `NEW`
1. [李飞飞说未来职场将只剩下这两种人](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A3%9E%E9%A3%9E%E8%AF%B4%E6%9C%AA%E6%9D%A5%E8%81%8C%E5%9C%BA%E5%B0%86%E5%8F%AA%E5%89%A9%E4%B8%8B%E8%BF%99%E4%B8%A4%E7%A7%8D%E4%BA%BA%23) `684.7K 🔥` `+39%`
1. [山河为卷万象郑州](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E6%B2%B3%E4%B8%BA%E5%8D%B7%E4%B8%87%E8%B1%A1%E9%83%91%E5%B7%9E%23) `810.1K 🔥`
1. [四川高考分数线公布](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%E5%85%AC%E5%B8%83%23) `728.1K 🔥`
1. [吴谨言 产后发胖受益人 (Wu Jinyan, a beneficiary who gained weight after childbirth)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%20%E4%BA%A7%E5%90%8E%E5%8F%91%E8%83%96%E5%8F%97%E7%9B%8A%E4%BA%BA%23) `662.3K 🔥`
1. [吴尊发文控诉国泰航空](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%B0%8A%E5%8F%91%E6%96%87%E6%8E%A7%E8%AF%89%E5%9B%BD%E6%B3%B0%E8%88%AA%E7%A9%BA%23) `556.1K 🔥`
1. [白玉兰提名晚宴 (Magnolia Nomination Dinner)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E6%99%9A%E5%AE%B4%23) `1.1M 🔥` `-27%`
1. [李玟精神科医生被起诉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%9F%E7%B2%BE%E7%A5%9E%E7%A7%91%E5%8C%BB%E7%94%9F%E8%A2%AB%E8%B5%B7%E8%AF%89%23) `378.3K 🔥` `-34%`
1. [恋与深空嘴上认错实际行动全无](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%98%B4%E4%B8%8A%E8%AE%A4%E9%94%99%E5%AE%9E%E9%99%85%E8%A1%8C%E5%8A%A8%E5%85%A8%E6%97%A0%23) `370.0K 🔥` `-34%`
1. [钟丽缇呼吁停止传播相关内容](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E5%91%BC%E5%90%81%E5%81%9C%E6%AD%A2%E4%BC%A0%E6%92%AD%E7%9B%B8%E5%85%B3%E5%86%85%E5%AE%B9%23) `354.0K 🔥` `-39%`
1. [韩国南非赛后发生冲突](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%8D%97%E9%9D%9E%E8%B5%9B%E5%90%8E%E5%8F%91%E7%94%9F%E5%86%B2%E7%AA%81%23) `354.0K 🔥` `-60%`
1. [山东高考分数线 (Shandong college entrance examination score line)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `353.9K 🔥` `-41%`
1. [赵今麦的健身痕迹](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%9A%84%E5%81%A5%E8%BA%AB%E7%97%95%E8%BF%B9%23) `353.8K 🔥` `-38%`
1. [孙凡清 腹有诗书气自华的美女 (Sun Fanqing, a beautiful woman with a poetic spirit)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%87%A1%E6%B8%85%20%E8%85%B9%E6%9C%89%E8%AF%97%E4%B9%A6%E6%B0%94%E8%87%AA%E5%8D%8E%E7%9A%84%E7%BE%8E%E5%A5%B3%23) `353.8K 🔥` `-33%`
1. [钟丽缇为考拉事件致歉](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E4%B8%BA%E8%80%83%E6%8B%89%E4%BA%8B%E4%BB%B6%E8%87%B4%E6%AD%89%23) `353.7K 🔥` `-33%`
1. [日本韩国世界杯死亡前景](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%9F%A9%E5%9B%BD%E4%B8%96%E7%95%8C%E6%9D%AF%E6%AD%BB%E4%BA%A1%E5%89%8D%E6%99%AF%23) `353.5K 🔥` `-41%`
1. [杀害3岁女童嫌疑人目前在哺乳期](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B33%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%AB%8C%E7%96%91%E4%BA%BA%E7%9B%AE%E5%89%8D%E5%9C%A8%E5%93%BA%E4%B9%B3%E6%9C%9F%23) `353.2K 🔥` `-29%`
1. [张凌赫身高190体重136](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BA%AB%E9%AB%98190%E4%BD%93%E9%87%8D136%23) `353.1K 🔥` `-32%`
1. [女顾客刚坐下店里瞬间坐满](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%A1%BE%E5%AE%A2%E5%88%9A%E5%9D%90%E4%B8%8B%E5%BA%97%E9%87%8C%E7%9E%AC%E9%97%B4%E5%9D%90%E6%BB%A1%23) `353.0K 🔥` `-30%`
1. [美国少女遭性侵被囚烘干机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B0%91%E5%A5%B3%E9%81%AD%E6%80%A7%E4%BE%B5%E8%A2%AB%E5%9B%9A%E7%83%98%E5%B9%B2%E6%9C%BA%23) `352.9K 🔥` `-39%`

Updated at 2026-06-25 21:07:37

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
