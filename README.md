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

1. [花少8最新阵容 (Hua Shao 8 latest lineup)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E6%9C%80%E6%96%B0%E9%98%B5%E5%AE%B9%23) `985.0K 🔥` `NEW`
1. [来中国玩的外国人更多了](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E4%B8%AD%E5%9B%BD%E7%8E%A9%E7%9A%84%E5%A4%96%E5%9B%BD%E4%BA%BA%E6%9B%B4%E5%A4%9A%E4%BA%86%23) `977.2K 🔥` `NEW`
1. [国乒男团进世乒赛8强](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E8%BF%9B%E4%B8%96%E4%B9%92%E8%B5%9B8%E5%BC%BA%23) `973.2K 🔥` `NEW`
1. [三星](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%23) `962.4K 🔥` `NEW`
1. [双影队友太厉害了怎么办](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E5%BD%B1%E9%98%9F%E5%8F%8B%E5%A4%AA%E5%8E%89%E5%AE%B3%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E%23) `834.6K 🔥` `NEW`
1. [王楚钦这一分全体起立](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%BF%99%E4%B8%80%E5%88%86%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%23) `771.6K 🔥` `NEW`
1. [龙队急得直挠头](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%98%9F%E6%80%A5%E5%BE%97%E7%9B%B4%E6%8C%A0%E5%A4%B4%23) `760.3K 🔥` `NEW`
1. [三星家电退出大陆市场](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%AE%B6%E7%94%B5%E9%80%80%E5%87%BA%E5%A4%A7%E9%99%86%E5%B8%82%E5%9C%BA%23) `549.4K 🔥` `NEW`
1. [王曼昱11比0卡尔伯格](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B111%E6%AF%940%E5%8D%A1%E5%B0%94%E4%BC%AF%E6%A0%BC%23) `542.7K 🔥` `NEW`
1. [傅首尔瘦到认不出了](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%E4%BA%86%23) `524.2K 🔥` `NEW`
1. [爱情没有神话 (Love has no myth)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%B2%A1%E6%9C%89%E7%A5%9E%E8%AF%9D%23) `496.6K 🔥` `NEW`
1. [新人结婚被丢高速口路过宾利变婚车](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%BA%BA%E7%BB%93%E5%A9%9A%E8%A2%AB%E4%B8%A2%E9%AB%98%E9%80%9F%E5%8F%A3%E8%B7%AF%E8%BF%87%E5%AE%BE%E5%88%A9%E5%8F%98%E5%A9%9A%E8%BD%A6%23) `475.3K 🔥` `NEW`
1. [前体操冠军吴柳芳回应擦边不体面](https://s.weibo.com/weibo?q=%23%E5%89%8D%E4%BD%93%E6%93%8D%E5%86%A0%E5%86%9B%E5%90%B4%E6%9F%B3%E8%8A%B3%E5%9B%9E%E5%BA%94%E6%93%A6%E8%BE%B9%E4%B8%8D%E4%BD%93%E9%9D%A2%23) `458.6K 🔥` `NEW`
1. [全李酒店 全季酒店](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%9D%8E%E9%85%92%E5%BA%97%20%E5%85%A8%E5%AD%A3%E9%85%92%E5%BA%97%23) `401.0K 🔥` `NEW`
1. [国乒女团进八强](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E8%BF%9B%E5%85%AB%E5%BC%BA%23) `362.5K 🔥` `NEW`
1. [孙颖莎3比0伯格斯特隆](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E3%E6%AF%940%E4%BC%AF%E6%A0%BC%E6%96%AF%E7%89%B9%E9%9A%86%23) `361.4K 🔥` `NEW`
1. [兜儿回应女儿像小猪妹](https://s.weibo.com/weibo?q=%23%E5%85%9C%E5%84%BF%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%84%BF%E5%83%8F%E5%B0%8F%E7%8C%AA%E5%A6%B9%23) `340.6K 🔥` `NEW`
1. [为什么户外千万不要穿迷彩](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%B7%E5%A4%96%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%A9%BF%E8%BF%B7%E5%BD%A9%23) `333.8K 🔥` `NEW`
1. [高市早苗下跪演给谁看](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E4%B8%8B%E8%B7%AA%E6%BC%94%E7%BB%99%E8%B0%81%E7%9C%8B%23) `275.3K 🔥` `NEW`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `269.9K 🔥` `NEW`
1. [小狗靠捡瓶子攒了10万 (Puppy saved 100,000 by picking up bottles)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E9%9D%A0%E6%8D%A1%E7%93%B6%E5%AD%90%E6%94%92%E4%BA%8610%E4%B8%87%23) `251.7K 🔥` `NEW`
1. [病毒邮轮](https://s.weibo.com/weibo?q=%23%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%23) `217.9K 🔥` `NEW`
1. [韩汶栩与女友手牵手在老家逛街](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%E4%B8%8E%E5%A5%B3%E5%8F%8B%E6%89%8B%E7%89%B5%E6%89%8B%E5%9C%A8%E8%80%81%E5%AE%B6%E9%80%9B%E8%A1%97%23) `207.2K 🔥` `NEW`
1. [低智商犯罪口碑发酵](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%E5%8F%A3%E7%A2%91%E5%8F%91%E9%85%B5%23) `205.5K 🔥` `NEW`
1. [王曼昱这一分直接给到夯](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%BF%99%E4%B8%80%E5%88%86%E7%9B%B4%E6%8E%A5%E7%BB%99%E5%88%B0%E5%A4%AF%23) `205.4K 🔥` `NEW`
1. [低智商犯罪 喜剧](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%20%E5%96%9C%E5%89%A7%23) `201.5K 🔥` `NEW`
1. [王皓老实人最后的倔强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E8%80%81%E5%AE%9E%E4%BA%BA%E6%9C%80%E5%90%8E%E7%9A%84%E5%80%94%E5%BC%BA%23) `198.4K 🔥` `NEW`
1. [王曼昱vs卡尔伯格](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E5%8D%A1%E5%B0%94%E4%BC%AF%E6%A0%BC%23) `191.4K 🔥` `NEW`
1. [秦昊女儿9岁身高](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E5%A5%B3%E5%84%BF9%E5%B2%81%E8%BA%AB%E9%AB%98%23) `160.4K 🔥` `NEW`
1. [开卦灌汤包改名半年就倒闭了](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%8D%A6%E7%81%8C%E6%B1%A4%E5%8C%85%E6%94%B9%E5%90%8D%E5%8D%8A%E5%B9%B4%E5%B0%B1%E5%80%92%E9%97%AD%E4%BA%86%23) `153.2K 🔥` `NEW`
1. [白鹿跑男争议 内娱综艺审美巨变 (White Deer Running Man Controversy, Aesthetic Changes in Domestic Entertainment Variety Shows)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%91%E7%94%B7%E4%BA%89%E8%AE%AE%20%E5%86%85%E5%A8%B1%E7%BB%BC%E8%89%BA%E5%AE%A1%E7%BE%8E%E5%B7%A8%E5%8F%98%23) `976.2K 🔥` `+126%`
1. [中国强硬拒绝世界杯天价转播费](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%BA%E7%A1%AC%E6%8B%92%E7%BB%9D%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%A9%E4%BB%B7%E8%BD%AC%E6%92%AD%E8%B4%B9%23) `1.3M 🔥`
1. [花少 恋综 (Hua Shao Lian Zong)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%20%E6%81%8B%E7%BB%BC%23) `512.6K 🔥`
1. [英伟达中国份额降至0](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%B8%AD%E5%9B%BD%E4%BB%BD%E9%A2%9D%E9%99%8D%E8%87%B30%23) `454.6K 🔥`
1. [张子枫手臂都是伤疤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E6%89%8B%E8%87%82%E9%83%BD%E6%98%AF%E4%BC%A4%E7%96%A4%23) `430.6K 🔥`
1. [时代峰峻回应穆祉丞没饭撒 (Shi Fengjun responded to Mu Zhicheng’s lack of food)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9B%9E%E5%BA%94%E7%A9%86%E7%A5%89%E4%B8%9E%E6%B2%A1%E9%A5%AD%E6%92%92%23) `362.0K 🔥`
1. [杨迪 喜欢谢娜不是一件丢人的事](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%BF%AA%20%E5%96%9C%E6%AC%A2%E8%B0%A2%E5%A8%9C%E4%B8%8D%E6%98%AF%E4%B8%80%E4%BB%B6%E4%B8%A2%E4%BA%BA%E7%9A%84%E4%BA%8B%23) `361.9K 🔥`
1. [合作演员为卢昱晓发声](https://s.weibo.com/weibo?q=%23%E5%90%88%E4%BD%9C%E6%BC%94%E5%91%98%E4%B8%BA%E5%8D%A2%E6%98%B1%E6%99%93%E5%8F%91%E5%A3%B0%23) `334.9K 🔥`
1. [猴子坐崖边男子偷偷靠近猛推](https://s.weibo.com/weibo?q=%23%E7%8C%B4%E5%AD%90%E5%9D%90%E5%B4%96%E8%BE%B9%E7%94%B7%E5%AD%90%E5%81%B7%E5%81%B7%E9%9D%A0%E8%BF%91%E7%8C%9B%E6%8E%A8%23) `192.9K 🔥`
1. [油价暴跌了](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%9A%B4%E8%B7%8C%E4%BA%86%23) `411.9K 🔥` `-29%`
1. [梁靖崑0比3E约内斯库 (Liang Jingkun 0-3E Ionescu)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%910%E6%AF%943E%E7%BA%A6%E5%86%85%E6%96%AF%E5%BA%93%23) `335.2K 🔥` `-79%`
1. [海底捞保洁藏顾客手机并试图寄走](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E4%BF%9D%E6%B4%81%E8%97%8F%E9%A1%BE%E5%AE%A2%E6%89%8B%E6%9C%BA%E5%B9%B6%E8%AF%95%E5%9B%BE%E5%AF%84%E8%B5%B0%23) `303.6K 🔥` `-62%`
1. [给阿嬷的情书 电影还有救](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E7%94%B5%E5%BD%B1%E8%BF%98%E6%9C%89%E6%95%91%23) `270.4K 🔥` `-50%`
1. [中国男团vs罗马尼亚 (Chinese men's team vs Romania)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2vs%E7%BD%97%E9%A9%AC%E5%B0%BC%E4%BA%9A%23) `258.7K 🔥` `-80%`
1. [昔日网红自嗨锅破产](https://s.weibo.com/weibo?q=%23%E6%98%94%E6%97%A5%E7%BD%91%E7%BA%A2%E8%87%AA%E5%97%A8%E9%94%85%E7%A0%B4%E4%BA%A7%23) `205.3K 🔥` `-45%`
1. [孟子义丁禹兮 无尽夏](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%81%E7%A6%B9%E5%85%AE%20%E6%97%A0%E5%B0%BD%E5%A4%8F%23) `183.1K 🔥` `-21%`
1. [女子宫外孕胚胎长在人体最粗血管上](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AE%AB%E5%A4%96%E5%AD%95%E8%83%9A%E8%83%8E%E9%95%BF%E5%9C%A8%E4%BA%BA%E4%BD%93%E6%9C%80%E7%B2%97%E8%A1%80%E7%AE%A1%E4%B8%8A%23) `180.9K 🔥` `-28%`
1. [经常尬拍的人才知道她有多牛](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E5%B8%B8%E5%B0%AC%E6%8B%8D%E7%9A%84%E4%BA%BA%E6%89%8D%E7%9F%A5%E9%81%93%E5%A5%B9%E6%9C%89%E5%A4%9A%E7%89%9B%23) `166.2K 🔥` `-22%`
1. [刘宇宁像巨人一样就出来了 (Liu Yuning came out like a giant)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%83%8F%E5%B7%A8%E4%BA%BA%E4%B8%80%E6%A0%B7%E5%B0%B1%E5%87%BA%E6%9D%A5%E4%BA%86%23) `162.4K 🔥` `-54%`

Updated at 2026-05-06 21:08:25

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
