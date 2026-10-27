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

1. [中国足协与皇马俱乐部严正交涉](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%B3%E5%8D%8F%E4%B8%8E%E7%9A%87%E9%A9%AC%E4%BF%B1%E4%B9%90%E9%83%A8%E4%B8%A5%E6%AD%A3%E4%BA%A4%E6%B6%89%23) `4.2M 🔥` `NEW`
1. [外交部回应姆巴佩涉华不当言论](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B6%89%E5%8D%8E%E4%B8%8D%E5%BD%93%E8%A8%80%E8%AE%BA%23) `1.3M 🔥` `NEW`
1. [从多组硬核数据透视高质量发展成绩单](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E5%A4%9A%E7%BB%84%E7%A1%AC%E6%A0%B8%E6%95%B0%E6%8D%AE%E9%80%8F%E8%A7%86%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E6%88%90%E7%BB%A9%E5%8D%95%23) `1.0M 🔥` `NEW`
1. [中央广播电视总台回应姆巴佩道歉](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E5%B9%BF%E6%92%AD%E7%94%B5%E8%A7%86%E6%80%BB%E5%8F%B0%E5%9B%9E%E5%BA%94%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%81%93%E6%AD%89%23) `995.1K 🔥` `NEW`
1. [中国新晋女首富身家1270亿](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E6%99%8B%E5%A5%B3%E9%A6%96%E5%AF%8C%E8%BA%AB%E5%AE%B61270%E4%BA%BF%23) `983.1K 🔥` `NEW`
1. [皇马反复碰触国人情感红线](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E5%8F%8D%E5%A4%8D%E7%A2%B0%E8%A7%A6%E5%9B%BD%E4%BA%BA%E6%83%85%E6%84%9F%E7%BA%A2%E7%BA%BF%23) `940.5K 🔥` `NEW`
1. [我的美食日记](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E7%BE%8E%E9%A3%9F%E6%97%A5%E8%AE%B0%23) `878.2K 🔥` `NEW`
1. [孙颖莎把卢茨全算住了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%8A%8A%E5%8D%A2%E8%8C%A8%E5%85%A8%E7%AE%97%E4%BD%8F%E4%BA%86%23) `857.4K 🔥` `NEW`
1. [麒麟9050峰值仅A20Pro一半](https://s.weibo.com/weibo?q=%23%E9%BA%92%E9%BA%9F9050%E5%B3%B0%E5%80%BC%E4%BB%85A20Pro%E4%B8%80%E5%8D%8A%23) `816.4K 🔥` `NEW`
1. [长征中的隐蔽斗争](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E4%B8%AD%E7%9A%84%E9%9A%90%E8%94%BD%E6%96%97%E4%BA%89%23) `781.1K 🔥` `NEW`
1. [刘铮亮没有被吊销医师证](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%93%AE%E4%BA%AE%E6%B2%A1%E6%9C%89%E8%A2%AB%E5%90%8A%E9%94%80%E5%8C%BB%E5%B8%88%E8%AF%81%23) `744.8K 🔥` `NEW`
1. [网友不接受姆巴佩道歉](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E4%B8%8D%E6%8E%A5%E5%8F%97%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%81%93%E6%AD%89%23) `693.9K 🔥` `NEW`
1. [小城良方被指医学漏洞百出](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E8%A2%AB%E6%8C%87%E5%8C%BB%E5%AD%A6%E6%BC%8F%E6%B4%9E%E7%99%BE%E5%87%BA%23) `606.2K 🔥` `NEW`
1. [郭晓婷王天辰三搭](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E4%B8%89%E6%90%AD%23) `601.8K 🔥` `NEW`
1. [杨洋陈都灵 等风热吻你](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E9%99%88%E9%83%BD%E7%81%B5%20%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `345.3K 🔥` `NEW`
1. [疑似新毒株腹痛只能硬熬](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%96%B0%E6%AF%92%E6%A0%AA%E8%85%B9%E7%97%9B%E5%8F%AA%E8%83%BD%E7%A1%AC%E7%86%AC%23) `344.1K 🔥` `NEW`
1. [红米K100提前发布](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E7%B1%B3K100%E6%8F%90%E5%89%8D%E5%8F%91%E5%B8%83%23) `343.8K 🔥` `NEW`
1. [Cat TTG](https://s.weibo.com/weibo?q=%23Cat%20TTG%23) `339.1K 🔥` `NEW`
1. [Hope向粉丝道歉](https://s.weibo.com/weibo?q=%23Hope%E5%90%91%E7%B2%89%E4%B8%9D%E9%81%93%E6%AD%89%23) `336.8K 🔥` `NEW`
1. [孙颖莎巴黎奥运后首次来法国比赛](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%B7%B4%E9%BB%8E%E5%A5%A5%E8%BF%90%E5%90%8E%E9%A6%96%E6%AC%A1%E6%9D%A5%E6%B3%95%E5%9B%BD%E6%AF%94%E8%B5%9B%23) `335.3K 🔥` `NEW`
1. [环球时报评姆巴佩事件](https://s.weibo.com/weibo?q=%23%E7%8E%AF%E7%90%83%E6%97%B6%E6%8A%A5%E8%AF%84%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BA%8B%E4%BB%B6%23) `334.1K 🔥` `NEW`
1. [小城良方 76位医学顾问](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%2076%E4%BD%8D%E5%8C%BB%E5%AD%A6%E9%A1%BE%E9%97%AE%23) `332.0K 🔥` `NEW`
1. [中国新闻网呸姆巴佩](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E9%97%BB%E7%BD%91%E5%91%B8%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `331.9K 🔥` `NEW`
1. [极客湾](https://s.weibo.com/weibo?q=%23%E6%9E%81%E5%AE%A2%E6%B9%BE%23) `329.4K 🔥` `NEW`
1. [姆巴佩不当言论源于皇马放任](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%B8%8D%E5%BD%93%E8%A8%80%E8%AE%BA%E6%BA%90%E4%BA%8E%E7%9A%87%E9%A9%AC%E6%94%BE%E4%BB%BB%23) `328.3K 🔥` `NEW`
1. [原来刘亦菲走红毯的时候雨这么大](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%88%98%E4%BA%A6%E8%8F%B2%E8%B5%B0%E7%BA%A2%E6%AF%AF%E7%9A%84%E6%97%B6%E5%80%99%E9%9B%A8%E8%BF%99%E4%B9%88%E5%A4%A7%23) `326.9K 🔥` `NEW`
1. [西甲致歉](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%94%B2%E8%87%B4%E6%AD%89%23) `324.8K 🔥` `NEW`
1. [邓超Angelababy合体比心](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85Angelababy%E5%90%88%E4%BD%93%E6%AF%94%E5%BF%83%23) `323.5K 🔥` `NEW`
1. [建议秋冬多喝这种饮品](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%A7%8B%E5%86%AC%E5%A4%9A%E5%96%9D%E8%BF%99%E7%A7%8D%E9%A5%AE%E5%93%81%23) `322.3K 🔥` `NEW`
1. [姆巴佩涉华不当言论引众怒](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B6%89%E5%8D%8E%E4%B8%8D%E5%BD%93%E8%A8%80%E8%AE%BA%E5%BC%95%E4%BC%97%E6%80%92%23) `320.6K 🔥` `NEW`
1. [大唐辟珠记](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%94%90%E8%BE%9F%E7%8F%A0%E8%AE%B0%23) `320.0K 🔥` `NEW`
1. [薛之谦12年歌迷被骗钱又遭取关](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A612%E5%B9%B4%E6%AD%8C%E8%BF%B7%E8%A2%AB%E9%AA%97%E9%92%B1%E5%8F%88%E9%81%AD%E5%8F%96%E5%85%B3%23) `317.2K 🔥` `NEW`
1. [科技股尾盘瀑布式杀跌](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E8%82%A1%E5%B0%BE%E7%9B%98%E7%80%91%E5%B8%83%E5%BC%8F%E6%9D%80%E8%B7%8C%23) `289.1K 🔥` `NEW`
1. [皇马沉默难消涉华争议](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E6%B2%89%E9%BB%98%E9%9A%BE%E6%B6%88%E6%B6%89%E5%8D%8E%E4%BA%89%E8%AE%AE%23) `289.0K 🔥` `NEW`
1. [杨洋终于回归现偶了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E7%BB%88%E4%BA%8E%E5%9B%9E%E5%BD%92%E7%8E%B0%E5%81%B6%E4%BA%86%23) `288.7K 🔥` `NEW`
1. [普通人千万要带娃去广东见世面](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E5%8D%83%E4%B8%87%E8%A6%81%E5%B8%A6%E5%A8%83%E5%8E%BB%E5%B9%BF%E4%B8%9C%E8%A7%81%E4%B8%96%E9%9D%A2%23) `284.6K 🔥` `NEW`
1. [厉娜回复粉丝](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E5%9B%9E%E5%A4%8D%E7%B2%89%E4%B8%9D%23) `268.7K 🔥` `NEW`
1. [坠亡幼童父亲说孩子3岁前没记忆](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E7%88%B6%E4%BA%B2%E8%AF%B4%E5%AD%A9%E5%AD%903%E5%B2%81%E5%89%8D%E6%B2%A1%E8%AE%B0%E5%BF%86%23) `259.4K 🔥` `NEW`
1. [字节跳动赚麻了](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E8%B5%9A%E9%BA%BB%E4%BA%86%23) `259.2K 🔥` `NEW`
1. [孙颖莎A勒布伦训练馆切磋](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EA%E5%8B%92%E5%B8%83%E4%BC%A6%E8%AE%AD%E7%BB%83%E9%A6%86%E5%88%87%E7%A3%8B%23) `258.9K 🔥` `NEW`
1. [红果收入](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E6%94%B6%E5%85%A5%23) `258.6K 🔥` `NEW`
1. [明天要官宣的剧集](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%A4%A9%E8%A6%81%E5%AE%98%E5%AE%A3%E7%9A%84%E5%89%A7%E9%9B%86%23) `243.5K 🔥` `NEW`
1. [男子买54斤甘蔗回家发现是73斤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%B054%E6%96%A4%E7%94%98%E8%94%97%E5%9B%9E%E5%AE%B6%E5%8F%91%E7%8E%B0%E6%98%AF73%E6%96%A4%23) `212.4K 🔥` `NEW`
1. [田曦薇一年三部爆剧无缝进组](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%80%E5%B9%B4%E4%B8%89%E9%83%A8%E7%88%86%E5%89%A7%E6%97%A0%E7%BC%9D%E8%BF%9B%E7%BB%84%23) `193.2K 🔥` `NEW`
1. [AL](https://s.weibo.com/weibo?q=%23AL%23) `189.5K 🔥` `NEW`
1. [字节系APP全覆盖](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E7%B3%BBAPP%E5%85%A8%E8%A6%86%E7%9B%96%23) `169.0K 🔥` `NEW`
1. [刘宇宁 我今天穿高跟鞋来的](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%20%E6%88%91%E4%BB%8A%E5%A4%A9%E7%A9%BF%E9%AB%98%E8%B7%9F%E9%9E%8B%E6%9D%A5%E7%9A%84%23) `153.3K 🔥` `NEW`
1. [2岁幼童误食洗衣凝珠妈妈冷静自救](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%B9%BC%E7%AB%A5%E8%AF%AF%E9%A3%9F%E6%B4%97%E8%A1%A3%E5%87%9D%E7%8F%A0%E5%A6%88%E5%A6%88%E5%86%B7%E9%9D%99%E8%87%AA%E6%95%91%23) `152.7K 🔥` `NEW`
1. [天猫双11和王安宇打开淘宝出发](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E5%8F%8C11%E5%92%8C%E7%8E%8B%E5%AE%89%E5%AE%87%E6%89%93%E5%BC%80%E6%B7%98%E5%AE%9D%E5%87%BA%E5%8F%91%23) `1.0M 🔥` `-82%`
1. [西甲](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%94%B2%23) `342.2K 🔥` `-74%`
1. [央视叫停涉姆巴佩赛事和广告播出](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%8F%AB%E5%81%9C%E6%B6%89%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%B5%9B%E4%BA%8B%E5%92%8C%E5%B9%BF%E5%91%8A%E6%92%AD%E5%87%BA%23) `317.6K 🔥` `-96%`

Updated at 2026-10-27 22:39:25

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
