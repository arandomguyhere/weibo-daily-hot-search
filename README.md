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

1. [哈兰德推人 进球无效 (Haaland pushed, goal disallowed)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%8E%A8%E4%BA%BA%20%E8%BF%9B%E7%90%83%E6%97%A0%E6%95%88%23) `1.9M 🔥` `NEW`
1. [邹市明说冉莹颖既要又要还要](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E8%AF%B4%E5%86%89%E8%8E%B9%E9%A2%96%E6%97%A2%E8%A6%81%E5%8F%88%E8%A6%81%E8%BF%98%E8%A6%81%23) `409.8K 🔥` `NEW`
1. [贝林厄姆踢哈兰德屁股](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E8%B8%A2%E5%93%88%E5%85%B0%E5%BE%B7%E5%B1%81%E8%82%A1%23) `306.6K 🔥` `NEW`
1. [贝林厄姆梅开二度](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `302.7K 🔥` `NEW`
1. [今年首个全国性暴雨红色预警来了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E9%A6%96%E4%B8%AA%E5%85%A8%E5%9B%BD%E6%80%A7%E6%9A%B4%E9%9B%A8%E7%BA%A2%E8%89%B2%E9%A2%84%E8%AD%A6%E6%9D%A5%E4%BA%86%23) `189.3K 🔥` `NEW`
1. [巴威登陆女记者直播时差点被吹跑](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%A5%B3%E8%AE%B0%E8%80%85%E7%9B%B4%E6%92%AD%E6%97%B6%E5%B7%AE%E7%82%B9%E8%A2%AB%E5%90%B9%E8%B7%91%23) `187.8K 🔥` `NEW`
1. [巴威登陆不等于危险解除](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%8D%B1%E9%99%A9%E8%A7%A3%E9%99%A4%23) `186.5K 🔥` `NEW`
1. [台风巴威减弱为强热带风暴](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%87%8F%E5%BC%B1%E4%B8%BA%E5%BC%BA%E7%83%AD%E5%B8%A6%E9%A3%8E%E6%9A%B4%23) `182.5K 🔥` `NEW`
1. [巴威发威了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%8F%91%E5%A8%81%E4%BA%86%23) `179.4K 🔥` `NEW`
1. [挪威压着英格兰打](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E5%8E%8B%E7%9D%80%E8%8B%B1%E6%A0%BC%E5%85%B0%E6%89%93%23) `177.3K 🔥` `NEW`
1. [挪威英格兰拖入加时赛 (Norway and England go into extra time)](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E8%8B%B1%E6%A0%BC%E5%85%B0%E6%8B%96%E5%85%A5%E5%8A%A0%E6%97%B6%E8%B5%9B%23) `176.6K 🔥` `NEW`
1. [功夫女足影评](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%BD%B1%E8%AF%84%23) `175.3K 🔥` `NEW`
1. [英格兰不能没有赖斯](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E4%B8%8D%E8%83%BD%E6%B2%A1%E6%9C%89%E8%B5%96%E6%96%AF%23) `174.5K 🔥` `NEW`
1. [巴威最新动态](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E5%8A%A8%E6%80%81%23) `170.9K 🔥` `NEW`
1. [短发的刘诗诗](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%8F%91%E7%9A%84%E5%88%98%E8%AF%97%E8%AF%97%23) `165.1K 🔥` `NEW`
1. [中央气象台时隔2年发暴雨红色预警](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E6%B0%94%E8%B1%A1%E5%8F%B0%E6%97%B6%E9%9A%942%E5%B9%B4%E5%8F%91%E6%9A%B4%E9%9B%A8%E7%BA%A2%E8%89%B2%E9%A2%84%E8%AD%A6%23) `162.4K 🔥` `NEW`
1. [挪威vs英格兰 (norway vs england)](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81vs%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `8.9M 🔥` `+89%`
1. [全国电力应急支援能力大幅提升 (National power emergency support capabilities have been significantly improved)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%94%B5%E5%8A%9B%E5%BA%94%E6%80%A5%E6%94%AF%E6%8F%B4%E8%83%BD%E5%8A%9B%E5%A4%A7%E5%B9%85%E6%8F%90%E5%8D%87%23) `1.8M 🔥` `+125%`
1. [比星期四还疯狂的是哪天](https://s.weibo.com/weibo?q=%23%E6%AF%94%E6%98%9F%E6%9C%9F%E5%9B%9B%E8%BF%98%E7%96%AF%E7%8B%82%E7%9A%84%E6%98%AF%E5%93%AA%E5%A4%A9%23) `1.8M 🔥` `+673%`
1. [台风巴威二次登陆](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E4%BA%8C%E6%AC%A1%E7%99%BB%E9%99%86%23) `1.8M 🔥` `+73%`
1. [台风巴威已登陆 (Typhoon Bavi has made landfall)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%B7%B2%E7%99%BB%E9%99%86%23) `788.6K 🔥` `+49%`
1. [瑟洛特 不传哈兰德](https://s.weibo.com/weibo?q=%23%E7%91%9F%E6%B4%9B%E7%89%B9%20%E4%B8%8D%E4%BC%A0%E5%93%88%E5%85%B0%E5%BE%B7%23) `481.5K 🔥` `+158%`
1. [上海台风](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%8F%B0%E9%A3%8E%23) `449.7K 🔥` `+23%`
1. [丁程鑫说王俊凯太能存钱了 (Ding Chengxin said Wang Junkai is so good at saving money)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%AF%B4%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A4%AA%E8%83%BD%E5%AD%98%E9%92%B1%E4%BA%86%23) `311.4K 🔥` `+98%`
1. [女孩遭前男友杀害被逼每日视频8次](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%81%AD%E5%89%8D%E7%94%B7%E5%8F%8B%E6%9D%80%E5%AE%B3%E8%A2%AB%E9%80%BC%E6%AF%8F%E6%97%A5%E8%A7%86%E9%A2%918%E6%AC%A1%23) `309.6K 🔥` `+54%`
1. [手麻脚麻真的要赶紧进医院 (My hands and feet are numb and I really need to go to the hospital quickly.)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E9%BA%BB%E8%84%9A%E9%BA%BB%E7%9C%9F%E7%9A%84%E8%A6%81%E8%B5%B6%E7%B4%A7%E8%BF%9B%E5%8C%BB%E9%99%A2%23) `301.1K 🔥` `+29%`
1. [冉莹颖邹市明这段看窒息了](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E9%82%B9%E5%B8%82%E6%98%8E%E8%BF%99%E6%AE%B5%E7%9C%8B%E7%AA%92%E6%81%AF%E4%BA%86%23) `192.5K 🔥` `+204%`
1. [上海中心千吨阻尼器开始摆动 (Shanghai Center's kiloton damper begins to swing)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%AD%E5%BF%83%E5%8D%83%E5%90%A8%E9%98%BB%E5%B0%BC%E5%99%A8%E5%BC%80%E5%A7%8B%E6%91%86%E5%8A%A8%23) `191.7K 🔥` `+68%`
1. [迪丽热巴张小斐手拉手热聊](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BC%A0%E5%B0%8F%E6%96%90%E6%89%8B%E6%8B%89%E6%89%8B%E7%83%AD%E8%81%8A%23) `190.7K 🔥` `+203%`
1. [福州镇海楼还是太权威了](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%B7%9E%E9%95%87%E6%B5%B7%E6%A5%BC%E8%BF%98%E6%98%AF%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23) `184.7K 🔥` `+194%`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `184.1K 🔥` `+74%`
1. [王俊凯丁程鑫加起来八百个心眼子 (Wang Junkai, Ding Chengxin, combined, have eight hundred tricks.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8A%A0%E8%B5%B7%E6%9D%A5%E5%85%AB%E7%99%BE%E4%B8%AA%E5%BF%83%E7%9C%BC%E5%AD%90%23) `182.8K 🔥` `+320%`
1. [南非国脚世界杯后自杀身亡](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%9D%9E%E5%9B%BD%E8%84%9A%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%8E%E8%87%AA%E6%9D%80%E8%BA%AB%E4%BA%A1%23) `181.4K 🔥` `+56%`
1. [杭州 台风](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%20%E5%8F%B0%E9%A3%8E%23) `180.3K 🔥` `+72%`
1. [广西洪水 (Guangxi floods)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%23) `176.1K 🔥` `+86%`
1. [温州台风 (Wenzhou Typhoon)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B7%9E%E5%8F%B0%E9%A3%8E%23) `173.6K 🔥` `+44%`
1. [巴威 (Bawe)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%23) `172.7K 🔥` `+116%`
1. [台风巴威最新定位](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E5%AE%9A%E4%BD%8D%23) `171.8K 🔥` `+174%`
1. [海水倒灌](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B0%B4%E5%80%92%E7%81%8C%23) `169.5K 🔥` `+147%`
1. [功夫女足开分9.4](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%BC%80%E5%88%869.4%23) `168.9K 🔥` `+338%`
1. [雀骨 (bird bone)](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%23) `168.0K 🔥` `+283%`
1. [耶鲁大学学生涉嫌在地铁性侵被捕 (Yale University student arrested for alleged sexual assault on subway)](https://s.weibo.com/weibo?q=%23%E8%80%B6%E9%B2%81%E5%A4%A7%E5%AD%A6%E5%AD%A6%E7%94%9F%E6%B6%89%E5%AB%8C%E5%9C%A8%E5%9C%B0%E9%93%81%E6%80%A7%E4%BE%B5%E8%A2%AB%E6%8D%95%23) `166.8K 🔥` `+166%`
1. [张小斐一番票房破10亿](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E4%B8%80%E7%95%AA%E7%A5%A8%E6%88%BF%E7%A0%B410%E4%BA%BF%23) `166.2K 🔥` `+276%`
1. [巴威最新位置](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E4%BD%8D%E7%BD%AE%23) `164.5K 🔥` `+60%`
1. [巴威登陆后将继续向西北方向移动 (After making landfall, Bawi will continue to move northwest)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%90%8E%E5%B0%86%E7%BB%A7%E7%BB%AD%E5%90%91%E8%A5%BF%E5%8C%97%E6%96%B9%E5%90%91%E7%A7%BB%E5%8A%A8%23) `163.6K 🔥` `+160%`
1. [哈兰德贝林厄姆 青梅竹马](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%20%E9%9D%92%E6%A2%85%E7%AB%B9%E9%A9%AC%23) `590.2K 🔥`
1. [好震撼的一句话瞬间醍醐灌顶](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E9%9C%87%E6%92%BC%E7%9A%84%E4%B8%80%E5%8F%A5%E8%AF%9D%E7%9E%AC%E9%97%B4%E9%86%8D%E9%86%90%E7%81%8C%E9%A1%B6%23) `304.1K 🔥`
1. [原来疯狂吃零食的日子只有十年](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%83%E9%9B%B6%E9%A3%9F%E7%9A%84%E6%97%A5%E5%AD%90%E5%8F%AA%E6%9C%89%E5%8D%81%E5%B9%B4%23) `188.7K 🔥`
1. [贝林厄姆破门](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E7%A0%B4%E9%97%A8%23) `185.9K 🔥`
1. [杭州20分钟变了4个色](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E20%E5%88%86%E9%92%9F%E5%8F%98%E4%BA%864%E4%B8%AA%E8%89%B2%23) `178.7K 🔥`
1. [挪威进球](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E8%BF%9B%E7%90%83%23) `190.2K 🔥` `-65%`

Updated at 2026-07-12 07:29:18

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
