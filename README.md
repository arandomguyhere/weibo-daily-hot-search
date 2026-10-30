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

1. [K100今日开售](https://s.weibo.com/weibo?q=%23K100%E4%BB%8A%E6%97%A5%E5%BC%80%E5%94%AE%23) `524.6K 🔥` `NEW`
1. [大批理发店关停10元快剪走红](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%89%B9%E7%90%86%E5%8F%91%E5%BA%97%E5%85%B3%E5%81%9C10%E5%85%83%E5%BF%AB%E5%89%AA%E8%B5%B0%E7%BA%A2%23) `261.6K 🔥` `NEW`
1. [敬老慈幼辟谣宣传沙龙](https://s.weibo.com/weibo?q=%23%E6%95%AC%E8%80%81%E6%85%88%E5%B9%BC%E8%BE%9F%E8%B0%A3%E5%AE%A3%E4%BC%A0%E6%B2%99%E9%BE%99%23) `257.0K 🔥` `NEW`
1. [曹骏成团](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%88%90%E5%9B%A2%23) `244.7K 🔥` `NEW`
1. [A股 半导体](https://s.weibo.com/weibo?q=%23A%E8%82%A1%20%E5%8D%8A%E5%AF%BC%E4%BD%93%23) `145.3K 🔥` `NEW`
1. [TLAW LOS](https://s.weibo.com/weibo?q=%23TLAW%20LOS%23) `145.2K 🔥` `NEW`
1. [万圣节](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%9C%A3%E8%8A%82%23) `143.0K 🔥` `NEW`
1. [英特尔预警PC低迷将持续到2027](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E7%89%B9%E5%B0%94%E9%A2%84%E8%AD%A6PC%E4%BD%8E%E8%BF%B7%E5%B0%86%E6%8C%81%E7%BB%AD%E5%88%B02027%23) `141.5K 🔥` `NEW`
1. [G2对战HLE](https://s.weibo.com/weibo?q=%23G2%E5%AF%B9%E6%88%98HLE%23) `98.7K 🔥` `NEW`
1. [夫妻一餐5个菜闹离婚在登记处被劝回](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E4%B8%80%E9%A4%905%E4%B8%AA%E8%8F%9C%E9%97%B9%E7%A6%BB%E5%A9%9A%E5%9C%A8%E7%99%BB%E8%AE%B0%E5%A4%84%E8%A2%AB%E5%8A%9D%E5%9B%9E%23) `86.2K 🔥` `NEW`
1. [小米入股欣旺达非去宁德化](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%85%A5%E8%82%A1%E6%AC%A3%E6%97%BA%E8%BE%BE%E9%9D%9E%E5%8E%BB%E5%AE%81%E5%BE%B7%E5%8C%96%23) `80.9K 🔥` `NEW`
1. [周启豪3比1F勒布伦](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%90%AF%E8%B1%AA3%E6%AF%941F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `80.2K 🔥` `NEW`
1. [BLG晋级S16八强难度骤降](https://s.weibo.com/weibo?q=%23BLG%E6%99%8B%E7%BA%A7S16%E5%85%AB%E5%BC%BA%E9%9A%BE%E5%BA%A6%E9%AA%A4%E9%99%8D%23) `79.5K 🔥` `NEW`
1. [黄金又大跳水了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%8F%88%E5%A4%A7%E8%B7%B3%E6%B0%B4%E4%BA%86%23) `78.9K 🔥` `NEW`
1. [这种家庭养出的小孩一定很暖](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E5%AE%B6%E5%BA%AD%E5%85%BB%E5%87%BA%E7%9A%84%E5%B0%8F%E5%AD%A9%E4%B8%80%E5%AE%9A%E5%BE%88%E6%9A%96%23) `78.3K 🔥` `NEW`
1. [美股 AI硬件](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%20AI%E7%A1%AC%E4%BB%B6%23) `78.0K 🔥` `NEW`
1. [大体老师的奉献经不起摆拍戏谑](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BD%93%E8%80%81%E5%B8%88%E7%9A%84%E5%A5%89%E7%8C%AE%E7%BB%8F%E4%B8%8D%E8%B5%B7%E6%91%86%E6%8B%8D%E6%88%8F%E8%B0%91%23) `70.7K 🔥` `NEW`
1. [张睿什么奖都没有有点太虐了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E4%BB%80%E4%B9%88%E5%A5%96%E9%83%BD%E6%B2%A1%E6%9C%89%E6%9C%89%E7%82%B9%E5%A4%AA%E8%99%90%E4%BA%86%23) `70.7K 🔥` `NEW`
1. [12306回应卧铺女子被手机砸伤](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E5%8D%A7%E9%93%BA%E5%A5%B3%E5%AD%90%E8%A2%AB%E6%89%8B%E6%9C%BA%E7%A0%B8%E4%BC%A4%23) `62.0K 🔥` `NEW`
1. [小城良方告了白衣山猫](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%91%8A%E4%BA%86%E7%99%BD%E8%A1%A3%E5%B1%B1%E7%8C%AB%23) `57.3K 🔥` `NEW`
1. [WTT蒙彼利埃 男单八强赛](https://s.weibo.com/weibo?q=%23WTT%E8%92%99%E5%BD%BC%E5%88%A9%E5%9F%83%20%E7%94%B7%E5%8D%95%E5%85%AB%E5%BC%BA%E8%B5%9B%23) `55.3K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `1.2M 🔥` `+236%`
1. [披荆斩棘成团名单](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%88%90%E5%9B%A2%E5%90%8D%E5%8D%95%23) `745.6K 🔥` `+515%`
1. [开创新时代管党治党兴党强党新局面](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%88%9B%E6%96%B0%E6%97%B6%E4%BB%A3%E7%AE%A1%E5%85%9A%E6%B2%BB%E5%85%9A%E5%85%B4%E5%85%9A%E5%BC%BA%E5%85%9A%E6%96%B0%E5%B1%80%E9%9D%A2%23) `628.6K 🔥` `+588%`
1. [小沈阳披荆斩棘冠军](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%86%A0%E5%86%9B%23) `475.7K 🔥` `+481%`
1. [今年全国实现生娃基本不花钱](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E5%85%A8%E5%9B%BD%E5%AE%9E%E7%8E%B0%E7%94%9F%E5%A8%83%E5%9F%BA%E6%9C%AC%E4%B8%8D%E8%8A%B1%E9%92%B1%23) `268.7K 🔥` `+492%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `150.3K 🔥` `+158%`
1. [英特尔跌30%市值蒸发近1500亿美元](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E7%89%B9%E5%B0%94%E8%B7%8C30%25%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%91%E8%BF%911500%E4%BA%BF%E7%BE%8E%E5%85%83%23) `150.0K 🔥` `+149%`
1. [披荆斩棘历届总冠军](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%8E%86%E5%B1%8A%E6%80%BB%E5%86%A0%E5%86%9B%23) `149.2K 🔥` `+119%`
1. [赵丽颖不鸣则已一鸣惊人](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%B8%8D%E9%B8%A3%E5%88%99%E5%B7%B2%E4%B8%80%E9%B8%A3%E6%83%8A%E4%BA%BA%23) `148.4K 🔥` `+155%`
1. [宋慧乔是宋仲基的逆鳞](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E6%98%AF%E5%AE%8B%E4%BB%B2%E5%9F%BA%E7%9A%84%E9%80%86%E9%B3%9E%23) `147.7K 🔥` `+86%`
1. [马天宇劝文吉儿不要做的太绝情](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%8A%9D%E6%96%87%E5%90%89%E5%84%BF%E4%B8%8D%E8%A6%81%E5%81%9A%E7%9A%84%E5%A4%AA%E7%BB%9D%E6%83%85%23) `144.1K 🔥` `+79%`
1. [我觉得我都要爱上厉娜了](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%A7%89%E5%BE%97%E6%88%91%E9%83%BD%E8%A6%81%E7%88%B1%E4%B8%8A%E5%8E%89%E5%A8%9C%E4%BA%86%23) `142.1K 🔥` `+147%`
1. [赵丽颖是85后演员首位](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%98%AF85%E5%90%8E%E6%BC%94%E5%91%98%E9%A6%96%E4%BD%8D%23) `141.5K 🔥` `+234%`
1. [外网爆火的心脏病征兆](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E7%88%86%E7%81%AB%E7%9A%84%E5%BF%83%E8%84%8F%E7%97%85%E5%BE%81%E5%85%86%23) `141.5K 🔥` `+234%`
1. [姜乘澜结婚了](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E7%BB%93%E5%A9%9A%E4%BA%86%23) `141.4K 🔥` `+146%`
1. [孙楠感谢那英](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%A5%A0%E6%84%9F%E8%B0%A2%E9%82%A3%E8%8B%B1%23) `104.0K 🔥` `+148%`
1. [蔡磊妻子落泪称不甘心](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E5%A6%BB%E5%AD%90%E8%90%BD%E6%B3%AA%E7%A7%B0%E4%B8%8D%E7%94%98%E5%BF%83%23) `102.4K 🔥` `+142%`
1. [金银杀跌原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E6%9D%80%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `101.0K 🔥` `+46%`
1. [WTT蒙彼利埃女单八强赛](https://s.weibo.com/weibo?q=%23WTT%E8%92%99%E5%BD%BC%E5%88%A9%E5%9F%83%E5%A5%B3%E5%8D%95%E5%85%AB%E5%BC%BA%E8%B5%9B%23) `91.9K 🔥` `+117%`
1. [次仁拉姆逝世](https://s.weibo.com/weibo?q=%23%E6%AC%A1%E4%BB%81%E6%8B%89%E5%A7%86%E9%80%9D%E4%B8%96%23) `87.6K 🔥` `+108%`
1. [律师回应小城良方告白衣山猫](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E5%9B%9E%E5%BA%94%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%91%8A%E7%99%BD%E8%A1%A3%E5%B1%B1%E7%8C%AB%23) `81.1K 🔥` `+144%`
1. [以色列女演员直播翻车当场离席](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%A5%B3%E6%BC%94%E5%91%98%E7%9B%B4%E6%92%AD%E7%BF%BB%E8%BD%A6%E5%BD%93%E5%9C%BA%E7%A6%BB%E5%B8%AD%23) `79.6K 🔥` `+93%`
1. [证监会](https://s.weibo.com/weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%23) `74.7K 🔥` `+78%`
1. [西蒙高茨说梁靖崑让二追三太厉害了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%92%99%E9%AB%98%E8%8C%A8%E8%AF%B4%E6%A2%81%E9%9D%96%E5%B4%91%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89%E5%A4%AA%E5%8E%89%E5%AE%B3%E4%BA%86%23) `73.6K 🔥` `+129%`
1. [王濛 我喜欢你老公](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E6%88%91%E5%96%9C%E6%AC%A2%E4%BD%A0%E8%80%81%E5%85%AC%23) `68.1K 🔥` `+111%`
1. [孙颖莎说申裕斌给自己压力比较大](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E7%94%B3%E8%A3%95%E6%96%8C%E7%BB%99%E8%87%AA%E5%B7%B1%E5%8E%8B%E5%8A%9B%E6%AF%94%E8%BE%83%E5%A4%A7%23) `64.2K 🔥` `+100%`
1. [迪丽热巴用上iPhoneDuo了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%94%A8%E4%B8%8AiPhoneDuo%E4%BA%86%23) `63.0K 🔥` `+82%`
1. [再就业男团神级开场](https://s.weibo.com/weibo?q=%23%E5%86%8D%E5%B0%B1%E4%B8%9A%E7%94%B7%E5%9B%A2%E7%A5%9E%E7%BA%A7%E5%BC%80%E5%9C%BA%23) `62.7K 🔥` `+49%`
1. [英特尔](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E7%89%B9%E5%B0%94%23) `58.9K 🔥` `+36%`
1. [张睿没成团](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%B2%A1%E6%88%90%E5%9B%A2%23) `56.1K 🔥` `+52%`

Updated at 2026-10-31 07:45:30

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
