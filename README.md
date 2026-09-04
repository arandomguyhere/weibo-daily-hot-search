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

1. [氯雷他定和西替利嗪选哪个好](https://s.weibo.com/weibo?q=%23%E6%B0%AF%E9%9B%B7%E4%BB%96%E5%AE%9A%E5%92%8C%E8%A5%BF%E6%9B%BF%E5%88%A9%E5%97%AA%E9%80%89%E5%93%AA%E4%B8%AA%E5%A5%BD%23) `410.1K 🔥` `NEW`
1. [皇马 姆巴佩](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%20%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `126.1K 🔥` `NEW`
1. [AI编程时代最黑暗的一晚](https://s.weibo.com/weibo?q=%23AI%E7%BC%96%E7%A8%8B%E6%97%B6%E4%BB%A3%E6%9C%80%E9%BB%91%E6%9A%97%E7%9A%84%E4%B8%80%E6%99%9A%23) `89.1K 🔥` `NEW`
1. [出锅前放盐才是隐藏控盐高手](https://s.weibo.com/weibo?q=%23%E5%87%BA%E9%94%85%E5%89%8D%E6%94%BE%E7%9B%90%E6%89%8D%E6%98%AF%E9%9A%90%E8%97%8F%E6%8E%A7%E7%9B%90%E9%AB%98%E6%89%8B%23) `87.3K 🔥` `NEW`
1. [那么年轻就患癌 还能不能谈恋爱](https://s.weibo.com/weibo?q=%23%E9%82%A3%E4%B9%88%E5%B9%B4%E8%BD%BB%E5%B0%B1%E6%82%A3%E7%99%8C%20%E8%BF%98%E8%83%BD%E4%B8%8D%E8%83%BD%E8%B0%88%E6%81%8B%E7%88%B1%23) `69.3K 🔥` `NEW`
1. [印尼一工厂爆炸楼体中部被拦腰炸开](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC%E4%B8%80%E5%B7%A5%E5%8E%82%E7%88%86%E7%82%B8%E6%A5%BC%E4%BD%93%E4%B8%AD%E9%83%A8%E8%A2%AB%E6%8B%A6%E8%85%B0%E7%82%B8%E5%BC%80%23) `69.3K 🔥` `NEW`
1. [全球变暖反而让寒潮更猛](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E5%8F%98%E6%9A%96%E5%8F%8D%E8%80%8C%E8%AE%A9%E5%AF%92%E6%BD%AE%E6%9B%B4%E7%8C%9B%23) `67.1K 🔥` `NEW`
1. [35岁以后存肌肉就是最好的抗衰](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E4%BB%A5%E5%90%8E%E5%AD%98%E8%82%8C%E8%82%89%E5%B0%B1%E6%98%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E6%8A%97%E8%A1%B0%23) `66.6K 🔥` `NEW`
1. [胡军李乃文对儿子女儿的区别](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%86%9B%E6%9D%8E%E4%B9%83%E6%96%87%E5%AF%B9%E5%84%BF%E5%AD%90%E5%A5%B3%E5%84%BF%E7%9A%84%E5%8C%BA%E5%88%AB%23) `59.0K 🔥` `NEW`
1. [为什么人上了年纪脸会变宽](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BA%BA%E4%B8%8A%E4%BA%86%E5%B9%B4%E7%BA%AA%E8%84%B8%E4%BC%9A%E5%8F%98%E5%AE%BD%23) `56.3K 🔥` `NEW`
1. [郭涛儿子石头入学北电国际班](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%B6%9B%E5%84%BF%E5%AD%90%E7%9F%B3%E5%A4%B4%E5%85%A5%E5%AD%A6%E5%8C%97%E7%94%B5%E5%9B%BD%E9%99%85%E7%8F%AD%23) `52.7K 🔥` `NEW`
1. [男子被打持刀反抗却遭压制窒息而死](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E6%89%93%E6%8C%81%E5%88%80%E5%8F%8D%E6%8A%97%E5%8D%B4%E9%81%AD%E5%8E%8B%E5%88%B6%E7%AA%92%E6%81%AF%E8%80%8C%E6%AD%BB%23) `52.5K 🔥` `NEW`
1. [杨博文发了70分钟的vlog](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E5%8F%91%E4%BA%8670%E5%88%86%E9%92%9F%E7%9A%84vlog%23) `50.8K 🔥` `NEW`
1. [2岁男童把家中百草枯当饮料喝下](https://s.weibo.com/weibo?q=%232%E5%B2%81%E7%94%B7%E7%AB%A5%E6%8A%8A%E5%AE%B6%E4%B8%AD%E7%99%BE%E8%8D%89%E6%9E%AF%E5%BD%93%E9%A5%AE%E6%96%99%E5%96%9D%E4%B8%8B%23) `772.1K 🔥` `+1608%`
1. [日本请求俄拆纪念碑菊花纹章遭拒](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%AF%B7%E6%B1%82%E4%BF%84%E6%8B%86%E7%BA%AA%E5%BF%B5%E7%A2%91%E8%8F%8A%E8%8A%B1%E7%BA%B9%E7%AB%A0%E9%81%AD%E6%8B%92%23) `547.6K 🔥` `+425%`
1. [全国多地迎来丰收季](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%A4%9A%E5%9C%B0%E8%BF%8E%E6%9D%A5%E4%B8%B0%E6%94%B6%E5%AD%A3%23) `452.2K 🔥` `+321%`
1. [为什么现在这么流行耳夹式耳机](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E8%BF%99%E4%B9%88%E6%B5%81%E8%A1%8C%E8%80%B3%E5%A4%B9%E5%BC%8F%E8%80%B3%E6%9C%BA%23) `328.3K 🔥` `+76%`
1. [极限挑战 重拍](https://s.weibo.com/weibo?q=%23%E6%9E%81%E9%99%90%E6%8C%91%E6%88%98%20%E9%87%8D%E6%8B%8D%23) `312.0K 🔥` `+132%`
1. [张雪机车法国站排位赛包揽前二](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%B3%95%E5%9B%BD%E7%AB%99%E6%8E%92%E4%BD%8D%E8%B5%9B%E5%8C%85%E6%8F%BD%E5%89%8D%E4%BA%8C%23) `212.7K 🔥` `+207%`
1. [这是真正凭本事吃饭的行业](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E7%9C%9F%E6%AD%A3%E5%87%AD%E6%9C%AC%E4%BA%8B%E5%90%83%E9%A5%AD%E7%9A%84%E8%A1%8C%E4%B8%9A%23) `205.2K 🔥` `+119%`
1. [莆田暴雨亲历者饿得受不了](https://s.weibo.com/weibo?q=%23%E8%8E%86%E7%94%B0%E6%9A%B4%E9%9B%A8%E4%BA%B2%E5%8E%86%E8%80%85%E9%A5%BF%E5%BE%97%E5%8F%97%E4%B8%8D%E4%BA%86%23) `113.9K 🔥` `+71%`
1. [披哥二公排名](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E4%BA%8C%E5%85%AC%E6%8E%92%E5%90%8D%23) `97.6K 🔥` `+68%`
1. [王楚钦退赛1000卫冕积分即将清零](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%80%80%E8%B5%9B1000%E5%8D%AB%E5%86%95%E7%A7%AF%E5%88%86%E5%8D%B3%E5%B0%86%E6%B8%85%E9%9B%B6%23) `97.3K 🔥` `+117%`
1. [2015湖南台综艺有多神](https://s.weibo.com/weibo?q=%232015%E6%B9%96%E5%8D%97%E5%8F%B0%E7%BB%BC%E8%89%BA%E6%9C%89%E5%A4%9A%E7%A5%9E%23) `97.0K 🔥` `+187%`
1. [寿司郎给孩子接小便的家长回应](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%E7%BB%99%E5%AD%A9%E5%AD%90%E6%8E%A5%E5%B0%8F%E4%BE%BF%E7%9A%84%E5%AE%B6%E9%95%BF%E5%9B%9E%E5%BA%94%23) `96.7K 🔥` `+114%`
1. [上海到成都被订硬座还打卡女子拒出差](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%88%B0%E6%88%90%E9%83%BD%E8%A2%AB%E8%AE%A2%E7%A1%AC%E5%BA%A7%E8%BF%98%E6%89%93%E5%8D%A1%E5%A5%B3%E5%AD%90%E6%8B%92%E5%87%BA%E5%B7%AE%23) `96.0K 🔥` `+220%`
1. [多方回应18岁女孩疑被已婚男友打死](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%9418%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%96%91%E8%A2%AB%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%8F%8B%E6%89%93%E6%AD%BB%23) `95.4K 🔥` `+314%`
1. [28岁的人生应该是什么样呢](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E7%9A%84%E4%BA%BA%E7%94%9F%E5%BA%94%E8%AF%A5%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E5%91%A2%23) `90.9K 🔥` `+156%`
1. [将40岁的身体恢复到25岁的方法](https://s.weibo.com/weibo?q=%23%E5%B0%8640%E5%B2%81%E7%9A%84%E8%BA%AB%E4%BD%93%E6%81%A2%E5%A4%8D%E5%88%B025%E5%B2%81%E7%9A%84%E6%96%B9%E6%B3%95%23) `88.8K 🔥` `+197%`
1. [出轨跟纸片人啥关系](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A8%E8%B7%9F%E7%BA%B8%E7%89%87%E4%BA%BA%E5%95%A5%E5%85%B3%E7%B3%BB%23) `86.5K 🔥` `+192%`
1. [贝蒂斯VS皇马](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E8%92%82%E6%96%AFVS%E7%9A%87%E9%A9%AC%23) `86.3K 🔥` `+193%`
1. [孙千听到今天星期五的反应](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%90%AC%E5%88%B0%E4%BB%8A%E5%A4%A9%E6%98%9F%E6%9C%9F%E4%BA%94%E7%9A%84%E5%8F%8D%E5%BA%94%23) `82.6K 🔥` `+194%`
1. [教育部回应教师不敢管学生](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E6%95%99%E5%B8%88%E4%B8%8D%E6%95%A2%E7%AE%A1%E5%AD%A6%E7%94%9F%23) `76.3K 🔥` `+215%`
1. [松岛辉空或将登顶世界第一](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E6%88%96%E5%B0%86%E7%99%BB%E9%A1%B6%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23) `72.8K 🔥` `+115%`
1. [花少2嘉宾干活表](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E5%98%89%E5%AE%BE%E5%B9%B2%E6%B4%BB%E8%A1%A8%23) `69.8K 🔥` `+38%`
1. [俄罗斯建粉碎大日本帝国纪念碑](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%BB%BA%E7%B2%89%E7%A2%8E%E5%A4%A7%E6%97%A5%E6%9C%AC%E5%B8%9D%E5%9B%BD%E7%BA%AA%E5%BF%B5%E7%A2%91%23) `68.4K 🔥` `+172%`
1. [原来高定是直接把人请到总部量身定制](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%AB%98%E5%AE%9A%E6%98%AF%E7%9B%B4%E6%8E%A5%E6%8A%8A%E4%BA%BA%E8%AF%B7%E5%88%B0%E6%80%BB%E9%83%A8%E9%87%8F%E8%BA%AB%E5%AE%9A%E5%88%B6%23) `67.9K 🔥` `+171%`
1. [曹骏回应难听](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%9B%9E%E5%BA%94%E9%9A%BE%E5%90%AC%23) `54.5K 🔥` `+136%`
1. [要你管 难听](https://s.weibo.com/weibo?q=%23%E8%A6%81%E4%BD%A0%E7%AE%A1%20%E9%9A%BE%E5%90%AC%23) `54.1K 🔥` `+116%`
1. [配型非亲生女儿称报警基因检测全没用](https://s.weibo.com/weibo?q=%23%E9%85%8D%E5%9E%8B%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B3%E5%84%BF%E7%A7%B0%E6%8A%A5%E8%AD%A6%E5%9F%BA%E5%9B%A0%E6%A3%80%E6%B5%8B%E5%85%A8%E6%B2%A1%E7%94%A8%23) `52.8K 🔥` `+110%`
1. [郑钦文vs凯斯比赛时间](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%87%AF%E6%96%AF%E6%AF%94%E8%B5%9B%E6%97%B6%E9%97%B4%23) `48.9K 🔥` `+59%`
1. [TES iG首发名单](https://s.weibo.com/weibo?q=%23TES%20iG%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95%23) `47.2K 🔥` `+122%`
1. [中国女篮vs美国女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEvs%E7%BE%8E%E5%9B%BD%E5%A5%B3%E7%AF%AE%23) `45.1K 🔥` `+71%`
1. [印度2只流浪狗吓退性侵者](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A62%E5%8F%AA%E6%B5%81%E6%B5%AA%E7%8B%97%E5%90%93%E9%80%80%E6%80%A7%E4%BE%B5%E8%80%85%23) `45.0K 🔥` `+80%`
1. [同花顺](https://s.weibo.com/weibo?q=%23%E5%90%8C%E8%8A%B1%E9%A1%BA%23) `44.4K 🔥` `+74%`
1. [特朗普称美联储应该降息](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E8%81%94%E5%82%A8%E5%BA%94%E8%AF%A5%E9%99%8D%E6%81%AF%23) `90.5K 🔥`
1. [萨巴伦卡晋级美网16强](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E6%99%8B%E7%BA%A7%E7%BE%8E%E7%BD%9116%E5%BC%BA%23) `46.5K 🔥`
1. [刘雯评论区](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E8%AF%84%E8%AE%BA%E5%8C%BA%23) `97.5K 🔥` `-44%`
1. [炎亚纶很想上花少](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E5%BE%88%E6%83%B3%E4%B8%8A%E8%8A%B1%E5%B0%91%23) `96.8K 🔥` `-44%`
1. [宋雨琦瘦成啥了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%98%A6%E6%88%90%E5%95%A5%E4%BA%86%23) `67.1K 🔥` `-52%`
1. [配型发现非亲生女儿称妈妈常问我死了吗](https://s.weibo.com/weibo?q=%23%E9%85%8D%E5%9E%8B%E5%8F%91%E7%8E%B0%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B3%E5%84%BF%E7%A7%B0%E5%A6%88%E5%A6%88%E5%B8%B8%E9%97%AE%E6%88%91%E6%AD%BB%E4%BA%86%E5%90%97%23) `46.0K 🔥` `-61%`

Updated at 2026-09-05 07:18:53

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
