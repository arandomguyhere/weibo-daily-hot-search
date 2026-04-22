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

1. [问界M9价格 (Ask the world about M9 price)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E4%BB%B7%E6%A0%BC%23) `904.3K 🔥` `NEW`
1. [乒乓球在美国火起来了](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E5%9C%A8%E7%BE%8E%E5%9B%BD%E7%81%AB%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `414.2K 🔥` `NEW`
1. [肯德基酱料正式收费](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E9%85%B1%E6%96%99%E6%AD%A3%E5%BC%8F%E6%94%B6%E8%B4%B9%23) `409.7K 🔥` `NEW`
1. [全球最大避孕套生产商警告](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%9C%80%E5%A4%A7%E9%81%BF%E5%AD%95%E5%A5%97%E7%94%9F%E4%BA%A7%E5%95%86%E8%AD%A6%E5%91%8A%23) `407.3K 🔥` `NEW`
1. [曝迪丽热巴和嘉行签了一年短约](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%92%8C%E5%98%89%E8%A1%8C%E7%AD%BE%E4%BA%86%E4%B8%80%E5%B9%B4%E7%9F%AD%E7%BA%A6%23) `382.4K 🔥` `NEW`
1. [女生受邀去泰国泼水节被转卖电诈园](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%8F%97%E9%82%80%E5%8E%BB%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82%E8%A2%AB%E8%BD%AC%E5%8D%96%E7%94%B5%E8%AF%88%E5%9B%AD%23) `373.3K 🔥` `NEW`
1. [中国第二条跨省地铁](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%AC%AC%E4%BA%8C%E6%9D%A1%E8%B7%A8%E7%9C%81%E5%9C%B0%E9%93%81%23) `355.1K 🔥` `NEW`
1. [男子称学位证16年后失效](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A7%B0%E5%AD%A6%E4%BD%8D%E8%AF%8116%E5%B9%B4%E5%90%8E%E5%A4%B1%E6%95%88%23) `337.6K 🔥` `NEW`
1. [孟佳唱跳版心愿便利贴](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E4%BD%B3%E5%94%B1%E8%B7%B3%E7%89%88%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%23) `252.7K 🔥` `NEW`
1. [慈母多败咪](https://s.weibo.com/weibo?q=%23%E6%85%88%E6%AF%8D%E5%A4%9A%E8%B4%A5%E5%92%AA%23) `240.7K 🔥` `NEW`
1. [CNN报道中国博主嘲讽美国信用 (CNN reports Chinese blogger mocks U.S. credibility)](https://s.weibo.com/weibo?q=%23CNN%E6%8A%A5%E9%81%93%E4%B8%AD%E5%9B%BD%E5%8D%9A%E4%B8%BB%E5%98%B2%E8%AE%BD%E7%BE%8E%E5%9B%BD%E4%BF%A1%E7%94%A8%23) `205.3K 🔥` `NEW`
1. [考研生人均1元拼网课被判共同赔4万](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E7%94%9F%E4%BA%BA%E5%9D%871%E5%85%83%E6%8B%BC%E7%BD%91%E8%AF%BE%E8%A2%AB%E5%88%A4%E5%85%B1%E5%90%8C%E8%B5%944%E4%B8%87%23) `203.0K 🔥` `NEW`
1. [58同城维修幽灵订单后续](https://s.weibo.com/weibo?q=%2358%E5%90%8C%E5%9F%8E%E7%BB%B4%E4%BF%AE%E5%B9%BD%E7%81%B5%E8%AE%A2%E5%8D%95%E5%90%8E%E7%BB%AD%23) `199.0K 🔥` `NEW`
1. [杨紫扛剧能力](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%89%9B%E5%89%A7%E8%83%BD%E5%8A%9B%23) `188.7K 🔥` `NEW`
1. [伊朗公开展示大杀器](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%BC%80%E5%B1%95%E7%A4%BA%E5%A4%A7%E6%9D%80%E5%99%A8%23) `162.1K 🔥` `NEW`
1. [尚界Z7 (Shangjie Z7)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%23) `1.6M 🔥` `+51%`
1. [尚界Z7大定](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%E5%A4%A7%E5%AE%9A%23) `581.5K 🔥` `+117%`
1. [李冰冰回怼记者](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%86%B0%E5%86%B0%E5%9B%9E%E6%80%BC%E8%AE%B0%E8%80%85%23) `403.8K 🔥` `+55%`
1. [现货黄金](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `337.8K 🔥` `+41%`
1. [中国在月球留下了新的名字](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9C%A8%E6%9C%88%E7%90%83%E7%95%99%E4%B8%8B%E4%BA%86%E6%96%B0%E7%9A%84%E5%90%8D%E5%AD%97%23) `734.6K 🔥`
1. [周杰伦王俊凯 中餐厅](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E4%B8%AD%E9%A4%90%E5%8E%85%23) `719.9K 🔥`
1. [儿童近视神药阿托品火爆 (Atropine, the miracle drug for children's myopia, is popular)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E7%AB%A5%E8%BF%91%E8%A7%86%E7%A5%9E%E8%8D%AF%E9%98%BF%E6%89%98%E5%93%81%E7%81%AB%E7%88%86%23) `553.7K 🔥`
1. [崔丽丽不再穿性侵时衣服出庭](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E4%B8%8D%E5%86%8D%E7%A9%BF%E6%80%A7%E4%BE%B5%E6%97%B6%E8%A1%A3%E6%9C%8D%E5%87%BA%E5%BA%AD%23) `392.5K 🔥`
1. [6种常见癌症的早期信号](https://s.weibo.com/weibo?q=%236%E7%A7%8D%E5%B8%B8%E8%A7%81%E7%99%8C%E7%97%87%E7%9A%84%E6%97%A9%E6%9C%9F%E4%BF%A1%E5%8F%B7%23) `357.8K 🔥`
1. [阿里千问数字人来了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E5%8D%83%E9%97%AE%E6%95%B0%E5%AD%97%E4%BA%BA%E6%9D%A5%E4%BA%86%23) `730.5K 🔥` `-31%`
1. [荣威火山联手合作家越AI汽车 (Roewe Volcano joins hands with Jiayue AI Automobile)](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E5%A8%81%E7%81%AB%E5%B1%B1%E8%81%94%E6%89%8B%E5%90%88%E4%BD%9C%E5%AE%B6%E8%B6%8AAI%E6%B1%BD%E8%BD%A6%23) `550.6K 🔥` `-31%`
1. [华晨宇演唱会延期](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BB%B6%E6%9C%9F%23) `509.4K 🔥` `-28%`
1. [日本人称手机设置为中文感觉很清爽](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E7%A7%B0%E6%89%8B%E6%9C%BA%E8%AE%BE%E7%BD%AE%E4%B8%BA%E4%B8%AD%E6%96%87%E6%84%9F%E8%A7%89%E5%BE%88%E6%B8%85%E7%88%BD%23) `439.0K 🔥` `-40%`
1. [朝鲜发声要求日本向中国道歉](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E5%8F%91%E5%A3%B0%E8%A6%81%E6%B1%82%E6%97%A5%E6%9C%AC%E5%90%91%E4%B8%AD%E5%9B%BD%E9%81%93%E6%AD%89%23) `416.1K 🔥` `-29%`
1. [朴信惠眼睛 断崖式衰老 (Park Shin Hye’s eyes are aging at a cliff)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E4%BF%A1%E6%83%A0%E7%9C%BC%E7%9D%9B%20%E6%96%AD%E5%B4%96%E5%BC%8F%E8%A1%B0%E8%80%81%23) `412.5K 🔥` `-26%`
1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `405.0K 🔥` `-21%`
1. [侯明昊 歌手2026 (Hou Minghao singer 2026)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%20%E6%AD%8C%E6%89%8B2026%23) `388.1K 🔥` `-28%`
1. [不要在上班的时候说分手](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%9C%A8%E4%B8%8A%E7%8F%AD%E7%9A%84%E6%97%B6%E5%80%99%E8%AF%B4%E5%88%86%E6%89%8B%23) `375.4K 🔥` `-33%`
1. [丈夫称崔丽丽遭性侵后判若两人](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E7%A7%B0%E5%B4%94%E4%B8%BD%E4%B8%BD%E9%81%AD%E6%80%A7%E4%BE%B5%E5%90%8E%E5%88%A4%E8%8B%A5%E4%B8%A4%E4%BA%BA%23) `370.0K 🔥` `-33%`
1. [女子脚踹保安前监控视频曝光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%84%9A%E8%B8%B9%E4%BF%9D%E5%AE%89%E5%89%8D%E7%9B%91%E6%8E%A7%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `369.6K 🔥` `-21%`
1. [崔丽丽躯体化反应很严重 (Cui Lili’s somatization reaction is very serious)](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E8%BA%AF%E4%BD%93%E5%8C%96%E5%8F%8D%E5%BA%94%E5%BE%88%E4%B8%A5%E9%87%8D%23) `364.5K 🔥` `-31%`
1. [Gucci别试探了](https://s.weibo.com/weibo?q=%23Gucci%E5%88%AB%E8%AF%95%E6%8E%A2%E4%BA%86%23) `363.5K 🔥` `-34%`
1. [IU转圈给刘仁娜展示小裙子](https://s.weibo.com/weibo?q=%23IU%E8%BD%AC%E5%9C%88%E7%BB%99%E5%88%98%E4%BB%81%E5%A8%9C%E5%B1%95%E7%A4%BA%E5%B0%8F%E8%A3%99%E5%AD%90%23) `359.0K 🔥` `-30%`
1. [湖南卫视再次恭喜自己](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E5%86%8D%E6%AC%A1%E6%81%AD%E5%96%9C%E8%87%AA%E5%B7%B1%23) `337.5K 🔥` `-32%`
1. [新世代宝马](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%96%E4%BB%A3%E5%AE%9D%E9%A9%AC%23) `278.8K 🔥` `-46%`
1. [全国首例性侵认定工伤案明日开庭](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E4%BE%8B%E6%80%A7%E4%BE%B5%E8%AE%A4%E5%AE%9A%E5%B7%A5%E4%BC%A4%E6%A1%88%E6%98%8E%E6%97%A5%E5%BC%80%E5%BA%AD%23) `272.2K 🔥` `-48%`
1. [内娱大爆的现偶](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%A4%A7%E7%88%86%E7%9A%84%E7%8E%B0%E5%81%B6%23) `226.2K 🔥` `-50%`
1. [陈妍希告了陈晓粉丝 (Chen Yanxi sued Chen Xiao fans)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%91%8A%E4%BA%86%E9%99%88%E6%99%93%E7%B2%89%E4%B8%9D%23) `196.2K 🔥` `-46%`
1. [日本黑帮大哥金盆洗手考入顶尖名校](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%BB%91%E5%B8%AE%E5%A4%A7%E5%93%A5%E9%87%91%E7%9B%86%E6%B4%97%E6%89%8B%E8%80%83%E5%85%A5%E9%A1%B6%E5%B0%96%E5%90%8D%E6%A0%A1%23) `193.0K 🔥` `-64%`
1. [王大陆讨债 失去的一定要拿回来](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A7%E9%99%86%E8%AE%A8%E5%80%BA%20%E5%A4%B1%E5%8E%BB%E7%9A%84%E4%B8%80%E5%AE%9A%E8%A6%81%E6%8B%BF%E5%9B%9E%E6%9D%A5%23) `188.4K 🔥` `-43%`
1. [体检无异常发现却是癌症晚期](https://s.weibo.com/weibo?q=%23%E4%BD%93%E6%A3%80%E6%97%A0%E5%BC%82%E5%B8%B8%E5%8F%91%E7%8E%B0%E5%8D%B4%E6%98%AF%E7%99%8C%E7%97%87%E6%99%9A%E6%9C%9F%23) `167.5K 🔥` `-53%`
1. [华晨宇直播时哽咽 (Hua Chenyu choked up during live broadcast)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E7%9B%B4%E6%92%AD%E6%97%B6%E5%93%BD%E5%92%BD%23) `166.2K 🔥` `-41%`
1. [AC米兰球员被曝参加集体嫖娼派对](https://s.weibo.com/weibo?q=%23AC%E7%B1%B3%E5%85%B0%E7%90%83%E5%91%98%E8%A2%AB%E6%9B%9D%E5%8F%82%E5%8A%A0%E9%9B%86%E4%BD%93%E5%AB%96%E5%A8%BC%E6%B4%BE%E5%AF%B9%23) `161.2K 🔥` `-71%`
1. [陈妍希申请强制执行](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E7%94%B3%E8%AF%B7%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%23) `159.7K 🔥` `-36%`
1. [问界M6起售价25.98万元](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM6%E8%B5%B7%E5%94%AE%E4%BB%B725.98%E4%B8%87%E5%85%83%23) `153.1K 🔥` `-72%`

Updated at 2026-04-22 23:51:02

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
