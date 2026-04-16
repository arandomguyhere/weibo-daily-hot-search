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

1. [大疆Pocket4 (DJI Pocket4)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%23) `664.2K 🔥` `NEW`
1. [400毫升献血证被炒到2000元](https://s.weibo.com/weibo?q=%23400%E6%AF%AB%E5%8D%87%E7%8C%AE%E8%A1%80%E8%AF%81%E8%A2%AB%E7%82%92%E5%88%B02000%E5%85%83%23) `492.2K 🔥` `NEW`
1. [十五五首季中国经济增长好于预期](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E9%A6%96%E5%AD%A3%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%A2%9E%E9%95%BF%E5%A5%BD%E4%BA%8E%E9%A2%84%E6%9C%9F%23) `424.5K 🔥` `NEW`
1. [张晚意实现巧乐兹自由](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E5%AE%9E%E7%8E%B0%E5%B7%A7%E4%B9%90%E5%85%B9%E8%87%AA%E7%94%B1%23) `423.4K 🔥` `NEW`
1. [陈泽](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B3%BD%23) `410.1K 🔥` `NEW`
1. [黄灿灿梦回武大校花](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%A2%A6%E5%9B%9E%E6%AD%A6%E5%A4%A7%E6%A0%A1%E8%8A%B1%23) `263.7K 🔥` `NEW`
1. [低精力都去查一下维d](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E9%83%BD%E5%8E%BB%E6%9F%A5%E4%B8%80%E4%B8%8B%E7%BB%B4d%23) `194.9K 🔥` `NEW`
1. [侯明昊天美意品牌代言人](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%A4%A9%E7%BE%8E%E6%84%8F%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `159.4K 🔥` `NEW`
1. [偷偷藏不住剧组亮相北影节](https://s.weibo.com/weibo?q=%23%E5%81%B7%E5%81%B7%E8%97%8F%E4%B8%8D%E4%BD%8F%E5%89%A7%E7%BB%84%E4%BA%AE%E7%9B%B8%E5%8C%97%E5%BD%B1%E8%8A%82%23) `134.8K 🔥` `NEW`
1. [中国不吸烟女性二手烟暴露率达70%](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%8D%E5%90%B8%E7%83%9F%E5%A5%B3%E6%80%A7%E4%BA%8C%E6%89%8B%E7%83%9F%E6%9A%B4%E9%9C%B2%E7%8E%87%E8%BE%BE70%25%23) `120.6K 🔥` `NEW`
1. [最不困的人叫醒最困的人 (The least sleepy person wakes up the sleepiest person)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E4%B8%8D%E5%9B%B0%E7%9A%84%E4%BA%BA%E5%8F%AB%E9%86%92%E6%9C%80%E5%9B%B0%E7%9A%84%E4%BA%BA%23) `95.7K 🔥` `NEW`
1. [老板说滚员工离岗被辞获赔近16万](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E8%AF%B4%E6%BB%9A%E5%91%98%E5%B7%A5%E7%A6%BB%E5%B2%97%E8%A2%AB%E8%BE%9E%E8%8E%B7%E8%B5%94%E8%BF%9116%E4%B8%87%23) `93.3K 🔥` `NEW`
1. [诚实一口道歉](https://s.weibo.com/weibo?q=%23%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%E9%81%93%E6%AD%89%23) `92.8K 🔥` `NEW`
1. [诚实一口开除涉事主播](https://s.weibo.com/weibo?q=%23%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%E5%BC%80%E9%99%A4%E6%B6%89%E4%BA%8B%E4%B8%BB%E6%92%AD%23) `92.2K 🔥` `NEW`
1. [潘石屹发文](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%9F%B3%E5%B1%B9%E5%8F%91%E6%96%87%23) `91.8K 🔥` `NEW`
1. [张凌赫深圳](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%B7%B1%E5%9C%B3%23) `91.2K 🔥` `NEW`
1. [特朗普称以黎停火10天](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%BB%A5%E9%BB%8E%E5%81%9C%E7%81%AB10%E5%A4%A9%23) `90.7K 🔥` `NEW`
1. [张伦硕妈妈曾遗憾没有亲孙子](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%A6%E7%A1%95%E5%A6%88%E5%A6%88%E6%9B%BE%E9%81%97%E6%86%BE%E6%B2%A1%E6%9C%89%E4%BA%B2%E5%AD%99%E5%AD%90%23) `88.1K 🔥` `NEW`
1. [张晚意求职](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E6%B1%82%E8%81%8C%23) `86.2K 🔥` `NEW`
1. [粉色蓝莓一颗难求](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E8%93%9D%E8%8E%93%E4%B8%80%E9%A2%97%E9%9A%BE%E6%B1%82%23) `84.7K 🔥` `NEW`
1. [94斤女生打司美格鲁肽减肥被送急诊 (A 94-pound girl was sent to the emergency room after taking semaglutide to lose weight.)](https://s.weibo.com/weibo?q=%2394%E6%96%A4%E5%A5%B3%E7%94%9F%E6%89%93%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E5%87%8F%E8%82%A5%E8%A2%AB%E9%80%81%E6%80%A5%E8%AF%8A%23) `78.6K 🔥` `NEW`
1. [张杰演唱会只有张杰在淋雨](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%AA%E6%9C%89%E5%BC%A0%E6%9D%B0%E5%9C%A8%E6%B7%8B%E9%9B%A8%23) `70.3K 🔥` `NEW`
1. [曝清清性骚扰](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B8%85%E6%B8%85%E6%80%A7%E9%AA%9A%E6%89%B0%23) `70.2K 🔥` `NEW`
1. [卢昱晓要把李佳琦的老鼠干挂包上](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E8%A6%81%E6%8A%8A%E6%9D%8E%E4%BD%B3%E7%90%A6%E7%9A%84%E8%80%81%E9%BC%A0%E5%B9%B2%E6%8C%82%E5%8C%85%E4%B8%8A%23) `70.2K 🔥` `NEW`
1. [最难喝饮料又上新了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%9A%BE%E5%96%9D%E9%A5%AE%E6%96%99%E5%8F%88%E4%B8%8A%E6%96%B0%E4%BA%86%23) `69.9K 🔥` `NEW`
1. [诚实一口](https://s.weibo.com/weibo?q=%23%E8%AF%9A%E5%AE%9E%E4%B8%80%E5%8F%A3%23) `67.2K 🔥` `NEW`
1. [美国多位机密领域科学家失踪或死亡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%9A%E4%BD%8D%E6%9C%BA%E5%AF%86%E9%A2%86%E5%9F%9F%E7%A7%91%E5%AD%A6%E5%AE%B6%E5%A4%B1%E8%B8%AA%E6%88%96%E6%AD%BB%E4%BA%A1%23) `56.7K 🔥` `NEW`
1. [蜜语纪](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%23) `56.1K 🔥` `NEW`
1. [被强拉开车门泼水女子称或将追责](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%BC%BA%E6%8B%89%E5%BC%80%E8%BD%A6%E9%97%A8%E6%B3%BC%E6%B0%B4%E5%A5%B3%E5%AD%90%E7%A7%B0%E6%88%96%E5%B0%86%E8%BF%BD%E8%B4%A3%23) `55.9K 🔥` `NEW`
1. [穆祉丞追星也是氪金粉](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%BF%BD%E6%98%9F%E4%B9%9F%E6%98%AF%E6%B0%AA%E9%87%91%E7%B2%89%23) `54.4K 🔥` `NEW`
1. [美防长称伊朗最高领袖受伤但活着 (US defense chief says Iran's supreme leader injured but alive)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%98%B2%E9%95%BF%E7%A7%B0%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%8F%97%E4%BC%A4%E4%BD%86%E6%B4%BB%E7%9D%80%23) `53.8K 🔥` `NEW`
1. [迪丽热巴荷叶边白裙](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%8D%B7%E5%8F%B6%E8%BE%B9%E7%99%BD%E8%A3%99%23) `53.6K 🔥` `NEW`
1. [黄晓明再次进入上戏博士复试名单](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%86%8D%E6%AC%A1%E8%BF%9B%E5%85%A5%E4%B8%8A%E6%88%8F%E5%8D%9A%E5%A3%AB%E5%A4%8D%E8%AF%95%E5%90%8D%E5%8D%95%23) `50.7K 🔥` `NEW`
1. [网红耳机壳造型被指擦边男凝](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E8%80%B3%E6%9C%BA%E5%A3%B3%E9%80%A0%E5%9E%8B%E8%A2%AB%E6%8C%87%E6%93%A6%E8%BE%B9%E7%94%B7%E5%87%9D%23) `50.3K 🔥` `NEW`
1. [浪姐张杰鸟巢演唱会团建](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A2%E5%BB%BA%23) `46.4K 🔥` `NEW`
1. [露芜衣角色曲不是鞠婧祎唱的](https://s.weibo.com/weibo?q=%23%E9%9C%B2%E8%8A%9C%E8%A1%A3%E8%A7%92%E8%89%B2%E6%9B%B2%E4%B8%8D%E6%98%AF%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%94%B1%E7%9A%84%23) `44.3K 🔥` `NEW`
1. [粉色蓝莓炒至400元一斤](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E8%93%9D%E8%8E%93%E7%82%92%E8%87%B3400%E5%85%83%E4%B8%80%E6%96%A4%23) `42.7K 🔥` `NEW`
1. [Claude Opus4.7](https://s.weibo.com/weibo?q=%23Claude%20Opus4.7%23) `42.7K 🔥` `NEW`
1. [刘翔直言中国新能源车太顶了](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E7%9B%B4%E8%A8%80%E4%B8%AD%E5%9B%BD%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E5%A4%AA%E9%A1%B6%E4%BA%86%23) `40.1K 🔥` `NEW`
1. [贵州茅台2025年净利823.2亿](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E8%8C%85%E5%8F%B02025%E5%B9%B4%E5%87%80%E5%88%A9823.2%E4%BA%BF%23) `40.0K 🔥` `NEW`
1. [中方回应特朗普称访华不受影响 (China responds to Trump's statement that visit to China will not be affected)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%AE%BF%E5%8D%8E%E4%B8%8D%E5%8F%97%E5%BD%B1%E5%93%8D%23) `39.7K 🔥` `NEW`
1. [伊朗早有后手](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%97%A9%E6%9C%89%E5%90%8E%E6%89%8B%23) `39.5K 🔥` `NEW`
1. [张真源贺峻霖是不是有点暧昧了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E8%B4%BA%E5%B3%BB%E9%9C%96%E6%98%AF%E4%B8%8D%E6%98%AF%E6%9C%89%E7%82%B9%E6%9A%A7%E6%98%A7%E4%BA%86%23) `38.6K 🔥` `NEW`
1. [韩红问李乃文是真唱吗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E9%97%AE%E6%9D%8E%E4%B9%83%E6%96%87%E6%98%AF%E7%9C%9F%E5%94%B1%E5%90%97%23) `38.5K 🔥` `NEW`
1. [地球或今年冲击高温极限](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E6%88%96%E4%BB%8A%E5%B9%B4%E5%86%B2%E5%87%BB%E9%AB%98%E6%B8%A9%E6%9E%81%E9%99%90%23) `37.8K 🔥` `NEW`
1. [偶遇张元英去皮肤科](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%BC%A0%E5%85%83%E8%8B%B1%E5%8E%BB%E7%9A%AE%E8%82%A4%E7%A7%91%23) `37.5K 🔥` `NEW`
1. [Bin 小奶油](https://s.weibo.com/weibo?q=%23Bin%20%E5%B0%8F%E5%A5%B6%E6%B2%B9%23) `36.7K 🔥` `NEW`
1. [老莫称卖掉1000只鸡后会捐10万](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%8E%AB%E7%A7%B0%E5%8D%96%E6%8E%891000%E5%8F%AA%E9%B8%A1%E5%90%8E%E4%BC%9A%E6%8D%9010%E4%B8%87%23) `35.3K 🔥` `NEW`
1. [邓紫棋直播](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E7%9B%B4%E6%92%AD%23) `35.3K 🔥` `NEW`
1. [张真源直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E7%9B%B4%E6%92%AD%23) `35.3K 🔥` `NEW`
1. [苏林乘高铁抵达广西现场画面 (Live footage of Su Lin arriving in Guangxi by high-speed train)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%9E%97%E4%B9%98%E9%AB%98%E9%93%81%E6%8A%B5%E8%BE%BE%E5%B9%BF%E8%A5%BF%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `35.3K 🔥` `NEW`
1. [张曼玉没去浪姐来这了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9B%BC%E7%8E%89%E6%B2%A1%E5%8E%BB%E6%B5%AA%E5%A7%90%E6%9D%A5%E8%BF%99%E4%BA%86%23) `35.3K 🔥` `NEW`

Updated at 2026-04-17 00:50:03

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
