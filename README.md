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

1. [林孝埈八年冬奥路太长了 (Lin Xiaojun’s eight-year Winter Olympics road is too long)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E5%85%AB%E5%B9%B4%E5%86%AC%E5%A5%A5%E8%B7%AF%E5%A4%AA%E9%95%BF%E4%BA%86%23) `231.9K 🔥` `NEW`
1. [杨丽萍和千问的马舞封神](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%BD%E8%90%8D%E5%92%8C%E5%8D%83%E9%97%AE%E7%9A%84%E9%A9%AC%E8%88%9E%E5%B0%81%E7%A5%9E%23) `172.4K 🔥` `NEW`
1. [影视飓风Tim称将完整记录素人登珠峰](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8ETim%E7%A7%B0%E5%B0%86%E5%AE%8C%E6%95%B4%E8%AE%B0%E5%BD%95%E7%B4%A0%E4%BA%BA%E7%99%BB%E7%8F%A0%E5%B3%B0%23) `145.5K 🔥` `NEW`
1. [生命树多杰死因反转](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%A4%9A%E6%9D%B0%E6%AD%BB%E5%9B%A0%E5%8F%8D%E8%BD%AC%23) `143.0K 🔥` `NEW`
1. [王毅就中日关系重申严正立场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%B0%B1%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%E9%87%8D%E7%94%B3%E4%B8%A5%E6%AD%A3%E7%AB%8B%E5%9C%BA%23) `129.5K 🔥` `NEW`
1. [千问补发免单卡](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E8%A1%A5%E5%8F%91%E5%85%8D%E5%8D%95%E5%8D%A1%23) `125.4K 🔥` `NEW`
1. [情人节发现男朋友联系高中女同学](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E5%8F%91%E7%8E%B0%E7%94%B7%E6%9C%8B%E5%8F%8B%E8%81%94%E7%B3%BB%E9%AB%98%E4%B8%AD%E5%A5%B3%E5%90%8C%E5%AD%A6%23) `112.5K 🔥` `NEW`
1. [春节10倍酒店房价的定价秘密](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%8210%E5%80%8D%E9%85%92%E5%BA%97%E6%88%BF%E4%BB%B7%E7%9A%84%E5%AE%9A%E4%BB%B7%E7%A7%98%E5%AF%86%23) `111.7K 🔥` `NEW`
1. [美军正为打击伊朗行动做准备](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%AD%A3%E4%B8%BA%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%E8%A1%8C%E5%8A%A8%E5%81%9A%E5%87%86%E5%A4%87%23) `111.5K 🔥` `NEW`
1. [杨博文高会](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E9%AB%98%E4%BC%9A%23) `110.4K 🔥` `NEW`
1. [王毅敲打日本军国主义 (Wang Yi attacks Japanese militarism)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E6%95%B2%E6%89%93%E6%97%A5%E6%9C%AC%E5%86%9B%E5%9B%BD%E4%B8%BB%E4%B9%89%23) `99.1K 🔥` `NEW`
1. [女子染发头皮溃烂过年只能光头](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9F%93%E5%8F%91%E5%A4%B4%E7%9A%AE%E6%BA%83%E7%83%82%E8%BF%87%E5%B9%B4%E5%8F%AA%E8%83%BD%E5%85%89%E5%A4%B4%23) `87.8K 🔥` `NEW`
1. [曝黄子弘凡爸爸诈骗学生](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E7%88%B8%E7%88%B8%E8%AF%88%E9%AA%97%E5%AD%A6%E7%94%9F%23) `6.4M 🔥` `+3045%`
1. [关晓彤 青鸟神女](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%20%E9%9D%92%E9%B8%9F%E7%A5%9E%E5%A5%B3%23) `559.5K 🔥` `+252%`
1. [蓝羽会客厅春节档聚齐了](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%BE%BD%E4%BC%9A%E5%AE%A2%E5%8E%85%E6%98%A5%E8%8A%82%E6%A1%A3%E8%81%9A%E9%BD%90%E4%BA%86%23) `424.9K 🔥` `+41%`
1. [马年不宜婚嫁真的假的](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E4%B8%8D%E5%AE%9C%E5%A9%9A%E5%AB%81%E7%9C%9F%E7%9A%84%E5%81%87%E7%9A%84%23) `399.4K 🔥` `+81%`
1. [白鹿唐宫22集4分20秒](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%94%90%E5%AE%AB22%E9%9B%864%E5%88%8620%E7%A7%92%23) `124.1K 🔥` `+28%`
1. [河南春晚 大量广告里穿插了少量节目 (Henan Spring Festival Gala has a large number of advertisements interspersed with a small number of programs)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%20%E5%A4%A7%E9%87%8F%E5%B9%BF%E5%91%8A%E9%87%8C%E7%A9%BF%E6%8F%92%E4%BA%86%E5%B0%91%E9%87%8F%E8%8A%82%E7%9B%AE%23) `1.1M 🔥`
1. [千问红包 (Qianwen red envelope)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%23) `816.2K 🔥`
1. [一杯热水暖了几十年归途 (A cup of hot water warms the way home after decades)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9D%AF%E7%83%AD%E6%B0%B4%E6%9A%96%E4%BA%86%E5%87%A0%E5%8D%81%E5%B9%B4%E5%BD%92%E9%80%94%23) `628.4K 🔥`
1. [红包 (Red envelope)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `452.4K 🔥`
1. [红包分组](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `252.2K 🔥`
1. [王一博人鱼演职表更新](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BA%BA%E9%B1%BC%E6%BC%94%E8%81%8C%E8%A1%A8%E6%9B%B4%E6%96%B0%23) `209.8K 🔥`
1. [四川大学](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%A4%A7%E5%AD%A6%23) `195.9K 🔥`
1. [马君妍宣布二胎宝宝已有30周 (Ma Junyan announced that her second baby is 30 weeks old)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%90%9B%E5%A6%8D%E5%AE%A3%E5%B8%83%E4%BA%8C%E8%83%8E%E5%AE%9D%E5%AE%9D%E5%B7%B2%E6%9C%8930%E5%91%A8%23) `188.1K 🔥`
1. [王橹杰高会 (Wang Lujie Gaohui)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%AB%98%E4%BC%9A%23) `178.9K 🔥`
1. [明星红包 (Celebrity red envelope)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `170.6K 🔥`
1. [刘一手承认欠款2000万](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%80%E6%89%8B%E6%89%BF%E8%AE%A4%E6%AC%A0%E6%AC%BE2000%E4%B8%87%23) `164.0K 🔥`
1. [56岁阿姨长期情绪失控痛哭右眼失明](https://s.weibo.com/weibo?q=%2356%E5%B2%81%E9%98%BF%E5%A7%A8%E9%95%BF%E6%9C%9F%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%E7%97%9B%E5%93%AD%E5%8F%B3%E7%9C%BC%E5%A4%B1%E6%98%8E%23) `130.6K 🔥`
1. [沈佳润哪来的小牛劲](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E5%93%AA%E6%9D%A5%E7%9A%84%E5%B0%8F%E7%89%9B%E5%8A%B2%23) `115.3K 🔥`
1. [千问陪每个人度过八十一难](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E9%99%AA%E6%AF%8F%E4%B8%AA%E4%BA%BA%E5%BA%A6%E8%BF%87%E5%85%AB%E5%8D%81%E4%B8%80%E9%9A%BE%23) `113.4K 🔥`
1. [突然发现朋友圈没人晒花了 (Suddenly I found that no one in the circle of friends was showing off their flowers.)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B2%A1%E4%BA%BA%E6%99%92%E8%8A%B1%E4%BA%86%23) `97.8K 🔥`
1. [常吃这类食品增加幽门螺杆菌感染风险](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%90%83%E8%BF%99%E7%B1%BB%E9%A3%9F%E5%93%81%E5%A2%9E%E5%8A%A0%E5%B9%BD%E9%97%A8%E8%9E%BA%E6%9D%86%E8%8F%8C%E6%84%9F%E6%9F%93%E9%A3%8E%E9%99%A9%23) `87.9K 🔥`
1. [张柏芝情人节和大儿子约会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E6%83%85%E4%BA%BA%E8%8A%82%E5%92%8C%E5%A4%A7%E5%84%BF%E5%AD%90%E7%BA%A6%E4%BC%9A%23) `84.7K 🔥`
1. [河南春晚 没有主持人和舞台 (Henan Spring Festival Gala has no host or stage)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%20%E6%B2%A1%E6%9C%89%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%92%8C%E8%88%9E%E5%8F%B0%23) `444.2K 🔥` `-30%`
1. [川大通报王竹卿事件调查结果](https://s.weibo.com/weibo?q=%23%E5%B7%9D%E5%A4%A7%E9%80%9A%E6%8A%A5%E7%8E%8B%E7%AB%B9%E5%8D%BF%E4%BA%8B%E4%BB%B6%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `170.9K 🔥` `-55%`
1. [从疲劳到癌症只有4步](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E7%96%B2%E5%8A%B3%E5%88%B0%E7%99%8C%E7%97%87%E5%8F%AA%E6%9C%894%E6%AD%A5%23) `142.4K 🔥` `-22%`
1. [吃猪脚被卡喉10岁男孩现已去世](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%8C%AA%E8%84%9A%E8%A2%AB%E5%8D%A1%E5%96%8910%E5%B2%81%E7%94%B7%E5%AD%A9%E7%8E%B0%E5%B7%B2%E5%8E%BB%E4%B8%96%23) `139.1K 🔥` `-25%`
1. [白鹿虞书欣同款剧宣姿势 (Bailu Yu Shuxin's same drama promotional pose)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%90%8C%E6%AC%BE%E5%89%A7%E5%AE%A3%E5%A7%BF%E5%8A%BF%23) `136.8K 🔥` `-23%`
1. [小酒窝做了长美甲 (My dimples got long manicure)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E5%81%9A%E4%BA%86%E9%95%BF%E7%BE%8E%E7%94%B2%23) `132.2K 🔥` `-27%`
1. [情人节的朋友圈比春晚还热闹](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%AF%94%E6%98%A5%E6%99%9A%E8%BF%98%E7%83%AD%E9%97%B9%23) `120.0K 🔥` `-24%`
1. [中国2银2铜暂列冬奥奖牌榜第18](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD2%E9%93%B62%E9%93%9C%E6%9A%82%E5%88%97%E5%86%AC%E5%A5%A5%E5%A5%96%E7%89%8C%E6%A6%9C%E7%AC%AC18%23) `117.6K 🔥` `-38%`
1. [第一批来中国的老外过年现状](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%9D%A5%E4%B8%AD%E5%9B%BD%E7%9A%84%E8%80%81%E5%A4%96%E8%BF%87%E5%B9%B4%E7%8E%B0%E7%8A%B6%23) `116.5K 🔥` `-49%`
1. [河南春晚 千问到底给了多少](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%20%E5%8D%83%E9%97%AE%E5%88%B0%E5%BA%95%E7%BB%99%E4%BA%86%E5%A4%9A%E5%B0%91%23) `115.3K 🔥` `-28%`
1. [大理一女子民宿被指歧视男性](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%90%86%E4%B8%80%E5%A5%B3%E5%AD%90%E6%B0%91%E5%AE%BF%E8%A2%AB%E6%8C%87%E6%AD%A7%E8%A7%86%E7%94%B7%E6%80%A7%23) `115.0K 🔥` `-42%`
1. [米兰花滑惨案是什么级别的爆冷 (What level of upset was the Milan figure skating tragedy?)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E8%8A%B1%E6%BB%91%E6%83%A8%E6%A1%88%E6%98%AF%E4%BB%80%E4%B9%88%E7%BA%A7%E5%88%AB%E7%9A%84%E7%88%86%E5%86%B7%23) `114.3K 🔥` `-29%`
1. [河南卫视春晚](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `113.8K 🔥` `-29%`
1. [周冬雨从不发朋友圈 (Zhou Dongyu never posts on Moments)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E4%BB%8E%E4%B8%8D%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `110.0K 🔥` `-36%`
1. [这么大的架子竟然一点官都没有 (Such a big arrogance has no official status at all)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E6%9E%B6%E5%AD%90%E7%AB%9F%E7%84%B6%E4%B8%80%E7%82%B9%E5%AE%98%E9%83%BD%E6%B2%A1%E6%9C%89%23) `103.4K 🔥` `-42%`
1. [宋茜陈好你们根本没喝中药](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%8C%9C%E9%99%88%E5%A5%BD%E4%BD%A0%E4%BB%AC%E6%A0%B9%E6%9C%AC%E6%B2%A1%E5%96%9D%E4%B8%AD%E8%8D%AF%23) `86.0K 🔥` `-28%`
1. [韩媒seedance2.0横空出世影响巨大](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92seedance2.0%E6%A8%AA%E7%A9%BA%E5%87%BA%E4%B8%96%E5%BD%B1%E5%93%8D%E5%B7%A8%E5%A4%A7%23) `84.3K 🔥` `-47%`

Updated at 2026-02-14 22:37:06

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
