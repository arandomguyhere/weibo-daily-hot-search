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

1. [生命树张扬去世 (The tree of life Zhang Yang passed away)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%BC%A0%E6%89%AC%E5%8E%BB%E4%B8%96%23) `537.2K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `434.2K 🔥` `NEW`
1. [王楚然演技](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%BC%94%E6%8A%80%23) `210.7K 🔥` `NEW`
1. [男子网购椅子竟多出15公斤银板](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BD%91%E8%B4%AD%E6%A4%85%E5%AD%90%E7%AB%9F%E5%A4%9A%E5%87%BA15%E5%85%AC%E6%96%A4%E9%93%B6%E6%9D%BF%23) `209.3K 🔥` `NEW`
1. [法国也没逃过爱泼斯坦文件](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E4%B9%9F%E6%B2%A1%E9%80%83%E8%BF%87%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%96%87%E4%BB%B6%23) `207.6K 🔥` `NEW`
1. [为什么很多餐馆都在提供免费柠檬水](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%A4%9A%E9%A4%90%E9%A6%86%E9%83%BD%E5%9C%A8%E6%8F%90%E4%BE%9B%E5%85%8D%E8%B4%B9%E6%9F%A0%E6%AA%AC%E6%B0%B4%23) `194.9K 🔥` `NEW`
1. [周启豪晋级后调侃王楚钦和孙颖莎](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%90%AF%E8%B1%AA%E6%99%8B%E7%BA%A7%E5%90%8E%E8%B0%83%E4%BE%83%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%92%8C%E5%AD%99%E9%A2%96%E8%8E%8E%23) `138.9K 🔥` `NEW`
1. [陈幸同1比4张本美和](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B9%B8%E5%90%8C1%E6%AF%944%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `136.8K 🔥` `NEW`
1. [69岁黑老大段效灵被执行死刑](https://s.weibo.com/weibo?q=%2369%E5%B2%81%E9%BB%91%E8%80%81%E5%A4%A7%E6%AE%B5%E6%95%88%E7%81%B5%E8%A2%AB%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `132.4K 🔥` `NEW`
1. [因上菜慢辱骂服务员老太太拒道歉](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%8A%E8%8F%9C%E6%85%A2%E8%BE%B1%E9%AA%82%E6%9C%8D%E5%8A%A1%E5%91%98%E8%80%81%E5%A4%AA%E5%A4%AA%E6%8B%92%E9%81%93%E6%AD%89%23) `128.8K 🔥` `NEW`
1. [华晨宇 本命年和本命人一起过 (Hua Chenyu spends his natal year with his natal person)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%20%E6%9C%AC%E5%91%BD%E5%B9%B4%E5%92%8C%E6%9C%AC%E5%91%BD%E4%BA%BA%E4%B8%80%E8%B5%B7%E8%BF%87%23) `123.6K 🔥` `NEW`
1. [王楚钦男单4强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%94%B7%E5%8D%954%E5%BC%BA%23) `116.4K 🔥` `NEW`
1. [心跳太快就这样损耗身体](https://s.weibo.com/weibo?q=%23%E5%BF%83%E8%B7%B3%E5%A4%AA%E5%BF%AB%E5%B0%B1%E8%BF%99%E6%A0%B7%E6%8D%9F%E8%80%97%E8%BA%AB%E4%BD%93%23) `114.1K 🔥` `NEW`
1. [谷爱凌摔倒场边观众吓坏了](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%91%94%E5%80%92%E5%9C%BA%E8%BE%B9%E8%A7%82%E4%BC%97%E5%90%93%E5%9D%8F%E4%BA%86%23) `104.8K 🔥` `NEW`
1. [卢昱晓在内场不敢拿起手机](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E5%9C%A8%E5%86%85%E5%9C%BA%E4%B8%8D%E6%95%A2%E6%8B%BF%E8%B5%B7%E6%89%8B%E6%9C%BA%23) `102.7K 🔥` `NEW`
1. [王曼昱11比3申裕斌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B111%E6%AF%943%E7%94%B3%E8%A3%95%E6%96%8C%23) `100.7K 🔥` `NEW`
1. [生命树死亡没有慢镜头](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E6%AD%BB%E4%BA%A1%E6%B2%A1%E6%9C%89%E6%85%A2%E9%95%9C%E5%A4%B4%23) `94.3K 🔥` `NEW`
1. [巴萨退出欧超](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A8%E9%80%80%E5%87%BA%E6%AC%A7%E8%B6%85%23) `93.8K 🔥` `NEW`
1. [追觅CEO称每天研发投入4000万](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85CEO%E7%A7%B0%E6%AF%8F%E5%A4%A9%E7%A0%94%E5%8F%91%E6%8A%95%E5%85%A54000%E4%B8%87%23) `93.6K 🔥` `NEW`
1. [米兰冬奥首金诞生](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E9%87%91%E8%AF%9E%E7%94%9F%23) `1.3M 🔥` `+109%`
1. [教育局回应成绩单用星星显示 (The Education Bureau’s response report card is displayed with stars)](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E6%88%90%E7%BB%A9%E5%8D%95%E7%94%A8%E6%98%9F%E6%98%9F%E6%98%BE%E7%A4%BA%23) `540.6K 🔥` `+212%`
1. [女子托运宠物猫至哈尔滨却送到新疆 (Woman consigned pet cat to Harbin but sent to Xinjiang)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%98%E8%BF%90%E5%AE%A0%E7%89%A9%E7%8C%AB%E8%87%B3%E5%93%88%E5%B0%94%E6%BB%A8%E5%8D%B4%E9%80%81%E5%88%B0%E6%96%B0%E7%96%86%23) `280.5K 🔥` `+130%`
1. [中国网络视听盛典 (China Internet Audiovisual Festival)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E8%A7%86%E5%90%AC%E7%9B%9B%E5%85%B8%23) `764.7K 🔥`
1. [新年有乐事就选拼多多 (Choose Pinduoduo for New Year fun)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4%E6%9C%89%E4%B9%90%E4%BA%8B%E5%B0%B1%E9%80%89%E6%8B%BC%E5%A4%9A%E5%A4%9A%23) `728.9K 🔥`
1. [男子因1条评论杀害2人 (Man kills 2 people over 1 comment)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A01%E6%9D%A1%E8%AF%84%E8%AE%BA%E6%9D%80%E5%AE%B32%E4%BA%BA%23) `214.3K 🔥`
1. [立威廉得知恶耗时才49岁](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%A8%81%E5%BB%89%E5%BE%97%E7%9F%A5%E6%81%B6%E8%80%97%E6%97%B6%E6%89%8D49%E5%B2%81%23) `213.7K 🔥`
1. [孕妇独自驾车就医致一男子死亡](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E7%8B%AC%E8%87%AA%E9%A9%BE%E8%BD%A6%E5%B0%B1%E5%8C%BB%E8%87%B4%E4%B8%80%E7%94%B7%E5%AD%90%E6%AD%BB%E4%BA%A1%23) `210.5K 🔥`
1. [程潇真的拥有芭比的容貌和人生](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E7%9C%9F%E7%9A%84%E6%8B%A5%E6%9C%89%E8%8A%AD%E6%AF%94%E7%9A%84%E5%AE%B9%E8%B2%8C%E5%92%8C%E4%BA%BA%E7%94%9F%23) `209.9K 🔥`
1. [马伯骞回关虞书欣](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%AF%E9%AA%9E%E5%9B%9E%E5%85%B3%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `204.1K 🔥`
1. [演员立威廉已重新安排遗嘱](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%AB%8B%E5%A8%81%E5%BB%89%E5%B7%B2%E9%87%8D%E6%96%B0%E5%AE%89%E6%8E%92%E9%81%97%E5%98%B1%23) `195.9K 🔥`
1. [妈妈对谷爱凌说了什么](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%AF%B9%E8%B0%B7%E7%88%B1%E5%87%8C%E8%AF%B4%E4%BA%86%E4%BB%80%E4%B9%88%23) `150.8K 🔥`
1. [工作留痕真的能保命](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%E7%9C%9F%E7%9A%84%E8%83%BD%E4%BF%9D%E5%91%BD%23) `127.7K 🔥`
1. [黄明昊演唱会](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%98%8E%E6%98%8A%E6%BC%94%E5%94%B1%E4%BC%9A%23) `122.7K 🔥`
1. [谷爱凌边流泪边拼搏](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BE%B9%E6%B5%81%E6%B3%AA%E8%BE%B9%E6%8B%BC%E6%90%8F%23) `97.9K 🔥`
1. [六个合法查询网站帮你看清一个人 (Six legal search websites to help you identify a person clearly)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%AA%E5%90%88%E6%B3%95%E6%9F%A5%E8%AF%A2%E7%BD%91%E7%AB%99%E5%B8%AE%E4%BD%A0%E7%9C%8B%E6%B8%85%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `908.1K 🔥` `-30%`
1. [山姆你还续卡吗 (Are you still renewing your Sam's Club membership?)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%BD%A0%E8%BF%98%E7%BB%AD%E5%8D%A1%E5%90%97%23) `438.9K 🔥` `-66%`
1. [山姆品控危机引发退卡风波 (Sam's Club quality control crisis sparks membership cancellation wave)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%93%81%E6%8E%A7%E5%8D%B1%E6%9C%BA%E5%BC%95%E5%8F%91%E9%80%80%E5%8D%A1%E9%A3%8E%E6%B3%A2%23) `218.8K 🔥` `-32%`
1. [很火但难吃的水果 (Very popular but unpalatable fruit)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E7%81%AB%E4%BD%86%E9%9A%BE%E5%90%83%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `214.6K 🔥` `-51%`
1. [谷爱凌第二轮75.30分 (Gu Ailing scored 75.30 points in the second round)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%BA%8C%E8%BD%AE75.30%E5%88%86%23) `212.4K 🔥` `-51%`
1. [我们的少年时代2开机花篮 (Our Boyhood 2 boot flower basket)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E5%BC%80%E6%9C%BA%E8%8A%B1%E7%AF%AE%23) `211.7K 🔥` `-50%`
1. [成何体统前8集最燃的镜头出现了 (The most irritating scenes from the first 8 episodes of "What a Body" have appeared)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E5%89%8D8%E9%9B%86%E6%9C%80%E7%87%83%E7%9A%84%E9%95%9C%E5%A4%B4%E5%87%BA%E7%8E%B0%E4%BA%86%23) `190.7K 🔥` `-32%`
1. [千问 (Qianwen)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%23) `157.1K 🔥` `-95%`
1. [谷爱凌第一滑摔倒 (Gu Ailing fell down in her first slip)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E6%BB%91%E6%91%94%E5%80%92%23) `144.1K 🔥` `-95%`
1. [谷爱凌锁定决赛 (Gu Ailing locked in the finals)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%94%81%E5%AE%9A%E5%86%B3%E8%B5%9B%23) `137.1K 🔥` `-90%`
1. [湖南卫视春晚全阵容官宣 (Hunan TV Spring Festival Gala full lineup announced)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%E5%85%A8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `130.5K 🔥` `-63%`
1. [林俊杰谢谢张艺兴一起合唱翅膀 (JJ Lin thanks Zhang Yixing for singing Wings together)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E8%B0%A2%E8%B0%A2%E5%BC%A0%E8%89%BA%E5%85%B4%E4%B8%80%E8%B5%B7%E5%90%88%E5%94%B1%E7%BF%85%E8%86%80%23) `109.5K 🔥` `-48%`
1. [耙耙柑粑粑柑傻傻分不清楚](https://s.weibo.com/weibo?q=%23%E8%80%99%E8%80%99%E6%9F%91%E7%B2%91%E7%B2%91%E6%9F%91%E5%82%BB%E5%82%BB%E5%88%86%E4%B8%8D%E6%B8%85%E6%A5%9A%23) `98.2K 🔥` `-30%`
1. [87岁的核武院士让中国垃圾不够烧](https://s.weibo.com/weibo?q=%2387%E5%B2%81%E7%9A%84%E6%A0%B8%E6%AD%A6%E9%99%A2%E5%A3%AB%E8%AE%A9%E4%B8%AD%E5%9B%BD%E5%9E%83%E5%9C%BE%E4%B8%8D%E5%A4%9F%E7%83%A7%23) `92.5K 🔥` `-40%`

Updated at 2026-02-07 21:54:03

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
