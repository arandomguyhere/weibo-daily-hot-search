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

1. [苏翊鸣晋级坡障决赛 (Su Yiming advances to slopestyle finals)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%99%8B%E7%BA%A7%E5%9D%A1%E9%9A%9C%E5%86%B3%E8%B5%9B%23) `282.7K 🔥` `NEW`
1. [辽宁春晚 于适骑马出场](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%98%A5%E6%99%9A%20%E4%BA%8E%E9%80%82%E9%AA%91%E9%A9%AC%E5%87%BA%E5%9C%BA%23) `252.9K 🔥` `NEW`
1. [喵娲娲除夕要发30万红包](https://s.weibo.com/weibo?q=%23%E5%96%B5%E5%A8%B2%E5%A8%B2%E9%99%A4%E5%A4%95%E8%A6%81%E5%8F%9130%E4%B8%87%E7%BA%A2%E5%8C%85%23) `226.2K 🔥` `NEW`
1. [美国AI大牛盛赞杨丽萍千问节目](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BDAI%E5%A4%A7%E7%89%9B%E7%9B%9B%E8%B5%9E%E6%9D%A8%E4%B8%BD%E8%90%8D%E5%8D%83%E9%97%AE%E8%8A%82%E7%9B%AE%23) `188.3K 🔥` `NEW`
1. [景区回应冰雕免费打卡变150元售卖](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%8C%BA%E5%9B%9E%E5%BA%94%E5%86%B0%E9%9B%95%E5%85%8D%E8%B4%B9%E6%89%93%E5%8D%A1%E5%8F%98150%E5%85%83%E5%94%AE%E5%8D%96%23) `183.1K 🔥` `NEW`
1. [T1被BFX虐泉](https://s.weibo.com/weibo?q=%23T1%E8%A2%ABBFX%E8%99%90%E6%B3%89%23) `157.8K 🔥` `NEW`
1. [下一站春晚](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E4%B8%80%E7%AB%99%E6%98%A5%E6%99%9A%23) `156.8K 🔥` `NEW`
1. [T1掉落败者组](https://s.weibo.com/weibo?q=%23T1%E6%8E%89%E8%90%BD%E8%B4%A5%E8%80%85%E7%BB%84%23) `145.8K 🔥` `NEW`
1. [烟花](https://s.weibo.com/weibo?q=%23%E7%83%9F%E8%8A%B1%23) `104.1K 🔥` `NEW`
1. [山东卫视春晚](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `102.7K 🔥` `NEW`
1. [怎么都在晒千问口令红包封面 (Why are they posting the Qianwen password red envelope cover?)](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E9%83%BD%E5%9C%A8%E6%99%92%E5%8D%83%E9%97%AE%E5%8F%A3%E4%BB%A4%E7%BA%A2%E5%8C%85%E5%B0%81%E9%9D%A2%23) `100.5K 🔥` `NEW`
1. [苏翊鸣头盔上贴了中国国旗](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%A4%B4%E7%9B%94%E4%B8%8A%E8%B4%B4%E4%BA%86%E4%B8%AD%E5%9B%BD%E5%9B%BD%E6%97%97%23) `99.0K 🔥` `NEW`
1. [十几个大喇叭播放喜庆歌曲居民崩溃](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%87%A0%E4%B8%AA%E5%A4%A7%E5%96%87%E5%8F%AD%E6%92%AD%E6%94%BE%E5%96%9C%E5%BA%86%E6%AD%8C%E6%9B%B2%E5%B1%85%E6%B0%91%E5%B4%A9%E6%BA%83%23) `89.7K 🔥` `NEW`
1. [5个习惯养成易疲劳体质](https://s.weibo.com/weibo?q=%235%E4%B8%AA%E4%B9%A0%E6%83%AF%E5%85%BB%E6%88%90%E6%98%93%E7%96%B2%E5%8A%B3%E4%BD%93%E8%B4%A8%23) `89.4K 🔥` `NEW`
1. [杨文龙41.73分遗憾出局](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%96%87%E9%BE%9941.73%E5%88%86%E9%81%97%E6%86%BE%E5%87%BA%E5%B1%80%23) `85.6K 🔥` `NEW`
1. [2026红包分组 (2026 red envelope grouping)](https://s.weibo.com/weibo?q=%232026%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `1.2M 🔥` `+37%`
1. [除夕晚8上京东抢大牌手机大牌酒 (Go to JD.com to grab big-name mobile phones and big-name wines at 8pm on New Year’s Eve)](https://s.weibo.com/weibo?q=%23%E9%99%A4%E5%A4%95%E6%99%9A8%E4%B8%8A%E4%BA%AC%E4%B8%9C%E6%8A%A2%E5%A4%A7%E7%89%8C%E6%89%8B%E6%9C%BA%E5%A4%A7%E7%89%8C%E9%85%92%23) `802.3K 🔥` `+236%`
1. [辽宁卫视春晚](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `785.7K 🔥` `+120%`
1. [春晚彩排 (Spring Festival Gala rehearsal)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%BD%A9%E6%8E%92%23) `770.3K 🔥` `+96%`
1. [00后已经快奔三了](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%B7%B2%E7%BB%8F%E5%BF%AB%E5%A5%94%E4%B8%89%E4%BA%86%23) `648.6K 🔥` `+76%`
1. [国际雪联回应谷爱凌吐槽](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E9%9B%AA%E8%81%94%E5%9B%9E%E5%BA%94%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%90%E6%A7%BD%23) `391.7K 🔥` `+39%`
1. [男子在胖东来买5000元年货花500寄出 (A man bought 5,000 yuan of new year goods in Pang Dong Lai and spent 500 to mail them out.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B9%B05000%E5%85%83%E5%B9%B4%E8%B4%A7%E8%8A%B1500%E5%AF%84%E5%87%BA%23) `234.2K 🔥` `+21%`
1. [迪丽热巴说酒店不让贴春联](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%AF%B4%E9%85%92%E5%BA%97%E4%B8%8D%E8%AE%A9%E8%B4%B4%E6%98%A5%E8%81%94%23) `224.4K 🔥` `+41%`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `124.4K 🔥` `+43%`
1. [千问红包雨 (Qianwen red envelope rain)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%E9%9B%A8%23) `1.0M 🔥`
1. [咱们空间站过年氛围拉满了 (Our space station is full of Chinese New Year atmosphere)](https://s.weibo.com/weibo?q=%23%E5%92%B1%E4%BB%AC%E7%A9%BA%E9%97%B4%E7%AB%99%E8%BF%87%E5%B9%B4%E6%B0%9B%E5%9B%B4%E6%8B%89%E6%BB%A1%E4%BA%86%23) `803.8K 🔥`
1. [王者年限销量排行 (King’s sales ranking)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%B9%B4%E9%99%90%E9%94%80%E9%87%8F%E6%8E%92%E8%A1%8C%23) `298.1K 🔥`
1. [有人把4万元金饰剪碎做成美甲 (Someone cut up 40,000 yuan of gold jewelry and made it into manicure)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E6%8A%8A4%E4%B8%87%E5%85%83%E9%87%91%E9%A5%B0%E5%89%AA%E7%A2%8E%E5%81%9A%E6%88%90%E7%BE%8E%E7%94%B2%23) `261.8K 🔥`
1. [川渝春晚](https://s.weibo.com/weibo?q=%23%E5%B7%9D%E6%B8%9D%E6%98%A5%E6%99%9A%23) `190.7K 🔥`
1. [男子聚会被下药提前离场躲过一劫](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%81%9A%E4%BC%9A%E8%A2%AB%E4%B8%8B%E8%8D%AF%E6%8F%90%E5%89%8D%E7%A6%BB%E5%9C%BA%E8%BA%B2%E8%BF%87%E4%B8%80%E5%8A%AB%23) `178.9K 🔥`
1. [白敬亭 宋轶 (Bai Jingting Song Yi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `174.8K 🔥`
1. [几杯去世](https://s.weibo.com/weibo?q=%23%E5%87%A0%E6%9D%AF%E5%8E%BB%E4%B8%96%23) `172.5K 🔥`
1. [程晓玥自曝怀二胎吃了很多垃圾食品 (Cheng Xiaoyue revealed that she ate a lot of junk food while pregnant with her second child)](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E8%87%AA%E6%9B%9D%E6%80%80%E4%BA%8C%E8%83%8E%E5%90%83%E4%BA%86%E5%BE%88%E5%A4%9A%E5%9E%83%E5%9C%BE%E9%A3%9F%E5%93%81%23) `164.7K 🔥`
1. [方家翊因整容鼻子修复3次](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AE%B6%E7%BF%8A%E5%9B%A0%E6%95%B4%E5%AE%B9%E9%BC%BB%E5%AD%90%E4%BF%AE%E5%A4%8D3%E6%AC%A1%23) `163.2K 🔥`
1. [Angelababy邓超即将合拍 (Angelababy Deng Chao is about to be co-produced)](https://s.weibo.com/weibo?q=%23Angelababy%E9%82%93%E8%B6%85%E5%8D%B3%E5%B0%86%E5%90%88%E6%8B%8D%23) `155.7K 🔥`
1. [马年春晚部分节目单曝光](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%98%A5%E6%99%9A%E9%83%A8%E5%88%86%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9B%9D%E5%85%89%23) `151.6K 🔥`
1. [孙颖莎回老家过年](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E8%80%81%E5%AE%B6%E8%BF%87%E5%B9%B4%23) `150.4K 🔥`
1. [再次提醒中国公民避免赴日 (Chinese citizens are reminded again to avoid traveling to Japan)](https://s.weibo.com/weibo?q=%23%E5%86%8D%E6%AC%A1%E6%8F%90%E9%86%92%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E9%81%BF%E5%85%8D%E8%B5%B4%E6%97%A5%23) `126.8K 🔥`
1. [庾晚音夏侯澹圆房](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%99%9A%E9%9F%B3%E5%A4%8F%E4%BE%AF%E6%BE%B9%E5%9C%86%E6%88%BF%23) `107.3K 🔥`
1. [签约前买家突然砍价40万房东怒了](https://s.weibo.com/weibo?q=%23%E7%AD%BE%E7%BA%A6%E5%89%8D%E4%B9%B0%E5%AE%B6%E7%AA%81%E7%84%B6%E7%A0%8D%E4%BB%B740%E4%B8%87%E6%88%BF%E4%B8%9C%E6%80%92%E4%BA%86%23) `91.8K 🔥`
1. [马年清清来送签名红包](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%B8%85%E6%B8%85%E6%9D%A5%E9%80%81%E7%AD%BE%E5%90%8D%E7%BA%A2%E5%8C%85%23) `91.1K 🔥`
1. [迪丽热巴马年央视春晚 (Dilire Bama Year CCTV Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A9%AC%E5%B9%B4%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%23) `90.0K 🔥`
1. [徐明浩直播](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%98%8E%E6%B5%A9%E7%9B%B4%E6%92%AD%23) `86.3K 🔥`
1. [老式小糕点 油糖混合](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%BC%8F%E5%B0%8F%E7%B3%95%E7%82%B9%20%E6%B2%B9%E7%B3%96%E6%B7%B7%E5%90%88%23) `84.8K 🔥`
1. [苏翊鸣第二滑72.78分 (Su Yiming skated second with 72.78 points)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%AC%AC%E4%BA%8C%E6%BB%9172.78%E5%88%86%23) `278.9K 🔥` `-39%`
1. [单板滑雪男子坡障技巧预赛](https://s.weibo.com/weibo?q=%23%E5%8D%95%E6%9D%BF%E6%BB%91%E9%9B%AA%E7%94%B7%E5%AD%90%E5%9D%A1%E9%9A%9C%E6%8A%80%E5%B7%A7%E9%A2%84%E8%B5%9B%23) `231.2K 🔥` `-51%`
1. [中国对加拿大英国免签](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%AF%B9%E5%8A%A0%E6%8B%BF%E5%A4%A7%E8%8B%B1%E5%9B%BD%E5%85%8D%E7%AD%BE%23) `191.7K 🔥` `-30%`
1. [谷爱凌大跳台进决赛发文](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%A7%E8%B7%B3%E5%8F%B0%E8%BF%9B%E5%86%B3%E8%B5%9B%E5%8F%91%E6%96%87%23) `158.9K 🔥` `-43%`
1. [成何体统 (In what manner)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `140.3K 🔥` `-35%`
1. [辽宁春晚官宣节目单 (Official program of Liaoning Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%98%A5%E6%99%9A%E5%AE%98%E5%AE%A3%E8%8A%82%E7%9B%AE%E5%8D%95%23) `112.0K 🔥` `-66%`
1. [饶雪漫 黄圣依一个结节一个结节地长 (Rao Xueman and Huang Shengyi grow one knot after another)](https://s.weibo.com/weibo?q=%23%E9%A5%B6%E9%9B%AA%E6%BC%AB%20%E9%BB%84%E5%9C%A3%E4%BE%9D%E4%B8%80%E4%B8%AA%E7%BB%93%E8%8A%82%E4%B8%80%E4%B8%AA%E7%BB%93%E8%8A%82%E5%9C%B0%E9%95%BF%23) `88.3K 🔥` `-36%`

Updated at 2026-02-15 20:21:31

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
