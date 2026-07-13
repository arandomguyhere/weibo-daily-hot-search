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

1. [蒋方舟道歉 (Jiang Fangzhou apologizes)](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%96%B9%E8%88%9F%E9%81%93%E6%AD%89%23) `10.9M 🔥` `NEW`
1. [人大撤销蒋方舟硕士学位](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E6%92%A4%E9%94%80%E8%92%8B%E6%96%B9%E8%88%9F%E7%A1%95%E5%A3%AB%E5%AD%A6%E4%BD%8D%23) `4.4M 🔥` `NEW`
1. [这份防汛安全指南快收好](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BB%BD%E9%98%B2%E6%B1%9B%E5%AE%89%E5%85%A8%E6%8C%87%E5%8D%97%E5%BF%AB%E6%94%B6%E5%A5%BD%23) `1.7M 🔥` `NEW`
1. [曝张雅琪五次法考没过](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E9%9B%85%E7%90%AA%E4%BA%94%E6%AC%A1%E6%B3%95%E8%80%83%E6%B2%A1%E8%BF%87%23) `1.6M 🔥` `NEW`
1. [辽宁抗洪](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%8A%97%E6%B4%AA%23) `1.4M 🔥` `NEW`
1. [蒋方舟 天才少女人设](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%96%B9%E8%88%9F%20%E5%A4%A9%E6%89%8D%E5%B0%91%E5%A5%B3%E4%BA%BA%E8%AE%BE%23) `1.3M 🔥` `NEW`
1. [艾米看热巴的眼神不对劲](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E7%9C%8B%E7%83%AD%E5%B7%B4%E7%9A%84%E7%9C%BC%E7%A5%9E%E4%B8%8D%E5%AF%B9%E5%8A%B2%23) `770.0K 🔥` `NEW`
1. [孙亚龙力挺Bin](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BA%9A%E9%BE%99%E5%8A%9B%E6%8C%BABin%23) `327.6K 🔥` `NEW`
1. [蒋方舟事件大反转](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%96%B9%E8%88%9F%E4%BA%8B%E4%BB%B6%E5%A4%A7%E5%8F%8D%E8%BD%AC%23) `312.1K 🔥` `NEW`
1. [肖鹰 蒋方舟](https://s.weibo.com/weibo?q=%23%E8%82%96%E9%B9%B0%20%E8%92%8B%E6%96%B9%E8%88%9F%23) `297.8K 🔥` `NEW`
1. [18岁的金莎vs18岁的艾米 (18-year-old Jinsha vs. 18-year-old Amy)](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E7%9A%84%E9%87%91%E8%8E%8Evs18%E5%B2%81%E7%9A%84%E8%89%BE%E7%B1%B3%23) `290.5K 🔥` `NEW`
1. [美人鱼2](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E9%B1%BC2%23) `282.3K 🔥` `NEW`
1. [发现妈妈变老是从东西无法共用开始](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A6%88%E5%A6%88%E5%8F%98%E8%80%81%E6%98%AF%E4%BB%8E%E4%B8%9C%E8%A5%BF%E6%97%A0%E6%B3%95%E5%85%B1%E7%94%A8%E5%BC%80%E5%A7%8B%23) `274.2K 🔥` `NEW`
1. [人大据新线索认定蒋方舟学术不端](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E6%8D%AE%E6%96%B0%E7%BA%BF%E7%B4%A2%E8%AE%A4%E5%AE%9A%E8%92%8B%E6%96%B9%E8%88%9F%E5%AD%A6%E6%9C%AF%E4%B8%8D%E7%AB%AF%23) `268.2K 🔥` `NEW`
1. [情侣接吻打翻火锅烫伤女孩最新进展](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E6%8E%A5%E5%90%BB%E6%89%93%E7%BF%BB%E7%81%AB%E9%94%85%E7%83%AB%E4%BC%A4%E5%A5%B3%E5%AD%A9%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `267.6K 🔥` `NEW`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `266.4K 🔥` `NEW`
1. [白鹿发型师方可审美](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%91%E5%9E%8B%E5%B8%88%E6%96%B9%E5%8F%AF%E5%AE%A1%E7%BE%8E%23) `265.4K 🔥` `NEW`
1. [突然明白了独居的意义](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E4%BA%86%E7%8B%AC%E5%B1%85%E7%9A%84%E6%84%8F%E4%B9%89%23) `264.4K 🔥` `NEW`
1. [尚界汽车已启动法律维权](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8C%E6%B1%BD%E8%BD%A6%E5%B7%B2%E5%90%AF%E5%8A%A8%E6%B3%95%E5%BE%8B%E7%BB%B4%E6%9D%83%23) `260.8K 🔥` `NEW`
1. [小鱼海棠撞脸小英](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B1%BC%E6%B5%B7%E6%A3%A0%E6%92%9E%E8%84%B8%E5%B0%8F%E8%8B%B1%23) `259.6K 🔥` `NEW`
1. [李小冉和老公结婚十年没孩子 (Li Xiaoran and her husband have been married for ten years and have no children.)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%92%8C%E8%80%81%E5%85%AC%E7%BB%93%E5%A9%9A%E5%8D%81%E5%B9%B4%E6%B2%A1%E5%AD%A9%E5%AD%90%23) `258.6K 🔥` `NEW`
1. [蒋方舟硕士论文9处与某期刊论文重合](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%96%B9%E8%88%9F%E7%A1%95%E5%A3%AB%E8%AE%BA%E6%96%879%E5%A4%84%E4%B8%8E%E6%9F%90%E6%9C%9F%E5%88%8A%E8%AE%BA%E6%96%87%E9%87%8D%E5%90%88%23) `257.6K 🔥` `NEW`
1. [功夫女足票房破6亿](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E7%A0%B46%E4%BA%BF%23) `252.4K 🔥` `NEW`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `250.2K 🔥` `NEW`
1. [无畏晒出粉丝的拼豆作品](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E6%99%92%E5%87%BA%E7%B2%89%E4%B8%9D%E7%9A%84%E6%8B%BC%E8%B1%86%E4%BD%9C%E5%93%81%23) `245.6K 🔥` `NEW`
1. [以为长胖但能减肥的饮食习惯](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E9%95%BF%E8%83%96%E4%BD%86%E8%83%BD%E5%87%8F%E8%82%A5%E7%9A%84%E9%A5%AE%E9%A3%9F%E4%B9%A0%E6%83%AF%23) `226.4K 🔥` `NEW`
1. [格雷厄姆曾称对伊开战美国大赚特赚](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E9%9B%B7%E5%8E%84%E5%A7%86%E6%9B%BE%E7%A7%B0%E5%AF%B9%E4%BC%8A%E5%BC%80%E6%88%98%E7%BE%8E%E5%9B%BD%E5%A4%A7%E8%B5%9A%E7%89%B9%E8%B5%9A%23) `219.9K 🔥` `NEW`
1. [央视网文娱评功夫女足](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E6%96%87%E5%A8%B1%E8%AF%84%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `219.4K 🔥` `NEW`
1. [当咪进房间发现我们开了空调](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%92%AA%E8%BF%9B%E6%88%BF%E9%97%B4%E5%8F%91%E7%8E%B0%E6%88%91%E4%BB%AC%E5%BC%80%E4%BA%86%E7%A9%BA%E8%B0%83%23) `179.9K 🔥` `NEW`
1. [灿如繁星A级](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9FA%E7%BA%A7%23) `175.0K 🔥` `NEW`
1. [水油焖菜简直是减脂人福音 (Stewed vegetables in water and oil is simply good news for those who want to lose fat.)](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%B2%B9%E7%84%96%E8%8F%9C%E7%AE%80%E7%9B%B4%E6%98%AF%E5%87%8F%E8%84%82%E4%BA%BA%E7%A6%8F%E9%9F%B3%23) `159.4K 🔥` `NEW`
1. [桃花潭涨水李白汪伦半身入水](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E6%BD%AD%E6%B6%A8%E6%B0%B4%E6%9D%8E%E7%99%BD%E6%B1%AA%E4%BC%A6%E5%8D%8A%E8%BA%AB%E5%85%A5%E6%B0%B4%23) `157.3K 🔥` `NEW`
1. [仅一家车企达成年度销量50%目标](https://s.weibo.com/weibo?q=%23%E4%BB%85%E4%B8%80%E5%AE%B6%E8%BD%A6%E4%BC%81%E8%BE%BE%E6%88%90%E5%B9%B4%E5%BA%A6%E9%94%80%E9%87%8F50%25%E7%9B%AE%E6%A0%87%23) `153.0K 🔥` `NEW`
1. [原来已读不回的人是这样想的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B7%B2%E8%AF%BB%E4%B8%8D%E5%9B%9E%E7%9A%84%E4%BA%BA%E6%98%AF%E8%BF%99%E6%A0%B7%E6%83%B3%E7%9A%84%23) `779.1K 🔥` `+96%`
1. [说一个减肥的冷知识](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E4%B8%80%E4%B8%AA%E5%87%8F%E8%82%A5%E7%9A%84%E5%86%B7%E7%9F%A5%E8%AF%86%23) `378.3K 🔥`
1. [郭敬明让艾米记得减肥](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E8%AE%A9%E8%89%BE%E7%B1%B3%E8%AE%B0%E5%BE%97%E5%87%8F%E8%82%A5%23) `326.7K 🔥`
1. [中餐厅 张雅琪](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%20%E5%BC%A0%E9%9B%85%E7%90%AA%23) `319.7K 🔥`
1. [A股存储一哥回应跌停](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%AD%98%E5%82%A8%E4%B8%80%E5%93%A5%E5%9B%9E%E5%BA%94%E8%B7%8C%E5%81%9C%23) `272.5K 🔥`
1. [宋慧乔 越素越美](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%20%E8%B6%8A%E7%B4%A0%E8%B6%8A%E7%BE%8E%23) `271.3K 🔥`
1. [我们为什么要背木兰的购买记录](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E8%83%8C%E6%9C%A8%E5%85%B0%E7%9A%84%E8%B4%AD%E4%B9%B0%E8%AE%B0%E5%BD%95%23) `269.4K 🔥`
1. [长鑫近2万员工每人可分超百万 (Changxin’s nearly 20,000 employees can each receive a share of over one million)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E8%BF%912%E4%B8%87%E5%91%98%E5%B7%A5%E6%AF%8F%E4%BA%BA%E5%8F%AF%E5%88%86%E8%B6%85%E7%99%BE%E4%B8%87%23) `261.2K 🔥`
1. [迪丽热巴杨洋迎来了最适配的bgm](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9D%A8%E6%B4%8B%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E9%80%82%E9%85%8D%E7%9A%84bgm%23) `240.1K 🔥`
1. [长期大量阅读的好处](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%A4%A7%E9%87%8F%E9%98%85%E8%AF%BB%E7%9A%84%E5%A5%BD%E5%A4%84%23) `303.0K 🔥` `-22%`
1. [中国首个禁售燃油车省份确认 (China's first province to ban sales of fuel vehicles confirmed)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A6%96%E4%B8%AA%E7%A6%81%E5%94%AE%E7%87%83%E6%B2%B9%E8%BD%A6%E7%9C%81%E4%BB%BD%E7%A1%AE%E8%AE%A4%23) `272.7K 🔥` `-75%`
1. [网传TF家族运动会分组](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%88%86%E7%BB%84%23) `263.0K 🔥` `-32%`
1. [佛得角门将涨粉断层第一 (Cape Verde goalkeeper ranks first in popularity)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E6%B6%A8%E7%B2%89%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%23) `254.2K 🔥` `-67%`
1. [曝李小冉徐佳宁离婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%B0%8F%E5%86%89%E5%BE%90%E4%BD%B3%E5%AE%81%E7%A6%BB%E5%A9%9A%23) `242.2K 🔥` `-24%`
1. [中餐厅 蛋糕](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%20%E8%9B%8B%E7%B3%95%23) `223.0K 🔥` `-32%`
1. [张婧仪张凌赫兰蔻升Title](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%85%B0%E8%94%BB%E5%8D%87Title%23) `215.2K 🔥` `-39%`
1. [iPhone20再曝光](https://s.weibo.com/weibo?q=%23iPhone20%E5%86%8D%E6%9B%9D%E5%85%89%23) `156.9K 🔥` `-51%`

Updated at 2026-07-13 21:30:07

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
