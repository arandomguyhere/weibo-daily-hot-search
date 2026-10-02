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

1. [刘欢家宴做红烧肉](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%AE%B6%E5%AE%B4%E5%81%9A%E7%BA%A2%E7%83%A7%E8%82%89%23) `647.3K 🔥` `NEW`
1. [多平台下架儿童装银鳕鱼](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B9%B3%E5%8F%B0%E4%B8%8B%E6%9E%B6%E5%84%BF%E7%AB%A5%E8%A3%85%E9%93%B6%E9%B3%95%E9%B1%BC%23) `441.2K 🔥` `NEW`
1. [葡萄牙4比2丹麦](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%994%E6%AF%942%E4%B8%B9%E9%BA%A6%23) `354.9K 🔥` `NEW`
1. [葡萄牙首次在无C罗情况下打进4球](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E9%A6%96%E6%AC%A1%E5%9C%A8%E6%97%A0C%E7%BD%97%E6%83%85%E5%86%B5%E4%B8%8B%E6%89%93%E8%BF%9B4%E7%90%83%23) `300.8K 🔥` `NEW`
1. [高速充电充至80%被迫离场](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E5%85%85%E7%94%B5%E5%85%85%E8%87%B380%25%E8%A2%AB%E8%BF%AB%E7%A6%BB%E5%9C%BA%23) `188.8K 🔥` `NEW`
1. [轩森森 虞书欣](https://s.weibo.com/weibo?q=%23%E8%BD%A9%E6%A3%AE%E6%A3%AE%20%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `188.0K 🔥` `NEW`
1. [父亲寻女二十年耗尽千万家产](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%AF%BB%E5%A5%B3%E4%BA%8C%E5%8D%81%E5%B9%B4%E8%80%97%E5%B0%BD%E5%8D%83%E4%B8%87%E5%AE%B6%E4%BA%A7%23) `186.2K 🔥` `NEW`
1. [兰香如故圆房意识流](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%9C%86%E6%88%BF%E6%84%8F%E8%AF%86%E6%B5%81%23) `183.9K 🔥` `NEW`
1. [张家齐室友把自己的跳水生涯写成小说](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%AE%A4%E5%8F%8B%E6%8A%8A%E8%87%AA%E5%B7%B1%E7%9A%84%E8%B7%B3%E6%B0%B4%E7%94%9F%E6%B6%AF%E5%86%99%E6%88%90%E5%B0%8F%E8%AF%B4%23) `183.5K 🔥` `NEW`
1. [王俊凯好惊人的面部平整度](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A5%BD%E6%83%8A%E4%BA%BA%E7%9A%84%E9%9D%A2%E9%83%A8%E5%B9%B3%E6%95%B4%E5%BA%A6%23) `182.8K 🔥` `NEW`
1. [刘宇宁给小沈阳支招](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%BB%99%E5%B0%8F%E6%B2%88%E9%98%B3%E6%94%AF%E6%8B%9B%23) `181.9K 🔥` `NEW`
1. [沈腾调侃自己半年没工作](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E8%B0%83%E4%BE%83%E8%87%AA%E5%B7%B1%E5%8D%8A%E5%B9%B4%E6%B2%A1%E5%B7%A5%E4%BD%9C%23) `169.3K 🔥` `NEW`
1. [剧版哈利波特长势喜人](https://s.weibo.com/weibo?q=%23%E5%89%A7%E7%89%88%E5%93%88%E5%88%A9%E6%B3%A2%E7%89%B9%E9%95%BF%E5%8A%BF%E5%96%9C%E4%BA%BA%23) `129.4K 🔥` `NEW`
1. [今日亚运决出51金](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E4%BA%9A%E8%BF%90%E5%86%B3%E5%87%BA51%E9%87%91%23) `128.5K 🔥` `NEW`
1. [严浩翔已经明示了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%B7%B2%E7%BB%8F%E6%98%8E%E7%A4%BA%E4%BA%86%23) `128.5K 🔥` `NEW`
1. [30岁男子跟风垫腰睡突发截瘫](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E7%94%B7%E5%AD%90%E8%B7%9F%E9%A3%8E%E5%9E%AB%E8%85%B0%E7%9D%A1%E7%AA%81%E5%8F%91%E6%88%AA%E7%98%AB%23) `128.4K 🔥` `NEW`
1. [霍伊伦说C罗可能结束了国家队生涯](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E4%BC%8A%E4%BC%A6%E8%AF%B4C%E7%BD%97%E5%8F%AF%E8%83%BD%E7%BB%93%E6%9D%9F%E4%BA%86%E5%9B%BD%E5%AE%B6%E9%98%9F%E7%94%9F%E6%B6%AF%23) `119.9K 🔥` `NEW`
1. [葡萄牙民众谈C罗退出集训](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E6%B0%91%E4%BC%97%E8%B0%88C%E7%BD%97%E9%80%80%E5%87%BA%E9%9B%86%E8%AE%AD%23) `114.0K 🔥` `NEW`
1. [张本智和被曝搭讪女主播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%A2%AB%E6%9B%9D%E6%90%AD%E8%AE%AA%E5%A5%B3%E4%B8%BB%E6%92%AD%23) `111.5K 🔥` `NEW`
1. [为什么人走后还有医嘱](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BA%BA%E8%B5%B0%E5%90%8E%E8%BF%98%E6%9C%89%E5%8C%BB%E5%98%B1%23) `103.0K 🔥` `NEW`
1. [邢菲只用剪4刀整个脸都能敷到](https://s.weibo.com/weibo?q=%23%E9%82%A2%E8%8F%B2%E5%8F%AA%E7%94%A8%E5%89%AA4%E5%88%80%E6%95%B4%E4%B8%AA%E8%84%B8%E9%83%BD%E8%83%BD%E6%95%B7%E5%88%B0%23) `100.6K 🔥` `NEW`
1. [小猫以为不配合拍视频就有猫条吃](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%BB%A5%E4%B8%BA%E4%B8%8D%E9%85%8D%E5%90%88%E6%8B%8D%E8%A7%86%E9%A2%91%E5%B0%B1%E6%9C%89%E7%8C%AB%E6%9D%A1%E5%90%83%23) `99.0K 🔥` `NEW`
1. [失业后摆摊卖柚子两小时卖光](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E4%B8%9A%E5%90%8E%E6%91%86%E6%91%8A%E5%8D%96%E6%9F%9A%E5%AD%90%E4%B8%A4%E5%B0%8F%E6%97%B6%E5%8D%96%E5%85%89%23) `87.8K 🔥` `NEW`
1. [霍伊伦对着葡萄牙球员siu](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E4%BC%8A%E4%BC%A6%E5%AF%B9%E7%9D%80%E8%91%A1%E8%90%84%E7%89%99%E7%90%83%E5%91%98siu%23) `87.6K 🔥` `NEW`
1. [沈腾羡慕王安宇白敬亭工作多](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E7%BE%A1%E6%85%95%E7%8E%8B%E5%AE%89%E5%AE%87%E7%99%BD%E6%95%AC%E4%BA%AD%E5%B7%A5%E4%BD%9C%E5%A4%9A%23) `86.9K 🔥` `NEW`
1. [500万放余额宝一天的收益](https://s.weibo.com/weibo?q=%23500%E4%B8%87%E6%94%BE%E4%BD%99%E9%A2%9D%E5%AE%9D%E4%B8%80%E5%A4%A9%E7%9A%84%E6%94%B6%E7%9B%8A%23) `1.9M 🔥` `+587%`
1. [高速等5个小时充电车主发声](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E7%AD%895%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%85%85%E7%94%B5%E8%BD%A6%E4%B8%BB%E5%8F%91%E5%A3%B0%23) `961.0K 🔥` `+2250%`
1. [国庆假期流动的中国具象化了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%81%87%E6%9C%9F%E6%B5%81%E5%8A%A8%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `748.3K 🔥` `+751%`
1. [樊振东波尔同游杜塞尔多夫](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%B3%A2%E5%B0%94%E5%90%8C%E6%B8%B8%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%23) `350.8K 🔥` `+344%`
1. [刘学义都三十好几了能没经验吗](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E9%83%BD%E4%B8%89%E5%8D%81%E5%A5%BD%E5%87%A0%E4%BA%86%E8%83%BD%E6%B2%A1%E7%BB%8F%E9%AA%8C%E5%90%97%23) `304.7K 🔥` `+251%`
1. [狗狗害怕打针直接把护士驮走](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E5%AE%B3%E6%80%95%E6%89%93%E9%92%88%E7%9B%B4%E6%8E%A5%E6%8A%8A%E6%8A%A4%E5%A3%AB%E9%A9%AE%E8%B5%B0%23) `191.4K 🔥` `+245%`
1. [华为赛力斯 复合](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%B5%9B%E5%8A%9B%E6%96%AF%20%E5%A4%8D%E5%90%88%23) `181.7K 🔥` `+65%`
1. [张凌赫你这是在干什么](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BD%A0%E8%BF%99%E6%98%AF%E5%9C%A8%E5%B9%B2%E4%BB%80%E4%B9%88%23) `180.9K 🔥` `+173%`
1. [空姐改签反应过来是苏州](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E5%A7%90%E6%94%B9%E7%AD%BE%E5%8F%8D%E5%BA%94%E8%BF%87%E6%9D%A5%E6%98%AF%E8%8B%8F%E5%B7%9E%23) `176.4K 🔥` `+444%`
1. [土豆是一种被严重低估的主食食材](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%B1%86%E6%98%AF%E4%B8%80%E7%A7%8D%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E7%9A%84%E4%B8%BB%E9%A3%9F%E9%A3%9F%E6%9D%90%23) `163.2K 🔥` `+409%`
1. [原来身上的肥肉是这样长出来的啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BA%AB%E4%B8%8A%E7%9A%84%E8%82%A5%E8%82%89%E6%98%AF%E8%BF%99%E6%A0%B7%E9%95%BF%E5%87%BA%E6%9D%A5%E7%9A%84%E5%95%8A%23) `161.0K 🔥` `+416%`
1. [特朗普称朝鲜可拥核伊朗不行](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E6%9C%9D%E9%B2%9C%E5%8F%AF%E6%8B%A5%E6%A0%B8%E4%BC%8A%E6%9C%97%E4%B8%8D%E8%A1%8C%23) `158.4K 🔥` `+455%`
1. [人可以和不爱的人过一生](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%8F%AF%E4%BB%A5%E5%92%8C%E4%B8%8D%E7%88%B1%E7%9A%84%E4%BA%BA%E8%BF%87%E4%B8%80%E7%94%9F%23) `149.5K 🔥` `+376%`
1. [山东文旅疑似喝多了](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E6%96%87%E6%97%85%E7%96%91%E4%BC%BC%E5%96%9D%E5%A4%9A%E4%BA%86%23) `129.6K 🔥` `+316%`
1. [对刘学义183的身高有了实感](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%88%98%E5%AD%A6%E4%B9%89183%E7%9A%84%E8%BA%AB%E9%AB%98%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `108.1K 🔥` `+164%`
1. [以防你不会剪脚趾甲](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%98%B2%E4%BD%A0%E4%B8%8D%E4%BC%9A%E5%89%AA%E8%84%9A%E8%B6%BE%E7%94%B2%23) `102.2K 🔥` `+227%`
1. [C罗退队惊动葡萄牙总理](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%80%80%E9%98%9F%E6%83%8A%E5%8A%A8%E8%91%A1%E8%90%84%E7%89%99%E6%80%BB%E7%90%86%23) `95.5K 🔥` `+134%`
1. [外围股市涨疯了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%B4%E8%82%A1%E5%B8%82%E6%B6%A8%E7%96%AF%E4%BA%86%23) `94.0K 🔥` `+225%`
1. [老板得知员工结婚天都塌了](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E5%BE%97%E7%9F%A5%E5%91%98%E5%B7%A5%E7%BB%93%E5%A9%9A%E5%A4%A9%E9%83%BD%E5%A1%8C%E4%BA%86%23) `93.7K 🔥` `+219%`
1. [怪不得医生有时候会反复套话](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%8C%BB%E7%94%9F%E6%9C%89%E6%97%B6%E5%80%99%E4%BC%9A%E5%8F%8D%E5%A4%8D%E5%A5%97%E8%AF%9D%23) `80.4K 🔥` `+158%`
1. [范丞丞唱哑剧哭了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%94%B1%E5%93%91%E5%89%A7%E5%93%AD%E4%BA%86%23) `76.9K 🔥` `+168%`
1. [王俊凯演刑警没认出来](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%88%91%E8%AD%A6%E6%B2%A1%E8%AE%A4%E5%87%BA%E6%9D%A5%23) `73.4K 🔥` `+155%`
1. [警察叔叔标记了一辆载具](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E5%AF%9F%E5%8F%94%E5%8F%94%E6%A0%87%E8%AE%B0%E4%BA%86%E4%B8%80%E8%BE%86%E8%BD%BD%E5%85%B7%23) `72.0K 🔥` `+131%`

Updated at 2026-10-02 08:55:30

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
