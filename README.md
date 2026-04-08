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

1. [店主回应因博主吃12个汉堡报警 (The owner responded to calling the police because the blogger ate 12 burgers)](https://s.weibo.com/weibo?q=%23%E5%BA%97%E4%B8%BB%E5%9B%9E%E5%BA%94%E5%9B%A0%E5%8D%9A%E4%B8%BB%E5%90%8312%E4%B8%AA%E6%B1%89%E5%A0%A1%E6%8A%A5%E8%AD%A6%23) `1.2M 🔥` `NEW`
1. [仅1户报名摇号没买到房当事人发声](https://s.weibo.com/weibo?q=%23%E4%BB%851%E6%88%B7%E6%8A%A5%E5%90%8D%E6%91%87%E5%8F%B7%E6%B2%A1%E4%B9%B0%E5%88%B0%E6%88%BF%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `860.1K 🔥` `NEW`
1. [从超3亿元退费看民生保障力度](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E8%B6%853%E4%BA%BF%E5%85%83%E9%80%80%E8%B4%B9%E7%9C%8B%E6%B0%91%E7%94%9F%E4%BF%9D%E9%9A%9C%E5%8A%9B%E5%BA%A6%23) `678.0K 🔥` `NEW`
1. [海湾多国遭袭](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B9%BE%E5%A4%9A%E5%9B%BD%E9%81%AD%E8%A2%AD%23) `662.3K 🔥` `NEW`
1. [妻子称上班11天死亡丈夫不抱怨工作](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%A7%B0%E4%B8%8A%E7%8F%AD11%E5%A4%A9%E6%AD%BB%E4%BA%A1%E4%B8%88%E5%A4%AB%E4%B8%8D%E6%8A%B1%E6%80%A8%E5%B7%A5%E4%BD%9C%23) `619.1K 🔥` `NEW`
1. [午睡悲伤综合征](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%82%B2%E4%BC%A4%E7%BB%BC%E5%90%88%E5%BE%81%23) `593.8K 🔥` `NEW`
1. [律师说法](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%AF%B4%E6%B3%95%23) `592.6K 🔥` `NEW`
1. [吴镇宇 王格格你是来炫耀的吗](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%20%E7%8E%8B%E6%A0%BC%E6%A0%BC%E4%BD%A0%E6%98%AF%E6%9D%A5%E7%82%AB%E8%80%80%E7%9A%84%E5%90%97%23) `571.8K 🔥` `NEW`
1. [王楚钦孙颖莎第N次国际级运动健将](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E7%AC%ACN%E6%AC%A1%E5%9B%BD%E9%99%85%E7%BA%A7%E8%BF%90%E5%8A%A8%E5%81%A5%E5%B0%86%23) `513.8K 🔥` `NEW`
1. [徐艺洋回应黄子韬身体状况](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9B%9E%E5%BA%94%E9%BB%84%E5%AD%90%E9%9F%AC%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `491.0K 🔥` `NEW`
1. [倪虹洁1个人要赡养5个老人 (Ni Hongjie has to support 5 elderly people alone)](https://s.weibo.com/weibo?q=%23%E5%80%AA%E8%99%B9%E6%B4%811%E4%B8%AA%E4%BA%BA%E8%A6%81%E8%B5%A1%E5%85%BB5%E4%B8%AA%E8%80%81%E4%BA%BA%23) `468.4K 🔥` `NEW`
1. [游客吐槽洛阳售卖牙签固定断头牡丹](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E5%90%90%E6%A7%BD%E6%B4%9B%E9%98%B3%E5%94%AE%E5%8D%96%E7%89%99%E7%AD%BE%E5%9B%BA%E5%AE%9A%E6%96%AD%E5%A4%B4%E7%89%A1%E4%B8%B9%23) `286.1K 🔥` `NEW`
1. [以色列仍在持续打击伊朗](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E4%BB%8D%E5%9C%A8%E6%8C%81%E7%BB%AD%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%23) `276.4K 🔥` `NEW`
1. [高铁上感受世界的参差](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E4%B8%8A%E6%84%9F%E5%8F%97%E4%B8%96%E7%95%8C%E7%9A%84%E5%8F%82%E5%B7%AE%23) `264.2K 🔥` `NEW`
1. [伊朗公布10项停战条款主要内容](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%8310%E9%A1%B9%E5%81%9C%E6%88%98%E6%9D%A1%E6%AC%BE%E4%B8%BB%E8%A6%81%E5%86%85%E5%AE%B9%23) `248.7K 🔥` `NEW`
1. [代露娃赖伟明宝珠开机](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E8%B5%96%E4%BC%9F%E6%98%8E%E5%AE%9D%E7%8F%A0%E5%BC%80%E6%9C%BA%23) `241.6K 🔥` `NEW`
1. [秋瓷炫儿子要学中英韩三门语言](https://s.weibo.com/weibo?q=%23%E7%A7%8B%E7%93%B7%E7%82%AB%E5%84%BF%E5%AD%90%E8%A6%81%E5%AD%A6%E4%B8%AD%E8%8B%B1%E9%9F%A9%E4%B8%89%E9%97%A8%E8%AF%AD%E8%A8%80%23) `217.7K 🔥` `NEW`
1. [什么是假性暗恋](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%98%AF%E5%81%87%E6%80%A7%E6%9A%97%E6%81%8B%23) `210.2K 🔥` `NEW`
1. [男子猥亵被拒没掐死对方又补掐](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%8C%A5%E4%BA%B5%E8%A2%AB%E6%8B%92%E6%B2%A1%E6%8E%90%E6%AD%BB%E5%AF%B9%E6%96%B9%E5%8F%88%E8%A1%A5%E6%8E%90%23) `168.1K 🔥` `NEW`
1. [新科技旗舰小鹏GX来了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%A7%91%E6%8A%80%E6%97%97%E8%88%B0%E5%B0%8F%E9%B9%8FGX%E6%9D%A5%E4%BA%86%23) `162.7K 🔥` `NEW`
1. [特朗普为何迅速转变态度 (Why Trump changed his attitude so quickly)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%BA%E4%BD%95%E8%BF%85%E9%80%9F%E8%BD%AC%E5%8F%98%E6%80%81%E5%BA%A6%23) `161.4K 🔥` `NEW`
1. [谁懂我的五一不想将就住](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E6%88%91%E7%9A%84%E4%BA%94%E4%B8%80%E4%B8%8D%E6%83%B3%E5%B0%86%E5%B0%B1%E4%BD%8F%23) `153.9K 🔥` `NEW`
1. [女子吃完超大蓝莓腹胀腹泻](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E5%AE%8C%E8%B6%85%E5%A4%A7%E8%93%9D%E8%8E%93%E8%85%B9%E8%83%80%E8%85%B9%E6%B3%BB%23) `144.0K 🔥` `NEW`
1. [金子涵 再逼我就把所有的都说出来](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%20%E5%86%8D%E9%80%BC%E6%88%91%E5%B0%B1%E6%8A%8A%E6%89%80%E6%9C%89%E7%9A%84%E9%83%BD%E8%AF%B4%E5%87%BA%E6%9D%A5%23) `132.7K 🔥` `NEW`
1. [王艳19岁儿子时尚感](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%B319%E5%B2%81%E5%84%BF%E5%AD%90%E6%97%B6%E5%B0%9A%E6%84%9F%23) `127.6K 🔥` `NEW`
1. [粉色蓝莓](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E8%93%9D%E8%8E%93%23) `121.6K 🔥` `NEW`
1. [郑丽文率中国国民党访问团拜谒中山陵](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E7%8E%87%E4%B8%AD%E5%9B%BD%E5%9B%BD%E6%B0%91%E5%85%9A%E8%AE%BF%E9%97%AE%E5%9B%A2%E6%8B%9C%E8%B0%92%E4%B8%AD%E5%B1%B1%E9%99%B5%23) `119.7K 🔥` `NEW`
1. [papi酱 pa女郎](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%20pa%E5%A5%B3%E9%83%8E%23) `114.3K 🔥` `NEW`
1. [冰湖重生今日开播](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E4%BB%8A%E6%97%A5%E5%BC%80%E6%92%AD%23) `113.6K 🔥` `NEW`
1. [日本网红在印度被泼粪水致高烧入院](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E7%BA%A2%E5%9C%A8%E5%8D%B0%E5%BA%A6%E8%A2%AB%E6%B3%BC%E7%B2%AA%E6%B0%B4%E8%87%B4%E9%AB%98%E7%83%A7%E5%85%A5%E9%99%A2%23) `113.4K 🔥` `NEW`
1. [网友真把顺德文旅喊过来帮忙斩鸡了 (Netizens really called Shunde Cultural Tourism over to help chop the chicken.)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%9C%9F%E6%8A%8A%E9%A1%BA%E5%BE%B7%E6%96%87%E6%97%85%E5%96%8A%E8%BF%87%E6%9D%A5%E5%B8%AE%E5%BF%99%E6%96%A9%E9%B8%A1%E4%BA%86%23) `111.8K 🔥` `NEW`
1. [泰国女子向19岁女同事泼滚烫热油](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%90%9119%E5%B2%81%E5%A5%B3%E5%90%8C%E4%BA%8B%E6%B3%BC%E6%BB%9A%E7%83%AB%E7%83%AD%E6%B2%B9%23) `108.2K 🔥` `NEW`
1. [压塌20年樱花树女子认错愿赔偿](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%A1%8C20%E5%B9%B4%E6%A8%B1%E8%8A%B1%E6%A0%91%E5%A5%B3%E5%AD%90%E8%AE%A4%E9%94%99%E6%84%BF%E8%B5%94%E5%81%BF%23) `104.0K 🔥` `NEW`
1. [贝多芬止痛药](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%A4%9A%E8%8A%AC%E6%AD%A2%E7%97%9B%E8%8D%AF%23) `102.4K 🔥` `NEW`
1. [讨好型人格小时候](https://s.weibo.com/weibo?q=%23%E8%AE%A8%E5%A5%BD%E5%9E%8B%E4%BA%BA%E6%A0%BC%E5%B0%8F%E6%97%B6%E5%80%99%23) `101.2K 🔥` `NEW`
1. [吃12个汉堡女子称自己天生食量大](https://s.weibo.com/weibo?q=%23%E5%90%8312%E4%B8%AA%E6%B1%89%E5%A0%A1%E5%A5%B3%E5%AD%90%E7%A7%B0%E8%87%AA%E5%B7%B1%E5%A4%A9%E7%94%9F%E9%A3%9F%E9%87%8F%E5%A4%A7%23) `100.6K 🔥` `NEW`
1. [过度提醒就是提前指责](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E6%8F%90%E9%86%92%E5%B0%B1%E6%98%AF%E6%8F%90%E5%89%8D%E6%8C%87%E8%B4%A3%23) `94.9K 🔥` `NEW`
1. [穆祉丞首部电影演学生](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E9%A6%96%E9%83%A8%E7%94%B5%E5%BD%B1%E6%BC%94%E5%AD%A6%E7%94%9F%23) `91.8K 🔥` `NEW`
1. [中国军号发硬核视频](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E5%8F%B7%E5%8F%91%E7%A1%AC%E6%A0%B8%E8%A7%86%E9%A2%91%23) `91.8K 🔥` `NEW`
1. [浪姐一公小考](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%80%E5%85%AC%E5%B0%8F%E8%80%83%23) `90.6K 🔥` `NEW`
1. [伊朗要求美接受伊朗进行铀浓缩活动 (Iran demands that US accept Iran's uranium enrichment activities)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A6%81%E6%B1%82%E7%BE%8E%E6%8E%A5%E5%8F%97%E4%BC%8A%E6%9C%97%E8%BF%9B%E8%A1%8C%E9%93%80%E6%B5%93%E7%BC%A9%E6%B4%BB%E5%8A%A8%23) `85.5K 🔥` `NEW`
1. [认母期认成狗了](https://s.weibo.com/weibo?q=%23%E8%AE%A4%E6%AF%8D%E6%9C%9F%E8%AE%A4%E6%88%90%E7%8B%97%E4%BA%86%23) `82.0K 🔥` `NEW`
1. [莫氏鸡煲的火烧遍了周边餐饮店](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E7%9A%84%E7%81%AB%E7%83%A7%E9%81%8D%E4%BA%86%E5%91%A8%E8%BE%B9%E9%A4%90%E9%A5%AE%E5%BA%97%23) `79.4K 🔥` `NEW`
1. [伊朗代表感谢中俄 (Iranian representative thanks China and Russia)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BB%A3%E8%A1%A8%E6%84%9F%E8%B0%A2%E4%B8%AD%E4%BF%84%23) `589.7K 🔥`
1. [伊朗接受停火提议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8E%A5%E5%8F%97%E5%81%9C%E7%81%AB%E6%8F%90%E8%AE%AE%23) `475.3K 🔥`
1. [伊美双方停火生效](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%BE%8E%E5%8F%8C%E6%96%B9%E5%81%9C%E7%81%AB%E7%94%9F%E6%95%88%23) `218.4K 🔥` `-33%`
1. [Angelababy邓超去看陈赫话剧](https://s.weibo.com/weibo?q=%23Angelababy%E9%82%93%E8%B6%85%E5%8E%BB%E7%9C%8B%E9%99%88%E8%B5%AB%E8%AF%9D%E5%89%A7%23) `146.8K 🔥` `-55%`
1. [网传一公淘汰张艺上温峥嵘](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E4%B8%80%E5%85%AC%E6%B7%98%E6%B1%B0%E5%BC%A0%E8%89%BA%E4%B8%8A%E6%B8%A9%E5%B3%A5%E5%B5%98%23) `100.6K 🔥` `-78%`
1. [男子性骚扰遭反抗后杀人抛尸](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%80%A7%E9%AA%9A%E6%89%B0%E9%81%AD%E5%8F%8D%E6%8A%97%E5%90%8E%E6%9D%80%E4%BA%BA%E6%8A%9B%E5%B0%B8%23) `100.4K 🔥` `-57%`
1. [女子称休完产假公司没了 (Woman says her company is gone after maternity leave)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E4%BC%91%E5%AE%8C%E4%BA%A7%E5%81%87%E5%85%AC%E5%8F%B8%E6%B2%A1%E4%BA%86%23) `81.8K 🔥` `-90%`

Updated at 2026-04-08 12:06:31

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
