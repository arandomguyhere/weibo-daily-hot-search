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

1. [Whiplash直拍 (Whiplash direct shot)](https://s.weibo.com/weibo?q=%23Whiplash%E7%9B%B4%E6%8B%8D%23) `1.2M 🔥` `NEW`
1. [婚外胚胎案男方半年内不能再提离婚](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E7%94%B7%E6%96%B9%E5%8D%8A%E5%B9%B4%E5%86%85%E4%B8%8D%E8%83%BD%E5%86%8D%E6%8F%90%E7%A6%BB%E5%A9%9A%23) `848.4K 🔥` `NEW`
1. [第一次见骨瘦如柴的猪](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E9%AA%A8%E7%98%A6%E5%A6%82%E6%9F%B4%E7%9A%84%E7%8C%AA%23) `400.9K 🔥` `NEW`
1. [田曦薇胡一天吻戏是我能看的吗](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%83%A1%E4%B8%80%E5%A4%A9%E5%90%BB%E6%88%8F%E6%98%AF%E6%88%91%E8%83%BD%E7%9C%8B%E7%9A%84%E5%90%97%23) `399.5K 🔥` `NEW`
1. [任嘉伦红房子成青岛景点](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E7%BA%A2%E6%88%BF%E5%AD%90%E6%88%90%E9%9D%92%E5%B2%9B%E6%99%AF%E7%82%B9%23) `392.5K 🔥` `NEW`
1. [iPhone18系列发布节奏确认](https://s.weibo.com/weibo?q=%23iPhone18%E7%B3%BB%E5%88%97%E5%8F%91%E5%B8%83%E8%8A%82%E5%A5%8F%E7%A1%AE%E8%AE%A4%23) `391.2K 🔥` `NEW`
1. [A股直线跳水原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%E5%8E%9F%E5%9B%A0%23) `387.7K 🔥` `NEW`
1. [印度牛触电死亡居民殴打变压器泄愤](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%89%9B%E8%A7%A6%E7%94%B5%E6%AD%BB%E4%BA%A1%E5%B1%85%E6%B0%91%E6%AE%B4%E6%89%93%E5%8F%98%E5%8E%8B%E5%99%A8%E6%B3%84%E6%84%A4%23) `372.6K 🔥` `NEW`
1. [孙颖莎运动员互访问答太戳人](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%BF%90%E5%8A%A8%E5%91%98%E4%BA%92%E8%AE%BF%E9%97%AE%E7%AD%94%E5%A4%AA%E6%88%B3%E4%BA%BA%23) `340.6K 🔥` `NEW`
1. [他们都是左利手运动员](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%BB%AC%E9%83%BD%E6%98%AF%E5%B7%A6%E5%88%A9%E6%89%8B%E8%BF%90%E5%8A%A8%E5%91%98%23) `308.0K 🔥` `NEW`
1. [BLG对战TT (BLG vs. TT)](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98TT%23) `215.4K 🔥` `NEW`
1. [Bin BLG](https://s.weibo.com/weibo?q=%23Bin%20BLG%23) `214.7K 🔥` `NEW`
1. [种地吧悼念牺牲新疆女干部](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%E6%82%BC%E5%BF%B5%E7%89%BA%E7%89%B2%E6%96%B0%E7%96%86%E5%A5%B3%E5%B9%B2%E9%83%A8%23) `209.3K 🔥` `NEW`
1. [沈腾已经无咖可升](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%B7%B2%E7%BB%8F%E6%97%A0%E5%92%96%E5%8F%AF%E5%8D%87%23) `208.3K 🔥` `NEW`
1. [我人生的存在感和意义](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BA%BA%E7%94%9F%E7%9A%84%E5%AD%98%E5%9C%A8%E6%84%9F%E5%92%8C%E6%84%8F%E4%B9%89%23) `197.6K 🔥` `NEW`
1. [GEN战胜HLE](https://s.weibo.com/weibo?q=%23GEN%E6%88%98%E8%83%9CHLE%23) `183.2K 🔥` `NEW`
1. [打卡后厕所猝死男子有2个孩子](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8D%A1%E5%90%8E%E5%8E%95%E6%89%80%E7%8C%9D%E6%AD%BB%E7%94%B7%E5%AD%90%E6%9C%892%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `178.3K 🔥` `NEW`
1. [中国男篮战胜乌拉圭男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E6%88%98%E8%83%9C%E4%B9%8C%E6%8B%89%E5%9C%AD%E7%94%B7%E7%AF%AE%23) `175.1K 🔥` `NEW`
1. [鞠婧祎小号安慰粉丝](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B0%8F%E5%8F%B7%E5%AE%89%E6%85%B0%E7%B2%89%E4%B8%9D%23) `172.2K 🔥` `NEW`
1. [张桂源张函瑞 眼鼻嘴](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E5%BC%A0%E5%87%BD%E7%91%9E%20%E7%9C%BC%E9%BC%BB%E5%98%B4%23) `606.3K 🔥`
1. [碳排放权交易市场成交量破9亿吨 (The trading volume of the carbon emissions trading market exceeded 900 million tons)](https://s.weibo.com/weibo?q=%23%E7%A2%B3%E6%8E%92%E6%94%BE%E6%9D%83%E4%BA%A4%E6%98%93%E5%B8%82%E5%9C%BA%E6%88%90%E4%BA%A4%E9%87%8F%E7%A0%B49%E4%BA%BF%E5%90%A8%23) `661.5K 🔥` `-39%`
1. [小米澎湃OS4发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E6%B9%83OS4%E5%8F%91%E5%B8%83%23) `636.7K 🔥` `-25%`
1. [破局 难听](https://s.weibo.com/weibo?q=%23%E7%A0%B4%E5%B1%80%20%E9%9A%BE%E5%90%AC%23) `440.7K 🔥` `-58%`
1. [39岁程序员打卡后厕所内猝死](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E6%89%93%E5%8D%A1%E5%90%8E%E5%8E%95%E6%89%80%E5%86%85%E7%8C%9D%E6%AD%BB%23) `427.8K 🔥` `-58%`
1. [冉莹颖说打输了大不了换老公](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E8%AF%B4%E6%89%93%E8%BE%93%E4%BA%86%E5%A4%A7%E4%B8%8D%E4%BA%86%E6%8D%A2%E8%80%81%E5%85%AC%23) `425.8K 🔥` `-41%`
1. [深圳女生一天1500专门劝人别买房](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%A5%B3%E7%94%9F%E4%B8%80%E5%A4%A91500%E4%B8%93%E9%97%A8%E5%8A%9D%E4%BA%BA%E5%88%AB%E4%B9%B0%E6%88%BF%23) `411.4K 🔥` `-43%`
1. [罗氏虾自助吃12只回本太爽了](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%8F%E8%99%BE%E8%87%AA%E5%8A%A9%E5%90%8312%E5%8F%AA%E5%9B%9E%E6%9C%AC%E5%A4%AA%E7%88%BD%E4%BA%86%23) `411.2K 🔥` `-61%`
1. [让DeepSeek给小说取架空国名](https://s.weibo.com/weibo?q=%23%E8%AE%A9DeepSeek%E7%BB%99%E5%B0%8F%E8%AF%B4%E5%8F%96%E6%9E%B6%E7%A9%BA%E5%9B%BD%E5%90%8D%23) `409.2K 🔥` `-58%`
1. [郭麒麟瘦到认不出](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%23) `405.4K 🔥` `-58%`
1. [北电祝贺刘耀文](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B5%E7%A5%9D%E8%B4%BA%E5%88%98%E8%80%80%E6%96%87%23) `403.6K 🔥` `-56%`
1. [王橹杰对着蓝粉海偷笑 (Wang Lujie snickered at the sea of ​​blue and pink)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%AF%B9%E7%9D%80%E8%93%9D%E7%B2%89%E6%B5%B7%E5%81%B7%E7%AC%91%23) `398.4K 🔥` `-63%`
1. [退休236天大姐状态大变样](https://s.weibo.com/weibo?q=%23%E9%80%80%E4%BC%91236%E5%A4%A9%E5%A4%A7%E5%A7%90%E7%8A%B6%E6%80%81%E5%A4%A7%E5%8F%98%E6%A0%B7%23) `395.1K 🔥` `-46%`
1. [吴越称十分抗拒和年轻男演员演情侣](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B6%8A%E7%A7%B0%E5%8D%81%E5%88%86%E6%8A%97%E6%8B%92%E5%92%8C%E5%B9%B4%E8%BD%BB%E7%94%B7%E6%BC%94%E5%91%98%E6%BC%94%E6%83%85%E4%BE%A3%23) `386.6K 🔥` `-25%`
1. [王安宇走路脖子前倾](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%B5%B0%E8%B7%AF%E8%84%96%E5%AD%90%E5%89%8D%E5%80%BE%23) `383.9K 🔥` `-48%`
1. [地下试管婴儿](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E4%B8%8B%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%23) `383.3K 🔥` `-47%`
1. [王橹杰 化妆师](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E5%8C%96%E5%A6%86%E5%B8%88%23) `378.1K 🔥` `-52%`
1. [五公站姐出图 (Wugong station sister posted a picture)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E7%AB%99%E5%A7%90%E5%87%BA%E5%9B%BE%23) `375.3K 🔥` `-66%`
1. [魏子宸好帅](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A5%BD%E5%B8%85%23) `372.6K 🔥` `-42%`
1. [林厨 下饭酱挂直播间卖](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%8E%A8%20%E4%B8%8B%E9%A5%AD%E9%85%B1%E6%8C%82%E7%9B%B4%E6%92%AD%E9%97%B4%E5%8D%96%23) `314.6K 🔥` `-39%`
1. [90后女子爱生闷气乳腺癌去世丈夫痛哭 (Post-90s woman was sulky and her husband cried bitterly after she died of breast cancer)](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E5%A5%B3%E5%AD%90%E7%88%B1%E7%94%9F%E9%97%B7%E6%B0%94%E4%B9%B3%E8%85%BA%E7%99%8C%E5%8E%BB%E4%B8%96%E4%B8%88%E5%A4%AB%E7%97%9B%E5%93%AD%23) `309.9K 🔥` `-51%`
1. [金鹰奖提名 蒋欣](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%20%E8%92%8B%E6%AC%A3%23) `307.9K 🔥` `-55%`
1. [陈妍希方回应新恋情传闻](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%96%B9%E5%9B%9E%E5%BA%94%E6%96%B0%E6%81%8B%E6%83%85%E4%BC%A0%E9%97%BB%23) `279.7K 🔥` `-41%`
1. [女子虐待亲生女儿致死后患重度抑郁 (Woman suffered severe depression after abusing her own daughter to death)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%99%90%E5%BE%85%E4%BA%B2%E7%94%9F%E5%A5%B3%E5%84%BF%E8%87%B4%E6%AD%BB%E5%90%8E%E6%82%A3%E9%87%8D%E5%BA%A6%E6%8A%91%E9%83%81%23) `235.7K 🔥` `-54%`
1. [开推5疑似只剩刘宇宁周柯宇 (It is suspected that Liu Yuning and Zhou Keyu are the only ones left in the push 5 list)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8E%A85%E7%96%91%E4%BC%BC%E5%8F%AA%E5%89%A9%E5%88%98%E5%AE%87%E5%AE%81%E5%91%A8%E6%9F%AF%E5%AE%87%23) `234.6K 🔥` `-27%`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `224.1K 🔥` `-25%`
1. [金鹰奖女主提名 (Golden Eagle Award for Leading Actress Nominated)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%A5%B3%E4%B8%BB%E6%8F%90%E5%90%8D%23) `215.2K 🔥` `-22%`
1. [15岁男孩确诊白血病后暴瘦80斤](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E7%94%B7%E5%AD%A9%E7%A1%AE%E8%AF%8A%E7%99%BD%E8%A1%80%E7%97%85%E5%90%8E%E6%9A%B4%E7%98%A680%E6%96%A4%23) `200.4K 🔥` `-68%`
1. [singforyou 看不到张函瑞](https://s.weibo.com/weibo?q=%23singforyou%20%E7%9C%8B%E4%B8%8D%E5%88%B0%E5%BC%A0%E5%87%BD%E7%91%9E%23) `184.4K 🔥` `-23%`
1. [四代五公大屏坏了 (The big screen of the fourth generation and the fifth generation is broken.)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%E5%A4%A7%E5%B1%8F%E5%9D%8F%E4%BA%86%23) `160.9K 🔥` `-85%`
1. [DeepSeekHarness发布](https://s.weibo.com/weibo?q=%23DeepSeekHarness%E5%8F%91%E5%B8%83%23) `160.1K 🔥` `-78%`
1. [长鑫科技 中国市值最大上市公司 (Changxin Technology China’s largest listed company by market capitalization)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%20%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%80%BC%E6%9C%80%E5%A4%A7%E4%B8%8A%E5%B8%82%E5%85%AC%E5%8F%B8%23) `160.1K 🔥` `-84%`

Updated at 2026-08-13 23:03:47

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
