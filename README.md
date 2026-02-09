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

1. [贺娇龙抢救前还在安排工作 (He Jiaolong was still arranging work before the rescue)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%A8%87%E9%BE%99%E6%8A%A2%E6%95%91%E5%89%8D%E8%BF%98%E5%9C%A8%E5%AE%89%E6%8E%92%E5%B7%A5%E4%BD%9C%23) `1.1M 🔥` `NEW`
1. [自嗨锅濒临破产](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%97%A8%E9%94%85%E6%BF%92%E4%B8%B4%E7%A0%B4%E4%BA%A7%23) `811.4K 🔥` `NEW`
1. [2026央视新春走基层](https://s.weibo.com/weibo?q=%232026%E5%A4%AE%E8%A7%86%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%23) `612.8K 🔥` `NEW`
1. [女装牛仔裤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E7%89%9B%E4%BB%94%E8%A3%A4%23) `403.0K 🔥` `NEW`
1. [成龙沈佳润合唱](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%BE%99%E6%B2%88%E4%BD%B3%E6%B6%A6%E5%90%88%E5%94%B1%23) `325.8K 🔥` `NEW`
1. [美国牙医称自己差点掉入斩杀线](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%89%99%E5%8C%BB%E7%A7%B0%E8%87%AA%E5%B7%B1%E5%B7%AE%E7%82%B9%E6%8E%89%E5%85%A5%E6%96%A9%E6%9D%80%E7%BA%BF%23) `318.5K 🔥` `NEW`
1. [春节档全阵容集体亮相六公主](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%A1%A3%E5%85%A8%E9%98%B5%E5%AE%B9%E9%9B%86%E4%BD%93%E4%BA%AE%E7%9B%B8%E5%85%AD%E5%85%AC%E4%B8%BB%23) `303.9K 🔥` `NEW`
1. [空气炸锅半年清洗一次](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E5%8D%8A%E5%B9%B4%E6%B8%85%E6%B4%97%E4%B8%80%E6%AC%A1%23) `205.1K 🔥` `NEW`
1. [订婚等于默许亲密关系是老旧观念](https://s.weibo.com/weibo?q=%23%E8%AE%A2%E5%A9%9A%E7%AD%89%E4%BA%8E%E9%BB%98%E8%AE%B8%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E6%98%AF%E8%80%81%E6%97%A7%E8%A7%82%E5%BF%B5%23) `204.9K 🔥` `NEW`
1. [都暻秀 奶茶也太好喝了](https://s.weibo.com/weibo?q=%23%E9%83%BD%E6%9A%BB%E7%A7%80%20%E5%A5%B6%E8%8C%B6%E4%B9%9F%E5%A4%AA%E5%A5%BD%E5%96%9D%E4%BA%86%23) `204.3K 🔥` `NEW`
1. [瑶一瑶摆拍后一年掉粉近120万 (Yao Yiyao lost nearly 1.2 million followers in one year after posing for photos)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E6%91%86%E6%8B%8D%E5%90%8E%E4%B8%80%E5%B9%B4%E6%8E%89%E7%B2%89%E8%BF%91120%E4%B8%87%23) `204.1K 🔥` `NEW`
1. [贺娇龙坠马后坐起说头有点疼](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%A8%87%E9%BE%99%E5%9D%A0%E9%A9%AC%E5%90%8E%E5%9D%90%E8%B5%B7%E8%AF%B4%E5%A4%B4%E6%9C%89%E7%82%B9%E7%96%BC%23) `203.6K 🔥` `NEW`
1. [跟张晚意林允希林娜依高唱跳全场](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E5%BC%A0%E6%99%9A%E6%84%8F%E6%9E%97%E5%85%81%E5%B8%8C%E6%9E%97%E5%A8%9C%E4%BE%9D%E9%AB%98%E5%94%B1%E8%B7%B3%E5%85%A8%E5%9C%BA%23) `203.1K 🔥` `NEW`
1. [了不起的超强钢](https://s.weibo.com/weibo?q=%23%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%9A%84%E8%B6%85%E5%BC%BA%E9%92%A2%23) `202.8K 🔥` `NEW`
1. [爱吃桃酥的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E6%A1%83%E9%85%A5%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `193.6K 🔥` `NEW`
1. [黑诊所放血疗法地面血流成泊](https://s.weibo.com/weibo?q=%23%E9%BB%91%E8%AF%8A%E6%89%80%E6%94%BE%E8%A1%80%E7%96%97%E6%B3%95%E5%9C%B0%E9%9D%A2%E8%A1%80%E6%B5%81%E6%88%90%E6%B3%8A%23) `182.5K 🔥` `NEW`
1. [赵樱子曝娜扎打游戏很厉害](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90%E6%9B%9D%E5%A8%9C%E6%89%8E%E6%89%93%E6%B8%B8%E6%88%8F%E5%BE%88%E5%8E%89%E5%AE%B3%23) `178.5K 🔥` `NEW`
1. [唐宫奇案第10集32分40秒](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%E7%AC%AC10%E9%9B%8632%E5%88%8640%E7%A7%92%23) `172.4K 🔥` `NEW`
1. [LadyGaga空降超级碗中场秀](https://s.weibo.com/weibo?q=%23LadyGaga%E7%A9%BA%E9%99%8D%E8%B6%85%E7%BA%A7%E7%A2%97%E4%B8%AD%E5%9C%BA%E7%A7%80%23) `139.8K 🔥` `NEW`
1. [台机场10分钟内3个航班发出Mayday](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%9C%BA%E5%9C%BA10%E5%88%86%E9%92%9F%E5%86%853%E4%B8%AA%E8%88%AA%E7%8F%AD%E5%8F%91%E5%87%BAMayday%23) `124.4K 🔥` `NEW`
1. [中国特警vs美国特警 (Chinese SWAT vs American SWAT)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%89%B9%E8%AD%A6vs%E7%BE%8E%E5%9B%BD%E7%89%B9%E8%AD%A6%23) `118.8K 🔥` `NEW`
1. [对尺寸有了清晰的概念](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%B0%BA%E5%AF%B8%E6%9C%89%E4%BA%86%E6%B8%85%E6%99%B0%E7%9A%84%E6%A6%82%E5%BF%B5%23) `116.9K 🔥` `NEW`
1. [张钧甯 果然年上最知道疼人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%92%A7%E7%94%AF%20%E6%9E%9C%E7%84%B6%E5%B9%B4%E4%B8%8A%E6%9C%80%E7%9F%A5%E9%81%93%E7%96%BC%E4%BA%BA%23) `104.7K 🔥` `NEW`
1. [王鹤棣宋茜扫楼直拍](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AE%8B%E8%8C%9C%E6%89%AB%E6%A5%BC%E7%9B%B4%E6%8B%8D%23) `97.5K 🔥` `NEW`
1. [我每天有人陪过得挺好的](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AF%8F%E5%A4%A9%E6%9C%89%E4%BA%BA%E9%99%AA%E8%BF%87%E5%BE%97%E6%8C%BA%E5%A5%BD%E7%9A%84%23) `97.4K 🔥` `NEW`
1. [立陶宛被台当局忽悠惨了](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E9%99%B6%E5%AE%9B%E8%A2%AB%E5%8F%B0%E5%BD%93%E5%B1%80%E5%BF%BD%E6%82%A0%E6%83%A8%E4%BA%86%23) `97.3K 🔥` `NEW`
1. [白鹿新剧创平台2026年最快破万记录](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E5%89%A7%E5%88%9B%E5%B9%B3%E5%8F%B02026%E5%B9%B4%E6%9C%80%E5%BF%AB%E7%A0%B4%E4%B8%87%E8%AE%B0%E5%BD%95%23) `97.3K 🔥` `NEW`
1. [国投白银LOF大涨](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E6%8A%95%E7%99%BD%E9%93%B6LOF%E5%A4%A7%E6%B6%A8%23) `97.3K 🔥` `NEW`
1. [格陵兰人说听见飞机声就怕是美军](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E9%99%B5%E5%85%B0%E4%BA%BA%E8%AF%B4%E5%90%AC%E8%A7%81%E9%A3%9E%E6%9C%BA%E5%A3%B0%E5%B0%B1%E6%80%95%E6%98%AF%E7%BE%8E%E5%86%9B%23) `94.5K 🔥` `NEW`
1. [特朗普大骂美国冬奥运动员](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%A7%E9%AA%82%E7%BE%8E%E5%9B%BD%E5%86%AC%E5%A5%A5%E8%BF%90%E5%8A%A8%E5%91%98%23) `93.4K 🔥` `NEW`
1. [明日方舟 (Arknights)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%23) `93.4K 🔥` `NEW`
1. [全红婵人物年度面孔封面](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E4%BA%BA%E7%89%A9%E5%B9%B4%E5%BA%A6%E9%9D%A2%E5%AD%94%E5%B0%81%E9%9D%A2%23) `93.4K 🔥` `NEW`
1. [山航很着急为您服务](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%88%AA%E5%BE%88%E7%9D%80%E6%80%A5%E4%B8%BA%E6%82%A8%E6%9C%8D%E5%8A%A1%23) `92.7K 🔥` `NEW`
1. [特斯拉建议车主剩100公里时充电](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E5%BB%BA%E8%AE%AE%E8%BD%A6%E4%B8%BB%E5%89%A9100%E5%85%AC%E9%87%8C%E6%97%B6%E5%85%85%E7%94%B5%23) `90.4K 🔥` `NEW`
1. [直播带货都发展成这样了](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E5%B8%A6%E8%B4%A7%E9%83%BD%E5%8F%91%E5%B1%95%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `88.4K 🔥` `NEW`
1. [迪丽热巴给粉丝点了奶茶面包鸡汤](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BB%99%E7%B2%89%E4%B8%9D%E7%82%B9%E4%BA%86%E5%A5%B6%E8%8C%B6%E9%9D%A2%E5%8C%85%E9%B8%A1%E6%B1%A4%23) `86.3K 🔥` `NEW`
1. [5个家庭被余华英1次拐走2个孩子](https://s.weibo.com/weibo?q=%235%E4%B8%AA%E5%AE%B6%E5%BA%AD%E8%A2%AB%E4%BD%99%E5%8D%8E%E8%8B%B11%E6%AC%A1%E6%8B%90%E8%B5%B02%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `86.0K 🔥` `NEW`
1. [警方通报男子祭祖误触捕猎装置身亡](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E7%A5%AD%E7%A5%96%E8%AF%AF%E8%A7%A6%E6%8D%95%E7%8C%8E%E8%A3%85%E7%BD%AE%E8%BA%AB%E4%BA%A1%23) `205.7K 🔥` `+106%`
1. [孟子义微博之夜带走了四盒饼干](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%E5%B8%A6%E8%B5%B0%E4%BA%86%E5%9B%9B%E7%9B%92%E9%A5%BC%E5%B9%B2%23) `203.5K 🔥` `+35%`
1. [爱泼斯坦案秘密照片曝光 (Secret photos from Epstein case revealed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E7%A7%98%E5%AF%86%E7%85%A7%E7%89%87%E6%9B%9D%E5%85%89%23) `202.2K 🔥` `+36%`
1. [龙麦娇兰](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%BA%A6%E5%A8%87%E5%85%B0%23) `202.1K 🔥` `+33%`
1. [海清因儿子生病想过捐肾 (Haiqing thought about donating a kidney because her son was ill.)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B8%85%E5%9B%A0%E5%84%BF%E5%AD%90%E7%94%9F%E7%97%85%E6%83%B3%E8%BF%87%E6%8D%90%E8%82%BE%23) `201.8K 🔥` `+40%`
1. [蒙牛致敬骨子里要强的中国队 (Mengniu pays tribute to the Chinese team, which is stronger at heart)](https://s.weibo.com/weibo?q=%23%E8%92%99%E7%89%9B%E8%87%B4%E6%95%AC%E9%AA%A8%E5%AD%90%E9%87%8C%E8%A6%81%E5%BC%BA%E7%9A%84%E4%B8%AD%E5%9B%BD%E9%98%9F%23) `417.7K 🔥`
1. [老外来中国过年的订单爆了 (Orders from foreigners coming to China to celebrate the New Year are booming)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E6%9D%A5%E4%B8%AD%E5%9B%BD%E8%BF%87%E5%B9%B4%E7%9A%84%E8%AE%A2%E5%8D%95%E7%88%86%E4%BA%86%23) `205.7K 🔥`
1. [白鹿女装牛仔裤](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%B3%E8%A3%85%E7%89%9B%E4%BB%94%E8%A3%A4%23) `139.8K 🔥`
1. [开心消消乐 甄嬛](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%BF%83%E6%B6%88%E6%B6%88%E4%B9%90%20%E7%94%84%E5%AC%9B%23) `139.6K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `124.2K 🔥`
1. [苹果最便宜新机要来了](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%9C%80%E4%BE%BF%E5%AE%9C%E6%96%B0%E6%9C%BA%E8%A6%81%E6%9D%A5%E4%BA%86%23) `103.6K 🔥`
1. [超级碗 (super bowl)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%BA%A7%E7%A2%97%23) `292.4K 🔥` `-73%`
1. [谷爱凌冲击首金](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%B2%E5%87%BB%E9%A6%96%E9%87%91%23) `139.8K 🔥` `-25%`
1. [亲哥去世员工请假奔丧被辞 (An employee who took time off to attend the funeral was fired after his brother died.)](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%93%A5%E5%8E%BB%E4%B8%96%E5%91%98%E5%B7%A5%E8%AF%B7%E5%81%87%E5%A5%94%E4%B8%A7%E8%A2%AB%E8%BE%9E%23) `90.6K 🔥` `-36%`
1. [中国军网点名张本智和 (China Military Net names Zhang Benzhihe)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E7%BD%91%E7%82%B9%E5%90%8D%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `82.9K 🔥` `-65%`

Updated at 2026-02-09 13:14:16

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
