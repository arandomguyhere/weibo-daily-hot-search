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

1. [中戏表演系原主任陈刚主动投案 (Chen Gang, former director of the Chinese Opera Performance Department, voluntarily surrendered)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E8%A1%A8%E6%BC%94%E7%B3%BB%E5%8E%9F%E4%B8%BB%E4%BB%BB%E9%99%88%E5%88%9A%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `778.2K 🔥` `NEW`
1. [第一次看到一箱草莓毫无食欲](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%88%B0%E4%B8%80%E7%AE%B1%E8%8D%89%E8%8E%93%E6%AF%AB%E6%97%A0%E9%A3%9F%E6%AC%B2%23) `199.3K 🔥` `NEW`
1. [车厘子卖家赌涨价压货](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%8E%98%E5%AD%90%E5%8D%96%E5%AE%B6%E8%B5%8C%E6%B6%A8%E4%BB%B7%E5%8E%8B%E8%B4%A7%23) `165.0K 🔥` `NEW`
1. [安龙场废水处理厂已全面移交泰克](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%BE%99%E5%9C%BA%E5%BA%9F%E6%B0%B4%E5%A4%84%E7%90%86%E5%8E%82%E5%B7%B2%E5%85%A8%E9%9D%A2%E7%A7%BB%E4%BA%A4%E6%B3%B0%E5%85%8B%23) `145.4K 🔥` `NEW`
1. [当明星遇上冬奥计时欧米茄](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%98%8E%E6%98%9F%E9%81%87%E4%B8%8A%E5%86%AC%E5%A5%A5%E8%AE%A1%E6%97%B6%E6%AC%A7%E7%B1%B3%E8%8C%84%23) `143.0K 🔥` `NEW`
1. [男子性侵前妻闺蜜被判10年8个月](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E5%89%8D%E5%A6%BB%E9%97%BA%E8%9C%9C%E8%A2%AB%E5%88%A410%E5%B9%B48%E4%B8%AA%E6%9C%88%23) `141.5K 🔥` `NEW`
1. [保罗老婆生娃大出血3L](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%BD%97%E8%80%81%E5%A9%86%E7%94%9F%E5%A8%83%E5%A4%A7%E5%87%BA%E8%A1%803L%23) `141.2K 🔥` `NEW`
1. [爱泼斯坦偷拍潜在受害者视频曝光](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%81%B7%E6%8B%8D%E6%BD%9C%E5%9C%A8%E5%8F%97%E5%AE%B3%E8%80%85%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `139.5K 🔥` `NEW`
1. [白鹿红包封面](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BA%A2%E5%8C%85%E5%B0%81%E9%9D%A2%23) `127.8K 🔥` `NEW`
1. [时代少年团你们吵到陈都灵了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%BD%A0%E4%BB%AC%E5%90%B5%E5%88%B0%E9%99%88%E9%83%BD%E7%81%B5%E4%BA%86%23) `92.7K 🔥` `NEW`
1. [白菊邵云飞离婚原因揭秘 (Reasons for divorce between Bai Ju and Shao Yunfei revealed)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%8F%8A%E9%82%B5%E4%BA%91%E9%A3%9E%E7%A6%BB%E5%A9%9A%E5%8E%9F%E5%9B%A0%E6%8F%AD%E7%A7%98%23) `92.6K 🔥` `NEW`
1. [春节小城酒店住宿暴涨到3000元](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%B0%8F%E5%9F%8E%E9%85%92%E5%BA%97%E4%BD%8F%E5%AE%BF%E6%9A%B4%E6%B6%A8%E5%88%B03000%E5%85%83%23) `92.5K 🔥` `NEW`
1. [退游等于净身出户](https://s.weibo.com/weibo?q=%23%E9%80%80%E6%B8%B8%E7%AD%89%E4%BA%8E%E5%87%80%E8%BA%AB%E5%87%BA%E6%88%B7%23) `92.1K 🔥` `NEW`
1. [赵明将出任千里科技联席董事长](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%8E%E5%B0%86%E5%87%BA%E4%BB%BB%E5%8D%83%E9%87%8C%E7%A7%91%E6%8A%80%E8%81%94%E5%B8%AD%E8%91%A3%E4%BA%8B%E9%95%BF%23) `91.7K 🔥` `NEW`
1. [为什么美国人说中国人是精灵族](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%BE%8E%E5%9B%BD%E4%BA%BA%E8%AF%B4%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%98%AF%E7%B2%BE%E7%81%B5%E6%97%8F%23) `89.9K 🔥` `NEW`
1. [第一批回村的人已经出片了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E5%9B%9E%E6%9D%91%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%87%BA%E7%89%87%E4%BA%86%23) `87.8K 🔥` `NEW`
1. [中方提要求立陶宛新总理称能改](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E6%8F%90%E8%A6%81%E6%B1%82%E7%AB%8B%E9%99%B6%E5%AE%9B%E6%96%B0%E6%80%BB%E7%90%86%E7%A7%B0%E8%83%BD%E6%94%B9%23) `86.8K 🔥` `NEW`
1. [团购12箱车厘子收到陈年僵尸果 (Group purchase of 12 boxes of cherries and received aged zombie fruit)](https://s.weibo.com/weibo?q=%23%E5%9B%A2%E8%B4%AD12%E7%AE%B1%E8%BD%A6%E5%8E%98%E5%AD%90%E6%94%B6%E5%88%B0%E9%99%88%E5%B9%B4%E5%83%B5%E5%B0%B8%E6%9E%9C%23) `1.1M 🔥` `+385%`
1. [王楚钦跑一万米](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B7%91%E4%B8%80%E4%B8%87%E7%B1%B3%23) `299.6K 🔥` `+157%`
1. [中方回应特朗普预计4月初访华](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E9%A2%84%E8%AE%A14%E6%9C%88%E5%88%9D%E8%AE%BF%E5%8D%8E%23) `254.2K 🔥` `+56%`
1. [国庆前做的美甲忍到了现在](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%89%8D%E5%81%9A%E7%9A%84%E7%BE%8E%E7%94%B2%E5%BF%8D%E5%88%B0%E4%BA%86%E7%8E%B0%E5%9C%A8%23) `140.0K 🔥` `+45%`
1. [中国人离登月又近了一步 (The Chinese are one step closer to landing on the moon)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%A6%BB%E7%99%BB%E6%9C%88%E5%8F%88%E8%BF%91%E4%BA%86%E4%B8%80%E6%AD%A5%23) `607.5K 🔥`
1. [张馨予 你很有钱是吗 (Zhang Xinyu, are you very rich?)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%20%E4%BD%A0%E5%BE%88%E6%9C%89%E9%92%B1%E6%98%AF%E5%90%97%23) `144.9K 🔥`
1. [蒋欣 当年真的错怪你了](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%20%E5%BD%93%E5%B9%B4%E7%9C%9F%E7%9A%84%E9%94%99%E6%80%AA%E4%BD%A0%E4%BA%86%23) `144.3K 🔥`
1. [孙颖莎装修微博](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%A3%85%E4%BF%AE%E5%BE%AE%E5%8D%9A%23) `143.6K 🔥`
1. [孙颖莎ELLE 6个封面](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%206%E4%B8%AA%E5%B0%81%E9%9D%A2%23) `143.3K 🔥`
1. [时代峰峻春联贴反了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%98%A5%E8%81%94%E8%B4%B4%E5%8F%8D%E4%BA%86%23) `142.8K 🔥`
1. [孙颖莎ELLE (Sun Yingsha ELLE)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%23) `142.2K 🔥`
1. [TFBOYS 你永远比别人多两个观众](https://s.weibo.com/weibo?q=%23TFBOYS%20%E4%BD%A0%E6%B0%B8%E8%BF%9C%E6%AF%94%E5%88%AB%E4%BA%BA%E5%A4%9A%E4%B8%A4%E4%B8%AA%E8%A7%82%E4%BC%97%23) `141.9K 🔥`
1. [姐姐被藏尸位置就在弟弟店铺正上方 (The location where my sister’s body was buried is right above my brother’s shop.)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%A2%AB%E8%97%8F%E5%B0%B8%E4%BD%8D%E7%BD%AE%E5%B0%B1%E5%9C%A8%E5%BC%9F%E5%BC%9F%E5%BA%97%E9%93%BA%E6%AD%A3%E4%B8%8A%E6%96%B9%23) `140.9K 🔥`
1. [李一桐 我比张凌赫强是吧](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%20%E6%88%91%E6%AF%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BC%BA%E6%98%AF%E5%90%A7%23) `140.4K 🔥`
1. [ILLIT NewJeans](https://s.weibo.com/weibo?q=%23ILLIT%20NewJeans%23) `140.2K 🔥`
1. [孙颖莎 E人的I人属性](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%20E%E4%BA%BA%E7%9A%84I%E4%BA%BA%E5%B1%9E%E6%80%A7%23) `139.3K 🔥`
1. [李一桐发了49999的红包](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%8F%91%E4%BA%8649999%E7%9A%84%E7%BA%A2%E5%8C%85%23) `138.3K 🔥`
1. [赵樱子do高颅顶 (Zhao Yingzi do high skull)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90do%E9%AB%98%E9%A2%85%E9%A1%B6%23) `135.9K 🔥`
1. [七莘路 (Qixin Road)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E8%8E%98%E8%B7%AF%23) `130.2K 🔥`
1. [男子出轨离婚出轨对象又出轨](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A8%E7%A6%BB%E5%A9%9A%E5%87%BA%E8%BD%A8%E5%AF%B9%E8%B1%A1%E5%8F%88%E5%87%BA%E8%BD%A8%23) `121.1K 🔥`
1. [谷爱凌不是输给第一名的第二名](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E4%B8%8D%E6%98%AF%E8%BE%93%E7%BB%99%E7%AC%AC%E4%B8%80%E5%90%8D%E7%9A%84%E7%AC%AC%E4%BA%8C%E5%90%8D%23) `117.5K 🔥`
1. [上海地铁嘉闵线发生局部渗漏](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%98%89%E9%97%B5%E7%BA%BF%E5%8F%91%E7%94%9F%E5%B1%80%E9%83%A8%E6%B8%97%E6%BC%8F%23) `93.0K 🔥`
1. [医生建议刷牙后先别漱口](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E5%88%B7%E7%89%99%E5%90%8E%E5%85%88%E5%88%AB%E6%BC%B1%E5%8F%A3%23) `88.7K 🔥`
1. [为什么奶茶封口还要盖盖子 (Why does milk tea need to be sealed with a lid?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A5%B6%E8%8C%B6%E5%B0%81%E5%8F%A3%E8%BF%98%E8%A6%81%E7%9B%96%E7%9B%96%E5%AD%90%23) `148.3K 🔥` `-36%`
1. [霉变车厘子毒性可达砒霜68倍](https://s.weibo.com/weibo?q=%23%E9%9C%89%E5%8F%98%E8%BD%A6%E5%8E%98%E5%AD%90%E6%AF%92%E6%80%A7%E5%8F%AF%E8%BE%BE%E7%A0%92%E9%9C%9C68%E5%80%8D%23) `145.7K 🔥` `-86%`
1. [相亲吃烤肉](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E4%BA%B2%E5%90%83%E7%83%A4%E8%82%89%23) `145.0K 🔥` `-33%`
1. [王莉霞严重违纪违法被双开 (Wang Lixia was double fired for serious violation of discipline and law)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8E%89%E9%9C%9E%E4%B8%A5%E9%87%8D%E8%BF%9D%E7%BA%AA%E8%BF%9D%E6%B3%95%E8%A2%AB%E5%8F%8C%E5%BC%80%23) `143.9K 🔥` `-81%`
1. [微博红包](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%BA%A2%E5%8C%85%23) `128.1K 🔥` `-21%`
1. [宋威龙晒被赵今麦扯开的领带](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%99%92%E8%A2%AB%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%89%AF%E5%BC%80%E7%9A%84%E9%A2%86%E5%B8%A6%23) `127.2K 🔥` `-22%`
1. [妈妈做了一桌预制菜年夜饭](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%81%9A%E4%BA%86%E4%B8%80%E6%A1%8C%E9%A2%84%E5%88%B6%E8%8F%9C%E5%B9%B4%E5%A4%9C%E9%A5%AD%23) `92.5K 🔥` `-28%`
1. [辛芷蕾秦岚 你祝福我吧 (Xin Zhilei Qin Lan Please bless me)](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E7%A7%A6%E5%B2%9A%20%E4%BD%A0%E7%A5%9D%E7%A6%8F%E6%88%91%E5%90%A7%23) `91.6K 🔥` `-23%`
1. [从Deepseek到Seedance中国AI成了 (From Deepseek to Seedance China’s AI has become)](https://s.weibo.com/weibo?q=%23%E4%BB%8EDeepseek%E5%88%B0Seedance%E4%B8%AD%E5%9B%BDAI%E6%88%90%E4%BA%86%23) `90.3K 🔥` `-45%`
1. [二胎妈妈跪求丈夫离婚放过自己 (Mother of second child begs her husband to divorce her and let her go)](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E8%83%8E%E5%A6%88%E5%A6%88%E8%B7%AA%E6%B1%82%E4%B8%88%E5%A4%AB%E7%A6%BB%E5%A9%9A%E6%94%BE%E8%BF%87%E8%87%AA%E5%B7%B1%23) `85.8K 🔥` `-47%`

Updated at 2026-02-12 17:28:38

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
