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

1. [不要生吃或半生吃猪肉牛肉 (Do not eat pork or beef raw or semi-raw)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%94%9F%E5%90%83%E6%88%96%E5%8D%8A%E7%94%9F%E5%90%83%E7%8C%AA%E8%82%89%E7%89%9B%E8%82%89%23) `135.6K 🔥` `NEW`
1. [罗永浩采访颠覆了我对蔡康永的认知](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E9%87%87%E8%AE%BF%E9%A2%A0%E8%A6%86%E4%BA%86%E6%88%91%E5%AF%B9%E8%94%A1%E5%BA%B7%E6%B0%B8%E7%9A%84%E8%AE%A4%E7%9F%A5%23) `134.8K 🔥` `NEW`
1. [曝孟美岐主动放弃公司资源](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AD%9F%E7%BE%8E%E5%B2%90%E4%B8%BB%E5%8A%A8%E6%94%BE%E5%BC%83%E5%85%AC%E5%8F%B8%E8%B5%84%E6%BA%90%23) `130.4K 🔥` `NEW`
1. [王一博85号车手任意状态](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A85%E5%8F%B7%E8%BD%A6%E6%89%8B%E4%BB%BB%E6%84%8F%E7%8A%B6%E6%80%81%23) `67.2K 🔥` `NEW`
1. [华为送时代少年团花篮](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%80%81%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%8A%B1%E7%AF%AE%23) `67.2K 🔥` `NEW`
1. [五一假期游玩好去处](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F%E6%B8%B8%E7%8E%A9%E5%A5%BD%E5%8E%BB%E5%A4%84%23) `66.8K 🔥` `NEW`
1. [收货地址不该成为被歧视的理由](https://s.weibo.com/weibo?q=%23%E6%94%B6%E8%B4%A7%E5%9C%B0%E5%9D%80%E4%B8%8D%E8%AF%A5%E6%88%90%E4%B8%BA%E8%A2%AB%E6%AD%A7%E8%A7%86%E7%9A%84%E7%90%86%E7%94%B1%23) `677.0K 🔥` `+491%`
1. [新能源车换个后视镜花了近6000元](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E6%8D%A2%E4%B8%AA%E5%90%8E%E8%A7%86%E9%95%9C%E8%8A%B1%E4%BA%86%E8%BF%916000%E5%85%83%23) `484.3K 🔥` `+477%`
1. [1071项国标5月1日起实施 (1,071 national standards will be implemented on May 1)](https://s.weibo.com/weibo?q=%231071%E9%A1%B9%E5%9B%BD%E6%A0%875%E6%9C%881%E6%97%A5%E8%B5%B7%E5%AE%9E%E6%96%BD%23) `436.6K 🔥` `+123%`
1. [李晨怀念跑男老成员 (Li Chen misses the old members of Running Man)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E6%80%80%E5%BF%B5%E8%B7%91%E7%94%B7%E8%80%81%E6%88%90%E5%91%98%23) `436.6K 🔥` `+131%`
1. [辛辛苦苦种了三个多月的胡萝卜](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%BE%9B%E8%8B%A6%E8%8B%A6%E7%A7%8D%E4%BA%86%E4%B8%89%E4%B8%AA%E5%A4%9A%E6%9C%88%E7%9A%84%E8%83%A1%E8%90%9D%E5%8D%9C%23) `332.0K 🔥` `+37%`
1. [命运托举你的方式很意外 (The way fate has lifted you up is surprising)](https://s.weibo.com/weibo?q=%23%E5%91%BD%E8%BF%90%E6%89%98%E4%B8%BE%E4%BD%A0%E7%9A%84%E6%96%B9%E5%BC%8F%E5%BE%88%E6%84%8F%E5%A4%96%23) `274.5K 🔥` `+81%`
1. [孙杨因为没给张豆豆办婚礼哭了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%9B%A0%E4%B8%BA%E6%B2%A1%E7%BB%99%E5%BC%A0%E8%B1%86%E8%B1%86%E5%8A%9E%E5%A9%9A%E7%A4%BC%E5%93%AD%E4%BA%86%23) `165.5K 🔥` `+100%`
1. [美对伊战5月1日面临红线 (The U.S.’s war with Iraq faces a red line on May 1)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AF%B9%E4%BC%8A%E6%88%985%E6%9C%881%E6%97%A5%E9%9D%A2%E4%B8%B4%E7%BA%A2%E7%BA%BF%23) `135.7K 🔥` `+58%`
1. [中国女孩拍摄靖国神社内部 (Chinese girl photographs the interior of Yasukuni Shrine)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%A9%E6%8B%8D%E6%91%84%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E5%86%85%E9%83%A8%23) `135.3K 🔥` `+69%`
1. [金靖瘦到认不出来](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `135.1K 🔥` `+242%`
1. [保洁误拿快递脑溢血身亡家属发声 (Family member of cleaning lady who mistakenly took express delivery and died of cerebral hemorrhage speaks out)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%B4%81%E8%AF%AF%E6%8B%BF%E5%BF%AB%E9%80%92%E8%84%91%E6%BA%A2%E8%A1%80%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `134.4K 🔥` `+68%`
1. [为什么有的人从来不内耗 (Why do some people never experience internal friction?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E7%9A%84%E4%BA%BA%E4%BB%8E%E6%9D%A5%E4%B8%8D%E5%86%85%E8%80%97%23) `134.2K 🔥` `+70%`
1. [妈妈回应兄弟俩患自毁容貌综合征](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E5%85%84%E5%BC%9F%E4%BF%A9%E6%82%A3%E8%87%AA%E6%AF%81%E5%AE%B9%E8%B2%8C%E7%BB%BC%E5%90%88%E5%BE%81%23) `132.0K 🔥` `+68%`
1. [浪姐请了李小冉告过的博主](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%AF%B7%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%E5%91%8A%E8%BF%87%E7%9A%84%E5%8D%9A%E4%B8%BB%23) `131.2K 🔥` `+65%`
1. [宗师 AG (Grandmaster AG)](https://s.weibo.com/weibo?q=%23%E5%AE%97%E5%B8%88%20AG%23) `130.5K 🔥` `+65%`
1. [13点起床才是性价比最高的 (Getting up at 13 o'clock is the most cost-effective time)](https://s.weibo.com/weibo?q=%2313%E7%82%B9%E8%B5%B7%E5%BA%8A%E6%89%8D%E6%98%AF%E6%80%A7%E4%BB%B7%E6%AF%94%E6%9C%80%E9%AB%98%E7%9A%84%23) `283.2K 🔥`
1. [女子辞职顾家分手遭男友追讨百万 (Woman quits her job, Gu family breaks up, her boyfriend demands millions)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BE%9E%E8%81%8C%E9%A1%BE%E5%AE%B6%E5%88%86%E6%89%8B%E9%81%AD%E7%94%B7%E5%8F%8B%E8%BF%BD%E8%AE%A8%E7%99%BE%E4%B8%87%23) `88.8K 🔥`
1. [台男子车站性侵女游客被判5年](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E7%94%B7%E5%AD%90%E8%BD%A6%E7%AB%99%E6%80%A7%E4%BE%B5%E5%A5%B3%E6%B8%B8%E5%AE%A2%E8%A2%AB%E5%88%A45%E5%B9%B4%23) `86.5K 🔥`
1. [苹果电脑废纸篓里的废纸谁扔的 (Who threw the waste paper in the trash of Apple computers?)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E7%94%B5%E8%84%91%E5%BA%9F%E7%BA%B8%E7%AF%93%E9%87%8C%E7%9A%84%E5%BA%9F%E7%BA%B8%E8%B0%81%E6%89%94%E7%9A%84%23) `75.0K 🔥`
1. [深圳14岁男孩用AI备考押中奥赛题](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B314%E5%B2%81%E7%94%B7%E5%AD%A9%E7%94%A8AI%E5%A4%87%E8%80%83%E6%8A%BC%E4%B8%AD%E5%A5%A5%E8%B5%9B%E9%A2%98%23) `73.5K 🔥`
1. [跑男老来得子 (A running man always gets a son)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E8%80%81%E6%9D%A5%E5%BE%97%E5%AD%90%23) `67.3K 🔥`
1. [李小冉全脂胳膊](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%85%A8%E8%84%82%E8%83%B3%E8%86%8A%23) `67.3K 🔥`
1. [金价突涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%AA%81%E6%B6%A8%23) `67.3K 🔥`
1. [试过一次空手出门就知道有多爽](https://s.weibo.com/weibo?q=%23%E8%AF%95%E8%BF%87%E4%B8%80%E6%AC%A1%E7%A9%BA%E6%89%8B%E5%87%BA%E9%97%A8%E5%B0%B1%E7%9F%A5%E9%81%93%E6%9C%89%E5%A4%9A%E7%88%BD%23) `67.2K 🔥`
1. [台评论员谈美日菲军演解放军围观](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E8%AF%84%E8%AE%BA%E5%91%98%E8%B0%88%E7%BE%8E%E6%97%A5%E8%8F%B2%E5%86%9B%E6%BC%94%E8%A7%A3%E6%94%BE%E5%86%9B%E5%9B%B4%E8%A7%82%23) `67.2K 🔥`
1. [天津发布房地产新政 (Tianjin releases new real estate policy)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E5%8F%91%E5%B8%83%E6%88%BF%E5%9C%B0%E4%BA%A7%E6%96%B0%E6%94%BF%23) `67.1K 🔥`
1. [每天准时来接孩子的狗叔](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%87%86%E6%97%B6%E6%9D%A5%E6%8E%A5%E5%AD%A9%E5%AD%90%E7%9A%84%E7%8B%97%E5%8F%94%23) `67.1K 🔥`
1. [28岁攒到10万元女生已申请辞职 (A 28-year-old girl who saved 100,000 yuan has applied for resignation)](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E6%94%92%E5%88%B010%E4%B8%87%E5%85%83%E5%A5%B3%E7%94%9F%E5%B7%B2%E7%94%B3%E8%AF%B7%E8%BE%9E%E8%81%8C%23) `67.0K 🔥`
1. [男子584元买凉拌鸡老板狂加43勺糖](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90584%E5%85%83%E4%B9%B0%E5%87%89%E6%8B%8C%E9%B8%A1%E8%80%81%E6%9D%BF%E7%8B%82%E5%8A%A043%E5%8B%BA%E7%B3%96%23) `67.0K 🔥`
1. [小猫不知道床被洗了 (The kitten doesn't know the bed has been washed)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%B8%8D%E7%9F%A5%E9%81%93%E5%BA%8A%E8%A2%AB%E6%B4%97%E4%BA%86%23) `67.0K 🔥`
1. [国防部回应辽宁舰四川舰过航台湾海峡](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E8%BE%BD%E5%AE%81%E8%88%B0%E5%9B%9B%E5%B7%9D%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `67.0K 🔥`
1. [靠吃碳水长大的小猫](https://s.weibo.com/weibo?q=%23%E9%9D%A0%E5%90%83%E7%A2%B3%E6%B0%B4%E9%95%BF%E5%A4%A7%E7%9A%84%E5%B0%8F%E7%8C%AB%23) `66.9K 🔥`
1. [纸嫁衣9首曝](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%AB%81%E8%A1%A39%E9%A6%96%E6%9B%9D%23) `66.9K 🔥`
1. [寒武纪涨停](https://s.weibo.com/weibo?q=%23%E5%AF%92%E6%AD%A6%E7%BA%AA%E6%B6%A8%E5%81%9C%23) `66.9K 🔥`
1. [李现又去看五月天演唱会了 (Li Xian went to see the Mayday concert again)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%8F%88%E5%8E%BB%E7%9C%8B%E4%BA%94%E6%9C%88%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `66.8K 🔥`
1. [洪朝阳确定不会参与浪姐后续录制](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E6%9C%9D%E9%98%B3%E7%A1%AE%E5%AE%9A%E4%B8%8D%E4%BC%9A%E5%8F%82%E4%B8%8E%E6%B5%AA%E5%A7%90%E5%90%8E%E7%BB%AD%E5%BD%95%E5%88%B6%23) `66.8K 🔥`
1. [冰箱的寒气被生姜给逼出来了](https://s.weibo.com/weibo?q=%23%E5%86%B0%E7%AE%B1%E7%9A%84%E5%AF%92%E6%B0%94%E8%A2%AB%E7%94%9F%E5%A7%9C%E7%BB%99%E9%80%BC%E5%87%BA%E6%9D%A5%E4%BA%86%23) `66.8K 🔥`
1. [铁证](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%AF%81%23) `66.7K 🔥`
1. [章建平套现寒武纪超40亿元 (Zhang Jianping cashed out more than 4 billion yuan in Cambrian)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%BB%BA%E5%B9%B3%E5%A5%97%E7%8E%B0%E5%AF%92%E6%AD%A6%E7%BA%AA%E8%B6%8540%E4%BA%BF%E5%85%83%23) `66.7K 🔥`
1. [分手了你俩开始暧昧了](https://s.weibo.com/weibo?q=%23%E5%88%86%E6%89%8B%E4%BA%86%E4%BD%A0%E4%BF%A9%E5%BC%80%E5%A7%8B%E6%9A%A7%E6%98%A7%E4%BA%86%23) `66.7K 🔥`
1. [奔跑吧 (run)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `66.6K 🔥`
1. [DeepSeek思考过程好萌](https://s.weibo.com/weibo?q=%23DeepSeek%E6%80%9D%E8%80%83%E8%BF%87%E7%A8%8B%E5%A5%BD%E8%90%8C%23) `66.6K 🔥`
1. [曝Angelababy爱发朋友圈 (It is revealed that Angelababy loves to post on Moments)](https://s.weibo.com/weibo?q=%23%E6%9B%9DAngelababy%E7%88%B1%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `133.7K 🔥` `-44%`
1. [王俊凯工作室 他拍比自拍好看](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E4%BB%96%E6%8B%8D%E6%AF%94%E8%87%AA%E6%8B%8D%E5%A5%BD%E7%9C%8B%23) `132.7K 🔥` `-43%`

Updated at 2026-05-01 07:13:00

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
