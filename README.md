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

1. [尚公主编剧水平](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E7%BC%96%E5%89%A7%E6%B0%B4%E5%B9%B3%23) `1.1M 🔥` `NEW`
1. [男子病危转院家属不打120叫网约车](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%97%85%E5%8D%B1%E8%BD%AC%E9%99%A2%E5%AE%B6%E5%B1%9E%E4%B8%8D%E6%89%93120%E5%8F%AB%E7%BD%91%E7%BA%A6%E8%BD%A6%23) `832.9K 🔥` `NEW`
1. [二十届五中全会是什么会](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%8D%81%E5%B1%8A%E4%BA%94%E4%B8%AD%E5%85%A8%E4%BC%9A%E6%98%AF%E4%BB%80%E4%B9%88%E4%BC%9A%23) `646.6K 🔥` `NEW`
1. [王沪宁陪同金正恩访问丹东](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%B2%AA%E5%AE%81%E9%99%AA%E5%90%8C%E9%87%91%E6%AD%A3%E6%81%A9%E8%AE%BF%E9%97%AE%E4%B8%B9%E4%B8%9C%23) `483.8K 🔥` `NEW`
1. [哪些省份的结婚人数多](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%BA%9B%E7%9C%81%E4%BB%BD%E7%9A%84%E7%BB%93%E5%A9%9A%E4%BA%BA%E6%95%B0%E5%A4%9A%23) `404.0K 🔥` `NEW`
1. [值得抢的新品在双11上新盛典](https://s.weibo.com/weibo?q=%23%E5%80%BC%E5%BE%97%E6%8A%A2%E7%9A%84%E6%96%B0%E5%93%81%E5%9C%A8%E5%8F%8C11%E4%B8%8A%E6%96%B0%E7%9B%9B%E5%85%B8%23) `404.0K 🔥` `NEW`
1. [蔡徐坤演唱会](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%BC%94%E5%94%B1%E4%BC%9A%23) `403.8K 🔥` `NEW`
1. [范丞丞确认出演璀璨之上](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%A1%AE%E8%AE%A4%E5%87%BA%E6%BC%94%E7%92%80%E7%92%A8%E4%B9%8B%E4%B8%8A%23) `403.4K 🔥` `NEW`
1. [病危男子遭网约车甩客身亡法院判了](https://s.weibo.com/weibo?q=%23%E7%97%85%E5%8D%B1%E7%94%B7%E5%AD%90%E9%81%AD%E7%BD%91%E7%BA%A6%E8%BD%A6%E7%94%A9%E5%AE%A2%E8%BA%AB%E4%BA%A1%E6%B3%95%E9%99%A2%E5%88%A4%E4%BA%86%23) `403.0K 🔥` `NEW`
1. [曝刘学义张予曦差点结婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E5%AD%A6%E4%B9%89%E5%BC%A0%E4%BA%88%E6%9B%A6%E5%B7%AE%E7%82%B9%E7%BB%93%E5%A9%9A%23) `402.9K 🔥` `NEW`
1. [毛不易婚礼发言引网友争议](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%E5%A9%9A%E7%A4%BC%E5%8F%91%E8%A8%80%E5%BC%95%E7%BD%91%E5%8F%8B%E4%BA%89%E8%AE%AE%23) `402.5K 🔥` `NEW`
1. [王俊凯 甲乙丙丁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E7%94%B2%E4%B9%99%E4%B8%99%E4%B8%81%23) `402.3K 🔥` `NEW`
1. [曝手机平板产品线将停更](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%89%8B%E6%9C%BA%E5%B9%B3%E6%9D%BF%E4%BA%A7%E5%93%81%E7%BA%BF%E5%B0%86%E5%81%9C%E6%9B%B4%23) `402.0K 🔥` `NEW`
1. [徐嘉余100仰亚洲纪录](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%98%89%E4%BD%99100%E4%BB%B0%E4%BA%9A%E6%B4%B2%E7%BA%AA%E5%BD%95%23) `401.5K 🔥` `NEW`
1. [迪丽热巴造型师被指逼宫冤吗](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%80%A0%E5%9E%8B%E5%B8%88%E8%A2%AB%E6%8C%87%E9%80%BC%E5%AE%AB%E5%86%A4%E5%90%97%23) `401.1K 🔥` `NEW`
1. [52岁阿姨吐槽中年找老伴太难了](https://s.weibo.com/weibo?q=%2352%E5%B2%81%E9%98%BF%E5%A7%A8%E5%90%90%E6%A7%BD%E4%B8%AD%E5%B9%B4%E6%89%BE%E8%80%81%E4%BC%B4%E5%A4%AA%E9%9A%BE%E4%BA%86%23) `400.9K 🔥` `NEW`
1. [日本前首相石破茂称日本侵略中国](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%89%8D%E9%A6%96%E7%9B%B8%E7%9F%B3%E7%A0%B4%E8%8C%82%E7%A7%B0%E6%97%A5%E6%9C%AC%E4%BE%B5%E7%95%A5%E4%B8%AD%E5%9B%BD%23) `400.5K 🔥` `NEW`
1. [宋雨琦演唱会嘉宾是李晨](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%E6%98%AF%E6%9D%8E%E6%99%A8%23) `400.4K 🔥` `NEW`
1. [金智媛居然跳了说出你的愿望](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E5%AA%9B%E5%B1%85%E7%84%B6%E8%B7%B3%E4%BA%86%E8%AF%B4%E5%87%BA%E4%BD%A0%E7%9A%84%E6%84%BF%E6%9C%9B%23) `399.8K 🔥` `NEW`
1. [孟子义直播控诉李昀锐](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%9B%B4%E6%92%AD%E6%8E%A7%E8%AF%89%E6%9D%8E%E6%98%80%E9%94%90%23) `399.8K 🔥` `NEW`
1. [黄多多讲话跟小时候一模一样](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E8%AE%B2%E8%AF%9D%E8%B7%9F%E5%B0%8F%E6%97%B6%E5%80%99%E4%B8%80%E6%A8%A1%E4%B8%80%E6%A0%B7%23) `399.3K 🔥` `NEW`
1. [女子称亲姐抢自己老公](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E4%BA%B2%E5%A7%90%E6%8A%A2%E8%87%AA%E5%B7%B1%E8%80%81%E5%85%AC%23) `399.3K 🔥` `NEW`
1. [王俊凯唱那女孩对我说](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%94%B1%E9%82%A3%E5%A5%B3%E5%AD%A9%E5%AF%B9%E6%88%91%E8%AF%B4%23) `398.7K 🔥` `NEW`
1. [那曲灾区孩子自发拥抱消防员](https://s.weibo.com/weibo?q=%23%E9%82%A3%E6%9B%B2%E7%81%BE%E5%8C%BA%E5%AD%A9%E5%AD%90%E8%87%AA%E5%8F%91%E6%8B%A5%E6%8A%B1%E6%B6%88%E9%98%B2%E5%91%98%23) `382.3K 🔥` `NEW`
1. [内娱这种瘦成骷髅的风气可以停止了吗](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E8%BF%99%E7%A7%8D%E7%98%A6%E6%88%90%E9%AA%B7%E9%AB%85%E7%9A%84%E9%A3%8E%E6%B0%94%E5%8F%AF%E4%BB%A5%E5%81%9C%E6%AD%A2%E4%BA%86%E5%90%97%23) `378.2K 🔥` `NEW`
1. [僵尸校园2](https://s.weibo.com/weibo?q=%23%E5%83%B5%E5%B0%B8%E6%A0%A1%E5%9B%AD2%23) `376.4K 🔥` `NEW`
1. [豆包把男友底细全招了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%8A%8A%E7%94%B7%E5%8F%8B%E5%BA%95%E7%BB%86%E5%85%A8%E6%8B%9B%E4%BA%86%23) `376.3K 🔥` `NEW`
1. [iPhoneDuo 华为铰链](https://s.weibo.com/weibo?q=%23iPhoneDuo%20%E5%8D%8E%E4%B8%BA%E9%93%B0%E9%93%BE%23) `365.1K 🔥` `NEW`
1. [汪苏泷晒了iPhoneDuo自拍](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%99%92%E4%BA%86iPhoneDuo%E8%87%AA%E6%8B%8D%23) `364.8K 🔥` `NEW`
1. [点进李昀锐直播间结果是孟子义](https://s.weibo.com/weibo?q=%23%E7%82%B9%E8%BF%9B%E6%9D%8E%E6%98%80%E9%94%90%E7%9B%B4%E6%92%AD%E9%97%B4%E7%BB%93%E6%9E%9C%E6%98%AF%E5%AD%9F%E5%AD%90%E4%B9%89%23) `331.6K 🔥` `NEW`
1. [无人机厂商报警称黑客赛事教唆破解](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%8E%82%E5%95%86%E6%8A%A5%E8%AD%A6%E7%A7%B0%E9%BB%91%E5%AE%A2%E8%B5%9B%E4%BA%8B%E6%95%99%E5%94%86%E7%A0%B4%E8%A7%A3%23) `331.3K 🔥` `NEW`
1. [璀璨之上 孙千](https://s.weibo.com/weibo?q=%23%E7%92%80%E7%92%A8%E4%B9%8B%E4%B8%8A%20%E5%AD%99%E5%8D%83%23) `329.1K 🔥` `NEW`
1. [刘铮亮心理防御机制](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%93%AE%E4%BA%AE%E5%BF%83%E7%90%86%E9%98%B2%E5%BE%A1%E6%9C%BA%E5%88%B6%23) `328.6K 🔥` `NEW`
1. [艾米穿戏服去文荣奖](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E7%A9%BF%E6%88%8F%E6%9C%8D%E5%8E%BB%E6%96%87%E8%8D%A3%E5%A5%96%23) `326.8K 🔥` `NEW`
1. [撒贝宁吸氧我是专业的](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%E5%90%B8%E6%B0%A7%E6%88%91%E6%98%AF%E4%B8%93%E4%B8%9A%E7%9A%84%23) `325.9K 🔥` `NEW`
1. [嫁金钗世子这反应不像演的](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E4%B8%96%E5%AD%90%E8%BF%99%E5%8F%8D%E5%BA%94%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `323.9K 🔥` `NEW`
1. [孩子调到最后一排是不是得罪老师](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E8%B0%83%E5%88%B0%E6%9C%80%E5%90%8E%E4%B8%80%E6%8E%92%E6%98%AF%E4%B8%8D%E6%98%AF%E5%BE%97%E7%BD%AA%E8%80%81%E5%B8%88%23) `322.4K 🔥` `NEW`
1. [女子离婚12年后接前婆婆一起生活](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A12%E5%B9%B4%E5%90%8E%E6%8E%A5%E5%89%8D%E5%A9%86%E5%A9%86%E4%B8%80%E8%B5%B7%E7%94%9F%E6%B4%BB%23) `321.5K 🔥` `NEW`
1. [米勒回应管泽元](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8B%92%E5%9B%9E%E5%BA%94%E7%AE%A1%E6%B3%BD%E5%85%83%23) `319.6K 🔥` `NEW`
1. [阿斯顿维拉vs曼城](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%96%AF%E9%A1%BF%E7%BB%B4%E6%8B%89vs%E6%9B%BC%E5%9F%8E%23) `317.9K 🔥` `NEW`
1. [小说里为什么没有广东霸总](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%AF%B4%E9%87%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B2%A1%E6%9C%89%E5%B9%BF%E4%B8%9C%E9%9C%B8%E6%80%BB%23) `317.4K 🔥` `NEW`
1. [时团零帧起手狗熊哆嗦毛](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%9B%A2%E9%9B%B6%E5%B8%A7%E8%B5%B7%E6%89%8B%E7%8B%97%E7%86%8A%E5%93%86%E5%97%A6%E6%AF%9B%23) `315.3K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `315.0K 🔥` `NEW`
1. [二十届中央第八轮巡视对象公布](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%8D%81%E5%B1%8A%E4%B8%AD%E5%A4%AE%E7%AC%AC%E5%85%AB%E8%BD%AE%E5%B7%A1%E8%A7%86%E5%AF%B9%E8%B1%A1%E5%85%AC%E5%B8%83%23) `312.5K 🔥` `NEW`
1. [老人拒绝检查后急性心梗去世](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%8B%92%E7%BB%9D%E6%A3%80%E6%9F%A5%E5%90%8E%E6%80%A5%E6%80%A7%E5%BF%83%E6%A2%97%E5%8E%BB%E4%B8%96%23) `311.2K 🔥` `NEW`
1. [突然get到了杨超越毫不费力的绝美](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6get%E5%88%B0%E4%BA%86%E6%9D%A8%E8%B6%85%E8%B6%8A%E6%AF%AB%E4%B8%8D%E8%B4%B9%E5%8A%9B%E7%9A%84%E7%BB%9D%E7%BE%8E%23) `401.5K 🔥` `+64%`
1. [存够200万算不算财务自由](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%A4%9F200%E4%B8%87%E7%AE%97%E4%B8%8D%E7%AE%97%E8%B4%A2%E5%8A%A1%E8%87%AA%E7%94%B1%23) `398.8K 🔥` `+112%`
1. [毛不易 情商](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%20%E6%83%85%E5%95%86%23) `376.3K 🔥` `+55%`
1. [上京东看披哥直播瓜分百万健康金](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%AC%E4%B8%9C%E7%9C%8B%E6%8A%AB%E5%93%A5%E7%9B%B4%E6%92%AD%E7%93%9C%E5%88%86%E7%99%BE%E4%B8%87%E5%81%A5%E5%BA%B7%E9%87%91%23) `641.0K 🔥`
1. [去年全国结婚登记676万对](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%B9%B4%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0676%E4%B8%87%E5%AF%B9%23) `583.9K 🔥` `-32%`
1. [秦始皇兵马俑上发现女性指纹](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%A7%8B%E7%9A%87%E5%85%B5%E9%A9%AC%E4%BF%91%E4%B8%8A%E5%8F%91%E7%8E%B0%E5%A5%B3%E6%80%A7%E6%8C%87%E7%BA%B9%23) `403.7K 🔥` `-65%`

Updated at 2026-10-24 21:16:17

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
