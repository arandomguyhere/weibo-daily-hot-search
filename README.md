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

1. [苏新皓囍神级solo (Su Xinhao's god-level solo)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%9B%8D%E7%A5%9E%E7%BA%A7solo%23) `657.0K 🔥` `NEW`
1. [奇瑞风云A9正式上市](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E%E9%A3%8E%E4%BA%91A9%E6%AD%A3%E5%BC%8F%E4%B8%8A%E5%B8%82%23) `653.4K 🔥` `NEW`
1. [王楚钦vs向鹏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%90%91%E9%B9%8F%23) `617.4K 🔥` `NEW`
1. [AG锁第三轮S组](https://s.weibo.com/weibo?q=%23AG%E9%94%81%E7%AC%AC%E4%B8%89%E8%BD%AES%E7%BB%84%23) `500.5K 🔥` `NEW`
1. [王楚钦2比1向鹏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A62%E6%AF%941%E5%90%91%E9%B9%8F%23) `372.8K 🔥` `NEW`
1. [LV起诉厦门一楼盘四叶雕花侵权](https://s.weibo.com/weibo?q=%23LV%E8%B5%B7%E8%AF%89%E5%8E%A6%E9%97%A8%E4%B8%80%E6%A5%BC%E7%9B%98%E5%9B%9B%E5%8F%B6%E9%9B%95%E8%8A%B1%E4%BE%B5%E6%9D%83%23) `371.7K 🔥` `NEW`
1. [黄灿灿370元做的丑美甲](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF370%E5%85%83%E5%81%9A%E7%9A%84%E4%B8%91%E7%BE%8E%E7%94%B2%23) `370.0K 🔥` `NEW`
1. [李权哲方回应高铁占座](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9D%83%E5%93%B2%E6%96%B9%E5%9B%9E%E5%BA%94%E9%AB%98%E9%93%81%E5%8D%A0%E5%BA%A7%23) `368.0K 🔥` `NEW`
1. [苏新皓送给朱志鑫戒指](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E9%80%81%E7%BB%99%E6%9C%B1%E5%BF%97%E9%91%AB%E6%88%92%E6%8C%87%23) `367.1K 🔥` `NEW`
1. [日本确认南鸟岛海泥含中重稀土](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%A1%AE%E8%AE%A4%E5%8D%97%E9%B8%9F%E5%B2%9B%E6%B5%B7%E6%B3%A5%E5%90%AB%E4%B8%AD%E9%87%8D%E7%A8%80%E5%9C%9F%23) `364.9K 🔥` `NEW`
1. [张泽禹唢呐一响头皮发麻 (Zhang Zeyu's scalp went numb when the suona sounded.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%BD%E7%A6%B9%E5%94%A2%E5%91%90%E4%B8%80%E5%93%8D%E5%A4%B4%E7%9A%AE%E5%8F%91%E9%BA%BB%23) `356.5K 🔥` `NEW`
1. [iG战胜WBG](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CWBG%23) `350.8K 🔥` `NEW`
1. [退钱哥在美国40几天瘦脱相](https://s.weibo.com/weibo?q=%23%E9%80%80%E9%92%B1%E5%93%A5%E5%9C%A8%E7%BE%8E%E5%9B%BD40%E5%87%A0%E5%A4%A9%E7%98%A6%E8%84%B1%E7%9B%B8%23) `346.3K 🔥` `NEW`
1. [老人穿内裤被困门外遭开锁坐地起价](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%A9%BF%E5%86%85%E8%A3%A4%E8%A2%AB%E5%9B%B0%E9%97%A8%E5%A4%96%E9%81%AD%E5%BC%80%E9%94%81%E5%9D%90%E5%9C%B0%E8%B5%B7%E4%BB%B7%23) `341.6K 🔥` `NEW`
1. [第二代身份证内部根本没有磁条](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%8C%E4%BB%A3%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%86%85%E9%83%A8%E6%A0%B9%E6%9C%AC%E6%B2%A1%E6%9C%89%E7%A3%81%E6%9D%A1%23) `340.5K 🔥` `NEW`
1. [台湾致癌油已查出约8000吨](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%87%B4%E7%99%8C%E6%B2%B9%E5%B7%B2%E6%9F%A5%E5%87%BA%E7%BA%A68000%E5%90%A8%23) `334.8K 🔥` `NEW`
1. [台风红霞即将登陆](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%E5%8D%B3%E5%B0%86%E7%99%BB%E9%99%86%23) `331.9K 🔥` `NEW`
1. [朱志鑫solo舞台](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABsolo%E8%88%9E%E5%8F%B0%23) `330.2K 🔥` `NEW`
1. [明日方舟直播](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E7%9B%B4%E6%92%AD%23) `314.1K 🔥` `NEW`
1. [谢霆锋演唱会状态](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8A%B6%E6%80%81%23) `283.7K 🔥` `NEW`
1. [申遗成功所有景德镇陶瓷人都沸腾了 (All Jingdezhen ceramics people are excited after the application for World Heritage was successful.)](https://s.weibo.com/weibo?q=%23%E7%94%B3%E9%81%97%E6%88%90%E5%8A%9F%E6%89%80%E6%9C%89%E6%99%AF%E5%BE%B7%E9%95%87%E9%99%B6%E7%93%B7%E4%BA%BA%E9%83%BD%E6%B2%B8%E8%85%BE%E4%BA%86%23) `277.0K 🔥` `NEW`
1. [房主任因为分户问题崩溃](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E5%9B%A0%E4%B8%BA%E5%88%86%E6%88%B7%E9%97%AE%E9%A2%98%E5%B4%A9%E6%BA%83%23) `263.6K 🔥` `NEW`
1. [TOP竞速游戏](https://s.weibo.com/weibo?q=%23TOP%E7%AB%9E%E9%80%9F%E6%B8%B8%E6%88%8F%23) `255.7K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `209.8K 🔥` `NEW`
1. [小S带妈妈来上海散心](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%B8%A6%E5%A6%88%E5%A6%88%E6%9D%A5%E4%B8%8A%E6%B5%B7%E6%95%A3%E5%BF%83%23) `185.9K 🔥` `NEW`
1. [西班牙21次犯规零牌](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%9921%E6%AC%A1%E7%8A%AF%E8%A7%84%E9%9B%B6%E7%89%8C%23) `880.1K 🔥` `+53%`
1. [孙女的微信状态只有爷爷当真了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%A5%B3%E7%9A%84%E5%BE%AE%E4%BF%A1%E7%8A%B6%E6%80%81%E5%8F%AA%E6%9C%89%E7%88%B7%E7%88%B7%E5%BD%93%E7%9C%9F%E4%BA%86%23) `776.5K 🔥` `+57%`
1. [严浩翔看到王一珩淘汰的表情](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9C%8B%E5%88%B0%E7%8E%8B%E4%B8%80%E7%8F%A9%E6%B7%98%E6%B1%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `759.6K 🔥` `+95%`
1. [中国女排vs土耳其女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E5%9C%9F%E8%80%B3%E5%85%B6%E5%A5%B3%E6%8E%92%23) `480.2K 🔥` `+28%`
1. [携程](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%23) `347.0K 🔥` `+68%`
1. [虞书欣沈月做的菜单 (Menu made by Yu Shuxin and Shen Yue)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%B2%88%E6%9C%88%E5%81%9A%E7%9A%84%E8%8F%9C%E5%8D%95%23) `313.1K 🔥` `+47%`
1. [闫闯退赛 (Yan Chuang withdrew from the competition)](https://s.weibo.com/weibo?q=%23%E9%97%AB%E9%97%AF%E9%80%80%E8%B5%9B%23) `1.2M 🔥`
1. [共赴亚太数字之约](https://s.weibo.com/weibo?q=%23%E5%85%B1%E8%B5%B4%E4%BA%9A%E5%A4%AA%E6%95%B0%E5%AD%97%E4%B9%8B%E7%BA%A6%23) `783.3K 🔥`
1. [李权哲高铁占座](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9D%83%E5%93%B2%E9%AB%98%E9%93%81%E5%8D%A0%E5%BA%A7%23) `370.7K 🔥`
1. [正颌手术做反了女孩说迎接她的是毁灭](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E9%A2%8C%E6%89%8B%E6%9C%AF%E5%81%9A%E5%8F%8D%E4%BA%86%E5%A5%B3%E5%AD%A9%E8%AF%B4%E8%BF%8E%E6%8E%A5%E5%A5%B9%E7%9A%84%E6%98%AF%E6%AF%81%E7%81%AD%23) `369.2K 🔥`
1. [为什么携程被罚最重](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A%E6%9C%80%E9%87%8D%23) `359.9K 🔥`
1. [孔雪儿一个人努力好心酸](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%8A%AA%E5%8A%9B%E5%A5%BD%E5%BF%83%E9%85%B8%23) `351.9K 🔥`
1. [鹿晗gapday音乐节](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97gapday%E9%9F%B3%E4%B9%90%E8%8A%82%23) `350.7K 🔥`
1. [迪丽热巴还有三部待播作品](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%98%E6%9C%89%E4%B8%89%E9%83%A8%E5%BE%85%E6%92%AD%E4%BD%9C%E5%93%81%23) `350.6K 🔥`
1. [王俊凯工作室问今天没有演唱会么](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%97%AE%E4%BB%8A%E5%A4%A9%E6%B2%A1%E6%9C%89%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B9%88%23) `338.2K 🔥`
1. [张雅琪做的菜单](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%81%9A%E7%9A%84%E8%8F%9C%E5%8D%95%23) `327.5K 🔥`
1. [侯明昊演唱会 (Hou Minghao concert)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%BC%94%E5%94%B1%E4%BC%9A%23) `225.0K 🔥`
1. [ChatGPT崩了](https://s.weibo.com/weibo?q=%23ChatGPT%E5%B4%A9%E4%BA%86%23) `191.3K 🔥`
1. [台风红霞 (Typhoon Hongxia)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%23) `372.9K 🔥` `-57%`
1. [携程被罚51.79亿 (Ctrip was fined 5.179 billion)](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A51.79%E4%BA%BF%23) `366.9K 🔥` `-26%`
1. [TheShy力竭了](https://s.weibo.com/weibo?q=%23TheShy%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `349.1K 🔥` `-27%`
1. [王一博试车直播中给摩托姐姐镜头](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%AF%95%E8%BD%A6%E7%9B%B4%E6%92%AD%E4%B8%AD%E7%BB%99%E6%91%A9%E6%89%98%E5%A7%90%E5%A7%90%E9%95%9C%E5%A4%B4%23) `287.8K 🔥` `-23%`
1. [广州台风](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%8F%B0%E9%A3%8E%23) `276.6K 🔥` `-43%`
1. [王楚然确认常驻现在就出发4](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%A1%AE%E8%AE%A4%E5%B8%B8%E9%A9%BB%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `263.3K 🔥` `-32%`
1. [韩国存储双雄9500亿美元大单](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%AD%98%E5%82%A8%E5%8F%8C%E9%9B%849500%E4%BA%BF%E7%BE%8E%E5%85%83%E5%A4%A7%E5%8D%95%23) `202.3K 🔥` `-48%`
1. [王玉雯勇敢的人先毛细血管破裂](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%8B%87%E6%95%A2%E7%9A%84%E4%BA%BA%E5%85%88%E6%AF%9B%E7%BB%86%E8%A1%80%E7%AE%A1%E7%A0%B4%E8%A3%82%23) `200.6K 🔥` `-46%`

Updated at 2026-07-25 20:51:02

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
