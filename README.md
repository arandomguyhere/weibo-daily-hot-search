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

1. [中国经济硬核数据上新 (China’s hard-core economic data released)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E7%A1%AC%E6%A0%B8%E6%95%B0%E6%8D%AE%E4%B8%8A%E6%96%B0%23) `648.0K 🔥` `NEW`
1. [张凌赫田曦薇曾庆杰杀青合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E6%9B%BE%E5%BA%86%E6%9D%B0%E6%9D%80%E9%9D%92%E5%90%88%E7%85%A7%23) `564.7K 🔥` `NEW`
1. [伊朗指责以色列打击科威特海水淡化设施](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8C%87%E8%B4%A3%E4%BB%A5%E8%89%B2%E5%88%97%E6%89%93%E5%87%BB%E7%A7%91%E5%A8%81%E7%89%B9%E6%B5%B7%E6%B0%B4%E6%B7%A1%E5%8C%96%E8%AE%BE%E6%96%BD%23) `555.9K 🔥` `NEW`
1. [微博文化之夜](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%B9%8B%E5%A4%9C%23) `533.1K 🔥` `NEW`
1. [隐身的名字大结局](https://s.weibo.com/weibo?q=%23%E9%9A%90%E8%BA%AB%E7%9A%84%E5%90%8D%E5%AD%97%E5%A4%A7%E7%BB%93%E5%B1%80%23) `525.8K 🔥` `NEW`
1. [男子卖开房记录赚12万元](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%96%E5%BC%80%E6%88%BF%E8%AE%B0%E5%BD%95%E8%B5%9A12%E4%B8%87%E5%85%83%23) `497.1K 🔥` `NEW`
1. [巴西一起飞客机发动机爆炸](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E4%B8%80%E8%B5%B7%E9%A3%9E%E5%AE%A2%E6%9C%BA%E5%8F%91%E5%8A%A8%E6%9C%BA%E7%88%86%E7%82%B8%23) `483.6K 🔥` `NEW`
1. [月鳞绮纪 空降](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%20%E7%A9%BA%E9%99%8D%23) `456.1K 🔥` `NEW`
1. [衣服或涨价15%](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E6%9C%8D%E6%88%96%E6%B6%A8%E4%BB%B715%25%23) `438.7K 🔥` `NEW`
1. [孟子义 从全世界的战斗中路过](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%20%E4%BB%8E%E5%85%A8%E4%B8%96%E7%95%8C%E7%9A%84%E6%88%98%E6%96%97%E4%B8%AD%E8%B7%AF%E8%BF%87%23) `430.3K 🔥` `NEW`
1. [伊能静回应逛迪士尼拒绝合影 (Yi Nengjing responded to refusing to take photos while visiting Disneyland)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E5%9B%9E%E5%BA%94%E9%80%9B%E8%BF%AA%E5%A3%AB%E5%B0%BC%E6%8B%92%E7%BB%9D%E5%90%88%E5%BD%B1%23) `424.5K 🔥` `NEW`
1. [油价突然飙升](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E7%AA%81%E7%84%B6%E9%A3%99%E5%8D%87%23) `218.3K 🔥` `NEW`
1. [vivo发布了一台相机](https://s.weibo.com/weibo?q=%23vivo%E5%8F%91%E5%B8%83%E4%BA%86%E4%B8%80%E5%8F%B0%E7%9B%B8%E6%9C%BA%23) `199.1K 🔥` `NEW`
1. [vivo发布了一款民用哈勃](https://s.weibo.com/weibo?q=%23vivo%E5%8F%91%E5%B8%83%E4%BA%86%E4%B8%80%E6%AC%BE%E6%B0%91%E7%94%A8%E5%93%88%E5%8B%83%23) `195.4K 🔥` `NEW`
1. [等田曦薇的收官文](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%94%B0%E6%9B%A6%E8%96%87%E7%9A%84%E6%94%B6%E5%AE%98%E6%96%87%23) `178.6K 🔥` `NEW`
1. [女子花上万办卡被按摩到癌细胞扩散](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B1%E4%B8%8A%E4%B8%87%E5%8A%9E%E5%8D%A1%E8%A2%AB%E6%8C%89%E6%91%A9%E5%88%B0%E7%99%8C%E7%BB%86%E8%83%9E%E6%89%A9%E6%95%A3%23) `142.3K 🔥` `NEW`
1. [跟着魏建军看懂全新坦克700](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E9%AD%8F%E5%BB%BA%E5%86%9B%E7%9C%8B%E6%87%82%E5%85%A8%E6%96%B0%E5%9D%A6%E5%85%8B700%23) `136.1K 🔥` `NEW`
1. [vivoX300s到底有多Super](https://s.weibo.com/weibo?q=%23vivoX300s%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9ASuper%23) `135.7K 🔥` `NEW`
1. [吴楚一把陈牧驰还的钱捐了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%A5%9A%E4%B8%80%E6%8A%8A%E9%99%88%E7%89%A7%E9%A9%B0%E8%BF%98%E7%9A%84%E9%92%B1%E6%8D%90%E4%BA%86%23) `128.6K 🔥` `NEW`
1. [男子26套房开假装上班公司持续亏损](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9026%E5%A5%97%E6%88%BF%E5%BC%80%E5%81%87%E8%A3%85%E4%B8%8A%E7%8F%AD%E5%85%AC%E5%8F%B8%E6%8C%81%E7%BB%AD%E4%BA%8F%E6%8D%9F%23) `127.9K 🔥` `NEW`
1. [腌了六年的咸金桔 (Salted kumquats that have been pickled for six years)](https://s.weibo.com/weibo?q=%23%E8%85%8C%E4%BA%86%E5%85%AD%E5%B9%B4%E7%9A%84%E5%92%B8%E9%87%91%E6%A1%94%23) `126.4K 🔥` `NEW`
1. [时代少年团直播预告](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%92%AD%E9%A2%84%E5%91%8A%23) `126.2K 🔥` `NEW`
1. [LCK核查ruler](https://s.weibo.com/weibo?q=%23LCK%E6%A0%B8%E6%9F%A5ruler%23) `124.4K 🔥` `NEW`
1. [vivo称V单是影像新物种](https://s.weibo.com/weibo?q=%23vivo%E7%A7%B0V%E5%8D%95%E6%98%AF%E5%BD%B1%E5%83%8F%E6%96%B0%E7%89%A9%E7%A7%8D%23) `115.1K 🔥` `NEW`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `114.3K 🔥` `NEW`
1. [全红婵说被选去跳水是因弹跳力好](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E8%AF%B4%E8%A2%AB%E9%80%89%E5%8E%BB%E8%B7%B3%E6%B0%B4%E6%98%AF%E5%9B%A0%E5%BC%B9%E8%B7%B3%E5%8A%9B%E5%A5%BD%23) `106.4K 🔥` `NEW`
1. [太原暴走团凌晨四点播放音乐扰民](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E6%9A%B4%E8%B5%B0%E5%9B%A2%E5%87%8C%E6%99%A8%E5%9B%9B%E7%82%B9%E6%92%AD%E6%94%BE%E9%9F%B3%E4%B9%90%E6%89%B0%E6%B0%91%23) `105.5K 🔥` `NEW`
1. [AL战胜TES](https://s.weibo.com/weibo?q=%23AL%E6%88%98%E8%83%9CTES%23) `103.8K 🔥` `NEW`
1. [高市早苗越描越黑](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%B6%8A%E6%8F%8F%E8%B6%8A%E9%BB%91%23) `101.1K 🔥` `NEW`
1. [王一博蓄力正赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%93%84%E5%8A%9B%E6%AD%A3%E8%B5%9B%23) `98.3K 🔥` `NEW`
1. [老外惊叹中国生活的便利性 (Foreigners marvel at the convenience of life in China)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E6%83%8A%E5%8F%B9%E4%B8%AD%E5%9B%BD%E7%94%9F%E6%B4%BB%E7%9A%84%E4%BE%BF%E5%88%A9%E6%80%A7%23) `96.1K 🔥` `NEW`
1. [小28岁妻子十年相伴获3亿财产](https://s.weibo.com/weibo?q=%23%E5%B0%8F28%E5%B2%81%E5%A6%BB%E5%AD%90%E5%8D%81%E5%B9%B4%E7%9B%B8%E4%BC%B4%E8%8E%B73%E4%BA%BF%E8%B4%A2%E4%BA%A7%23) `90.0K 🔥` `NEW`
1. [孙颖莎的球超级霹雳转](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9A%84%E7%90%83%E8%B6%85%E7%BA%A7%E9%9C%B9%E9%9B%B3%E8%BD%AC%23) `84.5K 🔥` `NEW`
1. [美客机与直升机相撞致67死画面曝光](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%A2%E6%9C%BA%E4%B8%8E%E7%9B%B4%E5%8D%87%E6%9C%BA%E7%9B%B8%E6%92%9E%E8%87%B467%E6%AD%BB%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `1.1M 🔥` `+265%`
1. [那英唱三五句也要问版权问题 (When Na Ying sings three or five lines, he still has to ask about copyright issues)](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%94%B1%E4%B8%89%E4%BA%94%E5%8F%A5%E4%B9%9F%E8%A6%81%E9%97%AE%E7%89%88%E6%9D%83%E9%97%AE%E9%A2%98%23) `541.7K 🔥` `+83%`
1. [张雪机车夺冠估值超10亿](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E4%BC%B0%E5%80%BC%E8%B6%8510%E4%BA%BF%23) `511.7K 🔥` `+165%`
1. [李荣浩 爱你老己](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E7%88%B1%E4%BD%A0%E8%80%81%E5%B7%B1%23) `472.4K 🔥` `+144%`
1. [广东暴雨已经超越了雨刮器的极限](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E6%9A%B4%E9%9B%A8%E5%B7%B2%E7%BB%8F%E8%B6%85%E8%B6%8A%E4%BA%86%E9%9B%A8%E5%88%AE%E5%99%A8%E7%9A%84%E6%9E%81%E9%99%90%23) `194.5K 🔥`
1. [逐玉收官](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%94%B6%E5%AE%98%23) `135.3K 🔥`
1. [为什么屁股针越来越少了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B1%81%E8%82%A1%E9%92%88%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%B0%91%E4%BA%86%23) `119.9K 🔥`
1. [隐身的名字 (invisible name)](https://s.weibo.com/weibo?q=%23%E9%9A%90%E8%BA%AB%E7%9A%84%E5%90%8D%E5%AD%97%23) `99.2K 🔥`
1. [租房6年发现多帮房东交了几万电费](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E6%88%BF6%E5%B9%B4%E5%8F%91%E7%8E%B0%E5%A4%9A%E5%B8%AE%E6%88%BF%E4%B8%9C%E4%BA%A4%E4%BA%86%E5%87%A0%E4%B8%87%E7%94%B5%E8%B4%B9%23) `767.9K 🔥` `-28%`
1. [张凌赫逐玉收官小作文 (Zhang Linghe's short essay on chasing jade at the end)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%90%E7%8E%89%E6%94%B6%E5%AE%98%E5%B0%8F%E4%BD%9C%E6%96%87%23) `197.9K 🔥` `-57%`
1. [李卿给齐姝的手写信 (Li Qing’s handwritten letter to Qi Shu)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8D%BF%E7%BB%99%E9%BD%90%E5%A7%9D%E7%9A%84%E6%89%8B%E5%86%99%E4%BF%A1%23) `142.1K 🔥` `-82%`
1. [孔雪儿 俞浅浅你终于自由了](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%20%E4%BF%9E%E6%B5%85%E6%B5%85%E4%BD%A0%E7%BB%88%E4%BA%8E%E8%87%AA%E7%94%B1%E4%BA%86%23) `140.4K 🔥` `-27%`
1. [官方通报亡母被伪造身份结婚](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%BA%A1%E6%AF%8D%E8%A2%AB%E4%BC%AA%E9%80%A0%E8%BA%AB%E4%BB%BD%E7%BB%93%E5%A9%9A%23) `140.3K 🔥` `-49%`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `105.1K 🔥` `-21%`
1. [周深唱月鳞绮纪主题曲](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%94%B1%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E4%B8%BB%E9%A2%98%E6%9B%B2%23) `92.7K 🔥` `-52%`
1. [最爱齐旻的是邓凯](https://s.weibo.com/weibo?q=%23%E6%9C%80%E7%88%B1%E9%BD%90%E6%97%BB%E7%9A%84%E6%98%AF%E9%82%93%E5%87%AF%23) `90.6K 🔥` `-27%`
1. [谢娜 民选微博Queen](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%20%E6%B0%91%E9%80%89%E5%BE%AE%E5%8D%9AQueen%23) `89.8K 🔥` `-38%`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `88.1K 🔥` `-30%`

Updated at 2026-03-30 22:01:08

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
