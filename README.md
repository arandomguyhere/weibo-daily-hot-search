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

1. [DeepSeek降价 (DeepSeek price cuts)](https://s.weibo.com/weibo?q=%23DeepSeek%E9%99%8D%E4%BB%B7%23) `1.4M 🔥` `NEW`
1. [中国足球小将夺冠](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%B3%E7%90%83%E5%B0%8F%E5%B0%86%E5%A4%BA%E5%86%A0%23) `1.2M 🔥` `NEW`
1. [小米隐藏王牌即将落地](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%9A%90%E8%97%8F%E7%8E%8B%E7%89%8C%E5%8D%B3%E5%B0%86%E8%90%BD%E5%9C%B0%23) `1.1M 🔥` `NEW`
1. [月薪一万是月薪五千的六倍](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA%E4%B8%80%E4%B8%87%E6%98%AF%E6%9C%88%E8%96%AA%E4%BA%94%E5%8D%83%E7%9A%84%E5%85%AD%E5%80%8D%23) `1.0M 🔥` `NEW`
1. [为什么荔枝干不普及](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E8%8D%94%E6%9E%9D%E5%B9%B2%E4%B8%8D%E6%99%AE%E5%8F%8A%23) `969.7K 🔥` `NEW`
1. [韩国网民夸杀人犯长得帅](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E6%B0%91%E5%A4%B8%E6%9D%80%E4%BA%BA%E7%8A%AF%E9%95%BF%E5%BE%97%E5%B8%85%23) `915.5K 🔥` `NEW`
1. [原来老祖宗才是最懂午睡的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%80%81%E7%A5%96%E5%AE%97%E6%89%8D%E6%98%AF%E6%9C%80%E6%87%82%E5%8D%88%E7%9D%A1%E7%9A%84%23) `452.7K 🔥` `NEW`
1. [翘楚](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%23) `445.9K 🔥` `NEW`
1. [长月烬明没人给陈都灵打call](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%88%E7%83%AC%E6%98%8E%E6%B2%A1%E4%BA%BA%E7%BB%99%E9%99%88%E9%83%BD%E7%81%B5%E6%89%93call%23) `445.7K 🔥` `NEW`
1. [全世界最尊重上海的人](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E6%9C%80%E5%B0%8A%E9%87%8D%E4%B8%8A%E6%B5%B7%E7%9A%84%E4%BA%BA%23) `441.4K 🔥` `NEW`
1. [不被爱的时候你是鹿晗也得被打码 (When you are not loved, you will be labeled even if you are Lu Han)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A2%AB%E7%88%B1%E7%9A%84%E6%97%B6%E5%80%99%E4%BD%A0%E6%98%AF%E9%B9%BF%E6%99%97%E4%B9%9F%E5%BE%97%E8%A2%AB%E6%89%93%E7%A0%81%23) `439.0K 🔥` `NEW`
1. [歌手 苏新皓](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20%E8%8B%8F%E6%96%B0%E7%9A%93%23) `434.1K 🔥` `NEW`
1. [方圆脸减肥一下子没动力了](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E8%84%B8%E5%87%8F%E8%82%A5%E4%B8%80%E4%B8%8B%E5%AD%90%E6%B2%A1%E5%8A%A8%E5%8A%9B%E4%BA%86%23) `432.9K 🔥` `NEW`
1. [此沙被审判](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E6%B2%99%E8%A2%AB%E5%AE%A1%E5%88%A4%23) `430.1K 🔥` `NEW`
1. [5岁儿子29万存款被妈妈取到剩40](https://s.weibo.com/weibo?q=%235%E5%B2%81%E5%84%BF%E5%AD%9029%E4%B8%87%E5%AD%98%E6%AC%BE%E8%A2%AB%E5%A6%88%E5%A6%88%E5%8F%96%E5%88%B0%E5%89%A940%23) `424.4K 🔥` `NEW`
1. [妹妹14年后破译亡兄QQ专属相册](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B914%E5%B9%B4%E5%90%8E%E7%A0%B4%E8%AF%91%E4%BA%A1%E5%85%84QQ%E4%B8%93%E5%B1%9E%E7%9B%B8%E5%86%8C%23) `421.3K 🔥` `NEW`
1. [谷歌前CEO强奸案反转女方被判赔](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8C%E5%89%8DCEO%E5%BC%BA%E5%A5%B8%E6%A1%88%E5%8F%8D%E8%BD%AC%E5%A5%B3%E6%96%B9%E8%A2%AB%E5%88%A4%E8%B5%94%23) `419.8K 🔥` `NEW`
1. [爸爸二十年前给我做的人生规划](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%BA%8C%E5%8D%81%E5%B9%B4%E5%89%8D%E7%BB%99%E6%88%91%E5%81%9A%E7%9A%84%E4%BA%BA%E7%94%9F%E8%A7%84%E5%88%92%23) `417.7K 🔥` `NEW`
1. [国乒男队队长王楚钦](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E9%98%9F%E9%95%BF%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `406.5K 🔥` `NEW`
1. [多代言发文贺王楚钦成为国乒男队队长](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BB%A3%E8%A8%80%E5%8F%91%E6%96%87%E8%B4%BA%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%88%90%E4%B8%BA%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E9%98%9F%E9%95%BF%23) `383.2K 🔥` `NEW`
1. [icon已取证疑要追责造谣者 (icon Evidence has been obtained and the rumor mongers will be held accountable)](https://s.weibo.com/weibo?q=%23icon%E5%B7%B2%E5%8F%96%E8%AF%81%E7%96%91%E8%A6%81%E8%BF%BD%E8%B4%A3%E9%80%A0%E8%B0%A3%E8%80%85%23) `369.5K 🔥` `NEW`
1. [女子欲写5000字差评同行男子大笑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%AC%B2%E5%86%995000%E5%AD%97%E5%B7%AE%E8%AF%84%E5%90%8C%E8%A1%8C%E7%94%B7%E5%AD%90%E5%A4%A7%E7%AC%91%23) `345.2K 🔥` `NEW`
1. [大帅拍的一诺](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B8%85%E6%8B%8D%E7%9A%84%E4%B8%80%E8%AF%BA%23) `339.9K 🔥` `NEW`
1. [神仙肉 陈星旭](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%20%E9%99%88%E6%98%9F%E6%97%AD%23) `323.5K 🔥` `NEW`
1. [王洋洋 夏美](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%B4%8B%E6%B4%8B%20%E5%A4%8F%E7%BE%8E%23) `281.2K 🔥` `NEW`
1. [马龙结束12年队长任期](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E7%BB%93%E6%9D%9F12%E5%B9%B4%E9%98%9F%E9%95%BF%E4%BB%BB%E6%9C%9F%23) `279.6K 🔥` `NEW`
1. [妻子与前男友车上睡觉男子怒砸车窗](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E4%B8%8E%E5%89%8D%E7%94%B7%E5%8F%8B%E8%BD%A6%E4%B8%8A%E7%9D%A1%E8%A7%89%E7%94%B7%E5%AD%90%E6%80%92%E7%A0%B8%E8%BD%A6%E7%AA%97%23) `276.8K 🔥` `NEW`
1. [迪丽热巴表现力强到让人震撼](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A1%A8%E7%8E%B0%E5%8A%9B%E5%BC%BA%E5%88%B0%E8%AE%A9%E4%BA%BA%E9%9C%87%E6%92%BC%23) `274.1K 🔥` `NEW`
1. [上班最大意义不是拿点工资](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%9C%80%E5%A4%A7%E6%84%8F%E4%B9%89%E4%B8%8D%E6%98%AF%E6%8B%BF%E7%82%B9%E5%B7%A5%E8%B5%84%23) `269.6K 🔥` `NEW`
1. [陈学冬 奚梦瑶要幸福](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%AD%A6%E5%86%AC%20%E5%A5%9A%E6%A2%A6%E7%91%B6%E8%A6%81%E5%B9%B8%E7%A6%8F%23) `266.5K 🔥` `NEW`
1. [财政局回应一公务员被指脚踏两条船 (The Financial Bureau responds to a civil servant being accused of being in two different places)](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E6%94%BF%E5%B1%80%E5%9B%9E%E5%BA%94%E4%B8%80%E5%85%AC%E5%8A%A1%E5%91%98%E8%A2%AB%E6%8C%87%E8%84%9A%E8%B8%8F%E4%B8%A4%E6%9D%A1%E8%88%B9%23) `263.3K 🔥` `NEW`
1. [耀眼 伟大的暧昧期](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%20%E4%BC%9F%E5%A4%A7%E7%9A%84%E6%9A%A7%E6%98%A7%E6%9C%9F%23) `263.0K 🔥` `NEW`
1. [张杰真不舒服了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E7%9C%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `258.9K 🔥` `NEW`
1. [奚梦瑶婚礼把陈学冬召唤出来了](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%E6%8A%8A%E9%99%88%E5%AD%A6%E5%86%AC%E5%8F%AC%E5%94%A4%E5%87%BA%E6%9D%A5%E4%BA%86%23) `256.2K 🔥` `NEW`
1. [不再发朋友圈算长大吗](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%86%8D%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `253.2K 🔥` `NEW`
1. [杨紫双剧登CCTV8](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%8F%8C%E5%89%A7%E7%99%BBCCTV8%23) `250.9K 🔥` `NEW`
1. [翘楚首播反馈](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E9%A6%96%E6%92%AD%E5%8F%8D%E9%A6%88%23) `249.2K 🔥` `NEW`
1. [孩子赊账吃零食家长拒付款怒怼店家](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E8%B5%8A%E8%B4%A6%E5%90%83%E9%9B%B6%E9%A3%9F%E5%AE%B6%E9%95%BF%E6%8B%92%E4%BB%98%E6%AC%BE%E6%80%92%E6%80%BC%E5%BA%97%E5%AE%B6%23) `236.5K 🔥` `NEW`
1. [灵魂摆渡十年开播](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%E5%8D%81%E5%B9%B4%E5%BC%80%E6%92%AD%23) `231.7K 🔥` `NEW`
1. [池昌旭涉嫌逃税](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%E6%B6%89%E5%AB%8C%E9%80%83%E7%A8%8E%23) `217.0K 🔥` `NEW`
1. [王皓谈王楚钦为何当选队长 (Wang Hao talks about why Wang Chuqin was elected captain)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E8%B0%88%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%BA%E4%BD%95%E5%BD%93%E9%80%89%E9%98%9F%E9%95%BF%23) `212.6K 🔥` `NEW`
1. [地球超新鲜](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E8%B6%85%E6%96%B0%E9%B2%9C%23) `211.6K 🔥` `NEW`
1. [叶一茜带森碟来浪姐集邮](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%E5%B8%A6%E6%A3%AE%E7%A2%9F%E6%9D%A5%E6%B5%AA%E5%A7%90%E9%9B%86%E9%82%AE%23) `199.9K 🔥` `NEW`
1. [印度男34秒摔死幼童拒捕与警方枪战](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B734%E7%A7%92%E6%91%94%E6%AD%BB%E5%B9%BC%E7%AB%A5%E6%8B%92%E6%8D%95%E4%B8%8E%E8%AD%A6%E6%96%B9%E6%9E%AA%E6%88%98%23) `182.5K 🔥` `NEW`
1. [迪丽热巴嘉人待遇](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%98%89%E4%BA%BA%E5%BE%85%E9%81%87%23) `180.8K 🔥` `NEW`
1. [财政部下达999亿育儿补贴补助资金](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E6%94%BF%E9%83%A8%E4%B8%8B%E8%BE%BE999%E4%BA%BF%E8%82%B2%E5%84%BF%E8%A1%A5%E8%B4%B4%E8%A1%A5%E5%8A%A9%E8%B5%84%E9%87%91%23) `1.4M 🔥` `+59%`
1. [预计今年共安排育儿补贴约1100亿 (It is expected that a total of about 110 billion yuan in childcare subsidies will be arranged this year)](https://s.weibo.com/weibo?q=%23%E9%A2%84%E8%AE%A1%E4%BB%8A%E5%B9%B4%E5%85%B1%E5%AE%89%E6%8E%92%E8%82%B2%E5%84%BF%E8%A1%A5%E8%B4%B4%E7%BA%A61100%E4%BA%BF%23) `1.2M 🔥` `+107%`
1. [谢天宇偷看路人裙底](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A4%A9%E5%AE%87%E5%81%B7%E7%9C%8B%E8%B7%AF%E4%BA%BA%E8%A3%99%E5%BA%95%23) `254.3K 🔥` `-57%`
1. [建议爬山不要买白色雨衣](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%88%AC%E5%B1%B1%E4%B8%8D%E8%A6%81%E4%B9%B0%E7%99%BD%E8%89%B2%E9%9B%A8%E8%A1%A3%23) `177.7K 🔥` `-79%`

Updated at 2026-06-02 19:11:04

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
