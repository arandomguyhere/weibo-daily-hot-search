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

1. [姆巴佩进球 (Mbappe scores a goal)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%BF%9B%E7%90%83%23) `429.5K 🔥` `NEW`
1. [雅迪绝区零联动](https://s.weibo.com/weibo?q=%23%E9%9B%85%E8%BF%AA%E7%BB%9D%E5%8C%BA%E9%9B%B6%E8%81%94%E5%8A%A8%23) `358.3K 🔥` `NEW`
1. [姆巴佩点球被扑](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%82%B9%E7%90%83%E8%A2%AB%E6%89%91%23) `180.7K 🔥` `NEW`
1. [摩洛哥门将神了](https://s.weibo.com/weibo?q=%23%E6%91%A9%E6%B4%9B%E5%93%A5%E9%97%A8%E5%B0%86%E7%A5%9E%E4%BA%86%23) `156.7K 🔥` `NEW`
1. [法国摩洛哥 阿根廷裁判](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%91%A9%E6%B4%9B%E5%93%A5%20%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A3%81%E5%88%A4%23) `156.6K 🔥` `NEW`
1. [登贝莱远射破门](https://s.weibo.com/weibo?q=%23%E7%99%BB%E8%B4%9D%E8%8E%B1%E8%BF%9C%E5%B0%84%E7%A0%B4%E9%97%A8%23) `98.6K 🔥` `NEW`
1. [姆巴佩破门](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%A0%B4%E9%97%A8%23) `51.9K 🔥` `NEW`
1. [法国半场0比0摩洛哥](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%8D%8A%E5%9C%BA0%E6%AF%940%E6%91%A9%E6%B4%9B%E5%93%A5%23) `36.6K 🔥` `NEW`
1. [世界杯点球魔咒](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E7%82%B9%E7%90%83%E9%AD%94%E5%92%92%23) `30.8K 🔥` `NEW`
1. [被救援航母转移场面震撼到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%95%91%E6%8F%B4%E8%88%AA%E6%AF%8D%E8%BD%AC%E7%A7%BB%E5%9C%BA%E9%9D%A2%E9%9C%87%E6%92%BC%E5%88%B0%E4%BA%86%23) `29.7K 🔥` `NEW`
1. [湖北要求自查落地窗玻璃幕墙 (Hubei requires self-inspection of floor-to-ceiling glass curtain walls)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E8%A6%81%E6%B1%82%E8%87%AA%E6%9F%A5%E8%90%BD%E5%9C%B0%E7%AA%97%E7%8E%BB%E7%92%83%E5%B9%95%E5%A2%99%23) `29.7K 🔥` `NEW`
1. [日本二战遗孤竟成反华急先锋](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%8C%E6%88%98%E9%81%97%E5%AD%A4%E7%AB%9F%E6%88%90%E5%8F%8D%E5%8D%8E%E6%80%A5%E5%85%88%E9%94%8B%23) `29.7K 🔥` `NEW`
1. [台风巴威登陆后将继续深入内陆](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%90%8E%E5%B0%86%E7%BB%A7%E7%BB%AD%E6%B7%B1%E5%85%A5%E5%86%85%E9%99%86%23) `29.7K 🔥` `NEW`
1. [47岁工人坠亡账户里攒下20多万](https://s.weibo.com/weibo?q=%2347%E5%B2%81%E5%B7%A5%E4%BA%BA%E5%9D%A0%E4%BA%A1%E8%B4%A6%E6%88%B7%E9%87%8C%E6%94%92%E4%B8%8B20%E5%A4%9A%E4%B8%87%23) `29.7K 🔥` `NEW`
1. [福建起火鞋厂燃烧物质为鞋材](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E8%B5%B7%E7%81%AB%E9%9E%8B%E5%8E%82%E7%87%83%E7%83%A7%E7%89%A9%E8%B4%A8%E4%B8%BA%E9%9E%8B%E6%9D%90%23) `29.7K 🔥` `NEW`
1. [法国vs摩洛哥 (France vs Morocco)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E6%91%A9%E6%B4%9B%E5%93%A5%23) `1.8M 🔥` `+258%`
1. [贵港受困师生全部完成转移安置 (All stranded teachers and students in Guigang have been relocated)](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E6%B8%AF%E5%8F%97%E5%9B%B0%E5%B8%88%E7%94%9F%E5%85%A8%E9%83%A8%E5%AE%8C%E6%88%90%E8%BD%AC%E7%A7%BB%E5%AE%89%E7%BD%AE%23) `386.9K 🔥` `+37%`
1. [李荣浩演唱会天津站取消](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A4%A9%E6%B4%A5%E7%AB%99%E5%8F%96%E6%B6%88%23) `257.4K 🔥` `+99%`
1. [正午阳光 警告函](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%20%E8%AD%A6%E5%91%8A%E5%87%BD%23) `207.3K 🔥` `+51%`
1. [日本遗孤吃中国饭长大竟要做鬼](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%81%97%E5%AD%A4%E5%90%83%E4%B8%AD%E5%9B%BD%E9%A5%AD%E9%95%BF%E5%A4%A7%E7%AB%9F%E8%A6%81%E5%81%9A%E9%AC%BC%23) `121.2K 🔥` `+46%`
1. [情侣接吻摔倒打翻火锅烫伤前排女孩 (Couple fell while kissing, knocked over the hot pot and scalded the girl in the front row)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E6%8E%A5%E5%90%BB%E6%91%94%E5%80%92%E6%89%93%E7%BF%BB%E7%81%AB%E9%94%85%E7%83%AB%E4%BC%A4%E5%89%8D%E6%8E%92%E5%A5%B3%E5%AD%A9%23) `100.9K 🔥` `+38%`
1. [长沙德峰小区车位被占事件 (Incident of parking spaces occupied in Changsha Defeng Community)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%BE%B7%E5%B3%B0%E5%B0%8F%E5%8C%BA%E8%BD%A6%E4%BD%8D%E8%A2%AB%E5%8D%A0%E4%BA%8B%E4%BB%B6%23) `67.4K 🔥` `+55%`
1. [女子霸占车位8天宁赔500也不愿道歉 (Woman who occupied parking space for 8 days would rather pay 500 than apologize)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9C%B8%E5%8D%A0%E8%BD%A6%E4%BD%8D8%E5%A4%A9%E5%AE%81%E8%B5%94500%E4%B9%9F%E4%B8%8D%E6%84%BF%E9%81%93%E6%AD%89%23) `54.3K 🔥` `+41%`
1. [当救援航母驶入洪水校园](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%95%91%E6%8F%B4%E8%88%AA%E6%AF%8D%E9%A9%B6%E5%85%A5%E6%B4%AA%E6%B0%B4%E6%A0%A1%E5%9B%AD%23) `49.5K 🔥` `+22%`
1. [温网 (Wimbledon)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%BD%91%23) `41.1K 🔥` `+21%`
1. [台风巴威又改路线了 (Typhoon Bavi changes its route again)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%8F%88%E6%94%B9%E8%B7%AF%E7%BA%BF%E4%BA%86%23) `354.8K 🔥`
1. [台风天吃到职场黑利了 (Typhoon weather brings huge benefits in the workplace)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%A4%A9%E5%90%83%E5%88%B0%E8%81%8C%E5%9C%BA%E9%BB%91%E5%88%A9%E4%BA%86%23) `119.2K 🔥`
1. [福建火灾发生时鞋厂内共有239人](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E7%81%AB%E7%81%BE%E5%8F%91%E7%94%9F%E6%97%B6%E9%9E%8B%E5%8E%82%E5%86%85%E5%85%B1%E6%9C%89239%E4%BA%BA%23) `99.3K 🔥`
1. [晋江鞋厂火灾已致28死 (Jinjiang shoe factory fire kills 28)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E9%9E%8B%E5%8E%82%E7%81%AB%E7%81%BE%E5%B7%B2%E8%87%B428%E6%AD%BB%23) `62.2K 🔥`
1. [晋江鞋厂负责人已被控制 (The person in charge of Jinjiang Shoe Factory has been controlled)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E9%9E%8B%E5%8E%82%E8%B4%9F%E8%B4%A3%E4%BA%BA%E5%B7%B2%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `36.6K 🔥`
1. [百花杀 九重紫](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%20%E4%B9%9D%E9%87%8D%E7%B4%AB%23) `35.6K 🔥`
1. [阿根廷帅气飞行教练突然跳机自杀](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%B8%85%E6%B0%94%E9%A3%9E%E8%A1%8C%E6%95%99%E7%BB%83%E7%AA%81%E7%84%B6%E8%B7%B3%E6%9C%BA%E8%87%AA%E6%9D%80%23) `32.2K 🔥`
1. [宋威龙张婧仪晒合照](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%99%92%E5%90%88%E7%85%A7%23) `32.1K 🔥`
1. [前妻被害28年男子因愧疚一直单身](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A6%BB%E8%A2%AB%E5%AE%B328%E5%B9%B4%E7%94%B7%E5%AD%90%E5%9B%A0%E6%84%A7%E7%96%9A%E4%B8%80%E7%9B%B4%E5%8D%95%E8%BA%AB%23) `29.7K 🔥`
1. [杨幂赢面很大](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%B5%A2%E9%9D%A2%E5%BE%88%E5%A4%A7%23) `29.7K 🔥`
1. [动力舟桥转移被困师生](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E5%8A%9B%E8%88%9F%E6%A1%A5%E8%BD%AC%E7%A7%BB%E8%A2%AB%E5%9B%B0%E5%B8%88%E7%94%9F%23) `29.7K 🔥`
1. [湖北雷暴龙卷风](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E9%9B%B7%E6%9A%B4%E9%BE%99%E5%8D%B7%E9%A3%8E%23) `29.7K 🔥`
1. [福建晋江一鞋厂发生火灾](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E6%99%8B%E6%B1%9F%E4%B8%80%E9%9E%8B%E5%8E%82%E5%8F%91%E7%94%9F%E7%81%AB%E7%81%BE%23) `29.7K 🔥`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `29.7K 🔥`
1. [长鑫科技申购 (Changxin Technology Subscription)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E7%94%B3%E8%B4%AD%23) `29.7K 🔥`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `29.7K 🔥`
1. [TOP青岛演唱会抢票时间](https://s.weibo.com/weibo?q=%23TOP%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8A%A2%E7%A5%A8%E6%97%B6%E9%97%B4%23) `29.7K 🔥`
1. [第38届百花奖提名名单](https://s.weibo.com/weibo?q=%23%E7%AC%AC38%E5%B1%8A%E7%99%BE%E8%8A%B1%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `29.7K 🔥`
1. [黄冈一住户被龙卷吸走从11楼坠亡 (A resident in Huanggang was sucked away by a tornado and fell from the 11th floor to his death.)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%86%88%E4%B8%80%E4%BD%8F%E6%88%B7%E8%A2%AB%E9%BE%99%E5%8D%B7%E5%90%B8%E8%B5%B0%E4%BB%8E11%E6%A5%BC%E5%9D%A0%E4%BA%A1%23) `29.7K 🔥`
1. [BLG战胜HLE (BLG defeated HLE)](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CHLE%23) `29.7K 🔥`
1. [00后任北大博导](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E4%BB%BB%E5%8C%97%E5%A4%A7%E5%8D%9A%E5%AF%BC%23) `29.7K 🔥`
1. [洪灾已致广西39死9失联 (Floods have killed 39 in Guangxi and left 9 missing)](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E7%81%BE%E5%B7%B2%E8%87%B4%E5%B9%BF%E8%A5%BF39%E6%AD%BB9%E5%A4%B1%E8%81%94%23) `29.7K 🔥`
1. [宁波大学回应研究员被指孕期出轨](https://s.weibo.com/weibo?q=%23%E5%AE%81%E6%B3%A2%E5%A4%A7%E5%AD%A6%E5%9B%9E%E5%BA%94%E7%A0%94%E7%A9%B6%E5%91%98%E8%A2%AB%E6%8C%87%E5%AD%95%E6%9C%9F%E5%87%BA%E8%BD%A8%23) `29.7K 🔥`
1. [儿子哭诉凶手花的钱是我妈妈命换的](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%93%AD%E8%AF%89%E5%87%B6%E6%89%8B%E8%8A%B1%E7%9A%84%E9%92%B1%E6%98%AF%E6%88%91%E5%A6%88%E5%A6%88%E5%91%BD%E6%8D%A2%E7%9A%84%23) `29.7K 🔥`
1. [广西有村民抓了上百斤蛇](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%9C%89%E6%9D%91%E6%B0%91%E6%8A%93%E4%BA%86%E4%B8%8A%E7%99%BE%E6%96%A4%E8%9B%87%23) `29.7K 🔥`
1. [超强台风巴威登陆区域锁定](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%8C%BA%E5%9F%9F%E9%94%81%E5%AE%9A%23) `193.9K 🔥` `-25%`

Updated at 2026-07-10 05:57:53

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
