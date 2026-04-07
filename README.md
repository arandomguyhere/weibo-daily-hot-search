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

1. [十日终焉 (End of ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `812.4K 🔥` `NEW`
1. [与宁一起代言无糖可口可乐](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E5%AE%81%E4%B8%80%E8%B5%B7%E4%BB%A3%E8%A8%80%E6%97%A0%E7%B3%96%E5%8F%AF%E5%8F%A3%E5%8F%AF%E4%B9%90%23) `573.1K 🔥` `NEW`
1. [汽车坠桥致5死疑监控画面曝光](https://s.weibo.com/weibo?q=%23%E6%B1%BD%E8%BD%A6%E5%9D%A0%E6%A1%A5%E8%87%B45%E6%AD%BB%E7%96%91%E7%9B%91%E6%8E%A7%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `377.9K 🔥` `NEW`
1. [伊朗总统说已准备好牺牲](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AF%B4%E5%B7%B2%E5%87%86%E5%A4%87%E5%A5%BD%E7%89%BA%E7%89%B2%23) `366.3K 🔥` `NEW`
1. [把蓝莓当消炎药吃](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E8%93%9D%E8%8E%93%E5%BD%93%E6%B6%88%E7%82%8E%E8%8D%AF%E5%90%83%23) `234.5K 🔥` `NEW`
1. [外交部回应郑丽文率团访问大陆](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E9%83%91%E4%B8%BD%E6%96%87%E7%8E%87%E5%9B%A2%E8%AE%BF%E9%97%AE%E5%A4%A7%E9%99%86%23) `167.6K 🔥` `NEW`
1. [张本智和近距离感受国乒队魂](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%BF%91%E8%B7%9D%E7%A6%BB%E6%84%9F%E5%8F%97%E5%9B%BD%E4%B9%92%E9%98%9F%E9%AD%82%23) `116.7K 🔥` `NEW`
1. [为弟追凶24年案即将二审](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%BC%9F%E8%BF%BD%E5%87%B624%E5%B9%B4%E6%A1%88%E5%8D%B3%E5%B0%86%E4%BA%8C%E5%AE%A1%23) `116.7K 🔥` `NEW`
1. [宋祖儿帽子比脸大了一圈](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E5%B8%BD%E5%AD%90%E6%AF%94%E8%84%B8%E5%A4%A7%E4%BA%86%E4%B8%80%E5%9C%88%23) `116.6K 🔥` `NEW`
1. [职场微信礼仪](https://s.weibo.com/weibo?q=%23%E8%81%8C%E5%9C%BA%E5%BE%AE%E4%BF%A1%E7%A4%BC%E4%BB%AA%23) `116.6K 🔥` `NEW`
1. [曾舜晞情商 (Zeng Shunxi’s emotional intelligence)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E6%83%85%E5%95%86%23) `116.4K 🔥` `NEW`
1. [张凌赫锁骨伤太对味了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%94%81%E9%AA%A8%E4%BC%A4%E5%A4%AA%E5%AF%B9%E5%91%B3%E4%BA%86%23) `116.3K 🔥` `NEW`
1. [日本撞人族被抓后鞠躬道歉](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%92%9E%E4%BA%BA%E6%97%8F%E8%A2%AB%E6%8A%93%E5%90%8E%E9%9E%A0%E8%BA%AC%E9%81%93%E6%AD%89%23) `102.6K 🔥` `NEW`
1. [终于有人吐槽住酒店化妆难了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E5%90%90%E6%A7%BD%E4%BD%8F%E9%85%92%E5%BA%97%E5%8C%96%E5%A6%86%E9%9A%BE%E4%BA%86%23) `101.4K 🔥` `NEW`
1. [抗拒流量的鸡煲老板开始接广告了](https://s.weibo.com/weibo?q=%23%E6%8A%97%E6%8B%92%E6%B5%81%E9%87%8F%E7%9A%84%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%BC%80%E5%A7%8B%E6%8E%A5%E5%B9%BF%E5%91%8A%E4%BA%86%23) `92.3K 🔥` `NEW`
1. [乌兰图雅 半永久嬉皮笑脸都累没了](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%20%E5%8D%8A%E6%B0%B8%E4%B9%85%E5%AC%89%E7%9A%AE%E7%AC%91%E8%84%B8%E9%83%BD%E7%B4%AF%E6%B2%A1%E4%BA%86%23) `87.9K 🔥` `NEW`
1. [陈丽华育有一儿二女](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E8%82%B2%E6%9C%89%E4%B8%80%E5%84%BF%E4%BA%8C%E5%A5%B3%23) `85.1K 🔥` `NEW`
1. [日本人谈在上海旅游的感受](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E8%B0%88%E5%9C%A8%E4%B8%8A%E6%B5%B7%E6%97%85%E6%B8%B8%E7%9A%84%E6%84%9F%E5%8F%97%23) `81.7K 🔥` `NEW`
1. [黄晓明现身交警队](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E7%8E%B0%E8%BA%AB%E4%BA%A4%E8%AD%A6%E9%98%9F%23) `76.0K 🔥` `NEW`
1. [忽然有一种古人也是人的感觉](https://s.weibo.com/weibo?q=%23%E5%BF%BD%E7%84%B6%E6%9C%89%E4%B8%80%E7%A7%8D%E5%8F%A4%E4%BA%BA%E4%B9%9F%E6%98%AF%E4%BA%BA%E7%9A%84%E6%84%9F%E8%A7%89%23) `73.8K 🔥` `NEW`
1. [建议大家养猫就养全自动的 (It is recommended that if you have a cat, you should get a fully automatic one.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%85%BB%E7%8C%AB%E5%B0%B1%E5%85%BB%E5%85%A8%E8%87%AA%E5%8A%A8%E7%9A%84%23) `72.3K 🔥` `NEW`
1. [正式被确诊为职场猪八戒](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%BC%8F%E8%A2%AB%E7%A1%AE%E8%AF%8A%E4%B8%BA%E8%81%8C%E5%9C%BA%E7%8C%AA%E5%85%AB%E6%88%92%23) `66.3K 🔥` `NEW`
1. [泰国征兵这几天太热闹了](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%BE%81%E5%85%B5%E8%BF%99%E5%87%A0%E5%A4%A9%E5%A4%AA%E7%83%AD%E9%97%B9%E4%BA%86%23) `65.5K 🔥` `NEW`
1. [郭晶晶霍启刚带娃游广西](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%B6%E6%99%B6%E9%9C%8D%E5%90%AF%E5%88%9A%E5%B8%A6%E5%A8%83%E6%B8%B8%E5%B9%BF%E8%A5%BF%23) `62.7K 🔥` `NEW`
1. [39岁男子考研落榜举报复试第一考生](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E7%94%B7%E5%AD%90%E8%80%83%E7%A0%94%E8%90%BD%E6%A6%9C%E4%B8%BE%E6%8A%A5%E5%A4%8D%E8%AF%95%E7%AC%AC%E4%B8%80%E8%80%83%E7%94%9F%23) `1.1M 🔥` `+162%`
1. [浪姐一公小考取消直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%80%E5%85%AC%E5%B0%8F%E8%80%83%E5%8F%96%E6%B6%88%E7%9B%B4%E6%92%AD%23) `348.6K 🔥` `+122%`
1. [黄金或面临长期盘整](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%88%96%E9%9D%A2%E4%B8%B4%E9%95%BF%E6%9C%9F%E7%9B%98%E6%95%B4%23) `234.6K 🔥` `+76%`
1. [韩国人称为吃地瓜条专门来中国](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%A7%B0%E4%B8%BA%E5%90%83%E5%9C%B0%E7%93%9C%E6%9D%A1%E4%B8%93%E9%97%A8%E6%9D%A5%E4%B8%AD%E5%9B%BD%23) `175.8K 🔥` `+81%`
1. [天舟十号飞行任务标识正式发布 (Tianzhou-10 mission logo officially released)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%88%9F%E5%8D%81%E5%8F%B7%E9%A3%9E%E8%A1%8C%E4%BB%BB%E5%8A%A1%E6%A0%87%E8%AF%86%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83%23) `663.0K 🔥`
1. [陈丽华儿子担任富华国际集团总裁 (Chen Laiwa’s son serves as president of Fuhua International Group)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E5%84%BF%E5%AD%90%E6%8B%85%E4%BB%BB%E5%AF%8C%E5%8D%8E%E5%9B%BD%E9%99%85%E9%9B%86%E5%9B%A2%E6%80%BB%E8%A3%81%23) `234.3K 🔥`
1. [华东师大复试第一考生被指违规翻材料](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%9C%E5%B8%88%E5%A4%A7%E5%A4%8D%E8%AF%95%E7%AC%AC%E4%B8%80%E8%80%83%E7%94%9F%E8%A2%AB%E6%8C%87%E8%BF%9D%E8%A7%84%E7%BF%BB%E6%9D%90%E6%96%99%23) `234.0K 🔥`
1. [郑丽文率团抵达](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E7%8E%87%E5%9B%A2%E6%8A%B5%E8%BE%BE%23) `133.8K 🔥`
1. [金莎孙丞潇已经结婚了吗 (Is Jinsha Sun Chengxiao married?)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E5%B7%B2%E7%BB%8F%E7%BB%93%E5%A9%9A%E4%BA%86%E5%90%97%23) `100.8K 🔥`
1. [伊朗若同意停火战争或再次爆发 (If Iran agrees to a ceasefire, the war may break out again)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%8B%A5%E5%90%8C%E6%84%8F%E5%81%9C%E7%81%AB%E6%88%98%E4%BA%89%E6%88%96%E5%86%8D%E6%AC%A1%E7%88%86%E5%8F%91%23) `73.8K 🔥`
1. [曝某牛奶直播间涉黄涉低俗](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E7%89%9B%E5%A5%B6%E7%9B%B4%E6%92%AD%E9%97%B4%E6%B6%89%E9%BB%84%E6%B6%89%E4%BD%8E%E4%BF%97%23) `420.0K 🔥` `-23%`
1. [国家继续出手调控油价 (The state continues to regulate oil prices)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%BB%A7%E7%BB%AD%E5%87%BA%E6%89%8B%E8%B0%83%E6%8E%A7%E6%B2%B9%E4%BB%B7%23) `379.9K 🔥` `-66%`
1. [5月放假12天 (12 days off in May)](https://s.weibo.com/weibo?q=%235%E6%9C%88%E6%94%BE%E5%81%8712%E5%A4%A9%23) `313.3K 🔥` `-62%`
1. [魏大勋青岛进组十日终焉](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E9%9D%92%E5%B2%9B%E8%BF%9B%E7%BB%84%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `222.8K 🔥` `-37%`
1. [喜人奇妙夜](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%BA%BA%E5%A5%87%E5%A6%99%E5%A4%9C%23) `180.3K 🔥` `-36%`
1. [虞书欣工作室 审美](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%AE%A1%E7%BE%8E%23) `116.7K 🔥` `-51%`
1. [周杰伦 江语晨](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%20%E6%B1%9F%E8%AF%AD%E6%99%A8%23) `116.7K 🔥` `-53%`
1. [郭艾伦否认被骗](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E5%90%A6%E8%AE%A4%E8%A2%AB%E9%AA%97%23) `116.6K 🔥` `-29%`
1. [虞书欣和Jennie同款发型 (Yu Shuxin and Jennie have the same hairstyle)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%92%8CJennie%E5%90%8C%E6%AC%BE%E5%8F%91%E5%9E%8B%23) `116.6K 🔥` `-49%`
1. [陈丽华叫迟重瑞迟先生](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E5%8F%AB%E8%BF%9F%E9%87%8D%E7%91%9E%E8%BF%9F%E5%85%88%E7%94%9F%23) `116.4K 🔥` `-44%`
1. [原来这叫软孤立啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%8F%AB%E8%BD%AF%E5%AD%A4%E7%AB%8B%E5%95%8A%23) `103.3K 🔥` `-52%`
1. [曾沛慈赵丽颖是互关](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%98%AF%E4%BA%92%E5%85%B3%23) `102.1K 🔥` `-50%`
1. [女子住酒店在浴巾发现用过的伟哥 (Woman finds used Viagra in hotel towel)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%85%92%E5%BA%97%E5%9C%A8%E6%B5%B4%E5%B7%BE%E5%8F%91%E7%8E%B0%E7%94%A8%E8%BF%87%E7%9A%84%E4%BC%9F%E5%93%A5%23) `82.1K 🔥` `-27%`
1. [江语晨说才刚离婚别这样](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E8%AF%B4%E6%89%8D%E5%88%9A%E7%A6%BB%E5%A9%9A%E5%88%AB%E8%BF%99%E6%A0%B7%23) `75.3K 🔥` `-65%`
1. [余茵暴瘦 (Yu Yin suddenly lost weight)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E8%8C%B5%E6%9A%B4%E7%98%A6%23) `73.8K 🔥` `-54%`
1. [桃晚安回应](https://s.weibo.com/weibo?q=%23%E6%A1%83%E6%99%9A%E5%AE%89%E5%9B%9E%E5%BA%94%23) `66.7K 🔥` `-38%`
1. [情侣因换座与女乘客发生争执](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%9B%A0%E6%8D%A2%E5%BA%A7%E4%B8%8E%E5%A5%B3%E4%B9%98%E5%AE%A2%E5%8F%91%E7%94%9F%E4%BA%89%E6%89%A7%23) `64.1K 🔥` `-60%`

Updated at 2026-04-07 17:49:23

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
