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

1. [韩国总统李在明抵达深圳](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%80%BB%E7%BB%9F%E6%9D%8E%E5%9C%A8%E6%98%8E%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3%23) `801.6K 🔥` `NEW`
1. [129万一针抗癌药进医保](https://s.weibo.com/weibo?q=%23129%E4%B8%87%E4%B8%80%E9%92%88%E6%8A%97%E7%99%8C%E8%8D%AF%E8%BF%9B%E5%8C%BB%E4%BF%9D%23) `517.2K 🔥` `NEW`
1. [APEC](https://s.weibo.com/weibo?q=%23APEC%23) `378.8K 🔥` `NEW`
1. [作家斯琴高娃逝世](https://s.weibo.com/weibo?q=%23%E4%BD%9C%E5%AE%B6%E6%96%AF%E7%90%B4%E9%AB%98%E5%A8%83%E9%80%9D%E4%B8%96%23) `376.1K 🔥` `NEW`
1. [普京抵达深圳](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3%23) `363.9K 🔥` `NEW`
1. [41人没症状被AI查出早期肠癌](https://s.weibo.com/weibo?q=%2341%E4%BA%BA%E6%B2%A1%E7%97%87%E7%8A%B6%E8%A2%ABAI%E6%9F%A5%E5%87%BA%E6%97%A9%E6%9C%9F%E8%82%A0%E7%99%8C%23) `331.3K 🔥` `NEW`
1. [Faker获电竞世界杯选手选择奖第一名](https://s.weibo.com/weibo?q=%23Faker%E8%8E%B7%E7%94%B5%E7%AB%9E%E4%B8%96%E7%95%8C%E6%9D%AF%E9%80%89%E6%89%8B%E9%80%89%E6%8B%A9%E5%A5%96%E7%AC%AC%E4%B8%80%E5%90%8D%23) `331.1K 🔥` `NEW`
1. [曝C罗决定赛季末退役](https://s.weibo.com/weibo?q=%23%E6%9B%9DC%E7%BD%97%E5%86%B3%E5%AE%9A%E8%B5%9B%E5%AD%A3%E6%9C%AB%E9%80%80%E5%BD%B9%23) `330.7K 🔥` `NEW`
1. [郑恺女儿英文水平超过不少大学生了](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E5%A5%B3%E5%84%BF%E8%8B%B1%E6%96%87%E6%B0%B4%E5%B9%B3%E8%B6%85%E8%BF%87%E4%B8%8D%E5%B0%91%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%BA%86%23) `330.2K 🔥` `NEW`
1. [供应商快被车企拖死了](https://s.weibo.com/weibo?q=%23%E4%BE%9B%E5%BA%94%E5%95%86%E5%BF%AB%E8%A2%AB%E8%BD%A6%E4%BC%81%E6%8B%96%E6%AD%BB%E4%BA%86%23) `329.6K 🔥` `NEW`
1. [Chovy获TGA最佳电竞选手提名](https://s.weibo.com/weibo?q=%23Chovy%E8%8E%B7TGA%E6%9C%80%E4%BD%B3%E7%94%B5%E7%AB%9E%E9%80%89%E6%89%8B%E6%8F%90%E5%90%8D%23) `328.9K 🔥` `NEW`
1. [韩网热议海外韩剧粉爬墙中剧](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E7%83%AD%E8%AE%AE%E6%B5%B7%E5%A4%96%E9%9F%A9%E5%89%A7%E7%B2%89%E7%88%AC%E5%A2%99%E4%B8%AD%E5%89%A7%23) `328.8K 🔥` `NEW`
1. [怪不得许飞爆了一个月还是0商务](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E8%AE%B8%E9%A3%9E%E7%88%86%E4%BA%86%E4%B8%80%E4%B8%AA%E6%9C%88%E8%BF%98%E6%98%AF0%E5%95%86%E5%8A%A1%23) `328.3K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `326.1K 🔥` `NEW`
1. [雷军晒深圳风景](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%99%92%E6%B7%B1%E5%9C%B3%E9%A3%8E%E6%99%AF%23) `303.2K 🔥` `NEW`
1. [杨超越八年终于有人生角色](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%85%AB%E5%B9%B4%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E7%94%9F%E8%A7%92%E8%89%B2%23) `281.9K 🔥` `NEW`
1. [王子璇饿了一天也是吃上饭了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E9%A5%BF%E4%BA%86%E4%B8%80%E5%A4%A9%E4%B9%9F%E6%98%AF%E5%90%83%E4%B8%8A%E9%A5%AD%E4%BA%86%23) `281.6K 🔥` `NEW`
1. [后会友期这档节目的初衷](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%BF%99%E6%A1%A3%E8%8A%82%E7%9B%AE%E7%9A%84%E5%88%9D%E8%A1%B7%23) `281.4K 🔥` `NEW`
1. [段林希当年爆冷击败刘忻洪辰夺冠](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E6%9E%97%E5%B8%8C%E5%BD%93%E5%B9%B4%E7%88%86%E5%86%B7%E5%87%BB%E8%B4%A5%E5%88%98%E5%BF%BB%E6%B4%AA%E8%BE%B0%E5%A4%BA%E5%86%A0%23) `280.0K 🔥` `NEW`
1. [DeepSeek用户呼吁取消7天限制](https://s.weibo.com/weibo?q=%23DeepSeek%E7%94%A8%E6%88%B7%E5%91%BC%E5%90%81%E5%8F%96%E6%B6%887%E5%A4%A9%E9%99%90%E5%88%B6%23) `241.9K 🔥` `NEW`
1. [阿根廷vs哥斯达黎加](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E5%93%A5%E6%96%AF%E8%BE%BE%E9%BB%8E%E5%8A%A0%23) `228.3K 🔥` `NEW`
1. [综艺好好生活](https://s.weibo.com/weibo?q=%23%E7%BB%BC%E8%89%BA%E5%A5%BD%E5%A5%BD%E7%94%9F%E6%B4%BB%23) `227.8K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `227.7K 🔥` `NEW`
1. [赵本山这段话缓解了我的工作焦虑](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E8%BF%99%E6%AE%B5%E8%AF%9D%E7%BC%93%E8%A7%A3%E4%BA%86%E6%88%91%E7%9A%84%E5%B7%A5%E4%BD%9C%E7%84%A6%E8%99%91%23) `222.5K 🔥` `NEW`
1. [厉娜听到许飞说免费接私活的表情](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E5%90%AC%E5%88%B0%E8%AE%B8%E9%A3%9E%E8%AF%B4%E5%85%8D%E8%B4%B9%E6%8E%A5%E7%A7%81%E6%B4%BB%E7%9A%84%E8%A1%A8%E6%83%85%23) `212.3K 🔥` `NEW`
1. [孩子生命最后11天打镇定剂舒服睡一觉](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E7%94%9F%E5%91%BD%E6%9C%80%E5%90%8E11%E5%A4%A9%E6%89%93%E9%95%87%E5%AE%9A%E5%89%82%E8%88%92%E6%9C%8D%E7%9D%A1%E4%B8%80%E8%A7%89%23) `190.6K 🔥` `NEW`
1. [金价一直下跌原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%80%E7%9B%B4%E4%B8%8B%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `172.6K 🔥` `NEW`
1. [赵本山慌啥子嘛接住一代人焦虑](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E6%85%8C%E5%95%A5%E5%AD%90%E5%98%9B%E6%8E%A5%E4%BD%8F%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%84%A6%E8%99%91%23) `143.3K 🔥` `NEW`
1. [孙千 千颂伊](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%20%E5%8D%83%E9%A2%82%E4%BC%8A%23) `139.5K 🔥` `NEW`
1. [普京在华行程值得关注](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%9C%A8%E5%8D%8E%E8%A1%8C%E7%A8%8B%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23) `131.0K 🔥` `NEW`
1. [美军再袭伊朗格什姆岛](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%86%8D%E8%A2%AD%E4%BC%8A%E6%9C%97%E6%A0%BC%E4%BB%80%E5%A7%86%E5%B2%9B%23) `129.8K 🔥` `NEW`
1. [男子的相亲经历比相声还精彩](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%9A%84%E7%9B%B8%E4%BA%B2%E7%BB%8F%E5%8E%86%E6%AF%94%E7%9B%B8%E5%A3%B0%E8%BF%98%E7%B2%BE%E5%BD%A9%23) `115.8K 🔥` `NEW`
1. [深圳青年挥舞中俄国旗欢迎普京](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E9%9D%92%E5%B9%B4%E6%8C%A5%E8%88%9E%E4%B8%AD%E4%BF%84%E5%9B%BD%E6%97%97%E6%AC%A2%E8%BF%8E%E6%99%AE%E4%BA%AC%23) `115.6K 🔥` `NEW`
1. [28岁抱养姑娘辞职回乡陪二老](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E6%8A%B1%E5%85%BB%E5%A7%91%E5%A8%98%E8%BE%9E%E8%81%8C%E5%9B%9E%E4%B9%A1%E9%99%AA%E4%BA%8C%E8%80%81%23) `115.6K 🔥` `NEW`
1. [赵丽颖选剧本的眼光到底有多远](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%80%89%E5%89%A7%E6%9C%AC%E7%9A%84%E7%9C%BC%E5%85%89%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E8%BF%9C%23) `115.3K 🔥` `NEW`
1. [峨眉山来了群女弟子 21天修行](https://s.weibo.com/weibo?q=%23%E5%B3%A8%E7%9C%89%E5%B1%B1%E6%9D%A5%E4%BA%86%E7%BE%A4%E5%A5%B3%E5%BC%9F%E5%AD%90%2021%E5%A4%A9%E4%BF%AE%E8%A1%8C%23) `115.1K 🔥` `NEW`
1. [声生不息阵容 好评不少](https://s.weibo.com/weibo?q=%23%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E9%98%B5%E5%AE%B9%20%E5%A5%BD%E8%AF%84%E4%B8%8D%E5%B0%91%23) `115.0K 🔥` `NEW`
1. [深圳人全妆出街迎APEC](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%BA%BA%E5%85%A8%E5%A6%86%E5%87%BA%E8%A1%97%E8%BF%8EAPEC%23) `1.1M 🔥` `+1885%`
1. [2026APEC这些看点值得期待](https://s.weibo.com/weibo?q=%232026APEC%E8%BF%99%E4%BA%9B%E7%9C%8B%E7%82%B9%E5%80%BC%E5%BE%97%E6%9C%9F%E5%BE%85%23) `613.5K 🔥` `+965%`
1. [难怪郑恺高考成绩可以上复旦](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E9%83%91%E6%81%BA%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%E5%8F%AF%E4%BB%A5%E4%B8%8A%E5%A4%8D%E6%97%A6%23) `281.0K 🔥` `+477%`
1. [一个月一万块这工作普通人干不了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%9C%88%E4%B8%80%E4%B8%87%E5%9D%97%E8%BF%99%E5%B7%A5%E4%BD%9C%E6%99%AE%E9%80%9A%E4%BA%BA%E5%B9%B2%E4%B8%8D%E4%BA%86%23) `280.7K 🔥` `+428%`
1. [拉布拉多没穿警服被当成流浪狗](https://s.weibo.com/weibo?q=%23%E6%8B%89%E5%B8%83%E6%8B%89%E5%A4%9A%E6%B2%A1%E7%A9%BF%E8%AD%A6%E6%9C%8D%E8%A2%AB%E5%BD%93%E6%88%90%E6%B5%81%E6%B5%AA%E7%8B%97%23) `280.1K 🔥` `+486%`
1. [快女冠军段林希咋倒嗓成这样](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E5%A5%B3%E5%86%A0%E5%86%9B%E6%AE%B5%E6%9E%97%E5%B8%8C%E5%92%8B%E5%80%92%E5%97%93%E6%88%90%E8%BF%99%E6%A0%B7%23) `279.7K 🔥` `+409%`
1. [不要让自己成为任何事情的最后一环](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%AE%A9%E8%87%AA%E5%B7%B1%E6%88%90%E4%B8%BA%E4%BB%BB%E4%BD%95%E4%BA%8B%E6%83%85%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E7%8E%AF%23) `230.9K 🔥` `+385%`
1. [猫的树说太阳雨本来只有22集到出国前](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%9A%84%E6%A0%91%E8%AF%B4%E5%A4%AA%E9%98%B3%E9%9B%A8%E6%9C%AC%E6%9D%A5%E5%8F%AA%E6%9C%8922%E9%9B%86%E5%88%B0%E5%87%BA%E5%9B%BD%E5%89%8D%23) `227.8K 🔥` `+370%`
1. [BLG赛点局ON高喊别虐泉](https://s.weibo.com/weibo?q=%23BLG%E8%B5%9B%E7%82%B9%E5%B1%80ON%E9%AB%98%E5%96%8A%E5%88%AB%E8%99%90%E6%B3%89%23) `179.4K 🔥` `+256%`
1. [虞书欣近1年掉粉118万](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%BF%911%E5%B9%B4%E6%8E%89%E7%B2%89118%E4%B8%87%23) `171.1K 🔥` `+213%`
1. [Ruler看BLG捧杯摇头不语](https://s.weibo.com/weibo?q=%23Ruler%E7%9C%8BBLG%E6%8D%A7%E6%9D%AF%E6%91%87%E5%A4%B4%E4%B8%8D%E8%AF%AD%23) `129.4K 🔥` `+171%`
1. [奚梦瑶白到整个人都在发光](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%99%BD%E5%88%B0%E6%95%B4%E4%B8%AA%E4%BA%BA%E9%83%BD%E5%9C%A8%E5%8F%91%E5%85%89%23) `122.6K 🔥` `+162%`
1. [这个马吃草的理由太搞笑](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E9%A9%AC%E5%90%83%E8%8D%89%E7%9A%84%E7%90%86%E7%94%B1%E5%A4%AA%E6%90%9E%E7%AC%91%23) `118.7K 🔥` `+150%`

Updated at 2026-11-18 09:51:37

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
