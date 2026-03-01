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

1. [网民造谣项城有人偷小孩被拘留 (Netizens spread rumors that someone in Xiangcheng was detained for stealing a child)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%B0%91%E9%80%A0%E8%B0%A3%E9%A1%B9%E5%9F%8E%E6%9C%89%E4%BA%BA%E5%81%B7%E5%B0%8F%E5%AD%A9%E8%A2%AB%E6%8B%98%E7%95%99%23) `199.0K 🔥` `NEW`
1. [孙颖莎女单夺冠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A5%B3%E5%8D%95%E5%A4%BA%E5%86%A0%23) `84.2K 🔥` `NEW`
1. [朱志鑫 漫步艺术回廊](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E6%BC%AB%E6%AD%A5%E8%89%BA%E6%9C%AF%E5%9B%9E%E5%BB%8A%23) `84.2K 🔥` `NEW`
1. [宋亚轩海胆头](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%B5%B7%E8%83%86%E5%A4%B4%23) `84.2K 🔥` `NEW`
1. [小伙腹痛CT查出肠道卡2把勺子](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E8%85%B9%E7%97%9BCT%E6%9F%A5%E5%87%BA%E8%82%A0%E9%81%93%E5%8D%A12%E6%8A%8A%E5%8B%BA%E5%AD%90%23) `247.4K 🔥`
1. [公然击杀主权国家领导人不可接受 (Blatantly killing the leader of a sovereign country is unacceptable)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%84%B6%E5%87%BB%E6%9D%80%E4%B8%BB%E6%9D%83%E5%9B%BD%E5%AE%B6%E9%A2%86%E5%AF%BC%E4%BA%BA%E4%B8%8D%E5%8F%AF%E6%8E%A5%E5%8F%97%23) `216.6K 🔥`
1. [伊朗临时领导委员会开始工作](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%B4%E6%97%B6%E9%A2%86%E5%AF%BC%E5%A7%94%E5%91%98%E4%BC%9A%E5%BC%80%E5%A7%8B%E5%B7%A5%E4%BD%9C%23) `136.9K 🔥`
1. [张元英签售态度](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%AD%BE%E5%94%AE%E6%80%81%E5%BA%A6%23) `135.8K 🔥`
1. [王天辰郭晓婷 这样的距离算适当吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E9%83%AD%E6%99%93%E5%A9%B7%20%E8%BF%99%E6%A0%B7%E7%9A%84%E8%B7%9D%E7%A6%BB%E7%AE%97%E9%80%82%E5%BD%93%E5%90%97%23) `135.0K 🔥`
1. [伊朗将走向何方](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B0%86%E8%B5%B0%E5%90%91%E4%BD%95%E6%96%B9%23) `108.4K 🔥`
1. [迪丽热巴连续4年出席迪奥巴黎大秀](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E5%87%BA%E5%B8%AD%E8%BF%AA%E5%A5%A5%E5%B7%B4%E9%BB%8E%E5%A4%A7%E7%A7%80%23) `107.5K 🔥`
1. [郑润泽升降台事故 (Zheng Runze lift accident)](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%B6%A6%E6%B3%BD%E5%8D%87%E9%99%8D%E5%8F%B0%E4%BA%8B%E6%95%85%23) `101.7K 🔥`
1. [浙江省地震局通报称今晚浙江没地震](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E7%9C%81%E5%9C%B0%E9%9C%87%E5%B1%80%E9%80%9A%E6%8A%A5%E7%A7%B0%E4%BB%8A%E6%99%9A%E6%B5%99%E6%B1%9F%E6%B2%A1%E5%9C%B0%E9%9C%87%23) `100.8K 🔥`
1. [王楚钦男单夺冠 (Wang Chuqin wins men's singles championship)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%94%B7%E5%8D%95%E5%A4%BA%E5%86%A0%23) `100.4K 🔥`
1. [郭晓婷王天辰 第二十八年春](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%20%E7%AC%AC%E4%BA%8C%E5%8D%81%E5%85%AB%E5%B9%B4%E6%98%A5%23) `100.4K 🔥`
1. [以色列对伊新一轮空袭](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%AF%B9%E4%BC%8A%E6%96%B0%E4%B8%80%E8%BD%AE%E7%A9%BA%E8%A2%AD%23) `99.3K 🔥`
1. [迪拜家长安抚孩子外面是烟花](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E5%AE%B6%E9%95%BF%E5%AE%89%E6%8A%9A%E5%AD%A9%E5%AD%90%E5%A4%96%E9%9D%A2%E6%98%AF%E7%83%9F%E8%8A%B1%23) `97.1K 🔥`
1. [出轨对象得知感染HIV还瞒着自己](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A8%E5%AF%B9%E8%B1%A1%E5%BE%97%E7%9F%A5%E6%84%9F%E6%9F%93HIV%E8%BF%98%E7%9E%92%E7%9D%80%E8%87%AA%E5%B7%B1%23) `88.2K 🔥`
1. [张凌赫田曦薇亲脸花絮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E4%BA%B2%E8%84%B8%E8%8A%B1%E7%B5%AE%23) `87.4K 🔥`
1. [多国就美以袭击伊朗表态](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E5%B0%B1%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E8%A1%A8%E6%80%81%23) `84.3K 🔥`
1. [陈思罕镜头里的四代](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%E9%95%9C%E5%A4%B4%E9%87%8C%E7%9A%84%E5%9B%9B%E4%BB%A3%23) `84.3K 🔥`
1. [中东冲突全面扩散](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%86%B2%E7%AA%81%E5%85%A8%E9%9D%A2%E6%89%A9%E6%95%A3%23) `84.3K 🔥`
1. [张凌赫田曦薇从见面到合作用了386天 (Zhang Linghe and Tian Xiwei spent 386 days from meeting to cooperating)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E4%BB%8E%E8%A7%81%E9%9D%A2%E5%88%B0%E5%90%88%E4%BD%9C%E7%94%A8%E4%BA%86386%E5%A4%A9%23) `84.3K 🔥`
1. [孟子义两年最长休息两天](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%A4%E5%B9%B4%E6%9C%80%E9%95%BF%E4%BC%91%E6%81%AF%E4%B8%A4%E5%A4%A9%23) `84.3K 🔥`
1. [一油轮欲通过霍尔木兹海峡被击中](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B2%B9%E8%BD%AE%E6%AC%B2%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%A2%AB%E5%87%BB%E4%B8%AD%23) `84.3K 🔥`
1. [陈思罕 我是一个专业的摄影师](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%20%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E4%B8%93%E4%B8%9A%E7%9A%84%E6%91%84%E5%BD%B1%E5%B8%88%23) `84.2K 🔥`
1. [方穆扬发飙](https://s.weibo.com/weibo?q=%23%E6%96%B9%E7%A9%86%E6%89%AC%E5%8F%91%E9%A3%99%23) `84.2K 🔥`
1. [12306回应男子在高铁车厢吸烟](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E5%9C%A8%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E5%90%B8%E7%83%9F%23) `84.2K 🔥`
1. [伊朗前总统内贾德遇袭身亡 (Former Iranian President Mahmoud Ahmadinejad killed in attack)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%89%8D%E6%80%BB%E7%BB%9F%E5%86%85%E8%B4%BE%E5%BE%B7%E9%81%87%E8%A2%AD%E8%BA%AB%E4%BA%A1%23) `1.5M 🔥` `-34%`
1. [WiFi 穿墙透视](https://s.weibo.com/weibo?q=%23WiFi%20%E7%A9%BF%E5%A2%99%E9%80%8F%E8%A7%86%23) `595.2K 🔥` `-26%`
1. [2026新春走基层](https://s.weibo.com/weibo?q=%232026%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%23) `454.6K 🔥` `-24%`
1. [浙江地震](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%9C%B0%E9%9C%87%23) `353.3K 🔥` `-23%`
1. [赵今麦流浪地球3造型](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%833%E9%80%A0%E5%9E%8B%23) `166.3K 🔥` `-23%`
1. [三甲医生回应秦岚嗓子哑了三年 (A top-level doctor responded that Qin Lan’s voice has been hoarse for three years.)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E5%93%91%E4%BA%86%E4%B8%89%E5%B9%B4%23) `155.2K 🔥` `-28%`
1. [王楚钦孙颖莎冠军自拍](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E5%86%A0%E5%86%9B%E8%87%AA%E6%8B%8D%23) `154.8K 🔥` `-29%`
1. [伊朗袭击27个美军基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB27%E4%B8%AA%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `150.9K 🔥` `-28%`
1. [俄罗斯在中东的布局被美国搅乱了](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%9C%A8%E4%B8%AD%E4%B8%9C%E7%9A%84%E5%B8%83%E5%B1%80%E8%A2%AB%E7%BE%8E%E5%9B%BD%E6%90%85%E4%B9%B1%E4%BA%86%23) `150.4K 🔥` `-28%`
1. [中东全面战争一触即发](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%85%A8%E9%9D%A2%E6%88%98%E4%BA%89%E4%B8%80%E8%A7%A6%E5%8D%B3%E5%8F%91%23) `149.3K 🔥` `-28%`
1. [伊朗向美军林肯号航母发射导弹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%91%E7%BE%8E%E5%86%9B%E6%9E%97%E8%82%AF%E5%8F%B7%E8%88%AA%E6%AF%8D%E5%8F%91%E5%B0%84%E5%AF%BC%E5%BC%B9%23) `147.5K 🔥` `-29%`
1. [伊朗总统就哈梅内伊身亡发声明](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E5%B0%B1%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E8%BA%AB%E4%BA%A1%E5%8F%91%E5%A3%B0%E6%98%8E%23) `147.1K 🔥` `-29%`
1. [迪拜已拦截超百次伊朗炸弹](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E5%B7%B2%E6%8B%A6%E6%88%AA%E8%B6%85%E7%99%BE%E6%AC%A1%E4%BC%8A%E6%9C%97%E7%82%B8%E5%BC%B9%23) `145.2K 🔥` `-30%`
1. [美以袭击伊朗金价为何下跌](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E9%87%91%E4%BB%B7%E4%B8%BA%E4%BD%95%E4%B8%8B%E8%B7%8C%23) `144.1K 🔥` `-31%`
1. [迪丽热巴化妆王亚飞发型丽杰](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8C%96%E5%A6%86%E7%8E%8B%E4%BA%9A%E9%A3%9E%E5%8F%91%E5%9E%8B%E4%B8%BD%E6%9D%B0%23) `143.4K 🔥` `-31%`
1. [AI短剧 (AI skit)](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%23) `142.2K 🔥` `-32%`
1. [以色列陷入多线作战的战争泥潭](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%99%B7%E5%85%A5%E5%A4%9A%E7%BA%BF%E4%BD%9C%E6%88%98%E7%9A%84%E6%88%98%E4%BA%89%E6%B3%A5%E6%BD%AD%23) `141.0K 🔥` `-32%`
1. [中国军号发布视频 (China Military Bugle releases video)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E5%8F%B7%E5%8F%91%E5%B8%83%E8%A7%86%E9%A2%91%23) `139.4K 🔥` `-33%`
1. [纪凌尘与韩国女友泰国度假](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%87%8C%E5%B0%98%E4%B8%8E%E9%9F%A9%E5%9B%BD%E5%A5%B3%E5%8F%8B%E6%B3%B0%E5%9B%BD%E5%BA%A6%E5%81%87%23) `138.2K 🔥` `-31%`
1. [鞠婧祎化淡妆](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8C%96%E6%B7%A1%E5%A6%86%23) `137.2K 🔥` `-24%`
1. [中东冲突出现外溢苗头](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%86%B2%E7%AA%81%E5%87%BA%E7%8E%B0%E5%A4%96%E6%BA%A2%E8%8B%97%E5%A4%B4%23) `100.3K 🔥` `-31%`
1. [一家4口爬山祈福妻子坠亡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B64%E5%8F%A3%E7%88%AC%E5%B1%B1%E7%A5%88%E7%A6%8F%E5%A6%BB%E5%AD%90%E5%9D%A0%E4%BA%A1%23) `85.8K 🔥` `-22%`
1. [440万买房北侧采光太差获赔67万 (I bought a house for RMB 4.4 million and was compensated RMB 670,000 for poor lighting on the north side.)](https://s.weibo.com/weibo?q=%23440%E4%B8%87%E4%B9%B0%E6%88%BF%E5%8C%97%E4%BE%A7%E9%87%87%E5%85%89%E5%A4%AA%E5%B7%AE%E8%8E%B7%E8%B5%9467%E4%B8%87%23) `84.3K 🔥` `-28%`

Updated at 2026-03-02 00:59:33

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
