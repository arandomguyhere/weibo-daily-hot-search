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

1. [王楚钦男单夺冠 (Wang Chuqin wins men's singles championship)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%94%B7%E5%8D%95%E5%A4%BA%E5%86%A0%23) `2.0M 🔥` `NEW`
1. [全国两会知识帖](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E4%B8%A4%E4%BC%9A%E7%9F%A5%E8%AF%86%E5%B8%96%23) `754.7K 🔥` `NEW`
1. [浙江地震](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%9C%B0%E9%9C%87%23) `737.7K 🔥` `NEW`
1. [王楚钦4比0战胜林昀儒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A64%E6%AF%940%E6%88%98%E8%83%9C%E6%9E%97%E6%98%80%E5%84%92%23) `605.6K 🔥` `NEW`
1. [伊朗前总统内贾德遇袭身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%89%8D%E6%80%BB%E7%BB%9F%E5%86%85%E8%B4%BE%E5%BE%B7%E9%81%87%E8%A2%AD%E8%BA%AB%E4%BA%A1%23) `486.5K 🔥` `NEW`
1. [王楚钦vs林昀儒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%9E%97%E6%98%80%E5%84%92%23) `327.3K 🔥` `NEW`
1. [世界乒联恭喜孙颖莎新加坡大满贯卫冕](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B9%92%E8%81%94%E6%81%AD%E5%96%9C%E5%AD%99%E9%A2%96%E8%8E%8E%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%8D%AB%E5%86%95%23) `316.6K 🔥` `NEW`
1. [以色列陷入多线作战的战争泥潭](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%99%B7%E5%85%A5%E5%A4%9A%E7%BA%BF%E4%BD%9C%E6%88%98%E7%9A%84%E6%88%98%E4%BA%89%E6%B3%A5%E6%BD%AD%23) `230.0K 🔥` `NEW`
1. [有中国公民在袭击中受伤](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%9C%A8%E8%A2%AD%E5%87%BB%E4%B8%AD%E5%8F%97%E4%BC%A4%23) `222.2K 🔥` `NEW`
1. [WTT](https://s.weibo.com/weibo?q=%23WTT%23) `160.7K 🔥` `NEW`
1. [云旗郝熠然澳门演唱会 (Yunqi Hao Yiran Macau Concert)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E9%83%9D%E7%86%A0%E7%84%B6%E6%BE%B3%E9%97%A8%E6%BC%94%E5%94%B1%E4%BC%9A%23) `158.9K 🔥` `NEW`
1. [纯真年代 地震剧情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%20%E5%9C%B0%E9%9C%87%E5%89%A7%E6%83%85%23) `139.7K 🔥` `NEW`
1. [王楚钦4比1F勒布伦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A64%E6%AF%941F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `134.6K 🔥` `NEW`
1. [荣耀发布会](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E5%8F%91%E5%B8%83%E4%BC%9A%23) `122.9K 🔥` `NEW`
1. [张杰鸟巢演唱会座位图](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BA%A7%E4%BD%8D%E5%9B%BE%23) `122.9K 🔥` `NEW`
1. [伊朗袭击27个美军基地 (Iran attacks 27 US military bases)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB27%E4%B8%AA%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `1.1M 🔥` `+27%`
1. [寿星千万种海底捞都宠](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E6%98%9F%E5%8D%83%E4%B8%87%E7%A7%8D%E6%B5%B7%E5%BA%95%E6%8D%9E%E9%83%BD%E5%AE%A0%23) `615.7K 🔥` `+61%`
1. [张凌赫田曦薇从见面到合作用了386天](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E4%BB%8E%E8%A7%81%E9%9D%A2%E5%88%B0%E5%90%88%E4%BD%9C%E7%94%A8%E4%BA%86386%E5%A4%A9%23) `479.3K 🔥` `+177%`
1. [伊朗总统就哈梅内伊身亡发声明 (Iranian President issues statement on Khamenei's death)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E5%B0%B1%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E8%BA%AB%E4%BA%A1%E5%8F%91%E5%A3%B0%E6%98%8E%23) `325.1K 🔥` `+34%`
1. [三甲医生回应秦岚嗓子哑了三年](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E5%93%91%E4%BA%86%E4%B8%89%E5%B9%B4%23) `324.5K 🔥` `+35%`
1. [一油轮欲通过霍尔木兹海峡被击中](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B2%B9%E8%BD%AE%E6%AC%B2%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%A2%AB%E5%87%BB%E4%B8%AD%23) `310.5K 🔥` `+32%`
1. [陈思罕 我是一个专业的摄影师](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%20%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E4%B8%93%E4%B8%9A%E7%9A%84%E6%91%84%E5%BD%B1%E5%B8%88%23) `305.9K 🔥` `+27%`
1. [迪拜已拦截超百次伊朗炸弹 (Dubai has intercepted more than 100 Iranian bombs)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E5%B7%B2%E6%8B%A6%E6%88%AA%E8%B6%85%E7%99%BE%E6%AC%A1%E4%BC%8A%E6%9C%97%E7%82%B8%E5%BC%B9%23) `303.9K 🔥` `+31%`
1. [我在挨骂 稍等呀 (I'm being scolded. Wait a minute.)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9C%A8%E6%8C%A8%E9%AA%82%20%E7%A8%8D%E7%AD%89%E5%91%80%23) `300.9K 🔥` `+29%`
1. [出轨对象得知感染HIV还瞒着自己](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A8%E5%AF%B9%E8%B1%A1%E5%BE%97%E7%9F%A5%E6%84%9F%E6%9F%93HIV%E8%BF%98%E7%9E%92%E7%9D%80%E8%87%AA%E5%B7%B1%23) `293.4K 🔥` `+22%`
1. [秦PLUS官宣7年低息夯爆了](https://s.weibo.com/weibo?q=%23%E7%A7%A6PLUS%E5%AE%98%E5%AE%A37%E5%B9%B4%E4%BD%8E%E6%81%AF%E5%A4%AF%E7%88%86%E4%BA%86%23) `289.0K 🔥` `+22%`
1. [纪凌尘与韩国女友泰国度假](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%87%8C%E5%B0%98%E4%B8%8E%E9%9F%A9%E5%9B%BD%E5%A5%B3%E5%8F%8B%E6%B3%B0%E5%9B%BD%E5%BA%A6%E5%81%87%23) `288.1K 🔥` `+23%`
1. [陈思罕镜头里的四代](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%E9%95%9C%E5%A4%B4%E9%87%8C%E7%9A%84%E5%9B%9B%E4%BB%A3%23) `284.6K 🔥` `+23%`
1. [AI短剧 (AI skit)](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%23) `274.3K 🔥` `+51%`
1. [赵今麦流浪地球3造型](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%833%E9%80%A0%E5%9E%8B%23) `735.9K 🔥`
1. [中俄呼吁立即停止战争 (China and Russia call for an immediate end to the war)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E5%91%BC%E5%90%81%E7%AB%8B%E5%8D%B3%E5%81%9C%E6%AD%A2%E6%88%98%E4%BA%89%23) `313.1K 🔥`
1. [一家4口爬山祈福妻子坠亡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B64%E5%8F%A3%E7%88%AC%E5%B1%B1%E7%A5%88%E7%A6%8F%E5%A6%BB%E5%AD%90%E5%9D%A0%E4%BA%A1%23) `280.7K 🔥`
1. [张元英签售态度 (Zhang Yuanying's attitude towards signing sales)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%AD%BE%E5%94%AE%E6%80%81%E5%BA%A6%23) `279.9K 🔥`
1. [黄金暗盘跳水](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%9A%97%E7%9B%98%E8%B7%B3%E6%B0%B4%23) `268.5K 🔥`
1. [以军开始打击伊朗首都心脏地带](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%BC%80%E5%A7%8B%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E5%BF%83%E8%84%8F%E5%9C%B0%E5%B8%A6%23) `243.5K 🔥`
1. [黄轩的手 此沙的脚 (Huang Xuan’s hands and this sand’s feet)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E8%BD%A9%E7%9A%84%E6%89%8B%20%E6%AD%A4%E6%B2%99%E7%9A%84%E8%84%9A%23) `221.6K 🔥`
1. [宋亚轩海胆头](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%B5%B7%E8%83%86%E5%A4%B4%23) `185.5K 🔥`
1. [男子酒后和老婆吵架胸口撕裂40厘米 (Man suffered a 40cm tear in his chest after a drunken argument with his wife)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E%E5%92%8C%E8%80%81%E5%A9%86%E5%90%B5%E6%9E%B6%E8%83%B8%E5%8F%A3%E6%92%95%E8%A3%8240%E5%8E%98%E7%B1%B3%23) `154.1K 🔥`
1. [以军称已向伊朗投掷超1200枚导弹 (Israeli military says it has dropped more than 1,200 missiles on Iran)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E7%A7%B0%E5%B7%B2%E5%90%91%E4%BC%8A%E6%9C%97%E6%8A%95%E6%8E%B7%E8%B6%851200%E6%9E%9A%E5%AF%BC%E5%BC%B9%23) `152.0K 🔥`
1. [孙颖莎女单夺冠 (Sun Yingsha wins women's singles championship)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A5%B3%E5%8D%95%E5%A4%BA%E5%86%A0%23) `718.0K 🔥` `-46%`
1. [中国军号发布视频](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E5%8F%B7%E5%8F%91%E5%B8%83%E8%A7%86%E9%A2%91%23) `256.8K 🔥` `-22%`
1. [孙颖莎4比2王曼昱](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E4%E6%AF%942%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `251.3K 🔥` `-39%`
1. [哈梅内伊遇害 (Khamenei killed)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E9%81%87%E5%AE%B3%23) `245.7K 🔥` `-35%`
1. [台胞可持台胞证登记撤离以色列](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E8%83%9E%E5%8F%AF%E6%8C%81%E5%8F%B0%E8%83%9E%E8%AF%81%E7%99%BB%E8%AE%B0%E6%92%A4%E7%A6%BB%E4%BB%A5%E8%89%B2%E5%88%97%23) `156.2K 🔥` `-29%`
1. [1010元托运柴犬3天没喝一口水死亡](https://s.weibo.com/weibo?q=%231010%E5%85%83%E6%89%98%E8%BF%90%E6%9F%B4%E7%8A%AC3%E5%A4%A9%E6%B2%A1%E5%96%9D%E4%B8%80%E5%8F%A3%E6%B0%B4%E6%AD%BB%E4%BA%A1%23) `154.1K 🔥` `-35%`
1. [杨幂 得罪就得罪吧 (Yang Mi, just offend if you offend me)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E5%BE%97%E7%BD%AA%E5%B0%B1%E5%BE%97%E7%BD%AA%E5%90%A7%23) `144.0K 🔥` `-21%`
1. [全国政协会议议程来了 (The agenda for the National Committee of the Chinese People's Political Consultative Conference is here)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%94%BF%E5%8D%8F%E4%BC%9A%E8%AE%AE%E8%AE%AE%E7%A8%8B%E6%9D%A5%E4%BA%86%23) `140.6K 🔥` `-80%`
1. [诞下5胞胎女子说现在没时间买黄金 (Woman who gave birth to quintuplets says she has no time to buy gold now)](https://s.weibo.com/weibo?q=%23%E8%AF%9E%E4%B8%8B5%E8%83%9E%E8%83%8E%E5%A5%B3%E5%AD%90%E8%AF%B4%E7%8E%B0%E5%9C%A8%E6%B2%A1%E6%97%B6%E9%97%B4%E4%B9%B0%E9%BB%84%E9%87%91%23) `137.8K 🔥` `-43%`
1. [贝因美 大麻二酚](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%9B%A0%E7%BE%8E%20%E5%A4%A7%E9%BA%BB%E4%BA%8C%E9%85%9A%23) `134.4K 🔥` `-24%`
1. [王天辰郭晓婷 不舍那你留下来呀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E9%83%AD%E6%99%93%E5%A9%B7%20%E4%B8%8D%E8%88%8D%E9%82%A3%E4%BD%A0%E7%95%99%E4%B8%8B%E6%9D%A5%E5%91%80%23) `122.9K 🔥` `-44%`
1. [曝张元英签售切小屏](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E5%85%83%E8%8B%B1%E7%AD%BE%E5%94%AE%E5%88%87%E5%B0%8F%E5%B1%8F%23) `122.9K 🔥` `-30%`

Updated at 2026-03-01 21:45:29

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
