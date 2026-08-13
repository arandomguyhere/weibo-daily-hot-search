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

1. [林一新歌七夕首发 (Lin Yi's new song debuts on Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E6%96%B0%E6%AD%8C%E4%B8%83%E5%A4%95%E9%A6%96%E5%8F%91%23) `146.1K 🔥` `NEW`
1. [TF四代rap](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3rap%23) `42.4K 🔥` `NEW`
1. [胖东来闭店一天整条街都没人出摊](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%97%AD%E5%BA%97%E4%B8%80%E5%A4%A9%E6%95%B4%E6%9D%A1%E8%A1%97%E9%83%BD%E6%B2%A1%E4%BA%BA%E5%87%BA%E6%91%8A%23) `311.7K 🔥`
1. [这3种面包其实是热量刺客 (These 3 types of bread are actually calorie assassins)](https://s.weibo.com/weibo?q=%23%E8%BF%993%E7%A7%8D%E9%9D%A2%E5%8C%85%E5%85%B6%E5%AE%9E%E6%98%AF%E7%83%AD%E9%87%8F%E5%88%BA%E5%AE%A2%23) `80.3K 🔥`
1. [邹市明辟谣 (Zou Shiming refutes rumors)](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E8%BE%9F%E8%B0%A3%23) `278.3K 🔥` `-29%`
1. [紧急预拨8000万支持3省抢险救灾](https://s.weibo.com/weibo?q=%23%E7%B4%A7%E6%80%A5%E9%A2%84%E6%8B%A88000%E4%B8%87%E6%94%AF%E6%8C%813%E7%9C%81%E6%8A%A2%E9%99%A9%E6%95%91%E7%81%BE%23) `151.1K 🔥` `-33%`
1. [田曦薇胡一天吻戏是我能看的吗 (Can I watch Tian Xiwei and Hu Yitian’s kiss scene?)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%83%A1%E4%B8%80%E5%A4%A9%E5%90%BB%E6%88%8F%E6%98%AF%E6%88%91%E8%83%BD%E7%9C%8B%E7%9A%84%E5%90%97%23) `88.9K 🔥` `-42%`
1. [王橹杰 化妆师](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E5%8C%96%E5%A6%86%E5%B8%88%23) `84.1K 🔥` `-35%`
1. [逃出绝命街OMG恐龙吓到我了](https://s.weibo.com/weibo?q=%23%E9%80%83%E5%87%BA%E7%BB%9D%E5%91%BD%E8%A1%97OMG%E6%81%90%E9%BE%99%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23) `78.8K 🔥` `-82%`
1. [WTT欧洲大满贯瑞典站2026 (WTT European Grand Slam Sweden 2026)](https://s.weibo.com/weibo?q=%23WTT%E6%AC%A7%E6%B4%B2%E5%A4%A7%E6%BB%A1%E8%B4%AF%E7%91%9E%E5%85%B8%E7%AB%992026%23) `50.6K 🔥` `-38%`
1. [魏子宸好帅](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A5%BD%E5%B8%85%23) `49.3K 🔥` `-35%`
1. [Bin BLG](https://s.weibo.com/weibo?q=%23Bin%20BLG%23) `43.6K 🔥` `-25%`
1. [破局 难听 (Breaking the situation is ugly)](https://s.weibo.com/weibo?q=%23%E7%A0%B4%E5%B1%80%20%E9%9A%BE%E5%90%AC%23) `43.1K 🔥` `-26%`
1. [结婚登记好像也没多大意义](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0%E5%A5%BD%E5%83%8F%E4%B9%9F%E6%B2%A1%E5%A4%9A%E5%A4%A7%E6%84%8F%E4%B9%89%23) `43.1K 🔥` `-26%`
1. [男子健身房指导女友被要求看结婚证 (Man's gym instructor's girlfriend was asked to see her marriage certificate)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%A5%E8%BA%AB%E6%88%BF%E6%8C%87%E5%AF%BC%E5%A5%B3%E5%8F%8B%E8%A2%AB%E8%A6%81%E6%B1%82%E7%9C%8B%E7%BB%93%E5%A9%9A%E8%AF%81%23) `43.0K 🔥` `-26%`
1. [第一次见骨瘦如柴的猪 (The first time I saw a scrawny pig)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E9%AA%A8%E7%98%A6%E5%A6%82%E6%9F%B4%E7%9A%84%E7%8C%AA%23) `42.6K 🔥` `-26%`
1. [深圳女生一天1500专门劝人别买房 (Shenzhen girl spends 1,500 a day to persuade people not to buy a house)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%A5%B3%E7%94%9F%E4%B8%80%E5%A4%A91500%E4%B8%93%E9%97%A8%E5%8A%9D%E4%BA%BA%E5%88%AB%E4%B9%B0%E6%88%BF%23) `42.6K 🔥` `-38%`
1. [小伙投诉核磁震坏身体影响夫妻生活 (The young man complained that the MRI damaged his body and affected his married life.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E6%8A%95%E8%AF%89%E6%A0%B8%E7%A3%81%E9%9C%87%E5%9D%8F%E8%BA%AB%E4%BD%93%E5%BD%B1%E5%93%8D%E5%A4%AB%E5%A6%BB%E7%94%9F%E6%B4%BB%23) `42.6K 🔥` `-26%`
1. [疑似泰国失联女孩弟弟发声](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%B3%B0%E5%9B%BD%E5%A4%B1%E8%81%94%E5%A5%B3%E5%AD%A9%E5%BC%9F%E5%BC%9F%E5%8F%91%E5%A3%B0%23) `42.6K 🔥` `-26%`
1. [张桂源张函瑞 眼鼻嘴 (Zhang Guiyuan Zhang Hanrui eyes nose mouth)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E5%BC%A0%E5%87%BD%E7%91%9E%20%E7%9C%BC%E9%BC%BB%E5%98%B4%23) `42.6K 🔥` `-26%`
1. [广东9月1日起上调最低工资](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C9%E6%9C%881%E6%97%A5%E8%B5%B7%E4%B8%8A%E8%B0%83%E6%9C%80%E4%BD%8E%E5%B7%A5%E8%B5%84%23) `42.6K 🔥` `-26%`
1. [女子虐待亲生女儿致死后患重度抑郁](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%99%90%E5%BE%85%E4%BA%B2%E7%94%9F%E5%A5%B3%E5%84%BF%E8%87%B4%E6%AD%BB%E5%90%8E%E6%82%A3%E9%87%8D%E5%BA%A6%E6%8A%91%E9%83%81%23) `42.6K 🔥` `-26%`
1. [王橹杰对着蓝粉海偷笑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%AF%B9%E7%9D%80%E8%93%9D%E7%B2%89%E6%B5%B7%E5%81%B7%E7%AC%91%23) `42.6K 🔥` `-27%`
1. [小狗交朋友不分物种](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%BA%A4%E6%9C%8B%E5%8F%8B%E4%B8%8D%E5%88%86%E7%89%A9%E7%A7%8D%23) `42.6K 🔥` `-27%`
1. [林厨 下饭酱挂直播间卖 (Chef Lin’s rice sauce is sold in the live broadcast room)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%8E%A8%20%E4%B8%8B%E9%A5%AD%E9%85%B1%E6%8C%82%E7%9B%B4%E6%92%AD%E9%97%B4%E5%8D%96%23) `42.6K 🔥` `-27%`
1. [魏子宸大屏生图](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A4%A7%E5%B1%8F%E7%94%9F%E5%9B%BE%23) `42.6K 🔥` `-27%`
1. [金鹰奖女主提名 (Golden Eagle Award for Leading Actress Nominated)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%A5%B3%E4%B8%BB%E6%8F%90%E5%90%8D%23) `42.6K 🔥` `-27%`
1. [光与夜之恋](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `42.5K 🔥` `-27%`
1. [我人生的存在感和意义](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BA%BA%E7%94%9F%E7%9A%84%E5%AD%98%E5%9C%A8%E6%84%9F%E5%92%8C%E6%84%8F%E4%B9%89%23) `42.5K 🔥` `-27%`
1. [Whiplash直拍](https://s.weibo.com/weibo?q=%23Whiplash%E7%9B%B4%E6%8B%8D%23) `42.5K 🔥` `-27%`
1. [iPhone18系列发布节奏确认](https://s.weibo.com/weibo?q=%23iPhone18%E7%B3%BB%E5%88%97%E5%8F%91%E5%B8%83%E8%8A%82%E5%A5%8F%E7%A1%AE%E8%AE%A4%23) `42.5K 🔥` `-27%`
1. [沈腾已经无咖可升 (Shen Teng has no chance of promotion)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%B7%B2%E7%BB%8F%E6%97%A0%E5%92%96%E5%8F%AF%E5%8D%87%23) `42.5K 🔥` `-27%`
1. [日本把人装进冰箱降温](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8A%8A%E4%BA%BA%E8%A3%85%E8%BF%9B%E5%86%B0%E7%AE%B1%E9%99%8D%E6%B8%A9%23) `42.5K 🔥` `-27%`
1. [张奕然五公高音](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A5%95%E7%84%B6%E4%BA%94%E5%85%AC%E9%AB%98%E9%9F%B3%23) `42.5K 🔥` `-27%`
1. [Smoggy EDG](https://s.weibo.com/weibo?q=%23Smoggy%20EDG%23) `42.5K 🔥` `-27%`
1. [好想来回应111.35元零食复称仅64.8元](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%83%B3%E6%9D%A5%E5%9B%9E%E5%BA%94111.35%E5%85%83%E9%9B%B6%E9%A3%9F%E5%A4%8D%E7%A7%B0%E4%BB%8564.8%E5%85%83%23) `42.5K 🔥` `-27%`
1. [白海豚残涡入海后或再度加强](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%AE%8B%E6%B6%A1%E5%85%A5%E6%B5%B7%E5%90%8E%E6%88%96%E5%86%8D%E5%BA%A6%E5%8A%A0%E5%BC%BA%23) `42.5K 🔥` `-27%`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `42.4K 🔥` `-27%`
1. [伊拉克人真实评价龙餐馆](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E4%BA%BA%E7%9C%9F%E5%AE%9E%E8%AF%84%E4%BB%B7%E9%BE%99%E9%A4%90%E9%A6%86%23) `42.4K 🔥` `-27%`
1. [崩坏星穹铁道](https://s.weibo.com/weibo?q=%23%E5%B4%A9%E5%9D%8F%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%23) `42.4K 🔥` `-27%`
1. [第五人格赛事 (The fifth personality competition)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E8%B5%9B%E4%BA%8B%23) `42.4K 🔥` `-27%`
1. [退休236天大姐状态大变样](https://s.weibo.com/weibo?q=%23%E9%80%80%E4%BC%91236%E5%A4%A9%E5%A4%A7%E5%A7%90%E7%8A%B6%E6%80%81%E5%A4%A7%E5%8F%98%E6%A0%B7%23) `42.4K 🔥` `-27%`
1. [印度牛触电死亡居民殴打变压器泄愤 (Cow electrocuted in India, residents beat transformer to vent anger)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%89%9B%E8%A7%A6%E7%94%B5%E6%AD%BB%E4%BA%A1%E5%B1%85%E6%B0%91%E6%AE%B4%E6%89%93%E5%8F%98%E5%8E%8B%E5%99%A8%E6%B3%84%E6%84%A4%23) `42.4K 🔥` `-27%`
1. [母亲报警赶高铁回家24岁儿子已离世 (Mother called the police to catch the high-speed train home and her 24-year-old son has passed away)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E6%8A%A5%E8%AD%A6%E8%B5%B6%E9%AB%98%E9%93%81%E5%9B%9E%E5%AE%B624%E5%B2%81%E5%84%BF%E5%AD%90%E5%B7%B2%E7%A6%BB%E4%B8%96%23) `42.4K 🔥` `-27%`
1. [地下试管婴儿](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E4%B8%8B%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%23) `42.4K 🔥` `-27%`
1. [开推5疑似只剩刘宇宁周柯宇](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8E%A85%E7%96%91%E4%BC%BC%E5%8F%AA%E5%89%A9%E5%88%98%E5%AE%87%E5%AE%81%E5%91%A8%E6%9F%AF%E5%AE%87%23) `42.3K 🔥` `-27%`
1. [张函瑞高音](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E9%AB%98%E9%9F%B3%23) `42.3K 🔥` `-27%`
1. [李煜东是帅哥就敬礼](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%85%9C%E4%B8%9C%E6%98%AF%E5%B8%85%E5%93%A5%E5%B0%B1%E6%95%AC%E7%A4%BC%23) `42.3K 🔥` `-27%`
1. [39岁程序员打卡后厕所内猝死](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E6%89%93%E5%8D%A1%E5%90%8E%E5%8E%95%E6%89%80%E5%86%85%E7%8C%9D%E6%AD%BB%23) `42.3K 🔥` `-27%`
1. [金鹰奖提名 蒋欣 (Golden Eagle Award Nomination Jiang Xin)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%20%E8%92%8B%E6%AC%A3%23) `42.3K 🔥` `-27%`
1. [林诗栋温瑞博无缘瑞典大满贯4强](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E6%B8%A9%E7%91%9E%E5%8D%9A%E6%97%A0%E7%BC%98%E7%91%9E%E5%85%B8%E5%A4%A7%E6%BB%A1%E8%B4%AF4%E5%BC%BA%23) `42.3K 🔥` `-56%`
1. [溜溜的她舞台](https://s.weibo.com/weibo?q=%23%E6%BA%9C%E6%BA%9C%E7%9A%84%E5%A5%B9%E8%88%9E%E5%8F%B0%23) `42.3K 🔥` `-27%`

Updated at 2026-08-14 04:01:30

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
