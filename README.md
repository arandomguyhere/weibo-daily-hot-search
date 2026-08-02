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

1. [孙颖莎因伤退赛 (Sun Yingsha withdraws due to injury)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%A0%E4%BC%A4%E9%80%80%E8%B5%9B%23) `1.3M 🔥` `NEW`
1. [手机不好卖 芯片出货量暴跌](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E4%B8%8D%E5%A5%BD%E5%8D%96%20%E8%8A%AF%E7%89%87%E5%87%BA%E8%B4%A7%E9%87%8F%E6%9A%B4%E8%B7%8C%23) `508.5K 🔥` `NEW`
1. [心动的信号6 背调](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B76%20%E8%83%8C%E8%B0%83%23) `449.4K 🔥` `NEW`
1. [蔡徐坤亲吻粉丝手背](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E4%BA%B2%E5%90%BB%E7%B2%89%E4%B8%9D%E6%89%8B%E8%83%8C%23) `439.1K 🔥` `NEW`
1. [月亮](https://s.weibo.com/weibo?q=%23%E6%9C%88%E4%BA%AE%23) `432.3K 🔥` `NEW`
1. [海口一路面出现140平米塌方](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8F%A3%E4%B8%80%E8%B7%AF%E9%9D%A2%E5%87%BA%E7%8E%B0140%E5%B9%B3%E7%B1%B3%E5%A1%8C%E6%96%B9%23) `357.3K 🔥` `NEW`
1. [多地西瓜上市时间撞车了](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E8%A5%BF%E7%93%9C%E4%B8%8A%E5%B8%82%E6%97%B6%E9%97%B4%E6%92%9E%E8%BD%A6%E4%BA%86%23) `357.2K 🔥` `NEW`
1. [WTT欧洲大满贯瑞典站2026](https://s.weibo.com/weibo?q=%23WTT%E6%AC%A7%E6%B4%B2%E5%A4%A7%E6%BB%A1%E8%B4%AF%E7%91%9E%E5%85%B8%E7%AB%992026%23) `353.4K 🔥` `NEW`
1. [陈思罕在泡泡给陈奕恒道歉](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%E5%9C%A8%E6%B3%A1%E6%B3%A1%E7%BB%99%E9%99%88%E5%A5%95%E6%81%92%E9%81%93%E6%AD%89%23) `353.2K 🔥` `NEW`
1. [迪丽热巴撒饭艺人](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%92%92%E9%A5%AD%E8%89%BA%E4%BA%BA%23) `339.0K 🔥` `NEW`
1. [可以抵抗空虚的低成本爱好 (Low-cost hobbies that can combat emptiness)](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E4%BB%A5%E6%8A%B5%E6%8A%97%E7%A9%BA%E8%99%9A%E7%9A%84%E4%BD%8E%E6%88%90%E6%9C%AC%E7%88%B1%E5%A5%BD%23) `253.1K 🔥` `NEW`
1. [集中供冷](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%B8%AD%E4%BE%9B%E5%86%B7%23) `239.4K 🔥` `NEW`
1. [刚出生宝宝不哭反而开心大笑](https://s.weibo.com/weibo?q=%23%E5%88%9A%E5%87%BA%E7%94%9F%E5%AE%9D%E5%AE%9D%E4%B8%8D%E5%93%AD%E5%8F%8D%E8%80%8C%E5%BC%80%E5%BF%83%E5%A4%A7%E7%AC%91%23) `225.7K 🔥` `NEW`
1. [九尾手滑](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E6%89%8B%E6%BB%91%23) `203.4K 🔥` `NEW`
1. [希腊两架灭火直升机相撞](https://s.weibo.com/weibo?q=%23%E5%B8%8C%E8%85%8A%E4%B8%A4%E6%9E%B6%E7%81%AD%E7%81%AB%E7%9B%B4%E5%8D%87%E6%9C%BA%E7%9B%B8%E6%92%9E%23) `195.4K 🔥` `NEW`
1. [舒淇给林心如林熙蕾带过孩子](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E7%BB%99%E6%9E%97%E5%BF%83%E5%A6%82%E6%9E%97%E7%86%99%E8%95%BE%E5%B8%A6%E8%BF%87%E5%AD%A9%E5%AD%90%23) `192.0K 🔥` `NEW`
1. [人扮美人鱼把鱼看懵了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%89%AE%E7%BE%8E%E4%BA%BA%E9%B1%BC%E6%8A%8A%E9%B1%BC%E7%9C%8B%E6%87%B5%E4%BA%86%23) `186.7K 🔥` `NEW`
1. [刘耀文自拍背景是宋亚轩](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%87%AA%E6%8B%8D%E8%83%8C%E6%99%AF%E6%98%AF%E5%AE%8B%E4%BA%9A%E8%BD%A9%23) `153.3K 🔥` `NEW`
1. [婚外胚胎案女儿问妈妈还要装睡多久](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%A5%B3%E5%84%BF%E9%97%AE%E5%A6%88%E5%A6%88%E8%BF%98%E8%A6%81%E8%A3%85%E7%9D%A1%E5%A4%9A%E4%B9%85%23) `149.6K 🔥` `NEW`
1. [刘宪华没签保咪协议](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%AA%E5%8D%8E%E6%B2%A1%E7%AD%BE%E4%BF%9D%E5%92%AA%E5%8D%8F%E8%AE%AE%23) `143.9K 🔥` `NEW`
1. [众解说看TheShy四抓一反杀反应 (Commentators watch TheShy’s reaction to four captures and one counter-kill)](https://s.weibo.com/weibo?q=%23%E4%BC%97%E8%A7%A3%E8%AF%B4%E7%9C%8BTheShy%E5%9B%9B%E6%8A%93%E4%B8%80%E5%8F%8D%E6%9D%80%E5%8F%8D%E5%BA%94%23) `143.6K 🔥` `NEW`
1. [女子花10万请明星带货仅卖出1单](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B110%E4%B8%87%E8%AF%B7%E6%98%8E%E6%98%9F%E5%B8%A6%E8%B4%A7%E4%BB%85%E5%8D%96%E5%87%BA1%E5%8D%95%23) `854.4K 🔥` `+61%`
1. [中国预警机独立指挥空中战场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A2%84%E8%AD%A6%E6%9C%BA%E7%8B%AC%E7%AB%8B%E6%8C%87%E6%8C%A5%E7%A9%BA%E4%B8%AD%E6%88%98%E5%9C%BA%23) `845.1K 🔥`
1. [胡一天演高中生被指违和](https://s.weibo.com/weibo?q=%23%E8%83%A1%E4%B8%80%E5%A4%A9%E6%BC%94%E9%AB%98%E4%B8%AD%E7%94%9F%E8%A2%AB%E6%8C%87%E8%BF%9D%E5%92%8C%23) `843.1K 🔥`
1. [一个爱侧睡的人轻轻的碎了 (A person who loves to sleep on his side is gently broken)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%88%B1%E4%BE%A7%E7%9D%A1%E7%9A%84%E4%BA%BA%E8%BD%BB%E8%BD%BB%E7%9A%84%E7%A2%8E%E4%BA%86%23) `838.7K 🔥`
1. [网民造谣称淮北室外温度83摄氏度](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%B0%91%E9%80%A0%E8%B0%A3%E7%A7%B0%E6%B7%AE%E5%8C%97%E5%AE%A4%E5%A4%96%E6%B8%A9%E5%BA%A683%E6%91%84%E6%B0%8F%E5%BA%A6%23) `531.9K 🔥`
1. [蔡徐坤演唱会](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%BC%94%E5%94%B1%E4%BC%9A%23) `469.0K 🔥`
1. [2026年亚运会 (2026 Asian Games)](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `445.2K 🔥`
1. [难听](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `440.9K 🔥`
1. [张凌赫的妈妈公开了和家人的合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E5%A6%88%E5%A6%88%E5%85%AC%E5%BC%80%E4%BA%86%E5%92%8C%E5%AE%B6%E4%BA%BA%E7%9A%84%E5%90%88%E7%85%A7%23) `427.6K 🔥`
1. [句号采访不需要翻译](https://s.weibo.com/weibo?q=%23%E5%8F%A5%E5%8F%B7%E9%87%87%E8%AE%BF%E4%B8%8D%E9%9C%80%E8%A6%81%E7%BF%BB%E8%AF%91%23) `422.7K 🔥`
1. [银行 午休](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%20%E5%8D%88%E4%BC%91%23) `537.0K 🔥` `-53%`
1. [HYBE新女团TUIDE公开 (HYBE new girl group TUIDE unveiled)](https://s.weibo.com/weibo?q=%23HYBE%E6%96%B0%E5%A5%B3%E5%9B%A2TUIDE%E5%85%AC%E5%BC%80%23) `401.9K 🔥` `-24%`
1. [恋综男嘉宾被曝分手原因](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%BB%BC%E7%94%B7%E5%98%89%E5%AE%BE%E8%A2%AB%E6%9B%9D%E5%88%86%E6%89%8B%E5%8E%9F%E5%9B%A0%23) `377.7K 🔥` `-29%`
1. [以色列律师发表骇人极端言论](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%BE%8B%E5%B8%88%E5%8F%91%E8%A1%A8%E9%AA%87%E4%BA%BA%E6%9E%81%E7%AB%AF%E8%A8%80%E8%AE%BA%23) `357.7K 🔥` `-33%`
1. [易烊千玺打码](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%89%93%E7%A0%81%23) `357.1K 🔥` `-33%`
1. [亲密关系走到最后全凭人品和良心](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E8%B5%B0%E5%88%B0%E6%9C%80%E5%90%8E%E5%85%A8%E5%87%AD%E4%BA%BA%E5%93%81%E5%92%8C%E8%89%AF%E5%BF%83%23) `323.0K 🔥` `-39%`
1. [白鹿 完全妈妈](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%AE%8C%E5%85%A8%E5%A6%88%E5%A6%88%23) `239.7K 🔥` `-55%`
1. [王俊凯把能开的座位都开了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%8A%8A%E8%83%BD%E5%BC%80%E7%9A%84%E5%BA%A7%E4%BD%8D%E9%83%BD%E5%BC%80%E4%BA%86%23) `236.3K 🔥` `-55%`
1. [A股或告别科技独舞](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%88%96%E5%91%8A%E5%88%AB%E7%A7%91%E6%8A%80%E7%8B%AC%E8%88%9E%23) `232.5K 🔥` `-56%`
1. [瑞幸员工对嘴喷奶油 (Luckin employee sprays cream on mouth)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%91%98%E5%B7%A5%E5%AF%B9%E5%98%B4%E5%96%B7%E5%A5%B6%E6%B2%B9%23) `228.8K 🔥` `-57%`
1. [主持人看迪丽热巴的眼神 (The way the host looked at Dilireba)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%9C%8B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `228.2K 🔥` `-57%`
1. [DYG视频 不适](https://s.weibo.com/weibo?q=%23DYG%E8%A7%86%E9%A2%91%20%E4%B8%8D%E9%80%82%23) `219.5K 🔥` `-59%`
1. [公积金10万亿账户迎来全面激活 (Provident Fund 10 trillion account ushered in full activation)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%9110%E4%B8%87%E4%BA%BF%E8%B4%A6%E6%88%B7%E8%BF%8E%E6%9D%A5%E5%85%A8%E9%9D%A2%E6%BF%80%E6%B4%BB%23) `213.4K 🔥` `-60%`
1. [Angelababy14岁中华娘造型](https://s.weibo.com/weibo?q=%23Angelababy14%E5%B2%81%E4%B8%AD%E5%8D%8E%E5%A8%98%E9%80%A0%E5%9E%8B%23) `206.8K 🔥` `-61%`
1. [突然发现人的适应能力是真的强 (Suddenly I discovered that people are really adaptable)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E4%BA%BA%E7%9A%84%E9%80%82%E5%BA%94%E8%83%BD%E5%8A%9B%E6%98%AF%E7%9C%9F%E7%9A%84%E5%BC%BA%23) `201.6K 🔥` `-62%`
1. [家长回应说女孩子长大也是被别人看 (Parents responded that girls are looked at by others when they grow up)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%9B%9E%E5%BA%94%E8%AF%B4%E5%A5%B3%E5%AD%A9%E5%AD%90%E9%95%BF%E5%A4%A7%E4%B9%9F%E6%98%AF%E8%A2%AB%E5%88%AB%E4%BA%BA%E7%9C%8B%23) `190.9K 🔥` `-64%`
1. [三个字让我爸做了一辈子饭 (Three words made my dad cook for a lifetime)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%AA%E5%AD%97%E8%AE%A9%E6%88%91%E7%88%B8%E5%81%9A%E4%BA%86%E4%B8%80%E8%BE%88%E5%AD%90%E9%A5%AD%23) `190.4K 🔥` `-64%`
1. [沐言妈妈自曝女儿偏瘦原因](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E5%A6%88%E5%A6%88%E8%87%AA%E6%9B%9D%E5%A5%B3%E5%84%BF%E5%81%8F%E7%98%A6%E5%8E%9F%E5%9B%A0%23) `179.8K 🔥` `-66%`
1. [蜘蛛侠拒绝屏摄的评论区 全是屏摄](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%E6%8B%92%E7%BB%9D%E5%B1%8F%E6%91%84%E7%9A%84%E8%AF%84%E8%AE%BA%E5%8C%BA%20%E5%85%A8%E6%98%AF%E5%B1%8F%E6%91%84%23) `145.8K 🔥` `-73%`
1. [新能源汽车电量显示偏差不得超5%](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E7%94%B5%E9%87%8F%E6%98%BE%E7%A4%BA%E5%81%8F%E5%B7%AE%E4%B8%8D%E5%BE%97%E8%B6%855%25%23) `142.4K 🔥` `-73%`

Updated at 2026-08-02 23:31:37

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
