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

1. [何宣林淘汰 (He Xuanlin was eliminated)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E6%B7%98%E6%B1%B0%23) `2.9M 🔥` `NEW`
1. [五公个喜](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E4%B8%AA%E5%96%9C%23) `1.1M 🔥` `NEW`
1. [2026端午档票房破2亿](https://s.weibo.com/weibo?q=%232026%E7%AB%AF%E5%8D%88%E6%A1%A3%E7%A5%A8%E6%88%BF%E7%A0%B42%E4%BA%BF%23) `1.0M 🔥` `NEW`
1. [Prada米兰男装秀](https://s.weibo.com/weibo?q=%23Prada%E7%B1%B3%E5%85%B0%E7%94%B7%E8%A3%85%E7%A7%80%23) `1.0M 🔥` `NEW`
1. [伊军方宣布关闭霍尔木兹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%86%9B%E6%96%B9%E5%AE%A3%E5%B8%83%E5%85%B3%E9%97%AD%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `1.0M 🔥` `NEW`
1. [EDG败决对阵LEV](https://s.weibo.com/weibo?q=%23EDG%E8%B4%A5%E5%86%B3%E5%AF%B9%E9%98%B5LEV%23) `1.0M 🔥` `NEW`
1. [田曦薇获奖感言用了3种语言](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%8E%B7%E5%A5%96%E6%84%9F%E8%A8%80%E7%94%A8%E4%BA%863%E7%A7%8D%E8%AF%AD%E8%A8%80%23) `992.2K 🔥` `NEW`
1. [原来这么多年牛肉都切错了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B9%B4%E7%89%9B%E8%82%89%E9%83%BD%E5%88%87%E9%94%99%E4%BA%86%23) `917.6K 🔥` `NEW`
1. [为啥瘦下来的人会变得高冷](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%95%A5%E7%98%A6%E4%B8%8B%E6%9D%A5%E7%9A%84%E4%BA%BA%E4%BC%9A%E5%8F%98%E5%BE%97%E9%AB%98%E5%86%B7%23) `766.3K 🔥` `NEW`
1. [明天将是中国球迷的主场](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%A4%A9%E5%B0%86%E6%98%AF%E4%B8%AD%E5%9B%BD%E7%90%83%E8%BF%B7%E7%9A%84%E4%B8%BB%E5%9C%BA%23) `690.3K 🔥` `NEW`
1. [浪姐总决赛 (Sister Lang Finals)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%23) `520.7K 🔥` `NEW`
1. [陈凯琳发文说没有遗憾了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%87%AF%E7%90%B3%E5%8F%91%E6%96%87%E8%AF%B4%E6%B2%A1%E6%9C%89%E9%81%97%E6%86%BE%E4%BA%86%23) `507.1K 🔥` `NEW`
1. [特朗普高市早苗当众吵起来了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%BD%93%E4%BC%97%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `486.1K 🔥` `NEW`
1. [李小冉婚纱 美得好夸张](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%A9%9A%E7%BA%B1%20%E7%BE%8E%E5%BE%97%E5%A5%BD%E5%A4%B8%E5%BC%A0%23) `428.1K 🔥` `NEW`
1. [曾沛慈看到何宣林淘汰的表情](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9C%8B%E5%88%B0%E4%BD%95%E5%AE%A3%E6%9E%97%E6%B7%98%E6%B1%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `419.2K 🔥` `NEW`
1. [确诊了味精症候群](https://s.weibo.com/weibo?q=%23%E7%A1%AE%E8%AF%8A%E4%BA%86%E5%91%B3%E7%B2%BE%E7%97%87%E5%80%99%E7%BE%A4%23) `347.9K 🔥` `NEW`
1. [万千惠淘汰](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E6%B7%98%E6%B1%B0%23) `347.8K 🔥` `NEW`
1. [经销商说iPhone涨价猛销量必腰折](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E9%94%80%E5%95%86%E8%AF%B4iPhone%E6%B6%A8%E4%BB%B7%E7%8C%9B%E9%94%80%E9%87%8F%E5%BF%85%E8%85%B0%E6%8A%98%23) `347.5K 🔥` `NEW`
1. [金价下跌买30克镯子差价有一万多](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C%E4%B9%B030%E5%85%8B%E9%95%AF%E5%AD%90%E5%B7%AE%E4%BB%B7%E6%9C%89%E4%B8%80%E4%B8%87%E5%A4%9A%23) `347.4K 🔥` `NEW`
1. [C罗大儿子快两米高了](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%A4%A7%E5%84%BF%E5%AD%90%E5%BF%AB%E4%B8%A4%E7%B1%B3%E9%AB%98%E4%BA%86%23) `347.3K 🔥` `NEW`
1. [孙杨逆转局势重回第一 (Sun Yang reverses the situation and returns to first place)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E9%80%86%E8%BD%AC%E5%B1%80%E5%8A%BF%E9%87%8D%E5%9B%9E%E7%AC%AC%E4%B8%80%23) `347.0K 🔥` `NEW`
1. [曝徐艺洋在美国生的孩子](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9C%A8%E7%BE%8E%E5%9B%BD%E7%94%9F%E7%9A%84%E5%AD%A9%E5%AD%90%23) `346.7K 🔥` `NEW`
1. [醉驾致1死2伤全责变主责需释疑](https://s.weibo.com/weibo?q=%23%E9%86%89%E9%A9%BE%E8%87%B41%E6%AD%BB2%E4%BC%A4%E5%85%A8%E8%B4%A3%E5%8F%98%E4%B8%BB%E8%B4%A3%E9%9C%80%E9%87%8A%E7%96%91%23) `346.5K 🔥` `NEW`
1. [曾沛慈庄法 神级舞台](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%BA%84%E6%B3%95%20%E7%A5%9E%E7%BA%A7%E8%88%9E%E5%8F%B0%23) `346.5K 🔥` `NEW`
1. [安崎个喜11](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E4%B8%AA%E5%96%9C11%23) `346.2K 🔥` `NEW`
1. [苹果相册乱起名字](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E7%9B%B8%E5%86%8C%E4%B9%B1%E8%B5%B7%E5%90%8D%E5%AD%97%23) `346.0K 🔥` `NEW`
1. [浪姐淘汰了两个ACE](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%B7%98%E6%B1%B0%E4%BA%86%E4%B8%A4%E4%B8%AAACE%23) `345.7K 🔥` `NEW`
1. [窦靖童纹身没遮](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E7%BA%B9%E8%BA%AB%E6%B2%A1%E9%81%AE%23) `345.7K 🔥` `NEW`
1. [马斯克暴赚7800亿](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%9A%B4%E8%B5%9A7800%E4%BA%BF%23) `345.4K 🔥` `NEW`
1. [孟佳跳起来为曾沛慈鼓掌](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E4%BD%B3%E8%B7%B3%E8%B5%B7%E6%9D%A5%E4%B8%BA%E6%9B%BE%E6%B2%9B%E6%85%88%E9%BC%93%E6%8E%8C%23) `345.2K 🔥` `NEW`
1. [DeepSeek估值接近4000亿元 (DeepSeek’s valuation approaches 400 billion yuan)](https://s.weibo.com/weibo?q=%23DeepSeek%E4%BC%B0%E5%80%BC%E6%8E%A5%E8%BF%914000%E4%BA%BF%E5%85%83%23) `345.0K 🔥` `NEW`
1. [侯明昊 和颂](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%20%E5%92%8C%E9%A2%82%23) `344.9K 🔥` `NEW`
1. [唐艺昕五公长文](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E4%BA%94%E5%85%AC%E9%95%BF%E6%96%87%23) `344.7K 🔥` `NEW`
1. [国际乒联认证樊振东传奇](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E4%B9%92%E8%81%94%E8%AE%A4%E8%AF%81%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%BC%A0%E5%A5%87%23) `344.4K 🔥` `NEW`
1. [浪姐淘汰 好突然](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%B7%98%E6%B1%B0%20%E5%A5%BD%E7%AA%81%E7%84%B6%23) `344.1K 🔥` `NEW`
1. [江语晨 留下](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%20%E7%95%99%E4%B8%8B%23) `344.0K 🔥` `NEW`
1. [伊朗要求船只勿靠近霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A6%81%E6%B1%82%E8%88%B9%E5%8F%AA%E5%8B%BF%E9%9D%A0%E8%BF%91%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `343.8K 🔥` `NEW`
1. [单依纯唱好想谈恋爱](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%94%B1%E5%A5%BD%E6%83%B3%E8%B0%88%E6%81%8B%E7%88%B1%23) `343.7K 🔥` `NEW`
1. [看问心2哭懵了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E9%97%AE%E5%BF%832%E5%93%AD%E6%87%B5%E4%BA%86%23) `337.4K 🔥` `NEW`
1. [王源唱粉丝写给他的歌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%94%B1%E7%B2%89%E4%B8%9D%E5%86%99%E7%BB%99%E4%BB%96%E7%9A%84%E6%AD%8C%23) `335.8K 🔥` `NEW`
1. [美国缺电了 (America is short of electricity)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%BC%BA%E7%94%B5%E4%BA%86%23) `334.9K 🔥` `NEW`
1. [杨采钰回应没有婚礼满月酒](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E9%87%87%E9%92%B0%E5%9B%9E%E5%BA%94%E6%B2%A1%E6%9C%89%E5%A9%9A%E7%A4%BC%E6%BB%A1%E6%9C%88%E9%85%92%23) `334.7K 🔥` `NEW`
1. [给阿嬷的情书海外爆火](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E6%B5%B7%E5%A4%96%E7%88%86%E7%81%AB%23) `327.5K 🔥` `NEW`
1. [孙杨 游泳怪物](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E6%B8%B8%E6%B3%B3%E6%80%AA%E7%89%A9%23) `327.1K 🔥` `NEW`
1. [申惠善视后](https://s.weibo.com/weibo?q=%23%E7%94%B3%E6%83%A0%E5%96%84%E8%A7%86%E5%90%8E%23) `327.0K 🔥` `NEW`
1. [宋威龙出场帅我一跟头](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%87%BA%E5%9C%BA%E5%B8%85%E6%88%91%E4%B8%80%E8%B7%9F%E5%A4%B4%23) `321.3K 🔥` `NEW`
1. [中国女排1比3巴西女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%921%E6%AF%943%E5%B7%B4%E8%A5%BF%E5%A5%B3%E6%8E%92%23) `319.0K 🔥` `NEW`
1. [中国女排vs巴西女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E5%B7%B4%E8%A5%BF%E5%A5%B3%E6%8E%92%23) `318.5K 🔥` `NEW`
1. [环境真的能迅速同化一个人](https://s.weibo.com/weibo?q=%23%E7%8E%AF%E5%A2%83%E7%9C%9F%E7%9A%84%E8%83%BD%E8%BF%85%E9%80%9F%E5%90%8C%E5%8C%96%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `318.2K 🔥` `NEW`
1. [田曦薇到了韩国也不忘小猫比心](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%88%B0%E4%BA%86%E9%9F%A9%E5%9B%BD%E4%B9%9F%E4%B8%8D%E5%BF%98%E5%B0%8F%E7%8C%AB%E6%AF%94%E5%BF%83%23) `318.1K 🔥` `NEW`
1. [金店称不可能回到金价700多元 (Gold stores say it is impossible for gold prices to return to more than 700 yuan)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%BA%97%E7%A7%B0%E4%B8%8D%E5%8F%AF%E8%83%BD%E5%9B%9E%E5%88%B0%E9%87%91%E4%BB%B7700%E5%A4%9A%E5%85%83%23) `293.5K 🔥` `NEW`

Updated at 2026-06-21 00:04:25

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
