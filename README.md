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

1. [日本迎来坏消息 (Bad news for Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%BF%8E%E6%9D%A5%E5%9D%8F%E6%B6%88%E6%81%AF%23) `1.8M 🔥` `NEW`
1. [14人被骗地铁上班每天敬礼打卡](https://s.weibo.com/weibo?q=%2314%E4%BA%BA%E8%A2%AB%E9%AA%97%E5%9C%B0%E9%93%81%E4%B8%8A%E7%8F%AD%E6%AF%8F%E5%A4%A9%E6%95%AC%E7%A4%BC%E6%89%93%E5%8D%A1%23) `948.0K 🔥` `NEW`
1. [未来五年我们生活的城市如何更新](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E6%88%91%E4%BB%AC%E7%94%9F%E6%B4%BB%E7%9A%84%E5%9F%8E%E5%B8%82%E5%A6%82%E4%BD%95%E6%9B%B4%E6%96%B0%23) `764.1K 🔥` `NEW`
1. [创业最快的方式是寄生](https://s.weibo.com/weibo?q=%23%E5%88%9B%E4%B8%9A%E6%9C%80%E5%BF%AB%E7%9A%84%E6%96%B9%E5%BC%8F%E6%98%AF%E5%AF%84%E7%94%9F%23) `762.7K 🔥` `NEW`
1. [曝魏如萱问吴泽林你今天舒服吗](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%AD%8F%E5%A6%82%E8%90%B1%E9%97%AE%E5%90%B4%E6%B3%BD%E6%9E%97%E4%BD%A0%E4%BB%8A%E5%A4%A9%E8%88%92%E6%9C%8D%E5%90%97%23) `754.5K 🔥` `NEW`
1. [莫叔回应莫氏鸡煲倒闭](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%8F%94%E5%9B%9E%E5%BA%94%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%80%92%E9%97%AD%23) `705.2K 🔥` `NEW`
1. [上班斯道普华莱士喊我过六一了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%96%AF%E9%81%93%E6%99%AE%E5%8D%8E%E8%8E%B1%E5%A3%AB%E5%96%8A%E6%88%91%E8%BF%87%E5%85%AD%E4%B8%80%E4%BA%86%23) `696.6K 🔥` `NEW`
1. [雷霆vs马刺](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%86vs%E9%A9%AC%E5%88%BA%23) `638.9K 🔥` `NEW`
1. [白鹿丞磊莫离定档](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%9E%E7%A3%8A%E8%8E%AB%E7%A6%BB%E5%AE%9A%E6%A1%A3%23) `602.6K 🔥` `NEW`
1. [9键26键别吵快看这2键](https://s.weibo.com/weibo?q=%239%E9%94%AE26%E9%94%AE%E5%88%AB%E5%90%B5%E5%BF%AB%E7%9C%8B%E8%BF%992%E9%94%AE%23) `499.1K 🔥` `NEW`
1. [潘宥诚曝虞书欣整容 (Pan Youcheng exposed Yu Shuxin’s plastic surgery)](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%AE%A5%E8%AF%9A%E6%9B%9D%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%95%B4%E5%AE%B9%23) `498.1K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `492.3K 🔥` `NEW`
1. [白鹿掉粉近百万](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8E%89%E7%B2%89%E8%BF%91%E7%99%BE%E4%B8%87%23) `490.3K 🔥` `NEW`
1. [林俊杰母亲回应是否喜欢七七](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E6%AF%8D%E4%BA%B2%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E5%96%9C%E6%AC%A2%E4%B8%83%E4%B8%83%23) `485.3K 🔥` `NEW`
1. [唐嫣参加女儿幼儿园艺术节](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%8F%82%E5%8A%A0%E5%A5%B3%E5%84%BF%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%89%BA%E6%9C%AF%E8%8A%82%23) `479.6K 🔥` `NEW`
1. [孙怡的裙子不会打结吗](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9A%84%E8%A3%99%E5%AD%90%E4%B8%8D%E4%BC%9A%E6%89%93%E7%BB%93%E5%90%97%23) `475.8K 🔥` `NEW`
1. [豆包豆包帮我把这群智障删掉](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E8%B1%86%E5%8C%85%E5%B8%AE%E6%88%91%E6%8A%8A%E8%BF%99%E7%BE%A4%E6%99%BA%E9%9A%9C%E5%88%A0%E6%8E%89%23) `474.9K 🔥` `NEW`
1. [周深实体专辑销售额破5000万](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%AE%9E%E4%BD%93%E4%B8%93%E8%BE%91%E9%94%80%E5%94%AE%E9%A2%9D%E7%A0%B45000%E4%B8%87%23) `464.0K 🔥` `NEW`
1. [美火箭点火测试发生爆炸](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%81%AB%E7%AE%AD%E7%82%B9%E7%81%AB%E6%B5%8B%E8%AF%95%E5%8F%91%E7%94%9F%E7%88%86%E7%82%B8%23) `461.2K 🔥` `NEW`
1. [600年古树被毁上级部门一问三不知](https://s.weibo.com/weibo?q=%23600%E5%B9%B4%E5%8F%A4%E6%A0%91%E8%A2%AB%E6%AF%81%E4%B8%8A%E7%BA%A7%E9%83%A8%E9%97%A8%E4%B8%80%E9%97%AE%E4%B8%89%E4%B8%8D%E7%9F%A5%23) `456.1K 🔥` `NEW`
1. [疑似官俊臣和女生聊天记录 (Suspected chat records between Guan Junchen and girls)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%AE%98%E4%BF%8A%E8%87%A3%E5%92%8C%E5%A5%B3%E7%94%9F%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `454.4K 🔥` `NEW`
1. [aespa挑染](https://s.weibo.com/weibo?q=%23aespa%E6%8C%91%E6%9F%93%23) `451.0K 🔥` `NEW`
1. [樊振东喊话美团闪购](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%96%8A%E8%AF%9D%E7%BE%8E%E5%9B%A2%E9%97%AA%E8%B4%AD%23) `449.3K 🔥` `NEW`
1. [64名被菲方羁押中国公民获释](https://s.weibo.com/weibo?q=%2364%E5%90%8D%E8%A2%AB%E8%8F%B2%E6%96%B9%E7%BE%81%E6%8A%BC%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E8%8E%B7%E9%87%8A%23) `447.2K 🔥` `NEW`
1. [孙杨对张豆豆说你慢的话就骂你](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%AF%B9%E5%BC%A0%E8%B1%86%E8%B1%86%E8%AF%B4%E4%BD%A0%E6%85%A2%E7%9A%84%E8%AF%9D%E5%B0%B1%E9%AA%82%E4%BD%A0%23) `444.9K 🔥` `NEW`
1. [上海政法学院通报女厕疑现摄像头](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%94%BF%E6%B3%95%E5%AD%A6%E9%99%A2%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%8E%95%E7%96%91%E7%8E%B0%E6%91%84%E5%83%8F%E5%A4%B4%23) `425.0K 🔥` `NEW`
1. [演员安云武去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%AE%89%E4%BA%91%E6%AD%A6%E5%8E%BB%E4%B8%96%23) `348.2K 🔥` `NEW`
1. [六一被华莱士小马硬控了](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%80%E8%A2%AB%E5%8D%8E%E8%8E%B1%E5%A3%AB%E5%B0%8F%E9%A9%AC%E7%A1%AC%E6%8E%A7%E4%BA%86%23) `329.4K 🔥` `NEW`
1. [AI公司为何更值钱](https://s.weibo.com/weibo?q=%23AI%E5%85%AC%E5%8F%B8%E4%B8%BA%E4%BD%95%E6%9B%B4%E5%80%BC%E9%92%B1%23) `319.3K 🔥` `NEW`
1. [勇士队该如何补强阵容](https://s.weibo.com/weibo?q=%23%E5%8B%87%E5%A3%AB%E9%98%9F%E8%AF%A5%E5%A6%82%E4%BD%95%E8%A1%A5%E5%BC%BA%E9%98%B5%E5%AE%B9%23) `314.7K 🔥` `NEW`
1. [热依扎休息前最后一次露面 (Reyza's last appearance before taking a break)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E4%BE%9D%E6%89%8E%E4%BC%91%E6%81%AF%E5%89%8D%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E9%9C%B2%E9%9D%A2%23) `314.6K 🔥` `NEW`
1. [电车是时候交养路费了](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%BD%A6%E6%98%AF%E6%97%B6%E5%80%99%E4%BA%A4%E5%85%BB%E8%B7%AF%E8%B4%B9%E4%BA%86%23) `312.7K 🔥` `NEW`
1. [浪姐个喜TOP15](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%AA%E5%96%9CTOP15%23) `292.4K 🔥` `NEW`
1. [日本预演台湾有事清空战场](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%A2%84%E6%BC%94%E5%8F%B0%E6%B9%BE%E6%9C%89%E4%BA%8B%E6%B8%85%E7%A9%BA%E6%88%98%E5%9C%BA%23) `283.4K 🔥` `NEW`
1. [刘耀文 别熬夜等我发东西](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%20%E5%88%AB%E7%86%AC%E5%A4%9C%E7%AD%89%E6%88%91%E5%8F%91%E4%B8%9C%E8%A5%BF%23) `279.9K 🔥` `NEW`
1. [从息肉到肠癌仅4步](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%81%AF%E8%82%89%E5%88%B0%E8%82%A0%E7%99%8C%E4%BB%854%E6%AD%A5%23) `270.4K 🔥` `NEW`
1. [花18元中了2576万](https://s.weibo.com/weibo?q=%23%E8%8A%B118%E5%85%83%E4%B8%AD%E4%BA%862576%E4%B8%87%23) `258.5K 🔥` `NEW`
1. [中学不开空调学生躲老师办公室避暑](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%AD%A6%E4%B8%8D%E5%BC%80%E7%A9%BA%E8%B0%83%E5%AD%A6%E7%94%9F%E8%BA%B2%E8%80%81%E5%B8%88%E5%8A%9E%E5%85%AC%E5%AE%A4%E9%81%BF%E6%9A%91%23) `252.2K 🔥` `NEW`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `251.5K 🔥` `NEW`
1. [全员加速中没有停播](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%91%98%E5%8A%A0%E9%80%9F%E4%B8%AD%E6%B2%A1%E6%9C%89%E5%81%9C%E6%92%AD%23) `230.9K 🔥` `NEW`
1. [四川成立省级调查指导组 (Sichuan establishes provincial investigation guidance group)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E6%88%90%E7%AB%8B%E7%9C%81%E7%BA%A7%E8%B0%83%E6%9F%A5%E6%8C%87%E5%AF%BC%E7%BB%84%23) `221.3K 🔥` `NEW`
1. [33岁环卫女工考研上岸只用了1年](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E7%8E%AF%E5%8D%AB%E5%A5%B3%E5%B7%A5%E8%80%83%E7%A0%94%E4%B8%8A%E5%B2%B8%E5%8F%AA%E7%94%A8%E4%BA%861%E5%B9%B4%23) `172.6K 🔥` `NEW`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `172.2K 🔥` `NEW`
1. [孙杨发10条信息张豆豆仅回末条](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%8F%9110%E6%9D%A1%E4%BF%A1%E6%81%AF%E5%BC%A0%E8%B1%86%E8%B1%86%E4%BB%85%E5%9B%9E%E6%9C%AB%E6%9D%A1%23) `171.8K 🔥` `NEW`
1. [卢伟冰宣布小米17T系列国内即将发布](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E4%BC%9F%E5%86%B0%E5%AE%A3%E5%B8%83%E5%B0%8F%E7%B1%B317T%E7%B3%BB%E5%88%97%E5%9B%BD%E5%86%85%E5%8D%B3%E5%B0%86%E5%8F%91%E5%B8%83%23) `164.7K 🔥` `NEW`
1. [iOS27全新Siri界面曝光](https://s.weibo.com/weibo?q=%23iOS27%E5%85%A8%E6%96%B0Siri%E7%95%8C%E9%9D%A2%E6%9B%9D%E5%85%89%23) `159.0K 🔥` `NEW`
1. [明晚8点上京东抢6180元明星红包 (Go to JD.com tomorrow night at 8pm to grab a celebrity red envelope worth RMB 6,180)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%99%9A8%E7%82%B9%E4%B8%8A%E4%BA%AC%E4%B8%9C%E6%8A%A26180%E5%85%83%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `764.0K 🔥` `+131%`
1. [曝小巷人家2长辈组退居辅线](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%E9%95%BF%E8%BE%88%E7%BB%84%E9%80%80%E5%B1%85%E8%BE%85%E7%BA%BF%23) `503.6K 🔥` `+339%`
1. [金价又跌麻了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%8F%88%E8%B7%8C%E9%BA%BB%E4%BA%86%23) `485.0K 🔥` `+394%`
1. [中国车市要变天了吗](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%BD%A6%E5%B8%82%E8%A6%81%E5%8F%98%E5%A4%A9%E4%BA%86%E5%90%97%23) `461.6K 🔥` `+120%`
1. [阿根廷队世界杯26人名单 (Argentina's 26-man World Cup squad)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E4%B8%96%E7%95%8C%E6%9D%AF26%E4%BA%BA%E5%90%8D%E5%8D%95%23) `171.3K 🔥` `-80%`

Updated at 2026-05-29 12:24:57

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
