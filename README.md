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

1. [海马体为出片要求穿长裙致孕妇摔倒 (Hippocampus required a pregnant woman to wear a long skirt for a film, causing her to fall)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E9%A9%AC%E4%BD%93%E4%B8%BA%E5%87%BA%E7%89%87%E8%A6%81%E6%B1%82%E7%A9%BF%E9%95%BF%E8%A3%99%E8%87%B4%E5%AD%95%E5%A6%87%E6%91%94%E5%80%92%23) `412.6K 🔥` `NEW`
1. [以色列总理称将继续袭击伊朗黎巴嫩](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%90%86%E7%A7%B0%E5%B0%86%E7%BB%A7%E7%BB%AD%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E9%BB%8E%E5%B7%B4%E5%AB%A9%23) `136.6K 🔥` `NEW`
1. [女孩地铁吐血用外套擦地让人心疼](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E7%94%A8%E5%A4%96%E5%A5%97%E6%93%A6%E5%9C%B0%E8%AE%A9%E4%BA%BA%E5%BF%83%E7%96%BC%23) `134.5K 🔥` `NEW`
1. [张凌赫为什么被称为粉底液将军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%E7%A7%B0%E4%B8%BA%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%23) `111.1K 🔥` `NEW`
1. [金价大跌没人扫货了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E6%B2%A1%E4%BA%BA%E6%89%AB%E8%B4%A7%E4%BA%86%23) `109.2K 🔥` `NEW`
1. [伊朗称美为操纵市场散布假新闻](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E4%B8%BA%E6%93%8D%E7%BA%B5%E5%B8%82%E5%9C%BA%E6%95%A3%E5%B8%83%E5%81%87%E6%96%B0%E9%97%BB%23) `108.1K 🔥` `NEW`
1. [开推4迪丽热巴退出丁程鑫加入](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8E%A84%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%80%80%E5%87%BA%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8A%A0%E5%85%A5%23) `107.2K 🔥` `NEW`
1. [品牌金饰集体降价](https://s.weibo.com/weibo?q=%23%E5%93%81%E7%89%8C%E9%87%91%E9%A5%B0%E9%9B%86%E4%BD%93%E9%99%8D%E4%BB%B7%23) `88.3K 🔥` `NEW`
1. [家人否认喂猫被捅死男子拿刀下楼](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%BA%BA%E5%90%A6%E8%AE%A4%E5%96%82%E7%8C%AB%E8%A2%AB%E6%8D%85%E6%AD%BB%E7%94%B7%E5%AD%90%E6%8B%BF%E5%88%80%E4%B8%8B%E6%A5%BC%23) `85.8K 🔥` `NEW`
1. [手机涨价潮到来](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E6%BD%AE%E5%88%B0%E6%9D%A5%23) `78.5K 🔥` `NEW`
1. [中园石化加油站称名字经过审批 (Zhongyuan Petrochemical Gas Station says its name has been approved)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%AD%E7%9F%B3%E5%8C%96%E5%8A%A0%E6%B2%B9%E7%AB%99%E7%A7%B0%E5%90%8D%E5%AD%97%E7%BB%8F%E8%BF%87%E5%AE%A1%E6%89%B9%23) `71.9K 🔥` `NEW`
1. [种地吧4](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A74%23) `70.8K 🔥` `NEW`
1. [男孩被要求互打后坠亡老师仍在上课](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E8%A2%AB%E8%A6%81%E6%B1%82%E4%BA%92%E6%89%93%E5%90%8E%E5%9D%A0%E4%BA%A1%E8%80%81%E5%B8%88%E4%BB%8D%E5%9C%A8%E4%B8%8A%E8%AF%BE%23) `69.6K 🔥` `NEW`
1. [曝Rookie回归](https://s.weibo.com/weibo?q=%23%E6%9B%9DRookie%E5%9B%9E%E5%BD%92%23) `68.1K 🔥` `NEW`
1. [伊朗称又击落一架美军战机](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%8F%88%E5%87%BB%E8%90%BD%E4%B8%80%E6%9E%B6%E7%BE%8E%E5%86%9B%E6%88%98%E6%9C%BA%23) `62.4K 🔥` `NEW`
1. [真正的麻辣香锅已经非常罕见了](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%BA%BB%E8%BE%A3%E9%A6%99%E9%94%85%E5%B7%B2%E7%BB%8F%E9%9D%9E%E5%B8%B8%E7%BD%95%E8%A7%81%E4%BA%86%23) `54.1K 🔥` `NEW`
1. [美国纽约机场接连发生事故](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%BA%BD%E7%BA%A6%E6%9C%BA%E5%9C%BA%E6%8E%A5%E8%BF%9E%E5%8F%91%E7%94%9F%E4%BA%8B%E6%95%85%23) `991.4K 🔥` `+34%`
1. [四川天府机场多名老人扶梯上逆行](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%A4%A9%E5%BA%9C%E6%9C%BA%E5%9C%BA%E5%A4%9A%E5%90%8D%E8%80%81%E4%BA%BA%E6%89%B6%E6%A2%AF%E4%B8%8A%E9%80%86%E8%A1%8C%23) `733.2K 🔥` `+347%`
1. [梦想的接力最燃](https://s.weibo.com/weibo?q=%23%E6%A2%A6%E6%83%B3%E7%9A%84%E6%8E%A5%E5%8A%9B%E6%9C%80%E7%87%83%23) `562.9K 🔥` `+37%`
1. [金价急跌原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%80%A5%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `111.0K 🔥` `+25%`
1. [男大学生患桃花癫一周挥霍5万 (Male college student suffering from peach blossom epilepsy squandered 50,000 yuan a week)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%82%A3%E6%A1%83%E8%8A%B1%E7%99%AB%E4%B8%80%E5%91%A8%E6%8C%A5%E9%9C%8D5%E4%B8%87%23) `110.5K 🔥` `+27%`
1. [误会孙女被打爷爷重伤其同学获刑 (Granddaughter was beaten by misunderstanding, grandfather seriously injured his classmate and was sentenced)](https://s.weibo.com/weibo?q=%23%E8%AF%AF%E4%BC%9A%E5%AD%99%E5%A5%B3%E8%A2%AB%E6%89%93%E7%88%B7%E7%88%B7%E9%87%8D%E4%BC%A4%E5%85%B6%E5%90%8C%E5%AD%A6%E8%8E%B7%E5%88%91%23) `110.2K 🔥` `+24%`
1. [13年来首次油价调控意味着什么 (What does the first oil price control in 13 years mean?)](https://s.weibo.com/weibo?q=%2313%E5%B9%B4%E6%9D%A5%E9%A6%96%E6%AC%A1%E6%B2%B9%E4%BB%B7%E8%B0%83%E6%8E%A7%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `108.8K 🔥` `+25%`
1. [阚清子晒近照 (Kan Qingzi takes a recent photo)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%99%92%E8%BF%91%E7%85%A7%23) `108.7K 🔥` `+24%`
1. [陈锦鸿把自闭症儿子养成青年钢琴家 (Chen Jinhong raised his autistic son to be a young pianist)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%94%A6%E9%B8%BF%E6%8A%8A%E8%87%AA%E9%97%AD%E7%97%87%E5%84%BF%E5%AD%90%E5%85%BB%E6%88%90%E9%9D%92%E5%B9%B4%E9%92%A2%E7%90%B4%E5%AE%B6%23) `107.8K 🔥` `+22%`
1. [情侣住酒店正亲密时被员工开窗 (Couple staying in hotel was having sex when employee opened window)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E4%BD%8F%E9%85%92%E5%BA%97%E6%AD%A3%E4%BA%B2%E5%AF%86%E6%97%B6%E8%A2%AB%E5%91%98%E5%B7%A5%E5%BC%80%E7%AA%97%23) `107.6K 🔥` `+28%`
1. [大学是离异性最远的阶段](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E6%98%AF%E7%A6%BB%E5%BC%82%E6%80%A7%E6%9C%80%E8%BF%9C%E7%9A%84%E9%98%B6%E6%AE%B5%23) `106.9K 🔥` `+47%`
1. [周杰伦新专辑太阳之子](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E4%B8%93%E8%BE%91%E5%A4%AA%E9%98%B3%E4%B9%8B%E5%AD%90%23) `106.6K 🔥` `+26%`
1. [郑钦文迈阿密0比2萨巴伦卡](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%BF%88%E9%98%BF%E5%AF%860%E6%AF%942%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%23) `90.5K 🔥` `+114%`
1. [王俊凯晒录音照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%99%92%E5%BD%95%E9%9F%B3%E7%85%A7%23) `81.9K 🔥` `+84%`
1. [国乒公布伦敦世乒赛初步参赛名单 (National Table Tennis Team announces preliminary list of participants for the World Table Tennis Championships in London)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%85%AC%E5%B8%83%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%88%9D%E6%AD%A5%E5%8F%82%E8%B5%9B%E5%90%8D%E5%8D%95%23) `59.3K 🔥` `+21%`
1. [对国内成品油价格采取临时调控 (Adopt temporary controls on domestic refined oil prices)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%9B%BD%E5%86%85%E6%88%90%E5%93%81%E6%B2%B9%E4%BB%B7%E6%A0%BC%E9%87%87%E5%8F%96%E4%B8%B4%E6%97%B6%E8%B0%83%E6%8E%A7%23) `137.6K 🔥`
1. [周琦8罚0中 (Zhou Qi made 0 of 8 free throws)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%90%A68%E7%BD%9A0%E4%B8%AD%23) `130.7K 🔥`
1. [朝鲜称与日本没什么可谈的 (North Korea says it has nothing to discuss with Japan)](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E7%A7%B0%E4%B8%8E%E6%97%A5%E6%9C%AC%E6%B2%A1%E4%BB%80%E4%B9%88%E5%8F%AF%E8%B0%88%E7%9A%84%23) `120.6K 🔥`
1. [郑钦文无缘迈阿密赛八强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%97%A0%E7%BC%98%E8%BF%88%E9%98%BF%E5%AF%86%E8%B5%9B%E5%85%AB%E5%BC%BA%23) `111.4K 🔥`
1. [美股 (US stocks)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `91.8K 🔥`
1. [以官员称美伊本周将在巴基斯坦会谈 (Israeli officials say US, Iran will hold talks in Pakistan this week)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%AE%98%E5%91%98%E7%A7%B0%E7%BE%8E%E4%BC%8A%E6%9C%AC%E5%91%A8%E5%B0%86%E5%9C%A8%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E4%BC%9A%E8%B0%88%23) `86.5K 🔥`
1. [老挝1千余辆电动车15天售罄 (More than 1,000 electric vehicles in Laos sold out in 15 days)](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%8C%9D1%E5%8D%83%E4%BD%99%E8%BE%86%E7%94%B5%E5%8A%A8%E8%BD%A615%E5%A4%A9%E5%94%AE%E7%BD%84%23) `84.4K 🔥`
1. [开始推理吧4 (Let’s start reasoning 4)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A74%23) `82.4K 🔥`
1. [樊振东获伦敦世乒赛直通资格](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%8E%B7%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E7%9B%B4%E9%80%9A%E8%B5%84%E6%A0%BC%23) `67.5K 🔥`
1. [伊朗地下设施堆放一排排导弹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9C%B0%E4%B8%8B%E8%AE%BE%E6%96%BD%E5%A0%86%E6%94%BE%E4%B8%80%E6%8E%92%E6%8E%92%E5%AF%BC%E5%BC%B9%23) `66.8K 🔥`
1. [为什么我们要多吃水果 (Why we should eat more fruits)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%91%E4%BB%AC%E8%A6%81%E5%A4%9A%E5%90%83%E6%B0%B4%E6%9E%9C%23) `66.8K 🔥`
1. [范丞丞直播啃玉米](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9B%B4%E6%92%AD%E5%95%83%E7%8E%89%E7%B1%B3%23) `65.7K 🔥`
1. [伊朗称特朗普推迟袭击表态为心理战](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E6%8E%A8%E8%BF%9F%E8%A2%AD%E5%87%BB%E8%A1%A8%E6%80%81%E4%B8%BA%E5%BF%83%E7%90%86%E6%88%98%23) `58.3K 🔥`
1. [鞠婧祎彩排 (Ju Jingyi rehearsal)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%BD%A9%E6%8E%92%23) `56.7K 🔥`
1. [张家齐说直播带货不是天才的陨落 (Zhang Jiaqi said that live streaming is not the fall of a genius)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%AF%B4%E7%9B%B4%E6%92%AD%E5%B8%A6%E8%B4%A7%E4%B8%8D%E6%98%AF%E5%A4%A9%E6%89%8D%E7%9A%84%E9%99%A8%E8%90%BD%23) `49.6K 🔥`
1. [上过跑男的团体都解散了 (All the groups that were featured on Running Man have disbanded.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E8%BF%87%E8%B7%91%E7%94%B7%E7%9A%84%E5%9B%A2%E4%BD%93%E9%83%BD%E8%A7%A3%E6%95%A3%E4%BA%86%23) `48.5K 🔥`
1. [杨洋手部又受伤了 (Yang Yang’s hand was injured again)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%89%8B%E9%83%A8%E5%8F%88%E5%8F%97%E4%BC%A4%E4%BA%86%23) `44.4K 🔥`
1. [20岁女生长期开灯睡觉胖到200斤 (A 20-year-old girl gained weight by sleeping with the light on for a long time and gained 200 pounds)](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%A5%B3%E7%94%9F%E9%95%BF%E6%9C%9F%E5%BC%80%E7%81%AF%E7%9D%A1%E8%A7%89%E8%83%96%E5%88%B0200%E6%96%A4%23) `109.8K 🔥` `-79%`
1. [美伊就中东敌对行动解决方案进行对话](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%B0%B1%E4%B8%AD%E4%B8%9C%E6%95%8C%E5%AF%B9%E8%A1%8C%E5%8A%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88%E8%BF%9B%E8%A1%8C%E5%AF%B9%E8%AF%9D%23) `91.4K 🔥` `-34%`

Updated at 2026-03-24 07:50:59

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
