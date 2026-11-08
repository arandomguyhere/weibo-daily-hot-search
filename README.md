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

1. [付鹏称AI漫剧全部亏损](https://s.weibo.com/weibo?q=%23%E4%BB%98%E9%B9%8F%E7%A7%B0AI%E6%BC%AB%E5%89%A7%E5%85%A8%E9%83%A8%E4%BA%8F%E6%8D%9F%23) `114.3K 🔥` `NEW`
1. [徐艺洋这身材穿个麻袋都好看](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E8%BF%99%E8%BA%AB%E6%9D%90%E7%A9%BF%E4%B8%AA%E9%BA%BB%E8%A2%8B%E9%83%BD%E5%A5%BD%E7%9C%8B%23) `81.7K 🔥` `NEW`
1. [曼联4比4阿斯顿维拉](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%944%E6%AF%944%E9%98%BF%E6%96%AF%E9%A1%BF%E7%BB%B4%E6%8B%89%23) `55.1K 🔥` `NEW`
1. [金子涵被骗到陌生城市偷走护照](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E8%A2%AB%E9%AA%97%E5%88%B0%E9%99%8C%E7%94%9F%E5%9F%8E%E5%B8%82%E5%81%B7%E8%B5%B0%E6%8A%A4%E7%85%A7%23) `45.4K 🔥` `NEW`
1. [代高政要和闫桉参加后会友期](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%AB%98%E6%94%BF%E8%A6%81%E5%92%8C%E9%97%AB%E6%A1%89%E5%8F%82%E5%8A%A0%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23) `43.3K 🔥` `NEW`
1. [二手交易网站惊现成都夺冠冰箱贴](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%89%8B%E4%BA%A4%E6%98%93%E7%BD%91%E7%AB%99%E6%83%8A%E7%8E%B0%E6%88%90%E9%83%BD%E5%A4%BA%E5%86%A0%E5%86%B0%E7%AE%B1%E8%B4%B4%23) `40.5K 🔥` `NEW`
1. [外貌是成本极低收益极高的变量](https://s.weibo.com/weibo?q=%23%E5%A4%96%E8%B2%8C%E6%98%AF%E6%88%90%E6%9C%AC%E6%9E%81%E4%BD%8E%E6%94%B6%E7%9B%8A%E6%9E%81%E9%AB%98%E7%9A%84%E5%8F%98%E9%87%8F%23) `37.1K 🔥` `NEW`
1. [阿尔卡拉斯首夺巴黎赛冠军](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E5%8D%A1%E6%8B%89%E6%96%AF%E9%A6%96%E5%A4%BA%E5%B7%B4%E9%BB%8E%E8%B5%9B%E5%86%A0%E5%86%9B%23) `37.1K 🔥` `NEW`
1. [马斯克称软银涡轮机订单违约](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E8%BD%AF%E9%93%B6%E6%B6%A1%E8%BD%AE%E6%9C%BA%E8%AE%A2%E5%8D%95%E8%BF%9D%E7%BA%A6%23) `35.3K 🔥` `NEW`
1. [山姆大牌低价催会员费](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%A4%A7%E7%89%8C%E4%BD%8E%E4%BB%B7%E5%82%AC%E4%BC%9A%E5%91%98%E8%B4%B9%23) `30.5K 🔥` `NEW`
1. [现在的艾滋可不只是通过性传播了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E8%89%BE%E6%BB%8B%E5%8F%AF%E4%B8%8D%E5%8F%AA%E6%98%AF%E9%80%9A%E8%BF%87%E6%80%A7%E4%BC%A0%E6%92%AD%E4%BA%86%23) `30.4K 🔥` `NEW`
1. [早田希娜法兰克福站冠军](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E6%B3%95%E5%85%B0%E5%85%8B%E7%A6%8F%E7%AB%99%E5%86%A0%E5%86%9B%23) `30.2K 🔥` `NEW`
1. [以色列政坛迎来历史性一刻](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%94%BF%E5%9D%9B%E8%BF%8E%E6%9D%A5%E5%8E%86%E5%8F%B2%E6%80%A7%E4%B8%80%E5%88%BB%23) `29.9K 🔥` `NEW`
1. [九尾问Gemini刷什么下播](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E9%97%AEGemini%E5%88%B7%E4%BB%80%E4%B9%88%E4%B8%8B%E6%92%AD%23) `29.8K 🔥` `NEW`
1. [面包蟹三个孔里拉出白色条状物](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E5%8C%85%E8%9F%B9%E4%B8%89%E4%B8%AA%E5%AD%94%E9%87%8C%E6%8B%89%E5%87%BA%E7%99%BD%E8%89%B2%E6%9D%A1%E7%8A%B6%E7%89%A9%23) `29.5K 🔥` `NEW`
1. [后会友期导演拍变形记出身的](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E5%AF%BC%E6%BC%94%E6%8B%8D%E5%8F%98%E5%BD%A2%E8%AE%B0%E5%87%BA%E8%BA%AB%E7%9A%84%23) `29.3K 🔥` `NEW`
1. [上车前陌生人下车后想娶她](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E8%BD%A6%E5%89%8D%E9%99%8C%E7%94%9F%E4%BA%BA%E4%B8%8B%E8%BD%A6%E5%90%8E%E6%83%B3%E5%A8%B6%E5%A5%B9%23) `29.3K 🔥` `NEW`
1. [太原高层火灾逃生者讲述过程](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E9%AB%98%E5%B1%82%E7%81%AB%E7%81%BE%E9%80%83%E7%94%9F%E8%80%85%E8%AE%B2%E8%BF%B0%E8%BF%87%E7%A8%8B%23) `28.9K 🔥` `NEW`
1. [山姆加拿大鹅不支持无理由退货](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%8A%A0%E6%8B%BF%E5%A4%A7%E9%B9%85%E4%B8%8D%E6%94%AF%E6%8C%81%E6%97%A0%E7%90%86%E7%94%B1%E9%80%80%E8%B4%A7%23) `28.8K 🔥` `NEW`
1. [芒果找神人这方面是有点手段的](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%89%BE%E7%A5%9E%E4%BA%BA%E8%BF%99%E6%96%B9%E9%9D%A2%E6%98%AF%E6%9C%89%E7%82%B9%E6%89%8B%E6%AE%B5%E7%9A%84%23) `28.8K 🔥` `NEW`
1. [CSL中超联赛回应大连英博夺冠](https://s.weibo.com/weibo?q=%23CSL%E4%B8%AD%E8%B6%85%E8%81%94%E8%B5%9B%E5%9B%9E%E5%BA%94%E5%A4%A7%E8%BF%9E%E8%8B%B1%E5%8D%9A%E5%A4%BA%E5%86%A0%23) `28.8K 🔥` `NEW`
1. [田曦薇代高政合照](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E4%BB%A3%E9%AB%98%E6%94%BF%E5%90%88%E7%85%A7%23) `28.8K 🔥` `NEW`
1. [疑似秦始皇儿子遗骸遭肢解](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%84%BF%E5%AD%90%E9%81%97%E9%AA%B8%E9%81%AD%E8%82%A2%E8%A7%A3%23) `246.6K 🔥` `-81%`
1. [马斯克突爆孙正义猛料](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%AA%81%E7%88%86%E5%AD%99%E6%AD%A3%E4%B9%89%E7%8C%9B%E6%96%99%23) `188.6K 🔥` `-87%`
1. [中国消费图景向新向优](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B6%88%E8%B4%B9%E5%9B%BE%E6%99%AF%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%23) `124.2K 🔥` `-88%`
1. [今晚8点上淘宝用大额券巅峰秒杀](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%99%9A8%E7%82%B9%E4%B8%8A%E6%B7%98%E5%AE%9D%E7%94%A8%E5%A4%A7%E9%A2%9D%E5%88%B8%E5%B7%85%E5%B3%B0%E7%A7%92%E6%9D%80%23) `115.2K 🔥` `-88%`
1. [许飞 我作茧自缚](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E6%88%91%E4%BD%9C%E8%8C%A7%E8%87%AA%E7%BC%9A%23) `87.5K 🔥` `-80%`
1. [金子涵被骗](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E8%A2%AB%E9%AA%97%23) `84.3K 🔥` `-79%`
1. [发生日快乐才知老同学已离世](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90%E6%89%8D%E7%9F%A5%E8%80%81%E5%90%8C%E5%AD%A6%E5%B7%B2%E7%A6%BB%E4%B8%96%23) `62.9K 🔥` `-91%`
1. [太原火灾送医院救治38人](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%E9%80%81%E5%8C%BB%E9%99%A2%E6%95%91%E6%B2%BB38%E4%BA%BA%23) `58.0K 🔥` `-59%`
1. [蔡少芬一家五口在香港住83平的房子](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%B0%91%E8%8A%AC%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E5%9C%A8%E9%A6%99%E6%B8%AF%E4%BD%8F83%E5%B9%B3%E7%9A%84%E6%88%BF%E5%AD%90%23) `55.0K 🔥` `-86%`
1. [陈浩民家保姆工资每月6000多](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%A9%E6%B0%91%E5%AE%B6%E4%BF%9D%E5%A7%86%E5%B7%A5%E8%B5%84%E6%AF%8F%E6%9C%886000%E5%A4%9A%23) `54.1K 🔥` `-85%`
1. [女子查到男友父亲有案底后崩溃](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9F%A5%E5%88%B0%E7%94%B7%E5%8F%8B%E7%88%B6%E4%BA%B2%E6%9C%89%E6%A1%88%E5%BA%95%E5%90%8E%E5%B4%A9%E6%BA%83%23) `54.0K 🔥` `-86%`
1. [文吉儿微信名](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E5%BE%AE%E4%BF%A1%E5%90%8D%23) `51.7K 🔥` `-85%`
1. [白小纯叫王子璇姐姐完整过程](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%8F%AB%E7%8E%8B%E5%AD%90%E7%92%87%E5%A7%90%E5%A7%90%E5%AE%8C%E6%95%B4%E8%BF%87%E7%A8%8B%23) `45.3K 🔥` `-71%`
1. [小糯米才12岁](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B3%AF%E7%B1%B3%E6%89%8D12%E5%B2%81%23) `45.2K 🔥` `-87%`
1. [大连主教练被泼啤酒滑倒光速变脸](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E4%B8%BB%E6%95%99%E7%BB%83%E8%A2%AB%E6%B3%BC%E5%95%A4%E9%85%92%E6%BB%91%E5%80%92%E5%85%89%E9%80%9F%E5%8F%98%E8%84%B8%23) `37.1K 🔥` `-91%`
1. [许飞 厉娜](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E5%8E%89%E5%A8%9C%23) `37.1K 🔥` `-96%`
1. [无锡女厕惊现站立式小便厕位](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%E5%A5%B3%E5%8E%95%E6%83%8A%E7%8E%B0%E7%AB%99%E7%AB%8B%E5%BC%8F%E5%B0%8F%E4%BE%BF%E5%8E%95%E4%BD%8D%23) `36.6K 🔥` `-94%`
1. [后会友期黄焖鸡门口没监控](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E9%BB%84%E7%84%96%E9%B8%A1%E9%97%A8%E5%8F%A3%E6%B2%A1%E7%9B%91%E6%8E%A7%23) `36.5K 🔥` `-75%`
1. [中国人心目中天庭的样子火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%BF%83%E7%9B%AE%E4%B8%AD%E5%A4%A9%E5%BA%AD%E7%9A%84%E6%A0%B7%E5%AD%90%E7%81%AB%E4%BA%86%23) `32.0K 🔥` `-81%`
1. [芒果综艺播放量有点吓人](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E7%BB%BC%E8%89%BA%E6%92%AD%E6%94%BE%E9%87%8F%E6%9C%89%E7%82%B9%E5%90%93%E4%BA%BA%23) `31.7K 🔥` `-86%`
1. [大连景区对山东人免费](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E6%99%AF%E5%8C%BA%E5%AF%B9%E5%B1%B1%E4%B8%9C%E4%BA%BA%E5%85%8D%E8%B4%B9%23) `31.6K 🔥` `-91%`
1. [颜安退出密逃团综录制](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%AE%89%E9%80%80%E5%87%BA%E5%AF%86%E9%80%83%E5%9B%A2%E7%BB%BC%E5%BD%95%E5%88%B6%23) `28.9K 🔥` `-85%`
1. [疑似文吉儿社媒账号注销](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%96%87%E5%90%89%E5%84%BF%E7%A4%BE%E5%AA%92%E8%B4%A6%E5%8F%B7%E6%B3%A8%E9%94%80%23) `28.8K 🔥` `-85%`
1. [白小纯对青稚早已松口](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%AF%B9%E9%9D%92%E7%A8%9A%E6%97%A9%E5%B7%B2%E6%9D%BE%E5%8F%A3%23) `28.8K 🔥` `-89%`
1. [成都球员痛哭](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E7%90%83%E5%91%98%E7%97%9B%E5%93%AD%23) `28.8K 🔥` `-89%`
1. [曝天霸粉丝群曾蛐蛐青稚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A4%A9%E9%9C%B8%E7%B2%89%E4%B8%9D%E7%BE%A4%E6%9B%BE%E8%9B%90%E8%9B%90%E9%9D%92%E7%A8%9A%23) `28.8K 🔥` `-88%`
1. [九尾说Gemini墨迹](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E8%AF%B4Gemini%E5%A2%A8%E8%BF%B9%23) `28.8K 🔥` `-85%`
1. [最尊重钱的平台诞生了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%B0%8A%E9%87%8D%E9%92%B1%E7%9A%84%E5%B9%B3%E5%8F%B0%E8%AF%9E%E7%94%9F%E4%BA%86%23) `28.8K 🔥` `-81%`
1. [张萌知道马天宇喜欢小孩也是拼了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E7%9F%A5%E9%81%93%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%96%9C%E6%AC%A2%E5%B0%8F%E5%AD%A9%E4%B9%9F%E6%98%AF%E6%8B%BC%E4%BA%86%23) `28.8K 🔥` `-87%`

Updated at 2026-11-09 04:36:07

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
