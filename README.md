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

1. [现在就出发4 (Let's go now 4)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `1.4M 🔥` `NEW`
1. [台风红霞已加强为强台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%E5%B7%B2%E5%8A%A0%E5%BC%BA%E4%B8%BA%E5%BC%BA%E5%8F%B0%E9%A3%8E%23) `993.9K 🔥` `NEW`
1. [时光代理人时针出逃](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%85%89%E4%BB%A3%E7%90%86%E4%BA%BA%E6%97%B6%E9%92%88%E5%87%BA%E9%80%83%23) `813.0K 🔥` `NEW`
1. [新冠疫情升至中流行水平](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%86%A0%E7%96%AB%E6%83%85%E5%8D%87%E8%87%B3%E4%B8%AD%E6%B5%81%E8%A1%8C%E6%B0%B4%E5%B9%B3%23) `303.1K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `301.1K 🔥` `NEW`
1. [罗永浩怒斥电视机厂商](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%80%92%E6%96%A5%E7%94%B5%E8%A7%86%E6%9C%BA%E5%8E%82%E5%95%86%23) `299.1K 🔥` `NEW`
1. [黄仁勋X账号](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8BX%E8%B4%A6%E5%8F%B7%23) `298.4K 🔥` `NEW`
1. [好心疼房主任](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%BF%83%E7%96%BC%E6%88%BF%E4%B8%BB%E4%BB%BB%23) `297.6K 🔥` `NEW`
1. [贷款5万被收9600元服务费](https://s.weibo.com/weibo?q=%23%E8%B4%B7%E6%AC%BE5%E4%B8%87%E8%A2%AB%E6%94%B69600%E5%85%83%E6%9C%8D%E5%8A%A1%E8%B4%B9%23) `297.0K 🔥` `NEW`
1. [王一博与粉丝雨中双向奔赴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%8E%E7%B2%89%E4%B8%9D%E9%9B%A8%E4%B8%AD%E5%8F%8C%E5%90%91%E5%A5%94%E8%B5%B4%23) `296.5K 🔥` `NEW`
1. [鹿晗贵阳音乐节人气 (Lu Han Guiyang Music Festival Popularity)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%B4%B5%E9%98%B3%E9%9F%B3%E4%B9%90%E8%8A%82%E4%BA%BA%E6%B0%94%23) `294.6K 🔥` `NEW`
1. [朱志鑫solo全身广告位](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABsolo%E5%85%A8%E8%BA%AB%E5%B9%BF%E5%91%8A%E4%BD%8D%23) `293.4K 🔥` `NEW`
1. [韩网热议车银优近照](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E7%83%AD%E8%AE%AE%E8%BD%A6%E9%93%B6%E4%BC%98%E8%BF%91%E7%85%A7%23) `292.0K 🔥` `NEW`
1. [AG让二追三LGD](https://s.weibo.com/weibo?q=%23AG%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89LGD%23) `227.8K 🔥` `NEW`
1. [鹿晗给粉丝准备无人机表演](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%BB%99%E7%B2%89%E4%B8%9D%E5%87%86%E5%A4%87%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%A1%A8%E6%BC%94%23) `217.4K 🔥` `NEW`
1. [李斯丹妮被淘汰](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%AF%E4%B8%B9%E5%A6%AE%E8%A2%AB%E6%B7%98%E6%B1%B0%23) `205.7K 🔥` `NEW`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `205.6K 🔥` `NEW`
1. [2026首个台风红色预警](https://s.weibo.com/weibo?q=%232026%E9%A6%96%E4%B8%AA%E5%8F%B0%E9%A3%8E%E7%BA%A2%E8%89%B2%E9%A2%84%E8%AD%A6%23) `195.7K 🔥` `NEW`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `1.3M 🔥` `+32%`
1. [王楚钦梁靖崑双打1比2](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%A2%81%E9%9D%96%E5%B4%91%E5%8F%8C%E6%89%931%E6%AF%942%23) `921.9K 🔥` `+62%`
1. [侯明昊裤子破了 (Hou Minghao's pants are torn)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E8%A3%A4%E5%AD%90%E7%A0%B4%E4%BA%86%23) `703.8K 🔥` `+197%`
1. [一诺守约 (Keep a promise)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%AE%88%E7%BA%A6%23) `432.4K 🔥`
1. [台风红霞 (Typhoon Hongxia)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%23) `303.7K 🔥`
1. [原来不是生病了而是年纪到了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E7%94%9F%E7%97%85%E4%BA%86%E8%80%8C%E6%98%AF%E5%B9%B4%E7%BA%AA%E5%88%B0%E4%BA%86%23) `295.0K 🔥`
1. [中方反制14家欧洲企业后欧盟还嘴硬](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%8F%8D%E5%88%B614%E5%AE%B6%E6%AC%A7%E6%B4%B2%E4%BC%81%E4%B8%9A%E5%90%8E%E6%AC%A7%E7%9B%9F%E8%BF%98%E5%98%B4%E7%A1%AC%23) `285.7K 🔥`
1. [携程被罚51.79亿 (Ctrip was fined 5.179 billion)](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A51.79%E4%BA%BF%23) `285.4K 🔥`
1. [闪婚1天就离婚女方返还16万彩礼](https://s.weibo.com/weibo?q=%23%E9%97%AA%E5%A9%9A1%E5%A4%A9%E5%B0%B1%E7%A6%BB%E5%A9%9A%E5%A5%B3%E6%96%B9%E8%BF%94%E8%BF%9816%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `241.8K 🔥`
1. [付辛博39岁状态冻龄](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%BE%9B%E5%8D%9A39%E5%B2%81%E7%8A%B6%E6%80%81%E5%86%BB%E9%BE%84%23) `220.6K 🔥`
1. [TOP唱了梦](https://s.weibo.com/weibo?q=%23TOP%E5%94%B1%E4%BA%86%E6%A2%A6%23) `202.9K 🔥`
1. [退钱哥在美国40几天瘦脱相](https://s.weibo.com/weibo?q=%23%E9%80%80%E9%92%B1%E5%93%A5%E5%9C%A8%E7%BE%8E%E5%9B%BD40%E5%87%A0%E5%A4%A9%E7%98%A6%E8%84%B1%E7%9B%B8%23) `190.4K 🔥`
1. [数读我国农业农村经济稳中向好](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E6%88%91%E5%9B%BD%E5%86%9C%E4%B8%9A%E5%86%9C%E6%9D%91%E7%BB%8F%E6%B5%8E%E7%A8%B3%E4%B8%AD%E5%90%91%E5%A5%BD%23) `1.1M 🔥` `-22%`
1. [正颌手术做反了女孩说迎接她的是毁灭](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E9%A2%8C%E6%89%8B%E6%9C%AF%E5%81%9A%E5%8F%8D%E4%BA%86%E5%A5%B3%E5%AD%A9%E8%AF%B4%E8%BF%8E%E6%8E%A5%E5%A5%B9%E7%9A%84%E6%98%AF%E6%AF%81%E7%81%AD%23) `894.1K 🔥` `-48%`
1. [谢霆锋演唱会状态](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8A%B6%E6%80%81%23) `717.8K 🔥` `-41%`
1. [黄灿灿370元做的丑美甲 (Huang Cancan’s ugly manicure for 370 yuan)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF370%E5%85%83%E5%81%9A%E7%9A%84%E4%B8%91%E7%BE%8E%E7%94%B2%23) `302.5K 🔥` `-38%`
1. [c83 难听 (c83 ugly)](https://s.weibo.com/weibo?q=%23c83%20%E9%9A%BE%E5%90%AC%23) `301.8K 🔥` `-82%`
1. [闫闯回应退赛](https://s.weibo.com/weibo?q=%23%E9%97%AB%E9%97%AF%E5%9B%9E%E5%BA%94%E9%80%80%E8%B5%9B%23) `300.7K 🔥` `-51%`
1. [日本确认南鸟岛海泥含中重稀土](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%A1%AE%E8%AE%A4%E5%8D%97%E9%B8%9F%E5%B2%9B%E6%B5%B7%E6%B3%A5%E5%90%AB%E4%B8%AD%E9%87%8D%E7%A8%80%E5%9C%9F%23) `299.5K 🔥` `-21%`
1. [李权哲高铁占座](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9D%83%E5%93%B2%E9%AB%98%E9%93%81%E5%8D%A0%E5%BA%A7%23) `296.0K 🔥` `-39%`
1. [6分06秒结束比赛](https://s.weibo.com/weibo?q=%236%E5%88%8606%E7%A7%92%E7%BB%93%E6%9D%9F%E6%AF%94%E8%B5%9B%23) `293.1K 🔥` `-40%`
1. [中国女排0比3土耳其女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%920%E6%AF%943%E5%9C%9F%E8%80%B3%E5%85%B6%E5%A5%B3%E6%8E%92%23) `291.8K 🔥` `-64%`
1. [三国第一部争洛阳撤档](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%9B%BD%E7%AC%AC%E4%B8%80%E9%83%A8%E4%BA%89%E6%B4%9B%E9%98%B3%E6%92%A4%E6%A1%A3%23) `285.3K 🔥` `-41%`
1. [杨幂就剩两部待播剧了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%B0%B1%E5%89%A9%E4%B8%A4%E9%83%A8%E5%BE%85%E6%92%AD%E5%89%A7%E4%BA%86%23) `256.2K 🔥` `-42%`
1. [严浩翔看到王一珩淘汰的表情](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9C%8B%E5%88%B0%E7%8E%8B%E4%B8%80%E7%8F%A9%E6%B7%98%E6%B1%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `241.4K 🔥` `-35%`
1. [罗云熙程潇对我眼睛很好](https://s.weibo.com/weibo?q=%23%E7%BD%97%E4%BA%91%E7%86%99%E7%A8%8B%E6%BD%87%E5%AF%B9%E6%88%91%E7%9C%BC%E7%9D%9B%E5%BE%88%E5%A5%BD%23) `239.6K 🔥` `-33%`
1. [西班牙21次犯规零牌 (Spain 21 fouls and zero cards)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%9921%E6%AC%A1%E7%8A%AF%E8%A7%84%E9%9B%B6%E7%89%8C%23) `237.7K 🔥` `-47%`
1. [第二代身份证内部根本没有磁条](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%8C%E4%BB%A3%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%86%85%E9%83%A8%E6%A0%B9%E6%9C%AC%E6%B2%A1%E6%9C%89%E7%A3%81%E6%9D%A1%23) `227.1K 🔥` `-40%`
1. [闫闯退赛 (Yan Chuang withdrew from the competition)](https://s.weibo.com/weibo?q=%23%E9%97%AB%E9%97%AF%E9%80%80%E8%B5%9B%23) `210.2K 🔥` `-44%`
1. [孙女的微信状态只有爷爷当真了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%A5%B3%E7%9A%84%E5%BE%AE%E4%BF%A1%E7%8A%B6%E6%80%81%E5%8F%AA%E6%9C%89%E7%88%B7%E7%88%B7%E5%BD%93%E7%9C%9F%E4%BA%86%23) `204.3K 🔥` `-62%`
1. [苏新皓囍神级solo (Su Xinhao's god-level solo)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%9B%8D%E7%A5%9E%E7%BA%A7solo%23) `201.0K 🔥` `-59%`
1. [为什么携程被罚最重 (Why Ctrip was fined the most)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A%E6%9C%80%E9%87%8D%23) `192.7K 🔥` `-49%`
1. [虞书欣沈月做的菜单 (Menu made by Yu Shuxin and Shen Yue)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%B2%88%E6%9C%88%E5%81%9A%E7%9A%84%E8%8F%9C%E5%8D%95%23) `190.3K 🔥` `-48%`

Updated at 2026-07-25 23:40:55

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
