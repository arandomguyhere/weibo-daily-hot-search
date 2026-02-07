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

1. [苏翊鸣大跳台高燃上场时刻 (Su Yiming's big diving show was a great moment on the stage.)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%A4%A7%E8%B7%B3%E5%8F%B0%E9%AB%98%E7%87%83%E4%B8%8A%E5%9C%BA%E6%97%B6%E5%88%BB%23) `294.9K 🔥` `NEW`
1. [千问AI购物战绩](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AEAI%E8%B4%AD%E7%89%A9%E6%88%98%E7%BB%A9%23) `187.9K 🔥` `NEW`
1. [跳台滑雪中国四朵金花出征](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E5%8F%B0%E6%BB%91%E9%9B%AA%E4%B8%AD%E5%9B%BD%E5%9B%9B%E6%9C%B5%E9%87%91%E8%8A%B1%E5%87%BA%E5%BE%81%23) `141.4K 🔥` `NEW`
1. [天津首例不满16岁未成年人被行拘](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E9%A6%96%E4%BE%8B%E4%B8%8D%E6%BB%A116%E5%B2%81%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `58.4K 🔥` `NEW`
1. [成何体统 看哭了](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E7%9C%8B%E5%93%AD%E4%BA%86%23) `52.0K 🔥` `NEW`
1. [单板滑雪决赛](https://s.weibo.com/weibo?q=%23%E5%8D%95%E6%9D%BF%E6%BB%91%E9%9B%AA%E5%86%B3%E8%B5%9B%23) `52.0K 🔥` `NEW`
1. [我们的少年时代2开机花篮](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E5%BC%80%E6%9C%BA%E8%8A%B1%E7%AF%AE%23) `52.0K 🔥` `NEW`
1. [唐宫奇案](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%23) `52.0K 🔥` `NEW`
1. [泡泡玛特年会跳那么开心我也有责任](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E5%B9%B4%E4%BC%9A%E8%B7%B3%E9%82%A3%E4%B9%88%E5%BC%80%E5%BF%83%E6%88%91%E4%B9%9F%E6%9C%89%E8%B4%A3%E4%BB%BB%23) `152.9K 🔥` `+36%`
1. [川大博导被举报83页材料公开 (Sichuan University PhD supervisor was reported to have made 83 pages of materials public)](https://s.weibo.com/weibo?q=%23%E5%B7%9D%E5%A4%A7%E5%8D%9A%E5%AF%BC%E8%A2%AB%E4%B8%BE%E6%8A%A583%E9%A1%B5%E6%9D%90%E6%96%99%E5%85%AC%E5%BC%80%23) `401.9K 🔥`
1. [米兰冬奥会首个奥运纪录](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E4%BC%9A%E9%A6%96%E4%B8%AA%E5%A5%A5%E8%BF%90%E7%BA%AA%E5%BD%95%23) `145.5K 🔥`
1. [男子因1条评论杀害2人 (Man kills 2 people over 1 comment)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A01%E6%9D%A1%E8%AF%84%E8%AE%BA%E6%9D%80%E5%AE%B32%E4%BA%BA%23) `140.9K 🔥`
1. [成何体统 (In what manner)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `137.6K 🔥`
1. [山西朔州车间爆炸已致7人遇难](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%9C%94%E5%B7%9E%E8%BD%A6%E9%97%B4%E7%88%86%E7%82%B8%E5%B7%B2%E8%87%B47%E4%BA%BA%E9%81%87%E9%9A%BE%23) `130.5K 🔥`
1. [官方通报教师用手背打学生脸](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%95%99%E5%B8%88%E7%94%A8%E6%89%8B%E8%83%8C%E6%89%93%E5%AD%A6%E7%94%9F%E8%84%B8%23) `97.3K 🔥`
1. [谷爱凌第一滑摔倒](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E6%BB%91%E6%91%94%E5%80%92%23) `61.7K 🔥`
1. [米兰冬奥首金诞生](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E9%87%91%E8%AF%9E%E7%94%9F%23) `52.0K 🔥`
1. [王楚然演技 (Wang Churan's acting skills)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%BC%94%E6%8A%80%23) `52.0K 🔥`
1. [杨滨瑜速滑3000米顺利完赛](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%BB%A8%E7%91%9C%E9%80%9F%E6%BB%913000%E7%B1%B3%E9%A1%BA%E5%88%A9%E5%AE%8C%E8%B5%9B%23) `52.0K 🔥`
1. [乌克兰紧急求助波兰 (Ukraine seeks emergency help from Poland)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E7%B4%A7%E6%80%A5%E6%B1%82%E5%8A%A9%E6%B3%A2%E5%85%B0%23) `52.0K 🔥`
1. [谷爱凌第二轮75.30分](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%BA%8C%E8%BD%AE75.30%E5%88%86%23) `52.0K 🔥`
1. [单依纯还你茉莉舞台](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E8%BF%98%E4%BD%A0%E8%8C%89%E8%8E%89%E8%88%9E%E5%8F%B0%23) `52.0K 🔥`
1. [aespa香港演唱会](https://s.weibo.com/weibo?q=%23aespa%E9%A6%99%E6%B8%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `52.0K 🔥`
1. [六个合法查询网站帮你看清一个人](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%AA%E5%90%88%E6%B3%95%E6%9F%A5%E8%AF%A2%E7%BD%91%E7%AB%99%E5%B8%AE%E4%BD%A0%E7%9C%8B%E6%B8%85%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `52.0K 🔥`
1. [成何体统 癫剧 (What kind of body is epileptic drama)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E7%99%AB%E5%89%A7%23) `536.0K 🔥` `-27%`
1. [中国元素绽放米兰冬奥舞台 (Chinese elements bloom on the Milan Winter Olympics stage)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%83%E7%B4%A0%E7%BB%BD%E6%94%BE%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E8%88%9E%E5%8F%B0%23) `311.3K 🔥` `-25%`
1. [苏翊鸣决赛](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%86%B3%E8%B5%9B%23) `264.2K 🔥` `-50%`
1. [白鹿 我选蒋奇明](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E6%88%91%E9%80%89%E8%92%8B%E5%A5%87%E6%98%8E%23) `200.3K 🔥` `-32%`
1. [92岁老人集装箱离世留下19万存款](https://s.weibo.com/weibo?q=%2392%E5%B2%81%E8%80%81%E4%BA%BA%E9%9B%86%E8%A3%85%E7%AE%B1%E7%A6%BB%E4%B8%96%E7%95%99%E4%B8%8B19%E4%B8%87%E5%AD%98%E6%AC%BE%23) `197.8K 🔥` `-32%`
1. [11年了大姐还在骂明台](https://s.weibo.com/weibo?q=%2311%E5%B9%B4%E4%BA%86%E5%A4%A7%E5%A7%90%E8%BF%98%E5%9C%A8%E9%AA%82%E6%98%8E%E5%8F%B0%23) `154.8K 🔥` `-40%`
1. [芒果女主持上新了](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%A5%B3%E4%B8%BB%E6%8C%81%E4%B8%8A%E6%96%B0%E4%BA%86%23) `92.8K 🔥` `-27%`
1. [脚臭的人洗脚时建议加点盐](https://s.weibo.com/weibo?q=%23%E8%84%9A%E8%87%AD%E7%9A%84%E4%BA%BA%E6%B4%97%E8%84%9A%E6%97%B6%E5%BB%BA%E8%AE%AE%E5%8A%A0%E7%82%B9%E7%9B%90%23) `83.1K 🔥` `-34%`
1. [林诗栋惨遭逆转无缘4强](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E6%83%A8%E9%81%AD%E9%80%86%E8%BD%AC%E6%97%A0%E7%BC%984%E5%BC%BA%23) `80.3K 🔥` `-36%`
1. [男子网购椅子竟多出15公斤银板 (Man buys chairs online but ends up with 15 kilograms more silver plate)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BD%91%E8%B4%AD%E6%A4%85%E5%AD%90%E7%AB%9F%E5%A4%9A%E5%87%BA15%E5%85%AC%E6%96%A4%E9%93%B6%E6%9D%BF%23) `75.4K 🔥` `-35%`
1. [山姆你还续卡吗](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%BD%A0%E8%BF%98%E7%BB%AD%E5%8D%A1%E5%90%97%23) `70.5K 🔥` `-32%`
1. [演员立威廉已重新安排遗嘱](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%AB%8B%E5%A8%81%E5%BB%89%E5%B7%B2%E9%87%8D%E6%96%B0%E5%AE%89%E6%8E%92%E9%81%97%E5%98%B1%23) `70.4K 🔥` `-37%`
1. [马伯骞回关虞书欣 (Ma Boqian returns to Guan Yu Shuxin)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%AF%E9%AA%9E%E5%9B%9E%E5%85%B3%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `69.6K 🔥` `-37%`
1. [白鹿穿高定录综艺](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%A9%BF%E9%AB%98%E5%AE%9A%E5%BD%95%E7%BB%BC%E8%89%BA%23) `69.4K 🔥` `-37%`
1. [教育局回应成绩单用星星显示](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E6%88%90%E7%BB%A9%E5%8D%95%E7%94%A8%E6%98%9F%E6%98%9F%E6%98%BE%E7%A4%BA%23) `68.6K 🔥` `-47%`
1. [生命树张扬去世](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%BC%A0%E6%89%AC%E5%8E%BB%E4%B8%96%23) `67.6K 🔥` `-31%`
1. [为什么很多餐馆都在提供免费柠檬水 (Why many restaurants are offering free lemonade)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%A4%9A%E9%A4%90%E9%A6%86%E9%83%BD%E5%9C%A8%E6%8F%90%E4%BE%9B%E5%85%8D%E8%B4%B9%E6%9F%A0%E6%AA%AC%E6%B0%B4%23) `60.6K 🔥` `-23%`
1. [Jennie一开口就把我钓到了](https://s.weibo.com/weibo?q=%23Jennie%E4%B8%80%E5%BC%80%E5%8F%A3%E5%B0%B1%E6%8A%8A%E6%88%91%E9%92%93%E5%88%B0%E4%BA%86%23) `59.6K 🔥` `-39%`
1. [王楚钦7比11周启豪](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A67%E6%AF%9411%E5%91%A8%E5%90%AF%E8%B1%AA%23) `59.5K 🔥` `-46%`
1. [12306没票微信平台还能买到](https://s.weibo.com/weibo?q=%2312306%E6%B2%A1%E7%A5%A8%E5%BE%AE%E4%BF%A1%E5%B9%B3%E5%8F%B0%E8%BF%98%E8%83%BD%E4%B9%B0%E5%88%B0%23) `58.8K 🔥` `-35%`
1. [甲状腺是怎么一步一步失控的](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E6%98%AF%E6%80%8E%E4%B9%88%E4%B8%80%E6%AD%A5%E4%B8%80%E6%AD%A5%E5%A4%B1%E6%8E%A7%E7%9A%84%23) `58.7K 🔥` `-36%`
1. [孙颖莎6比11陈熠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E6%E6%AF%9411%E9%99%88%E7%86%A0%23) `57.1K 🔥` `-38%`
1. [男子大跳台决赛出发名单](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%A4%A7%E8%B7%B3%E5%8F%B0%E5%86%B3%E8%B5%9B%E5%87%BA%E5%8F%91%E5%90%8D%E5%8D%95%23) `54.1K 🔥` `-58%`
1. [陈天润见面会 (Chen Tianrun meeting)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A4%A9%E6%B6%A6%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `53.3K 🔥` `-33%`
1. [谷爱凌身边的东北甜妹是谁](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BA%AB%E8%BE%B9%E7%9A%84%E4%B8%9C%E5%8C%97%E7%94%9C%E5%A6%B9%E6%98%AF%E8%B0%81%23) `52.6K 🔥` `-27%`
1. [立威廉得知恶耗时才49岁](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%A8%81%E5%BB%89%E5%BE%97%E7%9F%A5%E6%81%B6%E8%80%97%E6%97%B6%E6%89%8D49%E5%B2%81%23) `52.0K 🔥` `-23%`

Updated at 2026-02-08 01:13:57

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
