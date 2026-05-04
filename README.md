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

1. [用烧烤签给狗撸串顾客账号已私密 (Use BBQ to sign your dog's skewers. Your account has been made private.)](https://s.weibo.com/weibo?q=%23%E7%94%A8%E7%83%A7%E7%83%A4%E7%AD%BE%E7%BB%99%E7%8B%97%E6%92%B8%E4%B8%B2%E9%A1%BE%E5%AE%A2%E8%B4%A6%E5%8F%B7%E5%B7%B2%E7%A7%81%E5%AF%86%23) `1.2M 🔥` `NEW`
1. [心有热爱永远正值青春](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%9C%89%E7%83%AD%E7%88%B1%E6%B0%B8%E8%BF%9C%E6%AD%A3%E5%80%BC%E9%9D%92%E6%98%A5%23) `851.6K 🔥` `NEW`
1. [高铁ABC座很暧昧](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81ABC%E5%BA%A7%E5%BE%88%E6%9A%A7%E6%98%A7%23) `851.6K 🔥` `NEW`
1. [布洛芬头一回累晕菜了](https://s.weibo.com/weibo?q=%23%E5%B8%83%E6%B4%9B%E8%8A%AC%E5%A4%B4%E4%B8%80%E5%9B%9E%E7%B4%AF%E6%99%95%E8%8F%9C%E4%BA%86%23) `851.6K 🔥` `NEW`
1. [前男友香辣蟹](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%94%B7%E5%8F%8B%E9%A6%99%E8%BE%A3%E8%9F%B9%23) `817.2K 🔥` `NEW`
1. [五一排队现状](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E6%8E%92%E9%98%9F%E7%8E%B0%E7%8A%B6%23) `644.1K 🔥` `NEW`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `321.7K 🔥` `NEW`
1. [吴镇宇要谢依霖把自己洗干净](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E8%A6%81%E8%B0%A2%E4%BE%9D%E9%9C%96%E6%8A%8A%E8%87%AA%E5%B7%B1%E6%B4%97%E5%B9%B2%E5%87%80%23) `320.4K 🔥` `NEW`
1. [王安宇吃火锅被问是大学生吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%90%83%E7%81%AB%E9%94%85%E8%A2%AB%E9%97%AE%E6%98%AF%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%90%97%23) `318.2K 🔥` `NEW`
1. [孩子耍脾气反锁房门父亲拆掉房门](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E8%80%8D%E8%84%BE%E6%B0%94%E5%8F%8D%E9%94%81%E6%88%BF%E9%97%A8%E7%88%B6%E4%BA%B2%E6%8B%86%E6%8E%89%E6%88%BF%E9%97%A8%23) `316.0K 🔥` `NEW`
1. [夫妻离婚均不愿抚养孩子法院不准离 (Divorced couple refuses to raise children, court refuses to allow divorce)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E7%A6%BB%E5%A9%9A%E5%9D%87%E4%B8%8D%E6%84%BF%E6%8A%9A%E5%85%BB%E5%AD%A9%E5%AD%90%E6%B3%95%E9%99%A2%E4%B8%8D%E5%87%86%E7%A6%BB%23) `313.5K 🔥` `NEW`
1. [马龙夏露自费飞赴伦敦支持国乒](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E5%A4%8F%E9%9C%B2%E8%87%AA%E8%B4%B9%E9%A3%9E%E8%B5%B4%E4%BC%A6%E6%95%A6%E6%94%AF%E6%8C%81%E5%9B%BD%E4%B9%92%23) `311.9K 🔥` `NEW`
1. [全网爆火的法拉利大叔来自杭州](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E7%88%86%E7%81%AB%E7%9A%84%E6%B3%95%E6%8B%89%E5%88%A9%E5%A4%A7%E5%8F%94%E6%9D%A5%E8%87%AA%E6%9D%AD%E5%B7%9E%23) `310.5K 🔥` `NEW`
1. [文淇夏梦精灵](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%E5%A4%8F%E6%A2%A6%E7%B2%BE%E7%81%B5%23) `309.4K 🔥` `NEW`
1. [余额宝收益率破1是什么情况](https://s.weibo.com/weibo?q=%23%E4%BD%99%E9%A2%9D%E5%AE%9D%E6%94%B6%E7%9B%8A%E7%8E%87%E7%A0%B41%E6%98%AF%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%23) `307.1K 🔥` `NEW`
1. [关晓彤 红包](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%20%E7%BA%A2%E5%8C%85%23) `304.3K 🔥` `NEW`
1. [东风日产NX8丹麦见证国羽巅峰](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%A3%8E%E6%97%A5%E4%BA%A7NX8%E4%B8%B9%E9%BA%A6%E8%A7%81%E8%AF%81%E5%9B%BD%E7%BE%BD%E5%B7%85%E5%B3%B0%23) `303.2K 🔥` `NEW`
1. [白敬亭 宋轶](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `302.2K 🔥` `NEW`
1. [余意曝陈昊宇私会她男友](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%84%8F%E6%9B%9D%E9%99%88%E6%98%8A%E5%AE%87%E7%A7%81%E4%BC%9A%E5%A5%B9%E7%94%B7%E5%8F%8B%23) `300.1K 🔥` `NEW`
1. [大侦探](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BE%A6%E6%8E%A2%23) `295.8K 🔥` `NEW`
1. [新人演员余意指控陈昊宇惯三 (New actor Yu Yi accuses Chen Haoyu of being a douchebag)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%BA%BA%E6%BC%94%E5%91%98%E4%BD%99%E6%84%8F%E6%8C%87%E6%8E%A7%E9%99%88%E6%98%8A%E5%AE%87%E6%83%AF%E4%B8%89%23) `293.7K 🔥` `NEW`
1. [王楚钦默默收冰袋细节看哭了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%BB%98%E9%BB%98%E6%94%B6%E5%86%B0%E8%A2%8B%E7%BB%86%E8%8A%82%E7%9C%8B%E5%93%AD%E4%BA%86%23) `292.6K 🔥` `NEW`
1. [美军舰机及1.5万人将疏导霍尔木兹](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%88%B0%E6%9C%BA%E5%8F%8A1.5%E4%B8%87%E4%BA%BA%E5%B0%86%E7%96%8F%E5%AF%BC%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `290.0K 🔥` `NEW`
1. [阮经天拍视频质问按门铃骚扰男子](https://s.weibo.com/weibo?q=%23%E9%98%AE%E7%BB%8F%E5%A4%A9%E6%8B%8D%E8%A7%86%E9%A2%91%E8%B4%A8%E9%97%AE%E6%8C%89%E9%97%A8%E9%93%83%E9%AA%9A%E6%89%B0%E7%94%B7%E5%AD%90%23) `286.2K 🔥` `NEW`
1. [狗狗未牵绳被碾压主人当场崩溃](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E6%9C%AA%E7%89%B5%E7%BB%B3%E8%A2%AB%E7%A2%BE%E5%8E%8B%E4%B8%BB%E4%BA%BA%E5%BD%93%E5%9C%BA%E5%B4%A9%E6%BA%83%23) `285.8K 🔥` `NEW`
1. [如何证明桃花源里的人都是近亲结婚](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E8%AF%81%E6%98%8E%E6%A1%83%E8%8A%B1%E6%BA%90%E9%87%8C%E7%9A%84%E4%BA%BA%E9%83%BD%E6%98%AF%E8%BF%91%E4%BA%B2%E7%BB%93%E5%A9%9A%23) `284.2K 🔥` `NEW`
1. [敦煌鸣沙山游客长满整座山](https://s.weibo.com/weibo?q=%23%E6%95%A6%E7%85%8C%E9%B8%A3%E6%B2%99%E5%B1%B1%E6%B8%B8%E5%AE%A2%E9%95%BF%E6%BB%A1%E6%95%B4%E5%BA%A7%E5%B1%B1%23) `282.0K 🔥` `NEW`
1. [榴莲山竹冰](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E5%B1%B1%E7%AB%B9%E5%86%B0%23) `281.0K 🔥` `NEW`
1. [小米大涨超10%](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%A4%A7%E6%B6%A8%E8%B6%8510%25%23) `279.8K 🔥` `NEW`
1. [许昕赛前曾预判林诗栋状态](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E8%B5%9B%E5%89%8D%E6%9B%BE%E9%A2%84%E5%88%A4%E6%9E%97%E8%AF%97%E6%A0%8B%E7%8A%B6%E6%80%81%23) `278.1K 🔥` `NEW`
1. [哈登18分 (Harden 18 points)](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%99%BB18%E5%88%86%23) `276.4K 🔥` `NEW`
1. [夫妻接连下水救子父亲身亡](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E6%8E%A5%E8%BF%9E%E4%B8%8B%E6%B0%B4%E6%95%91%E5%AD%90%E7%88%B6%E4%BA%B2%E8%BA%AB%E4%BA%A1%23) `274.3K 🔥` `NEW`
1. [张本智和0比3F勒布伦](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C0%E6%AF%943F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `272.8K 🔥` `NEW`
1. [三文鱼 虹鳟](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%96%87%E9%B1%BC%20%E8%99%B9%E9%B3%9F%23) `271.1K 🔥` `NEW`
1. [宁艺卓嘉人五月刊封面](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%98%89%E4%BA%BA%E4%BA%94%E6%9C%88%E5%88%8A%E5%B0%81%E9%9D%A2%23) `269.2K 🔥` `NEW`
1. [文旅局回应34岁父亲救子溺亡](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%97%85%E5%B1%80%E5%9B%9E%E5%BA%9434%E5%B2%81%E7%88%B6%E4%BA%B2%E6%95%91%E5%AD%90%E6%BA%BA%E4%BA%A1%23) `265.0K 🔥` `NEW`
1. [张雪机车德比斯说结果令人沮丧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%BE%B7%E6%AF%94%E6%96%AF%E8%AF%B4%E7%BB%93%E6%9E%9C%E4%BB%A4%E4%BA%BA%E6%B2%AE%E4%B8%A7%23) `261.5K 🔥` `NEW`
1. [甜玉米文化五一期间爆火出圈](https://s.weibo.com/weibo?q=%23%E7%94%9C%E7%8E%89%E7%B1%B3%E6%96%87%E5%8C%96%E4%BA%94%E4%B8%80%E6%9C%9F%E9%97%B4%E7%88%86%E7%81%AB%E5%87%BA%E5%9C%88%23) `259.2K 🔥` `NEW`
1. [国乒淘汰赛签表](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E6%B7%98%E6%B1%B0%E8%B5%9B%E7%AD%BE%E8%A1%A8%23) `854.7K 🔥` `+103%`
1. [公司引进AI后将员工降薪裁员](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%BC%95%E8%BF%9BAI%E5%90%8E%E5%B0%86%E5%91%98%E5%B7%A5%E9%99%8D%E8%96%AA%E8%A3%81%E5%91%98%23) `320.1K 🔥` `+32%`
1. [莫雷加德回应击败中国男团 (Moregard responds to defeat of Chinese men's team)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E5%9B%9E%E5%BA%94%E5%87%BB%E8%B4%A5%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2%23) `315.4K 🔥` `+27%`
1. [穆祉丞太湖湾音乐节应援排面](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%A4%AA%E6%B9%96%E6%B9%BE%E9%9F%B3%E4%B9%90%E8%8A%82%E5%BA%94%E6%8F%B4%E6%8E%92%E9%9D%A2%23) `306.2K 🔥` `+157%`
1. [邓超孙俪给小花的12岁礼物 (Deng Chao and Sun Li’s 12-year-old gift to Xiaohua)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%AD%99%E4%BF%AA%E7%BB%99%E5%B0%8F%E8%8A%B1%E7%9A%8412%E5%B2%81%E7%A4%BC%E7%89%A9%23) `296.7K 🔥` `+35%`
1. [支付宝把便利店搞成球迷流水席](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8A%8A%E4%BE%BF%E5%88%A9%E5%BA%97%E6%90%9E%E6%88%90%E7%90%83%E8%BF%B7%E6%B5%81%E6%B0%B4%E5%B8%AD%23) `266.4K 🔥` `+113%`
1. [湖南广电 AI播新闻 (Hunan Radio and Television AI news broadcast)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%B9%BF%E7%94%B5%20AI%E6%92%AD%E6%96%B0%E9%97%BB%23) `298.1K 🔥`
1. [男子10岁溺水导致无精症无法生育](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9010%E5%B2%81%E6%BA%BA%E6%B0%B4%E5%AF%BC%E8%87%B4%E6%97%A0%E7%B2%BE%E7%97%87%E6%97%A0%E6%B3%95%E7%94%9F%E8%82%B2%23) `267.6K 🔥`
1. [周深追不上伴舞气笑了 (Zhou Shen laughed angrily when he couldn't catch up with the dancers)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E8%BF%BD%E4%B8%8D%E4%B8%8A%E4%BC%B4%E8%88%9E%E6%B0%94%E7%AC%91%E4%BA%86%23) `262.9K 🔥`
1. [黄灿灿 blackpink都没这么累 (Huang Cancan and blackpink are not so tired)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%20blackpink%E9%83%BD%E6%B2%A1%E8%BF%99%E4%B9%88%E7%B4%AF%23) `291.4K 🔥` `-35%`
1. [国乒男团2比3瑞典 (National table tennis men's team 2 to 3 Sweden)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A22%E6%AF%943%E7%91%9E%E5%85%B8%23) `271.2K 🔥` `-76%`

Updated at 2026-05-04 12:51:24

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
