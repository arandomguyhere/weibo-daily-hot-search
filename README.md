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

1. [圣罗兰中国形象大使陈哲远 (Saint Laurent China Ambassador Chen Zheyuan)](https://s.weibo.com/weibo?q=%23%E5%9C%A3%E7%BD%97%E5%85%B0%E4%B8%AD%E5%9B%BD%E5%BD%A2%E8%B1%A1%E5%A4%A7%E4%BD%BF%E9%99%88%E5%93%B2%E8%BF%9C%23) `122.9K 🔥` `NEW`
1. [西班牙夺冠游行](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%BA%E5%86%A0%E6%B8%B8%E8%A1%8C%23) `122.8K 🔥` `NEW`
1. [灿如繁星女主结局是做自己](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E5%A5%B3%E4%B8%BB%E7%BB%93%E5%B1%80%E6%98%AF%E5%81%9A%E8%87%AA%E5%B7%B1%23) `122.7K 🔥` `NEW`
1. [过度依赖另一半会失去自我吗](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E4%BE%9D%E8%B5%96%E5%8F%A6%E4%B8%80%E5%8D%8A%E4%BC%9A%E5%A4%B1%E5%8E%BB%E8%87%AA%E6%88%91%E5%90%97%23) `122.4K 🔥` `NEW`
1. [文旅厅回应王力宏演唱会观众喊退票](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%97%85%E5%8E%85%E5%9B%9E%E5%BA%94%E7%8E%8B%E5%8A%9B%E5%AE%8F%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A7%82%E4%BC%97%E5%96%8A%E9%80%80%E7%A5%A8%23) `122.3K 🔥` `NEW`
1. [王楚然说最喜欢张凌赫旗袍抱造型](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%AF%B4%E6%9C%80%E5%96%9C%E6%AC%A2%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%97%97%E8%A2%8D%E6%8A%B1%E9%80%A0%E5%9E%8B%23) `122.3K 🔥` `NEW`
1. [人一旦染上减肥才知道有多爽](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E6%9F%93%E4%B8%8A%E5%87%8F%E8%82%A5%E6%89%8D%E7%9F%A5%E9%81%93%E6%9C%89%E5%A4%9A%E7%88%BD%23) `122.0K 🔥` `NEW`
1. [建议大家越没钱越要对钱有概念](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%B6%8A%E6%B2%A1%E9%92%B1%E8%B6%8A%E8%A6%81%E5%AF%B9%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `121.6K 🔥` `NEW`
1. [流浪猫 公共猫](https://s.weibo.com/weibo?q=%23%E6%B5%81%E6%B5%AA%E7%8C%AB%20%E5%85%AC%E5%85%B1%E7%8C%AB%23) `121.6K 🔥` `NEW`
1. [人一旦找到热爱](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E6%89%BE%E5%88%B0%E7%83%AD%E7%88%B1%23) `121.4K 🔥` `NEW`
1. [蔡依林演唱会过半了天还没黑 (It’s half way through Jolin Tsai’s concert and it’s not dark yet)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E6%BC%94%E5%94%B1%E4%BC%9A%E8%BF%87%E5%8D%8A%E4%BA%86%E5%A4%A9%E8%BF%98%E6%B2%A1%E9%BB%91%23) `121.2K 🔥` `NEW`
1. [怕橘猫太孤单于是捡了一只奶牛猫回家](https://s.weibo.com/weibo?q=%23%E6%80%95%E6%A9%98%E7%8C%AB%E5%A4%AA%E5%AD%A4%E5%8D%95%E4%BA%8E%E6%98%AF%E6%8D%A1%E4%BA%86%E4%B8%80%E5%8F%AA%E5%A5%B6%E7%89%9B%E7%8C%AB%E5%9B%9E%E5%AE%B6%23) `121.1K 🔥` `NEW`
1. [被王楚然演的任素素吓到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%BC%94%E7%9A%84%E4%BB%BB%E7%B4%A0%E7%B4%A0%E5%90%93%E5%88%B0%E4%BA%86%23) `120.9K 🔥` `NEW`
1. [突然发现很多人不会用AI](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9A%E4%BA%BA%E4%B8%8D%E4%BC%9A%E7%94%A8AI%23) `120.8K 🔥` `NEW`
1. [所有的事情想一件就做一件](https://s.weibo.com/weibo?q=%23%E6%89%80%E6%9C%89%E7%9A%84%E4%BA%8B%E6%83%85%E6%83%B3%E4%B8%80%E4%BB%B6%E5%B0%B1%E5%81%9A%E4%B8%80%E4%BB%B6%23) `120.8K 🔥` `NEW`
1. [2026KPL夏季赛](https://s.weibo.com/weibo?q=%232026KPL%E5%A4%8F%E5%AD%A3%E8%B5%9B%23) `120.7K 🔥` `NEW`
1. [日本女主播户外直播时遭粉丝刺杀](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E4%B8%BB%E6%92%AD%E6%88%B7%E5%A4%96%E7%9B%B4%E6%92%AD%E6%97%B6%E9%81%AD%E7%B2%89%E4%B8%9D%E5%88%BA%E6%9D%80%23) `120.6K 🔥` `NEW`
1. [胡塞武装宣布海上封锁沙特](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%A1%9E%E6%AD%A6%E8%A3%85%E5%AE%A3%E5%B8%83%E6%B5%B7%E4%B8%8A%E5%B0%81%E9%94%81%E6%B2%99%E7%89%B9%23) `120.5K 🔥` `NEW`
1. [妹妹在日薪差距2元的工作中纠结](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E5%9C%A8%E6%97%A5%E8%96%AA%E5%B7%AE%E8%B7%9D2%E5%85%83%E7%9A%84%E5%B7%A5%E4%BD%9C%E4%B8%AD%E7%BA%A0%E7%BB%93%23) `120.4K 🔥` `NEW`
1. [王俊凯唱功](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%94%B1%E5%8A%9F%23) `120.3K 🔥` `NEW`
1. [菲方围顶冲撞中方巡逻艇 (Philippine side collides with Chinese patrol boat)](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%96%B9%E5%9B%B4%E9%A1%B6%E5%86%B2%E6%92%9E%E4%B8%AD%E6%96%B9%E5%B7%A1%E9%80%BB%E8%89%87%23) `120.2K 🔥` `NEW`
1. [小狗做雾化时不理解但很配合](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%81%9A%E9%9B%BE%E5%8C%96%E6%97%B6%E4%B8%8D%E7%90%86%E8%A7%A3%E4%BD%86%E5%BE%88%E9%85%8D%E5%90%88%23) `120.2K 🔥` `NEW`
1. [泼硫酸男子被执死刑受害人发声 (Man who threw acid was executed, victim speaks out)](https://s.weibo.com/weibo?q=%23%E6%B3%BC%E7%A1%AB%E9%85%B8%E7%94%B7%E5%AD%90%E8%A2%AB%E6%89%A7%E6%AD%BB%E5%88%91%E5%8F%97%E5%AE%B3%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `122.0K 🔥` `+24%`
1. [文科生迎来了编程时代](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%A7%91%E7%94%9F%E8%BF%8E%E6%9D%A5%E4%BA%86%E7%BC%96%E7%A8%8B%E6%97%B6%E4%BB%A3%23) `122.9K 🔥`
1. [Bin BLG](https://s.weibo.com/weibo?q=%23Bin%20BLG%23) `122.1K 🔥`
1. [太原南站重启豪华吸烟室引争议](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E5%8D%97%E7%AB%99%E9%87%8D%E5%90%AF%E8%B1%AA%E5%8D%8E%E5%90%B8%E7%83%9F%E5%AE%A4%E5%BC%95%E4%BA%89%E8%AE%AE%23) `121.4K 🔥`
1. [王玉雯别说了刘宇宁害羞了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%88%AB%E8%AF%B4%E4%BA%86%E5%88%98%E5%AE%87%E5%AE%81%E5%AE%B3%E7%BE%9E%E4%BA%86%23) `121.3K 🔥`
1. [张凌赫发三年前的慕容清峄](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%91%E4%B8%89%E5%B9%B4%E5%89%8D%E7%9A%84%E6%85%95%E5%AE%B9%E6%B8%85%E5%B3%84%23) `121.3K 🔥`
1. [乒超名单](https://s.weibo.com/weibo?q=%23%E4%B9%92%E8%B6%85%E5%90%8D%E5%8D%95%23) `121.1K 🔥`
1. [南宁震感](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%AE%81%E9%9C%87%E6%84%9F%23) `121.0K 🔥`
1. [月薪过万是什么感觉](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA%E8%BF%87%E4%B8%87%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%9F%E8%A7%89%23) `120.9K 🔥`
1. [情侣采10斤菌子被本地小孩扔到2斤 (Couple picked 10 kilograms of mushrooms but local kids threw 2 kilograms away)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E9%87%8710%E6%96%A4%E8%8F%8C%E5%AD%90%E8%A2%AB%E6%9C%AC%E5%9C%B0%E5%B0%8F%E5%AD%A9%E6%89%94%E5%88%B02%E6%96%A4%23) `120.6K 🔥`
1. [西班牙队已回国](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%9F%E5%B7%B2%E5%9B%9E%E5%9B%BD%23) `120.4K 🔥`
1. [Zara阔腿裤存安全隐患](https://s.weibo.com/weibo?q=%23Zara%E9%98%94%E8%85%BF%E8%A3%A4%E5%AD%98%E5%AE%89%E5%85%A8%E9%9A%90%E6%82%A3%23) `297.0K 🔥` `-57%`
1. [小时候吃的很多水果都慢慢消失了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E5%90%83%E7%9A%84%E5%BE%88%E5%A4%9A%E6%B0%B4%E6%9E%9C%E9%83%BD%E6%85%A2%E6%85%A2%E6%B6%88%E5%A4%B1%E4%BA%86%23) `268.9K 🔥` `-44%`
1. [E法同行法润塞上](https://s.weibo.com/weibo?q=%23E%E6%B3%95%E5%90%8C%E8%A1%8C%E6%B3%95%E6%B6%A6%E5%A1%9E%E4%B8%8A%23) `188.8K 🔥` `-63%`
1. [张雪机车联合蚂蚁保共同守护热爱](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%81%94%E5%90%88%E8%9A%82%E8%9A%81%E4%BF%9D%E5%85%B1%E5%90%8C%E5%AE%88%E6%8A%A4%E7%83%AD%E7%88%B1%23) `181.3K 🔥` `-65%`
1. [孩子打暑假工把家里干破产](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E6%89%93%E6%9A%91%E5%81%87%E5%B7%A5%E6%8A%8A%E5%AE%B6%E9%87%8C%E5%B9%B2%E7%A0%B4%E4%BA%A7%23) `141.6K 🔥` `-62%`
1. [清华姚班 全球AI半壁江山](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A7%9A%E7%8F%AD%20%E5%85%A8%E7%90%83AI%E5%8D%8A%E5%A3%81%E6%B1%9F%E5%B1%B1%23) `123.0K 🔥` `-70%`
1. [柳柳 周佑凌 (Liu Liu Zhou Youling)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3%20%E5%91%A8%E4%BD%91%E5%87%8C%23) `122.9K 🔥` `-54%`
1. [驾照考得早的好处还在提升](https://s.weibo.com/weibo?q=%23%E9%A9%BE%E7%85%A7%E8%80%83%E5%BE%97%E6%97%A9%E7%9A%84%E5%A5%BD%E5%A4%84%E8%BF%98%E5%9C%A8%E6%8F%90%E5%8D%87%23) `122.7K 🔥` `-53%`
1. [白鹿奔跑吧下一季投票第一](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%94%E8%B7%91%E5%90%A7%E4%B8%8B%E4%B8%80%E5%AD%A3%E6%8A%95%E7%A5%A8%E7%AC%AC%E4%B8%80%23) `122.6K 🔥` `-42%`
1. [谢贤去世 (Xie Xian passed away)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%8E%BB%E4%B8%96%23) `122.5K 🔥` `-39%`
1. [这一秒过火辱追](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%BE%B1%E8%BF%BD%23) `122.5K 🔥` `-30%`
1. [最古老的降温方式 (The oldest way to cool down)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%8F%A4%E8%80%81%E7%9A%84%E9%99%8D%E6%B8%A9%E6%96%B9%E5%BC%8F%23) `122.4K 🔥` `-39%`
1. [复联5新预告](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E8%81%945%E6%96%B0%E9%A2%84%E5%91%8A%23) `122.2K 🔥` `-39%`
1. [张家界会惩罚每一个不听劝的人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E7%95%8C%E4%BC%9A%E6%83%A9%E7%BD%9A%E6%AF%8F%E4%B8%80%E4%B8%AA%E4%B8%8D%E5%90%AC%E5%8A%9D%E7%9A%84%E4%BA%BA%23) `121.9K 🔥` `-39%`
1. [建议普通人都尽早用上AI](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%99%AE%E9%80%9A%E4%BA%BA%E9%83%BD%E5%B0%BD%E6%97%A9%E7%94%A8%E4%B8%8AAI%23) `121.9K 🔥` `-39%`
1. [爱穿洞洞鞋的广东人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9A%84%E5%B9%BF%E4%B8%9C%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `121.8K 🔥` `-27%`
1. [菲方人员用划桨长棍攻击我海警](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%96%B9%E4%BA%BA%E5%91%98%E7%94%A8%E5%88%92%E6%A1%A8%E9%95%BF%E6%A3%8D%E6%94%BB%E5%87%BB%E6%88%91%E6%B5%B7%E8%AD%A6%23) `121.7K 🔥` `-39%`
1. [崇左地震](https://s.weibo.com/weibo?q=%23%E5%B4%87%E5%B7%A6%E5%9C%B0%E9%9C%87%23) `121.7K 🔥` `-63%`
1. [王曼昱 乒超](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%20%E4%B9%92%E8%B6%85%23) `121.5K 🔥` `-45%`

Updated at 2026-07-21 02:34:03

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
