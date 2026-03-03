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

1. [伊朗称击中了美空军基地大楼 (Iran says it hit US Air Force base building)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%87%BB%E4%B8%AD%E4%BA%86%E7%BE%8E%E7%A9%BA%E5%86%9B%E5%9F%BA%E5%9C%B0%E5%A4%A7%E6%A5%BC%23) `453.6K 🔥` `NEW`
1. [王安宇CELINE品牌大使](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87CELINE%E5%93%81%E7%89%8C%E5%A4%A7%E4%BD%BF%23) `273.1K 🔥` `NEW`
1. [特朗普夫人联合国主持会议遭批](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%AB%E4%BA%BA%E8%81%94%E5%90%88%E5%9B%BD%E4%B8%BB%E6%8C%81%E4%BC%9A%E8%AE%AE%E9%81%AD%E6%89%B9%23) `270.0K 🔥` `NEW`
1. [迪丽热巴将缺席时装周](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B0%86%E7%BC%BA%E5%B8%AD%E6%97%B6%E8%A3%85%E5%91%A8%23) `252.2K 🔥` `NEW`
1. [朴春指控朴山多拉吸毒](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E6%98%A5%E6%8C%87%E6%8E%A7%E6%9C%B4%E5%B1%B1%E5%A4%9A%E6%8B%89%E5%90%B8%E6%AF%92%23) `248.9K 🔥` `NEW`
1. [杨天真 娱乐圈工作越来越无聊](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%20%E5%A8%B1%E4%B9%90%E5%9C%88%E5%B7%A5%E4%BD%9C%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%97%A0%E8%81%8A%23) `238.0K 🔥` `NEW`
1. [孙颖莎可爱到蓬出屏幕](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%8F%AF%E7%88%B1%E5%88%B0%E8%93%AC%E5%87%BA%E5%B1%8F%E5%B9%95%23) `189.5K 🔥` `NEW`
1. [新版闲鱼拍照就可以赚钱](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%89%88%E9%97%B2%E9%B1%BC%E6%8B%8D%E7%85%A7%E5%B0%B1%E5%8F%AF%E4%BB%A5%E8%B5%9A%E9%92%B1%23) `188.8K 🔥` `NEW`
1. [曝张元英签售一直玩手机](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E5%85%83%E8%8B%B1%E7%AD%BE%E5%94%AE%E4%B8%80%E7%9B%B4%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `169.2K 🔥` `NEW`
1. [建议对强迫隐形加班加大处罚](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%AF%B9%E5%BC%BA%E8%BF%AB%E9%9A%90%E5%BD%A2%E5%8A%A0%E7%8F%AD%E5%8A%A0%E5%A4%A7%E5%A4%84%E7%BD%9A%23) `147.8K 🔥` `NEW`
1. [建议禁止16岁以下使用社媒 (It is recommended that users under the age of 16 are prohibited from using social media)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%A6%81%E6%AD%A216%E5%B2%81%E4%BB%A5%E4%B8%8B%E4%BD%BF%E7%94%A8%E7%A4%BE%E5%AA%92%23) `147.1K 🔥` `NEW`
1. [公务员平替岗挤满没上岸的年轻人](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8A%A1%E5%91%98%E5%B9%B3%E6%9B%BF%E5%B2%97%E6%8C%A4%E6%BB%A1%E6%B2%A1%E4%B8%8A%E5%B2%B8%E7%9A%84%E5%B9%B4%E8%BD%BB%E4%BA%BA%23) `145.8K 🔥` `NEW`
1. [母亲去世后被结婚女儿将和舅舅见面](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%8E%BB%E4%B8%96%E5%90%8E%E8%A2%AB%E7%BB%93%E5%A9%9A%E5%A5%B3%E5%84%BF%E5%B0%86%E5%92%8C%E8%88%85%E8%88%85%E8%A7%81%E9%9D%A2%23) `145.8K 🔥` `NEW`
1. [吴谦这段发言的含金量还在上升](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A6%E8%BF%99%E6%AE%B5%E5%8F%91%E8%A8%80%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `145.7K 🔥` `NEW`
1. [A股三大指数同步高开](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%89%E5%A4%A7%E6%8C%87%E6%95%B0%E5%90%8C%E6%AD%A5%E9%AB%98%E5%BC%80%23) `145.7K 🔥` `NEW`
1. [青岛大姨5小时挖蛏近百斤](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E5%A4%A7%E5%A7%A85%E5%B0%8F%E6%97%B6%E6%8C%96%E8%9B%8F%E8%BF%91%E7%99%BE%E6%96%A4%23) `145.7K 🔥` `NEW`
1. [宋丹丹让孙子重新演一遍接机](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%B8%B9%E4%B8%B9%E8%AE%A9%E5%AD%99%E5%AD%90%E9%87%8D%E6%96%B0%E6%BC%94%E4%B8%80%E9%81%8D%E6%8E%A5%E6%9C%BA%23) `145.7K 🔥` `NEW`
1. [父母不应该与孩子分享的事情belike](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E4%B8%8D%E5%BA%94%E8%AF%A5%E4%B8%8E%E5%AD%A9%E5%AD%90%E5%88%86%E4%BA%AB%E7%9A%84%E4%BA%8B%E6%83%85belike%23) `145.6K 🔥` `NEW`
1. [带腊肉去学校不好意思吃怎么克服](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E8%85%8A%E8%82%89%E5%8E%BB%E5%AD%A6%E6%A0%A1%E4%B8%8D%E5%A5%BD%E6%84%8F%E6%80%9D%E5%90%83%E6%80%8E%E4%B9%88%E5%85%8B%E6%9C%8D%23) `145.5K 🔥` `NEW`
1. [鹿晗元宵节撕拉片](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%85%83%E5%AE%B5%E8%8A%82%E6%92%95%E6%8B%89%E7%89%87%23) `145.3K 🔥` `NEW`
1. [晕碳水这个词是谁发明的 (Who invented the term carbs?)](https://s.weibo.com/weibo?q=%23%E6%99%95%E7%A2%B3%E6%B0%B4%E8%BF%99%E4%B8%AA%E8%AF%8D%E6%98%AF%E8%B0%81%E5%8F%91%E6%98%8E%E7%9A%84%23) `145.2K 🔥` `NEW`
1. [地铁上最夯的位置](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E4%B8%8A%E6%9C%80%E5%A4%AF%E7%9A%84%E4%BD%8D%E7%BD%AE%23) `258.9K 🔥` `+28%`
1. [A股 (A shares)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `247.4K 🔥` `+23%`
1. [胡彦斌只一味吃汤圆](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E5%8F%AA%E4%B8%80%E5%91%B3%E5%90%83%E6%B1%A4%E5%9C%86%23) `243.4K 🔥` `+21%`
1. [谢娜喊话薛之谦 (Xie Na shouts to Joker Xue)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%96%8A%E8%AF%9D%E8%96%9B%E4%B9%8B%E8%B0%A6%23) `6.5M 🔥`
1. [越来越多国家被卷入中东冲突](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E5%9B%BD%E5%AE%B6%E8%A2%AB%E5%8D%B7%E5%85%A5%E4%B8%AD%E4%B8%9C%E5%86%B2%E7%AA%81%23) `1.1M 🔥`
1. [油价调整](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E8%B0%83%E6%95%B4%23) `829.6K 🔥`
1. [90秒看懂全国两会重要知识点](https://s.weibo.com/weibo?q=%2390%E7%A7%92%E7%9C%8B%E6%87%82%E5%85%A8%E5%9B%BD%E4%B8%A4%E4%BC%9A%E9%87%8D%E8%A6%81%E7%9F%A5%E8%AF%86%E7%82%B9%23) `643.7K 🔥`
1. [刘文祥麻辣烫暂停新合作](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E9%BA%BB%E8%BE%A3%E7%83%AB%E6%9A%82%E5%81%9C%E6%96%B0%E5%90%88%E4%BD%9C%23) `425.8K 🔥`
1. [iPhone17只用一个月橙色变粉色](https://s.weibo.com/weibo?q=%23iPhone17%E5%8F%AA%E7%94%A8%E4%B8%80%E4%B8%AA%E6%9C%88%E6%A9%99%E8%89%B2%E5%8F%98%E7%B2%89%E8%89%B2%23) `375.2K 🔥`
1. [多方回应女子去世后被嫁弟弟](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E5%8E%BB%E4%B8%96%E5%90%8E%E8%A2%AB%E5%AB%81%E5%BC%9F%E5%BC%9F%23) `262.3K 🔥`
1. [男子下高速显示费用8万多震惊收费员](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8B%E9%AB%98%E9%80%9F%E6%98%BE%E7%A4%BA%E8%B4%B9%E7%94%A88%E4%B8%87%E5%A4%9A%E9%9C%87%E6%83%8A%E6%94%B6%E8%B4%B9%E5%91%98%23) `256.6K 🔥`
1. [郑恺回村也不能撕baby (Even if Zheng Kai returns to the village, he can’t tear the baby apart)](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E5%9B%9E%E6%9D%91%E4%B9%9F%E4%B8%8D%E8%83%BD%E6%92%95baby%23) `204.9K 🔥`
1. [元宵节 (Lantern Festival)](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%B5%E8%8A%82%23) `188.8K 🔥`
1. [朴信惠被曝涉嫌逃税](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E4%BF%A1%E6%83%A0%E8%A2%AB%E6%9B%9D%E6%B6%89%E5%AB%8C%E9%80%83%E7%A8%8E%23) `188.8K 🔥`
1. [无情报证明伊朗计划先袭击美军](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%83%85%E6%8A%A5%E8%AF%81%E6%98%8E%E4%BC%8A%E6%9C%97%E8%AE%A1%E5%88%92%E5%85%88%E8%A2%AD%E5%87%BB%E7%BE%8E%E5%86%9B%23) `174.8K 🔥`
1. [红果停了很多项目](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%81%9C%E4%BA%86%E5%BE%88%E5%A4%9A%E9%A1%B9%E7%9B%AE%23) `169.5K 🔥`
1. [伊朗发布袭击美军基地画面 (Iran releases footage of attack on US military base)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B8%83%E8%A2%AD%E5%87%BB%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%E7%94%BB%E9%9D%A2%23) `239.0K 🔥` `-50%`
1. [苏炳添QQ意外曝光 (Su Bingtian QQ accidentally exposed)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%82%B3%E6%B7%BBQQ%E6%84%8F%E5%A4%96%E6%9B%9D%E5%85%89%23) `148.2K 🔥` `-27%`
1. [杨幂说自己有老人味](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%AF%B4%E8%87%AA%E5%B7%B1%E6%9C%89%E8%80%81%E4%BA%BA%E5%91%B3%23) `147.6K 🔥` `-27%`
1. [种地吧4开工直播 (Farming Bar 4 starts live broadcast)](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A74%E5%BC%80%E5%B7%A5%E7%9B%B4%E6%92%AD%23) `146.3K 🔥` `-37%`
1. [台湾热议台胞证能救命](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E7%83%AD%E8%AE%AE%E5%8F%B0%E8%83%9E%E8%AF%81%E8%83%BD%E6%95%91%E5%91%BD%23) `146.1K 🔥` `-27%`
1. [倪萍怒怼李诚儒](https://s.weibo.com/weibo?q=%23%E5%80%AA%E8%90%8D%E6%80%92%E6%80%BC%E6%9D%8E%E8%AF%9A%E5%84%92%23) `145.6K 🔥` `-30%`
1. [孟子义李昀锐跳overdrive](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E8%B7%B3overdrive%23) `145.5K 🔥` `-28%`
1. [汤圆](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%9C%86%23) `145.5K 🔥` `-28%`
1. [光与夜之恋 (Love of light and night)](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `145.4K 🔥` `-28%`
1. [凤凰传奇抢票](https://s.weibo.com/weibo?q=%23%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%E6%8A%A2%E7%A5%A8%23) `145.4K 🔥` `-28%`
1. [建议加强落实双休制度 (It is recommended to strengthen the implementation of the weekend system)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%8A%A0%E5%BC%BA%E8%90%BD%E5%AE%9E%E5%8F%8C%E4%BC%91%E5%88%B6%E5%BA%A6%23) `145.3K 🔥` `-28%`
1. [小猫竟然真会用给它缝的枕头 (The kitten actually knows how to use the pillow sewn for it)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%AB%9F%E7%84%B6%E7%9C%9F%E4%BC%9A%E7%94%A8%E7%BB%99%E5%AE%83%E7%BC%9D%E7%9A%84%E6%9E%95%E5%A4%B4%23) `145.3K 🔥` `-28%`
1. [谭松韵董晴 真闺蜜二搭 (Tan Songyun and Dong Qing, the second pair of true besties)](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E8%91%A3%E6%99%B4%20%E7%9C%9F%E9%97%BA%E8%9C%9C%E4%BA%8C%E6%90%AD%23) `145.2K 🔥` `-28%`
1. [有人考公雇人大量虚假报名吓走对手](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E8%80%83%E5%85%AC%E9%9B%87%E4%BA%BA%E5%A4%A7%E9%87%8F%E8%99%9A%E5%81%87%E6%8A%A5%E5%90%8D%E5%90%93%E8%B5%B0%E5%AF%B9%E6%89%8B%23) `145.1K 🔥` `-28%`

Updated at 2026-03-03 14:30:40

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
