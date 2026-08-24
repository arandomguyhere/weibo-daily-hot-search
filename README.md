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

1. [12306回应无座票二等座同价](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E6%97%A0%E5%BA%A7%E7%A5%A8%E4%BA%8C%E7%AD%89%E5%BA%A7%E5%90%8C%E4%BB%B7%23) `2.1M 🔥` `NEW`
1. [多家餐厅残留液体敌敌畏检测阳性](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E9%A4%90%E5%8E%85%E6%AE%8B%E7%95%99%E6%B6%B2%E4%BD%93%E6%95%8C%E6%95%8C%E7%95%8F%E6%A3%80%E6%B5%8B%E9%98%B3%E6%80%A7%23) `583.6K 🔥` `NEW`
1. [璀璨之上 迪丽热巴](https://s.weibo.com/weibo?q=%23%E7%92%80%E7%92%A8%E4%B9%8B%E4%B8%8A%20%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `436.6K 🔥` `NEW`
1. [韩沛颖向刘浩存道歉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B2%9B%E9%A2%96%E5%90%91%E5%88%98%E6%B5%A9%E5%AD%98%E9%81%93%E6%AD%89%23) `424.2K 🔥` `NEW`
1. [法老 退圈](https://s.weibo.com/weibo?q=%23%E6%B3%95%E8%80%81%20%E9%80%80%E5%9C%88%23) `409.1K 🔥` `NEW`
1. [王晓晨谈泼菜戏份引发演员争议](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%99%A8%E8%B0%88%E6%B3%BC%E8%8F%9C%E6%88%8F%E4%BB%BD%E5%BC%95%E5%8F%91%E6%BC%94%E5%91%98%E4%BA%89%E8%AE%AE%23) `406.9K 🔥` `NEW`
1. [刘浩存有段地府戏也被删了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E6%9C%89%E6%AE%B5%E5%9C%B0%E5%BA%9C%E6%88%8F%E4%B9%9F%E8%A2%AB%E5%88%A0%E4%BA%86%23) `387.5K 🔥` `NEW`
1. [超强台风沙德尔](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%23) `373.8K 🔥` `NEW`
1. [曝华为新款耳机降噪突破式提升](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BA%E6%96%B0%E6%AC%BE%E8%80%B3%E6%9C%BA%E9%99%8D%E5%99%AA%E7%AA%81%E7%A0%B4%E5%BC%8F%E6%8F%90%E5%8D%87%23) `280.3K 🔥` `NEW`
1. [刺棠](https://s.weibo.com/weibo?q=%23%E5%88%BA%E6%A3%A0%23) `265.8K 🔥` `NEW`
1. [社区回应老人店内离世被索赔10万](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E5%8C%BA%E5%9B%9E%E5%BA%94%E8%80%81%E4%BA%BA%E5%BA%97%E5%86%85%E7%A6%BB%E4%B8%96%E8%A2%AB%E7%B4%A2%E8%B5%9410%E4%B8%87%23) `197.8K 🔥` `NEW`
1. [刘亦菲芭莎九月刊预告](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E8%8A%AD%E8%8E%8E%E4%B9%9D%E6%9C%88%E5%88%8A%E9%A2%84%E5%91%8A%23) `195.2K 🔥` `NEW`
1. [影院被樊振东售票速度惊到](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E9%99%A2%E8%A2%AB%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%94%AE%E7%A5%A8%E9%80%9F%E5%BA%A6%E6%83%8A%E5%88%B0%23) `176.2K 🔥` `NEW`
1. [45岁女硕士失业后摆摊卖水果](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E5%A5%B3%E7%A1%95%E5%A3%AB%E5%A4%B1%E4%B8%9A%E5%90%8E%E6%91%86%E6%91%8A%E5%8D%96%E6%B0%B4%E6%9E%9C%23) `163.5K 🔥` `NEW`
1. [实习生把拒绝AI贴到公司电梯](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%B9%A0%E7%94%9F%E6%8A%8A%E6%8B%92%E7%BB%9DAI%E8%B4%B4%E5%88%B0%E5%85%AC%E5%8F%B8%E7%94%B5%E6%A2%AF%23) `163.4K 🔥` `NEW`
1. [王俊凯致我们闪光的小热爱](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%87%B4%E6%88%91%E4%BB%AC%E9%97%AA%E5%85%89%E7%9A%84%E5%B0%8F%E7%83%AD%E7%88%B1%23) `163.4K 🔥` `NEW`
1. [仙逆155集原著动画对比](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86155%E9%9B%86%E5%8E%9F%E8%91%97%E5%8A%A8%E7%94%BB%E5%AF%B9%E6%AF%94%23) `163.4K 🔥` `NEW`
1. [2名环卫工在海滩挖坑掩埋垃圾](https://s.weibo.com/weibo?q=%232%E5%90%8D%E7%8E%AF%E5%8D%AB%E5%B7%A5%E5%9C%A8%E6%B5%B7%E6%BB%A9%E6%8C%96%E5%9D%91%E6%8E%A9%E5%9F%8B%E5%9E%83%E5%9C%BE%23) `155.9K 🔥` `NEW`
1. [甲醛白菜严重透支公众信任](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E4%B8%A5%E9%87%8D%E9%80%8F%E6%94%AF%E5%85%AC%E4%BC%97%E4%BF%A1%E4%BB%BB%23) `149.8K 🔥` `NEW`
1. [用了几百年却被淘汰的神器](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%BA%86%E5%87%A0%E7%99%BE%E5%B9%B4%E5%8D%B4%E8%A2%AB%E6%B7%98%E6%B1%B0%E7%9A%84%E7%A5%9E%E5%99%A8%23) `148.7K 🔥` `NEW`
1. [丈夫扫地机器人拍出轨证据反被判刑](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E6%89%AB%E5%9C%B0%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8B%8D%E5%87%BA%E8%BD%A8%E8%AF%81%E6%8D%AE%E5%8F%8D%E8%A2%AB%E5%88%A4%E5%88%91%23) `136.9K 🔥` `NEW`
1. [427万辆召回 没有一款油车](https://s.weibo.com/weibo?q=%23427%E4%B8%87%E8%BE%86%E5%8F%AC%E5%9B%9E%20%E6%B2%A1%E6%9C%89%E4%B8%80%E6%AC%BE%E6%B2%B9%E8%BD%A6%23) `1.4M 🔥` `+157%`
1. [敌敌畏消杀涉绿茶餐厅](https://s.weibo.com/weibo?q=%23%E6%95%8C%E6%95%8C%E7%95%8F%E6%B6%88%E6%9D%80%E6%B6%89%E7%BB%BF%E8%8C%B6%E9%A4%90%E5%8E%85%23) `1.0M 🔥` `+66%`
1. [官方提出补贴帮扶老人遭索赔店家](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E6%8F%90%E5%87%BA%E8%A1%A5%E8%B4%B4%E5%B8%AE%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E5%BA%97%E5%AE%B6%23) `483.8K 🔥` `+49%`
1. [张子枫好薄的一片](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E5%A5%BD%E8%96%84%E7%9A%84%E4%B8%80%E7%89%87%23) `439.4K 🔥` `+36%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `432.9K 🔥` `+26%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `419.0K 🔥` `+24%`
1. [世界人形机器人运动会现场画面](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%BF%90%E5%8A%A8%E4%BC%9A%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `1.0M 🔥`
1. [105岁老妈说85岁儿子这辈子完了](https://s.weibo.com/weibo?q=%23105%E5%B2%81%E8%80%81%E5%A6%88%E8%AF%B485%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%99%E8%BE%88%E5%AD%90%E5%AE%8C%E4%BA%86%23) `739.0K 🔥`
1. [这些叫不出来的东西真有名字](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%8F%AB%E4%B8%8D%E5%87%BA%E6%9D%A5%E7%9A%84%E4%B8%9C%E8%A5%BF%E7%9C%9F%E6%9C%89%E5%90%8D%E5%AD%97%23) `494.7K 🔥`
1. [千万不要冲动买养老房](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%86%B2%E5%8A%A8%E4%B9%B0%E5%85%BB%E8%80%81%E6%88%BF%23) `395.0K 🔥`
1. [韩沛颖让王晓晨道歉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B2%9B%E9%A2%96%E8%AE%A9%E7%8E%8B%E6%99%93%E6%99%A8%E9%81%93%E6%AD%89%23) `364.3K 🔥`
1. [丁程鑫机场被点名](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%9C%BA%E5%9C%BA%E8%A2%AB%E7%82%B9%E5%90%8D%23) `355.7K 🔥`
1. [四十多岁女丁克想生孩子](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%8D%81%E5%A4%9A%E5%B2%81%E5%A5%B3%E4%B8%81%E5%85%8B%E6%83%B3%E7%94%9F%E5%AD%A9%E5%AD%90%23) `355.1K 🔥`
1. [四六级成绩](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%88%90%E7%BB%A9%23) `312.4K 🔥`
1. [张韶涵因心脏病找母亲要医疗费未果](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E5%9B%A0%E5%BF%83%E8%84%8F%E7%97%85%E6%89%BE%E6%AF%8D%E4%BA%B2%E8%A6%81%E5%8C%BB%E7%96%97%E8%B4%B9%E6%9C%AA%E6%9E%9C%23) `312.1K 🔥`
1. [楚嘉禾 加戏](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E5%98%89%E7%A6%BE%20%E5%8A%A0%E6%88%8F%23) `306.2K 🔥`
1. [张凌赫与你解锁超过瘾VIP新品](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%8E%E4%BD%A0%E8%A7%A3%E9%94%81%E8%B6%85%E8%BF%87%E7%98%BEVIP%E6%96%B0%E5%93%81%23) `518.7K 🔥` `-53%`
1. [花开锦绣女主被指双标](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E5%A5%B3%E4%B8%BB%E8%A2%AB%E6%8C%87%E5%8F%8C%E6%A0%87%23) `222.2K 🔥` `-37%`
1. [四川长宁地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E9%95%BF%E5%AE%81%E5%9C%B0%E9%9C%87%23) `217.4K 🔥` `-38%`
1. [爸爸拉一车西瓜带女儿进藏自驾游](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E6%8B%89%E4%B8%80%E8%BD%A6%E8%A5%BF%E7%93%9C%E5%B8%A6%E5%A5%B3%E5%84%BF%E8%BF%9B%E8%97%8F%E8%87%AA%E9%A9%BE%E6%B8%B8%23) `198.4K 🔥` `-35%`
1. [张韶涵演唱会突发心脏不适](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E7%AA%81%E5%8F%91%E5%BF%83%E8%84%8F%E4%B8%8D%E9%80%82%23) `183.1K 🔥` `-48%`
1. [白鹿曾买了835张宋雨琦数字专辑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9B%BE%E4%B9%B0%E4%BA%86835%E5%BC%A0%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%95%B0%E5%AD%97%E4%B8%93%E8%BE%91%23) `175.4K 🔥` `-45%`
1. [沪上阿姨小程序崩了](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%B4%A9%E4%BA%86%23) `173.3K 🔥` `-43%`
1. [26岁销售员验DNA成了比利时王子](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E9%94%80%E5%94%AE%E5%91%98%E9%AA%8CDNA%E6%88%90%E4%BA%86%E6%AF%94%E5%88%A9%E6%97%B6%E7%8E%8B%E5%AD%90%23) `164.6K 🔥` `-48%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `155.9K 🔥` `-48%`
1. [孙珍妮艾米合照](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%8F%8D%E5%A6%AE%E8%89%BE%E7%B1%B3%E5%90%88%E7%85%A7%23) `154.2K 🔥` `-47%`
1. [梁伟铿王昶世锦赛夺冠憋了很久](https://s.weibo.com/weibo?q=%23%E6%A2%81%E4%BC%9F%E9%93%BF%E7%8E%8B%E6%98%B6%E4%B8%96%E9%94%A6%E8%B5%9B%E5%A4%BA%E5%86%A0%E6%86%8B%E4%BA%86%E5%BE%88%E4%B9%85%23) `149.6K 🔥` `-47%`
1. [官方回应长宁地震预警偏差](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E9%95%BF%E5%AE%81%E5%9C%B0%E9%9C%87%E9%A2%84%E8%AD%A6%E5%81%8F%E5%B7%AE%23) `147.9K 🔥` `-54%`
1. [金晨瘦成这样居然还有肌肉](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E7%98%A6%E6%88%90%E8%BF%99%E6%A0%B7%E5%B1%85%E7%84%B6%E8%BF%98%E6%9C%89%E8%82%8C%E8%82%89%23) `145.3K 🔥` `-54%`

Updated at 2026-08-24 12:09:31

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
