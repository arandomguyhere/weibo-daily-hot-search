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

1. [蔡文静工伤 (Cai Wenjing's work injury)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%B7%A5%E4%BC%A4%23) `602.5K 🔥` `NEW`
1. [骄阳似我](https://s.weibo.com/weibo?q=%23%E9%AA%84%E9%98%B3%E4%BC%BC%E6%88%91%23) `422.2K 🔥` `NEW`
1. [白鹿 剧宣的神](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%89%A7%E5%AE%A3%E7%9A%84%E7%A5%9E%23) `291.8K 🔥` `NEW`
1. [亲爱的客栈定档](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%88%B1%E7%9A%84%E5%AE%A2%E6%A0%88%E5%AE%9A%E6%A1%A3%23) `255.6K 🔥` `NEW`
1. [给iPhone7配二手苹果表担心来路不正](https://s.weibo.com/weibo?q=%23%E7%BB%99iPhone7%E9%85%8D%E4%BA%8C%E6%89%8B%E8%8B%B9%E6%9E%9C%E8%A1%A8%E6%8B%85%E5%BF%83%E6%9D%A5%E8%B7%AF%E4%B8%8D%E6%AD%A3%23) `254.8K 🔥` `NEW`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `248.0K 🔥` `NEW`
1. [檀健次卢昱晓捧杯海报](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8D%A2%E6%98%B1%E6%99%93%E6%8D%A7%E6%9D%AF%E6%B5%B7%E6%8A%A5%23) `235.1K 🔥` `NEW`
1. [矿山员工10分钟数9.5万现金手抽筋](https://s.weibo.com/weibo?q=%23%E7%9F%BF%E5%B1%B1%E5%91%98%E5%B7%A510%E5%88%86%E9%92%9F%E6%95%B09.5%E4%B8%87%E7%8E%B0%E9%87%91%E6%89%8B%E6%8A%BD%E7%AD%8B%23) `231.6K 🔥` `NEW`
1. [孟子义何与吻戏](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%BD%95%E4%B8%8E%E5%90%BB%E6%88%8F%23) `230.1K 🔥` `NEW`
1. [送阿福成为各地新年俗](https://s.weibo.com/weibo?q=%23%E9%80%81%E9%98%BF%E7%A6%8F%E6%88%90%E4%B8%BA%E5%90%84%E5%9C%B0%E6%96%B0%E5%B9%B4%E4%BF%97%23) `226.9K 🔥` `NEW`
1. [这一秒过火 (This second went too far)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `226.8K 🔥` `NEW`
1. [王鹤棣cortis拍了cha](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3cortis%E6%8B%8D%E4%BA%86cha%23) `212.5K 🔥` `NEW`
1. [迪士尼指控Seedance侵权](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%E6%8C%87%E6%8E%A7Seedance%E4%BE%B5%E6%9D%83%23) `211.9K 🔥` `NEW`
1. [日本释放被扣押中国渔船船长](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%87%8A%E6%94%BE%E8%A2%AB%E6%89%A3%E6%8A%BC%E4%B8%AD%E5%9B%BD%E6%B8%94%E8%88%B9%E8%88%B9%E9%95%BF%23) `208.2K 🔥` `NEW`
1. [得知22岁儿子巴厘岛溺亡母亲哭晕](https://s.weibo.com/weibo?q=%23%E5%BE%97%E7%9F%A522%E5%B2%81%E5%84%BF%E5%AD%90%E5%B7%B4%E5%8E%98%E5%B2%9B%E6%BA%BA%E4%BA%A1%E6%AF%8D%E4%BA%B2%E5%93%AD%E6%99%95%23) `207.6K 🔥` `NEW`
1. [孟子义李昀锐情人节九宫格](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E6%83%85%E4%BA%BA%E8%8A%82%E4%B9%9D%E5%AE%AB%E6%A0%BC%23) `206.9K 🔥` `NEW`
1. [杨瀚森首次亮相NBA全明星](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E9%A6%96%E6%AC%A1%E4%BA%AE%E7%9B%B8NBA%E5%85%A8%E6%98%8E%E6%98%9F%23) `179.9K 🔥` `NEW`
1. [逐玉速抬](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%80%9F%E6%8A%AC%23) `162.5K 🔥` `NEW`
1. [月薪6000春节加班4天拿4400元](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA6000%E6%98%A5%E8%8A%82%E5%8A%A0%E7%8F%AD4%E5%A4%A9%E6%8B%BF4400%E5%85%83%23) `156.4K 🔥` `NEW`
1. [孙龙林孝埈刘少昂出战1500米](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E6%9E%97%E5%AD%9D%E5%9F%88%E5%88%98%E5%B0%91%E6%98%82%E5%87%BA%E6%88%981500%E7%B1%B3%23) `154.5K 🔥` `NEW`
1. [杨瀚森10分2板 (Yang Hansen 10 points and 2 rebounds)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE10%E5%88%862%E6%9D%BF%23) `154.2K 🔥` `NEW`
1. [玉簟秋揽腰吻海报](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8B%E6%8F%BD%E8%85%B0%E5%90%BB%E6%B5%B7%E6%8A%A5%23) `143.9K 🔥` `NEW`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `137.9K 🔥` `NEW`
1. [何不同舟渡](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8D%E5%90%8C%E8%88%9F%E6%B8%A1%23) `119.8K 🔥` `NEW`
1. [这两幕居然是白宇同一天拍的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%A4%E5%B9%95%E5%B1%85%E7%84%B6%E6%98%AF%E7%99%BD%E5%AE%87%E5%90%8C%E4%B8%80%E5%A4%A9%E6%8B%8D%E7%9A%84%23) `98.0K 🔥` `NEW`
1. [美国到底在防着谁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%88%B0%E5%BA%95%E5%9C%A8%E9%98%B2%E7%9D%80%E8%B0%81%23) `95.0K 🔥` `NEW`
1. [金饰价格涨到1551元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E6%B6%A8%E5%88%B01551%E5%85%83%23) `92.6K 🔥` `NEW`
1. [情人节翻垃圾桶](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E7%BF%BB%E5%9E%83%E5%9C%BE%E6%A1%B6%23) `91.9K 🔥` `NEW`
1. [樊振东最淡定输球](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%9C%80%E6%B7%A1%E5%AE%9A%E8%BE%93%E7%90%83%23) `89.3K 🔥` `NEW`
1. [情人节微信开放520元红包](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E5%BE%AE%E4%BF%A1%E5%BC%80%E6%94%BE520%E5%85%83%E7%BA%A2%E5%8C%85%23) `82.8K 🔥` `NEW`
1. [台湾艺人在郑州做主播称有奔头儿 (Taiwanese artist works as anchor in Zhengzhou and says he has a good career)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%89%BA%E4%BA%BA%E5%9C%A8%E9%83%91%E5%B7%9E%E5%81%9A%E4%B8%BB%E6%92%AD%E7%A7%B0%E6%9C%89%E5%A5%94%E5%A4%B4%E5%84%BF%23) `71.8K 🔥` `NEW`
1. [羽生结弦的含金量还在上升](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E7%94%9F%E7%BB%93%E5%BC%A6%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `818.4K 🔥` `+844%`
1. [情人节红包](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E7%BA%A2%E5%8C%85%23) `391.2K 🔥` `+184%`
1. [白敬亭 宋轶 (Bai Jingting Song Yi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `207.7K 🔥` `+47%`
1. [宋轶好刚](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E5%A5%BD%E5%88%9A%23) `174.5K 🔥` `+35%`
1. [女子29元韭菜炒蚌肉吃出1颗粉珍珠](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%9029%E5%85%83%E9%9F%AD%E8%8F%9C%E7%82%92%E8%9A%8C%E8%82%89%E5%90%83%E5%87%BA1%E9%A2%97%E7%B2%89%E7%8F%8D%E7%8F%A0%23) `155.9K 🔥` `+111%`
1. [花滑米兰惨案 (figure skating tragedy in Milan)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%BB%91%E7%B1%B3%E5%85%B0%E6%83%A8%E6%A1%88%23) `1.1M 🔥`
1. [回家路上随手拍 (Random photo taken on the way home)](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E5%AE%B6%E8%B7%AF%E4%B8%8A%E9%9A%8F%E6%89%8B%E6%8B%8D%23) `652.8K 🔥`
1. [情人节 (Valentine's Day)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%23) `282.6K 🔥`
1. [新娘称婚宴4000一桌被亲友说最难吃 (The bride said her wedding banquet cost 4,000 per table and her relatives and friends said it was the worst food.)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%A7%B0%E5%A9%9A%E5%AE%B44000%E4%B8%80%E6%A1%8C%E8%A2%AB%E4%BA%B2%E5%8F%8B%E8%AF%B4%E6%9C%80%E9%9A%BE%E5%90%83%23) `220.6K 🔥`
1. [樊振东2比3温瑞博](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C2%E6%AF%943%E6%B8%A9%E7%91%9E%E5%8D%9A%23) `190.1K 🔥` `-78%`
1. [女子幽门螺杆菌阳性3年后查出胃癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B9%BD%E9%97%A8%E8%9E%BA%E6%9D%86%E8%8F%8C%E9%98%B3%E6%80%A73%E5%B9%B4%E5%90%8E%E6%9F%A5%E5%87%BA%E8%83%83%E7%99%8C%23) `121.5K 🔥` `-51%`
1. [生命树后期尺度](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%90%8E%E6%9C%9F%E5%B0%BA%E5%BA%A6%23) `115.5K 🔥` `-53%`
1. [樊振东2比3高茨 (Fan Zhendong 2 to 3 Gautz)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C2%E6%AF%943%E9%AB%98%E8%8C%A8%23) `98.1K 🔥` `-53%`
1. [民警厕所打人受害人被打致小便失禁 (Victim beaten by police in restroom was left incontinent)](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E5%8E%95%E6%89%80%E6%89%93%E4%BA%BA%E5%8F%97%E5%AE%B3%E4%BA%BA%E8%A2%AB%E6%89%93%E8%87%B4%E5%B0%8F%E4%BE%BF%E5%A4%B1%E7%A6%81%23) `97.7K 🔥` `-40%`
1. [意大利失联中国博士生最新进展](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%8D%9A%E5%A3%AB%E7%94%9F%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `94.2K 🔥` `-23%`
1. [马里宁自由滑重大失误](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%87%8C%E5%AE%81%E8%87%AA%E7%94%B1%E6%BB%91%E9%87%8D%E5%A4%A7%E5%A4%B1%E8%AF%AF%23) `88.2K 🔥` `-61%`
1. [2700克金条388元购入1121元出手 (2700g gold bar purchased for 388 yuan and sold for 1121 yuan)](https://s.weibo.com/weibo?q=%232700%E5%85%8B%E9%87%91%E6%9D%A1388%E5%85%83%E8%B4%AD%E5%85%A51121%E5%85%83%E5%87%BA%E6%89%8B%23) `87.3K 🔥` `-67%`
1. [王栎鑫女儿因被怼脸拍生气 (Wang Yuexin’s daughter was angry because she was slapped in the face)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A0%8E%E9%91%AB%E5%A5%B3%E5%84%BF%E5%9B%A0%E8%A2%AB%E6%80%BC%E8%84%B8%E6%8B%8D%E7%94%9F%E6%B0%94%23) `79.7K 🔥` `-43%`
1. [陈飞宇什么时候才能原谅现偶](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E6%89%8D%E8%83%BD%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%23) `76.5K 🔥` `-55%`

Updated at 2026-02-14 11:27:49

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
