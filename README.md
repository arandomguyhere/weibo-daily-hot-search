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

1. [第一批戴运动手环的受害者出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%88%B4%E8%BF%90%E5%8A%A8%E6%89%8B%E7%8E%AF%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [1岁裸体男童沙漠走失12小时](https://s.weibo.com/weibo?q=%231%E5%B2%81%E8%A3%B8%E4%BD%93%E7%94%B7%E7%AB%A5%E6%B2%99%E6%BC%A0%E8%B5%B0%E5%A4%B112%E5%B0%8F%E6%97%B6%23) `872.7K 🔥` `NEW`
1. [以旧换新激活消费新动能](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E6%BF%80%E6%B4%BB%E6%B6%88%E8%B4%B9%E6%96%B0%E5%8A%A8%E8%83%BD%23) `636.9K 🔥` `NEW`
1. [启境GX7阔五座智能百变SUV](https://s.weibo.com/weibo?q=%23%E5%90%AF%E5%A2%83GX7%E9%98%94%E4%BA%94%E5%BA%A7%E6%99%BA%E8%83%BD%E7%99%BE%E5%8F%98SUV%23) `636.5K 🔥` `NEW`
1. [我好像突然对钱有了概念](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A5%BD%E5%83%8F%E7%AA%81%E7%84%B6%E5%AF%B9%E9%92%B1%E6%9C%89%E4%BA%86%E6%A6%82%E5%BF%B5%23) `632.9K 🔥` `NEW`
1. [女儿40除以5得出62看呆爸妈](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF40%E9%99%A4%E4%BB%A55%E5%BE%97%E5%87%BA62%E7%9C%8B%E5%91%86%E7%88%B8%E5%A6%88%23) `625.2K 🔥` `NEW`
1. [早春晴朗这尺度正片确实放不了](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E8%BF%99%E5%B0%BA%E5%BA%A6%E6%AD%A3%E7%89%87%E7%A1%AE%E5%AE%9E%E6%94%BE%E4%B8%8D%E4%BA%86%23) `581.0K 🔥` `NEW`
1. [刘昊然DRWU达尔肤品牌代言人](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6DRWU%E8%BE%BE%E5%B0%94%E8%82%A4%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `566.1K 🔥` `NEW`
1. [井柏然人气一夜之间回到十年前](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E4%BA%BA%E6%B0%94%E4%B8%80%E5%A4%9C%E4%B9%8B%E9%97%B4%E5%9B%9E%E5%88%B0%E5%8D%81%E5%B9%B4%E5%89%8D%23) `531.4K 🔥` `NEW`
1. [汤家凤呼吁取消英语主科地位](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%AE%B6%E5%87%A4%E5%91%BC%E5%90%81%E5%8F%96%E6%B6%88%E8%8B%B1%E8%AF%AD%E4%B8%BB%E7%A7%91%E5%9C%B0%E4%BD%8D%23) `450.2K 🔥` `NEW`
1. [张凌赫卢昱晓进组](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8D%A2%E6%98%B1%E6%99%93%E8%BF%9B%E7%BB%84%23) `412.0K 🔥` `NEW`
1. [花少2 母带](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%20%E6%AF%8D%E5%B8%A6%23) `336.9K 🔥` `NEW`
1. [剧本杀 色情服务](https://s.weibo.com/weibo?q=%23%E5%89%A7%E6%9C%AC%E6%9D%80%20%E8%89%B2%E6%83%85%E6%9C%8D%E5%8A%A1%23) `336.5K 🔥` `NEW`
1. [男子杀妻后水煮分装抛尸被判无期](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%A6%BB%E5%90%8E%E6%B0%B4%E7%85%AE%E5%88%86%E8%A3%85%E6%8A%9B%E5%B0%B8%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%23) `325.8K 🔥` `NEW`
1. [雪花牛肉疑似造假](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E8%8A%B1%E7%89%9B%E8%82%89%E7%96%91%E4%BC%BC%E9%80%A0%E5%81%87%23) `308.0K 🔥` `NEW`
1. [极限挑战六人重聚为何争议重重](https://s.weibo.com/weibo?q=%23%E6%9E%81%E9%99%90%E6%8C%91%E6%88%98%E5%85%AD%E4%BA%BA%E9%87%8D%E8%81%9A%E4%B8%BA%E4%BD%95%E4%BA%89%E8%AE%AE%E9%87%8D%E9%87%8D%23) `307.3K 🔥` `NEW`
1. [中国证监会开出天价罚单](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%AF%81%E7%9B%91%E4%BC%9A%E5%BC%80%E5%87%BA%E5%A4%A9%E4%BB%B7%E7%BD%9A%E5%8D%95%23) `298.1K 🔥` `NEW`
1. [苹果将迎最大规模产品发布潮](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%B0%86%E8%BF%8E%E6%9C%80%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%BA%A7%E5%93%81%E5%8F%91%E5%B8%83%E6%BD%AE%23) `292.4K 🔥` `NEW`
1. [中级会计 好难](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1%20%E5%A5%BD%E9%9A%BE%23) `289.6K 🔥` `NEW`
1. [尚之桃想公开和栾念的关系](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E4%B9%8B%E6%A1%83%E6%83%B3%E5%85%AC%E5%BC%80%E5%92%8C%E6%A0%BE%E5%BF%B5%E7%9A%84%E5%85%B3%E7%B3%BB%23) `288.9K 🔥` `NEW`
1. [自从有了电车](https://s.weibo.com/weibo?q=%23%E8%87%AA%E4%BB%8E%E6%9C%89%E4%BA%86%E7%94%B5%E8%BD%A6%23) `288.0K 🔥` `NEW`
1. [兄妹关系怎么能全国统一的](https://s.weibo.com/weibo?q=%23%E5%85%84%E5%A6%B9%E5%85%B3%E7%B3%BB%E6%80%8E%E4%B9%88%E8%83%BD%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%23) `287.2K 🔥` `NEW`
1. [王俊凯粉丝回应安静公主](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%B2%89%E4%B8%9D%E5%9B%9E%E5%BA%94%E5%AE%89%E9%9D%99%E5%85%AC%E4%B8%BB%23) `286.6K 🔥` `NEW`
1. [王一博赛道打滑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%B5%9B%E9%81%93%E6%89%93%E6%BB%91%23) `286.0K 🔥` `NEW`
1. [江西吉安山体滑坡](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%A5%BF%E5%90%89%E5%AE%89%E5%B1%B1%E4%BD%93%E6%BB%91%E5%9D%A1%23) `251.8K 🔥` `NEW`
1. [严敏 试探市场](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%95%8F%20%E8%AF%95%E6%8E%A2%E5%B8%82%E5%9C%BA%23) `248.7K 🔥` `NEW`
1. [2026央视中秋晚会官宣](https://s.weibo.com/weibo?q=%232026%E5%A4%AE%E8%A7%86%E4%B8%AD%E7%A7%8B%E6%99%9A%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `238.5K 🔥` `NEW`
1. [我国将实施教师发展国家行动](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%B0%86%E5%AE%9E%E6%96%BD%E6%95%99%E5%B8%88%E5%8F%91%E5%B1%95%E5%9B%BD%E5%AE%B6%E8%A1%8C%E5%8A%A8%23) `238.1K 🔥` `NEW`
1. [世界地图要变了美国反对](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE%E8%A6%81%E5%8F%98%E4%BA%86%E7%BE%8E%E5%9B%BD%E5%8F%8D%E5%AF%B9%23) `238.0K 🔥` `NEW`
1. [和平饭店价格](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E9%A5%AD%E5%BA%97%E4%BB%B7%E6%A0%BC%23) `238.0K 🔥` `NEW`
1. [孟子义张月公主造型](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%BC%A0%E6%9C%88%E5%85%AC%E4%B8%BB%E9%80%A0%E5%9E%8B%23) `237.3K 🔥` `NEW`
1. [罗志祥重回极限挑战拍摄地](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%BF%97%E7%A5%A5%E9%87%8D%E5%9B%9E%E6%9E%81%E9%99%90%E6%8C%91%E6%88%98%E6%8B%8D%E6%91%84%E5%9C%B0%23) `237.3K 🔥` `NEW`
1. [凡人修仙传](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `236.6K 🔥` `NEW`
1. [苏醒cue时代少年团粉丝的爸妈们](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92cue%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%B2%89%E4%B8%9D%E7%9A%84%E7%88%B8%E5%A6%88%E4%BB%AC%23) `236.6K 🔥` `NEW`
1. [律师解读刘雯井柏然点赞风波](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB%E5%88%98%E9%9B%AF%E4%BA%95%E6%9F%8F%E7%84%B6%E7%82%B9%E8%B5%9E%E9%A3%8E%E6%B3%A2%23) `231.2K 🔥` `NEW`
1. [中级会计](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1%23) `221.2K 🔥` `NEW`
1. [港姐王菲订婚](https://s.weibo.com/weibo?q=%23%E6%B8%AF%E5%A7%90%E7%8E%8B%E8%8F%B2%E8%AE%A2%E5%A9%9A%23) `221.1K 🔥` `NEW`
1. [卢昱晓刺棠围读上班](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E5%88%BA%E6%A3%A0%E5%9B%B4%E8%AF%BB%E4%B8%8A%E7%8F%AD%23) `217.3K 🔥` `NEW`
1. [江西吉安山体滑坡十余人被埋](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%A5%BF%E5%90%89%E5%AE%89%E5%B1%B1%E4%BD%93%E6%BB%91%E5%9D%A1%E5%8D%81%E4%BD%99%E4%BA%BA%E8%A2%AB%E5%9F%8B%23) `215.8K 🔥` `NEW`
1. [王一博2分03秒520](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A2%E5%88%8603%E7%A7%92520%23) `215.4K 🔥` `NEW`
1. [尼泊尔发生大规模山体滑坡](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%8F%91%E7%94%9F%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%B1%B1%E4%BD%93%E6%BB%91%E5%9D%A1%23) `213.8K 🔥` `NEW`
1. [赵一鸣门店回应幼童排便后家长离开](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%80%E9%B8%A3%E9%97%A8%E5%BA%97%E5%9B%9E%E5%BA%94%E5%B9%BC%E7%AB%A5%E6%8E%92%E4%BE%BF%E5%90%8E%E5%AE%B6%E9%95%BF%E7%A6%BB%E5%BC%80%23) `211.3K 🔥` `NEW`
1. [早春晴朗给LV拍出了最好的广告](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E7%BB%99LV%E6%8B%8D%E5%87%BA%E4%BA%86%E6%9C%80%E5%A5%BD%E7%9A%84%E5%B9%BF%E5%91%8A%23) `210.8K 🔥` `NEW`
1. [女生晒400万香港豪宅仅20平](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%99%92400%E4%B8%87%E9%A6%99%E6%B8%AF%E8%B1%AA%E5%AE%85%E4%BB%8520%E5%B9%B3%23) `189.0K 🔥` `NEW`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `184.5K 🔥` `NEW`
1. [权志龙点赞水原希子疑似分手帖](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99%E7%82%B9%E8%B5%9E%E6%B0%B4%E5%8E%9F%E5%B8%8C%E5%AD%90%E7%96%91%E4%BC%BC%E5%88%86%E6%89%8B%E5%B8%96%23) `171.0K 🔥` `NEW`
1. [全球首款乙肝治愈药物要来了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E6%AC%BE%E4%B9%99%E8%82%9D%E6%B2%BB%E6%84%88%E8%8D%AF%E7%89%A9%E8%A6%81%E6%9D%A5%E4%BA%86%23) `170.0K 🔥` `NEW`
1. [马斯克Optimus机器人大军](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8BOptimus%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%A4%A7%E5%86%9B%23) `169.6K 🔥` `NEW`
1. [白鹿十周年实体专](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8D%81%E5%91%A8%E5%B9%B4%E5%AE%9E%E4%BD%93%E4%B8%93%23) `169.4K 🔥` `NEW`
1. [刘雯 避嫌](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%20%E9%81%BF%E5%AB%8C%23) `322.3K 🔥`
1. [安静公主说王俊凯粉丝既要又要](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%9D%99%E5%85%AC%E4%B8%BB%E8%AF%B4%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%B2%89%E4%B8%9D%E6%97%A2%E8%A6%81%E5%8F%88%E8%A6%81%23) `317.5K 🔥`
1. [罗志祥复出争议](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%BF%97%E7%A5%A5%E5%A4%8D%E5%87%BA%E4%BA%89%E8%AE%AE%23) `193.9K 🔥` `-42%`

Updated at 2026-09-05 13:43:29

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
