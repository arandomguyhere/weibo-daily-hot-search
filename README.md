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

1. [金融监管总局副局长周亮被查 (Zhou Liang, deputy director of the State Administration of Financial Supervision, was investigated)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%9E%8D%E7%9B%91%E7%AE%A1%E6%80%BB%E5%B1%80%E5%89%AF%E5%B1%80%E9%95%BF%E5%91%A8%E4%BA%AE%E8%A2%AB%E6%9F%A5%23) `762.3K 🔥` `NEW`
1. [尚界Z7预售价格22.98万起](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%E9%A2%84%E5%94%AE%E4%BB%B7%E6%A0%BC22.98%E4%B8%87%E8%B5%B7%23) `612.8K 🔥` `NEW`
1. [王鹤棣将门独后骑马路透](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E9%AA%91%E9%A9%AC%E8%B7%AF%E9%80%8F%23) `410.9K 🔥` `NEW`
1. [一日本人威胁要杀中国外交人员](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%A8%81%E8%83%81%E8%A6%81%E6%9D%80%E4%B8%AD%E5%9B%BD%E5%A4%96%E4%BA%A4%E4%BA%BA%E5%91%98%23) `368.7K 🔥` `NEW`
1. [专家建议26岁高卿尘立遗嘱](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE26%E5%B2%81%E9%AB%98%E5%8D%BF%E5%B0%98%E7%AB%8B%E9%81%97%E5%98%B1%23) `322.8K 🔥` `NEW`
1. [恭喜你发明了劳务派遣](https://s.weibo.com/weibo?q=%23%E6%81%AD%E5%96%9C%E4%BD%A0%E5%8F%91%E6%98%8E%E4%BA%86%E5%8A%B3%E5%8A%A1%E6%B4%BE%E9%81%A3%23) `125.3K 🔥` `NEW`
1. [何小鹏参考欧阳娜娜建议改款新MONA](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%B0%8F%E9%B9%8F%E5%8F%82%E8%80%83%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%BB%BA%E8%AE%AE%E6%94%B9%E6%AC%BE%E6%96%B0MONA%23) `118.2K 🔥` `NEW`
1. [五角大楼拟调3000空降兵夺哈尔克岛](https://s.weibo.com/weibo?q=%23%E4%BA%94%E8%A7%92%E5%A4%A7%E6%A5%BC%E6%8B%9F%E8%B0%833000%E7%A9%BA%E9%99%8D%E5%85%B5%E5%A4%BA%E5%93%88%E5%B0%94%E5%85%8B%E5%B2%9B%23) `117.5K 🔥` `NEW`
1. [刘亦菲安妮海瑟薇世纪神图](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%AE%89%E5%A6%AE%E6%B5%B7%E7%91%9F%E8%96%87%E4%B8%96%E7%BA%AA%E7%A5%9E%E5%9B%BE%23) `116.2K 🔥` `NEW`
1. [千匹马力的领克10+来了](https://s.weibo.com/weibo?q=%23%E5%8D%83%E5%8C%B9%E9%A9%AC%E5%8A%9B%E7%9A%84%E9%A2%86%E5%85%8B10%2B%E6%9D%A5%E4%BA%86%23) `115.9K 🔥` `NEW`
1. [女子将850克黄金藏电饭煲寄骗子 (Woman sends 850 grams of gold hidden rice cooker to scammer)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%86850%E5%85%8B%E9%BB%84%E9%87%91%E8%97%8F%E7%94%B5%E9%A5%AD%E7%85%B2%E5%AF%84%E9%AA%97%E5%AD%90%23) `115.7K 🔥` `NEW`
1. [美军第82空降师可18小时内部署中东](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%AC%AC82%E7%A9%BA%E9%99%8D%E5%B8%88%E5%8F%AF18%E5%B0%8F%E6%97%B6%E5%86%85%E9%83%A8%E7%BD%B2%E4%B8%AD%E4%B8%9C%23) `115.4K 🔥` `NEW`
1. [婚礼迎来了最严厉的新娘](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%A4%BC%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E6%96%B0%E5%A8%98%23) `114.9K 🔥` `NEW`
1. [王俊凯 有人在吗WJK在](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E6%9C%89%E4%BA%BA%E5%9C%A8%E5%90%97WJK%E5%9C%A8%23) `114.9K 🔥` `NEW`
1. [日本](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%23) `98.3K 🔥` `NEW`
1. [刘烨秦海璐 老辈子的微博就是野](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%83%A8%E7%A7%A6%E6%B5%B7%E7%92%90%20%E8%80%81%E8%BE%88%E5%AD%90%E7%9A%84%E5%BE%AE%E5%8D%9A%E5%B0%B1%E6%98%AF%E9%87%8E%23) `98.0K 🔥` `NEW`
1. [伊朗最高领袖顾问重申结束战争条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E9%A1%BE%E9%97%AE%E9%87%8D%E7%94%B3%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%E6%9D%A1%E4%BB%B6%23) `90.9K 🔥` `NEW`
1. [汽车之家](https://s.weibo.com/weibo?q=%23%E6%B1%BD%E8%BD%A6%E4%B9%8B%E5%AE%B6%23) `88.3K 🔥` `NEW`
1. [新郎回应7000元办极简婚礼](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%83%8E%E5%9B%9E%E5%BA%947000%E5%85%83%E5%8A%9E%E6%9E%81%E7%AE%80%E5%A9%9A%E7%A4%BC%23) `86.4K 🔥` `NEW`
1. [以色列再遭打击](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%86%8D%E9%81%AD%E6%89%93%E5%87%BB%23) `86.1K 🔥` `NEW`
1. [宋威龙回应被叫木头帅哥 (Song Weilong responded to being called a handsome boy)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%8F%AB%E6%9C%A8%E5%A4%B4%E5%B8%85%E5%93%A5%23) `83.9K 🔥` `NEW`
1. [吃剩的橘子皮可以做洗洁精](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%89%A9%E7%9A%84%E6%A9%98%E5%AD%90%E7%9A%AE%E5%8F%AF%E4%BB%A5%E5%81%9A%E6%B4%97%E6%B4%81%E7%B2%BE%23) `81.7K 🔥` `NEW`
1. [Caps回应名人堂传言](https://s.weibo.com/weibo?q=%23Caps%E5%9B%9E%E5%BA%94%E5%90%8D%E4%BA%BA%E5%A0%82%E4%BC%A0%E8%A8%80%23) `71.1K 🔥` `NEW`
1. [以色列被打穿了 (Israel is penetrated)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AB%E6%89%93%E7%A9%BF%E4%BA%86%23) `350.8K 🔥` `+78%`
1. [第一次看懂中文是因为看懂了英文](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E6%87%82%E4%B8%AD%E6%96%87%E6%98%AF%E5%9B%A0%E4%B8%BA%E7%9C%8B%E6%87%82%E4%BA%86%E8%8B%B1%E6%96%87%23) `225.7K 🔥` `+23%`
1. [淘金小镇](https://s.weibo.com/weibo?q=%23%E6%B7%98%E9%87%91%E5%B0%8F%E9%95%87%23) `163.5K 🔥` `+34%`
1. [郭敬明改笔名](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E6%94%B9%E7%AC%94%E5%90%8D%23) `146.2K 🔥` `+129%`
1. [骑车玩手机摔成植物人索赔300多万](https://s.weibo.com/weibo?q=%23%E9%AA%91%E8%BD%A6%E7%8E%A9%E6%89%8B%E6%9C%BA%E6%91%94%E6%88%90%E6%A4%8D%E7%89%A9%E4%BA%BA%E7%B4%A2%E8%B5%94300%E5%A4%9A%E4%B8%87%23) `126.8K 🔥` `+75%`
1. [迪士尼 物价](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%20%E7%89%A9%E4%BB%B7%23) `1.0M 🔥`
1. [打卡春天里的大美中国](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8D%A1%E6%98%A5%E5%A4%A9%E9%87%8C%E7%9A%84%E5%A4%A7%E7%BE%8E%E4%B8%AD%E5%9B%BD%23) `625.7K 🔥`
1. [张凌赫知道热巴白宇退出开推的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9F%A5%E9%81%93%E7%83%AD%E5%B7%B4%E7%99%BD%E5%AE%87%E9%80%80%E5%87%BA%E5%BC%80%E6%8E%A8%E7%9A%84%E5%8F%8D%E5%BA%94%23) `121.7K 🔥`
1. [第一批丁克家庭现状曝光 (Current status of the first batch of DINK families exposed)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E4%B8%81%E5%85%8B%E5%AE%B6%E5%BA%AD%E7%8E%B0%E7%8A%B6%E6%9B%9D%E5%85%89%23) `119.6K 🔥`
1. [看到车上有这种装置请立即报警](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%88%B0%E8%BD%A6%E4%B8%8A%E6%9C%89%E8%BF%99%E7%A7%8D%E8%A3%85%E7%BD%AE%E8%AF%B7%E7%AB%8B%E5%8D%B3%E6%8A%A5%E8%AD%A6%23) `116.1K 🔥`
1. [入室抢婴主犯听到死缓当庭开骂](https://s.weibo.com/weibo?q=%23%E5%85%A5%E5%AE%A4%E6%8A%A2%E5%A9%B4%E4%B8%BB%E7%8A%AF%E5%90%AC%E5%88%B0%E6%AD%BB%E7%BC%93%E5%BD%93%E5%BA%AD%E5%BC%80%E9%AA%82%23) `81.6K 🔥`
1. [邓凯hi6上班路透](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AFhi6%E4%B8%8A%E7%8F%AD%E8%B7%AF%E9%80%8F%23) `76.3K 🔥`
1. [胡歌高中长这样 不多人追才怪](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E9%AB%98%E4%B8%AD%E9%95%BF%E8%BF%99%E6%A0%B7%20%E4%B8%8D%E5%A4%9A%E4%BA%BA%E8%BF%BD%E6%89%8D%E6%80%AA%23) `71.4K 🔥`
1. [贵州溶洞发现地下反向森林](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E6%BA%B6%E6%B4%9E%E5%8F%91%E7%8E%B0%E5%9C%B0%E4%B8%8B%E5%8F%8D%E5%90%91%E6%A3%AE%E6%9E%97%23) `147.0K 🔥` `-26%`
1. [美国被曝正向多国索要保护费](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%A2%AB%E6%9B%9D%E6%AD%A3%E5%90%91%E5%A4%9A%E5%9B%BD%E7%B4%A2%E8%A6%81%E4%BF%9D%E6%8A%A4%E8%B4%B9%23) `142.7K 🔥` `-23%`
1. [周杰伦新歌](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E6%AD%8C%23) `140.3K 🔥` `-74%`
1. [男友离世前转地铁吐血女孩5万治病](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8F%8B%E7%A6%BB%E4%B8%96%E5%89%8D%E8%BD%AC%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A95%E4%B8%87%E6%B2%BB%E7%97%85%23) `137.4K 🔥` `-24%`
1. [女子乘高铁投诉男子吸烟却被发口罩](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%98%E9%AB%98%E9%93%81%E6%8A%95%E8%AF%89%E7%94%B7%E5%AD%90%E5%90%B8%E7%83%9F%E5%8D%B4%E8%A2%AB%E5%8F%91%E5%8F%A3%E7%BD%A9%23) `133.7K 🔥` `-25%`
1. [梅姨落网全过程揭秘 (The whole process of Aunt Mei’s arrest revealed)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%90%BD%E7%BD%91%E5%85%A8%E8%BF%87%E7%A8%8B%E6%8F%AD%E7%A7%98%23) `132.7K 🔥` `-83%`
1. [王鸥自曝拍戏补贴自创品牌一直亏损 (Wang Ou revealed that he subsidized filming and created his own brand that has been losing money)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%E8%87%AA%E6%9B%9D%E6%8B%8D%E6%88%8F%E8%A1%A5%E8%B4%B4%E8%87%AA%E5%88%9B%E5%93%81%E7%89%8C%E4%B8%80%E7%9B%B4%E4%BA%8F%E6%8D%9F%23) `130.2K 🔥` `-27%`
1. [周杰伦太阳之子MV (Jay Chou's Son of the Sun MV)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%A4%AA%E9%98%B3%E4%B9%8B%E5%AD%90MV%23) `130.0K 🔥` `-76%`
1. [韩3名高空被烧死人员均为外包工 (The three people who were burned to death at high altitude in South Korea were all outsourced workers)](https://s.weibo.com/weibo?q=%23%E9%9F%A93%E5%90%8D%E9%AB%98%E7%A9%BA%E8%A2%AB%E7%83%A7%E6%AD%BB%E4%BA%BA%E5%91%98%E5%9D%87%E4%B8%BA%E5%A4%96%E5%8C%85%E5%B7%A5%23) `126.5K 🔥` `-32%`
1. [14岁少年遭虐待离世伤痕遍布全身](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%B0%91%E5%B9%B4%E9%81%AD%E8%99%90%E5%BE%85%E7%A6%BB%E4%B8%96%E4%BC%A4%E7%97%95%E9%81%8D%E5%B8%83%E5%85%A8%E8%BA%AB%23) `122.8K 🔥` `-23%`
1. [迪丽热巴好会演疯批](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A5%BD%E4%BC%9A%E6%BC%94%E7%96%AF%E6%89%B9%23) `115.3K 🔥` `-37%`
1. [刘亦菲金智媛生图](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E9%87%91%E6%99%BA%E5%AA%9B%E7%94%9F%E5%9B%BE%23) `110.0K 🔥` `-38%`
1. [张凌赫拍刘宇宁金靖](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8B%8D%E5%88%98%E5%AE%87%E5%AE%81%E9%87%91%E9%9D%96%23) `83.7K 🔥` `-41%`
1. [金正恩正式将韩国定义为头号敌国](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%AD%A3%E6%81%A9%E6%AD%A3%E5%BC%8F%E5%B0%86%E9%9F%A9%E5%9B%BD%E5%AE%9A%E4%B9%89%E4%B8%BA%E5%A4%B4%E5%8F%B7%E6%95%8C%E5%9B%BD%23) `76.5K 🔥` `-34%`
1. [汤加7.6级地震](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%8A%A07.6%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `68.9K 🔥` `-44%`

Updated at 2026-03-24 16:26:43

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
