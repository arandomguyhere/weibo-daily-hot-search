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

1. [5月起未经同意不得发送商业短信 (From May, no commercial text messages can be sent without consent)](https://s.weibo.com/weibo?q=%235%E6%9C%88%E8%B5%B7%E6%9C%AA%E7%BB%8F%E5%90%8C%E6%84%8F%E4%B8%8D%E5%BE%97%E5%8F%91%E9%80%81%E5%95%86%E4%B8%9A%E7%9F%AD%E4%BF%A1%23) `1.4M 🔥` `NEW`
1. [义乌不断有新纪录](https://s.weibo.com/weibo?q=%23%E4%B9%89%E4%B9%8C%E4%B8%8D%E6%96%AD%E6%9C%89%E6%96%B0%E7%BA%AA%E5%BD%95%23) `823.5K 🔥` `NEW`
1. [中1000w彩票冷知识](https://s.weibo.com/weibo?q=%23%E4%B8%AD1000w%E5%BD%A9%E7%A5%A8%E5%86%B7%E7%9F%A5%E8%AF%86%23) `822.9K 🔥` `NEW`
1. [年轻人出门越来越极简了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%87%BA%E9%97%A8%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%9E%81%E7%AE%80%E4%BA%86%23) `820.5K 🔥` `NEW`
1. [四月科学流言榜](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E6%9C%88%E7%A7%91%E5%AD%A6%E6%B5%81%E8%A8%80%E6%A6%9C%23) `612.7K 🔥` `NEW`
1. [香奈儿发布无底绑带鞋被吐槽抽象](https://s.weibo.com/weibo?q=%23%E9%A6%99%E5%A5%88%E5%84%BF%E5%8F%91%E5%B8%83%E6%97%A0%E5%BA%95%E7%BB%91%E5%B8%A6%E9%9E%8B%E8%A2%AB%E5%90%90%E6%A7%BD%E6%8A%BD%E8%B1%A1%23) `470.3K 🔥` `NEW`
1. [苹果印度生产线陷入停摆](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8D%B0%E5%BA%A6%E7%94%9F%E4%BA%A7%E7%BA%BF%E9%99%B7%E5%85%A5%E5%81%9C%E6%91%86%23) `463.8K 🔥` `NEW`
1. [吴宣仪母亲与乐华谈判视频首曝光](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%AF%8D%E4%BA%B2%E4%B8%8E%E4%B9%90%E5%8D%8E%E8%B0%88%E5%88%A4%E8%A7%86%E9%A2%91%E9%A6%96%E6%9B%9D%E5%85%89%23) `463.7K 🔥` `NEW`
1. [陈坤晒北电表演系96班30年合照](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%9D%A4%E6%99%92%E5%8C%97%E7%94%B5%E8%A1%A8%E6%BC%94%E7%B3%BB96%E7%8F%AD30%E5%B9%B4%E5%90%88%E7%85%A7%23) `463.5K 🔥` `NEW`
1. [火箭vs湖人](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%ADvs%E6%B9%96%E4%BA%BA%23) `463.4K 🔥` `NEW`
1. [青岛偶遇关晓彤 (Meeting Guan Xiaotong in Qingdao)](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E5%81%B6%E9%81%87%E5%85%B3%E6%99%93%E5%BD%A4%23) `462.5K 🔥` `NEW`
1. [YG新女团第三位成员公开](https://s.weibo.com/weibo?q=%23YG%E6%96%B0%E5%A5%B3%E5%9B%A2%E7%AC%AC%E4%B8%89%E4%BD%8D%E6%88%90%E5%91%98%E5%85%AC%E5%BC%80%23) `455.5K 🔥` `NEW`
1. [赛力斯一季度净利润7.54亿元](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF%E4%B8%80%E5%AD%A3%E5%BA%A6%E5%87%80%E5%88%A9%E6%B6%A67.54%E4%BA%BF%E5%85%83%23) `414.0K 🔥` `NEW`
1. [王力宏恭喜汤唯怀二胎](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E6%81%AD%E5%96%9C%E6%B1%A4%E5%94%AF%E6%80%80%E4%BA%8C%E8%83%8E%23) `413.7K 🔥` `NEW`
1. [恋与深空 秦彻](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E7%A7%A6%E5%BD%BB%23) `403.8K 🔥` `NEW`
1. [朱珠回复唐嫣](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E5%9B%9E%E5%A4%8D%E5%94%90%E5%AB%A3%23) `363.1K 🔥` `NEW`
1. [张豆豆承担的镜头很难呈现](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E6%89%BF%E6%8B%85%E7%9A%84%E9%95%9C%E5%A4%B4%E5%BE%88%E9%9A%BE%E5%91%88%E7%8E%B0%23) `329.8K 🔥` `NEW`
1. [金银大跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E5%A4%A7%E8%B7%8C%23) `321.9K 🔥` `NEW`
1. [韩汶栩](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%23) `289.1K 🔥` `NEW`
1. [韩汶栩删16级粉丝解散粉丝群](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%E5%88%A016%E7%BA%A7%E7%B2%89%E4%B8%9D%E8%A7%A3%E6%95%A3%E7%B2%89%E4%B8%9D%E7%BE%A4%23) `245.4K 🔥` `NEW`
1. [Anthropic年收300亿碾压OpenAI (Anthropic’s annual revenue of 30 billion crushes OpenAI)](https://s.weibo.com/weibo?q=%23Anthropic%E5%B9%B4%E6%94%B6300%E4%BA%BF%E7%A2%BE%E5%8E%8BOpenAI%23) `244.5K 🔥` `NEW`
1. [中国速度彰显中国基建硬核实力](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%9F%E5%BA%A6%E5%BD%B0%E6%98%BE%E4%B8%AD%E5%9B%BD%E5%9F%BA%E5%BB%BA%E7%A1%AC%E6%A0%B8%E5%AE%9E%E5%8A%9B%23) `244.4K 🔥` `NEW`
1. [雨霖铃](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E9%9C%96%E9%93%83%23) `244.3K 🔥` `NEW`
1. [医院职工举报院长儿子吃空饷](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E8%81%8C%E5%B7%A5%E4%B8%BE%E6%8A%A5%E9%99%A2%E9%95%BF%E5%84%BF%E5%AD%90%E5%90%83%E7%A9%BA%E9%A5%B7%23) `242.7K 🔥` `NEW`
1. [小猫要一辈子崇拜你](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%A6%81%E4%B8%80%E8%BE%88%E5%AD%90%E5%B4%87%E6%8B%9C%E4%BD%A0%23) `227.0K 🔥` `NEW`
1. [能不能不要和戴耳机的人说话](https://s.weibo.com/weibo?q=%23%E8%83%BD%E4%B8%8D%E8%83%BD%E4%B8%8D%E8%A6%81%E5%92%8C%E6%88%B4%E8%80%B3%E6%9C%BA%E7%9A%84%E4%BA%BA%E8%AF%B4%E8%AF%9D%23) `217.6K 🔥` `NEW`
1. [跑男](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `216.1K 🔥` `NEW`
1. [行程图](https://s.weibo.com/weibo?q=%23%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `215.0K 🔥` `NEW`
1. [莫氏鸡煲新店开业1天已有多条评价](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E6%96%B0%E5%BA%97%E5%BC%80%E4%B8%9A1%E5%A4%A9%E5%B7%B2%E6%9C%89%E5%A4%9A%E6%9D%A1%E8%AF%84%E4%BB%B7%23) `209.5K 🔥` `NEW`
1. [白鹿五月行程图](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%BA%94%E6%9C%88%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `203.7K 🔥` `NEW`
1. [公司员工减重450斤获奖近5万元 (Company employee lost 450 pounds and won nearly 50,000 yuan)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%91%98%E5%B7%A5%E5%87%8F%E9%87%8D450%E6%96%A4%E8%8E%B7%E5%A5%96%E8%BF%915%E4%B8%87%E5%85%83%23) `193.7K 🔥` `NEW`
1. [孙杨用乐高小模型跟钱枫换大的装饰画](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E7%94%A8%E4%B9%90%E9%AB%98%E5%B0%8F%E6%A8%A1%E5%9E%8B%E8%B7%9F%E9%92%B1%E6%9E%AB%E6%8D%A2%E5%A4%A7%E7%9A%84%E8%A3%85%E9%A5%B0%E7%94%BB%23) `182.1K 🔥` `NEW`
1. [女生28岁攒到10万块开心到想哭](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F28%E5%B2%81%E6%94%92%E5%88%B010%E4%B8%87%E5%9D%97%E5%BC%80%E5%BF%83%E5%88%B0%E6%83%B3%E5%93%AD%23) `176.2K 🔥` `NEW`
1. [少年气盛陈情令成熟稳重得闲谨制](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%B9%B4%E6%B0%94%E7%9B%9B%E9%99%88%E6%83%85%E4%BB%A4%E6%88%90%E7%86%9F%E7%A8%B3%E9%87%8D%E5%BE%97%E9%97%B2%E8%B0%A8%E5%88%B6%23) `167.9K 🔥` `NEW`
1. [哈登天王山支棱了](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%99%BB%E5%A4%A9%E7%8E%8B%E5%B1%B1%E6%94%AF%E6%A3%B1%E4%BA%86%23) `159.5K 🔥` `NEW`
1. [孙杨恋爱史](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E6%81%8B%E7%88%B1%E5%8F%B2%23) `159.1K 🔥` `NEW`
1. [黄金首饰价格下跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E9%A6%96%E9%A5%B0%E4%BB%B7%E6%A0%BC%E4%B8%8B%E8%B7%8C%23) `154.6K 🔥` `NEW`
1. [iOS27版相机或新增Siri模式](https://s.weibo.com/weibo?q=%23iOS27%E7%89%88%E7%9B%B8%E6%9C%BA%E6%88%96%E6%96%B0%E5%A2%9ESiri%E6%A8%A1%E5%BC%8F%23) `154.1K 🔥` `NEW`
1. [女生攒到10万怕被嘲笑网友全是鼓励](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%94%92%E5%88%B010%E4%B8%87%E6%80%95%E8%A2%AB%E5%98%B2%E7%AC%91%E7%BD%91%E5%8F%8B%E5%85%A8%E6%98%AF%E9%BC%93%E5%8A%B1%23) `859.8K 🔥` `+378%`
1. [霍尔木兹海峡部分被困船员已遇难 (Some crew members trapped in the Strait of Hormuz have died)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E9%83%A8%E5%88%86%E8%A2%AB%E5%9B%B0%E8%88%B9%E5%91%98%E5%B7%B2%E9%81%87%E9%9A%BE%23) `714.8K 🔥` `+180%`
1. [伊能静回应与秦昊婚姻状态](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E5%9B%9E%E5%BA%94%E4%B8%8E%E7%A7%A6%E6%98%8A%E5%A9%9A%E5%A7%BB%E7%8A%B6%E6%80%81%23) `416.2K 🔥` `+193%`
1. [中国空间站快要住不下了 (China's space station is about to become uninhabitable)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A9%BA%E9%97%B4%E7%AB%99%E5%BF%AB%E8%A6%81%E4%BD%8F%E4%B8%8D%E4%B8%8B%E4%BA%86%23) `413.7K 🔥` `+65%`
1. [老式水果为何消失了](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%BC%8F%E6%B0%B4%E6%9E%9C%E4%B8%BA%E4%BD%95%E6%B6%88%E5%A4%B1%E4%BA%86%23) `506.5K 🔥`
1. [五一假期10大城市上榜了](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F10%E5%A4%A7%E5%9F%8E%E5%B8%82%E4%B8%8A%E6%A6%9C%E4%BA%86%23) `244.3K 🔥`
1. [莫氏鸡煲老板还剩40万债务 (The owner of Mo’s Chicken Pot still has a debt of 400,000 yuan)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E8%BF%98%E5%89%A940%E4%B8%87%E5%80%BA%E5%8A%A1%23) `429.2K 🔥` `-43%`
1. [电脑涨价20%市场人流空荡荡 (Computer prices increased by 20%, the market was empty)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%84%91%E6%B6%A8%E4%BB%B720%25%E5%B8%82%E5%9C%BA%E4%BA%BA%E6%B5%81%E7%A9%BA%E8%8D%A1%E8%8D%A1%23) `413.7K 🔥` `-25%`
1. [女子生姜当水果1天1斤坚持10年](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E5%A7%9C%E5%BD%93%E6%B0%B4%E6%9E%9C1%E5%A4%A91%E6%96%A4%E5%9D%9A%E6%8C%8110%E5%B9%B4%23) `342.7K 🔥` `-33%`
1. [宝宝差点摔倒一车厢人都动了](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%AE%9D%E5%B7%AE%E7%82%B9%E6%91%94%E5%80%92%E4%B8%80%E8%BD%A6%E5%8E%A2%E4%BA%BA%E9%83%BD%E5%8A%A8%E4%BA%86%23) `184.9K 🔥` `-21%`
1. [专家谈47岁汤唯怀二胎](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%B0%8847%E5%B2%81%E6%B1%A4%E5%94%AF%E6%80%80%E4%BA%8C%E8%83%8E%23) `182.0K 🔥` `-57%`
1. [霸王茶姬奶茶中喝出水银调查结果](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%A5%B6%E8%8C%B6%E4%B8%AD%E5%96%9D%E5%87%BA%E6%B0%B4%E9%93%B6%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `157.0K 🔥` `-55%`

Updated at 2026-04-30 12:03:40

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
