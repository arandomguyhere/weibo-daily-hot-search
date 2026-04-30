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

1. [多部电影撤档五一 (Many movies withdrawn on May Day)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%83%A8%E7%94%B5%E5%BD%B1%E6%92%A4%E6%A1%A3%E4%BA%94%E4%B8%80%23) `1.1M 🔥` `NEW`
1. [国泰民安在舰艇开放日具象化了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E6%B3%B0%E6%B0%91%E5%AE%89%E5%9C%A8%E8%88%B0%E8%89%87%E5%BC%80%E6%94%BE%E6%97%A5%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `734.0K 🔥` `NEW`
1. [跑男老来得子](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E8%80%81%E6%9D%A5%E5%BE%97%E5%AD%90%23) `716.8K 🔥` `NEW`
1. [上飞猪抢龙之梦明星演出VIP199元](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%A3%9E%E7%8C%AA%E6%8A%A2%E9%BE%99%E4%B9%8B%E6%A2%A6%E6%98%8E%E6%98%9F%E6%BC%94%E5%87%BAVIP199%E5%85%83%23) `360.4K 🔥` `NEW`
1. [十二星座5月月运](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%8C%E6%98%9F%E5%BA%A75%E6%9C%88%E6%9C%88%E8%BF%90%23) `331.4K 🔥` `NEW`
1. [第一批聪明人已经堵在路上了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E8%81%AA%E6%98%8E%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%A0%B5%E5%9C%A8%E8%B7%AF%E4%B8%8A%E4%BA%86%23) `318.3K 🔥` `NEW`
1. [中国女孩拍摄靖国神社内部](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%A9%E6%8B%8D%E6%91%84%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E5%86%85%E9%83%A8%23) `310.9K 🔥` `NEW`
1. [女演员李心艾暴瘦80斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%9D%8E%E5%BF%83%E8%89%BE%E6%9A%B4%E7%98%A680%E6%96%A4%23) `304.6K 🔥` `NEW`
1. [校方回应孙杨博士入学近8年](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E6%96%B9%E5%9B%9E%E5%BA%94%E5%AD%99%E6%9D%A8%E5%8D%9A%E5%A3%AB%E5%85%A5%E5%AD%A6%E8%BF%918%E5%B9%B4%23) `286.3K 🔥` `NEW`
1. [当美国失去游客中国接住了世界](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%BE%8E%E5%9B%BD%E5%A4%B1%E5%8E%BB%E6%B8%B8%E5%AE%A2%E4%B8%AD%E5%9B%BD%E6%8E%A5%E4%BD%8F%E4%BA%86%E4%B8%96%E7%95%8C%23) `285.2K 🔥` `NEW`
1. [副所长诱未成年人吸毒被判5年 (Deputy director was sentenced to 5 years for luring minors into taking drugs)](https://s.weibo.com/weibo?q=%23%E5%89%AF%E6%89%80%E9%95%BF%E8%AF%B1%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E5%90%B8%E6%AF%92%E8%A2%AB%E5%88%A45%E5%B9%B4%23) `280.8K 🔥` `NEW`
1. [CORTIS一位](https://s.weibo.com/weibo?q=%23CORTIS%E4%B8%80%E4%BD%8D%23) `266.3K 🔥` `NEW`
1. [兄弟俩基因突变总不受控制乱咬](https://s.weibo.com/weibo?q=%23%E5%85%84%E5%BC%9F%E4%BF%A9%E5%9F%BA%E5%9B%A0%E7%AA%81%E5%8F%98%E6%80%BB%E4%B8%8D%E5%8F%97%E6%8E%A7%E5%88%B6%E4%B9%B1%E5%92%AC%23) `254.0K 🔥` `NEW`
1. [阿娇送阿sa的新婚礼物曝光](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A8%87%E9%80%81%E9%98%BFsa%E7%9A%84%E6%96%B0%E5%A9%9A%E7%A4%BC%E7%89%A9%E6%9B%9D%E5%85%89%23) `251.0K 🔥` `NEW`
1. [终于理解了什么是误闯天家](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E4%BA%86%E4%BB%80%E4%B9%88%E6%98%AF%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%23) `201.8K 🔥` `NEW`
1. [佳偶天成](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%23) `170.9K 🔥` `NEW`
1. [撒贝宁每次被偶遇都在带娃](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%E6%AF%8F%E6%AC%A1%E8%A2%AB%E5%81%B6%E9%81%87%E9%83%BD%E5%9C%A8%E5%B8%A6%E5%A8%83%23) `170.3K 🔥` `NEW`
1. [女子人流手术后腹痛25天排出棉球](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%BA%E6%B5%81%E6%89%8B%E6%9C%AF%E5%90%8E%E8%85%B9%E7%97%9B25%E5%A4%A9%E6%8E%92%E5%87%BA%E6%A3%89%E7%90%83%23) `169.8K 🔥` `NEW`
1. [时代少年团晴天娃娃发力中](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%99%B4%E5%A4%A9%E5%A8%83%E5%A8%83%E5%8F%91%E5%8A%9B%E4%B8%AD%23) `168.8K 🔥` `NEW`
1. [陶昕然硬刚营销号](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E7%A1%AC%E5%88%9A%E8%90%A5%E9%94%80%E5%8F%B7%23) `161.0K 🔥` `NEW`
1. [国防部发言人听到何剑嘴角难压 (The spokesperson of the Ministry of National Defense was speechless when he heard that He Jian)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E5%8F%91%E8%A8%80%E4%BA%BA%E5%90%AC%E5%88%B0%E4%BD%95%E5%89%91%E5%98%B4%E8%A7%92%E9%9A%BE%E5%8E%8B%23) `155.0K 🔥` `NEW`
1. [浪姐请了李小冉告过的博主](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%AF%B7%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%E5%91%8A%E8%BF%87%E7%9A%84%E5%8D%9A%E4%B8%BB%23) `696.4K 🔥` `+217%`
1. [女子徒手给月子里宝宝打耳洞](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BE%92%E6%89%8B%E7%BB%99%E6%9C%88%E5%AD%90%E9%87%8C%E5%AE%9D%E5%AE%9D%E6%89%93%E8%80%B3%E6%B4%9E%23) `438.7K 🔥` `+114%`
1. [金靖瘦到认不出来 (Jin Jing is so thin that he is unrecognizable)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `316.6K 🔥` `+130%`
1. [伊能静回应恩利争议视频](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E5%9B%9E%E5%BA%94%E6%81%A9%E5%88%A9%E4%BA%89%E8%AE%AE%E8%A7%86%E9%A2%91%23) `302.0K 🔥` `+34%`
1. [吵架的时候就回这一句太绝了](https://s.weibo.com/weibo?q=%23%E5%90%B5%E6%9E%B6%E7%9A%84%E6%97%B6%E5%80%99%E5%B0%B1%E5%9B%9E%E8%BF%99%E4%B8%80%E5%8F%A5%E5%A4%AA%E7%BB%9D%E4%BA%86%23) `297.9K 🔥` `+34%`
1. [李小冉 毫无运动痕迹](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E6%AF%AB%E6%97%A0%E8%BF%90%E5%8A%A8%E7%97%95%E8%BF%B9%23) `290.0K 🔥` `+45%`
1. [韩国霸王茶姬爆单](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E7%88%86%E5%8D%95%23) `288.8K 🔥` `+38%`
1. [曝孟美岐雪藏了两年才离开乐华](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AD%9F%E7%BE%8E%E5%B2%90%E9%9B%AA%E8%97%8F%E4%BA%86%E4%B8%A4%E5%B9%B4%E6%89%8D%E7%A6%BB%E5%BC%80%E4%B9%90%E5%8D%8E%23) `280.0K 🔥` `+46%`
1. [28岁攒到10万元女生已申请辞职](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E6%94%92%E5%88%B010%E4%B8%87%E5%85%83%E5%A5%B3%E7%94%9F%E5%B7%B2%E7%94%B3%E8%AF%B7%E8%BE%9E%E8%81%8C%23) `272.5K 🔥` `+39%`
1. [密逃8阵容 (Escape 8 lineup)](https://s.weibo.com/weibo?q=%23%E5%AF%86%E9%80%838%E9%98%B5%E5%AE%B9%23) `268.5K 🔥` `+27%`
1. [虞书欣造型](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%80%A0%E5%9E%8B%23) `253.4K 🔥` `+28%`
1. [中国喂牛水果视频被冒用 (Video of feeding fruits to cows in China was faked)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%96%82%E7%89%9B%E6%B0%B4%E6%9E%9C%E8%A7%86%E9%A2%91%E8%A2%AB%E5%86%92%E7%94%A8%23) `250.8K 🔥` `+45%`
1. [马頔发言争议后首发博](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E5%8F%91%E8%A8%80%E4%BA%89%E8%AE%AE%E5%90%8E%E9%A6%96%E5%8F%91%E5%8D%9A%23) `234.3K 🔥` `+34%`
1. [古天乐回应隐婚生子传闻](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E5%9B%9E%E5%BA%94%E9%9A%90%E5%A9%9A%E7%94%9F%E5%AD%90%E4%BC%A0%E9%97%BB%23) `233.4K 🔥` `+25%`
1. [香奈儿回应无底绑带鞋 (Chanel responds to bottomless lace-up shoes)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E5%A5%88%E5%84%BF%E5%9B%9E%E5%BA%94%E6%97%A0%E5%BA%95%E7%BB%91%E5%B8%A6%E9%9E%8B%23) `329.6K 🔥`
1. [谷歌入驻广州珠江新城](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8C%E5%85%A5%E9%A9%BB%E5%B9%BF%E5%B7%9E%E7%8F%A0%E6%B1%9F%E6%96%B0%E5%9F%8E%23) `323.0K 🔥`
1. [浪姐 背调](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E8%83%8C%E8%B0%83%23) `275.9K 🔥`
1. [突然发现开车通勤意味着自由](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%BC%80%E8%BD%A6%E9%80%9A%E5%8B%A4%E6%84%8F%E5%91%B3%E7%9D%80%E8%87%AA%E7%94%B1%23) `250.6K 🔥`
1. [孙杨母子 镜像共生](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E6%AF%8D%E5%AD%90%20%E9%95%9C%E5%83%8F%E5%85%B1%E7%94%9F%23) `201.8K 🔥`
1. [陈都灵在大学是华辩世锦赛主席](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%9C%A8%E5%A4%A7%E5%AD%A6%E6%98%AF%E5%8D%8E%E8%BE%A9%E4%B8%96%E9%94%A6%E8%B5%9B%E4%B8%BB%E5%B8%AD%23) `179.0K 🔥`
1. [妈妈上夜班3岁娃凌晨1点街头独行](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%B8%8A%E5%A4%9C%E7%8F%AD3%E5%B2%81%E5%A8%83%E5%87%8C%E6%99%A81%E7%82%B9%E8%A1%97%E5%A4%B4%E7%8B%AC%E8%A1%8C%23) `171.1K 🔥`
1. [iG官宣Nia加入](https://s.weibo.com/weibo?q=%23iG%E5%AE%98%E5%AE%A3Nia%E5%8A%A0%E5%85%A5%23) `169.1K 🔥`
1. [苗苗回应手心痣越来越大 (Miao Miao responded that the mole on her palm is getting bigger and bigger)](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E5%9B%9E%E5%BA%94%E6%89%8B%E5%BF%83%E7%97%A3%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%A7%23) `163.1K 🔥`
1. [宋雨琦 跑男](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E8%B7%91%E7%94%B7%23) `161.4K 🔥`
1. [多股20cm涨停](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%82%A120cm%E6%B6%A8%E5%81%9C%23) `150.4K 🔥`
1. [孟子义李昀锐奔跑吧错开录制 (Meng Ziyi and Li Yunrui's running staggered recording)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E5%A5%94%E8%B7%91%E5%90%A7%E9%94%99%E5%BC%80%E5%BD%95%E5%88%B6%23) `150.0K 🔥`
1. [收货地址不该成为被歧视的理由 (Shipping address should not be a reason for discrimination)](https://s.weibo.com/weibo?q=%23%E6%94%B6%E8%B4%A7%E5%9C%B0%E5%9D%80%E4%B8%8D%E8%AF%A5%E6%88%90%E4%B8%BA%E8%A2%AB%E6%AD%A7%E8%A7%86%E7%9A%84%E7%90%86%E7%94%B1%23) `821.4K 🔥` `-26%`
1. [阿姨买肉误输79万多随即取消支付 (Aunt accidentally lost more than 790,000 when buying meat and then canceled the payment)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A7%A8%E4%B9%B0%E8%82%89%E8%AF%AF%E8%BE%9379%E4%B8%87%E5%A4%9A%E9%9A%8F%E5%8D%B3%E5%8F%96%E6%B6%88%E6%94%AF%E4%BB%98%23) `270.0K 🔥` `-66%`
1. [世界泳联疑似内涵孙杨](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%B3%B3%E8%81%94%E7%96%91%E4%BC%BC%E5%86%85%E6%B6%B5%E5%AD%99%E6%9D%A8%23) `169.7K 🔥` `-21%`
1. [证监会原主席易会满被双开](https://s.weibo.com/weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%E5%8E%9F%E4%B8%BB%E5%B8%AD%E6%98%93%E4%BC%9A%E6%BB%A1%E8%A2%AB%E5%8F%8C%E5%BC%80%23) `162.7K 🔥` `-28%`

Updated at 2026-04-30 20:21:05

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
