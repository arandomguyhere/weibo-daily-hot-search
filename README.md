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

1. [庄法萧蔷 不该pk (Zhuang Fa Xiao Qiang should not pk)](https://s.weibo.com/weibo?q=%23%E5%BA%84%E6%B3%95%E8%90%A7%E8%94%B7%20%E4%B8%8D%E8%AF%A5pk%23) `277.2K 🔥` `NEW`
1. [用奔驰车陪葬事件当事人致歉](https://s.weibo.com/weibo?q=%23%E7%94%A8%E5%A5%94%E9%A9%B0%E8%BD%A6%E9%99%AA%E8%91%AC%E4%BA%8B%E4%BB%B6%E5%BD%93%E4%BA%8B%E4%BA%BA%E8%87%B4%E6%AD%89%23) `239.7K 🔥` `NEW`
1. [一栗小莎子得的是霍奇金淋巴瘤](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E5%BE%97%E7%9A%84%E6%98%AF%E9%9C%8D%E5%A5%87%E9%87%91%E6%B7%8B%E5%B7%B4%E7%98%A4%23) `198.5K 🔥` `NEW`
1. [TES战胜JDG](https://s.weibo.com/weibo?q=%23TES%E6%88%98%E8%83%9CJDG%23) `162.5K 🔥` `NEW`
1. [林俊杰我懂你了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E6%88%91%E6%87%82%E4%BD%A0%E4%BA%86%23) `150.9K 🔥` `NEW`
1. [SK教练](https://s.weibo.com/weibo?q=%23SK%E6%95%99%E7%BB%83%23) `143.5K 🔥` `NEW`
1. [小胖替补席](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%83%96%E6%9B%BF%E8%A1%A5%E5%B8%AD%23) `140.9K 🔥` `NEW`
1. [王橹杰库存照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BA%93%E5%AD%98%E7%85%A7%23) `136.5K 🔥` `NEW`
1. [莫氏鸡煲老板从愁容到笑逐颜开](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E4%BB%8E%E6%84%81%E5%AE%B9%E5%88%B0%E7%AC%91%E9%80%90%E9%A2%9C%E5%BC%80%23) `134.8K 🔥` `NEW`
1. [海底捞已通知一千多家门店内部排查 (Haidilao has notified more than a thousand stores for internal inspections)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E5%B7%B2%E9%80%9A%E7%9F%A5%E4%B8%80%E5%8D%83%E5%A4%9A%E5%AE%B6%E9%97%A8%E5%BA%97%E5%86%85%E9%83%A8%E6%8E%92%E6%9F%A5%23) `1.2M 🔥` `+30%`
1. [浪姐排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `905.7K 🔥` `+156%`
1. [狼队超话大文豪 (Wolves super talkative writer)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E8%B6%85%E8%AF%9D%E5%A4%A7%E6%96%87%E8%B1%AA%23) `282.7K 🔥` `+91%`
1. [鸡煲老板透露汤底可补肾后又反悔](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E9%80%8F%E9%9C%B2%E6%B1%A4%E5%BA%95%E5%8F%AF%E8%A1%A5%E8%82%BE%E5%90%8E%E5%8F%88%E5%8F%8D%E6%82%94%23) `244.9K 🔥` `+70%`
1. [我国经济一季度交出亮眼答卷](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E4%B8%80%E5%AD%A3%E5%BA%A6%E4%BA%A4%E5%87%BA%E4%BA%AE%E7%9C%BC%E7%AD%94%E5%8D%B7%23) `644.9K 🔥`
1. [维妮娜淘汰](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%A6%AE%E5%A8%9C%E6%B7%98%E6%B1%B0%23) `546.8K 🔥`
1. [KSG冠军](https://s.weibo.com/weibo?q=%23KSG%E5%86%A0%E5%86%9B%23) `250.0K 🔥`
1. [心愿便利贴 不好听但溺爱了 (Wish post-it notes don’t sound good but I love you)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%20%E4%B8%8D%E5%A5%BD%E5%90%AC%E4%BD%86%E6%BA%BA%E7%88%B1%E4%BA%86%23) `244.7K 🔥`
1. [徐洁儿为什么会没人选](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E6%B2%A1%E4%BA%BA%E9%80%89%23) `146.0K 🔥`
1. [苏超太湖三傻爆改太湖三霸](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%A4%AA%E6%B9%96%E4%B8%89%E5%82%BB%E7%88%86%E6%94%B9%E5%A4%AA%E6%B9%96%E4%B8%89%E9%9C%B8%23) `143.5K 🔥`
1. [小米正式调价](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%AD%A3%E5%BC%8F%E8%B0%83%E4%BB%B7%23) `137.3K 🔥`
1. [雨爱 这才是全开麦](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E7%88%B1%20%E8%BF%99%E6%89%8D%E6%98%AF%E5%85%A8%E5%BC%80%E9%BA%A6%23) `360.3K 🔥` `-25%`
1. [KSG零封狼队](https://s.weibo.com/weibo?q=%23KSG%E9%9B%B6%E5%B0%81%E7%8B%BC%E9%98%9F%23) `303.5K 🔥` `-37%`
1. [俩弟弟长得像妈妈哥哥却长得像爸爸 (The two younger brothers look like their mother, but their elder brother looks like their father.)](https://s.weibo.com/weibo?q=%23%E4%BF%A9%E5%BC%9F%E5%BC%9F%E9%95%BF%E5%BE%97%E5%83%8F%E5%A6%88%E5%A6%88%E5%93%A5%E5%93%A5%E5%8D%B4%E9%95%BF%E5%BE%97%E5%83%8F%E7%88%B8%E7%88%B8%23) `301.3K 🔥` `-37%`
1. [苏超比分](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E6%AF%94%E5%88%86%23) `298.0K 🔥` `-38%`
1. [美媒称数艘美军舰通过霍尔木兹](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E6%95%B0%E8%89%98%E7%BE%8E%E5%86%9B%E8%88%B0%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `295.1K 🔥` `-39%`
1. [苏超常州3比0南通](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%B8%B8%E5%B7%9E3%E6%AF%940%E5%8D%97%E9%80%9A%23) `292.3K 🔥` `-39%`
1. [维妮娜 我不知道评分标准是什么](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%A6%AE%E5%A8%9C%20%E6%88%91%E4%B8%8D%E7%9F%A5%E9%81%93%E8%AF%84%E5%88%86%E6%A0%87%E5%87%86%E6%98%AF%E4%BB%80%E4%B9%88%23) `288.3K 🔥` `-40%`
1. [李小冉团赢了庄法团](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%9B%A2%E8%B5%A2%E4%BA%86%E5%BA%84%E6%B3%95%E5%9B%A2%23) `287.4K 🔥` `-40%`
1. [谢娜直播官宣演唱会](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%9B%B4%E6%92%AD%E5%AE%98%E5%AE%A3%E6%BC%94%E5%94%B1%E4%BC%9A%23) `281.5K 🔥` `-41%`
1. [特朗普称美方开始清理霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E6%96%B9%E5%BC%80%E5%A7%8B%E6%B8%85%E7%90%86%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `272.6K 🔥` `-43%`
1. [潮汐车道自动切换太丝滑 (Tidal lane automatic switching is too smooth)](https://s.weibo.com/weibo?q=%23%E6%BD%AE%E6%B1%90%E8%BD%A6%E9%81%93%E8%87%AA%E5%8A%A8%E5%88%87%E6%8D%A2%E5%A4%AA%E4%B8%9D%E6%BB%91%23) `269.2K 🔥` `-44%`
1. [乌兰图雅团第一](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%E5%9B%A2%E7%AC%AC%E4%B8%80%23) `267.0K 🔥` `-45%`
1. [李小冉口误喊赵兆老公](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8F%A3%E8%AF%AF%E5%96%8A%E8%B5%B5%E5%85%86%E8%80%81%E5%85%AC%23) `266.0K 🔥` `-45%`
1. [江语晨胜诉浪姐后台哭成一片 (Jiang Yuchen won the lawsuit against Sister Lang and burst into tears backstage)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E8%83%9C%E8%AF%89%E6%B5%AA%E5%A7%90%E5%90%8E%E5%8F%B0%E5%93%AD%E6%88%90%E4%B8%80%E7%89%87%23) `249.3K 🔥` `-48%`
1. [我听心愿便利贴belike曾沛慈](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%90%AC%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4belike%E6%9B%BE%E6%B2%9B%E6%85%88%23) `245.3K 🔥` `-31%`
1. [每天练15分钟八段锦效果好](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E7%BB%8315%E5%88%86%E9%92%9F%E5%85%AB%E6%AE%B5%E9%94%A6%E6%95%88%E6%9E%9C%E5%A5%BD%23) `245.2K 🔥` `-31%`
1. [心疼庄法团 (Feeling sorry for Zhuang Legal Group)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E5%BA%84%E6%B3%95%E5%9B%A2%23) `245.1K 🔥` `-80%`
1. [我英语水平 乌兰图雅](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%8B%B1%E8%AF%AD%E6%B0%B4%E5%B9%B3%20%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%23) `245.0K 🔥` `-49%`
1. [浪姐直播 (Sister Lang live broadcast)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `244.8K 🔥` `-49%`
1. [伊朗称已迫使美军驱逐舰返航 (Iran says it has forced US destroyer to return)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%B7%B2%E8%BF%AB%E4%BD%BF%E7%BE%8E%E5%86%9B%E9%A9%B1%E9%80%90%E8%88%B0%E8%BF%94%E8%88%AA%23) `236.8K 🔥` `-42%`
1. [35岁是癌症风险关键分水岭](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E6%98%AF%E7%99%8C%E7%97%87%E9%A3%8E%E9%99%A9%E5%85%B3%E9%94%AE%E5%88%86%E6%B0%B4%E5%B2%AD%23) `236.4K 🔥` `-45%`
1. [浪姐太虐了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%A4%AA%E8%99%90%E4%BA%86%23) `236.2K 🔥` `-42%`
1. [江语晨前夫](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%89%8D%E5%A4%AB%23) `206.2K 🔥` `-30%`
1. [狼队对战KSG (Wolves vs. KSG)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98KSG%23) `203.9K 🔥` `-29%`
1. [浪姐 投票标准](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E6%8A%95%E7%A5%A8%E6%A0%87%E5%87%86%23) `203.5K 🔥` `-67%`
1. [国乒无缘太原站女单决赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E6%97%A0%E7%BC%98%E5%A4%AA%E5%8E%9F%E7%AB%99%E5%A5%B3%E5%8D%95%E5%86%B3%E8%B5%9B%23) `144.4K 🔥` `-29%`
1. [者来父就这么宠爱地看着 (Later, my father looked at me lovingly)](https://s.weibo.com/weibo?q=%23%E8%80%85%E6%9D%A5%E7%88%B6%E5%B0%B1%E8%BF%99%E4%B9%88%E5%AE%A0%E7%88%B1%E5%9C%B0%E7%9C%8B%E7%9D%80%23) `143.7K 🔥` `-42%`
1. [安崎 天生爱豆](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%20%E5%A4%A9%E7%94%9F%E7%88%B1%E8%B1%86%23) `143.5K 🔥` `-45%`
1. [是你 (it's you)](https://s.weibo.com/weibo?q=%23%E6%98%AF%E4%BD%A0%23) `141.3K 🔥` `-31%`
1. [给老师起外号被扇耳光小学生家长发声](https://s.weibo.com/weibo?q=%23%E7%BB%99%E8%80%81%E5%B8%88%E8%B5%B7%E5%A4%96%E5%8F%B7%E8%A2%AB%E6%89%87%E8%80%B3%E5%85%89%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%AE%B6%E9%95%BF%E5%8F%91%E5%A3%B0%23) `139.6K 🔥` `-60%`

Updated at 2026-04-11 23:26:44

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
