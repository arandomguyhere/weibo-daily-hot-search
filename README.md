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

1. [世界杯决赛中场休息17分钟 (World Cup final halftime break 17 minutes)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E4%B8%AD%E5%9C%BA%E4%BC%91%E6%81%AF17%E5%88%86%E9%92%9F%23) `1.3M 🔥` `NEW`
1. [水利部解读防汛关键期热点问题](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E5%88%A9%E9%83%A8%E8%A7%A3%E8%AF%BB%E9%98%B2%E6%B1%9B%E5%85%B3%E9%94%AE%E6%9C%9F%E7%83%AD%E7%82%B9%E9%97%AE%E9%A2%98%23) `686.8K 🔥` `NEW`
1. [低精力人群为何总是看起来很疲惫](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E4%BA%BA%E7%BE%A4%E4%B8%BA%E4%BD%95%E6%80%BB%E6%98%AF%E7%9C%8B%E8%B5%B7%E6%9D%A5%E5%BE%88%E7%96%B2%E6%83%AB%23) `682.9K 🔥` `NEW`
1. [清华录取通知书极简但有排面](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%BD%95%E5%8F%96%E9%80%9A%E7%9F%A5%E4%B9%A6%E6%9E%81%E7%AE%80%E4%BD%86%E6%9C%89%E6%8E%92%E9%9D%A2%23) `667.2K 🔥` `NEW`
1. [豆包清理C盘还是太权威了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%B8%85%E7%90%86C%E7%9B%98%E8%BF%98%E6%98%AF%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23) `646.5K 🔥` `NEW`
1. [这个暑假别错过电影八仙](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E6%9A%91%E5%81%87%E5%88%AB%E9%94%99%E8%BF%87%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%23) `624.0K 🔥` `NEW`
1. [不小心把朋友拍成了穿山甲](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%B0%8F%E5%BF%83%E6%8A%8A%E6%9C%8B%E5%8F%8B%E6%8B%8D%E6%88%90%E4%BA%86%E7%A9%BF%E5%B1%B1%E7%94%B2%23) `596.6K 🔥` `NEW`
1. [95后夫妻手搓500集AI漫剧爆火](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%A4%AB%E5%A6%BB%E6%89%8B%E6%90%93500%E9%9B%86AI%E6%BC%AB%E5%89%A7%E7%88%86%E7%81%AB%23) `588.9K 🔥` `NEW`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `415.7K 🔥` `NEW`
1. [百花杀浴桶吻是三个人的吻](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E6%B5%B4%E6%A1%B6%E5%90%BB%E6%98%AF%E4%B8%89%E4%B8%AA%E4%BA%BA%E7%9A%84%E5%90%BB%23) `407.5K 🔥` `NEW`
1. [孙怡瘦到连皮靴都直往下掉 (Sun Yi is so thin that even her leather boots are falling down)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%98%A6%E5%88%B0%E8%BF%9E%E7%9A%AE%E9%9D%B4%E9%83%BD%E7%9B%B4%E5%BE%80%E4%B8%8B%E6%8E%89%23) `405.5K 🔥` `NEW`
1. [苏醒机场自曝位置](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E6%9C%BA%E5%9C%BA%E8%87%AA%E6%9B%9D%E4%BD%8D%E7%BD%AE%23) `403.3K 🔥` `NEW`
1. [王楚钦孙颖莎胜牛冠凯段冬妍](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E8%83%9C%E7%89%9B%E5%86%A0%E5%87%AF%E6%AE%B5%E5%86%AC%E5%A6%8D%23) `402.7K 🔥` `NEW`
1. [王楚钦拧拉得分孙颖莎哇哦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%8B%A7%E6%8B%89%E5%BE%97%E5%88%86%E5%AD%99%E9%A2%96%E8%8E%8E%E5%93%87%E5%93%A6%23) `401.7K 🔥` `NEW`
1. [玉骨遥 雪寒薇](https://s.weibo.com/weibo?q=%23%E7%8E%89%E9%AA%A8%E9%81%A5%20%E9%9B%AA%E5%AF%92%E8%96%87%23) `400.5K 🔥` `NEW`
1. [FIFA主席说可以中美合办世界杯](https://s.weibo.com/weibo?q=%23FIFA%E4%B8%BB%E5%B8%AD%E8%AF%B4%E5%8F%AF%E4%BB%A5%E4%B8%AD%E7%BE%8E%E5%90%88%E5%8A%9E%E4%B8%96%E7%95%8C%E6%9D%AF%23) `332.4K 🔥` `NEW`
1. [A股再现天价离婚案](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%86%8D%E7%8E%B0%E5%A4%A9%E4%BB%B7%E7%A6%BB%E5%A9%9A%E6%A1%88%23) `304.4K 🔥` `NEW`
1. [张凌赫ins报备](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%ABins%E6%8A%A5%E5%A4%87%23) `304.0K 🔥` `NEW`
1. [野狗骨头导演 吻十分钟可以吗](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%AF%BC%E6%BC%94%20%E5%90%BB%E5%8D%81%E5%88%86%E9%92%9F%E5%8F%AF%E4%BB%A5%E5%90%97%23) `303.6K 🔥` `NEW`
1. [詹姆斯下家](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%8B%E5%AE%B6%23) `274.0K 🔥` `NEW`
1. [功夫女足票房超11亿 (Kung Fu Girls' soccer box office exceeds 1.1 billion)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E8%B6%8511%E4%BA%BF%23) `274.0K 🔥` `NEW`
1. [成毅摸了一下苹果水果摊就被搬空了](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%91%B8%E4%BA%86%E4%B8%80%E4%B8%8B%E8%8B%B9%E6%9E%9C%E6%B0%B4%E6%9E%9C%E6%91%8A%E5%B0%B1%E8%A2%AB%E6%90%AC%E7%A9%BA%E4%BA%86%23) `273.9K 🔥` `NEW`
1. [6种高发癌症的早期信号](https://s.weibo.com/weibo?q=%236%E7%A7%8D%E9%AB%98%E5%8F%91%E7%99%8C%E7%97%87%E7%9A%84%E6%97%A9%E6%9C%9F%E4%BF%A1%E5%8F%B7%23) `273.9K 🔥` `NEW`
1. [中国不能总当东郭先生](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%8D%E8%83%BD%E6%80%BB%E5%BD%93%E4%B8%9C%E9%83%AD%E5%85%88%E7%94%9F%23) `246.6K 🔥` `NEW`
1. [美芯片股跌入熊市](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%8A%AF%E7%89%87%E8%82%A1%E8%B7%8C%E5%85%A5%E7%86%8A%E5%B8%82%23) `225.7K 🔥` `NEW`
1. [王楚钦牛冠凯笑笑握手下班](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%89%9B%E5%86%A0%E5%87%AF%E7%AC%91%E7%AC%91%E6%8F%A1%E6%89%8B%E4%B8%8B%E7%8F%AD%23) `225.3K 🔥` `NEW`
1. [青岛用啤酒激活世界的夏天](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E7%94%A8%E5%95%A4%E9%85%92%E6%BF%80%E6%B4%BB%E4%B8%96%E7%95%8C%E7%9A%84%E5%A4%8F%E5%A4%A9%23) `222.0K 🔥` `NEW`
1. [马龙许昕 险胜16岁小将](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%20%E9%99%A9%E8%83%9C16%E5%B2%81%E5%B0%8F%E5%B0%86%23) `194.7K 🔥` `NEW`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `189.7K 🔥` `NEW`
1. [这一秒过火她活了我疯了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%A5%B9%E6%B4%BB%E4%BA%86%E6%88%91%E7%96%AF%E4%BA%86%23) `187.0K 🔥` `NEW`
1. [养多年的九尾狐被老婆一把火烧掉 (The nine-tailed fox that I had raised for many years was burned to death by my wife)](https://s.weibo.com/weibo?q=%23%E5%85%BB%E5%A4%9A%E5%B9%B4%E7%9A%84%E4%B9%9D%E5%B0%BE%E7%8B%90%E8%A2%AB%E8%80%81%E5%A9%86%E4%B8%80%E6%8A%8A%E7%81%AB%E7%83%A7%E6%8E%89%23) `185.7K 🔥` `NEW`
1. [时代少年团是运动会赞助商吧](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%98%AF%E8%BF%90%E5%8A%A8%E4%BC%9A%E8%B5%9E%E5%8A%A9%E5%95%86%E5%90%A7%23) `184.8K 🔥` `NEW`
1. [胡彦斌被歌手灯光师气笑了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E8%A2%AB%E6%AD%8C%E6%89%8B%E7%81%AF%E5%85%89%E5%B8%88%E6%B0%94%E7%AC%91%E4%BA%86%23) `179.9K 🔥` `NEW`
1. [米勒怒斥BLG不配赢](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8B%92%E6%80%92%E6%96%A5BLG%E4%B8%8D%E9%85%8D%E8%B5%A2%23) `176.6K 🔥` `NEW`
1. [蔡依林逛成都相亲角](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E9%80%9B%E6%88%90%E9%83%BD%E7%9B%B8%E4%BA%B2%E8%A7%92%23) `170.4K 🔥` `NEW`
1. [西班牙主帅称愿进每届决赛然后输掉](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E4%B8%BB%E5%B8%85%E7%A7%B0%E6%84%BF%E8%BF%9B%E6%AF%8F%E5%B1%8A%E5%86%B3%E8%B5%9B%E7%84%B6%E5%90%8E%E8%BE%93%E6%8E%89%23) `167.5K 🔥` `NEW`
1. [霍尔木兹海峡2艘油轮爆炸起火](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A12%E8%89%98%E6%B2%B9%E8%BD%AE%E7%88%86%E7%82%B8%E8%B5%B7%E7%81%AB%23) `167.5K 🔥` `NEW`
1. [雅迪绝区零隐藏款上线](https://s.weibo.com/weibo?q=%23%E9%9B%85%E8%BF%AA%E7%BB%9D%E5%8C%BA%E9%9B%B6%E9%9A%90%E8%97%8F%E6%AC%BE%E4%B8%8A%E7%BA%BF%23) `167.4K 🔥` `NEW`
1. [迪丽热巴影视综都素颜过](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BD%B1%E8%A7%86%E7%BB%BC%E9%83%BD%E7%B4%A0%E9%A2%9C%E8%BF%87%23) `167.4K 🔥` `NEW`
1. [国企已婚男回应致人5年2次流产](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%9B%9E%E5%BA%94%E8%87%B4%E4%BA%BA5%E5%B9%B42%E6%AC%A1%E6%B5%81%E4%BA%A7%23) `407.3K 🔥` `+178%`
1. [KimiK3测评 (KimiK3 review)](https://s.weibo.com/weibo?q=%23KimiK3%E6%B5%8B%E8%AF%84%23) `310.2K 🔥` `+124%`
1. [朱志鑫运动会](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `269.0K 🔥` `+199%`
1. [这个鸡蛋不用去赛里木湖了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E9%B8%A1%E8%9B%8B%E4%B8%8D%E7%94%A8%E5%8E%BB%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E4%BA%86%23) `211.9K 🔥` `+44%`
1. [穆祉丞运动会](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `194.6K 🔥` `+254%`
1. [白鹿简介删掉了欢娱](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%AE%80%E4%BB%8B%E5%88%A0%E6%8E%89%E4%BA%86%E6%AC%A2%E5%A8%B1%23) `354.9K 🔥`
1. [邹市明冉莹颖已还清3家银行欠款](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%86%89%E8%8E%B9%E9%A2%96%E5%B7%B2%E8%BF%98%E6%B8%853%E5%AE%B6%E9%93%B6%E8%A1%8C%E6%AC%A0%E6%AC%BE%23) `882.5K 🔥` `-25%`
1. [功夫女足让韩国人破防了 (The Kung Fu Women’s Football Team allowed the Koreans to break their defense)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E8%AE%A9%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%A0%B4%E9%98%B2%E4%BA%86%23) `254.3K 🔥` `-74%`
1. [亚马尔决赛前与女友游纽约](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%86%B3%E8%B5%9B%E5%89%8D%E4%B8%8E%E5%A5%B3%E5%8F%8B%E6%B8%B8%E7%BA%BD%E7%BA%A6%23) `224.2K 🔥` `-55%`
1. [好多明星给王俊凯送花篮](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E6%98%8E%E6%98%9F%E7%BB%99%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%80%81%E8%8A%B1%E7%AF%AE%23) `221.1K 🔥` `-46%`
1. [家长谈彩礼成了小家启动金 (Parents talk about the betrothal gift becoming the start-up fund for a small family)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E8%B0%88%E5%BD%A9%E7%A4%BC%E6%88%90%E4%BA%86%E5%B0%8F%E5%AE%B6%E5%90%AF%E5%8A%A8%E9%87%91%23) `212.1K 🔥` `-62%`
1. [王俊凯史上最严演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%B8%A5%E6%BC%94%E5%94%B1%E4%BC%9A%23) `173.6K 🔥` `-81%`

Updated at 2026-07-18 12:07:42

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
