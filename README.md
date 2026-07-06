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

1. [广西内涝 (Waterlogging in Guangxi)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%86%85%E6%B6%9D%23) `1.4M 🔥` `NEW`
1. [哈兰德又偷喝了对方门将的水](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%8F%88%E5%81%B7%E5%96%9D%E4%BA%86%E5%AF%B9%E6%96%B9%E9%97%A8%E5%B0%86%E7%9A%84%E6%B0%B4%23) `1.0M 🔥` `NEW`
1. [我国机电产品出口为何持续爆单](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%9C%BA%E7%94%B5%E4%BA%A7%E5%93%81%E5%87%BA%E5%8F%A3%E4%B8%BA%E4%BD%95%E6%8C%81%E7%BB%AD%E7%88%86%E5%8D%95%23) `933.1K 🔥` `NEW`
1. [兰蔻菁纯MD驭时补剂精华发布会](https://s.weibo.com/weibo?q=%23%E5%85%B0%E8%94%BB%E8%8F%81%E7%BA%AFMD%E9%A9%AD%E6%97%B6%E8%A1%A5%E5%89%82%E7%B2%BE%E5%8D%8E%E5%8F%91%E5%B8%83%E4%BC%9A%23) `884.3K 🔥` `NEW`
1. [迪丽热巴功夫女足二番](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%BA%8C%E7%95%AA%23) `783.7K 🔥` `NEW`
1. [巴西球迷痛批内马尔](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E7%90%83%E8%BF%B7%E7%97%9B%E6%89%B9%E5%86%85%E9%A9%AC%E5%B0%94%23) `752.2K 🔥` `NEW`
1. [周星驰功夫女足定档](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%AE%9A%E6%A1%A3%23) `751.9K 🔥` `NEW`
1. [六蓝水库发生严重险情](https://s.weibo.com/weibo?q=%23%E5%85%AD%E8%93%9D%E6%B0%B4%E5%BA%93%E5%8F%91%E7%94%9F%E4%B8%A5%E9%87%8D%E9%99%A9%E6%83%85%23) `631.2K 🔥` `NEW`
1. [功夫女足官宣全阵容](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%AE%98%E5%AE%A3%E5%85%A8%E9%98%B5%E5%AE%B9%23) `628.9K 🔥` `NEW`
1. [99万机器人伴侣续航撑不过一晚](https://s.weibo.com/weibo?q=%2399%E4%B8%87%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BC%B4%E4%BE%A3%E7%BB%AD%E8%88%AA%E6%92%91%E4%B8%8D%E8%BF%87%E4%B8%80%E6%99%9A%23) `600.8K 🔥` `NEW`
1. [佛得角邀国足踢友谊赛被婉拒 (Cape Verde's invitation to national football team to play friendly match declined)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%82%80%E5%9B%BD%E8%B6%B3%E8%B8%A2%E5%8F%8B%E8%B0%8A%E8%B5%9B%E8%A2%AB%E5%A9%89%E6%8B%92%23) `591.3K 🔥` `NEW`
1. [王安宇辟谣与关晓彤恋情](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%BE%9F%E8%B0%A3%E4%B8%8E%E5%85%B3%E6%99%93%E5%BD%A4%E6%81%8B%E6%83%85%23) `584.8K 🔥` `NEW`
1. [花少8全员素颜墨西哥跳水](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E5%85%A8%E5%91%98%E7%B4%A0%E9%A2%9C%E5%A2%A8%E8%A5%BF%E5%93%A5%E8%B7%B3%E6%B0%B4%23) `468.4K 🔥` `NEW`
1. [孙颖莎冠军](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%86%A0%E5%86%9B%23) `451.4K 🔥` `NEW`
1. [松岛辉空冠军](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E5%86%A0%E5%86%9B%23) `438.9K 🔥` `NEW`
1. [孙颖莎说去洛杉矶转一转](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E5%8E%BB%E6%B4%9B%E6%9D%89%E7%9F%B6%E8%BD%AC%E4%B8%80%E8%BD%AC%23) `375.3K 🔥` `NEW`
1. [永远别说反问句](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BF%9C%E5%88%AB%E8%AF%B4%E5%8F%8D%E9%97%AE%E5%8F%A5%23) `373.4K 🔥` `NEW`
1. [华为韬定律芯片实测](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%9F%AC%E5%AE%9A%E5%BE%8B%E8%8A%AF%E7%89%87%E5%AE%9E%E6%B5%8B%23) `372.0K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `369.8K 🔥` `NEW`
1. [广西南宁一水库坝体出现缺口](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%8D%97%E5%AE%81%E4%B8%80%E6%B0%B4%E5%BA%93%E5%9D%9D%E4%BD%93%E5%87%BA%E7%8E%B0%E7%BC%BA%E5%8F%A3%23) `366.2K 🔥` `NEW`
1. [鹿晗关晓彤的最后一次互动 (Luhan and Guan Xiaotong’s last interaction)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%85%B3%E6%99%93%E5%BD%A4%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E4%BA%92%E5%8A%A8%23) `363.4K 🔥` `NEW`
1. [正午阳光公子哥是谁](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E5%85%AC%E5%AD%90%E5%93%A5%E6%98%AF%E8%B0%81%23) `360.2K 🔥` `NEW`
1. [哈兰德赤膊与挪威公主王子拥抱](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%B5%A4%E8%86%8A%E4%B8%8E%E6%8C%AA%E5%A8%81%E5%85%AC%E4%B8%BB%E7%8E%8B%E5%AD%90%E6%8B%A5%E6%8A%B1%23) `360.1K 🔥` `NEW`
1. [赵丽颖狗啃刘海](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%8B%97%E5%95%83%E5%88%98%E6%B5%B7%23) `356.1K 🔥` `NEW`
1. [张艺兴功夫女足三番](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%85%B4%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%B8%89%E7%95%AA%23) `304.0K 🔥` `NEW`
1. [一家三口新疆自驾遇山洪母子身亡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E6%96%B0%E7%96%86%E8%87%AA%E9%A9%BE%E9%81%87%E5%B1%B1%E6%B4%AA%E6%AF%8D%E5%AD%90%E8%BA%AB%E4%BA%A1%23) `281.8K 🔥` `NEW`
1. [司晓迪说鹿晗真是好男人](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%99%93%E8%BF%AA%E8%AF%B4%E9%B9%BF%E6%99%97%E7%9C%9F%E6%98%AF%E5%A5%BD%E7%94%B7%E4%BA%BA%23) `278.7K 🔥` `NEW`
1. [2岁娃患冰箱病腹泻拉鲜红水样便](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%A8%83%E6%82%A3%E5%86%B0%E7%AE%B1%E7%97%85%E8%85%B9%E6%B3%BB%E6%8B%89%E9%B2%9C%E7%BA%A2%E6%B0%B4%E6%A0%B7%E4%BE%BF%23) `275.9K 🔥` `NEW`
1. [中公教育突登A股人气榜第一](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%85%AC%E6%95%99%E8%82%B2%E7%AA%81%E7%99%BBA%E8%82%A1%E4%BA%BA%E6%B0%94%E6%A6%9C%E7%AC%AC%E4%B8%80%23) `275.4K 🔥` `NEW`
1. [英格兰 伟哥](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%20%E4%BC%9F%E5%93%A5%23) `269.3K 🔥` `NEW`
1. [一家三口骑车上高架发生车祸 (A family of three were involved in a car accident while riding on an elevated highway)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E9%AA%91%E8%BD%A6%E4%B8%8A%E9%AB%98%E6%9E%B6%E5%8F%91%E7%94%9F%E8%BD%A6%E7%A5%B8%23) `259.1K 🔥` `NEW`
1. [多益网络 徐波](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E7%9B%8A%E7%BD%91%E7%BB%9C%20%E5%BE%90%E6%B3%A2%23) `257.4K 🔥` `NEW`
1. [BLG对战LYON](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98LYON%23) `257.0K 🔥` `NEW`
1. [孙颖莎说洛杉矶夺冠是好的开始](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E6%B4%9B%E6%9D%89%E7%9F%B6%E5%A4%BA%E5%86%A0%E6%98%AF%E5%A5%BD%E7%9A%84%E5%BC%80%E5%A7%8B%23) `255.9K 🔥` `NEW`
1. [虞书欣张婧仪偶数年爆剧玄学](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%81%B6%E6%95%B0%E5%B9%B4%E7%88%86%E5%89%A7%E7%8E%84%E5%AD%A6%23) `248.7K 🔥` `NEW`
1. [英格兰队燃尽了](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%9F%E7%87%83%E5%B0%BD%E4%BA%86%23) `239.7K 🔥` `NEW`
1. [灿如繁星首日成绩](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E9%A6%96%E6%97%A5%E6%88%90%E7%BB%A9%23) `235.7K 🔥` `NEW`
1. [曝叶祖新恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8F%B6%E7%A5%96%E6%96%B0%E6%81%8B%E6%83%85%23) `235.2K 🔥` `NEW`
1. [中国男篮vs中国台北男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E7%94%B7%E7%AF%AE%23) `234.6K 🔥` `NEW`
1. [孙颖莎又创新纪录](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%8F%88%E5%88%9B%E6%96%B0%E7%BA%AA%E5%BD%95%23) `232.1K 🔥` `NEW`
1. [黄有龙曾6天赌光2.8亿 (Huang Youlong once gambled away 280 million in 6 days)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%9C%89%E9%BE%99%E6%9B%BE6%E5%A4%A9%E8%B5%8C%E5%85%892.8%E4%BA%BF%23) `231.0K 🔥` `NEW`
1. [严浩翔父亲公司被执行378万](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%88%B6%E4%BA%B2%E5%85%AC%E5%8F%B8%E8%A2%AB%E6%89%A7%E8%A1%8C378%E4%B8%87%23) `228.7K 🔥` `NEW`
1. [墨西哥2比3英格兰](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A52%E6%AF%943%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `217.2K 🔥` `NEW`
1. [冉莹颖邹市明三次离婚没离成](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E9%82%B9%E5%B8%82%E6%98%8E%E4%B8%89%E6%AC%A1%E7%A6%BB%E5%A9%9A%E6%B2%A1%E7%A6%BB%E6%88%90%23) `204.7K 🔥` `NEW`
1. [国产捷豹路虎走进历史](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E6%8D%B7%E8%B1%B9%E8%B7%AF%E8%99%8E%E8%B5%B0%E8%BF%9B%E5%8E%86%E5%8F%B2%23) `204.0K 🔥` `NEW`
1. [中国免安装空调欧洲一台1000欧](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%8D%E5%AE%89%E8%A3%85%E7%A9%BA%E8%B0%83%E6%AC%A7%E6%B4%B2%E4%B8%80%E5%8F%B01000%E6%AC%A7%23) `202.6K 🔥` `NEW`
1. [台风巴威越来越近](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E8%B6%8A%E6%9D%A5%E8%B6%8A%E8%BF%91%23) `201.6K 🔥` `NEW`
1. [内马尔从巴西国家队退役](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E4%BB%8E%E5%B7%B4%E8%A5%BF%E5%9B%BD%E5%AE%B6%E9%98%9F%E9%80%80%E5%BD%B9%23) `877.7K 🔥` `+211%`
1. [司晓迪发了好多男明星 (Si Xiaodi has posted a lot of male celebrities)](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%99%93%E8%BF%AA%E5%8F%91%E4%BA%86%E5%A5%BD%E5%A4%9A%E7%94%B7%E6%98%8E%E6%98%9F%23) `596.0K 🔥` `+185%`
1. [迪丽热巴全程都很不自在](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%A8%E7%A8%8B%E9%83%BD%E5%BE%88%E4%B8%8D%E8%87%AA%E5%9C%A8%23) `271.5K 🔥`
1. [哈兰德](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%23) `261.8K 🔥`

Updated at 2026-07-06 14:04:49

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
