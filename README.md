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

1. [耐克将清退中国数千家在线经销商 (Nike will remove thousands of online dealers in China)](https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E5%B0%86%E6%B8%85%E9%80%80%E4%B8%AD%E5%9B%BD%E6%95%B0%E5%8D%83%E5%AE%B6%E5%9C%A8%E7%BA%BF%E7%BB%8F%E9%94%80%E5%95%86%23) `1.6M 🔥` `NEW`
1. [张伟丽化妆后自己都不认识了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%9F%E4%B8%BD%E5%8C%96%E5%A6%86%E5%90%8E%E8%87%AA%E5%B7%B1%E9%83%BD%E4%B8%8D%E8%AE%A4%E8%AF%86%E4%BA%86%23) `936.8K 🔥` `NEW`
1. [开局之年看中国解码创新浙江](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E4%B8%AD%E5%9B%BD%E8%A7%A3%E7%A0%81%E5%88%9B%E6%96%B0%E6%B5%99%E6%B1%9F%23) `810.8K 🔥` `NEW`
1. [包知了猴饺子一转眼馅跑了](https://s.weibo.com/weibo?q=%23%E5%8C%85%E7%9F%A5%E4%BA%86%E7%8C%B4%E9%A5%BA%E5%AD%90%E4%B8%80%E8%BD%AC%E7%9C%BC%E9%A6%85%E8%B7%91%E4%BA%86%23) `803.2K 🔥` `NEW`
1. [亚马尔举牌讽刺帕雷德斯](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B8%BE%E7%89%8C%E8%AE%BD%E5%88%BA%E5%B8%95%E9%9B%B7%E5%BE%B7%E6%96%AF%23) `734.7K 🔥` `NEW`
1. [美富豪换血求永生失败后克隆了自己](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AF%8C%E8%B1%AA%E6%8D%A2%E8%A1%80%E6%B1%82%E6%B0%B8%E7%94%9F%E5%A4%B1%E8%B4%A5%E5%90%8E%E5%85%8B%E9%9A%86%E4%BA%86%E8%87%AA%E5%B7%B1%23) `594.5K 🔥` `NEW`
1. [邓紫棋 歌手](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%20%E6%AD%8C%E6%89%8B%23) `561.3K 🔥` `NEW`
1. [田曦薇青风吹又生定妆](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%9D%92%E9%A3%8E%E5%90%B9%E5%8F%88%E7%94%9F%E5%AE%9A%E5%A6%86%23) `493.9K 🔥` `NEW`
1. [雷军称澎程每三年或3万km才需保养](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A7%B0%E6%BE%8E%E7%A8%8B%E6%AF%8F%E4%B8%89%E5%B9%B4%E6%88%963%E4%B8%87km%E6%89%8D%E9%9C%80%E4%BF%9D%E5%85%BB%23) `493.0K 🔥` `NEW`
1. [商场女厕内巨大男性壁画被指低俗](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%9C%BA%E5%A5%B3%E5%8E%95%E5%86%85%E5%B7%A8%E5%A4%A7%E7%94%B7%E6%80%A7%E5%A3%81%E7%94%BB%E8%A2%AB%E6%8C%87%E4%BD%8E%E4%BF%97%23) `475.2K 🔥` `NEW`
1. [新领军王楚钦 (New leader Wang Chuqin)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%A2%86%E5%86%9B%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `469.4K 🔥` `NEW`
1. [万宝龙王安宇适配度](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%AE%9D%E9%BE%99%E7%8E%8B%E5%AE%89%E5%AE%87%E9%80%82%E9%85%8D%E5%BA%A6%23) `453.0K 🔥` `NEW`
1. [耐克抛弃滔搏影响多大](https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E6%8A%9B%E5%BC%83%E6%BB%94%E6%90%8F%E5%BD%B1%E5%93%8D%E5%A4%9A%E5%A4%A7%23) `446.7K 🔥` `NEW`
1. [辛柏青谈及朱媛媛时不愿过多分享](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E6%9F%8F%E9%9D%92%E8%B0%88%E5%8F%8A%E6%9C%B1%E5%AA%9B%E5%AA%9B%E6%97%B6%E4%B8%8D%E6%84%BF%E8%BF%87%E5%A4%9A%E5%88%86%E4%BA%AB%23) `429.2K 🔥` `NEW`
1. [如何防止手机被大数据监听](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E9%98%B2%E6%AD%A2%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%A4%A7%E6%95%B0%E6%8D%AE%E7%9B%91%E5%90%AC%23) `427.7K 🔥` `NEW`
1. [不受力](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%8F%97%E5%8A%9B%23) `425.0K 🔥` `NEW`
1. [一大批中产抄底香港楼市](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A7%E6%89%B9%E4%B8%AD%E4%BA%A7%E6%8A%84%E5%BA%95%E9%A6%99%E6%B8%AF%E6%A5%BC%E5%B8%82%23) `421.3K 🔥` `NEW`
1. [重庆一医生名叫叶绿素爆火出圈](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E4%B8%80%E5%8C%BB%E7%94%9F%E5%90%8D%E5%8F%AB%E5%8F%B6%E7%BB%BF%E7%B4%A0%E7%88%86%E7%81%AB%E5%87%BA%E5%9C%88%23) `419.2K 🔥` `NEW`
1. [曝谢贤离世前一年已出现认知障碍](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B0%A2%E8%B4%A4%E7%A6%BB%E4%B8%96%E5%89%8D%E4%B8%80%E5%B9%B4%E5%B7%B2%E5%87%BA%E7%8E%B0%E8%AE%A4%E7%9F%A5%E9%9A%9C%E7%A2%8D%23) `418.5K 🔥` `NEW`
1. [我们的少年时代2网传剧情](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E7%BD%91%E4%BC%A0%E5%89%A7%E6%83%85%23) `415.6K 🔥` `NEW`
1. [伊朗说打就打 (Iran will fight if it says it will)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AF%B4%E6%89%93%E5%B0%B1%E6%89%93%23) `412.9K 🔥` `NEW`
1. [慕容清峄没军队职位为什么穿军装](https://s.weibo.com/weibo?q=%23%E6%85%95%E5%AE%B9%E6%B8%85%E5%B3%84%E6%B2%A1%E5%86%9B%E9%98%9F%E8%81%8C%E4%BD%8D%E4%B8%BA%E4%BB%80%E4%B9%88%E7%A9%BF%E5%86%9B%E8%A3%85%23) `411.3K 🔥` `NEW`
1. [表志勋出车祸](https://s.weibo.com/weibo?q=%23%E8%A1%A8%E5%BF%97%E5%8B%8B%E5%87%BA%E8%BD%A6%E7%A5%B8%23) `409.6K 🔥` `NEW`
1. [OpenAI自主攻破最大AI开源社区](https://s.weibo.com/weibo?q=%23OpenAI%E8%87%AA%E4%B8%BB%E6%94%BB%E7%A0%B4%E6%9C%80%E5%A4%A7AI%E5%BC%80%E6%BA%90%E7%A4%BE%E5%8C%BA%23) `408.3K 🔥` `NEW`
1. [向佐一家现身珠海](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E4%B8%80%E5%AE%B6%E7%8E%B0%E8%BA%AB%E7%8F%A0%E6%B5%B7%23) `405.9K 🔥` `NEW`
1. [高中生被刺死案事发地疑为涉黄场所](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E8%A2%AB%E5%88%BA%E6%AD%BB%E6%A1%88%E4%BA%8B%E5%8F%91%E5%9C%B0%E7%96%91%E4%B8%BA%E6%B6%89%E9%BB%84%E5%9C%BA%E6%89%80%23) `403.2K 🔥` `NEW`
1. [成年人的辞职理由变了](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E8%BE%9E%E8%81%8C%E7%90%86%E7%94%B1%E5%8F%98%E4%BA%86%23) `401.6K 🔥` `NEW`
1. [找对象要找客观意义上的好人](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%AF%B9%E8%B1%A1%E8%A6%81%E6%89%BE%E5%AE%A2%E8%A7%82%E6%84%8F%E4%B9%89%E4%B8%8A%E7%9A%84%E5%A5%BD%E4%BA%BA%23) `400.0K 🔥` `NEW`
1. [耐克与滔搏线上合作将终止](https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E4%B8%8E%E6%BB%94%E6%90%8F%E7%BA%BF%E4%B8%8A%E5%90%88%E4%BD%9C%E5%B0%86%E7%BB%88%E6%AD%A2%23) `397.2K 🔥` `NEW`
1. [大人的客气能不能明显一点](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BA%BA%E7%9A%84%E5%AE%A2%E6%B0%94%E8%83%BD%E4%B8%8D%E8%83%BD%E6%98%8E%E6%98%BE%E4%B8%80%E7%82%B9%23) `395.5K 🔥` `NEW`
1. [韩方否认中国船员曾6次求救 (South Korea denies that Chinese crew members asked for help 6 times)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%96%B9%E5%90%A6%E8%AE%A4%E4%B8%AD%E5%9B%BD%E8%88%B9%E5%91%98%E6%9B%BE6%E6%AC%A1%E6%B1%82%E6%95%91%23) `393.4K 🔥` `NEW`
1. [吴克群买250吨西瓜助力瓜农](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%85%8B%E7%BE%A4%E4%B9%B0250%E5%90%A8%E8%A5%BF%E7%93%9C%E5%8A%A9%E5%8A%9B%E7%93%9C%E5%86%9C%23) `388.6K 🔥` `NEW`
1. [足球狂欢不只有足球](https://s.weibo.com/weibo?q=%23%E8%B6%B3%E7%90%83%E7%8B%82%E6%AC%A2%E4%B8%8D%E5%8F%AA%E6%9C%89%E8%B6%B3%E7%90%83%23) `386.2K 🔥` `NEW`
1. [关晓彤陈星旭求婚路透](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E9%99%88%E6%98%9F%E6%97%AD%E6%B1%82%E5%A9%9A%E8%B7%AF%E9%80%8F%23) `385.3K 🔥` `NEW`
1. [AI小猫逛街演我的日常](https://s.weibo.com/weibo?q=%23AI%E5%B0%8F%E7%8C%AB%E9%80%9B%E8%A1%97%E6%BC%94%E6%88%91%E7%9A%84%E6%97%A5%E5%B8%B8%23) `382.6K 🔥` `NEW`
1. [孙恩盛瘦成纸片人了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%81%A9%E7%9B%9B%E7%98%A6%E6%88%90%E7%BA%B8%E7%89%87%E4%BA%BA%E4%BA%86%23) `381.8K 🔥` `NEW`
1. [男子台球厅拍女助教屁股遭索赔2000元](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%B0%E7%90%83%E5%8E%85%E6%8B%8D%E5%A5%B3%E5%8A%A9%E6%95%99%E5%B1%81%E8%82%A1%E9%81%AD%E7%B4%A2%E8%B5%942000%E5%85%83%23) `378.2K 🔥` `NEW`
1. [长鑫科技弃购率](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%BC%83%E8%B4%AD%E7%8E%87%23) `377.2K 🔥` `NEW`
1. [全红婵见到偶像黄子韬害羞](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E8%A7%81%E5%88%B0%E5%81%B6%E5%83%8F%E9%BB%84%E5%AD%90%E9%9F%AC%E5%AE%B3%E7%BE%9E%23) `374.4K 🔥` `NEW`
1. [陈瑶天选霍仙姑的权威](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%A4%A9%E9%80%89%E9%9C%8D%E4%BB%99%E5%A7%91%E7%9A%84%E6%9D%83%E5%A8%81%23) `372.9K 🔥` `NEW`
1. [Ador回应NewJeans4人组回归 (Ador responds to the return of NewJeans 4-member group)](https://s.weibo.com/weibo?q=%23Ador%E5%9B%9E%E5%BA%94NewJeans4%E4%BA%BA%E7%BB%84%E5%9B%9E%E5%BD%92%23) `371.3K 🔥` `NEW`
1. [王鹤棣孟子义新剧尺度](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AD%9F%E5%AD%90%E4%B9%89%E6%96%B0%E5%89%A7%E5%B0%BA%E5%BA%A6%23) `365.7K 🔥` `NEW`
1. [吴世勋出发泰国Dior](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E5%87%BA%E5%8F%91%E6%B3%B0%E5%9B%BDDior%23) `363.8K 🔥` `NEW`
1. [加维说阿根廷球员不该被禁赛](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E7%BB%B4%E8%AF%B4%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E5%91%98%E4%B8%8D%E8%AF%A5%E8%A2%AB%E7%A6%81%E8%B5%9B%23) `363.3K 🔥` `NEW`
1. [父亲在家长群公开夫妻矛盾被认定家暴 (Father was found guilty of domestic violence after disclosing conflict between husband and wife in parents group)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9C%A8%E5%AE%B6%E9%95%BF%E7%BE%A4%E5%85%AC%E5%BC%80%E5%A4%AB%E5%A6%BB%E7%9F%9B%E7%9B%BE%E8%A2%AB%E8%AE%A4%E5%AE%9A%E5%AE%B6%E6%9A%B4%23) `711.5K 🔥` `+193%`
1. [演员凯莉霍特尔车祸去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%87%AF%E8%8E%89%E9%9C%8D%E7%89%B9%E5%B0%94%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96%23) `462.9K 🔥` `+55%`
1. [曝张雅琪和万俊丰同行照片](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E9%9B%85%E7%90%AA%E5%92%8C%E4%B8%87%E4%BF%8A%E4%B8%B0%E5%90%8C%E8%A1%8C%E7%85%A7%E7%89%87%23) `437.7K 🔥` `+45%`
1. [人工智能 文科生](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%20%E6%96%87%E7%A7%91%E7%94%9F%23) `367.9K 🔥` `+51%`
1. [九门 提档](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%20%E6%8F%90%E6%A1%A3%23) `425.2K 🔥` `-49%`
1. [曝詹姆斯突然改变想法 (LeBron James suddenly changed his mind)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%A9%B9%E5%A7%86%E6%96%AF%E7%AA%81%E7%84%B6%E6%94%B9%E5%8F%98%E6%83%B3%E6%B3%95%23) `392.2K 🔥` `-66%`

Updated at 2026-07-22 12:46:33

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
