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

1. [田曦薇我镜头下你的眼睛 (Tian Xiwei, your eyes under my lens)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%88%91%E9%95%9C%E5%A4%B4%E4%B8%8B%E4%BD%A0%E7%9A%84%E7%9C%BC%E7%9D%9B%23) `19.8K 🔥` `NEW`
1. [网警提醒看不见的虚假更要防](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%AD%A6%E6%8F%90%E9%86%92%E7%9C%8B%E4%B8%8D%E8%A7%81%E7%9A%84%E8%99%9A%E5%81%87%E6%9B%B4%E8%A6%81%E9%98%B2%23) `60.6K 🔥`
1. [周小闹回应刘文祥塌房 (Zhou Xiaonao responded to Liu Wenxiang’s house collapse)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%B0%8F%E9%97%B9%E5%9B%9E%E5%BA%94%E5%88%98%E6%96%87%E7%A5%A5%E5%A1%8C%E6%88%BF%23) `52.7K 🔥`
1. [伊朗发射泥石弹道导弹 (Iran launches mud-rock ballistic missile)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B0%84%E6%B3%A5%E7%9F%B3%E5%BC%B9%E9%81%93%E5%AF%BC%E5%BC%B9%23) `52.3K 🔥`
1. [315晚会](https://s.weibo.com/weibo?q=%23315%E6%99%9A%E4%BC%9A%23) `51.4K 🔥`
1. [医美骗局 (Medical Beauty Scam)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%BE%8E%E9%AA%97%E5%B1%80%23) `48.4K 🔥`
1. [外泌体](https://s.weibo.com/weibo?q=%23%E5%A4%96%E6%B3%8C%E4%BD%93%23) `41.9K 🔥`
1. [医用级卫生巾 (Medical grade sanitary napkin)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%A8%E7%BA%A7%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `35.4K 🔥`
1. [给AI投毒](https://s.weibo.com/weibo?q=%23%E7%BB%99AI%E6%8A%95%E6%AF%92%23) `34.5K 🔥`
1. [原来电商图是这样生成的 (It turns out that this is how the e-commerce diagram is generated)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%94%B5%E5%95%86%E5%9B%BE%E6%98%AF%E8%BF%99%E6%A0%B7%E7%94%9F%E6%88%90%E7%9A%84%23) `30.4K 🔥`
1. [伊朗攻击美战机支援基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%94%BB%E5%87%BB%E7%BE%8E%E6%88%98%E6%9C%BA%E6%94%AF%E6%8F%B4%E5%9F%BA%E5%9C%B0%23) `28.9K 🔥`
1. [双氧水鸡爪](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E6%B0%A7%E6%B0%B4%E9%B8%A1%E7%88%AA%23) `27.6K 🔥`
1. [爱吃毛肚的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E6%AF%9B%E8%82%9A%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `26.5K 🔥`
1. [今年315晚会它们都被曝光了 (They were all exposed at this year’s 315 party)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4315%E6%99%9A%E4%BC%9A%E5%AE%83%E4%BB%AC%E9%83%BD%E8%A2%AB%E6%9B%9D%E5%85%89%E4%BA%86%23) `24.5K 🔥`
1. [司宫令 (Si Gong Ling)](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E5%AE%AB%E4%BB%A4%23) `22.3K 🔥`
1. [315晚会曝光AI大模型被投毒](https://s.weibo.com/weibo?q=%23315%E6%99%9A%E4%BC%9A%E6%9B%9D%E5%85%89AI%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%A2%AB%E6%8A%95%E6%AF%92%23) `21.7K 🔥`
1. [315曝光名单 (315 exposure list)](https://s.weibo.com/weibo?q=%23315%E6%9B%9D%E5%85%89%E5%90%8D%E5%8D%95%23) `231.3K 🔥` `-23%`
1. [有友食品声明 (Youyou Food Statement)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%8F%8B%E9%A3%9F%E5%93%81%E5%A3%B0%E6%98%8E%23) `67.3K 🔥` `-24%`
1. [椰子水 兑水加糖](https://s.weibo.com/weibo?q=%23%E6%A4%B0%E5%AD%90%E6%B0%B4%20%E5%85%91%E6%B0%B4%E5%8A%A0%E7%B3%96%23) `56.9K 🔥` `-21%`
1. [315曝光的鸡爪公司股东也在看晚会 (The shareholders of the chicken feet company exposed on March 15 were also watching the party)](https://s.weibo.com/weibo?q=%23315%E6%9B%9D%E5%85%89%E7%9A%84%E9%B8%A1%E7%88%AA%E5%85%AC%E5%8F%B8%E8%82%A1%E4%B8%9C%E4%B9%9F%E5%9C%A8%E7%9C%8B%E6%99%9A%E4%BC%9A%23) `41.1K 🔥` `-22%`
1. [逐玉 李卿 (Zhuyu Li Qing)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E6%9D%8E%E5%8D%BF%23) `38.8K 🔥` `-28%`
1. [给AI投毒已成产业链](https://s.weibo.com/weibo?q=%23%E7%BB%99AI%E6%8A%95%E6%AF%92%E5%B7%B2%E6%88%90%E4%BA%A7%E4%B8%9A%E9%93%BE%23) `37.3K 🔥` `-31%`
1. [刘文祥这泼天的富贵你都没接住 (You haven’t even caught Liu Wenxiang’s incredible wealth.)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E8%BF%99%E6%B3%BC%E5%A4%A9%E7%9A%84%E5%AF%8C%E8%B4%B5%E4%BD%A0%E9%83%BD%E6%B2%A1%E6%8E%A5%E4%BD%8F%23) `23.6K 🔥` `-24%`
1. [中国仙侠剧凡人修仙传火爆全球](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BB%99%E4%BE%A0%E5%89%A7%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%E7%81%AB%E7%88%86%E5%85%A8%E7%90%83%23) `22.7K 🔥` `-38%`
1. [老师标配的小蜜蜂该用还是该禁 (Should the teacher’s standard bee be used or banned?)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E6%A0%87%E9%85%8D%E7%9A%84%E5%B0%8F%E8%9C%9C%E8%9C%82%E8%AF%A5%E7%94%A8%E8%BF%98%E6%98%AF%E8%AF%A5%E7%A6%81%23) `22.5K 🔥` `-27%`
1. [孙燕姿演唱会 (Stefanie Sun concert)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `21.7K 🔥` `-24%`
1. [315记者为暗访一个月抽血十几次](https://s.weibo.com/weibo?q=%23315%E8%AE%B0%E8%80%85%E4%B8%BA%E6%9A%97%E8%AE%BF%E4%B8%80%E4%B8%AA%E6%9C%88%E6%8A%BD%E8%A1%80%E5%8D%81%E5%87%A0%E6%AC%A1%23) `19.8K 🔥` `-26%`
1. [刘宇宁快把自己送出去了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%BF%AB%E6%8A%8A%E8%87%AA%E5%B7%B1%E9%80%81%E5%87%BA%E5%8E%BB%E4%BA%86%23) `19.8K 🔥` `-26%`
1. [公司称李羲承不会回归ENHYPEN](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E7%A7%B0%E6%9D%8E%E7%BE%B2%E6%89%BF%E4%B8%8D%E4%BC%9A%E5%9B%9E%E5%BD%92ENHYPEN%23) `19.8K 🔥` `-26%`
1. [有友鸡爪否认使用双氧水](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%8F%8B%E9%B8%A1%E7%88%AA%E5%90%A6%E8%AE%A4%E4%BD%BF%E7%94%A8%E5%8F%8C%E6%B0%A7%E6%B0%B4%23) `19.8K 🔥` `-26%`
1. [老人8万贱卖劳力士充值理发店 (Elderly man sells Rolex rechargeable barber shop for NT$80,000)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA8%E4%B8%87%E8%B4%B1%E5%8D%96%E5%8A%B3%E5%8A%9B%E5%A3%AB%E5%85%85%E5%80%BC%E7%90%86%E5%8F%91%E5%BA%97%23) `19.8K 🔥` `-26%`
1. [田曦薇芭比脸金刚身](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%8A%AD%E6%AF%94%E8%84%B8%E9%87%91%E5%88%9A%E8%BA%AB%23) `19.8K 🔥` `-26%`
1. [网红西梅汁实则暗藏强效泻药 (Internet celebrity prune juice actually contains a powerful laxative)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E8%A5%BF%E6%A2%85%E6%B1%81%E5%AE%9E%E5%88%99%E6%9A%97%E8%97%8F%E5%BC%BA%E6%95%88%E6%B3%BB%E8%8D%AF%23) `19.8K 🔥` `-26%`
1. [刘宇宁在最猛的年纪又野又欲 (Liu Yuning was wild and lustful at his most ferocious age)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%9C%A8%E6%9C%80%E7%8C%9B%E7%9A%84%E5%B9%B4%E7%BA%AA%E5%8F%88%E9%87%8E%E5%8F%88%E6%AC%B2%23) `19.8K 🔥` `-68%`
1. [在外婆家里翻出过期了26年的东西 (I found something that was 26 years out of date at my grandma’s house.)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%A4%96%E5%A9%86%E5%AE%B6%E9%87%8C%E7%BF%BB%E5%87%BA%E8%BF%87%E6%9C%9F%E4%BA%8626%E5%B9%B4%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `19.8K 🔥` `-26%`
1. [谢征什么叫我们没在一起过 (Xie Zheng, what do you mean we have never been together?)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E4%BB%80%E4%B9%88%E5%8F%AB%E6%88%91%E4%BB%AC%E6%B2%A1%E5%9C%A8%E4%B8%80%E8%B5%B7%E8%BF%87%23) `19.8K 🔥` `-26%`
1. [电视剧品质盛典 (TV Series Quality Ceremony)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E5%93%81%E8%B4%A8%E7%9B%9B%E5%85%B8%23) `19.8K 🔥` `-26%`
1. [文淇 我已经反思了](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%20%E6%88%91%E5%B7%B2%E7%BB%8F%E5%8F%8D%E6%80%9D%E4%BA%86%23) `19.8K 🔥` `-37%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `19.8K 🔥` `-26%`
1. [李宇春吴青峰都哭了 (Li Yuchun and Wu Qingfeng both cried)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E5%90%B4%E9%9D%92%E5%B3%B0%E9%83%BD%E5%93%AD%E4%BA%86%23) `19.8K 🔥` `-26%`
1. [刘文祥麻辣烫在杂物间煎鸡蛋](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E9%BA%BB%E8%BE%A3%E7%83%AB%E5%9C%A8%E6%9D%82%E7%89%A9%E9%97%B4%E7%85%8E%E9%B8%A1%E8%9B%8B%23) `19.8K 🔥` `-26%`
1. [章昊哭了](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%98%8A%E5%93%AD%E4%BA%86%23) `19.8K 🔥` `-26%`
1. [亚洲电影大奖](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%B4%B2%E7%94%B5%E5%BD%B1%E5%A4%A7%E5%A5%96%23) `19.8K 🔥` `-26%`
1. [胖东来要求博主删除视频](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%A6%81%E6%B1%82%E5%8D%9A%E4%B8%BB%E5%88%A0%E9%99%A4%E8%A7%86%E9%A2%91%23) `19.8K 🔥` `-26%`
1. [等风热吻你看到了网友的呼吁 (Wait for the wind to kiss you and see the appeal from netizens)](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%E7%9C%8B%E5%88%B0%E4%BA%86%E7%BD%91%E5%8F%8B%E7%9A%84%E5%91%BC%E5%90%81%23) `19.8K 🔥` `-39%`
1. [315](https://s.weibo.com/weibo?q=%23315%23) `19.8K 🔥` `-39%`
1. [曼联vs阿斯顿维拉](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%94vs%E9%98%BF%E6%96%AF%E9%A1%BF%E7%BB%B4%E6%8B%89%23) `19.8K 🔥` `-26%`
1. [驻法兰克福总领事观战樊振东](https://s.weibo.com/weibo?q=%23%E9%A9%BB%E6%B3%95%E5%85%B0%E5%85%8B%E7%A6%8F%E6%80%BB%E9%A2%86%E4%BA%8B%E8%A7%82%E6%88%98%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `19.8K 🔥` `-26%`

Updated at 2026-03-16 03:37:25

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
