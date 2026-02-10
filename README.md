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

1. [中国跳台滑雪再创历史 (China's ski jumping makes history again)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B7%B3%E5%8F%B0%E6%BB%91%E9%9B%AA%E5%86%8D%E5%88%9B%E5%8E%86%E5%8F%B2%23) `18.6K 🔥` `NEW`
1. [金博洋短节目86.55分](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8D%9A%E6%B4%8B%E7%9F%AD%E8%8A%82%E7%9B%AE86.55%E5%88%86%23) `127.4K 🔥` `+67%`
1. [男子为避酒店春节涨价花1万多租房](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%BA%E9%81%BF%E9%85%92%E5%BA%97%E6%98%A5%E8%8A%82%E6%B6%A8%E4%BB%B7%E8%8A%B11%E4%B8%87%E5%A4%9A%E7%A7%9F%E6%88%BF%23) `93.0K 🔥` `+73%`
1. [中国无人机大山里运腊肠 (Chinese drone transports sausages in mountains)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%A4%A7%E5%B1%B1%E9%87%8C%E8%BF%90%E8%85%8A%E8%82%A0%23) `72.8K 🔥` `+65%`
1. [付费假装上班被要求不迟到不玩手机](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%B4%B9%E5%81%87%E8%A3%85%E4%B8%8A%E7%8F%AD%E8%A2%AB%E8%A6%81%E6%B1%82%E4%B8%8D%E8%BF%9F%E5%88%B0%E4%B8%8D%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `31.5K 🔥`
1. [海外已夸爆Seedance2.0](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%A4%96%E5%B7%B2%E5%A4%B8%E7%88%86Seedance2.0%23) `30.7K 🔥`
1. [短道队多人为孙龙发声 (Many members of the short track team spoke out for Sun Long)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%98%9F%E5%A4%9A%E4%BA%BA%E4%B8%BA%E5%AD%99%E9%BE%99%E5%8F%91%E5%A3%B0%23) `29.2K 🔥`
1. [韩媒质问这还是体育吗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92%E8%B4%A8%E9%97%AE%E8%BF%99%E8%BF%98%E6%98%AF%E4%BD%93%E8%82%B2%E5%90%97%23) `27.4K 🔥`
1. [金博洋男单晋级自由滑](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8D%9A%E6%B4%8B%E7%94%B7%E5%8D%95%E6%99%8B%E7%BA%A7%E8%87%AA%E7%94%B1%E6%BB%91%23) `26.3K 🔥`
1. [成毅两京十五日杀青 (Cheng Yi and Beijing will wrap up on the 15th)](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E6%9D%80%E9%9D%92%23) `24.6K 🔥`
1. [李谷一回应缺席马年春晚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%B0%B7%E4%B8%80%E5%9B%9E%E5%BA%94%E7%BC%BA%E5%B8%AD%E9%A9%AC%E5%B9%B4%E6%98%A5%E6%99%9A%23) `24.5K 🔥`
1. [射雕英雄传侠之大者金像奖0提 (Legend of the Condor Heroes: The Greatest Golden Statue Award 0 nominations)](https://s.weibo.com/weibo?q=%23%E5%B0%84%E9%9B%95%E8%8B%B1%E9%9B%84%E4%BC%A0%E4%BE%A0%E4%B9%8B%E5%A4%A7%E8%80%85%E9%87%91%E5%83%8F%E5%A5%960%E6%8F%90%23) `24.5K 🔥`
1. [74岁肥猫被医生建议注射药物镇痛 (74-year-old fat cat was recommended by doctor to inject drugs for pain relief)](https://s.weibo.com/weibo?q=%2374%E5%B2%81%E8%82%A5%E7%8C%AB%E8%A2%AB%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E6%B3%A8%E5%B0%84%E8%8D%AF%E7%89%A9%E9%95%87%E7%97%9B%23) `24.4K 🔥`
1. [陈星旭 情商](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%20%E6%83%85%E5%95%86%23) `24.2K 🔥`
1. [成何体统 (In what manner)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `24.2K 🔥`
1. [王曼昱决胜局擦边球尊重裁判](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%B3%E8%83%9C%E5%B1%80%E6%93%A6%E8%BE%B9%E7%90%83%E5%B0%8A%E9%87%8D%E8%A3%81%E5%88%A4%23) `23.1K 🔥`
1. [堂姐介绍已婚男致女子遇害事后失联 (My cousin introduced a married man to a woman who was murdered and then lost contact)](https://s.weibo.com/weibo?q=%23%E5%A0%82%E5%A7%90%E4%BB%8B%E7%BB%8D%E5%B7%B2%E5%A9%9A%E7%94%B7%E8%87%B4%E5%A5%B3%E5%AD%90%E9%81%87%E5%AE%B3%E4%BA%8B%E5%90%8E%E5%A4%B1%E8%81%94%23) `22.6K 🔥`
1. [惊蛰无声 (Waking of Insects is silent)](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `22.3K 🔥`
1. [爱泼斯坦别墅内老虎标本栩栩如生 (Stuffed tiger comes to life in Epstein's villa)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%88%AB%E5%A2%85%E5%86%85%E8%80%81%E8%99%8E%E6%A0%87%E6%9C%AC%E6%A0%A9%E6%A0%A9%E5%A6%82%E7%94%9F%23) `22.0K 🔥`
1. [日本彻底失控](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BD%BB%E5%BA%95%E5%A4%B1%E6%8E%A7%23) `21.9K 🔥`
1. [王濛快哭了 (Wang Meng is about to cry)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%BF%AB%E5%93%AD%E4%BA%86%23) `21.7K 🔥`
1. [孙龙失误](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E5%A4%B1%E8%AF%AF%23) `21.6K 🔥`
1. [这3件事是生命力的表现](https://s.weibo.com/weibo?q=%23%E8%BF%993%E4%BB%B6%E4%BA%8B%E6%98%AF%E7%94%9F%E5%91%BD%E5%8A%9B%E7%9A%84%E8%A1%A8%E7%8E%B0%23) `21.6K 🔥`
1. [德云社封箱 (Deyunshe sealing)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E4%BA%91%E7%A4%BE%E5%B0%81%E7%AE%B1%23) `21.5K 🔥`
1. [林孝埈捂脸长时间低头](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%8D%82%E8%84%B8%E9%95%BF%E6%97%B6%E9%97%B4%E4%BD%8E%E5%A4%B4%23) `20.6K 🔥`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `20.3K 🔥`
1. [小年](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B9%B4%23) `20.3K 🔥`
1. [雷军确认第一代SU7停产](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A1%AE%E8%AE%A4%E7%AC%AC%E4%B8%80%E4%BB%A3SU7%E5%81%9C%E4%BA%A7%23) `19.6K 🔥`
1. [印度大一男生求婚遭拒将女生枪杀](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A4%A7%E4%B8%80%E7%94%B7%E7%94%9F%E6%B1%82%E5%A9%9A%E9%81%AD%E6%8B%92%E5%B0%86%E5%A5%B3%E7%94%9F%E6%9E%AA%E6%9D%80%23) `18.7K 🔥`
1. [井柏然刘雯机场十指紧扣](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%E6%9C%BA%E5%9C%BA%E5%8D%81%E6%8C%87%E7%B4%A7%E6%89%A3%23) `17.5K 🔥`
1. [韩国又一非法拍摄网站曝光 (Another illegal filming website in South Korea exposed)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%8F%88%E4%B8%80%E9%9D%9E%E6%B3%95%E6%8B%8D%E6%91%84%E7%BD%91%E7%AB%99%E6%9B%9D%E5%85%89%23) `17.2K 🔥`
1. [生命树](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `16.9K 🔥`
1. [特朗普表面祝贺高市私下大发雷霆 (Trump congratulated Gao on the surface but was furious in private)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%A1%A8%E9%9D%A2%E7%A5%9D%E8%B4%BA%E9%AB%98%E5%B8%82%E7%A7%81%E4%B8%8B%E5%A4%A7%E5%8F%91%E9%9B%B7%E9%9C%86%23) `16.4K 🔥`
1. [郑则仕因不想终生注射药物开始跑步 (Zheng Zeshi started running because he didn’t want to inject drugs for life)](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%88%99%E4%BB%95%E5%9B%A0%E4%B8%8D%E6%83%B3%E7%BB%88%E7%94%9F%E6%B3%A8%E5%B0%84%E8%8D%AF%E7%89%A9%E5%BC%80%E5%A7%8B%E8%B7%91%E6%AD%A5%23) `16.3K 🔥`
1. [于正回应明星扎堆前往大孤山](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E6%98%8E%E6%98%9F%E6%89%8E%E5%A0%86%E5%89%8D%E5%BE%80%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `15.8K 🔥`
1. [央视网络春晚](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E7%BB%9C%E6%98%A5%E6%99%9A%23) `15.8K 🔥`
1. [生命树最讽刺的一幕 (The most ironic scene in the Tree of Life)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E6%9C%80%E8%AE%BD%E5%88%BA%E7%9A%84%E4%B8%80%E5%B9%95%23) `15.8K 🔥`
1. [易烊千玺晒严迪剧照](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%99%92%E4%B8%A5%E8%BF%AA%E5%89%A7%E7%85%A7%23) `15.8K 🔥`
1. [洪世贤掉到榜二了](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E4%B8%96%E8%B4%A4%E6%8E%89%E5%88%B0%E6%A6%9C%E4%BA%8C%E4%BA%86%23) `15.8K 🔥`
1. [杨洋换风格了 (Yang Yang changed his style)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%8D%A2%E9%A3%8E%E6%A0%BC%E4%BA%86%23) `15.8K 🔥`
1. [短道速滑混团接力 (Short track speed skating mixed team relay)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%E6%B7%B7%E5%9B%A2%E6%8E%A5%E5%8A%9B%23) `15.8K 🔥`
1. [春晚](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%23) `15.8K 🔥`
1. [12306回应高铁座椅钻出活蜥蜴](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E9%AB%98%E9%93%81%E5%BA%A7%E6%A4%85%E9%92%BB%E5%87%BA%E6%B4%BB%E8%9C%A5%E8%9C%B4%23) `15.8K 🔥`
1. [曲春雨退役 (Qu Chunyu retires)](https://s.weibo.com/weibo?q=%23%E6%9B%B2%E6%98%A5%E9%9B%A8%E9%80%80%E5%BD%B9%23) `15.8K 🔥`
1. [千问说30亿免单卡快领完了](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E8%AF%B430%E4%BA%BF%E5%85%8D%E5%8D%95%E5%8D%A1%E5%BF%AB%E9%A2%86%E5%AE%8C%E4%BA%86%23) `28.9K 🔥` `-29%`
1. [AI制图骗局](https://s.weibo.com/weibo?q=%23AI%E5%88%B6%E5%9B%BE%E9%AA%97%E5%B1%80%23) `17.6K 🔥` `-36%`
1. [金博洋短节目clean (Jin Boyang short program clean)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8D%9A%E6%B4%8B%E7%9F%AD%E8%8A%82%E7%9B%AEclean%23) `15.8K 🔥` `-39%`
1. [我们的少年时代2 双男主](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%20%E5%8F%8C%E7%94%B7%E4%B8%BB%23) `15.8K 🔥` `-29%`
1. [中国短道混接无缘奖牌 (China's short track hybrid misses medals)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E6%B7%B7%E6%8E%A5%E6%97%A0%E7%BC%98%E5%A5%96%E7%89%8C%23) `15.8K 🔥` `-61%`

Updated at 2026-02-11 05:24:33

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
