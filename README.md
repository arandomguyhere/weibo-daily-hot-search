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

1. [饶雪漫 黄圣依一个结节一个结节地长 (Rao Xueman and Huang Shengyi grow one knot after another)](https://s.weibo.com/weibo?q=%23%E9%A5%B6%E9%9B%AA%E6%BC%AB%20%E9%BB%84%E5%9C%A3%E4%BE%9D%E4%B8%80%E4%B8%AA%E7%BB%93%E8%8A%82%E4%B8%80%E4%B8%AA%E7%BB%93%E8%8A%82%E5%9C%B0%E9%95%BF%23) `193.1K 🔥` `NEW`
1. [有人把4万元金饰剪碎做成美甲](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E6%8A%8A4%E4%B8%87%E5%85%83%E9%87%91%E9%A5%B0%E5%89%AA%E7%A2%8E%E5%81%9A%E6%88%90%E7%BE%8E%E7%94%B2%23) `157.6K 🔥` `NEW`
1. [当00后过年走亲戚时](https://s.weibo.com/weibo?q=%23%E5%BD%9300%E5%90%8E%E8%BF%87%E5%B9%B4%E8%B5%B0%E4%BA%B2%E6%88%9A%E6%97%B6%23) `96.1K 🔥` `NEW`
1. [璎黎药业搬迁救命药断供](https://s.weibo.com/weibo?q=%23%E7%92%8E%E9%BB%8E%E8%8D%AF%E4%B8%9A%E6%90%AC%E8%BF%81%E6%95%91%E5%91%BD%E8%8D%AF%E6%96%AD%E4%BE%9B%23) `95.6K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `95.3K 🔥` `NEW`
1. [迪丽热巴说酒店不让贴春联](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%AF%B4%E9%85%92%E5%BA%97%E4%B8%8D%E8%AE%A9%E8%B4%B4%E6%98%A5%E8%81%94%23) `84.0K 🔥` `NEW`
1. [张萌 我不走这是我定的桌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%20%E6%88%91%E4%B8%8D%E8%B5%B0%E8%BF%99%E6%98%AF%E6%88%91%E5%AE%9A%E7%9A%84%E6%A1%8C%23) `78.5K 🔥` `NEW`
1. [已经定好了千问红包雨的闹钟了](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E5%AE%9A%E5%A5%BD%E4%BA%86%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%E9%9B%A8%E7%9A%84%E9%97%B9%E9%92%9F%E4%BA%86%23) `77.6K 🔥` `NEW`
1. [方家翊因整容鼻子修复3次](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AE%B6%E7%BF%8A%E5%9B%A0%E6%95%B4%E5%AE%B9%E9%BC%BB%E5%AD%90%E4%BF%AE%E5%A4%8D3%E6%AC%A1%23) `77.2K 🔥` `NEW`
1. [小莫请求樊振东夸奖](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8E%AB%E8%AF%B7%E6%B1%82%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%A4%B8%E5%A5%96%23) `76.3K 🔥` `NEW`
1. [千问红包雨 (Qianwen red envelope rain)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%E9%9B%A8%23) `1.1M 🔥` `+36%`
1. [男子在胖东来买5000元年货花500寄出 (A man bought 5,000 yuan of new year goods in Pang Dong Lai and spent 500 to mail them out.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B9%B05000%E5%85%83%E5%B9%B4%E8%B4%A7%E8%8A%B1500%E5%AF%84%E5%87%BA%23) `394.5K 🔥` `+27%`
1. [苏翊鸣第一滑70.83分 (Su Yiming skated first with 70.83 points)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%AC%AC%E4%B8%80%E6%BB%9170.83%E5%88%86%23) `328.4K 🔥` `+191%`
1. [王毅和德国总理比身高 (Wang Yi and German Chancellor compare in height)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%92%8C%E5%BE%B7%E5%9B%BD%E6%80%BB%E7%90%86%E6%AF%94%E8%BA%AB%E9%AB%98%23) `159.3K 🔥` `+38%`
1. [咱们空间站过年氛围拉满了](https://s.weibo.com/weibo?q=%23%E5%92%B1%E4%BB%AC%E7%A9%BA%E9%97%B4%E7%AB%99%E8%BF%87%E5%B9%B4%E6%B0%9B%E5%9B%B4%E6%8B%89%E6%BB%A1%E4%BA%86%23) `659.2K 🔥`
1. [美团外卖送金马啦 (Meituan Food Delivery to Golden Horse)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E9%80%81%E9%87%91%E9%A9%AC%E5%95%A6%23) `614.2K 🔥`
1. [来北京台春晚看巳蛇午马换班](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E5%8C%97%E4%BA%AC%E5%8F%B0%E6%98%A5%E6%99%9A%E7%9C%8B%E5%B7%B3%E8%9B%87%E5%8D%88%E9%A9%AC%E6%8D%A2%E7%8F%AD%23) `289.5K 🔥`
1. [单板滑雪男子坡障技巧预赛](https://s.weibo.com/weibo?q=%23%E5%8D%95%E6%9D%BF%E6%BB%91%E9%9B%AA%E7%94%B7%E5%AD%90%E5%9D%A1%E9%9A%9C%E6%8A%80%E5%B7%A7%E9%A2%84%E8%B5%9B%23) `285.7K 🔥`
1. [迪丽热巴马年央视春晚](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A9%AC%E5%B9%B4%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%23) `201.8K 🔥`
1. [马年清清来送签名红包](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%B8%85%E6%B8%85%E6%9D%A5%E9%80%81%E7%AD%BE%E5%90%8D%E7%BA%A2%E5%8C%85%23) `157.1K 🔥`
1. [苏翊鸣坡面障碍技巧预赛](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%9D%A1%E9%9D%A2%E9%9A%9C%E7%A2%8D%E6%8A%80%E5%B7%A7%E9%A2%84%E8%B5%9B%23) `149.8K 🔥`
1. [辽宁春晚官宣节目单 (Official program of Liaoning Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%98%A5%E6%99%9A%E5%AE%98%E5%AE%A3%E8%8A%82%E7%9B%AE%E5%8D%95%23) `141.5K 🔥`
1. [猫 算我求你了洗洗脚吧](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E7%AE%97%E6%88%91%E6%B1%82%E4%BD%A0%E4%BA%86%E6%B4%97%E6%B4%97%E8%84%9A%E5%90%A7%23) `137.4K 🔥`
1. [郑钦文退赛](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%80%80%E8%B5%9B%23) `136.6K 🔥`
1. [马年春晚部分节目单曝光](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%98%A5%E6%99%9A%E9%83%A8%E5%88%86%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9B%9D%E5%85%89%23) `125.3K 🔥`
1. [春节偏财运爆表的星座 (The zodiac signs that bring great wealth during the Spring Festival)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%81%8F%E8%B4%A2%E8%BF%90%E7%88%86%E8%A1%A8%E7%9A%84%E6%98%9F%E5%BA%A7%23) `111.9K 🔥`
1. [男子聚会被下药提前离场躲过一劫](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%81%9A%E4%BC%9A%E8%A2%AB%E4%B8%8B%E8%8D%AF%E6%8F%90%E5%89%8D%E7%A6%BB%E5%9C%BA%E8%BA%B2%E8%BF%87%E4%B8%80%E5%8A%AB%23) `96.1K 🔥`
1. [几杯去世](https://s.weibo.com/weibo?q=%23%E5%87%A0%E6%9D%AF%E5%8E%BB%E4%B8%96%23) `95.9K 🔥`
1. [程晓玥自曝怀二胎吃了很多垃圾食品](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E8%87%AA%E6%9B%9D%E6%80%80%E4%BA%8C%E8%83%8E%E5%90%83%E4%BA%86%E5%BE%88%E5%A4%9A%E5%9E%83%E5%9C%BE%E9%A3%9F%E5%93%81%23) `95.5K 🔥`
1. [签约前买家突然砍价40万房东怒了](https://s.weibo.com/weibo?q=%23%E7%AD%BE%E7%BA%A6%E5%89%8D%E4%B9%B0%E5%AE%B6%E7%AA%81%E7%84%B6%E7%A0%8D%E4%BB%B740%E4%B8%87%E6%88%BF%E4%B8%9C%E6%80%92%E4%BA%86%23) `95.1K 🔥`
1. [白敬亭 宋轶 (Bai Jingting Song Yi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `95.0K 🔥`
1. [Angelababy邓超即将合拍 (Angelababy Deng Chao is about to be co-produced)](https://s.weibo.com/weibo?q=%23Angelababy%E9%82%93%E8%B6%85%E5%8D%B3%E5%B0%86%E5%90%88%E6%8B%8D%23) `94.8K 🔥`
1. [建议大家千万不要一边做一边怀疑](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E4%B8%80%E8%BE%B9%E5%81%9A%E4%B8%80%E8%BE%B9%E6%80%80%E7%96%91%23) `94.8K 🔥`
1. [葛夕回应上春晚](https://s.weibo.com/weibo?q=%23%E8%91%9B%E5%A4%95%E5%9B%9E%E5%BA%94%E4%B8%8A%E6%98%A5%E6%99%9A%23) `79.1K 🔥`
1. [豆包Seedance2.0折服百万海外网友](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85Seedance2.0%E6%8A%98%E6%9C%8D%E7%99%BE%E4%B8%87%E6%B5%B7%E5%A4%96%E7%BD%91%E5%8F%8B%23) `76.5K 🔥`
1. [王铮亮五登央视春晚 (Wang Zhengliang attends CCTV Spring Festival Gala for five times)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%93%AE%E4%BA%AE%E4%BA%94%E7%99%BB%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%23) `76.2K 🔥`
1. [2026红包分组](https://s.weibo.com/weibo?q=%232026%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `846.2K 🔥` `-26%`
1. [再次提醒中国公民避免赴日 (Chinese citizens are reminded again to avoid traveling to Japan)](https://s.weibo.com/weibo?q=%23%E5%86%8D%E6%AC%A1%E6%8F%90%E9%86%92%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E9%81%BF%E5%85%8D%E8%B5%B4%E6%97%A5%23) `335.4K 🔥` `-41%`
1. [原来侯佩岑三岁时就有明星相](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BE%AF%E4%BD%A9%E5%B2%91%E4%B8%89%E5%B2%81%E6%97%B6%E5%B0%B1%E6%9C%89%E6%98%8E%E6%98%9F%E7%9B%B8%23) `138.0K 🔥` `-37%`
1. [九尾买完票被取消了 (Kyuubi bought the ticket but it was cancelled.)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E4%B9%B0%E5%AE%8C%E7%A5%A8%E8%A2%AB%E5%8F%96%E6%B6%88%E4%BA%86%23) `94.5K 🔥` `-29%`
1. [黄一鸣整下巴了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%B8%80%E9%B8%A3%E6%95%B4%E4%B8%8B%E5%B7%B4%E4%BA%86%23) `89.6K 🔥` `-22%`
1. [冯提莫因被网友说矮生气了](https://s.weibo.com/weibo?q=%23%E5%86%AF%E6%8F%90%E8%8E%AB%E5%9B%A0%E8%A2%AB%E7%BD%91%E5%8F%8B%E8%AF%B4%E7%9F%AE%E7%94%9F%E6%B0%94%E4%BA%86%23) `88.9K 🔥` `-23%`
1. [结婚20年给妻子转52给情人转21万](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A20%E5%B9%B4%E7%BB%99%E5%A6%BB%E5%AD%90%E8%BD%AC52%E7%BB%99%E6%83%85%E4%BA%BA%E8%BD%AC21%E4%B8%87%23) `84.1K 🔥` `-27%`
1. [宋亚轩去了新疆](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%8E%BB%E4%BA%86%E6%96%B0%E7%96%86%23) `84.1K 🔥` `-27%`
1. [红包分组](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `83.7K 🔥` `-27%`
1. [吴迪说后悔生三个孩子 (Wu Di said he regretted having three children)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%BF%AA%E8%AF%B4%E5%90%8E%E6%82%94%E7%94%9F%E4%B8%89%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `83.7K 🔥` `-27%`
1. [赵今麦女团门面级别的美貌](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%A5%B3%E5%9B%A2%E9%97%A8%E9%9D%A2%E7%BA%A7%E5%88%AB%E7%9A%84%E7%BE%8E%E8%B2%8C%23) `83.5K 🔥` `-27%`
1. [奥巴马回应被特朗普恶搞成猴](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%B7%B4%E9%A9%AC%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%89%B9%E6%9C%97%E6%99%AE%E6%81%B6%E6%90%9E%E6%88%90%E7%8C%B4%23) `79.5K 🔥` `-31%`
1. [EXO公主泡泡袖 (EXO princess puff sleeves)](https://s.weibo.com/weibo?q=%23EXO%E5%85%AC%E4%B8%BB%E6%B3%A1%E6%B3%A1%E8%A2%96%23) `79.2K 🔥` `-31%`
1. [30多岁中国女子在韩机场高架桥坠亡 (Chinese woman in her 30s fell to her death from an airport viaduct in South Korea)](https://s.weibo.com/weibo?q=%2330%E5%A4%9A%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E9%9F%A9%E6%9C%BA%E5%9C%BA%E9%AB%98%E6%9E%B6%E6%A1%A5%E5%9D%A0%E4%BA%A1%23) `78.7K 🔥` `-31%`
1. [李沅禧购物视频被日本网友炎上](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%85%E7%A6%A7%E8%B4%AD%E7%89%A9%E8%A7%86%E9%A2%91%E8%A2%AB%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E7%82%8E%E4%B8%8A%23) `78.0K 🔥` `-29%`
1. [郭富城王一博 法拉利遇上兰博基尼](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E6%B3%95%E6%8B%89%E5%88%A9%E9%81%87%E4%B8%8A%E5%85%B0%E5%8D%9A%E5%9F%BA%E5%B0%BC%23) `77.4K 🔥` `-24%`

Updated at 2026-02-15 18:32:57

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
