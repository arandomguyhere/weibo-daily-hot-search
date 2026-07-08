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

1. [法国球员回应全阿根廷裁判组执法 (French players respond to all Argentinian refereeing team's enforcement)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%90%83%E5%91%98%E5%9B%9E%E5%BA%94%E5%85%A8%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A3%81%E5%88%A4%E7%BB%84%E6%89%A7%E6%B3%95%23) `1.2M 🔥` `NEW`
1. [千万不要侧躺玩手机](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E4%BE%A7%E8%BA%BA%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `1.1M 🔥` `NEW`
1. [广西横州一被蛇咬伤女子不幸离世](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%A8%AA%E5%B7%9E%E4%B8%80%E8%A2%AB%E8%9B%87%E5%92%AC%E4%BC%A4%E5%A5%B3%E5%AD%90%E4%B8%8D%E5%B9%B8%E7%A6%BB%E4%B8%96%23) `1.1M 🔥` `NEW`
1. [广西横州全力防范洪水蛇伤](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%A8%AA%E5%B7%9E%E5%85%A8%E5%8A%9B%E9%98%B2%E8%8C%83%E6%B4%AA%E6%B0%B4%E8%9B%87%E4%BC%A4%23) `1.1M 🔥` `NEW`
1. [医生提醒毒蛇咬伤绝不能用嘴吸](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E6%AF%92%E8%9B%87%E5%92%AC%E4%BC%A4%E7%BB%9D%E4%B8%8D%E8%83%BD%E7%94%A8%E5%98%B4%E5%90%B8%23) `1.1M 🔥` `NEW`
1. [广西一动物园多只动物下落不明](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E4%B8%80%E5%8A%A8%E7%89%A9%E5%9B%AD%E5%A4%9A%E5%8F%AA%E5%8A%A8%E7%89%A9%E4%B8%8B%E8%90%BD%E4%B8%8D%E6%98%8E%23) `1.1M 🔥` `NEW`
1. [董思成退出NCT](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%80%9D%E6%88%90%E9%80%80%E5%87%BANCT%23) `1.1M 🔥` `NEW`
1. [身体严重缺觉的8个迹象](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E4%B8%A5%E9%87%8D%E7%BC%BA%E8%A7%89%E7%9A%848%E4%B8%AA%E8%BF%B9%E8%B1%A1%23) `1.1M 🔥` `NEW`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `1.1M 🔥` `NEW`
1. [周杰伦御用编曲王俊凯下一天](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%BE%A1%E7%94%A8%E7%BC%96%E6%9B%B2%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%8B%E4%B8%80%E5%A4%A9%23) `1.1M 🔥` `NEW`
1. [韩国节目男主持当众殴打女主持 (Male host of Korean show beat female host in public)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%8A%82%E7%9B%AE%E7%94%B7%E4%B8%BB%E6%8C%81%E5%BD%93%E4%BC%97%E6%AE%B4%E6%89%93%E5%A5%B3%E4%B8%BB%E6%8C%81%23) `1.1M 🔥` `NEW`
1. [穆祉丞请十日终焉剧组喝奶茶了](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%AF%B7%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%89%A7%E7%BB%84%E5%96%9D%E5%A5%B6%E8%8C%B6%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [法拉利高管称中国车企像在开发快消品](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%E9%AB%98%E7%AE%A1%E7%A7%B0%E4%B8%AD%E5%9B%BD%E8%BD%A6%E4%BC%81%E5%83%8F%E5%9C%A8%E5%BC%80%E5%8F%91%E5%BF%AB%E6%B6%88%E5%93%81%23) `1.1M 🔥` `NEW`
1. [杭州两大水库备战台风开闸泄洪](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%B8%A4%E5%A4%A7%E6%B0%B4%E5%BA%93%E5%A4%87%E6%88%98%E5%8F%B0%E9%A3%8E%E5%BC%80%E9%97%B8%E6%B3%84%E6%B4%AA%23) `1.1M 🔥` `NEW`
1. [有没有体面一点的午休方式](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BD%93%E9%9D%A2%E4%B8%80%E7%82%B9%E7%9A%84%E5%8D%88%E4%BC%91%E6%96%B9%E5%BC%8F%23) `1.0M 🔥` `NEW`
1. [薛小婉任权领结婚证了](https://s.weibo.com/weibo?q=%23%E8%96%9B%E5%B0%8F%E5%A9%89%E4%BB%BB%E6%9D%83%E9%A2%86%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [NCT 无限缩减](https://s.weibo.com/weibo?q=%23NCT%20%E6%97%A0%E9%99%90%E7%BC%A9%E5%87%8F%23) `1.0M 🔥` `NEW`
1. [吴彤大变样](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A4%E5%A4%A7%E5%8F%98%E6%A0%B7%23) `1.0M 🔥` `NEW`
1. [miumiu有张元英真是天大的福气](https://s.weibo.com/weibo?q=%23miumiu%E6%9C%89%E5%BC%A0%E5%85%83%E8%8B%B1%E7%9C%9F%E6%98%AF%E5%A4%A9%E5%A4%A7%E7%9A%84%E7%A6%8F%E6%B0%94%23) `1.0M 🔥` `NEW`
1. [突然发现雨伞可以当支架](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E9%9B%A8%E4%BC%9E%E5%8F%AF%E4%BB%A5%E5%BD%93%E6%94%AF%E6%9E%B6%23) `1.0M 🔥` `NEW`
1. [埃及足协声明 (Statement from the Egyptian Football Association)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E8%B6%B3%E5%8D%8F%E5%A3%B0%E6%98%8E%23) `998.4K 🔥` `NEW`
1. [阿根廷球迷举以色列国旗](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E8%BF%B7%E4%B8%BE%E4%BB%A5%E8%89%B2%E5%88%97%E5%9B%BD%E6%97%97%23) `989.8K 🔥` `NEW`
1. [小鹿自曝生育能力下降](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%E8%87%AA%E6%9B%9D%E7%94%9F%E8%82%B2%E8%83%BD%E5%8A%9B%E4%B8%8B%E9%99%8D%23) `980.5K 🔥` `NEW`
1. [被转运婴儿躺在盆里吃手满眼信赖](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%BD%AC%E8%BF%90%E5%A9%B4%E5%84%BF%E8%BA%BA%E5%9C%A8%E7%9B%86%E9%87%8C%E5%90%83%E6%89%8B%E6%BB%A1%E7%9C%BC%E4%BF%A1%E8%B5%96%23) `974.5K 🔥` `NEW`
1. [广西业主送500份盒饭愧疚说做少了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E4%B8%9A%E4%B8%BB%E9%80%81500%E4%BB%BD%E7%9B%92%E9%A5%AD%E6%84%A7%E7%96%9A%E8%AF%B4%E5%81%9A%E5%B0%91%E4%BA%86%23) `971.2K 🔥` `NEW`
1. [张真源抱着工作人员进密室](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E6%8A%B1%E7%9D%80%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E8%BF%9B%E5%AF%86%E5%AE%A4%23) `966.3K 🔥` `NEW`
1. [王橹杰 柠檬](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E6%9F%A0%E6%AA%AC%23) `957.4K 🔥` `NEW`
1. [苗圃这个颌面有人懂吗](https://s.weibo.com/weibo?q=%23%E8%8B%97%E5%9C%83%E8%BF%99%E4%B8%AA%E9%A2%8C%E9%9D%A2%E6%9C%89%E4%BA%BA%E6%87%82%E5%90%97%23) `951.7K 🔥` `NEW`
1. [公司培训在鞋里站了两个小时](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%9F%B9%E8%AE%AD%E5%9C%A8%E9%9E%8B%E9%87%8C%E7%AB%99%E4%BA%86%E4%B8%A4%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `947.7K 🔥` `NEW`
1. [雷军回应SkyNomad上市时间](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94SkyNomad%E4%B8%8A%E5%B8%82%E6%97%B6%E9%97%B4%23) `939.8K 🔥` `NEW`
1. [其实我连双休都不满意 (In fact, I’m not even satisfied with weekend breaks.)](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E6%88%91%E8%BF%9E%E5%8F%8C%E4%BC%91%E9%83%BD%E4%B8%8D%E6%BB%A1%E6%84%8F%23) `935.0K 🔥` `NEW`
1. [小城良方](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%23) `923.3K 🔥` `NEW`
1. [多款新车被指撞脸小米](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BE%E6%96%B0%E8%BD%A6%E8%A2%AB%E6%8C%87%E6%92%9E%E8%84%B8%E5%B0%8F%E7%B1%B3%23) `919.5K 🔥` `NEW`
1. [功夫女足路演](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E8%B7%AF%E6%BC%94%23) `913.3K 🔥` `NEW`
1. [物理AI第一股Momenta登陆港股](https://s.weibo.com/weibo?q=%23%E7%89%A9%E7%90%86AI%E7%AC%AC%E4%B8%80%E8%82%A1Momenta%E7%99%BB%E9%99%86%E6%B8%AF%E8%82%A1%23) `906.0K 🔥` `NEW`
1. [G2对战T1](https://s.weibo.com/weibo?q=%23G2%E5%AF%B9%E6%88%98T1%23) `901.5K 🔥` `NEW`
1. [霍启刚痛斥美国政客让世界杯失去灵魂](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E7%97%9B%E6%96%A5%E7%BE%8E%E5%9B%BD%E6%94%BF%E5%AE%A2%E8%AE%A9%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%B1%E5%8E%BB%E7%81%B5%E9%AD%82%23) `899.8K 🔥` `NEW`
1. [阿里 全员卸载Claude](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%20%E5%85%A8%E5%91%98%E5%8D%B8%E8%BD%BDClaude%23) `1.2M 🔥` `+144%`
1. [第一次对极繁主义有了实感](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E6%9E%81%E7%B9%81%E4%B8%BB%E4%B9%89%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `1.1M 🔥` `+165%`
1. [金晨仍持续掉粉](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E4%BB%8D%E6%8C%81%E7%BB%AD%E6%8E%89%E7%B2%89%23) `1.1M 🔥` `+133%`
1. [旅游7天定律 (7-day travel rule)](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B87%E5%A4%A9%E5%AE%9A%E5%BE%8B%23) `1.1M 🔥` `+158%`
1. [霉霉已经可以买下月球了 (Swifty Swift can already buy the moon)](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%B7%B2%E7%BB%8F%E5%8F%AF%E4%BB%A5%E4%B9%B0%E4%B8%8B%E6%9C%88%E7%90%83%E4%BA%86%23) `1.1M 🔥` `+132%`
1. [千只瘫痪小猫超65%吃同一品牌猫粮](https://s.weibo.com/weibo?q=%23%E5%8D%83%E5%8F%AA%E7%98%AB%E7%97%AA%E5%B0%8F%E7%8C%AB%E8%B6%8565%25%E5%90%83%E5%90%8C%E4%B8%80%E5%93%81%E7%89%8C%E7%8C%AB%E7%B2%AE%23) `1.1M 🔥` `+130%`
1. [一觉醒来黄金又跌了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E9%BB%84%E9%87%91%E5%8F%88%E8%B7%8C%E4%BA%86%23) `1.0M 🔥` `+132%`
1. [张馨予时装周瘦到98斤 (Zhang Xinyu lost weight to 98 pounds during Fashion Week)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E6%97%B6%E8%A3%85%E5%91%A8%E7%98%A6%E5%88%B098%E6%96%A4%23) `930.1K 🔥` `+99%`
1. [超8000人投入广西抗洪](https://s.weibo.com/weibo?q=%23%E8%B6%858000%E4%BA%BA%E6%8A%95%E5%85%A5%E5%B9%BF%E8%A5%BF%E6%8A%97%E6%B4%AA%23) `1.2M 🔥`
1. [全新奔驰纯电GLC (All-new Mercedes-Benz pure electric GLC)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%A5%94%E9%A9%B0%E7%BA%AF%E7%94%B5GLC%23) `1.2M 🔥`
1. [王俊凯王一博作词](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BD%9C%E8%AF%8D%23) `1.0M 🔥`
1. [阿根廷 脏 (argentina dirty)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E8%84%8F%23) `986.1K 🔥`
1. [挪威队多人生病](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E9%98%9F%E5%A4%9A%E4%BA%BA%E7%94%9F%E7%97%85%23) `1.2M 🔥` `-39%`
1. [埃及足协正式申诉 要求调查主裁判 (The Egyptian Football Association formally lodges a complaint, calling for an investigation into the referee)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E8%B6%B3%E5%8D%8F%E6%AD%A3%E5%BC%8F%E7%94%B3%E8%AF%89%20%E8%A6%81%E6%B1%82%E8%B0%83%E6%9F%A5%E4%B8%BB%E8%A3%81%E5%88%A4%23) `1.0M 🔥` `-67%`

Updated at 2026-07-08 15:11:44

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
