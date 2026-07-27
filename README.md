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

1. [金鹰奖 提名名单 (Golden Eagle Award Nomination List)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `1.7M 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `1.1M 🔥` `NEW`
1. [数说中国硬核经济亮点](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%B4%E4%B8%AD%E5%9B%BD%E7%A1%AC%E6%A0%B8%E7%BB%8F%E6%B5%8E%E4%BA%AE%E7%82%B9%23) `895.3K 🔥` `NEW`
1. [各个行业被AI取代的概率](https://s.weibo.com/weibo?q=%23%E5%90%84%E4%B8%AA%E8%A1%8C%E4%B8%9A%E8%A2%ABAI%E5%8F%96%E4%BB%A3%E7%9A%84%E6%A6%82%E7%8E%87%23) `791.1K 🔥` `NEW`
1. [阿里押注长鑫76亿搏出近1700亿](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E6%8A%BC%E6%B3%A8%E9%95%BF%E9%91%AB76%E4%BA%BF%E6%90%8F%E5%87%BA%E8%BF%911700%E4%BA%BF%23) `730.1K 🔥` `NEW`
1. [逐玉配角第一个飞升的是李卿](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%85%8D%E8%A7%92%E7%AC%AC%E4%B8%80%E4%B8%AA%E9%A3%9E%E5%8D%87%E7%9A%84%E6%98%AF%E6%9D%8E%E5%8D%BF%23) `690.6K 🔥` `NEW`
1. [肠癌很多人发现就是中晚期](https://s.weibo.com/weibo?q=%23%E8%82%A0%E7%99%8C%E5%BE%88%E5%A4%9A%E4%BA%BA%E5%8F%91%E7%8E%B0%E5%B0%B1%E6%98%AF%E4%B8%AD%E6%99%9A%E6%9C%9F%23) `542.8K 🔥` `NEW`
1. [艾米严谨](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E4%B8%A5%E8%B0%A8%23) `479.9K 🔥` `NEW`
1. [DeepSeek说他先去吃饭了](https://s.weibo.com/weibo?q=%23DeepSeek%E8%AF%B4%E4%BB%96%E5%85%88%E5%8E%BB%E5%90%83%E9%A5%AD%E4%BA%86%23) `396.0K 🔥` `NEW`
1. [露营遇山洪7人放弃财产全获救](https://s.weibo.com/weibo?q=%23%E9%9C%B2%E8%90%A5%E9%81%87%E5%B1%B1%E6%B4%AA7%E4%BA%BA%E6%94%BE%E5%BC%83%E8%B4%A2%E4%BA%A7%E5%85%A8%E8%8E%B7%E6%95%91%23) `340.8K 🔥` `NEW`
1. [李宏毅李登科和解 (Li Hongyi and Li Dengke reconcile)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%8F%E6%AF%85%E6%9D%8E%E7%99%BB%E7%A7%91%E5%92%8C%E8%A7%A3%23) `339.7K 🔥` `NEW`
1. [林志颖回应Kimi网上照片](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E5%9B%9E%E5%BA%94Kimi%E7%BD%91%E4%B8%8A%E7%85%A7%E7%89%87%23) `338.2K 🔥` `NEW`
1. [官方回应河南三支一扶成绩争议](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E6%88%90%E7%BB%A9%E4%BA%89%E8%AE%AE%23) `336.2K 🔥` `NEW`
1. [莫妮卡贝鲁奇老了也是法拉利](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%A6%AE%E5%8D%A1%E8%B4%9D%E9%B2%81%E5%A5%87%E8%80%81%E4%BA%86%E4%B9%9F%E6%98%AF%E6%B3%95%E6%8B%89%E5%88%A9%23) `335.7K 🔥` `NEW`
1. [虞书欣疑似被AI融脸和声音](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%96%91%E4%BC%BC%E8%A2%ABAI%E8%9E%8D%E8%84%B8%E5%92%8C%E5%A3%B0%E9%9F%B3%23) `333.6K 🔥` `NEW`
1. [合肥国资赚了万亿](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%9B%BD%E8%B5%84%E8%B5%9A%E4%BA%86%E4%B8%87%E4%BA%BF%23) `332.6K 🔥` `NEW`
1. [东野圭吾最好的十部作品](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%87%8E%E5%9C%AD%E5%90%BE%E6%9C%80%E5%A5%BD%E7%9A%84%E5%8D%81%E9%83%A8%E4%BD%9C%E5%93%81%23) `330.5K 🔥` `NEW`
1. [76人官方晒詹姆斯球衣](https://s.weibo.com/weibo?q=%2376%E4%BA%BA%E5%AE%98%E6%96%B9%E6%99%92%E8%A9%B9%E5%A7%86%E6%96%AF%E7%90%83%E8%A1%A3%23) `328.4K 🔥` `NEW`
1. [未来五年这样建强公共卫生体系](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E8%BF%99%E6%A0%B7%E5%BB%BA%E5%BC%BA%E5%85%AC%E5%85%B1%E5%8D%AB%E7%94%9F%E4%BD%93%E7%B3%BB%23) `327.9K 🔥` `NEW`
1. [不要和楼下大爷大妈混熟](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%92%8C%E6%A5%BC%E4%B8%8B%E5%A4%A7%E7%88%B7%E5%A4%A7%E5%A6%88%E6%B7%B7%E7%86%9F%23) `326.2K 🔥` `NEW`
1. [免费版GPT 像在仙人对话 (The free version of GPT is like talking to the immortals)](https://s.weibo.com/weibo?q=%23%E5%85%8D%E8%B4%B9%E7%89%88GPT%20%E5%83%8F%E5%9C%A8%E4%BB%99%E4%BA%BA%E5%AF%B9%E8%AF%9D%23) `323.9K 🔥` `NEW`
1. [吴尊15岁女儿neinei近照](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%B0%8A15%E5%B2%81%E5%A5%B3%E5%84%BFneinei%E8%BF%91%E7%85%A7%23) `323.1K 🔥` `NEW`
1. [宋亚轩刘耀文一件衣服穿了三年](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%88%98%E8%80%80%E6%96%87%E4%B8%80%E4%BB%B6%E8%A1%A3%E6%9C%8D%E7%A9%BF%E4%BA%86%E4%B8%89%E5%B9%B4%23) `321.3K 🔥` `NEW`
1. [河南通报三支一扶高分争议](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E9%80%9A%E6%8A%A5%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E9%AB%98%E5%88%86%E4%BA%89%E8%AE%AE%23) `319.7K 🔥` `NEW`
1. [丁禹兮侯明昊官宣同一场音乐节](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E4%BE%AF%E6%98%8E%E6%98%8A%E5%AE%98%E5%AE%A3%E5%90%8C%E4%B8%80%E5%9C%BA%E9%9F%B3%E4%B9%90%E8%8A%82%23) `316.7K 🔥` `NEW`
1. [超过五年没联系的朋友直接删](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%BF%87%E4%BA%94%E5%B9%B4%E6%B2%A1%E8%81%94%E7%B3%BB%E7%9A%84%E6%9C%8B%E5%8F%8B%E7%9B%B4%E6%8E%A5%E5%88%A0%23) `315.7K 🔥` `NEW`
1. [陈牧驰陈冰儿子首曝光](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%89%A7%E9%A9%B0%E9%99%88%E5%86%B0%E5%84%BF%E5%AD%90%E9%A6%96%E6%9B%9D%E5%85%89%23) `312.1K 🔥` `NEW`
1. [王楚然现在就出发三亚路透](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%E4%B8%89%E4%BA%9A%E8%B7%AF%E9%80%8F%23) `311.4K 🔥` `NEW`
1. [尹锡悦当选韩国总统或无效](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E5%BD%93%E9%80%89%E9%9F%A9%E5%9B%BD%E6%80%BB%E7%BB%9F%E6%88%96%E6%97%A0%E6%95%88%23) `308.7K 🔥` `NEW`
1. [高诗岩冯傲离开中国男篮集训队](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%AF%97%E5%B2%A9%E5%86%AF%E5%82%B2%E7%A6%BB%E5%BC%80%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E9%9B%86%E8%AE%AD%E9%98%9F%23) `308.1K 🔥` `NEW`
1. [成都暴雨 (Heavy rain in Chengdu)](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E6%9A%B4%E9%9B%A8%23) `306.3K 🔥` `NEW`
1. [发现朋友圈没人晒旅游照了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B2%A1%E4%BA%BA%E6%99%92%E6%97%85%E6%B8%B8%E7%85%A7%E4%BA%86%23) `304.3K 🔥` `NEW`
1. [老人一个月内被骗光600万积蓄](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%B8%80%E4%B8%AA%E6%9C%88%E5%86%85%E8%A2%AB%E9%AA%97%E5%85%89600%E4%B8%87%E7%A7%AF%E8%93%84%23) `303.6K 🔥` `NEW`
1. [真有人把AI的照片当成自己](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%9C%89%E4%BA%BA%E6%8A%8AAI%E7%9A%84%E7%85%A7%E7%89%87%E5%BD%93%E6%88%90%E8%87%AA%E5%B7%B1%23) `301.3K 🔥` `NEW`
1. [虞书欣 AI漫剧](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20AI%E6%BC%AB%E5%89%A7%23) `299.1K 🔥` `NEW`
1. [九尾英雄池](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E8%8B%B1%E9%9B%84%E6%B1%A0%23) `297.4K 🔥` `NEW`
1. [860元一晚酒店半夜关空调](https://s.weibo.com/weibo?q=%23860%E5%85%83%E4%B8%80%E6%99%9A%E9%85%92%E5%BA%97%E5%8D%8A%E5%A4%9C%E5%85%B3%E7%A9%BA%E8%B0%83%23) `296.6K 🔥` `NEW`
1. [说一个大家快要遗忘的梗](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E4%B8%80%E4%B8%AA%E5%A4%A7%E5%AE%B6%E5%BF%AB%E8%A6%81%E9%81%97%E5%BF%98%E7%9A%84%E6%A2%97%23) `294.5K 🔥` `NEW`
1. [房东为考北大考生免房租奖3万助学金](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E4%B8%BA%E8%80%83%E5%8C%97%E5%A4%A7%E8%80%83%E7%94%9F%E5%85%8D%E6%88%BF%E7%A7%9F%E5%A5%963%E4%B8%87%E5%8A%A9%E5%AD%A6%E9%87%91%23) `293.1K 🔥` `NEW`
1. [敬一丹公众号疑似辟谣去世传闻](https://s.weibo.com/weibo?q=%23%E6%95%AC%E4%B8%80%E4%B8%B9%E5%85%AC%E4%BC%97%E5%8F%B7%E7%96%91%E4%BC%BC%E8%BE%9F%E8%B0%A3%E5%8E%BB%E4%B8%96%E4%BC%A0%E9%97%BB%23) `291.3K 🔥` `NEW`
1. [肠癌留了10年逃生窗口期 (Bowel cancer has a 10-year escape window)](https://s.weibo.com/weibo?q=%23%E8%82%A0%E7%99%8C%E7%95%99%E4%BA%8610%E5%B9%B4%E9%80%83%E7%94%9F%E7%AA%97%E5%8F%A3%E6%9C%9F%23) `289.4K 🔥` `NEW`
1. [白夜行一个恶生恶的故事](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%A4%9C%E8%A1%8C%E4%B8%80%E4%B8%AA%E6%81%B6%E7%94%9F%E6%81%B6%E7%9A%84%E6%95%85%E4%BA%8B%23) `288.4K 🔥` `NEW`
1. [张慧雯去黄灿灿超话晒美甲挑衅](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E5%8E%BB%E9%BB%84%E7%81%BF%E7%81%BF%E8%B6%85%E8%AF%9D%E6%99%92%E7%BE%8E%E7%94%B2%E6%8C%91%E8%A1%85%23) `286.3K 🔥` `NEW`
1. [曾沛慈徐梦洁孟佳谢楠合照](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%BE%90%E6%A2%A6%E6%B4%81%E5%AD%9F%E4%BD%B3%E8%B0%A2%E6%A5%A0%E5%90%88%E7%85%A7%23) `285.4K 🔥` `NEW`
1. [A股隐形龙头涨幅远超长鑫科技](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%9A%90%E5%BD%A2%E9%BE%99%E5%A4%B4%E6%B6%A8%E5%B9%85%E8%BF%9C%E8%B6%85%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%23) `284.5K 🔥` `NEW`
1. [胡杏儿和张凌赫解释](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%9D%8F%E5%84%BF%E5%92%8C%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A7%A3%E9%87%8A%23) `282.5K 🔥` `NEW`
1. [刘耀文哄宋亚轩吃牛筋](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%93%84%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%90%83%E7%89%9B%E7%AD%8B%23) `280.9K 🔥` `NEW`
1. [苏有朋 杜飞跑了20多年到大同](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%9C%89%E6%9C%8B%20%E6%9D%9C%E9%A3%9E%E8%B7%91%E4%BA%8620%E5%A4%9A%E5%B9%B4%E5%88%B0%E5%A4%A7%E5%90%8C%23) `278.1K 🔥` `NEW`
1. [第一次对内蒙的地广人稀有了实感](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E5%86%85%E8%92%99%E7%9A%84%E5%9C%B0%E5%B9%BF%E4%BA%BA%E7%A8%80%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `276.9K 🔥` `NEW`

Updated at 2026-07-28 00:03:20

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
