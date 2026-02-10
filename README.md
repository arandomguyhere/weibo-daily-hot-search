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

1. [提供无人机破解服务是犯罪 (Providing drone cracking services is a crime)](https://s.weibo.com/weibo?q=%23%E6%8F%90%E4%BE%9B%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%A0%B4%E8%A7%A3%E6%9C%8D%E5%8A%A1%E6%98%AF%E7%8A%AF%E7%BD%AA%23) `614.8K 🔥` `NEW`
1. [李现喊你上淘宝闪购点年味](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%96%8A%E4%BD%A0%E4%B8%8A%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E7%82%B9%E5%B9%B4%E5%91%B3%23) `584.0K 🔥` `NEW`
1. [洪世贤掉到榜二了](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E4%B8%96%E8%B4%A4%E6%8E%89%E5%88%B0%E6%A6%9C%E4%BA%8C%E4%BA%86%23) `468.2K 🔥` `NEW`
1. [王濛的金牌DNA动了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%9A%84%E9%87%91%E7%89%8CDNA%E5%8A%A8%E4%BA%86%23) `263.0K 🔥` `NEW`
1. [女子短道速滑500米预赛](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91500%E7%B1%B3%E9%A2%84%E8%B5%9B%23) `246.5K 🔥` `NEW`
1. [瑞幸回应杯套出现错别字](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%9B%9E%E5%BA%94%E6%9D%AF%E5%A5%97%E5%87%BA%E7%8E%B0%E9%94%99%E5%88%AB%E5%AD%97%23) `234.4K 🔥` `NEW`
1. [两京十五日](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%23) `220.2K 🔥` `NEW`
1. [举杯青岛福气倾倒](https://s.weibo.com/weibo?q=%23%E4%B8%BE%E6%9D%AF%E9%9D%92%E5%B2%9B%E7%A6%8F%E6%B0%94%E5%80%BE%E5%80%92%23) `180.2K 🔥` `NEW`
1. [平均每天倒闭7家绝味鸭脖撑不住了](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%9D%87%E6%AF%8F%E5%A4%A9%E5%80%92%E9%97%AD7%E5%AE%B6%E7%BB%9D%E5%91%B3%E9%B8%AD%E8%84%96%E6%92%91%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `158.5K 🔥` `NEW`
1. [关系再好也不要说的事](https://s.weibo.com/weibo?q=%23%E5%85%B3%E7%B3%BB%E5%86%8D%E5%A5%BD%E4%B9%9F%E4%B8%8D%E8%A6%81%E8%AF%B4%E7%9A%84%E4%BA%8B%23) `151.9K 🔥` `NEW`
1. [大孤山到底有谁在啊 (Who is there in Dagushan?)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A4%E5%B1%B1%E5%88%B0%E5%BA%95%E6%9C%89%E8%B0%81%E5%9C%A8%E5%95%8A%23) `139.9K 🔥` `NEW`
1. [单身即地狱5](https://s.weibo.com/weibo?q=%23%E5%8D%95%E8%BA%AB%E5%8D%B3%E5%9C%B0%E7%8B%B15%23) `139.9K 🔥` `NEW`
1. [酱园弄男主女配男配0提名](https://s.weibo.com/weibo?q=%23%E9%85%B1%E5%9B%AD%E5%BC%84%E7%94%B7%E4%B8%BB%E5%A5%B3%E9%85%8D%E7%94%B7%E9%85%8D0%E6%8F%90%E5%90%8D%23) `132.3K 🔥` `NEW`
1. [男子杀害护士前女友一审获死刑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B3%E6%8A%A4%E5%A3%AB%E5%89%8D%E5%A5%B3%E5%8F%8B%E4%B8%80%E5%AE%A1%E8%8E%B7%E6%AD%BB%E5%88%91%23) `100.5K 🔥` `NEW`
1. [于适让C位失败后表情](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%E8%AE%A9C%E4%BD%8D%E5%A4%B1%E8%B4%A5%E5%90%8E%E8%A1%A8%E6%83%85%23) `89.5K 🔥` `NEW`
1. [问AI亲生父母之间能不能结婚](https://s.weibo.com/weibo?q=%23%E9%97%AEAI%E4%BA%B2%E7%94%9F%E7%88%B6%E6%AF%8D%E4%B9%8B%E9%97%B4%E8%83%BD%E4%B8%8D%E8%83%BD%E7%BB%93%E5%A9%9A%23) `88.6K 🔥` `NEW`
1. [网友找千问新人找到香港去了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%89%BE%E5%8D%83%E9%97%AE%E6%96%B0%E4%BA%BA%E6%89%BE%E5%88%B0%E9%A6%99%E6%B8%AF%E5%8E%BB%E4%BA%86%23) `87.6K 🔥` `NEW`
1. [丁程鑫叠穿](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%A0%E7%A9%BF%23) `84.9K 🔥` `NEW`
1. [宋威龙 内娱吸血鬼塑](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%20%E5%86%85%E5%A8%B1%E5%90%B8%E8%A1%80%E9%AC%BC%E5%A1%91%23) `82.0K 🔥` `NEW`
1. [现任高市内阁将集体辞职](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E4%BB%BB%E9%AB%98%E5%B8%82%E5%86%85%E9%98%81%E5%B0%86%E9%9B%86%E4%BD%93%E8%BE%9E%E8%81%8C%23) `80.6K 🔥` `NEW`
1. [大声说话 伤害前额叶 (Talking loudly damages the prefrontal lobes)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A3%B0%E8%AF%B4%E8%AF%9D%20%E4%BC%A4%E5%AE%B3%E5%89%8D%E9%A2%9D%E5%8F%B6%23) `77.9K 🔥` `NEW`
1. [王楚钦孙颖莎樊振东热搜运动员前三](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%83%AD%E6%90%9C%E8%BF%90%E5%8A%A8%E5%91%98%E5%89%8D%E4%B8%89%23) `77.3K 🔥` `NEW`
1. [小年](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%23) `75.7K 🔥` `NEW`
1. [孟子义包20场支持王鹤棣星河入梦](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%8C%8520%E5%9C%BA%E6%94%AF%E6%8C%81%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%98%9F%E6%B2%B3%E5%85%A5%E6%A2%A6%23) `73.2K 🔥` `NEW`
1. [我这一生如绿豆冰](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%BF%99%E4%B8%80%E7%94%9F%E5%A6%82%E7%BB%BF%E8%B1%86%E5%86%B0%23) `73.0K 🔥` `NEW`
1. [乐华 NDOUBLE](https://s.weibo.com/weibo?q=%23%E4%B9%90%E5%8D%8E%20NDOUBLE%23) `73.0K 🔥` `NEW`
1. [深圳人把高速堵成停车场了](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%BA%BA%E6%8A%8A%E9%AB%98%E9%80%9F%E5%A0%B5%E6%88%90%E5%81%9C%E8%BD%A6%E5%9C%BA%E4%BA%86%23) `71.5K 🔥` `NEW`
1. [元宝微信发红包 (Yuanbao sends red envelopes via WeChat)](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E5%BE%AE%E4%BF%A1%E5%8F%91%E7%BA%A2%E5%8C%85%23) `1.1M 🔥` `+30%`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `801.1K 🔥` `+65%`
1. [两周内三名正部级落马](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%91%A8%E5%86%85%E4%B8%89%E5%90%8D%E6%AD%A3%E9%83%A8%E7%BA%A7%E8%90%BD%E9%A9%AC%23) `266.3K 🔥` `+117%`
1. [金像奖最佳女配角提名](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E9%85%8D%E8%A7%92%E6%8F%90%E5%90%8D%23) `231.6K 🔥` `+215%`
1. [爱泼斯坦案出现一名9岁受害者 (A 9-year-old victim emerges in Epstein case)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%87%BA%E7%8E%B0%E4%B8%80%E5%90%8D9%E5%B2%81%E5%8F%97%E5%AE%B3%E8%80%85%23) `226.0K 🔥` `+31%`
1. [隐性嫉妒](https://s.weibo.com/weibo?q=%23%E9%9A%90%E6%80%A7%E5%AB%89%E5%A6%92%23) `139.9K 🔥`
1. [NBA交易](https://s.weibo.com/weibo?q=%23NBA%E4%BA%A4%E6%98%93%23) `114.0K 🔥`
1. [安徽一大姨烫头6小时狗都等emo了](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E4%B8%80%E5%A4%A7%E5%A7%A8%E7%83%AB%E5%A4%B46%E5%B0%8F%E6%97%B6%E7%8B%97%E9%83%BD%E7%AD%89emo%E4%BA%86%23) `112.9K 🔥`
1. [蔡徐坤colder花絮](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4colder%E8%8A%B1%E7%B5%AE%23) `103.7K 🔥`
1. [瑞幸 错别字 (Luckin typo)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%20%E9%94%99%E5%88%AB%E5%AD%97%23) `263.1K 🔥` `-77%`
1. [薛之谦万兽之王演唱会官宣](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `262.4K 🔥` `-55%`
1. [浙江省坚决拥护党中央决定](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E7%9C%81%E5%9D%9A%E5%86%B3%E6%8B%A5%E6%8A%A4%E5%85%9A%E4%B8%AD%E5%A4%AE%E5%86%B3%E5%AE%9A%23) `235.8K 🔥` `-46%`
1. [陈星旭 没提前让我背稿 (Chen Xingxu didn’t ask me to memorize the draft in advance)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%20%E6%B2%A1%E6%8F%90%E5%89%8D%E8%AE%A9%E6%88%91%E8%83%8C%E7%A8%BF%23) `223.6K 🔥` `-49%`
1. [铁路回应女乘务员裙装换裤装建议](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E5%9B%9E%E5%BA%94%E5%A5%B3%E4%B9%98%E5%8A%A1%E5%91%98%E8%A3%99%E8%A3%85%E6%8D%A2%E8%A3%A4%E8%A3%85%E5%BB%BA%E8%AE%AE%23) `206.5K 🔥` `-49%`
1. [金像奖提名](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E6%8F%90%E5%90%8D%23) `175.4K 🔥` `-24%`
1. [黑神话钟馗 (Black myth Zhong Kui)](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%A5%9E%E8%AF%9D%E9%92%9F%E9%A6%97%23) `164.6K 🔥` `-33%`
1. [白鹿孟子义一起去了大孤山](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%80%E8%B5%B7%E5%8E%BB%E4%BA%86%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `149.1K 🔥` `-35%`
1. [千万粉丝网红晒妻子生产过程遭质疑 (Internet celebrity with millions of fans exposed his wife’s birth process and was questioned)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E7%B2%89%E4%B8%9D%E7%BD%91%E7%BA%A2%E6%99%92%E5%A6%BB%E5%AD%90%E7%94%9F%E4%BA%A7%E8%BF%87%E7%A8%8B%E9%81%AD%E8%B4%A8%E7%96%91%23) `144.6K 🔥` `-38%`
1. [车祸后妹妹以为冷却液是血嚎啕大哭 (After the car accident, my sister cried because she thought the coolant was blood.)](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E7%A5%B8%E5%90%8E%E5%A6%B9%E5%A6%B9%E4%BB%A5%E4%B8%BA%E5%86%B7%E5%8D%B4%E6%B6%B2%E6%98%AF%E8%A1%80%E5%9A%8E%E5%95%95%E5%A4%A7%E5%93%AD%23) `139.8K 🔥` `-39%`
1. [杨紫迎来剧生嫡长女](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%BF%8E%E6%9D%A5%E5%89%A7%E7%94%9F%E5%AB%A1%E9%95%BF%E5%A5%B3%23) `103.6K 🔥` `-30%`
1. [黄子华 我到死都不用老年公交卡 (Huang Zihua I will never use the senior citizen bus pass until I die)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%8D%8E%20%E6%88%91%E5%88%B0%E6%AD%BB%E9%83%BD%E4%B8%8D%E7%94%A8%E8%80%81%E5%B9%B4%E5%85%AC%E4%BA%A4%E5%8D%A1%23) `99.5K 🔥` `-55%`
1. [易炼红被查 (Yi Lianhong was investigated)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%82%BC%E7%BA%A2%E8%A2%AB%E6%9F%A5%23) `92.0K 🔥` `-60%`
1. [骑手给妻子换手机被反复要求退货](https://s.weibo.com/weibo?q=%23%E9%AA%91%E6%89%8B%E7%BB%99%E5%A6%BB%E5%AD%90%E6%8D%A2%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%8F%8D%E5%A4%8D%E8%A6%81%E6%B1%82%E9%80%80%E8%B4%A7%23) `79.1K 🔥` `-56%`
1. [金像奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%23) `77.6K 🔥` `-65%`
1. [谷爱凌回应特朗普大骂冬奥运动员](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%A7%E9%AA%82%E5%86%AC%E5%A5%A5%E8%BF%90%E5%8A%A8%E5%91%98%23) `76.9K 🔥` `-43%`

Updated at 2026-02-10 17:39:10

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
