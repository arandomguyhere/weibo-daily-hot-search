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

1. [西藏吉隆泥石流灾害新闻发布会实录](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E7%81%BE%E5%AE%B3%E6%96%B0%E9%97%BB%E5%8F%91%E5%B8%83%E4%BC%9A%E5%AE%9E%E5%BD%95%23) `673.9K 🔥` `NEW`
1. [特斯拉推出平价版Model3](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E6%8E%A8%E5%87%BA%E5%B9%B3%E4%BB%B7%E7%89%88Model3%23) `506.9K 🔥` `NEW`
1. [杨洋花少下沉口碑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E8%8A%B1%E5%B0%91%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `301.0K 🔥` `NEW`
1. [美军袭击伊朗南部岛屿](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E5%8D%97%E9%83%A8%E5%B2%9B%E5%B1%BF%23) `263.9K 🔥` `NEW`
1. [Ryan 性骚扰](https://s.weibo.com/weibo?q=%23Ryan%20%E6%80%A7%E9%AA%9A%E6%89%B0%23) `260.3K 🔥` `NEW`
1. [陈粒疑似被性骚扰](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%B2%92%E7%96%91%E4%BC%BC%E8%A2%AB%E6%80%A7%E9%AA%9A%E6%89%B0%23) `252.0K 🔥` `NEW`
1. [被吉隆口岸淤泥里的物品戳到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%B7%A4%E6%B3%A5%E9%87%8C%E7%9A%84%E7%89%A9%E5%93%81%E6%88%B3%E5%88%B0%E4%BA%86%23) `248.4K 🔥` `NEW`
1. [王晶直言内娱顶流都不会演戏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%B6%E7%9B%B4%E8%A8%80%E5%86%85%E5%A8%B1%E9%A1%B6%E6%B5%81%E9%83%BD%E4%B8%8D%E4%BC%9A%E6%BC%94%E6%88%8F%23) `244.1K 🔥` `NEW`
1. [郎平曾说朱婷有时候半个月不回消息](https://s.weibo.com/weibo?q=%23%E9%83%8E%E5%B9%B3%E6%9B%BE%E8%AF%B4%E6%9C%B1%E5%A9%B7%E6%9C%89%E6%97%B6%E5%80%99%E5%8D%8A%E4%B8%AA%E6%9C%88%E4%B8%8D%E5%9B%9E%E6%B6%88%E6%81%AF%23) `243.7K 🔥` `NEW`
1. [陈粒竖中指](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%B2%92%E7%AB%96%E4%B8%AD%E6%8C%87%23) `242.3K 🔥` `NEW`
1. [早春晴朗小说](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%B0%8F%E8%AF%B4%23) `240.4K 🔥` `NEW`
1. [王菲发夹](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%8F%91%E5%A4%B9%23) `236.1K 🔥` `NEW`
1. [吴尊找刘畊宏联系曾辉](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%B0%8A%E6%89%BE%E5%88%98%E7%95%8A%E5%AE%8F%E8%81%94%E7%B3%BB%E6%9B%BE%E8%BE%89%23) `235.4K 🔥` `NEW`
1. [国家动物博物馆标本损伤实图曝光](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8A%A8%E7%89%A9%E5%8D%9A%E7%89%A9%E9%A6%86%E6%A0%87%E6%9C%AC%E6%8D%9F%E4%BC%A4%E5%AE%9E%E5%9B%BE%E6%9B%9D%E5%85%89%23) `234.1K 🔥` `NEW`
1. [梅艳芳母亲3个子女均因患癌去世](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%89%B3%E8%8A%B3%E6%AF%8D%E4%BA%B23%E4%B8%AA%E5%AD%90%E5%A5%B3%E5%9D%87%E5%9B%A0%E6%82%A3%E7%99%8C%E5%8E%BB%E4%B8%96%23) `232.6K 🔥` `NEW`
1. [王菲朝窦靖童喊老母亲在这呢](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%9C%9D%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%96%8A%E8%80%81%E6%AF%8D%E4%BA%B2%E5%9C%A8%E8%BF%99%E5%91%A2%23) `230.1K 🔥` `NEW`
1. [皇马4比0马拉加](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC4%E6%AF%940%E9%A9%AC%E6%8B%89%E5%8A%A0%23) `227.7K 🔥` `NEW`
1. [吴敬平回应为樊振东说话](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%95%AC%E5%B9%B3%E5%9B%9E%E5%BA%94%E4%B8%BA%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%AF%B4%E8%AF%9D%23) `223.7K 🔥` `NEW`
1. [中国女排连续11年无缘亚锦赛冠军](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92%E8%BF%9E%E7%BB%AD11%E5%B9%B4%E6%97%A0%E7%BC%98%E4%BA%9A%E9%94%A6%E8%B5%9B%E5%86%A0%E5%86%9B%23) `222.5K 🔥` `NEW`
1. [美网](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%23) `217.6K 🔥` `NEW`
1. [王欣瑜连续四年晋级美网次轮](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AC%A3%E7%91%9C%E8%BF%9E%E7%BB%AD%E5%9B%9B%E5%B9%B4%E6%99%8B%E7%BA%A7%E7%BE%8E%E7%BD%91%E6%AC%A1%E8%BD%AE%23) `216.8K 🔥` `NEW`
1. [贝林厄姆进球](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E8%BF%9B%E7%90%83%23) `213.0K 🔥` `NEW`
1. [谁能想到花少2只有17天](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%83%BD%E6%83%B3%E5%88%B0%E8%8A%B1%E5%B0%912%E5%8F%AA%E6%9C%8917%E5%A4%A9%23) `212.4K 🔥` `NEW`
1. [张帅止步美网单打首轮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B8%85%E6%AD%A2%E6%AD%A5%E7%BE%8E%E7%BD%91%E5%8D%95%E6%89%93%E9%A6%96%E8%BD%AE%23) `208.7K 🔥` `NEW`
1. [华为李小龙称花11年把梦想照进现实](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%9D%8E%E5%B0%8F%E9%BE%99%E7%A7%B0%E8%8A%B111%E5%B9%B4%E6%8A%8A%E6%A2%A6%E6%83%B3%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E%23) `206.3K 🔥` `NEW`
1. [女排 朱婷](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%8E%92%20%E6%9C%B1%E5%A9%B7%23) `1.2M 🔥` `+253%`
1. [吉隆口岸大楼现状](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%A4%A7%E6%A5%BC%E7%8E%B0%E7%8A%B6%23) `1.0M 🔥` `+303%`
1. [许晴花少2表现被理解](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%99%B4%E8%8A%B1%E5%B0%912%E8%A1%A8%E7%8E%B0%E8%A2%AB%E7%90%86%E8%A7%A3%23) `617.7K 🔥` `+183%`
1. [房贷最长40年购房者称压力下降](https://s.weibo.com/weibo?q=%23%E6%88%BF%E8%B4%B7%E6%9C%80%E9%95%BF40%E5%B9%B4%E8%B4%AD%E6%88%BF%E8%80%85%E7%A7%B0%E5%8E%8B%E5%8A%9B%E4%B8%8B%E9%99%8D%23) `375.8K 🔥` `+731%`
1. [当动物可以变幻成高跟鞋](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%8A%A8%E7%89%A9%E5%8F%AF%E4%BB%A5%E5%8F%98%E5%B9%BB%E6%88%90%E9%AB%98%E8%B7%9F%E9%9E%8B%23) `328.6K 🔥` `+569%`
1. [爷爷去世前怕孙女饿提前包好饺子](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E5%8E%BB%E4%B8%96%E5%89%8D%E6%80%95%E5%AD%99%E5%A5%B3%E9%A5%BF%E6%8F%90%E5%89%8D%E5%8C%85%E5%A5%BD%E9%A5%BA%E5%AD%90%23) `321.6K 🔥` `+558%`
1. [女孩被踢出845个工作群无奈离职](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%A2%AB%E8%B8%A2%E5%87%BA845%E4%B8%AA%E5%B7%A5%E4%BD%9C%E7%BE%A4%E6%97%A0%E5%A5%88%E7%A6%BB%E8%81%8C%23) `257.5K 🔥` `+426%`
1. [花少2心眼子排名](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E5%BF%83%E7%9C%BC%E5%AD%90%E6%8E%92%E5%90%8D%23) `244.0K 🔥` `+157%`
1. [片仔癀5年市值蒸发超1900亿](https://s.weibo.com/weibo?q=%23%E7%89%87%E4%BB%94%E7%99%805%E5%B9%B4%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%91%E8%B6%851900%E4%BA%BF%23) `240.6K 🔥` `+432%`
1. [花少2爆料文](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E7%88%86%E6%96%99%E6%96%87%23) `239.1K 🔥` `+397%`
1. [爷爷去世前留信让孙女守灵别挨饿](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E5%8E%BB%E4%B8%96%E5%89%8D%E7%95%99%E4%BF%A1%E8%AE%A9%E5%AD%99%E5%A5%B3%E5%AE%88%E7%81%B5%E5%88%AB%E6%8C%A8%E9%A5%BF%23) `237.2K 🔥` `+415%`
1. [下意识的偏爱真的藏不住](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E6%84%8F%E8%AF%86%E7%9A%84%E5%81%8F%E7%88%B1%E7%9C%9F%E7%9A%84%E8%97%8F%E4%B8%8D%E4%BD%8F%23) `232.3K 🔥` `+413%`
1. [金饰销量暴跌34%](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E9%94%80%E9%87%8F%E6%9A%B4%E8%B7%8C34%25%23) `229.8K 🔥` `+377%`
1. [自私虚伪的人再爱你也给不出](https://s.weibo.com/weibo?q=%23%E8%87%AA%E7%A7%81%E8%99%9A%E4%BC%AA%E7%9A%84%E4%BA%BA%E5%86%8D%E7%88%B1%E4%BD%A0%E4%B9%9F%E7%BB%99%E4%B8%8D%E5%87%BA%23) `228.7K 🔥` `+285%`
1. [蜂花logo设计师终于被懂了](https://s.weibo.com/weibo?q=%23%E8%9C%82%E8%8A%B1logo%E8%AE%BE%E8%AE%A1%E5%B8%88%E7%BB%88%E4%BA%8E%E8%A2%AB%E6%87%82%E4%BA%86%23) `225.7K 🔥` `+371%`
1. [外耗的人也长结节](https://s.weibo.com/weibo?q=%23%E5%A4%96%E8%80%97%E7%9A%84%E4%BA%BA%E4%B9%9F%E9%95%BF%E7%BB%93%E8%8A%82%23) `224.3K 🔥` `+365%`
1. [重庆轻轨成了国外游客打卡的地方](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%BD%BB%E8%BD%A8%E6%88%90%E4%BA%86%E5%9B%BD%E5%A4%96%E6%B8%B8%E5%AE%A2%E6%89%93%E5%8D%A1%E7%9A%84%E5%9C%B0%E6%96%B9%23) `221.9K 🔥` `+390%`
1. [在外吃草的羊被欺负跑回来告状](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%A4%96%E5%90%83%E8%8D%89%E7%9A%84%E7%BE%8A%E8%A2%AB%E6%AC%BA%E8%B4%9F%E8%B7%91%E5%9B%9E%E6%9D%A5%E5%91%8A%E7%8A%B6%23) `220.3K 🔥` `+387%`
1. [花少2杨洋走丢事件](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E6%9D%A8%E6%B4%8B%E8%B5%B0%E4%B8%A2%E4%BA%8B%E4%BB%B6%23) `219.1K 🔥` `+347%`
1. [黄灿灿差点被妈妈害了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%B7%AE%E7%82%B9%E8%A2%AB%E5%A6%88%E5%A6%88%E5%AE%B3%E4%BA%86%23) `216.0K 🔥` `+377%`
1. [卵巢出问题全身都会受影响](https://s.weibo.com/weibo?q=%23%E5%8D%B5%E5%B7%A2%E5%87%BA%E9%97%AE%E9%A2%98%E5%85%A8%E8%BA%AB%E9%83%BD%E4%BC%9A%E5%8F%97%E5%BD%B1%E5%93%8D%23) `214.3K 🔥` `+347%`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `210.7K 🔥` `+329%`
1. [大连彩民4元斩获505万](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E5%BD%A9%E6%B0%914%E5%85%83%E6%96%A9%E8%8E%B7505%E4%B8%87%23) `210.3K 🔥` `+365%`
1. [俄乌冲突三大高危信号](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B9%8C%E5%86%B2%E7%AA%81%E4%B8%89%E5%A4%A7%E9%AB%98%E5%8D%B1%E4%BF%A1%E5%8F%B7%23) `207.0K 🔥` `+357%`
1. [直播带货目标50万结果卖0元](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E5%B8%A6%E8%B4%A7%E7%9B%AE%E6%A0%8750%E4%B8%87%E7%BB%93%E6%9E%9C%E5%8D%960%E5%85%83%23) `205.6K 🔥` `+354%`

Updated at 2026-08-31 08:36:31

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
