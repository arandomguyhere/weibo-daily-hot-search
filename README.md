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

1. [狼队战胜AG (Wolves beat AG)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E6%88%98%E8%83%9CAG%23) `3.8M 🔥` `NEW`
1. [新一轮强降雨今晚上线](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E8%BD%AE%E5%BC%BA%E9%99%8D%E9%9B%A8%E4%BB%8A%E6%99%9A%E4%B8%8A%E7%BA%BF%23) `1.2M 🔥` `NEW`
1. [狼队夺冠](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%A4%BA%E5%86%A0%23) `746.4K 🔥` `NEW`
1. [于和伟高圆圆东北爱恨情仇](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E5%92%8C%E4%BC%9F%E9%AB%98%E5%9C%86%E5%9C%86%E4%B8%9C%E5%8C%97%E7%88%B1%E6%81%A8%E6%83%85%E4%BB%87%23) `729.9K 🔥` `NEW`
1. [范玮琪没来](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E6%B2%A1%E6%9D%A5%23) `677.6K 🔥` `NEW`
1. [伊能静疑似力挺庾澄庆](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E7%96%91%E4%BC%BC%E5%8A%9B%E6%8C%BA%E5%BA%BE%E6%BE%84%E5%BA%86%23) `665.8K 🔥` `NEW`
1. [窦靖童小时候是王菲的挂件](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%B0%8F%E6%97%B6%E5%80%99%E6%98%AF%E7%8E%8B%E8%8F%B2%E7%9A%84%E6%8C%82%E4%BB%B6%23) `655.6K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `643.0K 🔥` `NEW`
1. [留神峪煤矿给出的图纸与实际不符](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E7%BB%99%E5%87%BA%E7%9A%84%E5%9B%BE%E7%BA%B8%E4%B8%8E%E5%AE%9E%E9%99%85%E4%B8%8D%E7%AC%A6%23) `636.3K 🔥` `NEW`
1. [同一天274人扎堆登顶珠峰破纪录](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%B8%80%E5%A4%A9274%E4%BA%BA%E6%89%8E%E5%A0%86%E7%99%BB%E9%A1%B6%E7%8F%A0%E5%B3%B0%E7%A0%B4%E7%BA%AA%E5%BD%95%23) `633.8K 🔥` `NEW`
1. [老师讲台晕倒学生瞬间冲了上去 (The teacher fainted on the podium and the students rushed up immediately)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E8%AE%B2%E5%8F%B0%E6%99%95%E5%80%92%E5%AD%A6%E7%94%9F%E7%9E%AC%E9%97%B4%E5%86%B2%E4%BA%86%E4%B8%8A%E5%8E%BB%23) `629.1K 🔥` `NEW`
1. [张月好适合野心家](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%A5%BD%E9%80%82%E5%90%88%E9%87%8E%E5%BF%83%E5%AE%B6%23) `627.9K 🔥` `NEW`
1. [王濛短道速滑 也许放弃才能靠近你](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%20%E4%B9%9F%E8%AE%B8%E6%94%BE%E5%BC%83%E6%89%8D%E8%83%BD%E9%9D%A0%E8%BF%91%E4%BD%A0%23) `621.4K 🔥` `NEW`
1. [孙怡 节目组把我当歌手用了吗](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E8%8A%82%E7%9B%AE%E7%BB%84%E6%8A%8A%E6%88%91%E5%BD%93%E6%AD%8C%E6%89%8B%E7%94%A8%E4%BA%86%E5%90%97%23) `616.1K 🔥` `NEW`
1. [留神峪矿工说跑了2小时才出来](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%9F%BF%E5%B7%A5%E8%AF%B4%E8%B7%91%E4%BA%862%E5%B0%8F%E6%97%B6%E6%89%8D%E5%87%BA%E6%9D%A5%23) `602.5K 🔥` `NEW`
1. [浪姐这不是会选歌吗](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%BF%99%E4%B8%8D%E6%98%AF%E4%BC%9A%E9%80%89%E6%AD%8C%E5%90%97%23) `597.7K 🔥` `NEW`
1. [宋亚轩唱值了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%94%B1%E5%80%BC%E4%BA%86%23) `581.6K 🔥` `NEW`
1. [王濛pk萧蔷](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9Bpk%E8%90%A7%E8%94%B7%23) `578.0K 🔥` `NEW`
1. [范丞丞让尤长靖学那英](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%AE%A9%E5%B0%A4%E9%95%BF%E9%9D%96%E5%AD%A6%E9%82%A3%E8%8B%B1%23) `573.9K 🔥` `NEW`
1. [萧蔷开口跪](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E5%BC%80%E5%8F%A3%E8%B7%AA%23) `571.4K 🔥` `NEW`
1. [十万级智能纯电轿跑新高度 (A new level of 100,000-level smart pure electric coupe)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%87%E7%BA%A7%E6%99%BA%E8%83%BD%E7%BA%AF%E7%94%B5%E8%BD%BF%E8%B7%91%E6%96%B0%E9%AB%98%E5%BA%A6%23) `554.3K 🔥` `NEW`
1. [红旗金葵花携国宝非遗绽放蓉城](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%97%97%E9%87%91%E8%91%B5%E8%8A%B1%E6%90%BA%E5%9B%BD%E5%AE%9D%E9%9D%9E%E9%81%97%E7%BB%BD%E6%94%BE%E8%93%89%E5%9F%8E%23) `550.7K 🔥` `NEW`
1. [张月选了安崎](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%80%89%E4%BA%86%E5%AE%89%E5%B4%8E%23) `547.4K 🔥` `NEW`
1. [东北超](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E8%B6%85%23) `545.2K 🔥` `NEW`
1. [成龙是有什么把柄在吴彤手上吗](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%BE%99%E6%98%AF%E6%9C%89%E4%BB%80%E4%B9%88%E6%8A%8A%E6%9F%84%E5%9C%A8%E5%90%B4%E5%BD%A4%E6%89%8B%E4%B8%8A%E5%90%97%23) `537.5K 🔥` `NEW`
1. [浪姐直播 (Sister Lang live broadcast)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `1.9M 🔥` `+232%`
1. [沈月工作室 你仅仅是沈月就很好](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E4%BD%A0%E4%BB%85%E4%BB%85%E6%98%AF%E6%B2%88%E6%9C%88%E5%B0%B1%E5%BE%88%E5%A5%BD%23) `1.1M 🔥` `+144%`
1. [不上班靠一对善良的夫妇救济](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%B8%8A%E7%8F%AD%E9%9D%A0%E4%B8%80%E5%AF%B9%E5%96%84%E8%89%AF%E7%9A%84%E5%A4%AB%E5%A6%87%E6%95%91%E6%B5%8E%23) `676.3K 🔥` `+45%`
1. [山西留神峪煤矿内部画面 (Interior picture of Shanxi Liushenyu Coal Mine)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E5%86%85%E9%83%A8%E7%94%BB%E9%9D%A2%23) `671.9K 🔥` `+22%`
1. [原来吃完虾不能马上运动 (It turns out that you can’t exercise immediately after eating shrimp.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%90%83%E5%AE%8C%E8%99%BE%E4%B8%8D%E8%83%BD%E9%A9%AC%E4%B8%8A%E8%BF%90%E5%8A%A8%23) `669.6K 🔥` `+44%`
1. [王鹤棣 拆cp](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E6%8B%86cp%23) `664.0K 🔥` `+45%`
1. [AG对战狼队 (AG vs. Wolves)](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `658.6K 🔥` `+47%`
1. [棣月系超话头像变黑了](https://s.weibo.com/weibo?q=%23%E6%A3%A3%E6%9C%88%E7%B3%BB%E8%B6%85%E8%AF%9D%E5%A4%B4%E5%83%8F%E5%8F%98%E9%BB%91%E4%BA%86%23) `652.5K 🔥` `+44%`
1. [女子住院被朋友殴打昏迷数天后死亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%99%A2%E8%A2%AB%E6%9C%8B%E5%8F%8B%E6%AE%B4%E6%89%93%E6%98%8F%E8%BF%B7%E6%95%B0%E5%A4%A9%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `649.9K 🔥` `+43%`
1. [AI光算力第一股上市首日暴涨380% (The first AI optical computing power stock surged 380% on its first day of listing)](https://s.weibo.com/weibo?q=%23AI%E5%85%89%E7%AE%97%E5%8A%9B%E7%AC%AC%E4%B8%80%E8%82%A1%E4%B8%8A%E5%B8%82%E9%A6%96%E6%97%A5%E6%9A%B4%E6%B6%A8380%25%23) `647.4K 🔥` `+54%`
1. [沈月向王鹤棣道歉 (Shen Yue apologized to Wang Hedi)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%90%91%E7%8E%8B%E9%B9%A4%E6%A3%A3%E9%81%93%E6%AD%89%23) `641.0K 🔥` `+44%`
1. [山西煤矿爆炸点附近出现积水 (Water accumulates near Shanxi coal mine explosion site)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E7%88%86%E7%82%B8%E7%82%B9%E9%99%84%E8%BF%91%E5%87%BA%E7%8E%B0%E7%A7%AF%E6%B0%B4%23) `611.8K 🔥` `+39%`
1. [iPhone20渲染视频 (iPhone20 rendering video)](https://s.weibo.com/weibo?q=%23iPhone20%E6%B8%B2%E6%9F%93%E8%A7%86%E9%A2%91%23) `611.3K 🔥` `+40%`
1. [魏晨带儿子逛超市](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E5%B8%A6%E5%84%BF%E5%AD%90%E9%80%9B%E8%B6%85%E5%B8%82%23) `605.5K 🔥` `+39%`
1. [易烊千玺给王源演唱会送花篮了](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%BB%99%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%81%E8%8A%B1%E7%AF%AE%E4%BA%86%23) `598.5K 🔥` `+35%`
1. [男子忘记池里有鱼一年后瘦成蝌蚪](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BF%98%E8%AE%B0%E6%B1%A0%E9%87%8C%E6%9C%89%E9%B1%BC%E4%B8%80%E5%B9%B4%E5%90%8E%E7%98%A6%E6%88%90%E8%9D%8C%E8%9A%AA%23) `594.7K 🔥` `+44%`
1. [庾澄庆格局](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E6%A0%BC%E5%B1%80%23) `591.4K 🔥` `+35%`
1. [丁程鑫误入巨人国 (Ding Chengxin accidentally entered the Giant Kingdom)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%AF%AF%E5%85%A5%E5%B7%A8%E4%BA%BA%E5%9B%BD%23) `587.0K 🔥` `+36%`
1. [一诺射手开团](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%B0%84%E6%89%8B%E5%BC%80%E5%9B%A2%23) `584.5K 🔥` `+26%`
1. [孕妻脑梗变3岁丈夫900多天不离不弃](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%BB%E8%84%91%E6%A2%97%E5%8F%983%E5%B2%81%E4%B8%88%E5%A4%AB900%E5%A4%9A%E5%A4%A9%E4%B8%8D%E7%A6%BB%E4%B8%8D%E5%BC%83%23) `567.0K 🔥` `+38%`
1. [ally打肉毒导致脸部僵硬](https://s.weibo.com/weibo?q=%23ally%E6%89%93%E8%82%89%E6%AF%92%E5%AF%BC%E8%87%B4%E8%84%B8%E9%83%A8%E5%83%B5%E7%A1%AC%23) `562.0K 🔥` `+32%`
1. [蒋毅老婆起诉赵樱子](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AF%85%E8%80%81%E5%A9%86%E8%B5%B7%E8%AF%89%E8%B5%B5%E6%A8%B1%E5%AD%90%23) `558.6K 🔥` `+34%`
1. [感情里有一个最微妙的悖论](https://s.weibo.com/weibo?q=%23%E6%84%9F%E6%83%85%E9%87%8C%E6%9C%89%E4%B8%80%E4%B8%AA%E6%9C%80%E5%BE%AE%E5%A6%99%E7%9A%84%E6%82%96%E8%AE%BA%23) `558.1K 🔥` `+29%`
1. [杨紫玉兰花开君再来杀青合照 (Yang Zi and Magnolia are blooming and you are back for a group photo)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%8E%89%E5%85%B0%E8%8A%B1%E5%BC%80%E5%90%9B%E5%86%8D%E6%9D%A5%E6%9D%80%E9%9D%92%E5%90%88%E7%85%A7%23) `540.6K 🔥` `+32%`
1. [山西事故煤矿矿工晕倒一个多小时](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%BA%8B%E6%95%85%E7%85%A4%E7%9F%BF%E7%9F%BF%E5%B7%A5%E6%99%95%E5%80%92%E4%B8%80%E4%B8%AA%E5%A4%9A%E5%B0%8F%E6%97%B6%23) `620.6K 🔥`
1. [山西煤矿事故已致90人死亡 (Shanxi coal mine accident kills 90 people)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E5%B7%B2%E8%87%B490%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `1.0M 🔥` `-36%`

Updated at 2026-05-23 21:57:54

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
