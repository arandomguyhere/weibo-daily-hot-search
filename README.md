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

1. [高考分数线 (College Entrance Examination Score Cutoff)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `2.7M 🔥` `NEW`
1. [广东高考分数线](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `1.8M 🔥` `NEW`
1. [最新一批灯塔工厂一半在中国](https://s.weibo.com/weibo?q=%23%E6%9C%80%E6%96%B0%E4%B8%80%E6%89%B9%E7%81%AF%E5%A1%94%E5%B7%A5%E5%8E%82%E4%B8%80%E5%8D%8A%E5%9C%A8%E4%B8%AD%E5%9B%BD%23) `1.7M 🔥` `NEW`
1. [千万不要买路边切好的半个西瓜](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E4%B9%B0%E8%B7%AF%E8%BE%B9%E5%88%87%E5%A5%BD%E7%9A%84%E5%8D%8A%E4%B8%AA%E8%A5%BF%E7%93%9C%23) `1.7M 🔥` `NEW`
1. [孟子义李昀锐双人拍立得](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E5%8F%8C%E4%BA%BA%E6%8B%8D%E7%AB%8B%E5%BE%97%23) `1.6M 🔥` `NEW`
1. [你只是高考完了不是家里发财了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%8F%AA%E6%98%AF%E9%AB%98%E8%80%83%E5%AE%8C%E4%BA%86%E4%B8%8D%E6%98%AF%E5%AE%B6%E9%87%8C%E5%8F%91%E8%B4%A2%E4%BA%86%23) `1.4M 🔥` `NEW`
1. [闪充一下满电上场](https://s.weibo.com/weibo?q=%23%E9%97%AA%E5%85%85%E4%B8%80%E4%B8%8B%E6%BB%A1%E7%94%B5%E4%B8%8A%E5%9C%BA%23) `1.2M 🔥` `NEW`
1. [逆水寒 丢人](https://s.weibo.com/weibo?q=%23%E9%80%86%E6%B0%B4%E5%AF%92%20%E4%B8%A2%E4%BA%BA%23) `880.4K 🔥` `NEW`
1. [C罗siu完樊振东siu](https://s.weibo.com/weibo?q=%23C%E7%BD%97siu%E5%AE%8C%E6%A8%8A%E6%8C%AF%E4%B8%9Csiu%23) `853.5K 🔥` `NEW`
1. [豆包专业版发布](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E4%B8%93%E4%B8%9A%E7%89%88%E5%8F%91%E5%B8%83%23) `755.4K 🔥` `NEW`
1. [G社拍的杨紫 (Yang Zi photographed by G agency)](https://s.weibo.com/weibo?q=%23G%E7%A4%BE%E6%8B%8D%E7%9A%84%E6%9D%A8%E7%B4%AB%23) `754.0K 🔥` `NEW`
1. [逆水寒王者荣耀](https://s.weibo.com/weibo?q=%23%E9%80%86%E6%B0%B4%E5%AF%92%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `752.8K 🔥` `NEW`
1. [龚俊遛的狗是临时找路人借的](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E9%81%9B%E7%9A%84%E7%8B%97%E6%98%AF%E4%B8%B4%E6%97%B6%E6%89%BE%E8%B7%AF%E4%BA%BA%E5%80%9F%E7%9A%84%23) `708.7K 🔥` `NEW`
1. [丁禹兮孟子义爱在无尽夏宣发](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%AD%9F%E5%AD%90%E4%B9%89%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%E5%AE%A3%E5%8F%91%23) `700.1K 🔥` `NEW`
1. [老外问我这是相机还是手机](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E9%97%AE%E6%88%91%E8%BF%99%E6%98%AF%E7%9B%B8%E6%9C%BA%E8%BF%98%E6%98%AF%E6%89%8B%E6%9C%BA%23) `694.8K 🔥` `NEW`
1. [nova16记录斩神2热血瞬间](https://s.weibo.com/weibo?q=%23nova16%E8%AE%B0%E5%BD%95%E6%96%A9%E7%A5%9E2%E7%83%AD%E8%A1%80%E7%9E%AC%E9%97%B4%23) `654.2K 🔥` `NEW`
1. [杨紫 看得出她是公主](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E7%9C%8B%E5%BE%97%E5%87%BA%E5%A5%B9%E6%98%AF%E5%85%AC%E4%B8%BB%23) `628.6K 🔥` `NEW`
1. [以色列证实向伊朗偷运数万星链](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%AF%81%E5%AE%9E%E5%90%91%E4%BC%8A%E6%9C%97%E5%81%B7%E8%BF%90%E6%95%B0%E4%B8%87%E6%98%9F%E9%93%BE%23) `618.5K 🔥` `NEW`
1. [4名香港女子在澳门疑捡钱不还被捕](https://s.weibo.com/weibo?q=%234%E5%90%8D%E9%A6%99%E6%B8%AF%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%BE%B3%E9%97%A8%E7%96%91%E6%8D%A1%E9%92%B1%E4%B8%8D%E8%BF%98%E8%A2%AB%E6%8D%95%23) `581.9K 🔥` `NEW`
1. [夫妻同吃见手青丈夫以为妻子是蛇](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E5%90%8C%E5%90%83%E8%A7%81%E6%89%8B%E9%9D%92%E4%B8%88%E5%A4%AB%E4%BB%A5%E4%B8%BA%E5%A6%BB%E5%AD%90%E6%98%AF%E8%9B%87%23) `575.4K 🔥` `NEW`
1. [立陶宛叫停与台当局合作 (Lithuania suspends cooperation with Taiwan authorities)](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E9%99%B6%E5%AE%9B%E5%8F%AB%E5%81%9C%E4%B8%8E%E5%8F%B0%E5%BD%93%E5%B1%80%E5%90%88%E4%BD%9C%23) `538.2K 🔥` `NEW`
1. [白鹿陆虎认识十年了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%99%86%E8%99%8E%E8%AE%A4%E8%AF%86%E5%8D%81%E5%B9%B4%E4%BA%86%23) `518.7K 🔥` `NEW`
1. [13岁女孩亲述遭强奸始末](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%BA%B2%E8%BF%B0%E9%81%AD%E5%BC%BA%E5%A5%B8%E5%A7%8B%E6%9C%AB%23) `498.4K 🔥` `NEW`
1. [王俊凯作词作曲真相](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BD%9C%E8%AF%8D%E4%BD%9C%E6%9B%B2%E7%9C%9F%E7%9B%B8%23) `496.0K 🔥` `NEW`
1. [丁禹兮现偶眉庄回归](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%8E%B0%E5%81%B6%E7%9C%89%E5%BA%84%E5%9B%9E%E5%BD%92%23) `493.1K 🔥` `NEW`
1. [2026高考分数线全汇总](https://s.weibo.com/weibo?q=%232026%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%E5%85%A8%E6%B1%87%E6%80%BB%23) `486.9K 🔥` `NEW`
1. [挖眼案受害男孩高考721分班主任发声](https://s.weibo.com/weibo?q=%23%E6%8C%96%E7%9C%BC%E6%A1%88%E5%8F%97%E5%AE%B3%E7%94%B7%E5%AD%A9%E9%AB%98%E8%80%83721%E5%88%86%E7%8F%AD%E4%B8%BB%E4%BB%BB%E5%8F%91%E5%A3%B0%23) `480.0K 🔥` `NEW`
1. [金价见底三大信号](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%A7%81%E5%BA%95%E4%B8%89%E5%A4%A7%E4%BF%A1%E5%8F%B7%23) `479.6K 🔥` `NEW`
1. [流水的英国首相铁打的猫咪](https://s.weibo.com/weibo?q=%23%E6%B5%81%E6%B0%B4%E7%9A%84%E8%8B%B1%E5%9B%BD%E9%A6%96%E7%9B%B8%E9%93%81%E6%89%93%E7%9A%84%E7%8C%AB%E5%92%AA%23) `471.7K 🔥` `NEW`
1. [堂姐介绍的富二代男友竟是她自己](https://s.weibo.com/weibo?q=%23%E5%A0%82%E5%A7%90%E4%BB%8B%E7%BB%8D%E7%9A%84%E5%AF%8C%E4%BA%8C%E4%BB%A3%E7%94%B7%E5%8F%8B%E7%AB%9F%E6%98%AF%E5%A5%B9%E8%87%AA%E5%B7%B1%23) `468.8K 🔥` `NEW`
1. [领导八万六的沙发是我的奖金 (The leader's 86,000 sofa is my bonus)](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%AF%BC%E5%85%AB%E4%B8%87%E5%85%AD%E7%9A%84%E6%B2%99%E5%8F%91%E6%98%AF%E6%88%91%E7%9A%84%E5%A5%96%E9%87%91%23) `461.9K 🔥` `NEW`
1. [朴彩英称艺名像老奶奶](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BD%A9%E8%8B%B1%E7%A7%B0%E8%89%BA%E5%90%8D%E5%83%8F%E8%80%81%E5%A5%B6%E5%A5%B6%23) `458.8K 🔥` `NEW`
1. [光与夜之恋五周年](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%E4%BA%94%E5%91%A8%E5%B9%B4%23) `426.6K 🔥` `NEW`
1. [女子公司如厕感染粪便病菌无法吞咽](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%85%AC%E5%8F%B8%E5%A6%82%E5%8E%95%E6%84%9F%E6%9F%93%E7%B2%AA%E4%BE%BF%E7%97%85%E8%8F%8C%E6%97%A0%E6%B3%95%E5%90%9E%E5%92%BD%23) `419.2K 🔥` `NEW`
1. [东亚父母的终极幻想](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E4%BA%9A%E7%88%B6%E6%AF%8D%E7%9A%84%E7%BB%88%E6%9E%81%E5%B9%BB%E6%83%B3%23) `411.9K 🔥` `NEW`
1. [Angelababy带小海绵玩真人CS](https://s.weibo.com/weibo?q=%23Angelababy%E5%B8%A6%E5%B0%8F%E6%B5%B7%E7%BB%B5%E7%8E%A9%E7%9C%9F%E4%BA%BACS%23) `410.8K 🔥` `NEW`
1. [尚公主](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `407.6K 🔥` `NEW`
1. [宋亚轩 信不信妈妈可以把你变小](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E4%BF%A1%E4%B8%8D%E4%BF%A1%E5%A6%88%E5%A6%88%E5%8F%AF%E4%BB%A5%E6%8A%8A%E4%BD%A0%E5%8F%98%E5%B0%8F%23) `403.3K 🔥` `NEW`
1. [广州3年停运134条公交线路](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E3%E5%B9%B4%E5%81%9C%E8%BF%90134%E6%9D%A1%E5%85%AC%E4%BA%A4%E7%BA%BF%E8%B7%AF%23) `400.3K 🔥` `NEW`
1. [甲酰胺风波线下母婴店现状](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%85%B0%E8%83%BA%E9%A3%8E%E6%B3%A2%E7%BA%BF%E4%B8%8B%E6%AF%8D%E5%A9%B4%E5%BA%97%E7%8E%B0%E7%8A%B6%23) `399.5K 🔥` `NEW`
1. [女生高考查分601分老师鸣礼炮欢呼 (The teacher fired a gun salute and cheered after a girl scored 601 in the college entrance examination)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E9%AB%98%E8%80%83%E6%9F%A5%E5%88%86601%E5%88%86%E8%80%81%E5%B8%88%E9%B8%A3%E7%A4%BC%E7%82%AE%E6%AC%A2%E5%91%BC%23) `397.2K 🔥` `NEW`
1. [C罗回应对决阿根廷](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%9B%9E%E5%BA%94%E5%AF%B9%E5%86%B3%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `330.5K 🔥` `NEW`
1. [TFBOYS转发王俊凯新歌W](https://s.weibo.com/weibo?q=%23TFBOYS%E8%BD%AC%E5%8F%91%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%96%B0%E6%AD%8CW%23) `329.1K 🔥` `NEW`
1. [尚公主姓氏笔画排序](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%A7%93%E6%B0%8F%E7%AC%94%E7%94%BB%E6%8E%92%E5%BA%8F%23) `328.4K 🔥` `NEW`
1. [小米自动驾驶浙赛圈速SUV总榜第11](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E6%B5%99%E8%B5%9B%E5%9C%88%E9%80%9FSUV%E6%80%BB%E6%A6%9C%E7%AC%AC11%23) `327.9K 🔥` `NEW`
1. [孙子被儿子女友踢死前爷爷曾反对离婚](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E8%A2%AB%E5%84%BF%E5%AD%90%E5%A5%B3%E5%8F%8B%E8%B8%A2%E6%AD%BB%E5%89%8D%E7%88%B7%E7%88%B7%E6%9B%BE%E5%8F%8D%E5%AF%B9%E7%A6%BB%E5%A9%9A%23) `327.9K 🔥` `NEW`
1. [公平镇拖欠污水处理服务费近七年](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%B9%B3%E9%95%87%E6%8B%96%E6%AC%A0%E6%B1%A1%E6%B0%B4%E5%A4%84%E7%90%86%E6%9C%8D%E5%8A%A1%E8%B4%B9%E8%BF%91%E4%B8%83%E5%B9%B4%23) `304.6K 🔥` `NEW`
1. [宋祖儿本名有重新练号的感觉](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E6%9C%AC%E5%90%8D%E6%9C%89%E9%87%8D%E6%96%B0%E7%BB%83%E5%8F%B7%E7%9A%84%E6%84%9F%E8%A7%89%23) `764.5K 🔥` `+220%`
1. [平台通报李金铭假婆婆事件 (Platform reports Li Jinming’s fake mother-in-law incident)](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E9%80%9A%E6%8A%A5%E6%9D%8E%E9%87%91%E9%93%AD%E5%81%87%E5%A9%86%E5%A9%86%E4%BA%8B%E4%BB%B6%23) `754.3K 🔥` `+117%`
1. [C罗骗过全世界 (Cristiano Ronaldo deceived the whole world)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%AA%97%E8%BF%87%E5%85%A8%E4%B8%96%E7%95%8C%23) `495.3K 🔥` `+47%`
1. [C罗成为葡萄牙世界杯射手王](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%88%90%E4%B8%BA%E8%91%A1%E8%90%84%E7%89%99%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%84%E6%89%8B%E7%8E%8B%23) `502.7K 🔥` `-95%`

Updated at 2026-06-24 12:41:00

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
