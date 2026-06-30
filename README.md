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

1. [德国淘汰 (Germany eliminated)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E6%B7%98%E6%B1%B0%23) `9.2M 🔥` `NEW`
1. [人民锐评网红诋毁袁隆平造谣企业家](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E9%94%90%E8%AF%84%E7%BD%91%E7%BA%A2%E8%AF%8B%E6%AF%81%E8%A2%81%E9%9A%86%E5%B9%B3%E9%80%A0%E8%B0%A3%E4%BC%81%E4%B8%9A%E5%AE%B6%23) `1.7M 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `1.1M 🔥` `NEW`
1. [荷兰vs摩洛哥](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0vs%E6%91%A9%E6%B4%9B%E5%93%A5%23) `606.0K 🔥` `NEW`
1. [在厦门看到了小时候想象的未来](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8E%A6%E9%97%A8%E7%9C%8B%E5%88%B0%E4%BA%86%E5%B0%8F%E6%97%B6%E5%80%99%E6%83%B3%E8%B1%A1%E7%9A%84%E6%9C%AA%E6%9D%A5%23) `479.2K 🔥` `NEW`
1. [金鹰奖视后提名预测](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E8%A7%86%E5%90%8E%E6%8F%90%E5%90%8D%E9%A2%84%E6%B5%8B%23) `426.5K 🔥` `NEW`
1. [陈小春人老了干什么也不心酸](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E4%BA%BA%E8%80%81%E4%BA%86%E5%B9%B2%E4%BB%80%E4%B9%88%E4%B9%9F%E4%B8%8D%E5%BF%83%E9%85%B8%23) `294.2K 🔥` `NEW`
1. [iPhone18e曝光](https://s.weibo.com/weibo?q=%23iPhone18e%E6%9B%9D%E5%85%89%23) `289.3K 🔥` `NEW`
1. [黄晓明夸昆凌引杨颖对比](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%A4%B8%E6%98%86%E5%87%8C%E5%BC%95%E6%9D%A8%E9%A2%96%E5%AF%B9%E6%AF%94%23) `288.4K 🔥` `NEW`
1. [内马尔安慰日本球员](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%AE%89%E6%85%B0%E6%97%A5%E6%9C%AC%E7%90%83%E5%91%98%23) `268.0K 🔥` `NEW`
1. [杨紫被质疑未使用原名纯属误解 (Yang Zi was questioned and it was purely a misunderstanding that she did not use her original name.)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%A2%AB%E8%B4%A8%E7%96%91%E6%9C%AA%E4%BD%BF%E7%94%A8%E5%8E%9F%E5%90%8D%E7%BA%AF%E5%B1%9E%E8%AF%AF%E8%A7%A3%23) `263.2K 🔥` `NEW`
1. [第一次对自信的力量有了实感](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%87%AA%E4%BF%A1%E7%9A%84%E5%8A%9B%E9%87%8F%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `242.7K 🔥` `NEW`
1. [Melo向柳智敏张元英道歉](https://s.weibo.com/weibo?q=%23Melo%E5%90%91%E6%9F%B3%E6%99%BA%E6%95%8F%E5%BC%A0%E5%85%83%E8%8B%B1%E9%81%93%E6%AD%89%23) `234.9K 🔥` `NEW`
1. [齐思钧回复张月](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E5%9B%9E%E5%A4%8D%E5%BC%A0%E6%9C%88%23) `233.2K 🔥` `NEW`
1. [存储芯片龙头提示风险](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E9%BE%99%E5%A4%B4%E6%8F%90%E7%A4%BA%E9%A3%8E%E9%99%A9%23) `233.2K 🔥` `NEW`
1. [吴启华卖肖像权拍AI电影](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%90%AF%E5%8D%8E%E5%8D%96%E8%82%96%E5%83%8F%E6%9D%83%E6%8B%8DAI%E7%94%B5%E5%BD%B1%23) `233.2K 🔥` `NEW`
1. [杨紫学位证上就是杨紫](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%AD%A6%E4%BD%8D%E8%AF%81%E4%B8%8A%E5%B0%B1%E6%98%AF%E6%9D%A8%E7%B4%AB%23) `233.1K 🔥` `NEW`
1. [妻子撞死家暴丈夫案二审案情反转](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E6%92%9E%E6%AD%BB%E5%AE%B6%E6%9A%B4%E4%B8%88%E5%A4%AB%E6%A1%88%E4%BA%8C%E5%AE%A1%E6%A1%88%E6%83%85%E5%8F%8D%E8%BD%AC%23) `233.1K 🔥` `NEW`
1. [德国4比5巴拉圭](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD4%E6%AF%945%E5%B7%B4%E6%8B%89%E5%9C%AD%23) `233.1K 🔥` `NEW`
1. [田曦薇这是日常不是广告](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%BF%99%E6%98%AF%E6%97%A5%E5%B8%B8%E4%B8%8D%E6%98%AF%E5%B9%BF%E5%91%8A%23) `233.1K 🔥` `NEW`
1. [王濛回复黄灿灿 (Wang Meng replied to Huang Cancan)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9B%9E%E5%A4%8D%E9%BB%84%E7%81%BF%E7%81%BF%23) `233.0K 🔥` `NEW`
1. [曝iPhone18Pro机密文件现身暗网](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E6%9C%BA%E5%AF%86%E6%96%87%E4%BB%B6%E7%8E%B0%E8%BA%AB%E6%9A%97%E7%BD%91%23) `233.0K 🔥` `NEW`
1. [iPhoneUltra黑色机模](https://s.weibo.com/weibo?q=%23iPhoneUltra%E9%BB%91%E8%89%B2%E6%9C%BA%E6%A8%A1%23) `233.0K 🔥` `NEW`
1. [黄晓明晒和周杰伦的合照](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E6%99%92%E5%92%8C%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%9A%84%E5%90%88%E7%85%A7%23) `232.9K 🔥` `NEW`
1. [王楚钦说配合稍微有些陌生感](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E9%85%8D%E5%90%88%E7%A8%8D%E5%BE%AE%E6%9C%89%E4%BA%9B%E9%99%8C%E7%94%9F%E6%84%9F%23) `232.8K 🔥` `NEW`
1. [恋与深空回应敖尹来源](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%E6%95%96%E5%B0%B9%E6%9D%A5%E6%BA%90%23) `232.8K 🔥` `NEW`
1. [莫兰特被交易到开拓者](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%85%B0%E7%89%B9%E8%A2%AB%E4%BA%A4%E6%98%93%E5%88%B0%E5%BC%80%E6%8B%93%E8%80%85%23) `232.6K 🔥` `NEW`
1. [18岁体育生离世由爷爷奶奶抚养长大](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E4%BD%93%E8%82%B2%E7%94%9F%E7%A6%BB%E4%B8%96%E7%94%B1%E7%88%B7%E7%88%B7%E5%A5%B6%E5%A5%B6%E6%8A%9A%E5%85%BB%E9%95%BF%E5%A4%A7%23) `231.4K 🔥` `NEW`
1. [德国队回应爆冷淘汰](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E9%98%9F%E5%9B%9E%E5%BA%94%E7%88%86%E5%86%B7%E6%B7%98%E6%B1%B0%23) `219.6K 🔥` `NEW`
1. [电影抓特务上映11天破亿](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%8A%93%E7%89%B9%E5%8A%A1%E4%B8%8A%E6%98%A011%E5%A4%A9%E7%A0%B4%E4%BA%BF%23) `216.9K 🔥` `NEW`
1. [巴西绝杀 (Brazil's buzzer beater)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E7%BB%9D%E6%9D%80%23) `8.4M 🔥` `+70%`
1. [恋与深空道歉声明 (Love and Deep Space Apology Statement)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%81%93%E6%AD%89%E5%A3%B0%E6%98%8E%23) `976.2K 🔥` `+317%`
1. [免费试吃发差评被店家挂店门避雷](https://s.weibo.com/weibo?q=%23%E5%85%8D%E8%B4%B9%E8%AF%95%E5%90%83%E5%8F%91%E5%B7%AE%E8%AF%84%E8%A2%AB%E5%BA%97%E5%AE%B6%E6%8C%82%E5%BA%97%E9%97%A8%E9%81%BF%E9%9B%B7%23) `475.3K 🔥` `+319%`
1. [女子清吧被陌生人投放伟哥 (Woman was given Viagra by a stranger at a bar)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B8%85%E5%90%A7%E8%A2%AB%E9%99%8C%E7%94%9F%E4%BA%BA%E6%8A%95%E6%94%BE%E4%BC%9F%E5%93%A5%23) `273.3K 🔥` `+22%`
1. [刘宇宁是去进货了吗 (Did Liu Yuning go to purchase goods?)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%98%AF%E5%8E%BB%E8%BF%9B%E8%B4%A7%E4%BA%86%E5%90%97%23) `233.0K 🔥` `+52%`
1. [科学备孕男女都要上心](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%AD%A6%E5%A4%87%E5%AD%95%E7%94%B7%E5%A5%B3%E9%83%BD%E8%A6%81%E4%B8%8A%E5%BF%83%23) `232.9K 🔥` `+107%`
1. [中国新一轮出口管制直指日本命脉](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E4%B8%80%E8%BD%AE%E5%87%BA%E5%8F%A3%E7%AE%A1%E5%88%B6%E7%9B%B4%E6%8C%87%E6%97%A5%E6%9C%AC%E5%91%BD%E8%84%89%23) `232.9K 🔥` `+106%`
1. [81岁老人被男子买光菜回家车祸去世](https://s.weibo.com/weibo?q=%2381%E5%B2%81%E8%80%81%E4%BA%BA%E8%A2%AB%E7%94%B7%E5%AD%90%E4%B9%B0%E5%85%89%E8%8F%9C%E5%9B%9E%E5%AE%B6%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96%23) `232.8K 🔥` `+113%`
1. [韩国球迷凌晨4点接机怒骂主教练](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%90%83%E8%BF%B7%E5%87%8C%E6%99%A84%E7%82%B9%E6%8E%A5%E6%9C%BA%E6%80%92%E9%AA%82%E4%B8%BB%E6%95%99%E7%BB%83%23) `232.7K 🔥` `+58%`
1. [爱直接对嘴喝饮料的人天塌了 (The sky is falling for people who like to drink directly from mouth to mouth)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%9B%B4%E6%8E%A5%E5%AF%B9%E5%98%B4%E5%96%9D%E9%A5%AE%E6%96%99%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `232.7K 🔥` `+25%`
1. [詹姆斯 勇士](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%20%E5%8B%87%E5%A3%AB%23) `232.6K 🔥` `+52%`
1. [李在明向韩国两大财阀90度鞠躬 (Lee Jae-myung bowed 90 degrees to South Korea’s two largest chaebols)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E5%90%91%E9%9F%A9%E5%9B%BD%E4%B8%A4%E5%A4%A7%E8%B4%A2%E9%98%8090%E5%BA%A6%E9%9E%A0%E8%BA%AC%23) `218.4K 🔥` `+95%`
1. [三星投资计划](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E6%8A%95%E8%B5%84%E8%AE%A1%E5%88%92%23) `216.8K 🔥` `+109%`
1. [全网说丑的玫瑰空调卖了5万台 (50,000 units of the Rose air conditioner that everyone on the Internet said was ugly were sold)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E8%AF%B4%E4%B8%91%E7%9A%84%E7%8E%AB%E7%91%B0%E7%A9%BA%E8%B0%83%E5%8D%96%E4%BA%865%E4%B8%87%E5%8F%B0%23) `216.2K 🔥` `+421%`
1. [刘宇宁高情商化解谁站C位](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E9%AB%98%E6%83%85%E5%95%86%E5%8C%96%E8%A7%A3%E8%B0%81%E7%AB%99C%E4%BD%8D%23) `215.6K 🔥` `+83%`
1. [花少8要去世界杯举办国 (Hua Shao 8 is going to the country hosting the World Cup)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E8%A6%81%E5%8E%BB%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%BE%E5%8A%9E%E5%9B%BD%23) `215.4K 🔥` `+94%`
1. [恋与深空回应争议 (Love and Deep Space Responds to Controversy)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `218.0K 🔥`
1. [点球大战](https://s.weibo.com/weibo?q=%23%E7%82%B9%E7%90%83%E5%A4%A7%E6%88%98%23) `217.2K 🔥`
1. [马航MH370传来最新消息 (The latest news about Malaysia Airlines MH370)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E8%88%AAMH370%E4%BC%A0%E6%9D%A5%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF%23) `255.0K 🔥` `-59%`
1. [德国vs巴拉圭](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BDvs%E5%B7%B4%E6%8B%89%E5%9C%AD%23) `232.7K 🔥` `-91%`
1. [巴西2比1日本](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF2%E6%AF%941%E6%97%A5%E6%9C%AC%23) `226.9K 🔥` `-66%`

Updated at 2026-06-30 09:32:49

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
