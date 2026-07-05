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

1. [奶奶删了77万条未读又来3万 (Grandma deleted 770,000 unread messages and received another 30,000.)](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E5%88%A0%E4%BA%8677%E4%B8%87%E6%9D%A1%E6%9C%AA%E8%AF%BB%E5%8F%88%E6%9D%A53%E4%B8%87%23) `1.7M 🔥` `NEW`
1. [已经对所有自助烤肉祛魅了](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E5%AF%B9%E6%89%80%E6%9C%89%E8%87%AA%E5%8A%A9%E7%83%A4%E8%82%89%E7%A5%9B%E9%AD%85%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [TES道歉](https://s.weibo.com/weibo?q=%23TES%E9%81%93%E6%AD%89%23) `1.0M 🔥` `NEW`
1. [朋友是远香近臭的](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E6%98%AF%E8%BF%9C%E9%A6%99%E8%BF%91%E8%87%AD%E7%9A%84%23) `584.4K 🔥` `NEW`
1. [野狗骨头好好看](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%A5%BD%E5%A5%BD%E7%9C%8B%23) `393.6K 🔥` `NEW`
1. [我欲乘风 虞书欣](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%20%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `373.1K 🔥` `NEW`
1. [一家三口上高架引争议](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E4%B8%8A%E9%AB%98%E6%9E%B6%E5%BC%95%E4%BA%89%E8%AE%AE%23) `371.1K 🔥` `NEW`
1. [迪丽热巴下次活动请直接租体育场](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%8B%E6%AC%A1%E6%B4%BB%E5%8A%A8%E8%AF%B7%E7%9B%B4%E6%8E%A5%E7%A7%9F%E4%BD%93%E8%82%B2%E5%9C%BA%23) `341.2K 🔥` `NEW`
1. [急诊偶遇王力宏](https://s.weibo.com/weibo?q=%23%E6%80%A5%E8%AF%8A%E5%81%B6%E9%81%87%E7%8E%8B%E5%8A%9B%E5%AE%8F%23) `333.4K 🔥` `NEW`
1. [刘耀文被李晨扯到露后背](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%A2%AB%E6%9D%8E%E6%99%A8%E6%89%AF%E5%88%B0%E9%9C%B2%E5%90%8E%E8%83%8C%23) `304.3K 🔥` `NEW`
1. [微信读书 赛博赎罪 (WeChat Reading Cyber ​​Atonement)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6%20%E8%B5%9B%E5%8D%9A%E8%B5%8E%E7%BD%AA%23) `303.4K 🔥` `NEW`
1. [特朗普皮一下赶紧躲回安全区](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%9A%AE%E4%B8%80%E4%B8%8B%E8%B5%B6%E7%B4%A7%E8%BA%B2%E5%9B%9E%E5%AE%89%E5%85%A8%E5%8C%BA%23) `300.9K 🔥` `NEW`
1. [女生花2000运费给在英男友寄空调](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%8A%B12000%E8%BF%90%E8%B4%B9%E7%BB%99%E5%9C%A8%E8%8B%B1%E7%94%B7%E5%8F%8B%E5%AF%84%E7%A9%BA%E8%B0%83%23) `300.5K 🔥` `NEW`
1. [郭宇欣傲慢吐槽严子贤20分钟](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E5%82%B2%E6%85%A2%E5%90%90%E6%A7%BD%E4%B8%A5%E5%AD%90%E8%B4%A420%E5%88%86%E9%92%9F%23) `297.7K 🔥` `NEW`
1. [一代人有一代人的挂件](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E6%8C%82%E4%BB%B6%23) `295.0K 🔥` `NEW`
1. [刘烨感情时间线](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%83%A8%E6%84%9F%E6%83%85%E6%97%B6%E9%97%B4%E7%BA%BF%23) `293.0K 🔥` `NEW`
1. [黄一鸣女儿新账号被封](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%B8%80%E9%B8%A3%E5%A5%B3%E5%84%BF%E6%96%B0%E8%B4%A6%E5%8F%B7%E8%A2%AB%E5%B0%81%23) `288.9K 🔥` `NEW`
1. [黑石集团放弃全球最大数据中心项目](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%9F%B3%E9%9B%86%E5%9B%A2%E6%94%BE%E5%BC%83%E5%85%A8%E7%90%83%E6%9C%80%E5%A4%A7%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E9%A1%B9%E7%9B%AE%23) `277.3K 🔥` `NEW`
1. [草地牛 恋与深空](https://s.weibo.com/weibo?q=%23%E8%8D%89%E5%9C%B0%E7%89%9B%20%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `277.3K 🔥` `NEW`
1. [李要得50万奖金给司机2万其余全捐](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%A6%81%E5%BE%9750%E4%B8%87%E5%A5%96%E9%87%91%E7%BB%99%E5%8F%B8%E6%9C%BA2%E4%B8%87%E5%85%B6%E4%BD%99%E5%85%A8%E6%8D%90%23) `256.6K 🔥` `NEW`
1. [国家一级文物身上出现TCL广告 (TCL ads appear on national first-class cultural relics)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E4%B8%80%E7%BA%A7%E6%96%87%E7%89%A9%E8%BA%AB%E4%B8%8A%E5%87%BA%E7%8E%B0TCL%E5%B9%BF%E5%91%8A%23) `255.5K 🔥` `NEW`
1. [宋威龙让文淇关特效](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%AE%A9%E6%96%87%E6%B7%87%E5%85%B3%E7%89%B9%E6%95%88%23) `255.3K 🔥` `NEW`
1. [花少8录制路透](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E5%BD%95%E5%88%B6%E8%B7%AF%E9%80%8F%23) `182.7K 🔥` `NEW`
1. [白鹿莫离收官口碑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%E6%94%B6%E5%AE%98%E5%8F%A3%E7%A2%91%23) `176.4K 🔥` `NEW`
1. [遭遇数字围猎的老年人](https://s.weibo.com/weibo?q=%23%E9%81%AD%E9%81%87%E6%95%B0%E5%AD%97%E5%9B%B4%E7%8C%8E%E7%9A%84%E8%80%81%E5%B9%B4%E4%BA%BA%23) `175.2K 🔥` `NEW`
1. [是谁在打扰赵丽颖走红毯](https://s.weibo.com/weibo?q=%23%E6%98%AF%E8%B0%81%E5%9C%A8%E6%89%93%E6%89%B0%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%B5%B0%E7%BA%A2%E6%AF%AF%23) `169.5K 🔥` `NEW`
1. [真正的小众是每天自律的生活](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%B0%8F%E4%BC%97%E6%98%AF%E6%AF%8F%E5%A4%A9%E8%87%AA%E5%BE%8B%E7%9A%84%E7%94%9F%E6%B4%BB%23) `165.6K 🔥` `NEW`
1. [迪丽热巴蓝裙公主](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%93%9D%E8%A3%99%E5%85%AC%E4%B8%BB%23) `160.9K 🔥` `NEW`
1. [HLE对战G2](https://s.weibo.com/weibo?q=%23HLE%E5%AF%B9%E6%88%98G2%23) `157.8K 🔥` `NEW`
1. [范丞丞大背头](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%A4%A7%E8%83%8C%E5%A4%B4%23) `153.4K 🔥` `NEW`
1. [梅里雪山惊现佛得角门将 (Meili Snow Mountain surprises Cape Verde goalkeeper)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E9%87%8C%E9%9B%AA%E5%B1%B1%E6%83%8A%E7%8E%B0%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%23) `1.1M 🔥` `+44%`
1. [他们于无声处创造历史](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%BB%AC%E4%BA%8E%E6%97%A0%E5%A3%B0%E5%A4%84%E5%88%9B%E9%80%A0%E5%8E%86%E5%8F%B2%23) `1.1M 🔥` `+30%`
1. [佛得角旅游](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E6%97%85%E6%B8%B8%23) `811.5K 🔥` `+32%`
1. [LV告完奶茶告鸭血粉丝](https://s.weibo.com/weibo?q=%23LV%E5%91%8A%E5%AE%8C%E5%A5%B6%E8%8C%B6%E5%91%8A%E9%B8%AD%E8%A1%80%E7%B2%89%E4%B8%9D%23) `288.9K 🔥` `+42%`
1. [曝郭宇欣称非科班的抢了科班的戏](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E5%AE%87%E6%AC%A3%E7%A7%B0%E9%9D%9E%E7%A7%91%E7%8F%AD%E7%9A%84%E6%8A%A2%E4%BA%86%E7%A7%91%E7%8F%AD%E7%9A%84%E6%88%8F%23) `362.5K 🔥`
1. [哈兰德大战巴西前理发 (Haaland gets a haircut before Brazil game)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%A7%E6%88%98%E5%B7%B4%E8%A5%BF%E5%89%8D%E7%90%86%E5%8F%91%23) `346.6K 🔥`
1. [张凌赫紧身衣](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%B4%A7%E8%BA%AB%E8%A1%A3%23) `263.9K 🔥`
1. [西藏文旅将兑换承诺奖励李要得50万 (Tibet Cultural Tourism will redeem its promised reward of 500,000 yuan to Li Yao)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%96%87%E6%97%85%E5%B0%86%E5%85%91%E6%8D%A2%E6%89%BF%E8%AF%BA%E5%A5%96%E5%8A%B1%E6%9D%8E%E8%A6%81%E5%BE%9750%E4%B8%87%23) `425.0K 🔥` `-71%`
1. [霉霉婚礼现场照片被泄漏](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%E7%85%A7%E7%89%87%E8%A2%AB%E6%B3%84%E6%BC%8F%23) `353.9K 🔥` `-21%`
1. [有线耳机](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%23) `329.5K 🔥` `-70%`
1. [王力宏缝了39针 (Wang Leehom received 39 stitches)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E7%BC%9D%E4%BA%8639%E9%92%88%23) `296.9K 🔥` `-33%`
1. [TES全败](https://s.weibo.com/weibo?q=%23TES%E5%85%A8%E8%B4%A5%23) `292.2K 🔥` `-64%`
1. [野狗骨头 滤镜 (Wild Dog Bones Filter)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%20%E6%BB%A4%E9%95%9C%23) `279.8K 🔥` `-38%`
1. [嫌顾客点15元麻辣烫老板追出门辱骂](https://s.weibo.com/weibo?q=%23%E5%AB%8C%E9%A1%BE%E5%AE%A2%E7%82%B915%E5%85%83%E9%BA%BB%E8%BE%A3%E7%83%AB%E8%80%81%E6%9D%BF%E8%BF%BD%E5%87%BA%E9%97%A8%E8%BE%B1%E9%AA%82%23) `276.9K 🔥` `-62%`
1. [密逃8官宣阵容 (Escape 8 official lineup announced)](https://s.weibo.com/weibo?q=%23%E5%AF%86%E9%80%838%E5%AE%98%E5%AE%A3%E9%98%B5%E5%AE%B9%23) `191.4K 🔥` `-59%`
1. [TSW战胜TES](https://s.weibo.com/weibo?q=%23TSW%E6%88%98%E8%83%9CTES%23) `184.6K 🔥` `-77%`
1. [以为虞书欣穿泳衣站泳池边上](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%A9%BF%E6%B3%B3%E8%A1%A3%E7%AB%99%E6%B3%B3%E6%B1%A0%E8%BE%B9%E4%B8%8A%23) `175.1K 🔥` `-47%`
1. [戚薇发了蜡烛](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E5%8F%91%E4%BA%86%E8%9C%A1%E7%83%9B%23) `162.7K 🔥` `-63%`
1. [AI都进入吃播时代了](https://s.weibo.com/weibo?q=%23AI%E9%83%BD%E8%BF%9B%E5%85%A5%E5%90%83%E6%92%AD%E6%97%B6%E4%BB%A3%E4%BA%86%23) `158.5K 🔥` `-58%`
1. [年轻人7折抄底法拍房](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA7%E6%8A%98%E6%8A%84%E5%BA%95%E6%B3%95%E6%8B%8D%E6%88%BF%23) `155.0K 🔥` `-55%`

Updated at 2026-07-05 17:58:25

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
