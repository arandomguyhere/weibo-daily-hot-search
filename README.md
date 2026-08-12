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

1. [张婧仪代言比亚迪秦MAX (Zhang Jingyi endorses BYD Qin MAX)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E4%BB%A3%E8%A8%80%E6%AF%94%E4%BA%9A%E8%BF%AA%E7%A7%A6MAX%23) `395.2K 🔥` `NEW`
1. [DeepSeek发布V4Pro正式版](https://s.weibo.com/weibo?q=%23DeepSeek%E5%8F%91%E5%B8%83V4Pro%E6%AD%A3%E5%BC%8F%E7%89%88%23) `182.0K 🔥` `NEW`
1. [升学宴35桌无人上桌](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B435%E6%A1%8C%E6%97%A0%E4%BA%BA%E4%B8%8A%E6%A1%8C%23) `181.3K 🔥` `NEW`
1. [网传我欲乘风陈飞宇周翊然都在争取](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%E9%99%88%E9%A3%9E%E5%AE%87%E5%91%A8%E7%BF%8A%E7%84%B6%E9%83%BD%E5%9C%A8%E4%BA%89%E5%8F%96%23) `145.9K 🔥` `NEW`
1. [胚胎案妻子回应丈夫花百万救命](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E4%B8%88%E5%A4%AB%E8%8A%B1%E7%99%BE%E4%B8%87%E6%95%91%E5%91%BD%23) `143.9K 🔥` `NEW`
1. [特朗普躲避暗杀更多细节曝光](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BA%B2%E9%81%BF%E6%9A%97%E6%9D%80%E6%9B%B4%E5%A4%9A%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `142.3K 🔥` `NEW`
1. [长期饥一顿饱一顿的受害者出现了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E9%A5%A5%E4%B8%80%E9%A1%BF%E9%A5%B1%E4%B8%80%E9%A1%BF%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `142.1K 🔥` `NEW`
1. [两女子帮助黑人至中国幼儿园任教被判刑](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A5%B3%E5%AD%90%E5%B8%AE%E5%8A%A9%E9%BB%91%E4%BA%BA%E8%87%B3%E4%B8%AD%E5%9B%BD%E5%B9%BC%E5%84%BF%E5%9B%AD%E4%BB%BB%E6%95%99%E8%A2%AB%E5%88%A4%E5%88%91%23) `141.6K 🔥` `NEW`
1. [世界是草台班子但你的人生不是](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%98%AF%E8%8D%89%E5%8F%B0%E7%8F%AD%E5%AD%90%E4%BD%86%E4%BD%A0%E7%9A%84%E4%BA%BA%E7%94%9F%E4%B8%8D%E6%98%AF%23) `141.4K 🔥` `NEW`
1. [员工的不可能三角定律](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E7%9A%84%E4%B8%8D%E5%8F%AF%E8%83%BD%E4%B8%89%E8%A7%92%E5%AE%9A%E5%BE%8B%23) `140.9K 🔥` `NEW`
1. [恋爱中收到实用型礼物有多爽 (How cool is it to receive practical gifts when you are in love?)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%88%B1%E4%B8%AD%E6%94%B6%E5%88%B0%E5%AE%9E%E7%94%A8%E5%9E%8B%E7%A4%BC%E7%89%A9%E6%9C%89%E5%A4%9A%E7%88%BD%23) `140.3K 🔥` `NEW`
1. [星巴克部分原料由蜜雪冰城代工](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%E9%83%A8%E5%88%86%E5%8E%9F%E6%96%99%E7%94%B1%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%E4%BB%A3%E5%B7%A5%23) `139.7K 🔥` `NEW`
1. [中国网文 文化输出扛把子](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BD%91%E6%96%87%20%E6%96%87%E5%8C%96%E8%BE%93%E5%87%BA%E6%89%9B%E6%8A%8A%E5%AD%90%23) `139.5K 🔥` `NEW`
1. [Alo赠品包被炒到350元](https://s.weibo.com/weibo?q=%23Alo%E8%B5%A0%E5%93%81%E5%8C%85%E8%A2%AB%E7%82%92%E5%88%B0350%E5%85%83%23) `139.2K 🔥` `NEW`
1. [男子出轨销售买千万保险还转账百万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A8%E9%94%80%E5%94%AE%E4%B9%B0%E5%8D%83%E4%B8%87%E4%BF%9D%E9%99%A9%E8%BF%98%E8%BD%AC%E8%B4%A6%E7%99%BE%E4%B8%87%23) `138.7K 🔥` `NEW`
1. [SYG零封KSG](https://s.weibo.com/weibo?q=%23SYG%E9%9B%B6%E5%B0%81KSG%23) `138.5K 🔥` `NEW`
1. [BLG圣枪哥首发Wenbo替补](https://s.weibo.com/weibo?q=%23BLG%E5%9C%A3%E6%9E%AA%E5%93%A5%E9%A6%96%E5%8F%91Wenbo%E6%9B%BF%E8%A1%A5%23) `137.8K 🔥` `NEW`
1. [Bin快回来吧](https://s.weibo.com/weibo?q=%23Bin%E5%BF%AB%E5%9B%9E%E6%9D%A5%E5%90%A7%23) `137.3K 🔥` `NEW`
1. [医院通报实习护士晒患者隐私照](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E9%80%9A%E6%8A%A5%E5%AE%9E%E4%B9%A0%E6%8A%A4%E5%A3%AB%E6%99%92%E6%82%A3%E8%80%85%E9%9A%90%E7%A7%81%E7%85%A7%23) `137.1K 🔥` `NEW`
1. [TF四代彩排照](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%BD%A9%E6%8E%92%E7%85%A7%23) `136.8K 🔥` `+21%`
1. [Lululemon劲敌来中国了 (Lululemon’s rival comes to China)](https://s.weibo.com/weibo?q=%23Lululemon%E5%8A%B2%E6%95%8C%E6%9D%A5%E4%B8%AD%E5%9B%BD%E4%BA%86%23) `383.9K 🔥`
1. [BLG圣枪哥首秀失利](https://s.weibo.com/weibo?q=%23BLG%E5%9C%A3%E6%9E%AA%E5%93%A5%E9%A6%96%E7%A7%80%E5%A4%B1%E5%88%A9%23) `246.2K 🔥`
1. [送礼要送有溢价的东西](https://s.weibo.com/weibo?q=%23%E9%80%81%E7%A4%BC%E8%A6%81%E9%80%81%E6%9C%89%E6%BA%A2%E4%BB%B7%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `143.0K 🔥`
1. [女子进店避雨后买9件衣服回馈善意](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%9B%E5%BA%97%E9%81%BF%E9%9B%A8%E5%90%8E%E4%B9%B09%E4%BB%B6%E8%A1%A3%E6%9C%8D%E5%9B%9E%E9%A6%88%E5%96%84%E6%84%8F%23) `141.8K 🔥`
1. [田曦薇新剧照](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%96%B0%E5%89%A7%E7%85%A7%23) `139.9K 🔥`
1. [曝张真源将录制声生不息](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%B0%86%E5%BD%95%E5%88%B6%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%23) `138.2K 🔥`
1. [普京说俄罗斯对日本没有诉求](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AF%B4%E4%BF%84%E7%BD%97%E6%96%AF%E5%AF%B9%E6%97%A5%E6%9C%AC%E6%B2%A1%E6%9C%89%E8%AF%89%E6%B1%82%23) `138.1K 🔥`
1. [朱镕基同志逝世 (Comrade Zhu Rongji passed away)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `488.1K 🔥` `-52%`
1. [微信群聊可以彻底关闭通知了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%BE%A4%E8%81%8A%E5%8F%AF%E4%BB%A5%E5%BD%BB%E5%BA%95%E5%85%B3%E9%97%AD%E9%80%9A%E7%9F%A5%E4%BA%86%23) `436.1K 🔥` `-57%`
1. [60万亿元消费蓝海要来了](https://s.weibo.com/weibo?q=%2360%E4%B8%87%E4%BA%BF%E5%85%83%E6%B6%88%E8%B4%B9%E8%93%9D%E6%B5%B7%E8%A6%81%E6%9D%A5%E4%BA%86%23) `397.2K 🔥` `-48%`
1. [喜欢穿洞洞鞋的人天塌了](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `375.5K 🔥` `-45%`
1. [龙餐馆 (dragon restaurant)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `305.5K 🔥` `-47%`
1. [英仙座流星雨](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BB%99%E5%BA%A7%E6%B5%81%E6%98%9F%E9%9B%A8%23) `250.5K 🔥` `-55%`
1. [湖人售价120亿美元](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E5%94%AE%E4%BB%B7120%E4%BA%BF%E7%BE%8E%E5%85%83%23) `241.8K 🔥` `-58%`
1. [虞书欣丁禹兮 我欲乘风](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%81%E7%A6%B9%E5%85%AE%20%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `233.4K 🔥` `-54%`
1. [胖东来许昌老店关闭周边商户发声](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%AE%B8%E6%98%8C%E8%80%81%E5%BA%97%E5%85%B3%E9%97%AD%E5%91%A8%E8%BE%B9%E5%95%86%E6%88%B7%E5%8F%91%E5%A3%B0%23) `232.6K 🔥` `-42%`
1. [花开锦绣热度](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E7%83%AD%E5%BA%A6%23) `205.7K 🔥` `-49%`
1. [流星雨 许愿](https://s.weibo.com/weibo?q=%23%E6%B5%81%E6%98%9F%E9%9B%A8%20%E8%AE%B8%E6%84%BF%23) `149.5K 🔥` `-64%`
1. [演唱会 11连坐](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%2011%E8%BF%9E%E5%9D%90%23) `149.4K 🔥` `-40%`
1. [C罗宣布结婚](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `145.7K 🔥` `-26%`
1. [泰国失联女孩祁萌更新社媒](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%A4%B1%E8%81%94%E5%A5%B3%E5%AD%A9%E7%A5%81%E8%90%8C%E6%9B%B4%E6%96%B0%E7%A4%BE%E5%AA%92%23) `145.5K 🔥` `-45%`
1. [JDG战胜BLG (JDG defeated BLG)](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9CBLG%23) `145.2K 🔥` `-60%`
1. [银行能办结婚证了](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `144.9K 🔥` `-32%`
1. [日全食 (total solar eclipse)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%85%A8%E9%A3%9F%23) `144.8K 🔥` `-45%`
1. [这段话缓解了我的焦虑](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E7%BC%93%E8%A7%A3%E4%BA%86%E6%88%91%E7%9A%84%E7%84%A6%E8%99%91%23) `144.4K 🔥` `-22%`
1. [天坛公园保洁用海绵吸水挤到桶里](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%9D%9B%E5%85%AC%E5%9B%AD%E4%BF%9D%E6%B4%81%E7%94%A8%E6%B5%B7%E7%BB%B5%E5%90%B8%E6%B0%B4%E6%8C%A4%E5%88%B0%E6%A1%B6%E9%87%8C%23) `144.2K 🔥` `-25%`
1. [卫健委介入17岁女孩流产监护人不知情](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E4%BB%8B%E5%85%A517%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%B5%81%E4%BA%A7%E7%9B%91%E6%8A%A4%E4%BA%BA%E4%B8%8D%E7%9F%A5%E6%83%85%23) `143.6K 🔥` `-29%`
1. [龙餐馆 老扎](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E8%80%81%E6%89%8E%23) `143.2K 🔥` `-41%`
1. [江泽民同志诞辰100周年](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B3%BD%E6%B0%91%E5%90%8C%E5%BF%97%E8%AF%9E%E8%BE%B0100%E5%91%A8%E5%B9%B4%23) `142.7K 🔥` `-25%`
1. [荣耀RobotPhone价格](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80RobotPhone%E4%BB%B7%E6%A0%BC%23) `141.1K 🔥` `-46%`
1. [全裸坠亡币圈富豪房间内细节曝光](https://s.weibo.com/weibo?q=%23%E5%85%A8%E8%A3%B8%E5%9D%A0%E4%BA%A1%E5%B8%81%E5%9C%88%E5%AF%8C%E8%B1%AA%E6%88%BF%E9%97%B4%E5%86%85%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `140.6K 🔥` `-42%`

Updated at 2026-08-13 01:33:52

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
