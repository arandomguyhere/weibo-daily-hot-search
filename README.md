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

1. [跑男转发区 (Running man forwarding area)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E8%BD%AC%E5%8F%91%E5%8C%BA%23) `606.3K 🔥` `NEW`
1. [季后赛首钢园第二现场](https://s.weibo.com/weibo?q=%23%E5%AD%A3%E5%90%8E%E8%B5%9B%E9%A6%96%E9%92%A2%E5%9B%AD%E7%AC%AC%E4%BA%8C%E7%8E%B0%E5%9C%BA%23) `575.7K 🔥` `NEW`
1. [罗马尼亚女团踩坏比赛球台](https://s.weibo.com/weibo?q=%23%E7%BD%97%E9%A9%AC%E5%B0%BC%E4%BA%9A%E5%A5%B3%E5%9B%A2%E8%B8%A9%E5%9D%8F%E6%AF%94%E8%B5%9B%E7%90%83%E5%8F%B0%23) `400.4K 🔥` `NEW`
1. [王楚钦在训练场得知国乒拿下韩国](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9C%A8%E8%AE%AD%E7%BB%83%E5%9C%BA%E5%BE%97%E7%9F%A5%E5%9B%BD%E4%B9%92%E6%8B%BF%E4%B8%8B%E9%9F%A9%E5%9B%BD%23) `395.3K 🔥` `NEW`
1. [曝王一博将进组刺客](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%B0%86%E8%BF%9B%E7%BB%84%E5%88%BA%E5%AE%A2%23) `374.1K 🔥` `NEW`
1. [张继科谈国乒男团进四强](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%B0%88%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E8%BF%9B%E5%9B%9B%E5%BC%BA%23) `366.5K 🔥` `NEW`
1. [张桂源给陈奕恒的祝福](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E7%BB%99%E9%99%88%E5%A5%95%E6%81%92%E7%9A%84%E7%A5%9D%E7%A6%8F%23) `313.4K 🔥` `NEW`
1. [女子打水光针后吃小龙虾满脸肉芽肿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%93%E6%B0%B4%E5%85%89%E9%92%88%E5%90%8E%E5%90%83%E5%B0%8F%E9%BE%99%E8%99%BE%E6%BB%A1%E8%84%B8%E8%82%89%E8%8A%BD%E8%82%BF%23) `194.4K 🔥` `NEW`
1. [榴莲仅退款事件有女生被误伤](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%BA%8B%E4%BB%B6%E6%9C%89%E5%A5%B3%E7%94%9F%E8%A2%AB%E8%AF%AF%E4%BC%A4%23) `191.9K 🔥` `NEW`
1. [拼多多商家教你5招选出好珍珠](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E5%95%86%E5%AE%B6%E6%95%99%E4%BD%A05%E6%8B%9B%E9%80%89%E5%87%BA%E5%A5%BD%E7%8F%8D%E7%8F%A0%23) `189.1K 🔥` `NEW`
1. [赵丽颖工作室告黑107条 (Zhao Liying's studio complained about 107 things)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%91%8A%E9%BB%91107%E6%9D%A1%23) `188.0K 🔥` `NEW`
1. [老人地铁撕扯女孩涉嫌违法](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%9C%B0%E9%93%81%E6%92%95%E6%89%AF%E5%A5%B3%E5%AD%A9%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `187.7K 🔥` `NEW`
1. [演员于娜回应减掉30斤](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E4%BA%8E%E5%A8%9C%E5%9B%9E%E5%BA%94%E5%87%8F%E6%8E%8930%E6%96%A4%23) `187.2K 🔥` `NEW`
1. [专家称涉事虾为泰国濑尿虾](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E6%B6%89%E4%BA%8B%E8%99%BE%E4%B8%BA%E6%B3%B0%E5%9B%BD%E6%BF%91%E5%B0%BF%E8%99%BE%23) `186.9K 🔥` `NEW`
1. [Bin说Tian在模仿他](https://s.weibo.com/weibo?q=%23Bin%E8%AF%B4Tian%E5%9C%A8%E6%A8%A1%E4%BB%BF%E4%BB%96%23) `173.5K 🔥` `NEW`
1. [男子掏空18部手机配件后申请退款](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8E%8F%E7%A9%BA18%E9%83%A8%E6%89%8B%E6%9C%BA%E9%85%8D%E4%BB%B6%E5%90%8E%E7%94%B3%E8%AF%B7%E9%80%80%E6%AC%BE%23) `145.9K 🔥` `NEW`
1. [陈哲远王楚然方都已取证](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%96%B9%E9%83%BD%E5%B7%B2%E5%8F%96%E8%AF%81%23) `145.7K 🔥` `NEW`
1. [不小心把晚安发给了妈妈](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%B0%8F%E5%BF%83%E6%8A%8A%E6%99%9A%E5%AE%89%E5%8F%91%E7%BB%99%E4%BA%86%E5%A6%88%E5%A6%88%23) `140.2K 🔥` `NEW`
1. [榴莲商家为同村文女士澄清](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E5%95%86%E5%AE%B6%E4%B8%BA%E5%90%8C%E6%9D%91%E6%96%87%E5%A5%B3%E5%A3%AB%E6%BE%84%E6%B8%85%23) `134.7K 🔥` `NEW`
1. [朝鲜军人参加俄罗斯红场阅兵](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E5%86%9B%E4%BA%BA%E5%8F%82%E5%8A%A0%E4%BF%84%E7%BD%97%E6%96%AF%E7%BA%A2%E5%9C%BA%E9%98%85%E5%85%B5%23) `133.6K 🔥` `NEW`
1. [AI模型 电子毒品 (AI model electronic drugs)](https://s.weibo.com/weibo?q=%23AI%E6%A8%A1%E5%9E%8B%20%E7%94%B5%E5%AD%90%E6%AF%92%E5%93%81%23) `133.5K 🔥` `NEW`
1. [AI短片 量产爱死机](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E7%89%87%20%E9%87%8F%E4%BA%A7%E7%88%B1%E6%AD%BB%E6%9C%BA%23) `133.4K 🔥` `NEW`
1. [无忧传媒已暂停王暖暖所有活动 (Wuyou Media has suspended all activities of Wang Nuannuan)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%BF%A7%E4%BC%A0%E5%AA%92%E5%B7%B2%E6%9A%82%E5%81%9C%E7%8E%8B%E6%9A%96%E6%9A%96%E6%89%80%E6%9C%89%E6%B4%BB%E5%8A%A8%23) `1.2M 🔥` `+312%`
1. [我国外贸延续良好增长态势](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%A4%96%E8%B4%B8%E5%BB%B6%E7%BB%AD%E8%89%AF%E5%A5%BD%E5%A2%9E%E9%95%BF%E6%80%81%E5%8A%BF%23) `1.2M 🔥` `+35%`
1. [奥迪E7X预售28.98万元起](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AAE7X%E9%A2%84%E5%94%AE28.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `1.2M 🔥` `+41%`
1. [6岁男童吃生菜后血肿感染寄生虫](https://s.weibo.com/weibo?q=%236%E5%B2%81%E7%94%B7%E7%AB%A5%E5%90%83%E7%94%9F%E8%8F%9C%E5%90%8E%E8%A1%80%E8%82%BF%E6%84%9F%E6%9F%93%E5%AF%84%E7%94%9F%E8%99%AB%23) `683.5K 🔥` `+149%`
1. [国际乒联为球台故障焦头烂额](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E4%B9%92%E8%81%94%E4%B8%BA%E7%90%83%E5%8F%B0%E6%95%85%E9%9A%9C%E7%84%A6%E5%A4%B4%E7%83%82%E9%A2%9D%23) `440.0K 🔥` `+169%`
1. [邓超发际线被打码](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%8F%91%E9%99%85%E7%BA%BF%E8%A2%AB%E6%89%93%E7%A0%81%23) `390.8K 🔥` `+39%`
1. [汪卓成被好莱坞找去演男主以为是诈骗](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%8D%93%E6%88%90%E8%A2%AB%E5%A5%BD%E8%8E%B1%E5%9D%9E%E6%89%BE%E5%8E%BB%E6%BC%94%E7%94%B7%E4%B8%BB%E4%BB%A5%E4%B8%BA%E6%98%AF%E8%AF%88%E9%AA%97%23) `389.4K 🔥` `+28%`
1. [男子贷27万离世银行追债30万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B4%B727%E4%B8%87%E7%A6%BB%E4%B8%96%E9%93%B6%E8%A1%8C%E8%BF%BD%E5%80%BA30%E4%B8%87%23) `382.3K 🔥` `+25%`
1. [有洁癖的人洗小龙虾](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%B4%81%E7%99%96%E7%9A%84%E4%BA%BA%E6%B4%97%E5%B0%8F%E9%BE%99%E8%99%BE%23) `193.6K 🔥` `+44%`
1. [陈奕恒翻唱Marry (Chen Yiheng covers Marry)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E7%BF%BB%E5%94%B1Marry%23) `188.6K 🔥` `+22%`
1. [给阿嬷的情书剧组穷成这样](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%89%A7%E7%BB%84%E7%A9%B7%E6%88%90%E8%BF%99%E6%A0%B7%23) `1.2M 🔥`
1. [母亲节礼物](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%82%E7%A4%BC%E7%89%A9%23) `442.6K 🔥`
1. [淘宝免单 李小冉](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%20%E6%9D%8E%E5%B0%8F%E5%86%89%23) `374.2K 🔥`
1. [西方抹黑中国换新词了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%96%B9%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD%E6%8D%A2%E6%96%B0%E8%AF%8D%E4%BA%86%23) `189.8K 🔥`
1. [杨幂江山大同跪地哭戏](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%E8%B7%AA%E5%9C%B0%E5%93%AD%E6%88%8F%23) `143.1K 🔥`
1. [DeepSeek正式跨入图文交互时代](https://s.weibo.com/weibo?q=%23DeepSeek%E6%AD%A3%E5%BC%8F%E8%B7%A8%E5%85%A5%E5%9B%BE%E6%96%87%E4%BA%A4%E4%BA%92%E6%97%B6%E4%BB%A3%23) `133.6K 🔥`
1. [车企锁电 (Automobile companies lock power)](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BC%81%E9%94%81%E7%94%B5%23) `1.4M 🔥` `-21%`
1. [奔跑吧回应收视率低 (Run Bar responds to low ratings)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E5%9B%9E%E5%BA%94%E6%94%B6%E8%A7%86%E7%8E%87%E4%BD%8E%23) `557.7K 🔥` `-30%`
1. [淘宝免单 (Taobao free order)](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%23) `286.8K 🔥` `-35%`
1. [8名中国人赴泰私拍短剧被逮捕](https://s.weibo.com/weibo?q=%238%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%B5%B4%E6%B3%B0%E7%A7%81%E6%8B%8D%E7%9F%AD%E5%89%A7%E8%A2%AB%E9%80%AE%E6%8D%95%23) `195.1K 🔥` `-41%`
1. [世界杯转播权 (World Cup broadcast rights)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `195.1K 🔥` `-74%`
1. [密室大逃脱 张真源 (Escape Room Zhang Zhenyuan)](https://s.weibo.com/weibo?q=%23%E5%AF%86%E5%AE%A4%E5%A4%A7%E9%80%83%E8%84%B1%20%E5%BC%A0%E7%9C%9F%E6%BA%90%23) `192.4K 🔥` `-27%`
1. [白鹿主动让C](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%BB%E5%8A%A8%E8%AE%A9C%23) `191.5K 🔥` `-36%`
1. [谁敢信这是同一天的杨幂](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E4%BF%A1%E8%BF%99%E6%98%AF%E5%90%8C%E4%B8%80%E5%A4%A9%E7%9A%84%E6%9D%A8%E5%B9%82%23) `190.5K 🔥` `-31%`
1. [谁来为无子女老人晚年兜底 (Who will provide for the childless elderly in their old age?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E4%B8%BA%E6%97%A0%E5%AD%90%E5%A5%B3%E8%80%81%E4%BA%BA%E6%99%9A%E5%B9%B4%E5%85%9C%E5%BA%95%23) `188.7K 🔥` `-25%`
1. [向太说郭碧婷拿捏了公婆的心](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E9%83%AD%E7%A2%A7%E5%A9%B7%E6%8B%BF%E6%8D%8F%E4%BA%86%E5%85%AC%E5%A9%86%E7%9A%84%E5%BF%83%23) `175.4K 🔥` `-34%`
1. [91岁老人子宫脱垂靠子宫托忍了30年](https://s.weibo.com/weibo?q=%2391%E5%B2%81%E8%80%81%E4%BA%BA%E5%AD%90%E5%AE%AB%E8%84%B1%E5%9E%82%E9%9D%A0%E5%AD%90%E5%AE%AB%E6%89%98%E5%BF%8D%E4%BA%8630%E5%B9%B4%23) `172.2K 🔥` `-28%`
1. [47岁韩国影后河智苑西湖独自夜跑](https://s.weibo.com/weibo?q=%2347%E5%B2%81%E9%9F%A9%E5%9B%BD%E5%BD%B1%E5%90%8E%E6%B2%B3%E6%99%BA%E8%8B%91%E8%A5%BF%E6%B9%96%E7%8B%AC%E8%87%AA%E5%A4%9C%E8%B7%91%23) `150.8K 🔥` `-39%`
1. [问界汽车否认被约谈](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E6%B1%BD%E8%BD%A6%E5%90%A6%E8%AE%A4%E8%A2%AB%E7%BA%A6%E8%B0%88%23) `140.3K 🔥` `-25%`
1. [给阿嬷的情书](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `133.7K 🔥` `-25%`

Updated at 2026-05-09 17:56:57

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
