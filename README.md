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

1. [巴西醒醒 这是世界杯 (Wake up Brazil, this is the World Cup)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E9%86%92%E9%86%92%20%E8%BF%99%E6%98%AF%E4%B8%96%E7%95%8C%E6%9D%AF%23) `4.6M 🔥` `NEW`
1. [尼克斯VS马刺](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%85%8B%E6%96%AFVS%E9%A9%AC%E5%88%BA%23) `1.2M 🔥` `NEW`
1. [我国加速打造新一代新型电网](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%8A%A0%E9%80%9F%E6%89%93%E9%80%A0%E6%96%B0%E4%B8%80%E4%BB%A3%E6%96%B0%E5%9E%8B%E7%94%B5%E7%BD%91%23) `985.7K 🔥` `NEW`
1. [普通人更要知道生命的真相](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E6%9B%B4%E8%A6%81%E7%9F%A5%E9%81%93%E7%94%9F%E5%91%BD%E7%9A%84%E7%9C%9F%E7%9B%B8%23) `499.6K 🔥` `NEW`
1. [谷爱凌从斯坦福毕业了](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E4%BB%8E%E6%96%AF%E5%9D%A6%E7%A6%8F%E6%AF%95%E4%B8%9A%E4%BA%86%23) `499.6K 🔥` `NEW`
1. [虞书欣的第三部仙侠剧](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9A%84%E7%AC%AC%E4%B8%89%E9%83%A8%E4%BB%99%E4%BE%A0%E5%89%A7%23) `449.5K 🔥` `NEW`
1. [卡塔尔球员绝平后哭了](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E5%A1%94%E5%B0%94%E7%90%83%E5%91%98%E7%BB%9D%E5%B9%B3%E5%90%8E%E5%93%AD%E4%BA%86%23) `448.7K 🔥` `NEW`
1. [巴西首发平均年龄超29岁](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E9%A6%96%E5%8F%91%E5%B9%B3%E5%9D%87%E5%B9%B4%E9%BE%84%E8%B6%8529%E5%B2%81%23) `448.4K 🔥` `NEW`
1. [迪丽热巴手机壳](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `446.7K 🔥` `NEW`
1. [央视播世界杯不播NBA总决赛](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%92%AD%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%8D%E6%92%ADNBA%E6%80%BB%E5%86%B3%E8%B5%9B%23) `445.9K 🔥` `NEW`
1. [姑娘称全国只有两只的LV包在各地出现 (The girl said there are only two LV bags appearing in various places in the country)](https://s.weibo.com/weibo?q=%23%E5%A7%91%E5%A8%98%E7%A7%B0%E5%85%A8%E5%9B%BD%E5%8F%AA%E6%9C%89%E4%B8%A4%E5%8F%AA%E7%9A%84LV%E5%8C%85%E5%9C%A8%E5%90%84%E5%9C%B0%E5%87%BA%E7%8E%B0%23) `445.5K 🔥` `NEW`
1. [内马尔最后一舞](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E6%9C%80%E5%90%8E%E4%B8%80%E8%88%9E%23) `363.8K 🔥` `NEW`
1. [当地回应宝妈考编第一被别人递补](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%9C%B0%E5%9B%9E%E5%BA%94%E5%AE%9D%E5%A6%88%E8%80%83%E7%BC%96%E7%AC%AC%E4%B8%80%E8%A2%AB%E5%88%AB%E4%BA%BA%E9%80%92%E8%A1%A5%23) `360.8K 🔥` `NEW`
1. [1块钱怎么吃到京东外卖](https://s.weibo.com/weibo?q=%231%E5%9D%97%E9%92%B1%E6%80%8E%E4%B9%88%E5%90%83%E5%88%B0%E4%BA%AC%E4%B8%9C%E5%A4%96%E5%8D%96%23) `352.5K 🔥` `NEW`
1. [A股又现重大调整](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8F%88%E7%8E%B0%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%23) `347.9K 🔥` `NEW`
1. [曝长生骨最终男主还是侯明昊](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%95%BF%E7%94%9F%E9%AA%A8%E6%9C%80%E7%BB%88%E7%94%B7%E4%B8%BB%E8%BF%98%E6%98%AF%E4%BE%AF%E6%98%8E%E6%98%8A%23) `278.5K 🔥` `NEW`
1. [中国正在太空布下一盘大棋](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%AD%A3%E5%9C%A8%E5%A4%AA%E7%A9%BA%E5%B8%83%E4%B8%8B%E4%B8%80%E7%9B%98%E5%A4%A7%E6%A3%8B%23) `278.1K 🔥` `NEW`
1. [海地vs苏格兰](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%9C%B0vs%E8%8B%8F%E6%A0%BC%E5%85%B0%23) `274.9K 🔥` `NEW`
1. [马刺首节23比13](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BA%E9%A6%96%E8%8A%8223%E6%AF%9413%23) `272.4K 🔥` `NEW`
1. [水果姐Lisa世界杯合照](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%9E%9C%E5%A7%90Lisa%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%88%E7%85%A7%23) `271.2K 🔥` `NEW`
1. [好妹妹后援会解散群聊 (Good Sister Support Club disbands group chat)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A6%B9%E5%A6%B9%E5%90%8E%E6%8F%B4%E4%BC%9A%E8%A7%A3%E6%95%A3%E7%BE%A4%E8%81%8A%23) `269.6K 🔥` `NEW`
1. [管虎拍了辛芷蕾一下示意别被挡住](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E8%99%8E%E6%8B%8D%E4%BA%86%E8%BE%9B%E8%8A%B7%E8%95%BE%E4%B8%80%E4%B8%8B%E7%A4%BA%E6%84%8F%E5%88%AB%E8%A2%AB%E6%8C%A1%E4%BD%8F%23) `267.0K 🔥` `NEW`
1. [海地半场0比1苏格兰](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%9C%B0%E5%8D%8A%E5%9C%BA0%E6%AF%941%E8%8B%8F%E6%A0%BC%E5%85%B0%23) `265.8K 🔥` `NEW`
1. [渝见小面老板回应遇见小面撤诉](https://s.weibo.com/weibo?q=%23%E6%B8%9D%E8%A7%81%E5%B0%8F%E9%9D%A2%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%E9%81%87%E8%A7%81%E5%B0%8F%E9%9D%A2%E6%92%A4%E8%AF%89%23) `264.2K 🔥` `NEW`
1. [Angelababy天鹅塑](https://s.weibo.com/weibo?q=%23Angelababy%E5%A4%A9%E9%B9%85%E5%A1%91%23) `261.8K 🔥` `NEW`
1. [劣质迪卡侬日销千单](https://s.weibo.com/weibo?q=%23%E5%8A%A3%E8%B4%A8%E8%BF%AA%E5%8D%A1%E4%BE%AC%E6%97%A5%E9%94%80%E5%8D%83%E5%8D%95%23) `258.6K 🔥` `NEW`
1. [梁朝伟小心翼翼地出错](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E5%B0%8F%E5%BF%83%E7%BF%BC%E7%BF%BC%E5%9C%B0%E5%87%BA%E9%94%99%23) `257.2K 🔥` `NEW`
1. [雪饼猴无限超越班冠军](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E9%A5%BC%E7%8C%B4%E6%97%A0%E9%99%90%E8%B6%85%E8%B6%8A%E7%8F%AD%E5%86%A0%E5%86%9B%23) `254.8K 🔥` `NEW`
1. [摩洛哥场上11名球员均非本国出生](https://s.weibo.com/weibo?q=%23%E6%91%A9%E6%B4%9B%E5%93%A5%E5%9C%BA%E4%B8%8A11%E5%90%8D%E7%90%83%E5%91%98%E5%9D%87%E9%9D%9E%E6%9C%AC%E5%9B%BD%E5%87%BA%E7%94%9F%23) `251.3K 🔥` `NEW`
1. [张凌赫一句话引发全场共鸣](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%80%E5%8F%A5%E8%AF%9D%E5%BC%95%E5%8F%91%E5%85%A8%E5%9C%BA%E5%85%B1%E9%B8%A3%23) `249.9K 🔥` `NEW`
1. [学霸造数百万假钞大部分能通过验钞机 (Most of the millions of counterfeit banknotes made by academic masters can pass the banknote detector)](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E9%9C%B8%E9%80%A0%E6%95%B0%E7%99%BE%E4%B8%87%E5%81%87%E9%92%9E%E5%A4%A7%E9%83%A8%E5%88%86%E8%83%BD%E9%80%9A%E8%BF%87%E9%AA%8C%E9%92%9E%E6%9C%BA%23) `248.6K 🔥` `NEW`
1. [老人发病电梯停运9天被抬下12楼](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%8F%91%E7%97%85%E7%94%B5%E6%A2%AF%E5%81%9C%E8%BF%909%E5%A4%A9%E8%A2%AB%E6%8A%AC%E4%B8%8B12%E6%A5%BC%23) `246.8K 🔥` `NEW`
1. [宋亚轩pk输给了单依纯](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9pk%E8%BE%93%E7%BB%99%E4%BA%86%E5%8D%95%E4%BE%9D%E7%BA%AF%23) `244.2K 🔥` `NEW`
1. [内马尔替补席观战金饰抢眼](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E6%9B%BF%E8%A1%A5%E5%B8%AD%E8%A7%82%E6%88%98%E9%87%91%E9%A5%B0%E6%8A%A2%E7%9C%BC%23) `242.3K 🔥` `NEW`
1. [刘耀文我也舀不到哥哥](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%88%91%E4%B9%9F%E8%88%80%E4%B8%8D%E5%88%B0%E5%93%A5%E5%93%A5%23) `240.2K 🔥` `NEW`
1. [特朗普称美伊协议14日签署](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E4%BC%8A%E5%8D%8F%E8%AE%AE14%E6%97%A5%E7%AD%BE%E7%BD%B2%23) `239.1K 🔥` `NEW`
1. [孔雪儿不热嘛](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E4%B8%8D%E7%83%AD%E5%98%9B%23) `236.4K 🔥` `NEW`
1. [京东外卖大牌请客狂撒千万份 (JD.com’s big-name takeout brands are selling out tens of millions of servings)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%A4%96%E5%8D%96%E5%A4%A7%E7%89%8C%E8%AF%B7%E5%AE%A2%E7%8B%82%E6%92%92%E5%8D%83%E4%B8%87%E4%BB%BD%23) `665.2K 🔥` `+109%`
1. [虚岁的唯一作用就是给医生添乱 (The only purpose of missing the age is to cause trouble to the doctor)](https://s.weibo.com/weibo?q=%23%E8%99%9A%E5%B2%81%E7%9A%84%E5%94%AF%E4%B8%80%E4%BD%9C%E7%94%A8%E5%B0%B1%E6%98%AF%E7%BB%99%E5%8C%BB%E7%94%9F%E6%B7%BB%E4%B9%B1%23) `580.0K 🔥` `+188%`
1. [王天辰郭晓婷新剧导演黄天仁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E9%83%AD%E6%99%93%E5%A9%B7%E6%96%B0%E5%89%A7%E5%AF%BC%E6%BC%94%E9%BB%84%E5%A4%A9%E4%BB%81%23) `496.5K 🔥` `+144%`
1. [女子收到9万LV包结果笑容逐渐消失](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%94%B6%E5%88%B09%E4%B8%87LV%E5%8C%85%E7%BB%93%E6%9E%9C%E7%AC%91%E5%AE%B9%E9%80%90%E6%B8%90%E6%B6%88%E5%A4%B1%23) `389.7K 🔥` `+97%`
1. [迪丽热巴恋情风波后首现身](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%81%8B%E6%83%85%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E7%8E%B0%E8%BA%AB%23) `276.1K 🔥` `+41%`
1. [歧视韩国女球迷男子身份曝光 (Identity of man who discriminates against Korean female fans exposed)](https://s.weibo.com/weibo?q=%23%E6%AD%A7%E8%A7%86%E9%9F%A9%E5%9B%BD%E5%A5%B3%E7%90%83%E8%BF%B7%E7%94%B7%E5%AD%90%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `268.5K 🔥` `+48%`
1. [疑似陈红点赞黄景瑜陈飞宇对比博](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E9%99%88%E7%BA%A2%E7%82%B9%E8%B5%9E%E9%BB%84%E6%99%AF%E7%91%9C%E9%99%88%E9%A3%9E%E5%AE%87%E5%AF%B9%E6%AF%94%E5%8D%9A%23) `263.1K 🔥` `+34%`
1. [以为是食材结果是员工](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%98%AF%E9%A3%9F%E6%9D%90%E7%BB%93%E6%9E%9C%E6%98%AF%E5%91%98%E5%B7%A5%23) `252.8K 🔥` `+27%`
1. [哈登涉嫌非法携带武器被捕](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%99%BB%E6%B6%89%E5%AB%8C%E9%9D%9E%E6%B3%95%E6%90%BA%E5%B8%A6%E6%AD%A6%E5%99%A8%E8%A2%AB%E6%8D%95%23) `260.4K 🔥`
1. [巴西选内马尔去世界杯是正确决定吗](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E9%80%89%E5%86%85%E9%A9%AC%E5%B0%94%E5%8E%BB%E4%B8%96%E7%95%8C%E6%9D%AF%E6%98%AF%E6%AD%A3%E7%A1%AE%E5%86%B3%E5%AE%9A%E5%90%97%23) `256.0K 🔥`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `247.0K 🔥`
1. [考编第一被人递补维权后岗位取消 (The position that ranked first in the examination was canceled after safeguarding rights.)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%BC%96%E7%AC%AC%E4%B8%80%E8%A2%AB%E4%BA%BA%E9%80%92%E8%A1%A5%E7%BB%B4%E6%9D%83%E5%90%8E%E5%B2%97%E4%BD%8D%E5%8F%96%E6%B6%88%23) `274.0K 🔥` `-52%`
1. [巴西vs摩洛哥 (Brazil vs Morocco)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BFvs%E6%91%A9%E6%B4%9B%E5%93%A5%23) `243.9K 🔥` `-88%`
1. [巴西1比1摩洛哥 (Brazil 1-1 Morocco)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF1%E6%AF%941%E6%91%A9%E6%B4%9B%E5%93%A5%23) `238.3K 🔥` `-74%`

Updated at 2026-06-14 10:40:07

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
