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

1. [拼多多双11美妆尖货节不用蹲机制](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E5%8F%8C11%E7%BE%8E%E5%A6%86%E5%B0%96%E8%B4%A7%E8%8A%82%E4%B8%8D%E7%94%A8%E8%B9%B2%E6%9C%BA%E5%88%B6%23) `1.2M 🔥` `NEW`
1. [金晨回应现发4更换常驻嘉宾](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E5%9B%9E%E5%BA%94%E7%8E%B0%E5%8F%914%E6%9B%B4%E6%8D%A2%E5%B8%B8%E9%A9%BB%E5%98%89%E5%AE%BE%23) `1.2M 🔥` `NEW`
1. [女子6毫米结节确诊乳腺癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%906%E6%AF%AB%E7%B1%B3%E7%BB%93%E8%8A%82%E7%A1%AE%E8%AF%8A%E4%B9%B3%E8%85%BA%E7%99%8C%23) `758.7K 🔥` `NEW`
1. [千问AI耳机开售](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AEAI%E8%80%B3%E6%9C%BA%E5%BC%80%E5%94%AE%23) `716.3K 🔥` `NEW`
1. [红果短剧降智](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E9%99%8D%E6%99%BA%23) `601.5K 🔥` `NEW`
1. [曼联利马赛后爆炸性发言](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%94%E5%88%A9%E9%A9%AC%E8%B5%9B%E5%90%8E%E7%88%86%E7%82%B8%E6%80%A7%E5%8F%91%E8%A8%80%23) `584.4K 🔥` `NEW`
1. [向太说张家齐妈妈谎话连篇](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E8%B0%8E%E8%AF%9D%E8%BF%9E%E7%AF%87%23) `516.2K 🔥` `NEW`
1. [高中同学分的糖疑为褪黑素软糖](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E5%90%8C%E5%AD%A6%E5%88%86%E7%9A%84%E7%B3%96%E7%96%91%E4%B8%BA%E8%A4%AA%E9%BB%91%E7%B4%A0%E8%BD%AF%E7%B3%96%23) `515.4K 🔥` `NEW`
1. [赛力斯起诉AI造谣问界者索赔百万](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF%E8%B5%B7%E8%AF%89AI%E9%80%A0%E8%B0%A3%E9%97%AE%E7%95%8C%E8%80%85%E7%B4%A2%E8%B5%94%E7%99%BE%E4%B8%87%23) `497.1K 🔥` `NEW`
1. [宋雨琦穿这么少但是看着很健康](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%A9%BF%E8%BF%99%E4%B9%88%E5%B0%91%E4%BD%86%E6%98%AF%E7%9C%8B%E7%9D%80%E5%BE%88%E5%81%A5%E5%BA%B7%23) `423.9K 🔥` `NEW`
1. [田馥甄我不配唱给你听是我不配](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E6%88%91%E4%B8%8D%E9%85%8D%E5%94%B1%E7%BB%99%E4%BD%A0%E5%90%AC%E6%98%AF%E6%88%91%E4%B8%8D%E9%85%8D%23) `408.9K 🔥` `NEW`
1. [金秀贤方索赔升至300亿韩元](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E6%96%B9%E7%B4%A2%E8%B5%94%E5%8D%87%E8%87%B3300%E4%BA%BF%E9%9F%A9%E5%85%83%23) `293.4K 🔥` `NEW`
1. [男友送吹风机后不让女友带回家](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8F%8B%E9%80%81%E5%90%B9%E9%A3%8E%E6%9C%BA%E5%90%8E%E4%B8%8D%E8%AE%A9%E5%A5%B3%E5%8F%8B%E5%B8%A6%E5%9B%9E%E5%AE%B6%23) `289.7K 🔥` `NEW`
1. [年轻人为什么反感新科技](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%8D%E6%84%9F%E6%96%B0%E7%A7%91%E6%8A%80%23) `236.0K 🔥` `NEW`
1. [上海地铁](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%23) `234.8K 🔥` `NEW`
1. [心梗脑梗发生前的求救信号](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%A2%97%E8%84%91%E6%A2%97%E5%8F%91%E7%94%9F%E5%89%8D%E7%9A%84%E6%B1%82%E6%95%91%E4%BF%A1%E5%8F%B7%23) `233.7K 🔥` `NEW`
1. [坦桑尼亚孩子喝豆浆半年长体重](https://s.weibo.com/weibo?q=%23%E5%9D%A6%E6%A1%91%E5%B0%BC%E4%BA%9A%E5%AD%A9%E5%AD%90%E5%96%9D%E8%B1%86%E6%B5%86%E5%8D%8A%E5%B9%B4%E9%95%BF%E4%BD%93%E9%87%8D%23) `233.3K 🔥` `NEW`
1. [同事把上班补觉说成低血糖](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E6%8A%8A%E4%B8%8A%E7%8F%AD%E8%A1%A5%E8%A7%89%E8%AF%B4%E6%88%90%E4%BD%8E%E8%A1%80%E7%B3%96%23) `195.0K 🔥` `NEW`
1. [王楚然在现在就出发4里的泳衣](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%9C%A8%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%E9%87%8C%E7%9A%84%E6%B3%B3%E8%A1%A3%23) `193.2K 🔥` `NEW`
1. [詹姆斯直升机协议遭调查](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E7%9B%B4%E5%8D%87%E6%9C%BA%E5%8D%8F%E8%AE%AE%E9%81%AD%E8%B0%83%E6%9F%A5%23) `191.2K 🔥` `NEW`
1. [98年男生下班摆摊忙到起飞](https://s.weibo.com/weibo?q=%2398%E5%B9%B4%E7%94%B7%E7%94%9F%E4%B8%8B%E7%8F%AD%E6%91%86%E6%91%8A%E5%BF%99%E5%88%B0%E8%B5%B7%E9%A3%9E%23) `189.2K 🔥` `NEW`
1. [微信上线绿泡泡短剧](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E4%B8%8A%E7%BA%BF%E7%BB%BF%E6%B3%A1%E6%B3%A1%E7%9F%AD%E5%89%A7%23) `180.4K 🔥` `NEW`
1. [爱生气的人根本不是脾气差](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%94%9F%E6%B0%94%E7%9A%84%E4%BA%BA%E6%A0%B9%E6%9C%AC%E4%B8%8D%E6%98%AF%E8%84%BE%E6%B0%94%E5%B7%AE%23) `171.8K 🔥` `NEW`
1. [目击者回应女子高铁免提打1小时电话](https://s.weibo.com/weibo?q=%23%E7%9B%AE%E5%87%BB%E8%80%85%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E9%AB%98%E9%93%81%E5%85%8D%E6%8F%90%E6%89%931%E5%B0%8F%E6%97%B6%E7%94%B5%E8%AF%9D%23) `169.7K 🔥` `NEW`
1. [奥利塞扔球砸人染红](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%A1%9E%E6%89%94%E7%90%83%E7%A0%B8%E4%BA%BA%E6%9F%93%E7%BA%A2%23) `150.9K 🔥` `NEW`
1. [虞书欣长长长长长长发公主](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%95%BF%E9%95%BF%E9%95%BF%E9%95%BF%E9%95%BF%E9%95%BF%E5%8F%91%E5%85%AC%E4%B8%BB%23) `148.2K 🔥` `NEW`
1. [邓为请客百妖谱剧组全组人员](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E8%AF%B7%E5%AE%A2%E7%99%BE%E5%A6%96%E8%B0%B1%E5%89%A7%E7%BB%84%E5%85%A8%E7%BB%84%E4%BA%BA%E5%91%98%23) `147.8K 🔥` `NEW`
1. [AI短剧三年前后对比](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%E4%B8%89%E5%B9%B4%E5%89%8D%E5%90%8E%E5%AF%B9%E6%AF%94%23) `140.1K 🔥` `NEW`
1. [刘学义和唐嫣插花愣是做成了手捧花](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%92%8C%E5%94%90%E5%AB%A3%E6%8F%92%E8%8A%B1%E6%84%A3%E6%98%AF%E5%81%9A%E6%88%90%E4%BA%86%E6%89%8B%E6%8D%A7%E8%8A%B1%23) `127.6K 🔥` `NEW`
1. [欧冠](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%23) `117.6K 🔥` `NEW`
1. [虞书欣粉丝真的要爱虞书欣一辈子了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%B2%89%E4%B8%9D%E7%9C%9F%E7%9A%84%E8%A6%81%E7%88%B1%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%80%E8%BE%88%E5%AD%90%E4%BA%86%23) `117.5K 🔥` `NEW`
1. [吃播网红干饭莹去世](https://s.weibo.com/weibo?q=%23%E5%90%83%E6%92%AD%E7%BD%91%E7%BA%A2%E5%B9%B2%E9%A5%AD%E8%8E%B9%E5%8E%BB%E4%B8%96%23) `1.8M 🔥` `+1120%`
1. [女子高铁上和男友开免提打1小时电话](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%AB%98%E9%93%81%E4%B8%8A%E5%92%8C%E7%94%B7%E5%8F%8B%E5%BC%80%E5%85%8D%E6%8F%90%E6%89%931%E5%B0%8F%E6%97%B6%E7%94%B5%E8%AF%9D%23) `1.5M 🔥` `+1055%`
1. [永不褪色的红飘带](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E4%B8%8D%E8%A4%AA%E8%89%B2%E7%9A%84%E7%BA%A2%E9%A3%98%E5%B8%A6%23) `1.3M 🔥` `+365%`
1. [真实姓名被9年未联系友人用作昵称](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%AE%9E%E5%A7%93%E5%90%8D%E8%A2%AB9%E5%B9%B4%E6%9C%AA%E8%81%94%E7%B3%BB%E5%8F%8B%E4%BA%BA%E7%94%A8%E4%BD%9C%E6%98%B5%E7%A7%B0%23) `1.2M 🔥` `+860%`
1. [郑钦文夺冠父亲给她泼冷水](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%A4%BA%E5%86%A0%E7%88%B6%E4%BA%B2%E7%BB%99%E5%A5%B9%E6%B3%BC%E5%86%B7%E6%B0%B4%23) `562.2K 🔥` `+215%`
1. [老人凌晨下地干活被气枪击中身亡](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%87%8C%E6%99%A8%E4%B8%8B%E5%9C%B0%E5%B9%B2%E6%B4%BB%E8%A2%AB%E6%B0%94%E6%9E%AA%E5%87%BB%E4%B8%AD%E8%BA%AB%E4%BA%A1%23) `526.3K 🔥` `+53%`
1. [王星被胁迫借下的网贷该不该还](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%A2%AB%E8%83%81%E8%BF%AB%E5%80%9F%E4%B8%8B%E7%9A%84%E7%BD%91%E8%B4%B7%E8%AF%A5%E4%B8%8D%E8%AF%A5%E8%BF%98%23) `416.6K 🔥` `+462%`
1. [79岁老干妈陶华碧用AI一年赚54亿](https://s.weibo.com/weibo?q=%2379%E5%B2%81%E8%80%81%E5%B9%B2%E5%A6%88%E9%99%B6%E5%8D%8E%E7%A2%A7%E7%94%A8AI%E4%B8%80%E5%B9%B4%E8%B5%9A54%E4%BA%BF%23) `372.4K 🔥` `+273%`
1. [家有儿女早就教了我们正确的爱情观](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E6%97%A9%E5%B0%B1%E6%95%99%E4%BA%86%E6%88%91%E4%BB%AC%E6%AD%A3%E7%A1%AE%E7%9A%84%E7%88%B1%E6%83%85%E8%A7%82%23) `237.0K 🔥` `+226%`
1. [第一次听说生理性喜欢是这种感觉](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%90%AC%E8%AF%B4%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E6%98%AF%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89%23) `236.8K 🔥` `+326%`
1. [超过30岁未婚不代表有问题](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%BF%8730%E5%B2%81%E6%9C%AA%E5%A9%9A%E4%B8%8D%E4%BB%A3%E8%A1%A8%E6%9C%89%E9%97%AE%E9%A2%98%23) `234.3K 🔥` `+325%`
1. [向芷更是直接管向华强叫华强强强](https://s.weibo.com/weibo?q=%23%E5%90%91%E8%8A%B7%E6%9B%B4%E6%98%AF%E7%9B%B4%E6%8E%A5%E7%AE%A1%E5%90%91%E5%8D%8E%E5%BC%BA%E5%8F%AB%E5%8D%8E%E5%BC%BA%E5%BC%BA%E5%BC%BA%23) `216.8K 🔥` `+260%`
1. [小酒窝被医生夸比着尺子长的](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E8%A2%AB%E5%8C%BB%E7%94%9F%E5%A4%B8%E6%AF%94%E7%9D%80%E5%B0%BA%E5%AD%90%E9%95%BF%E7%9A%84%23) `198.3K 🔥` `+266%`
1. [VISA进入中国市场](https://s.weibo.com/weibo?q=%23VISA%E8%BF%9B%E5%85%A5%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%23) `198.2K 🔥` `+265%`
1. [中国互联网进入字节时间](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%92%E8%81%94%E7%BD%91%E8%BF%9B%E5%85%A5%E5%AD%97%E8%8A%82%E6%97%B6%E9%97%B4%23) `187.3K 🔥` `+245%`
1. [西瓜子含钾量是香蕉三倍](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%93%9C%E5%AD%90%E5%90%AB%E9%92%BE%E9%87%8F%E6%98%AF%E9%A6%99%E8%95%89%E4%B8%89%E5%80%8D%23) `181.6K 🔥` `+231%`
1. [33岁销冠确诊胃癌晚期突然被辞退](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E9%94%80%E5%86%A0%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E7%AA%81%E7%84%B6%E8%A2%AB%E8%BE%9E%E9%80%80%23) `169.3K 🔥` `+191%`
1. [原来胃也是需要锻炼的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%83%83%E4%B9%9F%E6%98%AF%E9%9C%80%E8%A6%81%E9%94%BB%E7%82%BC%E7%9A%84%23) `145.8K 🔥` `+169%`
1. [金秀贤金赛纶反转再反转](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E9%87%91%E8%B5%9B%E7%BA%B6%E5%8F%8D%E8%BD%AC%E5%86%8D%E5%8F%8D%E8%BD%AC%23) `111.4K 🔥` `+105%`

Updated at 2026-10-14 09:20:00

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
