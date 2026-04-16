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

1. [美好家打造指南 (A Guide to Building a Beautiful Home)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%A5%BD%E5%AE%B6%E6%89%93%E9%80%A0%E6%8C%87%E5%8D%97%23) `733.8K 🔥` `NEW`
1. [男孩割喉涉事老人老伴因打击再住院](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%89%B2%E5%96%89%E6%B6%89%E4%BA%8B%E8%80%81%E4%BA%BA%E8%80%81%E4%BC%B4%E5%9B%A0%E6%89%93%E5%87%BB%E5%86%8D%E4%BD%8F%E9%99%A2%23) `733.1K 🔥` `NEW`
1. [谁来救救孙丞潇](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E6%95%91%E6%95%91%E5%AD%99%E4%B8%9E%E6%BD%87%23) `731.3K 🔥` `NEW`
1. [豆包帮挑的西瓜](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%B8%AE%E6%8C%91%E7%9A%84%E8%A5%BF%E7%93%9C%23) `460.1K 🔥` `NEW`
1. [刘浩存好美](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%A5%BD%E7%BE%8E%23) `320.5K 🔥` `NEW`
1. [跑男](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `311.3K 🔥` `NEW`
1. [Uzi说这个月就先不直播了](https://s.weibo.com/weibo?q=%23Uzi%E8%AF%B4%E8%BF%99%E4%B8%AA%E6%9C%88%E5%B0%B1%E5%85%88%E4%B8%8D%E7%9B%B4%E6%92%AD%E4%BA%86%23) `309.8K 🔥` `NEW`
1. [邓超在儿子的颜值里起破坏作用](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%9C%A8%E5%84%BF%E5%AD%90%E7%9A%84%E9%A2%9C%E5%80%BC%E9%87%8C%E8%B5%B7%E7%A0%B4%E5%9D%8F%E4%BD%9C%E7%94%A8%23) `309.7K 🔥` `NEW`
1. [宋亚轩回归音综](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9E%E5%BD%92%E9%9F%B3%E7%BB%BC%23) `209.4K 🔥` `NEW`
1. [人一退休面相都跟着变舒展了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E9%80%80%E4%BC%91%E9%9D%A2%E7%9B%B8%E9%83%BD%E8%B7%9F%E7%9D%80%E5%8F%98%E8%88%92%E5%B1%95%E4%BA%86%23) `200.2K 🔥` `NEW`
1. [莫氏鸡煲老板回应商家排队送产品 (The owner of Mo’s Chicken Pot responds to merchants queuing up to deliver products)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%E5%95%86%E5%AE%B6%E6%8E%92%E9%98%9F%E9%80%81%E4%BA%A7%E5%93%81%23) `90.9K 🔥` `NEW`
1. [在南京偶遇了刘宇宁](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8D%97%E4%BA%AC%E5%81%B6%E9%81%87%E4%BA%86%E5%88%98%E5%AE%87%E5%AE%81%23) `90.7K 🔥` `NEW`
1. [小米食堂3天卖2000多只冰淇淋](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A3%9F%E5%A0%823%E5%A4%A9%E5%8D%962000%E5%A4%9A%E5%8F%AA%E5%86%B0%E6%B7%87%E6%B7%8B%23) `90.7K 🔥` `NEW`
1. [向涵之 你替我拍戏](https://s.weibo.com/weibo?q=%23%E5%90%91%E6%B6%B5%E4%B9%8B%20%E4%BD%A0%E6%9B%BF%E6%88%91%E6%8B%8D%E6%88%8F%23) `90.3K 🔥` `NEW`
1. [伊朗最高领袖威胁击沉美方舰艇](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%A8%81%E8%83%81%E5%87%BB%E6%B2%89%E7%BE%8E%E6%96%B9%E8%88%B0%E8%89%87%23) `84.1K 🔥` `NEW`
1. [白客给张若昀打伞](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%A2%E7%BB%99%E5%BC%A0%E8%8B%A5%E6%98%80%E6%89%93%E4%BC%9E%23) `83.8K 🔥` `NEW`
1. [在音乐节的我vs在工位的我](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%B3%E4%B9%90%E8%8A%82%E7%9A%84%E6%88%91vs%E5%9C%A8%E5%B7%A5%E4%BD%8D%E7%9A%84%E6%88%91%23) `80.1K 🔥` `NEW`
1. [戚薇梦回夏友善](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E6%A2%A6%E5%9B%9E%E5%A4%8F%E5%8F%8B%E5%96%84%23) `79.8K 🔥` `NEW`
1. [16岁小伙确诊肺癌](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%B0%8F%E4%BC%99%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%23) `76.9K 🔥` `NEW`
1. [警察执勤点贴出勿泼水告示仍被泼](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E5%AF%9F%E6%89%A7%E5%8B%A4%E7%82%B9%E8%B4%B4%E5%87%BA%E5%8B%BF%E6%B3%BC%E6%B0%B4%E5%91%8A%E7%A4%BA%E4%BB%8D%E8%A2%AB%E6%B3%BC%23) `68.3K 🔥` `NEW`
1. [商家笑了半个月才舍得发货 (The merchant laughed for half a month before he was willing to deliver the goods)](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%AE%B6%E7%AC%91%E4%BA%86%E5%8D%8A%E4%B8%AA%E6%9C%88%E6%89%8D%E8%88%8D%E5%BE%97%E5%8F%91%E8%B4%A7%23) `64.5K 🔥` `NEW`
1. [雷军再次回应中间只充一次电言论](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%86%8D%E6%AC%A1%E5%9B%9E%E5%BA%94%E4%B8%AD%E9%97%B4%E5%8F%AA%E5%85%85%E4%B8%80%E6%AC%A1%E7%94%B5%E8%A8%80%E8%AE%BA%23) `64.0K 🔥` `NEW`
1. [女子领证21天后输液昏迷丈夫发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%A2%86%E8%AF%8121%E5%A4%A9%E5%90%8E%E8%BE%93%E6%B6%B2%E6%98%8F%E8%BF%B7%E4%B8%88%E5%A4%AB%E5%8F%91%E5%A3%B0%23) `61.8K 🔥` `NEW`
1. [阚清子孙怡将一起录制你好星期六](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%AD%99%E6%80%A1%E5%B0%86%E4%B8%80%E8%B5%B7%E5%BD%95%E5%88%B6%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `61.6K 🔥` `NEW`
1. [刘浩存雨中神图](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E9%9B%A8%E4%B8%AD%E7%A5%9E%E5%9B%BE%23) `56.2K 🔥` `NEW`
1. [警察带台湾同胞走中国公民专用通道](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E5%AF%9F%E5%B8%A6%E5%8F%B0%E6%B9%BE%E5%90%8C%E8%83%9E%E8%B5%B0%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E4%B8%93%E7%94%A8%E9%80%9A%E9%81%93%23) `56.2K 🔥` `NEW`
1. [20位中国学者被美国拒绝入境](https://s.weibo.com/weibo?q=%2320%E4%BD%8D%E4%B8%AD%E5%9B%BD%E5%AD%A6%E8%80%85%E8%A2%AB%E7%BE%8E%E5%9B%BD%E6%8B%92%E7%BB%9D%E5%85%A5%E5%A2%83%23) `55.3K 🔥` `NEW`
1. [黄渤带倪妮拼豆走红毯](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B8%A4%E5%B8%A6%E5%80%AA%E5%A6%AE%E6%8B%BC%E8%B1%86%E8%B5%B0%E7%BA%A2%E6%AF%AF%23) `54.3K 🔥` `NEW`
1. [班主任猥亵女生已成立联合调查组](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E7%8C%A5%E4%BA%B5%E5%A5%B3%E7%94%9F%E5%B7%B2%E6%88%90%E7%AB%8B%E8%81%94%E5%90%88%E8%B0%83%E6%9F%A5%E7%BB%84%23) `52.6K 🔥` `NEW`
1. [被食物香到站起来闻的猫咪](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%A3%9F%E7%89%A9%E9%A6%99%E5%88%B0%E7%AB%99%E8%B5%B7%E6%9D%A5%E9%97%BB%E7%9A%84%E7%8C%AB%E5%92%AA%23) `52.5K 🔥` `NEW`
1. [雷军再回应小米黑稿 (Lei Jun responds to Xiaomi's black draft again)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%86%8D%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E9%BB%91%E7%A8%BF%23) `52.4K 🔥` `NEW`
1. [中国驻日大使馆接连遭到恐怖威胁](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A9%BB%E6%97%A5%E5%A4%A7%E4%BD%BF%E9%A6%86%E6%8E%A5%E8%BF%9E%E9%81%AD%E5%88%B0%E6%81%90%E6%80%96%E5%A8%81%E8%83%81%23) `1.0M 🔥` `+1312%`
1. [酒店订单备注玩梗被指侵犯隐私](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97%E8%AE%A2%E5%8D%95%E5%A4%87%E6%B3%A8%E7%8E%A9%E6%A2%97%E8%A2%AB%E6%8C%87%E4%BE%B5%E7%8A%AF%E9%9A%90%E7%A7%81%23) `742.8K 🔥` `+584%`
1. [大众点评必玩榜发车了 (Dianping’s must-play list has launched)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97%E7%82%B9%E8%AF%84%E5%BF%85%E7%8E%A9%E6%A6%9C%E5%8F%91%E8%BD%A6%E4%BA%86%23) `441.9K 🔥` `+104%`
1. [黄瓜泡面](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E6%B3%A1%E9%9D%A2%23) `310.3K 🔥` `+66%`
1. [曝包洁仪凄惨身世是假的](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8C%85%E6%B4%81%E4%BB%AA%E5%87%84%E6%83%A8%E8%BA%AB%E4%B8%96%E6%98%AF%E5%81%87%E7%9A%84%23) `178.5K 🔥` `+34%`
1. [2026年一季度GDP同比增长5.0%](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%B8%80%E5%AD%A3%E5%BA%A6GDP%E5%90%8C%E6%AF%94%E5%A2%9E%E9%95%BF5.0%25%23) `734.7K 🔥`
1. [小杨生煎回应包子皮放在抹布上 (Xiao Yang Shengjian responded by putting the bun skin on a rag)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9D%A8%E7%94%9F%E7%85%8E%E5%9B%9E%E5%BA%94%E5%8C%85%E5%AD%90%E7%9A%AE%E6%94%BE%E5%9C%A8%E6%8A%B9%E5%B8%83%E4%B8%8A%23) `117.5K 🔥`
1. [迪丽热巴表演打奶嗝](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A1%A8%E6%BC%94%E6%89%93%E5%A5%B6%E5%97%9D%23) `109.2K 🔥`
1. [戴降噪耳机喝可乐](https://s.weibo.com/weibo?q=%23%E6%88%B4%E9%99%8D%E5%99%AA%E8%80%B3%E6%9C%BA%E5%96%9D%E5%8F%AF%E4%B9%90%23) `90.7K 🔥`
1. [何润东翻红后的商务](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E7%BF%BB%E7%BA%A2%E5%90%8E%E7%9A%84%E5%95%86%E5%8A%A1%23) `81.2K 🔥`
1. [孙怡cos黎璃](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1cos%E9%BB%8E%E7%92%83%23) `198.0K 🔥` `-59%`
1. [雷军将全程直播15小时 (Lei Jun will live broadcast the entire process for 15 hours)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%B0%86%E5%85%A8%E7%A8%8B%E7%9B%B4%E6%92%AD15%E5%B0%8F%E6%97%B6%23) `90.8K 🔥` `-40%`
1. [北影节红毯](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%BD%B1%E8%8A%82%E7%BA%A2%E6%AF%AF%23) `84.7K 🔥` `-53%`
1. [阚清子复刻欣荣格格](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%A4%8D%E5%88%BB%E6%AC%A3%E8%8D%A3%E6%A0%BC%E6%A0%BC%23) `77.2K 🔥` `-31%`
1. [赵子琪为上浪姐下了血本](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E4%B8%BA%E4%B8%8A%E6%B5%AA%E5%A7%90%E4%B8%8B%E4%BA%86%E8%A1%80%E6%9C%AC%23) `70.2K 🔥` `-36%`
1. [王俊凯八中时期旧照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%85%AB%E4%B8%AD%E6%97%B6%E6%9C%9F%E6%97%A7%E7%85%A7%23) `67.9K 🔥` `-35%`
1. [奔跑吧首播嘉宾是时代少年团](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E9%A6%96%E6%92%AD%E5%98%89%E5%AE%BE%E6%98%AF%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%23) `63.4K 🔥` `-41%`
1. [唐禹哲自首出发图 (Tang Yuzhe surrenders and sets off)](https://s.weibo.com/weibo?q=%23%E5%94%90%E7%A6%B9%E5%93%B2%E8%87%AA%E9%A6%96%E5%87%BA%E5%8F%91%E5%9B%BE%23) `60.6K 🔥` `-45%`
1. [库里回应淘汰快船](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E5%9B%9E%E5%BA%94%E6%B7%98%E6%B1%B0%E5%BF%AB%E8%88%B9%23) `57.7K 🔥` `-27%`
1. [小狗一点点闻到了朋友死亡的过程](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%B8%80%E7%82%B9%E7%82%B9%E9%97%BB%E5%88%B0%E4%BA%86%E6%9C%8B%E5%8F%8B%E6%AD%BB%E4%BA%A1%E7%9A%84%E8%BF%87%E7%A8%8B%23) `57.0K 🔥` `-27%`
1. [阿俄确认客机坠毁系遭防空系统误击](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BF%84%E7%A1%AE%E8%AE%A4%E5%AE%A2%E6%9C%BA%E5%9D%A0%E6%AF%81%E7%B3%BB%E9%81%AD%E9%98%B2%E7%A9%BA%E7%B3%BB%E7%BB%9F%E8%AF%AF%E5%87%BB%23) `55.2K 🔥` `-29%`

Updated at 2026-04-16 17:48:04

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
