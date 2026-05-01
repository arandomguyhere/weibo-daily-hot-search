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

1. [南开大学已成立调查组 (Nankai University has established an investigation team)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%BC%80%E5%A4%A7%E5%AD%A6%E5%B7%B2%E6%88%90%E7%AB%8B%E8%B0%83%E6%9F%A5%E7%BB%84%23) `839.8K 🔥` `NEW`
1. [文旅活动精彩纷呈点燃假日出行](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%97%85%E6%B4%BB%E5%8A%A8%E7%B2%BE%E5%BD%A9%E7%BA%B7%E5%91%88%E7%82%B9%E7%87%83%E5%81%87%E6%97%A5%E5%87%BA%E8%A1%8C%23) `714.3K 🔥` `NEW`
1. [王濛 唐艺昕是骂人骂上去的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E5%94%90%E8%89%BA%E6%98%95%E6%98%AF%E9%AA%82%E4%BA%BA%E9%AA%82%E4%B8%8A%E5%8E%BB%E7%9A%84%23) `696.3K 🔥` `NEW`
1. [家里没遗传到父母优点的孩子](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%87%8C%E6%B2%A1%E9%81%97%E4%BC%A0%E5%88%B0%E7%88%B6%E6%AF%8D%E4%BC%98%E7%82%B9%E7%9A%84%E5%AD%A9%E5%AD%90%23) `652.3K 🔥` `NEW`
1. [曾沛慈个人喜爱度第五](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%AA%E4%BA%BA%E5%96%9C%E7%88%B1%E5%BA%A6%E7%AC%AC%E4%BA%94%23) `637.1K 🔥` `NEW`
1. [五一假期抓紧10间哈哈笑](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F%E6%8A%93%E7%B4%A710%E9%97%B4%E5%93%88%E5%93%88%E7%AC%91%23) `608.0K 🔥` `NEW`
1. [豆包挑榴莲](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%8C%91%E6%A6%B4%E8%8E%B2%23) `357.8K 🔥` `NEW`
1. [浪姐二公乘风值排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E4%B9%98%E9%A3%8E%E5%80%BC%E6%8E%92%E5%90%8D%23) `325.6K 🔥` `NEW`
1. [鸿蒙智行4月交付32759辆汽车](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C4%E6%9C%88%E4%BA%A4%E4%BB%9832759%E8%BE%86%E6%B1%BD%E8%BD%A6%23) `325.4K 🔥` `NEW`
1. [顾茜茜怀孕五个月了](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E8%8C%9C%E8%8C%9C%E6%80%80%E5%AD%95%E4%BA%94%E4%B8%AA%E6%9C%88%E4%BA%86%23) `323.0K 🔥` `NEW`
1. [ZETA对战TE (ZETA vs. TE)](https://s.weibo.com/weibo?q=%23ZETA%E5%AF%B9%E6%88%98TE%23) `320.9K 🔥` `NEW`
1. [孙怡选了阚清子](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%80%89%E4%BA%86%E9%98%9A%E6%B8%85%E5%AD%90%23) `320.2K 🔥` `NEW`
1. [陈瑶没选张月](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%B2%A1%E9%80%89%E5%BC%A0%E6%9C%88%23) `318.4K 🔥` `NEW`
1. [约基奇又打架了](https://s.weibo.com/weibo?q=%23%E7%BA%A6%E5%9F%BA%E5%A5%87%E5%8F%88%E6%89%93%E6%9E%B6%E4%BA%86%23) `317.2K 🔥` `NEW`
1. [第一次觉得五一坐大巴真香](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%89%E5%BE%97%E4%BA%94%E4%B8%80%E5%9D%90%E5%A4%A7%E5%B7%B4%E7%9C%9F%E9%A6%99%23) `315.8K 🔥` `NEW`
1. [特朗普称美国结束对伊朗战争](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E5%9B%BD%E7%BB%93%E6%9D%9F%E5%AF%B9%E4%BC%8A%E6%9C%97%E6%88%98%E4%BA%89%23) `314.3K 🔥` `NEW`
1. [孔雀东南飞具象化了](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%80%E4%B8%9C%E5%8D%97%E9%A3%9E%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `314.0K 🔥` `NEW`
1. [明日方舟七周年](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E4%B8%83%E5%91%A8%E5%B9%B4%23) `311.2K 🔥` `NEW`
1. [妈妈自曝曾故意不让瑶一瑶白天睡觉](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%87%AA%E6%9B%9D%E6%9B%BE%E6%95%85%E6%84%8F%E4%B8%8D%E8%AE%A9%E7%91%B6%E4%B8%80%E7%91%B6%E7%99%BD%E5%A4%A9%E7%9D%A1%E8%A7%89%23) `309.6K 🔥` `NEW`
1. [长沙地铁无人行李箱墙又出现了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%9C%B0%E9%93%81%E6%97%A0%E4%BA%BA%E8%A1%8C%E6%9D%8E%E7%AE%B1%E5%A2%99%E5%8F%88%E5%87%BA%E7%8E%B0%E4%BA%86%23) `303.4K 🔥` `NEW`
1. [时代少年团演唱会造型 (Times Youth League concert look)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%A0%E5%9E%8B%23) `290.2K 🔥` `NEW`
1. [10间敢死队 陈思诚水平](https://s.weibo.com/weibo?q=%2310%E9%97%B4%E6%95%A2%E6%AD%BB%E9%98%9F%20%E9%99%88%E6%80%9D%E8%AF%9A%E6%B0%B4%E5%B9%B3%23) `270.0K 🔥` `NEW`
1. [刘品言曾多次婉拒浪姐邀约](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%93%81%E8%A8%80%E6%9B%BE%E5%A4%9A%E6%AC%A1%E5%A9%89%E6%8B%92%E6%B5%AA%E5%A7%90%E9%82%80%E7%BA%A6%23) `243.2K 🔥` `NEW`
1. [马龙出行带娃参加斯巴达](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E5%87%BA%E8%A1%8C%E5%B8%A6%E5%A8%83%E5%8F%82%E5%8A%A0%E6%96%AF%E5%B7%B4%E8%BE%BE%23) `188.4K 🔥` `NEW`
1. [森林狼淘汰掘金](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E7%8B%BC%E6%B7%98%E6%B1%B0%E6%8E%98%E9%87%91%23) `176.6K 🔥` `NEW`
1. [广州地铁一男子向乘客喷辣椒水](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%9C%B0%E9%93%81%E4%B8%80%E7%94%B7%E5%AD%90%E5%90%91%E4%B9%98%E5%AE%A2%E5%96%B7%E8%BE%A3%E6%A4%92%E6%B0%B4%23) `164.1K 🔥` `NEW`
1. [原来不止我一个人在假装大人](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%AD%A2%E6%88%91%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%9C%A8%E5%81%87%E8%A3%85%E5%A4%A7%E4%BA%BA%23) `163.7K 🔥` `NEW`
1. [吴宣仪听到粉丝力挺哭了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E5%90%AC%E5%88%B0%E7%B2%89%E4%B8%9D%E5%8A%9B%E6%8C%BA%E5%93%AD%E4%BA%86%23) `142.3K 🔥` `NEW`
1. [金饰克价回落买不买](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E5%9B%9E%E8%90%BD%E4%B9%B0%E4%B8%8D%E4%B9%B0%23) `142.3K 🔥` `NEW`
1. [DeepSeek梦话大赏](https://s.weibo.com/weibo?q=%23DeepSeek%E6%A2%A6%E8%AF%9D%E5%A4%A7%E8%B5%8F%23) `140.8K 🔥` `NEW`
1. [labubu冰箱被炒至19999元 (Labubu refrigerator is priced at 19,999 yuan)](https://s.weibo.com/weibo?q=%23labubu%E5%86%B0%E7%AE%B1%E8%A2%AB%E7%82%92%E8%87%B319999%E5%85%83%23) `606.8K 🔥` `+115%`
1. [莫氏鸡煲已报警](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `1.2M 🔥`
1. [迪丽热巴和素人合影](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%92%8C%E7%B4%A0%E4%BA%BA%E5%90%88%E5%BD%B1%23) `324.0K 🔥`
1. [李小冉方向节目组沟通结果曝光](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%96%B9%E5%90%91%E8%8A%82%E7%9B%AE%E7%BB%84%E6%B2%9F%E9%80%9A%E7%BB%93%E6%9E%9C%E6%9B%9D%E5%85%89%23) `306.4K 🔥`
1. [陈璟翊 时代峰峻](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%92%9F%E7%BF%8A%20%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%23) `299.5K 🔥`
1. [深圳地铁去年亏超371亿元](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%9C%B0%E9%93%81%E5%8E%BB%E5%B9%B4%E4%BA%8F%E8%B6%85371%E4%BA%BF%E5%85%83%23) `295.8K 🔥`
1. [苹果创始人站台追觅旗下手机](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%88%9B%E5%A7%8B%E4%BA%BA%E7%AB%99%E5%8F%B0%E8%BF%BD%E8%A7%85%E6%97%97%E4%B8%8B%E6%89%8B%E6%9C%BA%23) `294.6K 🔥`
1. [小米汽车4月交付量超3万台 (Xiaomi Motors delivered more than 30,000 units in April)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A64%E6%9C%88%E4%BA%A4%E4%BB%98%E9%87%8F%E8%B6%853%E4%B8%87%E5%8F%B0%23) `291.0K 🔥`
1. [田曦薇 记得给我开美颜 (Tian Xiwei, remember to prescribe beauty for me)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E8%AE%B0%E5%BE%97%E7%BB%99%E6%88%91%E5%BC%80%E7%BE%8E%E9%A2%9C%23) `287.0K 🔥`
1. [你终于发现上大学的真正主线了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%BB%88%E4%BA%8E%E5%8F%91%E7%8E%B0%E4%B8%8A%E5%A4%A7%E5%AD%A6%E7%9A%84%E7%9C%9F%E6%AD%A3%E4%B8%BB%E7%BA%BF%E4%BA%86%23) `273.7K 🔥`
1. [中国首例脑机接口植入患者能下棋了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A6%96%E4%BE%8B%E8%84%91%E6%9C%BA%E6%8E%A5%E5%8F%A3%E6%A4%8D%E5%85%A5%E6%82%A3%E8%80%85%E8%83%BD%E4%B8%8B%E6%A3%8B%E4%BA%86%23) `141.1K 🔥`
1. [点赞多姿多彩的中国劳动者](https://s.weibo.com/weibo?q=%23%E7%82%B9%E8%B5%9E%E5%A4%9A%E5%A7%BF%E5%A4%9A%E5%BD%A9%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%8A%B3%E5%8A%A8%E8%80%85%23) `314.9K 🔥` `-75%`
1. [男子突遭重大变故车内连睡7天 (A man suddenly suffered a serious accident and slept in the car for 7 days)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%AA%81%E9%81%AD%E9%87%8D%E5%A4%A7%E5%8F%98%E6%95%85%E8%BD%A6%E5%86%85%E8%BF%9E%E7%9D%A17%E5%A4%A9%23) `298.7K 🔥` `-49%`
1. [初代跑男是不是在商量重组 (Is the first generation of Running Man discussing a reorganization?)](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%BB%A3%E8%B7%91%E7%94%B7%E6%98%AF%E4%B8%8D%E6%98%AF%E5%9C%A8%E5%95%86%E9%87%8F%E9%87%8D%E7%BB%84%23) `188.3K 🔥` `-33%`
1. [labubu冰箱秒空](https://s.weibo.com/weibo?q=%23labubu%E5%86%B0%E7%AE%B1%E7%A7%92%E7%A9%BA%23) `178.3K 🔥` `-66%`
1. [女孩溺亡邻居被判赔66万后求再审](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%BA%BA%E4%BA%A1%E9%82%BB%E5%B1%85%E8%A2%AB%E5%88%A4%E8%B5%9466%E4%B8%87%E5%90%8E%E6%B1%82%E5%86%8D%E5%AE%A1%23) `172.0K 🔥` `-36%`
1. [女演员一声娘网友感叹内娱在选什么 (Actress Yi Yi Niang and netizens lamented what they were choosing for domestic entertainment)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E4%B8%80%E5%A3%B0%E5%A8%98%E7%BD%91%E5%8F%8B%E6%84%9F%E5%8F%B9%E5%86%85%E5%A8%B1%E5%9C%A8%E9%80%89%E4%BB%80%E4%B9%88%23) `154.9K 🔥` `-39%`
1. [酒店249元一晚涨到1600元被吐槽](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97249%E5%85%83%E4%B8%80%E6%99%9A%E6%B6%A8%E5%88%B01600%E5%85%83%E8%A2%AB%E5%90%90%E6%A7%BD%23) `151.9K 🔥` `-48%`
1. [月销超7万零跑创新高](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%94%80%E8%B6%857%E4%B8%87%E9%9B%B6%E8%B7%91%E5%88%9B%E6%96%B0%E9%AB%98%23) `141.7K 🔥` `-48%`
1. [面包要涨价了](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E5%8C%85%E8%A6%81%E6%B6%A8%E4%BB%B7%E4%BA%86%23) `140.4K 🔥` `-55%`

Updated at 2026-05-01 14:47:34

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
