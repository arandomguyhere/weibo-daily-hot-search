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

1. [李钟硕IU宣布分手 (Lee Jong Suk, IU announce breakup)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95IU%E5%AE%A3%E5%B8%83%E5%88%86%E6%89%8B%23) `12.1M 🔥` `NEW`
1. [原则上无人机不许吊人但人民大于原则](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E5%88%99%E4%B8%8A%E6%97%A0%E4%BA%BA%E6%9C%BA%E4%B8%8D%E8%AE%B8%E5%90%8A%E4%BA%BA%E4%BD%86%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BA%8E%E5%8E%9F%E5%88%99%23) `9.0M 🔥` `NEW`
1. [大疆救人](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E6%95%91%E4%BA%BA%23) `1.6M 🔥` `NEW`
1. [应对台风巴威](https://s.weibo.com/weibo?q=%23%E5%BA%94%E5%AF%B9%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%23) `1.3M 🔥` `NEW`
1. [看球上淘宝闪购拼团大力省](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%90%83%E4%B8%8A%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E6%8B%BC%E5%9B%A2%E5%A4%A7%E5%8A%9B%E7%9C%81%23) `1.2M 🔥` `NEW`
1. [长征十号乙火箭回收成功](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E5%8D%81%E5%8F%B7%E4%B9%99%E7%81%AB%E7%AE%AD%E5%9B%9E%E6%94%B6%E6%88%90%E5%8A%9F%23) `1.1M 🔥` `NEW`
1. [长征十号乙](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E5%8D%81%E5%8F%B7%E4%B9%99%23) `832.8K 🔥` `NEW`
1. [很多人低估了五万存款的威力](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E4%BA%BA%E4%BD%8E%E4%BC%B0%E4%BA%86%E4%BA%94%E4%B8%87%E5%AD%98%E6%AC%BE%E7%9A%84%E5%A8%81%E5%8A%9B%23) `820.4K 🔥` `NEW`
1. [时代少年团演唱会收官场官宣](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E6%94%B6%E5%AE%98%E5%9C%BA%E5%AE%98%E5%AE%A3%23) `759.9K 🔥` `NEW`
1. [韩版流星花园是真有钱](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%89%88%E6%B5%81%E6%98%9F%E8%8A%B1%E5%9B%AD%E6%98%AF%E7%9C%9F%E6%9C%89%E9%92%B1%23) `759.9K 🔥` `NEW`
1. [退钱哥被甲亢哥轰出包厢 (The money-refunding guy was kicked out of the box by the hyperthyroid guy)](https://s.weibo.com/weibo?q=%23%E9%80%80%E9%92%B1%E5%93%A5%E8%A2%AB%E7%94%B2%E4%BA%A2%E5%93%A5%E8%BD%B0%E5%87%BA%E5%8C%85%E5%8E%A2%23) `756.2K 🔥` `NEW`
1. [张婧仪唯一关注是陈都灵](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%94%AF%E4%B8%80%E5%85%B3%E6%B3%A8%E6%98%AF%E9%99%88%E9%83%BD%E7%81%B5%23) `747.7K 🔥` `NEW`
1. [上班隐形成本真的很高](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E9%9A%90%E5%BD%A2%E6%88%90%E6%9C%AC%E7%9C%9F%E7%9A%84%E5%BE%88%E9%AB%98%23) `743.1K 🔥` `NEW`
1. [长沙通报体育局员工恶意霸占小区车位](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E9%80%9A%E6%8A%A5%E4%BD%93%E8%82%B2%E5%B1%80%E5%91%98%E5%B7%A5%E6%81%B6%E6%84%8F%E9%9C%B8%E5%8D%A0%E5%B0%8F%E5%8C%BA%E8%BD%A6%E4%BD%8D%23) `737.3K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `730.6K 🔥` `NEW`
1. [IU方承认分手](https://s.weibo.com/weibo?q=%23IU%E6%96%B9%E6%89%BF%E8%AE%A4%E5%88%86%E6%89%8B%23) `728.7K 🔥` `NEW`
1. [时代少年团演唱会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%23) `725.8K 🔥` `NEW`
1. [日本拉面店现倒闭潮](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8B%89%E9%9D%A2%E5%BA%97%E7%8E%B0%E5%80%92%E9%97%AD%E6%BD%AE%23) `722.8K 🔥` `NEW`
1. [姆巴佩疑似跳水骗点](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%96%91%E4%BC%BC%E8%B7%B3%E6%B0%B4%E9%AA%97%E7%82%B9%23) `713.5K 🔥` `NEW`
1. [tima](https://s.weibo.com/weibo?q=%23tima%23) `708.3K 🔥` `NEW`
1. [毛晓彤录音再被翻出 (Mao Xiaotong’s recording was discovered again)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E5%BD%95%E9%9F%B3%E5%86%8D%E8%A2%AB%E7%BF%BB%E5%87%BA%23) `706.5K 🔥` `NEW`
1. [710是球迷才懂的青春暗号](https://s.weibo.com/weibo?q=%23710%E6%98%AF%E7%90%83%E8%BF%B7%E6%89%8D%E6%87%82%E7%9A%84%E9%9D%92%E6%98%A5%E6%9A%97%E5%8F%B7%23) `702.4K 🔥` `NEW`
1. [刘子晗时隔半年回应与吃吃分手](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%90%E6%99%97%E6%97%B6%E9%9A%94%E5%8D%8A%E5%B9%B4%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%90%83%E5%90%83%E5%88%86%E6%89%8B%23) `700.8K 🔥` `NEW`
1. [宋威龙关注张婧仪减肥爆哭热搜](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%85%B3%E6%B3%A8%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%87%8F%E8%82%A5%E7%88%86%E5%93%AD%E7%83%AD%E6%90%9C%23) `694.8K 🔥` `NEW`
1. [易易紫曝李汶翰出轨](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%98%93%E7%B4%AB%E6%9B%9D%E6%9D%8E%E6%B1%B6%E7%BF%B0%E5%87%BA%E8%BD%A8%23) `686.6K 🔥` `NEW`
1. [雀骨](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%23) `682.7K 🔥` `NEW`
1. [广西洪水](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%23) `680.5K 🔥` `NEW`
1. [bw](https://s.weibo.com/weibo?q=%23bw%23) `675.9K 🔥` `NEW`
1. [广西抗洪军人偶遇自己妻儿被救](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%8A%97%E6%B4%AA%E5%86%9B%E4%BA%BA%E5%81%B6%E9%81%87%E8%87%AA%E5%B7%B1%E5%A6%BB%E5%84%BF%E8%A2%AB%E6%95%91%23) `673.6K 🔥` `NEW`
1. [小鹏MONAL03动态首发评测](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL03%E5%8A%A8%E6%80%81%E9%A6%96%E5%8F%91%E8%AF%84%E6%B5%8B%23) `670.4K 🔥` `NEW`
1. [当被穷养的00后成为父母 (When the post-00s who were raised in poverty become parents)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E8%A2%AB%E7%A9%B7%E5%85%BB%E7%9A%8400%E5%90%8E%E6%88%90%E4%B8%BA%E7%88%B6%E6%AF%8D%23) `664.5K 🔥` `NEW`
1. [明日方舟](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%23) `661.6K 🔥` `NEW`
1. [脑死亡丈夫被妻子强留458天后去世](https://s.weibo.com/weibo?q=%23%E8%84%91%E6%AD%BB%E4%BA%A1%E4%B8%88%E5%A4%AB%E8%A2%AB%E5%A6%BB%E5%AD%90%E5%BC%BA%E7%95%99458%E5%A4%A9%E5%90%8E%E5%8E%BB%E4%B8%96%23) `660.0K 🔥` `NEW`
1. [小猫困得好恐怖](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%9B%B0%E5%BE%97%E5%A5%BD%E6%81%90%E6%80%96%23) `654.5K 🔥` `NEW`
1. [北京5区有大暴雨](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC5%E5%8C%BA%E6%9C%89%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `642.6K 🔥` `NEW`
1. [张小斐好考验骨相的造型](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E5%A5%BD%E8%80%83%E9%AA%8C%E9%AA%A8%E7%9B%B8%E7%9A%84%E9%80%A0%E5%9E%8B%23) `640.7K 🔥` `NEW`
1. [许静婉等4名网络主播偷逃税被查](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%9D%99%E5%A9%89%E7%AD%894%E5%90%8D%E7%BD%91%E7%BB%9C%E4%B8%BB%E6%92%AD%E5%81%B7%E9%80%83%E7%A8%8E%E8%A2%AB%E6%9F%A5%23) `635.0K 🔥` `NEW`
1. [晋江鞋厂火灾事故发布会现场默哀](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E9%9E%8B%E5%8E%82%E7%81%AB%E7%81%BE%E4%BA%8B%E6%95%85%E5%8F%91%E5%B8%83%E4%BC%9A%E7%8E%B0%E5%9C%BA%E9%BB%98%E5%93%80%23) `609.0K 🔥` `NEW`
1. [哈兰德吐槽姆巴佩点球被叫停](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%90%90%E6%A7%BD%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%82%B9%E7%90%83%E8%A2%AB%E5%8F%AB%E5%81%9C%23) `739.5K 🔥` `+39%`
1. [广西救援物资投放多亏无人机 (Guangxi relief supplies are delivered thanks to drones)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%95%91%E6%8F%B4%E7%89%A9%E8%B5%84%E6%8A%95%E6%94%BE%E5%A4%9A%E4%BA%8F%E6%97%A0%E4%BA%BA%E6%9C%BA%23) `717.0K 🔥` `+53%`
1. [美主持人称日本被核爆两次却最爱美国](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%A7%B0%E6%97%A5%E6%9C%AC%E8%A2%AB%E6%A0%B8%E7%88%86%E4%B8%A4%E6%AC%A1%E5%8D%B4%E6%9C%80%E7%88%B1%E7%BE%8E%E5%9B%BD%23) `692.6K 🔥` `+34%`
1. [曝羊羊羊找艺人粉丝借钱 (It was revealed that Yangyangyang asked artists and fans to borrow money)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%BE%8A%E7%BE%8A%E7%BE%8A%E6%89%BE%E8%89%BA%E4%BA%BA%E7%B2%89%E4%B8%9D%E5%80%9F%E9%92%B1%23) `634.3K 🔥` `+21%`
1. [TOP青岛演唱会抢票时间](https://s.weibo.com/weibo?q=%23TOP%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8A%A2%E7%A5%A8%E6%97%B6%E9%97%B4%23) `621.2K 🔥` `+36%`
1. [薛之谦北京演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%8C%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%23) `617.7K 🔥` `+21%`
1. [伊朗公布打击美军基地设施细节](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%E8%AE%BE%E6%96%BD%E7%BB%86%E8%8A%82%23) `612.6K 🔥` `+32%`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `607.8K 🔥` `+35%`
1. [李荣浩演唱会天津站延期](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A4%A9%E6%B4%A5%E7%AB%99%E5%BB%B6%E6%9C%9F%23) `629.3K 🔥`
1. [华为联合伙伴发起OPEN NPO项目](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%81%94%E5%90%88%E4%BC%99%E4%BC%B4%E5%8F%91%E8%B5%B7OPEN%20NPO%E9%A1%B9%E7%9B%AE%23) `624.8K 🔥`
1. [台风巴威又改路线了 (Typhoon Bavi changes its route again)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%88%E6%94%B9%E8%B7%AF%E7%BA%BF%E4%BA%86%23) `796.0K 🔥` `-66%`
1. [巴威减弱为强台风级](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%87%8F%E5%BC%B1%E4%B8%BA%E5%BC%BA%E5%8F%B0%E9%A3%8E%E7%BA%A7%23) `650.5K 🔥` `-29%`
1. [姆巴佩受伤 (Mbappe injured)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8F%97%E4%BC%A4%23) `648.8K 🔥` `-72%`

Updated at 2026-07-10 13:04:07

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
