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

1. [邵雨轩回应张小花比自己厉害 (Shao Yuxuan responded that Zhang Xiaohua is better than him)](https://s.weibo.com/weibo?q=%23%E9%82%B5%E9%9B%A8%E8%BD%A9%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%B0%8F%E8%8A%B1%E6%AF%94%E8%87%AA%E5%B7%B1%E5%8E%89%E5%AE%B3%23) `140.7K 🔥` `NEW`
1. [唐嫣你又开始自己画眉毛了吗](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E4%BD%A0%E5%8F%88%E5%BC%80%E5%A7%8B%E8%87%AA%E5%B7%B1%E7%94%BB%E7%9C%89%E6%AF%9B%E4%BA%86%E5%90%97%23) `136.3K 🔥` `NEW`
1. [网友新选的天涯四美](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%96%B0%E9%80%89%E7%9A%84%E5%A4%A9%E6%B6%AF%E5%9B%9B%E7%BE%8E%23) `115.6K 🔥` `NEW`
1. [谷爱凌在北京补习吃绿舌头雪糕](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9C%A8%E5%8C%97%E4%BA%AC%E8%A1%A5%E4%B9%A0%E5%90%83%E7%BB%BF%E8%88%8C%E5%A4%B4%E9%9B%AA%E7%B3%95%23) `108.7K 🔥` `NEW`
1. [男子在餐厅吃鱼吃出鱼线鱼钩](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E9%A4%90%E5%8E%85%E5%90%83%E9%B1%BC%E5%90%83%E5%87%BA%E9%B1%BC%E7%BA%BF%E9%B1%BC%E9%92%A9%23) `108.2K 🔥` `NEW`
1. [谢娜张杰晒的都是孩子背影](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%BC%A0%E6%9D%B0%E6%99%92%E7%9A%84%E9%83%BD%E6%98%AF%E5%AD%A9%E5%AD%90%E8%83%8C%E5%BD%B1%23) `106.3K 🔥` `NEW`
1. [多家妇幼医院门口烟民扎堆](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E5%A6%87%E5%B9%BC%E5%8C%BB%E9%99%A2%E9%97%A8%E5%8F%A3%E7%83%9F%E6%B0%91%E6%89%8E%E5%A0%86%23) `99.6K 🔥` `NEW`
1. [王鹤棣一秒认出白鹿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E4%B8%80%E7%A7%92%E8%AE%A4%E5%87%BA%E7%99%BD%E9%B9%BF%23) `92.6K 🔥` `NEW`
1. [一家人返程出车祸母亲哭到昏厥](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%BA%BA%E8%BF%94%E7%A8%8B%E5%87%BA%E8%BD%A6%E7%A5%B8%E6%AF%8D%E4%BA%B2%E5%93%AD%E5%88%B0%E6%98%8F%E5%8E%A5%23) `91.0K 🔥` `NEW`
1. [于正从白月光事件后像变了个人](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E4%BB%8E%E7%99%BD%E6%9C%88%E5%85%89%E4%BA%8B%E4%BB%B6%E5%90%8E%E5%83%8F%E5%8F%98%E4%BA%86%E4%B8%AA%E4%BA%BA%23) `90.3K 🔥` `NEW`
1. [黄子韬王鹤棣哭戏全靠眼药水 (Huang Zitao and Wang Hedi’s crying scenes all relied on eye drops)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%93%AD%E6%88%8F%E5%85%A8%E9%9D%A0%E7%9C%BC%E8%8D%AF%E6%B0%B4%23) `89.2K 🔥` `NEW`
1. [一商场男厕大门正对走廊敞开](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%95%86%E5%9C%BA%E7%94%B7%E5%8E%95%E5%A4%A7%E9%97%A8%E6%AD%A3%E5%AF%B9%E8%B5%B0%E5%BB%8A%E6%95%9E%E5%BC%80%23) `88.4K 🔥` `NEW`
1. [现偶就是要少男少女演](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%81%B6%E5%B0%B1%E6%98%AF%E8%A6%81%E5%B0%91%E7%94%B7%E5%B0%91%E5%A5%B3%E6%BC%94%23) `88.0K 🔥` `NEW`
1. [元宝并非首次出现AI辱骂用户情况](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E5%B9%B6%E9%9D%9E%E9%A6%96%E6%AC%A1%E5%87%BA%E7%8E%B0AI%E8%BE%B1%E9%AA%82%E7%94%A8%E6%88%B7%E6%83%85%E5%86%B5%23) `86.6K 🔥` `NEW`
1. [日本以为中方会软化立场](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BB%A5%E4%B8%BA%E4%B8%AD%E6%96%B9%E4%BC%9A%E8%BD%AF%E5%8C%96%E7%AB%8B%E5%9C%BA%23) `84.6K 🔥` `NEW`
1. [错撩](https://s.weibo.com/weibo?q=%23%E9%94%99%E6%92%A9%23) `83.5K 🔥` `NEW`
1. [大年初六21岁女生因癌症离世](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E5%85%AD21%E5%B2%81%E5%A5%B3%E7%94%9F%E5%9B%A0%E7%99%8C%E7%97%87%E7%A6%BB%E4%B8%96%23) `429.3K 🔥` `+198%`
1. [两个月水费1847元水务公司怀疑马桶](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E6%9C%88%E6%B0%B4%E8%B4%B91847%E5%85%83%E6%B0%B4%E5%8A%A1%E5%85%AC%E5%8F%B8%E6%80%80%E7%96%91%E9%A9%AC%E6%A1%B6%23) `359.0K 🔥` `+170%`
1. [小城市网购 AB货](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E5%B8%82%E7%BD%91%E8%B4%AD%20AB%E8%B4%A7%23) `312.0K 🔥` `+273%`
1. [短剧女主妆造梦回台偶韩偶巅峰 (The heroine of the short drama returns to the peak of Taiwanese and Korean idols by making up her dream)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E5%A5%B3%E4%B8%BB%E5%A6%86%E9%80%A0%E6%A2%A6%E5%9B%9E%E5%8F%B0%E5%81%B6%E9%9F%A9%E5%81%B6%E5%B7%85%E5%B3%B0%23) `99.2K 🔥` `+22%`
1. [中秋请3天假堪比春节](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E8%AF%B73%E5%A4%A9%E5%81%87%E5%A0%AA%E6%AF%94%E6%98%A5%E8%8A%82%23) `1.1M 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `826.4K 🔥`
1. [春节国内出游5.96亿人次 (596 million domestic trips were made during the Spring Festival)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%9B%BD%E5%86%85%E5%87%BA%E6%B8%B85.96%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `614.9K 🔥`
1. [刘亦菲晒出光影大片](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%99%92%E5%87%BA%E5%85%89%E5%BD%B1%E5%A4%A7%E7%89%87%23) `481.3K 🔥`
1. [多少滞留三亚的人被自己穷笑了](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B0%91%E6%BB%9E%E7%95%99%E4%B8%89%E4%BA%9A%E7%9A%84%E4%BA%BA%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%A9%B7%E7%AC%91%E4%BA%86%23) `311.0K 🔥`
1. [钱枫近况](https://s.weibo.com/weibo?q=%23%E9%92%B1%E6%9E%AB%E8%BF%91%E5%86%B5%23) `173.7K 🔥`
1. [谢娜恳请不要将镜头对准孩子](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%81%B3%E8%AF%B7%E4%B8%8D%E8%A6%81%E5%B0%86%E9%95%9C%E5%A4%B4%E5%AF%B9%E5%87%86%E5%AD%A9%E5%AD%90%23) `162.2K 🔥`
1. [腾讯元宝向用户道歉](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%85%83%E5%AE%9D%E5%90%91%E7%94%A8%E6%88%B7%E9%81%93%E6%AD%89%23) `152.0K 🔥`
1. [遇难女子失联前光着脚神情恐惧](https://s.weibo.com/weibo?q=%23%E9%81%87%E9%9A%BE%E5%A5%B3%E5%AD%90%E5%A4%B1%E8%81%94%E5%89%8D%E5%85%89%E7%9D%80%E8%84%9A%E7%A5%9E%E6%83%85%E6%81%90%E6%83%A7%23) `109.1K 🔥`
1. [单依纯二巡官宣](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E4%BA%8C%E5%B7%A1%E5%AE%98%E5%AE%A3%23) `87.2K 🔥`
1. [日本人在动物园扮演大熊猫吸引游客](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%9C%A8%E5%8A%A8%E7%89%A9%E5%9B%AD%E6%89%AE%E6%BC%94%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%90%B8%E5%BC%95%E6%B8%B8%E5%AE%A2%23) `84.6K 🔥`
1. [特朗普称美国人求他不要再赢了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E5%9B%BD%E4%BA%BA%E6%B1%82%E4%BB%96%E4%B8%8D%E8%A6%81%E5%86%8D%E8%B5%A2%E4%BA%86%23) `82.2K 🔥`
1. [原神 (Genshin Impact)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `79.6K 🔥`
1. [获退的18万彩礼已所剩无几 (There is not much left of the 180,000 refunded gift.)](https://s.weibo.com/weibo?q=%23%E8%8E%B7%E9%80%80%E7%9A%8418%E4%B8%87%E5%BD%A9%E7%A4%BC%E5%B7%B2%E6%89%80%E5%89%A9%E6%97%A0%E5%87%A0%23) `236.4K 🔥` `-44%`
1. [iPhone 自动打电话](https://s.weibo.com/weibo?q=%23iPhone%20%E8%87%AA%E5%8A%A8%E6%89%93%E7%94%B5%E8%AF%9D%23) `187.8K 🔥` `-23%`
1. [23岁香港女警在警署身亡](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E9%A6%99%E6%B8%AF%E5%A5%B3%E8%AD%A6%E5%9C%A8%E8%AD%A6%E7%BD%B2%E8%BA%AB%E4%BA%A1%23) `175.7K 🔥` `-51%`
1. [难怪考试不让上厕所](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E8%80%83%E8%AF%95%E4%B8%8D%E8%AE%A9%E4%B8%8A%E5%8E%95%E6%89%80%23) `126.6K 🔥` `-30%`
1. [曝短剧出现男演员揩油镜头 (Short drama reveals scenes of male actors taking advantage of others)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%9F%AD%E5%89%A7%E5%87%BA%E7%8E%B0%E7%94%B7%E6%BC%94%E5%91%98%E6%8F%A9%E6%B2%B9%E9%95%9C%E5%A4%B4%23) `119.2K 🔥` `-32%`
1. [曝李佳琦过年给亲戚每人发了500红包](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E4%BD%B3%E7%90%A6%E8%BF%87%E5%B9%B4%E7%BB%99%E4%BA%B2%E6%88%9A%E6%AF%8F%E4%BA%BA%E5%8F%91%E4%BA%86500%E7%BA%A2%E5%8C%85%23) `109.1K 🔥` `-37%`
1. [鹿哈官宣得女](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E5%93%88%E5%AE%98%E5%AE%A3%E5%BE%97%E5%A5%B3%23) `108.8K 🔥` `-32%`
1. [杨幂柳智敏撞衫](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9F%B3%E6%99%BA%E6%95%8F%E6%92%9E%E8%A1%AB%23) `108.4K 🔥` `-31%`
1. [徐冬冬尹子维婚礼前一天发生争执](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%86%AC%E5%86%AC%E5%B0%B9%E5%AD%90%E7%BB%B4%E5%A9%9A%E7%A4%BC%E5%89%8D%E4%B8%80%E5%A4%A9%E5%8F%91%E7%94%9F%E4%BA%89%E6%89%A7%23) `108.3K 🔥` `-36%`
1. [你打字吧 你字好看](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%89%93%E5%AD%97%E5%90%A7%20%E4%BD%A0%E5%AD%97%E5%A5%BD%E7%9C%8B%23) `104.3K 🔥` `-38%`
1. [刘浩存从小就长这样](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E4%BB%8E%E5%B0%8F%E5%B0%B1%E9%95%BF%E8%BF%99%E6%A0%B7%23) `104.1K 🔥` `-31%`
1. [周杰伦演唱会 (Jay Chou concert)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `99.1K 🔥` `-54%`
1. [三亚通报在职教师被开除 (Sanya reports that on-the-job teachers have been fired)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E9%80%9A%E6%8A%A5%E5%9C%A8%E8%81%8C%E6%95%99%E5%B8%88%E8%A2%AB%E5%BC%80%E9%99%A4%23) `92.6K 🔥` `-59%`
1. [鲁豫回应每天只吃三粒米](https://s.weibo.com/weibo?q=%23%E9%B2%81%E8%B1%AB%E5%9B%9E%E5%BA%94%E6%AF%8F%E5%A4%A9%E5%8F%AA%E5%90%83%E4%B8%89%E7%B2%92%E7%B1%B3%23) `92.2K 🔥` `-28%`
1. [刘强东已接到5条大型游艇订单 (Liu Qiangdong has received orders for 5 large yachts)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BC%BA%E4%B8%9C%E5%B7%B2%E6%8E%A5%E5%88%B05%E6%9D%A1%E5%A4%A7%E5%9E%8B%E6%B8%B8%E8%89%87%E8%AE%A2%E5%8D%95%23) `91.2K 🔥` `-27%`
1. [韦雪新男友首曝光](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E9%9B%AA%E6%96%B0%E7%94%B7%E5%8F%8B%E9%A6%96%E6%9B%9D%E5%85%89%23) `84.4K 🔥` `-43%`
1. [华策解散电影部门](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E7%AD%96%E8%A7%A3%E6%95%A3%E7%94%B5%E5%BD%B1%E9%83%A8%E9%97%A8%23) `83.3K 🔥` `-55%`

Updated at 2026-02-25 16:27:48

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
