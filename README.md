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

1. [重庆山体崩塌现场发现人体残骸 (Human remains found at Chongqing mountain collapse site)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%E7%8E%B0%E5%9C%BA%E5%8F%91%E7%8E%B0%E4%BA%BA%E4%BD%93%E6%AE%8B%E9%AA%B8%23) `2.0M 🔥` `NEW`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `1.0M 🔥` `NEW`
1. [我国地震预警公众服务体系初步建成](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%9C%B0%E9%9C%87%E9%A2%84%E8%AD%A6%E5%85%AC%E4%BC%97%E6%9C%8D%E5%8A%A1%E4%BD%93%E7%B3%BB%E5%88%9D%E6%AD%A5%E5%BB%BA%E6%88%90%23) `989.3K 🔥` `NEW`
1. [小米澎程技术发布定档7月30日](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E6%8A%80%E6%9C%AF%E5%8F%91%E5%B8%83%E5%AE%9A%E6%A1%A37%E6%9C%8830%E6%97%A5%23) `984.1K 🔥` `NEW`
1. [长鑫科技上市](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%B8%8A%E5%B8%82%23) `983.1K 🔥` `NEW`
1. [床上四件套变床上四十件套](https://s.weibo.com/weibo?q=%23%E5%BA%8A%E4%B8%8A%E5%9B%9B%E4%BB%B6%E5%A5%97%E5%8F%98%E5%BA%8A%E4%B8%8A%E5%9B%9B%E5%8D%81%E4%BB%B6%E5%A5%97%23) `859.7K 🔥` `NEW`
1. [长鑫科技总市值](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E6%80%BB%E5%B8%82%E5%80%BC%23) `798.0K 🔥` `NEW`
1. [宝马车主逃单3000被抓说这么多吗](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E9%A9%AC%E8%BD%A6%E4%B8%BB%E9%80%83%E5%8D%953000%E8%A2%AB%E6%8A%93%E8%AF%B4%E8%BF%99%E4%B9%88%E5%A4%9A%E5%90%97%23) `685.8K 🔥` `NEW`
1. [九门定档](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%AE%9A%E6%A1%A3%23) `556.9K 🔥` `NEW`
1. [库里回应詹姆斯加盟76人](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E5%9B%9E%E5%BA%94%E8%A9%B9%E5%A7%86%E6%96%AF%E5%8A%A0%E7%9B%9F76%E4%BA%BA%23) `318.1K 🔥` `NEW`
1. [卫健局介入女童基因编辑死亡事件 (Health Bureau intervenes in gene editing death of girl)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%B1%80%E4%BB%8B%E5%85%A5%E5%A5%B3%E7%AB%A5%E5%9F%BA%E5%9B%A0%E7%BC%96%E8%BE%91%E6%AD%BB%E4%BA%A1%E4%BA%8B%E4%BB%B6%23) `318.1K 🔥` `NEW`
1. [李权哲道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9D%83%E5%93%B2%E9%81%93%E6%AD%89%23) `318.1K 🔥` `NEW`
1. [鹿晗这两张图被判AI了](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%BF%99%E4%B8%A4%E5%BC%A0%E5%9B%BE%E8%A2%AB%E5%88%A4AI%E4%BA%86%23) `318.1K 🔥` `NEW`
1. [再也不敢吃削过皮的水果了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E4%B9%9F%E4%B8%8D%E6%95%A2%E5%90%83%E5%89%8A%E8%BF%87%E7%9A%AE%E7%9A%84%E6%B0%B4%E6%9E%9C%E4%BA%86%23) `318.0K 🔥` `NEW`
1. [50万粉丝抓蛇博主在广西排除蛇患](https://s.weibo.com/weibo?q=%2350%E4%B8%87%E7%B2%89%E4%B8%9D%E6%8A%93%E8%9B%87%E5%8D%9A%E4%B8%BB%E5%9C%A8%E5%B9%BF%E8%A5%BF%E6%8E%92%E9%99%A4%E8%9B%87%E6%82%A3%23) `318.0K 🔥` `NEW`
1. [陶昕然吐槽雀骨里自己的角色](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E5%90%90%E6%A7%BD%E9%9B%80%E9%AA%A8%E9%87%8C%E8%87%AA%E5%B7%B1%E7%9A%84%E8%A7%92%E8%89%B2%23) `318.0K 🔥` `NEW`
1. [李权哲 小牌大耍](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9D%83%E5%93%B2%20%E5%B0%8F%E7%89%8C%E5%A4%A7%E8%80%8D%23) `318.0K 🔥` `NEW`
1. [美素佳儿奶粉 铅超标事件](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%B4%A0%E4%BD%B3%E5%84%BF%E5%A5%B6%E7%B2%89%20%E9%93%85%E8%B6%85%E6%A0%87%E4%BA%8B%E4%BB%B6%23) `318.0K 🔥` `NEW`
1. [小米澎程发布会定档](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E5%8F%91%E5%B8%83%E4%BC%9A%E5%AE%9A%E6%A1%A3%23) `318.0K 🔥` `NEW`
1. [官方通报调查毒性中药材销售乱象](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E8%B0%83%E6%9F%A5%E6%AF%92%E6%80%A7%E4%B8%AD%E8%8D%AF%E6%9D%90%E9%94%80%E5%94%AE%E4%B9%B1%E8%B1%A1%23) `318.0K 🔥` `NEW`
1. [上海一酒店月租万元起长住客近半 (A Shanghai hotel has nearly half of its long-term guests with monthly rents starting at 10,000 yuan)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E9%85%92%E5%BA%97%E6%9C%88%E7%A7%9F%E4%B8%87%E5%85%83%E8%B5%B7%E9%95%BF%E4%BD%8F%E5%AE%A2%E8%BF%91%E5%8D%8A%23) `318.0K 🔥` `NEW`
1. [男子冲进早教班动手打3岁幼童](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%86%B2%E8%BF%9B%E6%97%A9%E6%95%99%E7%8F%AD%E5%8A%A8%E6%89%8B%E6%89%933%E5%B2%81%E5%B9%BC%E7%AB%A5%23) `318.0K 🔥` `NEW`
1. [不处理垃圾老婆就派乌鸦来](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%A4%84%E7%90%86%E5%9E%83%E5%9C%BE%E8%80%81%E5%A9%86%E5%B0%B1%E6%B4%BE%E4%B9%8C%E9%B8%A6%E6%9D%A5%23) `318.0K 🔥` `NEW`
1. [那英抢票](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E6%8A%A2%E7%A5%A8%23) `318.0K 🔥` `NEW`
1. [凤舞九天杀青](https://s.weibo.com/weibo?q=%23%E5%87%A4%E8%88%9E%E4%B9%9D%E5%A4%A9%E6%9D%80%E9%9D%92%23) `318.0K 🔥` `NEW`
1. [龙卷风突袭 他3分钟失去父母和公司](https://s.weibo.com/weibo?q=%23%E9%BE%99%E5%8D%B7%E9%A3%8E%E7%AA%81%E8%A2%AD%20%E4%BB%963%E5%88%86%E9%92%9F%E5%A4%B1%E5%8E%BB%E7%88%B6%E6%AF%8D%E5%92%8C%E5%85%AC%E5%8F%B8%23) `318.0K 🔥` `NEW`
1. [陈奕天为李宏毅发声](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E5%A4%A9%E4%B8%BA%E6%9D%8E%E5%AE%8F%E6%AF%85%E5%8F%91%E5%A3%B0%23) `308.8K 🔥` `NEW`
1. [王虹同款项链售罄](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E5%90%8C%E6%AC%BE%E9%A1%B9%E9%93%BE%E5%94%AE%E7%BD%84%23) `305.8K 🔥` `NEW`
1. [中国制造在全球产业变局中释放新价值](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%88%B6%E9%80%A0%E5%9C%A8%E5%85%A8%E7%90%83%E4%BA%A7%E4%B8%9A%E5%8F%98%E5%B1%80%E4%B8%AD%E9%87%8A%E6%94%BE%E6%96%B0%E4%BB%B7%E5%80%BC%23) `301.1K 🔥` `NEW`
1. [迪奥曼德加盟皇马](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A5%A5%E6%9B%BC%E5%BE%B7%E5%8A%A0%E7%9B%9F%E7%9A%87%E9%A9%AC%23) `298.4K 🔥` `NEW`
1. [北航副教授用小学知识讲透AI原理 (Beihang associate professor uses elementary school knowledge to explain the principles of AI)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E8%88%AA%E5%89%AF%E6%95%99%E6%8E%88%E7%94%A8%E5%B0%8F%E5%AD%A6%E7%9F%A5%E8%AF%86%E8%AE%B2%E9%80%8FAI%E5%8E%9F%E7%90%86%23) `291.2K 🔥` `NEW`
1. [中签长鑫科技你会持有还是卖出](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%AD%BE%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%BD%A0%E4%BC%9A%E6%8C%81%E6%9C%89%E8%BF%98%E6%98%AF%E5%8D%96%E5%87%BA%23) `288.6K 🔥` `NEW`
1. [使馆通报中国公民遭保安强力对待](https://s.weibo.com/weibo?q=%23%E4%BD%BF%E9%A6%86%E9%80%9A%E6%8A%A5%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E9%81%AD%E4%BF%9D%E5%AE%89%E5%BC%BA%E5%8A%9B%E5%AF%B9%E5%BE%85%23) `286.0K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `284.3K 🔥` `NEW`
1. [越南感谢中国](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23) `271.5K 🔥` `NEW`
1. [陈伟霆打卡张启山痛楼](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E6%89%93%E5%8D%A1%E5%BC%A0%E5%90%AF%E5%B1%B1%E7%97%9B%E6%A5%BC%23) `243.5K 🔥` `NEW`
1. [柳柳说最舍不得周佑凌](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3%E8%AF%B4%E6%9C%80%E8%88%8D%E4%B8%8D%E5%BE%97%E5%91%A8%E4%BD%91%E5%87%8C%23) `237.2K 🔥` `NEW`
1. [长鑫科技市值超过英特尔](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%B8%82%E5%80%BC%E8%B6%85%E8%BF%87%E8%8B%B1%E7%89%B9%E5%B0%94%23) `233.6K 🔥` `NEW`
1. [黄多多龙珠耳钉](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E9%BE%99%E7%8F%A0%E8%80%B3%E9%92%89%23) `233.4K 🔥` `NEW`
1. [安徽卫视播AI剧](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E5%8D%AB%E8%A7%86%E6%92%ADAI%E5%89%A7%23) `231.4K 🔥` `NEW`
1. [第一批被AI代替的受害者出现了 (The first victims replaced by AI appear)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E8%A2%ABAI%E4%BB%A3%E6%9B%BF%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `230.9K 🔥` `NEW`
1. [昆凌中文名字叫武谊蓁](https://s.weibo.com/weibo?q=%23%E6%98%86%E5%87%8C%E4%B8%AD%E6%96%87%E5%90%8D%E5%AD%97%E5%8F%AB%E6%AD%A6%E8%B0%8A%E8%93%81%23) `228.2K 🔥` `NEW`
1. [发现好多大学生不懂邮件礼仪](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A5%BD%E5%A4%9A%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%B8%8D%E6%87%82%E9%82%AE%E4%BB%B6%E7%A4%BC%E4%BB%AA%23) `228.2K 🔥` `NEW`
1. [李硕珉崔韩率入伍](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%A1%95%E7%8F%89%E5%B4%94%E9%9F%A9%E7%8E%87%E5%85%A5%E4%BC%8D%23) `216.9K 🔥` `NEW`
1. [长鑫科技开盘价](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%BC%80%E7%9B%98%E4%BB%B7%23) `216.6K 🔥` `NEW`
1. [曝詹姆斯合同无交易否决权](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%A9%B9%E5%A7%86%E6%96%AF%E5%90%88%E5%90%8C%E6%97%A0%E4%BA%A4%E6%98%93%E5%90%A6%E5%86%B3%E6%9D%83%23) `214.8K 🔥` `NEW`
1. [郑钦文首战伊埃拉](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%A6%96%E6%88%98%E4%BC%8A%E5%9F%83%E6%8B%89%23) `214.3K 🔥` `NEW`
1. [中国造出全球首颗人脑速度芯片](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%A0%E5%87%BA%E5%85%A8%E7%90%83%E9%A6%96%E9%A2%97%E4%BA%BA%E8%84%91%E9%80%9F%E5%BA%A6%E8%8A%AF%E7%89%87%23) `214.2K 🔥` `NEW`
1. [长鑫员工说上市和普通员工没啥关系](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E5%91%98%E5%B7%A5%E8%AF%B4%E4%B8%8A%E5%B8%82%E5%92%8C%E6%99%AE%E9%80%9A%E5%91%98%E5%B7%A5%E6%B2%A1%E5%95%A5%E5%85%B3%E7%B3%BB%23) `214.1K 🔥` `NEW`
1. [孟子义大结局杀疯了](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%A4%A7%E7%BB%93%E5%B1%80%E6%9D%80%E7%96%AF%E4%BA%86%23) `213.0K 🔥` `NEW`
1. [李宏毅方硬刚李登科 (Li Hongyi Fang Gang Li Dengke)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%8F%E6%AF%85%E6%96%B9%E7%A1%AC%E5%88%9A%E6%9D%8E%E7%99%BB%E7%A7%91%23) `318.0K 🔥`

Updated at 2026-07-27 12:04:37

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
