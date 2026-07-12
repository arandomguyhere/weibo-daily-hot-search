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

1. [感觉很少听到度蜜月这个词了 (I feel like I rarely hear the word honeymoon anymore.)](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E5%BE%88%E5%B0%91%E5%90%AC%E5%88%B0%E5%BA%A6%E8%9C%9C%E6%9C%88%E8%BF%99%E4%B8%AA%E8%AF%8D%E4%BA%86%23) `106.7K 🔥` `NEW`
1. [有没有体面一点的午休方式](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BD%93%E9%9D%A2%E4%B8%80%E7%82%B9%E7%9A%84%E5%8D%88%E4%BC%91%E6%96%B9%E5%BC%8F%23) `98.6K 🔥` `NEW`
1. [宜宾地震](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%23) `97.2K 🔥` `NEW`
1. [丁程鑫最不吃王俊凯压力之人](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%9C%80%E4%B8%8D%E5%90%83%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8E%8B%E5%8A%9B%E4%B9%8B%E4%BA%BA%23) `78.7K 🔥` `NEW`
1. [张真源积极上课记录](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E7%A7%AF%E6%9E%81%E4%B8%8A%E8%AF%BE%E8%AE%B0%E5%BD%95%23) `75.3K 🔥` `NEW`
1. [黄子弘凡痛斥黄牛](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E7%97%9B%E6%96%A5%E9%BB%84%E7%89%9B%23) `75.3K 🔥` `NEW`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `69.0K 🔥` `NEW`
1. [问诊后豆包给我写了一首诗](https://s.weibo.com/weibo?q=%23%E9%97%AE%E8%AF%8A%E5%90%8E%E8%B1%86%E5%8C%85%E7%BB%99%E6%88%91%E5%86%99%E4%BA%86%E4%B8%80%E9%A6%96%E8%AF%97%23) `68.9K 🔥` `NEW`
1. [中华人民共和国外交部郑重声明](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E5%A4%96%E4%BA%A4%E9%83%A8%E9%83%91%E9%87%8D%E5%A3%B0%E6%98%8E%23) `783.4K 🔥` `+596%`
1. [灿如繁星热度未破8000 (Bright as Stars, the popularity has not exceeded 8000)](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E7%83%AD%E5%BA%A6%E6%9C%AA%E7%A0%B48000%23) `575.0K 🔥` `+440%`
1. [夏粮增产20亿斤背后的科技密码 (The scientific and technological code behind increasing summer grain production by 2 billion jin)](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E7%B2%AE%E5%A2%9E%E4%BA%A720%E4%BA%BF%E6%96%A4%E8%83%8C%E5%90%8E%E7%9A%84%E7%A7%91%E6%8A%80%E5%AF%86%E7%A0%81%23) `533.7K 🔥` `+103%`
1. [冉莹颖说把北京贵阳美国的房子都卖了](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E8%AF%B4%E6%8A%8A%E5%8C%97%E4%BA%AC%E8%B4%B5%E9%98%B3%E7%BE%8E%E5%9B%BD%E7%9A%84%E6%88%BF%E5%AD%90%E9%83%BD%E5%8D%96%E4%BA%86%23) `520.2K 🔥` `+101%`
1. [周深现场把伴舞开了 (Zhou Shen turned off the backup dancers on the spot)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E7%8E%B0%E5%9C%BA%E6%8A%8A%E4%BC%B4%E8%88%9E%E5%BC%80%E4%BA%86%23) `498.9K 🔥` `+105%`
1. [西班牙vs法国](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99vs%E6%B3%95%E5%9B%BD%23) `269.2K 🔥` `+91%`
1. [樊振东将解说世界杯决赛](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B0%86%E8%A7%A3%E8%AF%B4%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `216.3K 🔥` `+102%`
1. [Bin](https://s.weibo.com/weibo?q=%23Bin%23) `214.7K 🔥` `+168%`
1. [范志毅批哈兰德表现糟糕 (Fan Zhiyi criticizes Haaland for poor performance)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%BF%97%E6%AF%85%E6%89%B9%E5%93%88%E5%85%B0%E5%BE%B7%E8%A1%A8%E7%8E%B0%E7%B3%9F%E7%B3%95%23) `209.4K 🔥` `+116%`
1. [功夫女足票房破5亿 (Kung Fu Women’s Soccer box office exceeds 500 million)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E7%A0%B45%E4%BA%BF%23) `202.7K 🔥` `+107%`
1. [沈阳将在全市实行紧急避险措施](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E5%B0%86%E5%9C%A8%E5%85%A8%E5%B8%82%E5%AE%9E%E8%A1%8C%E7%B4%A7%E6%80%A5%E9%81%BF%E9%99%A9%E6%8E%AA%E6%96%BD%23) `162.9K 🔥` `+212%`
1. [高中生拍门玩闹何以酿成命案](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E6%8B%8D%E9%97%A8%E7%8E%A9%E9%97%B9%E4%BD%95%E4%BB%A5%E9%85%BF%E6%88%90%E5%91%BD%E6%A1%88%23) `154.5K 🔥` `+64%`
1. [辛纳卫冕温网男单冠军 (Sinner defends Wimbledon men's singles title)](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E7%BA%B3%E5%8D%AB%E5%86%95%E6%B8%A9%E7%BD%91%E7%94%B7%E5%8D%95%E5%86%A0%E5%86%9B%23) `137.4K 🔥` `+195%`
1. [中国女生在韩国救下一车人 (Chinese girl saves a car of people in South Korea)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%9C%A8%E9%9F%A9%E5%9B%BD%E6%95%91%E4%B8%8B%E4%B8%80%E8%BD%A6%E4%BA%BA%23) `131.3K 🔥` `+142%`
1. [哈兰德快哭了 (Haaland is about to cry)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%BF%AB%E5%93%AD%E4%BA%86%23) `113.8K 🔥` `+179%`
1. [外交部就日方恶劣言行提出严正交涉 (The Ministry of Foreign Affairs lodged solemn representations against Japan’s bad words and deeds)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%B0%B1%E6%97%A5%E6%96%B9%E6%81%B6%E5%8A%A3%E8%A8%80%E8%A1%8C%E6%8F%90%E5%87%BA%E4%B8%A5%E6%AD%A3%E4%BA%A4%E6%B6%89%23) `112.1K 🔥` `+131%`
1. [巴威发威青岛巨浪滔天 (Bawei showed off his power and huge waves surged into the sky in Qingdao)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%8F%91%E5%A8%81%E9%9D%92%E5%B2%9B%E5%B7%A8%E6%B5%AA%E6%BB%94%E5%A4%A9%23) `109.6K 🔥` `+138%`
1. [长期不换社交头像的人 (People who don’t change their social avatars for a long time)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E6%8D%A2%E7%A4%BE%E4%BA%A4%E5%A4%B4%E5%83%8F%E7%9A%84%E4%BA%BA%23) `105.6K 🔥` `+128%`
1. [中国预制房在海外火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A2%84%E5%88%B6%E6%88%BF%E5%9C%A8%E6%B5%B7%E5%A4%96%E7%81%AB%E4%BA%86%23) `104.0K 🔥` `+141%`
1. [四川最近的现状](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E6%9C%80%E8%BF%91%E7%9A%84%E7%8E%B0%E7%8A%B6%23) `84.7K 🔥` `+58%`
1. [赛力斯预计半年净亏损15至18亿元 (Cyrus expects a net loss of 1.5 to 1.8 billion yuan in the first half of the year)](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF%E9%A2%84%E8%AE%A1%E5%8D%8A%E5%B9%B4%E5%87%80%E4%BA%8F%E6%8D%9F15%E8%87%B318%E4%BA%BF%E5%85%83%23) `82.2K 🔥` `+111%`
1. [宠物店给一只大凶猫梳毛洗澡](https://s.weibo.com/weibo?q=%23%E5%AE%A0%E7%89%A9%E5%BA%97%E7%BB%99%E4%B8%80%E5%8F%AA%E5%A4%A7%E5%87%B6%E7%8C%AB%E6%A2%B3%E6%AF%9B%E6%B4%97%E6%BE%A1%23) `75.7K 🔥` `+63%`
1. [贵港动物园老板夫妻冒死锁住猛兽](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E6%B8%AF%E5%8A%A8%E7%89%A9%E5%9B%AD%E8%80%81%E6%9D%BF%E5%A4%AB%E5%A6%BB%E5%86%92%E6%AD%BB%E9%94%81%E4%BD%8F%E7%8C%9B%E5%85%BD%23) `73.9K 🔥` `+106%`
1. [突然感觉大家对精致生活祛魅了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%9F%E8%A7%89%E5%A4%A7%E5%AE%B6%E5%AF%B9%E7%B2%BE%E8%87%B4%E7%94%9F%E6%B4%BB%E7%A5%9B%E9%AD%85%E4%BA%86%23) `69.0K 🔥` `+87%`
1. [骑手2元买意外险被撞后保险拒赔 (Rider bought accident insurance for 2 yuan but was hit by insurance and refused to pay compensation)](https://s.weibo.com/weibo?q=%23%E9%AA%91%E6%89%8B2%E5%85%83%E4%B9%B0%E6%84%8F%E5%A4%96%E9%99%A9%E8%A2%AB%E6%92%9E%E5%90%8E%E4%BF%9D%E9%99%A9%E6%8B%92%E8%B5%94%23) `69.0K 🔥` `+92%`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `69.0K 🔥` `+92%`
1. [央视曝违规售卖屏蔽器乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E8%BF%9D%E8%A7%84%E5%94%AE%E5%8D%96%E5%B1%8F%E8%94%BD%E5%99%A8%E4%B9%B1%E8%B1%A1%23) `69.0K 🔥` `+58%`
1. [一直以为取卡针的作用只有换电话卡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%BB%A5%E4%B8%BA%E5%8F%96%E5%8D%A1%E9%92%88%E7%9A%84%E4%BD%9C%E7%94%A8%E5%8F%AA%E6%9C%89%E6%8D%A2%E7%94%B5%E8%AF%9D%E5%8D%A1%23) `69.0K 🔥` `+51%`
1. [夏季新冠感染为何反复出现小高峰 (Why do new coronavirus infections appear repeatedly with small peaks in summer?)](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%AD%A3%E6%96%B0%E5%86%A0%E6%84%9F%E6%9F%93%E4%B8%BA%E4%BD%95%E5%8F%8D%E5%A4%8D%E5%87%BA%E7%8E%B0%E5%B0%8F%E9%AB%98%E5%B3%B0%23) `69.0K 🔥` `+92%`
1. [Bin回应不敌HLE](https://s.weibo.com/weibo?q=%23Bin%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8CHLE%23) `69.0K 🔥` `+92%`
1. [陈星旭又成周也王玉雯的桌子了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%E5%8F%88%E6%88%90%E5%91%A8%E4%B9%9F%E7%8E%8B%E7%8E%89%E9%9B%AF%E7%9A%84%E6%A1%8C%E5%AD%90%E4%BA%86%23) `69.0K 🔥` `+92%`
1. [范志毅说英格兰中场残阵难赢阿根廷](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%BF%97%E6%AF%85%E8%AF%B4%E8%8B%B1%E6%A0%BC%E5%85%B0%E4%B8%AD%E5%9C%BA%E6%AE%8B%E9%98%B5%E9%9A%BE%E8%B5%A2%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `69.0K 🔥` `+92%`
1. [百花杀暑期档黑马](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E6%9A%91%E6%9C%9F%E6%A1%A3%E9%BB%91%E9%A9%AC%23) `69.0K 🔥` `+92%`
1. [巴威外围云系开始影响山东](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%A4%96%E5%9B%B4%E4%BA%91%E7%B3%BB%E5%BC%80%E5%A7%8B%E5%BD%B1%E5%93%8D%E5%B1%B1%E4%B8%9C%23) `68.9K 🔥` `+92%`
1. [丁程鑫开始盘串了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BC%80%E5%A7%8B%E7%9B%98%E4%B8%B2%E4%BA%86%23) `68.9K 🔥` `+92%`
1. [泰州地震 (Taizhou earthquake)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%B7%9E%E5%9C%B0%E9%9C%87%23) `68.9K 🔥` `+92%`
1. [男孩请同学来家做客竟来了27个人 (Boy invited classmates to his home, and 27 people came)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E8%AF%B7%E5%90%8C%E5%AD%A6%E6%9D%A5%E5%AE%B6%E5%81%9A%E5%AE%A2%E7%AB%9F%E6%9D%A5%E4%BA%8627%E4%B8%AA%E4%BA%BA%23) `68.9K 🔥` `+92%`
1. [Bin被打成了BLG的最大弱点 (Bin was labeled as BLG’s biggest weakness)](https://s.weibo.com/weibo?q=%23Bin%E8%A2%AB%E6%89%93%E6%88%90%E4%BA%86BLG%E7%9A%84%E6%9C%80%E5%A4%A7%E5%BC%B1%E7%82%B9%23) `68.9K 🔥` `+92%`
1. [突然觉得带孩子很轻松 (Suddenly I feel that raising children is easy)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E8%A7%89%E5%BE%97%E5%B8%A6%E5%AD%A9%E5%AD%90%E5%BE%88%E8%BD%BB%E6%9D%BE%23) `530.0K 🔥`
1. [火鸡面被台风孤立了 (Turkey noodles isolated by typhoon)](https://s.weibo.com/weibo?q=%23%E7%81%AB%E9%B8%A1%E9%9D%A2%E8%A2%AB%E5%8F%B0%E9%A3%8E%E5%AD%A4%E7%AB%8B%E4%BA%86%23) `299.5K 🔥`
1. [董事长遭女儿女婿联手提议罢免](https://s.weibo.com/weibo?q=%23%E8%91%A3%E4%BA%8B%E9%95%BF%E9%81%AD%E5%A5%B3%E5%84%BF%E5%A5%B3%E5%A9%BF%E8%81%94%E6%89%8B%E6%8F%90%E8%AE%AE%E7%BD%A2%E5%85%8D%23) `75.3K 🔥`
1. [世界杯史上最强半决赛 (The strongest semi-final in World Cup history)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%BC%BA%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `69.0K 🔥`

Updated at 2026-07-13 07:26:17

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
