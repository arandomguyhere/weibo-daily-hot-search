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

1. [米兰冬奥超越胜负的动人瞬间 (Moving moments beyond victory and defeat at the Milan Winter Olympics)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E8%B6%85%E8%B6%8A%E8%83%9C%E8%B4%9F%E7%9A%84%E5%8A%A8%E4%BA%BA%E7%9E%AC%E9%97%B4%23) `641.7K 🔥` `NEW`
1. [女生失联后用牛粪保温在牛棚被找到](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%A4%B1%E8%81%94%E5%90%8E%E7%94%A8%E7%89%9B%E7%B2%AA%E4%BF%9D%E6%B8%A9%E5%9C%A8%E7%89%9B%E6%A3%9A%E8%A2%AB%E6%89%BE%E5%88%B0%23) `392.7K 🔥` `NEW`
1. [芒果搞钱综艺要来了](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%90%9E%E9%92%B1%E7%BB%BC%E8%89%BA%E8%A6%81%E6%9D%A5%E4%BA%86%23) `296.6K 🔥` `NEW`
1. [台湾地震](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%9C%B0%E9%9C%87%23) `252.3K 🔥` `NEW`
1. [Burberry大秀](https://s.weibo.com/weibo?q=%23Burberry%E5%A4%A7%E7%A7%80%23) `215.3K 🔥` `NEW`
1. [妈妈回应瑶一瑶表演时不开心](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E7%91%B6%E4%B8%80%E7%91%B6%E8%A1%A8%E6%BC%94%E6%97%B6%E4%B8%8D%E5%BC%80%E5%BF%83%23) `169.5K 🔥` `NEW`
1. [情人来访致墨西哥大毒枭行踪暴露](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E6%9D%A5%E8%AE%BF%E8%87%B4%E5%A2%A8%E8%A5%BF%E5%93%A5%E5%A4%A7%E6%AF%92%E6%9E%AD%E8%A1%8C%E8%B8%AA%E6%9A%B4%E9%9C%B2%23) `156.0K 🔥` `NEW`
1. [假如你从初八开始找工作](https://s.weibo.com/weibo?q=%23%E5%81%87%E5%A6%82%E4%BD%A0%E4%BB%8E%E5%88%9D%E5%85%AB%E5%BC%80%E5%A7%8B%E6%89%BE%E5%B7%A5%E4%BD%9C%23) `154.8K 🔥` `NEW`
1. [山东一4A景区现雷人译文](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%B8%804A%E6%99%AF%E5%8C%BA%E7%8E%B0%E9%9B%B7%E4%BA%BA%E8%AF%91%E6%96%87%23) `134.3K 🔥` `NEW`
1. [14岁的谷爱凌就认为自己是中国人](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%9A%84%E8%B0%B7%E7%88%B1%E5%87%8C%E5%B0%B1%E8%AE%A4%E4%B8%BA%E8%87%AA%E5%B7%B1%E6%98%AF%E4%B8%AD%E5%9B%BD%E4%BA%BA%23) `122.9K 🔥` `NEW`
1. [春节返家发现老鼠在冰箱打洞吃肉 (I returned home during the Spring Festival and found a mouse digging holes in the refrigerator to eat meat.)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E8%BF%94%E5%AE%B6%E5%8F%91%E7%8E%B0%E8%80%81%E9%BC%A0%E5%9C%A8%E5%86%B0%E7%AE%B1%E6%89%93%E6%B4%9E%E5%90%83%E8%82%89%23) `114.9K 🔥` `NEW`
1. [皇家马德里称已在中国社媒道歉](https://s.weibo.com/weibo?q=%23%E7%9A%87%E5%AE%B6%E9%A9%AC%E5%BE%B7%E9%87%8C%E7%A7%B0%E5%B7%B2%E5%9C%A8%E4%B8%AD%E5%9B%BD%E7%A4%BE%E5%AA%92%E9%81%93%E6%AD%89%23) `112.0K 🔥` `NEW`
1. [万鹏李昀锐有古早武侠cp的感觉](https://s.weibo.com/weibo?q=%23%E4%B8%87%E9%B9%8F%E6%9D%8E%E6%98%80%E9%94%90%E6%9C%89%E5%8F%A4%E6%97%A9%E6%AD%A6%E4%BE%A0cp%E7%9A%84%E6%84%9F%E8%A7%89%23) `105.3K 🔥` `NEW`
1. [开工第一件事调整工位风水](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B7%A5%E7%AC%AC%E4%B8%80%E4%BB%B6%E4%BA%8B%E8%B0%83%E6%95%B4%E5%B7%A5%E4%BD%8D%E9%A3%8E%E6%B0%B4%23) `102.5K 🔥` `NEW`
1. [导航看了都沉默三秒](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E8%88%AA%E7%9C%8B%E4%BA%86%E9%83%BD%E6%B2%89%E9%BB%98%E4%B8%89%E7%A7%92%23) `102.2K 🔥` `NEW`
1. [登陆少年组合单人大片](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%E7%BB%84%E5%90%88%E5%8D%95%E4%BA%BA%E5%A4%A7%E7%89%87%23) `102.1K 🔥` `NEW`
1. [生命树豆瓣分数涨至8.3](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E8%B1%86%E7%93%A3%E5%88%86%E6%95%B0%E6%B6%A8%E8%87%B38.3%23) `97.7K 🔥` `NEW`
1. [特朗普称不知道还能活多久](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%B8%8D%E7%9F%A5%E9%81%93%E8%BF%98%E8%83%BD%E6%B4%BB%E5%A4%9A%E4%B9%85%23) `95.5K 🔥` `NEW`
1. [差点没认出来这是王骁](https://s.weibo.com/weibo?q=%23%E5%B7%AE%E7%82%B9%E6%B2%A1%E8%AE%A4%E5%87%BA%E6%9D%A5%E8%BF%99%E6%98%AF%E7%8E%8B%E9%AA%81%23) `92.5K 🔥` `NEW`
1. [考研人等分状态belike](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E4%BA%BA%E7%AD%89%E5%88%86%E7%8A%B6%E6%80%81belike%23) `83.3K 🔥` `NEW`
1. [男子扶人反被讹行车记录仪证清白 (Man was blackmailed while helping others, dashcam proves his innocence)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%B6%E4%BA%BA%E5%8F%8D%E8%A2%AB%E8%AE%B9%E8%A1%8C%E8%BD%A6%E8%AE%B0%E5%BD%95%E4%BB%AA%E8%AF%81%E6%B8%85%E7%99%BD%23) `82.0K 🔥` `NEW`
1. [贺峻霖祝丁程鑫本命年快乐](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%A5%9D%E4%B8%81%E7%A8%8B%E9%91%AB%E6%9C%AC%E5%91%BD%E5%B9%B4%E5%BF%AB%E4%B9%90%23) `81.7K 🔥` `NEW`
1. [12306半夜候补成功1700元车票作废 (12306 Successful waiting list in the middle of the night, ticket worth 1,700 yuan is invalid)](https://s.weibo.com/weibo?q=%2312306%E5%8D%8A%E5%A4%9C%E5%80%99%E8%A1%A5%E6%88%90%E5%8A%9F1700%E5%85%83%E8%BD%A6%E7%A5%A8%E4%BD%9C%E5%BA%9F%23) `1.1M 🔥` `+30%`
1. [开工新头好全都上淘宝 (It’s a good idea to start a new business and go to Taobao)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B7%A5%E6%96%B0%E5%A4%B4%E5%A5%BD%E5%85%A8%E9%83%BD%E4%B8%8A%E6%B7%98%E5%AE%9D%23) `569.5K 🔥` `+25%`
1. [官方通报36斤羊烤完仅剩6.9斤](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A536%E6%96%A4%E7%BE%8A%E7%83%A4%E5%AE%8C%E4%BB%85%E5%89%A96.9%E6%96%A4%23) `392.1K 🔥` `+37%`
1. [看演唱会旁边坐的白鹿](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E6%97%81%E8%BE%B9%E5%9D%90%E7%9A%84%E7%99%BD%E9%B9%BF%23) `230.8K 🔥` `+47%`
1. [开工第一天 请假](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B7%A5%E7%AC%AC%E4%B8%80%E5%A4%A9%20%E8%AF%B7%E5%81%87%23) `374.1K 🔥`
1. [iPhone18 折叠](https://s.weibo.com/weibo?q=%23iPhone18%20%E6%8A%98%E5%8F%A0%23) `251.3K 🔥`
1. [50岁的陈坤24岁的张康乐](https://s.weibo.com/weibo?q=%2350%E5%B2%81%E7%9A%84%E9%99%88%E5%9D%A424%E5%B2%81%E7%9A%84%E5%BC%A0%E5%BA%B7%E4%B9%90%23) `240.1K 🔥`
1. [这胡同别让王一博看见了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%83%A1%E5%90%8C%E5%88%AB%E8%AE%A9%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9C%8B%E8%A7%81%E4%BA%86%23) `215.2K 🔥`
1. [iPhone18Pro新配色目标一眼最新款 (iPhone 18 Pro new color target at a glance the latest model)](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%96%B0%E9%85%8D%E8%89%B2%E7%9B%AE%E6%A0%87%E4%B8%80%E7%9C%BC%E6%9C%80%E6%96%B0%E6%AC%BE%23) `194.8K 🔥`
1. [曝百妖谱主演阵容](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BE%E5%A6%96%E8%B0%B1%E4%B8%BB%E6%BC%94%E9%98%B5%E5%AE%B9%23) `108.2K 🔥`
1. [奶茶杯盖上为啥这么多孔 (Why are there so many holes in the lid of the milk tea cup?)](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E8%8C%B6%E6%9D%AF%E7%9B%96%E4%B8%8A%E4%B8%BA%E5%95%A5%E8%BF%99%E4%B9%88%E5%A4%9A%E5%AD%94%23) `99.4K 🔥`
1. [吴京 时代峰峻古代](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%8F%A4%E4%BB%A3%23) `90.0K 🔥`
1. [考研出分时间 (Postgraduate entrance examination score time)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E5%87%BA%E5%88%86%E6%97%B6%E9%97%B4%23) `800.4K 🔥` `-30%`
1. [考研查分 (Postgraduate entrance examination score check)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86%23) `343.3K 🔥` `-29%`
1. [灵隐寺惊现110万家厂商祈福](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%9A%90%E5%AF%BA%E6%83%8A%E7%8E%B0110%E4%B8%87%E5%AE%B6%E5%8E%82%E5%95%86%E7%A5%88%E7%A6%8F%23) `284.4K 🔥` `-27%`
1. [日本](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%23) `216.1K 🔥` `-23%`
1. [这些证书可抵个税](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E8%AF%81%E4%B9%A6%E5%8F%AF%E6%8A%B5%E4%B8%AA%E7%A8%8E%23) `215.7K 🔥` `-49%`
1. [秋雅别打电话了 我怕夏洛误会 (Qiu Ya, stop calling. I'm afraid Xia Luo will misunderstand.)](https://s.weibo.com/weibo?q=%23%E7%A7%8B%E9%9B%85%E5%88%AB%E6%89%93%E7%94%B5%E8%AF%9D%E4%BA%86%20%E6%88%91%E6%80%95%E5%A4%8F%E6%B4%9B%E8%AF%AF%E4%BC%9A%23) `175.6K 🔥` `-32%`
1. [章若楠王安宇排名不分先后 (Zhang Ruonan and Wang Anyu are ranked in no particular order)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%8E%8B%E5%AE%89%E5%AE%87%E6%8E%92%E5%90%8D%E4%B8%8D%E5%88%86%E5%85%88%E5%90%8E%23) `155.8K 🔥` `-67%`
1. [丁程鑫严浩翔比24](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%AF%9424%23) `155.5K 🔥` `-23%`
1. [谢楠 引导型恋人](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%20%E5%BC%95%E5%AF%BC%E5%9E%8B%E6%81%8B%E4%BA%BA%23) `151.6K 🔥` `-31%`
1. [郑钦文取关里巴教练](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%8F%96%E5%85%B3%E9%87%8C%E5%B7%B4%E6%95%99%E7%BB%83%23) `133.4K 🔥` `-52%`
1. [研招网](https://s.weibo.com/weibo?q=%23%E7%A0%94%E6%8B%9B%E7%BD%91%23) `112.8K 🔥` `-28%`
1. [考研](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%23) `110.4K 🔥` `-33%`
1. [韩寒透露飞驰人生4](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AF%92%E9%80%8F%E9%9C%B2%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F4%23) `110.2K 🔥` `-44%`
1. [高速免费最后1分钟实拍 (High speed free last minute real shot)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E5%85%8D%E8%B4%B9%E6%9C%80%E5%90%8E1%E5%88%86%E9%92%9F%E5%AE%9E%E6%8B%8D%23) `109.3K 🔥` `-48%`
1. [不发朋友圈的人是什么性格](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%9A%84%E4%BA%BA%E6%98%AF%E4%BB%80%E4%B9%88%E6%80%A7%E6%A0%BC%23) `107.9K 🔥` `-46%`
1. [车主卡点下高速失败缴费400元](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%B8%BB%E5%8D%A1%E7%82%B9%E4%B8%8B%E9%AB%98%E9%80%9F%E5%A4%B1%E8%B4%A5%E7%BC%B4%E8%B4%B9400%E5%85%83%23) `102.1K 🔥` `-39%`

Updated at 2026-02-24 13:54:47

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
