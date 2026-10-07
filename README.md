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

1. [红绳是许兰香活下去的念想](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E7%BB%B3%E6%98%AF%E8%AE%B8%E5%85%B0%E9%A6%99%E6%B4%BB%E4%B8%8B%E5%8E%BB%E7%9A%84%E5%BF%B5%E6%83%B3%23) `760.7K 🔥` `NEW`
1. [C罗自请重罚再归队](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%87%AA%E8%AF%B7%E9%87%8D%E7%BD%9A%E5%86%8D%E5%BD%92%E9%98%9F%23) `598.8K 🔥` `NEW`
1. [缅北电诈纪录片颠覆认知](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E7%BA%AA%E5%BD%95%E7%89%87%E9%A2%A0%E8%A6%86%E8%AE%A4%E7%9F%A5%23) `409.4K 🔥` `NEW`
1. [莫德里奇回应C罗声明](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%BE%B7%E9%87%8C%E5%A5%87%E5%9B%9E%E5%BA%94C%E7%BD%97%E5%A3%B0%E6%98%8E%23) `407.1K 🔥` `NEW`
1. [官方辟谣高钾饮食能减脂](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E9%AB%98%E9%92%BE%E9%A5%AE%E9%A3%9F%E8%83%BD%E5%87%8F%E8%84%82%23) `400.5K 🔥` `NEW`
1. [陆虎音乐节救人居然这么好笑](https://s.weibo.com/weibo?q=%23%E9%99%86%E8%99%8E%E9%9F%B3%E4%B9%90%E8%8A%82%E6%95%91%E4%BA%BA%E5%B1%85%E7%84%B6%E8%BF%99%E4%B9%88%E5%A5%BD%E7%AC%91%23) `359.7K 🔥` `NEW`
1. [曝VOGUE盛典集齐了四大流量花](https://s.weibo.com/weibo?q=%23%E6%9B%9DVOGUE%E7%9B%9B%E5%85%B8%E9%9B%86%E9%BD%90%E4%BA%86%E5%9B%9B%E5%A4%A7%E6%B5%81%E9%87%8F%E8%8A%B1%23) `347.0K 🔥` `NEW`
1. [小狗被爸妈养一周一天比一天好笑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E8%A2%AB%E7%88%B8%E5%A6%88%E5%85%BB%E4%B8%80%E5%91%A8%E4%B8%80%E5%A4%A9%E6%AF%94%E4%B8%80%E5%A4%A9%E5%A5%BD%E7%AC%91%23) `278.4K 🔥` `NEW`
1. [吴奇隆举国旗遭台湾取消活动](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%A5%87%E9%9A%86%E4%B8%BE%E5%9B%BD%E6%97%97%E9%81%AD%E5%8F%B0%E6%B9%BE%E5%8F%96%E6%B6%88%E6%B4%BB%E5%8A%A8%23) `278.1K 🔥` `NEW`
1. [国足丢球又丢人](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E4%B8%A2%E7%90%83%E5%8F%88%E4%B8%A2%E4%BA%BA%23) `277.5K 🔥` `NEW`
1. [谢楠小儿子用手表拍的曾沛慈唐艺昕](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%E5%B0%8F%E5%84%BF%E5%AD%90%E7%94%A8%E6%89%8B%E8%A1%A8%E6%8B%8D%E7%9A%84%E6%9B%BE%E6%B2%9B%E6%85%88%E5%94%90%E8%89%BA%E6%98%95%23) `276.8K 🔥` `NEW`
1. [阿根廷队长国家队告别战](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E9%95%BF%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%91%8A%E5%88%AB%E6%88%98%23) `276.3K 🔥` `NEW`
1. [吴奇隆 不赚钱也是这个立场](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%A5%87%E9%9A%86%20%E4%B8%8D%E8%B5%9A%E9%92%B1%E4%B9%9F%E6%98%AF%E8%BF%99%E4%B8%AA%E7%AB%8B%E5%9C%BA%23) `275.5K 🔥` `NEW`
1. [心酸房奴在烂尾楼里装修](https://s.weibo.com/weibo?q=%23%E5%BF%83%E9%85%B8%E6%88%BF%E5%A5%B4%E5%9C%A8%E7%83%82%E5%B0%BE%E6%A5%BC%E9%87%8C%E8%A3%85%E4%BF%AE%23) `264.5K 🔥` `NEW`
1. [鹳雀楼签名墙被陕西游客签到黢黑](https://s.weibo.com/weibo?q=%23%E9%B9%B3%E9%9B%80%E6%A5%BC%E7%AD%BE%E5%90%8D%E5%A2%99%E8%A2%AB%E9%99%95%E8%A5%BF%E6%B8%B8%E5%AE%A2%E7%AD%BE%E5%88%B0%E9%BB%A2%E9%BB%91%23) `263.8K 🔥` `NEW`
1. [婚假被卡后反手投诉获批](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%81%87%E8%A2%AB%E5%8D%A1%E5%90%8E%E5%8F%8D%E6%89%8B%E6%8A%95%E8%AF%89%E8%8E%B7%E6%89%B9%23) `262.6K 🔥` `NEW`
1. [身体好的5个睡眠特征](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E5%A5%BD%E7%9A%845%E4%B8%AA%E7%9D%A1%E7%9C%A0%E7%89%B9%E5%BE%81%23) `262.0K 🔥` `NEW`
1. [阿根廷vs贝宁](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E8%B4%9D%E5%AE%81%23) `261.4K 🔥` `NEW`
1. [男子睡过头大闸蟹被蒸成炭](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%9D%A1%E8%BF%87%E5%A4%B4%E5%A4%A7%E9%97%B8%E8%9F%B9%E8%A2%AB%E8%92%B8%E6%88%90%E7%82%AD%23) `234.6K 🔥` `NEW`
1. [王一博在巴黎过上日子了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%9C%A8%E5%B7%B4%E9%BB%8E%E8%BF%87%E4%B8%8A%E6%97%A5%E5%AD%90%E4%BA%86%23) `234.6K 🔥` `NEW`
1. [宋茜卢昱晓LV造型](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%8C%9C%E5%8D%A2%E6%98%B1%E6%99%93LV%E9%80%A0%E5%9E%8B%23) `233.0K 🔥` `NEW`
1. [停个车全小区的人都知道你回来了](https://s.weibo.com/weibo?q=%23%E5%81%9C%E4%B8%AA%E8%BD%A6%E5%85%A8%E5%B0%8F%E5%8C%BA%E7%9A%84%E4%BA%BA%E9%83%BD%E7%9F%A5%E9%81%93%E4%BD%A0%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `219.6K 🔥` `NEW`
1. [驻冲绳美军最高负责人下令](https://s.weibo.com/weibo?q=%23%E9%A9%BB%E5%86%B2%E7%BB%B3%E7%BE%8E%E5%86%9B%E6%9C%80%E9%AB%98%E8%B4%9F%E8%B4%A3%E4%BA%BA%E4%B8%8B%E4%BB%A4%23) `146.3K 🔥` `NEW`
1. [外资结束对中国股票长达4年低配](https://s.weibo.com/weibo?q=%23%E5%A4%96%E8%B5%84%E7%BB%93%E6%9D%9F%E5%AF%B9%E4%B8%AD%E5%9B%BD%E8%82%A1%E7%A5%A8%E9%95%BF%E8%BE%BE4%E5%B9%B4%E4%BD%8E%E9%85%8D%23) `139.8K 🔥` `NEW`
1. [返程](https://s.weibo.com/weibo?q=%23%E8%BF%94%E7%A8%8B%23) `139.8K 🔥` `NEW`
1. [牛肉价格创近两年新高](https://s.weibo.com/weibo?q=%23%E7%89%9B%E8%82%89%E4%BB%B7%E6%A0%BC%E5%88%9B%E8%BF%91%E4%B8%A4%E5%B9%B4%E6%96%B0%E9%AB%98%23) `132.8K 🔥` `NEW`
1. [C罗 热苏斯](https://s.weibo.com/weibo?q=%23C%E7%BD%97%20%E7%83%AD%E8%8B%8F%E6%96%AF%23) `121.0K 🔥` `NEW`
1. [39岁日本女性被美军士兵杀害](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%80%A7%E8%A2%AB%E7%BE%8E%E5%86%9B%E5%A3%AB%E5%85%B5%E6%9D%80%E5%AE%B3%23) `119.9K 🔥` `NEW`
1. [大S早年综艺言论被考古](https://s.weibo.com/weibo?q=%23%E5%A4%A7S%E6%97%A9%E5%B9%B4%E7%BB%BC%E8%89%BA%E8%A8%80%E8%AE%BA%E8%A2%AB%E8%80%83%E5%8F%A4%23) `119.8K 🔥` `NEW`
1. [钱天一晒郑思维刘钰雯婚礼](https://s.weibo.com/weibo?q=%23%E9%92%B1%E5%A4%A9%E4%B8%80%E6%99%92%E9%83%91%E6%80%9D%E7%BB%B4%E5%88%98%E9%92%B0%E9%9B%AF%E5%A9%9A%E7%A4%BC%23) `115.0K 🔥` `NEW`
1. [许兰香最后终于能是沈嘉兰了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%85%B0%E9%A6%99%E6%9C%80%E5%90%8E%E7%BB%88%E4%BA%8E%E8%83%BD%E6%98%AF%E6%B2%88%E5%98%89%E5%85%B0%E4%BA%86%23) `112.8K 🔥` `NEW`
1. [最危险的是年轻时错过复利](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%8D%B1%E9%99%A9%E7%9A%84%E6%98%AF%E5%B9%B4%E8%BD%BB%E6%97%B6%E9%94%99%E8%BF%87%E5%A4%8D%E5%88%A9%23) `1.1M 🔥` `+789%`
1. [交通部门增运力优服务应对返程高峰](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E9%80%9A%E9%83%A8%E9%97%A8%E5%A2%9E%E8%BF%90%E5%8A%9B%E4%BC%98%E6%9C%8D%E5%8A%A1%E5%BA%94%E5%AF%B9%E8%BF%94%E7%A8%8B%E9%AB%98%E5%B3%B0%23) `638.8K 🔥` `+546%`
1. [偷偷藏不住](https://s.weibo.com/weibo?q=%23%E5%81%B7%E5%81%B7%E8%97%8F%E4%B8%8D%E4%BD%8F%23) `335.4K 🔥` `+247%`
1. [现在才发现万人迷没戴任何首饰](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%89%8D%E5%8F%91%E7%8E%B0%E4%B8%87%E4%BA%BA%E8%BF%B7%E6%B2%A1%E6%88%B4%E4%BB%BB%E4%BD%95%E9%A6%96%E9%A5%B0%23) `277.6K 🔥` `+197%`
1. [亚运会冠军金牌已经磨花了](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%86%A0%E5%86%9B%E9%87%91%E7%89%8C%E5%B7%B2%E7%BB%8F%E7%A3%A8%E8%8A%B1%E4%BA%86%23) `276.1K 🔥` `+524%`
1. [印度高种姓博主游览中国农村](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%AB%98%E7%A7%8D%E5%A7%93%E5%8D%9A%E4%B8%BB%E6%B8%B8%E8%A7%88%E4%B8%AD%E5%9B%BD%E5%86%9C%E6%9D%91%23) `275.4K 🔥` `+522%`
1. [虞书欣粉丝朋友圈](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%B2%89%E4%B8%9D%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `265.7K 🔥` `+185%`
1. [内娱不拍霍去病太可惜](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E4%B8%8D%E6%8B%8D%E9%9C%8D%E5%8E%BB%E7%97%85%E5%A4%AA%E5%8F%AF%E6%83%9C%23) `265.1K 🔥` `+503%`
1. [曝邓紫棋结婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%82%93%E7%B4%AB%E6%A3%8B%E7%BB%93%E5%A9%9A%23) `263.4K 🔥` `+496%`
1. [山东人削皮吃发霉馒头](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%BA%BA%E5%89%8A%E7%9A%AE%E5%90%83%E5%8F%91%E9%9C%89%E9%A6%92%E5%A4%B4%23) `249.1K 🔥` `+464%`
1. [LV大秀](https://s.weibo.com/weibo?q=%23LV%E5%A4%A7%E7%A7%80%23) `236.9K 🔥` `+360%`
1. [兰香去世时没戴红绳](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%8E%BB%E4%B8%96%E6%97%B6%E6%B2%A1%E6%88%B4%E7%BA%A2%E7%BB%B3%23) `234.8K 🔥` `+106%`
1. [知否剧名原来不是宠妾灭妻](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E5%90%A6%E5%89%A7%E5%90%8D%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E5%AE%A0%E5%A6%BE%E7%81%AD%E5%A6%BB%23) `218.8K 🔥` `+396%`
1. [中国游客国庆出行让日媒很闹心](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%9B%BD%E5%BA%86%E5%87%BA%E8%A1%8C%E8%AE%A9%E6%97%A5%E5%AA%92%E5%BE%88%E9%97%B9%E5%BF%83%23) `172.7K 🔥` `+291%`
1. [父母以为结婚是这样的](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E4%BB%A5%E4%B8%BA%E7%BB%93%E5%A9%9A%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `140.6K 🔥` `+219%`
1. [向下卷才是地狱难度](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%B8%8B%E5%8D%B7%E6%89%8D%E6%98%AF%E5%9C%B0%E7%8B%B1%E9%9A%BE%E5%BA%A6%23) `126.3K 🔥` `+186%`
1. [跟异性聊天容易上头是什么毛病](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E5%BC%82%E6%80%A7%E8%81%8A%E5%A4%A9%E5%AE%B9%E6%98%93%E4%B8%8A%E5%A4%B4%E6%98%AF%E4%BB%80%E4%B9%88%E6%AF%9B%E7%97%85%23) `125.5K 🔥` `+185%`
1. [韩国人以为重庆是小城市](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E4%BB%A5%E4%B8%BA%E9%87%8D%E5%BA%86%E6%98%AF%E5%B0%8F%E5%9F%8E%E5%B8%82%23) `123.2K 🔥` `+179%`
1. [贺炜评国足不敌塔吉克斯坦](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E7%82%9C%E8%AF%84%E5%9B%BD%E8%B6%B3%E4%B8%8D%E6%95%8C%E5%A1%94%E5%90%89%E5%85%8B%E6%96%AF%E5%9D%A6%23) `108.6K 🔥` `+145%`
1. [余承东称考虑把鸿蒙推向全球市场](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0%E8%80%83%E8%99%91%E6%8A%8A%E9%B8%BF%E8%92%99%E6%8E%A8%E5%90%91%E5%85%A8%E7%90%83%E5%B8%82%E5%9C%BA%23) `106.6K 🔥` `+143%`

Updated at 2026-10-07 08:49:52

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
