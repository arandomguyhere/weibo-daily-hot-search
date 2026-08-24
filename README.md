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

1. [披荆斩棘部落聊天局](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E9%83%A8%E8%90%BD%E8%81%8A%E5%A4%A9%E5%B1%80%23) `406.4K 🔥` `NEW`
1. [老人离世涉事茶馆暂未开门](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%A6%BB%E4%B8%96%E6%B6%89%E4%BA%8B%E8%8C%B6%E9%A6%86%E6%9A%82%E6%9C%AA%E5%BC%80%E9%97%A8%23) `303.8K 🔥` `NEW`
1. [曾沛慈演唱会长沙站定档](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E6%BC%94%E5%94%B1%E4%BC%9A%E9%95%BF%E6%B2%99%E7%AB%99%E5%AE%9A%E6%A1%A3%23) `271.0K 🔥` `NEW`
1. [刘浩存16岁才被团队发掘](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%9816%E5%B2%81%E6%89%8D%E8%A2%AB%E5%9B%A2%E9%98%9F%E5%8F%91%E6%8E%98%23) `205.2K 🔥` `NEW`
1. [王昶夺冠钱天一员工比她还激动](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E5%A4%BA%E5%86%A0%E9%92%B1%E5%A4%A9%E4%B8%80%E5%91%98%E5%B7%A5%E6%AF%94%E5%A5%B9%E8%BF%98%E6%BF%80%E5%8A%A8%23) `189.7K 🔥` `NEW`
1. [印度男子晕倒跌入红糖锅被烫死](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E6%99%95%E5%80%92%E8%B7%8C%E5%85%A5%E7%BA%A2%E7%B3%96%E9%94%85%E8%A2%AB%E7%83%AB%E6%AD%BB%23) `186.3K 🔥` `NEW`
1. [张凌赫卢昱晓要二搭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8D%A2%E6%98%B1%E6%99%93%E8%A6%81%E4%BA%8C%E6%90%AD%E4%BA%86%23) `172.6K 🔥` `NEW`
1. [发现这样的婚礼还挺有意思的](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E8%BF%99%E6%A0%B7%E7%9A%84%E5%A9%9A%E7%A4%BC%E8%BF%98%E6%8C%BA%E6%9C%89%E6%84%8F%E6%80%9D%E7%9A%84%23) `170.0K 🔥` `NEW`
1. [一根面条都给关晓彤吃美了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%B9%E9%9D%A2%E6%9D%A1%E9%83%BD%E7%BB%99%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%83%E7%BE%8E%E4%BA%86%23) `167.9K 🔥` `NEW`
1. [广西宁明江河水位仍在上涨](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%AE%81%E6%98%8E%E6%B1%9F%E6%B2%B3%E6%B0%B4%E4%BD%8D%E4%BB%8D%E5%9C%A8%E4%B8%8A%E6%B6%A8%23) `162.7K 🔥` `NEW`
1. [惠英红 我自己撞的没有替身](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E6%88%91%E8%87%AA%E5%B7%B1%E6%92%9E%E7%9A%84%E6%B2%A1%E6%9C%89%E6%9B%BF%E8%BA%AB%23) `160.8K 🔥` `NEW`
1. [严浩翔直播聊新歌](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9B%B4%E6%92%AD%E8%81%8A%E6%96%B0%E6%AD%8C%23) `156.0K 🔥` `NEW`
1. [郭二娃死刑 (Guo Erwa's death sentence)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E4%BA%8C%E5%A8%83%E6%AD%BB%E5%88%91%23) `1.2M 🔥` `+85%`
1. [一万九人道赔偿款哪有人道](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%87%E4%B9%9D%E4%BA%BA%E9%81%93%E8%B5%94%E5%81%BF%E6%AC%BE%E5%93%AA%E6%9C%89%E4%BA%BA%E9%81%93%23) `395.1K 🔥` `+149%`
1. [已经不记得外卖最初的样子了](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E4%B8%8D%E8%AE%B0%E5%BE%97%E5%A4%96%E5%8D%96%E6%9C%80%E5%88%9D%E7%9A%84%E6%A0%B7%E5%AD%90%E4%BA%86%23) `348.5K 🔥` `+21%`
1. [张子枫进入最佳赏味期](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E8%BF%9B%E5%85%A5%E6%9C%80%E4%BD%B3%E8%B5%8F%E5%91%B3%E6%9C%9F%23) `206.0K 🔥` `+36%`
1. [东方甄选薪酬少发4个亿](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E8%96%AA%E9%85%AC%E5%B0%91%E5%8F%914%E4%B8%AA%E4%BA%BF%23) `205.6K 🔥` `+36%`
1. [宋丹丹在我爱我家里的吹牛成真了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%B8%B9%E4%B8%B9%E5%9C%A8%E6%88%91%E7%88%B1%E6%88%91%E5%AE%B6%E9%87%8C%E7%9A%84%E5%90%B9%E7%89%9B%E6%88%90%E7%9C%9F%E4%BA%86%23) `194.3K 🔥` `+27%`
1. [全国累计收购小麦超9000万吨](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%B4%AF%E8%AE%A1%E6%94%B6%E8%B4%AD%E5%B0%8F%E9%BA%A6%E8%B6%859000%E4%B8%87%E5%90%A8%23) `638.3K 🔥`
1. [AI眼镜成为隐私重灾区](https://s.weibo.com/weibo?q=%23AI%E7%9C%BC%E9%95%9C%E6%88%90%E4%B8%BA%E9%9A%90%E7%A7%81%E9%87%8D%E7%81%BE%E5%8C%BA%23) `429.0K 🔥`
1. [张凌赫李卿二搭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9D%8E%E5%8D%BF%E4%BA%8C%E6%90%AD%E4%BA%86%23) `380.4K 🔥`
1. [向太不满易立竞采访向佐](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E4%B8%8D%E6%BB%A1%E6%98%93%E7%AB%8B%E7%AB%9E%E9%87%87%E8%AE%BF%E5%90%91%E4%BD%90%23) `347.6K 🔥`
1. [虞书欣周边疑似撞款Jennie联名](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%91%A8%E8%BE%B9%E7%96%91%E4%BC%BC%E6%92%9E%E6%AC%BEJennie%E8%81%94%E5%90%8D%23) `342.4K 🔥`
1. [印度学者谈印度人被称为阿三](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%AD%A6%E8%80%85%E8%B0%88%E5%8D%B0%E5%BA%A6%E4%BA%BA%E8%A2%AB%E7%A7%B0%E4%B8%BA%E9%98%BF%E4%B8%89%23) `318.0K 🔥`
1. [时代少年团成团七周年曲目列表](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%88%90%E5%9B%A2%E4%B8%83%E5%91%A8%E5%B9%B4%E6%9B%B2%E7%9B%AE%E5%88%97%E8%A1%A8%23) `315.0K 🔥`
1. [王一博告了新湃传媒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%91%8A%E4%BA%86%E6%96%B0%E6%B9%83%E4%BC%A0%E5%AA%92%23) `303.7K 🔥`
1. [巩俐易烊千玺合体封面](https://s.weibo.com/weibo?q=%23%E5%B7%A9%E4%BF%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%90%88%E4%BD%93%E5%B0%81%E9%9D%A2%23) `178.1K 🔥`
1. [惠英红拍戏开车把货车撞散架](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E6%8B%8D%E6%88%8F%E5%BC%80%E8%BD%A6%E6%8A%8A%E8%B4%A7%E8%BD%A6%E6%92%9E%E6%95%A3%E6%9E%B6%23) `137.0K 🔥`
1. [李玫瑾建议扶老被讹按敲诈勒索起诉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%AB%E7%91%BE%E5%BB%BA%E8%AE%AE%E6%89%B6%E8%80%81%E8%A2%AB%E8%AE%B9%E6%8C%89%E6%95%B2%E8%AF%88%E5%8B%92%E7%B4%A2%E8%B5%B7%E8%AF%89%23) `131.5K 🔥`
1. [王昶晒梁王合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E6%99%92%E6%A2%81%E7%8E%8B%E5%90%88%E7%85%A7%23) `128.5K 🔥`
1. [央视曝光隔空猥亵](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E9%9A%94%E7%A9%BA%E7%8C%A5%E4%BA%B5%23) `830.9K 🔥` `-24%`
1. [孙颖莎再夺女单世排第1](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%86%8D%E5%A4%BA%E5%A5%B3%E5%8D%95%E4%B8%96%E6%8E%92%E7%AC%AC1%23) `525.8K 🔥` `-35%`
1. [雷军说芯片很贵不建议拆开看彩蛋](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E8%8A%AF%E7%89%87%E5%BE%88%E8%B4%B5%E4%B8%8D%E5%BB%BA%E8%AE%AE%E6%8B%86%E5%BC%80%E7%9C%8B%E5%BD%A9%E8%9B%8B%23) `430.3K 🔥` `-32%`
1. [一些单位违规发放工资津贴](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%9B%E5%8D%95%E4%BD%8D%E8%BF%9D%E8%A7%84%E5%8F%91%E6%94%BE%E5%B7%A5%E8%B5%84%E6%B4%A5%E8%B4%B4%23) `405.5K 🔥` `-36%`
1. [12306回应无座票二等座同价](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E6%97%A0%E5%BA%A7%E7%A5%A8%E4%BA%8C%E7%AD%89%E5%BA%A7%E5%90%8C%E4%BB%B7%23) `402.3K 🔥` `-37%`
1. [香港葵涌村发生双尸案](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%91%B5%E6%B6%8C%E6%9D%91%E5%8F%91%E7%94%9F%E5%8F%8C%E5%B0%B8%E6%A1%88%23) `399.0K 🔥` `-37%`
1. [一位A9返贫的大哥给的五点忠告](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BD%8DA9%E8%BF%94%E8%B4%AB%E7%9A%84%E5%A4%A7%E5%93%A5%E7%BB%99%E7%9A%84%E4%BA%94%E7%82%B9%E5%BF%A0%E5%91%8A%23) `393.9K 🔥` `-37%`
1. [向太说和周星驰做不回好朋友](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%92%8C%E5%91%A8%E6%98%9F%E9%A9%B0%E5%81%9A%E4%B8%8D%E5%9B%9E%E5%A5%BD%E6%9C%8B%E5%8F%8B%23) `387.9K 🔥` `-36%`
1. [梁洁 刺棠女二](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%B4%81%20%E5%88%BA%E6%A3%A0%E5%A5%B3%E4%BA%8C%23) `386.1K 🔥` `-38%`
1. [唐尚珺六级453分](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%B0%9A%E7%8F%BA%E5%85%AD%E7%BA%A7453%E5%88%86%23) `383.9K 🔥` `-39%`
1. [李昀锐确认出演剑阁闻铃](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%A1%AE%E8%AE%A4%E5%87%BA%E6%BC%94%E5%89%91%E9%98%81%E9%97%BB%E9%93%83%23) `354.7K 🔥` `-39%`
1. [济州岛连环失踪案](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%B7%9E%E5%B2%9B%E8%BF%9E%E7%8E%AF%E5%A4%B1%E8%B8%AA%E6%A1%88%23) `241.7K 🔥` `-59%`
1. [时代少年团四大平台综艺出镜期数](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%9B%9B%E5%A4%A7%E5%B9%B3%E5%8F%B0%E7%BB%BC%E8%89%BA%E5%87%BA%E9%95%9C%E6%9C%9F%E6%95%B0%23) `224.9K 🔥` `-21%`
1. [陈武同志因病逝世](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%AD%A6%E5%90%8C%E5%BF%97%E5%9B%A0%E7%97%85%E9%80%9D%E4%B8%96%23) `206.1K 🔥` `-46%`
1. [广西洪水](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%23) `189.0K 🔥` `-70%`
1. [丁程鑫回应了机场被点名](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%9B%9E%E5%BA%94%E4%BA%86%E6%9C%BA%E5%9C%BA%E8%A2%AB%E7%82%B9%E5%90%8D%23) `178.5K 🔥` `-28%`
1. [原来大部分女儿都是遗传爸爸了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E9%83%A8%E5%88%86%E5%A5%B3%E5%84%BF%E9%83%BD%E6%98%AF%E9%81%97%E4%BC%A0%E7%88%B8%E7%88%B8%E4%BA%86%23) `174.3K 🔥` `-51%`
1. [花开锦绣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%23) `172.1K 🔥` `-73%`
1. [蔡崇信吴泳铭1.2亿增持阿里股票](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%B4%87%E4%BF%A1%E5%90%B4%E6%B3%B3%E9%93%AD1.2%E4%BA%BF%E5%A2%9E%E6%8C%81%E9%98%BF%E9%87%8C%E8%82%A1%E7%A5%A8%23) `166.3K 🔥` `-58%`
1. [王昶心心念念的金牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E5%BF%83%E5%BF%83%E5%BF%B5%E5%BF%B5%E7%9A%84%E9%87%91%E7%89%8C%23) `157.1K 🔥` `-21%`

Updated at 2026-08-24 19:49:54

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
