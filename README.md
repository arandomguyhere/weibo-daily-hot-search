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

1. [Bin 回归 (Bin returns)](https://s.weibo.com/weibo?q=%23Bin%20%E5%9B%9E%E5%BD%92%23) `377.5K 🔥` `NEW`
1. [张睿 中国内地郭富城](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%20%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E9%83%AD%E5%AF%8C%E5%9F%8E%23) `330.0K 🔥` `NEW`
1. [侯佩岑点评](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E4%BD%A9%E5%B2%91%E7%82%B9%E8%AF%84%23) `244.6K 🔥` `NEW`
1. [山西挖眼案男孩高考721分选了中医学](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%8C%96%E7%9C%BC%E6%A1%88%E7%94%B7%E5%AD%A9%E9%AB%98%E8%80%83721%E5%88%86%E9%80%89%E4%BA%86%E4%B8%AD%E5%8C%BB%E5%AD%A6%23) `199.2K 🔥` `NEW`
1. [披荆斩棘直播 (Overcoming obstacles live broadcast)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `978.2K 🔥` `+123%`
1. [胖东来 刑释人员 (Fat Donglai, ex-convict)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E9%87%8A%E4%BA%BA%E5%91%98%23) `488.5K 🔥` `+42%`
1. [谁杀死了驾校 (Who killed the driving school?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%80%E6%AD%BB%E4%BA%86%E9%A9%BE%E6%A0%A1%23) `445.7K 🔥` `+30%`
1. [好多明星暴瘦 (Many celebrities have lost weight)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E6%98%8E%E6%98%9F%E6%9A%B4%E7%98%A6%23) `420.8K 🔥` `+23%`
1. [汉奸石平参拜靖国神社](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A5%B8%E7%9F%B3%E5%B9%B3%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `1.5M 🔥`
1. [50秒看中国的绿色奇迹 (50 seconds to see China’s green miracle)](https://s.weibo.com/weibo?q=%2350%E7%A7%92%E7%9C%8B%E4%B8%AD%E5%9B%BD%E7%9A%84%E7%BB%BF%E8%89%B2%E5%A5%87%E8%BF%B9%23) `731.5K 🔥`
1. [815京东家电周年庆 低至8.15折](https://s.weibo.com/weibo?q=%23815%E4%BA%AC%E4%B8%9C%E5%AE%B6%E7%94%B5%E5%91%A8%E5%B9%B4%E5%BA%86%20%E4%BD%8E%E8%87%B38.15%E6%8A%98%23) `708.8K 🔥`
1. [王传君终于原谅爱情公寓了 (Wang Chuanjun finally forgives iPartment)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%BA%86%23) `668.5K 🔥`
1. [王楚钦兼项负荷过重](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%85%BC%E9%A1%B9%E8%B4%9F%E8%8D%B7%E8%BF%87%E9%87%8D%23) `535.8K 🔥`
1. [国乐收官全员举杯简醇音乐瓶 (At the end of the traditional Chinese music, everyone raised their glasses to simple music bottles)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%90%E6%94%B6%E5%AE%98%E5%85%A8%E5%91%98%E4%B8%BE%E6%9D%AF%E7%AE%80%E9%86%87%E9%9F%B3%E4%B9%90%E7%93%B6%23) `525.6K 🔥`
1. [曹骏跳操前后对比 (Comparison before and after Cao Jun's jumping exercises)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E8%B7%B3%E6%93%8D%E5%89%8D%E5%90%8E%E5%AF%B9%E6%AF%94%23) `519.1K 🔥`
1. [曝与张凌赫合照价格](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%8E%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%88%E7%85%A7%E4%BB%B7%E6%A0%BC%23) `399.9K 🔥`
1. [C罗若离婚乔治娜每月将获10万欧元](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%8B%A5%E7%A6%BB%E5%A9%9A%E4%B9%94%E6%B2%BB%E5%A8%9C%E6%AF%8F%E6%9C%88%E5%B0%86%E8%8E%B710%E4%B8%87%E6%AC%A7%E5%85%83%23) `385.4K 🔥`
1. [赵丽颖13个月没进组了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%9613%E4%B8%AA%E6%9C%88%E6%B2%A1%E8%BF%9B%E7%BB%84%E4%BA%86%23) `383.9K 🔥`
1. [余文乐赢了曹骏 (Shawn Yue defeated Cao Jun)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%E8%B5%A2%E4%BA%86%E6%9B%B9%E9%AA%8F%23) `379.4K 🔥`
1. [张睿 梦回新还珠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%20%E6%A2%A6%E5%9B%9E%E6%96%B0%E8%BF%98%E7%8F%A0%23) `371.5K 🔥`
1. [被AI投毒后假400售后上门真演戏](https://s.weibo.com/weibo?q=%23%E8%A2%ABAI%E6%8A%95%E6%AF%92%E5%90%8E%E5%81%87400%E5%94%AE%E5%90%8E%E4%B8%8A%E9%97%A8%E7%9C%9F%E6%BC%94%E6%88%8F%23) `369.3K 🔥`
1. [比利时一学生挖到大量金币金条 (A student in Belgium dug up a large number of gold coins and gold bars)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E4%B8%80%E5%AD%A6%E7%94%9F%E6%8C%96%E5%88%B0%E5%A4%A7%E9%87%8F%E9%87%91%E5%B8%81%E9%87%91%E6%9D%A1%23) `364.4K 🔥`
1. [王传君唱rap](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%94%B1rap%23) `362.6K 🔥`
1. [宋亚轩缺席国乐那期在拍运动会](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%BC%BA%E5%B8%AD%E5%9B%BD%E4%B9%90%E9%82%A3%E6%9C%9F%E5%9C%A8%E6%8B%8D%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `360.2K 🔥`
1. [这和亲生的有什么区别](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%92%8C%E4%BA%B2%E7%94%9F%E7%9A%84%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%23) `331.4K 🔥`
1. [暗星拍的王俊凯](https://s.weibo.com/weibo?q=%23%E6%9A%97%E6%98%9F%E6%8B%8D%E7%9A%84%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `325.1K 🔥`
1. [DOTA2](https://s.weibo.com/weibo?q=%23DOTA2%23) `287.8K 🔥`
1. [余文乐 港星的含金量还在上升](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%20%E6%B8%AF%E6%98%9F%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `287.5K 🔥`
1. [邓超给初代跑男合照签名 (Deng Chao signed a group photo with the first generation of Running Man)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E7%BB%99%E5%88%9D%E4%BB%A3%E8%B7%91%E7%94%B7%E5%90%88%E7%85%A7%E7%AD%BE%E5%90%8D%23) `287.1K 🔥`
1. [东京地铁被淹却见水质清澈 (Tokyo subway was flooded but the water was clear)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E4%BA%AC%E5%9C%B0%E9%93%81%E8%A2%AB%E6%B7%B9%E5%8D%B4%E8%A7%81%E6%B0%B4%E8%B4%A8%E6%B8%85%E6%BE%88%23) `286.1K 🔥`
1. [妈妈路上不慎弄丢儿子录取通知书 (Mother accidentally lost her son’s admission letter on the road)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%B7%AF%E4%B8%8A%E4%B8%8D%E6%85%8E%E5%BC%84%E4%B8%A2%E5%84%BF%E5%AD%90%E5%BD%95%E5%8F%96%E9%80%9A%E7%9F%A5%E4%B9%A6%23) `285.5K 🔥`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `283.7K 🔥`
1. [郭富城全网首试奕境X9](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E5%85%A8%E7%BD%91%E9%A6%96%E8%AF%95%E5%A5%95%E5%A2%83X9%23) `281.8K 🔥`
1. [王俊凯染粉发 (Wang Junkai dyes his hair pink)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%9F%93%E7%B2%89%E5%8F%91%23) `281.1K 🔥`
1. [中国男篮vs乌拉圭男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E4%B9%8C%E6%8B%89%E5%9C%AD%E7%94%B7%E7%AF%AE%23) `260.7K 🔥`
1. [沈梦辰回应漂亮裙子配丑鞋](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%9B%9E%E5%BA%94%E6%BC%82%E4%BA%AE%E8%A3%99%E5%AD%90%E9%85%8D%E4%B8%91%E9%9E%8B%23) `239.0K 🔥`
1. [榜一大哥打赏千万后要求陪睡 (The top brother on the list asked to sleep with him after giving him a reward of tens of millions)](https://s.weibo.com/weibo?q=%23%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E6%89%93%E8%B5%8F%E5%8D%83%E4%B8%87%E5%90%8E%E8%A6%81%E6%B1%82%E9%99%AA%E7%9D%A1%23) `528.1K 🔥` `-76%`
1. [披荆斩棘初舞台](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%88%9D%E8%88%9E%E5%8F%B0%23) `504.7K 🔥` `-22%`
1. [终于明白减重减肥减脂区别 (Finally understand the difference between weight loss and fat loss)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%98%8E%E7%99%BD%E5%87%8F%E9%87%8D%E5%87%8F%E8%82%A5%E5%87%8F%E8%84%82%E5%8C%BA%E5%88%AB%23) `232.3K 🔥` `-26%`
1. [丁禹兮演唱会 (Ding Yuxi concert)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%BC%94%E5%94%B1%E4%BC%9A%23) `232.0K 🔥` `-23%`
1. [姚琛好稳](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E7%90%9B%E5%A5%BD%E7%A8%B3%23) `220.2K 🔥` `-26%`
1. [河南贾鲁河周口川汇区段溃口合龙](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%B4%BE%E9%B2%81%E6%B2%B3%E5%91%A8%E5%8F%A3%E5%B7%9D%E6%B1%87%E5%8C%BA%E6%AE%B5%E6%BA%83%E5%8F%A3%E5%90%88%E9%BE%99%23) `209.2K 🔥` `-38%`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `207.9K 🔥` `-32%`
1. [曝王嘉尔宋雨琦恋情 (Wang Jiaer and Song Yuqi's romance revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `200.9K 🔥` `-34%`
1. [周深宋亚轩你磕我也磕](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%BD%A0%E7%A3%95%E6%88%91%E4%B9%9F%E7%A3%95%23) `198.7K 🔥` `-35%`
1. [李雪琴回复汪苏泷](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E7%90%B4%E5%9B%9E%E5%A4%8D%E6%B1%AA%E8%8B%8F%E6%B3%B7%23) `190.8K 🔥` `-36%`
1. [纪念江泽民同志诞辰100周年大会](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%BF%B5%E6%B1%9F%E6%B3%BD%E6%B0%91%E5%90%8C%E5%BF%97%E8%AF%9E%E8%BE%B0100%E5%91%A8%E5%B9%B4%E5%A4%A7%E4%BC%9A%23) `189.3K 🔥` `-37%`
1. [无畏二连MVP (Fearless Second Consecutive MVP)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E4%BA%8C%E8%BF%9EMVP%23) `188.2K 🔥` `-35%`
1. [中598万男子不告诉妻儿父母 (5.98 million men do not tell their wives, children and parents)](https://s.weibo.com/weibo?q=%23%E4%B8%AD598%E4%B8%87%E7%94%B7%E5%AD%90%E4%B8%8D%E5%91%8A%E8%AF%89%E5%A6%BB%E5%84%BF%E7%88%B6%E6%AF%8D%23) `186.2K 🔥` `-34%`
1. [Ame 遗憾](https://s.weibo.com/weibo?q=%23Ame%20%E9%81%97%E6%86%BE%23) `186.0K 🔥` `-34%`
1. [韩方强烈敦促日本领导人正视历史](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%96%B9%E5%BC%BA%E7%83%88%E6%95%A6%E4%BF%83%E6%97%A5%E6%9C%AC%E9%A2%86%E5%AF%BC%E4%BA%BA%E6%AD%A3%E8%A7%86%E5%8E%86%E5%8F%B2%23) `184.4K 🔥` `-36%`
1. [3孩非亲生案恋爱1个月女方称怀孕](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E6%81%8B%E7%88%B11%E4%B8%AA%E6%9C%88%E5%A5%B3%E6%96%B9%E7%A7%B0%E6%80%80%E5%AD%95%23) `182.2K 🔥` `-45%`

Updated at 2026-08-15 22:02:19

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
