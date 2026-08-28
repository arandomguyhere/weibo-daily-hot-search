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

1. [个人住房贷款期限不超40年 (The term of personal housing loan does not exceed 40 years)](https://s.weibo.com/weibo?q=%23%E4%B8%AA%E4%BA%BA%E4%BD%8F%E6%88%BF%E8%B4%B7%E6%AC%BE%E6%9C%9F%E9%99%90%E4%B8%8D%E8%B6%8540%E5%B9%B4%23) `1.1M 🔥` `NEW`
1. [男子面试被拒收到1000元茶水费](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%9D%A2%E8%AF%95%E8%A2%AB%E6%8B%92%E6%94%B6%E5%88%B01000%E5%85%83%E8%8C%B6%E6%B0%B4%E8%B4%B9%23) `822.9K 🔥` `NEW`
1. [各类救援力量在西藏吉隆抢险救援](https://s.weibo.com/weibo?q=%23%E5%90%84%E7%B1%BB%E6%95%91%E6%8F%B4%E5%8A%9B%E9%87%8F%E5%9C%A8%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%8A%A2%E9%99%A9%E6%95%91%E6%8F%B4%23) `639.8K 🔥` `NEW`
1. [智元机器人戴着工牌就把金牌拿了](https://s.weibo.com/weibo?q=%23%E6%99%BA%E5%85%83%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%88%B4%E7%9D%80%E5%B7%A5%E7%89%8C%E5%B0%B1%E6%8A%8A%E9%87%91%E7%89%8C%E6%8B%BF%E4%BA%86%23) `637.3K 🔥` `NEW`
1. [极禹](https://s.weibo.com/weibo?q=%23%E6%9E%81%E7%A6%B9%23) `599.0K 🔥` `NEW`
1. [原来还有这么多小众的工作](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%98%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B0%8F%E4%BC%97%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `578.1K 🔥` `NEW`
1. [iG战胜TT](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CTT%23) `512.3K 🔥` `NEW`
1. [青铜峡拦河大坝泄洪不实](https://s.weibo.com/weibo?q=%23%E9%9D%92%E9%93%9C%E5%B3%A1%E6%8B%A6%E6%B2%B3%E5%A4%A7%E5%9D%9D%E6%B3%84%E6%B4%AA%E4%B8%8D%E5%AE%9E%23) `507.7K 🔥` `NEW`
1. [民警黄棚已在吉隆口岸坚守13年](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E9%BB%84%E6%A3%9A%E5%B7%B2%E5%9C%A8%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%9D%9A%E5%AE%8813%E5%B9%B4%23) `507.2K 🔥` `NEW`
1. [神23航天员完成出舱](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E8%88%AA%E5%A4%A9%E5%91%98%E5%AE%8C%E6%88%90%E5%87%BA%E8%88%B1%23) `497.2K 🔥` `NEW`
1. [青春芒果夜取消直播 (Youth Mango Night canceled live broadcast)](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E8%8A%92%E6%9E%9C%E5%A4%9C%E5%8F%96%E6%B6%88%E7%9B%B4%E6%92%AD%23) `494.4K 🔥` `NEW`
1. [蒋超良受贿7.46亿余元](https://s.weibo.com/weibo?q=%23%E8%92%8B%E8%B6%85%E8%89%AF%E5%8F%97%E8%B4%BF7.46%E4%BA%BF%E4%BD%99%E5%85%83%23) `377.4K 🔥` `NEW`
1. [张子枫瘦成李维嘉了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E7%98%A6%E6%88%90%E6%9D%8E%E7%BB%B4%E5%98%89%E4%BA%86%23) `375.7K 🔥` `NEW`
1. [吉隆泥石流](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `372.0K 🔥` `NEW`
1. [刘雯井柏然恋情时间线](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E4%BA%95%E6%9F%8F%E7%84%B6%E6%81%8B%E6%83%85%E6%97%B6%E9%97%B4%E7%BA%BF%23) `366.7K 🔥` `NEW`
1. [给内耗人的一句终极解药](https://s.weibo.com/weibo?q=%23%E7%BB%99%E5%86%85%E8%80%97%E4%BA%BA%E7%9A%84%E4%B8%80%E5%8F%A5%E7%BB%88%E6%9E%81%E8%A7%A3%E8%8D%AF%23) `329.6K 🔥` `NEW`
1. [金鹿奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%BF%E5%A5%96%23) `319.4K 🔥` `NEW`
1. [虞书欣签售会](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%AD%BE%E5%94%AE%E4%BC%9A%23) `319.2K 🔥` `NEW`
1. [游客频繁借用厕所民宿老板崩溃](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E9%A2%91%E7%B9%81%E5%80%9F%E7%94%A8%E5%8E%95%E6%89%80%E6%B0%91%E5%AE%BF%E8%80%81%E6%9D%BF%E5%B4%A9%E6%BA%83%23) `316.4K 🔥` `NEW`
1. [吉隆附近雪山发生雪崩](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E9%99%84%E8%BF%91%E9%9B%AA%E5%B1%B1%E5%8F%91%E7%94%9F%E9%9B%AA%E5%B4%A9%23) `291.6K 🔥` `NEW`
1. [长鑫科技净利润 (Changxin Technology Net Profit)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%87%80%E5%88%A9%E6%B6%A6%23) `290.0K 🔥` `NEW`
1. [消防救援队已抵达受灾核心区](https://s.weibo.com/weibo?q=%23%E6%B6%88%E9%98%B2%E6%95%91%E6%8F%B4%E9%98%9F%E5%B7%B2%E6%8A%B5%E8%BE%BE%E5%8F%97%E7%81%BE%E6%A0%B8%E5%BF%83%E5%8C%BA%23) `289.2K 🔥` `NEW`
1. [原来男生的喜欢真的很明显](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%94%B7%E7%94%9F%E7%9A%84%E5%96%9C%E6%AC%A2%E7%9C%9F%E7%9A%84%E5%BE%88%E6%98%8E%E6%98%BE%23) `289.2K 🔥` `NEW`
1. [帮扶老人遭索赔店主捐12万](https://s.weibo.com/weibo?q=%23%E5%B8%AE%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E5%BA%97%E4%B8%BB%E6%8D%9012%E4%B8%87%23) `289.1K 🔥` `NEW`
1. [金鹿奖获奖名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%BF%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `276.9K 🔥` `NEW`
1. [吉隆泥石流已致5人遇难558人失联](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%B7%B2%E8%87%B45%E4%BA%BA%E9%81%87%E9%9A%BE558%E4%BA%BA%E5%A4%B1%E8%81%94%23) `250.9K 🔥` `NEW`
1. [内存和SoC的价格真的倒挂了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E5%92%8CSoC%E7%9A%84%E4%BB%B7%E6%A0%BC%E7%9C%9F%E7%9A%84%E5%80%92%E6%8C%82%E4%BA%86%23) `246.3K 🔥` `NEW`
1. [管泽元 Bin](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%20Bin%23) `244.9K 🔥` `NEW`
1. [李登科猜到剧组夫妻是谁](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E7%8C%9C%E5%88%B0%E5%89%A7%E7%BB%84%E5%A4%AB%E5%A6%BB%E6%98%AF%E8%B0%81%23) `235.1K 🔥` `NEW`
1. [武警官兵正全力抢通道路](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E8%AD%A6%E5%AE%98%E5%85%B5%E6%AD%A3%E5%85%A8%E5%8A%9B%E6%8A%A2%E9%80%9A%E9%81%93%E8%B7%AF%23) `217.4K 🔥` `NEW`
1. [小沈阳一公排名 (Xiaoshenyang first public ranking)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E4%B8%80%E5%85%AC%E6%8E%92%E5%90%8D%23) `210.9K 🔥` `NEW`
1. [日本医院给孩子注射65毫升止痛药](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8C%BB%E9%99%A2%E7%BB%99%E5%AD%A9%E5%AD%90%E6%B3%A8%E5%B0%8465%E6%AF%AB%E5%8D%87%E6%AD%A2%E7%97%9B%E8%8D%AF%23) `210.4K 🔥` `NEW`
1. [精神小妹混上清华在校养老vlog](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%A5%9E%E5%B0%8F%E5%A6%B9%E6%B7%B7%E4%B8%8A%E6%B8%85%E5%8D%8E%E5%9C%A8%E6%A0%A1%E5%85%BB%E8%80%81vlog%23) `210.2K 🔥` `NEW`
1. [上千人到民宿上厕所老板决定收费](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%83%E4%BA%BA%E5%88%B0%E6%B0%91%E5%AE%BF%E4%B8%8A%E5%8E%95%E6%89%80%E8%80%81%E6%9D%BF%E5%86%B3%E5%AE%9A%E6%94%B6%E8%B4%B9%23) `200.7K 🔥` `NEW`
1. [苹果折叠机溢价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%8A%98%E5%8F%A0%E6%9C%BA%E6%BA%A2%E4%BB%B7%23) `199.2K 🔥` `NEW`
1. [吉隆口岸泥石流可视化还原](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%8F%AF%E8%A7%86%E5%8C%96%E8%BF%98%E5%8E%9F%23) `199.0K 🔥` `NEW`
1. [TOP演唱会现场下大雨](https://s.weibo.com/weibo?q=%23TOP%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8E%B0%E5%9C%BA%E4%B8%8B%E5%A4%A7%E9%9B%A8%23) `192.1K 🔥` `NEW`
1. [保时捷车主称智界RX是科技法拉利](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E8%BD%A6%E4%B8%BB%E7%A7%B0%E6%99%BA%E7%95%8CRX%E6%98%AF%E7%A7%91%E6%8A%80%E6%B3%95%E6%8B%89%E5%88%A9%23) `190.3K 🔥` `NEW`
1. [王者荣耀抽奖](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%8A%BD%E5%A5%96%23) `190.1K 🔥` `NEW`
1. [易烊千玺首次开通对接账号](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E9%A6%96%E6%AC%A1%E5%BC%80%E9%80%9A%E5%AF%B9%E6%8E%A5%E8%B4%A6%E5%8F%B7%23) `182.4K 🔥` `NEW`
1. [王俊凯打开手机天塌了 (Wang Junkai turned on his mobile phone and the sky fell.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `173.5K 🔥` `NEW`
1. [一汽大众T6把4.8米纯电SUV打到13万](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%97T6%E6%8A%8A4.8%E7%B1%B3%E7%BA%AF%E7%94%B5SUV%E6%89%93%E5%88%B013%E4%B8%87%23) `169.5K 🔥` `NEW`
1. [小沈阳选人被拒绝九次](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E9%80%89%E4%BA%BA%E8%A2%AB%E6%8B%92%E7%BB%9D%E4%B9%9D%E6%AC%A1%23) `167.2K 🔥` `NEW`
1. [华为阔直板预订爆单](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%98%94%E7%9B%B4%E6%9D%BF%E9%A2%84%E8%AE%A2%E7%88%86%E5%8D%95%23) `143.6K 🔥` `NEW`
1. [TT对战iG](https://s.weibo.com/weibo?q=%23TT%E5%AF%B9%E6%88%98iG%23) `134.5K 🔥` `NEW`
1. [追了很久的人为什么不建议在一起](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E4%BA%86%E5%BE%88%E4%B9%85%E7%9A%84%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `128.2K 🔥` `NEW`
1. [空军无人机发现雪山发生雪崩并通报预警](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E5%86%9B%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%8F%91%E7%8E%B0%E9%9B%AA%E5%B1%B1%E5%8F%91%E7%94%9F%E9%9B%AA%E5%B4%A9%E5%B9%B6%E9%80%9A%E6%8A%A5%E9%A2%84%E8%AD%A6%23) `126.6K 🔥` `NEW`
1. [人需要一些世俗意义上的成功](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E9%9C%80%E8%A6%81%E4%B8%80%E4%BA%9B%E4%B8%96%E4%BF%97%E6%84%8F%E4%B9%89%E4%B8%8A%E7%9A%84%E6%88%90%E5%8A%9F%23) `120.2K 🔥` `NEW`
1. [jiejie回应四入涅槃](https://s.weibo.com/weibo?q=%23jiejie%E5%9B%9E%E5%BA%94%E5%9B%9B%E5%85%A5%E6%B6%85%E6%A7%83%23) `114.0K 🔥` `NEW`
1. [韩警方确认遇害中国女生遗体身份](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E7%A1%AE%E8%AE%A4%E9%81%87%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E9%81%97%E4%BD%93%E8%BA%AB%E4%BB%BD%23) `113.7K 🔥` `NEW`
1. [工商银行业绩 (ICBC performance)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E5%95%86%E9%93%B6%E8%A1%8C%E4%B8%9A%E7%BB%A9%23) `112.6K 🔥` `NEW`
1. [挪威国王逝世](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E5%9B%BD%E7%8E%8B%E9%80%9D%E4%B8%96%23) `105.7K 🔥` `NEW`

Updated at 2026-08-28 20:11:49

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
