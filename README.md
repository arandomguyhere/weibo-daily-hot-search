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

1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `354.0K 🔥` `NEW`
1. [披荆斩棘成团名单](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%88%90%E5%9B%A2%E5%90%8D%E5%8D%95%23) `121.3K 🔥` `NEW`
1. [开创新时代管党治党兴党强党新局面](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%88%9B%E6%96%B0%E6%97%B6%E4%BB%A3%E7%AE%A1%E5%85%9A%E6%B2%BB%E5%85%9A%E5%85%B4%E5%85%9A%E5%BC%BA%E5%85%9A%E6%96%B0%E5%B1%80%E9%9D%A2%23) `91.4K 🔥` `NEW`
1. [上淘宝趋势爆款5折起](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D%E8%B6%8B%E5%8A%BF%E7%88%86%E6%AC%BE5%E6%8A%98%E8%B5%B7%23) `90.0K 🔥` `NEW`
1. [小沈阳披荆斩棘冠军](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%86%A0%E5%86%9B%23) `81.8K 🔥` `NEW`
1. [马天宇劝文吉儿不要做的太绝情](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%8A%9D%E6%96%87%E5%90%89%E5%84%BF%E4%B8%8D%E8%A6%81%E5%81%9A%E7%9A%84%E5%A4%AA%E7%BB%9D%E6%83%85%23) `80.6K 🔥` `NEW`
1. [宋慧乔是宋仲基的逆鳞](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E6%98%AF%E5%AE%8B%E4%BB%B2%E5%9F%BA%E7%9A%84%E9%80%86%E9%B3%9E%23) `79.4K 🔥` `NEW`
1. [针脚里的她力量](https://s.weibo.com/weibo?q=%23%E9%92%88%E8%84%9A%E9%87%8C%E7%9A%84%E5%A5%B9%E5%8A%9B%E9%87%8F%23) `75.5K 🔥` `NEW`
1. [金银杀跌原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E6%9D%80%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `69.2K 🔥` `NEW`
1. [披荆斩棘历届总冠军](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%8E%86%E5%B1%8A%E6%80%BB%E5%86%A0%E5%86%9B%23) `68.3K 🔥` `NEW`
1. [英特尔跌30%市值蒸发近1500亿美元](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E7%89%B9%E5%B0%94%E8%B7%8C30%25%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%91%E8%BF%911500%E4%BA%BF%E7%BE%8E%E5%85%83%23) `60.4K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `58.3K 🔥` `NEW`
1. [赵丽颖不鸣则已一鸣惊人](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%B8%8D%E9%B8%A3%E5%88%99%E5%B7%B2%E4%B8%80%E9%B8%A3%E6%83%8A%E4%BA%BA%23) `58.2K 🔥` `NEW`
1. [我觉得我都要爱上厉娜了](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%A7%89%E5%BE%97%E6%88%91%E9%83%BD%E8%A6%81%E7%88%B1%E4%B8%8A%E5%8E%89%E5%A8%9C%E4%BA%86%23) `57.6K 🔥` `NEW`
1. [姜乘澜结婚了](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E7%BB%93%E5%A9%9A%E4%BA%86%23) `57.5K 🔥` `NEW`
1. [付辛博这段发言可以去后会友期了](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%BE%9B%E5%8D%9A%E8%BF%99%E6%AE%B5%E5%8F%91%E8%A8%80%E5%8F%AF%E4%BB%A5%E5%8E%BB%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E4%BA%86%23) `57.0K 🔥` `NEW`
1. [西甲主席或亲自来华道歉](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%94%B2%E4%B8%BB%E5%B8%AD%E6%88%96%E4%BA%B2%E8%87%AA%E6%9D%A5%E5%8D%8E%E9%81%93%E6%AD%89%23) `56.5K 🔥` `NEW`
1. [今年全国实现生娃基本不花钱](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E5%85%A8%E5%9B%BD%E5%AE%9E%E7%8E%B0%E7%94%9F%E5%A8%83%E5%9F%BA%E6%9C%AC%E4%B8%8D%E8%8A%B1%E9%92%B1%23) `45.4K 🔥` `NEW`
1. [英特尔](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E7%89%B9%E5%B0%94%23) `43.3K 🔥` `NEW`
1. [蔡磊妻子落泪称不甘心](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E5%A6%BB%E5%AD%90%E8%90%BD%E6%B3%AA%E7%A7%B0%E4%B8%8D%E7%94%98%E5%BF%83%23) `42.4K 🔥` `NEW`
1. [WTT蒙彼利埃女单八强赛](https://s.weibo.com/weibo?q=%23WTT%E8%92%99%E5%BD%BC%E5%88%A9%E5%9F%83%E5%A5%B3%E5%8D%95%E5%85%AB%E5%BC%BA%E8%B5%9B%23) `42.4K 🔥` `NEW`
1. [外网爆火的心脏病征兆](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E7%88%86%E7%81%AB%E7%9A%84%E5%BF%83%E8%84%8F%E7%97%85%E5%BE%81%E5%85%86%23) `42.3K 🔥` `NEW`
1. [赵丽颖是85后演员首位](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%98%AF85%E5%90%8E%E6%BC%94%E5%91%98%E9%A6%96%E4%BD%8D%23) `42.3K 🔥` `NEW`
1. [文吉儿 王子璇](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%20%E7%8E%8B%E5%AD%90%E7%92%87%23) `42.3K 🔥` `NEW`
1. [厉娜一句话许飞兑水还能喝十年](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E4%B8%80%E5%8F%A5%E8%AF%9D%E8%AE%B8%E9%A3%9E%E5%85%91%E6%B0%B4%E8%BF%98%E8%83%BD%E5%96%9D%E5%8D%81%E5%B9%B4%23) `42.2K 🔥` `NEW`
1. [次仁拉姆逝世](https://s.weibo.com/weibo?q=%23%E6%AC%A1%E4%BB%81%E6%8B%89%E5%A7%86%E9%80%9D%E4%B8%96%23) `42.2K 🔥` `NEW`
1. [白小纯你根本没想装](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E4%BD%A0%E6%A0%B9%E6%9C%AC%E6%B2%A1%E6%83%B3%E8%A3%85%23) `42.1K 🔥` `NEW`
1. [再就业男团神级开场](https://s.weibo.com/weibo?q=%23%E5%86%8D%E5%B0%B1%E4%B8%9A%E7%94%B7%E5%9B%A2%E7%A5%9E%E7%BA%A7%E5%BC%80%E5%9C%BA%23) `42.1K 🔥` `NEW`
1. [崩坏星穹铁道](https://s.weibo.com/weibo?q=%23%E5%B4%A9%E5%9D%8F%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%23) `42.1K 🔥` `NEW`
1. [证监会](https://s.weibo.com/weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%23) `42.0K 🔥` `NEW`
1. [敬畏大体老师是生命教育第一课](https://s.weibo.com/weibo?q=%23%E6%95%AC%E7%95%8F%E5%A4%A7%E4%BD%93%E8%80%81%E5%B8%88%E6%98%AF%E7%94%9F%E5%91%BD%E6%95%99%E8%82%B2%E7%AC%AC%E4%B8%80%E8%AF%BE%23) `42.0K 🔥` `NEW`
1. [孙楠感谢那英](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%A5%A0%E6%84%9F%E8%B0%A2%E9%82%A3%E8%8B%B1%23) `42.0K 🔥` `NEW`
1. [以色列女演员直播翻车当场离席](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%A5%B3%E6%BC%94%E5%91%98%E7%9B%B4%E6%92%AD%E7%BF%BB%E8%BD%A6%E5%BD%93%E5%9C%BA%E7%A6%BB%E5%B8%AD%23) `41.2K 🔥` `NEW`
1. [家教和奖学金要告诉豹猫吗](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E6%95%99%E5%92%8C%E5%A5%96%E5%AD%A6%E9%87%91%E8%A6%81%E5%91%8A%E8%AF%89%E8%B1%B9%E7%8C%AB%E5%90%97%23) `39.8K 🔥` `NEW`
1. [王濛听到披哥16个成团席位的反应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%90%AC%E5%88%B0%E6%8A%AB%E5%93%A516%E4%B8%AA%E6%88%90%E5%9B%A2%E5%B8%AD%E4%BD%8D%E7%9A%84%E5%8F%8D%E5%BA%94%23) `38.7K 🔥` `NEW`
1. [张睿没成团](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%B2%A1%E6%88%90%E5%9B%A2%23) `36.8K 🔥` `NEW`
1. [迪丽热巴用上iPhoneDuo了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%94%A8%E4%B8%8AiPhoneDuo%E4%BA%86%23) `34.6K 🔥` `NEW`
1. [律师回应小城良方告白衣山猫](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E5%9B%9E%E5%BA%94%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%91%8A%E7%99%BD%E8%A1%A3%E5%B1%B1%E7%8C%AB%23) `33.2K 🔥` `NEW`
1. [美半导体板块暴跌](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%9D%BF%E5%9D%97%E6%9A%B4%E8%B7%8C%23) `32.5K 🔥` `NEW`
1. [王濛 我喜欢你老公](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E6%88%91%E5%96%9C%E6%AC%A2%E4%BD%A0%E8%80%81%E5%85%AC%23) `32.2K 🔥` `NEW`
1. [景甜一顿早餐吃了蒋欣两天的饭](https://s.weibo.com/weibo?q=%23%E6%99%AF%E7%94%9C%E4%B8%80%E9%A1%BF%E6%97%A9%E9%A4%90%E5%90%83%E4%BA%86%E8%92%8B%E6%AC%A3%E4%B8%A4%E5%A4%A9%E7%9A%84%E9%A5%AD%23) `32.2K 🔥` `NEW`
1. [明道感谢上海交警](https://s.weibo.com/weibo?q=%23%E6%98%8E%E9%81%93%E6%84%9F%E8%B0%A2%E4%B8%8A%E6%B5%B7%E4%BA%A4%E8%AD%A6%23) `32.2K 🔥` `NEW`
1. [青稚三连暴走淘汰白小纯](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E4%B8%89%E8%BF%9E%E6%9A%B4%E8%B5%B0%E6%B7%98%E6%B1%B0%E7%99%BD%E5%B0%8F%E7%BA%AF%23) `32.2K 🔥` `NEW`
1. [双胞胎好像意识不到彼此很像](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A5%BD%E5%83%8F%E6%84%8F%E8%AF%86%E4%B8%8D%E5%88%B0%E5%BD%BC%E6%AD%A4%E5%BE%88%E5%83%8F%23) `32.2K 🔥` `NEW`
1. [梁靖崑打哭西蒙高茨](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E6%89%93%E5%93%AD%E8%A5%BF%E8%92%99%E9%AB%98%E8%8C%A8%23) `32.2K 🔥` `NEW`
1. [星神阿哈送福利](https://s.weibo.com/weibo?q=%23%E6%98%9F%E7%A5%9E%E9%98%BF%E5%93%88%E9%80%81%E7%A6%8F%E5%88%A9%23) `32.2K 🔥` `NEW`
1. [孙颖莎回应晋级蒙彼利埃站8强](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E6%99%8B%E7%BA%A7%E8%92%99%E5%BD%BC%E5%88%A9%E5%9F%83%E7%AB%998%E5%BC%BA%23) `32.1K 🔥` `NEW`
1. [张小斐vlog里的迪丽热巴](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90vlog%E9%87%8C%E7%9A%84%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `32.1K 🔥` `NEW`
1. [西蒙高茨说梁靖崑让二追三太厉害了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%92%99%E9%AB%98%E8%8C%A8%E8%AF%B4%E6%A2%81%E9%9D%96%E5%B4%91%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89%E5%A4%AA%E5%8E%89%E5%AE%B3%E4%BA%86%23) `32.1K 🔥` `NEW`
1. [孙颖莎说申裕斌给自己压力比较大](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E7%94%B3%E8%A3%95%E6%96%8C%E7%BB%99%E8%87%AA%E5%B7%B1%E5%8E%8B%E5%8A%9B%E6%AF%94%E8%BE%83%E5%A4%A7%23) `32.1K 🔥` `NEW`
1. [金价跳水400元有人抄底有人观望](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%B3%E6%B0%B4400%E5%85%83%E6%9C%89%E4%BA%BA%E6%8A%84%E5%BA%95%E6%9C%89%E4%BA%BA%E8%A7%82%E6%9C%9B%23) `32.1K 🔥` `NEW`

Updated at 2026-10-31 04:09:23

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
