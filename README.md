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

1. [他们在天山脚下脚踏冰河巡边 (They patrolled the glacier at the foot of the Tianshan Mountains)](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%BB%AC%E5%9C%A8%E5%A4%A9%E5%B1%B1%E8%84%9A%E4%B8%8B%E8%84%9A%E8%B8%8F%E5%86%B0%E6%B2%B3%E5%B7%A1%E8%BE%B9%23) `639.2K 🔥` `NEW`
1. [美国若武力介入台湾代价巨大](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%8B%A5%E6%AD%A6%E5%8A%9B%E4%BB%8B%E5%85%A5%E5%8F%B0%E6%B9%BE%E4%BB%A3%E4%BB%B7%E5%B7%A8%E5%A4%A7%23) `397.4K 🔥` `NEW`
1. [100多元订房酒店嫌价低不让入住](https://s.weibo.com/weibo?q=%23100%E5%A4%9A%E5%85%83%E8%AE%A2%E6%88%BF%E9%85%92%E5%BA%97%E5%AB%8C%E4%BB%B7%E4%BD%8E%E4%B8%8D%E8%AE%A9%E5%85%A5%E4%BD%8F%23) `171.5K 🔥` `NEW`
1. [Deepseek神回复](https://s.weibo.com/weibo?q=%23Deepseek%E7%A5%9E%E5%9B%9E%E5%A4%8D%23) `149.2K 🔥` `NEW`
1. [属相不是从立春开始算](https://s.weibo.com/weibo?q=%23%E5%B1%9E%E7%9B%B8%E4%B8%8D%E6%98%AF%E4%BB%8E%E7%AB%8B%E6%98%A5%E5%BC%80%E5%A7%8B%E7%AE%97%23) `146.7K 🔥` `NEW`
1. [王一博表演现场版震感好爽](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%A1%A8%E6%BC%94%E7%8E%B0%E5%9C%BA%E7%89%88%E9%9C%87%E6%84%9F%E5%A5%BD%E7%88%BD%23) `118.7K 🔥` `NEW`
1. [王菲为什么选中你我经历的一刻](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%89%E4%B8%AD%E4%BD%A0%E6%88%91%E7%BB%8F%E5%8E%86%E7%9A%84%E4%B8%80%E5%88%BB%23) `115.6K 🔥` `NEW`
1. [山东晚高峰视频在推特火了](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E6%99%9A%E9%AB%98%E5%B3%B0%E8%A7%86%E9%A2%91%E5%9C%A8%E6%8E%A8%E7%89%B9%E7%81%AB%E4%BA%86%23) `111.4K 🔥` `NEW`
1. [沈腾回应马丽单飞](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%9B%9E%E5%BA%94%E9%A9%AC%E4%B8%BD%E5%8D%95%E9%A3%9E%23) `110.6K 🔥` `NEW`
1. [科学解释不了只有爱能解释](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%AD%A6%E8%A7%A3%E9%87%8A%E4%B8%8D%E4%BA%86%E5%8F%AA%E6%9C%89%E7%88%B1%E8%83%BD%E8%A7%A3%E9%87%8A%23) `104.9K 🔥` `NEW`
1. [北京大学陈江教授讲AI (Professor Chen Jiang from Peking University lectures on AI)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E9%99%88%E6%B1%9F%E6%95%99%E6%8E%88%E8%AE%B2AI%23) `98.5K 🔥` `NEW`
1. [刘少昂赛后发文](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E8%B5%9B%E5%90%8E%E5%8F%91%E6%96%87%23) `97.1K 🔥` `NEW`
1. [爸爸的小手办也太可爱了叭](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E7%9A%84%E5%B0%8F%E6%89%8B%E5%8A%9E%E4%B9%9F%E5%A4%AA%E5%8F%AF%E7%88%B1%E4%BA%86%E5%8F%AD%23) `87.8K 🔥` `NEW`
1. [引导型恋人笑得好崩溃](https://s.weibo.com/weibo?q=%23%E5%BC%95%E5%AF%BC%E5%9E%8B%E6%81%8B%E4%BA%BA%E7%AC%91%E5%BE%97%E5%A5%BD%E5%B4%A9%E6%BA%83%23) `77.2K 🔥` `NEW`
1. [王冰冰镜头下的米兰](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%86%B0%E5%86%B0%E9%95%9C%E5%A4%B4%E4%B8%8B%E7%9A%84%E7%B1%B3%E5%85%B0%23) `76.8K 🔥` `NEW`
1. [杨幂朱一龙吻戏](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9C%B1%E4%B8%80%E9%BE%99%E5%90%BB%E6%88%8F%23) `76.4K 🔥` `NEW`
1. [瘦肚子特别快的方法](https://s.weibo.com/weibo?q=%23%E7%98%A6%E8%82%9A%E5%AD%90%E7%89%B9%E5%88%AB%E5%BF%AB%E7%9A%84%E6%96%B9%E6%B3%95%23) `76.3K 🔥` `NEW`
1. [王鹤棣孟子义 将门独后](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AD%9F%E5%AD%90%E4%B9%89%20%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%23) `452.2K 🔥` `+349%`
1. [湖南新化6名消防员因公牺牲](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%96%B0%E5%8C%966%E5%90%8D%E6%B6%88%E9%98%B2%E5%91%98%E5%9B%A0%E5%85%AC%E7%89%BA%E7%89%B2%23) `397.1K 🔥` `+111%`
1. [人的心气是能重新养回来的](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%9A%84%E5%BF%83%E6%B0%94%E6%98%AF%E8%83%BD%E9%87%8D%E6%96%B0%E5%85%BB%E5%9B%9E%E6%9D%A5%E7%9A%84%23) `392.2K 🔥` `+68%`
1. [杨幂开车都能出神图 (Yang Mi can be enchanted when driving)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%BC%80%E8%BD%A6%E9%83%BD%E8%83%BD%E5%87%BA%E7%A5%9E%E5%9B%BE%23) `332.3K 🔥` `+40%`
1. [王橹杰抽抽乐 (Wang Lujie has fun)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%8A%BD%E6%8A%BD%E4%B9%90%23) `161.4K 🔥` `+23%`
1. [将门独后官宣节奏 (The official announcement of the rhythm of being the only queen in the general family)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%AE%98%E5%AE%A3%E8%8A%82%E5%A5%8F%23) `1.1M 🔥`
1. [苏翊鸣因北京冬奥会放弃当演员](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%9B%A0%E5%8C%97%E4%BA%AC%E5%86%AC%E5%A5%A5%E4%BC%9A%E6%94%BE%E5%BC%83%E5%BD%93%E6%BC%94%E5%91%98%23) `810.5K 🔥`
1. [蒙牛贺中国队夺金](https://s.weibo.com/weibo?q=%23%E8%92%99%E7%89%9B%E8%B4%BA%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%A4%BA%E9%87%91%23) `560.7K 🔥`
1. [高层看烟花有多吓人 (How scary is it to watch fireworks from high-rise buildings?)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B1%82%E7%9C%8B%E7%83%9F%E8%8A%B1%E6%9C%89%E5%A4%9A%E5%90%93%E4%BA%BA%23) `171.6K 🔥`
1. [酷滕 雷淞然](https://s.weibo.com/weibo?q=%23%E9%85%B7%E6%BB%95%20%E9%9B%B7%E6%B7%9E%E7%84%B6%23) `171.5K 🔥`
1. [网剧双轨](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%89%A7%E5%8F%8C%E8%BD%A8%23) `171.4K 🔥`
1. [伊朗](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%23) `171.3K 🔥`
1. [白鹿韩国](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%9F%A9%E5%9B%BD%23) `171.3K 🔥`
1. [自取其辱九件套](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%8F%96%E5%85%B6%E8%BE%B1%E4%B9%9D%E4%BB%B6%E5%A5%97%23) `171.2K 🔥`
1. [烟花爆竹该禁吗](https://s.weibo.com/weibo?q=%23%E7%83%9F%E8%8A%B1%E7%88%86%E7%AB%B9%E8%AF%A5%E7%A6%81%E5%90%97%23) `171.1K 🔥`
1. [美一高校兄弟会诡异入会仪式曝光](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%B8%80%E9%AB%98%E6%A0%A1%E5%85%84%E5%BC%9F%E4%BC%9A%E8%AF%A1%E5%BC%82%E5%85%A5%E4%BC%9A%E4%BB%AA%E5%BC%8F%E6%9B%9D%E5%85%89%23) `144.9K 🔥`
1. [爸爸除夕独自吃饺子女儿看监控哭了 (Dad eats dumplings alone on New Year’s Eve and daughter cries while watching CCTV)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E9%99%A4%E5%A4%95%E7%8B%AC%E8%87%AA%E5%90%83%E9%A5%BA%E5%AD%90%E5%A5%B3%E5%84%BF%E7%9C%8B%E7%9B%91%E6%8E%A7%E5%93%AD%E4%BA%86%23) `141.6K 🔥`
1. [觉得自己闯祸的可以看看美国四人雪车](https://s.weibo.com/weibo?q=%23%E8%A7%89%E5%BE%97%E8%87%AA%E5%B7%B1%E9%97%AF%E7%A5%B8%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%9C%8B%E7%9C%8B%E7%BE%8E%E5%9B%BD%E5%9B%9B%E4%BA%BA%E9%9B%AA%E8%BD%A6%23) `139.4K 🔥`
1. [女儿扶人遭索赔22万妈妈发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%89%B6%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%9422%E4%B8%87%E5%A6%88%E5%A6%88%E5%8F%91%E5%A3%B0%23) `123.1K 🔥`
1. [王嘉尔纠正阿玛尼官方](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E7%BA%A0%E6%AD%A3%E9%98%BF%E7%8E%9B%E5%B0%BC%E5%AE%98%E6%96%B9%23) `96.2K 🔥`
1. [我们的少年时代2 (Our Boyhood 2)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `91.4K 🔥`
1. [飞驰人生 (Flying through life)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F%23) `80.0K 🔥`
1. [首档中老年恋综成了4对](https://s.weibo.com/weibo?q=%23%E9%A6%96%E6%A1%A3%E4%B8%AD%E8%80%81%E5%B9%B4%E6%81%8B%E7%BB%BC%E6%88%90%E4%BA%864%E5%AF%B9%23) `77.0K 🔥`
1. [镖人票房逆跌](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E9%80%86%E8%B7%8C%23) `346.9K 🔥` `-36%`
1. [英国前王子安德鲁被捕 (Former British Prince Andrew arrested)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%89%8D%E7%8E%8B%E5%AD%90%E5%AE%89%E5%BE%B7%E9%B2%81%E8%A2%AB%E6%8D%95%23) `171.8K 🔥` `-30%`
1. [刘德华解冻失败 (Andy Lau failed to unfreeze)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BE%B7%E5%8D%8E%E8%A7%A3%E5%86%BB%E5%A4%B1%E8%B4%A5%23) `171.7K 🔥` `-22%`
1. [5岁网红瑶一瑶小肉包晒俯卧撑挑战](https://s.weibo.com/weibo?q=%235%E5%B2%81%E7%BD%91%E7%BA%A2%E7%91%B6%E4%B8%80%E7%91%B6%E5%B0%8F%E8%82%89%E5%8C%85%E6%99%92%E4%BF%AF%E5%8D%A7%E6%92%91%E6%8C%91%E6%88%98%23) `155.8K 🔥` `-29%`
1. [白鹿代露娃二搭疯批对疯批 (Shirokadai Luwa's second match is crazy about crazy criticism.)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%BB%A3%E9%9C%B2%E5%A8%83%E4%BA%8C%E6%90%AD%E7%96%AF%E6%89%B9%E5%AF%B9%E7%96%AF%E6%89%B9%23) `144.4K 🔥` `-37%`
1. [生命树](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `107.3K 🔥` `-40%`
1. [奔跑四热销](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%9B%9B%E7%83%AD%E9%94%80%23) `83.8K 🔥` `-21%`
1. [TF奔跑四](https://s.weibo.com/weibo?q=%23TF%E5%A5%94%E8%B7%91%E5%9B%9B%23) `83.8K 🔥` `-53%`
1. [孙颖莎被球迷的新年祝福逗笑 (Sun Yingsha was amused by fans’ New Year greetings)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%A2%AB%E7%90%83%E8%BF%B7%E7%9A%84%E6%96%B0%E5%B9%B4%E7%A5%9D%E7%A6%8F%E9%80%97%E7%AC%91%23) `80.6K 🔥` `-25%`
1. [樊振东终于回家过年了 (Fan Zhendong finally went home to celebrate the New Year)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%BB%88%E4%BA%8E%E5%9B%9E%E5%AE%B6%E8%BF%87%E5%B9%B4%E4%BA%86%23) `80.0K 🔥` `-65%`
1. [胡先煦红包](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E7%BA%A2%E5%8C%85%23) `78.0K 🔥` `-34%`

Updated at 2026-02-19 22:42:13

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
