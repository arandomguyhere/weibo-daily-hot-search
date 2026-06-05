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

1. [DNA组太牛了 (The DNA set is awesome)](https://s.weibo.com/weibo?q=%23DNA%E7%BB%84%E5%A4%AA%E7%89%9B%E4%BA%86%23) `5.5M 🔥` `NEW`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `1.7M 🔥` `NEW`
1. [卫星影像记录中国生态巨变](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E6%98%9F%E5%BD%B1%E5%83%8F%E8%AE%B0%E5%BD%95%E4%B8%AD%E5%9B%BD%E7%94%9F%E6%80%81%E5%B7%A8%E5%8F%98%23) `1.3M 🔥` `NEW`
1. [上淘宝超级品类周每日补贴5折起](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D%E8%B6%85%E7%BA%A7%E5%93%81%E7%B1%BB%E5%91%A8%E6%AF%8F%E6%97%A5%E8%A1%A5%E8%B4%B45%E6%8A%98%E8%B5%B7%23) `1.2M 🔥` `NEW`
1. [窦靖童帮唱一句没唱](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%B8%AE%E5%94%B1%E4%B8%80%E5%8F%A5%E6%B2%A1%E5%94%B1%23) `1.2M 🔥` `NEW`
1. [范丞丞跑男贴脸开大白鹿](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%B7%91%E7%94%B7%E8%B4%B4%E8%84%B8%E5%BC%80%E5%A4%A7%E7%99%BD%E9%B9%BF%23) `1.2M 🔥` `NEW`
1. [微博电影之夜盛典官宣](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%94%B5%E5%BD%B1%E4%B9%8B%E5%A4%9C%E7%9B%9B%E5%85%B8%E5%AE%98%E5%AE%A3%23) `1.2M 🔥` `NEW`
1. [杭州非法试管婴儿事件最新通报](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%9D%9E%E6%B3%95%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%E4%BA%8B%E4%BB%B6%E6%9C%80%E6%96%B0%E9%80%9A%E6%8A%A5%23) `1.2M 🔥` `NEW`
1. [母亲60g黄金藏水壶被女儿当废品卖了](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B260g%E9%BB%84%E9%87%91%E8%97%8F%E6%B0%B4%E5%A3%B6%E8%A2%AB%E5%A5%B3%E5%84%BF%E5%BD%93%E5%BA%9F%E5%93%81%E5%8D%96%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [国足vs新加坡](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3vs%E6%96%B0%E5%8A%A0%E5%9D%A1%23) `1.1M 🔥` `NEW`
1. [小米雷军与特斯拉陶琳互动 (Xiaomi Lei Jun interacts with Tesla Tao Lin)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%9B%B7%E5%86%9B%E4%B8%8E%E7%89%B9%E6%96%AF%E6%8B%89%E9%99%B6%E7%90%B3%E4%BA%92%E5%8A%A8%23) `1.1M 🔥` `NEW`
1. [张月好大一滴泪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%A5%BD%E5%A4%A7%E4%B8%80%E6%BB%B4%E6%B3%AA%23) `1.1M 🔥` `NEW`
1. [DNA组才838](https://s.weibo.com/weibo?q=%23DNA%E7%BB%84%E6%89%8D838%23) `1.1M 🔥` `NEW`
1. [荔枝冰奶](https://s.weibo.com/weibo?q=%23%E8%8D%94%E6%9E%9D%E5%86%B0%E5%A5%B6%23) `996.6K 🔥` `NEW`
1. [张碧晨发挥最好的一期](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E5%8F%91%E6%8C%A5%E6%9C%80%E5%A5%BD%E7%9A%84%E4%B8%80%E6%9C%9F%23) `995.4K 🔥` `NEW`
1. [尤长靖锤娜丽莎 意外好听](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E9%95%BF%E9%9D%96%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%20%E6%84%8F%E5%A4%96%E5%A5%BD%E5%90%AC%23) `982.8K 🔥` `NEW`
1. [曾沛慈嗓子哑成这样](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%97%93%E5%AD%90%E5%93%91%E6%88%90%E8%BF%99%E6%A0%B7%23) `844.8K 🔥` `NEW`
1. [国足半场2比0新加坡](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E5%8D%8A%E5%9C%BA2%E6%AF%940%E6%96%B0%E5%8A%A0%E5%9D%A1%23) `804.8K 🔥` `NEW`
1. [吴莫愁rap导播切张碧晨](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%8E%AB%E6%84%81rap%E5%AF%BC%E6%92%AD%E5%88%87%E5%BC%A0%E7%A2%A7%E6%99%A8%23) `803.0K 🔥` `NEW`
1. [浪姐规则 十年内没人能懂](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%A7%84%E5%88%99%20%E5%8D%81%E5%B9%B4%E5%86%85%E6%B2%A1%E4%BA%BA%E8%83%BD%E6%87%82%23) `803.0K 🔥` `NEW`
1. [普通disco 贵在热闹 (Ordinary disco is more expensive because of the excitement)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9Adisco%20%E8%B4%B5%E5%9C%A8%E7%83%AD%E9%97%B9%23) `792.4K 🔥` `NEW`
1. [韩国丈夫偷拍并嘲笑孕晚期妻子](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%88%E5%A4%AB%E5%81%B7%E6%8B%8D%E5%B9%B6%E5%98%B2%E7%AC%91%E5%AD%95%E6%99%9A%E6%9C%9F%E5%A6%BB%E5%AD%90%23) `752.0K 🔥` `NEW`
1. [歌手直播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `717.8K 🔥` `NEW`
1. [日本宅男去世满屋收藏变垃圾](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%AE%85%E7%94%B7%E5%8E%BB%E4%B8%96%E6%BB%A1%E5%B1%8B%E6%94%B6%E8%97%8F%E5%8F%98%E5%9E%83%E5%9C%BE%23) `572.9K 🔥` `NEW`
1. [锁的麦 断断续续](https://s.weibo.com/weibo?q=%23%E9%94%81%E7%9A%84%E9%BA%A6%20%E6%96%AD%E6%96%AD%E7%BB%AD%E7%BB%AD%23) `551.8K 🔥` `NEW`
1. [高考假](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%81%87%23) `543.9K 🔥` `NEW`
1. [CBA](https://s.weibo.com/weibo?q=%23CBA%23) `543.4K 🔥` `NEW`
1. [男子吃槟榔18年嘴溃烂张不开](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%90%83%E6%A7%9F%E6%A6%9418%E5%B9%B4%E5%98%B4%E6%BA%83%E7%83%82%E5%BC%A0%E4%B8%8D%E5%BC%80%23) `543.3K 🔥` `NEW`
1. [周兴哲输给窦靖童](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%85%B4%E5%93%B2%E8%BE%93%E7%BB%99%E7%AA%A6%E9%9D%96%E7%AB%A5%23) `543.2K 🔥` `NEW`
1. [王源线下皮肤状态](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E7%BA%BF%E4%B8%8B%E7%9A%AE%E8%82%A4%E7%8A%B6%E6%80%81%23) `537.5K 🔥` `NEW`
1. [2026KPL夏季转会期 (2026KPL summer transfer period)](https://s.weibo.com/weibo?q=%232026KPL%E5%A4%8F%E5%AD%A3%E8%BD%AC%E4%BC%9A%E6%9C%9F%23) `534.7K 🔥` `NEW`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `533.4K 🔥` `NEW`
1. [原来高考完最难受的是高二生](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%AB%98%E8%80%83%E5%AE%8C%E6%9C%80%E9%9A%BE%E5%8F%97%E7%9A%84%E6%98%AF%E9%AB%98%E4%BA%8C%E7%94%9F%23) `491.3K 🔥` `NEW`
1. [歌手 轮空](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20%E8%BD%AE%E7%A9%BA%23) `475.7K 🔥` `NEW`
1. [张慧雯的独舞呢](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E7%9A%84%E7%8B%AC%E8%88%9E%E5%91%A2%23) `317.4K 🔥` `NEW`
1. [Jennie顺拐舞](https://s.weibo.com/weibo?q=%23Jennie%E9%A1%BA%E6%8B%90%E8%88%9E%23) `311.8K 🔥` `NEW`
1. [曾沛慈团又是最后出场](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2%E5%8F%88%E6%98%AF%E6%9C%80%E5%90%8E%E5%87%BA%E5%9C%BA%23) `311.2K 🔥` `NEW`
1. [宠物狗舔喝直饮水公园将追责索赔](https://s.weibo.com/weibo?q=%23%E5%AE%A0%E7%89%A9%E7%8B%97%E8%88%94%E5%96%9D%E7%9B%B4%E9%A5%AE%E6%B0%B4%E5%85%AC%E5%9B%AD%E5%B0%86%E8%BF%BD%E8%B4%A3%E7%B4%A2%E8%B5%94%23) `311.0K 🔥` `NEW`
1. [张柏芝走路姿势](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%23) `310.7K 🔥` `NEW`
1. [男子被查票1分钟辱骂列车员14次](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E6%9F%A5%E7%A5%A81%E5%88%86%E9%92%9F%E8%BE%B1%E9%AA%82%E5%88%97%E8%BD%A6%E5%91%9814%E6%AC%A1%23) `310.7K 🔥` `NEW`
1. [上海男篮vs广厦男篮 (Shanghai Men’s Basketball vs. Guangsha Men’s Basketball)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B7%E7%AF%AEvs%E5%B9%BF%E5%8E%A6%E7%94%B7%E7%AF%AE%23) `310.1K 🔥` `NEW`
1. [美股半导体股大涨](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E8%82%A1%E5%A4%A7%E6%B6%A8%23) `309.9K 🔥` `NEW`
1. [60元网购了雷霆果型榴莲](https://s.weibo.com/weibo?q=%2360%E5%85%83%E7%BD%91%E8%B4%AD%E4%BA%86%E9%9B%B7%E9%9C%86%E6%9E%9C%E5%9E%8B%E6%A6%B4%E8%8E%B2%23) `309.5K 🔥` `NEW`
1. [何浩楠说种地才是真降压](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B5%A9%E6%A5%A0%E8%AF%B4%E7%A7%8D%E5%9C%B0%E6%89%8D%E6%98%AF%E7%9C%9F%E9%99%8D%E5%8E%8B%23) `309.3K 🔥` `NEW`
1. [杨紫发郭晶晶合照](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%8F%91%E9%83%AD%E6%99%B6%E6%99%B6%E5%90%88%E7%85%A7%23) `309.2K 🔥` `NEW`
1. [高考期间有必要禁豆包吗](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%9C%9F%E9%97%B4%E6%9C%89%E5%BF%85%E8%A6%81%E7%A6%81%E8%B1%86%E5%8C%85%E5%90%97%23) `1.2M 🔥` `+493%`
1. [抖音副总裁回应豆包误判蘑菇](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E5%89%AF%E6%80%BB%E8%A3%81%E5%9B%9E%E5%BA%94%E8%B1%86%E5%8C%85%E8%AF%AF%E5%88%A4%E8%98%91%E8%8F%87%23) `860.7K 🔥` `+100%`
1. [意识到了一杯奶茶钱真不是小钱](https://s.weibo.com/weibo?q=%23%E6%84%8F%E8%AF%86%E5%88%B0%E4%BA%86%E4%B8%80%E6%9D%AF%E5%A5%B6%E8%8C%B6%E9%92%B1%E7%9C%9F%E4%B8%8D%E6%98%AF%E5%B0%8F%E9%92%B1%23) `803.0K 🔥` `+36%`
1. [奚梦瑶儿子盼何猷君追平身高](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%84%BF%E5%AD%90%E7%9B%BC%E4%BD%95%E7%8C%B7%E5%90%9B%E8%BF%BD%E5%B9%B3%E8%BA%AB%E9%AB%98%23) `692.6K 🔥` `+225%`
1. [陈学冬 避谶](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%AD%A6%E5%86%AC%20%E9%81%BF%E8%B0%B6%23) `521.0K 🔥` `+55%`
1. [一定要警惕路边的提拉米苏 (Be wary of tiramisu on the roadside)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%9A%E8%A6%81%E8%AD%A6%E6%83%95%E8%B7%AF%E8%BE%B9%E7%9A%84%E6%8F%90%E6%8B%89%E7%B1%B3%E8%8B%8F%23) `310.5K 🔥` `+51%`
1. [蔚来副总裁回应理想汽车](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5%E5%89%AF%E6%80%BB%E8%A3%81%E5%9B%9E%E5%BA%94%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A6%23) `309.8K 🔥` `+50%`

Updated at 2026-06-05 21:26:16

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
