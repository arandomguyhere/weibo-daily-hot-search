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

1. [普京打包深圳炒菜上飞机](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%89%93%E5%8C%85%E6%B7%B1%E5%9C%B3%E7%82%92%E8%8F%9C%E4%B8%8A%E9%A3%9E%E6%9C%BA%23) `1.9M 🔥` `NEW`
1. [蔡磊已进渐冻症终末期](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E5%B7%B2%E8%BF%9B%E6%B8%90%E5%86%BB%E7%97%87%E7%BB%88%E6%9C%AB%E6%9C%9F%23) `1.4M 🔥` `NEW`
1. [新一代通信网建设实施方案来了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E4%BB%A3%E9%80%9A%E4%BF%A1%E7%BD%91%E5%BB%BA%E8%AE%BE%E5%AE%9E%E6%96%BD%E6%96%B9%E6%A1%88%E6%9D%A5%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [男子花700万买房搜到诅咒孩子WiFi名](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%8A%B1700%E4%B8%87%E4%B9%B0%E6%88%BF%E6%90%9C%E5%88%B0%E8%AF%85%E5%92%92%E5%AD%A9%E5%AD%90WiFi%E5%90%8D%23) `920.5K 🔥` `NEW`
1. [蔡磊融资失败妻子放弃事业全职直播](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E8%9E%8D%E8%B5%84%E5%A4%B1%E8%B4%A5%E5%A6%BB%E5%AD%90%E6%94%BE%E5%BC%83%E4%BA%8B%E4%B8%9A%E5%85%A8%E8%81%8C%E7%9B%B4%E6%92%AD%23) `886.5K 🔥` `NEW`
1. [后会友期](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23) `799.7K 🔥` `NEW`
1. [网传AI能识别毒蘑菇系谣言](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0AI%E8%83%BD%E8%AF%86%E5%88%AB%E6%AF%92%E8%98%91%E8%8F%87%E7%B3%BB%E8%B0%A3%E8%A8%80%23) `699.8K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `607.6K 🔥` `NEW`
1. [2026电影贺岁档来了](https://s.weibo.com/weibo?q=%232026%E7%94%B5%E5%BD%B1%E8%B4%BA%E5%B2%81%E6%A1%A3%E6%9D%A5%E4%BA%86%23) `604.5K 🔥` `NEW`
1. [蔡磊妻子算账揭露渐冻症经济困局](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E5%A6%BB%E5%AD%90%E7%AE%97%E8%B4%A6%E6%8F%AD%E9%9C%B2%E6%B8%90%E5%86%BB%E7%97%87%E7%BB%8F%E6%B5%8E%E5%9B%B0%E5%B1%80%23) `549.0K 🔥` `NEW`
1. [女孩景区同一位置晕倒3次后报警](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%99%AF%E5%8C%BA%E5%90%8C%E4%B8%80%E4%BD%8D%E7%BD%AE%E6%99%95%E5%80%923%E6%AC%A1%E5%90%8E%E6%8A%A5%E8%AD%A6%23) `542.6K 🔥` `NEW`
1. [安踏](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8F%23) `524.8K 🔥` `NEW`
1. [青稚安慰天霸老板](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E5%AE%89%E6%85%B0%E5%A4%A9%E9%9C%B8%E8%80%81%E6%9D%BF%23) `487.1K 🔥` `NEW`
1. [婚检发现同居多年男友是女的](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E6%A3%80%E5%8F%91%E7%8E%B0%E5%90%8C%E5%B1%85%E5%A4%9A%E5%B9%B4%E7%94%B7%E5%8F%8B%E6%98%AF%E5%A5%B3%E7%9A%84%23) `471.4K 🔥` `NEW`
1. [让特朗普念念不忘的帽子菜破案了](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E7%89%B9%E6%9C%97%E6%99%AE%E5%BF%B5%E5%BF%B5%E4%B8%8D%E5%BF%98%E7%9A%84%E5%B8%BD%E5%AD%90%E8%8F%9C%E7%A0%B4%E6%A1%88%E4%BA%86%23) `467.9K 🔥` `NEW`
1. [胡海泉辟谣炒股亏了近1个亿](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%B5%B7%E6%B3%89%E8%BE%9F%E8%B0%A3%E7%82%92%E8%82%A1%E4%BA%8F%E4%BA%86%E8%BF%911%E4%B8%AA%E4%BA%BF%23) `442.1K 🔥` `NEW`
1. [田曦薇参加嫁金钗研讨会](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%8F%82%E5%8A%A0%E5%AB%81%E9%87%91%E9%92%97%E7%A0%94%E8%AE%A8%E4%BC%9A%23) `437.0K 🔥` `NEW`
1. [陈赫带女儿去买猫被张子萱训了](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%B8%A6%E5%A5%B3%E5%84%BF%E5%8E%BB%E4%B9%B0%E7%8C%AB%E8%A2%AB%E5%BC%A0%E5%AD%90%E8%90%B1%E8%AE%AD%E4%BA%86%23) `422.2K 🔥` `NEW`
1. [天霸老板替青稚与白小纯绝交](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E9%9C%B8%E8%80%81%E6%9D%BF%E6%9B%BF%E9%9D%92%E7%A8%9A%E4%B8%8E%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%BB%9D%E4%BA%A4%23) `383.8K 🔥` `NEW`
1. [美术生不是被AI干掉的](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%9C%AF%E7%94%9F%E4%B8%8D%E6%98%AF%E8%A2%ABAI%E5%B9%B2%E6%8E%89%E7%9A%84%23) `382.4K 🔥` `NEW`
1. [胡海泉到底亏了多少](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%B5%B7%E6%B3%89%E5%88%B0%E5%BA%95%E4%BA%8F%E4%BA%86%E5%A4%9A%E5%B0%91%23) `382.3K 🔥` `NEW`
1. [郭子睿 子承父业](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AD%90%E7%9D%BF%20%E5%AD%90%E6%89%BF%E7%88%B6%E4%B8%9A%23) `381.7K 🔥` `NEW`
1. [蔡磊回应病情进入终末期](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E5%9B%9E%E5%BA%94%E7%97%85%E6%83%85%E8%BF%9B%E5%85%A5%E7%BB%88%E6%9C%AB%E6%9C%9F%23) `354.2K 🔥` `NEW`
1. [Bin谈BLG新AD](https://s.weibo.com/weibo?q=%23Bin%E8%B0%88BLG%E6%96%B0AD%23) `337.6K 🔥` `NEW`
1. [杜兰特33000分历史第五](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B933000%E5%88%86%E5%8E%86%E5%8F%B2%E7%AC%AC%E4%BA%94%23) `325.3K 🔥` `NEW`
1. [贝儿腿长和普通人比简直降维打击](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%84%BF%E8%85%BF%E9%95%BF%E5%92%8C%E6%99%AE%E9%80%9A%E4%BA%BA%E6%AF%94%E7%AE%80%E7%9B%B4%E9%99%8D%E7%BB%B4%E6%89%93%E5%87%BB%23) `296.4K 🔥` `NEW`
1. [刘力扬去调解文吉儿王子璇了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%8A%9B%E6%89%AC%E5%8E%BB%E8%B0%83%E8%A7%A3%E6%96%87%E5%90%89%E5%84%BF%E7%8E%8B%E5%AD%90%E7%92%87%E4%BA%86%23) `282.1K 🔥` `NEW`
1. [无领导小组讨论淘汰老实人合理吗](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%A2%86%E5%AF%BC%E5%B0%8F%E7%BB%84%E8%AE%A8%E8%AE%BA%E6%B7%98%E6%B1%B0%E8%80%81%E5%AE%9E%E4%BA%BA%E5%90%88%E7%90%86%E5%90%97%23) `261.5K 🔥` `NEW`
1. [我叫金三顺时隔21年的售后](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%8F%AB%E9%87%91%E4%B8%89%E9%A1%BA%E6%97%B6%E9%9A%9421%E5%B9%B4%E7%9A%84%E5%94%AE%E5%90%8E%23) `236.4K 🔥` `NEW`
1. [出现这三个征兆小心是心衰](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%8E%B0%E8%BF%99%E4%B8%89%E4%B8%AA%E5%BE%81%E5%85%86%E5%B0%8F%E5%BF%83%E6%98%AF%E5%BF%83%E8%A1%B0%23) `235.2K 🔥` `NEW`
1. [律师谈梓渝隐私泄露者视频道歉](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%B0%88%E6%A2%93%E6%B8%9D%E9%9A%90%E7%A7%81%E6%B3%84%E9%9C%B2%E8%80%85%E8%A7%86%E9%A2%91%E9%81%93%E6%AD%89%23) `234.3K 🔥` `NEW`
1. [画地为牢终于来了](https://s.weibo.com/weibo?q=%23%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E7%BB%88%E4%BA%8E%E6%9D%A5%E4%BA%86%23) `229.0K 🔥` `NEW`
1. [众球星谈詹姆斯三双](https://s.weibo.com/weibo?q=%23%E4%BC%97%E7%90%83%E6%98%9F%E8%B0%88%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%89%E5%8F%8C%23) `222.4K 🔥` `NEW`
1. [梁文锋的人生简直是开挂了](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8B%E7%9A%84%E4%BA%BA%E7%94%9F%E7%AE%80%E7%9B%B4%E6%98%AF%E5%BC%80%E6%8C%82%E4%BA%86%23) `215.1K 🔥` `NEW`
1. [jkl BLG](https://s.weibo.com/weibo?q=%23jkl%20BLG%23) `209.9K 🔥` `NEW`
1. [詹姆斯三分越投越远](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%89%E5%88%86%E8%B6%8A%E6%8A%95%E8%B6%8A%E8%BF%9C%23) `207.1K 🔥` `NEW`
1. [烂牙根没拔竟拖成口腔癌](https://s.weibo.com/weibo?q=%23%E7%83%82%E7%89%99%E6%A0%B9%E6%B2%A1%E6%8B%94%E7%AB%9F%E6%8B%96%E6%88%90%E5%8F%A3%E8%85%94%E7%99%8C%23) `203.4K 🔥` `NEW`
1. [男童被生父女友伤害致死细节披露](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E8%A2%AB%E7%94%9F%E7%88%B6%E5%A5%B3%E5%8F%8B%E4%BC%A4%E5%AE%B3%E8%87%B4%E6%AD%BB%E7%BB%86%E8%8A%82%E6%8A%AB%E9%9C%B2%23) `198.4K 🔥` `NEW`
1. [非法倒卖梓渝隐私当事人公开道歉](https://s.weibo.com/weibo?q=%23%E9%9D%9E%E6%B3%95%E5%80%92%E5%8D%96%E6%A2%93%E6%B8%9D%E9%9A%90%E7%A7%81%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%85%AC%E5%BC%80%E9%81%93%E6%AD%89%23) `195.6K 🔥` `NEW`
1. [8省市能用上6G了](https://s.weibo.com/weibo?q=%238%E7%9C%81%E5%B8%82%E8%83%BD%E7%94%A8%E4%B8%8A6G%E4%BA%86%23) `193.2K 🔥` `NEW`
1. [姜乘澜新风格](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E6%96%B0%E9%A3%8E%E6%A0%BC%23) `185.1K 🔥` `NEW`
1. [男童被踢死生父却谅解施暴女友](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E8%A2%AB%E8%B8%A2%E6%AD%BB%E7%94%9F%E7%88%B6%E5%8D%B4%E8%B0%85%E8%A7%A3%E6%96%BD%E6%9A%B4%E5%A5%B3%E5%8F%8B%23) `178.4K 🔥` `NEW`
1. [梁文锋成全球最富AI模型创始人](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8B%E6%88%90%E5%85%A8%E7%90%83%E6%9C%80%E5%AF%8CAI%E6%A8%A1%E5%9E%8B%E5%88%9B%E5%A7%8B%E4%BA%BA%23) `178.0K 🔥` `NEW`
1. [年轻时容易高估独立性](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E6%97%B6%E5%AE%B9%E6%98%93%E9%AB%98%E4%BC%B0%E7%8B%AC%E7%AB%8B%E6%80%A7%23) `174.8K 🔥` `NEW`
1. [美方拟对部分中国商品加征20%关税](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%96%B9%E6%8B%9F%E5%AF%B9%E9%83%A8%E5%88%86%E4%B8%AD%E5%9B%BD%E5%95%86%E5%93%81%E5%8A%A0%E5%BE%8120%25%E5%85%B3%E7%A8%8E%23) `167.7K 🔥` `NEW`
1. [这杯奶竟然能承包一辈子](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%9D%AF%E5%A5%B6%E7%AB%9F%E7%84%B6%E8%83%BD%E6%89%BF%E5%8C%85%E4%B8%80%E8%BE%88%E5%AD%90%23) `166.3K 🔥` `NEW`
1. [中国体坛史上封面人物](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E5%9D%9B%E5%8F%B2%E4%B8%8A%E5%B0%81%E9%9D%A2%E4%BA%BA%E7%89%A9%23) `165.1K 🔥` `NEW`
1. [伊朗中国和平统一促进会成立](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%AD%E5%9B%BD%E5%92%8C%E5%B9%B3%E7%BB%9F%E4%B8%80%E4%BF%83%E8%BF%9B%E4%BC%9A%E6%88%90%E7%AB%8B%23) `163.8K 🔥` `NEW`
1. [万磁王撕毁灭博士面具](https://s.weibo.com/weibo?q=%23%E4%B8%87%E7%A3%81%E7%8E%8B%E6%92%95%E6%AF%81%E7%81%AD%E5%8D%9A%E5%A3%AB%E9%9D%A2%E5%85%B7%23) `160.9K 🔥` `NEW`
1. [网友抵制王玉雯代言皮草](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8A%B5%E5%88%B6%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%BB%A3%E8%A8%80%E7%9A%AE%E8%8D%89%23) `521.1K 🔥` `+509%`

Updated at 2026-11-26 12:30:36

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
