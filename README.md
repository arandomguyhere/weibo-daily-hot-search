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

1. [菲尔兹奖 (fields medal)](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%23) `11.1M 🔥` `NEW`
1. [王虹](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%23) `2.9M 🔥` `NEW`
1. [中国籍数学家首获菲尔兹奖](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%B1%8D%E6%95%B0%E5%AD%A6%E5%AE%B6%E9%A6%96%E8%8E%B7%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%23) `2.1M 🔥` `NEW`
1. [十个勤天](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%23) `777.3K 🔥` `NEW`
1. [飞猪请汪顺在千岛湖教大家学游泳](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E7%8C%AA%E8%AF%B7%E6%B1%AA%E9%A1%BA%E5%9C%A8%E5%8D%83%E5%B2%9B%E6%B9%96%E6%95%99%E5%A4%A7%E5%AE%B6%E5%AD%A6%E6%B8%B8%E6%B3%B3%23) `743.6K 🔥` `NEW`
1. [鹿晗把共享充电宝价格打下来了](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%8A%8A%E5%85%B1%E4%BA%AB%E5%85%85%E7%94%B5%E5%AE%9D%E4%BB%B7%E6%A0%BC%E6%89%93%E4%B8%8B%E6%9D%A5%E4%BA%86%23) `672.7K 🔥` `NEW`
1. [中国女排3比2美国女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%923%E6%AF%942%E7%BE%8E%E5%9B%BD%E5%A5%B3%E6%8E%92%23) `530.4K 🔥` `NEW`
1. [不要随意把照片和视频发给AI](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E9%9A%8F%E6%84%8F%E6%8A%8A%E7%85%A7%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%8F%91%E7%BB%99AI%23) `438.6K 🔥` `NEW`
1. [重庆山体崩塌11死50失联](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C11%E6%AD%BB50%E5%A4%B1%E8%81%94%23) `437.7K 🔥` `NEW`
1. [李小冉 为自己活的精彩吧](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E4%B8%BA%E8%87%AA%E5%B7%B1%E6%B4%BB%E7%9A%84%E7%B2%BE%E5%BD%A9%E5%90%A7%23) `437.4K 🔥` `NEW`
1. [TFING晒邓佳鑫20岁合照 (TFING posts photos of Deng Jiaxin at 20 years old)](https://s.weibo.com/weibo?q=%23TFING%E6%99%92%E9%82%93%E4%BD%B3%E9%91%AB20%E5%B2%81%E5%90%88%E7%85%A7%23) `437.1K 🔥` `NEW`
1. [丘成桐回应王虹邓煜获奖](https://s.weibo.com/weibo?q=%23%E4%B8%98%E6%88%90%E6%A1%90%E5%9B%9E%E5%BA%94%E7%8E%8B%E8%99%B9%E9%82%93%E7%85%9C%E8%8E%B7%E5%A5%96%23) `436.6K 🔥` `NEW`
1. [张凌赫抱王楚然的时候还掂了一下](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8A%B1%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%9A%84%E6%97%B6%E5%80%99%E8%BF%98%E6%8E%82%E4%BA%86%E4%B8%80%E4%B8%8B%23) `436.1K 🔥` `NEW`
1. [刘宇宁圈内口碑](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%9C%88%E5%86%85%E5%8F%A3%E7%A2%91%23) `436.0K 🔥` `NEW`
1. [如此肥美的肉遇到了吃商极低的人](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%AD%A4%E8%82%A5%E7%BE%8E%E7%9A%84%E8%82%89%E9%81%87%E5%88%B0%E4%BA%86%E5%90%83%E5%95%86%E6%9E%81%E4%BD%8E%E7%9A%84%E4%BA%BA%23) `397.9K 🔥` `NEW`
1. [出境被远程锁车到底谁才是车主](https://s.weibo.com/weibo?q=%23%E5%87%BA%E5%A2%83%E8%A2%AB%E8%BF%9C%E7%A8%8B%E9%94%81%E8%BD%A6%E5%88%B0%E5%BA%95%E8%B0%81%E6%89%8D%E6%98%AF%E8%BD%A6%E4%B8%BB%23) `388.8K 🔥` `NEW`
1. [王濛图雅为李小冉暖居](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9B%BE%E9%9B%85%E4%B8%BA%E6%9D%8E%E5%B0%8F%E5%86%89%E6%9A%96%E5%B1%85%23) `387.6K 🔥` `NEW`
1. [邓煜回应获菲尔兹奖](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%85%9C%E5%9B%9E%E5%BA%94%E8%8E%B7%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%23) `386.9K 🔥` `NEW`
1. [开到荼蘼官宣节奏](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%E5%AE%98%E5%AE%A3%E8%8A%82%E5%A5%8F%23) `385.3K 🔥` `NEW`
1. [北京大学祝贺邓煜王虹](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%A5%9D%E8%B4%BA%E9%82%93%E7%85%9C%E7%8E%8B%E8%99%B9%23) `363.9K 🔥` `NEW`
1. [车圈学霸东风奕派M8上市 (Dongfeng Yipai M8 is launched)](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%9C%88%E5%AD%A6%E9%9C%B8%E4%B8%9C%E9%A3%8E%E5%A5%95%E6%B4%BEM8%E4%B8%8A%E5%B8%82%23) `332.1K 🔥` `NEW`
1. [陈哲远把网友笑进急诊了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E6%8A%8A%E7%BD%91%E5%8F%8B%E7%AC%91%E8%BF%9B%E6%80%A5%E8%AF%8A%E4%BA%86%23) `307.4K 🔥` `NEW`
1. [王虹获数学界诺奖](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E8%8E%B7%E6%95%B0%E5%AD%A6%E7%95%8C%E8%AF%BA%E5%A5%96%23) `304.5K 🔥` `NEW`
1. [金价四连涨深圳水贝又挤爆了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%9B%9B%E8%BF%9E%E6%B6%A8%E6%B7%B1%E5%9C%B3%E6%B0%B4%E8%B4%9D%E5%8F%88%E6%8C%A4%E7%88%86%E4%BA%86%23) `304.0K 🔥` `NEW`
1. [左眼跳财右眼跳相信科学](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E7%9C%BC%E8%B7%B3%E8%B4%A2%E5%8F%B3%E7%9C%BC%E8%B7%B3%E7%9B%B8%E4%BF%A1%E7%A7%91%E5%AD%A6%23) `288.7K 🔥` `NEW`
1. [许昌胖东来宣布暂停销售中央空调](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%8C%E8%83%96%E4%B8%9C%E6%9D%A5%E5%AE%A3%E5%B8%83%E6%9A%82%E5%81%9C%E9%94%80%E5%94%AE%E4%B8%AD%E5%A4%AE%E7%A9%BA%E8%B0%83%23) `274.9K 🔥` `NEW`
1. [邓煜的研究成果有多牛](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%85%9C%E7%9A%84%E7%A0%94%E7%A9%B6%E6%88%90%E6%9E%9C%E6%9C%89%E5%A4%9A%E7%89%9B%23) `274.5K 🔥` `NEW`
1. [在湖南这样做饭是触犯天条的](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%B9%96%E5%8D%97%E8%BF%99%E6%A0%B7%E5%81%9A%E9%A5%AD%E6%98%AF%E8%A7%A6%E7%8A%AF%E5%A4%A9%E6%9D%A1%E7%9A%84%23) `266.6K 🔥` `NEW`
1. [大批阿根廷球迷脱粉](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%89%B9%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E8%BF%B7%E8%84%B1%E7%B2%89%23) `256.6K 🔥` `NEW`
1. [美股财报](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E8%B4%A2%E6%8A%A5%23) `242.5K 🔥` `NEW`
1. [家属称救生员闲聊未发现游客溺水 (Family members say lifeguards chatted and did not notice tourists drowning)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E7%A7%B0%E6%95%91%E7%94%9F%E5%91%98%E9%97%B2%E8%81%8A%E6%9C%AA%E5%8F%91%E7%8E%B0%E6%B8%B8%E5%AE%A2%E6%BA%BA%E6%B0%B4%23) `235.3K 🔥` `NEW`
1. [中国女排晋级总决赛四强](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92%E6%99%8B%E7%BA%A7%E6%80%BB%E5%86%B3%E8%B5%9B%E5%9B%9B%E5%BC%BA%23) `224.4K 🔥` `NEW`
1. [中国女排好牛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92%E5%A5%BD%E7%89%9B%23) `217.2K 🔥` `NEW`
1. [耐克上市3个月新品被滔搏6折出售](https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E4%B8%8A%E5%B8%823%E4%B8%AA%E6%9C%88%E6%96%B0%E5%93%81%E8%A2%AB%E6%BB%94%E6%90%8F6%E6%8A%98%E5%87%BA%E5%94%AE%23) `186.3K 🔥` `NEW`
1. [王俊凯演唱会百万赞视频](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%99%BE%E4%B8%87%E8%B5%9E%E8%A7%86%E9%A2%91%23) `171.4K 🔥` `NEW`
1. [领克07GT掀翻旅行车市场](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B07GT%E6%8E%80%E7%BF%BB%E6%97%85%E8%A1%8C%E8%BD%A6%E5%B8%82%E5%9C%BA%23) `170.0K 🔥` `NEW`
1. [这份山洪避险口诀请收好 (Please keep this flash flood avoidance tips)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BB%BD%E5%B1%B1%E6%B4%AA%E9%81%BF%E9%99%A9%E5%8F%A3%E8%AF%80%E8%AF%B7%E6%94%B6%E5%A5%BD%23) `2.4M 🔥` `+88%`
1. [三星折叠屏薄到离谱了](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E6%8A%98%E5%8F%A0%E5%B1%8F%E8%96%84%E5%88%B0%E7%A6%BB%E8%B0%B1%E4%BA%86%23) `2.2M 🔥` `+132%`
1. [张凌赫王楚然床戏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%BA%8A%E6%88%8F%23) `438.5K 🔥` `+55%`
1. [向太力挺王菲谢霆锋](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E5%8A%9B%E6%8C%BA%E7%8E%8B%E8%8F%B2%E8%B0%A2%E9%9C%86%E9%94%8B%23) `437.9K 🔥` `+54%`
1. [亚运会国足进死亡小组](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%9B%BD%E8%B6%B3%E8%BF%9B%E6%AD%BB%E4%BA%A1%E5%B0%8F%E7%BB%84%23) `311.2K 🔥` `+80%`
1. [中国女排vs美国女排 (Chinese Women's Volleyball Team vs. American Women's Volleyball Team)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E7%BE%8E%E5%9B%BD%E5%A5%B3%E6%8E%92%23) `354.1K 🔥`
1. [邓佳鑫直播](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BD%B3%E9%91%AB%E7%9B%B4%E6%92%AD%23) `240.1K 🔥`
1. [金冬天的抓力](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%86%AC%E5%A4%A9%E7%9A%84%E6%8A%93%E5%8A%9B%23) `233.4K 🔥`
1. [白鹿碎花泳衣](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%A2%8E%E8%8A%B1%E6%B3%B3%E8%A1%A3%23) `230.7K 🔥`
1. [前经纪人怒斥王菲破坏锋芝婚姻谣言](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%80%92%E6%96%A5%E7%8E%8B%E8%8F%B2%E7%A0%B4%E5%9D%8F%E9%94%8B%E8%8A%9D%E5%A9%9A%E5%A7%BB%E8%B0%A3%E8%A8%80%23) `210.7K 🔥`
1. [别让贫困生喝咖啡争议撕裂舆论](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E8%B4%AB%E5%9B%B0%E7%94%9F%E5%96%9D%E5%92%96%E5%95%A1%E4%BA%89%E8%AE%AE%E6%92%95%E8%A3%82%E8%88%86%E8%AE%BA%23) `888.0K 🔥` `-45%`
1. [滔搏卖爆了](https://s.weibo.com/weibo?q=%23%E6%BB%94%E6%90%8F%E5%8D%96%E7%88%86%E4%BA%86%23) `686.3K 🔥` `-38%`
1. [成毅路过短剧](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E8%B7%AF%E8%BF%87%E7%9F%AD%E5%89%A7%23) `303.8K 🔥` `-50%`
1. [我前额叶受损的原因找到了 (The cause of my prefrontal lobe damage was found)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%89%8D%E9%A2%9D%E5%8F%B6%E5%8F%97%E6%8D%9F%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `186.4K 🔥` `-34%`
1. [华晨宇首位全球前10中国内地歌手](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E9%A6%96%E4%BD%8D%E5%85%A8%E7%90%83%E5%89%8D10%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E6%AD%8C%E6%89%8B%23) `170.5K 🔥` `-59%`

Updated at 2026-07-23 23:03:40

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
