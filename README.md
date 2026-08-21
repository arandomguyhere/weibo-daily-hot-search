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

1. [地质灾害避险指南请收好 (Please keep the Geological Disaster Risk Avoidance Guide)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E8%B4%A8%E7%81%BE%E5%AE%B3%E9%81%BF%E9%99%A9%E6%8C%87%E5%8D%97%E8%AF%B7%E6%94%B6%E5%A5%BD%23) `657.1K 🔥` `NEW`
1. [小沈阳摔了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%91%94%E4%BA%86%23) `654.6K 🔥` `NEW`
1. [这就是伯牙子期](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E4%BC%AF%E7%89%99%E5%AD%90%E6%9C%9F%23) `647.5K 🔥` `NEW`
1. [韦东奕开始卖书了](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E4%B8%9C%E5%A5%95%E5%BC%80%E5%A7%8B%E5%8D%96%E4%B9%A6%E4%BA%86%23) `643.3K 🔥` `NEW`
1. [离了曾辉谁逗我笑](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E4%BA%86%E6%9B%BE%E8%BE%89%E8%B0%81%E9%80%97%E6%88%91%E7%AC%91%23) `628.7K 🔥` `NEW`
1. [ivl](https://s.weibo.com/weibo?q=%23ivl%23) `522.3K 🔥` `NEW`
1. [警方通报男子KTV厕所殴打女子](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90KTV%E5%8E%95%E6%89%80%E6%AE%B4%E6%89%93%E5%A5%B3%E5%AD%90%23) `441.1K 🔥` `NEW`
1. [曝时代峰峻要给F1赔15.5亿](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%A6%81%E7%BB%99F1%E8%B5%9415.5%E4%BA%BF%23) `437.8K 🔥` `NEW`
1. [陈柏霖当庭认罪](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%9F%8F%E9%9C%96%E5%BD%93%E5%BA%AD%E8%AE%A4%E7%BD%AA%23) `383.2K 🔥` `NEW`
1. [4人在高速上80码行驶遇刹车失灵](https://s.weibo.com/weibo?q=%234%E4%BA%BA%E5%9C%A8%E9%AB%98%E9%80%9F%E4%B8%8A80%E7%A0%81%E8%A1%8C%E9%A9%B6%E9%81%87%E5%88%B9%E8%BD%A6%E5%A4%B1%E7%81%B5%23) `339.3K 🔥` `NEW`
1. [如是书院课程洗脑提出异议会被打 (If you raise objections to the brainwashing program in the academy, you will be beaten.)](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%98%AF%E4%B9%A6%E9%99%A2%E8%AF%BE%E7%A8%8B%E6%B4%97%E8%84%91%E6%8F%90%E5%87%BA%E5%BC%82%E8%AE%AE%E4%BC%9A%E8%A2%AB%E6%89%93%23) `338.6K 🔥` `NEW`
1. [网传宋丹丹每月给儿子家80万](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%AE%8B%E4%B8%B9%E4%B8%B9%E6%AF%8F%E6%9C%88%E7%BB%99%E5%84%BF%E5%AD%90%E5%AE%B680%E4%B8%87%23) `338.4K 🔥` `NEW`
1. [张函瑞的马陆被卖了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E7%9A%84%E9%A9%AC%E9%99%86%E8%A2%AB%E5%8D%96%E4%BA%86%23) `337.7K 🔥` `NEW`
1. [女子暗恋8年终等来回应](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9A%97%E6%81%8B8%E5%B9%B4%E7%BB%88%E7%AD%89%E6%9D%A5%E5%9B%9E%E5%BA%94%23) `337.6K 🔥` `NEW`
1. [哀人组太好听了](https://s.weibo.com/weibo?q=%23%E5%93%80%E4%BA%BA%E7%BB%84%E5%A4%AA%E5%A5%BD%E5%90%AC%E4%BA%86%23) `336.7K 🔥` `NEW`
1. [迪丽热巴直播](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9B%B4%E6%92%AD%23) `307.8K 🔥` `NEW`
1. [各地重大工程提速夯实高质量发展底盘](https://s.weibo.com/weibo?q=%23%E5%90%84%E5%9C%B0%E9%87%8D%E5%A4%A7%E5%B7%A5%E7%A8%8B%E6%8F%90%E9%80%9F%E5%A4%AF%E5%AE%9E%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E5%BA%95%E7%9B%98%23) `254.2K 🔥` `NEW`
1. [曾辉 进步](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%20%E8%BF%9B%E6%AD%A5%23) `244.7K 🔥` `NEW`
1. [舒淇美成这样还有什么烦恼](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%E8%BF%98%E6%9C%89%E4%BB%80%E4%B9%88%E7%83%A6%E6%81%BC%23) `209.4K 🔥` `NEW`
1. [汪苏泷演唱会偶遇黄子弘凡](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%E5%81%B6%E9%81%87%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%23) `206.6K 🔥` `NEW`
1. [登记为唐狗犬只被曝含格斗犬血统 (A dog registered as a Tang terrier was revealed to have fighting dog ancestry)](https://s.weibo.com/weibo?q=%23%E7%99%BB%E8%AE%B0%E4%B8%BA%E5%94%90%E7%8B%97%E7%8A%AC%E5%8F%AA%E8%A2%AB%E6%9B%9D%E5%90%AB%E6%A0%BC%E6%96%97%E7%8A%AC%E8%A1%80%E7%BB%9F%23) `205.8K 🔥` `NEW`
1. [时代峰峻高会产品售后困难](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%AB%98%E4%BC%9A%E4%BA%A7%E5%93%81%E5%94%AE%E5%90%8E%E5%9B%B0%E9%9A%BE%23) `205.3K 🔥` `NEW`
1. [妻子偷拍女子洗澡丈夫负责点评](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%81%B7%E6%8B%8D%E5%A5%B3%E5%AD%90%E6%B4%97%E6%BE%A1%E4%B8%88%E5%A4%AB%E8%B4%9F%E8%B4%A3%E7%82%B9%E8%AF%84%23) `181.7K 🔥` `NEW`
1. [现在就出发 完颜团](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%20%E5%AE%8C%E9%A2%9C%E5%9B%A2%23) `175.7K 🔥` `NEW`
1. [爱的主打歌 改编](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%9A%84%E4%B8%BB%E6%89%93%E6%AD%8C%20%E6%94%B9%E7%BC%96%23) `174.0K 🔥` `NEW`
1. [多家车企启动召回](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E8%BD%A6%E4%BC%81%E5%90%AF%E5%8A%A8%E5%8F%AC%E5%9B%9E%23) `173.9K 🔥` `NEW`
1. [BIGBANG演唱会](https://s.weibo.com/weibo?q=%23BIGBANG%E6%BC%94%E5%94%B1%E4%BC%9A%23) `165.2K 🔥` `NEW`
1. [影院午睡2.5小时仅1元多](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E9%99%A2%E5%8D%88%E7%9D%A12.5%E5%B0%8F%E6%97%B6%E4%BB%851%E5%85%83%E5%A4%9A%23) `838.7K 🔥` `+41%`
1. [微信聊天框 难看](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%81%8A%E5%A4%A9%E6%A1%86%20%E9%9A%BE%E7%9C%8B%23) `650.2K 🔥` `+117%`
1. [云南白药京东超级品牌日 (Yunnan Baiyao JD Super Brand Day)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E7%99%BD%E8%8D%AF%E4%BA%AC%E4%B8%9C%E8%B6%85%E7%BA%A7%E5%93%81%E7%89%8C%E6%97%A5%23) `646.5K 🔥` `+46%`
1. [45岁的陈冠希48岁的黄晓明](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%9A%84%E9%99%88%E5%86%A0%E5%B8%8C48%E5%B2%81%E7%9A%84%E9%BB%84%E6%99%93%E6%98%8E%23) `430.7K 🔥` `+43%`
1. [女子游泳馆内偷拍他人洗澡发给丈夫 (Secretly filming someone taking a shower in a women's swimming pool and sending it to her husband)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B8%B8%E6%B3%B3%E9%A6%86%E5%86%85%E5%81%B7%E6%8B%8D%E4%BB%96%E4%BA%BA%E6%B4%97%E6%BE%A1%E5%8F%91%E7%BB%99%E4%B8%88%E5%A4%AB%23) `386.0K 🔥` `+34%`
1. [马思纯又瘦了 (Ma Sichun lost weight again)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E5%8F%88%E7%98%A6%E4%BA%86%23) `384.1K 🔥` `+30%`
1. [男子在KTV包厢厕所殴打女子被刑拘 (Man was detained for beating woman in KTV box toilet)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8KTV%E5%8C%85%E5%8E%A2%E5%8E%95%E6%89%80%E6%AE%B4%E6%89%93%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%88%91%E6%8B%98%23) `378.2K 🔥` `+172%`
1. [为什么建议定期更换水杯](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BB%BA%E8%AE%AE%E5%AE%9A%E6%9C%9F%E6%9B%B4%E6%8D%A2%E6%B0%B4%E6%9D%AF%23) `331.9K 🔥` `+57%`
1. [李嘉诚戴400美元西铁城](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E8%AF%9A%E6%88%B4400%E7%BE%8E%E5%85%83%E8%A5%BF%E9%93%81%E5%9F%8E%23) `260.4K 🔥` `+78%`
1. [日本公务人员与情人开房时出席线上会 (Japanese civil servants attended an online meeting with their lover when they checked into a hotel room)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%85%AC%E5%8A%A1%E4%BA%BA%E5%91%98%E4%B8%8E%E6%83%85%E4%BA%BA%E5%BC%80%E6%88%BF%E6%97%B6%E5%87%BA%E5%B8%AD%E7%BA%BF%E4%B8%8A%E4%BC%9A%23) `256.0K 🔥` `+21%`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `253.2K 🔥` `+76%`
1. [大王瘦了47斤](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%8E%8B%E7%98%A6%E4%BA%8647%E6%96%A4%23) `224.9K 🔥` `+37%`
1. [TF四代 新加坡](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%20%E6%96%B0%E5%8A%A0%E5%9D%A1%23) `222.8K 🔥` `+44%`
1. [LV将彻底退出贵州市场](https://s.weibo.com/weibo?q=%23LV%E5%B0%86%E5%BD%BB%E5%BA%95%E9%80%80%E5%87%BA%E8%B4%B5%E5%B7%9E%E5%B8%82%E5%9C%BA%23) `1.2M 🔥`
1. [披荆斩棘直播 (Overcoming obstacles live broadcast)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `380.9K 🔥`
1. [微信 按住转文字 (WeChat press and hold to text)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E6%8C%89%E4%BD%8F%E8%BD%AC%E6%96%87%E5%AD%97%23) `339.8K 🔥`
1. [春山境大结局 (The finale of Spring Mountain Realm)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%B1%B1%E5%A2%83%E5%A4%A7%E7%BB%93%E5%B1%80%23) `339.6K 🔥`
1. [中餐厅给张雅琪配了时钟后期](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E7%BB%99%E5%BC%A0%E9%9B%85%E7%90%AA%E9%85%8D%E4%BA%86%E6%97%B6%E9%92%9F%E5%90%8E%E6%9C%9F%23) `337.2K 🔥`
1. [62岁女子生下6斤重婴儿](https://s.weibo.com/weibo?q=%2362%E5%B2%81%E5%A5%B3%E5%AD%90%E7%94%9F%E4%B8%8B6%E6%96%A4%E9%87%8D%E5%A9%B4%E5%84%BF%23) `235.6K 🔥`
1. [迪丽热巴耳洞发炎 (Dilireba's ear piercing is inflamed)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%80%B3%E6%B4%9E%E5%8F%91%E7%82%8E%23) `217.6K 🔥`
1. [黄金 (gold)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `174.2K 🔥`
1. [原来爱真的可以细腻成这样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%88%B1%E7%9C%9F%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%BB%86%E8%85%BB%E6%88%90%E8%BF%99%E6%A0%B7%23) `218.7K 🔥` `-45%`
1. [张子枫瘦得脸颊肉都没了 (Zhang Zifeng was so thin that his cheeks were all gone.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E7%98%A6%E5%BE%97%E8%84%B8%E9%A2%8A%E8%82%89%E9%83%BD%E6%B2%A1%E4%BA%86%23) `182.9K 🔥` `-36%`
1. [第21届金鹿奖入围名单](https://s.weibo.com/weibo?q=%23%E7%AC%AC21%E5%B1%8A%E9%87%91%E9%B9%BF%E5%A5%96%E5%85%A5%E5%9B%B4%E5%90%8D%E5%8D%95%23) `170.6K 🔥` `-45%`

Updated at 2026-08-21 21:02:47

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
