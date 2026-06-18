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

1. [香港机场发生黄金大劫案 (Gold robbery at Hong Kong Airport)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%9C%BA%E5%9C%BA%E5%8F%91%E7%94%9F%E9%BB%84%E9%87%91%E5%A4%A7%E5%8A%AB%E6%A1%88%23) `1.4M 🔥` `NEW`
1. [葡萄牙队回应C罗发文](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E9%98%9F%E5%9B%9E%E5%BA%94C%E7%BD%97%E5%8F%91%E6%96%87%23) `902.7K 🔥` `NEW`
1. [东北人应该被禁止给景点起名](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E4%BA%BA%E5%BA%94%E8%AF%A5%E8%A2%AB%E7%A6%81%E6%AD%A2%E7%BB%99%E6%99%AF%E7%82%B9%E8%B5%B7%E5%90%8D%23) `757.9K 🔥` `NEW`
1. [孙怡花少8面试](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%8A%B1%E5%B0%918%E9%9D%A2%E8%AF%95%23) `693.3K 🔥` `NEW`
1. [驾校从业者为招生编驾考谣言被罚](https://s.weibo.com/weibo?q=%23%E9%A9%BE%E6%A0%A1%E4%BB%8E%E4%B8%9A%E8%80%85%E4%B8%BA%E6%8B%9B%E7%94%9F%E7%BC%96%E9%A9%BE%E8%80%83%E8%B0%A3%E8%A8%80%E8%A2%AB%E7%BD%9A%23) `592.7K 🔥` `NEW`
1. [建议大家对钱要有概念](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%AF%B9%E9%92%B1%E8%A6%81%E6%9C%89%E6%A6%82%E5%BF%B5%23) `542.4K 🔥` `NEW`
1. [地球超新鲜2定档](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E8%B6%85%E6%96%B0%E9%B2%9C2%E5%AE%9A%E6%A1%A3%23) `399.2K 🔥` `NEW`
1. [陈建斌蒋勤勤参加儿子毕业典礼](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BB%BA%E6%96%8C%E8%92%8B%E5%8B%A4%E5%8B%A4%E5%8F%82%E5%8A%A0%E5%84%BF%E5%AD%90%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%23) `388.8K 🔥` `NEW`
1. [SANA解释衣服争议](https://s.weibo.com/weibo?q=%23SANA%E8%A7%A3%E9%87%8A%E8%A1%A3%E6%9C%8D%E4%BA%89%E8%AE%AE%23) `385.9K 🔥` `NEW`
1. [鹿晗 护照届最严厉的父亲](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E6%8A%A4%E7%85%A7%E5%B1%8A%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E4%BA%B2%23) `382.0K 🔥` `NEW`
1. [无人机撞向莫斯科高楼炼油厂 (Drone crashes into Moscow high-rise oil refinery)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E6%9C%BA%E6%92%9E%E5%90%91%E8%8E%AB%E6%96%AF%E7%A7%91%E9%AB%98%E6%A5%BC%E7%82%BC%E6%B2%B9%E5%8E%82%23) `379.0K 🔥` `NEW`
1. [成品油价降回7元时代](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%93%81%E6%B2%B9%E4%BB%B7%E9%99%8D%E5%9B%9E7%E5%85%83%E6%97%B6%E4%BB%A3%23) `373.3K 🔥` `NEW`
1. [专家称纸尿裤是否有毒需看具体数据](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E7%BA%B8%E5%B0%BF%E8%A3%A4%E6%98%AF%E5%90%A6%E6%9C%89%E6%AF%92%E9%9C%80%E7%9C%8B%E5%85%B7%E4%BD%93%E6%95%B0%E6%8D%AE%23) `369.4K 🔥` `NEW`
1. [时代少年团上海站连开四场](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%B8%8A%E6%B5%B7%E7%AB%99%E8%BF%9E%E5%BC%80%E5%9B%9B%E5%9C%BA%23) `367.6K 🔥` `NEW`
1. [市委书记滥用职权致33个工程烂尾](https://s.weibo.com/weibo?q=%23%E5%B8%82%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%BB%A5%E7%94%A8%E8%81%8C%E6%9D%83%E8%87%B433%E4%B8%AA%E5%B7%A5%E7%A8%8B%E7%83%82%E5%B0%BE%23) `363.4K 🔥` `NEW`
1. [高叶 网红妆](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%B6%20%E7%BD%91%E7%BA%A2%E5%A6%86%23) `349.4K 🔥` `NEW`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `286.2K 🔥` `NEW`
1. [短剧圈好久没这么热闹了](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E5%9C%88%E5%A5%BD%E4%B9%85%E6%B2%A1%E8%BF%99%E4%B9%88%E7%83%AD%E9%97%B9%E4%BA%86%23) `208.0K 🔥` `NEW`
1. [茉莉奶白爆单解决方案](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E7%88%86%E5%8D%95%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%23) `207.9K 🔥` `NEW`
1. [你买空调会在意铝制还是铜制吗](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B9%B0%E7%A9%BA%E8%B0%83%E4%BC%9A%E5%9C%A8%E6%84%8F%E9%93%9D%E5%88%B6%E8%BF%98%E6%98%AF%E9%93%9C%E5%88%B6%E5%90%97%23) `195.2K 🔥` `NEW`
1. [虞书欣直播 (Yu Shuxin live broadcast)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%23) `193.8K 🔥` `NEW`
1. [霍启山 娜然](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%B1%B1%20%E5%A8%9C%E7%84%B6%23) `186.3K 🔥` `NEW`
1. [佛得角门将母亲去世界杯了](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E6%AF%8D%E4%BA%B2%E5%8E%BB%E4%B8%96%E7%95%8C%E6%9D%AF%E4%BA%86%23) `182.9K 🔥` `NEW`
1. [成毅新增合同纠纷案](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%96%B0%E5%A2%9E%E5%90%88%E5%90%8C%E7%BA%A0%E7%BA%B7%E6%A1%88%23) `181.9K 🔥` `NEW`
1. [TF四代排队求救中](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E6%8E%92%E9%98%9F%E6%B1%82%E6%95%91%E4%B8%AD%23) `180.8K 🔥` `NEW`
1. [毛晓彤赵又廷开播就吵架](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E8%B5%B5%E5%8F%88%E5%BB%B7%E5%BC%80%E6%92%AD%E5%B0%B1%E5%90%B5%E6%9E%B6%23) `168.2K 🔥` `NEW`
1. [伊能静问恩利摄像机还开着吗](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E9%97%AE%E6%81%A9%E5%88%A9%E6%91%84%E5%83%8F%E6%9C%BA%E8%BF%98%E5%BC%80%E7%9D%80%E5%90%97%23) `166.1K 🔥` `NEW`
1. [鞠婧祎PORT九月刊预告](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8EPORT%E4%B9%9D%E6%9C%88%E5%88%8A%E9%A2%84%E5%91%8A%23) `160.2K 🔥` `NEW`
1. [因AI翻译意外爆红的帖子](https://s.weibo.com/weibo?q=%23%E5%9B%A0AI%E7%BF%BB%E8%AF%91%E6%84%8F%E5%A4%96%E7%88%86%E7%BA%A2%E7%9A%84%E5%B8%96%E5%AD%90%23) `159.1K 🔥` `NEW`
1. [彩妆功效越多越值得买吗](https://s.weibo.com/weibo?q=%23%E5%BD%A9%E5%A6%86%E5%8A%9F%E6%95%88%E8%B6%8A%E5%A4%9A%E8%B6%8A%E5%80%BC%E5%BE%97%E4%B9%B0%E5%90%97%23) `158.1K 🔥` `NEW`
1. [养肤粉底是不是智商税 (Is skin nourishing foundation an IQ tax?)](https://s.weibo.com/weibo?q=%23%E5%85%BB%E8%82%A4%E7%B2%89%E5%BA%95%E6%98%AF%E4%B8%8D%E6%98%AF%E6%99%BA%E5%95%86%E7%A8%8E%23) `156.5K 🔥` `NEW`
1. [第三批国补来了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%89%E6%89%B9%E5%9B%BD%E8%A1%A5%E6%9D%A5%E4%BA%86%23) `764.1K 🔥` `+309%`
1. [张凌赫田曦薇 深夜散步糖](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%B7%B1%E5%A4%9C%E6%95%A3%E6%AD%A5%E7%B3%96%23) `736.3K 🔥` `+31%`
1. [狗狗不慎咬伤孩子被卖满眼惊恐](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E4%B8%8D%E6%85%8E%E5%92%AC%E4%BC%A4%E5%AD%A9%E5%AD%90%E8%A2%AB%E5%8D%96%E6%BB%A1%E7%9C%BC%E6%83%8A%E6%81%90%23) `555.5K 🔥` `+36%`
1. [毒纸尿裤涉事品牌](https://s.weibo.com/weibo?q=%23%E6%AF%92%E7%BA%B8%E5%B0%BF%E8%A3%A4%E6%B6%89%E4%BA%8B%E5%93%81%E7%89%8C%23) `392.9K 🔥` `+40%`
1. [吴倩被爸爸打掉牙齿不敢吐出来](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E8%A2%AB%E7%88%B8%E7%88%B8%E6%89%93%E6%8E%89%E7%89%99%E9%BD%BF%E4%B8%8D%E6%95%A2%E5%90%90%E5%87%BA%E6%9D%A5%23) `393.6K 🔥`
1. [两款有毒纸尿裤已下架](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E6%AC%BE%E6%9C%89%E6%AF%92%E7%BA%B8%E5%B0%BF%E8%A3%A4%E5%B7%B2%E4%B8%8B%E6%9E%B6%23) `384.0K 🔥`
1. [小米空调10年免费加氟 (Xiaomi air conditioner offers free fluoride for 10 years)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%A9%BA%E8%B0%8310%E5%B9%B4%E5%85%8D%E8%B4%B9%E5%8A%A0%E6%B0%9F%23) `376.1K 🔥`
1. [美国通胀又爆了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%80%9A%E8%83%80%E5%8F%88%E7%88%86%E4%BA%86%23) `207.9K 🔥`
1. [当我意识到粽子只是一种形状 (When I realized that zongzi is just a shape)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E6%84%8F%E8%AF%86%E5%88%B0%E7%B2%BD%E5%AD%90%E5%8F%AA%E6%98%AF%E4%B8%80%E7%A7%8D%E5%BD%A2%E7%8A%B6%23) `169.6K 🔥`
1. [原来痛经真的和体态有关系](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%97%9B%E7%BB%8F%E7%9C%9F%E7%9A%84%E5%92%8C%E4%BD%93%E6%80%81%E6%9C%89%E5%85%B3%E7%B3%BB%23) `397.4K 🔥` `-32%`
1. [甲酰胺 致癌 (Formamide causes cancer)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%85%B0%E8%83%BA%20%E8%87%B4%E7%99%8C%23) `363.0K 🔥` `-85%`
1. [纸尿裤 有毒 (Diapers are toxic)](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%B0%BF%E8%A3%A4%20%E6%9C%89%E6%AF%92%23) `208.5K 🔥` `-46%`
1. [白鹿一口气发了32张照片](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%80%E5%8F%A3%E6%B0%94%E5%8F%91%E4%BA%8632%E5%BC%A0%E7%85%A7%E7%89%87%23) `193.4K 🔥` `-53%`
1. [男厨师半裸救女客人被质疑后回应 (Male chef responds after being questioned about half-naked rescue of female guest)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8E%A8%E5%B8%88%E5%8D%8A%E8%A3%B8%E6%95%91%E5%A5%B3%E5%AE%A2%E4%BA%BA%E8%A2%AB%E8%B4%A8%E7%96%91%E5%90%8E%E5%9B%9E%E5%BA%94%23) `189.0K 🔥` `-56%`
1. [babycare回应](https://s.weibo.com/weibo?q=%23babycare%E5%9B%9E%E5%BA%94%23) `182.9K 🔥` `-54%`
1. [嘉行辟谣迪丽热巴离开](https://s.weibo.com/weibo?q=%23%E5%98%89%E8%A1%8C%E8%BE%9F%E8%B0%A3%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%A6%BB%E5%BC%80%23) `167.0K 🔥` `-59%`
1. [好奇纸尿裤声明](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A5%87%E7%BA%B8%E5%B0%BF%E8%A3%A4%E5%A3%B0%E6%98%8E%23) `166.0K 🔥` `-57%`
1. [王俊凯工作室干什么都心酸](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%B9%B2%E4%BB%80%E4%B9%88%E9%83%BD%E5%BF%83%E9%85%B8%23) `166.0K 🔥` `-58%`
1. [韩国五大电视台之一的JTBC破产](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%94%E5%A4%A7%E7%94%B5%E8%A7%86%E5%8F%B0%E4%B9%8B%E4%B8%80%E7%9A%84JTBC%E7%A0%B4%E4%BA%A7%23) `159.6K 🔥` `-39%`
1. [孙杨不吵换马頔吵了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E4%B8%8D%E5%90%B5%E6%8D%A2%E9%A9%AC%E9%A0%94%E5%90%B5%E4%BA%86%23) `155.7K 🔥` `-60%`

Updated at 2026-06-18 20:42:38

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
