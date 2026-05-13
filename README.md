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

1. [女子病逝弟弟获857万女儿仅获手机 (Woman died of illness, her brother received 8.57 million yuan, and her daughter only received a mobile phone)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%97%85%E9%80%9D%E5%BC%9F%E5%BC%9F%E8%8E%B7857%E4%B8%87%E5%A5%B3%E5%84%BF%E4%BB%85%E8%8E%B7%E6%89%8B%E6%9C%BA%23) `1.2M 🔥` `NEW`
1. [从4月先行指标看我国经济持续向好](https://s.weibo.com/weibo?q=%23%E4%BB%8E4%E6%9C%88%E5%85%88%E8%A1%8C%E6%8C%87%E6%A0%87%E7%9C%8B%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E6%8C%81%E7%BB%AD%E5%90%91%E5%A5%BD%23) `1.1M 🔥` `NEW`
1. [迪士尼优速通](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%E4%BC%98%E9%80%9F%E9%80%9A%23) `1.0M 🔥` `NEW`
1. [灰熊球员布兰登克拉克去世](https://s.weibo.com/weibo?q=%23%E7%81%B0%E7%86%8A%E7%90%83%E5%91%98%E5%B8%83%E5%85%B0%E7%99%BB%E5%85%8B%E6%8B%89%E5%85%8B%E5%8E%BB%E4%B8%96%23) `1.0M 🔥` `NEW`
1. [郑业成不知道佳偶天成被配音](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%9A%E6%88%90%E4%B8%8D%E7%9F%A5%E9%81%93%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%E8%A2%AB%E9%85%8D%E9%9F%B3%23) `949.6K 🔥` `NEW`
1. [巩俐中文宣布戛纳开幕](https://s.weibo.com/weibo?q=%23%E5%B7%A9%E4%BF%90%E4%B8%AD%E6%96%87%E5%AE%A3%E5%B8%83%E6%88%9B%E7%BA%B3%E5%BC%80%E5%B9%95%23) `811.7K 🔥` `NEW`
1. [贾跃亭宣布转战机器人业务](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E8%B7%83%E4%BA%AD%E5%AE%A3%E5%B8%83%E8%BD%AC%E6%88%98%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%B8%9A%E5%8A%A1%23) `579.9K 🔥` `NEW`
1. [特朗普启程](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%90%AF%E7%A8%8B%23) `573.6K 🔥` `NEW`
1. [白鹿也被泼水了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B9%9F%E8%A2%AB%E6%B3%BC%E6%B0%B4%E4%BA%86%23) `547.0K 🔥` `NEW`
1. [阿娇 短剧](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A8%87%20%E7%9F%AD%E5%89%A7%23) `525.7K 🔥` `NEW`
1. [中国明星戛纳生图 (Chinese celebrities born in Cannes)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%98%8E%E6%98%9F%E6%88%9B%E7%BA%B3%E7%94%9F%E5%9B%BE%23) `425.2K 🔥` `NEW`
1. [跟你们不爱健身的说不清楚](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E4%BD%A0%E4%BB%AC%E4%B8%8D%E7%88%B1%E5%81%A5%E8%BA%AB%E7%9A%84%E8%AF%B4%E4%B8%8D%E6%B8%85%E6%A5%9A%23) `411.6K 🔥` `NEW`
1. [AI圈突传大变局](https://s.weibo.com/weibo?q=%23AI%E5%9C%88%E7%AA%81%E4%BC%A0%E5%A4%A7%E5%8F%98%E5%B1%80%23) `286.0K 🔥` `NEW`
1. [男子直视太阳10分钟视力降至0.4](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%9B%B4%E8%A7%86%E5%A4%AA%E9%98%B310%E5%88%86%E9%92%9F%E8%A7%86%E5%8A%9B%E9%99%8D%E8%87%B30.4%23) `285.9K 🔥` `NEW`
1. [网红糖果掺超高剂量伟哥](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%B3%96%E6%9E%9C%E6%8E%BA%E8%B6%85%E9%AB%98%E5%89%82%E9%87%8F%E4%BC%9F%E5%93%A5%23) `285.2K 🔥` `NEW`
1. [戛纳红毯](https://s.weibo.com/weibo?q=%23%E6%88%9B%E7%BA%B3%E7%BA%A2%E6%AF%AF%23) `284.6K 🔥` `NEW`
1. [柬埔寨电诈园区被警方突袭视频曝光](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E8%A2%AB%E8%AD%A6%E6%96%B9%E7%AA%81%E8%A2%AD%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `284.2K 🔥` `NEW`
1. [任何关系都是阶段性陪伴](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E4%BD%95%E5%85%B3%E7%B3%BB%E9%83%BD%E6%98%AF%E9%98%B6%E6%AE%B5%E6%80%A7%E9%99%AA%E4%BC%B4%23) `282.0K 🔥` `NEW`
1. [全国多地蛇开始活动了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%A4%9A%E5%9C%B0%E8%9B%87%E5%BC%80%E5%A7%8B%E6%B4%BB%E5%8A%A8%E4%BA%86%23) `281.3K 🔥` `NEW`
1. [马斯克库克等将随特朗普访华](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%BA%93%E5%85%8B%E7%AD%89%E5%B0%86%E9%9A%8F%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%23) `267.3K 🔥` `NEW`
1. [黄柳霜 (Anna May Wong)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%9F%B3%E9%9C%9C%23) `194.6K 🔥` `NEW`
1. [一天内2个NBA球员去世](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A9%E5%86%852%E4%B8%AANBA%E7%90%83%E5%91%98%E5%8E%BB%E4%B8%96%23) `194.6K 🔥` `NEW`
1. [谢可寅首次亮相戛纳](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%8F%AF%E5%AF%85%E9%A6%96%E6%AC%A1%E4%BA%AE%E7%9B%B8%E6%88%9B%E7%BA%B3%23) `194.5K 🔥` `NEW`
1. [NBA众球员悼念布兰登克拉克](https://s.weibo.com/weibo?q=%23NBA%E4%BC%97%E7%90%83%E5%91%98%E6%82%BC%E5%BF%B5%E5%B8%83%E5%85%B0%E7%99%BB%E5%85%8B%E6%8B%89%E5%85%8B%23) `194.5K 🔥` `NEW`
1. [佳偶天成](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%23) `194.5K 🔥` `NEW`
1. [日落大道将以英语和普通话拍摄](https://s.weibo.com/weibo?q=%23%E6%97%A5%E8%90%BD%E5%A4%A7%E9%81%93%E5%B0%86%E4%BB%A5%E8%8B%B1%E8%AF%AD%E5%92%8C%E6%99%AE%E9%80%9A%E8%AF%9D%E6%8B%8D%E6%91%84%23) `194.5K 🔥` `NEW`
1. [我国成功发射千帆极轨09组卫星](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%88%90%E5%8A%9F%E5%8F%91%E5%B0%84%E5%8D%83%E5%B8%86%E6%9E%81%E8%BD%A809%E7%BB%84%E5%8D%AB%E6%98%9F%23) `192.5K 🔥` `NEW`
1. [OpenAI奥特曼指控马斯克](https://s.weibo.com/weibo?q=%23OpenAI%E5%A5%A5%E7%89%B9%E6%9B%BC%E6%8C%87%E6%8E%A7%E9%A9%AC%E6%96%AF%E5%85%8B%23) `191.8K 🔥` `NEW`
1. [汪涵和何炅同龄](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B6%B5%E5%92%8C%E4%BD%95%E7%82%85%E5%90%8C%E9%BE%84%23) `190.1K 🔥` `NEW`
1. [久诚 谁又不释怀谁又不肯原谅呢](https://s.weibo.com/weibo?q=%23%E4%B9%85%E8%AF%9A%20%E8%B0%81%E5%8F%88%E4%B8%8D%E9%87%8A%E6%80%80%E8%B0%81%E5%8F%88%E4%B8%8D%E8%82%AF%E5%8E%9F%E8%B0%85%E5%91%A2%23) `170.7K 🔥` `NEW`
1. [又能进场买黄金了 (You can enter the market to buy gold again)](https://s.weibo.com/weibo?q=%23%E5%8F%88%E8%83%BD%E8%BF%9B%E5%9C%BA%E4%B9%B0%E9%BB%84%E9%87%91%E4%BA%86%23) `161.9K 🔥` `NEW`
1. [特朗普访华](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%23) `3.0M 🔥` `+135%`
1. [成毅usmile笑容加全球品牌代言人](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85usmile%E7%AC%91%E5%AE%B9%E5%8A%A0%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `1.0M 🔥` `+77%`
1. [67岁产女的妈妈现已卧床 (The 67-year-old mother who gave birth to a daughter is now bedridden)](https://s.weibo.com/weibo?q=%2367%E5%B2%81%E4%BA%A7%E5%A5%B3%E7%9A%84%E5%A6%88%E5%A6%88%E7%8E%B0%E5%B7%B2%E5%8D%A7%E5%BA%8A%23) `1.0M 🔥` `+230%`
1. [中国扁带第一人挑战宝泉游龙湾](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%89%81%E5%B8%A6%E7%AC%AC%E4%B8%80%E4%BA%BA%E6%8C%91%E6%88%98%E5%AE%9D%E6%B3%89%E6%B8%B8%E9%BE%99%E6%B9%BE%23) `999.2K 🔥` `+1736%`
1. [辛芷蕾](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%23) `557.7K 🔥` `+160%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `532.4K 🔥` `+252%`
1. [下午休是性价比最高的半天假 (Taking an afternoon break is the most cost-effective half-day break)](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%8D%88%E4%BC%91%E6%98%AF%E6%80%A7%E4%BB%B7%E6%AF%94%E6%9C%80%E9%AB%98%E7%9A%84%E5%8D%8A%E5%A4%A9%E5%81%87%23) `510.1K 🔥` `+43%`
1. [F勒布伦回应被王楚钦打哭](https://s.weibo.com/weibo?q=%23F%E5%8B%92%E5%B8%83%E4%BC%A6%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%93%E5%93%AD%23) `283.4K 🔥` `+133%`
1. [逐玉奖项](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%A5%96%E9%A1%B9%23) `194.6K 🔥` `+167%`
1. [单场次见面会 亏本 (Loss money for a single meeting)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E5%9C%BA%E6%AC%A1%E8%A7%81%E9%9D%A2%E4%BC%9A%20%E4%BA%8F%E6%9C%AC%23) `191.5K 🔥` `+26%`
1. [女生没电脑在电竞馆学习获免单](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%B2%A1%E7%94%B5%E8%84%91%E5%9C%A8%E7%94%B5%E7%AB%9E%E9%A6%86%E5%AD%A6%E4%B9%A0%E8%8E%B7%E5%85%8D%E5%8D%95%23) `190.1K 🔥` `+94%`
1. [存储芯片股重挫](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E8%82%A1%E9%87%8D%E6%8C%AB%23) `165.4K 🔥` `+83%`
1. [给阿嬷的情书 (A love letter to grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `164.7K 🔥` `+62%`
1. [李昀锐工作室点赞廖慧佳 (Li Yunrui Studio likes Liao Huijia)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%82%B9%E8%B5%9E%E5%BB%96%E6%85%A7%E4%BD%B3%23) `163.8K 🔥` `+122%`
1. [白鹿演唱会过审](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E8%BF%87%E5%AE%A1%23) `399.7K 🔥`
1. [全球昆虫正在以惊人速度灭绝](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%98%86%E8%99%AB%E6%AD%A3%E5%9C%A8%E4%BB%A5%E6%83%8A%E4%BA%BA%E9%80%9F%E5%BA%A6%E7%81%AD%E7%BB%9D%23) `194.5K 🔥`
1. [第一次看到金丝楠木狗](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%88%B0%E9%87%91%E4%B8%9D%E6%A5%A0%E6%9C%A8%E7%8B%97%23) `157.7K 🔥`
1. [汪海林的发言](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B5%B7%E6%9E%97%E7%9A%84%E5%8F%91%E8%A8%80%23) `150.9K 🔥`
1. [跑男争议不该先定罪后解读](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E4%BA%89%E8%AE%AE%E4%B8%8D%E8%AF%A5%E5%85%88%E5%AE%9A%E7%BD%AA%E5%90%8E%E8%A7%A3%E8%AF%BB%23) `283.5K 🔥` `-46%`
1. [曝某升咖艺人想抢李宇春跨年压轴](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E5%8D%87%E5%92%96%E8%89%BA%E4%BA%BA%E6%83%B3%E6%8A%A2%E6%9D%8E%E5%AE%87%E6%98%A5%E8%B7%A8%E5%B9%B4%E5%8E%8B%E8%BD%B4%23) `206.0K 🔥` `-21%`
1. [以防你没见过坚果年轻时的样子 (Just in case you haven’t seen Nuts look like when they were young)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%98%B2%E4%BD%A0%E6%B2%A1%E8%A7%81%E8%BF%87%E5%9D%9A%E6%9E%9C%E5%B9%B4%E8%BD%BB%E6%97%B6%E7%9A%84%E6%A0%B7%E5%AD%90%23) `194.6K 🔥` `-32%`

Updated at 2026-05-13 09:20:58

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
