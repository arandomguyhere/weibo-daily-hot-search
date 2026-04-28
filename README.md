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

1. [张雪曾拒绝跟华为合作 (Zhang Xue once refused to cooperate with Huawei)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9B%BE%E6%8B%92%E7%BB%9D%E8%B7%9F%E5%8D%8E%E4%B8%BA%E5%90%88%E4%BD%9C%23) `1.2M 🔥` `NEW`
1. [iPhoneUltra真机超前瞻](https://s.weibo.com/weibo?q=%23iPhoneUltra%E7%9C%9F%E6%9C%BA%E8%B6%85%E5%89%8D%E7%9E%BB%23) `986.4K 🔥` `NEW`
1. [多个方向增开夜间高铁](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%B8%AA%E6%96%B9%E5%90%91%E5%A2%9E%E5%BC%80%E5%A4%9C%E9%97%B4%E9%AB%98%E9%93%81%23) `897.4K 🔥` `NEW`
1. [一加Ace6至尊版](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8A%A0Ace6%E8%87%B3%E5%B0%8A%E7%89%88%23) `896.8K 🔥` `NEW`
1. [云南14岁男孩杀害女同学被判无期](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%9714%E5%B2%81%E7%94%B7%E5%AD%A9%E6%9D%80%E5%AE%B3%E5%A5%B3%E5%90%8C%E5%AD%A6%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%23) `501.5K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `499.7K 🔥` `NEW`
1. [印男子扛姐姐遗骸到银行证明人已死](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E7%94%B7%E5%AD%90%E6%89%9B%E5%A7%90%E5%A7%90%E9%81%97%E9%AA%B8%E5%88%B0%E9%93%B6%E8%A1%8C%E8%AF%81%E6%98%8E%E4%BA%BA%E5%B7%B2%E6%AD%BB%23) `452.6K 🔥` `NEW`
1. [网红白冰偷逃近千万为何没坐牢](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%99%BD%E5%86%B0%E5%81%B7%E9%80%83%E8%BF%91%E5%8D%83%E4%B8%87%E4%B8%BA%E4%BD%95%E6%B2%A1%E5%9D%90%E7%89%A2%23) `332.0K 🔥` `NEW`
1. [王亚飞 迪丽热巴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BA%9A%E9%A3%9E%20%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `308.7K 🔥` `NEW`
1. [miumiu没给韩国女星出过丑图](https://s.weibo.com/weibo?q=%23miumiu%E6%B2%A1%E7%BB%99%E9%9F%A9%E5%9B%BD%E5%A5%B3%E6%98%9F%E5%87%BA%E8%BF%87%E4%B8%91%E5%9B%BE%23) `302.8K 🔥` `NEW`
1. [建议亲人去世一两个月后主动查负债 (It is recommended that you proactively check your debts one or two months after the death of a loved one.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%BA%B2%E4%BA%BA%E5%8E%BB%E4%B8%96%E4%B8%80%E4%B8%A4%E4%B8%AA%E6%9C%88%E5%90%8E%E4%B8%BB%E5%8A%A8%E6%9F%A5%E8%B4%9F%E5%80%BA%23) `264.2K 🔥` `NEW`
1. [小英变卡戴英了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E5%8F%98%E5%8D%A1%E6%88%B4%E8%8B%B1%E4%BA%86%23) `259.8K 🔥` `NEW`
1. [眼镜王蛇爬向民房两幼童浑然不觉](https://s.weibo.com/weibo?q=%23%E7%9C%BC%E9%95%9C%E7%8E%8B%E8%9B%87%E7%88%AC%E5%90%91%E6%B0%91%E6%88%BF%E4%B8%A4%E5%B9%BC%E7%AB%A5%E6%B5%91%E7%84%B6%E4%B8%8D%E8%A7%89%23) `245.1K 🔥` `NEW`
1. [奔跑吧直播](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E7%9B%B4%E6%92%AD%23) `231.9K 🔥` `NEW`
1. [JDG战胜WE](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CWE%23) `201.4K 🔥` `NEW`
1. [韩汶栩 在红树林吹号的鹦鹉鱼](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%20%E5%9C%A8%E7%BA%A2%E6%A0%91%E6%9E%97%E5%90%B9%E5%8F%B7%E7%9A%84%E9%B9%A6%E9%B9%89%E9%B1%BC%23) `201.2K 🔥` `NEW`
1. [华为PuraXMax首销日销量曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXMax%E9%A6%96%E9%94%80%E6%97%A5%E9%94%80%E9%87%8F%E6%9B%9D%E5%85%89%23) `200.8K 🔥` `NEW`
1. [迪丽热巴邓为迪奥生图](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%82%93%E4%B8%BA%E8%BF%AA%E5%A5%A5%E7%94%9F%E5%9B%BE%23) `200.6K 🔥` `NEW`
1. [比亚迪部分车型即将涨价](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E9%83%A8%E5%88%86%E8%BD%A6%E5%9E%8B%E5%8D%B3%E5%B0%86%E6%B6%A8%E4%BB%B7%23) `200.3K 🔥` `NEW`
1. [WE对战JDG](https://s.weibo.com/weibo?q=%23WE%E5%AF%B9%E6%88%98JDG%23) `200.1K 🔥` `NEW`
1. [按需消费才是真自由 (Consuming on demand is true freedom)](https://s.weibo.com/weibo?q=%23%E6%8C%89%E9%9C%80%E6%B6%88%E8%B4%B9%E6%89%8D%E6%98%AF%E7%9C%9F%E8%87%AA%E7%94%B1%23) `190.0K 🔥` `NEW`
1. [H股大涨15%](https://s.weibo.com/weibo?q=%23H%E8%82%A1%E5%A4%A7%E6%B6%A815%25%23) `187.7K 🔥` `NEW`
1. [小黄油美式 全冰去水](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E6%B2%B9%E7%BE%8E%E5%BC%8F%20%E5%85%A8%E5%86%B0%E5%8E%BB%E6%B0%B4%23) `185.7K 🔥` `NEW`
1. [阿娇催生阿Sa](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A8%87%E5%82%AC%E7%94%9F%E9%98%BFSa%23) `185.0K 🔥` `NEW`
1. [白冰从发廊小哥到顶级富豪](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E4%BB%8E%E5%8F%91%E5%BB%8A%E5%B0%8F%E5%93%A5%E5%88%B0%E9%A1%B6%E7%BA%A7%E5%AF%8C%E8%B1%AA%23) `184.4K 🔥` `NEW`
1. [朱珠床戏给我看热了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E5%BA%8A%E6%88%8F%E7%BB%99%E6%88%91%E7%9C%8B%E7%83%AD%E4%BA%86%23) `184.2K 🔥` `NEW`
1. [iPhoneUltra前瞻](https://s.weibo.com/weibo?q=%23iPhoneUltra%E5%89%8D%E7%9E%BB%23) `183.1K 🔥` `NEW`
1. [黄金价格跌跌不休](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%BB%B7%E6%A0%BC%E8%B7%8C%E8%B7%8C%E4%B8%8D%E4%BC%91%23) `182.5K 🔥` `NEW`
1. [钟欣潼发文祝福蔡卓妍](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%AC%A3%E6%BD%BC%E5%8F%91%E6%96%87%E7%A5%9D%E7%A6%8F%E8%94%A1%E5%8D%93%E5%A6%8D%23) `181.6K 🔥` `NEW`
1. [猫咪硬生生在小区绕了8圈才回家](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E7%A1%AC%E7%94%9F%E7%94%9F%E5%9C%A8%E5%B0%8F%E5%8C%BA%E7%BB%95%E4%BA%868%E5%9C%88%E6%89%8D%E5%9B%9E%E5%AE%B6%23) `181.3K 🔥` `NEW`
1. [卜凡跳团舞踢队友 (Bu Fan dances in a group dance and kicks his teammates)](https://s.weibo.com/weibo?q=%23%E5%8D%9C%E5%87%A1%E8%B7%B3%E5%9B%A2%E8%88%9E%E8%B8%A2%E9%98%9F%E5%8F%8B%23) `181.3K 🔥` `NEW`
1. [张凌赫上班仍显有点疼痛](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%8A%E7%8F%AD%E4%BB%8D%E6%98%BE%E6%9C%89%E7%82%B9%E7%96%BC%E7%97%9B%23) `181.3K 🔥` `NEW`
1. [王鹤棣西安投喂巧乐兹脆筒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%A5%BF%E5%AE%89%E6%8A%95%E5%96%82%E5%B7%A7%E4%B9%90%E5%85%B9%E8%84%86%E7%AD%92%23) `181.3K 🔥` `NEW`
1. [举报二手烟后失去朋友和推荐信](https://s.weibo.com/weibo?q=%23%E4%B8%BE%E6%8A%A5%E4%BA%8C%E6%89%8B%E7%83%9F%E5%90%8E%E5%A4%B1%E5%8E%BB%E6%9C%8B%E5%8F%8B%E5%92%8C%E6%8E%A8%E8%8D%90%E4%BF%A1%23) `181.3K 🔥` `NEW`
1. [男子买榴莲发现少秤被摊主拿刀威胁](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%B0%E6%A6%B4%E8%8E%B2%E5%8F%91%E7%8E%B0%E5%B0%91%E7%A7%A4%E8%A2%AB%E6%91%8A%E4%B8%BB%E6%8B%BF%E5%88%80%E5%A8%81%E8%83%81%23) `181.3K 🔥` `NEW`
1. [14岁少年杀害女同学不适用死刑](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%B0%91%E5%B9%B4%E6%9D%80%E5%AE%B3%E5%A5%B3%E5%90%8C%E5%AD%A6%E4%B8%8D%E9%80%82%E7%94%A8%E6%AD%BB%E5%88%91%23) `181.3K 🔥` `NEW`
1. [苹果将推出多款Ultra新品](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%B0%86%E6%8E%A8%E5%87%BA%E5%A4%9A%E6%AC%BEUltra%E6%96%B0%E5%93%81%23) `181.3K 🔥` `NEW`
1. [轻语 奶龙](https://s.weibo.com/weibo?q=%23%E8%BD%BB%E8%AF%AD%20%E5%A5%B6%E9%BE%99%23) `181.3K 🔥` `NEW`
1. [浪姐三公帮唱舞台](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E5%B8%AE%E5%94%B1%E8%88%9E%E5%8F%B0%23) `181.3K 🔥` `NEW`
1. [女子看病被要求脱光衣物遭医生袭胸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9C%8B%E7%97%85%E8%A2%AB%E8%A6%81%E6%B1%82%E8%84%B1%E5%85%89%E8%A1%A3%E7%89%A9%E9%81%AD%E5%8C%BB%E7%94%9F%E8%A2%AD%E8%83%B8%23) `181.3K 🔥` `NEW`
1. [邓为像穿了红色肚兜 (Deng Wei looks like wearing a red bellyband)](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E5%83%8F%E7%A9%BF%E4%BA%86%E7%BA%A2%E8%89%B2%E8%82%9A%E5%85%9C%23) `179.4K 🔥` `NEW`
1. [建议想减肥的人去一趟云南](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%83%B3%E5%87%8F%E8%82%A5%E7%9A%84%E4%BA%BA%E5%8E%BB%E4%B8%80%E8%B6%9F%E4%BA%91%E5%8D%97%23) `896.4K 🔥`
1. [3只虾21块钱](https://s.weibo.com/weibo?q=%233%E5%8F%AA%E8%99%BE21%E5%9D%97%E9%92%B1%23) `522.2K 🔥` `-41%`
1. [强奸出狱后又杀人男子被执行死刑](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E5%A5%B8%E5%87%BA%E7%8B%B1%E5%90%8E%E5%8F%88%E6%9D%80%E4%BA%BA%E7%94%B7%E5%AD%90%E8%A2%AB%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `499.4K 🔥` `-50%`
1. [孔雪儿说不接俞浅浅这种角色是笨蛋](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E8%AF%B4%E4%B8%8D%E6%8E%A5%E4%BF%9E%E6%B5%85%E6%B5%85%E8%BF%99%E7%A7%8D%E8%A7%92%E8%89%B2%E6%98%AF%E7%AC%A8%E8%9B%8B%23) `325.0K 🔥` `-31%`
1. [miumiu陷害女明星](https://s.weibo.com/weibo?q=%23miumiu%E9%99%B7%E5%AE%B3%E5%A5%B3%E6%98%8E%E6%98%9F%23) `322.1K 🔥` `-30%`
1. [网红白冰偷税911.18万 (Internet celebrity Bai Bing evaded 9.1118 million in taxes)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%99%BD%E5%86%B0%E5%81%B7%E7%A8%8E911.18%E4%B8%87%23) `314.3K 🔥` `-85%`
1. [金钟仁说EXO是六人组](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%92%9F%E4%BB%81%E8%AF%B4EXO%E6%98%AF%E5%85%AD%E4%BA%BA%E7%BB%84%23) `256.6K 🔥` `-44%`
1. [王骁田曦薇新剧定档](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%E7%94%B0%E6%9B%A6%E8%96%87%E6%96%B0%E5%89%A7%E5%AE%9A%E6%A1%A3%23) `187.3K 🔥` `-58%`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `186.8K 🔥` `-57%`
1. [Rookie小钰事件法律层面解读](https://s.weibo.com/weibo?q=%23Rookie%E5%B0%8F%E9%92%B0%E4%BA%8B%E4%BB%B6%E6%B3%95%E5%BE%8B%E5%B1%82%E9%9D%A2%E8%A7%A3%E8%AF%BB%23) `186.1K 🔥` `-32%`
1. [唐嫣钟汉良新剧对打 (Tang Yan and Zhong Hanliang's new drama fight)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E9%92%9F%E6%B1%89%E8%89%AF%E6%96%B0%E5%89%A7%E5%AF%B9%E6%89%93%23) `182.0K 🔥` `-58%`

Updated at 2026-04-28 17:08:58

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
