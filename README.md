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

1. [长实否认李嘉诚逝世](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%AE%9E%E5%90%A6%E8%AE%A4%E6%9D%8E%E5%98%89%E8%AF%9A%E9%80%9D%E4%B8%96%23) `1.1M 🔥` `NEW`
1. [老外来中国不用微信也能支付](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E6%9D%A5%E4%B8%AD%E5%9B%BD%E4%B8%8D%E7%94%A8%E5%BE%AE%E4%BF%A1%E4%B9%9F%E8%83%BD%E6%94%AF%E4%BB%98%23) `823.3K 🔥` `NEW`
1. [70周年广交会新玩法](https://s.weibo.com/weibo?q=%2370%E5%91%A8%E5%B9%B4%E5%B9%BF%E4%BA%A4%E4%BC%9A%E6%96%B0%E7%8E%A9%E6%B3%95%23) `805.3K 🔥` `NEW`
1. [全球股市大跌原因找到了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%E5%A4%A7%E8%B7%8C%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `797.9K 🔥` `NEW`
1. [Tim父亲出任影视飓风董事长](https://s.weibo.com/weibo?q=%23Tim%E7%88%B6%E4%BA%B2%E5%87%BA%E4%BB%BB%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E8%91%A3%E4%BA%8B%E9%95%BF%23) `643.6K 🔥` `NEW`
1. [认为关节疼痛是冻出来的是认知误区](https://s.weibo.com/weibo?q=%23%E8%AE%A4%E4%B8%BA%E5%85%B3%E8%8A%82%E7%96%BC%E7%97%9B%E6%98%AF%E5%86%BB%E5%87%BA%E6%9D%A5%E7%9A%84%E6%98%AF%E8%AE%A4%E7%9F%A5%E8%AF%AF%E5%8C%BA%23) `633.5K 🔥` `NEW`
1. [ZUIAN第三次面签没过](https://s.weibo.com/weibo?q=%23ZUIAN%E7%AC%AC%E4%B8%89%E6%AC%A1%E9%9D%A2%E7%AD%BE%E6%B2%A1%E8%BF%87%23) `630.8K 🔥` `NEW`
1. [A股跌破3700点主要受外围影响](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%B7%8C%E7%A0%B43700%E7%82%B9%E4%B8%BB%E8%A6%81%E5%8F%97%E5%A4%96%E5%9B%B4%E5%BD%B1%E5%93%8D%23) `628.5K 🔥` `NEW`
1. [appstore正式进入字节时代](https://s.weibo.com/weibo?q=%23appstore%E6%AD%A3%E5%BC%8F%E8%BF%9B%E5%85%A5%E5%AD%97%E8%8A%82%E6%97%B6%E4%BB%A3%23) `576.5K 🔥` `NEW`
1. [黄牛票来源曝光](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%89%9B%E7%A5%A8%E6%9D%A5%E6%BA%90%E6%9B%9D%E5%85%89%23) `484.3K 🔥` `NEW`
1. [黄泽林承认与陈奕迅女儿分手](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B3%BD%E6%9E%97%E6%89%BF%E8%AE%A4%E4%B8%8E%E9%99%88%E5%A5%95%E8%BF%85%E5%A5%B3%E5%84%BF%E5%88%86%E6%89%8B%23) `462.2K 🔥` `NEW`
1. [减肥拿到了大结果](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E6%8B%BF%E5%88%B0%E4%BA%86%E5%A4%A7%E7%BB%93%E6%9E%9C%23) `440.6K 🔥` `NEW`
1. [李嘉诚现年98岁](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E8%AF%9A%E7%8E%B0%E5%B9%B498%E5%B2%81%23) `379.1K 🔥` `NEW`
1. [第一次见啃苹果卡嘴要到医院取出](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%95%83%E8%8B%B9%E6%9E%9C%E5%8D%A1%E5%98%B4%E8%A6%81%E5%88%B0%E5%8C%BB%E9%99%A2%E5%8F%96%E5%87%BA%23) `346.5K 🔥` `NEW`
1. [小城良方的宣发太有才了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E7%9A%84%E5%AE%A3%E5%8F%91%E5%A4%AA%E6%9C%89%E6%89%8D%E4%BA%86%23) `316.1K 🔥` `NEW`
1. [ZUIAN的B签还是没过](https://s.weibo.com/weibo?q=%23ZUIAN%E7%9A%84B%E7%AD%BE%E8%BF%98%E6%98%AF%E6%B2%A1%E8%BF%87%23) `311.0K 🔥` `NEW`
1. [兰香电视剧到底在歌颂什么](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E7%94%B5%E8%A7%86%E5%89%A7%E5%88%B0%E5%BA%95%E5%9C%A8%E6%AD%8C%E9%A2%82%E4%BB%80%E4%B9%88%23) `306.7K 🔥` `NEW`
1. [建议大家尽量不要长期待在家里](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%B0%BD%E9%87%8F%E4%B8%8D%E8%A6%81%E9%95%BF%E6%9C%9F%E5%BE%85%E5%9C%A8%E5%AE%B6%E9%87%8C%23) `306.3K 🔥` `NEW`
1. [现在油车都跌成这样了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%B2%B9%E8%BD%A6%E9%83%BD%E8%B7%8C%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `304.1K 🔥` `NEW`
1. [千万新房当嫁妆被陌生人拆成毛坯](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E6%96%B0%E6%88%BF%E5%BD%93%E5%AB%81%E5%A6%86%E8%A2%AB%E9%99%8C%E7%94%9F%E4%BA%BA%E6%8B%86%E6%88%90%E6%AF%9B%E5%9D%AF%23) `301.5K 🔥` `NEW`
1. [大冰说李一桐内心特别强大](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E8%AF%B4%E6%9D%8E%E4%B8%80%E6%A1%90%E5%86%85%E5%BF%83%E7%89%B9%E5%88%AB%E5%BC%BA%E5%A4%A7%23) `284.5K 🔥` `NEW`
1. [万元大奖还能这样花](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%85%83%E5%A4%A7%E5%A5%96%E8%BF%98%E8%83%BD%E8%BF%99%E6%A0%B7%E8%8A%B1%23) `279.8K 🔥` `NEW`
1. [紫薇小燕子合体了](https://s.weibo.com/weibo?q=%23%E7%B4%AB%E8%96%87%E5%B0%8F%E7%87%95%E5%AD%90%E5%90%88%E4%BD%93%E4%BA%86%23) `277.4K 🔥` `NEW`
1. [黄金直线反弹](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%9B%B4%E7%BA%BF%E5%8F%8D%E5%BC%B9%23) `267.6K 🔥` `NEW`
1. [全球股市大跌](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%E5%A4%A7%E8%B7%8C%23) `255.8K 🔥` `NEW`
1. [找对象要找社会化程度高的人](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%AF%B9%E8%B1%A1%E8%A6%81%E6%89%BE%E7%A4%BE%E4%BC%9A%E5%8C%96%E7%A8%8B%E5%BA%A6%E9%AB%98%E7%9A%84%E4%BA%BA%23) `230.9K 🔥` `NEW`
1. [国考报名要求电子社保卡等实名认证](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%80%83%E6%8A%A5%E5%90%8D%E8%A6%81%E6%B1%82%E7%94%B5%E5%AD%90%E7%A4%BE%E4%BF%9D%E5%8D%A1%E7%AD%89%E5%AE%9E%E5%90%8D%E8%AE%A4%E8%AF%81%23) `230.9K 🔥` `NEW`
1. [陈小春直言不会把送走的弟弟找回来](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E7%9B%B4%E8%A8%80%E4%B8%8D%E4%BC%9A%E6%8A%8A%E9%80%81%E8%B5%B0%E7%9A%84%E5%BC%9F%E5%BC%9F%E6%89%BE%E5%9B%9E%E6%9D%A5%23) `230.9K 🔥` `NEW`
1. [保时捷MissionS曝光](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7MissionS%E6%9B%9D%E5%85%89%23) `230.9K 🔥` `NEW`
1. [天价黄牛票是从哪来的](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E4%BB%B7%E9%BB%84%E7%89%9B%E7%A5%A8%E6%98%AF%E4%BB%8E%E5%93%AA%E6%9D%A5%E7%9A%84%23) `224.5K 🔥` `NEW`
1. [大麦想看人数排名](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E6%83%B3%E7%9C%8B%E4%BA%BA%E6%95%B0%E6%8E%92%E5%90%8D%23) `216.7K 🔥` `NEW`
1. [物业回应千万新房被陌生人拆成毛坯](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E5%9B%9E%E5%BA%94%E5%8D%83%E4%B8%87%E6%96%B0%E6%88%BF%E8%A2%AB%E9%99%8C%E7%94%9F%E4%BA%BA%E6%8B%86%E6%88%90%E6%AF%9B%E5%9D%AF%23) `205.9K 🔥` `NEW`
1. [国补还没领明白的人集合](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%A1%A5%E8%BF%98%E6%B2%A1%E9%A2%86%E6%98%8E%E7%99%BD%E7%9A%84%E4%BA%BA%E9%9B%86%E5%90%88%23) `204.3K 🔥` `NEW`
1. [井柏然孙千现身早春晴朗研讨会](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E7%8E%B0%E8%BA%AB%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E7%A0%94%E8%AE%A8%E4%BC%9A%23) `204.0K 🔥` `NEW`
1. [徐梦洁余茵乖乖女完全两个感觉](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E4%BD%99%E8%8C%B5%E4%B9%96%E4%B9%96%E5%A5%B3%E5%AE%8C%E5%85%A8%E4%B8%A4%E4%B8%AA%E6%84%9F%E8%A7%89%23) `197.5K 🔥` `NEW`
1. [曝iPhone18Pro褪色](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E8%A4%AA%E8%89%B2%23) `195.8K 🔥` `NEW`
1. [旧的不去新的不来](https://s.weibo.com/weibo?q=%23%E6%97%A7%E7%9A%84%E4%B8%8D%E5%8E%BB%E6%96%B0%E7%9A%84%E4%B8%8D%E6%9D%A5%23) `185.7K 🔥` `NEW`
1. [TES帮助ZUIAN申请P签](https://s.weibo.com/weibo?q=%23TES%E5%B8%AE%E5%8A%A9ZUIAN%E7%94%B3%E8%AF%B7P%E7%AD%BE%23) `182.1K 🔥` `NEW`
1. [A股抄底还是观望](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%8A%84%E5%BA%95%E8%BF%98%E6%98%AF%E8%A7%82%E6%9C%9B%23) `172.7K 🔥` `NEW`
1. [深圳卫健委误开直播后喊完了](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%8D%AB%E5%81%A5%E5%A7%94%E8%AF%AF%E5%BC%80%E7%9B%B4%E6%92%AD%E5%90%8E%E5%96%8A%E5%AE%8C%E4%BA%86%23) `163.5K 🔥` `NEW`
1. [婚外胚胎案朱女士现状](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E6%9C%B1%E5%A5%B3%E5%A3%AB%E7%8E%B0%E7%8A%B6%23) `160.8K 🔥` `NEW`
1. [成分党双11不花冤枉钱](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%88%86%E5%85%9A%E5%8F%8C11%E4%B8%8D%E8%8A%B1%E5%86%A4%E6%9E%89%E9%92%B1%23) `156.6K 🔥` `NEW`
1. [蒋劲夫曾两次陷入家暴风波](https://s.weibo.com/weibo?q=%23%E8%92%8B%E5%8A%B2%E5%A4%AB%E6%9B%BE%E4%B8%A4%E6%AC%A1%E9%99%B7%E5%85%A5%E5%AE%B6%E6%9A%B4%E9%A3%8E%E6%B3%A2%23) `156.5K 🔥` `NEW`
1. [TES为ZUIAN办理P签](https://s.weibo.com/weibo?q=%23TES%E4%B8%BAZUIAN%E5%8A%9E%E7%90%86P%E7%AD%BE%23) `155.7K 🔥` `NEW`
1. [长鑫科技市值跌破3万亿](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%B8%82%E5%80%BC%E8%B7%8C%E7%A0%B43%E4%B8%87%E4%BA%BF%23) `153.2K 🔥` `NEW`
1. [深圳APEC会议期间不放假](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3APEC%E4%BC%9A%E8%AE%AE%E6%9C%9F%E9%97%B4%E4%B8%8D%E6%94%BE%E5%81%87%23) `135.9K 🔥` `NEW`
1. [盛艾敬去美国参加舞蹈大赛](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E5%8E%BB%E7%BE%8E%E5%9B%BD%E5%8F%82%E5%8A%A0%E8%88%9E%E8%B9%88%E5%A4%A7%E8%B5%9B%23) `131.3K 🔥` `NEW`
1. [全体星店长喊你上京东11.11领红包](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%BD%93%E6%98%9F%E5%BA%97%E9%95%BF%E5%96%8A%E4%BD%A0%E4%B8%8A%E4%BA%AC%E4%B8%9C11.11%E9%A2%86%E7%BA%A2%E5%8C%85%23) `803.3K 🔥` `+69%`
1. [蒋劲夫过上了他想要的生活](https://s.weibo.com/weibo?q=%23%E8%92%8B%E5%8A%B2%E5%A4%AB%E8%BF%87%E4%B8%8A%E4%BA%86%E4%BB%96%E6%83%B3%E8%A6%81%E7%9A%84%E7%94%9F%E6%B4%BB%23) `471.7K 🔥` `+53%`
1. [豆包对低认知人群有权威性](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%AF%B9%E4%BD%8E%E8%AE%A4%E7%9F%A5%E4%BA%BA%E7%BE%A4%E6%9C%89%E6%9D%83%E5%A8%81%E6%80%A7%23) `505.9K 🔥` `-84%`

Updated at 2026-10-15 14:30:26

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
