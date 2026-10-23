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

1. [独生女继承2亿遗产1年后遭离婚分产](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E7%94%9F%E5%A5%B3%E7%BB%A7%E6%89%BF2%E4%BA%BF%E9%81%97%E4%BA%A71%E5%B9%B4%E5%90%8E%E9%81%AD%E7%A6%BB%E5%A9%9A%E5%88%86%E4%BA%A7%23) `748.2K 🔥` `NEW`
1. [GEN对战iG](https://s.weibo.com/weibo?q=%23GEN%E5%AF%B9%E6%88%98iG%23) `330.0K 🔥` `NEW`
1. [西藏巴青地震最新救援情况](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%B7%B4%E9%9D%92%E5%9C%B0%E9%9C%87%E6%9C%80%E6%96%B0%E6%95%91%E6%8F%B4%E6%83%85%E5%86%B5%23) `190.7K 🔥` `NEW`
1. [Zuian督战TES打HLE](https://s.weibo.com/weibo?q=%23Zuian%E7%9D%A3%E6%88%98TES%E6%89%93HLE%23) `184.9K 🔥` `NEW`
1. [一个家里只能有一个女主人](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E5%AE%B6%E9%87%8C%E5%8F%AA%E8%83%BD%E6%9C%89%E4%B8%80%E4%B8%AA%E5%A5%B3%E4%B8%BB%E4%BA%BA%23) `183.6K 🔥` `NEW`
1. [热巴蝴蝶飞走瞬间 列入内娱史册](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E8%9D%B4%E8%9D%B6%E9%A3%9E%E8%B5%B0%E7%9E%AC%E9%97%B4%20%E5%88%97%E5%85%A5%E5%86%85%E5%A8%B1%E5%8F%B2%E5%86%8C%23) `181.6K 🔥` `NEW`
1. [祖海认领](https://s.weibo.com/weibo?q=%23%E7%A5%96%E6%B5%B7%E8%AE%A4%E9%A2%86%23) `178.8K 🔥` `NEW`
1. [黄多多正式进圈](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E6%AD%A3%E5%BC%8F%E8%BF%9B%E5%9C%88%23) `178.0K 🔥` `NEW`
1. [孟子义白鹿谁都不敢站娜扎旁边](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%99%BD%E9%B9%BF%E8%B0%81%E9%83%BD%E4%B8%8D%E6%95%A2%E7%AB%99%E5%A8%9C%E6%89%8E%E6%97%81%E8%BE%B9%23) `174.9K 🔥` `NEW`
1. [宝格丽认领](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E8%AE%A4%E9%A2%86%23) `173.9K 🔥` `NEW`
1. [刘亦菲第二套](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%AC%AC%E4%BA%8C%E5%A5%97%23) `171.8K 🔥` `NEW`
1. [刘冲内场左边刘亦菲右边迪丽热巴](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%86%85%E5%9C%BA%E5%B7%A6%E8%BE%B9%E5%88%98%E4%BA%A6%E8%8F%B2%E5%8F%B3%E8%BE%B9%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `168.3K 🔥` `NEW`
1. [GEN翻盘iG](https://s.weibo.com/weibo?q=%23GEN%E7%BF%BB%E7%9B%98iG%23) `166.6K 🔥` `NEW`
1. [张予曦裙子湿了需要赔钱吗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E8%A3%99%E5%AD%90%E6%B9%BF%E4%BA%86%E9%9C%80%E8%A6%81%E8%B5%94%E9%92%B1%E5%90%97%23) `164.4K 🔥` `NEW`
1. [白鹿 神之九秒](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E7%A5%9E%E4%B9%8B%E4%B9%9D%E7%A7%92%23) `164.0K 🔥` `NEW`
1. [宋威龙张婧仪是不是忘记官宣了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%98%AF%E4%B8%8D%E6%98%AF%E5%BF%98%E8%AE%B0%E5%AE%98%E5%AE%A3%E4%BA%86%23) `154.7K 🔥` `NEW`
1. [13岁女孩卖金项链被金店当面熔化](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%8D%96%E9%87%91%E9%A1%B9%E9%93%BE%E8%A2%AB%E9%87%91%E5%BA%97%E5%BD%93%E9%9D%A2%E7%86%94%E5%8C%96%23) `147.3K 🔥` `NEW`
1. [HLE对战TES](https://s.weibo.com/weibo?q=%23HLE%E5%AF%B9%E6%88%98TES%23) `146.0K 🔥` `NEW`
1. [王楚钦多次退赛会被赋零分吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%9A%E6%AC%A1%E9%80%80%E8%B5%9B%E4%BC%9A%E8%A2%AB%E8%B5%8B%E9%9B%B6%E5%88%86%E5%90%97%23) `145.2K 🔥` `NEW`
1. [C罗第982球](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%AC%AC982%E7%90%83%23) `145.1K 🔥` `NEW`
1. [张小斐闪光灯下抬手 神中之神](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E9%97%AA%E5%85%89%E7%81%AF%E4%B8%8B%E6%8A%AC%E6%89%8B%20%E7%A5%9E%E4%B8%AD%E4%B9%8B%E7%A5%9E%23) `145.1K 🔥` `NEW`
1. [迪丽热巴第二套](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AC%AC%E4%BA%8C%E5%A5%97%23) `142.6K 🔥` `NEW`
1. [欧阳娜娜这个转场太妙了](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E8%BF%99%E4%B8%AA%E8%BD%AC%E5%9C%BA%E5%A4%AA%E5%A6%99%E4%BA%86%23) `137.4K 🔥` `NEW`
1. [GEN拿下开门红](https://s.weibo.com/weibo?q=%23GEN%E6%8B%BF%E4%B8%8B%E5%BC%80%E9%97%A8%E7%BA%A2%23) `132.6K 🔥` `NEW`
1. [女明星VOGUE神之live](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%8E%E6%98%9FVOGUE%E7%A5%9E%E4%B9%8Blive%23) `130.3K 🔥` `NEW`
1. [男子带怀孕的鱼去宠物店道歉](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B8%A6%E6%80%80%E5%AD%95%E7%9A%84%E9%B1%BC%E5%8E%BB%E5%AE%A0%E7%89%A9%E5%BA%97%E9%81%93%E6%AD%89%23) `130.2K 🔥` `NEW`
1. [C罗进球因哈姆丹越位被吹](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%BF%9B%E7%90%83%E5%9B%A0%E5%93%88%E5%A7%86%E4%B8%B9%E8%B6%8A%E4%BD%8D%E8%A2%AB%E5%90%B9%23) `129.3K 🔥` `NEW`
1. [黄友政陈熠2比3松岛辉空张本美和](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%8F%8B%E6%94%BF%E9%99%88%E7%86%A02%E6%AF%943%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `127.6K 🔥` `NEW`
1. [13岁男生被同学打伤治疗已花600万](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E7%94%B7%E7%94%9F%E8%A2%AB%E5%90%8C%E5%AD%A6%E6%89%93%E4%BC%A4%E6%B2%BB%E7%96%97%E5%B7%B2%E8%8A%B1600%E4%B8%87%23) `127.3K 🔥` `NEW`
1. [iG](https://s.weibo.com/weibo?q=%23iG%23) `126.1K 🔥` `NEW`
1. [曝LPL王多多被卡签证](https://s.weibo.com/weibo?q=%23%E6%9B%9DLPL%E7%8E%8B%E5%A4%9A%E5%A4%9A%E8%A2%AB%E5%8D%A1%E7%AD%BE%E8%AF%81%23) `125.1K 🔥` `NEW`
1. [关晓彤造型师留牌子赐香囊](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E9%80%A0%E5%9E%8B%E5%B8%88%E7%95%99%E7%89%8C%E5%AD%90%E8%B5%90%E9%A6%99%E5%9B%8A%23) `124.8K 🔥` `NEW`
1. [奚梦瑶 还得是超模](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%20%E8%BF%98%E5%BE%97%E6%98%AF%E8%B6%85%E6%A8%A1%23) `122.3K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `121.8K 🔥` `NEW`
1. [尚公主首播反响](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E9%A6%96%E6%92%AD%E5%8F%8D%E5%93%8D%23) `111.8K 🔥` `NEW`
1. [松岛辉空张本美和亚锦赛混双冠军](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E4%BA%9A%E9%94%A6%E8%B5%9B%E6%B7%B7%E5%8F%8C%E5%86%A0%E5%86%9B%23) `111.7K 🔥` `NEW`
1. [张小斐神之八秒 意气风发](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E7%A5%9E%E4%B9%8B%E5%85%AB%E7%A7%92%20%E6%84%8F%E6%B0%94%E9%A3%8E%E5%8F%91%23) `111.6K 🔥` `NEW`
1. [VOGUE合影](https://s.weibo.com/weibo?q=%23VOGUE%E5%90%88%E5%BD%B1%23) `111.6K 🔥` `NEW`
1. [国办发文减缓人工智能就业替代影响](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8A%9E%E5%8F%91%E6%96%87%E5%87%8F%E7%BC%93%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%B0%B1%E4%B8%9A%E6%9B%BF%E4%BB%A3%E5%BD%B1%E5%93%8D%23) `111.4K 🔥` `NEW`
1. [真的劝大家吃方便面少喝汤](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E5%8A%9D%E5%A4%A7%E5%AE%B6%E5%90%83%E6%96%B9%E4%BE%BF%E9%9D%A2%E5%B0%91%E5%96%9D%E6%B1%A4%23) `111.3K 🔥` `NEW`
1. [小学时裸睡是家人半夜脱的](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E6%97%B6%E8%A3%B8%E7%9D%A1%E6%98%AF%E5%AE%B6%E4%BA%BA%E5%8D%8A%E5%A4%9C%E8%84%B1%E7%9A%84%23) `111.3K 🔥` `NEW`
1. [iPhoneDuo外面贴磨砂膜](https://s.weibo.com/weibo?q=%23iPhoneDuo%E5%A4%96%E9%9D%A2%E8%B4%B4%E7%A3%A8%E7%A0%82%E8%86%9C%23) `111.2K 🔥` `NEW`
1. [小城良方这段我甚至没有勇气看完](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E8%BF%99%E6%AE%B5%E6%88%91%E7%94%9A%E8%87%B3%E6%B2%A1%E6%9C%89%E5%8B%87%E6%B0%94%E7%9C%8B%E5%AE%8C%23) `111.1K 🔥` `NEW`
1. [iPhoneDuo 华为](https://s.weibo.com/weibo?q=%23iPhoneDuo%20%E5%8D%8E%E4%B8%BA%23) `111.0K 🔥` `NEW`
1. [GEN战胜IG](https://s.weibo.com/weibo?q=%23GEN%E6%88%98%E8%83%9CIG%23) `110.8K 🔥` `NEW`
1. [35岁后女性要多练肌肉](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%90%8E%E5%A5%B3%E6%80%A7%E8%A6%81%E5%A4%9A%E7%BB%83%E8%82%8C%E8%82%89%23) `110.7K 🔥` `NEW`
1. [2026全球总决赛](https://s.weibo.com/weibo?q=%232026%E5%85%A8%E7%90%83%E6%80%BB%E5%86%B3%E8%B5%9B%23) `110.6K 🔥` `NEW`
1. [牟林翰包丽案更多细节披露](https://s.weibo.com/weibo?q=%23%E7%89%9F%E6%9E%97%E7%BF%B0%E5%8C%85%E4%B8%BD%E6%A1%88%E6%9B%B4%E5%A4%9A%E7%BB%86%E8%8A%82%E6%8A%AB%E9%9C%B2%23) `110.5K 🔥` `NEW`

Updated at 2026-10-24 02:53:55

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
