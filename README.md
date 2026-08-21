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

1. [官方通报旅客买票占座放零食事件 (Official reports on incident of passengers buying tickets, occupying seats and giving snacks)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%97%85%E5%AE%A2%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E4%BA%8B%E4%BB%B6%23) `1.4M 🔥` `NEW`
1. [北大确认韦东奕卖书账号为本人](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E7%A1%AE%E8%AE%A4%E9%9F%A6%E4%B8%9C%E5%A5%95%E5%8D%96%E4%B9%A6%E8%B4%A6%E5%8F%B7%E4%B8%BA%E6%9C%AC%E4%BA%BA%23) `1.0M 🔥` `NEW`
1. [多元消费场景激发经济澎湃活力](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%85%83%E6%B6%88%E8%B4%B9%E5%9C%BA%E6%99%AF%E6%BF%80%E5%8F%91%E7%BB%8F%E6%B5%8E%E6%BE%8E%E6%B9%83%E6%B4%BB%E5%8A%9B%23) `841.0K 🔥` `NEW`
1. [范丞丞同款艾尼氪V预售11.99万起](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%90%8C%E6%AC%BE%E8%89%BE%E5%B0%BC%E6%B0%AAV%E9%A2%84%E5%94%AE11.99%E4%B8%87%E8%B5%B7%23) `839.0K 🔥` `NEW`
1. [世界杯决赛禁赛处罚出炉](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E7%A6%81%E8%B5%9B%E5%A4%84%E7%BD%9A%E5%87%BA%E7%82%89%23) `835.4K 🔥` `NEW`
1. [欢子 摆烂](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%20%E6%91%86%E7%83%82%23) `572.2K 🔥` `NEW`
1. [微信聊天框 难看](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%81%8A%E5%A4%A9%E6%A1%86%20%E9%9A%BE%E7%9C%8B%23) `503.7K 🔥` `NEW`
1. [全新领克20标配800V及激光雷达](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E9%A2%86%E5%85%8B20%E6%A0%87%E9%85%8D800V%E5%8F%8A%E6%BF%80%E5%85%89%E9%9B%B7%E8%BE%BE%23) `500.7K 🔥` `NEW`
1. [临沂爆炸事故1死2失联](https://s.weibo.com/weibo?q=%23%E4%B8%B4%E6%B2%82%E7%88%86%E7%82%B8%E4%BA%8B%E6%95%851%E6%AD%BB2%E5%A4%B1%E8%81%94%23) `494.6K 🔥` `NEW`
1. [披荆斩棘一公分数](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%80%E5%85%AC%E5%88%86%E6%95%B0%23) `465.3K 🔥` `NEW`
1. [阿根廷中场禁赛10场 (Argentina midfielder banned for 10 games)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%AD%E5%9C%BA%E7%A6%81%E8%B5%9B10%E5%9C%BA%23) `463.7K 🔥` `NEW`
1. [警方通报男子KTV厕所殴打女子](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90KTV%E5%8E%95%E6%89%80%E6%AE%B4%E6%89%93%E5%A5%B3%E5%AD%90%23) `410.2K 🔥` `NEW`
1. [陈柏霖当庭认罪](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%9F%8F%E9%9C%96%E5%BD%93%E5%BA%AD%E8%AE%A4%E7%BD%AA%23) `403.7K 🔥` `NEW`
1. [虞书欣娜扎撞衫](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A8%9C%E6%89%8E%E6%92%9E%E8%A1%AB%23) `373.7K 🔥` `NEW`
1. [徐涛 读研贬值的只是静态价值](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B6%9B%20%E8%AF%BB%E7%A0%94%E8%B4%AC%E5%80%BC%E7%9A%84%E5%8F%AA%E6%98%AF%E9%9D%99%E6%80%81%E4%BB%B7%E5%80%BC%23) `367.0K 🔥` `NEW`
1. [葫芦娃的公司告了时代峰峻](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E5%A8%83%E7%9A%84%E5%85%AC%E5%8F%B8%E5%91%8A%E4%BA%86%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%23) `328.6K 🔥` `NEW`
1. [F1索赔需举证时代峰峻可抗辩获利](https://s.weibo.com/weibo?q=%23F1%E7%B4%A2%E8%B5%94%E9%9C%80%E4%B8%BE%E8%AF%81%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%8F%AF%E6%8A%97%E8%BE%A9%E8%8E%B7%E5%88%A9%23) `317.7K 🔥` `NEW`
1. [被强奸护士案发后确诊重度抑郁症](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%BC%BA%E5%A5%B8%E6%8A%A4%E5%A3%AB%E6%A1%88%E5%8F%91%E5%90%8E%E7%A1%AE%E8%AF%8A%E9%87%8D%E5%BA%A6%E6%8A%91%E9%83%81%E7%97%87%23) `302.3K 🔥` `NEW`
1. [小沈阳摔了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%91%94%E4%BA%86%23) `300.8K 🔥` `NEW`
1. [第一次当妈妈的真实感受](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%BD%93%E5%A6%88%E5%A6%88%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%84%9F%E5%8F%97%23) `284.1K 🔥` `NEW`
1. [第一批用上微信按住转文字的人发声 (The first batch of people who used WeChat to press and hold to text spoke out)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%94%A8%E4%B8%8A%E5%BE%AE%E4%BF%A1%E6%8C%89%E4%BD%8F%E8%BD%AC%E6%96%87%E5%AD%97%E7%9A%84%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `282.4K 🔥` `NEW`
1. [临沂爆炸 捕鱼爆炸物](https://s.weibo.com/weibo?q=%23%E4%B8%B4%E6%B2%82%E7%88%86%E7%82%B8%20%E6%8D%95%E9%B1%BC%E7%88%86%E7%82%B8%E7%89%A9%23) `282.3K 🔥` `NEW`
1. [影院午睡2.5小时仅1元多](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E9%99%A2%E5%8D%88%E7%9D%A12.5%E5%B0%8F%E6%97%B6%E4%BB%851%E5%85%83%E5%A4%9A%23) `282.1K 🔥` `NEW`
1. [未检票上车第三方不能处置该席位](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%A3%80%E7%A5%A8%E4%B8%8A%E8%BD%A6%E7%AC%AC%E4%B8%89%E6%96%B9%E4%B8%8D%E8%83%BD%E5%A4%84%E7%BD%AE%E8%AF%A5%E5%B8%AD%E4%BD%8D%23) `278.9K 🔥` `NEW`
1. [梵克雅宝回应女子55元捡漏项链](https://s.weibo.com/weibo?q=%23%E6%A2%B5%E5%85%8B%E9%9B%85%E5%AE%9D%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%9055%E5%85%83%E6%8D%A1%E6%BC%8F%E9%A1%B9%E9%93%BE%23) `277.4K 🔥` `NEW`
1. [艾热看曾辉唱rap的表情](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%83%AD%E7%9C%8B%E6%9B%BE%E8%BE%89%E5%94%B1rap%E7%9A%84%E8%A1%A8%E6%83%85%23) `258.3K 🔥` `NEW`
1. [长江存储IPO审核状态变更](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E5%AD%98%E5%82%A8IPO%E5%AE%A1%E6%A0%B8%E7%8A%B6%E6%80%81%E5%8F%98%E6%9B%B4%23) `253.7K 🔥` `NEW`
1. [舒淇美成这样还有什么烦恼](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%E8%BF%98%E6%9C%89%E4%BB%80%E4%B9%88%E7%83%A6%E6%81%BC%23) `253.4K 🔥` `NEW`
1. [官方通报河北涿州代孕事件](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%B2%B3%E5%8C%97%E6%B6%BF%E5%B7%9E%E4%BB%A3%E5%AD%95%E4%BA%8B%E4%BB%B6%23) `241.1K 🔥` `NEW`
1. [妻子偷拍女子洗澡丈夫负责点评](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%81%B7%E6%8B%8D%E5%A5%B3%E5%AD%90%E6%B4%97%E6%BE%A1%E4%B8%88%E5%A4%AB%E8%B4%9F%E8%B4%A3%E7%82%B9%E8%AF%84%23) `209.1K 🔥` `NEW`
1. [艾热感觉被曾辉diss了 (Ai Re feels dissed by Zeng Hui)](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%83%AD%E6%84%9F%E8%A7%89%E8%A2%AB%E6%9B%BE%E8%BE%89diss%E4%BA%86%23) `208.3K 🔥` `NEW`
1. [金价涨嗨了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%B6%A8%E5%97%A8%E4%BA%86%23) `205.6K 🔥` `NEW`
1. [这就是伯牙子期](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E4%BC%AF%E7%89%99%E5%AD%90%E6%9C%9F%23) `205.4K 🔥` `NEW`
1. [张睿主持能力](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E4%B8%BB%E6%8C%81%E8%83%BD%E5%8A%9B%23) `199.2K 🔥` `NEW`
1. [李现王嘉尔生图](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%8E%8B%E5%98%89%E5%B0%94%E7%94%9F%E5%9B%BE%23) `185.8K 🔥` `NEW`
1. [LV将彻底退出贵州市场](https://s.weibo.com/weibo?q=%23LV%E5%B0%86%E5%BD%BB%E5%BA%95%E9%80%80%E5%87%BA%E8%B4%B5%E5%B7%9E%E5%B8%82%E5%9C%BA%23) `184.5K 🔥` `NEW`
1. [披荆斩棘一公仅淘汰一人](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%80%E5%85%AC%E4%BB%85%E6%B7%98%E6%B1%B0%E4%B8%80%E4%BA%BA%23) `183.3K 🔥` `NEW`
1. [张彬彬曹骏李光洁吃了演员身份的亏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E6%9B%B9%E9%AA%8F%E6%9D%8E%E5%85%89%E6%B4%81%E5%90%83%E4%BA%86%E6%BC%94%E5%91%98%E8%BA%AB%E4%BB%BD%E7%9A%84%E4%BA%8F%23) `182.7K 🔥` `NEW`
1. [张丹丹 灵活就业本身就是一种福利](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%B9%E4%B8%B9%20%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E6%9C%AC%E8%BA%AB%E5%B0%B1%E6%98%AF%E4%B8%80%E7%A7%8D%E7%A6%8F%E5%88%A9%23) `177.7K 🔥` `NEW`
1. [金龟子婚纱](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%BE%9F%E5%AD%90%E5%A9%9A%E7%BA%B1%23) `175.5K 🔥` `NEW`
1. [顺其自然 难听 (Let nature take its course. It sounds ugly.)](https://s.weibo.com/weibo?q=%23%E9%A1%BA%E5%85%B6%E8%87%AA%E7%84%B6%20%E9%9A%BE%E5%90%AC%23) `169.0K 🔥` `NEW`
1. [母亲被撞溺亡搜救七天花光所有积蓄](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%A2%AB%E6%92%9E%E6%BA%BA%E4%BA%A1%E6%90%9C%E6%95%91%E4%B8%83%E5%A4%A9%E8%8A%B1%E5%85%89%E6%89%80%E6%9C%89%E7%A7%AF%E8%93%84%23) `165.4K 🔥` `NEW`
1. [欢子淘汰待定](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E6%B7%98%E6%B1%B0%E5%BE%85%E5%AE%9A%23) `164.9K 🔥` `NEW`
1. [张函瑞的马陆被卖了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E7%9A%84%E9%A9%AC%E9%99%86%E8%A2%AB%E5%8D%96%E4%BA%86%23) `163.7K 🔥` `NEW`
1. [开台灯遭邻居投诉影响孩子学习](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%8F%B0%E7%81%AF%E9%81%AD%E9%82%BB%E5%B1%85%E6%8A%95%E8%AF%89%E5%BD%B1%E5%93%8D%E5%AD%A9%E5%AD%90%E5%AD%A6%E4%B9%A0%23) `146.3K 🔥` `NEW`
1. [张雅琪路人缘](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E8%B7%AF%E4%BA%BA%E7%BC%98%23) `145.9K 🔥` `NEW`
1. [女子暗恋8年终等来回应](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9A%97%E6%81%8B8%E5%B9%B4%E7%BB%88%E7%AD%89%E6%9D%A5%E5%9B%9E%E5%BA%94%23) `144.7K 🔥` `NEW`
1. [王嘉尔 我已经三十二了还要比心吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%20%E6%88%91%E5%B7%B2%E7%BB%8F%E4%B8%89%E5%8D%81%E4%BA%8C%E4%BA%86%E8%BF%98%E8%A6%81%E6%AF%94%E5%BF%83%E5%90%97%23) `142.2K 🔥` `NEW`
1. [京城大师赛](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E5%9F%8E%E5%A4%A7%E5%B8%88%E8%B5%9B%23) `138.1K 🔥` `NEW`
1. [BLG战胜TES](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CTES%23) `138.1K 🔥` `NEW`
1. [多家车企启动召回 (Many car companies initiate recalls)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E8%BD%A6%E4%BC%81%E5%90%AF%E5%8A%A8%E5%8F%AC%E5%9B%9E%23) `126.3K 🔥` `NEW`
1. [中际旭创业绩](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%99%85%E6%97%AD%E5%88%9B%E4%B8%9A%E7%BB%A9%23) `126.3K 🔥` `NEW`

Updated at 2026-08-22 00:14:05

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
