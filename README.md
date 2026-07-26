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

1. [亲密关系容易产生轻视 (Intimacy can easily lead to contempt)](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E5%AE%B9%E6%98%93%E4%BA%A7%E7%94%9F%E8%BD%BB%E8%A7%86%23) `133.7K 🔥` `NEW`
1. [去过音乐节的人嘴真严](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E8%BF%87%E9%9F%B3%E4%B9%90%E8%8A%82%E7%9A%84%E4%BA%BA%E5%98%B4%E7%9C%9F%E4%B8%A5%23) `104.6K 🔥` `NEW`
1. [怪不得总打不到蚊子](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E6%80%BB%E6%89%93%E4%B8%8D%E5%88%B0%E8%9A%8A%E5%AD%90%23) `104.5K 🔥` `NEW`
1. [在湘超赛场看到柯淳了](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%B9%98%E8%B6%85%E8%B5%9B%E5%9C%BA%E7%9C%8B%E5%88%B0%E6%9F%AF%E6%B7%B3%E4%BA%86%23) `104.4K 🔥` `NEW`
1. [侯明昊蕾丝眼纱造型](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E8%95%BE%E4%B8%9D%E7%9C%BC%E7%BA%B1%E9%80%A0%E5%9E%8B%23) `104.2K 🔥` `NEW`
1. [爱笑 Hope](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%AC%91%20Hope%23) `104.0K 🔥` `NEW`
1. [挑房子一定要注意看邻居素质](https://s.weibo.com/weibo?q=%23%E6%8C%91%E6%88%BF%E5%AD%90%E4%B8%80%E5%AE%9A%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9C%8B%E9%82%BB%E5%B1%85%E7%B4%A0%E8%B4%A8%23) `103.5K 🔥` `NEW`
1. [少年心气是不可再生之物](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%B9%B4%E5%BF%83%E6%B0%94%E6%98%AF%E4%B8%8D%E5%8F%AF%E5%86%8D%E7%94%9F%E4%B9%8B%E7%89%A9%23) `103.5K 🔥` `NEW`
1. [父母32年未领证继子被判有继承权](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D32%E5%B9%B4%E6%9C%AA%E9%A2%86%E8%AF%81%E7%BB%A7%E5%AD%90%E8%A2%AB%E5%88%A4%E6%9C%89%E7%BB%A7%E6%89%BF%E6%9D%83%23) `103.2K 🔥` `NEW`
1. [Hope反向闪](https://s.weibo.com/weibo?q=%23Hope%E5%8F%8D%E5%90%91%E9%97%AA%23) `103.1K 🔥` `NEW`
1. [百花杀大结局 (The ending of Hundred Flowers Killing)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E5%A4%A7%E7%BB%93%E5%B1%80%23) `102.9K 🔥` `NEW`
1. [AL对战BLG](https://s.weibo.com/weibo?q=%23AL%E5%AF%B9%E6%88%98BLG%23) `102.9K 🔥` `NEW`
1. [何与演技](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E6%BC%94%E6%8A%80%23) `104.8K 🔥`
1. [考公人发现豆包的神奇用法](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%85%AC%E4%BA%BA%E5%8F%91%E7%8E%B0%E8%B1%86%E5%8C%85%E7%9A%84%E7%A5%9E%E5%A5%87%E7%94%A8%E6%B3%95%23) `104.7K 🔥`
1. [被游客掰断手腕NPC称左手仍无知觉](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%B8%B8%E5%AE%A2%E6%8E%B0%E6%96%AD%E6%89%8B%E8%85%95NPC%E7%A7%B0%E5%B7%A6%E6%89%8B%E4%BB%8D%E6%97%A0%E7%9F%A5%E8%A7%89%23) `104.2K 🔥`
1. [现实好看和上镜好看是两个维度](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%AE%9E%E5%A5%BD%E7%9C%8B%E5%92%8C%E4%B8%8A%E9%95%9C%E5%A5%BD%E7%9C%8B%E6%98%AF%E4%B8%A4%E4%B8%AA%E7%BB%B4%E5%BA%A6%23) `104.1K 🔥`
1. [晚饭后最好的耗糖运动](https://s.weibo.com/weibo?q=%23%E6%99%9A%E9%A5%AD%E5%90%8E%E6%9C%80%E5%A5%BD%E7%9A%84%E8%80%97%E7%B3%96%E8%BF%90%E5%8A%A8%23) `103.9K 🔥`
1. [甘肃省委书记省长赶赴山洪现场](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0%E7%9C%81%E9%95%BF%E8%B5%B6%E8%B5%B4%E5%B1%B1%E6%B4%AA%E7%8E%B0%E5%9C%BA%23) `103.7K 🔥`
1. [侯明昊成都演唱会](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%88%90%E9%83%BD%E6%BC%94%E5%94%B1%E4%BC%9A%23) `103.7K 🔥`
1. [塞纳斯公告](https://s.weibo.com/weibo?q=%23%E5%A1%9E%E7%BA%B3%E6%96%AF%E5%85%AC%E5%91%8A%23) `103.6K 🔥`
1. [BLG战胜AL (BLG defeated AL)](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CAL%23) `103.4K 🔥`
1. [金鹤龙晒迪丽热巴钰珑](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E6%99%92%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%92%B0%E7%8F%91%23) `103.3K 🔥`
1. [百花杀番外](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E7%95%AA%E5%A4%96%23) `103.2K 🔥`
1. [群星闪耀时撤档 (Canceling when the stars shine)](https://s.weibo.com/weibo?q=%23%E7%BE%A4%E6%98%9F%E9%97%AA%E8%80%80%E6%97%B6%E6%92%A4%E6%A1%A3%23) `933.5K 🔥` `-48%`
1. [杭州已经发展成这样了吗](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%B7%B2%E7%BB%8F%E5%8F%91%E5%B1%95%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `545.4K 🔥` `-32%`
1. [2.5万件物资支持粤赣湘台风救灾](https://s.weibo.com/weibo?q=%232.5%E4%B8%87%E4%BB%B6%E7%89%A9%E8%B5%84%E6%94%AF%E6%8C%81%E7%B2%A4%E8%B5%A3%E6%B9%98%E5%8F%B0%E9%A3%8E%E6%95%91%E7%81%BE%23) `518.2K 🔥` `-36%`
1. [不要长期向AI倾泻心事](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E9%95%BF%E6%9C%9F%E5%90%91AI%E5%80%BE%E6%B3%BB%E5%BF%83%E4%BA%8B%23) `505.5K 🔥` `-21%`
1. [百万粉丝女网红贩卖私密视频被逮捕](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E7%B2%89%E4%B8%9D%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%B4%A9%E5%8D%96%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91%E8%A2%AB%E9%80%AE%E6%8D%95%23) `484.1K 🔥` `-40%`
1. [原来请假是不需要理由的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%AF%B7%E5%81%87%E6%98%AF%E4%B8%8D%E9%9C%80%E8%A6%81%E7%90%86%E7%94%B1%E7%9A%84%23) `441.4K 🔥` `-39%`
1. [迪丽热巴名字长还有这好处](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%8D%E5%AD%97%E9%95%BF%E8%BF%98%E6%9C%89%E8%BF%99%E5%A5%BD%E5%A4%84%23) `205.0K 🔥` `-32%`
1. [终于明白职场没有朋友的含义了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%98%8E%E7%99%BD%E8%81%8C%E5%9C%BA%E6%B2%A1%E6%9C%89%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%90%AB%E4%B9%89%E4%BA%86%23) `198.5K 🔥` `-44%`
1. [甘肃渭源山洪 (Flash flood in Weiyuan, Gansu)](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E6%B8%AD%E6%BA%90%E5%B1%B1%E6%B4%AA%23) `156.8K 🔥` `-48%`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `132.7K 🔥` `-54%`
1. [演员王建隆去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%8E%8B%E5%BB%BA%E9%9A%86%E5%8E%BB%E4%B8%96%23) `131.6K 🔥` `-50%`
1. [扣扣搜搜却花了很多钱](https://s.weibo.com/weibo?q=%23%E6%89%A3%E6%89%A3%E6%90%9C%E6%90%9C%E5%8D%B4%E8%8A%B1%E4%BA%86%E5%BE%88%E5%A4%9A%E9%92%B1%23) `129.7K 🔥` `-50%`
1. [TOP演唱会大合唱同手同脚](https://s.weibo.com/weibo?q=%23TOP%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A4%A7%E5%90%88%E5%94%B1%E5%90%8C%E6%89%8B%E5%90%8C%E8%84%9A%23) `119.0K 🔥` `-54%`
1. [鹿晗你衣服起球了](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%BD%A0%E8%A1%A3%E6%9C%8D%E8%B5%B7%E7%90%83%E4%BA%86%23) `111.4K 🔥` `-61%`
1. [每次发完朋友圈都特别尴尬](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E6%AC%A1%E5%8F%91%E5%AE%8C%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%83%BD%E7%89%B9%E5%88%AB%E5%B0%B4%E5%B0%AC%23) `109.6K 🔥` `-29%`
1. [张靓颖张天爱看薛之谦演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E5%BC%A0%E5%A4%A9%E7%88%B1%E7%9C%8B%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `109.5K 🔥` `-55%`
1. [四川九寨沟景区泥石流](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%99%AF%E5%8C%BA%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `106.9K 🔥` `-61%`
1. [孟子义还有五部待播作品](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%BF%98%E6%9C%89%E4%BA%94%E9%83%A8%E5%BE%85%E6%92%AD%E4%BD%9C%E5%93%81%23) `106.7K 🔥` `-32%`
1. [长鑫上市 合肥能赚多少 (How much can Hefei earn from Changxin’s listing?)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E4%B8%8A%E5%B8%82%20%E5%90%88%E8%82%A5%E8%83%BD%E8%B5%9A%E5%A4%9A%E5%B0%91%23) `106.4K 🔥` `-63%`
1. [花二十多万买了个48平的海景房 (I spent more than 200,000 yuan to buy a 48-square-meter sea-view house.)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E4%BA%8C%E5%8D%81%E5%A4%9A%E4%B8%87%E4%B9%B0%E4%BA%86%E4%B8%AA48%E5%B9%B3%E7%9A%84%E6%B5%B7%E6%99%AF%E6%88%BF%23) `105.9K 🔥` `-57%`
1. [鹿晗粉碎热搜词条](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%B2%89%E7%A2%8E%E7%83%AD%E6%90%9C%E8%AF%8D%E6%9D%A1%23) `105.3K 🔥` `-57%`
1. [原来小区是这样命名的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B0%8F%E5%8C%BA%E6%98%AF%E8%BF%99%E6%A0%B7%E5%91%BD%E5%90%8D%E7%9A%84%23) `105.0K 🔥` `-51%`
1. [cp福州](https://s.weibo.com/weibo?q=%23cp%E7%A6%8F%E5%B7%9E%23) `105.0K 🔥` `-44%`
1. [王一博开香槟憋着坏 (Wang Yibo opened the champagne and held back the bad news)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BC%80%E9%A6%99%E6%A7%9F%E6%86%8B%E7%9D%80%E5%9D%8F%23) `104.9K 🔥` `-34%`
1. [张凌赫回复付辛博](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%A4%8D%E4%BB%98%E8%BE%9B%E5%8D%9A%23) `104.8K 🔥` `-32%`
1. [胖东来售卖的西瓜上为何有圆圈](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%94%AE%E5%8D%96%E7%9A%84%E8%A5%BF%E7%93%9C%E4%B8%8A%E4%B8%BA%E4%BD%95%E6%9C%89%E5%9C%86%E5%9C%88%23) `104.4K 🔥` `-37%`
1. [美国发生AI失控事故](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%91%E7%94%9FAI%E5%A4%B1%E6%8E%A7%E4%BA%8B%E6%95%85%23) `104.0K 🔥` `-44%`

Updated at 2026-07-27 01:42:42

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
