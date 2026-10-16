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

1. [芒果真的拍了再见朋友](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E7%9C%9F%E7%9A%84%E6%8B%8D%E4%BA%86%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%23) `1.2M 🔥` `NEW`
1. [母子衣衫不整游荡当事女子回应](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E5%AD%90%E8%A1%A3%E8%A1%AB%E4%B8%8D%E6%95%B4%E6%B8%B8%E8%8D%A1%E5%BD%93%E4%BA%8B%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%23) `839.9K 🔥` `NEW`
1. [70载广交会见证中国经济与创新活力](https://s.weibo.com/weibo?q=%2370%E8%BD%BD%E5%B9%BF%E4%BA%A4%E4%BC%9A%E8%A7%81%E8%AF%81%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E4%B8%8E%E5%88%9B%E6%96%B0%E6%B4%BB%E5%8A%9B%23) `697.6K 🔥` `NEW`
1. [美团会员 生活样样行](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E4%BC%9A%E5%91%98%20%E7%94%9F%E6%B4%BB%E6%A0%B7%E6%A0%B7%E8%A1%8C%23) `670.6K 🔥` `NEW`
1. [大冰劝妻子别纠结丈夫亏千万](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E5%8A%9D%E5%A6%BB%E5%AD%90%E5%88%AB%E7%BA%A0%E7%BB%93%E4%B8%88%E5%A4%AB%E4%BA%8F%E5%8D%83%E4%B8%87%23) `651.9K 🔥` `NEW`
1. [特斯拉Roadster意向金33.2万](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89Roadster%E6%84%8F%E5%90%91%E9%87%9133.2%E4%B8%87%23) `567.5K 🔥` `NEW`
1. [陈奕迅演唱会官宣](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E8%BF%85%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `566.5K 🔥` `NEW`
1. [Roadster 量产](https://s.weibo.com/weibo?q=%23Roadster%20%E9%87%8F%E4%BA%A7%23) `560.6K 🔥` `NEW`
1. [女子不花钱起号火到外网](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E8%8A%B1%E9%92%B1%E8%B5%B7%E5%8F%B7%E7%81%AB%E5%88%B0%E5%A4%96%E7%BD%91%23) `397.0K 🔥` `NEW`
1. [维密请假事件当事人已离职](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%AF%86%E8%AF%B7%E5%81%87%E4%BA%8B%E4%BB%B6%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%B7%B2%E7%A6%BB%E8%81%8C%23) `327.9K 🔥` `NEW`
1. [硫磺桂花](https://s.weibo.com/weibo?q=%23%E7%A1%AB%E7%A3%BA%E6%A1%82%E8%8A%B1%23) `314.5K 🔥` `NEW`
1. [原来黄子韬从来没说过那段话](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%BB%84%E5%AD%90%E9%9F%AC%E4%BB%8E%E6%9D%A5%E6%B2%A1%E8%AF%B4%E8%BF%87%E9%82%A3%E6%AE%B5%E8%AF%9D%23) `310.1K 🔥` `NEW`
1. [徐艺洋曾试图提前公关](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E6%9B%BE%E8%AF%95%E5%9B%BE%E6%8F%90%E5%89%8D%E5%85%AC%E5%85%B3%23) `304.3K 🔥` `NEW`
1. [张钧甯已冻卵](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%92%A7%E7%94%AF%E5%B7%B2%E5%86%BB%E5%8D%B5%23) `303.6K 🔥` `NEW`
1. [孟子义李昀锐是官宣还是剧宣](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E6%98%AF%E5%AE%98%E5%AE%A3%E8%BF%98%E6%98%AF%E5%89%A7%E5%AE%A3%23) `298.8K 🔥` `NEW`
1. [肯德基将换百事可乐为可口可乐](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%B0%86%E6%8D%A2%E7%99%BE%E4%BA%8B%E5%8F%AF%E4%B9%90%E4%B8%BA%E5%8F%AF%E5%8F%A3%E5%8F%AF%E4%B9%90%23) `290.3K 🔥` `NEW`
1. [百事回应美国肯德基改可口可乐](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%BA%8B%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%9B%BD%E8%82%AF%E5%BE%B7%E5%9F%BA%E6%94%B9%E5%8F%AF%E5%8F%A3%E5%8F%AF%E4%B9%90%23) `288.8K 🔥` `NEW`
1. [小城良方定档](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%AE%9A%E6%A1%A3%23) `287.6K 🔥` `NEW`
1. [后会友期官宣](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E5%AE%98%E5%AE%A3%23) `283.5K 🔥` `NEW`
1. [张本美和只能和张本智和配](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E5%8F%AA%E8%83%BD%E5%92%8C%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E9%85%8D%23) `270.2K 🔥` `NEW`
1. [杭州一面包店回应拍照要买98元套餐](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%B8%80%E9%9D%A2%E5%8C%85%E5%BA%97%E5%9B%9E%E5%BA%94%E6%8B%8D%E7%85%A7%E8%A6%81%E4%B9%B098%E5%85%83%E5%A5%97%E9%A4%90%23) `267.9K 🔥` `NEW`
1. [特斯拉Roadster真的会飞](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89Roadster%E7%9C%9F%E7%9A%84%E4%BC%9A%E9%A3%9E%23) `266.7K 🔥` `NEW`
1. [外国人眼中最想带回家的中国车](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E7%9C%BC%E4%B8%AD%E6%9C%80%E6%83%B3%E5%B8%A6%E5%9B%9E%E5%AE%B6%E7%9A%84%E4%B8%AD%E5%9B%BD%E8%BD%A6%23) `261.4K 🔥` `NEW`
1. [特斯拉Roadster全球发布会](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89Roadster%E5%85%A8%E7%90%83%E5%8F%91%E5%B8%83%E4%BC%9A%23) `260.0K 🔥` `NEW`
1. [王力宏波司登17年非凡再续](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E6%B3%A2%E5%8F%B8%E7%99%BB17%E5%B9%B4%E9%9D%9E%E5%87%A1%E5%86%8D%E7%BB%AD%23) `255.9K 🔥` `NEW`
1. [中国汽车与特斯拉差距](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B1%BD%E8%BD%A6%E4%B8%8E%E7%89%B9%E6%96%AF%E6%8B%89%E5%B7%AE%E8%B7%9D%23) `254.4K 🔥` `NEW`
1. [韩路解释特斯拉Roadster为什么会飞](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%B7%AF%E8%A7%A3%E9%87%8A%E7%89%B9%E6%96%AF%E6%8B%89Roadster%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E9%A3%9E%23) `253.0K 🔥` `NEW`
1. [花少8](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%23) `249.1K 🔥` `NEW`
1. [铁路车次新增X字头](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E8%BD%A6%E6%AC%A1%E6%96%B0%E5%A2%9EX%E5%AD%97%E5%A4%B4%23) `246.6K 🔥` `NEW`
1. [小城良方定档一股短剧味](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%AE%9A%E6%A1%A3%E4%B8%80%E8%82%A1%E7%9F%AD%E5%89%A7%E5%91%B3%23) `244.7K 🔥` `NEW`
1. [特斯拉Roadster2](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89Roadster2%23) `243.7K 🔥` `NEW`
1. [孟子义李昀锐还解绑吗](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E8%BF%98%E8%A7%A3%E7%BB%91%E5%90%97%23) `240.9K 🔥` `NEW`
1. [嫁金钗开播](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%BC%80%E6%92%AD%23) `235.7K 🔥` `NEW`
1. [故意不介入他人因果也是因果](https://s.weibo.com/weibo?q=%23%E6%95%85%E6%84%8F%E4%B8%8D%E4%BB%8B%E5%85%A5%E4%BB%96%E4%BA%BA%E5%9B%A0%E6%9E%9C%E4%B9%9F%E6%98%AF%E5%9B%A0%E6%9E%9C%23) `234.2K 🔥` `NEW`
1. [王梓薇祝赵丽颖生日快乐](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A2%93%E8%96%87%E7%A5%9D%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90%23) `231.3K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `226.9K 🔥` `NEW`
1. [王一博吉利服](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%90%89%E5%88%A9%E6%9C%8D%23) `210.5K 🔥` `NEW`
1. [教师不愿当班主任困局从何处破解](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E4%B8%8D%E6%84%BF%E5%BD%93%E7%8F%AD%E4%B8%BB%E4%BB%BB%E5%9B%B0%E5%B1%80%E4%BB%8E%E4%BD%95%E5%A4%84%E7%A0%B4%E8%A7%A3%23) `206.4K 🔥` `NEW`
1. [演员张昊玥称有艺人自费拍戏](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%BC%A0%E6%98%8A%E7%8E%A5%E7%A7%B0%E6%9C%89%E8%89%BA%E4%BA%BA%E8%87%AA%E8%B4%B9%E6%8B%8D%E6%88%8F%23) `205.3K 🔥` `NEW`
1. [特斯拉roadster零百加速接近1秒](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89roadster%E9%9B%B6%E7%99%BE%E5%8A%A0%E9%80%9F%E6%8E%A5%E8%BF%911%E7%A7%92%23) `200.7K 🔥` `NEW`
1. [双料影后首谈心目中理想型](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E6%96%99%E5%BD%B1%E5%90%8E%E9%A6%96%E8%B0%88%E5%BF%83%E7%9B%AE%E4%B8%AD%E7%90%86%E6%83%B3%E5%9E%8B%23) `191.7K 🔥` `NEW`
1. [特斯拉回应Roadster能否中国上市](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E5%9B%9E%E5%BA%94Roadster%E8%83%BD%E5%90%A6%E4%B8%AD%E5%9B%BD%E4%B8%8A%E5%B8%82%23) `188.1K 🔥` `NEW`
1. [特斯拉Roadster是怎么飞起来的](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89Roadster%E6%98%AF%E6%80%8E%E4%B9%88%E9%A3%9E%E8%B5%B7%E6%9D%A5%E7%9A%84%23) `180.5K 🔥` `NEW`
1. [理想高管说特斯拉Roadster面目全非](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E9%AB%98%E7%AE%A1%E8%AF%B4%E7%89%B9%E6%96%AF%E6%8B%89Roadster%E9%9D%A2%E7%9B%AE%E5%85%A8%E9%9D%9E%23) `179.4K 🔥` `NEW`
1. [人类驾驶时代最后的巅峰之作](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E9%A9%BE%E9%A9%B6%E6%97%B6%E4%BB%A3%E6%9C%80%E5%90%8E%E7%9A%84%E5%B7%85%E5%B3%B0%E4%B9%8B%E4%BD%9C%23) `177.5K 🔥` `NEW`
1. [SM艺人点赞李秀满AI翻跳NEON视频](https://s.weibo.com/weibo?q=%23SM%E8%89%BA%E4%BA%BA%E7%82%B9%E8%B5%9E%E6%9D%8E%E7%A7%80%E6%BB%A1AI%E7%BF%BB%E8%B7%B3NEON%E8%A7%86%E9%A2%91%23) `169.3K 🔥` `NEW`
1. [乔任梁父母回应陈乔恩10年不忘](https://s.weibo.com/weibo?q=%23%E4%B9%94%E4%BB%BB%E6%A2%81%E7%88%B6%E6%AF%8D%E5%9B%9E%E5%BA%94%E9%99%88%E4%B9%94%E6%81%A910%E5%B9%B4%E4%B8%8D%E5%BF%98%23) `157.9K 🔥` `NEW`
1. [徐艺洋24年6月的肚子](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B24%E5%B9%B46%E6%9C%88%E7%9A%84%E8%82%9A%E5%AD%90%23) `286.0K 🔥`
1. [多部门介入母子衣衫不整街头游荡](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%83%A8%E9%97%A8%E4%BB%8B%E5%85%A5%E6%AF%8D%E5%AD%90%E8%A1%A3%E8%A1%AB%E4%B8%8D%E6%95%B4%E8%A1%97%E5%A4%B4%E6%B8%B8%E8%8D%A1%23) `160.5K 🔥` `-76%`

Updated at 2026-10-16 13:53:56

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
