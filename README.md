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

1. [优思益营销策划公司被立案调查 (Yousiyi Marketing Planning Company was placed under investigation)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E8%90%A5%E9%94%80%E7%AD%96%E5%88%92%E5%85%AC%E5%8F%B8%E8%A2%AB%E7%AB%8B%E6%A1%88%E8%B0%83%E6%9F%A5%23) `856.2K 🔥` `NEW`
1. [天宫画展再上新](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%AB%E7%94%BB%E5%B1%95%E5%86%8D%E4%B8%8A%E6%96%B0%23) `641.1K 🔥` `NEW`
1. [怪不得上大学老了这么多](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E4%B8%8A%E5%A4%A7%E5%AD%A6%E8%80%81%E4%BA%86%E8%BF%99%E4%B9%88%E5%A4%9A%23) `316.9K 🔥` `NEW`
1. [WBG无畏契约扬帆再起](https://s.weibo.com/weibo?q=%23WBG%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E6%89%AC%E5%B8%86%E5%86%8D%E8%B5%B7%23) `300.2K 🔥` `NEW`
1. [陈光标回应张雪要卖车](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%85%89%E6%A0%87%E5%9B%9E%E5%BA%94%E5%BC%A0%E9%9B%AA%E8%A6%81%E5%8D%96%E8%BD%A6%23) `271.6K 🔥` `NEW`
1. [主播陆续回应优思益售后](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E9%99%86%E7%BB%AD%E5%9B%9E%E5%BA%94%E4%BC%98%E6%80%9D%E7%9B%8A%E5%94%AE%E5%90%8E%23) `223.1K 🔥` `NEW`
1. [市场监管部门对优思益推手立案调查](https://s.weibo.com/weibo?q=%23%E5%B8%82%E5%9C%BA%E7%9B%91%E7%AE%A1%E9%83%A8%E9%97%A8%E5%AF%B9%E4%BC%98%E6%80%9D%E7%9B%8A%E6%8E%A8%E6%89%8B%E7%AB%8B%E6%A1%88%E8%B0%83%E6%9F%A5%23) `172.3K 🔥` `NEW`
1. [李若彤发布致歉声明](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8B%A5%E5%BD%A4%E5%8F%91%E5%B8%83%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `171.8K 🔥` `NEW`
1. [金价瀑布式下跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%80%91%E5%B8%83%E5%BC%8F%E4%B8%8B%E8%B7%8C%23) `170.7K 🔥` `NEW`
1. [田曦薇骨相清冷美](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%AA%A8%E7%9B%B8%E6%B8%85%E5%86%B7%E7%BE%8E%23) `170.5K 🔥` `NEW`
1. [华为旗舰标准智界V9不计成本投入 (Huawei’s flagship standard Zhijie V9 regardless of cost investment)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%97%97%E8%88%B0%E6%A0%87%E5%87%86%E6%99%BA%E7%95%8CV9%E4%B8%8D%E8%AE%A1%E6%88%90%E6%9C%AC%E6%8A%95%E5%85%A5%23) `169.8K 🔥` `NEW`
1. [领克900大五座万物皆可装](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B900%E5%A4%A7%E4%BA%94%E5%BA%A7%E4%B8%87%E7%89%A9%E7%9A%86%E5%8F%AF%E8%A3%85%23) `169.7K 🔥` `NEW`
1. [小区花20万加装电梯只通向其中一层](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E8%8A%B120%E4%B8%87%E5%8A%A0%E8%A3%85%E7%94%B5%E6%A2%AF%E5%8F%AA%E9%80%9A%E5%90%91%E5%85%B6%E4%B8%AD%E4%B8%80%E5%B1%82%23) `169.1K 🔥` `NEW`
1. [女入殓师三十年只为女性料理白事](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%85%A5%E6%AE%93%E5%B8%88%E4%B8%89%E5%8D%81%E5%B9%B4%E5%8F%AA%E4%B8%BA%E5%A5%B3%E6%80%A7%E6%96%99%E7%90%86%E7%99%BD%E4%BA%8B%23) `168.7K 🔥` `NEW`
1. [三亚一海滩露出尖锐钢筋](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E4%B8%80%E6%B5%B7%E6%BB%A9%E9%9C%B2%E5%87%BA%E5%B0%96%E9%94%90%E9%92%A2%E7%AD%8B%23) `168.3K 🔥` `NEW`
1. [乘风2026乘风送考人](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B9%98%E9%A3%8E%E9%80%81%E8%80%83%E4%BA%BA%23) `168.2K 🔥` `NEW`
1. [张柏芝晒二儿子打球正脸](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E6%99%92%E4%BA%8C%E5%84%BF%E5%AD%90%E6%89%93%E7%90%83%E6%AD%A3%E8%84%B8%23) `167.5K 🔥` `NEW`
1. [曝短剧男顶忘本](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%9F%AD%E5%89%A7%E7%94%B7%E9%A1%B6%E5%BF%98%E6%9C%AC%23) `166.9K 🔥` `NEW`
1. [多位明星发布优思益事件处理说明](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E6%98%8E%E6%98%9F%E5%8F%91%E5%B8%83%E4%BC%98%E6%80%9D%E7%9B%8A%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E8%AF%B4%E6%98%8E%23) `166.4K 🔥` `NEW`
1. [美国男子两次试图将陌生人推下轻轨](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%94%B7%E5%AD%90%E4%B8%A4%E6%AC%A1%E8%AF%95%E5%9B%BE%E5%B0%86%E9%99%8C%E7%94%9F%E4%BA%BA%E6%8E%A8%E4%B8%8B%E8%BD%BB%E8%BD%A8%23) `166.2K 🔥` `NEW`
1. [疯狂动物城2预约人数近千万 (Zootopia 2 has nearly 10 million reservations)](https://s.weibo.com/weibo?q=%23%E7%96%AF%E7%8B%82%E5%8A%A8%E7%89%A9%E5%9F%8E2%E9%A2%84%E7%BA%A6%E4%BA%BA%E6%95%B0%E8%BF%91%E5%8D%83%E4%B8%87%23) `153.4K 🔥` `NEW`
1. [王菲俞飞鸿聚餐](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E4%BF%9E%E9%A3%9E%E9%B8%BF%E8%81%9A%E9%A4%90%23) `151.2K 🔥` `NEW`
1. [严屹宽称妆造张凌赫的决策权有限](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%E7%A7%B0%E5%A6%86%E9%80%A0%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E5%86%B3%E7%AD%96%E6%9D%83%E6%9C%89%E9%99%90%23) `145.9K 🔥` `NEW`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `132.2K 🔥` `NEW`
1. [宝珠](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E7%8F%A0%23) `131.7K 🔥` `NEW`
1. [银行回应老人存10万变7万](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%9B%9E%E5%BA%94%E8%80%81%E4%BA%BA%E5%AD%9810%E4%B8%87%E5%8F%987%E4%B8%87%23) `126.8K 🔥` `NEW`
1. [鞋子太臭真的会燃起来](https://s.weibo.com/weibo?q=%23%E9%9E%8B%E5%AD%90%E5%A4%AA%E8%87%AD%E7%9C%9F%E7%9A%84%E4%BC%9A%E7%87%83%E8%B5%B7%E6%9D%A5%23) `126.6K 🔥` `NEW`
1. [正义女神](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E4%B9%89%E5%A5%B3%E7%A5%9E%23) `126.3K 🔥` `NEW`
1. [说唱歌手JCole加盟CBA](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E5%94%B1%E6%AD%8C%E6%89%8BJCole%E5%8A%A0%E7%9B%9FCBA%23) `116.3K 🔥` `NEW`
1. [男孩捡50g金条咬了一口竟是真的](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E6%8D%A150g%E9%87%91%E6%9D%A1%E5%92%AC%E4%BA%86%E4%B8%80%E5%8F%A3%E7%AB%9F%E6%98%AF%E7%9C%9F%E7%9A%84%23) `113.2K 🔥` `NEW`
1. [极氪更强7系首测体验 (Extremely powerful 7 series first test experience)](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA%E6%9B%B4%E5%BC%BA7%E7%B3%BB%E9%A6%96%E6%B5%8B%E4%BD%93%E9%AA%8C%23) `111.7K 🔥` `NEW`
1. [当我想谈恋爱时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E6%83%B3%E8%B0%88%E6%81%8B%E7%88%B1%E6%97%B6%23) `111.3K 🔥` `NEW`
1. [原来i人看e人是这种感觉](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5i%E4%BA%BA%E7%9C%8Be%E4%BA%BA%E6%98%AF%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89%23) `108.8K 🔥` `NEW`
1. [女儿失联5年老人独自抚养6岁外孙](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%A4%B1%E8%81%945%E5%B9%B4%E8%80%81%E4%BA%BA%E7%8B%AC%E8%87%AA%E6%8A%9A%E5%85%BB6%E5%B2%81%E5%A4%96%E5%AD%99%23) `106.4K 🔥` `NEW`
1. [伊朗动用超100枚重型导弹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8A%A8%E7%94%A8%E8%B6%85100%E6%9E%9A%E9%87%8D%E5%9E%8B%E5%AF%BC%E5%BC%B9%23) `106.3K 🔥` `NEW`
1. [月鳞绮纪20小时登顶抖剧集榜TOP1](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA20%E5%B0%8F%E6%97%B6%E7%99%BB%E9%A1%B6%E6%8A%96%E5%89%A7%E9%9B%86%E6%A6%9CTOP1%23) `103.3K 🔥` `NEW`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `1.2M 🔥` `+1345%`
1. [特朗普话音刚落伊朗导弹袭向以色列](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%9D%E9%9F%B3%E5%88%9A%E8%90%BD%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%23) `346.7K 🔥` `+222%`
1. [2026款小鹏MONA今日上市 (2026 Xpeng MONA launched today)](https://s.weibo.com/weibo?q=%232026%E6%AC%BE%E5%B0%8F%E9%B9%8FMONA%E4%BB%8A%E6%97%A5%E4%B8%8A%E5%B8%82%23) `577.9K 🔥`
1. [张雪机车夺冠含金量](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E5%90%AB%E9%87%91%E9%87%8F%23) `172.5K 🔥`
1. [杨紫 没人通知我啊 (Yang Zi, no one informed me)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E6%B2%A1%E4%BA%BA%E9%80%9A%E7%9F%A5%E6%88%91%E5%95%8A%23) `171.4K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `171.1K 🔥`
1. [收到了去世好友的微信回复 (Received a WeChat reply from a deceased friend)](https://s.weibo.com/weibo?q=%23%E6%94%B6%E5%88%B0%E4%BA%86%E5%8E%BB%E4%B8%96%E5%A5%BD%E5%8F%8B%E7%9A%84%E5%BE%AE%E4%BF%A1%E5%9B%9E%E5%A4%8D%23) `167.2K 🔥`
1. [老爸收入不敌女儿卖拼豆直呼崩溃](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E6%94%B6%E5%85%A5%E4%B8%8D%E6%95%8C%E5%A5%B3%E5%84%BF%E5%8D%96%E6%8B%BC%E8%B1%86%E7%9B%B4%E5%91%BC%E5%B4%A9%E6%BA%83%23) `165.5K 🔥`
1. [美国TikTok禁令演不下去了吗 (Will the U.S. TikTok ban continue?)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BDTikTok%E7%A6%81%E4%BB%A4%E6%BC%94%E4%B8%8D%E4%B8%8B%E5%8E%BB%E4%BA%86%E5%90%97%23) `152.5K 🔥`
1. [4个炒菜习惯或让致癌物翻倍](https://s.weibo.com/weibo?q=%234%E4%B8%AA%E7%82%92%E8%8F%9C%E4%B9%A0%E6%83%AF%E6%88%96%E8%AE%A9%E8%87%B4%E7%99%8C%E7%89%A9%E7%BF%BB%E5%80%8D%23) `137.4K 🔥`
1. [幼儿园小朋友裹被子开溜被老师抓包](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%B0%8F%E6%9C%8B%E5%8F%8B%E8%A3%B9%E8%A2%AB%E5%AD%90%E5%BC%80%E6%BA%9C%E8%A2%AB%E8%80%81%E5%B8%88%E6%8A%93%E5%8C%85%23) `117.8K 🔥`
1. [日本终于露出獠牙 (Japan finally shows its fangs)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BB%88%E4%BA%8E%E9%9C%B2%E5%87%BA%E7%8D%A0%E7%89%99%23) `483.1K 🔥` `-58%`
1. [伊朗总统致美国人民公开信](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%87%B4%E7%BE%8E%E5%9B%BD%E4%BA%BA%E6%B0%91%E5%85%AC%E5%BC%80%E4%BF%A1%23) `129.5K 🔥` `-37%`
1. [王者荣耀无双](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%97%A0%E5%8F%8C%23) `94.9K 🔥` `-40%`

Updated at 2026-04-02 12:59:43

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
