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

1. [OPPO回应母亲节文案争议 (OPPO responds to Mother’s Day copywriting controversy)](https://s.weibo.com/weibo?q=%23OPPO%E5%9B%9E%E5%BA%94%E6%AF%8D%E4%BA%B2%E8%8A%82%E6%96%87%E6%A1%88%E4%BA%89%E8%AE%AE%23) `538.7K 🔥` `NEW`
1. [曝小米汽车将推独立子品牌寻天](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%B0%86%E6%8E%A8%E7%8B%AC%E7%AB%8B%E5%AD%90%E5%93%81%E7%89%8C%E5%AF%BB%E5%A4%A9%23) `476.1K 🔥` `NEW`
1. [大眼音乐节开票时间](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%9C%BC%E9%9F%B3%E4%B9%90%E8%8A%82%E5%BC%80%E7%A5%A8%E6%97%B6%E9%97%B4%23) `419.7K 🔥` `NEW`
1. [英方裁定2名中国公民有罪](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%96%B9%E8%A3%81%E5%AE%9A2%E5%90%8D%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E6%9C%89%E7%BD%AA%23) `353.8K 🔥` `NEW`
1. [汪海林限高](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B5%B7%E6%9E%97%E9%99%90%E9%AB%98%23) `341.7K 🔥` `NEW`
1. [DeepSeek崩了](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B4%A9%E4%BA%86%23) `340.6K 🔥` `NEW`
1. [张艺谋 刘三姐](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E8%B0%8B%20%E5%88%98%E4%B8%89%E5%A7%90%23) `335.8K 🔥` `NEW`
1. [男生感染HPV身体会怎样](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%84%9F%E6%9F%93HPV%E8%BA%AB%E4%BD%93%E4%BC%9A%E6%80%8E%E6%A0%B7%23) `334.0K 🔥` `NEW`
1. [杨采钰把防晒衣穿出高级感](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E9%87%87%E9%92%B0%E6%8A%8A%E9%98%B2%E6%99%92%E8%A1%A3%E7%A9%BF%E5%87%BA%E9%AB%98%E7%BA%A7%E6%84%9F%23) `331.7K 🔥` `NEW`
1. [暴发致命病毒邮轮即将靠岸](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E5%8F%91%E8%87%B4%E5%91%BD%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E5%8D%B3%E5%B0%86%E9%9D%A0%E5%B2%B8%23) `329.4K 🔥` `NEW`
1. [汉坦病毒不会全球大暴发 (Hantavirus will not cause a global outbreak)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E4%B8%8D%E4%BC%9A%E5%85%A8%E7%90%83%E5%A4%A7%E6%9A%B4%E5%8F%91%23) `324.4K 🔥` `NEW`
1. [榴莲遭仅退款商家称希望公开道歉](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E9%81%AD%E4%BB%85%E9%80%80%E6%AC%BE%E5%95%86%E5%AE%B6%E7%A7%B0%E5%B8%8C%E6%9C%9B%E5%85%AC%E5%BC%80%E9%81%93%E6%AD%89%23) `323.5K 🔥` `NEW`
1. [小米18系列或成最激进一代](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318%E7%B3%BB%E5%88%97%E6%88%96%E6%88%90%E6%9C%80%E6%BF%80%E8%BF%9B%E4%B8%80%E4%BB%A3%23) `195.3K 🔥` `NEW`
1. [2026款丰田铂智3X权益价9.48万起](https://s.weibo.com/weibo?q=%232026%E6%AC%BE%E4%B8%B0%E7%94%B0%E9%93%82%E6%99%BA3X%E6%9D%83%E7%9B%8A%E4%BB%B79.48%E4%B8%87%E8%B5%B7%23) `164.4K 🔥` `NEW`
1. [低智商犯罪](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `164.0K 🔥` `NEW`
1. [皮皮虾事件亲属回应客人签字确认才做](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E7%9A%AE%E8%99%BE%E4%BA%8B%E4%BB%B6%E4%BA%B2%E5%B1%9E%E5%9B%9E%E5%BA%94%E5%AE%A2%E4%BA%BA%E7%AD%BE%E5%AD%97%E7%A1%AE%E8%AE%A4%E6%89%8D%E5%81%9A%23) `163.4K 🔥` `NEW`
1. [吴艳妮强迫症爆发整理家](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE%E5%BC%BA%E8%BF%AB%E7%97%87%E7%88%86%E5%8F%91%E6%95%B4%E7%90%86%E5%AE%B6%23) `162.5K 🔥` `NEW`
1. [女子耳朵注射玻尿酸后确诊脑梗死](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%80%B3%E6%9C%B5%E6%B3%A8%E5%B0%84%E7%8E%BB%E5%B0%BF%E9%85%B8%E5%90%8E%E7%A1%AE%E8%AF%8A%E8%84%91%E6%A2%97%E6%AD%BB%23) `162.1K 🔥` `NEW`
1. [新娘的陪嫁是一对龙凤胎](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%9A%84%E9%99%AA%E5%AB%81%E6%98%AF%E4%B8%80%E5%AF%B9%E9%BE%99%E5%87%A4%E8%83%8E%23) `161.9K 🔥` `NEW`
1. [汪海林回应被限高](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B5%B7%E6%9E%97%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%99%90%E9%AB%98%23) `161.5K 🔥` `NEW`
1. [外网把中国视频偷给日本成常态 (It has become normal for external networks to steal Chinese videos to Japan)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E6%8A%8A%E4%B8%AD%E5%9B%BD%E8%A7%86%E9%A2%91%E5%81%B7%E7%BB%99%E6%97%A5%E6%9C%AC%E6%88%90%E5%B8%B8%E6%80%81%23) `160.6K 🔥` `NEW`
1. [TOP吃饭用盆装菜](https://s.weibo.com/weibo?q=%23TOP%E5%90%83%E9%A5%AD%E7%94%A8%E7%9B%86%E8%A3%85%E8%8F%9C%23) `160.3K 🔥` `NEW`
1. [浪姐们补偿粉丝应援费用](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BB%AC%E8%A1%A5%E5%81%BF%E7%B2%89%E4%B8%9D%E5%BA%94%E6%8F%B4%E8%B4%B9%E7%94%A8%23) `156.0K 🔥` `NEW`
1. [白敬亭已经是cortis老粉了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E5%B7%B2%E7%BB%8F%E6%98%AFcortis%E8%80%81%E7%B2%89%E4%BA%86%23) `120.1K 🔥` `NEW`
1. [詹姆斯一句0比2堵住所有问题 (James blocked all problems with 0 to 2)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%80%E5%8F%A50%E6%AF%942%E5%A0%B5%E4%BD%8F%E6%89%80%E6%9C%89%E9%97%AE%E9%A2%98%23) `405.6K 🔥` `+93%`
1. [难怪马頔会喜欢孙丞潇](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E9%A9%AC%E9%A0%94%E4%BC%9A%E5%96%9C%E6%AC%A2%E5%AD%99%E4%B8%9E%E6%BD%87%23) `349.9K 🔥` `+22%`
1. [榴莲仅退款买家发声](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E5%8F%91%E5%A3%B0%23) `318.1K 🔥` `+50%`
1. [榴莲仅退款买家被行拘](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `2.7M 🔥`
1. [湖南卫视综艺本周停播](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E7%BB%BC%E8%89%BA%E6%9C%AC%E5%91%A8%E5%81%9C%E6%92%AD%23) `1.1M 🔥`
1. [以旧换新助推智能消费升级 (Trade-in old products for new ones to promote smart consumption upgrades)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E5%8A%A9%E6%8E%A8%E6%99%BA%E8%83%BD%E6%B6%88%E8%B4%B9%E5%8D%87%E7%BA%A7%23) `815.1K 🔥`
1. [央视或低价拿下世界杯转播权 (CCTV may win the World Cup broadcasting rights at a low price)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%88%96%E4%BD%8E%E4%BB%B7%E6%8B%BF%E4%B8%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `523.0K 🔥`
1. [向太不满向佑恋情称绝不认这种儿媳](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E4%B8%8D%E6%BB%A1%E5%90%91%E4%BD%91%E6%81%8B%E6%83%85%E7%A7%B0%E7%BB%9D%E4%B8%8D%E8%AE%A4%E8%BF%99%E7%A7%8D%E5%84%BF%E5%AA%B3%23) `344.7K 🔥`
1. [孙恩盛掉美颜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%81%A9%E7%9B%9B%E6%8E%89%E7%BE%8E%E9%A2%9C%23) `319.2K 🔥`
1. [汉坦病毒 (hantavirus)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%23) `271.4K 🔥`
1. [曝时代少年团新企划](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%96%B0%E4%BC%81%E5%88%92%23) `258.7K 🔥`
1. [今我二人 今我夫妻二人 (Now we are two. Now we are husband and wife.)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%88%91%E4%BA%8C%E4%BA%BA%20%E4%BB%8A%E6%88%91%E5%A4%AB%E5%A6%BB%E4%BA%8C%E4%BA%BA%23) `175.9K 🔥`
1. [宇树机器人在韩国当和尚了](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%9C%A8%E9%9F%A9%E5%9B%BD%E5%BD%93%E5%92%8C%E5%B0%9A%E4%BA%86%23) `164.5K 🔥`
1. [中疾控回应汉坦病毒疫情](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%96%BE%E6%8E%A7%E5%9B%9E%E5%BA%94%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E7%96%AB%E6%83%85%23) `163.5K 🔥`
1. [Switch2官宣涨价](https://s.weibo.com/weibo?q=%23Switch2%E5%AE%98%E5%AE%A3%E6%B6%A8%E4%BB%B7%23) `163.0K 🔥`
1. [白敬亭 简醇全球品牌代言人 (Bai Jingting, global brand spokesperson of Jian Chun)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E7%AE%80%E9%86%87%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `746.0K 🔥` `-23%`
1. [孟子义确实红的档期有点满](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%A1%AE%E5%AE%9E%E7%BA%A2%E7%9A%84%E6%A1%A3%E6%9C%9F%E6%9C%89%E7%82%B9%E6%BB%A1%23) `349.7K 🔥` `-27%`
1. [工作后大家的朋友圈都变了 (After work, everyone’s circle of friends has changed.)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E5%A4%A7%E5%AE%B6%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%83%BD%E5%8F%98%E4%BA%86%23) `348.8K 🔥` `-26%`
1. [小米汽车高层调整](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E9%AB%98%E5%B1%82%E8%B0%83%E6%95%B4%23) `164.8K 🔥` `-23%`
1. [台湾出现汉坦病毒致死病例](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%87%BA%E7%8E%B0%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E8%87%B4%E6%AD%BB%E7%97%85%E4%BE%8B%23) `163.9K 🔥` `-86%`
1. [Uzi说人气被自己玩没了](https://s.weibo.com/weibo?q=%23Uzi%E8%AF%B4%E4%BA%BA%E6%B0%94%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%8E%A9%E6%B2%A1%E4%BA%86%23) `162.9K 🔥` `-22%`
1. [陈漫拍Angelababy](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%BC%AB%E6%8B%8DAngelababy%23) `162.6K 🔥` `-23%`
1. [斜方肌就是一个巨大的讨好型人格 (The trapezius muscle is a huge pleaser personality)](https://s.weibo.com/weibo?q=%23%E6%96%9C%E6%96%B9%E8%82%8C%E5%B0%B1%E6%98%AF%E4%B8%80%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E8%AE%A8%E5%A5%BD%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `161.5K 🔥` `-51%`
1. [田曦薇 分不清标题和弹幕谁更好笑](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%88%86%E4%B8%8D%E6%B8%85%E6%A0%87%E9%A2%98%E5%92%8C%E5%BC%B9%E5%B9%95%E8%B0%81%E6%9B%B4%E5%A5%BD%E7%AC%91%23) `161.2K 🔥` `-35%`
1. [老人子宫切除20年后CT报告正常](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%AD%90%E5%AE%AB%E5%88%87%E9%99%A420%E5%B9%B4%E5%90%8ECT%E6%8A%A5%E5%91%8A%E6%AD%A3%E5%B8%B8%23) `136.2K 🔥` `-31%`
1. [袁娅维报平安 (Yuan Yawei reported safety)](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%A8%85%E7%BB%B4%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `130.2K 🔥` `-38%`
1. [这一刻所有偶像剧都要弱爆了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%88%BB%E6%89%80%E6%9C%89%E5%81%B6%E5%83%8F%E5%89%A7%E9%83%BD%E8%A6%81%E5%BC%B1%E7%88%86%E4%BA%86%23) `121.9K 🔥` `-42%`

Updated at 2026-05-08 18:19:59

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
