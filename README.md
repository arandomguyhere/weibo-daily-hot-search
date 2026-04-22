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

1. [41岁詹姆斯折叠背扣 (41-year-old James folding back buckle)](https://s.weibo.com/weibo?q=%2341%E5%B2%81%E8%A9%B9%E5%A7%86%E6%96%AF%E6%8A%98%E5%8F%A0%E8%83%8C%E6%89%A3%23) `1.1M 🔥` `NEW`
1. [中国大蒜竟被列为国家安全威胁](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%A7%E8%92%9C%E7%AB%9F%E8%A2%AB%E5%88%97%E4%B8%BA%E5%9B%BD%E5%AE%B6%E5%AE%89%E5%85%A8%E5%A8%81%E8%83%81%23) `807.4K 🔥` `NEW`
1. [在繁花盛放的春天接英雄回家](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E7%B9%81%E8%8A%B1%E7%9B%9B%E6%94%BE%E7%9A%84%E6%98%A5%E5%A4%A9%E6%8E%A5%E8%8B%B1%E9%9B%84%E5%9B%9E%E5%AE%B6%23) `803.5K 🔥` `NEW`
1. [王安宇见面会票价](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A7%81%E9%9D%A2%E4%BC%9A%E7%A5%A8%E4%BB%B7%23) `803.5K 🔥` `NEW`
1. [星巴克免费咖啡](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%E5%85%8D%E8%B4%B9%E5%92%96%E5%95%A1%23) `803.5K 🔥` `NEW`
1. [乘风2026三公帮唱](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%89%E5%85%AC%E5%B8%AE%E5%94%B1%23) `803.5K 🔥` `NEW`
1. [湖人2比0火箭](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA2%E6%AF%940%E7%81%AB%E7%AE%AD%23) `398.8K 🔥` `NEW`
1. [统一是台湾的唯一前途](https://s.weibo.com/weibo?q=%23%E7%BB%9F%E4%B8%80%E6%98%AF%E5%8F%B0%E6%B9%BE%E7%9A%84%E5%94%AF%E4%B8%80%E5%89%8D%E9%80%94%23) `398.6K 🔥` `NEW`
1. [王大陆和女友获刑6个月](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A7%E9%99%86%E5%92%8C%E5%A5%B3%E5%8F%8B%E8%8E%B7%E5%88%916%E4%B8%AA%E6%9C%88%23) `398.5K 🔥` `NEW`
1. [断绝孩子手机上瘾最快的方法](https://s.weibo.com/weibo?q=%23%E6%96%AD%E7%BB%9D%E5%AD%A9%E5%AD%90%E6%89%8B%E6%9C%BA%E4%B8%8A%E7%98%BE%E6%9C%80%E5%BF%AB%E7%9A%84%E6%96%B9%E6%B3%95%23) `398.1K 🔥` `NEW`
1. [压力大的可以看看拼多多法务部 (If you are under great pressure, you can check out Pinduoduo’s Legal Department.)](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%8A%9B%E5%A4%A7%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%9C%8B%E7%9C%8B%E6%8B%BC%E5%A4%9A%E5%A4%9A%E6%B3%95%E5%8A%A1%E9%83%A8%23) `397.8K 🔥` `NEW`
1. [GUCCI田曦薇张凌赫大片](https://s.weibo.com/weibo?q=%23GUCCI%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%A7%E7%89%87%23) `397.7K 🔥` `NEW`
1. [女孩挪用1700万打赏曾阻止会计上报](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A81700%E4%B8%87%E6%89%93%E8%B5%8F%E6%9B%BE%E9%98%BB%E6%AD%A2%E4%BC%9A%E8%AE%A1%E4%B8%8A%E6%8A%A5%23) `363.2K 🔥` `NEW`
1. [102岁老人出殡群鸟盘旋](https://s.weibo.com/weibo?q=%23102%E5%B2%81%E8%80%81%E4%BA%BA%E5%87%BA%E6%AE%A1%E7%BE%A4%E9%B8%9F%E7%9B%98%E6%97%8B%23) `357.1K 🔥` `NEW`
1. [孙杨吃张豆豆剩下的汉堡](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%90%83%E5%BC%A0%E8%B1%86%E8%B1%86%E5%89%A9%E4%B8%8B%E7%9A%84%E6%B1%89%E5%A0%A1%23) `341.3K 🔥` `NEW`
1. [迅猛龙回应付费直播](https://s.weibo.com/weibo?q=%23%E8%BF%85%E7%8C%9B%E9%BE%99%E5%9B%9E%E5%BA%94%E4%BB%98%E8%B4%B9%E7%9B%B4%E6%92%AD%23) `338.3K 🔥` `NEW`
1. [曹德旺说大不了把美国工厂关掉](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E5%BE%B7%E6%97%BA%E8%AF%B4%E5%A4%A7%E4%B8%8D%E4%BA%86%E6%8A%8A%E7%BE%8E%E5%9B%BD%E5%B7%A5%E5%8E%82%E5%85%B3%E6%8E%89%23) `334.1K 🔥` `NEW`
1. [张凌赫凌探未来定档](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%8C%E6%8E%A2%E6%9C%AA%E6%9D%A5%E5%AE%9A%E6%A1%A3%23) `332.1K 🔥` `NEW`
1. [原神](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `330.0K 🔥` `NEW`
1. [山城小栗旬老婆被前任骗钱后瘦80多斤](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%9F%8E%E5%B0%8F%E6%A0%97%E6%97%AC%E8%80%81%E5%A9%86%E8%A2%AB%E5%89%8D%E4%BB%BB%E9%AA%97%E9%92%B1%E5%90%8E%E7%98%A680%E5%A4%9A%E6%96%A4%23) `327.8K 🔥` `NEW`
1. [快五十岁的妈妈因为工作哭了 (My almost fifty-year-old mother cried because of her work)](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E4%BA%94%E5%8D%81%E5%B2%81%E7%9A%84%E5%A6%88%E5%A6%88%E5%9B%A0%E4%B8%BA%E5%B7%A5%E4%BD%9C%E5%93%AD%E4%BA%86%23) `325.9K 🔥` `NEW`
1. [段奕宏参加烈士遗骸迎回仪式](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E5%A5%95%E5%AE%8F%E5%8F%82%E5%8A%A0%E7%83%88%E5%A3%AB%E9%81%97%E9%AA%B8%E8%BF%8E%E5%9B%9E%E4%BB%AA%E5%BC%8F%23) `323.8K 🔥` `NEW`
1. [避孕套涨价原因](https://s.weibo.com/weibo?q=%23%E9%81%BF%E5%AD%95%E5%A5%97%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `320.2K 🔥` `NEW`
1. [iPhone18Pro相机盖板曝光](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%9B%B8%E6%9C%BA%E7%9B%96%E6%9D%BF%E6%9B%9D%E5%85%89%23) `316.5K 🔥` `NEW`
1. [宁德时代高管称电池超750kg不科学](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E9%AB%98%E7%AE%A1%E7%A7%B0%E7%94%B5%E6%B1%A0%E8%B6%85750kg%E4%B8%8D%E7%A7%91%E5%AD%A6%23) `315.4K 🔥` `NEW`
1. [骨头被细菌吃掉大块花30万没治好](https://s.weibo.com/weibo?q=%23%E9%AA%A8%E5%A4%B4%E8%A2%AB%E7%BB%86%E8%8F%8C%E5%90%83%E6%8E%89%E5%A4%A7%E5%9D%97%E8%8A%B130%E4%B8%87%E6%B2%A1%E6%B2%BB%E5%A5%BD%23) `312.5K 🔥` `NEW`
1. [14岁女孩初次痛经查出双子宫双阴道](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%88%9D%E6%AC%A1%E7%97%9B%E7%BB%8F%E6%9F%A5%E5%87%BA%E5%8F%8C%E5%AD%90%E5%AE%AB%E5%8F%8C%E9%98%B4%E9%81%93%23) `311.7K 🔥` `NEW`
1. [生了7个娃还想再生的男子称养得起](https://s.weibo.com/weibo?q=%23%E7%94%9F%E4%BA%867%E4%B8%AA%E5%A8%83%E8%BF%98%E6%83%B3%E5%86%8D%E7%94%9F%E7%9A%84%E7%94%B7%E5%AD%90%E7%A7%B0%E5%85%BB%E5%BE%97%E8%B5%B7%23) `311.0K 🔥` `NEW`
1. [中国卫星大跌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8D%AB%E6%98%9F%E5%A4%A7%E8%B7%8C%23) `309.7K 🔥` `NEW`
1. [GPT Image2 太牛了](https://s.weibo.com/weibo?q=%23GPT%20Image2%20%E5%A4%AA%E7%89%9B%E4%BA%86%23) `306.5K 🔥` `NEW`
1. [挑战者杯定妆照 (Challenger Cup makeup photos)](https://s.weibo.com/weibo?q=%23%E6%8C%91%E6%88%98%E8%80%85%E6%9D%AF%E5%AE%9A%E5%A6%86%E7%85%A7%23) `304.1K 🔥` `NEW`
1. [黎明前他会归来杀青](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E6%98%8E%E5%89%8D%E4%BB%96%E4%BC%9A%E5%BD%92%E6%9D%A5%E6%9D%80%E9%9D%92%23) `301.8K 🔥` `NEW`
1. [贺峻霖是去答辩还是去结婚的](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E6%98%AF%E5%8E%BB%E7%AD%94%E8%BE%A9%E8%BF%98%E6%98%AF%E5%8E%BB%E7%BB%93%E5%A9%9A%E7%9A%84%23) `300.7K 🔥` `NEW`
1. [还好戴着它 (Good thing I'm wearing it)](https://s.weibo.com/weibo?q=%23%E8%BF%98%E5%A5%BD%E6%88%B4%E7%9D%80%E5%AE%83%23) `803.5K 🔥` `+77%`
1. [荣威火山联手合作家越AI汽车 (Roewe Volcano joins hands with Jiayue AI Automobile)](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E5%A8%81%E7%81%AB%E5%B1%B1%E8%81%94%E6%89%8B%E5%90%88%E4%BD%9C%E5%AE%B6%E8%B6%8AAI%E6%B1%BD%E8%BD%A6%23) `793.3K 🔥` `+96%`
1. [全糖的写0脂 全脂的写0糖](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%B3%96%E7%9A%84%E5%86%990%E8%84%82%20%E5%85%A8%E8%84%82%E7%9A%84%E5%86%990%E7%B3%96%23) `657.9K 🔥` `+40%`
1. [谢依霖曝和杨幂郭碧婷见面不能化妆](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E4%BE%9D%E9%9C%96%E6%9B%9D%E5%92%8C%E6%9D%A8%E5%B9%82%E9%83%AD%E7%A2%A7%E5%A9%B7%E8%A7%81%E9%9D%A2%E4%B8%8D%E8%83%BD%E5%8C%96%E5%A6%86%23) `397.0K 🔥`
1. [火箭vs湖人 (Rockets vs Lakers)](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%ADvs%E6%B9%96%E4%BA%BA%23) `423.6K 🔥` `-21%`
1. [华晨宇喂猫吃巧克力蛋糕](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%96%82%E7%8C%AB%E5%90%83%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%9B%8B%E7%B3%95%23) `398.2K 🔥` `-26%`
1. [虞书欣戛纳第二套造型](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%88%9B%E7%BA%B3%E7%AC%AC%E4%BA%8C%E5%A5%97%E9%80%A0%E5%9E%8B%23) `397.4K 🔥` `-41%`
1. [挪用1700万女孩愿意坐牢换退款](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E7%94%A81700%E4%B8%87%E5%A5%B3%E5%AD%A9%E6%84%BF%E6%84%8F%E5%9D%90%E7%89%A2%E6%8D%A2%E9%80%80%E6%AC%BE%23) `397.1K 🔥` `-27%`
1. [伊朗抓住了美国的要害](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8A%93%E4%BD%8F%E4%BA%86%E7%BE%8E%E5%9B%BD%E7%9A%84%E8%A6%81%E5%AE%B3%23) `363.9K 🔥` `-46%`
1. [贺峻霖答辩](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%AD%94%E8%BE%A9%23) `355.0K 🔥` `-33%`
1. [哪吒汽车创始人已成老赖 (The founder of Nezha Automobile has become an old man)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92%E6%B1%BD%E8%BD%A6%E5%88%9B%E5%A7%8B%E4%BA%BA%E5%B7%B2%E6%88%90%E8%80%81%E8%B5%96%23) `352.4K 🔥` `-69%`
1. [吴敬平回应樊振东与英伟达创始人打球 (Wu Jingping responded to Fan Zhendong playing ball with the founder of NVIDIA)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%95%AC%E5%B9%B3%E5%9B%9E%E5%BA%94%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%8E%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%89%93%E7%90%83%23) `330.4K 🔥` `-34%`
1. [谢娜演唱会成都加场来了 (Xie Na's concert is coming to Chengdu)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E6%88%90%E9%83%BD%E5%8A%A0%E5%9C%BA%E6%9D%A5%E4%BA%86%23) `317.9K 🔥` `-41%`
1. [王安宇见面会官宣](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A7%81%E9%9D%A2%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `310.2K 🔥` `-39%`
1. [虞书欣戛纳蓝色妖姬造型 (Yu Shuxin looks like a blue enchantress in Cannes)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%88%9B%E7%BA%B3%E8%93%9D%E8%89%B2%E5%A6%96%E5%A7%AC%E9%80%A0%E5%9E%8B%23) `307.8K 🔥` `-39%`
1. [姜文女儿怀孕](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%96%87%E5%A5%B3%E5%84%BF%E6%80%80%E5%AD%95%23) `307.3K 🔥` `-38%`
1. [TF四代我们的少年时代2杀青照](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E6%9D%80%E9%9D%92%E7%85%A7%23) `304.9K 🔥` `-42%`
1. [孙颖莎看起来很萌实际也很萌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9C%8B%E8%B5%B7%E6%9D%A5%E5%BE%88%E8%90%8C%E5%AE%9E%E9%99%85%E4%B9%9F%E5%BE%88%E8%90%8C%23) `303.4K 🔥` `-38%`

Updated at 2026-04-22 13:51:10

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
