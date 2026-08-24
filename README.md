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

1. [郭二娃死刑 (Guo Erwa's death sentence)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E4%BA%8C%E5%A8%83%E6%AD%BB%E5%88%91%23) `625.1K 🔥` `NEW`
1. [蔡崇信吴泳铭1.2亿增持阿里股票](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%B4%87%E4%BF%A1%E5%90%B4%E6%B3%B3%E9%93%AD1.2%E4%BA%BF%E5%A2%9E%E6%8C%81%E9%98%BF%E9%87%8C%E8%82%A1%E7%A5%A8%23) `391.5K 🔥` `NEW`
1. [AI眼镜成为隐私重灾区](https://s.weibo.com/weibo?q=%23AI%E7%9C%BC%E9%95%9C%E6%88%90%E4%B8%BA%E9%9A%90%E7%A7%81%E9%87%8D%E7%81%BE%E5%8C%BA%23) `386.9K 🔥` `NEW`
1. [治理食安问题不妨重奖吹哨人](https://s.weibo.com/weibo?q=%23%E6%B2%BB%E7%90%86%E9%A3%9F%E5%AE%89%E9%97%AE%E9%A2%98%E4%B8%8D%E5%A6%A8%E9%87%8D%E5%A5%96%E5%90%B9%E5%93%A8%E4%BA%BA%23) `382.4K 🔥` `NEW`
1. [可以带宠物上大学了](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E4%BB%A5%E5%B8%A6%E5%AE%A0%E7%89%A9%E4%B8%8A%E5%A4%A7%E5%AD%A6%E4%BA%86%23) `375.1K 🔥` `NEW`
1. [时代少年团成团七周年曲目列表](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%88%90%E5%9B%A2%E4%B8%83%E5%91%A8%E5%B9%B4%E6%9B%B2%E7%9B%AE%E5%88%97%E8%A1%A8%23) `369.3K 🔥` `NEW`
1. [巩俐易烊千玺合体封面](https://s.weibo.com/weibo?q=%23%E5%B7%A9%E4%BF%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%90%88%E4%BD%93%E5%B0%81%E9%9D%A2%23) `185.3K 🔥` `NEW`
1. [雷军官宣AICube原型机](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%AE%98%E5%AE%A3AICube%E5%8E%9F%E5%9E%8B%E6%9C%BA%23) `156.3K 🔥` `NEW`
1. [宋丹丹在我爱我家里的吹牛成真了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%B8%B9%E4%B8%B9%E5%9C%A8%E6%88%91%E7%88%B1%E6%88%91%E5%AE%B6%E9%87%8C%E7%9A%84%E5%90%B9%E7%89%9B%E6%88%90%E7%9C%9F%E4%BA%86%23) `152.8K 🔥` `NEW`
1. [张子枫进入最佳赏味期](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E8%BF%9B%E5%85%A5%E6%9C%80%E4%BD%B3%E8%B5%8F%E5%91%B3%E6%9C%9F%23) `151.8K 🔥` `NEW`
1. [Claude为什么容易封号 (Why is it easy for Claude to have his account banned?)](https://s.weibo.com/weibo?q=%23Claude%E4%B8%BA%E4%BB%80%E4%B9%88%E5%AE%B9%E6%98%93%E5%B0%81%E5%8F%B7%23) `151.0K 🔥` `NEW`
1. [李昀锐 在你眉梢点花灯](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%20%E5%9C%A8%E4%BD%A0%E7%9C%89%E6%A2%A2%E7%82%B9%E8%8A%B1%E7%81%AF%23) `134.2K 🔥` `NEW`
1. [李玫瑾建议扶老被讹按敲诈勒索起诉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%AB%E7%91%BE%E5%BB%BA%E8%AE%AE%E6%89%B6%E8%80%81%E8%A2%AB%E8%AE%B9%E6%8C%89%E6%95%B2%E8%AF%88%E5%8B%92%E7%B4%A2%E8%B5%B7%E8%AF%89%23) `131.7K 🔥` `NEW`
1. [孙颖莎再夺女单世排第1](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%86%8D%E5%A4%BA%E5%A5%B3%E5%8D%95%E4%B8%96%E6%8E%92%E7%AC%AC1%23) `806.7K 🔥` `+109%`
1. [雷军说芯片很贵不建议拆开看彩蛋](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E8%8A%AF%E7%89%87%E5%BE%88%E8%B4%B5%E4%B8%8D%E5%BB%BA%E8%AE%AE%E6%8B%86%E5%BC%80%E7%9C%8B%E5%BD%A9%E8%9B%8B%23) `637.2K 🔥` `+23%`
1. [香港葵涌村发生双尸案](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%91%B5%E6%B6%8C%E6%9D%91%E5%8F%91%E7%94%9F%E5%8F%8C%E5%B0%B8%E6%A1%88%23) `634.9K 🔥` `+62%`
1. [巴特勒中国行走进苏州LNG](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E7%89%B9%E5%8B%92%E4%B8%AD%E5%9B%BD%E8%A1%8C%E8%B5%B0%E8%BF%9B%E8%8B%8F%E5%B7%9ELNG%23) `632.9K 🔥` `+53%`
1. [一些单位违规发放工资津贴](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%9B%E5%8D%95%E4%BD%8D%E8%BF%9D%E8%A7%84%E5%8F%91%E6%94%BE%E5%B7%A5%E8%B5%84%E6%B4%A5%E8%B4%B4%23) `632.7K 🔥` `+67%`
1. [花开锦绣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%23) `629.5K 🔥` `+89%`
1. [唐尚珺六级453分](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%B0%9A%E7%8F%BA%E5%85%AD%E7%BA%A7453%E5%88%86%23) `629.2K 🔥` `+72%`
1. [广西洪水](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%23) `626.2K 🔥` `+65%`
1. [一位A9返贫的大哥给的五点忠告](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BD%8DA9%E8%BF%94%E8%B4%AB%E7%9A%84%E5%A4%A7%E5%93%A5%E7%BB%99%E7%9A%84%E4%BA%94%E7%82%B9%E5%BF%A0%E5%91%8A%23) `621.9K 🔥` `+53%`
1. [梁洁 刺棠女二](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%B4%81%20%E5%88%BA%E6%A3%A0%E5%A5%B3%E4%BA%8C%23) `621.7K 🔥` `+51%`
1. [向太说和周星驰做不回好朋友](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%92%8C%E5%91%A8%E6%98%9F%E9%A9%B0%E5%81%9A%E4%B8%8D%E5%9B%9E%E5%A5%BD%E6%9C%8B%E5%8F%8B%23) `609.7K 🔥` `+54%`
1. [济州岛连环失踪案](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%B7%9E%E5%B2%9B%E8%BF%9E%E7%8E%AF%E5%A4%B1%E8%B8%AA%E6%A1%88%23) `592.9K 🔥` `+48%`
1. [李昀锐确认出演剑阁闻铃](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%A1%AE%E8%AE%A4%E5%87%BA%E6%BC%94%E5%89%91%E9%98%81%E9%97%BB%E9%93%83%23) `585.0K 🔥` `+40%`
1. [央视曝光隔空猥亵](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E9%9A%94%E7%A9%BA%E7%8C%A5%E4%BA%B5%23) `1.1M 🔥`
1. [全国累计收购小麦超9000万吨](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%B4%AF%E8%AE%A1%E6%94%B6%E8%B4%AD%E5%B0%8F%E9%BA%A6%E8%B6%859000%E4%B8%87%E5%90%A8%23) `639.0K 🔥`
1. [12306回应无座票二等座同价](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E6%97%A0%E5%BA%A7%E7%A5%A8%E4%BA%8C%E7%AD%89%E5%BA%A7%E5%90%8C%E4%BB%B7%23) `636.4K 🔥`
1. [张凌赫李卿二搭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9D%8E%E5%8D%BF%E4%BA%8C%E6%90%AD%E4%BA%86%23) `395.1K 🔥`
1. [陈武同志因病逝世](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%AD%A6%E5%90%8C%E5%BF%97%E5%9B%A0%E7%97%85%E9%80%9D%E4%B8%96%23) `382.1K 🔥`
1. [向太不满易立竞采访向佐](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E4%B8%8D%E6%BB%A1%E6%98%93%E7%AB%8B%E7%AB%9E%E9%87%87%E8%AE%BF%E5%90%91%E4%BD%90%23) `373.4K 🔥`
1. [原来大部分女儿都是遗传爸爸了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E9%83%A8%E5%88%86%E5%A5%B3%E5%84%BF%E9%83%BD%E6%98%AF%E9%81%97%E4%BC%A0%E7%88%B8%E7%88%B8%E4%BA%86%23) `355.9K 🔥`
1. [虞书欣周边疑似撞款Jennie联名](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%91%A8%E8%BE%B9%E7%96%91%E4%BC%BC%E6%92%9E%E6%AC%BEJennie%E8%81%94%E5%90%8D%23) `353.7K 🔥`
1. [王一博告了新湃传媒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%91%8A%E4%BA%86%E6%96%B0%E6%B9%83%E4%BC%A0%E5%AA%92%23) `345.8K 🔥`
1. [已经不记得外卖最初的样子了](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E4%B8%8D%E8%AE%B0%E5%BE%97%E5%A4%96%E5%8D%96%E6%9C%80%E5%88%9D%E7%9A%84%E6%A0%B7%E5%AD%90%E4%BA%86%23) `287.4K 🔥`
1. [印度学者谈印度人被称为阿三](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%AD%A6%E8%80%85%E8%B0%88%E5%8D%B0%E5%BA%A6%E4%BA%BA%E8%A2%AB%E7%A7%B0%E4%B8%BA%E9%98%BF%E4%B8%89%23) `280.6K 🔥`
1. [时代少年团四大平台综艺出镜期数](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%9B%9B%E5%A4%A7%E5%B9%B3%E5%8F%B0%E7%BB%BC%E8%89%BA%E5%87%BA%E9%95%9C%E6%9C%9F%E6%95%B0%23) `283.6K 🔥` `-30%`
1. [丁程鑫回应了机场被点名](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%9B%9E%E5%BA%94%E4%BA%86%E6%9C%BA%E5%9C%BA%E8%A2%AB%E7%82%B9%E5%90%8D%23) `247.9K 🔥` `-35%`
1. [王昶心心念念的金牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E5%BF%83%E5%BF%83%E5%BF%B5%E5%BF%B5%E7%9A%84%E9%87%91%E7%89%8C%23) `198.7K 🔥` `-46%`
1. [虞书欣快闪价格](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BF%AB%E9%97%AA%E4%BB%B7%E6%A0%BC%23) `168.4K 🔥` `-54%`
1. [王昶晒梁王合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E6%99%92%E6%A2%81%E7%8E%8B%E5%90%88%E7%85%A7%23) `159.0K 🔥` `-56%`
1. [惠英红拍戏开车把货车撞散架](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E6%8B%8D%E6%88%8F%E5%BC%80%E8%BD%A6%E6%8A%8A%E8%B4%A7%E8%BD%A6%E6%92%9E%E6%95%A3%E6%9E%B6%23) `159.0K 🔥` `-57%`
1. [一万九人道赔偿款哪有人道](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%87%E4%B9%9D%E4%BA%BA%E9%81%93%E8%B5%94%E5%81%BF%E6%AC%BE%E5%93%AA%E6%9C%89%E4%BA%BA%E9%81%93%23) `158.8K 🔥` `-55%`
1. [东方甄选薪酬少发4个亿](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E8%96%AA%E9%85%AC%E5%B0%91%E5%8F%914%E4%B8%AA%E4%BA%BF%23) `151.0K 🔥` `-59%`
1. [权志龙送给氧化菊的礼物](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99%E9%80%81%E7%BB%99%E6%B0%A7%E5%8C%96%E8%8F%8A%E7%9A%84%E7%A4%BC%E7%89%A9%23) `137.6K 🔥` `-61%`
1. [宇树跌至全球人形机器人市值榜第二](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E8%B7%8C%E8%87%B3%E5%85%A8%E7%90%83%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B8%82%E5%80%BC%E6%A6%9C%E7%AC%AC%E4%BA%8C%23) `136.4K 🔥` `-67%`
1. [王以太被披哥工作人员吐槽](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%A5%E5%A4%AA%E8%A2%AB%E6%8A%AB%E5%93%A5%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%90%90%E6%A7%BD%23) `134.3K 🔥` `-64%`
1. [夏天真的很需要制冰自由](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A4%A9%E7%9C%9F%E7%9A%84%E5%BE%88%E9%9C%80%E8%A6%81%E5%88%B6%E5%86%B0%E8%87%AA%E7%94%B1%23) `131.5K 🔥` `-63%`
1. [太湖湾音乐节官宣](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E6%B9%96%E6%B9%BE%E9%9F%B3%E4%B9%90%E8%8A%82%E5%AE%98%E5%AE%A3%23) `131.3K 🔥` `-63%`

Updated at 2026-08-24 19:20:59

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
