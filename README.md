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

1. [毒皇后扮演者被解雇原因曝光 (The reason why the actor who played the Poison Queen was fired is revealed)](https://s.weibo.com/weibo?q=%23%E6%AF%92%E7%9A%87%E5%90%8E%E6%89%AE%E6%BC%94%E8%80%85%E8%A2%AB%E8%A7%A3%E9%9B%87%E5%8E%9F%E5%9B%A0%E6%9B%9D%E5%85%89%23) `1.0M 🔥` `NEW`
1. [生命树看到一半像换了部剧](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E7%9C%8B%E5%88%B0%E4%B8%80%E5%8D%8A%E5%83%8F%E6%8D%A2%E4%BA%86%E9%83%A8%E5%89%A7%23) `197.0K 🔥` `NEW`
1. [白菊邵云飞离婚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%8F%8A%E9%82%B5%E4%BA%91%E9%A3%9E%E7%A6%BB%E5%A9%9A%23) `116.3K 🔥` `NEW`
1. [女子被男友割喉600天后家属等来判决](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%94%B7%E5%8F%8B%E5%89%B2%E5%96%89600%E5%A4%A9%E5%90%8E%E5%AE%B6%E5%B1%9E%E7%AD%89%E6%9D%A5%E5%88%A4%E5%86%B3%23) `115.0K 🔥` `NEW`
1. [黄金盘中巨震](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%9B%98%E4%B8%AD%E5%B7%A8%E9%9C%87%23) `92.7K 🔥` `NEW`
1. [女子反复瘙痒竟因常年吃面食](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8F%8D%E5%A4%8D%E7%98%99%E7%97%92%E7%AB%9F%E5%9B%A0%E5%B8%B8%E5%B9%B4%E5%90%83%E9%9D%A2%E9%A3%9F%23) `91.8K 🔥` `NEW`
1. [平手友梨奈结婚](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E6%89%8B%E5%8F%8B%E6%A2%A8%E5%A5%88%E7%BB%93%E5%A9%9A%23) `89.6K 🔥` `NEW`
1. [涠洲岛网红鲸鱼被渔船高速撞击](https://s.weibo.com/weibo?q=%23%E6%B6%A0%E6%B4%B2%E5%B2%9B%E7%BD%91%E7%BA%A2%E9%B2%B8%E9%B1%BC%E8%A2%AB%E6%B8%94%E8%88%B9%E9%AB%98%E9%80%9F%E6%92%9E%E5%87%BB%23) `87.9K 🔥` `NEW`
1. [高市早苗赌赢后彻底不装了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%B5%8C%E8%B5%A2%E5%90%8E%E5%BD%BB%E5%BA%95%E4%B8%8D%E8%A3%85%E4%BA%86%23) `79.4K 🔥` `NEW`
1. [原来你们真有年终奖啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BD%A0%E4%BB%AC%E7%9C%9F%E6%9C%89%E5%B9%B4%E7%BB%88%E5%A5%96%E5%95%8A%23) `78.8K 🔥` `NEW`
1. [英国国王遭民众大喊质问 (British king was questioned by people who shouted at him)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%9B%BD%E7%8E%8B%E9%81%AD%E6%B0%91%E4%BC%97%E5%A4%A7%E5%96%8A%E8%B4%A8%E9%97%AE%23) `69.9K 🔥` `NEW`
1. [郑钦文将战新科澳网冠军](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%B0%86%E6%88%98%E6%96%B0%E7%A7%91%E6%BE%B3%E7%BD%91%E5%86%A0%E5%86%9B%23) `68.2K 🔥` `NEW`
1. [法国想对中国复制广场协议](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%83%B3%E5%AF%B9%E4%B8%AD%E5%9B%BD%E5%A4%8D%E5%88%B6%E5%B9%BF%E5%9C%BA%E5%8D%8F%E8%AE%AE%23) `65.7K 🔥` `NEW`
1. [Seedance2.0中外同步发布](https://s.weibo.com/weibo?q=%23Seedance2.0%E4%B8%AD%E5%A4%96%E5%90%8C%E6%AD%A5%E5%8F%91%E5%B8%83%23) `64.6K 🔥` `NEW`
1. [王者荣耀小马糕](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%B0%8F%E9%A9%AC%E7%B3%95%23) `61.0K 🔥` `NEW`
1. [郑钦文晋级多哈女单16强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%99%8B%E7%BA%A7%E5%A4%9A%E5%93%88%E5%A5%B3%E5%8D%9516%E5%BC%BA%23) `55.1K 🔥` `NEW`
1. [整个年会因为这首歌变成了国宴](https://s.weibo.com/weibo?q=%23%E6%95%B4%E4%B8%AA%E5%B9%B4%E4%BC%9A%E5%9B%A0%E4%B8%BA%E8%BF%99%E9%A6%96%E6%AD%8C%E5%8F%98%E6%88%90%E4%BA%86%E5%9B%BD%E5%AE%B4%23) `53.3K 🔥` `NEW`
1. [A股行情](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%A1%8C%E6%83%85%23) `52.2K 🔥` `NEW`
1. [年终奖](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E7%BB%88%E5%A5%96%23) `50.4K 🔥` `NEW`
1. [武大靖说继续冲別认怂](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E9%9D%96%E8%AF%B4%E7%BB%A7%E7%BB%AD%E5%86%B2%E5%88%A5%E8%AE%A4%E6%80%82%23) `49.3K 🔥` `NEW`
1. [Knight说比赛换线要提前报位置 (Knight said that when changing lanes during a game, you need to report your position in advance.)](https://s.weibo.com/weibo?q=%23Knight%E8%AF%B4%E6%AF%94%E8%B5%9B%E6%8D%A2%E7%BA%BF%E8%A6%81%E6%8F%90%E5%89%8D%E6%8A%A5%E4%BD%8D%E7%BD%AE%23) `48.3K 🔥` `NEW`
1. [男子为避酒店春节涨价花1万多租房 (Man spends more than 10,000 yuan on rent to avoid hotel price increase during Spring Festival)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%BA%E9%81%BF%E9%85%92%E5%BA%97%E6%98%A5%E8%8A%82%E6%B6%A8%E4%BB%B7%E8%8A%B11%E4%B8%87%E5%A4%9A%E7%A7%9F%E6%88%BF%23) `732.9K 🔥` `+26%`
1. [中国无人机大山里运腊肠 (Chinese drone transports sausages in mountains)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%A4%A7%E5%B1%B1%E9%87%8C%E8%BF%90%E8%85%8A%E8%82%A0%23) `599.9K 🔥` `+86%`
1. [海外已夸爆Seedance2.0](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%A4%96%E5%B7%B2%E5%A4%B8%E7%88%86Seedance2.0%23) `222.9K 🔥` `+124%`
1. [短道队多人为孙龙发声 (Many members of the short track team spoke out for Sun Long)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%98%9F%E5%A4%9A%E4%BA%BA%E4%B8%BA%E5%AD%99%E9%BE%99%E5%8F%91%E5%A3%B0%23) `182.9K 🔥` `+88%`
1. [韩媒质问这还是体育吗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92%E8%B4%A8%E9%97%AE%E8%BF%99%E8%BF%98%E6%98%AF%E4%BD%93%E8%82%B2%E5%90%97%23) `155.1K 🔥` `+104%`
1. [雷军确认第一代SU7停产](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A1%AE%E8%AE%A4%E7%AC%AC%E4%B8%80%E4%BB%A3SU7%E5%81%9C%E4%BA%A7%23) `116.7K 🔥` `+94%`
1. [李谷一回应缺席马年春晚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%B0%B7%E4%B8%80%E5%9B%9E%E5%BA%94%E7%BC%BA%E5%B8%AD%E9%A9%AC%E5%B9%B4%E6%98%A5%E6%99%9A%23) `114.8K 🔥` `+92%`
1. [射雕英雄传侠之大者金像奖0提 (Legend of the Condor Heroes: The Greatest Golden Statue Award 0 nominations)](https://s.weibo.com/weibo?q=%23%E5%B0%84%E9%9B%95%E8%8B%B1%E9%9B%84%E4%BC%A0%E4%BE%A0%E4%B9%8B%E5%A4%A7%E8%80%85%E9%87%91%E5%83%8F%E5%A5%960%E6%8F%90%23) `113.0K 🔥` `+91%`
1. [印度大一男生求婚遭拒将女生枪杀](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A4%A7%E4%B8%80%E7%94%B7%E7%94%9F%E6%B1%82%E5%A9%9A%E9%81%AD%E6%8B%92%E5%B0%86%E5%A5%B3%E7%94%9F%E6%9E%AA%E6%9D%80%23) `110.7K 🔥` `+88%`
1. [74岁肥猫被医生建议注射药物镇痛 (74-year-old fat cat was recommended by doctor to inject drugs for pain relief)](https://s.weibo.com/weibo?q=%2374%E5%B2%81%E8%82%A5%E7%8C%AB%E8%A2%AB%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E6%B3%A8%E5%B0%84%E8%8D%AF%E7%89%A9%E9%95%87%E7%97%9B%23) `109.2K 🔥` `+85%`
1. [郑则仕因不想终生注射药物开始跑步 (Zheng Zeshi started running because he didn’t want to inject drugs for life)](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%88%99%E4%BB%95%E5%9B%A0%E4%B8%8D%E6%83%B3%E7%BB%88%E7%94%9F%E6%B3%A8%E5%B0%84%E8%8D%AF%E7%89%A9%E5%BC%80%E5%A7%8B%E8%B7%91%E6%AD%A5%23) `108.3K 🔥` `+83%`
1. [爱泼斯坦别墅内老虎标本栩栩如生 (Stuffed tiger comes to life in Epstein's villa)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%88%AB%E5%A2%85%E5%86%85%E8%80%81%E8%99%8E%E6%A0%87%E6%9C%AC%E6%A0%A9%E6%A0%A9%E5%A6%82%E7%94%9F%23) `106.8K 🔥` `+82%`
1. [于正回应明星扎堆前往大孤山 (Yu Zheng responded to celebrities gathering to go to Dagushan)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E6%98%8E%E6%98%9F%E6%89%8E%E5%A0%86%E5%89%8D%E5%BE%80%E5%A4%A7%E5%AD%A4%E5%B1%B1%23) `105.8K 🔥` `+113%`
1. [金博洋短节目86.55分](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8D%9A%E6%B4%8B%E7%9F%AD%E8%8A%82%E7%9B%AE86.55%E5%88%86%23) `94.2K 🔥` `+55%`
1. [王濛快哭了 (Wang Meng is about to cry)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%BF%AB%E5%93%AD%E4%BA%86%23) `92.3K 🔥` `+81%`
1. [日本彻底失控](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BD%BB%E5%BA%95%E5%A4%B1%E6%8E%A7%23) `92.2K 🔥` `+81%`
1. [德云社封箱 (Deyunshe sealing)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E4%BA%91%E7%A4%BE%E5%B0%81%E7%AE%B1%23) `91.1K 🔥` `+41%`
1. [林孝埈捂脸长时间低头](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%8D%82%E8%84%B8%E9%95%BF%E6%97%B6%E9%97%B4%E4%BD%8E%E5%A4%B4%23) `90.3K 🔥` `+78%`
1. [陈星旭 情商](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%20%E6%83%85%E5%95%86%23) `84.2K 🔥` `+114%`
1. [这3件事是生命力的表现 (These three things are manifestations of vitality)](https://s.weibo.com/weibo?q=%23%E8%BF%993%E4%BB%B6%E4%BA%8B%E6%98%AF%E7%94%9F%E5%91%BD%E5%8A%9B%E7%9A%84%E8%A1%A8%E7%8E%B0%23) `79.9K 🔥` `+95%`
1. [孙龙失误](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E5%A4%B1%E8%AF%AF%23) `77.5K 🔥` `+65%`
1. [张杰给100多名员工发超万元红包 (Zhang Jie distributed over 10,000 yuan in red envelopes to more than 100 employees)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E7%BB%99100%E5%A4%9A%E5%90%8D%E5%91%98%E5%B7%A5%E5%8F%91%E8%B6%85%E4%B8%87%E5%85%83%E7%BA%A2%E5%8C%85%23) `74.8K 🔥` `+118%`
1. [王曼昱决胜局擦边球尊重裁判 (Wang Manyu respects the referee with a side kick in the deciding game)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%B3%E8%83%9C%E5%B1%80%E6%93%A6%E8%BE%B9%E7%90%83%E5%B0%8A%E9%87%8D%E8%A3%81%E5%88%A4%23) `73.1K 🔥` `+43%`
1. [特朗普表面祝贺高市私下大发雷霆 (Trump congratulated Gao on the surface but was furious in private)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%A1%A8%E9%9D%A2%E7%A5%9D%E8%B4%BA%E9%AB%98%E5%B8%82%E7%A7%81%E4%B8%8B%E5%A4%A7%E5%8F%91%E9%9B%B7%E9%9C%86%23) `72.8K 🔥` `+88%`
1. [12306回应高铁座椅钻出活蜥蜴](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E9%AB%98%E9%93%81%E5%BA%A7%E6%A4%85%E9%92%BB%E5%87%BA%E6%B4%BB%E8%9C%A5%E8%9C%B4%23) `51.8K 🔥` `+77%`
1. [生命树最讽刺的一幕 (The most ironic scene in the Tree of Life)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E6%9C%80%E8%AE%BD%E5%88%BA%E7%9A%84%E4%B8%80%E5%B9%95%23) `50.3K 🔥` `+105%`
1. [瑞典组合冬奥冰壶混双金牌 (Swedish team wins Winter Olympics curling mixed doubles gold medal)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%85%B8%E7%BB%84%E5%90%88%E5%86%AC%E5%A5%A5%E5%86%B0%E5%A3%B6%E6%B7%B7%E5%8F%8C%E9%87%91%E7%89%8C%23) `64.9K 🔥`
1. [付费假装上班被要求不迟到不玩手机](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%B4%B9%E5%81%87%E8%A3%85%E4%B8%8A%E7%8F%AD%E8%A2%AB%E8%A6%81%E6%B1%82%E4%B8%8D%E8%BF%9F%E5%88%B0%E4%B8%8D%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `209.9K 🔥` `-49%`

Updated at 2026-02-11 07:50:10

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
