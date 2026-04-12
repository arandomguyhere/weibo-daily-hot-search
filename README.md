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

1. [何超蕸终身未婚 (He Chaoqiu never married)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E7%BB%88%E8%BA%AB%E6%9C%AA%E5%A9%9A%23) `236.0K 🔥` `NEW`
1. [李小冉唐艺昕后台玩手机](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%94%90%E8%89%BA%E6%98%95%E5%90%8E%E5%8F%B0%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `212.6K 🔥` `NEW`
1. [杨天真吐槽很多很红的明星漂亮无脑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%E5%90%90%E6%A7%BD%E5%BE%88%E5%A4%9A%E5%BE%88%E7%BA%A2%E7%9A%84%E6%98%8E%E6%98%9F%E6%BC%82%E4%BA%AE%E6%97%A0%E8%84%91%23) `147.9K 🔥` `NEW`
1. [洛克王国](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%23) `147.6K 🔥` `NEW`
1. [iPhone17系列最新销量](https://s.weibo.com/weibo?q=%23iPhone17%E7%B3%BB%E5%88%97%E6%9C%80%E6%96%B0%E9%94%80%E9%87%8F%23) `117.8K 🔥` `NEW`
1. [特朗普政府将打击赴美生子](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%BF%E5%BA%9C%E5%B0%86%E6%89%93%E5%87%BB%E8%B5%B4%E7%BE%8E%E7%94%9F%E5%AD%90%23) `116.9K 🔥` `NEW`
1. [女子离婚3天后再婚前夫净身出户](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A3%E5%A4%A9%E5%90%8E%E5%86%8D%E5%A9%9A%E5%89%8D%E5%A4%AB%E5%87%80%E8%BA%AB%E5%87%BA%E6%88%B7%23) `115.5K 🔥` `NEW`
1. [张雪问记者可以说吗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E9%97%AE%E8%AE%B0%E8%80%85%E5%8F%AF%E4%BB%A5%E8%AF%B4%E5%90%97%23) `111.9K 🔥` `NEW`
1. [朱志鑫solo舞台音响故障](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABsolo%E8%88%9E%E5%8F%B0%E9%9F%B3%E5%93%8D%E6%95%85%E9%9A%9C%23) `109.8K 🔥` `NEW`
1. [莫氏鸡煲日均营业额不低于6万](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E6%97%A5%E5%9D%87%E8%90%A5%E4%B8%9A%E9%A2%9D%E4%B8%8D%E4%BD%8E%E4%BA%8E6%E4%B8%87%23) `98.4K 🔥` `NEW`
1. [任敏吃蚂蚁 (Ren Min eats ants)](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E5%90%83%E8%9A%82%E8%9A%81%23) `98.3K 🔥` `NEW`
1. [赌王何鸿燊17名子女已有3人离世](https://s.weibo.com/weibo?q=%23%E8%B5%8C%E7%8E%8B%E4%BD%95%E9%B8%BF%E7%87%8A17%E5%90%8D%E5%AD%90%E5%A5%B3%E5%B7%B2%E6%9C%893%E4%BA%BA%E7%A6%BB%E4%B8%96%23) `97.9K 🔥` `NEW`
1. [一男子血管堵塞99%仍要飞](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%94%B7%E5%AD%90%E8%A1%80%E7%AE%A1%E5%A0%B5%E5%A1%9E99%25%E4%BB%8D%E8%A6%81%E9%A3%9E%23) `79.8K 🔥` `NEW`
1. [雪碧拌面](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E7%A2%A7%E6%8B%8C%E9%9D%A2%23) `78.6K 🔥` `NEW`
1. [石洵瑶太原站双冠](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E6%B4%B5%E7%91%B6%E5%A4%AA%E5%8E%9F%E7%AB%99%E5%8F%8C%E5%86%A0%23) `76.2K 🔥` `NEW`
1. [丁业现被查](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%B8%9A%E7%8E%B0%E8%A2%AB%E6%9F%A5%23) `75.2K 🔥` `NEW`
1. [杨超越的资源](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E7%9A%84%E8%B5%84%E6%BA%90%23) `75.2K 🔥` `NEW`
1. [蜜雪冰城南美首店开业多位华人发声](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%E5%8D%97%E7%BE%8E%E9%A6%96%E5%BA%97%E5%BC%80%E4%B8%9A%E5%A4%9A%E4%BD%8D%E5%8D%8E%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `69.7K 🔥` `NEW`
1. [何超琼偕弟妹哀告](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E7%90%BC%E5%81%95%E5%BC%9F%E5%A6%B9%E5%93%80%E5%91%8A%23) `67.4K 🔥` `NEW`
1. [大冰说我这两年的直播是刀尖上行走](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E8%AF%B4%E6%88%91%E8%BF%99%E4%B8%A4%E5%B9%B4%E7%9A%84%E7%9B%B4%E6%92%AD%E6%98%AF%E5%88%80%E5%B0%96%E4%B8%8A%E8%A1%8C%E8%B5%B0%23) `64.0K 🔥` `NEW`
1. [张雪说夺冠底气来自中国制造 (Zhang Xue said that the confidence to win the championship comes from Made in China)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%AF%B4%E5%A4%BA%E5%86%A0%E5%BA%95%E6%B0%94%E6%9D%A5%E8%87%AA%E4%B8%AD%E5%9B%BD%E5%88%B6%E9%80%A0%23) `63.7K 🔥` `NEW`
1. [莫氏鸡煲要卖汤底药包了](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%A6%81%E5%8D%96%E6%B1%A4%E5%BA%95%E8%8D%AF%E5%8C%85%E4%BA%86%23) `769.7K 🔥` `+481%`
1. [王濛公司大部分是退役运动员](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%85%AC%E5%8F%B8%E5%A4%A7%E9%83%A8%E5%88%86%E6%98%AF%E9%80%80%E5%BD%B9%E8%BF%90%E5%8A%A8%E5%91%98%23) `187.4K 🔥` `+105%`
1. [男子住48元宾馆身亡家属索赔40万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BD%8F48%E5%85%83%E5%AE%BE%E9%A6%86%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%9440%E4%B8%87%23) `148.2K 🔥` `+30%`
1. [常州暂时改名常洲](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%B7%9E%E6%9A%82%E6%97%B6%E6%94%B9%E5%90%8D%E5%B8%B8%E6%B4%B2%23) `1.1M 🔥`
1. [这个大国重器够重](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E5%A4%9F%E9%87%8D%23) `603.1K 🔥`
1. [A股交易重要调整来了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BA%A4%E6%98%93%E9%87%8D%E8%A6%81%E8%B0%83%E6%95%B4%E6%9D%A5%E4%BA%86%23) `152.7K 🔥`
1. [老人私栓绳子致男孩气管全断裂](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%A7%81%E6%A0%93%E7%BB%B3%E5%AD%90%E8%87%B4%E7%94%B7%E5%AD%A9%E6%B0%94%E7%AE%A1%E5%85%A8%E6%96%AD%E8%A3%82%23) `148.0K 🔥`
1. [赵子琪硬刚浪姐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E7%A1%AC%E5%88%9A%E6%B5%AA%E5%A7%90%23) `147.5K 🔥`
1. [比伯嗓子太好了](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BC%AF%E5%97%93%E5%AD%90%E5%A4%AA%E5%A5%BD%E4%BA%86%23) `146.1K 🔥`
1. [妈妈替女儿申请不上早读 (Mother applies for early education for her daughter)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%9B%BF%E5%A5%B3%E5%84%BF%E7%94%B3%E8%AF%B7%E4%B8%8D%E4%B8%8A%E6%97%A9%E8%AF%BB%23) `119.5K 🔥`
1. [何超蕸去世 (He Chaogui passed away)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E5%8E%BB%E4%B8%96%23) `116.4K 🔥`
1. [杨超越 虎鲸](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%20%E8%99%8E%E9%B2%B8%23) `96.2K 🔥`
1. [钢铁森林](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%23) `75.1K 🔥`
1. [安洗莹达成全满贯](https://s.weibo.com/weibo?q=%23%E5%AE%89%E6%B4%97%E8%8E%B9%E8%BE%BE%E6%88%90%E5%85%A8%E6%BB%A1%E8%B4%AF%23) `69.6K 🔥`
1. [护住周深的常州保安火了](https://s.weibo.com/weibo?q=%23%E6%8A%A4%E4%BD%8F%E5%91%A8%E6%B7%B1%E7%9A%84%E5%B8%B8%E5%B7%9E%E4%BF%9D%E5%AE%89%E7%81%AB%E4%BA%86%23) `66.8K 🔥`
1. [RW 卖队](https://s.weibo.com/weibo?q=%23RW%20%E5%8D%96%E9%98%9F%23) `183.2K 🔥` `-29%`
1. [赵子琪回应和张慧雯争论视频 (Zhao Ziqi responded to the video of arguing with Zhang Huiwen)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E5%9B%9E%E5%BA%94%E5%92%8C%E5%BC%A0%E6%85%A7%E9%9B%AF%E4%BA%89%E8%AE%BA%E8%A7%86%E9%A2%91%23) `178.3K 🔥` `-34%`
1. [你们俩是要毁了芒果吗 (Are you two going to destroy the mango?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E4%BF%A9%E6%98%AF%E8%A6%81%E6%AF%81%E4%BA%86%E8%8A%92%E6%9E%9C%E5%90%97%23) `147.9K 🔥` `-80%`
1. [罗生门](https://s.weibo.com/weibo?q=%23%E7%BD%97%E7%94%9F%E9%97%A8%23) `119.1K 🔥` `-73%`
1. [何超蕸被赌王称为最能帮忙的女儿](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E8%A2%AB%E8%B5%8C%E7%8E%8B%E7%A7%B0%E4%B8%BA%E6%9C%80%E8%83%BD%E5%B8%AE%E5%BF%99%E7%9A%84%E5%A5%B3%E5%84%BF%23) `114.3K 🔥` `-55%`
1. [王濛剪蕾丝](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%89%AA%E8%95%BE%E4%B8%9D%23) `114.3K 🔥` `-22%`
1. [张凌赫今天素颜好性感](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BB%8A%E5%A4%A9%E7%B4%A0%E9%A2%9C%E5%A5%BD%E6%80%A7%E6%84%9F%23) `106.1K 🔥` `-26%`
1. [吴京真在家带娃了 (Wu Jingzhen is taking care of her baby at home)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E7%9C%9F%E5%9C%A8%E5%AE%B6%E5%B8%A6%E5%A8%83%E4%BA%86%23) `98.0K 🔥` `-34%`
1. [韩国机场缉毒犬吃掉可疑蛋糕 (Drug detection dog eats suspicious cake at South Korea airport)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%9C%BA%E5%9C%BA%E7%BC%89%E6%AF%92%E7%8A%AC%E5%90%83%E6%8E%89%E5%8F%AF%E7%96%91%E8%9B%8B%E7%B3%95%23) `97.6K 🔥` `-70%`
1. [伊朗代表团离开巴基斯坦 (Iranian delegation leaves Pakistan)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BB%A3%E8%A1%A8%E5%9B%A2%E7%A6%BB%E5%BC%80%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%23) `97.2K 🔥` `-48%`
1. [张杰力挺谢娜演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%8A%9B%E6%8C%BA%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%23) `97.0K 🔥` `-33%`
1. [孙怡阚清子直播零互动 (Sun Yi Kan Qingzi live broadcast with zero interaction)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%98%9A%E6%B8%85%E5%AD%90%E7%9B%B4%E6%92%AD%E9%9B%B6%E4%BA%92%E5%8A%A8%23) `79.2K 🔥` `-45%`
1. [郑丽文结束大陆参访离京返台](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E7%BB%93%E6%9D%9F%E5%A4%A7%E9%99%86%E5%8F%82%E8%AE%BF%E7%A6%BB%E4%BA%AC%E8%BF%94%E5%8F%B0%23) `72.5K 🔥` `-28%`
1. [极禹没有双人舞台](https://s.weibo.com/weibo?q=%23%E6%9E%81%E7%A6%B9%E6%B2%A1%E6%9C%89%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%23) `64.9K 🔥` `-21%`

Updated at 2026-04-12 17:57:02

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
