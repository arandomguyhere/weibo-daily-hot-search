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

1. [元宵晚会四美 (Four Beauties of the Lantern Festival Party)](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%B5%E6%99%9A%E4%BC%9A%E5%9B%9B%E7%BE%8E%23) `566.3K 🔥` `NEW`
1. [金智秀 迪奥公主](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%20%E8%BF%AA%E5%A5%A5%E5%85%AC%E4%B8%BB%23) `498.4K 🔥` `NEW`
1. [金鹤龙把王菊化成刘亦菲了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E6%8A%8A%E7%8E%8B%E8%8F%8A%E5%8C%96%E6%88%90%E5%88%98%E4%BA%A6%E8%8F%B2%E4%BA%86%23) `430.7K 🔥` `NEW`
1. [Dior群星于杜乐丽花园中享受春意](https://s.weibo.com/weibo?q=%23Dior%E7%BE%A4%E6%98%9F%E4%BA%8E%E6%9D%9C%E4%B9%90%E4%B8%BD%E8%8A%B1%E5%9B%AD%E4%B8%AD%E4%BA%AB%E5%8F%97%E6%98%A5%E6%84%8F%23) `334.4K 🔥` `NEW`
1. [山姆1.38公斤冰块卖37.9元](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%861.38%E5%85%AC%E6%96%A4%E5%86%B0%E5%9D%97%E5%8D%9637.9%E5%85%83%23) `316.9K 🔥` `NEW`
1. [黄金白银跌不停](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E8%B7%8C%E4%B8%8D%E5%81%9C%23) `268.9K 🔥` `NEW`
1. [王曼昱的元宵节祝福](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%9A%84%E5%85%83%E5%AE%B5%E8%8A%82%E7%A5%9D%E7%A6%8F%23) `268.8K 🔥` `NEW`
1. [石宇奇止步全英赛首轮](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%AE%87%E5%A5%87%E6%AD%A2%E6%AD%A5%E5%85%A8%E8%8B%B1%E8%B5%9B%E9%A6%96%E8%BD%AE%23) `268.8K 🔥` `NEW`
1. [洛克王国世界](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E4%B8%96%E7%95%8C%23) `268.3K 🔥` `NEW`
1. [妻子要离婚丈夫要求返还10万元彩礼](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E8%A6%81%E7%A6%BB%E5%A9%9A%E4%B8%88%E5%A4%AB%E8%A6%81%E6%B1%82%E8%BF%94%E8%BF%9810%E4%B8%87%E5%85%83%E5%BD%A9%E7%A4%BC%23) `268.2K 🔥` `NEW`
1. [iPhone17e首发国补即破价 (iPhone 17e’s first domestic subsidy is at a reduced price)](https://s.weibo.com/weibo?q=%23iPhone17e%E9%A6%96%E5%8F%91%E5%9B%BD%E8%A1%A5%E5%8D%B3%E7%A0%B4%E4%BB%B7%23) `268.0K 🔥` `NEW`
1. [RW春季赛遗憾止步](https://s.weibo.com/weibo?q=%23RW%E6%98%A5%E5%AD%A3%E8%B5%9B%E9%81%97%E6%86%BE%E6%AD%A2%E6%AD%A5%23) `267.8K 🔥` `NEW`
1. [张凌赫田曦薇回应合作逐玉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E5%9B%9E%E5%BA%94%E5%90%88%E4%BD%9C%E9%80%90%E7%8E%89%23) `267.7K 🔥` `NEW`
1. [姜妍毛不易人间小满](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%A6%8D%E6%AF%9B%E4%B8%8D%E6%98%93%E4%BA%BA%E9%97%B4%E5%B0%8F%E6%BB%A1%23) `267.7K 🔥` `NEW`
1. [现货金银急跌](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%87%91%E9%93%B6%E6%80%A5%E8%B7%8C%23) `267.6K 🔥` `NEW`
1. [元宵晚会 好看](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%B5%E6%99%9A%E4%BC%9A%20%E5%A5%BD%E7%9C%8B%23) `1.1M 🔥` `+36%`
1. [月全食 (total lunar eclipse)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%85%A8%E9%A3%9F%23) `842.0K 🔥` `+71%`
1. [刘宇宁魏晨 舞台走位 (Liu Yuning and Wei Chen stage moves)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E9%AD%8F%E6%99%A8%20%E8%88%9E%E5%8F%B0%E8%B5%B0%E4%BD%8D%23) `628.7K 🔥` `+253%`
1. [王毅和以色列外长通电话 (Wang Yi had a phone call with the Israeli Foreign Minister)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%92%8C%E4%BB%A5%E8%89%B2%E5%88%97%E5%A4%96%E9%95%BF%E9%80%9A%E7%94%B5%E8%AF%9D%23) `619.8K 🔥` `+270%`
1. [世界油阀关闭](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%B2%B9%E9%98%80%E5%85%B3%E9%97%AD%23) `600.1K 🔥` `+91%`
1. [元宵红包](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%B5%E7%BA%A2%E5%8C%85%23) `558.0K 🔥` `+98%`
1. [建议提升教师待遇保障水平](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8F%90%E5%8D%87%E6%95%99%E5%B8%88%E5%BE%85%E9%81%87%E4%BF%9D%E9%9A%9C%E6%B0%B4%E5%B9%B3%23) `524.7K 🔥` `+146%`
1. [迪奥官宣王楚然](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A5%A5%E5%AE%98%E5%AE%A3%E7%8E%8B%E6%A5%9A%E7%84%B6%23) `521.3K 🔥` `+96%`
1. [住酒店三年还被员工蛐蛐 (I stayed in a hotel for three years and was cricketed by employees)](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E9%85%92%E5%BA%97%E4%B8%89%E5%B9%B4%E8%BF%98%E8%A2%AB%E5%91%98%E5%B7%A5%E8%9B%90%E8%9B%90%23) `487.0K 🔥` `+177%`
1. [品牌方回应迪丽热巴缺席](https://s.weibo.com/weibo?q=%23%E5%93%81%E7%89%8C%E6%96%B9%E5%9B%9E%E5%BA%94%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BC%BA%E5%B8%AD%23) `383.6K 🔥` `+54%`
1. [人大代表建议元宵节重阳节放假](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E5%BB%BA%E8%AE%AE%E5%85%83%E5%AE%B5%E8%8A%82%E9%87%8D%E9%98%B3%E8%8A%82%E6%94%BE%E5%81%87%23) `381.3K 🔥` `+115%`
1. [西班牙国王收到荣耀MagicV6](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%9B%BD%E7%8E%8B%E6%94%B6%E5%88%B0%E8%8D%A3%E8%80%80MagicV6%23) `364.8K 🔥` `+71%`
1. [穆祉丞王橹杰跨代隐藏卡](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%B7%A8%E4%BB%A3%E9%9A%90%E8%97%8F%E5%8D%A1%23) `316.5K 🔥` `+80%`
1. [王菊33岁正是爆改的年纪](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%8A33%E5%B2%81%E6%AD%A3%E6%98%AF%E7%88%86%E6%94%B9%E7%9A%84%E5%B9%B4%E7%BA%AA%23) `300.2K 🔥` `+73%`
1. [黄金跌破5100美元](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E7%A0%B45100%E7%BE%8E%E5%85%83%23) `269.0K 🔥` `+27%`
1. [伊朗纳坦兹核设施遭破坏 (Iran's Natanz nuclear facility destroyed)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%BA%B3%E5%9D%A6%E5%85%B9%E6%A0%B8%E8%AE%BE%E6%96%BD%E9%81%AD%E7%A0%B4%E5%9D%8F%23) `268.7K 🔥` `+44%`
1. [油价或涨超70% (Oil prices may rise by more than 70%)](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%88%96%E6%B6%A8%E8%B6%8570%25%23) `268.6K 🔥` `+50%`
1. [以军称再袭伊朗总统府](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E7%A7%B0%E5%86%8D%E8%A2%AD%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E5%BA%9C%23) `268.6K 🔥` `+54%`
1. [刘文祥头像](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E5%A4%B4%E5%83%8F%23) `268.5K 🔥` `+27%`
1. [蒲巴甲怒批凭什么质疑丁真](https://s.weibo.com/weibo?q=%23%E8%92%B2%E5%B7%B4%E7%94%B2%E6%80%92%E6%89%B9%E5%87%AD%E4%BB%80%E4%B9%88%E8%B4%A8%E7%96%91%E4%B8%81%E7%9C%9F%23) `268.4K 🔥` `+50%`
1. [元宵节 (Lantern Festival)](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%B5%E8%8A%82%23) `268.2K 🔥` `+25%`
1. [檀健次好可爱的汤圆 (Tan Jianci’s cute glutinous rice balls)](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%A5%BD%E5%8F%AF%E7%88%B1%E7%9A%84%E6%B1%A4%E5%9C%86%23) `268.1K 🔥` `+56%`
1. [周深梦见你好听](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%A2%A6%E8%A7%81%E4%BD%A0%E5%A5%BD%E5%90%AC%23) `268.0K 🔥` `+53%`
1. [只有胡彦斌记得今天是元宵节 (Only Hu Yanbin remembers that today is the Lantern Festival)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E8%83%A1%E5%BD%A6%E6%96%8C%E8%AE%B0%E5%BE%97%E4%BB%8A%E5%A4%A9%E6%98%AF%E5%85%83%E5%AE%B5%E8%8A%82%23) `267.9K 🔥` `+25%`
1. [央视元宵晚会](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%85%83%E5%AE%B5%E6%99%9A%E4%BC%9A%23) `267.9K 🔥` `+27%`
1. [2026全国两会这些看点值得关注](https://s.weibo.com/weibo?q=%232026%E5%85%A8%E5%9B%BD%E4%B8%A4%E4%BC%9A%E8%BF%99%E4%BA%9B%E7%9C%8B%E7%82%B9%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23) `650.2K 🔥`
1. [DIOR大秀](https://s.weibo.com/weibo?q=%23DIOR%E5%A4%A7%E7%A7%80%23) `644.7K 🔥`
1. [伊朗称向美航母发射4枚巡航导弹 (Iran says it fired 4 cruise missiles at US aircraft carrier)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%90%91%E7%BE%8E%E8%88%AA%E6%AF%8D%E5%8F%91%E5%B0%844%E6%9E%9A%E5%B7%A1%E8%88%AA%E5%AF%BC%E5%BC%B9%23) `448.7K 🔥`
1. [369为TES野辅发声 (369 speaks for TES Nosuke)](https://s.weibo.com/weibo?q=%23369%E4%B8%BATES%E9%87%8E%E8%BE%85%E5%8F%91%E5%A3%B0%23) `277.6K 🔥`
1. [撒贝宁老鼠干](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%E8%80%81%E9%BC%A0%E5%B9%B2%23) `273.8K 🔥`
1. [美首都集会抗议美以对伊朗动武](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%A6%96%E9%83%BD%E9%9B%86%E4%BC%9A%E6%8A%97%E8%AE%AE%E7%BE%8E%E4%BB%A5%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%8A%A8%E6%AD%A6%23) `269.1K 🔥`
1. [湖南卫视元宵喜乐会 (Hunan Satellite TV Lantern Festival Party)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E5%85%83%E5%AE%B5%E5%96%9C%E4%B9%90%E4%BC%9A%23) `268.9K 🔥`
1. [男子1年吃347顿火锅全家都陪不动了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%901%E5%B9%B4%E5%90%83347%E9%A1%BF%E7%81%AB%E9%94%85%E5%85%A8%E5%AE%B6%E9%83%BD%E9%99%AA%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `268.5K 🔥`
1. [穆祉丞白龙马好可爱](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%99%BD%E9%BE%99%E9%A9%AC%E5%A5%BD%E5%8F%AF%E7%88%B1%23) `268.4K 🔥`
1. [痞幼直播关美颜](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E7%9B%B4%E6%92%AD%E5%85%B3%E7%BE%8E%E9%A2%9C%23) `267.6K 🔥` `-34%`

Updated at 2026-03-03 22:30:15

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
