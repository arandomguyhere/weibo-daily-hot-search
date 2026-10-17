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

1. [在梅边 夯爆了](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%A2%85%E8%BE%B9%20%E5%A4%AF%E7%88%86%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [杭州大三女孩7个月开20家柠檬奶店](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%A4%A7%E4%B8%89%E5%A5%B3%E5%AD%A97%E4%B8%AA%E6%9C%88%E5%BC%8020%E5%AE%B6%E6%9F%A0%E6%AA%AC%E5%A5%B6%E5%BA%97%23) `815.1K 🔥` `NEW`
1. [广交会真的太全面了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%85%A8%E9%9D%A2%E4%BA%86%23) `720.9K 🔥` `NEW`
1. [你最想要哪个Wigo](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%9C%80%E6%83%B3%E8%A6%81%E5%93%AA%E4%B8%AAWigo%23) `703.4K 🔥` `NEW`
1. [曾辉淘汰](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%B7%98%E6%B1%B0%23) `694.4K 🔥` `NEW`
1. [蒙古国保护区约八成被烧毁](https://s.weibo.com/weibo?q=%23%E8%92%99%E5%8F%A4%E5%9B%BD%E4%BF%9D%E6%8A%A4%E5%8C%BA%E7%BA%A6%E5%85%AB%E6%88%90%E8%A2%AB%E7%83%A7%E6%AF%81%23) `664.7K 🔥` `NEW`
1. [曹骏滑铲空翻](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%BB%91%E9%93%B2%E7%A9%BA%E7%BF%BB%23) `516.3K 🔥` `NEW`
1. [微博会员嘉年华](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%BC%9A%E5%91%98%E5%98%89%E5%B9%B4%E5%8D%8E%23) `489.5K 🔥` `NEW`
1. [iPhoneDuo溢价暴跌原因](https://s.weibo.com/weibo?q=%23iPhoneDuo%E6%BA%A2%E4%BB%B7%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `448.0K 🔥` `NEW`
1. [马斯克飞行汽车遭踢馆](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E9%A3%9E%E8%A1%8C%E6%B1%BD%E8%BD%A6%E9%81%AD%E8%B8%A2%E9%A6%86%23) `291.3K 🔥` `NEW`
1. [闪婚女子孕后终止妊娠返还9万彩礼](https://s.weibo.com/weibo?q=%23%E9%97%AA%E5%A9%9A%E5%A5%B3%E5%AD%90%E5%AD%95%E5%90%8E%E7%BB%88%E6%AD%A2%E5%A6%8A%E5%A8%A0%E8%BF%94%E8%BF%989%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `263.8K 🔥` `NEW`
1. [徐艺洋弟弟发文](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%BC%9F%E5%BC%9F%E5%8F%91%E6%96%87%23) `263.6K 🔥` `NEW`
1. [AI的吻戏比真人还欲啊](https://s.weibo.com/weibo?q=%23AI%E7%9A%84%E5%90%BB%E6%88%8F%E6%AF%94%E7%9C%9F%E4%BA%BA%E8%BF%98%E6%AC%B2%E5%95%8A%23) `263.5K 🔥` `NEW`
1. [曾辉发言感谢韩雨彤](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%8F%91%E8%A8%80%E6%84%9F%E8%B0%A2%E9%9F%A9%E9%9B%A8%E5%BD%A4%23) `231.1K 🔥` `NEW`
1. [刘丁硕置顶都是王楚钦](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E7%BD%AE%E9%A1%B6%E9%83%BD%E6%98%AF%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `220.8K 🔥` `NEW`
1. [肠癌有3个危险信号](https://s.weibo.com/weibo?q=%23%E8%82%A0%E7%99%8C%E6%9C%893%E4%B8%AA%E5%8D%B1%E9%99%A9%E4%BF%A1%E5%8F%B7%23) `220.5K 🔥` `NEW`
1. [嫁金钗妻子看上了我的兄弟](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%A6%BB%E5%AD%90%E7%9C%8B%E4%B8%8A%E4%BA%86%E6%88%91%E7%9A%84%E5%85%84%E5%BC%9F%23) `220.2K 🔥` `NEW`
1. [6种癌症有明显家族遗传倾向](https://s.weibo.com/weibo?q=%236%E7%A7%8D%E7%99%8C%E7%97%87%E6%9C%89%E6%98%8E%E6%98%BE%E5%AE%B6%E6%97%8F%E9%81%97%E4%BC%A0%E5%80%BE%E5%90%91%23) `220.1K 🔥` `NEW`
1. [郭宇欣方回应直播屏蔽争议](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E6%96%B9%E5%9B%9E%E5%BA%94%E7%9B%B4%E6%92%AD%E5%B1%8F%E8%94%BD%E4%BA%89%E8%AE%AE%23) `219.8K 🔥` `NEW`
1. [王嘉尔京腔儿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E4%BA%AC%E8%85%94%E5%84%BF%23) `219.4K 🔥` `NEW`
1. [大马丁受伤](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A9%AC%E4%B8%81%E5%8F%97%E4%BC%A4%23) `219.2K 🔥` `NEW`
1. [中国小姐姐蜗居老头乐在外网走红](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%A7%90%E5%A7%90%E8%9C%97%E5%B1%85%E8%80%81%E5%A4%B4%E4%B9%90%E5%9C%A8%E5%A4%96%E7%BD%91%E8%B5%B0%E7%BA%A2%23) `210.9K 🔥` `NEW`
1. [鹿晗gapday音乐节](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97gapday%E9%9F%B3%E4%B9%90%E8%8A%82%23) `210.1K 🔥` `NEW`
1. [人怎么能捅出这么大的篓子](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%80%8E%E4%B9%88%E8%83%BD%E6%8D%85%E5%87%BA%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E7%AF%93%E5%AD%90%23) `199.9K 🔥` `NEW`
1. [曝时代少年团今年跨年形式](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%BB%8A%E5%B9%B4%E8%B7%A8%E5%B9%B4%E5%BD%A2%E5%BC%8F%23) `195.8K 🔥` `NEW`
1. [披荆斩棘](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%23) `190.4K 🔥` `NEW`
1. [闫桉回复君黛我喜欢魏娆](https://s.weibo.com/weibo?q=%23%E9%97%AB%E6%A1%89%E5%9B%9E%E5%A4%8D%E5%90%9B%E9%BB%9B%E6%88%91%E5%96%9C%E6%AC%A2%E9%AD%8F%E5%A8%86%23) `181.9K 🔥` `NEW`
1. [诀爱 编曲](https://s.weibo.com/weibo?q=%23%E8%AF%80%E7%88%B1%20%E7%BC%96%E6%9B%B2%23) `176.6K 🔥` `NEW`
1. [刘丁硕质疑张继科卖鸡排](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E8%B4%A8%E7%96%91%E5%BC%A0%E7%BB%A7%E7%A7%91%E5%8D%96%E9%B8%A1%E6%8E%92%23) `175.9K 🔥` `NEW`
1. [披荆斩棘 垫音](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%20%E5%9E%AB%E9%9F%B3%23) `175.8K 🔥` `NEW`
1. [颜安被唐九洲感动哭了](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%AE%89%E8%A2%AB%E5%94%90%E4%B9%9D%E6%B4%B2%E6%84%9F%E5%8A%A8%E5%93%AD%E4%BA%86%23) `171.9K 🔥` `NEW`
1. [那英演唱会嘉宾是汪苏泷](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%E6%98%AF%E6%B1%AA%E8%8B%8F%E6%B3%B7%23) `170.7K 🔥` `NEW`
1. [女子在地铁被泼白色透明液体](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%9C%B0%E9%93%81%E8%A2%AB%E6%B3%BC%E7%99%BD%E8%89%B2%E9%80%8F%E6%98%8E%E6%B6%B2%E4%BD%93%23) `160.0K 🔥` `NEW`
1. [4名男子采砂筛黄金被警方抓获](https://s.weibo.com/weibo?q=%234%E5%90%8D%E7%94%B7%E5%AD%90%E9%87%87%E7%A0%82%E7%AD%9B%E9%BB%84%E9%87%91%E8%A2%AB%E8%AD%A6%E6%96%B9%E6%8A%93%E8%8E%B7%23) `159.5K 🔥` `NEW`
1. [日本宣称侵华战争是圣战](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%AE%A3%E7%A7%B0%E4%BE%B5%E5%8D%8E%E6%88%98%E4%BA%89%E6%98%AF%E5%9C%A3%E6%88%98%23) `159.2K 🔥` `NEW`
1. [姚琛部落全员进入总决赛](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E7%90%9B%E9%83%A8%E8%90%BD%E5%85%A8%E5%91%98%E8%BF%9B%E5%85%A5%E6%80%BB%E5%86%B3%E8%B5%9B%23) `158.9K 🔥` `NEW`
1. [斯瓦泰克武网夺冠在望](https://s.weibo.com/weibo?q=%23%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%E6%AD%A6%E7%BD%91%E5%A4%BA%E5%86%A0%E5%9C%A8%E6%9C%9B%23) `152.7K 🔥` `NEW`
1. [披荆斩棘神级舞台有了](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%A5%9E%E7%BA%A7%E8%88%9E%E5%8F%B0%E6%9C%89%E4%BA%86%23) `146.6K 🔥` `NEW`
1. [巴厘岛婚礼偶遇罗志祥](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%8E%98%E5%B2%9B%E5%A9%9A%E7%A4%BC%E5%81%B6%E9%81%87%E7%BD%97%E5%BF%97%E7%A5%A5%23) `145.2K 🔥` `NEW`
1. [霍尔木兹海峡安全形势恶化](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%AE%89%E5%85%A8%E5%BD%A2%E5%8A%BF%E6%81%B6%E5%8C%96%23) `144.8K 🔥` `NEW`
1. [荣耀Magic9记录张韶涵的绝美造型](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80Magic9%E8%AE%B0%E5%BD%95%E5%BC%A0%E9%9F%B6%E6%B6%B5%E7%9A%84%E7%BB%9D%E7%BE%8E%E9%80%A0%E5%9E%8B%23) `144.6K 🔥` `NEW`
1. [斯瓦泰克医疗暂停落泪](https://s.weibo.com/weibo?q=%23%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%E5%8C%BB%E7%96%97%E6%9A%82%E5%81%9C%E8%90%BD%E6%B3%AA%23) `143.9K 🔥` `NEW`
1. [爸爸AB型妈妈A型女儿O型](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8AB%E5%9E%8B%E5%A6%88%E5%A6%88A%E5%9E%8B%E5%A5%B3%E5%84%BFO%E5%9E%8B%23) `473.8K 🔥` `+143%`
1. [欠薪345万却砸钱送孩子韩国出道](https://s.weibo.com/weibo?q=%23%E6%AC%A0%E8%96%AA345%E4%B8%87%E5%8D%B4%E7%A0%B8%E9%92%B1%E9%80%81%E5%AD%A9%E5%AD%90%E9%9F%A9%E5%9B%BD%E5%87%BA%E9%81%93%23) `263.3K 🔥`
1. [黄子韬直接包场免费请你们吃肥姨妈](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E7%9B%B4%E6%8E%A5%E5%8C%85%E5%9C%BA%E5%85%8D%E8%B4%B9%E8%AF%B7%E4%BD%A0%E4%BB%AC%E5%90%83%E8%82%A5%E5%A7%A8%E5%A6%88%23) `263.1K 🔥`
1. [徐艺洋怀孕下楼梯那英扶了她一把](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E6%80%80%E5%AD%95%E4%B8%8B%E6%A5%BC%E6%A2%AF%E9%82%A3%E8%8B%B1%E6%89%B6%E4%BA%86%E5%A5%B9%E4%B8%80%E6%8A%8A%23) `242.4K 🔥`
1. [郑合惠子任宥纶挽手遛狗路透](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E4%BB%BB%E5%AE%A5%E7%BA%B6%E6%8C%BD%E6%89%8B%E9%81%9B%E7%8B%97%E8%B7%AF%E9%80%8F%23) `235.0K 🔥`
1. [二十年后发现老师早知道自己撒谎](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%8D%81%E5%B9%B4%E5%90%8E%E5%8F%91%E7%8E%B0%E8%80%81%E5%B8%88%E6%97%A9%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E6%92%92%E8%B0%8E%23) `263.0K 🔥` `-78%`
1. [客服回应大量iPhone漂浮海面](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E5%A4%A7%E9%87%8FiPhone%E6%BC%82%E6%B5%AE%E6%B5%B7%E9%9D%A2%23) `179.0K 🔥` `-22%`
1. [事业编和公务员区别](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E4%B8%9A%E7%BC%96%E5%92%8C%E5%85%AC%E5%8A%A1%E5%91%98%E5%8C%BA%E5%88%AB%23) `143.4K 🔥` `-38%`

Updated at 2026-10-17 23:46:08

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
