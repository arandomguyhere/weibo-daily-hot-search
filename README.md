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

1. [湾区升明月官宣](https://s.weibo.com/weibo?q=%23%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%E5%AE%98%E5%AE%A3%23) `1.2M 🔥` `NEW`
1. [秦始皇陵为什么不挖](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%A7%8B%E7%9A%87%E9%99%B5%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E6%8C%96%23) `840.1K 🔥` `NEW`
1. [铸牢共同体中华一家亲](https://s.weibo.com/weibo?q=%23%E9%93%B8%E7%89%A2%E5%85%B1%E5%90%8C%E4%BD%93%E4%B8%AD%E5%8D%8E%E4%B8%80%E5%AE%B6%E4%BA%B2%23) `681.5K 🔥` `NEW`
1. [中国连夺3金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%BF%9E%E5%A4%BA3%E9%87%91%23) `578.9K 🔥` `NEW`
1. [日本人平均身高被中韩超越](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%B9%B3%E5%9D%87%E8%BA%AB%E9%AB%98%E8%A2%AB%E4%B8%AD%E9%9F%A9%E8%B6%85%E8%B6%8A%23) `478.0K 🔥` `NEW`
1. [调休为什么总能吵翻天](https://s.weibo.com/weibo?q=%23%E8%B0%83%E4%BC%91%E4%B8%BA%E4%BB%80%E4%B9%88%E6%80%BB%E8%83%BD%E5%90%B5%E7%BF%BB%E5%A4%A9%23) `475.3K 🔥` `NEW`
1. [陈都灵DingLingLing生日派对](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5DingLingLing%E7%94%9F%E6%97%A5%E6%B4%BE%E5%AF%B9%23) `443.0K 🔥` `NEW`
1. [今起公积金提取场景6变9](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E8%B5%B7%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96%E5%9C%BA%E6%99%AF6%E5%8F%989%23) `396.6K 🔥` `NEW`
1. [配音演员赵然去世](https://s.weibo.com/weibo?q=%23%E9%85%8D%E9%9F%B3%E6%BC%94%E5%91%98%E8%B5%B5%E7%84%B6%E5%8E%BB%E4%B8%96%23) `371.5K 🔥` `NEW`
1. [这就是为什么强制缴纳社保的原因](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BC%BA%E5%88%B6%E7%BC%B4%E7%BA%B3%E7%A4%BE%E4%BF%9D%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `337.8K 🔥` `NEW`
1. [池昌旭 旋风少女2](https://s.weibo.com/weibo?q=%23%E6%B1%A0%E6%98%8C%E6%97%AD%20%E6%97%8B%E9%A3%8E%E5%B0%91%E5%A5%B32%23) `303.9K 🔥` `NEW`
1. [金秀贤 金赛纶](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%20%E9%87%91%E8%B5%9B%E7%BA%B6%23) `297.9K 🔥` `NEW`
1. [公积金新规正式施行](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%96%B0%E8%A7%84%E6%AD%A3%E5%BC%8F%E6%96%BD%E8%A1%8C%23) `275.9K 🔥` `NEW`
1. [曝冯禧西太后婚纱价值5万多](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%86%AF%E7%A6%A7%E8%A5%BF%E5%A4%AA%E5%90%8E%E5%A9%9A%E7%BA%B1%E4%BB%B7%E5%80%BC5%E4%B8%87%E5%A4%9A%23) `275.4K 🔥` `NEW`
1. [单依纯 尤长靖](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E5%B0%A4%E9%95%BF%E9%9D%96%23) `274.3K 🔥` `NEW`
1. [学阀](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E9%98%80%23) `256.6K 🔥` `NEW`
1. [白鹿朝玉阶招商](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9C%9D%E7%8E%89%E9%98%B6%E6%8B%9B%E5%95%86%23) `254.1K 🔥` `NEW`
1. [两年挣6.8亿元神秘艺人疑为许嵩](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%B9%B4%E6%8C%A36.8%E4%BA%BF%E5%85%83%E7%A5%9E%E7%A7%98%E8%89%BA%E4%BA%BA%E7%96%91%E4%B8%BA%E8%AE%B8%E5%B5%A9%23) `247.4K 🔥` `NEW`
1. [国乒 一日四赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E4%B8%80%E6%97%A5%E5%9B%9B%E8%B5%9B%23) `222.3K 🔥` `NEW`
1. [小米18Fold销量](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%E9%94%80%E9%87%8F%23) `222.0K 🔥` `NEW`
1. [疑似马伊琍恋情](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E9%A9%AC%E4%BC%8A%E7%90%8D%E6%81%8B%E6%83%85%23) `221.9K 🔥` `NEW`
1. [西贝走到今天这步到底该怪谁](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%B4%9D%E8%B5%B0%E5%88%B0%E4%BB%8A%E5%A4%A9%E8%BF%99%E6%AD%A5%E5%88%B0%E5%BA%95%E8%AF%A5%E6%80%AA%E8%B0%81%23) `221.9K 🔥` `NEW`
1. [女装店衣服仅穿3次一扯就坏](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E5%BA%97%E8%A1%A3%E6%9C%8D%E4%BB%85%E7%A9%BF3%E6%AC%A1%E4%B8%80%E6%89%AF%E5%B0%B1%E5%9D%8F%23) `221.6K 🔥` `NEW`
1. [冯禧离开湖南卫视的原因](https://s.weibo.com/weibo?q=%23%E5%86%AF%E7%A6%A7%E7%A6%BB%E5%BC%80%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `221.5K 🔥` `NEW`
1. [小猫认为自己是主人宝宝也要排队洗澡](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%AE%A4%E4%B8%BA%E8%87%AA%E5%B7%B1%E6%98%AF%E4%B8%BB%E4%BA%BA%E5%AE%9D%E5%AE%9D%E4%B9%9F%E8%A6%81%E6%8E%92%E9%98%9F%E6%B4%97%E6%BE%A1%23) `221.3K 🔥` `NEW`
1. [易烊千玺公司名叫羊踯躅](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%85%AC%E5%8F%B8%E5%90%8D%E5%8F%AB%E7%BE%8A%E8%B8%AF%E8%BA%85%23) `221.2K 🔥` `NEW`
1. [郭涛儿子石头拍电影了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%B6%9B%E5%84%BF%E5%AD%90%E7%9F%B3%E5%A4%B4%E6%8B%8D%E7%94%B5%E5%BD%B1%E4%BA%86%23) `211.3K 🔥` `NEW`
1. [KPL十周年宣传片](https://s.weibo.com/weibo?q=%23KPL%E5%8D%81%E5%91%A8%E5%B9%B4%E5%AE%A3%E4%BC%A0%E7%89%87%23) `208.4K 🔥` `NEW`
1. [年轻人开始不买虚的了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E4%B8%8D%E4%B9%B0%E8%99%9A%E7%9A%84%E4%BA%86%23) `208.4K 🔥` `NEW`
1. [月入一万以下最稳的理财方式](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%85%A5%E4%B8%80%E4%B8%87%E4%BB%A5%E4%B8%8B%E6%9C%80%E7%A8%B3%E7%9A%84%E7%90%86%E8%B4%A2%E6%96%B9%E5%BC%8F%23) `208.0K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `207.9K 🔥` `NEW`
1. [牙医眼中最可怕的牙病](https://s.weibo.com/weibo?q=%23%E7%89%99%E5%8C%BB%E7%9C%BC%E4%B8%AD%E6%9C%80%E5%8F%AF%E6%80%95%E7%9A%84%E7%89%99%E7%97%85%23) `207.4K 🔥` `NEW`
1. [沃尔沃S90从40万降到22万](https://s.weibo.com/weibo?q=%23%E6%B2%83%E5%B0%94%E6%B2%83S90%E4%BB%8E40%E4%B8%87%E9%99%8D%E5%88%B022%E4%B8%87%23) `179.1K 🔥` `NEW`
1. [大湾区晚会主持人阵容](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%B9%BE%E5%8C%BA%E6%99%9A%E4%BC%9A%E4%B8%BB%E6%8C%81%E4%BA%BA%E9%98%B5%E5%AE%B9%23) `177.1K 🔥` `NEW`
1. [华策祝福吴倩](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E7%AD%96%E7%A5%9D%E7%A6%8F%E5%90%B4%E5%80%A9%23) `167.7K 🔥` `NEW`
1. [中国U23男足vs伊朗U23](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDU23%E7%94%B7%E8%B6%B3vs%E4%BC%8A%E6%9C%97U23%23) `164.1K 🔥` `NEW`
1. [郑合惠子不接纯现偶不演仙侠](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E4%B8%8D%E6%8E%A5%E7%BA%AF%E7%8E%B0%E5%81%B6%E4%B8%8D%E6%BC%94%E4%BB%99%E4%BE%A0%23) `163.8K 🔥` `NEW`
1. [券商员工代客操盘巨亏9206万](https://s.weibo.com/weibo?q=%23%E5%88%B8%E5%95%86%E5%91%98%E5%B7%A5%E4%BB%A3%E5%AE%A2%E6%93%8D%E7%9B%98%E5%B7%A8%E4%BA%8F9206%E4%B8%87%23) `163.6K 🔥` `NEW`
1. [成为谷爱凌的第一步](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%B8%BA%E8%B0%B7%E7%88%B1%E5%87%8C%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AD%A5%23) `163.0K 🔥` `NEW`
1. [黄灿灿开出了黄灿灿的荣耀Magic9](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%BC%80%E5%87%BA%E4%BA%86%E9%BB%84%E7%81%BF%E7%81%BF%E7%9A%84%E8%8D%A3%E8%80%80Magic9%23) `162.2K 🔥` `NEW`
1. [交个朋友全面下架溜溜凳](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E4%B8%AA%E6%9C%8B%E5%8F%8B%E5%85%A8%E9%9D%A2%E4%B8%8B%E6%9E%B6%E6%BA%9C%E6%BA%9C%E5%87%B3%23) `161.7K 🔥` `NEW`
1. [我乔嘉了](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B9%94%E5%98%89%E4%BA%86%23) `161.4K 🔥` `NEW`
1. [亚运会奖牌榜](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%A5%96%E7%89%8C%E6%A6%9C%23) `151.8K 🔥` `NEW`
1. [国乒男团3比0中国澳门](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A23%E6%AF%940%E4%B8%AD%E5%9B%BD%E6%BE%B3%E9%97%A8%23) `151.7K 🔥` `NEW`
1. [网红超长蛋挞热量有多高](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E%E7%83%AD%E9%87%8F%E6%9C%89%E5%A4%9A%E9%AB%98%23) `151.3K 🔥` `NEW`
1. [叙利亚人开始怀念阿萨德](https://s.weibo.com/weibo?q=%23%E5%8F%99%E5%88%A9%E4%BA%9A%E4%BA%BA%E5%BC%80%E5%A7%8B%E6%80%80%E5%BF%B5%E9%98%BF%E8%90%A8%E5%BE%B7%23) `145.0K 🔥` `NEW`
1. [林珍娜嘴唇 玻尿酸](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%8F%8D%E5%A8%9C%E5%98%B4%E5%94%87%20%E7%8E%BB%E5%B0%BF%E9%85%B8%23) `139.6K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `220.9K 🔥` `+70%`
1. [长期不工作的人会失去什么](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E5%B7%A5%E4%BD%9C%E7%9A%84%E4%BA%BA%E4%BC%9A%E5%A4%B1%E5%8E%BB%E4%BB%80%E4%B9%88%23) `222.3K 🔥` `-91%`
1. [中国代表团亚运首金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BB%A3%E8%A1%A8%E5%9B%A2%E4%BA%9A%E8%BF%90%E9%A6%96%E9%87%91%23) `138.3K 🔥` `-51%`

Updated at 2026-09-20 14:07:55

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
