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

1. [雷军说输给特斯拉不丢人 (Lei Jun says it’s not shameful to lose to Tesla)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E8%BE%93%E7%BB%99%E7%89%B9%E6%96%AF%E6%8B%89%E4%B8%8D%E4%B8%A2%E4%BA%BA%23) `299.0K 🔥` `NEW`
1. [小米YU7GT价格](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%E4%BB%B7%E6%A0%BC%23) `265.8K 🔥` `NEW`
1. [我国建成规模最大水利基础设施体系](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%BB%BA%E6%88%90%E8%A7%84%E6%A8%A1%E6%9C%80%E5%A4%A7%E6%B0%B4%E5%88%A9%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD%E4%BD%93%E7%B3%BB%23) `247.6K 🔥` `NEW`
1. [张豆豆情绪稳定后又被孙杨说哭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E6%83%85%E7%BB%AA%E7%A8%B3%E5%AE%9A%E5%90%8E%E5%8F%88%E8%A2%AB%E5%AD%99%E6%9D%A8%E8%AF%B4%E5%93%AD%E4%BA%86%23) `247.5K 🔥` `NEW`
1. [颜颜 凯凯](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E9%A2%9C%20%E5%87%AF%E5%87%AF%23) `188.5K 🔥` `NEW`
1. [不小心把DeepSeek叫成豆包](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%B0%8F%E5%BF%83%E6%8A%8ADeepSeek%E5%8F%AB%E6%88%90%E8%B1%86%E5%8C%85%23) `176.2K 🔥` `NEW`
1. [豆包炒股建议](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%82%92%E8%82%A1%E5%BB%BA%E8%AE%AE%23) `175.6K 🔥` `NEW`
1. [给阿嬷的情书亚洲年度最佳艺术电影](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E4%BA%9A%E6%B4%B2%E5%B9%B4%E5%BA%A6%E6%9C%80%E4%BD%B3%E8%89%BA%E6%9C%AF%E7%94%B5%E5%BD%B1%23) `170.4K 🔥` `NEW`
1. [小米耳夹式耳机849元](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%80%B3%E5%A4%B9%E5%BC%8F%E8%80%B3%E6%9C%BA849%E5%85%83%23) `168.8K 🔥` `NEW`
1. [洛克王国世界](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E4%B8%96%E7%95%8C%23) `165.8K 🔥` `NEW`
1. [母亲阳台烧香起火致2子女身亡 (Mother burns incense on balcony and catches fire, killing 2 children)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E9%98%B3%E5%8F%B0%E7%83%A7%E9%A6%99%E8%B5%B7%E7%81%AB%E8%87%B42%E5%AD%90%E5%A5%B3%E8%BA%AB%E4%BA%A1%23) `161.1K 🔥` `NEW`
1. [洛克王国 暗改](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%20%E6%9A%97%E6%94%B9%23) `158.8K 🔥` `NEW`
1. [王菲别唱了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%88%AB%E5%94%B1%E4%BA%86%23) `158.8K 🔥` `NEW`
1. [官方通报税务局职工上班玩手游](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E7%A8%8E%E5%8A%A1%E5%B1%80%E8%81%8C%E5%B7%A5%E4%B8%8A%E7%8F%AD%E7%8E%A9%E6%89%8B%E6%B8%B8%23) `158.7K 🔥` `NEW`
1. [护工拍打刚满月婴儿致其脑出血](https://s.weibo.com/weibo?q=%23%E6%8A%A4%E5%B7%A5%E6%8B%8D%E6%89%93%E5%88%9A%E6%BB%A1%E6%9C%88%E5%A9%B4%E5%84%BF%E8%87%B4%E5%85%B6%E8%84%91%E5%87%BA%E8%A1%80%23) `158.7K 🔥` `NEW`
1. [Viper手部伤情加重](https://s.weibo.com/weibo?q=%23Viper%E6%89%8B%E9%83%A8%E4%BC%A4%E6%83%85%E5%8A%A0%E9%87%8D%23) `158.6K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `158.5K 🔥` `NEW`
1. [弟弟谎报身份致哥哥成吸毒人员](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E8%B0%8E%E6%8A%A5%E8%BA%AB%E4%BB%BD%E8%87%B4%E5%93%A5%E5%93%A5%E6%88%90%E5%90%B8%E6%AF%92%E4%BA%BA%E5%91%98%23) `158.5K 🔥` `NEW`
1. [crocs实体店被曝售假](https://s.weibo.com/weibo?q=%23crocs%E5%AE%9E%E4%BD%93%E5%BA%97%E8%A2%AB%E6%9B%9D%E5%94%AE%E5%81%87%23) `158.4K 🔥` `NEW`
1. [歌手歌单](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%AD%8C%E5%8D%95%23) `158.3K 🔥` `NEW`
1. [父母弄散儿子拼3天积木感觉天塌了 (Parents broke up their son's building blocks and felt like the sky was falling after three days of building blocks.)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%BC%84%E6%95%A3%E5%84%BF%E5%AD%90%E6%8B%BC3%E5%A4%A9%E7%A7%AF%E6%9C%A8%E6%84%9F%E8%A7%89%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `158.3K 🔥` `NEW`
1. [孙杨当众让张豆豆给他道歉](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BD%93%E4%BC%97%E8%AE%A9%E5%BC%A0%E8%B1%86%E8%B1%86%E7%BB%99%E4%BB%96%E9%81%93%E6%AD%89%23) `158.2K 🔥` `NEW`
1. [得闲谨制横扫](https://s.weibo.com/weibo?q=%23%E5%BE%97%E9%97%B2%E8%B0%A8%E5%88%B6%E6%A8%AA%E6%89%AB%23) `158.1K 🔥` `NEW`
1. [小米YU7首战ModelY八败两胜](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7%E9%A6%96%E6%88%98ModelY%E5%85%AB%E8%B4%A5%E4%B8%A4%E8%83%9C%23) `158.1K 🔥` `NEW`
1. [庾澄庆问窦靖童怎么称呼](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E9%97%AE%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%80%8E%E4%B9%88%E7%A7%B0%E5%91%BC%23) `158.0K 🔥` `NEW`
1. [郑丽文怒骂赖清德30分钟](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E6%80%92%E9%AA%82%E8%B5%96%E6%B8%85%E5%BE%B730%E5%88%86%E9%92%9F%23) `157.9K 🔥` `NEW`
1. [泰国豪门接班人被亲弟指控性侵](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E8%B1%AA%E9%97%A8%E6%8E%A5%E7%8F%AD%E4%BA%BA%E8%A2%AB%E4%BA%B2%E5%BC%9F%E6%8C%87%E6%8E%A7%E6%80%A7%E4%BE%B5%23) `157.9K 🔥` `NEW`
1. [老人不买天价鹿茸被一脚踹翻](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%B8%8D%E4%B9%B0%E5%A4%A9%E4%BB%B7%E9%B9%BF%E8%8C%B8%E8%A2%AB%E4%B8%80%E8%84%9A%E8%B8%B9%E7%BF%BB%23) `157.8K 🔥` `NEW`
1. [小米YU7GT](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%23) `157.8K 🔥` `NEW`
1. [A股突然下跌原因找到了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%AA%81%E7%84%B6%E4%B8%8B%E8%B7%8C%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `157.7K 🔥` `NEW`
1. [归期 转会 (Return date transfer)](https://s.weibo.com/weibo?q=%23%E5%BD%92%E6%9C%9F%20%E8%BD%AC%E4%BC%9A%23) `157.6K 🔥` `NEW`
1. [LV纽约大秀](https://s.weibo.com/weibo?q=%23LV%E7%BA%BD%E7%BA%A6%E5%A4%A7%E7%A7%80%23) `157.6K 🔥` `NEW`
1. [夫妻二胎流3次丈夫认为自己没问题](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E4%BA%8C%E8%83%8E%E6%B5%813%E6%AC%A1%E4%B8%88%E5%A4%AB%E8%AE%A4%E4%B8%BA%E8%87%AA%E5%B7%B1%E6%B2%A1%E9%97%AE%E9%A2%98%23) `157.5K 🔥` `NEW`
1. [寿司郎为什么洗不干净盘子](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B4%97%E4%B8%8D%E5%B9%B2%E5%87%80%E7%9B%98%E5%AD%90%23) `157.5K 🔥` `NEW`
1. [小米YU7新增入门版](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7%E6%96%B0%E5%A2%9E%E5%85%A5%E9%97%A8%E7%89%88%23) `157.5K 🔥` `NEW`
1. [史上最大IPO就要来了](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7IPO%E5%B0%B1%E8%A6%81%E6%9D%A5%E4%BA%86%23) `157.4K 🔥` `NEW`
1. [婴幼儿湿巾检出锑为何不公布品牌](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%B9%BC%E5%84%BF%E6%B9%BF%E5%B7%BE%E6%A3%80%E5%87%BA%E9%94%91%E4%B8%BA%E4%BD%95%E4%B8%8D%E5%85%AC%E5%B8%83%E5%93%81%E7%89%8C%23) `157.3K 🔥` `NEW`
1. [暗恋同事的有福了](https://s.weibo.com/weibo?q=%23%E6%9A%97%E6%81%8B%E5%90%8C%E4%BA%8B%E7%9A%84%E6%9C%89%E7%A6%8F%E4%BA%86%23) `157.3K 🔥` `NEW`
1. [26年买小米还是买特斯拉](https://s.weibo.com/weibo?q=%2326%E5%B9%B4%E4%B9%B0%E5%B0%8F%E7%B1%B3%E8%BF%98%E6%98%AF%E4%B9%B0%E7%89%B9%E6%96%AF%E6%8B%89%23) `157.2K 🔥` `NEW`
1. [发朋友圈辱骂邻居孩子被判赔7000元](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%BE%B1%E9%AA%82%E9%82%BB%E5%B1%85%E5%AD%A9%E5%AD%90%E8%A2%AB%E5%88%A4%E8%B5%947000%E5%85%83%23) `157.1K 🔥` `NEW`
1. [颜颜 体面 (Yan Yan decent)](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E9%A2%9C%20%E4%BD%93%E9%9D%A2%23) `157.1K 🔥` `NEW`
1. [张帅vs纳瓦罗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B8%85vs%E7%BA%B3%E7%93%A6%E7%BD%97%23) `157.0K 🔥` `NEW`
1. [詹姆斯点赞重返骑士动态](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E7%82%B9%E8%B5%9E%E9%87%8D%E8%BF%94%E9%AA%91%E5%A3%AB%E5%8A%A8%E6%80%81%23) `157.0K 🔥` `NEW`
1. [时代少年团幻影游船主题曲](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B9%BB%E5%BD%B1%E6%B8%B8%E8%88%B9%E4%B8%BB%E9%A2%98%E6%9B%B2%23) `156.9K 🔥` `NEW`
1. [德国队公布世界杯名单](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E9%98%9F%E5%85%AC%E5%B8%83%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%8D%E5%8D%95%23) `156.8K 🔥` `NEW`
1. [袁隆平吴孟超逝世5年了](https://s.weibo.com/weibo?q=%23%E8%A2%81%E9%9A%86%E5%B9%B3%E5%90%B4%E5%AD%9F%E8%B6%85%E9%80%9D%E4%B8%965%E5%B9%B4%E4%BA%86%23) `156.8K 🔥` `NEW`
1. [小米YU7GT再破纽北圈速纪录](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%E5%86%8D%E7%A0%B4%E7%BA%BD%E5%8C%97%E5%9C%88%E9%80%9F%E7%BA%AA%E5%BD%95%23) `156.8K 🔥` `NEW`
1. [BBK ZSMJ](https://s.weibo.com/weibo?q=%23BBK%20ZSMJ%23) `156.7K 🔥` `NEW`

Updated at 2026-05-22 02:00:33

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
