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

1. [小车23点59分59秒下高速收费员狂喜 (The car got off the expressway at 23:59:59 and the toll collector was ecstatic)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%BD%A623%E7%82%B959%E5%88%8659%E7%A7%92%E4%B8%8B%E9%AB%98%E9%80%9F%E6%94%B6%E8%B4%B9%E5%91%98%E7%8B%82%E5%96%9C%23) `1.1M 🔥` `NEW`
1. [广东高质量发展大会](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E5%A4%A7%E4%BC%9A%23) `660.6K 🔥` `NEW`
1. [周大福一条金手链将涨18000元](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%A4%A7%E7%A6%8F%E4%B8%80%E6%9D%A1%E9%87%91%E6%89%8B%E9%93%BE%E5%B0%86%E6%B6%A818000%E5%85%83%23) `575.7K 🔥` `NEW`
1. [王楚然丞磊 京洛再无佳人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%9E%E7%A3%8A%20%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA%23) `394.6K 🔥` `NEW`
1. [建议父母停止对孩子的灾难化想象](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%88%B6%E6%AF%8D%E5%81%9C%E6%AD%A2%E5%AF%B9%E5%AD%A9%E5%AD%90%E7%9A%84%E7%81%BE%E9%9A%BE%E5%8C%96%E6%83%B3%E8%B1%A1%23) `173.4K 🔥` `NEW`
1. [镖人 删减](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E5%88%A0%E5%87%8F%23) `153.7K 🔥` `NEW`
1. [叶祖新你就是这样下海的](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%A5%96%E6%96%B0%E4%BD%A0%E5%B0%B1%E6%98%AF%E8%BF%99%E6%A0%B7%E4%B8%8B%E6%B5%B7%E7%9A%84%23) `151.4K 🔥` `NEW`
1. [女子春节返程遇高铁超载被迫下车](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%98%A5%E8%8A%82%E8%BF%94%E7%A8%8B%E9%81%87%E9%AB%98%E9%93%81%E8%B6%85%E8%BD%BD%E8%A2%AB%E8%BF%AB%E4%B8%8B%E8%BD%A6%23) `143.2K 🔥` `NEW`
1. [吴昕谈在快本时人气低](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%95%E8%B0%88%E5%9C%A8%E5%BF%AB%E6%9C%AC%E6%97%B6%E4%BA%BA%E6%B0%94%E4%BD%8E%23) `142.9K 🔥` `NEW`
1. [灌溉360元草莓用800斤牛奶](https://s.weibo.com/weibo?q=%23%E7%81%8C%E6%BA%89360%E5%85%83%E8%8D%89%E8%8E%93%E7%94%A8800%E6%96%A4%E7%89%9B%E5%A5%B6%23) `142.9K 🔥` `NEW`
1. [突然理解了爱坐公交车的人 (Suddenly I understand people who love taking the bus)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E4%BA%86%E7%88%B1%E5%9D%90%E5%85%AC%E4%BA%A4%E8%BD%A6%E7%9A%84%E4%BA%BA%23) `141.4K 🔥` `NEW`
1. [新娘爸爸婚礼现场退还18.8万彩礼](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%88%B8%E7%88%B8%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%E9%80%80%E8%BF%9818.8%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `134.6K 🔥` `NEW`
1. [中方将视情适时调整对美反制措施](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%86%E8%A7%86%E6%83%85%E9%80%82%E6%97%B6%E8%B0%83%E6%95%B4%E5%AF%B9%E7%BE%8E%E5%8F%8D%E5%88%B6%E6%8E%AA%E6%96%BD%23) `130.3K 🔥` `NEW`
1. [任敏G社生图](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8FG%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `120.0K 🔥` `NEW`
1. [西藏徒步失联女生因自责用微笑回应](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%BE%92%E6%AD%A5%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E5%9B%A0%E8%87%AA%E8%B4%A3%E7%94%A8%E5%BE%AE%E7%AC%91%E5%9B%9E%E5%BA%94%23) `118.0K 🔥` `NEW`
1. [张杰谢娜一起滑雪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%B0%A2%E5%A8%9C%E4%B8%80%E8%B5%B7%E6%BB%91%E9%9B%AA%23) `116.2K 🔥` `NEW`
1. [微信新功能面对面传照片](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%96%B0%E5%8A%9F%E8%83%BD%E9%9D%A2%E5%AF%B9%E9%9D%A2%E4%BC%A0%E7%85%A7%E7%89%87%23) `116.0K 🔥` `NEW`
1. [11岁男童在服务区被车撞击后身亡](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E7%94%B7%E7%AB%A5%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%8C%BA%E8%A2%AB%E8%BD%A6%E6%92%9E%E5%87%BB%E5%90%8E%E8%BA%AB%E4%BA%A1%23) `114.5K 🔥` `NEW`
1. [江淮起诉赛车星冰乐胜诉获赔30万](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B7%AE%E8%B5%B7%E8%AF%89%E8%B5%9B%E8%BD%A6%E6%98%9F%E5%86%B0%E4%B9%90%E8%83%9C%E8%AF%89%E8%8E%B7%E8%B5%9430%E4%B8%87%23) `91.6K 🔥` `NEW`
1. [郭晓婷不是替身文学我不接](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E4%B8%8D%E6%98%AF%E6%9B%BF%E8%BA%AB%E6%96%87%E5%AD%A6%E6%88%91%E4%B8%8D%E6%8E%A5%23) `91.1K 🔥` `NEW`
1. [周大福又要涨价 (Chow Tai Fook wants to raise prices again)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%A4%A7%E7%A6%8F%E5%8F%88%E8%A6%81%E6%B6%A8%E4%BB%B7%23) `90.8K 🔥` `NEW`
1. [金价未来几个月或触及6200美元](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9C%AA%E6%9D%A5%E5%87%A0%E4%B8%AA%E6%9C%88%E6%88%96%E8%A7%A6%E5%8F%8A6200%E7%BE%8E%E5%85%83%23) `84.8K 🔥` `NEW`
1. [考研查分能不能给个确切的时间](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86%E8%83%BD%E4%B8%8D%E8%83%BD%E7%BB%99%E4%B8%AA%E7%A1%AE%E5%88%87%E7%9A%84%E6%97%B6%E9%97%B4%23) `275.7K 🔥` `+23%`
1. [新年BBA车价大降](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4BBA%E8%BD%A6%E4%BB%B7%E5%A4%A7%E9%99%8D%23) `263.6K 🔥` `+43%`
1. [衣服的成本价在水洗标上](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E6%9C%8D%E7%9A%84%E6%88%90%E6%9C%AC%E4%BB%B7%E5%9C%A8%E6%B0%B4%E6%B4%97%E6%A0%87%E4%B8%8A%23) `212.6K 🔥`
1. [吴京发谛听 郭帆不转发](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E5%8F%91%E8%B0%9B%E5%90%AC%20%E9%83%AD%E5%B8%86%E4%B8%8D%E8%BD%AC%E5%8F%91%23) `190.2K 🔥`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `108.9K 🔥`
1. [正月剃头死舅舅的真相来了](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E6%9C%88%E5%89%83%E5%A4%B4%E6%AD%BB%E8%88%85%E8%88%85%E7%9A%84%E7%9C%9F%E7%9B%B8%E6%9D%A5%E4%BA%86%23) `843.6K 🔥` `-35%`
1. [男子误喝过期牛奶暴瘦53斤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AF%AF%E5%96%9D%E8%BF%87%E6%9C%9F%E7%89%9B%E5%A5%B6%E6%9A%B4%E7%98%A653%E6%96%A4%23) `329.7K 🔥` `-23%`
1. [葡萄330草莓360元一斤网友惊呆 (Netizens were shocked when grapes cost 330 yuan and strawberries cost 360 yuan per pound.)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84330%E8%8D%89%E8%8E%93360%E5%85%83%E4%B8%80%E6%96%A4%E7%BD%91%E5%8F%8B%E6%83%8A%E5%91%86%23) `264.1K 🔥` `-69%`
1. [考研出分时间 (Postgraduate entrance examination score time)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E5%87%BA%E5%88%86%E6%97%B6%E9%97%B4%23) `213.8K 🔥` `-42%`
1. [黄金再迎直线跳水](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%86%8D%E8%BF%8E%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%23) `211.4K 🔥` `-41%`
1. [湖南湘阴一男子放烟花时炸膛致身亡 (A man in Xiangyin, Hunan died after his chest exploded while setting off fireworks.)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%B9%98%E9%98%B4%E4%B8%80%E7%94%B7%E5%AD%90%E6%94%BE%E7%83%9F%E8%8A%B1%E6%97%B6%E7%82%B8%E8%86%9B%E8%87%B4%E8%BA%AB%E4%BA%A1%23) `176.8K 🔥` `-21%`
1. [连体女婴分离28年后当了妈妈 (Conjoined twin girls become mothers after 28 years of separation)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BD%93%E5%A5%B3%E5%A9%B4%E5%88%86%E7%A6%BB28%E5%B9%B4%E5%90%8E%E5%BD%93%E4%BA%86%E5%A6%88%E5%A6%88%23) `143.5K 🔥` `-43%`
1. [36斤活羊烤完6.9斤涉事餐馆已无顾客](https://s.weibo.com/weibo?q=%2336%E6%96%A4%E6%B4%BB%E7%BE%8A%E7%83%A4%E5%AE%8C6.9%E6%96%A4%E6%B6%89%E4%BA%8B%E9%A4%90%E9%A6%86%E5%B7%B2%E6%97%A0%E9%A1%BE%E5%AE%A2%23) `143.4K 🔥` `-31%`
1. [张婧仪王楚然 通天路你们走不走](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E9%80%9A%E5%A4%A9%E8%B7%AF%E4%BD%A0%E4%BB%AC%E8%B5%B0%E4%B8%8D%E8%B5%B0%23) `142.6K 🔥` `-36%`
1. [孟子义将门独后紫衣造型](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E7%B4%AB%E8%A1%A3%E9%80%A0%E5%9E%8B%23) `142.3K 🔥` `-52%`
1. [任敏 比例](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%20%E6%AF%94%E4%BE%8B%23) `140.1K 🔥` `-38%`
1. [沈腾马丽这种鞋也要穿同款吗](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E9%A9%AC%E4%B8%BD%E8%BF%99%E7%A7%8D%E9%9E%8B%E4%B9%9F%E8%A6%81%E7%A9%BF%E5%90%8C%E6%AC%BE%E5%90%97%23) `136.4K 🔥` `-39%`
1. [汪涵11岁儿子在咖啡店当义工 (Wang Han’s 11-year-old son works as a volunteer in a coffee shop)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B6%B511%E5%B2%81%E5%84%BF%E5%AD%90%E5%9C%A8%E5%92%96%E5%95%A1%E5%BA%97%E5%BD%93%E4%B9%89%E5%B7%A5%23) `132.2K 🔥` `-22%`
1. [李现和杨紫父母穿同款外套](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%92%8C%E6%9D%A8%E7%B4%AB%E7%88%B6%E6%AF%8D%E7%A9%BF%E5%90%8C%E6%AC%BE%E5%A4%96%E5%A5%97%23) `128.3K 🔥` `-38%`
1. [小猫的汗脚](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%9A%84%E6%B1%97%E8%84%9A%23) `127.3K 🔥` `-29%`
1. [卢昱晓回复外婆去世的粉丝 (Lu Yuxiao replies to fans whose grandmother passed away)](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E5%9B%9E%E5%A4%8D%E5%A4%96%E5%A9%86%E5%8E%BB%E4%B8%96%E7%9A%84%E7%B2%89%E4%B8%9D%23) `122.8K 🔥` `-45%`
1. [宋威龙和周围人不在一个图层](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%92%8C%E5%91%A8%E5%9B%B4%E4%BA%BA%E4%B8%8D%E5%9C%A8%E4%B8%80%E4%B8%AA%E5%9B%BE%E5%B1%82%23) `117.2K 🔥` `-31%`
1. [iPhone18 折叠](https://s.weibo.com/weibo?q=%23iPhone18%20%E6%8A%98%E5%8F%A0%23) `116.1K 🔥` `-44%`
1. [日本 (Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%23) `109.7K 🔥` `-43%`
1. [开了个公众号和父母进行魔法对轰 (Opened a public account to engage in magic battles with parents)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E4%BA%86%E4%B8%AA%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E7%88%B6%E6%AF%8D%E8%BF%9B%E8%A1%8C%E9%AD%94%E6%B3%95%E5%AF%B9%E8%BD%B0%23) `95.7K 🔥` `-57%`
1. [12306半夜候补成功1700元车票作废 (12306 Successful waiting list in the middle of the night, ticket worth 1,700 yuan is invalid)](https://s.weibo.com/weibo?q=%2312306%E5%8D%8A%E5%A4%9C%E5%80%99%E8%A1%A5%E6%88%90%E5%8A%9F1700%E5%85%83%E8%BD%A6%E7%A5%A8%E4%BD%9C%E5%BA%9F%23) `88.3K 🔥` `-59%`
1. [沈腾个人总票房达400亿](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E4%B8%AA%E4%BA%BA%E6%80%BB%E7%A5%A8%E6%88%BF%E8%BE%BE400%E4%BA%BF%23) `87.8K 🔥` `-61%`
1. [白鹿首尔回国 (Bailu Seoul returns home)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%A6%96%E5%B0%94%E5%9B%9E%E5%9B%BD%23) `86.1K 🔥` `-29%`

Updated at 2026-02-24 18:00:05

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
