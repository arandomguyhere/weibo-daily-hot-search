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

1. [哈兰德担任曼城队长 (Haaland becomes Manchester City captain)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%8B%85%E4%BB%BB%E6%9B%BC%E5%9F%8E%E9%98%9F%E9%95%BF%23) `387.2K 🔥` `NEW`
1. [贺峻霖给严浩翔照片加了美颜](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%BB%99%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%85%A7%E7%89%87%E5%8A%A0%E4%BA%86%E7%BE%8E%E9%A2%9C%23) `352.6K 🔥` `NEW`
1. [Alex一雯白分手](https://s.weibo.com/weibo?q=%23Alex%E4%B8%80%E9%9B%AF%E7%99%BD%E5%88%86%E6%89%8B%23) `343.5K 🔥` `NEW`
1. [魏子宸太有杰尼斯味了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A4%AA%E6%9C%89%E6%9D%B0%E5%B0%BC%E6%96%AF%E5%91%B3%E4%BA%86%23) `337.5K 🔥` `NEW`
1. [现在的小学生都进化成这样了吗](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%B0%8F%E5%AD%A6%E7%94%9F%E9%83%BD%E8%BF%9B%E5%8C%96%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `245.0K 🔥` `NEW`
1. [男子买东鹏特饮写2027年生产](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%B0%E4%B8%9C%E9%B9%8F%E7%89%B9%E9%A5%AE%E5%86%992027%E5%B9%B4%E7%94%9F%E4%BA%A7%23) `211.8K 🔥` `NEW`
1. [TF四代day3演唱会造型](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3day3%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%A0%E5%9E%8B%23) `208.4K 🔥` `NEW`
1. [刘耀文雷霆裤子](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E9%9B%B7%E9%9C%86%E8%A3%A4%E5%AD%90%23) `178.2K 🔥` `NEW`
1. [特朗普晒与金正恩昔日合影](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%99%92%E4%B8%8E%E9%87%91%E6%AD%A3%E6%81%A9%E6%98%94%E6%97%A5%E5%90%88%E5%BD%B1%23) `174.9K 🔥` `NEW`
1. [披荆斩棘直播](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `174.3K 🔥` `NEW`
1. [王艺迪vs张本美和 (Wang Yidi vs. Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AAvs%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `907.6K 🔥` `+71%`
1. [我国现代化应急体系建设提速 (The construction of my country's modern emergency response system speeds up)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%8E%B0%E4%BB%A3%E5%8C%96%E5%BA%94%E6%80%A5%E4%BD%93%E7%B3%BB%E5%BB%BA%E8%AE%BE%E6%8F%90%E9%80%9F%23) `720.2K 🔥` `+26%`
1. [市民打12345投诉月光太亮影响睡觉 (Citizens called 12345 to complain that the moonlight was too bright and affected their sleep.)](https://s.weibo.com/weibo?q=%23%E5%B8%82%E6%B0%91%E6%89%9312345%E6%8A%95%E8%AF%89%E6%9C%88%E5%85%89%E5%A4%AA%E4%BA%AE%E5%BD%B1%E5%93%8D%E7%9D%A1%E8%A7%89%23) `718.2K 🔥` `+75%`
1. [请3天假连休13天](https://s.weibo.com/weibo?q=%23%E8%AF%B73%E5%A4%A9%E5%81%87%E8%BF%9E%E4%BC%9113%E5%A4%A9%23) `415.0K 🔥` `+68%`
1. [旺旺 真听劝](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%20%E7%9C%9F%E5%90%AC%E5%8A%9D%23) `379.9K 🔥` `+68%`
1. [沈佳润白到发光](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E7%99%BD%E5%88%B0%E5%8F%91%E5%85%89%23) `375.2K 🔥` `+21%`
1. [七夕第一束花被张凌赫承包了](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E7%AC%AC%E4%B8%80%E6%9D%9F%E8%8A%B1%E8%A2%AB%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%89%BF%E5%8C%85%E4%BA%86%23) `361.8K 🔥` `+68%`
1. [以色列高官极端言论震惊国际社会](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%AB%98%E5%AE%98%E6%9E%81%E7%AB%AF%E8%A8%80%E8%AE%BA%E9%9C%87%E6%83%8A%E5%9B%BD%E9%99%85%E7%A4%BE%E4%BC%9A%23) `349.7K 🔥` `+34%`
1. [马正阳声音侵权声明 (Ma Zhengyang’s voice infringement statement)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%AD%A3%E9%98%B3%E5%A3%B0%E9%9F%B3%E4%BE%B5%E6%9D%83%E5%A3%B0%E6%98%8E%23) `347.5K 🔥` `+33%`
1. [曝谷爱凌LV三公子恋情 (Gu Ailing’s love affair with LV’s third son revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B0%B7%E7%88%B1%E5%87%8CLV%E4%B8%89%E5%85%AC%E5%AD%90%E6%81%8B%E6%83%85%23) `342.9K 🔥` `+32%`
1. [什么东西成年了才意识到很贵 (What do you need to realize as an adult that something is expensive?)](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E4%B8%9C%E8%A5%BF%E6%88%90%E5%B9%B4%E4%BA%86%E6%89%8D%E6%84%8F%E8%AF%86%E5%88%B0%E5%BE%88%E8%B4%B5%23) `339.2K 🔥` `+32%`
1. [虞书欣穿戏服聚会](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%A9%BF%E6%88%8F%E6%9C%8D%E8%81%9A%E4%BC%9A%23) `335.0K 🔥` `+116%`
1. [韩网友点评新疆伊犁草原](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E5%8F%8B%E7%82%B9%E8%AF%84%E6%96%B0%E7%96%86%E4%BC%8A%E7%8A%81%E8%8D%89%E5%8E%9F%23) `333.2K 🔥` `+30%`
1. [云旗演唱会](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E6%BC%94%E5%94%B1%E4%BC%9A%23) `330.5K 🔥` `+30%`
1. [段永平1300亿持仓曝光](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E6%B0%B8%E5%B9%B31300%E4%BA%BF%E6%8C%81%E4%BB%93%E6%9B%9D%E5%85%89%23) `289.2K 🔥` `+64%`
1. [朱镕基同志遗体18日火化 (Comrade Zhu Rongji’s body was cremated on the 18th)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%9318%E6%97%A5%E7%81%AB%E5%8C%96%23) `1.0M 🔥`
1. [网红小家电集体吃灰了 (Internet celebrity small home appliances are collectively in ashes)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%AE%B6%E7%94%B5%E9%9B%86%E4%BD%93%E5%90%83%E7%81%B0%E4%BA%86%23) `638.0K 🔥`
1. [龙餐馆未被采纳的海报 (Dragon Restaurant Unaccepted Poster)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E6%9C%AA%E8%A2%AB%E9%87%87%E7%BA%B3%E7%9A%84%E6%B5%B7%E6%8A%A5%23) `473.3K 🔥`
1. [TMEA节目单 (TMEA program list)](https://s.weibo.com/weibo?q=%23TMEA%E8%8A%82%E7%9B%AE%E5%8D%95%23) `460.5K 🔥`
1. [时代少年团个人能力排名](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%B8%AA%E4%BA%BA%E8%83%BD%E5%8A%9B%E6%8E%92%E5%90%8D%23) `376.8K 🔥`
1. [儿科医生杨国辉去世患儿家属发声](https://s.weibo.com/weibo?q=%23%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E6%9D%A8%E5%9B%BD%E8%BE%89%E5%8E%BB%E4%B8%96%E6%82%A3%E5%84%BF%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `371.5K 🔥`
1. [景德镇做的陶瓷还是太超前了](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%BE%B7%E9%95%87%E5%81%9A%E7%9A%84%E9%99%B6%E7%93%B7%E8%BF%98%E6%98%AF%E5%A4%AA%E8%B6%85%E5%89%8D%E4%BA%86%23) `356.2K 🔥`
1. [王橹杰蓝发](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%93%9D%E5%8F%91%23) `354.4K 🔥`
1. [瑞幸七夕联名 翻车](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E4%B8%83%E5%A4%95%E8%81%94%E5%90%8D%20%E7%BF%BB%E8%BD%A6%23) `351.8K 🔥`
1. [疑似龙餐馆找沈腾演男主的原因 (Suspected to be the reason why Dragon Restaurant hired Shen Teng to play the male lead)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E9%BE%99%E9%A4%90%E9%A6%86%E6%89%BE%E6%B2%88%E8%85%BE%E6%BC%94%E7%94%B7%E4%B8%BB%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `330.9K 🔥`
1. [王橹杰蛇链](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%9B%87%E9%93%BE%23) `285.7K 🔥`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `267.3K 🔥`
1. [秦彻密约](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%BD%BB%E5%AF%86%E7%BA%A6%23) `252.0K 🔥`
1. [贺峻霖叫严浩翔浩翔老弟](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%8F%AB%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%B5%A9%E7%BF%94%E8%80%81%E5%BC%9F%23) `250.9K 🔥`
1. [唐禹哲苏小轩婚纱照 (Tang Yuzhe and Su Xiaoxuan wedding photos)](https://s.weibo.com/weibo?q=%23%E5%94%90%E7%A6%B9%E5%93%B2%E8%8B%8F%E5%B0%8F%E8%BD%A9%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `250.6K 🔥`
1. [817摩饭与宁一起自在畅爽](https://s.weibo.com/weibo?q=%23817%E6%91%A9%E9%A5%AD%E4%B8%8E%E5%AE%81%E4%B8%80%E8%B5%B7%E8%87%AA%E5%9C%A8%E7%95%85%E7%88%BD%23) `241.4K 🔥`
1. [TF四代五公](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%23) `239.9K 🔥`
1. [央视调查幼小衔接超前学 (CCTV investigates transition from primary school to advanced school)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B0%83%E6%9F%A5%E5%B9%BC%E5%B0%8F%E8%A1%94%E6%8E%A5%E8%B6%85%E5%89%8D%E5%AD%A6%23) `238.3K 🔥`
1. [等了好久的妆造是遗照](https://s.weibo.com/weibo?q=%23%E7%AD%89%E4%BA%86%E5%A5%BD%E4%B9%85%E7%9A%84%E5%A6%86%E9%80%A0%E6%98%AF%E9%81%97%E7%85%A7%23) `238.2K 🔥`
1. [TMEA](https://s.weibo.com/weibo?q=%23TMEA%23) `209.0K 🔥`
1. [39岁知名儿科医生不幸去世](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E7%9F%A5%E5%90%8D%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E4%B8%8D%E5%B9%B8%E5%8E%BB%E4%B8%96%23) `185.5K 🔥`
1. [黑粉给白鹿道歉](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%B2%89%E7%BB%99%E7%99%BD%E9%B9%BF%E9%81%93%E6%AD%89%23) `180.9K 🔥`
1. [沪上阿姨 涉不正当竞争](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%20%E6%B6%89%E4%B8%8D%E6%AD%A3%E5%BD%93%E7%AB%9E%E4%BA%89%23) `175.7K 🔥`
1. [Jennie东京音乐节造型](https://s.weibo.com/weibo?q=%23Jennie%E4%B8%9C%E4%BA%AC%E9%9F%B3%E4%B9%90%E8%8A%82%E9%80%A0%E5%9E%8B%23) `166.5K 🔥`
1. [这个班的名字都好听](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E7%8F%AD%E7%9A%84%E5%90%8D%E5%AD%97%E9%83%BD%E5%A5%BD%E5%90%AC%23) `296.1K 🔥` `-25%`

Updated at 2026-08-16 19:37:11

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
