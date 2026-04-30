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

1. [收货地址不该成为被歧视的理由 (Shipping address should not be a reason for discrimination)](https://s.weibo.com/weibo?q=%23%E6%94%B6%E8%B4%A7%E5%9C%B0%E5%9D%80%E4%B8%8D%E8%AF%A5%E6%88%90%E4%B8%BA%E8%A2%AB%E6%AD%A7%E8%A7%86%E7%9A%84%E7%90%86%E7%94%B1%23) `1.1M 🔥` `NEW`
1. [谷歌入驻广州珠江新城](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8C%E5%85%A5%E9%A9%BB%E5%B9%BF%E5%B7%9E%E7%8F%A0%E6%B1%9F%E6%96%B0%E5%9F%8E%23) `405.6K 🔥` `NEW`
1. [浪姐 背调](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E8%83%8C%E8%B0%83%23) `330.9K 🔥` `NEW`
1. [证监会原主席易会满被双开](https://s.weibo.com/weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%E5%8E%9F%E4%B8%BB%E5%B8%AD%E6%98%93%E4%BC%9A%E6%BB%A1%E8%A2%AB%E5%8F%8C%E5%BC%80%23) `227.4K 🔥` `NEW`
1. [世界泳联疑似内涵孙杨](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%B3%B3%E8%81%94%E7%96%91%E4%BC%BC%E5%86%85%E6%B6%B5%E5%AD%99%E6%9D%A8%23) `213.7K 🔥` `NEW`
1. [女子徒手给月子里宝宝打耳洞](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BE%92%E6%89%8B%E7%BB%99%E6%9C%88%E5%AD%90%E9%87%8C%E5%AE%9D%E5%AE%9D%E6%89%93%E8%80%B3%E6%B4%9E%23) `204.8K 🔥` `NEW`
1. [28岁攒到10万元女生已申请辞职](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E6%94%92%E5%88%B010%E4%B8%87%E5%85%83%E5%A5%B3%E7%94%9F%E5%B7%B2%E7%94%B3%E8%AF%B7%E8%BE%9E%E8%81%8C%23) `196.0K 🔥` `NEW`
1. [曝孟美岐雪藏了两年才离开乐华](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AD%9F%E7%BE%8E%E5%B2%90%E9%9B%AA%E8%97%8F%E4%BA%86%E4%B8%A4%E5%B9%B4%E6%89%8D%E7%A6%BB%E5%BC%80%E4%B9%90%E5%8D%8E%23) `191.6K 🔥` `NEW`
1. [古天乐回应隐婚生子传闻](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E5%9B%9E%E5%BA%94%E9%9A%90%E5%A9%9A%E7%94%9F%E5%AD%90%E4%BC%A0%E9%97%BB%23) `187.0K 🔥` `NEW`
1. [妈妈上夜班3岁娃凌晨1点街头独行](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%B8%8A%E5%A4%9C%E7%8F%AD3%E5%B2%81%E5%A8%83%E5%87%8C%E6%99%A81%E7%82%B9%E8%A1%97%E5%A4%B4%E7%8B%AC%E8%A1%8C%23) `182.7K 🔥` `NEW`
1. [GPT5.5提示词革命 (GPT5.5 prompt word revolution)](https://s.weibo.com/weibo?q=%23GPT5.5%E6%8F%90%E7%A4%BA%E8%AF%8D%E9%9D%A9%E5%91%BD%23) `174.6K 🔥` `NEW`
1. [陈都灵在大学是华辩世锦赛主席](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%9C%A8%E5%A4%A7%E5%AD%A6%E6%98%AF%E5%8D%8E%E8%BE%A9%E4%B8%96%E9%94%A6%E8%B5%9B%E4%B8%BB%E5%B8%AD%23) `172.7K 🔥` `NEW`
1. [iG官宣Nia加入](https://s.weibo.com/weibo?q=%23iG%E5%AE%98%E5%AE%A3Nia%E5%8A%A0%E5%85%A5%23) `172.6K 🔥` `NEW`
1. [看到第十集发现男主第一集就死了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%88%B0%E7%AC%AC%E5%8D%81%E9%9B%86%E5%8F%91%E7%8E%B0%E7%94%B7%E4%B8%BB%E7%AC%AC%E4%B8%80%E9%9B%86%E5%B0%B1%E6%AD%BB%E4%BA%86%23) `166.1K 🔥` `NEW`
1. [李煜东 我姓刘](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%85%9C%E4%B8%9C%20%E6%88%91%E5%A7%93%E5%88%98%23) `158.0K 🔥` `NEW`
1. [福大学生举报合工大学生盗作品获国奖](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%B8%BE%E6%8A%A5%E5%90%88%E5%B7%A5%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%9B%97%E4%BD%9C%E5%93%81%E8%8E%B7%E5%9B%BD%E5%A5%96%23) `157.6K 🔥` `NEW`
1. [高校洗澡10分钟收5元学生发声](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E6%B4%97%E6%BE%A110%E5%88%86%E9%92%9F%E6%94%B65%E5%85%83%E5%AD%A6%E7%94%9F%E5%8F%91%E5%A3%B0%23) `157.4K 🔥` `NEW`
1. [不再嗑CP算长大吗](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%86%8D%E5%97%91CP%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `156.6K 🔥` `NEW`
1. [国防部回应是否将迎首艘核动力航母](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E5%B0%86%E8%BF%8E%E9%A6%96%E8%89%98%E6%A0%B8%E5%8A%A8%E5%8A%9B%E8%88%AA%E6%AF%8D%23) `142.3K 🔥` `NEW`
1. [DeepSeek思考过程好萌](https://s.weibo.com/weibo?q=%23DeepSeek%E6%80%9D%E8%80%83%E8%BF%87%E7%A8%8B%E5%A5%BD%E8%90%8C%23) `138.1K 🔥` `NEW`
1. [金靖瘦到认不出来 (Jin Jing is so thin that he is unrecognizable)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `137.4K 🔥` `NEW`
1. [孙颖莎笑得好开心](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%AC%91%E5%BE%97%E5%A5%BD%E5%BC%80%E5%BF%83%23) `137.0K 🔥` `NEW`
1. [ILLIT回归](https://s.weibo.com/weibo?q=%23ILLIT%E5%9B%9E%E5%BD%92%23) `136.2K 🔥` `NEW`
1. [李柯以回应整容](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9F%AF%E4%BB%A5%E5%9B%9E%E5%BA%94%E6%95%B4%E5%AE%B9%23) `126.1K 🔥` `NEW`
1. [多股20cm涨停](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%82%A120cm%E6%B6%A8%E5%81%9C%23) `125.0K 🔥` `NEW`
1. [火车坐过站了可以免费坐回去](https://s.weibo.com/weibo?q=%23%E7%81%AB%E8%BD%A6%E5%9D%90%E8%BF%87%E7%AB%99%E4%BA%86%E5%8F%AF%E4%BB%A5%E5%85%8D%E8%B4%B9%E5%9D%90%E5%9B%9E%E5%8E%BB%23) `659.6K 🔥`
1. [阿姨买肉误输79万多随即取消支付 (Aunt accidentally lost more than 790,000 when buying meat and then canceled the payment)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A7%A8%E4%B9%B0%E8%82%89%E8%AF%AF%E8%BE%9379%E4%B8%87%E5%A4%9A%E9%9A%8F%E5%8D%B3%E5%8F%96%E6%B6%88%E6%94%AF%E4%BB%98%23) `787.6K 🔥` `-31%`
1. [保洁误拿快递协商时倒地送医后身亡 (The housekeeper accidentally picked up the express delivery and fell to the ground while negotiating and was taken to the hospital and died.)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%B4%81%E8%AF%AF%E6%8B%BF%E5%BF%AB%E9%80%92%E5%8D%8F%E5%95%86%E6%97%B6%E5%80%92%E5%9C%B0%E9%80%81%E5%8C%BB%E5%90%8E%E8%BA%AB%E4%BA%A1%23) `425.5K 🔥` `-48%`
1. [香奈儿回应无底绑带鞋 (Chanel responds to bottomless lace-up shoes)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E5%A5%88%E5%84%BF%E5%9B%9E%E5%BA%94%E6%97%A0%E5%BA%95%E7%BB%91%E5%B8%A6%E9%9E%8B%23) `398.8K 🔥` `-22%`
1. [微信从聊天工具变成了工作软件 (WeChat has transformed from a chat tool into a work software)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E4%BB%8E%E8%81%8A%E5%A4%A9%E5%B7%A5%E5%85%B7%E5%8F%98%E6%88%90%E4%BA%86%E5%B7%A5%E4%BD%9C%E8%BD%AF%E4%BB%B6%23) `271.0K 🔥` `-56%`
1. [突然发现开车通勤意味着自由](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%BC%80%E8%BD%A6%E9%80%9A%E5%8B%A4%E6%84%8F%E5%91%B3%E7%9D%80%E8%87%AA%E7%94%B1%23) `233.4K 🔥` `-49%`
1. [伊能静回应恩利争议视频](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E5%9B%9E%E5%BA%94%E6%81%A9%E5%88%A9%E4%BA%89%E8%AE%AE%E8%A7%86%E9%A2%91%23) `225.6K 🔥` `-65%`
1. [吵架的时候就回这一句太绝了](https://s.weibo.com/weibo?q=%23%E5%90%B5%E6%9E%B6%E7%9A%84%E6%97%B6%E5%80%99%E5%B0%B1%E5%9B%9E%E8%BF%99%E4%B8%80%E5%8F%A5%E5%A4%AA%E7%BB%9D%E4%BA%86%23) `221.6K 🔥` `-56%`
1. [浪姐请了李小冉告过的博主](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%AF%B7%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%E5%91%8A%E8%BF%87%E7%9A%84%E5%8D%9A%E4%B8%BB%23) `219.5K 🔥` `-53%`
1. [密逃8阵容 (Escape 8 lineup)](https://s.weibo.com/weibo?q=%23%E5%AF%86%E9%80%838%E9%98%B5%E5%AE%B9%23) `211.5K 🔥` `-66%`
1. [韩国霸王茶姬爆单](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E7%88%86%E5%8D%95%23) `209.2K 🔥` `-58%`
1. [李小冉 毫无运动痕迹](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E6%AF%AB%E6%97%A0%E8%BF%90%E5%8A%A8%E7%97%95%E8%BF%B9%23) `200.7K 🔥` `-59%`
1. [虞书欣造型](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%80%A0%E5%9E%8B%23) `197.9K 🔥` `-60%`
1. [宋雨琦 跑男](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E8%B7%91%E7%94%B7%23) `181.2K 🔥` `-64%`
1. [苗苗回应手心痣越来越大](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E5%9B%9E%E5%BA%94%E6%89%8B%E5%BF%83%E7%97%A3%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%A7%23) `178.0K 🔥` `-60%`
1. [南方人能做到真正的人车合一 (Southerners can truly integrate people and vehicles)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E4%BA%BA%E8%83%BD%E5%81%9A%E5%88%B0%E7%9C%9F%E6%AD%A3%E7%9A%84%E4%BA%BA%E8%BD%A6%E5%90%88%E4%B8%80%23) `175.4K 🔥` `-61%`
1. [吴宣仪母亲与乐华谈判视频首曝光](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%AF%8D%E4%BA%B2%E4%B8%8E%E4%B9%90%E5%8D%8E%E8%B0%88%E5%88%A4%E8%A7%86%E9%A2%91%E9%A6%96%E6%9B%9D%E5%85%89%23) `175.3K 🔥` `-63%`
1. [马頔发言争议后首发博](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E5%8F%91%E8%A8%80%E4%BA%89%E8%AE%AE%E5%90%8E%E9%A6%96%E5%8F%91%E5%8D%9A%23) `175.2K 🔥` `-64%`
1. [中国喂牛水果视频被冒用](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%96%82%E7%89%9B%E6%B0%B4%E6%9E%9C%E8%A7%86%E9%A2%91%E8%A2%AB%E5%86%92%E7%94%A8%23) `172.8K 🔥` `-60%`
1. [孙杨母子 镜像共生](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E6%AF%8D%E5%AD%90%20%E9%95%9C%E5%83%8F%E5%85%B1%E7%94%9F%23) `172.8K 🔥` `-65%`
1. [孟子义李昀锐奔跑吧错开录制 (Meng Ziyi and Li Yunrui's running staggered recording)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E5%A5%94%E8%B7%91%E5%90%A7%E9%94%99%E5%BC%80%E5%BD%95%E5%88%B6%23) `171.5K 🔥` `-62%`
1. [二手烟 唇腭裂](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%89%8B%E7%83%9F%20%E5%94%87%E8%85%AD%E8%A3%82%23) `159.2K 🔥` `-73%`
1. [强烈建议大家去看语文综艺](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E7%83%88%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8E%BB%E7%9C%8B%E8%AF%AD%E6%96%87%E7%BB%BC%E8%89%BA%23) `158.5K 🔥` `-69%`

Updated at 2026-04-30 19:02:05

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
