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

1. [羊城晚报评王楚钦反思长文](https://s.weibo.com/weibo?q=%23%E7%BE%8A%E5%9F%8E%E6%99%9A%E6%8A%A5%E8%AF%84%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%8D%E6%80%9D%E9%95%BF%E6%96%87%23) `3.3M 🔥` `NEW`
1. [男子与第三者发生关系后猝死](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8E%E7%AC%AC%E4%B8%89%E8%80%85%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%E5%90%8E%E7%8C%9D%E6%AD%BB%23) `1.5M 🔥` `NEW`
1. [京彩拍档CityPair](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E5%BD%A9%E6%8B%8D%E6%A1%A3CityPair%23) `885.8K 🔥` `NEW`
1. [扬州地震](https://s.weibo.com/weibo?q=%23%E6%89%AC%E5%B7%9E%E5%9C%B0%E9%9C%87%23) `634.3K 🔥` `NEW`
1. [青稚 白小纯](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%20%E7%99%BD%E5%B0%8F%E7%BA%AF%23) `545.7K 🔥` `NEW`
1. [母亲劝女儿辞职照顾瘫痪父亲](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%8A%9D%E5%A5%B3%E5%84%BF%E8%BE%9E%E8%81%8C%E7%85%A7%E9%A1%BE%E7%98%AB%E7%97%AA%E7%88%B6%E4%BA%B2%23) `360.0K 🔥` `NEW`
1. [许飞 厉娜](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E5%8E%89%E5%A8%9C%23) `352.0K 🔥` `NEW`
1. [Ming 青稚](https://s.weibo.com/weibo?q=%23Ming%20%E9%9D%92%E7%A8%9A%23) `342.7K 🔥` `NEW`
1. [PEL选手直播阴阳同事](https://s.weibo.com/weibo?q=%23PEL%E9%80%89%E6%89%8B%E7%9B%B4%E6%92%AD%E9%98%B4%E9%98%B3%E5%90%8C%E4%BA%8B%23) `332.5K 🔥` `NEW`
1. [高叶获奖钟楚曦哭成泪人](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%B6%E8%8E%B7%E5%A5%96%E9%92%9F%E6%A5%9A%E6%9B%A6%E5%93%AD%E6%88%90%E6%B3%AA%E4%BA%BA%23) `322.4K 🔥` `NEW`
1. [晋妈希望李勒优留面馆](https://s.weibo.com/weibo?q=%23%E6%99%8B%E5%A6%88%E5%B8%8C%E6%9C%9B%E6%9D%8E%E5%8B%92%E4%BC%98%E7%95%99%E9%9D%A2%E9%A6%86%23) `316.7K 🔥` `NEW`
1. [36岁女子赴泰失联现已回国](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E5%A5%B3%E5%AD%90%E8%B5%B4%E6%B3%B0%E5%A4%B1%E8%81%94%E7%8E%B0%E5%B7%B2%E5%9B%9E%E5%9B%BD%23) `250.2K 🔥` `NEW`
1. [拉宏徒步 小尼父母家真实到没剧本](https://s.weibo.com/weibo?q=%23%E6%8B%89%E5%AE%8F%E5%BE%92%E6%AD%A5%20%E5%B0%8F%E5%B0%BC%E7%88%B6%E6%AF%8D%E5%AE%B6%E7%9C%9F%E5%AE%9E%E5%88%B0%E6%B2%A1%E5%89%A7%E6%9C%AC%23) `248.0K 🔥` `NEW`
1. [白鹿孟子义曾舜晞聚餐](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9B%BE%E8%88%9C%E6%99%9E%E8%81%9A%E9%A4%90%23) `245.5K 🔥` `NEW`
1. [李宇春辛芷蕾倪妮祝贺高叶](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%80%AA%E5%A6%AE%E7%A5%9D%E8%B4%BA%E9%AB%98%E5%8F%B6%23) `235.6K 🔥` `NEW`
1. [金子涵去美国签证多次被拒](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%8E%BB%E7%BE%8E%E5%9B%BD%E7%AD%BE%E8%AF%81%E5%A4%9A%E6%AC%A1%E8%A2%AB%E6%8B%92%23) `232.4K 🔥` `NEW`
1. [宋亚轩被那英当面处刑](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%A2%AB%E9%82%A3%E8%8B%B1%E5%BD%93%E9%9D%A2%E5%A4%84%E5%88%91%23) `228.6K 🔥` `NEW`
1. [白鹿的台风不像演员该有的](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9A%84%E5%8F%B0%E9%A3%8E%E4%B8%8D%E5%83%8F%E6%BC%94%E5%91%98%E8%AF%A5%E6%9C%89%E7%9A%84%23) `227.5K 🔥` `NEW`
1. [白小纯我有人疼](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%88%91%E6%9C%89%E4%BA%BA%E7%96%BC%23) `186.1K 🔥` `NEW`
1. [景德镇陶瓷盘穿上了流苏裙](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%BE%B7%E9%95%87%E9%99%B6%E7%93%B7%E7%9B%98%E7%A9%BF%E4%B8%8A%E4%BA%86%E6%B5%81%E8%8B%8F%E8%A3%99%23) `185.7K 🔥` `NEW`
1. [立陶宛停止做政治变色龙吧](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E9%99%B6%E5%AE%9B%E5%81%9C%E6%AD%A2%E5%81%9A%E6%94%BF%E6%B2%BB%E5%8F%98%E8%89%B2%E9%BE%99%E5%90%A7%23) `184.7K 🔥` `NEW`
1. [爱情公寓拿到王传君的大结果了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E6%8B%BF%E5%88%B0%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%9A%84%E5%A4%A7%E7%BB%93%E6%9E%9C%E4%BA%86%23) `183.4K 🔥` `NEW`
1. [邓家佳金鸡奖被喊小姨妈谁的DNA动了](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%AE%B6%E4%BD%B3%E9%87%91%E9%B8%A1%E5%A5%96%E8%A2%AB%E5%96%8A%E5%B0%8F%E5%A7%A8%E5%A6%88%E8%B0%81%E7%9A%84DNA%E5%8A%A8%E4%BA%86%23) `181.3K 🔥` `NEW`
1. [马天宇ally直播](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87ally%E7%9B%B4%E6%92%AD%23) `180.6K 🔥` `NEW`
1. [合肥地震深夜惊醒居民](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%9C%B0%E9%9C%87%E6%B7%B1%E5%A4%9C%E6%83%8A%E9%86%92%E5%B1%85%E6%B0%91%23) `171.2K 🔥` `NEW`
1. [金鸡奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E5%A5%96%23) `167.0K 🔥` `NEW`
1. [博主参加比亚迪活动宣传极氪引争议](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E5%8F%82%E5%8A%A0%E6%AF%94%E4%BA%9A%E8%BF%AA%E6%B4%BB%E5%8A%A8%E5%AE%A3%E4%BC%A0%E6%9E%81%E6%B0%AA%E5%BC%95%E4%BA%89%E8%AE%AE%23) `147.5K 🔥` `NEW`
1. [徐若晗丞磊我真的尖叫了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E4%B8%9E%E7%A3%8A%E6%88%91%E7%9C%9F%E7%9A%84%E5%B0%96%E5%8F%AB%E4%BA%86%23) `144.2K 🔥` `NEW`
1. [20周年iPhone取消屏幕开孔](https://s.weibo.com/weibo?q=%2320%E5%91%A8%E5%B9%B4iPhone%E5%8F%96%E6%B6%88%E5%B1%8F%E5%B9%95%E5%BC%80%E5%AD%94%23) `131.2K 🔥` `NEW`
1. [央视曝光后长沙连夜查处](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%90%8E%E9%95%BF%E6%B2%99%E8%BF%9E%E5%A4%9C%E6%9F%A5%E5%A4%84%23) `128.1K 🔥` `NEW`
1. [马天宇他们都不让我播怕乱讲话](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BB%96%E4%BB%AC%E9%83%BD%E4%B8%8D%E8%AE%A9%E6%88%91%E6%92%AD%E6%80%95%E4%B9%B1%E8%AE%B2%E8%AF%9D%23) `125.3K 🔥` `NEW`
1. [13岁女孩泡面烧烤当正餐确诊胃癌](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%B3%A1%E9%9D%A2%E7%83%A7%E7%83%A4%E5%BD%93%E6%AD%A3%E9%A4%90%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%23) `118.1K 🔥` `NEW`
1. [天猫双11巅峰24小时低至6.8折](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E5%8F%8C11%E5%B7%85%E5%B3%B024%E5%B0%8F%E6%97%B6%E4%BD%8E%E8%87%B36.8%E6%8A%98%23) `875.3K 🔥` `+954%`
1. [5个上门维修师傅2个说了实话](https://s.weibo.com/weibo?q=%235%E4%B8%AA%E4%B8%8A%E9%97%A8%E7%BB%B4%E4%BF%AE%E5%B8%88%E5%82%852%E4%B8%AA%E8%AF%B4%E4%BA%86%E5%AE%9E%E8%AF%9D%23) `769.5K 🔥` `+957%`
1. [金鸡奖获奖名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `651.5K 🔥` `+358%`
1. [梁家辉拒绝工作人员帮拿金鸡奖杯](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E6%8B%92%E7%BB%9D%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%B8%AE%E6%8B%BF%E9%87%91%E9%B8%A1%E5%A5%96%E6%9D%AF%23) `547.3K 🔥` `+1120%`
1. [RTX5080暴跌4000元](https://s.weibo.com/weibo?q=%23RTX5080%E6%9A%B4%E8%B7%8C4000%E5%85%83%23) `373.6K 🔥` `+743%`
1. [白小纯对着摄像头撒谎](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%AF%B9%E7%9D%80%E6%91%84%E5%83%8F%E5%A4%B4%E6%92%92%E8%B0%8E%23) `366.6K 🔥` `+363%`
1. [金鸡最佳导演 爆冷](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E6%9C%80%E4%BD%B3%E5%AF%BC%E6%BC%94%20%E7%88%86%E5%86%B7%23) `308.1K 🔥` `+201%`
1. [金子涵妹妹回复网友](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%A6%B9%E5%A6%B9%E5%9B%9E%E5%A4%8D%E7%BD%91%E5%8F%8B%23) `270.1K 🔥` `+503%`
1. [从赚240万到亏600万的人生变化](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E8%B5%9A240%E4%B8%87%E5%88%B0%E4%BA%8F600%E4%B8%87%E7%9A%84%E4%BA%BA%E7%94%9F%E5%8F%98%E5%8C%96%23) `240.5K 🔥` `+456%`
1. [拼多多送货上门新规11月13日生效](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E9%80%81%E8%B4%A7%E4%B8%8A%E9%97%A8%E6%96%B0%E8%A7%8411%E6%9C%8813%E6%97%A5%E7%94%9F%E6%95%88%23) `225.5K 🔥` `+404%`
1. [许飞在后台疯狂加微信](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%9C%A8%E5%90%8E%E5%8F%B0%E7%96%AF%E7%8B%82%E5%8A%A0%E5%BE%AE%E4%BF%A1%23) `184.4K 🔥` `+324%`
1. [梁家辉影史第二位三金影帝](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E5%BD%B1%E5%8F%B2%E7%AC%AC%E4%BA%8C%E4%BD%8D%E4%B8%89%E9%87%91%E5%BD%B1%E5%B8%9D%23) `182.3K 🔥` `+310%`
1. [彩民花20元机选中2000万大奖](https://s.weibo.com/weibo?q=%23%E5%BD%A9%E6%B0%91%E8%8A%B120%E5%85%83%E6%9C%BA%E9%80%89%E4%B8%AD2000%E4%B8%87%E5%A4%A7%E5%A5%96%23) `182.0K 🔥` `+324%`
1. [13岁女孩腹痛1年家长忽视确诊胃癌](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%85%B9%E7%97%9B1%E5%B9%B4%E5%AE%B6%E9%95%BF%E5%BF%BD%E8%A7%86%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%23) `176.2K 🔥` `+307%`
1. [曝平头哥估值200亿至300亿美元](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B9%B3%E5%A4%B4%E5%93%A5%E4%BC%B0%E5%80%BC200%E4%BA%BF%E8%87%B3300%E4%BA%BF%E7%BE%8E%E5%85%83%23) `162.4K 🔥` `+260%`
1. [女子补缴社保个人承担不到10万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A1%A5%E7%BC%B4%E7%A4%BE%E4%BF%9D%E4%B8%AA%E4%BA%BA%E6%89%BF%E6%8B%85%E4%B8%8D%E5%88%B010%E4%B8%87%23) `161.9K 🔥` `+276%`
1. [男子肛门藏冰毒入境被抓](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%82%9B%E9%97%A8%E8%97%8F%E5%86%B0%E6%AF%92%E5%85%A5%E5%A2%83%E8%A2%AB%E6%8A%93%23) `153.1K 🔥` `+246%`
1. [奶奶说选不喜欢的孩子养老不心疼](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E8%AF%B4%E9%80%89%E4%B8%8D%E5%96%9C%E6%AC%A2%E7%9A%84%E5%AD%A9%E5%AD%90%E5%85%BB%E8%80%81%E4%B8%8D%E5%BF%83%E7%96%BC%23) `133.0K 🔥` `+202%`
1. [造谣石凯方道歉](https://s.weibo.com/weibo?q=%23%E9%80%A0%E8%B0%A3%E7%9F%B3%E5%87%AF%E6%96%B9%E9%81%93%E6%AD%89%23) `125.9K 🔥` `+188%`

Updated at 2026-11-11 09:23:26

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
