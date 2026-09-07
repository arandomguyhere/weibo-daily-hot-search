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

1. [斯瓦泰克回应被逆转](https://s.weibo.com/weibo?q=%23%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%80%86%E8%BD%AC%23) `393.6K 🔥` `NEW`
1. [斯瓦泰克不敌郑钦文哭了](https://s.weibo.com/weibo?q=%23%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%E4%B8%8D%E6%95%8C%E9%83%91%E9%92%A6%E6%96%87%E5%93%AD%E4%BA%86%23) `274.0K 🔥` `NEW`
1. [郑钦文2比0斯瓦泰克](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%872%E6%AF%940%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%23) `213.7K 🔥` `NEW`
1. [追星被取消低保为何挑动大众神经](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E6%98%9F%E8%A2%AB%E5%8F%96%E6%B6%88%E4%BD%8E%E4%BF%9D%E4%B8%BA%E4%BD%95%E6%8C%91%E5%8A%A8%E5%A4%A7%E4%BC%97%E7%A5%9E%E7%BB%8F%23) `160.9K 🔥` `NEW`
1. [美国家庭为什么没有防盗网](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AE%B6%E5%BA%AD%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B2%A1%E6%9C%89%E9%98%B2%E7%9B%97%E7%BD%91%23) `107.6K 🔥` `NEW`
1. [华为阔直板](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%98%94%E7%9B%B4%E6%9D%BF%23) `74.9K 🔥` `NEW`
1. [鸿蒙7正式发布](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%997%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83%23) `74.1K 🔥` `NEW`
1. [郑钦文重返大满贯八强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%87%8D%E8%BF%94%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%85%AB%E5%BC%BA%23) `61.2K 🔥` `NEW`
1. [黑龙江电视台 卖药广告](https://s.weibo.com/weibo?q=%23%E9%BB%91%E9%BE%99%E6%B1%9F%E7%94%B5%E8%A7%86%E5%8F%B0%20%E5%8D%96%E8%8D%AF%E5%B9%BF%E5%91%8A%23) `54.6K 🔥` `NEW`
1. [郑钦文赛后加练](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%B5%9B%E5%90%8E%E5%8A%A0%E7%BB%83%23) `53.1K 🔥` `NEW`
1. [女子坐海盗船害怕靠近武僧被肘击](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9D%90%E6%B5%B7%E7%9B%97%E8%88%B9%E5%AE%B3%E6%80%95%E9%9D%A0%E8%BF%91%E6%AD%A6%E5%83%A7%E8%A2%AB%E8%82%98%E5%87%BB%23) `53.1K 🔥` `NEW`
1. [王楚钦孙颖莎守住世排第一](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E5%AE%88%E4%BD%8F%E4%B8%96%E6%8E%92%E7%AC%AC%E4%B8%80%23) `53.0K 🔥` `NEW`
1. [漠河大降温冷得车窗都上冻了](https://s.weibo.com/weibo?q=%23%E6%BC%A0%E6%B2%B3%E5%A4%A7%E9%99%8D%E6%B8%A9%E5%86%B7%E5%BE%97%E8%BD%A6%E7%AA%97%E9%83%BD%E4%B8%8A%E5%86%BB%E4%BA%86%23) `52.6K 🔥` `NEW`
1. [生逢其时](https://s.weibo.com/weibo?q=%23%E7%94%9F%E9%80%A2%E5%85%B6%E6%97%B6%23) `52.5K 🔥` `NEW`
1. [郑钦文逆转震惊美网](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%80%86%E8%BD%AC%E9%9C%87%E6%83%8A%E7%BE%8E%E7%BD%91%23) `1.2M 🔥` `+69%`
1. [时代楷模王戟最想对年轻人说](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E6%A5%B7%E6%A8%A1%E7%8E%8B%E6%88%9F%E6%9C%80%E6%83%B3%E5%AF%B9%E5%B9%B4%E8%BD%BB%E4%BA%BA%E8%AF%B4%23) `321.4K 🔥` `+130%`
1. [赵一鸣致歉](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%80%E9%B8%A3%E8%87%B4%E6%AD%89%23) `204.9K 🔥` `+60%`
1. [余承东建议苹果用户买华为备用机](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%BB%BA%E8%AE%AE%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%E4%B9%B0%E5%8D%8E%E4%B8%BA%E5%A4%87%E7%94%A8%E6%9C%BA%23) `168.2K 🔥` `+81%`
1. [偶像剧 软色情宣传](https://s.weibo.com/weibo?q=%23%E5%81%B6%E5%83%8F%E5%89%A7%20%E8%BD%AF%E8%89%B2%E6%83%85%E5%AE%A3%E4%BC%A0%23) `119.9K 🔥` `+71%`
1. [婚内强奸案男方姐姐称婚内不算强奸](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%86%85%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%94%B7%E6%96%B9%E5%A7%90%E5%A7%90%E7%A7%B0%E5%A9%9A%E5%86%85%E4%B8%8D%E7%AE%97%E5%BC%BA%E5%A5%B8%23) `93.1K 🔥` `+75%`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `73.0K 🔥` `+101%`
1. [失业者假装上班挤满图书馆](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E4%B8%9A%E8%80%85%E5%81%87%E8%A3%85%E4%B8%8A%E7%8F%AD%E6%8C%A4%E6%BB%A1%E5%9B%BE%E4%B9%A6%E9%A6%86%23) `58.3K 🔥` `+38%`
1. [女子称在餐厅被4岁男童摸臀监控曝光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%9C%A8%E9%A4%90%E5%8E%85%E8%A2%AB4%E5%B2%81%E7%94%B7%E7%AB%A5%E6%91%B8%E8%87%80%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `57.0K 🔥` `+35%`
1. [哪个行业已经悄悄好起来了](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%B8%AA%E8%A1%8C%E4%B8%9A%E5%B7%B2%E7%BB%8F%E6%82%84%E6%82%84%E5%A5%BD%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `56.7K 🔥` `+35%`
1. [小米澎程](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%23) `55.3K 🔥` `+36%`
1. [为什么年轻人都不喜欢带机械表了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B9%B4%E8%BD%BB%E4%BA%BA%E9%83%BD%E4%B8%8D%E5%96%9C%E6%AC%A2%E5%B8%A6%E6%9C%BA%E6%A2%B0%E8%A1%A8%E4%BA%86%23) `53.3K 🔥` `+29%`
1. [雷军状态被赞夯爆了](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%8A%B6%E6%80%81%E8%A2%AB%E8%B5%9E%E5%A4%AF%E7%88%86%E4%BA%86%23) `53.3K 🔥` `+26%`
1. [日本驻印度大使恒河沐浴](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%A9%BB%E5%8D%B0%E5%BA%A6%E5%A4%A7%E4%BD%BF%E6%81%92%E6%B2%B3%E6%B2%90%E6%B5%B4%23) `53.2K 🔥` `+40%`
1. [华为芯片国产替代](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%8A%AF%E7%89%87%E5%9B%BD%E4%BA%A7%E6%9B%BF%E4%BB%A3%23) `53.1K 🔥` `+46%`
1. [高钾饮食减重掉的很可能是水](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%92%BE%E9%A5%AE%E9%A3%9F%E5%87%8F%E9%87%8D%E6%8E%89%E7%9A%84%E5%BE%88%E5%8F%AF%E8%83%BD%E6%98%AF%E6%B0%B4%23) `53.0K 🔥` `+40%`
1. [短暂出现的人是奖励还是惩罚](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E6%9A%82%E5%87%BA%E7%8E%B0%E7%9A%84%E4%BA%BA%E6%98%AF%E5%A5%96%E5%8A%B1%E8%BF%98%E6%98%AF%E6%83%A9%E7%BD%9A%23) `52.9K 🔥` `+45%`
1. [王腾买了澎程N90Max](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E4%B9%B0%E4%BA%86%E6%BE%8E%E7%A8%8BN90Max%23) `52.9K 🔥` `+38%`
1. [用AI训练AI](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E8%AE%AD%E7%BB%83AI%23) `52.7K 🔥` `+45%`
1. [小米澎程原生电动升降顶舱](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E5%8E%9F%E7%94%9F%E7%94%B5%E5%8A%A8%E5%8D%87%E9%99%8D%E9%A1%B6%E8%88%B1%23) `52.7K 🔥` `+38%`
1. [葫芦娃爷爷隔壁咖啡店遭大量差评](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B7%E9%9A%94%E5%A3%81%E5%92%96%E5%95%A1%E5%BA%97%E9%81%AD%E5%A4%A7%E9%87%8F%E5%B7%AE%E8%AF%84%23) `52.7K 🔥` `+45%`
1. [孙千演过王鹤棣版道明寺未婚妻](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E6%BC%94%E8%BF%87%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%89%88%E9%81%93%E6%98%8E%E5%AF%BA%E6%9C%AA%E5%A9%9A%E5%A6%BB%23) `52.6K 🔥` `+25%`
1. [特斯拉降价车主集体破防](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E9%99%8D%E4%BB%B7%E8%BD%A6%E4%B8%BB%E9%9B%86%E4%BD%93%E7%A0%B4%E9%98%B2%23) `52.5K 🔥` `+45%`
1. [郑钦文vs斯瓦泰克](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%23) `200.0K 🔥`
1. [郑钦文即时排名逼近前50](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%8D%B3%E6%97%B6%E6%8E%92%E5%90%8D%E9%80%BC%E8%BF%91%E5%89%8D50%23) `140.9K 🔥`
1. [郑钦文三进美网8强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%B8%89%E8%BF%9B%E7%BE%8E%E7%BD%918%E5%BC%BA%23) `89.9K 🔥`
1. [宝格丽高珠晚宴](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E9%AB%98%E7%8F%A0%E6%99%9A%E5%AE%B4%23) `79.6K 🔥`
1. [他以为没吃到的是荷包蛋](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%BB%A5%E4%B8%BA%E6%B2%A1%E5%90%83%E5%88%B0%E7%9A%84%E6%98%AF%E8%8D%B7%E5%8C%85%E8%9B%8B%23) `60.0K 🔥`
1. [老九长文](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B9%9D%E9%95%BF%E6%96%87%23) `53.0K 🔥`
1. [小米澎程N90售价](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90%E5%94%AE%E4%BB%B7%23) `52.9K 🔥`
1. [TYLOO sword9](https://s.weibo.com/weibo?q=%23TYLOO%20sword9%23) `52.6K 🔥`
1. [郑钦文硬地首胜斯瓦泰克](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%A1%AC%E5%9C%B0%E9%A6%96%E8%83%9C%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%23) `53.3K 🔥` `-37%`
1. [王凯谈近几年接戏不多的原因](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%87%AF%E8%B0%88%E8%BF%91%E5%87%A0%E5%B9%B4%E6%8E%A5%E6%88%8F%E4%B8%8D%E5%A4%9A%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `53.2K 🔥` `-88%`
1. [迪拜父亲花300万为女儿买下白隼](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E7%88%B6%E4%BA%B2%E8%8A%B1300%E4%B8%87%E4%B8%BA%E5%A5%B3%E5%84%BF%E4%B9%B0%E4%B8%8B%E7%99%BD%E9%9A%BC%23) `52.8K 🔥` `-86%`
1. [张雅琪后继有人了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%90%8E%E7%BB%A7%E6%9C%89%E4%BA%BA%E4%BA%86%23) `52.8K 🔥` `-60%`
1. [小米发布会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E4%BC%9A%23) `52.8K 🔥` `-86%`

Updated at 2026-09-08 06:25:45

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
