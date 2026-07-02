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

1. [王楚钦孙颖莎vs雨果高桥布鲁娜 (Wang Chuqin, Sun Yingsha vs. Hugo Takahashi Bruna)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8Evs%E9%9B%A8%E6%9E%9C%E9%AB%98%E6%A1%A5%E5%B8%83%E9%B2%81%E5%A8%9C%23) `1.2M 🔥` `NEW`
1. [娜娜子枫神仙搭子](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E5%A8%9C%E5%AD%90%E6%9E%AB%E7%A5%9E%E4%BB%99%E6%90%AD%E5%AD%90%23) `740.9K 🔥` `NEW`
1. [王楚然九阳豆浆品牌代言人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B9%9D%E9%98%B3%E8%B1%86%E6%B5%86%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `382.7K 🔥` `NEW`
1. [鸿蒙因不兼容多CPU架构落选](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E5%9B%A0%E4%B8%8D%E5%85%BC%E5%AE%B9%E5%A4%9ACPU%E6%9E%B6%E6%9E%84%E8%90%BD%E9%80%89%23) `361.9K 🔥` `NEW`
1. [罗永浩称没必要对电影人阴阳怪气](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E7%A7%B0%E6%B2%A1%E5%BF%85%E8%A6%81%E5%AF%B9%E7%94%B5%E5%BD%B1%E4%BA%BA%E9%98%B4%E9%98%B3%E6%80%AA%E6%B0%94%23) `247.4K 🔥` `NEW`
1. [虞书欣连体衣](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%BF%9E%E4%BD%93%E8%A1%A3%23) `244.1K 🔥` `NEW`
1. [杨紫全方位爆发](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%85%A8%E6%96%B9%E4%BD%8D%E7%88%86%E5%8F%91%23) `240.9K 🔥` `NEW`
1. [西安赛格商场坠楼者两家店铺现状](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E8%B5%9B%E6%A0%BC%E5%95%86%E5%9C%BA%E5%9D%A0%E6%A5%BC%E8%80%85%E4%B8%A4%E5%AE%B6%E5%BA%97%E9%93%BA%E7%8E%B0%E7%8A%B6%23) `239.7K 🔥` `NEW`
1. [美股存储概念股还在跌](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%AD%98%E5%82%A8%E6%A6%82%E5%BF%B5%E8%82%A1%E8%BF%98%E5%9C%A8%E8%B7%8C%23) `237.9K 🔥` `NEW`
1. [虞书欣侯明昊念相思同框](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BE%AF%E6%98%8E%E6%98%8A%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%90%8C%E6%A1%86%23) `237.0K 🔥` `NEW`
1. [王楚钦孙颖莎3比0雨果高桥布鲁娜 (Wang Chuqin, Sun Yingsha 3-0 Hugo Takahashi Bruna)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E3%E6%AF%940%E9%9B%A8%E6%9E%9C%E9%AB%98%E6%A1%A5%E5%B8%83%E9%B2%81%E5%A8%9C%23) `234.1K 🔥` `NEW`
1. [张凌赫这一秒过火招商能力](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E6%8B%9B%E5%95%86%E8%83%BD%E5%8A%9B%23) `231.5K 🔥` `NEW`
1. [美股芯片光通信大跌原因](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E8%8A%AF%E7%89%87%E5%85%89%E9%80%9A%E4%BF%A1%E5%A4%A7%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `228.8K 🔥` `NEW`
1. [白鹿30天掉粉117万](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF30%E5%A4%A9%E6%8E%89%E7%B2%89117%E4%B8%87%23) `223.8K 🔥` `NEW`
1. [九寨沟一男子被挤下步道落入钙化池](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E4%B8%80%E7%94%B7%E5%AD%90%E8%A2%AB%E6%8C%A4%E4%B8%8B%E6%AD%A5%E9%81%93%E8%90%BD%E5%85%A5%E9%92%99%E5%8C%96%E6%B1%A0%23) `222.0K 🔥` `NEW`
1. [西班牙终结淘汰赛魔咒](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%BB%88%E7%BB%93%E6%B7%98%E6%B1%B0%E8%B5%9B%E9%AD%94%E5%92%92%23) `219.3K 🔥` `NEW`
1. [C罗魔笛都首发了](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%AD%94%E7%AC%9B%E9%83%BD%E9%A6%96%E5%8F%91%E4%BA%86%23) `219.0K 🔥` `NEW`
1. [WTT美国大满贯男单16强](https://s.weibo.com/weibo?q=%23WTT%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E7%94%B7%E5%8D%9516%E5%BC%BA%23) `212.6K 🔥` `NEW`
1. [王一博人鱼超7万人想看](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BA%BA%E9%B1%BC%E8%B6%857%E4%B8%87%E4%BA%BA%E6%83%B3%E7%9C%8B%23) `209.0K 🔥` `NEW`
1. [韩国博主在日本整治撞人族](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%8D%9A%E4%B8%BB%E5%9C%A8%E6%97%A5%E6%9C%AC%E6%95%B4%E6%B2%BB%E6%92%9E%E4%BA%BA%E6%97%8F%23) `208.7K 🔥` `NEW`
1. [姐姐说C罗世界杯后退出国家队 (My sister said Ronaldo quit the national team after the World Cup)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%AF%B4C%E7%BD%97%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%8E%E9%80%80%E5%87%BA%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `207.1K 🔥` `NEW`
1. [葡萄牙vs克罗地亚 (Portugal vs Croatia)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99vs%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%23) `4.0M 🔥` `+326%`
1. [我国发展动能持续迸发 (my country's development momentum continues to burst out)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%8F%91%E5%B1%95%E5%8A%A8%E8%83%BD%E6%8C%81%E7%BB%AD%E8%BF%B8%E5%8F%91%23) `850.4K 🔥` `+68%`
1. [亚马尔全场最佳](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%85%A8%E5%9C%BA%E6%9C%80%E4%BD%B3%23) `622.3K 🔥` `+43%`
1. [白鹿方回应喝茶替身 (Bai Lufang responded to drinking tea as a substitute)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B9%E5%9B%9E%E5%BA%94%E5%96%9D%E8%8C%B6%E6%9B%BF%E8%BA%AB%23) `249.4K 🔥` `+121%`
1. [我讨好领导就白敬亭这样](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%AE%A8%E5%A5%BD%E9%A2%86%E5%AF%BC%E5%B0%B1%E7%99%BD%E6%95%AC%E4%BA%AD%E8%BF%99%E6%A0%B7%23) `249.0K 🔥` `+177%`
1. [突然发现普通家庭没教社会化](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%99%AE%E9%80%9A%E5%AE%B6%E5%BA%AD%E6%B2%A1%E6%95%99%E7%A4%BE%E4%BC%9A%E5%8C%96%23) `246.4K 🔥` `+162%`
1. [茉莉奶白换彩色头像](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E6%8D%A2%E5%BD%A9%E8%89%B2%E5%A4%B4%E5%83%8F%23) `245.3K 🔥` `+165%`
1. [教师职称待遇培养未来5年有变化 (There will be changes in teacher professional title, salary and training in the next five years)](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E8%81%8C%E7%A7%B0%E5%BE%85%E9%81%87%E5%9F%B9%E5%85%BB%E6%9C%AA%E6%9D%A55%E5%B9%B4%E6%9C%89%E5%8F%98%E5%8C%96%23) `242.0K 🔥` `+162%`
1. [毛不易 音乐节 (Mao Buyi Music Festival)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%20%E9%9F%B3%E4%B9%90%E8%8A%82%23) `236.0K 🔥` `+164%`
1. [德国牧羊犬因不放毛绒大象未过考核](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E7%89%A7%E7%BE%8A%E7%8A%AC%E5%9B%A0%E4%B8%8D%E6%94%BE%E6%AF%9B%E7%BB%92%E5%A4%A7%E8%B1%A1%E6%9C%AA%E8%BF%87%E8%80%83%E6%A0%B8%23) `234.8K 🔥` `+161%`
1. [日本网友以为酱油是日本特有的](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E4%BB%A5%E4%B8%BA%E9%85%B1%E6%B2%B9%E6%98%AF%E6%97%A5%E6%9C%AC%E7%89%B9%E6%9C%89%E7%9A%84%23) `233.0K 🔥` `+48%`
1. [LV起诉茉莉奶白判赔1030万 (LV sues Jasmine Milk and awards 10.3 million yuan in damages)](https://s.weibo.com/weibo?q=%23LV%E8%B5%B7%E8%AF%89%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%88%A4%E8%B5%941030%E4%B8%87%23) `230.6K 🔥` `+156%`
1. [瑶一瑶妈妈瘦了20斤](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%A6%88%E5%A6%88%E7%98%A6%E4%BA%8620%E6%96%A4%23) `228.3K 🔥` `+156%`
1. [王俊凯你要不回头看看伴舞](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BD%A0%E8%A6%81%E4%B8%8D%E5%9B%9E%E5%A4%B4%E7%9C%8B%E7%9C%8B%E4%BC%B4%E8%88%9E%23) `226.4K 🔥` `+154%`
1. [野狗骨头拍出了宋威龙的死角 (Wild Dog Bones captured Song Weilong’s blind spot)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%8B%8D%E5%87%BA%E4%BA%86%E5%AE%8B%E5%A8%81%E9%BE%99%E7%9A%84%E6%AD%BB%E8%A7%92%23) `225.2K 🔥` `+504%`
1. [厄尔尼诺升级了 (El Niño upgraded)](https://s.weibo.com/weibo?q=%23%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E5%8D%87%E7%BA%A7%E4%BA%86%23) `224.4K 🔥` `+656%`
1. [西班牙vs奥地利](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99vs%E5%A5%A5%E5%9C%B0%E5%88%A9%23) `217.7K 🔥` `+130%`
1. [男子不掀马桶圈妻子跟擦10年后崩溃 (Man collapses after 10 years of not lifting toilet seat and wiping wife)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8D%E6%8E%80%E9%A9%AC%E6%A1%B6%E5%9C%88%E5%A6%BB%E5%AD%90%E8%B7%9F%E6%93%A610%E5%B9%B4%E5%90%8E%E5%B4%A9%E6%BA%83%23) `215.9K 🔥` `+140%`
1. [西班牙0丢球进16强](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%990%E4%B8%A2%E7%90%83%E8%BF%9B16%E5%BC%BA%23) `214.8K 🔥` `+139%`
1. [山航很着急为您服务哈 (Shandong Airlines is very anxious to serve you.)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%88%AA%E5%BE%88%E7%9D%80%E6%80%A5%E4%B8%BA%E6%82%A8%E6%9C%8D%E5%8A%A1%E5%93%88%23) `214.0K 🔥` `+90%`
1. [男子在柬埔寨被两次转卖惨不忍睹 (The man was resold twice in Cambodia in terrible circumstances)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E6%9F%AC%E5%9F%94%E5%AF%A8%E8%A2%AB%E4%B8%A4%E6%AC%A1%E8%BD%AC%E5%8D%96%E6%83%A8%E4%B8%8D%E5%BF%8D%E7%9D%B9%23) `211.5K 🔥` `+137%`
1. [LV 欺负古代人不会注册商标 (LV bullies ancient people and doesn’t know how to register a trademark)](https://s.weibo.com/weibo?q=%23LV%20%E6%AC%BA%E8%B4%9F%E5%8F%A4%E4%BB%A3%E4%BA%BA%E4%B8%8D%E4%BC%9A%E6%B3%A8%E5%86%8C%E5%95%86%E6%A0%87%23) `209.9K 🔥` `+134%`
1. [茉莉奶白形似LV商标被判无效](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%BD%A2%E4%BC%BCLV%E5%95%86%E6%A0%87%E8%A2%AB%E5%88%A4%E6%97%A0%E6%95%88%23) `205.3K 🔥` `+128%`
1. [一个妈妈在女儿小学毕业典礼上的发言 (A mother's speech at her daughter's elementary school graduation ceremony)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E5%A6%88%E5%A6%88%E5%9C%A8%E5%A5%B3%E5%84%BF%E5%B0%8F%E5%AD%A6%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%E4%B8%8A%E7%9A%84%E5%8F%91%E8%A8%80%23) `204.3K 🔥` `+128%`
1. [小县城的瑜伽馆审美](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8E%BF%E5%9F%8E%E7%9A%84%E7%91%9C%E4%BC%BD%E9%A6%86%E5%AE%A1%E7%BE%8E%23) `203.3K 🔥` `+127%`
1. [17岁少年凌晨五点拔花生薅错地](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%B0%91%E5%B9%B4%E5%87%8C%E6%99%A8%E4%BA%94%E7%82%B9%E6%8B%94%E8%8A%B1%E7%94%9F%E8%96%85%E9%94%99%E5%9C%B0%23) `202.1K 🔥` `+125%`
1. [C罗8场世界杯淘汰赛0球0助 (Cristiano Ronaldo has 0 goals and 0 assists in 8 World Cup knockout games)](https://s.weibo.com/weibo?q=%23C%E7%BD%978%E5%9C%BA%E4%B8%96%E7%95%8C%E6%9D%AF%E6%B7%98%E6%B1%B0%E8%B5%9B0%E7%90%830%E5%8A%A9%23) `471.6K 🔥`
1. [奥地利门将](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%9C%B0%E5%88%A9%E9%97%A8%E5%B0%86%23) `220.7K 🔥`
1. [西班牙3比0奥地利 (Spain 3-0 Austria)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%993%E6%AF%940%E5%A5%A5%E5%9C%B0%E5%88%A9%23) `465.7K 🔥` `-34%`

Updated at 2026-07-03 07:46:44

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
