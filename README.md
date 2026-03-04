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

1. [花店老板 死手快点绑啊 (Flower shop owner, please tie up your dead hands quickly.)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BA%97%E8%80%81%E6%9D%BF%20%E6%AD%BB%E6%89%8B%E5%BF%AB%E7%82%B9%E7%BB%91%E5%95%8A%23) `253.8K 🔥` `NEW`
1. [代表建议将农村医保改为储蓄型](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E5%BB%BA%E8%AE%AE%E5%B0%86%E5%86%9C%E6%9D%91%E5%8C%BB%E4%BF%9D%E6%94%B9%E4%B8%BA%E5%82%A8%E8%93%84%E5%9E%8B%23) `233.2K 🔥` `NEW`
1. [情久对战JDG](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%B9%85%E5%AF%B9%E6%88%98JDG%23) `210.0K 🔥` `NEW`
1. [豆包取名](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%8F%96%E5%90%8D%23) `197.0K 🔥` `NEW`
1. [有了pdd雨林深处也能村口取货](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%86pdd%E9%9B%A8%E6%9E%97%E6%B7%B1%E5%A4%84%E4%B9%9F%E8%83%BD%E6%9D%91%E5%8F%A3%E5%8F%96%E8%B4%A7%23) `139.4K 🔥` `NEW`
1. [未来10多年中国中等收入群体可能超8亿](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A510%E5%A4%9A%E5%B9%B4%E4%B8%AD%E5%9B%BD%E4%B8%AD%E7%AD%89%E6%94%B6%E5%85%A5%E7%BE%A4%E4%BD%93%E5%8F%AF%E8%83%BD%E8%B6%858%E4%BA%BF%23) `138.3K 🔥` `NEW`
1. [建议合理增加下半年节假日](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%90%88%E7%90%86%E5%A2%9E%E5%8A%A0%E4%B8%8B%E5%8D%8A%E5%B9%B4%E8%8A%82%E5%81%87%E6%97%A5%23) `120.0K 🔥` `NEW`
1. [浮生物语](https://s.weibo.com/weibo?q=%23%E6%B5%AE%E7%94%9F%E7%89%A9%E8%AF%AD%23) `115.6K 🔥` `NEW`
1. [一上班物欲就缠上来了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%8A%E7%8F%AD%E7%89%A9%E6%AC%B2%E5%B0%B1%E7%BC%A0%E4%B8%8A%E6%9D%A5%E4%BA%86%23) `96.1K 🔥` `NEW`
1. [政协委员呼吁要保证加班工资](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%8D%8F%E5%A7%94%E5%91%98%E5%91%BC%E5%90%81%E8%A6%81%E4%BF%9D%E8%AF%81%E5%8A%A0%E7%8F%AD%E5%B7%A5%E8%B5%84%23) `89.0K 🔥` `NEW`
1. [A股半导体公司集体发涨价函 (A-share semiconductor companies collectively issued price increase letters)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%85%AC%E5%8F%B8%E9%9B%86%E4%BD%93%E5%8F%91%E6%B6%A8%E4%BB%B7%E5%87%BD%23) `88.5K 🔥` `NEW`
1. [不想本身就是一种拒绝理由](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%83%B3%E6%9C%AC%E8%BA%AB%E5%B0%B1%E6%98%AF%E4%B8%80%E7%A7%8D%E6%8B%92%E7%BB%9D%E7%90%86%E7%94%B1%23) `84.2K 🔥` `NEW`
1. [弟弟 不管你是谁从我姐身上下来](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%20%E4%B8%8D%E7%AE%A1%E4%BD%A0%E6%98%AF%E8%B0%81%E4%BB%8E%E6%88%91%E5%A7%90%E8%BA%AB%E4%B8%8A%E4%B8%8B%E6%9D%A5%23) `79.8K 🔥` `NEW`
1. [郑钦文回应换教练传闻](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%9B%9E%E5%BA%94%E6%8D%A2%E6%95%99%E7%BB%83%E4%BC%A0%E9%97%BB%23) `72.6K 🔥` `NEW`
1. [委员建议00后不要进入加班文化](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%BB%BA%E8%AE%AE00%E5%90%8E%E4%B8%8D%E8%A6%81%E8%BF%9B%E5%85%A5%E5%8A%A0%E7%8F%AD%E6%96%87%E5%8C%96%23) `1.1M 🔥` `+1002%`
1. [热水器不能一开一关](https://s.weibo.com/weibo?q=%23%E7%83%AD%E6%B0%B4%E5%99%A8%E4%B8%8D%E8%83%BD%E4%B8%80%E5%BC%80%E4%B8%80%E5%85%B3%23) `906.8K 🔥` `+294%`
1. [伊朗局势最新情况](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B1%80%E5%8A%BF%E6%9C%80%E6%96%B0%E6%83%85%E5%86%B5%23) `136.8K 🔥` `+63%`
1. [开放的中国现代化的中国 (Open China Modern China)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%94%BE%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%8E%B0%E4%BB%A3%E5%8C%96%E7%9A%84%E4%B8%AD%E5%9B%BD%23) `604.4K 🔥`
1. [奥迪破马年吉尼斯世界纪录 (Audi breaks Guinness world record in Year of the Horse)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AA%E7%A0%B4%E9%A9%AC%E5%B9%B4%E5%90%89%E5%B0%BC%E6%96%AF%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `547.2K 🔥`
1. [中东局势彻底失控 (The situation in the Middle East is completely out of control)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%B1%80%E5%8A%BF%E5%BD%BB%E5%BA%95%E5%A4%B1%E6%8E%A7%23) `276.7K 🔥`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `270.9K 🔥`
1. [2025年立法工作取得新进展](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E7%AB%8B%E6%B3%95%E5%B7%A5%E4%BD%9C%E5%8F%96%E5%BE%97%E6%96%B0%E8%BF%9B%E5%B1%95%23) `270.0K 🔥`
1. [王励勤回应樊振东归队问题](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%B1%E5%8B%A4%E5%9B%9E%E5%BA%94%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BD%92%E9%98%9F%E9%97%AE%E9%A2%98%23) `249.2K 🔥`
1. [专家表示伊朗导弹必须改打法 (Experts say Iran’s missiles must change their approach)](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%A1%A8%E7%A4%BA%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%BF%85%E9%A1%BB%E6%94%B9%E6%89%93%E6%B3%95%23) `226.8K 🔥`
1. [伊朗的导弹能用多久](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E5%AF%BC%E5%BC%B9%E8%83%BD%E7%94%A8%E5%A4%9A%E4%B9%85%23) `137.6K 🔥`
1. [王楚然大方介绍自己来自中国](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%A4%A7%E6%96%B9%E4%BB%8B%E7%BB%8D%E8%87%AA%E5%B7%B1%E6%9D%A5%E8%87%AA%E4%B8%AD%E5%9B%BD%23) `137.5K 🔥`
1. [伊拉克被美以当成打伊朗的免费跳板](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E8%A2%AB%E7%BE%8E%E4%BB%A5%E5%BD%93%E6%88%90%E6%89%93%E4%BC%8A%E6%9C%97%E7%9A%84%E5%85%8D%E8%B4%B9%E8%B7%B3%E6%9D%BF%23) `136.1K 🔥`
1. [十四届全国人大四次会议发布会](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E5%8F%91%E5%B8%83%E4%BC%9A%23) `113.1K 🔥`
1. [美军公布最新伤亡情况](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%85%AC%E5%B8%83%E6%9C%80%E6%96%B0%E4%BC%A4%E4%BA%A1%E6%83%85%E5%86%B5%23) `95.2K 🔥`
1. [世界会偏爱多问一嘴的人](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%BC%9A%E5%81%8F%E7%88%B1%E5%A4%9A%E9%97%AE%E4%B8%80%E5%98%B4%E7%9A%84%E4%BA%BA%23) `79.5K 🔥`
1. [建议推广农村不超过2万彩礼](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8E%A8%E5%B9%BF%E5%86%9C%E6%9D%91%E4%B8%8D%E8%B6%85%E8%BF%872%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `461.3K 🔥` `-59%`
1. [建议居民身份证去地址化 (It is recommended that resident ID cards be de-addressed)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B1%85%E6%B0%91%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8E%BB%E5%9C%B0%E5%9D%80%E5%8C%96%23) `281.8K 🔥` `-65%`
1. [牛奶再放个把月就能喝了](https://s.weibo.com/weibo?q=%23%E7%89%9B%E5%A5%B6%E5%86%8D%E6%94%BE%E4%B8%AA%E6%8A%8A%E6%9C%88%E5%B0%B1%E8%83%BD%E5%96%9D%E4%BA%86%23) `205.4K 🔥` `-26%`
1. [建议彩礼金额不超过6万元 (It is recommended that the amount of the betrothal gift should not exceed 60,000 yuan)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%BD%A9%E7%A4%BC%E9%87%91%E9%A2%9D%E4%B8%8D%E8%B6%85%E8%BF%876%E4%B8%87%E5%85%83%23) `191.6K 🔥` `-49%`
1. [建议高考英语降为100分](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E9%AB%98%E8%80%83%E8%8B%B1%E8%AF%AD%E9%99%8D%E4%B8%BA100%E5%88%86%23) `162.0K 🔥` `-36%`
1. [问界M9 (Wenjie M9)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%23) `159.3K 🔥` `-46%`
1. [王天辰 就是很想亲 (Wang Tianchen, I just want to kiss you)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%20%E5%B0%B1%E6%98%AF%E5%BE%88%E6%83%B3%E4%BA%B2%23) `139.5K 🔥` `-38%`
1. [尚界Z7](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%23) `136.2K 🔥` `-49%`
1. [李幼斌 法拉利老了会变成意大利炮](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B9%BC%E6%96%8C%20%E6%B3%95%E6%8B%89%E5%88%A9%E8%80%81%E4%BA%86%E4%BC%9A%E5%8F%98%E6%88%90%E6%84%8F%E5%A4%A7%E5%88%A9%E7%82%AE%23) `133.6K 🔥` `-49%`
1. [建议提高个税起征点至8000或1万](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8F%90%E9%AB%98%E4%B8%AA%E7%A8%8E%E8%B5%B7%E5%BE%81%E7%82%B9%E8%87%B38000%E6%88%961%E4%B8%87%23) `129.6K 🔥` `-36%`
1. [我国今年将大力提振消费](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%BB%8A%E5%B9%B4%E5%B0%86%E5%A4%A7%E5%8A%9B%E6%8F%90%E6%8C%AF%E6%B6%88%E8%B4%B9%23) `115.5K 🔥` `-32%`
1. [这竟然是甄嬛传里的温宜公主](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%AB%9F%E7%84%B6%E6%98%AF%E7%94%84%E5%AC%9B%E4%BC%A0%E9%87%8C%E7%9A%84%E6%B8%A9%E5%AE%9C%E5%85%AC%E4%B8%BB%23) `114.7K 🔥` `-42%`
1. [伊朗低成本武器正耗空美国高端弹药](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BD%8E%E6%88%90%E6%9C%AC%E6%AD%A6%E5%99%A8%E6%AD%A3%E8%80%97%E7%A9%BA%E7%BE%8E%E5%9B%BD%E9%AB%98%E7%AB%AF%E5%BC%B9%E8%8D%AF%23) `109.0K 🔥` `-32%`
1. [肛门周围长东西一定是痔疮吗 (Is the growth around the anus definitely hemorrhoids?)](https://s.weibo.com/weibo?q=%23%E8%82%9B%E9%97%A8%E5%91%A8%E5%9B%B4%E9%95%BF%E4%B8%9C%E8%A5%BF%E4%B8%80%E5%AE%9A%E6%98%AF%E7%97%94%E7%96%AE%E5%90%97%23) `96.6K 🔥` `-26%`
1. [大学生返校统一姿势 (College students return to school in unified posture)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%BF%94%E6%A0%A1%E7%BB%9F%E4%B8%80%E5%A7%BF%E5%8A%BF%23) `94.0K 🔥` `-41%`
1. [阿里高层出面挽留林俊旸 (Alibaba executives intervene to retain Lin Junyang)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E9%AB%98%E5%B1%82%E5%87%BA%E9%9D%A2%E6%8C%BD%E7%95%99%E6%9E%97%E4%BF%8A%E6%97%B8%23) `90.6K 🔥` `-53%`
1. [全国政协十四届四次会议开幕](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%94%BF%E5%8D%8F%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E5%BC%80%E5%B9%95%23) `90.4K 🔥` `-34%`
1. [两会 (two sessions)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%23) `85.6K 🔥` `-53%`
1. [许昕回复王楚钦](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E5%9B%9E%E5%A4%8D%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `83.1K 🔥` `-41%`
1. [徐璐自曝做了牙贴片 (Xu Lu revealed that she had dental veneers done)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E7%92%90%E8%87%AA%E6%9B%9D%E5%81%9A%E4%BA%86%E7%89%99%E8%B4%B4%E7%89%87%23) `76.1K 🔥` `-45%`
1. [你们霸总的衣服还要共享啊](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E9%9C%B8%E6%80%BB%E7%9A%84%E8%A1%A3%E6%9C%8D%E8%BF%98%E8%A6%81%E5%85%B1%E4%BA%AB%E5%95%8A%23) `72.0K 🔥` `-55%`
1. [雨天午睡很舒服就要小心了 (Taking a nap on a rainy day is very comfortable, so be careful.)](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E5%A4%A9%E5%8D%88%E7%9D%A1%E5%BE%88%E8%88%92%E6%9C%8D%E5%B0%B1%E8%A6%81%E5%B0%8F%E5%BF%83%E4%BA%86%23) `70.5K 🔥` `-52%`

Updated at 2026-03-04 17:55:06

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
