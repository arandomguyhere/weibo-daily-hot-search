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

1. [丁彦雨航退役 (Ding Yanyuhang retires)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E5%BD%A6%E9%9B%A8%E8%88%AA%E9%80%80%E5%BD%B9%23) `219.1K 🔥` `NEW`
1. [小米汽车回应为何不公布大定数字](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BD%95%E4%B8%8D%E5%85%AC%E5%B8%83%E5%A4%A7%E5%AE%9A%E6%95%B0%E5%AD%97%23) `163.4K 🔥` `NEW`
1. [南方甘蔗1元一根北方甘蔗18元半根](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E7%94%98%E8%94%971%E5%85%83%E4%B8%80%E6%A0%B9%E5%8C%97%E6%96%B9%E7%94%98%E8%94%9718%E5%85%83%E5%8D%8A%E6%A0%B9%23) `152.6K 🔥` `NEW`
1. [72岁蔡正元入狱前最后直播](https://s.weibo.com/weibo?q=%2372%E5%B2%81%E8%94%A1%E6%AD%A3%E5%85%83%E5%85%A5%E7%8B%B1%E5%89%8D%E6%9C%80%E5%90%8E%E7%9B%B4%E6%92%AD%23) `137.8K 🔥` `NEW`
1. [国际金银又跌了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E9%87%91%E9%93%B6%E5%8F%88%E8%B7%8C%E4%BA%86%23) `114.1K 🔥` `NEW`
1. [31岁女子确诊重度牙周病不敢随便笑](https://s.weibo.com/weibo?q=%2331%E5%B2%81%E5%A5%B3%E5%AD%90%E7%A1%AE%E8%AF%8A%E9%87%8D%E5%BA%A6%E7%89%99%E5%91%A8%E7%97%85%E4%B8%8D%E6%95%A2%E9%9A%8F%E4%BE%BF%E7%AC%91%23) `94.9K 🔥` `NEW`
1. [伊朗动员穷人组织情报部门负责人身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8A%A8%E5%91%98%E7%A9%B7%E4%BA%BA%E7%BB%84%E7%BB%87%E6%83%85%E6%8A%A5%E9%83%A8%E9%97%A8%E8%B4%9F%E8%B4%A3%E4%BA%BA%E8%BA%AB%E4%BA%A1%23) `85.2K 🔥` `NEW`
1. [三傻重聚给王鹤棣哄成胚胎了](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%82%BB%E9%87%8D%E8%81%9A%E7%BB%99%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%93%84%E6%88%90%E8%83%9A%E8%83%8E%E4%BA%86%23) `84.3K 🔥` `NEW`
1. [广州南沙甘蔗滞销地头价跌至0.1元](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%8D%97%E6%B2%99%E7%94%98%E8%94%97%E6%BB%9E%E9%94%80%E5%9C%B0%E5%A4%B4%E4%BB%B7%E8%B7%8C%E8%87%B30.1%E5%85%83%23) `83.8K 🔥` `NEW`
1. [俄罗斯向以色列提抗议](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%E6%8F%90%E6%8A%97%E8%AE%AE%23) `79.1K 🔥` `NEW`
1. [官方通报月经弄脏卧铺事件详情 (Official report details of menstrual stained sleeper incident)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E4%BA%8B%E4%BB%B6%E8%AF%A6%E6%83%85%23) `73.4K 🔥` `NEW`
1. [孟佳品牌方 盖娅传说](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E4%BD%B3%E5%93%81%E7%89%8C%E6%96%B9%20%E7%9B%96%E5%A8%85%E4%BC%A0%E8%AF%B4%23) `72.5K 🔥` `NEW`
1. [Steam春促](https://s.weibo.com/weibo?q=%23Steam%E6%98%A5%E4%BF%83%23) `72.2K 🔥` `NEW`
1. [日本网友评价高市早苗访美视频](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E8%AF%84%E4%BB%B7%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%AE%BF%E7%BE%8E%E8%A7%86%E9%A2%91%23) `775.2K 🔥` `+33%`
1. [高血压男子抿了一口啤酒后死亡 (Man with high blood pressure dies after taking sip of beer)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%A1%80%E5%8E%8B%E7%94%B7%E5%AD%90%E6%8A%BF%E4%BA%86%E4%B8%80%E5%8F%A3%E5%95%A4%E9%85%92%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `162.0K 🔥` `+60%`
1. [铁路通报女子月经弄脏卧铺事件 (Railway reports incident of woman staining sleeper berth with menstruation)](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E4%BA%8B%E4%BB%B6%23) `158.3K 🔥` `+34%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `156.4K 🔥` `+32%`
1. [好想来上架山姆零食 (I really want to put Sam’s snacks on the shelves)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%83%B3%E6%9D%A5%E4%B8%8A%E6%9E%B6%E5%B1%B1%E5%A7%86%E9%9B%B6%E9%A3%9F%23) `1.1M 🔥`
1. [沙某编造传播涉科大讯飞网络谣言被拘 (Sha was arrested for fabricating and spreading online rumors involving iFlytek, the University of Science and Technology of China)](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%9F%90%E7%BC%96%E9%80%A0%E4%BC%A0%E6%92%AD%E6%B6%89%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E7%BD%91%E7%BB%9C%E8%B0%A3%E8%A8%80%E8%A2%AB%E6%8B%98%23) `593.6K 🔥`
1. [章子怡脸咋了](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E8%84%B8%E5%92%8B%E4%BA%86%23) `581.0K 🔥`
1. [张凌赫百丽一周年](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%99%BE%E4%B8%BD%E4%B8%80%E5%91%A8%E5%B9%B4%23) `215.6K 🔥`
1. [薛之谦广州演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `190.4K 🔥`
1. [杨幂清唱讲真的](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%B8%85%E5%94%B1%E8%AE%B2%E7%9C%9F%E7%9A%84%23) `147.2K 🔥`
1. [章子怡穿的比红毯还红](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E7%A9%BF%E7%9A%84%E6%AF%94%E7%BA%A2%E6%AF%AF%E8%BF%98%E7%BA%A2%23) `89.9K 🔥`
1. [伊朗问美国为何不敢让航母靠近 (Iran asks the U.S. why it doesn’t dare to let the aircraft carrier get closer)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%97%AE%E7%BE%8E%E5%9B%BD%E4%B8%BA%E4%BD%95%E4%B8%8D%E6%95%A2%E8%AE%A9%E8%88%AA%E6%AF%8D%E9%9D%A0%E8%BF%91%23) `83.7K 🔥`
1. [金泰亨田柾国合体综艺](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E4%BA%A8%E7%94%B0%E6%9F%BE%E5%9B%BD%E5%90%88%E4%BD%93%E7%BB%BC%E8%89%BA%23) `76.4K 🔥`
1. [最强大脑](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%BC%BA%E5%A4%A7%E8%84%91%23) `74.6K 🔥`
1. [母亲带女儿买鞋在店门口犹豫半小时 (The mother took her daughter to buy shoes and hesitated in front of the store for half an hour.)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%B8%A6%E5%A5%B3%E5%84%BF%E4%B9%B0%E9%9E%8B%E5%9C%A8%E5%BA%97%E9%97%A8%E5%8F%A3%E7%8A%B9%E8%B1%AB%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `335.1K 🔥` `-43%`
1. [伊朗发动第67波攻势](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%8A%A8%E7%AC%AC67%E6%B3%A2%E6%94%BB%E5%8A%BF%23) `163.1K 🔥` `-72%`
1. [papi酱又给内娱指了条明路](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E5%8F%88%E7%BB%99%E5%86%85%E5%A8%B1%E6%8C%87%E4%BA%86%E6%9D%A1%E6%98%8E%E8%B7%AF%23) `161.7K 🔥` `-71%`
1. [迪丽热巴迪奥活动直拍](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%AA%E5%A5%A5%E6%B4%BB%E5%8A%A8%E7%9B%B4%E6%8B%8D%23) `160.4K 🔥` `-68%`
1. [外网也意识到韩国偷文化了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E4%B9%9F%E6%84%8F%E8%AF%86%E5%88%B0%E9%9F%A9%E5%9B%BD%E5%81%B7%E6%96%87%E5%8C%96%E4%BA%86%23) `159.8K 🔥` `-50%`
1. [范丞丞四天减脂餐对比](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%9B%9B%E5%A4%A9%E5%87%8F%E8%84%82%E9%A4%90%E5%AF%B9%E6%AF%94%23) `159.0K 🔥` `-50%`
1. [七旬老人呼吸困难自行拿剪刀捅胸](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%97%AC%E8%80%81%E4%BA%BA%E5%91%BC%E5%90%B8%E5%9B%B0%E9%9A%BE%E8%87%AA%E8%A1%8C%E6%8B%BF%E5%89%AA%E5%88%80%E6%8D%85%E8%83%B8%23) `157.7K 🔥` `-51%`
1. [迪丽热巴 女王回归](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E5%A5%B3%E7%8E%8B%E5%9B%9E%E5%BD%92%23) `157.1K 🔥` `-34%`
1. [对一块钱的概念越来越模糊 (The concept of a dollar is becoming increasingly vague)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%B8%80%E5%9D%97%E9%92%B1%E7%9A%84%E6%A6%82%E5%BF%B5%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%A8%A1%E7%B3%8A%23) `153.3K 🔥` `-21%`
1. [孟佳开撕品牌方 (Mengjia's brand recipe)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E4%BD%B3%E5%BC%80%E6%92%95%E5%93%81%E7%89%8C%E6%96%B9%23) `152.6K 🔥` `-35%`
1. [张凌赫工作室 拍出了张凌赫的死角 (Zhang Linghe's studio captured Zhang Linghe's blind spot)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E6%8B%8D%E5%87%BA%E4%BA%86%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E6%AD%BB%E8%A7%92%23) `152.4K 🔥` `-31%`
1. [大人饭量和小孩饭量真的不一样 (The appetite of adults and the appetite of children are really different)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BA%BA%E9%A5%AD%E9%87%8F%E5%92%8C%E5%B0%8F%E5%AD%A9%E9%A5%AD%E9%87%8F%E7%9C%9F%E7%9A%84%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `148.6K 🔥` `-37%`
1. [王橹杰爱柠檬](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%88%B1%E6%9F%A0%E6%AA%AC%23) `139.1K 🔥` `-24%`
1. [前员工爆料海底捞高层点炮制度 (A former employee revealed the high-level shooting system of Haidilao)](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%91%98%E5%B7%A5%E7%88%86%E6%96%99%E6%B5%B7%E5%BA%95%E6%8D%9E%E9%AB%98%E5%B1%82%E7%82%B9%E7%82%AE%E5%88%B6%E5%BA%A6%23) `138.4K 🔥` `-41%`
1. [刘昊然易烊千玺CMG双黄蛋](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BACMG%E5%8F%8C%E9%BB%84%E8%9B%8B%23) `137.8K 🔥` `-77%`
1. [THE9出道组现状](https://s.weibo.com/weibo?q=%23THE9%E5%87%BA%E9%81%93%E7%BB%84%E7%8E%B0%E7%8A%B6%23) `112.1K 🔥` `-40%`
1. [周冬雨穿自己淘的裙子走红毯](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E7%A9%BF%E8%87%AA%E5%B7%B1%E6%B7%98%E7%9A%84%E8%A3%99%E5%AD%90%E8%B5%B0%E7%BA%A2%E6%AF%AF%23) `112.0K 🔥` `-53%`
1. [DIOR活动](https://s.weibo.com/weibo?q=%23DIOR%E6%B4%BB%E5%8A%A8%23) `94.3K 🔥` `-60%`
1. [爷爷酒后多次用力掌掴幼儿 (Grandpa slapped his child hard many times after drinking)](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E9%85%92%E5%90%8E%E5%A4%9A%E6%AC%A1%E7%94%A8%E5%8A%9B%E6%8E%8C%E6%8E%B4%E5%B9%BC%E5%84%BF%23) `88.7K 🔥` `-21%`
1. [谢征拒绝赐婚](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%8B%92%E7%BB%9D%E8%B5%90%E5%A9%9A%23) `87.5K 🔥` `-85%`
1. [武汉一别墅暗藏非法代孕实验室](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E4%B8%80%E5%88%AB%E5%A2%85%E6%9A%97%E8%97%8F%E9%9D%9E%E6%B3%95%E4%BB%A3%E5%AD%95%E5%AE%9E%E9%AA%8C%E5%AE%A4%23) `83.8K 🔥` `-89%`
1. [cmg中国电影荣誉名单](https://s.weibo.com/weibo?q=%23cmg%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%BD%B1%E8%8D%A3%E8%AA%89%E5%90%8D%E5%8D%95%23) `83.7K 🔥` `-64%`
1. [双休但不是休周末的工作](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BC%91%E4%BD%86%E4%B8%8D%E6%98%AF%E4%BC%91%E5%91%A8%E6%9C%AB%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `80.9K 🔥` `-27%`

Updated at 2026-03-20 23:23:22

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
