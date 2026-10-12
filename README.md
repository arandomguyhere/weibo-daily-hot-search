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

1. [中国护肤科研向世界再进一步](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%8A%A4%E8%82%A4%E7%A7%91%E7%A0%94%E5%90%91%E4%B8%96%E7%95%8C%E5%86%8D%E8%BF%9B%E4%B8%80%E6%AD%A5%23) `586.1K 🔥` `NEW`
1. [第一次知道汉语拼音的由来](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9F%A5%E9%81%93%E6%B1%89%E8%AF%AD%E6%8B%BC%E9%9F%B3%E7%9A%84%E7%94%B1%E6%9D%A5%23) `459.2K 🔥` `NEW`
1. [性压抑和性羞耻都会向外投射](https://s.weibo.com/weibo?q=%23%E6%80%A7%E5%8E%8B%E6%8A%91%E5%92%8C%E6%80%A7%E7%BE%9E%E8%80%BB%E9%83%BD%E4%BC%9A%E5%90%91%E5%A4%96%E6%8A%95%E5%B0%84%23) `401.7K 🔥` `NEW`
1. [林俊杰对七七说不要害羞](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%AF%B9%E4%B8%83%E4%B8%83%E8%AF%B4%E4%B8%8D%E8%A6%81%E5%AE%B3%E7%BE%9E%23) `399.7K 🔥` `NEW`
1. [侯明昊工作室 别扯了单身勿扰](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%88%AB%E6%89%AF%E4%BA%86%E5%8D%95%E8%BA%AB%E5%8B%BF%E6%89%B0%23) `398.0K 🔥` `NEW`
1. [短剧男演员凭什么日薪五六万](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E7%94%B7%E6%BC%94%E5%91%98%E5%87%AD%E4%BB%80%E4%B9%88%E6%97%A5%E8%96%AA%E4%BA%94%E5%85%AD%E4%B8%87%23) `395.8K 🔥` `NEW`
1. [我变成了那晚的母亲](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%8F%98%E6%88%90%E4%BA%86%E9%82%A3%E6%99%9A%E7%9A%84%E6%AF%8D%E4%BA%B2%23) `392.4K 🔥` `NEW`
1. [腾讯史上破2w7的综艺](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%8F%B2%E4%B8%8A%E7%A0%B42w7%E7%9A%84%E7%BB%BC%E8%89%BA%23) `391.8K 🔥` `NEW`
1. [郑钦文的商业价值有多高](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%9A%84%E5%95%86%E4%B8%9A%E4%BB%B7%E5%80%BC%E6%9C%89%E5%A4%9A%E9%AB%98%23) `390.8K 🔥` `NEW`
1. [郑钦文调皮摘掉爸爸帽子露出光头](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%B0%83%E7%9A%AE%E6%91%98%E6%8E%89%E7%88%B8%E7%88%B8%E5%B8%BD%E5%AD%90%E9%9C%B2%E5%87%BA%E5%85%89%E5%A4%B4%23) `388.8K 🔥` `NEW`
1. [真的建议大家要对钱有概念](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%A6%81%E5%AF%B9%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `387.3K 🔥` `NEW`
1. [双胞胎只有彼此才是自由](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E5%8F%AA%E6%9C%89%E5%BD%BC%E6%AD%A4%E6%89%8D%E6%98%AF%E8%87%AA%E7%94%B1%23) `386.6K 🔥` `NEW`
1. [玉簟秋原著](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8B%E5%8E%9F%E8%91%97%23) `302.0K 🔥` `NEW`
1. [网红小玥去世男友发讣告](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E7%8E%A5%E5%8E%BB%E4%B8%96%E7%94%B7%E5%8F%8B%E5%8F%91%E8%AE%A3%E5%91%8A%23) `263.6K 🔥` `NEW`
1. [松岛辉空王曼昱长大了怎么不笑了](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E7%8E%8B%E6%9B%BC%E6%98%B1%E9%95%BF%E5%A4%A7%E4%BA%86%E6%80%8E%E4%B9%88%E4%B8%8D%E7%AC%91%E4%BA%86%23) `250.0K 🔥` `NEW`
1. [马化腾带28岁青年与省委书记座谈](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%8C%96%E8%85%BE%E5%B8%A628%E5%B2%81%E9%9D%92%E5%B9%B4%E4%B8%8E%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0%E5%BA%A7%E8%B0%88%23) `241.4K 🔥` `NEW`
1. [刘浩存舞台行公主礼](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E8%88%9E%E5%8F%B0%E8%A1%8C%E5%85%AC%E4%B8%BB%E7%A4%BC%23) `218.1K 🔥` `NEW`
1. [侯明昊卢昱晓 观鹤笔记](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%8D%A2%E6%98%B1%E6%99%93%20%E8%A7%82%E9%B9%A4%E7%AC%94%E8%AE%B0%23) `210.2K 🔥` `NEW`
1. [郑钦文教练祝贺她开演唱会](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%95%99%E7%BB%83%E7%A5%9D%E8%B4%BA%E5%A5%B9%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `197.7K 🔥` `NEW`
1. [林俊杰七七牵手退场](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%B8%83%E4%B8%83%E7%89%B5%E6%89%8B%E9%80%80%E5%9C%BA%23) `182.9K 🔥` `NEW`
1. [郑钦文夺冠采访](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%A4%BA%E5%86%A0%E9%87%87%E8%AE%BF%23) `169.1K 🔥` `NEW`
1. [撒贝宁龙凤胎身高遗传了妈妈李白](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%E9%BE%99%E5%87%A4%E8%83%8E%E8%BA%AB%E9%AB%98%E9%81%97%E4%BC%A0%E4%BA%86%E5%A6%88%E5%A6%88%E6%9D%8E%E7%99%BD%23) `158.5K 🔥` `NEW`
1. [男子国庆旷工4天遭开除起诉被驳回](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%BD%E5%BA%86%E6%97%B7%E5%B7%A54%E5%A4%A9%E9%81%AD%E5%BC%80%E9%99%A4%E8%B5%B7%E8%AF%89%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `155.7K 🔥` `NEW`
1. [国乒团队全体起立为王曼昱鼓掌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%9B%A2%E9%98%9F%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%E4%B8%BA%E7%8E%8B%E6%9B%BC%E6%98%B1%E9%BC%93%E6%8E%8C%23) `129.4K 🔥` `NEW`
1. [沙特误判了](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9%E8%AF%AF%E5%88%A4%E4%BA%86%23) `123.8K 🔥` `NEW`
1. [霸王茶姬买一送一](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E4%B9%B0%E4%B8%80%E9%80%81%E4%B8%80%23) `2.0M 🔥` `+734%`
1. [郑钦文晒图庆祝夺冠](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%99%92%E5%9B%BE%E5%BA%86%E7%A5%9D%E5%A4%BA%E5%86%A0%23) `982.2K 🔥` `+662%`
1. [本周这些数据值得关注](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23) `858.7K 🔥` `+507%`
1. [记者暗访有偿陪伴服务](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E6%9A%97%E8%AE%BF%E6%9C%89%E5%81%BF%E9%99%AA%E4%BC%B4%E6%9C%8D%E5%8A%A1%23) `831.0K 🔥` `+369%`
1. [女孩去马来西亚高薪工作后失联](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%8E%BB%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E9%AB%98%E8%96%AA%E5%B7%A5%E4%BD%9C%E5%90%8E%E5%A4%B1%E8%81%94%23) `651.3K 🔥` `+1638%`
1. [央视曝投资1.2亿项目仅建5个棚](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E6%8A%95%E8%B5%841.2%E4%BA%BF%E9%A1%B9%E7%9B%AE%E4%BB%85%E5%BB%BA5%E4%B8%AA%E6%A3%9A%23) `635.6K 🔥` `+946%`
1. [李娜 郑钦文](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%A8%9C%20%E9%83%91%E9%92%A6%E6%96%87%23) `558.3K 🔥` `+518%`
1. [郑钦文收获明年澳网的种子席位](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%94%B6%E8%8E%B7%E6%98%8E%E5%B9%B4%E6%BE%B3%E7%BD%91%E7%9A%84%E7%A7%8D%E5%AD%90%E5%B8%AD%E4%BD%8D%23) `477.0K 🔥` `+696%`
1. [关晓彤回应去宋雨琦演唱会](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%9B%9E%E5%BA%94%E5%8E%BB%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `401.7K 🔥` `+512%`
1. [社保](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%23) `396.9K 🔥` `+562%`
1. [身高2.2米巨人网红小玥去世](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E9%AB%982.2%E7%B1%B3%E5%B7%A8%E4%BA%BA%E7%BD%91%E7%BA%A2%E5%B0%8F%E7%8E%A5%E5%8E%BB%E4%B8%96%23) `393.3K 🔥` `+344%`
1. [周鸿祎攀岩从3米高处摔下](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%B8%BF%E7%A5%8E%E6%94%80%E5%B2%A9%E4%BB%8E3%E7%B1%B3%E9%AB%98%E5%A4%84%E6%91%94%E4%B8%8B%23) `390.3K 🔥` `+1230%`
1. [被骗缅北女孩遭遇惨不忍睹](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%AA%97%E7%BC%85%E5%8C%97%E5%A5%B3%E5%AD%A9%E9%81%AD%E9%81%87%E6%83%A8%E4%B8%8D%E5%BF%8D%E7%9D%B9%23) `388.0K 🔥` `+792%`
1. [恋爱要找大方的男朋友](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%88%B1%E8%A6%81%E6%89%BE%E5%A4%A7%E6%96%B9%E7%9A%84%E7%94%B7%E6%9C%8B%E5%8F%8B%23) `360.7K 🔥` `+948%`
1. [身上出现这样的红点要警惕](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%B8%8A%E5%87%BA%E7%8E%B0%E8%BF%99%E6%A0%B7%E7%9A%84%E7%BA%A2%E7%82%B9%E8%A6%81%E8%AD%A6%E6%83%95%23) `267.1K 🔥` `+518%`
1. [老护士辞职后儿科投诉翻倍](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%8A%A4%E5%A3%AB%E8%BE%9E%E8%81%8C%E5%90%8E%E5%84%BF%E7%A7%91%E6%8A%95%E8%AF%89%E7%BF%BB%E5%80%8D%23) `232.8K 🔥` `+288%`
1. [郑钦文就差一个大满贯冠军了](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%B0%B1%E5%B7%AE%E4%B8%80%E4%B8%AA%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%86%A0%E5%86%9B%E4%BA%86%23) `229.9K 🔥` `+256%`
1. [中国女性传统坐姿松弛张扬](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%80%A7%E4%BC%A0%E7%BB%9F%E5%9D%90%E5%A7%BF%E6%9D%BE%E5%BC%9B%E5%BC%A0%E6%89%AC%23) `226.9K 🔥` `+341%`
1. [网传缅北诈骗盯上泰百粉丝](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%BC%85%E5%8C%97%E8%AF%88%E9%AA%97%E7%9B%AF%E4%B8%8A%E6%B3%B0%E7%99%BE%E7%B2%89%E4%B8%9D%23) `159.3K 🔥` `+166%`
1. [李九 AG](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%9D%20AG%23) `153.6K 🔥` `+246%`
1. [婚姻不是年龄到了就该结](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A7%BB%E4%B8%8D%E6%98%AF%E5%B9%B4%E9%BE%84%E5%88%B0%E4%BA%86%E5%B0%B1%E8%AF%A5%E7%BB%93%23) `148.2K 🔥` `+333%`
1. [2.2米去世女网红小玥曾被查出脑瘤](https://s.weibo.com/weibo?q=%232.2%E7%B1%B3%E5%8E%BB%E4%B8%96%E5%A5%B3%E7%BD%91%E7%BA%A2%E5%B0%8F%E7%8E%A5%E6%9B%BE%E8%A2%AB%E6%9F%A5%E5%87%BA%E8%84%91%E7%98%A4%23) `144.5K 🔥` `+435%`
1. [杭州限狗令白天遛狗罚款](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%99%90%E7%8B%97%E4%BB%A4%E7%99%BD%E5%A4%A9%E9%81%9B%E7%8B%97%E7%BD%9A%E6%AC%BE%23) `140.9K 🔥` `+27%`
1. [成熟后才知道品味毫无意义](https://s.weibo.com/weibo?q=%23%E6%88%90%E7%86%9F%E5%90%8E%E6%89%8D%E7%9F%A5%E9%81%93%E5%93%81%E5%91%B3%E6%AF%AB%E6%97%A0%E6%84%8F%E4%B9%89%23) `137.3K 🔥` `+380%`
1. [印度男同事女友是六边形战士](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%90%8C%E4%BA%8B%E5%A5%B3%E5%8F%8B%E6%98%AF%E5%85%AD%E8%BE%B9%E5%BD%A2%E6%88%98%E5%A3%AB%23) `128.6K 🔥` `+273%`
1. [刘学义林锦岐告别兰香](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%9E%97%E9%94%A6%E5%B2%90%E5%91%8A%E5%88%AB%E5%85%B0%E9%A6%99%23) `124.6K 🔥` `+260%`

Updated at 2026-10-12 08:48:28

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
