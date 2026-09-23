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

1. [小米18ProMax透明版上手](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318ProMax%E9%80%8F%E6%98%8E%E7%89%88%E4%B8%8A%E6%89%8B%23) `1.2M 🔥` `NEW`
1. [国乒将与日本争冠](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%B0%86%E4%B8%8E%E6%97%A5%E6%9C%AC%E4%BA%89%E5%86%A0%23) `884.9K 🔥` `NEW`
1. [中国教育普及程度居世界前列](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%95%99%E8%82%B2%E6%99%AE%E5%8F%8A%E7%A8%8B%E5%BA%A6%E5%B1%85%E4%B8%96%E7%95%8C%E5%89%8D%E5%88%97%23) `665.8K 🔥` `NEW`
1. [买衣服原来真有民间偏方](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%A1%A3%E6%9C%8D%E5%8E%9F%E6%9D%A5%E7%9C%9F%E6%9C%89%E6%B0%91%E9%97%B4%E5%81%8F%E6%96%B9%23) `661.7K 🔥` `NEW`
1. [小米手环11](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%89%8B%E7%8E%AF11%23) `596.6K 🔥` `NEW`
1. [程潇闫桉双人舞好辣](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E9%97%AB%E6%A1%89%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%A5%BD%E8%BE%A3%23) `449.8K 🔥` `NEW`
1. [小米18pro价格](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318pro%E4%BB%B7%E6%A0%BC%23) `416.6K 🔥` `NEW`
1. [郭麒麟说小运成大运](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%E8%AF%B4%E5%B0%8F%E8%BF%90%E6%88%90%E5%A4%A7%E8%BF%90%23) `415.7K 🔥` `NEW`
1. [实拍王楚钦3比2林昀儒后庆祝](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E6%8B%8D%E7%8E%8B%E6%A5%9A%E9%92%A63%E6%AF%942%E6%9E%97%E6%98%80%E5%84%92%E5%90%8E%E5%BA%86%E7%A5%9D%23) `409.6K 🔥` `NEW`
1. [罗永浩点赞小米18Fold](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E7%82%B9%E8%B5%9E%E5%B0%8F%E7%B1%B318Fold%23) `398.7K 🔥` `NEW`
1. [中国体操女团夺金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E5%A5%B3%E5%9B%A2%E5%A4%BA%E9%87%91%23) `392.1K 🔥` `NEW`
1. [檀健次孟子义同赴FENDI秀场](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%AD%9F%E5%AD%90%E4%B9%89%E5%90%8C%E8%B5%B4FENDI%E7%A7%80%E5%9C%BA%23) `378.6K 🔥` `NEW`
1. [丁程鑫发了刘耀文未公开手势舞](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%91%E4%BA%86%E5%88%98%E8%80%80%E6%96%87%E6%9C%AA%E5%85%AC%E5%BC%80%E6%89%8B%E5%8A%BF%E8%88%9E%23) `374.9K 🔥` `NEW`
1. [王楚钦燃尽了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%87%83%E5%B0%BD%E4%BA%86%23) `363.8K 🔥` `NEW`
1. [冯小刚直言对不起投资方](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%B0%8F%E5%88%9A%E7%9B%B4%E8%A8%80%E5%AF%B9%E4%B8%8D%E8%B5%B7%E6%8A%95%E8%B5%84%E6%96%B9%23) `356.2K 🔥` `NEW`
1. [全球量产最快充电速度](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%87%8F%E4%BA%A7%E6%9C%80%E5%BF%AB%E5%85%85%E7%94%B5%E9%80%9F%E5%BA%A6%23) `349.8K 🔥` `NEW`
1. [小米电视](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%86%23) `343.3K 🔥` `NEW`
1. [茅台解锁音乐盛典专属视角](https://s.weibo.com/weibo?q=%23%E8%8C%85%E5%8F%B0%E8%A7%A3%E9%94%81%E9%9F%B3%E4%B9%90%E7%9B%9B%E5%85%B8%E4%B8%93%E5%B1%9E%E8%A7%86%E8%A7%92%23) `310.0K 🔥` `NEW`
1. [亚运会冠军发了朱志鑫娃娃](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%86%A0%E5%86%9B%E5%8F%91%E4%BA%86%E6%9C%B1%E5%BF%97%E9%91%AB%E5%A8%83%E5%A8%83%23) `309.6K 🔥` `NEW`
1. [日本男团3比0晋级决赛](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E5%9B%A23%E6%AF%940%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `280.2K 🔥` `NEW`
1. [你们仔细看她的手有着地过吗](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E4%BB%94%E7%BB%86%E7%9C%8B%E5%A5%B9%E7%9A%84%E6%89%8B%E6%9C%89%E7%9D%80%E5%9C%B0%E8%BF%87%E5%90%97%23) `279.0K 🔥` `NEW`
1. [五哈7阵容原班人马](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%887%E9%98%B5%E5%AE%B9%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `277.2K 🔥` `NEW`
1. [白鹿回复于正生日祝福](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E4%BA%8E%E6%AD%A3%E7%94%9F%E6%97%A5%E7%A5%9D%E7%A6%8F%23) `270.0K 🔥` `NEW`
1. [丁程鑫发过贺峻霖喵喵舞](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%91%E8%BF%87%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%96%B5%E5%96%B5%E8%88%9E%23) `269.9K 🔥` `NEW`
1. [男友疑似拿别人外卖女生懵了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8F%8B%E7%96%91%E4%BC%BC%E6%8B%BF%E5%88%AB%E4%BA%BA%E5%A4%96%E5%8D%96%E5%A5%B3%E7%94%9F%E6%87%B5%E4%BA%86%23) `267.6K 🔥` `NEW`
1. [杨幂把麦克风拿反了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8A%8A%E9%BA%A6%E5%85%8B%E9%A3%8E%E6%8B%BF%E5%8F%8D%E4%BA%86%23) `250.2K 🔥` `NEW`
1. [王源说想看汪苏泷演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%AF%B4%E6%83%B3%E7%9C%8B%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%23) `243.7K 🔥` `NEW`
1. [猫咪见到已故主人的双胞胎兄弟](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E8%A7%81%E5%88%B0%E5%B7%B2%E6%95%85%E4%B8%BB%E4%BA%BA%E7%9A%84%E5%8F%8C%E8%83%9E%E8%83%8E%E5%85%84%E5%BC%9F%23) `237.7K 🔥` `NEW`
1. [王楚钦得分许昕激动](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%BE%97%E5%88%86%E8%AE%B8%E6%98%95%E6%BF%80%E5%8A%A8%23) `221.1K 🔥` `NEW`
1. [刘耀文说要帮马嘉祺冰箱里装满鸡蛋](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%AF%B4%E8%A6%81%E5%B8%AE%E9%A9%AC%E5%98%89%E7%A5%BA%E5%86%B0%E7%AE%B1%E9%87%8C%E8%A3%85%E6%BB%A1%E9%B8%A1%E8%9B%8B%23) `215.8K 🔥` `NEW`
1. [白鹿生日直播摸错头了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%94%9F%E6%97%A5%E7%9B%B4%E6%92%AD%E6%91%B8%E9%94%99%E5%A4%B4%E4%BA%86%23) `202.1K 🔥` `NEW`
1. [小米18Pro系列售价](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E7%B3%BB%E5%88%97%E5%94%AE%E4%BB%B7%23) `186.1K 🔥` `NEW`
1. [3名中国女子在泰遭诱骗锁链囚禁](https://s.weibo.com/weibo?q=%233%E5%90%8D%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%B3%B0%E9%81%AD%E8%AF%B1%E9%AA%97%E9%94%81%E9%93%BE%E5%9B%9A%E7%A6%81%23) `184.3K 🔥` `NEW`
1. [张云龙 云初令](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%91%E9%BE%99%20%E4%BA%91%E5%88%9D%E4%BB%A4%23) `179.9K 🔥` `NEW`
1. [冯小刚回应垃圾观众言论](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%B0%8F%E5%88%9A%E5%9B%9E%E5%BA%94%E5%9E%83%E5%9C%BE%E8%A7%82%E4%BC%97%E8%A8%80%E8%AE%BA%23) `168.4K 🔥` `NEW`
1. [中国女子回应在泰国遭囚禁侵犯](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E5%9C%A8%E6%B3%B0%E5%9B%BD%E9%81%AD%E5%9B%9A%E7%A6%81%E4%BE%B5%E7%8A%AF%23) `154.5K 🔥` `NEW`
1. [日本观众听中国国歌快会唱了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%A7%82%E4%BC%97%E5%90%AC%E4%B8%AD%E5%9B%BD%E5%9B%BD%E6%AD%8C%E5%BF%AB%E4%BC%9A%E5%94%B1%E4%BA%86%23) `151.6K 🔥` `NEW`
1. [唐嫣状态好得像女大学生](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E7%8A%B6%E6%80%81%E5%A5%BD%E5%BE%97%E5%83%8F%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%23) `149.9K 🔥` `NEW`
1. [小米18pro](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318pro%23) `131.7K 🔥` `NEW`
1. [和平精英](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%23) `126.3K 🔥` `NEW`
1. [兰香如故大太太挑儿媳的眼光](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%A4%A7%E5%A4%AA%E5%A4%AA%E6%8C%91%E5%84%BF%E5%AA%B3%E7%9A%84%E7%9C%BC%E5%85%89%23) `119.9K 🔥` `NEW`
1. [王楚钦盛赞林昀儒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%9B%9B%E8%B5%9E%E6%9E%97%E6%98%80%E5%84%92%23) `115.9K 🔥` `NEW`
1. [快充伤电池是真的吗](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E5%85%85%E4%BC%A4%E7%94%B5%E6%B1%A0%E6%98%AF%E7%9C%9F%E7%9A%84%E5%90%97%23) `115.3K 🔥` `NEW`
1. [林锦岐叫兰香夫人夫人夫人](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E5%8F%AB%E5%85%B0%E9%A6%99%E5%A4%AB%E4%BA%BA%E5%A4%AB%E4%BA%BA%E5%A4%AB%E4%BA%BA%23) `115.1K 🔥` `NEW`
1. [陈翔 毛晓彤](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%20%E6%AF%9B%E6%99%93%E5%BD%A4%23) `274.1K 🔥` `+62%`
1. [iPhoneDuo难产](https://s.weibo.com/weibo?q=%23iPhoneDuo%E9%9A%BE%E4%BA%A7%23) `273.1K 🔥` `+64%`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `405.5K 🔥`
1. [金拱门姜汁撞奶味不全国卖](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%8B%B1%E9%97%A8%E5%A7%9C%E6%B1%81%E6%92%9E%E5%A5%B6%E5%91%B3%E4%B8%8D%E5%85%A8%E5%9B%BD%E5%8D%96%23) `166.3K 🔥`
1. [阴阳师](https://s.weibo.com/weibo?q=%23%E9%98%B4%E9%98%B3%E5%B8%88%23) `160.3K 🔥`
1. [WMA微博音乐盛典](https://s.weibo.com/weibo?q=%23WMA%E5%BE%AE%E5%8D%9A%E9%9F%B3%E4%B9%90%E7%9B%9B%E5%85%B8%23) `141.8K 🔥` `-58%`
1. [张展硕200米自金牌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95200%E7%B1%B3%E8%87%AA%E9%87%91%E7%89%8C%23) `116.9K 🔥` `-76%`
1. [陈翔 江铠同](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%BF%94%20%E6%B1%9F%E9%93%A0%E5%90%8C%23) `106.7K 🔥` `-35%`

Updated at 2026-09-23 23:32:26

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
