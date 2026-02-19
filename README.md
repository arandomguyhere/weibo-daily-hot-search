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

1. [将门独后官宣节奏 (The official announcement of the rhythm of being the only queen in the general family)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%AE%98%E5%AE%A3%E8%8A%82%E5%A5%8F%23) `1.2M 🔥` `NEW`
1. [杨幂开车都能出神图](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%BC%80%E8%BD%A6%E9%83%BD%E8%83%BD%E5%87%BA%E7%A5%9E%E5%9B%BE%23) `237.1K 🔥` `NEW`
1. [人的心气是能重新养回来的](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%9A%84%E5%BF%83%E6%B0%94%E6%98%AF%E8%83%BD%E9%87%8D%E6%96%B0%E5%85%BB%E5%9B%9E%E6%9D%A5%E7%9A%84%23) `233.5K 🔥` `NEW`
1. [美两大人工智能巨头CEO拒绝牵手](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%B8%A4%E5%A4%A7%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%B7%A8%E5%A4%B4CEO%E6%8B%92%E7%BB%9D%E7%89%B5%E6%89%8B%23) `223.4K 🔥` `NEW`
1. [5岁网红瑶一瑶小肉包晒俯卧撑挑战](https://s.weibo.com/weibo?q=%235%E5%B2%81%E7%BD%91%E7%BA%A2%E7%91%B6%E4%B8%80%E7%91%B6%E5%B0%8F%E8%82%89%E5%8C%85%E6%99%92%E4%BF%AF%E5%8D%A7%E6%92%91%E6%8C%91%E6%88%98%23) `218.3K 🔥` `NEW`
1. [酷滕 雷淞然](https://s.weibo.com/weibo?q=%23%E9%85%B7%E6%BB%95%20%E9%9B%B7%E6%B7%9E%E7%84%B6%23) `212.8K 🔥` `NEW`
1. [烟花爆竹该禁吗](https://s.weibo.com/weibo?q=%23%E7%83%9F%E8%8A%B1%E7%88%86%E7%AB%B9%E8%AF%A5%E7%A6%81%E5%90%97%23) `206.0K 🔥` `NEW`
1. [湖南新化6名消防员因公牺牲](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%96%B0%E5%8C%966%E5%90%8D%E6%B6%88%E9%98%B2%E5%91%98%E5%9B%A0%E5%85%AC%E7%89%BA%E7%89%B2%23) `188.1K 🔥` `NEW`
1. [生命树](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `178.7K 🔥` `NEW`
1. [美一高校兄弟会诡异入会仪式曝光](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%B8%80%E9%AB%98%E6%A0%A1%E5%85%84%E5%BC%9F%E4%BC%9A%E8%AF%A1%E5%BC%82%E5%85%A5%E4%BC%9A%E4%BB%AA%E5%BC%8F%E6%9B%9D%E5%85%89%23) `132.1K 🔥` `NEW`
1. [王橹杰抽抽乐 (Wang Lujie has fun)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%8A%BD%E6%8A%BD%E4%B9%90%23) `130.8K 🔥` `NEW`
1. [觉得自己闯祸的可以看看美国四人雪车](https://s.weibo.com/weibo?q=%23%E8%A7%89%E5%BE%97%E8%87%AA%E5%B7%B1%E9%97%AF%E7%A5%B8%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%9C%8B%E7%9C%8B%E7%BE%8E%E5%9B%BD%E5%9B%9B%E4%BA%BA%E9%9B%AA%E8%BD%A6%23) `126.9K 🔥` `NEW`
1. [胡先煦红包](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E7%BA%A2%E5%8C%85%23) `118.5K 🔥` `NEW`
1. [孙颖莎被球迷的新年祝福逗笑](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%A2%AB%E7%90%83%E8%BF%B7%E7%9A%84%E6%96%B0%E5%B9%B4%E7%A5%9D%E7%A6%8F%E9%80%97%E7%AC%91%23) `107.6K 🔥` `NEW`
1. [高会](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BC%9A%23) `107.1K 🔥` `NEW`
1. [奔跑四热销](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%9B%9B%E7%83%AD%E9%94%80%23) `106.1K 🔥` `NEW`
1. [29岁男子谈第一次在ICU过年](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E7%94%B7%E5%AD%90%E8%B0%88%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%9C%A8ICU%E8%BF%87%E5%B9%B4%23) `101.8K 🔥` `NEW`
1. [王鹤棣孟子义 将门独后](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AD%9F%E5%AD%90%E4%B9%89%20%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%23) `100.7K 🔥` `NEW`
1. [刘少昂说祖国需要我就一直在](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E8%AF%B4%E7%A5%96%E5%9B%BD%E9%9C%80%E8%A6%81%E6%88%91%E5%B0%B1%E4%B8%80%E7%9B%B4%E5%9C%A8%23) `99.1K 🔥` `NEW`
1. [阿沁自曝和刘阳分开后谈过两段感情](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%B2%81%E8%87%AA%E6%9B%9D%E5%92%8C%E5%88%98%E9%98%B3%E5%88%86%E5%BC%80%E5%90%8E%E8%B0%88%E8%BF%87%E4%B8%A4%E6%AE%B5%E6%84%9F%E6%83%85%23) `76.0K 🔥` `NEW`
1. [安乾镐抽抽乐 (An Ganhao has fun)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E4%B9%BE%E9%95%90%E6%8A%BD%E6%8A%BD%E4%B9%90%23) `72.7K 🔥` `NEW`
1. [谷爱凌统治级表现](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%BB%9F%E6%B2%BB%E7%BA%A7%E8%A1%A8%E7%8E%B0%23) `70.6K 🔥` `NEW`
1. [预防急性胰腺炎管住嘴最重要](https://s.weibo.com/weibo?q=%23%E9%A2%84%E9%98%B2%E6%80%A5%E6%80%A7%E8%83%B0%E8%85%BA%E7%82%8E%E7%AE%A1%E4%BD%8F%E5%98%B4%E6%9C%80%E9%87%8D%E8%A6%81%23) `69.7K 🔥` `NEW`
1. [苏翊鸣因北京冬奥会放弃当演员](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%9B%A0%E5%8C%97%E4%BA%AC%E5%86%AC%E5%A5%A5%E4%BC%9A%E6%94%BE%E5%BC%83%E5%BD%93%E6%BC%94%E5%91%98%23) `818.7K 🔥` `+429%`
1. [镖人票房逆跌](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E9%80%86%E8%B7%8C%23) `538.9K 🔥` `+416%`
1. [白鹿代露娃二搭疯批对疯批 (Shirokadai Luwa's second match is crazy about crazy criticism.)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%BB%A3%E9%9C%B2%E5%A8%83%E4%BA%8C%E6%90%AD%E7%96%AF%E6%89%B9%E5%AF%B9%E7%96%AF%E6%89%B9%23) `228.9K 🔥` `+35%`
1. [樊振东终于回家过年了 (Fan Zhendong finally went home to celebrate the New Year)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%BB%88%E4%BA%8E%E5%9B%9E%E5%AE%B6%E8%BF%87%E5%B9%B4%E4%BA%86%23) `227.6K 🔥` `+199%`
1. [刘德华解冻失败 (Andy Lau failed to unfreeze)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BE%B7%E5%8D%8E%E8%A7%A3%E5%86%BB%E5%A4%B1%E8%B4%A5%23) `219.9K 🔥` `+32%`
1. [高层看烟花有多吓人 (How scary is it to watch fireworks from high-rise buildings?)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B1%82%E7%9C%8B%E7%83%9F%E8%8A%B1%E6%9C%89%E5%A4%9A%E5%90%93%E4%BA%BA%23) `213.7K 🔥` `+30%`
1. [自取其辱九件套](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%8F%96%E5%85%B6%E8%BE%B1%E4%B9%9D%E4%BB%B6%E5%A5%97%23) `207.3K 🔥` `+29%`
1. [伊朗](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%23) `200.7K 🔥` `+28%`
1. [白鹿韩国](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%9F%A9%E5%9B%BD%23) `198.3K 🔥` `+25%`
1. [原来苏翊鸣谷爱凌从小就认识](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%8B%8F%E7%BF%8A%E9%B8%A3%E8%B0%B7%E7%88%B1%E5%87%8C%E4%BB%8E%E5%B0%8F%E5%B0%B1%E8%AE%A4%E8%AF%86%23) `191.8K 🔥` `+96%`
1. [2名初中生扶摔倒女子遭索赔22万 (Two junior high school students helped a woman who fell down and were compensated for NT$220,000)](https://s.weibo.com/weibo?q=%232%E5%90%8D%E5%88%9D%E4%B8%AD%E7%94%9F%E6%89%B6%E6%91%94%E5%80%92%E5%A5%B3%E5%AD%90%E9%81%AD%E7%B4%A2%E8%B5%9422%E4%B8%87%23) `191.1K 🔥` `+25%`
1. [女儿扶人遭索赔22万妈妈发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%89%B6%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%9422%E4%B8%87%E5%A6%88%E5%A6%88%E5%8F%91%E5%A3%B0%23) `148.6K 🔥` `+75%`
1. [大衣哥女儿回怼围观粉丝 (Brother Dayi’s daughter responded to the fans who were watching)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%A1%A3%E5%93%A5%E5%A5%B3%E5%84%BF%E5%9B%9E%E6%80%BC%E5%9B%B4%E8%A7%82%E7%B2%89%E4%B8%9D%23) `143.9K 🔥` `+136%`
1. [春节不归人坚守汇成动人团圆 (People who have not returned during the Spring Festival stick to each other and form a touching reunion)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E4%B8%8D%E5%BD%92%E4%BA%BA%E5%9D%9A%E5%AE%88%E6%B1%87%E6%88%90%E5%8A%A8%E4%BA%BA%E5%9B%A2%E5%9C%86%23) `649.1K 🔥`
1. [春晚名场面BJ40增程赤兔帅炸全场 (In the famous scene of the Spring Festival Gala, the BJ40 Extended Range Red Rabbit blew up the audience.)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%90%8D%E5%9C%BA%E9%9D%A2BJ40%E5%A2%9E%E7%A8%8B%E8%B5%A4%E5%85%94%E5%B8%85%E7%82%B8%E5%85%A8%E5%9C%BA%23) `236.5K 🔥`
1. [TF奔跑四](https://s.weibo.com/weibo?q=%23TF%E5%A5%94%E8%B7%91%E5%9B%9B%23) `178.6K 🔥`
1. [爸爸除夕独自吃饺子女儿看监控哭了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E9%99%A4%E5%A4%95%E7%8B%AC%E8%87%AA%E5%90%83%E9%A5%BA%E5%AD%90%E5%A5%B3%E5%84%BF%E7%9C%8B%E7%9B%91%E6%8E%A7%E5%93%AD%E4%BA%86%23) `151.1K 🔥`
1. [网剧双轨](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%89%A7%E5%8F%8C%E8%BD%A8%23) `149.9K 🔥`
1. [黄宗泽6岁已经是潮男](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AE%97%E6%B3%BD6%E5%B2%81%E5%B7%B2%E7%BB%8F%E6%98%AF%E6%BD%AE%E7%94%B7%23) `136.7K 🔥`
1. [飞驰人生 (Flying through life)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F%23) `100.6K 🔥`
1. [金价迎来新一轮大涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%BF%8E%E6%9D%A5%E6%96%B0%E4%B8%80%E8%BD%AE%E5%A4%A7%E6%B6%A8%23) `76.3K 🔥`
1. [宣萱接102岁工人姐姐吃团年饭](https://s.weibo.com/weibo?q=%23%E5%AE%A3%E8%90%B1%E6%8E%A5102%E5%B2%81%E5%B7%A5%E4%BA%BA%E5%A7%90%E5%A7%90%E5%90%83%E5%9B%A2%E5%B9%B4%E9%A5%AD%23) `74.6K 🔥`
1. [英国前王子安德鲁被捕 (Former British Prince Andrew arrested)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%89%8D%E7%8E%8B%E5%AD%90%E5%AE%89%E5%BE%B7%E9%B2%81%E8%A2%AB%E6%8D%95%23) `245.2K 🔥` `-77%`
1. [苏翊鸣谷爱凌小时候训练日常 (Su Yi Minggu Ailing’s daily training when she was a child)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E8%B0%B7%E7%88%B1%E5%87%8C%E5%B0%8F%E6%97%B6%E5%80%99%E8%AE%AD%E7%BB%83%E6%97%A5%E5%B8%B8%23) `197.2K 🔥` `-26%`
1. [我们的少年时代2 (Our Boyhood 2)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `110.0K 🔥` `-25%`
1. [王嘉尔纠正阿玛尼官方](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E7%BA%A0%E6%AD%A3%E9%98%BF%E7%8E%9B%E5%B0%BC%E5%AE%98%E6%96%B9%23) `98.3K 🔥` `-31%`
1. [首档中老年恋综成了4对](https://s.weibo.com/weibo?q=%23%E9%A6%96%E6%A1%A3%E4%B8%AD%E8%80%81%E5%B9%B4%E6%81%8B%E7%BB%BC%E6%88%90%E4%BA%864%E5%AF%B9%23) `89.4K 🔥` `-62%`
1. [苏翊鸣 为了露表手忙脚乱](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%20%E4%B8%BA%E4%BA%86%E9%9C%B2%E8%A1%A8%E6%89%8B%E5%BF%99%E8%84%9A%E4%B9%B1%23) `75.3K 🔥` `-90%`

Updated at 2026-02-19 21:51:54

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
