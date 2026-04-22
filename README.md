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

1. [哪吒汽车创始人已成老赖 (The founder of Nezha Automobile has become an old man)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92%E6%B1%BD%E8%BD%A6%E5%88%9B%E5%A7%8B%E4%BA%BA%E5%B7%B2%E6%88%90%E8%80%81%E8%B5%96%23) `1.1M 🔥` `NEW`
1. [养6个弟妹又有7弟小伙妹妹发声](https://s.weibo.com/weibo?q=%23%E5%85%BB6%E4%B8%AA%E5%BC%9F%E5%A6%B9%E5%8F%88%E6%9C%897%E5%BC%9F%E5%B0%8F%E4%BC%99%E5%A6%B9%E5%A6%B9%E5%8F%91%E5%A3%B0%23) `859.1K 🔥` `NEW`
1. [英雄回家](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E5%9B%9E%E5%AE%B6%23) `680.8K 🔥` `NEW`
1. [阿里千问数字人来了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E5%8D%83%E9%97%AE%E6%95%B0%E5%AD%97%E4%BA%BA%E6%9D%A5%E4%BA%86%23) `680.0K 🔥` `NEW`
1. [虞书欣戛纳第二套造型](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%88%9B%E7%BA%B3%E7%AC%AC%E4%BA%8C%E5%A5%97%E9%80%A0%E5%9E%8B%23) `678.2K 🔥` `NEW`
1. [伊朗抓住了美国的要害](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8A%93%E4%BD%8F%E4%BA%86%E7%BE%8E%E5%9B%BD%E7%9A%84%E8%A6%81%E5%AE%B3%23) `676.8K 🔥` `NEW`
1. [曝iPhone18屏幕规格或开倒车](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18%E5%B1%8F%E5%B9%95%E8%A7%84%E6%A0%BC%E6%88%96%E5%BC%80%E5%80%92%E8%BD%A6%23) `660.8K 🔥` `NEW`
1. [避孕套要涨价了](https://s.weibo.com/weibo?q=%23%E9%81%BF%E5%AD%95%E5%A5%97%E8%A6%81%E6%B6%A8%E4%BB%B7%E4%BA%86%23) `590.8K 🔥` `NEW`
1. [挪用1700万女孩愿意坐牢换退款](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E7%94%A81700%E4%B8%87%E5%A5%B3%E5%AD%A9%E6%84%BF%E6%84%8F%E5%9D%90%E7%89%A2%E6%8D%A2%E9%80%80%E6%AC%BE%23) `544.4K 🔥` `NEW`
1. [谢娜演唱会成都加场来了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E6%88%90%E9%83%BD%E5%8A%A0%E5%9C%BA%E6%9D%A5%E4%BA%86%23) `538.6K 🔥` `NEW`
1. [火箭vs湖人 (Rockets vs Lakers)](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%ADvs%E6%B9%96%E4%BA%BA%23) `537.1K 🔥` `NEW`
1. [华晨宇喂猫吃巧克力蛋糕](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%96%82%E7%8C%AB%E5%90%83%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%9B%8B%E7%B3%95%23) `535.7K 🔥` `NEW`
1. [贺峻霖答辩](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%AD%94%E8%BE%A9%23) `533.3K 🔥` `NEW`
1. [14岁女生遭性侵KTV暂停营业](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%A5%B3%E7%94%9F%E9%81%AD%E6%80%A7%E4%BE%B5KTV%E6%9A%82%E5%81%9C%E8%90%A5%E4%B8%9A%23) `529.1K 🔥` `NEW`
1. [TF四代我们的少年时代2杀青照](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E6%9D%80%E9%9D%92%E7%85%A7%23) `527.6K 🔥` `NEW`
1. [文和友加入京东美食大赛](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%92%8C%E5%8F%8B%E5%8A%A0%E5%85%A5%E4%BA%AC%E4%B8%9C%E7%BE%8E%E9%A3%9F%E5%A4%A7%E8%B5%9B%23) `522.3K 🔥` `NEW`
1. [文班缺席G2剩余比赛](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E7%BC%BA%E5%B8%ADG2%E5%89%A9%E4%BD%99%E6%AF%94%E8%B5%9B%23) `519.1K 🔥` `NEW`
1. [库克卸任原因披露](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E5%8D%B8%E4%BB%BB%E5%8E%9F%E5%9B%A0%E6%8A%AB%E9%9C%B2%23) `516.6K 🔥` `NEW`
1. [颜颜凯凯](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E9%A2%9C%E5%87%AF%E5%87%AF%23) `513.2K 🔥` `NEW`
1. [王安宇见面会官宣](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A7%81%E9%9D%A2%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `505.1K 🔥` `NEW`
1. [吴敬平回应樊振东与英伟达创始人打球 (Wu Jingping responded to Fan Zhendong playing ball with the founder of NVIDIA)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%95%AC%E5%B9%B3%E5%9B%9E%E5%BA%94%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%8E%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%89%93%E7%90%83%23) `500.5K 🔥` `NEW`
1. [姜文女儿怀孕](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%96%87%E5%A5%B3%E5%84%BF%E6%80%80%E5%AD%95%23) `494.3K 🔥` `NEW`
1. [孙颖莎看起来很萌实际也很萌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9C%8B%E8%B5%B7%E6%9D%A5%E5%BE%88%E8%90%8C%E5%AE%9E%E9%99%85%E4%B9%9F%E5%BE%88%E8%90%8C%23) `492.1K 🔥` `NEW`
1. [开拓者vs马刺](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8B%93%E8%80%85vs%E9%A9%AC%E5%88%BA%23) `489.4K 🔥` `NEW`
1. [深圳茶颜悦色代购炒到每杯100元](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E8%8C%B6%E9%A2%9C%E6%82%A6%E8%89%B2%E4%BB%A3%E8%B4%AD%E7%82%92%E5%88%B0%E6%AF%8F%E6%9D%AF100%E5%85%83%23) `484.9K 🔥` `NEW`
1. [宋雨琦将继续缺席奔跑吧录制](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E5%B0%86%E7%BB%A7%E7%BB%AD%E7%BC%BA%E5%B8%AD%E5%A5%94%E8%B7%91%E5%90%A7%E5%BD%95%E5%88%B6%23) `481.3K 🔥` `NEW`
1. [苹果或被印度罚款380亿美元](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%88%96%E8%A2%AB%E5%8D%B0%E5%BA%A6%E7%BD%9A%E6%AC%BE380%E4%BA%BF%E7%BE%8E%E5%85%83%23) `476.1K 🔥` `NEW`
1. [全糖的写0脂 全脂的写0糖](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%B3%96%E7%9A%84%E5%86%990%E8%84%82%20%E5%85%A8%E8%84%82%E7%9A%84%E5%86%990%E7%B3%96%23) `471.2K 🔥` `NEW`
1. [马斯克600亿美元收购Cursor](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B600%E4%BA%BF%E7%BE%8E%E5%85%83%E6%94%B6%E8%B4%ADCursor%23) `466.4K 🔥` `NEW`
1. [挪用1700万女孩现实中舍不得买包](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E7%94%A81700%E4%B8%87%E5%A5%B3%E5%AD%A9%E7%8E%B0%E5%AE%9E%E4%B8%AD%E8%88%8D%E4%B8%8D%E5%BE%97%E4%B9%B0%E5%8C%85%23) `461.9K 🔥` `NEW`
1. [真人短剧被AI团灭了么 (Was the live-action short drama wiped out by the AI ​​team?)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E4%BA%BA%E7%9F%AD%E5%89%A7%E8%A2%ABAI%E5%9B%A2%E7%81%AD%E4%BA%86%E4%B9%88%23) `460.8K 🔥` `NEW`
1. [极氪回应何润东现身门店](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA%E5%9B%9E%E5%BA%94%E4%BD%95%E6%B6%A6%E4%B8%9C%E7%8E%B0%E8%BA%AB%E9%97%A8%E5%BA%97%23) `455.3K 🔥` `NEW`
1. [中国篮协发贺信祝贺王治郅](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%AF%AE%E5%8D%8F%E5%8F%91%E8%B4%BA%E4%BF%A1%E7%A5%9D%E8%B4%BA%E7%8E%8B%E6%B2%BB%E9%83%85%23) `452.7K 🔥` `NEW`
1. [合众每卖一辆车亏损超8万元](https://s.weibo.com/weibo?q=%23%E5%90%88%E4%BC%97%E6%AF%8F%E5%8D%96%E4%B8%80%E8%BE%86%E8%BD%A6%E4%BA%8F%E6%8D%9F%E8%B6%858%E4%B8%87%E5%85%83%23) `449.4K 🔥` `NEW`
1. [我咋没感觉到00后在整顿职场啊](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%92%8B%E6%B2%A1%E6%84%9F%E8%A7%89%E5%88%B000%E5%90%8E%E5%9C%A8%E6%95%B4%E9%A1%BF%E8%81%8C%E5%9C%BA%E5%95%8A%23) `446.1K 🔥` `NEW`
1. [谢依霖曝和杨幂郭碧婷见面不能化妆](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E4%BE%9D%E9%9C%96%E6%9B%9D%E5%92%8C%E6%9D%A8%E5%B9%82%E9%83%AD%E7%A2%A7%E5%A9%B7%E8%A7%81%E9%9D%A2%E4%B8%8D%E8%83%BD%E5%8C%96%E5%A6%86%23) `439.6K 🔥` `NEW`
1. [打赏1700万女生听闻长期服刑沉默](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%B5%8F1700%E4%B8%87%E5%A5%B3%E7%94%9F%E5%90%AC%E9%97%BB%E9%95%BF%E6%9C%9F%E6%9C%8D%E5%88%91%E6%B2%89%E9%BB%98%23) `436.2K 🔥` `NEW`
1. [张智霖听到袁咏仪说不买了的表情](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%BA%E9%9C%96%E5%90%AC%E5%88%B0%E8%A2%81%E5%92%8F%E4%BB%AA%E8%AF%B4%E4%B8%8D%E4%B9%B0%E4%BA%86%E7%9A%84%E8%A1%A8%E6%83%85%23) `430.8K 🔥` `NEW`
1. [中国新燃油旗舰全新瑞虎9上市](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E7%87%83%E6%B2%B9%E6%97%97%E8%88%B0%E5%85%A8%E6%96%B0%E7%91%9E%E8%99%8E9%E4%B8%8A%E5%B8%82%23) `604.8K 🔥` `+584%`
1. [女孩为何宁愿坐牢也不配合追回打赏](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B8%BA%E4%BD%95%E5%AE%81%E6%84%BF%E5%9D%90%E7%89%A2%E4%B9%9F%E4%B8%8D%E9%85%8D%E5%90%88%E8%BF%BD%E5%9B%9E%E6%89%93%E8%B5%8F%23) `507.5K 🔥` `+23%`
1. [虞书欣戛纳蓝色妖姬造型 (Yu Shuxin looks like a blue enchantress in Cannes)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%88%9B%E7%BA%B3%E8%93%9D%E8%89%B2%E5%A6%96%E5%A7%AC%E9%80%A0%E5%9E%8B%23) `502.4K 🔥` `+142%`
1. [泰国泼水节一少女遭士兵性侵](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82%E4%B8%80%E5%B0%91%E5%A5%B3%E9%81%AD%E5%A3%AB%E5%85%B5%E6%80%A7%E4%BE%B5%23) `487.7K 🔥` `+162%`
1. [乔布斯曾说绝不能让营销人员成为CEO (Steve Jobs once said that marketers should never be CEOs)](https://s.weibo.com/weibo?q=%23%E4%B9%94%E5%B8%83%E6%96%AF%E6%9B%BE%E8%AF%B4%E7%BB%9D%E4%B8%8D%E8%83%BD%E8%AE%A9%E8%90%A5%E9%94%80%E4%BA%BA%E5%91%98%E6%88%90%E4%B8%BACEO%23) `457.6K 🔥` `+130%`
1. [无畏宣传月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%AE%A3%E4%BC%A0%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `445.6K 🔥` `+300%`
1. [周杰伦认证邓紫棋改编的爱琴海 (Jay Chou certified Deng Ziqi's adaptation of Aegean Sea)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%AE%A4%E8%AF%81%E9%82%93%E7%B4%AB%E6%A3%8B%E6%94%B9%E7%BC%96%E7%9A%84%E7%88%B1%E7%90%B4%E6%B5%B7%23) `442.6K 🔥` `+170%`
1. [走丢男童父母送女孩终身免费牛排卡](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E4%B8%A2%E7%94%B7%E7%AB%A5%E7%88%B6%E6%AF%8D%E9%80%81%E5%A5%B3%E5%AD%A9%E7%BB%88%E8%BA%AB%E5%85%8D%E8%B4%B9%E7%89%9B%E6%8E%92%E5%8D%A1%23) `433.0K 🔥` `+98%`
1. [美伊停火延长至伊朗提方案并谈妥 (US-Iran ceasefire extended until Iran proposes and negotiates plan)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E5%BB%B6%E9%95%BF%E8%87%B3%E4%BC%8A%E6%9C%97%E6%8F%90%E6%96%B9%E6%A1%88%E5%B9%B6%E8%B0%88%E5%A6%A5%23) `497.1K 🔥`
1. [谢娜 没票的朋友们别着急 (Xie Na, friends who don’t have tickets, don’t worry.)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%20%E6%B2%A1%E7%A5%A8%E7%9A%84%E6%9C%8B%E5%8F%8B%E4%BB%AC%E5%88%AB%E7%9D%80%E6%80%A5%23) `479.5K 🔥`
1. [灵魂摆渡电影全AI生成 (Soul Ferry movie is fully AI-generated)](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%E7%94%B5%E5%BD%B1%E5%85%A8AI%E7%94%9F%E6%88%90%23) `523.3K 🔥` `-55%`
1. [哪吒造车3年烧掉183亿 (Nezha burned 18.3 billion in three years of building cars)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92%E9%80%A0%E8%BD%A63%E5%B9%B4%E7%83%A7%E6%8E%89183%E4%BA%BF%23) `468.9K 🔥` `-46%`

Updated at 2026-04-22 11:37:18

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
