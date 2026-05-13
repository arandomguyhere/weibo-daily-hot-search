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

1. [特朗普抵京 (Trump arrives in Beijing)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E4%BA%AC%23) `36.0M 🔥` `NEW`
1. [歌手2026](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `2.1M 🔥` `NEW`
1. [低智商犯罪](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `438.5K 🔥` `NEW`
1. [丁禹兮范思哲全球香水代言人](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E8%8C%83%E6%80%9D%E5%93%B2%E5%85%A8%E7%90%83%E9%A6%99%E6%B0%B4%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `329.3K 🔥` `NEW`
1. [日本爆发大规模反战抗议活动](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%8F%8D%E6%88%98%E6%8A%97%E8%AE%AE%E6%B4%BB%E5%8A%A8%23) `282.4K 🔥` `NEW`
1. [A股存储芯片全线爆发](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E5%85%A8%E7%BA%BF%E7%88%86%E5%8F%91%23) `282.0K 🔥` `NEW`
1. [DRG对战狼队](https://s.weibo.com/weibo?q=%23DRG%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `281.3K 🔥` `NEW`
1. [特朗普访问中国现场画面](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E9%97%AE%E4%B8%AD%E5%9B%BD%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `280.4K 🔥` `NEW`
1. [特朗普走出机舱](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%B5%B0%E5%87%BA%E6%9C%BA%E8%88%B1%23) `278.4K 🔥` `NEW`
1. [柳岩停更时间线](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B2%A9%E5%81%9C%E6%9B%B4%E6%97%B6%E9%97%B4%E7%BA%BF%23) `275.9K 🔥` `NEW`
1. [特朗普将抵京大批记者云集机场 (Trump will arrive in Beijing, a large number of reporters gather at the airport)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%86%E6%8A%B5%E4%BA%AC%E5%A4%A7%E6%89%B9%E8%AE%B0%E8%80%85%E4%BA%91%E9%9B%86%E6%9C%BA%E5%9C%BA%23) `274.9K 🔥` `NEW`
1. [杨幂烫伤 演员和角色命运共振](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%83%AB%E4%BC%A4%20%E6%BC%94%E5%91%98%E5%92%8C%E8%A7%92%E8%89%B2%E5%91%BD%E8%BF%90%E5%85%B1%E6%8C%AF%23) `273.8K 🔥` `NEW`
1. [豆包 我不敢动饶雪漫这四个字](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E6%88%91%E4%B8%8D%E6%95%A2%E5%8A%A8%E9%A5%B6%E9%9B%AA%E6%BC%AB%E8%BF%99%E5%9B%9B%E4%B8%AA%E5%AD%97%23) `273.3K 🔥` `NEW`
1. [低智商犯罪热度破万](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%E7%83%AD%E5%BA%A6%E7%A0%B4%E4%B8%87%23) `269.7K 🔥` `NEW`
1. [HYBE新女团最终成员确定](https://s.weibo.com/weibo?q=%23HYBE%E6%96%B0%E5%A5%B3%E5%9B%A2%E6%9C%80%E7%BB%88%E6%88%90%E5%91%98%E7%A1%AE%E5%AE%9A%23) `269.2K 🔥` `NEW`
1. [宋雨琦bobo头造型](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6bobo%E5%A4%B4%E9%80%A0%E5%9E%8B%23) `254.3K 🔥` `NEW`
1. [低智商犯罪大结局](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%E5%A4%A7%E7%BB%93%E5%B1%80%23) `220.8K 🔥` `NEW`
1. [为心动买单算不算冲动消费](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%BF%83%E5%8A%A8%E4%B9%B0%E5%8D%95%E7%AE%97%E4%B8%8D%E7%AE%97%E5%86%B2%E5%8A%A8%E6%B6%88%E8%B4%B9%23) `207.3K 🔥` `NEW`
1. [虞书欣直播](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%23) `197.8K 🔥` `NEW`
1. [张凌赫将出席Gucci大秀](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B0%86%E5%87%BA%E5%B8%ADGucci%E5%A4%A7%E7%A7%80%23) `170.6K 🔥` `NEW`
1. [12306购票页面将出现敬字 (The word "respect" will appear on the 12306 ticket purchase page.)](https://s.weibo.com/weibo?q=%2312306%E8%B4%AD%E7%A5%A8%E9%A1%B5%E9%9D%A2%E5%B0%86%E5%87%BA%E7%8E%B0%E6%95%AC%E5%AD%97%23) `165.5K 🔥` `NEW`
1. [喜人进了内娱啥都能演](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%BA%BA%E8%BF%9B%E4%BA%86%E5%86%85%E5%A8%B1%E5%95%A5%E9%83%BD%E8%83%BD%E6%BC%94%23) `156.4K 🔥` `NEW`
1. [包贝尔自曝打肉毒影响工作](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E8%87%AA%E6%9B%9D%E6%89%93%E8%82%89%E6%AF%92%E5%BD%B1%E5%93%8D%E5%B7%A5%E4%BD%9C%23) `153.4K 🔥` `NEW`
1. [狼队状态](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E7%8A%B6%E6%80%81%23) `129.1K 🔥` `NEW`
1. [王俊凯自带电影感](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%87%AA%E5%B8%A6%E7%94%B5%E5%BD%B1%E6%84%9F%23) `129.0K 🔥` `NEW`
1. [孕妇感染李斯特菌早产自曝曾吃外卖](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E6%84%9F%E6%9F%93%E6%9D%8E%E6%96%AF%E7%89%B9%E8%8F%8C%E6%97%A9%E4%BA%A7%E8%87%AA%E6%9B%9D%E6%9B%BE%E5%90%83%E5%A4%96%E5%8D%96%23) `128.5K 🔥` `NEW`
1. [北方炙烤模式何时结束](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%96%B9%E7%82%99%E7%83%A4%E6%A8%A1%E5%BC%8F%E4%BD%95%E6%97%B6%E7%BB%93%E6%9D%9F%23) `124.3K 🔥` `NEW`
1. [兜儿自曝一个月花十几万](https://s.weibo.com/weibo?q=%23%E5%85%9C%E5%84%BF%E8%87%AA%E6%9B%9D%E4%B8%80%E4%B8%AA%E6%9C%88%E8%8A%B1%E5%8D%81%E5%87%A0%E4%B8%87%23) `123.7K 🔥` `NEW`
1. [小伙刚结婚满嘴牙龈瘤不敢接吻](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%88%9A%E7%BB%93%E5%A9%9A%E6%BB%A1%E5%98%B4%E7%89%99%E9%BE%88%E7%98%A4%E4%B8%8D%E6%95%A2%E6%8E%A5%E5%90%BB%23) `122.3K 🔥` `NEW`
1. [北方多地迎今年首个高温日](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%96%B9%E5%A4%9A%E5%9C%B0%E8%BF%8E%E4%BB%8A%E5%B9%B4%E9%A6%96%E4%B8%AA%E9%AB%98%E6%B8%A9%E6%97%A5%23) `1.8M 🔥` `+134%`
1. [自助餐没吃几口就饱的元凶 (The culprit of feeling full after just a few bites at the buffet)](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%8A%A9%E9%A4%90%E6%B2%A1%E5%90%83%E5%87%A0%E5%8F%A3%E5%B0%B1%E9%A5%B1%E7%9A%84%E5%85%83%E5%87%B6%23) `425.7K 🔥` `+39%`
1. [雨霖铃](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E9%9C%96%E9%93%83%23) `373.7K 🔥` `+129%`
1. [留学生在悉尼麦当劳被流浪汉掰断手](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%AD%A6%E7%94%9F%E5%9C%A8%E6%82%89%E5%B0%BC%E9%BA%A6%E5%BD%93%E5%8A%B3%E8%A2%AB%E6%B5%81%E6%B5%AA%E6%B1%89%E6%8E%B0%E6%96%AD%E6%89%8B%23) `270.3K 🔥` `+56%`
1. [小米新耳机将采用全新形态设计](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0%E8%80%B3%E6%9C%BA%E5%B0%86%E9%87%87%E7%94%A8%E5%85%A8%E6%96%B0%E5%BD%A2%E6%80%81%E8%AE%BE%E8%AE%A1%23) `283.1K 🔥`
1. [张元英雷霆平底鞋](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E9%9B%B7%E9%9C%86%E5%B9%B3%E5%BA%95%E9%9E%8B%23) `279.3K 🔥`
1. [于正回应白鹿争议 (Yu Zheng responds to the Bailu controversy)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E7%99%BD%E9%B9%BF%E4%BA%89%E8%AE%AE%23) `277.8K 🔥`
1. [网传柳岩疑似怀孕](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%9F%B3%E5%B2%A9%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%23) `271.1K 🔥`
1. [曝何炅要开演唱会](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%95%E7%82%85%E8%A6%81%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `269.9K 🔥`
1. [小米发布自动驾驶模型](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E6%A8%A1%E5%9E%8B%23) `122.3K 🔥`
1. [欢迎特朗普访问中国](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E9%97%AE%E4%B8%AD%E5%9B%BD%23) `276.6K 🔥` `-87%`
1. [特朗普访华 (Trump's visit to China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%23) `272.7K 🔥` `-21%`
1. [夏天了迪丽热巴还在穿毛衣](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A4%A9%E4%BA%86%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%98%E5%9C%A8%E7%A9%BF%E6%AF%9B%E8%A1%A3%23) `271.2K 🔥` `-22%`
1. [女孩穿吊带等地铁遇暖心提醒 (Girl wears suspenders and waits for subway to receive heart-warming reminder)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%A9%BF%E5%90%8A%E5%B8%A6%E7%AD%89%E5%9C%B0%E9%93%81%E9%81%87%E6%9A%96%E5%BF%83%E6%8F%90%E9%86%92%23) `269.4K 🔥` `-22%`
1. [北京机场高速附近挂起中美国旗 (Chinese and American flags hoisted near Beijing Airport Expressway)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9C%BA%E5%9C%BA%E9%AB%98%E9%80%9F%E9%99%84%E8%BF%91%E6%8C%82%E8%B5%B7%E4%B8%AD%E7%BE%8E%E5%9B%BD%E6%97%97%23) `245.9K 🔥` `-28%`
1. [特朗普回应访华团高管名单](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%9E%E5%BA%94%E8%AE%BF%E5%8D%8E%E5%9B%A2%E9%AB%98%E7%AE%A1%E5%90%8D%E5%8D%95%23) `198.2K 🔥` `-32%`
1. [鹿晗发箍挂脖](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8F%91%E7%AE%8D%E6%8C%82%E8%84%96%23) `174.7K 🔥` `-48%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `171.3K 🔥` `-49%`
1. [用不用心谈恋爱真的很明显](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%B8%8D%E7%94%A8%E5%BF%83%E8%B0%88%E6%81%8B%E7%88%B1%E7%9C%9F%E7%9A%84%E5%BE%88%E6%98%8E%E6%98%BE%23) `169.3K 🔥` `-50%`
1. [白鹿已成立独资工作室](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B7%B2%E6%88%90%E7%AB%8B%E7%8B%AC%E8%B5%84%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `128.8K 🔥` `-40%`
1. [曝知名男歌手音乐节假唱](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%9F%A5%E5%90%8D%E7%94%B7%E6%AD%8C%E6%89%8B%E9%9F%B3%E4%B9%90%E8%8A%82%E5%81%87%E5%94%B1%23) `122.3K 🔥` `-64%`

Updated at 2026-05-13 20:34:00

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
