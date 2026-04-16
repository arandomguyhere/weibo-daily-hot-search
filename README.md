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

1. [澳门老炮喊话B太 (Macau veteran shouts out to Mrs. B)](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E8%80%81%E7%82%AE%E5%96%8A%E8%AF%9DB%E5%A4%AA%23) `1.1M 🔥` `NEW`
1. [22岁被杀女孩生前爱狗离世后狗上门](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E8%A2%AB%E6%9D%80%E5%A5%B3%E5%AD%A9%E7%94%9F%E5%89%8D%E7%88%B1%E7%8B%97%E7%A6%BB%E4%B8%96%E5%90%8E%E7%8B%97%E4%B8%8A%E9%97%A8%23) `794.9K 🔥` `NEW`
1. [2026年一季度GDP同比增长5.0%](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%B8%80%E5%AD%A3%E5%BA%A6GDP%E5%90%8C%E6%AF%94%E5%A2%9E%E9%95%BF5.0%25%23) `623.7K 🔥` `NEW`
1. [孙怡cos黎璃](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1cos%E9%BB%8E%E7%92%83%23) `488.5K 🔥` `NEW`
1. [金建希见尹锡悦被曝情绪崩溃](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%BB%BA%E5%B8%8C%E8%A7%81%E5%B0%B9%E9%94%A1%E6%82%A6%E8%A2%AB%E6%9B%9D%E6%83%85%E7%BB%AA%E5%B4%A9%E6%BA%83%23) `334.0K 🔥` `NEW`
1. [孙丞潇妈妈发红包给金莎](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B8%9E%E6%BD%87%E5%A6%88%E5%A6%88%E5%8F%91%E7%BA%A2%E5%8C%85%E7%BB%99%E9%87%91%E8%8E%8E%23) `316.5K 🔥` `NEW`
1. [2026我的动物朋友](https://s.weibo.com/weibo?q=%232026%E6%88%91%E7%9A%84%E5%8A%A8%E7%89%A9%E6%9C%8B%E5%8F%8B%23) `308.8K 🔥` `NEW`
1. [黄瓜泡面](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E6%B3%A1%E9%9D%A2%23) `186.8K 🔥` `NEW`
1. [北影节红毯](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%BD%B1%E8%8A%82%E7%BA%A2%E6%AF%AF%23) `181.4K 🔥` `NEW`
1. [雷军将全程直播15小时](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%B0%86%E5%85%A8%E7%A8%8B%E7%9B%B4%E6%92%AD15%E5%B0%8F%E6%97%B6%23) `151.8K 🔥` `NEW`
1. [中美就特朗普访华保持着沟通 (China and the United States maintain communication regarding Trump's visit to China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%B0%B1%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E4%BF%9D%E6%8C%81%E7%9D%80%E6%B2%9F%E9%80%9A%23) `150.1K 🔥` `NEW`
1. [冯提莫承认整容](https://s.weibo.com/weibo?q=%23%E5%86%AF%E6%8F%90%E8%8E%AB%E6%89%BF%E8%AE%A4%E6%95%B4%E5%AE%B9%23) `144.4K 🔥` `NEW`
1. [曝包洁仪凄惨身世是假的](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8C%85%E6%B4%81%E4%BB%AA%E5%87%84%E6%83%A8%E8%BA%AB%E4%B8%96%E6%98%AF%E5%81%87%E7%9A%84%23) `133.4K 🔥` `NEW`
1. [杀害罗大美主犯余金生被执行死刑](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E7%BD%97%E5%A4%A7%E7%BE%8E%E4%B8%BB%E7%8A%AF%E4%BD%99%E9%87%91%E7%94%9F%E8%A2%AB%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `131.4K 🔥` `NEW`
1. [迪丽热巴表演打奶嗝](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A1%A8%E6%BC%94%E6%89%93%E5%A5%B6%E5%97%9D%23) `120.6K 🔥` `NEW`
1. [阚清子复刻欣荣格格](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%A4%8D%E5%88%BB%E6%AC%A3%E8%8D%A3%E6%A0%BC%E6%A0%BC%23) `111.7K 🔥` `NEW`
1. [保罗发表情包嘲讽快船](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%BD%97%E5%8F%91%E8%A1%A8%E6%83%85%E5%8C%85%E5%98%B2%E8%AE%BD%E5%BF%AB%E8%88%B9%23) `109.2K 🔥` `NEW`
1. [酒店订单备注玩梗被指侵犯隐私](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97%E8%AE%A2%E5%8D%95%E5%A4%87%E6%B3%A8%E7%8E%A9%E6%A2%97%E8%A2%AB%E6%8C%87%E4%BE%B5%E7%8A%AF%E9%9A%90%E7%A7%81%23) `108.6K 🔥` `NEW`
1. [奔跑吧首播嘉宾是时代少年团](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E9%A6%96%E6%92%AD%E5%98%89%E5%AE%BE%E6%98%AF%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%23) `108.2K 🔥` `NEW`
1. [向涵之发了九张妈妈照片](https://s.weibo.com/weibo?q=%23%E5%90%91%E6%B6%B5%E4%B9%8B%E5%8F%91%E4%BA%86%E4%B9%9D%E5%BC%A0%E5%A6%88%E5%A6%88%E7%85%A7%E7%89%87%23) `107.1K 🔥` `NEW`
1. [小杨生煎回应包子皮放在抹布上 (Xiao Yang Shengjian responded by putting the bun skin on a rag)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9D%A8%E7%94%9F%E7%85%8E%E5%9B%9E%E5%BA%94%E5%8C%85%E5%AD%90%E7%9A%AE%E6%94%BE%E5%9C%A8%E6%8A%B9%E5%B8%83%E4%B8%8A%23) `106.6K 🔥` `NEW`
1. [王俊凯八中时期旧照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%85%AB%E4%B8%AD%E6%97%B6%E6%9C%9F%E6%97%A7%E7%85%A7%23) `104.3K 🔥` `NEW`
1. [朱一龙 禁止欺负三旬老实人](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%20%E7%A6%81%E6%AD%A2%E6%AC%BA%E8%B4%9F%E4%B8%89%E6%97%AC%E8%80%81%E5%AE%9E%E4%BA%BA%23) `93.6K 🔥` `NEW`
1. [papi妈妈今日背氧气瓶出庭](https://s.weibo.com/weibo?q=%23papi%E5%A6%88%E5%A6%88%E4%BB%8A%E6%97%A5%E8%83%8C%E6%B0%A7%E6%B0%94%E7%93%B6%E5%87%BA%E5%BA%AD%23) `87.8K 🔥` `NEW`
1. [胡先煦我没错 沈腾我上来就错了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E6%88%91%E6%B2%A1%E9%94%99%20%E6%B2%88%E8%85%BE%E6%88%91%E4%B8%8A%E6%9D%A5%E5%B0%B1%E9%94%99%E4%BA%86%23) `87.7K 🔥` `NEW`
1. [戴降噪耳机喝可乐](https://s.weibo.com/weibo?q=%23%E6%88%B4%E9%99%8D%E5%99%AA%E8%80%B3%E6%9C%BA%E5%96%9D%E5%8F%AF%E4%B9%90%23) `86.1K 🔥` `NEW`
1. [顺手家务就是减少家务](https://s.weibo.com/weibo?q=%23%E9%A1%BA%E6%89%8B%E5%AE%B6%E5%8A%A1%E5%B0%B1%E6%98%AF%E5%87%8F%E5%B0%91%E5%AE%B6%E5%8A%A1%23) `78.7K 🔥` `NEW`
1. [库里回应淘汰快船](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E5%9B%9E%E5%BA%94%E6%B7%98%E6%B1%B0%E5%BF%AB%E8%88%B9%23) `78.7K 🔥` `NEW`
1. [小狗一点点闻到了朋友死亡的过程](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%B8%80%E7%82%B9%E7%82%B9%E9%97%BB%E5%88%B0%E4%BA%86%E6%9C%8B%E5%8F%8B%E6%AD%BB%E4%BA%A1%E7%9A%84%E8%BF%87%E7%A8%8B%23) `78.7K 🔥` `NEW`
1. [何润东翻红后的商务](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E7%BF%BB%E7%BA%A2%E5%90%8E%E7%9A%84%E5%95%86%E5%8A%A1%23) `78.1K 🔥` `NEW`
1. [李学用欢迎大家来躺平 (Li Xueyong welcomes everyone to lie down)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AD%A6%E7%94%A8%E6%AC%A2%E8%BF%8E%E5%A4%A7%E5%AE%B6%E6%9D%A5%E8%BA%BA%E5%B9%B3%23) `78.1K 🔥` `NEW`
1. [阿俄确认客机坠毁系遭防空系统误击](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BF%84%E7%A1%AE%E8%AE%A4%E5%AE%A2%E6%9C%BA%E5%9D%A0%E6%AF%81%E7%B3%BB%E9%81%AD%E9%98%B2%E7%A9%BA%E7%B3%BB%E7%BB%9F%E8%AF%AF%E5%87%BB%23) `78.1K 🔥` `NEW`
1. [联想CEO杨元庆试驾国产豪车](https://s.weibo.com/weibo?q=%23%E8%81%94%E6%83%B3CEO%E6%9D%A8%E5%85%83%E5%BA%86%E8%AF%95%E9%A9%BE%E5%9B%BD%E4%BA%A7%E8%B1%AA%E8%BD%A6%23) `74.9K 🔥` `NEW`
1. [中国驻日大使馆接连遭到恐怖威胁](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A9%BB%E6%97%A5%E5%A4%A7%E4%BD%BF%E9%A6%86%E6%8E%A5%E8%BF%9E%E9%81%AD%E5%88%B0%E6%81%90%E6%80%96%E5%A8%81%E8%83%81%23) `74.2K 🔥` `NEW`
1. [北京国际电影节](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%9B%BD%E9%99%85%E7%94%B5%E5%BD%B1%E8%8A%82%23) `73.7K 🔥` `NEW`
1. [原来大熊猫不喜欢竹林疯长](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E7%86%8A%E7%8C%AB%E4%B8%8D%E5%96%9C%E6%AC%A2%E7%AB%B9%E6%9E%97%E7%96%AF%E9%95%BF%23) `71.7K 🔥` `NEW`
1. [张桂源 眉压眼](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%20%E7%9C%89%E5%8E%8B%E7%9C%BC%23) `69.5K 🔥` `NEW`
1. [赵子琪有两个女儿](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E6%9C%89%E4%B8%A4%E4%B8%AA%E5%A5%B3%E5%84%BF%23) `67.8K 🔥` `NEW`
1. [建议晚上提前洗漱](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%99%9A%E4%B8%8A%E6%8F%90%E5%89%8D%E6%B4%97%E6%BC%B1%23) `60.9K 🔥` `NEW`
1. [雷军回应直播15小时](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E7%9B%B4%E6%92%AD15%E5%B0%8F%E6%97%B6%23) `56.9K 🔥` `NEW`
1. [李现攀登人生第一座雪山 (Li Xian climbed his first snow mountain)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E6%94%80%E7%99%BB%E4%BA%BA%E7%94%9F%E7%AC%AC%E4%B8%80%E5%BA%A7%E9%9B%AA%E5%B1%B1%23) `54.2K 🔥` `NEW`
1. [北影节 年年下雨](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%BD%B1%E8%8A%82%20%E5%B9%B4%E5%B9%B4%E4%B8%8B%E9%9B%A8%23) `53.6K 🔥` `NEW`
1. [4月16日埃安N60新品时尚大秀 (Aian N60 new product fashion show on April 16th)](https://s.weibo.com/weibo?q=%234%E6%9C%8816%E6%97%A5%E5%9F%83%E5%AE%89N60%E6%96%B0%E5%93%81%E6%97%B6%E5%B0%9A%E5%A4%A7%E7%A7%80%23) `499.3K 🔥`
1. [外籍乘客对着营区拍照被司机送进部队 (Foreign passengers took photos of the camp and were sent to the army by the driver)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E4%B9%98%E5%AE%A2%E5%AF%B9%E7%9D%80%E8%90%A5%E5%8C%BA%E6%8B%8D%E7%85%A7%E8%A2%AB%E5%8F%B8%E6%9C%BA%E9%80%81%E8%BF%9B%E9%83%A8%E9%98%9F%23) `110.9K 🔥` `-41%`
1. [唐禹哲自首出发图 (Tang Yuzhe surrenders and sets off)](https://s.weibo.com/weibo?q=%23%E5%94%90%E7%A6%B9%E5%93%B2%E8%87%AA%E9%A6%96%E5%87%BA%E5%8F%91%E5%9B%BE%23) `110.6K 🔥` `-29%`
1. [赵子琪为上浪姐下了血本](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E4%B8%BA%E4%B8%8A%E6%B5%AA%E5%A7%90%E4%B8%8B%E4%BA%86%E8%A1%80%E6%9C%AC%23) `109.7K 🔥` `-28%`
1. [伊朗首都突发炸弹袭击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E7%AA%81%E5%8F%91%E7%82%B8%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `106.3K 🔥` `-30%`
1. [陈瑶还原张显宗我牙疼 (Chen Yao restores Zhang Xianzong, I have a toothache)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E8%BF%98%E5%8E%9F%E5%BC%A0%E6%98%BE%E5%AE%97%E6%88%91%E7%89%99%E7%96%BC%23) `78.3K 🔥` `-45%`
1. [小狗叼东西证明自己不咬人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%8F%BC%E4%B8%9C%E8%A5%BF%E8%AF%81%E6%98%8E%E8%87%AA%E5%B7%B1%E4%B8%8D%E5%92%AC%E4%BA%BA%23) `66.4K 🔥` `-36%`
1. [无限暖暖](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%99%90%E6%9A%96%E6%9A%96%23) `61.1K 🔥` `-32%`
1. [唐艺昕陶昕然cos祺贵人安小鸟](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E9%99%B6%E6%98%95%E7%84%B6cos%E7%A5%BA%E8%B4%B5%E4%BA%BA%E5%AE%89%E5%B0%8F%E9%B8%9F%23) `53.8K 🔥` `-50%`
1. [朋友圈这样发涉嫌违法 (It is illegal to post in Moments like this)](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%BF%99%E6%A0%B7%E5%8F%91%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `53.6K 🔥` `-49%`

Updated at 2026-04-16 16:09:04

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
