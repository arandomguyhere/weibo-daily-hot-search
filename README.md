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

1. [178万卖房次日得知拆迁房主反悔](https://s.weibo.com/weibo?q=%23178%E4%B8%87%E5%8D%96%E6%88%BF%E6%AC%A1%E6%97%A5%E5%BE%97%E7%9F%A5%E6%8B%86%E8%BF%81%E6%88%BF%E4%B8%BB%E5%8F%8D%E6%82%94%23) `1.1M 🔥` `NEW`
1. [梁靖崑加盟俄罗斯联赛](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E5%8A%A0%E7%9B%9F%E4%BF%84%E7%BD%97%E6%96%AF%E8%81%94%E8%B5%9B%23) `854.6K 🔥` `NEW`
1. [工业经济新动能澎湃](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%B8%9A%E7%BB%8F%E6%B5%8E%E6%96%B0%E5%8A%A8%E8%83%BD%E6%BE%8E%E6%B9%83%23) `634.3K 🔥` `NEW`
1. [马天宇说后会友期和某人起争执了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%AF%B4%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E5%92%8C%E6%9F%90%E4%BA%BA%E8%B5%B7%E4%BA%89%E6%89%A7%E4%BA%86%23) `519.3K 🔥` `NEW`
1. [女子身高153难买衣服怒而自己做](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BA%AB%E9%AB%98153%E9%9A%BE%E4%B9%B0%E8%A1%A3%E6%9C%8D%E6%80%92%E8%80%8C%E8%87%AA%E5%B7%B1%E5%81%9A%23) `418.9K 🔥` `NEW`
1. [湖人 马刺](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%20%E9%A9%AC%E5%88%BA%23) `412.0K 🔥` `NEW`
1. [男子被自家猫咬了一口后截指](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E8%87%AA%E5%AE%B6%E7%8C%AB%E5%92%AC%E4%BA%86%E4%B8%80%E5%8F%A3%E5%90%8E%E6%88%AA%E6%8C%87%23) `406.2K 🔥` `NEW`
1. [牧民遇4只雪豹五方都愣住了](https://s.weibo.com/weibo?q=%23%E7%89%A7%E6%B0%91%E9%81%874%E5%8F%AA%E9%9B%AA%E8%B1%B9%E4%BA%94%E6%96%B9%E9%83%BD%E6%84%A3%E4%BD%8F%E4%BA%86%23) `392.6K 🔥` `NEW`
1. [于东来现身深圳迪厅舞姿火辣](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E7%8E%B0%E8%BA%AB%E6%B7%B1%E5%9C%B3%E8%BF%AA%E5%8E%85%E8%88%9E%E5%A7%BF%E7%81%AB%E8%BE%A3%23) `372.6K 🔥` `NEW`
1. [董明珠让拿手机员工没动她急了](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%98%8E%E7%8F%A0%E8%AE%A9%E6%8B%BF%E6%89%8B%E6%9C%BA%E5%91%98%E5%B7%A5%E6%B2%A1%E5%8A%A8%E5%A5%B9%E6%80%A5%E4%BA%86%23) `366.5K 🔥` `NEW`
1. [网友扒出厉娜雪藏期间行程图](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%89%92%E5%87%BA%E5%8E%89%E5%A8%9C%E9%9B%AA%E8%97%8F%E6%9C%9F%E9%97%B4%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `352.8K 🔥` `NEW`
1. [天霸 体坛](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E9%9C%B8%20%E4%BD%93%E5%9D%9B%23) `342.8K 🔥` `NEW`
1. [董明珠直播数次训斥员工](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%98%8E%E7%8F%A0%E7%9B%B4%E6%92%AD%E6%95%B0%E6%AC%A1%E8%AE%AD%E6%96%A5%E5%91%98%E5%B7%A5%23) `332.0K 🔥` `NEW`
1. [印度人呼吁禁播议员女儿婚礼视频](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%BA%BA%E5%91%BC%E5%90%81%E7%A6%81%E6%92%AD%E8%AE%AE%E5%91%98%E5%A5%B3%E5%84%BF%E5%A9%9A%E7%A4%BC%E8%A7%86%E9%A2%91%23) `320.5K 🔥` `NEW`
1. [后会友期给文吉儿美颜了](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%BB%99%E6%96%87%E5%90%89%E5%84%BF%E7%BE%8E%E9%A2%9C%E4%BA%86%23) `318.7K 🔥` `NEW`
1. [厉娜好友 别跟不重要的人和事较劲](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E5%A5%BD%E5%8F%8B%20%E5%88%AB%E8%B7%9F%E4%B8%8D%E9%87%8D%E8%A6%81%E7%9A%84%E4%BA%BA%E5%92%8C%E4%BA%8B%E8%BE%83%E5%8A%B2%23) `285.0K 🔥` `NEW`
1. [教育系统内鬼出卖3.5万学生信息](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E7%B3%BB%E7%BB%9F%E5%86%85%E9%AC%BC%E5%87%BA%E5%8D%963.5%E4%B8%87%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%23) `244.0K 🔥` `NEW`
1. [王星越说自己北京有四个家](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%E8%AF%B4%E8%87%AA%E5%B7%B1%E5%8C%97%E4%BA%AC%E6%9C%89%E5%9B%9B%E4%B8%AA%E5%AE%B6%23) `167.5K 🔥` `NEW`
1. [冯骥后AI时代最重要的问题](https://s.weibo.com/weibo?q=%23%E5%86%AF%E9%AA%A5%E5%90%8EAI%E6%97%B6%E4%BB%A3%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E9%97%AE%E9%A2%98%23) `149.6K 🔥` `NEW`
1. [曝苹果器重iPhone20Pro系列](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%8B%B9%E6%9E%9C%E5%99%A8%E9%87%8DiPhone20Pro%E7%B3%BB%E5%88%97%23) `149.5K 🔥` `NEW`
1. [金饰克价涨到1093元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E6%B6%A8%E5%88%B01093%E5%85%83%23) `149.4K 🔥` `NEW`
1. [陆翊说文吉儿王子璇为人处事不太一样](https://s.weibo.com/weibo?q=%23%E9%99%86%E7%BF%8A%E8%AF%B4%E6%96%87%E5%90%89%E5%84%BF%E7%8E%8B%E5%AD%90%E7%92%87%E4%B8%BA%E4%BA%BA%E5%A4%84%E4%BA%8B%E4%B8%8D%E5%A4%AA%E4%B8%80%E6%A0%B7%23) `149.2K 🔥` `NEW`
1. [马天宇能不能让许飞摸一下小孩](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%83%BD%E4%B8%8D%E8%83%BD%E8%AE%A9%E8%AE%B8%E9%A3%9E%E6%91%B8%E4%B8%80%E4%B8%8B%E5%B0%8F%E5%AD%A9%23) `149.1K 🔥` `NEW`
1. [白小纯把兄弟的经济状况梭哈了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%8A%8A%E5%85%84%E5%BC%9F%E7%9A%84%E7%BB%8F%E6%B5%8E%E7%8A%B6%E5%86%B5%E6%A2%AD%E5%93%88%E4%BA%86%23) `148.8K 🔥` `NEW`
1. [现在就出发](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `148.7K 🔥` `NEW`
1. [泄露身份证后四位有多危险](https://s.weibo.com/weibo?q=%23%E6%B3%84%E9%9C%B2%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%90%8E%E5%9B%9B%E4%BD%8D%E6%9C%89%E5%A4%9A%E5%8D%B1%E9%99%A9%23) `148.7K 🔥` `NEW`
1. [iPhone20Pro陶瓷限量版传闻](https://s.weibo.com/weibo?q=%23iPhone20Pro%E9%99%B6%E7%93%B7%E9%99%90%E9%87%8F%E7%89%88%E4%BC%A0%E9%97%BB%23) `147.3K 🔥` `NEW`
1. [易烊千玺生日单曲MV](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%94%9F%E6%97%A5%E5%8D%95%E6%9B%B2MV%23) `145.8K 🔥` `NEW`
1. [公司里真正好相处的就三种人](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E9%87%8C%E7%9C%9F%E6%AD%A3%E5%A5%BD%E7%9B%B8%E5%A4%84%E7%9A%84%E5%B0%B1%E4%B8%89%E7%A7%8D%E4%BA%BA%23) `145.5K 🔥` `NEW`
1. [女子查账单发现三年点近半吨奶茶](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9F%A5%E8%B4%A6%E5%8D%95%E5%8F%91%E7%8E%B0%E4%B8%89%E5%B9%B4%E7%82%B9%E8%BF%91%E5%8D%8A%E5%90%A8%E5%A5%B6%E8%8C%B6%23) `145.3K 🔥` `NEW`
1. [青稚白小纯说话信息密度很高](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%AF%B4%E8%AF%9D%E4%BF%A1%E6%81%AF%E5%AF%86%E5%BA%A6%E5%BE%88%E9%AB%98%23) `130.0K 🔥` `NEW`
1. [方博称打不过樊振东但不服](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%8D%9A%E7%A7%B0%E6%89%93%E4%B8%8D%E8%BF%87%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%BD%86%E4%B8%8D%E6%9C%8D%23) `127.6K 🔥` `NEW`
1. [王源 易烊千玺](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%20%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `127.4K 🔥` `NEW`
1. [国考公共科目笔试](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%80%83%E5%85%AC%E5%85%B1%E7%A7%91%E7%9B%AE%E7%AC%94%E8%AF%95%23) `127.1K 🔥` `NEW`
1. [贝儿参加爸爸去哪儿时期的家](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%84%BF%E5%8F%82%E5%8A%A0%E7%88%B8%E7%88%B8%E5%8E%BB%E5%93%AA%E5%84%BF%E6%97%B6%E6%9C%9F%E7%9A%84%E5%AE%B6%23) `121.2K 🔥` `NEW`
1. [歼35A首次近距离展示](https://s.weibo.com/weibo?q=%23%E6%AD%BC35A%E9%A6%96%E6%AC%A1%E8%BF%91%E8%B7%9D%E7%A6%BB%E5%B1%95%E7%A4%BA%23) `118.9K 🔥` `NEW`
1. [长崎将南京大屠杀篡改为南京事件](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%B4%8E%E5%B0%86%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%E7%AF%A1%E6%94%B9%E4%B8%BA%E5%8D%97%E4%BA%AC%E4%BA%8B%E4%BB%B6%23) `115.8K 🔥` `NEW`
1. [王一珩妈妈周深超话12级](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E7%8F%A9%E5%A6%88%E5%A6%88%E5%91%A8%E6%B7%B1%E8%B6%85%E8%AF%9D12%E7%BA%A7%23) `115.8K 🔥` `NEW`
1. [东风日产NX7首批车主火热提车](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%A3%8E%E6%97%A5%E4%BA%A7NX7%E9%A6%96%E6%89%B9%E8%BD%A6%E4%B8%BB%E7%81%AB%E7%83%AD%E6%8F%90%E8%BD%A6%23) `115.8K 🔥` `NEW`
1. [卢旺达参谋长连合掌都学到了](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%97%BA%E8%BE%BE%E5%8F%82%E8%B0%8B%E9%95%BF%E8%BF%9E%E5%90%88%E6%8E%8C%E9%83%BD%E5%AD%A6%E5%88%B0%E4%BA%86%23) `115.8K 🔥` `NEW`
1. [美国资助沈伯洋干预2026台湾选举](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%B5%84%E5%8A%A9%E6%B2%88%E4%BC%AF%E6%B4%8B%E5%B9%B2%E9%A2%842026%E5%8F%B0%E6%B9%BE%E9%80%89%E4%B8%BE%23) `115.8K 🔥` `NEW`
1. [曝徐嘉余王冰冰结婚了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BE%90%E5%98%89%E4%BD%99%E7%8E%8B%E5%86%B0%E5%86%B0%E7%BB%93%E5%A9%9A%E4%BA%86%23) `115.7K 🔥` `NEW`
1. [老实人吹牛是这样的](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%AE%9E%E4%BA%BA%E5%90%B9%E7%89%9B%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `115.7K 🔥` `NEW`
1. [微博国际文化交流之夜全阵容](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E5%9B%BD%E9%99%85%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B9%8B%E5%A4%9C%E5%85%A8%E9%98%B5%E5%AE%B9%23) `115.7K 🔥` `NEW`
1. [伞兵去后会友期观察室了](https://s.weibo.com/weibo?q=%23%E4%BC%9E%E5%85%B5%E5%8E%BB%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%A7%82%E5%AF%9F%E5%AE%A4%E4%BA%86%23) `115.7K 🔥` `NEW`
1. [宋慧乔和孔刘的新剧来了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E5%92%8C%E5%AD%94%E5%88%98%E7%9A%84%E6%96%B0%E5%89%A7%E6%9D%A5%E4%BA%86%23) `115.7K 🔥` `NEW`
1. [爱情公寓戒断反应提前来了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E6%88%92%E6%96%AD%E5%8F%8D%E5%BA%94%E6%8F%90%E5%89%8D%E6%9D%A5%E4%BA%86%23) `115.7K 🔥` `NEW`
1. [30万级唯一四激光千伏奕境X9](https://s.weibo.com/weibo?q=%2330%E4%B8%87%E7%BA%A7%E5%94%AF%E4%B8%80%E5%9B%9B%E6%BF%80%E5%85%89%E5%8D%83%E4%BC%8F%E5%A5%95%E5%A2%83X9%23) `561.9K 🔥` `+54%`
1. [出版守匠心阅读润人心](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%89%88%E5%AE%88%E5%8C%A0%E5%BF%83%E9%98%85%E8%AF%BB%E6%B6%A6%E4%BA%BA%E5%BF%83%23) `407.4K 🔥` `+307%`
1. [金价真的大涨了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%9C%9F%E7%9A%84%E5%A4%A7%E6%B6%A8%E4%BA%86%23) `149.0K 🔥` `+104%`
1. [千万不要用纸巾包贵重物品](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%94%A8%E7%BA%B8%E5%B7%BE%E5%8C%85%E8%B4%B5%E9%87%8D%E7%89%A9%E5%93%81%23) `121.0K 🔥` `-77%`

Updated at 2026-11-28 12:44:22

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
