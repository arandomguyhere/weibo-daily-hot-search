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

1. [GEN对战BLG](https://s.weibo.com/weibo?q=%23GEN%E5%AF%B9%E6%88%98BLG%23) `1.5M 🔥` `NEW`
1. [S16决赛开幕式](https://s.weibo.com/weibo?q=%23S16%E5%86%B3%E8%B5%9B%E5%BC%80%E5%B9%95%E5%BC%8F%23) `351.8K 🔥` `NEW`
1. [数读向新向优向好的中国经济](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%E5%90%91%E5%A5%BD%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%23) `234.6K 🔥` `NEW`
1. [白小纯居然是来报恩的](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%B1%85%E7%84%B6%E6%98%AF%E6%9D%A5%E6%8A%A5%E6%81%A9%E7%9A%84%23) `149.3K 🔥` `NEW`
1. [八冠神罚](https://s.weibo.com/weibo?q=%23%E5%85%AB%E5%86%A0%E7%A5%9E%E7%BD%9A%23) `113.8K 🔥` `NEW`
1. [王乐乐](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B9%90%E4%B9%90%23) `113.6K 🔥` `NEW`
1. [气象部门回应鱼鳞云不能预测地震](https://s.weibo.com/weibo?q=%23%E6%B0%94%E8%B1%A1%E9%83%A8%E9%97%A8%E5%9B%9E%E5%BA%94%E9%B1%BC%E9%B3%9E%E4%BA%91%E4%B8%8D%E8%83%BD%E9%A2%84%E6%B5%8B%E5%9C%B0%E9%9C%87%23) `111.6K 🔥` `NEW`
1. [曝高迪抖音直播权限被永封](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%AB%98%E8%BF%AA%E6%8A%96%E9%9F%B3%E7%9B%B4%E6%92%AD%E6%9D%83%E9%99%90%E8%A2%AB%E6%B0%B8%E5%B0%81%23) `109.3K 🔥` `NEW`
1. [曝高迪当年打刘叉叉前女友蛋蛋](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%AB%98%E8%BF%AA%E5%BD%93%E5%B9%B4%E6%89%93%E5%88%98%E5%8F%89%E5%8F%89%E5%89%8D%E5%A5%B3%E5%8F%8B%E8%9B%8B%E8%9B%8B%23) `107.0K 🔥` `NEW`
1. [许飞听到不负少年不负卿上热搜的反应](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%90%AC%E5%88%B0%E4%B8%8D%E8%B4%9F%E5%B0%91%E5%B9%B4%E4%B8%8D%E8%B4%9F%E5%8D%BF%E4%B8%8A%E7%83%AD%E6%90%9C%E7%9A%84%E5%8F%8D%E5%BA%94%23) `103.6K 🔥` `NEW`
1. [KDA表演](https://s.weibo.com/weibo?q=%23KDA%E8%A1%A8%E6%BC%94%23) `78.4K 🔥` `NEW`
1. [boss直聘暂停要求带咖啡公司账号权限](https://s.weibo.com/weibo?q=%23boss%E7%9B%B4%E8%81%98%E6%9A%82%E5%81%9C%E8%A6%81%E6%B1%82%E5%B8%A6%E5%92%96%E5%95%A1%E5%85%AC%E5%8F%B8%E8%B4%A6%E5%8F%B7%E6%9D%83%E9%99%90%23) `77.6K 🔥` `NEW`
1. [无畏](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%23) `77.6K 🔥` `NEW`
1. [高迪 王乐乐](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%BF%AA%20%E7%8E%8B%E4%B9%90%E4%B9%90%23) `76.2K 🔥` `NEW`
1. [英雄联盟](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%23) `75.6K 🔥` `NEW`
1. [孩子觉得打包丢人被老师扣分引热议](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E8%A7%89%E5%BE%97%E6%89%93%E5%8C%85%E4%B8%A2%E4%BA%BA%E8%A2%AB%E8%80%81%E5%B8%88%E6%89%A3%E5%88%86%E5%BC%95%E7%83%AD%E8%AE%AE%23) `74.9K 🔥` `NEW`
1. [厉娜我和雪梨飞雪合一下影](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E6%88%91%E5%92%8C%E9%9B%AA%E6%A2%A8%E9%A3%9E%E9%9B%AA%E5%90%88%E4%B8%80%E4%B8%8B%E5%BD%B1%23) `73.9K 🔥` `NEW`
1. [胎儿基因缺失竟牵出爸爸肠道癌变](https://s.weibo.com/weibo?q=%23%E8%83%8E%E5%84%BF%E5%9F%BA%E5%9B%A0%E7%BC%BA%E5%A4%B1%E7%AB%9F%E7%89%B5%E5%87%BA%E7%88%B8%E7%88%B8%E8%82%A0%E9%81%93%E7%99%8C%E5%8F%98%23) `73.2K 🔥` `NEW`
1. [男子欠10元10年不还将债主打骨折](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%AC%A010%E5%85%8310%E5%B9%B4%E4%B8%8D%E8%BF%98%E5%B0%86%E5%80%BA%E4%B8%BB%E6%89%93%E9%AA%A8%E6%8A%98%23) `72.4K 🔥` `NEW`
1. [S16决赛选手登场](https://s.weibo.com/weibo?q=%23S16%E5%86%B3%E8%B5%9B%E9%80%89%E6%89%8B%E7%99%BB%E5%9C%BA%23) `72.2K 🔥` `NEW`
1. [高迪发文网友不买账](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%BF%AA%E5%8F%91%E6%96%87%E7%BD%91%E5%8F%8B%E4%B8%8D%E4%B9%B0%E8%B4%A6%23) `71.2K 🔥` `NEW`
1. [JDG超话](https://s.weibo.com/weibo?q=%23JDG%E8%B6%85%E8%AF%9D%23) `70.3K 🔥` `NEW`
1. [曝爱奇艺尖叫之夜座位双C](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%88%B1%E5%A5%87%E8%89%BA%E5%B0%96%E5%8F%AB%E4%B9%8B%E5%A4%9C%E5%BA%A7%E4%BD%8D%E5%8F%8CC%23) `69.2K 🔥` `NEW`
1. [英雄联盟S16](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9FS16%23) `69.1K 🔥` `NEW`
1. [清融尽力](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%E5%B0%BD%E5%8A%9B%23) `68.5K 🔥` `NEW`
1. [原来热暴力真的比冷暴力有用](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%83%AD%E6%9A%B4%E5%8A%9B%E7%9C%9F%E7%9A%84%E6%AF%94%E5%86%B7%E6%9A%B4%E5%8A%9B%E6%9C%89%E7%94%A8%23) `64.7K 🔥` `NEW`
1. [大美妈妈回应](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%BE%8E%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%23) `64.1K 🔥` `NEW`
1. [葡足协将封存C罗版7号球衣](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%B6%B3%E5%8D%8F%E5%B0%86%E5%B0%81%E5%AD%98C%E7%BD%97%E7%89%887%E5%8F%B7%E7%90%83%E8%A1%A3%23) `63.6K 🔥` `NEW`
1. [央视曝光假牛肉案](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%81%87%E7%89%9B%E8%82%89%E6%A1%88%23) `63.4K 🔥` `NEW`
1. [超9成胃癌患者早期有这两个症状](https://s.weibo.com/weibo?q=%23%E8%B6%859%E6%88%90%E8%83%83%E7%99%8C%E6%82%A3%E8%80%85%E6%97%A9%E6%9C%9F%E6%9C%89%E8%BF%99%E4%B8%A4%E4%B8%AA%E7%97%87%E7%8A%B6%23) `63.1K 🔥` `NEW`
1. [中纪委罕见通报高官一把手职权腐败](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BA%AA%E5%A7%94%E7%BD%95%E8%A7%81%E9%80%9A%E6%8A%A5%E9%AB%98%E5%AE%98%E4%B8%80%E6%8A%8A%E6%89%8B%E8%81%8C%E6%9D%83%E8%85%90%E8%B4%A5%23) `62.3K 🔥` `NEW`
1. [暖阳夺冠发文](https://s.weibo.com/weibo?q=%23%E6%9A%96%E9%98%B3%E5%A4%BA%E5%86%A0%E5%8F%91%E6%96%87%23) `61.7K 🔥` `NEW`
1. [高迪这么多年完全对不起大美](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%BF%AA%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B9%B4%E5%AE%8C%E5%85%A8%E5%AF%B9%E4%B8%8D%E8%B5%B7%E5%A4%A7%E7%BE%8E%23) `61.6K 🔥` `NEW`
1. [解说瓶子](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E8%AF%B4%E7%93%B6%E5%AD%90%23) `61.6K 🔥` `NEW`
1. [吃完鸡爪肚子痛服务区还有二十公里](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%AE%8C%E9%B8%A1%E7%88%AA%E8%82%9A%E5%AD%90%E7%97%9B%E6%9C%8D%E5%8A%A1%E5%8C%BA%E8%BF%98%E6%9C%89%E4%BA%8C%E5%8D%81%E5%85%AC%E9%87%8C%23) `61.5K 🔥` `NEW`
1. [为什么说杀人容易藏尸难](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AF%B4%E6%9D%80%E4%BA%BA%E5%AE%B9%E6%98%93%E8%97%8F%E5%B0%B8%E9%9A%BE%23) `61.5K 🔥` `NEW`
1. [这要放十年前谁会觉得假](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%A6%81%E6%94%BE%E5%8D%81%E5%B9%B4%E5%89%8D%E8%B0%81%E4%BC%9A%E8%A7%89%E5%BE%97%E5%81%87%23) `61.5K 🔥` `NEW`
1. [爱一个不爱自己的人是僭越](https://s.weibo.com/weibo?q=%23%E7%88%B1%E4%B8%80%E4%B8%AA%E4%B8%8D%E7%88%B1%E8%87%AA%E5%B7%B1%E7%9A%84%E4%BA%BA%E6%98%AF%E5%83%AD%E8%B6%8A%23) `61.5K 🔥` `NEW`
1. [小寒梦游](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AF%92%E6%A2%A6%E6%B8%B8%23) `61.5K 🔥` `NEW`
1. [汪苏泷演唱会为Bin哥S16决赛加油](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%BABin%E5%93%A5S16%E5%86%B3%E8%B5%9B%E5%8A%A0%E6%B2%B9%23) `61.0K 🔥` `NEW`
1. [网红模范夫妻高迪塌房](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%A8%A1%E8%8C%83%E5%A4%AB%E5%A6%BB%E9%AB%98%E8%BF%AA%E5%A1%8C%E6%88%BF%23) `57.0K 🔥` `NEW`
1. [许飞直接红温了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E7%9B%B4%E6%8E%A5%E7%BA%A2%E6%B8%A9%E4%BA%86%23) `56.1K 🔥` `NEW`
1. [纯璇](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%92%87%23) `55.9K 🔥` `NEW`
1. [GEN对战BLG预测](https://s.weibo.com/weibo?q=%23GEN%E5%AF%B9%E6%88%98BLG%E9%A2%84%E6%B5%8B%23) `55.6K 🔥` `NEW`
1. [白鹿带着三个作品走了三次红毯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B8%A6%E7%9D%80%E4%B8%89%E4%B8%AA%E4%BD%9C%E5%93%81%E8%B5%B0%E4%BA%86%E4%B8%89%E6%AC%A1%E7%BA%A2%E6%AF%AF%23) `55.2K 🔥` `NEW`
1. [奚梦瑶给女儿买迷你爱马仕](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%BB%99%E5%A5%B3%E5%84%BF%E4%B9%B0%E8%BF%B7%E4%BD%A0%E7%88%B1%E9%A9%AC%E4%BB%95%23) `53.2K 🔥` `NEW`
1. [管泽元问Bang哪个位置最关键](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%E9%97%AEBang%E5%93%AA%E4%B8%AA%E4%BD%8D%E7%BD%AE%E6%9C%80%E5%85%B3%E9%94%AE%23) `52.8K 🔥` `NEW`
1. [青稚再获巅峰挑战赛冠军](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E5%86%8D%E8%8E%B7%E5%B7%85%E5%B3%B0%E6%8C%91%E6%88%98%E8%B5%9B%E5%86%A0%E5%86%9B%23) `52.5K 🔥` `NEW`
1. [GEN对战BLG首发名单](https://s.weibo.com/weibo?q=%23GEN%E5%AF%B9%E6%88%98BLG%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95%23) `50.6K 🔥` `NEW`
1. [国足马来西亚冲突后续](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E5%86%B2%E7%AA%81%E5%90%8E%E7%BB%AD%23) `49.3K 🔥` `NEW`
1. [男子高速路上开智驾直接躺倒睡觉](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%AB%98%E9%80%9F%E8%B7%AF%E4%B8%8A%E5%BC%80%E6%99%BA%E9%A9%BE%E7%9B%B4%E6%8E%A5%E8%BA%BA%E5%80%92%E7%9D%A1%E8%A7%89%23) `48.9K 🔥` `NEW`

Updated at 2026-11-15 03:50:52

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
