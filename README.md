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

1. [刘翔年保底收入1400万元 (Liu Xiang’s annual guaranteed income is 14 million yuan)](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%B9%B4%E4%BF%9D%E5%BA%95%E6%94%B6%E5%85%A51400%E4%B8%87%E5%85%83%23) `3.9M 🔥` `NEW`
1. [我的美食探店清单](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E7%BE%8E%E9%A3%9F%E6%8E%A2%E5%BA%97%E6%B8%85%E5%8D%95%23) `1.2M 🔥` `NEW`
1. [刘翔如果买断安置费有多少](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%A6%82%E6%9E%9C%E4%B9%B0%E6%96%AD%E5%AE%89%E7%BD%AE%E8%B4%B9%E6%9C%89%E5%A4%9A%E5%B0%91%23) `1.1M 🔥` `NEW`
1. [网传8月新冠很严重并有变异毒株不实](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A08%E6%9C%88%E6%96%B0%E5%86%A0%E5%BE%88%E4%B8%A5%E9%87%8D%E5%B9%B6%E6%9C%89%E5%8F%98%E5%BC%82%E6%AF%92%E6%A0%AA%E4%B8%8D%E5%AE%9E%23) `803.0K 🔥` `NEW`
1. [西藏泥石流救援现场](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E6%95%91%E6%8F%B4%E7%8E%B0%E5%9C%BA%23) `791.9K 🔥` `NEW`
1. [尼泊尔山洪或与高山冰川融化有关](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E6%88%96%E4%B8%8E%E9%AB%98%E5%B1%B1%E5%86%B0%E5%B7%9D%E8%9E%8D%E5%8C%96%E6%9C%89%E5%85%B3%23) `451.7K 🔥` `NEW`
1. [尼泊尔山洪遇难人数升至72人](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E9%81%87%E9%9A%BE%E4%BA%BA%E6%95%B0%E5%8D%87%E8%87%B372%E4%BA%BA%23) `437.1K 🔥` `NEW`
1. [惠普向华为支付专利许可费用](https://s.weibo.com/weibo?q=%23%E6%83%A0%E6%99%AE%E5%90%91%E5%8D%8E%E4%B8%BA%E6%94%AF%E4%BB%98%E4%B8%93%E5%88%A9%E8%AE%B8%E5%8F%AF%E8%B4%B9%E7%94%A8%23) `430.2K 🔥` `NEW`
1. [宇树科技跌麻了](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E8%B7%8C%E9%BA%BB%E4%BA%86%23) `403.2K 🔥` `NEW`
1. [侯卓成说亏欠杨汝晴](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E8%AF%B4%E4%BA%8F%E6%AC%A0%E6%9D%A8%E6%B1%9D%E6%99%B4%23) `389.7K 🔥` `NEW`
1. [千万不要把秘密留在行李箱 (Never leave secrets in your suitcase)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E7%A7%98%E5%AF%86%E7%95%99%E5%9C%A8%E8%A1%8C%E6%9D%8E%E7%AE%B1%23) `370.0K 🔥` `NEW`
1. [这竟然是冯绍峰](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%AB%9F%E7%84%B6%E6%98%AF%E5%86%AF%E7%BB%8D%E5%B3%B0%23) `262.9K 🔥` `NEW`
1. [刘翔当年强到什么程度](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%BD%93%E5%B9%B4%E5%BC%BA%E5%88%B0%E4%BB%80%E4%B9%88%E7%A8%8B%E5%BA%A6%23) `257.7K 🔥` `NEW`
1. [上海体育局称刘翔是功勋体育人](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BD%93%E8%82%B2%E5%B1%80%E7%A7%B0%E5%88%98%E7%BF%94%E6%98%AF%E5%8A%9F%E5%8B%8B%E4%BD%93%E8%82%B2%E4%BA%BA%23) `243.9K 🔥` `NEW`
1. [有小孩在伊利雪糕中吃出疑似牙齿](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%B0%8F%E5%AD%A9%E5%9C%A8%E4%BC%8A%E5%88%A9%E9%9B%AA%E7%B3%95%E4%B8%AD%E5%90%83%E5%87%BA%E7%96%91%E4%BC%BC%E7%89%99%E9%BD%BF%23) `237.2K 🔥` `NEW`
1. [海南大学女研究生失联警方介入](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8D%97%E5%A4%A7%E5%AD%A6%E5%A5%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E5%A4%B1%E8%81%94%E8%AD%A6%E6%96%B9%E4%BB%8B%E5%85%A5%23) `233.0K 🔥` `NEW`
1. [刘翔曾称不当教练](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E6%9B%BE%E7%A7%B0%E4%B8%8D%E5%BD%93%E6%95%99%E7%BB%83%23) `223.0K 🔥` `NEW`
1. [早春晴朗 选角](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%20%E9%80%89%E8%A7%92%23) `192.2K 🔥` `NEW`
1. [宋祖儿正太扭腰](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E6%AD%A3%E5%A4%AA%E6%89%AD%E8%85%B0%23) `190.0K 🔥` `NEW`
1. [成毅用工作人员肩膀压腿](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%94%A8%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E8%82%A9%E8%86%80%E5%8E%8B%E8%85%BF%23) `830.3K 🔥` `+74%`
1. [年轻人不会被电诈的原因 (Reasons why young people will not be scammed by phone)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%8D%E4%BC%9A%E8%A2%AB%E7%94%B5%E8%AF%88%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `784.2K 🔥` `+68%`
1. [王安宇晒与贾冰白敬亭合照放C位](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%99%92%E4%B8%8E%E8%B4%BE%E5%86%B0%E7%99%BD%E6%95%AC%E4%BA%AD%E5%90%88%E7%85%A7%E6%94%BEC%E4%BD%8D%23) `757.3K 🔥` `+229%`
1. [侯卓成起诉王垲智](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E8%B5%B7%E8%AF%89%E7%8E%8B%E5%9E%B2%E6%99%BA%23) `726.1K 🔥` `+324%`
1. [尼泊尔山洪航拍](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E8%88%AA%E6%8B%8D%23) `716.9K 🔥` `+151%`
1. [宋雨琦肿成蜜蜂小狗](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%82%BF%E6%88%90%E8%9C%9C%E8%9C%82%E5%B0%8F%E7%8B%97%23) `593.4K 🔥` `+77%`
1. [泥石流致西藏吉隆重大人员伤亡失联](https://s.weibo.com/weibo?q=%23%E6%B3%A5%E7%9F%B3%E6%B5%81%E8%87%B4%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E9%87%8D%E5%A4%A7%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%E5%A4%B1%E8%81%94%23) `534.0K 🔥` `+59%`
1. [吉隆口岸](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%23) `499.6K 🔥` `+51%`
1. [社保有多厉害可能超乎你的想象](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%E5%8F%AF%E8%83%BD%E8%B6%85%E4%B9%8E%E4%BD%A0%E7%9A%84%E6%83%B3%E8%B1%A1%23) `466.8K 🔥` `+40%`
1. [牛来模型确认为智谱GLM系列](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E6%A8%A1%E5%9E%8B%E7%A1%AE%E8%AE%A4%E4%B8%BA%E6%99%BA%E8%B0%B1GLM%E7%B3%BB%E5%88%97%23) `455.0K 🔥` `+37%`
1. [包文婧曾说再信包贝尔一次](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E6%9B%BE%E8%AF%B4%E5%86%8D%E4%BF%A1%E5%8C%85%E8%B4%9D%E5%B0%94%E4%B8%80%E6%AC%A1%23) `447.5K 🔥` `+37%`
1. [爱情公寓官方换头像](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%AE%98%E6%96%B9%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `438.8K 🔥` `+31%`
1. [包贝尔内娱第一位许愿柳使用者](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%86%85%E5%A8%B1%E7%AC%AC%E4%B8%80%E4%BD%8D%E8%AE%B8%E6%84%BF%E6%9F%B3%E4%BD%BF%E7%94%A8%E8%80%85%23) `414.0K 🔥` `+41%`
1. [包文婧转发区 (Bao Wenjing forwarding area)](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E8%BD%AC%E5%8F%91%E5%8C%BA%23) `380.1K 🔥` `+34%`
1. [尼泊尔北部山洪致近400人失联](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%8C%97%E9%83%A8%E5%B1%B1%E6%B4%AA%E8%87%B4%E8%BF%91400%E4%BA%BA%E5%A4%B1%E8%81%94%23) `1.2M 🔥`
1. [年轻人真的把多运动听进去了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9C%9F%E7%9A%84%E6%8A%8A%E5%A4%9A%E8%BF%90%E5%8A%A8%E5%90%AC%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `770.3K 🔥`
1. [白敬亭贾冰王安宇合照](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E8%B4%BE%E5%86%B0%E7%8E%8B%E5%AE%89%E5%AE%87%E5%90%88%E7%85%A7%23) `464.6K 🔥`
1. [磁场干净的人有奶香味](https://s.weibo.com/weibo?q=%23%E7%A3%81%E5%9C%BA%E5%B9%B2%E5%87%80%E7%9A%84%E4%BA%BA%E6%9C%89%E5%A5%B6%E9%A6%99%E5%91%B3%23) `375.0K 🔥`
1. [欢子起诉湖南卫视](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E8%B5%B7%E8%AF%89%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%23) `347.0K 🔥`
1. [宁静力挺湖南卫视 (Tranquility supports Hunan Satellite TV)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E5%8A%9B%E6%8C%BA%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%23) `306.7K 🔥`
1. [橡皮艇 台湾](https://s.weibo.com/weibo?q=%23%E6%A9%A1%E7%9A%AE%E8%89%87%20%E5%8F%B0%E6%B9%BE%23) `264.3K 🔥`
1. [开胸手术和感染 治好晚期癌症 (Thoracotomy and infection, curing late-stage cancer)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%83%B8%E6%89%8B%E6%9C%AF%E5%92%8C%E6%84%9F%E6%9F%93%20%E6%B2%BB%E5%A5%BD%E6%99%9A%E6%9C%9F%E7%99%8C%E7%97%87%23) `250.6K 🔥`
1. [白鹿阻止场务用激光笔照人](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%98%BB%E6%AD%A2%E5%9C%BA%E5%8A%A1%E7%94%A8%E6%BF%80%E5%85%89%E7%AC%94%E7%85%A7%E4%BA%BA%23) `230.9K 🔥`
1. [为什么每天刷牙还是烂到空心](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%AF%8F%E5%A4%A9%E5%88%B7%E7%89%99%E8%BF%98%E6%98%AF%E7%83%82%E5%88%B0%E7%A9%BA%E5%BF%83%23) `197.2K 🔥`
1. [上海体育局回应刘翔求助 (Shanghai Sports Bureau responds to Liu Xiang’s request for help)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BD%93%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E5%88%98%E7%BF%94%E6%B1%82%E5%8A%A9%23) `4.9M 🔥` `-28%`
1. [中国新能源汽车为何能领跑全球 (Why can China’s new energy vehicles lead the world?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E4%B8%BA%E4%BD%95%E8%83%BD%E9%A2%86%E8%B7%91%E5%85%A8%E7%90%83%23) `1.3M 🔥` `-21%`
1. [西藏泥石流](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `744.0K 🔥` `-61%`
1. [欢子搞错被告了](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E6%90%9E%E9%94%99%E8%A2%AB%E5%91%8A%E4%BA%86%23) `426.6K 🔥` `-28%`
1. [虞书欣 丝巾当抹胸穿](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E4%B8%9D%E5%B7%BE%E5%BD%93%E6%8A%B9%E8%83%B8%E7%A9%BF%23) `206.8K 🔥` `-31%`
1. [中国女排VS中国台北](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92VS%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%23) `195.0K 🔥` `-33%`
1. [死者家属回应索赔1.9万元质疑](https://s.weibo.com/weibo?q=%23%E6%AD%BB%E8%80%85%E5%AE%B6%E5%B1%9E%E5%9B%9E%E5%BA%94%E7%B4%A2%E8%B5%941.9%E4%B8%87%E5%85%83%E8%B4%A8%E7%96%91%23) `194.0K 🔥` `-42%`
1. [宗馥莉饮品品牌线上销售数据](https://s.weibo.com/weibo?q=%23%E5%AE%97%E9%A6%A5%E8%8E%89%E9%A5%AE%E5%93%81%E5%93%81%E7%89%8C%E7%BA%BF%E4%B8%8A%E9%94%80%E5%94%AE%E6%95%B0%E6%8D%AE%23) `190.5K 🔥` `-43%`

Updated at 2026-08-26 22:03:47

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
