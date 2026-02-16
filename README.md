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

1. [白鹿红包预告 (White Deer Red Envelope Preview)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BA%A2%E5%8C%85%E9%A2%84%E5%91%8A%23) `13.0M 🔥` `NEW`
1. [除夕祝你万事胜意](https://s.weibo.com/weibo?q=%23%E9%99%A4%E5%A4%95%E7%A5%9D%E4%BD%A0%E4%B8%87%E4%BA%8B%E8%83%9C%E6%84%8F%23) `4.1M 🔥` `NEW`
1. [追觅全场景生态亮相春晚](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E5%85%A8%E5%9C%BA%E6%99%AF%E7%94%9F%E6%80%81%E4%BA%AE%E7%9B%B8%E6%98%A5%E6%99%9A%23) `2.5M 🔥` `NEW`
1. [鹤壁网民发布盖印钞厂谣言被处罚](https://s.weibo.com/weibo?q=%23%E9%B9%A4%E5%A3%81%E7%BD%91%E6%B0%91%E5%8F%91%E5%B8%83%E7%9B%96%E5%8D%B0%E9%92%9E%E5%8E%82%E8%B0%A3%E8%A8%80%E8%A2%AB%E5%A4%84%E7%BD%9A%23) `702.0K 🔥` `NEW`
1. [冬奥短道速滑男子500米预赛](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E7%94%B7%E5%AD%90500%E7%B1%B3%E9%A2%84%E8%B5%9B%23) `433.9K 🔥` `NEW`
1. [孙龙500米pen](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99500%E7%B1%B3pen%23) `308.8K 🔥` `NEW`
1. [穆祉丞红包](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%BA%A2%E5%8C%85%23) `305.6K 🔥` `NEW`
1. [时代少年团楼晚特别栏目](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%A5%BC%E6%99%9A%E7%89%B9%E5%88%AB%E6%A0%8F%E7%9B%AE%23) `287.8K 🔥` `NEW`
1. [易烊千玺邀你上千问领红包](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E9%82%80%E4%BD%A0%E4%B8%8A%E5%8D%83%E9%97%AE%E9%A2%86%E7%BA%A2%E5%8C%85%23) `284.7K 🔥` `NEW`
1. [刘少昂黄大宪500米同组](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E9%BB%84%E5%A4%A7%E5%AE%AA500%E7%B1%B3%E5%90%8C%E7%BB%84%23) `269.4K 🔥` `NEW`
1. [刘少昂500米晋级 (Liu Shaoang advances in 500m)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82500%E7%B1%B3%E6%99%8B%E7%BA%A7%23) `250.2K 🔥` `NEW`
1. [TOP红包](https://s.weibo.com/weibo?q=%23TOP%E7%BA%A2%E5%8C%85%23) `237.3K 🔥` `NEW`
1. [王一博出图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%87%BA%E5%9B%BE%23) `218.7K 🔥` `NEW`
1. [易烊千玺9登春晚](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA9%E7%99%BB%E6%98%A5%E6%99%9A%23) `217.8K 🔥` `NEW`
1. [林孝埈500米顺利晋级](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88500%E7%B1%B3%E9%A1%BA%E5%88%A9%E6%99%8B%E7%BA%A7%23) `215.2K 🔥` `NEW`
1. [陈楚生 我们春天见](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%20%E6%88%91%E4%BB%AC%E6%98%A5%E5%A4%A9%E8%A7%81%23) `211.4K 🔥` `NEW`
1. [清融发红包](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%E5%8F%91%E7%BA%A2%E5%8C%85%23) `209.1K 🔥` `NEW`
1. [朱志鑫红包 抢不到](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E7%BA%A2%E5%8C%85%20%E6%8A%A2%E4%B8%8D%E5%88%B0%23) `204.0K 🔥` `NEW`
1. [千问能不能帮我自动抢红包](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E8%83%BD%E4%B8%8D%E8%83%BD%E5%B8%AE%E6%88%91%E8%87%AA%E5%8A%A8%E6%8A%A2%E7%BA%A2%E5%8C%85%23) `201.4K 🔥` `NEW`
1. [春晚时间](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E6%97%B6%E9%97%B4%23) `201.3K 🔥` `NEW`
1. [浙江压岁钱 (Zhejiang lucky money)](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%8E%8B%E5%B2%81%E9%92%B1%23) `194.8K 🔥` `NEW`
1. [宋威龙 新郎官](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%20%E6%96%B0%E9%83%8E%E5%AE%98%23) `186.7K 🔥` `NEW`
1. [张碧晨晚饭后还有红包](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E6%99%9A%E9%A5%AD%E5%90%8E%E8%BF%98%E6%9C%89%E7%BA%A2%E5%8C%85%23) `185.1K 🔥` `NEW`
1. [红包封面](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%E5%B0%81%E9%9D%A2%23) `174.1K 🔥` `NEW`
1. [TFING红包](https://s.weibo.com/weibo?q=%23TFING%E7%BA%A2%E5%8C%85%23) `171.1K 🔥` `NEW`
1. [陈妍希空降](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E7%A9%BA%E9%99%8D%23) `170.1K 🔥` `NEW`
1. [明星红包](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `30.3M 🔥` `+65%`
1. [短道速滑 (short track speed skating)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `568.8K 🔥` `+40%`
1. [春晚节目单 (Spring Festival Gala Program)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `7.6M 🔥`
1. [王楚然丞磊同时发红包](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%9E%E7%A3%8A%E5%90%8C%E6%97%B6%E5%8F%91%E7%BA%A2%E5%8C%85%23) `223.0K 🔥`
1. [年夜饭](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%A4%9C%E9%A5%AD%23) `1.1M 🔥` `-74%`
1. [红包 (Red envelope)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `1.0M 🔥` `-46%`
1. [敖瑞鹏发红包还有前菜 (Ao Ruipeng gave out red envelopes and appetizers)](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E5%8F%91%E7%BA%A2%E5%8C%85%E8%BF%98%E6%9C%89%E5%89%8D%E8%8F%9C%23) `886.0K 🔥` `-60%`
1. [红包分组 (Red envelope grouping)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `527.4K 🔥` `-67%`
1. [迪丽热巴人鱼公主](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BA%BA%E9%B1%BC%E5%85%AC%E4%B8%BB%23) `493.3K 🔥` `-61%`
1. [春晚大赏 (Spring Festival Gala Awards)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%A4%A7%E8%B5%8F%23) `426.1K 🔥` `-57%`
1. [王楚然红包](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%BA%A2%E5%8C%85%23) `403.8K 🔥` `-77%`
1. [陈哲远 15万红包](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%2015%E4%B8%87%E7%BA%A2%E5%8C%85%23) `306.7K 🔥` `-22%`
1. [千问红包 (Qianwen red envelope)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%23) `302.3K 🔥` `-88%`
1. [蹲王星越红包](https://s.weibo.com/weibo?q=%23%E8%B9%B2%E7%8E%8B%E6%98%9F%E8%B6%8A%E7%BA%A2%E5%8C%85%23) `296.5K 🔥` `-39%`
1. [卢昱晓发红包时间](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E5%8F%91%E7%BA%A2%E5%8C%85%E6%97%B6%E9%97%B4%23) `258.3K 🔥` `-77%`
1. [孟子义 先发美图再发红包](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%20%E5%85%88%E5%8F%91%E7%BE%8E%E5%9B%BE%E5%86%8D%E5%8F%91%E7%BA%A2%E5%8C%85%23) `227.7K 🔥` `-61%`
1. [大年初一不洗头不煮饭](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%80%E4%B8%8D%E6%B4%97%E5%A4%B4%E4%B8%8D%E7%85%AE%E9%A5%AD%23) `225.7K 🔥` `-75%`
1. [豆包科技好礼有春晚同款机器人](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%A7%91%E6%8A%80%E5%A5%BD%E7%A4%BC%E6%9C%89%E6%98%A5%E6%99%9A%E5%90%8C%E6%AC%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `223.3K 🔥` `-37%`
1. [陈都灵红包单包的金额设置好高](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E7%BA%A2%E5%8C%85%E5%8D%95%E5%8C%85%E7%9A%84%E9%87%91%E9%A2%9D%E8%AE%BE%E7%BD%AE%E5%A5%BD%E9%AB%98%23) `214.1K 🔥` `-76%`
1. [李一桐定时红包](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%AE%9A%E6%97%B6%E7%BA%A2%E5%8C%85%23) `206.2K 🔥` `-64%`
1. [成毅的年夜饭 (Cheng Yi’s New Year’s Eve dinner)](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%9A%84%E5%B9%B4%E5%A4%9C%E9%A5%AD%23) `200.8K 🔥` `-42%`
1. [新年祝福语](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4%E7%A5%9D%E7%A6%8F%E8%AF%AD%23) `171.9K 🔥` `-33%`
1. [陈星旭红包里有什么秘密](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%E7%BA%A2%E5%8C%85%E9%87%8C%E6%9C%89%E4%BB%80%E4%B9%88%E7%A7%98%E5%AF%86%23) `171.4K 🔥` `-33%`
1. [除夕 (Lunar New Year's eve)](https://s.weibo.com/weibo?q=%23%E9%99%A4%E5%A4%95%23) `170.7K 🔥` `-91%`
1. [周翊然红包 (Zhou Yiran red envelope)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E7%BA%A2%E5%8C%85%23) `170.5K 🔥` `-33%`
1. [江苏提级调查连云港烟花爆竹爆炸](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E6%8F%90%E7%BA%A7%E8%B0%83%E6%9F%A5%E8%BF%9E%E4%BA%91%E6%B8%AF%E7%83%9F%E8%8A%B1%E7%88%86%E7%AB%B9%E7%88%86%E7%82%B8%23) `169.8K 🔥` `-71%`

Updated at 2026-02-16 19:07:40

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
