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

1. [周柯宇又要用礼物狙击谁 (Who is Zhou Keyu going to snipe with gifts?)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E5%8F%88%E8%A6%81%E7%94%A8%E7%A4%BC%E7%89%A9%E7%8B%99%E5%87%BB%E8%B0%81%23) `97.6K 🔥` `NEW`
1. [王安宇CELINE品牌大使](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87CELINE%E5%93%81%E7%89%8C%E5%A4%A7%E4%BD%BF%23) `44.6K 🔥` `NEW`
1. [米兰时装周](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E6%97%B6%E8%A3%85%E5%91%A8%23) `26.9K 🔥` `NEW`
1. [严浩翔开工录歌](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%BC%80%E5%B7%A5%E5%BD%95%E6%AD%8C%23) `26.8K 🔥` `NEW`
1. [好好的时光](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A5%BD%E7%9A%84%E6%97%B6%E5%85%89%23) `26.8K 🔥` `NEW`
1. [哈梅内伊妻子伤重不治去世 (Khamenei's wife dies of injuries)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E5%A6%BB%E5%AD%90%E4%BC%A4%E9%87%8D%E4%B8%8D%E6%B2%BB%E5%8E%BB%E4%B8%96%23) `159.1K 🔥` `-42%`
1. [刘文祥麻辣烫](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E9%BA%BB%E8%BE%A3%E7%83%AB%23) `157.6K 🔥` `-38%`
1. [598名女性获全国三八红旗手称号](https://s.weibo.com/weibo?q=%23598%E5%90%8D%E5%A5%B3%E6%80%A7%E8%8E%B7%E5%85%A8%E5%9B%BD%E4%B8%89%E5%85%AB%E7%BA%A2%E6%97%97%E6%89%8B%E7%A7%B0%E5%8F%B7%23) `101.7K 🔥` `-47%`
1. [伊朗首都5地几乎同时爆炸 (Explosions occurred in five places in the Iranian capital almost simultaneously)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD5%E5%9C%B0%E5%87%A0%E4%B9%8E%E5%90%8C%E6%97%B6%E7%88%86%E7%82%B8%23) `96.7K 🔥` `-49%`
1. [法国总统下令增加核弹头数量 (French President orders increase in number of nuclear warheads)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%80%BB%E7%BB%9F%E4%B8%8B%E4%BB%A4%E5%A2%9E%E5%8A%A0%E6%A0%B8%E5%BC%B9%E5%A4%B4%E6%95%B0%E9%87%8F%23) `59.1K 🔥` `-56%`
1. [中国有了量子手机](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%89%E4%BA%86%E9%87%8F%E5%AD%90%E6%89%8B%E6%9C%BA%23) `46.4K 🔥` `-54%`
1. [中方回应特朗普3月访华能否成行](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE3%E6%9C%88%E8%AE%BF%E5%8D%8E%E8%83%BD%E5%90%A6%E6%88%90%E8%A1%8C%23) `44.5K 🔥` `-38%`
1. [女子带1米长巨大豆荚坐飞机引围观](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B8%A61%E7%B1%B3%E9%95%BF%E5%B7%A8%E5%A4%A7%E8%B1%86%E8%8D%9A%E5%9D%90%E9%A3%9E%E6%9C%BA%E5%BC%95%E5%9B%B4%E8%A7%82%23) `41.0K 🔥` `-37%`
1. [恋与深空活动场地变更 (Love and Deep Space event venue change)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%B4%BB%E5%8A%A8%E5%9C%BA%E5%9C%B0%E5%8F%98%E6%9B%B4%23) `37.1K 🔥` `-25%`
1. [郭晓婷回复孙千 (Guo Xiaoting replied to Sun Qian)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E5%9B%9E%E5%A4%8D%E5%AD%99%E5%8D%83%23) `35.4K 🔥` `-41%`
1. [王毅和伊朗外长通电话](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%92%8C%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E9%80%9A%E7%94%B5%E8%AF%9D%23) `35.3K 🔥` `-41%`
1. [iPhone17e浅粉色](https://s.weibo.com/weibo?q=%23iPhone17e%E6%B5%85%E7%B2%89%E8%89%B2%23) `34.6K 🔥` `-41%`
1. [伊朗导弹击中美第五舰队总部瞬间](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E7%BE%8E%E7%AC%AC%E4%BA%94%E8%88%B0%E9%98%9F%E6%80%BB%E9%83%A8%E7%9E%AC%E9%97%B4%23) `34.2K 🔥` `-42%`
1. [王安宇CELINE首位中国男大使](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87CELINE%E9%A6%96%E4%BD%8D%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%A4%A7%E4%BD%BF%23) `33.9K 🔥` `-41%`
1. [伊朗称已准备长期战争](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%B7%B2%E5%87%86%E5%A4%87%E9%95%BF%E6%9C%9F%E6%88%98%E4%BA%89%23) `33.6K 🔥` `-40%`
1. [伊朗一名中国公民遇难 (A Chinese citizen was killed in Iran)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%90%8D%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E9%81%87%E9%9A%BE%23) `32.9K 🔥` `-40%`
1. [LV认领徐明浩 (LV claims Xu Minghao)](https://s.weibo.com/weibo?q=%23LV%E8%AE%A4%E9%A2%86%E5%BE%90%E6%98%8E%E6%B5%A9%23) `32.1K 🔥` `-35%`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `32.1K 🔥` `-47%`
1. [被女子扔玩具车撞伤妈妈发声](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A5%B3%E5%AD%90%E6%89%94%E7%8E%A9%E5%85%B7%E8%BD%A6%E6%92%9E%E4%BC%A4%E5%A6%88%E5%A6%88%E5%8F%91%E5%A3%B0%23) `28.3K 🔥` `-43%`
1. [弦子报平安 (Xianzi reports peace)](https://s.weibo.com/weibo?q=%23%E5%BC%A6%E5%AD%90%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `28.2K 🔥` `-43%`
1. [伊方愿全力保障中方人员机构的安全](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%96%B9%E6%84%BF%E5%85%A8%E5%8A%9B%E4%BF%9D%E9%9A%9C%E4%B8%AD%E6%96%B9%E4%BA%BA%E5%91%98%E6%9C%BA%E6%9E%84%E7%9A%84%E5%AE%89%E5%85%A8%23) `28.1K 🔥` `-44%`
1. [李昀锐王楚然lingorm合照 (Li Yunrui and Wang Churan lingorm group photo)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%8E%8B%E6%A5%9A%E7%84%B6lingorm%E5%90%88%E7%85%A7%23) `27.9K 🔥` `-49%`
1. [美以伊战场装备都升级了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E4%BC%8A%E6%88%98%E5%9C%BA%E8%A3%85%E5%A4%87%E9%83%BD%E5%8D%87%E7%BA%A7%E4%BA%86%23) `27.8K 🔥` `-44%`
1. [俄罗斯 (Russia)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%23) `26.9K 🔥` `-46%`
1. [杨超越 末世文女主](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%20%E6%9C%AB%E4%B8%96%E6%96%87%E5%A5%B3%E4%B8%BB%23) `26.9K 🔥` `-46%`
1. [宋雨琦被詹姆斯比心](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%A2%AB%E8%A9%B9%E5%A7%86%E6%96%AF%E6%AF%94%E5%BF%83%23) `26.9K 🔥` `-46%`
1. [李昀锐好像郭晓婷王天辰的孩子](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%A5%BD%E5%83%8F%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E7%9A%84%E5%AD%A9%E5%AD%90%23) `26.9K 🔥` `-46%`
1. [李静回应飞清迈陪戴军过年](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9D%99%E5%9B%9E%E5%BA%94%E9%A3%9E%E6%B8%85%E8%BF%88%E9%99%AA%E6%88%B4%E5%86%9B%E8%BF%87%E5%B9%B4%23) `26.9K 🔥` `-47%`
1. [但愿人长久](https://s.weibo.com/weibo?q=%23%E4%BD%86%E6%84%BF%E4%BA%BA%E9%95%BF%E4%B9%85%23) `26.9K 🔥` `-46%`
1. [伊朗伊斯法罕传出巨大爆炸声](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BC%8A%E6%96%AF%E6%B3%95%E7%BD%95%E4%BC%A0%E5%87%BA%E5%B7%A8%E5%A4%A7%E7%88%86%E7%82%B8%E5%A3%B0%23) `26.9K 🔥` `-46%`
1. [红楼梦 宝玉宝钗演员争论 (Dream of Red Mansions Baoyu Baochai actor controversy)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%A5%BC%E6%A2%A6%20%E5%AE%9D%E7%8E%89%E5%AE%9D%E9%92%97%E6%BC%94%E5%91%98%E4%BA%89%E8%AE%BA%23) `26.9K 🔥` `-46%`
1. [小贝求婚失败](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%B4%9D%E6%B1%82%E5%A9%9A%E5%A4%B1%E8%B4%A5%23) `26.9K 🔥` `-46%`
1. [大叔因太会种地在非洲被持枪保护](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%8F%94%E5%9B%A0%E5%A4%AA%E4%BC%9A%E7%A7%8D%E5%9C%B0%E5%9C%A8%E9%9D%9E%E6%B4%B2%E8%A2%AB%E6%8C%81%E6%9E%AA%E4%BF%9D%E6%8A%A4%23) `26.9K 🔥` `-46%`
1. [杨幂迪丽热巴宁艺卓最佳穿搭](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%AE%81%E8%89%BA%E5%8D%93%E6%9C%80%E4%BD%B3%E7%A9%BF%E6%90%AD%23) `26.9K 🔥` `-46%`
1. [海澜之家被暂停全军采购资格 (Heilan House has been suspended from military procurement qualifications)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%BE%9C%E4%B9%8B%E5%AE%B6%E8%A2%AB%E6%9A%82%E5%81%9C%E5%85%A8%E5%86%9B%E9%87%87%E8%B4%AD%E8%B5%84%E6%A0%BC%23) `26.9K 🔥` `-46%`
1. [iPadAir 没高刷 (iPadAir does not have high refresh rate)](https://s.weibo.com/weibo?q=%23iPadAir%20%E6%B2%A1%E9%AB%98%E5%88%B7%23) `26.9K 🔥` `-46%`
1. [纯真年代的爱情 (Love in the Age of Innocence)](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `26.8K 🔥` `-53%`
1. [张翅发自拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BF%85%E5%8F%91%E8%87%AA%E6%8B%8D%23) `26.8K 🔥` `-46%`
1. [女子公园放养10天宠物鸭毫发无损](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%85%AC%E5%9B%AD%E6%94%BE%E5%85%BB10%E5%A4%A9%E5%AE%A0%E7%89%A9%E9%B8%AD%E6%AF%AB%E5%8F%91%E6%97%A0%E6%8D%9F%23) `26.8K 🔥` `-46%`
1. [海澜之家 不签合同](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%BE%9C%E4%B9%8B%E5%AE%B6%20%E4%B8%8D%E7%AD%BE%E5%90%88%E5%90%8C%23) `26.8K 🔥` `-46%`
1. [卡塔尔能源宣布遇袭停产](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E5%A1%94%E5%B0%94%E8%83%BD%E6%BA%90%E5%AE%A3%E5%B8%83%E9%81%87%E8%A2%AD%E5%81%9C%E4%BA%A7%23) `26.8K 🔥` `-46%`
1. [卢昱晓短发 美萌](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%9F%AD%E5%8F%91%20%E7%BE%8E%E8%90%8C%23) `26.8K 🔥` `-46%`
1. [元宵晚会你最期待谁的舞台](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%B5%E6%99%9A%E4%BC%9A%E4%BD%A0%E6%9C%80%E6%9C%9F%E5%BE%85%E8%B0%81%E7%9A%84%E8%88%9E%E5%8F%B0%23) `26.8K 🔥` `-46%`
1. [WBG战胜TES](https://s.weibo.com/weibo?q=%23WBG%E6%88%98%E8%83%9CTES%23) `26.8K 🔥` `-46%`
1. [朱志鑫30分钟的vlog](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB30%E5%88%86%E9%92%9F%E7%9A%84vlog%23) `26.8K 🔥` `-46%`
1. [张凌赫田曦薇cp超话人数](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87cp%E8%B6%85%E8%AF%9D%E4%BA%BA%E6%95%B0%23) `26.8K 🔥` `-46%`

Updated at 2026-03-03 03:05:11

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
