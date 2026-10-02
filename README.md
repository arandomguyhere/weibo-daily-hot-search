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

1. [国足半场0比3巴勒斯坦](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E5%8D%8A%E5%9C%BA0%E6%AF%943%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%23) `764.6K 🔥` `NEW`
1. [多部门多措并举保障国庆公路出行](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%83%A8%E9%97%A8%E5%A4%9A%E6%8E%AA%E5%B9%B6%E4%B8%BE%E4%BF%9D%E9%9A%9C%E5%9B%BD%E5%BA%86%E5%85%AC%E8%B7%AF%E5%87%BA%E8%A1%8C%23) `603.7K 🔥` `NEW`
1. [中国vs巴勒斯坦](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDvs%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%23) `580.6K 🔥` `NEW`
1. [JDG生死战对阵T1](https://s.weibo.com/weibo?q=%23JDG%E7%94%9F%E6%AD%BB%E6%88%98%E5%AF%B9%E9%98%B5T1%23) `305.8K 🔥` `NEW`
1. [兰香如故袁绍辉去世](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%A2%81%E7%BB%8D%E8%BE%89%E5%8E%BB%E4%B8%96%23) `303.4K 🔥` `NEW`
1. [来披荆斩棘超话看哥哥名场面](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E8%B6%85%E8%AF%9D%E7%9C%8B%E5%93%A5%E5%93%A5%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `303.0K 🔥` `NEW`
1. [EDG连续两年止步16强](https://s.weibo.com/weibo?q=%23EDG%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%B9%B4%E6%AD%A2%E6%AD%A516%E5%BC%BA%23) `297.7K 🔥` `NEW`
1. [披荆斩棘四公](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%9B%9B%E5%85%AC%23) `270.6K 🔥` `NEW`
1. [原来薯条盒侧边可以放番茄酱](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%96%AF%E6%9D%A1%E7%9B%92%E4%BE%A7%E8%BE%B9%E5%8F%AF%E4%BB%A5%E6%94%BE%E7%95%AA%E8%8C%84%E9%85%B1%23) `270.5K 🔥` `NEW`
1. [兰香产女](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E4%BA%A7%E5%A5%B3%23) `269.8K 🔥` `NEW`
1. [香港名媛蔡天凤碎尸案细节](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%90%8D%E5%AA%9B%E8%94%A1%E5%A4%A9%E5%87%A4%E7%A2%8E%E5%B0%B8%E6%A1%88%E7%BB%86%E8%8A%82%23) `268.4K 🔥` `NEW`
1. [意大利米开朗基罗广场被中国人占据](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E7%B1%B3%E5%BC%80%E6%9C%97%E5%9F%BA%E7%BD%97%E5%B9%BF%E5%9C%BA%E8%A2%AB%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%8D%A0%E6%8D%AE%23) `268.0K 🔥` `NEW`
1. [国足2球落后巴勒斯坦](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B32%E7%90%83%E8%90%BD%E5%90%8E%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%23) `267.1K 🔥` `NEW`
1. [北京独居女子离世房产判归国家](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E7%8B%AC%E5%B1%85%E5%A5%B3%E5%AD%90%E7%A6%BB%E4%B8%96%E6%88%BF%E4%BA%A7%E5%88%A4%E5%BD%92%E5%9B%BD%E5%AE%B6%23) `266.4K 🔥` `NEW`
1. [蔡天凤被诱骗上车遭铁锤袭击](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E8%A2%AB%E8%AF%B1%E9%AA%97%E4%B8%8A%E8%BD%A6%E9%81%AD%E9%93%81%E9%94%A4%E8%A2%AD%E5%87%BB%23) `265.3K 🔥` `NEW`
1. [沈腾李小冉也没戏拍了吗](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B9%9F%E6%B2%A1%E6%88%8F%E6%8B%8D%E4%BA%86%E5%90%97%23) `265.2K 🔥` `NEW`
1. [鹭卓向粉丝道歉](https://s.weibo.com/weibo?q=%23%E9%B9%AD%E5%8D%93%E5%90%91%E7%B2%89%E4%B8%9D%E9%81%93%E6%AD%89%23) `264.5K 🔥` `NEW`
1. [北舞教授回应闪身步狗熊哆嗦毛出圈](https://s.weibo.com/weibo?q=%23%E5%8C%97%E8%88%9E%E6%95%99%E6%8E%88%E5%9B%9E%E5%BA%94%E9%97%AA%E8%BA%AB%E6%AD%A5%E7%8B%97%E7%86%8A%E5%93%86%E5%97%A6%E6%AF%9B%E5%87%BA%E5%9C%88%23) `263.3K 🔥` `NEW`
1. [巴勒斯坦4球领先国足](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A64%E7%90%83%E9%A2%86%E5%85%88%E5%9B%BD%E8%B6%B3%23) `262.7K 🔥` `NEW`
1. [国足](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%23) `261.6K 🔥` `NEW`
1. [孙楠披哥主题曲C位](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%A5%A0%E6%8A%AB%E5%93%A5%E4%B8%BB%E9%A2%98%E6%9B%B2C%E4%BD%8D%23) `261.1K 🔥` `NEW`
1. [王一博C位看秀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9AC%E4%BD%8D%E7%9C%8B%E7%A7%80%23) `260.0K 🔥` `NEW`
1. [顾廷烨 二婚男](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%BB%B7%E7%83%A8%20%E4%BA%8C%E5%A9%9A%E7%94%B7%23) `259.3K 🔥` `NEW`
1. [女孩担心蒜头鼻遗传提分手](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%8B%85%E5%BF%83%E8%92%9C%E5%A4%B4%E9%BC%BB%E9%81%97%E4%BC%A0%E6%8F%90%E5%88%86%E6%89%8B%23) `258.9K 🔥` `NEW`
1. [中国男排2比3日本男排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E6%8E%922%E6%AF%943%E6%97%A5%E6%9C%AC%E7%94%B7%E6%8E%92%23) `258.4K 🔥` `NEW`
1. [王一博陈都灵大秀同框](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%99%88%E9%83%BD%E7%81%B5%E5%A4%A7%E7%A7%80%E5%90%8C%E6%A1%86%23) `256.4K 🔥` `NEW`
1. [问界二手车价格上演过山车](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E4%BA%8C%E6%89%8B%E8%BD%A6%E4%BB%B7%E6%A0%BC%E4%B8%8A%E6%BC%94%E8%BF%87%E5%B1%B1%E8%BD%A6%23) `241.5K 🔥` `NEW`
1. [三文鱼一出生就是这个样子](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%96%87%E9%B1%BC%E4%B8%80%E5%87%BA%E7%94%9F%E5%B0%B1%E6%98%AF%E8%BF%99%E4%B8%AA%E6%A0%B7%E5%AD%90%23) `237.9K 🔥` `NEW`
1. [真正伤胃的不是冰是喝法](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E4%BC%A4%E8%83%83%E7%9A%84%E4%B8%8D%E6%98%AF%E5%86%B0%E6%98%AF%E5%96%9D%E6%B3%95%23) `230.5K 🔥` `NEW`
1. [妈妈去世第四年翻到她朋友圈](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%8E%BB%E4%B8%96%E7%AC%AC%E5%9B%9B%E5%B9%B4%E7%BF%BB%E5%88%B0%E5%A5%B9%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `230.4K 🔥` `NEW`
1. [张杰真火](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E7%9C%9F%E7%81%AB%23) `225.2K 🔥` `NEW`
1. [兰香如故碧芜登场](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%A2%A7%E8%8A%9C%E7%99%BB%E5%9C%BA%23) `222.3K 🔥` `NEW`
1. [米卡邵子恒曾辉trap](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8D%A1%E9%82%B5%E5%AD%90%E6%81%92%E6%9B%BE%E8%BE%89trap%23) `219.9K 🔥` `NEW`
1. [EDG告别上海冠军赛](https://s.weibo.com/weibo?q=%23EDG%E5%91%8A%E5%88%AB%E4%B8%8A%E6%B5%B7%E5%86%A0%E5%86%9B%E8%B5%9B%23) `169.9K 🔥` `NEW`
1. [AG对战Hero](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98Hero%23) `166.8K 🔥` `NEW`
1. [Viper无缘免服役](https://s.weibo.com/weibo?q=%23Viper%E6%97%A0%E7%BC%98%E5%85%8D%E6%9C%8D%E5%BD%B9%23) `165.4K 🔥` `NEW`
1. [别吹沪币了看看夏威夷物价](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%90%B9%E6%B2%AA%E5%B8%81%E4%BA%86%E7%9C%8B%E7%9C%8B%E5%A4%8F%E5%A8%81%E5%A4%B7%E7%89%A9%E4%BB%B7%23) `161.0K 🔥` `NEW`
1. [纹身是免疫细胞一辈子的战斗](https://s.weibo.com/weibo?q=%23%E7%BA%B9%E8%BA%AB%E6%98%AF%E5%85%8D%E7%96%AB%E7%BB%86%E8%83%9E%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E6%88%98%E6%96%97%23) `157.4K 🔥` `NEW`
1. [把红烧排骨变透明吃一口我惊呆了](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E7%BA%A2%E7%83%A7%E6%8E%92%E9%AA%A8%E5%8F%98%E9%80%8F%E6%98%8E%E5%90%83%E4%B8%80%E5%8F%A3%E6%88%91%E6%83%8A%E5%91%86%E4%BA%86%23) `156.7K 🔥` `NEW`
1. [邵子恒荨麻疹复发](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%AD%90%E6%81%92%E8%8D%A8%E9%BA%BB%E7%96%B9%E5%A4%8D%E5%8F%91%23) `150.1K 🔥` `NEW`
1. [前娜扎经纪人喊话刘耀文](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A8%9C%E6%89%8E%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%96%8A%E8%AF%9D%E5%88%98%E8%80%80%E6%96%87%23) `148.1K 🔥` `NEW`
1. [兰香如故大太太下线](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%A4%A7%E5%A4%AA%E5%A4%AA%E4%B8%8B%E7%BA%BF%23) `147.8K 🔥` `NEW`
1. [日漫汉化组现状](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%BC%AB%E6%B1%89%E5%8C%96%E7%BB%84%E7%8E%B0%E7%8A%B6%23) `141.5K 🔥` `NEW`
1. [蒂芙尼月饼事件舆论反转](https://s.weibo.com/weibo?q=%23%E8%92%82%E8%8A%99%E5%B0%BC%E6%9C%88%E9%A5%BC%E4%BA%8B%E4%BB%B6%E8%88%86%E8%AE%BA%E5%8F%8D%E8%BD%AC%23) `141.1K 🔥` `NEW`
1. [中国男排vs日本男排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E6%8E%92vs%E6%97%A5%E6%9C%AC%E7%94%B7%E6%8E%92%23) `139.6K 🔥` `NEW`
1. [ZmjjKK赛后采访说打得菜](https://s.weibo.com/weibo?q=%23ZmjjKK%E8%B5%9B%E5%90%8E%E9%87%87%E8%AE%BF%E8%AF%B4%E6%89%93%E5%BE%97%E8%8F%9C%23) `138.5K 🔥` `NEW`
1. [曾辉四公能力者秀](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%9B%9B%E5%85%AC%E8%83%BD%E5%8A%9B%E8%80%85%E7%A7%80%23) `130.8K 🔥` `NEW`
1. [iPhone18Pro主摄](https://s.weibo.com/weibo?q=%23iPhone18Pro%E4%B8%BB%E6%91%84%23) `126.0K 🔥` `NEW`
1. [TOP林珍娜承认恋情](https://s.weibo.com/weibo?q=%23TOP%E6%9E%97%E7%8F%8D%E5%A8%9C%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `257.7K 🔥`
1. [全世界都知道中国人放假了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E9%83%BD%E7%9F%A5%E9%81%93%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%94%BE%E5%81%87%E4%BA%86%23) `1.1M 🔥` `-22%`

Updated at 2026-10-02 21:14:48

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
