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

1. [微信能不能出一个临时好友功能 (Can WeChat have a temporary friend function?)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%83%BD%E4%B8%8D%E8%83%BD%E5%87%BA%E4%B8%80%E4%B8%AA%E4%B8%B4%E6%97%B6%E5%A5%BD%E5%8F%8B%E5%8A%9F%E8%83%BD%23) `2.2M 🔥` `NEW`
1. [方红卫被双开](https://s.weibo.com/weibo?q=%23%E6%96%B9%E7%BA%A2%E5%8D%AB%E8%A2%AB%E5%8F%8C%E5%BC%80%23) `2.1M 🔥` `NEW`
1. [我国七大流域全力防汛](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%B8%83%E5%A4%A7%E6%B5%81%E5%9F%9F%E5%85%A8%E5%8A%9B%E9%98%B2%E6%B1%9B%23) `2.1M 🔥` `NEW`
1. [暴雨洪涝生存指南](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E6%B4%AA%E6%B6%9D%E7%94%9F%E5%AD%98%E6%8C%87%E5%8D%97%23) `2.1M 🔥` `NEW`
1. [大二女生贷款200万开民宿营收千万](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BA%8C%E5%A5%B3%E7%94%9F%E8%B4%B7%E6%AC%BE200%E4%B8%87%E5%BC%80%E6%B0%91%E5%AE%BF%E8%90%A5%E6%94%B6%E5%8D%83%E4%B8%87%23) `2.1M 🔥` `NEW`
1. [西班牙绝杀后C罗反应](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%BB%9D%E6%9D%80%E5%90%8EC%E7%BD%97%E5%8F%8D%E5%BA%94%23) `2.1M 🔥` `NEW`
1. [烧烤店主目睹丈夫员工被龙卷风吹飞](https://s.weibo.com/weibo?q=%23%E7%83%A7%E7%83%A4%E5%BA%97%E4%B8%BB%E7%9B%AE%E7%9D%B9%E4%B8%88%E5%A4%AB%E5%91%98%E5%B7%A5%E8%A2%AB%E9%BE%99%E5%8D%B7%E9%A3%8E%E5%90%B9%E9%A3%9E%23) `2.1M 🔥` `NEW`
1. [国足情况通报](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E6%83%85%E5%86%B5%E9%80%9A%E6%8A%A5%23) `2.1M 🔥` `NEW`
1. [关晓彤为庆祝小巷人家杀青剪的短发](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E4%B8%BA%E5%BA%86%E7%A5%9D%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%E6%9D%80%E9%9D%92%E5%89%AA%E7%9A%84%E7%9F%AD%E5%8F%91%23) `2.0M 🔥` `NEW`
1. [阿根廷埃及前瞻](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9F%83%E5%8F%8A%E5%89%8D%E7%9E%BB%23) `2.0M 🔥` `NEW`
1. [法院没否认四叶花是公共文化资源 (The court did not deny that the four-leaf flower is a public cultural resource)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E6%B2%A1%E5%90%A6%E8%AE%A4%E5%9B%9B%E5%8F%B6%E8%8A%B1%E6%98%AF%E5%85%AC%E5%85%B1%E6%96%87%E5%8C%96%E8%B5%84%E6%BA%90%23) `2.0M 🔥` `NEW`
1. [茉莉奶白输了官司赢了民心](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E8%BE%93%E4%BA%86%E5%AE%98%E5%8F%B8%E8%B5%A2%E4%BA%86%E6%B0%91%E5%BF%83%23) `1.9M 🔥` `NEW`
1. [周星驰票房号召力](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E7%A5%A8%E6%88%BF%E5%8F%B7%E5%8F%AC%E5%8A%9B%23) `1.9M 🔥` `NEW`
1. [日本49岁女子用针把室友嘴缝上](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC49%E5%B2%81%E5%A5%B3%E5%AD%90%E7%94%A8%E9%92%88%E6%8A%8A%E5%AE%A4%E5%8F%8B%E5%98%B4%E7%BC%9D%E4%B8%8A%23) `1.9M 🔥` `NEW`
1. [papi酱迎来事业第n春](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E8%BF%8E%E6%9D%A5%E4%BA%8B%E4%B8%9A%E7%AC%ACn%E6%98%A5%23) `1.9M 🔥` `NEW`
1. [柳柳发长文回应](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3%E5%8F%91%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%23) `1.9M 🔥` `NEW`
1. [会员报告](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E5%91%98%E6%8A%A5%E5%91%8A%23) `1.8M 🔥` `NEW`
1. [妈妈模仿孩子看电视的样子火了](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%A8%A1%E4%BB%BF%E5%AD%A9%E5%AD%90%E7%9C%8B%E7%94%B5%E8%A7%86%E7%9A%84%E6%A0%B7%E5%AD%90%E7%81%AB%E4%BA%86%23) `1.8M 🔥` `NEW`
1. [上戏偶遇金世佳上课](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%88%8F%E5%81%B6%E9%81%87%E9%87%91%E4%B8%96%E4%BD%B3%E4%B8%8A%E8%AF%BE%23) `1.8M 🔥` `NEW`
1. [张馨予 体感40度妆都花了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%20%E4%BD%93%E6%84%9F40%E5%BA%A6%E5%A6%86%E9%83%BD%E8%8A%B1%E4%BA%86%23) `1.8M 🔥` `NEW`
1. [孕妇羊水破裂被困家中获救 (Pregnant woman rescued after amniotic fluid ruptured and trapped at home)](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E7%BE%8A%E6%B0%B4%E7%A0%B4%E8%A3%82%E8%A2%AB%E5%9B%B0%E5%AE%B6%E4%B8%AD%E8%8E%B7%E6%95%91%23) `1.7M 🔥` `NEW`
1. [养蛇场蛇逃出村民被咬伤陷入休克](https://s.weibo.com/weibo?q=%23%E5%85%BB%E8%9B%87%E5%9C%BA%E8%9B%87%E9%80%83%E5%87%BA%E6%9D%91%E6%B0%91%E8%A2%AB%E5%92%AC%E4%BC%A4%E9%99%B7%E5%85%A5%E4%BC%91%E5%85%8B%23) `1.7M 🔥` `NEW`
1. [陈思诚和女友在一起四年了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E5%92%8C%E5%A5%B3%E5%8F%8B%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%9B%9B%E5%B9%B4%E4%BA%86%23) `1.7M 🔥` `NEW`
1. [上海一独居老人裸体游荡两年](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E7%8B%AC%E5%B1%85%E8%80%81%E4%BA%BA%E8%A3%B8%E4%BD%93%E6%B8%B8%E8%8D%A1%E4%B8%A4%E5%B9%B4%23) `1.7M 🔥` `NEW`
1. [金子涵右耳几乎听不见](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%8F%B3%E8%80%B3%E5%87%A0%E4%B9%8E%E5%90%AC%E4%B8%8D%E8%A7%81%23) `1.7M 🔥` `NEW`
1. [莫把股市当赌场](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%8A%8A%E8%82%A1%E5%B8%82%E5%BD%93%E8%B5%8C%E5%9C%BA%23) `1.7M 🔥` `NEW`
1. [网传刘宪华严浩翔补位歌手2026](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%88%98%E5%AE%AA%E5%8D%8E%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%A1%A5%E4%BD%8D%E6%AD%8C%E6%89%8B2026%23) `1.7M 🔥` `NEW`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `1.6M 🔥` `NEW`
1. [七八九月千万不要离职](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%85%AB%E4%B9%9D%E6%9C%88%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%A6%BB%E8%81%8C%23) `2.1M 🔥` `+69%`
1. [北京暴雨](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8%23) `2.1M 🔥` `+336%`
1. [难怪我北方的朋友不爱吃薄荷 (No wonder my friends in the north don’t like mint)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E6%88%91%E5%8C%97%E6%96%B9%E7%9A%84%E6%9C%8B%E5%8F%8B%E4%B8%8D%E7%88%B1%E5%90%83%E8%96%84%E8%8D%B7%23) `2.1M 🔥` `+358%`
1. [鹿晗 关晓彤 (Lu Han Guan Xiaotong)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `2.1M 🔥` `+311%`
1. [LV胜诉暴露了中国文化确权时差](https://s.weibo.com/weibo?q=%23LV%E8%83%9C%E8%AF%89%E6%9A%B4%E9%9C%B2%E4%BA%86%E4%B8%AD%E5%9B%BD%E6%96%87%E5%8C%96%E7%A1%AE%E6%9D%83%E6%97%B6%E5%B7%AE%23) `2.0M 🔥` `+34%`
1. [金子涵发明星名单 (Jin Jinhan's celebrity list)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%8F%91%E6%98%8E%E6%98%9F%E5%90%8D%E5%8D%95%23) `2.0M 🔥` `+309%`
1. [比利时官方嘲讽美国](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E5%AE%98%E6%96%B9%E5%98%B2%E8%AE%BD%E7%BE%8E%E5%9B%BD%23) `2.0M 🔥` `+298%`
1. [野狗骨头 影视寒冬真正的夏天](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%20%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%A4%8F%E5%A4%A9%23) `2.0M 🔥` `+317%`
1. [日本品牌拿七七当七夕是何居心](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%93%81%E7%89%8C%E6%8B%BF%E4%B8%83%E4%B8%83%E5%BD%93%E4%B8%83%E5%A4%95%E6%98%AF%E4%BD%95%E5%B1%85%E5%BF%83%23) `2.0M 🔥` `+309%`
1. [花少8 审美降级](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%20%E5%AE%A1%E7%BE%8E%E9%99%8D%E7%BA%A7%23) `2.0M 🔥` `+309%`
1. [横州急需蛇毒血清有人被毒蛇咬伤 (Hengzhou is in urgent need of snake venom serum. Someone was bitten by a venomous snake.)](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%B7%9E%E6%80%A5%E9%9C%80%E8%9B%87%E6%AF%92%E8%A1%80%E6%B8%85%E6%9C%89%E4%BA%BA%E8%A2%AB%E6%AF%92%E8%9B%87%E5%92%AC%E4%BC%A4%23) `1.9M 🔥` `+27%`
1. [养殖户称蛇出逃长时间泡水会死](https://s.weibo.com/weibo?q=%23%E5%85%BB%E6%AE%96%E6%88%B7%E7%A7%B0%E8%9B%87%E5%87%BA%E9%80%83%E9%95%BF%E6%97%B6%E9%97%B4%E6%B3%A1%E6%B0%B4%E4%BC%9A%E6%AD%BB%23) `1.9M 🔥` `+373%`
1. [浙大校徽 阿玛尼](https://s.weibo.com/weibo?q=%23%E6%B5%99%E5%A4%A7%E6%A0%A1%E5%BE%BD%20%E9%98%BF%E7%8E%9B%E5%B0%BC%23) `1.9M 🔥` `+96%`
1. [张馨予团队睡了她还在修图](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E5%9B%A2%E9%98%9F%E7%9D%A1%E4%BA%86%E5%A5%B9%E8%BF%98%E5%9C%A8%E4%BF%AE%E5%9B%BE%23) `1.9M 🔥` `+303%`
1. [巨无霸台风可能登陆我国](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E6%97%A0%E9%9C%B8%E5%8F%B0%E9%A3%8E%E5%8F%AF%E8%83%BD%E7%99%BB%E9%99%86%E6%88%91%E5%9B%BD%23) `1.8M 🔥` `+304%`
1. [LV不能挪用中式纹样反向起诉中企 (LV cannot misappropriate Chinese patterns and sue Chinese companies in reverse)](https://s.weibo.com/weibo?q=%23LV%E4%B8%8D%E8%83%BD%E6%8C%AA%E7%94%A8%E4%B8%AD%E5%BC%8F%E7%BA%B9%E6%A0%B7%E5%8F%8D%E5%90%91%E8%B5%B7%E8%AF%89%E4%B8%AD%E4%BC%81%23) `1.8M 🔥` `+265%`
1. [洪水致养蛇场蛇逃出有眼镜蛇 (Flood causes snakes to escape from snake farm, including cobra)](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E6%B0%B4%E8%87%B4%E5%85%BB%E8%9B%87%E5%9C%BA%E8%9B%87%E9%80%83%E5%87%BA%E6%9C%89%E7%9C%BC%E9%95%9C%E8%9B%87%23) `1.8M 🔥` `+297%`
1. [广西村民称已有10多人被蛇咬](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%9D%91%E6%B0%91%E7%A7%B0%E5%B7%B2%E6%9C%8910%E5%A4%9A%E4%BA%BA%E8%A2%AB%E8%9B%87%E5%92%AC%23) `1.8M 🔥` `+308%`
1. [养殖场出逃蛇类约800至900条](https://s.weibo.com/weibo?q=%23%E5%85%BB%E6%AE%96%E5%9C%BA%E5%87%BA%E9%80%83%E8%9B%87%E7%B1%BB%E7%BA%A6800%E8%87%B3900%E6%9D%A1%23) `1.8M 🔥` `+301%`
1. [什么是隐性嫉妒](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%98%AF%E9%9A%90%E6%80%A7%E5%AB%89%E5%A6%92%23) `1.8M 🔥` `+253%`
1. [黄羿早期 天选藤堂静](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%BE%BF%E6%97%A9%E6%9C%9F%20%E5%A4%A9%E9%80%89%E8%97%A4%E5%A0%82%E9%9D%99%23) `1.7M 🔥` `+291%`
1. [陈思诚带女友阮巨土耳其游玩](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E5%B8%A6%E5%A5%B3%E5%8F%8B%E9%98%AE%E5%B7%A8%E5%9C%9F%E8%80%B3%E5%85%B6%E6%B8%B8%E7%8E%A9%23) `1.7M 🔥` `+238%`
1. [灿如繁星 教资在颤抖](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%20%E6%95%99%E8%B5%84%E5%9C%A8%E9%A2%A4%E6%8A%96%23) `1.6M 🔥` `+252%`

Updated at 2026-07-07 19:32:51

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
