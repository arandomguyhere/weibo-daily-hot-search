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

1. [许家印满头白发 (Xu Jiayin has a head full of white hair)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E6%BB%A1%E5%A4%B4%E7%99%BD%E5%8F%91%23) `2.2M 🔥` `NEW`
1. [我的超话纪念册](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E8%B6%85%E8%AF%9D%E7%BA%AA%E5%BF%B5%E5%86%8C%23) `745.9K 🔥` `NEW`
1. [恒大5名高管获刑6至18年](https://s.weibo.com/weibo?q=%23%E6%81%92%E5%A4%A75%E5%90%8D%E9%AB%98%E7%AE%A1%E8%8E%B7%E5%88%916%E8%87%B318%E5%B9%B4%23) `345.0K 🔥` `NEW`
1. [起亚蔡徐坤](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E4%BA%9A%E8%94%A1%E5%BE%90%E5%9D%A4%23) `325.4K 🔥` `NEW`
1. [追梦格林被大鹅吓到](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E6%A2%A6%E6%A0%BC%E6%9E%97%E8%A2%AB%E5%A4%A7%E9%B9%85%E5%90%93%E5%88%B0%23) `324.3K 🔥` `NEW`
1. [虞书欣线下巡回快闪](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%BA%BF%E4%B8%8B%E5%B7%A1%E5%9B%9E%E5%BF%AB%E9%97%AA%23) `320.5K 🔥` `NEW`
1. [建议大家去看外贸综艺](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8E%BB%E7%9C%8B%E5%A4%96%E8%B4%B8%E7%BB%BC%E8%89%BA%23) `305.6K 🔥` `NEW`
1. [空枪](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `295.8K 🔥` `NEW`
1. [MRC对战成都GG](https://s.weibo.com/weibo?q=%23MRC%E5%AF%B9%E6%88%98%E6%88%90%E9%83%BDGG%23) `255.7K 🔥` `NEW`
1. [52岁女演员朱晏为前夫负债600万](https://s.weibo.com/weibo?q=%2352%E5%B2%81%E5%A5%B3%E6%BC%94%E5%91%98%E6%9C%B1%E6%99%8F%E4%B8%BA%E5%89%8D%E5%A4%AB%E8%B4%9F%E5%80%BA600%E4%B8%87%23) `237.7K 🔥` `NEW`
1. [萨巴伦卡无缘辛辛那提站8强 (Sabalenka misses Cincinnati quarterfinals)](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E6%97%A0%E7%BC%98%E8%BE%9B%E8%BE%9B%E9%82%A3%E6%8F%90%E7%AB%998%E5%BC%BA%23) `237.6K 🔥` `NEW`
1. [李秀满名言被宁静听进去了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%A7%80%E6%BB%A1%E5%90%8D%E8%A8%80%E8%A2%AB%E5%AE%81%E9%9D%99%E5%90%AC%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `235.2K 🔥` `NEW`
1. [刘亦菲把我拉过去的望周知](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%8A%8A%E6%88%91%E6%8B%89%E8%BF%87%E5%8E%BB%E7%9A%84%E6%9C%9B%E5%91%A8%E7%9F%A5%23) `226.4K 🔥` `NEW`
1. [AG4分53秒结束比赛](https://s.weibo.com/weibo?q=%23AG4%E5%88%8653%E7%A7%92%E7%BB%93%E6%9D%9F%E6%AF%94%E8%B5%9B%23) `199.1K 🔥` `NEW`
1. [动漫仲夏狂欢季](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E6%BC%AB%E4%BB%B2%E5%A4%8F%E7%8B%82%E6%AC%A2%E5%AD%A3%23) `190.7K 🔥` `NEW`
1. [张凌赫开推4收官发文](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BC%80%E6%8E%A84%E6%94%B6%E5%AE%98%E5%8F%91%E6%96%87%23) `189.1K 🔥` `NEW`
1. [河北涿州 代孕机构](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E6%B6%BF%E5%B7%9E%20%E4%BB%A3%E5%AD%95%E6%9C%BA%E6%9E%84%23) `882.0K 🔥` `+140%`
1. [我家那闺女2026官宣节奏 (My daughter 2026 official announcement rhythm)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B32026%E5%AE%98%E5%AE%A3%E8%8A%82%E5%A5%8F%23) `746.2K 🔥` `+89%`
1. [比收到更卑微的词出现了 (A word more humble than received came up.)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E6%94%B6%E5%88%B0%E6%9B%B4%E5%8D%91%E5%BE%AE%E7%9A%84%E8%AF%8D%E5%87%BA%E7%8E%B0%E4%BA%86%23) `347.3K 🔥` `+59%`
1. [理想汽车宇树科技梦幻联动 (Li Auto Yushu Technology Dream Linkage)](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A6%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E6%A2%A6%E5%B9%BB%E8%81%94%E5%8A%A8%23) `313.6K 🔥` `+42%`
1. [李兰迪千夜奇谭出妆 (Li Landi's makeup for Qianye Tales)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E5%8D%83%E5%A4%9C%E5%A5%87%E8%B0%AD%E5%87%BA%E5%A6%86%23) `310.0K 🔥` `+42%`
1. [福建这场网安大赛高手云集 (Experts gathered in this Internet security competition in Fujian)](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E8%BF%99%E5%9C%BA%E7%BD%91%E5%AE%89%E5%A4%A7%E8%B5%9B%E9%AB%98%E6%89%8B%E4%BA%91%E9%9B%86%23) `1.8M 🔥`
1. [彭小苒承认恋情](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `365.2K 🔥`
1. [艾滋病检测结果不得告知配偶 (HIV test results must not be disclosed to spouse)](https://s.weibo.com/weibo?q=%23%E8%89%BE%E6%BB%8B%E7%97%85%E6%A3%80%E6%B5%8B%E7%BB%93%E6%9E%9C%E4%B8%8D%E5%BE%97%E5%91%8A%E7%9F%A5%E9%85%8D%E5%81%B6%23) `362.1K 🔥`
1. [任重宣布孙骁骁二胎](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E9%87%8D%E5%AE%A3%E5%B8%83%E5%AD%99%E9%AA%81%E9%AA%81%E4%BA%8C%E8%83%8E%23) `354.2K 🔥`
1. [遭枪击身亡处长女儿曾遭死亡威胁](https://s.weibo.com/weibo?q=%23%E9%81%AD%E6%9E%AA%E5%87%BB%E8%BA%AB%E4%BA%A1%E5%A4%84%E9%95%BF%E5%A5%B3%E5%84%BF%E6%9B%BE%E9%81%AD%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `332.5K 🔥`
1. [早春晴朗官宣OST阵容 (Early Spring Sunny official OST lineup announced)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%AE%98%E5%AE%A3OST%E9%98%B5%E5%AE%B9%23) `327.9K 🔥`
1. [又一家新能源汽车公司入局](https://s.weibo.com/weibo?q=%23%E5%8F%88%E4%B8%80%E5%AE%B6%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E5%85%AC%E5%8F%B8%E5%85%A5%E5%B1%80%23) `326.4K 🔥`
1. [黑神话](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%A5%9E%E8%AF%9D%23) `323.5K 🔥`
1. [Lisa晒新纹身baby](https://s.weibo.com/weibo?q=%23Lisa%E6%99%92%E6%96%B0%E7%BA%B9%E8%BA%ABbaby%23) `318.1K 🔥`
1. [济南震感](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%8D%97%E9%9C%87%E6%84%9F%23) `254.2K 🔥`
1. [时代少年团 古茗](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%8F%A4%E8%8C%97%23) `238.3K 🔥`
1. [杨超越你在养死士吗](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%BD%A0%E5%9C%A8%E5%85%BB%E6%AD%BB%E5%A3%AB%E5%90%97%23) `233.1K 🔥`
1. [许家印一审被判无期 (Xu Jiayin was sentenced to life in the first instance)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E4%B8%80%E5%AE%A1%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%23) `10.3M 🔥` `-35%`
1. [恒大集团被罚88.2亿元](https://s.weibo.com/weibo?q=%23%E6%81%92%E5%A4%A7%E9%9B%86%E5%9B%A2%E8%A2%AB%E7%BD%9A88.2%E4%BA%BF%E5%85%83%23) `1.4M 🔥` `-60%`
1. [抢公章](https://s.weibo.com/weibo?q=%23%E6%8A%A2%E5%85%AC%E7%AB%A0%23) `740.9K 🔥` `-34%`
1. [警方通报青岛男子辱骂女游客](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E9%9D%92%E5%B2%9B%E7%94%B7%E5%AD%90%E8%BE%B1%E9%AA%82%E5%A5%B3%E6%B8%B8%E5%AE%A2%23) `675.6K 🔥` `-23%`
1. [兄妹恋和姐弟恋真的不一样 (Brother-sister love and sister-brother love are really different)](https://s.weibo.com/weibo?q=%23%E5%85%84%E5%A6%B9%E6%81%8B%E5%92%8C%E5%A7%90%E5%BC%9F%E6%81%8B%E7%9C%9F%E7%9A%84%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `623.1K 🔥` `-38%`
1. [我家那闺女](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%23) `369.5K 🔥` `-37%`
1. [宇树大跌](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%A4%A7%E8%B7%8C%23) `338.1K 🔥` `-52%`
1. [宇树上市第2天王兴兴最新发声 (Wang Xingxing’s latest statement on the second day of Yushu’s listing)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E4%B8%8A%E5%B8%82%E7%AC%AC2%E5%A4%A9%E7%8E%8B%E5%85%B4%E5%85%B4%E6%9C%80%E6%96%B0%E5%8F%91%E5%A3%B0%23) `298.2K 🔥` `-23%`
1. [总裁助理骗局 (President Assistant Scam)](https://s.weibo.com/weibo?q=%23%E6%80%BB%E8%A3%81%E5%8A%A9%E7%90%86%E9%AA%97%E5%B1%80%23) `293.2K 🔥` `-26%`
1. [鹤岗化城市名单](https://s.weibo.com/weibo?q=%23%E9%B9%A4%E5%B2%97%E5%8C%96%E5%9F%8E%E5%B8%82%E5%90%8D%E5%8D%95%23) `283.6K 🔥` `-23%`
1. [杨奇回应黑神话悟空为什么不做续集](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A5%87%E5%9B%9E%E5%BA%94%E9%BB%91%E7%A5%9E%E8%AF%9D%E6%82%9F%E7%A9%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%81%9A%E7%BB%AD%E9%9B%86%23) `271.6K 🔥` `-22%`
1. [我家那闺女2026定档](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B32026%E5%AE%9A%E6%A1%A3%23) `260.7K 🔥` `-30%`
1. [河南濮阳地震 (Earthquake in Puyang, Henan)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%BF%AE%E9%98%B3%E5%9C%B0%E9%9C%87%23) `237.5K 🔥` `-39%`
1. [女子拒搭讪被辱骂涉事男子已到案](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%92%E6%90%AD%E8%AE%AA%E8%A2%AB%E8%BE%B1%E9%AA%82%E6%B6%89%E4%BA%8B%E7%94%B7%E5%AD%90%E5%B7%B2%E5%88%B0%E6%A1%88%23) `235.2K 🔥` `-40%`
1. [全季酒店 再追究对我们对你都不好](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%AD%A3%E9%85%92%E5%BA%97%20%E5%86%8D%E8%BF%BD%E7%A9%B6%E5%AF%B9%E6%88%91%E4%BB%AC%E5%AF%B9%E4%BD%A0%E9%83%BD%E4%B8%8D%E5%A5%BD%23) `214.7K 🔥` `-36%`
1. [安以轩代陈荣炼取款遭拒 (An Yixuan's withdrawal of money on behalf of Chen Ronglian was rejected)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E4%BB%A5%E8%BD%A9%E4%BB%A3%E9%99%88%E8%8D%A3%E7%82%BC%E5%8F%96%E6%AC%BE%E9%81%AD%E6%8B%92%23) `189.7K 🔥` `-73%`
1. [宇树科技跌超15% (Yushu Technology fell more than 15%)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E8%B7%8C%E8%B6%8515%25%23) `188.9K 🔥` `-72%`

Updated at 2026-08-20 13:37:52

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
