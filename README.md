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

1. [王楚钦男单夺冠 (Wang Chuqin wins men's singles championship)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%94%B7%E5%8D%95%E5%A4%BA%E5%86%A0%23) `34.4K 🔥` `+31%`
1. [伊朗前总统内贾德遇袭身亡 (Former Iranian President Mahmoud Ahmadinejad killed in attack)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%89%8D%E6%80%BB%E7%BB%9F%E5%86%85%E8%B4%BE%E5%BE%B7%E9%81%87%E8%A2%AD%E8%BA%AB%E4%BA%A1%23) `225.6K 🔥`
1. [WiFi 穿墙透视 (WiFi see-through wall)](https://s.weibo.com/weibo?q=%23WiFi%20%E7%A9%BF%E5%A2%99%E9%80%8F%E8%A7%86%23) `62.7K 🔥`
1. [2026新春走基层 (2026 New Year Goes to the Grassroots)](https://s.weibo.com/weibo?q=%232026%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%23) `48.6K 🔥`
1. [三甲医生回应秦岚嗓子哑了三年 (A top-level doctor responded that Qin Lan’s voice has been hoarse for three years.)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E5%93%91%E4%BA%86%E4%B8%89%E5%B9%B4%23) `48.4K 🔥`
1. [浙江地震](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%9C%B0%E9%9C%87%23) `48.3K 🔥`
1. [公然击杀主权国家领导人不可接受 (Blatantly killing the leader of a sovereign country is unacceptable)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%84%B6%E5%87%BB%E6%9D%80%E4%B8%BB%E6%9D%83%E5%9B%BD%E5%AE%B6%E9%A2%86%E5%AF%BC%E4%BA%BA%E4%B8%8D%E5%8F%AF%E6%8E%A5%E5%8F%97%23) `48.2K 🔥`
1. [小伙腹痛CT查出肠道卡2把勺子 (Boy with abdominal pain, CT found two spoons stuck in intestine)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E8%85%B9%E7%97%9BCT%E6%9F%A5%E5%87%BA%E8%82%A0%E9%81%93%E5%8D%A12%E6%8A%8A%E5%8B%BA%E5%AD%90%23) `45.0K 🔥`
1. [伊朗袭击27个美军基地 (Iran attacks 27 US military bases)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB27%E4%B8%AA%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `44.3K 🔥`
1. [浙江省地震局通报称今晚浙江没地震](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E7%9C%81%E5%9C%B0%E9%9C%87%E5%B1%80%E9%80%9A%E6%8A%A5%E7%A7%B0%E4%BB%8A%E6%99%9A%E6%B5%99%E6%B1%9F%E6%B2%A1%E5%9C%B0%E9%9C%87%23) `44.3K 🔥`
1. [赵今麦流浪地球3造型](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%833%E9%80%A0%E5%9E%8B%23) `44.3K 🔥`
1. [俄罗斯在中东的布局被美国搅乱了 (Russia's layout in the Middle East has been disrupted by the United States)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%9C%A8%E4%B8%AD%E4%B8%9C%E7%9A%84%E5%B8%83%E5%B1%80%E8%A2%AB%E7%BE%8E%E5%9B%BD%E6%90%85%E4%B9%B1%E4%BA%86%23) `44.2K 🔥`
1. [伊朗向美军林肯号航母发射导弹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%91%E7%BE%8E%E5%86%9B%E6%9E%97%E8%82%AF%E5%8F%B7%E8%88%AA%E6%AF%8D%E5%8F%91%E5%B0%84%E5%AF%BC%E5%BC%B9%23) `44.2K 🔥`
1. [中东全面战争一触即发](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%85%A8%E9%9D%A2%E6%88%98%E4%BA%89%E4%B8%80%E8%A7%A6%E5%8D%B3%E5%8F%91%23) `44.2K 🔥`
1. [美以袭击伊朗金价为何下跌 (Why gold prices fell after US-Israeli attack on Iran)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E9%87%91%E4%BB%B7%E4%B8%BA%E4%BD%95%E4%B8%8B%E8%B7%8C%23) `44.1K 🔥`
1. [伊朗总统就哈梅内伊身亡发声明](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E5%B0%B1%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E8%BA%AB%E4%BA%A1%E5%8F%91%E5%A3%B0%E6%98%8E%23) `44.1K 🔥`
1. [以色列陷入多线作战的战争泥潭 (Israel is mired in a multi-front war)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%99%B7%E5%85%A5%E5%A4%9A%E7%BA%BF%E4%BD%9C%E6%88%98%E7%9A%84%E6%88%98%E4%BA%89%E6%B3%A5%E6%BD%AD%23) `44.1K 🔥`
1. [迪拜已拦截超百次伊朗炸弹 (Dubai has intercepted more than 100 Iranian bombs)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E5%B7%B2%E6%8B%A6%E6%88%AA%E8%B6%85%E7%99%BE%E6%AC%A1%E4%BC%8A%E6%9C%97%E7%82%B8%E5%BC%B9%23) `44.1K 🔥`
1. [多国就美以袭击伊朗表态](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E5%B0%B1%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E8%A1%A8%E6%80%81%23) `39.0K 🔥`
1. [AI短剧 (AI skit)](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%23) `35.6K 🔥`
1. [纪凌尘与韩国女友泰国度假](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%87%8C%E5%B0%98%E4%B8%8E%E9%9F%A9%E5%9B%BD%E5%A5%B3%E5%8F%8B%E6%B3%B0%E5%9B%BD%E5%BA%A6%E5%81%87%23) `34.4K 🔥`
1. [张元英签售态度 (Zhang Yuanying's attitude towards signing sales)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%AD%BE%E5%94%AE%E6%80%81%E5%BA%A6%23) `34.3K 🔥`
1. [鞠婧祎化淡妆](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8C%96%E6%B7%A1%E5%A6%86%23) `29.8K 🔥`
1. [伊朗将走向何方 (Where will Iran go?)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B0%86%E8%B5%B0%E5%90%91%E4%BD%95%E6%96%B9%23) `29.7K 🔥`
1. [迪丽热巴化妆王亚飞发型丽杰 (Dilireba's makeup, Wang Yafei's hairstyle, Lijie)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8C%96%E5%A6%86%E7%8E%8B%E4%BA%9A%E9%A3%9E%E5%8F%91%E5%9E%8B%E4%B8%BD%E6%9D%B0%23) `28.9K 🔥`
1. [以色列对伊新一轮空袭 (Israel launches new round of air strikes against Iraq)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%AF%B9%E4%BC%8A%E6%96%B0%E4%B8%80%E8%BD%AE%E7%A9%BA%E8%A2%AD%23) `26.0K 🔥`
1. [伊朗临时领导委员会开始工作](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%B4%E6%97%B6%E9%A2%86%E5%AF%BC%E5%A7%94%E5%91%98%E4%BC%9A%E5%BC%80%E5%A7%8B%E5%B7%A5%E4%BD%9C%23) `24.3K 🔥`
1. [出轨对象得知感染HIV还瞒着自己](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A8%E5%AF%B9%E8%B1%A1%E5%BE%97%E7%9F%A5%E6%84%9F%E6%9F%93HIV%E8%BF%98%E7%9E%92%E7%9D%80%E8%87%AA%E5%B7%B1%23) `24.1K 🔥`
1. [王楚钦孙颖莎冠军自拍 (Wang Chuqin and Sun Yingsha’s championship selfie)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E5%86%A0%E5%86%9B%E8%87%AA%E6%8B%8D%23) `24.1K 🔥`
1. [孙颖莎女单夺冠 (Sun Yingsha wins women's singles championship)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A5%B3%E5%8D%95%E5%A4%BA%E5%86%A0%23) `24.0K 🔥`
1. [伊朗发布击落美无人机画面 (Iran releases footage of downing US drone)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B8%83%E5%87%BB%E8%90%BD%E7%BE%8E%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%94%BB%E9%9D%A2%23) `24.0K 🔥`
1. [伊朗导弹击中以色列中部致6死23伤](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%AD%E9%83%A8%E8%87%B46%E6%AD%BB23%E4%BC%A4%23) `23.9K 🔥`
1. [迪丽热巴连续4年出席迪奥巴黎大秀 (Dilireba attends Dior Paris show for 4 consecutive years)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E5%87%BA%E5%B8%AD%E8%BF%AA%E5%A5%A5%E5%B7%B4%E9%BB%8E%E5%A4%A7%E7%A7%80%23) `23.9K 🔥`
1. [中东冲突全面扩散](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%86%B2%E7%AA%81%E5%85%A8%E9%9D%A2%E6%89%A9%E6%95%A3%23) `23.8K 🔥`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `23.3K 🔥`
1. [中东冲突出现外溢苗头 (Conflicts in the Middle East are showing signs of spillover)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%86%B2%E7%AA%81%E5%87%BA%E7%8E%B0%E5%A4%96%E6%BA%A2%E8%8B%97%E5%A4%B4%23) `20.0K 🔥`
1. [江湖夜雨十年灯](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B9%96%E5%A4%9C%E9%9B%A8%E5%8D%81%E5%B9%B4%E7%81%AF%23) `19.8K 🔥`
1. [王天辰郭晓婷 这样的距离算适当吗 (Wang Tianchen Guo Xiaoting Is this distance appropriate?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E9%83%AD%E6%99%93%E5%A9%B7%20%E8%BF%99%E6%A0%B7%E7%9A%84%E8%B7%9D%E7%A6%BB%E7%AE%97%E9%80%82%E5%BD%93%E5%90%97%23) `19.3K 🔥`
1. [一油轮欲通过霍尔木兹海峡被击中 (An oil tanker was hit while trying to pass through the Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B2%B9%E8%BD%AE%E6%AC%B2%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%A2%AB%E5%87%BB%E4%B8%AD%23) `19.3K 🔥`
1. [玫瑰丛生 (rose bush)](https://s.weibo.com/weibo?q=%23%E7%8E%AB%E7%91%B0%E4%B8%9B%E7%94%9F%23) `18.8K 🔥`
1. [宇宙闪烁请注意](https://s.weibo.com/weibo?q=%23%E5%AE%87%E5%AE%99%E9%97%AA%E7%83%81%E8%AF%B7%E6%B3%A8%E6%84%8F%23) `18.8K 🔥`
1. [迪拜家长安抚孩子外面是烟花](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E5%AE%B6%E9%95%BF%E5%AE%89%E6%8A%9A%E5%AD%A9%E5%AD%90%E5%A4%96%E9%9D%A2%E6%98%AF%E7%83%9F%E8%8A%B1%23) `18.8K 🔥`
1. [朱志鑫 漫步艺术回廊](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E6%BC%AB%E6%AD%A5%E8%89%BA%E6%9C%AF%E5%9B%9E%E5%BB%8A%23) `18.8K 🔥`
1. [一家4口爬山祈福妻子坠亡 (Family of 4 climbs mountain to pray for wife's death after falling)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B64%E5%8F%A3%E7%88%AC%E5%B1%B1%E7%A5%88%E7%A6%8F%E5%A6%BB%E5%AD%90%E5%9D%A0%E4%BA%A1%23) `18.7K 🔥`
1. [陈思罕 我是一个专业的摄影师 (Chen Sihan I am a professional photographer)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%20%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E4%B8%93%E4%B8%9A%E7%9A%84%E6%91%84%E5%BD%B1%E5%B8%88%23) `18.7K 🔥`
1. [唐宫奇案之青雾风鸣](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%E4%B9%8B%E9%9D%92%E9%9B%BE%E9%A3%8E%E9%B8%A3%23) `18.7K 🔥`
1. [WTT新加坡大满贯](https://s.weibo.com/weibo?q=%23WTT%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%A4%A7%E6%BB%A1%E8%B4%AF%23) `18.7K 🔥`
1. [中国军号发布视频 (China Military Bugle releases video)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E5%8F%B7%E5%8F%91%E5%B8%83%E8%A7%86%E9%A2%91%23) `18.7K 🔥`
1. [陈思罕镜头里的四代 (The four generations in Chen Sihan’s lens)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%E9%95%9C%E5%A4%B4%E9%87%8C%E7%9A%84%E5%9B%9B%E4%BB%A3%23) `18.7K 🔥`
1. [章若楠同款敏感防御伞 (Zhang Ruonan's same sensitive defense umbrella)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%90%8C%E6%AC%BE%E6%95%8F%E6%84%9F%E9%98%B2%E5%BE%A1%E4%BC%9E%23) `48.1K 🔥` `-66%`
1. [纯真年代的爱情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `18.7K 🔥` `-22%`

Updated at 2026-03-02 03:57:17

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
