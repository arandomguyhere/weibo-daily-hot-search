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

1. [女子宫外孕被误诊月经不调痛到晕厥 (A woman with ectopic pregnancy was misdiagnosed and suffered from irregular menstruation and pain to the point of fainting.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AE%AB%E5%A4%96%E5%AD%95%E8%A2%AB%E8%AF%AF%E8%AF%8A%E6%9C%88%E7%BB%8F%E4%B8%8D%E8%B0%83%E7%97%9B%E5%88%B0%E6%99%95%E5%8E%A5%23) `17.2K 🔥` `NEW`
1. [嫣然医院不再续租](https://s.weibo.com/weibo?q=%23%E5%AB%A3%E7%84%B6%E5%8C%BB%E9%99%A2%E4%B8%8D%E5%86%8D%E7%BB%AD%E7%A7%9F%23) `59.7K 🔥`
1. [演出服遭集体退货家属称表演取消 (Family members of performers who collectively returned their costumes said the performance was cancelled.)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%87%BA%E6%9C%8D%E9%81%AD%E9%9B%86%E4%BD%93%E9%80%80%E8%B4%A7%E5%AE%B6%E5%B1%9E%E7%A7%B0%E8%A1%A8%E6%BC%94%E5%8F%96%E6%B6%88%23) `43.0K 🔥`
1. [2026世界互联网大会亚太峰会](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E4%BA%92%E8%81%94%E7%BD%91%E5%A4%A7%E4%BC%9A%E4%BA%9A%E5%A4%AA%E5%B3%B0%E4%BC%9A%23) `32.6K 🔥`
1. [美若封锁霍尔木兹就将失去曼德海峡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%8B%A5%E5%B0%81%E9%94%81%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E5%B0%B1%E5%B0%86%E5%A4%B1%E5%8E%BB%E6%9B%BC%E5%BE%B7%E6%B5%B7%E5%B3%A1%23) `32.5K 🔥`
1. [特朗普警告伊朗攻击艇勿靠近封锁线](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AD%A6%E5%91%8A%E4%BC%8A%E6%9C%97%E6%94%BB%E5%87%BB%E8%89%87%E5%8B%BF%E9%9D%A0%E8%BF%91%E5%B0%81%E9%94%81%E7%BA%BF%23) `31.6K 🔥`
1. [田曦薇发言](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%8F%91%E8%A8%80%23) `27.8K 🔥`
1. [伊朗强硬回应特朗普封锁威胁](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%BC%BA%E7%A1%AC%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%81%E9%94%81%E5%A8%81%E8%83%81%23) `22.7K 🔥`
1. [外交部回应美方将封锁霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E7%BE%8E%E6%96%B9%E5%B0%86%E5%B0%81%E9%94%81%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `21.8K 🔥`
1. [多校鼓励博士生读硕士](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%A0%A1%E9%BC%93%E5%8A%B1%E5%8D%9A%E5%A3%AB%E7%94%9F%E8%AF%BB%E7%A1%95%E5%A3%AB%23) `21.0K 🔥`
1. [张凌赫田曦薇经纪人敬酒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%95%AC%E9%85%92%23) `19.6K 🔥`
1. [伊朗曾准备稀释450公斤浓缩铀 (Iran had prepared to dilute 450 kilograms of enriched uranium)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9B%BE%E5%87%86%E5%A4%87%E7%A8%80%E9%87%8A450%E5%85%AC%E6%96%A4%E6%B5%93%E7%BC%A9%E9%93%80%23) `19.4K 🔥`
1. [男子无偿献血十年要求免诊查费遭拒](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%97%A0%E5%81%BF%E7%8C%AE%E8%A1%80%E5%8D%81%E5%B9%B4%E8%A6%81%E6%B1%82%E5%85%8D%E8%AF%8A%E6%9F%A5%E8%B4%B9%E9%81%AD%E6%8B%92%23) `19.3K 🔥`
1. [李小冉凡尔赛式谈身材管理 (Li Xiaoran talks about body management like Versailles)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%87%A1%E5%B0%94%E8%B5%9B%E5%BC%8F%E8%B0%88%E8%BA%AB%E6%9D%90%E7%AE%A1%E7%90%86%23) `19.1K 🔥`
1. [楚乔传 全员下场](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%20%E5%85%A8%E5%91%98%E4%B8%8B%E5%9C%BA%23) `18.9K 🔥`
1. [伊朗总统称准备达成平衡公平协议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E5%87%86%E5%A4%87%E8%BE%BE%E6%88%90%E5%B9%B3%E8%A1%A1%E5%85%AC%E5%B9%B3%E5%8D%8F%E8%AE%AE%23) `18.8K 🔥`
1. [网友一句提醒外卖小哥查出尿毒症](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E4%B8%80%E5%8F%A5%E6%8F%90%E9%86%92%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E6%9F%A5%E5%87%BA%E5%B0%BF%E6%AF%92%E7%97%87%23) `18.4K 🔥`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `18.4K 🔥`
1. [让你一整天都保持清醒的方法](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E4%BD%A0%E4%B8%80%E6%95%B4%E5%A4%A9%E9%83%BD%E4%BF%9D%E6%8C%81%E6%B8%85%E9%86%92%E7%9A%84%E6%96%B9%E6%B3%95%23) `18.2K 🔥`
1. [蜜语纪 (Honey Whispers)](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%23) `18.0K 🔥`
1. [被绳割喉男孩网上筹款已超50万元](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%BB%B3%E5%89%B2%E5%96%89%E7%94%B7%E5%AD%A9%E7%BD%91%E4%B8%8A%E7%AD%B9%E6%AC%BE%E5%B7%B2%E8%B6%8550%E4%B8%87%E5%85%83%23) `17.9K 🔥`
1. [患者被吊1小时医院多专利已无效](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E8%A2%AB%E5%90%8A1%E5%B0%8F%E6%97%B6%E5%8C%BB%E9%99%A2%E5%A4%9A%E4%B8%93%E5%88%A9%E5%B7%B2%E6%97%A0%E6%95%88%23) `17.8K 🔥`
1. [瘦肚子超好的行为](https://s.weibo.com/weibo?q=%23%E7%98%A6%E8%82%9A%E5%AD%90%E8%B6%85%E5%A5%BD%E7%9A%84%E8%A1%8C%E4%B8%BA%23) `17.7K 🔥`
1. [男子无症状查出肠癌多亏按时体检 (Man with no symptoms diagnosed with bowel cancer thanks to regular physical examination)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%97%A0%E7%97%87%E7%8A%B6%E6%9F%A5%E5%87%BA%E8%82%A0%E7%99%8C%E5%A4%9A%E4%BA%8F%E6%8C%89%E6%97%B6%E4%BD%93%E6%A3%80%23) `17.3K 🔥`
1. [中方反对无根据抹黑](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%8F%8D%E5%AF%B9%E6%97%A0%E6%A0%B9%E6%8D%AE%E6%8A%B9%E9%BB%91%23) `17.3K 🔥`
1. [李小冉只是长得年轻 (Li Xiaoran just looks young)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8F%AA%E6%98%AF%E9%95%BF%E5%BE%97%E5%B9%B4%E8%BD%BB%23) `17.3K 🔥`
1. [长春姐弟俩被遗留在托管班两年 (The Changchun siblings were left in a care class for two years)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%98%A5%E5%A7%90%E5%BC%9F%E4%BF%A9%E8%A2%AB%E9%81%97%E7%95%99%E5%9C%A8%E6%89%98%E7%AE%A1%E7%8F%AD%E4%B8%A4%E5%B9%B4%23) `17.3K 🔥`
1. [英国称不参与霍尔木兹海峡封锁 (Britain says it will not participate in blockade of Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E7%A7%B0%E4%B8%8D%E5%8F%82%E4%B8%8E%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%B0%81%E9%94%81%23) `17.3K 🔥`
1. [张凌赫逐玉庆功宴发言](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%90%E7%8E%89%E5%BA%86%E5%8A%9F%E5%AE%B4%E5%8F%91%E8%A8%80%23) `17.3K 🔥`
1. [韩国中学生在上海观光廊大声打闹](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%AD%E5%AD%A6%E7%94%9F%E5%9C%A8%E4%B8%8A%E6%B5%B7%E8%A7%82%E5%85%89%E5%BB%8A%E5%A4%A7%E5%A3%B0%E6%89%93%E9%97%B9%23) `17.3K 🔥`
1. [男孩被绳锁喉的肇事方或被追究刑责](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E8%A2%AB%E7%BB%B3%E9%94%81%E5%96%89%E7%9A%84%E8%82%87%E4%BA%8B%E6%96%B9%E6%88%96%E8%A2%AB%E8%BF%BD%E7%A9%B6%E5%88%91%E8%B4%A3%23) `17.3K 🔥`
1. [论樊振东如何在2分钟里拿到11分 (On how Fan Zhendong scored 11 points in 2 minutes)](https://s.weibo.com/weibo?q=%23%E8%AE%BA%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%A6%82%E4%BD%95%E5%9C%A82%E5%88%86%E9%92%9F%E9%87%8C%E6%8B%BF%E5%88%B011%E5%88%86%23) `17.3K 🔥`
1. [没人知道马頔要把家装修成什么样](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E4%BA%BA%E7%9F%A5%E9%81%93%E9%A9%AC%E9%A0%94%E8%A6%81%E6%8A%8A%E5%AE%B6%E8%A3%85%E4%BF%AE%E6%88%90%E4%BB%80%E4%B9%88%E6%A0%B7%23) `17.3K 🔥`
1. [西班牙首相在清华握手握不过来了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E7%9B%B8%E5%9C%A8%E6%B8%85%E5%8D%8E%E6%8F%A1%E6%89%8B%E6%8F%A1%E4%B8%8D%E8%BF%87%E6%9D%A5%E4%BA%86%23) `17.2K 🔥`
1. [欧尔班16年执政生涯将落幕](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%B0%94%E7%8F%AD16%E5%B9%B4%E6%89%A7%E6%94%BF%E7%94%9F%E6%B6%AF%E5%B0%86%E8%90%BD%E5%B9%95%23) `17.2K 🔥`
1. [莫氏鸡煲黄牛号已炒至200元](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E9%BB%84%E7%89%9B%E5%8F%B7%E5%B7%B2%E7%82%92%E8%87%B3200%E5%85%83%23) `17.2K 🔥`
1. [周深演唱会](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%BC%94%E5%94%B1%E4%BC%9A%23) `17.2K 🔥`
1. [网约车司机迎来强制8小时工作制 (Online ride-hailing drivers usher in mandatory 8-hour working day)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A6%E8%BD%A6%E5%8F%B8%E6%9C%BA%E8%BF%8E%E6%9D%A5%E5%BC%BA%E5%88%B68%E5%B0%8F%E6%97%B6%E5%B7%A5%E4%BD%9C%E5%88%B6%23) `17.2K 🔥`
1. [中国79岁奶奶获国际大奖 (79-year-old Chinese grandmother wins international award)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD79%E5%B2%81%E5%A5%B6%E5%A5%B6%E8%8E%B7%E5%9B%BD%E9%99%85%E5%A4%A7%E5%A5%96%23) `17.2K 🔥`
1. [海底捞CEO向贴钱员工致歉 (Haidilao CEO apologizes to employees who offered money)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9ECEO%E5%90%91%E8%B4%B4%E9%92%B1%E5%91%98%E5%B7%A5%E8%87%B4%E6%AD%89%23) `17.2K 🔥`
1. [粉海豚出水打招呼 (Pink dolphin comes out of the water to say hello)](https://s.weibo.com/weibo?q=%23%E7%B2%89%E6%B5%B7%E8%B1%9A%E5%87%BA%E6%B0%B4%E6%89%93%E6%8B%9B%E5%91%BC%23) `17.2K 🔥`
1. [卢洋洋去拍短剧了 (Lu Yangyang went to film a short play)](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%B4%8B%E6%B4%8B%E5%8E%BB%E6%8B%8D%E7%9F%AD%E5%89%A7%E4%BA%86%23) `17.2K 🔥`
1. [龚俊能不能再拍个现偶](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E8%83%BD%E4%B8%8D%E8%83%BD%E5%86%8D%E6%8B%8D%E4%B8%AA%E7%8E%B0%E5%81%B6%23) `17.2K 🔥`
1. [檀健次这透屏而来的杀气不像演的](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E8%BF%99%E9%80%8F%E5%B1%8F%E8%80%8C%E6%9D%A5%E7%9A%84%E6%9D%80%E6%B0%94%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `17.2K 🔥`
1. [权志龙科切拉怼脸拍 (G-Dragon's face shot at Coachella)](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99%E7%A7%91%E5%88%87%E6%8B%89%E6%80%BC%E8%84%B8%E6%8B%8D%23) `17.2K 🔥`
1. [莫氏鸡煲迎来成群TVB老戏骨](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%BF%8E%E6%9D%A5%E6%88%90%E7%BE%A4TVB%E8%80%81%E6%88%8F%E9%AA%A8%23) `17.2K 🔥`
1. [银行招聘被指萝卜岗后撤争议条款](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E6%8B%9B%E8%81%98%E8%A2%AB%E6%8C%87%E8%90%9D%E5%8D%9C%E5%B2%97%E5%90%8E%E6%92%A4%E4%BA%89%E8%AE%AE%E6%9D%A1%E6%AC%BE%23) `17.2K 🔥`
1. [时代少年团正式官宣广州站](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%AD%A3%E5%BC%8F%E5%AE%98%E5%AE%A3%E5%B9%BF%E5%B7%9E%E7%AB%99%23) `17.2K 🔥`
1. [洛克王国 补偿 (Locke Kingdom Compensation)](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%20%E8%A1%A5%E5%81%BF%23) `19.7K 🔥` `-32%`
1. [蔡皋获国际安徒生奖](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%9A%8B%E8%8E%B7%E5%9B%BD%E9%99%85%E5%AE%89%E5%BE%92%E7%94%9F%E5%A5%96%23) `17.2K 🔥` `-45%`

Updated at 2026-04-14 04:38:00

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
