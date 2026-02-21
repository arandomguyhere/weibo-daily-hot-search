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

1. [女孩被当街暴打当地何以沉默两天 (Why did the girl stay silent for two days after she was beaten in the street?)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%A2%AB%E5%BD%93%E8%A1%97%E6%9A%B4%E6%89%93%E5%BD%93%E5%9C%B0%E4%BD%95%E4%BB%A5%E6%B2%89%E9%BB%98%E4%B8%A4%E5%A4%A9%23) `189.9K 🔥` `NEW`
1. [李天马第一跳116.74分](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%A4%A9%E9%A9%AC%E7%AC%AC%E4%B8%80%E8%B7%B3116.74%E5%88%86%23) `105.9K 🔥` `NEW`
1. [教练说苏翊鸣夺金后一直想吐](https://s.weibo.com/weibo?q=%23%E6%95%99%E7%BB%83%E8%AF%B4%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%A4%BA%E9%87%91%E5%90%8E%E4%B8%80%E7%9B%B4%E6%83%B3%E5%90%90%23) `100.2K 🔥` `NEW`
1. [GEN对战BFX](https://s.weibo.com/weibo?q=%23GEN%E5%AF%B9%E6%88%98BFX%23) `98.2K 🔥` `NEW`
1. [第一批返程的人已经堵在高速了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E8%BF%94%E7%A8%8B%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%A0%B5%E5%9C%A8%E9%AB%98%E9%80%9F%E4%BA%86%23) `87.7K 🔥` `NEW`
1. [00后在逛一种很新的博物馆](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%9C%A8%E9%80%9B%E4%B8%80%E7%A7%8D%E5%BE%88%E6%96%B0%E7%9A%84%E5%8D%9A%E7%89%A9%E9%A6%86%23) `84.7K 🔥` `NEW`
1. [全网都在帮济南找鳌鱼](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E9%83%BD%E5%9C%A8%E5%B8%AE%E6%B5%8E%E5%8D%97%E6%89%BE%E9%B3%8C%E9%B1%BC%23) `82.6K 🔥` `NEW`
1. [这几年吃亏的唯一原因](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%87%A0%E5%B9%B4%E5%90%83%E4%BA%8F%E7%9A%84%E5%94%AF%E4%B8%80%E5%8E%9F%E5%9B%A0%23) `75.4K 🔥` `NEW`
1. [徐梦桃说混合团体赛有信心](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E8%AF%B4%E6%B7%B7%E5%90%88%E5%9B%A2%E4%BD%93%E8%B5%9B%E6%9C%89%E4%BF%A1%E5%BF%83%23) `75.2K 🔥` `NEW`
1. [近视眼的世界真这么离谱吗](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86%E7%9C%BC%E7%9A%84%E4%B8%96%E7%95%8C%E7%9C%9F%E8%BF%99%E4%B9%88%E7%A6%BB%E8%B0%B1%E5%90%97%23) `69.3K 🔥` `NEW`
1. [黄晓明曝艺人红毯上假摔 (Huang Xiaoming revealed that an artist flopped on the red carpet)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E6%9B%9D%E8%89%BA%E4%BA%BA%E7%BA%A2%E6%AF%AF%E4%B8%8A%E5%81%87%E6%91%94%23) `342.3K 🔥` `+76%`
1. [王心迪第一跳116.29分 (Wang Xindi’s first jump was 116.29 points)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E8%BF%AA%E7%AC%AC%E4%B8%80%E8%B7%B3116.29%E5%88%86%23) `142.7K 🔥` `+107%`
1. [米兰冬奥短道5000接力棒次失误 (Milan Winter Olympics short track 5000 relay baton error)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E7%9F%AD%E9%81%935000%E6%8E%A5%E5%8A%9B%E6%A3%92%E6%AC%A1%E5%A4%B1%E8%AF%AF%23) `90.5K 🔥` `+22%`
1. [徐梦桃王心迪李天马出战混团](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%8E%8B%E5%BF%83%E8%BF%AA%E6%9D%8E%E5%A4%A9%E9%A9%AC%E5%87%BA%E6%88%98%E6%B7%B7%E5%9B%A2%23) `1.1M 🔥`
1. [舅舅送外甥女30斤银砖当压岁钱 (Uncle gives niece 30 kilograms of silver bricks as lucky money)](https://s.weibo.com/weibo?q=%23%E8%88%85%E8%88%85%E9%80%81%E5%A4%96%E7%94%A5%E5%A5%B330%E6%96%A4%E9%93%B6%E7%A0%96%E5%BD%93%E5%8E%8B%E5%B2%81%E9%92%B1%23) `774.4K 🔥`
1. [多地气温断崖式下跌](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E6%B0%94%E6%B8%A9%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E8%B7%8C%23) `650.3K 🔥`
1. [徐梦桃第一跳81.99分 (Xu Mengtao’s first jump scored 81.99 points)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%AC%AC%E4%B8%80%E8%B7%B381.99%E5%88%86%23) `337.5K 🔥`
1. [刘涛演妈祖 三次圣杯 (Liu Tao plays Mazu in Three Holy Grails)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E6%BC%94%E5%A6%88%E7%A5%96%20%E4%B8%89%E6%AC%A1%E5%9C%A3%E6%9D%AF%23) `275.5K 🔥`
1. [官方辟谣过年了轨道交通都跑熄火了](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E8%BF%87%E5%B9%B4%E4%BA%86%E8%BD%A8%E9%81%93%E4%BA%A4%E9%80%9A%E9%83%BD%E8%B7%91%E7%86%84%E7%81%AB%E4%BA%86%23) `242.6K 🔥`
1. [我家那小子 (That boy of mine)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%23) `240.1K 🔥`
1. [回村后用的都是名牌货](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E6%9D%91%E5%90%8E%E7%94%A8%E7%9A%84%E9%83%BD%E6%98%AF%E5%90%8D%E7%89%8C%E8%B4%A7%23) `162.8K 🔥`
1. [idle演唱会](https://s.weibo.com/weibo?q=%23idle%E6%BC%94%E5%94%B1%E4%BC%9A%23) `160.8K 🔥`
1. [精装朋友圈的苦](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E8%A3%85%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%9A%84%E8%8B%A6%23) `159.0K 🔥`
1. [陈丽君拍摄镖人时向梁家辉提了个请求](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E6%8B%8D%E6%91%84%E9%95%96%E4%BA%BA%E6%97%B6%E5%90%91%E6%A2%81%E5%AE%B6%E8%BE%89%E6%8F%90%E4%BA%86%E4%B8%AA%E8%AF%B7%E6%B1%82%23) `156.8K 🔥`
1. [王濛批评短道合理吗 (Is it reasonable for Wang Meng to criticize short tracks?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%89%B9%E8%AF%84%E7%9F%AD%E9%81%93%E5%90%88%E7%90%86%E5%90%97%23) `155.5K 🔥`
1. [金价 (gold price)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `153.5K 🔥`
1. [六金郑元松分手](https://s.weibo.com/weibo?q=%23%E5%85%AD%E9%87%91%E9%83%91%E5%85%83%E6%9D%BE%E5%88%86%E6%89%8B%23) `141.0K 🔥`
1. [宋雨琦中韩人脉这一块](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E4%B8%AD%E9%9F%A9%E4%BA%BA%E8%84%89%E8%BF%99%E4%B8%80%E5%9D%97%23) `137.4K 🔥`
1. [在胖东来排队超4小时顾客发声 (Customers who queued for more than 4 hours in Pandong Lai spoke out)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E8%83%96%E4%B8%9C%E6%9D%A5%E6%8E%92%E9%98%9F%E8%B6%854%E5%B0%8F%E6%97%B6%E9%A1%BE%E5%AE%A2%E5%8F%91%E5%A3%B0%23) `136.9K 🔥`
1. [偶遇李昀锐合照 (Encountered Li Yunrui and took a photo)](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E6%9D%8E%E6%98%80%E9%94%90%E5%90%88%E7%85%A7%23) `133.0K 🔥`
1. [白鹿发了37张照片 (Bailu posted 37 photos)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%91%E4%BA%8637%E5%BC%A0%E7%85%A7%E7%89%87%23) `129.9K 🔥`
1. [你淡淡的人生顺顺的](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%B7%A1%E6%B7%A1%E7%9A%84%E4%BA%BA%E7%94%9F%E9%A1%BA%E9%A1%BA%E7%9A%84%23) `129.0K 🔥`
1. [镖人票房还有救吗](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E8%BF%98%E6%9C%89%E6%95%91%E5%90%97%23) `114.3K 🔥`
1. [杭州天下第一财神庙幽默劝返 (The No. 1 Temple of Wealth in the World in Hangzhou humorously persuades people to return home)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%A4%A9%E4%B8%8B%E7%AC%AC%E4%B8%80%E8%B4%A2%E7%A5%9E%E5%BA%99%E5%B9%BD%E9%BB%98%E5%8A%9D%E8%BF%94%23) `104.7K 🔥`
1. [大年初五民众打卡财政部 (On the fifth day of the Lunar New Year, people punched in at the Ministry of Finance)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%BA%94%E6%B0%91%E4%BC%97%E6%89%93%E5%8D%A1%E8%B4%A2%E6%94%BF%E9%83%A8%23) `100.4K 🔥`
1. [沈腾这下不怕票房被黄渤超过了 (Shen Teng is not afraid of being surpassed by Huang Bo at the box office now)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E8%BF%99%E4%B8%8B%E4%B8%8D%E6%80%95%E7%A5%A8%E6%88%BF%E8%A2%AB%E9%BB%84%E6%B8%A4%E8%B6%85%E8%BF%87%E4%BA%86%23) `94.7K 🔥`
1. [苹果史上首款折叠屏手机](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%B2%E4%B8%8A%E9%A6%96%E6%AC%BE%E6%8A%98%E5%8F%A0%E5%B1%8F%E6%89%8B%E6%9C%BA%23) `86.8K 🔥`
1. [沙尘暴 (sandstorm)](https://s.weibo.com/weibo?q=%23%E6%B2%99%E5%B0%98%E6%9A%B4%23) `82.7K 🔥`
1. [易烊千玺无实物表演被撞](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%97%A0%E5%AE%9E%E7%89%A9%E8%A1%A8%E6%BC%94%E8%A2%AB%E6%92%9E%23) `82.6K 🔥`
1. [第一次见识人丁兴旺](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E8%AF%86%E4%BA%BA%E4%B8%81%E5%85%B4%E6%97%BA%23) `78.9K 🔥`
1. [香港公布宏福苑长远居住安排方案](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%85%AC%E5%B8%83%E5%AE%8F%E7%A6%8F%E8%8B%91%E9%95%BF%E8%BF%9C%E5%B1%85%E4%BD%8F%E5%AE%89%E6%8E%92%E6%96%B9%E6%A1%88%23) `77.5K 🔥`
1. [张集骏进组将门毒后](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%86%E9%AA%8F%E8%BF%9B%E7%BB%84%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%23) `77.5K 🔥`
1. [孟子义沈妙](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%B2%88%E5%A6%99%23) `71.8K 🔥`
1. [特朗普自嘲是历史上最傻的总统](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%87%AA%E5%98%B2%E6%98%AF%E5%8E%86%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%82%BB%E7%9A%84%E6%80%BB%E7%BB%9F%23) `69.4K 🔥`
1. [烤肠商战 (Sausage business war)](https://s.weibo.com/weibo?q=%23%E7%83%A4%E8%82%A0%E5%95%86%E6%88%98%23) `219.7K 🔥` `-35%`
1. [黄晓明回应在澳门输掉十几亿 (Huang Xiaoming responded to losing more than one billion in Macau)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%9B%9E%E5%BA%94%E5%9C%A8%E6%BE%B3%E9%97%A8%E8%BE%93%E6%8E%89%E5%8D%81%E5%87%A0%E4%BA%BF%23) `161.7K 🔥` `-72%`
1. [00后月租200住养老院2年](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E6%9C%88%E7%A7%9F200%E4%BD%8F%E5%85%BB%E8%80%81%E9%99%A22%E5%B9%B4%23) `150.8K 🔥` `-21%`
1. [鹿晗编脏辫可以不洗](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%BC%96%E8%84%8F%E8%BE%AB%E5%8F%AF%E4%BB%A5%E4%B8%8D%E6%B4%97%23) `148.8K 🔥` `-21%`
1. [镖人阿育娅 换人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E9%98%BF%E8%82%B2%E5%A8%85%20%E6%8D%A2%E4%BA%BA%23) `148.3K 🔥` `-24%`
1. [北京沙尘暴](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%B2%99%E5%B0%98%E6%9A%B4%23) `95.3K 🔥` `-30%`

Updated at 2026-02-21 18:58:16

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
