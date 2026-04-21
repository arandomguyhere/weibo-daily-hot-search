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

1. [挪用1700万打赏女孩父亲已基本破产 (The father of a girl who misappropriated 17 million in rewards is basically bankrupt)](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E7%94%A81700%E4%B8%87%E6%89%93%E8%B5%8F%E5%A5%B3%E5%AD%A9%E7%88%B6%E4%BA%B2%E5%B7%B2%E5%9F%BA%E6%9C%AC%E7%A0%B4%E4%BA%A7%23) `1.4M 🔥` `NEW`
1. [全新深蓝S07华为乾崑激光版15.99万起](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E6%B7%B1%E8%93%9DS07%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%BF%80%E5%85%89%E7%89%8815.99%E4%B8%87%E8%B5%B7%23) `879.2K 🔥` `NEW`
1. [华为乾崑奕境首车命名X9](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E5%A5%95%E5%A2%83%E9%A6%96%E8%BD%A6%E5%91%BD%E5%90%8DX9%23) `537.4K 🔥` `NEW`
1. [森林狼19分逆转掘金](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E7%8B%BC19%E5%88%86%E9%80%86%E8%BD%AC%E6%8E%98%E9%87%91%23) `497.8K 🔥` `NEW`
1. [路边停车欠费1.3万全额赔偿计息](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%BE%B9%E5%81%9C%E8%BD%A6%E6%AC%A0%E8%B4%B91.3%E4%B8%87%E5%85%A8%E9%A2%9D%E8%B5%94%E5%81%BF%E8%AE%A1%E6%81%AF%23) `496.3K 🔥` `NEW`
1. [张凌赫登上法国第一大报纸](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%99%BB%E4%B8%8A%E6%B3%95%E5%9B%BD%E7%AC%AC%E4%B8%80%E5%A4%A7%E6%8A%A5%E7%BA%B8%23) `495.3K 🔥` `NEW`
1. [何润东 直男写文下手没轻没重](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%20%E7%9B%B4%E7%94%B7%E5%86%99%E6%96%87%E4%B8%8B%E6%89%8B%E6%B2%A1%E8%BD%BB%E6%B2%A1%E9%87%8D%23) `442.3K 🔥` `NEW`
1. [航旅纵横崩了](https://s.weibo.com/weibo?q=%23%E8%88%AA%E6%97%85%E7%BA%B5%E6%A8%AA%E5%B4%A9%E4%BA%86%23) `439.9K 🔥` `NEW`
1. [李羲承 珀莱雅](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%20%E7%8F%80%E8%8E%B1%E9%9B%85%23) `439.8K 🔥` `NEW`
1. [杜若溪产后三个月暴减60斤](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E8%8B%A5%E6%BA%AA%E4%BA%A7%E5%90%8E%E4%B8%89%E4%B8%AA%E6%9C%88%E6%9A%B4%E5%87%8F60%E6%96%A4%23) `318.9K 🔥` `NEW`
1. [唐诡主创拍东方神话了 (Tang Gui is the director of Oriental Mythology)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%AF%A1%E4%B8%BB%E5%88%9B%E6%8B%8D%E4%B8%9C%E6%96%B9%E7%A5%9E%E8%AF%9D%E4%BA%86%23) `300.8K 🔥` `NEW`
1. [怦然心动20岁](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%23) `285.3K 🔥` `NEW`
1. [李小冉本名李晓冉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%9C%AC%E5%90%8D%E6%9D%8E%E6%99%93%E5%86%89%23) `256.7K 🔥` `NEW`
1. [都市丽人小地雷内衣被指辱女](https://s.weibo.com/weibo?q=%23%E9%83%BD%E5%B8%82%E4%B8%BD%E4%BA%BA%E5%B0%8F%E5%9C%B0%E9%9B%B7%E5%86%85%E8%A1%A3%E8%A2%AB%E6%8C%87%E8%BE%B1%E5%A5%B3%23) `229.0K 🔥` `NEW`
1. [马嘉祺宋亚轩是没抢到最后一排吗](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%98%AF%E6%B2%A1%E6%8A%A2%E5%88%B0%E6%9C%80%E5%90%8E%E4%B8%80%E6%8E%92%E5%90%97%23) `229.0K 🔥` `NEW`
1. [个人多缴公积金的好处](https://s.weibo.com/weibo?q=%23%E4%B8%AA%E4%BA%BA%E5%A4%9A%E7%BC%B4%E5%85%AC%E7%A7%AF%E9%87%91%E7%9A%84%E5%A5%BD%E5%A4%84%23) `224.8K 🔥` `NEW`
1. [这2种饮料混着喝可能永久损伤大脑](https://s.weibo.com/weibo?q=%23%E8%BF%992%E7%A7%8D%E9%A5%AE%E6%96%99%E6%B7%B7%E7%9D%80%E5%96%9D%E5%8F%AF%E8%83%BD%E6%B0%B8%E4%B9%85%E6%8D%9F%E4%BC%A4%E5%A4%A7%E8%84%91%23) `206.3K 🔥` `NEW`
1. [诗词里的黄河脉动](https://s.weibo.com/weibo?q=%23%E8%AF%97%E8%AF%8D%E9%87%8C%E7%9A%84%E9%BB%84%E6%B2%B3%E8%84%89%E5%8A%A8%23) `195.0K 🔥` `NEW`
1. [高一男生跳高2米引全场沸腾](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%80%E7%94%B7%E7%94%9F%E8%B7%B3%E9%AB%982%E7%B1%B3%E5%BC%95%E5%85%A8%E5%9C%BA%E6%B2%B8%E8%85%BE%23) `193.9K 🔥` `NEW`
1. [鱼第一次享受到了人工服务](https://s.weibo.com/weibo?q=%23%E9%B1%BC%E7%AC%AC%E4%B8%80%E6%AC%A1%E4%BA%AB%E5%8F%97%E5%88%B0%E4%BA%86%E4%BA%BA%E5%B7%A5%E6%9C%8D%E5%8A%A1%23) `559.4K 🔥` `+108%`
1. [张翰就医后前往移民局 (Zhang Han went to the Immigration Bureau after seeking medical treatment)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BF%B0%E5%B0%B1%E5%8C%BB%E5%90%8E%E5%89%8D%E5%BE%80%E7%A7%BB%E6%B0%91%E5%B1%80%23) `495.7K 🔥` `+70%`
1. [日本女主播遇7.7级地震一秒变脸 (Japanese female anchor's face changed in one second when she was hit by a 7.7-magnitude earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E4%B8%BB%E6%92%AD%E9%81%877.7%E7%BA%A7%E5%9C%B0%E9%9C%87%E4%B8%80%E7%A7%92%E5%8F%98%E8%84%B8%23) `495.4K 🔥` `+82%`
1. [42种图书入选2025年度中国好书](https://s.weibo.com/weibo?q=%2342%E7%A7%8D%E5%9B%BE%E4%B9%A6%E5%85%A5%E9%80%892025%E5%B9%B4%E5%BA%A6%E4%B8%AD%E5%9B%BD%E5%A5%BD%E4%B9%A6%23) `880.9K 🔥`
1. [工资高但是很孤独的工作](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%84%E9%AB%98%E4%BD%86%E6%98%AF%E5%BE%88%E5%AD%A4%E7%8B%AC%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `873.4K 🔥`
1. [新疆的作息时间太适合年轻人了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E7%9A%84%E4%BD%9C%E6%81%AF%E6%97%B6%E9%97%B4%E5%A4%AA%E9%80%82%E5%90%88%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%BA%86%23) `857.3K 🔥`
1. [余承东回应Pura90橘子海配色](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%9B%9E%E5%BA%94Pura90%E6%A9%98%E5%AD%90%E6%B5%B7%E9%85%8D%E8%89%B2%23) `499.0K 🔥`
1. [邱淑贞母女和工藤静香母女同框](https://s.weibo.com/weibo?q=%23%E9%82%B1%E6%B7%91%E8%B4%9E%E6%AF%8D%E5%A5%B3%E5%92%8C%E5%B7%A5%E8%97%A4%E9%9D%99%E9%A6%99%E6%AF%8D%E5%A5%B3%E5%90%8C%E6%A1%86%23) `339.5K 🔥`
1. [伊朗用特朗普方式对付特朗普](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%94%A8%E7%89%B9%E6%9C%97%E6%99%AE%E6%96%B9%E5%BC%8F%E5%AF%B9%E4%BB%98%E7%89%B9%E6%9C%97%E6%99%AE%23) `326.5K 🔥`
1. [一诺登场KPL八周年](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E7%99%BB%E5%9C%BAKPL%E5%85%AB%E5%91%A8%E5%B9%B4%23) `179.0K 🔥`
1. [余承东称Pura90PM不贴膜放心用](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0Pura90PM%E4%B8%8D%E8%B4%B4%E8%86%9C%E6%94%BE%E5%BF%83%E7%94%A8%23) `177.6K 🔥`
1. [超级地震或致日本国家崩塌 (Super earthquake may cause Japan to collapse)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%88%96%E8%87%B4%E6%97%A5%E6%9C%AC%E5%9B%BD%E5%AE%B6%E5%B4%A9%E5%A1%8C%23) `922.6K 🔥` `-40%`
1. [爱奇艺CEO龚宇发声](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BACEO%E9%BE%9A%E5%AE%87%E5%8F%91%E5%A3%B0%23) `499.8K 🔥` `-51%`
1. [县城农村成了AB货重灾区 (County and rural areas have become the hardest hit areas for AB goods)](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%9F%8E%E5%86%9C%E6%9D%91%E6%88%90%E4%BA%86AB%E8%B4%A7%E9%87%8D%E7%81%BE%E5%8C%BA%23) `499.8K 🔥` `-43%`
1. [宋承炫宣布当爸](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%89%BF%E7%82%AB%E5%AE%A3%E5%B8%83%E5%BD%93%E7%88%B8%23) `497.3K 🔥` `-42%`
1. [孙俪儿子画个妆直接能演甄嬛了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%84%BF%E5%AD%90%E7%94%BB%E4%B8%AA%E5%A6%86%E7%9B%B4%E6%8E%A5%E8%83%BD%E6%BC%94%E7%94%84%E5%AC%9B%E4%BA%86%23) `496.7K 🔥` `-36%`
1. [窈窈有期 硬刚爱奇艺](https://s.weibo.com/weibo?q=%23%E7%AA%88%E7%AA%88%E6%9C%89%E6%9C%9F%20%E7%A1%AC%E5%88%9A%E7%88%B1%E5%A5%87%E8%89%BA%23) `495.9K 🔥` `-42%`
1. [当财务去看演唱会](https://s.weibo.com/weibo?q=%23%E5%BD%93%E8%B4%A2%E5%8A%A1%E5%8E%BB%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `340.7K 🔥` `-64%`
1. [郑秀文好爱许志安](https://s.weibo.com/weibo?q=%23%E9%83%91%E7%A7%80%E6%96%87%E5%A5%BD%E7%88%B1%E8%AE%B8%E5%BF%97%E5%AE%89%23) `336.9K 🔥` `-50%`
1. [林高远从乒乓球网球到匹克球](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%AB%98%E8%BF%9C%E4%BB%8E%E4%B9%92%E4%B9%93%E7%90%83%E7%BD%91%E7%90%83%E5%88%B0%E5%8C%B9%E5%85%8B%E7%90%83%23) `298.3K 🔥` `-53%`
1. [SK回应女孩挪用上千万打赏主播](https://s.weibo.com/weibo?q=%23SK%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A8%E4%B8%8A%E5%8D%83%E4%B8%87%E6%89%93%E8%B5%8F%E4%B8%BB%E6%92%AD%23) `264.1K 🔥` `-68%`
1. [Liz不归还赞助的裤子引发争议](https://s.weibo.com/weibo?q=%23Liz%E4%B8%8D%E5%BD%92%E8%BF%98%E8%B5%9E%E5%8A%A9%E7%9A%84%E8%A3%A4%E5%AD%90%E5%BC%95%E5%8F%91%E4%BA%89%E8%AE%AE%23) `260.2K 🔥` `-69%`
1. [男子婚内中5340万转一女子2100万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%A9%9A%E5%86%85%E4%B8%AD5340%E4%B8%87%E8%BD%AC%E4%B8%80%E5%A5%B3%E5%AD%902100%E4%B8%87%23) `228.5K 🔥` `-40%`
1. [李小冉50岁状态我P都不敢P (Li Xiaoran is 50 years old and I don’t even dare to do it)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%8950%E5%B2%81%E7%8A%B6%E6%80%81%E6%88%91P%E9%83%BD%E4%B8%8D%E6%95%A2P%23) `227.1K 🔥` `-31%`
1. [曝某艺人需要助理穿袜子](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E8%89%BA%E4%BA%BA%E9%9C%80%E8%A6%81%E5%8A%A9%E7%90%86%E7%A9%BF%E8%A2%9C%E5%AD%90%23) `194.6K 🔥` `-65%`
1. [女子虐死男友3岁儿子被判死缓](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%99%90%E6%AD%BB%E7%94%B7%E5%8F%8B3%E5%B2%81%E5%84%BF%E5%AD%90%E8%A2%AB%E5%88%A4%E6%AD%BB%E7%BC%93%23) `190.0K 🔥` `-56%`
1. [鹿晗工作室](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `182.7K 🔥` `-73%`
1. [苹果新任CEO特努斯是谁](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%96%B0%E4%BB%BBCEO%E7%89%B9%E5%8A%AA%E6%96%AF%E6%98%AF%E8%B0%81%23) `182.2K 🔥` `-79%`
1. [森林狼vs掘金 (Timberwolves vs Nuggets)](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E7%8B%BCvs%E6%8E%98%E9%87%91%23) `181.6K 🔥` `-70%`
1. [F1紧急改规则](https://s.weibo.com/weibo?q=%23F1%E7%B4%A7%E6%80%A5%E6%94%B9%E8%A7%84%E5%88%99%23) `181.1K 🔥` `-71%`
1. [小米澎湃OS3核心升级汇总](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E6%B9%83OS3%E6%A0%B8%E5%BF%83%E5%8D%87%E7%BA%A7%E6%B1%87%E6%80%BB%23) `179.6K 🔥` `-69%`
1. [库克不再担任苹果CEO (Cook no longer serves as Apple CEO)](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E4%B8%8D%E5%86%8D%E6%8B%85%E4%BB%BB%E8%8B%B9%E6%9E%9CCEO%23) `178.5K 🔥` `-79%`

Updated at 2026-04-21 15:08:51

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
