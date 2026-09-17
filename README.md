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

1. [2岁幼童从18楼坠亡事发时窗户没关](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%B9%BC%E7%AB%A5%E4%BB%8E18%E6%A5%BC%E5%9D%A0%E4%BA%A1%E4%BA%8B%E5%8F%91%E6%97%B6%E7%AA%97%E6%88%B7%E6%B2%A1%E5%85%B3%23) `953.9K 🔥` `NEW`
1. [多举措发力推动经济持续向好](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%B8%BE%E6%8E%AA%E5%8F%91%E5%8A%9B%E6%8E%A8%E5%8A%A8%E7%BB%8F%E6%B5%8E%E6%8C%81%E7%BB%AD%E5%90%91%E5%A5%BD%23) `909.8K 🔥` `NEW`
1. [儿子突然的离世父亲的天塌了](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E7%AA%81%E7%84%B6%E7%9A%84%E7%A6%BB%E4%B8%96%E7%88%B6%E4%BA%B2%E7%9A%84%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `870.3K 🔥` `NEW`
1. [胡歌被排到了第八位](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E8%A2%AB%E6%8E%92%E5%88%B0%E4%BA%86%E7%AC%AC%E5%85%AB%E4%BD%8D%23) `806.3K 🔥` `NEW`
1. [坠亡幼童父亲举报妻子侵犯肖像权](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E7%88%B6%E4%BA%B2%E4%B8%BE%E6%8A%A5%E5%A6%BB%E5%AD%90%E4%BE%B5%E7%8A%AF%E8%82%96%E5%83%8F%E6%9D%83%23) `766.6K 🔥` `NEW`
1. [张博恒滞留日本机场后发文怒斥](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%8D%9A%E6%81%92%E6%BB%9E%E7%95%99%E6%97%A5%E6%9C%AC%E6%9C%BA%E5%9C%BA%E5%90%8E%E5%8F%91%E6%96%87%E6%80%92%E6%96%A5%23) `761.1K 🔥` `NEW`
1. [影视飓风Tim称iPhoneDuo烫到握不住](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8ETim%E7%A7%B0iPhoneDuo%E7%83%AB%E5%88%B0%E6%8F%A1%E4%B8%8D%E4%BD%8F%23) `682.7K 🔥` `NEW`
1. [小朋友什么行为显得没家教](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9C%8B%E5%8F%8B%E4%BB%80%E4%B9%88%E8%A1%8C%E4%B8%BA%E6%98%BE%E5%BE%97%E6%B2%A1%E5%AE%B6%E6%95%99%23) `639.6K 🔥` `NEW`
1. [国乒3小时vs日乒30分钟往返通勤](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%923%E5%B0%8F%E6%97%B6vs%E6%97%A5%E4%B9%9230%E5%88%86%E9%92%9F%E5%BE%80%E8%BF%94%E9%80%9A%E5%8B%A4%23) `622.3K 🔥` `NEW`
1. [小雪删除互动回复](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%9B%AA%E5%88%A0%E9%99%A4%E4%BA%92%E5%8A%A8%E5%9B%9E%E5%A4%8D%23) `596.5K 🔥` `NEW`
1. [月薪1万已超过80%的人](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA1%E4%B8%87%E5%B7%B2%E8%B6%85%E8%BF%8780%25%E7%9A%84%E4%BA%BA%23) `566.7K 🔥` `NEW`
1. [景甜风波后首个封面](https://s.weibo.com/weibo?q=%23%E6%99%AF%E7%94%9C%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E4%B8%AA%E5%B0%81%E9%9D%A2%23) `490.5K 🔥` `NEW`
1. [范玮琪7年6大失言争议](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA7%E5%B9%B46%E5%A4%A7%E5%A4%B1%E8%A8%80%E4%BA%89%E8%AE%AE%23) `481.1K 🔥` `NEW`
1. [众多央视主持人现场送别敬一丹](https://s.weibo.com/weibo?q=%23%E4%BC%97%E5%A4%9A%E5%A4%AE%E8%A7%86%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%8E%B0%E5%9C%BA%E9%80%81%E5%88%AB%E6%95%AC%E4%B8%80%E4%B8%B9%23) `443.9K 🔥` `NEW`
1. [又被蒋奇明钓到了](https://s.weibo.com/weibo?q=%23%E5%8F%88%E8%A2%AB%E8%92%8B%E5%A5%87%E6%98%8E%E9%92%93%E5%88%B0%E4%BA%86%23) `439.7K 🔥` `NEW`
1. [编造导师压榨坠楼学生谣言涉嫌犯罪](https://s.weibo.com/weibo?q=%23%E7%BC%96%E9%80%A0%E5%AF%BC%E5%B8%88%E5%8E%8B%E6%A6%A8%E5%9D%A0%E6%A5%BC%E5%AD%A6%E7%94%9F%E8%B0%A3%E8%A8%80%E6%B6%89%E5%AB%8C%E7%8A%AF%E7%BD%AA%23) `436.8K 🔥` `NEW`
1. [中国留学生开始在海外考公了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%BC%80%E5%A7%8B%E5%9C%A8%E6%B5%B7%E5%A4%96%E8%80%83%E5%85%AC%E4%BA%86%23) `415.0K 🔥` `NEW`
1. [浙江一猪景房8888元一晚](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E4%B8%80%E7%8C%AA%E6%99%AF%E6%88%BF8888%E5%85%83%E4%B8%80%E6%99%9A%23) `405.5K 🔥` `NEW`
1. [影视飓风Tim反掰iPhoneDuo被质疑](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8ETim%E5%8F%8D%E6%8E%B0iPhoneDuo%E8%A2%AB%E8%B4%A8%E7%96%91%23) `383.6K 🔥` `NEW`
1. [iPhoneDuo 影视飓风](https://s.weibo.com/weibo?q=%23iPhoneDuo%20%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%23) `381.2K 🔥` `NEW`
1. [晚晚 泡泡玛特](https://s.weibo.com/weibo?q=%23%E6%99%9A%E6%99%9A%20%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%23) `366.6K 🔥` `NEW`
1. [KPL经典五人组重聚](https://s.weibo.com/weibo?q=%23KPL%E7%BB%8F%E5%85%B8%E4%BA%94%E4%BA%BA%E7%BB%84%E9%87%8D%E8%81%9A%23) `351.8K 🔥` `NEW`
1. [陈建州露面](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BB%BA%E5%B7%9E%E9%9C%B2%E9%9D%A2%23) `350.6K 🔥` `NEW`
1. [微信三折叠到底是谁设计的](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E4%B8%89%E6%8A%98%E5%8F%A0%E5%88%B0%E5%BA%95%E6%98%AF%E8%B0%81%E8%AE%BE%E8%AE%A1%E7%9A%84%23) `334.5K 🔥` `NEW`
1. [早春晴朗 干净的双赢](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%20%E5%B9%B2%E5%87%80%E7%9A%84%E5%8F%8C%E8%B5%A2%23) `331.0K 🔥` `NEW`
1. [快递小哥救助老人反被索赔92万](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E5%B0%8F%E5%93%A5%E6%95%91%E5%8A%A9%E8%80%81%E4%BA%BA%E5%8F%8D%E8%A2%AB%E7%B4%A2%E8%B5%9492%E4%B8%87%23) `329.6K 🔥` `NEW`
1. [陈鲁豫对话佟丽娅](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%B2%81%E8%B1%AB%E5%AF%B9%E8%AF%9D%E4%BD%9F%E4%B8%BD%E5%A8%85%23) `323.7K 🔥` `NEW`
1. [影视飓风讲解iPhoneDuo用的生命树](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E8%AE%B2%E8%A7%A3iPhoneDuo%E7%94%A8%E7%9A%84%E7%94%9F%E5%91%BD%E6%A0%91%23) `321.9K 🔥` `NEW`
1. [敬一丹账号发文](https://s.weibo.com/weibo?q=%23%E6%95%AC%E4%B8%80%E4%B8%B9%E8%B4%A6%E5%8F%B7%E5%8F%91%E6%96%87%23) `320.0K 🔥` `NEW`
1. [Tim反向掰一下iPhoneDuo后出现闪屏](https://s.weibo.com/weibo?q=%23Tim%E5%8F%8D%E5%90%91%E6%8E%B0%E4%B8%80%E4%B8%8BiPhoneDuo%E5%90%8E%E5%87%BA%E7%8E%B0%E9%97%AA%E5%B1%8F%23) `318.4K 🔥` `NEW`
1. [张百乔小雪 没离婚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%99%BE%E4%B9%94%E5%B0%8F%E9%9B%AA%20%E6%B2%A1%E7%A6%BB%E5%A9%9A%23) `308.7K 🔥` `NEW`
1. [康辉送别敬一丹](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E8%BE%89%E9%80%81%E5%88%AB%E6%95%AC%E4%B8%80%E4%B8%B9%23) `308.3K 🔥` `NEW`
1. [范玮琪说不然就会像大S](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E8%AF%B4%E4%B8%8D%E7%84%B6%E5%B0%B1%E4%BC%9A%E5%83%8F%E5%A4%A7S%23) `297.1K 🔥` `NEW`
1. [俩孩非亲生男子被婚内转移1400万](https://s.weibo.com/weibo?q=%23%E4%BF%A9%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E7%94%B7%E5%AD%90%E8%A2%AB%E5%A9%9A%E5%86%85%E8%BD%AC%E7%A7%BB1400%E4%B8%87%23) `297.1K 🔥` `NEW`
1. [湾区升明月晚会 阵容](https://s.weibo.com/weibo?q=%23%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%E6%99%9A%E4%BC%9A%20%E9%98%B5%E5%AE%B9%23) `291.1K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `235.3K 🔥` `NEW`
1. [22岁全款300万买房后的生活](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E5%85%A8%E6%AC%BE300%E4%B8%87%E4%B9%B0%E6%88%BF%E5%90%8E%E7%9A%84%E7%94%9F%E6%B4%BB%23) `232.9K 🔥` `NEW`
1. [豆包汽车活了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%B1%BD%E8%BD%A6%E6%B4%BB%E4%BA%86%23) `232.8K 🔥` `NEW`
1. [敬一丹告别仪式](https://s.weibo.com/weibo?q=%23%E6%95%AC%E4%B8%80%E4%B8%B9%E5%91%8A%E5%88%AB%E4%BB%AA%E5%BC%8F%23) `232.7K 🔥` `NEW`
1. [国乒男队去哪了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E5%8E%BB%E5%93%AA%E4%BA%86%23) `223.2K 🔥` `NEW`
1. [曹骏徐正溪领衔主演何不同舟渡](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%BE%90%E6%AD%A3%E6%BA%AA%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E4%BD%95%E4%B8%8D%E5%90%8C%E8%88%9F%E6%B8%A1%23) `217.5K 🔥` `NEW`
1. [南医大坠楼案反转传谣始作俑者是谁](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%8C%BB%E5%A4%A7%E5%9D%A0%E6%A5%BC%E6%A1%88%E5%8F%8D%E8%BD%AC%E4%BC%A0%E8%B0%A3%E5%A7%8B%E4%BD%9C%E4%BF%91%E8%80%85%E6%98%AF%E8%B0%81%23) `214.5K 🔥` `NEW`
1. [李宁户外山河入色系列](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%81%E6%88%B7%E5%A4%96%E5%B1%B1%E6%B2%B3%E5%85%A5%E8%89%B2%E7%B3%BB%E5%88%97%23) `204.9K 🔥` `NEW`
1. [张凌赫主持湾区升明月](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%BB%E6%8C%81%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%23) `201.8K 🔥` `NEW`
1. [2岁幼童18楼坠亡父母发声](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%B9%BC%E7%AB%A518%E6%A5%BC%E5%9D%A0%E4%BA%A1%E7%88%B6%E6%AF%8D%E5%8F%91%E5%A3%B0%23) `188.0K 🔥` `NEW`
1. [印方炮轰日本亚运接待堪称丑闻](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E6%96%B9%E7%82%AE%E8%BD%B0%E6%97%A5%E6%9C%AC%E4%BA%9A%E8%BF%90%E6%8E%A5%E5%BE%85%E5%A0%AA%E7%A7%B0%E4%B8%91%E9%97%BB%23) `183.8K 🔥` `NEW`
1. [13.28万起阿尔法T7再超预期](https://s.weibo.com/weibo?q=%2313.28%E4%B8%87%E8%B5%B7%E9%98%BF%E5%B0%94%E6%B3%95T7%E5%86%8D%E8%B6%85%E9%A2%84%E6%9C%9F%23) `765.0K 🔥` `+496%`
1. [举手式睡姿是身体在求救](https://s.weibo.com/weibo?q=%23%E4%B8%BE%E6%89%8B%E5%BC%8F%E7%9D%A1%E5%A7%BF%E6%98%AF%E8%BA%AB%E4%BD%93%E5%9C%A8%E6%B1%82%E6%95%91%23) `1.7M 🔥` `-45%`
1. [南医大坠亡事件导师学生聊天记录](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%8C%BB%E5%A4%A7%E5%9D%A0%E4%BA%A1%E4%BA%8B%E4%BB%B6%E5%AF%BC%E5%B8%88%E5%AD%A6%E7%94%9F%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `326.0K 🔥` `-22%`

Updated at 2026-09-17 14:45:12

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
