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

1. [山姆向会员致歉 (Sam apologizes to members)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%90%91%E4%BC%9A%E5%91%98%E8%87%B4%E6%AD%89%23) `1.1M 🔥` `NEW`
1. [印度苦行僧坚持站立5年不坐不躺](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E8%8B%A6%E8%A1%8C%E5%83%A7%E5%9D%9A%E6%8C%81%E7%AB%99%E7%AB%8B5%E5%B9%B4%E4%B8%8D%E5%9D%90%E4%B8%8D%E8%BA%BA%23) `888.1K 🔥` `NEW`
1. [龙舟赛变身端午消费新引擎](https://s.weibo.com/weibo?q=%23%E9%BE%99%E8%88%9F%E8%B5%9B%E5%8F%98%E8%BA%AB%E7%AB%AF%E5%8D%88%E6%B6%88%E8%B4%B9%E6%96%B0%E5%BC%95%E6%93%8E%23) `885.1K 🔥` `NEW`
1. [戚薇李承铉女儿11岁近照](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E6%9D%8E%E6%89%BF%E9%93%89%E5%A5%B3%E5%84%BF11%E5%B2%81%E8%BF%91%E7%85%A7%23) `859.0K 🔥` `NEW`
1. [突然觉得地铁好牛](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E8%A7%89%E5%BE%97%E5%9C%B0%E9%93%81%E5%A5%BD%E7%89%9B%23) `845.3K 🔥` `NEW`
1. [周杰伦女儿殿下](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%A5%B3%E5%84%BF%E6%AE%BF%E4%B8%8B%23) `836.5K 🔥` `NEW`
1. [足球宝贝闯入宠物赛道](https://s.weibo.com/weibo?q=%23%E8%B6%B3%E7%90%83%E5%AE%9D%E8%B4%9D%E9%97%AF%E5%85%A5%E5%AE%A0%E7%89%A9%E8%B5%9B%E9%81%93%23) `832.8K 🔥` `NEW`
1. [长沙鲨鱼咬律师](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E9%B2%A8%E9%B1%BC%E5%92%AC%E5%BE%8B%E5%B8%88%23) `818.0K 🔥` `NEW`
1. [山姆被约谈](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E8%A2%AB%E7%BA%A6%E8%B0%88%23) `807.2K 🔥` `NEW`
1. [世界杯期间就这样晒小卡](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%9F%E9%97%B4%E5%B0%B1%E8%BF%99%E6%A0%B7%E6%99%92%E5%B0%8F%E5%8D%A1%23) `804.7K 🔥` `NEW`
1. [这真是上古神机了 (This is really an ancient divine machine.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%9C%9F%E6%98%AF%E4%B8%8A%E5%8F%A4%E7%A5%9E%E6%9C%BA%E4%BA%86%23) `786.3K 🔥` `NEW`
1. [严军的话都被贺峻霖听进去了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%86%9B%E7%9A%84%E8%AF%9D%E9%83%BD%E8%A2%AB%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%90%AC%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `776.0K 🔥` `NEW`
1. [徐亮称再降薪没人踢球了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E4%BA%AE%E7%A7%B0%E5%86%8D%E9%99%8D%E8%96%AA%E6%B2%A1%E4%BA%BA%E8%B8%A2%E7%90%83%E4%BA%86%23) `768.0K 🔥` `NEW`
1. [黄轩瘦到61.9公斤](https://s.weibo.com/weibo?q=%23%E9%BB%84%E8%BD%A9%E7%98%A6%E5%88%B061.9%E5%85%AC%E6%96%A4%23) `761.8K 🔥` `NEW`
1. [地铁上这个扶手是给谁扶的](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E4%B8%8A%E8%BF%99%E4%B8%AA%E6%89%B6%E6%89%8B%E6%98%AF%E7%BB%99%E8%B0%81%E6%89%B6%E7%9A%84%23) `684.6K 🔥` `NEW`
1. [小沈阳暂时接受不了沈佳润谈恋爱](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%9A%82%E6%97%B6%E6%8E%A5%E5%8F%97%E4%B8%8D%E4%BA%86%E6%B2%88%E4%BD%B3%E6%B6%A6%E8%B0%88%E6%81%8B%E7%88%B1%23) `650.5K 🔥` `NEW`
1. [图书馆为什么有那么多大圆柱](https://s.weibo.com/weibo?q=%23%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E9%82%A3%E4%B9%88%E5%A4%9A%E5%A4%A7%E5%9C%86%E6%9F%B1%23) `636.5K 🔥` `NEW`
1. [遇见小面创始人致歉](https://s.weibo.com/weibo?q=%23%E9%81%87%E8%A7%81%E5%B0%8F%E9%9D%A2%E5%88%9B%E5%A7%8B%E4%BA%BA%E8%87%B4%E6%AD%89%23) `522.3K 🔥` `NEW`
1. [雷军说在街边吃热干面几十年没变](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E5%9C%A8%E8%A1%97%E8%BE%B9%E5%90%83%E7%83%AD%E5%B9%B2%E9%9D%A2%E5%87%A0%E5%8D%81%E5%B9%B4%E6%B2%A1%E5%8F%98%23) `515.4K 🔥` `NEW`
1. [张若昀看完在家里急得团团转](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E7%9C%8B%E5%AE%8C%E5%9C%A8%E5%AE%B6%E9%87%8C%E6%80%A5%E5%BE%97%E5%9B%A2%E5%9B%A2%E8%BD%AC%23) `515.0K 🔥` `NEW`
1. [陈都灵要坐在轮椅上拍完整部戏吗 (Will Chen Duling have to sit in a wheelchair for the entire movie?)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E8%A6%81%E5%9D%90%E5%9C%A8%E8%BD%AE%E6%A4%85%E4%B8%8A%E6%8B%8D%E5%AE%8C%E6%95%B4%E9%83%A8%E6%88%8F%E5%90%97%23) `514.9K 🔥` `NEW`
1. [iG人员变动](https://s.weibo.com/weibo?q=%23iG%E4%BA%BA%E5%91%98%E5%8F%98%E5%8A%A8%23) `514.9K 🔥` `NEW`
1. [严浩翔又陪贺峻霖长大了一岁](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%8F%88%E9%99%AA%E8%B4%BA%E5%B3%BB%E9%9C%96%E9%95%BF%E5%A4%A7%E4%BA%86%E4%B8%80%E5%B2%81%23) `512.2K 🔥` `NEW`
1. [沈佳润说爸妈干啥都不带我](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E8%AF%B4%E7%88%B8%E5%A6%88%E5%B9%B2%E5%95%A5%E9%83%BD%E4%B8%8D%E5%B8%A6%E6%88%91%23) `502.0K 🔥` `NEW`
1. [答辩别戴电子手表](https://s.weibo.com/weibo?q=%23%E7%AD%94%E8%BE%A9%E5%88%AB%E6%88%B4%E7%94%B5%E5%AD%90%E6%89%8B%E8%A1%A8%23) `457.8K 🔥` `NEW`
1. [郭碧婷生二胎脐带绕颈](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%94%9F%E4%BA%8C%E8%83%8E%E8%84%90%E5%B8%A6%E7%BB%95%E9%A2%88%23) `423.2K 🔥` `NEW`
1. [香港偶遇林俊杰七七](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%81%B6%E9%81%87%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%B8%83%E4%B8%83%23) `418.8K 🔥` `NEW`
1. [鱼缸炸了30万名贵鱼变鱼头汤](https://s.weibo.com/weibo?q=%23%E9%B1%BC%E7%BC%B8%E7%82%B8%E4%BA%8630%E4%B8%87%E5%90%8D%E8%B4%B5%E9%B1%BC%E5%8F%98%E9%B1%BC%E5%A4%B4%E6%B1%A4%23) `370.7K 🔥` `NEW`
1. [溜溜梅港股主板上市](https://s.weibo.com/weibo?q=%23%E6%BA%9C%E6%BA%9C%E6%A2%85%E6%B8%AF%E8%82%A1%E4%B8%BB%E6%9D%BF%E4%B8%8A%E5%B8%82%23) `364.9K 🔥` `NEW`
1. [有蝴蝶结的香水怎么系](https://s.weibo.com/weibo?q=%23%E6%9C%89%E8%9D%B4%E8%9D%B6%E7%BB%93%E7%9A%84%E9%A6%99%E6%B0%B4%E6%80%8E%E4%B9%88%E7%B3%BB%23) `364.7K 🔥` `NEW`
1. [郝景芳承认用AI写作 (Hao Jingfang admits to writing with AI)](https://s.weibo.com/weibo?q=%23%E9%83%9D%E6%99%AF%E8%8A%B3%E6%89%BF%E8%AE%A4%E7%94%A8AI%E5%86%99%E4%BD%9C%23) `364.7K 🔥` `NEW`
1. [渝见小面老板说无法坦然接受道歉](https://s.weibo.com/weibo?q=%23%E6%B8%9D%E8%A7%81%E5%B0%8F%E9%9D%A2%E8%80%81%E6%9D%BF%E8%AF%B4%E6%97%A0%E6%B3%95%E5%9D%A6%E7%84%B6%E6%8E%A5%E5%8F%97%E9%81%93%E6%AD%89%23) `364.6K 🔥` `NEW`
1. [原来真有人被老天爷追着喂饭吃啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E6%9C%89%E4%BA%BA%E8%A2%AB%E8%80%81%E5%A4%A9%E7%88%B7%E8%BF%BD%E7%9D%80%E5%96%82%E9%A5%AD%E5%90%83%E5%95%8A%23) `358.0K 🔥` `NEW`
1. [小猫的长相就是人类化妆的方式](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%9A%84%E9%95%BF%E7%9B%B8%E5%B0%B1%E6%98%AF%E4%BA%BA%E7%B1%BB%E5%8C%96%E5%A6%86%E7%9A%84%E6%96%B9%E5%BC%8F%23) `354.9K 🔥` `NEW`
1. [高市早苗抵达英国没有欢迎仪式](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%8A%B5%E8%BE%BE%E8%8B%B1%E5%9B%BD%E6%B2%A1%E6%9C%89%E6%AC%A2%E8%BF%8E%E4%BB%AA%E5%BC%8F%23) `331.5K 🔥` `NEW`
1. [普通人要知道的湿厕纸真相](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E6%B9%BF%E5%8E%95%E7%BA%B8%E7%9C%9F%E7%9B%B8%23) `291.1K 🔥` `NEW`
1. [歌手OliverTree空难去世](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8BOliverTree%E7%A9%BA%E9%9A%BE%E5%8E%BB%E4%B8%96%23) `261.8K 🔥` `NEW`
1. [Breathe离队](https://s.weibo.com/weibo?q=%23Breathe%E7%A6%BB%E9%98%9F%23) `244.3K 🔥` `NEW`
1. [在南法偶遇赵今麦](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8D%97%E6%B3%95%E5%81%B6%E9%81%87%E8%B5%B5%E4%BB%8A%E9%BA%A6%23) `212.4K 🔥` `NEW`
1. [李思潼这波真的太聪明了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%E8%BF%99%E6%B3%A2%E7%9C%9F%E7%9A%84%E5%A4%AA%E8%81%AA%E6%98%8E%E4%BA%86%23) `210.2K 🔥` `NEW`
1. [全身九成兽皮痣男童因癌变离世 (Boy with 90% animal skin moles on his body dies of cancer)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E8%BA%AB%E4%B9%9D%E6%88%90%E5%85%BD%E7%9A%AE%E7%97%A3%E7%94%B7%E7%AB%A5%E5%9B%A0%E7%99%8C%E5%8F%98%E7%A6%BB%E4%B8%96%23) `210.0K 🔥` `NEW`
1. [齐豫补位歌手里只认识杨坤](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%B1%AB%E8%A1%A5%E4%BD%8D%E6%AD%8C%E6%89%8B%E9%87%8C%E5%8F%AA%E8%AE%A4%E8%AF%86%E6%9D%A8%E5%9D%A4%23) `209.0K 🔥` `NEW`
1. [日本球员不戴护腿板违规吗](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%90%83%E5%91%98%E4%B8%8D%E6%88%B4%E6%8A%A4%E8%85%BF%E6%9D%BF%E8%BF%9D%E8%A7%84%E5%90%97%23) `208.8K 🔥` `NEW`
1. [浪浪山小妖怪2](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E6%B5%AA%E5%B1%B1%E5%B0%8F%E5%A6%96%E6%80%AA2%23) `204.2K 🔥` `NEW`
1. [蔡琳高梓淇都不愿意为对方学习语言](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%90%B3%E9%AB%98%E6%A2%93%E6%B7%87%E9%83%BD%E4%B8%8D%E6%84%BF%E6%84%8F%E4%B8%BA%E5%AF%B9%E6%96%B9%E5%AD%A6%E4%B9%A0%E8%AF%AD%E8%A8%80%23) `197.5K 🔥` `NEW`
1. [养狗人才知道小狗这一脚的含金量](https://s.weibo.com/weibo?q=%23%E5%85%BB%E7%8B%97%E4%BA%BA%E6%89%8D%E7%9F%A5%E9%81%93%E5%B0%8F%E7%8B%97%E8%BF%99%E4%B8%80%E8%84%9A%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `194.6K 🔥` `NEW`
1. [日本队目标夺冠](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%98%9F%E7%9B%AE%E6%A0%87%E5%A4%BA%E5%86%A0%23) `179.3K 🔥` `NEW`
1. [医疗剧一部接一部来了](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%96%97%E5%89%A7%E4%B8%80%E9%83%A8%E6%8E%A5%E4%B8%80%E9%83%A8%E6%9D%A5%E4%BA%86%23) `164.0K 🔥` `NEW`
1. [家长偶遇雷军鼓励孩子去小米上班](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%81%B6%E9%81%87%E9%9B%B7%E5%86%9B%E9%BC%93%E5%8A%B1%E5%AD%A9%E5%AD%90%E5%8E%BB%E5%B0%8F%E7%B1%B3%E4%B8%8A%E7%8F%AD%23) `159.2K 🔥` `NEW`
1. [蔚来李斌再次发出预警](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5%E6%9D%8E%E6%96%8C%E5%86%8D%E6%AC%A1%E5%8F%91%E5%87%BA%E9%A2%84%E8%AD%A6%23) `158.4K 🔥` `NEW`
1. [金价 (gold price)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `266.2K 🔥`

Updated at 2026-06-15 15:00:51

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
