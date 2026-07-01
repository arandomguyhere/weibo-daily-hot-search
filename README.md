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

1. [李宁库里纪念短袖 (Li Ning Curry commemorative short sleeves)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%81%E5%BA%93%E9%87%8C%E7%BA%AA%E5%BF%B5%E7%9F%AD%E8%A2%96%23) `96.4K 🔥` `NEW`
1. [比利时 内讧](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%20%E5%86%85%E8%AE%A7%23) `87.5K 🔥` `NEW`
1. [比利时扳平](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E6%89%B3%E5%B9%B3%23) `84.5K 🔥` `NEW`
1. [把孩子托举到能独立生存](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E5%AD%A9%E5%AD%90%E6%89%98%E4%B8%BE%E5%88%B0%E8%83%BD%E7%8B%AC%E7%AB%8B%E7%94%9F%E5%AD%98%23) `54.4K 🔥` `NEW`
1. [母鸡俯身把小鸡背在身上](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E9%B8%A1%E4%BF%AF%E8%BA%AB%E6%8A%8A%E5%B0%8F%E9%B8%A1%E8%83%8C%E5%9C%A8%E8%BA%AB%E4%B8%8A%23) `43.0K 🔥` `NEW`
1. [大姐吃14天控糖餐腰围瘦13厘米](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A7%90%E5%90%8314%E5%A4%A9%E6%8E%A7%E7%B3%96%E9%A4%90%E8%85%B0%E5%9B%B4%E7%98%A613%E5%8E%98%E7%B1%B3%23) `41.5K 🔥` `NEW`
1. [大猫挑衅小猫结果被一招压制](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%8C%AB%E6%8C%91%E8%A1%85%E5%B0%8F%E7%8C%AB%E7%BB%93%E6%9E%9C%E8%A2%AB%E4%B8%80%E6%8B%9B%E5%8E%8B%E5%88%B6%23) `34.7K 🔥` `NEW`
1. [四渡赤水获金鸡奖特别奖](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E6%B8%A1%E8%B5%A4%E6%B0%B4%E8%8E%B7%E9%87%91%E9%B8%A1%E5%A5%96%E7%89%B9%E5%88%AB%E5%A5%96%23) `31.8K 🔥` `NEW`
1. [比利时vs塞内加尔 (Belgium vs Senegal)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6vs%E5%A1%9E%E5%86%85%E5%8A%A0%E5%B0%94%23) `591.9K 🔥` `+343%`
1. [英格兰2比1民主刚果](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B02%E6%AF%941%E6%B0%91%E4%B8%BB%E5%88%9A%E6%9E%9C%23) `291.6K 🔥` `+140%`
1. [8位七一勋章获得者 (8 recipients of the July 1st Medal)](https://s.weibo.com/weibo?q=%238%E4%BD%8D%E4%B8%83%E4%B8%80%E5%8B%8B%E7%AB%A0%E8%8E%B7%E5%BE%97%E8%80%85%23) `217.9K 🔥` `+73%`
1. [胃癌晚期特效药99万一针多活2.43个月](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E7%89%B9%E6%95%88%E8%8D%AF99%E4%B8%87%E4%B8%80%E9%92%88%E5%A4%9A%E6%B4%BB2.43%E4%B8%AA%E6%9C%88%23) `186.1K 🔥` `+49%`
1. [陈晓被打耳光路透 (Chen Xiao was slapped Reuters)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%99%93%E8%A2%AB%E6%89%93%E8%80%B3%E5%85%89%E8%B7%AF%E9%80%8F%23) `172.7K 🔥` `+39%`
1. [人工智能冲击婚纱影楼](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%86%B2%E5%87%BB%E5%A9%9A%E7%BA%B1%E5%BD%B1%E6%A5%BC%23) `116.2K 🔥` `+85%`
1. [曾志伟婉拒了成毅粉丝](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E5%BF%97%E4%BC%9F%E5%A9%89%E6%8B%92%E4%BA%86%E6%88%90%E6%AF%85%E7%B2%89%E4%B8%9D%23) `77.6K 🔥` `+88%`
1. [小狗理发被剪成芒果核](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E7%90%86%E5%8F%91%E8%A2%AB%E5%89%AA%E6%88%90%E8%8A%92%E6%9E%9C%E6%A0%B8%23) `73.2K 🔥` `+54%`
1. [儿子嫌饭难吃扬言杀全家被父砍伤](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%AB%8C%E9%A5%AD%E9%9A%BE%E5%90%83%E6%89%AC%E8%A8%80%E6%9D%80%E5%85%A8%E5%AE%B6%E8%A2%AB%E7%88%B6%E7%A0%8D%E4%BC%A4%23) `71.2K 🔥` `+28%`
1. [湖人交易得到凯斯勒](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E4%BA%A4%E6%98%93%E5%BE%97%E5%88%B0%E5%87%AF%E6%96%AF%E5%8B%92%23) `59.2K 🔥` `+51%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `59.1K 🔥` `+51%`
1. [刚果金进球 (Congolese goal)](https://s.weibo.com/weibo?q=%23%E5%88%9A%E6%9E%9C%E9%87%91%E8%BF%9B%E7%90%83%23) `58.9K 🔥` `+54%`
1. [金价 (gold price)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `57.1K 🔥` `+47%`
1. [机器人伴侣你会买吗](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BC%B4%E4%BE%A3%E4%BD%A0%E4%BC%9A%E4%B9%B0%E5%90%97%23) `49.1K 🔥` `+27%`
1. [英格兰](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `66.2K 🔥`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `59.1K 🔥`
1. [伪强队 (Pseudo strong team)](https://s.weibo.com/weibo?q=%23%E4%BC%AA%E5%BC%BA%E9%98%9F%23) `59.0K 🔥`
1. [丁禹兮 姜珮瑶 (Ding Yuxi Jiang Peiyao)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%20%E5%A7%9C%E7%8F%AE%E7%91%B6%23) `58.9K 🔥`
1. [凯恩梅开二度 (Kane scores twice)](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `56.0K 🔥`
1. [赖斯燃尽了](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%96%AF%E7%87%83%E5%B0%BD%E4%BA%86%23) `49.7K 🔥`
1. [图赫尔 给凯恩磕一个 (Tuchel gives Kane a thumbs up)](https://s.weibo.com/weibo?q=%23%E5%9B%BE%E8%B5%AB%E5%B0%94%20%E7%BB%99%E5%87%AF%E6%81%A9%E7%A3%95%E4%B8%80%E4%B8%AA%23) `46.9K 🔥`
1. [英格兰vs民主刚果](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E6%B0%91%E4%B8%BB%E5%88%9A%E6%9E%9C%23) `45.9K 🔥`
1. [今年我国首个台风来了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%88%91%E5%9B%BD%E9%A6%96%E4%B8%AA%E5%8F%B0%E9%A3%8E%E6%9D%A5%E4%BA%86%23) `40.2K 🔥`
1. [真实的乡镇公务员是这样的](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%AE%9E%E7%9A%84%E4%B9%A1%E9%95%87%E5%85%AC%E5%8A%A1%E5%91%98%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `40.1K 🔥`
1. [A股将取消5%涨跌停板](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B0%86%E5%8F%96%E6%B6%885%25%E6%B6%A8%E8%B7%8C%E5%81%9C%E6%9D%BF%23) `39.4K 🔥`
1. [英格兰逆转晋级16强](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%80%86%E8%BD%AC%E6%99%8B%E7%BA%A716%E5%BC%BA%23) `39.1K 🔥`
1. [恋与深空价值观偏差是病灶 (Love and deep space value deviation are the focus)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%BB%B7%E5%80%BC%E8%A7%82%E5%81%8F%E5%B7%AE%E6%98%AF%E7%97%85%E7%81%B6%23) `38.9K 🔥`
1. [刚果金门将超神](https://s.weibo.com/weibo?q=%23%E5%88%9A%E6%9E%9C%E9%87%91%E9%97%A8%E5%B0%86%E8%B6%85%E7%A5%9E%23) `36.2K 🔥`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `36.1K 🔥`
1. [韩国自杀女消防员平均每月1.6次酒局](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%87%AA%E6%9D%80%E5%A5%B3%E6%B6%88%E9%98%B2%E5%91%98%E5%B9%B3%E5%9D%87%E6%AF%8F%E6%9C%881.6%E6%AC%A1%E9%85%92%E5%B1%80%23) `34.6K 🔥`
1. [你们都显老到什么程度了 (How old do you all look?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E9%83%BD%E6%98%BE%E8%80%81%E5%88%B0%E4%BB%80%E4%B9%88%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `34.6K 🔥`
1. [丁程鑫时刻记得自己是周柯宇哥哥](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%97%B6%E5%88%BB%E8%AE%B0%E5%BE%97%E8%87%AA%E5%B7%B1%E6%98%AF%E5%91%A8%E6%9F%AF%E5%AE%87%E5%93%A5%E5%93%A5%23) `34.2K 🔥`
1. [凯恩头球扳平](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E5%A4%B4%E7%90%83%E6%89%B3%E5%B9%B3%23) `32.9K 🔥`
1. [舟山发现全球新物种](https://s.weibo.com/weibo?q=%23%E8%88%9F%E5%B1%B1%E5%8F%91%E7%8E%B0%E5%85%A8%E7%90%83%E6%96%B0%E7%89%A9%E7%A7%8D%23) `32.7K 🔥`
1. [恋与深空问题从来不在敖尹角色本身](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%97%AE%E9%A2%98%E4%BB%8E%E6%9D%A5%E4%B8%8D%E5%9C%A8%E6%95%96%E5%B0%B9%E8%A7%92%E8%89%B2%E6%9C%AC%E8%BA%AB%23) `32.5K 🔥`
1. [晚期胃癌药99万元一人份](https://s.weibo.com/weibo?q=%23%E6%99%9A%E6%9C%9F%E8%83%83%E7%99%8C%E8%8D%AF99%E4%B8%87%E5%85%83%E4%B8%80%E4%BA%BA%E4%BB%BD%23) `32.4K 🔥`
1. [美国vs波黑](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BDvs%E6%B3%A2%E9%BB%91%23) `32.3K 🔥`
1. [王濛解说阿根廷对战佛得角 (Wang Meng explains Argentina vs. Cape Verde)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%A7%A3%E8%AF%B4%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%AF%B9%E6%88%98%E4%BD%9B%E5%BE%97%E8%A7%92%23) `32.2K 🔥`
1. [亚马尔称自己不和皇马球员说话](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E7%A7%B0%E8%87%AA%E5%B7%B1%E4%B8%8D%E5%92%8C%E7%9A%87%E9%A9%AC%E7%90%83%E5%91%98%E8%AF%B4%E8%AF%9D%23) `32.0K 🔥`
1. [英格兰被漏判点球](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E8%A2%AB%E6%BC%8F%E5%88%A4%E7%82%B9%E7%90%83%23) `70.1K 🔥` `-57%`
1. [英格兰 不是点球](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%20%E4%B8%8D%E6%98%AF%E7%82%B9%E7%90%83%23) `68.6K 🔥` `-25%`
1. [拉什福德在干什么 (What is Rashford doing?)](https://s.weibo.com/weibo?q=%23%E6%8B%89%E4%BB%80%E7%A6%8F%E5%BE%B7%E5%9C%A8%E5%B9%B2%E4%BB%80%E4%B9%88%23) `32.8K 🔥` `-24%`
1. [詹姆斯抢手](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E6%8A%A2%E6%89%8B%23) `32.0K 🔥` `-59%`

Updated at 2026-07-02 06:12:18

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
