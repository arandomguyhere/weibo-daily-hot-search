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

1. [哈尔滨沙尘暴 (Harbin sandstorm)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E6%B2%99%E5%B0%98%E6%9A%B4%23) `1.3M 🔥` `NEW`
1. [半个娱乐圈又在京东发红包](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E5%8F%88%E5%9C%A8%E4%BA%AC%E4%B8%9C%E5%8F%91%E7%BA%A2%E5%8C%85%23) `534.7K 🔥` `NEW`
1. [孙杨 下沉市场口碑反转](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%E5%8F%8D%E8%BD%AC%23) `274.3K 🔥` `NEW`
1. [广东辟谣高考将用AI改卷](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E8%BE%9F%E8%B0%A3%E9%AB%98%E8%80%83%E5%B0%86%E7%94%A8AI%E6%94%B9%E5%8D%B7%23) `274.3K 🔥` `NEW`
1. [王曦雨vs科斯蒂亚](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%A6%E9%9B%A8vs%E7%A7%91%E6%96%AF%E8%92%82%E4%BA%9A%23) `253.3K 🔥` `NEW`
1. [樊振东vs邱党](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E9%82%B1%E5%85%9A%23) `252.2K 🔥` `NEW`
1. [刘诗诗下沉市场](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%23) `250.9K 🔥` `NEW`
1. [高学历迷奸案醒来后一无所知的她们](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%AD%A6%E5%8E%86%E8%BF%B7%E5%A5%B8%E6%A1%88%E9%86%92%E6%9D%A5%E5%90%8E%E4%B8%80%E6%97%A0%E6%89%80%E7%9F%A5%E7%9A%84%E5%A5%B9%E4%BB%AC%23) `247.7K 🔥` `NEW`
1. [张凌赫线下活动取消目击者发声](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%E5%8F%96%E6%B6%88%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `246.7K 🔥` `NEW`
1. [法网](https://s.weibo.com/weibo?q=%23%E6%B3%95%E7%BD%91%23) `244.8K 🔥` `NEW`
1. [窦唯妹妹去谢霆锋演唱会 (Dou Wei’s sister went to Nicholas Tse’s concert)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E5%94%AF%E5%A6%B9%E5%A6%B9%E5%8E%BB%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `242.5K 🔥` `NEW`
1. [张峻豪泡泡更新](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B3%BB%E8%B1%AA%E6%B3%A1%E6%B3%A1%E6%9B%B4%E6%96%B0%23) `240.9K 🔥` `NEW`
1. [高温来袭的自救穿搭公式](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%B8%A9%E6%9D%A5%E8%A2%AD%E7%9A%84%E8%87%AA%E6%95%91%E7%A9%BF%E6%90%AD%E5%85%AC%E5%BC%8F%23) `239.4K 🔥` `NEW`
1. [其实补气血真的很简单](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E8%A1%A5%E6%B0%94%E8%A1%80%E7%9C%9F%E7%9A%84%E5%BE%88%E7%AE%80%E5%8D%95%23) `237.3K 🔥` `NEW`
1. [白百何参加儿子毕业典礼](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%99%BE%E4%BD%95%E5%8F%82%E5%8A%A0%E5%84%BF%E5%AD%90%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%23) `234.7K 🔥` `NEW`
1. [办公室阴招可以不用一定要会](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%85%AC%E5%AE%A4%E9%98%B4%E6%8B%9B%E5%8F%AF%E4%BB%A5%E4%B8%8D%E7%94%A8%E4%B8%80%E5%AE%9A%E8%A6%81%E4%BC%9A%23) `234.1K 🔥` `NEW`
1. [李昀锐衣服李晨脱完丁程鑫脱](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%A1%A3%E6%9C%8D%E6%9D%8E%E6%99%A8%E8%84%B1%E5%AE%8C%E4%B8%81%E7%A8%8B%E9%91%AB%E8%84%B1%23) `232.3K 🔥` `NEW`
1. [中际旭创股价暴涨](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%99%85%E6%97%AD%E5%88%9B%E8%82%A1%E4%BB%B7%E6%9A%B4%E6%B6%A8%23) `230.5K 🔥` `NEW`
1. [小城良方排播](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E6%8E%92%E6%92%AD%23) `228.9K 🔥` `NEW`
1. [第一次理解精神损失费](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%90%86%E8%A7%A3%E7%B2%BE%E7%A5%9E%E6%8D%9F%E5%A4%B1%E8%B4%B9%23) `222.9K 🔥` `NEW`
1. [内娱明星眼里的杨幂 (Yang Mi in the eyes of domestic entertainment stars)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%98%8E%E6%98%9F%E7%9C%BC%E9%87%8C%E7%9A%84%E6%9D%A8%E5%B9%82%23) `221.0K 🔥` `NEW`
1. [斯瓦泰克vs科斯秋克](https://s.weibo.com/weibo?q=%23%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8Bvs%E7%A7%91%E6%96%AF%E7%A7%8B%E5%85%8B%23) `219.3K 🔥` `NEW`
1. [哈尔滨你怎么了](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E4%BD%A0%E6%80%8E%E4%B9%88%E4%BA%86%23) `217.8K 🔥` `NEW`
1. [JDG对战TES](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98TES%23) `216.8K 🔥` `NEW`
1. [云合](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%90%88%23) `214.4K 🔥` `NEW`
1. [今年618的第一个锦鲤诞生了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4618%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E9%94%A6%E9%B2%A4%E8%AF%9E%E7%94%9F%E4%BA%86%23) `211.3K 🔥` `NEW`
1. [手把手教你领国补优惠券](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E9%A2%86%E5%9B%BD%E8%A1%A5%E4%BC%98%E6%83%A0%E5%88%B8%23) `210.3K 🔥` `NEW`
1. [618真的能让懒人变得更快乐](https://s.weibo.com/weibo?q=%23618%E7%9C%9F%E7%9A%84%E8%83%BD%E8%AE%A9%E6%87%92%E4%BA%BA%E5%8F%98%E5%BE%97%E6%9B%B4%E5%BF%AB%E4%B9%90%23) `209.7K 🔥` `NEW`
1. [明星红包我接到了](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%E6%88%91%E6%8E%A5%E5%88%B0%E4%BA%86%23) `208.2K 🔥` `NEW`
1. [不读书的人生有多么的残酷](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%AF%BB%E4%B9%A6%E7%9A%84%E4%BA%BA%E7%94%9F%E6%9C%89%E5%A4%9A%E4%B9%88%E7%9A%84%E6%AE%8B%E9%85%B7%23) `205.8K 🔥` `NEW`
1. [TF泡泡 (TF bubble)](https://s.weibo.com/weibo?q=%23TF%E6%B3%A1%E6%B3%A1%23) `205.0K 🔥` `NEW`
1. [曝短剧演员陈添祥延毕2年](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%9F%AD%E5%89%A7%E6%BC%94%E5%91%98%E9%99%88%E6%B7%BB%E7%A5%A5%E5%BB%B6%E6%AF%952%E5%B9%B4%23) `249.4K 🔥`
1. [白鹿求粉丝别喊了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%B1%82%E7%B2%89%E4%B8%9D%E5%88%AB%E5%96%8A%E4%BA%86%23) `236.0K 🔥`
1. [咖啡减肥这样喝才有效](https://s.weibo.com/weibo?q=%23%E5%92%96%E5%95%A1%E5%87%8F%E8%82%A5%E8%BF%99%E6%A0%B7%E5%96%9D%E6%89%8D%E6%9C%89%E6%95%88%23) `227.7K 🔥`
1. [服务员争了半天谁去送这个包间](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E5%8A%A1%E5%91%98%E4%BA%89%E4%BA%86%E5%8D%8A%E5%A4%A9%E8%B0%81%E5%8E%BB%E9%80%81%E8%BF%99%E4%B8%AA%E5%8C%85%E9%97%B4%23) `225.3K 🔥`
1. [郭晓婷只有她出场时没用运镜](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E5%8F%AA%E6%9C%89%E5%A5%B9%E5%87%BA%E5%9C%BA%E6%97%B6%E6%B2%A1%E7%94%A8%E8%BF%90%E9%95%9C%23) `224.1K 🔥`
1. [重庆一凶宅39万余元起拍](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E4%B8%80%E5%87%B6%E5%AE%8539%E4%B8%87%E4%BD%99%E5%85%83%E8%B5%B7%E6%8B%8D%23) `223.9K 🔥`
1. [江山大同 (Jiangshan Datong)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%23) `219.7K 🔥`
1. [印度老人悬挂在高层窗外偷拍邻居](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E8%80%81%E4%BA%BA%E6%82%AC%E6%8C%82%E5%9C%A8%E9%AB%98%E5%B1%82%E7%AA%97%E5%A4%96%E5%81%B7%E6%8B%8D%E9%82%BB%E5%B1%85%23) `212.9K 🔥`
1. [岳雨婷曝短剧行业有很多捷径](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%9B%A8%E5%A9%B7%E6%9B%9D%E7%9F%AD%E5%89%A7%E8%A1%8C%E4%B8%9A%E6%9C%89%E5%BE%88%E5%A4%9A%E6%8D%B7%E5%BE%84%23) `206.8K 🔥`
1. [法国高温致7人死亡中国留学生发声 (High temperature in France kills 7 Chinese students speak out)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%AB%98%E6%B8%A9%E8%87%B47%E4%BA%BA%E6%AD%BB%E4%BA%A1%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%8F%91%E5%A3%B0%23) `852.7K 🔥` `-31%`
1. [智博会发布200余项创新成果](https://s.weibo.com/weibo?q=%23%E6%99%BA%E5%8D%9A%E4%BC%9A%E5%8F%91%E5%B8%83200%E4%BD%99%E9%A1%B9%E5%88%9B%E6%96%B0%E6%88%90%E6%9E%9C%23) `719.9K 🔥` `-24%`
1. [华为感谢美国制裁 (Huawei thanks US for sanctions)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%84%9F%E8%B0%A2%E7%BE%8E%E5%9B%BD%E5%88%B6%E8%A3%81%23) `356.7K 🔥` `-56%`
1. [央视起底娜塔莎暴力解压玩具](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B5%B7%E5%BA%95%E5%A8%9C%E5%A1%94%E8%8E%8E%E6%9A%B4%E5%8A%9B%E8%A7%A3%E5%8E%8B%E7%8E%A9%E5%85%B7%23) `288.9K 🔥` `-73%`
1. [过度防晒](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E9%98%B2%E6%99%92%23) `271.8K 🔥` `-69%`
1. [南天门计划最新进展曝光](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%A4%A9%E9%97%A8%E8%AE%A1%E5%88%92%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%E6%9B%9D%E5%85%89%23) `252.0K 🔥` `-36%`
1. [vogue红毯 疲惫](https://s.weibo.com/weibo?q=%23vogue%E7%BA%A2%E6%AF%AF%20%E7%96%B2%E6%83%AB%23) `245.5K 🔥` `-47%`
1. [曾沛慈长文告别三公](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E9%95%BF%E6%96%87%E5%91%8A%E5%88%AB%E4%B8%89%E5%85%AC%23) `242.9K 🔥` `-74%`
1. [考的越难 手在面部的位置越高](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%9A%84%E8%B6%8A%E9%9A%BE%20%E6%89%8B%E5%9C%A8%E9%9D%A2%E9%83%A8%E7%9A%84%E4%BD%8D%E7%BD%AE%E8%B6%8A%E9%AB%98%23) `238.5K 🔥` `-58%`
1. [接机张月时接到了浪姐节目组电话](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E6%9C%BA%E5%BC%A0%E6%9C%88%E6%97%B6%E6%8E%A5%E5%88%B0%E4%BA%86%E6%B5%AA%E5%A7%90%E8%8A%82%E7%9B%AE%E7%BB%84%E7%94%B5%E8%AF%9D%23) `233.2K 🔥` `-56%`
1. [刘德华妻子60岁状态](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BE%B7%E5%8D%8E%E5%A6%BB%E5%AD%9060%E5%B2%81%E7%8A%B6%E6%80%81%23) `226.7K 🔥` `-40%`
1. [韩庚鹿晗SM师兄弟合体](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%BA%9A%E9%B9%BF%E6%99%97SM%E5%B8%88%E5%85%84%E5%BC%9F%E5%90%88%E4%BD%93%23) `214.9K 🔥` `-21%`

Updated at 2026-05-31 19:11:18

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
