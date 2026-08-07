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

1. [沙漠花棒有我一株 (I have a desert flower stick)](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%BC%A0%E8%8A%B1%E6%A3%92%E6%9C%89%E6%88%91%E4%B8%80%E6%A0%AA%23) `578.9K 🔥` `NEW`
1. [歌手总决赛](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%23) `566.6K 🔥` `NEW`
1. [王者荣耀直播](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E7%9B%B4%E6%92%AD%23) `453.7K 🔥` `NEW`
1. [雪佛兰将停止在华销售](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E4%BD%9B%E5%85%B0%E5%B0%86%E5%81%9C%E6%AD%A2%E5%9C%A8%E5%8D%8E%E9%94%80%E5%94%AE%23) `453.0K 🔥` `NEW`
1. [河南三支一扶笔试发放补助](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E7%AC%94%E8%AF%95%E5%8F%91%E6%94%BE%E8%A1%A5%E5%8A%A9%23) `449.5K 🔥` `NEW`
1. [没作弊的人 重考](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E4%BD%9C%E5%BC%8A%E7%9A%84%E4%BA%BA%20%E9%87%8D%E8%80%83%23) `447.4K 🔥` `NEW`
1. [幼儿园 倒闭](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%20%E5%80%92%E9%97%AD%23) `446.0K 🔥` `NEW`
1. [宋威龙吃了烤冷面夹臭豆腐](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%90%83%E4%BA%86%E7%83%A4%E5%86%B7%E9%9D%A2%E5%A4%B9%E8%87%AD%E8%B1%86%E8%85%90%23) `440.6K 🔥` `NEW`
1. [河南2026年三支一扶计划招募公告](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%972026%E5%B9%B4%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E8%AE%A1%E5%88%92%E6%8B%9B%E5%8B%9F%E5%85%AC%E5%91%8A%23) `438.7K 🔥` `NEW`
1. [王者萌新之夜表演赛直播](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%90%8C%E6%96%B0%E4%B9%8B%E5%A4%9C%E8%A1%A8%E6%BC%94%E8%B5%9B%E7%9B%B4%E6%92%AD%23) `416.4K 🔥` `NEW`
1. [天津72家拉面馆集体改名不实 (72 ramen restaurants in Tianjin collectively changed their names to be false)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A572%E5%AE%B6%E6%8B%89%E9%9D%A2%E9%A6%86%E9%9B%86%E4%BD%93%E6%94%B9%E5%90%8D%E4%B8%8D%E5%AE%9E%23) `414.8K 🔥` `NEW`
1. [柳智敏solo4登顶美趋](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8Fsolo4%E7%99%BB%E9%A1%B6%E7%BE%8E%E8%B6%8B%23) `379.9K 🔥` `NEW`
1. [苹果上调多款iPhone以旧换新折抵价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E4%B8%8A%E8%B0%83%E5%A4%9A%E6%AC%BEiPhone%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E6%8A%98%E6%8A%B5%E4%BB%B7%23) `325.9K 🔥` `NEW`
1. [原来拼豆都是老辈子玩剩下的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%8B%BC%E8%B1%86%E9%83%BD%E6%98%AF%E8%80%81%E8%BE%88%E5%AD%90%E7%8E%A9%E5%89%A9%E4%B8%8B%E7%9A%84%23) `259.8K 🔥` `NEW`
1. [国乒男单横滨冠军赛全军覆没](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E6%A8%AA%E6%BB%A8%E5%86%A0%E5%86%9B%E8%B5%9B%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `225.2K 🔥` `NEW`
1. [AI还有正常的剧宣吗](https://s.weibo.com/weibo?q=%23AI%E8%BF%98%E6%9C%89%E6%AD%A3%E5%B8%B8%E7%9A%84%E5%89%A7%E5%AE%A3%E5%90%97%23) `216.0K 🔥` `NEW`
1. [周杰伦专辑叫范特西的原因找到了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E4%B8%93%E8%BE%91%E5%8F%AB%E8%8C%83%E7%89%B9%E8%A5%BF%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `211.3K 🔥` `NEW`
1. [陈垣宇0比3张禹珍](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%9E%A3%E5%AE%870%E6%AF%943%E5%BC%A0%E7%A6%B9%E7%8F%8D%23) `209.5K 🔥` `NEW`
1. [章若楠问张凌赫身高还能蹿吗](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E9%97%AE%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BA%AB%E9%AB%98%E8%BF%98%E8%83%BD%E8%B9%BF%E5%90%97%23) `207.6K 🔥` `NEW`
1. [穆祉丞电竞男来了](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%94%B5%E7%AB%9E%E7%94%B7%E6%9D%A5%E4%BA%86%23) `196.0K 🔥` `NEW`
1. [南航回应西梅汁传言 (China Southern Airlines responds to prune juice rumors)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E8%88%AA%E5%9B%9E%E5%BA%94%E8%A5%BF%E6%A2%85%E6%B1%81%E4%BC%A0%E8%A8%80%23) `195.1K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `1.6M 🔥` `+43%`
1. [河南三支一扶笔试将重考 (Henan's three-branch and one-support written test will be retaken)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E7%AC%94%E8%AF%95%E5%B0%86%E9%87%8D%E8%80%83%23) `1.4M 🔥` `+21%`
1. [三支一扶作弊案](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E4%BD%9C%E5%BC%8A%E6%A1%88%23) `934.4K 🔥` `+81%`
1. [河南三支一扶作弊团伙被抓](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E4%BD%9C%E5%BC%8A%E5%9B%A2%E4%BC%99%E8%A2%AB%E6%8A%93%23) `410.9K 🔥` `+40%`
1. [前7个月货物贸易进出口超30万亿元](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E4%B8%AA%E6%9C%88%E8%B4%A7%E7%89%A9%E8%B4%B8%E6%98%93%E8%BF%9B%E5%87%BA%E5%8F%A3%E8%B6%8530%E4%B8%87%E4%BA%BF%E5%85%83%23) `1.0M 🔥`
1. [北京大雨](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%A4%A7%E9%9B%A8%23) `470.3K 🔥`
1. [D社曝BLACKPINK十周年内幕](https://s.weibo.com/weibo?q=%23D%E7%A4%BE%E6%9B%9DBLACKPINK%E5%8D%81%E5%91%A8%E5%B9%B4%E5%86%85%E5%B9%95%23) `435.2K 🔥`
1. [大麦称打击黄牛寸步不让](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E7%A7%B0%E6%89%93%E5%87%BB%E9%BB%84%E7%89%9B%E5%AF%B8%E6%AD%A5%E4%B8%8D%E8%AE%A9%23) `418.2K 🔥`
1. [原来这就是抑郁躯体化](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E6%8A%91%E9%83%81%E8%BA%AF%E4%BD%93%E5%8C%96%23) `413.9K 🔥`
1. [中际旭创盘中大跳水](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%99%85%E6%97%AD%E5%88%9B%E7%9B%98%E4%B8%AD%E5%A4%A7%E8%B7%B3%E6%B0%B4%23) `411.6K 🔥`
1. [立秋 (beginning of autumn)](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E7%A7%8B%23) `366.1K 🔥`
1. [Mina同学发声 (Mina classmate speaks out)](https://s.weibo.com/weibo?q=%23Mina%E5%90%8C%E5%AD%A6%E5%8F%91%E5%A3%B0%23) `281.0K 🔥`
1. [侯明昊回应违反交规](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%9B%9E%E5%BA%94%E8%BF%9D%E5%8F%8D%E4%BA%A4%E8%A7%84%23) `265.0K 🔥`
1. [我欲乘风](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `242.1K 🔥`
1. [飞机免费退改票真的来了](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E5%85%8D%E8%B4%B9%E9%80%80%E6%94%B9%E7%A5%A8%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `698.0K 🔥` `-44%`
1. [最尊重立秋的城市出现了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%B0%8A%E9%87%8D%E7%AB%8B%E7%A7%8B%E7%9A%84%E5%9F%8E%E5%B8%82%E5%87%BA%E7%8E%B0%E4%BA%86%23) `689.1K 🔥` `-36%`
1. [张雅琪晒中餐厅10图 (Zhang Yaqi posted 10 pictures of Chinese restaurants)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E6%99%92%E4%B8%AD%E9%A4%90%E5%8E%8510%E5%9B%BE%23) `442.1K 🔥` `-52%`
1. [虞书欣王一栩将三搭我欲乘风](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%8E%8B%E4%B8%80%E6%A0%A9%E5%B0%86%E4%B8%89%E6%90%AD%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `419.2K 🔥` `-21%`
1. [曝综艺因辛芷蕾延播](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%BB%BC%E8%89%BA%E5%9B%A0%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%BB%B6%E6%92%AD%23) `365.3K 🔥` `-38%`
1. [虞书欣工作室晒小兰花未公开照](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%99%92%E5%B0%8F%E5%85%B0%E8%8A%B1%E6%9C%AA%E5%85%AC%E5%BC%80%E7%85%A7%23) `363.9K 🔥` `-22%`
1. [泰国校园枪击已致7死](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%A0%A1%E5%9B%AD%E6%9E%AA%E5%87%BB%E5%B7%B2%E8%87%B47%E6%AD%BB%23) `321.2K 🔥` `-39%`
1. [不要空腹吃龙口粉丝 (Don’t eat Longkou vermicelli on an empty stomach)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%A9%BA%E8%85%B9%E5%90%83%E9%BE%99%E5%8F%A3%E7%B2%89%E4%B8%9D%23) `321.1K 🔥` `-38%`
1. [河南三支一扶笔试作弊犯罪细节](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E7%AC%94%E8%AF%95%E4%BD%9C%E5%BC%8A%E7%8A%AF%E7%BD%AA%E7%BB%86%E8%8A%82%23) `304.0K 🔥` `-26%`
1. [影视寒冬 进组难 (It’s a cold winter for film and television and it’s hard to join the cast)](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%20%E8%BF%9B%E7%BB%84%E9%9A%BE%23) `258.0K 🔥` `-36%`
1. [河南三支一扶考试存规模性组织作弊 (There are large-scale organized cheating in Henan's three branches and one support examination)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E8%80%83%E8%AF%95%E5%AD%98%E8%A7%84%E6%A8%A1%E6%80%A7%E7%BB%84%E7%BB%87%E4%BD%9C%E5%BC%8A%23) `231.6K 🔥` `-57%`
1. [女儿卖房定价9000被母亲7500签约](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%8D%96%E6%88%BF%E5%AE%9A%E4%BB%B79000%E8%A2%AB%E6%AF%8D%E4%BA%B27500%E7%AD%BE%E7%BA%A6%23) `204.4K 🔥` `-28%`
1. [吴倩女儿长这么大了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E5%A5%B3%E5%84%BF%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `203.7K 🔥` `-48%`
1. [宜宾 页岩气开采](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%20%E9%A1%B5%E5%B2%A9%E6%B0%94%E5%BC%80%E9%87%87%23) `200.3K 🔥` `-40%`
1. [建议成立中国稀土出口总公司总部设新疆 (It is recommended to establish China Rare Earth Export Corporation with its headquarters in Xinjiang)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%88%90%E7%AB%8B%E4%B8%AD%E5%9B%BD%E7%A8%80%E5%9C%9F%E5%87%BA%E5%8F%A3%E6%80%BB%E5%85%AC%E5%8F%B8%E6%80%BB%E9%83%A8%E8%AE%BE%E6%96%B0%E7%96%86%23) `195.2K 🔥` `-26%`
1. [大麦全年拦截恶意请求超60亿次](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E5%85%A8%E5%B9%B4%E6%8B%A6%E6%88%AA%E6%81%B6%E6%84%8F%E8%AF%B7%E6%B1%82%E8%B6%8560%E4%BA%BF%E6%AC%A1%23) `195.1K 🔥` `-66%`

Updated at 2026-08-07 19:29:38

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
