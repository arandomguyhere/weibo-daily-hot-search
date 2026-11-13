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

1. [飞秒手术全球1000万例中国750万例](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E7%A7%92%E6%89%8B%E6%9C%AF%E5%85%A8%E7%90%831000%E4%B8%87%E4%BE%8B%E4%B8%AD%E5%9B%BD750%E4%B8%87%E4%BE%8B%23) `1.2M 🔥` `NEW`
1. [曝Zeus和T1签约3年打到Faker退役](https://s.weibo.com/weibo?q=%23%E6%9B%9DZeus%E5%92%8CT1%E7%AD%BE%E7%BA%A63%E5%B9%B4%E6%89%93%E5%88%B0Faker%E9%80%80%E5%BD%B9%23) `869.8K 🔥` `NEW`
1. [青春华章我们的新长征](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%E6%88%91%E4%BB%AC%E7%9A%84%E6%96%B0%E9%95%BF%E5%BE%81%23) `646.7K 🔥` `NEW`
1. [老板假装扫了500余次付款码](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E5%81%87%E8%A3%85%E6%89%AB%E4%BA%86500%E4%BD%99%E6%AC%A1%E4%BB%98%E6%AC%BE%E7%A0%81%23) `546.8K 🔥` `NEW`
1. [王晶回应麻将女王票房](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%B6%E5%9B%9E%E5%BA%94%E9%BA%BB%E5%B0%86%E5%A5%B3%E7%8E%8B%E7%A5%A8%E6%88%BF%23) `430.7K 🔥` `NEW`
1. [主人提醒邻居别给猫按电梯](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E6%8F%90%E9%86%92%E9%82%BB%E5%B1%85%E5%88%AB%E7%BB%99%E7%8C%AB%E6%8C%89%E7%94%B5%E6%A2%AF%23) `371.1K 🔥` `NEW`
1. [华为五界顺序调整](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%BA%94%E7%95%8C%E9%A1%BA%E5%BA%8F%E8%B0%83%E6%95%B4%23) `370.6K 🔥` `NEW`
1. [老公一天干了一辈子家务](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%85%AC%E4%B8%80%E5%A4%A9%E5%B9%B2%E4%BA%86%E4%B8%80%E8%BE%88%E5%AD%90%E5%AE%B6%E5%8A%A1%23) `365.1K 🔥` `NEW`
1. [河南财大性骚扰女生教师被开除](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%B4%A2%E5%A4%A7%E6%80%A7%E9%AA%9A%E6%89%B0%E5%A5%B3%E7%94%9F%E6%95%99%E5%B8%88%E8%A2%AB%E5%BC%80%E9%99%A4%23) `360.4K 🔥` `NEW`
1. [葡萄牙全队将穿7号球服致敬C罗](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E5%85%A8%E9%98%9F%E5%B0%86%E7%A9%BF7%E5%8F%B7%E7%90%83%E6%9C%8D%E8%87%B4%E6%95%ACC%E7%BD%97%23) `358.6K 🔥` `NEW`
1. [芒果把这段放出来](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%8A%8A%E8%BF%99%E6%AE%B5%E6%94%BE%E5%87%BA%E6%9D%A5%23) `354.0K 🔥` `NEW`
1. [深夜徐老师怀孕](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%A4%9C%E5%BE%90%E8%80%81%E5%B8%88%E6%80%80%E5%AD%95%23) `350.8K 🔥` `NEW`
1. [杨超越供读同母异父的妹妹](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%BE%9B%E8%AF%BB%E5%90%8C%E6%AF%8D%E5%BC%82%E7%88%B6%E7%9A%84%E5%A6%B9%E5%A6%B9%23) `346.5K 🔥` `NEW`
1. [今何在 江南](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E4%BD%95%E5%9C%A8%20%E6%B1%9F%E5%8D%97%23) `340.8K 🔥` `NEW`
1. [白小纯因为青稚这几句话一直憋眼泪](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%9B%A0%E4%B8%BA%E9%9D%92%E7%A8%9A%E8%BF%99%E5%87%A0%E5%8F%A5%E8%AF%9D%E4%B8%80%E7%9B%B4%E6%86%8B%E7%9C%BC%E6%B3%AA%23) `335.7K 🔥` `NEW`
1. [英伟达董事会4天态度反转](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%91%A3%E4%BA%8B%E4%BC%9A4%E5%A4%A9%E6%80%81%E5%BA%A6%E5%8F%8D%E8%BD%AC%23) `333.8K 🔥` `NEW`
1. [张萌王子璇别试探了有市场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E7%8E%8B%E5%AD%90%E7%92%87%E5%88%AB%E8%AF%95%E6%8E%A2%E4%BA%86%E6%9C%89%E5%B8%82%E5%9C%BA%23) `329.0K 🔥` `NEW`
1. [家长拿AI结果逼医生接诊](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E6%8B%BFAI%E7%BB%93%E6%9E%9C%E9%80%BC%E5%8C%BB%E7%94%9F%E6%8E%A5%E8%AF%8A%23) `326.7K 🔥` `NEW`
1. [河南财大赵某彦被开除](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%B4%A2%E5%A4%A7%E8%B5%B5%E6%9F%90%E5%BD%A6%E8%A2%AB%E5%BC%80%E9%99%A4%23) `319.0K 🔥` `NEW`
1. [薇诺娜母公司被罚](https://s.weibo.com/weibo?q=%23%E8%96%87%E8%AF%BA%E5%A8%9C%E6%AF%8D%E5%85%AC%E5%8F%B8%E8%A2%AB%E7%BD%9A%23) `317.1K 🔥` `NEW`
1. [白小纯这段可以纳入北影教材了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%BF%99%E6%AE%B5%E5%8F%AF%E4%BB%A5%E7%BA%B3%E5%85%A5%E5%8C%97%E5%BD%B1%E6%95%99%E6%9D%90%E4%BA%86%23) `313.0K 🔥` `NEW`
1. [杨超越董思成床戏](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%91%A3%E6%80%9D%E6%88%90%E5%BA%8A%E6%88%8F%23) `309.6K 🔥` `NEW`
1. [爽哥心疼大美](https://s.weibo.com/weibo?q=%23%E7%88%BD%E5%93%A5%E5%BF%83%E7%96%BC%E5%A4%A7%E7%BE%8E%23) `304.0K 🔥` `NEW`
1. [九成美起诉阿渔的渔](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E6%88%90%E7%BE%8E%E8%B5%B7%E8%AF%89%E9%98%BF%E6%B8%94%E7%9A%84%E6%B8%94%23) `302.9K 🔥` `NEW`
1. [业主群有个很好笑的邻居](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E4%B8%BB%E7%BE%A4%E6%9C%89%E4%B8%AA%E5%BE%88%E5%A5%BD%E7%AC%91%E7%9A%84%E9%82%BB%E5%B1%85%23) `290.1K 🔥` `NEW`
1. [七人几乎不带文吉儿玩](https://s.weibo.com/weibo?q=%23%E4%B8%83%E4%BA%BA%E5%87%A0%E4%B9%8E%E4%B8%8D%E5%B8%A6%E6%96%87%E5%90%89%E5%84%BF%E7%8E%A9%23) `286.0K 🔥` `NEW`
1. [章若楠对接发文](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%AF%B9%E6%8E%A5%E5%8F%91%E6%96%87%23) `271.7K 🔥` `NEW`
1. [李一桐 女推3](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%20%E5%A5%B3%E6%8E%A83%23) `268.1K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `265.7K 🔥` `NEW`
1. [奚梦瑶从女儿2岁开始就给她买包包](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E4%BB%8E%E5%A5%B3%E5%84%BF2%E5%B2%81%E5%BC%80%E5%A7%8B%E5%B0%B1%E7%BB%99%E5%A5%B9%E4%B9%B0%E5%8C%85%E5%8C%85%23) `249.7K 🔥` `NEW`
1. [仙洋为大美发声](https://s.weibo.com/weibo?q=%23%E4%BB%99%E6%B4%8B%E4%B8%BA%E5%A4%A7%E7%BE%8E%E5%8F%91%E5%A3%B0%23) `226.5K 🔥` `NEW`
1. [快递员花40多万闪婚女子48天后跑了](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E5%91%98%E8%8A%B140%E5%A4%9A%E4%B8%87%E9%97%AA%E5%A9%9A%E5%A5%B3%E5%AD%9048%E5%A4%A9%E5%90%8E%E8%B7%91%E4%BA%86%23) `226.4K 🔥` `NEW`
1. [陈清洲同志因病逝世](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B8%85%E6%B4%B2%E5%90%8C%E5%BF%97%E5%9B%A0%E7%97%85%E9%80%9D%E4%B8%96%23) `220.6K 🔥` `NEW`
1. [女子跳广场舞子宫掉出卡在裤子里](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B7%B3%E5%B9%BF%E5%9C%BA%E8%88%9E%E5%AD%90%E5%AE%AB%E6%8E%89%E5%87%BA%E5%8D%A1%E5%9C%A8%E8%A3%A4%E5%AD%90%E9%87%8C%23) `219.3K 🔥` `NEW`
1. [睡前有这5种表现可能是脑梗](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%89%8D%E6%9C%89%E8%BF%995%E7%A7%8D%E8%A1%A8%E7%8E%B0%E5%8F%AF%E8%83%BD%E6%98%AF%E8%84%91%E6%A2%97%23) `218.0K 🔥` `NEW`
1. [小猫以为人也是怀孕两个月就生](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%BB%A5%E4%B8%BA%E4%BA%BA%E4%B9%9F%E6%98%AF%E6%80%80%E5%AD%95%E4%B8%A4%E4%B8%AA%E6%9C%88%E5%B0%B1%E7%94%9F%23) `212.4K 🔥` `NEW`
1. [刘宇宁胸肌腹肌没白练](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%83%B8%E8%82%8C%E8%85%B9%E8%82%8C%E6%B2%A1%E7%99%BD%E7%BB%83%23) `156.0K 🔥` `NEW`
1. [飞秒手术要降价了](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E7%A7%92%E6%89%8B%E6%9C%AF%E8%A6%81%E9%99%8D%E4%BB%B7%E4%BA%86%23) `146.9K 🔥` `NEW`
1. [成年人的相爱其实难度很高](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E7%9B%B8%E7%88%B1%E5%85%B6%E5%AE%9E%E9%9A%BE%E5%BA%A6%E5%BE%88%E9%AB%98%23) `143.6K 🔥` `NEW`
1. [近视的原因是眼轴被拉长了](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%98%AF%E7%9C%BC%E8%BD%B4%E8%A2%AB%E6%8B%89%E9%95%BF%E4%BA%86%23) `142.5K 🔥` `NEW`
1. [洗衣机有必要一步到位买高端款吗](https://s.weibo.com/weibo?q=%23%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%9C%89%E5%BF%85%E8%A6%81%E4%B8%80%E6%AD%A5%E5%88%B0%E4%BD%8D%E4%B9%B0%E9%AB%98%E7%AB%AF%E6%AC%BE%E5%90%97%23) `139.1K 🔥` `NEW`
1. [张桂源展示了泡泡聊天的过程](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E5%B1%95%E7%A4%BA%E4%BA%86%E6%B3%A1%E6%B3%A1%E8%81%8A%E5%A4%A9%E7%9A%84%E8%BF%87%E7%A8%8B%23) `137.1K 🔥` `NEW`
1. [2027款全新领克03热血来袭](https://s.weibo.com/weibo?q=%232027%E6%AC%BE%E5%85%A8%E6%96%B0%E9%A2%86%E5%85%8B03%E7%83%AD%E8%A1%80%E6%9D%A5%E8%A2%AD%23) `135.7K 🔥` `NEW`
1. [马斯克称黄仁勋将永远被铭记](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E9%BB%84%E4%BB%81%E5%8B%8B%E5%B0%86%E6%B0%B8%E8%BF%9C%E8%A2%AB%E9%93%AD%E8%AE%B0%23) `109.9K 🔥` `NEW`
1. [教师长期集体赌博学校监管去哪了](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E9%95%BF%E6%9C%9F%E9%9B%86%E4%BD%93%E8%B5%8C%E5%8D%9A%E5%AD%A6%E6%A0%A1%E7%9B%91%E7%AE%A1%E5%8E%BB%E5%93%AA%E4%BA%86%23) `109.8K 🔥` `NEW`
1. [年年体检血糖正常却查出糖尿病](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%B9%B4%E4%BD%93%E6%A3%80%E8%A1%80%E7%B3%96%E6%AD%A3%E5%B8%B8%E5%8D%B4%E6%9F%A5%E5%87%BA%E7%B3%96%E5%B0%BF%E7%97%85%23) `107.2K 🔥` `NEW`
1. [Faker冲击S17冠军](https://s.weibo.com/weibo?q=%23Faker%E5%86%B2%E5%87%BBS17%E5%86%A0%E5%86%9B%23) `102.3K 🔥` `NEW`
1. [刘耀文直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%9B%B4%E6%92%AD%23) `101.9K 🔥` `NEW`
1. [麻辣王子品牌大使小鬼王琳凯](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E7%8E%8B%E5%AD%90%E5%93%81%E7%89%8C%E5%A4%A7%E4%BD%BF%E5%B0%8F%E9%AC%BC%E7%8E%8B%E7%90%B3%E5%87%AF%23) `370.9K 🔥`
1. [曝魏晨被雪藏的原因](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%AD%8F%E6%99%A8%E8%A2%AB%E9%9B%AA%E8%97%8F%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `321.5K 🔥` `-23%`

Updated at 2026-11-13 23:11:33

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
