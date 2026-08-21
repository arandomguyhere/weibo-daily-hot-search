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

1. [网红卖淫秽视频被抓时问会判刑吗 (If an internet celebrity is caught selling pornographic videos, will he be sentenced?)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%8D%96%E6%B7%AB%E7%A7%BD%E8%A7%86%E9%A2%91%E8%A2%AB%E6%8A%93%E6%97%B6%E9%97%AE%E4%BC%9A%E5%88%A4%E5%88%91%E5%90%97%23) `1.2M 🔥` `NEW`
1. [县域消费迎重磅利好](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%9F%9F%E6%B6%88%E8%B4%B9%E8%BF%8E%E9%87%8D%E7%A3%85%E5%88%A9%E5%A5%BD%23) `691.8K 🔥` `NEW`
1. [哈尔滨速滑运动员截肢](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E9%80%9F%E6%BB%91%E8%BF%90%E5%8A%A8%E5%91%98%E6%88%AA%E8%82%A2%23) `425.4K 🔥` `NEW`
1. [王者荣耀全网寻撞持刀男子外卖员](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%85%A8%E7%BD%91%E5%AF%BB%E6%92%9E%E6%8C%81%E5%88%80%E7%94%B7%E5%AD%90%E5%A4%96%E5%8D%96%E5%91%98%23) `390.2K 🔥` `NEW`
1. [卧底河北代孕机构](https://s.weibo.com/weibo?q=%23%E5%8D%A7%E5%BA%95%E6%B2%B3%E5%8C%97%E4%BB%A3%E5%AD%95%E6%9C%BA%E6%9E%84%23) `322.1K 🔥` `NEW`
1. [孙骁骁说生二胎是对老公和婆家的肯定](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%AA%81%E9%AA%81%E8%AF%B4%E7%94%9F%E4%BA%8C%E8%83%8E%E6%98%AF%E5%AF%B9%E8%80%81%E5%85%AC%E5%92%8C%E5%A9%86%E5%AE%B6%E7%9A%84%E8%82%AF%E5%AE%9A%23) `308.6K 🔥` `NEW`
1. [大冰称婚后上交工资是三观问题](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E7%A7%B0%E5%A9%9A%E5%90%8E%E4%B8%8A%E4%BA%A4%E5%B7%A5%E8%B5%84%E6%98%AF%E4%B8%89%E8%A7%82%E9%97%AE%E9%A2%98%23) `303.0K 🔥` `NEW`
1. [爱在无尽夏开机路透](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%E5%BC%80%E6%9C%BA%E8%B7%AF%E9%80%8F%23) `292.2K 🔥` `NEW`
1. [长城偶遇冯绍峰父子](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%9F%8E%E5%81%B6%E9%81%87%E5%86%AF%E7%BB%8D%E5%B3%B0%E7%88%B6%E5%AD%90%23) `264.6K 🔥` `NEW`
1. [广州地铁挤门事件不少乘客未能下车](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%9C%B0%E9%93%81%E6%8C%A4%E9%97%A8%E4%BA%8B%E4%BB%B6%E4%B8%8D%E5%B0%91%E4%B9%98%E5%AE%A2%E6%9C%AA%E8%83%BD%E4%B8%8B%E8%BD%A6%23) `255.2K 🔥` `NEW`
1. [比亚迪高管称智驾能力比华为强 (BYD executives say smart driving capabilities are better than Huawei's)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E9%AB%98%E7%AE%A1%E7%A7%B0%E6%99%BA%E9%A9%BE%E8%83%BD%E5%8A%9B%E6%AF%94%E5%8D%8E%E4%B8%BA%E5%BC%BA%23) `219.8K 🔥` `NEW`
1. [早春晴朗定档](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%AE%9A%E6%A1%A3%23) `201.7K 🔥` `NEW`
1. [前妻否认窦唯给过四合院](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A6%BB%E5%90%A6%E8%AE%A4%E7%AA%A6%E5%94%AF%E7%BB%99%E8%BF%87%E5%9B%9B%E5%90%88%E9%99%A2%23) `177.9K 🔥` `NEW`
1. [私处护理液 闪片](https://s.weibo.com/weibo?q=%23%E7%A7%81%E5%A4%84%E6%8A%A4%E7%90%86%E6%B6%B2%20%E9%97%AA%E7%89%87%23) `166.2K 🔥` `NEW`
1. [白鹿开到荼蘼剧照](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%E5%89%A7%E7%85%A7%23) `165.8K 🔥` `NEW`
1. [爱在无尽夏](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%23) `165.4K 🔥` `NEW`
1. [享界G9动态评测首发](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8CG9%E5%8A%A8%E6%80%81%E8%AF%84%E6%B5%8B%E9%A6%96%E5%8F%91%23) `153.9K 🔥` `NEW`
1. [将门毒后广播剧投票](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%E5%B9%BF%E6%92%AD%E5%89%A7%E6%8A%95%E7%A5%A8%23) `153.3K 🔥` `NEW`
1. [戈登将宣布退役](https://s.weibo.com/weibo?q=%23%E6%88%88%E7%99%BB%E5%B0%86%E5%AE%A3%E5%B8%83%E9%80%80%E5%BD%B9%23) `152.6K 🔥` `NEW`
1. [樊振东加盟杜塞尔多夫反响惊人](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8A%A0%E7%9B%9F%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%E5%8F%8D%E5%93%8D%E6%83%8A%E4%BA%BA%23) `150.2K 🔥` `NEW`
1. [癌症疫苗 个性化VS广谱 (Cancer Vaccines Personalized vs. Broad Spectrum)](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%20%E4%B8%AA%E6%80%A7%E5%8C%96VS%E5%B9%BF%E8%B0%B1%23) `148.6K 🔥` `NEW`
1. [外貌红利 人高马大](https://s.weibo.com/weibo?q=%23%E5%A4%96%E8%B2%8C%E7%BA%A2%E5%88%A9%20%E4%BA%BA%E9%AB%98%E9%A9%AC%E5%A4%A7%23) `146.1K 🔥` `NEW`
1. [哈登3年9700万完成续约](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%99%BB3%E5%B9%B49700%E4%B8%87%E5%AE%8C%E6%88%90%E7%BB%AD%E7%BA%A6%23) `145.7K 🔥` `NEW`
1. [韩乔生谈樊振东正式亮相杜塞尔多夫](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E4%B9%94%E7%94%9F%E8%B0%88%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AD%A3%E5%BC%8F%E4%BA%AE%E7%9B%B8%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%23) `141.9K 🔥` `NEW`
1. [女子离婚当晚被殴打到昏迷](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A%E5%BD%93%E6%99%9A%E8%A2%AB%E6%AE%B4%E6%89%93%E5%88%B0%E6%98%8F%E8%BF%B7%23) `131.2K 🔥` `NEW`
1. [井柏然孙千早春晴朗官宣定档](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%AE%98%E5%AE%A3%E5%AE%9A%E6%A1%A3%23) `128.8K 🔥` `NEW`
1. [泡泡玛特IP格局大变](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9IP%E6%A0%BC%E5%B1%80%E5%A4%A7%E5%8F%98%23) `820.6K 🔥` `+405%`
1. [跟着乐事现在就出发 (Let’s go now with Leshi)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E4%B9%90%E4%BA%8B%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `686.1K 🔥` `+30%`
1. [韩雪 你是要气死妈妈吗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E9%9B%AA%20%E4%BD%A0%E6%98%AF%E8%A6%81%E6%B0%94%E6%AD%BB%E5%A6%88%E5%A6%88%E5%90%97%23) `238.3K 🔥` `+44%`
1. [398一杯的芋圆葡萄 (398 cup of taro grapes)](https://s.weibo.com/weibo?q=%23398%E4%B8%80%E6%9D%AF%E7%9A%84%E8%8A%8B%E5%9C%86%E8%91%A1%E8%90%84%23) `605.8K 🔥`
1. [46岁小罗正式复出](https://s.weibo.com/weibo?q=%2346%E5%B2%81%E5%B0%8F%E7%BD%97%E6%AD%A3%E5%BC%8F%E5%A4%8D%E5%87%BA%23) `171.0K 🔥`
1. [男孩子见到相亲对象瞬间](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%AD%90%E8%A7%81%E5%88%B0%E7%9B%B8%E4%BA%B2%E5%AF%B9%E8%B1%A1%E7%9E%AC%E9%97%B4%23) `165.0K 🔥`
1. [金饰克价一夜飙涨37元 (The price of gold jewelry soared by 37 yuan per gram overnight)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E4%B8%80%E5%A4%9C%E9%A3%99%E6%B6%A837%E5%85%83%23) `128.6K 🔥`
1. [华晨宇彻底打破演唱会观演边界 (Hua Chenyu completely breaks the boundaries of concert viewing)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%BD%BB%E5%BA%95%E6%89%93%E7%A0%B4%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A7%82%E6%BC%94%E8%BE%B9%E7%95%8C%23) `128.6K 🔥`
1. [张雪说送到统一为止 (Zhang Xue said that it would be sent to Tongyuan)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%AF%B4%E9%80%81%E5%88%B0%E7%BB%9F%E4%B8%80%E4%B8%BA%E6%AD%A2%23) `634.9K 🔥` `-45%`
1. [男子捡3根金条以为假的随手扔掉 (Man picked up 3 gold bars and threw them away thinking they were fake)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8D%A13%E6%A0%B9%E9%87%91%E6%9D%A1%E4%BB%A5%E4%B8%BA%E5%81%87%E7%9A%84%E9%9A%8F%E6%89%8B%E6%89%94%E6%8E%89%23) `450.2K 🔥` `-45%`
1. [孟子义李昀锐第三视角](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E7%AC%AC%E4%B8%89%E8%A7%86%E8%A7%92%23) `348.3K 🔥` `-28%`
1. [曾辉小沈阳这段诡异得像AI生成 (Zeng Hui's Xiao Shenyang episode is so weird that it looks like it was generated by AI)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%B0%8F%E6%B2%88%E9%98%B3%E8%BF%99%E6%AE%B5%E8%AF%A1%E5%BC%82%E5%BE%97%E5%83%8FAI%E7%94%9F%E6%88%90%23) `329.6K 🔥` `-29%`
1. [网购水果骗局](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%B4%AD%E6%B0%B4%E6%9E%9C%E9%AA%97%E5%B1%80%23) `294.9K 🔥` `-26%`
1. [迪丽热巴跑男时期的感觉回来啦](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B7%91%E7%94%B7%E6%97%B6%E6%9C%9F%E7%9A%84%E6%84%9F%E8%A7%89%E5%9B%9E%E6%9D%A5%E5%95%A6%23) `223.8K 🔥` `-49%`
1. [孙骁骁写信深情表白任重](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%AA%81%E9%AA%81%E5%86%99%E4%BF%A1%E6%B7%B1%E6%83%85%E8%A1%A8%E7%99%BD%E4%BB%BB%E9%87%8D%23) `218.9K 🔥` `-48%`
1. [我国气候异常 (my country's climate anomalies)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B0%94%E5%80%99%E5%BC%82%E5%B8%B8%23) `202.9K 🔥` `-58%`
1. [何婧婧流产原因是胚胎优胜劣汰](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%A9%A7%E5%A9%A7%E6%B5%81%E4%BA%A7%E5%8E%9F%E5%9B%A0%E6%98%AF%E8%83%9A%E8%83%8E%E4%BC%98%E8%83%9C%E5%8A%A3%E6%B1%B0%23) `167.6K 🔥` `-57%`
1. [多方回应女子穿睡衣站高楼窗沿](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E7%A9%BF%E7%9D%A1%E8%A1%A3%E7%AB%99%E9%AB%98%E6%A5%BC%E7%AA%97%E6%B2%BF%23) `167.6K 🔥` `-36%`
1. [银行员工称考核压力大自己买1万 (Bank employees said the assessment pressure was so great that they bought 10,000 yuan)](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%91%98%E5%B7%A5%E7%A7%B0%E8%80%83%E6%A0%B8%E5%8E%8B%E5%8A%9B%E5%A4%A7%E8%87%AA%E5%B7%B1%E4%B9%B01%E4%B8%87%23) `165.6K 🔥` `-40%`
1. [Selina社媒已停更半年以上](https://s.weibo.com/weibo?q=%23Selina%E7%A4%BE%E5%AA%92%E5%B7%B2%E5%81%9C%E6%9B%B4%E5%8D%8A%E5%B9%B4%E4%BB%A5%E4%B8%8A%23) `164.8K 🔥` `-42%`
1. [中国铁路加速驶入AI赋能新阶段 (China's railways are accelerating into a new stage of AI empowerment)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%93%81%E8%B7%AF%E5%8A%A0%E9%80%9F%E9%A9%B6%E5%85%A5AI%E8%B5%8B%E8%83%BD%E6%96%B0%E9%98%B6%E6%AE%B5%23) `153.5K 🔥` `-77%`
1. [女子发现孩子没出地铁强行往车厢挤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8F%91%E7%8E%B0%E5%AD%A9%E5%AD%90%E6%B2%A1%E5%87%BA%E5%9C%B0%E9%93%81%E5%BC%BA%E8%A1%8C%E5%BE%80%E8%BD%A6%E5%8E%A2%E6%8C%A4%23) `148.5K 🔥` `-43%`
1. [仅退款的风吹到了医疗界 (The refund-only trend has hit the medical community)](https://s.weibo.com/weibo?q=%23%E4%BB%85%E9%80%80%E6%AC%BE%E7%9A%84%E9%A3%8E%E5%90%B9%E5%88%B0%E4%BA%86%E5%8C%BB%E7%96%97%E7%95%8C%23) `146.7K 🔥` `-25%`
1. [癌症疫苗离普通患者有多远](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%E7%A6%BB%E6%99%AE%E9%80%9A%E6%82%A3%E8%80%85%E6%9C%89%E5%A4%9A%E8%BF%9C%23) `135.4K 🔥` `-61%`
1. [医院能办结婚证了 (The hospital can issue a marriage certificate)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `129.6K 🔥` `-40%`

Updated at 2026-08-21 10:46:22

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
