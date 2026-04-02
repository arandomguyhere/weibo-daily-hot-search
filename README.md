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

1. [女子104000元买80g金条店员报警 (Woman bought 80g gold bar for 104,000 yuan and store clerk called the police)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90104000%E5%85%83%E4%B9%B080g%E9%87%91%E6%9D%A1%E5%BA%97%E5%91%98%E6%8A%A5%E8%AD%A6%23) `866.0K 🔥` `NEW`
1. [世界孤独症日](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E5%AD%A4%E7%8B%AC%E7%97%87%E6%97%A5%23) `791.2K 🔥` `NEW`
1. [被时代淘汰的水果](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%97%B6%E4%BB%A3%E6%B7%98%E6%B1%B0%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `785.8K 🔥` `NEW`
1. [田曦薇FILAFUSION潮流代言人](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87FILAFUSION%E6%BD%AE%E6%B5%81%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `227.3K 🔥` `NEW`
1. [中方回应特朗普鼓动各国抢石油](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E9%BC%93%E5%8A%A8%E5%90%84%E5%9B%BD%E6%8A%A2%E7%9F%B3%E6%B2%B9%23) `180.2K 🔥` `NEW`
1. [女子哭诉3个兄妹不照顾92岁母亲](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%93%AD%E8%AF%893%E4%B8%AA%E5%85%84%E5%A6%B9%E4%B8%8D%E7%85%A7%E9%A1%BE92%E5%B2%81%E6%AF%8D%E4%BA%B2%23) `113.2K 🔥` `NEW`
1. [美军主力机型损失惨重](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E4%B8%BB%E5%8A%9B%E6%9C%BA%E5%9E%8B%E6%8D%9F%E5%A4%B1%E6%83%A8%E9%87%8D%23) `111.1K 🔥` `NEW`
1. [多名带货博主宣布全额退款](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E5%B8%A6%E8%B4%A7%E5%8D%9A%E4%B8%BB%E5%AE%A3%E5%B8%83%E5%85%A8%E9%A2%9D%E9%80%80%E6%AC%BE%23) `109.8K 🔥` `NEW`
1. [山西一饭店发现3人死亡](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%B8%80%E9%A5%AD%E5%BA%97%E5%8F%91%E7%8E%B03%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `105.8K 🔥` `NEW`
1. [美国为何只绕月不登月](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%BA%E4%BD%95%E5%8F%AA%E7%BB%95%E6%9C%88%E4%B8%8D%E7%99%BB%E6%9C%88%23) `101.1K 🔥` `NEW`
1. [比亚迪销量 (BYD sales)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E9%94%80%E9%87%8F%23) `97.4K 🔥` `NEW`
1. [华谊兄弟34个银行账号被冻结](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%B0%8A%E5%85%84%E5%BC%9F34%E4%B8%AA%E9%93%B6%E8%A1%8C%E8%B4%A6%E5%8F%B7%E8%A2%AB%E5%86%BB%E7%BB%93%23) `97.1K 🔥` `NEW`
1. [张雪机车夺冠车手发声](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E8%BD%A6%E6%89%8B%E5%8F%91%E5%A3%B0%23) `89.0K 🔥` `NEW`
1. [与辉同行回应带货产品被曝假进口](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E8%BE%89%E5%90%8C%E8%A1%8C%E5%9B%9E%E5%BA%94%E5%B8%A6%E8%B4%A7%E4%BA%A7%E5%93%81%E8%A2%AB%E6%9B%9D%E5%81%87%E8%BF%9B%E5%8F%A3%23) `89.0K 🔥` `NEW`
1. [熬夜在身上留下的明显反应](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E5%9C%A8%E8%BA%AB%E4%B8%8A%E7%95%99%E4%B8%8B%E7%9A%84%E6%98%8E%E6%98%BE%E5%8F%8D%E5%BA%94%23) `85.4K 🔥` `NEW`
1. [王楚钦说香港总决赛受伤呼吸都疼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E9%A6%99%E6%B8%AF%E6%80%BB%E5%86%B3%E8%B5%9B%E5%8F%97%E4%BC%A4%E5%91%BC%E5%90%B8%E9%83%BD%E7%96%BC%23) `81.7K 🔥` `NEW`
1. [师傅称打算用张雪的820做航空发动机](https://s.weibo.com/weibo?q=%23%E5%B8%88%E5%82%85%E7%A7%B0%E6%89%93%E7%AE%97%E7%94%A8%E5%BC%A0%E9%9B%AA%E7%9A%84820%E5%81%9A%E8%88%AA%E7%A9%BA%E5%8F%91%E5%8A%A8%E6%9C%BA%23) `80.8K 🔥` `NEW`
1. [糯米藕](https://s.weibo.com/weibo?q=%23%E7%B3%AF%E7%B1%B3%E8%97%95%23) `80.2K 🔥` `NEW`
1. [带娃一个月终于懂了妈妈的月子病](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E5%A8%83%E4%B8%80%E4%B8%AA%E6%9C%88%E7%BB%88%E4%BA%8E%E6%87%82%E4%BA%86%E5%A6%88%E5%A6%88%E7%9A%84%E6%9C%88%E5%AD%90%E7%97%85%23) `79.7K 🔥` `NEW`
1. [警方通报司机猥亵后排女乘客](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8F%B8%E6%9C%BA%E7%8C%A5%E4%BA%B5%E5%90%8E%E6%8E%92%E5%A5%B3%E4%B9%98%E5%AE%A2%23) `78.6K 🔥` `NEW`
1. [新疆吐鲁番4.7级地震 (4.7 magnitude earthquake in Turpan, Xinjiang)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E5%90%90%E9%B2%81%E7%95%AA4.7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `73.1K 🔥` `NEW`
1. [某国领馆人员违规搜集我农作物情况](https://s.weibo.com/weibo?q=%23%E6%9F%90%E5%9B%BD%E9%A2%86%E9%A6%86%E4%BA%BA%E5%91%98%E8%BF%9D%E8%A7%84%E6%90%9C%E9%9B%86%E6%88%91%E5%86%9C%E4%BD%9C%E7%89%A9%E6%83%85%E5%86%B5%23) `69.3K 🔥` `NEW`
1. [泰国女星遭救援人员性侵拍裸照](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%A5%B3%E6%98%9F%E9%81%AD%E6%95%91%E6%8F%B4%E4%BA%BA%E5%91%98%E6%80%A7%E4%BE%B5%E6%8B%8D%E8%A3%B8%E7%85%A7%23) `1.5M 🔥` `+136%`
1. [又是赏花好时节 (It’s a good time to enjoy flowers again)](https://s.weibo.com/weibo?q=%23%E5%8F%88%E6%98%AF%E8%B5%8F%E8%8A%B1%E5%A5%BD%E6%97%B6%E8%8A%82%23) `804.6K 🔥` `+26%`
1. [周杰伦白西装昆凌黑羽绒服](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%99%BD%E8%A5%BF%E8%A3%85%E6%98%86%E5%87%8C%E9%BB%91%E7%BE%BD%E7%BB%92%E6%9C%8D%23) `105.6K 🔥` `+22%`
1. [黄杨钿甜新剧被鞭刑梦回小楚乔](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%9D%A8%E9%92%BF%E7%94%9C%E6%96%B0%E5%89%A7%E8%A2%AB%E9%9E%AD%E5%88%91%E6%A2%A6%E5%9B%9E%E5%B0%8F%E6%A5%9A%E4%B9%94%23) `85.2K 🔥` `+28%`
1. [优思益营销策划公司被立案调查 (Yousiyi Marketing Planning Company was placed under investigation)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E8%90%A5%E9%94%80%E7%AD%96%E5%88%92%E5%85%AC%E5%8F%B8%E8%A2%AB%E7%AB%8B%E6%A1%88%E8%B0%83%E6%9F%A5%23) `231.3K 🔥`
1. [导师和导员都沉默了](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E5%B8%88%E5%92%8C%E5%AF%BC%E5%91%98%E9%83%BD%E6%B2%89%E9%BB%98%E4%BA%86%23) `228.6K 🔥`
1. [男孩捡50g金条咬了一口竟是真的](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E6%8D%A150g%E9%87%91%E6%9D%A1%E5%92%AC%E4%BA%86%E4%B8%80%E5%8F%A3%E7%AB%9F%E6%98%AF%E7%9C%9F%E7%9A%84%23) `151.7K 🔥`
1. [比papi更像苏菲玛索的人找到了](https://s.weibo.com/weibo?q=%23%E6%AF%94papi%E6%9B%B4%E5%83%8F%E8%8B%8F%E8%8F%B2%E7%8E%9B%E7%B4%A2%E7%9A%84%E4%BA%BA%E6%89%BE%E5%88%B0%E4%BA%86%23) `109.3K 🔥`
1. [张凌赫科普自闭症不是心理疾病](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%A7%91%E6%99%AE%E8%87%AA%E9%97%AD%E7%97%87%E4%B8%8D%E6%98%AF%E5%BF%83%E7%90%86%E7%96%BE%E7%97%85%23) `93.3K 🔥`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `92.5K 🔥`
1. [口蹄疫 (foot and mouth disease)](https://s.weibo.com/weibo?q=%23%E5%8F%A3%E8%B9%84%E7%96%AB%23) `74.7K 🔥`
1. [张杰回应张凌赫送花篮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%81%E8%8A%B1%E7%AF%AE%23) `224.1K 🔥` `-44%`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `214.1K 🔥` `-81%`
1. [美国一婴儿光天化日在街头被枪杀](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E5%A9%B4%E5%84%BF%E5%85%89%E5%A4%A9%E5%8C%96%E6%97%A5%E5%9C%A8%E8%A1%97%E5%A4%B4%E8%A2%AB%E6%9E%AA%E6%9D%80%23) `213.4K 🔥` `-74%`
1. [美国不管霍尔木兹海峡了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%8D%E7%AE%A1%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E4%BA%86%23) `167.6K 🔥` `-21%`
1. [李若彤发布致歉声明 (Li Ruotong issued an apology statement)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8B%A5%E5%BD%A4%E5%8F%91%E5%B8%83%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `164.2K 🔥` `-21%`
1. [阿花花酱 优思益 (Ahuahuajiang Yousiyi)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%8A%B1%E8%8A%B1%E9%85%B1%20%E4%BC%98%E6%80%9D%E7%9B%8A%23) `153.5K 🔥` `-28%`
1. [张雪师父牙哥发声](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B8%88%E7%88%B6%E7%89%99%E5%93%A5%E5%8F%91%E5%A3%B0%23) `146.1K 🔥` `-51%`
1. [董宇辉曾说产品上播10天前有人试吃](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E6%9B%BE%E8%AF%B4%E4%BA%A7%E5%93%81%E4%B8%8A%E6%92%AD10%E5%A4%A9%E5%89%8D%E6%9C%89%E4%BA%BA%E8%AF%95%E5%90%83%23) `137.7K 🔥` `-22%`
1. [刘晓艳网课现场没有学生一个人聊嗨了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E8%89%B3%E7%BD%91%E8%AF%BE%E7%8E%B0%E5%9C%BA%E6%B2%A1%E6%9C%89%E5%AD%A6%E7%94%9F%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%81%8A%E5%97%A8%E4%BA%86%23) `134.9K 🔥` `-54%`
1. [胡彦斌连夜关闭了人脸支付](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E8%BF%9E%E5%A4%9C%E5%85%B3%E9%97%AD%E4%BA%86%E4%BA%BA%E8%84%B8%E6%94%AF%E4%BB%98%23) `106.1K 🔥` `-50%`
1. [银行回应老人存10万变7万](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%9B%9E%E5%BA%94%E8%80%81%E4%BA%BA%E5%AD%9810%E4%B8%87%E5%8F%987%E4%B8%87%23) `102.5K 🔥` `-52%`
1. [乘风一口气官宣34位送考人](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E4%B8%80%E5%8F%A3%E6%B0%94%E5%AE%98%E5%AE%A334%E4%BD%8D%E9%80%81%E8%80%83%E4%BA%BA%23) `100.8K 🔥` `-42%`
1. [伊朗拒绝谈判的真实底牌 (Iran’s real trump card for refusing to negotiate)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8B%92%E7%BB%9D%E8%B0%88%E5%88%A4%E7%9A%84%E7%9C%9F%E5%AE%9E%E5%BA%95%E7%89%8C%23) `93.8K 🔥` `-47%`
1. [主播陆续回应优思益售后](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E9%99%86%E7%BB%AD%E5%9B%9E%E5%BA%94%E4%BC%98%E6%80%9D%E7%9B%8A%E5%94%AE%E5%90%8E%23) `93.4K 🔥` `-30%`
1. [官方通报天湖医院解聘全体职工](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A4%A9%E6%B9%96%E5%8C%BB%E9%99%A2%E8%A7%A3%E8%81%98%E5%85%A8%E4%BD%93%E8%81%8C%E5%B7%A5%23) `80.1K 🔥` `-37%`
1. [刘亦菲老钱风大片 (Liu Yifei old money style blockbusters)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E8%80%81%E9%92%B1%E9%A3%8E%E5%A4%A7%E7%89%87%23) `72.5K 🔥` `-41%`
1. [许昕说国家队大门永远给所有人打开](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E8%AF%B4%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%A4%A7%E9%97%A8%E6%B0%B8%E8%BF%9C%E7%BB%99%E6%89%80%E6%9C%89%E4%BA%BA%E6%89%93%E5%BC%80%23) `72.3K 🔥` `-79%`

Updated at 2026-04-02 16:40:04

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
