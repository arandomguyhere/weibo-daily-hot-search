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

1. [奥利奥品牌代言人太炸了 (Oreo brand spokesperson is so popular)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%A5%A5%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%A4%AA%E7%82%B8%E4%BA%86%23) `104.5K 🔥` `NEW`
1. [问界M6](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM6%23) `62.4K 🔥` `NEW`
1. [崔丽丽受访前当场躯体化发作](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E5%8F%97%E8%AE%BF%E5%89%8D%E5%BD%93%E5%9C%BA%E8%BA%AF%E4%BD%93%E5%8C%96%E5%8F%91%E4%BD%9C%23) `62.4K 🔥` `NEW`
1. [中国交警雨天执勤的视频在国外火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%A4%E8%AD%A6%E9%9B%A8%E5%A4%A9%E6%89%A7%E5%8B%A4%E7%9A%84%E8%A7%86%E9%A2%91%E5%9C%A8%E5%9B%BD%E5%A4%96%E7%81%AB%E4%BA%86%23) `62.4K 🔥` `NEW`
1. [原来前额叶成熟是这样的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%89%8D%E9%A2%9D%E5%8F%B6%E6%88%90%E7%86%9F%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `129.7K 🔥`
1. [谁发明的厕所感应冲水](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%8F%91%E6%98%8E%E7%9A%84%E5%8E%95%E6%89%80%E6%84%9F%E5%BA%94%E5%86%B2%E6%B0%B4%23) `289.5K 🔥` `-35%`
1. [尚界Z7 (Shangjie Z7)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%23) `156.6K 🔥` `-60%`
1. [中国在月球留下了新的名字](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9C%A8%E6%9C%88%E7%90%83%E7%95%99%E4%B8%8B%E4%BA%86%E6%96%B0%E7%9A%84%E5%90%8D%E5%AD%97%23) `132.7K 🔥` `-48%`
1. [智界V9预售价39.98万起 (The pre-order price of Zhijie V9 starts from 399,800)](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CV9%E9%A2%84%E5%94%AE%E4%BB%B739.98%E4%B8%87%E8%B5%B7%23) `132.5K 🔥` `-48%`
1. [周杰伦王俊凯 中餐厅](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E4%B8%AD%E9%A4%90%E5%8E%85%23) `132.2K 🔥` `-48%`
1. [歌手2026](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `120.0K 🔥` `-53%`
1. [华晨宇演唱会延期](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BB%B6%E6%9C%9F%23) `100.6K 🔥` `-50%`
1. [朝鲜发声要求日本向中国道歉 (North Korea calls for Japan to apologize to China)](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E5%8F%91%E5%A3%B0%E8%A6%81%E6%B1%82%E6%97%A5%E6%9C%AC%E5%90%91%E4%B8%AD%E5%9B%BD%E9%81%93%E6%AD%89%23) `94.7K 🔥` `-41%`
1. [问界M9价格 (Ask the world about M9 price)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E4%BB%B7%E6%A0%BC%23) `78.0K 🔥` `-61%`
1. [乒乓球在美国火起来了 (Table tennis is popular in the United States)](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E5%9C%A8%E7%BE%8E%E5%9B%BD%E7%81%AB%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `77.7K 🔥` `-51%`
1. [警方回应女子脚踹保安被反扇耳光](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E8%84%9A%E8%B8%B9%E4%BF%9D%E5%AE%89%E8%A2%AB%E5%8F%8D%E6%89%87%E8%80%B3%E5%85%89%23) `76.3K 🔥` `-37%`
1. [全球最大避孕套生产商警告](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%9C%80%E5%A4%A7%E9%81%BF%E5%AD%95%E5%A5%97%E7%94%9F%E4%BA%A7%E5%95%86%E8%AD%A6%E5%91%8A%23) `75.7K 🔥` `-52%`
1. [儿子因父亲逼自己分手失联16年](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%9B%A0%E7%88%B6%E4%BA%B2%E9%80%BC%E8%87%AA%E5%B7%B1%E5%88%86%E6%89%8B%E5%A4%B1%E8%81%9416%E5%B9%B4%23) `75.1K 🔥` `-52%`
1. [女生受邀去泰国泼水节被转卖电诈园](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%8F%97%E9%82%80%E5%8E%BB%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82%E8%A2%AB%E8%BD%AC%E5%8D%96%E7%94%B5%E8%AF%88%E5%9B%AD%23) `74.5K 🔥` `-51%`
1. [考研生人均1元拼网课被判共同赔4万](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E7%94%9F%E4%BA%BA%E5%9D%871%E5%85%83%E6%8B%BC%E7%BD%91%E8%AF%BE%E8%A2%AB%E5%88%A4%E5%85%B1%E5%90%8C%E8%B5%944%E4%B8%87%23) `73.3K 🔥` `-52%`
1. [日本人称手机设置为中文感觉很清爽](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E7%A7%B0%E6%89%8B%E6%9C%BA%E8%AE%BE%E7%BD%AE%E4%B8%BA%E4%B8%AD%E6%96%87%E6%84%9F%E8%A7%89%E5%BE%88%E6%B8%85%E7%88%BD%23) `72.7K 🔥` `-61%`
1. [侯明昊 歌手2026](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%20%E6%AD%8C%E6%89%8B2026%23) `71.9K 🔥` `-53%`
1. [肯德基酱料正式收费](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E9%85%B1%E6%96%99%E6%AD%A3%E5%BC%8F%E6%94%B6%E8%B4%B9%23) `70.7K 🔥` `-53%`
1. [尚界Z7大定](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%E5%A4%A7%E5%AE%9A%23) `70.3K 🔥` `-50%`
1. [不要在上班的时候说分手 (Don't break up at work)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%9C%A8%E4%B8%8A%E7%8F%AD%E7%9A%84%E6%97%B6%E5%80%99%E8%AF%B4%E5%88%86%E6%89%8B%23) `69.8K 🔥` `-43%`
1. [崔丽丽不再穿性侵时衣服出庭 (Cui Lili no longer wears her sexual assault clothes in court)](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E4%B8%8D%E5%86%8D%E7%A9%BF%E6%80%A7%E4%BE%B5%E6%97%B6%E8%A1%A3%E6%9C%8D%E5%87%BA%E5%BA%AD%23) `68.0K 🔥` `-44%`
1. [丈夫称崔丽丽遭性侵后判若两人 (Husband says Cui Lili is completely different after being sexually assaulted)](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E7%A7%B0%E5%B4%94%E4%B8%BD%E4%B8%BD%E9%81%AD%E6%80%A7%E4%BE%B5%E5%90%8E%E5%88%A4%E8%8B%A5%E4%B8%A4%E4%BA%BA%23) `67.2K 🔥` `-44%`
1. [崔丽丽躯体化反应很严重](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E8%BA%AF%E4%BD%93%E5%8C%96%E5%8F%8D%E5%BA%94%E5%BE%88%E4%B8%A5%E9%87%8D%23) `66.0K 🔥` `-45%`
1. [湖南卫视再次恭喜自己 (Hunan Satellite TV congratulates itself again)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E5%86%8D%E6%AC%A1%E6%81%AD%E5%96%9C%E8%87%AA%E5%B7%B1%23) `64.8K 🔥` `-46%`
1. [慈母多败咪](https://s.weibo.com/weibo?q=%23%E6%85%88%E6%AF%8D%E5%A4%9A%E8%B4%A5%E5%92%AA%23) `63.2K 🔥` `-47%`
1. [巴拿马对持中国护照人员加强审查](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%BF%E9%A9%AC%E5%AF%B9%E6%8C%81%E4%B8%AD%E5%9B%BD%E6%8A%A4%E7%85%A7%E4%BA%BA%E5%91%98%E5%8A%A0%E5%BC%BA%E5%AE%A1%E6%9F%A5%23) `62.4K 🔥` `-48%`
1. [最顶级的中式审美](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%A1%B6%E7%BA%A7%E7%9A%84%E4%B8%AD%E5%BC%8F%E5%AE%A1%E7%BE%8E%23) `62.4K 🔥` `-48%`
1. [儿童近视神药阿托品火爆](https://s.weibo.com/weibo?q=%23%E5%84%BF%E7%AB%A5%E8%BF%91%E8%A7%86%E7%A5%9E%E8%8D%AF%E9%98%BF%E6%89%98%E5%93%81%E7%81%AB%E7%88%86%23) `62.4K 🔥` `-58%`
1. [CNN报道中国博主嘲讽美国信用](https://s.weibo.com/weibo?q=%23CNN%E6%8A%A5%E9%81%93%E4%B8%AD%E5%9B%BD%E5%8D%9A%E4%B8%BB%E5%98%B2%E8%AE%BD%E7%BE%8E%E5%9B%BD%E4%BF%A1%E7%94%A8%23) `62.4K 🔥` `-48%`
1. [6种常见癌症的早期信号](https://s.weibo.com/weibo?q=%236%E7%A7%8D%E5%B8%B8%E8%A7%81%E7%99%8C%E7%97%87%E7%9A%84%E6%97%A9%E6%9C%9F%E4%BF%A1%E5%8F%B7%23) `62.4K 🔥` `-48%`
1. [中国第二条跨省地铁](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%AC%AC%E4%BA%8C%E6%9D%A1%E8%B7%A8%E7%9C%81%E5%9C%B0%E9%93%81%23) `62.4K 🔥` `-48%`
1. [尚界Z7大定27分钟破12000台](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%E5%A4%A7%E5%AE%9A27%E5%88%86%E9%92%9F%E7%A0%B412000%E5%8F%B0%23) `62.4K 🔥` `-48%`
1. [内娱大爆的现偶 (Domestic entertainment hot couple)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%A4%A7%E7%88%86%E7%9A%84%E7%8E%B0%E5%81%B6%23) `62.4K 🔥` `-48%`
1. [现货黄金](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `62.4K 🔥` `-48%`
1. [日本黑帮大哥金盆洗手考入顶尖名校 (Japanese gangster brother Jin Pen washes his hands and is admitted to a top prestigious school)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%BB%91%E5%B8%AE%E5%A4%A7%E5%93%A5%E9%87%91%E7%9B%86%E6%B4%97%E6%89%8B%E8%80%83%E5%85%A5%E9%A1%B6%E5%B0%96%E5%90%8D%E6%A0%A1%23) `62.4K 🔥` `-48%`
1. [月薪10w带货主播面试全过程](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA10w%E5%B8%A6%E8%B4%A7%E4%B8%BB%E6%92%AD%E9%9D%A2%E8%AF%95%E5%85%A8%E8%BF%87%E7%A8%8B%23) `62.4K 🔥` `-48%`
1. [新世代宝马](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%96%E4%BB%A3%E5%AE%9D%E9%A9%AC%23) `62.4K 🔥` `-48%`
1. [孟佳唱跳版心愿便利贴](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E4%BD%B3%E5%94%B1%E8%B7%B3%E7%89%88%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%23) `62.4K 🔥` `-48%`
1. [体检无异常发现却是癌症晚期](https://s.weibo.com/weibo?q=%23%E4%BD%93%E6%A3%80%E6%97%A0%E5%BC%82%E5%B8%B8%E5%8F%91%E7%8E%B0%E5%8D%B4%E6%98%AF%E7%99%8C%E7%97%87%E6%99%9A%E6%9C%9F%23) `62.4K 🔥` `-48%`
1. [再痛也只能挂儿科](https://s.weibo.com/weibo?q=%23%E5%86%8D%E7%97%9B%E4%B9%9F%E5%8F%AA%E8%83%BD%E6%8C%82%E5%84%BF%E7%A7%91%23) `62.4K 🔥` `-48%`
1. [杨紫扛剧能力](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%89%9B%E5%89%A7%E8%83%BD%E5%8A%9B%23) `62.4K 🔥` `-48%`
1. [全国首例性侵认定工伤案明日开庭](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E4%BE%8B%E6%80%A7%E4%BE%B5%E8%AE%A4%E5%AE%9A%E5%B7%A5%E4%BC%A4%E6%A1%88%E6%98%8E%E6%97%A5%E5%BC%80%E5%BA%AD%23) `62.4K 🔥` `-48%`
1. [是谁把14岁女孩拱手交给魔鬼 (Who handed over the 14-year-old girl to the devil?)](https://s.weibo.com/weibo?q=%23%E6%98%AF%E8%B0%81%E6%8A%8A14%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%8B%B1%E6%89%8B%E4%BA%A4%E7%BB%99%E9%AD%94%E9%AC%BC%23) `62.4K 🔥` `-48%`
1. [董璇又上恋综给张维伊上压力了](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%8F%88%E4%B8%8A%E6%81%8B%E7%BB%BC%E7%BB%99%E5%BC%A0%E7%BB%B4%E4%BC%8A%E4%B8%8A%E5%8E%8B%E5%8A%9B%E4%BA%86%23) `62.4K 🔥` `-48%`
1. [问界M6起售价25.98万元 (Wenjie M6 starts at 259,800 yuan)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM6%E8%B5%B7%E5%94%AE%E4%BB%B725.98%E4%B8%87%E5%85%83%23) `62.4K 🔥` `-48%`
1. [何刚下订智界V9](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%88%9A%E4%B8%8B%E8%AE%A2%E6%99%BA%E7%95%8CV9%23) `62.4K 🔥` `-48%`
1. [朴信惠眼睛 断崖式衰老](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E4%BF%A1%E6%83%A0%E7%9C%BC%E7%9D%9B%20%E6%96%AD%E5%B4%96%E5%BC%8F%E8%A1%B0%E8%80%81%23) `62.4K 🔥` `-48%`

Updated at 2026-04-23 02:51:50

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
