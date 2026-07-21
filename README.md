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

1. [9图看我国新兴产业积厚成势 (9 pictures show that my country’s emerging industries are gaining momentum)](https://s.weibo.com/weibo?q=%239%E5%9B%BE%E7%9C%8B%E6%88%91%E5%9B%BD%E6%96%B0%E5%85%B4%E4%BA%A7%E4%B8%9A%E7%A7%AF%E5%8E%9A%E6%88%90%E5%8A%BF%23) `761.0K 🔥` `NEW`
1. [中国球迷遭西班牙球迷种族歧视](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%90%83%E8%BF%B7%E9%81%AD%E8%A5%BF%E7%8F%AD%E7%89%99%E7%90%83%E8%BF%B7%E7%A7%8D%E6%97%8F%E6%AD%A7%E8%A7%86%23) `745.6K 🔥` `NEW`
1. [陈妍希疯狂安利这一秒过火](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E7%96%AF%E7%8B%82%E5%AE%89%E5%88%A9%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `495.7K 🔥` `NEW`
1. [圣罗兰中国形象大使陈哲远](https://s.weibo.com/weibo?q=%23%E5%9C%A3%E7%BD%97%E5%85%B0%E4%B8%AD%E5%9B%BD%E5%BD%A2%E8%B1%A1%E5%A4%A7%E4%BD%BF%E9%99%88%E5%93%B2%E8%BF%9C%23) `495.6K 🔥` `NEW`
1. [檀健次脖子咋了](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E8%84%96%E5%AD%90%E5%92%8B%E4%BA%86%23) `339.7K 🔥` `NEW`
1. [百花杀世子世子妃圆房](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E4%B8%96%E5%AD%90%E4%B8%96%E5%AD%90%E5%A6%83%E5%9C%86%E6%88%BF%23) `335.2K 🔥` `NEW`
1. [台风红霞即将登场](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%E5%8D%B3%E5%B0%86%E7%99%BB%E5%9C%BA%23) `328.4K 🔥` `NEW`
1. [西班牙球员每人获75.6万欧奖金](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%90%83%E5%91%98%E6%AF%8F%E4%BA%BA%E8%8E%B775.6%E4%B8%87%E6%AC%A7%E5%A5%96%E9%87%91%23) `314.5K 🔥` `NEW`
1. [易梦玲被裁掉的女孩](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E8%A2%AB%E8%A3%81%E6%8E%89%E7%9A%84%E5%A5%B3%E5%AD%A9%23) `308.1K 🔥` `NEW`
1. [海尔空调海外销量中企第一](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%B0%94%E7%A9%BA%E8%B0%83%E6%B5%B7%E5%A4%96%E9%94%80%E9%87%8F%E4%B8%AD%E4%BC%81%E7%AC%AC%E4%B8%80%23) `298.9K 🔥` `NEW`
1. [A股深V反弹原因 (Reasons for the deep V rebound of A shares)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%B7%B1V%E5%8F%8D%E5%BC%B9%E5%8E%9F%E5%9B%A0%23) `294.2K 🔥` `NEW`
1. [商场摔狗掌掴事件双方实为情侣](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%9C%BA%E6%91%94%E7%8B%97%E6%8E%8C%E6%8E%B4%E4%BA%8B%E4%BB%B6%E5%8F%8C%E6%96%B9%E5%AE%9E%E4%B8%BA%E6%83%85%E4%BE%A3%23) `291.4K 🔥` `NEW`
1. [普洱地震](https://s.weibo.com/weibo?q=%23%E6%99%AE%E6%B4%B1%E5%9C%B0%E9%9C%87%23) `287.2K 🔥` `NEW`
1. [檀健次问你们想毁了我吗](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E9%97%AE%E4%BD%A0%E4%BB%AC%E6%83%B3%E6%AF%81%E4%BA%86%E6%88%91%E5%90%97%23) `253.1K 🔥` `NEW`
1. [你需要大量的无聊](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E9%9C%80%E8%A6%81%E5%A4%A7%E9%87%8F%E7%9A%84%E6%97%A0%E8%81%8A%23) `225.9K 🔥` `NEW`
1. [偶遇黄景瑜和妈妈散步](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E9%BB%84%E6%99%AF%E7%91%9C%E5%92%8C%E5%A6%88%E5%A6%88%E6%95%A3%E6%AD%A5%23) `224.7K 🔥` `NEW`
1. [谢霆锋16岁出道半个娱乐圈助阵](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B16%E5%B2%81%E5%87%BA%E9%81%93%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E5%8A%A9%E9%98%B5%23) `214.6K 🔥` `NEW`
1. [胖东来称售卖的怡颗莓不会下架](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E7%A7%B0%E5%94%AE%E5%8D%96%E7%9A%84%E6%80%A1%E9%A2%97%E8%8E%93%E4%B8%8D%E4%BC%9A%E4%B8%8B%E6%9E%B6%23) `213.9K 🔥` `NEW`
1. [景甜一口气发了36张照片](https://s.weibo.com/weibo?q=%23%E6%99%AF%E7%94%9C%E4%B8%80%E5%8F%A3%E6%B0%94%E5%8F%91%E4%BA%8636%E5%BC%A0%E7%85%A7%E7%89%87%23) `191.6K 🔥` `NEW`
1. [百花杀副cp圆房了但世子妃换人了](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E5%89%AFcp%E5%9C%86%E6%88%BF%E4%BA%86%E4%BD%86%E4%B8%96%E5%AD%90%E5%A6%83%E6%8D%A2%E4%BA%BA%E4%BA%86%23) `171.5K 🔥` `NEW`
1. [美国一家七口吃300美元大餐后逃单 (An American family of seven skipped the bill after eating a $300 meal)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E5%AE%B6%E4%B8%83%E5%8F%A3%E5%90%83300%E7%BE%8E%E5%85%83%E5%A4%A7%E9%A4%90%E5%90%8E%E9%80%83%E5%8D%95%23) `156.0K 🔥` `NEW`
1. [TOP青岛站合唱歌单](https://s.weibo.com/weibo?q=%23TOP%E9%9D%92%E5%B2%9B%E7%AB%99%E5%90%88%E5%94%B1%E6%AD%8C%E5%8D%95%23) `156.0K 🔥` `NEW`
1. [为什么天气热容易犯困](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A4%A9%E6%B0%94%E7%83%AD%E5%AE%B9%E6%98%93%E7%8A%AF%E5%9B%B0%23) `156.0K 🔥` `NEW`
1. [33岁外卖员脑梗倒地多日才被发现](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E5%A4%96%E5%8D%96%E5%91%98%E8%84%91%E6%A2%97%E5%80%92%E5%9C%B0%E5%A4%9A%E6%97%A5%E6%89%8D%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `1.1M 🔥` `+218%`
1. [张雨绮 幼态风](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%A8%E7%BB%AE%20%E5%B9%BC%E6%80%81%E9%A3%8E%23) `335.6K 🔥` `+23%`
1. [谁来救救瘦子在夏天的食欲](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E6%95%91%E6%95%91%E7%98%A6%E5%AD%90%E5%9C%A8%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%9F%E6%AC%B2%23) `726.7K 🔥`
1. [蛋糕师笑了半天才决定把蛋糕送走](https://s.weibo.com/weibo?q=%23%E8%9B%8B%E7%B3%95%E5%B8%88%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E6%89%8D%E5%86%B3%E5%AE%9A%E6%8A%8A%E8%9B%8B%E7%B3%95%E9%80%81%E8%B5%B0%23) `489.8K 🔥`
1. [王源提到了TFBOYS演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%8F%90%E5%88%B0%E4%BA%86TFBOYS%E6%BC%94%E5%94%B1%E4%BC%9A%23) `411.0K 🔥`
1. [曝张雅琪已婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E9%9B%85%E7%90%AA%E5%B7%B2%E5%A9%9A%23) `340.3K 🔥`
1. [张柏芝月中火速安排大儿子回香港](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E6%9C%88%E4%B8%AD%E7%81%AB%E9%80%9F%E5%AE%89%E6%8E%92%E5%A4%A7%E5%84%BF%E5%AD%90%E5%9B%9E%E9%A6%99%E6%B8%AF%23) `338.3K 🔥`
1. [锋芝 原配真夫妻的含金量 (Fengzhi The value of a real married couple)](https://s.weibo.com/weibo?q=%23%E9%94%8B%E8%8A%9D%20%E5%8E%9F%E9%85%8D%E7%9C%9F%E5%A4%AB%E5%A6%BB%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `336.9K 🔥`
1. [90后清华天才 干崩了美股](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E6%B8%85%E5%8D%8E%E5%A4%A9%E6%89%8D%20%E5%B9%B2%E5%B4%A9%E4%BA%86%E7%BE%8E%E8%82%A1%23) `336.3K 🔥`
1. [张雅琪的老公 (Zhang Yaqi’s husband)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E7%9A%84%E8%80%81%E5%85%AC%23) `307.9K 🔥`
1. [女孩也很好但新生男孩越来越多](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B9%9F%E5%BE%88%E5%A5%BD%E4%BD%86%E6%96%B0%E7%94%9F%E7%94%B7%E5%AD%A9%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%23) `305.0K 🔥`
1. [谢贤第一任妻子哭到沙哑](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E7%AC%AC%E4%B8%80%E4%BB%BB%E5%A6%BB%E5%AD%90%E5%93%AD%E5%88%B0%E6%B2%99%E5%93%91%23) `303.6K 🔥`
1. [花少8秘鲁站合照](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E7%A7%98%E9%B2%81%E7%AB%99%E5%90%88%E7%85%A7%23) `295.7K 🔥`
1. [买的金针菇忘记吃了成这样了](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%9A%84%E9%87%91%E9%92%88%E8%8F%87%E5%BF%98%E8%AE%B0%E5%90%83%E4%BA%86%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `257.2K 🔥`
1. [哪个App偷听最严重 (Which app is the worst for eavesdropping?)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%B8%AAApp%E5%81%B7%E5%90%AC%E6%9C%80%E4%B8%A5%E9%87%8D%23) `1.1M 🔥` `-22%`
1. [阿根廷队多人面临禁赛](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E5%A4%9A%E4%BA%BA%E9%9D%A2%E4%B8%B4%E7%A6%81%E8%B5%9B%23) `366.9K 🔥` `-36%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `340.6K 🔥` `-63%`
1. [Bin暂别赛场](https://s.weibo.com/weibo?q=%23Bin%E6%9A%82%E5%88%AB%E8%B5%9B%E5%9C%BA%23) `338.5K 🔥` `-63%`
1. [怡颗莓 致癌物 (Yikeberry carcinogen)](https://s.weibo.com/weibo?q=%23%E6%80%A1%E9%A2%97%E8%8E%93%20%E8%87%B4%E7%99%8C%E7%89%A9%23) `334.7K 🔥` `-63%`
1. [王玉雯在白鹿面前很少化妆 (Wang Yuwen rarely puts on makeup in front of Bai Lu)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%9C%A8%E7%99%BD%E9%B9%BF%E9%9D%A2%E5%89%8D%E5%BE%88%E5%B0%91%E5%8C%96%E5%A6%86%23) `300.7K 🔥` `-21%`
1. [这居然是丞磊拍出来的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%85%E7%84%B6%E6%98%AF%E4%B8%9E%E7%A3%8A%E6%8B%8D%E5%87%BA%E6%9D%A5%E7%9A%84%23) `288.3K 🔥` `-25%`
1. [陈冠希 老人斑 (Edison Chen age spots)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%86%A0%E5%B8%8C%20%E8%80%81%E4%BA%BA%E6%96%91%23) `268.7K 🔥` `-21%`
1. [小孩哥右手火腿肠左手鹦鹉尸体 (The child's right hand is ham sausage and the left hand is a parrot corpse.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%93%A5%E5%8F%B3%E6%89%8B%E7%81%AB%E8%85%BF%E8%82%A0%E5%B7%A6%E6%89%8B%E9%B9%A6%E9%B9%89%E5%B0%B8%E4%BD%93%23) `250.8K 🔥` `-31%`
1. [王橹杰的文字日记](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%9A%84%E6%96%87%E5%AD%97%E6%97%A5%E8%AE%B0%23) `205.4K 🔥` `-42%`
1. [BBA今年集体大降价](https://s.weibo.com/weibo?q=%23BBA%E4%BB%8A%E5%B9%B4%E9%9B%86%E4%BD%93%E5%A4%A7%E9%99%8D%E4%BB%B7%23) `191.5K 🔥` `-29%`
1. [野狗骨头 删减](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%20%E5%88%A0%E5%87%8F%23) `156.0K 🔥` `-32%`
1. [BLG公布大名单](https://s.weibo.com/weibo?q=%23BLG%E5%85%AC%E5%B8%83%E5%A4%A7%E5%90%8D%E5%8D%95%23) `156.0K 🔥` `-59%`
1. [whzy评论Bin暂别赛场](https://s.weibo.com/weibo?q=%23whzy%E8%AF%84%E8%AE%BABin%E6%9A%82%E5%88%AB%E8%B5%9B%E5%9C%BA%23) `156.0K 🔥` `-56%`

Updated at 2026-07-21 20:58:18

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
