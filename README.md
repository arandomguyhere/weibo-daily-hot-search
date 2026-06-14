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

1. [孙怡张若昀聊啥呢这么开心 (What are Sun Yi and Zhang Ruoyun talking about? Are they so happy?)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%BC%A0%E8%8B%A5%E6%98%80%E8%81%8A%E5%95%A5%E5%91%A2%E8%BF%99%E4%B9%88%E5%BC%80%E5%BF%83%23) `702.7K 🔥` `NEW`
1. [T1晋级MSI](https://s.weibo.com/weibo?q=%23T1%E6%99%8B%E7%BA%A7MSI%23) `698.9K 🔥` `NEW`
1. [阿迪达斯在上海建了一座梅西之屋](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%E5%9C%A8%E4%B8%8A%E6%B5%B7%E5%BB%BA%E4%BA%86%E4%B8%80%E5%BA%A7%E6%A2%85%E8%A5%BF%E4%B9%8B%E5%B1%8B%23) `697.2K 🔥` `NEW`
1. [李思潼获奖感言](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%E8%8E%B7%E5%A5%96%E6%84%9F%E8%A8%80%23) `696.1K 🔥` `NEW`
1. [大鱼海棠导演情商](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%B1%BC%E6%B5%B7%E6%A3%A0%E5%AF%BC%E6%BC%94%E6%83%85%E5%95%86%23) `409.7K 🔥` `NEW`
1. [BLG战胜TES](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CTES%23) `300.6K 🔥` `NEW`
1. [孙怡胸口怎么了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%83%B8%E5%8F%A3%E6%80%8E%E4%B9%88%E4%BA%86%23) `254.3K 🔥` `NEW`
1. [大学里最被劝退的专业 它排第一](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E9%87%8C%E6%9C%80%E8%A2%AB%E5%8A%9D%E9%80%80%E7%9A%84%E4%B8%93%E4%B8%9A%20%E5%AE%83%E6%8E%92%E7%AC%AC%E4%B8%80%23) `252.4K 🔥` `NEW`
1. [网友说陈坤被替换了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%AF%B4%E9%99%88%E5%9D%A4%E8%A2%AB%E6%9B%BF%E6%8D%A2%E4%BA%86%23) `249.5K 🔥` `NEW`
1. [王俊凯张若昀看见什么笑成这样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%BC%A0%E8%8B%A5%E6%98%80%E7%9C%8B%E8%A7%81%E4%BB%80%E4%B9%88%E7%AC%91%E6%88%90%E8%BF%99%E6%A0%B7%23) `246.1K 🔥` `NEW`
1. [Bin MSI我依旧会夺冠 (I will still win Bin MSI)](https://s.weibo.com/weibo?q=%23Bin%20MSI%E6%88%91%E4%BE%9D%E6%97%A7%E4%BC%9A%E5%A4%BA%E5%86%A0%23) `244.6K 🔥` `NEW`
1. [白鹿手臂居然是自己咬的](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%89%8B%E8%87%82%E5%B1%85%E7%84%B6%E6%98%AF%E8%87%AA%E5%B7%B1%E5%92%AC%E7%9A%84%23) `238.4K 🔥` `NEW`
1. [这是美国白宫](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E7%BE%8E%E5%9B%BD%E7%99%BD%E5%AE%AB%23) `235.5K 🔥` `NEW`
1. [遇见小面店家回应退款渠道畅通](https://s.weibo.com/weibo?q=%23%E9%81%87%E8%A7%81%E5%B0%8F%E9%9D%A2%E5%BA%97%E5%AE%B6%E5%9B%9E%E5%BA%94%E9%80%80%E6%AC%BE%E6%B8%A0%E9%81%93%E7%95%85%E9%80%9A%23) `233.0K 🔥` `NEW`
1. [王俊凯刘昊然看蒋龙张弛看美了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%88%98%E6%98%8A%E7%84%B6%E7%9C%8B%E8%92%8B%E9%BE%99%E5%BC%A0%E5%BC%9B%E7%9C%8B%E7%BE%8E%E4%BA%86%23) `230.0K 🔥` `NEW`
1. [GEN无缘MSI](https://s.weibo.com/weibo?q=%23GEN%E6%97%A0%E7%BC%98MSI%23) `225.9K 🔥` `NEW`
1. [秦海璐瀑布耳坠](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%B5%B7%E7%92%90%E7%80%91%E5%B8%83%E8%80%B3%E5%9D%A0%23) `225.8K 🔥` `NEW`
1. [范志毅给哈兰德讲球](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%BF%97%E6%AF%85%E7%BB%99%E5%93%88%E5%85%B0%E5%BE%B7%E8%AE%B2%E7%90%83%23) `223.4K 🔥` `NEW`
1. [郭艾伦只签iQOO手机](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E5%8F%AA%E7%AD%BEiQOO%E6%89%8B%E6%9C%BA%23) `213.2K 🔥` `NEW`
1. [美被曝同意伊朗稀释浓缩铀库存](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%A2%AB%E6%9B%9D%E5%90%8C%E6%84%8F%E4%BC%8A%E6%9C%97%E7%A8%80%E9%87%8A%E6%B5%93%E7%BC%A9%E9%93%80%E5%BA%93%E5%AD%98%23) `207.8K 🔥` `NEW`
1. [黄渤 黄晓明终于变成了黄博 (Huang Bo and Huang Xiaoming finally became Huang Bo)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B8%A4%20%E9%BB%84%E6%99%93%E6%98%8E%E7%BB%88%E4%BA%8E%E5%8F%98%E6%88%90%E4%BA%86%E9%BB%84%E5%8D%9A%23) `197.5K 🔥` `NEW`
1. [李思潼追星惠英红](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%E8%BF%BD%E6%98%9F%E6%83%A0%E8%8B%B1%E7%BA%A2%23) `192.3K 🔥` `NEW`
1. [Bin上了搞笑集锦](https://s.weibo.com/weibo?q=%23Bin%E4%B8%8A%E4%BA%86%E6%90%9E%E7%AC%91%E9%9B%86%E9%94%A6%23) `190.2K 🔥` `NEW`
1. [迪丽热巴机场私服好清新](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9C%BA%E5%9C%BA%E7%A7%81%E6%9C%8D%E5%A5%BD%E6%B8%85%E6%96%B0%23) `189.7K 🔥` `NEW`
1. [南派三叔揭南部档案幕后](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%E6%8F%AD%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E5%B9%95%E5%90%8E%23) `177.3K 🔥` `NEW`
1. [比WE好打](https://s.weibo.com/weibo?q=%23%E6%AF%94WE%E5%A5%BD%E6%89%93%23) `176.2K 🔥` `NEW`
1. [微博电影之夜内场座位](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%94%B5%E5%BD%B1%E4%B9%8B%E5%A4%9C%E5%86%85%E5%9C%BA%E5%BA%A7%E4%BD%8D%23) `169.7K 🔥` `NEW`
1. [程晓玥说二胎是酒后意外怀的](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E8%AF%B4%E4%BA%8C%E8%83%8E%E6%98%AF%E9%85%92%E5%90%8E%E6%84%8F%E5%A4%96%E6%80%80%E7%9A%84%23) `169.6K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `163.5K 🔥` `NEW`
1. [我是演员董子健 最近很空](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%98%AF%E6%BC%94%E5%91%98%E8%91%A3%E5%AD%90%E5%81%A5%20%E6%9C%80%E8%BF%91%E5%BE%88%E7%A9%BA%23) `162.2K 🔥` `NEW`
1. [看世界杯遭持枪抢劫中国男子已回国 (Chinese man robbed at gunpoint while watching World Cup has returned home)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E9%81%AD%E6%8C%81%E6%9E%AA%E6%8A%A2%E5%8A%AB%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E5%B7%B2%E5%9B%9E%E5%9B%BD%23) `161.6K 🔥` `NEW`
1. [小米工程师称不针对任何友商](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%A7%B0%E4%B8%8D%E9%92%88%E5%AF%B9%E4%BB%BB%E4%BD%95%E5%8F%8B%E5%95%86%23) `160.3K 🔥` `NEW`
1. [微博电影之夜内场](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%94%B5%E5%BD%B1%E4%B9%8B%E5%A4%9C%E5%86%85%E5%9C%BA%23) `1.1M 🔥` `+269%`
1. [神23乘组要在太空过端午了 (The Shen-23 crew will celebrate the Dragon Boat Festival in space)](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E4%B9%98%E7%BB%84%E8%A6%81%E5%9C%A8%E5%A4%AA%E7%A9%BA%E8%BF%87%E7%AB%AF%E5%8D%88%E4%BA%86%23) `706.4K 🔥`
1. [上海还是太超前了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%98%E6%98%AF%E5%A4%AA%E8%B6%85%E5%89%8D%E4%BA%86%23) `697.6K 🔥`
1. [39岁女子1天3杯奶茶喝出牛奶血](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E5%A5%B3%E5%AD%901%E5%A4%A93%E6%9D%AF%E5%A5%B6%E8%8C%B6%E5%96%9D%E5%87%BA%E7%89%9B%E5%A5%B6%E8%A1%80%23) `258.3K 🔥`
1. [小米工程师谈某大模型重新出山](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%B7%A5%E7%A8%8B%E5%B8%88%E8%B0%88%E6%9F%90%E5%A4%A7%E6%A8%A1%E5%9E%8B%E9%87%8D%E6%96%B0%E5%87%BA%E5%B1%B1%23) `241.5K 🔥`
1. [大鱼海棠导演说王菲要求多报价贵 (The director of Big Fish and Begonia said that Faye Wong’s request for a higher price would be too expensive)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%B1%BC%E6%B5%B7%E6%A3%A0%E5%AF%BC%E6%BC%94%E8%AF%B4%E7%8E%8B%E8%8F%B2%E8%A6%81%E6%B1%82%E5%A4%9A%E6%8A%A5%E4%BB%B7%E8%B4%B5%23) `228.1K 🔥`
1. [沈腾最好的医美是马丽](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%9C%80%E5%A5%BD%E7%9A%84%E5%8C%BB%E7%BE%8E%E6%98%AF%E9%A9%AC%E4%B8%BD%23) `225.7K 🔥`
1. [苏翊鸣 朱易 (Su Yiming Zhu Yi)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%20%E6%9C%B1%E6%98%93%23) `225.6K 🔥`
1. [微博电影之夜](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%94%B5%E5%BD%B1%E4%B9%8B%E5%A4%9C%23) `185.0K 🔥`
1. [日本网民称邻居投诉空调外机太吵](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E6%B0%91%E7%A7%B0%E9%82%BB%E5%B1%85%E6%8A%95%E8%AF%89%E7%A9%BA%E8%B0%83%E5%A4%96%E6%9C%BA%E5%A4%AA%E5%90%B5%23) `158.3K 🔥`
1. [小县城取消中考选拔全员直升高中 (The small county canceled the high school entrance examination and selected all students to go directly to high school.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8E%BF%E5%9F%8E%E5%8F%96%E6%B6%88%E4%B8%AD%E8%80%83%E9%80%89%E6%8B%94%E5%85%A8%E5%91%98%E7%9B%B4%E5%8D%87%E9%AB%98%E4%B8%AD%23) `798.5K 🔥` `-39%`
1. [沈腾和昨天是一个人吗](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%92%8C%E6%98%A8%E5%A4%A9%E6%98%AF%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%90%97%23) `257.8K 🔥` `-69%`
1. [黄大炜去世 (Huang Dawei passed away)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%A7%E7%82%9C%E5%8E%BB%E4%B8%96%23) `236.6K 🔥` `-73%`
1. [迪丽热巴手机壳从销量2涨到3000多](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%89%8B%E6%9C%BA%E5%A3%B3%E4%BB%8E%E9%94%80%E9%87%8F2%E6%B6%A8%E5%88%B03000%E5%A4%9A%23) `205.9K 🔥` `-22%`
1. [人一定要主动主动再主动](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E4%B8%BB%E5%8A%A8%E4%B8%BB%E5%8A%A8%E5%86%8D%E4%B8%BB%E5%8A%A8%23) `193.1K 🔥` `-22%`
1. [97岁网红刘老太离世 (Internet celebrity Mrs. Liu passed away at the age of 97)](https://s.weibo.com/weibo?q=%2397%E5%B2%81%E7%BD%91%E7%BA%A2%E5%88%98%E8%80%81%E5%A4%AA%E7%A6%BB%E4%B8%96%23) `192.9K 🔥` `-24%`
1. [Lisa鼻子怎么了](https://s.weibo.com/weibo?q=%23Lisa%E9%BC%BB%E5%AD%90%E6%80%8E%E4%B9%88%E4%BA%86%23) `163.2K 🔥` `-37%`
1. [BLG横扫TES](https://s.weibo.com/weibo?q=%23BLG%E6%A8%AA%E6%89%ABTES%23) `159.2K 🔥` `-40%`
1. [疑似苏翊鸣新恋情](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%96%B0%E6%81%8B%E6%83%85%23) `157.4K 🔥` `-38%`

Updated at 2026-06-14 20:26:25

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
