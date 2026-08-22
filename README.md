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

1. [爆料博主称甲醛白菜涉事人员已扣押 (Blogger who broke the news said those involved in formaldehyde cabbage have been detained)](https://s.weibo.com/weibo?q=%23%E7%88%86%E6%96%99%E5%8D%9A%E4%B8%BB%E7%A7%B0%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E6%B6%89%E4%BA%8B%E4%BA%BA%E5%91%98%E5%B7%B2%E6%89%A3%E6%8A%BC%23) `222.4K 🔥` `NEW`
1. [aespaTIMA红毯](https://s.weibo.com/weibo?q=%23aespaTIMA%E7%BA%A2%E6%AF%AF%23) `221.2K 🔥` `NEW`
1. [钟丽缇助眠 张伦硕把大家崩醒了](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E5%8A%A9%E7%9C%A0%20%E5%BC%A0%E4%BC%A6%E7%A1%95%E6%8A%8A%E5%A4%A7%E5%AE%B6%E5%B4%A9%E9%86%92%E4%BA%86%23) `220.6K 🔥` `NEW`
1. [亚朵卖枕头被子收入快赶上酒店主业](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%9C%B5%E5%8D%96%E6%9E%95%E5%A4%B4%E8%A2%AB%E5%AD%90%E6%94%B6%E5%85%A5%E5%BF%AB%E8%B5%B6%E4%B8%8A%E9%85%92%E5%BA%97%E4%B8%BB%E4%B8%9A%23) `175.7K 🔥` `NEW`
1. [邹市明左眼视力仅剩0.1](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%B7%A6%E7%9C%BC%E8%A7%86%E5%8A%9B%E4%BB%85%E5%89%A90.1%23) `134.4K 🔥` `NEW`
1. [白鹿扶常华森下台阶路透](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%89%B6%E5%B8%B8%E5%8D%8E%E6%A3%AE%E4%B8%8B%E5%8F%B0%E9%98%B6%E8%B7%AF%E9%80%8F%23) `126.3K 🔥` `NEW`
1. [QQ换皮肤了](https://s.weibo.com/weibo?q=%23QQ%E6%8D%A2%E7%9A%AE%E8%82%A4%E4%BA%86%23) `115.4K 🔥` `NEW`
1. [凤凰组合 逆转晋级决赛](https://s.weibo.com/weibo?q=%23%E5%87%A4%E5%87%B0%E7%BB%84%E5%90%88%20%E9%80%86%E8%BD%AC%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `112.3K 🔥` `NEW`
1. [白菜蘸甲醛 (Cabbage dipped in formaldehyde)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%8F%9C%E8%98%B8%E7%94%B2%E9%86%9B%23) `1.6M 🔥` `+36%`
1. [北京WBG对战GR](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%ACWBG%E5%AF%B9%E6%88%98GR%23) `504.0K 🔥` `+141%`
1. [晋江热门作品版权费好贵](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E7%83%AD%E9%97%A8%E4%BD%9C%E5%93%81%E7%89%88%E6%9D%83%E8%B4%B9%E5%A5%BD%E8%B4%B5%23) `503.0K 🔥` `+98%`
1. [台风简拉维 (Typhoon Jane Ravi)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%AE%80%E6%8B%89%E7%BB%B4%23) `220.8K 🔥` `+35%`
1. [邓凯王楚然身高差](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%BA%AB%E9%AB%98%E5%B7%AE%23) `220.7K 🔥` `+70%`
1. [七老童心给那英送花篮](https://s.weibo.com/weibo?q=%23%E4%B8%83%E8%80%81%E7%AB%A5%E5%BF%83%E7%BB%99%E9%82%A3%E8%8B%B1%E9%80%81%E8%8A%B1%E7%AF%AE%23) `220.6K 🔥` `+63%`
1. [亲人离世查存款将不再难](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E4%BA%BA%E7%A6%BB%E4%B8%96%E6%9F%A5%E5%AD%98%E6%AC%BE%E5%B0%86%E4%B8%8D%E5%86%8D%E9%9A%BE%23) `220.6K 🔥` `+62%`
1. [傅首尔电影爸爸咪呀](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E7%94%B5%E5%BD%B1%E7%88%B8%E7%88%B8%E5%92%AA%E5%91%80%23) `168.8K 🔥` `+32%`
1. [亚运会 (Asian Games)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `1.3M 🔥`
1. [晋江作者大会](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%23) `717.3K 🔥`
1. [55元捡漏1.41万项链女子获5元补偿](https://s.weibo.com/weibo?q=%2355%E5%85%83%E6%8D%A1%E6%BC%8F1.41%E4%B8%87%E9%A1%B9%E9%93%BE%E5%A5%B3%E5%AD%90%E8%8E%B75%E5%85%83%E8%A1%A5%E5%81%BF%23) `625.1K 🔥`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `513.5K 🔥`
1. [8.99万起大众5S夯爆了 (Volkswagen 5S starts at 89,900 and explodes)](https://s.weibo.com/weibo?q=%238.99%E4%B8%87%E8%B5%B7%E5%A4%A7%E4%BC%975S%E5%A4%AF%E7%88%86%E4%BA%86%23) `512.5K 🔥`
1. [黑灯连发三条怼梁源 (Black Lantern sends out three messages in succession to attack Liang Yuan)](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%81%AF%E8%BF%9E%E5%8F%91%E4%B8%89%E6%9D%A1%E6%80%BC%E6%A2%81%E6%BA%90%23) `282.2K 🔥`
1. [晋江版权费](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E7%89%88%E6%9D%83%E8%B4%B9%23) `233.3K 🔥`
1. [医生说再差的精子都能做试管](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E5%86%8D%E5%B7%AE%E7%9A%84%E7%B2%BE%E5%AD%90%E9%83%BD%E8%83%BD%E5%81%9A%E8%AF%95%E7%AE%A1%23) `223.4K 🔥`
1. [患癌男子疑因公司未缴社保自缢身亡 (Cancer-stricken man hanged himself because company failed to pay social security)](https://s.weibo.com/weibo?q=%23%E6%82%A3%E7%99%8C%E7%94%B7%E5%AD%90%E7%96%91%E5%9B%A0%E5%85%AC%E5%8F%B8%E6%9C%AA%E7%BC%B4%E7%A4%BE%E4%BF%9D%E8%87%AA%E7%BC%A2%E8%BA%AB%E4%BA%A1%23) `190.8K 🔥`
1. [彭小苒快40岁了](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%E5%BF%AB40%E5%B2%81%E4%BA%86%23) `174.3K 🔥`
1. [TF五代一公](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E4%B8%80%E5%85%AC%23) `146.2K 🔥`
1. [张凌赫周也无畏契约直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%91%A8%E4%B9%9F%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E7%9B%B4%E6%92%AD%23) `134.4K 🔥`
1. [付费占座行不行总算说明白了 (It’s finally clear whether it’s okay to pay for a seat)](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%B4%B9%E5%8D%A0%E5%BA%A7%E8%A1%8C%E4%B8%8D%E8%A1%8C%E6%80%BB%E7%AE%97%E8%AF%B4%E6%98%8E%E7%99%BD%E4%BA%86%23) `122.2K 🔥`
1. [马嘉祺巨型包裹开箱vlog](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%B7%A8%E5%9E%8B%E5%8C%85%E8%A3%B9%E5%BC%80%E7%AE%B1vlog%23) `120.4K 🔥`
1. [刘宇宁杨超越体型差](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%BD%93%E5%9E%8B%E5%B7%AE%23) `112.4K 🔥`
1. [6图看财政清单里的民生温度](https://s.weibo.com/weibo?q=%236%E5%9B%BE%E7%9C%8B%E8%B4%A2%E6%94%BF%E6%B8%85%E5%8D%95%E9%87%8C%E7%9A%84%E6%B0%91%E7%94%9F%E6%B8%A9%E5%BA%A6%23) `732.0K 🔥` `-23%`
1. [张月不愧是从浪姐进修回来的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E4%B8%8D%E6%84%A7%E6%98%AF%E4%BB%8E%E6%B5%AA%E5%A7%90%E8%BF%9B%E4%BF%AE%E5%9B%9E%E6%9D%A5%E7%9A%84%23) `239.5K 🔥` `-24%`
1. [白血病不再是不治之症](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%A1%80%E7%97%85%E4%B8%8D%E5%86%8D%E6%98%AF%E4%B8%8D%E6%B2%BB%E4%B9%8B%E7%97%87%23) `239.0K 🔥` `-58%`
1. [李乃文声明王玉雯哭跟他没关系](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%83%E6%96%87%E5%A3%B0%E6%98%8E%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%93%AD%E8%B7%9F%E4%BB%96%E6%B2%A1%E5%85%B3%E7%B3%BB%23) `236.9K 🔥` `-24%`
1. [陈伟霆十年了还没释怀人贩子梗 (William Chan still hasn’t let go of the human trafficker plot after ten years)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E5%8D%81%E5%B9%B4%E4%BA%86%E8%BF%98%E6%B2%A1%E9%87%8A%E6%80%80%E4%BA%BA%E8%B4%A9%E5%AD%90%E6%A2%97%23) `234.4K 🔥` `-24%`
1. [时代峰峻伴手礼太小方了 (Times Fengjun’s souvenirs are too small)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E4%BC%B4%E6%89%8B%E7%A4%BC%E5%A4%AA%E5%B0%8F%E6%96%B9%E4%BA%86%23) `230.8K 🔥` `-24%`
1. [稚楚美到我了 (Childish and beautiful to me)](https://s.weibo.com/weibo?q=%23%E7%A8%9A%E6%A5%9A%E7%BE%8E%E5%88%B0%E6%88%91%E4%BA%86%23) `227.6K 🔥` `-25%`
1. [荣耀机器人9秒32破人类百米世界纪录](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E6%9C%BA%E5%99%A8%E4%BA%BA9%E7%A7%9232%E7%A0%B4%E4%BA%BA%E7%B1%BB%E7%99%BE%E7%B1%B3%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `226.5K 🔥` `-29%`
1. [关晓彤走机场也戴负重手环](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%B5%B0%E6%9C%BA%E5%9C%BA%E4%B9%9F%E6%88%B4%E8%B4%9F%E9%87%8D%E6%89%8B%E7%8E%AF%23) `224.7K 🔥` `-25%`
1. [美加谈判破裂加拿大硬刚](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8A%A0%E8%B0%88%E5%88%A4%E7%A0%B4%E8%A3%82%E5%8A%A0%E6%8B%BF%E5%A4%A7%E7%A1%AC%E5%88%9A%23) `223.0K 🔥` `-23%`
1. [巫哲首次公开露脸 (Wu Zhe's first public appearance)](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%E9%9C%B2%E8%84%B8%23) `222.7K 🔥` `-21%`
1. [父子因iPhone争执坠崖母亲也跳下](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%AD%90%E5%9B%A0iPhone%E4%BA%89%E6%89%A7%E5%9D%A0%E5%B4%96%E6%AF%8D%E4%BA%B2%E4%B9%9F%E8%B7%B3%E4%B8%8B%23) `222.1K 🔥` `-21%`
1. [巫山 拐卖](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%B1%B1%20%E6%8B%90%E5%8D%96%23) `221.8K 🔥` `-25%`
1. [ACC辅助驾驶追撞致3人死亡](https://s.weibo.com/weibo?q=%23ACC%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E8%BF%BD%E6%92%9E%E8%87%B43%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `221.1K 🔥` `-24%`
1. [云南 二手烟](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%20%E4%BA%8C%E6%89%8B%E7%83%9F%23) `171.8K 🔥` `-27%`
1. [699分农家女孩已去清华报到 (At 699 points, the farm girl has reported to Tsinghua University)](https://s.weibo.com/weibo?q=%23699%E5%88%86%E5%86%9C%E5%AE%B6%E5%A5%B3%E5%AD%A9%E5%B7%B2%E5%8E%BB%E6%B8%85%E5%8D%8E%E6%8A%A5%E5%88%B0%23) `149.7K 🔥` `-31%`
1. [周也是电竞文女主吧](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E6%98%AF%E7%94%B5%E7%AB%9E%E6%96%87%E5%A5%B3%E4%B8%BB%E5%90%A7%23) `134.4K 🔥` `-27%`
1. [TIMA国际音乐大赏](https://s.weibo.com/weibo?q=%23TIMA%E5%9B%BD%E9%99%85%E9%9F%B3%E4%B9%90%E5%A4%A7%E8%B5%8F%23) `131.3K 🔥` `-32%`
1. [我对生理期的态度belike (My attitude towards menstrual periods belike)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AF%B9%E7%94%9F%E7%90%86%E6%9C%9F%E7%9A%84%E6%80%81%E5%BA%A6belike%23) `126.5K 🔥` `-23%`
1. [康保通报白菜收购环节蘸取甲醛溶液 (Kangbao informed that the cabbage purchase process is dipped in formaldehyde solution)](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E4%BF%9D%E9%80%9A%E6%8A%A5%E7%99%BD%E8%8F%9C%E6%94%B6%E8%B4%AD%E7%8E%AF%E8%8A%82%E8%98%B8%E5%8F%96%E7%94%B2%E9%86%9B%E6%BA%B6%E6%B6%B2%23) `113.7K 🔥` `-64%`

Updated at 2026-08-22 17:01:49

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
