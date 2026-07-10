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

1. [长征十号乙火箭回收现场视频 (Long March 10B rocket recovery scene video)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E5%8D%81%E5%8F%B7%E4%B9%99%E7%81%AB%E7%AE%AD%E5%9B%9E%E6%94%B6%E7%8E%B0%E5%9C%BA%E8%A7%86%E9%A2%91%23) `879.5K 🔥` `NEW`
1. [巴威再增强为强台风级](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%86%8D%E5%A2%9E%E5%BC%BA%E4%B8%BA%E5%BC%BA%E5%8F%B0%E9%A3%8E%E7%BA%A7%23) `623.1K 🔥` `NEW`
1. [周深为生米对酱油下手了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%B8%BA%E7%94%9F%E7%B1%B3%E5%AF%B9%E9%85%B1%E6%B2%B9%E4%B8%8B%E6%89%8B%E4%BA%86%23) `490.9K 🔥` `NEW`
1. [巴威直奔山东](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%9B%B4%E5%A5%94%E5%B1%B1%E4%B8%9C%23) `469.8K 🔥` `NEW`
1. [霍思燕说那个鹦鹉不是我的](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E8%AF%B4%E9%82%A3%E4%B8%AA%E9%B9%A6%E9%B9%89%E4%B8%8D%E6%98%AF%E6%88%91%E7%9A%84%23) `231.4K 🔥` `NEW`
1. [亚马尔这个卧底藏了4年](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E8%BF%99%E4%B8%AA%E5%8D%A7%E5%BA%95%E8%97%8F%E4%BA%864%E5%B9%B4%23) `231.3K 🔥` `NEW`
1. [黄晓明在田曦薇素人时期刷过礼物](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%9C%A8%E7%94%B0%E6%9B%A6%E8%96%87%E7%B4%A0%E4%BA%BA%E6%97%B6%E6%9C%9F%E5%88%B7%E8%BF%87%E7%A4%BC%E7%89%A9%23) `231.2K 🔥` `NEW`
1. [霍思燕家的鸟又夺冠了](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E5%AE%B6%E7%9A%84%E9%B8%9F%E5%8F%88%E5%A4%BA%E5%86%A0%E4%BA%86%23) `217.0K 🔥` `NEW`
1. [歌手官博回复邓紫棋](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%AE%98%E5%8D%9A%E5%9B%9E%E5%A4%8D%E9%82%93%E7%B4%AB%E6%A3%8B%23) `215.5K 🔥` `NEW`
1. [台风巴威登陆时间有变化](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E6%97%B6%E9%97%B4%E6%9C%89%E5%8F%98%E5%8C%96%23) `207.6K 🔥` `NEW`
1. [张维伊甩头名场面居然是被坑了 (Zhang Weiyi’s famous scene of shaking his head was actually cheated)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%B4%E4%BC%8A%E7%94%A9%E5%A4%B4%E5%90%8D%E5%9C%BA%E9%9D%A2%E5%B1%85%E7%84%B6%E6%98%AF%E8%A2%AB%E5%9D%91%E4%BA%86%23) `200.2K 🔥` `NEW`
1. [IU点赞与边佑锡cp帖](https://s.weibo.com/weibo?q=%23IU%E7%82%B9%E8%B5%9E%E4%B8%8E%E8%BE%B9%E4%BD%91%E9%94%A1cp%E5%B8%96%23) `199.6K 🔥` `NEW`
1. [章若楠安慰白鹿](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%AE%89%E6%85%B0%E7%99%BD%E9%B9%BF%23) `195.5K 🔥` `NEW`
1. [辛芷蕾包场支持功夫女足](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%8C%85%E5%9C%BA%E6%94%AF%E6%8C%81%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `193.4K 🔥` `NEW`
1. [李昀锐孟子义你俩真是正缘](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E4%BD%A0%E4%BF%A9%E7%9C%9F%E6%98%AF%E6%AD%A3%E7%BC%98%23) `192.8K 🔥` `NEW`
1. [巴威台风眼消失 (Typhoon Bawi's eye disappears)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%8F%B0%E9%A3%8E%E7%9C%BC%E6%B6%88%E5%A4%B1%23) `1.4M 🔥` `+48%`
1. [工资一样的朋友存款比我多28万](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%84%E4%B8%80%E6%A0%B7%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%AD%98%E6%AC%BE%E6%AF%94%E6%88%91%E5%A4%9A28%E4%B8%87%23) `685.3K 🔥` `+93%`
1. [周星驰口碑 (Stephen Chow's reputation)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%8F%A3%E7%A2%91%23) `523.2K 🔥` `+48%`
1. [台风巴威位置](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E4%BD%8D%E7%BD%AE%23) `469.7K 🔥` `+109%`
1. [迪丽热巴这动作把我腿掰折也做不到 (Dilireba can't even break my legs with this move.)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E5%8A%A8%E4%BD%9C%E6%8A%8A%E6%88%91%E8%85%BF%E6%8E%B0%E6%8A%98%E4%B9%9F%E5%81%9A%E4%B8%8D%E5%88%B0%23) `231.4K 🔥` `+91%`
1. [北京全市已转移近10万人](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%85%A8%E5%B8%82%E5%B7%B2%E8%BD%AC%E7%A7%BB%E8%BF%9110%E4%B8%87%E4%BA%BA%23) `231.4K 🔥` `+104%`
1. [白鹿每次憋哭就这样](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%AF%8F%E6%AC%A1%E6%86%8B%E5%93%AD%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `221.8K 🔥` `+97%`
1. [台风天超市被剩下的方便面 (The instant noodles left in the supermarket during the typhoon day)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%A4%A9%E8%B6%85%E5%B8%82%E8%A2%AB%E5%89%A9%E4%B8%8B%E7%9A%84%E6%96%B9%E4%BE%BF%E9%9D%A2%23) `220.8K 🔥` `+62%`
1. [冉莹颖自曝处在丧偶式婚姻](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E8%87%AA%E6%9B%9D%E5%A4%84%E5%9C%A8%E4%B8%A7%E5%81%B6%E5%BC%8F%E5%A9%9A%E5%A7%BB%23) `220.1K 🔥` `+74%`
1. [车位被女子霸占业主再发声 (The owner of a parking space occupied by a woman speaks out again)](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BD%8D%E8%A2%AB%E5%A5%B3%E5%AD%90%E9%9C%B8%E5%8D%A0%E4%B8%9A%E4%B8%BB%E5%86%8D%E5%8F%91%E5%A3%B0%23) `218.9K 🔥` `+191%`
1. [会打扮是被严重低估的能力 (Being able to dress up is a seriously underestimated ability)](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E6%89%93%E6%89%AE%E6%98%AF%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E7%9A%84%E8%83%BD%E5%8A%9B%23) `217.8K 🔥` `+99%`
1. [库尔图瓦 世一门](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%B0%94%E5%9B%BE%E7%93%A6%20%E4%B8%96%E4%B8%80%E9%97%A8%23) `215.2K 🔥` `+44%`
1. [比利时黄金一代落幕](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E9%BB%84%E9%87%91%E4%B8%80%E4%BB%A3%E8%90%BD%E5%B9%95%23) `213.9K 🔥` `+28%`
1. [法国西班牙会师半决赛](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%A5%BF%E7%8F%AD%E7%89%99%E4%BC%9A%E5%B8%88%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `212.3K 🔥` `+50%`
1. [突然意识到没必要焦虑](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E6%B2%A1%E5%BF%85%E8%A6%81%E7%84%A6%E8%99%91%23) `211.3K 🔥` `+186%`
1. [儿子出轨后婆婆上门硬刚替儿媳讨说法](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%87%BA%E8%BD%A8%E5%90%8E%E5%A9%86%E5%A9%86%E4%B8%8A%E9%97%A8%E7%A1%AC%E5%88%9A%E6%9B%BF%E5%84%BF%E5%AA%B3%E8%AE%A8%E8%AF%B4%E6%B3%95%23) `210.7K 🔥` `+297%`
1. [女子因儿时被亲戚性侵自杀母亲发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E5%84%BF%E6%97%B6%E8%A2%AB%E4%BA%B2%E6%88%9A%E6%80%A7%E4%BE%B5%E8%87%AA%E6%9D%80%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `209.8K 🔥` `+210%`
1. [比利时 可惜](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%20%E5%8F%AF%E6%83%9C%23) `208.7K 🔥` `+30%`
1. [孟子义李昀锐你俩在娇羞啥](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E4%BD%A0%E4%BF%A9%E5%9C%A8%E5%A8%87%E7%BE%9E%E5%95%A5%23) `206.0K 🔥` `+280%`
1. [建议大家不要失去打扮欲](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%8D%E8%A6%81%E5%A4%B1%E5%8E%BB%E6%89%93%E6%89%AE%E6%AC%B2%23) `205.6K 🔥` `+139%`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `204.2K 🔥` `+292%`
1. [差点给德布劳内裤子拽掉了](https://s.weibo.com/weibo?q=%23%E5%B7%AE%E7%82%B9%E7%BB%99%E5%BE%B7%E5%B8%83%E5%8A%B3%E5%86%85%E8%A3%A4%E5%AD%90%E6%8B%BD%E6%8E%89%E4%BA%86%23) `203.8K 🔥` `+55%`
1. [台风巴威最新研判 (Latest research and judgment on Typhoon Bavi)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E7%A0%94%E5%88%A4%23) `201.8K 🔥` `+110%`
1. [开车喜欢把手这样放因为啥 (Why do you like to put your hands like this when driving?)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%BD%A6%E5%96%9C%E6%AC%A2%E6%8A%8A%E6%89%8B%E8%BF%99%E6%A0%B7%E6%94%BE%E5%9B%A0%E4%B8%BA%E5%95%A5%23) `201.7K 🔥` `+150%`
1. [台风巴威降雨最强时段](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E9%99%8D%E9%9B%A8%E6%9C%80%E5%BC%BA%E6%97%B6%E6%AE%B5%23) `197.8K 🔥` `+212%`
1. [陈楚生庙堂之外](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%E5%BA%99%E5%A0%82%E4%B9%8B%E5%A4%96%23) `196.5K 🔥` `+205%`
1. [挪威进八强 哈兰德让鲁尼兑现承诺](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E8%BF%9B%E5%85%AB%E5%BC%BA%20%E5%93%88%E5%85%B0%E5%BE%B7%E8%AE%A9%E9%B2%81%E5%B0%BC%E5%85%91%E7%8E%B0%E6%89%BF%E8%AF%BA%23) `194.7K 🔥` `+266%`
1. [范志毅说亚马尔必须要尊重C罗](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%BF%97%E6%AF%85%E8%AF%B4%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%BF%85%E9%A1%BB%E8%A6%81%E5%B0%8A%E9%87%8DC%E7%BD%97%23) `191.9K 🔥` `+54%`
1. [突然意识到所有东西都是我的钱换来的 (Suddenly realized that everything was bought with my money)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E6%89%80%E6%9C%89%E4%B8%9C%E8%A5%BF%E9%83%BD%E6%98%AF%E6%88%91%E7%9A%84%E9%92%B1%E6%8D%A2%E6%9D%A5%E7%9A%84%23) `190.2K 🔥` `+197%`
1. [迪丽热巴大腿肌踢成巨肌了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A4%A7%E8%85%BF%E8%82%8C%E8%B8%A2%E6%88%90%E5%B7%A8%E8%82%8C%E4%BA%86%23) `189.9K 🔥` `+274%`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `188.0K 🔥` `+328%`
1. [德约科维奇vs辛纳](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87vs%E8%BE%9B%E7%BA%B3%23) `187.7K 🔥` `+192%`
1. [西班牙VS比利时 (Spain vs Belgium)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99VS%E6%AF%94%E5%88%A9%E6%97%B6%23) `1.5M 🔥`
1. [比利时替补门将失误 (Belgium substitute goalkeeper makes mistake)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E6%9B%BF%E8%A1%A5%E9%97%A8%E5%B0%86%E5%A4%B1%E8%AF%AF%23) `488.8K 🔥`
1. [亚马尔状态](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E7%8A%B6%E6%80%81%23) `231.3K 🔥`
1. [西班牙2比1比利时 (Spain 2-1 Belgium)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%992%E6%AF%941%E6%AF%94%E5%88%A9%E6%97%B6%23) `231.3K 🔥` `-30%`

Updated at 2026-07-11 07:41:00

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
