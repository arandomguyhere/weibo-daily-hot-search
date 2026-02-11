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

1. [带领意大利队夺金的是中国教练 (It was a Chinese coach who led the Italian team to the gold medal)](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E9%A2%86%E6%84%8F%E5%A4%A7%E5%88%A9%E9%98%9F%E5%A4%BA%E9%87%91%E7%9A%84%E6%98%AF%E4%B8%AD%E5%9B%BD%E6%95%99%E7%BB%83%23) `1.1M 🔥` `NEW`
1. [电影射雕英雄传侠之大者](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%B0%84%E9%9B%95%E8%8B%B1%E9%9B%84%E4%BC%A0%E4%BE%A0%E4%B9%8B%E5%A4%A7%E8%80%85%23) `773.2K 🔥` `NEW`
1. [李谷一确认缺席马年春晚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%B0%B7%E4%B8%80%E7%A1%AE%E8%AE%A4%E7%BC%BA%E5%B8%AD%E9%A9%AC%E5%B9%B4%E6%98%A5%E6%99%9A%23) `348.0K 🔥` `NEW`
1. [烽火问鼎计划](https://s.weibo.com/weibo?q=%23%E7%83%BD%E7%81%AB%E9%97%AE%E9%BC%8E%E8%AE%A1%E5%88%92%23) `251.6K 🔥` `NEW`
1. [苏新皓 韩国](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%20%E9%9F%A9%E5%9B%BD%23) `153.6K 🔥` `NEW`
1. [李连杰说王宝强的成功是百万分之一](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%BF%9E%E6%9D%B0%E8%AF%B4%E7%8E%8B%E5%AE%9D%E5%BC%BA%E7%9A%84%E6%88%90%E5%8A%9F%E6%98%AF%E7%99%BE%E4%B8%87%E5%88%86%E4%B9%8B%E4%B8%80%23) `153.1K 🔥` `NEW`
1. [在厨房放一把椅子有多方便](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8E%A8%E6%88%BF%E6%94%BE%E4%B8%80%E6%8A%8A%E6%A4%85%E5%AD%90%E6%9C%89%E5%A4%9A%E6%96%B9%E4%BE%BF%23) `109.5K 🔥` `NEW`
1. [美国队带走韩国队瞬间](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%98%9F%E5%B8%A6%E8%B5%B0%E9%9F%A9%E5%9B%BD%E9%98%9F%E7%9E%AC%E9%97%B4%23) `98.6K 🔥` `NEW`
1. [一到老家就变回了孩子](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%88%B0%E8%80%81%E5%AE%B6%E5%B0%B1%E5%8F%98%E5%9B%9E%E4%BA%86%E5%AD%A9%E5%AD%90%23) `98.6K 🔥` `NEW`
1. [美商务部长承认曾去过萝莉岛](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%95%86%E5%8A%A1%E9%83%A8%E9%95%BF%E6%89%BF%E8%AE%A4%E6%9B%BE%E5%8E%BB%E8%BF%87%E8%90%9D%E8%8E%89%E5%B2%9B%23) `96.7K 🔥` `NEW`
1. [樊振东小弗熟透了无疑 (Fan Zhendong is undoubtedly familiar with Xiao Fu)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B0%8F%E5%BC%97%E7%86%9F%E9%80%8F%E4%BA%86%E6%97%A0%E7%96%91%23) `85.9K 🔥` `NEW`
1. [语音评论](https://s.weibo.com/weibo?q=%23%E8%AF%AD%E9%9F%B3%E8%AF%84%E8%AE%BA%23) `85.7K 🔥` `NEW`
1. [樊振东再次出任一单](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%86%8D%E6%AC%A1%E5%87%BA%E4%BB%BB%E4%B8%80%E5%8D%95%23) `80.1K 🔥` `NEW`
1. [阚清子片场点滴](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E7%89%87%E5%9C%BA%E7%82%B9%E6%BB%B4%23) `77.9K 🔥` `NEW`
1. [意大利队主教练是齐梦瑶](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E9%98%9F%E4%B8%BB%E6%95%99%E7%BB%83%E6%98%AF%E9%BD%90%E6%A2%A6%E7%91%B6%23) `77.3K 🔥` `NEW`
1. [胡萝卜蛋糕](https://s.weibo.com/weibo?q=%23%E8%83%A1%E8%90%9D%E5%8D%9C%E8%9B%8B%E7%B3%95%23) `76.0K 🔥` `NEW`
1. [711乌冬面](https://s.weibo.com/weibo?q=%23711%E4%B9%8C%E5%86%AC%E9%9D%A2%23) `74.6K 🔥` `NEW`
1. [孩子坠入湍急冰河母亲急得也跳入](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%9D%A0%E5%85%A5%E6%B9%8D%E6%80%A5%E5%86%B0%E6%B2%B3%E6%AF%8D%E4%BA%B2%E6%80%A5%E5%BE%97%E4%B9%9F%E8%B7%B3%E5%85%A5%23) `73.3K 🔥` `NEW`
1. [樊振东下班路上给小朋友签名](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%8B%E7%8F%AD%E8%B7%AF%E4%B8%8A%E7%BB%99%E5%B0%8F%E6%9C%8B%E5%8F%8B%E7%AD%BE%E5%90%8D%23) `72.7K 🔥` `NEW`
1. [英格拉姆顶替库里入选全明星](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E6%8B%89%E5%A7%86%E9%A1%B6%E6%9B%BF%E5%BA%93%E9%87%8C%E5%85%A5%E9%80%89%E5%85%A8%E6%98%8E%E6%98%9F%23) `71.1K 🔥` `NEW`
1. [建行手机银行智简焕新 (CCB Mobile Banking Smart Brief Renewal)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%A1%8C%E6%89%8B%E6%9C%BA%E9%93%B6%E8%A1%8C%E6%99%BA%E7%AE%80%E7%84%95%E6%96%B0%23) `390.7K 🔥` `+874%`
1. [涠洲岛网红鲸鱼被渔船高速撞击 (Internet celebrity whale on Weizhou Island was hit by a fishing boat at high speed)](https://s.weibo.com/weibo?q=%23%E6%B6%A0%E6%B4%B2%E5%B2%9B%E7%BD%91%E7%BA%A2%E9%B2%B8%E9%B1%BC%E8%A2%AB%E6%B8%94%E8%88%B9%E9%AB%98%E9%80%9F%E6%92%9E%E5%87%BB%23) `292.8K 🔥` `+233%`
1. [年终奖](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E7%BB%88%E5%A5%96%23) `253.8K 🔥` `+403%`
1. [白菊邵云飞离婚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%8F%8A%E9%82%B5%E4%BA%91%E9%A3%9E%E7%A6%BB%E5%A9%9A%23) `250.8K 🔥` `+116%`
1. [雷军确认第一代SU7停产](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A1%AE%E8%AE%A4%E7%AC%AC%E4%B8%80%E4%BB%A3SU7%E5%81%9C%E4%BA%A7%23) `158.2K 🔥` `+36%`
1. [女子被男友割喉600天后家属等来判决](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%94%B7%E5%8F%8B%E5%89%B2%E5%96%89600%E5%A4%A9%E5%90%8E%E5%AE%B6%E5%B1%9E%E7%AD%89%E6%9D%A5%E5%88%A4%E5%86%B3%23) `157.9K 🔥` `+37%`
1. [高市早苗赌赢后彻底不装了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%B5%8C%E8%B5%A2%E5%90%8E%E5%BD%BB%E5%BA%95%E4%B8%8D%E8%A3%85%E4%BA%86%23) `156.9K 🔥` `+98%`
1. [原来你们真有年终奖啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BD%A0%E4%BB%AC%E7%9C%9F%E6%9C%89%E5%B9%B4%E7%BB%88%E5%A5%96%E5%95%8A%23) `155.6K 🔥` `+97%`
1. [黄金盘中巨震](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%9B%98%E4%B8%AD%E5%B7%A8%E9%9C%87%23) `152.2K 🔥` `+64%`
1. [74岁肥猫被医生建议注射药物镇痛 (74-year-old fat cat was recommended by doctor to inject drugs for pain relief)](https://s.weibo.com/weibo?q=%2374%E5%B2%81%E8%82%A5%E7%8C%AB%E8%A2%AB%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E6%B3%A8%E5%B0%84%E8%8D%AF%E7%89%A9%E9%95%87%E7%97%9B%23) `151.2K 🔥` `+38%`
1. [李谷一回应缺席马年春晚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%B0%B7%E4%B8%80%E5%9B%9E%E5%BA%94%E7%BC%BA%E5%B8%AD%E9%A9%AC%E5%B9%B4%E6%98%A5%E6%99%9A%23) `148.4K 🔥` `+29%`
1. [日本彻底失控](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BD%BB%E5%BA%95%E5%A4%B1%E6%8E%A7%23) `143.1K 🔥` `+55%`
1. [王濛快哭了 (Wang Meng is about to cry)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%BF%AB%E5%93%AD%E4%BA%86%23) `137.5K 🔥` `+49%`
1. [女子反复瘙痒竟因常年吃面食 (Woman suffers from repeated itching due to eating pasta all year round)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8F%8D%E5%A4%8D%E7%98%99%E7%97%92%E7%AB%9F%E5%9B%A0%E5%B8%B8%E5%B9%B4%E5%90%83%E9%9D%A2%E9%A3%9F%23) `131.3K 🔥` `+43%`
1. [法国想对中国复制广场协议](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%83%B3%E5%AF%B9%E4%B8%AD%E5%9B%BD%E5%A4%8D%E5%88%B6%E5%B9%BF%E5%9C%BA%E5%8D%8F%E8%AE%AE%23) `129.1K 🔥` `+96%`
1. [王者荣耀小马糕](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%B0%8F%E9%A9%AC%E7%B3%95%23) `77.8K 🔥` `+28%`
1. [中国无人机大山里运腊肠 (Chinese drone transports sausages in mountains)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%A4%A7%E5%B1%B1%E9%87%8C%E8%BF%90%E8%85%8A%E8%82%A0%23) `632.4K 🔥`
1. [短道队多人为孙龙发声 (Many members of the short track team spoke out for Sun Long)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%98%9F%E5%A4%9A%E4%BA%BA%E4%B8%BA%E5%AD%99%E9%BE%99%E5%8F%91%E5%A3%B0%23) `147.2K 🔥`
1. [射雕英雄传侠之大者金像奖0提 (Legend of the Condor Heroes: The Greatest Golden Statue Award 0 nominations)](https://s.weibo.com/weibo?q=%23%E5%B0%84%E9%9B%95%E8%8B%B1%E9%9B%84%E4%BC%A0%E4%BE%A0%E4%B9%8B%E5%A4%A7%E8%80%85%E9%87%91%E5%83%8F%E5%A5%960%E6%8F%90%23) `101.7K 🔥`
1. [爱泼斯坦别墅内老虎标本栩栩如生 (Stuffed tiger comes to life in Epstein's villa)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%88%AB%E5%A2%85%E5%86%85%E8%80%81%E8%99%8E%E6%A0%87%E6%9C%AC%E6%A0%A9%E6%A0%A9%E5%A6%82%E7%94%9F%23) `99.1K 🔥`
1. [德云社封箱 (Deyunshe sealing)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E4%BA%91%E7%A4%BE%E5%B0%81%E7%AE%B1%23) `98.6K 🔥`
1. [陈星旭 情商](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%20%E6%83%85%E5%95%86%23) `98.1K 🔥`
1. [郑则仕因不想终生注射药物开始跑步 (Zheng Zeshi started running because he didn’t want to inject drugs for life)](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%88%99%E4%BB%95%E5%9B%A0%E4%B8%8D%E6%83%B3%E7%BB%88%E7%94%9F%E6%B3%A8%E5%B0%84%E8%8D%AF%E7%89%A9%E5%BC%80%E5%A7%8B%E8%B7%91%E6%AD%A5%23) `95.5K 🔥`
1. [印度大一男生求婚遭拒将女生枪杀](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A4%A7%E4%B8%80%E7%94%B7%E7%94%9F%E6%B1%82%E5%A9%9A%E9%81%AD%E6%8B%92%E5%B0%86%E5%A5%B3%E7%94%9F%E6%9E%AA%E6%9D%80%23) `88.3K 🔥`
1. [林孝埈捂脸长时间低头](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%8D%82%E8%84%B8%E9%95%BF%E6%97%B6%E9%97%B4%E4%BD%8E%E5%A4%B4%23) `80.0K 🔥`
1. [张杰给100多名员工发超万元红包 (Zhang Jie distributed over 10,000 yuan in red envelopes to more than 100 employees)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E7%BB%99100%E5%A4%9A%E5%90%8D%E5%91%98%E5%B7%A5%E5%8F%91%E8%B6%85%E4%B8%87%E5%85%83%E7%BA%A2%E5%8C%85%23) `76.9K 🔥`
1. [平手友梨奈结婚](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E6%89%8B%E5%8F%8B%E6%A2%A8%E5%A5%88%E7%BB%93%E5%A9%9A%23) `71.8K 🔥`
1. [毒皇后扮演者被解雇原因曝光 (The reason why the actor who played the Poison Queen was fired is revealed)](https://s.weibo.com/weibo?q=%23%E6%AF%92%E7%9A%87%E5%90%8E%E6%89%AE%E6%BC%94%E8%80%85%E8%A2%AB%E8%A7%A3%E9%9B%87%E5%8E%9F%E5%9B%A0%E6%9B%9D%E5%85%89%23) `228.2K 🔥` `-78%`
1. [海外已夸爆Seedance2.0](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%A4%96%E5%B7%B2%E5%A4%B8%E7%88%86Seedance2.0%23) `169.2K 🔥` `-24%`
1. [男子为避酒店春节涨价花1万多租房 (Man spends more than 10,000 yuan on rent to avoid hotel price increase during Spring Festival)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%BA%E9%81%BF%E9%85%92%E5%BA%97%E6%98%A5%E8%8A%82%E6%B6%A8%E4%BB%B7%E8%8A%B11%E4%B8%87%E5%A4%9A%E7%A7%9F%E6%88%BF%23) `154.3K 🔥` `-79%`
1. [韩媒质问这还是体育吗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92%E8%B4%A8%E9%97%AE%E8%BF%99%E8%BF%98%E6%98%AF%E4%BD%93%E8%82%B2%E5%90%97%23) `104.6K 🔥` `-33%`

Updated at 2026-02-11 09:07:43

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
