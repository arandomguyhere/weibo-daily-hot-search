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

1. [张颂文见义勇为获表彰 (Zhang Songwen was commended for his bravery)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A2%82%E6%96%87%E8%A7%81%E4%B9%89%E5%8B%87%E4%B8%BA%E8%8E%B7%E8%A1%A8%E5%BD%B0%23) `1.1M 🔥` `NEW`
1. [足球预言家出现了](https://s.weibo.com/weibo?q=%23%E8%B6%B3%E7%90%83%E9%A2%84%E8%A8%80%E5%AE%B6%E5%87%BA%E7%8E%B0%E4%BA%86%23) `762.7K 🔥` `NEW`
1. [为啥瘦下来的人会变得高冷](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%95%A5%E7%98%A6%E4%B8%8B%E6%9D%A5%E7%9A%84%E4%BA%BA%E4%BC%9A%E5%8F%98%E5%BE%97%E9%AB%98%E5%86%B7%23) `742.5K 🔥` `NEW`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `690.9K 🔥` `NEW`
1. [张凯丽 尴尬](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E4%B8%BD%20%E5%B0%B4%E5%B0%AC%23) `583.5K 🔥` `NEW`
1. [C罗大儿子快两米高了](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%A4%A7%E5%84%BF%E5%AD%90%E5%BF%AB%E4%B8%A4%E7%B1%B3%E9%AB%98%E4%BA%86%23) `410.8K 🔥` `NEW`
1. [哈兰德头绳每根约42元](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%B4%E7%BB%B3%E6%AF%8F%E6%A0%B9%E7%BA%A642%E5%85%83%23) `408.7K 🔥` `NEW`
1. [侯明昊 和颂](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%20%E5%92%8C%E9%A2%82%23) `406.5K 🔥` `NEW`
1. [苹果相册乱起名字](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E7%9B%B8%E5%86%8C%E4%B9%B1%E8%B5%B7%E5%90%8D%E5%AD%97%23) `403.4K 🔥` `NEW`
1. [李小冉婚纱 美得好夸张](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%A9%9A%E7%BA%B1%20%E7%BE%8E%E5%BE%97%E5%A5%BD%E5%A4%B8%E5%BC%A0%23) `401.3K 🔥` `NEW`
1. [周杰伦昆凌只买得起一辆滑板车吗 (Can Jay Chou and Kun Ling only afford one scooter?)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%98%86%E5%87%8C%E5%8F%AA%E4%B9%B0%E5%BE%97%E8%B5%B7%E4%B8%80%E8%BE%86%E6%BB%91%E6%9D%BF%E8%BD%A6%E5%90%97%23) `399.8K 🔥` `NEW`
1. [端午节没卖完的粽子都去哪了](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E8%8A%82%E6%B2%A1%E5%8D%96%E5%AE%8C%E7%9A%84%E7%B2%BD%E5%AD%90%E9%83%BD%E5%8E%BB%E5%93%AA%E4%BA%86%23) `392.3K 🔥` `NEW`
1. [马宁解读世界杯捂嘴犯规](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E8%A7%A3%E8%AF%BB%E4%B8%96%E7%95%8C%E6%9D%AF%E6%8D%82%E5%98%B4%E7%8A%AF%E8%A7%84%23) `389.2K 🔥` `NEW`
1. [女子称花1500纹眉后像蜡笔小新](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E8%8A%B11500%E7%BA%B9%E7%9C%89%E5%90%8E%E5%83%8F%E8%9C%A1%E7%AC%94%E5%B0%8F%E6%96%B0%23) `386.2K 🔥` `NEW`
1. [金价下跌买30克镯子差价有一万多](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C%E4%B9%B030%E5%85%8B%E9%95%AF%E5%AD%90%E5%B7%AE%E4%BB%B7%E6%9C%89%E4%B8%80%E4%B8%87%E5%A4%9A%23) `385.3K 🔥` `NEW`
1. [谁去把张慧雯电池抠了](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%8E%BB%E6%8A%8A%E5%BC%A0%E6%85%A7%E9%9B%AF%E7%94%B5%E6%B1%A0%E6%8A%A0%E4%BA%86%23) `377.0K 🔥` `NEW`
1. [刘耀文慷慨且富有](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%85%B7%E6%85%A8%E4%B8%94%E5%AF%8C%E6%9C%89%23) `362.8K 🔥` `NEW`
1. [黄灿灿张月cos樱木花道流川枫拍照](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%BC%A0%E6%9C%88cos%E6%A8%B1%E6%9C%A8%E8%8A%B1%E9%81%93%E6%B5%81%E5%B7%9D%E6%9E%AB%E6%8B%8D%E7%85%A7%23) `351.2K 🔥` `NEW`
1. [曾沛慈 完全女王](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E5%AE%8C%E5%85%A8%E5%A5%B3%E7%8E%8B%23) `322.5K 🔥` `NEW`
1. [清华版大学生小学生对话](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E7%89%88%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%AF%B9%E8%AF%9D%23) `316.3K 🔥` `NEW`
1. [我国再度完成洲际导弹全射程试射 (my country once again completes full-range intercontinental missile test launch)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%86%8D%E5%BA%A6%E5%AE%8C%E6%88%90%E6%B4%B2%E9%99%85%E5%AF%BC%E5%BC%B9%E5%85%A8%E5%B0%84%E7%A8%8B%E8%AF%95%E5%B0%84%23) `312.5K 🔥` `NEW`
1. [TF四代突围2先导片](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E7%AA%81%E5%9B%B42%E5%85%88%E5%AF%BC%E7%89%87%23) `310.6K 🔥` `NEW`
1. [范姝涵3比1蒯曼](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%A7%9D%E6%B6%B53%E6%AF%941%E8%92%AF%E6%9B%BC%23) `270.4K 🔥` `NEW`
1. [张真源泡温泉一点儿不见外](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E6%B3%A1%E6%B8%A9%E6%B3%89%E4%B8%80%E7%82%B9%E5%84%BF%E4%B8%8D%E8%A7%81%E5%A4%96%23) `226.3K 🔥` `NEW`
1. [专家称被领导押着撇清与纸尿裤关系](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E8%A2%AB%E9%A2%86%E5%AF%BC%E6%8A%BC%E7%9D%80%E6%92%87%E6%B8%85%E4%B8%8E%E7%BA%B8%E5%B0%BF%E8%A3%A4%E5%85%B3%E7%B3%BB%23) `222.6K 🔥` `NEW`
1. [黄灿灿又奖励自己穿一套花里胡哨](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%8F%88%E5%A5%96%E5%8A%B1%E8%87%AA%E5%B7%B1%E7%A9%BF%E4%B8%80%E5%A5%97%E8%8A%B1%E9%87%8C%E8%83%A1%E5%93%A8%23) `220.0K 🔥` `NEW`
1. [云秀行开播](https://s.weibo.com/weibo?q=%23%E4%BA%91%E7%A7%80%E8%A1%8C%E5%BC%80%E6%92%AD%23) `180.1K 🔥` `NEW`
1. [bw 抢不到票](https://s.weibo.com/weibo?q=%23bw%20%E6%8A%A2%E4%B8%8D%E5%88%B0%E7%A5%A8%23) `158.0K 🔥` `NEW`
1. [网友求助糯米洒身刺痛](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%B1%82%E5%8A%A9%E7%B3%AF%E7%B1%B3%E6%B4%92%E8%BA%AB%E5%88%BA%E7%97%9B%23) `150.8K 🔥` `NEW`
1. [DeepSeek估值接近4000亿元](https://s.weibo.com/weibo?q=%23DeepSeek%E4%BC%B0%E5%80%BC%E6%8E%A5%E8%BF%914000%E4%BA%BF%E5%85%83%23) `148.9K 🔥` `NEW`
1. [日本大肆囤积弹药备战 (Japan is hoarding ammunition to prepare for war)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%A7%E8%82%86%E5%9B%A4%E7%A7%AF%E5%BC%B9%E8%8D%AF%E5%A4%87%E6%88%98%23) `409.3K 🔥` `+97%`
1. [立陶宛总统说搞不好对华关系就走人](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E9%99%B6%E5%AE%9B%E6%80%BB%E7%BB%9F%E8%AF%B4%E6%90%9E%E4%B8%8D%E5%A5%BD%E5%AF%B9%E5%8D%8E%E5%85%B3%E7%B3%BB%E5%B0%B1%E8%B5%B0%E4%BA%BA%23) `398.0K 🔥` `+21%`
1. [涨完价的iPhone还香吗](https://s.weibo.com/weibo?q=%23%E6%B6%A8%E5%AE%8C%E4%BB%B7%E7%9A%84iPhone%E8%BF%98%E9%A6%99%E5%90%97%23) `395.5K 🔥` `+89%`
1. [田曦薇好一朵蓝色妖姬](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%A5%BD%E4%B8%80%E6%9C%B5%E8%93%9D%E8%89%B2%E5%A6%96%E5%A7%AC%23) `394.1K 🔥` `+102%`
1. [曝徐艺洋在美国生的孩子 (Exposed Xu Yiyang’s child born in the United States)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9C%A8%E7%BE%8E%E5%9B%BD%E7%94%9F%E7%9A%84%E5%AD%A9%E5%AD%90%23) `387.6K 🔥` `+89%`
1. [1年500元你会把脸卖给AI短剧吗](https://s.weibo.com/weibo?q=%231%E5%B9%B4500%E5%85%83%E4%BD%A0%E4%BC%9A%E6%8A%8A%E8%84%B8%E5%8D%96%E7%BB%99AI%E7%9F%AD%E5%89%A7%E5%90%97%23) `356.8K 🔥` `+86%`
1. [宋威龙给釜山一点浓颜震撼](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%BB%99%E9%87%9C%E5%B1%B1%E4%B8%80%E7%82%B9%E6%B5%93%E9%A2%9C%E9%9C%87%E6%92%BC%23) `276.8K 🔥` `+33%`
1. [李小冉梦一场造型是全球首穿](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%A2%A6%E4%B8%80%E5%9C%BA%E9%80%A0%E5%9E%8B%E6%98%AF%E5%85%A8%E7%90%83%E9%A6%96%E7%A9%BF%23) `270.4K 🔥` `+38%`
1. [现在已经没人开腰疼的玩笑了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B7%B2%E7%BB%8F%E6%B2%A1%E4%BA%BA%E5%BC%80%E8%85%B0%E7%96%BC%E7%9A%84%E7%8E%A9%E7%AC%91%E4%BA%86%23) `221.6K 🔥` `+28%`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `209.6K 🔥` `+31%`
1. [超3000家外资企业追加在华投资](https://s.weibo.com/weibo?q=%23%E8%B6%853000%E5%AE%B6%E5%A4%96%E8%B5%84%E4%BC%81%E4%B8%9A%E8%BF%BD%E5%8A%A0%E5%9C%A8%E5%8D%8E%E6%8A%95%E8%B5%84%23) `785.4K 🔥`
1. [侯明昊长生骨开机应援 (Hou Minghao’s Immortal Bone starts to support)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E9%95%BF%E7%94%9F%E9%AA%A8%E5%BC%80%E6%9C%BA%E5%BA%94%E6%8F%B4%23) `238.0K 🔥`
1. [毒纸尿裤事件反转再反转](https://s.weibo.com/weibo?q=%23%E6%AF%92%E7%BA%B8%E5%B0%BF%E8%A3%A4%E4%BA%8B%E4%BB%B6%E5%8F%8D%E8%BD%AC%E5%86%8D%E5%8F%8D%E8%BD%AC%23) `229.9K 🔥`
1. [虞书欣长生骨第一天定妆](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%95%BF%E7%94%9F%E9%AA%A8%E7%AC%AC%E4%B8%80%E5%A4%A9%E5%AE%9A%E5%A6%86%23) `178.3K 🔥`
1. [德国捂嘴合影全员红牌预定 (All German players posed for a photo covering their mouths and booked red cards)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E6%8D%82%E5%98%B4%E5%90%88%E5%BD%B1%E5%85%A8%E5%91%98%E7%BA%A2%E7%89%8C%E9%A2%84%E5%AE%9A%23) `172.5K 🔥`
1. [明天将是中国球迷的主场 (Tomorrow will be the home court for Chinese fans)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%A4%A9%E5%B0%86%E6%98%AF%E4%B8%AD%E5%9B%BD%E7%90%83%E8%BF%B7%E7%9A%84%E4%B8%BB%E5%9C%BA%23) `2.1M 🔥` `-21%`
1. [长大后终于理解了妈妈的解冻焦虑](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E4%BA%86%E5%A6%88%E5%A6%88%E7%9A%84%E8%A7%A3%E5%86%BB%E7%84%A6%E8%99%91%23) `445.8K 🔥` `-43%`
1. [头一次见把优点全穿出来的](https://s.weibo.com/weibo?q=%23%E5%A4%B4%E4%B8%80%E6%AC%A1%E8%A7%81%E6%8A%8A%E4%BC%98%E7%82%B9%E5%85%A8%E7%A9%BF%E5%87%BA%E6%9D%A5%E7%9A%84%23) `404.2K 🔥` `-45%`
1. [田曦薇宋威龙亚洲内容大赏出发图](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%AE%8B%E5%A8%81%E9%BE%99%E4%BA%9A%E6%B4%B2%E5%86%85%E5%AE%B9%E5%A4%A7%E8%B5%8F%E5%87%BA%E5%8F%91%E5%9B%BE%23) `228.3K 🔥` `-21%`
1. [土耳其球迷暴怒](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E7%90%83%E8%BF%B7%E6%9A%B4%E6%80%92%23) `180.8K 🔥` `-82%`
1. [昨天的孙怡可以娶今天的孙怡](https://s.weibo.com/weibo?q=%23%E6%98%A8%E5%A4%A9%E7%9A%84%E5%AD%99%E6%80%A1%E5%8F%AF%E4%BB%A5%E5%A8%B6%E4%BB%8A%E5%A4%A9%E7%9A%84%E5%AD%99%E6%80%A1%23) `165.8K 🔥` `-42%`

Updated at 2026-06-20 20:17:56

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
