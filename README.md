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

1. [国乒单打全军覆没 (The national table tennis singles were completely wiped out)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%8D%95%E6%89%93%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `1.1M 🔥` `NEW`
1. [王俊凯获奖后祖师爷地位尽显](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%8E%B7%E5%A5%96%E5%90%8E%E7%A5%96%E5%B8%88%E7%88%B7%E5%9C%B0%E4%BD%8D%E5%B0%BD%E6%98%BE%23) `707.7K 🔥` `NEW`
1. [王俊凯菲拉格慕香水全球代言人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%8F%B2%E6%8B%89%E6%A0%BC%E6%85%95%E9%A6%99%E6%B0%B4%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `440.8K 🔥` `NEW`
1. [张碧晨口碑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E5%8F%A3%E7%A2%91%23) `312.9K 🔥` `NEW`
1. [折叠iPhone触屏MacBook快了](https://s.weibo.com/weibo?q=%23%E6%8A%98%E5%8F%A0iPhone%E8%A7%A6%E5%B1%8FMacBook%E5%BF%AB%E4%BA%86%23) `312.7K 🔥` `NEW`
1. [日本队主帅谈绝平荷兰价值](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%98%9F%E4%B8%BB%E5%B8%85%E8%B0%88%E7%BB%9D%E5%B9%B3%E8%8D%B7%E5%85%B0%E4%BB%B7%E5%80%BC%23) `312.5K 🔥` `NEW`
1. [足球起源于中国不是梗](https://s.weibo.com/weibo?q=%23%E8%B6%B3%E7%90%83%E8%B5%B7%E6%BA%90%E4%BA%8E%E4%B8%AD%E5%9B%BD%E4%B8%8D%E6%98%AF%E6%A2%97%23) `312.3K 🔥` `NEW`
1. [德国虐菜有多猛命就有多苦](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E8%99%90%E8%8F%9C%E6%9C%89%E5%A4%9A%E7%8C%9B%E5%91%BD%E5%B0%B1%E6%9C%89%E5%A4%9A%E8%8B%A6%23) `312.1K 🔥` `NEW`
1. [科特迪瓦1比0厄瓜多尔](https://s.weibo.com/weibo?q=%23%E7%A7%91%E7%89%B9%E8%BF%AA%E7%93%A61%E6%AF%940%E5%8E%84%E7%93%9C%E5%A4%9A%E5%B0%94%23) `312.0K 🔥` `NEW`
1. [贺峻霖的平均学分绩点](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%9A%84%E5%B9%B3%E5%9D%87%E5%AD%A6%E5%88%86%E7%BB%A9%E7%82%B9%23) `311.6K 🔥` `NEW`
1. [董子健都在求工作了 (Dong Zijian is already looking for a job)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AD%90%E5%81%A5%E9%83%BD%E5%9C%A8%E6%B1%82%E5%B7%A5%E4%BD%9C%E4%BA%86%23) `311.5K 🔥` `NEW`
1. [巴西蹦极坠亡女子未婚夫严重应激](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E8%B9%A6%E6%9E%81%E5%9D%A0%E4%BA%A1%E5%A5%B3%E5%AD%90%E6%9C%AA%E5%A9%9A%E5%A4%AB%E4%B8%A5%E9%87%8D%E5%BA%94%E6%BF%80%23) `311.3K 🔥` `NEW`
1. [好妹妹 解散](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A6%B9%E5%A6%B9%20%E8%A7%A3%E6%95%A3%23) `310.9K 🔥` `NEW`
1. [马丽说王俊凯太帅了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%BD%E8%AF%B4%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A4%AA%E5%B8%85%E4%BA%86%23) `310.7K 🔥` `NEW`
1. [贺峻霖毕设优秀作品展演](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E6%AF%95%E8%AE%BE%E4%BC%98%E7%A7%80%E4%BD%9C%E5%93%81%E5%B1%95%E6%BC%94%23) `309.8K 🔥` `NEW`
1. [女孩重度贫血总说好累被家长当矫情](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%87%8D%E5%BA%A6%E8%B4%AB%E8%A1%80%E6%80%BB%E8%AF%B4%E5%A5%BD%E7%B4%AF%E8%A2%AB%E5%AE%B6%E9%95%BF%E5%BD%93%E7%9F%AB%E6%83%85%23) `309.4K 🔥` `NEW`
1. [央行狂买黄金金价却暴跌](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A1%8C%E7%8B%82%E4%B9%B0%E9%BB%84%E9%87%91%E9%87%91%E4%BB%B7%E5%8D%B4%E6%9A%B4%E8%B7%8C%23) `309.2K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `309.0K 🔥` `NEW`
1. [韩股又涨熔断了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%82%A1%E5%8F%88%E6%B6%A8%E7%86%94%E6%96%AD%E4%BA%86%23) `308.9K 🔥` `NEW`
1. [这里是中国](https://s.weibo.com/weibo?q=%23%E8%BF%99%E9%87%8C%E6%98%AF%E4%B8%AD%E5%9B%BD%23) `282.3K 🔥` `NEW`
1. [世界杯首战前夕伊朗再遭拒签 (Iran again denied visa on eve of World Cup first match)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E6%88%98%E5%89%8D%E5%A4%95%E4%BC%8A%E6%9C%97%E5%86%8D%E9%81%AD%E6%8B%92%E7%AD%BE%23) `238.5K 🔥` `NEW`
1. [黄金继续涨了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%BB%A7%E7%BB%AD%E6%B6%A8%E4%BA%86%23) `238.3K 🔥` `NEW`
1. [重大考试失败造成的心理创伤](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%A4%A7%E8%80%83%E8%AF%95%E5%A4%B1%E8%B4%A5%E9%80%A0%E6%88%90%E7%9A%84%E5%BF%83%E7%90%86%E5%88%9B%E4%BC%A4%23) `227.8K 🔥` `NEW`
1. [林允晒和李思潼王彦桐合影](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%85%81%E6%99%92%E5%92%8C%E6%9D%8E%E6%80%9D%E6%BD%BC%E7%8E%8B%E5%BD%A6%E6%A1%90%E5%90%88%E5%BD%B1%23) `173.1K 🔥` `NEW`
1. [霍尔木兹海峡海峡19日开放](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E6%B5%B7%E5%B3%A119%E6%97%A5%E5%BC%80%E6%94%BE%23) `166.1K 🔥` `NEW`
1. [陈丽君杂志销量](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E6%9D%82%E5%BF%97%E9%94%80%E9%87%8F%23) `147.8K 🔥` `NEW`
1. [科特迪瓦vs厄瓜多尔](https://s.weibo.com/weibo?q=%23%E7%A7%91%E7%89%B9%E8%BF%AA%E7%93%A6vs%E5%8E%84%E7%93%9C%E5%A4%9A%E5%B0%94%23) `143.0K 🔥` `NEW`
1. [第一次看世界杯感觉输掉的队好心酸](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E6%84%9F%E8%A7%89%E8%BE%93%E6%8E%89%E7%9A%84%E9%98%9F%E5%A5%BD%E5%BF%83%E9%85%B8%23) `133.3K 🔥` `NEW`
1. [被江南大学毕业晚会硬控了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%B1%9F%E5%8D%97%E5%A4%A7%E5%AD%A6%E6%AF%95%E4%B8%9A%E6%99%9A%E4%BC%9A%E7%A1%AC%E6%8E%A7%E4%BA%86%23) `132.5K 🔥` `NEW`
1. [Anthropic搬石头砸脚](https://s.weibo.com/weibo?q=%23Anthropic%E6%90%AC%E7%9F%B3%E5%A4%B4%E7%A0%B8%E8%84%9A%23) `132.2K 🔥` `NEW`
1. [外国间谍曾借拍照骗走子弹库帛书 (Foreign spies used to take photos to defraud the ammunition library and silk books)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E9%97%B4%E8%B0%8D%E6%9B%BE%E5%80%9F%E6%8B%8D%E7%85%A7%E9%AA%97%E8%B5%B0%E5%AD%90%E5%BC%B9%E5%BA%93%E5%B8%9B%E4%B9%A6%23) `132.2K 🔥` `NEW`
1. [当我以为熬夜对我没有影响时 (When I thought staying up late had no effect on me)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E4%BB%A5%E4%B8%BA%E7%86%AC%E5%A4%9C%E5%AF%B9%E6%88%91%E6%B2%A1%E6%9C%89%E5%BD%B1%E5%93%8D%E6%97%B6%23) `310.5K 🔥` `+54%`
1. [AMD营销嘲讽苹果](https://s.weibo.com/weibo?q=%23AMD%E8%90%A5%E9%94%80%E5%98%B2%E8%AE%BD%E8%8B%B9%E6%9E%9C%23) `310.2K 🔥` `+263%`
1. [7比1成德国球迷专属回忆](https://s.weibo.com/weibo?q=%237%E6%AF%941%E6%88%90%E5%BE%B7%E5%9B%BD%E7%90%83%E8%BF%B7%E4%B8%93%E5%B1%9E%E5%9B%9E%E5%BF%86%23) `238.4K 🔥` `+108%`
1. [幼年形态就已经能看懂这么多了 (In his infant form, he could already understand so much.)](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%B9%B4%E5%BD%A2%E6%80%81%E5%B0%B1%E5%B7%B2%E7%BB%8F%E8%83%BD%E7%9C%8B%E6%87%82%E8%BF%99%E4%B9%88%E5%A4%9A%E4%BA%86%23) `156.5K 🔥` `+46%`
1. [网友说陈坤被替换了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%AF%B4%E9%99%88%E5%9D%A4%E8%A2%AB%E6%9B%BF%E6%8D%A2%E4%BA%86%23) `309.8K 🔥`
1. [刘耀文](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%23) `226.7K 🔥`
1. [刘冲和白鹿合照安利莫离](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%92%8C%E7%99%BD%E9%B9%BF%E5%90%88%E7%85%A7%E5%AE%89%E5%88%A9%E8%8E%AB%E7%A6%BB%23) `219.6K 🔥`
1. [我是演员董子健 最近很空](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%98%AF%E6%BC%94%E5%91%98%E8%91%A3%E5%AD%90%E5%81%A5%20%E6%9C%80%E8%BF%91%E5%BE%88%E7%A9%BA%23) `207.0K 🔥`
1. [宋亚轩](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%23) `156.0K 🔥`
1. [白鹿手臂居然是自己咬的](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%89%8B%E8%87%82%E5%B1%85%E7%84%B6%E6%98%AF%E8%87%AA%E5%B7%B1%E5%92%AC%E7%9A%84%23) `126.3K 🔥`
1. [荷兰2比2日本](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B02%E6%AF%942%E6%97%A5%E6%9C%AC%23) `1.5M 🔥` `-51%`
1. [报志愿前先搞懂这些概念 (Understand these concepts before applying to volunteer)](https://s.weibo.com/weibo?q=%23%E6%8A%A5%E5%BF%97%E6%84%BF%E5%89%8D%E5%85%88%E6%90%9E%E6%87%82%E8%BF%99%E4%BA%9B%E6%A6%82%E5%BF%B5%23) `718.4K 🔥` `-55%`
1. [美伊达成和平协议 (US and Iran reach peace agreement)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E8%BE%BE%E6%88%90%E5%92%8C%E5%B9%B3%E5%8D%8F%E8%AE%AE%23) `598.6K 🔥` `-66%`
1. [德国7比1库拉索 (Germany 7-1 Curacao)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD7%E6%AF%941%E5%BA%93%E6%8B%89%E7%B4%A2%23) `533.3K 🔥` `-66%`
1. [陕西地震 (Shaanxi earthquake)](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF%E5%9C%B0%E9%9C%87%23) `310.5K 🔥` `-47%`
1. [78岁库拉索主帅哭了 (The 78-year-old Curacao coach cried)](https://s.weibo.com/weibo?q=%2378%E5%B2%81%E5%BA%93%E6%8B%89%E7%B4%A2%E4%B8%BB%E5%B8%85%E5%93%AD%E4%BA%86%23) `286.9K 🔥` `-59%`
1. [香蜜沉沉烬如霜宣发期](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%9C%9C%E6%B2%89%E6%B2%89%E7%83%AC%E5%A6%82%E9%9C%9C%E5%AE%A3%E5%8F%91%E6%9C%9F%23) `256.1K 🔥` `-40%`
1. [日本绝平荷兰](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BB%9D%E5%B9%B3%E8%8D%B7%E5%85%B0%23) `212.3K 🔥` `-73%`
1. [荷兰球衣太晃眼](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E7%90%83%E8%A1%A3%E5%A4%AA%E6%99%83%E7%9C%BC%23) `143.0K 🔥` `-41%`
1. [荷兰vs日本 (Netherlands vs Japan)](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0vs%E6%97%A5%E6%9C%AC%23) `135.5K 🔥` `-40%`

Updated at 2026-06-15 09:41:49

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
