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

1. [春假撞怀清明春日消费火力全开 (Spring break makes me pregnant during Qingming Festival, and spring consumption is on full swing)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%81%87%E6%92%9E%E6%80%80%E6%B8%85%E6%98%8E%E6%98%A5%E6%97%A5%E6%B6%88%E8%B4%B9%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80%23) `641.3K 🔥` `NEW`
1. [宇文玥捞上来了](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%96%87%E7%8E%A5%E6%8D%9E%E4%B8%8A%E6%9D%A5%E4%BA%86%23) `548.8K 🔥` `NEW`
1. [伊朗向全体人民祝贺胜利](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%91%E5%85%A8%E4%BD%93%E4%BA%BA%E6%B0%91%E7%A5%9D%E8%B4%BA%E8%83%9C%E5%88%A9%23) `469.4K 🔥` `NEW`
1. [黄杨钿甜新剧开播前发千字文](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%9D%A8%E9%92%BF%E7%94%9C%E6%96%B0%E5%89%A7%E5%BC%80%E6%92%AD%E5%89%8D%E5%8F%91%E5%8D%83%E5%AD%97%E6%96%87%23) `436.4K 🔥` `NEW`
1. [美军大批F35将入驻日本三泽基地](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%A4%A7%E6%89%B9F35%E5%B0%86%E5%85%A5%E9%A9%BB%E6%97%A5%E6%9C%AC%E4%B8%89%E6%B3%BD%E5%9F%BA%E5%9C%B0%23) `195.6K 🔥` `NEW`
1. [浪姐史上最难听的小考](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%9A%BE%E5%90%AC%E7%9A%84%E5%B0%8F%E8%80%83%23) `164.8K 🔥` `NEW`
1. [孙怡高情商](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%AB%98%E6%83%85%E5%95%86%23) `164.7K 🔥` `NEW`
1. [医院回应太平间招搬尸工要笔试面试](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E5%A4%AA%E5%B9%B3%E9%97%B4%E6%8B%9B%E6%90%AC%E5%B0%B8%E5%B7%A5%E8%A6%81%E7%AC%94%E8%AF%95%E9%9D%A2%E8%AF%95%23) `164.6K 🔥` `NEW`
1. [12人花30万买月薪2500的高铁工作](https://s.weibo.com/weibo?q=%2312%E4%BA%BA%E8%8A%B130%E4%B8%87%E4%B9%B0%E6%9C%88%E8%96%AA2500%E7%9A%84%E9%AB%98%E9%93%81%E5%B7%A5%E4%BD%9C%23) `164.2K 🔥` `NEW`
1. [浪姐小考 抗抑郁视频](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%B0%8F%E8%80%83%20%E6%8A%97%E6%8A%91%E9%83%81%E8%A7%86%E9%A2%91%23) `153.4K 🔥` `NEW`
1. [男子钓鱼钓到三把长刀每把长一米多 (Man caught three long knives while fishing, each more than one meter long)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%92%93%E9%B1%BC%E9%92%93%E5%88%B0%E4%B8%89%E6%8A%8A%E9%95%BF%E5%88%80%E6%AF%8F%E6%8A%8A%E9%95%BF%E4%B8%80%E7%B1%B3%E5%A4%9A%23) `151.7K 🔥` `NEW`
1. [伊朗伊拉克民众上街庆祝](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BC%8A%E6%8B%89%E5%85%8B%E6%B0%91%E4%BC%97%E4%B8%8A%E8%A1%97%E5%BA%86%E7%A5%9D%23) `150.8K 🔥` `NEW`
1. [雨爱小考第一](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E7%88%B1%E5%B0%8F%E8%80%83%E7%AC%AC%E4%B8%80%23) `148.4K 🔥` `NEW`
1. [吴磊成首登祖国杂志封面艺人](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E6%88%90%E9%A6%96%E7%99%BB%E7%A5%96%E5%9B%BD%E6%9D%82%E5%BF%97%E5%B0%81%E9%9D%A2%E8%89%BA%E4%BA%BA%23) `137.4K 🔥` `NEW`
1. [你们都笑冉 实则冉偷偷努力](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E9%83%BD%E7%AC%91%E5%86%89%20%E5%AE%9E%E5%88%99%E5%86%89%E5%81%B7%E5%81%B7%E5%8A%AA%E5%8A%9B%23) `111.5K 🔥` `NEW`
1. [冰湖重生 楚乔传](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%20%E6%A5%9A%E4%B9%94%E4%BC%A0%23) `110.8K 🔥` `NEW`
1. [人民币汇率也大涨](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%B8%81%E6%B1%87%E7%8E%87%E4%B9%9F%E5%A4%A7%E6%B6%A8%23) `109.4K 🔥` `NEW`
1. [考公人三大幻觉](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%85%AC%E4%BA%BA%E4%B8%89%E5%A4%A7%E5%B9%BB%E8%A7%89%23) `107.9K 🔥` `NEW`
1. [温氏市值涨超9亿总裁喊话送1000只鸡](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E6%B0%8F%E5%B8%82%E5%80%BC%E6%B6%A8%E8%B6%859%E4%BA%BF%E6%80%BB%E8%A3%81%E5%96%8A%E8%AF%9D%E9%80%811000%E5%8F%AA%E9%B8%A1%23) `106.9K 🔥` `NEW`
1. [芒果别让美女干这些](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%88%AB%E8%AE%A9%E7%BE%8E%E5%A5%B3%E5%B9%B2%E8%BF%99%E4%BA%9B%23) `106.8K 🔥` `NEW`
1. [黄金这波能涨多久 (How long can gold continue to rise?)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%BF%99%E6%B3%A2%E8%83%BD%E6%B6%A8%E5%A4%9A%E4%B9%85%23) `104.7K 🔥` `NEW`
1. [美伊双方为何接受两周停火](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%8F%8C%E6%96%B9%E4%B8%BA%E4%BD%95%E6%8E%A5%E5%8F%97%E4%B8%A4%E5%91%A8%E5%81%9C%E7%81%AB%23) `98.1K 🔥` `NEW`
1. [网友质疑海河牛奶甩锅营销公司](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%B4%A8%E7%96%91%E6%B5%B7%E6%B2%B3%E7%89%9B%E5%A5%B6%E7%94%A9%E9%94%85%E8%90%A5%E9%94%80%E5%85%AC%E5%8F%B8%23) `91.4K 🔥` `NEW`
1. [朱亚文两个女儿腿长](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%BA%9A%E6%96%87%E4%B8%A4%E4%B8%AA%E5%A5%B3%E5%84%BF%E8%85%BF%E9%95%BF%23) `86.4K 🔥` `NEW`
1. [冰湖重生开局0广](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%BC%80%E5%B1%800%E5%B9%BF%23) `1.1M 🔥` `+450%`
1. [刘思维当爸爸了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%80%9D%E7%BB%B4%E5%BD%93%E7%88%B8%E7%88%B8%E4%BA%86%23) `165.0K 🔥` `+38%`
1. [因二胎儿子随妻姓丈夫起诉离婚](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%BA%8C%E8%83%8E%E5%84%BF%E5%AD%90%E9%9A%8F%E5%A6%BB%E5%A7%93%E4%B8%88%E5%A4%AB%E8%B5%B7%E8%AF%89%E7%A6%BB%E5%A9%9A%23) `164.3K 🔥` `+23%`
1. [779元滴眼液暴涨至3382元 (Eye drops priced at 779 yuan soared to 3382 yuan)](https://s.weibo.com/weibo?q=%23779%E5%85%83%E6%BB%B4%E7%9C%BC%E6%B6%B2%E6%9A%B4%E6%B6%A8%E8%87%B33382%E5%85%83%23) `802.2K 🔥`
1. [以色列电视台倒计时轰炸等来停火](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E7%94%B5%E8%A7%86%E5%8F%B0%E5%80%92%E8%AE%A1%E6%97%B6%E8%BD%B0%E7%82%B8%E7%AD%89%E6%9D%A5%E5%81%9C%E7%81%AB%23) `434.7K 🔥`
1. [金子涵 再逼我就把所有的都说出来](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%20%E5%86%8D%E9%80%BC%E6%88%91%E5%B0%B1%E6%8A%8A%E6%89%80%E6%9C%89%E7%9A%84%E9%83%BD%E8%AF%B4%E5%87%BA%E6%9D%A5%23) `165.1K 🔥`
1. [伊朗接受停火提议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8E%A5%E5%8F%97%E5%81%9C%E7%81%AB%E6%8F%90%E8%AE%AE%23) `165.0K 🔥`
1. [徐艺洋回应黄子韬身体状况 (Xu Yiyang responded to Huang Zitao’s physical condition)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9B%9E%E5%BA%94%E9%BB%84%E5%AD%90%E9%9F%AC%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `164.8K 🔥`
1. [伊美双方停火生效](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%BE%8E%E5%8F%8C%E6%96%B9%E5%81%9C%E7%81%AB%E7%94%9F%E6%95%88%23) `164.7K 🔥`
1. [日本网红在印度被泼粪水致高烧入院](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E7%BA%A2%E5%9C%A8%E5%8D%B0%E5%BA%A6%E8%A2%AB%E6%B3%BC%E7%B2%AA%E6%B0%B4%E8%87%B4%E9%AB%98%E7%83%A7%E5%85%A5%E9%99%A2%23) `164.5K 🔥`
1. [女子孕期得知丈夫出轨20余人](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%95%E6%9C%9F%E5%BE%97%E7%9F%A5%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A820%E4%BD%99%E4%BA%BA%23) `164.5K 🔥`
1. [赵今麦超短发大片](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%B6%85%E7%9F%AD%E5%8F%91%E5%A4%A7%E7%89%87%23) `164.4K 🔥`
1. [大艺术家 不敢听](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%89%BA%E6%9C%AF%E5%AE%B6%20%E4%B8%8D%E6%95%A2%E5%90%AC%23) `164.2K 🔥`
1. [余承东猛批团队设计不高级](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%8C%9B%E6%89%B9%E5%9B%A2%E9%98%9F%E8%AE%BE%E8%AE%A1%E4%B8%8D%E9%AB%98%E7%BA%A7%23) `164.1K 🔥`
1. [A股港股飙涨原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%B8%AF%E8%82%A1%E9%A3%99%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `95.6K 🔥`
1. [女方猝死遗产继承权亲儿子仅占八分之一](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%96%B9%E7%8C%9D%E6%AD%BB%E9%81%97%E4%BA%A7%E7%BB%A7%E6%89%BF%E6%9D%83%E4%BA%B2%E5%84%BF%E5%AD%90%E4%BB%85%E5%8D%A0%E5%85%AB%E5%88%86%E4%B9%8B%E4%B8%80%23) `209.6K 🔥` `-27%`
1. [粉色蓝莓](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E8%93%9D%E8%8E%93%23) `165.1K 🔥` `-35%`
1. [午睡悲伤综合征 (Nap Sad Syndrome)](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%82%B2%E4%BC%A4%E7%BB%BC%E5%90%88%E5%BE%81%23) `164.9K 🔥` `-31%`
1. [江语晨小考突然离场 (Jiang Yuchen suddenly left the quiz)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%B0%8F%E8%80%83%E7%AA%81%E7%84%B6%E7%A6%BB%E5%9C%BA%23) `164.5K 🔥` `-51%`
1. [浪姐小考 完全小品](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%B0%8F%E8%80%83%20%E5%AE%8C%E5%85%A8%E5%B0%8F%E5%93%81%23) `164.3K 🔥` `-52%`
1. [讨好型人格小时候](https://s.weibo.com/weibo?q=%23%E8%AE%A8%E5%A5%BD%E5%9E%8B%E4%BA%BA%E6%A0%BC%E5%B0%8F%E6%97%B6%E5%80%99%23) `112.2K 🔥` `-35%`
1. [曾沛慈一半一半转音](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%80%E5%8D%8A%E4%B8%80%E5%8D%8A%E8%BD%AC%E9%9F%B3%23) `111.7K 🔥` `-23%`
1. [店主回应因博主吃12个汉堡报警 (The owner responded to calling the police because the blogger ate 12 burgers)](https://s.weibo.com/weibo?q=%23%E5%BA%97%E4%B8%BB%E5%9B%9E%E5%BA%94%E5%9B%A0%E5%8D%9A%E4%B8%BB%E5%90%8312%E4%B8%AA%E6%B1%89%E5%A0%A1%E6%8A%A5%E8%AD%A6%23) `111.1K 🔥` `-44%`
1. [认母期认成狗了](https://s.weibo.com/weibo?q=%23%E8%AE%A4%E6%AF%8D%E6%9C%9F%E8%AE%A4%E6%88%90%E7%8B%97%E4%BA%86%23) `102.1K 🔥` `-38%`
1. [海湾多国遭袭](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B9%BE%E5%A4%9A%E5%9B%BD%E9%81%AD%E8%A2%AD%23) `89.7K 🔥` `-55%`
1. [郑丽文率中国国民党访问团拜谒中山陵](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E7%8E%87%E4%B8%AD%E5%9B%BD%E5%9B%BD%E6%B0%91%E5%85%9A%E8%AE%BF%E9%97%AE%E5%9B%A2%E6%8B%9C%E8%B0%92%E4%B8%AD%E5%B1%B1%E9%99%B5%23) `88.1K 🔥` `-28%`

Updated at 2026-04-08 15:26:15

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
