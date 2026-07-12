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

1. [世界排名前4球队均晋级世界杯4强 (The top 4 teams in the world have all advanced to the World Cup semi-finals)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%8E%92%E5%90%8D%E5%89%8D4%E7%90%83%E9%98%9F%E5%9D%87%E6%99%8B%E7%BA%A7%E4%B8%96%E7%95%8C%E6%9D%AF4%E5%BC%BA%23) `1.4M 🔥` `NEW`
1. [普通人该如何科学避险](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E8%AF%A5%E5%A6%82%E4%BD%95%E7%A7%91%E5%AD%A6%E9%81%BF%E9%99%A9%23) `1.3M 🔥` `NEW`
1. [听起来很贵其实很便宜的东西](https://s.weibo.com/weibo?q=%23%E5%90%AC%E8%B5%B7%E6%9D%A5%E5%BE%88%E8%B4%B5%E5%85%B6%E5%AE%9E%E5%BE%88%E4%BE%BF%E5%AE%9C%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `1.3M 🔥` `NEW`
1. [功夫女足用了迪丽热巴维语拼音全名](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%94%A8%E4%BA%86%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BB%B4%E8%AF%AD%E6%8B%BC%E9%9F%B3%E5%85%A8%E5%90%8D%23) `1.0M 🔥` `NEW`
1. [女装的钱太好赚了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E7%9A%84%E9%92%B1%E5%A4%AA%E5%A5%BD%E8%B5%9A%E4%BA%86%23) `882.9K 🔥` `NEW`
1. [菲律宾曾书面承认黄岩岛非其领土](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%9B%BE%E4%B9%A6%E9%9D%A2%E6%89%BF%E8%AE%A4%E9%BB%84%E5%B2%A9%E5%B2%9B%E9%9D%9E%E5%85%B6%E9%A2%86%E5%9C%9F%23) `604.8K 🔥` `NEW`
1. [周星驰功夫女足豆瓣开分](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E8%B1%86%E7%93%A3%E5%BC%80%E5%88%86%23) `501.0K 🔥` `NEW`
1. [新冠](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%86%A0%23) `500.7K 🔥` `NEW`
1. [桃黑黑自曝朋友月入4.6万](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E8%87%AA%E6%9B%9D%E6%9C%8B%E5%8F%8B%E6%9C%88%E5%85%A54.6%E4%B8%87%23) `498.3K 🔥` `NEW`
1. [艾米北电正式录取](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E5%8C%97%E7%94%B5%E6%AD%A3%E5%BC%8F%E5%BD%95%E5%8F%96%23) `498.0K 🔥` `NEW`
1. [阿根廷从未止步世界杯半决赛 (Argentina never stops reaching the World Cup semi-finals)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BB%8E%E6%9C%AA%E6%AD%A2%E6%AD%A5%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `497.1K 🔥` `NEW`
1. [特斯拉拆除Model S和X生产线](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E6%8B%86%E9%99%A4Model%20S%E5%92%8CX%E7%94%9F%E4%BA%A7%E7%BA%BF%23) `494.6K 🔥` `NEW`
1. [云南一水泥罐车侧翻致6死](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E4%B8%80%E6%B0%B4%E6%B3%A5%E7%BD%90%E8%BD%A6%E4%BE%A7%E7%BF%BB%E8%87%B46%E6%AD%BB%23) `491.6K 🔥` `NEW`
1. [国企董事长办公室收礼监控曝光](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E8%91%A3%E4%BA%8B%E9%95%BF%E5%8A%9E%E5%85%AC%E5%AE%A4%E6%94%B6%E7%A4%BC%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `490.8K 🔥` `NEW`
1. [台风巴威已移出浙江](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%B7%B2%E7%A7%BB%E5%87%BA%E6%B5%99%E6%B1%9F%23) `490.4K 🔥` `NEW`
1. [哈兰德足足夸了贝林厄姆一分钟](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%B6%B3%E8%B6%B3%E5%A4%B8%E4%BA%86%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E4%B8%80%E5%88%86%E9%92%9F%23) `489.7K 🔥` `NEW`
1. [阿根廷球员集体庆祝cue英国](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E5%91%98%E9%9B%86%E4%BD%93%E5%BA%86%E7%A5%9Dcue%E8%8B%B1%E5%9B%BD%23) `486.5K 🔥` `NEW`
1. [巴威已进入安徽](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%B7%B2%E8%BF%9B%E5%85%A5%E5%AE%89%E5%BE%BD%23) `453.4K 🔥` `NEW`
1. [全体办公室人员玩年龄梗](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%BD%93%E5%8A%9E%E5%85%AC%E5%AE%A4%E4%BA%BA%E5%91%98%E7%8E%A9%E5%B9%B4%E9%BE%84%E6%A2%97%23) `408.3K 🔥` `NEW`
1. [有些生活常识父母根本没教过我们](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%9B%E7%94%9F%E6%B4%BB%E5%B8%B8%E8%AF%86%E7%88%B6%E6%AF%8D%E6%A0%B9%E6%9C%AC%E6%B2%A1%E6%95%99%E8%BF%87%E6%88%91%E4%BB%AC%23) `370.8K 🔥` `NEW`
1. [秦岭神树 (Qinling Sacred Tree)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%AD%E7%A5%9E%E6%A0%91%23) `370.7K 🔥` `NEW`
1. [功夫女足进入年度票房榜前十](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E8%BF%9B%E5%85%A5%E5%B9%B4%E5%BA%A6%E7%A5%A8%E6%88%BF%E6%A6%9C%E5%89%8D%E5%8D%81%23) `363.4K 🔥` `NEW`
1. [三伏天一个月逼出十年湿气](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BC%8F%E5%A4%A9%E4%B8%80%E4%B8%AA%E6%9C%88%E9%80%BC%E5%87%BA%E5%8D%81%E5%B9%B4%E6%B9%BF%E6%B0%94%23) `351.8K 🔥` `NEW`
1. [发现很多东西改个名字就听得懂](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9A%E4%B8%9C%E8%A5%BF%E6%94%B9%E4%B8%AA%E5%90%8D%E5%AD%97%E5%B0%B1%E5%90%AC%E5%BE%97%E6%87%82%23) `349.6K 🔥` `NEW`
1. [巴威将穿过江苏](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%B0%86%E7%A9%BF%E8%BF%87%E6%B1%9F%E8%8B%8F%23) `311.5K 🔥` `NEW`
1. [JDG对战KSG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98KSG%23) `296.8K 🔥` `NEW`
1. [冉莹颖 邹市明](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%20%E9%82%B9%E5%B8%82%E6%98%8E%23) `290.0K 🔥` `NEW`
1. [久诚怀沙cos大小乔](https://s.weibo.com/weibo?q=%23%E4%B9%85%E8%AF%9A%E6%80%80%E6%B2%99cos%E5%A4%A7%E5%B0%8F%E4%B9%94%23) `259.1K 🔥` `NEW`
1. [喜单3疯子脱口秀](https://s.weibo.com/weibo?q=%23%E5%96%9C%E5%8D%953%E7%96%AF%E5%AD%90%E8%84%B1%E5%8F%A3%E7%A7%80%23) `249.9K 🔥` `NEW`
1. [瑞士主帅想骂人](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%AB%E4%B8%BB%E5%B8%85%E6%83%B3%E9%AA%82%E4%BA%BA%23) `249.2K 🔥` `NEW`
1. [奔跑吧 (run)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `222.2K 🔥` `NEW`
1. [美国最后一位铁肺人去世](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%90%8E%E4%B8%80%E4%BD%8D%E9%93%81%E8%82%BA%E4%BA%BA%E5%8E%BB%E4%B8%96%23) `221.8K 🔥` `NEW`
1. [小米称推测澎程价格要讲科学](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%A7%B0%E6%8E%A8%E6%B5%8B%E6%BE%8E%E7%A8%8B%E4%BB%B7%E6%A0%BC%E8%A6%81%E8%AE%B2%E7%A7%91%E5%AD%A6%23) `221.5K 🔥` `NEW`
1. [6月新增新冠确诊7.9万例](https://s.weibo.com/weibo?q=%236%E6%9C%88%E6%96%B0%E5%A2%9E%E6%96%B0%E5%86%A0%E7%A1%AE%E8%AF%8A7.9%E4%B8%87%E4%BE%8B%23) `2.3M 🔥` `+27%`
1. [李小冉再度携手欧迪芬 (Li Xiaoran joins hands with Ou Difen again)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%86%8D%E5%BA%A6%E6%90%BA%E6%89%8B%E6%AC%A7%E8%BF%AA%E8%8A%AC%23) `1.3M 🔥` `+60%`
1. [一个台风治好了大家的饭压抑](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E5%8F%B0%E9%A3%8E%E6%B2%BB%E5%A5%BD%E4%BA%86%E5%A4%A7%E5%AE%B6%E7%9A%84%E9%A5%AD%E5%8E%8B%E6%8A%91%23) `1.1M 🔥` `+150%`
1. [王俊凯参加过黄晓明的婚礼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8F%82%E5%8A%A0%E8%BF%87%E9%BB%84%E6%99%93%E6%98%8E%E7%9A%84%E5%A9%9A%E7%A4%BC%23) `499.5K 🔥`
1. [赵牧辰女友否认知三当三 (Zhao Muchen’s girlfriend denies cheating)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E7%89%A7%E8%BE%B0%E5%A5%B3%E5%8F%8B%E5%90%A6%E8%AE%A4%E7%9F%A5%E4%B8%89%E5%BD%93%E4%B8%89%23) `495.4K 🔥`
1. [算力芯片爆发](https://s.weibo.com/weibo?q=%23%E7%AE%97%E5%8A%9B%E8%8A%AF%E7%89%87%E7%88%86%E5%8F%91%23) `494.2K 🔥`
1. [小米回应网传澎程价格](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E6%BE%8E%E7%A8%8B%E4%BB%B7%E6%A0%BC%23) `492.9K 🔥`
1. [巴威台风届变脸第一名](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%8F%B0%E9%A3%8E%E5%B1%8A%E5%8F%98%E8%84%B8%E7%AC%AC%E4%B8%80%E5%90%8D%23) `852.0K 🔥` `-67%`
1. [500亿元蛇产业](https://s.weibo.com/weibo?q=%23500%E4%BA%BF%E5%85%83%E8%9B%87%E4%BA%A7%E4%B8%9A%23) `355.3K 🔥` `-27%`
1. [阿根廷3比1瑞士 (Argentina 3-1 Switzerland)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B73%E6%AF%941%E7%91%9E%E5%A3%AB%23) `349.5K 🔥` `-90%`
1. [瑞士 脏 (switzerland dirty)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%AB%20%E8%84%8F%23) `349.1K 🔥` `-81%`
1. [占车位公务员不是知错了而是怕了](https://s.weibo.com/weibo?q=%23%E5%8D%A0%E8%BD%A6%E4%BD%8D%E5%85%AC%E5%8A%A1%E5%91%98%E4%B8%8D%E6%98%AF%E7%9F%A5%E9%94%99%E4%BA%86%E8%80%8C%E6%98%AF%E6%80%95%E4%BA%86%23) `312.4K 🔥` `-25%`
1. [C罗走了但又好像没走](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%B5%B0%E4%BA%86%E4%BD%86%E5%8F%88%E5%A5%BD%E5%83%8F%E6%B2%A1%E8%B5%B0%23) `299.2K 🔥` `-27%`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `248.9K 🔥` `-48%`
1. [巴威登陆画面太吓人了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E7%94%BB%E9%9D%A2%E5%A4%AA%E5%90%93%E4%BA%BA%E4%BA%86%23) `222.6K 🔥` `-54%`
1. [王俊凯你要毁了丁程鑫吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BD%A0%E8%A6%81%E6%AF%81%E4%BA%86%E4%B8%81%E7%A8%8B%E9%91%AB%E5%90%97%23) `222.4K 🔥` `-74%`
1. [雷军回应做增程车](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%81%9A%E5%A2%9E%E7%A8%8B%E8%BD%A6%23) `221.1K 🔥` `-46%`
1. [阿根廷vs瑞士 (Argentina vs Switzerland)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E7%91%9E%E5%A3%AB%23) `221.0K 🔥` `-96%`

Updated at 2026-07-12 15:13:58

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
