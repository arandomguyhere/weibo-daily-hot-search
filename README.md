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

1. [本届世界杯惨案来得太快了 (The tragedy of this World Cup happened too soon)](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E6%83%A8%E6%A1%88%E6%9D%A5%E5%BE%97%E5%A4%AA%E5%BF%AB%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [删了几千张照片结果内存没变](https://s.weibo.com/weibo?q=%23%E5%88%A0%E4%BA%86%E5%87%A0%E5%8D%83%E5%BC%A0%E7%85%A7%E7%89%87%E7%BB%93%E6%9E%9C%E5%86%85%E5%AD%98%E6%B2%A1%E5%8F%98%23) `802.9K 🔥` `NEW`
1. [一图看懂基建六张网](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E7%9C%8B%E6%87%82%E5%9F%BA%E5%BB%BA%E5%85%AD%E5%BC%A0%E7%BD%91%23) `653.7K 🔥` `NEW`
1. [好久不见迪丽热巴走红毯](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E4%B9%85%E4%B8%8D%E8%A7%81%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B5%B0%E7%BA%A2%E6%AF%AF%23) `599.2K 🔥` `NEW`
1. [第一次见公摊面积这么大的鞋](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%85%AC%E6%91%8A%E9%9D%A2%E7%A7%AF%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E9%9E%8B%23) `539.0K 🔥` `NEW`
1. [疑似巴西队无人在意内马尔](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%B7%B4%E8%A5%BF%E9%98%9F%E6%97%A0%E4%BA%BA%E5%9C%A8%E6%84%8F%E5%86%85%E9%A9%AC%E5%B0%94%23) `453.0K 🔥` `NEW`
1. [白鹿说丞磊一看剧本要坐18集轮椅就接了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AF%B4%E4%B8%9E%E7%A3%8A%E4%B8%80%E7%9C%8B%E5%89%A7%E6%9C%AC%E8%A6%81%E5%9D%9018%E9%9B%86%E8%BD%AE%E6%A4%85%E5%B0%B1%E6%8E%A5%E4%BA%86%23) `407.4K 🔥` `NEW`
1. [王者荣耀 命格](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%20%E5%91%BD%E6%A0%BC%23) `387.5K 🔥` `NEW`
1. [命好的人体现在哪些方面](https://s.weibo.com/weibo?q=%23%E5%91%BD%E5%A5%BD%E7%9A%84%E4%BA%BA%E4%BD%93%E7%8E%B0%E5%9C%A8%E5%93%AA%E4%BA%9B%E6%96%B9%E9%9D%A2%23) `370.6K 🔥` `NEW`
1. [首尔电视剧大赏官方辟谣](https://s.weibo.com/weibo?q=%23%E9%A6%96%E5%B0%94%E7%94%B5%E8%A7%86%E5%89%A7%E5%A4%A7%E8%B5%8F%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%23) `319.8K 🔥` `NEW`
1. [珠峰向导被遗忘在死亡区6天6夜生还 (Everest guide was forgotten in the death zone and survived for 6 days and 6 nights)](https://s.weibo.com/weibo?q=%23%E7%8F%A0%E5%B3%B0%E5%90%91%E5%AF%BC%E8%A2%AB%E9%81%97%E5%BF%98%E5%9C%A8%E6%AD%BB%E4%BA%A1%E5%8C%BA6%E5%A4%A96%E5%A4%9C%E7%94%9F%E8%BF%98%23) `319.7K 🔥` `NEW`
1. [周雨彤回应两年前的争议](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%9B%A8%E5%BD%A4%E5%9B%9E%E5%BA%94%E4%B8%A4%E5%B9%B4%E5%89%8D%E7%9A%84%E4%BA%89%E8%AE%AE%23) `318.1K 🔥` `NEW`
1. [比尔盖茨自曝出轨20多次](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E8%87%AA%E6%9B%9D%E5%87%BA%E8%BD%A820%E5%A4%9A%E6%AC%A1%23) `317.1K 🔥` `NEW`
1. [迪丽热巴给马丽段奕宏打招呼](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BB%99%E9%A9%AC%E4%B8%BD%E6%AE%B5%E5%A5%95%E5%AE%8F%E6%89%93%E6%8B%9B%E5%91%BC%23) `316.9K 🔥` `NEW`
1. [白鹿宋佳张碧晨素颜聚餐](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AE%8B%E4%BD%B3%E5%BC%A0%E7%A2%A7%E6%99%A8%E7%B4%A0%E9%A2%9C%E8%81%9A%E9%A4%90%23) `315.6K 🔥` `NEW`
1. [618巅峰价惊喜来了](https://s.weibo.com/weibo?q=%23618%E5%B7%85%E5%B3%B0%E4%BB%B7%E6%83%8A%E5%96%9C%E6%9D%A5%E4%BA%86%23) `315.4K 🔥` `NEW`
1. [马天宇谈父亲离世](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%B0%88%E7%88%B6%E4%BA%B2%E7%A6%BB%E4%B8%96%23) `314.4K 🔥` `NEW`
1. [王俊凯董子健合照被判AI了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%91%A3%E5%AD%90%E5%81%A5%E5%90%88%E7%85%A7%E8%A2%AB%E5%88%A4AI%E4%BA%86%23) `314.1K 🔥` `NEW`
1. [显示欠款千万亿男子将起诉光大银行](https://s.weibo.com/weibo?q=%23%E6%98%BE%E7%A4%BA%E6%AC%A0%E6%AC%BE%E5%8D%83%E4%B8%87%E4%BA%BF%E7%94%B7%E5%AD%90%E5%B0%86%E8%B5%B7%E8%AF%89%E5%85%89%E5%A4%A7%E9%93%B6%E8%A1%8C%23) `312.9K 🔥` `NEW`
1. [618三重优惠叠加历史低价](https://s.weibo.com/weibo?q=%23618%E4%B8%89%E9%87%8D%E4%BC%98%E6%83%A0%E5%8F%A0%E5%8A%A0%E5%8E%86%E5%8F%B2%E4%BD%8E%E4%BB%B7%23) `312.4K 🔥` `NEW`
1. [王鹤棣胸口纹身 (Wang Hedi chest tattoo)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%83%B8%E5%8F%A3%E7%BA%B9%E8%BA%AB%23) `311.5K 🔥` `NEW`
1. [贺峻霖回复宋亚轩](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%9B%9E%E5%A4%8D%E5%AE%8B%E4%BA%9A%E8%BD%A9%23) `310.8K 🔥` `NEW`
1. [iG官宣TheShy归队](https://s.weibo.com/weibo?q=%23iG%E5%AE%98%E5%AE%A3TheShy%E5%BD%92%E9%98%9F%23) `310.6K 🔥` `NEW`
1. [男子无证让人服用弩箭药治脑梗致死](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%97%A0%E8%AF%81%E8%AE%A9%E4%BA%BA%E6%9C%8D%E7%94%A8%E5%BC%A9%E7%AE%AD%E8%8D%AF%E6%B2%BB%E8%84%91%E6%A2%97%E8%87%B4%E6%AD%BB%23) `291.6K 🔥` `NEW`
1. [TF四代突围2.0](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E7%AA%81%E5%9B%B42.0%23) `290.0K 🔥` `NEW`
1. [波兰地下挖出32具胎儿遗骸](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E5%85%B0%E5%9C%B0%E4%B8%8B%E6%8C%96%E5%87%BA32%E5%85%B7%E8%83%8E%E5%84%BF%E9%81%97%E9%AA%B8%23) `288.2K 🔥` `NEW`
1. [突尼斯主教练下课](https://s.weibo.com/weibo?q=%23%E7%AA%81%E5%B0%BC%E6%96%AF%E4%B8%BB%E6%95%99%E7%BB%83%E4%B8%8B%E8%AF%BE%23) `286.3K 🔥` `NEW`
1. [今年天猫618的限时优惠夯爆了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E5%A4%A9%E7%8C%AB618%E7%9A%84%E9%99%90%E6%97%B6%E4%BC%98%E6%83%A0%E5%A4%AF%E7%88%86%E4%BA%86%23) `285.6K 🔥` `NEW`
1. [男子离奇中毒送医后多脏器衰竭而亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A6%BB%E5%A5%87%E4%B8%AD%E6%AF%92%E9%80%81%E5%8C%BB%E5%90%8E%E5%A4%9A%E8%84%8F%E5%99%A8%E8%A1%B0%E7%AB%AD%E8%80%8C%E4%BA%A1%23) `285.3K 🔥` `NEW`
1. [苏翊鸣回应恋情](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%9B%9E%E5%BA%94%E6%81%8B%E6%83%85%23) `284.4K 🔥` `NEW`
1. [京东对我的前额叶很友好 (JD.com is friendly to my prefrontal lobes)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%AF%B9%E6%88%91%E7%9A%84%E5%89%8D%E9%A2%9D%E5%8F%B6%E5%BE%88%E5%8F%8B%E5%A5%BD%23) `283.5K 🔥` `NEW`
1. [理想智驾目标四季度对齐特斯拉](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E6%99%BA%E9%A9%BE%E7%9B%AE%E6%A0%87%E5%9B%9B%E5%AD%A3%E5%BA%A6%E5%AF%B9%E9%BD%90%E7%89%B9%E6%96%AF%E6%8B%89%23) `282.7K 🔥` `NEW`
1. [刘烨 全场下班最快的人](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%83%A8%20%E5%85%A8%E5%9C%BA%E4%B8%8B%E7%8F%AD%E6%9C%80%E5%BF%AB%E7%9A%84%E4%BA%BA%23) `281.8K 🔥` `NEW`
1. [郑钦文vs萨卡里](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%90%A8%E5%8D%A1%E9%87%8C%23) `281.3K 🔥` `NEW`
1. [宋雨琦完全迪士尼在逃公主](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E5%AE%8C%E5%85%A8%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%9C%A8%E9%80%83%E5%85%AC%E4%B8%BB%23) `280.1K 🔥` `NEW`
1. [贺峻霖回复严浩翔的祝福](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%9B%9E%E5%A4%8D%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9A%84%E7%A5%9D%E7%A6%8F%23) `271.5K 🔥` `NEW`
1. [会员们被山姆背刺了](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E5%91%98%E4%BB%AC%E8%A2%AB%E5%B1%B1%E5%A7%86%E8%83%8C%E5%88%BA%E4%BA%86%23) `262.0K 🔥` `NEW`
1. [王者心魔六耳](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%BF%83%E9%AD%94%E5%85%AD%E8%80%B3%23) `261.7K 🔥` `NEW`
1. [这是真上过大学的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E7%9C%9F%E4%B8%8A%E8%BF%87%E5%A4%A7%E5%AD%A6%E7%9A%84%23) `255.0K 🔥` `NEW`
1. [每年的高考成绩都要晚上出原因](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%B9%B4%E7%9A%84%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%E9%83%BD%E8%A6%81%E6%99%9A%E4%B8%8A%E5%87%BA%E5%8E%9F%E5%9B%A0%23) `251.5K 🔥` `NEW`
1. [炽夏尺度 (blazing summer scale)](https://s.weibo.com/weibo?q=%23%E7%82%BD%E5%A4%8F%E5%B0%BA%E5%BA%A6%23) `241.7K 🔥` `NEW`
1. [肉店老板连杀3人案将开庭](https://s.weibo.com/weibo?q=%23%E8%82%89%E5%BA%97%E8%80%81%E6%9D%BF%E8%BF%9E%E6%9D%803%E4%BA%BA%E6%A1%88%E5%B0%86%E5%BC%80%E5%BA%AD%23) `240.4K 🔥` `NEW`
1. [弟弟被拐后姐姐被妈妈从小打到大](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E8%A2%AB%E6%8B%90%E5%90%8E%E5%A7%90%E5%A7%90%E8%A2%AB%E5%A6%88%E5%A6%88%E4%BB%8E%E5%B0%8F%E6%89%93%E5%88%B0%E5%A4%A7%23) `239.9K 🔥` `NEW`
1. [赵云孙权姬小满全新皮肤](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BA%91%E5%AD%99%E6%9D%83%E5%A7%AC%E5%B0%8F%E6%BB%A1%E5%85%A8%E6%96%B0%E7%9A%AE%E8%82%A4%23) `235.3K 🔥` `NEW`
1. [中国影视之夜红毯](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BD%B1%E8%A7%86%E4%B9%8B%E5%A4%9C%E7%BA%A2%E6%AF%AF%23) `230.2K 🔥` `NEW`
1. [15倍牛股20CM涨停](https://s.weibo.com/weibo?q=%2315%E5%80%8D%E7%89%9B%E8%82%A120CM%E6%B6%A8%E5%81%9C%23) `225.5K 🔥` `NEW`
1. [起底被中方制裁的菲律宾防长](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E5%BA%95%E8%A2%AB%E4%B8%AD%E6%96%B9%E5%88%B6%E8%A3%81%E7%9A%84%E8%8F%B2%E5%BE%8B%E5%AE%BE%E9%98%B2%E9%95%BF%23) `221.5K 🔥` `NEW`
1. [空调选购最该看哪些参数](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E9%80%89%E8%B4%AD%E6%9C%80%E8%AF%A5%E7%9C%8B%E5%93%AA%E4%BA%9B%E5%8F%82%E6%95%B0%23) `216.3K 🔥` `NEW`
1. [Rookie iG](https://s.weibo.com/weibo?q=%23Rookie%20iG%23) `213.5K 🔥` `NEW`
1. [2026理想Livis Day](https://s.weibo.com/weibo?q=%232026%E7%90%86%E6%83%B3Livis%20Day%23) `634.1K 🔥` `-60%`
1. [戚薇李承铉女儿11岁近照 (Recent photos of Qi Wei and Lee Seung-hyun's daughter at the age of 11)](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E6%9D%8E%E6%89%BF%E9%93%89%E5%A5%B3%E5%84%BF11%E5%B2%81%E8%BF%91%E7%85%A7%23) `318.5K 🔥` `-63%`

Updated at 2026-06-15 21:23:09

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
