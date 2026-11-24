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

1. [19楼落地窗底部装无限位外凸窗](https://s.weibo.com/weibo?q=%2319%E6%A5%BC%E8%90%BD%E5%9C%B0%E7%AA%97%E5%BA%95%E9%83%A8%E8%A3%85%E6%97%A0%E9%99%90%E4%BD%8D%E5%A4%96%E5%87%B8%E7%AA%97%23) `1.1M 🔥` `NEW`
1. [深圳感谢市民全妆出街](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%84%9F%E8%B0%A2%E5%B8%82%E6%B0%91%E5%85%A8%E5%A6%86%E5%87%BA%E8%A1%97%23) `779.0K 🔥` `NEW`
1. [中国经济电力十足](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E7%94%B5%E5%8A%9B%E5%8D%81%E8%B6%B3%23) `640.3K 🔥` `NEW`
1. [张萌昨天才知道马天宇给她浪姐加油](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E6%98%A8%E5%A4%A9%E6%89%8D%E7%9F%A5%E9%81%93%E9%A9%AC%E5%A4%A9%E5%AE%87%E7%BB%99%E5%A5%B9%E6%B5%AA%E5%A7%90%E5%8A%A0%E6%B2%B9%23) `605.6K 🔥` `NEW`
1. [为黄仁勋离职的工程师称自己行动太快](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A6%BB%E8%81%8C%E7%9A%84%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%A7%B0%E8%87%AA%E5%B7%B1%E8%A1%8C%E5%8A%A8%E5%A4%AA%E5%BF%AB%23) `603.9K 🔥` `NEW`
1. [男子杀妻抛尸后伪装好女婿10年](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%A6%BB%E6%8A%9B%E5%B0%B8%E5%90%8E%E4%BC%AA%E8%A3%85%E5%A5%BD%E5%A5%B3%E5%A9%BF10%E5%B9%B4%23) `593.6K 🔥` `NEW`
1. [MG4新增530从容版上市7.88万](https://s.weibo.com/weibo?q=%23MG4%E6%96%B0%E5%A2%9E530%E4%BB%8E%E5%AE%B9%E7%89%88%E4%B8%8A%E5%B8%827.88%E4%B8%87%23) `593.5K 🔥` `NEW`
1. [成毅姜珮瑶对手戏没有暧昧全是忌惮](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E5%A7%9C%E7%8F%AE%E7%91%B6%E5%AF%B9%E6%89%8B%E6%88%8F%E6%B2%A1%E6%9C%89%E6%9A%A7%E6%98%A7%E5%85%A8%E6%98%AF%E5%BF%8C%E6%83%AE%23) `592.5K 🔥` `NEW`
1. [霍震霆携全家见证霍启刚获授荣誉博士](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E9%9C%87%E9%9C%86%E6%90%BA%E5%85%A8%E5%AE%B6%E8%A7%81%E8%AF%81%E9%9C%8D%E5%90%AF%E5%88%9A%E8%8E%B7%E6%8E%88%E8%8D%A3%E8%AA%89%E5%8D%9A%E5%A3%AB%23) `584.9K 🔥` `NEW`
1. [MateX8华为史上最平整大折叠](https://s.weibo.com/weibo?q=%23MateX8%E5%8D%8E%E4%B8%BA%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%B9%B3%E6%95%B4%E5%A4%A7%E6%8A%98%E5%8F%A0%23) `575.4K 🔥` `NEW`
1. [BLG奖金收入断档第一](https://s.weibo.com/weibo?q=%23BLG%E5%A5%96%E9%87%91%E6%94%B6%E5%85%A5%E6%96%AD%E6%A1%A3%E7%AC%AC%E4%B8%80%23) `570.3K 🔥` `NEW`
1. [上海地铁回应大爷抵脖子不放小伙倒地](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%9B%9E%E5%BA%94%E5%A4%A7%E7%88%B7%E6%8A%B5%E8%84%96%E5%AD%90%E4%B8%8D%E6%94%BE%E5%B0%8F%E4%BC%99%E5%80%92%E5%9C%B0%23) `568.8K 🔥` `NEW`
1. [康熙十二世孙称雍正篡位](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E7%86%99%E5%8D%81%E4%BA%8C%E4%B8%96%E5%AD%99%E7%A7%B0%E9%9B%8D%E6%AD%A3%E7%AF%A1%E4%BD%8D%23) `561.5K 🔥` `NEW`
1. [贾静雯 修杰楷](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E9%9D%99%E9%9B%AF%20%E4%BF%AE%E6%9D%B0%E6%A5%B7%23) `551.9K 🔥` `NEW`
1. [林智妍李到晛分手](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%99%BA%E5%A6%8D%E6%9D%8E%E5%88%B0%E6%99%9B%E5%88%86%E6%89%8B%23) `551.1K 🔥` `NEW`
1. [文吉儿曾说见王子璇是接她回家的感觉](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E6%9B%BE%E8%AF%B4%E8%A7%81%E7%8E%8B%E5%AD%90%E7%92%87%E6%98%AF%E6%8E%A5%E5%A5%B9%E5%9B%9E%E5%AE%B6%E7%9A%84%E6%84%9F%E8%A7%89%23) `484.1K 🔥` `NEW`
1. [高迪憔悴了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%BF%AA%E6%86%94%E6%82%B4%E4%BA%86%23) `352.8K 🔥` `NEW`
1. [卢旺达摸着中国人过河](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%97%BA%E8%BE%BE%E6%91%B8%E7%9D%80%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%BF%87%E6%B2%B3%23) `338.2K 🔥` `NEW`
1. [姚译添要做全女综艺](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E8%AF%91%E6%B7%BB%E8%A6%81%E5%81%9A%E5%85%A8%E5%A5%B3%E7%BB%BC%E8%89%BA%23) `337.4K 🔥` `NEW`
1. [内娱全女拍烂了都不如一部AI](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%85%A8%E5%A5%B3%E6%8B%8D%E7%83%82%E4%BA%86%E9%83%BD%E4%B8%8D%E5%A6%82%E4%B8%80%E9%83%A8AI%23) `336.1K 🔥` `NEW`
1. [男子专门买二手车制造车祸](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%93%E9%97%A8%E4%B9%B0%E4%BA%8C%E6%89%8B%E8%BD%A6%E5%88%B6%E9%80%A0%E8%BD%A6%E7%A5%B8%23) `331.9K 🔥` `NEW`
1. [黄仁勋复职猎巫行动远未结束](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%A4%8D%E8%81%8C%E7%8C%8E%E5%B7%AB%E8%A1%8C%E5%8A%A8%E8%BF%9C%E6%9C%AA%E7%BB%93%E6%9D%9F%23) `330.0K 🔥` `NEW`
1. [女子峨嵋山极限通勤上班半年瘦12斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B3%A8%E5%B5%8B%E5%B1%B1%E6%9E%81%E9%99%90%E9%80%9A%E5%8B%A4%E4%B8%8A%E7%8F%AD%E5%8D%8A%E5%B9%B4%E7%98%A612%E6%96%A4%23) `329.0K 🔥` `NEW`
1. [华为小折电脑新品发布](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%B0%8F%E6%8A%98%E7%94%B5%E8%84%91%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%23) `326.6K 🔥` `NEW`
1. [要了两个月生活费才发现认错人了](https://s.weibo.com/weibo?q=%23%E8%A6%81%E4%BA%86%E4%B8%A4%E4%B8%AA%E6%9C%88%E7%94%9F%E6%B4%BB%E8%B4%B9%E6%89%8D%E5%8F%91%E7%8E%B0%E8%AE%A4%E9%94%99%E4%BA%BA%E4%BA%86%23) `323.1K 🔥` `NEW`
1. [维嘉跟王菲说别介意我蹭你流量](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%98%89%E8%B7%9F%E7%8E%8B%E8%8F%B2%E8%AF%B4%E5%88%AB%E4%BB%8B%E6%84%8F%E6%88%91%E8%B9%AD%E4%BD%A0%E6%B5%81%E9%87%8F%23) `321.1K 🔥` `NEW`
1. [华为MateX8香爆了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMateX8%E9%A6%99%E7%88%86%E4%BA%86%23) `319.2K 🔥` `NEW`
1. [49岁李维嘉家里干净得没有一根头发](https://s.weibo.com/weibo?q=%2349%E5%B2%81%E6%9D%8E%E7%BB%B4%E5%98%89%E5%AE%B6%E9%87%8C%E5%B9%B2%E5%87%80%E5%BE%97%E6%B2%A1%E6%9C%89%E4%B8%80%E6%A0%B9%E5%A4%B4%E5%8F%91%23) `318.1K 🔥` `NEW`
1. [新娘提1341次分手新郎回1342次不行](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E6%8F%901341%E6%AC%A1%E5%88%86%E6%89%8B%E6%96%B0%E9%83%8E%E5%9B%9E1342%E6%AC%A1%E4%B8%8D%E8%A1%8C%23) `316.1K 🔥` `NEW`
1. [余承东 iPhoneDuo](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%20iPhoneDuo%23) `313.0K 🔥` `NEW`
1. [中方回应黄仁勋重新担任英伟达CEO](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E9%BB%84%E4%BB%81%E5%8B%8B%E9%87%8D%E6%96%B0%E6%8B%85%E4%BB%BB%E8%8B%B1%E4%BC%9F%E8%BE%BECEO%23) `311.0K 🔥` `NEW`
1. [根本装不出有钱人的松弛感](https://s.weibo.com/weibo?q=%23%E6%A0%B9%E6%9C%AC%E8%A3%85%E4%B8%8D%E5%87%BA%E6%9C%89%E9%92%B1%E4%BA%BA%E7%9A%84%E6%9D%BE%E5%BC%9B%E6%84%9F%23) `309.9K 🔥` `NEW`
1. [易烊千玺就这样热脸贴冷屁股](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B0%B1%E8%BF%99%E6%A0%B7%E7%83%AD%E8%84%B8%E8%B4%B4%E5%86%B7%E5%B1%81%E8%82%A1%23) `296.6K 🔥` `NEW`
1. [肝不好的人身上可能有一黄二红三黑](https://s.weibo.com/weibo?q=%23%E8%82%9D%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%BA%BA%E8%BA%AB%E4%B8%8A%E5%8F%AF%E8%83%BD%E6%9C%89%E4%B8%80%E9%BB%84%E4%BA%8C%E7%BA%A2%E4%B8%89%E9%BB%91%23) `295.2K 🔥` `NEW`
1. [无畏直播](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E7%9B%B4%E6%92%AD%23) `287.4K 🔥` `NEW`
1. [润到美国三个月就受不了](https://s.weibo.com/weibo?q=%23%E6%B6%A6%E5%88%B0%E7%BE%8E%E5%9B%BD%E4%B8%89%E4%B8%AA%E6%9C%88%E5%B0%B1%E5%8F%97%E4%B8%8D%E4%BA%86%23) `269.4K 🔥` `NEW`
1. [月亮](https://s.weibo.com/weibo?q=%23%E6%9C%88%E4%BA%AE%23) `253.8K 🔥` `NEW`
1. [米粒也开始爆改伊能静了](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E7%B2%92%E4%B9%9F%E5%BC%80%E5%A7%8B%E7%88%86%E6%94%B9%E4%BC%8A%E8%83%BD%E9%9D%99%E4%BA%86%23) `237.6K 🔥` `NEW`
1. [MateX8大疆互联多机位直播](https://s.weibo.com/weibo?q=%23MateX8%E5%A4%A7%E7%96%86%E4%BA%92%E8%81%94%E5%A4%9A%E6%9C%BA%E4%BD%8D%E7%9B%B4%E6%92%AD%23) `198.0K 🔥` `NEW`
1. [易烊千玺的猫都戴了宠物防丢定位器](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%9A%84%E7%8C%AB%E9%83%BD%E6%88%B4%E4%BA%86%E5%AE%A0%E7%89%A9%E9%98%B2%E4%B8%A2%E5%AE%9A%E4%BD%8D%E5%99%A8%23) `192.2K 🔥` `NEW`
1. [吴彤官宣王牌嘴好严](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A4%E5%AE%98%E5%AE%A3%E7%8E%8B%E7%89%8C%E5%98%B4%E5%A5%BD%E4%B8%A5%23) `188.0K 🔥` `NEW`
1. [电脑背面有小方屏是什么体验](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%84%91%E8%83%8C%E9%9D%A2%E6%9C%89%E5%B0%8F%E6%96%B9%E5%B1%8F%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%93%E9%AA%8C%23) `183.2K 🔥` `NEW`
1. [保安怀疑女子推销强行抢包检查](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%AE%89%E6%80%80%E7%96%91%E5%A5%B3%E5%AD%90%E6%8E%A8%E9%94%80%E5%BC%BA%E8%A1%8C%E6%8A%A2%E5%8C%85%E6%A3%80%E6%9F%A5%23) `182.0K 🔥` `NEW`
1. [黄磊孙莉现在也玩豆角梗了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E5%AD%99%E8%8E%89%E7%8E%B0%E5%9C%A8%E4%B9%9F%E7%8E%A9%E8%B1%86%E8%A7%92%E6%A2%97%E4%BA%86%23) `181.7K 🔥` `NEW`
1. [王子璇不愧是北影校花](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E4%B8%8D%E6%84%A7%E6%98%AF%E5%8C%97%E5%BD%B1%E6%A0%A1%E8%8A%B1%23) `181.3K 🔥` `NEW`
1. [梁洪源元贤珠离婚](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%B4%AA%E6%BA%90%E5%85%83%E8%B4%A4%E7%8F%A0%E7%A6%BB%E5%A9%9A%23) `166.5K 🔥` `NEW`
1. [霉霉被曝高中有三双UGG](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E8%A2%AB%E6%9B%9D%E9%AB%98%E4%B8%AD%E6%9C%89%E4%B8%89%E5%8F%8CUGG%23) `163.5K 🔥` `NEW`
1. [红果短剧都不敢这样编](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E9%83%BD%E4%B8%8D%E6%95%A2%E8%BF%99%E6%A0%B7%E7%BC%96%23) `160.4K 🔥` `NEW`
1. [33伞兵 后会友期观察室](https://s.weibo.com/weibo?q=%2333%E4%BC%9E%E5%85%B5%20%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%A7%82%E5%AF%9F%E5%AE%A4%23) `160.3K 🔥` `NEW`
1. [美队儿子颜值](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%98%9F%E5%84%BF%E5%AD%90%E9%A2%9C%E5%80%BC%23) `160.2K 🔥` `NEW`
1. [浙江卫视一口气官宣10部AI综艺](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%8D%AB%E8%A7%86%E4%B8%80%E5%8F%A3%E6%B0%94%E5%AE%98%E5%AE%A310%E9%83%A8AI%E7%BB%BC%E8%89%BA%23) `160.1K 🔥` `NEW`

Updated at 2026-11-24 18:09:54

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
