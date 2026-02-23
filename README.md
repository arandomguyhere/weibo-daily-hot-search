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

1. [谷爱凌晒金牌打脸外媒 (Gu Ailing slapped foreign media in the face after showing off her gold medal)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%99%92%E9%87%91%E7%89%8C%E6%89%93%E8%84%B8%E5%A4%96%E5%AA%92%23) `849.2K 🔥` `NEW`
1. [陈飞宇回应李峋你知道吗](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E5%9B%9E%E5%BA%94%E6%9D%8E%E5%B3%8B%E4%BD%A0%E7%9F%A5%E9%81%93%E5%90%97%23) `341.7K 🔥` `NEW`
1. [墨西哥毒枭身亡引发报复行动](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E6%AF%92%E6%9E%AD%E8%BA%AB%E4%BA%A1%E5%BC%95%E5%8F%91%E6%8A%A5%E5%A4%8D%E8%A1%8C%E5%8A%A8%23) `331.6K 🔥` `NEW`
1. [陈丽君自曝把命都交代出去](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E8%87%AA%E6%9B%9D%E6%8A%8A%E5%91%BD%E9%83%BD%E4%BA%A4%E4%BB%A3%E5%87%BA%E5%8E%BB%23) `326.4K 🔥` `NEW`
1. [徐梦桃夺冠当天收到1600多条信息](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E5%A4%BA%E5%86%A0%E5%BD%93%E5%A4%A9%E6%94%B6%E5%88%B01600%E5%A4%9A%E6%9D%A1%E4%BF%A1%E6%81%AF%23) `275.0K 🔥` `NEW`
1. [中方就美国关税动向正式表态](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%B1%E7%BE%8E%E5%9B%BD%E5%85%B3%E7%A8%8E%E5%8A%A8%E5%90%91%E6%AD%A3%E5%BC%8F%E8%A1%A8%E6%80%81%23) `186.9K 🔥` `NEW`
1. [I.O.I将于5月回归](https://s.weibo.com/weibo?q=%23I.O.I%E5%B0%86%E4%BA%8E5%E6%9C%88%E5%9B%9E%E5%BD%92%23) `181.1K 🔥` `NEW`
1. [离婚发现女儿非亲生判还抚养费](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A%E5%8F%91%E7%8E%B0%E5%A5%B3%E5%84%BF%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%88%A4%E8%BF%98%E6%8A%9A%E5%85%BB%E8%B4%B9%23) `180.4K 🔥` `NEW`
1. [XG制作人SIMON被捕](https://s.weibo.com/weibo?q=%23XG%E5%88%B6%E4%BD%9C%E4%BA%BASIMON%E8%A2%AB%E6%8D%95%23) `180.2K 🔥` `NEW`
1. [女生把红包铺满桌子后全部拆开](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%8A%8A%E7%BA%A2%E5%8C%85%E9%93%BA%E6%BB%A1%E6%A1%8C%E5%AD%90%E5%90%8E%E5%85%A8%E9%83%A8%E6%8B%86%E5%BC%80%23) `179.4K 🔥` `NEW`
1. [新疆地震 (Xinjiang earthquake)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E5%9C%B0%E9%9C%87%23) `150.5K 🔥` `NEW`
1. [2026返程高峰](https://s.weibo.com/weibo?q=%232026%E8%BF%94%E7%A8%8B%E9%AB%98%E5%B3%B0%23) `143.7K 🔥` `NEW`
1. [女子在地铁让座获孕妇百元红包](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%9C%B0%E9%93%81%E8%AE%A9%E5%BA%A7%E8%8E%B7%E5%AD%95%E5%A6%87%E7%99%BE%E5%85%83%E7%BA%A2%E5%8C%85%23) `140.3K 🔥` `NEW`
1. [尼泊尔巴士坠河一中国公民失联](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B7%B4%E5%A3%AB%E5%9D%A0%E6%B2%B3%E4%B8%80%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%A4%B1%E8%81%94%23) `139.3K 🔥` `NEW`
1. [曝厚本被不让江山除名](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8E%9A%E6%9C%AC%E8%A2%AB%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E9%99%A4%E5%90%8D%23) `136.5K 🔥` `NEW`
1. [韩媒称韩唯一领先技术被中国反超](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92%E7%A7%B0%E9%9F%A9%E5%94%AF%E4%B8%80%E9%A2%86%E5%85%88%E6%8A%80%E6%9C%AF%E8%A2%AB%E4%B8%AD%E5%9B%BD%E5%8F%8D%E8%B6%85%23) `130.6K 🔥` `NEW`
1. [越来越高级的智能马桶让人不敢坐](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E9%AB%98%E7%BA%A7%E7%9A%84%E6%99%BA%E8%83%BD%E9%A9%AC%E6%A1%B6%E8%AE%A9%E4%BA%BA%E4%B8%8D%E6%95%A2%E5%9D%90%23) `129.7K 🔥` `NEW`
1. [大学为啥不取消校园跑](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E4%B8%BA%E5%95%A5%E4%B8%8D%E5%8F%96%E6%B6%88%E6%A0%A1%E5%9B%AD%E8%B7%91%23) `107.3K 🔥` `NEW`
1. [一代人有一代人的秋名山](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E7%A7%8B%E5%90%8D%E5%B1%B1%23) `90.9K 🔥` `NEW`
1. [詹姆斯43000分](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF43000%E5%88%86%23) `82.9K 🔥` `NEW`
1. [江湖夜雨十年灯 (Rivers and lakes night rain ten years of lanterns)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B9%96%E5%A4%9C%E9%9B%A8%E5%8D%81%E5%B9%B4%E7%81%AF%23) `80.5K 🔥` `NEW`
1. [当你学会不解释原因](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E5%AD%A6%E4%BC%9A%E4%B8%8D%E8%A7%A3%E9%87%8A%E5%8E%9F%E5%9B%A0%23) `79.3K 🔥` `NEW`
1. [预计13小时开3小时后仍需13小时](https://s.weibo.com/weibo?q=%23%E9%A2%84%E8%AE%A113%E5%B0%8F%E6%97%B6%E5%BC%803%E5%B0%8F%E6%97%B6%E5%90%8E%E4%BB%8D%E9%9C%8013%E5%B0%8F%E6%97%B6%23) `75.5K 🔥` `NEW`
1. [冰雪大世界闭园后哈尔滨下暴雪](https://s.weibo.com/weibo?q=%23%E5%86%B0%E9%9B%AA%E5%A4%A7%E4%B8%96%E7%95%8C%E9%97%AD%E5%9B%AD%E5%90%8E%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%8B%E6%9A%B4%E9%9B%AA%23) `74.3K 🔥` `NEW`
1. [金裕贞短发造型](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%A3%95%E8%B4%9E%E7%9F%AD%E5%8F%91%E9%80%A0%E5%9E%8B%23) `68.3K 🔥` `NEW`
1. [两嫌疑人除夕纵火烧车大年初三被抓](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%AB%8C%E7%96%91%E4%BA%BA%E9%99%A4%E5%A4%95%E7%BA%B5%E7%81%AB%E7%83%A7%E8%BD%A6%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%89%E8%A2%AB%E6%8A%93%23) `68.2K 🔥` `NEW`
1. [香港男子深夜尾随女子泼不明液体](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E7%94%B7%E5%AD%90%E6%B7%B1%E5%A4%9C%E5%B0%BE%E9%9A%8F%E5%A5%B3%E5%AD%90%E6%B3%BC%E4%B8%8D%E6%98%8E%E6%B6%B2%E4%BD%93%23) `67.4K 🔥` `NEW`
1. [人这辈子就那么几个坑](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%BF%99%E8%BE%88%E5%AD%90%E5%B0%B1%E9%82%A3%E4%B9%88%E5%87%A0%E4%B8%AA%E5%9D%91%23) `67.1K 🔥` `NEW`
1. [小狗其实那天晚上我根本没睡着](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%85%B6%E5%AE%9E%E9%82%A3%E5%A4%A9%E6%99%9A%E4%B8%8A%E6%88%91%E6%A0%B9%E6%9C%AC%E6%B2%A1%E7%9D%A1%E7%9D%80%23) `65.7K 🔥` `NEW`
1. [爱猫女老了以后](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%8C%AB%E5%A5%B3%E8%80%81%E4%BA%86%E4%BB%A5%E5%90%8E%23) `64.9K 🔥` `NEW`
1. [为什么高速堵车看不见大巴车 (Why can’t I see the bus in the highway traffic jam?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E9%AB%98%E9%80%9F%E5%A0%B5%E8%BD%A6%E7%9C%8B%E4%B8%8D%E8%A7%81%E5%A4%A7%E5%B7%B4%E8%BD%A6%23) `63.7K 🔥` `NEW`
1. [侣皓吉吉我跟随你11年了](https://s.weibo.com/weibo?q=%23%E4%BE%A3%E7%9A%93%E5%90%89%E5%90%89%E6%88%91%E8%B7%9F%E9%9A%8F%E4%BD%A011%E5%B9%B4%E4%BA%86%23) `60.7K 🔥` `NEW`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `1.3M 🔥` `+1757%`
1. [中国红闪耀米兰冬奥闭幕式](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BA%A2%E9%97%AA%E8%80%80%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%97%AD%E5%B9%95%E5%BC%8F%23) `710.4K 🔥` `+306%`
1. [新狮铂拓界携手李娜即将瞩目登场](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%8B%AE%E9%93%82%E6%8B%93%E7%95%8C%E6%90%BA%E6%89%8B%E6%9D%8E%E5%A8%9C%E5%8D%B3%E5%B0%86%E7%9E%A9%E7%9B%AE%E7%99%BB%E5%9C%BA%23) `308.9K 🔥` `+591%`
1. [吴京回应镖人票房逆袭](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E5%9B%9E%E5%BA%94%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E9%80%86%E8%A2%AD%23) `179.7K 🔥` `+181%`
1. [陈妍希说林心如女儿长的太好看了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E8%AF%B4%E6%9E%97%E5%BF%83%E5%A6%82%E5%A5%B3%E5%84%BF%E9%95%BF%E7%9A%84%E5%A4%AA%E5%A5%BD%E7%9C%8B%E4%BA%86%23) `132.8K 🔥` `+35%`
1. [小猫吃虾被烫到当场暴打大虾](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%90%83%E8%99%BE%E8%A2%AB%E7%83%AB%E5%88%B0%E5%BD%93%E5%9C%BA%E6%9A%B4%E6%89%93%E5%A4%A7%E8%99%BE%23) `113.8K 🔥` `+41%`
1. [四川女婿黄子韬在家也得穿省服](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%A5%B3%E5%A9%BF%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9C%A8%E5%AE%B6%E4%B9%9F%E5%BE%97%E7%A9%BF%E7%9C%81%E6%9C%8D%23) `181.5K 🔥`
1. [镖人 (escort)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `77.7K 🔥`
1. [女子深陷迷你贷400元分36期](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B7%B1%E9%99%B7%E8%BF%B7%E4%BD%A0%E8%B4%B7400%E5%85%83%E5%88%8636%E6%9C%9F%23) `219.2K 🔥` `-30%`
1. [谷爱凌晒奶奶戴奖牌合照 (Gu Ailing posted a photo of her grandma wearing a medal)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%99%92%E5%A5%B6%E5%A5%B6%E6%88%B4%E5%A5%96%E7%89%8C%E5%90%88%E7%85%A7%23) `181.6K 🔥` `-77%`
1. [谷爱凌炸完赛场炸秀场 (Gu Ailing blew up the show after finishing the game)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%82%B8%E5%AE%8C%E8%B5%9B%E5%9C%BA%E7%82%B8%E7%A7%80%E5%9C%BA%23) `100.8K 🔥` `-91%`
1. [印尼突发7.0级地震](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC%E7%AA%81%E5%8F%917.0%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `100.5K 🔥` `-56%`
1. [半夜出发的大聪明全堵在高速上了 (The smart guy who set out in the middle of the night was stuck on the highway.)](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%A4%9C%E5%87%BA%E5%8F%91%E7%9A%84%E5%A4%A7%E8%81%AA%E6%98%8E%E5%85%A8%E5%A0%B5%E5%9C%A8%E9%AB%98%E9%80%9F%E4%B8%8A%E4%BA%86%23) `90.2K 🔥` `-74%`
1. [神仙肉女主人设](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%E5%A5%B3%E4%B8%BB%E4%BA%BA%E8%AE%BE%23) `87.0K 🔥` `-61%`
1. [中国最大高速收费站迎返程高峰](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%80%E5%A4%A7%E9%AB%98%E9%80%9F%E6%94%B6%E8%B4%B9%E7%AB%99%E8%BF%8E%E8%BF%94%E7%A8%8B%E9%AB%98%E5%B3%B0%23) `78.3K 🔥` `-77%`
1. [意大利把闭幕式办成文旅宣传片](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E6%8A%8A%E9%97%AD%E5%B9%95%E5%BC%8F%E5%8A%9E%E6%88%90%E6%96%87%E6%97%85%E5%AE%A3%E4%BC%A0%E7%89%87%23) `71.0K 🔥` `-35%`
1. [原来正月初七是人的生日](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%AD%A3%E6%9C%88%E5%88%9D%E4%B8%83%E6%98%AF%E4%BA%BA%E7%9A%84%E7%94%9F%E6%97%A5%23) `68.1K 🔥` `-28%`
1. [女子动车厕所冲走50g金手链](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8A%A8%E8%BD%A6%E5%8E%95%E6%89%80%E5%86%B2%E8%B5%B050g%E9%87%91%E6%89%8B%E9%93%BE%23) `64.0K 🔥` `-59%`
1. [周深 王一博老师什么不火呀 (Zhou Shen, why is Teacher Wang Yibo not popular?)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%20%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%80%81%E5%B8%88%E4%BB%80%E4%B9%88%E4%B8%8D%E7%81%AB%E5%91%80%23) `63.3K 🔥` `-53%`

Updated at 2026-02-23 12:35:25

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
