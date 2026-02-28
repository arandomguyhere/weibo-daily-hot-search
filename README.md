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

1. [伊朗正在打击美国军事基地 (Iran is attacking US military bases)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A3%E5%9C%A8%E6%89%93%E5%87%BB%E7%BE%8E%E5%9B%BD%E5%86%9B%E4%BA%8B%E5%9F%BA%E5%9C%B0%23) `1.2M 🔥` `NEW`
1. [何凯文英语分数](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%87%AF%E6%96%87%E8%8B%B1%E8%AF%AD%E5%88%86%E6%95%B0%23) `529.7K 🔥` `NEW`
1. [李治廷 十日终焉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%BB%E5%BB%B7%20%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `482.2K 🔥` `NEW`
1. [大熊猫半半香果离世](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%8D%8A%E5%8D%8A%E9%A6%99%E6%9E%9C%E7%A6%BB%E4%B8%96%23) `296.8K 🔥` `NEW`
1. [巴基斯坦飞行员被俘虏](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E9%A3%9E%E8%A1%8C%E5%91%98%E8%A2%AB%E4%BF%98%E8%99%8F%23) `250.1K 🔥` `NEW`
1. [王健林已卖掉80多座万达广场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%81%A5%E6%9E%97%E5%B7%B2%E5%8D%96%E6%8E%8980%E5%A4%9A%E5%BA%A7%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA%23) `246.6K 🔥` `NEW`
1. [特朗普称等行动结束接管伊朗政府](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%AD%89%E8%A1%8C%E5%8A%A8%E7%BB%93%E6%9D%9F%E6%8E%A5%E7%AE%A1%E4%BC%8A%E6%9C%97%E6%94%BF%E5%BA%9C%23) `223.7K 🔥` `NEW`
1. [伊朗 卡塔尔](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%20%E5%8D%A1%E5%A1%94%E5%B0%94%23) `223.2K 🔥` `NEW`
1. [沙特首都传出爆炸声](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9%E9%A6%96%E9%83%BD%E4%BC%A0%E5%87%BA%E7%88%86%E7%82%B8%E5%A3%B0%23) `205.5K 🔥` `NEW`
1. [美伊70年恩怨情仇时间线](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A70%E5%B9%B4%E6%81%A9%E6%80%A8%E6%83%85%E4%BB%87%E6%97%B6%E9%97%B4%E7%BA%BF%23) `196.3K 🔥` `NEW`
1. [伊朗袭击科威特美军基地 (Iran attacks US military base in Kuwait)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E7%A7%91%E5%A8%81%E7%89%B9%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `195.5K 🔥` `NEW`
1. [这样的原生家庭难怪它要去流浪](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E5%8E%9F%E7%94%9F%E5%AE%B6%E5%BA%AD%E9%9A%BE%E6%80%AA%E5%AE%83%E8%A6%81%E5%8E%BB%E6%B5%81%E6%B5%AA%23) `133.5K 🔥` `NEW`
1. [芒果还是不肯放过这个草莓发卡](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E8%BF%98%E6%98%AF%E4%B8%8D%E8%82%AF%E6%94%BE%E8%BF%87%E8%BF%99%E4%B8%AA%E8%8D%89%E8%8E%93%E5%8F%91%E5%8D%A1%23) `130.1K 🔥` `NEW`
1. [Hero对战JDG](https://s.weibo.com/weibo?q=%23Hero%E5%AF%B9%E6%88%98JDG%23) `121.0K 🔥` `NEW`
1. [66岁的倪萍被63岁的张凯丽喊妈](https://s.weibo.com/weibo?q=%2366%E5%B2%81%E7%9A%84%E5%80%AA%E8%90%8D%E8%A2%AB63%E5%B2%81%E7%9A%84%E5%BC%A0%E5%87%AF%E4%B8%BD%E5%96%8A%E5%A6%88%23) `119.9K 🔥` `NEW`
1. [TOP专辑](https://s.weibo.com/weibo?q=%23TOP%E4%B8%93%E8%BE%91%23) `108.8K 🔥` `NEW`
1. [Angelababy紫瞳](https://s.weibo.com/weibo?q=%23Angelababy%E7%B4%AB%E7%9E%B3%23) `104.2K 🔥` `NEW`
1. [迟到的同事遇到了早退的同事](https://s.weibo.com/weibo?q=%23%E8%BF%9F%E5%88%B0%E7%9A%84%E5%90%8C%E4%BA%8B%E9%81%87%E5%88%B0%E4%BA%86%E6%97%A9%E9%80%80%E7%9A%84%E5%90%8C%E4%BA%8B%23) `101.1K 🔥` `NEW`
1. [以媒称伊朗不会预料到在白天遭袭](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%AA%92%E7%A7%B0%E4%BC%8A%E6%9C%97%E4%B8%8D%E4%BC%9A%E9%A2%84%E6%96%99%E5%88%B0%E5%9C%A8%E7%99%BD%E5%A4%A9%E9%81%AD%E8%A2%AD%23) `101.0K 🔥` `NEW`
1. [王楚钦撒娇使劲了使劲了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%92%92%E5%A8%87%E4%BD%BF%E5%8A%B2%E4%BA%86%E4%BD%BF%E5%8A%B2%E4%BA%86%23) `101.0K 🔥` `NEW`
1. [山姆520元巧克力降到99元 (Sam’s 520 yuan chocolate reduced to 99 yuan)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86520%E5%85%83%E5%B7%A7%E5%85%8B%E5%8A%9B%E9%99%8D%E5%88%B099%E5%85%83%23) `1.5M 🔥` `+223%`
1. [美第五舰队服务中心遭导弹袭击](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%AC%AC%E4%BA%94%E8%88%B0%E9%98%9F%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83%E9%81%AD%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `225.7K 🔥` `+53%`
1. [以色列宣布袭击伊朗](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%AE%A3%E5%B8%83%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%23) `6.8M 🔥`
1. [2025我国完成92次宇航发射 (my country completed 92 space launches in 2025)](https://s.weibo.com/weibo?q=%232025%E6%88%91%E5%9B%BD%E5%AE%8C%E6%88%9092%E6%AC%A1%E5%AE%87%E8%88%AA%E5%8F%91%E5%B0%84%23) `1.2M 🔥`
1. [一点点 植脂末](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E7%82%B9%20%E6%A4%8D%E8%84%82%E6%9C%AB%23) `403.6K 🔥`
1. [突然对1g黄金没概念了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%AF%B91g%E9%BB%84%E9%87%91%E6%B2%A1%E6%A6%82%E5%BF%B5%E4%BA%86%23) `249.5K 🔥`
1. [孟子义李昀锐综艺 (Meng Ziyi and Li Yunrui variety show)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E7%BB%BC%E8%89%BA%23) `231.1K 🔥`
1. [赛琳娜力挺老公 (Selena supports her husband)](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E7%90%B3%E5%A8%9C%E5%8A%9B%E6%8C%BA%E8%80%81%E5%85%AC%23) `225.1K 🔥`
1. [TOP和谷爱凌合照](https://s.weibo.com/weibo?q=%23TOP%E5%92%8C%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%88%E7%85%A7%23) `224.1K 🔥`
1. [曝迪丽热巴签约天伊娱乐 (It is revealed that Dilireba signed a contract with Tianyi Entertainment)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AD%BE%E7%BA%A6%E5%A4%A9%E4%BC%8A%E5%A8%B1%E4%B9%90%23) `223.8K 🔥`
1. [嘉行否认迪丽热巴签约天伊娱乐 (Jiaxing denies Dilireba signs contract with Tianyi Entertainment)](https://s.weibo.com/weibo?q=%23%E5%98%89%E8%A1%8C%E5%90%A6%E8%AE%A4%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AD%BE%E7%BA%A6%E5%A4%A9%E4%BC%8A%E5%A8%B1%E4%B9%90%23) `194.8K 🔥`
1. [伊朗第三轮导弹袭击 (Iran's third round of missile attacks)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%AC%AC%E4%B8%89%E8%BD%AE%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `180.5K 🔥`
1. [一点点回应](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E7%82%B9%E5%9B%9E%E5%BA%94%23) `145.1K 🔥`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `109.8K 🔥`
1. [方心有霓今晚圆房 (Fang Xin Youni will consummate the marriage tonight)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%BF%83%E6%9C%89%E9%9C%93%E4%BB%8A%E6%99%9A%E5%9C%86%E6%88%BF%23) `458.7K 🔥` `-32%`
1. [德国总理从中国回去后急了 (The German Chancellor became anxious after returning from China)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E6%80%BB%E7%90%86%E4%BB%8E%E4%B8%AD%E5%9B%BD%E5%9B%9E%E5%8E%BB%E5%90%8E%E6%80%A5%E4%BA%86%23) `290.5K 🔥` `-24%`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `247.5K 🔥` `-21%`
1. [伊朗正准备毁灭性报复行动 (Iran is preparing devastating retaliation)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A3%E5%87%86%E5%A4%87%E6%AF%81%E7%81%AD%E6%80%A7%E6%8A%A5%E5%A4%8D%E8%A1%8C%E5%8A%A8%23) `244.9K 🔥` `-62%`
1. [小米YU9 (Xiaomi YU9)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU9%23) `243.9K 🔥` `-23%`
1. [伊朗又一轮导弹射向以色列](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%88%E4%B8%80%E8%BD%AE%E5%AF%BC%E5%BC%B9%E5%B0%84%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%23) `241.5K 🔥` `-47%`
1. [阿联酋传出爆炸声 (Explosions in UAE)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%81%94%E9%85%8B%E4%BC%A0%E5%87%BA%E7%88%86%E7%82%B8%E5%A3%B0%23) `229.2K 🔥` `-23%`
1. [方穆静提离婚](https://s.weibo.com/weibo?q=%23%E6%96%B9%E7%A9%86%E9%9D%99%E6%8F%90%E7%A6%BB%E5%A9%9A%23) `225.8K 🔥` `-25%`
1. [伊朗陆军总司令身亡 (Iranian army chief dies)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%99%86%E5%86%9B%E6%80%BB%E5%8F%B8%E4%BB%A4%E8%BA%AB%E4%BA%A1%23) `224.5K 🔥` `-94%`
1. [我家那小子](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%23) `206.6K 🔥` `-27%`
1. [王皓赛后生气了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E8%B5%9B%E5%90%8E%E7%94%9F%E6%B0%94%E4%BA%86%23) `197.4K 🔥` `-34%`
1. [王楚钦好好好我不挑战了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A5%BD%E5%A5%BD%E5%A5%BD%E6%88%91%E4%B8%8D%E6%8C%91%E6%88%98%E4%BA%86%23) `184.2K 🔥` `-24%`
1. [TF家族全员运动会 澳门 (TF Family Sports Meet Macau)](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E5%85%A8%E5%91%98%E8%BF%90%E5%8A%A8%E4%BC%9A%20%E6%BE%B3%E9%97%A8%23) `162.2K 🔥` `-22%`
1. [伊朗报复行动没有任何红线](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8A%A5%E5%A4%8D%E8%A1%8C%E5%8A%A8%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95%E7%BA%A2%E7%BA%BF%23) `160.5K 🔥` `-39%`
1. [范丞丞方说不认识没交集](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%96%B9%E8%AF%B4%E4%B8%8D%E8%AE%A4%E8%AF%86%E6%B2%A1%E4%BA%A4%E9%9B%86%23) `137.4K 🔥` `-25%`
1. [特朗普表示将彻底摧毁伊朗海军](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%A1%A8%E7%A4%BA%E5%B0%86%E5%BD%BB%E5%BA%95%E6%91%A7%E6%AF%81%E4%BC%8A%E6%9C%97%E6%B5%B7%E5%86%9B%23) `117.3K 🔥` `-52%`
1. [巴林美军基地所在地巨大爆炸声](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%9E%97%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%E6%89%80%E5%9C%A8%E5%9C%B0%E5%B7%A8%E5%A4%A7%E7%88%86%E7%82%B8%E5%A3%B0%23) `106.6K 🔥` `-43%`

Updated at 2026-02-28 18:33:51

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
