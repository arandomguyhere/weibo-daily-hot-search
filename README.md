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

1. [JDG战胜WBG (JDG defeated WBG)](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CWBG%23) `201.0K 🔥` `NEW`
1. [JDG晋级全球先锋赛](https://s.weibo.com/weibo?q=%23JDG%E6%99%8B%E7%BA%A7%E5%85%A8%E7%90%83%E5%85%88%E9%94%8B%E8%B5%9B%23) `178.9K 🔥` `NEW`
1. [男子丽江旅游中奖1034万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%BD%E6%B1%9F%E6%97%85%E6%B8%B8%E4%B8%AD%E5%A5%961034%E4%B8%87%23) `178.6K 🔥` `NEW`
1. [伊拉克记者方浩明成中国准女婿](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E8%AE%B0%E8%80%85%E6%96%B9%E6%B5%A9%E6%98%8E%E6%88%90%E4%B8%AD%E5%9B%BD%E5%87%86%E5%A5%B3%E5%A9%BF%23) `166.4K 🔥` `NEW`
1. [伊朗驻埃及大使说不会再相信美国](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A9%BB%E5%9F%83%E5%8F%8A%E5%A4%A7%E4%BD%BF%E8%AF%B4%E4%B8%8D%E4%BC%9A%E5%86%8D%E7%9B%B8%E4%BF%A1%E7%BE%8E%E5%9B%BD%23) `161.6K 🔥` `NEW`
1. [大厂发的三八节福利都值多少钱](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%8E%82%E5%8F%91%E7%9A%84%E4%B8%89%E5%85%AB%E8%8A%82%E7%A6%8F%E5%88%A9%E9%83%BD%E5%80%BC%E5%A4%9A%E5%B0%91%E9%92%B1%23) `161.3K 🔥` `NEW`
1. [Celine大秀](https://s.weibo.com/weibo?q=%23Celine%E5%A4%A7%E7%A7%80%23) `161.1K 🔥` `NEW`
1. [我的山与海](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%B1%B1%E4%B8%8E%E6%B5%B7%23) `160.5K 🔥` `NEW`
1. [蔡依林内地版没有大蛇](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%86%85%E5%9C%B0%E7%89%88%E6%B2%A1%E6%9C%89%E5%A4%A7%E8%9B%87%23) `159.7K 🔥` `NEW`
1. [梁洁 内娱甜妹使不完的牛劲](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%B4%81%20%E5%86%85%E5%A8%B1%E7%94%9C%E5%A6%B9%E4%BD%BF%E4%B8%8D%E5%AE%8C%E7%9A%84%E7%89%9B%E5%8A%B2%23) `158.6K 🔥` `NEW`
1. [谷爱凌有这样的妈妈太幸福了 (Gu Ailing is so happy to have such a mother)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9C%89%E8%BF%99%E6%A0%B7%E7%9A%84%E5%A6%88%E5%A6%88%E5%A4%AA%E5%B9%B8%E7%A6%8F%E4%BA%86%23) `158.0K 🔥` `NEW`
1. [雷军说未来每周或仅需工作3天](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E6%9C%AA%E6%9D%A5%E6%AF%8F%E5%91%A8%E6%88%96%E4%BB%85%E9%9C%80%E5%B7%A5%E4%BD%9C3%E5%A4%A9%23) `778.9K 🔥` `+135%`
1. [孩子一出生就自带口粮自带工资 (As soon as a child is born, he brings his own food and salary.)](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%B8%80%E5%87%BA%E7%94%9F%E5%B0%B1%E8%87%AA%E5%B8%A6%E5%8F%A3%E7%B2%AE%E8%87%AA%E5%B8%A6%E5%B7%A5%E8%B5%84%23) `1.0M 🔥`
1. [我国义务教育达高收入国家平均水平 (Compulsory education in my country reaches the average level of high-income countries)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%B9%89%E5%8A%A1%E6%95%99%E8%82%B2%E8%BE%BE%E9%AB%98%E6%94%B6%E5%85%A5%E5%9B%BD%E5%AE%B6%E5%B9%B3%E5%9D%87%E6%B0%B4%E5%B9%B3%23) `589.1K 🔥`
1. [刘耀文叫白鹿嫂嫂](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%8F%AB%E7%99%BD%E9%B9%BF%E5%AB%82%E5%AB%82%23) `223.2K 🔥`
1. [谋新篇开新局](https://s.weibo.com/weibo?q=%23%E8%B0%8B%E6%96%B0%E7%AF%87%E5%BC%80%E6%96%B0%E5%B1%80%23) `178.8K 🔥`
1. [倪萍看望渐冻症终末期的蔡磊](https://s.weibo.com/weibo?q=%23%E5%80%AA%E8%90%8D%E7%9C%8B%E6%9C%9B%E6%B8%90%E5%86%BB%E7%97%87%E7%BB%88%E6%9C%AB%E6%9C%9F%E7%9A%84%E8%94%A1%E7%A3%8A%23) `178.2K 🔥`
1. [伊朗总统称不再首先攻击邻国 (Iran's president says he will no longer attack neighbors first)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E4%B8%8D%E5%86%8D%E9%A6%96%E5%85%88%E6%94%BB%E5%87%BB%E9%82%BB%E5%9B%BD%23) `178.0K 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `178.0K 🔥`
1. [委员建议文旅不要沉迷做网红 (Committee members suggested that cultural tourism should not be obsessed with being an internet celebrity)](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%BB%BA%E8%AE%AE%E6%96%87%E6%97%85%E4%B8%8D%E8%A6%81%E6%B2%89%E8%BF%B7%E5%81%9A%E7%BD%91%E7%BA%A2%23) `177.7K 🔥`
1. [TES教练 Naiyou说季后赛输的都是假赛 (TES coach Naiyou said losses in the playoffs are all fake games)](https://s.weibo.com/weibo?q=%23TES%E6%95%99%E7%BB%83%20Naiyou%E8%AF%B4%E5%AD%A3%E5%90%8E%E8%B5%9B%E8%BE%93%E7%9A%84%E9%83%BD%E6%98%AF%E5%81%87%E8%B5%9B%23) `177.4K 🔥`
1. [伊朗不许美以相关船只通过霍尔木兹 (Iran blocks US-Israeli ships from passing through Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%8D%E8%AE%B8%E7%BE%8E%E4%BB%A5%E7%9B%B8%E5%85%B3%E8%88%B9%E5%8F%AA%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `177.2K 🔥`
1. [陈小春再也没让应采儿上这种节目](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E5%86%8D%E4%B9%9F%E6%B2%A1%E8%AE%A9%E5%BA%94%E9%87%87%E5%84%BF%E4%B8%8A%E8%BF%99%E7%A7%8D%E8%8A%82%E7%9B%AE%23) `176.8K 🔥`
1. [蝴蝶忍 童琴](https://s.weibo.com/weibo?q=%23%E8%9D%B4%E8%9D%B6%E5%BF%8D%20%E7%AB%A5%E7%90%B4%23) `176.8K 🔥`
1. [WBG对战JDG](https://s.weibo.com/weibo?q=%23WBG%E5%AF%B9%E6%88%98JDG%23) `174.5K 🔥`
1. [能瘦15%的减重药创始人回应自己胖](https://s.weibo.com/weibo?q=%23%E8%83%BD%E7%98%A615%25%E7%9A%84%E5%87%8F%E9%87%8D%E8%8D%AF%E5%88%9B%E5%A7%8B%E4%BA%BA%E5%9B%9E%E5%BA%94%E8%87%AA%E5%B7%B1%E8%83%96%23) `172.4K 🔥`
1. [逐玉 田耕纪](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E7%94%B0%E8%80%95%E7%BA%AA%23) `170.7K 🔥`
1. [王安宇裴秀智孙千同框 (Wang Anyu, Pei Xiuzhi and Sun Qian are in the same frame)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A3%B4%E7%A7%80%E6%99%BA%E5%AD%99%E5%8D%83%E5%90%8C%E6%A1%86%23) `169.0K 🔥`
1. [孔雪儿将门独后首套造型 (Kong Xueer's first look as the sole queen)](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E9%A6%96%E5%A5%97%E9%80%A0%E5%9E%8B%23) `161.4K 🔥`
1. [黄金回收业务量大降](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%9B%9E%E6%94%B6%E4%B8%9A%E5%8A%A1%E9%87%8F%E5%A4%A7%E9%99%8D%23) `160.8K 🔥`
1. [伊朗宣布关闭股市](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AE%A3%E5%B8%83%E5%85%B3%E9%97%AD%E8%82%A1%E5%B8%82%23) `160.3K 🔥`
1. [田曦薇太适合演生命力旺盛的女生了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%A4%AA%E9%80%82%E5%90%88%E6%BC%94%E7%94%9F%E5%91%BD%E5%8A%9B%E6%97%BA%E7%9B%9B%E7%9A%84%E5%A5%B3%E7%94%9F%E4%BA%86%23) `160.2K 🔥`
1. [伊朗7小时5轮导弹射向以色列 (Iran fired five rounds of missiles at Israel in 7 hours)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%977%E5%B0%8F%E6%97%B65%E8%BD%AE%E5%AF%BC%E5%BC%B9%E5%B0%84%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%23) `160.1K 🔥`
1. [短剧霸总一件衣服12人穿](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E9%9C%B8%E6%80%BB%E4%B8%80%E4%BB%B6%E8%A1%A3%E6%9C%8D12%E4%BA%BA%E7%A9%BF%23) `159.9K 🔥`
1. [猫像喝醉了被鸭子带回家 (The cat looks like it was brought home by a duck when it was drunk)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%83%8F%E5%96%9D%E9%86%89%E4%BA%86%E8%A2%AB%E9%B8%AD%E5%AD%90%E5%B8%A6%E5%9B%9E%E5%AE%B6%23) `159.7K 🔥`
1. [AI短剧霍去病凭啥刷屏](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%E9%9C%8D%E5%8E%BB%E7%97%85%E5%87%AD%E5%95%A5%E5%88%B7%E5%B1%8F%23) `159.3K 🔥`
1. [王一博拒绝不了攀岩绳](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%8B%92%E7%BB%9D%E4%B8%8D%E4%BA%86%E6%94%80%E5%B2%A9%E7%BB%B3%23) `159.1K 🔥`
1. [十个勤天到底有多少个群](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E5%B0%91%E4%B8%AA%E7%BE%A4%23) `159.0K 🔥`
1. [迪拜国际机场紧急疏散旅客](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA%E7%B4%A7%E6%80%A5%E7%96%8F%E6%95%A3%E6%97%85%E5%AE%A2%23) `158.8K 🔥`
1. [没有女生能拒绝这么暖心的地铁标语 (No girl can resist such a heartwarming subway slogan)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E5%A5%B3%E7%94%9F%E8%83%BD%E6%8B%92%E7%BB%9D%E8%BF%99%E4%B9%88%E6%9A%96%E5%BF%83%E7%9A%84%E5%9C%B0%E9%93%81%E6%A0%87%E8%AF%AD%23) `158.6K 🔥`
1. [白鹿因为当模特患上风湿病 (Bailu suffered from rheumatism because of his work as a model)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%A0%E4%B8%BA%E5%BD%93%E6%A8%A1%E7%89%B9%E6%82%A3%E4%B8%8A%E9%A3%8E%E6%B9%BF%E7%97%85%23) `158.4K 🔥`
1. [孙颖莎女性榜样力量 (Sun Yingsha’s power as a female role model)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A5%B3%E6%80%A7%E6%A6%9C%E6%A0%B7%E5%8A%9B%E9%87%8F%23) `157.8K 🔥`
1. [王楚钦参加重庆冠军赛抽签](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%82%E5%8A%A0%E9%87%8D%E5%BA%86%E5%86%A0%E5%86%9B%E8%B5%9B%E6%8A%BD%E7%AD%BE%23) `157.8K 🔥`
1. [男子养豪猪拔刺一斤能卖400元 (Man raises porcupine and sells 400 yuan per kilogram for plucking quills)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%85%BB%E8%B1%AA%E7%8C%AA%E6%8B%94%E5%88%BA%E4%B8%80%E6%96%A4%E8%83%BD%E5%8D%96400%E5%85%83%23) `428.5K 🔥` `-46%`
1. [鲁豫吃了多少盐才能讲出这些话 (How much salt did Lu Yu eat to say these words?)](https://s.weibo.com/weibo?q=%23%E9%B2%81%E8%B1%AB%E5%90%83%E4%BA%86%E5%A4%9A%E5%B0%91%E7%9B%90%E6%89%8D%E8%83%BD%E8%AE%B2%E5%87%BA%E8%BF%99%E4%BA%9B%E8%AF%9D%23) `232.0K 🔥` `-22%`
1. [中国的身份证果然高级 (China’s ID card is really advanced)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9A%84%E8%BA%AB%E4%BB%BD%E8%AF%81%E6%9E%9C%E7%84%B6%E9%AB%98%E7%BA%A7%23) `161.7K 🔥` `-22%`
1. [教资科三 (Teaching Resources Subject 3)](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%B5%84%E7%A7%91%E4%B8%89%23) `161.0K 🔥` `-47%`
1. [留个学被老师科普了三天中国 (I was educated in China by my teacher for three days while studying abroad.)](https://s.weibo.com/weibo?q=%23%E7%95%99%E4%B8%AA%E5%AD%A6%E8%A2%AB%E8%80%81%E5%B8%88%E7%A7%91%E6%99%AE%E4%BA%86%E4%B8%89%E5%A4%A9%E4%B8%AD%E5%9B%BD%23) `160.6K 🔥` `-27%`
1. [花少神一季鬼一季的定律 (The law of Hua Shao Shen and ghosts)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E7%A5%9E%E4%B8%80%E5%AD%A3%E9%AC%BC%E4%B8%80%E5%AD%A3%E7%9A%84%E5%AE%9A%E5%BE%8B%23) `159.5K 🔥` `-24%`
1. [浙产减重药一个疗程平均能瘦15% (A course of weight-loss drug produced in Zhejiang can help you lose an average of 15% of your body weight in one course of treatment.)](https://s.weibo.com/weibo?q=%23%E6%B5%99%E4%BA%A7%E5%87%8F%E9%87%8D%E8%8D%AF%E4%B8%80%E4%B8%AA%E7%96%97%E7%A8%8B%E5%B9%B3%E5%9D%87%E8%83%BD%E7%98%A615%25%23) `158.2K 🔥` `-25%`

Updated at 2026-03-07 20:23:28

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
