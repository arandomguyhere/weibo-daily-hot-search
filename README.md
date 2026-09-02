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

1. [花儿与少年2026官宣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B42026%E5%AE%98%E5%AE%A3%23) `1.9M 🔥` `NEW`
1. [失联人员深埋巨石和淤泥之下](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E8%81%94%E4%BA%BA%E5%91%98%E6%B7%B1%E5%9F%8B%E5%B7%A8%E7%9F%B3%E5%92%8C%E6%B7%A4%E6%B3%A5%E4%B9%8B%E4%B8%8B%23) `975.1K 🔥` `NEW`
1. [万千气象看北京](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E5%8C%97%E4%BA%AC%23) `931.3K 🔥` `NEW`
1. [花儿与少年8八家客户](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B48%E5%85%AB%E5%AE%B6%E5%AE%A2%E6%88%B7%23) `931.0K 🔥` `NEW`
1. [跟任何人相处都大大方方的秘诀](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E4%BB%BB%E4%BD%95%E4%BA%BA%E7%9B%B8%E5%A4%84%E9%83%BD%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%E7%9A%84%E7%A7%98%E8%AF%80%23) `924.4K 🔥` `NEW`
1. [于适且初洗护发代言人](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%E4%B8%94%E5%88%9D%E6%B4%97%E6%8A%A4%E5%8F%91%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `633.7K 🔥` `NEW`
1. [苹果小米华为发布时间撞档](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%B0%8F%E7%B1%B3%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E6%97%B6%E9%97%B4%E6%92%9E%E6%A1%A3%23) `600.8K 🔥` `NEW`
1. [微微一笑很倾城改名一笑倾城](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%BE%AE%E4%B8%80%E7%AC%91%E5%BE%88%E5%80%BE%E5%9F%8E%E6%94%B9%E5%90%8D%E4%B8%80%E7%AC%91%E5%80%BE%E5%9F%8E%23) `551.7K 🔥` `NEW`
1. [多去接近你根本配不上的人](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%8E%BB%E6%8E%A5%E8%BF%91%E4%BD%A0%E6%A0%B9%E6%9C%AC%E9%85%8D%E4%B8%8D%E4%B8%8A%E7%9A%84%E4%BA%BA%23) `534.1K 🔥` `NEW`
1. [原来银行卡上的金色卡片是真金](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%93%B6%E8%A1%8C%E5%8D%A1%E4%B8%8A%E7%9A%84%E9%87%91%E8%89%B2%E5%8D%A1%E7%89%87%E6%98%AF%E7%9C%9F%E9%87%91%23) `534.0K 🔥` `NEW`
1. [星宇股份董事长称深刻反省真诚道歉](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E8%91%A3%E4%BA%8B%E9%95%BF%E7%A7%B0%E6%B7%B1%E5%88%BB%E5%8F%8D%E7%9C%81%E7%9C%9F%E8%AF%9A%E9%81%93%E6%AD%89%23) `531.5K 🔥` `NEW`
1. [重型机械已抵达吉隆口岸大楼](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%9E%8B%E6%9C%BA%E6%A2%B0%E5%B7%B2%E6%8A%B5%E8%BE%BE%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%A4%A7%E6%A5%BC%23) `529.1K 🔥` `NEW`
1. [张继科带课一个半小时25元](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E5%B8%A6%E8%AF%BE%E4%B8%80%E4%B8%AA%E5%8D%8A%E5%B0%8F%E6%97%B625%E5%85%83%23) `524.3K 🔥` `NEW`
1. [闪婚获近千万房产99%份额离婚得50万](https://s.weibo.com/weibo?q=%23%E9%97%AA%E5%A9%9A%E8%8E%B7%E8%BF%91%E5%8D%83%E4%B8%87%E6%88%BF%E4%BA%A799%25%E4%BB%BD%E9%A2%9D%E7%A6%BB%E5%A9%9A%E5%BE%9750%E4%B8%87%23) `521.5K 🔥` `NEW`
1. [39岁抗癌博主芳芳离世](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E8%8A%B3%E8%8A%B3%E7%A6%BB%E4%B8%96%23) `520.4K 🔥` `NEW`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `518.8K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `516.1K 🔥` `NEW`
1. [井柏然对花少2原班人马拍剧否定三连](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AF%B9%E8%8A%B1%E5%B0%912%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%E6%8B%8D%E5%89%A7%E5%90%A6%E5%AE%9A%E4%B8%89%E8%BF%9E%23) `512.0K 🔥` `NEW`
1. [迪丽热巴香辣狂欢只对粉丝开放](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A6%99%E8%BE%A3%E7%8B%82%E6%AC%A2%E5%8F%AA%E5%AF%B9%E7%B2%89%E4%B8%9D%E5%BC%80%E6%94%BE%23) `507.1K 🔥` `NEW`
1. [宁静回应杨洋走丢](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E5%9B%9E%E5%BA%94%E6%9D%A8%E6%B4%8B%E8%B5%B0%E4%B8%A2%23) `505.3K 🔥` `NEW`
1. [G216全线抢通](https://s.weibo.com/weibo?q=%23G216%E5%85%A8%E7%BA%BF%E6%8A%A2%E9%80%9A%23) `501.9K 🔥` `NEW`
1. [池艺恩vata官宣结婚](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E8%89%BA%E6%81%A9vata%E5%AE%98%E5%AE%A3%E7%BB%93%E5%A9%9A%23) `499.4K 🔥` `NEW`
1. [小S曝许雅钧组织与具俊晔家庭聚餐](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E6%9B%9D%E8%AE%B8%E9%9B%85%E9%92%A7%E7%BB%84%E7%BB%87%E4%B8%8E%E5%85%B7%E4%BF%8A%E6%99%94%E5%AE%B6%E5%BA%AD%E8%81%9A%E9%A4%90%23) `496.6K 🔥` `NEW`
1. [网红村支书因女儿重度抑郁辞职](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%9D%91%E6%94%AF%E4%B9%A6%E5%9B%A0%E5%A5%B3%E5%84%BF%E9%87%8D%E5%BA%A6%E6%8A%91%E9%83%81%E8%BE%9E%E8%81%8C%23) `494.5K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `491.0K 🔥` `NEW`
1. [我囤破烂就易烊千玺这样](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%A4%E7%A0%B4%E7%83%82%E5%B0%B1%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E8%BF%99%E6%A0%B7%23) `489.7K 🔥` `NEW`
1. [方媛采访安排粤语翻译](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E9%87%87%E8%AE%BF%E5%AE%89%E6%8E%92%E7%B2%A4%E8%AF%AD%E7%BF%BB%E8%AF%91%23) `486.7K 🔥` `NEW`
1. [最让人讨厌的性格特征](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%AE%A9%E4%BA%BA%E8%AE%A8%E5%8E%8C%E7%9A%84%E6%80%A7%E6%A0%BC%E7%89%B9%E5%BE%81%23) `485.6K 🔥` `NEW`
1. [男子爱车贴膜忘去水印满车字母](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%88%B1%E8%BD%A6%E8%B4%B4%E8%86%9C%E5%BF%98%E5%8E%BB%E6%B0%B4%E5%8D%B0%E6%BB%A1%E8%BD%A6%E5%AD%97%E6%AF%8D%23) `482.0K 🔥` `NEW`
1. [数亿人冲破信息茧房感觉不舒服](https://s.weibo.com/weibo?q=%23%E6%95%B0%E4%BA%BF%E4%BA%BA%E5%86%B2%E7%A0%B4%E4%BF%A1%E6%81%AF%E8%8C%A7%E6%88%BF%E6%84%9F%E8%A7%89%E4%B8%8D%E8%88%92%E6%9C%8D%23) `479.6K 🔥` `NEW`
1. [花少2母带 红楼梦原稿](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E6%AF%8D%E5%B8%A6%20%E7%BA%A2%E6%A5%BC%E6%A2%A6%E5%8E%9F%E7%A8%BF%23) `477.2K 🔥` `NEW`
1. [英国护照无户口女儿入读公立幼儿园](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E6%8A%A4%E7%85%A7%E6%97%A0%E6%88%B7%E5%8F%A3%E5%A5%B3%E5%84%BF%E5%85%A5%E8%AF%BB%E5%85%AC%E7%AB%8B%E5%B9%BC%E5%84%BF%E5%9B%AD%23) `473.3K 🔥` `NEW`
1. [杨毅谈管泽元事件](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%AF%85%E8%B0%88%E7%AE%A1%E6%B3%BD%E5%85%83%E4%BA%8B%E4%BB%B6%23) `473.1K 🔥` `NEW`
1. [女大学生飞机上遭邻座中年女子殴打](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E9%A3%9E%E6%9C%BA%E4%B8%8A%E9%81%AD%E9%82%BB%E5%BA%A7%E4%B8%AD%E5%B9%B4%E5%A5%B3%E5%AD%90%E6%AE%B4%E6%89%93%23) `469.9K 🔥` `NEW`
1. [恋陪剧本杀 擦边](https://s.weibo.com/weibo?q=%23%E6%81%8B%E9%99%AA%E5%89%A7%E6%9C%AC%E6%9D%80%20%E6%93%A6%E8%BE%B9%23) `466.6K 🔥` `NEW`
1. [一句对不起换来至少一个月愧疚](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%A5%E5%AF%B9%E4%B8%8D%E8%B5%B7%E6%8D%A2%E6%9D%A5%E8%87%B3%E5%B0%91%E4%B8%80%E4%B8%AA%E6%9C%88%E6%84%A7%E7%96%9A%23) `464.6K 🔥` `NEW`
1. [沈阳物价](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E7%89%A9%E4%BB%B7%23) `462.4K 🔥` `NEW`
1. [花少2总导演回应节目翻红](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E6%80%BB%E5%AF%BC%E6%BC%94%E5%9B%9E%E5%BA%94%E8%8A%82%E7%9B%AE%E7%BF%BB%E7%BA%A2%23) `459.8K 🔥` `NEW`
1. [问界M7追尾货车悬空电线杆](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM7%E8%BF%BD%E5%B0%BE%E8%B4%A7%E8%BD%A6%E6%82%AC%E7%A9%BA%E7%94%B5%E7%BA%BF%E6%9D%86%23) `456.5K 🔥` `NEW`
1. [尚之桃在分手这一天晋升失败失去挚友](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E4%B9%8B%E6%A1%83%E5%9C%A8%E5%88%86%E6%89%8B%E8%BF%99%E4%B8%80%E5%A4%A9%E6%99%8B%E5%8D%87%E5%A4%B1%E8%B4%A5%E5%A4%B1%E5%8E%BB%E6%8C%9A%E5%8F%8B%23) `453.0K 🔥` `NEW`
1. [花12万求三胎生男孩失败索赔17万](https://s.weibo.com/weibo?q=%23%E8%8A%B112%E4%B8%87%E6%B1%82%E4%B8%89%E8%83%8E%E7%94%9F%E7%94%B7%E5%AD%A9%E5%A4%B1%E8%B4%A5%E7%B4%A2%E8%B5%9417%E4%B8%87%23) `450.4K 🔥` `NEW`
1. [普京痛斥日本挑衅](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%97%9B%E6%96%A5%E6%97%A5%E6%9C%AC%E6%8C%91%E8%A1%85%23) `447.4K 🔥` `NEW`
1. [何超莲陈妍希不是打架是跳舞](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%8E%B2%E9%99%88%E5%A6%8D%E5%B8%8C%E4%B8%8D%E6%98%AF%E6%89%93%E6%9E%B6%E6%98%AF%E8%B7%B3%E8%88%9E%23) `445.2K 🔥` `NEW`
1. [方媛说三胎会叫爸爸妈妈了](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E8%AF%B4%E4%B8%89%E8%83%8E%E4%BC%9A%E5%8F%AB%E7%88%B8%E7%88%B8%E5%A6%88%E5%A6%88%E4%BA%86%23) `442.2K 🔥` `NEW`
1. [王俊凯官宣打歌2026](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%AE%98%E5%AE%A3%E6%89%93%E6%AD%8C2026%23) `438.6K 🔥` `NEW`
1. [早春晴朗第九集抽烟镜头被删了](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E7%AC%AC%E4%B9%9D%E9%9B%86%E6%8A%BD%E7%83%9F%E9%95%9C%E5%A4%B4%E8%A2%AB%E5%88%A0%E4%BA%86%23) `436.7K 🔥` `NEW`
1. [林依晨说自己脾气不太好](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E8%AF%B4%E8%87%AA%E5%B7%B1%E8%84%BE%E6%B0%94%E4%B8%8D%E5%A4%AA%E5%A5%BD%23) `434.1K 🔥` `NEW`
1. [果然一代人有一代人的月饼](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E6%9C%88%E9%A5%BC%23) `432.1K 🔥` `NEW`
1. [毛阿敏 许晴](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E9%98%BF%E6%95%8F%20%E8%AE%B8%E6%99%B4%23) `451.6K 🔥` `+75%`
1. [花少2被爆料大量未播细节](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E8%A2%AB%E7%88%86%E6%96%99%E5%A4%A7%E9%87%8F%E6%9C%AA%E6%92%AD%E7%BB%86%E8%8A%82%23) `641.0K 🔥`
1. [老款手机集体涨价](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%AC%BE%E6%89%8B%E6%9C%BA%E9%9B%86%E4%BD%93%E6%B6%A8%E4%BB%B7%23) `509.9K 🔥` `-46%`

Updated at 2026-09-02 12:42:32

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
