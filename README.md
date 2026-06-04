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

1. [中国不存在所谓强迫劳动 (There is no so-called forced labor in China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%8D%E5%AD%98%E5%9C%A8%E6%89%80%E8%B0%93%E5%BC%BA%E8%BF%AB%E5%8A%B3%E5%8A%A8%23) `1.1M 🔥` `NEW`
1. [NBA总决赛球迷冲场](https://s.weibo.com/weibo?q=%23NBA%E6%80%BB%E5%86%B3%E8%B5%9B%E7%90%83%E8%BF%B7%E5%86%B2%E5%9C%BA%23) `818.2K 🔥` `NEW`
1. [每一次突破见证中国基建实力](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%B8%80%E6%AC%A1%E7%AA%81%E7%A0%B4%E8%A7%81%E8%AF%81%E4%B8%AD%E5%9B%BD%E5%9F%BA%E5%BB%BA%E5%AE%9E%E5%8A%9B%23) `654.2K 🔥` `NEW`
1. [平均睡眠7小时却3年出现2次脑梗](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%9D%87%E7%9D%A1%E7%9C%A07%E5%B0%8F%E6%97%B6%E5%8D%B43%E5%B9%B4%E5%87%BA%E7%8E%B02%E6%AC%A1%E8%84%91%E6%A2%97%23) `622.8K 🔥` `NEW`
1. [苹果实况你要毁了小猫](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%AE%9E%E5%86%B5%E4%BD%A0%E8%A6%81%E6%AF%81%E4%BA%86%E5%B0%8F%E7%8C%AB%23) `584.9K 🔥` `NEW`
1. [租房遇见这空调天塌了](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E6%88%BF%E9%81%87%E8%A7%81%E8%BF%99%E7%A9%BA%E8%B0%83%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `498.0K 🔥` `NEW`
1. [2188元一碗面日均卖出几十碗](https://s.weibo.com/weibo?q=%232188%E5%85%83%E4%B8%80%E7%A2%97%E9%9D%A2%E6%97%A5%E5%9D%87%E5%8D%96%E5%87%BA%E5%87%A0%E5%8D%81%E7%A2%97%23) `447.1K 🔥` `NEW`
1. [歌手第三期歌单](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%B8%89%E6%9C%9F%E6%AD%8C%E5%8D%95%23) `397.9K 🔥` `NEW`
1. [家业没破万](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E6%B2%A1%E7%A0%B4%E4%B8%87%23) `370.9K 🔥` `NEW`
1. [曝VisionPro产品线被移除](https://s.weibo.com/weibo?q=%23%E6%9B%9DVisionPro%E4%BA%A7%E5%93%81%E7%BA%BF%E8%A2%AB%E7%A7%BB%E9%99%A4%23) `366.0K 🔥` `NEW`
1. [韩栋直播哭诉没戏拍 (Han Dong cried live and complained about not being able to film)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%A0%8B%E7%9B%B4%E6%92%AD%E5%93%AD%E8%AF%89%E6%B2%A1%E6%88%8F%E6%8B%8D%23) `361.9K 🔥` `NEW`
1. [地球online穿模了](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83online%E7%A9%BF%E6%A8%A1%E4%BA%86%23) `356.6K 🔥` `NEW`
1. [当章若楠发现主持人的裙子有点短](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%8F%91%E7%8E%B0%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%9A%84%E8%A3%99%E5%AD%90%E6%9C%89%E7%82%B9%E7%9F%AD%23) `349.1K 🔥` `NEW`
1. [小英都变张元英了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E9%83%BD%E5%8F%98%E5%BC%A0%E5%85%83%E8%8B%B1%E4%BA%86%23) `342.5K 🔥` `NEW`
1. [尼克斯1比0马刺](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%85%8B%E6%96%AF1%E6%AF%940%E9%A9%AC%E5%88%BA%23) `338.5K 🔥` `NEW`
1. [日本超市货架正在失去颜色](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%B6%85%E5%B8%82%E8%B4%A7%E6%9E%B6%E6%AD%A3%E5%9C%A8%E5%A4%B1%E5%8E%BB%E9%A2%9C%E8%89%B2%23) `331.6K 🔥` `NEW`
1. [空调28度会比26度省电吗](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%8328%E5%BA%A6%E4%BC%9A%E6%AF%9426%E5%BA%A6%E7%9C%81%E7%94%B5%E5%90%97%23) `322.8K 🔥` `NEW`
1. [忆秦娥舞台坍塌砸死孩子](https://s.weibo.com/weibo?q=%23%E5%BF%86%E7%A7%A6%E5%A8%A5%E8%88%9E%E5%8F%B0%E5%9D%8D%E5%A1%8C%E7%A0%B8%E6%AD%BB%E5%AD%A9%E5%AD%90%23) `313.7K 🔥` `NEW`
1. [刘冲抢了方媛的单人间](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E6%8A%A2%E4%BA%86%E6%96%B9%E5%AA%9B%E7%9A%84%E5%8D%95%E4%BA%BA%E9%97%B4%23) `312.6K 🔥` `NEW`
1. [警方介入机器人飞踢男童事件](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E4%BB%8B%E5%85%A5%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%A3%9E%E8%B8%A2%E7%94%B7%E7%AB%A5%E4%BA%8B%E4%BB%B6%23) `312.1K 🔥` `NEW`
1. [国企干部离婚分割近亿财产当严查 (Divorce of state-owned enterprise cadres and division of nearly 100 million yuan worth of property should be strictly investigated)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E5%B9%B2%E9%83%A8%E7%A6%BB%E5%A9%9A%E5%88%86%E5%89%B2%E8%BF%91%E4%BA%BF%E8%B4%A2%E4%BA%A7%E5%BD%93%E4%B8%A5%E6%9F%A5%23) `311.8K 🔥` `NEW`
1. [奚梦瑶晒照感谢婆婆](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E6%99%92%E7%85%A7%E6%84%9F%E8%B0%A2%E5%A9%86%E5%A9%86%23) `311.4K 🔥` `NEW`
1. [乘客嫌贵大闹公交男生挺身而出](https://s.weibo.com/weibo?q=%23%E4%B9%98%E5%AE%A2%E5%AB%8C%E8%B4%B5%E5%A4%A7%E9%97%B9%E5%85%AC%E4%BA%A4%E7%94%B7%E7%94%9F%E6%8C%BA%E8%BA%AB%E8%80%8C%E5%87%BA%23) `310.3K 🔥` `NEW`
1. [iPhone18Pro八大亮点](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%85%AB%E5%A4%A7%E4%BA%AE%E7%82%B9%23) `309.8K 🔥` `NEW`
1. [法国女孩头痛多年在中国找到病因](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%A5%B3%E5%AD%A9%E5%A4%B4%E7%97%9B%E5%A4%9A%E5%B9%B4%E5%9C%A8%E4%B8%AD%E5%9B%BD%E6%89%BE%E5%88%B0%E7%97%85%E5%9B%A0%23) `309.6K 🔥` `NEW`
1. [飞机上偶遇张凌赫睡觉](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E4%B8%8A%E5%81%B6%E9%81%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9D%A1%E8%A7%89%23) `308.7K 🔥` `NEW`
1. [奚梦瑶家境](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%AE%B6%E5%A2%83%23) `308.2K 🔥` `NEW`
1. [女子买验孕笔用后仅退款还嘲讽商家](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B0%E9%AA%8C%E5%AD%95%E7%AC%94%E7%94%A8%E5%90%8E%E4%BB%85%E9%80%80%E6%AC%BE%E8%BF%98%E5%98%B2%E8%AE%BD%E5%95%86%E5%AE%B6%23) `307.9K 🔥` `NEW`
1. [杨紫吐槽横店怎么会有这么多坏马](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%90%90%E6%A7%BD%E6%A8%AA%E5%BA%97%E6%80%8E%E4%B9%88%E4%BC%9A%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E5%9D%8F%E9%A9%AC%23) `307.2K 🔥` `NEW`
1. [顾客被张雪店员教唆偷开无牌照机车](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E8%A2%AB%E5%BC%A0%E9%9B%AA%E5%BA%97%E5%91%98%E6%95%99%E5%94%86%E5%81%B7%E5%BC%80%E6%97%A0%E7%89%8C%E7%85%A7%E6%9C%BA%E8%BD%A6%23) `306.6K 🔥` `NEW`
1. [翘楚男演员 分不清 (Top male actors can’t tell the difference)](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E7%94%B7%E6%BC%94%E5%91%98%20%E5%88%86%E4%B8%8D%E6%B8%85%23) `305.9K 🔥` `NEW`
1. [杨洋曾想整鼻子](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%9B%BE%E6%83%B3%E6%95%B4%E9%BC%BB%E5%AD%90%23) `305.6K 🔥` `NEW`
1. [iPhone18ProMax实测厚度8.75mm](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E5%AE%9E%E6%B5%8B%E5%8E%9A%E5%BA%A68.75mm%23) `305.2K 🔥` `NEW`
1. [杨紫扛剧能力](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%89%9B%E5%89%A7%E8%83%BD%E5%8A%9B%23) `285.2K 🔥` `NEW`
1. [菲律宾落选安理会非常任理事国](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E8%90%BD%E9%80%89%E5%AE%89%E7%90%86%E4%BC%9A%E9%9D%9E%E5%B8%B8%E4%BB%BB%E7%90%86%E4%BA%8B%E5%9B%BD%23) `250.1K 🔥` `NEW`
1. [桃花坞](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E%23) `244.9K 🔥` `NEW`
1. [注会师跳槽甲方10个月赚6000万](https://s.weibo.com/weibo?q=%23%E6%B3%A8%E4%BC%9A%E5%B8%88%E8%B7%B3%E6%A7%BD%E7%94%B2%E6%96%B910%E4%B8%AA%E6%9C%88%E8%B5%9A6000%E4%B8%87%23) `238.8K 🔥` `NEW`
1. [翘楚单更](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E5%8D%95%E6%9B%B4%23) `233.8K 🔥` `NEW`
1. [苹果输入法你上过学没有](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%BE%93%E5%85%A5%E6%B3%95%E4%BD%A0%E4%B8%8A%E8%BF%87%E5%AD%A6%E6%B2%A1%E6%9C%89%23) `233.1K 🔥` `NEW`
1. [文班亚马说自己打得很糟糕](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E8%AF%B4%E8%87%AA%E5%B7%B1%E6%89%93%E5%BE%97%E5%BE%88%E7%B3%9F%E7%B3%95%23) `224.1K 🔥` `NEW`
1. [12岁男孩一顿半斤肉体重200斤 (A 12-year-old boy weighs 200 pounds after eating half a pound of meat)](https://s.weibo.com/weibo?q=%2312%E5%B2%81%E7%94%B7%E5%AD%A9%E4%B8%80%E9%A1%BF%E5%8D%8A%E6%96%A4%E8%82%89%E4%BD%93%E9%87%8D200%E6%96%A4%23) `220.4K 🔥` `NEW`
1. [家业 版权剧](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%20%E7%89%88%E6%9D%83%E5%89%A7%23) `200.9K 🔥` `NEW`
1. [正脸和侧脸的差别能有多大](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E8%84%B8%E5%92%8C%E4%BE%A7%E8%84%B8%E7%9A%84%E5%B7%AE%E5%88%AB%E8%83%BD%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `200.3K 🔥` `NEW`
1. [虞书欣双轨海外热度超过许我耀眼](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8F%8C%E8%BD%A8%E6%B5%B7%E5%A4%96%E7%83%AD%E5%BA%A6%E8%B6%85%E8%BF%87%E8%AE%B8%E6%88%91%E8%80%80%E7%9C%BC%23) `181.5K 🔥` `NEW`
1. [6月桃花运最旺的星座](https://s.weibo.com/weibo?q=%236%E6%9C%88%E6%A1%83%E8%8A%B1%E8%BF%90%E6%9C%80%E6%97%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `177.8K 🔥` `NEW`
1. [向太自曝房产只写了自己名字](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%87%AA%E6%9B%9D%E6%88%BF%E4%BA%A7%E5%8F%AA%E5%86%99%E4%BA%86%E8%87%AA%E5%B7%B1%E5%90%8D%E5%AD%97%23) `176.8K 🔥` `NEW`
1. [哈梅内伊父子罕见合照公开](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E7%88%B6%E5%AD%90%E7%BD%95%E8%A7%81%E5%90%88%E7%85%A7%E5%85%AC%E5%BC%80%23) `175.9K 🔥` `NEW`
1. [灵魂摆渡十年孕妇故事大反转](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%E5%8D%81%E5%B9%B4%E5%AD%95%E5%A6%87%E6%95%85%E4%BA%8B%E5%A4%A7%E5%8F%8D%E8%BD%AC%23) `175.9K 🔥` `NEW`
1. [翘楚](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%23) `176.8K 🔥`
1. [中国机器人亮相美国达人秀](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BA%AE%E7%9B%B8%E7%BE%8E%E5%9B%BD%E8%BE%BE%E4%BA%BA%E7%A7%80%23) `175.9K 🔥`

Updated at 2026-06-04 13:15:56

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
