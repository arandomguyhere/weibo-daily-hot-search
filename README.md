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

1. [Doran说T1本可以赢BLG](https://s.weibo.com/weibo?q=%23Doran%E8%AF%B4T1%E6%9C%AC%E5%8F%AF%E4%BB%A5%E8%B5%A2BLG%23) `1.3M 🔥` `NEW`
1. [再婚皇后道具疑似是在拼多多买的](https://s.weibo.com/weibo?q=%23%E5%86%8D%E5%A9%9A%E7%9A%87%E5%90%8E%E9%81%93%E5%85%B7%E7%96%91%E4%BC%BC%E6%98%AF%E5%9C%A8%E6%8B%BC%E5%A4%9A%E5%A4%9A%E4%B9%B0%E7%9A%84%23) `902.2K 🔥` `NEW`
1. [铸牢共同体中华一家亲](https://s.weibo.com/weibo?q=%23%E9%93%B8%E7%89%A2%E5%85%B1%E5%90%8C%E4%BD%93%E4%B8%AD%E5%8D%8E%E4%B8%80%E5%AE%B6%E4%BA%B2%23) `859.8K 🔥` `NEW`
1. [今晚8点沈腾马丽喊你上京东多买多返](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%99%9A8%E7%82%B9%E6%B2%88%E8%85%BE%E9%A9%AC%E4%B8%BD%E5%96%8A%E4%BD%A0%E4%B8%8A%E4%BA%AC%E4%B8%9C%E5%A4%9A%E4%B9%B0%E5%A4%9A%E8%BF%94%23) `847.5K 🔥` `NEW`
1. [为什么满地都是口腔诊所](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%BB%A1%E5%9C%B0%E9%83%BD%E6%98%AF%E5%8F%A3%E8%85%94%E8%AF%8A%E6%89%80%23) `842.9K 🔥` `NEW`
1. [太原一建筑火灾已致14死](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E4%B8%80%E5%BB%BA%E7%AD%91%E7%81%AB%E7%81%BE%E5%B7%B2%E8%87%B414%E6%AD%BB%23) `755.3K 🔥` `NEW`
1. [太原火灾](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%23) `574.1K 🔥` `NEW`
1. [OPPOReno17奇遇喵](https://s.weibo.com/weibo?q=%23OPPOReno17%E5%A5%87%E9%81%87%E5%96%B5%23) `542.6K 🔥` `NEW`
1. [青稚今天我给白小纯道歉了](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E4%BB%8A%E5%A4%A9%E6%88%91%E7%BB%99%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%81%93%E6%AD%89%E4%BA%86%23) `505.6K 🔥` `NEW`
1. [Bin说GEN不如T1](https://s.weibo.com/weibo?q=%23Bin%E8%AF%B4GEN%E4%B8%8D%E5%A6%82T1%23) `399.0K 🔥` `NEW`
1. [失业缓冲期首次出现在国家政策文件](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E4%B8%9A%E7%BC%93%E5%86%B2%E6%9C%9F%E9%A6%96%E6%AC%A1%E5%87%BA%E7%8E%B0%E5%9C%A8%E5%9B%BD%E5%AE%B6%E6%94%BF%E7%AD%96%E6%96%87%E4%BB%B6%23) `391.5K 🔥` `NEW`
1. [大连几乎所有饭店宣布夺冠就免单](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E5%87%A0%E4%B9%8E%E6%89%80%E6%9C%89%E9%A5%AD%E5%BA%97%E5%AE%A3%E5%B8%83%E5%A4%BA%E5%86%A0%E5%B0%B1%E5%85%8D%E5%8D%95%23) `378.0K 🔥` `NEW`
1. [金子涵被下药中毒](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E8%A2%AB%E4%B8%8B%E8%8D%AF%E4%B8%AD%E6%AF%92%23) `374.3K 🔥` `NEW`
1. [许飞人品](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E4%BA%BA%E5%93%81%23) `362.0K 🔥` `NEW`
1. [虞书欣 W盛典](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20W%E7%9B%9B%E5%85%B8%23) `349.1K 🔥` `NEW`
1. [日本地铁太压抑了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%93%81%E5%A4%AA%E5%8E%8B%E6%8A%91%E4%BA%86%23) `328.8K 🔥` `NEW`
1. [W盛典出图](https://s.weibo.com/weibo?q=%23W%E7%9B%9B%E5%85%B8%E5%87%BA%E5%9B%BE%23) `321.6K 🔥` `NEW`
1. [太原火灾 消防](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%20%E6%B6%88%E9%98%B2%23) `305.2K 🔥` `NEW`
1. [特朗普回应出访亚洲是否带黄仁勋](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%9E%E5%BA%94%E5%87%BA%E8%AE%BF%E4%BA%9A%E6%B4%B2%E6%98%AF%E5%90%A6%E5%B8%A6%E9%BB%84%E4%BB%81%E5%8B%8B%23) `290.5K 🔥` `NEW`
1. [英伟达](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%23) `284.2K 🔥` `NEW`
1. [T1不敌BLG后台镜头曝光](https://s.weibo.com/weibo?q=%23T1%E4%B8%8D%E6%95%8CBLG%E5%90%8E%E5%8F%B0%E9%95%9C%E5%A4%B4%E6%9B%9D%E5%85%89%23) `279.9K 🔥` `NEW`
1. [黄仁勋41年爱妻人设崩塌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B41%E5%B9%B4%E7%88%B1%E5%A6%BB%E4%BA%BA%E8%AE%BE%E5%B4%A9%E5%A1%8C%23) `270.2K 🔥` `NEW`
1. [6位商界人士出轨6种后果](https://s.weibo.com/weibo?q=%236%E4%BD%8D%E5%95%86%E7%95%8C%E4%BA%BA%E5%A3%AB%E5%87%BA%E8%BD%A86%E7%A7%8D%E5%90%8E%E6%9E%9C%23) `267.5K 🔥` `NEW`
1. [高迪 我没对不起过大美](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%BF%AA%20%E6%88%91%E6%B2%A1%E5%AF%B9%E4%B8%8D%E8%B5%B7%E8%BF%87%E5%A4%A7%E7%BE%8E%23) `261.1K 🔥` `NEW`
1. [SM 新男团](https://s.weibo.com/weibo?q=%23SM%20%E6%96%B0%E7%94%B7%E5%9B%A2%23) `255.9K 🔥` `NEW`
1. [娇妹宣布与公司解约](https://s.weibo.com/weibo?q=%23%E5%A8%87%E5%A6%B9%E5%AE%A3%E5%B8%83%E4%B8%8E%E5%85%AC%E5%8F%B8%E8%A7%A3%E7%BA%A6%23) `243.5K 🔥` `NEW`
1. [樊振东观后感全文金句](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%A7%82%E5%90%8E%E6%84%9F%E5%85%A8%E6%96%87%E9%87%91%E5%8F%A5%23) `242.7K 🔥` `NEW`
1. [黄仁勋出轨美媒也能扯上中国](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%87%BA%E8%BD%A8%E7%BE%8E%E5%AA%92%E4%B9%9F%E8%83%BD%E6%89%AF%E4%B8%8A%E4%B8%AD%E5%9B%BD%23) `238.2K 🔥` `NEW`
1. [原来厉娜说了这个许飞才15年没有理她](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%8E%89%E5%A8%9C%E8%AF%B4%E4%BA%86%E8%BF%99%E4%B8%AA%E8%AE%B8%E9%A3%9E%E6%89%8D15%E5%B9%B4%E6%B2%A1%E6%9C%89%E7%90%86%E5%A5%B9%23) `233.2K 🔥` `NEW`
1. [樊振东分享竞技体育魅力](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%88%86%E4%BA%AB%E7%AB%9E%E6%8A%80%E4%BD%93%E8%82%B2%E9%AD%85%E5%8A%9B%23) `232.1K 🔥` `NEW`
1. [梁家辉坐高铁参加金鸡奖](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E5%9D%90%E9%AB%98%E9%93%81%E5%8F%82%E5%8A%A0%E9%87%91%E9%B8%A1%E5%A5%96%23) `230.9K 🔥` `NEW`
1. [美媒诬黄仁勋出轨对象是中国间谍](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E8%AF%AC%E9%BB%84%E4%BB%81%E5%8B%8B%E5%87%BA%E8%BD%A8%E5%AF%B9%E8%B1%A1%E6%98%AF%E4%B8%AD%E5%9B%BD%E9%97%B4%E8%B0%8D%23) `228.0K 🔥` `NEW`
1. [李佳航谈Faker输了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E8%88%AA%E8%B0%88Faker%E8%BE%93%E4%BA%86%23) `227.9K 🔥` `NEW`
1. [曝后会友期有一对反差太大](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%9C%89%E4%B8%80%E5%AF%B9%E5%8F%8D%E5%B7%AE%E5%A4%AA%E5%A4%A7%23) `223.2K 🔥` `NEW`
1. [马斯克黄仁勋惺惺相惜](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E9%BB%84%E4%BB%81%E5%8B%8B%E6%83%BA%E6%83%BA%E7%9B%B8%E6%83%9C%23) `220.8K 🔥` `NEW`
1. [吴磊立了两个绝对不会塌的人设](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E7%AB%8B%E4%BA%86%E4%B8%A4%E4%B8%AA%E7%BB%9D%E5%AF%B9%E4%B8%8D%E4%BC%9A%E5%A1%8C%E7%9A%84%E4%BA%BA%E8%AE%BE%23) `219.4K 🔥` `NEW`
1. [iG投资人开团AL](https://s.weibo.com/weibo?q=%23iG%E6%8A%95%E8%B5%84%E4%BA%BA%E5%BC%80%E5%9B%A2AL%23) `217.2K 🔥` `NEW`
1. [双11巅峰价](https://s.weibo.com/weibo?q=%23%E5%8F%8C11%E5%B7%85%E5%B3%B0%E4%BB%B7%23) `213.8K 🔥` `NEW`
1. [金鸡奖预测](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E5%A5%96%E9%A2%84%E6%B5%8B%23) `212.5K 🔥` `NEW`
1. [太原高层火灾趴窗喊救命两人已获救](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E9%AB%98%E5%B1%82%E7%81%AB%E7%81%BE%E8%B6%B4%E7%AA%97%E5%96%8A%E6%95%91%E5%91%BD%E4%B8%A4%E4%BA%BA%E5%B7%B2%E8%8E%B7%E6%95%91%23) `212.1K 🔥` `NEW`
1. [宋轶太瘦了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E5%A4%AA%E7%98%A6%E4%BA%86%23) `211.8K 🔥` `NEW`
1. [BLG击败T1双方表情](https://s.weibo.com/weibo?q=%23BLG%E5%87%BB%E8%B4%A5T1%E5%8F%8C%E6%96%B9%E8%A1%A8%E6%83%85%23) `207.8K 🔥` `NEW`
1. [纯过日子的双11迎来新升级](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E8%BF%87%E6%97%A5%E5%AD%90%E7%9A%84%E5%8F%8C11%E8%BF%8E%E6%9D%A5%E6%96%B0%E5%8D%87%E7%BA%A7%23) `204.3K 🔥` `NEW`
1. [太原火灾公寓开发商已成老赖](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%E5%85%AC%E5%AF%93%E5%BC%80%E5%8F%91%E5%95%86%E5%B7%B2%E6%88%90%E8%80%81%E8%B5%96%23) `204.3K 🔥` `NEW`
1. [Ella把粉丝做的蛋糕给砸了](https://s.weibo.com/weibo?q=%23Ella%E6%8A%8A%E7%B2%89%E4%B8%9D%E5%81%9A%E7%9A%84%E8%9B%8B%E7%B3%95%E7%BB%99%E7%A0%B8%E4%BA%86%23) `204.3K 🔥` `NEW`
1. [W盛典好多公主](https://s.weibo.com/weibo?q=%23W%E7%9B%9B%E5%85%B8%E5%A5%BD%E5%A4%9A%E5%85%AC%E4%B8%BB%23) `202.5K 🔥` `NEW`
1. [暂停实施24%对美加征关税](https://s.weibo.com/weibo?q=%23%E6%9A%82%E5%81%9C%E5%AE%9E%E6%96%BD24%25%E5%AF%B9%E7%BE%8E%E5%8A%A0%E5%BE%81%E5%85%B3%E7%A8%8E%23) `199.2K 🔥` `NEW`
1. [米勒记得相拥痛哭](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8B%92%E8%AE%B0%E5%BE%97%E7%9B%B8%E6%8B%A5%E7%97%9B%E5%93%AD%23) `194.4K 🔥` `NEW`
1. [iPhone18Pro双11低至7699](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%8F%8C11%E4%BD%8E%E8%87%B37699%23) `171.5K 🔥` `NEW`
1. [宋雨琦的奇遇喵](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%9A%84%E5%A5%87%E9%81%87%E5%96%B5%23) `170.8K 🔥` `NEW`
1. [金子涵前几天露宿街头](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%89%8D%E5%87%A0%E5%A4%A9%E9%9C%B2%E5%AE%BF%E8%A1%97%E5%A4%B4%23) `293.7K 🔥` `+47%`
1. [iPhone每年换一次和五年换一次](https://s.weibo.com/weibo?q=%23iPhone%E6%AF%8F%E5%B9%B4%E6%8D%A2%E4%B8%80%E6%AC%A1%E5%92%8C%E4%BA%94%E5%B9%B4%E6%8D%A2%E4%B8%80%E6%AC%A1%23) `204.4K 🔥`

Updated at 2026-11-09 14:02:13

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
