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

1. [张杰谢娜小说都不敢写的地步 (Zhang Jie and Xie Na dare not even write novels)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%B0%A2%E5%A8%9C%E5%B0%8F%E8%AF%B4%E9%83%BD%E4%B8%8D%E6%95%A2%E5%86%99%E7%9A%84%E5%9C%B0%E6%AD%A5%23) `130.5K 🔥` `NEW`
1. [高市早苗下跪看清日本丑恶嘴脸](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E4%B8%8B%E8%B7%AA%E7%9C%8B%E6%B8%85%E6%97%A5%E6%9C%AC%E4%B8%91%E6%81%B6%E5%98%B4%E8%84%B8%23) `129.9K 🔥` `NEW`
1. [4只皮皮虾1035元涉事海鲜店回应](https://s.weibo.com/weibo?q=%234%E5%8F%AA%E7%9A%AE%E7%9A%AE%E8%99%BE1035%E5%85%83%E6%B6%89%E4%BA%8B%E6%B5%B7%E9%B2%9C%E5%BA%97%E5%9B%9E%E5%BA%94%23) `129.8K 🔥` `NEW`
1. [英伟达宣布与康宁建立长期合作关系](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%AE%A3%E5%B8%83%E4%B8%8E%E5%BA%B7%E5%AE%81%E5%BB%BA%E7%AB%8B%E9%95%BF%E6%9C%9F%E5%90%88%E4%BD%9C%E5%85%B3%E7%B3%BB%23) `128.9K 🔥` `NEW`
1. [医生称钙片不用买太贵的](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%A7%B0%E9%92%99%E7%89%87%E4%B8%8D%E7%94%A8%E4%B9%B0%E5%A4%AA%E8%B4%B5%E7%9A%84%23) `128.4K 🔥` `NEW`
1. [国际足联可能已经慌了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E5%8F%AF%E8%83%BD%E5%B7%B2%E7%BB%8F%E6%85%8C%E4%BA%86%23) `128.0K 🔥` `NEW`
1. [有人给TOP买了五个防毒面具](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E7%BB%99TOP%E4%B9%B0%E4%BA%86%E4%BA%94%E4%B8%AA%E9%98%B2%E6%AF%92%E9%9D%A2%E5%85%B7%23) `127.0K 🔥` `NEW`
1. [爸爸的沉默比任何骂都让人后怕](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E7%9A%84%E6%B2%89%E9%BB%98%E6%AF%94%E4%BB%BB%E4%BD%95%E9%AA%82%E9%83%BD%E8%AE%A9%E4%BA%BA%E5%90%8E%E6%80%95%23) `126.7K 🔥` `NEW`
1. [你以为是常识的冷知识](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%A5%E4%B8%BA%E6%98%AF%E5%B8%B8%E8%AF%86%E7%9A%84%E5%86%B7%E7%9F%A5%E8%AF%86%23) `123.4K 🔥` `NEW`
1. [何炅躲过了所有路透](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E8%BA%B2%E8%BF%87%E4%BA%86%E6%89%80%E6%9C%89%E8%B7%AF%E9%80%8F%23) `116.2K 🔥` `NEW`
1. [深圳女子受精卵钻入主动脉夹层 (Shenzhen woman's fertilized egg burrows into aortic dissection)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%A5%B3%E5%AD%90%E5%8F%97%E7%B2%BE%E5%8D%B5%E9%92%BB%E5%85%A5%E4%B8%BB%E5%8A%A8%E8%84%89%E5%A4%B9%E5%B1%82%23) `112.6K 🔥` `NEW`
1. [和乙肝患者在一起吃饭会被传染吗](https://s.weibo.com/weibo?q=%23%E5%92%8C%E4%B9%99%E8%82%9D%E6%82%A3%E8%80%85%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%90%83%E9%A5%AD%E4%BC%9A%E8%A2%AB%E4%BC%A0%E6%9F%93%E5%90%97%23) `101.7K 🔥` `NEW`
1. [大陆台资企业严禁任何资源支持台独](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%99%86%E5%8F%B0%E8%B5%84%E4%BC%81%E4%B8%9A%E4%B8%A5%E7%A6%81%E4%BB%BB%E4%BD%95%E8%B5%84%E6%BA%90%E6%94%AF%E6%8C%81%E5%8F%B0%E7%8B%AC%23) `100.0K 🔥` `NEW`
1. [中国球迷力挺央视](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%90%83%E8%BF%B7%E5%8A%9B%E6%8C%BA%E5%A4%AE%E8%A7%86%23) `90.2K 🔥` `NEW`
1. [瑞士发现1例汉坦病毒感染病例](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%AB%E5%8F%91%E7%8E%B01%E4%BE%8B%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E6%84%9F%E6%9F%93%E7%97%85%E4%BE%8B%23) `74.3K 🔥` `NEW`
1. [FIFA涨价理由](https://s.weibo.com/weibo?q=%23FIFA%E6%B6%A8%E4%BB%B7%E7%90%86%E7%94%B1%23) `67.9K 🔥` `NEW`
1. [暴发致命病毒邮轮或出现人传人现象 (Deadly virus outbreak on cruise ship may lead to human-to-human transmission)](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E5%8F%91%E8%87%B4%E5%91%BD%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E6%88%96%E5%87%BA%E7%8E%B0%E4%BA%BA%E4%BC%A0%E4%BA%BA%E7%8E%B0%E8%B1%A1%23) `888.9K 🔥` `+85%`
1. [伦敦世乒赛团体赛 (London World Table Tennis Championships Team Competition)](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%9B%A2%E4%BD%93%E8%B5%9B%23) `633.9K 🔥` `+89%`
1. [来中国玩的外国人更多了](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E4%B8%AD%E5%9B%BD%E7%8E%A9%E7%9A%84%E5%A4%96%E5%9B%BD%E4%BA%BA%E6%9B%B4%E5%A4%9A%E4%BA%86%23) `495.6K 🔥` `+84%`
1. [白鹿跑男争议 内娱综艺审美巨变](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%91%E7%94%B7%E4%BA%89%E8%AE%AE%20%E5%86%85%E5%A8%B1%E7%BB%BC%E8%89%BA%E5%AE%A1%E7%BE%8E%E5%B7%A8%E5%8F%98%23) `488.5K 🔥` `+101%`
1. [有AI真好 放以前没十几亿下不来 (It’s great to have AI. Before, it couldn’t be purchased without more than a billion dollars.)](https://s.weibo.com/weibo?q=%23%E6%9C%89AI%E7%9C%9F%E5%A5%BD%20%E6%94%BE%E4%BB%A5%E5%89%8D%E6%B2%A1%E5%8D%81%E5%87%A0%E4%BA%BF%E4%B8%8B%E4%B8%8D%E6%9D%A5%23) `316.1K 🔥` `+159%`
1. [解除台独刘世芳亲属全部职务](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E9%99%A4%E5%8F%B0%E7%8B%AC%E5%88%98%E4%B8%96%E8%8A%B3%E4%BA%B2%E5%B1%9E%E5%85%A8%E9%83%A8%E8%81%8C%E5%8A%A1%23) `314.3K 🔥` `+136%`
1. [网友曝三亚4只皮皮虾收费1035元](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%9B%9D%E4%B8%89%E4%BA%9A4%E5%8F%AA%E7%9A%AE%E7%9A%AE%E8%99%BE%E6%94%B6%E8%B4%B91035%E5%85%83%23) `285.5K 🔥` `+96%`
1. [为什么户外千万不要穿迷彩 (Why you should never wear camouflage outdoors)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%B7%E5%A4%96%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%A9%BF%E8%BF%B7%E5%BD%A9%23) `240.7K 🔥` `+91%`
1. [花少8最新阵容 (Hua Shao 8 latest lineup)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E6%9C%80%E6%96%B0%E9%98%B5%E5%AE%B9%23) `130.8K 🔥` `+59%`
1. [男助产士撞脸张凌赫孕妈变迷妹 (Male midwife bumps into Zhang Linghe’s pregnant mother and turns into a fan girl)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8A%A9%E4%BA%A7%E5%A3%AB%E6%92%9E%E8%84%B8%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AD%95%E5%A6%88%E5%8F%98%E8%BF%B7%E5%A6%B9%23) `130.7K 🔥` `+55%`
1. [世界杯中国赞助商投入超5亿美元](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9B%BD%E8%B5%9E%E5%8A%A9%E5%95%86%E6%8A%95%E5%85%A5%E8%B6%855%E4%BA%BF%E7%BE%8E%E5%85%83%23) `130.1K 🔥` `+54%`
1. [新人结婚被丢高速口路过宾利变婚车](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%BA%BA%E7%BB%93%E5%A9%9A%E8%A2%AB%E4%B8%A2%E9%AB%98%E9%80%9F%E5%8F%A3%E8%B7%AF%E8%BF%87%E5%AE%BE%E5%88%A9%E5%8F%98%E5%A9%9A%E8%BD%A6%23) `129.6K 🔥` `+54%`
1. [卢昱晓把刀拿反了](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%8A%8A%E5%88%80%E6%8B%BF%E5%8F%8D%E4%BA%86%23) `129.3K 🔥` `+287%`
1. [红山动物园我将继续拥护你 (Hongshan Zoo I will continue to support you)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%B1%B1%E5%8A%A8%E7%89%A9%E5%9B%AD%E6%88%91%E5%B0%86%E7%BB%A7%E7%BB%AD%E6%8B%A5%E6%8A%A4%E4%BD%A0%23) `128.7K 🔥` `+87%`
1. [EXO King](https://s.weibo.com/weibo?q=%23EXO%20King%23) `128.3K 🔥` `+424%`
1. [孟子义一手抓绳一手护着白鹿 (Meng Ziyi grabs the rope with one hand and protects the white deer with the other)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%80%E6%89%8B%E6%8A%93%E7%BB%B3%E4%B8%80%E6%89%8B%E6%8A%A4%E7%9D%80%E7%99%BD%E9%B9%BF%23) `127.7K 🔥` `+96%`
1. [三星 (Samsung)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%23) `127.5K 🔥` `+119%`
1. [婴儿被生父照顾10分钟离奇窒息脑瘫 (The baby was mysteriously suffocated and suffered cerebral palsy after being cared for by his biological father for 10 minutes.)](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E8%A2%AB%E7%94%9F%E7%88%B6%E7%85%A7%E9%A1%BE10%E5%88%86%E9%92%9F%E7%A6%BB%E5%A5%87%E7%AA%92%E6%81%AF%E8%84%91%E7%98%AB%23) `127.3K 🔥` `+51%`
1. [绥化2名失联女孩遗体已送至殡仪馆](https://s.weibo.com/weibo?q=%23%E7%BB%A5%E5%8C%962%E5%90%8D%E5%A4%B1%E8%81%94%E5%A5%B3%E5%AD%A9%E9%81%97%E4%BD%93%E5%B7%B2%E9%80%81%E8%87%B3%E6%AE%A1%E4%BB%AA%E9%A6%86%23) `126.8K 🔥` `+51%`
1. [中国强硬拒绝世界杯天价转播费](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%BA%E7%A1%AC%E6%8B%92%E7%BB%9D%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%A9%E4%BB%B7%E8%BD%AC%E6%92%AD%E8%B4%B9%23) `123.5K 🔥` `+87%`
1. [王骁演技 (Wang Xiao's acting skills)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%E6%BC%94%E6%8A%80%23) `108.1K 🔥` `+29%`
1. [星空卫视下星 (Star TV satellite)](https://s.weibo.com/weibo?q=%23%E6%98%9F%E7%A9%BA%E5%8D%AB%E8%A7%86%E4%B8%8B%E6%98%9F%23) `101.5K 🔥` `+36%`
1. [小狗靠捡瓶子攒了10万](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E9%9D%A0%E6%8D%A1%E7%93%B6%E5%AD%90%E6%94%92%E4%BA%8610%E4%B8%87%23) `95.1K 🔥` `+114%`
1. [邓凯孔雪儿 长宁帝军](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E5%AD%94%E9%9B%AA%E5%84%BF%20%E9%95%BF%E5%AE%81%E5%B8%9D%E5%86%9B%23) `81.6K 🔥` `+45%`
1. [河北两女子长得一模一样孩子认错妈](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E4%B8%A4%E5%A5%B3%E5%AD%90%E9%95%BF%E5%BE%97%E4%B8%80%E6%A8%A1%E4%B8%80%E6%A0%B7%E5%AD%A9%E5%AD%90%E8%AE%A4%E9%94%99%E5%A6%88%23) `79.1K 🔥` `+58%`
1. [药店闭店潮持续 (Pharmacy store closures continue)](https://s.weibo.com/weibo?q=%23%E8%8D%AF%E5%BA%97%E9%97%AD%E5%BA%97%E6%BD%AE%E6%8C%81%E7%BB%AD%23) `76.9K 🔥` `+55%`
1. [病毒邮轮](https://s.weibo.com/weibo?q=%23%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%23) `72.0K 🔥` `+51%`
1. [檀健次为不干扰拍摄把保镖支走](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E4%B8%BA%E4%B8%8D%E5%B9%B2%E6%89%B0%E6%8B%8D%E6%91%84%E6%8A%8A%E4%BF%9D%E9%95%96%E6%94%AF%E8%B5%B0%23) `68.5K 🔥` `+32%`
1. [meiko赛后发文](https://s.weibo.com/weibo?q=%23meiko%E8%B5%9B%E5%90%8E%E5%8F%91%E6%96%87%23) `64.4K 🔥` `+74%`
1. [焦虑时先自查 饭否冷否](https://s.weibo.com/weibo?q=%23%E7%84%A6%E8%99%91%E6%97%B6%E5%85%88%E8%87%AA%E6%9F%A5%20%E9%A5%AD%E5%90%A6%E5%86%B7%E5%90%A6%23) `64.4K 🔥` `+86%`
1. [主角OST请来了王菲 (The protagonist OST invited Faye Wong)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92OST%E8%AF%B7%E6%9D%A5%E4%BA%86%E7%8E%8B%E8%8F%B2%23) `161.0K 🔥`
1. [中国女子在西班牙被刺身亡](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E8%A5%BF%E7%8F%AD%E7%89%99%E8%A2%AB%E5%88%BA%E8%BA%AB%E4%BA%A1%23) `101.1K 🔥`
1. [钟薛高破产后508件资产207万起拍 (After Zhong Xuegao went bankrupt, 508 assets were auctioned starting at 2.07 million)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E8%96%9B%E9%AB%98%E7%A0%B4%E4%BA%A7%E5%90%8E508%E4%BB%B6%E8%B5%84%E4%BA%A7207%E4%B8%87%E8%B5%B7%E6%8B%8D%23) `74.1K 🔥`

Updated at 2026-05-07 07:32:17

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
