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

1. [粉丝说西村力今天演唱会状态特别好 (Fans said that Riki Nishimura was in particularly good condition during today’s concert)](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E8%AF%B4%E8%A5%BF%E6%9D%91%E5%8A%9B%E4%BB%8A%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8A%B6%E6%80%81%E7%89%B9%E5%88%AB%E5%A5%BD%23) `261.8K 🔥` `NEW`
1. [周星驰看的是迪丽热巴哪部剧](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E7%9C%8B%E7%9A%84%E6%98%AF%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%93%AA%E9%83%A8%E5%89%A7%23) `261.4K 🔥` `NEW`
1. [卫生巾应该分坐用跟躺用](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%BA%94%E8%AF%A5%E5%88%86%E5%9D%90%E7%94%A8%E8%B7%9F%E8%BA%BA%E7%94%A8%23) `261.1K 🔥` `NEW`
1. [23岁战士执行空降任务时不幸牺牲](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E6%88%98%E5%A3%AB%E6%89%A7%E8%A1%8C%E7%A9%BA%E9%99%8D%E4%BB%BB%E5%8A%A1%E6%97%B6%E4%B8%8D%E5%B9%B8%E7%89%BA%E7%89%B2%23) `261.0K 🔥` `NEW`
1. [原北京军区副司令员李永金逝世](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E5%8C%97%E4%BA%AC%E5%86%9B%E5%8C%BA%E5%89%AF%E5%8F%B8%E4%BB%A4%E5%91%98%E6%9D%8E%E6%B0%B8%E9%87%91%E9%80%9D%E4%B8%96%23) `260.9K 🔥` `NEW`
1. [A股存储巨头定增大幅溢价](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%AD%98%E5%82%A8%E5%B7%A8%E5%A4%B4%E5%AE%9A%E5%A2%9E%E5%A4%A7%E5%B9%85%E6%BA%A2%E4%BB%B7%23) `260.9K 🔥` `NEW`
1. [印度男子奸杀女孩离开警局缠满绷带](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E5%A5%B8%E6%9D%80%E5%A5%B3%E5%AD%A9%E7%A6%BB%E5%BC%80%E8%AD%A6%E5%B1%80%E7%BC%A0%E6%BB%A1%E7%BB%B7%E5%B8%A6%23) `260.9K 🔥` `NEW`
1. [孟子义掷骰子连续4个6](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8E%B7%E9%AA%B0%E5%AD%90%E8%BF%9E%E7%BB%AD4%E4%B8%AA6%23) `260.7K 🔥` `NEW`
1. [国外男子故意撞老人想施救已来不及](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%A4%96%E7%94%B7%E5%AD%90%E6%95%85%E6%84%8F%E6%92%9E%E8%80%81%E4%BA%BA%E6%83%B3%E6%96%BD%E6%95%91%E5%B7%B2%E6%9D%A5%E4%B8%8D%E5%8F%8A%23) `260.7K 🔥` `NEW`
1. [孙政拉二胡](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%94%BF%E6%8B%89%E4%BA%8C%E8%83%A1%23) `260.6K 🔥` `NEW`
1. [成绩好就随便吃14岁男孩吃出糖尿病 (A 14-year-old boy develops diabetes by eating whatever he wants if he has good grades)](https://s.weibo.com/weibo?q=%23%E6%88%90%E7%BB%A9%E5%A5%BD%E5%B0%B1%E9%9A%8F%E4%BE%BF%E5%90%8314%E5%B2%81%E7%94%B7%E5%AD%A9%E5%90%83%E5%87%BA%E7%B3%96%E5%B0%BF%E7%97%85%23) `260.6K 🔥` `NEW`
1. [好像给麻辣烫店的脸太多了](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%83%8F%E7%BB%99%E9%BA%BB%E8%BE%A3%E7%83%AB%E5%BA%97%E7%9A%84%E8%84%B8%E5%A4%AA%E5%A4%9A%E4%BA%86%23) `260.5K 🔥` `NEW`
1. [孙政吕思瞳互相写名字](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%94%BF%E5%90%95%E6%80%9D%E7%9E%B3%E4%BA%92%E7%9B%B8%E5%86%99%E5%90%8D%E5%AD%97%23) `260.5K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `260.4K 🔥` `NEW`
1. [BLG战胜EDG](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CEDG%23) `260.4K 🔥` `NEW`
1. [酒店花洒现排泄物住客索赔遭拒](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97%E8%8A%B1%E6%B4%92%E7%8E%B0%E6%8E%92%E6%B3%84%E7%89%A9%E4%BD%8F%E5%AE%A2%E7%B4%A2%E8%B5%94%E9%81%AD%E6%8B%92%23) `260.3K 🔥` `NEW`
1. [钟意状态](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%E7%8A%B6%E6%80%81%23) `405.1K 🔥` `+77%`
1. [发现父母开始看自己脸色了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E7%88%B6%E6%AF%8D%E5%BC%80%E5%A7%8B%E7%9C%8B%E8%87%AA%E5%B7%B1%E8%84%B8%E8%89%B2%E4%BA%86%23) `262.4K 🔥` `+58%`
1. [向下对齐是亲密关系最大的诅咒 (Downward alignment is the greatest curse of intimacy)](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%B8%8B%E5%AF%B9%E9%BD%90%E6%98%AF%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E6%9C%80%E5%A4%A7%E7%9A%84%E8%AF%85%E5%92%92%23) `262.2K 🔥` `+77%`
1. [王源 巡演看一场少一场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%20%E5%B7%A1%E6%BC%94%E7%9C%8B%E4%B8%80%E5%9C%BA%E5%B0%91%E4%B8%80%E5%9C%BA%23) `262.0K 🔥` `+29%`
1. [白海豚开始发力了 (The white dolphin is starting to exert its strength)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%BC%80%E5%A7%8B%E5%8F%91%E5%8A%9B%E4%BA%86%23) `262.0K 🔥` `+37%`
1. [迪丽热巴香港造型](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A6%99%E6%B8%AF%E9%80%A0%E5%9E%8B%23) `261.9K 🔥` `+77%`
1. [长期穿碳板鞋的受害者出现了 (Victims of wearing carbon shoes for a long time appear)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%A9%BF%E7%A2%B3%E6%9D%BF%E9%9E%8B%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `261.9K 🔥` `+34%`
1. [常吃4种食物不易得胃癌](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%90%834%E7%A7%8D%E9%A3%9F%E7%89%A9%E4%B8%8D%E6%98%93%E5%BE%97%E8%83%83%E7%99%8C%23) `261.7K 🔥` `+25%`
1. [陈伟霆说我还以为去了成毅的演唱会](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%AF%B4%E6%88%91%E8%BF%98%E4%BB%A5%E4%B8%BA%E5%8E%BB%E4%BA%86%E6%88%90%E6%AF%85%E7%9A%84%E6%BC%94%E5%94%B1%E4%BC%9A%23) `261.7K 🔥` `+58%`
1. [蔡依林唱了布拉格广场](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%94%B1%E4%BA%86%E5%B8%83%E6%8B%89%E6%A0%BC%E5%B9%BF%E5%9C%BA%23) `261.5K 🔥` `+94%`
1. [小伙睡梦翻身把隐翅虫碾进内裤](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E7%9D%A1%E6%A2%A6%E7%BF%BB%E8%BA%AB%E6%8A%8A%E9%9A%90%E7%BF%85%E8%99%AB%E7%A2%BE%E8%BF%9B%E5%86%85%E8%A3%A4%23) `261.5K 🔥` `+70%`
1. [千亿巨头清仓英伟达](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%BA%BF%E5%B7%A8%E5%A4%B4%E6%B8%85%E4%BB%93%E8%8B%B1%E4%BC%9F%E8%BE%BE%23) `261.4K 🔥` `+31%`
1. [爷爷不泡茶 店员打人](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6%20%E5%BA%97%E5%91%98%E6%89%93%E4%BA%BA%23) `261.2K 🔥` `+40%`
1. [西平刑案嫌犯所藏玉米地有2米高](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%B9%B3%E5%88%91%E6%A1%88%E5%AB%8C%E7%8A%AF%E6%89%80%E8%97%8F%E7%8E%89%E7%B1%B3%E5%9C%B0%E6%9C%892%E7%B1%B3%E9%AB%98%23) `261.2K 🔥` `+94%`
1. [20岁中国男子在泰国被刺多刀身亡](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E5%9C%A8%E6%B3%B0%E5%9B%BD%E8%A2%AB%E5%88%BA%E5%A4%9A%E5%88%80%E8%BA%AB%E4%BA%A1%23) `261.1K 🔥` `+90%`
1. [AI帮你开发以前要花钱的功能](https://s.weibo.com/weibo?q=%23AI%E5%B8%AE%E4%BD%A0%E5%BC%80%E5%8F%91%E4%BB%A5%E5%89%8D%E8%A6%81%E8%8A%B1%E9%92%B1%E7%9A%84%E5%8A%9F%E8%83%BD%23) `260.8K 🔥` `+94%`
1. [本周这些数据最值得关注 (These data are most noteworthy this week)](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE%E6%9C%80%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23) `418.0K 🔥`
1. [只有小时候发烧才有这种感觉](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E5%B0%8F%E6%97%B6%E5%80%99%E5%8F%91%E7%83%A7%E6%89%8D%E6%9C%89%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89%23) `366.0K 🔥`
1. [殡仪馆回应情侣平潭拍日出坠崖](https://s.weibo.com/weibo?q=%23%E6%AE%A1%E4%BB%AA%E9%A6%86%E5%9B%9E%E5%BA%94%E6%83%85%E4%BE%A3%E5%B9%B3%E6%BD%AD%E6%8B%8D%E6%97%A5%E5%87%BA%E5%9D%A0%E5%B4%96%23) `351.1K 🔥`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `312.1K 🔥`
1. [AG对战KSG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `262.3K 🔥`
1. [奥德赛](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `262.3K 🔥`
1. [西村力演唱会的发言](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E5%8F%91%E8%A8%80%23) `262.2K 🔥`
1. [王者荣耀电竞世俱杯总决赛 (Glory of Kings E-Sports Club World Cup Finals)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E7%94%B5%E7%AB%9E%E4%B8%96%E4%BF%B1%E6%9D%AF%E6%80%BB%E5%86%B3%E8%B5%9B%23) `262.1K 🔥`
1. [小夜灯 性早熟](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%9C%E7%81%AF%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `261.8K 🔥`
1. [华晨宇刺激之夜COS童趣迷兔](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%88%BA%E6%BF%80%E4%B9%8B%E5%A4%9CCOS%E7%AB%A5%E8%B6%A3%E8%BF%B7%E5%85%94%23) `261.6K 🔥`
1. [金价猛涨踏空的人哭麻了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%8C%9B%E6%B6%A8%E8%B8%8F%E7%A9%BA%E7%9A%84%E4%BA%BA%E5%93%AD%E9%BA%BB%E4%BA%86%23) `261.5K 🔥`
1. [柬埔寨一园区围殴中国人致1死3伤 (A Chinese man was beaten up in a park in Cambodia, killing one and injuring three others.)](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E4%B8%80%E5%9B%AD%E5%8C%BA%E5%9B%B4%E6%AE%B4%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%87%B41%E6%AD%BB3%E4%BC%A4%23) `261.3K 🔥`
1. [苹果AI 千问](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%20%E5%8D%83%E9%97%AE%23) `261.1K 🔥`
1. [微博文化之夜之这是谁 (Weibo Culture Night: Who is this?)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%B9%8B%E5%A4%9C%E4%B9%8B%E8%BF%99%E6%98%AF%E8%B0%81%23) `614.6K 🔥` `-26%`
1. [这种手机壳可能是医疗垃圾做的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E6%89%8B%E6%9C%BA%E5%A3%B3%E5%8F%AF%E8%83%BD%E6%98%AF%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%E5%81%9A%E7%9A%84%23) `453.5K 🔥` `-23%`
1. [沈腾演技](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%BC%94%E6%8A%80%23) `262.5K 🔥` `-23%`
1. [情侣平潭翻墙拍日出坠崖](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%B9%B3%E6%BD%AD%E7%BF%BB%E5%A2%99%E6%8B%8D%E6%97%A5%E5%87%BA%E5%9D%A0%E5%B4%96%23) `262.4K 🔥` `-22%`
1. [国乒围剿张本美和](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%9B%B4%E5%89%BF%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `262.1K 🔥` `-22%`

Updated at 2026-08-09 01:06:16

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
