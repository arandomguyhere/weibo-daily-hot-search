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

1. [闫闯退赛 (Yan Chuang withdrew from the competition)](https://s.weibo.com/weibo?q=%23%E9%97%AB%E9%97%AF%E9%80%80%E8%B5%9B%23) `1.2M 🔥` `NEW`
1. [西班牙21次犯规零牌](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%9921%E6%AC%A1%E7%8A%AF%E8%A7%84%E9%9B%B6%E7%89%8C%23) `575.7K 🔥` `NEW`
1. [周深12年首次出道日开演唱会](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B112%E5%B9%B4%E9%A6%96%E6%AC%A1%E5%87%BA%E9%81%93%E6%97%A5%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `487.1K 🔥` `NEW`
1. [TheShy力竭了](https://s.weibo.com/weibo?q=%23TheShy%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `479.6K 🔥` `NEW`
1. [阿凡提扮演者吐依贡去世](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%87%A1%E6%8F%90%E6%89%AE%E6%BC%94%E8%80%85%E5%90%90%E4%BE%9D%E8%B4%A1%E5%8E%BB%E4%B8%96%23) `416.4K 🔥` `NEW`
1. [迪丽热巴还有三部待播作品](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%98%E6%9C%89%E4%B8%89%E9%83%A8%E5%BE%85%E6%92%AD%E4%BD%9C%E5%93%81%23) `395.7K 🔥` `NEW`
1. [台风红霞对我国的影响](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%E5%AF%B9%E6%88%91%E5%9B%BD%E7%9A%84%E5%BD%B1%E5%93%8D%23) `391.9K 🔥` `NEW`
1. [广东三地宣布五停](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%B8%89%E5%9C%B0%E5%AE%A3%E5%B8%83%E4%BA%94%E5%81%9C%23) `391.6K 🔥` `NEW`
1. [杭州不少人听到一声巨响](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%B8%8D%E5%B0%91%E4%BA%BA%E5%90%AC%E5%88%B0%E4%B8%80%E5%A3%B0%E5%B7%A8%E5%93%8D%23) `391.4K 🔥` `NEW`
1. [朱志鑫黄海闪耀青岛](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E9%BB%84%E6%B5%B7%E9%97%AA%E8%80%80%E9%9D%92%E5%B2%9B%23) `390.8K 🔥` `NEW`
1. [苏新皓红海 (Su Xinhao Red Sea)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E7%BA%A2%E6%B5%B7%23) `390.3K 🔥` `NEW`
1. [正颌手术做反了女孩说迎接她的是毁灭](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E9%A2%8C%E6%89%8B%E6%9C%AF%E5%81%9A%E5%8F%8D%E4%BA%86%E5%A5%B3%E5%AD%A9%E8%AF%B4%E8%BF%8E%E6%8E%A5%E5%A5%B9%E7%9A%84%E6%98%AF%E6%AF%81%E7%81%AD%23) `390.1K 🔥` `NEW`
1. [严浩翔看到王一珩淘汰的表情](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9C%8B%E5%88%B0%E7%8E%8B%E4%B8%80%E7%8F%A9%E6%B7%98%E6%B1%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `389.9K 🔥` `NEW`
1. [王楚然确认常驻现在就出发4](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%A1%AE%E8%AE%A4%E5%B8%B8%E9%A9%BB%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `389.6K 🔥` `NEW`
1. [中国女排vs土耳其女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E5%9C%9F%E8%80%B3%E5%85%B6%E5%A5%B3%E6%8E%92%23) `375.0K 🔥` `NEW`
1. [两大存储芯片巨头股价大跌](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A4%A7%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E5%B7%A8%E5%A4%B4%E8%82%A1%E4%BB%B7%E5%A4%A7%E8%B7%8C%23) `374.8K 🔥` `NEW`
1. [王一博试车直播中给摩托姐姐镜头](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%AF%95%E8%BD%A6%E7%9B%B4%E6%92%AD%E4%B8%AD%E7%BB%99%E6%91%A9%E6%89%98%E5%A7%90%E5%A7%90%E9%95%9C%E5%A4%B4%23) `374.7K 🔥` `NEW`
1. [王俊凯工作室问今天没有演唱会么](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%97%AE%E4%BB%8A%E5%A4%A9%E6%B2%A1%E6%9C%89%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B9%88%23) `361.7K 🔥` `NEW`
1. [鹿晗gapday音乐节](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97gapday%E9%9F%B3%E4%B9%90%E8%8A%82%23) `349.3K 🔥` `NEW`
1. [侯明昊演唱会](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%BC%94%E5%94%B1%E4%BC%9A%23) `280.7K 🔥` `NEW`
1. [王虹曾在烫伤治疗期间靠自学跳级 (Wang Hong once skipped a grade through self-study while being treated for burns.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E6%9B%BE%E5%9C%A8%E7%83%AB%E4%BC%A4%E6%B2%BB%E7%96%97%E6%9C%9F%E9%97%B4%E9%9D%A0%E8%87%AA%E5%AD%A6%E8%B7%B3%E7%BA%A7%23) `254.3K 🔥` `NEW`
1. [中方数量对等反制欧盟](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E6%95%B0%E9%87%8F%E5%AF%B9%E7%AD%89%E5%8F%8D%E5%88%B6%E6%AC%A7%E7%9B%9F%23) `254.1K 🔥` `NEW`
1. [柳智敏waterbomb](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8Fwaterbomb%23) `254.1K 🔥` `NEW`
1. [王橹杰古早味自拍](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%8F%A4%E6%97%A9%E5%91%B3%E8%87%AA%E6%8B%8D%23) `217.6K 🔥` `NEW`
1. [7.9元包邮手机壳被荣耀索赔38万](https://s.weibo.com/weibo?q=%237.9%E5%85%83%E5%8C%85%E9%82%AE%E6%89%8B%E6%9C%BA%E5%A3%B3%E8%A2%AB%E8%8D%A3%E8%80%80%E7%B4%A2%E8%B5%9438%E4%B8%87%23) `213.5K 🔥` `NEW`
1. [虞书欣沈月做的菜单](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%B2%88%E6%9C%88%E5%81%9A%E7%9A%84%E8%8F%9C%E5%8D%95%23) `213.3K 🔥` `NEW`
1. [感觉在北方吃面要提前做好功课](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E5%9C%A8%E5%8C%97%E6%96%B9%E5%90%83%E9%9D%A2%E8%A6%81%E6%8F%90%E5%89%8D%E5%81%9A%E5%A5%BD%E5%8A%9F%E8%AF%BE%23) `209.7K 🔥` `NEW`
1. [ChatGPT也不爱打工只想睡觉吗](https://s.weibo.com/weibo?q=%23ChatGPT%E4%B9%9F%E4%B8%8D%E7%88%B1%E6%89%93%E5%B7%A5%E5%8F%AA%E6%83%B3%E7%9D%A1%E8%A7%89%E5%90%97%23) `204.2K 🔥` `NEW`
1. [iG对战WBG](https://s.weibo.com/weibo?q=%23iG%E5%AF%B9%E6%88%98WBG%23) `397.6K 🔥` `+143%`
1. [深圳地铁](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%9C%B0%E9%93%81%23) `393.3K 🔥` `+26%`
1. [卸载就卸载什么叫残忍卸载 (Uninstall, just uninstall. What is cruel uninstall?)](https://s.weibo.com/weibo?q=%23%E5%8D%B8%E8%BD%BD%E5%B0%B1%E5%8D%B8%E8%BD%BD%E4%BB%80%E4%B9%88%E5%8F%AB%E6%AE%8B%E5%BF%8D%E5%8D%B8%E8%BD%BD%23) `393.2K 🔥` `+23%`
1. [韩国存储双雄9500亿美元大单](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%AD%98%E5%82%A8%E5%8F%8C%E9%9B%849500%E4%BA%BF%E7%BE%8E%E5%85%83%E5%A4%A7%E5%8D%95%23) `392.1K 🔥` `+90%`
1. [为什么携程被罚最重](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A%E6%9C%80%E9%87%8D%23) `390.9K 🔥` `+61%`
1. [小猫被自己的脚臭到震惊](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%9A%84%E8%84%9A%E8%87%AD%E5%88%B0%E9%9C%87%E6%83%8A%23) `305.4K 🔥` `+27%`
1. [小猫咬主人然后被她妈妈教育了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%92%AC%E4%B8%BB%E4%BA%BA%E7%84%B6%E5%90%8E%E8%A2%AB%E5%A5%B9%E5%A6%88%E5%A6%88%E6%95%99%E8%82%B2%E4%BA%86%23) `265.4K 🔥` `+38%`
1. [共赴亚太数字之约](https://s.weibo.com/weibo?q=%23%E5%85%B1%E8%B5%B4%E4%BA%9A%E5%A4%AA%E6%95%B0%E5%AD%97%E4%B9%8B%E7%BA%A6%23) `666.9K 🔥`
1. [郁可唯为奕派M8车主交付](https://s.weibo.com/weibo?q=%23%E9%83%81%E5%8F%AF%E5%94%AF%E4%B8%BA%E5%A5%95%E6%B4%BEM8%E8%BD%A6%E4%B8%BB%E4%BA%A4%E4%BB%98%23) `631.3K 🔥`
1. [广州台风](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%8F%B0%E9%A3%8E%23) `486.6K 🔥`
1. [李权哲高铁占座](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9D%83%E5%93%B2%E9%AB%98%E9%93%81%E5%8D%A0%E5%BA%A7%23) `396.4K 🔥`
1. [王玉雯勇敢的人先毛细血管破裂](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%8B%87%E6%95%A2%E7%9A%84%E4%BA%BA%E5%85%88%E6%AF%9B%E7%BB%86%E8%A1%80%E7%AE%A1%E7%A0%B4%E8%A3%82%23) `368.8K 🔥`
1. [王楚钦爆冷不敌张煜东 (Wang Chuqin lost to Zhang Yudong in an upset)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%88%86%E5%86%B7%E4%B8%8D%E6%95%8C%E5%BC%A0%E7%85%9C%E4%B8%9C%23) `362.7K 🔥`
1. [杨幂江山大同杀青照](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%E6%9D%80%E9%9D%92%E7%85%A7%23) `272.2K 🔥`
1. [一枝南南把易梦玲化成虞书欣了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9E%9D%E5%8D%97%E5%8D%97%E6%8A%8A%E6%98%93%E6%A2%A6%E7%8E%B2%E5%8C%96%E6%88%90%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BA%86%23) `259.3K 🔥`
1. [ChatGPT崩了](https://s.weibo.com/weibo?q=%23ChatGPT%E5%B4%A9%E4%BA%86%23) `207.9K 🔥`
1. [携程](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%23) `206.1K 🔥`
1. [台风红霞 (Typhoon Hongxia)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%23) `862.5K 🔥` `-35%`
1. [携程被罚51.79亿 (Ctrip was fined 5.179 billion)](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A51.79%E4%BA%BF%23) `498.6K 🔥` `-45%`
1. [孙女的微信状态只有爷爷当真了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%A5%B3%E7%9A%84%E5%BE%AE%E4%BF%A1%E7%8A%B6%E6%80%81%E5%8F%AA%E6%9C%89%E7%88%B7%E7%88%B7%E5%BD%93%E7%9C%9F%E4%BA%86%23) `495.8K 🔥` `-34%`
1. [孔雪儿一个人努力好心酸](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%8A%AA%E5%8A%9B%E5%A5%BD%E5%BF%83%E9%85%B8%23) `392.9K 🔥` `-46%`
1. [张雅琪做的菜单](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%81%9A%E7%9A%84%E8%8F%9C%E5%8D%95%23) `392.6K 🔥` `-36%`
1. [现在就出发4即将开录](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%E5%8D%B3%E5%B0%86%E5%BC%80%E5%BD%95%23) `376.8K 🔥` `-35%`
1. [TOP青岛演唱会](https://s.weibo.com/weibo?q=%23TOP%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `210.8K 🔥` `-33%`

Updated at 2026-07-25 19:49:11

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
