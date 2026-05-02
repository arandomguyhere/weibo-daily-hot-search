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

1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `795.9K 🔥` `NEW`
1. [两男子博流量自导自演伤人戏码被拘](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E7%94%B7%E5%AD%90%E5%8D%9A%E6%B5%81%E9%87%8F%E8%87%AA%E5%AF%BC%E8%87%AA%E6%BC%94%E4%BC%A4%E4%BA%BA%E6%88%8F%E7%A0%81%E8%A2%AB%E6%8B%98%23) `523.3K 🔥` `NEW`
1. [赖清德上演偷渡式外窜闹剧](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E4%B8%8A%E6%BC%94%E5%81%B7%E6%B8%A1%E5%BC%8F%E5%A4%96%E7%AA%9C%E9%97%B9%E5%89%A7%23) `522.6K 🔥` `NEW`
1. [王楚钦vs沃克](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%B2%83%E5%85%8B%23) `519.8K 🔥` `NEW`
1. [景区装电梯无痛爬山被质疑过度开发](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%8C%BA%E8%A3%85%E7%94%B5%E6%A2%AF%E6%97%A0%E7%97%9B%E7%88%AC%E5%B1%B1%E8%A2%AB%E8%B4%A8%E7%96%91%E8%BF%87%E5%BA%A6%E5%BC%80%E5%8F%91%23) `514.4K 🔥` `NEW`
1. [曹骏工作室否认拉踩](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%90%A6%E8%AE%A4%E6%8B%89%E8%B8%A9%23) `480.2K 🔥` `NEW`
1. [刘宇宁请客张凌赫归鸾剧组](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B7%E5%AE%A2%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BD%92%E9%B8%BE%E5%89%A7%E7%BB%84%23) `340.6K 🔥` `NEW`
1. [商务部发布禁令](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%8A%A1%E9%83%A8%E5%8F%91%E5%B8%83%E7%A6%81%E4%BB%A4%23) `160.2K 🔥` `NEW`
1. [侯明昊唱歌](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%94%B1%E6%AD%8C%23) `145.1K 🔥` `NEW`
1. [TTG挑杯淘汰](https://s.weibo.com/weibo?q=%23TTG%E6%8C%91%E6%9D%AF%E6%B7%98%E6%B1%B0%23) `142.3K 🔥` `NEW`
1. [地铁大爷强行拖拽女子让座 (Subway man forcibly drags woman to give up her seat)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%A4%A7%E7%88%B7%E5%BC%BA%E8%A1%8C%E6%8B%96%E6%8B%BD%E5%A5%B3%E5%AD%90%E8%AE%A9%E5%BA%A7%23) `132.5K 🔥` `NEW`
1. [国乒女团3比0罗马尼亚](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A23%E6%AF%940%E7%BD%97%E9%A9%AC%E5%B0%BC%E4%BA%9A%23) `129.9K 🔥` `NEW`
1. [演员被打中血流不止仍坚持演完](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E8%A2%AB%E6%89%93%E4%B8%AD%E8%A1%80%E6%B5%81%E4%B8%8D%E6%AD%A2%E4%BB%8D%E5%9D%9A%E6%8C%81%E6%BC%94%E5%AE%8C%23) `110.4K 🔥` `NEW`
1. [美国人正在逃离美国](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BA%BA%E6%AD%A3%E5%9C%A8%E9%80%83%E7%A6%BB%E7%BE%8E%E5%9B%BD%23) `109.1K 🔥` `NEW`
1. [日本地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%23) `1.1M 🔥` `+27%`
1. [张婧仪方要求你好星期六道歉 (Zhang Jingyi asked Hello Saturday to apologize)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%96%B9%E8%A6%81%E6%B1%82%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E9%81%93%E6%AD%89%23) `643.6K 🔥` `+274%`
1. [原来这就是情感漠视吗 (So is this emotional indifference?)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E6%83%85%E6%84%9F%E6%BC%A0%E8%A7%86%E5%90%97%23) `523.7K 🔥` `+29%`
1. [严浩翔演唱会状态](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8A%B6%E6%80%81%23) `523.5K 🔥` `+275%`
1. [孙颖莎这一球夯爆了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%BF%99%E4%B8%80%E7%90%83%E5%A4%AF%E7%88%86%E4%BA%86%23) `521.5K 🔥` `+192%`
1. [葛仙村度假区致歉 (Gexian Village Resort apologizes)](https://s.weibo.com/weibo?q=%23%E8%91%9B%E4%BB%99%E6%9D%91%E5%BA%A6%E5%81%87%E5%8C%BA%E8%87%B4%E6%AD%89%23) `521.2K 🔥` `+57%`
1. [周也方要求hi6回应](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E6%96%B9%E8%A6%81%E6%B1%82hi6%E5%9B%9E%E5%BA%94%23) `518.7K 🔥` `+191%`
1. [时代少年团 男团学](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E7%94%B7%E5%9B%A2%E5%AD%A6%23) `518.5K 🔥` `+206%`
1. [张婧仪将暂停配合宣传你好星期六](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%B0%86%E6%9A%82%E5%81%9C%E9%85%8D%E5%90%88%E5%AE%A3%E4%BC%A0%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `516.5K 🔥` `+232%`
1. [虞书欣 种地吧 (Yu Shuxin Farming)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `515.5K 🔥` `+206%`
1. [基础款Macmini停售](https://s.weibo.com/weibo?q=%23%E5%9F%BA%E7%A1%80%E6%AC%BEMacmini%E5%81%9C%E5%94%AE%23) `514.6K 🔥` `+216%`
1. [严浩翔每年都会往宿舍搬几箱橙子](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%AF%8F%E5%B9%B4%E9%83%BD%E4%BC%9A%E5%BE%80%E5%AE%BF%E8%88%8D%E6%90%AC%E5%87%A0%E7%AE%B1%E6%A9%99%E5%AD%90%23) `512.6K 🔥` `+193%`
1. [三亚偶遇赵又廷高圆圆牵手散步 (Sanya met Zhao Youting and Gao Yuanyuan for a walk hand in hand)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E5%81%B6%E9%81%87%E8%B5%B5%E5%8F%88%E5%BB%B7%E9%AB%98%E5%9C%86%E5%9C%86%E7%89%B5%E6%89%8B%E6%95%A3%E6%AD%A5%23) `511.0K 🔥` `+259%`
1. [张元英救了霸王茶姬](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E6%95%91%E4%BA%86%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%23) `510.4K 🔥` `+237%`
1. [西瓜摊老板戴手套用牙签挑瓜籽](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%93%9C%E6%91%8A%E8%80%81%E6%9D%BF%E6%88%B4%E6%89%8B%E5%A5%97%E7%94%A8%E7%89%99%E7%AD%BE%E6%8C%91%E7%93%9C%E7%B1%BD%23) `493.8K 🔥` `+233%`
1. [跑男新群名是白鹿改的](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%96%B0%E7%BE%A4%E5%90%8D%E6%98%AF%E7%99%BD%E9%B9%BF%E6%94%B9%E7%9A%84%23) `457.2K 🔥` `+188%`
1. [北京彩虹](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%BD%A9%E8%99%B9%23) `416.2K 🔥` `+140%`
1. [张桂源头像](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E5%A4%B4%E5%83%8F%23) `397.1K 🔥` `+141%`
1. [五一假期真是捅人窝了吧](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F%E7%9C%9F%E6%98%AF%E6%8D%85%E4%BA%BA%E7%AA%9D%E4%BA%86%E5%90%A7%23) `310.1K 🔥` `+140%`
1. [美国警告立陶宛](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%AD%A6%E5%91%8A%E7%AB%8B%E9%99%B6%E5%AE%9B%23) `306.1K 🔥` `+123%`
1. [严军发了一家四口照 (Yan Jun posted a photo of his family of four)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%86%9B%E5%8F%91%E4%BA%86%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E7%85%A7%23) `303.3K 🔥` `+122%`
1. [时代少年团演唱会 (Times Youth League Concert)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%23) `283.6K 🔥` `+106%`
1. [三个10岁救了一个2岁](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%AA10%E5%B2%81%E6%95%91%E4%BA%86%E4%B8%80%E4%B8%AA2%E5%B2%81%23) `160.4K 🔥` `+22%`
1. [5月1日铁路发送旅客量创历史新高 (Railway passenger volume hit record high on May 1)](https://s.weibo.com/weibo?q=%235%E6%9C%881%E6%97%A5%E9%93%81%E8%B7%AF%E5%8F%91%E9%80%81%E6%97%85%E5%AE%A2%E9%87%8F%E5%88%9B%E5%8E%86%E5%8F%B2%E6%96%B0%E9%AB%98%23) `653.7K 🔥`
1. [新SU7卡布里蓝带你慢游五一](https://s.weibo.com/weibo?q=%23%E6%96%B0SU7%E5%8D%A1%E5%B8%83%E9%87%8C%E8%93%9D%E5%B8%A6%E4%BD%A0%E6%85%A2%E6%B8%B8%E4%BA%94%E4%B8%80%23) `645.2K 🔥`
1. [猫妈妈觅食回来天都塌了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%A6%88%E5%A6%88%E8%A7%85%E9%A3%9F%E5%9B%9E%E6%9D%A5%E5%A4%A9%E9%83%BD%E5%A1%8C%E4%BA%86%23) `193.8K 🔥`
1. [河南灵宝火灾致6人死亡](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E7%81%B5%E5%AE%9D%E7%81%AB%E7%81%BE%E8%87%B46%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `142.5K 🔥`
1. [何炅回应王鹤棣情绪失控 (He Jiong responded to Wang Hedi losing control of his emotions)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E5%9B%9E%E5%BA%94%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `142.3K 🔥`
1. [韩国艺人偷税漏税追缴款Top5 (Top 5 tax recovery fees for Korean artists)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%89%BA%E4%BA%BA%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%E8%BF%BD%E7%BC%B4%E6%AC%BETop5%23) `141.5K 🔥`
1. [高会直播](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BC%9A%E7%9B%B4%E6%92%AD%23) `128.4K 🔥`
1. [樊振东五一假期belike](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9Fbelike%23) `115.9K 🔥`
1. [鹿晗没带馒头参加五哈的原因](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%B2%A1%E5%B8%A6%E9%A6%92%E5%A4%B4%E5%8F%82%E5%8A%A0%E4%BA%94%E5%93%88%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `109.4K 🔥`
1. [时隔五年我用AI复活了父亲 (After five years, I used AI to resurrect my father)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E9%9A%94%E4%BA%94%E5%B9%B4%E6%88%91%E7%94%A8AI%E5%A4%8D%E6%B4%BB%E4%BA%86%E7%88%B6%E4%BA%B2%23) `108.8K 🔥`
1. [世界杯转播权再现中国式僵局 (China-style deadlock reappears over World Cup broadcast rights)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%E5%86%8D%E7%8E%B0%E4%B8%AD%E5%9B%BD%E5%BC%8F%E5%83%B5%E5%B1%80%23) `517.9K 🔥` `-56%`
1. [河南蒜薹 滞销 (Henan garlic sprouts unsaleable)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%92%9C%E8%96%B9%20%E6%BB%9E%E9%94%80%23) `512.9K 🔥` `-21%`
1. [ai情头](https://s.weibo.com/weibo?q=%23ai%E6%83%85%E5%A4%B4%23) `511.7K 🔥` `-21%`
1. [共情能力强 情感漠视](https://s.weibo.com/weibo?q=%23%E5%85%B1%E6%83%85%E8%83%BD%E5%8A%9B%E5%BC%BA%20%E6%83%85%E6%84%9F%E6%BC%A0%E8%A7%86%23) `305.3K 🔥` `-37%`
1. [孙颖莎国乒首秀出任一单 (Sun Yingsha makes her national table tennis debut)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%BD%E4%B9%92%E9%A6%96%E7%A7%80%E5%87%BA%E4%BB%BB%E4%B8%80%E5%8D%95%23) `160.7K 🔥` `-58%`

Updated at 2026-05-02 20:08:23

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
