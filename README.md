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

1. [iPhone20Pro爆料 (iPhone20Pro revealed)](https://s.weibo.com/weibo?q=%23iPhone20Pro%E7%88%86%E6%96%99%23) `960.9K 🔥` `NEW`
1. [这份暴雨避险指南关键时能救命](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BB%BD%E6%9A%B4%E9%9B%A8%E9%81%BF%E9%99%A9%E6%8C%87%E5%8D%97%E5%85%B3%E9%94%AE%E6%97%B6%E8%83%BD%E6%95%91%E5%91%BD%23) `882.7K 🔥` `NEW`
1. [河南暴雨](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%9A%B4%E9%9B%A8%23) `572.2K 🔥` `NEW`
1. [再见朋友](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%23) `529.5K 🔥` `NEW`
1. [男子殴打女友致死被判误杀](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%AE%B4%E6%89%93%E5%A5%B3%E5%8F%8B%E8%87%B4%E6%AD%BB%E8%A2%AB%E5%88%A4%E8%AF%AF%E6%9D%80%23) `380.4K 🔥` `NEW`
1. [被刺19岁辅警摩托车噪音达110分贝](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%88%BA19%E5%B2%81%E8%BE%85%E8%AD%A6%E6%91%A9%E6%89%98%E8%BD%A6%E5%99%AA%E9%9F%B3%E8%BE%BE110%E5%88%86%E8%B4%9D%23) `376.9K 🔥` `NEW`
1. [辛芷蕾又拿大奖了](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%8F%88%E6%8B%BF%E5%A4%A7%E5%A5%96%E4%BA%86%23) `365.1K 🔥` `NEW`
1. [蜜雪冰城星巴克](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%E6%98%9F%E5%B7%B4%E5%85%8B%23) `341.4K 🔥` `NEW`
1. [李健称放弃RobotPhone有一万个理由](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%E7%A7%B0%E6%94%BE%E5%BC%83RobotPhone%E6%9C%89%E4%B8%80%E4%B8%87%E4%B8%AA%E7%90%86%E7%94%B1%23) `340.6K 🔥` `NEW`
1. [维嘉吴昕仿妆把何炅吓到挂电话](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%98%89%E5%90%B4%E6%98%95%E4%BB%BF%E5%A6%86%E6%8A%8A%E4%BD%95%E7%82%85%E5%90%93%E5%88%B0%E6%8C%82%E7%94%B5%E8%AF%9D%23) `340.4K 🔥` `NEW`
1. [家属不知女儿遇害与凶手父母同床睡 (Family members didn’t know their daughter was murdered and slept in the same bed as the murderer’s parents)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E4%B8%8D%E7%9F%A5%E5%A5%B3%E5%84%BF%E9%81%87%E5%AE%B3%E4%B8%8E%E5%87%B6%E6%89%8B%E7%88%B6%E6%AF%8D%E5%90%8C%E5%BA%8A%E7%9D%A1%23) `340.3K 🔥` `NEW`
1. [经常熬夜的人多吃3类食物](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E5%B8%B8%E7%86%AC%E5%A4%9C%E7%9A%84%E4%BA%BA%E5%A4%9A%E5%90%833%E7%B1%BB%E9%A3%9F%E7%89%A9%23) `339.6K 🔥` `NEW`
1. [美国大学生提分手遭印度男友勒死](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%8F%90%E5%88%86%E6%89%8B%E9%81%AD%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%8F%8B%E5%8B%92%E6%AD%BB%23) `328.5K 🔥` `NEW`
1. [女大学生称遭偷拍手机满屏都是腿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%A7%B0%E9%81%AD%E5%81%B7%E6%8B%8D%E6%89%8B%E6%9C%BA%E6%BB%A1%E5%B1%8F%E9%83%BD%E6%98%AF%E8%85%BF%23) `324.5K 🔥` `NEW`
1. [豪车换购ES8成热门选择](https://s.weibo.com/weibo?q=%23%E8%B1%AA%E8%BD%A6%E6%8D%A2%E8%B4%ADES8%E6%88%90%E7%83%AD%E9%97%A8%E9%80%89%E6%8B%A9%23) `314.8K 🔥` `NEW`
1. [被刺死辅警父母索赔413万](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%88%BA%E6%AD%BB%E8%BE%85%E8%AD%A6%E7%88%B6%E6%AF%8D%E7%B4%A2%E8%B5%94413%E4%B8%87%23) `303.4K 🔥` `NEW`
1. [发达国家的冰激凌的量居然也这么大](https://s.weibo.com/weibo?q=%23%E5%8F%91%E8%BE%BE%E5%9B%BD%E5%AE%B6%E7%9A%84%E5%86%B0%E6%BF%80%E5%87%8C%E7%9A%84%E9%87%8F%E5%B1%85%E7%84%B6%E4%B9%9F%E8%BF%99%E4%B9%88%E5%A4%A7%23) `295.5K 🔥` `NEW`
1. [小猫没进来之前我以为能有多大呢](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E6%B2%A1%E8%BF%9B%E6%9D%A5%E4%B9%8B%E5%89%8D%E6%88%91%E4%BB%A5%E4%B8%BA%E8%83%BD%E6%9C%89%E5%A4%9A%E5%A4%A7%E5%91%A2%23) `283.5K 🔥` `NEW`
1. [九门窄娘娘竟然是人](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E7%AA%84%E5%A8%98%E5%A8%98%E7%AB%9F%E7%84%B6%E6%98%AF%E4%BA%BA%23) `238.2K 🔥` `NEW`
1. [黑尾酱是李诞前妻](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%B0%BE%E9%85%B1%E6%98%AF%E6%9D%8E%E8%AF%9E%E5%89%8D%E5%A6%BB%23) `230.3K 🔥` `NEW`
1. [抗癌网红江小鱼去世 (Anti-cancer internet celebrity Jiang Xiaoyu dies)](https://s.weibo.com/weibo?q=%23%E6%8A%97%E7%99%8C%E7%BD%91%E7%BA%A2%E6%B1%9F%E5%B0%8F%E9%B1%BC%E5%8E%BB%E4%B8%96%23) `219.1K 🔥` `NEW`
1. [结婚对每代人都有着不同的意义](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E5%AF%B9%E6%AF%8F%E4%BB%A3%E4%BA%BA%E9%83%BD%E6%9C%89%E7%9D%80%E4%B8%8D%E5%90%8C%E7%9A%84%E6%84%8F%E4%B9%89%23) `217.4K 🔥` `NEW`
1. [曝赵一鸣小票上商品复称全被多算了分量](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B5%B5%E4%B8%80%E9%B8%A3%E5%B0%8F%E7%A5%A8%E4%B8%8A%E5%95%86%E5%93%81%E5%A4%8D%E7%A7%B0%E5%85%A8%E8%A2%AB%E5%A4%9A%E7%AE%97%E4%BA%86%E5%88%86%E9%87%8F%23) `199.7K 🔥` `NEW`
1. [高价洞洞鞋为什么卖不动了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BB%B7%E6%B4%9E%E6%B4%9E%E9%9E%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `744.2K 🔥` `+102%`
1. [乔治娜一开始并不相信C罗要娶她](https://s.weibo.com/weibo?q=%23%E4%B9%94%E6%B2%BB%E5%A8%9C%E4%B8%80%E5%BC%80%E5%A7%8B%E5%B9%B6%E4%B8%8D%E7%9B%B8%E4%BF%A1C%E7%BD%97%E8%A6%81%E5%A8%B6%E5%A5%B9%23) `414.7K 🔥` `+47%`
1. [Chatgpt把Deepseek当宿敌了](https://s.weibo.com/weibo?q=%23Chatgpt%E6%8A%8ADeepseek%E5%BD%93%E5%AE%BF%E6%95%8C%E4%BA%86%23) `341.3K 🔥` `+50%`
1. [Angelababy马尔代夫游客照](https://s.weibo.com/weibo?q=%23Angelababy%E9%A9%AC%E5%B0%94%E4%BB%A3%E5%A4%AB%E6%B8%B8%E5%AE%A2%E7%85%A7%23) `341.0K 🔥` `+36%`
1. [李现张婧仪这是剧宣不是官宣 (Li Xian, Zhang Jingyi, this is a drama announcement, not an official announcement)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%BC%A0%E5%A9%A7%E4%BB%AA%E8%BF%99%E6%98%AF%E5%89%A7%E5%AE%A3%E4%B8%8D%E6%98%AF%E5%AE%98%E5%AE%A3%23) `310.2K 🔥` `+24%`
1. [黑尾酱疑似再婚](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%B0%BE%E9%85%B1%E7%96%91%E4%BC%BC%E5%86%8D%E5%A9%9A%23) `406.5K 🔥`
1. [原来姚安娜是艺名](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A7%9A%E5%AE%89%E5%A8%9C%E6%98%AF%E8%89%BA%E5%90%8D%23) `395.6K 🔥`
1. [时代峰峻防泄露把五代套黑塑料袋 (Times Fengjun anti-leakage cover with black plastic bag for the fifth generation)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%98%B2%E6%B3%84%E9%9C%B2%E6%8A%8A%E4%BA%94%E4%BB%A3%E5%A5%97%E9%BB%91%E5%A1%91%E6%96%99%E8%A2%8B%23) `344.3K 🔥`
1. [男子被炸街吵醒刺死骑行辅警](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E7%82%B8%E8%A1%97%E5%90%B5%E9%86%92%E5%88%BA%E6%AD%BB%E9%AA%91%E8%A1%8C%E8%BE%85%E8%AD%A6%23) `340.8K 🔥`
1. [胖东来因房东涨租关店 (Fat Donglai closes shop because landlord raises rent)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%A0%E6%88%BF%E4%B8%9C%E6%B6%A8%E7%A7%9F%E5%85%B3%E5%BA%97%23) `340.1K 🔥`
1. [朋友圈先私密几天再公开](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%85%88%E7%A7%81%E5%AF%86%E5%87%A0%E5%A4%A9%E5%86%8D%E5%85%AC%E5%BC%80%23) `339.7K 🔥`
1. [杨洋倩女幽魂cos](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%80%A9%E5%A5%B3%E5%B9%BD%E9%AD%82cos%23) `289.2K 🔥`
1. [C罗宣布结婚 (Cristiano Ronaldo announces marriage)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `1.8M 🔥` `-35%`
1. [陈俊生离婚后为什么对平儿不好](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E7%94%9F%E7%A6%BB%E5%A9%9A%E5%90%8E%E4%B8%BA%E4%BB%80%E4%B9%88%E5%AF%B9%E5%B9%B3%E5%84%BF%E4%B8%8D%E5%A5%BD%23) `837.0K 🔥` `-29%`
1. [李现王真儿李泽锋合照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%8E%8B%E7%9C%9F%E5%84%BF%E6%9D%8E%E6%B3%BD%E9%94%8B%E5%90%88%E7%85%A7%23) `718.1K 🔥` `-33%`
1. [高钾晚餐可以让人睡得更香 (A high-potassium dinner can help people sleep more soundly)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%92%BE%E6%99%9A%E9%A4%90%E5%8F%AF%E4%BB%A5%E8%AE%A9%E4%BA%BA%E7%9D%A1%E5%BE%97%E6%9B%B4%E9%A6%99%23) `417.3K 🔥` `-52%`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `339.5K 🔥` `-70%`
1. [新业态激活日常消费市场 (New business formats activate daily consumer market)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%9A%E6%80%81%E6%BF%80%E6%B4%BB%E6%97%A5%E5%B8%B8%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%23) `332.9K 🔥` `-71%`
1. [男子不堪炸街噪音刺死辅警被判死刑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8D%E5%A0%AA%E7%82%B8%E8%A1%97%E5%99%AA%E9%9F%B3%E5%88%BA%E6%AD%BB%E8%BE%85%E8%AD%A6%E8%A2%AB%E5%88%A4%E6%AD%BB%E5%88%91%23) `281.0K 🔥` `-26%`
1. [阚清子给粉丝准备了黄金](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E7%BB%99%E7%B2%89%E4%B8%9D%E5%87%86%E5%A4%87%E4%BA%86%E9%BB%84%E9%87%91%23) `241.3K 🔥` `-27%`
1. [iPhone18Pro成本](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%88%90%E6%9C%AC%23) `236.5K 🔥` `-69%`
1. [小酒窝和爸爸在一起就像小孩子](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E5%92%8C%E7%88%B8%E7%88%B8%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%B0%B1%E5%83%8F%E5%B0%8F%E5%AD%A9%E5%AD%90%23) `202.8K 🔥` `-45%`
1. [步惊云脱口秀 杀猪盘 (Bu Jingyun talk show pig killing plate)](https://s.weibo.com/weibo?q=%23%E6%AD%A5%E6%83%8A%E4%BA%91%E8%84%B1%E5%8F%A3%E7%A7%80%20%E6%9D%80%E7%8C%AA%E7%9B%98%23) `201.1K 🔥` `-43%`
1. [31省上半年财政收入出炉](https://s.weibo.com/weibo?q=%2331%E7%9C%81%E4%B8%8A%E5%8D%8A%E5%B9%B4%E8%B4%A2%E6%94%BF%E6%94%B6%E5%85%A5%E5%87%BA%E7%82%89%23) `195.1K 🔥` `-48%`
1. [杨幂王骁合作过10部剧](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%8E%8B%E9%AA%81%E5%90%88%E4%BD%9C%E8%BF%8710%E9%83%A8%E5%89%A7%23) `194.2K 🔥` `-44%`
1. [陈思诚现身女友家乡](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E7%8E%B0%E8%BA%AB%E5%A5%B3%E5%8F%8B%E5%AE%B6%E4%B9%A1%23) `193.8K 🔥` `-40%`
1. [NBA历史首次父子对决](https://s.weibo.com/weibo?q=%23NBA%E5%8E%86%E5%8F%B2%E9%A6%96%E6%AC%A1%E7%88%B6%E5%AD%90%E5%AF%B9%E5%86%B3%23) `190.6K 🔥` `-51%`

Updated at 2026-08-12 13:59:45

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
