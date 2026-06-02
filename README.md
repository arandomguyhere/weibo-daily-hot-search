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

1. [演员魏宗万去世 (Actor Wei Zongwan passed away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%AD%8F%E5%AE%97%E4%B8%87%E5%8E%BB%E4%B8%96%23) `2.4M 🔥` `NEW`
1. [山西沁源县委书记赵永进被查](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%B2%81%E6%BA%90%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%B5%B5%E6%B0%B8%E8%BF%9B%E8%A2%AB%E6%9F%A5%23) `981.3K 🔥` `NEW`
1. [美丽中国行](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E8%A1%8C%23) `809.9K 🔥` `NEW`
1. [丁程鑫受伤](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%97%E4%BC%A4%23) `701.8K 🔥` `NEW`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `563.7K 🔥` `NEW`
1. [河道有大量蛇出没已喷驱蛇粉](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E9%81%93%E6%9C%89%E5%A4%A7%E9%87%8F%E8%9B%87%E5%87%BA%E6%B2%A1%E5%B7%B2%E5%96%B7%E9%A9%B1%E8%9B%87%E7%B2%89%23) `518.2K 🔥` `NEW`
1. [高考前发热怎么办](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%89%8D%E5%8F%91%E7%83%AD%E6%80%8E%E4%B9%88%E5%8A%9E%23) `479.5K 🔥` `NEW`
1. [你的下一台电脑可能不是电脑了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E4%B8%8B%E4%B8%80%E5%8F%B0%E7%94%B5%E8%84%91%E5%8F%AF%E8%83%BD%E4%B8%8D%E6%98%AF%E7%94%B5%E8%84%91%E4%BA%86%23) `478.7K 🔥` `NEW`
1. [丁程鑫将缺席录制](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%B0%86%E7%BC%BA%E5%B8%AD%E5%BD%95%E5%88%B6%23) `406.8K 🔥` `NEW`
1. [CBA总决赛](https://s.weibo.com/weibo?q=%23CBA%E6%80%BB%E5%86%B3%E8%B5%9B%23) `388.6K 🔥` `NEW`
1. [奚梦瑶婚礼落泪神图 (Picture of Xi Mengyao crying at wedding)](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%E8%90%BD%E6%B3%AA%E7%A5%9E%E5%9B%BE%23) `386.6K 🔥` `NEW`
1. [李登科曝王源事业停滞原因](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E6%9B%9D%E7%8E%8B%E6%BA%90%E4%BA%8B%E4%B8%9A%E5%81%9C%E6%BB%9E%E5%8E%9F%E5%9B%A0%23) `383.4K 🔥` `NEW`
1. [AI演员已经有眼神戏了](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%E5%B7%B2%E7%BB%8F%E6%9C%89%E7%9C%BC%E7%A5%9E%E6%88%8F%E4%BA%86%23) `380.7K 🔥` `NEW`
1. [13岁女儿跪求妈妈别离婚](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%84%BF%E8%B7%AA%E6%B1%82%E5%A6%88%E5%A6%88%E5%88%AB%E7%A6%BB%E5%A9%9A%23) `373.3K 🔥` `NEW`
1. [黄仁勋预测下一家万亿美元市值公司](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E9%A2%84%E6%B5%8B%E4%B8%8B%E4%B8%80%E5%AE%B6%E4%B8%87%E4%BA%BF%E7%BE%8E%E5%85%83%E5%B8%82%E5%80%BC%E5%85%AC%E5%8F%B8%23) `370.2K 🔥` `NEW`
1. [靖国神社游就馆篡改侵华历史](https://s.weibo.com/weibo?q=%23%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E6%B8%B8%E5%B0%B1%E9%A6%86%E7%AF%A1%E6%94%B9%E4%BE%B5%E5%8D%8E%E5%8E%86%E5%8F%B2%23) `368.9K 🔥` `NEW`
1. [男子中6022万4个月后才敢晒奖](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%AD6022%E4%B8%874%E4%B8%AA%E6%9C%88%E5%90%8E%E6%89%8D%E6%95%A2%E6%99%92%E5%A5%96%23) `364.8K 🔥` `NEW`
1. [陈学冬是奚梦瑶专属娘家人](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%AD%A6%E5%86%AC%E6%98%AF%E5%A5%9A%E6%A2%A6%E7%91%B6%E4%B8%93%E5%B1%9E%E5%A8%98%E5%AE%B6%E4%BA%BA%23) `362.9K 🔥` `NEW`
1. [迪丽热巴回应没进组](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9B%9E%E5%BA%94%E6%B2%A1%E8%BF%9B%E7%BB%84%23) `361.4K 🔥` `NEW`
1. [郑恺苗苗三个孩子近照](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E8%8B%97%E8%8B%97%E4%B8%89%E4%B8%AA%E5%AD%A9%E5%AD%90%E8%BF%91%E7%85%A7%23) `358.8K 🔥` `NEW`
1. [怪不得国外牛肉便宜 (No wonder beef is so cheap abroad)](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%9B%BD%E5%A4%96%E7%89%9B%E8%82%89%E4%BE%BF%E5%AE%9C%23) `334.9K 🔥` `NEW`
1. [自驾游客偶遇被困旱厕藏马熊](https://s.weibo.com/weibo?q=%23%E8%87%AA%E9%A9%BE%E6%B8%B8%E5%AE%A2%E5%81%B6%E9%81%87%E8%A2%AB%E5%9B%B0%E6%97%B1%E5%8E%95%E8%97%8F%E9%A9%AC%E7%86%8A%23) `334.7K 🔥` `NEW`
1. [荷兰警察将孕妇重摔在地致其早产](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E8%AD%A6%E5%AF%9F%E5%B0%86%E5%AD%95%E5%A6%87%E9%87%8D%E6%91%94%E5%9C%A8%E5%9C%B0%E8%87%B4%E5%85%B6%E6%97%A9%E4%BA%A7%23) `323.7K 🔥` `NEW`
1. [歌手帮唱嘉宾](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%B8%AE%E5%94%B1%E5%98%89%E5%AE%BE%23) `318.4K 🔥` `NEW`
1. [何猷君回复王嘉尔](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%9B%9E%E5%A4%8D%E7%8E%8B%E5%98%89%E5%B0%94%23) `259.5K 🔥` `NEW`
1. [灵魂摆渡一集才20分钟](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%E4%B8%80%E9%9B%86%E6%89%8D20%E5%88%86%E9%92%9F%23) `244.1K 🔥` `NEW`
1. [敖瑞鹏宣传灵魂摆渡十年](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E5%AE%A3%E4%BC%A0%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%E5%8D%81%E5%B9%B4%23) `242.1K 🔥` `NEW`
1. [男子在健身房单边卸杠铃片蓄意伤人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%81%A5%E8%BA%AB%E6%88%BF%E5%8D%95%E8%BE%B9%E5%8D%B8%E6%9D%A0%E9%93%83%E7%89%87%E8%93%84%E6%84%8F%E4%BC%A4%E4%BA%BA%23) `237.2K 🔥` `NEW`
1. [杨幂直播](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%9B%B4%E6%92%AD%23) `235.4K 🔥` `NEW`
1. [魏宗万去世前一直看三国演义水浒传](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AE%97%E4%B8%87%E5%8E%BB%E4%B8%96%E5%89%8D%E4%B8%80%E7%9B%B4%E7%9C%8B%E4%B8%89%E5%9B%BD%E6%BC%94%E4%B9%89%E6%B0%B4%E6%B5%92%E4%BC%A0%23) `232.6K 🔥` `NEW`
1. [宣发出错为何还能让消费者抢着买 (Why can consumers rush to buy even if the publicity is wrong?)](https://s.weibo.com/weibo?q=%23%E5%AE%A3%E5%8F%91%E5%87%BA%E9%94%99%E4%B8%BA%E4%BD%95%E8%BF%98%E8%83%BD%E8%AE%A9%E6%B6%88%E8%B4%B9%E8%80%85%E6%8A%A2%E7%9D%80%E4%B9%B0%23) `232.6K 🔥` `NEW`
1. [翘楚 短剧感](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%20%E7%9F%AD%E5%89%A7%E6%84%9F%23) `226.6K 🔥` `NEW`
1. [30岁女子爬楼瘦腿膝盖老成60岁](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%A5%B3%E5%AD%90%E7%88%AC%E6%A5%BC%E7%98%A6%E8%85%BF%E8%86%9D%E7%9B%96%E8%80%81%E6%88%9060%E5%B2%81%23) `198.5K 🔥` `NEW`
1. [忆秦娥知世故了](https://s.weibo.com/weibo?q=%23%E5%BF%86%E7%A7%A6%E5%A8%A5%E7%9F%A5%E4%B8%96%E6%95%85%E4%BA%86%23) `192.5K 🔥` `NEW`
1. [恋综女嘉宾撞脸张元英](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%BB%BC%E5%A5%B3%E5%98%89%E5%AE%BE%E6%92%9E%E8%84%B8%E5%BC%A0%E5%85%83%E8%8B%B1%23) `187.1K 🔥` `NEW`
1. [三星堆考古发现11件红玉髓珠](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%A0%86%E8%80%83%E5%8F%A4%E5%8F%91%E7%8E%B011%E4%BB%B6%E7%BA%A2%E7%8E%89%E9%AB%93%E7%8F%A0%23) `171.4K 🔥` `NEW`
1. [豆包和豆包吵架](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%92%8C%E8%B1%86%E5%8C%85%E5%90%B5%E6%9E%B6%23) `170.7K 🔥` `NEW`
1. [大量印度人排队报名学日语](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%87%8F%E5%8D%B0%E5%BA%A6%E4%BA%BA%E6%8E%92%E9%98%9F%E6%8A%A5%E5%90%8D%E5%AD%A6%E6%97%A5%E8%AF%AD%23) `168.4K 🔥` `NEW`
1. [窦骁 演技赋魅](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%AA%81%20%E6%BC%94%E6%8A%80%E8%B5%8B%E9%AD%85%23) `164.4K 🔥` `NEW`
1. [妻子与前男友车上睡觉男子怒砸车窗](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E4%B8%8E%E5%89%8D%E7%94%B7%E5%8F%8B%E8%BD%A6%E4%B8%8A%E7%9D%A1%E8%A7%89%E7%94%B7%E5%AD%90%E6%80%92%E7%A0%B8%E8%BD%A6%E7%AA%97%23) `360.7K 🔥` `+30%`
1. [无论谁赢球都来找蒙牛 (Whoever wins will come to Mengniu)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E8%AE%BA%E8%B0%81%E8%B5%A2%E7%90%83%E9%83%BD%E6%9D%A5%E6%89%BE%E8%92%99%E7%89%9B%23) `791.5K 🔥`
1. [5岁儿子29万存款被妈妈取到剩40 (The 5-year-old son’s deposit of 290,000 was withdrawn by his mother and he was left with 40)](https://s.weibo.com/weibo?q=%235%E5%B2%81%E5%84%BF%E5%AD%9029%E4%B8%87%E5%AD%98%E6%AC%BE%E8%A2%AB%E5%A6%88%E5%A6%88%E5%8F%96%E5%88%B0%E5%89%A940%23) `381.0K 🔥`
1. [不被爱的时候你是鹿晗也得被打码 (When you are not loved, you will be labeled even if you are Lu Han)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A2%AB%E7%88%B1%E7%9A%84%E6%97%B6%E5%80%99%E4%BD%A0%E6%98%AF%E9%B9%BF%E6%99%97%E4%B9%9F%E5%BE%97%E8%A2%AB%E6%89%93%E7%A0%81%23) `375.8K 🔥`
1. [长月烬明没人给陈都灵打call](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%88%E7%83%AC%E6%98%8E%E6%B2%A1%E4%BA%BA%E7%BB%99%E9%99%88%E9%83%BD%E7%81%B5%E6%89%93call%23) `371.6K 🔥`
1. [方圆脸减肥一下子没动力了](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E8%84%B8%E5%87%8F%E8%82%A5%E4%B8%80%E4%B8%8B%E5%AD%90%E6%B2%A1%E5%8A%A8%E5%8A%9B%E4%BA%86%23) `369.0K 🔥`
1. [中国足球小将夺冠](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%B3%E7%90%83%E5%B0%8F%E5%B0%86%E5%A4%BA%E5%86%A0%23) `411.0K 🔥` `-65%`
1. [翘楚](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%23) `334.6K 🔥` `-25%`
1. [DeepSeek降价 (DeepSeek price cuts)](https://s.weibo.com/weibo?q=%23DeepSeek%E9%99%8D%E4%BB%B7%23) `249.7K 🔥` `-82%`
1. [歌手 苏新皓](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20%E8%8B%8F%E6%96%B0%E7%9A%93%23) `232.5K 🔥` `-46%`
1. [不再发朋友圈算长大吗](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%86%8D%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `195.9K 🔥` `-23%`
1. [小米隐藏王牌即将落地](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%9A%90%E8%97%8F%E7%8E%8B%E7%89%8C%E5%8D%B3%E5%B0%86%E8%90%BD%E5%9C%B0%23) `165.6K 🔥` `-85%`

Updated at 2026-06-02 23:13:37

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
