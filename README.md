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

1. [成何体统 癫剧 (What kind of body is epileptic drama)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E7%99%AB%E5%89%A7%23) `1.1M 🔥` `NEW`
1. [苏翊鸣决赛](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%86%B3%E8%B5%9B%23) `805.5K 🔥` `NEW`
1. [中国元素绽放米兰冬奥舞台](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%83%E7%B4%A0%E7%BB%BD%E6%94%BE%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E8%88%9E%E5%8F%B0%23) `649.6K 🔥` `NEW`
1. [美团外卖周末半价吃大餐](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E5%91%A8%E6%9C%AB%E5%8D%8A%E4%BB%B7%E5%90%83%E5%A4%A7%E9%A4%90%23) `617.9K 🔥` `NEW`
1. [11年了大姐还在骂明台](https://s.weibo.com/weibo?q=%2311%E5%B9%B4%E4%BA%86%E5%A4%A7%E5%A7%90%E8%BF%98%E5%9C%A8%E9%AA%82%E6%98%8E%E5%8F%B0%23) `451.4K 🔥` `NEW`
1. [教育局回应成绩单用星星显示](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E6%88%90%E7%BB%A9%E5%8D%95%E7%94%A8%E6%98%9F%E6%98%9F%E6%98%BE%E7%A4%BA%23) `377.6K 🔥` `NEW`
1. [92岁老人集装箱离世留下19万存款](https://s.weibo.com/weibo?q=%2392%E5%B2%81%E8%80%81%E4%BA%BA%E9%9B%86%E8%A3%85%E7%AE%B1%E7%A6%BB%E4%B8%96%E7%95%99%E4%B8%8B19%E4%B8%87%E5%AD%98%E6%AC%BE%23) `376.3K 🔥` `NEW`
1. [新疆辟谣江布拉克景区有狼群活动](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E8%BE%9F%E8%B0%A3%E6%B1%9F%E5%B8%83%E6%8B%89%E5%85%8B%E6%99%AF%E5%8C%BA%E6%9C%89%E7%8B%BC%E7%BE%A4%E6%B4%BB%E5%8A%A8%23) `353.6K 🔥` `NEW`
1. [白鹿 我选蒋奇明](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E6%88%91%E9%80%89%E8%92%8B%E5%A5%87%E6%98%8E%23) `338.4K 🔥` `NEW`
1. [林诗栋惨遭逆转无缘4强](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E6%83%A8%E9%81%AD%E9%80%86%E8%BD%AC%E6%97%A0%E7%BC%984%E5%BC%BA%23) `281.7K 🔥` `NEW`
1. [男子网购椅子竟多出15公斤银板 (Man buys chairs online but ends up with 15 kilograms more silver plate)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BD%91%E8%B4%AD%E6%A4%85%E5%AD%90%E7%AB%9F%E5%A4%9A%E5%87%BA15%E5%85%AC%E6%96%A4%E9%93%B6%E6%9D%BF%23) `251.3K 🔥` `NEW`
1. [王楚钦7比11周启豪](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A67%E6%AF%9411%E5%91%A8%E5%90%AF%E8%B1%AA%23) `206.5K 🔥` `NEW`
1. [男子因1条评论杀害2人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A01%E6%9D%A1%E8%AF%84%E8%AE%BA%E6%9D%80%E5%AE%B32%E4%BA%BA%23) `206.3K 🔥` `NEW`
1. [脚臭的人洗脚时建议加点盐](https://s.weibo.com/weibo?q=%23%E8%84%9A%E8%87%AD%E7%9A%84%E4%BA%BA%E6%B4%97%E8%84%9A%E6%97%B6%E5%BB%BA%E8%AE%AE%E5%8A%A0%E7%82%B9%E7%9B%90%23) `198.3K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `188.9K 🔥` `NEW`
1. [生命树张扬去世](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%BC%A0%E6%89%AC%E5%8E%BB%E4%B8%96%23) `181.0K 🔥` `NEW`
1. [山姆你还续卡吗](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%BD%A0%E8%BF%98%E7%BB%AD%E5%8D%A1%E5%90%97%23) `178.2K 🔥` `NEW`
1. [谷爱凌第一滑摔倒](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E6%BB%91%E6%91%94%E5%80%92%23) `173.1K 🔥` `NEW`
1. [王嘉尔刘雨昕MMAM舞台国际水准](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%88%98%E9%9B%A8%E6%98%95MMAM%E8%88%9E%E5%8F%B0%E5%9B%BD%E9%99%85%E6%B0%B4%E5%87%86%23) `142.8K 🔥` `NEW`
1. [川大博导被举报83页材料公开](https://s.weibo.com/weibo?q=%23%E5%B7%9D%E5%A4%A7%E5%8D%9A%E5%AF%BC%E8%A2%AB%E4%B8%BE%E6%8A%A583%E9%A1%B5%E6%9D%90%E6%96%99%E5%85%AC%E5%BC%80%23) `136.7K 🔥` `NEW`
1. [乌克兰紧急求助波兰 (Ukraine seeks emergency help from Poland)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E7%B4%A7%E6%80%A5%E6%B1%82%E5%8A%A9%E6%B3%A2%E5%85%B0%23) `136.7K 🔥` `NEW`
1. [演员立威廉已重新安排遗嘱](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%AB%8B%E5%A8%81%E5%BB%89%E5%B7%B2%E9%87%8D%E6%96%B0%E5%AE%89%E6%8E%92%E9%81%97%E5%98%B1%23) `135.4K 🔥` `NEW`
1. [马伯骞回关虞书欣](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%AF%E9%AA%9E%E5%9B%9E%E5%85%B3%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `134.5K 🔥` `NEW`
1. [孙颖莎6比11陈熠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E6%E6%AF%9411%E9%99%88%E7%86%A0%23) `133.3K 🔥` `NEW`
1. [白鹿穿高定录综艺](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%A9%BF%E9%AB%98%E5%AE%9A%E5%BD%95%E7%BB%BC%E8%89%BA%23) `132.4K 🔥` `NEW`
1. [芒果女主持上新了](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%A5%B3%E4%B8%BB%E6%8C%81%E4%B8%8A%E6%96%B0%E4%BA%86%23) `131.5K 🔥` `NEW`
1. [因上菜慢辱骂服务员老太太拒道歉](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%8A%E8%8F%9C%E6%85%A2%E8%BE%B1%E9%AA%82%E6%9C%8D%E5%8A%A1%E5%91%98%E8%80%81%E5%A4%AA%E5%A4%AA%E6%8B%92%E9%81%93%E6%AD%89%23) `130.6K 🔥` `NEW`
1. [立威廉得知恶耗时才49岁](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%A8%81%E5%BB%89%E5%BE%97%E7%9F%A5%E6%81%B6%E8%80%97%E6%97%B6%E6%89%8D49%E5%B2%81%23) `129.8K 🔥` `NEW`
1. [Jennie一开口就把我钓到了](https://s.weibo.com/weibo?q=%23Jennie%E4%B8%80%E5%BC%80%E5%8F%A3%E5%B0%B1%E6%8A%8A%E6%88%91%E9%92%93%E5%88%B0%E4%BA%86%23) `118.7K 🔥` `NEW`
1. [六个合法查询网站帮你看清一个人](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%AA%E5%90%88%E6%B3%95%E6%9F%A5%E8%AF%A2%E7%BD%91%E7%AB%99%E5%B8%AE%E4%BD%A0%E7%9C%8B%E6%B8%85%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `111.1K 🔥` `NEW`
1. [王楚然演技 (Wang Churan's acting skills)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%BC%94%E6%8A%80%23) `107.0K 🔥` `NEW`
1. [日本在菲律宾培植代理人挑衅中国](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%A8%E8%8F%B2%E5%BE%8B%E5%AE%BE%E5%9F%B9%E6%A4%8D%E4%BB%A3%E7%90%86%E4%BA%BA%E6%8C%91%E8%A1%85%E4%B8%AD%E5%9B%BD%23) `104.4K 🔥` `NEW`
1. [为什么很多餐馆都在提供免费柠檬水](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%A4%9A%E9%A4%90%E9%A6%86%E9%83%BD%E5%9C%A8%E6%8F%90%E4%BE%9B%E5%85%8D%E8%B4%B9%E6%9F%A0%E6%AA%AC%E6%B0%B4%23) `94.3K 🔥` `NEW`
1. [官方通报教师用手背打学生脸](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%95%99%E5%B8%88%E7%94%A8%E6%89%8B%E8%83%8C%E6%89%93%E5%AD%A6%E7%94%9F%E8%84%B8%23) `93.4K 🔥` `NEW`
1. [米兰冬奥首金诞生](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E9%87%91%E8%AF%9E%E7%94%9F%23) `88.6K 🔥` `NEW`
1. [谷爱凌身边的东北甜妹是谁](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BA%AB%E8%BE%B9%E7%9A%84%E4%B8%9C%E5%8C%97%E7%94%9C%E5%A6%B9%E6%98%AF%E8%B0%81%23) `87.4K 🔥` `NEW`
1. [陈天润见面会](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A4%A9%E6%B6%A6%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `82.7K 🔥` `NEW`
1. [王濛冠军的含金量还在上升](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%86%A0%E5%86%9B%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `81.8K 🔥` `NEW`
1. [华晨宇 本命年和本命人一起过](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%20%E6%9C%AC%E5%91%BD%E5%B9%B4%E5%92%8C%E6%9C%AC%E5%91%BD%E4%BA%BA%E4%B8%80%E8%B5%B7%E8%BF%87%23) `79.3K 🔥` `NEW`
1. [aespa香港演唱会](https://s.weibo.com/weibo?q=%23aespa%E9%A6%99%E6%B8%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `79.2K 🔥` `NEW`
1. [50天赚10万买奔驰黑茶骗局被曝光 (Earn 100,000 in 50 days and buy Mercedes-Benz black tea scam exposed)](https://s.weibo.com/weibo?q=%2350%E5%A4%A9%E8%B5%9A10%E4%B8%87%E4%B9%B0%E5%A5%94%E9%A9%B0%E9%BB%91%E8%8C%B6%E9%AA%97%E5%B1%80%E8%A2%AB%E6%9B%9D%E5%85%89%23) `77.2K 🔥` `NEW`
1. [谷爱凌第二轮75.30分](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%BA%8C%E8%BD%AE75.30%E5%88%86%23) `76.6K 🔥` `NEW`
1. [黄明昊演唱会嘉宾马思纯](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%98%8E%E6%98%8A%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%E9%A9%AC%E6%80%9D%E7%BA%AF%23) `72.6K 🔥` `NEW`
1. [这是爱豆那谁是吴磊](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E7%88%B1%E8%B1%86%E9%82%A3%E8%B0%81%E6%98%AF%E5%90%B4%E7%A3%8A%23) `71.8K 🔥` `NEW`
1. [单板滑雪男子大跳台决赛](https://s.weibo.com/weibo?q=%23%E5%8D%95%E6%9D%BF%E6%BB%91%E9%9B%AA%E7%94%B7%E5%AD%90%E5%A4%A7%E8%B7%B3%E5%8F%B0%E5%86%B3%E8%B5%9B%23) `65.5K 🔥` `NEW`
1. [12306没票微信平台还能买到](https://s.weibo.com/weibo?q=%2312306%E6%B2%A1%E7%A5%A8%E5%BE%AE%E4%BF%A1%E5%B9%B3%E5%8F%B0%E8%BF%98%E8%83%BD%E4%B9%B0%E5%88%B0%23) `65.4K 🔥` `NEW`
1. [熬夜看苏翊鸣决赛](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E7%9C%8B%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%86%B3%E8%B5%9B%23) `62.0K 🔥` `NEW`
1. [中式Viper](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%BC%8FViper%23) `62.0K 🔥` `NEW`
1. [黄明昊演唱会](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%98%8E%E6%98%8A%E6%BC%94%E5%94%B1%E4%BC%9A%23) `62.0K 🔥` `NEW`

Updated at 2026-02-08 00:01:48

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
