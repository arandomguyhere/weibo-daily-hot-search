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

1. [阿那亚海市蜃楼 (Aranya mirage)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%82%A3%E4%BA%9A%E6%B5%B7%E5%B8%82%E8%9C%83%E6%A5%BC%23) `282.0K 🔥` `NEW`
1. [日本人强闯我使馆事件最新进展](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%BC%BA%E9%97%AF%E6%88%91%E4%BD%BF%E9%A6%86%E4%BA%8B%E4%BB%B6%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `239.2K 🔥` `NEW`
1. [李荣浩 单依纯强行侵权](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%BC%BA%E8%A1%8C%E4%BE%B5%E6%9D%83%23) `147.1K 🔥` `NEW`
1. [郑晓龙拍了女演员被潜规则](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%99%93%E9%BE%99%E6%8B%8D%E4%BA%86%E5%A5%B3%E6%BC%94%E5%91%98%E8%A2%AB%E6%BD%9C%E8%A7%84%E5%88%99%23) `143.9K 🔥` `NEW`
1. [氯雷他定和西替利嗪的区别](https://s.weibo.com/weibo?q=%23%E6%B0%AF%E9%9B%B7%E4%BB%96%E5%AE%9A%E5%92%8C%E8%A5%BF%E6%9B%BF%E5%88%A9%E5%97%AA%E7%9A%84%E5%8C%BA%E5%88%AB%23) `137.0K 🔥` `NEW`
1. [全红婵19岁发文](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B519%E5%B2%81%E5%8F%91%E6%96%87%23) `134.2K 🔥` `NEW`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `132.6K 🔥` `NEW`
1. [陈牧驰回应与吴楚一相关争议](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%89%A7%E9%A9%B0%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%90%B4%E6%A5%9A%E4%B8%80%E7%9B%B8%E5%85%B3%E4%BA%89%E8%AE%AE%23) `126.1K 🔥` `NEW`
1. [曾辉亲韩雨彤的脸](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E4%BA%B2%E9%9F%A9%E9%9B%A8%E5%BD%A4%E7%9A%84%E8%84%B8%23) `122.2K 🔥` `NEW`
1. [贝尔曼撞车](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%B0%94%E6%9B%BC%E6%92%9E%E8%BD%A6%23) `92.2K 🔥` `NEW`
1. [刘涛郝蕾说的是谁 (Who is Liu Tao and Hao Lei talking about?)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E9%83%9D%E8%95%BE%E8%AF%B4%E7%9A%84%E6%98%AF%E8%B0%81%23) `87.6K 🔥` `NEW`
1. [美国1天超3000场反战示威](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD1%E5%A4%A9%E8%B6%853000%E5%9C%BA%E5%8F%8D%E6%88%98%E7%A4%BA%E5%A8%81%23) `86.5K 🔥` `NEW`
1. [张凌赫说外界建议会听但不会被左右](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AF%B4%E5%A4%96%E7%95%8C%E5%BB%BA%E8%AE%AE%E4%BC%9A%E5%90%AC%E4%BD%86%E4%B8%8D%E4%BC%9A%E8%A2%AB%E5%B7%A6%E5%8F%B3%23) `86.2K 🔥` `NEW`
1. [谢娜在张杰演唱会亲了秦岚杜华](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9C%A8%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%B2%E4%BA%86%E7%A7%A6%E5%B2%9A%E6%9D%9C%E5%8D%8E%23) `84.1K 🔥` `NEW`
1. [澳门世界杯抽签仪式](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E6%8A%BD%E7%AD%BE%E4%BB%AA%E5%BC%8F%23) `77.8K 🔥` `NEW`
1. [白日提灯爆剧](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%88%86%E5%89%A7%23) `77.3K 🔥` `NEW`
1. [张真源单手和白鹿撕名牌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%8D%95%E6%89%8B%E5%92%8C%E7%99%BD%E9%B9%BF%E6%92%95%E5%90%8D%E7%89%8C%23) `75.8K 🔥` `NEW`
1. [动森 人森](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E6%A3%AE%20%E4%BA%BA%E6%A3%AE%23) `71.3K 🔥` `NEW`
1. [警方通报女子佯装哭泣入室仙人跳](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E4%BD%AF%E8%A3%85%E5%93%AD%E6%B3%A3%E5%85%A5%E5%AE%A4%E4%BB%99%E4%BA%BA%E8%B7%B3%23) `70.5K 🔥` `NEW`
1. [汉密尔顿超越拉塞尔](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%AF%86%E5%B0%94%E9%A1%BF%E8%B6%85%E8%B6%8A%E6%8B%89%E5%A1%9E%E5%B0%94%23) `70.2K 🔥` `NEW`
1. [单依纯光波现场直拍 (Shan Yi pure light wave live shooting)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%85%89%E6%B3%A2%E7%8E%B0%E5%9C%BA%E7%9B%B4%E6%8B%8D%23) `68.1K 🔥` `NEW`
1. [氯雷他定](https://s.weibo.com/weibo?q=%23%E6%B0%AF%E9%9B%B7%E4%BB%96%E5%AE%9A%23) `1.2M 🔥` `+682%`
1. [奈雪的茶没人喝了](https://s.weibo.com/weibo?q=%23%E5%A5%88%E9%9B%AA%E7%9A%84%E8%8C%B6%E6%B2%A1%E4%BA%BA%E5%96%9D%E4%BA%86%23) `814.8K 🔥` `+692%`
1. [不是正剧就不用较真粉底液将军吗](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%98%AF%E6%AD%A3%E5%89%A7%E5%B0%B1%E4%B8%8D%E7%94%A8%E8%BE%83%E7%9C%9F%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%E5%90%97%23) `175.7K 🔥` `+114%`
1. [洛杉矶10万人抗议多人被捕](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E6%9D%89%E7%9F%B610%E4%B8%87%E4%BA%BA%E6%8A%97%E8%AE%AE%E5%A4%9A%E4%BA%BA%E8%A2%AB%E6%8D%95%23) `109.2K 🔥` `+46%`
1. [2026中国网络媒体论坛](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AA%92%E4%BD%93%E8%AE%BA%E5%9D%9B%23) `658.2K 🔥`
1. [德国版射雕预告好燃好震撼](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E7%89%88%E5%B0%84%E9%9B%95%E9%A2%84%E5%91%8A%E5%A5%BD%E7%87%83%E5%A5%BD%E9%9C%87%E6%92%BC%23) `261.4K 🔥`
1. [全职高手致歉](https://s.weibo.com/weibo?q=%23%E5%85%A8%E8%81%8C%E9%AB%98%E6%89%8B%E8%87%B4%E6%AD%89%23) `149.0K 🔥`
1. [林子烨像张凌赫生的](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%E5%83%8F%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%9F%E7%9A%84%23) `134.1K 🔥`
1. [才发现王一博上的全英课 (Only then did I discover that Wang Yibo was taking an all-English class)](https://s.weibo.com/weibo?q=%23%E6%89%8D%E5%8F%91%E7%8E%B0%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%8A%E7%9A%84%E5%85%A8%E8%8B%B1%E8%AF%BE%23) `133.7K 🔥`
1. [长期不吃主食身体的8个变化](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E5%90%83%E4%B8%BB%E9%A3%9F%E8%BA%AB%E4%BD%93%E7%9A%848%E4%B8%AA%E5%8F%98%E5%8C%96%23) `133.0K 🔥`
1. [逐玉 庆功宴 (Zhuyu Celebration Banquet)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `132.2K 🔥`
1. [女子半年没回家卧室开窗变邻居阳台 (A woman who hadn't been home for half a year opened her bedroom window and turned it into a neighbor's balcony.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%8A%E5%B9%B4%E6%B2%A1%E5%9B%9E%E5%AE%B6%E5%8D%A7%E5%AE%A4%E5%BC%80%E7%AA%97%E5%8F%98%E9%82%BB%E5%B1%85%E9%98%B3%E5%8F%B0%23) `112.0K 🔥`
1. [许嵩第九张专辑 盛夏见 (Xu Song's ninth album See you in midsummer)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E7%AC%AC%E4%B9%9D%E5%BC%A0%E4%B8%93%E8%BE%91%20%E7%9B%9B%E5%A4%8F%E8%A7%81%23) `111.8K 🔥`
1. [QQ音乐 虞书欣](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%20%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `111.2K 🔥`
1. [曝女顶流被公司索赔3亿解约费](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A5%B3%E9%A1%B6%E6%B5%81%E8%A2%AB%E5%85%AC%E5%8F%B8%E7%B4%A2%E8%B5%943%E4%BA%BF%E8%A7%A3%E7%BA%A6%E8%B4%B9%23) `110.4K 🔥`
1. [张震岳收藏吐槽周杰伦的文章](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9C%87%E5%B2%B3%E6%94%B6%E8%97%8F%E5%90%90%E6%A7%BD%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%9A%84%E6%96%87%E7%AB%A0%23) `109.8K 🔥`
1. [秦岚回应花少与客栈哪个更快乐](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%9B%9E%E5%BA%94%E8%8A%B1%E5%B0%91%E4%B8%8E%E5%AE%A2%E6%A0%88%E5%93%AA%E4%B8%AA%E6%9B%B4%E5%BF%AB%E4%B9%90%23) `109.2K 🔥`
1. [阿那亚出现海市蜃楼](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%82%A3%E4%BA%9A%E5%87%BA%E7%8E%B0%E6%B5%B7%E5%B8%82%E8%9C%83%E6%A5%BC%23) `76.7K 🔥`
1. [俄罗斯警告韩国](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E8%AD%A6%E5%91%8A%E9%9F%A9%E5%9B%BD%23) `76.5K 🔥`
1. [男孩玩灭火毯全身扎满超细玻璃纤维](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E7%8E%A9%E7%81%AD%E7%81%AB%E6%AF%AF%E5%85%A8%E8%BA%AB%E6%89%8E%E6%BB%A1%E8%B6%85%E7%BB%86%E7%8E%BB%E7%92%83%E7%BA%A4%E7%BB%B4%23) `75.0K 🔥`
1. [日本抗议者高喊中国对不起 (Japanese protesters shout China is sorry)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8A%97%E8%AE%AE%E8%80%85%E9%AB%98%E5%96%8A%E4%B8%AD%E5%9B%BD%E5%AF%B9%E4%B8%8D%E8%B5%B7%23) `270.7K 🔥` `-64%`
1. [美国全国爆发反对特朗普政府集会 (Rallies against Trump administration erupt across U.S.)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%85%A8%E5%9B%BD%E7%88%86%E5%8F%91%E5%8F%8D%E5%AF%B9%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%BF%E5%BA%9C%E9%9B%86%E4%BC%9A%23) `190.3K 🔥` `-82%`
1. [夫妻房产留给长子长孙遭两女儿反对](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E6%88%BF%E4%BA%A7%E7%95%99%E7%BB%99%E9%95%BF%E5%AD%90%E9%95%BF%E5%AD%99%E9%81%AD%E4%B8%A4%E5%A5%B3%E5%84%BF%E5%8F%8D%E5%AF%B9%23) `131.5K 🔥` `-56%`
1. [孩子凌晨被抢没想到邻居参与了](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%87%8C%E6%99%A8%E8%A2%AB%E6%8A%A2%E6%B2%A1%E6%83%B3%E5%88%B0%E9%82%BB%E5%B1%85%E5%8F%82%E4%B8%8E%E4%BA%86%23) `111.0K 🔥` `-40%`
1. [杨紫说自己来乘风是拆台的 (Yang Zi said that she came to Chengfeng to cause trouble.)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%AF%B4%E8%87%AA%E5%B7%B1%E6%9D%A5%E4%B9%98%E9%A3%8E%E6%98%AF%E6%8B%86%E5%8F%B0%E7%9A%84%23) `102.1K 🔥` `-25%`
1. [当你吃了一整天健康食物](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E5%90%83%E4%BA%86%E4%B8%80%E6%95%B4%E5%A4%A9%E5%81%A5%E5%BA%B7%E9%A3%9F%E7%89%A9%23) `76.8K 🔥` `-52%`
1. [徐若晗能让郝蕾闭嘴](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E8%83%BD%E8%AE%A9%E9%83%9D%E8%95%BE%E9%97%AD%E5%98%B4%23) `75.1K 🔥` `-65%`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `73.7K 🔥` `-24%`
1. [浪姐7初舞台选歌](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%907%E5%88%9D%E8%88%9E%E5%8F%B0%E9%80%89%E6%AD%8C%23) `72.6K 🔥` `-37%`

Updated at 2026-03-29 14:55:19

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
