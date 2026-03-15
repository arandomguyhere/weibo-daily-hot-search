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

1. [守护黄河用上了智能石头 (Smart stones are used to protect the Yellow River)](https://s.weibo.com/weibo?q=%23%E5%AE%88%E6%8A%A4%E9%BB%84%E6%B2%B3%E7%94%A8%E4%B8%8A%E4%BA%86%E6%99%BA%E8%83%BD%E7%9F%B3%E5%A4%B4%23) `783.7K 🔥` `NEW`
1. [美团外卖周末半价吃大餐](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E5%91%A8%E6%9C%AB%E5%8D%8A%E4%BB%B7%E5%90%83%E5%A4%A7%E9%A4%90%23) `737.5K 🔥` `NEW`
1. [孩子总说上吊卧轨竟因接触毒卡片](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E6%80%BB%E8%AF%B4%E4%B8%8A%E5%90%8A%E5%8D%A7%E8%BD%A8%E7%AB%9F%E5%9B%A0%E6%8E%A5%E8%A7%A6%E6%AF%92%E5%8D%A1%E7%89%87%23) `251.8K 🔥` `NEW`
1. [怪不得印度工业发达原来都是0成本](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%8D%B0%E5%BA%A6%E5%B7%A5%E4%B8%9A%E5%8F%91%E8%BE%BE%E5%8E%9F%E6%9D%A5%E9%83%BD%E6%98%AF0%E6%88%90%E6%9C%AC%23) `239.4K 🔥` `NEW`
1. [鹿哈 凌达乐](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E5%93%88%20%E5%87%8C%E8%BE%BE%E4%B9%90%23) `235.8K 🔥` `NEW`
1. [法拉利内斗](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%E5%86%85%E6%96%97%23) `231.6K 🔥` `NEW`
1. [维斯塔潘退赛](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E6%96%AF%E5%A1%94%E6%BD%98%E9%80%80%E8%B5%9B%23) `185.2K 🔥` `NEW`
1. [让客服电话说人话就这么难吗](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E5%AE%A2%E6%9C%8D%E7%94%B5%E8%AF%9D%E8%AF%B4%E4%BA%BA%E8%AF%9D%E5%B0%B1%E8%BF%99%E4%B9%88%E9%9A%BE%E5%90%97%23) `185.1K 🔥` `NEW`
1. [郝熠然 今晚见一面吧](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%20%E4%BB%8A%E6%99%9A%E8%A7%81%E4%B8%80%E9%9D%A2%E5%90%A7%23) `174.4K 🔥` `NEW`
1. [蒙牛普通奶粉暗示能长一米八八](https://s.weibo.com/weibo?q=%23%E8%92%99%E7%89%9B%E6%99%AE%E9%80%9A%E5%A5%B6%E7%B2%89%E6%9A%97%E7%A4%BA%E8%83%BD%E9%95%BF%E4%B8%80%E7%B1%B3%E5%85%AB%E5%85%AB%23) `144.3K 🔥` `NEW`
1. [Jennie和Maddy看起来像同一个人 (Jennie and Maddy look like the same person)](https://s.weibo.com/weibo?q=%23Jennie%E5%92%8CMaddy%E7%9C%8B%E8%B5%B7%E6%9D%A5%E5%83%8F%E5%90%8C%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `121.8K 🔥` `NEW`
1. [七种千万不能吃的食物](https://s.weibo.com/weibo?q=%23%E4%B8%83%E7%A7%8D%E5%8D%83%E4%B8%87%E4%B8%8D%E8%83%BD%E5%90%83%E7%9A%84%E9%A3%9F%E7%89%A9%23) `121.8K 🔥` `NEW`
1. [逐玉曾导抛媚眼给瞎子看](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%9B%BE%E5%AF%BC%E6%8A%9B%E5%AA%9A%E7%9C%BC%E7%BB%99%E7%9E%8E%E5%AD%90%E7%9C%8B%23) `121.5K 🔥` `NEW`
1. [张凌赫田曦薇没有杀青合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E6%B2%A1%E6%9C%89%E6%9D%80%E9%9D%92%E5%90%88%E7%85%A7%23) `117.0K 🔥` `NEW`
1. [899元进口保健品成本仅20元](https://s.weibo.com/weibo?q=%23899%E5%85%83%E8%BF%9B%E5%8F%A3%E4%BF%9D%E5%81%A5%E5%93%81%E6%88%90%E6%9C%AC%E4%BB%8520%E5%85%83%23) `98.8K 🔥` `NEW`
1. [电视剧品质盛典](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E5%93%81%E8%B4%A8%E7%9B%9B%E5%85%B8%23) `98.0K 🔥` `NEW`
1. [咖啡焖子](https://s.weibo.com/weibo?q=%23%E5%92%96%E5%95%A1%E7%84%96%E5%AD%90%23) `94.0K 🔥` `NEW`
1. [郭焱说温瑞博横空出世一战成名](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%84%B1%E8%AF%B4%E6%B8%A9%E7%91%9E%E5%8D%9A%E6%A8%AA%E7%A9%BA%E5%87%BA%E4%B8%96%E4%B8%80%E6%88%98%E6%88%90%E5%90%8D%23) `87.2K 🔥` `NEW`
1. [央视315晚会点名食品安全领域](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86315%E6%99%9A%E4%BC%9A%E7%82%B9%E5%90%8D%E9%A3%9F%E5%93%81%E5%AE%89%E5%85%A8%E9%A2%86%E5%9F%9F%23) `85.1K 🔥` `NEW`
1. [草莓拼豆](https://s.weibo.com/weibo?q=%23%E8%8D%89%E8%8E%93%E6%8B%BC%E8%B1%86%23) `85.0K 🔥` `NEW`
1. [刘文祥刚爆火就塌房 (Liu Wenxiang's house collapsed just after the fire broke out)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E5%88%9A%E7%88%86%E7%81%AB%E5%B0%B1%E5%A1%8C%E6%88%BF%23) `1.0M 🔥` `+36%`
1. [何晟铭因不愿演男主和于正冷战 (He Shengming had a cold war with Yu Zheng because he didn't want to play the male lead.)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%99%9F%E9%93%AD%E5%9B%A0%E4%B8%8D%E6%84%BF%E6%BC%94%E7%94%B7%E4%B8%BB%E5%92%8C%E4%BA%8E%E6%AD%A3%E5%86%B7%E6%88%98%23) `243.3K 🔥` `+113%`
1. [李煜东发文](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%85%9C%E4%B8%9C%E5%8F%91%E6%96%87%23) `107.1K 🔥` `+50%`
1. [鹿哈或需赔偿消费者26.9亿元 (Luha may have to compensate consumers 2.69 billion yuan)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E5%93%88%E6%88%96%E9%9C%80%E8%B5%94%E5%81%BF%E6%B6%88%E8%B4%B9%E8%80%8526.9%E4%BA%BF%E5%85%83%23) `2.2M 🔥`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `382.8K 🔥`
1. [眼镜镜片标价799元进价仅15元](https://s.weibo.com/weibo?q=%23%E7%9C%BC%E9%95%9C%E9%95%9C%E7%89%87%E6%A0%87%E4%BB%B7799%E5%85%83%E8%BF%9B%E4%BB%B7%E4%BB%8515%E5%85%83%23) `324.7K 🔥`
1. [泡椒凤爪的泡椒竟是印上去的 (The pickled peppers in the pickled pepper chicken feet are actually printed on them.)](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%A4%92%E5%87%A4%E7%88%AA%E7%9A%84%E6%B3%A1%E6%A4%92%E7%AB%9F%E6%98%AF%E5%8D%B0%E4%B8%8A%E5%8E%BB%E7%9A%84%23) `251.8K 🔥`
1. [成毅 年龄 (Cheng Yi age)](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%20%E5%B9%B4%E9%BE%84%23) `246.8K 🔥`
1. [梁婷 成毅报户口的时候报大一岁](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%A9%B7%20%E6%88%90%E6%AF%85%E6%8A%A5%E6%88%B7%E5%8F%A3%E7%9A%84%E6%97%B6%E5%80%99%E6%8A%A5%E5%A4%A7%E4%B8%80%E5%B2%81%23) `225.6K 🔥`
1. [保证前额叶健康太重要了](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E8%AF%81%E5%89%8D%E9%A2%9D%E5%8F%B6%E5%81%A5%E5%BA%B7%E5%A4%AA%E9%87%8D%E8%A6%81%E4%BA%86%23) `224.1K 🔥`
1. [刘文祥店员说20元1斤能是纯牛肉吗 (Liu Wenxiang, the clerk said, can 20 yuan per pound be pure beef?)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E5%BA%97%E5%91%98%E8%AF%B420%E5%85%831%E6%96%A4%E8%83%BD%E6%98%AF%E7%BA%AF%E7%89%9B%E8%82%89%E5%90%97%23) `195.6K 🔥`
1. [伊朗用涂鸦骗导弹轰炸](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%94%A8%E6%B6%82%E9%B8%A6%E9%AA%97%E5%AF%BC%E5%BC%B9%E8%BD%B0%E7%82%B8%23) `185.1K 🔥`
1. [25岁儿子毕业不工作急哭父亲 (The 25-year-old son is crying because he has no job after graduation.)](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%84%BF%E5%AD%90%E6%AF%95%E4%B8%9A%E4%B8%8D%E5%B7%A5%E4%BD%9C%E6%80%A5%E5%93%AD%E7%88%B6%E4%BA%B2%23) `167.9K 🔥`
1. [央视调查某茶饮品牌遭恶意抹黑始末](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B0%83%E6%9F%A5%E6%9F%90%E8%8C%B6%E9%A5%AE%E5%93%81%E7%89%8C%E9%81%AD%E6%81%B6%E6%84%8F%E6%8A%B9%E9%BB%91%E5%A7%8B%E6%9C%AB%23) `167.8K 🔥`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `142.4K 🔥`
1. [100万装出了10万的装修效果](https://s.weibo.com/weibo?q=%23100%E4%B8%87%E8%A3%85%E5%87%BA%E4%BA%8610%E4%B8%87%E7%9A%84%E8%A3%85%E4%BF%AE%E6%95%88%E6%9E%9C%23) `123.5K 🔥`
1. [315记者直击酒店偷拍黑色产业链 (315 reporter directly investigates the black industrial chain of secretly photographed hotels)](https://s.weibo.com/weibo?q=%23315%E8%AE%B0%E8%80%85%E7%9B%B4%E5%87%BB%E9%85%92%E5%BA%97%E5%81%B7%E6%8B%8D%E9%BB%91%E8%89%B2%E4%BA%A7%E4%B8%9A%E9%93%BE%23) `120.7K 🔥`
1. [亿级APP存在大量儿童软色情内容](https://s.weibo.com/weibo?q=%23%E4%BA%BF%E7%BA%A7APP%E5%AD%98%E5%9C%A8%E5%A4%A7%E9%87%8F%E5%84%BF%E7%AB%A5%E8%BD%AF%E8%89%B2%E6%83%85%E5%86%85%E5%AE%B9%23) `117.2K 🔥`
1. [窦骁在何超莲vlog出镜](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%AA%81%E5%9C%A8%E4%BD%95%E8%B6%85%E8%8E%B2vlog%E5%87%BA%E9%95%9C%23) `110.8K 🔥`
1. [泰国遇害中国女子丈夫发声](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E9%81%87%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E4%B8%88%E5%A4%AB%E5%8F%91%E5%A3%B0%23) `108.5K 🔥`
1. [金道勋 ana](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%81%93%E5%8B%8B%20ana%23) `102.1K 🔥`
1. [F1取消四月全部赛事](https://s.weibo.com/weibo?q=%23F1%E5%8F%96%E6%B6%88%E5%9B%9B%E6%9C%88%E5%85%A8%E9%83%A8%E8%B5%9B%E4%BA%8B%23) `95.0K 🔥`
1. [虞书欣拍上云初令短剧了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%8B%8D%E4%B8%8A%E4%BA%91%E5%88%9D%E4%BB%A4%E7%9F%AD%E5%89%A7%E4%BA%86%23) `87.7K 🔥`
1. [315](https://s.weibo.com/weibo?q=%23315%23) `494.9K 🔥` `-50%`
1. [美宜佳致歉](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%9C%E4%BD%B3%E8%87%B4%E6%AD%89%23) `350.9K 🔥` `-24%`
1. [温瑞博4比2张本智和](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A4%E6%AF%942%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `326.6K 🔥` `-29%`
1. [夏之光 我的家庭没有能力兜底](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E4%B9%8B%E5%85%89%20%E6%88%91%E7%9A%84%E5%AE%B6%E5%BA%AD%E6%B2%A1%E6%9C%89%E8%83%BD%E5%8A%9B%E5%85%9C%E5%BA%95%23) `161.8K 🔥` `-26%`
1. [迈凯轮双车退赛 (McLaren both cars withdraw from race)](https://s.weibo.com/weibo?q=%23%E8%BF%88%E5%87%AF%E8%BD%AE%E5%8F%8C%E8%BD%A6%E9%80%80%E8%B5%9B%23) `135.2K 🔥` `-56%`
1. [刘文祥 (Liu Wenxiang)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%23) `87.3K 🔥` `-25%`
1. [谭松韵别试探了有市场](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%88%AB%E8%AF%95%E6%8E%A2%E4%BA%86%E6%9C%89%E5%B8%82%E5%9C%BA%23) `87.0K 🔥` `-47%`
1. [网友卢浮宫偶遇素颜刘亦菲](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%8D%A2%E6%B5%AE%E5%AE%AB%E5%81%B6%E9%81%87%E7%B4%A0%E9%A2%9C%E5%88%98%E4%BA%A6%E8%8F%B2%23) `86.5K 🔥` `-31%`

Updated at 2026-03-15 16:36:27

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
