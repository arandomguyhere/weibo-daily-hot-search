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

1. [奔跑吧 (run)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `985.8K 🔥` `NEW`
1. [1071项国标5月1日起实施](https://s.weibo.com/weibo?q=%231071%E9%A1%B9%E5%9B%BD%E6%A0%875%E6%9C%881%E6%97%A5%E8%B5%B7%E5%AE%9E%E6%96%BD%23) `762.7K 🔥` `NEW`
1. [LABUBU首款冰箱京东抢先发售](https://s.weibo.com/weibo?q=%23LABUBU%E9%A6%96%E6%AC%BE%E5%86%B0%E7%AE%B1%E4%BA%AC%E4%B8%9C%E6%8A%A2%E5%85%88%E5%8F%91%E5%94%AE%23) `668.0K 🔥` `NEW`
1. [辛辛苦苦种了三个多月的胡萝卜](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%BE%9B%E8%8B%A6%E8%8B%A6%E7%A7%8D%E4%BA%86%E4%B8%89%E4%B8%AA%E5%A4%9A%E6%9C%88%E7%9A%84%E8%83%A1%E8%90%9D%E5%8D%9C%23) `556.9K 🔥` `NEW`
1. [云南元阳车祸致7人死亡](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E5%85%83%E9%98%B3%E8%BD%A6%E7%A5%B8%E8%87%B47%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `357.5K 🔥` `NEW`
1. [为什么有的人从来不内耗](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E7%9A%84%E4%BA%BA%E4%BB%8E%E6%9D%A5%E4%B8%8D%E5%86%85%E8%80%97%23) `339.6K 🔥` `NEW`
1. [DeepSeek思考过程好萌](https://s.weibo.com/weibo?q=%23DeepSeek%E6%80%9D%E8%80%83%E8%BF%87%E7%A8%8B%E5%A5%BD%E8%90%8C%23) `339.2K 🔥` `NEW`
1. [曝Angelababy爱发朋友圈](https://s.weibo.com/weibo?q=%23%E6%9B%9DAngelababy%E7%88%B1%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `326.9K 🔥` `NEW`
1. [台男子车站性侵女游客被判5年](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E7%94%B7%E5%AD%90%E8%BD%A6%E7%AB%99%E6%80%A7%E4%BE%B5%E5%A5%B3%E6%B8%B8%E5%AE%A2%E8%A2%AB%E5%88%A45%E5%B9%B4%23) `322.9K 🔥` `NEW`
1. [李小冉全脂胳膊](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%85%A8%E8%84%82%E8%83%B3%E8%86%8A%23) `318.3K 🔥` `NEW`
1. [孔雪儿回应高颅顶妆造 (Kong Xueer responded to high-ceiling makeup)](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E5%9B%9E%E5%BA%94%E9%AB%98%E9%A2%85%E9%A1%B6%E5%A6%86%E9%80%A0%23) `312.8K 🔥` `NEW`
1. [2859克黄金被扣30年迎转机](https://s.weibo.com/weibo?q=%232859%E5%85%8B%E9%BB%84%E9%87%91%E8%A2%AB%E6%89%A330%E5%B9%B4%E8%BF%8E%E8%BD%AC%E6%9C%BA%23) `303.4K 🔥` `NEW`
1. [男子584元买凉拌鸡老板狂加43勺糖](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90584%E5%85%83%E4%B9%B0%E5%87%89%E6%8B%8C%E9%B8%A1%E8%80%81%E6%9D%BF%E7%8B%82%E5%8A%A043%E5%8B%BA%E7%B3%96%23) `296.4K 🔥` `NEW`
1. [白鹿手写的行程图](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%89%8B%E5%86%99%E7%9A%84%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `272.7K 🔥` `NEW`
1. [苹果电脑废纸篓里的废纸谁扔的](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E7%94%B5%E8%84%91%E5%BA%9F%E7%BA%B8%E7%AF%93%E9%87%8C%E7%9A%84%E5%BA%9F%E7%BA%B8%E8%B0%81%E6%89%94%E7%9A%84%23) `263.8K 🔥` `NEW`
1. [迪丽热巴美美出片](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BE%8E%E7%BE%8E%E5%87%BA%E7%89%87%23) `241.6K 🔥` `NEW`
1. [孙颖莎笑得好开心](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%AC%91%E5%BE%97%E5%A5%BD%E5%BC%80%E5%BF%83%23) `205.9K 🔥` `NEW`
1. [穆祉丞直播](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%9B%B4%E6%92%AD%23) `183.6K 🔥` `NEW`
1. [李现又去看五月天演唱会了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%8F%88%E5%8E%BB%E7%9C%8B%E4%BA%94%E6%9C%88%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `170.3K 🔥` `NEW`
1. [陈冠希46岁状态](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%86%A0%E5%B8%8C46%E5%B2%81%E7%8A%B6%E6%80%81%23) `158.3K 🔥` `NEW`
1. [王橹杰小学时期的简介 (Brief introduction of Wang Lujie in elementary school)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%B0%8F%E5%AD%A6%E6%97%B6%E6%9C%9F%E7%9A%84%E7%AE%80%E4%BB%8B%23) `151.6K 🔥` `NEW`
1. [女子辞职顾家分手遭男友追讨百万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BE%9E%E8%81%8C%E9%A1%BE%E5%AE%B6%E5%88%86%E6%89%8B%E9%81%AD%E7%94%B7%E5%8F%8B%E8%BF%BD%E8%AE%A8%E7%99%BE%E4%B8%87%23) `140.8K 🔥` `NEW`
1. [刘浩存粉丝长文感谢惠英红](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%B2%89%E4%B8%9D%E9%95%BF%E6%96%87%E6%84%9F%E8%B0%A2%E6%83%A0%E8%8B%B1%E7%BA%A2%23) `126.0K 🔥` `NEW`
1. [湖南仅剩4只导盲犬](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E4%BB%85%E5%89%A94%E5%8F%AA%E5%AF%BC%E7%9B%B2%E7%8A%AC%23) `124.6K 🔥` `NEW`
1. [蜜语纪大结局](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%E5%A4%A7%E7%BB%93%E5%B1%80%23) `118.2K 🔥` `NEW`
1. [物业回应保洁误拿快递协商时身亡](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E5%9B%9E%E5%BA%94%E4%BF%9D%E6%B4%81%E8%AF%AF%E6%8B%BF%E5%BF%AB%E9%80%92%E5%8D%8F%E5%95%86%E6%97%B6%E8%BA%AB%E4%BA%A1%23) `118.2K 🔥` `NEW`
1. [唐嫣台词](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%8F%B0%E8%AF%8D%23) `118.1K 🔥` `NEW`
1. [徐若晗感谢网友关注她的牙](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E6%84%9F%E8%B0%A2%E7%BD%91%E5%8F%8B%E5%85%B3%E6%B3%A8%E5%A5%B9%E7%9A%84%E7%89%99%23) `115.0K 🔥` `NEW`
1. [台评论员谈美日菲军演解放军围观](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E8%AF%84%E8%AE%BA%E5%91%98%E8%B0%88%E7%BE%8E%E6%97%A5%E8%8F%B2%E5%86%9B%E6%BC%94%E8%A7%A3%E6%94%BE%E5%86%9B%E5%9B%B4%E8%A7%82%23) `107.6K 🔥` `NEW`
1. [章建平套现寒武纪超40亿元](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%BB%BA%E5%B9%B3%E5%A5%97%E7%8E%B0%E5%AF%92%E6%AD%A6%E7%BA%AA%E8%B6%8540%E4%BA%BF%E5%85%83%23) `106.1K 🔥` `NEW`
1. [被豆包忽悠去发论文 (I was tricked into publishing a paper by Doubao)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%B1%86%E5%8C%85%E5%BF%BD%E6%82%A0%E5%8E%BB%E5%8F%91%E8%AE%BA%E6%96%87%23) `106.0K 🔥` `NEW`
1. [幻月新游戏](https://s.weibo.com/weibo?q=%23%E5%B9%BB%E6%9C%88%E6%96%B0%E6%B8%B8%E6%88%8F%23) `104.7K 🔥` `NEW`
1. [中国女孩拍摄靖国神社内部](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%A9%E6%8B%8D%E6%91%84%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E5%86%85%E9%83%A8%23) `2.3M 🔥` `+630%`
1. [浪姐 背调](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E8%83%8C%E8%B0%83%23) `336.2K 🔥` `+22%`
1. [阿娇送阿sa的新婚礼物曝光](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A8%87%E9%80%81%E9%98%BFsa%E7%9A%84%E6%96%B0%E5%A9%9A%E7%A4%BC%E7%89%A9%E6%9B%9D%E5%85%89%23) `308.7K 🔥` `+23%`
1. [多股20cm涨停](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%82%A120cm%E6%B6%A8%E5%81%9C%23) `190.0K 🔥` `+26%`
1. [香奈儿回应无底绑带鞋 (Chanel responds to bottomless lace-up shoes)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E5%A5%88%E5%84%BF%E5%9B%9E%E5%BA%94%E6%97%A0%E5%BA%95%E7%BB%91%E5%B8%A6%E9%9E%8B%23) `331.2K 🔥`
1. [金靖瘦到认不出来 (Jin Jing is so thin that he is unrecognizable)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `328.9K 🔥`
1. [女演员李心艾暴瘦80斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%9D%8E%E5%BF%83%E8%89%BE%E6%9A%B4%E7%98%A680%E6%96%A4%23) `321.0K 🔥`
1. [28岁攒到10万元女生已申请辞职](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E6%94%92%E5%88%B010%E4%B8%87%E5%85%83%E5%A5%B3%E7%94%9F%E5%B7%B2%E7%94%B3%E8%AF%B7%E8%BE%9E%E8%81%8C%23) `314.8K 🔥`
1. [韩国霸王茶姬爆单](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E7%88%86%E5%8D%95%23) `305.3K 🔥`
1. [曝孟美岐雪藏了两年才离开乐华](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AD%9F%E7%BE%8E%E5%B2%90%E9%9B%AA%E8%97%8F%E4%BA%86%E4%B8%A4%E5%B9%B4%E6%89%8D%E7%A6%BB%E5%BC%80%E4%B9%90%E5%8D%8E%23) `300.8K 🔥`
1. [伊能静回应恩利争议视频 (Yi Nengjing responds to Enli’s controversial video)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E5%9B%9E%E5%BA%94%E6%81%A9%E5%88%A9%E4%BA%89%E8%AE%AE%E8%A7%86%E9%A2%91%23) `255.4K 🔥`
1. [收货地址不该成为被歧视的理由 (Shipping address should not be a reason for discrimination)](https://s.weibo.com/weibo?q=%23%E6%94%B6%E8%B4%A7%E5%9C%B0%E5%9D%80%E4%B8%8D%E8%AF%A5%E6%88%90%E4%B8%BA%E8%A2%AB%E6%AD%A7%E8%A7%86%E7%9A%84%E7%90%86%E7%94%B1%23) `367.3K 🔥` `-55%`
1. [浪姐请了李小冉告过的博主](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%AF%B7%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%E5%91%8A%E8%BF%87%E7%9A%84%E5%8D%9A%E4%B8%BB%23) `297.9K 🔥` `-57%`
1. [跑男老来得子](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E8%80%81%E6%9D%A5%E5%BE%97%E5%AD%90%23) `293.7K 🔥` `-59%`
1. [吵架的时候就回这一句太绝了](https://s.weibo.com/weibo?q=%23%E5%90%B5%E6%9E%B6%E7%9A%84%E6%97%B6%E5%80%99%E5%B0%B1%E5%9B%9E%E8%BF%99%E4%B8%80%E5%8F%A5%E5%A4%AA%E7%BB%9D%E4%BA%86%23) `158.4K 🔥` `-47%`
1. [虞书欣造型](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%80%A0%E5%9E%8B%23) `139.3K 🔥` `-45%`
1. [妈妈上夜班3岁娃凌晨1点街头独行](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%B8%8A%E5%A4%9C%E7%8F%AD3%E5%B2%81%E5%A8%83%E5%87%8C%E6%99%A81%E7%82%B9%E8%A1%97%E5%A4%B4%E7%8B%AC%E8%A1%8C%23) `125.5K 🔥` `-27%`
1. [密逃8阵容 (Escape 8 lineup)](https://s.weibo.com/weibo?q=%23%E5%AF%86%E9%80%838%E9%98%B5%E5%AE%B9%23) `124.4K 🔥` `-54%`
1. [谷歌入驻广州珠江新城](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8C%E5%85%A5%E9%A9%BB%E5%B9%BF%E5%B7%9E%E7%8F%A0%E6%B1%9F%E6%96%B0%E5%9F%8E%23) `107.3K 🔥` `-67%`

Updated at 2026-04-30 22:30:04

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
