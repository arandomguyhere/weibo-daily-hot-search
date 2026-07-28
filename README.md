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

1. [人工智能相关产品成为中国外贸新名片 (Artificial intelligence related products have become China’s new business card for foreign trade)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E7%9B%B8%E5%85%B3%E4%BA%A7%E5%93%81%E6%88%90%E4%B8%BA%E4%B8%AD%E5%9B%BD%E5%A4%96%E8%B4%B8%E6%96%B0%E5%90%8D%E7%89%87%23) `1.3M 🔥` `NEW`
1. [日本7.1级强震已致多人死亡](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.1%E7%BA%A7%E5%BC%BA%E9%9C%87%E5%B7%B2%E8%87%B4%E5%A4%9A%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `1.3M 🔥` `NEW`
1. [陈哲远 播了播了播了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%20%E6%92%AD%E4%BA%86%E6%92%AD%E4%BA%86%E6%92%AD%E4%BA%86%23) `740.1K 🔥` `NEW`
1. [三伏天减重别陷入躺瘦误区](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BC%8F%E5%A4%A9%E5%87%8F%E9%87%8D%E5%88%AB%E9%99%B7%E5%85%A5%E8%BA%BA%E7%98%A6%E8%AF%AF%E5%8C%BA%23) `475.7K 🔥` `NEW`
1. [御廷谣 空降](https://s.weibo.com/weibo?q=%23%E5%BE%A1%E5%BB%B7%E8%B0%A3%20%E7%A9%BA%E9%99%8D%23) `394.3K 🔥` `NEW`
1. [长鑫估值](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E4%BC%B0%E5%80%BC%23) `385.3K 🔥` `NEW`
1. [KSG对战狼队](https://s.weibo.com/weibo?q=%23KSG%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `385.1K 🔥` `NEW`
1. [王虹 王的猜想](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%20%E7%8E%8B%E7%9A%84%E7%8C%9C%E6%83%B3%23) `384.5K 🔥` `NEW`
1. [小欢喜原著结局](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%AC%A2%E5%96%9C%E5%8E%9F%E8%91%97%E7%BB%93%E5%B1%80%23) `384.3K 🔥` `NEW`
1. [日本地震山崩瞬间画面曝光](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%E5%B1%B1%E5%B4%A9%E7%9E%AC%E9%97%B4%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `383.4K 🔥` `NEW`
1. [日本熊本强震天空浮现巨型蘑菇云 (Giant mushroom cloud appears in the sky after strong earthquake in Kumamoto, Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%86%8A%E6%9C%AC%E5%BC%BA%E9%9C%87%E5%A4%A9%E7%A9%BA%E6%B5%AE%E7%8E%B0%E5%B7%A8%E5%9E%8B%E8%98%91%E8%8F%87%E4%BA%91%23) `382.8K 🔥` `NEW`
1. [张泽禹想你的夜高音](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%BD%E7%A6%B9%E6%83%B3%E4%BD%A0%E7%9A%84%E5%A4%9C%E9%AB%98%E9%9F%B3%23) `335.2K 🔥` `NEW`
1. [官媒力挺鸿星尔克流浪动物公益](https://s.weibo.com/weibo?q=%23%E5%AE%98%E5%AA%92%E5%8A%9B%E6%8C%BA%E9%B8%BF%E6%98%9F%E5%B0%94%E5%85%8B%E6%B5%81%E6%B5%AA%E5%8A%A8%E7%89%A9%E5%85%AC%E7%9B%8A%23) `315.5K 🔥` `NEW`
1. [张柏芝46岁骨相](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D46%E5%B2%81%E9%AA%A8%E7%9B%B8%23) `312.6K 🔥` `NEW`
1. [陈哲远这一巴掌给我看爽了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E8%BF%99%E4%B8%80%E5%B7%B4%E6%8E%8C%E7%BB%99%E6%88%91%E7%9C%8B%E7%88%BD%E4%BA%86%23) `300.8K 🔥` `NEW`
1. [奇瑞2000万的全球化含量有多高](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E2000%E4%B8%87%E7%9A%84%E5%85%A8%E7%90%83%E5%8C%96%E5%90%AB%E9%87%8F%E6%9C%89%E5%A4%9A%E9%AB%98%23) `288.8K 🔥` `NEW`
1. [张元英 顶光出片](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%20%E9%A1%B6%E5%85%89%E5%87%BA%E7%89%87%23) `224.9K 🔥` `NEW`
1. [曝修杰楷近况](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BF%AE%E6%9D%B0%E6%A5%B7%E8%BF%91%E5%86%B5%23) `217.8K 🔥` `NEW`
1. [女孩催促不要挡电梯被男孩母亲打](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%82%AC%E4%BF%83%E4%B8%8D%E8%A6%81%E6%8C%A1%E7%94%B5%E6%A2%AF%E8%A2%AB%E7%94%B7%E5%AD%A9%E6%AF%8D%E4%BA%B2%E6%89%93%23) `205.6K 🔥` `NEW`
1. [赵钰琪14岁的美人胚子](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%92%B0%E7%90%AA14%E5%B2%81%E7%9A%84%E7%BE%8E%E4%BA%BA%E8%83%9A%E5%AD%90%23) `194.7K 🔥` `NEW`
1. [胡杏儿发了没有张凌赫的慕容全家福 (Myolie Wu posted a photo of Murong’s family without Zhang Linghe)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%9D%8F%E5%84%BF%E5%8F%91%E4%BA%86%E6%B2%A1%E6%9C%89%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E6%85%95%E5%AE%B9%E5%85%A8%E5%AE%B6%E7%A6%8F%23) `194.7K 🔥` `NEW`
1. [王一博愁眉苦脸填表](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%84%81%E7%9C%89%E8%8B%A6%E8%84%B8%E5%A1%AB%E8%A1%A8%23) `194.2K 🔥` `NEW`
1. [张极solo原创词曲](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9E%81solo%E5%8E%9F%E5%88%9B%E8%AF%8D%E6%9B%B2%23) `192.5K 🔥` `NEW`
1. [苏新皓power英文rap开场](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93power%E8%8B%B1%E6%96%87rap%E5%BC%80%E5%9C%BA%23) `187.9K 🔥` `NEW`
1. [这种AI视频我能看一整天](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8DAI%E8%A7%86%E9%A2%91%E6%88%91%E8%83%BD%E7%9C%8B%E4%B8%80%E6%95%B4%E5%A4%A9%23) `182.9K 🔥` `NEW`
1. [TOP登陆少年day3歌单](https://s.weibo.com/weibo?q=%23TOP%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4day3%E6%AD%8C%E5%8D%95%23) `180.0K 🔥` `NEW`
1. [三里屯偶遇甜馨](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%87%8C%E5%B1%AF%E5%81%B6%E9%81%87%E7%94%9C%E9%A6%A8%23) `175.4K 🔥` `NEW`
1. [马嘉祺首个电影主题曲](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E9%A6%96%E4%B8%AA%E7%94%B5%E5%BD%B1%E4%B8%BB%E9%A2%98%E6%9B%B2%23) `144.6K 🔥` `NEW`
1. [张凌赫回复吴莫愁](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%A4%8D%E5%90%B4%E8%8E%AB%E6%84%81%23) `137.4K 🔥` `NEW`
1. [大领导进来办公室要站起来吗](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A2%86%E5%AF%BC%E8%BF%9B%E6%9D%A5%E5%8A%9E%E5%85%AC%E5%AE%A4%E8%A6%81%E7%AB%99%E8%B5%B7%E6%9D%A5%E5%90%97%23) `134.5K 🔥` `NEW`
1. [这一秒过火 (This second went too far)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `131.4K 🔥` `NEW`
1. [日本7.1级地震民众哭喊声一片](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.1%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%B0%91%E4%BC%97%E5%93%AD%E5%96%8A%E5%A3%B0%E4%B8%80%E7%89%87%23) `1.5M 🔥` `+56%`
1. [御廷谣](https://s.weibo.com/weibo?q=%23%E5%BE%A1%E5%BB%B7%E8%B0%A3%23) `277.6K 🔥` `+34%`
1. [退货千万不要提前给取件码 (Never give a pickup code in advance when returning goods)](https://s.weibo.com/weibo?q=%23%E9%80%80%E8%B4%A7%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8F%90%E5%89%8D%E7%BB%99%E5%8F%96%E4%BB%B6%E7%A0%81%23) `2.9M 🔥`
1. [朱志鑫 造型](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E9%80%A0%E5%9E%8B%23) `385.6K 🔥`
1. [刘亦菲 富有且大方 (Liu Yifei is rich and generous)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%20%E5%AF%8C%E6%9C%89%E4%B8%94%E5%A4%A7%E6%96%B9%23) `383.5K 🔥`
1. [GMM致歉](https://s.weibo.com/weibo?q=%23GMM%E8%87%B4%E6%AD%89%23) `373.3K 🔥`
1. [上海街头偶遇Angelababy](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%A1%97%E5%A4%B4%E5%81%B6%E9%81%87Angelababy%23) `337.2K 🔥`
1. [全款买房的人变多](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%AC%BE%E4%B9%B0%E6%88%BF%E7%9A%84%E4%BA%BA%E5%8F%98%E5%A4%9A%23) `291.1K 🔥`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `194.3K 🔥`
1. [武大口腔通报女孩正颌反成鞋拔子脸](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E5%8F%A3%E8%85%94%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%A9%E6%AD%A3%E9%A2%8C%E5%8F%8D%E6%88%90%E9%9E%8B%E6%8B%94%E5%AD%90%E8%84%B8%23) `188.5K 🔥`
1. [感冒灵正式纳入禁驾清单](https://s.weibo.com/weibo?q=%23%E6%84%9F%E5%86%92%E7%81%B5%E6%AD%A3%E5%BC%8F%E7%BA%B3%E5%85%A5%E7%A6%81%E9%A9%BE%E6%B8%85%E5%8D%95%23) `557.2K 🔥` `-66%`
1. [花儿与少年8录制回国 (Flowers and Boys 8 recording returns to China)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B48%E5%BD%95%E5%88%B6%E5%9B%9E%E5%9B%BD%23) `382.6K 🔥` `-24%`
1. [日本7.1级地震江浙沪有震感](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.1%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%B1%9F%E6%B5%99%E6%B2%AA%E6%9C%89%E9%9C%87%E6%84%9F%23) `349.7K 🔥` `-67%`
1. [张馨予你辣到我了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E4%BD%A0%E8%BE%A3%E5%88%B0%E6%88%91%E4%BA%86%23) `288.3K 🔥` `-28%`
1. [上海震感](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%9C%87%E6%84%9F%23) `238.2K 🔥` `-42%`
1. [齐达内出任法国国家队主教练](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%BE%BE%E5%86%85%E5%87%BA%E4%BB%BB%E6%B3%95%E5%9B%BD%E5%9B%BD%E5%AE%B6%E9%98%9F%E4%B8%BB%E6%95%99%E7%BB%83%23) `218.2K 🔥` `-48%`
1. [泰国国家旅游局发文致歉](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%97%85%E6%B8%B8%E5%B1%80%E5%8F%91%E6%96%87%E8%87%B4%E6%AD%89%23) `217.3K 🔥` `-46%`
1. [日本地震 (japan earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%23) `148.6K 🔥` `-65%`
1. [差点没认出这是王菊](https://s.weibo.com/weibo?q=%23%E5%B7%AE%E7%82%B9%E6%B2%A1%E8%AE%A4%E5%87%BA%E8%BF%99%E6%98%AF%E7%8E%8B%E8%8F%8A%23) `147.3K 🔥` `-29%`
1. [患癌妻子申请销毁婚外胚胎遭拒](https://s.weibo.com/weibo?q=%23%E6%82%A3%E7%99%8C%E5%A6%BB%E5%AD%90%E7%94%B3%E8%AF%B7%E9%94%80%E6%AF%81%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E9%81%AD%E6%8B%92%23) `139.4K 🔥` `-65%`

Updated at 2026-07-28 21:00:52

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
