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

1. [镜片装反孩子暴涨到900度妈妈崩溃 (The child’s lens was installed backwards and the temperature soared to 900 degrees, and the mother collapsed)](https://s.weibo.com/weibo?q=%23%E9%95%9C%E7%89%87%E8%A3%85%E5%8F%8D%E5%AD%A9%E5%AD%90%E6%9A%B4%E6%B6%A8%E5%88%B0900%E5%BA%A6%E5%A6%88%E5%A6%88%E5%B4%A9%E6%BA%83%23) `1.2M 🔥` `NEW`
1. [女子怒怼空乘不会中文还飞国际航班](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%92%E6%80%BC%E7%A9%BA%E4%B9%98%E4%B8%8D%E4%BC%9A%E4%B8%AD%E6%96%87%E8%BF%98%E9%A3%9E%E5%9B%BD%E9%99%85%E8%88%AA%E7%8F%AD%23) `894.6K 🔥` `NEW`
1. [人民海军成立77周年](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%B5%B7%E5%86%9B%E6%88%90%E7%AB%8B77%E5%91%A8%E5%B9%B4%23) `854.0K 🔥` `NEW`
1. [美要求美在伊朗公民立即离境](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%A6%81%E6%B1%82%E7%BE%8E%E5%9C%A8%E4%BC%8A%E6%9C%97%E5%85%AC%E6%B0%91%E7%AB%8B%E5%8D%B3%E7%A6%BB%E5%A2%83%23) `829.2K 🔥` `NEW`
1. [库克称苹果地图发布是首个重大错误](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E7%A7%B0%E8%8B%B9%E6%9E%9C%E5%9C%B0%E5%9B%BE%E5%8F%91%E5%B8%83%E6%98%AF%E9%A6%96%E4%B8%AA%E9%87%8D%E5%A4%A7%E9%94%99%E8%AF%AF%23) `707.1K 🔥` `NEW`
1. [面试把公司聊解散了](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E6%8A%8A%E5%85%AC%E5%8F%B8%E8%81%8A%E8%A7%A3%E6%95%A3%E4%BA%86%23) `663.1K 🔥` `NEW`
1. [宝曼兰朵悦彩之境](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%9B%BC%E5%85%B0%E6%9C%B5%E6%82%A6%E5%BD%A9%E4%B9%8B%E5%A2%83%23) `607.8K 🔥` `NEW`
1. [李昀锐公主抱最痛的一次](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%85%AC%E4%B8%BB%E6%8A%B1%E6%9C%80%E7%97%9B%E7%9A%84%E4%B8%80%E6%AC%A1%23) `560.8K 🔥` `NEW`
1. [爱吃榴莲和爱喝鸡汤的都沉默了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E6%A6%B4%E8%8E%B2%E5%92%8C%E7%88%B1%E5%96%9D%E9%B8%A1%E6%B1%A4%E7%9A%84%E9%83%BD%E6%B2%89%E9%BB%98%E4%BA%86%23) `509.9K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `508.4K 🔥` `NEW`
1. [12位志愿军烈士在沈阳安葬 (12 Volunteer Army martyrs were buried in Shenyang)](https://s.weibo.com/weibo?q=%2312%E4%BD%8D%E5%BF%97%E6%84%BF%E5%86%9B%E7%83%88%E5%A3%AB%E5%9C%A8%E6%B2%88%E9%98%B3%E5%AE%89%E8%91%AC%23) `494.8K 🔥` `NEW`
1. [夜巴黎 未成年](https://s.weibo.com/weibo?q=%23%E5%A4%9C%E5%B7%B4%E9%BB%8E%20%E6%9C%AA%E6%88%90%E5%B9%B4%23) `483.9K 🔥` `NEW`
1. [张凌赫帮粉丝修图](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B8%AE%E7%B2%89%E4%B8%9D%E4%BF%AE%E5%9B%BE%23) `474.2K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `466.2K 🔥` `NEW`
1. [尹正 嫌尬了滚出去](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%AD%A3%20%E5%AB%8C%E5%B0%AC%E4%BA%86%E6%BB%9A%E5%87%BA%E5%8E%BB%23) `458.6K 🔥` `NEW`
1. [QQ音乐巅峰榜十大艺人](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%E5%B7%85%E5%B3%B0%E6%A6%9C%E5%8D%81%E5%A4%A7%E8%89%BA%E4%BA%BA%23) `455.3K 🔥` `NEW`
1. [稀土公司副总向境外泄露7项国家秘密](https://s.weibo.com/weibo?q=%23%E7%A8%80%E5%9C%9F%E5%85%AC%E5%8F%B8%E5%89%AF%E6%80%BB%E5%90%91%E5%A2%83%E5%A4%96%E6%B3%84%E9%9C%B27%E9%A1%B9%E5%9B%BD%E5%AE%B6%E7%A7%98%E5%AF%86%23) `305.0K 🔥` `NEW`
1. [谢娜新节目娜就聊姐姐](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%96%B0%E8%8A%82%E7%9B%AE%E5%A8%9C%E5%B0%B1%E8%81%8A%E5%A7%90%E5%A7%90%23) `298.5K 🔥` `NEW`
1. [伊能静张豆豆发生争执被孙杨识破](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E5%BC%A0%E8%B1%86%E8%B1%86%E5%8F%91%E7%94%9F%E4%BA%89%E6%89%A7%E8%A2%AB%E5%AD%99%E6%9D%A8%E8%AF%86%E7%A0%B4%23) `276.1K 🔥` `NEW`
1. [第五人格演绎之星](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E6%BC%94%E7%BB%8E%E4%B9%8B%E6%98%9F%23) `273.5K 🔥` `NEW`
1. [登陆少年ELLE五月刊双封面 (Teenager ELLE May issue double cover)](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4ELLE%E4%BA%94%E6%9C%88%E5%88%8A%E5%8F%8C%E5%B0%81%E9%9D%A2%23) `272.3K 🔥` `NEW`
1. [陆地cp](https://s.weibo.com/weibo?q=%23%E9%99%86%E5%9C%B0cp%23) `266.2K 🔥` `NEW`
1. [曝刘宇宁宋祖儿同款地板家具](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E5%AE%87%E5%AE%81%E5%AE%8B%E7%A5%96%E5%84%BF%E5%90%8C%E6%AC%BE%E5%9C%B0%E6%9D%BF%E5%AE%B6%E5%85%B7%23) `258.3K 🔥` `NEW`
1. [HLE冲击LCK第一](https://s.weibo.com/weibo?q=%23HLE%E5%86%B2%E5%87%BBLCK%E7%AC%AC%E4%B8%80%23) `255.5K 🔥` `NEW`
1. [李小冉王濛唐艺昕hi6合照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%8E%8B%E6%BF%9B%E5%94%90%E8%89%BA%E6%98%95hi6%E5%90%88%E7%85%A7%23) `251.1K 🔥` `NEW`
1. [意甲球员嫖娼派对受害者超百人](https://s.weibo.com/weibo?q=%23%E6%84%8F%E7%94%B2%E7%90%83%E5%91%98%E5%AB%96%E5%A8%BC%E6%B4%BE%E5%AF%B9%E5%8F%97%E5%AE%B3%E8%80%85%E8%B6%85%E7%99%BE%E4%BA%BA%23) `250.9K 🔥` `NEW`
1. [马頔一个人把妻旅老婆团夸成翘嘴](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%8A%8A%E5%A6%BB%E6%97%85%E8%80%81%E5%A9%86%E5%9B%A2%E5%A4%B8%E6%88%90%E7%BF%98%E5%98%B4%23) `250.7K 🔥` `NEW`
1. [南昌3死3伤窒息事故调查报告公布](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%98%8C3%E6%AD%BB3%E4%BC%A4%E7%AA%92%E6%81%AF%E4%BA%8B%E6%95%85%E8%B0%83%E6%9F%A5%E6%8A%A5%E5%91%8A%E5%85%AC%E5%B8%83%23) `250.5K 🔥` `NEW`
1. [宋祖儿 刘宇宁](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%20%E5%88%98%E5%AE%87%E5%AE%81%23) `250.3K 🔥` `NEW`
1. [老詹砸烂数据模型](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%A9%B9%E7%A0%B8%E7%83%82%E6%95%B0%E6%8D%AE%E6%A8%A1%E5%9E%8B%23) `249.8K 🔥` `NEW`
1. [妻子产后夜夜崩溃丈夫紧抱不撒手 (Wife breaks down every night after giving birth, husband hugs her tightly and won’t let go)](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E4%BA%A7%E5%90%8E%E5%A4%9C%E5%A4%9C%E5%B4%A9%E6%BA%83%E4%B8%88%E5%A4%AB%E7%B4%A7%E6%8A%B1%E4%B8%8D%E6%92%92%E6%89%8B%23) `234.2K 🔥` `NEW`
1. [女生游泳月卡只用23天](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%B8%B8%E6%B3%B3%E6%9C%88%E5%8D%A1%E5%8F%AA%E7%94%A823%E5%A4%A9%23) `233.1K 🔥` `NEW`
1. [学历全家最高 工资全家最低](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E5%8E%86%E5%85%A8%E5%AE%B6%E6%9C%80%E9%AB%98%20%E5%B7%A5%E8%B5%84%E5%85%A8%E5%AE%B6%E6%9C%80%E4%BD%8E%23) `207.5K 🔥` `NEW`
1. [父亲家暴12岁女儿致其骨折气胸](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%AE%B6%E6%9A%B412%E5%B2%81%E5%A5%B3%E5%84%BF%E8%87%B4%E5%85%B6%E9%AA%A8%E6%8A%98%E6%B0%94%E8%83%B8%23) `194.2K 🔥` `NEW`
1. [爸爸陪6岁儿子跑步7个月减重13斤](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E9%99%AA6%E5%B2%81%E5%84%BF%E5%AD%90%E8%B7%91%E6%AD%A57%E4%B8%AA%E6%9C%88%E5%87%8F%E9%87%8D13%E6%96%A4%23) `188.3K 🔥` `NEW`
1. [欢瑞世纪曾签约杨紫任嘉伦](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E7%91%9E%E4%B8%96%E7%BA%AA%E6%9B%BE%E7%AD%BE%E7%BA%A6%E6%9D%A8%E7%B4%AB%E4%BB%BB%E5%98%89%E4%BC%A6%23) `161.6K 🔥` `NEW`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `161.1K 🔥` `NEW`
1. [欢瑞世纪涉数百起证券虚假陈述纠纷](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E7%91%9E%E4%B8%96%E7%BA%AA%E6%B6%89%E6%95%B0%E7%99%BE%E8%B5%B7%E8%AF%81%E5%88%B8%E8%99%9A%E5%81%87%E9%99%88%E8%BF%B0%E7%BA%A0%E7%BA%B7%23) `160.3K 🔥` `NEW`
1. [父亲回应女儿赴泰过泼水节被卖园区](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%84%BF%E8%B5%B4%E6%B3%B0%E8%BF%87%E6%B3%BC%E6%B0%B4%E8%8A%82%E8%A2%AB%E5%8D%96%E5%9B%AD%E5%8C%BA%23) `160.0K 🔥` `NEW`
1. [受AI冲击短剧霸总回家种地](https://s.weibo.com/weibo?q=%23%E5%8F%97AI%E5%86%B2%E5%87%BB%E7%9F%AD%E5%89%A7%E9%9C%B8%E6%80%BB%E5%9B%9E%E5%AE%B6%E7%A7%8D%E5%9C%B0%23) `159.3K 🔥` `NEW`
1. [登陆少年ELLE秒切 (Log in to Junior ELLE and cut it instantly)](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4ELLE%E7%A7%92%E5%88%87%23) `158.6K 🔥` `NEW`
1. [异环开服](https://s.weibo.com/weibo?q=%23%E5%BC%82%E7%8E%AF%E5%BC%80%E6%9C%8D%23) `147.0K 🔥` `NEW`
1. [第五人格 扣阅历](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%20%E6%89%A3%E9%98%85%E5%8E%86%23) `146.2K 🔥` `NEW`
1. [赖清德称背后有人](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E7%A7%B0%E8%83%8C%E5%90%8E%E6%9C%89%E4%BA%BA%23) `146.1K 🔥` `NEW`
1. [齐思钧喊你来京东领补贴读好书 (Qi Sijun calls you to come to JD.com to receive subsidies and study well.)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E5%96%8A%E4%BD%A0%E6%9D%A5%E4%BA%AC%E4%B8%9C%E9%A2%86%E8%A1%A5%E8%B4%B4%E8%AF%BB%E5%A5%BD%E4%B9%A6%23) `851.3K 🔥` `+862%`
1. [奥利奥 时代少年团](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%A5%A5%20%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%23) `251.5K 🔥` `+30%`
1. [朴信惠眼睛 断崖式衰老](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E4%BF%A1%E6%83%A0%E7%9C%BC%E7%9D%9B%20%E6%96%AD%E5%B4%96%E5%BC%8F%E8%A1%B0%E8%80%81%23) `249.8K 🔥`
1. [儿子因父亲逼自己分手失联16年 (Son lost contact for 16 years because his father forced him to break up)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%9B%A0%E7%88%B6%E4%BA%B2%E9%80%BC%E8%87%AA%E5%B7%B1%E5%88%86%E6%89%8B%E5%A4%B1%E8%81%9416%E5%B9%B4%23) `264.4K 🔥` `-75%`
1. [周杰伦王俊凯 中餐厅 (Jay Chou and Wang Junkai Chinese Restaurant)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E4%B8%AD%E9%A4%90%E5%8E%85%23) `250.7K 🔥` `-48%`
1. [原来前额叶成熟是这样的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%89%8D%E9%A2%9D%E5%8F%B6%E6%88%90%E7%86%9F%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `250.0K 🔥` `-61%`
1. [女生受邀去泰国泼水节被转卖电诈园 (A girl was invited to Thailand's Water Splashing Festival and sold to a scammer)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%8F%97%E9%82%80%E5%8E%BB%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82%E8%A2%AB%E8%BD%AC%E5%8D%96%E7%94%B5%E8%AF%88%E5%9B%AD%23) `226.0K 🔥` `-71%`
1. [谁发明的厕所感应冲水 (Who invented the toilet sensor flush?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%8F%91%E6%98%8E%E7%9A%84%E5%8E%95%E6%89%80%E6%84%9F%E5%BA%94%E5%86%B2%E6%B0%B4%23) `186.9K 🔥` `-58%`

Updated at 2026-04-23 11:19:12

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
