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

1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `795.7K 🔥` `NEW`
1. [腾讯元宝向用户道歉](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D%E5%90%91%E7%94%A8%E6%88%B7%E9%81%93%E6%AD%89%23) `187.1K 🔥` `NEW`
1. [徐冬冬尹子维婚礼前一天发生争执](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%86%AC%E5%86%AC%E5%B0%B9%E5%AD%90%E7%BB%B4%E5%A9%9A%E7%A4%BC%E5%89%8D%E4%B8%80%E5%A4%A9%E5%8F%91%E7%94%9F%E4%BA%89%E6%89%A7%23) `168.7K 🔥` `NEW`
1. [奥迪E5开年抢先优惠20.59万](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AAE5%E5%BC%80%E5%B9%B4%E6%8A%A2%E5%85%88%E4%BC%98%E6%83%A020.59%E4%B8%87%23) `165.3K 🔥` `NEW`
1. [非沪籍外环内购房社保缩至1年](https://s.weibo.com/weibo?q=%23%E9%9D%9E%E6%B2%AA%E7%B1%8D%E5%A4%96%E7%8E%AF%E5%86%85%E8%B4%AD%E6%88%BF%E7%A4%BE%E4%BF%9D%E7%BC%A9%E8%87%B31%E5%B9%B4%23) `163.5K 🔥` `NEW`
1. [春节前男子被抢197万现金](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%89%8D%E7%94%B7%E5%AD%90%E8%A2%AB%E6%8A%A2197%E4%B8%87%E7%8E%B0%E9%87%91%23) `153.5K 🔥` `NEW`
1. [凌晨2点iPhone自动拨电话](https://s.weibo.com/weibo?q=%23%E5%87%8C%E6%99%A82%E7%82%B9iPhone%E8%87%AA%E5%8A%A8%E6%8B%A8%E7%94%B5%E8%AF%9D%23) `147.8K 🔥` `NEW`
1. [大年初六21岁女生因癌症离世](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E5%85%AD21%E5%B2%81%E5%A5%B3%E7%94%9F%E5%9B%A0%E7%99%8C%E7%97%87%E7%A6%BB%E4%B8%96%23) `143.9K 🔥` `NEW`
1. [AI助盲眼镜成出行神器](https://s.weibo.com/weibo?q=%23AI%E5%8A%A9%E7%9B%B2%E7%9C%BC%E9%95%9C%E6%88%90%E5%87%BA%E8%A1%8C%E7%A5%9E%E5%99%A8%23) `133.0K 🔥` `NEW`
1. [两个月水费1847元水务公司怀疑马桶](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E6%9C%88%E6%B0%B4%E8%B4%B91847%E5%85%83%E6%B0%B4%E5%8A%A1%E5%85%AC%E5%8F%B8%E6%80%80%E7%96%91%E9%A9%AC%E6%A1%B6%23) `133.0K 🔥` `NEW`
1. [王灿回应撞脸蔡根花 (Wang Can responded to Cai Genhua's face)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%81%BF%E5%9B%9E%E5%BA%94%E6%92%9E%E8%84%B8%E8%94%A1%E6%A0%B9%E8%8A%B1%23) `133.0K 🔥` `NEW`
1. [鲁豫回应每天只吃三粒米](https://s.weibo.com/weibo?q=%23%E9%B2%81%E8%B1%AB%E5%9B%9E%E5%BA%94%E6%AF%8F%E5%A4%A9%E5%8F%AA%E5%90%83%E4%B8%89%E7%B2%92%E7%B1%B3%23) `128.3K 🔥` `NEW`
1. [大侦探一屋子阿飘](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BE%A6%E6%8E%A2%E4%B8%80%E5%B1%8B%E5%AD%90%E9%98%BF%E9%A3%98%23) `104.6K 🔥` `NEW`
1. [日本人在动物园扮演大熊猫吸引游客](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%9C%A8%E5%8A%A8%E7%89%A9%E5%9B%AD%E6%89%AE%E6%BC%94%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%90%B8%E5%BC%95%E6%B8%B8%E5%AE%A2%23) `99.6K 🔥` `NEW`
1. [遇难女子失联前光着脚神情恐惧](https://s.weibo.com/weibo?q=%23%E9%81%87%E9%9A%BE%E5%A5%B3%E5%AD%90%E5%A4%B1%E8%81%94%E5%89%8D%E5%85%89%E7%9D%80%E8%84%9A%E7%A5%9E%E6%83%85%E6%81%90%E6%83%A7%23) `96.4K 🔥` `NEW`
1. [原神](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `96.3K 🔥` `NEW`
1. [卢昱晓何不同舟渡大婚出妆](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E4%BD%95%E4%B8%8D%E5%90%8C%E8%88%9F%E6%B8%A1%E5%A4%A7%E5%A9%9A%E5%87%BA%E5%A6%86%23) `95.2K 🔥` `NEW`
1. [范丞丞拿老鼠干戳沈腾鼻孔](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%8B%BF%E8%80%81%E9%BC%A0%E5%B9%B2%E6%88%B3%E6%B2%88%E8%85%BE%E9%BC%BB%E5%AD%94%23) `94.5K 🔥` `NEW`
1. [卡特绝杀湖人](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E7%89%B9%E7%BB%9D%E6%9D%80%E6%B9%96%E4%BA%BA%23) `89.0K 🔥` `NEW`
1. [小城市网购 AB货](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E5%B8%82%E7%BD%91%E8%B4%AD%20AB%E8%B4%A7%23) `83.7K 🔥` `NEW`
1. [短剧女主妆造梦回台偶韩偶巅峰 (The heroine of the short drama returns to the peak of Taiwanese and Korean idols by making up her dream)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E5%A5%B3%E4%B8%BB%E5%A6%86%E9%80%A0%E6%A2%A6%E5%9B%9E%E5%8F%B0%E5%81%B6%E9%9F%A9%E5%81%B6%E5%B7%85%E5%B3%B0%23) `81.4K 🔥` `NEW`
1. [特朗普称美国人求他不要再赢了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E5%9B%BD%E4%BA%BA%E6%B1%82%E4%BB%96%E4%B8%8D%E8%A6%81%E5%86%8D%E8%B5%A2%E4%BA%86%23) `80.4K 🔥` `NEW`
1. [23岁香港女警在警署身亡](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E9%A6%99%E6%B8%AF%E5%A5%B3%E8%AD%A6%E5%9C%A8%E8%AD%A6%E7%BD%B2%E8%BA%AB%E4%BA%A1%23) `359.7K 🔥` `+96%`
1. [iPhone 自动打电话](https://s.weibo.com/weibo?q=%23iPhone%20%E8%87%AA%E5%8A%A8%E6%89%93%E7%94%B5%E8%AF%9D%23) `243.0K 🔥` `+31%`
1. [刘浩存从小就长这样](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E4%BB%8E%E5%B0%8F%E5%B0%B1%E9%95%BF%E8%BF%99%E6%A0%B7%23) `150.5K 🔥` `+57%`
1. [Supreme棺材 (Supreme coffin)](https://s.weibo.com/weibo?q=%23Supreme%E6%A3%BA%E6%9D%90%23) `133.8K 🔥` `+36%`
1. [中秋请3天假堪比春节](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E8%AF%B73%E5%A4%A9%E5%81%87%E5%A0%AA%E6%AF%94%E6%98%A5%E8%8A%82%23) `1.1M 🔥`
1. [春节国内出游5.96亿人次](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%9B%BD%E5%86%85%E5%87%BA%E6%B8%B85.96%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `653.5K 🔥`
1. [三亚通报在职教师被开除 (Sanya reports that on-the-job teachers have been fired)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E9%80%9A%E6%8A%A5%E5%9C%A8%E8%81%8C%E6%95%99%E5%B8%88%E8%A2%AB%E5%BC%80%E9%99%A4%23) `225.7K 🔥`
1. [华策解散电影部门](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E7%AD%96%E8%A7%A3%E6%95%A3%E7%94%B5%E5%BD%B1%E9%83%A8%E9%97%A8%23) `187.1K 🔥`
1. [钱枫近况](https://s.weibo.com/weibo?q=%23%E9%92%B1%E6%9E%AB%E8%BF%91%E5%86%B5%23) `187.0K 🔥`
1. [谢娜恳请不要将镜头对准孩子](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%81%B3%E8%AF%B7%E4%B8%8D%E8%A6%81%E5%B0%86%E9%95%9C%E5%A4%B4%E5%AF%B9%E5%87%86%E5%AD%A9%E5%AD%90%23) `186.2K 🔥`
1. [曝短剧出现男演员揩油镜头 (Short drama reveals scenes of male actors taking advantage of others)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%9F%AD%E5%89%A7%E5%87%BA%E7%8E%B0%E7%94%B7%E6%BC%94%E5%91%98%E6%8F%A9%E6%B2%B9%E9%95%9C%E5%A4%B4%23) `175.6K 🔥`
1. [曝李佳琦过年给亲戚每人发了500红包](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E4%BD%B3%E7%90%A6%E8%BF%87%E5%B9%B4%E7%BB%99%E4%BA%B2%E6%88%9A%E6%AF%8F%E4%BA%BA%E5%8F%91%E4%BA%86500%E7%BA%A2%E5%8C%85%23) `173.5K 🔥`
1. [你打字吧 你字好看](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%89%93%E5%AD%97%E5%90%A7%20%E4%BD%A0%E5%AD%97%E5%A5%BD%E7%9C%8B%23) `169.0K 🔥`
1. [鹿哈官宣得女](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E5%93%88%E5%AE%98%E5%AE%A3%E5%BE%97%E5%A5%B3%23) `159.4K 🔥`
1. [杨幂柳智敏撞衫](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9F%B3%E6%99%BA%E6%95%8F%E6%92%9E%E8%A1%AB%23) `157.8K 🔥`
1. [韦雪新男友首曝光](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E9%9B%AA%E6%96%B0%E7%94%B7%E5%8F%8B%E9%A6%96%E6%9B%9D%E5%85%89%23) `149.3K 🔥`
1. [霍格沃兹来了个东方转校生](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%A0%BC%E6%B2%83%E5%85%B9%E6%9D%A5%E4%BA%86%E4%B8%AA%E4%B8%9C%E6%96%B9%E8%BD%AC%E6%A0%A1%E7%94%9F%23) `94.3K 🔥`
1. [获退的18万彩礼已所剩无几 (There is not much left of the 180,000 refunded gift.)](https://s.weibo.com/weibo?q=%23%E8%8E%B7%E9%80%80%E7%9A%8418%E4%B8%87%E5%BD%A9%E7%A4%BC%E5%B7%B2%E6%89%80%E5%89%A9%E6%97%A0%E5%87%A0%23) `419.8K 🔥` `-52%`
1. [多少滞留三亚的人被自己穷笑了](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B0%91%E6%BB%9E%E7%95%99%E4%B8%89%E4%BA%9A%E7%9A%84%E4%BA%BA%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%A9%B7%E7%AC%91%E4%BA%86%23) `359.6K 🔥` `-28%`
1. [周杰伦演唱会](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `216.1K 🔥` `-61%`
1. [难怪考试不让上厕所](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E8%80%83%E8%AF%95%E4%B8%8D%E8%AE%A9%E4%B8%8A%E5%8E%95%E6%89%80%23) `181.9K 🔥` `-28%`
1. [闵熙珍放弃255亿韩元赔偿 (Min Hee Jin gives up 25.5 billion won compensation)](https://s.weibo.com/weibo?q=%23%E9%97%B5%E7%86%99%E7%8F%8D%E6%94%BE%E5%BC%83255%E4%BA%BF%E9%9F%A9%E5%85%83%E8%B5%94%E5%81%BF%23) `137.8K 🔥` `-25%`
1. [刘强东已接到5条大型游艇订单 (Liu Qiangdong has received orders for 5 large yachts)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BC%BA%E4%B8%9C%E5%B7%B2%E6%8E%A5%E5%88%B05%E6%9D%A1%E5%A4%A7%E5%9E%8B%E6%B8%B8%E8%89%87%E8%AE%A2%E5%8D%95%23) `125.4K 🔥` `-31%`
1. [时代峰峻高会否认时代少年团单飞 (Times Fengjun Gao will deny that Times Youth League is going solo)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%AB%98%E4%BC%9A%E5%90%A6%E8%AE%A4%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%8D%95%E9%A3%9E%23) `89.0K 🔥` `-35%`
1. [如果故人留给你的遗物是一个孩子 (If the legacy left to you by an deceased person is a child)](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E6%95%85%E4%BA%BA%E7%95%99%E7%BB%99%E4%BD%A0%E7%9A%84%E9%81%97%E7%89%A9%E6%98%AF%E4%B8%80%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `85.9K 🔥` `-32%`
1. [单依纯二巡官宣](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E4%BA%8C%E5%B7%A1%E5%AE%98%E5%AE%A3%23) `85.6K 🔥` `-34%`
1. [王橹杰彩烟应援](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BD%A9%E7%83%9F%E5%BA%94%E6%8F%B4%23) `84.8K 🔥` `-33%`
1. [白鹿说跟王鹤棣认识五年了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AF%B4%E8%B7%9F%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%AE%A4%E8%AF%86%E4%BA%94%E5%B9%B4%E4%BA%86%23) `81.3K 🔥` `-36%`

Updated at 2026-02-25 15:37:22

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
