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

1. [工作后大家的朋友圈都变了 (After work, everyone’s circle of friends has changed.)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E5%A4%A7%E5%AE%B6%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%83%BD%E5%8F%98%E4%BA%86%23) `956.1K 🔥` `NEW`
1. [榴莲仅退款买家被行拘](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `863.8K 🔥` `NEW`
1. [纸嫁衣纸影浮光第二弹](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%AB%81%E8%A1%A3%E7%BA%B8%E5%BD%B1%E6%B5%AE%E5%85%89%E7%AC%AC%E4%BA%8C%E5%BC%B9%23) `670.1K 🔥` `NEW`
1. [皮皮虾事件店主病逝亲属发声](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E7%9A%AE%E8%99%BE%E4%BA%8B%E4%BB%B6%E5%BA%97%E4%B8%BB%E7%97%85%E9%80%9D%E4%BA%B2%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `364.2K 🔥` `NEW`
1. [孙恩盛掉美颜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%81%A9%E7%9B%9B%E6%8E%89%E7%BE%8E%E9%A2%9C%23) `362.8K 🔥` `NEW`
1. [田曦薇 分不清标题和弹幕谁更好笑](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%88%86%E4%B8%8D%E6%B8%85%E6%A0%87%E9%A2%98%E5%92%8C%E5%BC%B9%E5%B9%95%E8%B0%81%E6%9B%B4%E5%A5%BD%E7%AC%91%23) `353.5K 🔥` `NEW`
1. [211毕业生为脑瘫儿子卖房当蜘蛛人](https://s.weibo.com/weibo?q=%23211%E6%AF%95%E4%B8%9A%E7%94%9F%E4%B8%BA%E8%84%91%E7%98%AB%E5%84%BF%E5%AD%90%E5%8D%96%E6%88%BF%E5%BD%93%E8%9C%98%E8%9B%9B%E4%BA%BA%23) `351.8K 🔥` `NEW`
1. [怦然心动返场直播](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A8%E8%BF%94%E5%9C%BA%E7%9B%B4%E6%92%AD%23) `350.8K 🔥` `NEW`
1. [民警问轻生女子能不能牵一下手](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E9%97%AE%E8%BD%BB%E7%94%9F%E5%A5%B3%E5%AD%90%E8%83%BD%E4%B8%8D%E8%83%BD%E7%89%B5%E4%B8%80%E4%B8%8B%E6%89%8B%23) `350.0K 🔥` `NEW`
1. [白宫将公布UFO文件](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E5%B0%86%E5%85%AC%E5%B8%83UFO%E6%96%87%E4%BB%B6%23) `305.5K 🔥` `NEW`
1. [今我二人 今我夫妻二人 (Now we are two. Now we are husband and wife.)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%88%91%E4%BA%8C%E4%BA%BA%20%E4%BB%8A%E6%88%91%E5%A4%AB%E5%A6%BB%E4%BA%8C%E4%BA%BA%23) `299.2K 🔥` `NEW`
1. [袁娅维报平安](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%A8%85%E7%BB%B4%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `282.6K 🔥` `NEW`
1. [老人子宫切除20年后CT报告正常](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%AD%90%E5%AE%AB%E5%88%87%E9%99%A420%E5%B9%B4%E5%90%8ECT%E6%8A%A5%E5%91%8A%E6%AD%A3%E5%B8%B8%23) `235.1K 🔥` `NEW`
1. [台湾出现汉坦病毒致死病例](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%87%BA%E7%8E%B0%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E8%87%B4%E6%AD%BB%E7%97%85%E4%BE%8B%23) `229.6K 🔥` `NEW`
1. [孟子义确实红的档期有点满](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%A1%AE%E5%AE%9E%E7%BA%A2%E7%9A%84%E6%A1%A3%E6%9C%9F%E6%9C%89%E7%82%B9%E6%BB%A1%23) `224.0K 🔥` `NEW`
1. [周深巡演更新封面](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%B7%A1%E6%BC%94%E6%9B%B4%E6%96%B0%E5%B0%81%E9%9D%A2%23) `215.7K 🔥` `NEW`
1. [美媒曝光美军真实损失](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E6%9B%9D%E5%85%89%E7%BE%8E%E5%86%9B%E7%9C%9F%E5%AE%9E%E6%8D%9F%E5%A4%B1%23) `211.9K 🔥` `NEW`
1. [DeepSeek估值450亿美元](https://s.weibo.com/weibo?q=%23DeepSeek%E4%BC%B0%E5%80%BC450%E4%BA%BF%E7%BE%8E%E5%85%83%23) `210.8K 🔥` `NEW`
1. [卫健局回应男子治HPV7天花5.6万](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%B1%80%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E6%B2%BBHPV7%E5%A4%A9%E8%8A%B15.6%E4%B8%87%23) `210.7K 🔥` `NEW`
1. [向佑在南昌某酒吧被网友拍到](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%91%E5%9C%A8%E5%8D%97%E6%98%8C%E6%9F%90%E9%85%92%E5%90%A7%E8%A2%AB%E7%BD%91%E5%8F%8B%E6%8B%8D%E5%88%B0%23) `210.4K 🔥` `NEW`
1. [智能手表配手串 buff叠满 (Smart watch with bracelet full of buffs)](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%83%BD%E6%89%8B%E8%A1%A8%E9%85%8D%E6%89%8B%E4%B8%B2%20buff%E5%8F%A0%E6%BB%A1%23) `210.0K 🔥` `NEW`
1. [王烁然爸爸 精神暴力式教育](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%83%81%E7%84%B6%E7%88%B8%E7%88%B8%20%E7%B2%BE%E7%A5%9E%E6%9A%B4%E5%8A%9B%E5%BC%8F%E6%95%99%E8%82%B2%23) `209.9K 🔥` `NEW`
1. [淘宝免单 (Taobao free order)](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%23) `1.0M 🔥` `+109%`
1. [美国小鸟疑似用废弃针头筑巢](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B0%8F%E9%B8%9F%E7%96%91%E4%BC%BC%E7%94%A8%E5%BA%9F%E5%BC%83%E9%92%88%E5%A4%B4%E7%AD%91%E5%B7%A2%23) `355.8K 🔥` `+35%`
1. [国乒男团冲4强](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%86%B24%E5%BC%BA%23) `300.4K 🔥` `+52%`
1. [榴莲买家回应包装和坏榴莲分开扔 (Durian buyers respond to packaging and throw away bad durians separately)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%B9%B0%E5%AE%B6%E5%9B%9E%E5%BA%94%E5%8C%85%E8%A3%85%E5%92%8C%E5%9D%8F%E6%A6%B4%E8%8E%B2%E5%88%86%E5%BC%80%E6%89%94%23) `277.3K 🔥` `+23%`
1. [湖南卫视综艺本周停播](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E7%BB%BC%E8%89%BA%E6%9C%AC%E5%91%A8%E5%81%9C%E6%92%AD%23) `1.5M 🔥`
1. [向太不满向佑恋情称绝不认这种儿媳](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E4%B8%8D%E6%BB%A1%E5%90%91%E4%BD%91%E6%81%8B%E6%83%85%E7%A7%B0%E7%BB%9D%E4%B8%8D%E8%AE%A4%E8%BF%99%E7%A7%8D%E5%84%BF%E5%AA%B3%23) `362.5K 🔥`
1. [AppleWatch首次加入教育优惠](https://s.weibo.com/weibo?q=%23AppleWatch%E9%A6%96%E6%AC%A1%E5%8A%A0%E5%85%A5%E6%95%99%E8%82%B2%E4%BC%98%E6%83%A0%23) `211.4K 🔥`
1. [零重力座椅碰撞后堪比从5楼跳下](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E9%87%8D%E5%8A%9B%E5%BA%A7%E6%A4%85%E7%A2%B0%E6%92%9E%E5%90%8E%E5%A0%AA%E6%AF%94%E4%BB%8E5%E6%A5%BC%E8%B7%B3%E4%B8%8B%23) `210.4K 🔥`
1. [小米17Max本月发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B317Max%E6%9C%AC%E6%9C%88%E5%8F%91%E5%B8%83%23) `210.2K 🔥`
1. [国产储能出口迎爆发式增长](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%82%A8%E8%83%BD%E5%87%BA%E5%8F%A3%E8%BF%8E%E7%88%86%E5%8F%91%E5%BC%8F%E5%A2%9E%E9%95%BF%23) `980.6K 🔥` `-36%`
1. [浏阳烟花厂爆炸已致37死 (Explosion at Liuyang fireworks factory kills 37)](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E5%B7%B2%E8%87%B437%E6%AD%BB%23) `762.2K 🔥` `-49%`
1. [张杰在谢娜庆功宴上敬酒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%9C%A8%E8%B0%A2%E5%A8%9C%E5%BA%86%E5%8A%9F%E5%AE%B4%E4%B8%8A%E6%95%AC%E9%85%92%23) `647.1K 🔥` `-54%`
1. [这一刻所有偶像剧都要弱爆了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%88%BB%E6%89%80%E6%9C%89%E5%81%B6%E5%83%8F%E5%89%A7%E9%83%BD%E8%A6%81%E5%BC%B1%E7%88%86%E4%BA%86%23) `538.3K 🔥` `-48%`
1. [香港拿下世界杯转播权](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%8B%BF%E4%B8%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `365.1K 🔥` `-50%`
1. [王暖暖发文恐惧不敢睡被送来抢救](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9A%96%E6%9A%96%E5%8F%91%E6%96%87%E6%81%90%E6%83%A7%E4%B8%8D%E6%95%A2%E7%9D%A1%E8%A2%AB%E9%80%81%E6%9D%A5%E6%8A%A2%E6%95%91%23) `361.1K 🔥` `-41%`
1. [榴莲仅退款买家发声](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E5%8F%91%E5%A3%B0%23) `360.3K 🔥` `-42%`
1. [陈漫拍Angelababy](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%BC%AB%E6%8B%8DAngelababy%23) `358.4K 🔥` `-41%`
1. [斜方肌就是一个巨大的讨好型人格](https://s.weibo.com/weibo?q=%23%E6%96%9C%E6%96%B9%E8%82%8C%E5%B0%B1%E6%98%AF%E4%B8%80%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E8%AE%A8%E5%A5%BD%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `357.7K 🔥` `-58%`
1. [吴慷仁回复立场问题 (Wu Kangren responded to position question)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%85%B7%E4%BB%81%E5%9B%9E%E5%A4%8D%E7%AB%8B%E5%9C%BA%E9%97%AE%E9%A2%98%23) `354.8K 🔥` `-42%`
1. [抓周原来这么准 (It turns out that Zhou Zhou is so accurate)](https://s.weibo.com/weibo?q=%23%E6%8A%93%E5%91%A8%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%87%86%23) `350.3K 🔥` `-28%`
1. [央视拒买单后国际足联高管将访华](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%8B%92%E4%B9%B0%E5%8D%95%E5%90%8E%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E9%AB%98%E7%AE%A1%E5%B0%86%E8%AE%BF%E5%8D%8E%23) `349.8K 🔥` `-42%`
1. [热巴的造型因metgala又在外网火了 (Reba’s style became popular on the Internet again due to metgala)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E7%9A%84%E9%80%A0%E5%9E%8B%E5%9B%A0metgala%E5%8F%88%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `340.8K 🔥` `-43%`
1. [马頔人家新婚你忍忍吧](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E4%BA%BA%E5%AE%B6%E6%96%B0%E5%A9%9A%E4%BD%A0%E5%BF%8D%E5%BF%8D%E5%90%A7%23) `319.3K 🔥` `-47%`
1. [央视或低价拿下世界杯转播权 (CCTV may win the World Cup broadcasting rights at a low price)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%88%96%E4%BD%8E%E4%BB%B7%E6%8B%BF%E4%B8%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `304.0K 🔥` `-23%`
1. [4只皮皮虾1035元店主事发次日病逝 (Shop owner who bought 4 Pipi shrimps for NT$1,035 died of illness the day after the incident)](https://s.weibo.com/weibo?q=%234%E5%8F%AA%E7%9A%AE%E7%9A%AE%E8%99%BE1035%E5%85%83%E5%BA%97%E4%B8%BB%E4%BA%8B%E5%8F%91%E6%AC%A1%E6%97%A5%E7%97%85%E9%80%9D%23) `280.3K 🔥` `-85%`
1. [减肥才知道高中吃的有多少](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E6%89%8D%E7%9F%A5%E9%81%93%E9%AB%98%E4%B8%AD%E5%90%83%E7%9A%84%E6%9C%89%E5%A4%9A%E5%B0%91%23) `228.7K 🔥` `-63%`
1. [吉赛尔回应每个月换一张新脸](https://s.weibo.com/weibo?q=%23%E5%90%89%E8%B5%9B%E5%B0%94%E5%9B%9E%E5%BA%94%E6%AF%8F%E4%B8%AA%E6%9C%88%E6%8D%A2%E4%B8%80%E5%BC%A0%E6%96%B0%E8%84%B8%23) `210.9K 🔥` `-57%`
1. [小短腿夏酱](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%9F%AD%E8%85%BF%E5%A4%8F%E9%85%B1%23) `209.7K 🔥` `-32%`

Updated at 2026-05-08 15:21:52

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
