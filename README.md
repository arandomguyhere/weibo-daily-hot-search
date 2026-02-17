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

1. [惊蛰无声大年初一好戏开场 (Jingzhe's silent New Year's Day drama begins)](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%80%E5%A5%BD%E6%88%8F%E5%BC%80%E5%9C%BA%23) `580.5K 🔥` `NEW`
1. [义乌分会场原来是实力担当](https://s.weibo.com/weibo?q=%23%E4%B9%89%E4%B9%8C%E5%88%86%E4%BC%9A%E5%9C%BA%E5%8E%9F%E6%9D%A5%E6%98%AF%E5%AE%9E%E5%8A%9B%E6%8B%85%E5%BD%93%23) `344.9K 🔥` `NEW`
1. [汪苏泷教你绣出拜年大片](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%95%99%E4%BD%A0%E7%BB%A3%E5%87%BA%E6%8B%9C%E5%B9%B4%E5%A4%A7%E7%89%87%23) `336.6K 🔥` `NEW`
1. [广东发红包亲戚10块邻居5块](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%8F%91%E7%BA%A2%E5%8C%85%E4%BA%B2%E6%88%9A10%E5%9D%97%E9%82%BB%E5%B1%855%E5%9D%97%23) `322.0K 🔥` `NEW`
1. [邓超用豆包重回妈妈电影院](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E7%94%A8%E8%B1%86%E5%8C%85%E9%87%8D%E5%9B%9E%E5%A6%88%E5%A6%88%E7%94%B5%E5%BD%B1%E9%99%A2%23) `315.2K 🔥` `NEW`
1. [喵娲娲完全就是散财神喵来的](https://s.weibo.com/weibo?q=%23%E5%96%B5%E5%A8%B2%E5%A8%B2%E5%AE%8C%E5%85%A8%E5%B0%B1%E6%98%AF%E6%95%A3%E8%B4%A2%E7%A5%9E%E5%96%B5%E6%9D%A5%E7%9A%84%23) `282.2K 🔥` `NEW`
1. [檀健次红包](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%BA%A2%E5%8C%85%23) `280.8K 🔥` `NEW`
1. [年度女演员荣誉提名](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%BA%A6%E5%A5%B3%E6%BC%94%E5%91%98%E8%8D%A3%E8%AA%89%E6%8F%90%E5%90%8D%23) `275.9K 🔥` `NEW`
1. [iPhone18ProMax或无重大更新](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E6%88%96%E6%97%A0%E9%87%8D%E5%A4%A7%E6%9B%B4%E6%96%B0%23) `274.2K 🔥` `NEW`
1. [10万元现金被娃当垃圾扔掉](https://s.weibo.com/weibo?q=%2310%E4%B8%87%E5%85%83%E7%8E%B0%E9%87%91%E8%A2%AB%E5%A8%83%E5%BD%93%E5%9E%83%E5%9C%BE%E6%89%94%E6%8E%89%23) `273.8K 🔥` `NEW`
1. [千问没有免单卡也能天天减免 (Qianwen can get daily deductions even if you don’t have a free card.)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E6%B2%A1%E6%9C%89%E5%85%8D%E5%8D%95%E5%8D%A1%E4%B9%9F%E8%83%BD%E5%A4%A9%E5%A4%A9%E5%87%8F%E5%85%8D%23) `265.8K 🔥` `NEW`
1. [蔡磊一家三口除夕送祝福](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E9%99%A4%E5%A4%95%E9%80%81%E7%A5%9D%E7%A6%8F%23) `257.4K 🔥` `NEW`
1. [韩聪米兰下班](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%81%AA%E7%B1%B3%E5%85%B0%E4%B8%8B%E7%8F%AD%23) `232.3K 🔥` `NEW`
1. [爱上戏曲是中国人的DNA](https://s.weibo.com/weibo?q=%23%E7%88%B1%E4%B8%8A%E6%88%8F%E6%9B%B2%E6%98%AF%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%9A%84DNA%23) `222.5K 🔥` `NEW`
1. [谁说武侠死了明明活蹦乱跳的](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%AF%B4%E6%AD%A6%E4%BE%A0%E6%AD%BB%E4%BA%86%E6%98%8E%E6%98%8E%E6%B4%BB%E8%B9%A6%E4%B9%B1%E8%B7%B3%E7%9A%84%23) `215.7K 🔥` `NEW`
1. [易烊千玺这个角色和以前很不一样](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E8%BF%99%E4%B8%AA%E8%A7%92%E8%89%B2%E5%92%8C%E4%BB%A5%E5%89%8D%E5%BE%88%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `206.3K 🔥` `NEW`
1. [背着小被子离家出走的萨摩耶](https://s.weibo.com/weibo?q=%23%E8%83%8C%E7%9D%80%E5%B0%8F%E8%A2%AB%E5%AD%90%E7%A6%BB%E5%AE%B6%E5%87%BA%E8%B5%B0%E7%9A%84%E8%90%A8%E6%91%A9%E8%80%B6%23) `191.9K 🔥` `NEW`
1. [迪丽热巴红裙摇曳](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BA%A2%E8%A3%99%E6%91%87%E6%9B%B3%23) `191.8K 🔥` `NEW`
1. [宋威龙红包](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%BA%A2%E5%8C%85%23) `180.4K 🔥` `NEW`
1. [过年当天的你和妈妈](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%BD%93%E5%A4%A9%E7%9A%84%E4%BD%A0%E5%92%8C%E5%A6%88%E5%A6%88%23) `178.2K 🔥` `NEW`
1. [星河入梦 黑马 (Starry River Dreaming Dark Horse)](https://s.weibo.com/weibo?q=%23%E6%98%9F%E6%B2%B3%E5%85%A5%E6%A2%A6%20%E9%BB%91%E9%A9%AC%23) `177.4K 🔥` `NEW`
1. [烟花菜](https://s.weibo.com/weibo?q=%23%E7%83%9F%E8%8A%B1%E8%8F%9C%23) `155.5K 🔥` `NEW`
1. [猫 快起床吧一会儿饭没了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E5%BF%AB%E8%B5%B7%E5%BA%8A%E5%90%A7%E4%B8%80%E4%BC%9A%E5%84%BF%E9%A5%AD%E6%B2%A1%E4%BA%86%23) `146.3K 🔥` `NEW`
1. [北京台春晚官宣节目单](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%8F%B0%E6%98%A5%E6%99%9A%E5%AE%98%E5%AE%A3%E8%8A%82%E7%9B%AE%E5%8D%95%23) `613.9K 🔥` `+185%`
1. [红包 (Red envelope)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `604.4K 🔥` `+178%`
1. [宇树今年目标出货量1至2万台](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E4%BB%8A%E5%B9%B4%E7%9B%AE%E6%A0%87%E5%87%BA%E8%B4%A7%E9%87%8F1%E8%87%B32%E4%B8%87%E5%8F%B0%23) `592.3K 🔥` `+172%`
1. [央妈不会找王一博赔地板吧](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E5%A6%88%E4%B8%8D%E4%BC%9A%E6%89%BE%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%B5%94%E5%9C%B0%E6%9D%BF%E5%90%A7%23) `586.5K 🔥` `+170%`
1. [王菲连续两年带火小众耳环](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%B9%B4%E5%B8%A6%E7%81%AB%E5%B0%8F%E4%BC%97%E8%80%B3%E7%8E%AF%23) `575.1K 🔥` `+25%`
1. [男生回应春节上门喂猫爆赚16万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E5%9B%9E%E5%BA%94%E6%98%A5%E8%8A%82%E4%B8%8A%E9%97%A8%E5%96%82%E7%8C%AB%E7%88%86%E8%B5%9A16%E4%B8%87%23) `528.2K 🔥` `+143%`
1. [交卷的时候才看见学霸的题](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E5%8D%B7%E7%9A%84%E6%97%B6%E5%80%99%E6%89%8D%E7%9C%8B%E8%A7%81%E5%AD%A6%E9%9C%B8%E7%9A%84%E9%A2%98%23) `503.1K 🔥` `+131%`
1. [开始吃剩菜](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E5%90%83%E5%89%A9%E8%8F%9C%23) `501.9K 🔥` `+132%`
1. [汪苏泷 我在春晚闯祸 (Wang Sulong I got into trouble at the Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%20%E6%88%91%E5%9C%A8%E6%98%A5%E6%99%9A%E9%97%AF%E7%A5%B8%23) `501.7K 🔥` `+131%`
1. [惊蛰无声](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `388.1K 🔥` `+79%`
1. [国防部发文时刻准备着](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E5%8F%91%E6%96%87%E6%97%B6%E5%88%BB%E5%87%86%E5%A4%87%E7%9D%80%23) `379.9K 🔥` `+77%`
1. [马宝宝出生](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%9D%E5%AE%9D%E5%87%BA%E7%94%9F%23) `372.4K 🔥` `+72%`
1. [小猫和主人都占到了对方的便宜 (Both kitten and owner take advantage of each other)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%92%8C%E4%B8%BB%E4%BA%BA%E9%83%BD%E5%8D%A0%E5%88%B0%E4%BA%86%E5%AF%B9%E6%96%B9%E7%9A%84%E4%BE%BF%E5%AE%9C%23) `366.8K 🔥` `+75%`
1. [美国日本春节想针对台海搞事](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%97%A5%E6%9C%AC%E6%98%A5%E8%8A%82%E6%83%B3%E9%92%88%E5%AF%B9%E5%8F%B0%E6%B5%B7%E6%90%9E%E4%BA%8B%23) `356.5K 🔥` `+157%`
1. [北京首位马宝宝取名初一 (Beijing's first baby horse named Junior One)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E9%A6%96%E4%BD%8D%E9%A9%AC%E5%AE%9D%E5%AE%9D%E5%8F%96%E5%90%8D%E5%88%9D%E4%B8%80%23) `346.9K 🔥` `+59%`
1. [王一博 工作留痕](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%23) `313.7K 🔥` `+45%`
1. [ELLE主编朋友圈](https://s.weibo.com/weibo?q=%23ELLE%E4%B8%BB%E7%BC%96%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `305.6K 🔥` `+41%`
1. [明星红包](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `305.2K 🔥` `+42%`
1. [飞驰人生3 (Flying Life 3)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%23) `288.8K 🔥` `+34%`
1. [春晚AI率比我论文高](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9AAI%E7%8E%87%E6%AF%94%E6%88%91%E8%AE%BA%E6%96%87%E9%AB%98%23) `281.0K 🔥` `+30%`
1. [镖人 (escort)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `272.9K 🔥` `+26%`
1. [范丞丞这个笑太漂亮了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%BF%99%E4%B8%AA%E7%AC%91%E5%A4%AA%E6%BC%82%E4%BA%AE%E4%BA%86%23) `268.8K 🔥` `+24%`
1. [刘浩存这个空翻和控腿力度 (Liu Haocun’s somersault and leg control strength)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E8%BF%99%E4%B8%AA%E7%A9%BA%E7%BF%BB%E5%92%8C%E6%8E%A7%E8%85%BF%E5%8A%9B%E5%BA%A6%23) `158.3K 🔥` `+38%`
1. [票房 (box office)](https://s.weibo.com/weibo?q=%23%E7%A5%A8%E6%88%BF%23) `1.1M 🔥`
1. [准爸爸拿B超单替宝宝给爷奶拜年 (The father-to-be takes the B-ultrasound scan to wish the grandma New Year’s greetings for the baby)](https://s.weibo.com/weibo?q=%23%E5%87%86%E7%88%B8%E7%88%B8%E6%8B%BFB%E8%B6%85%E5%8D%95%E6%9B%BF%E5%AE%9D%E5%AE%9D%E7%BB%99%E7%88%B7%E5%A5%B6%E6%8B%9C%E5%B9%B4%23) `785.0K 🔥`
1. [总台使用Mate80竖屏直播春晚 (The main station uses Mate80 vertical screen to live broadcast the Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%80%BB%E5%8F%B0%E4%BD%BF%E7%94%A8Mate80%E7%AB%96%E5%B1%8F%E7%9B%B4%E6%92%AD%E6%98%A5%E6%99%9A%23) `610.7K 🔥`
1. [钟意](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%23) `246.5K 🔥`
1. [星河入梦](https://s.weibo.com/weibo?q=%23%E6%98%9F%E6%B2%B3%E5%85%A5%E6%A2%A6%23) `154.7K 🔥`
1. [谷爱凌大跳台银牌 (Gu Ailing silver medal in big platform)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%A7%E8%B7%B3%E5%8F%B0%E9%93%B6%E7%89%8C%23) `145.8K 🔥` `-33%`

Updated at 2026-02-17 14:45:34

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
