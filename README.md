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

1. [国庆返程警惕航班理赔电信诈骗](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E8%BF%94%E7%A8%8B%E8%AD%A6%E6%83%95%E8%88%AA%E7%8F%AD%E7%90%86%E8%B5%94%E7%94%B5%E4%BF%A1%E8%AF%88%E9%AA%97%23) `254.0K 🔥` `NEW`
1. [奶奶假牙不见小狗露八颗牙](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E5%81%87%E7%89%99%E4%B8%8D%E8%A7%81%E5%B0%8F%E7%8B%97%E9%9C%B2%E5%85%AB%E9%A2%97%E7%89%99%23) `199.3K 🔥` `NEW`
1. [辽宁挖出的10吨古钱币山](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%8C%96%E5%87%BA%E7%9A%8410%E5%90%A8%E5%8F%A4%E9%92%B1%E5%B8%81%E5%B1%B1%23) `138.6K 🔥` `NEW`
1. [OpenAI发布可交互界面](https://s.weibo.com/weibo?q=%23OpenAI%E5%8F%91%E5%B8%83%E5%8F%AF%E4%BA%A4%E4%BA%92%E7%95%8C%E9%9D%A2%23) `88.6K 🔥` `NEW`
1. [原来睡觉是真的需要睡的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9D%A1%E8%A7%89%E6%98%AF%E7%9C%9F%E7%9A%84%E9%9C%80%E8%A6%81%E7%9D%A1%E7%9A%84%23) `83.1K 🔥` `NEW`
1. [请了3天病假的同事回来了](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E4%BA%863%E5%A4%A9%E7%97%85%E5%81%87%E7%9A%84%E5%90%8C%E4%BA%8B%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `78.7K 🔥` `NEW`
1. [国乒多人晋级八强](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A4%9A%E4%BA%BA%E6%99%8B%E7%BA%A7%E5%85%AB%E5%BC%BA%23) `55.1K 🔥` `NEW`
1. [新疆体制内工作一年辞职回临沂](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E4%BD%93%E5%88%B6%E5%86%85%E5%B7%A5%E4%BD%9C%E4%B8%80%E5%B9%B4%E8%BE%9E%E8%81%8C%E5%9B%9E%E4%B8%B4%E6%B2%82%23) `55.1K 🔥` `NEW`
1. [西尼罗病毒症状](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%B0%BC%E7%BD%97%E7%97%85%E6%AF%92%E7%97%87%E7%8A%B6%23) `55.0K 🔥` `NEW`
1. [孙颖莎伤病恢复仅20天](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BC%A4%E7%97%85%E6%81%A2%E5%A4%8D%E4%BB%8520%E5%A4%A9%23) `55.0K 🔥` `NEW`
1. [李一桐回复黄小蕾](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%9B%9E%E5%A4%8D%E9%BB%84%E5%B0%8F%E8%95%BE%23) `55.0K 🔥` `NEW`
1. [永州市商务局称不清楚女局长被举报](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E5%B7%9E%E5%B8%82%E5%95%86%E5%8A%A1%E5%B1%80%E7%A7%B0%E4%B8%8D%E6%B8%85%E6%A5%9A%E5%A5%B3%E5%B1%80%E9%95%BF%E8%A2%AB%E4%B8%BE%E6%8A%A5%23) `55.0K 🔥` `NEW`
1. [网传李勒优爸爸入狱原因](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%9D%8E%E5%8B%92%E4%BC%98%E7%88%B8%E7%88%B8%E5%85%A5%E7%8B%B1%E5%8E%9F%E5%9B%A0%23) `53.7K 🔥` `NEW`
1. [爱泼斯坦案举报人死亡](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E4%B8%BE%E6%8A%A5%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `49.8K 🔥` `NEW`
1. [半世父母恩一世兄妹情](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E4%B8%96%E7%88%B6%E6%AF%8D%E6%81%A9%E4%B8%80%E4%B8%96%E5%85%84%E5%A6%B9%E6%83%85%23) `49.8K 🔥` `NEW`
1. [温瑞博怒摔毛巾](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A%E6%80%92%E6%91%94%E6%AF%9B%E5%B7%BE%23) `49.8K 🔥` `NEW`
1. [GPT6推出智能交互界面](https://s.weibo.com/weibo?q=%23GPT6%E6%8E%A8%E5%87%BA%E6%99%BA%E8%83%BD%E4%BA%A4%E4%BA%92%E7%95%8C%E9%9D%A2%23) `49.7K 🔥` `NEW`
1. [82岁老姑娘养老规划太有智慧](https://s.weibo.com/weibo?q=%2382%E5%B2%81%E8%80%81%E5%A7%91%E5%A8%98%E5%85%BB%E8%80%81%E8%A7%84%E5%88%92%E5%A4%AA%E6%9C%89%E6%99%BA%E6%85%A7%23) `685.0K 🔥` `+305%`
1. [肺鼠疫可飞沫传播](https://s.weibo.com/weibo?q=%23%E8%82%BA%E9%BC%A0%E7%96%AB%E5%8F%AF%E9%A3%9E%E6%B2%AB%E4%BC%A0%E6%92%AD%23) `483.2K 🔥` `+53%`
1. [假期超21亿人次跨区域流动](https://s.weibo.com/weibo?q=%23%E5%81%87%E6%9C%9F%E8%B6%8521%E4%BA%BF%E4%BA%BA%E6%AC%A1%E8%B7%A8%E5%8C%BA%E5%9F%9F%E6%B5%81%E5%8A%A8%23) `395.6K 🔥` `+91%`
1. [肺鼠疫会人传人](https://s.weibo.com/weibo?q=%23%E8%82%BA%E9%BC%A0%E7%96%AB%E4%BC%9A%E4%BA%BA%E4%BC%A0%E4%BA%BA%23) `266.1K 🔥` `+28%`
1. [纪委回应女局长被举报婚内出轨多人](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%A7%94%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%B1%80%E9%95%BF%E8%A2%AB%E4%B8%BE%E6%8A%A5%E5%A9%9A%E5%86%85%E5%87%BA%E8%BD%A8%E5%A4%9A%E4%BA%BA%23) `260.6K 🔥` `+54%`
1. [女局长被举报婚内出轨多人家属发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%B1%80%E9%95%BF%E8%A2%AB%E4%B8%BE%E6%8A%A5%E5%A9%9A%E5%86%85%E5%87%BA%E8%BD%A8%E5%A4%9A%E4%BA%BA%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `238.5K 🔥` `+99%`
1. [贺峻霖登融媒时代舞台主持实务教材](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%99%BB%E8%9E%8D%E5%AA%92%E6%97%B6%E4%BB%A3%E8%88%9E%E5%8F%B0%E4%B8%BB%E6%8C%81%E5%AE%9E%E5%8A%A1%E6%95%99%E6%9D%90%23) `103.2K 🔥` `+37%`
1. [王楚钦与勒布伦兄弟热聊](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%8E%E5%8B%92%E5%B8%83%E4%BC%A6%E5%85%84%E5%BC%9F%E7%83%AD%E8%81%8A%23) `101.7K 🔥` `+40%`
1. [崔晋称会发声明回应](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%E7%A7%B0%E4%BC%9A%E5%8F%91%E5%A3%B0%E6%98%8E%E5%9B%9E%E5%BA%94%23) `98.2K 🔥` `+54%`
1. [国内金价跌至890元](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E9%87%91%E4%BB%B7%E8%B7%8C%E8%87%B3890%E5%85%83%23) `91.8K 🔥`
1. [女子垃圾桶里捡到一袋染色的5元纸币](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9E%83%E5%9C%BE%E6%A1%B6%E9%87%8C%E6%8D%A1%E5%88%B0%E4%B8%80%E8%A2%8B%E6%9F%93%E8%89%B2%E7%9A%845%E5%85%83%E7%BA%B8%E5%B8%81%23) `74.5K 🔥`
1. [王一博诉陈情令出品方侵权案开庭](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%AF%89%E9%99%88%E6%83%85%E4%BB%A4%E5%87%BA%E5%93%81%E6%96%B9%E4%BE%B5%E6%9D%83%E6%A1%88%E5%BC%80%E5%BA%AD%23) `63.9K 🔥`
1. [王皓王楚钦观战温瑞博莫雷高德比赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%A7%82%E6%88%98%E6%B8%A9%E7%91%9E%E5%8D%9A%E8%8E%AB%E9%9B%B7%E9%AB%98%E5%BE%B7%E6%AF%94%E8%B5%9B%23) `55.0K 🔥`
1. [机场偶遇表志勋和女友去度假](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%9C%BA%E5%81%B6%E9%81%87%E8%A1%A8%E5%BF%97%E5%8B%8B%E5%92%8C%E5%A5%B3%E5%8F%8B%E5%8E%BB%E5%BA%A6%E5%81%87%23) `49.8K 🔥`
1. [原来花千骨当时那么惨啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%8A%B1%E5%8D%83%E9%AA%A8%E5%BD%93%E6%97%B6%E9%82%A3%E4%B9%88%E6%83%A8%E5%95%8A%23) `104.9K 🔥` `-37%`
1. [肺鼠疫症状](https://s.weibo.com/weibo?q=%23%E8%82%BA%E9%BC%A0%E7%96%AB%E7%97%87%E7%8A%B6%23) `104.8K 🔥` `-37%`
1. [崔晋李勒优聊天记录](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%E6%9D%8E%E5%8B%92%E4%BC%98%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `103.7K 🔥` `-48%`
1. [林依晨老公](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E8%80%81%E5%85%AC%23) `103.0K 🔥` `-47%`
1. [俄罗斯不明肺炎会传进来吗](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E4%B8%8D%E6%98%8E%E8%82%BA%E7%82%8E%E4%BC%9A%E4%BC%A0%E8%BF%9B%E6%9D%A5%E5%90%97%23) `102.1K 🔥` `-38%`
1. [赵丽颖 飞天奖](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E9%A3%9E%E5%A4%A9%E5%A5%96%23) `92.3K 🔥` `-43%`
1. [感觉不对劲一定不要回应](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E4%B8%8D%E5%AF%B9%E5%8A%B2%E4%B8%80%E5%AE%9A%E4%B8%8D%E8%A6%81%E5%9B%9E%E5%BA%94%23) `84.6K 🔥` `-28%`
1. [停止主动后关系像没有一样](https://s.weibo.com/weibo?q=%23%E5%81%9C%E6%AD%A2%E4%B8%BB%E5%8A%A8%E5%90%8E%E5%85%B3%E7%B3%BB%E5%83%8F%E6%B2%A1%E6%9C%89%E4%B8%80%E6%A0%B7%23) `81.1K 🔥` `-28%`
1. [李一桐le成断层第一](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90le%E6%88%90%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%23) `69.2K 🔥` `-57%`
1. [警方通报小区楼顶发现可疑骨头](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%B0%8F%E5%8C%BA%E6%A5%BC%E9%A1%B6%E5%8F%91%E7%8E%B0%E5%8F%AF%E7%96%91%E9%AA%A8%E5%A4%B4%23) `63.0K 🔥` `-73%`
1. [赵晴化的这个妆据说要好几万](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%99%B4%E5%8C%96%E7%9A%84%E8%BF%99%E4%B8%AA%E5%A6%86%E6%8D%AE%E8%AF%B4%E8%A6%81%E5%A5%BD%E5%87%A0%E4%B8%87%23) `58.0K 🔥` `-53%`
1. [张馨予和老公何捷在讨论给鱼坐月子](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E5%92%8C%E8%80%81%E5%85%AC%E4%BD%95%E6%8D%B7%E5%9C%A8%E8%AE%A8%E8%AE%BA%E7%BB%99%E9%B1%BC%E5%9D%90%E6%9C%88%E5%AD%90%23) `54.2K 🔥` `-37%`
1. [摔死75岁裁判的摔角手已被捕](https://s.weibo.com/weibo?q=%23%E6%91%94%E6%AD%BB75%E5%B2%81%E8%A3%81%E5%88%A4%E7%9A%84%E6%91%94%E8%A7%92%E6%89%8B%E5%B7%B2%E8%A2%AB%E6%8D%95%23) `52.6K 🔥` `-54%`
1. [兄弟你把她娶了摊都是你的](https://s.weibo.com/weibo?q=%23%E5%85%84%E5%BC%9F%E4%BD%A0%E6%8A%8A%E5%A5%B9%E5%A8%B6%E4%BA%86%E6%91%8A%E9%83%BD%E6%98%AF%E4%BD%A0%E7%9A%84%23) `51.8K 🔥` `-34%`
1. [赵晴4.0](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%99%B44.0%23) `50.6K 🔥` `-50%`
1. [荷兰已有10人感染西尼罗病毒死亡](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%B7%B2%E6%9C%8910%E4%BA%BA%E6%84%9F%E6%9F%93%E8%A5%BF%E5%B0%BC%E7%BD%97%E7%97%85%E6%AF%92%E6%AD%BB%E4%BA%A1%23) `49.8K 🔥` `-30%`
1. [up主叮当猫 女朋友](https://s.weibo.com/weibo?q=%23up%E4%B8%BB%E5%8F%AE%E5%BD%93%E7%8C%AB%20%E5%A5%B3%E6%9C%8B%E5%8F%8B%23) `49.8K 🔥` `-53%`
1. [英达小儿子英如镝谈爸爸对巴图](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%BE%BE%E5%B0%8F%E5%84%BF%E5%AD%90%E8%8B%B1%E5%A6%82%E9%95%9D%E8%B0%88%E7%88%B8%E7%88%B8%E5%AF%B9%E5%B7%B4%E5%9B%BE%23) `49.8K 🔥` `-54%`
1. [俄罗斯肺炎](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E8%82%BA%E7%82%8E%23) `49.8K 🔥` `-35%`

Updated at 2026-10-09 07:06:10

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
