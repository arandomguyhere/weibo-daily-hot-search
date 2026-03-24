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

1. [人生真好玩 下辈子还来 (Life is so fun, I’ll come back in the next life)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E7%9C%9F%E5%A5%BD%E7%8E%A9%20%E4%B8%8B%E8%BE%88%E5%AD%90%E8%BF%98%E6%9D%A5%23) `140.4K 🔥` `NEW`
1. [胡锡进为张雪峰唏嘘难过](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E4%B8%BA%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%94%8F%E5%98%98%E9%9A%BE%E8%BF%87%23) `65.1K 🔥` `NEW`
1. [你好1983](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%23) `54.9K 🔥` `NEW`
1. [唐尚珺悼念张雪峰](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%B0%9A%E7%8F%BA%E6%82%BC%E5%BF%B5%E5%BC%A0%E9%9B%AA%E5%B3%B0%23) `54.9K 🔥` `NEW`
1. [柳智敏翻唱中文歌](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E7%BF%BB%E5%94%B1%E4%B8%AD%E6%96%87%E6%AD%8C%23) `54.8K 🔥` `NEW`
1. [隐身的名字](https://s.weibo.com/weibo?q=%23%E9%9A%90%E8%BA%AB%E7%9A%84%E5%90%8D%E5%AD%97%23) `54.8K 🔥` `NEW`
1. [王一博上海耐力赛纪录片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%8A%E6%B5%B7%E8%80%90%E5%8A%9B%E8%B5%9B%E7%BA%AA%E5%BD%95%E7%89%87%23) `54.7K 🔥` `NEW`
1. [卓沅收工照](https://s.weibo.com/weibo?q=%23%E5%8D%93%E6%B2%85%E6%94%B6%E5%B7%A5%E7%85%A7%23) `54.7K 🔥` `NEW`
1. [我许可](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%AE%B8%E5%8F%AF%23) `54.7K 🔥` `NEW`
1. [早睡](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%9D%A1%23) `425.1K 🔥` `+134%`
1. [峰学蔚来总经理称学员员工权益均有保障 (General Manager of Fengxue Weilai said that the rights of students and employees are protected)](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%AD%A6%E8%94%9A%E6%9D%A5%E6%80%BB%E7%BB%8F%E7%90%86%E7%A7%B0%E5%AD%A6%E5%91%98%E5%91%98%E5%B7%A5%E6%9D%83%E7%9B%8A%E5%9D%87%E6%9C%89%E4%BF%9D%E9%9A%9C%23) `346.2K 🔥` `-52%`
1. [太空加油站新进展](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E7%A9%BA%E5%8A%A0%E6%B2%B9%E7%AB%99%E6%96%B0%E8%BF%9B%E5%B1%95%23) `295.1K 🔥` `-32%`
1. [华境S遭高速侧碰后坠落高坡](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%A2%83S%E9%81%AD%E9%AB%98%E9%80%9F%E4%BE%A7%E7%A2%B0%E5%90%8E%E5%9D%A0%E8%90%BD%E9%AB%98%E5%9D%A1%23) `267.3K 🔥` `-30%`
1. [高强度工作 不要运动 (High-intensity work, no exercise)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%BC%BA%E5%BA%A6%E5%B7%A5%E4%BD%9C%20%E4%B8%8D%E8%A6%81%E8%BF%90%E5%8A%A8%23) `266.2K 🔥` `-65%`
1. [周杰伦新歌口碑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E6%AD%8C%E5%8F%A3%E7%A2%91%23) `229.9K 🔥` `-40%`
1. [张雪峰公司发布讣告](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%85%AC%E5%8F%B8%E5%8F%91%E5%B8%83%E8%AE%A3%E5%91%8A%23) `208.2K 🔥` `-21%`
1. [容易触发猝死的6个因素](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%98%93%E8%A7%A6%E5%8F%91%E7%8C%9D%E6%AD%BB%E7%9A%846%E4%B8%AA%E5%9B%A0%E7%B4%A0%23) `145.2K 🔥` `-47%`
1. [迪丽热巴眼技](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9C%BC%E6%8A%80%23) `84.5K 🔥` `-54%`
1. [周杰伦新专辑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E4%B8%93%E8%BE%91%23) `79.9K 🔥` `-54%`
1. [心源性猝死 (sudden cardiac death)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%23) `78.5K 🔥` `-56%`
1. [张雪峰曾回应心脏不好质疑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E6%9B%BE%E5%9B%9E%E5%BA%94%E5%BF%83%E8%84%8F%E4%B8%8D%E5%A5%BD%E8%B4%A8%E7%96%91%23) `75.9K 🔥` `-51%`
1. [宁艺卓ins点赞刘美贤](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93ins%E7%82%B9%E8%B5%9E%E5%88%98%E7%BE%8E%E8%B4%A4%23) `72.0K 🔥` `-54%`
1. [峰学蔚来 (Fengxue Weilai)](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%AD%A6%E8%94%9A%E6%9D%A5%23) `68.8K 🔥` `-59%`
1. [邓凯孔雪儿借位吻](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E5%AD%94%E9%9B%AA%E5%84%BF%E5%80%9F%E4%BD%8D%E5%90%BB%23) `66.1K 🔥` `-57%`
1. [张雪峰生前谈墓碑上要写什么](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E7%94%9F%E5%89%8D%E8%B0%88%E5%A2%93%E7%A2%91%E4%B8%8A%E8%A6%81%E5%86%99%E4%BB%80%E4%B9%88%23) `65.8K 🔥` `-62%`
1. [睡够8小时](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%A4%9F8%E5%B0%8F%E6%97%B6%23) `65.3K 🔥` `-61%`
1. [火了还没适应的明星最好玩了](https://s.weibo.com/weibo?q=%23%E7%81%AB%E4%BA%86%E8%BF%98%E6%B2%A1%E9%80%82%E5%BA%94%E7%9A%84%E6%98%8E%E6%98%9F%E6%9C%80%E5%A5%BD%E7%8E%A9%E4%BA%86%23) `55.1K 🔥` `-67%`
1. [4岁女童就诊177次患者是母亲](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%B0%B1%E8%AF%8A177%E6%AC%A1%E6%82%A3%E8%80%85%E6%98%AF%E6%AF%8D%E4%BA%B2%23) `55.1K 🔥` `-65%`
1. [张雪峰女儿还那么小](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%A5%B3%E5%84%BF%E8%BF%98%E9%82%A3%E4%B9%88%E5%B0%8F%23) `55.0K 🔥` `-65%`
1. [睡觉是延长心脏寿命最好的方式](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E6%98%AF%E5%BB%B6%E9%95%BF%E5%BF%83%E8%84%8F%E5%AF%BF%E5%91%BD%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B9%E5%BC%8F%23) `55.0K 🔥` `-65%`
1. [泽尻英龙华40岁状态](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E5%B0%BB%E8%8B%B1%E9%BE%99%E5%8D%8E40%E5%B2%81%E7%8A%B6%E6%80%81%23) `55.0K 🔥` `-64%`
1. [中方要求日方立即彻查严惩 (China demands that Japan immediately investigate and punish severely)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E8%A6%81%E6%B1%82%E6%97%A5%E6%96%B9%E7%AB%8B%E5%8D%B3%E5%BD%BB%E6%9F%A5%E4%B8%A5%E6%83%A9%23) `55.0K 🔥` `-65%`
1. [考研人](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E4%BA%BA%23) `55.0K 🔥` `-65%`
1. [张凌赫蓝色花蝴蝶造型 (Zhang Linghe blue flower butterfly style)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%93%9D%E8%89%B2%E8%8A%B1%E8%9D%B4%E8%9D%B6%E9%80%A0%E5%9E%8B%23) `55.0K 🔥` `-65%`
1. [日本](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%23) `55.0K 🔥` `-64%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `55.0K 🔥` `-64%`
1. [伊朗喊美国做个了断](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%96%8A%E7%BE%8E%E5%9B%BD%E5%81%9A%E4%B8%AA%E4%BA%86%E6%96%AD%23) `54.9K 🔥` `-64%`
1. [以色列被打穿了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AB%E6%89%93%E7%A9%BF%E4%BA%86%23) `54.9K 🔥` `-65%`
1. [张凌赫陈哲远将军造型对比](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%99%88%E5%93%B2%E8%BF%9C%E5%B0%86%E5%86%9B%E9%80%A0%E5%9E%8B%E5%AF%B9%E6%AF%94%23) `54.9K 🔥` `-64%`
1. [地铁吐血女孩已离开华西医院 (The girl who vomited blood on the subway has left West China Hospital)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E5%B7%B2%E7%A6%BB%E5%BC%80%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%23) `54.9K 🔥` `-64%`
1. [管泽元升级当爸](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%E5%8D%87%E7%BA%A7%E5%BD%93%E7%88%B8%23) `54.9K 🔥` `-64%`
1. [过度运动 (excessive exercise)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E8%BF%90%E5%8A%A8%23) `54.9K 🔥` `-65%`
1. [殡葬行业大哥缓解孤独终老焦虑](https://s.weibo.com/weibo?q=%23%E6%AE%A1%E8%91%AC%E8%A1%8C%E4%B8%9A%E5%A4%A7%E5%93%A5%E7%BC%93%E8%A7%A3%E5%AD%A4%E7%8B%AC%E7%BB%88%E8%80%81%E7%84%A6%E8%99%91%23) `54.8K 🔥` `-65%`
1. [文淇 年轻女演员演主角等于没票房](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%20%E5%B9%B4%E8%BD%BB%E5%A5%B3%E6%BC%94%E5%91%98%E6%BC%94%E4%B8%BB%E8%A7%92%E7%AD%89%E4%BA%8E%E6%B2%A1%E7%A5%A8%E6%88%BF%23) `54.8K 🔥` `-65%`
1. [曾经只值10元的二手机现在回收价500](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E7%BB%8F%E5%8F%AA%E5%80%BC10%E5%85%83%E7%9A%84%E4%BA%8C%E6%89%8B%E6%9C%BA%E7%8E%B0%E5%9C%A8%E5%9B%9E%E6%94%B6%E4%BB%B7500%23) `54.8K 🔥` `-64%`
1. [宋威龙说男人最好的医美是医美 (Song Weilong said that the best medical beauty treatment for men is medical beauty treatment)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%AF%B4%E7%94%B7%E4%BA%BA%E6%9C%80%E5%A5%BD%E7%9A%84%E5%8C%BB%E7%BE%8E%E6%98%AF%E5%8C%BB%E7%BE%8E%23) `54.8K 🔥` `-64%`
1. [齐旻的死是被人下了十年的慢性毒](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%97%BB%E7%9A%84%E6%AD%BB%E6%98%AF%E8%A2%AB%E4%BA%BA%E4%B8%8B%E4%BA%86%E5%8D%81%E5%B9%B4%E7%9A%84%E6%85%A2%E6%80%A7%E6%AF%92%23) `54.8K 🔥` `-65%`
1. [这装修有种把钱花到刀鞘上的感觉 (This decoration feels like spending money on a scabbard.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%A3%85%E4%BF%AE%E6%9C%89%E7%A7%8D%E6%8A%8A%E9%92%B1%E8%8A%B1%E5%88%B0%E5%88%80%E9%9E%98%E4%B8%8A%E7%9A%84%E6%84%9F%E8%A7%89%23) `54.8K 🔥` `-64%`
1. [外交部回应日方拟将中日关系降级](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E6%97%A5%E6%96%B9%E6%8B%9F%E5%B0%86%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%E9%99%8D%E7%BA%A7%23) `54.8K 🔥` `-64%`
1. [宋雨琦回应头部受伤](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E5%9B%9E%E5%BA%94%E5%A4%B4%E9%83%A8%E5%8F%97%E4%BC%A4%23) `54.8K 🔥` `-65%`
1. [刘亦菲或客串穿普拉达的女王2](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%88%96%E5%AE%A2%E4%B8%B2%E7%A9%BF%E6%99%AE%E6%8B%89%E8%BE%BE%E7%9A%84%E5%A5%B3%E7%8E%8B2%23) `54.7K 🔥` `-65%`

Updated at 2026-03-25 01:52:49

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
