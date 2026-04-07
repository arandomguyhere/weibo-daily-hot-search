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

1. [5月放假12天 (12 days off in May)](https://s.weibo.com/weibo?q=%235%E6%9C%88%E6%94%BE%E5%81%8712%E5%A4%A9%23) `1.1M 🔥` `NEW`
1. [陈丽华生平](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E7%94%9F%E5%B9%B3%23) `808.7K 🔥` `NEW`
1. [清明文旅市场三线齐热](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E6%96%87%E6%97%85%E5%B8%82%E5%9C%BA%E4%B8%89%E7%BA%BF%E9%BD%90%E7%83%AD%23) `656.0K 🔥` `NEW`
1. [开车致女友截瘫后失联男子首发声](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%BD%A6%E8%87%B4%E5%A5%B3%E5%8F%8B%E6%88%AA%E7%98%AB%E5%90%8E%E5%A4%B1%E8%81%94%E7%94%B7%E5%AD%90%E9%A6%96%E5%8F%91%E5%A3%B0%23) `480.8K 🔥` `NEW`
1. [伊朗称以放弃北部城市承认了失败](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E4%BB%A5%E6%94%BE%E5%BC%83%E5%8C%97%E9%83%A8%E5%9F%8E%E5%B8%82%E6%89%BF%E8%AE%A4%E4%BA%86%E5%A4%B1%E8%B4%A5%23) `360.4K 🔥` `NEW`
1. [陈丽华逝世](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E9%80%9D%E4%B8%96%23) `359.8K 🔥` `NEW`
1. [原来这叫软孤立啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%8F%AB%E8%BD%AF%E5%AD%A4%E7%AB%8B%E5%95%8A%23) `359.6K 🔥` `NEW`
1. [车祸截瘫女子起诉肇事失联男友](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E7%A5%B8%E6%88%AA%E7%98%AB%E5%A5%B3%E5%AD%90%E8%B5%B7%E8%AF%89%E8%82%87%E4%BA%8B%E5%A4%B1%E8%81%94%E7%94%B7%E5%8F%8B%23) `359.0K 🔥` `NEW`
1. [陈丽华是唐僧扮演者迟重瑞的妻子](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E6%98%AF%E5%94%90%E5%83%A7%E6%89%AE%E6%BC%94%E8%80%85%E8%BF%9F%E9%87%8D%E7%91%9E%E7%9A%84%E5%A6%BB%E5%AD%90%23) `343.3K 🔥` `NEW`
1. [孙颖莎在每张大合影中都笑的不一样](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9C%A8%E6%AF%8F%E5%BC%A0%E5%A4%A7%E5%90%88%E5%BD%B1%E4%B8%AD%E9%83%BD%E7%AC%91%E7%9A%84%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `336.4K 🔥` `NEW`
1. [陈丽华身家470亿元 (Chen Laiwa’s net worth is NT$47 billion)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E8%BA%AB%E5%AE%B6470%E4%BA%BF%E5%85%83%23) `332.7K 🔥` `NEW`
1. [江语晨说才刚离婚别这样](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E8%AF%B4%E6%89%8D%E5%88%9A%E7%A6%BB%E5%A9%9A%E5%88%AB%E8%BF%99%E6%A0%B7%23) `326.5K 🔥` `NEW`
1. [金卡戴珊汉密尔顿承认恋情](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8D%A1%E6%88%B4%E7%8F%8A%E6%B1%89%E5%AF%86%E5%B0%94%E9%A1%BF%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `317.5K 🔥` `NEW`
1. [莫氏鸡煲公主称被嫌慢嫌贵](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%85%AC%E4%B8%BB%E7%A7%B0%E8%A2%AB%E5%AB%8C%E6%85%A2%E5%AB%8C%E8%B4%B5%23) `314.9K 🔥` `NEW`
1. [找到邓家佳不来浪姐的原因了](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%88%B0%E9%82%93%E5%AE%B6%E4%BD%B3%E4%B8%8D%E6%9D%A5%E6%B5%AA%E5%A7%90%E7%9A%84%E5%8E%9F%E5%9B%A0%E4%BA%86%23) `309.1K 🔥` `NEW`
1. [余茵暴瘦](https://s.weibo.com/weibo?q=%23%E4%BD%99%E8%8C%B5%E6%9A%B4%E7%98%A6%23) `308.4K 🔥` `NEW`
1. [潘玮柏女儿5岁近照](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%8E%AE%E6%9F%8F%E5%A5%B3%E5%84%BF5%E5%B2%81%E8%BF%91%E7%85%A7%23) `281.2K 🔥` `NEW`
1. [女企业家陈丽华曾白手起家](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%BC%81%E4%B8%9A%E5%AE%B6%E9%99%88%E4%B8%BD%E5%8D%8E%E6%9B%BE%E7%99%BD%E6%89%8B%E8%B5%B7%E5%AE%B6%23) `255.8K 🔥` `NEW`
1. [朋友圈富豪人设产业链曝光](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%AF%8C%E8%B1%AA%E4%BA%BA%E8%AE%BE%E4%BA%A7%E4%B8%9A%E9%93%BE%E6%9B%9D%E5%85%89%23) `253.1K 🔥` `NEW`
1. [江语晨急寻律师](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E6%80%A5%E5%AF%BB%E5%BE%8B%E5%B8%88%23) `248.4K 🔥` `NEW`
1. [妻子的浪漫旅行嘉宾阵容 (Wife’s Romantic Travel Guest Lineup)](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%9A%84%E6%B5%AA%E6%BC%AB%E6%97%85%E8%A1%8C%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `232.4K 🔥` `NEW`
1. [雪饼猴一句老太太让何赛飞破防了](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E9%A5%BC%E7%8C%B4%E4%B8%80%E5%8F%A5%E8%80%81%E5%A4%AA%E5%A4%AA%E8%AE%A9%E4%BD%95%E8%B5%9B%E9%A3%9E%E7%A0%B4%E9%98%B2%E4%BA%86%23) `224.7K 🔥` `NEW`
1. [领克10极速充电1秒2公里](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B10%E6%9E%81%E9%80%9F%E5%85%85%E7%94%B51%E7%A7%922%E5%85%AC%E9%87%8C%23) `221.3K 🔥` `NEW`
1. [张元英穿搭基础身材就不基础](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%A9%BF%E6%90%AD%E5%9F%BA%E7%A1%80%E8%BA%AB%E6%9D%90%E5%B0%B1%E4%B8%8D%E5%9F%BA%E7%A1%80%23) `219.0K 🔥` `NEW`
1. [听说又有千万网红探店鸡煲老板跑了](https://s.weibo.com/weibo?q=%23%E5%90%AC%E8%AF%B4%E5%8F%88%E6%9C%89%E5%8D%83%E4%B8%87%E7%BD%91%E7%BA%A2%E6%8E%A2%E5%BA%97%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E8%B7%91%E4%BA%86%23) `193.7K 🔥` `NEW`
1. [被特朗普言论震惊了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%89%B9%E6%9C%97%E6%99%AE%E8%A8%80%E8%AE%BA%E9%9C%87%E6%83%8A%E4%BA%86%23) `189.0K 🔥` `NEW`
1. [巴拿马发生巨大爆炸](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%BF%E9%A9%AC%E5%8F%91%E7%94%9F%E5%B7%A8%E5%A4%A7%E7%88%86%E7%82%B8%23) `187.7K 🔥` `NEW`
1. [曝IZNA前成员尹智允退团真相](https://s.weibo.com/weibo?q=%23%E6%9B%9DIZNA%E5%89%8D%E6%88%90%E5%91%98%E5%B0%B9%E6%99%BA%E5%85%81%E9%80%80%E5%9B%A2%E7%9C%9F%E7%9B%B8%23) `180.9K 🔥` `NEW`
1. [700多万二手房一夜跳涨50万](https://s.weibo.com/weibo?q=%23700%E5%A4%9A%E4%B8%87%E4%BA%8C%E6%89%8B%E6%88%BF%E4%B8%80%E5%A4%9C%E8%B7%B3%E6%B6%A850%E4%B8%87%23) `137.0K 🔥` `NEW`
1. [台媒曝曾敬骅恋情](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%AA%92%E6%9B%9D%E6%9B%BE%E6%95%AC%E9%AA%85%E6%81%8B%E6%83%85%23) `135.7K 🔥` `NEW`
1. [原来一人吃饱全家不饿是这个意思 (It turns out that this is what it means when one person is full and the whole family is not hungry.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%80%E4%BA%BA%E5%90%83%E9%A5%B1%E5%85%A8%E5%AE%B6%E4%B8%8D%E9%A5%BF%E6%98%AF%E8%BF%99%E4%B8%AA%E6%84%8F%E6%80%9D%23) `126.1K 🔥` `NEW`
1. [人的心气是能重新养回来的](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%9A%84%E5%BF%83%E6%B0%94%E6%98%AF%E8%83%BD%E9%87%8D%E6%96%B0%E5%85%BB%E5%9B%9E%E6%9D%A5%E7%9A%84%23) `124.5K 🔥` `NEW`
1. [男子频繁掏耳朵致耳道发霉长白毛](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%A2%91%E7%B9%81%E6%8E%8F%E8%80%B3%E6%9C%B5%E8%87%B4%E8%80%B3%E9%81%93%E5%8F%91%E9%9C%89%E9%95%BF%E7%99%BD%E6%AF%9B%23) `117.8K 🔥` `NEW`
1. [刘宇宁 可口可乐](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%20%E5%8F%AF%E5%8F%A3%E5%8F%AF%E4%B9%90%23) `113.6K 🔥` `NEW`
1. [男子出狱后偷渡缅甸搞诈骗](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%BA%E7%8B%B1%E5%90%8E%E5%81%B7%E6%B8%A1%E7%BC%85%E7%94%B8%E6%90%9E%E8%AF%88%E9%AA%97%23) `108.5K 🔥` `NEW`
1. [什么是桥本病](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%98%AF%E6%A1%A5%E6%9C%AC%E7%97%85%23) `108.1K 🔥` `NEW`
1. [朝鲜回应李在明](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E5%9B%9E%E5%BA%94%E6%9D%8E%E5%9C%A8%E6%98%8E%23) `105.9K 🔥` `NEW`
1. [以防你没见过芒果核内部](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%98%B2%E4%BD%A0%E6%B2%A1%E8%A7%81%E8%BF%87%E8%8A%92%E6%9E%9C%E6%A0%B8%E5%86%85%E9%83%A8%23) `104.8K 🔥` `NEW`
1. [向太称不会要求郭碧婷生3胎](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E7%A7%B0%E4%B8%8D%E4%BC%9A%E8%A6%81%E6%B1%82%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%94%9F3%E8%83%8E%23) `102.4K 🔥` `NEW`
1. [Tian预判闪是Creme指挥的](https://s.weibo.com/weibo?q=%23Tian%E9%A2%84%E5%88%A4%E9%97%AA%E6%98%AFCreme%E6%8C%87%E6%8C%A5%E7%9A%84%23) `99.3K 🔥` `NEW`
1. [怎么回复能解气一点 (How can I reply to relieve my anger?)](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E5%9B%9E%E5%A4%8D%E8%83%BD%E8%A7%A3%E6%B0%94%E4%B8%80%E7%82%B9%23) `99.0K 🔥` `NEW`
1. [郑丽文今日启程访陆](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E4%BB%8A%E6%97%A5%E5%90%AF%E7%A8%8B%E8%AE%BF%E9%99%86%23) `96.6K 🔥` `NEW`
1. [王楚钦的大合影华点被发现了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%9A%84%E5%A4%A7%E5%90%88%E5%BD%B1%E5%8D%8E%E7%82%B9%E8%A2%AB%E5%8F%91%E7%8E%B0%E4%BA%86%23) `92.2K 🔥` `NEW`
1. [应届生摩友在张雪面前求职被录取](https://s.weibo.com/weibo?q=%23%E5%BA%94%E5%B1%8A%E7%94%9F%E6%91%A9%E5%8F%8B%E5%9C%A8%E5%BC%A0%E9%9B%AA%E9%9D%A2%E5%89%8D%E6%B1%82%E8%81%8C%E8%A2%AB%E5%BD%95%E5%8F%96%23) `91.7K 🔥` `NEW`
1. [亮灯取件方式](https://s.weibo.com/weibo?q=%23%E4%BA%AE%E7%81%AF%E5%8F%96%E4%BB%B6%E6%96%B9%E5%BC%8F%23) `283.2K 🔥` `+51%`
1. [阚清子参加浪姐瘦了一圈](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%8F%82%E5%8A%A0%E6%B5%AA%E5%A7%90%E7%98%A6%E4%BA%86%E4%B8%80%E5%9C%88%23) `282.6K 🔥` `+56%`
1. [桃黑黑直播打嘴抽脸](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%9B%B4%E6%92%AD%E6%89%93%E5%98%B4%E6%8A%BD%E8%84%B8%23) `251.1K 🔥` `+44%`
1. [美军特种兵潜入伊朗救人场面失控](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%89%B9%E7%A7%8D%E5%85%B5%E6%BD%9C%E5%85%A5%E4%BC%8A%E6%9C%97%E6%95%91%E4%BA%BA%E5%9C%BA%E9%9D%A2%E5%A4%B1%E6%8E%A7%23) `227.4K 🔥` `+24%`
1. [以色列总理警告特朗普勿仓促停火](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%90%86%E8%AD%A6%E5%91%8A%E7%89%B9%E6%9C%97%E6%99%AE%E5%8B%BF%E4%BB%93%E4%BF%83%E5%81%9C%E7%81%AB%23) `116.3K 🔥` `-75%`
1. [五次退网的辛巴再收徒](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%AC%A1%E9%80%80%E7%BD%91%E7%9A%84%E8%BE%9B%E5%B7%B4%E5%86%8D%E6%94%B6%E5%BE%92%23) `105.3K 🔥` `-39%`

Updated at 2026-04-07 12:05:58

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
