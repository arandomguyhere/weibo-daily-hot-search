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

1. [法国0比2西班牙 (France 0-2 Spain)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD0%E6%AF%942%E8%A5%BF%E7%8F%AD%E7%89%99%23) `2.2M 🔥` `NEW`
1. [上淘宝闪购和张凌赫悦享一夏](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E5%92%8C%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%82%A6%E4%BA%AB%E4%B8%80%E5%A4%8F%23) `1.9M 🔥` `NEW`
1. [法国 梦游](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%20%E6%A2%A6%E6%B8%B8%23) `1.8M 🔥` `NEW`
1. [西班牙再进一球](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%86%8D%E8%BF%9B%E4%B8%80%E7%90%83%23) `553.0K 🔥` `NEW`
1. [法国淘汰](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%B7%98%E6%B1%B0%23) `356.4K 🔥` `NEW`
1. [西班牙 极致传控](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%20%E6%9E%81%E8%87%B4%E4%BC%A0%E6%8E%A7%23) `182.6K 🔥` `NEW`
1. [姆巴佩心态崩了](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%BF%83%E6%80%81%E5%B4%A9%E4%BA%86%23) `162.1K 🔥` `NEW`
1. [法国西班牙 总决赛提前上演](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%A5%BF%E7%8F%AD%E7%89%99%20%E6%80%BB%E5%86%B3%E8%B5%9B%E6%8F%90%E5%89%8D%E4%B8%8A%E6%BC%94%23) `157.5K 🔥` `NEW`
1. [萨利巴伤退](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%88%A9%E5%B7%B4%E4%BC%A4%E9%80%80%23) `124.8K 🔥` `NEW`
1. [留给法国的时间不多了](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%BB%99%E6%B3%95%E5%9B%BD%E7%9A%84%E6%97%B6%E9%97%B4%E4%B8%8D%E5%A4%9A%E4%BA%86%23) `118.9K 🔥` `NEW`
1. [佛得角的含金量还在上升 (Cape Verde’s gold content is still rising)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `103.4K 🔥` `NEW`
1. [亚马尔进球被吹](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E8%BF%9B%E7%90%83%E8%A2%AB%E5%90%B9%23) `47.7K 🔥` `NEW`
1. [甜茶现场支持法国队](https://s.weibo.com/weibo?q=%23%E7%94%9C%E8%8C%B6%E7%8E%B0%E5%9C%BA%E6%94%AF%E6%8C%81%E6%B3%95%E5%9B%BD%E9%98%9F%23) `47.7K 🔥` `NEW`
1. [法国vs西班牙 (France vs Spain)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E8%A5%BF%E7%8F%AD%E7%89%99%23) `5.5M 🔥` `+126%`
1. [惠民生促消费双向发力](https://s.weibo.com/weibo?q=%23%E6%83%A0%E6%B0%91%E7%94%9F%E4%BF%83%E6%B6%88%E8%B4%B9%E5%8F%8C%E5%90%91%E5%8F%91%E5%8A%9B%23) `1.9M 🔥` `+339%`
1. [奥利塞 逃牌](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%A1%9E%20%E9%80%83%E7%89%8C%23) `649.2K 🔥` `+56%`
1. [姆巴佩最忌惮的男人 (The man Mbappe fears most)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%9C%80%E5%BF%8C%E6%83%AE%E7%9A%84%E7%94%B7%E4%BA%BA%23) `288.0K 🔥` `+263%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `127.7K 🔥` `+72%`
1. [遭婚闹九级伤残伴娘被从柜子中拖出](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%A9%9A%E9%97%B9%E4%B9%9D%E7%BA%A7%E4%BC%A4%E6%AE%8B%E4%BC%B4%E5%A8%98%E8%A2%AB%E4%BB%8E%E6%9F%9C%E5%AD%90%E4%B8%AD%E6%8B%96%E5%87%BA%23) `115.4K 🔥` `+45%`
1. [裁判 严格](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%20%E4%B8%A5%E6%A0%BC%23) `169.5K 🔥`
1. [大V观赛团 (Big V viewing group)](https://s.weibo.com/weibo?q=%23%E5%A4%A7V%E8%A7%82%E8%B5%9B%E5%9B%A2%23) `60.2K 🔥`
1. [江浙沪孩子最苦的可能就是退休后 (The most difficult thing for children in Jiangsu, Zhejiang and Shanghai may be after retirement)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B5%99%E6%B2%AA%E5%AD%A9%E5%AD%90%E6%9C%80%E8%8B%A6%E7%9A%84%E5%8F%AF%E8%83%BD%E5%B0%B1%E6%98%AF%E9%80%80%E4%BC%91%E5%90%8E%23) `48.7K 🔥`
1. [妻子孕四月发现丈夫海量亲密照](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%AD%95%E5%9B%9B%E6%9C%88%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E6%B5%B7%E9%87%8F%E4%BA%B2%E5%AF%86%E7%85%A7%23) `47.7K 🔥`
1. [入伏后做好6件事攒气血 (Do 6 things to save energy and blood after entering the ambush)](https://s.weibo.com/weibo?q=%23%E5%85%A5%E4%BC%8F%E5%90%8E%E5%81%9A%E5%A5%BD6%E4%BB%B6%E4%BA%8B%E6%94%92%E6%B0%94%E8%A1%80%23) `47.7K 🔥`
1. [男子回应在妻子孕期出轨留亲密照](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E5%9C%A8%E5%A6%BB%E5%AD%90%E5%AD%95%E6%9C%9F%E5%87%BA%E8%BD%A8%E7%95%99%E4%BA%B2%E5%AF%86%E7%85%A7%23) `47.7K 🔥`
1. [小时候的头发都是自然风干的 (When I was a kid, my hair was naturally air-dried.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E5%A4%B4%E5%8F%91%E9%83%BD%E6%98%AF%E8%87%AA%E7%84%B6%E9%A3%8E%E5%B9%B2%E7%9A%84%23) `47.7K 🔥`
1. [美国一女子在大街上行为怪异](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%A4%A7%E8%A1%97%E4%B8%8A%E8%A1%8C%E4%B8%BA%E6%80%AA%E5%BC%82%23) `47.7K 🔥`
1. [为什么早年创伤多的人显年轻](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%97%A9%E5%B9%B4%E5%88%9B%E4%BC%A4%E5%A4%9A%E7%9A%84%E4%BA%BA%E6%98%BE%E5%B9%B4%E8%BD%BB%23) `47.6K 🔥`
1. [朋友圈只适合分享浮于表面的东西](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%8F%AA%E9%80%82%E5%90%88%E5%88%86%E4%BA%AB%E6%B5%AE%E4%BA%8E%E8%A1%A8%E9%9D%A2%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `47.6K 🔥`
1. [请愿网站投票C罗是GOAT](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%84%BF%E7%BD%91%E7%AB%99%E6%8A%95%E7%A5%A8C%E7%BD%97%E6%98%AFGOAT%23) `47.6K 🔥`
1. [贵阳一小区两只未牵绳德牧咬死柴犬](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E9%98%B3%E4%B8%80%E5%B0%8F%E5%8C%BA%E4%B8%A4%E5%8F%AA%E6%9C%AA%E7%89%B5%E7%BB%B3%E5%BE%B7%E7%89%A7%E5%92%AC%E6%AD%BB%E6%9F%B4%E7%8A%AC%23) `47.6K 🔥`
1. [明明心情好还是躯体化了](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%8E%E5%BF%83%E6%83%85%E5%A5%BD%E8%BF%98%E6%98%AF%E8%BA%AF%E4%BD%93%E5%8C%96%E4%BA%86%23) `47.6K 🔥`
1. [张凌赫说丁程鑫为艺术献身 (Zhang Linghe said Ding Chengxin devoted himself to art)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AF%B4%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%BA%E8%89%BA%E6%9C%AF%E7%8C%AE%E8%BA%AB%23) `47.6K 🔥`
1. [章若楠跑男化妆师评论区被阴阳白干](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%B7%91%E7%94%B7%E5%8C%96%E5%A6%86%E5%B8%88%E8%AF%84%E8%AE%BA%E5%8C%BA%E8%A2%AB%E9%98%B4%E9%98%B3%E7%99%BD%E5%B9%B2%23) `47.6K 🔥`
1. [伊朗称美进入正式战争状态](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E8%BF%9B%E5%85%A5%E6%AD%A3%E5%BC%8F%E6%88%98%E4%BA%89%E7%8A%B6%E6%80%81%23) `47.6K 🔥`
1. [央视曝光湖南一地纸上种田](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E6%B9%96%E5%8D%97%E4%B8%80%E5%9C%B0%E7%BA%B8%E4%B8%8A%E7%A7%8D%E7%94%B0%23) `47.6K 🔥`
1. [伊朗前总统内贾德被软禁 (Former Iranian President Mahmoud Ahmadinejad placed under house arrest)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%89%8D%E6%80%BB%E7%BB%9F%E5%86%85%E8%B4%BE%E5%BE%B7%E8%A2%AB%E8%BD%AF%E7%A6%81%23) `47.6K 🔥`
1. [在爸妈面前保持低智儿童状态 (Remaining like a retarded child in front of parents)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E7%88%B8%E5%A6%88%E9%9D%A2%E5%89%8D%E4%BF%9D%E6%8C%81%E4%BD%8E%E6%99%BA%E5%84%BF%E7%AB%A5%E7%8A%B6%E6%80%81%23) `47.6K 🔥`
1. [大帅身份证丢了 (Dashuai lost his ID card)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B8%85%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%B8%A2%E4%BA%86%23) `47.6K 🔥`
1. [长鑫科技公告](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%85%AC%E5%91%8A%23) `47.5K 🔥`
1. [感动中国2025年度人物 (Touching China's 2025 Person of the Year)](https://s.weibo.com/weibo?q=%23%E6%84%9F%E5%8A%A8%E4%B8%AD%E5%9B%BD2025%E5%B9%B4%E5%BA%A6%E4%BA%BA%E7%89%A9%23) `47.5K 🔥`
1. [女子追尾身亡男友副驾睡觉被起诉](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%BD%E5%B0%BE%E8%BA%AB%E4%BA%A1%E7%94%B7%E5%8F%8B%E5%89%AF%E9%A9%BE%E7%9D%A1%E8%A7%89%E8%A2%AB%E8%B5%B7%E8%AF%89%23) `47.5K 🔥`
1. [亚马尔造点 (Yamal building point)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E9%80%A0%E7%82%B9%23) `451.0K 🔥` `-31%`
1. [暑期档长剧 裸播](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%A1%A3%E9%95%BF%E5%89%A7%20%E8%A3%B8%E6%92%AD%23) `217.7K 🔥` `-30%`
1. [老人买肉买走了最难卖的一块](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%B9%B0%E8%82%89%E4%B9%B0%E8%B5%B0%E4%BA%86%E6%9C%80%E9%9A%BE%E5%8D%96%E7%9A%84%E4%B8%80%E5%9D%97%23) `157.7K 🔥` `-25%`
1. [西班牙点球破门](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%82%B9%E7%90%83%E7%A0%B4%E9%97%A8%23) `130.0K 🔥` `-66%`
1. [迪丽热巴听到周星驰女儿的表情 (Di Lieba heard Stephen Chow's daughter's expression)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%AC%E5%88%B0%E5%91%A8%E6%98%9F%E9%A9%B0%E5%A5%B3%E5%84%BF%E7%9A%84%E8%A1%A8%E6%83%85%23) `92.9K 🔥` `-35%`
1. [内娱请把古偶还给少男少女 (Domestic entertainment, please return the ancient dolls to boys and girls)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E8%AF%B7%E6%8A%8A%E5%8F%A4%E5%81%B6%E8%BF%98%E7%BB%99%E5%B0%91%E7%94%B7%E5%B0%91%E5%A5%B3%23) `53.4K 🔥` `-33%`
1. [多地开始抢老人 (Many places have begun to rob the elderly)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%BC%80%E5%A7%8B%E6%8A%A2%E8%80%81%E4%BA%BA%23) `49.7K 🔥` `-35%`
1. [贝克汉姆世界杯收入超所有球员](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E4%B8%96%E7%95%8C%E6%9D%AF%E6%94%B6%E5%85%A5%E8%B6%85%E6%89%80%E6%9C%89%E7%90%83%E5%91%98%23) `47.7K 🔥` `-28%`
1. [施南生是蒋南孙原型](https://s.weibo.com/weibo?q=%23%E6%96%BD%E5%8D%97%E7%94%9F%E6%98%AF%E8%92%8B%E5%8D%97%E5%AD%99%E5%8E%9F%E5%9E%8B%23) `47.6K 🔥` `-27%`

Updated at 2026-07-15 05:09:35

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
