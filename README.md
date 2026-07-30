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

1. [小米澎程N90价格 (Xiaomi Pengcheng N90 price)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90%E4%BB%B7%E6%A0%BC%23) `2.3M 🔥` `NEW`
1. [披荆斩棘阵容](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E9%98%B5%E5%AE%B9%23) `1.0M 🔥` `NEW`
1. [豆包究竟见过多少人的糗事](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%A9%B6%E7%AB%9F%E8%A7%81%E8%BF%87%E5%A4%9A%E5%B0%91%E4%BA%BA%E7%9A%84%E7%B3%97%E4%BA%8B%23) `730.8K 🔥` `NEW`
1. [小米澎程N70](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN70%23) `631.4K 🔥` `NEW`
1. [陈伟霆九门老九门出场对比](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%B9%9D%E9%97%A8%E8%80%81%E4%B9%9D%E9%97%A8%E5%87%BA%E5%9C%BA%E5%AF%B9%E6%AF%94%23) `489.9K 🔥` `NEW`
1. [曝BLG联系不到Bin](https://s.weibo.com/weibo?q=%23%E6%9B%9DBLG%E8%81%94%E7%B3%BB%E4%B8%8D%E5%88%B0Bin%23) `406.3K 🔥` `NEW`
1. [小米澎程像在卖房](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E5%83%8F%E5%9C%A8%E5%8D%96%E6%88%BF%23) `406.3K 🔥` `NEW`
1. [迪丽热巴宋威龙碰杯](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%AE%8B%E5%A8%81%E9%BE%99%E7%A2%B0%E6%9D%AF%23) `355.3K 🔥` `NEW`
1. [Angelababy出门三个手机起步](https://s.weibo.com/weibo?q=%23Angelababy%E5%87%BA%E9%97%A8%E4%B8%89%E4%B8%AA%E6%89%8B%E6%9C%BA%E8%B5%B7%E6%AD%A5%23) `351.1K 🔥` `NEW`
1. [Mikimoto北京活动热巴宋威龙同框](https://s.weibo.com/weibo?q=%23Mikimoto%E5%8C%97%E4%BA%AC%E6%B4%BB%E5%8A%A8%E7%83%AD%E5%B7%B4%E5%AE%8B%E5%A8%81%E9%BE%99%E5%90%8C%E6%A1%86%23) `343.8K 🔥` `NEW`
1. [丈夫隐忍两年妻子却把婚外情告诉孩子 (Husband withholds it from wife for two years but tells children about extramarital affair)](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E9%9A%90%E5%BF%8D%E4%B8%A4%E5%B9%B4%E5%A6%BB%E5%AD%90%E5%8D%B4%E6%8A%8A%E5%A9%9A%E5%A4%96%E6%83%85%E5%91%8A%E8%AF%89%E5%AD%A9%E5%AD%90%23) `338.9K 🔥` `NEW`
1. [上海禁止户外广告贩卖容貌焦虑](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%A6%81%E6%AD%A2%E6%88%B7%E5%A4%96%E5%B9%BF%E5%91%8A%E8%B4%A9%E5%8D%96%E5%AE%B9%E8%B2%8C%E7%84%A6%E8%99%91%23) `337.1K 🔥` `NEW`
1. [中方回应无人机制造商接近中国海军](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%88%B6%E9%80%A0%E5%95%86%E6%8E%A5%E8%BF%91%E4%B8%AD%E5%9B%BD%E6%B5%B7%E5%86%9B%23) `334.4K 🔥` `NEW`
1. [婚外胚胎事件患癌妻子愤怒发声](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E4%BA%8B%E4%BB%B6%E6%82%A3%E7%99%8C%E5%A6%BB%E5%AD%90%E6%84%A4%E6%80%92%E5%8F%91%E5%A3%B0%23) `329.1K 🔥` `NEW`
1. [蔡徐坤伴手礼](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `326.0K 🔥` `NEW`
1. [西南政法大学官网变黑白](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%8D%97%E6%94%BF%E6%B3%95%E5%A4%A7%E5%AD%A6%E5%AE%98%E7%BD%91%E5%8F%98%E9%BB%91%E7%99%BD%23) `315.6K 🔥` `NEW`
1. [凤囚凰 古偶烂片史上难以逾越的高峰](https://s.weibo.com/weibo?q=%23%E5%87%A4%E5%9B%9A%E5%87%B0%20%E5%8F%A4%E5%81%B6%E7%83%82%E7%89%87%E5%8F%B2%E4%B8%8A%E9%9A%BE%E4%BB%A5%E9%80%BE%E8%B6%8A%E7%9A%84%E9%AB%98%E5%B3%B0%23) `311.5K 🔥` `NEW`
1. [伊朗称摧毁3架F35战机](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%91%A7%E6%AF%813%E6%9E%B6F35%E6%88%98%E6%9C%BA%23) `281.7K 🔥` `NEW`
1. [小米澎程7人满载还可装7个行李箱](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B7%E4%BA%BA%E6%BB%A1%E8%BD%BD%E8%BF%98%E5%8F%AF%E8%A3%857%E4%B8%AA%E8%A1%8C%E6%9D%8E%E7%AE%B1%23) `281.4K 🔥` `NEW`
1. [小米澎程SUV首发评测](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BSUV%E9%A6%96%E5%8F%91%E8%AF%84%E6%B5%8B%23) `251.8K 🔥` `NEW`
1. [网友靠分趾鞋认出Lisa (Netizens recognized Lisa by her split-toed shoes)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%9D%A0%E5%88%86%E8%B6%BE%E9%9E%8B%E8%AE%A4%E5%87%BALisa%23) `246.5K 🔥` `NEW`
1. [王楚然开着张凌赫就出来了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%BC%80%E7%9D%80%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B0%B1%E5%87%BA%E6%9D%A5%E4%BA%86%23) `246.3K 🔥` `NEW`
1. [豆包飞书团队合并](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E9%A3%9E%E4%B9%A6%E5%9B%A2%E9%98%9F%E5%90%88%E5%B9%B6%23) `236.1K 🔥` `NEW`
1. [蜘蛛侠](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%23) `235.8K 🔥` `NEW`
1. [美股芯片半导体反弹](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E8%8A%AF%E7%89%87%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%8F%8D%E5%BC%B9%23) `233.0K 🔥` `NEW`
1. [曾沛慈置顶陈瑶九门剧宣](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%BD%AE%E9%A1%B6%E9%99%88%E7%91%B6%E4%B9%9D%E9%97%A8%E5%89%A7%E5%AE%A3%23) `231.9K 🔥` `NEW`
1. [Mikimoto光启万象自有锋芒](https://s.weibo.com/weibo?q=%23Mikimoto%E5%85%89%E5%90%AF%E4%B8%87%E8%B1%A1%E8%87%AA%E6%9C%89%E9%94%8B%E8%8A%92%23) `221.9K 🔥` `NEW`
1. [中央定调下半年财政工作重点](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E5%AE%9A%E8%B0%83%E4%B8%8B%E5%8D%8A%E5%B9%B4%E8%B4%A2%E6%94%BF%E5%B7%A5%E4%BD%9C%E9%87%8D%E7%82%B9%23) `218.9K 🔥` `NEW`
1. [VOGUE](https://s.weibo.com/weibo?q=%23VOGUE%23) `217.5K 🔥` `NEW`
1. [雷军发布会再飙英文](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%8F%91%E5%B8%83%E4%BC%9A%E5%86%8D%E9%A3%99%E8%8B%B1%E6%96%87%23) `201.4K 🔥` `NEW`
1. [京城大师赛 (Beijing Masters)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E5%9F%8E%E5%A4%A7%E5%B8%88%E8%B5%9B%23) `187.9K 🔥` `NEW`
1. [陈伟霆曾舜晞又把衣服穿上了](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E6%9B%BE%E8%88%9C%E6%99%9E%E5%8F%88%E6%8A%8A%E8%A1%A3%E6%9C%8D%E7%A9%BF%E4%B8%8A%E4%BA%86%23) `183.5K 🔥` `NEW`
1. [人民军队制胜向强](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%86%9B%E9%98%9F%E5%88%B6%E8%83%9C%E5%90%91%E5%BC%BA%23) `793.5K 🔥` `+28%`
1. [朱婷拒绝更高报价续约意大利](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%A9%B7%E6%8B%92%E7%BB%9D%E6%9B%B4%E9%AB%98%E6%8A%A5%E4%BB%B7%E7%BB%AD%E7%BA%A6%E6%84%8F%E5%A4%A7%E5%88%A9%23) `549.8K 🔥` `+26%`
1. [6旬老人坚持地中海饮食3个月瘦37斤](https://s.weibo.com/weibo?q=%236%E6%97%AC%E8%80%81%E4%BA%BA%E5%9D%9A%E6%8C%81%E5%9C%B0%E4%B8%AD%E6%B5%B7%E9%A5%AE%E9%A3%9F3%E4%B8%AA%E6%9C%88%E7%98%A637%E6%96%A4%23) `356.5K 🔥` `+57%`
1. [竹知了 被投诉](https://s.weibo.com/weibo?q=%23%E7%AB%B9%E7%9F%A5%E4%BA%86%20%E8%A2%AB%E6%8A%95%E8%AF%89%23) `331.6K 🔥` `+26%`
1. [泰国部长称不欢迎给他人造成损害的游客](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E9%83%A8%E9%95%BF%E7%A7%B0%E4%B8%8D%E6%AC%A2%E8%BF%8E%E7%BB%99%E4%BB%96%E4%BA%BA%E9%80%A0%E6%88%90%E6%8D%9F%E5%AE%B3%E7%9A%84%E6%B8%B8%E5%AE%A2%23) `352.1K 🔥`
1. [尹新月 赵丽颖](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%96%B0%E6%9C%88%20%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `347.8K 🔥`
1. [迪丽热巴裙子 闵塔鲨](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A3%99%E5%AD%90%20%E9%97%B5%E5%A1%94%E9%B2%A8%23) `341.5K 🔥`
1. [九门首播口碑](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E9%A6%96%E6%92%AD%E5%8F%A3%E7%A2%91%23) `337.3K 🔥`
1. [是谁一直在往中文里加片假名 (Who keeps adding katakana to Chinese?)](https://s.weibo.com/weibo?q=%23%E6%98%AF%E8%B0%81%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%BE%80%E4%B8%AD%E6%96%87%E9%87%8C%E5%8A%A0%E7%89%87%E5%81%87%E5%90%8D%23) `326.8K 🔥`
1. [刘亦菲旗袍](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%97%97%E8%A2%8D%23) `281.3K 🔥`
1. [偶遇赵丽颖穿吊带逛街](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%A9%BF%E5%90%8A%E5%B8%A6%E9%80%9B%E8%A1%97%23) `234.3K 🔥`
1. [小米澎程N90](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90%23) `346.5K 🔥` `-25%`
1. [周杰伦樊振东同框](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%90%8C%E6%A1%86%23) `296.6K 🔥` `-23%`
1. [多囊卵巢综合征为什么要更名](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%8A%E5%8D%B5%E5%B7%A2%E7%BB%BC%E5%90%88%E5%BE%81%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E6%9B%B4%E5%90%8D%23) `271.6K 🔥` `-31%`
1. [河南多地重发三支一扶名单人数变少](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%A4%9A%E5%9C%B0%E9%87%8D%E5%8F%91%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E5%90%8D%E5%8D%95%E4%BA%BA%E6%95%B0%E5%8F%98%E5%B0%91%23) `232.4K 🔥` `-41%`
1. [吴莫愁给张凌赫王楚然道歉](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%8E%AB%E6%84%81%E7%BB%99%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%81%93%E6%AD%89%23) `183.7K 🔥` `-53%`
1. [小米澎程发布会 (Xiaomi Pengcheng press conference)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E5%8F%91%E5%B8%83%E4%BC%9A%23) `169.9K 🔥` `-85%`

Updated at 2026-07-30 22:51:06

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
