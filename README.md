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

1. [国乒男团晋级16强 (National table tennis men's team advances to top 16)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E6%99%8B%E7%BA%A716%E5%BC%BA%23) `642.1K 🔥` `NEW`
1. [谢娜演唱会](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%23) `441.7K 🔥` `NEW`
1. [将成立国务院浏阳烟花爆炸事故调查组](https://s.weibo.com/weibo?q=%23%E5%B0%86%E6%88%90%E7%AB%8B%E5%9B%BD%E5%8A%A1%E9%99%A2%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E7%88%86%E7%82%B8%E4%BA%8B%E6%95%85%E8%B0%83%E6%9F%A5%E7%BB%84%23) `402.6K 🔥` `NEW`
1. [赖冠霖纹了WANNAONE出道日](https://s.weibo.com/weibo?q=%23%E8%B5%96%E5%86%A0%E9%9C%96%E7%BA%B9%E4%BA%86WANNAONE%E5%87%BA%E9%81%93%E6%97%A5%23) `378.4K 🔥` `NEW`
1. [宁夏一景区凭零彩礼证书免门票](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%A4%8F%E4%B8%80%E6%99%AF%E5%8C%BA%E5%87%AD%E9%9B%B6%E5%BD%A9%E7%A4%BC%E8%AF%81%E4%B9%A6%E5%85%8D%E9%97%A8%E7%A5%A8%23) `372.0K 🔥` `NEW`
1. [时代少年团演唱会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%23) `369.9K 🔥` `NEW`
1. [父母平分6套房产差12平米儿媳翻脸](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%B9%B3%E5%88%866%E5%A5%97%E6%88%BF%E4%BA%A7%E5%B7%AE12%E5%B9%B3%E7%B1%B3%E5%84%BF%E5%AA%B3%E7%BF%BB%E8%84%B8%23) `349.9K 🔥` `NEW`
1. [小长假让我断了裸辞的念头](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%95%BF%E5%81%87%E8%AE%A9%E6%88%91%E6%96%AD%E4%BA%86%E8%A3%B8%E8%BE%9E%E7%9A%84%E5%BF%B5%E5%A4%B4%23) `307.1K 🔥` `NEW`
1. [妻子的浪漫旅行 变味](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%9A%84%E6%B5%AA%E6%BC%AB%E6%97%85%E8%A1%8C%20%E5%8F%98%E5%91%B3%23) `239.8K 🔥` `NEW`
1. [呵呵陪白鹿录制跑男](https://s.weibo.com/weibo?q=%23%E5%91%B5%E5%91%B5%E9%99%AA%E7%99%BD%E9%B9%BF%E5%BD%95%E5%88%B6%E8%B7%91%E7%94%B7%23) `238.9K 🔥` `NEW`
1. [河南人每天就过这样的好日子 (Henan people live such a good life every day)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%BA%BA%E6%AF%8F%E5%A4%A9%E5%B0%B1%E8%BF%87%E8%BF%99%E6%A0%B7%E7%9A%84%E5%A5%BD%E6%97%A5%E5%AD%90%23) `233.4K 🔥` `NEW`
1. [雾里青路透](https://s.weibo.com/weibo?q=%23%E9%9B%BE%E9%87%8C%E9%9D%92%E8%B7%AF%E9%80%8F%23) `206.5K 🔥` `NEW`
1. [吴宜泽奖金实际到手约26.5万镑](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%A5%96%E9%87%91%E5%AE%9E%E9%99%85%E5%88%B0%E6%89%8B%E7%BA%A626.5%E4%B8%87%E9%95%91%23) `196.7K 🔥` `NEW`
1. [全网催王濛给刘雨昕交作业](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E5%82%AC%E7%8E%8B%E6%BF%9B%E7%BB%99%E5%88%98%E9%9B%A8%E6%98%95%E4%BA%A4%E4%BD%9C%E4%B8%9A%23) `195.5K 🔥` `NEW`
1. [你好星期六 张婧仪周也](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%20%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%91%A8%E4%B9%9F%23) `189.9K 🔥` `NEW`
1. [伊朗外交部长访华](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E4%BA%A4%E9%83%A8%E9%95%BF%E8%AE%BF%E5%8D%8E%23) `187.6K 🔥` `NEW`
1. [来自王楚钦的凝视](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E8%87%AA%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%9A%84%E5%87%9D%E8%A7%86%23) `178.9K 🔥` `NEW`
1. [郑钦文vs邦达尔](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E9%82%A6%E8%BE%BE%E5%B0%94%23) `174.0K 🔥` `NEW`
1. [严浩翔贺峻霖直播好卡](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%9B%B4%E6%92%AD%E5%A5%BD%E5%8D%A1%23) `162.8K 🔥` `NEW`
1. [高市早苗在澳大利亚下跪献花](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%9C%A8%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E4%B8%8B%E8%B7%AA%E7%8C%AE%E8%8A%B1%23) `888.5K 🔥` `+27%`
1. [马龙许昕刘诗雯现场观战国乒 (Ma Long, Xu Xin and Liu Shiwen watched the national table tennis match live)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E5%88%98%E8%AF%97%E9%9B%AF%E7%8E%B0%E5%9C%BA%E8%A7%82%E6%88%98%E5%9B%BD%E4%B9%92%23) `783.9K 🔥` `+161%`
1. [鸿蒙智行回应副驾折叠争议](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E5%9B%9E%E5%BA%94%E5%89%AF%E9%A9%BE%E6%8A%98%E5%8F%A0%E4%BA%89%E8%AE%AE%23) `449.3K 🔥` `+29%`
1. [第一次见爸爸和女儿不熟的](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E7%88%B8%E7%88%B8%E5%92%8C%E5%A5%B3%E5%84%BF%E4%B8%8D%E7%86%9F%E7%9A%84%23) `408.4K 🔥` `+38%`
1. [张月急性肠胃炎](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%80%A5%E6%80%A7%E8%82%A0%E8%83%83%E7%82%8E%23) `369.8K 🔥` `+31%`
1. [浏阳烟花厂爆炸致26死61伤 (Explosion at Liuyang Fireworks Factory kills 26 and injures 61)](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E8%87%B426%E6%AD%BB61%E4%BC%A4%23) `617.8K 🔥`
1. [歌手2026首发阵容新版本](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E9%A6%96%E5%8F%91%E9%98%B5%E5%AE%B9%E6%96%B0%E7%89%88%E6%9C%AC%23) `615.5K 🔥`
1. [机场提示禁止携带越王勾践剑登机 (Airport prompts that it is prohibited to carry Yue Wang Goujian Sword on board the plane)](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%9C%BA%E6%8F%90%E7%A4%BA%E7%A6%81%E6%AD%A2%E6%90%BA%E5%B8%A6%E8%B6%8A%E7%8E%8B%E5%8B%BE%E8%B7%B5%E5%89%91%E7%99%BB%E6%9C%BA%23) `377.8K 🔥`
1. [路人上海偶遇angelababy小海绵](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E4%B8%8A%E6%B5%B7%E5%81%B6%E9%81%87angelababy%E5%B0%8F%E6%B5%B7%E7%BB%B5%23) `371.1K 🔥`
1. [宋雨琦 跑男](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E8%B7%91%E7%94%B7%23) `370.6K 🔥`
1. [除非白鹿不想录了](https://s.weibo.com/weibo?q=%23%E9%99%A4%E9%9D%9E%E7%99%BD%E9%B9%BF%E4%B8%8D%E6%83%B3%E5%BD%95%E4%BA%86%23) `332.6K 🔥`
1. [有多少城市能撑起来七日游](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%A4%9A%E5%B0%91%E5%9F%8E%E5%B8%82%E8%83%BD%E6%92%91%E8%B5%B7%E6%9D%A5%E4%B8%83%E6%97%A5%E6%B8%B8%23) `312.9K 🔥`
1. [赛力斯跌超6%](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF%E8%B7%8C%E8%B6%856%25%23) `307.5K 🔥`
1. [浏阳烟花厂爆炸前后对比 (Comparison before and after the explosion at Liuyang Fireworks Factory)](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E5%89%8D%E5%90%8E%E5%AF%B9%E6%AF%94%23) `304.7K 🔥`
1. [金俊勉发了吴世勋十年前的照片](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BF%8A%E5%8B%89%E5%8F%91%E4%BA%86%E5%90%B4%E4%B8%96%E5%8B%8B%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E7%85%A7%E7%89%87%23) `225.9K 🔥`
1. [世乒赛男团澳大利亚变阵 (World Table Tennis Championships men’s team Australia changes formation)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B9%92%E8%B5%9B%E7%94%B7%E5%9B%A2%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E5%8F%98%E9%98%B5%23) `1.2M 🔥` `-26%`
1. [广交会彰显中国制造硬核实力](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E5%BD%B0%E6%98%BE%E4%B8%AD%E5%9B%BD%E5%88%B6%E9%80%A0%E7%A1%AC%E6%A0%B8%E5%AE%9E%E5%8A%9B%23) `810.6K 🔥` `-40%`
1. [奔跑吧打假](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E6%89%93%E5%81%87%23) `624.8K 🔥` `-64%`
1. [长沙市委市政府致歉 (Changsha Municipal Party Committee and Government apologized)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%B8%82%E5%A7%94%E5%B8%82%E6%94%BF%E5%BA%9C%E8%87%B4%E6%AD%89%23) `603.3K 🔥` `-26%`
1. [你好星期六没有给张婧仪道歉](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E6%B2%A1%E6%9C%89%E7%BB%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E9%81%93%E6%AD%89%23) `434.6K 🔥` `-66%`
1. [以为低糖低油其实长肉的食物](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E4%BD%8E%E7%B3%96%E4%BD%8E%E6%B2%B9%E5%85%B6%E5%AE%9E%E9%95%BF%E8%82%89%E7%9A%84%E9%A3%9F%E7%89%A9%23) `430.0K 🔥` `-40%`
1. [跟林依晨分手后前男友因性侵入狱 (Ex-boyfriend jailed for sexual assault after breaking up with Ariel Ariel)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E6%9E%97%E4%BE%9D%E6%99%A8%E5%88%86%E6%89%8B%E5%90%8E%E5%89%8D%E7%94%B7%E5%8F%8B%E5%9B%A0%E6%80%A7%E4%BE%B5%E5%85%A5%E7%8B%B1%23) `421.7K 🔥` `-33%`
1. [大哥谢娜 二弟赵丽颖](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%93%A5%E8%B0%A2%E5%A8%9C%20%E4%BA%8C%E5%BC%9F%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `390.1K 🔥` `-71%`
1. [小猫还原自己摔伤过程](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%BF%98%E5%8E%9F%E8%87%AA%E5%B7%B1%E6%91%94%E4%BC%A4%E8%BF%87%E7%A8%8B%23) `369.9K 🔥` `-72%`
1. [时代少年团直播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%92%AD%23) `310.8K 🔥` `-55%`
1. [女子怀孕胎死宫内6周后才发现](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E8%83%8E%E6%AD%BB%E5%AE%AB%E5%86%856%E5%91%A8%E5%90%8E%E6%89%8D%E5%8F%91%E7%8E%B0%23) `242.0K 🔥` `-64%`
1. [林依晨 郑家尧 (Lin Yichen Zheng Jiayao)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%20%E9%83%91%E5%AE%B6%E5%B0%A7%23) `232.1K 🔥` `-26%`
1. [一个人旅游上厕所时行李怎么办](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%97%85%E6%B8%B8%E4%B8%8A%E5%8E%95%E6%89%80%E6%97%B6%E8%A1%8C%E6%9D%8E%E6%80%8E%E4%B9%88%E5%8A%9E%23) `219.1K 🔥` `-30%`
1. [男子单手抱婴儿致重摔头着地](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%95%E6%89%8B%E6%8A%B1%E5%A9%B4%E5%84%BF%E8%87%B4%E9%87%8D%E6%91%94%E5%A4%B4%E7%9D%80%E5%9C%B0%23) `190.3K 🔥` `-34%`
1. [国内一年仅卖2763万台彩电](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E4%B8%80%E5%B9%B4%E4%BB%85%E5%8D%962763%E4%B8%87%E5%8F%B0%E5%BD%A9%E7%94%B5%23) `185.7K 🔥` `-42%`
1. [大连现全李酒店与全季差一撇](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E7%8E%B0%E5%85%A8%E6%9D%8E%E9%85%92%E5%BA%97%E4%B8%8E%E5%85%A8%E5%AD%A3%E5%B7%AE%E4%B8%80%E6%92%87%23) `170.7K 🔥` `-38%`

Updated at 2026-05-05 19:43:24

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
