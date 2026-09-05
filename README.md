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

1. [看喜单总决赛上淘宝闪购喜提一单](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%96%9C%E5%8D%95%E6%80%BB%E5%86%B3%E8%B5%9B%E4%B8%8A%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E5%96%9C%E6%8F%90%E4%B8%80%E5%8D%95%23) `617.1K 🔥` `NEW`
1. [葫芦娃爷爷30天后要拆掉葫芦](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B730%E5%A4%A9%E5%90%8E%E8%A6%81%E6%8B%86%E6%8E%89%E8%91%AB%E8%8A%A6%23) `490.7K 🔥` `NEW`
1. [张凌赫百丽哪哪都有我的道](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%99%BE%E4%B8%BD%E5%93%AA%E5%93%AA%E9%83%BD%E6%9C%89%E6%88%91%E7%9A%84%E9%81%93%23) `481.0K 🔥` `NEW`
1. [在夜市买了一只很可爱的串串小狗](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%A4%9C%E5%B8%82%E4%B9%B0%E4%BA%86%E4%B8%80%E5%8F%AA%E5%BE%88%E5%8F%AF%E7%88%B1%E7%9A%84%E4%B8%B2%E4%B8%B2%E5%B0%8F%E7%8B%97%23) `421.5K 🔥` `NEW`
1. [许晴被骂毛阿敏心疼](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%99%B4%E8%A2%AB%E9%AA%82%E6%AF%9B%E9%98%BF%E6%95%8F%E5%BF%83%E7%96%BC%23) `416.2K 🔥` `NEW`
1. [刘雯 避嫌](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%20%E9%81%BF%E5%AB%8C%23) `351.4K 🔥` `NEW`
1. [罗志祥复出争议](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%BF%97%E7%A5%A5%E5%A4%8D%E5%87%BA%E4%BA%89%E8%AE%AE%23) `334.9K 🔥` `NEW`
1. [安静公主说王俊凯粉丝既要又要](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%9D%99%E5%85%AC%E4%B8%BB%E8%AF%B4%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%B2%89%E4%B8%9D%E6%97%A2%E8%A6%81%E5%8F%88%E8%A6%81%23) `305.3K 🔥` `NEW`
1. [超1万册永乐大典副本下落不明](https://s.weibo.com/weibo?q=%23%E8%B6%851%E4%B8%87%E5%86%8C%E6%B0%B8%E4%B9%90%E5%A4%A7%E5%85%B8%E5%89%AF%E6%9C%AC%E4%B8%8B%E8%90%BD%E4%B8%8D%E6%98%8E%23) `299.2K 🔥` `NEW`
1. [怀念极限挑战不等于忽视失德艺人](https://s.weibo.com/weibo?q=%23%E6%80%80%E5%BF%B5%E6%9E%81%E9%99%90%E6%8C%91%E6%88%98%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%BF%BD%E8%A7%86%E5%A4%B1%E5%BE%B7%E8%89%BA%E4%BA%BA%23) `295.6K 🔥` `NEW`
1. [张帅蒋欣玗女双晋级](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B8%85%E8%92%8B%E6%AC%A3%E7%8E%97%E5%A5%B3%E5%8F%8C%E6%99%8B%E7%BA%A7%23) `289.5K 🔥` `NEW`
1. [井柏然孙千cp粉现状](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83cp%E7%B2%89%E7%8E%B0%E7%8A%B6%23) `287.2K 🔥` `NEW`
1. [佟丽娅陈思诚边界感](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E9%99%88%E6%80%9D%E8%AF%9A%E8%BE%B9%E7%95%8C%E6%84%9F%23) `286.8K 🔥` `NEW`
1. [导师要求学生开门保持1.5米](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E5%B8%88%E8%A6%81%E6%B1%82%E5%AD%A6%E7%94%9F%E5%BC%80%E9%97%A8%E4%BF%9D%E6%8C%811.5%E7%B1%B3%23) `220.7K 🔥` `NEW`
1. [早春晴朗 剧粉](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%20%E5%89%A7%E7%B2%89%23) `208.0K 🔥` `NEW`
1. [吉隆这个幼儿园外墙让记者泪崩](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E8%BF%99%E4%B8%AA%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%A4%96%E5%A2%99%E8%AE%A9%E8%AE%B0%E8%80%85%E6%B3%AA%E5%B4%A9%23) `204.5K 🔥` `NEW`
1. [栾念扑倒压尚之桃身上](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E6%89%91%E5%80%92%E5%8E%8B%E5%B0%9A%E4%B9%8B%E6%A1%83%E8%BA%AB%E4%B8%8A%23) `195.0K 🔥` `NEW`
1. [王一博加油的管子都是绿的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%8A%A0%E6%B2%B9%E7%9A%84%E7%AE%A1%E5%AD%90%E9%83%BD%E6%98%AF%E7%BB%BF%E7%9A%84%23) `192.5K 🔥` `NEW`
1. [泰国芭提雅提前扫黄](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E8%8A%AD%E6%8F%90%E9%9B%85%E6%8F%90%E5%89%8D%E6%89%AB%E9%BB%84%23) `186.4K 🔥` `NEW`
1. [贝林厄姆为姆巴佩出头](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E4%B8%BA%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%87%BA%E5%A4%B4%23) `175.0K 🔥` `NEW`
1. [王传君老了才知芒果好](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E8%80%81%E4%BA%86%E6%89%8D%E7%9F%A5%E8%8A%92%E6%9E%9C%E5%A5%BD%23) `169.3K 🔥` `NEW`
1. [张雪机车再获第1名](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%86%8D%E8%8E%B7%E7%AC%AC1%E5%90%8D%23) `145.4K 🔥` `NEW`
1. [迪丽热巴2026金九封面](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B42026%E9%87%91%E4%B9%9D%E5%B0%81%E9%9D%A2%23) `139.5K 🔥` `NEW`
1. [美存储芯片光通信集体暴涨](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E5%85%89%E9%80%9A%E4%BF%A1%E9%9B%86%E4%BD%93%E6%9A%B4%E6%B6%A8%23) `125.0K 🔥` `NEW`
1. [香港城大回应迎新营不雅视频](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%9F%8E%E5%A4%A7%E5%9B%9E%E5%BA%94%E8%BF%8E%E6%96%B0%E8%90%A5%E4%B8%8D%E9%9B%85%E8%A7%86%E9%A2%91%23) `118.2K 🔥` `NEW`
1. [吴易昺0比3阿尔卡拉斯](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%93%E6%98%BA0%E6%AF%943%E9%98%BF%E5%B0%94%E5%8D%A1%E6%8B%89%E6%96%AF%23) `111.0K 🔥` `NEW`
1. [特斯拉无人驾驶电车每公里成本0.8元](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E6%97%A0%E4%BA%BA%E9%A9%BE%E9%A9%B6%E7%94%B5%E8%BD%A6%E6%AF%8F%E5%85%AC%E9%87%8C%E6%88%90%E6%9C%AC0.8%E5%85%83%23) `109.0K 🔥` `NEW`
1. [2岁男童把家中百草枯当饮料喝下](https://s.weibo.com/weibo?q=%232%E5%B2%81%E7%94%B7%E7%AB%A5%E6%8A%8A%E5%AE%B6%E4%B8%AD%E7%99%BE%E8%8D%89%E6%9E%AF%E5%BD%93%E9%A5%AE%E6%96%99%E5%96%9D%E4%B8%8B%23) `1.5M 🔥` `+93%`
1. [日本请求俄拆纪念碑菊花纹章遭拒](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%AF%B7%E6%B1%82%E4%BF%84%E6%8B%86%E7%BA%AA%E5%BF%B5%E7%A2%91%E8%8F%8A%E8%8A%B1%E7%BA%B9%E7%AB%A0%E9%81%AD%E6%8B%92%23) `910.9K 🔥` `+66%`
1. [全国多地迎来丰收季](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%A4%9A%E5%9C%B0%E8%BF%8E%E6%9D%A5%E4%B8%B0%E6%94%B6%E5%AD%A3%23) `726.6K 🔥` `+61%`
1. [极限挑战 重拍](https://s.weibo.com/weibo?q=%23%E6%9E%81%E9%99%90%E6%8C%91%E6%88%98%20%E9%87%8D%E6%8B%8D%23) `565.6K 🔥` `+81%`
1. [皇马 姆巴佩](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%20%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `502.4K 🔥` `+298%`
1. [为什么现在这么流行耳夹式耳机](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E8%BF%99%E4%B9%88%E6%B5%81%E8%A1%8C%E8%80%B3%E5%A4%B9%E5%BC%8F%E8%80%B3%E6%9C%BA%23) `456.1K 🔥` `+39%`
1. [上海到成都被订硬座还打卡女子拒出差](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%88%B0%E6%88%90%E9%83%BD%E8%A2%AB%E8%AE%A2%E7%A1%AC%E5%BA%A7%E8%BF%98%E6%89%93%E5%8D%A1%E5%A5%B3%E5%AD%90%E6%8B%92%E5%87%BA%E5%B7%AE%23) `379.4K 🔥` `+295%`
1. [寿司郎给孩子接小便的家长回应](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%E7%BB%99%E5%AD%A9%E5%AD%90%E6%8E%A5%E5%B0%8F%E4%BE%BF%E7%9A%84%E5%AE%B6%E9%95%BF%E5%9B%9E%E5%BA%94%23) `306.6K 🔥` `+217%`
1. [刘雯评论区](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E8%AF%84%E8%AE%BA%E5%8C%BA%23) `297.6K 🔥` `+205%`
1. [俄罗斯建粉碎大日本帝国纪念碑](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%BB%BA%E7%B2%89%E7%A2%8E%E5%A4%A7%E6%97%A5%E6%9C%AC%E5%B8%9D%E5%9B%BD%E7%BA%AA%E5%BF%B5%E7%A2%91%23) `294.7K 🔥` `+331%`
1. [AI编程时代最黑暗的一晚](https://s.weibo.com/weibo?q=%23AI%E7%BC%96%E7%A8%8B%E6%97%B6%E4%BB%A3%E6%9C%80%E9%BB%91%E6%9A%97%E7%9A%84%E4%B8%80%E6%99%9A%23) `292.3K 🔥` `+228%`
1. [男子被打持刀反抗却遭压制窒息而死](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E6%89%93%E6%8C%81%E5%88%80%E5%8F%8D%E6%8A%97%E5%8D%B4%E9%81%AD%E5%8E%8B%E5%88%B6%E7%AA%92%E6%81%AF%E8%80%8C%E6%AD%BB%23) `242.6K 🔥` `+362%`
1. [为什么人上了年纪脸会变宽](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BA%BA%E4%B8%8A%E4%BA%86%E5%B9%B4%E7%BA%AA%E8%84%B8%E4%BC%9A%E5%8F%98%E5%AE%BD%23) `227.7K 🔥` `+304%`
1. [宋雨琦瘦成啥了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%98%A6%E6%88%90%E5%95%A5%E4%BA%86%23) `186.3K 🔥` `+178%`
1. [王楚钦退赛1000卫冕积分即将清零](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%80%80%E8%B5%9B1000%E5%8D%AB%E5%86%95%E7%A7%AF%E5%88%86%E5%8D%B3%E5%B0%86%E6%B8%85%E9%9B%B6%23) `173.6K 🔥` `+78%`
1. [松岛辉空或将登顶世界第一](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E6%88%96%E5%B0%86%E7%99%BB%E9%A1%B6%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23) `155.9K 🔥` `+114%`
1. [披哥二公排名](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E4%BA%8C%E5%85%AC%E6%8E%92%E5%90%8D%23) `153.0K 🔥` `+57%`
1. [2015湖南台综艺有多神](https://s.weibo.com/weibo?q=%232015%E6%B9%96%E5%8D%97%E5%8F%B0%E7%BB%BC%E8%89%BA%E6%9C%89%E5%A4%9A%E7%A5%9E%23) `139.7K 🔥` `+44%`
1. [将40岁的身体恢复到25岁的方法](https://s.weibo.com/weibo?q=%23%E5%B0%8640%E5%B2%81%E7%9A%84%E8%BA%AB%E4%BD%93%E6%81%A2%E5%A4%8D%E5%88%B025%E5%B2%81%E7%9A%84%E6%96%B9%E6%B3%95%23) `126.7K 🔥` `+43%`
1. [花少2嘉宾干活表](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E5%98%89%E5%AE%BE%E5%B9%B2%E6%B4%BB%E8%A1%A8%23) `124.1K 🔥` `+78%`
1. [印度2只流浪狗吓退性侵者](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A62%E5%8F%AA%E6%B5%81%E6%B5%AA%E7%8B%97%E5%90%93%E9%80%80%E6%80%A7%E4%BE%B5%E8%80%85%23) `115.2K 🔥` `+156%`
1. [原来高定是直接把人请到总部量身定制](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%AB%98%E5%AE%9A%E6%98%AF%E7%9B%B4%E6%8E%A5%E6%8A%8A%E4%BA%BA%E8%AF%B7%E5%88%B0%E6%80%BB%E9%83%A8%E9%87%8F%E8%BA%AB%E5%AE%9A%E5%88%B6%23) `111.7K 🔥` `+64%`
1. [出锅前放盐才是隐藏控盐高手](https://s.weibo.com/weibo?q=%23%E5%87%BA%E9%94%85%E5%89%8D%E6%94%BE%E7%9B%90%E6%89%8D%E6%98%AF%E9%9A%90%E8%97%8F%E6%8E%A7%E7%9B%90%E9%AB%98%E6%89%8B%23) `109.4K 🔥` `+25%`
1. [张雪机车法国站排位赛包揽前二](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%B3%95%E5%9B%BD%E7%AB%99%E6%8E%92%E4%BD%8D%E8%B5%9B%E5%8C%85%E6%8F%BD%E5%89%8D%E4%BA%8C%23) `185.8K 🔥`
1. [这是真正凭本事吃饭的行业](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E7%9C%9F%E6%AD%A3%E5%87%AD%E6%9C%AC%E4%BA%8B%E5%90%83%E9%A5%AD%E7%9A%84%E8%A1%8C%E4%B8%9A%23) `111.3K 🔥` `-46%`

Updated at 2026-09-05 09:06:38

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
