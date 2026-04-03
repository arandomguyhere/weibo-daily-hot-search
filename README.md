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

1. [优思益发布海外工厂情况声明 (Unisei releases statement on overseas factory conditions)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%8F%91%E5%B8%83%E6%B5%B7%E5%A4%96%E5%B7%A5%E5%8E%82%E6%83%85%E5%86%B5%E5%A3%B0%E6%98%8E%23) `804.1K 🔥` `NEW`
1. [鞠婧祎5万剧宣红包](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E5%E4%B8%87%E5%89%A7%E5%AE%A3%E7%BA%A2%E5%8C%85%23) `448.7K 🔥` `NEW`
1. [张雪为何不用中国车手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E4%B8%BA%E4%BD%95%E4%B8%8D%E7%94%A8%E4%B8%AD%E5%9B%BD%E8%BD%A6%E6%89%8B%23) `318.9K 🔥` `NEW`
1. [月鳞绮纪破万](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E7%A0%B4%E4%B8%87%23) `317.4K 🔥` `NEW`
1. [特步二公主生娃](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%AD%A5%E4%BA%8C%E5%85%AC%E4%B8%BB%E7%94%9F%E5%A8%83%23) `193.8K 🔥` `NEW`
1. [父女双尸案女儿去世时仅重24公斤](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%A5%B3%E5%8F%8C%E5%B0%B8%E6%A1%88%E5%A5%B3%E5%84%BF%E5%8E%BB%E4%B8%96%E6%97%B6%E4%BB%85%E9%87%8D24%E5%85%AC%E6%96%A4%23) `178.4K 🔥` `NEW`
1. [NCT成员回复李马克](https://s.weibo.com/weibo?q=%23NCT%E6%88%90%E5%91%98%E5%9B%9E%E5%A4%8D%E6%9D%8E%E9%A9%AC%E5%85%8B%23) `161.3K 🔥` `NEW`
1. [迪丽热巴素人婚纱模特时期](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%B4%A0%E4%BA%BA%E5%A9%9A%E7%BA%B1%E6%A8%A1%E7%89%B9%E6%97%B6%E6%9C%9F%23) `155.8K 🔥` `NEW`
1. [用三星手机的人都懂](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%B8%89%E6%98%9F%E6%89%8B%E6%9C%BA%E7%9A%84%E4%BA%BA%E9%83%BD%E6%87%82%23) `139.8K 🔥` `NEW`
1. [华人父女双尸案细节曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BA%BA%E7%88%B6%E5%A5%B3%E5%8F%8C%E5%B0%B8%E6%A1%88%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `139.7K 🔥` `NEW`
1. [猫 回避依恋型人格 (cat avoidant attachment personality)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E5%9B%9E%E9%81%BF%E4%BE%9D%E6%81%8B%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `139.7K 🔥` `NEW`
1. [董宇辉近30天掉粉超14万](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E8%BF%9130%E5%A4%A9%E6%8E%89%E7%B2%89%E8%B6%8514%E4%B8%87%23) `139.6K 🔥` `NEW`
1. [红果全面下架桃花簪](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%85%A8%E9%9D%A2%E4%B8%8B%E6%9E%B6%E6%A1%83%E8%8A%B1%E7%B0%AA%23) `137.6K 🔥` `NEW`
1. [爆火鸡煲店的鸡最多还能吃2个月](https://s.weibo.com/weibo?q=%23%E7%88%86%E7%81%AB%E9%B8%A1%E7%85%B2%E5%BA%97%E7%9A%84%E9%B8%A1%E6%9C%80%E5%A4%9A%E8%BF%98%E8%83%BD%E5%90%832%E4%B8%AA%E6%9C%88%23) `136.2K 🔥` `NEW`
1. [云合](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%90%88%23) `135.5K 🔥` `NEW`
1. [iPhone18Pro深红配色](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%B7%B1%E7%BA%A2%E9%85%8D%E8%89%B2%23) `123.7K 🔥` `NEW`
1. [iPhone18Pro黑色款或继续缺席](https://s.weibo.com/weibo?q=%23iPhone18Pro%E9%BB%91%E8%89%B2%E6%AC%BE%E6%88%96%E7%BB%A7%E7%BB%AD%E7%BC%BA%E5%B8%AD%23) `103.9K 🔥` `NEW`
1. [王楚钦今晚独扛国乒大旗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BB%8A%E6%99%9A%E7%8B%AC%E6%89%9B%E5%9B%BD%E4%B9%92%E5%A4%A7%E6%97%97%23) `99.8K 🔥` `NEW`
1. [女子把XXXXL号搁浅皇带鱼推回大海](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8A%8AXXXXL%E5%8F%B7%E6%90%81%E6%B5%85%E7%9A%87%E5%B8%A6%E9%B1%BC%E6%8E%A8%E5%9B%9E%E5%A4%A7%E6%B5%B7%23) `97.8K 🔥` `NEW`
1. [容易想太多的人有救了](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%98%93%E6%83%B3%E5%A4%AA%E5%A4%9A%E7%9A%84%E4%BA%BA%E6%9C%89%E6%95%91%E4%BA%86%23) `93.4K 🔥` `NEW`
1. [张雪14岁儿子已是专业级越野赛车手 (Zhang Xue’s 14-year-old son is already a professional cross-country racer)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA14%E5%B2%81%E5%84%BF%E5%AD%90%E5%B7%B2%E6%98%AF%E4%B8%93%E4%B8%9A%E7%BA%A7%E8%B6%8A%E9%87%8E%E8%B5%9B%E8%BD%A6%E6%89%8B%23) `92.2K 🔥` `NEW`
1. [中方回应美军摧毁伊朗民用桥梁](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%86%9B%E6%91%A7%E6%AF%81%E4%BC%8A%E6%9C%97%E6%B0%91%E7%94%A8%E6%A1%A5%E6%A2%81%23) `91.6K 🔥` `NEW`
1. [被衣服报复了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%A1%A3%E6%9C%8D%E6%8A%A5%E5%A4%8D%E4%BA%86%23) `89.9K 🔥` `NEW`
1. [女演员裙子着火一路奔跑跳进水中](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E8%A3%99%E5%AD%90%E7%9D%80%E7%81%AB%E4%B8%80%E8%B7%AF%E5%A5%94%E8%B7%91%E8%B7%B3%E8%BF%9B%E6%B0%B4%E4%B8%AD%23) `83.9K 🔥` `NEW`
1. [优思益称整体处于崩溃边缘](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E7%A7%B0%E6%95%B4%E4%BD%93%E5%A4%84%E4%BA%8E%E5%B4%A9%E6%BA%83%E8%BE%B9%E7%BC%98%23) `81.2K 🔥` `NEW`
1. [RIIZE 不会忘记forever](https://s.weibo.com/weibo?q=%23RIIZE%20%E4%B8%8D%E4%BC%9A%E5%BF%98%E8%AE%B0forever%23) `79.1K 🔥` `NEW`
1. [中方不认同伊朗对海合会国家攻击 (China does not agree with Iran’s attacks on GCC countries)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E4%B8%8D%E8%AE%A4%E5%90%8C%E4%BC%8A%E6%9C%97%E5%AF%B9%E6%B5%B7%E5%90%88%E4%BC%9A%E5%9B%BD%E5%AE%B6%E6%94%BB%E5%87%BB%23) `1.1M 🔥` `+101%`
1. [王一博在蕉内欢迎光临 (Welcome to Wang Yibo in Jiao Nei)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%9C%A8%E8%95%89%E5%86%85%E6%AC%A2%E8%BF%8E%E5%85%89%E4%B8%B4%23) `318.1K 🔥` `+68%`
1. [伊朗媒体发布美国F35残骸照](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AA%92%E4%BD%93%E5%8F%91%E5%B8%83%E7%BE%8E%E5%9B%BDF35%E6%AE%8B%E9%AA%B8%E7%85%A7%23) `252.6K 🔥` `+82%`
1. [李马克解约退团 (Mark Li terminates contract and quits group)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A9%AC%E5%85%8B%E8%A7%A3%E7%BA%A6%E9%80%80%E5%9B%A2%23) `199.8K 🔥` `+21%`
1. [烈士墓前全屏马赛克](https://s.weibo.com/weibo?q=%23%E7%83%88%E5%A3%AB%E5%A2%93%E5%89%8D%E5%85%A8%E5%B1%8F%E9%A9%AC%E8%B5%9B%E5%85%8B%23) `139.8K 🔥` `+38%`
1. [致敬所有隐蔽战线的无名英雄](https://s.weibo.com/weibo?q=%23%E8%87%B4%E6%95%AC%E6%89%80%E6%9C%89%E9%9A%90%E8%94%BD%E6%88%98%E7%BA%BF%E7%9A%84%E6%97%A0%E5%90%8D%E8%8B%B1%E9%9B%84%23) `618.1K 🔥`
1. [26款海豹06GT上市交付快人一步 (26 models of Seal 06GT are launched and delivered quickly)](https://s.weibo.com/weibo?q=%2326%E6%AC%BE%E6%B5%B7%E8%B1%B906GT%E4%B8%8A%E5%B8%82%E4%BA%A4%E4%BB%98%E5%BF%AB%E4%BA%BA%E4%B8%80%E6%AD%A5%23) `531.7K 🔥`
1. [娱乐圈姓李的有点说法](https://s.weibo.com/weibo?q=%23%E5%A8%B1%E4%B9%90%E5%9C%88%E5%A7%93%E6%9D%8E%E7%9A%84%E6%9C%89%E7%82%B9%E8%AF%B4%E6%B3%95%23) `185.2K 🔥`
1. [时代峰峻高会声明 (Statement from Times Summit)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%AB%98%E4%BC%9A%E5%A3%B0%E6%98%8E%23) `183.5K 🔥`
1. [袁咏仪说浪姐请不到我李心洁请到 (Anita Yuen said Sister Lang couldn't invite me, Li Xinjie could.)](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%92%8F%E4%BB%AA%E8%AF%B4%E6%B5%AA%E5%A7%90%E8%AF%B7%E4%B8%8D%E5%88%B0%E6%88%91%E6%9D%8E%E5%BF%83%E6%B4%81%E8%AF%B7%E5%88%B0%23) `139.7K 🔥`
1. [心疼朴志晟](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E6%9C%B4%E5%BF%97%E6%99%9F%23) `138.1K 🔥`
1. [老爸评测就优思益事件道歉](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E8%AF%84%E6%B5%8B%E5%B0%B1%E4%BC%98%E6%80%9D%E7%9B%8A%E4%BA%8B%E4%BB%B6%E9%81%93%E6%AD%89%23) `134.6K 🔥`
1. [张凌赫待播剧一个是医生一个是草根](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BE%85%E6%92%AD%E5%89%A7%E4%B8%80%E4%B8%AA%E6%98%AF%E5%8C%BB%E7%94%9F%E4%B8%80%E4%B8%AA%E6%98%AF%E8%8D%89%E6%A0%B9%23) `134.1K 🔥`
1. [黄灿灿罗予彤大学男友同届同班](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E7%BD%97%E4%BA%88%E5%BD%A4%E5%A4%A7%E5%AD%A6%E7%94%B7%E5%8F%8B%E5%90%8C%E5%B1%8A%E5%90%8C%E7%8F%AD%23) `122.2K 🔥`
1. [Manner涨价原因](https://s.weibo.com/weibo?q=%23Manner%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `100.5K 🔥`
1. [王力宏巡回演唱会官宣](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `95.8K 🔥`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `88.5K 🔥`
1. [霸王茶姬疑似被日本抄袭](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E7%96%91%E4%BC%BC%E8%A2%AB%E6%97%A5%E6%9C%AC%E6%8A%84%E8%A2%AD%23) `328.3K 🔥` `-41%`
1. [原来身份证不是全国统一的 (It turns out that ID cards are not uniform across the country.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%B8%8D%E6%98%AF%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%23) `294.8K 🔥` `-72%`
1. [国乒男线仅剩王楚钦 (Only Wang Chuqin remains in the national table tennis men’s line)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E7%BA%BF%E4%BB%85%E5%89%A9%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `200.3K 🔥` `-75%`
1. [李永钦 退团瓜](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B0%B8%E9%92%A6%20%E9%80%80%E5%9B%A2%E7%93%9C%23) `128.0K 🔥` `-23%`
1. [猪精液制成的眼药水可治疗眼肿瘤 (Eye drops made from pig semen can treat eye tumors)](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E7%B2%BE%E6%B6%B2%E5%88%B6%E6%88%90%E7%9A%84%E7%9C%BC%E8%8D%AF%E6%B0%B4%E5%8F%AF%E6%B2%BB%E7%96%97%E7%9C%BC%E8%82%BF%E7%98%A4%23) `123.1K 🔥` `-26%`
1. [冰湖重生剧方道歉](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%89%A7%E6%96%B9%E9%81%93%E6%AD%89%23) `123.0K 🔥` `-27%`
1. [香港女星在珠海买房](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%A5%B3%E6%98%9F%E5%9C%A8%E7%8F%A0%E6%B5%B7%E4%B9%B0%E6%88%BF%23) `102.9K 🔥` `-37%`
1. [范丞丞赵今麦 绝命循环](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%B5%B5%E4%BB%8A%E9%BA%A6%20%E7%BB%9D%E5%91%BD%E5%BE%AA%E7%8E%AF%23) `97.3K 🔥` `-41%`
1. [TOP铁了心要进步](https://s.weibo.com/weibo?q=%23TOP%E9%93%81%E4%BA%86%E5%BF%83%E8%A6%81%E8%BF%9B%E6%AD%A5%23) `76.7K 🔥` `-22%`

Updated at 2026-04-03 17:11:05

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
