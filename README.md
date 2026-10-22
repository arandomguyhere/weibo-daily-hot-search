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

1. [后会友期 想请不敢请的都放观察室了](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%20%E6%83%B3%E8%AF%B7%E4%B8%8D%E6%95%A2%E8%AF%B7%E7%9A%84%E9%83%BD%E6%94%BE%E8%A7%82%E5%AF%9F%E5%AE%A4%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [人民日报谈星巴克消费入座](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%B0%88%E6%98%9F%E5%B7%B4%E5%85%8B%E6%B6%88%E8%B4%B9%E5%85%A5%E5%BA%A7%23) `828.1K 🔥` `NEW`
1. [我国面向全球的自贸网络已经初步成型](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E9%9D%A2%E5%90%91%E5%85%A8%E7%90%83%E7%9A%84%E8%87%AA%E8%B4%B8%E7%BD%91%E7%BB%9C%E5%B7%B2%E7%BB%8F%E5%88%9D%E6%AD%A5%E6%88%90%E5%9E%8B%23) `651.8K 🔥` `NEW`
1. [赵丽颖霍建华 剧播不好别怪妆造](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%9C%8D%E5%BB%BA%E5%8D%8E%20%E5%89%A7%E6%92%AD%E4%B8%8D%E5%A5%BD%E5%88%AB%E6%80%AA%E5%A6%86%E9%80%A0%23) `493.4K 🔥` `NEW`
1. [许超医生谈李子祺称参加过4级手术](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E8%B6%85%E5%8C%BB%E7%94%9F%E8%B0%88%E6%9D%8E%E5%AD%90%E7%A5%BA%E7%A7%B0%E5%8F%82%E5%8A%A0%E8%BF%874%E7%BA%A7%E6%89%8B%E6%9C%AF%23) `488.2K 🔥` `NEW`
1. [人民日报评医学生盲猜病情](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%8C%BB%E5%AD%A6%E7%94%9F%E7%9B%B2%E7%8C%9C%E7%97%85%E6%83%85%23) `481.5K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `452.5K 🔥` `NEW`
1. [国乒女团vs日本](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2vs%E6%97%A5%E6%9C%AC%23) `447.8K 🔥` `NEW`
1. [厉娜恨过许飞非常久](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E6%81%A8%E8%BF%87%E8%AE%B8%E9%A3%9E%E9%9D%9E%E5%B8%B8%E4%B9%85%23) `429.4K 🔥` `NEW`
1. [波兰爆发大规模抗议活动](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E5%85%B0%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8A%97%E8%AE%AE%E6%B4%BB%E5%8A%A8%23) `376.3K 🔥` `NEW`
1. [银行回应每天仅营业3.5小时](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%9B%9E%E5%BA%94%E6%AF%8F%E5%A4%A9%E4%BB%85%E8%90%A5%E4%B8%9A3.5%E5%B0%8F%E6%97%B6%23) `345.0K 🔥` `NEW`
1. [41岁女子存百万后去世](https://s.weibo.com/weibo?q=%2341%E5%B2%81%E5%A5%B3%E5%AD%90%E5%AD%98%E7%99%BE%E4%B8%87%E5%90%8E%E5%8E%BB%E4%B8%96%23) `344.1K 🔥` `NEW`
1. [国乒男团vs韩国](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2vs%E9%9F%A9%E5%9B%BD%23) `343.7K 🔥` `NEW`
1. [九尾 50呢](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%2050%E5%91%A2%23) `341.1K 🔥` `NEW`
1. [亚锦赛国乒女团2比2日本](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%94%A6%E8%B5%9B%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A22%E6%AF%942%E6%97%A5%E6%9C%AC%23) `340.5K 🔥` `NEW`
1. [白鹿工作室注销](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%B3%A8%E9%94%80%23) `339.2K 🔥` `NEW`
1. [那英花篮写着战战向前冲姐姐紧相随](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E8%8A%B1%E7%AF%AE%E5%86%99%E7%9D%80%E6%88%98%E6%88%98%E5%90%91%E5%89%8D%E5%86%B2%E5%A7%90%E5%A7%90%E7%B4%A7%E7%9B%B8%E9%9A%8F%23) `338.5K 🔥` `NEW`
1. [Dior厦门首店](https://s.weibo.com/weibo?q=%23Dior%E5%8E%A6%E9%97%A8%E9%A6%96%E5%BA%97%23) `337.3K 🔥` `NEW`
1. [孟羽童说才明白董明珠热爱斗争的含金量](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E7%BE%BD%E7%AB%A5%E8%AF%B4%E6%89%8D%E6%98%8E%E7%99%BD%E8%91%A3%E6%98%8E%E7%8F%A0%E7%83%AD%E7%88%B1%E6%96%97%E4%BA%89%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `336.0K 🔥` `NEW`
1. [扎威回应凯斯勒首秀刷爆湖人纪录](https://s.weibo.com/weibo?q=%23%E6%89%8E%E5%A8%81%E5%9B%9E%E5%BA%94%E5%87%AF%E6%96%AF%E5%8B%92%E9%A6%96%E7%A7%80%E5%88%B7%E7%88%86%E6%B9%96%E4%BA%BA%E7%BA%AA%E5%BD%95%23) `334.7K 🔥` `NEW`
1. [月嫂说宝宝只有两件衣服](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%AB%82%E8%AF%B4%E5%AE%9D%E5%AE%9D%E5%8F%AA%E6%9C%89%E4%B8%A4%E4%BB%B6%E8%A1%A3%E6%9C%8D%23) `333.4K 🔥` `NEW`
1. [女子称惠州海景房跌剩一千八](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E6%83%A0%E5%B7%9E%E6%B5%B7%E6%99%AF%E6%88%BF%E8%B7%8C%E5%89%A9%E4%B8%80%E5%8D%83%E5%85%AB%23) `331.0K 🔥` `NEW`
1. [星巴克消费入座守住的是谁的权益](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%E6%B6%88%E8%B4%B9%E5%85%A5%E5%BA%A7%E5%AE%88%E4%BD%8F%E7%9A%84%E6%98%AF%E8%B0%81%E7%9A%84%E6%9D%83%E7%9B%8A%23) `330.2K 🔥` `NEW`
1. [明天尚公主就抬嫁金钗在单更什么](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%A4%A9%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%B0%B1%E6%8A%AC%E5%AB%81%E9%87%91%E9%92%97%E5%9C%A8%E5%8D%95%E6%9B%B4%E4%BB%80%E4%B9%88%23) `329.5K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `317.9K 🔥` `NEW`
1. [这一刻突然明白了有车的意义](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%88%BB%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E4%BA%86%E6%9C%89%E8%BD%A6%E7%9A%84%E6%84%8F%E4%B9%89%23) `298.3K 🔥` `NEW`
1. [KPL抽签](https://s.weibo.com/weibo?q=%23KPL%E6%8A%BD%E7%AD%BE%23) `293.6K 🔥` `NEW`
1. [陈天润 前女友](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A4%A9%E6%B6%A6%20%E5%89%8D%E5%A5%B3%E5%8F%8B%23) `270.6K 🔥` `NEW`
1. [厉娜许飞当面对质](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E8%AE%B8%E9%A3%9E%E5%BD%93%E9%9D%A2%E5%AF%B9%E8%B4%A8%23) `261.4K 🔥` `NEW`
1. [试拍王一博被朱珠美晕](https://s.weibo.com/weibo?q=%23%E8%AF%95%E6%8B%8D%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%A2%AB%E6%9C%B1%E7%8F%A0%E7%BE%8E%E6%99%95%23) `259.6K 🔥` `NEW`
1. [2岁男童坠亡妈妈说了3个如果](https://s.weibo.com/weibo?q=%232%E5%B2%81%E7%94%B7%E7%AB%A5%E5%9D%A0%E4%BA%A1%E5%A6%88%E5%A6%88%E8%AF%B4%E4%BA%863%E4%B8%AA%E5%A6%82%E6%9E%9C%23) `243.8K 🔥` `NEW`
1. [王艺迪vs桥本帆乃香](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AAvs%E6%A1%A5%E6%9C%AC%E5%B8%86%E4%B9%83%E9%A6%99%23) `221.8K 🔥` `NEW`
1. [阿玛尼武汉新店开业排面](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%8E%9B%E5%B0%BC%E6%AD%A6%E6%B1%89%E6%96%B0%E5%BA%97%E5%BC%80%E4%B8%9A%E6%8E%92%E9%9D%A2%23) `218.8K 🔥` `NEW`
1. [虞书欣直播](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%23) `218.5K 🔥` `NEW`
1. [决胜盘王艺迪对阵桥本帆乃香](https://s.weibo.com/weibo?q=%23%E5%86%B3%E8%83%9C%E7%9B%98%E7%8E%8B%E8%89%BA%E8%BF%AA%E5%AF%B9%E9%98%B5%E6%A1%A5%E6%9C%AC%E5%B8%86%E4%B9%83%E9%A6%99%23) `215.4K 🔥` `NEW`
1. [黄婷婷 你去网上搜吧](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A9%B7%E5%A9%B7%20%E4%BD%A0%E5%8E%BB%E7%BD%91%E4%B8%8A%E6%90%9C%E5%90%A7%23) `206.3K 🔥` `NEW`
1. [嫁金钗毛林林演技](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E6%AF%9B%E6%9E%97%E6%9E%97%E6%BC%94%E6%8A%80%23) `203.8K 🔥` `NEW`
1. [网友称吃了快3瓶牡蛎精胶囊傻眼了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%A7%B0%E5%90%83%E4%BA%86%E5%BF%AB3%E7%93%B6%E7%89%A1%E8%9B%8E%E7%B2%BE%E8%83%B6%E5%9B%8A%E5%82%BB%E7%9C%BC%E4%BA%86%23) `202.4K 🔥` `NEW`
1. [宋宁峰目前专心在家照顾两个孩子](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%AE%81%E5%B3%B0%E7%9B%AE%E5%89%8D%E4%B8%93%E5%BF%83%E5%9C%A8%E5%AE%B6%E7%85%A7%E9%A1%BE%E4%B8%A4%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `201.7K 🔥` `NEW`
1. [喜人奇妙夜](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%BA%BA%E5%A5%87%E5%A6%99%E5%A4%9C%23) `199.6K 🔥` `NEW`
1. [十个勤天](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%23) `192.3K 🔥` `NEW`
1. [国乒女团反超日本队](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E5%8F%8D%E8%B6%85%E6%97%A5%E6%9C%AC%E9%98%9F%23) `191.3K 🔥` `NEW`
1. [小城良方破9000](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E7%A0%B49000%23) `186.0K 🔥` `NEW`
1. [多家券商回应江浙地区有私募爆仓](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E5%88%B8%E5%95%86%E5%9B%9E%E5%BA%94%E6%B1%9F%E6%B5%99%E5%9C%B0%E5%8C%BA%E6%9C%89%E7%A7%81%E5%8B%9F%E7%88%86%E4%BB%93%23) `181.4K 🔥` `NEW`
1. [VOGUE阵容](https://s.weibo.com/weibo?q=%23VOGUE%E9%98%B5%E5%AE%B9%23) `177.5K 🔥` `NEW`
1. [红果把观众的时间标好了价](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E6%8A%8A%E8%A7%82%E4%BC%97%E7%9A%84%E6%97%B6%E9%97%B4%E6%A0%87%E5%A5%BD%E4%BA%86%E4%BB%B7%23) `175.7K 🔥` `NEW`
1. [李子祺10篇SCI被指挂名水刊](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AD%90%E7%A5%BA10%E7%AF%87SCI%E8%A2%AB%E6%8C%87%E6%8C%82%E5%90%8D%E6%B0%B4%E5%88%8A%23) `174.0K 🔥` `NEW`
1. [张萌后悔找马天宇上节目](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E5%90%8E%E6%82%94%E6%89%BE%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B8%8A%E8%8A%82%E7%9B%AE%23) `342.4K 🔥` `-51%`
1. [孙坚一边拍戏一边还债](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%9D%9A%E4%B8%80%E8%BE%B9%E6%8B%8D%E6%88%8F%E4%B8%80%E8%BE%B9%E8%BF%98%E5%80%BA%23) `282.4K 🔥` `-58%`
1. [马嘉祺艾米 偏偏宠爱](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E8%89%BE%E7%B1%B3%20%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%23) `210.6K 🔥` `-70%`

Updated at 2026-10-22 22:07:33

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
