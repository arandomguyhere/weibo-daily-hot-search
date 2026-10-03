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

1. [爬珠峰的人都堵了](https://s.weibo.com/weibo?q=%23%E7%88%AC%E7%8F%A0%E5%B3%B0%E7%9A%84%E4%BA%BA%E9%83%BD%E5%A0%B5%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [司机被拍到高速开智驾睡着](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E8%A2%AB%E6%8B%8D%E5%88%B0%E9%AB%98%E9%80%9F%E5%BC%80%E6%99%BA%E9%A9%BE%E7%9D%A1%E7%9D%80%23) `772.7K 🔥` `NEW`
1. [国庆假期第3日跨区域人员流动超3亿](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%81%87%E6%9C%9F%E7%AC%AC3%E6%97%A5%E8%B7%A8%E5%8C%BA%E5%9F%9F%E4%BA%BA%E5%91%98%E6%B5%81%E5%8A%A8%E8%B6%853%E4%BA%BF%23) `625.6K 🔥` `NEW`
1. [她 难听](https://s.weibo.com/weibo?q=%23%E5%A5%B9%20%E9%9A%BE%E5%90%AC%23) `613.6K 🔥` `NEW`
1. [刘学义谭松韵兰香如故香爆了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E9%A6%99%E7%88%86%E4%BA%86%23) `585.6K 🔥` `NEW`
1. [莱巴金娜中网爆冷出局](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E4%B8%AD%E7%BD%91%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23) `562.6K 🔥` `NEW`
1. [中国队169金89银83铜收官](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F169%E9%87%9189%E9%93%B683%E9%93%9C%E6%94%B6%E5%AE%98%23) `328.4K 🔥` `NEW`
1. [郭晓东淘汰](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E4%B8%9C%E6%B7%98%E6%B1%B0%23) `326.7K 🔥` `NEW`
1. [披荆斩棘四公总排名](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%9B%9B%E5%85%AC%E6%80%BB%E6%8E%92%E5%90%8D%23) `325.5K 🔥` `NEW`
1. [巴勒斯坦球员向国足道歉](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%E7%90%83%E5%91%98%E5%90%91%E5%9B%BD%E8%B6%B3%E9%81%93%E6%AD%89%23) `321.1K 🔥` `NEW`
1. [法国博主吐槽中国演员被偷相机](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%8D%9A%E4%B8%BB%E5%90%90%E6%A7%BD%E4%B8%AD%E5%9B%BD%E6%BC%94%E5%91%98%E8%A2%AB%E5%81%B7%E7%9B%B8%E6%9C%BA%23) `316.8K 🔥` `NEW`
1. [田馥甄亲手毁掉了自己的演艺生涯](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E4%BA%B2%E6%89%8B%E6%AF%81%E6%8E%89%E4%BA%86%E8%87%AA%E5%B7%B1%E7%9A%84%E6%BC%94%E8%89%BA%E7%94%9F%E6%B6%AF%23) `313.5K 🔥` `NEW`
1. [韩国U23夺金免兵役球员集体喜极而泣](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BDU23%E5%A4%BA%E9%87%91%E5%85%8D%E5%85%B5%E5%BD%B9%E7%90%83%E5%91%98%E9%9B%86%E4%BD%93%E5%96%9C%E6%9E%81%E8%80%8C%E6%B3%A3%23) `299.2K 🔥` `NEW`
1. [为什么现在退房时酒店不查房了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E9%80%80%E6%88%BF%E6%97%B6%E9%85%92%E5%BA%97%E4%B8%8D%E6%9F%A5%E6%88%BF%E4%BA%86%23) `290.0K 🔥` `NEW`
1. [陈若轩淘汰](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%8B%A5%E8%BD%A9%E6%B7%98%E6%B1%B0%23) `270.0K 🔥` `NEW`
1. [黄安两个妹妹剃度出家](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AE%89%E4%B8%A4%E4%B8%AA%E5%A6%B9%E5%A6%B9%E5%89%83%E5%BA%A6%E5%87%BA%E5%AE%B6%23) `247.7K 🔥` `NEW`
1. [兰香如故许兰香掉马](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%AE%B8%E5%85%B0%E9%A6%99%E6%8E%89%E9%A9%AC%23) `246.3K 🔥` `NEW`
1. [美方指责星巴克在新疆开门店](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%96%B9%E6%8C%87%E8%B4%A3%E6%98%9F%E5%B7%B4%E5%85%8B%E5%9C%A8%E6%96%B0%E7%96%86%E5%BC%80%E9%97%A8%E5%BA%97%23) `244.7K 🔥` `NEW`
1. [鞠婧祎微博直播](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%BE%AE%E5%8D%9A%E7%9B%B4%E6%92%AD%23) `230.4K 🔥` `NEW`
1. [女子预订酒店后到地方发现已停业](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%A2%84%E8%AE%A2%E9%85%92%E5%BA%97%E5%90%8E%E5%88%B0%E5%9C%B0%E6%96%B9%E5%8F%91%E7%8E%B0%E5%B7%B2%E5%81%9C%E4%B8%9A%23) `229.1K 🔥` `NEW`
1. [女子做早餐被网友说对自己太差](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%9A%E6%97%A9%E9%A4%90%E8%A2%AB%E7%BD%91%E5%8F%8B%E8%AF%B4%E5%AF%B9%E8%87%AA%E5%B7%B1%E5%A4%AA%E5%B7%AE%23) `228.0K 🔥` `NEW`
1. [陈丽君澳门演出现场名流聚集](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E6%BE%B3%E9%97%A8%E6%BC%94%E5%87%BA%E7%8E%B0%E5%9C%BA%E5%90%8D%E6%B5%81%E8%81%9A%E9%9B%86%23) `218.9K 🔥` `NEW`
1. [内娱编剧写不好低学历女主了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%BC%96%E5%89%A7%E5%86%99%E4%B8%8D%E5%A5%BD%E4%BD%8E%E5%AD%A6%E5%8E%86%E5%A5%B3%E4%B8%BB%E4%BA%86%23) `197.9K 🔥` `NEW`
1. [田馥甄曾说不差钱就喜欢做自己](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E6%9B%BE%E8%AF%B4%E4%B8%8D%E5%B7%AE%E9%92%B1%E5%B0%B1%E5%96%9C%E6%AC%A2%E5%81%9A%E8%87%AA%E5%B7%B1%23) `192.5K 🔥` `NEW`
1. [莱巴金娜 状态](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%20%E7%8A%B6%E6%80%81%23) `190.2K 🔥` `NEW`
1. [余文乐连线井柏然](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%E8%BF%9E%E7%BA%BF%E4%BA%95%E6%9F%8F%E7%84%B6%23) `188.4K 🔥` `NEW`
1. [30岁女子靠AI婚庆培训年入200万](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%A5%B3%E5%AD%90%E9%9D%A0AI%E5%A9%9A%E5%BA%86%E5%9F%B9%E8%AE%AD%E5%B9%B4%E5%85%A5200%E4%B8%87%23) `181.1K 🔥` `NEW`
1. [小莲是南客求婚之后才喜欢上他](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8E%B2%E6%98%AF%E5%8D%97%E5%AE%A2%E6%B1%82%E5%A9%9A%E4%B9%8B%E5%90%8E%E6%89%8D%E5%96%9C%E6%AC%A2%E4%B8%8A%E4%BB%96%23) `180.0K 🔥` `NEW`
1. [王以太披荆斩棘四公抢席位排名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%A5%E5%A4%AA%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%9B%9B%E5%85%AC%E6%8A%A2%E5%B8%AD%E4%BD%8D%E6%8E%92%E5%90%8D%23) `176.9K 🔥` `NEW`
1. [女子连公共WiFi被连扣3笔钱](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%9E%E5%85%AC%E5%85%B1WiFi%E8%A2%AB%E8%BF%9E%E6%89%A33%E7%AC%94%E9%92%B1%23) `174.9K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `174.6K 🔥` `NEW`
1. [闲鱼 黑话](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%20%E9%BB%91%E8%AF%9D%23) `174.5K 🔥` `NEW`
1. [新能源电车还有多少想象空间](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E7%94%B5%E8%BD%A6%E8%BF%98%E6%9C%89%E5%A4%9A%E5%B0%91%E6%83%B3%E8%B1%A1%E7%A9%BA%E9%97%B4%23) `173.9K 🔥` `NEW`
1. [挂号挂到自家人也太有节目了](https://s.weibo.com/weibo?q=%23%E6%8C%82%E5%8F%B7%E6%8C%82%E5%88%B0%E8%87%AA%E5%AE%B6%E4%BA%BA%E4%B9%9F%E5%A4%AA%E6%9C%89%E8%8A%82%E7%9B%AE%E4%BA%86%23) `171.7K 🔥` `NEW`
1. [刘学义回应林锦岐晕了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E5%9B%9E%E5%BA%94%E6%9E%97%E9%94%A6%E5%B2%90%E6%99%95%E4%BA%86%23) `170.2K 🔥` `NEW`
1. [来自天堂的魔鬼](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E8%87%AA%E5%A4%A9%E5%A0%82%E7%9A%84%E9%AD%94%E9%AC%BC%23) `168.4K 🔥` `NEW`
1. [无畏 状态](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%20%E7%8A%B6%E6%80%81%23) `163.8K 🔥` `NEW`
1. [披荆斩棘 票数](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%20%E7%A5%A8%E6%95%B0%23) `163.1K 🔥` `NEW`
1. [丁程鑫你搞砸了魏大勋的CP](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%BD%A0%E6%90%9E%E7%A0%B8%E4%BA%86%E9%AD%8F%E5%A4%A7%E5%8B%8B%E7%9A%84CP%23) `162.4K 🔥` `NEW`
1. [亚运男足颁奖韩国国旗卡住遭嘘声](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E7%94%B7%E8%B6%B3%E9%A2%81%E5%A5%96%E9%9F%A9%E5%9B%BD%E5%9B%BD%E6%97%97%E5%8D%A1%E4%BD%8F%E9%81%AD%E5%98%98%E5%A3%B0%23) `161.0K 🔥` `NEW`
1. [句号 钟意](https://s.weibo.com/weibo?q=%23%E5%8F%A5%E5%8F%B7%20%E9%92%9F%E6%84%8F%23) `161.0K 🔥` `NEW`
1. [月光闪 夯](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%85%89%E9%97%AA%20%E5%A4%AF%23) `160.7K 🔥` `NEW`
1. [王一博究竟看到了什么](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%A9%B6%E7%AB%9F%E7%9C%8B%E5%88%B0%E4%BA%86%E4%BB%80%E4%B9%88%23) `155.0K 🔥` `NEW`
1. [大兴安岭景区出现吊牌衣](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%85%B4%E5%AE%89%E5%B2%AD%E6%99%AF%E5%8C%BA%E5%87%BA%E7%8E%B0%E5%90%8A%E7%89%8C%E8%A1%A3%23) `139.2K 🔥` `NEW`
1. [EDGM战胜JDG](https://s.weibo.com/weibo?q=%23EDGM%E6%88%98%E8%83%9CJDG%23) `136.4K 🔥` `NEW`
1. [陶白白前妻自曝离婚没分到钱](https://s.weibo.com/weibo?q=%23%E9%99%B6%E7%99%BD%E7%99%BD%E5%89%8D%E5%A6%BB%E8%87%AA%E6%9B%9D%E7%A6%BB%E5%A9%9A%E6%B2%A1%E5%88%86%E5%88%B0%E9%92%B1%23) `134.9K 🔥` `NEW`
1. [韩振和孙千说早春晴朗他全看完了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%8C%AF%E5%92%8C%E5%AD%99%E5%8D%83%E8%AF%B4%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E4%BB%96%E5%85%A8%E7%9C%8B%E5%AE%8C%E4%BA%86%23) `134.3K 🔥` `NEW`
1. [73岁大爷心脏长反每天乱跳超3万次](https://s.weibo.com/weibo?q=%2373%E5%B2%81%E5%A4%A7%E7%88%B7%E5%BF%83%E8%84%8F%E9%95%BF%E5%8F%8D%E6%AF%8F%E5%A4%A9%E4%B9%B1%E8%B7%B3%E8%B6%853%E4%B8%87%E6%AC%A1%23) `133.7K 🔥` `NEW`
1. [减肥放纵一个国庆后会怎样](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E6%94%BE%E7%BA%B5%E4%B8%80%E4%B8%AA%E5%9B%BD%E5%BA%86%E5%90%8E%E4%BC%9A%E6%80%8E%E6%A0%B7%23) `133.6K 🔥` `NEW`
1. [白鹿给宋雨琦新歌打歌](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%99%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%96%B0%E6%AD%8C%E6%89%93%E6%AD%8C%23) `133.0K 🔥` `NEW`

Updated at 2026-10-04 00:12:04

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
