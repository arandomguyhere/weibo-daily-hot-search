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

1. [FIFA被呼吁调查阿尔及利亚奥地利比赛 (FIFA called on to investigate Algeria-Austria match)](https://s.weibo.com/weibo?q=%23FIFA%E8%A2%AB%E5%91%BC%E5%90%81%E8%B0%83%E6%9F%A5%E9%98%BF%E5%B0%94%E5%8F%8A%E5%88%A9%E4%BA%9A%E5%A5%A5%E5%9C%B0%E5%88%A9%E6%AF%94%E8%B5%9B%23) `1.1M 🔥` `NEW`
1. [中国妇女评网游娱乐化女性安全](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A6%87%E5%A5%B3%E8%AF%84%E7%BD%91%E6%B8%B8%E5%A8%B1%E4%B9%90%E5%8C%96%E5%A5%B3%E6%80%A7%E5%AE%89%E5%85%A8%23) `793.9K 🔥` `NEW`
1. [我国多领域成果密集上新](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%A4%9A%E9%A2%86%E5%9F%9F%E6%88%90%E6%9E%9C%E5%AF%86%E9%9B%86%E4%B8%8A%E6%96%B0%23) `617.9K 🔥` `NEW`
1. [无论谁夺冠 都来找蒙牛](https://s.weibo.com/weibo?q=%23%E6%97%A0%E8%AE%BA%E8%B0%81%E5%A4%BA%E5%86%A0%20%E9%83%BD%E6%9D%A5%E6%89%BE%E8%92%99%E7%89%9B%23) `617.3K 🔥` `NEW`
1. [腾讯与长鑫存储签200亿大单](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E4%B8%8E%E9%95%BF%E9%91%AB%E5%AD%98%E5%82%A8%E7%AD%BE200%E4%BA%BF%E5%A4%A7%E5%8D%95%23) `606.9K 🔥` `NEW`
1. [恋与深空客服的回应](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%AE%A2%E6%9C%8D%E7%9A%84%E5%9B%9E%E5%BA%94%23) `597.6K 🔥` `NEW`
1. [爱直接对嘴喝饮料的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%9B%B4%E6%8E%A5%E5%AF%B9%E5%98%B4%E5%96%9D%E9%A5%AE%E6%96%99%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `583.0K 🔥` `NEW`
1. [一直以为方便面汤是要倒掉的](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%BB%A5%E4%B8%BA%E6%96%B9%E4%BE%BF%E9%9D%A2%E6%B1%A4%E6%98%AF%E8%A6%81%E5%80%92%E6%8E%89%E7%9A%84%23) `569.6K 🔥` `NEW`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `556.1K 🔥` `NEW`
1. [当我知道豆包有后台审核人员](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E7%9F%A5%E9%81%93%E8%B1%86%E5%8C%85%E6%9C%89%E5%90%8E%E5%8F%B0%E5%AE%A1%E6%A0%B8%E4%BA%BA%E5%91%98%23) `297.1K 🔥` `NEW`
1. [无畏为自己的猫正名了 (Wuwei rectified his cat’s name)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E4%B8%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E7%8C%AB%E6%AD%A3%E5%90%8D%E4%BA%86%23) `296.8K 🔥` `NEW`
1. [赵今麦瘦好多](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%98%A6%E5%A5%BD%E5%A4%9A%23) `290.5K 🔥` `NEW`
1. [LPL第三赛段赛制公布](https://s.weibo.com/weibo?q=%23LPL%E7%AC%AC%E4%B8%89%E8%B5%9B%E6%AE%B5%E8%B5%9B%E5%88%B6%E5%85%AC%E5%B8%83%23) `285.0K 🔥` `NEW`
1. [TOP Prada](https://s.weibo.com/weibo?q=%23TOP%20Prada%23) `277.5K 🔥` `NEW`
1. [董卿母亲癌症去世](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%8D%BF%E6%AF%8D%E4%BA%B2%E7%99%8C%E7%97%87%E5%8E%BB%E4%B8%96%23) `273.7K 🔥` `NEW`
1. [三甲医生提醒青蛙腹是最糟糕体型](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E9%9D%92%E8%9B%99%E8%85%B9%E6%98%AF%E6%9C%80%E7%B3%9F%E7%B3%95%E4%BD%93%E5%9E%8B%23) `263.8K 🔥` `NEW`
1. [法国部长说装空调没用](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%83%A8%E9%95%BF%E8%AF%B4%E8%A3%85%E7%A9%BA%E8%B0%83%E6%B2%A1%E7%94%A8%23) `261.8K 🔥` `NEW`
1. [齐思钧回复孙怡](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E5%9B%9E%E5%A4%8D%E5%AD%99%E6%80%A1%23) `256.4K 🔥` `NEW`
1. [主人解开狗绳2只狗将路人撕咬致死](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E8%A7%A3%E5%BC%80%E7%8B%97%E7%BB%B32%E5%8F%AA%E7%8B%97%E5%B0%86%E8%B7%AF%E4%BA%BA%E6%92%95%E5%92%AC%E8%87%B4%E6%AD%BB%23) `228.3K 🔥` `NEW`
1. [papi酱父亲再婚妻子仅比她大几岁](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E7%88%B6%E4%BA%B2%E5%86%8D%E5%A9%9A%E5%A6%BB%E5%AD%90%E4%BB%85%E6%AF%94%E5%A5%B9%E5%A4%A7%E5%87%A0%E5%B2%81%23) `227.8K 🔥` `NEW`
1. [孙俪开QQ的蛮好生活 (Sun Li has a pretty good life with QQ)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%BC%80QQ%E7%9A%84%E8%9B%AE%E5%A5%BD%E7%94%9F%E6%B4%BB%23) `227.5K 🔥` `NEW`
1. [女子螺蛳粉摊吃出蛇](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%9E%BA%E8%9B%B3%E7%B2%89%E6%91%8A%E5%90%83%E5%87%BA%E8%9B%87%23) `226.8K 🔥` `NEW`
1. [东宫女主是不是顶级恋爱脑](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%AE%AB%E5%A5%B3%E4%B8%BB%E6%98%AF%E4%B8%8D%E6%98%AF%E9%A1%B6%E7%BA%A7%E6%81%8B%E7%88%B1%E8%84%91%23) `226.1K 🔥` `NEW`
1. [曝娱乐圈大部分明星失业](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A8%B1%E4%B9%90%E5%9C%88%E5%A4%A7%E9%83%A8%E5%88%86%E6%98%8E%E6%98%9F%E5%A4%B1%E4%B8%9A%23) `225.6K 🔥` `NEW`
1. [莆田仙游一峡谷发生事故5人身亡](https://s.weibo.com/weibo?q=%23%E8%8E%86%E7%94%B0%E4%BB%99%E6%B8%B8%E4%B8%80%E5%B3%A1%E8%B0%B7%E5%8F%91%E7%94%9F%E4%BA%8B%E6%95%855%E4%BA%BA%E8%BA%AB%E4%BA%A1%23) `225.3K 🔥` `NEW`
1. [曾沛慈和老公一起回台湾](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%92%8C%E8%80%81%E5%85%AC%E4%B8%80%E8%B5%B7%E5%9B%9E%E5%8F%B0%E6%B9%BE%23) `224.6K 🔥` `NEW`
1. [杨紫有3部作品入围金鹰奖](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%9C%893%E9%83%A8%E4%BD%9C%E5%93%81%E5%85%A5%E5%9B%B4%E9%87%91%E9%B9%B0%E5%A5%96%23) `224.3K 🔥` `NEW`
1. [田曦薇 女装牛仔裤](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%A5%B3%E8%A3%85%E7%89%9B%E4%BB%94%E8%A3%A4%23) `223.6K 🔥` `NEW`
1. [一人一句祝党生日快乐](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%BA%E4%B8%80%E5%8F%A5%E7%A5%9D%E5%85%9A%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90%23) `222.4K 🔥` `NEW`
1. [存储三巨头被告了](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E4%B8%89%E5%B7%A8%E5%A4%B4%E8%A2%AB%E5%91%8A%E4%BA%86%23) `221.6K 🔥` `NEW`
1. [黄金也扛不住了 (Gold can't hold it anymore)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B9%9F%E6%89%9B%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `221.0K 🔥` `NEW`
1. [欧洲安装一台空调要花近8000元](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E5%AE%89%E8%A3%85%E4%B8%80%E5%8F%B0%E7%A9%BA%E8%B0%83%E8%A6%81%E8%8A%B1%E8%BF%918000%E5%85%83%23) `220.2K 🔥` `NEW`
1. [厨房装空调还是装冷烟机](https://s.weibo.com/weibo?q=%23%E5%8E%A8%E6%88%BF%E8%A3%85%E7%A9%BA%E8%B0%83%E8%BF%98%E6%98%AF%E8%A3%85%E5%86%B7%E7%83%9F%E6%9C%BA%23) `219.1K 🔥` `NEW`
1. [一诺变着花样秀新驾照](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%8F%98%E7%9D%80%E8%8A%B1%E6%A0%B7%E7%A7%80%E6%96%B0%E9%A9%BE%E7%85%A7%23) `217.4K 🔥` `NEW`
1. [哈兰德吃饭被镜中自己吓到](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%90%83%E9%A5%AD%E8%A2%AB%E9%95%9C%E4%B8%AD%E8%87%AA%E5%B7%B1%E5%90%93%E5%88%B0%23) `217.1K 🔥` `NEW`
1. [C罗10球7球对垫底队](https://s.weibo.com/weibo?q=%23C%E7%BD%9710%E7%90%837%E7%90%83%E5%AF%B9%E5%9E%AB%E5%BA%95%E9%98%9F%23) `216.0K 🔥` `NEW`
1. [韩国队主帅遭极端网友死亡威胁](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E4%B8%BB%E5%B8%85%E9%81%AD%E6%9E%81%E7%AB%AF%E7%BD%91%E5%8F%8B%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `213.7K 🔥` `NEW`
1. [恋与深空道歉就够了吗](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%81%93%E6%AD%89%E5%B0%B1%E5%A4%9F%E4%BA%86%E5%90%97%23) `212.3K 🔥` `NEW`
1. [本届世界杯已有5人涉性侵风波](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B7%B2%E6%9C%895%E4%BA%BA%E6%B6%89%E6%80%A7%E4%BE%B5%E9%A3%8E%E6%B3%A2%23) `212.2K 🔥` `NEW`
1. [Ella回应SHE何时合体](https://s.weibo.com/weibo?q=%23Ella%E5%9B%9E%E5%BA%94SHE%E4%BD%95%E6%97%B6%E5%90%88%E4%BD%93%23) `210.6K 🔥` `NEW`
1. [刘宇宁胸肌腹肌全给看了 (Liu Yuning’s chest and abdominal muscles were all shown)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%83%B8%E8%82%8C%E8%85%B9%E8%82%8C%E5%85%A8%E7%BB%99%E7%9C%8B%E4%BA%86%23) `209.6K 🔥` `NEW`
1. [周杰伦千禧年就有小卡了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%8D%83%E7%A6%A7%E5%B9%B4%E5%B0%B1%E6%9C%89%E5%B0%8F%E5%8D%A1%E4%BA%86%23) `208.8K 🔥` `NEW`
1. [穆祉丞东方风云榜红毯](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E4%B8%9C%E6%96%B9%E9%A3%8E%E4%BA%91%E6%A6%9C%E7%BA%A2%E6%AF%AF%23) `207.7K 🔥` `NEW`
1. [林逸向方筱然求婚了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%80%B8%E5%90%91%E6%96%B9%E7%AD%B1%E7%84%B6%E6%B1%82%E5%A9%9A%E4%BA%86%23) `206.9K 🔥` `NEW`
1. [黄灿灿张慧雯落地签还没发的原因](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%BC%A0%E6%85%A7%E9%9B%AF%E8%90%BD%E5%9C%B0%E7%AD%BE%E8%BF%98%E6%B2%A1%E5%8F%91%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `205.0K 🔥` `NEW`
1. [片寄凉太胖了好多](https://s.weibo.com/weibo?q=%23%E7%89%87%E5%AF%84%E5%87%89%E5%A4%AA%E8%83%96%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `204.2K 🔥` `NEW`
1. [恋与深空各大应用商店评分](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%90%84%E5%A4%A7%E5%BA%94%E7%94%A8%E5%95%86%E5%BA%97%E8%AF%84%E5%88%86%23) `202.4K 🔥` `NEW`
1. [吴建豪和老婆差20岁](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BB%BA%E8%B1%AA%E5%92%8C%E8%80%81%E5%A9%86%E5%B7%AE20%E5%B2%81%23) `201.0K 🔥` `NEW`
1. [谢霆锋王菲十指紧扣一起走](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E7%8E%8B%E8%8F%B2%E5%8D%81%E6%8C%87%E7%B4%A7%E6%89%A3%E4%B8%80%E8%B5%B7%E8%B5%B0%23) `215.2K 🔥`
1. [杨洋举杯青岛白啤邂逅夏日美好](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E4%B8%BE%E6%9D%AF%E9%9D%92%E5%B2%9B%E7%99%BD%E5%95%A4%E9%82%82%E9%80%85%E5%A4%8F%E6%97%A5%E7%BE%8E%E5%A5%BD%23) `581.1K 🔥` `-26%`
1. [女儿称是生父强奸所生拒付赡养费 (Daughter says she was the child of rape by her biological father and refuses to pay alimony)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%A7%B0%E6%98%AF%E7%94%9F%E7%88%B6%E5%BC%BA%E5%A5%B8%E6%89%80%E7%94%9F%E6%8B%92%E4%BB%98%E8%B5%A1%E5%85%BB%E8%B4%B9%23) `206.0K 🔥` `-62%`
1. [江语晨 好恨江语晨前夫 (Jiang Yuchen really hates Jiang Yuchen’s ex-husband)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%20%E5%A5%BD%E6%81%A8%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%89%8D%E5%A4%AB%23) `201.3K 🔥` `-44%`

Updated at 2026-06-29 19:34:42

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
