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

1. [父亲节 (Father's Day)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E8%8A%82%23) `569.6K 🔥` `NEW`
1. [被wps背刺了](https://s.weibo.com/weibo?q=%23%E8%A2%ABwps%E8%83%8C%E5%88%BA%E4%BA%86%23) `398.2K 🔥` `NEW`
1. [女子凌晨送外卖3岁儿子睡醒走失](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8C%E6%99%A8%E9%80%81%E5%A4%96%E5%8D%963%E5%B2%81%E5%84%BF%E5%AD%90%E7%9D%A1%E9%86%92%E8%B5%B0%E5%A4%B1%23) `199.4K 🔥` `NEW`
1. [伊朗队11人被拒签赛前困于他国](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%98%9F11%E4%BA%BA%E8%A2%AB%E6%8B%92%E7%AD%BE%E8%B5%9B%E5%89%8D%E5%9B%B0%E4%BA%8E%E4%BB%96%E5%9B%BD%23) `198.0K 🔥` `NEW`
1. [张颂文纳闷大家都在问他见义勇为](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A2%82%E6%96%87%E7%BA%B3%E9%97%B7%E5%A4%A7%E5%AE%B6%E9%83%BD%E5%9C%A8%E9%97%AE%E4%BB%96%E8%A7%81%E4%B9%89%E5%8B%87%E4%B8%BA%23) `191.2K 🔥` `NEW`
1. [骄阳似我恭喜宋威龙](https://s.weibo.com/weibo?q=%23%E9%AA%84%E9%98%B3%E4%BC%BC%E6%88%91%E6%81%AD%E5%96%9C%E5%AE%8B%E5%A8%81%E9%BE%99%23) `161.1K 🔥` `NEW`
1. [警方回应醉驾致1死2伤全责变主责](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E9%86%89%E9%A9%BE%E8%87%B41%E6%AD%BB2%E4%BC%A4%E5%85%A8%E8%B4%A3%E5%8F%98%E4%B8%BB%E8%B4%A3%23) `141.0K 🔥` `NEW`
1. [浪姐总决赛分组](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%E5%88%86%E7%BB%84%23) `139.2K 🔥` `NEW`
1. [周杰伦昆凌只买得起一辆滑板车吗](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%98%86%E5%87%8C%E5%8F%AA%E4%B9%B0%E5%BE%97%E8%B5%B7%E4%B8%80%E8%BE%86%E6%BB%91%E6%9D%BF%E8%BD%A6%E5%90%97%23) `137.8K 🔥` `NEW`
1. [马宁正式亮相世界杯](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E6%AD%A3%E5%BC%8F%E4%BA%AE%E7%9B%B8%E4%B8%96%E7%95%8C%E6%9D%AF%23) `137.0K 🔥` `NEW`
1. [温瑞博黄友政男双亚军 (Wen Ruibo and Huang Youzheng men's doubles runner-up)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A%E9%BB%84%E5%8F%8B%E6%94%BF%E7%94%B7%E5%8F%8C%E4%BA%9A%E5%86%9B%23) `136.5K 🔥` `NEW`
1. [以色列代表怒骂联合国官员](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E4%BB%A3%E8%A1%A8%E6%80%92%E9%AA%82%E8%81%94%E5%90%88%E5%9B%BD%E5%AE%98%E5%91%98%23) `134.0K 🔥` `NEW`
1. [郑嘉颖好好在家带孩子吧](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%98%89%E9%A2%96%E5%A5%BD%E5%A5%BD%E5%9C%A8%E5%AE%B6%E5%B8%A6%E5%AD%A9%E5%AD%90%E5%90%A7%23) `131.7K 🔥` `NEW`
1. [多方看跌黄金](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E7%9C%8B%E8%B7%8C%E9%BB%84%E9%87%91%23) `130.8K 🔥` `NEW`
1. [马宁说世界杯裁判没有软肋](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E8%AF%B4%E4%B8%96%E7%95%8C%E6%9D%AF%E8%A3%81%E5%88%A4%E6%B2%A1%E6%9C%89%E8%BD%AF%E8%82%8B%23) `130.1K 🔥` `NEW`
1. [黄一鸣发视频道歉](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%B8%80%E9%B8%A3%E5%8F%91%E8%A7%86%E9%A2%91%E9%81%93%E6%AD%89%23) `129.1K 🔥` `NEW`
1. [部分电脑今年涨幅已超20%](https://s.weibo.com/weibo?q=%23%E9%83%A8%E5%88%86%E7%94%B5%E8%84%91%E4%BB%8A%E5%B9%B4%E6%B6%A8%E5%B9%85%E5%B7%B2%E8%B6%8520%25%23) `123.7K 🔥` `NEW`
1. [陈立武谈AI三大瓶颈](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%AB%8B%E6%AD%A6%E8%B0%88AI%E4%B8%89%E5%A4%A7%E7%93%B6%E9%A2%88%23) `123.0K 🔥` `NEW`
1. [生命树获亚洲内容大赏最佳导演奖](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E8%8E%B7%E4%BA%9A%E6%B4%B2%E5%86%85%E5%AE%B9%E5%A4%A7%E8%B5%8F%E6%9C%80%E4%BD%B3%E5%AF%BC%E6%BC%94%E5%A5%96%23) `122.5K 🔥` `NEW`
1. [端午文旅消费升温 (Cultural tourism consumption heats up during Dragon Boat Festival)](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E6%96%87%E6%97%85%E6%B6%88%E8%B4%B9%E5%8D%87%E6%B8%A9%23) `723.2K 🔥` `+71%`
1. [原来这么多年牛肉都切错了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B9%B4%E7%89%9B%E8%82%89%E9%83%BD%E5%88%87%E9%94%99%E4%BA%86%23) `563.6K 🔥` `+128%`
1. [曾沛慈看到何宣林淘汰的表情 (Zeng Peici’s expression when he saw He Xuanlin was eliminated)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9C%8B%E5%88%B0%E4%BD%95%E5%AE%A3%E6%9E%97%E6%B7%98%E6%B1%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `483.1K 🔥` `+64%`
1. [伊军方宣布关闭霍尔木兹 (Iraqi military announces closure of Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%86%9B%E6%96%B9%E5%AE%A3%E5%B8%83%E5%85%B3%E9%97%AD%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `349.8K 🔥` `+57%`
1. [环境真的能迅速同化一个人 (The environment can really assimilate a person quickly)](https://s.weibo.com/weibo?q=%23%E7%8E%AF%E5%A2%83%E7%9C%9F%E7%9A%84%E8%83%BD%E8%BF%85%E9%80%9F%E5%90%8C%E5%8C%96%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `240.2K 🔥` `+115%`
1. [田曦薇获奖感言用了3种语言 (Tian Xiwei’s acceptance speech was in 3 languages)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%8E%B7%E5%A5%96%E6%84%9F%E8%A8%80%E7%94%A8%E4%BA%863%E7%A7%8D%E8%AF%AD%E8%A8%80%23) `200.5K 🔥` `+65%`
1. [特朗普高市早苗当众吵起来了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%BD%93%E4%BC%97%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `183.9K 🔥` `+64%`
1. [马斯克暴赚7800亿](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%9A%B4%E8%B5%9A7800%E4%BA%BF%23) `160.1K 🔥` `+242%`
1. [万千惠淘汰](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E6%B7%98%E6%B1%B0%23) `158.8K 🔥` `+63%`
1. [确诊了味精症候群](https://s.weibo.com/weibo?q=%23%E7%A1%AE%E8%AF%8A%E4%BA%86%E5%91%B3%E7%B2%BE%E7%97%87%E5%80%99%E7%BE%A4%23) `157.0K 🔥` `+84%`
1. [荷兰5比1瑞典](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B05%E6%AF%941%E7%91%9E%E5%85%B8%23) `140.3K 🔥` `+49%`
1. [浪姐总决赛 (Sister Lang Finals)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%23) `139.6K 🔥` `+51%`
1. [累的时候根本没精力去维持关系](https://s.weibo.com/weibo?q=%23%E7%B4%AF%E7%9A%84%E6%97%B6%E5%80%99%E6%A0%B9%E6%9C%AC%E6%B2%A1%E7%B2%BE%E5%8A%9B%E5%8E%BB%E7%BB%B4%E6%8C%81%E5%85%B3%E7%B3%BB%23) `138.3K 🔥` `+79%`
1. [申惠善视后](https://s.weibo.com/weibo?q=%23%E7%94%B3%E6%83%A0%E5%96%84%E8%A7%86%E5%90%8E%23) `135.6K 🔥` `+59%`
1. [为啥瘦下来的人会变得高冷](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%95%A5%E7%98%A6%E4%B8%8B%E6%9D%A5%E7%9A%84%E4%BA%BA%E4%BC%9A%E5%8F%98%E5%BE%97%E9%AB%98%E5%86%B7%23) `135.5K 🔥` `+65%`
1. [李小冉婚纱 美得好夸张](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%A9%9A%E7%BA%B1%20%E7%BE%8E%E5%BE%97%E5%A5%BD%E5%A4%B8%E5%BC%A0%23) `134.5K 🔥` `+187%`
1. [陈凯琳发文说没有遗憾了 (Chen Kailin wrote that she has no regrets)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%87%AF%E7%90%B3%E5%8F%91%E6%96%87%E8%AF%B4%E6%B2%A1%E6%9C%89%E9%81%97%E6%86%BE%E4%BA%86%23) `129.7K 🔥` `+111%`
1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `128.4K 🔥` `+58%`
1. [王濛和万千惠说对不起](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%92%8C%E4%B8%87%E5%8D%83%E6%83%A0%E8%AF%B4%E5%AF%B9%E4%B8%8D%E8%B5%B7%23) `128.1K 🔥` `+65%`
1. [曾敬骅视帝](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%95%AC%E9%AA%85%E8%A7%86%E5%B8%9D%23) `127.4K 🔥` `+154%`
1. [马宁哽咽说只要中国足球需要就全力以赴 (Ma Ning choked up and said he would go all out as long as Chinese football needs it)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E5%93%BD%E5%92%BD%E8%AF%B4%E5%8F%AA%E8%A6%81%E4%B8%AD%E5%9B%BD%E8%B6%B3%E7%90%83%E9%9C%80%E8%A6%81%E5%B0%B1%E5%85%A8%E5%8A%9B%E4%BB%A5%E8%B5%B4%23) `126.5K 🔥` `+170%`
1. [浪姐淘汰了两个ACE (Sister Lang eliminated two ACEs)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%B7%98%E6%B1%B0%E4%BA%86%E4%B8%A4%E4%B8%AAACE%23) `125.9K 🔥` `+169%`
1. [瑞典净胜球清零](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%85%B8%E5%87%80%E8%83%9C%E7%90%83%E6%B8%85%E9%9B%B6%23) `125.6K 🔥` `+168%`
1. [金价下跌买30克镯子差价有一万多 (The price of gold fell and the price difference when buying a 30g bracelet was more than RMB 10,000)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C%E4%B9%B030%E5%85%8B%E9%95%AF%E5%AD%90%E5%B7%AE%E4%BB%B7%E6%9C%89%E4%B8%80%E4%B8%87%E5%A4%9A%23) `124.0K 🔥` `+137%`
1. [德国绝杀进球 (Germany's winning goal)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E7%BB%9D%E6%9D%80%E8%BF%9B%E7%90%83%23) `1.5M 🔥`
1. [荷兰杀疯了 (The Netherlands is going crazy)](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E6%9D%80%E7%96%AF%E4%BA%86%23) `927.4K 🔥`
1. [浪姐总决赛晋级名单](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%E6%99%8B%E7%BA%A7%E5%90%8D%E5%8D%95%23) `141.1K 🔥`
1. [德国vs科特迪瓦](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BDvs%E7%A7%91%E7%89%B9%E8%BF%AA%E7%93%A6%23) `133.1K 🔥`
1. [德国2比1科特迪瓦](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD2%E6%AF%941%E7%A7%91%E7%89%B9%E8%BF%AA%E7%93%A6%23) `132.0K 🔥`
1. [金店称不可能回到金价700多元 (Gold stores say it is impossible for gold prices to return to more than 700 yuan)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%BA%97%E7%A7%B0%E4%B8%8D%E5%8F%AF%E8%83%BD%E5%9B%9E%E5%88%B0%E9%87%91%E4%BB%B7700%E5%A4%9A%E5%85%83%23) `124.7K 🔥`
1. [田曦薇到了韩国也不忘小猫比心 (When Tian Xiwei arrived in Korea, she did not forget to express her love with kittens.)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%88%B0%E4%BA%86%E9%9F%A9%E5%9B%BD%E4%B9%9F%E4%B8%8D%E5%BF%98%E5%B0%8F%E7%8C%AB%E6%AF%94%E5%BF%83%23) `132.5K 🔥` `-58%`

Updated at 2026-06-21 08:01:41

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
