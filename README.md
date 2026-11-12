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

1. [山姆399元羽绒服打脸谁](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86399%E5%85%83%E7%BE%BD%E7%BB%92%E6%9C%8D%E6%89%93%E8%84%B8%E8%B0%81%23) `1.1M 🔥` `NEW`
1. [德芙广告宣扬错误婚恋观被罚80万元](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E8%8A%99%E5%B9%BF%E5%91%8A%E5%AE%A3%E6%89%AC%E9%94%99%E8%AF%AF%E5%A9%9A%E6%81%8B%E8%A7%82%E8%A2%AB%E7%BD%9A80%E4%B8%87%E5%85%83%23) `813.7K 🔥` `NEW`
1. [三军会师启新程](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%86%9B%E4%BC%9A%E5%B8%88%E5%90%AF%E6%96%B0%E7%A8%8B%23) `740.8K 🔥` `NEW`
1. [金价年内暴跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%B9%B4%E5%86%85%E6%9A%B4%E8%B7%8C%23) `711.8K 🔥` `NEW`
1. [77万亿存款到期会流向哪里](https://s.weibo.com/weibo?q=%2377%E4%B8%87%E4%BA%BF%E5%AD%98%E6%AC%BE%E5%88%B0%E6%9C%9F%E4%BC%9A%E6%B5%81%E5%90%91%E5%93%AA%E9%87%8C%23) `691.7K 🔥` `NEW`
1. [只有青稚察觉到表白不对](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E9%9D%92%E7%A8%9A%E5%AF%9F%E8%A7%89%E5%88%B0%E8%A1%A8%E7%99%BD%E4%B8%8D%E5%AF%B9%23) `686.3K 🔥` `NEW`
1. [林肯飞行家EX8双V6动力带电起飞](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%82%AF%E9%A3%9E%E8%A1%8C%E5%AE%B6EX8%E5%8F%8CV6%E5%8A%A8%E5%8A%9B%E5%B8%A6%E7%94%B5%E8%B5%B7%E9%A3%9E%23) `641.5K 🔥` `NEW`
1. [天涯共此诗](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B6%AF%E5%85%B1%E6%AD%A4%E8%AF%97%23) `639.6K 🔥` `NEW`
1. [后会友期表白 恶趣味](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%A1%A8%E7%99%BD%20%E6%81%B6%E8%B6%A3%E5%91%B3%23) `600.7K 🔥` `NEW`
1. [一字肩羽绒服都来了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AD%97%E8%82%A9%E7%BE%BD%E7%BB%92%E6%9C%8D%E9%83%BD%E6%9D%A5%E4%BA%86%23) `516.5K 🔥` `NEW`
1. [红楼梦AI剧侵害17位演员肖像权](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%A5%BC%E6%A2%A6AI%E5%89%A7%E4%BE%B5%E5%AE%B317%E4%BD%8D%E6%BC%94%E5%91%98%E8%82%96%E5%83%8F%E6%9D%83%23) `491.0K 🔥` `NEW`
1. [马天宇这里其实看出来了吧](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%BF%99%E9%87%8C%E5%85%B6%E5%AE%9E%E7%9C%8B%E5%87%BA%E6%9D%A5%E4%BA%86%E5%90%A7%23) `479.2K 🔥` `NEW`
1. [高迪否认大美偷税漏税](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%BF%AA%E5%90%A6%E8%AE%A4%E5%A4%A7%E7%BE%8E%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23) `466.0K 🔥` `NEW`
1. [赵丽颖诉红果 短剧该有自己风格](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%AF%89%E7%BA%A2%E6%9E%9C%20%E7%9F%AD%E5%89%A7%E8%AF%A5%E6%9C%89%E8%87%AA%E5%B7%B1%E9%A3%8E%E6%A0%BC%23) `329.6K 🔥` `NEW`
1. [油价13日起下调](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B713%E6%97%A5%E8%B5%B7%E4%B8%8B%E8%B0%83%23) `316.7K 🔥` `NEW`
1. [白小纯为啥老跟着王子璇](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E4%B8%BA%E5%95%A5%E8%80%81%E8%B7%9F%E7%9D%80%E7%8E%8B%E5%AD%90%E7%92%87%23) `314.2K 🔥` `NEW`
1. [文吉儿已经订婚了](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E5%B7%B2%E7%BB%8F%E8%AE%A2%E5%A9%9A%E4%BA%86%23) `242.5K 🔥` `NEW`
1. [育儿嫂粗暴摔打一岁半宝宝](https://s.weibo.com/weibo?q=%23%E8%82%B2%E5%84%BF%E5%AB%82%E7%B2%97%E6%9A%B4%E6%91%94%E6%89%93%E4%B8%80%E5%B2%81%E5%8D%8A%E5%AE%9D%E5%AE%9D%23) `229.8K 🔥` `NEW`
1. [专给农村发劣质B货或构成欺诈](https://s.weibo.com/weibo?q=%23%E4%B8%93%E7%BB%99%E5%86%9C%E6%9D%91%E5%8F%91%E5%8A%A3%E8%B4%A8B%E8%B4%A7%E6%88%96%E6%9E%84%E6%88%90%E6%AC%BA%E8%AF%88%23) `229.4K 🔥` `NEW`
1. [朱一龙23岁演的剧要播了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%9923%E5%B2%81%E6%BC%94%E7%9A%84%E5%89%A7%E8%A6%81%E6%92%AD%E4%BA%86%23) `228.7K 🔥` `NEW`
1. [小米18标准版存储成本](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318%E6%A0%87%E5%87%86%E7%89%88%E5%AD%98%E5%82%A8%E6%88%90%E6%9C%AC%23) `228.4K 🔥` `NEW`
1. [许飞不可能再和厉娜做朋友](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E4%B8%8D%E5%8F%AF%E8%83%BD%E5%86%8D%E5%92%8C%E5%8E%89%E5%A8%9C%E5%81%9A%E6%9C%8B%E5%8F%8B%23) `227.7K 🔥` `NEW`
1. [金晨现在就出发4路透](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%E8%B7%AF%E9%80%8F%23) `227.0K 🔥` `NEW`
1. [现在就出发4收官录制](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%E6%94%B6%E5%AE%98%E5%BD%95%E5%88%B6%23) `226.5K 🔥` `NEW`
1. [腾讯 字节](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%20%E5%AD%97%E8%8A%82%23) `225.9K 🔥` `NEW`
1. [代入文吉儿视角真的很崩溃](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E5%85%A5%E6%96%87%E5%90%89%E5%84%BF%E8%A7%86%E8%A7%92%E7%9C%9F%E7%9A%84%E5%BE%88%E5%B4%A9%E6%BA%83%23) `225.2K 🔥` `NEW`
1. [日本专家拆开零跑Lafa5后坐不住了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%93%E5%AE%B6%E6%8B%86%E5%BC%80%E9%9B%B6%E8%B7%91Lafa5%E5%90%8E%E5%9D%90%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `224.8K 🔥` `NEW`
1. [王子璇 我下次还会收费](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%20%E6%88%91%E4%B8%8B%E6%AC%A1%E8%BF%98%E4%BC%9A%E6%94%B6%E8%B4%B9%23) `223.9K 🔥` `NEW`
1. [露肩羽绒服疯了吧这些人](https://s.weibo.com/weibo?q=%23%E9%9C%B2%E8%82%A9%E7%BE%BD%E7%BB%92%E6%9C%8D%E7%96%AF%E4%BA%86%E5%90%A7%E8%BF%99%E4%BA%9B%E4%BA%BA%23) `223.6K 🔥` `NEW`
1. [卡里克下课](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E9%87%8C%E5%85%8B%E4%B8%8B%E8%AF%BE%23) `223.2K 🔥` `NEW`
1. [祖国完全统一一定要实现一定能够实现](https://s.weibo.com/weibo?q=%23%E7%A5%96%E5%9B%BD%E5%AE%8C%E5%85%A8%E7%BB%9F%E4%B8%80%E4%B8%80%E5%AE%9A%E8%A6%81%E5%AE%9E%E7%8E%B0%E4%B8%80%E5%AE%9A%E8%83%BD%E5%A4%9F%E5%AE%9E%E7%8E%B0%23) `222.8K 🔥` `NEW`
1. [台湾一男子赤裸坐洗衣机内死亡](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E4%B8%80%E7%94%B7%E5%AD%90%E8%B5%A4%E8%A3%B8%E5%9D%90%E6%B4%97%E8%A1%A3%E6%9C%BA%E5%86%85%E6%AD%BB%E4%BA%A1%23) `221.3K 🔥` `NEW`
1. [曝马天宇也和厉娜表白了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B9%9F%E5%92%8C%E5%8E%89%E5%A8%9C%E8%A1%A8%E7%99%BD%E4%BA%86%23) `221.2K 🔥` `NEW`
1. [科技新一谈马化腾内部训话](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80%E8%B0%88%E9%A9%AC%E5%8C%96%E8%85%BE%E5%86%85%E9%83%A8%E8%AE%AD%E8%AF%9D%23) `219.6K 🔥` `NEW`
1. [女生自述买包被同学蛐蛐记四年](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%87%AA%E8%BF%B0%E4%B9%B0%E5%8C%85%E8%A2%AB%E5%90%8C%E5%AD%A6%E8%9B%90%E8%9B%90%E8%AE%B0%E5%9B%9B%E5%B9%B4%23) `218.6K 🔥` `NEW`
1. [Katseye成员脑震荡登台](https://s.weibo.com/weibo?q=%23Katseye%E6%88%90%E5%91%98%E8%84%91%E9%9C%87%E8%8D%A1%E7%99%BB%E5%8F%B0%23) `217.9K 🔥` `NEW`
1. [春日宴官宣阵容](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%97%A5%E5%AE%B4%E5%AE%98%E5%AE%A3%E9%98%B5%E5%AE%B9%23) `217.4K 🔥` `NEW`
1. [女儿第一笔工资全给自己买东西](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%AC%AC%E4%B8%80%E7%AC%94%E5%B7%A5%E8%B5%84%E5%85%A8%E7%BB%99%E8%87%AA%E5%B7%B1%E4%B9%B0%E4%B8%9C%E8%A5%BF%23) `194.8K 🔥` `NEW`
1. [怎么可能几十年只爱一个人](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E5%8F%AF%E8%83%BD%E5%87%A0%E5%8D%81%E5%B9%B4%E5%8F%AA%E7%88%B1%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `186.6K 🔥` `NEW`
1. [董思成有事哥包办的](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%80%9D%E6%88%90%E6%9C%89%E4%BA%8B%E5%93%A5%E5%8C%85%E5%8A%9E%E7%9A%84%23) `177.3K 🔥` `NEW`
1. [京沪高铁线路故障多趟列车晚点](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E6%B2%AA%E9%AB%98%E9%93%81%E7%BA%BF%E8%B7%AF%E6%95%85%E9%9A%9C%E5%A4%9A%E8%B6%9F%E5%88%97%E8%BD%A6%E6%99%9A%E7%82%B9%23) `175.7K 🔥` `NEW`
1. [田曦薇妆前妆后没区别](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%A6%86%E5%89%8D%E5%A6%86%E5%90%8E%E6%B2%A1%E5%8C%BA%E5%88%AB%23) `175.4K 🔥` `NEW`
1. [台湾洗衣机内死亡男子家属发声](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E6%B4%97%E8%A1%A3%E6%9C%BA%E5%86%85%E6%AD%BB%E4%BA%A1%E7%94%B7%E5%AD%90%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `146.7K 🔥` `NEW`
1. [腾讯 员工](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%20%E5%91%98%E5%B7%A5%23) `140.6K 🔥` `NEW`
1. [孙中山唯一留存世上的声音](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B8%AD%E5%B1%B1%E5%94%AF%E4%B8%80%E7%95%99%E5%AD%98%E4%B8%96%E4%B8%8A%E7%9A%84%E5%A3%B0%E9%9F%B3%23) `127.0K 🔥` `NEW`
1. [大美回应偷税漏税](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%BE%8E%E5%9B%9E%E5%BA%94%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23) `126.2K 🔥` `NEW`
1. [河南13块钱的炒面](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%9713%E5%9D%97%E9%92%B1%E7%9A%84%E7%82%92%E9%9D%A2%23) `121.7K 🔥` `NEW`
1. [A股尾盘突变背后发生了什么](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B0%BE%E7%9B%98%E7%AA%81%E5%8F%98%E8%83%8C%E5%90%8E%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `117.0K 🔥` `NEW`
1. [众星转发国土不可分国家不可乱](https://s.weibo.com/weibo?q=%23%E4%BC%97%E6%98%9F%E8%BD%AC%E5%8F%91%E5%9B%BD%E5%9C%9F%E4%B8%8D%E5%8F%AF%E5%88%86%E5%9B%BD%E5%AE%B6%E4%B8%8D%E5%8F%AF%E4%B9%B1%23) `116.5K 🔥` `NEW`
1. [原来车大还有这么多好处](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BD%A6%E5%A4%A7%E8%BF%98%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E5%A5%BD%E5%A4%84%23) `116.4K 🔥` `NEW`
1. [患者欠费扣医生钱医院有医生辞职](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E6%AC%A0%E8%B4%B9%E6%89%A3%E5%8C%BB%E7%94%9F%E9%92%B1%E5%8C%BB%E9%99%A2%E6%9C%89%E5%8C%BB%E7%94%9F%E8%BE%9E%E8%81%8C%23) `114.7K 🔥` `NEW`

Updated at 2026-11-12 19:34:53

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
