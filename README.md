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

1. [邹市明45岁重返拳击赛场 (Zou Shiming returns to boxing at the age of 45)](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E45%E5%B2%81%E9%87%8D%E8%BF%94%E6%8B%B3%E5%87%BB%E8%B5%9B%E5%9C%BA%23) `851.4K 🔥` `NEW`
1. [魏如萱称歌手丑八怪是节目组选的](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E7%A7%B0%E6%AD%8C%E6%89%8B%E4%B8%91%E5%85%AB%E6%80%AA%E6%98%AF%E8%8A%82%E7%9B%AE%E7%BB%84%E9%80%89%E7%9A%84%23) `487.2K 🔥` `NEW`
1. [曝曾辉送考人不是韩雨彤了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9B%BE%E8%BE%89%E9%80%81%E8%80%83%E4%BA%BA%E4%B8%8D%E6%98%AF%E9%9F%A9%E9%9B%A8%E5%BD%A4%E4%BA%86%23) `384.1K 🔥` `NEW`
1. [骑行辅警被刺死其父亲发声](https://s.weibo.com/weibo?q=%23%E9%AA%91%E8%A1%8C%E8%BE%85%E8%AD%A6%E8%A2%AB%E5%88%BA%E6%AD%BB%E5%85%B6%E7%88%B6%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `345.5K 🔥` `NEW`
1. [员工台风天临时请假被罚近1500元](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%8F%B0%E9%A3%8E%E5%A4%A9%E4%B8%B4%E6%97%B6%E8%AF%B7%E5%81%87%E8%A2%AB%E7%BD%9A%E8%BF%911500%E5%85%83%23) `331.8K 🔥` `NEW`
1. [刘晓庆 女帝和她的将相](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%86%20%E5%A5%B3%E5%B8%9D%E5%92%8C%E5%A5%B9%E7%9A%84%E5%B0%86%E7%9B%B8%23) `331.4K 🔥` `NEW`
1. [狄仁杰小李飞刀皮肤曝光](https://s.weibo.com/weibo?q=%23%E7%8B%84%E4%BB%81%E6%9D%B0%E5%B0%8F%E6%9D%8E%E9%A3%9E%E5%88%80%E7%9A%AE%E8%82%A4%E6%9B%9D%E5%85%89%23) `318.9K 🔥` `NEW`
1. [作家李娟10年没见妈妈了](https://s.weibo.com/weibo?q=%23%E4%BD%9C%E5%AE%B6%E6%9D%8E%E5%A8%9F10%E5%B9%B4%E6%B2%A1%E8%A7%81%E5%A6%88%E5%A6%88%E4%BA%86%23) `282.8K 🔥` `NEW`
1. [卢伟冰官宣小米澎湃OS4](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E4%BC%9F%E5%86%B0%E5%AE%98%E5%AE%A3%E5%B0%8F%E7%B1%B3%E6%BE%8E%E6%B9%83OS4%23) `218.4K 🔥` `NEW`
1. [说唱冠军新女友是仙女酵母](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E5%94%B1%E5%86%A0%E5%86%9B%E6%96%B0%E5%A5%B3%E5%8F%8B%E6%98%AF%E4%BB%99%E5%A5%B3%E9%85%B5%E6%AF%8D%23) `205.4K 🔥` `NEW`
1. [姜潮麦迪娜新疆婚礼含金量太高了 (Jiang Chao Medina’s wedding in Xinjiang is too valuable)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E6%96%B0%E7%96%86%E5%A9%9A%E7%A4%BC%E5%90%AB%E9%87%91%E9%87%8F%E5%A4%AA%E9%AB%98%E4%BA%86%23) `198.2K 🔥` `NEW`
1. [胖东来新乡店旧址如今客流稀少](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%96%B0%E4%B9%A1%E5%BA%97%E6%97%A7%E5%9D%80%E5%A6%82%E4%BB%8A%E5%AE%A2%E6%B5%81%E7%A8%80%E5%B0%91%23) `190.7K 🔥` `NEW`
1. [于东来多次硬刚房东坐地起价](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E5%A4%9A%E6%AC%A1%E7%A1%AC%E5%88%9A%E6%88%BF%E4%B8%9C%E5%9D%90%E5%9C%B0%E8%B5%B7%E4%BB%B7%23) `186.4K 🔥` `NEW`
1. [八仙曹国舅出场台词火出圈](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E6%9B%B9%E5%9B%BD%E8%88%85%E5%87%BA%E5%9C%BA%E5%8F%B0%E8%AF%8D%E7%81%AB%E5%87%BA%E5%9C%88%23) `182.0K 🔥` `NEW`
1. [阚清子开机照戴了浪姐队戒](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%BC%80%E6%9C%BA%E7%85%A7%E6%88%B4%E4%BA%86%E6%B5%AA%E5%A7%90%E9%98%9F%E6%88%92%23) `180.4K 🔥` `NEW`
1. [巴沙尔被判死刑](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%B2%99%E5%B0%94%E8%A2%AB%E5%88%A4%E6%AD%BB%E5%88%91%23) `180.2K 🔥` `NEW`
1. [业内人士谈结婚登记下降3大原因](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E4%BA%BA%E5%A3%AB%E8%B0%88%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0%E4%B8%8B%E9%99%8D3%E5%A4%A7%E5%8E%9F%E5%9B%A0%23) `179.3K 🔥` `NEW`
1. [虞书欣张昊玥同框照](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BC%A0%E6%98%8A%E7%8E%A5%E5%90%8C%E6%A1%86%E7%85%A7%23) `177.5K 🔥` `NEW`
1. [上海要再挖一条河](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%A6%81%E5%86%8D%E6%8C%96%E4%B8%80%E6%9D%A1%E6%B2%B3%23) `176.7K 🔥` `NEW`
1. [神行者8豪华大六座新旗舰](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%A1%8C%E8%80%858%E8%B1%AA%E5%8D%8E%E5%A4%A7%E5%85%AD%E5%BA%A7%E6%96%B0%E6%97%97%E8%88%B0%23) `175.4K 🔥` `NEW`
1. [NBA祝威少退役快乐 (NBA wishes Westbrook a happy retirement)](https://s.weibo.com/weibo?q=%23NBA%E7%A5%9D%E5%A8%81%E5%B0%91%E9%80%80%E5%BD%B9%E5%BF%AB%E4%B9%90%23) `174.5K 🔥` `NEW`
1. [胚胎案有网友提醒第三者欲反诉朱女士](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E6%9C%89%E7%BD%91%E5%8F%8B%E6%8F%90%E9%86%92%E7%AC%AC%E4%B8%89%E8%80%85%E6%AC%B2%E5%8F%8D%E8%AF%89%E6%9C%B1%E5%A5%B3%E5%A3%AB%23) `172.7K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `171.5K 🔥` `NEW`
1. [别硬碰硬试试反着来](https://s.weibo.com/weibo?q=%23%E5%88%AB%E7%A1%AC%E7%A2%B0%E7%A1%AC%E8%AF%95%E8%AF%95%E5%8F%8D%E7%9D%80%E6%9D%A5%23) `170.8K 🔥` `NEW`
1. [小猫约架带家长还打不过](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%BA%A6%E6%9E%B6%E5%B8%A6%E5%AE%B6%E9%95%BF%E8%BF%98%E6%89%93%E4%B8%8D%E8%BF%87%23) `168.3K 🔥` `NEW`
1. [花开锦绣的配角](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E7%9A%84%E9%85%8D%E8%A7%92%23) `167.3K 🔥` `NEW`
1. [长期血糖失控可能会经历什么](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E8%A1%80%E7%B3%96%E5%A4%B1%E6%8E%A7%E5%8F%AF%E8%83%BD%E4%BC%9A%E7%BB%8F%E5%8E%86%E4%BB%80%E4%B9%88%23) `166.8K 🔥` `NEW`
1. [银行能办结婚证了](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `165.8K 🔥` `NEW`
1. [歌手陈盈洁去世](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E9%99%88%E7%9B%88%E6%B4%81%E5%8E%BB%E4%B8%96%23) `164.6K 🔥` `NEW`
1. [艾米给邓为喂了什么](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E7%BB%99%E9%82%93%E4%B8%BA%E5%96%82%E4%BA%86%E4%BB%80%E4%B9%88%23) `163.9K 🔥` `NEW`
1. [小米澎湃OS4不开发布会 (Xiaomi ThePaper OS4 will not hold a press conference)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E6%B9%83OS4%E4%B8%8D%E5%BC%80%E5%8F%91%E5%B8%83%E4%BC%9A%23) `162.4K 🔥` `NEW`
1. [三里屯偶遇丁程鑫](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%87%8C%E5%B1%AF%E5%81%B6%E9%81%87%E4%B8%81%E7%A8%8B%E9%91%AB%23) `161.6K 🔥` `NEW`
1. [被吵醒男子称从未想过要杀死对方](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%90%B5%E9%86%92%E7%94%B7%E5%AD%90%E7%A7%B0%E4%BB%8E%E6%9C%AA%E6%83%B3%E8%BF%87%E8%A6%81%E6%9D%80%E6%AD%BB%E5%AF%B9%E6%96%B9%23) `160.9K 🔥` `NEW`
1. [男子分手十多年想要回30克金手镯](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%88%86%E6%89%8B%E5%8D%81%E5%A4%9A%E5%B9%B4%E6%83%B3%E8%A6%81%E5%9B%9E30%E5%85%8B%E9%87%91%E6%89%8B%E9%95%AF%23) `504.8K 🔥` `+197%`
1. [金价油价全涨了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%B2%B9%E4%BB%B7%E5%85%A8%E6%B6%A8%E4%BA%86%23) `467.2K 🔥` `+114%`
1. [全裸坠亡币圈富豪房间内细节曝光 (Details in the room of a rich man who was completely naked and fell into the dead money circle are exposed)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E8%A3%B8%E5%9D%A0%E4%BA%A1%E5%B8%81%E5%9C%88%E5%AF%8C%E8%B1%AA%E6%88%BF%E9%97%B4%E5%86%85%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `160.4K 🔥` `+189%`
1. [朱镕基同志逝世 (Comrade Zhu Rongji passed away)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `1.0M 🔥`
1. [60万亿元消费蓝海要来了 (The 60 trillion yuan consumption blue ocean is coming)](https://s.weibo.com/weibo?q=%2360%E4%B8%87%E4%BA%BF%E5%85%83%E6%B6%88%E8%B4%B9%E8%93%9D%E6%B5%B7%E8%A6%81%E6%9D%A5%E4%BA%86%23) `593.9K 🔥` `-41%`
1. [胖东来许昌老店关闭周边商户发声 (Fat Dong Lai’s old store in Xuchang closes surrounding businesses to speak out)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%AE%B8%E6%98%8C%E8%80%81%E5%BA%97%E5%85%B3%E9%97%AD%E5%91%A8%E8%BE%B9%E5%95%86%E6%88%B7%E5%8F%91%E5%A3%B0%23) `567.8K 🔥` `-45%`
1. [比Lululemon还贵的瑜伽服来中国了 (Yoga clothes more expensive than Lululemon are coming to China)](https://s.weibo.com/weibo?q=%23%E6%AF%94Lululemon%E8%BF%98%E8%B4%B5%E7%9A%84%E7%91%9C%E4%BC%BD%E6%9C%8D%E6%9D%A5%E4%B8%AD%E5%9B%BD%E4%BA%86%23) `325.9K 🔥` `-60%`
1. [麦迪娜姜潮婚礼超多新疆美食](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E8%BF%AA%E5%A8%9C%E5%A7%9C%E6%BD%AE%E5%A9%9A%E7%A4%BC%E8%B6%85%E5%A4%9A%E6%96%B0%E7%96%86%E7%BE%8E%E9%A3%9F%23) `260.8K 🔥` `-34%`
1. [升学宴35桌无人上桌 (No one served at table 35 of the entrance banquet)](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B435%E6%A1%8C%E6%97%A0%E4%BA%BA%E4%B8%8A%E6%A1%8C%23) `256.4K 🔥` `-68%`
1. [网传再见朋友拟邀马天宇张萌](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%E6%8B%9F%E9%82%80%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%BC%A0%E8%90%8C%23) `225.7K 🔥` `-72%`
1. [蒋奇明口碑](https://s.weibo.com/weibo?q=%23%E8%92%8B%E5%A5%87%E6%98%8E%E5%8F%A3%E7%A2%91%23) `178.1K 🔥` `-22%`
1. [爱吃西红柿的人真的赚了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E8%A5%BF%E7%BA%A2%E6%9F%BF%E7%9A%84%E4%BA%BA%E7%9C%9F%E7%9A%84%E8%B5%9A%E4%BA%86%23) `175.6K 🔥` `-34%`
1. [流星雨](https://s.weibo.com/weibo?q=%23%E6%B5%81%E6%98%9F%E9%9B%A8%23) `173.6K 🔥` `-79%`
1. [威少拒绝国王奇才报价仍选择退役 (Westbrook rejects offer from Kings and Wizards but chooses to retire)](https://s.weibo.com/weibo?q=%23%E5%A8%81%E5%B0%91%E6%8B%92%E7%BB%9D%E5%9B%BD%E7%8E%8B%E5%A5%87%E6%89%8D%E6%8A%A5%E4%BB%B7%E4%BB%8D%E9%80%89%E6%8B%A9%E9%80%80%E5%BD%B9%23) `169.8K 🔥` `-79%`
1. [龙餐馆 (dragon restaurant)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `169.5K 🔥` `-79%`
1. [Lululemon劲敌来中国了 (Lululemon’s rival comes to China)](https://s.weibo.com/weibo?q=%23Lululemon%E5%8A%B2%E6%95%8C%E6%9D%A5%E4%B8%AD%E5%9B%BD%E4%BA%86%23) `165.1K 🔥` `-62%`
1. [李雪健已经完全听不见了 (Li Xuejian has completely lost his hearing.)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E5%81%A5%E5%B7%B2%E7%BB%8F%E5%AE%8C%E5%85%A8%E5%90%AC%E4%B8%8D%E8%A7%81%E4%BA%86%23) `159.7K 🔥` `-33%`

Updated at 2026-08-13 11:17:23

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
