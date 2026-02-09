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

1. [超级碗 (super bowl)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%BA%A7%E7%A2%97%23) `1.1M 🔥` `NEW`
1. [中国19岁速滑小将齐天大圣造型](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD19%E5%B2%81%E9%80%9F%E6%BB%91%E5%B0%8F%E5%B0%86%E9%BD%90%E5%A4%A9%E5%A4%A7%E5%9C%A3%E9%80%A0%E5%9E%8B%23) `780.4K 🔥` `NEW`
1. [坐着火车去卖菜是啥体验](https://s.weibo.com/weibo?q=%23%E5%9D%90%E7%9D%80%E7%81%AB%E8%BD%A6%E5%8E%BB%E5%8D%96%E8%8F%9C%E6%98%AF%E5%95%A5%E4%BD%93%E9%AA%8C%23) `595.6K 🔥` `NEW`
1. [日本众议院选举结果](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BC%97%E8%AE%AE%E9%99%A2%E9%80%89%E4%B8%BE%E7%BB%93%E6%9E%9C%23) `277.8K 🔥` `NEW`
1. [老外来中国过年的订单爆了](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E6%9D%A5%E4%B8%AD%E5%9B%BD%E8%BF%87%E5%B9%B4%E7%9A%84%E8%AE%A2%E5%8D%95%E7%88%86%E4%BA%86%23) `251.7K 🔥` `NEW`
1. [成何体统放饭看爽了笑疯了](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E6%94%BE%E9%A5%AD%E7%9C%8B%E7%88%BD%E4%BA%86%E7%AC%91%E7%96%AF%E4%BA%86%23) `206.2K 🔥` `NEW`
1. [谷爱凌冲击首金](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%B2%E5%87%BB%E9%A6%96%E9%87%91%23) `185.4K 🔥` `NEW`
1. [黎智英被判20年](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E6%99%BA%E8%8B%B1%E8%A2%AB%E5%88%A420%E5%B9%B4%23) `170.8K 🔥` `NEW`
1. [龙麦娇兰](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%BA%A6%E5%A8%87%E5%85%B0%23) `152.1K 🔥` `NEW`
1. [孟子义微博之夜带走了四盒饼干](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%E5%B8%A6%E8%B5%B0%E4%BA%86%E5%9B%9B%E7%9B%92%E9%A5%BC%E5%B9%B2%23) `150.8K 🔥` `NEW`
1. [爱泼斯坦案秘密照片曝光 (Secret photos from Epstein case revealed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E7%A7%98%E5%AF%86%E7%85%A7%E7%89%87%E6%9B%9D%E5%85%89%23) `148.7K 🔥` `NEW`
1. [白鹿女装牛仔裤](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%B3%E8%A3%85%E7%89%9B%E4%BB%94%E8%A3%A4%23) `147.0K 🔥` `NEW`
1. [高市早苗赌赢日本更危险了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%B5%8C%E8%B5%A2%E6%97%A5%E6%9C%AC%E6%9B%B4%E5%8D%B1%E9%99%A9%E4%BA%86%23) `145.7K 🔥` `NEW`
1. [蔡徐坤直播放情人](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E7%9B%B4%E6%92%AD%E6%94%BE%E6%83%85%E4%BA%BA%23) `137.6K 🔥` `NEW`
1. [开心消消乐 甄嬛](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%BF%83%E6%B6%88%E6%B6%88%E4%B9%90%20%E7%94%84%E5%AC%9B%23) `137.1K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `136.8K 🔥` `NEW`
1. [白鹿接下去的最大考验就是莫离了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8E%A5%E4%B8%8B%E5%8E%BB%E7%9A%84%E6%9C%80%E5%A4%A7%E8%80%83%E9%AA%8C%E5%B0%B1%E6%98%AF%E8%8E%AB%E7%A6%BB%E4%BA%86%23) `129.8K 🔥` `NEW`
1. [苹果最便宜新机要来了](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%9C%80%E4%BE%BF%E5%AE%9C%E6%96%B0%E6%9C%BA%E8%A6%81%E6%9D%A5%E4%BA%86%23) `121.7K 🔥` `NEW`
1. [BLACKPINK预告照](https://s.weibo.com/weibo?q=%23BLACKPINK%E9%A2%84%E5%91%8A%E7%85%A7%23) `113.8K 🔥` `NEW`
1. [王楚钦称知道自己被诟病被比较了很久](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%A7%B0%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E8%A2%AB%E8%AF%9F%E7%97%85%E8%A2%AB%E6%AF%94%E8%BE%83%E4%BA%86%E5%BE%88%E4%B9%85%23) `110.6K 🔥` `NEW`
1. [女子注射卧蚕过敏肿胀又溃烂 (Woman's allergic reaction to silkworm injection caused swelling and ulceration)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B3%A8%E5%B0%84%E5%8D%A7%E8%9A%95%E8%BF%87%E6%95%8F%E8%82%BF%E8%83%80%E5%8F%88%E6%BA%83%E7%83%82%23) `108.4K 🔥` `NEW`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `108.3K 🔥` `NEW`
1. [警方通报男子祭祖误触捕猎装置身亡](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E7%A5%AD%E7%A5%96%E8%AF%AF%E8%A7%A6%E6%8D%95%E7%8C%8E%E8%A3%85%E7%BD%AE%E8%BA%AB%E4%BA%A1%23) `100.1K 🔥` `NEW`
1. [爱的成本实在是太高了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%9A%84%E6%88%90%E6%9C%AC%E5%AE%9E%E5%9C%A8%E6%98%AF%E5%A4%AA%E9%AB%98%E4%BA%86%23) `100.1K 🔥` `NEW`
1. [王楚钦把张本智和打到直跺脚](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%8A%8A%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E6%89%93%E5%88%B0%E7%9B%B4%E8%B7%BA%E8%84%9A%23) `99.2K 🔥` `NEW`
1. [申聪结婚](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%81%AA%E7%BB%93%E5%A9%9A%23) `97.3K 🔥` `NEW`
1. [王楚钦赛前紧张到失眠手抖](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B5%9B%E5%89%8D%E7%B4%A7%E5%BC%A0%E5%88%B0%E5%A4%B1%E7%9C%A0%E6%89%8B%E6%8A%96%23) `93.3K 🔥` `NEW`
1. [金价巨震下买黄金的人怎么样了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%B7%A8%E9%9C%87%E4%B8%8B%E4%B9%B0%E9%BB%84%E9%87%91%E7%9A%84%E4%BA%BA%E6%80%8E%E4%B9%88%E6%A0%B7%E4%BA%86%23) `91.4K 🔥` `NEW`
1. [王皓赛后为王楚钦耐心擦眼泪](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E8%B5%9B%E5%90%8E%E4%B8%BA%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%80%90%E5%BF%83%E6%93%A6%E7%9C%BC%E6%B3%AA%23) `87.9K 🔥` `NEW`
1. [姚安娜从小网剧小配角做起](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%AE%89%E5%A8%9C%E4%BB%8E%E5%B0%8F%E7%BD%91%E5%89%A7%E5%B0%8F%E9%85%8D%E8%A7%92%E5%81%9A%E8%B5%B7%23) `86.4K 🔥` `NEW`
1. [视频车路遇京A高速恶意别车 (Video of a car encountering a malicious driver on Beijing Expressway A)](https://s.weibo.com/weibo?q=%23%E8%A7%86%E9%A2%91%E8%BD%A6%E8%B7%AF%E9%81%87%E4%BA%ACA%E9%AB%98%E9%80%9F%E6%81%B6%E6%84%8F%E5%88%AB%E8%BD%A6%23) `81.0K 🔥` `NEW`
1. [生命树第22集](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E7%AC%AC22%E9%9B%86%23) `77.1K 🔥` `NEW`
1. [喝牛奶补钙的真相](https://s.weibo.com/weibo?q=%23%E5%96%9D%E7%89%9B%E5%A5%B6%E8%A1%A5%E9%92%99%E7%9A%84%E7%9C%9F%E7%9B%B8%23) `76.1K 🔥` `NEW`
1. [A股三大指数集体大幅高开](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%89%E5%A4%A7%E6%8C%87%E6%95%B0%E9%9B%86%E4%BD%93%E5%A4%A7%E5%B9%85%E9%AB%98%E5%BC%80%23) `75.7K 🔥` `NEW`
1. [惊蛰无声](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `75.1K 🔥` `NEW`
1. [这届年轻人买黄金心态就是稳](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%8A%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B9%B0%E9%BB%84%E9%87%91%E5%BF%83%E6%80%81%E5%B0%B1%E6%98%AF%E7%A8%B3%23) `71.3K 🔥` `NEW`
1. [哪家灵动岛最好用](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%AE%B6%E7%81%B5%E5%8A%A8%E5%B2%9B%E6%9C%80%E5%A5%BD%E7%94%A8%23) `71.1K 🔥` `NEW`
1. [爱泼斯坦曾形容科技巨头晚宴很疯狂](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%9B%BE%E5%BD%A2%E5%AE%B9%E7%A7%91%E6%8A%80%E5%B7%A8%E5%A4%B4%E6%99%9A%E5%AE%B4%E5%BE%88%E7%96%AF%E7%8B%82%23) `67.8K 🔥` `NEW`
1. [人生从三十岁开始也没什么问题](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E4%BB%8E%E4%B8%89%E5%8D%81%E5%B2%81%E5%BC%80%E5%A7%8B%E4%B9%9F%E6%B2%A1%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98%23) `67.5K 🔥` `NEW`
1. [张晚意林允希林娜依高为AUDI开麦 (Zhang Wanyi, Lin Yunxi, Lin Na and Yigao opened the mic for AUDI)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E6%9E%97%E5%85%81%E5%B8%8C%E6%9E%97%E5%A8%9C%E4%BE%9D%E9%AB%98%E4%B8%BAAUDI%E5%BC%80%E9%BA%A6%23) `287.3K 🔥` `+30%`
1. [网友称买到无座票在静音车厢被劝离](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%A7%B0%E4%B9%B0%E5%88%B0%E6%97%A0%E5%BA%A7%E7%A5%A8%E5%9C%A8%E9%9D%99%E9%9F%B3%E8%BD%A6%E5%8E%A2%E8%A2%AB%E5%8A%9D%E7%A6%BB%23) `165.2K 🔥` `+210%`
1. [谁给了窗口人员收1614万的勇气 (Who gave the window staff the courage to collect 16.14 million?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E4%BA%86%E7%AA%97%E5%8F%A3%E4%BA%BA%E5%91%98%E6%94%B61614%E4%B8%87%E7%9A%84%E5%8B%87%E6%B0%94%23) `153.8K 🔥`
1. [海清因儿子生病想过捐肾 (Haiqing thought about donating a kidney because her son was ill.)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B8%85%E5%9B%A0%E5%84%BF%E5%AD%90%E7%94%9F%E7%97%85%E6%83%B3%E8%BF%87%E6%8D%90%E8%82%BE%23) `144.3K 🔥`
1. [亲哥去世员工请假奔丧被辞 (An employee who took time off to attend the funeral was fired after his brother died.)](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%93%A5%E5%8E%BB%E4%B8%96%E5%91%98%E5%B7%A5%E8%AF%B7%E5%81%87%E5%A5%94%E4%B8%A7%E8%A2%AB%E8%BE%9E%23) `141.1K 🔥`
1. [医生提醒5个体检项目千万别不做](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%925%E4%B8%AA%E4%BD%93%E6%A3%80%E9%A1%B9%E7%9B%AE%E5%8D%83%E4%B8%87%E5%88%AB%E4%B8%8D%E5%81%9A%23) `113.5K 🔥`
1. [中国军网点名张本智和 (China Military Net names Zhang Benzhihe)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E7%BD%91%E7%82%B9%E5%90%8D%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `236.1K 🔥` `-79%`
1. [12306已发售春运期间车票超1.5亿张 (12306 Over 150 million tickets have been sold during the Spring Festival travel season)](https://s.weibo.com/weibo?q=%2312306%E5%B7%B2%E5%8F%91%E5%94%AE%E6%98%A5%E8%BF%90%E6%9C%9F%E9%97%B4%E8%BD%A6%E7%A5%A8%E8%B6%851.5%E4%BA%BF%E5%BC%A0%23) `140.7K 🔥` `-78%`
1. [21岁国际名模在新家猝然离世 (21-year-old international supermodel passed away suddenly in her new home)](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%9B%BD%E9%99%85%E5%90%8D%E6%A8%A1%E5%9C%A8%E6%96%B0%E5%AE%B6%E7%8C%9D%E7%84%B6%E7%A6%BB%E4%B8%96%23) `80.6K 🔥` `-90%`
1. [情商低的8个典型表现](https://s.weibo.com/weibo?q=%23%E6%83%85%E5%95%86%E4%BD%8E%E7%9A%848%E4%B8%AA%E5%85%B8%E5%9E%8B%E8%A1%A8%E7%8E%B0%23) `77.1K 🔥` `-24%`
1. [爱泼斯坦案无码版本不允许拍摄 (Uncensored version of Epstein case not allowed to be filmed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E6%97%A0%E7%A0%81%E7%89%88%E6%9C%AC%E4%B8%8D%E5%85%81%E8%AE%B8%E6%8B%8D%E6%91%84%23) `77.1K 🔥` `-50%`
1. [苏翊鸣谷爱凌对失利的同一种回答 (Su Yi Minggu Ailing’s same answer to failure)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E8%B0%B7%E7%88%B1%E5%87%8C%E5%AF%B9%E5%A4%B1%E5%88%A9%E7%9A%84%E5%90%8C%E4%B8%80%E7%A7%8D%E5%9B%9E%E7%AD%94%23) `75.3K 🔥` `-73%`
1. [夫妇凌晨3点返乡家中灯火通明](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%87%E5%87%8C%E6%99%A83%E7%82%B9%E8%BF%94%E4%B9%A1%E5%AE%B6%E4%B8%AD%E7%81%AF%E7%81%AB%E9%80%9A%E6%98%8E%23) `66.3K 🔥` `-42%`

Updated at 2026-02-09 11:16:37

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
