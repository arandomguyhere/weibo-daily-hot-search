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

1. [公安机关依法打击借汛造谣案 (Public security organs crack down on cases of spreading rumors by taking advantage of floods in accordance with the law)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E6%9C%BA%E5%85%B3%E4%BE%9D%E6%B3%95%E6%89%93%E5%87%BB%E5%80%9F%E6%B1%9B%E9%80%A0%E8%B0%A3%E6%A1%88%23) `650.4K 🔥` `NEW`
1. [上京东直播 领520红包](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%AC%E4%B8%9C%E7%9B%B4%E6%92%AD%20%E9%A2%86520%E7%BA%A2%E5%8C%85%23) `589.3K 🔥` `NEW`
1. [柳州3.6级地震](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E3.6%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `551.9K 🔥` `NEW`
1. [再也不敢小瞧任何摆摊的了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E4%B9%9F%E4%B8%8D%E6%95%A2%E5%B0%8F%E7%9E%A7%E4%BB%BB%E4%BD%95%E6%91%86%E6%91%8A%E7%9A%84%E4%BA%86%23) `442.7K 🔥` `NEW`
1. [HBN官宣品牌代言人白敬亭](https://s.weibo.com/weibo?q=%23HBN%E5%AE%98%E5%AE%A3%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E7%99%BD%E6%95%AC%E4%BA%AD%23) `384.0K 🔥` `NEW`
1. [杨紫不用嘶吼落泪](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B8%8D%E7%94%A8%E5%98%B6%E5%90%BC%E8%90%BD%E6%B3%AA%23) `375.9K 🔥` `NEW`
1. [菲律宾涉台表态](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%B6%89%E5%8F%B0%E8%A1%A8%E6%80%81%23) `362.8K 🔥` `NEW`
1. [浪姐歌手对打](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%AD%8C%E6%89%8B%E5%AF%B9%E6%89%93%23) `312.5K 🔥` `NEW`
1. [烈性犬咬死2岁女童主人赔25万](https://s.weibo.com/weibo?q=%23%E7%83%88%E6%80%A7%E7%8A%AC%E5%92%AC%E6%AD%BB2%E5%B2%81%E5%A5%B3%E7%AB%A5%E4%B8%BB%E4%BA%BA%E8%B5%9425%E4%B8%87%23) `312.3K 🔥` `NEW`
1. [洁丽雅发石晶出生证](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%E5%8F%91%E7%9F%B3%E6%99%B6%E5%87%BA%E7%94%9F%E8%AF%81%23) `310.5K 🔥` `NEW`
1. [520红包 (520 red envelope)](https://s.weibo.com/weibo?q=%23520%E7%BA%A2%E5%8C%85%23) `310.2K 🔥` `NEW`
1. [俞浩因为张凌赫减肥30斤](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%B5%A9%E5%9B%A0%E4%B8%BA%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%8F%E8%82%A530%E6%96%A4%23) `309.2K 🔥` `NEW`
1. [苏新皓 是哥哥一直在依赖你](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%20%E6%98%AF%E5%93%A5%E5%93%A5%E4%B8%80%E7%9B%B4%E5%9C%A8%E4%BE%9D%E8%B5%96%E4%BD%A0%23) `308.9K 🔥` `NEW`
1. [黄金下跌原因](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%8B%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `269.3K 🔥` `NEW`
1. [男子身体不适坐在路边摇椅上安详去世](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%E5%9D%90%E5%9C%A8%E8%B7%AF%E8%BE%B9%E6%91%87%E6%A4%85%E4%B8%8A%E5%AE%89%E8%AF%A6%E5%8E%BB%E4%B8%96%23) `243.2K 🔥` `NEW`
1. [女子相亲遇优质男长得帅还包揽家务](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9B%B8%E4%BA%B2%E9%81%87%E4%BC%98%E8%B4%A8%E7%94%B7%E9%95%BF%E5%BE%97%E5%B8%85%E8%BF%98%E5%8C%85%E6%8F%BD%E5%AE%B6%E5%8A%A1%23) `238.5K 🔥` `NEW`
1. [易烊千玺小网站更新](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B0%8F%E7%BD%91%E7%AB%99%E6%9B%B4%E6%96%B0%23) `233.0K 🔥` `NEW`
1. [樊振东悄悄对莫雷加德说了一句话](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%82%84%E6%82%84%E5%AF%B9%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E8%AF%B4%E4%BA%86%E4%B8%80%E5%8F%A5%E8%AF%9D%23) `226.4K 🔥` `NEW`
1. [中国军人与普京专机同框](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E4%BA%BA%E4%B8%8E%E6%99%AE%E4%BA%AC%E4%B8%93%E6%9C%BA%E5%90%8C%E6%A1%86%23) `209.6K 🔥` `NEW`
1. [人民日报评药水杨梅事件](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E8%8D%AF%E6%B0%B4%E6%9D%A8%E6%A2%85%E4%BA%8B%E4%BB%B6%23) `175.8K 🔥` `NEW`
1. [独行侠解雇基德 (Mavericks fire Kidd)](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E8%A1%8C%E4%BE%A0%E8%A7%A3%E9%9B%87%E5%9F%BA%E5%BE%B7%23) `149.4K 🔥` `NEW`
1. [汤令山是真火了](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E4%BB%A4%E5%B1%B1%E6%98%AF%E7%9C%9F%E7%81%AB%E4%BA%86%23) `148.1K 🔥` `NEW`
1. [贺峻霖凌晨做汤饭](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%87%8C%E6%99%A8%E5%81%9A%E6%B1%A4%E9%A5%AD%23) `146.7K 🔥` `NEW`
1. [骑士vs尼克斯](https://s.weibo.com/weibo?q=%23%E9%AA%91%E5%A3%ABvs%E5%B0%BC%E5%85%8B%E6%96%AF%23) `134.0K 🔥` `NEW`
1. [张嘉益刘浩存这段戏看哭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%98%89%E7%9B%8A%E5%88%98%E6%B5%A9%E5%AD%98%E8%BF%99%E6%AE%B5%E6%88%8F%E7%9C%8B%E5%93%AD%E4%BA%86%23) `134.0K 🔥` `NEW`
1. [中国光纤爆单](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%89%E7%BA%A4%E7%88%86%E5%8D%95%23) `110.0K 🔥` `NEW`
1. [普京抱过的中国男孩将再见普京 (The Chinese boy Putin hugged will see Putin again)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%8A%B1%E8%BF%87%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%A9%E5%B0%86%E5%86%8D%E8%A7%81%E6%99%AE%E4%BA%AC%23) `1.1M 🔥` `+79%`
1. [日本汽车产业遇重创](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B1%BD%E8%BD%A6%E4%BA%A7%E4%B8%9A%E9%81%87%E9%87%8D%E5%88%9B%23) `313.2K 🔥` `+40%`
1. [普京总统专车车牌3个8](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%80%BB%E7%BB%9F%E4%B8%93%E8%BD%A6%E8%BD%A6%E7%89%8C3%E4%B8%AA8%23) `311.1K 🔥` `+275%`
1. [玻璃](https://s.weibo.com/weibo?q=%23%E7%8E%BB%E7%92%83%23) `266.1K 🔥` `+24%`
1. [OpenAI创始人跳槽Anthropic](https://s.weibo.com/weibo?q=%23OpenAI%E5%88%9B%E5%A7%8B%E4%BA%BA%E8%B7%B3%E6%A7%BDAnthropic%23) `264.1K 🔥` `+105%`
1. [七七的毕业作品 (Qiqi’s graduation work)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E4%B8%83%E7%9A%84%E6%AF%95%E4%B8%9A%E4%BD%9C%E5%93%81%23) `257.0K 🔥` `+26%`
1. [林俊杰晒和七七合照 (JJ Lin posted a photo with Qiqi)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E6%99%92%E5%92%8C%E4%B8%83%E4%B8%83%E5%90%88%E7%85%A7%23) `254.3K 🔥` `+21%`
1. [杉杉来了真夫妻结婚13年了](https://s.weibo.com/weibo?q=%23%E6%9D%89%E6%9D%89%E6%9D%A5%E4%BA%86%E7%9C%9F%E5%A4%AB%E5%A6%BB%E7%BB%93%E5%A9%9A13%E5%B9%B4%E4%BA%86%23) `225.6K 🔥` `+37%`
1. [黄金直线跳水原因找到了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `220.5K 🔥` `+35%`
1. [你一般每天刷牙几次](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B8%80%E8%88%AC%E6%AF%8F%E5%A4%A9%E5%88%B7%E7%89%99%E5%87%A0%E6%AC%A1%23) `128.3K 🔥` `+148%`
1. [杨紫谢谢谢娜](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%B0%A2%E8%B0%A2%E8%B0%A2%E5%A8%9C%23) `110.0K 🔥` `+53%`
1. [曝白玉兰提名名单](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `249.3K 🔥`
1. [张峻豪红包](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B3%BB%E8%B1%AA%E7%BA%A2%E5%8C%85%23) `222.1K 🔥`
1. [5个不经意间摄入微塑料的习惯](https://s.weibo.com/weibo?q=%235%E4%B8%AA%E4%B8%8D%E7%BB%8F%E6%84%8F%E9%97%B4%E6%91%84%E5%85%A5%E5%BE%AE%E5%A1%91%E6%96%99%E7%9A%84%E4%B9%A0%E6%83%AF%23) `221.5K 🔥`
1. [U17国足2比0澳大利亚U17](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B32%E6%AF%940%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9AU17%23) `215.2K 🔥`
1. [泰国终止60天免签 (Thailand ends 60-day visa exemption)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E7%BB%88%E6%AD%A260%E5%A4%A9%E5%85%8D%E7%AD%BE%23) `208.0K 🔥`
1. [气鼓鼓的孙颖莎](https://s.weibo.com/weibo?q=%23%E6%B0%94%E9%BC%93%E9%BC%93%E7%9A%84%E5%AD%99%E9%A2%96%E8%8E%8E%23) `162.8K 🔥`
1. [普京到达北京 (Putin arrives in Beijing)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%88%B0%E8%BE%BE%E5%8C%97%E4%BA%AC%23) `822.7K 🔥` `-52%`
1. [美国大满贯王楚钦孙颖莎混双 (American Grand Slam king Chuqin and Sun Yingsha mixed doubles)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%B7%B7%E5%8F%8C%23) `488.2K 🔥` `-48%`
1. [阿森纳是冠军 (Arsenal are champions)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%E6%98%AF%E5%86%A0%E5%86%9B%23) `275.4K 🔥` `-77%`
1. [普京抵京画面 (Putin's arrival in Beijing)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%8A%B5%E4%BA%AC%E7%94%BB%E9%9D%A2%23) `221.7K 🔥` `-37%`
1. [在不关注的领域世界有另一个样子 (The world looks different in areas you don’t pay attention to)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%8D%E5%85%B3%E6%B3%A8%E7%9A%84%E9%A2%86%E5%9F%9F%E4%B8%96%E7%95%8C%E6%9C%89%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%A0%B7%E5%AD%90%23) `154.8K 🔥` `-30%`
1. [家业收视率 (Household ratings)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `134.0K 🔥` `-55%`
1. [离婚争娃却不养致俩孩子流落养老院 (Divorced and fought over children but failed to raise them, resulting in two children living in a nursing home)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A%E4%BA%89%E5%A8%83%E5%8D%B4%E4%B8%8D%E5%85%BB%E8%87%B4%E4%BF%A9%E5%AD%A9%E5%AD%90%E6%B5%81%E8%90%BD%E5%85%BB%E8%80%81%E9%99%A2%23) `133.9K 🔥` `-36%`
1. [王毅机场迎接普京](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E6%9C%BA%E5%9C%BA%E8%BF%8E%E6%8E%A5%E6%99%AE%E4%BA%AC%23) `133.5K 🔥` `-37%`
1. [特斯拉放弃印度建厂](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E6%94%BE%E5%BC%83%E5%8D%B0%E5%BA%A6%E5%BB%BA%E5%8E%82%23) `110.0K 🔥` `-52%`

Updated at 2026-05-20 09:57:59

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
