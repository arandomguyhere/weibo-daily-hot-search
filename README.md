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

1. [生命树被标注白玉兰奖 (Tree of Life Awarded Magnolia Award)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E8%A2%AB%E6%A0%87%E6%B3%A8%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%23) `1.2M 🔥` `NEW`
1. [住东北就别熬夜了](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E4%B8%9C%E5%8C%97%E5%B0%B1%E5%88%AB%E7%86%AC%E5%A4%9C%E4%BA%86%23) `793.6K 🔥` `NEW`
1. [微信几乎把每个人捆绑在线上](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%87%A0%E4%B9%8E%E6%8A%8A%E6%AF%8F%E4%B8%AA%E4%BA%BA%E6%8D%86%E7%BB%91%E5%9C%A8%E7%BA%BF%E4%B8%8A%23) `782.2K 🔥` `NEW`
1. [六一表演小朋友失误却意外出彩](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%80%E8%A1%A8%E6%BC%94%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%A4%B1%E8%AF%AF%E5%8D%B4%E6%84%8F%E5%A4%96%E5%87%BA%E5%BD%A9%23) `770.7K 🔥` `NEW`
1. [新加坡街头印度人多得吓人](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E8%A1%97%E5%A4%B4%E5%8D%B0%E5%BA%A6%E4%BA%BA%E5%A4%9A%E5%BE%97%E5%90%93%E4%BA%BA%23) `676.6K 🔥` `NEW`
1. [鹿晗被张雨霏公主抱](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%A2%AB%E5%BC%A0%E9%9B%A8%E9%9C%8F%E5%85%AC%E4%B8%BB%E6%8A%B1%23) `545.6K 🔥` `NEW`
1. [曝唐嫣罗晋经常一起参加女儿活动](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%94%90%E5%AB%A3%E7%BD%97%E6%99%8B%E7%BB%8F%E5%B8%B8%E4%B8%80%E8%B5%B7%E5%8F%82%E5%8A%A0%E5%A5%B3%E5%84%BF%E6%B4%BB%E5%8A%A8%23) `499.0K 🔥` `NEW`
1. [时代峰峻高会泡泡工作人员代聊](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%AB%98%E4%BC%9A%E6%B3%A1%E6%B3%A1%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E4%BB%A3%E8%81%8A%23) `491.9K 🔥` `NEW`
1. [王源夏日歌会连唱5首](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%A4%8F%E6%97%A5%E6%AD%8C%E4%BC%9A%E8%BF%9E%E5%94%B15%E9%A6%96%23) `462.9K 🔥` `NEW`
1. [D1804次列车被困隧道内超2小时](https://s.weibo.com/weibo?q=%23D1804%E6%AC%A1%E5%88%97%E8%BD%A6%E8%A2%AB%E5%9B%B0%E9%9A%A7%E9%81%93%E5%86%85%E8%B6%852%E5%B0%8F%E6%97%B6%23) `444.1K 🔥` `NEW`
1. [判断饿的最好方法 (The best way to tell if you’re hungry)](https://s.weibo.com/weibo?q=%23%E5%88%A4%E6%96%AD%E9%A5%BF%E7%9A%84%E6%9C%80%E5%A5%BD%E6%96%B9%E6%B3%95%23) `398.8K 🔥` `NEW`
1. [遭仅退款榴莲商家起诉买家获立案](https://s.weibo.com/weibo?q=%23%E9%81%AD%E4%BB%85%E9%80%80%E6%AC%BE%E6%A6%B4%E8%8E%B2%E5%95%86%E5%AE%B6%E8%B5%B7%E8%AF%89%E4%B9%B0%E5%AE%B6%E8%8E%B7%E7%AB%8B%E6%A1%88%23) `316.5K 🔥` `NEW`
1. [特朗普名字被判从肯尼迪中心移除](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%90%8D%E5%AD%97%E8%A2%AB%E5%88%A4%E4%BB%8E%E8%82%AF%E5%B0%BC%E8%BF%AA%E4%B8%AD%E5%BF%83%E7%A7%BB%E9%99%A4%23) `313.4K 🔥` `NEW`
1. [体坛周报一员工发表不当言论被停职](https://s.weibo.com/weibo?q=%23%E4%BD%93%E5%9D%9B%E5%91%A8%E6%8A%A5%E4%B8%80%E5%91%98%E5%B7%A5%E5%8F%91%E8%A1%A8%E4%B8%8D%E5%BD%93%E8%A8%80%E8%AE%BA%E8%A2%AB%E5%81%9C%E8%81%8C%23) `310.3K 🔥` `NEW`
1. [获Offer后辞职入职前岗位被取消](https://s.weibo.com/weibo?q=%23%E8%8E%B7Offer%E5%90%8E%E8%BE%9E%E8%81%8C%E5%85%A5%E8%81%8C%E5%89%8D%E5%B2%97%E4%BD%8D%E8%A2%AB%E5%8F%96%E6%B6%88%23) `307.9K 🔥` `NEW`
1. [果农称一些荔枝刚摘下果肉就是白色](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E5%86%9C%E7%A7%B0%E4%B8%80%E4%BA%9B%E8%8D%94%E6%9E%9D%E5%88%9A%E6%91%98%E4%B8%8B%E6%9E%9C%E8%82%89%E5%B0%B1%E6%98%AF%E7%99%BD%E8%89%B2%23) `304.4K 🔥` `NEW`
1. [王橹杰第一条泡泡聊天](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%AC%AC%E4%B8%80%E6%9D%A1%E6%B3%A1%E6%B3%A1%E8%81%8A%E5%A4%A9%23) `282.7K 🔥` `NEW`
1. [鹿晗名字被用鹿角代替](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%90%8D%E5%AD%97%E8%A2%AB%E7%94%A8%E9%B9%BF%E8%A7%92%E4%BB%A3%E6%9B%BF%23) `276.6K 🔥` `NEW`
1. [万花世界](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%23) `270.7K 🔥` `NEW`
1. [豆包压缩证件照有多离谱](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%8E%8B%E7%BC%A9%E8%AF%81%E4%BB%B6%E7%85%A7%E6%9C%89%E5%A4%9A%E7%A6%BB%E8%B0%B1%23) `251.5K 🔥` `NEW`
1. [Jasper要去英国读书了 (Jasper is going to study in England)](https://s.weibo.com/weibo?q=%23Jasper%E8%A6%81%E5%8E%BB%E8%8B%B1%E5%9B%BD%E8%AF%BB%E4%B9%A6%E4%BA%86%23) `250.7K 🔥` `NEW`
1. [李昀锐向此沙介绍关晓彤](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%90%91%E6%AD%A4%E6%B2%99%E4%BB%8B%E7%BB%8D%E5%85%B3%E6%99%93%E5%BD%A4%23) `244.0K 🔥` `NEW`
1. [陈靖可直播男友视角选口红](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9D%96%E5%8F%AF%E7%9B%B4%E6%92%AD%E7%94%B7%E5%8F%8B%E8%A7%86%E8%A7%92%E9%80%89%E5%8F%A3%E7%BA%A2%23) `239.5K 🔥` `NEW`
1. [张雪拿下宁德时代大单](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%8B%BF%E4%B8%8B%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%A4%A7%E5%8D%95%23) `231.2K 🔥` `NEW`
1. [会所老板诈骗7亿潜逃奢靡生活曝光](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E6%89%80%E8%80%81%E6%9D%BF%E8%AF%88%E9%AA%977%E4%BA%BF%E6%BD%9C%E9%80%83%E5%A5%A2%E9%9D%A1%E7%94%9F%E6%B4%BB%E6%9B%9D%E5%85%89%23) `176.4K 🔥` `NEW`
1. [TF四代泡泡回复](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E6%B3%A1%E6%B3%A1%E5%9B%9E%E5%A4%8D%23) `175.4K 🔥` `NEW`
1. [宁德时代钠电池将规模量产](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E9%92%A0%E7%94%B5%E6%B1%A0%E5%B0%86%E8%A7%84%E6%A8%A1%E9%87%8F%E4%BA%A7%23) `166.7K 🔥` `NEW`
1. [王天辰红包惊喜空降](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E7%BA%A2%E5%8C%85%E6%83%8A%E5%96%9C%E7%A9%BA%E9%99%8D%23) `162.2K 🔥` `NEW`
1. [林宥嘉感谢魏如萱唱心酸](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AE%A5%E5%98%89%E6%84%9F%E8%B0%A2%E9%AD%8F%E5%A6%82%E8%90%B1%E5%94%B1%E5%BF%83%E9%85%B8%23) `160.9K 🔥` `NEW`
1. [16.99万元起领克10+和10正式上市](https://s.weibo.com/weibo?q=%2316.99%E4%B8%87%E5%85%83%E8%B5%B7%E9%A2%86%E5%85%8B10%2B%E5%92%8C10%E6%AD%A3%E5%BC%8F%E4%B8%8A%E5%B8%82%23) `740.8K 🔥` `+223%`
1. [再见朋友综艺真要来了 (Goodbye Friends variety show is really coming)](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%E7%BB%BC%E8%89%BA%E7%9C%9F%E8%A6%81%E6%9D%A5%E4%BA%86%23) `694.1K 🔥` `+177%`
1. [6月狗屎运最旺的星座](https://s.weibo.com/weibo?q=%236%E6%9C%88%E7%8B%97%E5%B1%8E%E8%BF%90%E6%9C%80%E6%97%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `496.4K 🔥` `+91%`
1. [杨紫回应网友开始理解邱莹莹了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%9B%9E%E5%BA%94%E7%BD%91%E5%8F%8B%E5%BC%80%E5%A7%8B%E7%90%86%E8%A7%A3%E9%82%B1%E8%8E%B9%E8%8E%B9%E4%BA%86%23) `230.8K 🔥` `+66%`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `163.7K 🔥` `+26%`
1. [女子想买1斤荔枝一个操作收到100斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%83%B3%E4%B9%B01%E6%96%A4%E8%8D%94%E6%9E%9D%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E6%94%B6%E5%88%B0100%E6%96%A4%23) `881.3K 🔥`
1. [科技工作者一生坚守的赤诚心声](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E5%B7%A5%E4%BD%9C%E8%80%85%E4%B8%80%E7%94%9F%E5%9D%9A%E5%AE%88%E7%9A%84%E8%B5%A4%E8%AF%9A%E5%BF%83%E5%A3%B0%23) `813.1K 🔥`
1. [林沐然 本升专](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%B2%90%E7%84%B6%20%E6%9C%AC%E5%8D%87%E4%B8%93%23) `473.0K 🔥`
1. [至今无人能破内马尔转会费](https://s.weibo.com/weibo?q=%23%E8%87%B3%E4%BB%8A%E6%97%A0%E4%BA%BA%E8%83%BD%E7%A0%B4%E5%86%85%E9%A9%AC%E5%B0%94%E8%BD%AC%E4%BC%9A%E8%B4%B9%23) `458.5K 🔥`
1. [白鹿孟子义说今天穿长裤太开心了 (Bailu Meng Ziyi said that she was so happy to wear trousers today)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AD%9F%E5%AD%90%E4%B9%89%E8%AF%B4%E4%BB%8A%E5%A4%A9%E7%A9%BF%E9%95%BF%E8%A3%A4%E5%A4%AA%E5%BC%80%E5%BF%83%E4%BA%86%23) `439.2K 🔥`
1. [减肥第一名冬瓜苹果煮水](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E7%AC%AC%E4%B8%80%E5%90%8D%E5%86%AC%E7%93%9C%E8%8B%B9%E6%9E%9C%E7%85%AE%E6%B0%B4%23) `389.9K 🔥`
1. [曾沛慈唐艺昕团危险团](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%94%90%E8%89%BA%E6%98%95%E5%9B%A2%E5%8D%B1%E9%99%A9%E5%9B%A2%23) `375.2K 🔥`
1. [保时捷为避奥迪猛打方向盘撞向路人 (Porsche swerves to avoid Audi and hits passerby)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E4%B8%BA%E9%81%BF%E5%A5%A5%E8%BF%AA%E7%8C%9B%E6%89%93%E6%96%B9%E5%90%91%E7%9B%98%E6%92%9E%E5%90%91%E8%B7%AF%E4%BA%BA%23) `246.1K 🔥`
1. [新疆 祛湿气 (Xinjiang removes moisture)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%20%E7%A5%9B%E6%B9%BF%E6%B0%94%23) `505.4K 🔥` `-40%`
1. [梁文峰对华为的态度](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E5%B3%B0%E5%AF%B9%E5%8D%8E%E4%B8%BA%E7%9A%84%E6%80%81%E5%BA%A6%23) `471.4K 🔥` `-47%`
1. [宾利车内藏3千万财物小偷盗走30万](https://s.weibo.com/weibo?q=%23%E5%AE%BE%E5%88%A9%E8%BD%A6%E5%86%85%E8%97%8F3%E5%8D%83%E4%B8%87%E8%B4%A2%E7%89%A9%E5%B0%8F%E5%81%B7%E7%9B%97%E8%B5%B030%E4%B8%87%23) `450.0K 🔥` `-52%`
1. [窦靖童紧张到喊妈妈救命](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E7%B4%A7%E5%BC%A0%E5%88%B0%E5%96%8A%E5%A6%88%E5%A6%88%E6%95%91%E5%91%BD%23) `439.8K 🔥` `-51%`
1. [演员刘洵去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%88%98%E6%B4%B5%E5%8E%BB%E4%B8%96%23) `319.0K 🔥` `-21%`
1. [高会泡泡](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BC%9A%E6%B3%A1%E6%B3%A1%23) `302.6K 🔥` `-45%`
1. [榴莲仅退款事件商家已报警 (The merchant has called the police over the durian-only refund incident)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%BA%8B%E4%BB%B6%E5%95%86%E5%AE%B6%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `276.9K 🔥` `-51%`
1. [孟子义cue了李昀锐](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89cue%E4%BA%86%E6%9D%8E%E6%98%80%E9%94%90%23) `248.9K 🔥` `-52%`
1. [洪潇为虞书欣发声](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E6%BD%87%E4%B8%BA%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8F%91%E5%A3%B0%23) `178.0K 🔥` `-34%`

Updated at 2026-05-30 16:04:56

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
