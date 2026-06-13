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

1. [学校凭啥把艾滋检测塞进新生体检 (Why does the school include AIDS testing in the physical examination for freshmen?)](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%A0%A1%E5%87%AD%E5%95%A5%E6%8A%8A%E8%89%BE%E6%BB%8B%E6%A3%80%E6%B5%8B%E5%A1%9E%E8%BF%9B%E6%96%B0%E7%94%9F%E4%BD%93%E6%A3%80%23) `2.7M 🔥` `NEW`
1. [张雪机车六冠王](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%85%AD%E5%86%A0%E7%8E%8B%23) `1.4M 🔥` `NEW`
1. [一代代中国人守护华夏文脉](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BB%A3%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%AE%88%E6%8A%A4%E5%8D%8E%E5%A4%8F%E6%96%87%E8%84%89%23) `823.7K 🔥` `NEW`
1. [女生分手男方要求返还彩礼被告强奸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%88%86%E6%89%8B%E7%94%B7%E6%96%B9%E8%A6%81%E6%B1%82%E8%BF%94%E8%BF%98%E5%BD%A9%E7%A4%BC%E8%A2%AB%E5%91%8A%E5%BC%BA%E5%A5%B8%23) `771.1K 🔥` `NEW`
1. [突然理解了自己为什么物欲这么高](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E4%BA%86%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E7%89%A9%E6%AC%B2%E8%BF%99%E4%B9%88%E9%AB%98%23) `671.8K 🔥` `NEW`
1. [原来鸿蒙有这么多宝藏开发者](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%B8%BF%E8%92%99%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E5%AE%9D%E8%97%8F%E5%BC%80%E5%8F%91%E8%80%85%23) `656.9K 🔥` `NEW`
1. [林俊杰蔡依林合体鸟巢](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E8%94%A1%E4%BE%9D%E6%9E%97%E5%90%88%E4%BD%93%E9%B8%9F%E5%B7%A2%23) `625.3K 🔥` `NEW`
1. [Bin MSI我又来了](https://s.weibo.com/weibo?q=%23Bin%20MSI%E6%88%91%E5%8F%88%E6%9D%A5%E4%BA%86%23) `421.9K 🔥` `NEW`
1. [Angelababy的榜一是陈赫](https://s.weibo.com/weibo?q=%23Angelababy%E7%9A%84%E6%A6%9C%E4%B8%80%E6%98%AF%E9%99%88%E8%B5%AB%23) `369.1K 🔥` `NEW`
1. [福原爱首谈与现任丈夫恋爱故事](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%8E%9F%E7%88%B1%E9%A6%96%E8%B0%88%E4%B8%8E%E7%8E%B0%E4%BB%BB%E4%B8%88%E5%A4%AB%E6%81%8B%E7%88%B1%E6%95%85%E4%BA%8B%23) `341.4K 🔥` `NEW`
1. [WE无缘Msi (WE missed Msi)](https://s.weibo.com/weibo?q=%23WE%E6%97%A0%E7%BC%98Msi%23) `327.8K 🔥` `NEW`
1. [程潇红毯](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E7%BA%A2%E6%AF%AF%23) `294.3K 🔥` `NEW`
1. [SpaceX亏损达413亿美元](https://s.weibo.com/weibo?q=%23SpaceX%E4%BA%8F%E6%8D%9F%E8%BE%BE413%E4%BA%BF%E7%BE%8E%E5%85%83%23) `293.0K 🔥` `NEW`
1. [高圆圆让C](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%9C%86%E5%9C%86%E8%AE%A9C%23) `272.2K 🔥` `NEW`
1. [这才是AI发展真正的意义](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AFAI%E5%8F%91%E5%B1%95%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%84%8F%E4%B9%89%23) `272.1K 🔥` `NEW`
1. [日本队主帅曾说球员轮奸是失误](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%98%9F%E4%B8%BB%E5%B8%85%E6%9B%BE%E8%AF%B4%E7%90%83%E5%91%98%E8%BD%AE%E5%A5%B8%E6%98%AF%E5%A4%B1%E8%AF%AF%23) `272.0K 🔥` `NEW`
1. [考编第一被人递补维权后岗位取消](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%BC%96%E7%AC%AC%E4%B8%80%E8%A2%AB%E4%BA%BA%E9%80%92%E8%A1%A5%E7%BB%B4%E6%9D%83%E5%90%8E%E5%B2%97%E4%BD%8D%E5%8F%96%E6%B6%88%23) `271.5K 🔥` `NEW`
1. [黑豹乐队前主唱张克芃去世](https://s.weibo.com/weibo?q=%23%E9%BB%91%E8%B1%B9%E4%B9%90%E9%98%9F%E5%89%8D%E4%B8%BB%E5%94%B1%E5%BC%A0%E5%85%8B%E8%8A%83%E5%8E%BB%E4%B8%96%23) `271.3K 🔥` `NEW`
1. [军师 你别偷偷跟你女朋友聊天了](https://s.weibo.com/weibo?q=%23%E5%86%9B%E5%B8%88%20%E4%BD%A0%E5%88%AB%E5%81%B7%E5%81%B7%E8%B7%9F%E4%BD%A0%E5%A5%B3%E6%9C%8B%E5%8F%8B%E8%81%8A%E5%A4%A9%E4%BA%86%23) `271.1K 🔥` `NEW`
1. [美国女市长性侵16岁男孩被判90天监禁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%B8%82%E9%95%BF%E6%80%A7%E4%BE%B516%E5%B2%81%E7%94%B7%E5%AD%A9%E8%A2%AB%E5%88%A490%E5%A4%A9%E7%9B%91%E7%A6%81%23) `270.5K 🔥` `NEW`
1. [盛世天下 (prosperous world)](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E4%B8%96%E5%A4%A9%E4%B8%8B%23) `270.3K 🔥` `NEW`
1. [白鹿莫离全网播放量破亿](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%E5%85%A8%E7%BD%91%E6%92%AD%E6%94%BE%E9%87%8F%E7%A0%B4%E4%BA%BF%23) `258.1K 🔥` `NEW`
1. [Anthropic禁止非美用户使用模型](https://s.weibo.com/weibo?q=%23Anthropic%E7%A6%81%E6%AD%A2%E9%9D%9E%E7%BE%8E%E7%94%A8%E6%88%B7%E4%BD%BF%E7%94%A8%E6%A8%A1%E5%9E%8B%23) `251.0K 🔥` `NEW`
1. [张雪机车德比斯升至积分榜第2](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%BE%B7%E6%AF%94%E6%96%AF%E5%8D%87%E8%87%B3%E7%A7%AF%E5%88%86%E6%A6%9C%E7%AC%AC2%23) `242.6K 🔥` `NEW`
1. [张雪机车再夺第一](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%86%8D%E5%A4%BA%E7%AC%AC%E4%B8%80%23) `229.0K 🔥` `NEW`
1. [张雪称赛事技术人员嘴角压不住了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E7%A7%B0%E8%B5%9B%E4%BA%8B%E6%8A%80%E6%9C%AF%E4%BA%BA%E5%91%98%E5%98%B4%E8%A7%92%E5%8E%8B%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `217.3K 🔥` `NEW`
1. [外籍旅客带少数民族服装出境被拦](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E6%97%85%E5%AE%A2%E5%B8%A6%E5%B0%91%E6%95%B0%E6%B0%91%E6%97%8F%E6%9C%8D%E8%A3%85%E5%87%BA%E5%A2%83%E8%A2%AB%E6%8B%A6%23) `197.8K 🔥` `NEW`
1. [王源来了蔡依林演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%9D%A5%E4%BA%86%E8%94%A1%E4%BE%9D%E6%9E%97%E6%BC%94%E5%94%B1%E4%BC%9A%23) `177.6K 🔥` `NEW`
1. [张雪机车第六冠后发文](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%AC%AC%E5%85%AD%E5%86%A0%E5%90%8E%E5%8F%91%E6%96%87%23) `176.6K 🔥` `NEW`
1. [全球艾滋病应对正进入危险时刻](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%89%BE%E6%BB%8B%E7%97%85%E5%BA%94%E5%AF%B9%E6%AD%A3%E8%BF%9B%E5%85%A5%E5%8D%B1%E9%99%A9%E6%97%B6%E5%88%BB%23) `176.6K 🔥` `NEW`
1. [李宇春蝶翼裸背裙 (Li Yuchun butterfly wing bare back skirt)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E8%9D%B6%E7%BF%BC%E8%A3%B8%E8%83%8C%E8%A3%99%23) `173.3K 🔥` `NEW`
1. [甲亢哥预测C罗夺冠被驱逐](https://s.weibo.com/weibo?q=%23%E7%94%B2%E4%BA%A2%E5%93%A5%E9%A2%84%E6%B5%8BC%E7%BD%97%E5%A4%BA%E5%86%A0%E8%A2%AB%E9%A9%B1%E9%80%90%23) `172.7K 🔥` `NEW`
1. [BLG战胜WE](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CWE%23) `172.1K 🔥` `NEW`
1. [那我花钱去拔智齿算什么](https://s.weibo.com/weibo?q=%23%E9%82%A3%E6%88%91%E8%8A%B1%E9%92%B1%E5%8E%BB%E6%8B%94%E6%99%BA%E9%BD%BF%E7%AE%97%E4%BB%80%E4%B9%88%23) `163.5K 🔥` `NEW`
1. [范志毅怼管泽元](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%BF%97%E6%AF%85%E6%80%BC%E7%AE%A1%E6%B3%BD%E5%85%83%23) `161.9K 🔥` `NEW`
1. [原特斯拉厂长首次代表小米发言](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%89%B9%E6%96%AF%E6%8B%89%E5%8E%82%E9%95%BF%E9%A6%96%E6%AC%A1%E4%BB%A3%E8%A1%A8%E5%B0%8F%E7%B1%B3%E5%8F%91%E8%A8%80%23) `153.9K 🔥` `NEW`
1. [我的朋友圈点赞原则 (Like principles for my circle of friends)](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%82%B9%E8%B5%9E%E5%8E%9F%E5%88%99%23) `772.7K 🔥` `+355%`
1. [男子带10万现金还贷被银行拒收](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B8%A610%E4%B8%87%E7%8E%B0%E9%87%91%E8%BF%98%E8%B4%B7%E8%A2%AB%E9%93%B6%E8%A1%8C%E6%8B%92%E6%94%B6%23) `445.6K 🔥` `+30%`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `382.6K 🔥` `+109%`
1. [球迷惊喜日京东拍卖限量球衣](https://s.weibo.com/weibo?q=%23%E7%90%83%E8%BF%B7%E6%83%8A%E5%96%9C%E6%97%A5%E4%BA%AC%E4%B8%9C%E6%8B%8D%E5%8D%96%E9%99%90%E9%87%8F%E7%90%83%E8%A1%A3%23) `794.7K 🔥`
1. [孙怡真给曾沛慈下聘礼了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9C%9F%E7%BB%99%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%8B%E8%81%98%E7%A4%BC%E4%BA%86%23) `329.4K 🔥`
1. [姜十七承认整容了 (Jiang Shiqi admitted to having plastic surgery)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%8D%81%E4%B8%83%E6%89%BF%E8%AE%A4%E6%95%B4%E5%AE%B9%E4%BA%86%23) `315.2K 🔥`
1. [六级答案](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%E7%AD%94%E6%A1%88%23) `270.9K 🔥`
1. [找工作就是运气问题](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%B7%A5%E4%BD%9C%E5%B0%B1%E6%98%AF%E8%BF%90%E6%B0%94%E9%97%AE%E9%A2%98%23) `270.6K 🔥`
1. [香港偶遇吴世勋](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%81%B6%E9%81%87%E5%90%B4%E4%B8%96%E5%8B%8B%23) `232.8K 🔥`
1. [黄金罕见大涨](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%BD%95%E8%A7%81%E5%A4%A7%E6%B6%A8%23) `156.4K 🔥`
1. [雷军测试直播计划7小时实际5小时](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%B5%8B%E8%AF%95%E7%9B%B4%E6%92%AD%E8%AE%A1%E5%88%927%E5%B0%8F%E6%97%B6%E5%AE%9E%E9%99%855%E5%B0%8F%E6%97%B6%23) `153.9K 🔥`
1. [长生骨男主](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9F%E9%AA%A8%E7%94%B7%E4%B8%BB%23) `251.8K 🔥` `-53%`
1. [海陆变样了](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E9%99%86%E5%8F%98%E6%A0%B7%E4%BA%86%23) `250.7K 🔥` `-24%`
1. [孙怡买500本曾沛慈杂志](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E4%B9%B0500%E6%9C%AC%E6%9B%BE%E6%B2%9B%E6%85%88%E6%9D%82%E5%BF%97%23) `212.2K 🔥` `-64%`
1. [六级答案星火](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%E7%AD%94%E6%A1%88%E6%98%9F%E7%81%AB%23) `176.6K 🔥` `-44%`
1. [虞书欣长生骨单人过会 (Yu Shuxin's Immortal Bone solo party)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%95%BF%E7%94%9F%E9%AA%A8%E5%8D%95%E4%BA%BA%E8%BF%87%E4%BC%9A%23) `167.0K 🔥` `-47%`

Updated at 2026-06-13 22:21:37

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
