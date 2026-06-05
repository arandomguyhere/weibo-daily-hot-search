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

1. [豆包首次付费后月活减少610万 (Doubao’s monthly activity dropped by 6.1 million after the first payment)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E9%A6%96%E6%AC%A1%E4%BB%98%E8%B4%B9%E5%90%8E%E6%9C%88%E6%B4%BB%E5%87%8F%E5%B0%91610%E4%B8%87%23) `1.2M 🔥` `NEW`
1. [中餐厅收工合照](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E6%94%B6%E5%B7%A5%E5%90%88%E7%85%A7%23) `842.4K 🔥` `NEW`
1. [网警侦破涉2026高考诈骗案](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%AD%A6%E4%BE%A6%E7%A0%B4%E6%B6%892026%E9%AB%98%E8%80%83%E8%AF%88%E9%AA%97%E6%A1%88%23) `692.3K 🔥` `NEW`
1. [一馒落三馒生](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%A6%92%E8%90%BD%E4%B8%89%E9%A6%92%E7%94%9F%23) `645.3K 🔥` `NEW`
1. [存款达到多少可以提前退休](https://s.weibo.com/weibo?q=%23%E5%AD%98%E6%AC%BE%E8%BE%BE%E5%88%B0%E5%A4%9A%E5%B0%91%E5%8F%AF%E4%BB%A5%E6%8F%90%E5%89%8D%E9%80%80%E4%BC%91%23) `608.7K 🔥` `NEW`
1. [租房的三件套](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E6%88%BF%E7%9A%84%E4%B8%89%E4%BB%B6%E5%A5%97%23) `570.5K 🔥` `NEW`
1. [教育部辟谣高考相关谣言](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E8%BE%9F%E8%B0%A3%E9%AB%98%E8%80%83%E7%9B%B8%E5%85%B3%E8%B0%A3%E8%A8%80%23) `537.2K 🔥` `NEW`
1. [南开大学一学生被电诈220万](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%BC%80%E5%A4%A7%E5%AD%A6%E4%B8%80%E5%AD%A6%E7%94%9F%E8%A2%AB%E7%94%B5%E8%AF%88220%E4%B8%87%23) `530.9K 🔥` `NEW`
1. [高考试卷押送车队震撼瞬间](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E8%AF%95%E5%8D%B7%E6%8A%BC%E9%80%81%E8%BD%A6%E9%98%9F%E9%9C%87%E6%92%BC%E7%9E%AC%E9%97%B4%23) `482.2K 🔥` `NEW`
1. [C罗姆巴佩詹姆斯超燃世界杯短片](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%A9%B9%E5%A7%86%E6%96%AF%E8%B6%85%E7%87%83%E4%B8%96%E7%95%8C%E6%9D%AF%E7%9F%AD%E7%89%87%23) `424.6K 🔥` `NEW`
1. [攻玉官宣 (Gongyu official announcement)](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%E5%AE%98%E5%AE%A3%23) `341.0K 🔥` `NEW`
1. [陈学冬 避谶](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%AD%A6%E5%86%AC%20%E9%81%BF%E8%B0%B6%23) `338.3K 🔥` `NEW`
1. [判断孩子有没有学霸潜质](https://s.weibo.com/weibo?q=%23%E5%88%A4%E6%96%AD%E5%AD%A9%E5%AD%90%E6%9C%89%E6%B2%A1%E6%9C%89%E5%AD%A6%E9%9C%B8%E6%BD%9C%E8%B4%A8%23) `324.7K 🔥` `NEW`
1. [奚梦瑶模特朋友一个没来](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E6%A8%A1%E7%89%B9%E6%9C%8B%E5%8F%8B%E4%B8%80%E4%B8%AA%E6%B2%A1%E6%9D%A5%23) `322.3K 🔥` `NEW`
1. [李晨曾送了好多艺人水晶兔子](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E6%9B%BE%E9%80%81%E4%BA%86%E5%A5%BD%E5%A4%9A%E8%89%BA%E4%BA%BA%E6%B0%B4%E6%99%B6%E5%85%94%E5%AD%90%23) `311.0K 🔥` `NEW`
1. [英国间谍2次偷窃中国茶叶机密](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E9%97%B4%E8%B0%8D2%E6%AC%A1%E5%81%B7%E7%AA%83%E4%B8%AD%E5%9B%BD%E8%8C%B6%E5%8F%B6%E6%9C%BA%E5%AF%86%23) `296.7K 🔥` `NEW`
1. [杨紫和郭晶晶一起上台领聘](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%92%8C%E9%83%AD%E6%99%B6%E6%99%B6%E4%B8%80%E8%B5%B7%E4%B8%8A%E5%8F%B0%E9%A2%86%E8%81%98%23) `288.4K 🔥` `NEW`
1. [张凌赫转账最快的男人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BD%AC%E8%B4%A6%E6%9C%80%E5%BF%AB%E7%9A%84%E7%94%B7%E4%BA%BA%23) `277.3K 🔥` `NEW`
1. [朋友对研究生的概念](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%AF%B9%E7%A0%94%E7%A9%B6%E7%94%9F%E7%9A%84%E6%A6%82%E5%BF%B5%23) `275.9K 🔥` `NEW`
1. [家业 华莱士](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%20%E5%8D%8E%E8%8E%B1%E5%A3%AB%23) `275.3K 🔥` `NEW`
1. [实习医生无证拔牙致患者死亡获刑 (Intern doctor jailed for pulling tooth without license, causing patient's death)](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%B9%A0%E5%8C%BB%E7%94%9F%E6%97%A0%E8%AF%81%E6%8B%94%E7%89%99%E8%87%B4%E6%82%A3%E8%80%85%E6%AD%BB%E4%BA%A1%E8%8E%B7%E5%88%91%23) `275.2K 🔥` `NEW`
1. [iPhone18ProMax配色](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E9%85%8D%E8%89%B2%23) `274.3K 🔥` `NEW`
1. [果然出来吃火锅还是得戴眼镜](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E5%87%BA%E6%9D%A5%E5%90%83%E7%81%AB%E9%94%85%E8%BF%98%E6%98%AF%E5%BE%97%E6%88%B4%E7%9C%BC%E9%95%9C%23) `273.4K 🔥` `NEW`
1. [宋亚轩一把抱住刘耀文](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%80%E6%8A%8A%E6%8A%B1%E4%BD%8F%E5%88%98%E8%80%80%E6%96%87%23) `273.1K 🔥` `NEW`
1. [妈妈哄二宝一时性急打掉大宝玩具](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%93%84%E4%BA%8C%E5%AE%9D%E4%B8%80%E6%97%B6%E6%80%A7%E6%80%A5%E6%89%93%E6%8E%89%E5%A4%A7%E5%AE%9D%E7%8E%A9%E5%85%B7%23) `272.7K 🔥` `NEW`
1. [刘诗诗干练小黑裙](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E5%B9%B2%E7%BB%83%E5%B0%8F%E9%BB%91%E8%A3%99%23) `271.5K 🔥` `NEW`
1. [黄磊孙莉9岁儿子正脸照](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E5%AD%99%E8%8E%899%E5%B2%81%E5%84%BF%E5%AD%90%E6%AD%A3%E8%84%B8%E7%85%A7%23) `271.5K 🔥` `NEW`
1. [KPL票价](https://s.weibo.com/weibo?q=%23KPL%E7%A5%A8%E4%BB%B7%23) `247.7K 🔥` `NEW`
1. [高考加油红包](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%8A%A0%E6%B2%B9%E7%BA%A2%E5%8C%85%23) `212.2K 🔥` `NEW`
1. [曾沛慈说演唱会新专辑计划都在排了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%AF%B4%E6%BC%94%E5%94%B1%E4%BC%9A%E6%96%B0%E4%B8%93%E8%BE%91%E8%AE%A1%E5%88%92%E9%83%BD%E5%9C%A8%E6%8E%92%E4%BA%86%23) `211.9K 🔥` `NEW`
1. [网友模仿豆包火了 (Netizens imitate bean bags and become popular)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%A8%A1%E4%BB%BF%E8%B1%86%E5%8C%85%E7%81%AB%E4%BA%86%23) `211.3K 🔥` `NEW`
1. [孙杨张豆豆不用参加离婚综艺了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E4%B8%8D%E7%94%A8%E5%8F%82%E5%8A%A0%E7%A6%BB%E5%A9%9A%E7%BB%BC%E8%89%BA%E4%BA%86%23) `210.7K 🔥` `NEW`
1. [孟子义回桃花坞晒照](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%9B%9E%E6%A1%83%E8%8A%B1%E5%9D%9E%E6%99%92%E7%85%A7%23) `210.1K 🔥` `NEW`
1. [湘雅二医院逾8亿元工程招标疑云](https://s.weibo.com/weibo?q=%23%E6%B9%98%E9%9B%85%E4%BA%8C%E5%8C%BB%E9%99%A2%E9%80%BE8%E4%BA%BF%E5%85%83%E5%B7%A5%E7%A8%8B%E6%8B%9B%E6%A0%87%E7%96%91%E4%BA%91%23) `209.6K 🔥` `NEW`
1. [朵朵说小酒窝是小仙女](https://s.weibo.com/weibo?q=%23%E6%9C%B5%E6%9C%B5%E8%AF%B4%E5%B0%8F%E9%85%92%E7%AA%9D%E6%98%AF%E5%B0%8F%E4%BB%99%E5%A5%B3%23) `208.9K 🔥` `NEW`
1. [华莱士变身第五人格解谜事务所](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%8E%B1%E5%A3%AB%E5%8F%98%E8%BA%AB%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E8%A7%A3%E8%B0%9C%E4%BA%8B%E5%8A%A1%E6%89%80%23) `208.1K 🔥` `NEW`
1. [刘耀文对宋亚轩说下次去大溪地玩](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%AF%B9%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%AF%B4%E4%B8%8B%E6%AC%A1%E5%8E%BB%E5%A4%A7%E6%BA%AA%E5%9C%B0%E7%8E%A9%23) `208.0K 🔥` `NEW`
1. [千里追榴莲图什么](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%87%8C%E8%BF%BD%E6%A6%B4%E8%8E%B2%E5%9B%BE%E4%BB%80%E4%B9%88%23) `204.8K 🔥` `NEW`
1. [韩国芯片巨头全线崩盘](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%8A%AF%E7%89%87%E5%B7%A8%E5%A4%B4%E5%85%A8%E7%BA%BF%E5%B4%A9%E7%9B%98%23) `158.7K 🔥` `NEW`
1. [易烊千玺杂志](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%9D%82%E5%BF%97%23) `158.1K 🔥` `NEW`
1. [对减肥最难减的地方有实感了 (I have a real understanding of the most difficult part of losing weight.)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%87%8F%E8%82%A5%E6%9C%80%E9%9A%BE%E5%87%8F%E7%9A%84%E5%9C%B0%E6%96%B9%E6%9C%89%E5%AE%9E%E6%84%9F%E4%BA%86%23) `156.2K 🔥` `NEW`
1. [新疆小孩在游客临走前硬塞小羊](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E5%B0%8F%E5%AD%A9%E5%9C%A8%E6%B8%B8%E5%AE%A2%E4%B8%B4%E8%B5%B0%E5%89%8D%E7%A1%AC%E5%A1%9E%E5%B0%8F%E7%BE%8A%23) `149.7K 🔥` `NEW`
1. [男子落水7天6夜从海口漂到澄迈](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%90%BD%E6%B0%B47%E5%A4%A96%E5%A4%9C%E4%BB%8E%E6%B5%B7%E5%8F%A3%E6%BC%82%E5%88%B0%E6%BE%84%E8%BF%88%23) `142.4K 🔥` `NEW`
1. [Doinb谈Bin被罚款](https://s.weibo.com/weibo?q=%23Doinb%E8%B0%88Bin%E8%A2%AB%E7%BD%9A%E6%AC%BE%23) `126.4K 🔥` `NEW`
1. [线上线下买家电差别有多大](https://s.weibo.com/weibo?q=%23%E7%BA%BF%E4%B8%8A%E7%BA%BF%E4%B8%8B%E4%B9%B0%E5%AE%B6%E7%94%B5%E5%B7%AE%E5%88%AB%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `125.9K 🔥` `NEW`
1. [AI说了我最想跟老板说的话](https://s.weibo.com/weibo?q=%23AI%E8%AF%B4%E4%BA%86%E6%88%91%E6%9C%80%E6%83%B3%E8%B7%9F%E8%80%81%E6%9D%BF%E8%AF%B4%E7%9A%84%E8%AF%9D%23) `125.8K 🔥` `NEW`
1. [上京东看爸妈防骗直播](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%AC%E4%B8%9C%E7%9C%8B%E7%88%B8%E5%A6%88%E9%98%B2%E9%AA%97%E7%9B%B4%E6%92%AD%23) `659.9K 🔥` `+102%`
1. [中国消费者抛弃耐克比想象中更快 (Chinese consumers abandon Nike faster than expected)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B6%88%E8%B4%B9%E8%80%85%E6%8A%9B%E5%BC%83%E8%80%90%E5%85%8B%E6%AF%94%E6%83%B3%E8%B1%A1%E4%B8%AD%E6%9B%B4%E5%BF%AB%23) `212.6K 🔥` `-83%`
1. [何猷君看了一下爽文发现也不爽啊](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E7%9C%8B%E4%BA%86%E4%B8%80%E4%B8%8B%E7%88%BD%E6%96%87%E5%8F%91%E7%8E%B0%E4%B9%9F%E4%B8%8D%E7%88%BD%E5%95%8A%23) `208.5K 🔥` `-42%`
1. [奚梦瑶晚晚婚礼审美](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E6%99%9A%E6%99%9A%E5%A9%9A%E7%A4%BC%E5%AE%A1%E7%BE%8E%23) `202.6K 🔥` `-44%`
1. [曾沛慈发文致歉](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%8F%91%E6%96%87%E8%87%B4%E6%AD%89%23) `176.9K 🔥` `-51%`
1. [高考加油 (Come on for the college entrance examination)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%8A%A0%E6%B2%B9%23) `146.0K 🔥` `-51%`

Updated at 2026-06-05 14:04:13

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
