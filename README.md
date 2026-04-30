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

1. [保洁误拿快递协商时倒地送医后身亡 (The housekeeper accidentally picked up the express delivery and fell to the ground while negotiating and was taken to the hospital and died.)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%B4%81%E8%AF%AF%E6%8B%BF%E5%BF%AB%E9%80%92%E5%8D%8F%E5%95%86%E6%97%B6%E5%80%92%E5%9C%B0%E9%80%81%E5%8C%BB%E5%90%8E%E8%BA%AB%E4%BA%A1%23) `810.5K 🔥` `NEW`
1. [火车坐过站了可以免费坐回去](https://s.weibo.com/weibo?q=%23%E7%81%AB%E8%BD%A6%E5%9D%90%E8%BF%87%E7%AB%99%E4%BA%86%E5%8F%AF%E4%BB%A5%E5%85%8D%E8%B4%B9%E5%9D%90%E5%9B%9E%E5%8E%BB%23) `665.8K 🔥` `NEW`
1. [伊能静回应恩利争议视频](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E5%9B%9E%E5%BA%94%E6%81%A9%E5%88%A9%E4%BA%89%E8%AE%AE%E8%A7%86%E9%A2%91%23) `652.2K 🔥` `NEW`
1. [密逃8阵容](https://s.weibo.com/weibo?q=%23%E5%AF%86%E9%80%838%E9%98%B5%E5%AE%B9%23) `614.4K 🔥` `NEW`
1. [二手烟 唇腭裂](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%89%8B%E7%83%9F%20%E5%94%87%E8%85%AD%E8%A3%82%23) `598.0K 🔥` `NEW`
1. [吵架的时候就回这一句太绝了](https://s.weibo.com/weibo?q=%23%E5%90%B5%E6%9E%B6%E7%9A%84%E6%97%B6%E5%80%99%E5%B0%B1%E5%9B%9E%E8%BF%99%E4%B8%80%E5%8F%A5%E5%A4%AA%E7%BB%9D%E4%BA%86%23) `505.7K 🔥` `NEW`
1. [韩国霸王茶姬爆单](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E7%88%86%E5%8D%95%23) `502.7K 🔥` `NEW`
1. [孙杨母子 镜像共生](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E6%AF%8D%E5%AD%90%20%E9%95%9C%E5%83%8F%E5%85%B1%E7%94%9F%23) `497.0K 🔥` `NEW`
1. [虞书欣造型](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%80%A0%E5%9E%8B%23) `495.3K 🔥` `NEW`
1. [李小冉 毫无运动痕迹](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E6%AF%AB%E6%97%A0%E8%BF%90%E5%8A%A8%E7%97%95%E8%BF%B9%23) `493.1K 🔥` `NEW`
1. [罗永浩替网友喊话西门子 (Luo Yonghao speaks out for netizens about Siemens)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%9B%BF%E7%BD%91%E5%8F%8B%E5%96%8A%E8%AF%9D%E8%A5%BF%E9%97%A8%E5%AD%90%23) `487.0K 🔥` `NEW`
1. [用AI代替员工的快开不起工资了](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E4%BB%A3%E6%9B%BF%E5%91%98%E5%B7%A5%E7%9A%84%E5%BF%AB%E5%BC%80%E4%B8%8D%E8%B5%B7%E5%B7%A5%E8%B5%84%E4%BA%86%23) `484.1K 🔥` `NEW`
1. [Diable加入NS](https://s.weibo.com/weibo?q=%23Diable%E5%8A%A0%E5%85%A5NS%23) `475.7K 🔥` `NEW`
1. [孙杨妈妈 禁赛风波](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%A6%88%E5%A6%88%20%E7%A6%81%E8%B5%9B%E9%A3%8E%E6%B3%A2%23) `470.8K 🔥` `NEW`
1. [张豆豆 幼师](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%20%E5%B9%BC%E5%B8%88%23) `469.2K 🔥` `NEW`
1. [浪姐请了李小冉告过的博主](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%AF%B7%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%E5%91%8A%E8%BF%87%E7%9A%84%E5%8D%9A%E4%B8%BB%23) `463.0K 🔥` `NEW`
1. [中国航司集体订购356架飞机](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%8F%B8%E9%9B%86%E4%BD%93%E8%AE%A2%E8%B4%AD356%E6%9E%B6%E9%A3%9E%E6%9C%BA%23) `459.4K 🔥` `NEW`
1. [突然发现开车通勤意味着自由](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%BC%80%E8%BD%A6%E9%80%9A%E5%8B%A4%E6%84%8F%E5%91%B3%E7%9D%80%E8%87%AA%E7%94%B1%23) `454.8K 🔥` `NEW`
1. [孟子义李昀锐奔跑吧错开录制](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E5%A5%94%E8%B7%91%E5%90%A7%E9%94%99%E5%BC%80%E5%BD%95%E5%88%B6%23) `452.5K 🔥` `NEW`
1. [苗苗回应手心痣越来越大](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E5%9B%9E%E5%BA%94%E6%89%8B%E5%BF%83%E7%97%A3%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%A7%23) `450.6K 🔥` `NEW`
1. [南方人能做到真正的人车合一 (Southerners can truly integrate people and vehicles)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E4%BA%BA%E8%83%BD%E5%81%9A%E5%88%B0%E7%9C%9F%E6%AD%A3%E7%9A%84%E4%BA%BA%E8%BD%A6%E5%90%88%E4%B8%80%23) `446.1K 🔥` `NEW`
1. [14岁儿子点柳絮父母赔了11万](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%84%BF%E5%AD%90%E7%82%B9%E6%9F%B3%E7%B5%AE%E7%88%B6%E6%AF%8D%E8%B5%94%E4%BA%8611%E4%B8%87%23) `436.0K 🔥` `NEW`
1. [中国喂牛水果视频被冒用](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%96%82%E7%89%9B%E6%B0%B4%E6%9E%9C%E8%A7%86%E9%A2%91%E8%A2%AB%E5%86%92%E7%94%A8%23) `432.9K 🔥` `NEW`
1. [秦昊伊能静办了三次婚礼](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E4%BC%8A%E8%83%BD%E9%9D%99%E5%8A%9E%E4%BA%86%E4%B8%89%E6%AC%A1%E5%A9%9A%E7%A4%BC%23) `430.2K 🔥` `NEW`
1. [白酒退市第一股](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%85%92%E9%80%80%E5%B8%82%E7%AC%AC%E4%B8%80%E8%82%A1%23) `425.2K 🔥` `NEW`
1. [詹姆斯说我太老了](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E8%AF%B4%E6%88%91%E5%A4%AA%E8%80%81%E4%BA%86%23) `423.2K 🔥` `NEW`
1. [马龙许昕全程跟队备战世乒赛](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E5%85%A8%E7%A8%8B%E8%B7%9F%E9%98%9F%E5%A4%87%E6%88%98%E4%B8%96%E4%B9%92%E8%B5%9B%23) `420.9K 🔥` `NEW`
1. [朱珠素颜太权威了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E7%B4%A0%E9%A2%9C%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23) `418.1K 🔥` `NEW`
1. [开始推理吧](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A7%23) `413.5K 🔥` `NEW`
1. [不小心触发了真能解决生活问题的AI](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%B0%8F%E5%BF%83%E8%A7%A6%E5%8F%91%E4%BA%86%E7%9C%9F%E8%83%BD%E8%A7%A3%E5%86%B3%E7%94%9F%E6%B4%BB%E9%97%AE%E9%A2%98%E7%9A%84AI%23) `411.7K 🔥` `NEW`
1. [阿姨买肉误输79万多随即取消支付 (Aunt accidentally lost more than 790,000 when buying meat and then canceled the payment)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A7%A8%E4%B9%B0%E8%82%89%E8%AF%AF%E8%BE%9379%E4%B8%87%E5%A4%9A%E9%9A%8F%E5%8D%B3%E5%8F%96%E6%B6%88%E6%94%AF%E4%BB%98%23) `1.1M 🔥` `+259%`
1. [香奈儿回应无底绑带鞋 (Chanel responds to bottomless lace-up shoes)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E5%A5%88%E5%84%BF%E5%9B%9E%E5%BA%94%E6%97%A0%E5%BA%95%E7%BB%91%E5%B8%A6%E9%9E%8B%23) `511.2K 🔥` `+221%`
1. [强烈建议大家去看语文综艺](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E7%83%88%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8E%BB%E7%9C%8B%E8%AF%AD%E6%96%87%E7%BB%BC%E8%89%BA%23) `510.2K 🔥` `+92%`
1. [特斯拉Semi首辆量产车下线](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89Semi%E9%A6%96%E8%BE%86%E9%87%8F%E4%BA%A7%E8%BD%A6%E4%B8%8B%E7%BA%BF%23) `508.5K 🔥` `+60%`
1. [金饰价格断崖下跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E6%96%AD%E5%B4%96%E4%B8%8B%E8%B7%8C%23) `490.9K 🔥` `+58%`
1. [王腾称加仓了小米股票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E7%A7%B0%E5%8A%A0%E4%BB%93%E4%BA%86%E5%B0%8F%E7%B1%B3%E8%82%A1%E7%A5%A8%23) `484.3K 🔥` `+54%`
1. [马頔发言争议后首发博](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E5%8F%91%E8%A8%80%E4%BA%89%E8%AE%AE%E5%90%8E%E9%A6%96%E5%8F%91%E5%8D%9A%23) `481.1K 🔥` `+52%`
1. [吴宣仪母亲与乐华谈判视频首曝光](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%AF%8D%E4%BA%B2%E4%B8%8E%E4%B9%90%E5%8D%8E%E8%B0%88%E5%88%A4%E8%A7%86%E9%A2%91%E9%A6%96%E6%9B%9D%E5%85%89%23) `478.7K 🔥` `+51%`
1. [5月起未经同意不得发送商业短信 (From May, no commercial text messages can be sent without consent)](https://s.weibo.com/weibo?q=%235%E6%9C%88%E8%B5%B7%E6%9C%AA%E7%BB%8F%E5%90%8C%E6%84%8F%E4%B8%8D%E5%BE%97%E5%8F%91%E9%80%81%E5%95%86%E4%B8%9A%E7%9F%AD%E4%BF%A1%23) `460.5K 🔥` `+45%`
1. [古天乐被传隐婚生子 (Louis Koo is rumored to have a child from a hidden marriage)](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E8%A2%AB%E4%BC%A0%E9%9A%90%E5%A9%9A%E7%94%9F%E5%AD%90%23) `443.6K 🔥` `+40%`
1. [韩国演员朴东彬去世](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%BC%94%E5%91%98%E6%9C%B4%E4%B8%9C%E5%BD%AC%E5%8E%BB%E4%B8%96%23) `440.1K 🔥` `+79%`
1. [韩汶栩删16级粉丝解散粉丝群](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%E5%88%A016%E7%BA%A7%E7%B2%89%E4%B8%9D%E8%A7%A3%E6%95%A3%E7%B2%89%E4%B8%9D%E7%BE%A4%23) `428.5K 🔥` `+37%`
1. [问界M6交付速度刺激购买决策 (Wenjie M6 delivery speed stimulates purchase decision)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM6%E4%BA%A4%E4%BB%98%E9%80%9F%E5%BA%A6%E5%88%BA%E6%BF%80%E8%B4%AD%E4%B9%B0%E5%86%B3%E7%AD%96%23) `415.8K 🔥` `+58%`
1. [C罗霸气回应挑衅我有五个欧冠](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%9C%B8%E6%B0%94%E5%9B%9E%E5%BA%94%E6%8C%91%E8%A1%85%E6%88%91%E6%9C%89%E4%BA%94%E4%B8%AA%E6%AC%A7%E5%86%A0%23) `408.3K 🔥` `+54%`
1. [微信从聊天工具变成了工作软件 (WeChat has transformed from a chat tool into a work software)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E4%BB%8E%E8%81%8A%E5%A4%A9%E5%B7%A5%E5%85%B7%E5%8F%98%E6%88%90%E4%BA%86%E5%B7%A5%E4%BD%9C%E8%BD%AF%E4%BB%B6%23) `615.3K 🔥`
1. [年轻人出门越来越极简了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%87%BA%E9%97%A8%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%9E%81%E7%AE%80%E4%BA%86%23) `447.8K 🔥`
1. [中1000w彩票冷知识](https://s.weibo.com/weibo?q=%23%E4%B8%AD1000w%E5%BD%A9%E7%A5%A8%E5%86%B7%E7%9F%A5%E8%AF%86%23) `438.9K 🔥`
1. [宋雨琦 跑男](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E8%B7%91%E7%94%B7%23) `499.7K 🔥` `-24%`
1. [我妈养我vs我养我自己](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A6%88%E5%85%BB%E6%88%91vs%E6%88%91%E5%85%BB%E6%88%91%E8%87%AA%E5%B7%B1%23) `464.8K 🔥` `-31%`

Updated at 2026-04-30 17:01:30

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
