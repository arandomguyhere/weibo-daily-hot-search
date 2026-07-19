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

1. [马龙许昕男双冠军 (Ma Long and Xu Xin men’s doubles champion)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E7%94%B7%E5%8F%8C%E5%86%A0%E5%86%9B%23) `6.0M 🔥` `NEW`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `1.4M 🔥` `NEW`
1. [青春启程踏歌行](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E5%90%AF%E7%A8%8B%E8%B8%8F%E6%AD%8C%E8%A1%8C%23) `1.1M 🔥` `NEW`
1. [西班牙阿根廷争终极王座](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BA%89%E7%BB%88%E6%9E%81%E7%8E%8B%E5%BA%A7%23) `1.1M 🔥` `NEW`
1. [这一秒过火热度](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E7%83%AD%E5%BA%A6%23) `485.7K 🔥` `NEW`
1. [曝BLG目标上单Hoya或369](https://s.weibo.com/weibo?q=%23%E6%9B%9DBLG%E7%9B%AE%E6%A0%87%E4%B8%8A%E5%8D%95Hoya%E6%88%96369%23) `403.0K 🔥` `NEW`
1. [马龙许昕合体撕开国乒男队窘境](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E5%90%88%E4%BD%93%E6%92%95%E5%BC%80%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E7%AA%98%E5%A2%83%23) `323.8K 🔥` `NEW`
1. [退休民警撞人后死亡妻子转移资产](https://s.weibo.com/weibo?q=%23%E9%80%80%E4%BC%91%E6%B0%91%E8%AD%A6%E6%92%9E%E4%BA%BA%E5%90%8E%E6%AD%BB%E4%BA%A1%E5%A6%BB%E5%AD%90%E8%BD%AC%E7%A7%BB%E8%B5%84%E4%BA%A7%23) `232.6K 🔥` `NEW`
1. [没想到王俊凯的工作留痕在这用上了](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%83%B3%E5%88%B0%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%9A%84%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%E5%9C%A8%E8%BF%99%E7%94%A8%E4%B8%8A%E4%BA%86%23) `230.8K 🔥` `NEW`
1. [王源演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%23) `230.6K 🔥` `NEW`
1. [放羊的星星19周年主创录VCR (Sheep-Herding Star 19th Anniversary Main Recording VCR)](https://s.weibo.com/weibo?q=%23%E6%94%BE%E7%BE%8A%E7%9A%84%E6%98%9F%E6%98%9F19%E5%91%A8%E5%B9%B4%E4%B8%BB%E5%88%9B%E5%BD%95VCR%23) `175.2K 🔥` `NEW`
1. [田曦薇把王安宇的手当逗猫棒](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%8A%8A%E7%8E%8B%E5%AE%89%E5%AE%87%E7%9A%84%E6%89%8B%E5%BD%93%E9%80%97%E7%8C%AB%E6%A3%92%23) `158.4K 🔥` `NEW`
1. [马龙许昕还是太礼貌了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E8%BF%98%E6%98%AF%E5%A4%AA%E7%A4%BC%E8%B2%8C%E4%BA%86%23) `157.0K 🔥` `NEW`
1. [张凌赫回应这一秒过火恨海情天](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E6%81%A8%E6%B5%B7%E6%83%85%E5%A4%A9%23) `154.6K 🔥` `NEW`
1. [八仙周末票房逆跌](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E5%91%A8%E6%9C%AB%E7%A5%A8%E6%88%BF%E9%80%86%E8%B7%8C%23) `150.0K 🔥` `NEW`
1. [爱奇艺备播古装](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E5%A4%87%E6%92%AD%E5%8F%A4%E8%A3%85%23) `141.5K 🔥` `NEW`
1. [方博称因外协打不了乒超](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%8D%9A%E7%A7%B0%E5%9B%A0%E5%A4%96%E5%8D%8F%E6%89%93%E4%B8%8D%E4%BA%86%E4%B9%92%E8%B6%85%23) `140.0K 🔥` `NEW`
1. [上海五角场4小时雨量197.8毫米](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BA%94%E8%A7%92%E5%9C%BA4%E5%B0%8F%E6%97%B6%E9%9B%A8%E9%87%8F197.8%E6%AF%AB%E7%B1%B3%23) `127.1K 🔥` `NEW`
1. [莫迪称印度正在申办2036年奥运会](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E8%BF%AA%E7%A7%B0%E5%8D%B0%E5%BA%A6%E6%AD%A3%E5%9C%A8%E7%94%B3%E5%8A%9E2036%E5%B9%B4%E5%A5%A5%E8%BF%90%E4%BC%9A%23) `127.1K 🔥` `NEW`
1. [决赛前阿根廷暴雨中训练](https://s.weibo.com/weibo?q=%23%E5%86%B3%E8%B5%9B%E5%89%8D%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%9A%B4%E9%9B%A8%E4%B8%AD%E8%AE%AD%E7%BB%83%23) `127.1K 🔥` `NEW`
1. [存钱过万一定要办理纸质存单 (If you save more than 10,000 yuan, you must apply for a paper deposit certificate)](https://s.weibo.com/weibo?q=%23%E5%AD%98%E9%92%B1%E8%BF%87%E4%B8%87%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8A%9E%E7%90%86%E7%BA%B8%E8%B4%A8%E5%AD%98%E5%8D%95%23) `953.9K 🔥` `+131%`
1. [马龙许昕vs向鹏黄友政 (Ma Long Xu Xin vs Xiang Peng Huang Youzheng)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95vs%E5%90%91%E9%B9%8F%E9%BB%84%E5%8F%8B%E6%94%BF%23) `732.1K 🔥` `+66%`
1. [林诗栋蒯曼夺冠](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E8%92%AF%E6%9B%BC%E5%A4%BA%E5%86%A0%23) `705.2K 🔥` `+74%`
1. [虞书欣直播给陈靖可化妆](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%E7%BB%99%E9%99%88%E9%9D%96%E5%8F%AF%E5%8C%96%E5%A6%86%23) `371.1K 🔥` `+25%`
1. [国乒 断层危机](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E6%96%AD%E5%B1%82%E5%8D%B1%E6%9C%BA%23) `368.3K 🔥` `+56%`
1. [Bin或轮换](https://s.weibo.com/weibo?q=%23Bin%E6%88%96%E8%BD%AE%E6%8D%A2%23) `269.7K 🔥` `+53%`
1. [日本惹怒俄罗斯](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%83%B9%E6%80%92%E4%BF%84%E7%BD%97%E6%96%AF%23) `230.9K 🔥` `+33%`
1. [王俊凯王源穆祉丞同日开演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90%E7%A9%86%E7%A5%89%E4%B8%9E%E5%90%8C%E6%97%A5%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `405.7K 🔥`
1. [这一秒过火台词好搞笑](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%8F%B0%E8%AF%8D%E5%A5%BD%E6%90%9E%E7%AC%91%23) `402.5K 🔥`
1. [这一秒过火强吻好尬](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%BC%BA%E5%90%BB%E5%A5%BD%E5%B0%AC%23) `396.6K 🔥`
1. [曝BLG签约新上单](https://s.weibo.com/weibo?q=%23%E6%9B%9DBLG%E7%AD%BE%E7%BA%A6%E6%96%B0%E4%B8%8A%E5%8D%95%23) `391.4K 🔥`
1. [唐嫣紧身衣身材 (Tang Yan's figure in tights)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E7%B4%A7%E8%BA%AB%E8%A1%A3%E8%BA%AB%E6%9D%90%23) `390.0K 🔥`
1. [穆祉丞哭了](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%93%AD%E4%BA%86%23) `386.5K 🔥`
1. [贝林厄姆在女友与哈兰德身边对比](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E5%9C%A8%E5%A5%B3%E5%8F%8B%E4%B8%8E%E5%93%88%E5%85%B0%E5%BE%B7%E8%BA%AB%E8%BE%B9%E5%AF%B9%E6%AF%94%23) `385.0K 🔥`
1. [14岁男孩双腿纹满纹身家长索赔20万](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%94%B7%E5%AD%A9%E5%8F%8C%E8%85%BF%E7%BA%B9%E6%BB%A1%E7%BA%B9%E8%BA%AB%E5%AE%B6%E9%95%BF%E7%B4%A2%E8%B5%9420%E4%B8%87%23) `380.7K 🔥`
1. [马来西亚宣布驱逐所有以色列人](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E5%AE%A3%E5%B8%83%E9%A9%B1%E9%80%90%E6%89%80%E6%9C%89%E4%BB%A5%E8%89%B2%E5%88%97%E4%BA%BA%23) `376.9K 🔥`
1. [马斯克宣称要赶超Kimi (Musk claims to catch up with Kimi)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%AE%A3%E7%A7%B0%E8%A6%81%E8%B5%B6%E8%B6%85Kimi%23) `374.4K 🔥`
1. [这一秒过火 红果亦是果 (This second went too far, the red fruit is also a fruit)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E7%BA%A2%E6%9E%9C%E4%BA%A6%E6%98%AF%E6%9E%9C%23) `368.2K 🔥`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `352.5K 🔥`
1. [旭旭宝宝回应言论争议](https://s.weibo.com/weibo?q=%23%E6%97%AD%E6%97%AD%E5%AE%9D%E5%AE%9D%E5%9B%9E%E5%BA%94%E8%A8%80%E8%AE%BA%E4%BA%89%E8%AE%AE%23) `324.9K 🔥`
1. [其实减肥是越减越轻松的](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E5%87%8F%E8%82%A5%E6%98%AF%E8%B6%8A%E5%87%8F%E8%B6%8A%E8%BD%BB%E6%9D%BE%E7%9A%84%23) `236.1K 🔥`
1. [权志龙白色西装](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99%E7%99%BD%E8%89%B2%E8%A5%BF%E8%A3%85%23) `216.6K 🔥`
1. [才发现上班其实很省钱](https://s.weibo.com/weibo?q=%23%E6%89%8D%E5%8F%91%E7%8E%B0%E4%B8%8A%E7%8F%AD%E5%85%B6%E5%AE%9E%E5%BE%88%E7%9C%81%E9%92%B1%23) `204.4K 🔥`
1. [姆巴佩说我们也是人 (Mbappe says we are human too)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%AF%B4%E6%88%91%E4%BB%AC%E4%B9%9F%E6%98%AF%E4%BA%BA%23) `624.5K 🔥` `-28%`
1. [上海突发强雷暴 (Severe thunderstorm breaks out in Shanghai)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%AA%81%E5%8F%91%E5%BC%BA%E9%9B%B7%E6%9A%B4%23) `399.7K 🔥` `-66%`
1. [女子戴2年牙齿保持器停戴1周反弹](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%88%B42%E5%B9%B4%E7%89%99%E9%BD%BF%E4%BF%9D%E6%8C%81%E5%99%A8%E5%81%9C%E6%88%B41%E5%91%A8%E5%8F%8D%E5%BC%B9%23) `222.2K 🔥` `-35%`
1. [官俊臣疑似回应考上重庆大学 (Guan Junchen suspected of being admitted to Chongqing University)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E8%80%83%E4%B8%8A%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%23) `210.6K 🔥` `-40%`
1. [虞书欣泉州簪花](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%B3%89%E5%B7%9E%E7%B0%AA%E8%8A%B1%23) `164.8K 🔥` `-31%`
1. [央视曝0公里二手电动自行车猫腻](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D0%E5%85%AC%E9%87%8C%E4%BA%8C%E6%89%8B%E7%94%B5%E5%8A%A8%E8%87%AA%E8%A1%8C%E8%BD%A6%E7%8C%AB%E8%85%BB%23) `149.2K 🔥` `-63%`
1. [田曦薇演黑帮大佬的威慑力 (Tian Xiwei's intimidating power as a gangster)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%BC%94%E9%BB%91%E5%B8%AE%E5%A4%A7%E4%BD%AC%E7%9A%84%E5%A8%81%E6%85%91%E5%8A%9B%23) `144.4K 🔥` `-35%`
1. [成都GG对战北京WBG (Chengdu GG vs. Beijing WBG)](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BDGG%E5%AF%B9%E6%88%98%E5%8C%97%E4%BA%ACWBG%23) `143.9K 🔥` `-21%`

Updated at 2026-07-19 20:36:52

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
