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

1. [美国五角大楼被封锁 (The Pentagon is blocked)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BA%94%E8%A7%92%E5%A4%A7%E6%A5%BC%E8%A2%AB%E5%B0%81%E9%94%81%23) `822.3K 🔥` `NEW`
1. [微信能合并发图了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%83%BD%E5%90%88%E5%B9%B6%E5%8F%91%E5%9B%BE%E4%BA%86%23) `524.3K 🔥` `NEW`
1. [中国航天又一次成功发射](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E5%8F%88%E4%B8%80%E6%AC%A1%E6%88%90%E5%8A%9F%E5%8F%91%E5%B0%84%23) `411.7K 🔥` `NEW`
1. [世界杯冠军和蒙牛有个秘密](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%E5%92%8C%E8%92%99%E7%89%9B%E6%9C%89%E4%B8%AA%E7%A7%98%E5%AF%86%23) `400.9K 🔥` `NEW`
1. [名古屋亚运会电竞参赛名单](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%8F%A4%E5%B1%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E7%94%B5%E7%AB%9E%E5%8F%82%E8%B5%9B%E5%90%8D%E5%8D%95%23) `392.7K 🔥` `NEW`
1. [黄金进入熊市](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%BF%9B%E5%85%A5%E7%86%8A%E5%B8%82%23) `326.1K 🔥` `NEW`
1. [对大房子祛魅了](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%A4%A7%E6%88%BF%E5%AD%90%E7%A5%9B%E9%AD%85%E4%BA%86%23) `308.0K 🔥` `NEW`
1. [清扬品牌高能代言人穆祉丞](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%89%AC%E5%93%81%E7%89%8C%E9%AB%98%E8%83%BD%E4%BB%A3%E8%A8%80%E4%BA%BA%E7%A9%86%E7%A5%89%E4%B8%9E%23) `294.4K 🔥` `NEW`
1. [AI短片效果看到起鸡皮疙瘩了](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E7%89%87%E6%95%88%E6%9E%9C%E7%9C%8B%E5%88%B0%E8%B5%B7%E9%B8%A1%E7%9A%AE%E7%96%99%E7%98%A9%E4%BA%86%23) `279.7K 🔥` `NEW`
1. [伊能静秦昊不在一个图层](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E7%A7%A6%E6%98%8A%E4%B8%8D%E5%9C%A8%E4%B8%80%E4%B8%AA%E5%9B%BE%E5%B1%82%23) `277.9K 🔥` `NEW`
1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `258.4K 🔥` `NEW`
1. [莫离热度](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%83%AD%E5%BA%A6%23) `254.2K 🔥` `NEW`
1. [迪丽热巴曾正面回应隐婚传闻](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9B%BE%E6%AD%A3%E9%9D%A2%E5%9B%9E%E5%BA%94%E9%9A%90%E5%A9%9A%E4%BC%A0%E9%97%BB%23) `251.7K 🔥` `NEW`
1. [女子点外卖备注牛蛙不要烧收到活蛙](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%82%B9%E5%A4%96%E5%8D%96%E5%A4%87%E6%B3%A8%E7%89%9B%E8%9B%99%E4%B8%8D%E8%A6%81%E7%83%A7%E6%94%B6%E5%88%B0%E6%B4%BB%E8%9B%99%23) `251.3K 🔥` `NEW`
1. [张杰谢娜做错了什么](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%B0%A2%E5%A8%9C%E5%81%9A%E9%94%99%E4%BA%86%E4%BB%80%E4%B9%88%23) `245.6K 🔥` `NEW`
1. [马思纯 被公众号标题吓一跳](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%20%E8%A2%AB%E5%85%AC%E4%BC%97%E5%8F%B7%E6%A0%87%E9%A2%98%E5%90%93%E4%B8%80%E8%B7%B3%23) `244.7K 🔥` `NEW`
1. [丁禹兮说请客吃虾是真给报销啊](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E8%AF%B4%E8%AF%B7%E5%AE%A2%E5%90%83%E8%99%BE%E6%98%AF%E7%9C%9F%E7%BB%99%E6%8A%A5%E9%94%80%E5%95%8A%23) `242.6K 🔥` `NEW`
1. [男子借50万给朋友12年未催要](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%80%9F50%E4%B8%87%E7%BB%99%E6%9C%8B%E5%8F%8B12%E5%B9%B4%E6%9C%AA%E5%82%AC%E8%A6%81%23) `167.6K 🔥` `NEW`
1. [刘亦菲的原名是安风](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%9A%84%E5%8E%9F%E5%90%8D%E6%98%AF%E5%AE%89%E9%A3%8E%23) `167.0K 🔥` `NEW`
1. [杨幂她是我多年的粉丝](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%A5%B9%E6%98%AF%E6%88%91%E5%A4%9A%E5%B9%B4%E7%9A%84%E7%B2%89%E4%B8%9D%23) `165.6K 🔥` `NEW`
1. [LPL大回归时代来了 (The era of LPL’s great comeback is here)](https://s.weibo.com/weibo?q=%23LPL%E5%A4%A7%E5%9B%9E%E5%BD%92%E6%97%B6%E4%BB%A3%E6%9D%A5%E4%BA%86%23) `163.7K 🔥` `NEW`
1. [网红录取通知书二手炒至五千元](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%BD%95%E5%8F%96%E9%80%9A%E7%9F%A5%E4%B9%A6%E4%BA%8C%E6%89%8B%E7%82%92%E8%87%B3%E4%BA%94%E5%8D%83%E5%85%83%23) `150.0K 🔥` `NEW`
1. [张元英身材就一个帽子厚度](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%BA%AB%E6%9D%90%E5%B0%B1%E4%B8%80%E4%B8%AA%E5%B8%BD%E5%AD%90%E5%8E%9A%E5%BA%A6%23) `149.5K 🔥` `NEW`
1. [黄晓明上岸 只恭喜不提问](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E4%B8%8A%E5%B2%B8%20%E5%8F%AA%E6%81%AD%E5%96%9C%E4%B8%8D%E6%8F%90%E9%97%AE%23) `145.0K 🔥` `NEW`
1. [轮奸犯踢世界杯日本足协沉默](https://s.weibo.com/weibo?q=%23%E8%BD%AE%E5%A5%B8%E7%8A%AF%E8%B8%A2%E4%B8%96%E7%95%8C%E6%9D%AF%E6%97%A5%E6%9C%AC%E8%B6%B3%E5%8D%8F%E6%B2%89%E9%BB%98%23) `139.6K 🔥` `NEW`
1. [张百乔和老婆一年没互动了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%99%BE%E4%B9%94%E5%92%8C%E8%80%81%E5%A9%86%E4%B8%80%E5%B9%B4%E6%B2%A1%E4%BA%92%E5%8A%A8%E4%BA%86%23) `134.0K 🔥` `NEW`
1. [LISA世界杯开幕式彩排](https://s.weibo.com/weibo?q=%23LISA%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E5%B9%95%E5%BC%8F%E5%BD%A9%E6%8E%92%23) `132.5K 🔥` `NEW`
1. [樊振东回国了](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%9E%E5%9B%BD%E4%BA%86%23) `125.4K 🔥` `NEW`
1. [白鹿突然被叫本名的反应](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%AA%81%E7%84%B6%E8%A2%AB%E5%8F%AB%E6%9C%AC%E5%90%8D%E7%9A%84%E5%8F%8D%E5%BA%94%23) `125.4K 🔥` `NEW`
1. [张新成演技](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E6%88%90%E6%BC%94%E6%8A%80%23) `125.1K 🔥` `NEW`
1. [iPhone18标准版爆料汇总 (Summary of iPhone 18 standard version revelations)](https://s.weibo.com/weibo?q=%23iPhone18%E6%A0%87%E5%87%86%E7%89%88%E7%88%86%E6%96%99%E6%B1%87%E6%80%BB%23) `124.3K 🔥` `NEW`
1. [刘亦菲的家境](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%9A%84%E5%AE%B6%E5%A2%83%23) `118.9K 🔥` `NEW`
1. [王橹杰陈思罕陪官俊臣逛街](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%99%88%E6%80%9D%E7%BD%95%E9%99%AA%E5%AE%98%E4%BF%8A%E8%87%A3%E9%80%9B%E8%A1%97%23) `116.6K 🔥` `NEW`
1. [两部门约谈涉嫌非理性竞争汽车企业](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E9%83%A8%E9%97%A8%E7%BA%A6%E8%B0%88%E6%B6%89%E5%AB%8C%E9%9D%9E%E7%90%86%E6%80%A7%E7%AB%9E%E4%BA%89%E6%B1%BD%E8%BD%A6%E4%BC%81%E4%B8%9A%23) `113.2K 🔥` `NEW`
1. [黄子韬 你咋了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%20%E4%BD%A0%E5%92%8B%E4%BA%86%23) `112.4K 🔥` `NEW`
1. [杨幂 梦回晴川](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E6%A2%A6%E5%9B%9E%E6%99%B4%E5%B7%9D%23) `111.3K 🔥` `NEW`
1. [咪在工作群发了几百条消息](https://s.weibo.com/weibo?q=%23%E5%92%AA%E5%9C%A8%E5%B7%A5%E4%BD%9C%E7%BE%A4%E5%8F%91%E4%BA%86%E5%87%A0%E7%99%BE%E6%9D%A1%E6%B6%88%E6%81%AF%23) `110.1K 🔥` `NEW`
1. [万妮达 歌手补位](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%20%E6%AD%8C%E6%89%8B%E8%A1%A5%E4%BD%8D%23) `107.4K 🔥` `NEW`
1. [江语晨胖了12斤后的腿](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E8%83%96%E4%BA%8612%E6%96%A4%E5%90%8E%E7%9A%84%E8%85%BF%23) `107.4K 🔥` `NEW`
1. [于东来称员工其实不值这么多钱](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E7%A7%B0%E5%91%98%E5%B7%A5%E5%85%B6%E5%AE%9E%E4%B8%8D%E5%80%BC%E8%BF%99%E4%B9%88%E5%A4%9A%E9%92%B1%23) `103.8K 🔥` `NEW`
1. [迪丽热巴剧宣为陈飞宇破了好多例 (The announcement of Dilraba’s drama set many precedents for Chen Feiyu)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%89%A7%E5%AE%A3%E4%B8%BA%E9%99%88%E9%A3%9E%E5%AE%87%E7%A0%B4%E4%BA%86%E5%A5%BD%E5%A4%9A%E4%BE%8B%23) `103.7K 🔥` `NEW`
1. [C罗世界杯小组赛首关便遇三强敌挑战](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%8F%E7%BB%84%E8%B5%9B%E9%A6%96%E5%85%B3%E4%BE%BF%E9%81%87%E4%B8%89%E5%BC%BA%E6%95%8C%E6%8C%91%E6%88%98%23) `103.4K 🔥` `NEW`
1. [张杰谢娜商业布局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%B0%A2%E5%A8%9C%E5%95%86%E4%B8%9A%E5%B8%83%E5%B1%80%23) `103.4K 🔥` `NEW`
1. [把自己戴了很久的东西送给别人](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E8%87%AA%E5%B7%B1%E6%88%B4%E4%BA%86%E5%BE%88%E4%B9%85%E7%9A%84%E4%B8%9C%E8%A5%BF%E9%80%81%E7%BB%99%E5%88%AB%E4%BA%BA%23) `103.2K 🔥` `NEW`
1. [尚界Z7全网首拆](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%E5%85%A8%E7%BD%91%E9%A6%96%E6%8B%86%23) `100.1K 🔥` `NEW`
1. [菲律宾国防部长华裔血统特别反华](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E5%9B%BD%E9%98%B2%E9%83%A8%E9%95%BF%E5%8D%8E%E8%A3%94%E8%A1%80%E7%BB%9F%E7%89%B9%E5%88%AB%E5%8F%8D%E5%8D%8E%23) `96.7K 🔥` `NEW`
1. [新乐道L60价格](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B9%90%E9%81%93L60%E4%BB%B7%E6%A0%BC%23) `92.2K 🔥` `NEW`
1. [特朗普说今晚将重创伊朗](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%BB%8A%E6%99%9A%E5%B0%86%E9%87%8D%E5%88%9B%E4%BC%8A%E6%9C%97%23) `87.6K 🔥` `NEW`
1. [丁程鑫带伤录制西游2](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%B8%A6%E4%BC%A4%E5%BD%95%E5%88%B6%E8%A5%BF%E6%B8%B82%23) `86.9K 🔥` `NEW`
1. [黄金跌麻了后悔没早止盈](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E9%BA%BB%E4%BA%86%E5%90%8E%E6%82%94%E6%B2%A1%E6%97%A9%E6%AD%A2%E7%9B%88%23) `82.3K 🔥` `NEW`
1. [中方制裁菲国防部长 (China sanctions Philippine defense secretary)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%88%B6%E8%A3%81%E8%8F%B2%E5%9B%BD%E9%98%B2%E9%83%A8%E9%95%BF%23) `82.3K 🔥` `NEW`
1. [金价跌了生意却没疯涨时好](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E4%BA%86%E7%94%9F%E6%84%8F%E5%8D%B4%E6%B2%A1%E7%96%AF%E6%B6%A8%E6%97%B6%E5%A5%BD%23) `82.3K 🔥` `NEW`

Updated at 2026-06-12 00:58:40

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
