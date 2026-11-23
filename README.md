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

1. [treetree炸鸡店老板最新发声](https://s.weibo.com/weibo?q=%23treetree%E7%82%B8%E9%B8%A1%E5%BA%97%E8%80%81%E6%9D%BF%E6%9C%80%E6%96%B0%E5%8F%91%E5%A3%B0%23) `1.1M 🔥` `NEW`
1. [女子第一次坐飞机就在登机口扔硬币](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%9D%90%E9%A3%9E%E6%9C%BA%E5%B0%B1%E5%9C%A8%E7%99%BB%E6%9C%BA%E5%8F%A3%E6%89%94%E7%A1%AC%E5%B8%81%23) `808.2K 🔥` `NEW`
1. [6图看我国消费新动能](https://s.weibo.com/weibo?q=%236%E5%9B%BE%E7%9C%8B%E6%88%91%E5%9B%BD%E6%B6%88%E8%B4%B9%E6%96%B0%E5%8A%A8%E8%83%BD%23) `636.3K 🔥` `NEW`
1. [白小纯在青稚粉丝团里](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%9C%A8%E9%9D%92%E7%A8%9A%E7%B2%89%E4%B8%9D%E5%9B%A2%E9%87%8C%23) `583.7K 🔥` `NEW`
1. [treetree炸鸡一天出油三四桶](https://s.weibo.com/weibo?q=%23treetree%E7%82%B8%E9%B8%A1%E4%B8%80%E5%A4%A9%E5%87%BA%E6%B2%B9%E4%B8%89%E5%9B%9B%E6%A1%B6%23) `537.9K 🔥` `NEW`
1. [维嘉头也不回地去找王菲了](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%98%89%E5%A4%B4%E4%B9%9F%E4%B8%8D%E5%9B%9E%E5%9C%B0%E5%8E%BB%E6%89%BE%E7%8E%8B%E8%8F%B2%E4%BA%86%23) `379.6K 🔥` `NEW`
1. [曝JiaQi回TES](https://s.weibo.com/weibo?q=%23%E6%9B%9DJiaQi%E5%9B%9ETES%23) `365.7K 🔥` `NEW`
1. [晚自习倒地猝死女教师多次说好累](https://s.weibo.com/weibo?q=%23%E6%99%9A%E8%87%AA%E4%B9%A0%E5%80%92%E5%9C%B0%E7%8C%9D%E6%AD%BB%E5%A5%B3%E6%95%99%E5%B8%88%E5%A4%9A%E6%AC%A1%E8%AF%B4%E5%A5%BD%E7%B4%AF%23) `326.4K 🔥` `NEW`
1. [吐槽月经气味大广告运营方被罚45万](https://s.weibo.com/weibo?q=%23%E5%90%90%E6%A7%BD%E6%9C%88%E7%BB%8F%E6%B0%94%E5%91%B3%E5%A4%A7%E5%B9%BF%E5%91%8A%E8%BF%90%E8%90%A5%E6%96%B9%E8%A2%AB%E7%BD%9A45%E4%B8%87%23) `297.3K 🔥` `NEW`
1. [两京十五日](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%23) `296.8K 🔥` `NEW`
1. [李雪琴居然这么瘦了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E7%90%B4%E5%B1%85%E7%84%B6%E8%BF%99%E4%B9%88%E7%98%A6%E4%BA%86%23) `295.3K 🔥` `NEW`
1. [嫪毐可能不是男宠](https://s.weibo.com/weibo?q=%23%E5%AB%AA%E6%AF%90%E5%8F%AF%E8%83%BD%E4%B8%8D%E6%98%AF%E7%94%B7%E5%AE%A0%23) `292.9K 🔥` `NEW`
1. [白小纯怎么帅成这样了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%80%8E%E4%B9%88%E5%B8%85%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `290.6K 🔥` `NEW`
1. [刘恺威为小19岁女友黎纪君庆生](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%BA%E5%A8%81%E4%B8%BA%E5%B0%8F19%E5%B2%81%E5%A5%B3%E5%8F%8B%E9%BB%8E%E7%BA%AA%E5%90%9B%E5%BA%86%E7%94%9F%23) `290.5K 🔥` `NEW`
1. [马天宇给张萌偷偷递台阶](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E7%BB%99%E5%BC%A0%E8%90%8C%E5%81%B7%E5%81%B7%E9%80%92%E5%8F%B0%E9%98%B6%23) `257.5K 🔥` `NEW`
1. [荣耀700半小时预订量超上代全天](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80700%E5%8D%8A%E5%B0%8F%E6%97%B6%E9%A2%84%E8%AE%A2%E9%87%8F%E8%B6%85%E4%B8%8A%E4%BB%A3%E5%85%A8%E5%A4%A9%23) `249.9K 🔥` `NEW`
1. [特朗普出席活动展示深圳接机画面](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%87%BA%E5%B8%AD%E6%B4%BB%E5%8A%A8%E5%B1%95%E7%A4%BA%E6%B7%B1%E5%9C%B3%E6%8E%A5%E6%9C%BA%E7%94%BB%E9%9D%A2%23) `243.3K 🔥` `NEW`
1. [金晨新剧亲吻呼吸罩](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E6%96%B0%E5%89%A7%E4%BA%B2%E5%90%BB%E5%91%BC%E5%90%B8%E7%BD%A9%23) `239.5K 🔥` `NEW`
1. [花坛藏尸案被害人儿子回应凶手翻供](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%9D%9B%E8%97%8F%E5%B0%B8%E6%A1%88%E8%A2%AB%E5%AE%B3%E4%BA%BA%E5%84%BF%E5%AD%90%E5%9B%9E%E5%BA%94%E5%87%B6%E6%89%8B%E7%BF%BB%E4%BE%9B%23) `238.6K 🔥` `NEW`
1. [200元就能定制AI仿冒名人视频](https://s.weibo.com/weibo?q=%23200%E5%85%83%E5%B0%B1%E8%83%BD%E5%AE%9A%E5%88%B6AI%E4%BB%BF%E5%86%92%E5%90%8D%E4%BA%BA%E8%A7%86%E9%A2%91%23) `238.6K 🔥` `NEW`
1. [香奈儿包日租25元前提是租1年](https://s.weibo.com/weibo?q=%23%E9%A6%99%E5%A5%88%E5%84%BF%E5%8C%85%E6%97%A5%E7%A7%9F25%E5%85%83%E5%89%8D%E6%8F%90%E6%98%AF%E7%A7%9F1%E5%B9%B4%23) `238.5K 🔥` `NEW`
1. [陈赫不建议青稚频繁上综艺](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E4%B8%8D%E5%BB%BA%E8%AE%AE%E9%9D%92%E7%A8%9A%E9%A2%91%E7%B9%81%E4%B8%8A%E7%BB%BC%E8%89%BA%23) `237.4K 🔥` `NEW`
1. [老师称现在早恋尺度大](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E7%A7%B0%E7%8E%B0%E5%9C%A8%E6%97%A9%E6%81%8B%E5%B0%BA%E5%BA%A6%E5%A4%A7%23) `235.6K 🔥` `NEW`
1. [00后不整顿职场来整顿婚礼了](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E4%B8%8D%E6%95%B4%E9%A1%BF%E8%81%8C%E5%9C%BA%E6%9D%A5%E6%95%B4%E9%A1%BF%E5%A9%9A%E7%A4%BC%E4%BA%86%23) `231.8K 🔥` `NEW`
1. [白小纯可以直播了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%8F%AF%E4%BB%A5%E7%9B%B4%E6%92%AD%E4%BA%86%23) `227.9K 🔥` `NEW`
1. [网友称上海地铁4元涨到7元](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%A7%B0%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%814%E5%85%83%E6%B6%A8%E5%88%B07%E5%85%83%23) `225.2K 🔥` `NEW`
1. [后会友期火锅丢失案](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%81%AB%E9%94%85%E4%B8%A2%E5%A4%B1%E6%A1%88%23) `223.1K 🔥` `NEW`
1. [曝JDG想签JackeyLove](https://s.weibo.com/weibo?q=%23%E6%9B%9DJDG%E6%83%B3%E7%AD%BEJackeyLove%23) `220.9K 🔥` `NEW`
1. [我的有罪之人](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E6%9C%89%E7%BD%AA%E4%B9%8B%E4%BA%BA%23) `202.8K 🔥` `NEW`
1. [俄军对乌克兰实施大规模打击](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%86%9B%E5%AF%B9%E4%B9%8C%E5%85%8B%E5%85%B0%E5%AE%9E%E6%96%BD%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%89%93%E5%87%BB%23) `202.2K 🔥` `NEW`
1. [丁程鑫什么弹幕都敢念](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%BB%80%E4%B9%88%E5%BC%B9%E5%B9%95%E9%83%BD%E6%95%A2%E5%BF%B5%23) `201.5K 🔥` `NEW`
1. [蔡磊悼念原京东首席战略官廖建文](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E6%82%BC%E5%BF%B5%E5%8E%9F%E4%BA%AC%E4%B8%9C%E9%A6%96%E5%B8%AD%E6%88%98%E7%95%A5%E5%AE%98%E5%BB%96%E5%BB%BA%E6%96%87%23) `200.5K 🔥` `NEW`
1. [盒马APEC同款荔枝冰酒平替卖断货](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%ACAPEC%E5%90%8C%E6%AC%BE%E8%8D%94%E6%9E%9D%E5%86%B0%E9%85%92%E5%B9%B3%E6%9B%BF%E5%8D%96%E6%96%AD%E8%B4%A7%23) `199.3K 🔥` `NEW`
1. [胖东来一店将关闭羽绒服亮成本价](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B8%80%E5%BA%97%E5%B0%86%E5%85%B3%E9%97%AD%E7%BE%BD%E7%BB%92%E6%9C%8D%E4%BA%AE%E6%88%90%E6%9C%AC%E4%BB%B7%23) `198.9K 🔥` `NEW`
1. [脆脆炸鸡老板强调八百遍是做披萨的](https://s.weibo.com/weibo?q=%23%E8%84%86%E8%84%86%E7%82%B8%E9%B8%A1%E8%80%81%E6%9D%BF%E5%BC%BA%E8%B0%83%E5%85%AB%E7%99%BE%E9%81%8D%E6%98%AF%E5%81%9A%E6%8A%AB%E8%90%A8%E7%9A%84%23) `195.5K 🔥` `NEW`
1. [王子璇说文吉儿情绪反复](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E8%AF%B4%E6%96%87%E5%90%89%E5%84%BF%E6%83%85%E7%BB%AA%E5%8F%8D%E5%A4%8D%23) `187.2K 🔥` `NEW`
1. [许飞演的坐月子](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E6%BC%94%E7%9A%84%E5%9D%90%E6%9C%88%E5%AD%90%23) `181.3K 🔥` `NEW`
1. [九岁女儿问剖腹产妈妈能玩平板吗](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B2%81%E5%A5%B3%E5%84%BF%E9%97%AE%E5%89%96%E8%85%B9%E4%BA%A7%E5%A6%88%E5%A6%88%E8%83%BD%E7%8E%A9%E5%B9%B3%E6%9D%BF%E5%90%97%23) `170.6K 🔥` `NEW`
1. [蔡磊一家三口分开住](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%88%86%E5%BC%80%E4%BD%8F%23) `169.1K 🔥` `NEW`
1. [胖就是显老实猫咪也一样](https://s.weibo.com/weibo?q=%23%E8%83%96%E5%B0%B1%E6%98%AF%E6%98%BE%E8%80%81%E5%AE%9E%E7%8C%AB%E5%92%AA%E4%B9%9F%E4%B8%80%E6%A0%B7%23) `167.2K 🔥` `NEW`
1. [马天宇正面贴脸文吉儿](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E6%AD%A3%E9%9D%A2%E8%B4%B4%E8%84%B8%E6%96%87%E5%90%89%E5%84%BF%23) `143.2K 🔥` `NEW`
1. [李乃文反派还得老的坏](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%83%E6%96%87%E5%8F%8D%E6%B4%BE%E8%BF%98%E5%BE%97%E8%80%81%E7%9A%84%E5%9D%8F%23) `141.2K 🔥` `NEW`
1. [印度网友热议中印火车对比视频](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%BD%91%E5%8F%8B%E7%83%AD%E8%AE%AE%E4%B8%AD%E5%8D%B0%E7%81%AB%E8%BD%A6%E5%AF%B9%E6%AF%94%E8%A7%86%E9%A2%91%23) `139.9K 🔥` `NEW`
1. [医院记录女婴死亡原因为新生儿休克](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E8%AE%B0%E5%BD%95%E5%A5%B3%E5%A9%B4%E6%AD%BB%E4%BA%A1%E5%8E%9F%E5%9B%A0%E4%B8%BA%E6%96%B0%E7%94%9F%E5%84%BF%E4%BC%91%E5%85%8B%23) `136.7K 🔥` `NEW`
1. [陈意礼退出恋综](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%84%8F%E7%A4%BC%E9%80%80%E5%87%BA%E6%81%8B%E7%BB%BC%23) `120.0K 🔥` `NEW`
1. [RNG官推力挺ShowMaker](https://s.weibo.com/weibo?q=%23RNG%E5%AE%98%E6%8E%A8%E5%8A%9B%E6%8C%BAShowMaker%23) `115.6K 🔥` `NEW`
1. [王曼昱孙颖莎女单前二](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A5%B3%E5%8D%95%E5%89%8D%E4%BA%8C%23) `114.7K 🔥` `NEW`
1. [DeepSeek可能后来居上](https://s.weibo.com/weibo?q=%23DeepSeek%E5%8F%AF%E8%83%BD%E5%90%8E%E6%9D%A5%E5%B1%85%E4%B8%8A%23) `114.6K 🔥` `NEW`
1. [鞠婧祎亲签荣耀700](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%BA%B2%E7%AD%BE%E8%8D%A3%E8%80%80700%23) `114.1K 🔥` `NEW`
1. [黄金五连跌后直线拉升](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%BA%94%E8%BF%9E%E8%B7%8C%E5%90%8E%E7%9B%B4%E7%BA%BF%E6%8B%89%E5%8D%87%23) `114.0K 🔥` `NEW`

Updated at 2026-11-23 20:37:26

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
