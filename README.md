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

1. [多款手机正式涨价](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BE%E6%89%8B%E6%9C%BA%E6%AD%A3%E5%BC%8F%E6%B6%A8%E4%BB%B7%23) `1.7M 🔥` `NEW`
1. [尼泊尔泥石流974人遇难](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81974%E4%BA%BA%E9%81%87%E9%9A%BE%23) `927.8K 🔥` `NEW`
1. [智界RX科技定义新驾趣](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CRX%E7%A7%91%E6%8A%80%E5%AE%9A%E4%B9%89%E6%96%B0%E9%A9%BE%E8%B6%A3%23) `533.3K 🔥` `NEW`
1. [栾念 该死的好看](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%20%E8%AF%A5%E6%AD%BB%E7%9A%84%E5%A5%BD%E7%9C%8B%23) `442.2K 🔥` `NEW`
1. [美国炸鸡巨头中国首店开业](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%82%B8%E9%B8%A1%E5%B7%A8%E5%A4%B4%E4%B8%AD%E5%9B%BD%E9%A6%96%E5%BA%97%E5%BC%80%E4%B8%9A%23) `404.3K 🔥` `NEW`
1. [开学健康第一课](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AD%A6%E5%81%A5%E5%BA%B7%E7%AC%AC%E4%B8%80%E8%AF%BE%23) `364.4K 🔥` `NEW`
1. [杨瀚森将缺席后续世预赛](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E5%B0%86%E7%BC%BA%E5%B8%AD%E5%90%8E%E7%BB%AD%E4%B8%96%E9%A2%84%E8%B5%9B%23) `350.3K 🔥` `NEW`
1. [库克正式卸任苹果CEO](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E6%AD%A3%E5%BC%8F%E5%8D%B8%E4%BB%BB%E8%8B%B9%E6%9E%9CCEO%23) `342.5K 🔥` `NEW`
1. [雷军回应小米汽车8月交付量](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A68%E6%9C%88%E4%BA%A4%E4%BB%98%E9%87%8F%23) `305.8K 🔥` `NEW`
1. [杀害中国女生嫌犯信息公开](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%8A%AF%E4%BF%A1%E6%81%AF%E5%85%AC%E5%BC%80%23) `305.2K 🔥` `NEW`
1. [杀害中国女生嫌犯正面照](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%8A%AF%E6%AD%A3%E9%9D%A2%E7%85%A7%23) `304.8K 🔥` `NEW`
1. [高梓淇恋情](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A2%93%E6%B7%87%E6%81%8B%E6%83%85%23) `303.4K 🔥` `NEW`
1. [深圳校服 去商场自己买](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%A0%A1%E6%9C%8D%20%E5%8E%BB%E5%95%86%E5%9C%BA%E8%87%AA%E5%B7%B1%E4%B9%B0%23) `303.0K 🔥` `NEW`
1. [上一辈未必有现在的00后能省](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%B8%80%E8%BE%88%E6%9C%AA%E5%BF%85%E6%9C%89%E7%8E%B0%E5%9C%A8%E7%9A%8400%E5%90%8E%E8%83%BD%E7%9C%81%23) `302.0K 🔥` `NEW`
1. [赵今麦躺在王安宇的怀里](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%BA%BA%E5%9C%A8%E7%8E%8B%E5%AE%89%E5%AE%87%E7%9A%84%E6%80%80%E9%87%8C%23) `301.9K 🔥` `NEW`
1. [宇树消防机器人](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%B6%88%E9%98%B2%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `301.2K 🔥` `NEW`
1. [恩佐长文](https://s.weibo.com/weibo?q=%23%E6%81%A9%E4%BD%90%E9%95%BF%E6%96%87%23) `300.5K 🔥` `NEW`
1. [包贝尔导包文婧主演新剧38万人预约](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%AF%BC%E5%8C%85%E6%96%87%E5%A9%A7%E4%B8%BB%E6%BC%94%E6%96%B0%E5%89%A738%E4%B8%87%E4%BA%BA%E9%A2%84%E7%BA%A6%23) `298.9K 🔥` `NEW`
1. [郑钦文终结柳托娃9连胜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BB%88%E7%BB%93%E6%9F%B3%E6%89%98%E5%A8%839%E8%BF%9E%E8%83%9C%23) `274.6K 🔥` `NEW`
1. [女孩起夜如厕误把电视柜当马桶坐塌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%B5%B7%E5%A4%9C%E5%A6%82%E5%8E%95%E8%AF%AF%E6%8A%8A%E7%94%B5%E8%A7%86%E6%9F%9C%E5%BD%93%E9%A9%AC%E6%A1%B6%E5%9D%90%E5%A1%8C%23) `267.0K 🔥` `NEW`
1. [官方通报女子被踢845个群被迫离职](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%B8%A2845%E4%B8%AA%E7%BE%A4%E8%A2%AB%E8%BF%AB%E7%A6%BB%E8%81%8C%23) `266.3K 🔥` `NEW`
1. [宋宁峰张婉婷带儿子新加坡吃早餐](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%AE%81%E5%B3%B0%E5%BC%A0%E5%A9%89%E5%A9%B7%E5%B8%A6%E5%84%BF%E5%AD%90%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%90%83%E6%97%A9%E9%A4%90%23) `261.9K 🔥` `NEW`
1. [开学了舅舅送别十位外甥](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AD%A6%E4%BA%86%E8%88%85%E8%88%85%E9%80%81%E5%88%AB%E5%8D%81%E4%BD%8D%E5%A4%96%E7%94%A5%23) `254.7K 🔥` `NEW`
1. [女主播男网友性行为后各自报警](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%92%AD%E7%94%B7%E7%BD%91%E5%8F%8B%E6%80%A7%E8%A1%8C%E4%B8%BA%E5%90%8E%E5%90%84%E8%87%AA%E6%8A%A5%E8%AD%A6%23) `250.9K 🔥` `NEW`
1. [医生幽默回应吃几个饺子就长胖](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%B9%BD%E9%BB%98%E5%9B%9E%E5%BA%94%E5%90%83%E5%87%A0%E4%B8%AA%E9%A5%BA%E5%AD%90%E5%B0%B1%E9%95%BF%E8%83%96%23) `174.8K 🔥` `NEW`
1. [九月](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E6%9C%88%23) `171.6K 🔥` `NEW`
1. [陈粒 Ryan](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%B2%92%20Ryan%23) `163.7K 🔥` `NEW`
1. [蓝天救援队回应救援车售卖祭祀用品](https://s.weibo.com/weibo?q=%23%E8%93%9D%E5%A4%A9%E6%95%91%E6%8F%B4%E9%98%9F%E5%9B%9E%E5%BA%94%E6%95%91%E6%8F%B4%E8%BD%A6%E5%94%AE%E5%8D%96%E7%A5%AD%E7%A5%80%E7%94%A8%E5%93%81%23) `149.3K 🔥` `NEW`
1. [王鸥曾说自己的性格不适合娱乐圈](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%E6%9B%BE%E8%AF%B4%E8%87%AA%E5%B7%B1%E7%9A%84%E6%80%A7%E6%A0%BC%E4%B8%8D%E9%80%82%E5%90%88%E5%A8%B1%E4%B9%90%E5%9C%88%23) `147.2K 🔥` `NEW`
1. [早春晴朗lumi亲自认证泡面头梗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97lumi%E4%BA%B2%E8%87%AA%E8%AE%A4%E8%AF%81%E6%B3%A1%E9%9D%A2%E5%A4%B4%E6%A2%97%23) `107.4K 🔥` `NEW`
1. [机票价又跳水](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E7%A5%A8%E4%BB%B7%E5%8F%88%E8%B7%B3%E6%B0%B4%23) `106.9K 🔥` `NEW`
1. [70后80后90后00后送孩子上小学](https://s.weibo.com/weibo?q=%2370%E5%90%8E80%E5%90%8E90%E5%90%8E00%E5%90%8E%E9%80%81%E5%AD%A9%E5%AD%90%E4%B8%8A%E5%B0%8F%E5%AD%A6%23) `104.6K 🔥` `NEW`
1. [胖东来员工休自由假去看演唱会](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%91%98%E5%B7%A5%E4%BC%91%E8%87%AA%E7%94%B1%E5%81%87%E5%8E%BB%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `104.6K 🔥` `NEW`
1. [FIFA致敬阿根廷队长](https://s.weibo.com/weibo?q=%23FIFA%E8%87%B4%E6%95%AC%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E9%95%BF%23) `101.0K 🔥` `NEW`
1. [李沐宸自曝演季洁压力大](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%90%E5%AE%B8%E8%87%AA%E6%9B%9D%E6%BC%94%E5%AD%A3%E6%B4%81%E5%8E%8B%E5%8A%9B%E5%A4%A7%23) `100.1K 🔥` `NEW`
1. [柳托娃落泪郑钦文拥抱](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%89%98%E5%A8%83%E8%90%BD%E6%B3%AA%E9%83%91%E9%92%A6%E6%96%87%E6%8B%A5%E6%8A%B1%23) `99.4K 🔥` `NEW`
1. [20项措施推动消费扩容升级](https://s.weibo.com/weibo?q=%2320%E9%A1%B9%E6%8E%AA%E6%96%BD%E6%8E%A8%E5%8A%A8%E6%B6%88%E8%B4%B9%E6%89%A9%E5%AE%B9%E5%8D%87%E7%BA%A7%23) `745.7K 🔥` `+39%`
1. [敖瑞鹏和孙千领奖像是在走T台](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E5%92%8C%E5%AD%99%E5%8D%83%E9%A2%86%E5%A5%96%E5%83%8F%E6%98%AF%E5%9C%A8%E8%B5%B0T%E5%8F%B0%23) `305.7K 🔥` `+151%`
1. [黄磊回应不再参加向往的生活](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%86%8D%E5%8F%82%E5%8A%A0%E5%90%91%E5%BE%80%E7%9A%84%E7%94%9F%E6%B4%BB%23) `303.9K 🔥` `+160%`
1. [孙千飞机上收到空姐的信](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E9%A3%9E%E6%9C%BA%E4%B8%8A%E6%94%B6%E5%88%B0%E7%A9%BA%E5%A7%90%E7%9A%84%E4%BF%A1%23) `302.8K 🔥` `+182%`
1. [子宫状态好的人经期有5个特点](https://s.weibo.com/weibo?q=%23%E5%AD%90%E5%AE%AB%E7%8A%B6%E6%80%81%E5%A5%BD%E7%9A%84%E4%BA%BA%E7%BB%8F%E6%9C%9F%E6%9C%895%E4%B8%AA%E7%89%B9%E7%82%B9%23) `300.0K 🔥` `+227%`
1. [日本男星回应电车内性侵高中女生](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E6%98%9F%E5%9B%9E%E5%BA%94%E7%94%B5%E8%BD%A6%E5%86%85%E6%80%A7%E4%BE%B5%E9%AB%98%E4%B8%AD%E5%A5%B3%E7%94%9F%23) `299.5K 🔥` `+234%`
1. [两小时演唱会休息了80分钟](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%B0%8F%E6%97%B6%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BC%91%E6%81%AF%E4%BA%8680%E5%88%86%E9%92%9F%23) `299.4K 🔥` `+167%`
1. [经常看书与不看书的差距有多大](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E5%B8%B8%E7%9C%8B%E4%B9%A6%E4%B8%8E%E4%B8%8D%E7%9C%8B%E4%B9%A6%E7%9A%84%E5%B7%AE%E8%B7%9D%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `157.1K 🔥` `+88%`
1. [办婚礼未领证男方去世判决结果](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%A9%9A%E7%A4%BC%E6%9C%AA%E9%A2%86%E8%AF%81%E7%94%B7%E6%96%B9%E5%8E%BB%E4%B8%96%E5%88%A4%E5%86%B3%E7%BB%93%E6%9E%9C%23) `156.8K 🔥` `+73%`
1. [沈腾评论关晓彤无米版徐福烩饭](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E8%AF%84%E8%AE%BA%E5%85%B3%E6%99%93%E5%BD%A4%E6%97%A0%E7%B1%B3%E7%89%88%E5%BE%90%E7%A6%8F%E7%83%A9%E9%A5%AD%23) `121.5K 🔥` `+45%`
1. [王鸥回复李小冉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%E5%9B%9E%E5%A4%8D%E6%9D%8E%E5%B0%8F%E5%86%89%23) `106.6K 🔥`
1. [AI小鸭机器人24小时售260万美元](https://s.weibo.com/weibo?q=%23AI%E5%B0%8F%E9%B8%AD%E6%9C%BA%E5%99%A8%E4%BA%BA24%E5%B0%8F%E6%97%B6%E5%94%AE260%E4%B8%87%E7%BE%8E%E5%85%83%23) `99.7K 🔥`
1. [六大行房贷余额少了5000多亿](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%A4%A7%E8%A1%8C%E6%88%BF%E8%B4%B7%E4%BD%99%E9%A2%9D%E5%B0%91%E4%BA%865000%E5%A4%9A%E4%BA%BF%23) `99.5K 🔥`
1. [一个超好用的情绪控制技巧](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E8%B6%85%E5%A5%BD%E7%94%A8%E7%9A%84%E6%83%85%E7%BB%AA%E6%8E%A7%E5%88%B6%E6%8A%80%E5%B7%A7%23) `368.1K 🔥` `-27%`
1. [郑钦文2比1柳托娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%872%E6%AF%941%E6%9F%B3%E6%89%98%E5%A8%83%23) `170.5K 🔥` `-79%`
1. [好直观的降本增效](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E7%9B%B4%E8%A7%82%E7%9A%84%E9%99%8D%E6%9C%AC%E5%A2%9E%E6%95%88%23) `114.8K 🔥` `-33%`

Updated at 2026-09-01 09:58:44

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
