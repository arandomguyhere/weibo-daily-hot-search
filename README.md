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

1. [第2场部长通道 (Session 2 Ministerial Channel)](https://s.weibo.com/weibo?q=%23%E7%AC%AC2%E5%9C%BA%E9%83%A8%E9%95%BF%E9%80%9A%E9%81%93%23) `1.0M 🔥` `NEW`
1. [李延贺煽动分裂国家破坏国家统一](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%BB%B6%E8%B4%BA%E7%85%BD%E5%8A%A8%E5%88%86%E8%A3%82%E5%9B%BD%E5%AE%B6%E7%A0%B4%E5%9D%8F%E5%9B%BD%E5%AE%B6%E7%BB%9F%E4%B8%80%23) `868.5K 🔥` `NEW`
1. [政府工作报告里的加减乘除](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%E9%87%8C%E7%9A%84%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%23) `592.5K 🔥` `NEW`
1. [怪不得古代能一眼认出刺客](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%8F%A4%E4%BB%A3%E8%83%BD%E4%B8%80%E7%9C%BC%E8%AE%A4%E5%87%BA%E5%88%BA%E5%AE%A2%23) `361.7K 🔥` `NEW`
1. [伊朗导弹突防能力拉满](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E7%AA%81%E9%98%B2%E8%83%BD%E5%8A%9B%E6%8B%89%E6%BB%A1%23) `360.6K 🔥` `NEW`
1. [周杰伦温州](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%B8%A9%E5%B7%9E%23) `359.9K 🔥` `NEW`
1. [最高法最高检工作报告](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%AB%98%E6%B3%95%E6%9C%80%E9%AB%98%E6%A3%80%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%23) `357.8K 🔥` `NEW`
1. [苹果新品发布会](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%E4%BC%9A%23) `356.5K 🔥` `NEW`
1. [胖东来超8成员工拒绝降薪增假](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%B6%858%E6%88%90%E5%91%98%E5%B7%A5%E6%8B%92%E7%BB%9D%E9%99%8D%E8%96%AA%E5%A2%9E%E5%81%87%23) `355.7K 🔥` `NEW`
1. [张凌赫人生镜头](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BA%BA%E7%94%9F%E9%95%9C%E5%A4%B4%23) `353.6K 🔥` `NEW`
1. [电视剧品质盛典 (TV Series Quality Ceremony)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E5%93%81%E8%B4%A8%E7%9B%9B%E5%85%B8%23) `351.6K 🔥` `NEW`
1. [充电找桩难排队长在缓解](https://s.weibo.com/weibo?q=%23%E5%85%85%E7%94%B5%E6%89%BE%E6%A1%A9%E9%9A%BE%E6%8E%92%E9%98%9F%E9%95%BF%E5%9C%A8%E7%BC%93%E8%A7%A3%23) `351.2K 🔥` `NEW`
1. [五字概括逐玉剧情](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%AD%97%E6%A6%82%E6%8B%AC%E9%80%90%E7%8E%89%E5%89%A7%E6%83%85%23) `349.9K 🔥` `NEW`
1. [乳腺癌女子从腹部借回一对新乳房](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E8%85%BA%E7%99%8C%E5%A5%B3%E5%AD%90%E4%BB%8E%E8%85%B9%E9%83%A8%E5%80%9F%E5%9B%9E%E4%B8%80%E5%AF%B9%E6%96%B0%E4%B9%B3%E6%88%BF%23) `349.9K 🔥` `NEW`
1. [蒋敦豪到底吃了多少过期食品](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%95%A6%E8%B1%AA%E5%88%B0%E5%BA%95%E5%90%83%E4%BA%86%E5%A4%9A%E5%B0%91%E8%BF%87%E6%9C%9F%E9%A3%9F%E5%93%81%23) `349.9K 🔥` `NEW`
1. [建议处罚加班严重企业](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%84%E7%BD%9A%E5%8A%A0%E7%8F%AD%E4%B8%A5%E9%87%8D%E4%BC%81%E4%B8%9A%23) `349.9K 🔥` `NEW`
1. [秀智晒与王安宇孙千晚宴合照](https://s.weibo.com/weibo?q=%23%E7%A7%80%E6%99%BA%E6%99%92%E4%B8%8E%E7%8E%8B%E5%AE%89%E5%AE%87%E5%AD%99%E5%8D%83%E6%99%9A%E5%AE%B4%E5%90%88%E7%85%A7%23) `349.9K 🔥` `NEW`
1. [这课上的心脏挖出来还能跳三天](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%AF%BE%E4%B8%8A%E7%9A%84%E5%BF%83%E8%84%8F%E6%8C%96%E5%87%BA%E6%9D%A5%E8%BF%98%E8%83%BD%E8%B7%B3%E4%B8%89%E5%A4%A9%23) `349.9K 🔥` `NEW`
1. [法官说婚姻自由也包括离婚自由](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%AE%98%E8%AF%B4%E5%A9%9A%E5%A7%BB%E8%87%AA%E7%94%B1%E4%B9%9F%E5%8C%85%E6%8B%AC%E7%A6%BB%E5%A9%9A%E8%87%AA%E7%94%B1%23) `349.9K 🔥` `NEW`
1. [3月9日两会日程](https://s.weibo.com/weibo?q=%233%E6%9C%889%E6%97%A5%E4%B8%A4%E4%BC%9A%E6%97%A5%E7%A8%8B%23) `349.9K 🔥` `NEW`
1. [蕾哈娜豪宅遭枪击 (Rihanna's mansion was shot)](https://s.weibo.com/weibo?q=%23%E8%95%BE%E5%93%88%E5%A8%9C%E8%B1%AA%E5%AE%85%E9%81%AD%E6%9E%AA%E5%87%BB%23) `349.9K 🔥` `NEW`
1. [卢昱晓 大花气质](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%20%E5%A4%A7%E8%8A%B1%E6%B0%94%E8%B4%A8%23) `349.9K 🔥` `NEW`
1. [世界透过两会读懂中国](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E9%80%8F%E8%BF%87%E4%B8%A4%E4%BC%9A%E8%AF%BB%E6%87%82%E4%B8%AD%E5%9B%BD%23) `349.9K 🔥` `NEW`
1. [女子称自己有190斤只因脸小没人信](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E8%87%AA%E5%B7%B1%E6%9C%89190%E6%96%A4%E5%8F%AA%E5%9B%A0%E8%84%B8%E5%B0%8F%E6%B2%A1%E4%BA%BA%E4%BF%A1%23) `349.9K 🔥` `NEW`
1. [郭晓婷王天辰合体首封](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E5%90%88%E4%BD%93%E9%A6%96%E5%B0%81%23) `349.9K 🔥` `NEW`
1. [4种无效早睡没比熬夜强多少](https://s.weibo.com/weibo?q=%234%E7%A7%8D%E6%97%A0%E6%95%88%E6%97%A9%E7%9D%A1%E6%B2%A1%E6%AF%94%E7%86%AC%E5%A4%9C%E5%BC%BA%E5%A4%9A%E5%B0%91%23) `349.9K 🔥` `NEW`
1. [双休保底2.5天激励梯度制度](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BC%91%E4%BF%9D%E5%BA%952.5%E5%A4%A9%E6%BF%80%E5%8A%B1%E6%A2%AF%E5%BA%A6%E5%88%B6%E5%BA%A6%23) `349.9K 🔥` `NEW`
1. [建议列车改签30分钟内免费撤回](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%88%97%E8%BD%A6%E6%94%B9%E7%AD%BE30%E5%88%86%E9%92%9F%E5%86%85%E5%85%8D%E8%B4%B9%E6%92%A4%E5%9B%9E%23) `349.9K 🔥` `NEW`
1. [咱家蔬菜一年产量超8亿吨](https://s.weibo.com/weibo?q=%23%E5%92%B1%E5%AE%B6%E8%94%AC%E8%8F%9C%E4%B8%80%E5%B9%B4%E4%BA%A7%E9%87%8F%E8%B6%858%E4%BA%BF%E5%90%A8%23) `349.9K 🔥` `NEW`
1. [珀莱雅 妇女节短片](https://s.weibo.com/weibo?q=%23%E7%8F%80%E8%8E%B1%E9%9B%85%20%E5%A6%87%E5%A5%B3%E8%8A%82%E7%9F%AD%E7%89%87%23) `349.9K 🔥` `NEW`
1. [浓颜人有多适合微醺妆 (How suitable for people with thick face to wear slightly tipsy makeup?)](https://s.weibo.com/weibo?q=%23%E6%B5%93%E9%A2%9C%E4%BA%BA%E6%9C%89%E5%A4%9A%E9%80%82%E5%90%88%E5%BE%AE%E9%86%BA%E5%A6%86%23) `349.9K 🔥` `NEW`
1. [一不小心拍到了爱情的模样](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%8D%E5%B0%8F%E5%BF%83%E6%8B%8D%E5%88%B0%E4%BA%86%E7%88%B1%E6%83%85%E7%9A%84%E6%A8%A1%E6%A0%B7%23) `349.9K 🔥` `NEW`
1. [孙千发了和王安宇合照](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%8F%91%E4%BA%86%E5%92%8C%E7%8E%8B%E5%AE%89%E5%AE%87%E5%90%88%E7%85%A7%23) `349.9K 🔥` `NEW`
1. [美军最活跃进攻基地遭重创](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%9C%80%E6%B4%BB%E8%B7%83%E8%BF%9B%E6%94%BB%E5%9F%BA%E5%9C%B0%E9%81%AD%E9%87%8D%E5%88%9B%23) `349.9K 🔥` `NEW`
1. [4岁女儿被诊断为男孩需选性别做手术](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E5%84%BF%E8%A2%AB%E8%AF%8A%E6%96%AD%E4%B8%BA%E7%94%B7%E5%AD%A9%E9%9C%80%E9%80%89%E6%80%A7%E5%88%AB%E5%81%9A%E6%89%8B%E6%9C%AF%23) `349.9K 🔥` `NEW`
1. [我国是世界上最安全国家之一](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%98%AF%E4%B8%96%E7%95%8C%E4%B8%8A%E6%9C%80%E5%AE%89%E5%85%A8%E5%9B%BD%E5%AE%B6%E4%B9%8B%E4%B8%80%23) `349.9K 🔥` `NEW`
1. [建议推广双休保底2.5天激励机制](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8E%A8%E5%B9%BF%E5%8F%8C%E4%BC%91%E4%BF%9D%E5%BA%952.5%E5%A4%A9%E6%BF%80%E5%8A%B1%E6%9C%BA%E5%88%B6%23) `349.9K 🔥` `NEW`
1. [霸王茶姬口令](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%8F%A3%E4%BB%A4%23) `349.9K 🔥` `NEW`
1. [父女辩论视频在网上火了](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%A5%B3%E8%BE%A9%E8%AE%BA%E8%A7%86%E9%A2%91%E5%9C%A8%E7%BD%91%E4%B8%8A%E7%81%AB%E4%BA%86%23) `349.8K 🔥` `NEW`
1. [建议将8小时工作制缩短为7小时](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%868%E5%B0%8F%E6%97%B6%E5%B7%A5%E4%BD%9C%E5%88%B6%E7%BC%A9%E7%9F%AD%E4%B8%BA7%E5%B0%8F%E6%97%B6%23) `444.4K 🔥` `+54%`
1. [今年修改教师法 (The Teacher Law will be revised this year)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E4%BF%AE%E6%94%B9%E6%95%99%E5%B8%88%E6%B3%95%23) `362.6K 🔥` `+61%`
1. [伊朗确认军舰遭美军击沉致104人死亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A1%AE%E8%AE%A4%E5%86%9B%E8%88%B0%E9%81%AD%E7%BE%8E%E5%86%9B%E5%87%BB%E6%B2%89%E8%87%B4104%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `353.7K 🔥` `+22%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `349.9K 🔥` `+77%`
1. [逐玉因平台缺爆款被迫爆 (Zhuyu was forced to go viral due to lack of popular items on the platform)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%9B%A0%E5%B9%B3%E5%8F%B0%E7%BC%BA%E7%88%86%E6%AC%BE%E8%A2%AB%E8%BF%AB%E7%88%86%23) `349.9K 🔥` `+83%`
1. [狂飙 (hurricane)](https://s.weibo.com/weibo?q=%23%E7%8B%82%E9%A3%99%23) `349.9K 🔥` `+90%`
1. [哈梅内伊之子接任最高领袖 (Khamenei's son takes over as supreme leader)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E4%B9%8B%E5%AD%90%E6%8E%A5%E4%BB%BB%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%23) `349.9K 🔥` `+24%`
1. [985父母的清醒反思](https://s.weibo.com/weibo?q=%23985%E7%88%B6%E6%AF%8D%E7%9A%84%E6%B8%85%E9%86%92%E5%8F%8D%E6%80%9D%23) `349.9K 🔥` `+25%`
1. [中传砍掉翻译摄影等16个专业 (CCTV cuts 16 majors including translation and photography)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BC%A0%E7%A0%8D%E6%8E%89%E7%BF%BB%E8%AF%91%E6%91%84%E5%BD%B1%E7%AD%8916%E4%B8%AA%E4%B8%93%E4%B8%9A%23) `349.9K 🔥` `+21%`
1. [五角大楼承认伊无人机破坏力超预期](https://s.weibo.com/weibo?q=%23%E4%BA%94%E8%A7%92%E5%A4%A7%E6%A5%BC%E6%89%BF%E8%AE%A4%E4%BC%8A%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%A0%B4%E5%9D%8F%E5%8A%9B%E8%B6%85%E9%A2%84%E6%9C%9F%23) `349.9K 🔥` `+92%`
1. [iPhoneUltra起售价或超万元](https://s.weibo.com/weibo?q=%23iPhoneUltra%E8%B5%B7%E5%94%AE%E4%BB%B7%E6%88%96%E8%B6%85%E4%B8%87%E5%85%83%23) `349.8K 🔥` `+196%`

Updated at 2026-03-09 12:24:48

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
