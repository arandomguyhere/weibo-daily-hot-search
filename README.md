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

1. [巴西只有内马尔想赢 (Only Neymar wants to win in Brazil)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%8F%AA%E6%9C%89%E5%86%85%E9%A9%AC%E5%B0%94%E6%83%B3%E8%B5%A2%23) `840.6K 🔥` `NEW`
1. [灿如繁星 虞书欣单扛](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%20%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8D%95%E6%89%9B%23) `391.6K 🔥` `NEW`
1. [内马尔从巴西国家队退役](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E4%BB%8E%E5%B7%B4%E8%A5%BF%E5%9B%BD%E5%AE%B6%E9%98%9F%E9%80%80%E5%BD%B9%23) `281.9K 🔥` `NEW`
1. [特朗普发文感谢国际足联](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91%E6%96%87%E6%84%9F%E8%B0%A2%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%23) `274.2K 🔥` `NEW`
1. [关晓彤 鹿晗](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%20%E9%B9%BF%E6%99%97%23) `209.2K 🔥` `NEW`
1. [C罗确认这是最后一届世界杯](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%A1%AE%E8%AE%A4%E8%BF%99%E6%98%AF%E6%9C%80%E5%90%8E%E4%B8%80%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%23) `209.1K 🔥` `NEW`
1. [霉霉婚礼安保拉满却没防住内鬼](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E5%AE%89%E4%BF%9D%E6%8B%89%E6%BB%A1%E5%8D%B4%E6%B2%A1%E9%98%B2%E4%BD%8F%E5%86%85%E9%AC%BC%23) `208.8K 🔥` `NEW`
1. [孙怡这个腿环设计太加分了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%BF%99%E4%B8%AA%E8%85%BF%E7%8E%AF%E8%AE%BE%E8%AE%A1%E5%A4%AA%E5%8A%A0%E5%88%86%E4%BA%86%23) `208.8K 🔥` `NEW`
1. [原来泰国的身份证长这样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B3%B0%E5%9B%BD%E7%9A%84%E8%BA%AB%E4%BB%BD%E8%AF%81%E9%95%BF%E8%BF%99%E6%A0%B7%23) `208.8K 🔥` `NEW`
1. [曝时代少年团有成员去歌手帮唱](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%9C%89%E6%88%90%E5%91%98%E5%8E%BB%E6%AD%8C%E6%89%8B%E5%B8%AE%E5%94%B1%23) `208.2K 🔥` `NEW`
1. [世界杯8强出炉3席 (3 seats in the top 8 of the World Cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF8%E5%BC%BA%E5%87%BA%E7%82%893%E5%B8%AD%23) `206.7K 🔥` `NEW`
1. [哈兰德并列射手榜榜首](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%B9%B6%E5%88%97%E5%B0%84%E6%89%8B%E6%A6%9C%E6%A6%9C%E9%A6%96%23) `203.2K 🔥` `NEW`
1. [墨西哥vs英格兰](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5vs%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `202.7K 🔥` `NEW`
1. [哈兰德证明世界第一中锋](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%AF%81%E6%98%8E%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%E4%B8%AD%E9%94%8B%23) `201.8K 🔥` `NEW`
1. [安切洛蒂 巴西](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%88%87%E6%B4%9B%E8%92%82%20%E5%B7%B4%E8%A5%BF%23) `199.3K 🔥` `NEW`
1. [内马尔说尽力了](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E8%AF%B4%E5%B0%BD%E5%8A%9B%E4%BA%86%23) `196.8K 🔥` `NEW`
1. [薛之谦演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `192.7K 🔥` `NEW`
1. [李要得感谢西藏文旅](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%A6%81%E5%BE%97%E6%84%9F%E8%B0%A2%E8%A5%BF%E8%97%8F%E6%96%87%E6%97%85%23) `191.7K 🔥` `NEW`
1. [马云内部演讲谈创业真相](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BA%91%E5%86%85%E9%83%A8%E6%BC%94%E8%AE%B2%E8%B0%88%E5%88%9B%E4%B8%9A%E7%9C%9F%E7%9B%B8%23) `191.3K 🔥` `NEW`
1. [司晓迪疑似发鹿晗](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%99%93%E8%BF%AA%E7%96%91%E4%BC%BC%E5%8F%91%E9%B9%BF%E6%99%97%23) `10.2M 🔥` `+3496%`
1. [哈兰德回应淘汰巴西 (Haaland responds to knocking out Brazil)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%9B%9E%E5%BA%94%E6%B7%98%E6%B1%B0%E5%B7%B4%E8%A5%BF%23) `1.4M 🔥` `+394%`
1. [有线耳机此生从此分明了 (Wired headphones are now clear in this life)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E6%AD%A4%E7%94%9F%E4%BB%8E%E6%AD%A4%E5%88%86%E6%98%8E%E4%BA%86%23) `586.1K 🔥` `+57%`
1. [长期关系的本质是什么 (What is the nature of a long-term relationship?)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%85%B3%E7%B3%BB%E7%9A%84%E6%9C%AC%E8%B4%A8%E6%98%AF%E4%BB%80%E4%B9%88%23) `209.7K 🔥` `+296%`
1. [野狗骨头cp名 陈靖可 (Wild dog bone cp name Chen Jingke)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4cp%E5%90%8D%20%E9%99%88%E9%9D%96%E5%8F%AF%23) `196.1K 🔥` `+477%`
1. [凌晨5点的咖啡店](https://s.weibo.com/weibo?q=%23%E5%87%8C%E6%99%A85%E7%82%B9%E7%9A%84%E5%92%96%E5%95%A1%E5%BA%97%23) `194.2K 🔥` `+270%`
1. [患者控诉每天要早起等医生查房 (Patients complain that they have to get up early every day to wait for the doctor’s rounds)](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E6%8E%A7%E8%AF%89%E6%AF%8F%E5%A4%A9%E8%A6%81%E6%97%A9%E8%B5%B7%E7%AD%89%E5%8C%BB%E7%94%9F%E6%9F%A5%E6%88%BF%23) `706.4K 🔥`
1. [马思纯直言再瘦就认不出郭麒麟了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E7%9B%B4%E8%A8%80%E5%86%8D%E7%98%A6%E5%B0%B1%E8%AE%A4%E4%B8%8D%E5%87%BA%E9%83%AD%E9%BA%92%E9%BA%9F%E4%BA%86%23) `304.0K 🔥`
1. [哈兰德](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%23) `303.8K 🔥`
1. [迪丽热巴全程都很不自在](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%A8%E7%A8%8B%E9%83%BD%E5%BE%88%E4%B8%8D%E8%87%AA%E5%9C%A8%23) `287.6K 🔥`
1. [LV在中国疯狂打官司](https://s.weibo.com/weibo?q=%23LV%E5%9C%A8%E4%B8%AD%E5%9B%BD%E7%96%AF%E7%8B%82%E6%89%93%E5%AE%98%E5%8F%B8%23) `276.3K 🔥`
1. [计算机跌出本科专业月收入前十 (Computer science falls out of the top ten monthly income undergraduate majors)](https://s.weibo.com/weibo?q=%23%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%B7%8C%E5%87%BA%E6%9C%AC%E7%A7%91%E4%B8%93%E4%B8%9A%E6%9C%88%E6%94%B6%E5%85%A5%E5%89%8D%E5%8D%81%23) `229.3K 🔥`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `200.8K 🔥`
1. [日产赛道电驱体验官](https://s.weibo.com/weibo?q=%23%E6%97%A5%E4%BA%A7%E8%B5%9B%E9%81%93%E7%94%B5%E9%A9%B1%E4%BD%93%E9%AA%8C%E5%AE%98%23) `189.9K 🔥`
1. [内马尔哭了](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%93%AD%E4%BA%86%23) `2.5M 🔥` `-38%`
1. [数说中国经济6月成绩单 (Numbers say China’s economic report card for June)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%B4%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E6%E6%9C%88%E6%88%90%E7%BB%A9%E5%8D%95%23) `1.2M 🔥` `-61%`
1. [巴西1比2挪威](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF1%E6%AF%942%E6%8C%AA%E5%A8%81%23) `934.8K 🔥` `-65%`
1. [巴西VS挪威 (Brazil vs Norway)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BFVS%E6%8C%AA%E5%A8%81%23) `662.0K 🔥` `-89%`
1. [张新成演唱会翻唱率 (Zhang Xincheng's concert cover rate)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E6%88%90%E6%BC%94%E5%94%B1%E4%BC%9A%E7%BF%BB%E5%94%B1%E7%8E%87%23) `209.8K 🔥` `-28%`
1. [字节申请热门网络梗著作权](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E7%94%B3%E8%AF%B7%E7%83%AD%E9%97%A8%E7%BD%91%E7%BB%9C%E6%A2%97%E8%91%97%E4%BD%9C%E6%9D%83%23) `209.6K 🔥` `-27%`
1. [司晓迪发了好多男明星 (Si Xiaodi has posted a lot of male celebrities)](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%99%93%E8%BF%AA%E5%8F%91%E4%BA%86%E5%A5%BD%E5%A4%9A%E7%94%B7%E6%98%8E%E6%98%9F%23) `209.3K 🔥` `-23%`
1. [虞书欣蚌精仿妆 (Yu Shuxin Clam Essence Imitation Makeup)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%9A%8C%E7%B2%BE%E4%BB%BF%E5%A6%86%23) `207.2K 🔥` `-29%`
1. [未发现蒋方舟存在学术不端行为 (No academic misconduct was found by Jiang Fangzhou)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%8F%91%E7%8E%B0%E8%92%8B%E6%96%B9%E8%88%9F%E5%AD%98%E5%9C%A8%E5%AD%A6%E6%9C%AF%E4%B8%8D%E7%AB%AF%E8%A1%8C%E4%B8%BA%23) `206.1K 🔥` `-26%`
1. [迪丽热巴深V开到腰了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B7%B1V%E5%BC%80%E5%88%B0%E8%85%B0%E4%BA%86%23) `205.7K 🔥` `-21%`
1. [挪威是巴西唯一没战胜过的国家](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E6%98%AF%E5%B7%B4%E8%A5%BF%E5%94%AF%E4%B8%80%E6%B2%A1%E6%88%98%E8%83%9C%E8%BF%87%E7%9A%84%E5%9B%BD%E5%AE%B6%23) `205.4K 🔥` `-24%`
1. [巴西点球不进](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E7%82%B9%E7%90%83%E4%B8%8D%E8%BF%9B%23) `204.4K 🔥` `-28%`
1. [内马尔 (Neymar)](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%23) `200.7K 🔥` `-28%`
1. [哈兰德天神下凡](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%A9%E7%A5%9E%E4%B8%8B%E5%87%A1%23) `198.6K 🔥` `-26%`
1. [哈兰德梅开二度](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `198.0K 🔥` `-29%`
1. [林一在下此生分明了 (Lin Yi's life is clear)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E5%9C%A8%E4%B8%8B%E6%AD%A4%E7%94%9F%E5%88%86%E6%98%8E%E4%BA%86%23) `195.4K 🔥` `-26%`
1. [特朗普将自己头像加在林肯旁边](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%86%E8%87%AA%E5%B7%B1%E5%A4%B4%E5%83%8F%E5%8A%A0%E5%9C%A8%E6%9E%97%E8%82%AF%E6%97%81%E8%BE%B9%23) `193.3K 🔥` `-30%`

Updated at 2026-07-06 09:27:29

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
