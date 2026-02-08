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

1. [订婚强奸案电梯视频首曝光 (Elevator video of engagement rape case exposed for first time)](https://s.weibo.com/weibo?q=%23%E8%AE%A2%E5%A9%9A%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%94%B5%E6%A2%AF%E8%A7%86%E9%A2%91%E9%A6%96%E6%9B%9D%E5%85%89%23) `251.7K 🔥` `NEW`
1. [明珍珍当庭忏悔独家视频曝光](https://s.weibo.com/weibo?q=%23%E6%98%8E%E7%8F%8D%E7%8F%8D%E5%BD%93%E5%BA%AD%E5%BF%8F%E6%82%94%E7%8B%AC%E5%AE%B6%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `122.8K 🔥` `NEW`
1. [白鹿王星越喝同一杯饮料](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%8E%8B%E6%98%9F%E8%B6%8A%E5%96%9D%E5%90%8C%E4%B8%80%E6%9D%AF%E9%A5%AE%E6%96%99%23) `94.9K 🔥` `NEW`
1. [必要熬夜时3个方法降低伤害](https://s.weibo.com/weibo?q=%23%E5%BF%85%E8%A6%81%E7%86%AC%E5%A4%9C%E6%97%B63%E4%B8%AA%E6%96%B9%E6%B3%95%E9%99%8D%E4%BD%8E%E4%BC%A4%E5%AE%B3%23) `75.6K 🔥` `NEW`
1. [王星越的红包](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%E7%9A%84%E7%BA%A2%E5%8C%85%23) `74.8K 🔥` `NEW`
1. [两人将兽用麻药注入电子烟售卖获刑](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BA%BA%E5%B0%86%E5%85%BD%E7%94%A8%E9%BA%BB%E8%8D%AF%E6%B3%A8%E5%85%A5%E7%94%B5%E5%AD%90%E7%83%9F%E5%94%AE%E5%8D%96%E8%8E%B7%E5%88%91%23) `69.4K 🔥` `NEW`
1. [上海政府大规模收购二手房](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%94%BF%E5%BA%9C%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%94%B6%E8%B4%AD%E4%BA%8C%E6%89%8B%E6%88%BF%23) `67.5K 🔥` `NEW`
1. [猫咪抓桌腿4年网友在线蹲大结局](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E6%8A%93%E6%A1%8C%E8%85%BF4%E5%B9%B4%E7%BD%91%E5%8F%8B%E5%9C%A8%E7%BA%BF%E8%B9%B2%E5%A4%A7%E7%BB%93%E5%B1%80%23) `64.3K 🔥` `NEW`
1. [怪不得司机师傅打电话问几位](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%8F%B8%E6%9C%BA%E5%B8%88%E5%82%85%E6%89%93%E7%94%B5%E8%AF%9D%E9%97%AE%E5%87%A0%E4%BD%8D%23) `63.8K 🔥` `NEW`
1. [王楚钦男单争冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%94%B7%E5%8D%95%E4%BA%89%E5%86%A0%23) `62.0K 🔥` `NEW`
1. [中国军网点名张本智和 (China military network named Zhang Benzhihe)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E7%BD%91%E7%82%B9%E5%90%8D%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `2.0M 🔥` `+238%`
1. [35岁国企女掌门受贿4900万 (35-year-old female head of state-owned enterprise took 49 million yuan in bribes)](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%9B%BD%E4%BC%81%E5%A5%B3%E6%8E%8C%E9%97%A8%E5%8F%97%E8%B4%BF4900%E4%B8%87%23) `959.0K 🔥` `+351%`
1. [新一轮大范围雨雪天气来袭 (A new round of widespread rain and snow is coming)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E8%BD%AE%E5%A4%A7%E8%8C%83%E5%9B%B4%E9%9B%A8%E9%9B%AA%E5%A4%A9%E6%B0%94%E6%9D%A5%E8%A2%AD%23) `751.3K 🔥` `+22%`
1. [日本军国主义渗透文体领域](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%86%9B%E5%9B%BD%E4%B8%BB%E4%B9%89%E6%B8%97%E9%80%8F%E6%96%87%E4%BD%93%E9%A2%86%E5%9F%9F%23) `341.6K 🔥` `+42%`
1. [牛奶炸鸡](https://s.weibo.com/weibo?q=%23%E7%89%9B%E5%A5%B6%E7%82%B8%E9%B8%A1%23) `298.2K 🔥` `+28%`
1. [猫 没有一根毛想跟你好](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E6%B2%A1%E6%9C%89%E4%B8%80%E6%A0%B9%E6%AF%9B%E6%83%B3%E8%B7%9F%E4%BD%A0%E5%A5%BD%23) `163.9K 🔥` `+44%`
1. [减肥误食了一顿麻辣烫](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E8%AF%AF%E9%A3%9F%E4%BA%86%E4%B8%80%E9%A1%BF%E9%BA%BB%E8%BE%A3%E7%83%AB%23) `159.7K 🔥` `+26%`
1. [中国军网点名宝可梦和名侦探柯南 (Chinese military website names Pokémon and Detective Conan)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E7%BD%91%E7%82%B9%E5%90%8D%E5%AE%9D%E5%8F%AF%E6%A2%A6%E5%92%8C%E5%90%8D%E4%BE%A6%E6%8E%A2%E6%9F%AF%E5%8D%97%23) `90.0K 🔥` `+25%`
1. [古茗回应外卖小哥打翻32杯奶茶](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E8%8C%97%E5%9B%9E%E5%BA%94%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E6%89%93%E7%BF%BB32%E6%9D%AF%E5%A5%B6%E8%8C%B6%23) `302.8K 🔥`
1. [刘宇说你喝到AI请客的奶茶了吗](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E8%AF%B4%E4%BD%A0%E5%96%9D%E5%88%B0AI%E8%AF%B7%E5%AE%A2%E7%9A%84%E5%A5%B6%E8%8C%B6%E4%BA%86%E5%90%97%23) `298.3K 🔥`
1. [成何体统 好看](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E5%A5%BD%E7%9C%8B%23) `204.0K 🔥`
1. [演员醉驾撞死人赔偿家属达成谅解](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%86%89%E9%A9%BE%E6%92%9E%E6%AD%BB%E4%BA%BA%E8%B5%94%E5%81%BF%E5%AE%B6%E5%B1%9E%E8%BE%BE%E6%88%90%E8%B0%85%E8%A7%A3%23) `200.8K 🔥`
1. [千问 (Qianwen)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%23) `196.1K 🔥`
1. [一箱牛奶完成了串门的使命](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AE%B1%E7%89%9B%E5%A5%B6%E5%AE%8C%E6%88%90%E4%BA%86%E4%B8%B2%E9%97%A8%E7%9A%84%E4%BD%BF%E5%91%BD%23) `172.6K 🔥`
1. [辛芷蕾的红是什么红 (What kind of red is Xin Zhilei's red color?)](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E7%9A%84%E7%BA%A2%E6%98%AF%E4%BB%80%E4%B9%88%E7%BA%A2%23) `125.7K 🔥`
1. [小英想把送养出去6年的女儿接回家](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E6%83%B3%E6%8A%8A%E9%80%81%E5%85%BB%E5%87%BA%E5%8E%BB6%E5%B9%B4%E7%9A%84%E5%A5%B3%E5%84%BF%E6%8E%A5%E5%9B%9E%E5%AE%B6%23) `121.6K 🔥`
1. [黄一鸣直播中途崩溃大哭 (Huang Yiming collapsed and cried midway through the live broadcast)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%B8%80%E9%B8%A3%E7%9B%B4%E6%92%AD%E4%B8%AD%E9%80%94%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `120.6K 🔥`
1. [邓超忘给孙俪准备16年纪念日的礼物](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%BF%98%E7%BB%99%E5%AD%99%E4%BF%AA%E5%87%86%E5%A4%8716%E5%B9%B4%E7%BA%AA%E5%BF%B5%E6%97%A5%E7%9A%84%E7%A4%BC%E7%89%A9%23) `117.4K 🔥`
1. [张凌赫 电竞男主 (Zhang Linghe E-sports male protagonist)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E7%94%B5%E7%AB%9E%E7%94%B7%E4%B8%BB%23) `113.8K 🔥`
1. [张凌赫这个出场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%99%E4%B8%AA%E5%87%BA%E5%9C%BA%23) `89.2K 🔥`
1. [王楚钦亚洲杯决赛战张本智和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BA%9A%E6%B4%B2%E6%9D%AF%E5%86%B3%E8%B5%9B%E6%88%98%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `78.5K 🔥`
1. [白鹿发开播红包](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%91%E5%BC%80%E6%92%AD%E7%BA%A2%E5%8C%85%23) `77.9K 🔥`
1. [丁真劝向佐退圈 (Ding Zhen persuades Xiang Zuo to withdraw from the circle)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%9C%9F%E5%8A%9D%E5%90%91%E4%BD%90%E9%80%80%E5%9C%88%23) `77.1K 🔥`
1. [寒假能猝死学校能困死](https://s.weibo.com/weibo?q=%23%E5%AF%92%E5%81%87%E8%83%BD%E7%8C%9D%E6%AD%BB%E5%AD%A6%E6%A0%A1%E8%83%BD%E5%9B%B0%E6%AD%BB%23) `66.3K 🔥`
1. [建议大家过年理性消费](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%BF%87%E5%B9%B4%E7%90%86%E6%80%A7%E6%B6%88%E8%B4%B9%23) `63.1K 🔥`
1. [谷爱凌回应第一跳摔了](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94%E7%AC%AC%E4%B8%80%E8%B7%B3%E6%91%94%E4%BA%86%23) `62.8K 🔥`
1. [外卖小哥打翻32杯奶茶原地发愣](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E6%89%93%E7%BF%BB32%E6%9D%AF%E5%A5%B6%E8%8C%B6%E5%8E%9F%E5%9C%B0%E5%8F%91%E6%84%A3%23) `356.1K 🔥` `-29%`
1. [爸爸弯了一辈子的腰终于断了 (Dad’s waist, which he had been bending for a lifetime, finally broke)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BC%AF%E4%BA%86%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E8%85%B0%E7%BB%88%E4%BA%8E%E6%96%AD%E4%BA%86%23) `270.4K 🔥` `-35%`
1. [教师岗要求运动会第1名被指萝卜岗](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E5%B2%97%E8%A6%81%E6%B1%82%E8%BF%90%E5%8A%A8%E4%BC%9A%E7%AC%AC1%E5%90%8D%E8%A2%AB%E6%8C%87%E8%90%9D%E5%8D%9C%E5%B2%97%23) `197.6K 🔥` `-75%`
1. [女子吐槽飞机餐仅一根青菜配米饭 (Woman complains about plane meal only having one vegetable with rice)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%90%E6%A7%BD%E9%A3%9E%E6%9C%BA%E9%A4%90%E4%BB%85%E4%B8%80%E6%A0%B9%E9%9D%92%E8%8F%9C%E9%85%8D%E7%B1%B3%E9%A5%AD%23) `192.0K 🔥` `-82%`
1. [爱泼斯坦在巴黎红房间拍下女孩跳舞](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%9C%A8%E5%B7%B4%E9%BB%8E%E7%BA%A2%E6%88%BF%E9%97%B4%E6%8B%8D%E4%B8%8B%E5%A5%B3%E5%AD%A9%E8%B7%B3%E8%88%9E%23) `126.3K 🔥` `-26%`
1. [四川地震 (Sichuan earthquake)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `119.1K 🔥` `-40%`
1. [老一辈做饭好吃的原因 (The reason why the older generation cooks delicious food)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E5%81%9A%E9%A5%AD%E5%A5%BD%E5%90%83%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `98.2K 🔥` `-45%`
1. [吴昕用千问把长沙小吃点了个遍 (Wu Xin ordered all Changsha snacks with Qianwen)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%95%E7%94%A8%E5%8D%83%E9%97%AE%E6%8A%8A%E9%95%BF%E6%B2%99%E5%B0%8F%E5%90%83%E7%82%B9%E4%BA%86%E4%B8%AA%E9%81%8D%23) `96.8K 🔥` `-22%`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `88.7K 🔥` `-27%`
1. [老一辈对子女睡懒觉的执念](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E5%AF%B9%E5%AD%90%E5%A5%B3%E7%9D%A1%E6%87%92%E8%A7%89%E7%9A%84%E6%89%A7%E5%BF%B5%23) `80.3K 🔥` `-36%`
1. [时代少年团回应时代峰峻团建](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%9B%9E%E5%BA%94%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9B%A2%E5%BB%BA%23) `80.2K 🔥` `-32%`
1. [春晚彩排](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%BD%A9%E6%8E%92%23) `79.3K 🔥` `-54%`
1. [央视揭免密支付乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%8F%AD%E5%85%8D%E5%AF%86%E6%94%AF%E4%BB%98%E4%B9%B1%E8%B1%A1%23) `68.2K 🔥` `-44%`
1. [54岁男子祭祖被捕猎网电倒身亡](https://s.weibo.com/weibo?q=%2354%E5%B2%81%E7%94%B7%E5%AD%90%E7%A5%AD%E7%A5%96%E8%A2%AB%E6%8D%95%E7%8C%8E%E7%BD%91%E7%94%B5%E5%80%92%E8%BA%AB%E4%BA%A1%23) `65.8K 🔥` `-30%`
1. [梁源发文怼吴克群](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%BA%90%E5%8F%91%E6%96%87%E6%80%BC%E5%90%B4%E5%85%8B%E7%BE%A4%23) `64.5K 🔥` `-43%`

Updated at 2026-02-08 18:27:42

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
