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

1. [上交所重要公告 (Important announcements from Shanghai Stock Exchange)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%A4%E6%89%80%E9%87%8D%E8%A6%81%E5%85%AC%E5%91%8A%23) `1.1M 🔥` `NEW`
1. [今晚8点上京东 百亿补贴低至1折](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%99%9A8%E7%82%B9%E4%B8%8A%E4%BA%AC%E4%B8%9C%20%E7%99%BE%E4%BA%BF%E8%A1%A5%E8%B4%B4%E4%BD%8E%E8%87%B31%E6%8A%98%23) `609.2K 🔥` `NEW`
1. [魏如萱发长文](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E5%8F%91%E9%95%BF%E6%96%87%23) `558.6K 🔥` `NEW`
1. [职来职往是我的第一本职场教科书](https://s.weibo.com/weibo?q=%23%E8%81%8C%E6%9D%A5%E8%81%8C%E5%BE%80%E6%98%AF%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9C%AC%E8%81%8C%E5%9C%BA%E6%95%99%E7%A7%91%E4%B9%A6%23) `370.5K 🔥` `NEW`
1. [12345回应市民要求干预闷热天气](https://s.weibo.com/weibo?q=%2312345%E5%9B%9E%E5%BA%94%E5%B8%82%E6%B0%91%E8%A6%81%E6%B1%82%E5%B9%B2%E9%A2%84%E9%97%B7%E7%83%AD%E5%A4%A9%E6%B0%94%23) `297.4K 🔥` `NEW`
1. [欧冠](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%23) `294.7K 🔥` `NEW`
1. [多方回应女大学生被骗进戒网瘾学校](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%A2%AB%E9%AA%97%E8%BF%9B%E6%88%92%E7%BD%91%E7%98%BE%E5%AD%A6%E6%A0%A1%23) `284.8K 🔥` `NEW`
1. [林沐然转学全面停止](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%B2%90%E7%84%B6%E8%BD%AC%E5%AD%A6%E5%85%A8%E9%9D%A2%E5%81%9C%E6%AD%A2%23) `271.6K 🔥` `NEW`
1. [飞机上男子不满2岁幼童哭闹大声呵斥](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E4%B8%8A%E7%94%B7%E5%AD%90%E4%B8%8D%E6%BB%A12%E5%B2%81%E5%B9%BC%E7%AB%A5%E5%93%AD%E9%97%B9%E5%A4%A7%E5%A3%B0%E5%91%B5%E6%96%A5%23) `260.8K 🔥` `NEW`
1. [张雪成于东来榜一](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%88%90%E4%BA%8E%E4%B8%9C%E6%9D%A5%E6%A6%9C%E4%B8%80%23) `232.5K 🔥` `NEW`
1. [法网将诞生新科冠军 (A new champion will be born at the French Open)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E7%BD%91%E5%B0%86%E8%AF%9E%E7%94%9F%E6%96%B0%E7%A7%91%E5%86%A0%E5%86%9B%23) `232.2K 🔥` `NEW`
1. [Anthropic融资650亿](https://s.weibo.com/weibo?q=%23Anthropic%E8%9E%8D%E8%B5%84650%E4%BA%BF%23) `230.5K 🔥` `NEW`
1. [西安一企业公开采购高档香烟引质疑](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%80%E4%BC%81%E4%B8%9A%E5%85%AC%E5%BC%80%E9%87%87%E8%B4%AD%E9%AB%98%E6%A1%A3%E9%A6%99%E7%83%9F%E5%BC%95%E8%B4%A8%E7%96%91%23) `229.2K 🔥` `NEW`
1. [美对伊实施新制裁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AF%B9%E4%BC%8A%E5%AE%9E%E6%96%BD%E6%96%B0%E5%88%B6%E8%A3%81%23) `228.8K 🔥` `NEW`
1. [11岁女孩被32岁男子侵犯感染性病](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%A2%AB32%E5%B2%81%E7%94%B7%E5%AD%90%E4%BE%B5%E7%8A%AF%E6%84%9F%E6%9F%93%E6%80%A7%E7%97%85%23) `226.4K 🔥` `NEW`
1. [iPhone18Pro无缘钛金属](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%97%A0%E7%BC%98%E9%92%9B%E9%87%91%E5%B1%9E%23) `225.0K 🔥` `NEW`
1. [曾沛慈体面](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%BD%93%E9%9D%A2%23) `221.7K 🔥` `NEW`
1. [下周天考数学 可下周天是高考](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%91%A8%E5%A4%A9%E8%80%83%E6%95%B0%E5%AD%A6%20%E5%8F%AF%E4%B8%8B%E5%91%A8%E5%A4%A9%E6%98%AF%E9%AB%98%E8%80%83%23) `218.5K 🔥` `NEW`
1. [用热熔枪烫女孩嘴唇老师辩称失误](https://s.weibo.com/weibo?q=%23%E7%94%A8%E7%83%AD%E7%86%94%E6%9E%AA%E7%83%AB%E5%A5%B3%E5%AD%A9%E5%98%B4%E5%94%87%E8%80%81%E5%B8%88%E8%BE%A9%E7%A7%B0%E5%A4%B1%E8%AF%AF%23) `216.0K 🔥` `NEW`
1. [苏新皓疑似做了个网站](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E7%96%91%E4%BC%BC%E5%81%9A%E4%BA%86%E4%B8%AA%E7%BD%91%E7%AB%99%23) `207.5K 🔥` `NEW`
1. [卫健委回应名医让儿子代诊致人流产 (The National Health Commission responds to a famous doctor’s request for his son’s medical consultation, which caused a miscarriage)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E5%9B%9E%E5%BA%94%E5%90%8D%E5%8C%BB%E8%AE%A9%E5%84%BF%E5%AD%90%E4%BB%A3%E8%AF%8A%E8%87%B4%E4%BA%BA%E6%B5%81%E4%BA%A7%23) `205.2K 🔥` `NEW`
1. [女大学生被骗进戒网瘾学校多部门介入](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%A2%AB%E9%AA%97%E8%BF%9B%E6%88%92%E7%BD%91%E7%98%BE%E5%AD%A6%E6%A0%A1%E5%A4%9A%E9%83%A8%E9%97%A8%E4%BB%8B%E5%85%A5%23) `201.9K 🔥` `NEW`
1. [2岁娃舔一口公园叶子中毒入院](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%A8%83%E8%88%94%E4%B8%80%E5%8F%A3%E5%85%AC%E5%9B%AD%E5%8F%B6%E5%AD%90%E4%B8%AD%E6%AF%92%E5%85%A5%E9%99%A2%23) `198.2K 🔥` `NEW`
1. [iPhone18Pro可变光圈镜头确认](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%8F%AF%E5%8F%98%E5%85%89%E5%9C%88%E9%95%9C%E5%A4%B4%E7%A1%AE%E8%AE%A4%23) `195.9K 🔥` `NEW`
1. [歌手 倒数第一竞争激烈](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%E7%AB%9E%E4%BA%89%E6%BF%80%E7%83%88%23) `808.7K 🔥` `+193%`
1. [又一大国重器硬核刷屏](https://s.weibo.com/weibo?q=%23%E5%8F%88%E4%B8%80%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E7%A1%AC%E6%A0%B8%E5%88%B7%E5%B1%8F%23) `633.1K 🔥` `+27%`
1. [人在做坏事的时候真的不觉得累](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%9C%A8%E5%81%9A%E5%9D%8F%E4%BA%8B%E7%9A%84%E6%97%B6%E5%80%99%E7%9C%9F%E7%9A%84%E4%B8%8D%E8%A7%89%E5%BE%97%E7%B4%AF%23) `389.8K 🔥` `+102%`
1. [李晨扛着白鹿踩指压板](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E6%89%9B%E7%9D%80%E7%99%BD%E9%B9%BF%E8%B8%A9%E6%8C%87%E5%8E%8B%E6%9D%BF%23) `379.4K 🔥` `+115%`
1. [饿着入睡对胃肠更好吗 (Is sleeping hungry better for your gastrointestinal health?)](https://s.weibo.com/weibo?q=%23%E9%A5%BF%E7%9D%80%E5%85%A5%E7%9D%A1%E5%AF%B9%E8%83%83%E8%82%A0%E6%9B%B4%E5%A5%BD%E5%90%97%23) `328.4K 🔥` `+40%`
1. [刘亦菲彭冠英同款](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%BD%AD%E5%86%A0%E8%8B%B1%E5%90%8C%E6%AC%BE%23) `246.9K 🔥` `+30%`
1. [虞书欣仍未取关潘宥诚](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BB%8D%E6%9C%AA%E5%8F%96%E5%85%B3%E6%BD%98%E5%AE%A5%E8%AF%9A%23) `238.4K 🔥` `+26%`
1. [心脉受损的人一眼就可以看出来 (People with damaged heart vessels can tell at a glance)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E8%84%89%E5%8F%97%E6%8D%9F%E7%9A%84%E4%BA%BA%E4%B8%80%E7%9C%BC%E5%B0%B1%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%87%BA%E6%9D%A5%23) `223.8K 🔥` `+23%`
1. [上海同济专家提醒4个症状尽早做肠镜](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%90%8C%E6%B5%8E%E4%B8%93%E5%AE%B6%E6%8F%90%E9%86%924%E4%B8%AA%E7%97%87%E7%8A%B6%E5%B0%BD%E6%97%A9%E5%81%9A%E8%82%A0%E9%95%9C%23) `217.0K 🔥` `+24%`
1. [印度政府警告宝莱坞](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%94%BF%E5%BA%9C%E8%AD%A6%E5%91%8A%E5%AE%9D%E8%8E%B1%E5%9D%9E%23) `211.5K 🔥` `+525%`
1. [淡淡穿不上的礼服黄灿灿穿上了](https://s.weibo.com/weibo?q=%23%E6%B7%A1%E6%B7%A1%E7%A9%BF%E4%B8%8D%E4%B8%8A%E7%9A%84%E7%A4%BC%E6%9C%8D%E9%BB%84%E7%81%BF%E7%81%BF%E7%A9%BF%E4%B8%8A%E4%BA%86%23) `203.2K 🔥` `+27%`
1. [一家四口有限责任公司](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8%23) `330.1K 🔥`
1. [31岁离异带4娃妈妈因自信走红](https://s.weibo.com/weibo?q=%2331%E5%B2%81%E7%A6%BB%E5%BC%82%E5%B8%A64%E5%A8%83%E5%A6%88%E5%A6%88%E5%9B%A0%E8%87%AA%E4%BF%A1%E8%B5%B0%E7%BA%A2%23) `227.6K 🔥`
1. [古天乐回应向太曝其曾坐牢](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E5%9B%9E%E5%BA%94%E5%90%91%E5%A4%AA%E6%9B%9D%E5%85%B6%E6%9B%BE%E5%9D%90%E7%89%A2%23) `221.0K 🔥`
1. [广东不愧是祖宗严选发配地 (Guangdong is worthy of being the place carefully selected by our ancestors.)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%B8%8D%E6%84%A7%E6%98%AF%E7%A5%96%E5%AE%97%E4%B8%A5%E9%80%89%E5%8F%91%E9%85%8D%E5%9C%B0%23) `219.5K 🔥`
1. [VOGUE晚宴](https://s.weibo.com/weibo?q=%23VOGUE%E6%99%9A%E5%AE%B4%23) `214.9K 🔥`
1. [耳帝 歌手第二期非常糟糕 (The second issue of Erdi Singer is very bad)](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%20%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%BA%8C%E6%9C%9F%E9%9D%9E%E5%B8%B8%E7%B3%9F%E7%B3%95%23) `213.4K 🔥`
1. [范丞丞问第三名怎么你了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E9%97%AE%E7%AC%AC%E4%B8%89%E5%90%8D%E6%80%8E%E4%B9%88%E4%BD%A0%E4%BA%86%23) `212.4K 🔥`
1. [秦昊说就过呗还能离咋地 (Qin Hao said he could just pass by, how could he leave?)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E8%AF%B4%E5%B0%B1%E8%BF%87%E5%91%97%E8%BF%98%E8%83%BD%E7%A6%BB%E5%92%8B%E5%9C%B0%23) `209.0K 🔥`
1. [德约科维奇无缘法网16强](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87%E6%97%A0%E7%BC%98%E6%B3%95%E7%BD%9116%E5%BC%BA%23) `208.7K 🔥`
1. [许我耀眼 现实版 (Let me shine reality version)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%88%91%E8%80%80%E7%9C%BC%20%E7%8E%B0%E5%AE%9E%E7%89%88%23) `205.4K 🔥`
1. [白鹿李晨郑恺复宣跑男](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E5%A4%8D%E5%AE%A3%E8%B7%91%E7%94%B7%23) `202.4K 🔥`
1. [刘诗诗赵今麦郭晓婷合照](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E8%B5%B5%E4%BB%8A%E9%BA%A6%E9%83%AD%E6%99%93%E5%A9%B7%E5%90%88%E7%85%A7%23) `200.7K 🔥`
1. [林沐然中戏转入湖南艺术职业学院](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%B2%90%E7%84%B6%E4%B8%AD%E6%88%8F%E8%BD%AC%E5%85%A5%E6%B9%96%E5%8D%97%E8%89%BA%E6%9C%AF%E8%81%8C%E4%B8%9A%E5%AD%A6%E9%99%A2%23) `199.0K 🔥`
1. [单依纯含金量](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%90%AB%E9%87%91%E9%87%8F%23) `197.1K 🔥`
1. [窦靖童完全王菲](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%AE%8C%E5%85%A8%E7%8E%8B%E8%8F%B2%23) `194.9K 🔥`
1. [父母姐姐身亡12岁孩子被叔侵占140万](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%A7%90%E5%A7%90%E8%BA%AB%E4%BA%A112%E5%B2%81%E5%AD%A9%E5%AD%90%E8%A2%AB%E5%8F%94%E4%BE%B5%E5%8D%A0140%E4%B8%87%23) `222.5K 🔥` `-66%`
1. [歌手第三期帮唱嘉宾信息](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%B8%89%E6%9C%9F%E5%B8%AE%E5%94%B1%E5%98%89%E5%AE%BE%E4%BF%A1%E6%81%AF%23) `210.9K 🔥` `-76%`

Updated at 2026-05-30 09:30:37

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
