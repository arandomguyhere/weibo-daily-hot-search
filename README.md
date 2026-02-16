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

1. [孙颖莎红包 (Sun Yingsha red envelope)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%BA%A2%E5%8C%85%23) `205.3K 🔥` `NEW`
1. [一条微博晒年夜饭](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9D%A1%E5%BE%AE%E5%8D%9A%E6%99%92%E5%B9%B4%E5%A4%9C%E9%A5%AD%23) `183.7K 🔥` `NEW`
1. [春晚3个小品](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A3%E4%B8%AA%E5%B0%8F%E5%93%81%23) `163.2K 🔥` `NEW`
1. [曾舜晞红包](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E7%BA%A2%E5%8C%85%23) `158.6K 🔥` `NEW`
1. [李一桐定时红包](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%AE%9A%E6%97%B6%E7%BA%A2%E5%8C%85%23) `131.0K 🔥` `NEW`
1. [一阳双排](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%98%B3%E5%8F%8C%E6%8E%92%23) `130.4K 🔥` `NEW`
1. [春晚没有相声](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E6%B2%A1%E6%9C%89%E7%9B%B8%E5%A3%B0%23) `127.7K 🔥` `NEW`
1. [年夜饭变身大型千问拉新现场](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%A4%9C%E9%A5%AD%E5%8F%98%E8%BA%AB%E5%A4%A7%E5%9E%8B%E5%8D%83%E9%97%AE%E6%8B%89%E6%96%B0%E7%8E%B0%E5%9C%BA%23) `112.6K 🔥` `NEW`
1. [檀健次红包](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%BA%A2%E5%8C%85%23) `111.5K 🔥` `NEW`
1. [反向过年的爸妈涌入北上广深](https://s.weibo.com/weibo?q=%23%E5%8F%8D%E5%90%91%E8%BF%87%E5%B9%B4%E7%9A%84%E7%88%B8%E5%A6%88%E6%B6%8C%E5%85%A5%E5%8C%97%E4%B8%8A%E5%B9%BF%E6%B7%B1%23) `109.2K 🔥` `NEW`
1. [吾妻晚音 我叫张三 (My wife's late voice is Zhang San.)](https://s.weibo.com/weibo?q=%23%E5%90%BE%E5%A6%BB%E6%99%9A%E9%9F%B3%20%E6%88%91%E5%8F%AB%E5%BC%A0%E4%B8%89%23) `107.9K 🔥` `NEW`
1. [小孩哥教爷爷抢千问红包](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%93%A5%E6%95%99%E7%88%B7%E7%88%B7%E6%8A%A2%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%23) `107.4K 🔥` `NEW`
1. [撒贝宁眉毛又要上热搜了](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%E7%9C%89%E6%AF%9B%E5%8F%88%E8%A6%81%E4%B8%8A%E7%83%AD%E6%90%9C%E4%BA%86%23) `106.2K 🔥` `NEW`
1. [王铮亮汪苏泷李现微音乐剧](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%93%AE%E4%BA%AE%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%9D%8E%E7%8E%B0%E5%BE%AE%E9%9F%B3%E4%B9%90%E5%89%A7%23) `90.8K 🔥` `NEW`
1. [此猫丑得油光水滑](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E7%8C%AB%E4%B8%91%E5%BE%97%E6%B2%B9%E5%85%89%E6%B0%B4%E6%BB%91%23) `87.4K 🔥` `NEW`
1. [年夜饭](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%A4%9C%E9%A5%AD%23) `1.7M 🔥` `+975%`
1. [红包分组 (Red envelope grouping)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `1.7M 🔥` `+931%`
1. [红包 (Red envelope)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `1.4M 🔥` `+566%`
1. [春晚大赏](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%A4%A7%E8%B5%8F%23) `180.6K 🔥` `+41%`
1. [黄景瑜红包](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E7%BA%A2%E5%8C%85%23) `176.9K 🔥` `+42%`
1. [你的骑手正在和外卖箱打架](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E9%AA%91%E6%89%8B%E6%AD%A3%E5%9C%A8%E5%92%8C%E5%A4%96%E5%8D%96%E7%AE%B1%E6%89%93%E6%9E%B6%23) `168.8K 🔥` `+36%`
1. [明星红包](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `12.1M 🔥`
1. [春晚节目单 (Spring Festival Gala Program)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `5.6M 🔥`
1. [千问红包](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%23) `2.6M 🔥`
1. [话百家姓过中国年](https://s.weibo.com/weibo?q=%23%E8%AF%9D%E7%99%BE%E5%AE%B6%E5%A7%93%E8%BF%87%E4%B8%AD%E5%9B%BD%E5%B9%B4%23) `2.1M 🔥`
1. [口令红包](https://s.weibo.com/weibo?q=%23%E5%8F%A3%E4%BB%A4%E7%BA%A2%E5%8C%85%23) `215.2K 🔥`
1. [除夕 (Lunar New Year's eve)](https://s.weibo.com/weibo?q=%23%E9%99%A4%E5%A4%95%23) `140.4K 🔥`
1. [以旅行见新年](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%97%85%E8%A1%8C%E8%A7%81%E6%96%B0%E5%B9%B4%23) `139.3K 🔥`
1. [孟子义 先发美图再发红包](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%20%E5%85%88%E5%8F%91%E7%BE%8E%E5%9B%BE%E5%86%8D%E5%8F%91%E7%BA%A2%E5%8C%85%23) `138.7K 🔥`
1. [过年背着妈妈点外卖](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E8%83%8C%E7%9D%80%E5%A6%88%E5%A6%88%E7%82%B9%E5%A4%96%E5%8D%96%23) `136.7K 🔥`
1. [陈哲远 15万红包](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%2015%E4%B8%87%E7%BA%A2%E5%8C%85%23) `136.6K 🔥`
1. [张凌赫 七个红包](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E4%B8%83%E4%B8%AA%E7%BA%A2%E5%8C%85%23) `134.7K 🔥`
1. [否认南京大屠杀的日本酒店老板死了](https://s.weibo.com/weibo?q=%23%E5%90%A6%E8%AE%A4%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%E7%9A%84%E6%97%A5%E6%9C%AC%E9%85%92%E5%BA%97%E8%80%81%E6%9D%BF%E6%AD%BB%E4%BA%86%23) `133.9K 🔥`
1. [敖瑞鹏发红包还有前菜 (Ao Ruipeng gave out red envelopes and appetizers)](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E5%8F%91%E7%BA%A2%E5%8C%85%E8%BF%98%E6%9C%89%E5%89%8D%E8%8F%9C%23) `132.7K 🔥`
1. [祝绪丹口令红包](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E7%BB%AA%E4%B8%B9%E5%8F%A3%E4%BB%A4%E7%BA%A2%E5%8C%85%23) `125.9K 🔥`
1. [周翊然红包 (Zhou Yiran red envelope)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E7%BA%A2%E5%8C%85%23) `119.9K 🔥`
1. [等白鹿红包](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%99%BD%E9%B9%BF%E7%BA%A2%E5%8C%85%23) `114.6K 🔥`
1. [沈腾马丽微电影 (Shen Teng and Ma Li's micro movie)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E9%A9%AC%E4%B8%BD%E5%BE%AE%E7%94%B5%E5%BD%B1%23) `114.0K 🔥`
1. [麻将鸡蛋](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E5%B0%86%E9%B8%A1%E8%9B%8B%23) `105.3K 🔥`
1. [Angelababy红包金额](https://s.weibo.com/weibo?q=%23Angelababy%E7%BA%A2%E5%8C%85%E9%87%91%E9%A2%9D%23) `101.9K 🔥`
1. [迪奥开运红 (Dior Lucky Red)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A5%A5%E5%BC%80%E8%BF%90%E7%BA%A2%23) `4.0M 🔥` `-44%`
1. [我的马年抓马之旅](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E9%A9%AC%E5%B9%B4%E6%8A%93%E9%A9%AC%E4%B9%8B%E6%97%85%23) `1.7M 🔥` `-65%`
1. [爷错了 别哭了](https://s.weibo.com/weibo?q=%23%E7%88%B7%E9%94%99%E4%BA%86%20%E5%88%AB%E5%93%AD%E4%BA%86%23) `124.0K 🔥` `-33%`
1. [梁洁红包 (Liang Jie red envelope)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%B4%81%E7%BA%A2%E5%8C%85%23) `120.9K 🔥` `-25%`
1. [今天又要集体洗头了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E5%8F%88%E8%A6%81%E9%9B%86%E4%BD%93%E6%B4%97%E5%A4%B4%E4%BA%86%23) `115.4K 🔥` `-30%`
1. [鞠婧祎20万红包 (Ju Jingyi’s 200,000 red envelope)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E20%E4%B8%87%E7%BA%A2%E5%8C%85%23) `110.0K 🔥` `-48%`
1. [被王毅痛斥后日本急了 (Japan is anxious after being reprimanded by Wang Yi)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%8E%8B%E6%AF%85%E7%97%9B%E6%96%A5%E5%90%8E%E6%97%A5%E6%9C%AC%E6%80%A5%E4%BA%86%23) `94.0K 🔥` `-25%`
1. [迪丽热巴春晚跳舞](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%98%A5%E6%99%9A%E8%B7%B3%E8%88%9E%23) `91.1K 🔥` `-28%`
1. [范丞丞红包](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%BA%A2%E5%8C%85%23) `85.8K 🔥` `-54%`
1. [明星红包预约 (Celebrity red envelope reservation)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%E9%A2%84%E7%BA%A6%23) `84.3K 🔥` `-30%`
1. [孙颖莎祝大家春节快乐 (Sun Yingsha wishes everyone a happy Spring Festival)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%A5%9D%E5%A4%A7%E5%AE%B6%E6%98%A5%E8%8A%82%E5%BF%AB%E4%B9%90%23) `80.9K 🔥` `-27%`
1. [易烊千玺9登春晚](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA9%E7%99%BB%E6%98%A5%E6%99%9A%23) `80.8K 🔥` `-34%`

Updated at 2026-02-16 16:07:13

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
