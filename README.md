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

1. [中国人工智能发展到什么程度了 (To what extent has China’s artificial intelligence developed?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%8F%91%E5%B1%95%E5%88%B0%E4%BB%80%E4%B9%88%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `823.3K 🔥` `NEW`
1. [世界杯收官抽百万黄金](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%94%B6%E5%AE%98%E6%8A%BD%E7%99%BE%E4%B8%87%E9%BB%84%E9%87%91%23) `823.2K 🔥` `NEW`
1. [谢霆锋发讣告](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E5%8F%91%E8%AE%A3%E5%91%8A%23) `813.5K 🔥` `NEW`
1. [韩国网友感慨中国综艺聊生理期](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%84%9F%E6%85%A8%E4%B8%AD%E5%9B%BD%E7%BB%BC%E8%89%BA%E8%81%8A%E7%94%9F%E7%90%86%E6%9C%9F%23) `784.2K 🔥` `NEW`
1. [男子招嫖被骗90多万妻子受刺激抑郁](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%9B%E5%AB%96%E8%A2%AB%E9%AA%9790%E5%A4%9A%E4%B8%87%E5%A6%BB%E5%AD%90%E5%8F%97%E5%88%BA%E6%BF%80%E6%8A%91%E9%83%81%23) `654.3K 🔥` `NEW`
1. [经常化妆的人卸妆有一种素颜感](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E5%B8%B8%E5%8C%96%E5%A6%86%E7%9A%84%E4%BA%BA%E5%8D%B8%E5%A6%86%E6%9C%89%E4%B8%80%E7%A7%8D%E7%B4%A0%E9%A2%9C%E6%84%9F%23) `653.6K 🔥` `NEW`
1. [中美就年内元首互动安排保持沟通](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%B0%B1%E5%B9%B4%E5%86%85%E5%85%83%E9%A6%96%E4%BA%92%E5%8A%A8%E5%AE%89%E6%8E%92%E4%BF%9D%E6%8C%81%E6%B2%9F%E9%80%9A%23) `642.1K 🔥` `NEW`
1. [谢贤九成遗产留给两孙子](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E4%B9%9D%E6%88%90%E9%81%97%E4%BA%A7%E7%95%99%E7%BB%99%E4%B8%A4%E5%AD%99%E5%AD%90%23) `639.7K 🔥` `NEW`
1. [谢贤去世](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%8E%BB%E4%B8%96%23) `632.7K 🔥` `NEW`
1. [性交易发现避孕套脱落勒索8万](https://s.weibo.com/weibo?q=%23%E6%80%A7%E4%BA%A4%E6%98%93%E5%8F%91%E7%8E%B0%E9%81%BF%E5%AD%95%E5%A5%97%E8%84%B1%E8%90%BD%E5%8B%92%E7%B4%A28%E4%B8%87%23) `624.1K 🔥` `NEW`
1. [张柏芝头像变黑 (Cecilia Cheung's avatar turns black)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%A4%B4%E5%83%8F%E5%8F%98%E9%BB%91%23) `620.5K 🔥` `NEW`
1. [白鹿奔跑吧下一季投票第一](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%94%E8%B7%91%E5%90%A7%E4%B8%8B%E4%B8%80%E5%AD%A3%E6%8A%95%E7%A5%A8%E7%AC%AC%E4%B8%80%23) `615.1K 🔥` `NEW`
1. [亚马尔 决赛遇到中国队也很难](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%20%E5%86%B3%E8%B5%9B%E9%81%87%E5%88%B0%E4%B8%AD%E5%9B%BD%E9%98%9F%E4%B9%9F%E5%BE%88%E9%9A%BE%23) `600.7K 🔥` `NEW`
1. [女子提分手后遭男子持刀刺颈身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8F%90%E5%88%86%E6%89%8B%E5%90%8E%E9%81%AD%E7%94%B7%E5%AD%90%E6%8C%81%E5%88%80%E5%88%BA%E9%A2%88%E8%BA%AB%E4%BA%A1%23) `599.2K 🔥` `NEW`
1. [谢婷婷发文悼念父亲谢贤](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A9%B7%E5%A9%B7%E5%8F%91%E6%96%87%E6%82%BC%E5%BF%B5%E7%88%B6%E4%BA%B2%E8%B0%A2%E8%B4%A4%23) `588.0K 🔥` `NEW`
1. [谢贤遗产](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E9%81%97%E4%BA%A7%23) `586.7K 🔥` `NEW`
1. [在西安看世界杯含金量极高](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E8%A5%BF%E5%AE%89%E7%9C%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%AB%E9%87%91%E9%87%8F%E6%9E%81%E9%AB%98%23) `578.0K 🔥` `NEW`
1. [谢贤年轻时有多帅](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%B9%B4%E8%BD%BB%E6%97%B6%E6%9C%89%E5%A4%9A%E5%B8%85%23) `575.3K 🔥` `NEW`
1. [驾照考的早的好处还在提升](https://s.weibo.com/weibo?q=%23%E9%A9%BE%E7%85%A7%E8%80%83%E7%9A%84%E6%97%A9%E7%9A%84%E5%A5%BD%E5%A4%84%E8%BF%98%E5%9C%A8%E6%8F%90%E5%8D%87%23) `518.1K 🔥` `NEW`
1. [五台山游客插队直接被拎了出来](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%8F%B0%E5%B1%B1%E6%B8%B8%E5%AE%A2%E6%8F%92%E9%98%9F%E7%9B%B4%E6%8E%A5%E8%A2%AB%E6%8B%8E%E4%BA%86%E5%87%BA%E6%9D%A5%23) `434.8K 🔥` `NEW`
1. [被大佬的工作留痕意识震撼到 (I was shocked by the boss’s awareness of the traces left behind by his work)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A4%A7%E4%BD%AC%E7%9A%84%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%E6%84%8F%E8%AF%86%E9%9C%87%E6%92%BC%E5%88%B0%23) `433.2K 🔥` `NEW`
1. [AI给人的不止是方便还有勇气](https://s.weibo.com/weibo?q=%23AI%E7%BB%99%E4%BA%BA%E7%9A%84%E4%B8%8D%E6%AD%A2%E6%98%AF%E6%96%B9%E4%BE%BF%E8%BF%98%E6%9C%89%E5%8B%87%E6%B0%94%23) `370.2K 🔥` `NEW`
1. [输球后阿根廷首都发生骚乱](https://s.weibo.com/weibo?q=%23%E8%BE%93%E7%90%83%E5%90%8E%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%A6%96%E9%83%BD%E5%8F%91%E7%94%9F%E9%AA%9A%E4%B9%B1%23) `366.8K 🔥` `NEW`
1. [虞书欣 女人中的女人](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E5%A5%B3%E4%BA%BA%E4%B8%AD%E7%9A%84%E5%A5%B3%E4%BA%BA%23) `366.6K 🔥` `NEW`
1. [去川西玩的人嘴真严](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%B7%9D%E8%A5%BF%E7%8E%A9%E7%9A%84%E4%BA%BA%E5%98%B4%E7%9C%9F%E4%B8%A5%23) `336.1K 🔥` `NEW`
1. [弟弟摔伤8岁哥哥在家流泪祈祷](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E6%91%94%E4%BC%A48%E5%B2%81%E5%93%A5%E5%93%A5%E5%9C%A8%E5%AE%B6%E6%B5%81%E6%B3%AA%E7%A5%88%E7%A5%B7%23) `295.1K 🔥` `NEW`
1. [柳柳周佑凌确认关系](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3%E5%91%A8%E4%BD%91%E5%87%8C%E7%A1%AE%E8%AE%A4%E5%85%B3%E7%B3%BB%23) `292.4K 🔥` `NEW`
1. [姆巴佩没去领奖原来在游艇上看决赛](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B2%A1%E5%8E%BB%E9%A2%86%E5%A5%96%E5%8E%9F%E6%9D%A5%E5%9C%A8%E6%B8%B8%E8%89%87%E4%B8%8A%E7%9C%8B%E5%86%B3%E8%B5%9B%23) `292.1K 🔥` `NEW`
1. [健康才是最强的掌控力](https://s.weibo.com/weibo?q=%23%E5%81%A5%E5%BA%B7%E6%89%8D%E6%98%AF%E6%9C%80%E5%BC%BA%E7%9A%84%E6%8E%8C%E6%8E%A7%E5%8A%9B%23) `290.0K 🔥` `NEW`
1. [妹妹在日薪差距2元的工作中纠结](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E5%9C%A8%E6%97%A5%E8%96%AA%E5%B7%AE%E8%B7%9D2%E5%85%83%E7%9A%84%E5%B7%A5%E4%BD%9C%E4%B8%AD%E7%BA%A0%E7%BB%93%23) `289.9K 🔥` `NEW`
1. [女子遛狗不拴绳遭男子摔狗扇耳光 (Woman walks her dog without a leash and is slapped by a man after she throws the dog)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%9B%E7%8B%97%E4%B8%8D%E6%8B%B4%E7%BB%B3%E9%81%AD%E7%94%B7%E5%AD%90%E6%91%94%E7%8B%97%E6%89%87%E8%80%B3%E5%85%89%23) `289.9K 🔥` `NEW`
1. [早睡早起读书健身 真正的亚文化](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%9D%A1%E6%97%A9%E8%B5%B7%E8%AF%BB%E4%B9%A6%E5%81%A5%E8%BA%AB%20%E7%9C%9F%E6%AD%A3%E7%9A%84%E4%BA%9A%E6%96%87%E5%8C%96%23) `272.0K 🔥` `NEW`
1. [黄总包厢事件通报为何难以服众](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%80%BB%E5%8C%85%E5%8E%A2%E4%BA%8B%E4%BB%B6%E9%80%9A%E6%8A%A5%E4%B8%BA%E4%BD%95%E9%9A%BE%E4%BB%A5%E6%9C%8D%E4%BC%97%23) `246.3K 🔥` `NEW`
1. [王源早就走到下一阶段了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%97%A9%E5%B0%B1%E8%B5%B0%E5%88%B0%E4%B8%8B%E4%B8%80%E9%98%B6%E6%AE%B5%E4%BA%86%23) `238.5K 🔥` `NEW`
1. [IU因病取消演唱会](https://s.weibo.com/weibo?q=%23IU%E5%9B%A0%E7%97%85%E5%8F%96%E6%B6%88%E6%BC%94%E5%94%B1%E4%BC%9A%23) `204.0K 🔥` `NEW`
1. [百花杀两口子把情敌保送成后妈](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E4%B8%A4%E5%8F%A3%E5%AD%90%E6%8A%8A%E6%83%85%E6%95%8C%E4%BF%9D%E9%80%81%E6%88%90%E5%90%8E%E5%A6%88%23) `203.8K 🔥` `NEW`
1. [广大投资者是市场之本](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%A4%A7%E6%8A%95%E8%B5%84%E8%80%85%E6%98%AF%E5%B8%82%E5%9C%BA%E4%B9%8B%E6%9C%AC%23) `203.6K 🔥` `NEW`
1. [Kimi回应马斯克隔空宣战](https://s.weibo.com/weibo?q=%23Kimi%E5%9B%9E%E5%BA%94%E9%A9%AC%E6%96%AF%E5%85%8B%E9%9A%94%E7%A9%BA%E5%AE%A3%E6%88%98%23) `203.5K 🔥` `NEW`
1. [今年去世的港星](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E5%8E%BB%E4%B8%96%E7%9A%84%E6%B8%AF%E6%98%9F%23) `203.1K 🔥` `NEW`
1. [全新坦克300上市19.98万元起](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%9D%A6%E5%85%8B300%E4%B8%8A%E5%B8%8219.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `790.9K 🔥`
1. [余文乐老婆 (Shawn Yue's wife)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%E8%80%81%E5%A9%86%23) `532.8K 🔥`
1. [阿根廷队无法接受输掉决赛的事实 (Argentina cannot accept losing the final)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E6%97%A0%E6%B3%95%E6%8E%A5%E5%8F%97%E8%BE%93%E6%8E%89%E5%86%B3%E8%B5%9B%E7%9A%84%E4%BA%8B%E5%AE%9E%23) `1.2M 🔥` `-67%`
1. [西班牙两位公主再捧大力神杯](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E4%B8%A4%E4%BD%8D%E5%85%AC%E4%B8%BB%E5%86%8D%E6%8D%A7%E5%A4%A7%E5%8A%9B%E7%A5%9E%E6%9D%AF%23) `882.2K 🔥` `-22%`
1. [千万不要在网上买低价饮料](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%9C%A8%E7%BD%91%E4%B8%8A%E4%B9%B0%E4%BD%8E%E4%BB%B7%E9%A5%AE%E6%96%99%23) `823.1K 🔥` `-29%`
1. [不太理解光脚穿洞洞鞋的人](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%A4%AA%E7%90%86%E8%A7%A3%E5%85%89%E8%84%9A%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9A%84%E4%BA%BA%23) `822.0K 🔥` `-29%`
1. [八仙 口碑爆了](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%20%E5%8F%A3%E7%A2%91%E7%88%86%E4%BA%86%23) `652.1K 🔥` `-24%`
1. [A股行情 (A-share market)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%A1%8C%E6%83%85%23) `607.4K 🔥` `-53%`
1. [奔跑吧投票](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E6%8A%95%E7%A5%A8%23) `367.2K 🔥` `-32%`
1. [下届世界杯看球时差](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E7%9C%8B%E7%90%83%E6%97%B6%E5%B7%AE%23) `308.8K 🔥` `-32%`
1. [西班牙领奖时阿根廷全队背过身 (Argentina's entire team turned their backs when Spain accepted the award)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A2%86%E5%A5%96%E6%97%B6%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%85%A8%E9%98%9F%E8%83%8C%E8%BF%87%E8%BA%AB%23) `299.4K 🔥` `-63%`
1. [鹅鸭杀](https://s.weibo.com/weibo?q=%23%E9%B9%85%E9%B8%AD%E6%9D%80%23) `257.7K 🔥` `-39%`
1. [手机充满电会伤电池吗](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%85%85%E6%BB%A1%E7%94%B5%E4%BC%9A%E4%BC%A4%E7%94%B5%E6%B1%A0%E5%90%97%23) `203.4K 🔥` `-51%`

Updated at 2026-07-20 18:35:33

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
