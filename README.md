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

1. [河南春晚 大量广告里穿插了少量节目 (Henan Spring Festival Gala has a large number of advertisements interspersed with a small number of programs)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%20%E5%A4%A7%E9%87%8F%E5%B9%BF%E5%91%8A%E9%87%8C%E7%A9%BF%E6%8F%92%E4%BA%86%E5%B0%91%E9%87%8F%E8%8A%82%E7%9B%AE%23) `342.0K 🔥` `NEW`
1. [千问超级免单卡](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E8%B6%85%E7%BA%A7%E5%85%8D%E5%8D%95%E5%8D%A1%23) `181.5K 🔥` `NEW`
1. [黄子弘凡红包](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E7%BA%A2%E5%8C%85%23) `176.8K 🔥` `NEW`
1. [看河南春晚领千问红包](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%E9%A2%86%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%23) `175.7K 🔥` `NEW`
1. [辞职当守岛人女高管下岛时哭了](https://s.weibo.com/weibo?q=%23%E8%BE%9E%E8%81%8C%E5%BD%93%E5%AE%88%E5%B2%9B%E4%BA%BA%E5%A5%B3%E9%AB%98%E7%AE%A1%E4%B8%8B%E5%B2%9B%E6%97%B6%E5%93%AD%E4%BA%86%23) `159.5K 🔥` `NEW`
1. [成都蒲江项目招引建设问题调查结果](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E8%92%B2%E6%B1%9F%E9%A1%B9%E7%9B%AE%E6%8B%9B%E5%BC%95%E5%BB%BA%E8%AE%BE%E9%97%AE%E9%A2%98%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `157.2K 🔥` `NEW`
1. [川大通报王竹卿事件调查结果](https://s.weibo.com/weibo?q=%23%E5%B7%9D%E5%A4%A7%E9%80%9A%E6%8A%A5%E7%8E%8B%E7%AB%B9%E5%8D%BF%E4%BA%8B%E4%BB%B6%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `157.2K 🔥` `NEW`
1. [王昶钱天一情人节仪式感](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E9%92%B1%E5%A4%A9%E4%B8%80%E6%83%85%E4%BA%BA%E8%8A%82%E4%BB%AA%E5%BC%8F%E6%84%9F%23) `149.2K 🔥` `NEW`
1. [只是天堂伞的尖尖罢了](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%98%AF%E5%A4%A9%E5%A0%82%E4%BC%9E%E7%9A%84%E5%B0%96%E5%B0%96%E7%BD%A2%E4%BA%86%23) `123.9K 🔥` `NEW`
1. [中国2银2铜暂列冬奥奖牌榜第18](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD2%E9%93%B62%E9%93%9C%E6%9A%82%E5%88%97%E5%86%AC%E5%A5%A5%E5%A5%96%E7%89%8C%E6%A6%9C%E7%AC%AC18%23) `104.4K 🔥` `NEW`
1. [黄子韬回应扇了徐艺洋 (Huang Zitao responded by slapping Xu Yiyang)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9B%9E%E5%BA%94%E6%89%87%E4%BA%86%E5%BE%90%E8%89%BA%E6%B4%8B%23) `101.3K 🔥` `NEW`
1. [周冬雨从不发朋友圈](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E4%BB%8E%E4%B8%8D%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `89.7K 🔥` `NEW`
1. [河南春晚神还原樊楼飞天舞](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%E7%A5%9E%E8%BF%98%E5%8E%9F%E6%A8%8A%E6%A5%BC%E9%A3%9E%E5%A4%A9%E8%88%9E%23) `86.8K 🔥` `NEW`
1. [河南卫视春晚](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `779.3K 🔥` `+212%`
1. [京东超市承包今日份浪漫 (Jingdong Supermarket Contracts Today’s Romance)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E8%B6%85%E5%B8%82%E6%89%BF%E5%8C%85%E4%BB%8A%E6%97%A5%E4%BB%BD%E6%B5%AA%E6%BC%AB%23) `499.3K 🔥` `+108%`
1. [米兰花滑惨案是什么级别的爆冷 (What level of upset was the Milan figure skating tragedy?)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E8%8A%B1%E6%BB%91%E6%83%A8%E6%A1%88%E6%98%AF%E4%BB%80%E4%B9%88%E7%BA%A7%E5%88%AB%E7%9A%84%E7%88%86%E5%86%B7%23) `256.4K 🔥` `+54%`
1. [刘一手承认欠款2000万](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%80%E6%89%8B%E6%89%BF%E8%AE%A4%E6%AC%A0%E6%AC%BE2000%E4%B8%87%23) `186.3K 🔥` `+42%`
1. [王橹杰高会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%AB%98%E4%BC%9A%23) `170.2K 🔥` `+34%`
1. [王玉雯妈妈最喜欢的扎紧点发型](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%A6%88%E5%A6%88%E6%9C%80%E5%96%9C%E6%AC%A2%E7%9A%84%E6%89%8E%E7%B4%A7%E7%82%B9%E5%8F%91%E5%9E%8B%23) `157.3K 🔥` `+40%`
1. [吃猪脚被卡喉10岁男孩现已去世](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%8C%AA%E8%84%9A%E8%A2%AB%E5%8D%A1%E5%96%8910%E5%B2%81%E7%94%B7%E5%AD%A9%E7%8E%B0%E5%B7%B2%E5%8E%BB%E4%B8%96%23) `157.3K 🔥` `+22%`
1. [小酒窝做了长美甲 (My dimples got long manicure)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E5%81%9A%E4%BA%86%E9%95%BF%E7%BE%8E%E7%94%B2%23) `157.3K 🔥` `+21%`
1. [王橹杰穆祉丞加上联系方式了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%A9%86%E7%A5%89%E4%B8%9E%E5%8A%A0%E4%B8%8A%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F%E4%BA%86%23) `157.2K 🔥` `+37%`
1. [为什么招上门女婿的女性越来越多了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%8B%9B%E4%B8%8A%E9%97%A8%E5%A5%B3%E5%A9%BF%E7%9A%84%E5%A5%B3%E6%80%A7%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E4%BA%86%23) `157.2K 🔥` `+40%`
1. [王鹤棣让黄子韬跟徐艺洋离婚 (Wang Hedi asked Huang Zitao to divorce Xu Yiyang)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%AE%A9%E9%BB%84%E5%AD%90%E9%9F%AC%E8%B7%9F%E5%BE%90%E8%89%BA%E6%B4%8B%E7%A6%BB%E5%A9%9A%23) `156.0K 🔥` `+25%`
1. [4人撤离车辆20秒后轿车被撞变形](https://s.weibo.com/weibo?q=%234%E4%BA%BA%E6%92%A4%E7%A6%BB%E8%BD%A6%E8%BE%8620%E7%A7%92%E5%90%8E%E8%BD%BF%E8%BD%A6%E8%A2%AB%E6%92%9E%E5%8F%98%E5%BD%A2%23) `149.9K 🔥` `+23%`
1. [河南春晚](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%23) `147.9K 🔥` `+26%`
1. [人民日报红包 (People's Daily red envelope)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E7%BA%A2%E5%8C%85%23) `1.1M 🔥`
1. [我和国宝过大年 (I celebrate the New Year with the national treasure)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%92%8C%E5%9B%BD%E5%AE%9D%E8%BF%87%E5%A4%A7%E5%B9%B4%23) `636.2K 🔥`
1. [红包 (Red envelope)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `493.6K 🔥`
1. [这么大的架子竟然一点官都没有 (Such a big arrogance has no official status at all)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E6%9E%B6%E5%AD%90%E7%AB%9F%E7%84%B6%E4%B8%80%E7%82%B9%E5%AE%98%E9%83%BD%E6%B2%A1%E6%9C%89%23) `278.8K 🔥`
1. [突然发现朋友圈没人晒花了 (Suddenly I found that no one in the circle of friends was showing off their flowers.)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B2%A1%E4%BA%BA%E6%99%92%E8%8A%B1%E4%BA%86%23) `243.6K 🔥`
1. [白鹿虞书欣同款剧宣姿势](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%90%8C%E6%AC%BE%E5%89%A7%E5%AE%A3%E5%A7%BF%E5%8A%BF%23) `183.8K 🔥`
1. [情人节 (Valentine's Day)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%23) `173.6K 🔥`
1. [女子称健身被哄骗注射药物变阴阳人 (Woman says she was tricked into injecting drugs to become intersex while working out)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%81%A5%E8%BA%AB%E8%A2%AB%E5%93%84%E9%AA%97%E6%B3%A8%E5%B0%84%E8%8D%AF%E7%89%A9%E5%8F%98%E9%98%B4%E9%98%B3%E4%BA%BA%23) `165.5K 🔥`
1. [北大毕业年薪180万想做上门女婿](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E6%AF%95%E4%B8%9A%E5%B9%B4%E8%96%AA180%E4%B8%87%E6%83%B3%E5%81%9A%E4%B8%8A%E9%97%A8%E5%A5%B3%E5%A9%BF%23) `157.1K 🔥`
1. [iPhone18Pro五项新功能](https://s.weibo.com/weibo?q=%23iPhone18Pro%E4%BA%94%E9%A1%B9%E6%96%B0%E5%8A%9F%E8%83%BD%23) `156.4K 🔥`
1. [千问回应大免单再加3天](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%9B%9E%E5%BA%94%E5%A4%A7%E5%85%8D%E5%8D%95%E5%86%8D%E5%8A%A03%E5%A4%A9%23) `148.5K 🔥`
1. [宋轶好刚](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E5%A5%BD%E5%88%9A%23) `139.7K 🔥`
1. [网友偶遇了易烊千玺 (Netizen met Yi Yang Qianxi)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%81%B6%E9%81%87%E4%BA%86%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `122.7K 🔥`
1. [张凌赫陈都灵 高智感马场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%99%88%E9%83%BD%E7%81%B5%20%E9%AB%98%E6%99%BA%E6%84%9F%E9%A9%AC%E5%9C%BA%23) `94.1K 🔥`
1. [王安宇 潦草小狗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%20%E6%BD%A6%E8%8D%89%E5%B0%8F%E7%8B%97%23) `89.9K 🔥`
1. [申惠善李俊赫新剧杀疯了 (Shin Hye Sun and Lee Jun Hyuk’s new drama is crazy)](https://s.weibo.com/weibo?q=%23%E7%94%B3%E6%83%A0%E5%96%84%E6%9D%8E%E4%BF%8A%E8%B5%AB%E6%96%B0%E5%89%A7%E6%9D%80%E7%96%AF%E4%BA%86%23) `87.4K 🔥`
1. [出现6个症状的人请立刻休息 (People who have 6 symptoms should rest immediately)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%8E%B06%E4%B8%AA%E7%97%87%E7%8A%B6%E7%9A%84%E4%BA%BA%E8%AF%B7%E7%AB%8B%E5%88%BB%E4%BC%91%E6%81%AF%23) `86.9K 🔥`
1. [中国冰壶女队8比7意大利 (Chinese women's curling team 8-7 Italy)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%B0%E5%A3%B6%E5%A5%B3%E9%98%9F8%E6%AF%947%E6%84%8F%E5%A4%A7%E5%88%A9%23) `84.6K 🔥`
1. [暖阳发文 (Nuanyang posted a message)](https://s.weibo.com/weibo?q=%23%E6%9A%96%E9%98%B3%E5%8F%91%E6%96%87%23) `81.5K 🔥`
1. [红包分组](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `285.3K 🔥` `-66%`
1. [女子998买全程票变半程警方已介入](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90998%E4%B9%B0%E5%85%A8%E7%A8%8B%E7%A5%A8%E5%8F%98%E5%8D%8A%E7%A8%8B%E8%AD%A6%E6%96%B9%E5%B7%B2%E4%BB%8B%E5%85%A5%23) `187.3K 🔥` `-26%`
1. [哈尔滨18米雪王鸡王被连夜拆除 (The 18-meter Snow King and Chicken King in Harbin was demolished overnight)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A818%E7%B1%B3%E9%9B%AA%E7%8E%8B%E9%B8%A1%E7%8E%8B%E8%A2%AB%E8%BF%9E%E5%A4%9C%E6%8B%86%E9%99%A4%23) `123.4K 🔥` `-33%`
1. [汉尼拔用的是张小泉菜刀](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%B0%BC%E6%8B%94%E7%94%A8%E7%9A%84%E6%98%AF%E5%BC%A0%E5%B0%8F%E6%B3%89%E8%8F%9C%E5%88%80%23) `91.9K 🔥` `-26%`
1. [妈妈回应林孝埈加入中国队 (Mother responds to Lin Xiaojuan joining the Chinese team)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E6%9E%97%E5%AD%9D%E5%9F%88%E5%8A%A0%E5%85%A5%E4%B8%AD%E5%9B%BD%E9%98%9F%23) `87.7K 🔥` `-36%`
1. [王一博边走边唱 (Wang Yibo sings while walking)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%BE%B9%E8%B5%B0%E8%BE%B9%E5%94%B1%23) `84.6K 🔥` `-23%`

Updated at 2026-02-14 20:22:34

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
