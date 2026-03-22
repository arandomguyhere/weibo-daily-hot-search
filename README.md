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

1. [9组数据见证大国治水生动画卷 (9 sets of data testify to the animation volume of aquatic governance in a great country)](https://s.weibo.com/weibo?q=%239%E7%BB%84%E6%95%B0%E6%8D%AE%E8%A7%81%E8%AF%81%E5%A4%A7%E5%9B%BD%E6%B2%BB%E6%B0%B4%E7%94%9F%E5%8A%A8%E7%94%BB%E5%8D%B7%23) `593.8K 🔥` `NEW`
1. [周也 毛利兰](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%20%E6%AF%9B%E5%88%A9%E5%85%B0%23) `475.1K 🔥` `NEW`
1. [上飞猪抢徐良演唱会共赴青春之约](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%A3%9E%E7%8C%AA%E6%8A%A2%E5%BE%90%E8%89%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%85%B1%E8%B5%B4%E9%9D%92%E6%98%A5%E4%B9%8B%E7%BA%A6%23) `214.5K 🔥` `NEW`
1. [伊朗媒体称伊官员提出停战六项条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AA%92%E4%BD%93%E7%A7%B0%E4%BC%8A%E5%AE%98%E5%91%98%E6%8F%90%E5%87%BA%E5%81%9C%E6%88%98%E5%85%AD%E9%A1%B9%E6%9D%A1%E4%BB%B6%23) `210.4K 🔥` `NEW`
1. [中国石化提示提前错峰加油](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%B3%E5%8C%96%E6%8F%90%E7%A4%BA%E6%8F%90%E5%89%8D%E9%94%99%E5%B3%B0%E5%8A%A0%E6%B2%B9%23) `171.5K 🔥` `NEW`
1. [汪顺亚军](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E9%A1%BA%E4%BA%9A%E5%86%9B%23) `153.8K 🔥` `NEW`
1. [内娱男流量五官大赏](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%94%B7%E6%B5%81%E9%87%8F%E4%BA%94%E5%AE%98%E5%A4%A7%E8%B5%8F%23) `150.6K 🔥` `NEW`
1. [苍兰诀](https://s.weibo.com/weibo?q=%23%E8%8B%8D%E5%85%B0%E8%AF%80%23) `126.5K 🔥` `NEW`
1. [G2对战BLG](https://s.weibo.com/weibo?q=%23G2%E5%AF%B9%E6%88%98BLG%23) `125.7K 🔥` `NEW`
1. [方可能不能不遮热巴的太阳穴](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%8F%AF%E8%83%BD%E4%B8%8D%E8%83%BD%E4%B8%8D%E9%81%AE%E7%83%AD%E5%B7%B4%E7%9A%84%E5%A4%AA%E9%98%B3%E7%A9%B4%23) `124.7K 🔥` `NEW`
1. [齐旻从未想过杀掉母妃 (Qi Min never thought of killing his mother and concubine)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%97%BB%E4%BB%8E%E6%9C%AA%E6%83%B3%E8%BF%87%E6%9D%80%E6%8E%89%E6%AF%8D%E5%A6%83%23) `122.3K 🔥` `NEW`
1. [逐玉爱奇艺直播要会员](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%88%B1%E5%A5%87%E8%89%BA%E7%9B%B4%E6%92%AD%E8%A6%81%E4%BC%9A%E5%91%98%23) `118.9K 🔥` `NEW`
1. [章若楠 无以言表好好演戏](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%20%E6%97%A0%E4%BB%A5%E8%A8%80%E8%A1%A8%E5%A5%BD%E5%A5%BD%E6%BC%94%E6%88%8F%23) `94.3K 🔥` `NEW`
1. [AG花花独狼吃鸡](https://s.weibo.com/weibo?q=%23AG%E8%8A%B1%E8%8A%B1%E7%8B%AC%E7%8B%BC%E5%90%83%E9%B8%A1%23) `89.6K 🔥` `NEW`
1. [珲春一国道现巨鸟过马路](https://s.weibo.com/weibo?q=%23%E7%8F%B2%E6%98%A5%E4%B8%80%E5%9B%BD%E9%81%93%E7%8E%B0%E5%B7%A8%E9%B8%9F%E8%BF%87%E9%A9%AC%E8%B7%AF%23) `85.4K 🔥` `NEW`
1. [逐玉像两波编剧在打架](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%83%8F%E4%B8%A4%E6%B3%A2%E7%BC%96%E5%89%A7%E5%9C%A8%E6%89%93%E6%9E%B6%23) `84.8K 🔥` `NEW`
1. [冬去春来半小时破三](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%8E%BB%E6%98%A5%E6%9D%A5%E5%8D%8A%E5%B0%8F%E6%97%B6%E7%A0%B4%E4%B8%89%23) `82.9K 🔥` `NEW`
1. [2026全球先锋赛](https://s.weibo.com/weibo?q=%232026%E5%85%A8%E7%90%83%E5%85%88%E9%94%8B%E8%B5%9B%23) `80.8K 🔥` `NEW`
1. [张玉安3个月减掉20斤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%8E%89%E5%AE%893%E4%B8%AA%E6%9C%88%E5%87%8F%E6%8E%8920%E6%96%A4%23) `73.9K 🔥` `NEW`
1. [郑钦文三连胜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%B8%89%E8%BF%9E%E8%83%9C%23) `70.3K 🔥` `NEW`
1. [爱吃荔枝的人今年天塌了 (People who love lychees are in trouble this year)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E8%8D%94%E6%9E%9D%E7%9A%84%E4%BA%BA%E4%BB%8A%E5%B9%B4%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `1.1M 🔥` `+35%`
1. [双汇王中王火腿肠被曝吃出两根钢钉 (Shuanghui King of Kings ham sausage was exposed to have eaten two steel nails)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E6%B1%87%E7%8E%8B%E4%B8%AD%E7%8E%8B%E7%81%AB%E8%85%BF%E8%82%A0%E8%A2%AB%E6%9B%9D%E5%90%83%E5%87%BA%E4%B8%A4%E6%A0%B9%E9%92%A2%E9%92%89%23) `753.4K 🔥` `+226%`
1. [范世錡直播 (Fan Shiqi live broadcast)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%96%E9%8C%A1%E7%9B%B4%E6%92%AD%23) `126.4K 🔥` `+42%`
1. [武汉女孩8天胖8斤喊话顺德道歉](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%A5%B3%E5%AD%A98%E5%A4%A9%E8%83%968%E6%96%A4%E5%96%8A%E8%AF%9D%E9%A1%BA%E5%BE%B7%E9%81%93%E6%AD%89%23) `122.8K 🔥` `+49%`
1. [冬去春来](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%8E%BB%E6%98%A5%E6%9D%A5%23) `121.4K 🔥` `+23%`
1. [刚洗完澡别在浴室吹头发 (Don’t dry your hair in the bathroom right after you take a shower)](https://s.weibo.com/weibo?q=%23%E5%88%9A%E6%B4%97%E5%AE%8C%E6%BE%A1%E5%88%AB%E5%9C%A8%E6%B5%B4%E5%AE%A4%E5%90%B9%E5%A4%B4%E5%8F%91%23) `119.8K 🔥` `+28%`
1. [迪士尼平替把多少县城父母骗惨了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%B9%B3%E6%9B%BF%E6%8A%8A%E5%A4%9A%E5%B0%91%E5%8E%BF%E5%9F%8E%E7%88%B6%E6%AF%8D%E9%AA%97%E6%83%A8%E4%BA%86%23) `221.6K 🔥`
1. [逐玉直播](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%9B%B4%E6%92%AD%23) `215.3K 🔥`
1. [逐玉反盗版声明 (Zhuyu Anti-Piracy Statement)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%8F%8D%E7%9B%97%E7%89%88%E5%A3%B0%E6%98%8E%23) `205.9K 🔥`
1. [烤肠界的四大顶流](https://s.weibo.com/weibo?q=%23%E7%83%A4%E8%82%A0%E7%95%8C%E7%9A%84%E5%9B%9B%E5%A4%A7%E9%A1%B6%E6%B5%81%23) `195.1K 🔥`
1. [张凌赫的撕拉片又被热议了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E6%92%95%E6%8B%89%E7%89%87%E5%8F%88%E8%A2%AB%E7%83%AD%E8%AE%AE%E4%BA%86%23) `194.7K 🔥`
1. [张靓颖回应do脸翻车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E5%9B%9E%E5%BA%94do%E8%84%B8%E7%BF%BB%E8%BD%A6%23) `188.0K 🔥`
1. [金价上演断崖式下跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8A%E6%BC%94%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E8%B7%8C%23) `185.1K 🔥`
1. [辛芷蕾 多邻国 (Xin Zhilei Duolingo)](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%20%E5%A4%9A%E9%82%BB%E5%9B%BD%23) `181.0K 🔥`
1. [茂茂你终于结婚生子了](https://s.weibo.com/weibo?q=%23%E8%8C%82%E8%8C%82%E4%BD%A0%E7%BB%88%E4%BA%8E%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%E4%BA%86%23) `150.2K 🔥`
1. [高以翔前女友BeIIa官宣怀孕 (Godfrey Gao’s ex-girlfriend BeIIa officially announces pregnancy)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BB%A5%E7%BF%94%E5%89%8D%E5%A5%B3%E5%8F%8BBeIIa%E5%AE%98%E5%AE%A3%E6%80%80%E5%AD%95%23) `130.6K 🔥`
1. [23岁女子刚结婚一年就闭经](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E5%A5%B3%E5%AD%90%E5%88%9A%E7%BB%93%E5%A9%9A%E4%B8%80%E5%B9%B4%E5%B0%B1%E9%97%AD%E7%BB%8F%23) `127.2K 🔥`
1. [爬山就得穿鲜艳的衣服 (You have to wear bright clothes when climbing mountains)](https://s.weibo.com/weibo?q=%23%E7%88%AC%E5%B1%B1%E5%B0%B1%E5%BE%97%E7%A9%BF%E9%B2%9C%E8%89%B3%E7%9A%84%E8%A1%A3%E6%9C%8D%23) `88.4K 🔥`
1. [太古里认领唐嫣](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8F%A4%E9%87%8C%E8%AE%A4%E9%A2%86%E5%94%90%E5%AB%A3%23) `87.3K 🔥`
1. [专家称黄金被套的投资者确实很多](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E9%BB%84%E9%87%91%E8%A2%AB%E5%A5%97%E7%9A%84%E6%8A%95%E8%B5%84%E8%80%85%E7%A1%AE%E5%AE%9E%E5%BE%88%E5%A4%9A%23) `84.5K 🔥`
1. [23岁吴世勋Monster](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E5%90%B4%E4%B8%96%E5%8B%8BMonster%23) `74.3K 🔥`
1. [香港发生亿元黄金劫案 (Billion dollar gold robbery in Hong Kong)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%8F%91%E7%94%9F%E4%BA%BF%E5%85%83%E9%BB%84%E9%87%91%E5%8A%AB%E6%A1%88%23) `196.7K 🔥` `-82%`
1. [迪丽热巴直播](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9B%B4%E6%92%AD%23) `178.3K 🔥` `-21%`
1. [减内脏脂肪最有效的方法 (The most effective way to reduce visceral fat)](https://s.weibo.com/weibo?q=%23%E5%87%8F%E5%86%85%E8%84%8F%E8%84%82%E8%82%AA%E6%9C%80%E6%9C%89%E6%95%88%E7%9A%84%E6%96%B9%E6%B3%95%23) `173.1K 🔥` `-24%`
1. [伊朗导弹在以本土砸出直径10米深坑](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%9C%A8%E4%BB%A5%E6%9C%AC%E5%9C%9F%E7%A0%B8%E5%87%BA%E7%9B%B4%E5%BE%8410%E7%B1%B3%E6%B7%B1%E5%9D%91%23) `169.2K 🔥` `-26%`
1. [女子久坐便血半年后确诊癌症晚期 (Woman diagnosed with terminal cancer six months after sitting for long periods of time and having bloody stools)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%85%E5%9D%90%E4%BE%BF%E8%A1%80%E5%8D%8A%E5%B9%B4%E5%90%8E%E7%A1%AE%E8%AF%8A%E7%99%8C%E7%97%87%E6%99%9A%E6%9C%9F%23) `135.1K 🔥` `-26%`
1. [王鸥 何九华](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%20%E4%BD%95%E4%B9%9D%E5%8D%8E%23) `133.6K 🔥` `-21%`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `89.2K 🔥` `-26%`
1. [金价八连跌消费者还是不敢买 (Gold prices have fallen for eight consecutive years, and consumers are still afraid to buy them)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%85%AB%E8%BF%9E%E8%B7%8C%E6%B6%88%E8%B4%B9%E8%80%85%E8%BF%98%E6%98%AF%E4%B8%8D%E6%95%A2%E4%B9%B0%23) `83.9K 🔥` `-47%`
1. [专家称梅姨可能觉得自己在做善事](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E6%A2%85%E5%A7%A8%E5%8F%AF%E8%83%BD%E8%A7%89%E5%BE%97%E8%87%AA%E5%B7%B1%E5%9C%A8%E5%81%9A%E5%96%84%E4%BA%8B%23) `83.6K 🔥` `-63%`
1. [蒯曼锁定伦敦世乒赛参赛资格 (Kuaiman locks in qualification for World Table Tennis Championships in London)](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC%E9%94%81%E5%AE%9A%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%8F%82%E8%B5%9B%E8%B5%84%E6%A0%BC%23) `72.0K 🔥` `-26%`

Updated at 2026-03-22 21:31:45

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
