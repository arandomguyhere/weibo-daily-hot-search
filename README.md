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

1. [白日提灯云包场 (Lantern rental during the day)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E4%BA%91%E5%8C%85%E5%9C%BA%23) `1.1M 🔥` `NEW`
1. [新生儿和产妇先后离世家属发声](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%94%9F%E5%84%BF%E5%92%8C%E4%BA%A7%E5%A6%87%E5%85%88%E5%90%8E%E7%A6%BB%E4%B8%96%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `755.5K 🔥` `NEW`
1. [男子因孕妻产检遇男医生崩溃撞墙](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E5%AD%95%E5%A6%BB%E4%BA%A7%E6%A3%80%E9%81%87%E7%94%B7%E5%8C%BB%E7%94%9F%E5%B4%A9%E6%BA%83%E6%92%9E%E5%A2%99%23) `379.9K 🔥` `NEW`
1. [TTG战胜Hero](https://s.weibo.com/weibo?q=%23TTG%E6%88%98%E8%83%9CHero%23) `254.1K 🔥` `NEW`
1. [曝关晓彤喜提新车](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%85%B3%E6%99%93%E5%BD%A4%E5%96%9C%E6%8F%90%E6%96%B0%E8%BD%A6%23) `253.8K 🔥` `NEW`
1. [广东男篮vs北京男篮](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%94%B7%E7%AF%AEvs%E5%8C%97%E4%BA%AC%E7%94%B7%E7%AF%AE%23) `252.8K 🔥` `NEW`
1. [锤娜丽莎瘦30斤公开减肥原因](https://s.weibo.com/weibo?q=%23%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E7%98%A630%E6%96%A4%E5%85%AC%E5%BC%80%E5%87%8F%E8%82%A5%E5%8E%9F%E5%9B%A0%23) `252.6K 🔥` `NEW`
1. [黄子韬因为减肥后脑勺秃了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9B%A0%E4%B8%BA%E5%87%8F%E8%82%A5%E5%90%8E%E8%84%91%E5%8B%BA%E7%A7%83%E4%BA%86%23) `252.1K 🔥` `NEW`
1. [严浩翔方回应KTV传闻](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B9%E5%9B%9E%E5%BA%94KTV%E4%BC%A0%E9%97%BB%23) `251.6K 🔥` `NEW`
1. [全国超20座铁路站点长期闲置](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E8%B6%8520%E5%BA%A7%E9%93%81%E8%B7%AF%E7%AB%99%E7%82%B9%E9%95%BF%E6%9C%9F%E9%97%B2%E7%BD%AE%23) `231.0K 🔥` `NEW`
1. [伊朗一天向以色列发射10轮导弹 (Iran launches 10 rounds of missiles at Israel in one day)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%A4%A9%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%E5%8F%91%E5%B0%8410%E8%BD%AE%E5%AF%BC%E5%BC%B9%23) `206.7K 🔥` `NEW`
1. [娇儿恶卧踏里裂](https://s.weibo.com/weibo?q=%23%E5%A8%87%E5%84%BF%E6%81%B6%E5%8D%A7%E8%B8%8F%E9%87%8C%E8%A3%82%23) `205.7K 🔥` `NEW`
1. [岳云鹏室内抽烟](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E4%BA%91%E9%B9%8F%E5%AE%A4%E5%86%85%E6%8A%BD%E7%83%9F%23) `199.1K 🔥` `NEW`
1. [左奇函 脸色](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%20%E8%84%B8%E8%89%B2%23) `169.6K 🔥` `NEW`
1. [Hero对战TTG](https://s.weibo.com/weibo?q=%23Hero%E5%AF%B9%E6%88%98TTG%23) `158.4K 🔥` `NEW`
1. [丁程鑫蛙泳](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%9B%99%E6%B3%B3%23) `156.2K 🔥` `NEW`
1. [阚清子问我这么胖吗](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E9%97%AE%E6%88%91%E8%BF%99%E4%B9%88%E8%83%96%E5%90%97%23) `155.3K 🔥` `NEW`
1. [AG单局12淘汰吃鸡](https://s.weibo.com/weibo?q=%23AG%E5%8D%95%E5%B1%8012%E6%B7%98%E6%B1%B0%E5%90%83%E9%B8%A1%23) `154.8K 🔥` `NEW`
1. [孙俪新剧](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%96%B0%E5%89%A7%23) `154.4K 🔥` `NEW`
1. [杨幂直播](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%9B%B4%E6%92%AD%23) `137.7K 🔥` `NEW`
1. [TTG晋级季后赛八强 (TTG advances to the quarterfinals of the playoffs)](https://s.weibo.com/weibo?q=%23TTG%E6%99%8B%E7%BA%A7%E5%AD%A3%E5%90%8E%E8%B5%9B%E5%85%AB%E5%BC%BA%23) `134.5K 🔥` `NEW`
1. [吃这几种食物对眼睛有好处](https://s.weibo.com/weibo?q=%23%E5%90%83%E8%BF%99%E5%87%A0%E7%A7%8D%E9%A3%9F%E7%89%A9%E5%AF%B9%E7%9C%BC%E7%9D%9B%E6%9C%89%E5%A5%BD%E5%A4%84%23) `108.7K 🔥` `NEW`
1. [逐玉吻戏喊cut后两人都很忙](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%90%BB%E6%88%8F%E5%96%8Acut%E5%90%8E%E4%B8%A4%E4%BA%BA%E9%83%BD%E5%BE%88%E5%BF%99%23) `108.3K 🔥` `NEW`
1. [明年所有的00后都将成年](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%B9%B4%E6%89%80%E6%9C%89%E7%9A%8400%E5%90%8E%E9%83%BD%E5%B0%86%E6%88%90%E5%B9%B4%23) `103.9K 🔥` `NEW`
1. [丁程鑫张真源合照](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%90%88%E7%85%A7%23) `99.8K 🔥` `NEW`
1. [原神前瞻](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%E5%89%8D%E7%9E%BB%23) `98.8K 🔥` `NEW`
1. [填补了国内厨师未能发表sci的空白](https://s.weibo.com/weibo?q=%23%E5%A1%AB%E8%A1%A5%E4%BA%86%E5%9B%BD%E5%86%85%E5%8E%A8%E5%B8%88%E6%9C%AA%E8%83%BD%E5%8F%91%E8%A1%A8sci%E7%9A%84%E7%A9%BA%E7%99%BD%23) `96.4K 🔥` `NEW`
1. [张艺凡又怎么了我的大小姐](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%87%A1%E5%8F%88%E6%80%8E%E4%B9%88%E4%BA%86%E6%88%91%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%A7%90%23) `88.4K 🔥` `NEW`
1. [今年蚊子可能迎来史诗级加强](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E8%9A%8A%E5%AD%90%E5%8F%AF%E8%83%BD%E8%BF%8E%E6%9D%A5%E5%8F%B2%E8%AF%97%E7%BA%A7%E5%8A%A0%E5%BC%BA%23) `373.0K 🔥` `+71%`
1. [大学生表白被拒后怒砸食堂咖啡店](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%A1%A8%E7%99%BD%E8%A2%AB%E6%8B%92%E5%90%8E%E6%80%92%E7%A0%B8%E9%A3%9F%E5%A0%82%E5%92%96%E5%95%A1%E5%BA%97%23) `253.2K 🔥` `+179%`
1. [西班牙25岁女孩被性侵多次后申请安乐死 (Spanish girl, 25, applies for euthanasia after being sexually assaulted multiple times)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%9925%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%A2%AB%E6%80%A7%E4%BE%B5%E5%A4%9A%E6%AC%A1%E5%90%8E%E7%94%B3%E8%AF%B7%E5%AE%89%E4%B9%90%E6%AD%BB%23) `229.6K 🔥` `+52%`
1. [2026中国网络媒体论坛 (2026 China Online Media Forum)](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AA%92%E4%BD%93%E8%AE%BA%E5%9D%9B%23) `583.6K 🔥`
1. [伊朗革命卫队称霍尔木兹海峡关闭](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E7%A7%B0%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%85%B3%E9%97%AD%23) `455.9K 🔥`
1. [女子手指截肢放肚里养1个月变小肉球](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%8B%E6%8C%87%E6%88%AA%E8%82%A2%E6%94%BE%E8%82%9A%E9%87%8C%E5%85%BB1%E4%B8%AA%E6%9C%88%E5%8F%98%E5%B0%8F%E8%82%89%E7%90%83%23) `227.6K 🔥`
1. [奉劝大家还是尽量多存钱](https://s.weibo.com/weibo?q=%23%E5%A5%89%E5%8A%9D%E5%A4%A7%E5%AE%B6%E8%BF%98%E6%98%AF%E5%B0%BD%E9%87%8F%E5%A4%9A%E5%AD%98%E9%92%B1%23) `169.8K 🔥`
1. [张杰鸟巢演唱会 (Zhang Jie Bird's Nest Concert)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A%23) `98.8K 🔥`
1. [大部分人觉得旅游累的原因](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%83%A8%E5%88%86%E4%BA%BA%E8%A7%89%E5%BE%97%E6%97%85%E6%B8%B8%E7%B4%AF%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `254.8K 🔥` `-30%`
1. [逐玉 庆功宴](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `254.8K 🔥` `-30%`
1. [职称评审将迎重大调整](https://s.weibo.com/weibo?q=%23%E8%81%8C%E7%A7%B0%E8%AF%84%E5%AE%A1%E5%B0%86%E8%BF%8E%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%23) `254.2K 🔥` `-66%`
1. [王一博微博改名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BE%AE%E5%8D%9A%E6%94%B9%E5%90%8D%23) `253.4K 🔥` `-29%`
1. [保留奔跑吧艺人剩菜店家道歉 (Store owner apologizes for retaining Running Bar artist's leftovers)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%95%99%E5%A5%94%E8%B7%91%E5%90%A7%E8%89%BA%E4%BA%BA%E5%89%A9%E8%8F%9C%E5%BA%97%E5%AE%B6%E9%81%93%E6%AD%89%23) `251.9K 🔥` `-29%`
1. [王一博乐华续约](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B9%90%E5%8D%8E%E7%BB%AD%E7%BA%A6%23) `251.4K 🔥` `-28%`
1. [王橹杰换头像](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `205.6K 🔥` `-42%`
1. [黄灿灿浪姐连麦杨紫 (Huang Cancanlang's sister Lianmai Yangzi)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%B5%AA%E5%A7%90%E8%BF%9E%E9%BA%A6%E6%9D%A8%E7%B4%AB%23) `134.3K 🔥` `-61%`
1. [UNIQ组合已解散 (UNIQ group has been disbanded)](https://s.weibo.com/weibo?q=%23UNIQ%E7%BB%84%E5%90%88%E5%B7%B2%E8%A7%A3%E6%95%A3%23) `110.9K 🔥` `-50%`
1. [是你的孩子吗你就背](https://s.weibo.com/weibo?q=%23%E6%98%AF%E4%BD%A0%E7%9A%84%E5%AD%A9%E5%AD%90%E5%90%97%E4%BD%A0%E5%B0%B1%E8%83%8C%23) `108.4K 🔥` `-23%`
1. [THE9在安崎微博团建](https://s.weibo.com/weibo?q=%23THE9%E5%9C%A8%E5%AE%89%E5%B4%8E%E5%BE%AE%E5%8D%9A%E5%9B%A2%E5%BB%BA%23) `108.4K 🔥` `-70%`
1. [乘风2026官宣阵容 (Chengfeng 2026 official lineup announced)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%AE%98%E5%AE%A3%E9%98%B5%E5%AE%B9%23) `102.4K 🔥` `-53%`
1. [迪丽热巴提灯走机场 (Dilireba walks through the airport holding a lantern)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8F%90%E7%81%AF%E8%B5%B0%E6%9C%BA%E5%9C%BA%23) `98.8K 🔥` `-34%`
1. [蔡徐坤直播](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E7%9B%B4%E6%92%AD%23) `96.2K 🔥` `-72%`

Updated at 2026-03-27 21:40:21

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
