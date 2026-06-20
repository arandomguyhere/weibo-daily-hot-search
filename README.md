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

1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `167.5K 🔥` `NEW`
1. [曾敬骅视帝](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%95%AC%E9%AA%85%E8%A7%86%E5%B8%9D%23) `166.9K 🔥` `NEW`
1. [马宁担任英格兰vs加纳四官](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E6%8B%85%E4%BB%BB%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E5%8A%A0%E7%BA%B3%E5%9B%9B%E5%AE%98%23) `95.6K 🔥` `NEW`
1. [荷兰开场5分钟进球](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%80%E5%9C%BA5%E5%88%86%E9%92%9F%E8%BF%9B%E7%90%83%23) `92.3K 🔥` `NEW`
1. [EDG不敌LEV](https://s.weibo.com/weibo?q=%23EDG%E4%B8%8D%E6%95%8CLEV%23) `82.9K 🔥` `NEW`
1. [荷兰连进4球](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E8%BF%9E%E8%BF%9B4%E7%90%83%23) `82.4K 🔥` `NEW`
1. [张月给陈瑶戴珍珠项链](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E7%BB%99%E9%99%88%E7%91%B6%E6%88%B4%E7%8F%8D%E7%8F%A0%E9%A1%B9%E9%93%BE%23) `55.3K 🔥` `NEW`
1. [重庆狼队赛季首胜](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E7%8B%BC%E9%98%9F%E8%B5%9B%E5%AD%A3%E9%A6%96%E8%83%9C%23) `52.4K 🔥` `NEW`
1. [荷兰vs瑞典](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0vs%E7%91%9E%E5%85%B8%23) `367.8K 🔥`
1. [原来这么多年牛肉都切错了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B9%B4%E7%89%9B%E8%82%89%E9%83%BD%E5%88%87%E9%94%99%E4%BA%86%23) `477.2K 🔥` `-39%`
1. [端午文旅消费升温 (Cultural tourism consumption heats up during Dragon Boat Festival)](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E6%96%87%E6%97%85%E6%B6%88%E8%B4%B9%E5%8D%87%E6%B8%A9%23) `339.9K 🔥` `-55%`
1. [Prada米兰男装秀 (Prada Milan menswear show)](https://s.weibo.com/weibo?q=%23Prada%E7%B1%B3%E5%85%B0%E7%94%B7%E8%A3%85%E7%A7%80%23) `338.7K 🔥` `-67%`
1. [曾沛慈看到何宣林淘汰的表情](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9C%8B%E5%88%B0%E4%BD%95%E5%AE%A3%E6%9E%97%E6%B7%98%E6%B1%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `328.2K 🔥` `-56%`
1. [浪姐总决赛 (Sister Lang Finals)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%23) `254.9K 🔥` `-76%`
1. [浪姐总决赛晋级名单](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%E6%99%8B%E7%BA%A7%E5%90%8D%E5%8D%95%23) `242.8K 🔥` `-64%`
1. [特朗普高市早苗当众吵起来了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%BD%93%E4%BC%97%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `238.2K 🔥` `-52%`
1. [田曦薇获奖感言用了3种语言](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%8E%B7%E5%A5%96%E6%84%9F%E8%A8%80%E7%94%A8%E4%BA%863%E7%A7%8D%E8%AF%AD%E8%A8%80%23) `194.9K 🔥` `-45%`
1. [伊军方宣布关闭霍尔木兹 (Iraqi military announces closure of Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%86%9B%E6%96%B9%E5%AE%A3%E5%B8%83%E5%85%B3%E9%97%AD%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `167.0K 🔥` `-53%`
1. [申惠善视后](https://s.weibo.com/weibo?q=%23%E7%94%B3%E6%83%A0%E5%96%84%E8%A7%86%E5%90%8E%23) `167.0K 🔥` `-64%`
1. [陈凯琳发文说没有遗憾了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%87%AF%E7%90%B3%E5%8F%91%E6%96%87%E8%AF%B4%E6%B2%A1%E6%9C%89%E9%81%97%E6%86%BE%E4%BA%86%23) `153.5K 🔥` `-54%`
1. [唐艺昕五公长文](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E4%BA%94%E5%85%AC%E9%95%BF%E6%96%87%23) `133.2K 🔥` `-60%`
1. [徐梦洁个喜17](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E4%B8%AA%E5%96%9C17%23) `131.6K 🔥` `-56%`
1. [王濛和万千惠说对不起](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%92%8C%E4%B8%87%E5%8D%83%E6%83%A0%E8%AF%B4%E5%AF%B9%E4%B8%8D%E8%B5%B7%23) `129.2K 🔥` `-54%`
1. [布罗比梅开二度 (Brobbie scored twice)](https://s.weibo.com/weibo?q=%23%E5%B8%83%E7%BD%97%E6%AF%94%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `128.4K 🔥` `-36%`
1. [EDG告别伦敦大师赛](https://s.weibo.com/weibo?q=%23EDG%E5%91%8A%E5%88%AB%E4%BC%A6%E6%95%A6%E5%A4%A7%E5%B8%88%E8%B5%9B%23) `117.9K 🔥` `-72%`
1. [为啥瘦下来的人会变得高冷](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%95%A5%E7%98%A6%E4%B8%8B%E6%9D%A5%E7%9A%84%E4%BA%BA%E4%BC%9A%E5%8F%98%E5%BE%97%E9%AB%98%E5%86%B7%23) `100.4K 🔥` `-52%`
1. [马斯克暴赚7800亿](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%9A%B4%E8%B5%9A7800%E4%BA%BF%23) `99.0K 🔥` `-51%`
1. [李小冉婚纱 美得好夸张](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%A9%9A%E7%BA%B1%20%E7%BE%8E%E5%BE%97%E5%A5%BD%E5%A4%B8%E5%BC%A0%23) `98.8K 🔥` `-62%`
1. [安崎 酱油醋我们保住了](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%20%E9%85%B1%E6%B2%B9%E9%86%8B%E6%88%91%E4%BB%AC%E4%BF%9D%E4%BD%8F%E4%BA%86%23) `97.7K 🔥` `-26%`
1. [明天将是中国球迷的主场](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%A4%A9%E5%B0%86%E6%98%AF%E4%B8%AD%E5%9B%BD%E7%90%83%E8%BF%B7%E7%9A%84%E4%B8%BB%E5%9C%BA%23) `95.7K 🔥` `-52%`
1. [马宁哽咽说只要中国足球需要就全力以赴 (Ma Ning choked up and said he would go all out as long as Chinese football needs it)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E5%93%BD%E5%92%BD%E8%AF%B4%E5%8F%AA%E8%A6%81%E4%B8%AD%E5%9B%BD%E8%B6%B3%E7%90%83%E9%9C%80%E8%A6%81%E5%B0%B1%E5%85%A8%E5%8A%9B%E4%BB%A5%E8%B5%B4%23) `92.4K 🔥` `-26%`
1. [安崎个喜11](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E4%B8%AA%E5%96%9C11%23) `92.1K 🔥` `-52%`
1. [环境真的能迅速同化一个人](https://s.weibo.com/weibo?q=%23%E7%8E%AF%E5%A2%83%E7%9C%9F%E7%9A%84%E8%83%BD%E8%BF%85%E9%80%9F%E5%90%8C%E5%8C%96%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `92.0K 🔥` `-31%`
1. [五公个喜](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E4%B8%AA%E5%96%9C%23) `88.8K 🔥` `-55%`
1. [曾沛慈庄法 神级舞台 (Zeng Pei Cizhuang Dharma Divine Stage)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%BA%84%E6%B3%95%20%E7%A5%9E%E7%BA%A7%E8%88%9E%E5%8F%B0%23) `81.7K 🔥` `-59%`
1. [何宣林淘汰 (He Xuanlin was eliminated)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E6%B7%98%E6%B1%B0%23) `74.5K 🔥` `-62%`
1. [确诊了味精症候群](https://s.weibo.com/weibo?q=%23%E7%A1%AE%E8%AF%8A%E4%BA%86%E5%91%B3%E7%B2%BE%E7%97%87%E5%80%99%E7%BE%A4%23) `71.3K 🔥` `-55%`
1. [C罗大儿子快两米高了](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%A4%A7%E5%84%BF%E5%AD%90%E5%BF%AB%E4%B8%A4%E7%B1%B3%E9%AB%98%E4%BA%86%23) `65.2K 🔥` `-51%`
1. [王濛回复陈凯琳](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9B%9E%E5%A4%8D%E9%99%88%E5%87%AF%E7%90%B3%23) `59.7K 🔥` `-55%`
1. [苹果相册乱起名字](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E7%9B%B8%E5%86%8C%E4%B9%B1%E8%B5%B7%E5%90%8D%E5%AD%97%23) `59.5K 🔥` `-53%`
1. [单依纯唱好想谈恋爱](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%94%B1%E5%A5%BD%E6%83%B3%E8%B0%88%E6%81%8B%E7%88%B1%23) `58.6K 🔥` `-53%`
1. [浪姐淘汰了两个ACE (Sister Lang eliminated two ACEs)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%B7%98%E6%B1%B0%E4%BA%86%E4%B8%A4%E4%B8%AAACE%23) `58.2K 🔥` `-63%`
1. [孟佳跳起来为曾沛慈鼓掌](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E4%BD%B3%E8%B7%B3%E8%B5%B7%E6%9D%A5%E4%B8%BA%E6%9B%BE%E6%B2%9B%E6%85%88%E9%BC%93%E6%8E%8C%23) `56.8K 🔥` `-57%`
1. [万千惠淘汰](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E6%B7%98%E6%B1%B0%23) `56.4K 🔥` `-57%`
1. [白鹿丞磊合唱遇到太甜了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%9E%E7%A3%8A%E5%90%88%E5%94%B1%E9%81%87%E5%88%B0%E5%A4%AA%E7%94%9C%E4%BA%86%23) `52.4K 🔥` `-58%`
1. [孙杨 游泳怪物](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E6%B8%B8%E6%B3%B3%E6%80%AA%E7%89%A9%23) `52.4K 🔥` `-61%`
1. [金价下跌买30克镯子差价有一万多 (The price of gold fell and the price difference when buying a 30g bracelet was more than RMB 10,000)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C%E4%B9%B030%E5%85%8B%E9%95%AF%E5%AD%90%E5%B7%AE%E4%BB%B7%E6%9C%89%E4%B8%80%E4%B8%87%E5%A4%9A%23) `52.4K 🔥` `-58%`
1. [王源唱粉丝写给他的歌 (Wang Yuan sings songs written by fans)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%94%B1%E7%B2%89%E4%B8%9D%E5%86%99%E7%BB%99%E4%BB%96%E7%9A%84%E6%AD%8C%23) `52.4K 🔥` `-58%`
1. [网友求助糯米洒身刺痛](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%B1%82%E5%8A%A9%E7%B3%AF%E7%B1%B3%E6%B4%92%E8%BA%AB%E5%88%BA%E7%97%9B%23) `52.4K 🔥` `-58%`
1. [EDG败决对阵LEV](https://s.weibo.com/weibo?q=%23EDG%E8%B4%A5%E5%86%B3%E5%AF%B9%E9%98%B5LEV%23) `52.4K 🔥` `-61%`
1. [给阿嬷的情书海外爆火](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E6%B5%B7%E5%A4%96%E7%88%86%E7%81%AB%23) `52.4K 🔥` `-58%`

Updated at 2026-06-21 03:01:01

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
