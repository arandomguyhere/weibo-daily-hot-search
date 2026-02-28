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

1. [伊朗的导弹雨正在路上 (Iran's missile rain is on its way)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E5%AF%BC%E5%BC%B9%E9%9B%A8%E6%AD%A3%E5%9C%A8%E8%B7%AF%E4%B8%8A%23) `147.0K 🔥` `NEW`
1. [伊朗总统之子发声](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E4%B9%8B%E5%AD%90%E5%8F%91%E5%A3%B0%23) `146.2K 🔥` `NEW`
1. [镖人 贺图](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E8%B4%BA%E5%9B%BE%23) `101.9K 🔥` `NEW`
1. [公认是烂片你却很喜欢的电影](https://s.weibo.com/weibo?q=%23%E5%85%AC%E8%AE%A4%E6%98%AF%E7%83%82%E7%89%87%E4%BD%A0%E5%8D%B4%E5%BE%88%E5%96%9C%E6%AC%A2%E7%9A%84%E7%94%B5%E5%BD%B1%23) `99.9K 🔥` `NEW`
1. [孙颖莎vs早田希娜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%23) `97.5K 🔥` `NEW`
1. [陈熠4比0陈幸同 (Chen Yi 4 to 0 Chen Xingtong)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%86%A04%E6%AF%940%E9%99%88%E5%B9%B8%E5%90%8C%23) `771.4K 🔥` `+46%`
1. [大熊猫半半香果离世](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%8D%8A%E5%8D%8A%E9%A6%99%E6%9E%9C%E7%A6%BB%E4%B8%96%23) `650.0K 🔥` `+21%`
1. [小米YU9 (Xiaomi YU9)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU9%23) `634.0K 🔥` `+266%`
1. [一点点 植脂末](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E7%82%B9%20%E6%A4%8D%E8%84%82%E6%9C%AB%23) `628.3K 🔥` `+177%`
1. [TOP专辑 (TOP album)](https://s.weibo.com/weibo?q=%23TOP%E4%B8%93%E8%BE%91%23) `308.0K 🔥` `+36%`
1. [Demna开启Gucci全新时代 (Demna opens a new era for Gucci)](https://s.weibo.com/weibo?q=%23Demna%E5%BC%80%E5%90%AFGucci%E5%85%A8%E6%96%B0%E6%97%B6%E4%BB%A3%23) `287.1K 🔥` `+22%`
1. [网传跑男铁了心要国民cp](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%B7%91%E7%94%B7%E9%93%81%E4%BA%86%E5%BF%83%E8%A6%81%E5%9B%BD%E6%B0%91cp%23) `287.0K 🔥` `+26%`
1. [伊朗一学校5名学生遇袭身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%AD%A6%E6%A0%A15%E5%90%8D%E5%AD%A6%E7%94%9F%E9%81%87%E8%A2%AD%E8%BA%AB%E4%BA%A1%23) `285.6K 🔥` `+23%`
1. [伊朗公告发5点提醒](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%91%8A%E5%8F%915%E7%82%B9%E6%8F%90%E9%86%92%23) `153.2K 🔥` `+33%`
1. [女孩天生爱笑被确诊为天使综合征 (Girl who loves to laugh naturally is diagnosed with Angelman syndrome)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%A4%A9%E7%94%9F%E7%88%B1%E7%AC%91%E8%A2%AB%E7%A1%AE%E8%AF%8A%E4%B8%BA%E5%A4%A9%E4%BD%BF%E7%BB%BC%E5%90%88%E5%BE%81%23) `149.5K 🔥` `+23%`
1. [以色列宣布袭击伊朗 (Israel announces attack on Iran)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%AE%A3%E5%B8%83%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%23) `5.9M 🔥`
1. [山姆520元巧克力降到99元 (Sam’s 520 yuan chocolate reduced to 99 yuan)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86520%E5%85%83%E5%B7%A7%E5%85%8B%E5%8A%9B%E9%99%8D%E5%88%B099%E5%85%83%23) `1.4M 🔥`
1. [2025我国完成92次宇航发射 (my country completed 92 space launches in 2025)](https://s.weibo.com/weibo?q=%232025%E6%88%91%E5%9B%BD%E5%AE%8C%E6%88%9092%E6%AC%A1%E5%AE%87%E8%88%AA%E5%8F%91%E5%B0%84%23) `1.2M 🔥`
1. [伊朗正在打击美国军事基地 (Iran is attacking US military bases)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A3%E5%9C%A8%E6%89%93%E5%87%BB%E7%BE%8E%E5%9B%BD%E5%86%9B%E4%BA%8B%E5%9F%BA%E5%9C%B0%23) `911.9K 🔥`
1. [伊朗一小学遭袭40人死48人伤 (Attack on primary school in Iran kills 40, injures 48)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%B0%8F%E5%AD%A6%E9%81%AD%E8%A2%AD40%E4%BA%BA%E6%AD%BB48%E4%BA%BA%E4%BC%A4%23) `656.7K 🔥`
1. [美颜突然关掉吓得人一哆嗦](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%A2%9C%E7%AA%81%E7%84%B6%E5%85%B3%E6%8E%89%E5%90%93%E5%BE%97%E4%BA%BA%E4%B8%80%E5%93%86%E5%97%A6%23) `641.6K 🔥`
1. [椰树广告 擦边](https://s.weibo.com/weibo?q=%23%E6%A4%B0%E6%A0%91%E5%B9%BF%E5%91%8A%20%E6%93%A6%E8%BE%B9%23) `621.2K 🔥`
1. [伊朗启动大规模军事行动 (Iran launches large-scale military operation)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%AF%E5%8A%A8%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%86%9B%E4%BA%8B%E8%A1%8C%E5%8A%A8%23) `616.2K 🔥`
1. [何凯文英语分数](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%87%AF%E6%96%87%E8%8B%B1%E8%AF%AD%E5%88%86%E6%95%B0%23) `593.0K 🔥`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `552.5K 🔥`
1. [伊朗军方称总司令身体健康 (Iran's military says commander-in-chief is in good health)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%9B%E6%96%B9%E7%A7%B0%E6%80%BB%E5%8F%B8%E4%BB%A4%E8%BA%AB%E4%BD%93%E5%81%A5%E5%BA%B7%23) `418.8K 🔥`
1. [李治廷 十日终焉 (Li Zhiting The End of Ten Days)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%BB%E5%BB%B7%20%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `386.9K 🔥`
1. [伊朗袭击科威特美军基地 (Iran attacks US military base in Kuwait)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E7%A7%91%E5%A8%81%E7%89%B9%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `382.5K 🔥`
1. [前额叶损伤](https://s.weibo.com/weibo?q=%23%E5%89%8D%E9%A2%9D%E5%8F%B6%E6%8D%9F%E4%BC%A4%23) `291.0K 🔥`
1. [Angelababy紫瞳 (Angelababy purple pupil)](https://s.weibo.com/weibo?q=%23Angelababy%E7%B4%AB%E7%9E%B3%23) `191.1K 🔥`
1. [赛琳娜力挺老公 (Selena supports her husband)](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E7%90%B3%E5%A8%9C%E5%8A%9B%E6%8C%BA%E8%80%81%E5%85%AC%23) `168.9K 🔥`
1. [伊朗又一轮导弹射向以色列 (Iran fires another round of missiles at Israel)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%88%E4%B8%80%E8%BD%AE%E5%AF%BC%E5%BC%B9%E5%B0%84%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%23) `164.0K 🔥`
1. [TOP和谷爱凌合照](https://s.weibo.com/weibo?q=%23TOP%E5%92%8C%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%88%E7%85%A7%23) `154.0K 🔥`
1. [买3条金项链一夜赚超2.3万元](https://s.weibo.com/weibo?q=%23%E4%B9%B03%E6%9D%A1%E9%87%91%E9%A1%B9%E9%93%BE%E4%B8%80%E5%A4%9C%E8%B5%9A%E8%B6%852.3%E4%B8%87%E5%85%83%23) `152.0K 🔥`
1. [曝迪丽热巴签约天伊娱乐 (It is revealed that Dilireba signed a contract with Tianyi Entertainment)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AD%BE%E7%BA%A6%E5%A4%A9%E4%BC%8A%E5%A8%B1%E4%B9%90%23) `146.4K 🔥`
1. [曝初瑞雪怀孕](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%9D%E7%91%9E%E9%9B%AA%E6%80%80%E5%AD%95%23) `145.8K 🔥`
1. [秀禾服 婚服营销](https://s.weibo.com/weibo?q=%23%E7%A7%80%E7%A6%BE%E6%9C%8D%20%E5%A9%9A%E6%9C%8D%E8%90%A5%E9%94%80%23) `143.9K 🔥`
1. [我家那小子 (That boy of mine)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%23) `138.5K 🔥`
1. [孟子义李昀锐综艺 (Meng Ziyi and Li Yunrui variety show)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E7%BB%BC%E8%89%BA%23) `135.1K 🔥`
1. [伊朗正准备毁灭性报复行动 (Iran is preparing devastating retaliation)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A3%E5%87%86%E5%A4%87%E6%AF%81%E7%81%AD%E6%80%A7%E6%8A%A5%E5%A4%8D%E8%A1%8C%E5%8A%A8%23) `128.1K 🔥`
1. [花海教练](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7%E6%95%99%E7%BB%83%23) `126.9K 🔥`
1. [纯真年代的爱情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `119.0K 🔥`
1. [美国太空部队前往伊朗行动](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%AA%E7%A9%BA%E9%83%A8%E9%98%9F%E5%89%8D%E5%BE%80%E4%BC%8A%E6%9C%97%E8%A1%8C%E5%8A%A8%23) `110.0K 🔥`
1. [杨博文抽抽乐](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E6%8A%BD%E6%8A%BD%E4%B9%90%23) `109.7K 🔥`
1. [小米YU7GT无伪装车谍照曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%E6%97%A0%E4%BC%AA%E8%A3%85%E8%BD%A6%E8%B0%8D%E7%85%A7%E6%9B%9D%E5%85%89%23) `106.1K 🔥`
1. [杭州两家动物园闭馆整改](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%B8%A4%E5%AE%B6%E5%8A%A8%E7%89%A9%E5%9B%AD%E9%97%AD%E9%A6%86%E6%95%B4%E6%94%B9%23) `101.6K 🔥`
1. [无畏赵怀真辅助](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E8%B5%B5%E6%80%80%E7%9C%9F%E8%BE%85%E5%8A%A9%23) `101.4K 🔥`
1. [突然对1g黄金没概念了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%AF%B91g%E9%BB%84%E9%87%91%E6%B2%A1%E6%A6%82%E5%BF%B5%E4%BA%86%23) `199.2K 🔥` `-26%`
1. [王楚钦好好好我不挑战了 (Wang Chuqin, okay, okay, I won’t challenge you anymore)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A5%BD%E5%A5%BD%E5%A5%BD%E6%88%91%E4%B8%8D%E6%8C%91%E6%88%98%E4%BA%86%23) `97.1K 🔥` `-38%`

Updated at 2026-02-28 19:59:47

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
