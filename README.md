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

1. [南航 西梅汁 (China Southern Airlines prune juice)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E8%88%AA%20%E8%A5%BF%E6%A2%85%E6%B1%81%23) `3.6M 🔥` `NEW`
1. [曝念相思停拍换男主](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%81%9C%E6%8B%8D%E6%8D%A2%E7%94%B7%E4%B8%BB%23) `1.5M 🔥` `NEW`
1. [央视把音乐会开到了珠江上](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%8A%8A%E9%9F%B3%E4%B9%90%E4%BC%9A%E5%BC%80%E5%88%B0%E4%BA%86%E7%8F%A0%E6%B1%9F%E4%B8%8A%23) `683.6K 🔥` `NEW`
1. [不要空腹吃龙口粉丝](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%A9%BA%E8%85%B9%E5%90%83%E9%BE%99%E5%8F%A3%E7%B2%89%E4%B8%9D%23) `637.6K 🔥` `NEW`
1. [清融在线求剧透九门](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%E5%9C%A8%E7%BA%BF%E6%B1%82%E5%89%A7%E9%80%8F%E4%B9%9D%E9%97%A8%23) `337.7K 🔥` `NEW`
1. [iPhone18Pro系列价格预测](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%B3%BB%E5%88%97%E4%BB%B7%E6%A0%BC%E9%A2%84%E6%B5%8B%23) `336.7K 🔥` `NEW`
1. [虞书欣工作室晒小兰花未公开照](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%99%92%E5%B0%8F%E5%85%B0%E8%8A%B1%E6%9C%AA%E5%85%AC%E5%BC%80%E7%85%A7%23) `327.6K 🔥` `NEW`
1. [影视寒冬 进组难](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%20%E8%BF%9B%E7%BB%84%E9%9A%BE%23) `295.7K 🔥` `NEW`
1. [最尊重立秋的城市出现了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%B0%8A%E9%87%8D%E7%AB%8B%E7%A7%8B%E7%9A%84%E5%9F%8E%E5%B8%82%E5%87%BA%E7%8E%B0%E4%BA%86%23) `288.2K 🔥` `NEW`
1. [王楚钦被赞现象级超级巨星](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%A2%AB%E8%B5%9E%E7%8E%B0%E8%B1%A1%E7%BA%A7%E8%B6%85%E7%BA%A7%E5%B7%A8%E6%98%9F%23) `287.3K 🔥` `NEW`
1. [高速飞来轮胎致车主昏迷爱车独自完成全套救援 (A tire flew in at high speed, causing the car owner to fall into coma. The car completed a complete rescue operation alone)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E9%A3%9E%E6%9D%A5%E8%BD%AE%E8%83%8E%E8%87%B4%E8%BD%A6%E4%B8%BB%E6%98%8F%E8%BF%B7%E7%88%B1%E8%BD%A6%E7%8B%AC%E8%87%AA%E5%AE%8C%E6%88%90%E5%85%A8%E5%A5%97%E6%95%91%E6%8F%B4%23) `286.2K 🔥` `NEW`
1. [取消私生子继承权你支持吗](https://s.weibo.com/weibo?q=%23%E5%8F%96%E6%B6%88%E7%A7%81%E7%94%9F%E5%AD%90%E7%BB%A7%E6%89%BF%E6%9D%83%E4%BD%A0%E6%94%AF%E6%8C%81%E5%90%97%23) `275.1K 🔥` `NEW`
1. [原来这就是抑郁躯体化](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E6%8A%91%E9%83%81%E8%BA%AF%E4%BD%93%E5%8C%96%23) `267.5K 🔥` `NEW`
1. [林大厨被王俊凯气得下蹲](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%A4%A7%E5%8E%A8%E8%A2%AB%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%B0%94%E5%BE%97%E4%B8%8B%E8%B9%B2%23) `260.1K 🔥` `NEW`
1. [河南回应带薪错峰休假通知引争议](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%9B%9E%E5%BA%94%E5%B8%A6%E8%96%AA%E9%94%99%E5%B3%B0%E4%BC%91%E5%81%87%E9%80%9A%E7%9F%A5%E5%BC%95%E4%BA%89%E8%AE%AE%23) `257.1K 🔥` `NEW`
1. [念相思](https://s.weibo.com/weibo?q=%23%E5%BF%B5%E7%9B%B8%E6%80%9D%23) `253.7K 🔥` `NEW`
1. [情侣酒店熟睡遭陌生男闯入站床前](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E9%85%92%E5%BA%97%E7%86%9F%E7%9D%A1%E9%81%AD%E9%99%8C%E7%94%9F%E7%94%B7%E9%97%AF%E5%85%A5%E7%AB%99%E5%BA%8A%E5%89%8D%23) `238.3K 🔥` `NEW`
1. [客人喜欢张雅琪的菜品介绍](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E4%BA%BA%E5%96%9C%E6%AC%A2%E5%BC%A0%E9%9B%85%E7%90%AA%E7%9A%84%E8%8F%9C%E5%93%81%E4%BB%8B%E7%BB%8D%23) `236.4K 🔥` `NEW`
1. [佛爷垂直入坑是陈伟霆设计的](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E7%88%B7%E5%9E%82%E7%9B%B4%E5%85%A5%E5%9D%91%E6%98%AF%E9%99%88%E4%BC%9F%E9%9C%86%E8%AE%BE%E8%AE%A1%E7%9A%84%23) `232.1K 🔥` `NEW`
1. [短剧 男凝](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%20%E7%94%B7%E5%87%9D%23) `230.5K 🔥` `NEW`
1. [赖伟明少男心事藏不住了 (Young man Lai Weiming can't hide his worries anymore)](https://s.weibo.com/weibo?q=%23%E8%B5%96%E4%BC%9F%E6%98%8E%E5%B0%91%E7%94%B7%E5%BF%83%E4%BA%8B%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `229.4K 🔥` `NEW`
1. [ai漫剧上桌了](https://s.weibo.com/weibo?q=%23ai%E6%BC%AB%E5%89%A7%E4%B8%8A%E6%A1%8C%E4%BA%86%23) `224.4K 🔥` `NEW`
1. [立秋第一杯奶茶的受益者出现了](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E7%A7%8B%E7%AC%AC%E4%B8%80%E6%9D%AF%E5%A5%B6%E8%8C%B6%E7%9A%84%E5%8F%97%E7%9B%8A%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `218.7K 🔥` `NEW`
1. [前7个月货物贸易进出口超30万亿元](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E4%B8%AA%E6%9C%88%E8%B4%A7%E7%89%A9%E8%B4%B8%E6%98%93%E8%BF%9B%E5%87%BA%E5%8F%A3%E8%B6%8530%E4%B8%87%E4%BA%BF%E5%85%83%23) `920.1K 🔥` `+23%`
1. [俄军28枚导弹全部突破乌防线 (All 28 Russian missiles broke through Ukraine’s defense line)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%86%9B28%E6%9E%9A%E5%AF%BC%E5%BC%B9%E5%85%A8%E9%83%A8%E7%AA%81%E7%A0%B4%E4%B9%8C%E9%98%B2%E7%BA%BF%23) `219.9K 🔥` `+26%`
1. [奶茶店爆单近400杯店员7点开始摇奶茶](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E8%8C%B6%E5%BA%97%E7%88%86%E5%8D%95%E8%BF%91400%E6%9D%AF%E5%BA%97%E5%91%987%E7%82%B9%E5%BC%80%E5%A7%8B%E6%91%87%E5%A5%B6%E8%8C%B6%23) `218.3K 🔥` `+25%`
1. [张雅琪晒中餐厅10图](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E6%99%92%E4%B8%AD%E9%A4%90%E5%8E%8510%E5%9B%BE%23) `875.8K 🔥`
1. [现在的小学生已经是庞然大物了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%B7%B2%E7%BB%8F%E6%98%AF%E5%BA%9E%E7%84%B6%E5%A4%A7%E7%89%A9%E4%BA%86%23) `721.2K 🔥`
1. [星巴克 秋天第一场商战 (Starbucks first business war in autumn)](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%20%E7%A7%8B%E5%A4%A9%E7%AC%AC%E4%B8%80%E5%9C%BA%E5%95%86%E6%88%98%23) `423.7K 🔥`
1. [建议成立中国稀土出口总公司总部设新疆 (It is recommended to establish China Rare Earth Export Corporation with its headquarters in Xinjiang)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%88%90%E7%AB%8B%E4%B8%AD%E5%9B%BD%E7%A8%80%E5%9C%9F%E5%87%BA%E5%8F%A3%E6%80%BB%E5%85%AC%E5%8F%B8%E6%80%BB%E9%83%A8%E8%AE%BE%E6%96%B0%E7%96%86%23) `281.3K 🔥`
1. [西村力大吧发长文回应 (Nishimuralidaba posted a long response)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E5%A4%A7%E5%90%A7%E5%8F%91%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%23) `213.1K 🔥`
1. [ai漫剧男主唯一塌房方式被找到了 (The only way for the hero of the AI ​​​​comic drama to collapse his house has been found)](https://s.weibo.com/weibo?q=%23ai%E6%BC%AB%E5%89%A7%E7%94%B7%E4%B8%BB%E5%94%AF%E4%B8%80%E5%A1%8C%E6%88%BF%E6%96%B9%E5%BC%8F%E8%A2%AB%E6%89%BE%E5%88%B0%E4%BA%86%23) `767.9K 🔥` `-51%`
1. [曝念相思停拍 男女主不和](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%81%9C%E6%8B%8D%20%E7%94%B7%E5%A5%B3%E4%B8%BB%E4%B8%8D%E5%92%8C%23) `333.2K 🔥` `-30%`
1. [泸溪河牙冠事件消费者已致歉 (Consumers have apologized for the Luxihe dental crown incident)](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%E7%89%99%E5%86%A0%E4%BA%8B%E4%BB%B6%E6%B6%88%E8%B4%B9%E8%80%85%E5%B7%B2%E8%87%B4%E6%AD%89%23) `313.1K 🔥` `-66%`
1. [好演员从不无缝进组](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%BC%94%E5%91%98%E4%BB%8E%E4%B8%8D%E6%97%A0%E7%BC%9D%E8%BF%9B%E7%BB%84%23) `306.6K 🔥` `-48%`
1. [泰国校园枪击已致7死](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%A0%A1%E5%9B%AD%E6%9E%AA%E5%87%BB%E5%B7%B2%E8%87%B47%E6%AD%BB%23) `286.4K 🔥` `-30%`
1. [你上班银行上班你午休银行午休 (You work at the bank. You work at the bank. You have a lunch break. The bank has a lunch break.)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B8%8A%E7%8F%AD%E9%93%B6%E8%A1%8C%E4%B8%8A%E7%8F%AD%E4%BD%A0%E5%8D%88%E4%BC%91%E9%93%B6%E8%A1%8C%E5%8D%88%E4%BC%91%23) `285.1K 🔥` `-58%`
1. [Mina同学发声 (Mina classmate speaks out)](https://s.weibo.com/weibo?q=%23Mina%E5%90%8C%E5%AD%A6%E5%8F%91%E5%A3%B0%23) `283.7K 🔥` `-51%`
1. [戚薇AI短剧 雷霆视角](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87AI%E7%9F%AD%E5%89%A7%20%E9%9B%B7%E9%9C%86%E8%A7%86%E8%A7%92%23) `282.6K 🔥` `-61%`
1. [韩国被爆性贿赂世预赛裁判](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%A2%AB%E7%88%86%E6%80%A7%E8%B4%BF%E8%B5%82%E4%B8%96%E9%A2%84%E8%B5%9B%E8%A3%81%E5%88%A4%23) `282.4K 🔥` `-57%`
1. [吴倩女儿长这么大了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E5%A5%B3%E5%84%BF%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `270.0K 🔥` `-45%`
1. [提离职被知道要裁员的领导硬留下 (I resigned but was forced to stay by my boss who knew he was going to lay off employees.)](https://s.weibo.com/weibo?q=%23%E6%8F%90%E7%A6%BB%E8%81%8C%E8%A2%AB%E7%9F%A5%E9%81%93%E8%A6%81%E8%A3%81%E5%91%98%E7%9A%84%E9%A2%86%E5%AF%BC%E7%A1%AC%E7%95%99%E4%B8%8B%23) `252.1K 🔥` `-64%`
1. [情绪冷漠症](https://s.weibo.com/weibo?q=%23%E6%83%85%E7%BB%AA%E5%86%B7%E6%BC%A0%E7%97%87%23) `249.6K 🔥` `-40%`
1. [女儿卖房定价9000被母亲7500签约](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%8D%96%E6%88%BF%E5%AE%9A%E4%BB%B79000%E8%A2%AB%E6%AF%8D%E4%BA%B27500%E7%AD%BE%E7%BA%A6%23) `244.8K 🔥` `-41%`
1. [云南茶园发现眼镜王蛇一家38口](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E8%8C%B6%E5%9B%AD%E5%8F%91%E7%8E%B0%E7%9C%BC%E9%95%9C%E7%8E%8B%E8%9B%87%E4%B8%80%E5%AE%B638%E5%8F%A3%23) `243.0K 🔥` `-24%`
1. [老中医提醒立秋一定要管住嘴 (An old Chinese medicine practitioner reminds you to keep your mouth shut at the beginning of autumn)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%AD%E5%8C%BB%E6%8F%90%E9%86%92%E7%AB%8B%E7%A7%8B%E4%B8%80%E5%AE%9A%E8%A6%81%E7%AE%A1%E4%BD%8F%E5%98%B4%23) `237.6K 🔥` `-25%`
1. [宜宾地震](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%23) `229.1K 🔥` `-47%`
1. [BLACKPINK全员确认出席十周年](https://s.weibo.com/weibo?q=%23BLACKPINK%E5%85%A8%E5%91%98%E7%A1%AE%E8%AE%A4%E5%87%BA%E5%B8%AD%E5%8D%81%E5%91%A8%E5%B9%B4%23) `223.1K 🔥` `-37%`
1. [于适 平儿都长这么大了](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%20%E5%B9%B3%E5%84%BF%E9%83%BD%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `221.5K 🔥` `-45%`
1. [戚薇 授权AI (Qi Wei authorized AI)](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%20%E6%8E%88%E6%9D%83AI%23) `219.8K 🔥` `-32%`
1. [刘若雪方辟谣与周杰伦私生子传闻](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%8B%A5%E9%9B%AA%E6%96%B9%E8%BE%9F%E8%B0%A3%E4%B8%8E%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%A7%81%E7%94%9F%E5%AD%90%E4%BC%A0%E9%97%BB%23) `218.0K 🔥` `-49%`

Updated at 2026-08-07 16:41:44

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
