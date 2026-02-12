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

1. [跨海列车背后的守护 (The guardian behind the cross-ocean train)](https://s.weibo.com/weibo?q=%23%E8%B7%A8%E6%B5%B7%E5%88%97%E8%BD%A6%E8%83%8C%E5%90%8E%E7%9A%84%E5%AE%88%E6%8A%A4%23) `606.6K 🔥` `NEW`
1. [20岁邓恩熙演30岁蒋龙的妈](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E9%82%93%E6%81%A9%E7%86%99%E6%BC%9430%E5%B2%81%E8%92%8B%E9%BE%99%E7%9A%84%E5%A6%88%23) `589.9K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `563.4K 🔥` `NEW`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `557.3K 🔥` `NEW`
1. [马龙和妻子回家过年](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E5%92%8C%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%AE%B6%E8%BF%87%E5%B9%B4%23) `529.6K 🔥` `NEW`
1. [唐宫姚安娜身份果然不简单](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A7%9A%E5%AE%89%E5%A8%9C%E8%BA%AB%E4%BB%BD%E6%9E%9C%E7%84%B6%E4%B8%8D%E7%AE%80%E5%8D%95%23) `518.8K 🔥` `NEW`
1. [马年生肖运势](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E7%94%9F%E8%82%96%E8%BF%90%E5%8A%BF%23) `505.9K 🔥` `NEW`
1. [孙颖莎头像挂件换成了皇冠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%B4%E5%83%8F%E6%8C%82%E4%BB%B6%E6%8D%A2%E6%88%90%E4%BA%86%E7%9A%87%E5%86%A0%23) `493.8K 🔥` `NEW`
1. [沈阳暴风雨温泉洗浴](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%9A%B4%E9%A3%8E%E9%9B%A8%E6%B8%A9%E6%B3%89%E6%B4%97%E6%B5%B4%23) `468.5K 🔥` `NEW`
1. [加速包不能成为添堵包](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E9%80%9F%E5%8C%85%E4%B8%8D%E8%83%BD%E6%88%90%E4%B8%BA%E6%B7%BB%E5%A0%B5%E5%8C%85%23) `453.1K 🔥` `NEW`
1. [ELLE主编回应提前半年定了孙颖莎 (ELLE editor-in-chief responded that Sun Yingsha had been booked six months in advance)](https://s.weibo.com/weibo?q=%23ELLE%E4%B8%BB%E7%BC%96%E5%9B%9E%E5%BA%94%E6%8F%90%E5%89%8D%E5%8D%8A%E5%B9%B4%E5%AE%9A%E4%BA%86%E5%AD%99%E9%A2%96%E8%8E%8E%23) `257.0K 🔥` `NEW`
1. [杨幂校花学姐](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%A0%A1%E8%8A%B1%E5%AD%A6%E5%A7%90%23) `208.3K 🔥` `NEW`
1. [宋雨琦 出去就要大大方方的](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E5%87%BA%E5%8E%BB%E5%B0%B1%E8%A6%81%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%E7%9A%84%23) `114.6K 🔥` `NEW`
1. [雷军回来小米YU71月份销量](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E6%9D%A5%E5%B0%8F%E7%B1%B3YU71%E6%9C%88%E4%BB%BD%E9%94%80%E9%87%8F%23) `106.8K 🔥` `NEW`
1. [过年回家路上后备箱两只鸭子一路互殴](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%9B%9E%E5%AE%B6%E8%B7%AF%E4%B8%8A%E5%90%8E%E5%A4%87%E7%AE%B1%E4%B8%A4%E5%8F%AA%E9%B8%AD%E5%AD%90%E4%B8%80%E8%B7%AF%E4%BA%92%E6%AE%B4%23) `103.6K 🔥` `NEW`
1. [31省份人均收入排名](https://s.weibo.com/weibo?q=%2331%E7%9C%81%E4%BB%BD%E4%BA%BA%E5%9D%87%E6%94%B6%E5%85%A5%E6%8E%92%E5%90%8D%23) `103.1K 🔥` `NEW`
1. [女子将一整只羊放车顶从宁夏拉回东北](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%86%E4%B8%80%E6%95%B4%E5%8F%AA%E7%BE%8A%E6%94%BE%E8%BD%A6%E9%A1%B6%E4%BB%8E%E5%AE%81%E5%A4%8F%E6%8B%89%E5%9B%9E%E4%B8%9C%E5%8C%97%23) `102.8K 🔥` `NEW`
1. [运动员何以成为教练取款机](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E5%91%98%E4%BD%95%E4%BB%A5%E6%88%90%E4%B8%BA%E6%95%99%E7%BB%83%E5%8F%96%E6%AC%BE%E6%9C%BA%23) `102.8K 🔥` `NEW`
1. [TOP 最纯正的青梅牛马](https://s.weibo.com/weibo?q=%23TOP%20%E6%9C%80%E7%BA%AF%E6%AD%A3%E7%9A%84%E9%9D%92%E6%A2%85%E7%89%9B%E9%A9%AC%23) `101.9K 🔥` `NEW`
1. [太好了是烂梗我们没救了](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%A5%BD%E4%BA%86%E6%98%AF%E7%83%82%E6%A2%97%E6%88%91%E4%BB%AC%E6%B2%A1%E6%95%91%E4%BA%86%23) `86.2K 🔥` `NEW`
1. [丁程鑫是不是刷到朱志鑫崴脚了 (Did Ding Chengxin touch Zhu Zhixin’s sprained foot?)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%98%AF%E4%B8%8D%E6%98%AF%E5%88%B7%E5%88%B0%E6%9C%B1%E5%BF%97%E9%91%AB%E5%B4%B4%E8%84%9A%E4%BA%86%23) `78.5K 🔥` `NEW`
1. [回村的猫已经跟土地公一桌了](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E6%9D%91%E7%9A%84%E7%8C%AB%E5%B7%B2%E7%BB%8F%E8%B7%9F%E5%9C%9F%E5%9C%B0%E5%85%AC%E4%B8%80%E6%A1%8C%E4%BA%86%23) `77.6K 🔥` `NEW`
1. [谷爱凌不是输给第一名的第二名](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E4%B8%8D%E6%98%AF%E8%BE%93%E7%BB%99%E7%AC%AC%E4%B8%80%E5%90%8D%E7%9A%84%E7%AC%AC%E4%BA%8C%E5%90%8D%23) `1.0M 🔥` `+788%`
1. [上海地铁嘉闵线发生局部渗漏](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%98%89%E9%97%B5%E7%BA%BF%E5%8F%91%E7%94%9F%E5%B1%80%E9%83%A8%E6%B8%97%E6%BC%8F%23) `589.5K 🔥` `+534%`
1. [第一次看到一箱草莓毫无食欲](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%88%B0%E4%B8%80%E7%AE%B1%E8%8D%89%E8%8E%93%E6%AF%AB%E6%97%A0%E9%A3%9F%E6%AC%B2%23) `589.5K 🔥` `+196%`
1. [千问AI购物大赏 (Qianwen AI Shopping Awards)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AEAI%E8%B4%AD%E7%89%A9%E5%A4%A7%E8%B5%8F%23) `582.9K 🔥` `+206%`
1. [中方回应特朗普预计4月初访华](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E9%A2%84%E8%AE%A14%E6%9C%88%E5%88%9D%E8%AE%BF%E5%8D%8E%23) `579.7K 🔥` `+128%`
1. [为什么奶茶封口还要盖盖子 (Why does milk tea need to be sealed with a lid?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A5%B6%E8%8C%B6%E5%B0%81%E5%8F%A3%E8%BF%98%E8%A6%81%E7%9B%96%E7%9B%96%E5%AD%90%23) `578.3K 🔥` `+290%`
1. [第一批回村的人已经出片了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E5%9B%9E%E6%9D%91%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%87%BA%E7%89%87%E4%BA%86%23) `543.3K 🔥` `+519%`
1. [孙颖莎ELLE 6个封面](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%206%E4%B8%AA%E5%B0%81%E9%9D%A2%23) `524.0K 🔥` `+266%`
1. [孙颖莎ELLE (Sun Yingsha ELLE)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%23) `483.7K 🔥` `+240%`
1. [爱泼斯坦偷拍潜在受害者视频曝光](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%81%B7%E6%8B%8D%E6%BD%9C%E5%9C%A8%E5%8F%97%E5%AE%B3%E8%80%85%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `460.4K 🔥` `+230%`
1. [张馨予 你很有钱是吗 (Zhang Xinyu, are you very rich?)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%20%E4%BD%A0%E5%BE%88%E6%9C%89%E9%92%B1%E6%98%AF%E5%90%97%23) `445.7K 🔥` `+208%`
1. [男子性侵前妻闺蜜被判10年8个月](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E5%89%8D%E5%A6%BB%E9%97%BA%E8%9C%9C%E8%A2%AB%E5%88%A410%E5%B9%B48%E4%B8%AA%E6%9C%88%23) `438.2K 🔥` `+210%`
1. [蒋欣 当年真的错怪你了 (Jiang Xin, I really blamed you wrongly back then)](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%20%E5%BD%93%E5%B9%B4%E7%9C%9F%E7%9A%84%E9%94%99%E6%80%AA%E4%BD%A0%E4%BA%86%23) `394.4K 🔥` `+173%`
1. [姐姐被藏尸位置就在弟弟店铺正上方 (The location where my sister’s body was buried is right above my brother’s shop.)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%A2%AB%E8%97%8F%E5%B0%B8%E4%BD%8D%E7%BD%AE%E5%B0%B1%E5%9C%A8%E5%BC%9F%E5%BC%9F%E5%BA%97%E9%93%BA%E6%AD%A3%E4%B8%8A%E6%96%B9%23) `314.0K 🔥` `+123%`
1. [时代少年团你们吵到陈都灵了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%BD%A0%E4%BB%AC%E5%90%B5%E5%88%B0%E9%99%88%E9%83%BD%E7%81%B5%E4%BA%86%23) `222.9K 🔥` `+140%`
1. [国庆前做的美甲忍到了现在](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%89%8D%E5%81%9A%E7%9A%84%E7%BE%8E%E7%94%B2%E5%BF%8D%E5%88%B0%E4%BA%86%E7%8E%B0%E5%9C%A8%23) `203.8K 🔥` `+46%`
1. [时代峰峻春联贴反了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%98%A5%E8%81%94%E8%B4%B4%E5%8F%8D%E4%BA%86%23) `202.0K 🔥` `+41%`
1. [ILLIT NewJeans](https://s.weibo.com/weibo?q=%23ILLIT%20NewJeans%23) `185.9K 🔥` `+33%`
1. [中戏表演系原主任陈刚主动投案 (Chen Gang, former director of the Chinese Opera Performance Department, voluntarily surrendered)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E8%A1%A8%E6%BC%94%E7%B3%BB%E5%8E%9F%E4%B8%BB%E4%BB%BB%E9%99%88%E5%88%9A%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `764.8K 🔥`
1. [相亲吃烤肉](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E4%BA%B2%E5%90%83%E7%83%A4%E8%82%89%23) `168.3K 🔥`
1. [TFBOYS 你永远比别人多两个观众](https://s.weibo.com/weibo?q=%23TFBOYS%20%E4%BD%A0%E6%B0%B8%E8%BF%9C%E6%AF%94%E5%88%AB%E4%BA%BA%E5%A4%9A%E4%B8%A4%E4%B8%AA%E8%A7%82%E4%BC%97%23) `163.8K 🔥`
1. [李一桐发了49999的红包](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%8F%91%E4%BA%8649999%E7%9A%84%E7%BA%A2%E5%8C%85%23) `103.9K 🔥` `-25%`
1. [车厘子卖家赌涨价压货](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%8E%98%E5%AD%90%E5%8D%96%E5%AE%B6%E8%B5%8C%E6%B6%A8%E4%BB%B7%E5%8E%8B%E8%B4%A7%23) `103.8K 🔥` `-37%`
1. [王楚钦跑一万米](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B7%91%E4%B8%80%E4%B8%87%E7%B1%B3%23) `102.4K 🔥` `-66%`
1. [团购12箱车厘子收到陈年僵尸果 (Group purchase of 12 boxes of cherries and received aged zombie fruit)](https://s.weibo.com/weibo?q=%23%E5%9B%A2%E8%B4%AD12%E7%AE%B1%E8%BD%A6%E5%8E%98%E5%AD%90%E6%94%B6%E5%88%B0%E9%99%88%E5%B9%B4%E5%83%B5%E5%B0%B8%E6%9E%9C%23) `102.2K 🔥` `-91%`
1. [白鹿红包封面 (White deer red envelope cover)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BA%A2%E5%8C%85%E5%B0%81%E9%9D%A2%23) `83.0K 🔥` `-35%`
1. [保罗老婆生娃大出血3L](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%BD%97%E8%80%81%E5%A9%86%E7%94%9F%E5%A8%83%E5%A4%A7%E5%87%BA%E8%A1%803L%23) `82.6K 🔥` `-41%`
1. [七莘路 (Qixin Road)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E8%8E%98%E8%B7%AF%23) `78.6K 🔥` `-40%`
1. [宋威龙晒被赵今麦扯开的领带](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%99%92%E8%A2%AB%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%89%AF%E5%BC%80%E7%9A%84%E9%A2%86%E5%B8%A6%23) `78.1K 🔥` `-39%`

Updated at 2026-02-12 18:26:06

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
