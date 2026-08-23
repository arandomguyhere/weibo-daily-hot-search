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

1. [上班立什么人设最吃香](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E7%AB%8B%E4%BB%80%E4%B9%88%E4%BA%BA%E8%AE%BE%E6%9C%80%E5%90%83%E9%A6%99%23) `708.6K 🔥` `NEW`
1. [巫哲回应好帅](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E5%9B%9E%E5%BA%94%E5%A5%BD%E5%B8%85%23) `540.6K 🔥` `NEW`
1. [洗牙的三大误区](https://s.weibo.com/weibo?q=%23%E6%B4%97%E7%89%99%E7%9A%84%E4%B8%89%E5%A4%A7%E8%AF%AF%E5%8C%BA%23) `520.1K 🔥` `NEW`
1. [最近是全体教师最脆弱的时候](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%BF%91%E6%98%AF%E5%85%A8%E4%BD%93%E6%95%99%E5%B8%88%E6%9C%80%E8%84%86%E5%BC%B1%E7%9A%84%E6%97%B6%E5%80%99%23) `514.9K 🔥` `NEW`
1. [李维嘉曾拒绝王菲加好友](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BB%B4%E5%98%89%E6%9B%BE%E6%8B%92%E7%BB%9D%E7%8E%8B%E8%8F%B2%E5%8A%A0%E5%A5%BD%E5%8F%8B%23) `400.9K 🔥` `NEW`
1. [温婉命名的相关账号将近100个](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%A9%89%E5%91%BD%E5%90%8D%E7%9A%84%E7%9B%B8%E5%85%B3%E8%B4%A6%E5%8F%B7%E5%B0%86%E8%BF%91100%E4%B8%AA%23) `255.0K 🔥` `NEW`
1. [刘昊然提醒李兰迪调整裙子](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E6%8F%90%E9%86%92%E6%9D%8E%E5%85%B0%E8%BF%AA%E8%B0%83%E6%95%B4%E8%A3%99%E5%AD%90%23) `227.6K 🔥` `NEW`
1. [韦东奕下架练习册](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E4%B8%9C%E5%A5%95%E4%B8%8B%E6%9E%B6%E7%BB%83%E4%B9%A0%E5%86%8C%23) `226.8K 🔥` `NEW`
1. [建议吃方便面少喝汤](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%90%83%E6%96%B9%E4%BE%BF%E9%9D%A2%E5%B0%91%E5%96%9D%E6%B1%A4%23) `189.2K 🔥` `NEW`
1. [银行回应多名农民称被贷款千万](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%9B%9E%E5%BA%94%E5%A4%9A%E5%90%8D%E5%86%9C%E6%B0%91%E7%A7%B0%E8%A2%AB%E8%B4%B7%E6%AC%BE%E5%8D%83%E4%B8%87%23) `186.1K 🔥` `NEW`
1. [小沈阳披哥投诉导演组](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%8A%AB%E5%93%A5%E6%8A%95%E8%AF%89%E5%AF%BC%E6%BC%94%E7%BB%84%23) `173.9K 🔥` `NEW`
1. [中国机器人百米跑出9秒39](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%99%BE%E7%B1%B3%E8%B7%91%E5%87%BA9%E7%A7%9239%23) `168.5K 🔥` `NEW`
1. [张睿舞台失误](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E8%88%9E%E5%8F%B0%E5%A4%B1%E8%AF%AF%23) `161.4K 🔥` `NEW`
1. [不拴绳宠物狗咬了尿不湿小朋友](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%8B%B4%E7%BB%B3%E5%AE%A0%E7%89%A9%E7%8B%97%E5%92%AC%E4%BA%86%E5%B0%BF%E4%B8%8D%E6%B9%BF%E5%B0%8F%E6%9C%8B%E5%8F%8B%23) `151.4K 🔥` `NEW`
1. [娜扎风衣红裙反差感](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E9%A3%8E%E8%A1%A3%E7%BA%A2%E8%A3%99%E5%8F%8D%E5%B7%AE%E6%84%9F%23) `116.8K 🔥` `NEW`
1. [井柏然带120套私服进早春晴朗](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%B8%A6120%E5%A5%97%E7%A7%81%E6%9C%8D%E8%BF%9B%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `115.5K 🔥` `NEW`
1. [龚俊好捧场](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E5%A5%BD%E6%8D%A7%E5%9C%BA%23) `110.7K 🔥` `NEW`
1. [多国印度移民拒签率飙升](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E5%8D%B0%E5%BA%A6%E7%A7%BB%E6%B0%91%E6%8B%92%E7%AD%BE%E7%8E%87%E9%A3%99%E5%8D%87%23) `105.8K 🔥` `NEW`
1. [公务员碾死醉汉被认定过失致死](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8A%A1%E5%91%98%E7%A2%BE%E6%AD%BB%E9%86%89%E6%B1%89%E8%A2%AB%E8%AE%A4%E5%AE%9A%E8%BF%87%E5%A4%B1%E8%87%B4%E6%AD%BB%23) `957.1K 🔥` `+76%`
1. [王传君 乔任梁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%20%E4%B9%94%E4%BB%BB%E6%A2%81%23) `411.6K 🔥` `+26%`
1. [网红温婉偷税被罚后换号复活](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%B8%A9%E5%A9%89%E5%81%B7%E7%A8%8E%E8%A2%AB%E7%BD%9A%E5%90%8E%E6%8D%A2%E5%8F%B7%E5%A4%8D%E6%B4%BB%23) `1.7M 🔥`
1. [曾被狼群抚养12年狼孩去世](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%A2%AB%E7%8B%BC%E7%BE%A4%E6%8A%9A%E5%85%BB12%E5%B9%B4%E7%8B%BC%E5%AD%A9%E5%8E%BB%E4%B8%96%23) `414.8K 🔥`
1. [人民日报谈火车零食占座 (People's Daily talks about snacks occupying seats on trains)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%B0%88%E7%81%AB%E8%BD%A6%E9%9B%B6%E9%A3%9F%E5%8D%A0%E5%BA%A7%23) `407.4K 🔥`
1. [华晨宇失眠照流出](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%A4%B1%E7%9C%A0%E7%85%A7%E6%B5%81%E5%87%BA%23) `403.0K 🔥`
1. [德甲](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%94%B2%23) `227.7K 🔥`
1. [金季酒店与全季酒店已达成和解](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%A3%E9%85%92%E5%BA%97%E4%B8%8E%E5%85%A8%E5%AD%A3%E9%85%92%E5%BA%97%E5%B7%B2%E8%BE%BE%E6%88%90%E5%92%8C%E8%A7%A3%23) `214.2K 🔥`
1. [英伟达涨价通知](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%B6%A8%E4%BB%B7%E9%80%9A%E7%9F%A5%23) `169.3K 🔥`
1. [马斯克妈妈在上海被偶遇逛名创优品](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%A6%88%E5%A6%88%E5%9C%A8%E4%B8%8A%E6%B5%B7%E8%A2%AB%E5%81%B6%E9%81%87%E9%80%9B%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%23) `168.1K 🔥`
1. [男子调包订婚五金典当套现208万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B0%83%E5%8C%85%E8%AE%A2%E5%A9%9A%E4%BA%94%E9%87%91%E5%85%B8%E5%BD%93%E5%A5%97%E7%8E%B0208%E4%B8%87%23) `143.8K 🔥`
1. [医学界少了一个神医惠英红](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E5%AD%A6%E7%95%8C%E5%B0%91%E4%BA%86%E4%B8%80%E4%B8%AA%E7%A5%9E%E5%8C%BB%E6%83%A0%E8%8B%B1%E7%BA%A2%23) `125.5K 🔥`
1. [王菲的表情包](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E7%9A%84%E8%A1%A8%E6%83%85%E5%8C%85%23) `104.9K 🔥`
1. [中国人形机器人跑出加速度](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%91%E5%87%BA%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `711.7K 🔥` `-21%`
1. [原来明媚又开朗的女生是这样的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E5%AA%9A%E5%8F%88%E5%BC%80%E6%9C%97%E7%9A%84%E5%A5%B3%E7%94%9F%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `678.0K 🔥` `-24%`
1. [我的前半生官博都活了](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%AE%98%E5%8D%9A%E9%83%BD%E6%B4%BB%E4%BA%86%23) `425.6K 🔥` `-56%`
1. [王传君说的是乔任梁吗 (Is Wang Chuanjun talking about Qiao Renliang?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E8%AF%B4%E7%9A%84%E6%98%AF%E4%B9%94%E4%BB%BB%E6%A2%81%E5%90%97%23) `246.8K 🔥` `-31%`
1. [电影欢迎来龙餐馆口碑](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E5%8F%A3%E7%A2%91%23) `243.4K 🔥` `-40%`
1. [去西班牙旅游出门不要带包](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E8%A5%BF%E7%8F%AD%E7%89%99%E6%97%85%E6%B8%B8%E5%87%BA%E9%97%A8%E4%B8%8D%E8%A6%81%E5%B8%A6%E5%8C%85%23) `235.8K 🔥` `-28%`
1. [宋丹丹穿20年前家有儿女的衣服](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%B8%B9%E4%B8%B9%E7%A9%BF20%E5%B9%B4%E5%89%8D%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E7%9A%84%E8%A1%A3%E6%9C%8D%23) `234.4K 🔥` `-52%`
1. [网传披荆斩棘二公组队](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%BA%8C%E5%85%AC%E7%BB%84%E9%98%9F%23) `221.3K 🔥` `-46%`
1. [李现章若楠一起看汪苏泷演唱会](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%AB%A0%E8%8B%A5%E6%A5%A0%E4%B8%80%E8%B5%B7%E7%9C%8B%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%23) `179.8K 🔥` `-34%`
1. [刘宇宁在海报的C位](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%9C%A8%E6%B5%B7%E6%8A%A5%E7%9A%84C%E4%BD%8D%23) `142.2K 🔥` `-27%`
1. [日本地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%23) `141.2K 🔥` `-29%`
1. [AGAL夺冠](https://s.weibo.com/weibo?q=%23AGAL%E5%A4%BA%E5%86%A0%23) `138.3K 🔥` `-38%`
1. [EWC](https://s.weibo.com/weibo?q=%23EWC%23) `131.4K 🔥` `-30%`
1. [严浩翔看黄子弘凡帮唱组票数的表情](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9C%8B%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%B8%AE%E5%94%B1%E7%BB%84%E7%A5%A8%E6%95%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `129.3K 🔥` `-42%`
1. [台风简拉维突然大拐弯](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%AE%80%E6%8B%89%E7%BB%B4%E7%AA%81%E7%84%B6%E5%A4%A7%E6%8B%90%E5%BC%AF%23) `117.2K 🔥` `-31%`
1. [宇树机器人100米预赛小组垫底](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA100%E7%B1%B3%E9%A2%84%E8%B5%9B%E5%B0%8F%E7%BB%84%E5%9E%AB%E5%BA%95%23) `112.5K 🔥` `-39%`
1. [张雅琪去了那英演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%8E%BB%E4%BA%86%E9%82%A3%E8%8B%B1%E6%BC%94%E5%94%B1%E4%BC%9A%23) `111.1K 🔥` `-39%`
1. [成毅送张智霖演唱会花篮](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E9%80%81%E5%BC%A0%E6%99%BA%E9%9C%96%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8A%B1%E7%AF%AE%23) `105.5K 🔥` `-49%`

Updated at 2026-08-23 11:56:37

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
