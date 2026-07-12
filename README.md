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

1. [阿根廷vs瑞士 (Argentina vs Switzerland)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E7%91%9E%E5%A3%AB%23) `905.6K 🔥` `NEW`
1. [太心疼哈兰德了](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%BF%83%E7%96%BC%E5%93%88%E5%85%B0%E5%BE%B7%E4%BA%86%23) `883.1K 🔥` `NEW`
1. [哈兰德被换下](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%A2%AB%E6%8D%A2%E4%B8%8B%23) `873.4K 🔥` `NEW`
1. [你的贝皇无限猖狂](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E8%B4%9D%E7%9A%87%E6%97%A0%E9%99%90%E7%8C%96%E7%8B%82%23) `715.9K 🔥` `NEW`
1. [王俊凯回应丁程鑫说他太能存钱了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%9B%9E%E5%BA%94%E4%B8%81%E7%A8%8B%E9%91%AB%E8%AF%B4%E4%BB%96%E5%A4%AA%E8%83%BD%E5%AD%98%E9%92%B1%E4%BA%86%23) `713.1K 🔥` `NEW`
1. [瑟洛特自己划船回挪威吧](https://s.weibo.com/weibo?q=%23%E7%91%9F%E6%B4%9B%E7%89%B9%E8%87%AA%E5%B7%B1%E5%88%92%E8%88%B9%E5%9B%9E%E6%8C%AA%E5%A8%81%E5%90%A7%23) `711.1K 🔥` `NEW`
1. [台风巴威进入杭州](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E8%BF%9B%E5%85%A5%E6%9D%AD%E5%B7%9E%23) `707.6K 🔥` `NEW`
1. [哈兰德告别世界杯](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%91%8A%E5%88%AB%E4%B8%96%E7%95%8C%E6%9D%AF%23) `684.3K 🔥` `NEW`
1. [迪丽热巴完全摆脱了以前甜妹的标签](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%AE%8C%E5%85%A8%E6%91%86%E8%84%B1%E4%BA%86%E4%BB%A5%E5%89%8D%E7%94%9C%E5%A6%B9%E7%9A%84%E6%A0%87%E7%AD%BE%23) `442.8K 🔥` `NEW`
1. [伊朗再关闭霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%8D%E5%85%B3%E9%97%AD%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `395.8K 🔥` `NEW`
1. [南非国脚亚当斯上吊自杀 (South Africa international Adams hanged himself)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%9D%9E%E5%9B%BD%E8%84%9A%E4%BA%9A%E5%BD%93%E6%96%AF%E4%B8%8A%E5%90%8A%E8%87%AA%E6%9D%80%23) `395.2K 🔥` `NEW`
1. [6月新增新冠确诊7.9万例](https://s.weibo.com/weibo?q=%236%E6%9C%88%E6%96%B0%E5%A2%9E%E6%96%B0%E5%86%A0%E7%A1%AE%E8%AF%8A7.9%E4%B8%87%E4%BE%8B%23) `393.2K 🔥` `NEW`
1. [巴威台风届变脸第一名](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%8F%B0%E9%A3%8E%E5%B1%8A%E5%8F%98%E8%84%B8%E7%AC%AC%E4%B8%80%E5%90%8D%23) `390.8K 🔥` `NEW`
1. [世界杯四强](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%BC%BA%23) `387.2K 🔥` `NEW`
1. [巴威将逐渐变性为温带气旋](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%B0%86%E9%80%90%E6%B8%90%E5%8F%98%E6%80%A7%E4%B8%BA%E6%B8%A9%E5%B8%A6%E6%B0%94%E6%97%8B%23) `385.1K 🔥` `NEW`
1. [霸占他人车位副处长道歉](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E5%8D%A0%E4%BB%96%E4%BA%BA%E8%BD%A6%E4%BD%8D%E5%89%AF%E5%A4%84%E9%95%BF%E9%81%93%E6%AD%89%23) `382.0K 🔥` `NEW`
1. [汪苏泷看了都震惊的大炮](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E7%9C%8B%E4%BA%86%E9%83%BD%E9%9C%87%E6%83%8A%E7%9A%84%E5%A4%A7%E7%82%AE%23) `379.0K 🔥` `NEW`
1. [老乡鸡上市梦碎](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B9%A1%E9%B8%A1%E4%B8%8A%E5%B8%82%E6%A2%A6%E7%A2%8E%23) `376.6K 🔥` `NEW`
1. [世界杯4强确定3席](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF4%E5%BC%BA%E7%A1%AE%E5%AE%9A3%E5%B8%AD%23) `373.8K 🔥` `NEW`
1. [英格兰2比1挪威](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B02%E6%AF%941%E6%8C%AA%E5%A8%81%23) `361.5K 🔥` `NEW`
1. [哈兰德 全场梦游 (Haaland sleepwalking throughout the game)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%20%E5%85%A8%E5%9C%BA%E6%A2%A6%E6%B8%B8%23) `359.2K 🔥` `NEW`
1. [挪威淘汰](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E6%B7%98%E6%B1%B0%23) `353.7K 🔥` `NEW`
1. [邹市明拒绝和冉莹颖沟通](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E6%8B%92%E7%BB%9D%E5%92%8C%E5%86%89%E8%8E%B9%E9%A2%96%E6%B2%9F%E9%80%9A%23) `344.7K 🔥` `NEW`
1. [飞行员亲历十几秒便跟丢不明飞行物](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E8%A1%8C%E5%91%98%E4%BA%B2%E5%8E%86%E5%8D%81%E5%87%A0%E7%A7%92%E4%BE%BF%E8%B7%9F%E4%B8%A2%E4%B8%8D%E6%98%8E%E9%A3%9E%E8%A1%8C%E7%89%A9%23) `342.6K 🔥` `NEW`
1. [江苏的雨像把天下漏了](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E7%9A%84%E9%9B%A8%E5%83%8F%E6%8A%8A%E5%A4%A9%E4%B8%8B%E6%BC%8F%E4%BA%86%23) `335.8K 🔥` `NEW`
1. [功夫女足影评](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%BD%B1%E8%AF%84%23) `716.3K 🔥` `+309%`
1. [女孩遭前男友杀害被逼每日视频8次](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%81%AD%E5%89%8D%E7%94%B7%E5%8F%8B%E6%9D%80%E5%AE%B3%E8%A2%AB%E9%80%BC%E6%AF%8F%E6%97%A5%E8%A7%86%E9%A2%918%E6%AC%A1%23) `707.9K 🔥` `+129%`
1. [瑟洛特 不传哈兰德](https://s.weibo.com/weibo?q=%23%E7%91%9F%E6%B4%9B%E7%89%B9%20%E4%B8%8D%E4%BC%A0%E5%93%88%E5%85%B0%E5%BE%B7%23) `684.6K 🔥` `+42%`
1. [丁程鑫说王俊凯太能存钱了 (Ding Chengxin said Wang Junkai is so good at saving money)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%AF%B4%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A4%AA%E8%83%BD%E5%AD%98%E9%92%B1%E4%BA%86%23) `399.6K 🔥` `+28%`
1. [上海中心千吨阻尼器开始摆动 (Shanghai Center's kiloton damper begins to swing)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%AD%E5%BF%83%E5%8D%83%E5%90%A8%E9%98%BB%E5%B0%BC%E5%99%A8%E5%BC%80%E5%A7%8B%E6%91%86%E5%8A%A8%23) `398.1K 🔥` `+108%`
1. [贝林厄姆踢哈兰德屁股](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E8%B8%A2%E5%93%88%E5%85%B0%E5%BE%B7%E5%B1%81%E8%82%A1%23) `388.1K 🔥` `+27%`
1. [好震撼的一句话瞬间醍醐灌顶](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E9%9C%87%E6%92%BC%E7%9A%84%E4%B8%80%E5%8F%A5%E8%AF%9D%E7%9E%AC%E9%97%B4%E9%86%8D%E9%86%90%E7%81%8C%E9%A1%B6%23) `380.7K 🔥` `+25%`
1. [台风巴威减弱为强热带风暴 (Typhoon Bavi weakens into severe tropical storm)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%87%8F%E5%BC%B1%E4%B8%BA%E5%BC%BA%E7%83%AD%E5%B8%A6%E9%A3%8E%E6%9A%B4%23) `375.0K 🔥` `+105%`
1. [巴威发威了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%8F%91%E5%A8%81%E4%BA%86%23) `367.2K 🔥` `+105%`
1. [今年首个全国性暴雨红色预警来了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E9%A6%96%E4%B8%AA%E5%85%A8%E5%9B%BD%E6%80%A7%E6%9A%B4%E9%9B%A8%E7%BA%A2%E8%89%B2%E9%A2%84%E8%AD%A6%E6%9D%A5%E4%BA%86%23) `356.3K 🔥` `+88%`
1. [原来疯狂吃零食的日子只有十年](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%83%E9%9B%B6%E9%A3%9F%E7%9A%84%E6%97%A5%E5%AD%90%E5%8F%AA%E6%9C%89%E5%8D%81%E5%B9%B4%23) `355.2K 🔥` `+88%`
1. [短发的刘诗诗](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%8F%91%E7%9A%84%E5%88%98%E8%AF%97%E8%AF%97%23) `350.4K 🔥` `+112%`
1. [迪丽热巴张小斐手拉手热聊](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BC%A0%E5%B0%8F%E6%96%90%E6%89%8B%E6%8B%89%E6%89%8B%E7%83%AD%E8%81%8A%23) `349.6K 🔥` `+83%`
1. [台风巴威最新定位](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E5%AE%9A%E4%BD%8D%23) `347.8K 🔥` `+102%`
1. [雀骨 (bird bone)](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%23) `340.9K 🔥` `+103%`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `338.3K 🔥` `+84%`
1. [福州镇海楼还是太权威了](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%B7%9E%E9%95%87%E6%B5%B7%E6%A5%BC%E8%BF%98%E6%98%AF%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23) `336.7K 🔥` `+82%`
1. [哈兰德推人 进球无效 (Haaland pushed, goal disallowed)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%8E%A8%E4%BA%BA%20%E8%BF%9B%E7%90%83%E6%97%A0%E6%95%88%23) `1.7M 🔥`
1. [上海台风](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%8F%B0%E9%A3%8E%23) `369.4K 🔥`
1. [手麻脚麻真的要赶紧进医院 (My hands and feet are numb and I really need to go to the hospital quickly.)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E9%BA%BB%E8%84%9A%E9%BA%BB%E7%9C%9F%E7%9A%84%E8%A6%81%E8%B5%B6%E7%B4%A7%E8%BF%9B%E5%8C%BB%E9%99%A2%23) `362.0K 🔥`
1. [挪威vs英格兰 (norway vs england)](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81vs%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `3.5M 🔥` `-61%`
1. [全国电力应急支援能力大幅提升 (National power emergency support capabilities have been significantly improved)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%94%B5%E5%8A%9B%E5%BA%94%E6%80%A5%E6%94%AF%E6%8F%B4%E8%83%BD%E5%8A%9B%E5%A4%A7%E5%B9%85%E6%8F%90%E5%8D%87%23) `1.4M 🔥` `-22%`
1. [比星期四还疯狂的是哪天](https://s.weibo.com/weibo?q=%23%E6%AF%94%E6%98%9F%E6%9C%9F%E5%9B%9B%E8%BF%98%E7%96%AF%E7%8B%82%E7%9A%84%E6%98%AF%E5%93%AA%E5%A4%A9%23) `1.3M 🔥` `-27%`
1. [台风巴威二次登陆 (Typhoon Bavi makes second landfall)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E4%BA%8C%E6%AC%A1%E7%99%BB%E9%99%86%23) `1.3M 🔥` `-28%`
1. [台风巴威已登陆 (Typhoon Bavi has made landfall)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%B7%B2%E7%99%BB%E9%99%86%23) `371.6K 🔥` `-53%`
1. [哈兰德贝林厄姆 青梅竹马](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%20%E9%9D%92%E6%A2%85%E7%AB%B9%E9%A9%AC%23) `364.7K 🔥` `-38%`

Updated at 2026-07-12 09:07:15

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
