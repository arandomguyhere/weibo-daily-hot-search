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

1. [山西山阴车间爆炸已致8死 (Explosion in Shanyin workshop in Shanxi killed 8 people)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E5%B1%B1%E9%98%B4%E8%BD%A6%E9%97%B4%E7%88%86%E7%82%B8%E5%B7%B2%E8%87%B48%E6%AD%BB%23) `800.0K 🔥` `NEW`
1. [中国航空硬核实力引外媒关注](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%AA%E7%A9%BA%E7%A1%AC%E6%A0%B8%E5%AE%9E%E5%8A%9B%E5%BC%95%E5%A4%96%E5%AA%92%E5%85%B3%E6%B3%A8%23) `637.3K 🔥` `NEW`
1. [谢依霖回应提问赵丽颖](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E4%BE%9D%E9%9C%96%E5%9B%9E%E5%BA%94%E6%8F%90%E9%97%AE%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `543.3K 🔥` `NEW`
1. [韩员工手滑发62万枚比特币](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%91%98%E5%B7%A5%E6%89%8B%E6%BB%91%E5%8F%9162%E4%B8%87%E6%9E%9A%E6%AF%94%E7%89%B9%E5%B8%81%23) `403.0K 🔥` `NEW`
1. [爱吃柚子的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E6%9F%9A%E5%AD%90%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `371.9K 🔥` `NEW`
1. [苏翊鸣说不用再去承担卫冕冠军的压力](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E8%AF%B4%E4%B8%8D%E7%94%A8%E5%86%8D%E5%8E%BB%E6%89%BF%E6%8B%85%E5%8D%AB%E5%86%95%E5%86%A0%E5%86%9B%E7%9A%84%E5%8E%8B%E5%8A%9B%23) `268.2K 🔥` `NEW`
1. [泡泡玛特年会跳那么开心我也有责任](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E5%B9%B4%E4%BC%9A%E8%B7%B3%E9%82%A3%E4%B9%88%E5%BC%80%E5%BF%83%E6%88%91%E4%B9%9F%E6%9C%89%E8%B4%A3%E4%BB%BB%23) `176.1K 🔥` `NEW`
1. [韩员工误发超400亿美元比特币](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%91%98%E5%B7%A5%E8%AF%AF%E5%8F%91%E8%B6%85400%E4%BA%BF%E7%BE%8E%E5%85%83%E6%AF%94%E7%89%B9%E5%B8%81%23) `175.1K 🔥` `NEW`
1. [千问](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%23) `173.2K 🔥` `NEW`
1. [王俊凯的话只有朱志鑫听进去了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%9A%84%E8%AF%9D%E5%8F%AA%E6%9C%89%E6%9C%B1%E5%BF%97%E9%91%AB%E5%90%AC%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `169.0K 🔥` `NEW`
1. [洗澡时不要总弯腰洗头 (Don’t always bend down to wash your hair when taking a shower)](https://s.weibo.com/weibo?q=%23%E6%B4%97%E6%BE%A1%E6%97%B6%E4%B8%8D%E8%A6%81%E6%80%BB%E5%BC%AF%E8%85%B0%E6%B4%97%E5%A4%B4%23) `166.5K 🔥` `NEW`
1. [曝爱泼斯坦为印度首富弟弟献女郎](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E4%B8%BA%E5%8D%B0%E5%BA%A6%E9%A6%96%E5%AF%8C%E5%BC%9F%E5%BC%9F%E7%8C%AE%E5%A5%B3%E9%83%8E%23) `164.7K 🔥` `NEW`
1. [沈腾回应参加泡泡玛特年会](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%9B%9E%E5%BA%94%E5%8F%82%E5%8A%A0%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E5%B9%B4%E4%BC%9A%23) `160.5K 🔥` `NEW`
1. [冰天雪地藏着高质量发展热引擎](https://s.weibo.com/weibo?q=%23%E5%86%B0%E5%A4%A9%E9%9B%AA%E5%9C%B0%E8%97%8F%E7%9D%80%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E7%83%AD%E5%BC%95%E6%93%8E%23) `157.9K 🔥` `NEW`
1. [李荣浩 快十年没做别人的制作人](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E5%BF%AB%E5%8D%81%E5%B9%B4%E6%B2%A1%E5%81%9A%E5%88%AB%E4%BA%BA%E7%9A%84%E5%88%B6%E4%BD%9C%E4%BA%BA%23) `157.0K 🔥` `NEW`
1. [高市早苗豪赌正式开始](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%B1%AA%E8%B5%8C%E6%AD%A3%E5%BC%8F%E5%BC%80%E5%A7%8B%23) `155.0K 🔥` `NEW`
1. [蒲熠星突然发现单条微博不能超2000字](https://s.weibo.com/weibo?q=%23%E8%92%B2%E7%86%A0%E6%98%9F%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%8D%95%E6%9D%A1%E5%BE%AE%E5%8D%9A%E4%B8%8D%E8%83%BD%E8%B6%852000%E5%AD%97%23) `146.7K 🔥` `NEW`
1. [你好星期六收视率第一](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E6%94%B6%E8%A7%86%E7%8E%87%E7%AC%AC%E4%B8%80%23) `133.5K 🔥` `NEW`
1. [Bin腹肌对标Gala](https://s.weibo.com/weibo?q=%23Bin%E8%85%B9%E8%82%8C%E5%AF%B9%E6%A0%87Gala%23) `133.1K 🔥` `NEW`
1. [晚11点到凌晨3点睡好有多重要](https://s.weibo.com/weibo?q=%23%E6%99%9A11%E7%82%B9%E5%88%B0%E5%87%8C%E6%99%A83%E7%82%B9%E7%9D%A1%E5%A5%BD%E6%9C%89%E5%A4%9A%E9%87%8D%E8%A6%81%23) `132.9K 🔥` `NEW`
1. [小马糕 (pony cake)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E7%B3%95%23) `122.3K 🔥` `NEW`
1. [清华大学发文祝贺苏翊鸣](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A6%E5%8F%91%E6%96%87%E7%A5%9D%E8%B4%BA%E8%8B%8F%E7%BF%8A%E9%B8%A3%23) `116.1K 🔥` `NEW`
1. [全球第四大汽车巨头爆雷](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E7%AC%AC%E5%9B%9B%E5%A4%A7%E6%B1%BD%E8%BD%A6%E5%B7%A8%E5%A4%B4%E7%88%86%E9%9B%B7%23) `106.6K 🔥` `NEW`
1. [梁源发文怼吴克群](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%BA%90%E5%8F%91%E6%96%87%E6%80%BC%E5%90%B4%E5%85%8B%E7%BE%A4%23) `102.1K 🔥` `NEW`
1. [成何体统男主等了女主十六年](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E7%94%B7%E4%B8%BB%E7%AD%89%E4%BA%86%E5%A5%B3%E4%B8%BB%E5%8D%81%E5%85%AD%E5%B9%B4%23) `101.0K 🔥` `NEW`
1. [苏翊鸣健康接力棒接接接](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%81%A5%E5%BA%B7%E6%8E%A5%E5%8A%9B%E6%A3%92%E6%8E%A5%E6%8E%A5%E6%8E%A5%23) `95.6K 🔥` `NEW`
1. [写在购物袋上的文字太有力量了](https://s.weibo.com/weibo?q=%23%E5%86%99%E5%9C%A8%E8%B4%AD%E7%89%A9%E8%A2%8B%E4%B8%8A%E7%9A%84%E6%96%87%E5%AD%97%E5%A4%AA%E6%9C%89%E5%8A%9B%E9%87%8F%E4%BA%86%23) `90.4K 🔥` `NEW`
1. [从离职时间看离职原因](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E7%A6%BB%E8%81%8C%E6%97%B6%E9%97%B4%E7%9C%8B%E7%A6%BB%E8%81%8C%E5%8E%9F%E5%9B%A0%23) `89.5K 🔥` `NEW`
1. [罗云熙陈瑶是同个公司的](https://s.weibo.com/weibo?q=%23%E7%BD%97%E4%BA%91%E7%86%99%E9%99%88%E7%91%B6%E6%98%AF%E5%90%8C%E4%B8%AA%E5%85%AC%E5%8F%B8%E7%9A%84%23) `88.8K 🔥` `NEW`
1. [唐九洲说也是喝上了AI点的奶茶](https://s.weibo.com/weibo?q=%23%E5%94%90%E4%B9%9D%E6%B4%B2%E8%AF%B4%E4%B9%9F%E6%98%AF%E5%96%9D%E4%B8%8A%E4%BA%86AI%E7%82%B9%E7%9A%84%E5%A5%B6%E8%8C%B6%23) `88.1K 🔥` `NEW`
1. [克林顿夫妇要求公开作证爱泼斯坦案 (Clintons demand public testimony in Epstein case)](https://s.weibo.com/weibo?q=%23%E5%85%8B%E6%9E%97%E9%A1%BF%E5%A4%AB%E5%A6%87%E8%A6%81%E6%B1%82%E5%85%AC%E5%BC%80%E4%BD%9C%E8%AF%81%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%23) `88.0K 🔥` `NEW`
1. [食材也有舒适区](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E6%9D%90%E4%B9%9F%E6%9C%89%E8%88%92%E9%80%82%E5%8C%BA%23) `88.0K 🔥` `NEW`
1. [毫无察觉的求婚](https://s.weibo.com/weibo?q=%23%E6%AF%AB%E6%97%A0%E5%AF%9F%E8%A7%89%E7%9A%84%E6%B1%82%E5%A9%9A%23) `86.3K 🔥` `NEW`
1. [苏翊鸣一手挽着爸爸一手拎着奖牌](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E4%B8%80%E6%89%8B%E6%8C%BD%E7%9D%80%E7%88%B8%E7%88%B8%E4%B8%80%E6%89%8B%E6%8B%8E%E7%9D%80%E5%A5%96%E7%89%8C%23) `84.2K 🔥` `NEW`
1. [女子被拐32年曾离父母家仅1公里](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E6%8B%9032%E5%B9%B4%E6%9B%BE%E7%A6%BB%E7%88%B6%E6%AF%8D%E5%AE%B6%E4%BB%851%E5%85%AC%E9%87%8C%23) `83.9K 🔥` `NEW`
1. [新音纪录片预告](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%9F%B3%E7%BA%AA%E5%BD%95%E7%89%87%E9%A2%84%E5%91%8A%23) `83.9K 🔥` `NEW`
1. [碎片化睡眠可能比熬夜更可怕](https://s.weibo.com/weibo?q=%23%E7%A2%8E%E7%89%87%E5%8C%96%E7%9D%A1%E7%9C%A0%E5%8F%AF%E8%83%BD%E6%AF%94%E7%86%AC%E5%A4%9C%E6%9B%B4%E5%8F%AF%E6%80%95%23) `81.3K 🔥` `NEW`
1. [春节前多家美甲店涨价超30%](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%89%8D%E5%A4%9A%E5%AE%B6%E7%BE%8E%E7%94%B2%E5%BA%97%E6%B6%A8%E4%BB%B7%E8%B6%8530%25%23) `79.5K 🔥` `NEW`
1. [过年前的冰箱](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%89%8D%E7%9A%84%E5%86%B0%E7%AE%B1%23) `78.4K 🔥` `NEW`
1. [原来冷冻也分冻对和冻废](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%B7%E5%86%BB%E4%B9%9F%E5%88%86%E5%86%BB%E5%AF%B9%E5%92%8C%E5%86%BB%E5%BA%9F%23) `75.7K 🔥` `NEW`
1. [苏翊鸣主动拥抱祝贺日本选手 (Su Yiming took the initiative to hug and congratulate the Japanese players)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E4%B8%BB%E5%8A%A8%E6%8B%A5%E6%8A%B1%E7%A5%9D%E8%B4%BA%E6%97%A5%E6%9C%AC%E9%80%89%E6%89%8B%23) `75.3K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `74.0K 🔥` `NEW`
1. [王楚钦孙颖莎亚洲杯冲金](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%9A%E6%B4%B2%E6%9D%AF%E5%86%B2%E9%87%91%23) `73.0K 🔥` `NEW`
1. [苏翊鸣疑似被日本裁判压分](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%96%91%E4%BC%BC%E8%A2%AB%E6%97%A5%E6%9C%AC%E8%A3%81%E5%88%A4%E5%8E%8B%E5%88%86%23) `1.1M 🔥` `+2030%`
1. [扫走旧情绪新年马上有米 (Sweep away the old emotions and there will be rice in the New Year soon)](https://s.weibo.com/weibo?q=%23%E6%89%AB%E8%B5%B0%E6%97%A7%E6%83%85%E7%BB%AA%E6%96%B0%E5%B9%B4%E9%A9%AC%E4%B8%8A%E6%9C%89%E7%B1%B3%23) `354.3K 🔥` `+47%`
1. [菲律宾一男子强奸孙女多达105次](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E4%B8%80%E7%94%B7%E5%AD%90%E5%BC%BA%E5%A5%B8%E5%AD%99%E5%A5%B3%E5%A4%9A%E8%BE%BE105%E6%AC%A1%23) `131.6K 🔥` `+33%`
1. [米兰大跳台 摔了好多人 (Many people fell on the Milan diving platform)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%A4%A7%E8%B7%B3%E5%8F%B0%20%E6%91%94%E4%BA%86%E5%A5%BD%E5%A4%9A%E4%BA%BA%23) `183.7K 🔥`
1. [中国元素绽放米兰冬奥舞台 (Chinese elements bloom on the Milan Winter Olympics stage)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%83%E7%B4%A0%E7%BB%BD%E6%94%BE%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E8%88%9E%E5%8F%B0%23) `131.8K 🔥` `-79%`
1. [赵丽颖2025年全球观众最喜爱演员](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%962025%E5%B9%B4%E5%85%A8%E7%90%83%E8%A7%82%E4%BC%97%E6%9C%80%E5%96%9C%E7%88%B1%E6%BC%94%E5%91%98%23) `95.5K 🔥` `-47%`
1. [天津首例不满16岁未成年人被行拘 (Tianjin’s first case of minor under 16 being detained)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E9%A6%96%E4%BE%8B%E4%B8%8D%E6%BB%A116%E5%B2%81%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `76.5K 🔥` `-22%`

Updated at 2026-02-08 11:29:47

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
