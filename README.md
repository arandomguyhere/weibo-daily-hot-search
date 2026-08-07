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

1. [百花奖 (Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `533.5K 🔥` `NEW`
1. [戚薇AI短剧 雷霆视角](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87AI%E7%9F%AD%E5%89%A7%20%E9%9B%B7%E9%9C%86%E8%A7%86%E8%A7%92%23) `531.2K 🔥` `NEW`
1. [现在的小学生已经是庞然大物了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%B7%B2%E7%BB%8F%E6%98%AF%E5%BA%9E%E7%84%B6%E5%A4%A7%E7%89%A9%E4%BA%86%23) `528.7K 🔥` `NEW`
1. [好演员从不无缝进组](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%BC%94%E5%91%98%E4%BB%8E%E4%B8%8D%E6%97%A0%E7%BC%9D%E8%BF%9B%E7%BB%84%23) `526.9K 🔥` `NEW`
1. [宜宾地震](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%23) `526.1K 🔥` `NEW`
1. [人大教授花35万公款考证莫言家世](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E6%95%99%E6%8E%88%E8%8A%B135%E4%B8%87%E5%85%AC%E6%AC%BE%E8%80%83%E8%AF%81%E8%8E%AB%E8%A8%80%E5%AE%B6%E4%B8%96%23) `521.5K 🔥` `NEW`
1. [泰国校园枪击已致7死](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%A0%A1%E5%9B%AD%E6%9E%AA%E5%87%BB%E5%B7%B2%E8%87%B47%E6%AD%BB%23) `518.0K 🔥` `NEW`
1. [BLACKPINK全员确认出席十周年](https://s.weibo.com/weibo?q=%23BLACKPINK%E5%85%A8%E5%91%98%E7%A1%AE%E8%AE%A4%E5%87%BA%E5%B8%AD%E5%8D%81%E5%91%A8%E5%B9%B4%23) `516.5K 🔥` `NEW`
1. [官方通报笔试前13被淘汰后5进体检](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E7%AC%94%E8%AF%95%E5%89%8D13%E8%A2%AB%E6%B7%98%E6%B1%B0%E5%90%8E5%E8%BF%9B%E4%BD%93%E6%A3%80%23) `465.1K 🔥` `NEW`
1. [王俊凯叫自己Karry](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8F%AB%E8%87%AA%E5%B7%B1Karry%23) `444.7K 🔥` `NEW`
1. [老中医提醒立秋一定要管住嘴 (An old Chinese medicine practitioner reminds you to keep your mouth shut at the beginning of autumn)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%AD%E5%8C%BB%E6%8F%90%E9%86%92%E7%AB%8B%E7%A7%8B%E4%B8%80%E5%AE%9A%E8%A6%81%E7%AE%A1%E4%BD%8F%E5%98%B4%23) `382.2K 🔥` `NEW`
1. [饭后秒洗碗的人太狠了](https://s.weibo.com/weibo?q=%23%E9%A5%AD%E5%90%8E%E7%A7%92%E6%B4%97%E7%A2%97%E7%9A%84%E4%BA%BA%E5%A4%AA%E7%8B%A0%E4%BA%86%23) `276.4K 🔥` `NEW`
1. [欢迎来龙餐馆 徐峥](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%20%E5%BE%90%E5%B3%A5%23) `246.6K 🔥` `NEW`
1. [迪丽热巴像一只高贵的黑天鹅](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%83%8F%E4%B8%80%E5%8F%AA%E9%AB%98%E8%B4%B5%E7%9A%84%E9%BB%91%E5%A4%A9%E9%B9%85%23) `245.5K 🔥` `NEW`
1. [黄景瑜今年第二部央视剧](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E4%BB%8A%E5%B9%B4%E7%AC%AC%E4%BA%8C%E9%83%A8%E5%A4%AE%E8%A7%86%E5%89%A7%23) `245.3K 🔥` `NEW`
1. [小红书宣布严打毒动画](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%BA%A2%E4%B9%A6%E5%AE%A3%E5%B8%83%E4%B8%A5%E6%89%93%E6%AF%92%E5%8A%A8%E7%94%BB%23) `214.2K 🔥` `NEW`
1. [DeepSeek让英伟达蒸发4万亿](https://s.weibo.com/weibo?q=%23DeepSeek%E8%AE%A9%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%92%B8%E5%8F%914%E4%B8%87%E4%BA%BF%23) `213.8K 🔥` `NEW`
1. [接奈雪秋天第一杯财神奶](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E5%A5%88%E9%9B%AA%E7%A7%8B%E5%A4%A9%E7%AC%AC%E4%B8%80%E6%9D%AF%E8%B4%A2%E7%A5%9E%E5%A5%B6%23) `213.1K 🔥` `NEW`
1. [泸溪河金属牙冠当事人涉嫌犯罪](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%E9%87%91%E5%B1%9E%E7%89%99%E5%86%A0%E5%BD%93%E4%BA%8B%E4%BA%BA%E6%B6%89%E5%AB%8C%E7%8A%AF%E7%BD%AA%23) `213.0K 🔥` `NEW`
1. [你上班银行上班你午休银行午休](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B8%8A%E7%8F%AD%E9%93%B6%E8%A1%8C%E4%B8%8A%E7%8F%AD%E4%BD%A0%E5%8D%88%E4%BC%91%E9%93%B6%E8%A1%8C%E5%8D%88%E4%BC%91%23) `1.2M 🔥` `+42%`
1. [星巴克 秋天第一场商战 (Starbucks first business war in autumn)](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%20%E7%A7%8B%E5%A4%A9%E7%AC%AC%E4%B8%80%E5%9C%BA%E5%95%86%E6%88%98%23) `1.2M 🔥` `+32%`
1. [情绪冷漠症](https://s.weibo.com/weibo?q=%23%E6%83%85%E7%BB%AA%E5%86%B7%E6%BC%A0%E7%97%87%23) `1.1M 🔥` `+113%`
1. [稀物集品牌大使黄星邱鼎杰 (Xiwuji Brand Ambassador Huang Xing Qiu Dingjie)](https://s.weibo.com/weibo?q=%23%E7%A8%80%E7%89%A9%E9%9B%86%E5%93%81%E7%89%8C%E5%A4%A7%E4%BD%BF%E9%BB%84%E6%98%9F%E9%82%B1%E9%BC%8E%E6%9D%B0%23) `1.0M 🔥` `+53%`
1. [韩国被爆性贿赂世预赛裁判](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%A2%AB%E7%88%86%E6%80%A7%E8%B4%BF%E8%B5%82%E4%B8%96%E9%A2%84%E8%B5%9B%E8%A3%81%E5%88%A4%23) `709.4K 🔥` `+32%`
1. [泰国校园枪击事件凶手已死亡](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%A0%A1%E5%9B%AD%E6%9E%AA%E5%87%BB%E4%BA%8B%E4%BB%B6%E5%87%B6%E6%89%8B%E5%B7%B2%E6%AD%BB%E4%BA%A1%23) `412.3K 🔥` `+127%`
1. [咸宁桂花到底咸不咸](https://s.weibo.com/weibo?q=%23%E5%92%B8%E5%AE%81%E6%A1%82%E8%8A%B1%E5%88%B0%E5%BA%95%E5%92%B8%E4%B8%8D%E5%92%B8%23) `395.4K 🔥` `+121%`
1. [恋与制作人](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E5%88%B6%E4%BD%9C%E4%BA%BA%23) `359.8K 🔥` `+35%`
1. [秋天第1个节气](https://s.weibo.com/weibo?q=%23%E7%A7%8B%E5%A4%A9%E7%AC%AC1%E4%B8%AA%E8%8A%82%E6%B0%94%23) `1.2M 🔥`
1. [上美团外卖第一时间喝到秋奶](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E7%AC%AC%E4%B8%80%E6%97%B6%E9%97%B4%E5%96%9D%E5%88%B0%E7%A7%8B%E5%A5%B6%23) `1.2M 🔥`
1. [提离职被知道要裁员的领导硬留下](https://s.weibo.com/weibo?q=%23%E6%8F%90%E7%A6%BB%E8%81%8C%E8%A2%AB%E7%9F%A5%E9%81%93%E8%A6%81%E8%A3%81%E5%91%98%E7%9A%84%E9%A2%86%E5%AF%BC%E7%A1%AC%E7%95%99%E4%B8%8B%23) `1.2M 🔥`
1. [于适 平儿都长这么大了](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%20%E5%B9%B3%E5%84%BF%E9%83%BD%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `912.7K 🔥`
1. [空调效果可视化了 (The effect of air conditioning is visualized)](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E6%95%88%E6%9E%9C%E5%8F%AF%E8%A7%86%E5%8C%96%E4%BA%86%23) `533.5K 🔥`
1. [Mina同学发声 (Mina classmate speaks out)](https://s.weibo.com/weibo?q=%23Mina%E5%90%8C%E5%AD%A6%E5%8F%91%E5%A3%B0%23) `529.9K 🔥`
1. [面试面出了吃火锅的感觉](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E9%9D%A2%E5%87%BA%E4%BA%86%E5%90%83%E7%81%AB%E9%94%85%E7%9A%84%E6%84%9F%E8%A7%89%23) `522.6K 🔥`
1. [戚薇 授权AI](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%20%E6%8E%88%E6%9D%83AI%23) `517.4K 🔥`
1. [iPhone18Pro十二大升级 (Twelve major upgrades to iPhone 18 Pro)](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%8D%81%E4%BA%8C%E5%A4%A7%E5%8D%87%E7%BA%A7%23) `481.9K 🔥`
1. [王垲智向侯卓成致歉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%9E%B2%E6%99%BA%E5%90%91%E4%BE%AF%E5%8D%93%E6%88%90%E8%87%B4%E6%AD%89%23) `472.9K 🔥`
1. [贺峻霖被粉丝票价吓到了](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E8%A2%AB%E7%B2%89%E4%B8%9D%E7%A5%A8%E4%BB%B7%E5%90%93%E5%88%B0%E4%BA%86%23) `427.0K 🔥`
1. [结婚证对年轻人没有魔力](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E8%AF%81%E5%AF%B9%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%B2%A1%E6%9C%89%E9%AD%94%E5%8A%9B%23) `258.8K 🔥`
1. [泸溪河牙冠事件消费者已致歉 (Consumers have apologized for the Luxihe dental crown incident)](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%E7%89%99%E5%86%A0%E4%BA%8B%E4%BB%B6%E6%B6%88%E8%B4%B9%E8%80%85%E5%B7%B2%E8%87%B4%E6%AD%89%23) `1.7M 🔥` `-38%`
1. [1岁宝宝碰坏纸巾盒三亚酒店索赔924元](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%AE%9D%E5%AE%9D%E7%A2%B0%E5%9D%8F%E7%BA%B8%E5%B7%BE%E7%9B%92%E4%B8%89%E4%BA%9A%E9%85%92%E5%BA%97%E7%B4%A2%E8%B5%94924%E5%85%83%23) `524.7K 🔥` `-61%`
1. [张雅琪中餐厅早上读英语](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E4%B8%AD%E9%A4%90%E5%8E%85%E6%97%A9%E4%B8%8A%E8%AF%BB%E8%8B%B1%E8%AF%AD%23) `520.7K 🔥` `-41%`
1. [央视网评银行午休 (CCTV online comments on bank lunch break)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E8%AF%84%E9%93%B6%E8%A1%8C%E5%8D%88%E4%BC%91%23) `407.0K 🔥` `-24%`
1. [两儿子同患自毁容貌症妈妈说天塌了](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%84%BF%E5%AD%90%E5%90%8C%E6%82%A3%E8%87%AA%E6%AF%81%E5%AE%B9%E8%B2%8C%E7%97%87%E5%A6%88%E5%A6%88%E8%AF%B4%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `375.8K 🔥` `-30%`
1. [沈月香港游客照 (Shen Yue Hong Kong tourist photos)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E9%A6%99%E6%B8%AF%E6%B8%B8%E5%AE%A2%E7%85%A7%23) `374.0K 🔥` `-30%`
1. [建议大家要留点肉在身上 (It is recommended that you keep some meat on your body)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%A6%81%E7%95%99%E7%82%B9%E8%82%89%E5%9C%A8%E8%BA%AB%E4%B8%8A%23) `355.0K 🔥` `-30%`
1. [西村力大吧发长文回应 (Nishimuralidaba posted a long response)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E5%A4%A7%E5%90%A7%E5%8F%91%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%23) `258.0K 🔥` `-40%`
1. [泸溪河金属牙冠事件调查结果](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%E9%87%91%E5%B1%9E%E7%89%99%E5%86%A0%E4%BA%8B%E4%BB%B6%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `245.3K 🔥` `-54%`
1. [立秋 (beginning of autumn)](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E7%A7%8B%23) `233.0K 🔥` `-21%`
1. [丁禹兮孟子义一起聚餐](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%80%E8%B5%B7%E8%81%9A%E9%A4%90%23) `214.8K 🔥` `-31%`
1. [伊能静自曝不太想录妻旅](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%87%AA%E6%9B%9D%E4%B8%8D%E5%A4%AA%E6%83%B3%E5%BD%95%E5%A6%BB%E6%97%85%23) `214.5K 🔥` `-56%`
1. [今年是闭眼秋 (This year is autumn with closed eyes)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%98%AF%E9%97%AD%E7%9C%BC%E7%A7%8B%23) `212.6K 🔥` `-55%`

Updated at 2026-08-07 14:17:45

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
