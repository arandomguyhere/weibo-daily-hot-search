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

1. [雷军说芯片很贵不建议拆开看彩蛋](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E8%8A%AF%E7%89%87%E5%BE%88%E8%B4%B5%E4%B8%8D%E5%BB%BA%E8%AE%AE%E6%8B%86%E5%BC%80%E7%9C%8B%E5%BD%A9%E8%9B%8B%23) `387.4K 🔥` `NEW`
1. [巴特勒中国行走进苏州LNG](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E7%89%B9%E5%8B%92%E4%B8%AD%E5%9B%BD%E8%A1%8C%E8%B5%B0%E8%BF%9B%E8%8B%8F%E5%B7%9ELNG%23) `387.3K 🔥` `NEW`
1. [虞书欣周边疑似撞款Jennie联名](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%91%A8%E8%BE%B9%E7%96%91%E4%BC%BC%E6%92%9E%E6%AC%BEJennie%E8%81%94%E5%90%8D%23) `323.7K 🔥` `NEW`
1. [向太不满易立竞采访向佐](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E4%B8%8D%E6%BB%A1%E6%98%93%E7%AB%8B%E7%AB%9E%E9%87%87%E8%AE%BF%E5%90%91%E4%BD%90%23) `319.3K 🔥` `NEW`
1. [惠英红拍戏开车把货车撞散架](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E6%8B%8D%E6%88%8F%E5%BC%80%E8%BD%A6%E6%8A%8A%E8%B4%A7%E8%BD%A6%E6%92%9E%E6%95%A3%E6%9E%B6%23) `268.9K 🔥` `NEW`
1. [一万九人道赔偿款哪有人道](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%87%E4%B9%9D%E4%BA%BA%E9%81%93%E8%B5%94%E5%81%BF%E6%AC%BE%E5%93%AA%E6%9C%89%E4%BA%BA%E9%81%93%23) `266.2K 🔥` `NEW`
1. [女子砸西瓜被拍到车牌不一致警方介入](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A0%B8%E8%A5%BF%E7%93%9C%E8%A2%AB%E6%8B%8D%E5%88%B0%E8%BD%A6%E7%89%8C%E4%B8%8D%E4%B8%80%E8%87%B4%E8%AD%A6%E6%96%B9%E4%BB%8B%E5%85%A5%23) `265.7K 🔥` `NEW`
1. [顾客称近期不会再去绿茶餐厅](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E7%A7%B0%E8%BF%91%E6%9C%9F%E4%B8%8D%E4%BC%9A%E5%86%8D%E5%8E%BB%E7%BB%BF%E8%8C%B6%E9%A4%90%E5%8E%85%23) `263.8K 🔥` `NEW`
1. [丁程鑫回应了机场被点名](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%9B%9E%E5%BA%94%E4%BA%86%E6%9C%BA%E5%9C%BA%E8%A2%AB%E7%82%B9%E5%90%8D%23) `263.1K 🔥` `NEW`
1. [向太说会为了郭碧婷放弃向佐](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E4%BC%9A%E4%B8%BA%E4%BA%86%E9%83%AD%E7%A2%A7%E5%A9%B7%E6%94%BE%E5%BC%83%E5%90%91%E4%BD%90%23) `261.8K 🔥` `NEW`
1. [一些单位违规发放工资津贴](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%9B%E5%8D%95%E4%BD%8D%E8%BF%9D%E8%A7%84%E5%8F%91%E6%94%BE%E5%B7%A5%E8%B5%84%E6%B4%A5%E8%B4%B4%23) `256.2K 🔥` `NEW`
1. [王昶晒梁王合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E6%99%92%E6%A2%81%E7%8E%8B%E5%90%88%E7%85%A7%23) `254.1K 🔥` `NEW`
1. [唐尚珺六级453分](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%B0%9A%E7%8F%BA%E5%85%AD%E7%BA%A7453%E5%88%86%23) `253.1K 🔥` `NEW`
1. [时代少年团四大平台综艺出镜期数](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%9B%9B%E5%A4%A7%E5%B9%B3%E5%8F%B0%E7%BB%BC%E8%89%BA%E5%87%BA%E9%95%9C%E6%9C%9F%E6%95%B0%23) `252.1K 🔥` `NEW`
1. [店主帮老人遭索赔1.9万元协议书曝光](https://s.weibo.com/weibo?q=%23%E5%BA%97%E4%B8%BB%E5%B8%AE%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%941.9%E4%B8%87%E5%85%83%E5%8D%8F%E8%AE%AE%E4%B9%A6%E6%9B%9D%E5%85%89%23) `249.0K 🔥` `NEW`
1. [女子报班考公落榜退费遭拒丈夫发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8A%A5%E7%8F%AD%E8%80%83%E5%85%AC%E8%90%BD%E6%A6%9C%E9%80%80%E8%B4%B9%E9%81%AD%E6%8B%92%E4%B8%88%E5%A4%AB%E5%8F%91%E5%A3%B0%23) `241.3K 🔥` `NEW`
1. [ai短剧真把三体做出来了](https://s.weibo.com/weibo?q=%23ai%E7%9F%AD%E5%89%A7%E7%9C%9F%E6%8A%8A%E4%B8%89%E4%BD%93%E5%81%9A%E5%87%BA%E6%9D%A5%E4%BA%86%23) `240.1K 🔥` `NEW`
1. [A股近4000股下跌的原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%BF%914000%E8%82%A1%E4%B8%8B%E8%B7%8C%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `233.7K 🔥` `NEW`
1. [张凌赫卢昱晓刺棠人设](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8D%A2%E6%98%B1%E6%99%93%E5%88%BA%E6%A3%A0%E4%BA%BA%E8%AE%BE%23) `233.6K 🔥` `NEW`
1. [鞠婧祎万花世界路透](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E8%B7%AF%E9%80%8F%23) `231.4K 🔥` `NEW`
1. [李玫瑾建议扶老被讹按敲诈勒索起诉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%AB%E7%91%BE%E5%BB%BA%E8%AE%AE%E6%89%B6%E8%80%81%E8%A2%AB%E8%AE%B9%E6%8C%89%E6%95%B2%E8%AF%88%E5%8B%92%E7%B4%A2%E8%B5%B7%E8%AF%89%23) `230.1K 🔥` `NEW`
1. [室友查了我的六级成绩](https://s.weibo.com/weibo?q=%23%E5%AE%A4%E5%8F%8B%E6%9F%A5%E4%BA%86%E6%88%91%E7%9A%84%E5%85%AD%E7%BA%A7%E6%88%90%E7%BB%A9%23) `619.3K 🔥` `+204%`
1. [济州岛连环失踪案](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%B7%9E%E5%B2%9B%E8%BF%9E%E7%8E%AF%E5%A4%B1%E8%B8%AA%E6%A1%88%23) `318.1K 🔥` `+41%`
1. [已经不记得外卖最初的样子了](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E4%B8%8D%E8%AE%B0%E5%BE%97%E5%A4%96%E5%8D%96%E6%9C%80%E5%88%9D%E7%9A%84%E6%A0%B7%E5%AD%90%E4%BA%86%23) `269.5K 🔥` `+59%`
1. [杭州绿茶餐厅就餐排队](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%BB%BF%E8%8C%B6%E9%A4%90%E5%8E%85%E5%B0%B1%E9%A4%90%E6%8E%92%E9%98%9F%23) `238.7K 🔥` `+54%`
1. [央视曝光隔空猥亵](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E9%9A%94%E7%A9%BA%E7%8C%A5%E4%BA%B5%23) `1.1M 🔥`
1. [12306回应无座票二等座同价](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E6%97%A0%E5%BA%A7%E7%A5%A8%E4%BA%8C%E7%AD%89%E5%BA%A7%E5%90%8C%E4%BB%B7%23) `830.3K 🔥`
1. [全国累计收购小麦超9000万吨](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%B4%AF%E8%AE%A1%E6%94%B6%E8%B4%AD%E5%B0%8F%E9%BA%A6%E8%B6%859000%E4%B8%87%E5%90%A8%23) `669.6K 🔥`
1. [梁洁 刺棠女二](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%B4%81%20%E5%88%BA%E6%A3%A0%E5%A5%B3%E4%BA%8C%23) `533.4K 🔥`
1. [小徐第9次六级考了339分](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%BE%90%E7%AC%AC9%E6%AC%A1%E5%85%AD%E7%BA%A7%E8%80%83%E4%BA%86339%E5%88%86%23) `350.2K 🔥`
1. [一位A9返贫的大哥给的五点忠告](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BD%8DA9%E8%BF%94%E8%B4%AB%E7%9A%84%E5%A4%A7%E5%93%A5%E7%BB%99%E7%9A%84%E4%BA%94%E7%82%B9%E5%BF%A0%E5%91%8A%23) `327.4K 🔥`
1. [王一博告了新湃传媒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%91%8A%E4%BA%86%E6%96%B0%E6%B9%83%E4%BC%A0%E5%AA%92%23) `321.3K 🔥`
1. [印度学者谈印度人被称为阿三](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%AD%A6%E8%80%85%E8%B0%88%E5%8D%B0%E5%BA%A6%E4%BA%BA%E8%A2%AB%E7%A7%B0%E4%B8%BA%E9%98%BF%E4%B8%89%23) `267.8K 🔥`
1. [东方甄选薪酬少发4个亿](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E8%96%AA%E9%85%AC%E5%B0%91%E5%8F%914%E4%B8%AA%E4%BA%BF%23) `259.9K 🔥`
1. [仙风道骨张凌赫](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%A3%8E%E9%81%93%E9%AA%A8%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `257.4K 🔥`
1. [新湃传媒是陈情令出品公司](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%B9%83%E4%BC%A0%E5%AA%92%E6%98%AF%E9%99%88%E6%83%85%E4%BB%A4%E5%87%BA%E5%93%81%E5%85%AC%E5%8F%B8%23) `255.5K 🔥`
1. [期待不高去了却很惊艳的城市](https://s.weibo.com/weibo?q=%23%E6%9C%9F%E5%BE%85%E4%B8%8D%E9%AB%98%E5%8E%BB%E4%BA%86%E5%8D%B4%E5%BE%88%E6%83%8A%E8%89%B3%E7%9A%84%E5%9F%8E%E5%B8%82%23) `245.7K 🔥`
1. [三芯齐发中国芯片产业再突破](https://s.weibo.com/weibo?q=%23%E4%B8%89%E8%8A%AF%E9%BD%90%E5%8F%91%E4%B8%AD%E5%9B%BD%E8%8A%AF%E7%89%87%E4%BA%A7%E4%B8%9A%E5%86%8D%E7%AA%81%E7%A0%B4%23) `243.8K 🔥`
1. [姐的平账能力恐怕在我之上](https://s.weibo.com/weibo?q=%23%E5%A7%90%E7%9A%84%E5%B9%B3%E8%B4%A6%E8%83%BD%E5%8A%9B%E6%81%90%E6%80%95%E5%9C%A8%E6%88%91%E4%B9%8B%E4%B8%8A%23) `238.1K 🔥`
1. [傅首尔回应整容争议](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E5%9B%9E%E5%BA%94%E6%95%B4%E5%AE%B9%E4%BA%89%E8%AE%AE%23) `236.3K 🔥`
1. [法老 退圈](https://s.weibo.com/weibo?q=%23%E6%B3%95%E8%80%81%20%E9%80%80%E5%9C%88%23) `235.4K 🔥`
1. [支付宝答题全国统考正式开始](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%E7%AD%94%E9%A2%98%E5%85%A8%E5%9B%BD%E7%BB%9F%E8%80%83%E6%AD%A3%E5%BC%8F%E5%BC%80%E5%A7%8B%23) `658.6K 🔥` `-29%`
1. [原来大部分女儿都是遗传爸爸了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E9%83%A8%E5%88%86%E5%A5%B3%E5%84%BF%E9%83%BD%E6%98%AF%E9%81%97%E4%BC%A0%E7%88%B8%E7%88%B8%E4%BA%86%23) `387.2K 🔥` `-33%`
1. [香港葵涌村发生双尸案](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%91%B5%E6%B6%8C%E6%9D%91%E5%8F%91%E7%94%9F%E5%8F%8C%E5%B0%B8%E6%A1%88%23) `331.6K 🔥` `-38%`
1. [王以太被披哥工作人员吐槽](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%A5%E5%A4%AA%E8%A2%AB%E6%8A%AB%E5%93%A5%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%90%90%E6%A7%BD%23) `329.6K 🔥` `-30%`
1. [广西洪水](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%23) `319.9K 🔥` `-22%`
1. [虞书欣快闪价格](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BF%AB%E9%97%AA%E4%BB%B7%E6%A0%BC%23) `289.5K 🔥` `-24%`
1. [权志龙送给氧化菊的礼物](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99%E9%80%81%E7%BB%99%E6%B0%A7%E5%8C%96%E8%8F%8A%E7%9A%84%E7%A4%BC%E7%89%A9%23) `249.9K 🔥` `-31%`
1. [两小孩扮齐天大圣反被哮天犬追](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%B0%8F%E5%AD%A9%E6%89%AE%E9%BD%90%E5%A4%A9%E5%A4%A7%E5%9C%A3%E5%8F%8D%E8%A2%AB%E5%93%AE%E5%A4%A9%E7%8A%AC%E8%BF%BD%23) `248.0K 🔥` `-55%`
1. [网友92万代孕孩子患自闭症](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B92%E4%B8%87%E4%BB%A3%E5%AD%95%E5%AD%A9%E5%AD%90%E6%82%A3%E8%87%AA%E9%97%AD%E7%97%87%23) `246.8K 🔥` `-34%`
1. [丁程鑫直播](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%9B%B4%E6%92%AD%23) `243.3K 🔥` `-34%`

Updated at 2026-08-24 18:09:19

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
