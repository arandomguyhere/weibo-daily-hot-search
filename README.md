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

1. [豆包红包 (bean bag red envelope)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%BA%A2%E5%8C%85%23) `2.2M 🔥` `NEW`
1. [我国首次海上实施运载火箭搜索回收](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E9%A6%96%E6%AC%A1%E6%B5%B7%E4%B8%8A%E5%AE%9E%E6%96%BD%E8%BF%90%E8%BD%BD%E7%81%AB%E7%AE%AD%E6%90%9C%E7%B4%A2%E5%9B%9E%E6%94%B6%23) `749.2K 🔥` `NEW`
1. [湖北精神病医院有关问题调查结果](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E7%B2%BE%E7%A5%9E%E7%97%85%E5%8C%BB%E9%99%A2%E6%9C%89%E5%85%B3%E9%97%AE%E9%A2%98%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `391.3K 🔥` `NEW`
1. [主人回应边牧凌晨下单100多个灯笼](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E5%9B%9E%E5%BA%94%E8%BE%B9%E7%89%A7%E5%87%8C%E6%99%A8%E4%B8%8B%E5%8D%95100%E5%A4%9A%E4%B8%AA%E7%81%AF%E7%AC%BC%23) `273.0K 🔥` `NEW`
1. [给数码加点AI](https://s.weibo.com/weibo?q=%23%E7%BB%99%E6%95%B0%E7%A0%81%E5%8A%A0%E7%82%B9AI%23) `256.5K 🔥` `NEW`
1. [美团预计净亏损233亿至243亿](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E9%A2%84%E8%AE%A1%E5%87%80%E4%BA%8F%E6%8D%9F233%E4%BA%BF%E8%87%B3243%E4%BA%BF%23) `164.7K 🔥` `NEW`
1. [周秀娜回应](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%A7%80%E5%A8%9C%E5%9B%9E%E5%BA%94%23) `164.5K 🔥` `NEW`
1. [拼多多食品安全保障持续加码](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E9%A3%9F%E5%93%81%E5%AE%89%E5%85%A8%E4%BF%9D%E9%9A%9C%E6%8C%81%E7%BB%AD%E5%8A%A0%E7%A0%81%23) `164.5K 🔥` `NEW`
1. [瑶一瑶小肉包近30天掉粉6万](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%B0%8F%E8%82%89%E5%8C%85%E8%BF%9130%E5%A4%A9%E6%8E%89%E7%B2%896%E4%B8%87%23) `164.2K 🔥` `NEW`
1. [此刻想去泰国的心达到了顶峰](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E5%88%BB%E6%83%B3%E5%8E%BB%E6%B3%B0%E5%9B%BD%E7%9A%84%E5%BF%83%E8%BE%BE%E5%88%B0%E4%BA%86%E9%A1%B6%E5%B3%B0%23) `149.2K 🔥` `NEW`
1. [王玉雯敖瑞鹏游戏直播 (Wang Yuwen Ao Ruipeng game live broadcast)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%95%96%E7%91%9E%E9%B9%8F%E6%B8%B8%E6%88%8F%E7%9B%B4%E6%92%AD%23) `139.7K 🔥` `NEW`
1. [丞磊第20集6分47秒](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E7%AC%AC20%E9%9B%866%E5%88%8647%E7%A7%92%23) `138.0K 🔥` `NEW`
1. [薛之谦湖泊唱片版](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%B9%96%E6%B3%8A%E5%94%B1%E7%89%87%E7%89%88%23) `136.7K 🔥` `NEW`
1. [DeepSeek也不想假装关心](https://s.weibo.com/weibo?q=%23DeepSeek%E4%B9%9F%E4%B8%8D%E6%83%B3%E5%81%87%E8%A3%85%E5%85%B3%E5%BF%83%23) `121.2K 🔥` `NEW`
1. [AG对战JDG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98JDG%23) `120.4K 🔥` `NEW`
1. [原神洛恩](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%E6%B4%9B%E6%81%A9%23) `97.3K 🔥` `NEW`
1. [暗访黑煤矿发现全是自己人](https://s.weibo.com/weibo?q=%23%E6%9A%97%E8%AE%BF%E9%BB%91%E7%85%A4%E7%9F%BF%E5%8F%91%E7%8E%B0%E5%85%A8%E6%98%AF%E8%87%AA%E5%B7%B1%E4%BA%BA%23) `94.4K 🔥` `NEW`
1. [24岁女孩骑车不戴头盔被撞脑出血](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%AA%91%E8%BD%A6%E4%B8%8D%E6%88%B4%E5%A4%B4%E7%9B%94%E8%A2%AB%E6%92%9E%E8%84%91%E5%87%BA%E8%A1%80%23) `87.6K 🔥` `NEW`
1. [生命树黑吃黑](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E9%BB%91%E5%90%83%E9%BB%91%23) `83.1K 🔥` `NEW`
1. [苏新皓 棉花娃娃最严厉的父亲](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%20%E6%A3%89%E8%8A%B1%E5%A8%83%E5%A8%83%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E4%BA%B2%23) `82.0K 🔥` `NEW`
1. [男子通宵打牌身亡家属索赔牌友28万 (Man dies while playing cards all night, family claims $280,000 from poker friends)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%80%9A%E5%AE%B5%E6%89%93%E7%89%8C%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%94%E7%89%8C%E5%8F%8B28%E4%B8%87%23) `80.2K 🔥` `NEW`
1. [陆虎老人味溢出屏幕](https://s.weibo.com/weibo?q=%23%E9%99%86%E8%99%8E%E8%80%81%E4%BA%BA%E5%91%B3%E6%BA%A2%E5%87%BA%E5%B1%8F%E5%B9%95%23) `76.0K 🔥` `NEW`
1. [21岁孙子97岁奶奶都觉得对方很好带](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%AD%99%E5%AD%9097%E5%B2%81%E5%A5%B6%E5%A5%B6%E9%83%BD%E8%A7%89%E5%BE%97%E5%AF%B9%E6%96%B9%E5%BE%88%E5%A5%BD%E5%B8%A6%23) `326.2K 🔥` `+135%`
1. [惠英红的眉眼 棠夫人的灵魂 (Hui Yinghong’s eyebrows and Mrs. Tang’s soul)](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E7%9A%84%E7%9C%89%E7%9C%BC%20%E6%A3%A0%E5%A4%AB%E4%BA%BA%E7%9A%84%E7%81%B5%E9%AD%82%23) `230.8K 🔥` `+62%`
1. [我家那小子首发阵容官宣](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%E9%A6%96%E5%8F%91%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `992.6K 🔥`
1. [蜜雪冰城墨西哥首店开业价格曝光](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%E5%A2%A8%E8%A5%BF%E5%93%A5%E9%A6%96%E5%BA%97%E5%BC%80%E4%B8%9A%E4%BB%B7%E6%A0%BC%E6%9B%9D%E5%85%89%23) `169.0K 🔥`
1. [谁给迪丽热巴买的手机壳](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B9%B0%E7%9A%84%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `165.0K 🔥`
1. [瑶一瑶藏剪刀被安检发现 (Yao Yiyao’s hidden scissors were discovered by security)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E8%97%8F%E5%89%AA%E5%88%80%E8%A2%AB%E5%AE%89%E6%A3%80%E5%8F%91%E7%8E%B0%23) `164.9K 🔥`
1. [主动投案的王鑫是易烊千玺等人老师](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%E7%9A%84%E7%8E%8B%E9%91%AB%E6%98%AF%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%AD%89%E4%BA%BA%E8%80%81%E5%B8%88%23) `164.3K 🔥`
1. [Angelababy兔耳朵撕拉片](https://s.weibo.com/weibo?q=%23Angelababy%E5%85%94%E8%80%B3%E6%9C%B5%E6%92%95%E6%8B%89%E7%89%87%23) `163.9K 🔥`
1. [李家诚告周秀娜诽谤及骚扰](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%B6%E8%AF%9A%E5%91%8A%E5%91%A8%E7%A7%80%E5%A8%9C%E8%AF%BD%E8%B0%A4%E5%8F%8A%E9%AA%9A%E6%89%B0%23) `163.9K 🔥`
1. [橹穆双人采访预告](https://s.weibo.com/weibo?q=%23%E6%A9%B9%E7%A9%86%E5%8F%8C%E4%BA%BA%E9%87%87%E8%AE%BF%E9%A2%84%E5%91%8A%23) `141.3K 🔥`
1. [突然明白了葬礼的意义 (Suddenly I understood the meaning of a funeral)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E4%BA%86%E8%91%AC%E7%A4%BC%E7%9A%84%E6%84%8F%E4%B9%89%23) `138.3K 🔥`
1. [美国影协警告Seedance2.0](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%BD%B1%E5%8D%8F%E8%AD%A6%E5%91%8ASeedance2.0%23) `137.8K 🔥`
1. [原著粉最满意的阵容出现了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E8%91%97%E7%B2%89%E6%9C%80%E6%BB%A1%E6%84%8F%E7%9A%84%E9%98%B5%E5%AE%B9%E5%87%BA%E7%8E%B0%E4%BA%86%23) `117.7K 🔥`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `111.6K 🔥`
1. [冰壶](https://s.weibo.com/weibo?q=%23%E5%86%B0%E5%A3%B6%23) `109.6K 🔥`
1. [王俊凯周杰伦到底还有多少合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%88%B0%E5%BA%95%E8%BF%98%E6%9C%89%E5%A4%9A%E5%B0%91%E5%90%88%E7%85%A7%23) `108.8K 🔥`
1. [王鑫电影票房7.7亿 (Wang Xin’s movie box office is 770 million)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%91%AB%E7%94%B5%E5%BD%B1%E7%A5%A8%E6%88%BF7.7%E4%BA%BF%23) `75.8K 🔥`
1. [时代少年团庆祝出道2222天 (Times Youth League celebrates 2,222 days since debut)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%BA%86%E7%A5%9D%E5%87%BA%E9%81%932222%E5%A4%A9%23) `75.2K 🔥`
1. [王者荣耀农家乐村晚 (King of Glory Farmhouse Village Night)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%86%9C%E5%AE%B6%E4%B9%90%E6%9D%91%E6%99%9A%23) `203.9K 🔥` `-21%`
1. [官方回应湛江发现儒艮尸体](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B9%9B%E6%B1%9F%E5%8F%91%E7%8E%B0%E5%84%92%E8%89%AE%E5%B0%B8%E4%BD%93%23) `165.0K 🔥` `-31%`
1. [战马贺春热血沸腾 (The war horse He Chun's blood is boiling)](https://s.weibo.com/weibo?q=%23%E6%88%98%E9%A9%AC%E8%B4%BA%E6%98%A5%E7%83%AD%E8%A1%80%E6%B2%B8%E8%85%BE%23) `164.0K 🔥` `-75%`
1. [中国队何时能摘首金 (When will the Chinese team win its first gold medal?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E4%BD%95%E6%97%B6%E8%83%BD%E6%91%98%E9%A6%96%E9%87%91%23) `142.8K 🔥` `-82%`
1. [苍蝇搓手为什么会意外截头](https://s.weibo.com/weibo?q=%23%E8%8B%8D%E8%9D%87%E6%90%93%E6%89%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E6%84%8F%E5%A4%96%E6%88%AA%E5%A4%B4%23) `112.1K 🔥` `-22%`
1. [陈哲远回家过年](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E5%9B%9E%E5%AE%B6%E8%BF%87%E5%B9%B4%23) `108.8K 🔥` `-24%`
1. [中戏发生了什么 (What happened in the drama)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `90.2K 🔥` `-38%`
1. [爱泼斯坦假尸体事件披露 (Epstein’s fake body revealed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%81%87%E5%B0%B8%E4%BD%93%E4%BA%8B%E4%BB%B6%E6%8A%AB%E9%9C%B2%23) `87.2K 🔥` `-40%`
1. [车厘子或痛失年货水果C位 (Cherries may lose the C position of New Year’s fruit)](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%8E%98%E5%AD%90%E6%88%96%E7%97%9B%E5%A4%B1%E5%B9%B4%E8%B4%A7%E6%B0%B4%E6%9E%9CC%E4%BD%8D%23) `84.3K 🔥` `-27%`
1. [TF家族新年音乐会纪录片 (TF Family New Year Concert Documentary)](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E6%96%B0%E5%B9%B4%E9%9F%B3%E4%B9%90%E4%BC%9A%E7%BA%AA%E5%BD%95%E7%89%87%23) `78.2K 🔥` `-25%`
1. [王艺瑾你对你的脸做了什么 (Wang Yijin, what did you do to your face?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E7%91%BE%E4%BD%A0%E5%AF%B9%E4%BD%A0%E7%9A%84%E8%84%B8%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88%23) `75.8K 🔥` `-47%`

Updated at 2026-02-13 21:45:39

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
