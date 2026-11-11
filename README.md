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

1. [我国外贸的APEC底色越来越浓](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%A4%96%E8%B4%B8%E7%9A%84APEC%E5%BA%95%E8%89%B2%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%B5%93%23) `267.5K 🔥` `NEW`
1. [被砍断手指留学生遭朋友卷走数十万](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%A0%8D%E6%96%AD%E6%89%8B%E6%8C%87%E7%95%99%E5%AD%A6%E7%94%9F%E9%81%AD%E6%9C%8B%E5%8F%8B%E5%8D%B7%E8%B5%B0%E6%95%B0%E5%8D%81%E4%B8%87%23) `88.9K 🔥` `NEW`
1. [奔驰CEO称在中国车要大得惊人](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0CEO%E7%A7%B0%E5%9C%A8%E4%B8%AD%E5%9B%BD%E8%BD%A6%E8%A6%81%E5%A4%A7%E5%BE%97%E6%83%8A%E4%BA%BA%23) `85.7K 🔥` `NEW`
1. [台当局要求陆客删中国台湾字样被批](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%BD%93%E5%B1%80%E8%A6%81%E6%B1%82%E9%99%86%E5%AE%A2%E5%88%A0%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%E5%AD%97%E6%A0%B7%E8%A2%AB%E6%89%B9%23) `81.5K 🔥` `NEW`
1. [杨幂这一蹲真是神来之笔](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%BF%99%E4%B8%80%E8%B9%B2%E7%9C%9F%E6%98%AF%E7%A5%9E%E6%9D%A5%E4%B9%8B%E7%AC%94%23) `81.5K 🔥` `NEW`
1. [网红打pk猝死母亲不知其做危险直播](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%89%93pk%E7%8C%9D%E6%AD%BB%E6%AF%8D%E4%BA%B2%E4%B8%8D%E7%9F%A5%E5%85%B6%E5%81%9A%E5%8D%B1%E9%99%A9%E7%9B%B4%E6%92%AD%23) `81.4K 🔥` `NEW`
1. [我们给厉厉找了一个老公叫飞飞](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%BB%99%E5%8E%89%E5%8E%89%E6%89%BE%E4%BA%86%E4%B8%80%E4%B8%AA%E8%80%81%E5%85%AC%E5%8F%AB%E9%A3%9E%E9%A3%9E%23) `50.9K 🔥` `NEW`
1. [杭州18岁女孩检出18种HPV亚型阳性](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E18%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%A3%80%E5%87%BA18%E7%A7%8DHPV%E4%BA%9A%E5%9E%8B%E9%98%B3%E6%80%A7%23) `50.3K 🔥` `NEW`
1. [人一定要有止损意识](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%89%E6%AD%A2%E6%8D%9F%E6%84%8F%E8%AF%86%23) `50.3K 🔥` `NEW`
1. [红果公告称严打短剧多人撞脸](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%85%AC%E5%91%8A%E7%A7%B0%E4%B8%A5%E6%89%93%E7%9F%AD%E5%89%A7%E5%A4%9A%E4%BA%BA%E6%92%9E%E8%84%B8%23) `50.0K 🔥` `NEW`
1. [这是我的十好几年啊天猫](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E6%88%91%E7%9A%84%E5%8D%81%E5%A5%BD%E5%87%A0%E5%B9%B4%E5%95%8A%E5%A4%A9%E7%8C%AB%23) `50.0K 🔥` `NEW`
1. [白小纯拿包都没看王子璇](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%8B%BF%E5%8C%85%E9%83%BD%E6%B2%A1%E7%9C%8B%E7%8E%8B%E5%AD%90%E7%92%87%23) `50.0K 🔥` `NEW`
1. [北方冬天多冷看完就知道](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%96%B9%E5%86%AC%E5%A4%A9%E5%A4%9A%E5%86%B7%E7%9C%8B%E5%AE%8C%E5%B0%B1%E7%9F%A5%E9%81%93%23) `50.0K 🔥` `NEW`
1. [曝iPhone20Pro四曲面全玻璃](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone20Pro%E5%9B%9B%E6%9B%B2%E9%9D%A2%E5%85%A8%E7%8E%BB%E7%92%83%23) `50.0K 🔥` `NEW`
1. [猫杀人概率几乎为零但我先走了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E6%9D%80%E4%BA%BA%E6%A6%82%E7%8E%87%E5%87%A0%E4%B9%8E%E4%B8%BA%E9%9B%B6%E4%BD%86%E6%88%91%E5%85%88%E8%B5%B0%E4%BA%86%23) `50.0K 🔥` `NEW`
1. [中国共产党是孙中山革命真正继承者](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%A7%E5%85%9A%E6%98%AF%E5%AD%99%E4%B8%AD%E5%B1%B1%E9%9D%A9%E5%91%BD%E7%9C%9F%E6%AD%A3%E7%BB%A7%E6%89%BF%E8%80%85%23) `50.0K 🔥` `NEW`
1. [学医的妈认为睡太多导致太瘦](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E5%8C%BB%E7%9A%84%E5%A6%88%E8%AE%A4%E4%B8%BA%E7%9D%A1%E5%A4%AA%E5%A4%9A%E5%AF%BC%E8%87%B4%E5%A4%AA%E7%98%A6%23) `49.9K 🔥` `NEW`
1. [蔡依林翻唱青春修炼手册再度爆红](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E7%BF%BB%E5%94%B1%E9%9D%92%E6%98%A5%E4%BF%AE%E7%82%BC%E6%89%8B%E5%86%8C%E5%86%8D%E5%BA%A6%E7%88%86%E7%BA%A2%23) `49.9K 🔥` `NEW`
1. [朋友之间越不说话越没话说](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E4%B9%8B%E9%97%B4%E8%B6%8A%E4%B8%8D%E8%AF%B4%E8%AF%9D%E8%B6%8A%E6%B2%A1%E8%AF%9D%E8%AF%B4%23) `49.9K 🔥` `NEW`
1. [我生完孩子爸妈才过上好日子](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%94%9F%E5%AE%8C%E5%AD%A9%E5%AD%90%E7%88%B8%E5%A6%88%E6%89%8D%E8%BF%87%E4%B8%8A%E5%A5%BD%E6%97%A5%E5%AD%90%23) `49.9K 🔥` `NEW`
1. [密档豆瓣6.7分](https://s.weibo.com/weibo?q=%23%E5%AF%86%E6%A1%A3%E8%B1%86%E7%93%A36.7%E5%88%86%23) `49.9K 🔥` `NEW`
1. [AG菲菲说有想法引进Elk](https://s.weibo.com/weibo?q=%23AG%E8%8F%B2%E8%8F%B2%E8%AF%B4%E6%9C%89%E6%83%B3%E6%B3%95%E5%BC%95%E8%BF%9BElk%23) `49.9K 🔥` `NEW`
1. [u20亚洲杯](https://s.weibo.com/weibo?q=%23u20%E4%BA%9A%E6%B4%B2%E6%9D%AF%23) `49.9K 🔥` `NEW`
1. [四川改名登记卡错成这样](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E6%94%B9%E5%90%8D%E7%99%BB%E8%AE%B0%E5%8D%A1%E9%94%99%E6%88%90%E8%BF%99%E6%A0%B7%23) `49.9K 🔥` `NEW`
1. [康师傅20元泡面不能开水直接泡](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%B8%88%E5%82%8520%E5%85%83%E6%B3%A1%E9%9D%A2%E4%B8%8D%E8%83%BD%E5%BC%80%E6%B0%B4%E7%9B%B4%E6%8E%A5%E6%B3%A1%23) `49.9K 🔥` `NEW`
1. [老一辈的自制力特别差](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E7%9A%84%E8%87%AA%E5%88%B6%E5%8A%9B%E7%89%B9%E5%88%AB%E5%B7%AE%23) `49.9K 🔥` `NEW`
1. [特斯拉高架斗车一司机涉刑事犯罪](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E9%AB%98%E6%9E%B6%E6%96%97%E8%BD%A6%E4%B8%80%E5%8F%B8%E6%9C%BA%E6%B6%89%E5%88%91%E4%BA%8B%E7%8A%AF%E7%BD%AA%23) `49.9K 🔥` `NEW`
1. [山姆399元充绒量300克羽绒服断货](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86399%E5%85%83%E5%85%85%E7%BB%92%E9%87%8F300%E5%85%8B%E7%BE%BD%E7%BB%92%E6%9C%8D%E6%96%AD%E8%B4%A7%23) `350.0K 🔥` `+34%`
1. [正午阳光这是什么意思](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E8%BF%99%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D%23) `470.7K 🔥` `-62%`
1. [为了演戏雪迎可以放弃什么](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BA%86%E6%BC%94%E6%88%8F%E9%9B%AA%E8%BF%8E%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%BC%83%E4%BB%80%E4%B9%88%23) `87.0K 🔥` `-83%`
1. [赵丽颖起诉红果短剧](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%B5%B7%E8%AF%89%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%23) `86.4K 🔥` `-65%`
1. [霍启山娜然 结婚](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%B1%B1%E5%A8%9C%E7%84%B6%20%E7%BB%93%E5%A9%9A%23) `86.2K 🔥` `-65%`
1. [霍启刚郭晶晶11月11日办的世纪婚礼](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E9%83%AD%E6%99%B6%E6%99%B611%E6%9C%8811%E6%97%A5%E5%8A%9E%E7%9A%84%E4%B8%96%E7%BA%AA%E5%A9%9A%E7%A4%BC%23) `86.1K 🔥` `-65%`
1. [尚公主播出这样的成绩真的好可惜](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E6%92%AD%E5%87%BA%E8%BF%99%E6%A0%B7%E7%9A%84%E6%88%90%E7%BB%A9%E7%9C%9F%E7%9A%84%E5%A5%BD%E5%8F%AF%E6%83%9C%23) `81.4K 🔥` `-49%`
1. [中国留学生在澳遇袭两根手指被砍断](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%9C%A8%E6%BE%B3%E9%81%87%E8%A2%AD%E4%B8%A4%E6%A0%B9%E6%89%8B%E6%8C%87%E8%A2%AB%E7%A0%8D%E6%96%AD%23) `70.3K 🔥` `-70%`
1. [郭德纲西河门收徒仪式](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%E8%A5%BF%E6%B2%B3%E9%97%A8%E6%94%B6%E5%BE%92%E4%BB%AA%E5%BC%8F%23) `56.6K 🔥` `-49%`
1. [娜然哪怕在何穗旁边也完全不输](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E7%84%B6%E5%93%AA%E6%80%95%E5%9C%A8%E4%BD%95%E7%A9%97%E6%97%81%E8%BE%B9%E4%B9%9F%E5%AE%8C%E5%85%A8%E4%B8%8D%E8%BE%93%23) `52.0K 🔥` `-78%`
1. [女子西西弗买200元书坐咖啡区被拒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A5%BF%E8%A5%BF%E5%BC%97%E4%B9%B0200%E5%85%83%E4%B9%A6%E5%9D%90%E5%92%96%E5%95%A1%E5%8C%BA%E8%A2%AB%E6%8B%92%23) `52.0K 🔥` `-55%`
1. [金鸡奖两幕对比太扎心](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E5%A5%96%E4%B8%A4%E5%B9%95%E5%AF%B9%E6%AF%94%E5%A4%AA%E6%89%8E%E5%BF%83%23) `51.5K 🔥` `-79%`
1. [许飞张萌聊天记录](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%BC%A0%E8%90%8C%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `51.3K 🔥` `-78%`
1. [中年人的显老行为太形象了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B9%B4%E4%BA%BA%E7%9A%84%E6%98%BE%E8%80%81%E8%A1%8C%E4%B8%BA%E5%A4%AA%E5%BD%A2%E8%B1%A1%E4%BA%86%23) `50.8K 🔥` `-78%`
1. [唐嫣刘诗诗同框合照](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%88%98%E8%AF%97%E8%AF%97%E5%90%8C%E6%A1%86%E5%90%88%E7%85%A7%23) `50.0K 🔥` `-79%`
1. [俄美乌三方会谈成果公布](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BE%8E%E4%B9%8C%E4%B8%89%E6%96%B9%E4%BC%9A%E8%B0%88%E6%88%90%E6%9E%9C%E5%85%AC%E5%B8%83%23) `50.0K 🔥` `-67%`
1. [3岁女孩练芭蕾2年蜕变惊人](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%BB%83%E8%8A%AD%E8%95%BE2%E5%B9%B4%E8%9C%95%E5%8F%98%E6%83%8A%E4%BA%BA%23) `49.9K 🔥` `-80%`
1. [王楚钦打法被研究](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%93%E6%B3%95%E8%A2%AB%E7%A0%94%E7%A9%B6%23) `49.9K 🔥` `-80%`
1. [白敬亭井柏然宋威龙王嘉尔张凌赫同框](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AE%8B%E5%A8%81%E9%BE%99%E7%8E%8B%E5%98%89%E5%B0%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%8C%E6%A1%86%23) `49.9K 🔥` `-61%`
1. [大冰对抗紧张的方法太牛了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E5%AF%B9%E6%8A%97%E7%B4%A7%E5%BC%A0%E7%9A%84%E6%96%B9%E6%B3%95%E5%A4%AA%E7%89%9B%E4%BA%86%23) `49.9K 🔥` `-63%`
1. [和对象反复分手复合像死循环](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%AF%B9%E8%B1%A1%E5%8F%8D%E5%A4%8D%E5%88%86%E6%89%8B%E5%A4%8D%E5%90%88%E5%83%8F%E6%AD%BB%E5%BE%AA%E7%8E%AF%23) `49.9K 🔥` `-57%`
1. [iPhone20Pro再曝](https://s.weibo.com/weibo?q=%23iPhone20Pro%E5%86%8D%E6%9B%9D%23) `49.9K 🔥` `-75%`
1. [W盛典群像合照](https://s.weibo.com/weibo?q=%23W%E7%9B%9B%E5%85%B8%E7%BE%A4%E5%83%8F%E5%90%88%E7%85%A7%23) `49.9K 🔥` `-76%`

Updated at 2026-11-12 06:38:28

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
