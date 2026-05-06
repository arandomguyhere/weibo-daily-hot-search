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

1. [男助产士撞脸张凌赫孕妈变迷妹 (Male midwife bumps into Zhang Linghe’s pregnant mother and turns into a fan girl)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8A%A9%E4%BA%A7%E5%A3%AB%E6%92%9E%E8%84%B8%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AD%95%E5%A6%88%E5%8F%98%E8%BF%B7%E5%A6%B9%23) `59.2K 🔥` `NEW`
1. [檀健次为不干扰拍摄把保镖支走](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E4%B8%BA%E4%B8%8D%E5%B9%B2%E6%89%B0%E6%8B%8D%E6%91%84%E6%8A%8A%E4%BF%9D%E9%95%96%E6%94%AF%E8%B5%B0%23) `58.8K 🔥` `NEW`
1. [国乒男团3比1罗马尼亚](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A23%E6%AF%941%E7%BD%97%E9%A9%AC%E5%B0%BC%E4%BA%9A%23) `30.7K 🔥` `NEW`
1. [卢昱晓把刀拿反了](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%8A%8A%E5%88%80%E6%8B%BF%E5%8F%8D%E4%BA%86%23) `30.7K 🔥` `NEW`
1. [伦敦世乒赛团体赛 (London World Table Tennis Championships Team Competition)](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%9B%A2%E4%BD%93%E8%B5%9B%23) `216.1K 🔥` `+279%`
1. [来中国玩的外国人更多了](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E4%B8%AD%E5%9B%BD%E7%8E%A9%E7%9A%84%E5%A4%96%E5%9B%BD%E4%BA%BA%E6%9B%B4%E5%A4%9A%E4%BA%86%23) `123.4K 🔥` `+69%`
1. [白鹿跑男争议 内娱综艺审美巨变](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%91%E7%94%B7%E4%BA%89%E8%AE%AE%20%E5%86%85%E5%A8%B1%E7%BB%BC%E8%89%BA%E5%AE%A1%E7%BE%8E%E5%B7%A8%E5%8F%98%23) `122.9K 🔥` `+69%`
1. [解除台独刘世芳亲属全部职务](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E9%99%A4%E5%8F%B0%E7%8B%AC%E5%88%98%E4%B8%96%E8%8A%B3%E4%BA%B2%E5%B1%9E%E5%85%A8%E9%83%A8%E8%81%8C%E5%8A%A1%23) `121.1K 🔥` `+74%`
1. [星空卫视下星](https://s.weibo.com/weibo?q=%23%E6%98%9F%E7%A9%BA%E5%8D%AB%E8%A7%86%E4%B8%8B%E6%98%9F%23) `91.2K 🔥` `+271%`
1. [网友曝三亚4只皮皮虾收费1035元](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%9B%9D%E4%B8%89%E4%BA%9A4%E5%8F%AA%E7%9A%AE%E7%9A%AE%E8%99%BE%E6%94%B6%E8%B4%B91035%E5%85%83%23) `83.8K 🔥` `+57%`
1. [主角OST请来了王菲 (The protagonist OST invited Faye Wong)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92OST%E8%AF%B7%E6%9D%A5%E4%BA%86%E7%8E%8B%E8%8F%B2%23) `67.6K 🔥` `+97%`
1. [有AI真好 放以前没十几亿下不来 (It’s great to have AI. Before, it couldn’t be purchased without more than a billion dollars.)](https://s.weibo.com/weibo?q=%23%E6%9C%89AI%E7%9C%9F%E5%A5%BD%20%E6%94%BE%E4%BB%A5%E5%89%8D%E6%B2%A1%E5%8D%81%E5%87%A0%E4%BA%BF%E4%B8%8B%E4%B8%8D%E6%9D%A5%23) `63.5K 🔥` `+35%`
1. [世界杯中国赞助商投入超5亿美元](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9B%BD%E8%B5%9E%E5%8A%A9%E5%95%86%E6%8A%95%E5%85%A5%E8%B6%855%E4%BA%BF%E7%BE%8E%E5%85%83%23) `63.4K 🔥` `+41%`
1. [婴儿被生父照顾10分钟离奇窒息脑瘫 (The baby was mysteriously suffocated and suffered cerebral palsy after being cared for by his biological father for 10 minutes.)](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E8%A2%AB%E7%94%9F%E7%88%B6%E7%85%A7%E9%A1%BE10%E5%88%86%E9%92%9F%E7%A6%BB%E5%A5%87%E7%AA%92%E6%81%AF%E8%84%91%E7%98%AB%23) `62.0K 🔥` `+37%`
1. [新人结婚被丢高速口路过宾利变婚车](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%BA%BA%E7%BB%93%E5%A9%9A%E8%A2%AB%E4%B8%A2%E9%AB%98%E9%80%9F%E5%8F%A3%E8%B7%AF%E8%BF%87%E5%AE%BE%E5%88%A9%E5%8F%98%E5%A9%9A%E8%BD%A6%23) `61.6K 🔥` `+51%`
1. [钟薛高破产后508件资产207万起拍 (After Zhong Xuegao went bankrupt, 508 assets were auctioned starting at 2.07 million)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E8%96%9B%E9%AB%98%E7%A0%B4%E4%BA%A7%E5%90%8E508%E4%BB%B6%E8%B5%84%E4%BA%A7207%E4%B8%87%E8%B5%B7%E6%8B%8D%23) `60.8K 🔥` `+55%`
1. [中国女子在西班牙被刺身亡](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E8%A5%BF%E7%8F%AD%E7%89%99%E8%A2%AB%E5%88%BA%E8%BA%AB%E4%BA%A1%23) `60.1K 🔥` `+58%`
1. [全李酒店 全季酒店 (Quanli Hotel Quanli Hotel)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%9D%8E%E9%85%92%E5%BA%97%20%E5%85%A8%E5%AD%A3%E9%85%92%E5%BA%97%23) `58.5K 🔥` `+35%`
1. [河北两女子长得一模一样孩子认错妈](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E4%B8%A4%E5%A5%B3%E5%AD%90%E9%95%BF%E5%BE%97%E4%B8%80%E6%A8%A1%E4%B8%80%E6%A0%B7%E5%AD%A9%E5%AD%90%E8%AE%A4%E9%94%99%E5%A6%88%23) `55.7K 🔥` `+83%`
1. [中国强硬拒绝世界杯天价转播费](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%BA%E7%A1%AC%E6%8B%92%E7%BB%9D%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%A9%E4%BB%B7%E8%BD%AC%E6%92%AD%E8%B4%B9%23) `49.5K 🔥` `+32%`
1. [孟子义一手抓绳一手护着白鹿](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%80%E6%89%8B%E6%8A%93%E7%BB%B3%E4%B8%80%E6%89%8B%E6%8A%A4%E7%9D%80%E7%99%BD%E9%B9%BF%23) `49.4K 🔥` `+56%`
1. [王骁演技 (Wang Xiao's acting skills)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%E6%BC%94%E6%8A%80%23) `49.1K 🔥` `+87%`
1. [三星 (Samsung)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%23) `48.8K 🔥` `+36%`
1. [邓凯孔雪儿 长宁帝军](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E5%AD%94%E9%9B%AA%E5%84%BF%20%E9%95%BF%E5%AE%81%E5%B8%9D%E5%86%9B%23) `45.9K 🔥` `+87%`
1. [meiko赛后发文](https://s.weibo.com/weibo?q=%23meiko%E8%B5%9B%E5%90%8E%E5%8F%91%E6%96%87%23) `39.6K 🔥` `+61%`
1. [张杰谢娜合唱](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%B0%A2%E5%A8%9C%E5%90%88%E5%94%B1%23) `37.8K 🔥` `+31%`
1. [小狗靠捡瓶子攒了10万](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E9%9D%A0%E6%8D%A1%E7%93%B6%E5%AD%90%E6%94%92%E4%BA%8610%E4%B8%87%23) `36.0K 🔥` `+28%`
1. [林心如回应找霍建华客串新剧 (Ruby Lin responds to looking for Huo Jianhua to guest star in new drama)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%83%E5%A6%82%E5%9B%9E%E5%BA%94%E6%89%BE%E9%9C%8D%E5%BB%BA%E5%8D%8E%E5%AE%A2%E4%B8%B2%E6%96%B0%E5%89%A7%23) `35.2K 🔥` `+44%`
1. [反方向的钟](https://s.weibo.com/weibo?q=%23%E5%8F%8D%E6%96%B9%E5%90%91%E7%9A%84%E9%92%9F%23) `33.0K 🔥` `+24%`
1. [2岁女儿认错妈妈10岁儿子也认错](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%A5%B3%E5%84%BF%E8%AE%A4%E9%94%99%E5%A6%88%E5%A6%8810%E5%B2%81%E5%84%BF%E5%AD%90%E4%B9%9F%E8%AE%A4%E9%94%99%23) `31.6K 🔥` `+29%`
1. [药店闭店潮持续](https://s.weibo.com/weibo?q=%23%E8%8D%AF%E5%BA%97%E9%97%AD%E5%BA%97%E6%BD%AE%E6%8C%81%E7%BB%AD%23) `31.4K 🔥` `+28%`
1. [者来女真的去谢娜演唱会了 (Zhelai Jurchen went to Xie Na's concert)](https://s.weibo.com/weibo?q=%23%E8%80%85%E6%9D%A5%E5%A5%B3%E7%9C%9F%E7%9A%84%E5%8E%BB%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `31.0K 🔥` `+26%`
1. [龙队急得直挠头](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%98%9F%E6%80%A5%E5%BE%97%E7%9B%B4%E6%8C%A0%E5%A4%B4%23) `30.9K 🔥` `+26%`
1. [王曼昱这一分直接给到夯 (Wang Manyu’s point was directly given to him.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%BF%99%E4%B8%80%E5%88%86%E7%9B%B4%E6%8E%A5%E7%BB%99%E5%88%B0%E5%A4%AF%23) `30.9K 🔥` `+26%`
1. [CBA](https://s.weibo.com/weibo?q=%23CBA%23) `30.7K 🔥` `+21%`
1. [为什么户外千万不要穿迷彩](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%B7%E5%A4%96%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%A9%BF%E8%BF%B7%E5%BD%A9%23) `101.8K 🔥`
1. [红山动物园我将继续拥护你 (Hongshan Zoo I will continue to support you)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%B1%B1%E5%8A%A8%E7%89%A9%E5%9B%AD%E6%88%91%E5%B0%86%E7%BB%A7%E7%BB%AD%E6%8B%A5%E6%8A%A4%E4%BD%A0%23) `49.8K 🔥`
1. [花少8最新阵容 (Hua Shao 8 latest lineup)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E6%9C%80%E6%96%B0%E9%98%B5%E5%AE%B9%23) `48.7K 🔥`
1. [焦虑时先自查 饭否冷否](https://s.weibo.com/weibo?q=%23%E7%84%A6%E8%99%91%E6%97%B6%E5%85%88%E8%87%AA%E6%9F%A5%20%E9%A5%AD%E5%90%A6%E5%86%B7%E5%90%A6%23) `39.6K 🔥`
1. [安徽坚决拥护党中央决定](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E5%9D%9A%E5%86%B3%E6%8B%A5%E6%8A%A4%E5%85%9A%E4%B8%AD%E5%A4%AE%E5%86%B3%E5%AE%9A%23) `34.2K 🔥`
1. [病毒邮轮](https://s.weibo.com/weibo?q=%23%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%23) `34.1K 🔥`
1. [国乒男团进世乒赛8强 (National table tennis men's team enters quarterfinals of World Table Tennis Championships)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E8%BF%9B%E4%B8%96%E4%B9%92%E8%B5%9B8%E5%BC%BA%23) `32.6K 🔥`
1. [王楚钦这一分全体起立](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%BF%99%E4%B8%80%E5%88%86%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%23) `31.0K 🔥`
1. [花少 恋综](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%20%E6%81%8B%E7%BB%BC%23) `30.7K 🔥`
1. [耳高于眉的聪明狗](https://s.weibo.com/weibo?q=%23%E8%80%B3%E9%AB%98%E4%BA%8E%E7%9C%89%E7%9A%84%E8%81%AA%E6%98%8E%E7%8B%97%23) `30.7K 🔥`
1. [暴发致命病毒邮轮或出现人传人现象](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E5%8F%91%E8%87%B4%E5%91%BD%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E6%88%96%E5%87%BA%E7%8E%B0%E4%BA%BA%E4%BC%A0%E4%BA%BA%E7%8E%B0%E8%B1%A1%23) `162.5K 🔥` `-47%`
1. [王曼昱11比0卡尔伯格 (Wang Manyu 11 to 0 Carlberg)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B111%E6%AF%940%E5%8D%A1%E5%B0%94%E4%BC%AF%E6%A0%BC%23) `33.1K 🔥` `-25%`
1. [绥化2名失联女孩遗体已送至殡仪馆](https://s.weibo.com/weibo?q=%23%E7%BB%A5%E5%8C%962%E5%90%8D%E5%A4%B1%E8%81%94%E5%A5%B3%E5%AD%A9%E9%81%97%E4%BD%93%E5%B7%B2%E9%80%81%E8%87%B3%E6%AE%A1%E4%BB%AA%E9%A6%86%23) `32.6K 🔥` `-28%`
1. [火到欧美的韩国棒球女神是AI生成](https://s.weibo.com/weibo?q=%23%E7%81%AB%E5%88%B0%E6%AC%A7%E7%BE%8E%E7%9A%84%E9%9F%A9%E5%9B%BD%E6%A3%92%E7%90%83%E5%A5%B3%E7%A5%9E%E6%98%AFAI%E7%94%9F%E6%88%90%23) `30.9K 🔥` `-29%`

Updated at 2026-05-07 05:44:35

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
