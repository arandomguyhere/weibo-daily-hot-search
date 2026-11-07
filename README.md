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

1. [Faker说很可惜BLG在半决赛遇到T1](https://s.weibo.com/weibo?q=%23Faker%E8%AF%B4%E5%BE%88%E5%8F%AF%E6%83%9CBLG%E5%9C%A8%E5%8D%8A%E5%86%B3%E8%B5%9B%E9%81%87%E5%88%B0T1%23) `1.2M 🔥` `NEW`
1. [芒果文案组来了一群天才](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%87%E6%A1%88%E7%BB%84%E6%9D%A5%E4%BA%86%E4%B8%80%E7%BE%A4%E5%A4%A9%E6%89%8D%23) `1.0M 🔥` `NEW`
1. [鹏城花开共赴APEC之约](https://s.weibo.com/weibo?q=%23%E9%B9%8F%E5%9F%8E%E8%8A%B1%E5%BC%80%E5%85%B1%E8%B5%B4APEC%E4%B9%8B%E7%BA%A6%23) `863.1K 🔥` `NEW`
1. [黄晓明喊你上京东领美食大赛5折福利](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%96%8A%E4%BD%A0%E4%B8%8A%E4%BA%AC%E4%B8%9C%E9%A2%86%E7%BE%8E%E9%A3%9F%E5%A4%A7%E8%B5%9B5%E6%8A%98%E7%A6%8F%E5%88%A9%23) `816.8K 🔥` `NEW`
1. [收1.98万误转账约派出所归还却遭起诉](https://s.weibo.com/weibo?q=%23%E6%94%B61.98%E4%B8%87%E8%AF%AF%E8%BD%AC%E8%B4%A6%E7%BA%A6%E6%B4%BE%E5%87%BA%E6%89%80%E5%BD%92%E8%BF%98%E5%8D%B4%E9%81%AD%E8%B5%B7%E8%AF%89%23) `764.5K 🔥` `NEW`
1. [男护士趁医生离场两次猥亵14岁少女](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%8A%A4%E5%A3%AB%E8%B6%81%E5%8C%BB%E7%94%9F%E7%A6%BB%E5%9C%BA%E4%B8%A4%E6%AC%A1%E7%8C%A5%E4%BA%B514%E5%B2%81%E5%B0%91%E5%A5%B3%23) `446.4K 🔥` `NEW`
1. [T1下手太重了](https://s.weibo.com/weibo?q=%23T1%E4%B8%8B%E6%89%8B%E5%A4%AA%E9%87%8D%E4%BA%86%23) `396.7K 🔥` `NEW`
1. [聪明人也需防范针对性诈骗套路](https://s.weibo.com/weibo?q=%23%E8%81%AA%E6%98%8E%E4%BA%BA%E4%B9%9F%E9%9C%80%E9%98%B2%E8%8C%83%E9%92%88%E5%AF%B9%E6%80%A7%E8%AF%88%E9%AA%97%E5%A5%97%E8%B7%AF%23) `346.3K 🔥` `NEW`
1. [体检空腹不等于滴水不沾](https://s.weibo.com/weibo?q=%23%E4%BD%93%E6%A3%80%E7%A9%BA%E8%85%B9%E4%B8%8D%E7%AD%89%E4%BA%8E%E6%BB%B4%E6%B0%B4%E4%B8%8D%E6%B2%BE%23) `325.7K 🔥` `NEW`
1. [S16半决赛将上演2场中韩大战](https://s.weibo.com/weibo?q=%23S16%E5%8D%8A%E5%86%B3%E8%B5%9B%E5%B0%86%E4%B8%8A%E6%BC%942%E5%9C%BA%E4%B8%AD%E9%9F%A9%E5%A4%A7%E6%88%98%23) `263.0K 🔥` `NEW`
1. [原来许飞为厉娜花了这么多心思](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%AE%B8%E9%A3%9E%E4%B8%BA%E5%8E%89%E5%A8%9C%E8%8A%B1%E4%BA%86%E8%BF%99%E4%B9%88%E5%A4%9A%E5%BF%83%E6%80%9D%23) `231.8K 🔥` `NEW`
1. [倪萍怎么了](https://s.weibo.com/weibo?q=%23%E5%80%AA%E8%90%8D%E6%80%8E%E4%B9%88%E4%BA%86%23) `226.5K 🔥` `NEW`
1. [乔欣上班几年发现回家享福更适合自己](https://s.weibo.com/weibo?q=%23%E4%B9%94%E6%AC%A3%E4%B8%8A%E7%8F%AD%E5%87%A0%E5%B9%B4%E5%8F%91%E7%8E%B0%E5%9B%9E%E5%AE%B6%E4%BA%AB%E7%A6%8F%E6%9B%B4%E9%80%82%E5%90%88%E8%87%AA%E5%B7%B1%23) `224.0K 🔥` `NEW`
1. [NBA回应波尔津吉斯发声](https://s.weibo.com/weibo?q=%23NBA%E5%9B%9E%E5%BA%94%E6%B3%A2%E5%B0%94%E6%B4%A5%E5%90%89%E6%96%AF%E5%8F%91%E5%A3%B0%23) `218.6K 🔥` `NEW`
1. [张萌曾拒绝最佳女制片人奖](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E6%9B%BE%E6%8B%92%E7%BB%9D%E6%9C%80%E4%BD%B3%E5%A5%B3%E5%88%B6%E7%89%87%E4%BA%BA%E5%A5%96%23) `216.1K 🔥` `NEW`
1. [马天宇说不要在一句话后面加那人名字](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%AF%B4%E4%B8%8D%E8%A6%81%E5%9C%A8%E4%B8%80%E5%8F%A5%E8%AF%9D%E5%90%8E%E9%9D%A2%E5%8A%A0%E9%82%A3%E4%BA%BA%E5%90%8D%E5%AD%97%23) `213.6K 🔥` `NEW`
1. [T1战胜KC](https://s.weibo.com/weibo?q=%23T1%E6%88%98%E8%83%9CKC%23) `209.3K 🔥` `NEW`
1. [波尔津吉斯发声](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E5%B0%94%E6%B4%A5%E5%90%89%E6%96%AF%E5%8F%91%E5%A3%B0%23) `208.0K 🔥` `NEW`
1. [台湾知名寺庙禅房外埋800公斤金银](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E7%9F%A5%E5%90%8D%E5%AF%BA%E5%BA%99%E7%A6%85%E6%88%BF%E5%A4%96%E5%9F%8B800%E5%85%AC%E6%96%A4%E9%87%91%E9%93%B6%23) `205.6K 🔥` `NEW`
1. [曝iPhone20按键调整](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone20%E6%8C%89%E9%94%AE%E8%B0%83%E6%95%B4%23) `205.5K 🔥` `NEW`
1. [天霸官抖关注了白小纯但没关注青稚](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E9%9C%B8%E5%AE%98%E6%8A%96%E5%85%B3%E6%B3%A8%E4%BA%86%E7%99%BD%E5%B0%8F%E7%BA%AF%E4%BD%86%E6%B2%A1%E5%85%B3%E6%B3%A8%E9%9D%92%E7%A8%9A%23) `205.2K 🔥` `NEW`
1. [向太说家里3个小孩2个都想躺平](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%AE%B6%E9%87%8C3%E4%B8%AA%E5%B0%8F%E5%AD%A92%E4%B8%AA%E9%83%BD%E6%83%B3%E8%BA%BA%E5%B9%B3%23) `204.3K 🔥` `NEW`
1. [纯稚史诗级吵架](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%A8%9A%E5%8F%B2%E8%AF%97%E7%BA%A7%E5%90%B5%E6%9E%B6%23) `204.2K 🔥` `NEW`
1. [伞兵称没法跟青稚玩](https://s.weibo.com/weibo?q=%23%E4%BC%9E%E5%85%B5%E7%A7%B0%E6%B2%A1%E6%B3%95%E8%B7%9F%E9%9D%92%E7%A8%9A%E7%8E%A9%23) `204.0K 🔥` `NEW`
1. [云南剧组拍戏发生意外](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E5%89%A7%E7%BB%84%E6%8B%8D%E6%88%8F%E5%8F%91%E7%94%9F%E6%84%8F%E5%A4%96%23) `203.9K 🔥` `NEW`
1. [梅根父亲存2个仓库儿童性虐待材料](https://s.weibo.com/weibo?q=%23%E6%A2%85%E6%A0%B9%E7%88%B6%E4%BA%B2%E5%AD%982%E4%B8%AA%E4%BB%93%E5%BA%93%E5%84%BF%E7%AB%A5%E6%80%A7%E8%99%90%E5%BE%85%E6%9D%90%E6%96%99%23) `203.7K 🔥` `NEW`
1. [康辉深圳拍视频几乎无人围观](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E8%BE%89%E6%B7%B1%E5%9C%B3%E6%8B%8D%E8%A7%86%E9%A2%91%E5%87%A0%E4%B9%8E%E6%97%A0%E4%BA%BA%E5%9B%B4%E8%A7%82%23) `203.6K 🔥` `NEW`
1. [TF四代台历](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%8F%B0%E5%8E%86%23) `203.5K 🔥` `NEW`
1. [6岁娃吃山东饭30天长高1.3cm胖2斤](https://s.weibo.com/weibo?q=%236%E5%B2%81%E5%A8%83%E5%90%83%E5%B1%B1%E4%B8%9C%E9%A5%AD30%E5%A4%A9%E9%95%BF%E9%AB%981.3cm%E8%83%962%E6%96%A4%23) `195.8K 🔥` `NEW`
1. [赵丽颖的业内口碑](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%9A%84%E4%B8%9A%E5%86%85%E5%8F%A3%E7%A2%91%23) `193.9K 🔥` `NEW`
1. [乔欣去年5月发的视频孕肚好明显](https://s.weibo.com/weibo?q=%23%E4%B9%94%E6%AC%A3%E5%8E%BB%E5%B9%B45%E6%9C%88%E5%8F%91%E7%9A%84%E8%A7%86%E9%A2%91%E5%AD%95%E8%82%9A%E5%A5%BD%E6%98%8E%E6%98%BE%23) `189.0K 🔥` `NEW`
1. [Tim说上大学才看到家里的大房子](https://s.weibo.com/weibo?q=%23Tim%E8%AF%B4%E4%B8%8A%E5%A4%A7%E5%AD%A6%E6%89%8D%E7%9C%8B%E5%88%B0%E5%AE%B6%E9%87%8C%E7%9A%84%E5%A4%A7%E6%88%BF%E5%AD%90%23) `182.0K 🔥` `NEW`
1. [白小纯 青稚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E9%9D%92%E7%A8%9A%23) `179.0K 🔥` `NEW`
1. [汪苏泷演唱会路人缘](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%E8%B7%AF%E4%BA%BA%E7%BC%98%23) `171.8K 🔥` `NEW`
1. [C罗帽子戏法绝平西班牙](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%B8%BD%E5%AD%90%E6%88%8F%E6%B3%95%E7%BB%9D%E5%B9%B3%E8%A5%BF%E7%8F%AD%E7%89%99%23) `160.2K 🔥` `NEW`
1. [赵丽颖金鸡奖有多闪光](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%87%91%E9%B8%A1%E5%A5%96%E6%9C%89%E5%A4%9A%E9%97%AA%E5%85%89%23) `159.9K 🔥` `NEW`
1. [车站称AED只有志愿者会用](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E7%AB%99%E7%A7%B0AED%E5%8F%AA%E6%9C%89%E5%BF%97%E6%84%BF%E8%80%85%E4%BC%9A%E7%94%A8%23) `159.6K 🔥` `NEW`
1. [文吉儿3万写序费仅退款梗](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF3%E4%B8%87%E5%86%99%E5%BA%8F%E8%B4%B9%E4%BB%85%E9%80%80%E6%AC%BE%E6%A2%97%23) `151.0K 🔥` `NEW`
1. [今天是太阳雨的剧综已经吊打所有恋综了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E6%98%AF%E5%A4%AA%E9%98%B3%E9%9B%A8%E7%9A%84%E5%89%A7%E7%BB%BC%E5%B7%B2%E7%BB%8F%E5%90%8A%E6%89%93%E6%89%80%E6%9C%89%E6%81%8B%E7%BB%BC%E4%BA%86%23) `149.7K 🔥` `NEW`
1. [特朗普任命新白宫办公厅主任](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%BB%BB%E5%91%BD%E6%96%B0%E7%99%BD%E5%AE%AB%E5%8A%9E%E5%85%AC%E5%8E%85%E4%B8%BB%E4%BB%BB%23) `149.4K 🔥` `NEW`
1. [老芒果后期真有高手在](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%8A%92%E6%9E%9C%E5%90%8E%E6%9C%9F%E7%9C%9F%E6%9C%89%E9%AB%98%E6%89%8B%E5%9C%A8%23) `147.8K 🔥` `NEW`
1. [王子璇没想到因为朋友矛盾火了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%B2%A1%E6%83%B3%E5%88%B0%E5%9B%A0%E4%B8%BA%E6%9C%8B%E5%8F%8B%E7%9F%9B%E7%9B%BE%E7%81%AB%E4%BA%86%23) `141.4K 🔥` `NEW`
1. [尚公主云包场](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E4%BA%91%E5%8C%85%E5%9C%BA%23) `136.7K 🔥` `NEW`
1. [中国空间站将迎来1名外籍航天员](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A9%BA%E9%97%B4%E7%AB%99%E5%B0%86%E8%BF%8E%E6%9D%A51%E5%90%8D%E5%A4%96%E7%B1%8D%E8%88%AA%E5%A4%A9%E5%91%98%23) `135.5K 🔥` `NEW`
1. [张泉灵语言系统史诗级削弱](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%89%E7%81%B5%E8%AF%AD%E8%A8%80%E7%B3%BB%E7%BB%9F%E5%8F%B2%E8%AF%97%E7%BA%A7%E5%89%8A%E5%BC%B1%23) `133.6K 🔥` `NEW`
1. [小米澎程主驾车门被撞仍保护车主](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E4%B8%BB%E9%A9%BE%E8%BD%A6%E9%97%A8%E8%A2%AB%E6%92%9E%E4%BB%8D%E4%BF%9D%E6%8A%A4%E8%BD%A6%E4%B8%BB%23) `313.0K 🔥` `+195%`
1. [张萌老公简历居然这么厉害](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E8%80%81%E5%85%AC%E7%AE%80%E5%8E%86%E5%B1%85%E7%84%B6%E8%BF%99%E4%B9%88%E5%8E%89%E5%AE%B3%23) `228.6K 🔥` `+115%`
1. [立冬](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%86%AC%23) `221.2K 🔥` `+60%`
1. [大冰回答八年没上班的女子](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E5%9B%9E%E7%AD%94%E5%85%AB%E5%B9%B4%E6%B2%A1%E4%B8%8A%E7%8F%AD%E7%9A%84%E5%A5%B3%E5%AD%90%23) `204.9K 🔥` `+94%`
1. [原来器官没在我以为的地方](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%99%A8%E5%AE%98%E6%B2%A1%E5%9C%A8%E6%88%91%E4%BB%A5%E4%B8%BA%E7%9A%84%E5%9C%B0%E6%96%B9%23) `146.5K 🔥`
1. [圆通总裁心疼儿子Tim](https://s.weibo.com/weibo?q=%23%E5%9C%86%E9%80%9A%E6%80%BB%E8%A3%81%E5%BF%83%E7%96%BC%E5%84%BF%E5%AD%90Tim%23) `204.1K 🔥` `-63%`
1. [全麻胃肠镜睡一觉就做完](https://s.weibo.com/weibo?q=%23%E5%85%A8%E9%BA%BB%E8%83%83%E8%82%A0%E9%95%9C%E7%9D%A1%E4%B8%80%E8%A7%89%E5%B0%B1%E5%81%9A%E5%AE%8C%23) `136.1K 🔥` `-45%`

Updated at 2026-11-07 10:56:27

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
