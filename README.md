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

1. [女子照顾瘫痪丈夫19年想有个孩子 (Woman takes care of her paralyzed husband for 19 years and wants to have a child)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%85%A7%E9%A1%BE%E7%98%AB%E7%97%AA%E4%B8%88%E5%A4%AB19%E5%B9%B4%E6%83%B3%E6%9C%89%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `1.2M 🔥` `NEW`
1. [数读我国创新全方位加速突破](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E6%88%91%E5%9B%BD%E5%88%9B%E6%96%B0%E5%85%A8%E6%96%B9%E4%BD%8D%E5%8A%A0%E9%80%9F%E7%AA%81%E7%A0%B4%23) `786.6K 🔥` `NEW`
1. [那些舍不得快进的综艺舞台](https://s.weibo.com/weibo?q=%23%E9%82%A3%E4%BA%9B%E8%88%8D%E4%B8%8D%E5%BE%97%E5%BF%AB%E8%BF%9B%E7%9A%84%E7%BB%BC%E8%89%BA%E8%88%9E%E5%8F%B0%23) `642.2K 🔥` `NEW`
1. [刘耀文solo好牛](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87solo%E5%A5%BD%E7%89%9B%23) `641.2K 🔥` `NEW`
1. [上海申花vs成都蓉城](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B3%E8%8A%B1vs%E6%88%90%E9%83%BD%E8%93%89%E5%9F%8E%23) `372.8K 🔥` `NEW`
1. [王菲 你管她干啥](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%20%E4%BD%A0%E7%AE%A1%E5%A5%B9%E5%B9%B2%E5%95%A5%23) `372.2K 🔥` `NEW`
1. [难听](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `369.1K 🔥` `NEW`
1. [曝包洁仪整牙花了5万4](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8C%85%E6%B4%81%E4%BB%AA%E6%95%B4%E7%89%99%E8%8A%B1%E4%BA%865%E4%B8%874%23) `365.7K 🔥` `NEW`
1. [宋亚轩遗失的心跳solo](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E9%81%97%E5%A4%B1%E7%9A%84%E5%BF%83%E8%B7%B3solo%23) `364.5K 🔥` `NEW`
1. [火车票开售即售罄的原因找到了](https://s.weibo.com/weibo?q=%23%E7%81%AB%E8%BD%A6%E7%A5%A8%E5%BC%80%E5%94%AE%E5%8D%B3%E5%94%AE%E7%BD%84%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `358.3K 🔥` `NEW`
1. [主人经期贫血晕厥2只狗子立大功 (The owner suffered from menstrual anemia and fainted, and the two dogs made great achievements)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E7%BB%8F%E6%9C%9F%E8%B4%AB%E8%A1%80%E6%99%95%E5%8E%A52%E5%8F%AA%E7%8B%97%E5%AD%90%E7%AB%8B%E5%A4%A7%E5%8A%9F%23) `335.2K 🔥` `NEW`
1. [伊朗递交最新谈判方案](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%92%E4%BA%A4%E6%9C%80%E6%96%B0%E8%B0%88%E5%88%A4%E6%96%B9%E6%A1%88%23) `235.6K 🔥` `NEW`
1. [刘耀文 暴雨来袭前一秒](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%20%E6%9A%B4%E9%9B%A8%E6%9D%A5%E8%A2%AD%E5%89%8D%E4%B8%80%E7%A7%92%23) `220.2K 🔥` `NEW`
1. [台湾地震](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%9C%B0%E9%9C%87%23) `204.8K 🔥` `NEW`
1. [小猫被小龙虾一击必杀](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%A2%AB%E5%B0%8F%E9%BE%99%E8%99%BE%E4%B8%80%E5%87%BB%E5%BF%85%E6%9D%80%23) `196.6K 🔥` `NEW`
1. [张雪机车练习赛第11名](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%BB%83%E4%B9%A0%E8%B5%9B%E7%AC%AC11%E5%90%8D%23) `193.3K 🔥` `NEW`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `193.0K 🔥` `NEW`
1. [突然就没有年龄焦虑了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%B0%B1%E6%B2%A1%E6%9C%89%E5%B9%B4%E9%BE%84%E7%84%A6%E8%99%91%E4%BA%86%23) `177.0K 🔥` `NEW`
1. [鞠婧祎五一plog](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%BA%94%E4%B8%80plog%23) `155.2K 🔥` `NEW`
1. [长沙街头武警帅到游客争相拍照](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E8%A1%97%E5%A4%B4%E6%AD%A6%E8%AD%A6%E5%B8%85%E5%88%B0%E6%B8%B8%E5%AE%A2%E4%BA%89%E7%9B%B8%E6%8B%8D%E7%85%A7%23) `154.8K 🔥` `NEW`
1. [陈奕恒你逗我玩是吧 (Chen Yiheng, are you kidding me?)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E4%BD%A0%E9%80%97%E6%88%91%E7%8E%A9%E6%98%AF%E5%90%A7%23) `153.5K 🔥` `NEW`
1. [这不叫堵车 这叫铺红地毯](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8D%E5%8F%AB%E5%A0%B5%E8%BD%A6%20%E8%BF%99%E5%8F%AB%E9%93%BA%E7%BA%A2%E5%9C%B0%E6%AF%AF%23) `643.2K 🔥` `+97%`
1. [HLE对战T1](https://s.weibo.com/weibo?q=%23HLE%E5%AF%B9%E6%88%98T1%23) `356.7K 🔥` `+176%`
1. [安全背后有乾崑](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%85%A8%E8%83%8C%E5%90%8E%E6%9C%89%E4%B9%BE%E5%B4%91%23) `784.7K 🔥`
1. [真的有人能成功请到这三天假吗 (Can anyone really successfully take these three days off?)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E8%83%BD%E6%88%90%E5%8A%9F%E8%AF%B7%E5%88%B0%E8%BF%99%E4%B8%89%E5%A4%A9%E5%81%87%E5%90%97%23) `783.0K 🔥`
1. [发明创可贴当鼠标垫的是天才 (The person who invented Band-Aid as a mouse pad is a genius)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%98%8E%E5%88%9B%E5%8F%AF%E8%B4%B4%E5%BD%93%E9%BC%A0%E6%A0%87%E5%9E%AB%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%23) `741.7K 🔥`
1. [什么细节让你觉得一个人可靠](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E7%BB%86%E8%8A%82%E8%AE%A9%E4%BD%A0%E8%A7%89%E5%BE%97%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%8F%AF%E9%9D%A0%23) `375.9K 🔥`
1. [陈芋汐卢为10米台金牌 (Chen Yuxilu wins gold medal in 10m platform)](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%8A%8B%E6%B1%90%E5%8D%A2%E4%B8%BA10%E7%B1%B3%E5%8F%B0%E9%87%91%E7%89%8C%23) `374.2K 🔥`
1. [李建宏讣告](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%BB%BA%E5%AE%8F%E8%AE%A3%E5%91%8A%23) `367.2K 🔥`
1. [孙颖莎穿上羽绒服了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%A9%BF%E4%B8%8A%E7%BE%BD%E7%BB%92%E6%9C%8D%E4%BA%86%23) `362.6K 🔥`
1. [美伊停火谈判](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E8%B0%88%E5%88%A4%23) `360.9K 🔥`
1. [金靖回应瘦到认不出](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%9B%9E%E5%BA%94%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%23) `355.0K 🔥`
1. [警方回应莫氏鸡煲已报警](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `352.9K 🔥`
1. [景区回应刘晓庆和王婆互动冷淡 (The scenic spot responded to the indifferent interaction between Liu Xiaoqing and Wang Po)](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%8C%BA%E5%9B%9E%E5%BA%94%E5%88%98%E6%99%93%E5%BA%86%E5%92%8C%E7%8E%8B%E5%A9%86%E4%BA%92%E5%8A%A8%E5%86%B7%E6%B7%A1%23) `343.7K 🔥`
1. [一吻定情女主结婚 (The heroine gets married with a kiss)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%90%BB%E5%AE%9A%E6%83%85%E5%A5%B3%E4%B8%BB%E7%BB%93%E5%A9%9A%23) `342.7K 🔥`
1. [时代少年团演唱会节目单](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `331.6K 🔥`
1. [曾沛慈一把牵走张慧雯](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%80%E6%8A%8A%E7%89%B5%E8%B5%B0%E5%BC%A0%E6%85%A7%E9%9B%AF%23) `261.5K 🔥`
1. [金靖说减脂最关键是保暖和睡眠](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E8%AF%B4%E5%87%8F%E8%84%82%E6%9C%80%E5%85%B3%E9%94%AE%E6%98%AF%E4%BF%9D%E6%9A%96%E5%92%8C%E7%9D%A1%E7%9C%A0%23) `239.2K 🔥`
1. [甲亢哥在深圳买的手机掉海里了 (The mobile phone bought by the hyperthyroid brother in Shenzhen fell into the sea)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E4%BA%A2%E5%93%A5%E5%9C%A8%E6%B7%B1%E5%9C%B3%E4%B9%B0%E7%9A%84%E6%89%8B%E6%9C%BA%E6%8E%89%E6%B5%B7%E9%87%8C%E4%BA%86%23) `865.2K 🔥` `-22%`
1. [张真源唱在加纳共和国离婚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%94%B1%E5%9C%A8%E5%8A%A0%E7%BA%B3%E5%85%B1%E5%92%8C%E5%9B%BD%E7%A6%BB%E5%A9%9A%23) `353.6K 🔥` `-36%`
1. [女子被AI误导闯入毒蛇窝](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%ABAI%E8%AF%AF%E5%AF%BC%E9%97%AF%E5%85%A5%E6%AF%92%E8%9B%87%E7%AA%9D%23) `246.7K 🔥` `-36%`
1. [阚清子为穿仙女裙有多拼](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E4%B8%BA%E7%A9%BF%E4%BB%99%E5%A5%B3%E8%A3%99%E6%9C%89%E5%A4%9A%E6%8B%BC%23) `232.9K 🔥` `-28%`
1. [严浩翔FLY台风 (Yan Haoxiang FLY Typhoon)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94FLY%E5%8F%B0%E9%A3%8E%23) `199.5K 🔥` `-39%`
1. [张檬坚持给一岁儿子喂母乳](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%AA%AC%E5%9D%9A%E6%8C%81%E7%BB%99%E4%B8%80%E5%B2%81%E5%84%BF%E5%AD%90%E5%96%82%E6%AF%8D%E4%B9%B3%23) `197.6K 🔥` `-39%`
1. [马嘉祺夏宫solo舞台](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%A4%8F%E5%AE%ABsolo%E8%88%9E%E5%8F%B0%23) `195.7K 🔥` `-40%`
1. [顾茜茜怀孕五个月了 (Gu Qianqian is five months pregnant)](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E8%8C%9C%E8%8C%9C%E6%80%80%E5%AD%95%E4%BA%94%E4%B8%AA%E6%9C%88%E4%BA%86%23) `194.6K 🔥` `-41%`
1. [TF家族 物料](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%20%E7%89%A9%E6%96%99%23) `191.3K 🔥` `-42%`
1. [张峻豪伴手礼 (Zhang Junhao souvenirs)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B3%BB%E8%B1%AA%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `170.0K 🔥` `-48%`
1. [Angelababy的五月行程](https://s.weibo.com/weibo?q=%23Angelababy%E7%9A%84%E4%BA%94%E6%9C%88%E8%A1%8C%E7%A8%8B%23) `154.8K 🔥` `-35%`
1. [美国人把英国国旗挂反了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BA%BA%E6%8A%8A%E8%8B%B1%E5%9B%BD%E5%9B%BD%E6%97%97%E6%8C%82%E5%8F%8D%E4%BA%86%23) `152.3K 🔥` `-49%`
1. [奔跑吧 (run)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `151.4K 🔥` `-82%`
1. [过桥咪线](https://s.weibo.com/weibo?q=%23%E8%BF%87%E6%A1%A5%E5%92%AA%E7%BA%BF%23) `149.1K 🔥` `-54%`

Updated at 2026-05-01 22:05:56

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
