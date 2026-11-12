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

1. [正午阳光番位争议为何越吵越烈](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E7%95%AA%E4%BD%8D%E4%BA%89%E8%AE%AE%E4%B8%BA%E4%BD%95%E8%B6%8A%E5%90%B5%E8%B6%8A%E7%83%88%23) `1.1M 🔥` `NEW`
1. [油价](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%23) `794.1K 🔥` `NEW`
1. [何以中国壮美八桂](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%BB%A5%E4%B8%AD%E5%9B%BD%E5%A3%AE%E7%BE%8E%E5%85%AB%E6%A1%82%23) `594.0K 🔥` `NEW`
1. [50多岁老教师因学生顶嘴崩溃大哭](https://s.weibo.com/weibo?q=%2350%E5%A4%9A%E5%B2%81%E8%80%81%E6%95%99%E5%B8%88%E5%9B%A0%E5%AD%A6%E7%94%9F%E9%A1%B6%E5%98%B4%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `589.4K 🔥` `NEW`
1. [后会友期全员拿到大结果了](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E5%85%A8%E5%91%98%E6%8B%BF%E5%88%B0%E5%A4%A7%E7%BB%93%E6%9E%9C%E4%BA%86%23) `582.0K 🔥` `NEW`
1. [库里回应妻子拍吻戏遭抨击](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E5%9B%9E%E5%BA%94%E5%A6%BB%E5%AD%90%E6%8B%8D%E5%90%BB%E6%88%8F%E9%81%AD%E6%8A%A8%E5%87%BB%23) `537.9K 🔥` `NEW`
1. [原来李宇春是井柏然的老板](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%9D%8E%E5%AE%87%E6%98%A5%E6%98%AF%E4%BA%95%E6%9F%8F%E7%84%B6%E7%9A%84%E8%80%81%E6%9D%BF%23) `325.0K 🔥` `NEW`
1. [在家保持无性别低智儿童状态](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%AE%B6%E4%BF%9D%E6%8C%81%E6%97%A0%E6%80%A7%E5%88%AB%E4%BD%8E%E6%99%BA%E5%84%BF%E7%AB%A5%E7%8A%B6%E6%80%81%23) `276.5K 🔥` `NEW`
1. [汽车撞上风筝线多处被割坏](https://s.weibo.com/weibo?q=%23%E6%B1%BD%E8%BD%A6%E6%92%9E%E4%B8%8A%E9%A3%8E%E7%AD%9D%E7%BA%BF%E5%A4%9A%E5%A4%84%E8%A2%AB%E5%89%B2%E5%9D%8F%23) `209.2K 🔥` `NEW`
1. [徐艺洋儿子拿妈妈应援物](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%84%BF%E5%AD%90%E6%8B%BF%E5%A6%88%E5%A6%88%E5%BA%94%E6%8F%B4%E7%89%A9%23) `208.8K 🔥` `NEW`
1. [马志明正式收郭德纲为义子](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%BF%97%E6%98%8E%E6%AD%A3%E5%BC%8F%E6%94%B6%E9%83%AD%E5%BE%B7%E7%BA%B2%E4%B8%BA%E4%B9%89%E5%AD%90%23) `207.8K 🔥` `NEW`
1. [熊出没官方辟谣熊大被写死了](https://s.weibo.com/weibo?q=%23%E7%86%8A%E5%87%BA%E6%B2%A1%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E7%86%8A%E5%A4%A7%E8%A2%AB%E5%86%99%E6%AD%BB%E4%BA%86%23) `207.7K 🔥` `NEW`
1. [高迪曾称她给我生了仨孩子我该挨骂](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%BF%AA%E6%9B%BE%E7%A7%B0%E5%A5%B9%E7%BB%99%E6%88%91%E7%94%9F%E4%BA%86%E4%BB%A8%E5%AD%A9%E5%AD%90%E6%88%91%E8%AF%A5%E6%8C%A8%E9%AA%82%23) `203.2K 🔥` `NEW`
1. [后会友期](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23) `185.2K 🔥` `NEW`
1. [日本出现1个极危险信号](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%87%BA%E7%8E%B01%E4%B8%AA%E6%9E%81%E5%8D%B1%E9%99%A9%E4%BF%A1%E5%8F%B7%23) `175.8K 🔥` `NEW`
1. [女子称产后与娃都患病丈夫不让进门](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E4%BA%A7%E5%90%8E%E4%B8%8E%E5%A8%83%E9%83%BD%E6%82%A3%E7%97%85%E4%B8%88%E5%A4%AB%E4%B8%8D%E8%AE%A9%E8%BF%9B%E9%97%A8%23) `164.4K 🔥` `NEW`
1. [双十一战绩](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E5%8D%81%E4%B8%80%E6%88%98%E7%BB%A9%23) `164.4K 🔥` `NEW`
1. [张泉灵回应被许飞吐槽](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%89%E7%81%B5%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%AE%B8%E9%A3%9E%E5%90%90%E6%A7%BD%23) `164.3K 🔥` `NEW`
1. [大美 有些事发生了就没办法当没发生](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%BE%8E%20%E6%9C%89%E4%BA%9B%E4%BA%8B%E5%8F%91%E7%94%9F%E4%BA%86%E5%B0%B1%E6%B2%A1%E5%8A%9E%E6%B3%95%E5%BD%93%E6%B2%A1%E5%8F%91%E7%94%9F%23) `164.3K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `164.2K 🔥` `NEW`
1. [赵丽颖索赔81万](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%B4%A2%E8%B5%9481%E4%B8%87%23) `164.2K 🔥` `NEW`
1. [徐艺洋直播放儿子声音](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E7%9B%B4%E6%92%AD%E6%94%BE%E5%84%BF%E5%AD%90%E5%A3%B0%E9%9F%B3%23) `164.2K 🔥` `NEW`
1. [娜然 霍启山](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E7%84%B6%20%E9%9C%8D%E5%90%AF%E5%B1%B1%23) `164.1K 🔥` `NEW`
1. [文吉儿 王子璇](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%20%E7%8E%8B%E5%AD%90%E7%92%87%23) `164.1K 🔥` `NEW`
1. [黄金价格下跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%BB%B7%E6%A0%BC%E4%B8%8B%E8%B7%8C%23) `164.0K 🔥` `NEW`
1. [审美从白幼瘦来到了健康的肌肉](https://s.weibo.com/weibo?q=%23%E5%AE%A1%E7%BE%8E%E4%BB%8E%E7%99%BD%E5%B9%BC%E7%98%A6%E6%9D%A5%E5%88%B0%E4%BA%86%E5%81%A5%E5%BA%B7%E7%9A%84%E8%82%8C%E8%82%89%23) `160.8K 🔥` `NEW`
1. [陈晓东我是用王菲的电话接的](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%99%93%E4%B8%9C%E6%88%91%E6%98%AF%E7%94%A8%E7%8E%8B%E8%8F%B2%E7%9A%84%E7%94%B5%E8%AF%9D%E6%8E%A5%E7%9A%84%23) `160.6K 🔥` `NEW`
1. [成毅黑粉拒不道歉遭强执](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E9%BB%91%E7%B2%89%E6%8B%92%E4%B8%8D%E9%81%93%E6%AD%89%E9%81%AD%E5%BC%BA%E6%89%A7%23) `160.3K 🔥` `NEW`
1. [白小纯直播](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%9B%B4%E6%92%AD%23) `160.2K 🔥` `NEW`
1. [张泉灵已经真人秀上瘾了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%89%E7%81%B5%E5%B7%B2%E7%BB%8F%E7%9C%9F%E4%BA%BA%E7%A7%80%E4%B8%8A%E7%98%BE%E4%BA%86%23) `159.1K 🔥` `NEW`
1. [两京十五日定档央八](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E5%AE%9A%E6%A1%A3%E5%A4%AE%E5%85%AB%23) `158.0K 🔥` `NEW`
1. [班主任在家长会上递辞呈边说边哽咽](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E5%9C%A8%E5%AE%B6%E9%95%BF%E4%BC%9A%E4%B8%8A%E9%80%92%E8%BE%9E%E5%91%88%E8%BE%B9%E8%AF%B4%E8%BE%B9%E5%93%BD%E5%92%BD%23) `155.5K 🔥` `NEW`
1. [曝白小纯王子璇没上车的原因](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%8E%8B%E5%AD%90%E7%92%87%E6%B2%A1%E4%B8%8A%E8%BD%A6%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `153.5K 🔥` `NEW`
1. [杨超越董思成演技](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%91%A3%E6%80%9D%E6%88%90%E6%BC%94%E6%8A%80%23) `152.5K 🔥` `NEW`
1. [林子濠陈瑜婚后AA制](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E6%BF%A0%E9%99%88%E7%91%9C%E5%A9%9A%E5%90%8EAA%E5%88%B6%23) `151.4K 🔥` `NEW`
1. [女孩没带课本被老师打到抽搐倒地](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%B2%A1%E5%B8%A6%E8%AF%BE%E6%9C%AC%E8%A2%AB%E8%80%81%E5%B8%88%E6%89%93%E5%88%B0%E6%8A%BD%E6%90%90%E5%80%92%E5%9C%B0%23) `149.4K 🔥` `NEW`
1. [2岁女童独自在家从2楼阳台坠落](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%A5%B3%E7%AB%A5%E7%8B%AC%E8%87%AA%E5%9C%A8%E5%AE%B6%E4%BB%8E2%E6%A5%BC%E9%98%B3%E5%8F%B0%E5%9D%A0%E8%90%BD%23) `149.3K 🔥` `NEW`
1. [导游吐槽恩施大峡谷太离谱](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E6%B8%B8%E5%90%90%E6%A7%BD%E6%81%A9%E6%96%BD%E5%A4%A7%E5%B3%A1%E8%B0%B7%E5%A4%AA%E7%A6%BB%E8%B0%B1%23) `148.2K 🔥` `NEW`
1. [母女点6元豆芽事件遭质疑](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E5%A5%B3%E7%82%B96%E5%85%83%E8%B1%86%E8%8A%BD%E4%BA%8B%E4%BB%B6%E9%81%AD%E8%B4%A8%E7%96%91%23) `135.1K 🔥` `NEW`
1. [射击教练走私武器案二审开庭](https://s.weibo.com/weibo?q=%23%E5%B0%84%E5%87%BB%E6%95%99%E7%BB%83%E8%B5%B0%E7%A7%81%E6%AD%A6%E5%99%A8%E6%A1%88%E4%BA%8C%E5%AE%A1%E5%BC%80%E5%BA%AD%23) `130.4K 🔥` `NEW`
1. [厉娜这么夸张的人设竟越来越稳固](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E8%BF%99%E4%B9%88%E5%A4%B8%E5%BC%A0%E7%9A%84%E4%BA%BA%E8%AE%BE%E7%AB%9F%E8%B6%8A%E6%9D%A5%E8%B6%8A%E7%A8%B3%E5%9B%BA%23) `130.2K 🔥` `NEW`
1. [OSTA星芒手机发文](https://s.weibo.com/weibo?q=%23OSTA%E6%98%9F%E8%8A%92%E6%89%8B%E6%9C%BA%E5%8F%91%E6%96%87%23) `129.9K 🔥` `NEW`
1. [赵丽颖起诉红果短剧](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%B5%B7%E8%AF%89%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%23) `208.9K 🔥` `+142%`
1. [霍启山娜然 结婚](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%B1%B1%E5%A8%9C%E7%84%B6%20%E7%BB%93%E5%A9%9A%23) `208.3K 🔥` `+142%`
1. [杭州18岁女孩检出18种HPV亚型阳性](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E18%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%A3%80%E5%87%BA18%E7%A7%8DHPV%E4%BA%9A%E5%9E%8B%E9%98%B3%E6%80%A7%23) `164.0K 🔥` `+226%`
1. [女子西西弗买200元书坐咖啡区被拒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A5%BF%E8%A5%BF%E5%BC%97%E4%B9%B0200%E5%85%83%E4%B9%A6%E5%9D%90%E5%92%96%E5%95%A1%E5%8C%BA%E8%A2%AB%E6%8B%92%23) `160.9K 🔥` `+209%`
1. [杨幂这一蹲真是神来之笔](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%BF%99%E4%B8%80%E8%B9%B2%E7%9C%9F%E6%98%AF%E7%A5%9E%E6%9D%A5%E4%B9%8B%E7%AC%94%23) `160.4K 🔥` `+97%`
1. [12306回应外籍游客探出高铁车厢吸烟](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E5%A4%96%E7%B1%8D%E6%B8%B8%E5%AE%A2%E6%8E%A2%E5%87%BA%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E5%90%B8%E7%83%9F%23) `160.1K 🔥` `+27%`
1. [猫杀人概率几乎为零但我先走了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E6%9D%80%E4%BA%BA%E6%A6%82%E7%8E%87%E5%87%A0%E4%B9%8E%E4%B8%BA%E9%9B%B6%E4%BD%86%E6%88%91%E5%85%88%E8%B5%B0%E4%BA%86%23) `142.9K 🔥` `+186%`
1. [山姆399元充绒量300克羽绒服断货](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86399%E5%85%83%E5%85%85%E7%BB%92%E9%87%8F300%E5%85%8B%E7%BE%BD%E7%BB%92%E6%9C%8D%E6%96%AD%E8%B4%A7%23) `345.2K 🔥`

Updated at 2026-11-12 11:21:37

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
