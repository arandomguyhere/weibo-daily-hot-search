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

1. [开学上拼多多买立白 香到没朋友 (When school starts, I buy Libai on Pinduoduo. It’s so popular that I have no friends.)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AD%A6%E4%B8%8A%E6%8B%BC%E5%A4%9A%E5%A4%9A%E4%B9%B0%E7%AB%8B%E7%99%BD%20%E9%A6%99%E5%88%B0%E6%B2%A1%E6%9C%8B%E5%8F%8B%23) `253.9K 🔥` `NEW`
1. [汪苏泷本人知道这件事情吗](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%9C%AC%E4%BA%BA%E7%9F%A5%E9%81%93%E8%BF%99%E4%BB%B6%E4%BA%8B%E6%83%85%E5%90%97%23) `137.3K 🔥` `NEW`
1. [成都铁路局回应](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E9%93%81%E8%B7%AF%E5%B1%80%E5%9B%9E%E5%BA%94%23) `135.4K 🔥` `NEW`
1. [王者海月朵莉亚造型设计](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%B5%B7%E6%9C%88%E6%9C%B5%E8%8E%89%E4%BA%9A%E9%80%A0%E5%9E%8B%E8%AE%BE%E8%AE%A1%23) `134.6K 🔥` `NEW`
1. [汪苏泷的素龙像演唱会水印](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E7%9A%84%E7%B4%A0%E9%BE%99%E5%83%8F%E6%BC%94%E5%94%B1%E4%BC%9A%E6%B0%B4%E5%8D%B0%23) `133.8K 🔥` `NEW`
1. [购票后未上车视为放弃席位使用权](https://s.weibo.com/weibo?q=%23%E8%B4%AD%E7%A5%A8%E5%90%8E%E6%9C%AA%E4%B8%8A%E8%BD%A6%E8%A7%86%E4%B8%BA%E6%94%BE%E5%BC%83%E5%B8%AD%E4%BD%8D%E4%BD%BF%E7%94%A8%E6%9D%83%23) `133.6K 🔥` `NEW`
1. [卧龙凤雏只剩陈若轩了](https://s.weibo.com/weibo?q=%23%E5%8D%A7%E9%BE%99%E5%87%A4%E9%9B%8F%E5%8F%AA%E5%89%A9%E9%99%88%E8%8B%A5%E8%BD%A9%E4%BA%86%23) `133.4K 🔥` `NEW`
1. [为什么建议定期更换水杯](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BB%BA%E8%AE%AE%E5%AE%9A%E6%9C%9F%E6%9B%B4%E6%8D%A2%E6%B0%B4%E6%9D%AF%23) `133.1K 🔥` `NEW`
1. [成年人的世界存款才是最大的体面](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E4%B8%96%E7%95%8C%E5%AD%98%E6%AC%BE%E6%89%8D%E6%98%AF%E6%9C%80%E5%A4%A7%E7%9A%84%E4%BD%93%E9%9D%A2%23) `132.8K 🔥` `NEW`
1. [曹骏吟唱](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%90%9F%E5%94%B1%23) `132.5K 🔥` `NEW`
1. [泰国猫咬警察被宣布为前科者 (Thai cat bit policeman declared ex-con)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E7%8C%AB%E5%92%AC%E8%AD%A6%E5%AF%9F%E8%A2%AB%E5%AE%A3%E5%B8%83%E4%B8%BA%E5%89%8D%E7%A7%91%E8%80%85%23) `132.3K 🔥` `NEW`
1. [Cube微博王](https://s.weibo.com/weibo?q=%23Cube%E5%BE%AE%E5%8D%9A%E7%8E%8B%23) `132.1K 🔥` `NEW`
1. [赤红道歉](https://s.weibo.com/weibo?q=%23%E8%B5%A4%E7%BA%A2%E9%81%93%E6%AD%89%23) `131.8K 🔥` `NEW`
1. [辛纳退出美网](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E7%BA%B3%E9%80%80%E5%87%BA%E7%BE%8E%E7%BD%91%23) `131.7K 🔥` `NEW`
1. [丈夫拍妻子出轨却因妨害隐私获刑](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E6%8B%8D%E5%A6%BB%E5%AD%90%E5%87%BA%E8%BD%A8%E5%8D%B4%E5%9B%A0%E5%A6%A8%E5%AE%B3%E9%9A%90%E7%A7%81%E8%8E%B7%E5%88%91%23) `186.3K 🔥` `+61%`
1. [梵克雅宝回应女子55元捡漏项链](https://s.weibo.com/weibo?q=%23%E6%A2%B5%E5%85%8B%E9%9B%85%E5%AE%9D%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%9055%E5%85%83%E6%8D%A1%E6%BC%8F%E9%A1%B9%E9%93%BE%23) `185.3K 🔥` `+26%`
1. [人绞尽脑汁不如命运随手一挥](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%BB%9E%E5%B0%BD%E8%84%91%E6%B1%81%E4%B8%8D%E5%A6%82%E5%91%BD%E8%BF%90%E9%9A%8F%E6%89%8B%E4%B8%80%E6%8C%A5%23) `137.0K 🔥` `+33%`
1. [多家车企启动召回 (Many car companies initiate recalls)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E8%BD%A6%E4%BC%81%E5%90%AF%E5%8A%A8%E5%8F%AC%E5%9B%9E%23) `133.9K 🔥` `+32%`
1. [BLG战胜TES](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CTES%23) `133.0K 🔥` `+24%`
1. [世界杯决赛禁赛处罚出炉](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E7%A6%81%E8%B5%9B%E5%A4%84%E7%BD%9A%E5%87%BA%E7%82%89%23) `557.7K 🔥`
1. [未检票上车第三方不能处置该席位](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%A3%80%E7%A5%A8%E4%B8%8A%E8%BD%A6%E7%AC%AC%E4%B8%89%E6%96%B9%E4%B8%8D%E8%83%BD%E5%A4%84%E7%BD%AE%E8%AF%A5%E5%B8%AD%E4%BD%8D%23) `226.1K 🔥`
1. [张彬彬曹骏李光洁吃了演员身份的亏 (Zhang Binbin, Cao Jun, and Li Guangjie suffered the loss of being an actor)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E6%9B%B9%E9%AA%8F%E6%9D%8E%E5%85%89%E6%B4%81%E5%90%83%E4%BA%86%E6%BC%94%E5%91%98%E8%BA%AB%E4%BB%BD%E7%9A%84%E4%BA%8F%23) `205.9K 🔥`
1. [张雅琪路人缘](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E8%B7%AF%E4%BA%BA%E7%BC%98%23) `202.0K 🔥`
1. [徐涛 读研贬值的只是静态价值](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B6%9B%20%E8%AF%BB%E7%A0%94%E8%B4%AC%E5%80%BC%E7%9A%84%E5%8F%AA%E6%98%AF%E9%9D%99%E6%80%81%E4%BB%B7%E5%80%BC%23) `186.2K 🔥`
1. [张睿主持能力](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E4%B8%BB%E6%8C%81%E8%83%BD%E5%8A%9B%23) `137.7K 🔥`
1. [LV将彻底退出贵州市场](https://s.weibo.com/weibo?q=%23LV%E5%B0%86%E5%BD%BB%E5%BA%95%E9%80%80%E5%87%BA%E8%B4%B5%E5%B7%9E%E5%B8%82%E5%9C%BA%23) `136.6K 🔥`
1. [披荆斩棘一公仅淘汰一人](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%80%E5%85%AC%E4%BB%85%E6%B7%98%E6%B1%B0%E4%B8%80%E4%BA%BA%23) `136.4K 🔥`
1. [艾热看曾辉唱rap的表情](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%83%AD%E7%9C%8B%E6%9B%BE%E8%BE%89%E5%94%B1rap%E7%9A%84%E8%A1%A8%E6%83%85%23) `136.3K 🔥`
1. [这就是伯牙子期](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E4%BC%AF%E7%89%99%E5%AD%90%E6%9C%9F%23) `136.2K 🔥`
1. [女子暗恋8年终等来回应 (Woman waits for response after 8 years of secret love)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9A%97%E6%81%8B8%E5%B9%B4%E7%BB%88%E7%AD%89%E6%9D%A5%E5%9B%9E%E5%BA%94%23) `135.9K 🔥`
1. [河北老人养老金月领212元](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E8%80%81%E4%BA%BA%E5%85%BB%E8%80%81%E9%87%91%E6%9C%88%E9%A2%86212%E5%85%83%23) `135.7K 🔥`
1. [母亲被撞溺亡搜救七天花光所有积蓄](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%A2%AB%E6%92%9E%E6%BA%BA%E4%BA%A1%E6%90%9C%E6%95%91%E4%B8%83%E5%A4%A9%E8%8A%B1%E5%85%89%E6%89%80%E6%9C%89%E7%A7%AF%E8%93%84%23) `135.6K 🔥`
1. [阿根廷中场禁赛10场 (Argentina midfielder banned for 10 games)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%AD%E5%9C%BA%E7%A6%81%E8%B5%9B10%E5%9C%BA%23) `135.2K 🔥`
1. [顺其自然 难听 (Let nature take its course. It sounds ugly.)](https://s.weibo.com/weibo?q=%23%E9%A1%BA%E5%85%B6%E8%87%AA%E7%84%B6%20%E9%9A%BE%E5%90%AC%23) `135.0K 🔥`
1. [欢子淘汰待定 (Huanzi’s elimination is to be determined)](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E6%B7%98%E6%B1%B0%E5%BE%85%E5%AE%9A%23) `134.4K 🔥`
1. [开台灯遭邻居投诉影响孩子学习](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%8F%B0%E7%81%AF%E9%81%AD%E9%82%BB%E5%B1%85%E6%8A%95%E8%AF%89%E5%BD%B1%E5%93%8D%E5%AD%A9%E5%AD%90%E5%AD%A6%E4%B9%A0%23) `134.2K 🔥`
1. [金价涨嗨了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%B6%A8%E5%97%A8%E4%BA%86%23) `134.0K 🔥`
1. [京城大师赛 (Beijing Masters)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E5%9F%8E%E5%A4%A7%E5%B8%88%E8%B5%9B%23) `132.6K 🔥`
1. [官方通报旅客买票占座放零食事件 (Official reports on incident of passengers buying tickets, occupying seats and giving snacks)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%97%85%E5%AE%A2%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E4%BA%8B%E4%BB%B6%23) `764.7K 🔥` `-23%`
1. [多元消费场景激发经济澎湃活力](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%85%83%E6%B6%88%E8%B4%B9%E5%9C%BA%E6%99%AF%E6%BF%80%E5%8F%91%E7%BB%8F%E6%B5%8E%E6%BE%8E%E6%B9%83%E6%B4%BB%E5%8A%9B%23) `310.4K 🔥` `-30%`
1. [欢子 摆烂](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%20%E6%91%86%E7%83%82%23) `225.1K 🔥` `-31%`
1. [披荆斩棘一公分数](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%80%E5%85%AC%E5%88%86%E6%95%B0%23) `218.1K 🔥` `-35%`
1. [警方通报男子KTV厕所殴打女子](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90KTV%E5%8E%95%E6%89%80%E6%AE%B4%E6%89%93%E5%A5%B3%E5%AD%90%23) `206.3K 🔥` `-26%`
1. [微信聊天框 难看](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%81%8A%E5%A4%A9%E6%A1%86%20%E9%9A%BE%E7%9C%8B%23) `176.6K 🔥` `-36%`
1. [张丹丹 灵活就业本身就是一种福利](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%B9%E4%B8%B9%20%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E6%9C%AC%E8%BA%AB%E5%B0%B1%E6%98%AF%E4%B8%80%E7%A7%8D%E7%A6%8F%E5%88%A9%23) `147.4K 🔥` `-25%`
1. [第一批用上微信按住转文字的人发声 (The first batch of people who used WeChat to press and hold to text spoke out)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%94%A8%E4%B8%8A%E5%BE%AE%E4%BF%A1%E6%8C%89%E4%BD%8F%E8%BD%AC%E6%96%87%E5%AD%97%E7%9A%84%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `147.1K 🔥` `-23%`
1. [小沈阳摔了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%91%94%E4%BA%86%23) `144.2K 🔥` `-23%`
1. [第一次当妈妈的真实感受 (What it’s like to be a mother for the first time)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%BD%93%E5%A6%88%E5%A6%88%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%84%9F%E5%8F%97%23) `138.4K 🔥` `-29%`
1. [艾热感觉被曾辉diss了 (Ai Re feels dissed by Zeng Hui)](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%83%AD%E6%84%9F%E8%A7%89%E8%A2%AB%E6%9B%BE%E8%BE%89diss%E4%BA%86%23) `137.2K 🔥` `-25%`
1. [妻子偷拍女子洗澡丈夫负责点评 (Wife secretly filmed woman taking a shower while husband was responsible for commenting)](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%81%B7%E6%8B%8D%E5%A5%B3%E5%AD%90%E6%B4%97%E6%BE%A1%E4%B8%88%E5%A4%AB%E8%B4%9F%E8%B4%A3%E7%82%B9%E8%AF%84%23) `136.9K 🔥` `-21%`
1. [影院午睡2.5小时仅1元多](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E9%99%A2%E5%8D%88%E7%9D%A12.5%E5%B0%8F%E6%97%B6%E4%BB%851%E5%85%83%E5%A4%9A%23) `134.8K 🔥` `-27%`

Updated at 2026-08-22 01:26:40

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
