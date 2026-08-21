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

1. [多元消费场景激发经济澎湃活力 (Diversified consumption scenarios stimulate economic vitality)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%85%83%E6%B6%88%E8%B4%B9%E5%9C%BA%E6%99%AF%E6%BF%80%E5%8F%91%E7%BB%8F%E6%B5%8E%E6%BE%8E%E6%B9%83%E6%B4%BB%E5%8A%9B%23) `689.0K 🔥` `NEW`
1. [AG状态](https://s.weibo.com/weibo?q=%23AG%E7%8A%B6%E6%80%81%23) `387.0K 🔥` `NEW`
1. [汤家凤怼北大副院长张丹丹](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%AE%B6%E5%87%A4%E6%80%BC%E5%8C%97%E5%A4%A7%E5%89%AF%E9%99%A2%E9%95%BF%E5%BC%A0%E4%B8%B9%E4%B8%B9%23) `381.7K 🔥` `NEW`
1. [虞书欣娜扎撞衫](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A8%9C%E6%89%8E%E6%92%9E%E8%A1%AB%23) `381.2K 🔥` `NEW`
1. [上汽大众拒绝速成车](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B1%BD%E5%A4%A7%E4%BC%97%E6%8B%92%E7%BB%9D%E9%80%9F%E6%88%90%E8%BD%A6%23) `378.0K 🔥` `NEW`
1. [艾热看曾辉唱rap的表情](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%83%AD%E7%9C%8B%E6%9B%BE%E8%BE%89%E5%94%B1rap%E7%9A%84%E8%A1%A8%E6%83%85%23) `370.5K 🔥` `NEW`
1. [艾热去歌手吧](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%83%AD%E5%8E%BB%E6%AD%8C%E6%89%8B%E5%90%A7%23) `326.8K 🔥` `NEW`
1. [金价涨嗨了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%B6%A8%E5%97%A8%E4%BA%86%23) `326.8K 🔥` `NEW`
1. [官方回应旅客买票占座放零食](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%97%85%E5%AE%A2%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%23) `326.2K 🔥` `NEW`
1. [电视应该为老人做减法吗](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%BA%94%E8%AF%A5%E4%B8%BA%E8%80%81%E4%BA%BA%E5%81%9A%E5%87%8F%E6%B3%95%E5%90%97%23) `325.3K 🔥` `NEW`
1. [临沂一小区爆炸屋内住有待拆迁人员 (People waiting to be demolished live in the exploded house in Linyi community)](https://s.weibo.com/weibo?q=%23%E4%B8%B4%E6%B2%82%E4%B8%80%E5%B0%8F%E5%8C%BA%E7%88%86%E7%82%B8%E5%B1%8B%E5%86%85%E4%BD%8F%E6%9C%89%E5%BE%85%E6%8B%86%E8%BF%81%E4%BA%BA%E5%91%98%23) `324.0K 🔥` `NEW`
1. [AG对战TTG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98TTG%23) `222.2K 🔥` `NEW`
1. [第一批用上微信按住转文字的人发声](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%94%A8%E4%B8%8A%E5%BE%AE%E4%BF%A1%E6%8C%89%E4%BD%8F%E8%BD%AC%E6%96%87%E5%AD%97%E7%9A%84%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `195.0K 🔥` `NEW`
1. [妇炎洁闪片私处护理液已下架](https://s.weibo.com/weibo?q=%23%E5%A6%87%E7%82%8E%E6%B4%81%E9%97%AA%E7%89%87%E7%A7%81%E5%A4%84%E6%8A%A4%E7%90%86%E6%B6%B2%E5%B7%B2%E4%B8%8B%E6%9E%B6%23) `185.6K 🔥` `NEW`
1. [TTG战胜AG](https://s.weibo.com/weibo?q=%23TTG%E6%88%98%E8%83%9CAG%23) `182.8K 🔥` `NEW`
1. [泰国猫咬警察被宣布为前科者](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E7%8C%AB%E5%92%AC%E8%AD%A6%E5%AF%9F%E8%A2%AB%E5%AE%A3%E5%B8%83%E4%B8%BA%E5%89%8D%E7%A7%91%E8%80%85%23) `168.9K 🔥` `NEW`
1. [37岁女生说幸好20几岁没被稳定困住](https://s.weibo.com/weibo?q=%2337%E5%B2%81%E5%A5%B3%E7%94%9F%E8%AF%B4%E5%B9%B8%E5%A5%BD20%E5%87%A0%E5%B2%81%E6%B2%A1%E8%A2%AB%E7%A8%B3%E5%AE%9A%E5%9B%B0%E4%BD%8F%23) `160.2K 🔥` `NEW`
1. [王桥小区爆炸原因](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A1%A5%E5%B0%8F%E5%8C%BA%E7%88%86%E7%82%B8%E5%8E%9F%E5%9B%A0%23) `159.3K 🔥` `NEW`
1. [长江存储IPO审核状态变更](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E5%AD%98%E5%82%A8IPO%E5%AE%A1%E6%A0%B8%E7%8A%B6%E6%80%81%E5%8F%98%E6%9B%B4%23) `158.9K 🔥` `NEW`
1. [JDG确认年总大师组](https://s.weibo.com/weibo?q=%23JDG%E7%A1%AE%E8%AE%A4%E5%B9%B4%E6%80%BB%E5%A4%A7%E5%B8%88%E7%BB%84%23) `157.6K 🔥` `NEW`
1. [警方通报男子KTV厕所殴打女子 (Police report man assaulting woman in KTV restroom)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90KTV%E5%8E%95%E6%89%80%E6%AE%B4%E6%89%93%E5%A5%B3%E5%AD%90%23) `1.2M 🔥` `+173%`
1. [舒淇美成这样还有什么烦恼](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%E8%BF%98%E6%9C%89%E4%BB%80%E4%B9%88%E7%83%A6%E6%81%BC%23) `374.4K 🔥` `+79%`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `341.7K 🔥` `+35%`
1. [62岁女子生下6斤重婴儿](https://s.weibo.com/weibo?q=%2362%E5%B2%81%E5%A5%B3%E5%AD%90%E7%94%9F%E4%B8%8B6%E6%96%A4%E9%87%8D%E5%A9%B4%E5%84%BF%23) `324.9K 🔥` `+38%`
1. [妻子偷拍女子洗澡丈夫负责点评](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%81%B7%E6%8B%8D%E5%A5%B3%E5%AD%90%E6%B4%97%E6%BE%A1%E4%B8%88%E5%A4%AB%E8%B4%9F%E8%B4%A3%E7%82%B9%E8%AF%84%23) `261.7K 🔥` `+44%`
1. [多家车企启动召回](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E8%BD%A6%E4%BC%81%E5%90%AF%E5%8A%A8%E5%8F%AC%E5%9B%9E%23) `218.8K 🔥` `+26%`
1. [新世代BMW iX3 26.99万起 (New generation BMW iX3 starts at 269,900)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%96%E4%BB%A3BMW%20iX3%2026.99%E4%B8%87%E8%B5%B7%23) `655.2K 🔥`
1. [小沈阳摔了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%91%94%E4%BA%86%23) `631.7K 🔥`
1. [微信聊天框 难看](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%81%8A%E5%A4%A9%E6%A1%86%20%E9%9A%BE%E7%9C%8B%23) `616.1K 🔥`
1. [这就是伯牙子期](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E4%BC%AF%E7%89%99%E5%AD%90%E6%9C%9F%23) `570.0K 🔥`
1. [云南白药京东超级品牌日 (Yunnan Baiyao JD Super Brand Day)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E7%99%BD%E8%8D%AF%E4%BA%AC%E4%B8%9C%E8%B6%85%E7%BA%A7%E5%93%81%E7%89%8C%E6%97%A5%23) `553.8K 🔥`
1. [离了曾辉谁逗我笑](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E4%BA%86%E6%9B%BE%E8%BE%89%E8%B0%81%E9%80%97%E6%88%91%E7%AC%91%23) `502.4K 🔥`
1. [曝时代峰峻要给F1赔15.5亿 (It is revealed that Times Fengjun will pay 1.55 billion to F1)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%A6%81%E7%BB%99F1%E8%B5%9415.5%E4%BA%BF%23) `386.4K 🔥`
1. [陈柏霖当庭认罪](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%9F%8F%E9%9C%96%E5%BD%93%E5%BA%AD%E8%AE%A4%E7%BD%AA%23) `383.3K 🔥`
1. [45岁的陈冠希48岁的黄晓明](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%9A%84%E9%99%88%E5%86%A0%E5%B8%8C48%E5%B2%81%E7%9A%84%E9%BB%84%E6%99%93%E6%98%8E%23) `376.4K 🔥`
1. [微信 按住转文字 (WeChat press and hold to text)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E6%8C%89%E4%BD%8F%E8%BD%AC%E6%96%87%E5%AD%97%23) `372.1K 🔥`
1. [男子在KTV包厢厕所殴打女子被刑拘 (Man was detained for beating woman in KTV box toilet)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8KTV%E5%8C%85%E5%8E%A2%E5%8E%95%E6%89%80%E6%AE%B4%E6%89%93%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%88%91%E6%8B%98%23) `369.1K 🔥`
1. [女子暗恋8年终等来回应](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9A%97%E6%81%8B8%E5%B9%B4%E7%BB%88%E7%AD%89%E6%9D%A5%E5%9B%9E%E5%BA%94%23) `367.9K 🔥`
1. [马思纯又瘦了 (Ma Sichun lost weight again)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E5%8F%88%E7%98%A6%E4%BA%86%23) `366.3K 🔥`
1. [网传宋丹丹每月给儿子家80万](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%AE%8B%E4%B8%B9%E4%B8%B9%E6%AF%8F%E6%9C%88%E7%BB%99%E5%84%BF%E5%AD%90%E5%AE%B680%E4%B8%87%23) `332.7K 🔥`
1. [披荆斩棘直播 (Overcoming obstacles live broadcast)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `323.8K 🔥`
1. [张函瑞的马陆被卖了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E7%9A%84%E9%A9%AC%E9%99%86%E8%A2%AB%E5%8D%96%E4%BA%86%23) `323.2K 🔥`
1. [为什么建议定期更换水杯](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BB%BA%E8%AE%AE%E5%AE%9A%E6%9C%9F%E6%9B%B4%E6%8D%A2%E6%B0%B4%E6%9D%AF%23) `298.0K 🔥`
1. [LV将彻底退出贵州市场](https://s.weibo.com/weibo?q=%23LV%E5%B0%86%E5%BD%BB%E5%BA%95%E9%80%80%E5%87%BA%E8%B4%B5%E5%B7%9E%E5%B8%82%E5%9C%BA%23) `845.4K 🔥` `-28%`
1. [影院午睡2.5小时仅1元多](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E9%99%A2%E5%8D%88%E7%9D%A12.5%E5%B0%8F%E6%97%B6%E4%BB%851%E5%85%83%E5%A4%9A%23) `474.6K 🔥` `-43%`
1. [韦东奕开始卖书了](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E4%B8%9C%E5%A5%95%E5%BC%80%E5%A7%8B%E5%8D%96%E4%B9%A6%E4%BA%86%23) `395.6K 🔥` `-39%`
1. [中餐厅给张雅琪配了时钟后期 (The Chinese restaurant assigned Zhang Yaqi a clock later)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E7%BB%99%E5%BC%A0%E9%9B%85%E7%90%AA%E9%85%8D%E4%BA%86%E6%97%B6%E9%92%9F%E5%90%8E%E6%9C%9F%23) `242.6K 🔥` `-28%`
1. [女子游泳馆内偷拍他人洗澡发给丈夫 (Secretly filming someone taking a shower in a women's swimming pool and sending it to her husband)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B8%B8%E6%B3%B3%E9%A6%86%E5%86%85%E5%81%B7%E6%8B%8D%E4%BB%96%E4%BA%BA%E6%B4%97%E6%BE%A1%E5%8F%91%E7%BB%99%E4%B8%88%E5%A4%AB%23) `237.0K 🔥` `-39%`
1. [哀人组太好听了](https://s.weibo.com/weibo?q=%23%E5%93%80%E4%BA%BA%E7%BB%84%E5%A4%AA%E5%A5%BD%E5%90%AC%E4%BA%86%23) `208.6K 🔥` `-38%`
1. [春山境大结局 (The finale of Spring Mountain Realm)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%B1%B1%E5%A2%83%E5%A4%A7%E7%BB%93%E5%B1%80%23) `176.7K 🔥` `-48%`
1. [迪丽热巴直播](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9B%B4%E6%92%AD%23) `171.8K 🔥` `-44%`
1. [时代峰峻高会产品售后困难](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%AB%98%E4%BC%9A%E4%BA%A7%E5%93%81%E5%94%AE%E5%90%8E%E5%9B%B0%E9%9A%BE%23) `158.8K 🔥` `-23%`

Updated at 2026-08-21 21:53:54

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
