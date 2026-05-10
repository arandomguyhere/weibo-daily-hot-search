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

1. [浪姐三公事变 (Sister Lang's Three Public Incidents)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E4%BA%8B%E5%8F%98%23) `1.3M 🔥` `NEW`
1. [先于所有人爱上你的是妈妈](https://s.weibo.com/weibo?q=%23%E5%85%88%E4%BA%8E%E6%89%80%E6%9C%89%E4%BA%BA%E7%88%B1%E4%B8%8A%E4%BD%A0%E7%9A%84%E6%98%AF%E5%A6%88%E5%A6%88%23) `851.1K 🔥` `NEW`
1. [陈赫回应邀请李晨上五哈](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%9B%9E%E5%BA%94%E9%82%80%E8%AF%B7%E6%9D%8E%E6%99%A8%E4%B8%8A%E4%BA%94%E5%93%88%23) `846.9K 🔥` `NEW`
1. [原来这么多年牙齿都在负重前行](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B9%B4%E7%89%99%E9%BD%BF%E9%83%BD%E5%9C%A8%E8%B4%9F%E9%87%8D%E5%89%8D%E8%A1%8C%23) `841.8K 🔥` `NEW`
1. [田曦薇孙珍妮双女主](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%AD%99%E7%8F%8D%E5%A6%AE%E5%8F%8C%E5%A5%B3%E4%B8%BB%23) `683.1K 🔥` `NEW`
1. [网民造谣智能电表被加速被行拘](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%B0%91%E9%80%A0%E8%B0%A3%E6%99%BA%E8%83%BD%E7%94%B5%E8%A1%A8%E8%A2%AB%E5%8A%A0%E9%80%9F%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `614.8K 🔥` `NEW`
1. [涉疫邮轮上唯一一名医生也感染了](https://s.weibo.com/weibo?q=%23%E6%B6%89%E7%96%AB%E9%82%AE%E8%BD%AE%E4%B8%8A%E5%94%AF%E4%B8%80%E4%B8%80%E5%90%8D%E5%8C%BB%E7%94%9F%E4%B9%9F%E6%84%9F%E6%9F%93%E4%BA%86%23) `558.4K 🔥` `NEW`
1. [雷霆3比0湖人](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%863%E6%AF%940%E6%B9%96%E4%BA%BA%23) `463.2K 🔥` `NEW`
1. [母亲节红包](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%82%E7%BA%A2%E5%8C%85%23) `427.7K 🔥` `NEW`
1. [虞书欣G社生图](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3G%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `427.6K 🔥` `NEW`
1. [难怪现在在外面吃饭很少拉肚子了 (No wonder I rarely have diarrhea when eating out now.)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E7%8E%B0%E5%9C%A8%E5%9C%A8%E5%A4%96%E9%9D%A2%E5%90%83%E9%A5%AD%E5%BE%88%E5%B0%91%E6%8B%89%E8%82%9A%E5%AD%90%E4%BA%86%23) `427.5K 🔥` `NEW`
1. [王安宇对章若楠炫耀快杀青了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%AF%B9%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%82%AB%E8%80%80%E5%BF%AB%E6%9D%80%E9%9D%92%E4%BA%86%23) `427.1K 🔥` `NEW`
1. [黄霄雲演出晕倒](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%9C%84%E9%9B%B2%E6%BC%94%E5%87%BA%E6%99%95%E5%80%92%23) `423.2K 🔥` `NEW`
1. [一季度全国结婚登记169.7万对](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AD%A3%E5%BA%A6%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0169.7%E4%B8%87%E5%AF%B9%23) `400.4K 🔥` `NEW`
1. [机器人有没有体面一点的打包方式](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BD%93%E9%9D%A2%E4%B8%80%E7%82%B9%E7%9A%84%E6%89%93%E5%8C%85%E6%96%B9%E5%BC%8F%23) `347.0K 🔥` `NEW`
1. [190元榴莲仅退款商家再发声](https://s.weibo.com/weibo?q=%23190%E5%85%83%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E5%95%86%E5%AE%B6%E5%86%8D%E5%8F%91%E5%A3%B0%23) `327.4K 🔥` `NEW`
1. [张雪率车队参加儿子学校运动会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E7%8E%87%E8%BD%A6%E9%98%9F%E5%8F%82%E5%8A%A0%E5%84%BF%E5%AD%90%E5%AD%A6%E6%A0%A1%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `306.0K 🔥` `NEW`
1. [叶祖新叫蔡文静醒醒](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%A5%96%E6%96%B0%E5%8F%AB%E8%94%A1%E6%96%87%E9%9D%99%E9%86%92%E9%86%92%23) `297.7K 🔥` `NEW`
1. [虞书欣非遗高定](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%9D%9E%E9%81%97%E9%AB%98%E5%AE%9A%23) `287.7K 🔥` `NEW`
1. [首例汉坦病毒感染者遗孀曾与多人拥抱](https://s.weibo.com/weibo?q=%23%E9%A6%96%E4%BE%8B%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E6%84%9F%E6%9F%93%E8%80%85%E9%81%97%E5%AD%80%E6%9B%BE%E4%B8%8E%E5%A4%9A%E4%BA%BA%E6%8B%A5%E6%8A%B1%23) `276.5K 🔥` `NEW`
1. [浪姐到底在录什么 (What on earth is Sister Lang recording?)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%88%B0%E5%BA%95%E5%9C%A8%E5%BD%95%E4%BB%80%E4%B9%88%23) `270.1K 🔥` `NEW`
1. [国际足联为中国市场低头](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E4%B8%BA%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E4%BD%8E%E5%A4%B4%23) `261.5K 🔥` `NEW`
1. [到底谁是马雪晴啊](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E8%B0%81%E6%98%AF%E9%A9%AC%E9%9B%AA%E6%99%B4%E5%95%8A%23) `244.4K 🔥` `NEW`
1. [出差化老妆和出门玩化嫩妆](https://s.weibo.com/weibo?q=%23%E5%87%BA%E5%B7%AE%E5%8C%96%E8%80%81%E5%A6%86%E5%92%8C%E5%87%BA%E9%97%A8%E7%8E%A9%E5%8C%96%E5%AB%A9%E5%A6%86%23) `242.7K 🔥` `NEW`
1. [小李子现场观战湖人比赛](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9D%8E%E5%AD%90%E7%8E%B0%E5%9C%BA%E8%A7%82%E6%88%98%E6%B9%96%E4%BA%BA%E6%AF%94%E8%B5%9B%23) `239.1K 🔥` `NEW`
1. [俄男子在泰国被螳螂虾袭击腿部](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%94%B7%E5%AD%90%E5%9C%A8%E6%B3%B0%E5%9B%BD%E8%A2%AB%E8%9E%B3%E8%9E%82%E8%99%BE%E8%A2%AD%E5%87%BB%E8%85%BF%E9%83%A8%23) `237.7K 🔥` `NEW`
1. [辛芷蕾骑车又摔了四肢全废](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E9%AA%91%E8%BD%A6%E5%8F%88%E6%91%94%E4%BA%86%E5%9B%9B%E8%82%A2%E5%85%A8%E5%BA%9F%23) `236.9K 🔥` `NEW`
1. [张杰给文章面馆送花篮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E7%BB%99%E6%96%87%E7%AB%A0%E9%9D%A2%E9%A6%86%E9%80%81%E8%8A%B1%E7%AF%AE%23) `219.6K 🔥` `NEW`
1. [湖人vs雷霆](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BAvs%E9%9B%B7%E9%9C%86%23) `205.8K 🔥` `NEW`
1. [19岁小伙穿西装卖炒饭月入5万](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E5%B0%8F%E4%BC%99%E7%A9%BF%E8%A5%BF%E8%A3%85%E5%8D%96%E7%82%92%E9%A5%AD%E6%9C%88%E5%85%A55%E4%B8%87%23) `197.6K 🔥` `NEW`
1. [尼坤宋茜曾被称为南韩颜霸cp (Nichkhun Song Qian was once called the South Korean Yanba CP)](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%9D%A4%E5%AE%8B%E8%8C%9C%E6%9B%BE%E8%A2%AB%E7%A7%B0%E4%B8%BA%E5%8D%97%E9%9F%A9%E9%A2%9C%E9%9C%B8cp%23) `197.4K 🔥` `NEW`
1. [我不懂为什么不能买公寓](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E6%87%82%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%83%BD%E4%B9%B0%E5%85%AC%E5%AF%93%23) `190.0K 🔥` `NEW`
1. [王皓眼含热泪](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E7%9C%BC%E5%90%AB%E7%83%AD%E6%B3%AA%23) `188.3K 🔥` `NEW`
1. [哈登季后赛从未被横扫](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%99%BB%E5%AD%A3%E5%90%8E%E8%B5%9B%E4%BB%8E%E6%9C%AA%E8%A2%AB%E6%A8%AA%E6%89%AB%23) `185.8K 🔥` `NEW`
1. [警方介入捡瓶攒10万小狗遭死亡威胁](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E4%BB%8B%E5%85%A5%E6%8D%A1%E7%93%B6%E6%94%9210%E4%B8%87%E5%B0%8F%E7%8B%97%E9%81%AD%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `183.7K 🔥` `NEW`
1. [小伙连刮3天刮刮乐中百万连夜返乡](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E8%BF%9E%E5%88%AE3%E5%A4%A9%E5%88%AE%E5%88%AE%E4%B9%90%E4%B8%AD%E7%99%BE%E4%B8%87%E8%BF%9E%E5%A4%9C%E8%BF%94%E4%B9%A1%23) `176.1K 🔥` `NEW`
1. [缅甸又挖出一枚2.2公斤顶级红宝石](https://s.weibo.com/weibo?q=%23%E7%BC%85%E7%94%B8%E5%8F%88%E6%8C%96%E5%87%BA%E4%B8%80%E6%9E%9A2.2%E5%85%AC%E6%96%A4%E9%A1%B6%E7%BA%A7%E7%BA%A2%E5%AE%9D%E7%9F%B3%23) `169.2K 🔥` `NEW`
1. [刘雨昕离了王濛发现外面根本没雨](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E6%98%95%E7%A6%BB%E4%BA%86%E7%8E%8B%E6%BF%9B%E5%8F%91%E7%8E%B0%E5%A4%96%E9%9D%A2%E6%A0%B9%E6%9C%AC%E6%B2%A1%E9%9B%A8%23) `163.8K 🔥` `NEW`
1. [梁靖崑回应惊天逆转](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E5%9B%9E%E5%BA%94%E6%83%8A%E5%A4%A9%E9%80%86%E8%BD%AC%23) `149.0K 🔥` `NEW`
1. [用AI花3个月完成百名程序员7年工作](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E8%8A%B13%E4%B8%AA%E6%9C%88%E5%AE%8C%E6%88%90%E7%99%BE%E5%90%8D%E7%A8%8B%E5%BA%8F%E5%91%987%E5%B9%B4%E5%B7%A5%E4%BD%9C%23) `141.4K 🔥` `NEW`
1. [鞠婧祎请张云龙喝阿黛特调 (Ju Jingyi invites Zhang Yunlong to drink Adette)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%AF%B7%E5%BC%A0%E4%BA%91%E9%BE%99%E5%96%9D%E9%98%BF%E9%BB%9B%E7%89%B9%E8%B0%83%23) `135.4K 🔥` `NEW`
1. [DeepSeek被曝融资500亿](https://s.weibo.com/weibo?q=%23DeepSeek%E8%A2%AB%E6%9B%9D%E8%9E%8D%E8%B5%84500%E4%BA%BF%23) `135.3K 🔥` `NEW`
1. [哈啰回应员工聚会脚踩青桔美团](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%95%B0%E5%9B%9E%E5%BA%94%E5%91%98%E5%B7%A5%E8%81%9A%E4%BC%9A%E8%84%9A%E8%B8%A9%E9%9D%92%E6%A1%94%E7%BE%8E%E5%9B%A2%23) `134.5K 🔥` `NEW`
1. [蔡文静经纪人打电话让蔡文静下播](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%89%93%E7%94%B5%E8%AF%9D%E8%AE%A9%E8%94%A1%E6%96%87%E9%9D%99%E4%B8%8B%E6%92%AD%23) `427.3K 🔥` `+171%`
1. [世界杯中国转播费从3亿腰斩到1.5亿](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9B%BD%E8%BD%AC%E6%92%AD%E8%B4%B9%E4%BB%8E3%E4%BA%BF%E8%85%B0%E6%96%A9%E5%88%B01.5%E4%BA%BF%23) `427.2K 🔥` `+170%`
1. [央视曝车企一次锁电可省数十亿元](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E8%BD%A6%E4%BC%81%E4%B8%80%E6%AC%A1%E9%94%81%E7%94%B5%E5%8F%AF%E7%9C%81%E6%95%B0%E5%8D%81%E4%BA%BF%E5%85%83%23) `351.2K 🔥` `+171%`
1. [如果一个人长期不工作](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E4%B8%80%E4%B8%AA%E4%BA%BA%E9%95%BF%E6%9C%9F%E4%B8%8D%E5%B7%A5%E4%BD%9C%23) `227.6K 🔥` `+46%`
1. [王楚钦打哭F勒布伦 (Wang Chuqin cried F Lebrun)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%93%E5%93%ADF%E5%8B%92%E5%B8%83%E4%BC%A6%23) `897.9K 🔥` `-30%`
1. [母亲节](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%82%23) `574.7K 🔥` `-44%`
1. [国乒男团3比1法国男团 (The national table tennis men's team beat the French men's team 3-1)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A23%E6%AF%941%E6%B3%95%E5%9B%BD%E7%94%B7%E5%9B%A2%23) `218.5K 🔥` `-92%`
1. [何赛飞怒批姜贞羽](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B5%9B%E9%A3%9E%E6%80%92%E6%89%B9%E5%A7%9C%E8%B4%9E%E7%BE%BD%23) `147.8K 🔥` `-35%`

Updated at 2026-05-10 12:05:09

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
