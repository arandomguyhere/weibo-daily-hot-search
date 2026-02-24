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

1. [王楚钦vs户上隼辅 (Wang Chuqin vs Togami Hayabusa)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `246.6K 🔥` `NEW`
1. [闫妮范丞丞马上58马上发](https://s.weibo.com/weibo?q=%23%E9%97%AB%E5%A6%AE%E8%8C%83%E4%B8%9E%E4%B8%9E%E9%A9%AC%E4%B8%8A58%E9%A9%AC%E4%B8%8A%E5%8F%91%23) `204.0K 🔥` `NEW`
1. [纯真年代的爱情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `179.2K 🔥` `NEW`
1. [93岁老人去世将千万财产赠邻居](https://s.weibo.com/weibo?q=%2393%E5%B2%81%E8%80%81%E4%BA%BA%E5%8E%BB%E4%B8%96%E5%B0%86%E5%8D%83%E4%B8%87%E8%B4%A2%E4%BA%A7%E8%B5%A0%E9%82%BB%E5%B1%85%23) `171.7K 🔥` `NEW`
1. [崔雪莉未公开童年照](https://s.weibo.com/weibo?q=%23%E5%B4%94%E9%9B%AA%E8%8E%89%E6%9C%AA%E5%85%AC%E5%BC%80%E7%AB%A5%E5%B9%B4%E7%85%A7%23) `170.4K 🔥` `NEW`
1. [丁程鑫直播](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%9B%B4%E6%92%AD%23) `166.0K 🔥` `NEW`
1. [俄乌冲突](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B9%8C%E5%86%B2%E7%AA%81%23) `163.3K 🔥` `NEW`
1. [苏翊鸣居然演过韩庚爷爷](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%B1%85%E7%84%B6%E6%BC%94%E8%BF%87%E9%9F%A9%E5%BA%9A%E7%88%B7%E7%88%B7%23) `152.1K 🔥` `NEW`
1. [王曼昱3比1胜郑怡静](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B13%E6%AF%941%E8%83%9C%E9%83%91%E6%80%A1%E9%9D%99%23) `151.2K 🔥` `NEW`
1. [瑶一瑶小肉包近30天掉粉4万](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%B0%8F%E8%82%89%E5%8C%85%E8%BF%9130%E5%A4%A9%E6%8E%89%E7%B2%894%E4%B8%87%23) `120.0K 🔥` `NEW`
1. [萌娃数压岁钱数出6亿巨款 (Cute baby counts out 600 million yuan from lucky money)](https://s.weibo.com/weibo?q=%23%E8%90%8C%E5%A8%83%E6%95%B0%E5%8E%8B%E5%B2%81%E9%92%B1%E6%95%B0%E5%87%BA6%E4%BA%BF%E5%B7%A8%E6%AC%BE%23) `100.0K 🔥` `NEW`
1. [程潇素颜皮肤状态](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E7%B4%A0%E9%A2%9C%E7%9A%AE%E8%82%A4%E7%8A%B6%E6%80%81%23) `91.9K 🔥` `NEW`
1. [12岁孩子千元红包被男子摩擦式捡走](https://s.weibo.com/weibo?q=%2312%E5%B2%81%E5%AD%A9%E5%AD%90%E5%8D%83%E5%85%83%E7%BA%A2%E5%8C%85%E8%A2%AB%E7%94%B7%E5%AD%90%E6%91%A9%E6%93%A6%E5%BC%8F%E6%8D%A1%E8%B5%B0%23) `89.8K 🔥` `NEW`
1. [节后机票跳水](https://s.weibo.com/weibo?q=%23%E8%8A%82%E5%90%8E%E6%9C%BA%E7%A5%A8%E8%B7%B3%E6%B0%B4%23) `89.8K 🔥` `NEW`
1. [周翊然身材](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E8%BA%AB%E6%9D%90%23) `87.3K 🔥` `NEW`
1. [国投白银LOF自掏腰包补偿](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E6%8A%95%E7%99%BD%E9%93%B6LOF%E8%87%AA%E6%8E%8F%E8%85%B0%E5%8C%85%E8%A1%A5%E5%81%BF%23) `78.3K 🔥` `NEW`
1. [交警回应男童服务区被车撞击后身亡](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E5%9B%9E%E5%BA%94%E7%94%B7%E7%AB%A5%E6%9C%8D%E5%8A%A1%E5%8C%BA%E8%A2%AB%E8%BD%A6%E6%92%9E%E5%87%BB%E5%90%8E%E8%BA%AB%E4%BA%A1%23) `71.4K 🔥` `NEW`
1. [陈坤问VOGUE九月刊封面人物是谁](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%9D%A4%E9%97%AEVOGUE%E4%B9%9D%E6%9C%88%E5%88%8A%E5%B0%81%E9%9D%A2%E4%BA%BA%E7%89%A9%E6%98%AF%E8%B0%81%23) `68.4K 🔥` `NEW`
1. [正月剃头死舅舅的真相来了](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E6%9C%88%E5%89%83%E5%A4%B4%E6%AD%BB%E8%88%85%E8%88%85%E7%9A%84%E7%9C%9F%E7%9B%B8%E6%9D%A5%E4%BA%86%23) `789.4K 🔥` `+195%`
1. [阿瑟 为艺术献身](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%91%9F%20%E4%B8%BA%E8%89%BA%E6%9C%AF%E7%8C%AE%E8%BA%AB%23) `430.6K 🔥` `+70%`
1. [二手CCD价格暴涨 (Second-hand CCD prices skyrocketed)](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%89%8BCCD%E4%BB%B7%E6%A0%BC%E6%9A%B4%E6%B6%A8%23) `203.7K 🔥` `+86%`
1. [ally自曝是王安宇梦女](https://s.weibo.com/weibo?q=%23ally%E8%87%AA%E6%9B%9D%E6%98%AF%E7%8E%8B%E5%AE%89%E5%AE%87%E6%A2%A6%E5%A5%B3%23) `176.9K 🔥` `+104%`
1. [史上最高分小品少爷和我 (The highest-scoring skit in history: The Young Master and Me)](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%AB%98%E5%88%86%E5%B0%8F%E5%93%81%E5%B0%91%E7%88%B7%E5%92%8C%E6%88%91%23) `159.0K 🔥` `+85%`
1. [Melody道歉](https://s.weibo.com/weibo?q=%23Melody%E9%81%93%E6%AD%89%23) `153.8K 🔥` `+81%`
1. [12306候补半夜成功车票作废谁担责](https://s.weibo.com/weibo?q=%2312306%E5%80%99%E8%A1%A5%E5%8D%8A%E5%A4%9C%E6%88%90%E5%8A%9F%E8%BD%A6%E7%A5%A8%E4%BD%9C%E5%BA%9F%E8%B0%81%E6%8B%85%E8%B4%A3%23) `152.3K 🔥` `+25%`
1. [TF家族高会背景](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E9%AB%98%E4%BC%9A%E8%83%8C%E6%99%AF%23) `150.7K 🔥` `+81%`
1. [开工第一天被通知放假10天](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B7%A5%E7%AC%AC%E4%B8%80%E5%A4%A9%E8%A2%AB%E9%80%9A%E7%9F%A5%E6%94%BE%E5%81%8710%E5%A4%A9%23) `149.8K 🔥` `+72%`
1. [白鹿宋雨琦背后抱](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%83%8C%E5%90%8E%E6%8A%B1%23) `139.0K 🔥` `+66%`
1. [宋雨琦拆了假发](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%8B%86%E4%BA%86%E5%81%87%E5%8F%91%23) `113.3K 🔥` `+39%`
1. [新娘爸爸婚礼现场退还18.8万彩礼](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%88%B8%E7%88%B8%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%E9%80%80%E8%BF%9818.8%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `108.4K 🔥` `+27%`
1. [我应该是神 无本相](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%BA%94%E8%AF%A5%E6%98%AF%E7%A5%9E%20%E6%97%A0%E6%9C%AC%E7%9B%B8%23) `107.2K 🔥` `+34%`
1. [国粤无双 宋亚轩 (Guo Yue Wushuang Song Yaxuan)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%B2%A4%E6%97%A0%E5%8F%8C%20%E5%AE%8B%E4%BA%9A%E8%BD%A9%23) `104.9K 🔥` `+49%`
1. [德约ins转发了一段谷爱凌的采访 (Djokovic reposted an interview with Gu Ailing on Instagram)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BA%A6ins%E8%BD%AC%E5%8F%91%E4%BA%86%E4%B8%80%E6%AE%B5%E8%B0%B7%E7%88%B1%E5%87%8C%E7%9A%84%E9%87%87%E8%AE%BF%23) `98.2K 🔥` `+38%`
1. [多款相机价格暴涨近10倍](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BE%E7%9B%B8%E6%9C%BA%E4%BB%B7%E6%A0%BC%E6%9A%B4%E6%B6%A8%E8%BF%9110%E5%80%8D%23) `1.1M 🔥`
1. [2026春节消费马力全开 (2026 Spring Festival consumption power is on full swing)](https://s.weibo.com/weibo?q=%232026%E6%98%A5%E8%8A%82%E6%B6%88%E8%B4%B9%E9%A9%AC%E5%8A%9B%E5%85%A8%E5%BC%80%23) `625.9K 🔥`
1. [和汪苏泷上淘宝闪购喝开工第一杯](https://s.weibo.com/weibo?q=%23%E5%92%8C%E6%B1%AA%E8%8B%8F%E6%B3%B7%E4%B8%8A%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E5%96%9D%E5%BC%80%E5%B7%A5%E7%AC%AC%E4%B8%80%E6%9D%AF%23) `602.4K 🔥`
1. [男子误喝过期牛奶暴瘦53斤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AF%AF%E5%96%9D%E8%BF%87%E6%9C%9F%E7%89%9B%E5%A5%B6%E6%9A%B4%E7%98%A653%E6%96%A4%23) `187.6K 🔥`
1. [草莓360元一斤公司参保人数为0 (Strawberries cost 360 yuan per pound. The number of insured persons in the company is 0)](https://s.weibo.com/weibo?q=%23%E8%8D%89%E8%8E%93360%E5%85%83%E4%B8%80%E6%96%A4%E5%85%AC%E5%8F%B8%E5%8F%82%E4%BF%9D%E4%BA%BA%E6%95%B0%E4%B8%BA0%23) `123.4K 🔥`
1. [第四次工业革命](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E5%9B%9B%E6%AC%A1%E5%B7%A5%E4%B8%9A%E9%9D%A9%E5%91%BD%23) `117.8K 🔥`
1. [一个烟花烧掉80万](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%83%9F%E8%8A%B1%E7%83%A7%E6%8E%8980%E4%B8%87%23) `110.7K 🔥`
1. [任敏 比例 (Ren Min ratio)](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%20%E6%AF%94%E4%BE%8B%23) `89.8K 🔥`
1. [考研查分能不能给个确切的时间](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86%E8%83%BD%E4%B8%8D%E8%83%BD%E7%BB%99%E4%B8%AA%E7%A1%AE%E5%88%87%E7%9A%84%E6%97%B6%E9%97%B4%23) `88.6K 🔥`
1. [突然理解了爱坐公交车的人 (Suddenly I understand people who love taking the bus)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E4%BA%86%E7%88%B1%E5%9D%90%E5%85%AC%E4%BA%A4%E8%BD%A6%E7%9A%84%E4%BA%BA%23) `88.1K 🔥`
1. [湖南湘阴一男子放烟花时炸膛致身亡 (A man in Xiangyin, Hunan died after his chest exploded while setting off fireworks.)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%B9%98%E9%98%B4%E4%B8%80%E7%94%B7%E5%AD%90%E6%94%BE%E7%83%9F%E8%8A%B1%E6%97%B6%E7%82%B8%E8%86%9B%E8%87%B4%E8%BA%AB%E4%BA%A1%23) `77.7K 🔥`
1. [李现和杨紫父母穿同款外套](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%92%8C%E6%9D%A8%E7%B4%AB%E7%88%B6%E6%AF%8D%E7%A9%BF%E5%90%8C%E6%AC%BE%E5%A4%96%E5%A5%97%23) `77.6K 🔥`
1. [卢昱晓回复外婆去世的粉丝 (Lu Yuxiao replies to fans whose grandmother passed away)](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E5%9B%9E%E5%A4%8D%E5%A4%96%E5%A9%86%E5%8E%BB%E4%B8%96%E7%9A%84%E7%B2%89%E4%B8%9D%23) `68.0K 🔥`
1. [墨西哥毒枭残忍罪行被曝光](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E6%AF%92%E6%9E%AD%E6%AE%8B%E5%BF%8D%E7%BD%AA%E8%A1%8C%E8%A2%AB%E6%9B%9D%E5%85%89%23) `204.4K 🔥` `-22%`
1. [小车23点59分59秒下高速收费员狂喜 (The car got off the expressway at 23:59:59 and the toll collector was ecstatic)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%BD%A623%E7%82%B959%E5%88%8659%E7%A7%92%E4%B8%8B%E9%AB%98%E9%80%9F%E6%94%B6%E8%B4%B9%E5%91%98%E7%8B%82%E5%96%9C%23) `198.7K 🔥` `-75%`
1. [王楚然丞磊 京洛再无佳人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%9E%E7%A3%8A%20%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA%23) `149.4K 🔥` `-30%`
1. [衣服的成本价在水洗标上 (The cost price of the clothes is listed on the washing label)](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E6%9C%8D%E7%9A%84%E6%88%90%E6%9C%AC%E4%BB%B7%E5%9C%A8%E6%B0%B4%E6%B4%97%E6%A0%87%E4%B8%8A%23) `105.3K 🔥` `-23%`
1. [微信新功能面对面传照片](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%96%B0%E5%8A%9F%E8%83%BD%E9%9D%A2%E5%AF%B9%E9%9D%A2%E4%BC%A0%E7%85%A7%E7%89%87%23) `90.5K 🔥` `-36%`

Updated at 2026-02-24 20:34:09

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
