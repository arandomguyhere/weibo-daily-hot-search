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

1. [4万患者的救命药成了巨额骗保生意 (Life-saving medicine for 40,000 patients turned into a huge insurance fraud business)](https://s.weibo.com/weibo?q=%234%E4%B8%87%E6%82%A3%E8%80%85%E7%9A%84%E6%95%91%E5%91%BD%E8%8D%AF%E6%88%90%E4%BA%86%E5%B7%A8%E9%A2%9D%E9%AA%97%E4%BF%9D%E7%94%9F%E6%84%8F%23) `246.1K 🔥` `NEW`
1. [王俊凯广州演唱会花篮](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8A%B1%E7%AF%AE%23) `232.0K 🔥` `NEW`
1. [原来活体器官运输不是专门的飞机](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B4%BB%E4%BD%93%E5%99%A8%E5%AE%98%E8%BF%90%E8%BE%93%E4%B8%8D%E6%98%AF%E4%B8%93%E9%97%A8%E7%9A%84%E9%A3%9E%E6%9C%BA%23) `178.9K 🔥` `NEW`
1. [劫杀摩的司机案两被告共赔偿五万元](https://s.weibo.com/weibo?q=%23%E5%8A%AB%E6%9D%80%E6%91%A9%E7%9A%84%E5%8F%B8%E6%9C%BA%E6%A1%88%E4%B8%A4%E8%A2%AB%E5%91%8A%E5%85%B1%E8%B5%94%E5%81%BF%E4%BA%94%E4%B8%87%E5%85%83%23) `142.3K 🔥` `NEW`
1. [isa聊天记录](https://s.weibo.com/weibo?q=%23isa%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `141.3K 🔥` `NEW`
1. [九门九爷死了解雨臣怎么办](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E4%B9%9D%E7%88%B7%E6%AD%BB%E4%BA%86%E8%A7%A3%E9%9B%A8%E8%87%A3%E6%80%8E%E4%B9%88%E5%8A%9E%23) `137.3K 🔥` `NEW`
1. [邓恩熙为剧宣去综艺相亲了](https://s.weibo.com/weibo?q=%23%E9%82%93%E6%81%A9%E7%86%99%E4%B8%BA%E5%89%A7%E5%AE%A3%E5%8E%BB%E7%BB%BC%E8%89%BA%E7%9B%B8%E4%BA%B2%E4%BA%86%23) `114.3K 🔥` `NEW`
1. [谁杀死了驾校 (Who killed the driving school?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%80%E6%AD%BB%E4%BA%86%E9%A9%BE%E6%A0%A1%23) `1.2M 🔥` `+26%`
1. [胖东来 刑释人员](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E9%87%8A%E4%BA%BA%E5%91%98%23) `995.6K 🔥` `+95%`
1. [邓超给初代跑男合照签名](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E7%BB%99%E5%88%9D%E4%BB%A3%E8%B7%91%E7%94%B7%E5%90%88%E7%85%A7%E7%AD%BE%E5%90%8D%23) `413.8K 🔥` `+70%`
1. [朱女士案赶快拿钱离婚才是上策](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%A5%B3%E5%A3%AB%E6%A1%88%E8%B5%B6%E5%BF%AB%E6%8B%BF%E9%92%B1%E7%A6%BB%E5%A9%9A%E6%89%8D%E6%98%AF%E4%B8%8A%E7%AD%96%23) `385.7K 🔥` `+72%`
1. [葡萄树的主人终于上当了 (The owner of the vine was finally fooled)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E6%A0%91%E7%9A%84%E4%B8%BB%E4%BA%BA%E7%BB%88%E4%BA%8E%E4%B8%8A%E5%BD%93%E4%BA%86%23) `192.1K 🔥` `+54%`
1. [牛来票房暴涨1000倍](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E7%A5%A8%E6%88%BF%E6%9A%B4%E6%B6%A81000%E5%80%8D%23) `1.8M 🔥`
1. [这一天值得每一名中国人铭记 (This day is worth remembering by every Chinese)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%A4%A9%E5%80%BC%E5%BE%97%E6%AF%8F%E4%B8%80%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%BA%BA%E9%93%AD%E8%AE%B0%23) `1.0M 🔥`
1. [牛来导演亲友发声 (Director Niu Lai’s relatives and friends speak out)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E5%AF%BC%E6%BC%94%E4%BA%B2%E5%8F%8B%E5%8F%91%E5%A3%B0%23) `823.2K 🔥`
1. [妈妈去世多少年才能不难过](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%8E%BB%E4%B8%96%E5%A4%9A%E5%B0%91%E5%B9%B4%E6%89%8D%E8%83%BD%E4%B8%8D%E9%9A%BE%E8%BF%87%23) `811.4K 🔥`
1. [终于明白减重减肥减脂区别](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%98%8E%E7%99%BD%E5%87%8F%E9%87%8D%E5%87%8F%E8%82%A5%E5%87%8F%E8%84%82%E5%8C%BA%E5%88%AB%23) `511.6K 🔥`
1. [李飞说左航没有独立判断能力](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A3%9E%E8%AF%B4%E5%B7%A6%E8%88%AA%E6%B2%A1%E6%9C%89%E7%8B%AC%E7%AB%8B%E5%88%A4%E6%96%AD%E8%83%BD%E5%8A%9B%23) `446.0K 🔥`
1. [王嘉尔吃自己的瓜 (Wang Jiaer eats his own melon)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%90%83%E8%87%AA%E5%B7%B1%E7%9A%84%E7%93%9C%23) `404.0K 🔥`
1. [公司空调已经做到这种程度了 (The company's air conditioners have already reached this level.)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E7%A9%BA%E8%B0%83%E5%B7%B2%E7%BB%8F%E5%81%9A%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `398.0K 🔥`
1. [手机涨得快买不起了 (Mobile phones are so expensive that they are almost unaffordable.)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E5%BE%97%E5%BF%AB%E4%B9%B0%E4%B8%8D%E8%B5%B7%E4%BA%86%23) `248.0K 🔥`
1. [美国夫妇网购中国折叠房](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%AB%E5%A6%87%E7%BD%91%E8%B4%AD%E4%B8%AD%E5%9B%BD%E6%8A%98%E5%8F%A0%E6%88%BF%23) `247.4K 🔥`
1. [天津已经进化成这样了吗](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E5%B7%B2%E7%BB%8F%E8%BF%9B%E5%8C%96%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `244.0K 🔥`
1. [牛来怎么过审的 (How did Niu Lai pass the trial?)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E6%80%8E%E4%B9%88%E8%BF%87%E5%AE%A1%E7%9A%84%23) `243.5K 🔥`
1. [九门大结局只有九爷不在了 (In the finale of Nine Gates, only Master Jiu is gone)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%A4%A7%E7%BB%93%E5%B1%80%E5%8F%AA%E6%9C%89%E4%B9%9D%E7%88%B7%E4%B8%8D%E5%9C%A8%E4%BA%86%23) `241.7K 🔥`
1. [有些押金真的没退回我们的账户](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%9B%E6%8A%BC%E9%87%91%E7%9C%9F%E7%9A%84%E6%B2%A1%E9%80%80%E5%9B%9E%E6%88%91%E4%BB%AC%E7%9A%84%E8%B4%A6%E6%88%B7%23) `239.7K 🔥`
1. [谢霆锋王菲情侣手镯 (Nicholas Tse and Faye Wong couple bracelets)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E7%8E%8B%E8%8F%B2%E6%83%85%E4%BE%A3%E6%89%8B%E9%95%AF%23) `238.1K 🔥`
1. [比利时一学生挖到大量金币金条](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E4%B8%80%E5%AD%A6%E7%94%9F%E6%8C%96%E5%88%B0%E5%A4%A7%E9%87%8F%E9%87%91%E5%B8%81%E9%87%91%E6%9D%A1%23) `237.4K 🔥`
1. [牛来 龙标 (Niulai Longbiao)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%20%E9%BE%99%E6%A0%87%23) `236.0K 🔥`
1. [曝王嘉尔宋雨琦恋情 (Wang Jiaer and Song Yuqi's romance revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `234.1K 🔥`
1. [国乒男单全军覆没 (National table tennis men's singles were wiped out)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `233.5K 🔥`
1. [徐梦桃听到婆婆被家暴的反应](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E5%90%AC%E5%88%B0%E5%A9%86%E5%A9%86%E8%A2%AB%E5%AE%B6%E6%9A%B4%E7%9A%84%E5%8F%8D%E5%BA%94%23) `231.0K 🔥`
1. [虞书欣真的陷入猴子怪谈里了 (Yu Shuxin really fell into the monkey ghost story)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9C%9F%E7%9A%84%E9%99%B7%E5%85%A5%E7%8C%B4%E5%AD%90%E6%80%AA%E8%B0%88%E9%87%8C%E4%BA%86%23) `187.8K 🔥`
1. [胡杏儿回应黄宗泽李乘德拥抱](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%9D%8F%E5%84%BF%E5%9B%9E%E5%BA%94%E9%BB%84%E5%AE%97%E6%B3%BD%E6%9D%8E%E4%B9%98%E5%BE%B7%E6%8B%A5%E6%8A%B1%23) `179.5K 🔥`
1. [心动的信号](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B7%23) `159.9K 🔥`
1. [王一博外耗型人格](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%A4%96%E8%80%97%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `147.9K 🔥`
1. [日本 拜鬼 (japan ghost worship)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%20%E6%8B%9C%E9%AC%BC%23) `132.9K 🔥`
1. [终于知道为什么戴眼镜是斜的了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%B4%E7%9C%BC%E9%95%9C%E6%98%AF%E6%96%9C%E7%9A%84%E4%BA%86%23) `113.0K 🔥`
1. [东京地铁被淹却见水质清澈](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E4%BA%AC%E5%9C%B0%E9%93%81%E8%A2%AB%E6%B7%B9%E5%8D%B4%E8%A7%81%E6%B0%B4%E8%B4%A8%E6%B8%85%E6%BE%88%23) `111.1K 🔥`
1. [路虎亏钱卖车](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%99%8E%E4%BA%8F%E9%92%B1%E5%8D%96%E8%BD%A6%23) `105.2K 🔥`
1. [疯狂动物城3官宣 (Zootopia 3 official announcement)](https://s.weibo.com/weibo?q=%23%E7%96%AF%E7%8B%82%E5%8A%A8%E7%89%A9%E5%9F%8E3%E5%AE%98%E5%AE%A3%23) `599.8K 🔥` `-23%`
1. [旺旺 配料表 (Wangwang ingredient list)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%20%E9%85%8D%E6%96%99%E8%A1%A8%23) `418.1K 🔥` `-29%`
1. [牛来综合票房破50万](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E7%BB%BC%E5%90%88%E7%A5%A8%E6%88%BF%E7%A0%B450%E4%B8%87%23) `306.7K 🔥` `-30%`
1. [王一博 飞天奖 (Wang Yibo Feitian Award)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E9%A3%9E%E5%A4%A9%E5%A5%96%23) `287.4K 🔥` `-22%`
1. [TF四代要唱时团的刺 (The fourth generation of TF wants to sing the group’s thorn)](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E8%A6%81%E5%94%B1%E6%97%B6%E5%9B%A2%E7%9A%84%E5%88%BA%23) `178.7K 🔥` `-26%`
1. [曾舜晞吴老狗被枪决](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E5%90%B4%E8%80%81%E7%8B%97%E8%A2%AB%E6%9E%AA%E5%86%B3%23) `175.8K 🔥` `-21%`
1. [胖东来首批刑释职工30人无一离职](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%A6%96%E6%89%B9%E5%88%91%E9%87%8A%E8%81%8C%E5%B7%A530%E4%BA%BA%E6%97%A0%E4%B8%80%E7%A6%BB%E8%81%8C%23) `166.1K 🔥` `-32%`
1. [年轻人猝死大多有两个共性 (Sudden death among young people mostly has two characteristics in common:)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%8C%9D%E6%AD%BB%E5%A4%A7%E5%A4%9A%E6%9C%89%E4%B8%A4%E4%B8%AA%E5%85%B1%E6%80%A7%23) `135.3K 🔥` `-45%`
1. [章若楠被直播间美颜吓到 (Zhang Ruonan was frightened by her beauty in the live broadcast room)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%A2%AB%E7%9B%B4%E6%92%AD%E9%97%B4%E7%BE%8E%E9%A2%9C%E5%90%93%E5%88%B0%23) `134.9K 🔥` `-27%`
1. [不顾台风五停办婚礼新娘赔了12000 (Despite Typhoon 5, the wedding was canceled and the bride lost 12,000 yuan)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E9%A1%BE%E5%8F%B0%E9%A3%8E%E4%BA%94%E5%81%9C%E5%8A%9E%E5%A9%9A%E7%A4%BC%E6%96%B0%E5%A8%98%E8%B5%94%E4%BA%8612000%23) `133.9K 🔥` `-28%`

Updated at 2026-08-15 17:10:10

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
