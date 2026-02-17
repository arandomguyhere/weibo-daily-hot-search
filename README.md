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

1. [李琰教练庆祝中国队铜牌 (Coach Li Yan celebrates the bronze medal of the Chinese team)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%90%B0%E6%95%99%E7%BB%83%E5%BA%86%E7%A5%9D%E4%B8%AD%E5%9B%BD%E9%98%9F%E9%93%9C%E7%89%8C%23) `60.0K 🔥` `NEW`
1. [欧冠联赛](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E8%81%94%E8%B5%9B%23) `44.0K 🔥` `NEW`
1. [刘瀚彬铜牌](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%80%9A%E5%BD%AC%E9%93%9C%E7%89%8C%23) `32.6K 🔥` `NEW`
1. [苏翊鸣第五位登场](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%AC%AC%E4%BA%94%E4%BD%8D%E7%99%BB%E5%9C%BA%23) `24.7K 🔥` `NEW`
1. [原来马生气了也会已读不回](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%A9%AC%E7%94%9F%E6%B0%94%E4%BA%86%E4%B9%9F%E4%BC%9A%E5%B7%B2%E8%AF%BB%E4%B8%8D%E5%9B%9E%23) `24.7K 🔥` `NEW`
1. [B站春晚 夯 (Station B Spring Festival Gala)](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E6%98%A5%E6%99%9A%20%E5%A4%AF%23) `686.2K 🔥` `+43%`
1. [中国速滑男团铜牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%9F%E6%BB%91%E7%94%B7%E5%9B%A2%E9%93%9C%E7%89%8C%23) `483.8K 🔥` `+36%`
1. [2026新春走基层](https://s.weibo.com/weibo?q=%232026%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%23) `385.4K 🔥` `+45%`
1. [宋小宝 小品翻车 (Song Xiaobao skit overturned)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B0%8F%E5%AE%9D%20%E5%B0%8F%E5%93%81%E7%BF%BB%E8%BD%A6%23) `290.4K 🔥` `+79%`
1. [都穿亮片裙不告诉王玉雯](https://s.weibo.com/weibo?q=%23%E9%83%BD%E7%A9%BF%E4%BA%AE%E7%89%87%E8%A3%99%E4%B8%8D%E5%91%8A%E8%AF%89%E7%8E%8B%E7%8E%89%E9%9B%AF%23) `59.9K 🔥` `+37%`
1. [看熊出没孩子开心家长放心 (Watching bears come and go, children are happy, parents are reassured)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%86%8A%E5%87%BA%E6%B2%A1%E5%AD%A9%E5%AD%90%E5%BC%80%E5%BF%83%E5%AE%B6%E9%95%BF%E6%94%BE%E5%BF%83%23) `59.9K 🔥` `+119%`
1. [B站语言类节目 赢麻了 (The language program at Station B is a winner)](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E8%AF%AD%E8%A8%80%E7%B1%BB%E8%8A%82%E7%9B%AE%20%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `59.9K 🔥` `+48%`
1. [山东一村600多人集体磕头拜年](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%B8%80%E6%9D%91600%E5%A4%9A%E4%BA%BA%E9%9B%86%E4%BD%93%E7%A3%95%E5%A4%B4%E6%8B%9C%E5%B9%B4%23) `59.8K 🔥` `+117%`
1. [三文鱼其实是海底大肥猪 (Salmon is actually a big fat pig on the bottom of the sea)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%96%87%E9%B1%BC%E5%85%B6%E5%AE%9E%E6%98%AF%E6%B5%B7%E5%BA%95%E5%A4%A7%E8%82%A5%E7%8C%AA%23) `52.5K 🔥` `+49%`
1. [比艺人还帅的韩国花滑天才](https://s.weibo.com/weibo?q=%23%E6%AF%94%E8%89%BA%E4%BA%BA%E8%BF%98%E5%B8%85%E7%9A%84%E9%9F%A9%E5%9B%BD%E8%8A%B1%E6%BB%91%E5%A4%A9%E6%89%8D%23) `52.3K 🔥` `+69%`
1. [王菲化妆师改口问就是AI (Faye Wong’s makeup artist changed her mind and asked that it was AI)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%8C%96%E5%A6%86%E5%B8%88%E6%94%B9%E5%8F%A3%E9%97%AE%E5%B0%B1%E6%98%AFAI%23) `51.9K 🔥` `+90%`
1. [今年所有法定假日全与周末重合 (All statutory holidays this year coincide with weekends)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%89%80%E6%9C%89%E6%B3%95%E5%AE%9A%E5%81%87%E6%97%A5%E5%85%A8%E4%B8%8E%E5%91%A8%E6%9C%AB%E9%87%8D%E5%90%88%23) `51.1K 🔥` `+86%`
1. [冬奥会露内衣品牌女选手引来广告商 (Brand of female athletes exposing underwear at Winter Olympics attracts advertisers)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%E9%9C%B2%E5%86%85%E8%A1%A3%E5%93%81%E7%89%8C%E5%A5%B3%E9%80%89%E6%89%8B%E5%BC%95%E6%9D%A5%E5%B9%BF%E5%91%8A%E5%95%86%23) `50.0K 🔥` `+85%`
1. [全国初二回娘家的女婿belike (The son-in-law who returned to his parents' home in the second grade of junior high school across the country belike)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%88%9D%E4%BA%8C%E5%9B%9E%E5%A8%98%E5%AE%B6%E7%9A%84%E5%A5%B3%E5%A9%BFbelike%23) `49.8K 🔥` `+84%`
1. [B站小品 笑力竭了](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E5%B0%8F%E5%93%81%20%E7%AC%91%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `48.7K 🔥` `+89%`
1. [瞿颖胡兵 为啥没在一起 (Qu Ying and Hu Bing why are they not together?)](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E8%83%A1%E5%85%B5%20%E4%B8%BA%E5%95%A5%E6%B2%A1%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `46.4K 🔥` `+97%`
1. [中国游客被困俄罗斯极光村超40小时 (Chinese tourists were trapped in Russia's Aurora Village for more than 40 hours)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%A2%AB%E5%9B%B0%E4%BF%84%E7%BD%97%E6%96%AF%E6%9E%81%E5%85%89%E6%9D%91%E8%B6%8540%E5%B0%8F%E6%97%B6%23) `44.0K 🔥` `+64%`
1. [千万别贪便宜买监控 (Don’t buy surveillance cameras for cheap)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E8%B4%AA%E4%BE%BF%E5%AE%9C%E4%B9%B0%E7%9B%91%E6%8E%A7%23) `41.1K 🔥` `+51%`
1. [金价 (gold price)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `40.9K 🔥` `+69%`
1. [马斯克机器人涉色情被爱尔兰调查](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%B6%89%E8%89%B2%E6%83%85%E8%A2%AB%E7%88%B1%E5%B0%94%E5%85%B0%E8%B0%83%E6%9F%A5%23) `40.6K 🔥` `+68%`
1. [金价银价直线跳水](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%23) `40.1K 🔥` `+67%`
1. [正确走路姿势是用臀而不是腿](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E7%A1%AE%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%E6%98%AF%E7%94%A8%E8%87%80%E8%80%8C%E4%B8%8D%E6%98%AF%E8%85%BF%23) `40.1K 🔥` `+69%`
1. [张瑞阳女单晋级自由滑 (Zhang Ruiyang advances to women's singles free skate)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%91%9E%E9%98%B3%E5%A5%B3%E5%8D%95%E6%99%8B%E7%BA%A7%E8%87%AA%E7%94%B1%E6%BB%91%23) `39.5K 🔥` `+96%`
1. [不是年味淡了而是轮到我们做主了 (It’s not that the spirit of the new year has faded, but that it’s our turn to make the decision)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%98%AF%E5%B9%B4%E5%91%B3%E6%B7%A1%E4%BA%86%E8%80%8C%E6%98%AF%E8%BD%AE%E5%88%B0%E6%88%91%E4%BB%AC%E5%81%9A%E4%B8%BB%E4%BA%86%23) `39.4K 🔥` `+69%`
1. [镖人 真的好看](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E7%9C%9F%E7%9A%84%E5%A5%BD%E7%9C%8B%23) `38.9K 🔥` `+45%`
1. [沙溢给白鹿发了多少压岁钱](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%BA%A2%E7%BB%99%E7%99%BD%E9%B9%BF%E5%8F%91%E4%BA%86%E5%A4%9A%E5%B0%91%E5%8E%8B%E5%B2%81%E9%92%B1%23) `38.8K 🔥` `+72%`
1. [还是B站春晚敢演](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%98%AFB%E7%AB%99%E6%98%A5%E6%99%9A%E6%95%A2%E6%BC%94%23) `32.4K 🔥` `+84%`
1. [母女过年炸丸子变大型翻车现场](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E5%A5%B3%E8%BF%87%E5%B9%B4%E7%82%B8%E4%B8%B8%E5%AD%90%E5%8F%98%E5%A4%A7%E5%9E%8B%E7%BF%BB%E8%BD%A6%E7%8E%B0%E5%9C%BA%23) `31.4K 🔥` `+35%`
1. [95后女生上门做年夜饭爆单月入4万](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%A5%B3%E7%94%9F%E4%B8%8A%E9%97%A8%E5%81%9A%E5%B9%B4%E5%A4%9C%E9%A5%AD%E7%88%86%E5%8D%95%E6%9C%88%E5%85%A54%E4%B8%87%23) `30.9K 🔥` `+43%`
1. [俄罗斯警告欧洲大国 (Russia warns European powers)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E8%AD%A6%E5%91%8A%E6%AC%A7%E6%B4%B2%E5%A4%A7%E5%9B%BD%23) `30.7K 🔥` `+37%`
1. [飞驰人生 (Flying through life)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F%23) `30.3K 🔥` `+32%`
1. [成何体统 与妻书 (How decent is it to write a letter to my wife?)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E4%B8%8E%E5%A6%BB%E4%B9%A6%23) `30.0K 🔥` `+60%`
1. [初二和初五的财神一样吗](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%BA%8C%E5%92%8C%E5%88%9D%E4%BA%94%E7%9A%84%E8%B4%A2%E7%A5%9E%E4%B8%80%E6%A0%B7%E5%90%97%23) `28.8K 🔥` `+50%`
1. [张瑞阳女单短节目59.38分 (Zhang Ruiyang’s women’s singles short program scored 59.38 points)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%91%9E%E9%98%B3%E5%A5%B3%E5%8D%95%E7%9F%AD%E8%8A%82%E7%9B%AE59.38%E5%88%86%23) `26.8K 🔥` `+38%`
1. [易烊千玺台词含金量](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%8F%B0%E8%AF%8D%E5%90%AB%E9%87%91%E9%87%8F%23) `26.7K 🔥` `+55%`
1. [王菲同款耳环官网售罄 (Faye Wong's same earrings are sold out on the official website)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%90%8C%E6%AC%BE%E8%80%B3%E7%8E%AF%E5%AE%98%E7%BD%91%E5%94%AE%E7%BD%84%23) `25.1K 🔥` `+41%`
1. [A市纸啊 (A market paper)](https://s.weibo.com/weibo?q=%23A%E5%B8%82%E7%BA%B8%E5%95%8A%23) `24.7K 🔥` `+32%`
1. [惊蛰 (Waking of Insects)](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%23) `24.7K 🔥` `+31%`
1. [速度滑冰](https://s.weibo.com/weibo?q=%23%E9%80%9F%E5%BA%A6%E6%BB%91%E5%86%B0%23) `24.7K 🔥` `+43%`
1. [虞书欣云初令拜年照 (Yu Shuxinyun's first New Year's greeting photo)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BA%91%E5%88%9D%E4%BB%A4%E6%8B%9C%E5%B9%B4%E7%85%A7%23) `24.7K 🔥` `+43%`
1. [镖人打戏 (Escort fight scene)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E6%89%93%E6%88%8F%23) `24.7K 🔥` `+43%`
1. [很火但难吃的小吃 (Very popular but unpalatable snacks)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E7%81%AB%E4%BD%86%E9%9A%BE%E5%90%83%E7%9A%84%E5%B0%8F%E5%90%83%23) `30.6K 🔥`
1. [凌晨4点起床吃年夜饭是什么体验 (What’s it like to get up at 4 a.m. to have New Year’s Eve dinner?)](https://s.weibo.com/weibo?q=%23%E5%87%8C%E6%99%A84%E7%82%B9%E8%B5%B7%E5%BA%8A%E5%90%83%E5%B9%B4%E5%A4%9C%E9%A5%AD%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%93%E9%AA%8C%23) `25.9K 🔥`
1. [张瑞阳灵魂发问为啥没上60分 (Zhang Ruiyang’s soul asked why he didn’t score 60 points)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%91%9E%E9%98%B3%E7%81%B5%E9%AD%82%E5%8F%91%E9%97%AE%E4%B8%BA%E5%95%A5%E6%B2%A1%E4%B8%8A60%E5%88%86%23) `24.7K 🔥`
1. [年度女演员杨幂](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%BA%A6%E5%A5%B3%E6%BC%94%E5%91%98%E6%9D%A8%E5%B9%82%23) `24.7K 🔥`

Updated at 2026-02-18 07:14:36

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
