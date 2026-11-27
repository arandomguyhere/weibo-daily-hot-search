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

1. [董明珠现场发火魏建军解围](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%98%8E%E7%8F%A0%E7%8E%B0%E5%9C%BA%E5%8F%91%E7%81%AB%E9%AD%8F%E5%BB%BA%E5%86%9B%E8%A7%A3%E5%9B%B4%23) `706.0K 🔥` `NEW`
1. [千万不要用纸巾包贵重物品](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%94%A8%E7%BA%B8%E5%B7%BE%E5%8C%85%E8%B4%B5%E9%87%8D%E7%89%A9%E5%93%81%23) `529.0K 🔥` `NEW`
1. [180秒回顾神24发射任务](https://s.weibo.com/weibo?q=%23180%E7%A7%92%E5%9B%9E%E9%A1%BE%E7%A5%9E24%E5%8F%91%E5%B0%84%E4%BB%BB%E5%8A%A1%23) `410.1K 🔥` `NEW`
1. [30万级唯一四激光千伏奕境X9](https://s.weibo.com/weibo?q=%2330%E4%B8%87%E7%BA%A7%E5%94%AF%E4%B8%80%E5%9B%9B%E6%BF%80%E5%85%89%E5%8D%83%E4%BC%8F%E5%A5%95%E5%A2%83X9%23) `364.9K 🔥` `NEW`
1. [董明珠训员工 魏建军解围](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%98%8E%E7%8F%A0%E8%AE%AD%E5%91%98%E5%B7%A5%20%E9%AD%8F%E5%BB%BA%E5%86%9B%E8%A7%A3%E5%9B%B4%23) `338.3K 🔥` `NEW`
1. [见到真正的非暴力沟通了](https://s.weibo.com/weibo?q=%23%E8%A7%81%E5%88%B0%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%9D%9E%E6%9A%B4%E5%8A%9B%E6%B2%9F%E9%80%9A%E4%BA%86%23) `153.2K 🔥` `NEW`
1. [许飞 天娱前员工](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E5%A4%A9%E5%A8%B1%E5%89%8D%E5%91%98%E5%B7%A5%23) `119.1K 🔥` `NEW`
1. [出版守匠心阅读润人心](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%89%88%E5%AE%88%E5%8C%A0%E5%BF%83%E9%98%85%E8%AF%BB%E6%B6%A6%E4%BA%BA%E5%BF%83%23) `100.2K 🔥` `NEW`
1. [U17世界杯亚洲区7队出线](https://s.weibo.com/weibo?q=%23U17%E4%B8%96%E7%95%8C%E6%9D%AF%E4%BA%9A%E6%B4%B2%E5%8C%BA7%E9%98%9F%E5%87%BA%E7%BA%BF%23) `95.2K 🔥` `NEW`
1. [济南医保骂人主播被解除劳动关系](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%8D%97%E5%8C%BB%E4%BF%9D%E9%AA%82%E4%BA%BA%E4%B8%BB%E6%92%AD%E8%A2%AB%E8%A7%A3%E9%99%A4%E5%8A%B3%E5%8A%A8%E5%85%B3%E7%B3%BB%23) `85.5K 🔥` `NEW`
1. [后会友期第三次飞行嘉宾阵容](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%AC%AC%E4%B8%89%E6%AC%A1%E9%A3%9E%E8%A1%8C%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `73.9K 🔥` `NEW`
1. [多平台已下架纸质短剧](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B9%B3%E5%8F%B0%E5%B7%B2%E4%B8%8B%E6%9E%B6%E7%BA%B8%E8%B4%A8%E7%9F%AD%E5%89%A7%23) `73.7K 🔥` `NEW`
1. [厉娜前经纪人张阿瞳发文](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%BC%A0%E9%98%BF%E7%9E%B3%E5%8F%91%E6%96%87%23) `73.5K 🔥` `NEW`
1. [央行新规取消贷款罚息利率上下限](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A1%8C%E6%96%B0%E8%A7%84%E5%8F%96%E6%B6%88%E8%B4%B7%E6%AC%BE%E7%BD%9A%E6%81%AF%E5%88%A9%E7%8E%87%E4%B8%8A%E4%B8%8B%E9%99%90%23) `73.1K 🔥` `NEW`
1. [金价真的大涨了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%9C%9F%E7%9A%84%E5%A4%A7%E6%B6%A8%E4%BA%86%23) `73.0K 🔥` `NEW`
1. [秦牛正威回应订婚再退婚](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%89%9B%E6%AD%A3%E5%A8%81%E5%9B%9E%E5%BA%94%E8%AE%A2%E5%A9%9A%E5%86%8D%E9%80%80%E5%A9%9A%23) `72.7K 🔥` `NEW`
1. [马天宇 我都40了肯定有过亲密关系啊](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%20%E6%88%91%E9%83%BD40%E4%BA%86%E8%82%AF%E5%AE%9A%E6%9C%89%E8%BF%87%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E5%95%8A%23) `72.5K 🔥` `NEW`
1. [三只松鼠一夜整改反而让人唏嘘](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8F%AA%E6%9D%BE%E9%BC%A0%E4%B8%80%E5%A4%9C%E6%95%B4%E6%94%B9%E5%8F%8D%E8%80%8C%E8%AE%A9%E4%BA%BA%E5%94%8F%E5%98%98%23) `72.1K 🔥` `NEW`
1. [第一次听说吃雪蛤直接抵制](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%90%AC%E8%AF%B4%E5%90%83%E9%9B%AA%E8%9B%A4%E7%9B%B4%E6%8E%A5%E6%8A%B5%E5%88%B6%23) `71.8K 🔥` `NEW`
1. [辛芷蕾花少又迎来宣发期](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E8%8A%B1%E5%B0%91%E5%8F%88%E8%BF%8E%E6%9D%A5%E5%AE%A3%E5%8F%91%E6%9C%9F%23) `71.5K 🔥` `NEW`
1. [赵昭仪说剧组不吃槟榔的人很少见](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E8%AF%B4%E5%89%A7%E7%BB%84%E4%B8%8D%E5%90%83%E6%A7%9F%E6%A6%94%E7%9A%84%E4%BA%BA%E5%BE%88%E5%B0%91%E8%A7%81%23) `71.4K 🔥` `NEW`
1. [小米世界模型2.0实时渲染](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B2.0%E5%AE%9E%E6%97%B6%E6%B8%B2%E6%9F%93%23) `70.5K 🔥` `NEW`
1. [猫妈气场拉满教训偷跑小猫](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%A6%88%E6%B0%94%E5%9C%BA%E6%8B%89%E6%BB%A1%E6%95%99%E8%AE%AD%E5%81%B7%E8%B7%91%E5%B0%8F%E7%8C%AB%23) `69.9K 🔥` `NEW`
1. [妈妈用四十二岁回应二十一岁](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%94%A8%E5%9B%9B%E5%8D%81%E4%BA%8C%E5%B2%81%E5%9B%9E%E5%BA%94%E4%BA%8C%E5%8D%81%E4%B8%80%E5%B2%81%23) `67.2K 🔥` `NEW`
1. [发现了换手机的最佳时机](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%BA%86%E6%8D%A2%E6%89%8B%E6%9C%BA%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA%23) `65.4K 🔥` `NEW`
1. [一方不服离婚称仍要追她](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%96%B9%E4%B8%8D%E6%9C%8D%E7%A6%BB%E5%A9%9A%E7%A7%B0%E4%BB%8D%E8%A6%81%E8%BF%BD%E5%A5%B9%23) `61.7K 🔥` `NEW`
1. [妻子出轨生子丈夫选择抚养第三者急了](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%87%BA%E8%BD%A8%E7%94%9F%E5%AD%90%E4%B8%88%E5%A4%AB%E9%80%89%E6%8B%A9%E6%8A%9A%E5%85%BB%E7%AC%AC%E4%B8%89%E8%80%85%E6%80%A5%E4%BA%86%23) `60.3K 🔥` `NEW`
1. [易烊千玺26岁生日面](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA26%E5%B2%81%E7%94%9F%E6%97%A5%E9%9D%A2%23) `57.7K 🔥` `NEW`
1. [U17国足淘汰赛前景](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B3%E6%B7%98%E6%B1%B0%E8%B5%9B%E5%89%8D%E6%99%AF%23) `53.5K 🔥` `NEW`
1. [曾经大胃王如今吃一口都奢侈](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E7%BB%8F%E5%A4%A7%E8%83%83%E7%8E%8B%E5%A6%82%E4%BB%8A%E5%90%83%E4%B8%80%E5%8F%A3%E9%83%BD%E5%A5%A2%E4%BE%88%23) `52.8K 🔥` `NEW`
1. [爱上辛芷蕾真的是必然的](https://s.weibo.com/weibo?q=%23%E7%88%B1%E4%B8%8A%E8%BE%9B%E8%8A%B7%E8%95%BE%E7%9C%9F%E7%9A%84%E6%98%AF%E5%BF%85%E7%84%B6%E7%9A%84%23) `52.8K 🔥` `NEW`
1. [青稚投喂白小纯](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E6%8A%95%E5%96%82%E7%99%BD%E5%B0%8F%E7%BA%AF%23) `52.4K 🔥` `NEW`
1. [人民币存贷款利率管理规定公布](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%B8%81%E5%AD%98%E8%B4%B7%E6%AC%BE%E5%88%A9%E7%8E%87%E7%AE%A1%E7%90%86%E8%A7%84%E5%AE%9A%E5%85%AC%E5%B8%83%23) `52.2K 🔥` `NEW`
1. [皮特朱莉发表联合声明](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E7%89%B9%E6%9C%B1%E8%8E%89%E5%8F%91%E8%A1%A8%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%23) `51.7K 🔥` `NEW`
1. [后会友期要录回门宴](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%A6%81%E5%BD%95%E5%9B%9E%E9%97%A8%E5%AE%B4%23) `51.6K 🔥` `NEW`
1. [法医刘良称九成学生都是女生](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%8C%BB%E5%88%98%E8%89%AF%E7%A7%B0%E4%B9%9D%E6%88%90%E5%AD%A6%E7%94%9F%E9%83%BD%E6%98%AF%E5%A5%B3%E7%94%9F%23) `51.4K 🔥` `NEW`
1. [AG直晋世界赛总决赛](https://s.weibo.com/weibo?q=%23AG%E7%9B%B4%E6%99%8B%E4%B8%96%E7%95%8C%E8%B5%9B%E6%80%BB%E5%86%B3%E8%B5%9B%23) `47.7K 🔥` `NEW`
1. [中国母女阿根廷旅游被5名劫匪围攻](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%AF%8D%E5%A5%B3%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%97%85%E6%B8%B8%E8%A2%AB5%E5%90%8D%E5%8A%AB%E5%8C%AA%E5%9B%B4%E6%94%BB%23) `46.3K 🔥` `NEW`
1. [赖冠霖摄像不抽烟不喝酒不吃槟榔](https://s.weibo.com/weibo?q=%23%E8%B5%96%E5%86%A0%E9%9C%96%E6%91%84%E5%83%8F%E4%B8%8D%E6%8A%BD%E7%83%9F%E4%B8%8D%E5%96%9D%E9%85%92%E4%B8%8D%E5%90%83%E6%A7%9F%E6%A6%94%23) `46.2K 🔥` `NEW`
1. [花花精英赛MVP](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E8%8A%B1%E7%B2%BE%E8%8B%B1%E8%B5%9BMVP%23) `45.0K 🔥` `NEW`
1. [A股迎史诗级暴涨](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%BF%8E%E5%8F%B2%E8%AF%97%E7%BA%A7%E6%9A%B4%E6%B6%A8%23) `43.6K 🔥` `NEW`
1. [白小纯真的有人疼](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E7%96%BC%23) `43.2K 🔥` `NEW`
1. [王俊凯王源易烊千玺现状](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%8E%B0%E7%8A%B6%23) `43.1K 🔥` `NEW`
1. [长子长孙没先结婚被说会断亲](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%AD%90%E9%95%BF%E5%AD%99%E6%B2%A1%E5%85%88%E7%BB%93%E5%A9%9A%E8%A2%AB%E8%AF%B4%E4%BC%9A%E6%96%AD%E4%BA%B2%23) `40.6K 🔥` `NEW`
1. [医生回应胡兵50岁后长高5公分](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E8%83%A1%E5%85%B550%E5%B2%81%E5%90%8E%E9%95%BF%E9%AB%985%E5%85%AC%E5%88%86%23) `38.9K 🔥` `NEW`
1. [许飞厉娜对谈剪辑争议](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%8E%89%E5%A8%9C%E5%AF%B9%E8%B0%88%E5%89%AA%E8%BE%91%E4%BA%89%E8%AE%AE%23) `37.4K 🔥` `NEW`
1. [曝369婉拒BLG](https://s.weibo.com/weibo?q=%23%E6%9B%9D369%E5%A9%89%E6%8B%92BLG%23) `37.1K 🔥` `NEW`
1. [郭律毒舌谈生理性喜欢](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%8B%E6%AF%92%E8%88%8C%E8%B0%88%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%23) `36.4K 🔥` `NEW`
1. [小伊伊老公发离婚判决书](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%8A%E4%BC%8A%E8%80%81%E5%85%AC%E5%8F%91%E7%A6%BB%E5%A9%9A%E5%88%A4%E5%86%B3%E4%B9%A6%23) `35.3K 🔥` `NEW`
1. [胡歌刘涛 吻戏](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E5%88%98%E6%B6%9B%20%E5%90%BB%E6%88%8F%23) `35.1K 🔥` `NEW`
1. [文吉儿说王子璇都是假意](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E8%AF%B4%E7%8E%8B%E5%AD%90%E7%92%87%E9%83%BD%E6%98%AF%E5%81%87%E6%84%8F%23) `35.1K 🔥` `NEW`
1. [当你把出片交给AI后](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E6%8A%8A%E5%87%BA%E7%89%87%E4%BA%A4%E7%BB%99AI%E5%90%8E%23) `34.8K 🔥` `NEW`

Updated at 2026-11-28 07:10:57

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
