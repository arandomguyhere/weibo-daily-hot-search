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

1. [老莫因1000只鸡没地方放拒绝温氏 (Lao Mo refused Wen because he had no place to put 1,000 chickens.)](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%8E%AB%E5%9B%A01000%E5%8F%AA%E9%B8%A1%E6%B2%A1%E5%9C%B0%E6%96%B9%E6%94%BE%E6%8B%92%E7%BB%9D%E6%B8%A9%E6%B0%8F%23) `255.9K 🔥` `NEW`
1. [马斯克版微信XChat将上线](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%89%88%E5%BE%AE%E4%BF%A1XChat%E5%B0%86%E4%B8%8A%E7%BA%BF%23) `204.3K 🔥` `NEW`
1. [内塔尼亚胡说与伊停火可能很快结束](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E8%AF%B4%E4%B8%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E5%8F%AF%E8%83%BD%E5%BE%88%E5%BF%AB%E7%BB%93%E6%9D%9F%23) `125.2K 🔥` `NEW`
1. [眉姐姐斓曦怎么了](https://s.weibo.com/weibo?q=%23%E7%9C%89%E5%A7%90%E5%A7%90%E6%96%93%E6%9B%A6%E6%80%8E%E4%B9%88%E4%BA%86%23) `124.2K 🔥` `NEW`
1. [伊朗要求五个中东国家赔偿损失](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A6%81%E6%B1%82%E4%BA%94%E4%B8%AA%E4%B8%AD%E4%B8%9C%E5%9B%BD%E5%AE%B6%E8%B5%94%E5%81%BF%E6%8D%9F%E5%A4%B1%23) `123.4K 🔥` `NEW`
1. [松岛美空用孙颖莎合影做头像](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E7%BE%8E%E7%A9%BA%E7%94%A8%E5%AD%99%E9%A2%96%E8%8E%8E%E5%90%88%E5%BD%B1%E5%81%9A%E5%A4%B4%E5%83%8F%23) `122.5K 🔥` `NEW`
1. [男乘客疑拍打空姐臀部被带离机舱](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B9%98%E5%AE%A2%E7%96%91%E6%8B%8D%E6%89%93%E7%A9%BA%E5%A7%90%E8%87%80%E9%83%A8%E8%A2%AB%E5%B8%A6%E7%A6%BB%E6%9C%BA%E8%88%B1%23) `122.3K 🔥` `NEW`
1. [文章面馆排长队顾客发声](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E9%9D%A2%E9%A6%86%E6%8E%92%E9%95%BF%E9%98%9F%E9%A1%BE%E5%AE%A2%E5%8F%91%E5%A3%B0%23) `121.4K 🔥` `NEW`
1. [向涵之吸烟路透](https://s.weibo.com/weibo?q=%23%E5%90%91%E6%B6%B5%E4%B9%8B%E5%90%B8%E7%83%9F%E8%B7%AF%E9%80%8F%23) `120.2K 🔥` `NEW`
1. [男子开车碾死大伯已被刑拘](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BC%80%E8%BD%A6%E7%A2%BE%E6%AD%BB%E5%A4%A7%E4%BC%AF%E5%B7%B2%E8%A2%AB%E5%88%91%E6%8B%98%23) `115.7K 🔥` `NEW`
1. [特朗普称或对古巴采取行动 (Trump says he may take action against Cuba)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E6%88%96%E5%AF%B9%E5%8F%A4%E5%B7%B4%E9%87%87%E5%8F%96%E8%A1%8C%E5%8A%A8%23) `115.6K 🔥` `NEW`
1. [致男孩气管断裂老人该承担什么责任](https://s.weibo.com/weibo?q=%23%E8%87%B4%E7%94%B7%E5%AD%A9%E6%B0%94%E7%AE%A1%E6%96%AD%E8%A3%82%E8%80%81%E4%BA%BA%E8%AF%A5%E6%89%BF%E6%8B%85%E4%BB%80%E4%B9%88%E8%B4%A3%E4%BB%BB%23) `109.8K 🔥` `NEW`
1. [无偿献血一千毫升终身免费用血](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%81%BF%E7%8C%AE%E8%A1%80%E4%B8%80%E5%8D%83%E6%AF%AB%E5%8D%87%E7%BB%88%E8%BA%AB%E5%85%8D%E8%B4%B9%E7%94%A8%E8%A1%80%23) `98.9K 🔥` `NEW`
1. [董力8岁儿子都这么高了](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%8A%9B8%E5%B2%81%E5%84%BF%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E9%AB%98%E4%BA%86%23) `88.5K 🔥` `NEW`
1. [巴基斯坦伊朗过境走廊开通](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E4%BC%8A%E6%9C%97%E8%BF%87%E5%A2%83%E8%B5%B0%E5%BB%8A%E5%BC%80%E9%80%9A%23) `84.0K 🔥` `NEW`
1. [两大稀土巨头价格七连涨](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A4%A7%E7%A8%80%E5%9C%9F%E5%B7%A8%E5%A4%B4%E4%BB%B7%E6%A0%BC%E4%B8%83%E8%BF%9E%E6%B6%A8%23) `74.0K 🔥` `NEW`
1. [北电艺考的全国前五名](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B5%E8%89%BA%E8%80%83%E7%9A%84%E5%85%A8%E5%9B%BD%E5%89%8D%E4%BA%94%E5%90%8D%23) `71.7K 🔥` `NEW`
1. [海底捞称乱象产生根源在董事会](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E7%A7%B0%E4%B9%B1%E8%B1%A1%E4%BA%A7%E7%94%9F%E6%A0%B9%E6%BA%90%E5%9C%A8%E8%91%A3%E4%BA%8B%E4%BC%9A%23) `66.6K 🔥` `NEW`
1. [以色列的备战地图上全是箭头](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E7%9A%84%E5%A4%87%E6%88%98%E5%9C%B0%E5%9B%BE%E4%B8%8A%E5%85%A8%E6%98%AF%E7%AE%AD%E5%A4%B4%23) `60.6K 🔥` `NEW`
1. [美军封锁线已生效](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%B0%81%E9%94%81%E7%BA%BF%E5%B7%B2%E7%94%9F%E6%95%88%23) `59.1K 🔥` `NEW`
1. [演出服遭集体退货店家曝演出视频 (Performance clothes were collectively returned and the store exposed the performance video)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%87%BA%E6%9C%8D%E9%81%AD%E9%9B%86%E4%BD%93%E9%80%80%E8%B4%A7%E5%BA%97%E5%AE%B6%E6%9B%9D%E6%BC%94%E5%87%BA%E8%A7%86%E9%A2%91%23) `57.2K 🔥` `NEW`
1. [刘宇宁新剧铁证开启预约](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%96%B0%E5%89%A7%E9%93%81%E8%AF%81%E5%BC%80%E5%90%AF%E9%A2%84%E7%BA%A6%23) `51.7K 🔥` `NEW`
1. [35岁3胎孕妈胎盘粘住膀胱堵死宫颈](https://s.weibo.com/weibo?q=%2335%E5%B2%813%E8%83%8E%E5%AD%95%E5%A6%88%E8%83%8E%E7%9B%98%E7%B2%98%E4%BD%8F%E8%86%80%E8%83%B1%E5%A0%B5%E6%AD%BB%E5%AE%AB%E9%A2%88%23) `51.6K 🔥` `NEW`
1. [嫣然医院不再续租](https://s.weibo.com/weibo?q=%23%E5%AB%A3%E7%84%B6%E5%8C%BB%E9%99%A2%E4%B8%8D%E5%86%8D%E7%BB%AD%E7%A7%9F%23) `1.1M 🔥` `+55%`
1. [演出服遭集体退货家属称表演取消 (Family members of performers who collectively returned their costumes said the performance was cancelled.)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%87%BA%E6%9C%8D%E9%81%AD%E9%9B%86%E4%BD%93%E9%80%80%E8%B4%A7%E5%AE%B6%E5%B1%9E%E7%A7%B0%E8%A1%A8%E6%BC%94%E5%8F%96%E6%B6%88%23) `781.6K 🔥` `+54%`
1. [2026世界互联网大会亚太峰会](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E4%BA%92%E8%81%94%E7%BD%91%E5%A4%A7%E4%BC%9A%E4%BA%9A%E5%A4%AA%E5%B3%B0%E4%BC%9A%23) `612.8K 🔥` `+47%`
1. [美若封锁霍尔木兹就将失去曼德海峡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%8B%A5%E5%B0%81%E9%94%81%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E5%B0%B1%E5%B0%86%E5%A4%B1%E5%8E%BB%E6%9B%BC%E5%BE%B7%E6%B5%B7%E5%B3%A1%23) `216.9K 🔥` `+32%`
1. [田曦薇发言](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%8F%91%E8%A8%80%23) `208.9K 🔥` `+32%`
1. [让你一整天都保持清醒的方法](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E4%BD%A0%E4%B8%80%E6%95%B4%E5%A4%A9%E9%83%BD%E4%BF%9D%E6%8C%81%E6%B8%85%E9%86%92%E7%9A%84%E6%96%B9%E6%B3%95%23) `176.3K 🔥` `+100%`
1. [男子无偿献血十年要求免诊查费遭拒](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%97%A0%E5%81%BF%E7%8C%AE%E8%A1%80%E5%8D%81%E5%B9%B4%E8%A6%81%E6%B1%82%E5%85%8D%E8%AF%8A%E6%9F%A5%E8%B4%B9%E9%81%AD%E6%8B%92%23) `124.3K 🔥` `+30%`
1. [迪丽热巴工作室 审美 (Dilraba Studio Aesthetics)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%AE%A1%E7%BE%8E%23) `123.2K 🔥` `+43%`
1. [王晓晨 俞灏明](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%99%A8%20%E4%BF%9E%E7%81%8F%E6%98%8E%23) `122.0K 🔥` `+43%`
1. [瘦肚子超好的行为 (A great way to slim down your belly)](https://s.weibo.com/weibo?q=%23%E7%98%A6%E8%82%9A%E5%AD%90%E8%B6%85%E5%A5%BD%E7%9A%84%E8%A1%8C%E4%B8%BA%23) `121.4K 🔥` `+43%`
1. [楚乔传 全员下场 (Chu Qiao Chuan everyone exits)](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%20%E5%85%A8%E5%91%98%E4%B8%8B%E5%9C%BA%23) `104.0K 🔥` `+22%`
1. [多校鼓励博士生读硕士](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%A0%A1%E9%BC%93%E5%8A%B1%E5%8D%9A%E5%A3%AB%E7%94%9F%E8%AF%BB%E7%A1%95%E5%A3%AB%23) `125.6K 🔥`
1. [李小冉只是长得年轻 (Li Xiaoran just looks young)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8F%AA%E6%98%AF%E9%95%BF%E5%BE%97%E5%B9%B4%E8%BD%BB%23) `125.4K 🔥`
1. [张凌赫田曦薇经纪人敬酒 (Agent Zhang Linghe and Tian Xiwei toasted)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%95%AC%E9%85%92%23) `124.9K 🔥`
1. [李小冉凡尔赛式谈身材管理 (Li Xiaoran talks about body management like Versailles)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%87%A1%E5%B0%94%E8%B5%9B%E5%BC%8F%E8%B0%88%E8%BA%AB%E6%9D%90%E7%AE%A1%E7%90%86%23) `123.9K 🔥`
1. [银行招聘被指萝卜岗后撤争议条款](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E6%8B%9B%E8%81%98%E8%A2%AB%E6%8C%87%E8%90%9D%E5%8D%9C%E5%B2%97%E5%90%8E%E6%92%A4%E4%BA%89%E8%AE%AE%E6%9D%A1%E6%AC%BE%23) `122.8K 🔥`
1. [伊朗曾准备稀释450公斤浓缩铀 (Iran had prepared to dilute 450 kilograms of enriched uranium)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9B%BE%E5%87%86%E5%A4%87%E7%A8%80%E9%87%8A450%E5%85%AC%E6%96%A4%E6%B5%93%E7%BC%A9%E9%93%80%23) `115.2K 🔥`
1. [患者被吊1小时医院多专利已无效 (The patient was suspended for an hour and many of the hospital's patents have become invalid.)](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E8%A2%AB%E5%90%8A1%E5%B0%8F%E6%97%B6%E5%8C%BB%E9%99%A2%E5%A4%9A%E4%B8%93%E5%88%A9%E5%B7%B2%E6%97%A0%E6%95%88%23) `98.8K 🔥`
1. [男子无症状查出肠癌多亏按时体检 (Man with no symptoms diagnosed with bowel cancer thanks to regular physical examination)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%97%A0%E7%97%87%E7%8A%B6%E6%9F%A5%E5%87%BA%E8%82%A0%E7%99%8C%E5%A4%9A%E4%BA%8F%E6%8C%89%E6%97%B6%E4%BD%93%E6%A3%80%23) `94.0K 🔥`
1. [网友一句提醒外卖小哥查出尿毒症 (A netizen reminded the delivery boy that he was diagnosed with uremia)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E4%B8%80%E5%8F%A5%E6%8F%90%E9%86%92%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E6%9F%A5%E5%87%BA%E5%B0%BF%E6%AF%92%E7%97%87%23) `77.7K 🔥` `-30%`
1. [被绳割喉男孩网上筹款已超50万元](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%BB%B3%E5%89%B2%E5%96%89%E7%94%B7%E5%AD%A9%E7%BD%91%E4%B8%8A%E7%AD%B9%E6%AC%BE%E5%B7%B2%E8%B6%8550%E4%B8%87%E5%85%83%23) `61.7K 🔥` `-25%`
1. [长春姐弟俩被遗留在托管班两年 (The Changchun siblings were left in a care class for two years)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%98%A5%E5%A7%90%E5%BC%9F%E4%BF%A9%E8%A2%AB%E9%81%97%E7%95%99%E5%9C%A8%E6%89%98%E7%AE%A1%E7%8F%AD%E4%B8%A4%E5%B9%B4%23) `60.0K 🔥` `-30%`
1. [外交部回应美方将封锁霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E7%BE%8E%E6%96%B9%E5%B0%86%E5%B0%81%E9%94%81%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `58.0K 🔥` `-33%`
1. [论樊振东如何在2分钟里拿到11分 (On how Fan Zhendong scored 11 points in 2 minutes)](https://s.weibo.com/weibo?q=%23%E8%AE%BA%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%A6%82%E4%BD%95%E5%9C%A82%E5%88%86%E9%92%9F%E9%87%8C%E6%8B%BF%E5%88%B011%E5%88%86%23) `55.1K 🔥` `-57%`
1. [没人知道马頔要把家装修成什么样](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E4%BA%BA%E7%9F%A5%E9%81%93%E9%A9%AC%E9%A0%94%E8%A6%81%E6%8A%8A%E5%AE%B6%E8%A3%85%E4%BF%AE%E6%88%90%E4%BB%80%E4%B9%88%E6%A0%B7%23) `51.3K 🔥` `-38%`

Updated at 2026-04-14 08:00:35

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
