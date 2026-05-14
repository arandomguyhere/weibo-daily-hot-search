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

1. [方媛坚持要住男生单人间 (Fang Yuan insisted on staying in a single room for boys)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%9D%9A%E6%8C%81%E8%A6%81%E4%BD%8F%E7%94%B7%E7%94%9F%E5%8D%95%E4%BA%BA%E9%97%B4%23) `932.3K 🔥` `NEW`
1. [中美关系只能搞好不能搞坏](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E5%8F%AA%E8%83%BD%E6%90%9E%E5%A5%BD%E4%B8%8D%E8%83%BD%E6%90%9E%E5%9D%8F%23) `372.5K 🔥` `NEW`
1. [马斯克携幼子现身人民大会堂](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%90%BA%E5%B9%BC%E5%AD%90%E7%8E%B0%E8%BA%AB%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `371.1K 🔥` `NEW`
1. [烧鹅皮手握](https://s.weibo.com/weibo?q=%23%E7%83%A7%E9%B9%85%E7%9A%AE%E6%89%8B%E6%8F%A1%23) `368.0K 🔥` `NEW`
1. [王楚钦亮相高级珠宝展路透](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BA%AE%E7%9B%B8%E9%AB%98%E7%BA%A7%E7%8F%A0%E5%AE%9D%E5%B1%95%E8%B7%AF%E9%80%8F%23) `360.6K 🔥` `NEW`
1. [猫咪一晚抓27只老鼠整齐摆身旁邀功](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E4%B8%80%E6%99%9A%E6%8A%9327%E5%8F%AA%E8%80%81%E9%BC%A0%E6%95%B4%E9%BD%90%E6%91%86%E8%BA%AB%E6%97%81%E9%82%80%E5%8A%9F%23) `357.4K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `356.4K 🔥` `NEW`
1. [马斯克回复360度转圈拍人民大会堂](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%9B%9E%E5%A4%8D360%E5%BA%A6%E8%BD%AC%E5%9C%88%E6%8B%8D%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `355.4K 🔥` `NEW`
1. [曝李昀锐孟子义昀牵孟绕解绑节奏](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%E8%A7%A3%E7%BB%91%E8%8A%82%E5%A5%8F%23) `355.2K 🔥` `NEW`
1. [马斯克说会晤会有好成果](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E8%AF%B4%E4%BC%9A%E6%99%A4%E4%BC%9A%E6%9C%89%E5%A5%BD%E6%88%90%E6%9E%9C%23) `354.6K 🔥` `NEW`
1. [爸爸当家5嘉宾阵容 (Daddy’s Home 5 guest lineup)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BD%93%E5%AE%B65%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `353.2K 🔥` `NEW`
1. [巩俐戛纳红毯依旧钟情裸色](https://s.weibo.com/weibo?q=%23%E5%B7%A9%E4%BF%90%E6%88%9B%E7%BA%B3%E7%BA%A2%E6%AF%AF%E4%BE%9D%E6%97%A7%E9%92%9F%E6%83%85%E8%A3%B8%E8%89%B2%23) `294.0K 🔥` `NEW`
1. [小米17Max首发搭载徕卡2亿主摄](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B317Max%E9%A6%96%E5%8F%91%E6%90%AD%E8%BD%BD%E5%BE%95%E5%8D%A12%E4%BA%BF%E4%B8%BB%E6%91%84%23) `286.8K 🔥` `NEW`
1. [尊重小猫自己的小爱好](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E9%87%8D%E5%B0%8F%E7%8C%AB%E8%87%AA%E5%B7%B1%E7%9A%84%E5%B0%8F%E7%88%B1%E5%A5%BD%23) `278.3K 🔥` `NEW`
1. [桃花坞9个男生共用1个卫生间](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E9%E4%B8%AA%E7%94%B7%E7%94%9F%E5%85%B1%E7%94%A81%E4%B8%AA%E5%8D%AB%E7%94%9F%E9%97%B4%23) `273.9K 🔥` `NEW`
1. [吴宣仪新公司叫祎琏文化](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%96%B0%E5%85%AC%E5%8F%B8%E5%8F%AB%E7%A5%8E%E7%90%8F%E6%96%87%E5%8C%96%23) `172.2K 🔥` `NEW`
1. [男生口臭2年险患癌体内发现罕见菌株](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E5%8F%A3%E8%87%AD2%E5%B9%B4%E9%99%A9%E6%82%A3%E7%99%8C%E4%BD%93%E5%86%85%E5%8F%91%E7%8E%B0%E7%BD%95%E8%A7%81%E8%8F%8C%E6%A0%AA%23) `161.2K 🔥` `NEW`
1. [藏海传2简介](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A02%E7%AE%80%E4%BB%8B%23) `156.2K 🔥` `NEW`
1. [怦然心动20岁冬季](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%E5%86%AC%E5%AD%A3%23) `147.7K 🔥` `NEW`
1. [10种不舒服是抑郁症躯体化表现](https://s.weibo.com/weibo?q=%2310%E7%A7%8D%E4%B8%8D%E8%88%92%E6%9C%8D%E6%98%AF%E6%8A%91%E9%83%81%E7%97%87%E8%BA%AF%E4%BD%93%E5%8C%96%E8%A1%A8%E7%8E%B0%23) `142.7K 🔥` `NEW`
1. [特朗普说访问中国非常荣幸 (Trump said it was a great honor to visit China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E8%AE%BF%E9%97%AE%E4%B8%AD%E5%9B%BD%E9%9D%9E%E5%B8%B8%E8%8D%A3%E5%B9%B8%23) `142.6K 🔥` `NEW`
1. [Jonathan首次Dior早春秀出炉](https://s.weibo.com/weibo?q=%23Jonathan%E9%A6%96%E6%AC%A1Dior%E6%97%A9%E6%98%A5%E7%A7%80%E5%87%BA%E7%82%89%23) `142.6K 🔥` `NEW`
1. [特朗普访华欢迎宴会](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%23) `16.6M 🔥` `+953%`
1. [中美领导人致辞 (Speeches from Chinese and American leaders)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%A2%86%E5%AF%BC%E4%BA%BA%E8%87%B4%E8%BE%9E%23) `3.1M 🔥` `+88%`
1. [这些美方代表在中美元首会谈会场](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E7%BE%8E%E6%96%B9%E4%BB%A3%E8%A1%A8%E5%9C%A8%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E8%B0%88%E4%BC%9A%E5%9C%BA%23) `1.7M 🔥` `+24%`
1. [果然岁月从不败美人](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E5%B2%81%E6%9C%88%E4%BB%8E%E4%B8%8D%E8%B4%A5%E7%BE%8E%E4%BA%BA%23) `384.8K 🔥` `+99%`
1. [31岁女子从60斤增到90斤像变个人](https://s.weibo.com/weibo?q=%2331%E5%B2%81%E5%A5%B3%E5%AD%90%E4%BB%8E60%E6%96%A4%E5%A2%9E%E5%88%B090%E6%96%A4%E5%83%8F%E5%8F%98%E4%B8%AA%E4%BA%BA%23) `238.8K 🔥` `+34%`
1. [特朗普参观天坛感叹惊艳](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%82%E8%A7%82%E5%A4%A9%E5%9D%9B%E6%84%9F%E5%8F%B9%E6%83%8A%E8%89%B3%23) `143.6K 🔥`
1. [给阿嬷的情书女主官宣入行](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%A5%B3%E4%B8%BB%E5%AE%98%E5%AE%A3%E5%85%A5%E8%A1%8C%23) `694.8K 🔥` `-27%`
1. [宋亚轩和张杰女儿撞小名](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%92%8C%E5%BC%A0%E6%9D%B0%E5%A5%B3%E5%84%BF%E6%92%9E%E5%B0%8F%E5%90%8D%23) `383.9K 🔥` `-28%`
1. [中美元首在祈年殿广场合影 (The heads of state of China and the United States took a group photo at the Square of the Hall of Prayer for Good Harvests)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%9C%A8%E7%A5%88%E5%B9%B4%E6%AE%BF%E5%B9%BF%E5%9C%BA%E5%90%88%E5%BD%B1%23) `381.1K 🔥` `-25%`
1. [腾讯成立800人团队适配鸿蒙 (Tencent sets up a team of 800 people to adapt to Hongmeng)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E6%88%90%E7%AB%8B800%E4%BA%BA%E5%9B%A2%E9%98%9F%E9%80%82%E9%85%8D%E9%B8%BF%E8%92%99%23) `377.7K 🔥` `-32%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `376.8K 🔥` `-31%`
1. [特朗普说二三把手我都不让他们来 (Trump said I won’t even let the second and third leaders come.)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%BA%8C%E4%B8%89%E6%8A%8A%E6%89%8B%E6%88%91%E9%83%BD%E4%B8%8D%E8%AE%A9%E4%BB%96%E4%BB%AC%E6%9D%A5%23) `367.3K 🔥` `-33%`
1. [黄景瑜微博改名](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%BE%AE%E5%8D%9A%E6%94%B9%E5%90%8D%23) `364.9K 🔥` `-33%`
1. [男子1万买榴莲付11万几个月才发现](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%901%E4%B8%87%E4%B9%B0%E6%A6%B4%E8%8E%B2%E4%BB%9811%E4%B8%87%E5%87%A0%E4%B8%AA%E6%9C%88%E6%89%8D%E5%8F%91%E7%8E%B0%23) `357.7K 🔥` `-33%`
1. [特朗普抵达欢迎宴会现场](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%E7%8E%B0%E5%9C%BA%23) `357.5K 🔥` `-33%`
1. [鹿晗寸头](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%AF%B8%E5%A4%B4%23) `356.4K 🔥` `-34%`
1. [关闭支付宝支付功能后被扣捐赠184万](https://s.weibo.com/weibo?q=%23%E5%85%B3%E9%97%AD%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%AF%E4%BB%98%E5%8A%9F%E8%83%BD%E5%90%8E%E8%A2%AB%E6%89%A3%E6%8D%90%E8%B5%A0184%E4%B8%87%23) `353.7K 🔥` `-74%`
1. [特朗普感叹大美中国](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%84%9F%E5%8F%B9%E5%A4%A7%E7%BE%8E%E4%B8%AD%E5%9B%BD%23) `352.6K 🔥` `-35%`
1. [白鹿演唱会票价加起来是十年 (The total ticket price for the White Deer concert is ten years)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%E5%8A%A0%E8%B5%B7%E6%9D%A5%E6%98%AF%E5%8D%81%E5%B9%B4%23) `352.4K 🔥` `-64%`
1. [特朗普参观天坛](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%82%E8%A7%82%E5%A4%A9%E5%9D%9B%23) `351.6K 🔥` `-31%`
1. [爱喝粥和爱喝咖啡的人都沉默了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%96%9D%E7%B2%A5%E5%92%8C%E7%88%B1%E5%96%9D%E5%92%96%E5%95%A1%E7%9A%84%E4%BA%BA%E9%83%BD%E6%B2%89%E9%BB%98%E4%BA%86%23) `351.4K 🔥` `-34%`
1. [白玉兰奖动了 (The Magnolia Award is moving)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%E5%8A%A8%E4%BA%86%23) `322.9K 🔥` `-39%`
1. [易烊千玺 惊悚片](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E6%83%8A%E6%82%9A%E7%89%87%23) `321.4K 🔥` `-37%`
1. [所有不尊重你的人赌的都是你没有前途 (All those who disrespect you are betting that you have no future.)](https://s.weibo.com/weibo?q=%23%E6%89%80%E6%9C%89%E4%B8%8D%E5%B0%8A%E9%87%8D%E4%BD%A0%E7%9A%84%E4%BA%BA%E8%B5%8C%E7%9A%84%E9%83%BD%E6%98%AF%E4%BD%A0%E6%B2%A1%E6%9C%89%E5%89%8D%E9%80%94%23) `298.1K 🔥` `-43%`
1. [歌手2026定档官宣](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E5%AE%9A%E6%A1%A3%E5%AE%98%E5%AE%A3%23) `284.6K 🔥` `-49%`
1. [鲁比奥称中美关系非常有建设性](https://s.weibo.com/weibo?q=%23%E9%B2%81%E6%AF%94%E5%A5%A5%E7%A7%B0%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E9%9D%9E%E5%B8%B8%E6%9C%89%E5%BB%BA%E8%AE%BE%E6%80%A7%23) `207.6K 🔥` `-59%`
1. [杨洋来河南也得抱捆蒜苔回去](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%9D%A5%E6%B2%B3%E5%8D%97%E4%B9%9F%E5%BE%97%E6%8A%B1%E6%8D%86%E8%92%9C%E8%8B%94%E5%9B%9E%E5%8E%BB%23) `174.8K 🔥` `-66%`
1. [薯片透明包装](https://s.weibo.com/weibo?q=%23%E8%96%AF%E7%89%87%E9%80%8F%E6%98%8E%E5%8C%85%E8%A3%85%23) `146.0K 🔥` `-65%`

Updated at 2026-05-14 20:15:36

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
