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

1. [TTG夺冠](https://s.weibo.com/weibo?q=%23TTG%E5%A4%BA%E5%86%A0%23) `2.5M 🔥` `NEW`
1. [你们经常换手机的人嘴真严](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E7%BB%8F%E5%B8%B8%E6%8D%A2%E6%89%8B%E6%9C%BA%E7%9A%84%E4%BA%BA%E5%98%B4%E7%9C%9F%E4%B8%A5%23) `1.5M 🔥` `NEW`
1. [WMA微博音乐盛典定档](https://s.weibo.com/weibo?q=%23WMA%E5%BE%AE%E5%8D%9A%E9%9F%B3%E4%B9%90%E7%9B%9B%E5%85%B8%E5%AE%9A%E6%A1%A3%23) `1.3M 🔥` `NEW`
1. [小胖FMVP](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%83%96FMVP%23) `1.3M 🔥` `NEW`
1. [狼队决赛巅峰对决TTG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%86%B3%E8%B5%9B%E5%B7%85%E5%B3%B0%E5%AF%B9%E5%86%B3TTG%23) `582.2K 🔥` `NEW`
1. [赵雷当爸爸了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9B%B7%E5%BD%93%E7%88%B8%E7%88%B8%E4%BA%86%23) `517.6K 🔥` `NEW`
1. [欧阳娜娜的彩带从屏幕飘到了手里](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E7%9A%84%E5%BD%A9%E5%B8%A6%E4%BB%8E%E5%B1%8F%E5%B9%95%E9%A3%98%E5%88%B0%E4%BA%86%E6%89%8B%E9%87%8C%23) `444.3K 🔥` `NEW`
1. [狼队 遗憾](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%20%E9%81%97%E6%86%BE%23) `411.4K 🔥` `NEW`
1. [兰香如故走势](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%B5%B0%E5%8A%BF%23) `394.3K 🔥` `NEW`
1. [AG 年总](https://s.weibo.com/weibo?q=%23AG%20%E5%B9%B4%E6%80%BB%23) `344.8K 🔥` `NEW`
1. [IG冒泡赛面对TES](https://s.weibo.com/weibo?q=%23IG%E5%86%92%E6%B3%A1%E8%B5%9B%E9%9D%A2%E5%AF%B9TES%23) `341.1K 🔥` `NEW`
1. [井迪直播被说怀孕了](https://s.weibo.com/weibo?q=%23%E4%BA%95%E8%BF%AA%E7%9B%B4%E6%92%AD%E8%A2%AB%E8%AF%B4%E6%80%80%E5%AD%95%E4%BA%86%23) `340.2K 🔥` `NEW`
1. [AL战胜iG](https://s.weibo.com/weibo?q=%23AL%E6%88%98%E8%83%9CiG%23) `337.6K 🔥` `NEW`
1. [欧阳娜娜演唱会嘉宾是周翊然](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%E6%98%AF%E5%91%A8%E7%BF%8A%E7%84%B6%23) `336.5K 🔥` `NEW`
1. [孙俪收养的流浪猫去世](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%94%B6%E5%85%BB%E7%9A%84%E6%B5%81%E6%B5%AA%E7%8C%AB%E5%8E%BB%E4%B8%96%23) `333.9K 🔥` `NEW`
1. [张国伟说不会自己花钱练体育](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%9B%BD%E4%BC%9F%E8%AF%B4%E4%B8%8D%E4%BC%9A%E8%87%AA%E5%B7%B1%E8%8A%B1%E9%92%B1%E7%BB%83%E4%BD%93%E8%82%B2%23) `330.2K 🔥` `NEW`
1. [雨果4比2松岛辉空](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E6%9E%9C4%E6%AF%942%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `328.0K 🔥` `NEW`
1. [市场监管局回应烧烤店2个月被查15次](https://s.weibo.com/weibo?q=%23%E5%B8%82%E5%9C%BA%E7%9B%91%E7%AE%A1%E5%B1%80%E5%9B%9E%E5%BA%94%E7%83%A7%E7%83%A4%E5%BA%972%E4%B8%AA%E6%9C%88%E8%A2%AB%E6%9F%A515%E6%AC%A1%23) `326.8K 🔥` `NEW`
1. [以军士兵近距离枪击巴勒斯坦平民画面](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%A3%AB%E5%85%B5%E8%BF%91%E8%B7%9D%E7%A6%BB%E6%9E%AA%E5%87%BB%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%E5%B9%B3%E6%B0%91%E7%94%BB%E9%9D%A2%23) `325.9K 🔥` `NEW`
1. [iPhone18Pro系列抢购火爆](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%B3%BB%E5%88%97%E6%8A%A2%E8%B4%AD%E7%81%AB%E7%88%86%23) `323.9K 🔥` `NEW`
1. [TOP终于有消息了](https://s.weibo.com/weibo?q=%23TOP%E7%BB%88%E4%BA%8E%E6%9C%89%E6%B6%88%E6%81%AF%E4%BA%86%23) `321.8K 🔥` `NEW`
1. [Bin要零封AL](https://s.weibo.com/weibo?q=%23Bin%E8%A6%81%E9%9B%B6%E5%B0%81AL%23) `319.5K 🔥` `NEW`
1. [刘畊宏参加披哥掉粉近40万](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%8A%E5%AE%8F%E5%8F%82%E5%8A%A0%E6%8A%AB%E5%93%A5%E6%8E%89%E7%B2%89%E8%BF%9140%E4%B8%87%23) `316.2K 🔥` `NEW`
1. [哈里梅根夫妇不满被叫普通公民](https://s.weibo.com/weibo?q=%23%E5%93%88%E9%87%8C%E6%A2%85%E6%A0%B9%E5%A4%AB%E5%A6%87%E4%B8%8D%E6%BB%A1%E8%A2%AB%E5%8F%AB%E6%99%AE%E9%80%9A%E5%85%AC%E6%B0%91%23) `315.1K 🔥` `NEW`
1. [东北超](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E8%B6%85%23) `313.9K 🔥` `NEW`
1. [心疼清清](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E6%B8%85%E6%B8%85%23) `310.6K 🔥` `NEW`
1. [AI短剧 成瘾](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%20%E6%88%90%E7%98%BE%23) `309.1K 🔥` `NEW`
1. [严浩翔唱someonetolove](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%94%B1someonetolove%23) `307.2K 🔥` `NEW`
1. [WEGO为与辱华动漫联名道歉](https://s.weibo.com/weibo?q=%23WEGO%E4%B8%BA%E4%B8%8E%E8%BE%B1%E5%8D%8E%E5%8A%A8%E6%BC%AB%E8%81%94%E5%90%8D%E9%81%93%E6%AD%89%23) `306.4K 🔥` `NEW`
1. [iG掉入LPL冒泡赛](https://s.weibo.com/weibo?q=%23iG%E6%8E%89%E5%85%A5LPL%E5%86%92%E6%B3%A1%E8%B5%9B%23) `304.1K 🔥` `NEW`
1. [兰香如故女眷赴死争议](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%A5%B3%E7%9C%B7%E8%B5%B4%E6%AD%BB%E4%BA%89%E8%AE%AE%23) `302.4K 🔥` `NEW`
1. [BLG没有等来iG](https://s.weibo.com/weibo?q=%23BLG%E6%B2%A1%E6%9C%89%E7%AD%89%E6%9D%A5iG%23) `301.3K 🔥` `NEW`
1. [iPhone18扣款成功仍等待付款](https://s.weibo.com/weibo?q=%23iPhone18%E6%89%A3%E6%AC%BE%E6%88%90%E5%8A%9F%E4%BB%8D%E7%AD%89%E5%BE%85%E4%BB%98%E6%AC%BE%23) `300.0K 🔥` `NEW`
1. [警方通报公职人员醉驾超速致人死亡](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E9%86%89%E9%A9%BE%E8%B6%85%E9%80%9F%E8%87%B4%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `298.2K 🔥` `NEW`
1. [为什么几乎不存在完美藏尸](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%87%A0%E4%B9%8E%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%AE%8C%E7%BE%8E%E8%97%8F%E5%B0%B8%23) `296.4K 🔥` `NEW`
1. [狼队状态](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E7%8A%B6%E6%80%81%23) `295.2K 🔥` `NEW`
1. [TTG队史第二冠](https://s.weibo.com/weibo?q=%23TTG%E9%98%9F%E5%8F%B2%E7%AC%AC%E4%BA%8C%E5%86%A0%23) `290.4K 🔥` `NEW`
1. [付航回应脱口秀禁黄牛票入场](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%88%AA%E5%9B%9E%E5%BA%94%E8%84%B1%E5%8F%A3%E7%A7%80%E7%A6%81%E9%BB%84%E7%89%9B%E7%A5%A8%E5%85%A5%E5%9C%BA%23) `289.0K 🔥` `NEW`
1. [弹壳向严浩翔发歌曲合作邀约](https://s.weibo.com/weibo?q=%23%E5%BC%B9%E5%A3%B3%E5%90%91%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%8F%91%E6%AD%8C%E6%9B%B2%E5%90%88%E4%BD%9C%E9%82%80%E7%BA%A6%23) `287.5K 🔥` `NEW`
1. [中小学生拿到的第一笔投资是算力](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B0%8F%E5%AD%A6%E7%94%9F%E6%8B%BF%E5%88%B0%E7%9A%84%E7%AC%AC%E4%B8%80%E7%AC%94%E6%8A%95%E8%B5%84%E6%98%AF%E7%AE%97%E5%8A%9B%23) `286.7K 🔥` `NEW`
1. [澳门冠军赛女单四强](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E5%86%A0%E5%86%9B%E8%B5%9B%E5%A5%B3%E5%8D%95%E5%9B%9B%E5%BC%BA%23) `284.0K 🔥` `NEW`
1. [为什么早上是喝咖啡的最佳时间](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%97%A9%E4%B8%8A%E6%98%AF%E5%96%9D%E5%92%96%E5%95%A1%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E9%97%B4%23) `282.0K 🔥` `NEW`
1. [金砖合作打造互联互通贸易通道](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A0%96%E5%90%88%E4%BD%9C%E6%89%93%E9%80%A0%E4%BA%92%E8%81%94%E4%BA%92%E9%80%9A%E8%B4%B8%E6%98%93%E9%80%9A%E9%81%93%23) `1.3M 🔥` `+78%`
1. [狼队对战TTG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98TTG%23) `317.4K 🔥` `+35%`
1. [女婴在月子中心无呼吸心跳送医死亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A9%B4%E5%9C%A8%E6%9C%88%E5%AD%90%E4%B8%AD%E5%BF%83%E6%97%A0%E5%91%BC%E5%90%B8%E5%BF%83%E8%B7%B3%E9%80%81%E5%8C%BB%E6%AD%BB%E4%BA%A1%23) `339.4K 🔥` `-21%`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `332.9K 🔥` `-23%`
1. [15名同事合买彩票中奖3000万](https://s.weibo.com/weibo?q=%2315%E5%90%8D%E5%90%8C%E4%BA%8B%E5%90%88%E4%B9%B0%E5%BD%A9%E7%A5%A8%E4%B8%AD%E5%A5%963000%E4%B8%87%23) `331.4K 🔥` `-22%`
1. [苹果18 抢不到](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C18%20%E6%8A%A2%E4%B8%8D%E5%88%B0%23) `320.9K 🔥` `-26%`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `312.1K 🔥` `-27%`
1. [Lisa说YG限制她很多](https://s.weibo.com/weibo?q=%23Lisa%E8%AF%B4YG%E9%99%90%E5%88%B6%E5%A5%B9%E5%BE%88%E5%A4%9A%23) `294.2K 🔥` `-32%`
1. [茶叶蛋vs白煮蛋](https://s.weibo.com/weibo?q=%23%E8%8C%B6%E5%8F%B6%E8%9B%8Bvs%E7%99%BD%E7%85%AE%E8%9B%8B%23) `292.3K 🔥` `-33%`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `285.5K 🔥` `-63%`

Updated at 2026-09-12 23:47:26

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
