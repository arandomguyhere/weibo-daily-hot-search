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

1. [中国小写的c惊艳了世界 (Chinese lowercase c amazes the world)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%86%99%E7%9A%84c%E6%83%8A%E8%89%B3%E4%BA%86%E4%B8%96%E7%95%8C%23) `144.4K 🔥` `NEW`
1. [携程垄断](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E5%9E%84%E6%96%AD%23) `36.1K 🔥` `NEW`
1. [房企回应被LV起诉四叶雕花侵权](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%BC%81%E5%9B%9E%E5%BA%94%E8%A2%ABLV%E8%B5%B7%E8%AF%89%E5%9B%9B%E5%8F%B6%E9%9B%95%E8%8A%B1%E4%BE%B5%E6%9D%83%23) `35.8K 🔥` `NEW`
1. [小狗吹空调看到女主人辅导作业立刻溜走](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%90%B9%E7%A9%BA%E8%B0%83%E7%9C%8B%E5%88%B0%E5%A5%B3%E4%B8%BB%E4%BA%BA%E8%BE%85%E5%AF%BC%E4%BD%9C%E4%B8%9A%E7%AB%8B%E5%88%BB%E6%BA%9C%E8%B5%B0%23) `35.0K 🔥` `NEW`
1. [台风红霞已加强为强台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%E5%B7%B2%E5%8A%A0%E5%BC%BA%E4%B8%BA%E5%BC%BA%E5%8F%B0%E9%A3%8E%23) `358.4K 🔥`
1. [台风红霞](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%23) `173.2K 🔥`
1. [张雅琪 中餐厅](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E4%B8%AD%E9%A4%90%E5%8E%85%23) `143.1K 🔥` `-32%`
1. [2026首个台风红色预警](https://s.weibo.com/weibo?q=%232026%E9%A6%96%E4%B8%AA%E5%8F%B0%E9%A3%8E%E7%BA%A2%E8%89%B2%E9%A2%84%E8%AD%A6%23) `131.6K 🔥` `-37%`
1. [罗永浩怒斥电视机厂商](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%80%92%E6%96%A5%E7%94%B5%E8%A7%86%E6%9C%BA%E5%8E%82%E5%95%86%23) `120.0K 🔥` `-32%`
1. [现在就出发4 (Let's go now 4)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `90.5K 🔥` `-59%`
1. [存款有100万的人舍不得花30万买车](https://s.weibo.com/weibo?q=%23%E5%AD%98%E6%AC%BE%E6%9C%89100%E4%B8%87%E7%9A%84%E4%BA%BA%E8%88%8D%E4%B8%8D%E5%BE%97%E8%8A%B130%E4%B8%87%E4%B9%B0%E8%BD%A6%23) `80.8K 🔥` `-40%`
1. [世界杯最伟大的照片 (The greatest photos from the World Cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E7%85%A7%E7%89%87%23) `69.8K 🔥` `-40%`
1. [八仙 (the Eight Immortals)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `69.6K 🔥` `-40%`
1. [新冠疫情升至中流行水平](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%86%A0%E7%96%AB%E6%83%85%E5%8D%87%E8%87%B3%E4%B8%AD%E6%B5%81%E8%A1%8C%E6%B0%B4%E5%B9%B3%23) `67.6K 🔥` `-42%`
1. [张凌赫王楚然从秋千吻到床上 (Zhang Linghe and Wang Churan kissed from the swing to the bed)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%BB%8E%E7%A7%8B%E5%8D%83%E5%90%BB%E5%88%B0%E5%BA%8A%E4%B8%8A%23) `67.3K 🔥` `-42%`
1. [有药店店员不知新冠有特效药](https://s.weibo.com/weibo?q=%23%E6%9C%89%E8%8D%AF%E5%BA%97%E5%BA%97%E5%91%98%E4%B8%8D%E7%9F%A5%E6%96%B0%E5%86%A0%E6%9C%89%E7%89%B9%E6%95%88%E8%8D%AF%23) `67.0K 🔥` `-42%`
1. [被裁掉的女孩播放破2亿](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%A3%81%E6%8E%89%E7%9A%84%E5%A5%B3%E5%AD%A9%E6%92%AD%E6%94%BE%E7%A0%B42%E4%BA%BF%23) `65.4K 🔥` `-35%`
1. [侯明昊裤子破了](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E8%A3%A4%E5%AD%90%E7%A0%B4%E4%BA%86%23) `64.0K 🔥` `-45%`
1. [正颌手术做反了女孩说迎接她的是毁灭](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E9%A2%8C%E6%89%8B%E6%9C%AF%E5%81%9A%E5%8F%8D%E4%BA%86%E5%A5%B3%E5%AD%A9%E8%AF%B4%E8%BF%8E%E6%8E%A5%E5%A5%B9%E7%9A%84%E6%98%AF%E6%AF%81%E7%81%AD%23) `53.2K 🔥` `-53%`
1. [谢霆锋演唱会状态 (Nicholas Tse's concert status)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8A%B6%E6%80%81%23) `49.6K 🔥` `-46%`
1. [张凌赫回吻王楚然](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%90%BB%E7%8E%8B%E6%A5%9A%E7%84%B6%23) `49.1K 🔥` `-50%`
1. [数字经济交出亮眼成绩单 (The digital economy delivers impressive results)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%97%E7%BB%8F%E6%B5%8E%E4%BA%A4%E5%87%BA%E4%BA%AE%E7%9C%BC%E6%88%90%E7%BB%A9%E5%8D%95%23) `40.4K 🔥` `-81%`
1. [夏季赛S组大结局](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%AD%A3%E8%B5%9BS%E7%BB%84%E5%A4%A7%E7%BB%93%E5%B1%80%23) `39.6K 🔥` `-52%`
1. [原来不是生病了而是年纪到了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E7%94%9F%E7%97%85%E4%BA%86%E8%80%8C%E6%98%AF%E5%B9%B4%E7%BA%AA%E5%88%B0%E4%BA%86%23) `39.2K 🔥` `-53%`
1. [全国每人吃5斤小龙虾才能吃完](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%AF%8F%E4%BA%BA%E5%90%835%E6%96%A4%E5%B0%8F%E9%BE%99%E8%99%BE%E6%89%8D%E8%83%BD%E5%90%83%E5%AE%8C%23) `39.1K 🔥` `-53%`
1. [虞书欣沈月做的菜单 (Menu made by Yu Shuxin and Shen Yue)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%B2%88%E6%9C%88%E5%81%9A%E7%9A%84%E8%8F%9C%E5%8D%95%23) `38.3K 🔥` `-54%`
1. [鹿晗贵阳音乐节人气](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%B4%B5%E9%98%B3%E9%9F%B3%E4%B9%90%E8%8A%82%E4%BA%BA%E6%B0%94%23) `38.3K 🔥` `-54%`
1. [西班牙21次犯规零牌](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%9921%E6%AC%A1%E7%8A%AF%E8%A7%84%E9%9B%B6%E7%89%8C%23) `38.2K 🔥` `-54%`
1. [陈楚生三亚演唱会伴手礼](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%E4%B8%89%E4%BA%9A%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `37.7K 🔥` `-55%`
1. [杨幂就剩两部待播剧了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%B0%B1%E5%89%A9%E4%B8%A4%E9%83%A8%E5%BE%85%E6%92%AD%E5%89%A7%E4%BA%86%23) `37.4K 🔥` `-55%`
1. [AG让二追三LGD](https://s.weibo.com/weibo?q=%23AG%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89LGD%23) `37.0K 🔥` `-55%`
1. [闫闯退赛](https://s.weibo.com/weibo?q=%23%E9%97%AB%E9%97%AF%E9%80%80%E8%B5%9B%23) `36.1K 🔥` `-56%`
1. [携程被罚51.79亿](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A51.79%E4%BA%BF%23) `35.2K 🔥` `-57%`
1. [王楚钦梁靖崑双打1比2](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%A2%81%E9%9D%96%E5%B4%91%E5%8F%8C%E6%89%931%E6%AF%942%23) `34.5K 🔥` `-58%`
1. [严浩翔看到王一珩淘汰的表情 (Yan Haoxiang's expression when he saw Wang Yiheng eliminated)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9C%8B%E5%88%B0%E7%8E%8B%E4%B8%80%E7%8F%A9%E6%B7%98%E6%B1%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `34.4K 🔥` `-58%`
1. [功夫女足 (kung fu women's football)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `34.4K 🔥` `-58%`
1. [一诺守约 (Keep a promise)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%AE%88%E7%BA%A6%23) `32.4K 🔥` `-61%`
1. [朱志鑫solo全身广告位 (Zhu Zhixin’s solo full-body advertising space)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABsolo%E5%85%A8%E8%BA%AB%E5%B9%BF%E5%91%8A%E4%BD%8D%23) `32.1K 🔥` `-61%`
1. [6分06秒结束比赛](https://s.weibo.com/weibo?q=%236%E5%88%8606%E7%A7%92%E7%BB%93%E6%9D%9F%E6%AF%94%E8%B5%9B%23) `31.8K 🔥` `-61%`
1. [爸爸带娃玩手机孩子打翻烧水壶 (Dad was playing with his baby on his mobile phone and the child knocked over the kettle)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%B8%A6%E5%A8%83%E7%8E%A9%E6%89%8B%E6%9C%BA%E5%AD%A9%E5%AD%90%E6%89%93%E7%BF%BB%E7%83%A7%E6%B0%B4%E5%A3%B6%23) `31.7K 🔥` `-62%`
1. [张函瑞 变声期不是挡箭牌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%20%E5%8F%98%E5%A3%B0%E6%9C%9F%E4%B8%8D%E6%98%AF%E6%8C%A1%E7%AE%AD%E7%89%8C%23) `31.5K 🔥` `-62%`
1. [中国女排0比3土耳其女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%920%E6%AF%943%E5%9C%9F%E8%80%B3%E5%85%B6%E5%A5%B3%E6%8E%92%23) `31.4K 🔥` `-62%`
1. [金特务](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%89%B9%E5%8A%A1%23) `31.2K 🔥` `-62%`
1. [闫闯回应退赛 (Yan Chuang responded to withdrawing from the competition)](https://s.weibo.com/weibo?q=%23%E9%97%AB%E9%97%AF%E5%9B%9E%E5%BA%94%E9%80%80%E8%B5%9B%23) `30.3K 🔥` `-63%`
1. [侯明昊紧急形象管理](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E7%B4%A7%E6%80%A5%E5%BD%A2%E8%B1%A1%E7%AE%A1%E7%90%86%23) `30.3K 🔥` `-63%`
1. [付辛博39岁状态冻龄](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%BE%9B%E5%8D%9A39%E5%B2%81%E7%8A%B6%E6%80%81%E5%86%BB%E9%BE%84%23) `30.3K 🔥` `-63%`
1. [第二代身份证内部根本没有磁条](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%8C%E4%BB%A3%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%86%85%E9%83%A8%E6%A0%B9%E6%9C%AC%E6%B2%A1%E6%9C%89%E7%A3%81%E6%9D%A1%23) `30.3K 🔥` `-63%`
1. [三国第一部争洛阳撤档 (The first part of Three Kingdoms: Battle for Luoyang has been withdrawn)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%9B%BD%E7%AC%AC%E4%B8%80%E9%83%A8%E4%BA%89%E6%B4%9B%E9%98%B3%E6%92%A4%E6%A1%A3%23) `30.3K 🔥` `-63%`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `30.3K 🔥` `-63%`
1. [重庆黄色法拉利硬核截停滚落石球](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E9%BB%84%E8%89%B2%E6%B3%95%E6%8B%89%E5%88%A9%E7%A1%AC%E6%A0%B8%E6%88%AA%E5%81%9C%E6%BB%9A%E8%90%BD%E7%9F%B3%E7%90%83%23) `30.3K 🔥` `-63%`

Updated at 2026-07-26 03:56:23

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
