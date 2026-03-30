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

1. [考编女生囤考点周边酒店当黄牛 (Girls taking exams are hoarding hotels around the test center to become scalpers)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%BC%96%E5%A5%B3%E7%94%9F%E5%9B%A4%E8%80%83%E7%82%B9%E5%91%A8%E8%BE%B9%E9%85%92%E5%BA%97%E5%BD%93%E9%BB%84%E7%89%9B%23) `756.7K 🔥` `NEW`
1. [这young的中国爱了](https://s.weibo.com/weibo?q=%23%E8%BF%99young%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%88%B1%E4%BA%86%23) `640.1K 🔥` `NEW`
1. [小学生凌晨1点40被爷爷送到校门口](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%87%8C%E6%99%A81%E7%82%B940%E8%A2%AB%E7%88%B7%E7%88%B7%E9%80%81%E5%88%B0%E6%A0%A1%E9%97%A8%E5%8F%A3%23) `523.3K 🔥` `NEW`
1. [伊朗证实革命卫队海军司令死于空袭](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AF%81%E5%AE%9E%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E6%B5%B7%E5%86%9B%E5%8F%B8%E4%BB%A4%E6%AD%BB%E4%BA%8E%E7%A9%BA%E8%A2%AD%23) `436.3K 🔥` `NEW`
1. [被长隆动物园淋雨狮子刷屏了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%95%BF%E9%9A%86%E5%8A%A8%E7%89%A9%E5%9B%AD%E6%B7%8B%E9%9B%A8%E7%8B%AE%E5%AD%90%E5%88%B7%E5%B1%8F%E4%BA%86%23) `383.5K 🔥` `NEW`
1. [王俊凯和花西子一起耍花朝](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%92%8C%E8%8A%B1%E8%A5%BF%E5%AD%90%E4%B8%80%E8%B5%B7%E8%80%8D%E8%8A%B1%E6%9C%9D%23) `360.3K 🔥` `NEW`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `238.0K 🔥` `NEW`
1. [瑞幸新品一整颗生椰](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E6%96%B0%E5%93%81%E4%B8%80%E6%95%B4%E9%A2%97%E7%94%9F%E6%A4%B0%23) `218.4K 🔥` `NEW`
1. [电动车涨价原因](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%8A%A8%E8%BD%A6%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `189.9K 🔥` `NEW`
1. [李荣浩曾因发博掉十个粉丝不敢发了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%9B%BE%E5%9B%A0%E5%8F%91%E5%8D%9A%E6%8E%89%E5%8D%81%E4%B8%AA%E7%B2%89%E4%B8%9D%E4%B8%8D%E6%95%A2%E5%8F%91%E4%BA%86%23) `180.5K 🔥` `NEW`
1. [美军准备在伊朗展开数周地面战 (US military prepares for weeks of ground war in Iran)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%87%86%E5%A4%87%E5%9C%A8%E4%BC%8A%E6%9C%97%E5%B1%95%E5%BC%80%E6%95%B0%E5%91%A8%E5%9C%B0%E9%9D%A2%E6%88%98%23) `180.0K 🔥` `NEW`
1. [刘学义升咖](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%8D%87%E5%92%96%23) `172.8K 🔥` `NEW`
1. [张雪机车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `129.7K 🔥` `NEW`
1. [嫩豆腐放冷藏变成了腐竹](https://s.weibo.com/weibo?q=%23%E5%AB%A9%E8%B1%86%E8%85%90%E6%94%BE%E5%86%B7%E8%97%8F%E5%8F%98%E6%88%90%E4%BA%86%E8%85%90%E7%AB%B9%23) `118.5K 🔥` `NEW`
1. [刘诗诗感谢复刻龙葵头冠网友](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E6%84%9F%E8%B0%A2%E5%A4%8D%E5%88%BB%E9%BE%99%E8%91%B5%E5%A4%B4%E5%86%A0%E7%BD%91%E5%8F%8B%23) `113.5K 🔥` `NEW`
1. [舔了一下嘴唇被自己毒死了](https://s.weibo.com/weibo?q=%23%E8%88%94%E4%BA%86%E4%B8%80%E4%B8%8B%E5%98%B4%E5%94%87%E8%A2%AB%E8%87%AA%E5%B7%B1%E6%AF%92%E6%AD%BB%E4%BA%86%23) `113.3K 🔥` `NEW`
1. [全红婵回应未来打算](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%9B%9E%E5%BA%94%E6%9C%AA%E6%9D%A5%E6%89%93%E7%AE%97%23) `106.7K 🔥` `NEW`
1. [向佐好像追星成功郭碧婷](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E5%A5%BD%E5%83%8F%E8%BF%BD%E6%98%9F%E6%88%90%E5%8A%9F%E9%83%AD%E7%A2%A7%E5%A9%B7%23) `103.3K 🔥` `NEW`
1. [Seedance2.0造就了凌晨3点上班的公司](https://s.weibo.com/weibo?q=%23Seedance2.0%E9%80%A0%E5%B0%B1%E4%BA%86%E5%87%8C%E6%99%A83%E7%82%B9%E4%B8%8A%E7%8F%AD%E7%9A%84%E5%85%AC%E5%8F%B8%23) `94.0K 🔥` `NEW`
1. [日本警察厅就闯馆事件召开会议](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%AD%A6%E5%AF%9F%E5%8E%85%E5%B0%B1%E9%97%AF%E9%A6%86%E4%BA%8B%E4%BB%B6%E5%8F%AC%E5%BC%80%E4%BC%9A%E8%AE%AE%23) `91.5K 🔥` `NEW`
1. [冰湖重生 (Ice lake rebirth)](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%23) `91.1K 🔥` `NEW`
1. [国外最帅囚犯嫌狱中生活被粉丝打扰](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%A4%96%E6%9C%80%E5%B8%85%E5%9B%9A%E7%8A%AF%E5%AB%8C%E7%8B%B1%E4%B8%AD%E7%94%9F%E6%B4%BB%E8%A2%AB%E7%B2%89%E4%B8%9D%E6%89%93%E6%89%B0%23) `90.7K 🔥` `NEW`
1. [全红婵决定再坚持跳一跳](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%86%B3%E5%AE%9A%E5%86%8D%E5%9D%9A%E6%8C%81%E8%B7%B3%E4%B8%80%E8%B7%B3%23) `90.3K 🔥` `NEW`
1. [林俊杰不许在军事基地唱歌](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%B8%8D%E8%AE%B8%E5%9C%A8%E5%86%9B%E4%BA%8B%E5%9F%BA%E5%9C%B0%E5%94%B1%E6%AD%8C%23) `90.1K 🔥` `NEW`
1. [伊能静自曝和秦昊相处方式](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%87%AA%E6%9B%9D%E5%92%8C%E7%A7%A6%E6%98%8A%E7%9B%B8%E5%A4%84%E6%96%B9%E5%BC%8F%23) `89.7K 🔥` `NEW`
1. [金价银价大跌了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E5%A4%A7%E8%B7%8C%E4%BA%86%23) `89.3K 🔥` `NEW`
1. [薛之谦歌迷称不准备申请报销机酒](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%AD%8C%E8%BF%B7%E7%A7%B0%E4%B8%8D%E5%87%86%E5%A4%87%E7%94%B3%E8%AF%B7%E6%8A%A5%E9%94%80%E6%9C%BA%E9%85%92%23) `89.3K 🔥` `NEW`
1. [现货黄金失守4450](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%E5%A4%B1%E5%AE%884450%23) `89.1K 🔥` `NEW`
1. [做完美甲上班打卡天塌了](https://s.weibo.com/weibo?q=%23%E5%81%9A%E5%AE%8C%E7%BE%8E%E7%94%B2%E4%B8%8A%E7%8F%AD%E6%89%93%E5%8D%A1%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `88.5K 🔥` `NEW`
1. [广州塔暴雨中接闪电](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%A1%94%E6%9A%B4%E9%9B%A8%E4%B8%AD%E6%8E%A5%E9%97%AA%E7%94%B5%23) `86.6K 🔥` `NEW`
1. [日本人嘲讽泰国人翻车 (Japanese mock Thais for overturning)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%98%B2%E8%AE%BD%E6%B3%B0%E5%9B%BD%E4%BA%BA%E7%BF%BB%E8%BD%A6%23) `81.4K 🔥` `NEW`
1. [武汉一高校内现999秒超长红绿灯](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E4%B8%80%E9%AB%98%E6%A0%A1%E5%86%85%E7%8E%B0999%E7%A7%92%E8%B6%85%E9%95%BF%E7%BA%A2%E7%BB%BF%E7%81%AF%23) `80.9K 🔥` `NEW`
1. [美以空袭伊朗一儿童游乐场](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E7%A9%BA%E8%A2%AD%E4%BC%8A%E6%9C%97%E4%B8%80%E5%84%BF%E7%AB%A5%E6%B8%B8%E4%B9%90%E5%9C%BA%23) `80.5K 🔥` `NEW`
1. [14岁男生杀害同学家属下跪求原谅](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%94%B7%E7%94%9F%E6%9D%80%E5%AE%B3%E5%90%8C%E5%AD%A6%E5%AE%B6%E5%B1%9E%E4%B8%8B%E8%B7%AA%E6%B1%82%E5%8E%9F%E8%B0%85%23) `78.4K 🔥` `NEW`
1. [国外84岁女性背痛被医生建议安乐死](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%A4%9684%E5%B2%81%E5%A5%B3%E6%80%A7%E8%83%8C%E7%97%9B%E8%A2%AB%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E5%AE%89%E4%B9%90%E6%AD%BB%23) `75.0K 🔥` `NEW`
1. [男子突发奇想让扫地机扫泳池](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%AA%81%E5%8F%91%E5%A5%87%E6%83%B3%E8%AE%A9%E6%89%AB%E5%9C%B0%E6%9C%BA%E6%89%AB%E6%B3%B3%E6%B1%A0%23) `73.0K 🔥` `NEW`
1. [云合](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%90%88%23) `72.6K 🔥` `NEW`
1. [贺峻霖模仿哈哈曹](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E6%A8%A1%E4%BB%BF%E5%93%88%E5%93%88%E6%9B%B9%23) `72.0K 🔥` `NEW`
1. [穆祉丞 佐助特效](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E4%BD%90%E5%8A%A9%E7%89%B9%E6%95%88%23) `71.8K 🔥` `NEW`
1. [庞麦郎 华晨宇](https://s.weibo.com/weibo?q=%23%E5%BA%9E%E9%BA%A6%E9%83%8E%20%E5%8D%8E%E6%99%A8%E5%AE%87%23) `171.6K 🔥` `+21%`
1. [床上最脏的一个地方很多人从没洗过 (The dirtiest place on the bed is one that many people never wash)](https://s.weibo.com/weibo?q=%23%E5%BA%8A%E4%B8%8A%E6%9C%80%E8%84%8F%E7%9A%84%E4%B8%80%E4%B8%AA%E5%9C%B0%E6%96%B9%E5%BE%88%E5%A4%9A%E4%BA%BA%E4%BB%8E%E6%B2%A1%E6%B4%97%E8%BF%87%23) `91.5K 🔥` `+35%`
1. [退18.8万元彩礼一家人现状 (The family’s current situation after receiving a 188,000 yuan betrothal gift refund)](https://s.weibo.com/weibo?q=%23%E9%80%8018.8%E4%B8%87%E5%85%83%E5%BD%A9%E7%A4%BC%E4%B8%80%E5%AE%B6%E4%BA%BA%E7%8E%B0%E7%8A%B6%23) `1.1M 🔥`
1. [垫底辣孩的脸怎么了 (What happened to the face of the hottie at the bottom?)](https://s.weibo.com/weibo?q=%23%E5%9E%AB%E5%BA%95%E8%BE%A3%E5%AD%A9%E7%9A%84%E8%84%B8%E6%80%8E%E4%B9%88%E4%BA%86%23) `127.3K 🔥`
1. [全红婵称跳水从喜欢变成了任务](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E7%A7%B0%E8%B7%B3%E6%B0%B4%E4%BB%8E%E5%96%9C%E6%AC%A2%E5%8F%98%E6%88%90%E4%BA%86%E4%BB%BB%E5%8A%A1%23) `115.3K 🔥`
1. [严浩翔新歌Fly开始预约](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E6%AD%8CFly%E5%BC%80%E5%A7%8B%E9%A2%84%E7%BA%A6%23) `113.6K 🔥`
1. [感受一下广州超级大暴雨 (Feel the super heavy rain in Guangzhou)](https://s.weibo.com/weibo?q=%23%E6%84%9F%E5%8F%97%E4%B8%80%E4%B8%8B%E5%B9%BF%E5%B7%9E%E8%B6%85%E7%BA%A7%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `180.8K 🔥` `-78%`
1. [迪丽热巴陈飞宇同框被吐槽有年龄感](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E5%90%8C%E6%A1%86%E8%A2%AB%E5%90%90%E6%A7%BD%E6%9C%89%E5%B9%B4%E9%BE%84%E6%84%9F%23) `180.4K 🔥` `-66%`
1. [杨幂唐嫣又撞角色了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%94%90%E5%AB%A3%E5%8F%88%E6%92%9E%E8%A7%92%E8%89%B2%E4%BA%86%23) `127.7K 🔥` `-35%`
1. [瑞幸新品椰子蛋遭网友吐槽](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E6%96%B0%E5%93%81%E6%A4%B0%E5%AD%90%E8%9B%8B%E9%81%AD%E7%BD%91%E5%8F%8B%E5%90%90%E6%A7%BD%23) `109.1K 🔥` `-44%`
1. [你有什么习惯坚持了21年](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%9C%89%E4%BB%80%E4%B9%88%E4%B9%A0%E6%83%AF%E5%9D%9A%E6%8C%81%E4%BA%8621%E5%B9%B4%23) `81.0K 🔥` `-29%`
1. [境外间谍机关渗透我国粮食领域 (Overseas spy agencies infiltrate my country’s food sector)](https://s.weibo.com/weibo?q=%23%E5%A2%83%E5%A4%96%E9%97%B4%E8%B0%8D%E6%9C%BA%E5%85%B3%E6%B8%97%E9%80%8F%E6%88%91%E5%9B%BD%E7%B2%AE%E9%A3%9F%E9%A2%86%E5%9F%9F%23) `71.8K 🔥` `-50%`

Updated at 2026-03-30 16:49:54

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
