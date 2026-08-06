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

1. [中传取消艺考意味着什么 (What does it mean when Zhongchuan cancels the art exam?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BC%A0%E5%8F%96%E6%B6%88%E8%89%BA%E8%80%83%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `1.9M 🔥` `NEW`
1. [姆巴佩官宣恋情](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%AE%98%E5%AE%A3%E6%81%8B%E6%83%85%23) `1.2M 🔥` `NEW`
1. [被梅姨拐卖者称已被养父母删除](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%A2%85%E5%A7%A8%E6%8B%90%E5%8D%96%E8%80%85%E7%A7%B0%E5%B7%B2%E8%A2%AB%E5%85%BB%E7%88%B6%E6%AF%8D%E5%88%A0%E9%99%A4%23) `641.4K 🔥` `NEW`
1. [这一秒过火没破万](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E6%B2%A1%E7%A0%B4%E4%B8%87%23) `350.5K 🔥` `NEW`
1. [余承东曾称扛不住了也可能涨价](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E6%9B%BE%E7%A7%B0%E6%89%9B%E4%B8%8D%E4%BD%8F%E4%BA%86%E4%B9%9F%E5%8F%AF%E8%83%BD%E6%B6%A8%E4%BB%B7%23) `350.3K 🔥` `NEW`
1. [TFBOYS换置顶](https://s.weibo.com/weibo?q=%23TFBOYS%E6%8D%A2%E7%BD%AE%E9%A1%B6%23) `346.7K 🔥` `NEW`
1. [河南带薪休假新政为何引全网关注](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%B8%A6%E8%96%AA%E4%BC%91%E5%81%87%E6%96%B0%E6%94%BF%E4%B8%BA%E4%BD%95%E5%BC%95%E5%85%A8%E7%BD%91%E5%85%B3%E6%B3%A8%23) `344.6K 🔥` `NEW`
1. [胚胎案妻子称早已没什么可失去](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E7%A7%B0%E6%97%A9%E5%B7%B2%E6%B2%A1%E4%BB%80%E4%B9%88%E5%8F%AF%E5%A4%B1%E5%8E%BB%23) `343.9K 🔥` `NEW`
1. [TFBOYS这组头像用了九年了](https://s.weibo.com/weibo?q=%23TFBOYS%E8%BF%99%E7%BB%84%E5%A4%B4%E5%83%8F%E7%94%A8%E4%BA%86%E4%B9%9D%E5%B9%B4%E4%BA%86%23) `338.4K 🔥` `NEW`
1. [闪迪Q4营收增长372%](https://s.weibo.com/weibo?q=%23%E9%97%AA%E8%BF%AAQ4%E8%90%A5%E6%94%B6%E5%A2%9E%E9%95%BF372%25%23) `334.6K 🔥` `NEW`
1. [中国人心目中天庭的样子在外网爆火 (What Chinese people think of heaven goes viral online)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%BF%83%E7%9B%AE%E4%B8%AD%E5%A4%A9%E5%BA%AD%E7%9A%84%E6%A0%B7%E5%AD%90%E5%9C%A8%E5%A4%96%E7%BD%91%E7%88%86%E7%81%AB%23) `331.5K 🔥` `NEW`
1. [侯卓成 王垲智](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%20%E7%8E%8B%E5%9E%B2%E6%99%BA%23) `329.5K 🔥` `NEW`
1. [侯卓成回应聊天记录](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E5%9B%9E%E5%BA%94%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `321.6K 🔥` `NEW`
1. [中国名将樊振东的全新征程](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%90%8D%E5%B0%86%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%9A%84%E5%85%A8%E6%96%B0%E5%BE%81%E7%A8%8B%23) `316.4K 🔥` `NEW`
1. [日薪过千短剧演员自曝已3个月无戏拍](https://s.weibo.com/weibo?q=%23%E6%97%A5%E8%96%AA%E8%BF%87%E5%8D%83%E7%9F%AD%E5%89%A7%E6%BC%94%E5%91%98%E8%87%AA%E6%9B%9D%E5%B7%B23%E4%B8%AA%E6%9C%88%E6%97%A0%E6%88%8F%E6%8B%8D%23) `313.3K 🔥` `NEW`
1. [王俊凯王源易烊千玺同个IP地址](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%90%8C%E4%B8%AAIP%E5%9C%B0%E5%9D%80%23) `308.7K 🔥` `NEW`
1. [劝华为大度的人请先尊重法律](https://s.weibo.com/weibo?q=%23%E5%8A%9D%E5%8D%8E%E4%B8%BA%E5%A4%A7%E5%BA%A6%E7%9A%84%E4%BA%BA%E8%AF%B7%E5%85%88%E5%B0%8A%E9%87%8D%E6%B3%95%E5%BE%8B%23) `306.5K 🔥` `NEW`
1. [成都暴雨](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E6%9A%B4%E9%9B%A8%23) `304.5K 🔥` `NEW`
1. [梅姨死刑或适用受限](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%AD%BB%E5%88%91%E6%88%96%E9%80%82%E7%94%A8%E5%8F%97%E9%99%90%23) `304.4K 🔥` `NEW`
1. [王垲智回应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%9E%B2%E6%99%BA%E5%9B%9E%E5%BA%94%23) `301.3K 🔥` `NEW`
1. [黄多多头型 (Yellow multi-head type)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E5%A4%B4%E5%9E%8B%23) `300.2K 🔥` `NEW`
1. [晚晚晒于正拍的自己](https://s.weibo.com/weibo?q=%23%E6%99%9A%E6%99%9A%E6%99%92%E4%BA%8E%E6%AD%A3%E6%8B%8D%E7%9A%84%E8%87%AA%E5%B7%B1%23) `296.5K 🔥` `NEW`
1. [这个旱地拔葱一开始有点吓人](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E6%97%B1%E5%9C%B0%E6%8B%94%E8%91%B1%E4%B8%80%E5%BC%80%E5%A7%8B%E6%9C%89%E7%82%B9%E5%90%93%E4%BA%BA%23) `295.0K 🔥` `NEW`
1. [KPL选手巅峰赛摆烂被禁赛](https://s.weibo.com/weibo?q=%23KPL%E9%80%89%E6%89%8B%E5%B7%85%E5%B3%B0%E8%B5%9B%E6%91%86%E7%83%82%E8%A2%AB%E7%A6%81%E8%B5%9B%23) `290.9K 🔥` `NEW`
1. [华为GT7手表首发身体状态准备度](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAGT7%E6%89%8B%E8%A1%A8%E9%A6%96%E5%8F%91%E8%BA%AB%E4%BD%93%E7%8A%B6%E6%80%81%E5%87%86%E5%A4%87%E5%BA%A6%23) `284.3K 🔥` `NEW`
1. [预拨3.3亿元支持8省市抢险救灾 (330 million yuan has been allocated in advance to support emergency rescue and disaster relief in 8 provinces and cities)](https://s.weibo.com/weibo?q=%23%E9%A2%84%E6%8B%A83.3%E4%BA%BF%E5%85%83%E6%94%AF%E6%8C%818%E7%9C%81%E5%B8%82%E6%8A%A2%E9%99%A9%E6%95%91%E7%81%BE%23) `1.0M 🔥` `+79%`
1. [李亚鹏向地铁吐血女孩捐99999元](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F%E5%90%91%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E6%8D%9099999%E5%85%83%23) `843.6K 🔥` `+22%`
1. [老祖宗怎么可以聪明成这样](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%A5%96%E5%AE%97%E6%80%8E%E4%B9%88%E5%8F%AF%E4%BB%A5%E8%81%AA%E6%98%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `712.9K 🔥` `+99%`
1. [时代少年团退场魔术失败了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%80%80%E5%9C%BA%E9%AD%94%E6%9C%AF%E5%A4%B1%E8%B4%A5%E4%BA%86%23) `347.3K 🔥` `+148%`
1. [养大后才发现买了头牛魔王](https://s.weibo.com/weibo?q=%23%E5%85%BB%E5%A4%A7%E5%90%8E%E6%89%8D%E5%8F%91%E7%8E%B0%E4%B9%B0%E4%BA%86%E5%A4%B4%E7%89%9B%E9%AD%94%E7%8E%8B%23) `339.6K 🔥` `+295%`
1. [黎彼得去世](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E5%BD%BC%E5%BE%97%E5%8E%BB%E4%B8%96%23) `332.6K 🔥` `+24%`
1. [最近你买黄金了没 (Have you bought gold recently?)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%BF%91%E4%BD%A0%E4%B9%B0%E9%BB%84%E9%87%91%E4%BA%86%E6%B2%A1%23) `328.6K 🔥` `+135%`
1. [日本女网红自杀过程被完整直播 (The suicide process of a Japanese female internet celebrity was broadcast live in full)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%87%AA%E6%9D%80%E8%BF%87%E7%A8%8B%E8%A2%AB%E5%AE%8C%E6%95%B4%E7%9B%B4%E6%92%AD%23) `325.7K 🔥` `+63%`
1. [孩子吵闹2小时乘客叹气反被家长怼](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%90%B5%E9%97%B92%E5%B0%8F%E6%97%B6%E4%B9%98%E5%AE%A2%E5%8F%B9%E6%B0%94%E5%8F%8D%E8%A2%AB%E5%AE%B6%E9%95%BF%E6%80%BC%23) `323.5K 🔥` `+108%`
1. [福州煎饼叔叔去世](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%B7%9E%E7%85%8E%E9%A5%BC%E5%8F%94%E5%8F%94%E5%8E%BB%E4%B8%96%23) `320.1K 🔥` `+49%`
1. [男子被判无罪获国赔4年后改判死缓](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%E8%8E%B7%E5%9B%BD%E8%B5%944%E5%B9%B4%E5%90%8E%E6%94%B9%E5%88%A4%E6%AD%BB%E7%BC%93%23) `315.3K 🔥` `+126%`
1. [水豚宝宝请问您刚刚生了我们对吗](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E8%B1%9A%E5%AE%9D%E5%AE%9D%E8%AF%B7%E9%97%AE%E6%82%A8%E5%88%9A%E5%88%9A%E7%94%9F%E4%BA%86%E6%88%91%E4%BB%AC%E5%AF%B9%E5%90%97%23) `311.7K 🔥` `+68%`
1. [余承东回应口误](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%9B%9E%E5%BA%94%E5%8F%A3%E8%AF%AF%23) `309.4K 🔥` `+52%`
1. [女儿考上一本出轨父亲拒付学费 (Daughter gets admitted to a college and cheats on her father refuses to pay tuition)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%80%83%E4%B8%8A%E4%B8%80%E6%9C%AC%E5%87%BA%E8%BD%A8%E7%88%B6%E4%BA%B2%E6%8B%92%E4%BB%98%E5%AD%A6%E8%B4%B9%23) `298.2K 🔥` `+98%`
1. [星巴克辞退侮辱周杰伦的员工](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%E8%BE%9E%E9%80%80%E4%BE%AE%E8%BE%B1%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%9A%84%E5%91%98%E5%B7%A5%23) `293.3K 🔥` `+74%`
1. [张凌赫只有一部待播剧了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%AA%E6%9C%89%E4%B8%80%E9%83%A8%E5%BE%85%E6%92%AD%E5%89%A7%E4%BA%86%23) `291.6K 🔥` `+191%`
1. [柳周cp爆火后参加毛雪汪地球超新鲜 (After Liu Zhou’s CP became popular, he participated in Mao Xue Wang’s Earth Super Fresh)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%91%A8cp%E7%88%86%E7%81%AB%E5%90%8E%E5%8F%82%E5%8A%A0%E6%AF%9B%E9%9B%AA%E6%B1%AA%E5%9C%B0%E7%90%83%E8%B6%85%E6%96%B0%E9%B2%9C%23) `285.2K 🔥` `+272%`
1. [梅姨真实姓名首曝光 (Aunt Mei’s real first name revealed)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%9C%9F%E5%AE%9E%E5%A7%93%E5%90%8D%E9%A6%96%E6%9B%9D%E5%85%89%23) `1.0M 🔥`
1. [台风白海豚大概率登陆浙江 (Typhoon White Dolphin is likely to land in Zhejiang)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%A4%A7%E6%A6%82%E7%8E%87%E7%99%BB%E9%99%86%E6%B5%99%E6%B1%9F%23) `341.1K 🔥`
1. [刘宇宁知道自己是大男主的反应](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E6%98%AF%E5%A4%A7%E7%94%B7%E4%B8%BB%E7%9A%84%E5%8F%8D%E5%BA%94%23) `336.5K 🔥`
1. [王源易烊千玺换蛋糕不给王俊凯说](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%8D%A2%E8%9B%8B%E7%B3%95%E4%B8%8D%E7%BB%99%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%AF%B4%23) `326.2K 🔥`
1. [美国禁止进口中国机器人 (U.S. bans import of Chinese robots)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%A6%81%E6%AD%A2%E8%BF%9B%E5%8F%A3%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `318.8K 🔥`
1. [这一秒过火全员be (This second went too far and everyone was be)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%85%A8%E5%91%98be%23) `288.6K 🔥`
1. [可杰 top (Kejie top)](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E6%9D%B0%20top%23) `287.1K 🔥`
1. [乌鸦一次带走四块饼干智商绝了](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E9%B8%A6%E4%B8%80%E6%AC%A1%E5%B8%A6%E8%B5%B0%E5%9B%9B%E5%9D%97%E9%A5%BC%E5%B9%B2%E6%99%BA%E5%95%86%E7%BB%9D%E4%BA%86%23) `282.6K 🔥`

Updated at 2026-08-06 09:05:41

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
