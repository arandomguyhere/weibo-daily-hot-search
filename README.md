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

1. [白日提灯超话产出给到夯 (During the day, the lantern and super talk output are greatly improved.)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E8%B6%85%E8%AF%9D%E4%BA%A7%E5%87%BA%E7%BB%99%E5%88%B0%E5%A4%AF%23) `387.7K 🔥` `NEW`
1. [结婚3天新娘称去调凉菜一去不返](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A3%E5%A4%A9%E6%96%B0%E5%A8%98%E7%A7%B0%E5%8E%BB%E8%B0%83%E5%87%89%E8%8F%9C%E4%B8%80%E5%8E%BB%E4%B8%8D%E8%BF%94%23) `365.2K 🔥` `NEW`
1. [迪丽热巴可逐全球品牌代言人](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8F%AF%E9%80%90%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `328.4K 🔥` `NEW`
1. [广东暴雨已经超越了雨刮器的极限](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E6%9A%B4%E9%9B%A8%E5%B7%B2%E7%BB%8F%E8%B6%85%E8%B6%8A%E4%BA%86%E9%9B%A8%E5%88%AE%E5%99%A8%E7%9A%84%E6%9E%81%E9%99%90%23) `327.8K 🔥` `NEW`
1. [逐玉收官](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%94%B6%E5%AE%98%23) `226.4K 🔥` `NEW`
1. [WBG战胜iG](https://s.weibo.com/weibo?q=%23WBG%E6%88%98%E8%83%9CiG%23) `110.0K 🔥` `NEW`
1. [中方回应日方称愿意解决紧张关系](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%97%A5%E6%96%B9%E7%A7%B0%E6%84%BF%E6%84%8F%E8%A7%A3%E5%86%B3%E7%B4%A7%E5%BC%A0%E5%85%B3%E7%B3%BB%23) `100.7K 🔥` `NEW`
1. [李荣浩 爱你老己](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E7%88%B1%E4%BD%A0%E8%80%81%E5%B7%B1%23) `99.0K 🔥` `NEW`
1. [业内谈单依纯是否知情李白授权细节](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E8%B0%88%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%98%AF%E5%90%A6%E7%9F%A5%E6%83%85%E6%9D%8E%E7%99%BD%E6%8E%88%E6%9D%83%E7%BB%86%E8%8A%82%23) `86.5K 🔥` `NEW`
1. [租房6年发现多帮房东交了几万电费](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E6%88%BF6%E5%B9%B4%E5%8F%91%E7%8E%B0%E5%A4%9A%E5%B8%AE%E6%88%BF%E4%B8%9C%E4%BA%A4%E4%BA%86%E5%87%A0%E4%B8%87%E7%94%B5%E8%B4%B9%23) `85.9K 🔥` `NEW`
1. [伊朗海空联合打击美以多个目标 (Iran launches joint naval and air strikes against multiple US and Israeli targets)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%B5%B7%E7%A9%BA%E8%81%94%E5%90%88%E6%89%93%E5%87%BB%E7%BE%8E%E4%BB%A5%E5%A4%9A%E4%B8%AA%E7%9B%AE%E6%A0%87%23) `82.9K 🔥` `NEW`
1. [张凌赫逐玉收官小作文](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%90%E7%8E%89%E6%94%B6%E5%AE%98%E5%B0%8F%E4%BD%9C%E6%96%87%23) `81.7K 🔥` `NEW`
1. [阿沁男友不介意她上恋综](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%B2%81%E7%94%B7%E5%8F%8B%E4%B8%8D%E4%BB%8B%E6%84%8F%E5%A5%B9%E4%B8%8A%E6%81%8B%E7%BB%BC%23) `80.9K 🔥` `NEW`
1. [男子扫单车擦边二维码被骗光首付](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%AB%E5%8D%95%E8%BD%A6%E6%93%A6%E8%BE%B9%E4%BA%8C%E7%BB%B4%E7%A0%81%E8%A2%AB%E9%AA%97%E5%85%89%E9%A6%96%E4%BB%98%23) `77.4K 🔥` `NEW`
1. [孙女骗爷奶28万打赏男主播](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%A5%B3%E9%AA%97%E7%88%B7%E5%A5%B628%E4%B8%87%E6%89%93%E8%B5%8F%E7%94%B7%E4%B8%BB%E6%92%AD%23) `76.9K 🔥` `NEW`
1. [中国援古巴第三批大米到了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%8F%B4%E5%8F%A4%E5%B7%B4%E7%AC%AC%E4%B8%89%E6%89%B9%E5%A4%A7%E7%B1%B3%E5%88%B0%E4%BA%86%23) `76.9K 🔥` `NEW`
1. [长隆动物园狮子被雨淋成齐刘海](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%9A%86%E5%8A%A8%E7%89%A9%E5%9B%AD%E7%8B%AE%E5%AD%90%E8%A2%AB%E9%9B%A8%E6%B7%8B%E6%88%90%E9%BD%90%E5%88%98%E6%B5%B7%23) `67.4K 🔥` `NEW`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `62.7K 🔥` `NEW`
1. [鹿晗吓坏了](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%90%93%E5%9D%8F%E4%BA%86%23) `62.5K 🔥` `NEW`
1. [退18.8万元彩礼一家人现状 (The family’s current situation after receiving a 188,000 yuan betrothal gift refund)](https://s.weibo.com/weibo?q=%23%E9%80%8018.8%E4%B8%87%E5%85%83%E5%BD%A9%E7%A4%BC%E4%B8%80%E5%AE%B6%E4%BA%BA%E7%8E%B0%E7%8A%B6%23) `1.1M 🔥` `+32%`
1. [全红婵决定再坚持跳一跳](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%86%B3%E5%AE%9A%E5%86%8D%E5%9D%9A%E6%8C%81%E8%B7%B3%E4%B8%80%E8%B7%B3%23) `765.9K 🔥` `+182%`
1. [日方称愿意解决与中国外交紧张关系 (Japan says it is willing to resolve diplomatic tensions with China)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%96%B9%E7%A7%B0%E6%84%BF%E6%84%8F%E8%A7%A3%E5%86%B3%E4%B8%8E%E4%B8%AD%E5%9B%BD%E5%A4%96%E4%BA%A4%E7%B4%A7%E5%BC%A0%E5%85%B3%E7%B3%BB%23) `331.2K 🔥` `+281%`
1. [张雪机车夺冠估值超10亿](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E4%BC%B0%E5%80%BC%E8%B6%8510%E4%BA%BF%23) `211.9K 🔥` `+79%`
1. [白鹿张真源跳了nobatidao](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%A0%E7%9C%9F%E6%BA%90%E8%B7%B3%E4%BA%86nobatidao%23) `80.0K 🔥` `+25%`
1. [这young的中国爱了](https://s.weibo.com/weibo?q=%23%E8%BF%99young%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%88%B1%E4%BA%86%23) `614.3K 🔥`
1. [招商银行董事长称员工很少准时下班](https://s.weibo.com/weibo?q=%23%E6%8B%9B%E5%95%86%E9%93%B6%E8%A1%8C%E8%91%A3%E4%BA%8B%E9%95%BF%E7%A7%B0%E5%91%98%E5%B7%A5%E5%BE%88%E5%B0%91%E5%87%86%E6%97%B6%E4%B8%8B%E7%8F%AD%23) `210.9K 🔥`
1. [被长隆动物园淋雨狮子刷屏了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%95%BF%E9%9A%86%E5%8A%A8%E7%89%A9%E5%9B%AD%E6%B7%8B%E9%9B%A8%E7%8B%AE%E5%AD%90%E5%88%B7%E5%B1%8F%E4%BA%86%23) `209.2K 🔥`
1. [严浩翔新歌Fly开始预约](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E6%AD%8CFly%E5%BC%80%E5%A7%8B%E9%A2%84%E7%BA%A6%23) `170.0K 🔥`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `165.6K 🔥`
1. [张雪机车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `80.2K 🔥`
1. [那英唱三五句也要问版权问题 (When Na Ying sings three or five lines, he still has to ask about copyright issues)](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%94%B1%E4%B8%89%E4%BA%94%E5%8F%A5%E4%B9%9F%E8%A6%81%E9%97%AE%E7%89%88%E6%9D%83%E9%97%AE%E9%A2%98%23) `330.4K 🔥` `-36%`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `175.8K 🔥` `-47%`
1. [嫩豆腐放冷藏变成了腐竹 (Refrigerate the soft tofu and turn it into yuba)](https://s.weibo.com/weibo?q=%23%E5%AB%A9%E8%B1%86%E8%85%90%E6%94%BE%E5%86%B7%E8%97%8F%E5%8F%98%E6%88%90%E4%BA%86%E8%85%90%E7%AB%B9%23) `120.9K 🔥` `-40%`
1. [冰湖重生定档](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%AE%9A%E6%A1%A3%23) `115.1K 🔥` `-39%`
1. [韩国网友盗图广州街景称是首尔](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E7%9B%97%E5%9B%BE%E5%B9%BF%E5%B7%9E%E8%A1%97%E6%99%AF%E7%A7%B0%E6%98%AF%E9%A6%96%E5%B0%94%23) `105.4K 🔥` `-59%`
1. [房东笑了半天才把房子租给你](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E6%8A%8A%E6%88%BF%E5%AD%90%E7%A7%9F%E7%BB%99%E4%BD%A0%23) `100.9K 🔥` `-36%`
1. [谢娜 民选微博Queen](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%20%E6%B0%91%E9%80%89%E5%BE%AE%E5%8D%9AQueen%23) `97.0K 🔥` `-23%`
1. [为什么屁股针越来越少了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B1%81%E8%82%A1%E9%92%88%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%B0%91%E4%BA%86%23) `93.2K 🔥` `-25%`
1. [垫底辣孩的脸怎么了 (What happened to the face of the hottie at the bottom?)](https://s.weibo.com/weibo?q=%23%E5%9E%AB%E5%BA%95%E8%BE%A3%E5%AD%A9%E7%9A%84%E8%84%B8%E6%80%8E%E4%B9%88%E4%BA%86%23) `91.2K 🔥` `-26%`
1. [垫底辣孩回应脸变了](https://s.weibo.com/weibo?q=%23%E5%9E%AB%E5%BA%95%E8%BE%A3%E5%AD%A9%E5%9B%9E%E5%BA%94%E8%84%B8%E5%8F%98%E4%BA%86%23) `85.9K 🔥` `-30%`
1. [张雪说要赠送尹正机车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%AF%B4%E8%A6%81%E8%B5%A0%E9%80%81%E5%B0%B9%E6%AD%A3%E6%9C%BA%E8%BD%A6%23) `85.6K 🔥` `-29%`
1. [以色列海法炼油厂遭袭起火](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%B5%B7%E6%B3%95%E7%82%BC%E6%B2%B9%E5%8E%82%E9%81%AD%E8%A2%AD%E8%B5%B7%E7%81%AB%23) `83.3K 🔥` `-30%`
1. [WBG对阵iG](https://s.weibo.com/weibo?q=%23WBG%E5%AF%B9%E9%98%B5iG%23) `82.0K 🔥` `-26%`
1. [刘诗诗感谢复刻龙葵头冠网友 (Liu Shishi thanks netizens who reproduced nightshade tiara)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E6%84%9F%E8%B0%A2%E5%A4%8D%E5%88%BB%E9%BE%99%E8%91%B5%E5%A4%B4%E5%86%A0%E7%BD%91%E5%8F%8B%23) `80.1K 🔥` `-24%`
1. [瑞幸椰子蛋放了两小时还是冰沙 (Luckin Coconut Egg is still a smoothie after two hours)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E6%A4%B0%E5%AD%90%E8%9B%8B%E6%94%BE%E4%BA%86%E4%B8%A4%E5%B0%8F%E6%97%B6%E8%BF%98%E6%98%AF%E5%86%B0%E6%B2%99%23) `78.3K 🔥` `-36%`
1. [14岁男生杀害同学家属下跪求原谅 (The family of a 14-year-old boy who killed his classmate kneels down to beg for forgiveness.)](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%94%B7%E7%94%9F%E6%9D%80%E5%AE%B3%E5%90%8C%E5%AD%A6%E5%AE%B6%E5%B1%9E%E4%B8%8B%E8%B7%AA%E6%B1%82%E5%8E%9F%E8%B0%85%23) `77.4K 🔥` `-60%`
1. [裴珠泫回归](https://s.weibo.com/weibo?q=%23%E8%A3%B4%E7%8F%A0%E6%B3%AB%E5%9B%9E%E5%BD%92%23) `76.4K 🔥` `-36%`
1. [刘学义升咖](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%8D%87%E5%92%96%23) `70.4K 🔥` `-42%`
1. [阚清子浪姐上班状态](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%B5%AA%E5%A7%90%E4%B8%8A%E7%8F%AD%E7%8A%B6%E6%80%81%23) `66.2K 🔥` `-52%`
1. [小学生凌晨1点40被爷爷送到校门口](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%87%8C%E6%99%A81%E7%82%B940%E8%A2%AB%E7%88%B7%E7%88%B7%E9%80%81%E5%88%B0%E6%A0%A1%E9%97%A8%E5%8F%A3%23) `65.0K 🔥` `-94%`
1. [国外最帅囚犯嫌狱中生活被粉丝打扰](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%A4%96%E6%9C%80%E5%B8%85%E5%9B%9A%E7%8A%AF%E5%AB%8C%E7%8B%B1%E4%B8%AD%E7%94%9F%E6%B4%BB%E8%A2%AB%E7%B2%89%E4%B8%9D%E6%89%93%E6%89%B0%23) `59.2K 🔥` `-29%`
1. [庞麦郎 华晨宇](https://s.weibo.com/weibo?q=%23%E5%BA%9E%E9%BA%A6%E9%83%8E%20%E5%8D%8E%E6%99%A8%E5%AE%87%23) `59.2K 🔥` `-55%`

Updated at 2026-03-30 19:16:22

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
