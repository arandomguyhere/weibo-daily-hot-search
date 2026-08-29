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

1. [王楚钦孙颖莎王曼昱放弃亚锦赛选拔](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%94%BE%E5%BC%83%E4%BA%9A%E9%94%A6%E8%B5%9B%E9%80%89%E6%8B%94%23) `1.1M 🔥` `NEW`
1. [西藏吉隆泥石流](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `812.8K 🔥` `NEW`
1. [第六届中国新电商大会](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E5%85%AD%E5%B1%8A%E4%B8%AD%E5%9B%BD%E6%96%B0%E7%94%B5%E5%95%86%E5%A4%A7%E4%BC%9A%23) `809.2K 🔥` `NEW`
1. [秦志戬回应王楚钦孙颖莎放弃亚锦赛选拔](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%BF%97%E6%88%AC%E5%9B%9E%E5%BA%94%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%94%BE%E5%BC%83%E4%BA%9A%E9%94%A6%E8%B5%9B%E9%80%89%E6%8B%94%23) `808.9K 🔥` `NEW`
1. [CPA](https://s.weibo.com/weibo?q=%23CPA%23) `802.6K 🔥` `NEW`
1. [男生考上北大研究生迁户口被卡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E8%80%83%E4%B8%8A%E5%8C%97%E5%A4%A7%E7%A0%94%E7%A9%B6%E7%94%9F%E8%BF%81%E6%88%B7%E5%8F%A3%E8%A2%AB%E5%8D%A1%23) `798.3K 🔥` `NEW`
1. [曝小欢喜2原班人马](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E6%AC%A2%E5%96%9C2%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `796.8K 🔥` `NEW`
1. [曝管泽元处罚很严重](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%AE%A1%E6%B3%BD%E5%85%83%E5%A4%84%E7%BD%9A%E5%BE%88%E4%B8%A5%E9%87%8D%23) `790.5K 🔥` `NEW`
1. [曹骏被余文乐插队小发雷霆](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E8%A2%AB%E4%BD%99%E6%96%87%E4%B9%90%E6%8F%92%E9%98%9F%E5%B0%8F%E5%8F%91%E9%9B%B7%E9%9C%86%23) `786.3K 🔥` `NEW`
1. [吉隆受灾核心区搜救现场](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%97%E7%81%BE%E6%A0%B8%E5%BF%83%E5%8C%BA%E6%90%9C%E6%95%91%E7%8E%B0%E5%9C%BA%23) `783.2K 🔥` `NEW`
1. [新生儿792万 性别比改善](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%94%9F%E5%84%BF792%E4%B8%87%20%E6%80%A7%E5%88%AB%E6%AF%94%E6%94%B9%E5%96%84%23) `777.7K 🔥` `NEW`
1. [吉隆泥石流已致7人遇难554人失联](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%B7%B2%E8%87%B47%E4%BA%BA%E9%81%87%E9%9A%BE554%E4%BA%BA%E5%A4%B1%E8%81%94%23) `777.4K 🔥` `NEW`
1. [小男孩认错妈妈扑路人怀里嚎啕大哭](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%94%B7%E5%AD%A9%E8%AE%A4%E9%94%99%E5%A6%88%E5%A6%88%E6%89%91%E8%B7%AF%E4%BA%BA%E6%80%80%E9%87%8C%E5%9A%8E%E5%95%95%E5%A4%A7%E5%93%AD%23) `769.4K 🔥` `NEW`
1. [尼泊尔宣布灾区为危机地区](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%AE%A3%E5%B8%83%E7%81%BE%E5%8C%BA%E4%B8%BA%E5%8D%B1%E6%9C%BA%E5%9C%B0%E5%8C%BA%23) `762.7K 🔥` `NEW`
1. [小米玄戒O3支持长鑫LPDDR6](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%8E%84%E6%88%92O3%E6%94%AF%E6%8C%81%E9%95%BF%E9%91%ABLPDDR6%23) `760.0K 🔥` `NEW`
1. [陈丽君生理期吃止痛药滚三层楼梯](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E7%94%9F%E7%90%86%E6%9C%9F%E5%90%83%E6%AD%A2%E7%97%9B%E8%8D%AF%E6%BB%9A%E4%B8%89%E5%B1%82%E6%A5%BC%E6%A2%AF%23) `754.2K 🔥` `NEW`
1. [金价银价油价全跌了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E6%B2%B9%E4%BB%B7%E5%85%A8%E8%B7%8C%E4%BA%86%23) `750.8K 🔥` `NEW`
1. [谷爱凌线下活动路透](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%E8%B7%AF%E9%80%8F%23) `747.4K 🔥` `NEW`
1. [檀健次获奖后长呼一口气](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E8%8E%B7%E5%A5%96%E5%90%8E%E9%95%BF%E5%91%BC%E4%B8%80%E5%8F%A3%E6%B0%94%23) `745.5K 🔥` `NEW`
1. [60岁大爷云南旅居3年活成爽文主角](https://s.weibo.com/weibo?q=%2360%E5%B2%81%E5%A4%A7%E7%88%B7%E4%BA%91%E5%8D%97%E6%97%85%E5%B1%853%E5%B9%B4%E6%B4%BB%E6%88%90%E7%88%BD%E6%96%87%E4%B8%BB%E8%A7%92%23) `732.0K 🔥` `NEW`
1. [雷军说长鑫非常了不起](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E9%95%BF%E9%91%AB%E9%9D%9E%E5%B8%B8%E4%BA%86%E4%B8%8D%E8%B5%B7%23) `726.9K 🔥` `NEW`
1. [包贝尔受害者还在增加](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%8F%97%E5%AE%B3%E8%80%85%E8%BF%98%E5%9C%A8%E5%A2%9E%E5%8A%A0%23) `726.1K 🔥` `NEW`
1. [亚锦赛选拔办法全文](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%94%A6%E8%B5%9B%E9%80%89%E6%8B%94%E5%8A%9E%E6%B3%95%E5%85%A8%E6%96%87%23) `718.7K 🔥` `NEW`
1. [金鹿奖历届的影帝](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%BF%E5%A5%96%E5%8E%86%E5%B1%8A%E7%9A%84%E5%BD%B1%E5%B8%9D%23) `713.5K 🔥` `NEW`
1. [错换人生29年女子含泪翻看妈妈日记](https://s.weibo.com/weibo?q=%23%E9%94%99%E6%8D%A2%E4%BA%BA%E7%94%9F29%E5%B9%B4%E5%A5%B3%E5%AD%90%E5%90%AB%E6%B3%AA%E7%BF%BB%E7%9C%8B%E5%A6%88%E5%A6%88%E6%97%A5%E8%AE%B0%23) `706.5K 🔥` `NEW`
1. [井柏然回复了白敬亭](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%9B%9E%E5%A4%8D%E4%BA%86%E7%99%BD%E6%95%AC%E4%BA%AD%23) `701.5K 🔥` `NEW`
1. [在非洲旅行被带到了森林深处](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9D%9E%E6%B4%B2%E6%97%85%E8%A1%8C%E8%A2%AB%E5%B8%A6%E5%88%B0%E4%BA%86%E6%A3%AE%E6%9E%97%E6%B7%B1%E5%A4%84%23) `697.9K 🔥` `NEW`
1. [郑钦文美网签运](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BE%8E%E7%BD%91%E7%AD%BE%E8%BF%90%23) `684.4K 🔥` `NEW`
1. [灿如繁星上星](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E4%B8%8A%E6%98%9F%23) `677.0K 🔥` `NEW`
1. [海南大学通报失联女研究生情况](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8D%97%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E5%A4%B1%E8%81%94%E5%A5%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E6%83%85%E5%86%B5%23) `670.4K 🔥` `NEW`
1. [常州为星宇离职学生办专场招聘会](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%B7%9E%E4%B8%BA%E6%98%9F%E5%AE%87%E7%A6%BB%E8%81%8C%E5%AD%A6%E7%94%9F%E5%8A%9E%E4%B8%93%E5%9C%BA%E6%8B%9B%E8%81%98%E4%BC%9A%23) `666.1K 🔥` `NEW`
1. [尼泊尔山洪已致616死](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E5%B7%B2%E8%87%B4616%E6%AD%BB%23) `661.1K 🔥` `NEW`
1. [刘翔并排博尔特的含金量](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%B9%B6%E6%8E%92%E5%8D%9A%E5%B0%94%E7%89%B9%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `658.4K 🔥` `NEW`
1. [无法生育的狗狗终日忧郁](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%B3%95%E7%94%9F%E8%82%B2%E7%9A%84%E7%8B%97%E7%8B%97%E7%BB%88%E6%97%A5%E5%BF%A7%E9%83%81%23) `652.0K 🔥` `NEW`
1. [女儿配型非亲生母亲不相信](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E9%85%8D%E5%9E%8B%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%AF%8D%E4%BA%B2%E4%B8%8D%E7%9B%B8%E4%BF%A1%23) `650.4K 🔥` `NEW`
1. [女孩考上国防科大20多人组团送学](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%80%83%E4%B8%8A%E5%9B%BD%E9%98%B2%E7%A7%91%E5%A4%A720%E5%A4%9A%E4%BA%BA%E7%BB%84%E5%9B%A2%E9%80%81%E5%AD%A6%23) `640.9K 🔥` `NEW`
1. [灿如繁星](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%23) `638.3K 🔥` `NEW`
1. [阿尔瓦雷斯罢训](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E7%93%A6%E9%9B%B7%E6%96%AF%E7%BD%A2%E8%AE%AD%23) `634.6K 🔥` `NEW`
1. [数到三 好看](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%88%B0%E4%B8%89%20%E5%A5%BD%E7%9C%8B%23) `632.0K 🔥` `NEW`
1. [成毅长安二十四计收视榜第一](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E9%95%BF%E5%AE%89%E4%BA%8C%E5%8D%81%E5%9B%9B%E8%AE%A1%E6%94%B6%E8%A7%86%E6%A6%9C%E7%AC%AC%E4%B8%80%23) `626.3K 🔥` `NEW`
1. [房贷40年利息](https://s.weibo.com/weibo?q=%23%E6%88%BF%E8%B4%B740%E5%B9%B4%E5%88%A9%E6%81%AF%23) `770.0K 🔥` `+1123%`
1. [女子备孕放弃复查孕中期发现患癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A4%87%E5%AD%95%E6%94%BE%E5%BC%83%E5%A4%8D%E6%9F%A5%E5%AD%95%E4%B8%AD%E6%9C%9F%E5%8F%91%E7%8E%B0%E6%82%A3%E7%99%8C%23) `739.2K 🔥` `+1280%`
1. [英国姑娘打假中国留学生的切面包](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%A7%91%E5%A8%98%E6%89%93%E5%81%87%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E7%9A%84%E5%88%87%E9%9D%A2%E5%8C%85%23) `735.1K 🔥` `+704%`
1. [吉隆口岸警察的笑让网友哭了](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E8%AD%A6%E5%AF%9F%E7%9A%84%E7%AC%91%E8%AE%A9%E7%BD%91%E5%8F%8B%E5%93%AD%E4%BA%86%23) `714.9K 🔥` `+1033%`
1. [胡连馨 京洛再无佳人](https://s.weibo.com/weibo?q=%23%E8%83%A1%E8%BF%9E%E9%A6%A8%20%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA%23) `706.9K 🔥` `+1003%`
1. [尼泊尔山洪已致579死1924失联](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E5%B7%B2%E8%87%B4579%E6%AD%BB1924%E5%A4%B1%E8%81%94%23) `692.7K 🔥` `+575%`
1. [女子怀孕6个月发现肺癌晚期](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%956%E4%B8%AA%E6%9C%88%E5%8F%91%E7%8E%B0%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%23) `687.8K 🔥` `+1184%`
1. [白敬亭P图为井柏然剧宣](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%ADP%E5%9B%BE%E4%B8%BA%E4%BA%95%E6%9F%8F%E7%84%B6%E5%89%A7%E5%AE%A3%23) `681.7K 🔥` `+1184%`
1. [41岁爸爸长相太年轻与女儿像兄妹](https://s.weibo.com/weibo?q=%2341%E5%B2%81%E7%88%B8%E7%88%B8%E9%95%BF%E7%9B%B8%E5%A4%AA%E5%B9%B4%E8%BD%BB%E4%B8%8E%E5%A5%B3%E5%84%BF%E5%83%8F%E5%85%84%E5%A6%B9%23) `673.9K 🔥` `+1159%`
1. [2025年中国新生儿792万人](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E4%B8%AD%E5%9B%BD%E6%96%B0%E7%94%9F%E5%84%BF792%E4%B8%87%E4%BA%BA%23) `646.0K 🔥` `+920%`

Updated at 2026-08-29 11:46:54

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
