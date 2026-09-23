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

1. [马斯克感叹中国壮丽](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%84%9F%E5%8F%B9%E4%B8%AD%E5%9B%BD%E5%A3%AE%E4%B8%BD%23) `1.2M 🔥` `NEW`
1. [祝福祖国大花篮主体亮相](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E7%A6%8F%E7%A5%96%E5%9B%BD%E5%A4%A7%E8%8A%B1%E7%AF%AE%E4%B8%BB%E4%BD%93%E4%BA%AE%E7%9B%B8%23) `730.6K 🔥` `NEW`
1. [周琦主动表态愿出战亚运会被拒](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%90%A6%E4%B8%BB%E5%8A%A8%E8%A1%A8%E6%80%81%E6%84%BF%E5%87%BA%E6%88%98%E4%BA%9A%E8%BF%90%E4%BC%9A%E8%A2%AB%E6%8B%92%23) `700.0K 🔥` `NEW`
1. [越7真越野超舒适16万起](https://s.weibo.com/weibo?q=%23%E8%B6%8A7%E7%9C%9F%E8%B6%8A%E9%87%8E%E8%B6%85%E8%88%92%E9%80%8216%E4%B8%87%E8%B5%B7%23) `457.7K 🔥` `NEW`
1. [秋分](https://s.weibo.com/weibo?q=%23%E7%A7%8B%E5%88%86%23) `422.3K 🔥` `NEW`
1. [潘玮柏演唱会10点整戛然而止](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%8E%AE%E6%9F%8F%E6%BC%94%E5%94%B1%E4%BC%9A10%E7%82%B9%E6%95%B4%E6%88%9B%E7%84%B6%E8%80%8C%E6%AD%A2%23) `351.8K 🔥` `NEW`
1. [白鹿回复呵呵你是我最好的礼物](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E5%91%B5%E5%91%B5%E4%BD%A0%E6%98%AF%E6%88%91%E6%9C%80%E5%A5%BD%E7%9A%84%E7%A4%BC%E7%89%A9%23) `341.5K 🔥` `NEW`
1. [为什么说秋分是最公平的一天](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E7%A7%8B%E5%88%86%E6%98%AF%E6%9C%80%E5%85%AC%E5%B9%B3%E7%9A%84%E4%B8%80%E5%A4%A9%23) `339.8K 🔥` `NEW`
1. [杨幂说短发是自己剪的](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%AF%B4%E7%9F%AD%E5%8F%91%E6%98%AF%E8%87%AA%E5%B7%B1%E5%89%AA%E7%9A%84%23) `334.8K 🔥` `NEW`
1. [女子称遭硕导性侵后洗澡洗掉证据](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%81%AD%E7%A1%95%E5%AF%BC%E6%80%A7%E4%BE%B5%E5%90%8E%E6%B4%97%E6%BE%A1%E6%B4%97%E6%8E%89%E8%AF%81%E6%8D%AE%23) `331.4K 🔥` `NEW`
1. [王玉雯 杨玏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%20%E6%9D%A8%E7%8E%8F%23) `328.4K 🔥` `NEW`
1. [张家齐妈妈直言不愿意花张家齐的钱](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E7%9B%B4%E8%A8%80%E4%B8%8D%E6%84%BF%E6%84%8F%E8%8A%B1%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%9A%84%E9%92%B1%23) `325.7K 🔥` `NEW`
1. [中国死亡率最高徒步线鳌太线](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%AD%BB%E4%BA%A1%E7%8E%87%E6%9C%80%E9%AB%98%E5%BE%92%E6%AD%A5%E7%BA%BF%E9%B3%8C%E5%A4%AA%E7%BA%BF%23) `324.3K 🔥` `NEW`
1. [小米首发第六代骁龙8超级至尊版](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A6%96%E5%8F%91%E7%AC%AC%E5%85%AD%E4%BB%A3%E9%AA%81%E9%BE%998%E8%B6%85%E7%BA%A7%E8%87%B3%E5%B0%8A%E7%89%88%23) `315.6K 🔥` `NEW`
1. [白鹿32岁生日发文](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF32%E5%B2%81%E7%94%9F%E6%97%A5%E5%8F%91%E6%96%87%23) `304.2K 🔥` `NEW`
1. [孙尚香新皮肤](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%B0%9A%E9%A6%99%E6%96%B0%E7%9A%AE%E8%82%A4%23) `280.1K 🔥` `NEW`
1. [张真源吃饭vs唐艺昕吃饭](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%90%83%E9%A5%ADvs%E5%94%90%E8%89%BA%E6%98%95%E5%90%83%E9%A5%AD%23) `273.4K 🔥` `NEW`
1. [林锦岐大婚只有爹去了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E5%A4%A7%E5%A9%9A%E5%8F%AA%E6%9C%89%E7%88%B9%E5%8E%BB%E4%BA%86%23) `223.9K 🔥` `NEW`
1. [上海这面镜子让浦东非常曼哈顿](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%99%E9%9D%A2%E9%95%9C%E5%AD%90%E8%AE%A9%E6%B5%A6%E4%B8%9C%E9%9D%9E%E5%B8%B8%E6%9B%BC%E5%93%88%E9%A1%BF%23) `219.9K 🔥` `NEW`
1. [俄罗斯32座最大炼油厂中28座遭袭](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF32%E5%BA%A7%E6%9C%80%E5%A4%A7%E7%82%BC%E6%B2%B9%E5%8E%82%E4%B8%AD28%E5%BA%A7%E9%81%AD%E8%A2%AD%23) `214.1K 🔥` `NEW`
1. [韩国短道速滑运动员ins发了讣告](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E8%BF%90%E5%8A%A8%E5%91%98ins%E5%8F%91%E4%BA%86%E8%AE%A3%E5%91%8A%23) `213.5K 🔥` `NEW`
1. [王者三丽鸥家族联动CG](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E4%B8%89%E4%B8%BD%E9%B8%A5%E5%AE%B6%E6%97%8F%E8%81%94%E5%8A%A8CG%23) `208.0K 🔥` `NEW`
1. [太漂亮被质疑化妆了的刘仁娜](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E6%BC%82%E4%BA%AE%E8%A2%AB%E8%B4%A8%E7%96%91%E5%8C%96%E5%A6%86%E4%BA%86%E7%9A%84%E5%88%98%E4%BB%81%E5%A8%9C%23) `207.3K 🔥` `NEW`
1. [王楚钦孙颖莎 亚运混双](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%20%E4%BA%9A%E8%BF%90%E6%B7%B7%E5%8F%8C%23) `198.6K 🔥` `NEW`
1. [林锦岐大婚没人迎亲](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E5%A4%A7%E5%A9%9A%E6%B2%A1%E4%BA%BA%E8%BF%8E%E4%BA%B2%23) `196.0K 🔥` `NEW`
1. [瑞士没有一张椅子是乱放的](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%AB%E6%B2%A1%E6%9C%89%E4%B8%80%E5%BC%A0%E6%A4%85%E5%AD%90%E6%98%AF%E4%B9%B1%E6%94%BE%E7%9A%84%23) `194.3K 🔥` `NEW`
1. [姚景元祝刘耀文生日快乐](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E6%99%AF%E5%85%83%E7%A5%9D%E5%88%98%E8%80%80%E6%96%87%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90%23) `193.2K 🔥` `NEW`
1. [今天亚运会决出33金](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%86%B3%E5%87%BA33%E9%87%91%23) `190.1K 🔥` `NEW`
1. [13岁女孩被强奸有民警劝拿钱调解](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%A2%AB%E5%BC%BA%E5%A5%B8%E6%9C%89%E6%B0%91%E8%AD%A6%E5%8A%9D%E6%8B%BF%E9%92%B1%E8%B0%83%E8%A7%A3%23) `145.1K 🔥` `NEW`
1. [孙膑帕恰狗之风新皮肤](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%86%91%E5%B8%95%E6%81%B0%E7%8B%97%E4%B9%8B%E9%A3%8E%E6%96%B0%E7%9A%AE%E8%82%A4%23) `139.2K 🔥` `NEW`
1. [婚床里的早生贵子袋16年后才被发现](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%BA%8A%E9%87%8C%E7%9A%84%E6%97%A9%E7%94%9F%E8%B4%B5%E5%AD%90%E8%A2%8B16%E5%B9%B4%E5%90%8E%E6%89%8D%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `137.8K 🔥` `NEW`
1. [罚没收入是地方营商环境的硬指标](https://s.weibo.com/weibo?q=%23%E7%BD%9A%E6%B2%A1%E6%94%B6%E5%85%A5%E6%98%AF%E5%9C%B0%E6%96%B9%E8%90%A5%E5%95%86%E7%8E%AF%E5%A2%83%E7%9A%84%E7%A1%AC%E6%8C%87%E6%A0%87%23) `135.8K 🔥` `NEW`
1. [山姆偶遇梓渝](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%81%B6%E9%81%87%E6%A2%93%E6%B8%9D%23) `133.0K 🔥` `NEW`
1. [今年中秋节我就不回家了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E4%B8%AD%E7%A7%8B%E8%8A%82%E6%88%91%E5%B0%B1%E4%B8%8D%E5%9B%9E%E5%AE%B6%E4%BA%86%23) `870.2K 🔥` `+1261%`
1. [吴磊同款华为WATCH 6系列开售](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E5%90%8C%E6%AC%BE%E5%8D%8E%E4%B8%BAWATCH%206%E7%B3%BB%E5%88%97%E5%BC%80%E5%94%AE%23) `725.4K 🔥` `+1011%`
1. [日本女排颁奖礼全员黑脸](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%8E%92%E9%A2%81%E5%A5%96%E7%A4%BC%E5%85%A8%E5%91%98%E9%BB%91%E8%84%B8%23) `493.5K 🔥` `+325%`
1. [孙尚香新皮肤双形态](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%B0%9A%E9%A6%99%E6%96%B0%E7%9A%AE%E8%82%A4%E5%8F%8C%E5%BD%A2%E6%80%81%23) `461.7K 🔥` `+299%`
1. [汪顺400混的含金量](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E9%A1%BA400%E6%B7%B7%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `369.2K 🔥` `+87%`
1. [王皓质问林诗栋](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E8%B4%A8%E9%97%AE%E6%9E%97%E8%AF%97%E6%A0%8B%23) `343.2K 🔥` `+193%`
1. [迪丽热巴男粉握手后捂脸跑下台](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%94%B7%E7%B2%89%E6%8F%A1%E6%89%8B%E5%90%8E%E6%8D%82%E8%84%B8%E8%B7%91%E4%B8%8B%E5%8F%B0%23) `319.4K 🔥` `+96%`
1. [杨幂回复李现](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%9B%9E%E5%A4%8D%E6%9D%8E%E7%8E%B0%23) `316.2K 🔥` `+62%`
1. [张家齐妈妈拒绝返还存款涉嫌违法](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E6%8B%92%E7%BB%9D%E8%BF%94%E8%BF%98%E5%AD%98%E6%AC%BE%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `302.0K 🔥` `+163%`
1. [是吕蕺儿告诉林兰香真相的](https://s.weibo.com/weibo?q=%23%E6%98%AF%E5%90%95%E8%95%BA%E5%84%BF%E5%91%8A%E8%AF%89%E6%9E%97%E5%85%B0%E9%A6%99%E7%9C%9F%E7%9B%B8%E7%9A%84%23) `285.8K 🔥` `+115%`
1. [网友出差把狗扔给爸妈狗累成狗了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%87%BA%E5%B7%AE%E6%8A%8A%E7%8B%97%E6%89%94%E7%BB%99%E7%88%B8%E5%A6%88%E7%8B%97%E7%B4%AF%E6%88%90%E7%8B%97%E4%BA%86%23) `261.5K 🔥` `+287%`
1. [事实证明女儿颜值由爸爸决定](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E5%AE%9E%E8%AF%81%E6%98%8E%E5%A5%B3%E5%84%BF%E9%A2%9C%E5%80%BC%E7%94%B1%E7%88%B8%E7%88%B8%E5%86%B3%E5%AE%9A%23) `212.5K 🔥` `+240%`
1. [小米18Pro系列](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E7%B3%BB%E5%88%97%23) `190.5K 🔥` `+278%`
1. [原来穷的叮当响是这个意思](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%A9%B7%E7%9A%84%E5%8F%AE%E5%BD%93%E5%93%8D%E6%98%AF%E8%BF%99%E4%B8%AA%E6%84%8F%E6%80%9D%23) `190.0K 🔥` `+181%`
1. [喜人奇妙夜](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%BA%BA%E5%A5%87%E5%A6%99%E5%A4%9C%23) `176.7K 🔥` `+99%`
1. [亚运乒乓球混双](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%B9%92%E4%B9%93%E7%90%83%E6%B7%B7%E5%8F%8C%23) `174.8K 🔥` `+121%`
1. [何炅到吴昕家进门就先预定了客卧](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E5%88%B0%E5%90%B4%E6%98%95%E5%AE%B6%E8%BF%9B%E9%97%A8%E5%B0%B1%E5%85%88%E9%A2%84%E5%AE%9A%E4%BA%86%E5%AE%A2%E5%8D%A7%23) `151.5K 🔥` `+164%`
1. [TFBOYS七周年是线上](https://s.weibo.com/weibo?q=%23TFBOYS%E4%B8%83%E5%91%A8%E5%B9%B4%E6%98%AF%E7%BA%BF%E4%B8%8A%23) `149.4K 🔥` `+121%`
1. [苹果不建议给iPhone贴膜](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E4%B8%8D%E5%BB%BA%E8%AE%AE%E7%BB%99iPhone%E8%B4%B4%E8%86%9C%23) `312.1K 🔥` `-36%`

Updated at 2026-09-23 09:16:32

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
