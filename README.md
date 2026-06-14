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

1. [小县城取消中考选拔全员直升高中 (The small county canceled the high school entrance examination and selected all students to go directly to high school.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8E%BF%E5%9F%8E%E5%8F%96%E6%B6%88%E4%B8%AD%E8%80%83%E9%80%89%E6%8B%94%E5%85%A8%E5%91%98%E7%9B%B4%E5%8D%87%E9%AB%98%E4%B8%AD%23) `3.1M 🔥` `NEW`
1. [爷爷爸爸离世2岁娃要还50万贷款吗](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E7%88%B8%E7%88%B8%E7%A6%BB%E4%B8%962%E5%B2%81%E5%A8%83%E8%A6%81%E8%BF%9850%E4%B8%87%E8%B4%B7%E6%AC%BE%E5%90%97%23) `1.1M 🔥` `NEW`
1. [六张网锻造中国经济硬核底座](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%BC%A0%E7%BD%91%E9%94%BB%E9%80%A0%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E7%A1%AC%E6%A0%B8%E5%BA%95%E5%BA%A7%23) `834.6K 🔥` `NEW`
1. [人一旦在有地铁的城市待过](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E5%9C%A8%E6%9C%89%E5%9C%B0%E9%93%81%E7%9A%84%E5%9F%8E%E5%B8%82%E5%BE%85%E8%BF%87%23) `662.5K 🔥` `NEW`
1. [莫离预期违背](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E9%A2%84%E6%9C%9F%E8%BF%9D%E8%83%8C%23) `475.2K 🔥` `NEW`
1. [微博电影之夜红毯](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%94%B5%E5%BD%B1%E4%B9%8B%E5%A4%9C%E7%BA%A2%E6%AF%AF%23) `415.6K 🔥` `NEW`
1. [澳大利亚2比0土耳其](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A2%E6%AF%940%E5%9C%9F%E8%80%B3%E5%85%B6%23) `360.1K 🔥` `NEW`
1. [鹿晗你真敢开口要](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%BD%A0%E7%9C%9F%E6%95%A2%E5%BC%80%E5%8F%A3%E8%A6%81%23) `357.3K 🔥` `NEW`
1. [尼克斯NBA总冠军](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%85%8B%E6%96%AFNBA%E6%80%BB%E5%86%A0%E5%86%9B%23) `350.7K 🔥` `NEW`
1. [持枪抢劫中国球迷嫌犯1人已落网](https://s.weibo.com/weibo?q=%23%E6%8C%81%E6%9E%AA%E6%8A%A2%E5%8A%AB%E4%B8%AD%E5%9B%BD%E7%90%83%E8%BF%B7%E5%AB%8C%E7%8A%AF1%E4%BA%BA%E5%B7%B2%E8%90%BD%E7%BD%91%23) `349.4K 🔥` `NEW`
1. [等等太帅了 (Wait, he's so handsome)](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%AD%89%E5%A4%AA%E5%B8%85%E4%BA%86%23) `344.3K 🔥` `NEW`
1. [黄大炜去世](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%A7%E7%82%9C%E5%8E%BB%E4%B8%96%23) `341.4K 🔥` `NEW`
1. [人一定要主动主动再主动](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E4%B8%BB%E5%8A%A8%E4%B8%BB%E5%8A%A8%E5%86%8D%E4%B8%BB%E5%8A%A8%23) `339.3K 🔥` `NEW`
1. [机器人伴侣仅限成人购买](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BC%B4%E4%BE%A3%E4%BB%85%E9%99%90%E6%88%90%E4%BA%BA%E8%B4%AD%E4%B9%B0%23) `336.7K 🔥` `NEW`
1. [曾沛慈买了520套孙怡杂志](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B9%B0%E4%BA%86520%E5%A5%97%E5%AD%99%E6%80%A1%E6%9D%82%E5%BF%97%23) `336.0K 🔥` `NEW`
1. [中国裁判本届世界杯首秀](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%A3%81%E5%88%A4%E6%9C%AC%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E7%A7%80%23) `333.8K 🔥` `NEW`
1. [扬州一半挂车改烧烤摊走红](https://s.weibo.com/weibo?q=%23%E6%89%AC%E5%B7%9E%E4%B8%80%E5%8D%8A%E6%8C%82%E8%BD%A6%E6%94%B9%E7%83%A7%E7%83%A4%E6%91%8A%E8%B5%B0%E7%BA%A2%23) `331.8K 🔥` `NEW`
1. [旺旺副董事长说台独都是骗人的](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E5%89%AF%E8%91%A3%E4%BA%8B%E9%95%BF%E8%AF%B4%E5%8F%B0%E7%8B%AC%E9%83%BD%E6%98%AF%E9%AA%97%E4%BA%BA%E7%9A%84%23) `330.4K 🔥` `NEW`
1. [官方通报医院安排拍片技师冒充医师](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8C%BB%E9%99%A2%E5%AE%89%E6%8E%92%E6%8B%8D%E7%89%87%E6%8A%80%E5%B8%88%E5%86%92%E5%85%85%E5%8C%BB%E5%B8%88%23) `329.3K 🔥` `NEW`
1. [等等14岁身高](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%AD%8914%E5%B2%81%E8%BA%AB%E9%AB%98%23) `327.9K 🔥` `NEW`
1. [短剧香蜜沉沉烬如霜上线 (The short play "Sweet Honey as Ashes as Frost" is now online)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E9%A6%99%E8%9C%9C%E6%B2%89%E6%B2%89%E7%83%AC%E5%A6%82%E9%9C%9C%E4%B8%8A%E7%BA%BF%23) `327.0K 🔥` `NEW`
1. [NBA总决直播介绍中国演员邓超](https://s.weibo.com/weibo?q=%23NBA%E6%80%BB%E5%86%B3%E7%9B%B4%E6%92%AD%E4%BB%8B%E7%BB%8D%E4%B8%AD%E5%9B%BD%E6%BC%94%E5%91%98%E9%82%93%E8%B6%85%23) `325.9K 🔥` `NEW`
1. [疑似苏翊鸣新恋情](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%96%B0%E6%81%8B%E6%83%85%23) `314.2K 🔥` `NEW`
1. [卖卤肉不让问价的老头火了](https://s.weibo.com/weibo?q=%23%E5%8D%96%E5%8D%A4%E8%82%89%E4%B8%8D%E8%AE%A9%E9%97%AE%E4%BB%B7%E7%9A%84%E8%80%81%E5%A4%B4%E7%81%AB%E4%BA%86%23) `279.3K 🔥` `NEW`
1. [曝赵樱子有孩子了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B5%B5%E6%A8%B1%E5%AD%90%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23) `248.3K 🔥` `NEW`
1. [陈飞宇给Angelababy刷礼物](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E7%BB%99Angelababy%E5%88%B7%E7%A4%BC%E7%89%A9%23) `227.1K 🔥` `NEW`
1. [男子攀登火山口坠入高温硫磺湖身亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%94%80%E7%99%BB%E7%81%AB%E5%B1%B1%E5%8F%A3%E5%9D%A0%E5%85%A5%E9%AB%98%E6%B8%A9%E7%A1%AB%E7%A3%BA%E6%B9%96%E8%BA%AB%E4%BA%A1%23) `220.0K 🔥` `NEW`
1. [邓超 鹿晗没有遗传我的优点](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%20%E9%B9%BF%E6%99%97%E6%B2%A1%E6%9C%89%E9%81%97%E4%BC%A0%E6%88%91%E7%9A%84%E4%BC%98%E7%82%B9%23) `219.7K 🔥` `NEW`
1. [大疆影石法庭死磕产品最高降2500元](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E5%BD%B1%E7%9F%B3%E6%B3%95%E5%BA%AD%E6%AD%BB%E7%A3%95%E4%BA%A7%E5%93%81%E6%9C%80%E9%AB%98%E9%99%8D2500%E5%85%83%23) `218.6K 🔥` `NEW`
1. [曾沛慈老公](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%80%81%E5%85%AC%23) `217.2K 🔥` `NEW`
1. [苏翊鸣 朱易 (Su Yiming Zhu Yi)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%20%E6%9C%B1%E6%98%93%23) `217.1K 🔥` `NEW`
1. [曝长生骨无男主全男配](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%95%BF%E7%94%9F%E9%AA%A8%E6%97%A0%E7%94%B7%E4%B8%BB%E5%85%A8%E7%94%B7%E9%85%8D%23) `215.9K 🔥` `NEW`
1. [洗一次嫩一次的洗澡顺序](https://s.weibo.com/weibo?q=%23%E6%B4%97%E4%B8%80%E6%AC%A1%E5%AB%A9%E4%B8%80%E6%AC%A1%E7%9A%84%E6%B4%97%E6%BE%A1%E9%A1%BA%E5%BA%8F%23) `214.3K 🔥` `NEW`
1. [贺峻霖毕业典礼](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%23) `213.4K 🔥` `NEW`
1. [鞠婧祎首位登封PORT男刊中国女星](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E9%A6%96%E4%BD%8D%E7%99%BB%E5%B0%81PORT%E7%94%B7%E5%88%8A%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%98%9F%23) `212.6K 🔥` `NEW`
1. [澳大利亚vs土耳其](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9Avs%E5%9C%9F%E8%80%B3%E5%85%B6%23) `211.5K 🔥` `NEW`
1. [大鱼海棠](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%B1%BC%E6%B5%B7%E6%A3%A0%23) `210.5K 🔥` `NEW`
1. [凶手杀害独居女孩想以正当防卫脱罪](https://s.weibo.com/weibo?q=%23%E5%87%B6%E6%89%8B%E6%9D%80%E5%AE%B3%E7%8B%AC%E5%B1%85%E5%A5%B3%E5%AD%A9%E6%83%B3%E4%BB%A5%E6%AD%A3%E5%BD%93%E9%98%B2%E5%8D%AB%E8%84%B1%E7%BD%AA%23) `209.6K 🔥` `NEW`
1. [张天爱美神归来](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A9%E7%88%B1%E7%BE%8E%E7%A5%9E%E5%BD%92%E6%9D%A5%23) `208.7K 🔥` `NEW`
1. [吴磊肤色白回来了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E8%82%A4%E8%89%B2%E7%99%BD%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `207.9K 🔥` `NEW`
1. [给阿嬷的情书 (A love letter to grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `205.2K 🔥` `NEW`
1. [程潇说自己档期很空](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E8%AF%B4%E8%87%AA%E5%B7%B1%E6%A1%A3%E6%9C%9F%E5%BE%88%E7%A9%BA%23) `204.6K 🔥` `NEW`
1. [女子蹦极坠亡工作人员被直升机搜捕](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B9%A6%E6%9E%81%E5%9D%A0%E4%BA%A1%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E8%A2%AB%E7%9B%B4%E5%8D%87%E6%9C%BA%E6%90%9C%E6%8D%95%23) `204.2K 🔥` `NEW`
1. [宁艺卓微博直播](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%BE%AE%E5%8D%9A%E7%9B%B4%E6%92%AD%23) `204.0K 🔥` `NEW`
1. [周深的大鱼曾找过王菲](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E7%9A%84%E5%A4%A7%E9%B1%BC%E6%9B%BE%E6%89%BE%E8%BF%87%E7%8E%8B%E8%8F%B2%23) `203.6K 🔥` `NEW`
1. [女子两小时试40多件衣服买33件](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%A4%E5%B0%8F%E6%97%B6%E8%AF%9540%E5%A4%9A%E4%BB%B6%E8%A1%A3%E6%9C%8D%E4%B9%B033%E4%BB%B6%23) `201.4K 🔥` `NEW`
1. [AI现在不仅仅是眼神光了](https://s.weibo.com/weibo?q=%23AI%E7%8E%B0%E5%9C%A8%E4%B8%8D%E4%BB%85%E4%BB%85%E6%98%AF%E7%9C%BC%E7%A5%9E%E5%85%89%E4%BA%86%23) `198.8K 🔥` `NEW`
1. [小米汽车回应直播5小时结束原因](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%9B%9E%E5%BA%94%E7%9B%B4%E6%92%AD5%E5%B0%8F%E6%97%B6%E7%BB%93%E6%9D%9F%E5%8E%9F%E5%9B%A0%23) `193.9K 🔥` `NEW`
1. [天梭全球形象代言人杨瀚森 (Tissot global image spokesperson Yang Hansen)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%A2%AD%E5%85%A8%E7%90%83%E5%BD%A2%E8%B1%A1%E4%BB%A3%E8%A8%80%E4%BA%BA%E6%9D%A8%E7%80%9A%E6%A3%AE%23) `396.7K 🔥`
1. [迪丽热巴手机壳](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `334.8K 🔥` `-25%`
1. [巴西醒醒 这是世界杯 (Wake up Brazil, this is the World Cup)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E9%86%92%E9%86%92%20%E8%BF%99%E6%98%AF%E4%B8%96%E7%95%8C%E6%9D%AF%23) `206.7K 🔥` `-95%`

Updated at 2026-06-14 15:09:09

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
