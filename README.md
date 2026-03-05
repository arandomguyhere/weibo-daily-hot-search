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

1. [惊蛰无声 (Waking of Insects is silent)](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `778.6K 🔥` `NEW`
1. [一图速览十五五重大战略任务](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E9%80%9F%E8%A7%88%E5%8D%81%E4%BA%94%E4%BA%94%E9%87%8D%E5%A4%A7%E6%88%98%E7%95%A5%E4%BB%BB%E5%8A%A1%23) `646.2K 🔥` `NEW`
1. [比亚迪今晚发布二代刀片及闪充](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E4%BB%8A%E6%99%9A%E5%8F%91%E5%B8%83%E4%BA%8C%E4%BB%A3%E5%88%80%E7%89%87%E5%8F%8A%E9%97%AA%E5%85%85%23) `636.4K 🔥` `NEW`
1. [WBG战胜AL](https://s.weibo.com/weibo?q=%23WBG%E6%88%98%E8%83%9CAL%23) `467.8K 🔥` `NEW`
1. [上飞猪抢中国游泳公开赛前排坐席](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%A3%9E%E7%8C%AA%E6%8A%A2%E4%B8%AD%E5%9B%BD%E6%B8%B8%E6%B3%B3%E5%85%AC%E5%BC%80%E8%B5%9B%E5%89%8D%E6%8E%92%E5%9D%90%E5%B8%AD%23) `379.2K 🔥` `NEW`
1. [两女子相隔7公里长得一模一样](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A5%B3%E5%AD%90%E7%9B%B8%E9%9A%947%E5%85%AC%E9%87%8C%E9%95%BF%E5%BE%97%E4%B8%80%E6%A8%A1%E4%B8%80%E6%A0%B7%23) `350.4K 🔥` `NEW`
1. [政府工作报告中的新提法](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%E4%B8%AD%E7%9A%84%E6%96%B0%E6%8F%90%E6%B3%95%23) `299.1K 🔥` `NEW`
1. [伊朗封锁海峡台湾担心快断气了](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B0%81%E9%94%81%E6%B5%B7%E5%B3%A1%E5%8F%B0%E6%B9%BE%E6%8B%85%E5%BF%83%E5%BF%AB%E6%96%AD%E6%B0%94%E4%BA%86%23) `284.9K 🔥` `NEW`
1. [比亚迪闪充零下30度12分钟充饱](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E9%97%AA%E5%85%85%E9%9B%B6%E4%B8%8B30%E5%BA%A612%E5%88%86%E9%92%9F%E5%85%85%E9%A5%B1%23) `261.5K 🔥` `NEW`
1. [吕严我家那小子录制路透](https://s.weibo.com/weibo?q=%23%E5%90%95%E4%B8%A5%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%E5%BD%95%E5%88%B6%E8%B7%AF%E9%80%8F%23) `256.5K 🔥` `NEW`
1. [罗意威大秀阵容 (Luo Yiwei's big show lineup)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%84%8F%E5%A8%81%E5%A4%A7%E7%A7%80%E9%98%B5%E5%AE%B9%23) `251.0K 🔥` `NEW`
1. [委员说家长焦虑让太多孩子过早学习](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E8%AF%B4%E5%AE%B6%E9%95%BF%E7%84%A6%E8%99%91%E8%AE%A9%E5%A4%AA%E5%A4%9A%E5%AD%A9%E5%AD%90%E8%BF%87%E6%97%A9%E5%AD%A6%E4%B9%A0%23) `248.9K 🔥` `NEW`
1. [伊朗避实就虚打击美军](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%81%BF%E5%AE%9E%E5%B0%B1%E8%99%9A%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%23) `236.7K 🔥` `NEW`
1. [AG爱笑](https://s.weibo.com/weibo?q=%23AG%E7%88%B1%E7%AC%91%23) `228.5K 🔥` `NEW`
1. [伊朗每天都向以色列发射导弹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AF%8F%E5%A4%A9%E9%83%BD%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%E5%8F%91%E5%B0%84%E5%AF%BC%E5%BC%B9%23) `178.3K 🔥` `NEW`
1. [比亚迪全球首创闪充桩来了](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%85%A8%E7%90%83%E9%A6%96%E5%88%9B%E9%97%AA%E5%85%85%E6%A1%A9%E6%9D%A5%E4%BA%86%23) `178.3K 🔥` `NEW`
1. [伊朗称击落一架美军F15战斗机](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%87%BB%E8%90%BD%E4%B8%80%E6%9E%B6%E7%BE%8E%E5%86%9BF15%E6%88%98%E6%96%97%E6%9C%BA%23) `165.2K 🔥` `NEW`
1. [女子收到刮刮乐生日花束刮出80万元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%94%B6%E5%88%B0%E5%88%AE%E5%88%AE%E4%B9%90%E7%94%9F%E6%97%A5%E8%8A%B1%E6%9D%9F%E5%88%AE%E5%87%BA80%E4%B8%87%E5%85%83%23) `145.0K 🔥` `NEW`
1. [建议解决公积金看得到用不了难题](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%A7%A3%E5%86%B3%E5%85%AC%E7%A7%AF%E9%87%91%E7%9C%8B%E5%BE%97%E5%88%B0%E7%94%A8%E4%B8%8D%E4%BA%86%E9%9A%BE%E9%A2%98%23) `143.6K 🔥` `NEW`
1. [美驻联合国代表让伊朗代表小心点](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%A9%BB%E8%81%94%E5%90%88%E5%9B%BD%E4%BB%A3%E8%A1%A8%E8%AE%A9%E4%BC%8A%E6%9C%97%E4%BB%A3%E8%A1%A8%E5%B0%8F%E5%BF%83%E7%82%B9%23) `132.9K 🔥` `NEW`
1. [王一博巴黎随拍记录 (Wang Yibo Paris shooting record)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%B7%B4%E9%BB%8E%E9%9A%8F%E6%8B%8D%E8%AE%B0%E5%BD%95%23) `119.0K 🔥` `NEW`
1. [原来爸妈年轻时比我们还疯](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%88%B8%E5%A6%88%E5%B9%B4%E8%BD%BB%E6%97%B6%E6%AF%94%E6%88%91%E4%BB%AC%E8%BF%98%E7%96%AF%23) `115.8K 🔥` `NEW`
1. [上海网约公交车票价仅1元](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%BD%91%E7%BA%A6%E5%85%AC%E4%BA%A4%E8%BD%A6%E7%A5%A8%E4%BB%B7%E4%BB%851%E5%85%83%23) `112.8K 🔥` `NEW`
1. [贺峻霖 这是一个梗](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%20%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E6%A2%97%23) `106.5K 🔥` `NEW`
1. [真正长大了好像就是这样](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E9%95%BF%E5%A4%A7%E4%BA%86%E5%A5%BD%E5%83%8F%E5%B0%B1%E6%98%AF%E8%BF%99%E6%A0%B7%23) `93.3K 🔥` `NEW`
1. [委员谈女性如何平衡生育与工作](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E8%B0%88%E5%A5%B3%E6%80%A7%E5%A6%82%E4%BD%95%E5%B9%B3%E8%A1%A1%E7%94%9F%E8%82%B2%E4%B8%8E%E5%B7%A5%E4%BD%9C%23) `90.8K 🔥` `NEW`
1. [6个月宝宝第一次吃香蕉表情绝了](https://s.weibo.com/weibo?q=%236%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%90%83%E9%A6%99%E8%95%89%E8%A1%A8%E6%83%85%E7%BB%9D%E4%BA%86%23) `88.8K 🔥` `NEW`
1. [伊朗发射带1吨重弹头导弹打以色列 (Iran launches missile with 1-ton heavy warhead to hit Israel)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B0%84%E5%B8%A61%E5%90%A8%E9%87%8D%E5%BC%B9%E5%A4%B4%E5%AF%BC%E5%BC%B9%E6%89%93%E4%BB%A5%E8%89%B2%E5%88%97%23) `411.6K 🔥` `+27%`
1. [建议优化大学生婚育教育体系 (Suggestions on optimizing the marriage and childbearing education system for college students)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%BC%98%E5%8C%96%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%A9%9A%E8%82%B2%E6%95%99%E8%82%B2%E4%BD%93%E7%B3%BB%23) `289.8K 🔥` `+69%`
1. [高铁一等座4元二等座8元 (High-speed rail first-class seat 4 yuan, second-class seat 8 yuan)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E4%B8%80%E7%AD%89%E5%BA%A74%E5%85%83%E4%BA%8C%E7%AD%89%E5%BA%A78%E5%85%83%23) `277.6K 🔥` `+63%`
1. [鹤男](https://s.weibo.com/weibo?q=%23%E9%B9%A4%E7%94%B7%23) `266.6K 🔥` `+64%`
1. [代表说农民每月200元养老金太亏了](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E8%AF%B4%E5%86%9C%E6%B0%91%E6%AF%8F%E6%9C%88200%E5%85%83%E5%85%BB%E8%80%81%E9%87%91%E5%A4%AA%E4%BA%8F%E4%BA%86%23) `263.9K 🔥` `+60%`
1. [伊朗报复美以](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8A%A5%E5%A4%8D%E7%BE%8E%E4%BB%A5%23) `244.2K 🔥` `+43%`
1. [纯真年代的爱情 烂尾 (Love in the age of innocence ended)](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%20%E7%83%82%E5%B0%BE%23) `241.7K 🔥` `+46%`
1. [攻玉主演 侯明昊鹤男 (Gong Yu starring Hou Minghao and Henan)](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%E4%B8%BB%E6%BC%94%20%E4%BE%AF%E6%98%8E%E6%98%8A%E9%B9%A4%E7%94%B7%23) `239.0K 🔥` `+42%`
1. [WBG对战AL (WBG vs. AL)](https://s.weibo.com/weibo?q=%23WBG%E5%AF%B9%E6%88%98AL%23) `218.5K 🔥` `+158%`
1. [1岁9个月宝宝吃花生呛到脑部受损](https://s.weibo.com/weibo?q=%231%E5%B2%819%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E5%90%83%E8%8A%B1%E7%94%9F%E5%91%9B%E5%88%B0%E8%84%91%E9%83%A8%E5%8F%97%E6%8D%9F%23) `149.8K 🔥` `+67%`
1. [建议短视频凌晨1点至5点深夜静默](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%9F%AD%E8%A7%86%E9%A2%91%E5%87%8C%E6%99%A81%E7%82%B9%E8%87%B35%E7%82%B9%E6%B7%B1%E5%A4%9C%E9%9D%99%E9%BB%98%23) `1.1M 🔥`
1. [春假清明连休6天家长称很无奈 (Parents said they were helpless after taking six consecutive days off during the Qingming Festival during the spring break.)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%81%87%E6%B8%85%E6%98%8E%E8%BF%9E%E4%BC%916%E5%A4%A9%E5%AE%B6%E9%95%BF%E7%A7%B0%E5%BE%88%E6%97%A0%E5%A5%88%23) `603.7K 🔥`
1. [建议不调休的代表被记者围住了 (The representative who suggested not taking the day off was surrounded by reporters)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%B0%83%E4%BC%91%E7%9A%84%E4%BB%A3%E8%A1%A8%E8%A2%AB%E8%AE%B0%E8%80%85%E5%9B%B4%E4%BD%8F%E4%BA%86%23) `299.4K 🔥`
1. [比Deepfake更严重的AI出现了](https://s.weibo.com/weibo?q=%23%E6%AF%94Deepfake%E6%9B%B4%E4%B8%A5%E9%87%8D%E7%9A%84AI%E5%87%BA%E7%8E%B0%E4%BA%86%23) `156.3K 🔥`
1. [王天辰侯雯元 莞莞类卿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E4%BE%AF%E9%9B%AF%E5%85%83%20%E8%8E%9E%E8%8E%9E%E7%B1%BB%E5%8D%BF%23) `112.8K 🔥`
1. [现在就出发4](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `271.8K 🔥` `-65%`
1. [政府工作报告里的民生红包 (People’s livelihood red envelopes in the government work report)](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%E9%87%8C%E7%9A%84%E6%B0%91%E7%94%9F%E7%BA%A2%E5%8C%85%23) `257.3K 🔥` `-59%`
1. [京东2025年收入13091亿](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C2025%E5%B9%B4%E6%94%B6%E5%85%A513091%E4%BA%BF%23) `118.2K 🔥` `-40%`
1. [现在就出发](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `112.8K 🔥` `-50%`
1. [日本正紧张研判是否支援美军](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%AD%A3%E7%B4%A7%E5%BC%A0%E7%A0%94%E5%88%A4%E6%98%AF%E5%90%A6%E6%94%AF%E6%8F%B4%E7%BE%8E%E5%86%9B%23) `112.7K 🔥` `-27%`
1. [薛之谦万兽之王长沙站开启预售](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E9%95%BF%E6%B2%99%E7%AB%99%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE%23) `105.7K 🔥` `-27%`
1. [租房能不能别再开广角拍房子 (When renting a house, can you please stop taking wide-angle shots of the house?)](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E6%88%BF%E8%83%BD%E4%B8%8D%E8%83%BD%E5%88%AB%E5%86%8D%E5%BC%80%E5%B9%BF%E8%A7%92%E6%8B%8D%E6%88%BF%E5%AD%90%23) `101.5K 🔥` `-39%`
1. [花84万买到的140平步梯顶楼 (The top floor of a 140-square-foot staircase bought for 840,000 yuan)](https://s.weibo.com/weibo?q=%23%E8%8A%B184%E4%B8%87%E4%B9%B0%E5%88%B0%E7%9A%84140%E5%B9%B3%E6%AD%A5%E6%A2%AF%E9%A1%B6%E6%A5%BC%23) `93.0K 🔥` `-42%`
1. [薛之谦万兽之王巡回演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `89.8K 🔥` `-46%`

Updated at 2026-03-05 21:23:50

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
