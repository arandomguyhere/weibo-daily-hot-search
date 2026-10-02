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

1. [全世界都知道中国人放假了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E9%83%BD%E7%9F%A5%E9%81%93%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%94%BE%E5%81%87%E4%BA%86%23) `1.4M 🔥` `NEW`
1. [在国外被中国男演员救了一命](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%9B%BD%E5%A4%96%E8%A2%AB%E4%B8%AD%E5%9B%BD%E7%94%B7%E6%BC%94%E5%91%98%E6%95%91%E4%BA%86%E4%B8%80%E5%91%BD%23) `964.7K 🔥` `NEW`
1. [国庆黄金周文旅消费火热可期](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E9%BB%84%E9%87%91%E5%91%A8%E6%96%87%E6%97%85%E6%B6%88%E8%B4%B9%E7%81%AB%E7%83%AD%E5%8F%AF%E6%9C%9F%23) `700.4K 🔥` `NEW`
1. [电视剧喜剧之王定档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E5%96%9C%E5%89%A7%E4%B9%8B%E7%8E%8B%E5%AE%9A%E6%A1%A3%23) `397.2K 🔥` `NEW`
1. [莫氏鸡煲总店员工从180人减至30多人](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E6%80%BB%E5%BA%97%E5%91%98%E5%B7%A5%E4%BB%8E180%E4%BA%BA%E5%87%8F%E8%87%B330%E5%A4%9A%E4%BA%BA%23) `383.4K 🔥` `NEW`
1. [LOL韩国队翻盘中国台北队](https://s.weibo.com/weibo?q=%23LOL%E9%9F%A9%E5%9B%BD%E9%98%9F%E7%BF%BB%E7%9B%98%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E9%98%9F%23) `281.3K 🔥` `NEW`
1. [国庆路上微博智搜陪你](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E8%B7%AF%E4%B8%8A%E5%BE%AE%E5%8D%9A%E6%99%BA%E6%90%9C%E9%99%AA%E4%BD%A0%23) `276.2K 🔥` `NEW`
1. [高速堵车悬挂免费WiFi司机发声](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E5%A0%B5%E8%BD%A6%E6%82%AC%E6%8C%82%E5%85%8D%E8%B4%B9WiFi%E5%8F%B8%E6%9C%BA%E5%8F%91%E5%A3%B0%23) `272.4K 🔥` `NEW`
1. [电视剧名 奶茶名](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E5%90%8D%20%E5%A5%B6%E8%8C%B6%E5%90%8D%23) `256.4K 🔥` `NEW`
1. [莫氏鸡煲国庆假期首日上座约六成](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%9B%BD%E5%BA%86%E5%81%87%E6%9C%9F%E9%A6%96%E6%97%A5%E4%B8%8A%E5%BA%A7%E7%BA%A6%E5%85%AD%E6%88%90%23) `254.6K 🔥` `NEW`
1. [张继科杯](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E6%9D%AF%23) `244.1K 🔥` `NEW`
1. [TFBOYS亲签 350万](https://s.weibo.com/weibo?q=%23TFBOYS%E4%BA%B2%E7%AD%BE%20350%E4%B8%87%23) `243.1K 🔥` `NEW`
1. [TOP林珍娜承认恋情](https://s.weibo.com/weibo?q=%23TOP%E6%9E%97%E7%8F%8D%E5%A8%9C%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `241.5K 🔥` `NEW`
1. [农村的消亡可能远超预期](https://s.weibo.com/weibo?q=%23%E5%86%9C%E6%9D%91%E7%9A%84%E6%B6%88%E4%BA%A1%E5%8F%AF%E8%83%BD%E8%BF%9C%E8%B6%85%E9%A2%84%E6%9C%9F%23) `238.4K 🔥` `NEW`
1. [难怪那么多艺人最后和经纪人结婚了](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E9%82%A3%E4%B9%88%E5%A4%9A%E8%89%BA%E4%BA%BA%E6%9C%80%E5%90%8E%E5%92%8C%E7%BB%8F%E7%BA%AA%E4%BA%BA%E7%BB%93%E5%A9%9A%E4%BA%86%23) `236.3K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `234.8K 🔥` `NEW`
1. [李小冉 你们还有戏拍](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E4%BD%A0%E4%BB%AC%E8%BF%98%E6%9C%89%E6%88%8F%E6%8B%8D%23) `230.6K 🔥` `NEW`
1. [曝C罗退队与迷你罗落选有关](https://s.weibo.com/weibo?q=%23%E6%9B%9DC%E7%BD%97%E9%80%80%E9%98%9F%E4%B8%8E%E8%BF%B7%E4%BD%A0%E7%BD%97%E8%90%BD%E9%80%89%E6%9C%89%E5%85%B3%23) `229.5K 🔥` `NEW`
1. [孙千1条日常分享带6个广](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%831%E6%9D%A1%E6%97%A5%E5%B8%B8%E5%88%86%E4%BA%AB%E5%B8%A66%E4%B8%AA%E5%B9%BF%23) `228.4K 🔥` `NEW`
1. [医生谈取消艾滋感染者入境限制](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%B0%88%E5%8F%96%E6%B6%88%E8%89%BE%E6%BB%8B%E6%84%9F%E6%9F%93%E8%80%85%E5%85%A5%E5%A2%83%E9%99%90%E5%88%B6%23) `226.2K 🔥` `NEW`
1. [华为Mate90ProMax顶配版成销售主力](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate90ProMax%E9%A1%B6%E9%85%8D%E7%89%88%E6%88%90%E9%94%80%E5%94%AE%E4%B8%BB%E5%8A%9B%23) `224.9K 🔥` `NEW`
1. [突然发现大家旅游不住酒店了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%AE%B6%E6%97%85%E6%B8%B8%E4%B8%8D%E4%BD%8F%E9%85%92%E5%BA%97%E4%BA%86%23) `222.6K 🔥` `NEW`
1. [男朋友订婚前的搜索记录](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%9C%8B%E5%8F%8B%E8%AE%A2%E5%A9%9A%E5%89%8D%E7%9A%84%E6%90%9C%E7%B4%A2%E8%AE%B0%E5%BD%95%23) `221.3K 🔥` `NEW`
1. [章涛](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%B6%9B%23) `219.2K 🔥` `NEW`
1. [麦琳7个月瘦了40斤](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%90%B37%E4%B8%AA%E6%9C%88%E7%98%A6%E4%BA%8640%E6%96%A4%23) `218.5K 🔥` `NEW`
1. [赵今麦不敢接魏大勋的话](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E4%B8%8D%E6%95%A2%E6%8E%A5%E9%AD%8F%E5%A4%A7%E5%8B%8B%E7%9A%84%E8%AF%9D%23) `199.0K 🔥` `NEW`
1. [林锦岐认出许兰香先烧证据](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E8%AE%A4%E5%87%BA%E8%AE%B8%E5%85%B0%E9%A6%99%E5%85%88%E7%83%A7%E8%AF%81%E6%8D%AE%23) `193.0K 🔥` `NEW`
1. [音乐老师赴泰失联事件知情人发声](https://s.weibo.com/weibo?q=%23%E9%9F%B3%E4%B9%90%E8%80%81%E5%B8%88%E8%B5%B4%E6%B3%B0%E5%A4%B1%E8%81%94%E4%BA%8B%E4%BB%B6%E7%9F%A5%E6%83%85%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `193.0K 🔥` `NEW`
1. [中国游客国庆像泡发的木耳](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%9B%BD%E5%BA%86%E5%83%8F%E6%B3%A1%E5%8F%91%E7%9A%84%E6%9C%A8%E8%80%B3%23) `193.0K 🔥` `NEW`
1. [普京说孙辈会说中文能给他当翻译](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AF%B4%E5%AD%99%E8%BE%88%E4%BC%9A%E8%AF%B4%E4%B8%AD%E6%96%87%E8%83%BD%E7%BB%99%E4%BB%96%E5%BD%93%E7%BF%BB%E8%AF%91%23) `193.0K 🔥` `NEW`
1. [邓为抱着林依晨玩水上滑滑梯](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E6%8A%B1%E7%9D%80%E6%9E%97%E4%BE%9D%E6%99%A8%E7%8E%A9%E6%B0%B4%E4%B8%8A%E6%BB%91%E6%BB%91%E6%A2%AF%23) `193.0K 🔥` `NEW`
1. [中医建议煮陈皮水喝好处很多](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8C%BB%E5%BB%BA%E8%AE%AE%E7%85%AE%E9%99%88%E7%9A%AE%E6%B0%B4%E5%96%9D%E5%A5%BD%E5%A4%84%E5%BE%88%E5%A4%9A%23) `175.6K 🔥` `NEW`
1. [长得像郭碧婷被拉去和向佐直播](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%97%E5%83%8F%E9%83%AD%E7%A2%A7%E5%A9%B7%E8%A2%AB%E6%8B%89%E5%8E%BB%E5%92%8C%E5%90%91%E4%BD%90%E7%9B%B4%E6%92%AD%23) `154.7K 🔥` `NEW`
1. [王者年度总决赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%B9%B4%E5%BA%A6%E6%80%BB%E5%86%B3%E8%B5%9B%23) `147.0K 🔥` `NEW`
1. [兰香如故 隐喻](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%20%E9%9A%90%E5%96%BB%23) `144.4K 🔥` `NEW`
1. [那英在家失去意识30S](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%9C%A8%E5%AE%B6%E5%A4%B1%E5%8E%BB%E6%84%8F%E8%AF%8630S%23) `142.3K 🔥` `NEW`
1. [农村的老妈老爸竟成中国存款前6%](https://s.weibo.com/weibo?q=%23%E5%86%9C%E6%9D%91%E7%9A%84%E8%80%81%E5%A6%88%E8%80%81%E7%88%B8%E7%AB%9F%E6%88%90%E4%B8%AD%E5%9B%BD%E5%AD%98%E6%AC%BE%E5%89%8D6%25%23) `141.6K 🔥` `NEW`
1. [薯条胶囊和现炸出来的没区别](https://s.weibo.com/weibo?q=%23%E8%96%AF%E6%9D%A1%E8%83%B6%E5%9B%8A%E5%92%8C%E7%8E%B0%E7%82%B8%E5%87%BA%E6%9D%A5%E7%9A%84%E6%B2%A1%E5%8C%BA%E5%88%AB%23) `135.7K 🔥` `NEW`
1. [兰香如故 结局伏笔](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%20%E7%BB%93%E5%B1%80%E4%BC%8F%E7%AC%94%23) `134.0K 🔥` `NEW`
1. [86版西游记插曲作曲维权](https://s.weibo.com/weibo?q=%2386%E7%89%88%E8%A5%BF%E6%B8%B8%E8%AE%B0%E6%8F%92%E6%9B%B2%E4%BD%9C%E6%9B%B2%E7%BB%B4%E6%9D%83%23) `134.0K 🔥` `NEW`
1. [林高远 赛车](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%AB%98%E8%BF%9C%20%E8%B5%9B%E8%BD%A6%23) `127.5K 🔥` `NEW`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `127.0K 🔥` `NEW`
1. [郑燕姿自曝脸上花了500万](https://s.weibo.com/weibo?q=%23%E9%83%91%E7%87%95%E5%A7%BF%E8%87%AA%E6%9B%9D%E8%84%B8%E4%B8%8A%E8%8A%B1%E4%BA%86500%E4%B8%87%23) `122.6K 🔥` `NEW`
1. [国庆 睡7天](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%20%E7%9D%A17%E5%A4%A9%23) `122.3K 🔥` `NEW`
1. [林珍娜粉丝现状](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%8F%8D%E5%A8%9C%E7%B2%89%E4%B8%9D%E7%8E%B0%E7%8A%B6%23) `120.3K 🔥` `NEW`
1. [巴黎司机称富贵亚洲面孔易被劫匪盯](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%8F%B8%E6%9C%BA%E7%A7%B0%E5%AF%8C%E8%B4%B5%E4%BA%9A%E6%B4%B2%E9%9D%A2%E5%AD%94%E6%98%93%E8%A2%AB%E5%8A%AB%E5%8C%AA%E7%9B%AF%23) `108.9K 🔥` `NEW`
1. [Zeus燃尽了](https://s.weibo.com/weibo?q=%23Zeus%E7%87%83%E5%B0%BD%E4%BA%86%23) `107.5K 🔥` `NEW`
1. [谭松韵从你的全娱乐圈路过](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E4%BB%8E%E4%BD%A0%E7%9A%84%E5%85%A8%E5%A8%B1%E4%B9%90%E5%9C%88%E8%B7%AF%E8%BF%87%23) `103.7K 🔥` `NEW`
1. [陈浩民说蒋丽莎消费他前女友](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%A9%E6%B0%91%E8%AF%B4%E8%92%8B%E4%B8%BD%E8%8E%8E%E6%B6%88%E8%B4%B9%E4%BB%96%E5%89%8D%E5%A5%B3%E5%8F%8B%23) `103.3K 🔥` `NEW`
1. [现在的智能家居已经这么高级了吗](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E6%99%BA%E8%83%BD%E5%AE%B6%E5%B1%85%E5%B7%B2%E7%BB%8F%E8%BF%99%E4%B9%88%E9%AB%98%E7%BA%A7%E4%BA%86%E5%90%97%23) `103.2K 🔥` `NEW`
1. [上京东和蒋欣一起买华为Mate 90系列](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%AC%E4%B8%9C%E5%92%8C%E8%92%8B%E6%AC%A3%E4%B8%80%E8%B5%B7%E4%B9%B0%E5%8D%8E%E4%B8%BAMate%2090%E7%B3%BB%E5%88%97%23) `479.0K 🔥` `+450%`
1. [今日亚运决出51金](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E4%BA%9A%E8%BF%90%E5%86%B3%E5%87%BA51%E9%87%91%23) `142.3K 🔥`

Updated at 2026-10-02 14:47:03

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
