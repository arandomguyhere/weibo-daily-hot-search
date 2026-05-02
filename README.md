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

1. [国乒男团伦敦世乒赛开门红 (National table tennis men's team gets off to a good start at the World Table Tennis Championships in London)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%BC%80%E9%97%A8%E7%BA%A2%23) `57.8K 🔥` `NEW`
1. [1300斤牛被找回暴瘦200斤村民发声](https://s.weibo.com/weibo?q=%231300%E6%96%A4%E7%89%9B%E8%A2%AB%E6%89%BE%E5%9B%9E%E6%9A%B4%E7%98%A6200%E6%96%A4%E6%9D%91%E6%B0%91%E5%8F%91%E5%A3%B0%23) `57.7K 🔥` `NEW`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `57.6K 🔥` `NEW`
1. [中国台北女队教练发文控诉](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E5%A5%B3%E9%98%9F%E6%95%99%E7%BB%83%E5%8F%91%E6%96%87%E6%8E%A7%E8%AF%89%23) `58.6K 🔥` `+24%`
1. [便利店被长相成熟未成年设套买烟 (A mature-looking minor was trapped in a convenience store to buy cigarettes)](https://s.weibo.com/weibo?q=%23%E4%BE%BF%E5%88%A9%E5%BA%97%E8%A2%AB%E9%95%BF%E7%9B%B8%E6%88%90%E7%86%9F%E6%9C%AA%E6%88%90%E5%B9%B4%E8%AE%BE%E5%A5%97%E4%B9%B0%E7%83%9F%23) `58.5K 🔥` `+29%`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `58.4K 🔥` `+29%`
1. [1岁儿子被抢走父亲怀疑奶奶18年 (His 1-year-old son was snatched away and his father suspected his grandmother for 18 years)](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%84%BF%E5%AD%90%E8%A2%AB%E6%8A%A2%E8%B5%B0%E7%88%B6%E4%BA%B2%E6%80%80%E7%96%91%E5%A5%B6%E5%A5%B618%E5%B9%B4%23) `58.4K 🔥` `+29%`
1. [AG确认挑杯八强 (AG confirms the top eight picks of the Cup)](https://s.weibo.com/weibo?q=%23AG%E7%A1%AE%E8%AE%A4%E6%8C%91%E6%9D%AF%E5%85%AB%E5%BC%BA%23) `58.3K 🔥` `+29%`
1. [建议大家去狂刷跨境综艺打破信息差 (It is recommended that everyone binge-watch cross-border variety shows to break the information gap)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8E%BB%E7%8B%82%E5%88%B7%E8%B7%A8%E5%A2%83%E7%BB%BC%E8%89%BA%E6%89%93%E7%A0%B4%E4%BF%A1%E6%81%AF%E5%B7%AE%23) `58.3K 🔥` `+24%`
1. [日本地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%23) `58.3K 🔥` `+26%`
1. [五一假期真是捅人窝了吧](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F%E7%9C%9F%E6%98%AF%E6%8D%85%E4%BA%BA%E7%AA%9D%E4%BA%86%E5%90%A7%23) `58.2K 🔥` `+23%`
1. [苏超南京vs常州](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%8D%97%E4%BA%ACvs%E5%B8%B8%E5%B7%9E%23) `58.2K 🔥` `+29%`
1. [夺冠车手感谢张雪机车 (The winning driver thanked Zhang Xue Motorcycle)](https://s.weibo.com/weibo?q=%23%E5%A4%BA%E5%86%A0%E8%BD%A6%E6%89%8B%E6%84%9F%E8%B0%A2%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `58.2K 🔥` `+29%`
1. [严浩翔演唱会状态 (Yan Haoxiang's concert status)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8A%B6%E6%80%81%23) `58.1K 🔥` `+29%`
1. [郭晶晶陈若琳假期同框热聊 (Guo Jingjing and Chen Ruolin chatted together during the holidays)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%B6%E6%99%B6%E9%99%88%E8%8B%A5%E7%90%B3%E5%81%87%E6%9C%9F%E5%90%8C%E6%A1%86%E7%83%AD%E8%81%8A%23) `58.1K 🔥` `+29%`
1. [张雪机车回应再次夺冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%9B%9E%E5%BA%94%E5%86%8D%E6%AC%A1%E5%A4%BA%E5%86%A0%23) `58.1K 🔥` `+29%`
1. [一诺被开闪光灯](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E8%A2%AB%E5%BC%80%E9%97%AA%E5%85%89%E7%81%AF%23) `58.1K 🔥` `+24%`
1. [杨威定下16岁前不牺牲学业红线 (Yang Wei has set a red line not to sacrifice his studies before the age of 16)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A8%81%E5%AE%9A%E4%B8%8B16%E5%B2%81%E5%89%8D%E4%B8%8D%E7%89%BA%E7%89%B2%E5%AD%A6%E4%B8%9A%E7%BA%A2%E7%BA%BF%23) `58.0K 🔥` `+29%`
1. [张雪机车连超2辆雅马哈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%BF%9E%E8%B6%852%E8%BE%86%E9%9B%85%E9%A9%AC%E5%93%88%23) `58.0K 🔥` `+28%`
1. [虞书欣 种地吧](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `58.0K 🔥` `+28%`
1. [学霸情侣专升本斩获76万奖学金](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E9%9C%B8%E6%83%85%E4%BE%A3%E4%B8%93%E5%8D%87%E6%9C%AC%E6%96%A9%E8%8E%B776%E4%B8%87%E5%A5%96%E5%AD%A6%E9%87%91%23) `58.0K 🔥` `+28%`
1. [西瓜摊老板戴手套用牙签挑瓜籽](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%93%9C%E6%91%8A%E8%80%81%E6%9D%BF%E6%88%B4%E6%89%8B%E5%A5%97%E7%94%A8%E7%89%99%E7%AD%BE%E6%8C%91%E7%93%9C%E7%B1%BD%23) `57.9K 🔥` `+28%`
1. [1300斤牛走丢20天暴瘦200斤 (A 1,300-pound cow lost and lost 200 pounds in 20 days)](https://s.weibo.com/weibo?q=%231300%E6%96%A4%E7%89%9B%E8%B5%B0%E4%B8%A220%E5%A4%A9%E6%9A%B4%E7%98%A6200%E6%96%A4%23) `57.9K 🔥` `+28%`
1. [王楚钦林诗栋梁靖崑开门红](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9E%97%E8%AF%97%E6%A0%8B%E6%A2%81%E9%9D%96%E5%B4%91%E5%BC%80%E9%97%A8%E7%BA%A2%23) `57.9K 🔥` `+28%`
1. [iPhone18Pro最低配或不涨价](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%9C%80%E4%BD%8E%E9%85%8D%E6%88%96%E4%B8%8D%E6%B6%A8%E4%BB%B7%23) `57.8K 🔥` `+28%`
1. [宝妈称花7万5坐月子多次吃到生肉 (Mom says she spent 75,000 to eat raw meat many times during confinement period)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E7%A7%B0%E8%8A%B17%E4%B8%875%E5%9D%90%E6%9C%88%E5%AD%90%E5%A4%9A%E6%AC%A1%E5%90%83%E5%88%B0%E7%94%9F%E8%82%89%23) `57.8K 🔥` `+28%`
1. [贺峻霖是真人bjd吧 (He Junlin is a real person BJD right?)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E6%98%AF%E7%9C%9F%E4%BA%BAbjd%E5%90%A7%23) `57.8K 🔥` `+28%`
1. [21世纪大君夫人8 (21st Century Maharaja’s Wife 8)](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA8%23) `57.7K 🔥` `+28%`
1. [AG战胜WST](https://s.weibo.com/weibo?q=%23AG%E6%88%98%E8%83%9CWST%23) `57.7K 🔥` `+28%`
1. [张雪机车绝杀两台雅马哈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%BB%9D%E6%9D%80%E4%B8%A4%E5%8F%B0%E9%9B%85%E9%A9%AC%E5%93%88%23) `57.6K 🔥` `+28%`
1. [被AI误导闯入毒蛇窝女子发声](https://s.weibo.com/weibo?q=%23%E8%A2%ABAI%E8%AF%AF%E5%AF%BC%E9%97%AF%E5%85%A5%E6%AF%92%E8%9B%87%E7%AA%9D%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `57.6K 🔥` `+28%`
1. [国乒男团3比0英格兰 (National table tennis men's team 3-0 England)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A23%E6%AF%940%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `57.5K 🔥` `+27%`
1. [父母互相拍照6岁儿子失足坠崖 (Parents take photos of each other, 6-year-old son slips and falls off cliff)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E4%BA%92%E7%9B%B8%E6%8B%8D%E7%85%A76%E5%B2%81%E5%84%BF%E5%AD%90%E5%A4%B1%E8%B6%B3%E5%9D%A0%E5%B4%96%23) `229.7K 🔥`
1. [追星女的手机密码人尽皆知](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E6%98%9F%E5%A5%B3%E7%9A%84%E6%89%8B%E6%9C%BA%E5%AF%86%E7%A0%81%E4%BA%BA%E5%B0%BD%E7%9A%86%E7%9F%A5%23) `127.7K 🔥`
1. [95后把卡脖子难题变成咱的杀手锏](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E6%8A%8A%E5%8D%A1%E8%84%96%E5%AD%90%E9%9A%BE%E9%A2%98%E5%8F%98%E6%88%90%E5%92%B1%E7%9A%84%E6%9D%80%E6%89%8B%E9%94%8F%23) `121.0K 🔥`
1. [严浩翔哭了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%93%AD%E4%BA%86%23) `119.4K 🔥`
1. [张婧仪方要求你好星期六道歉 (Zhang Jingyi asked Hello Saturday to apologize)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%96%B9%E8%A6%81%E6%B1%82%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E9%81%93%E6%AD%89%23) `116.2K 🔥`
1. [张雪机车再夺冠军 (Zhang Xue motorcycle wins championship again)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%86%8D%E5%A4%BA%E5%86%A0%E5%86%9B%23) `69.7K 🔥`
1. [世乒赛 (World Table Tennis Championships)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B9%92%E8%B5%9B%23) `66.7K 🔥`
1. [原来这就是情感漠视吗](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E6%83%85%E6%84%9F%E6%BC%A0%E8%A7%86%E5%90%97%23) `58.6K 🔥`
1. [刘丁硕假期厕所直播翻车](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E5%81%87%E6%9C%9F%E5%8E%95%E6%89%80%E7%9B%B4%E6%92%AD%E7%BF%BB%E8%BD%A6%23) `58.6K 🔥`
1. [朱孝天承认F4不和](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AD%9D%E5%A4%A9%E6%89%BF%E8%AE%A4F4%E4%B8%8D%E5%92%8C%23) `58.6K 🔥`
1. [卢昱晓收藏与檀健次cp视频 (Lu Yuxiao’s collection and Tan Jianci’s CP video)](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%94%B6%E8%97%8F%E4%B8%8E%E6%AA%80%E5%81%A5%E6%AC%A1cp%E8%A7%86%E9%A2%91%23) `58.5K 🔥`
1. [2026F1迈阿密大奖赛](https://s.weibo.com/weibo?q=%232026F1%E8%BF%88%E9%98%BF%E5%AF%86%E5%A4%A7%E5%A5%96%E8%B5%9B%23) `58.5K 🔥`
1. [周深一家四口花车巡游](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E8%8A%B1%E8%BD%A6%E5%B7%A1%E6%B8%B8%23) `58.4K 🔥`
1. [Tian闹剧结束了 (The farce is over)](https://s.weibo.com/weibo?q=%23Tian%E9%97%B9%E5%89%A7%E7%BB%93%E6%9D%9F%E4%BA%86%23) `58.4K 🔥`
1. [误导女子闯入毒蛇窝AI道歉](https://s.weibo.com/weibo?q=%23%E8%AF%AF%E5%AF%BC%E5%A5%B3%E5%AD%90%E9%97%AF%E5%85%A5%E6%AF%92%E8%9B%87%E7%AA%9DAI%E9%81%93%E6%AD%89%23) `58.3K 🔥`
1. [猫为什么不焦虑 (Why are cats not anxious?)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%84%A6%E8%99%91%23) `58.2K 🔥`
1. [跑男新群名是白鹿改的 (The new group name of Running Man was changed by Bai Lu)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%96%B0%E7%BE%A4%E5%90%8D%E6%98%AF%E7%99%BD%E9%B9%BF%E6%94%B9%E7%9A%84%23) `57.9K 🔥`
1. [徐良让张远去办公室找他](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E8%AE%A9%E5%BC%A0%E8%BF%9C%E5%8E%BB%E5%8A%9E%E5%85%AC%E5%AE%A4%E6%89%BE%E4%BB%96%23) `57.6K 🔥`

Updated at 2026-05-03 04:55:51

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
