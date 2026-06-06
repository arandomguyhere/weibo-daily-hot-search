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

1. [金泽去世 (Kanazawa died)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%BD%E5%8E%BB%E4%B8%96%23) `18.2M 🔥` `NEW`
1. [张月多情猫首位代言人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%A4%9A%E6%83%85%E7%8C%AB%E9%A6%96%E4%BD%8D%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `9.9M 🔥` `NEW`
1. [跑男还在挑衅观众](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E8%BF%98%E5%9C%A8%E6%8C%91%E8%A1%85%E8%A7%82%E4%BC%97%23) `6.5M 🔥` `NEW`
1. [NBA总决赛马刺vs尼克斯](https://s.weibo.com/weibo?q=%23NBA%E6%80%BB%E5%86%B3%E8%B5%9B%E9%A9%AC%E5%88%BAvs%E5%B0%BC%E5%85%8B%E6%96%AF%23) `1.4M 🔥` `NEW`
1. [这是我们的大美中国](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E6%88%91%E4%BB%AC%E7%9A%84%E5%A4%A7%E7%BE%8E%E4%B8%AD%E5%9B%BD%23) `1.2M 🔥` `NEW`
1. [京东请全网女生敷面膜](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E8%AF%B7%E5%85%A8%E7%BD%91%E5%A5%B3%E7%94%9F%E6%95%B7%E9%9D%A2%E8%86%9C%23) `1.1M 🔥` `NEW`
1. [高考时间](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%97%B6%E9%97%B4%23) `1.1M 🔥` `NEW`
1. [范丞丞忘了郑恺也是初代跑男](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%BF%98%E4%BA%86%E9%83%91%E6%81%BA%E4%B9%9F%E6%98%AF%E5%88%9D%E4%BB%A3%E8%B7%91%E7%94%B7%23) `910.5K 🔥` `NEW`
1. [文班亚马致命失误](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E8%87%B4%E5%91%BD%E5%A4%B1%E8%AF%AF%23) `792.7K 🔥` `NEW`
1. [歌手谢谢验票](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E8%B0%A2%E8%B0%A2%E9%AA%8C%E7%A5%A8%23) `679.4K 🔥` `NEW`
1. [没有评价的衣服千万不要买 (Never buy clothes without reviews)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E8%AF%84%E4%BB%B7%E7%9A%84%E8%A1%A3%E6%9C%8D%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E4%B9%B0%23) `418.5K 🔥` `NEW`
1. [广东真不适合养萨摩耶](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%9C%9F%E4%B8%8D%E9%80%82%E5%90%88%E5%85%BB%E8%90%A8%E6%91%A9%E8%80%B6%23) `416.3K 🔥` `NEW`
1. [何超盈女儿在奚梦瑶婚礼上演讲](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E7%9B%88%E5%A5%B3%E5%84%BF%E5%9C%A8%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%E4%B8%8A%E6%BC%94%E8%AE%B2%23) `415.1K 🔥` `NEW`
1. [全球资产崩跌](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%B5%84%E4%BA%A7%E5%B4%A9%E8%B7%8C%23) `410.8K 🔥` `NEW`
1. [摄影师开黄腔被女子制止后P图报复](https://s.weibo.com/weibo?q=%23%E6%91%84%E5%BD%B1%E5%B8%88%E5%BC%80%E9%BB%84%E8%85%94%E8%A2%AB%E5%A5%B3%E5%AD%90%E5%88%B6%E6%AD%A2%E5%90%8EP%E5%9B%BE%E6%8A%A5%E5%A4%8D%23) `406.9K 🔥` `NEW`
1. [黄灿灿失误后将影响降低最小了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%A4%B1%E8%AF%AF%E5%90%8E%E5%B0%86%E5%BD%B1%E5%93%8D%E9%99%8D%E4%BD%8E%E6%9C%80%E5%B0%8F%E4%BA%86%23) `403.1K 🔥` `NEW`
1. [李晨郑恺回应争议](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `402.1K 🔥` `NEW`
1. [NBA总决赛G3最低票价破历史记录](https://s.weibo.com/weibo?q=%23NBA%E6%80%BB%E5%86%B3%E8%B5%9BG3%E6%9C%80%E4%BD%8E%E7%A5%A8%E4%BB%B7%E7%A0%B4%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%23) `344.7K 🔥` `NEW`
1. [虐猫举报人母亲全名被报出](https://s.weibo.com/weibo?q=%23%E8%99%90%E7%8C%AB%E4%B8%BE%E6%8A%A5%E4%BA%BA%E6%AF%8D%E4%BA%B2%E5%85%A8%E5%90%8D%E8%A2%AB%E6%8A%A5%E5%87%BA%23) `339.5K 🔥` `NEW`
1. [王濛成名之前家里不给上祖坟](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%88%90%E5%90%8D%E4%B9%8B%E5%89%8D%E5%AE%B6%E9%87%8C%E4%B8%8D%E7%BB%99%E4%B8%8A%E7%A5%96%E5%9D%9F%23) `329.4K 🔥` `NEW`
1. [全国首例盲人脑机接口复明成功 (The country's first blind man successfully regained his sight through brain-computer interface)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E4%BE%8B%E7%9B%B2%E4%BA%BA%E8%84%91%E6%9C%BA%E6%8E%A5%E5%8F%A3%E5%A4%8D%E6%98%8E%E6%88%90%E5%8A%9F%23) `323.3K 🔥` `NEW`
1. [国际空间站宇航员准备随时撤离](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E7%A9%BA%E9%97%B4%E7%AB%99%E5%AE%87%E8%88%AA%E5%91%98%E5%87%86%E5%A4%87%E9%9A%8F%E6%97%B6%E6%92%A4%E7%A6%BB%23) `313.8K 🔥` `NEW`
1. [小伙深夜飙车炫技挑衅全市公安](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E6%B7%B1%E5%A4%9C%E9%A3%99%E8%BD%A6%E7%82%AB%E6%8A%80%E6%8C%91%E8%A1%85%E5%85%A8%E5%B8%82%E5%85%AC%E5%AE%89%23) `289.4K 🔥` `NEW`
1. [王濛金牌含金量](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E9%87%91%E7%89%8C%E5%90%AB%E9%87%91%E9%87%8F%23) `278.4K 🔥` `NEW`
1. [李登科聊刘亦菲7折捡漏刘诗诗代言](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E8%81%8A%E5%88%98%E4%BA%A6%E8%8F%B27%E6%8A%98%E6%8D%A1%E6%BC%8F%E5%88%98%E8%AF%97%E8%AF%97%E4%BB%A3%E8%A8%80%23) `271.0K 🔥` `NEW`
1. [不要摘不要吃宁波路边已大量出现](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E6%91%98%E4%B8%8D%E8%A6%81%E5%90%83%E5%AE%81%E6%B3%A2%E8%B7%AF%E8%BE%B9%E5%B7%B2%E5%A4%A7%E9%87%8F%E5%87%BA%E7%8E%B0%23) `260.1K 🔥` `NEW`
1. [温峥嵘道歉](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E9%81%93%E6%AD%89%23) `258.6K 🔥` `NEW`
1. [浪姐观众 金牌的king](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%A7%82%E4%BC%97%20%E9%87%91%E7%89%8C%E7%9A%84king%23) `254.9K 🔥` `NEW`
1. [黄金白银崩跌原因](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E5%B4%A9%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `254.6K 🔥` `NEW`
1. [你多久没喊过Siri了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A4%9A%E4%B9%85%E6%B2%A1%E5%96%8A%E8%BF%87Siri%E4%BA%86%23) `253.6K 🔥` `NEW`
1. [力量训练是慢性病的隐形处方 (Strength training is a hidden prescription for chronic disease)](https://s.weibo.com/weibo?q=%23%E5%8A%9B%E9%87%8F%E8%AE%AD%E7%BB%83%E6%98%AF%E6%85%A2%E6%80%A7%E7%97%85%E7%9A%84%E9%9A%90%E5%BD%A2%E5%A4%84%E6%96%B9%23) `253.0K 🔥` `NEW`
1. [鸡肉被日本人吃涨价了](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E8%82%89%E8%A2%AB%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%90%83%E6%B6%A8%E4%BB%B7%E4%BA%86%23) `252.3K 🔥` `NEW`
1. [江语晨崩溃大哭](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `252.1K 🔥` `NEW`
1. [曝白鹿开到荼靡导演李木戈](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E9%B9%BF%E5%BC%80%E5%88%B0%E8%8D%BC%E9%9D%A1%E5%AF%BC%E6%BC%94%E6%9D%8E%E6%9C%A8%E6%88%88%23) `250.4K 🔥` `NEW`
1. [等着李荣浩的好好考](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%9D%80%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9A%84%E5%A5%BD%E5%A5%BD%E8%80%83%23) `248.9K 🔥` `NEW`
1. [海莉甲](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E8%8E%89%E7%94%B2%23) `217.2K 🔥` `NEW`
1. [NBA](https://s.weibo.com/weibo?q=%23NBA%23) `208.7K 🔥` `NEW`
1. [王一博体验做帽子](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BD%93%E9%AA%8C%E5%81%9A%E5%B8%BD%E5%AD%90%23) `198.8K 🔥` `NEW`
1. [李羲承直播道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E7%9B%B4%E6%92%AD%E9%81%93%E6%AD%89%23) `193.6K 🔥` `NEW`
1. [高考加油红包](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%8A%A0%E6%B2%B9%E7%BA%A2%E5%8C%85%23) `190.3K 🔥` `NEW`
1. [远看树冒烟近看全是虫 (From a distance, the trees are smoking, but up close, they are full of insects.)](https://s.weibo.com/weibo?q=%23%E8%BF%9C%E7%9C%8B%E6%A0%91%E5%86%92%E7%83%9F%E8%BF%91%E7%9C%8B%E5%85%A8%E6%98%AF%E8%99%AB%23) `189.9K 🔥` `NEW`
1. [24岁男子称从警20年演到派出所](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E7%94%B7%E5%AD%90%E7%A7%B0%E4%BB%8E%E8%AD%A620%E5%B9%B4%E6%BC%94%E5%88%B0%E6%B4%BE%E5%87%BA%E6%89%80%23) `189.6K 🔥` `NEW`
1. [鸡蛋骗局洗脑现场画面曝光](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E8%9B%8B%E9%AA%97%E5%B1%80%E6%B4%97%E8%84%91%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `189.1K 🔥` `NEW`
1. [摩托车驾驶员为博流量飙到高铁速度](https://s.weibo.com/weibo?q=%23%E6%91%A9%E6%89%98%E8%BD%A6%E9%A9%BE%E9%A9%B6%E5%91%98%E4%B8%BA%E5%8D%9A%E6%B5%81%E9%87%8F%E9%A3%99%E5%88%B0%E9%AB%98%E9%93%81%E9%80%9F%E5%BA%A6%23) `188.6K 🔥` `NEW`
1. [北京大学红包](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%BA%A2%E5%8C%85%23) `188.4K 🔥` `NEW`
1. [唐斯半场打爆文班](https://s.weibo.com/weibo?q=%23%E5%94%90%E6%96%AF%E5%8D%8A%E5%9C%BA%E6%89%93%E7%88%86%E6%96%87%E7%8F%AD%23) `178.5K 🔥` `NEW`
1. [iPhone17续航有望改善](https://s.weibo.com/weibo?q=%23iPhone17%E7%BB%AD%E8%88%AA%E6%9C%89%E6%9C%9B%E6%94%B9%E5%96%84%23) `177.4K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `177.2K 🔥` `NEW`
1. [马嘉祺有一个流浪猫狗救助站](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%9C%89%E4%B8%80%E4%B8%AA%E6%B5%81%E6%B5%AA%E7%8C%AB%E7%8B%97%E6%95%91%E5%8A%A9%E7%AB%99%23) `171.3K 🔥` `NEW`
1. [有些串串店老板是容嬷嬷转世](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%9B%E4%B8%B2%E4%B8%B2%E5%BA%97%E8%80%81%E6%9D%BF%E6%98%AF%E5%AE%B9%E5%AC%B7%E5%AC%B7%E8%BD%AC%E4%B8%96%23) `169.0K 🔥` `NEW`
1. [唐艺昕假发掉了 (Tang Yixin's wig fell off)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%81%87%E5%8F%91%E6%8E%89%E4%BA%86%23) `260.9K 🔥` `+67%`
1. [男子胸痛挂号13分钟医生出现](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%83%B8%E7%97%9B%E6%8C%82%E5%8F%B713%E5%88%86%E9%92%9F%E5%8C%BB%E7%94%9F%E5%87%BA%E7%8E%B0%23) `250.5K 🔥` `-74%`

Updated at 2026-06-06 12:15:29

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
