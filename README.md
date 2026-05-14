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

1. [中美领导人致辞 (Speeches from Chinese and American leaders)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%A2%86%E5%AF%BC%E4%BA%BA%E8%87%B4%E8%BE%9E%23) `687.0K 🔥` `NEW`
1. [特朗普访华欢迎宴会](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%23) `628.9K 🔥` `NEW`
1. [天坛里的中国古建智慧](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%9D%9B%E9%87%8C%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%8F%A4%E5%BB%BA%E6%99%BA%E6%85%A7%23) `391.7K 🔥` `NEW`
1. [徐志胜疯狂暗示方媛不太方便](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E7%96%AF%E7%8B%82%E6%9A%97%E7%A4%BA%E6%96%B9%E5%AA%9B%E4%B8%8D%E5%A4%AA%E6%96%B9%E4%BE%BF%23) `385.9K 🔥` `NEW`
1. [国家反诈中心APP 检测AI图](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8F%8D%E8%AF%88%E4%B8%AD%E5%BF%83APP%20%E6%A3%80%E6%B5%8BAI%E5%9B%BE%23) `379.9K 🔥` `NEW`
1. [李现看给阿嬷的情书哭得好狼狈](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%9C%8B%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%93%AD%E5%BE%97%E5%A5%BD%E7%8B%BC%E7%8B%88%23) `369.4K 🔥` `NEW`
1. [这一刻有被林肯治愈到](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%88%BB%E6%9C%89%E8%A2%AB%E6%9E%97%E8%82%AF%E6%B2%BB%E6%84%88%E5%88%B0%23) `341.5K 🔥` `NEW`
1. [想减肥可以去KTV吃饭](https://s.weibo.com/weibo?q=%23%E6%83%B3%E5%87%8F%E8%82%A5%E5%8F%AF%E4%BB%A5%E5%8E%BBKTV%E5%90%83%E9%A5%AD%23) `236.6K 🔥` `NEW`
1. [泰兰尼斯被曝千元童鞋成本仅37元](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%85%B0%E5%B0%BC%E6%96%AF%E8%A2%AB%E6%9B%9D%E5%8D%83%E5%85%83%E7%AB%A5%E9%9E%8B%E6%88%90%E6%9C%AC%E4%BB%8537%E5%85%83%23) `219.9K 🔥` `NEW`
1. [王楚钦不打球的时候长这样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%8D%E6%89%93%E7%90%83%E7%9A%84%E6%97%B6%E5%80%99%E9%95%BF%E8%BF%99%E6%A0%B7%23) `196.1K 🔥` `NEW`
1. [AI还原烂梗有多毒 (How toxic is AI's restoration of rotten memes?)](https://s.weibo.com/weibo?q=%23AI%E8%BF%98%E5%8E%9F%E7%83%82%E6%A2%97%E6%9C%89%E5%A4%9A%E6%AF%92%23) `195.9K 🔥` `NEW`
1. [方媛坚持要住男生单人间](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%9D%9A%E6%8C%81%E8%A6%81%E4%BD%8F%E7%94%B7%E7%94%9F%E5%8D%95%E4%BA%BA%E9%97%B4%23) `195.6K 🔥` `NEW`
1. [马斯克回复360度转圈拍人民大会堂](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%9B%9E%E5%A4%8D360%E5%BA%A6%E8%BD%AC%E5%9C%88%E6%8B%8D%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `195.0K 🔥` `NEW`
1. [黄景瑜微博改名](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%BE%AE%E5%8D%9A%E6%94%B9%E5%90%8D%23) `194.5K 🔥` `NEW`
1. [张月首封销量](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%A6%96%E5%B0%81%E9%94%80%E9%87%8F%23) `194.2K 🔥` `NEW`
1. [马斯克携幼子现身人民大会堂](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%90%BA%E5%B9%BC%E5%AD%90%E7%8E%B0%E8%BA%AB%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `193.6K 🔥` `NEW`
1. [疑似周也对戛纳火力全开](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%91%A8%E4%B9%9F%E5%AF%B9%E6%88%9B%E7%BA%B3%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80%23) `193.4K 🔥` `NEW`
1. [特朗普说美高法门楣刻孔子无比荣幸](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E7%BE%8E%E9%AB%98%E6%B3%95%E9%97%A8%E6%A5%A3%E5%88%BB%E5%AD%94%E5%AD%90%E6%97%A0%E6%AF%94%E8%8D%A3%E5%B9%B8%23) `193.0K 🔥` `NEW`
1. [鹿晗寸头](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%AF%B8%E5%A4%B4%23) `192.4K 🔥` `NEW`
1. [男子1万买榴莲付11万几个月才发现](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%901%E4%B8%87%E4%B9%B0%E6%A6%B4%E8%8E%B2%E4%BB%9811%E4%B8%87%E5%87%A0%E4%B8%AA%E6%9C%88%E6%89%8D%E5%8F%91%E7%8E%B0%23) `191.7K 🔥` `NEW`
1. [全红婵妈妈生病住院 (Quan Hongchan’s mother is sick and hospitalized)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%A6%88%E5%A6%88%E7%94%9F%E7%97%85%E4%BD%8F%E9%99%A2%23) `191.6K 🔥` `NEW`
1. [曝又一部剧男主跑路](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8F%88%E4%B8%80%E9%83%A8%E5%89%A7%E7%94%B7%E4%B8%BB%E8%B7%91%E8%B7%AF%23) `190.8K 🔥` `NEW`
1. [睡前做这个动作30秒连续三天都睡得香](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%89%8D%E5%81%9A%E8%BF%99%E4%B8%AA%E5%8A%A8%E4%BD%9C30%E7%A7%92%E8%BF%9E%E7%BB%AD%E4%B8%89%E5%A4%A9%E9%83%BD%E7%9D%A1%E5%BE%97%E9%A6%99%23) `190.5K 🔥` `NEW`
1. [周也戛纳淡紫色纱裙](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E6%88%9B%E7%BA%B3%E6%B7%A1%E7%B4%AB%E8%89%B2%E7%BA%B1%E8%A3%99%23) `190.3K 🔥` `NEW`
1. [给阿嬷的情书女主官宣入行](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%A5%B3%E4%B8%BB%E5%AE%98%E5%AE%A3%E5%85%A5%E8%A1%8C%23) `186.9K 🔥` `NEW`
1. [10种不舒服是抑郁症躯体化表现](https://s.weibo.com/weibo?q=%2310%E7%A7%8D%E4%B8%8D%E8%88%92%E6%9C%8D%E6%98%AF%E6%8A%91%E9%83%81%E7%97%87%E8%BA%AF%E4%BD%93%E5%8C%96%E8%A1%A8%E7%8E%B0%23) `173.7K 🔥` `NEW`
1. [那英再次加盟歌手](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%86%8D%E6%AC%A1%E5%8A%A0%E7%9B%9F%E6%AD%8C%E6%89%8B%23) `173.7K 🔥` `NEW`
1. [宋亚轩和张杰女儿撞小名](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%92%8C%E5%BC%A0%E6%9D%B0%E5%A5%B3%E5%84%BF%E6%92%9E%E5%B0%8F%E5%90%8D%23) `171.0K 🔥` `NEW`
1. [日本男教师对女学生水瓶做不雅动作](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E6%95%99%E5%B8%88%E5%AF%B9%E5%A5%B3%E5%AD%A6%E7%94%9F%E6%B0%B4%E7%93%B6%E5%81%9A%E4%B8%8D%E9%9B%85%E5%8A%A8%E4%BD%9C%23) `170.5K 🔥` `NEW`
1. [黄仁勋谈中国AI发展](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%B0%88%E4%B8%AD%E5%9B%BDAI%E5%8F%91%E5%B1%95%23) `170.3K 🔥` `NEW`
1. [张本智和说世界排名不代表一切 (Zhang Benzhihe said that world ranking does not mean everything)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E4%B8%96%E7%95%8C%E6%8E%92%E5%90%8D%E4%B8%8D%E4%BB%A3%E8%A1%A8%E4%B8%80%E5%88%87%23) `170.2K 🔥` `NEW`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `170.1K 🔥` `NEW`
1. [常华森主动找刘诗诗打招呼](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%8D%8E%E6%A3%AE%E4%B8%BB%E5%8A%A8%E6%89%BE%E5%88%98%E8%AF%97%E8%AF%97%E6%89%93%E6%8B%9B%E5%91%BC%23) `168.2K 🔥` `NEW`
1. [有的猫一看面相就老实巴交](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%9A%84%E7%8C%AB%E4%B8%80%E7%9C%8B%E9%9D%A2%E7%9B%B8%E5%B0%B1%E8%80%81%E5%AE%9E%E5%B7%B4%E4%BA%A4%23) `160.5K 🔥` `NEW`
1. [男孩幽门螺杆菌阳性治疗4次全失败](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%B9%BD%E9%97%A8%E8%9E%BA%E6%9D%86%E8%8F%8C%E9%98%B3%E6%80%A7%E6%B2%BB%E7%96%974%E6%AC%A1%E5%85%A8%E5%A4%B1%E8%B4%A5%23) `140.9K 🔥` `NEW`
1. [曝李昀锐孟子义昀牵孟绕解绑节奏](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%E8%A7%A3%E7%BB%91%E8%8A%82%E5%A5%8F%23) `139.0K 🔥` `NEW`
1. [爸爸当家5嘉宾阵容](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BD%93%E5%AE%B65%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `138.5K 🔥` `NEW`
1. [多方回应关闭支付功能后被扣184万](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%85%B3%E9%97%AD%E6%94%AF%E4%BB%98%E5%8A%9F%E8%83%BD%E5%90%8E%E8%A2%AB%E6%89%A3184%E4%B8%87%23) `130.8K 🔥` `NEW`
1. [程十安已被注册59枚商标](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E5%8D%81%E5%AE%89%E5%B7%B2%E8%A2%AB%E6%B3%A8%E5%86%8C59%E6%9E%9A%E5%95%86%E6%A0%87%23) `127.0K 🔥` `NEW`
1. [姜乘澜韩妆速通预告](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E9%9F%A9%E5%A6%86%E9%80%9F%E9%80%9A%E9%A2%84%E5%91%8A%23) `122.8K 🔥` `NEW`
1. [妈妈低碘饮食女儿2岁不太会说话 (Mom's 2-year-old daughter eats low iodine diet and can't speak well)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%BD%8E%E7%A2%98%E9%A5%AE%E9%A3%9F%E5%A5%B3%E5%84%BF2%E5%B2%81%E4%B8%8D%E5%A4%AA%E4%BC%9A%E8%AF%B4%E8%AF%9D%23) `115.8K 🔥` `NEW`
1. [章昊 你好我是中男](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%98%8A%20%E4%BD%A0%E5%A5%BD%E6%88%91%E6%98%AF%E4%B8%AD%E7%94%B7%23) `109.9K 🔥` `NEW`
1. [值得坚持一生的24个好习惯](https://s.weibo.com/weibo?q=%23%E5%80%BC%E5%BE%97%E5%9D%9A%E6%8C%81%E4%B8%80%E7%94%9F%E7%9A%8424%E4%B8%AA%E5%A5%BD%E4%B9%A0%E6%83%AF%23) `105.4K 🔥` `NEW`
1. [女子喂宠物猪鼻蛇被咬手肿如气球](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%96%82%E5%AE%A0%E7%89%A9%E7%8C%AA%E9%BC%BB%E8%9B%87%E8%A2%AB%E5%92%AC%E6%89%8B%E8%82%BF%E5%A6%82%E6%B0%94%E7%90%83%23) `99.1K 🔥` `NEW`
1. [白鹿演唱会票价加起来是十年](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%E5%8A%A0%E8%B5%B7%E6%9D%A5%E6%98%AF%E5%8D%81%E5%B9%B4%23) `93.3K 🔥` `NEW`
1. [马頔因为心疼李纯去剧组给她做饭](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E5%9B%A0%E4%B8%BA%E5%BF%83%E7%96%BC%E6%9D%8E%E7%BA%AF%E5%8E%BB%E5%89%A7%E7%BB%84%E7%BB%99%E5%A5%B9%E5%81%9A%E9%A5%AD%23) `93.0K 🔥` `NEW`
1. [秦岭分水岭事故死者妻子发声](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%AD%E5%88%86%E6%B0%B4%E5%B2%AD%E4%BA%8B%E6%95%85%E6%AD%BB%E8%80%85%E5%A6%BB%E5%AD%90%E5%8F%91%E5%A3%B0%23) `88.0K 🔥` `NEW`
1. [浪姐](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `82.0K 🔥` `NEW`
1. [特朗普说二三把手我都不让他们来](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%BA%8C%E4%B8%89%E6%8A%8A%E6%89%8B%E6%88%91%E9%83%BD%E4%B8%8D%E8%AE%A9%E4%BB%96%E4%BB%AC%E6%9D%A5%23) `82.0K 🔥` `NEW`
1. [高通总裁安蒙谈中国机遇](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9A%E6%80%BB%E8%A3%81%E5%AE%89%E8%92%99%E8%B0%88%E4%B8%AD%E5%9B%BD%E6%9C%BA%E9%81%87%23) `82.0K 🔥` `NEW`
1. [特朗普抵达欢迎宴会现场 (Trump arrives at the welcome banquet)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%E7%8E%B0%E5%9C%BA%23) `82.0K 🔥` `NEW`

Updated at 2026-05-15 00:53:11

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
