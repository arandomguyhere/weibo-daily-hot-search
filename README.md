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

1. [大时代 (big time)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%97%B6%E4%BB%A3%23) `769.2K 🔥` `NEW`
1. [他们的青春闪闪发光](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%BB%AC%E7%9A%84%E9%9D%92%E6%98%A5%E9%97%AA%E9%97%AA%E5%8F%91%E5%85%89%23) `734.7K 🔥` `NEW`
1. [马嘉祺破音](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E7%A0%B4%E9%9F%B3%23) `724.1K 🔥` `NEW`
1. [穆祉丞音乐节](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E9%9F%B3%E4%B9%90%E8%8A%82%23) `519.6K 🔥` `NEW`
1. [Gr对战MRC](https://s.weibo.com/weibo?q=%23Gr%E5%AF%B9%E6%88%98MRC%23) `503.6K 🔥` `NEW`
1. [有人花300多元买28斤榴莲](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E8%8A%B1300%E5%A4%9A%E5%85%83%E4%B9%B028%E6%96%A4%E6%A6%B4%E8%8E%B2%23) `497.1K 🔥` `NEW`
1. [辽宁丹东交通事故已致8人死亡](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E4%B8%B9%E4%B8%9C%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%E5%B7%B2%E8%87%B48%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `493.9K 🔥` `NEW`
1. [中国女团vs波兰](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%9B%A2vs%E6%B3%A2%E5%85%B0%23) `489.2K 🔥` `NEW`
1. [伊朗向美军舰发射导弹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%91%E7%BE%8E%E5%86%9B%E8%88%B0%E5%8F%91%E5%B0%84%E5%AF%BC%E5%BC%B9%23) `479.4K 🔥` `NEW`
1. [难听](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `462.4K 🔥` `NEW`
1. [台湾同胞被这首大陆歌曲震撼到流泪 (Taiwanese compatriots were shocked to tears by this mainland song)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%90%8C%E8%83%9E%E8%A2%AB%E8%BF%99%E9%A6%96%E5%A4%A7%E9%99%86%E6%AD%8C%E6%9B%B2%E9%9C%87%E6%92%BC%E5%88%B0%E6%B5%81%E6%B3%AA%23) `456.4K 🔥` `NEW`
1. [著名法学家王连昌逝世](https://s.weibo.com/weibo?q=%23%E8%91%97%E5%90%8D%E6%B3%95%E5%AD%A6%E5%AE%B6%E7%8E%8B%E8%BF%9E%E6%98%8C%E9%80%9D%E4%B8%96%23) `435.8K 🔥` `NEW`
1. [时代少年团演唱会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%23) `429.7K 🔥` `NEW`
1. [太湖湾音乐节](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E6%B9%96%E6%B9%BE%E9%9F%B3%E4%B9%90%E8%8A%82%23) `427.5K 🔥` `NEW`
1. [于正看短剧Enemy看哭了](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E7%9C%8B%E7%9F%AD%E5%89%A7Enemy%E7%9C%8B%E5%93%AD%E4%BA%86%23) `312.5K 🔥` `NEW`
1. [国内油价将迎调整](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E6%B2%B9%E4%BB%B7%E5%B0%86%E8%BF%8E%E8%B0%83%E6%95%B4%23) `257.9K 🔥` `NEW`
1. [张翅 音乐节](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BF%85%20%E9%9F%B3%E4%B9%90%E8%8A%82%23) `254.0K 🔥` `NEW`
1. [低智商犯罪](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `193.3K 🔥` `NEW`
1. [浏阳一烟花厂发生爆炸](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E4%B8%80%E7%83%9F%E8%8A%B1%E5%8E%82%E5%8F%91%E7%94%9F%E7%88%86%E7%82%B8%23) `187.3K 🔥` `NEW`
1. [佳偶天成](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%23) `181.4K 🔥` `NEW`
1. [他就摸了一下魔方就复原了 (He just touched the Rubik's Cube and it was restored.)](https://s.weibo.com/weibo?q=%23%E4%BB%96%E5%B0%B1%E6%91%B8%E4%BA%86%E4%B8%80%E4%B8%8B%E9%AD%94%E6%96%B9%E5%B0%B1%E5%A4%8D%E5%8E%9F%E4%BA%86%23) `159.8K 🔥` `NEW`
1. [在水中放毛巾是为方便小鸭们上岸](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%B0%B4%E4%B8%AD%E6%94%BE%E6%AF%9B%E5%B7%BE%E6%98%AF%E4%B8%BA%E6%96%B9%E4%BE%BF%E5%B0%8F%E9%B8%AD%E4%BB%AC%E4%B8%8A%E5%B2%B8%23) `158.6K 🔥` `NEW`
1. [郑怡静为所有女性运动员发声](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%80%A1%E9%9D%99%E4%B8%BA%E6%89%80%E6%9C%89%E5%A5%B3%E6%80%A7%E8%BF%90%E5%8A%A8%E5%91%98%E5%8F%91%E5%A3%B0%23) `143.0K 🔥` `NEW`
1. [海拔5000米的雪山堵得人山人海](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%8B%945000%E7%B1%B3%E7%9A%84%E9%9B%AA%E5%B1%B1%E5%A0%B5%E5%BE%97%E4%BA%BA%E5%B1%B1%E4%BA%BA%E6%B5%B7%23) `141.2K 🔥` `NEW`
1. [游客拍到广西一秒天黑](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E6%8B%8D%E5%88%B0%E5%B9%BF%E8%A5%BF%E4%B8%80%E7%A7%92%E5%A4%A9%E9%BB%91%23) `138.6K 🔥` `NEW`
1. [中国向联合国发出警告](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%90%91%E8%81%94%E5%90%88%E5%9B%BD%E5%8F%91%E5%87%BA%E8%AD%A6%E5%91%8A%23) `1.1M 🔥` `+263%`
1. [邮轮暴发致命病毒靠港求医遭拒](https://s.weibo.com/weibo?q=%23%E9%82%AE%E8%BD%AE%E6%9A%B4%E5%8F%91%E8%87%B4%E5%91%BD%E7%97%85%E6%AF%92%E9%9D%A0%E6%B8%AF%E6%B1%82%E5%8C%BB%E9%81%AD%E6%8B%92%23) `455.1K 🔥` `+60%`
1. [白敬亭 宋轶](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `431.3K 🔥` `+45%`
1. [过度独立 心理创伤](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E7%8B%AC%E7%AB%8B%20%E5%BF%83%E7%90%86%E5%88%9B%E4%BC%A4%23) `428.6K 🔥` `+54%`
1. [豆包 笨还收费](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E7%AC%A8%E8%BF%98%E6%94%B6%E8%B4%B9%23) `415.5K 🔥`
1. [800一晚老式宾馆年轻人五一抢着住 (800 per night in an old-fashioned hotel, young people rush to stay at it on May Day)](https://s.weibo.com/weibo?q=%23800%E4%B8%80%E6%99%9A%E8%80%81%E5%BC%8F%E5%AE%BE%E9%A6%86%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%BA%94%E4%B8%80%E6%8A%A2%E7%9D%80%E4%BD%8F%23) `309.9K 🔥`
1. [韦雪怒斥小三](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E9%9B%AA%E6%80%92%E6%96%A5%E5%B0%8F%E4%B8%89%23) `238.6K 🔥`
1. [突然意识到开封就是开封的意思 (I suddenly realized that Kaifeng means Kaifeng.)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E5%BC%80%E5%B0%81%E5%B0%B1%E6%98%AF%E5%BC%80%E5%B0%81%E7%9A%84%E6%84%8F%E6%80%9D%23) `534.4K 🔥` `-23%`
1. [豆包 付费 (Bean bag paid)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E4%BB%98%E8%B4%B9%23) `475.8K 🔥` `-96%`
1. [红果VIP 付费 (Hongguo VIP paid)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9CVIP%20%E4%BB%98%E8%B4%B9%23) `464.1K 🔥` `-94%`
1. [红果回应VIP付费](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%9B%9E%E5%BA%94VIP%E4%BB%98%E8%B4%B9%23) `451.9K 🔥` `-72%`
1. [强烈建议大家去狂刷考公综艺](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E7%83%88%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8E%BB%E7%8B%82%E5%88%B7%E8%80%83%E5%85%AC%E7%BB%BC%E8%89%BA%23) `445.1K 🔥` `-37%`
1. [莫雷加德认证樊振东定海神针](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E8%AE%A4%E8%AF%81%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%AE%9A%E6%B5%B7%E7%A5%9E%E9%92%88%23) `438.7K 🔥` `-32%`
1. [豆包把付费说的如此清新脱俗](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%8A%8A%E4%BB%98%E8%B4%B9%E8%AF%B4%E7%9A%84%E5%A6%82%E6%AD%A4%E6%B8%85%E6%96%B0%E8%84%B1%E4%BF%97%23) `311.6K 🔥` `-24%`
1. [女子搭网约车强抢方向盘酿车祸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%90%AD%E7%BD%91%E7%BA%A6%E8%BD%A6%E5%BC%BA%E6%8A%A2%E6%96%B9%E5%90%91%E7%9B%98%E9%85%BF%E8%BD%A6%E7%A5%B8%23) `197.8K 🔥` `-34%`
1. [豆包错误率](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E9%94%99%E8%AF%AF%E7%8E%87%23) `187.6K 🔥` `-57%`
1. [金价又又又跌了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%8F%88%E5%8F%88%E5%8F%88%E8%B7%8C%E4%BA%86%23) `183.2K 🔥` `-39%`
1. [BABYMONSTER回归](https://s.weibo.com/weibo?q=%23BABYMONSTER%E5%9B%9E%E5%BD%92%23) `173.0K 🔥` `-42%`
1. [现在谈恋爱才是赶上好时候了 (Now is the time to fall in love and catch up)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E8%B0%88%E6%81%8B%E7%88%B1%E6%89%8D%E6%98%AF%E8%B5%B6%E4%B8%8A%E5%A5%BD%E6%97%B6%E5%80%99%E4%BA%86%23) `166.0K 🔥` `-41%`
1. [撒贝宁设宴款待妻子娘家人](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%E8%AE%BE%E5%AE%B4%E6%AC%BE%E5%BE%85%E5%A6%BB%E5%AD%90%E5%A8%98%E5%AE%B6%E4%BA%BA%23) `164.4K 🔥` `-39%`
1. [黄灿灿误入业主群](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E8%AF%AF%E5%85%A5%E4%B8%9A%E4%B8%BB%E7%BE%A4%23) `164.3K 🔥` `-41%`
1. [女顾客想要40码鞋反被男主播嘲讽](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%A1%BE%E5%AE%A2%E6%83%B3%E8%A6%8140%E7%A0%81%E9%9E%8B%E5%8F%8D%E8%A2%AB%E7%94%B7%E4%B8%BB%E6%92%AD%E5%98%B2%E8%AE%BD%23) `163.9K 🔥` `-38%`
1. [关晓彤比耶转场](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%AF%94%E8%80%B6%E8%BD%AC%E5%9C%BA%23) `163.8K 🔥` `-36%`
1. [郭涛15岁女儿身高](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%B6%9B15%E5%B2%81%E5%A5%B3%E5%84%BF%E8%BA%AB%E9%AB%98%23) `161.1K 🔥` `-42%`
1. [二十七八岁什么感觉](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%8D%81%E4%B8%83%E5%85%AB%E5%B2%81%E4%BB%80%E4%B9%88%E6%84%9F%E8%A7%89%23) `151.2K 🔥` `-61%`

Updated at 2026-05-04 20:01:21

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
