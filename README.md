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

1. [披荆斩棘成团名单](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%88%90%E5%9B%A2%E5%90%8D%E5%8D%95%23) `2.7M 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `2.6M 🔥` `NEW`
1. [透过三季报看中国经济向新向优](https://s.weibo.com/weibo?q=%23%E9%80%8F%E8%BF%87%E4%B8%89%E5%AD%A3%E6%8A%A5%E7%9C%8B%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%23) `1.4M 🔥` `NEW`
1. [我觉得我都要爱上厉娜了](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%A7%89%E5%BE%97%E6%88%91%E9%83%BD%E8%A6%81%E7%88%B1%E4%B8%8A%E5%8E%89%E5%A8%9C%E4%BA%86%23) `911.3K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `785.0K 🔥` `NEW`
1. [明道感谢上海交警](https://s.weibo.com/weibo?q=%23%E6%98%8E%E9%81%93%E6%84%9F%E8%B0%A2%E4%B8%8A%E6%B5%B7%E4%BA%A4%E8%AD%A6%23) `746.2K 🔥` `NEW`
1. [颜安拥抱每一个版本的自己](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%AE%89%E6%8B%A5%E6%8A%B1%E6%AF%8F%E4%B8%80%E4%B8%AA%E7%89%88%E6%9C%AC%E7%9A%84%E8%87%AA%E5%B7%B1%23) `495.0K 🔥` `NEW`
1. [梁靖崑打哭西蒙高茨](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E6%89%93%E5%93%AD%E8%A5%BF%E8%92%99%E9%AB%98%E8%8C%A8%23) `492.5K 🔥` `NEW`
1. [英特尔](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E7%89%B9%E5%B0%94%23) `492.4K 🔥` `NEW`
1. [披荆斩棘总决赛](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%80%BB%E5%86%B3%E8%B5%9B%23) `487.3K 🔥` `NEW`
1. [律师回应小城良方告白衣山猫](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E5%9B%9E%E5%BA%94%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%91%8A%E7%99%BD%E8%A1%A3%E5%B1%B1%E7%8C%AB%23) `481.3K 🔥` `NEW`
1. [宋慧乔是宋仲基的逆鳞](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E6%98%AF%E5%AE%8B%E4%BB%B2%E5%9F%BA%E7%9A%84%E9%80%86%E9%B3%9E%23) `476.8K 🔥` `NEW`
1. [景甜一顿早餐吃了蒋欣两天的饭](https://s.weibo.com/weibo?q=%23%E6%99%AF%E7%94%9C%E4%B8%80%E9%A1%BF%E6%97%A9%E9%A4%90%E5%90%83%E4%BA%86%E8%92%8B%E6%AC%A3%E4%B8%A4%E5%A4%A9%E7%9A%84%E9%A5%AD%23) `464.3K 🔥` `NEW`
1. [金价跳水400元有人抄底有人观望](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%B3%E6%B0%B4400%E5%85%83%E6%9C%89%E4%BA%BA%E6%8A%84%E5%BA%95%E6%9C%89%E4%BA%BA%E8%A7%82%E6%9C%9B%23) `460.4K 🔥` `NEW`
1. [孙千吃的鸡架到底有多香](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%90%83%E7%9A%84%E9%B8%A1%E6%9E%B6%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E9%A6%99%23) `459.4K 🔥` `NEW`
1. [披哥靠减重拿下健康大结果](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E9%9D%A0%E5%87%8F%E9%87%8D%E6%8B%BF%E4%B8%8B%E5%81%A5%E5%BA%B7%E5%A4%A7%E7%BB%93%E6%9E%9C%23) `417.2K 🔥` `NEW`
1. [张睿没成团](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%B2%A1%E6%88%90%E5%9B%A2%23) `416.7K 🔥` `NEW`
1. [赵丽颖金鸡创投大会主评审](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%87%91%E9%B8%A1%E5%88%9B%E6%8A%95%E5%A4%A7%E4%BC%9A%E4%B8%BB%E8%AF%84%E5%AE%A1%23) `412.2K 🔥` `NEW`
1. [王濛 我喜欢你老公](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E6%88%91%E5%96%9C%E6%AC%A2%E4%BD%A0%E8%80%81%E5%85%AC%23) `406.4K 🔥` `NEW`
1. [欣旺达 宁德时代](https://s.weibo.com/weibo?q=%23%E6%AC%A3%E6%97%BA%E8%BE%BE%20%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%23) `366.5K 🔥` `NEW`
1. [文吉儿 王子璇](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%20%E7%8E%8B%E5%AD%90%E7%92%87%23) `365.5K 🔥` `NEW`
1. [大体老师的奉献经不起摆拍戏谑](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BD%93%E8%80%81%E5%B8%88%E7%9A%84%E5%A5%89%E7%8C%AE%E7%BB%8F%E4%B8%8D%E8%B5%B7%E6%91%86%E6%8B%8D%E6%88%8F%E8%B0%91%23) `358.7K 🔥` `NEW`
1. [迪丽热巴用上iPhoneDuo了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%94%A8%E4%B8%8AiPhoneDuo%E4%BA%86%23) `357.0K 🔥` `NEW`
1. [蔡磊妻子落泪称不甘心](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E5%A6%BB%E5%AD%90%E8%90%BD%E6%B3%AA%E7%A7%B0%E4%B8%8D%E7%94%98%E5%BF%83%23) `325.7K 🔥` `NEW`
1. [证监会](https://s.weibo.com/weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%23) `279.4K 🔥` `NEW`
1. [娄艺潇刘萌萌再现网球名场面](https://s.weibo.com/weibo?q=%23%E5%A8%84%E8%89%BA%E6%BD%87%E5%88%98%E8%90%8C%E8%90%8C%E5%86%8D%E7%8E%B0%E7%BD%91%E7%90%83%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `248.2K 🔥` `NEW`
1. [曝文吉儿高中霸凌同学](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%96%87%E5%90%89%E5%84%BF%E9%AB%98%E4%B8%AD%E9%9C%B8%E5%87%8C%E5%90%8C%E5%AD%A6%23) `246.9K 🔥` `NEW`
1. [男子星巴克不消费占座被劝离后报警](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%98%9F%E5%B7%B4%E5%85%8B%E4%B8%8D%E6%B6%88%E8%B4%B9%E5%8D%A0%E5%BA%A7%E8%A2%AB%E5%8A%9D%E7%A6%BB%E5%90%8E%E6%8A%A5%E8%AD%A6%23) `239.0K 🔥` `NEW`
1. [青稚三连暴走淘汰白小纯](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E4%B8%89%E8%BF%9E%E6%9A%B4%E8%B5%B0%E6%B7%98%E6%B1%B0%E7%99%BD%E5%B0%8F%E7%BA%AF%23) `235.9K 🔥` `NEW`
1. [崩坏星穹铁道](https://s.weibo.com/weibo?q=%23%E5%B4%A9%E5%9D%8F%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%23) `226.5K 🔥` `NEW`
1. [张家齐推荐陈梦上浪姐](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E6%8E%A8%E8%8D%90%E9%99%88%E6%A2%A6%E4%B8%8A%E6%B5%AA%E5%A7%90%23) `224.4K 🔥` `NEW`
1. [赵丽颖你闷声干大事](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%BD%A0%E9%97%B7%E5%A3%B0%E5%B9%B2%E5%A4%A7%E4%BA%8B%23) `224.3K 🔥` `NEW`
1. [王劲松长文回应严浩翔新剧争议](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%B2%E6%9D%BE%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E5%89%A7%E4%BA%89%E8%AE%AE%23) `224.2K 🔥` `NEW`
1. [孙颖莎回应3比2申裕斌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%943%E6%AF%942%E7%94%B3%E8%A3%95%E6%96%8C%23) `214.4K 🔥` `NEW`
1. [小小徐婚礼现场食物堆积如山](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B0%8F%E5%BE%90%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%E9%A3%9F%E7%89%A9%E5%A0%86%E7%A7%AF%E5%A6%82%E5%B1%B1%23) `213.0K 🔥` `NEW`
1. [小城良方告了白衣山猫](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%91%8A%E4%BA%86%E7%99%BD%E8%A1%A3%E5%B1%B1%E7%8C%AB%23) `212.8K 🔥` `NEW`
1. [芒果台你想爆出怎样的人生](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%8F%B0%E4%BD%A0%E6%83%B3%E7%88%86%E5%87%BA%E6%80%8E%E6%A0%B7%E7%9A%84%E4%BA%BA%E7%94%9F%23) `206.2K 🔥` `NEW`
1. [梁靖崑3比2逆转西蒙高茨](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%913%E6%AF%942%E9%80%86%E8%BD%AC%E8%A5%BF%E8%92%99%E9%AB%98%E8%8C%A8%23) `200.2K 🔥` `NEW`
1. [再就业男团把大家想听的都抬上来了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E5%B0%B1%E4%B8%9A%E7%94%B7%E5%9B%A2%E6%8A%8A%E5%A4%A7%E5%AE%B6%E6%83%B3%E5%90%AC%E7%9A%84%E9%83%BD%E6%8A%AC%E4%B8%8A%E6%9D%A5%E4%BA%86%23) `181.3K 🔥` `NEW`
1. [白宇帆晒一家三口合照](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%87%E5%B8%86%E6%99%92%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%90%88%E7%85%A7%23) `174.5K 🔥` `NEW`
1. [以色列女演员直播翻车当场离席](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%A5%B3%E6%BC%94%E5%91%98%E7%9B%B4%E6%92%AD%E7%BF%BB%E8%BD%A6%E5%BD%93%E5%9C%BA%E7%A6%BB%E5%B8%AD%23) `165.3K 🔥` `NEW`
1. [撞脸王祖贤女生去景区上班了](https://s.weibo.com/weibo?q=%23%E6%92%9E%E8%84%B8%E7%8E%8B%E7%A5%96%E8%B4%A4%E5%A5%B3%E7%94%9F%E5%8E%BB%E6%99%AF%E5%8C%BA%E4%B8%8A%E7%8F%AD%E4%BA%86%23) `165.0K 🔥` `NEW`
1. [院人齐聚披哥总决赛](https://s.weibo.com/weibo?q=%23%E9%99%A2%E4%BA%BA%E9%BD%90%E8%81%9A%E6%8A%AB%E5%93%A5%E6%80%BB%E5%86%B3%E8%B5%9B%23) `153.4K 🔥` `NEW`
1. [李健说荣耀Magic9槽点是货供不上](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%E8%AF%B4%E8%8D%A3%E8%80%80Magic9%E6%A7%BD%E7%82%B9%E6%98%AF%E8%B4%A7%E4%BE%9B%E4%B8%8D%E4%B8%8A%23) `152.8K 🔥` `NEW`
1. [王濛对唐艺昕说我喜欢张若昀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%AF%B9%E5%94%90%E8%89%BA%E6%98%95%E8%AF%B4%E6%88%91%E5%96%9C%E6%AC%A2%E5%BC%A0%E8%8B%A5%E6%98%80%23) `152.3K 🔥` `NEW`
1. [孙颖莎对申裕斌9连胜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%AF%B9%E7%94%B3%E8%A3%95%E6%96%8C9%E8%BF%9E%E8%83%9C%23) `145.2K 🔥` `NEW`
1. [原来郑州人说的中是中奖的中](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%83%91%E5%B7%9E%E4%BA%BA%E8%AF%B4%E7%9A%84%E4%B8%AD%E6%98%AF%E4%B8%AD%E5%A5%96%E7%9A%84%E4%B8%AD%23) `139.3K 🔥` `NEW`
1. [妈妈称儿子要五次超长蛋挞没买](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%A7%B0%E5%84%BF%E5%AD%90%E8%A6%81%E4%BA%94%E6%AC%A1%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E%E6%B2%A1%E4%B9%B0%23) `133.8K 🔥` `NEW`
1. [刘丁硕谈陈熠战胜王曼昱](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E8%B0%88%E9%99%88%E7%86%A0%E6%88%98%E8%83%9C%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `124.7K 🔥` `NEW`
1. [严浩翔回应导演王劲松](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%9B%9E%E5%BA%94%E5%AF%BC%E6%BC%94%E7%8E%8B%E5%8A%B2%E6%9D%BE%23) `124.3K 🔥` `NEW`
1. [姜乘澜结婚了](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E7%BB%93%E5%A9%9A%E4%BA%86%23) `470.5K 🔥` `+81%`
1. [京东健康11.11瓜分百万红包](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%81%A5%E5%BA%B711.11%E7%93%9C%E5%88%86%E7%99%BE%E4%B8%87%E7%BA%A2%E5%8C%85%23) `916.0K 🔥`

Updated at 2026-10-30 23:43:20

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
