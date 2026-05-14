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

1. [克宫宣布普京即将访华 (Kremlin announces Putin’s upcoming visit to China)](https://s.weibo.com/weibo?q=%23%E5%85%8B%E5%AE%AB%E5%AE%A3%E5%B8%83%E6%99%AE%E4%BA%AC%E5%8D%B3%E5%B0%86%E8%AE%BF%E5%8D%8E%23) `1.5M 🔥` `NEW`
1. [天坛里的中国古建智慧](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%9D%9B%E9%87%8C%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%8F%A4%E5%BB%BA%E6%99%BA%E6%85%A7%23) `961.0K 🔥` `NEW`
1. [联想确认成为英伟达H200中国分销商](https://s.weibo.com/weibo?q=%23%E8%81%94%E6%83%B3%E7%A1%AE%E8%AE%A4%E6%88%90%E4%B8%BA%E8%8B%B1%E4%BC%9F%E8%BE%BEH200%E4%B8%AD%E5%9B%BD%E5%88%86%E9%94%80%E5%95%86%23) `770.1K 🔥` `NEW`
1. [想减肥可以去KTV吃饭](https://s.weibo.com/weibo?q=%23%E6%83%B3%E5%87%8F%E8%82%A5%E5%8F%AF%E4%BB%A5%E5%8E%BBKTV%E5%90%83%E9%A5%AD%23) `589.1K 🔥` `NEW`
1. [王楚钦不打球的时候长这样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%8D%E6%89%93%E7%90%83%E7%9A%84%E6%97%B6%E5%80%99%E9%95%BF%E8%BF%99%E6%A0%B7%23) `534.9K 🔥` `NEW`
1. [徐志胜疯狂暗示方媛不太方便](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E7%96%AF%E7%8B%82%E6%9A%97%E7%A4%BA%E6%96%B9%E5%AA%9B%E4%B8%8D%E5%A4%AA%E6%96%B9%E4%BE%BF%23) `532.6K 🔥` `NEW`
1. [黄仁勋谈中国AI发展](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%B0%88%E4%B8%AD%E5%9B%BDAI%E5%8F%91%E5%B1%95%23) `507.0K 🔥` `NEW`
1. [多方回应关闭支付功能后被扣184万](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%85%B3%E9%97%AD%E6%94%AF%E4%BB%98%E5%8A%9F%E8%83%BD%E5%90%8E%E8%A2%AB%E6%89%A3184%E4%B8%87%23) `502.0K 🔥` `NEW`
1. [张月首封销量](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%A6%96%E5%B0%81%E9%94%80%E9%87%8F%23) `483.9K 🔥` `NEW`
1. [泰兰尼斯被曝千元童鞋成本仅37元](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%85%B0%E5%B0%BC%E6%96%AF%E8%A2%AB%E6%9B%9D%E5%8D%83%E5%85%83%E7%AB%A5%E9%9E%8B%E6%88%90%E6%9C%AC%E4%BB%8537%E5%85%83%23) `446.9K 🔥` `NEW`
1. [周也戛纳淡紫色纱裙 (Zhou Ye Cannes lilac gauze dress)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E6%88%9B%E7%BA%B3%E6%B7%A1%E7%B4%AB%E8%89%B2%E7%BA%B1%E8%A3%99%23) `443.6K 🔥` `NEW`
1. [曝又一部剧男主跑路](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8F%88%E4%B8%80%E9%83%A8%E5%89%A7%E7%94%B7%E4%B8%BB%E8%B7%91%E8%B7%AF%23) `435.4K 🔥` `NEW`
1. [常华森主动找刘诗诗打招呼](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%8D%8E%E6%A3%AE%E4%B8%BB%E5%8A%A8%E6%89%BE%E5%88%98%E8%AF%97%E8%AF%97%E6%89%93%E6%8B%9B%E5%91%BC%23) `415.2K 🔥` `NEW`
1. [全红婵妈妈生病住院](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%A6%88%E5%A6%88%E7%94%9F%E7%97%85%E4%BD%8F%E9%99%A2%23) `326.5K 🔥` `NEW`
1. [男孩幽门螺杆菌阳性治疗4次全失败](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%B9%BD%E9%97%A8%E8%9E%BA%E6%9D%86%E8%8F%8C%E9%98%B3%E6%80%A7%E6%B2%BB%E7%96%974%E6%AC%A1%E5%85%A8%E5%A4%B1%E8%B4%A5%23) `282.8K 🔥` `NEW`
1. [A股尾盘风向突变](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B0%BE%E7%9B%98%E9%A3%8E%E5%90%91%E7%AA%81%E5%8F%98%23) `269.6K 🔥` `NEW`
1. [张本智和说世界排名不代表一切](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E4%B8%96%E7%95%8C%E6%8E%92%E5%90%8D%E4%B8%8D%E4%BB%A3%E8%A1%A8%E4%B8%80%E5%88%87%23) `244.7K 🔥` `NEW`
1. [姜乘澜韩妆速通预告](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E9%9F%A9%E5%A6%86%E9%80%9F%E9%80%9A%E9%A2%84%E5%91%8A%23) `243.9K 🔥` `NEW`
1. [女子喂宠物猪鼻蛇被咬手肿如气球](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%96%82%E5%AE%A0%E7%89%A9%E7%8C%AA%E9%BC%BB%E8%9B%87%E8%A2%AB%E5%92%AC%E6%89%8B%E8%82%BF%E5%A6%82%E6%B0%94%E7%90%83%23) `229.2K 🔥` `NEW`
1. [林大厨 不再依赖王俊凯算长大吗](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%A4%A7%E5%8E%A8%20%E4%B8%8D%E5%86%8D%E4%BE%9D%E8%B5%96%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `185.9K 🔥` `NEW`
1. [刘亦菲烈焰玫瑰裙 (Liu Yifei's flame rose dress)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%83%88%E7%84%B0%E7%8E%AB%E7%91%B0%E8%A3%99%23) `179.7K 🔥` `NEW`
1. [程十安已被注册59枚商标](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E5%8D%81%E5%AE%89%E5%B7%B2%E8%A2%AB%E6%B3%A8%E5%86%8C59%E6%9E%9A%E5%95%86%E6%A0%87%23) `162.6K 🔥` `NEW`
1. [特朗普说美高法门楣刻孔子无比荣幸](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E7%BE%8E%E9%AB%98%E6%B3%95%E9%97%A8%E6%A5%A3%E5%88%BB%E5%AD%94%E5%AD%90%E6%97%A0%E6%AF%94%E8%8D%A3%E5%B9%B8%23) `157.5K 🔥` `NEW`
1. [张凌赫出发GUCCI大秀](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%BA%E5%8F%91GUCCI%E5%A4%A7%E7%A7%80%23) `151.9K 🔥` `NEW`
1. [王楚钦被夸得不好意思了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%A2%AB%E5%A4%B8%E5%BE%97%E4%B8%8D%E5%A5%BD%E6%84%8F%E6%80%9D%E4%BA%86%23) `150.9K 🔥` `NEW`
1. [马斯克回复360度转圈拍人民大会堂](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%9B%9E%E5%A4%8D360%E5%BA%A6%E8%BD%AC%E5%9C%88%E6%8B%8D%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `531.1K 🔥` `+49%`
1. [鹿晗寸头](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%AF%B8%E5%A4%B4%23) `529.9K 🔥` `+49%`
1. [马斯克携幼子现身人民大会堂](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%90%BA%E5%B9%BC%E5%AD%90%E7%8E%B0%E8%BA%AB%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `528.5K 🔥` `+42%`
1. [宋亚轩和张杰女儿撞小名](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%92%8C%E5%BC%A0%E6%9D%B0%E5%A5%B3%E5%84%BF%E6%92%9E%E5%B0%8F%E5%90%8D%23) `527.6K 🔥` `+37%`
1. [黄景瑜微博改名](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%BE%AE%E5%8D%9A%E6%94%B9%E5%90%8D%23) `526.5K 🔥` `+44%`
1. [10种不舒服是抑郁症躯体化表现 (10 kinds of discomfort are somatic manifestations of depression)](https://s.weibo.com/weibo?q=%2310%E7%A7%8D%E4%B8%8D%E8%88%92%E6%9C%8D%E6%98%AF%E6%8A%91%E9%83%81%E7%97%87%E8%BA%AF%E4%BD%93%E5%8C%96%E8%A1%A8%E7%8E%B0%23) `424.1K 🔥` `+197%`
1. [方媛坚持要住男生单人间 (Fang Yuan insisted on staying in a single room for boys)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%9D%9A%E6%8C%81%E8%A6%81%E4%BD%8F%E7%94%B7%E7%94%9F%E5%8D%95%E4%BA%BA%E9%97%B4%23) `846.7K 🔥`
1. [爸爸当家5嘉宾阵容 (Daddy’s Home 5 guest lineup)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BD%93%E5%AE%B65%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `389.9K 🔥`
1. [男子1万买榴莲付11万几个月才发现](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%901%E4%B8%87%E4%B9%B0%E6%A6%B4%E8%8E%B2%E4%BB%9811%E4%B8%87%E5%87%A0%E4%B8%AA%E6%9C%88%E6%89%8D%E5%8F%91%E7%8E%B0%23) `349.2K 🔥`
1. [曝李昀锐孟子义昀牵孟绕解绑节奏](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%E8%A7%A3%E7%BB%91%E8%8A%82%E5%A5%8F%23) `311.4K 🔥`
1. [中美领导人致辞 (Speeches from Chinese and American leaders)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%A2%86%E5%AF%BC%E4%BA%BA%E8%87%B4%E8%BE%9E%23) `1.6M 🔥` `-48%`
1. [特朗普访华欢迎宴会](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%23) `905.0K 🔥` `-95%`
1. [给阿嬷的情书女主官宣入行](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%A5%B3%E4%B8%BB%E5%AE%98%E5%AE%A3%E5%85%A5%E8%A1%8C%23) `535.3K 🔥` `-23%`
1. [特朗普说二三把手我都不让他们来 (Trump said I won’t even let the second and third leaders come.)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%BA%8C%E4%B8%89%E6%8A%8A%E6%89%8B%E6%88%91%E9%83%BD%E4%B8%8D%E8%AE%A9%E4%BB%96%E4%BB%AC%E6%9D%A5%23) `233.8K 🔥` `-36%`
1. [特朗普抵达欢迎宴会现场](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%E7%8E%B0%E5%9C%BA%23) `222.5K 🔥` `-38%`
1. [白鹿演唱会票价加起来是十年 (The total ticket price for the White Deer concert is ten years)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%E5%8A%A0%E8%B5%B7%E6%9D%A5%E6%98%AF%E5%8D%81%E5%B9%B4%23) `219.7K 🔥` `-38%`
1. [果然岁月从不败美人](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E5%B2%81%E6%9C%88%E4%BB%8E%E4%B8%8D%E8%B4%A5%E7%BE%8E%E4%BA%BA%23) `192.3K 🔥` `-50%`
1. [特朗普感叹大美中国](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%84%9F%E5%8F%B9%E5%A4%A7%E7%BE%8E%E4%B8%AD%E5%9B%BD%23) `164.4K 🔥` `-53%`
1. [易烊千玺 惊悚片](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E6%83%8A%E6%82%9A%E7%89%87%23) `163.6K 🔥` `-49%`
1. [白玉兰奖动了 (The Magnolia Award is moving)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%E5%8A%A8%E4%BA%86%23) `154.9K 🔥` `-52%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `152.2K 🔥` `-60%`
1. [31岁女子从60斤增到90斤像变个人 (A 31-year-old woman looks like a different person after increasing her weight from 60 pounds to 90 pounds)](https://s.weibo.com/weibo?q=%2331%E5%B2%81%E5%A5%B3%E5%AD%90%E4%BB%8E60%E6%96%A4%E5%A2%9E%E5%88%B090%E6%96%A4%E5%83%8F%E5%8F%98%E4%B8%AA%E4%BA%BA%23) `146.1K 🔥` `-39%`
1. [腾讯成立800人团队适配鸿蒙 (Tencent sets up a team of 800 people to adapt to Hongmeng)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E6%88%90%E7%AB%8B800%E4%BA%BA%E5%9B%A2%E9%98%9F%E9%80%82%E9%85%8D%E9%B8%BF%E8%92%99%23) `144.7K 🔥` `-62%`
1. [小米17Max首发搭载徕卡2亿主摄](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B317Max%E9%A6%96%E5%8F%91%E6%90%AD%E8%BD%BD%E5%BE%95%E5%8D%A12%E4%BA%BF%E4%B8%BB%E6%91%84%23) `144.0K 🔥` `-50%`
1. [歌手2026定档官宣](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E5%AE%9A%E6%A1%A3%E5%AE%98%E5%AE%A3%23) `143.5K 🔥` `-50%`

Updated at 2026-05-14 22:46:11

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
