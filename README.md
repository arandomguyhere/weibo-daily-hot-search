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

1. [马杜罗彻夜高喊我是总统正被虐待 (Maduro shouted all night that I am the president and is being abused)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%9C%E7%BD%97%E5%BD%BB%E5%A4%9C%E9%AB%98%E5%96%8A%E6%88%91%E6%98%AF%E6%80%BB%E7%BB%9F%E6%AD%A3%E8%A2%AB%E8%99%90%E5%BE%85%23) `794.2K 🔥` `NEW`
1. [苏醒为胡辣汤事件道歉](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E4%B8%BA%E8%83%A1%E8%BE%A3%E6%B1%A4%E4%BA%8B%E4%BB%B6%E9%81%93%E6%AD%89%23) `465.9K 🔥` `NEW`
1. [卡萨帝首创AI细胞级解冻冰箱](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E8%90%A8%E5%B8%9D%E9%A6%96%E5%88%9BAI%E7%BB%86%E8%83%9E%E7%BA%A7%E8%A7%A3%E5%86%BB%E5%86%B0%E7%AE%B1%23) `167.7K 🔥` `NEW`
1. [电子烟加兽用麻醉药](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%AD%90%E7%83%9F%E5%8A%A0%E5%85%BD%E7%94%A8%E9%BA%BB%E9%86%89%E8%8D%AF%23) `152.7K 🔥` `NEW`
1. [国家摄影队独有的两会时间](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E6%91%84%E5%BD%B1%E9%98%9F%E7%8B%AC%E6%9C%89%E7%9A%84%E4%B8%A4%E4%BC%9A%E6%97%B6%E9%97%B4%23) `151.5K 🔥` `NEW`
1. [林依晨谈做脑部手术经历](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E8%B0%88%E5%81%9A%E8%84%91%E9%83%A8%E6%89%8B%E6%9C%AF%E7%BB%8F%E5%8E%86%23) `150.8K 🔥` `NEW`
1. [25岁硕士曝光剧本直播间被死亡威胁](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E7%A1%95%E5%A3%AB%E6%9B%9D%E5%85%89%E5%89%A7%E6%9C%AC%E7%9B%B4%E6%92%AD%E9%97%B4%E8%A2%AB%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `150.2K 🔥` `NEW`
1. [孙杨张豆豆俄罗斯街头牵手举高高](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E4%BF%84%E7%BD%97%E6%96%AF%E8%A1%97%E5%A4%B4%E7%89%B5%E6%89%8B%E4%B8%BE%E9%AB%98%E9%AB%98%23) `149.6K 🔥` `NEW`
1. [温瑞博4比2战胜邱党](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A4%E6%AF%942%E6%88%98%E8%83%9C%E9%82%B1%E5%85%9A%23) `149.1K 🔥` `NEW`
1. [女子错转23万给老赖无法追回](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%94%99%E8%BD%AC23%E4%B8%87%E7%BB%99%E8%80%81%E8%B5%96%E6%97%A0%E6%B3%95%E8%BF%BD%E5%9B%9E%23) `121.7K 🔥` `NEW`
1. [意大利知名品牌钢笔是国内生产 (Well-known Italian brand pens are produced in China)](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E7%9F%A5%E5%90%8D%E5%93%81%E7%89%8C%E9%92%A2%E7%AC%94%E6%98%AF%E5%9B%BD%E5%86%85%E7%94%9F%E4%BA%A7%23) `120.9K 🔥` `NEW`
1. [孕妇专用化妆品实为普通化妆品](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E4%B8%93%E7%94%A8%E5%8C%96%E5%A6%86%E5%93%81%E5%AE%9E%E4%B8%BA%E6%99%AE%E9%80%9A%E5%8C%96%E5%A6%86%E5%93%81%23) `118.2K 🔥` `NEW`
1. [沈月大大方方聊生理期不适](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%E8%81%8A%E7%94%9F%E7%90%86%E6%9C%9F%E4%B8%8D%E9%80%82%23) `105.9K 🔥` `NEW`
1. [孙颖莎vs蒯曼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E8%92%AF%E6%9B%BC%23) `103.3K 🔥` `NEW`
1. [我妈做饭vs我做饭](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A6%88%E5%81%9A%E9%A5%ADvs%E6%88%91%E5%81%9A%E9%A5%AD%23) `102.9K 🔥` `NEW`
1. [耳帝说内娱音综彻底放下身段了](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E8%AF%B4%E5%86%85%E5%A8%B1%E9%9F%B3%E7%BB%BC%E5%BD%BB%E5%BA%95%E6%94%BE%E4%B8%8B%E8%BA%AB%E6%AE%B5%E4%BA%86%23) `95.8K 🔥` `NEW`
1. [猫 原生家庭的痛谁懂](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E5%8E%9F%E7%94%9F%E5%AE%B6%E5%BA%AD%E7%9A%84%E7%97%9B%E8%B0%81%E6%87%82%23) `89.6K 🔥` `NEW`
1. [演员董晴的含金量还在上升](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E8%91%A3%E6%99%B4%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `88.5K 🔥` `NEW`
1. [0含驼量香精乳品冒充进口驼奶](https://s.weibo.com/weibo?q=%230%E5%90%AB%E9%A9%BC%E9%87%8F%E9%A6%99%E7%B2%BE%E4%B9%B3%E5%93%81%E5%86%92%E5%85%85%E8%BF%9B%E5%8F%A3%E9%A9%BC%E5%A5%B6%23) `88.4K 🔥` `NEW`
1. [老年人如何适应AI时代](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B9%B4%E4%BA%BA%E5%A6%82%E4%BD%95%E9%80%82%E5%BA%94AI%E6%97%B6%E4%BB%A3%23) `88.4K 🔥` `NEW`
1. [刘耀文叫王俊凯必带师兄 (Liu Yaowen asked Wang Junkai to bring his senior brother with him)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%8F%AB%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%BF%85%E5%B8%A6%E5%B8%88%E5%85%84%23) `83.7K 🔥` `NEW`
1. [俞灏明怕苏醒靠陆虎开路虎](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E7%81%8F%E6%98%8E%E6%80%95%E8%8B%8F%E9%86%92%E9%9D%A0%E9%99%86%E8%99%8E%E5%BC%80%E8%B7%AF%E8%99%8E%23) `81.8K 🔥` `NEW`
1. [吴艳妮为拉塞尔颁奖](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE%E4%B8%BA%E6%8B%89%E5%A1%9E%E5%B0%94%E9%A2%81%E5%A5%96%23) `79.8K 🔥` `NEW`
1. [徐冬冬 出道没有少女期](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%86%AC%E5%86%AC%20%E5%87%BA%E9%81%93%E6%B2%A1%E6%9C%89%E5%B0%91%E5%A5%B3%E6%9C%9F%23) `78.8K 🔥` `NEW`
1. [陈哲远骨折是自己洗澡摔的](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E9%AA%A8%E6%8A%98%E6%98%AF%E8%87%AA%E5%B7%B1%E6%B4%97%E6%BE%A1%E6%91%94%E7%9A%84%23) `71.5K 🔥` `NEW`
1. [星穹铁道白厄](https://s.weibo.com/weibo?q=%23%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%E7%99%BD%E5%8E%84%23) `69.1K 🔥` `NEW`
1. [申论考100分就能上岸了](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%AE%BA%E8%80%83100%E5%88%86%E5%B0%B1%E8%83%BD%E4%B8%8A%E5%B2%B8%E4%BA%86%23) `217.8K 🔥` `+30%`
1. [省考](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%23) `1.1M 🔥`
1. [十五五向你发出奋斗邀请 (The 15th Five-Year Plan sends you an invitation to struggle.)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E5%90%91%E4%BD%A0%E5%8F%91%E5%87%BA%E5%A5%8B%E6%96%97%E9%82%80%E8%AF%B7%23) `630.9K 🔥`
1. [近半老年人在租房时被拒绝](https://s.weibo.com/weibo?q=%23%E8%BF%91%E5%8D%8A%E8%80%81%E5%B9%B4%E4%BA%BA%E5%9C%A8%E7%A7%9F%E6%88%BF%E6%97%B6%E8%A2%AB%E6%8B%92%E7%BB%9D%23) `152.3K 🔥`
1. [田曦薇张凌赫经纪人依旧纯恨中 (Tian Xiwei, Zhang Linghe’s manager is still in pure hatred)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%BB%8F%E7%BA%AA%E4%BA%BA%E4%BE%9D%E6%97%A7%E7%BA%AF%E6%81%A8%E4%B8%AD%23) `151.2K 🔥`
1. [人民大会堂的热水瓶用了30年](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%E7%9A%84%E7%83%AD%E6%B0%B4%E7%93%B6%E7%94%A8%E4%BA%8630%E5%B9%B4%23) `123.2K 🔥`
1. [第31届白玉兰奖 (The 31st Magnolia Award)](https://s.weibo.com/weibo?q=%23%E7%AC%AC31%E5%B1%8A%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%23) `118.5K 🔥`
1. [多方回应火锅店老板砍伤广场舞人群](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E7%81%AB%E9%94%85%E5%BA%97%E8%80%81%E6%9D%BF%E7%A0%8D%E4%BC%A4%E5%B9%BF%E5%9C%BA%E8%88%9E%E4%BA%BA%E7%BE%A4%23) `113.8K 🔥`
1. [女孩用胡萝卜啃出70cm高黄鹤楼 (Girl gnaws out a 70cm tall Yellow Crane Tower from carrots)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%94%A8%E8%83%A1%E8%90%9D%E5%8D%9C%E5%95%83%E5%87%BA70cm%E9%AB%98%E9%BB%84%E9%B9%A4%E6%A5%BC%23) `101.2K 🔥`
1. [原来被老天爷追着喂饭是这样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%A2%AB%E8%80%81%E5%A4%A9%E7%88%B7%E8%BF%BD%E7%9D%80%E5%96%82%E9%A5%AD%E6%98%AF%E8%BF%99%E6%A0%B7%23) `96.9K 🔥`
1. [申论 (Arguments)](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%AE%BA%23) `195.9K 🔥` `-33%`
1. [丰巢超时收5毛钱恶心又得咽下](https://s.weibo.com/weibo?q=%23%E4%B8%B0%E5%B7%A2%E8%B6%85%E6%97%B6%E6%94%B65%E6%AF%9B%E9%92%B1%E6%81%B6%E5%BF%83%E5%8F%88%E5%BE%97%E5%92%BD%E4%B8%8B%23) `153.2K 🔥` `-43%`
1. [省考图推 (Provincial Examination Tuition)](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%E5%9B%BE%E6%8E%A8%23) `132.1K 🔥` `-85%`
1. [伊朗30枚超重导弹袭击以色列 (Iran attacks Israel with 30 super-heavy missiles)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%9730%E6%9E%9A%E8%B6%85%E9%87%8D%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%23) `129.5K 🔥` `-34%`
1. [杨幂赵丽颖 白玉兰 (Yang Mi, Zhao Liying, Magnolia)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E7%99%BD%E7%8E%89%E5%85%B0%23) `116.3K 🔥` `-22%`
1. [我们的少年时代2 (Our Boyhood 2)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `114.3K 🔥` `-23%`
1. [刘昊然周冬雨同款帽子](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E5%91%A8%E5%86%AC%E9%9B%A8%E5%90%8C%E6%AC%BE%E5%B8%BD%E5%AD%90%23) `113.0K 🔥` `-28%`
1. [鞠婧祎杂志开售](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%9D%82%E5%BF%97%E5%BC%80%E5%94%AE%23) `110.3K 🔥` `-27%`
1. [弟弟的脐带血15年后救了哥哥](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E7%9A%84%E8%84%90%E5%B8%A6%E8%A1%8015%E5%B9%B4%E5%90%8E%E6%95%91%E4%BA%86%E5%93%A5%E5%93%A5%23) `106.4K 🔥` `-29%`
1. [周云杰家电界最严厉的父亲](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BA%91%E6%9D%B0%E5%AE%B6%E7%94%B5%E7%95%8C%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E4%BA%B2%23) `106.1K 🔥` `-28%`
1. [享界粉白新色亮相上海AWE (Xiangjie’s new pink and white color debuts at Shanghai AWE)](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8C%E7%B2%89%E7%99%BD%E6%96%B0%E8%89%B2%E4%BA%AE%E7%9B%B8%E4%B8%8A%E6%B5%B7AWE%23) `103.0K 🔥` `-31%`
1. [男子狂扇自己称后悔花10万再婚](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%8B%82%E6%89%87%E8%87%AA%E5%B7%B1%E7%A7%B0%E5%90%8E%E6%82%94%E8%8A%B110%E4%B8%87%E5%86%8D%E5%A9%9A%23) `88.4K 🔥` `-47%`
1. [何炅逞能公主抱导致肩伤](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E9%80%9E%E8%83%BD%E5%85%AC%E4%B8%BB%E6%8A%B1%E5%AF%BC%E8%87%B4%E8%82%A9%E4%BC%A4%23) `87.2K 🔥` `-58%`
1. [拉塞尔夺F1中国站冲刺赛冠军 (Russell wins F1 China sprint championship)](https://s.weibo.com/weibo?q=%23%E6%8B%89%E5%A1%9E%E5%B0%94%E5%A4%BAF1%E4%B8%AD%E5%9B%BD%E7%AB%99%E5%86%B2%E5%88%BA%E8%B5%9B%E5%86%A0%E5%86%9B%23) `86.1K 🔥` `-27%`
1. [严屹宽 别让老霸总演这些](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%20%E5%88%AB%E8%AE%A9%E8%80%81%E9%9C%B8%E6%80%BB%E6%BC%94%E8%BF%99%E4%BA%9B%23) `68.7K 🔥` `-40%`

Updated at 2026-03-14 13:52:26

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
