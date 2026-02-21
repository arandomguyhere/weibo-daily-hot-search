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

1. [男子自驾游开10小时后弃车换高铁 (Man abandons car for high-speed train after 10 hours of self-driving trip)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%87%AA%E9%A9%BE%E6%B8%B8%E5%BC%8010%E5%B0%8F%E6%97%B6%E5%90%8E%E5%BC%83%E8%BD%A6%E6%8D%A2%E9%AB%98%E9%93%81%23) `153.2K 🔥` `NEW`
1. [桔子酒店门禁都没装好为何营业](https://s.weibo.com/weibo?q=%23%E6%A1%94%E5%AD%90%E9%85%92%E5%BA%97%E9%97%A8%E7%A6%81%E9%83%BD%E6%B2%A1%E8%A3%85%E5%A5%BD%E4%B8%BA%E4%BD%95%E8%90%A5%E4%B8%9A%23) `149.5K 🔥` `NEW`
1. [林孝埈谈黄大宪](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E8%B0%88%E9%BB%84%E5%A4%A7%E5%AE%AA%23) `137.0K 🔥` `NEW`
1. [刘涛回应妈祖照被设为屏保](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E5%9B%9E%E5%BA%94%E5%A6%88%E7%A5%96%E7%85%A7%E8%A2%AB%E8%AE%BE%E4%B8%BA%E5%B1%8F%E4%BF%9D%23) `130.7K 🔥` `NEW`
1. [小伙撕去年对联天塌了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E6%92%95%E5%8E%BB%E5%B9%B4%E5%AF%B9%E8%81%94%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `126.2K 🔥` `NEW`
1. [打王者我只佩服一种人](https://s.weibo.com/weibo?q=%23%E6%89%93%E7%8E%8B%E8%80%85%E6%88%91%E5%8F%AA%E4%BD%A9%E6%9C%8D%E4%B8%80%E7%A7%8D%E4%BA%BA%23) `92.5K 🔥` `NEW`
1. [上海财神庙2万多人通宵求财](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%B4%A2%E7%A5%9E%E5%BA%992%E4%B8%87%E5%A4%9A%E4%BA%BA%E9%80%9A%E5%AE%B5%E6%B1%82%E8%B4%A2%23) `90.9K 🔥` `NEW`
1. [中国空中技巧队2金3铜](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A9%BA%E4%B8%AD%E6%8A%80%E5%B7%A7%E9%98%9F2%E9%87%913%E9%93%9C%23) `88.2K 🔥` `NEW`
1. [超过三行我就烦了](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%BF%87%E4%B8%89%E8%A1%8C%E6%88%91%E5%B0%B1%E7%83%A6%E4%BA%86%23) `81.6K 🔥` `NEW`
1. [家属称平顶山被打女孩视力听力受影响](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E7%A7%B0%E5%B9%B3%E9%A1%B6%E5%B1%B1%E8%A2%AB%E6%89%93%E5%A5%B3%E5%AD%A9%E8%A7%86%E5%8A%9B%E5%90%AC%E5%8A%9B%E5%8F%97%E5%BD%B1%E5%93%8D%23) `874.0K 🔥` `+325%`
1. [刘涛演妈祖 三次圣杯 (Liu Tao plays Mazu in Three Holy Grails)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E6%BC%94%E5%A6%88%E7%A5%96%20%E4%B8%89%E6%AC%A1%E5%9C%A3%E6%9D%AF%23) `324.5K 🔥` `+51%`
1. [教练说苏翊鸣夺金后一直想吐 (The coach said that Su Yiming felt like vomiting after winning the gold medal.)](https://s.weibo.com/weibo?q=%23%E6%95%99%E7%BB%83%E8%AF%B4%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%A4%BA%E9%87%91%E5%90%8E%E4%B8%80%E7%9B%B4%E6%83%B3%E5%90%90%23) `302.8K 🔥` `+169%`
1. [现在就出发](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `258.9K 🔥` `+171%`
1. [这位粤C车主你的鸭子掉了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BD%8D%E7%B2%A4C%E8%BD%A6%E4%B8%BB%E4%BD%A0%E7%9A%84%E9%B8%AD%E5%AD%90%E6%8E%89%E4%BA%86%23) `249.4K 🔥` `+98%`
1. [沙尘暴 (sandstorm)](https://s.weibo.com/weibo?q=%23%E6%B2%99%E5%B0%98%E6%9A%B4%23) `91.2K 🔥` `+24%`
1. [中国队空中技巧混团铜牌 (Chinese team aerials mixed team bronze medal)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%A9%BA%E4%B8%AD%E6%8A%80%E5%B7%A7%E6%B7%B7%E5%9B%A2%E9%93%9C%E7%89%8C%23) `1.2M 🔥`
1. [多地气温断崖式下跌](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E6%B0%94%E6%B8%A9%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E8%B7%8C%23) `673.8K 🔥`
1. [王心迪第二跳失误](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E8%BF%AA%E7%AC%AC%E4%BA%8C%E8%B7%B3%E5%A4%B1%E8%AF%AF%23) `411.9K 🔥`
1. [黄晓明曝艺人红毯上假摔 (Huang Xiaoming revealed that an artist flopped on the red carpet)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E6%9B%9D%E8%89%BA%E4%BA%BA%E7%BA%A2%E6%AF%AF%E4%B8%8A%E5%81%87%E6%91%94%23) `361.3K 🔥`
1. [舅舅送外甥女30斤银砖当压岁钱 (Uncle gives niece 30 kilograms of silver bricks as lucky money)](https://s.weibo.com/weibo?q=%23%E8%88%85%E8%88%85%E9%80%81%E5%A4%96%E7%94%A5%E5%A5%B330%E6%96%A4%E9%93%B6%E7%A0%96%E5%BD%93%E5%8E%8B%E5%B2%81%E9%92%B1%23) `301.4K 🔥`
1. [我家那小子 (That boy of mine)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%23) `233.1K 🔥`
1. [米兰冬奥短道5000接力棒次失误 (Milan Winter Olympics short track 5000 relay baton error)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E7%9F%AD%E9%81%935000%E6%8E%A5%E5%8A%9B%E6%A3%92%E6%AC%A1%E5%A4%B1%E8%AF%AF%23) `222.0K 🔥`
1. [精装朋友圈的苦](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E8%A3%85%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%9A%84%E8%8B%A6%23) `217.0K 🔥`
1. [王濛批评短道合理吗 (Is it reasonable for Wang Meng to criticize short tracks?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%89%B9%E8%AF%84%E7%9F%AD%E9%81%93%E5%90%88%E7%90%86%E5%90%97%23) `200.3K 🔥`
1. [金价 (gold price)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `165.4K 🔥`
1. [宋雨琦中韩人脉这一块](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E4%B8%AD%E9%9F%A9%E4%BA%BA%E8%84%89%E8%BF%99%E4%B8%80%E5%9D%97%23) `145.1K 🔥`
1. [六金郑元松分手](https://s.weibo.com/weibo?q=%23%E5%85%AD%E9%87%91%E9%83%91%E5%85%83%E6%9D%BE%E5%88%86%E6%89%8B%23) `140.4K 🔥`
1. [白鹿发了37张照片 (Bailu posted 37 photos)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%91%E4%BA%8637%E5%BC%A0%E7%85%A7%E7%89%87%23) `135.2K 🔥`
1. [刘宇宁直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%23) `126.1K 🔥`
1. [鹿晗编脏辫可以不洗](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%BC%96%E8%84%8F%E8%BE%AB%E5%8F%AF%E4%BB%A5%E4%B8%8D%E6%B4%97%23) `122.7K 🔥`
1. [你淡淡的人生顺顺的 (Your life is smooth and smooth)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%B7%A1%E6%B7%A1%E7%9A%84%E4%BA%BA%E7%94%9F%E9%A1%BA%E9%A1%BA%E7%9A%84%23) `108.8K 🔥`
1. [在胖东来排队超4小时顾客发声 (Customers who queued for more than 4 hours in Pandong Lai spoke out)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E8%83%96%E4%B8%9C%E6%9D%A5%E6%8E%92%E9%98%9F%E8%B6%854%E5%B0%8F%E6%97%B6%E9%A1%BE%E5%AE%A2%E5%8F%91%E5%A3%B0%23) `104.3K 🔥`
1. [第一批返程的人已经堵在高速了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E8%BF%94%E7%A8%8B%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%A0%B5%E5%9C%A8%E9%AB%98%E9%80%9F%E4%BA%86%23) `103.6K 🔥`
1. [偶遇李昀锐合照 (Encountered Li Yunrui and took a photo)](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E6%9D%8E%E6%98%80%E9%94%90%E5%90%88%E7%85%A7%23) `99.5K 🔥`
1. [易烊千玺无实物表演被撞](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%97%A0%E5%AE%9E%E7%89%A9%E8%A1%A8%E6%BC%94%E8%A2%AB%E6%92%9E%23) `97.2K 🔥`
1. [把撒贝宁拍成何以琛了](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E6%92%92%E8%B4%9D%E5%AE%81%E6%8B%8D%E6%88%90%E4%BD%95%E4%BB%A5%E7%90%9B%E4%BA%86%23) `93.3K 🔥`
1. [近视眼的世界真这么离谱吗](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86%E7%9C%BC%E7%9A%84%E4%B8%96%E7%95%8C%E7%9C%9F%E8%BF%99%E4%B9%88%E7%A6%BB%E8%B0%B1%E5%90%97%23) `90.9K 🔥`
1. [00后月租200住养老院2年 (Post-00s rent 200 per month and live in a nursing home for 2 years)](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E6%9C%88%E7%A7%9F200%E4%BD%8F%E5%85%BB%E8%80%81%E9%99%A22%E5%B9%B4%23) `82.9K 🔥`
1. [孟子义沈妙](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%B2%88%E5%A6%99%23) `77.2K 🔥`
1. [镖人阿育娅 换人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E9%98%BF%E8%82%B2%E5%A8%85%20%E6%8D%A2%E4%BA%BA%23) `72.7K 🔥`
1. [镖人票房还有救吗](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E8%BF%98%E6%9C%89%E6%95%91%E5%90%97%23) `71.9K 🔥`
1. [徐梦桃王心迪李天马出战混团 (Xu Mengtao, Wang Xindi and Li Tianma join the mixed group)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%8E%8B%E5%BF%83%E8%BF%AA%E6%9D%8E%E5%A4%A9%E9%A9%AC%E5%87%BA%E6%88%98%E6%B7%B7%E5%9B%A2%23) `547.2K 🔥` `-50%`
1. [idle演唱会](https://s.weibo.com/weibo?q=%23idle%E6%BC%94%E5%94%B1%E4%BC%9A%23) `258.6K 🔥` `-21%`
1. [陈丽君拍摄镖人时向梁家辉提了个请求](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E6%8B%8D%E6%91%84%E9%95%96%E4%BA%BA%E6%97%B6%E5%90%91%E6%A2%81%E5%AE%B6%E8%BE%89%E6%8F%90%E4%BA%86%E4%B8%AA%E8%AF%B7%E6%B1%82%23) `154.7K 🔥` `-25%`
1. [徐梦桃第一跳81.99分 (Xu Mengtao’s first jump scored 81.99 points)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%AC%AC%E4%B8%80%E8%B7%B381.99%E5%88%86%23) `123.5K 🔥` `-43%`
1. [徐梦桃第二跳96.59分 (Xu Mengtao’s second jump scored 96.59 points)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%AC%AC%E4%BA%8C%E8%B7%B396.59%E5%88%86%23) `113.5K 🔥` `-21%`
1. [回村后用的都是名牌货](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E6%9D%91%E5%90%8E%E7%94%A8%E7%9A%84%E9%83%BD%E6%98%AF%E5%90%8D%E7%89%8C%E8%B4%A7%23) `97.4K 🔥` `-21%`
1. [李天马第一跳116.74分](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%A4%A9%E9%A9%AC%E7%AC%AC%E4%B8%80%E8%B7%B3116.74%E5%88%86%23) `87.1K 🔥` `-40%`
1. [烤肠商战 (Sausage business war)](https://s.weibo.com/weibo?q=%23%E7%83%A4%E8%82%A0%E5%95%86%E6%88%98%23) `76.3K 🔥` `-36%`

Updated at 2026-02-21 19:49:14

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
