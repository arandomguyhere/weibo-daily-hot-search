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

1. [前7个月全国网上商品零售额增长4.6% (National online retail sales increased by 4.6% in the first seven months)](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E4%B8%AA%E6%9C%88%E5%85%A8%E5%9B%BD%E7%BD%91%E4%B8%8A%E5%95%86%E5%93%81%E9%9B%B6%E5%94%AE%E9%A2%9D%E5%A2%9E%E9%95%BF4.6%25%23) `1.0M 🔥` `NEW`
1. [中国船舶国企开放日](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%B9%E8%88%B6%E5%9B%BD%E4%BC%81%E5%BC%80%E6%94%BE%E6%97%A5%23) `844.8K 🔥` `NEW`
1. [蜜雪冰城 盘账数杯子不数钱](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%20%E7%9B%98%E8%B4%A6%E6%95%B0%E6%9D%AF%E5%AD%90%E4%B8%8D%E6%95%B0%E9%92%B1%23) `456.9K 🔥` `NEW`
1. [为什么榴莲降价反而吐槽多了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%A6%B4%E8%8E%B2%E9%99%8D%E4%BB%B7%E5%8F%8D%E8%80%8C%E5%90%90%E6%A7%BD%E5%A4%9A%E4%BA%86%23) `420.4K 🔥` `NEW`
1. [顶替案弟弟称哥哥上大学时曾感激自己](https://s.weibo.com/weibo?q=%23%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%BC%9F%E5%BC%9F%E7%A7%B0%E5%93%A5%E5%93%A5%E4%B8%8A%E5%A4%A7%E5%AD%A6%E6%97%B6%E6%9B%BE%E6%84%9F%E6%BF%80%E8%87%AA%E5%B7%B1%23) `410.3K 🔥` `NEW`
1. [胡先煦这么帅了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E8%BF%99%E4%B9%88%E5%B8%85%E4%BA%86%23) `316.2K 🔥` `NEW`
1. [王橹杰哭戏花絮](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%93%AD%E6%88%8F%E8%8A%B1%E7%B5%AE%23) `190.0K 🔥` `NEW`
1. [总裁班中介称干一年能买上海一套房](https://s.weibo.com/weibo?q=%23%E6%80%BB%E8%A3%81%E7%8F%AD%E4%B8%AD%E4%BB%8B%E7%A7%B0%E5%B9%B2%E4%B8%80%E5%B9%B4%E8%83%BD%E4%B9%B0%E4%B8%8A%E6%B5%B7%E4%B8%80%E5%A5%97%E6%88%BF%23) `189.6K 🔥` `NEW`
1. [张新成演唱会应援棒定价](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E6%88%90%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BA%94%E6%8F%B4%E6%A3%92%E5%AE%9A%E4%BB%B7%23) `137.4K 🔥` `NEW`
1. [巴基斯坦博主看欢迎来龙餐馆不适](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E5%8D%9A%E4%B8%BB%E7%9C%8B%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E4%B8%8D%E9%80%82%23) `870.5K 🔥` `+44%`
1. [红车误入婚车车队成主角 (The red car mistakenly enters the wedding car convoy and becomes the protagonist)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E8%BD%A6%E8%AF%AF%E5%85%A5%E5%A9%9A%E8%BD%A6%E8%BD%A6%E9%98%9F%E6%88%90%E4%B8%BB%E8%A7%92%23) `440.8K 🔥` `+108%`
1. [刘亦菲高定是工作防晒衣是生活 (Liu Yifei’s haute couture is for work and sun protection clothing is for life)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E9%AB%98%E5%AE%9A%E6%98%AF%E5%B7%A5%E4%BD%9C%E9%98%B2%E6%99%92%E8%A1%A3%E6%98%AF%E7%94%9F%E6%B4%BB%23) `425.2K 🔥` `+85%`
1. [吴建豪回应妻子被曝学历造假](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BB%BA%E8%B1%AA%E5%9B%9E%E5%BA%94%E5%A6%BB%E5%AD%90%E8%A2%AB%E6%9B%9D%E5%AD%A6%E5%8E%86%E9%80%A0%E5%81%87%23) `421.0K 🔥` `+100%`
1. [天安门下半旗悼念朱镕基同志 (Flags flown at half-mast in Tiananmen Square to mourn Comrade Zhu Rongji)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%89%E9%97%A8%E4%B8%8B%E5%8D%8A%E6%97%97%E6%82%BC%E5%BF%B5%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%23) `1.1M 🔥`
1. [游泳 腺病毒](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%B3%B3%20%E8%85%BA%E7%97%85%E6%AF%92%23) `1.1M 🔥`
1. [睡前9分钟清除皮质醇的废物](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%89%8D9%E5%88%86%E9%92%9F%E6%B8%85%E9%99%A4%E7%9A%AE%E8%B4%A8%E9%86%87%E7%9A%84%E5%BA%9F%E7%89%A9%23) `962.0K 🔥`
1. [BBA集体大降价 (BBA collective big price reduction)](https://s.weibo.com/weibo?q=%23BBA%E9%9B%86%E4%BD%93%E5%A4%A7%E9%99%8D%E4%BB%B7%23) `889.4K 🔥`
1. [中1签赚55万](https://s.weibo.com/weibo?q=%23%E4%B8%AD1%E7%AD%BE%E8%B5%9A55%E4%B8%87%23) `758.9K 🔥`
1. [贺涵PPT做得太丑了](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%B6%B5PPT%E5%81%9A%E5%BE%97%E5%A4%AA%E4%B8%91%E4%BA%86%23) `431.5K 🔥`
1. [张若昀白客玩蔡徐坤梗 (Zhang Ruoyun plays with Cai Xukun)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E7%99%BD%E5%AE%A2%E7%8E%A9%E8%94%A1%E5%BE%90%E5%9D%A4%E6%A2%97%23) `401.4K 🔥`
1. [招商蛇口总部开展调查 (China Merchants Shekou Headquarters launches investigation)](https://s.weibo.com/weibo?q=%23%E6%8B%9B%E5%95%86%E8%9B%87%E5%8F%A3%E6%80%BB%E9%83%A8%E5%BC%80%E5%B1%95%E8%B0%83%E6%9F%A5%23) `384.2K 🔥`
1. [带摄像头AirPods实机演示曝光](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E6%91%84%E5%83%8F%E5%A4%B4AirPods%E5%AE%9E%E6%9C%BA%E6%BC%94%E7%A4%BA%E6%9B%9D%E5%85%89%23) `363.2K 🔥`
1. [赵海峰酒局 拿地潜规则](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%B5%B7%E5%B3%B0%E9%85%92%E5%B1%80%20%E6%8B%BF%E5%9C%B0%E6%BD%9C%E8%A7%84%E5%88%99%23) `349.5K 🔥`
1. [林志颖说kimi不想出道 (Lin Zhiying said Kimi doesn’t want to debut)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E8%AF%B4kimi%E4%B8%8D%E6%83%B3%E5%87%BA%E9%81%93%23) `340.7K 🔥`
1. [BBA大降价 宝马5系跌至28万](https://s.weibo.com/weibo?q=%23BBA%E5%A4%A7%E9%99%8D%E4%BB%B7%20%E5%AE%9D%E9%A9%AC5%E7%B3%BB%E8%B7%8C%E8%87%B328%E4%B8%87%23) `330.4K 🔥`
1. [王橹杰比董洁亲儿子还小一岁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%AF%94%E8%91%A3%E6%B4%81%E4%BA%B2%E5%84%BF%E5%AD%90%E8%BF%98%E5%B0%8F%E4%B8%80%E5%B2%81%23) `313.3K 🔥`
1. [杭州酒局事件受害女子家人回应 (The family of the woman victim in the Hangzhou Wine Bureau incident responds)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%E5%8F%97%E5%AE%B3%E5%A5%B3%E5%AD%90%E5%AE%B6%E4%BA%BA%E5%9B%9E%E5%BA%94%23) `281.5K 🔥`
1. [被容嬷嬷凶相骗了近30年](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%B9%E5%AC%B7%E5%AC%B7%E5%87%B6%E7%9B%B8%E9%AA%97%E4%BA%86%E8%BF%9130%E5%B9%B4%23) `244.3K 🔥`
1. [3孩非亲生奶奶想尽快送走3个孙女](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B6%E5%A5%B6%E6%83%B3%E5%B0%BD%E5%BF%AB%E9%80%81%E8%B5%B03%E4%B8%AA%E5%AD%99%E5%A5%B3%23) `227.9K 🔥`
1. [蓝盈莹承认恋情](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `195.0K 🔥`
1. [卡戴珊汉密尔顿热恋秀恩爱](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E6%88%B4%E7%8F%8A%E6%B1%89%E5%AF%86%E5%B0%94%E9%A1%BF%E7%83%AD%E6%81%8B%E7%A7%80%E6%81%A9%E7%88%B1%23) `189.3K 🔥`
1. [12345 滥用](https://s.weibo.com/weibo?q=%2312345%20%E6%BB%A5%E7%94%A8%23) `457.9K 🔥` `-35%`
1. [觉醒开机](https://s.weibo.com/weibo?q=%23%E8%A7%89%E9%86%92%E5%BC%80%E6%9C%BA%23) `450.3K 🔥` `-25%`
1. [易立竞当面拆穿蓝盈莹](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%AB%8B%E7%AB%9E%E5%BD%93%E9%9D%A2%E6%8B%86%E7%A9%BF%E8%93%9D%E7%9B%88%E8%8E%B9%23) `444.5K 🔥` `-26%`
1. [刘亦菲素颜穿79.8元防晒衣](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%B4%A0%E9%A2%9C%E7%A9%BF79.8%E5%85%83%E9%98%B2%E6%99%92%E8%A1%A3%23) `436.8K 🔥` `-24%`
1. [高考只差一分却过上了两种人生](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%8F%AA%E5%B7%AE%E4%B8%80%E5%88%86%E5%8D%B4%E8%BF%87%E4%B8%8A%E4%BA%86%E4%B8%A4%E7%A7%8D%E4%BA%BA%E7%94%9F%23) `428.6K 🔥` `-26%`
1. [3孩非亲生女方认为男方理应养孩子 (The woman who has 3 children who is not her biological child thinks that the man should raise the children)](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B3%E6%96%B9%E8%AE%A4%E4%B8%BA%E7%94%B7%E6%96%B9%E7%90%86%E5%BA%94%E5%85%BB%E5%AD%A9%E5%AD%90%23) `407.7K 🔥` `-32%`
1. [时代峰峻半夜发招聘 (Times Fengjun issued recruitment in the middle of the night)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%8D%8A%E5%A4%9C%E5%8F%91%E6%8B%9B%E8%81%98%23) `397.3K 🔥` `-31%`
1. [李嫣几乎看不见唇腭裂修复痕迹 (Li Yan’s cleft lip and palate repair traces are almost invisible)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AB%A3%E5%87%A0%E4%B9%8E%E7%9C%8B%E4%B8%8D%E8%A7%81%E5%94%87%E8%85%AD%E8%A3%82%E4%BF%AE%E5%A4%8D%E7%97%95%E8%BF%B9%23) `342.1K 🔥` `-43%`
1. [在华18年日本人参拜靖国神社](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8D%8E18%E5%B9%B4%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `311.8K 🔥` `-23%`
1. [学籍顶替案母亲称弟弟当公务员后飘了](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%B1%8D%E9%A1%B6%E6%9B%BF%E6%A1%88%E6%AF%8D%E4%BA%B2%E7%A7%B0%E5%BC%9F%E5%BC%9F%E5%BD%93%E5%85%AC%E5%8A%A1%E5%91%98%E5%90%8E%E9%A3%98%E4%BA%86%23) `227.6K 🔥` `-24%`
1. [赵海峰 酒桌文化 (Zhao Haifeng Wine Table Culture)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%B5%B7%E5%B3%B0%20%E9%85%92%E6%A1%8C%E6%96%87%E5%8C%96%23) `222.5K 🔥` `-35%`
1. [现在泡面都进化成这样了 (Now instant noodles have evolved like this)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%B3%A1%E9%9D%A2%E9%83%BD%E8%BF%9B%E5%8C%96%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `211.2K 🔥` `-47%`
1. [黄圣依离婚后首次带儿子安麟出镜 (Huang Shengyi brought his son An Lin to the scene for the first time after his divorce)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%A3%E4%BE%9D%E7%A6%BB%E5%A9%9A%E5%90%8E%E9%A6%96%E6%AC%A1%E5%B8%A6%E5%84%BF%E5%AD%90%E5%AE%89%E9%BA%9F%E5%87%BA%E9%95%9C%23) `178.6K 🔥` `-34%`
1. [李嫣6岁举办了人生第一场画展](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AB%A36%E5%B2%81%E4%B8%BE%E5%8A%9E%E4%BA%86%E4%BA%BA%E7%94%9F%E7%AC%AC%E4%B8%80%E5%9C%BA%E7%94%BB%E5%B1%95%23) `177.2K 🔥` `-39%`
1. [桃黑黑已签约MCN](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%B7%B2%E7%AD%BE%E7%BA%A6MCN%23) `171.5K 🔥` `-29%`
1. [杨幂偷偷说apt被发现](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%81%B7%E5%81%B7%E8%AF%B4apt%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `152.0K 🔥` `-36%`
1. [王一博看到自己表情包belike](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9C%8B%E5%88%B0%E8%87%AA%E5%B7%B1%E8%A1%A8%E6%83%85%E5%8C%85belike%23) `138.6K 🔥` `-26%`
1. [大厂程序员辞职在宁夏用AI养羊](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%8E%82%E7%A8%8B%E5%BA%8F%E5%91%98%E8%BE%9E%E8%81%8C%E5%9C%A8%E5%AE%81%E5%A4%8F%E7%94%A8AI%E5%85%BB%E7%BE%8A%23) `137.8K 🔥` `-70%`
1. [许家印崩了东北富二代42个亿 (Xu Jiayin lost 4.2 billion to the rich second generation of Northeast China)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E5%B4%A9%E4%BA%86%E4%B8%9C%E5%8C%97%E5%AF%8C%E4%BA%8C%E4%BB%A342%E4%B8%AA%E4%BA%BF%23) `136.8K 🔥` `-27%`

Updated at 2026-08-18 14:25:48

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
