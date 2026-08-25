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

1. [紫檀在海南昌江登陆 (Rosewood lands in Changjiang, Hainan)](https://s.weibo.com/weibo?q=%23%E7%B4%AB%E6%AA%80%E5%9C%A8%E6%B5%B7%E5%8D%97%E6%98%8C%E6%B1%9F%E7%99%BB%E9%99%86%23) `463.2K 🔥` `NEW`
1. [乳房触诊当事医生称已起诉](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A%E5%BD%93%E4%BA%8B%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%B7%B2%E8%B5%B7%E8%AF%89%23) `446.1K 🔥` `NEW`
1. [时代少年团空降评论区](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%A9%BA%E9%99%8D%E8%AF%84%E8%AE%BA%E5%8C%BA%23) `439.9K 🔥` `NEW`
1. [阴阳师](https://s.weibo.com/weibo?q=%23%E9%98%B4%E9%98%B3%E5%B8%88%23) `428.0K 🔥` `NEW`
1. [赵丽颖比任何人都爱惜自己的羽毛](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%AF%94%E4%BB%BB%E4%BD%95%E4%BA%BA%E9%83%BD%E7%88%B1%E6%83%9C%E8%87%AA%E5%B7%B1%E7%9A%84%E7%BE%BD%E6%AF%9B%23) `427.9K 🔥` `NEW`
1. [金鹰奖 错别字](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E9%94%99%E5%88%AB%E5%AD%97%23) `345.5K 🔥` `NEW`
1. [在韩失联女生已在国内找到工作](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E5%B7%B2%E5%9C%A8%E5%9B%BD%E5%86%85%E6%89%BE%E5%88%B0%E5%B7%A5%E4%BD%9C%23) `242.3K 🔥` `NEW`
1. [炒菜不开油烟机等于吸二手烟吗](https://s.weibo.com/weibo?q=%23%E7%82%92%E8%8F%9C%E4%B8%8D%E5%BC%80%E6%B2%B9%E7%83%9F%E6%9C%BA%E7%AD%89%E4%BA%8E%E5%90%B8%E4%BA%8C%E6%89%8B%E7%83%9F%E5%90%97%23) `205.4K 🔥` `NEW`
1. [老人容易在厨房犯哪些错](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%AE%B9%E6%98%93%E5%9C%A8%E5%8E%A8%E6%88%BF%E7%8A%AF%E5%93%AA%E4%BA%9B%E9%94%99%23) `193.7K 🔥` `NEW`
1. [德芙靠狗血剧情博眼球底线何在](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E8%8A%99%E9%9D%A0%E7%8B%97%E8%A1%80%E5%89%A7%E6%83%85%E5%8D%9A%E7%9C%BC%E7%90%83%E5%BA%95%E7%BA%BF%E4%BD%95%E5%9C%A8%23) `187.9K 🔥` `NEW`
1. [TOP登陆少年组合重演唱会歌单 (TOP appears on boy group’s reunion concert playlist)](https://s.weibo.com/weibo?q=%23TOP%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%E7%BB%84%E5%90%88%E9%87%8D%E6%BC%94%E5%94%B1%E4%BC%9A%E6%AD%8C%E5%8D%95%23) `174.3K 🔥` `NEW`
1. [宏胜集团人力资源部长寇静被免职](https://s.weibo.com/weibo?q=%23%E5%AE%8F%E8%83%9C%E9%9B%86%E5%9B%A2%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%90%E9%83%A8%E9%95%BF%E5%AF%87%E9%9D%99%E8%A2%AB%E5%85%8D%E8%81%8C%23) `148.4K 🔥` `NEW`
1. [乌尔善再不拍AI都替他拍完了](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%B0%94%E5%96%84%E5%86%8D%E4%B8%8D%E6%8B%8DAI%E9%83%BD%E6%9B%BF%E4%BB%96%E6%8B%8D%E5%AE%8C%E4%BA%86%23) `146.2K 🔥` `NEW`
1. [新加坡新生儿至17岁可获约37万补贴](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%96%B0%E7%94%9F%E5%84%BF%E8%87%B317%E5%B2%81%E5%8F%AF%E8%8E%B7%E7%BA%A637%E4%B8%87%E8%A1%A5%E8%B4%B4%23) `146.0K 🔥` `NEW`
1. [多款APP被通报](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BEAPP%E8%A2%AB%E9%80%9A%E6%8A%A5%23) `1.1M 🔥` `+38%`
1. [中国连续17年保持全球第二大进口市场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%BF%9E%E7%BB%AD17%E5%B9%B4%E4%BF%9D%E6%8C%81%E5%85%A8%E7%90%83%E7%AC%AC%E4%BA%8C%E5%A4%A7%E8%BF%9B%E5%8F%A3%E5%B8%82%E5%9C%BA%23) `1.0M 🔥` `+56%`
1. [中国好药各有真招](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%BD%E8%8D%AF%E5%90%84%E6%9C%89%E7%9C%9F%E6%8B%9B%23) `1.0M 🔥` `+51%`
1. [女子用3年垃圾桶才发现用错了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A83%E5%B9%B4%E5%9E%83%E5%9C%BE%E6%A1%B6%E6%89%8D%E5%8F%91%E7%8E%B0%E7%94%A8%E9%94%99%E4%BA%86%23) `1.0M 🔥` `+56%`
1. [德芙文案 翻车](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E8%8A%99%E6%96%87%E6%A1%88%20%E7%BF%BB%E8%BD%A6%23) `912.4K 🔥` `+42%`
1. [金鹰奖提名名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `894.6K 🔥` `+48%`
1. [被奈雪这杯酸奶昔治愈了 (Healed by Nayuki’s yogurt smoothie)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A5%88%E9%9B%AA%E8%BF%99%E6%9D%AF%E9%85%B8%E5%A5%B6%E6%98%94%E6%B2%BB%E6%84%88%E4%BA%86%23) `666.2K 🔥` `+45%`
1. [金鹰奖热门男女主掉提名单 (Golden Eagle Awards popular male and female protagonists drop nominations)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E7%83%AD%E9%97%A8%E7%94%B7%E5%A5%B3%E4%B8%BB%E6%8E%89%E6%8F%90%E5%90%8D%E5%8D%95%23) `458.6K 🔥` `+68%`
1. [什么行为让你觉得朋友不能深交](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E8%A1%8C%E4%B8%BA%E8%AE%A9%E4%BD%A0%E8%A7%89%E5%BE%97%E6%9C%8B%E5%8F%8B%E4%B8%8D%E8%83%BD%E6%B7%B1%E4%BA%A4%23) `287.8K 🔥` `+80%`
1. [新加坡未来每名孩童可获32万元补助](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%9C%AA%E6%9D%A5%E6%AF%8F%E5%90%8D%E5%AD%A9%E7%AB%A5%E5%8F%AF%E8%8E%B732%E4%B8%87%E5%85%83%E8%A1%A5%E5%8A%A9%23) `254.5K 🔥` `+37%`
1. [日本安排大量运动员入住集装箱房](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%AE%89%E6%8E%92%E5%A4%A7%E9%87%8F%E8%BF%90%E5%8A%A8%E5%91%98%E5%85%A5%E4%BD%8F%E9%9B%86%E8%A3%85%E7%AE%B1%E6%88%BF%23) `242.4K 🔥` `+52%`
1. [警方确认失联中国女生无韩出境记录](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E7%A1%AE%E8%AE%A4%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E6%97%A0%E9%9F%A9%E5%87%BA%E5%A2%83%E8%AE%B0%E5%BD%95%23) `1.1M 🔥`
1. [原来大家都是这样防止被套话的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E9%98%B2%E6%AD%A2%E8%A2%AB%E5%A5%97%E8%AF%9D%E7%9A%84%23) `558.7K 🔥`
1. [网传爱情公寓回归季阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%9B%9E%E5%BD%92%E5%AD%A3%E9%98%B5%E5%AE%B9%23) `467.5K 🔥`
1. [赵丽颖突发身体不适](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%AA%81%E5%8F%91%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `452.3K 🔥`
1. [朱志鑫二周年内场黄海](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E4%BA%8C%E5%91%A8%E5%B9%B4%E5%86%85%E5%9C%BA%E9%BB%84%E6%B5%B7%23) `428.8K 🔥`
1. [全球首个6nm晶圆级垂直堆叠芯片](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E4%B8%AA6nm%E6%99%B6%E5%9C%86%E7%BA%A7%E5%9E%82%E7%9B%B4%E5%A0%86%E5%8F%A0%E8%8A%AF%E7%89%87%23) `427.9K 🔥`
1. [白鹿未获金鹰奖提名](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9C%AA%E8%8E%B7%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%23) `427.8K 🔥`
1. [金价飞涨原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%A3%9E%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `380.6K 🔥`
1. [欢子工作室质问披哥](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%B4%A8%E9%97%AE%E6%8A%AB%E5%93%A5%23) `346.4K 🔥`
1. [考公女子在星巴克撑伞备考](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%85%AC%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%98%9F%E5%B7%B4%E5%85%8B%E6%92%91%E4%BC%9E%E5%A4%87%E8%80%83%23) `330.0K 🔥`
1. [鞠婧祎万花世界古董高定](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E5%8F%A4%E8%91%A3%E9%AB%98%E5%AE%9A%23) `243.7K 🔥`
1. [原来不是挂面不好吃](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E6%8C%82%E9%9D%A2%E4%B8%8D%E5%A5%BD%E5%90%83%23) `224.9K 🔥`
1. [苏新皓徐州演唱会红海](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%BE%90%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E7%BA%A2%E6%B5%B7%23) `209.3K 🔥`
1. [孙俪掉提金鹰奖](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%8E%89%E6%8F%90%E9%87%91%E9%B9%B0%E5%A5%96%23) `176.6K 🔥`
1. [藏海传回应提名](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A0%E5%9B%9E%E5%BA%94%E6%8F%90%E5%90%8D%23) `152.2K 🔥`
1. [爱情公寓](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%23) `146.8K 🔥`
1. [爱情公寓 王冠](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%20%E7%8E%8B%E5%86%A0%23) `310.5K 🔥` `-24%`
1. [杨幂掉提](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8E%89%E6%8F%90%23) `296.4K 🔥` `-23%`
1. [乳房触诊20多次后发现结节摸不到](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A20%E5%A4%9A%E6%AC%A1%E5%90%8E%E5%8F%91%E7%8E%B0%E7%BB%93%E8%8A%82%E6%91%B8%E4%B8%8D%E5%88%B0%23) `269.8K 🔥` `-29%`
1. [工信部组合拳叫停速成车乱象](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%BB%84%E5%90%88%E6%8B%B3%E5%8F%AB%E5%81%9C%E9%80%9F%E6%88%90%E8%BD%A6%E4%B9%B1%E8%B1%A1%23) `242.3K 🔥` `-46%`
1. [张元英安宥真小分队出道](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E5%AE%89%E5%AE%A5%E7%9C%9F%E5%B0%8F%E5%88%86%E9%98%9F%E5%87%BA%E9%81%93%23) `242.3K 🔥` `-30%`
1. [金鹰奖最佳男主](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%23) `240.0K 🔥` `-31%`
1. [乳房触诊当事医生称已提交诊室视频](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A%E5%BD%93%E4%BA%8B%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%B7%B2%E6%8F%90%E4%BA%A4%E8%AF%8A%E5%AE%A4%E8%A7%86%E9%A2%91%23) `209.5K 🔥` `-31%`
1. [85岁爷爷把8岁自闭孙子当正常娃带](https://s.weibo.com/weibo?q=%2385%E5%B2%81%E7%88%B7%E7%88%B7%E6%8A%8A8%E5%B2%81%E8%87%AA%E9%97%AD%E5%AD%99%E5%AD%90%E5%BD%93%E6%AD%A3%E5%B8%B8%E5%A8%83%E5%B8%A6%23) `184.5K 🔥` `-21%`
1. [成都蛋烘糕奶奶被镜头霸凌](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E8%9B%8B%E7%83%98%E7%B3%95%E5%A5%B6%E5%A5%B6%E8%A2%AB%E9%95%9C%E5%A4%B4%E9%9C%B8%E5%87%8C%23) `155.0K 🔥` `-61%`
1. [杨幂生万物最大奖微博QUEEN (Yang Mi wins the biggest prize in all things Weibo QUEEN)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%94%9F%E4%B8%87%E7%89%A9%E6%9C%80%E5%A4%A7%E5%A5%96%E5%BE%AE%E5%8D%9AQUEEN%23) `154.4K 🔥` `-55%`

Updated at 2026-08-25 19:52:47

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
