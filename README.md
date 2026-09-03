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

1. [微信 液态玻璃](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E6%B6%B2%E6%80%81%E7%8E%BB%E7%92%83%23) `1.1M 🔥` `NEW`
1. [195名消防员轮流深度搜救](https://s.weibo.com/weibo?q=%23195%E5%90%8D%E6%B6%88%E9%98%B2%E5%91%98%E8%BD%AE%E6%B5%81%E6%B7%B1%E5%BA%A6%E6%90%9C%E6%95%91%23) `813.8K 🔥` `NEW`
1. [武大通报女教授被举报事件](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E9%80%9A%E6%8A%A5%E5%A5%B3%E6%95%99%E6%8E%88%E8%A2%AB%E4%B8%BE%E6%8A%A5%E4%BA%8B%E4%BB%B6%23) `810.1K 🔥` `NEW`
1. [四川地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `809.6K 🔥` `NEW`
1. [原来洗洁精是这么用来洗碗的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B4%97%E6%B4%81%E7%B2%BE%E6%98%AF%E8%BF%99%E4%B9%88%E7%94%A8%E6%9D%A5%E6%B4%97%E7%A2%97%E7%9A%84%23) `806.5K 🔥` `NEW`
1. [爷爷生前偷偷给我买的保险叫美满一生](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E7%94%9F%E5%89%8D%E5%81%B7%E5%81%B7%E7%BB%99%E6%88%91%E4%B9%B0%E7%9A%84%E4%BF%9D%E9%99%A9%E5%8F%AB%E7%BE%8E%E6%BB%A1%E4%B8%80%E7%94%9F%23) `594.9K 🔥` `NEW`
1. [TF家族 新音](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%20%E6%96%B0%E9%9F%B3%23) `526.6K 🔥` `NEW`
1. [尚之桃提出分手](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E4%B9%8B%E6%A1%83%E6%8F%90%E5%87%BA%E5%88%86%E6%89%8B%23) `432.3K 🔥` `NEW`
1. [脱口秀适合当微信签名的句子](https://s.weibo.com/weibo?q=%23%E8%84%B1%E5%8F%A3%E7%A7%80%E9%80%82%E5%90%88%E5%BD%93%E5%BE%AE%E4%BF%A1%E7%AD%BE%E5%90%8D%E7%9A%84%E5%8F%A5%E5%AD%90%23) `334.6K 🔥` `NEW`
1. [李登科说孙千不会升咖](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E8%AF%B4%E5%AD%99%E5%8D%83%E4%B8%8D%E4%BC%9A%E5%8D%87%E5%92%96%23) `334.4K 🔥` `NEW`
1. [山东一产妇剖宫产身亡](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%B8%80%E4%BA%A7%E5%A6%87%E5%89%96%E5%AE%AB%E4%BA%A7%E8%BA%AB%E4%BA%A1%23) `334.1K 🔥` `NEW`
1. [黄渤骨折](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B8%A4%E9%AA%A8%E6%8A%98%23) `334.1K 🔥` `NEW`
1. [美国癌症治疗](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%99%8C%E7%97%87%E6%B2%BB%E7%96%97%23) `333.5K 🔥` `NEW`
1. [一年级 陈学冬综艺](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B9%B4%E7%BA%A7%20%E9%99%88%E5%AD%A6%E5%86%AC%E7%BB%BC%E8%89%BA%23) `333.3K 🔥` `NEW`
1. [AI漫剧天宫](https://s.weibo.com/weibo?q=%23AI%E6%BC%AB%E5%89%A7%E5%A4%A9%E5%AE%AB%23) `313.3K 🔥` `NEW`
1. [偷税漏税网红账号未被封禁](https://s.weibo.com/weibo?q=%23%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%E7%BD%91%E7%BA%A2%E8%B4%A6%E5%8F%B7%E6%9C%AA%E8%A2%AB%E5%B0%81%E7%A6%81%23) `297.4K 🔥` `NEW`
1. [3A级景区被低价租给如是书院](https://s.weibo.com/weibo?q=%233A%E7%BA%A7%E6%99%AF%E5%8C%BA%E8%A2%AB%E4%BD%8E%E4%BB%B7%E7%A7%9F%E7%BB%99%E5%A6%82%E6%98%AF%E4%B9%A6%E9%99%A2%23) `294.3K 🔥` `NEW`
1. [福建暴雨一楼房倒塌无人员伤亡](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E6%9A%B4%E9%9B%A8%E4%B8%80%E6%A5%BC%E6%88%BF%E5%80%92%E5%A1%8C%E6%97%A0%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%23) `294.3K 🔥` `NEW`
1. [BLG战胜WE](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CWE%23) `294.3K 🔥` `NEW`
1. [香港一家五口花了372块的晚餐](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E4%B8%80%E5%AE%B6%E4%BA%94%E5%8F%A3%E8%8A%B1%E4%BA%86372%E5%9D%97%E7%9A%84%E6%99%9A%E9%A4%90%23) `293.5K 🔥` `NEW`
1. [韩安冉宋浩然一起为女儿庆生](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AE%89%E5%86%89%E5%AE%8B%E6%B5%A9%E7%84%B6%E4%B8%80%E8%B5%B7%E4%B8%BA%E5%A5%B3%E5%84%BF%E5%BA%86%E7%94%9F%23) `293.1K 🔥` `NEW`
1. [芒果或将推出乘风破浪的妹妹](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%88%96%E5%B0%86%E6%8E%A8%E5%87%BA%E4%B9%98%E9%A3%8E%E7%A0%B4%E6%B5%AA%E7%9A%84%E5%A6%B9%E5%A6%B9%23) `291.3K 🔥` `NEW`
1. [北电26级新生颜值](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B526%E7%BA%A7%E6%96%B0%E7%94%9F%E9%A2%9C%E5%80%BC%23) `290.8K 🔥` `NEW`
1. [早春晴朗 结束肮脏的令人作呕的关系](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%20%E7%BB%93%E6%9D%9F%E8%82%AE%E8%84%8F%E7%9A%84%E4%BB%A4%E4%BA%BA%E4%BD%9C%E5%91%95%E7%9A%84%E5%85%B3%E7%B3%BB%23) `289.2K 🔥` `NEW`
1. [全球股市狂欢或暂停](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%E7%8B%82%E6%AC%A2%E6%88%96%E6%9A%82%E5%81%9C%23) `288.5K 🔥` `NEW`
1. [西安震感](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E9%9C%87%E6%84%9F%23) `287.8K 🔥` `NEW`
1. [越南声称对西沙群岛拥有主权](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E5%A3%B0%E7%A7%B0%E5%AF%B9%E8%A5%BF%E6%B2%99%E7%BE%A4%E5%B2%9B%E6%8B%A5%E6%9C%89%E4%B8%BB%E6%9D%83%23) `285.8K 🔥` `NEW`
1. [张智霖成毅合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%BA%E9%9C%96%E6%88%90%E6%AF%85%E5%90%88%E7%85%A7%23) `285.6K 🔥` `NEW`
1. [TTG对战AG](https://s.weibo.com/weibo?q=%23TTG%E5%AF%B9%E6%88%98AG%23) `274.7K 🔥` `NEW`
1. [炎亚纶回复和井柏然怎么认识的](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E5%9B%9E%E5%A4%8D%E5%92%8C%E4%BA%95%E6%9F%8F%E7%84%B6%E6%80%8E%E4%B9%88%E8%AE%A4%E8%AF%86%E7%9A%84%23) `258.8K 🔥` `NEW`
1. [范思哲晚宴出图](https://s.weibo.com/weibo?q=%23%E8%8C%83%E6%80%9D%E5%93%B2%E6%99%9A%E5%AE%B4%E5%87%BA%E5%9B%BE%23) `255.2K 🔥` `NEW`
1. [住了十年的房子开始报复我](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E4%BA%86%E5%8D%81%E5%B9%B4%E7%9A%84%E6%88%BF%E5%AD%90%E5%BC%80%E5%A7%8B%E6%8A%A5%E5%A4%8D%E6%88%91%23) `214.6K 🔥` `NEW`
1. [邓恩熙黑丝御姐丝绒裙](https://s.weibo.com/weibo?q=%23%E9%82%93%E6%81%A9%E7%86%99%E9%BB%91%E4%B8%9D%E5%BE%A1%E5%A7%90%E4%B8%9D%E7%BB%92%E8%A3%99%23) `213.3K 🔥` `NEW`
1. [曝时代峰峻下半年将资源重整](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E4%B8%8B%E5%8D%8A%E5%B9%B4%E5%B0%86%E8%B5%84%E6%BA%90%E9%87%8D%E6%95%B4%23) `209.6K 🔥` `NEW`
1. [孙千23年照片背景板有早春和井柏然](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%8323%E5%B9%B4%E7%85%A7%E7%89%87%E8%83%8C%E6%99%AF%E6%9D%BF%E6%9C%89%E6%97%A9%E6%98%A5%E5%92%8C%E4%BA%95%E6%9F%8F%E7%84%B6%23) `205.7K 🔥` `NEW`
1. [马皓轩23年被送到戒网瘾的特训学校](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%9A%93%E8%BD%A923%E5%B9%B4%E8%A2%AB%E9%80%81%E5%88%B0%E6%88%92%E7%BD%91%E7%98%BE%E7%9A%84%E7%89%B9%E8%AE%AD%E5%AD%A6%E6%A0%A1%23) `194.1K 🔥` `NEW`
1. [四川绵阳发生4.8级地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E7%BB%B5%E9%98%B3%E5%8F%91%E7%94%9F4.8%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `184.6K 🔥` `NEW`
1. [栾念哭了](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%93%AD%E4%BA%86%23) `184.2K 🔥` `NEW`
1. [马皓轩时间线](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%9A%93%E8%BD%A9%E6%97%B6%E9%97%B4%E7%BA%BF%23) `184.1K 🔥` `NEW`
1. [剖宫产身亡产妇丈夫发声](https://s.weibo.com/weibo?q=%23%E5%89%96%E5%AE%AB%E4%BA%A7%E8%BA%AB%E4%BA%A1%E4%BA%A7%E5%A6%87%E4%B8%88%E5%A4%AB%E5%8F%91%E5%A3%B0%23) `183.7K 🔥` `NEW`
1. [网传沈月林允参加乘风破浪的妹妹](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B2%88%E6%9C%88%E6%9E%97%E5%85%81%E5%8F%82%E5%8A%A0%E4%B9%98%E9%A3%8E%E7%A0%B4%E6%B5%AA%E7%9A%84%E5%A6%B9%E5%A6%B9%23) `167.5K 🔥` `NEW`
1. [3天发现4尸济州岛旅游还安全吗](https://s.weibo.com/weibo?q=%233%E5%A4%A9%E5%8F%91%E7%8E%B04%E5%B0%B8%E6%B5%8E%E5%B7%9E%E5%B2%9B%E6%97%85%E6%B8%B8%E8%BF%98%E5%AE%89%E5%85%A8%E5%90%97%23) `156.6K 🔥` `NEW`
1. [DK让二追三BFX](https://s.weibo.com/weibo?q=%23DK%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89BFX%23) `153.8K 🔥` `NEW`
1. [孔雪儿天行九歌紫女出妆](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E5%A4%A9%E8%A1%8C%E4%B9%9D%E6%AD%8C%E7%B4%AB%E5%A5%B3%E5%87%BA%E5%A6%86%23) `145.6K 🔥` `NEW`
1. [刘宇宁邀你瓜分百万超市卡](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E9%82%80%E4%BD%A0%E7%93%9C%E5%88%86%E7%99%BE%E4%B8%87%E8%B6%85%E5%B8%82%E5%8D%A1%23) `812.5K 🔥`
1. [曝字节获近300亿美元贷款](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AD%97%E8%8A%82%E8%8E%B7%E8%BF%91300%E4%BA%BF%E7%BE%8E%E5%85%83%E8%B4%B7%E6%AC%BE%23) `295.2K 🔥`
1. [王楚然画完粗眼线眼睛大了一倍](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%94%BB%E5%AE%8C%E7%B2%97%E7%9C%BC%E7%BA%BF%E7%9C%BC%E7%9D%9B%E5%A4%A7%E4%BA%86%E4%B8%80%E5%80%8D%23) `155.6K 🔥`
1. [什么话一说出来就没必要交流了](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E8%AF%9D%E4%B8%80%E8%AF%B4%E5%87%BA%E6%9D%A5%E5%B0%B1%E6%B2%A1%E5%BF%85%E8%A6%81%E4%BA%A4%E6%B5%81%E4%BA%86%23) `150.3K 🔥`
1. [微信 单删提示](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E5%8D%95%E5%88%A0%E6%8F%90%E7%A4%BA%23) `823.6K 🔥` `-66%`
1. [朴彩英拒绝100亿韩元中国奶茶代言](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BD%A9%E8%8B%B1%E6%8B%92%E7%BB%9D100%E4%BA%BF%E9%9F%A9%E5%85%83%E4%B8%AD%E5%9B%BD%E5%A5%B6%E8%8C%B6%E4%BB%A3%E8%A8%80%23) `333.6K 🔥` `-23%`
1. [1991年前生人不能新办理40年期房贷](https://s.weibo.com/weibo?q=%231991%E5%B9%B4%E5%89%8D%E7%94%9F%E4%BA%BA%E4%B8%8D%E8%83%BD%E6%96%B0%E5%8A%9E%E7%90%8640%E5%B9%B4%E6%9C%9F%E6%88%BF%E8%B4%B7%23) `206.1K 🔥` `-57%`

Updated at 2026-09-03 21:37:56

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
