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

1. [中国人形机器人跑出加速度](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%91%E5%87%BA%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `903.5K 🔥` `NEW`
1. [公务员碾死醉汉被认定过失致死](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8A%A1%E5%91%98%E7%A2%BE%E6%AD%BB%E9%86%89%E6%B1%89%E8%A2%AB%E8%AE%A4%E5%AE%9A%E8%BF%87%E5%A4%B1%E8%87%B4%E6%AD%BB%23) `545.1K 🔥` `NEW`
1. [宋丹丹穿20年前家有儿女的衣服](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%B8%B9%E4%B8%B9%E7%A9%BF20%E5%B9%B4%E5%89%8D%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E7%9A%84%E8%A1%A3%E6%9C%8D%23) `483.7K 🔥` `NEW`
1. [网传披荆斩棘二公组队](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%BA%8C%E5%85%AC%E7%BB%84%E9%98%9F%23) `409.0K 🔥` `NEW`
1. [女孩买三张票不该被拍](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B9%B0%E4%B8%89%E5%BC%A0%E7%A5%A8%E4%B8%8D%E8%AF%A5%E8%A2%AB%E6%8B%8D%23) `342.2K 🔥` `NEW`
1. [王传君 乔任梁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%20%E4%B9%94%E4%BB%BB%E6%A2%81%23) `326.7K 🔥` `NEW`
1. [成毅送张智霖演唱会花篮](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E9%80%81%E5%BC%A0%E6%99%BA%E9%9C%96%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8A%B1%E7%AF%AE%23) `208.1K 🔥` `NEW`
1. [马斯克妈妈在上海被偶遇逛名创优品](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%A6%88%E5%A6%88%E5%9C%A8%E4%B8%8A%E6%B5%B7%E8%A2%AB%E5%81%B6%E9%81%87%E9%80%9B%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%23) `203.7K 🔥` `NEW`
1. [赛考斯时隔27年重返中国](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E8%80%83%E6%96%AF%E6%97%B6%E9%9A%9427%E5%B9%B4%E9%87%8D%E8%BF%94%E4%B8%AD%E5%9B%BD%23) `199.0K 🔥` `NEW`
1. [英伟达涨价通知](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%B6%A8%E4%BB%B7%E9%80%9A%E7%9F%A5%23) `176.4K 🔥` `NEW`
1. [男子调包订婚五金典当套现208万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B0%83%E5%8C%85%E8%AE%A2%E5%A9%9A%E4%BA%94%E9%87%91%E5%85%B8%E5%BD%93%E5%A5%97%E7%8E%B0208%E4%B8%87%23) `154.7K 🔥` `NEW`
1. [医学界少了一个神医惠英红](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E5%AD%A6%E7%95%8C%E5%B0%91%E4%BA%86%E4%B8%80%E4%B8%AA%E7%A5%9E%E5%8C%BB%E6%83%A0%E8%8B%B1%E7%BA%A2%23) `152.8K 🔥` `NEW`
1. [台风沙德尔中心最大风力16级](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%E4%B8%AD%E5%BF%83%E6%9C%80%E5%A4%A7%E9%A3%8E%E5%8A%9B16%E7%BA%A7%23) `144.5K 🔥` `NEW`
1. [我的前半生](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%23) `125.0K 🔥` `NEW`
1. [迈阿密国际1比2多伦多FC](https://s.weibo.com/weibo?q=%23%E8%BF%88%E9%98%BF%E5%AF%86%E5%9B%BD%E9%99%851%E6%AF%942%E5%A4%9A%E4%BC%A6%E5%A4%9AFC%23) `123.0K 🔥` `NEW`
1. [王菲的表情包](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E7%9A%84%E8%A1%A8%E6%83%85%E5%8C%85%23) `122.5K 🔥` `NEW`
1. [投保千万男子给情人备注叉车林德](https://s.weibo.com/weibo?q=%23%E6%8A%95%E4%BF%9D%E5%8D%83%E4%B8%87%E7%94%B7%E5%AD%90%E7%BB%99%E6%83%85%E4%BA%BA%E5%A4%87%E6%B3%A8%E5%8F%89%E8%BD%A6%E6%9E%97%E5%BE%B7%23) `120.2K 🔥` `NEW`
1. [多名农民称莫名成法人代表被贷款千万](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E5%86%9C%E6%B0%91%E7%A7%B0%E8%8E%AB%E5%90%8D%E6%88%90%E6%B3%95%E4%BA%BA%E4%BB%A3%E8%A1%A8%E8%A2%AB%E8%B4%B7%E6%AC%BE%E5%8D%83%E4%B8%87%23) `116.3K 🔥` `NEW`
1. [外资加速涌入中国高技术产业](https://s.weibo.com/weibo?q=%23%E5%A4%96%E8%B5%84%E5%8A%A0%E9%80%9F%E6%B6%8C%E5%85%A5%E4%B8%AD%E5%9B%BD%E9%AB%98%E6%8A%80%E6%9C%AF%E4%BA%A7%E4%B8%9A%23) `112.6K 🔥` `NEW`
1. [阚清子分享下100斤的餐食](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%88%86%E4%BA%AB%E4%B8%8B100%E6%96%A4%E7%9A%84%E9%A4%90%E9%A3%9F%23) `104.9K 🔥` `NEW`
1. [网红温婉偷税被罚后换号复活](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%B8%A9%E5%A9%89%E5%81%B7%E7%A8%8E%E8%A2%AB%E7%BD%9A%E5%90%8E%E6%8D%A2%E5%8F%B7%E5%A4%8D%E6%B4%BB%23) `2.1M 🔥` `+130%`
1. [我的前半生官博都活了](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%AE%98%E5%8D%9A%E9%83%BD%E6%B4%BB%E4%BA%86%23) `971.9K 🔥` `+79%`
1. [原来明媚又开朗的女生是这样的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E5%AA%9A%E5%8F%88%E5%BC%80%E6%9C%97%E7%9A%84%E5%A5%B3%E7%94%9F%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `894.2K 🔥` `+72%`
1. [严浩翔看黄子弘凡帮唱组票数的表情](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9C%8B%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%B8%AE%E5%94%B1%E7%BB%84%E7%A5%A8%E6%95%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `221.5K 🔥` `+80%`
1. [刘宇宁在海报的C位](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%9C%A8%E6%B5%B7%E6%8A%A5%E7%9A%84C%E4%BD%8D%23) `195.8K 🔥` `+67%`
1. [EWC](https://s.weibo.com/weibo?q=%23EWC%23) `186.4K 🔥` `+31%`
1. [王传君说的是乔任梁吗 (Is Wang Chuanjun talking about Qiao Renliang?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E8%AF%B4%E7%9A%84%E6%98%AF%E4%B9%94%E4%BB%BB%E6%A2%81%E5%90%97%23) `360.2K 🔥`
1. [华晨宇失眠照流出](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%A4%B1%E7%9C%A0%E7%85%A7%E6%B5%81%E5%87%BA%23) `350.6K 🔥`
1. [去西班牙旅游出门不要带包](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E8%A5%BF%E7%8F%AD%E7%89%99%E6%97%85%E6%B8%B8%E5%87%BA%E9%97%A8%E4%B8%8D%E8%A6%81%E5%B8%A6%E5%8C%85%23) `329.8K 🔥`
1. [李现章若楠一起看汪苏泷演唱会](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%AB%A0%E8%8B%A5%E6%A5%A0%E4%B8%80%E8%B5%B7%E7%9C%8B%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%23) `272.6K 🔥`
1. [德甲](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%94%B2%23) `260.3K 🔥`
1. [AGAL夺冠](https://s.weibo.com/weibo?q=%23AGAL%E5%A4%BA%E5%86%A0%23) `223.8K 🔥`
1. [金季酒店与全季酒店已达成和解](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%A3%E9%85%92%E5%BA%97%E4%B8%8E%E5%85%A8%E5%AD%A3%E9%85%92%E5%BA%97%E5%B7%B2%E8%BE%BE%E6%88%90%E5%92%8C%E8%A7%A3%23) `179.2K 🔥`
1. [张凌赫卡住了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8D%A1%E4%BD%8F%E4%BA%86%23) `141.3K 🔥`
1. [张月学到了孟子义的精髓](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%AD%A6%E5%88%B0%E4%BA%86%E5%AD%9F%E5%AD%90%E4%B9%89%E7%9A%84%E7%B2%BE%E9%AB%93%23) `111.8K 🔥`
1. [人民日报谈火车零食占座 (People's Daily talks about snacks occupying seats on trains)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%B0%88%E7%81%AB%E8%BD%A6%E9%9B%B6%E9%A3%9F%E5%8D%A0%E5%BA%A7%23) `453.1K 🔥` `-67%`
1. [电影欢迎来龙餐馆口碑](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E5%8F%A3%E7%A2%91%23) `405.6K 🔥` `-26%`
1. [曾被狼群抚养12年狼孩去世](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%A2%AB%E7%8B%BC%E7%BE%A4%E6%8A%9A%E5%85%BB12%E5%B9%B4%E7%8B%BC%E5%AD%A9%E5%8E%BB%E4%B8%96%23) `361.6K 🔥` `-31%`
1. [日本地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%23) `198.7K 🔥` `-41%`
1. [宇树机器人100米预赛小组垫底](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA100%E7%B1%B3%E9%A2%84%E8%B5%9B%E5%B0%8F%E7%BB%84%E5%9E%AB%E5%BA%95%23) `184.6K 🔥` `-48%`
1. [张雅琪去了那英演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%8E%BB%E4%BA%86%E9%82%A3%E8%8B%B1%E6%BC%94%E5%94%B1%E4%BC%9A%23) `183.2K 🔥` `-36%`
1. [台风简拉维突然大拐弯](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%AE%80%E6%8B%89%E7%BB%B4%E7%AA%81%E7%84%B6%E5%A4%A7%E6%8B%90%E5%BC%AF%23) `170.2K 🔥` `-47%`
1. [郭敬明剧组减肥方法](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%89%A7%E7%BB%84%E5%87%8F%E8%82%A5%E6%96%B9%E6%B3%95%23) `153.0K 🔥` `-34%`
1. [零食占座当事人母亲发声 (The mother of the person involved in snacks occupying a seat speaks out)](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E9%A3%9F%E5%8D%A0%E5%BA%A7%E5%BD%93%E4%BA%8B%E4%BA%BA%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `147.8K 🔥` `-31%`
1. [李维嘉追星成功王菲](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BB%B4%E5%98%89%E8%BF%BD%E6%98%9F%E6%88%90%E5%8A%9F%E7%8E%8B%E8%8F%B2%23) `142.8K 🔥` `-37%`
1. [追觅办公室大片工位闲置](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%A4%A7%E7%89%87%E5%B7%A5%E4%BD%8D%E9%97%B2%E7%BD%AE%23) `126.2K 🔥` `-24%`
1. [4名男子拒付嫖资勒索卖淫女后赌光 (4 men blackmailed prostitutes after refusing to pay for prostitution and then gambled away their money)](https://s.weibo.com/weibo?q=%234%E5%90%8D%E7%94%B7%E5%AD%90%E6%8B%92%E4%BB%98%E5%AB%96%E8%B5%84%E5%8B%92%E7%B4%A2%E5%8D%96%E6%B7%AB%E5%A5%B3%E5%90%8E%E8%B5%8C%E5%85%89%23) `113.6K 🔥` `-39%`
1. [处暑](https://s.weibo.com/weibo?q=%23%E5%A4%84%E6%9A%91%23) `110.4K 🔥` `-30%`

Updated at 2026-08-23 11:00:54

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
