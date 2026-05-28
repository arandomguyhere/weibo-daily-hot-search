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

1. [吉利星愿价格 (Geely Star Wish price)](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%88%A9%E6%98%9F%E6%84%BF%E4%BB%B7%E6%A0%BC%23) `1.1M 🔥` `NEW`
1. [中国军队外逼驱离侵闯荷兰直升机](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E9%98%9F%E5%A4%96%E9%80%BC%E9%A9%B1%E7%A6%BB%E4%BE%B5%E9%97%AF%E8%8D%B7%E5%85%B0%E7%9B%B4%E5%8D%87%E6%9C%BA%23) `1.1M 🔥` `NEW`
1. [高质量发展民企行](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E6%B0%91%E4%BC%81%E8%A1%8C%23) `1.0M 🔥` `NEW`
1. [比亚迪智能化战略发布会](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E6%99%BA%E8%83%BD%E5%8C%96%E6%88%98%E7%95%A5%E5%8F%91%E5%B8%83%E4%BC%9A%23) `933.7K 🔥` `NEW`
1. [县委书记将打火机藏鞋底考验矿企安检](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E5%B0%86%E6%89%93%E7%81%AB%E6%9C%BA%E8%97%8F%E9%9E%8B%E5%BA%95%E8%80%83%E9%AA%8C%E7%9F%BF%E4%BC%81%E5%AE%89%E6%A3%80%23) `898.1K 🔥` `NEW`
1. [清华女博士被丈夫当街抢娃最新进展](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A5%B3%E5%8D%9A%E5%A3%AB%E8%A2%AB%E4%B8%88%E5%A4%AB%E5%BD%93%E8%A1%97%E6%8A%A2%E5%A8%83%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `829.8K 🔥` `NEW`
1. [印度 空调外机](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%20%E7%A9%BA%E8%B0%83%E5%A4%96%E6%9C%BA%23) `815.6K 🔥` `NEW`
1. [610km宁德时代电池SUV打入10万内](https://s.weibo.com/weibo?q=%23610km%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E7%94%B5%E6%B1%A0SUV%E6%89%93%E5%85%A510%E4%B8%87%E5%86%85%23) `813.6K 🔥` `NEW`
1. [小巷人家2](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%23) `812.6K 🔥` `NEW`
1. [后车司机笑了半小时才敢开车上路](https://s.weibo.com/weibo?q=%23%E5%90%8E%E8%BD%A6%E5%8F%B8%E6%9C%BA%E7%AC%91%E4%BA%86%E5%8D%8A%E5%B0%8F%E6%97%B6%E6%89%8D%E6%95%A2%E5%BC%80%E8%BD%A6%E4%B8%8A%E8%B7%AF%23) `701.3K 🔥` `NEW`
1. [JDG北北调查结果 (JDG North North survey results)](https://s.weibo.com/weibo?q=%23JDG%E5%8C%97%E5%8C%97%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `408.7K 🔥` `NEW`
1. [河南追尾事故车主被控制](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%BF%BD%E5%B0%BE%E4%BA%8B%E6%95%85%E8%BD%A6%E4%B8%BB%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `390.3K 🔥` `NEW`
1. [欧阳娣娣晒与严浩翔合照](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%A3%E5%A8%A3%E6%99%92%E4%B8%8E%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%90%88%E7%85%A7%23) `356.5K 🔥` `NEW`
1. [杨紫白玉兰切片换了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E5%88%87%E7%89%87%E6%8D%A2%E4%BA%86%23) `338.7K 🔥` `NEW`
1. [比亚迪发布会](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `327.6K 🔥` `NEW`
1. [金价跌了反而不敢买了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E4%BA%86%E5%8F%8D%E8%80%8C%E4%B8%8D%E6%95%A2%E4%B9%B0%E4%BA%86%23) `304.6K 🔥` `NEW`
1. [男子遭妻子家暴跳楼身亡细节公开](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%81%AD%E5%A6%BB%E5%AD%90%E5%AE%B6%E6%9A%B4%E8%B7%B3%E6%A5%BC%E8%BA%AB%E4%BA%A1%E7%BB%86%E8%8A%82%E5%85%AC%E5%BC%80%23) `276.5K 🔥` `NEW`
1. [体验下一代电影院](https://s.weibo.com/weibo?q=%23%E4%BD%93%E9%AA%8C%E4%B8%8B%E4%B8%80%E4%BB%A3%E7%94%B5%E5%BD%B1%E9%99%A2%23) `275.9K 🔥` `NEW`
1. [男子遛狗从不拴绳撞死人否认养狗](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%81%9B%E7%8B%97%E4%BB%8E%E4%B8%8D%E6%8B%B4%E7%BB%B3%E6%92%9E%E6%AD%BB%E4%BA%BA%E5%90%A6%E8%AE%A4%E5%85%BB%E7%8B%97%23) `275.5K 🔥` `NEW`
1. [刘恺威 李晓峰](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%BA%E5%A8%81%20%E6%9D%8E%E6%99%93%E5%B3%B0%23) `274.2K 🔥` `NEW`
1. [田曦薇看张凌赫穿大深V的表情 (Tian Xiwei’s expression when she saw Zhang Linghe wearing a deep V)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%9C%8B%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%A9%BF%E5%A4%A7%E6%B7%B1V%E7%9A%84%E8%A1%A8%E6%83%85%23) `273.9K 🔥` `NEW`
1. [会说话在工作中很重要](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E8%AF%B4%E8%AF%9D%E5%9C%A8%E5%B7%A5%E4%BD%9C%E4%B8%AD%E5%BE%88%E9%87%8D%E8%A6%81%23) `273.1K 🔥` `NEW`
1. [周也恋情风波后首更博](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E6%81%8B%E6%83%85%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E6%9B%B4%E5%8D%9A%23) `272.4K 🔥` `NEW`
1. [戚薇李承铉儿子都这么大了](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E6%9D%8E%E6%89%BF%E9%93%89%E5%84%BF%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `270.1K 🔥` `NEW`
1. [广东一游客从瀑布上游滑落坠亡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%B8%80%E6%B8%B8%E5%AE%A2%E4%BB%8E%E7%80%91%E5%B8%83%E4%B8%8A%E6%B8%B8%E6%BB%91%E8%90%BD%E5%9D%A0%E4%BA%A1%23) `268.6K 🔥` `NEW`
1. [德云社处罚杨鹤通](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E4%BA%91%E7%A4%BE%E5%A4%84%E7%BD%9A%E6%9D%A8%E9%B9%A4%E9%80%9A%23) `266.5K 🔥` `NEW`
1. [杨鹤通 曹云金](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E9%B9%A4%E9%80%9A%20%E6%9B%B9%E4%BA%91%E9%87%91%23) `265.6K 🔥` `NEW`
1. [同一个人的早上和晚上区别有多大](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E6%97%A9%E4%B8%8A%E5%92%8C%E6%99%9A%E4%B8%8A%E5%8C%BA%E5%88%AB%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `264.7K 🔥` `NEW`
1. [卢昱晓晒与檀健次合照](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%99%92%E4%B8%8E%E6%AA%80%E5%81%A5%E6%AC%A1%E5%90%88%E7%85%A7%23) `260.5K 🔥` `NEW`
1. [黄磊我也不舒服了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E6%88%91%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `252.1K 🔥` `NEW`
1. [儿童精神问题大多是代谢问题的终局 (Most mental problems in children are the result of metabolic problems)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E7%AB%A5%E7%B2%BE%E7%A5%9E%E9%97%AE%E9%A2%98%E5%A4%A7%E5%A4%9A%E6%98%AF%E4%BB%A3%E8%B0%A2%E9%97%AE%E9%A2%98%E7%9A%84%E7%BB%88%E5%B1%80%23) `243.8K 🔥` `NEW`
1. [杜华想挖走鞠婧祎化妆师](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E6%83%B3%E6%8C%96%E8%B5%B0%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8C%96%E5%A6%86%E5%B8%88%23) `243.4K 🔥` `NEW`
1. [TF四代 济宁](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%20%E6%B5%8E%E5%AE%81%23) `242.7K 🔥` `NEW`
1. [终于有人把自卑和敏感形容出来了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E6%8A%8A%E8%87%AA%E5%8D%91%E5%92%8C%E6%95%8F%E6%84%9F%E5%BD%A2%E5%AE%B9%E5%87%BA%E6%9D%A5%E4%BA%86%23) `237.7K 🔥` `NEW`
1. [王传君说徐志胜沈月的cp好嗑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E8%AF%B4%E5%BE%90%E5%BF%97%E8%83%9C%E6%B2%88%E6%9C%88%E7%9A%84cp%E5%A5%BD%E5%97%91%23) `235.0K 🔥` `NEW`
1. [张凌赫母校江苏省天一中学发来喜报](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%AF%8D%E6%A0%A1%E6%B1%9F%E8%8B%8F%E7%9C%81%E5%A4%A9%E4%B8%80%E4%B8%AD%E5%AD%A6%E5%8F%91%E6%9D%A5%E5%96%9C%E6%8A%A5%23) `234.0K 🔥` `NEW`
1. [小鹏2026年Q1营收130亿元](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F2026%E5%B9%B4Q1%E8%90%A5%E6%94%B6130%E4%BA%BF%E5%85%83%23) `221.1K 🔥` `NEW`
1. [赵今麦王安宇 一念江南](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%8E%8B%E5%AE%89%E5%AE%87%20%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `212.5K 🔥` `NEW`
1. [宁艺卓Gucci广告](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93Gucci%E5%B9%BF%E5%91%8A%23) `193.7K 🔥` `NEW`
1. [伊能静大仇得报](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E5%A4%A7%E4%BB%87%E5%BE%97%E6%8A%A5%23) `189.3K 🔥` `NEW`
1. [PEL开幕式对我眼睛很好 (The opening ceremony of PEL is good for my eyes)](https://s.weibo.com/weibo?q=%23PEL%E5%BC%80%E5%B9%95%E5%BC%8F%E5%AF%B9%E6%88%91%E7%9C%BC%E7%9D%9B%E5%BE%88%E5%A5%BD%23) `188.6K 🔥` `NEW`
1. [多国博主都曾在富士山下便利店跳舞](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E5%8D%9A%E4%B8%BB%E9%83%BD%E6%9B%BE%E5%9C%A8%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B%E4%BE%BF%E5%88%A9%E5%BA%97%E8%B7%B3%E8%88%9E%23) `188.2K 🔥` `NEW`
1. [AG赵腾 赛训团队无任何变动](https://s.weibo.com/weibo?q=%23AG%E8%B5%B5%E8%85%BE%20%E8%B5%9B%E8%AE%AD%E5%9B%A2%E9%98%9F%E6%97%A0%E4%BB%BB%E4%BD%95%E5%8F%98%E5%8A%A8%23) `288.1K 🔥` `+88%`
1. [主角刘红兵疑似车祸去世](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E5%88%98%E7%BA%A2%E5%85%B5%E7%96%91%E4%BC%BC%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96%23) `272.0K 🔥` `+50%`
1. [曝景甜降价出售上海豪宅](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%99%AF%E7%94%9C%E9%99%8D%E4%BB%B7%E5%87%BA%E5%94%AE%E4%B8%8A%E6%B5%B7%E8%B1%AA%E5%AE%85%23) `274.6K 🔥`
1. [美国年轻人街头围攻外卖机器人](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B9%B4%E8%BD%BB%E4%BA%BA%E8%A1%97%E5%A4%B4%E5%9B%B4%E6%94%BB%E5%A4%96%E5%8D%96%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `270.6K 🔥`
1. [活荔枝 死荔枝](https://s.weibo.com/weibo?q=%23%E6%B4%BB%E8%8D%94%E6%9E%9D%20%E6%AD%BB%E8%8D%94%E6%9E%9D%23) `411.1K 🔥` `-42%`
1. [浪姐节目组发甲醛检测报告](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%8A%82%E7%9B%AE%E7%BB%84%E5%8F%91%E7%94%B2%E9%86%9B%E6%A3%80%E6%B5%8B%E6%8A%A5%E5%91%8A%23) `276.6K 🔥` `-59%`
1. [主角 泄漏 (Protagonist leaked)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E6%B3%84%E6%BC%8F%23) `272.7K 🔥` `-82%`
1. [现在的鞋底越做越窄了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E9%9E%8B%E5%BA%95%E8%B6%8A%E5%81%9A%E8%B6%8A%E7%AA%84%E4%BA%86%23) `198.5K 🔥` `-63%`
1. [BLG五人全员一阵](https://s.weibo.com/weibo?q=%23BLG%E4%BA%94%E4%BA%BA%E5%85%A8%E5%91%98%E4%B8%80%E9%98%B5%23) `188.3K 🔥` `-34%`

Updated at 2026-05-28 20:00:02

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
