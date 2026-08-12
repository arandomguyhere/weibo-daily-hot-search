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

1. [威少宣布退役 (Westbrook announces retirement)](https://s.weibo.com/weibo?q=%23%E5%A8%81%E5%B0%91%E5%AE%A3%E5%B8%83%E9%80%80%E5%BD%B9%23) `808.2K 🔥` `NEW`
1. [詹姆斯回应威少退役](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9B%9E%E5%BA%94%E5%A8%81%E5%B0%91%E9%80%80%E5%BD%B9%23) `244.6K 🔥` `NEW`
1. [流星雨](https://s.weibo.com/weibo?q=%23%E6%B5%81%E6%98%9F%E9%9B%A8%23) `223.5K 🔥` `NEW`
1. [金价油价全涨了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%B2%B9%E4%BB%B7%E5%85%A8%E6%B6%A8%E4%BA%86%23) `175.5K 🔥` `NEW`
1. [爱吃西红柿的人真的赚了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E8%A5%BF%E7%BA%A2%E6%9F%BF%E7%9A%84%E4%BA%BA%E7%9C%9F%E7%9A%84%E8%B5%9A%E4%BA%86%23) `175.0K 🔥` `NEW`
1. [威斯布鲁克WHY NOT新章节](https://s.weibo.com/weibo?q=%23%E5%A8%81%E6%96%AF%E5%B8%83%E9%B2%81%E5%85%8BWHY%20NOT%E6%96%B0%E7%AB%A0%E8%8A%82%23) `127.4K 🔥` `NEW`
1. [雷佳音因功利心接下陈俊生](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E4%BD%B3%E9%9F%B3%E5%9B%A0%E5%8A%9F%E5%88%A9%E5%BF%83%E6%8E%A5%E4%B8%8B%E9%99%88%E4%BF%8A%E7%94%9F%23) `92.9K 🔥` `NEW`
1. [TF四代彩排节目单](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%BD%A9%E6%8E%92%E8%8A%82%E7%9B%AE%E5%8D%95%23) `92.3K 🔥` `NEW`
1. [麦迪娜姜潮婚礼超多新疆美食](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E8%BF%AA%E5%A8%9C%E5%A7%9C%E6%BD%AE%E5%A9%9A%E7%A4%BC%E8%B6%85%E5%A4%9A%E6%96%B0%E7%96%86%E7%BE%8E%E9%A3%9F%23) `92.3K 🔥` `NEW`
1. [朱镕基同志逝世 (Comrade Zhu Rongji passed away)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `948.9K 🔥` `+67%`
1. [胖东来许昌老店关闭周边商户发声 (Fat Dong Lai’s old store in Xuchang closes surrounding businesses to speak out)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%AE%B8%E6%98%8C%E8%80%81%E5%BA%97%E5%85%B3%E9%97%AD%E5%91%A8%E8%BE%B9%E5%95%86%E6%88%B7%E5%8F%91%E5%A3%B0%23) `886.8K 🔥` `+69%`
1. [60万亿元消费蓝海要来了 (The 60 trillion yuan consumption blue ocean is coming)](https://s.weibo.com/weibo?q=%2360%E4%B8%87%E4%BA%BF%E5%85%83%E6%B6%88%E8%B4%B9%E8%93%9D%E6%B5%B7%E8%A6%81%E6%9D%A5%E4%BA%86%23) `813.9K 🔥` `+140%`
1. [张婧仪代言比亚迪秦MAX (Zhang Jingyi endorses BYD Qin MAX)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E4%BB%A3%E8%A8%80%E6%AF%94%E4%BA%9A%E8%BF%AA%E7%A7%A6MAX%23) `813.0K 🔥` `+106%`
1. [41国所谓涉华声明不过是废纸一张 (The so-called China-related statement from 41 countries is just a piece of waste paper)](https://s.weibo.com/weibo?q=%2341%E5%9B%BD%E6%89%80%E8%B0%93%E6%B6%89%E5%8D%8E%E5%A3%B0%E6%98%8E%E4%B8%8D%E8%BF%87%E6%98%AF%E5%BA%9F%E7%BA%B8%E4%B8%80%E5%BC%A0%23) `472.1K 🔥` `+750%`
1. [上半年全国离婚登记138.3万对](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%85%A8%E5%9B%BD%E7%A6%BB%E5%A9%9A%E7%99%BB%E8%AE%B0138.3%E4%B8%87%E5%AF%B9%23) `344.8K 🔥` `+521%`
1. [胚胎案妻子回应丈夫花百万救命 (Wife in embryo case responds to husband spending millions to save life)](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E4%B8%88%E5%A4%AB%E8%8A%B1%E7%99%BE%E4%B8%87%E6%95%91%E5%91%BD%23) `276.0K 🔥` `+74%`
1. [Lululemon劲敌来中国了 (Lululemon’s rival comes to China)](https://s.weibo.com/weibo?q=%23Lululemon%E5%8A%B2%E6%95%8C%E6%9D%A5%E4%B8%AD%E5%9B%BD%E4%BA%86%23) `274.6K 🔥` `+41%`
1. [龙餐馆 (dragon restaurant)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `245.6K 🔥` `+124%`
1. [虞书欣丁禹兮 我欲乘风](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%81%E7%A6%B9%E5%85%AE%20%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `244.7K 🔥` `+340%`
1. [升学宴35桌无人上桌 (No one served at table 35 of the entrance banquet)](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B435%E6%A1%8C%E6%97%A0%E4%BA%BA%E4%B8%8A%E6%A1%8C%23) `244.7K 🔥` `+220%`
1. [喜欢穿洞洞鞋的人天塌了 (People who like to wear Crocs are in trouble)](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `244.5K 🔥` `+119%`
1. [英仙座流星雨](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BB%99%E5%BA%A7%E6%B5%81%E6%98%9F%E9%9B%A8%23) `191.4K 🔥` `+99%`
1. [微信群聊可以彻底关闭通知了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%BE%A4%E8%81%8A%E5%8F%AF%E4%BB%A5%E5%BD%BB%E5%BA%95%E5%85%B3%E9%97%AD%E9%80%9A%E7%9F%A5%E4%BA%86%23) `175.6K 🔥` `+47%`
1. [龙餐馆 老扎](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E8%80%81%E6%89%8E%23) `175.5K 🔥` `+216%`
1. [三孩非亲生案妻子以为孩子能修复感情 (The wife of the third child who was not her biological child thought that the child could repair the relationship)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%A6%BB%E5%AD%90%E4%BB%A5%E4%B8%BA%E5%AD%A9%E5%AD%90%E8%83%BD%E4%BF%AE%E5%A4%8D%E6%84%9F%E6%83%85%23) `175.5K 🔥` `+130%`
1. [两女子帮助黑人至中国幼儿园任教被判刑](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A5%B3%E5%AD%90%E5%B8%AE%E5%8A%A9%E9%BB%91%E4%BA%BA%E8%87%B3%E4%B8%AD%E5%9B%BD%E5%B9%BC%E5%84%BF%E5%9B%AD%E4%BB%BB%E6%95%99%E8%A2%AB%E5%88%A4%E5%88%91%23) `144.3K 🔥` `+160%`
1. [世界是草台班子但你的人生不是](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%98%AF%E8%8D%89%E5%8F%B0%E7%8F%AD%E5%AD%90%E4%BD%86%E4%BD%A0%E7%9A%84%E4%BA%BA%E7%94%9F%E4%B8%8D%E6%98%AF%23) `138.6K 🔥` `+149%`
1. [DeepSeek发布V4Pro正式版](https://s.weibo.com/weibo?q=%23DeepSeek%E5%8F%91%E5%B8%83V4Pro%E6%AD%A3%E5%BC%8F%E7%89%88%23) `129.7K 🔥` `+134%`
1. [特朗普躲避暗杀更多细节曝光](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BA%B2%E9%81%BF%E6%9A%97%E6%9D%80%E6%9B%B4%E5%A4%9A%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `129.6K 🔥` `+133%`
1. [花开锦绣热度 (Flowers are blooming and beautiful)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E7%83%AD%E5%BA%A6%23) `129.5K 🔥` `+133%`
1. [网传我欲乘风陈飞宇周翊然都在争取](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%E9%99%88%E9%A3%9E%E5%AE%87%E5%91%A8%E7%BF%8A%E7%84%B6%E9%83%BD%E5%9C%A8%E4%BA%89%E5%8F%96%23) `129.5K 🔥` `+134%`
1. [湖人售价120亿美元 (Lakers sold for $12 billion)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E5%94%AE%E4%BB%B7120%E4%BA%BF%E7%BE%8E%E5%85%83%23) `129.5K 🔥` `+89%`
1. [小狗在商场里独自顶气球](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%9C%A8%E5%95%86%E5%9C%BA%E9%87%8C%E7%8B%AC%E8%87%AA%E9%A1%B6%E6%B0%94%E7%90%83%23) `125.0K 🔥` `+125%`
1. [卫健委介入17岁女孩流产监护人不知情 (The Health and Medical Commission intervened in the abortion of a 17-year-old girl, but the guardian did not know about it)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E4%BB%8B%E5%85%A517%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%B5%81%E4%BA%A7%E7%9B%91%E6%8A%A4%E4%BA%BA%E4%B8%8D%E7%9F%A5%E6%83%85%23) `124.5K 🔥` `+111%`
1. [员工的不可能三角定律 (The Impossible Triangle of Employees)](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E7%9A%84%E4%B8%8D%E5%8F%AF%E8%83%BD%E4%B8%89%E8%A7%92%E5%AE%9A%E5%BE%8B%23) `104.5K 🔥` `+29%`
1. [长期饥一顿饱一顿的受害者出现了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E9%A5%A5%E4%B8%80%E9%A1%BF%E9%A5%B1%E4%B8%80%E9%A1%BF%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `104.0K 🔥` `+72%`
1. [星巴克部分原料由蜜雪冰城代工 (Some of Starbucks’ raw materials are manufactured by Mixue Bingcheng.)](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%E9%83%A8%E5%88%86%E5%8E%9F%E6%96%99%E7%94%B1%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%E4%BB%A3%E5%B7%A5%23) `97.9K 🔥` `+76%`
1. [被刺辅警父亲称半年仅骑过3次摩托](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%88%BA%E8%BE%85%E8%AD%A6%E7%88%B6%E4%BA%B2%E7%A7%B0%E5%8D%8A%E5%B9%B4%E4%BB%85%E9%AA%91%E8%BF%873%E6%AC%A1%E6%91%A9%E6%89%98%23) `97.4K 🔥` `+75%`
1. [Alo赠品包被炒到350元 (Alo gift pack is priced at 350 yuan)](https://s.weibo.com/weibo?q=%23Alo%E8%B5%A0%E5%93%81%E5%8C%85%E8%A2%AB%E7%82%92%E5%88%B0350%E5%85%83%23) `94.3K 🔥` `+70%`
1. [日全食 (total solar eclipse)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%85%A8%E9%A3%9F%23) `92.3K 🔥` `+33%`
1. [C罗宣布结婚](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `92.3K 🔥` `+39%`
1. [鸭棚子中国最早的徒步旅行者 (Duck Shed China's earliest hikers)](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E6%A3%9A%E5%AD%90%E4%B8%AD%E5%9B%BD%E6%9C%80%E6%97%A9%E7%9A%84%E5%BE%92%E6%AD%A5%E6%97%85%E8%A1%8C%E8%80%85%23) `92.3K 🔥` `+66%`
1. [中国试射不看谁的脸色](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%AF%95%E5%B0%84%E4%B8%8D%E7%9C%8B%E8%B0%81%E7%9A%84%E8%84%B8%E8%89%B2%23) `92.3K 🔥` `+66%`
1. [这段话缓解了我的焦虑](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E7%BC%93%E8%A7%A3%E4%BA%86%E6%88%91%E7%9A%84%E7%84%A6%E8%99%91%23) `92.3K 🔥` `+66%`
1. [普京说俄罗斯对日本没有诉求](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AF%B4%E4%BF%84%E7%BD%97%E6%96%AF%E5%AF%B9%E6%97%A5%E6%9C%AC%E6%B2%A1%E6%9C%89%E8%AF%89%E6%B1%82%23) `92.3K 🔥` `+67%`
1. [鞠婧祎请客郭敬明剧组 (Ju Jingyi entertains Guo Jingming's crew)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%AF%B7%E5%AE%A2%E9%83%AD%E6%95%AC%E6%98%8E%E5%89%A7%E7%BB%84%23) `92.3K 🔥` `+67%`
1. [最能接话的机器人手机 (The best robot phone for answering calls)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%83%BD%E6%8E%A5%E8%AF%9D%E7%9A%84%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%89%8B%E6%9C%BA%23) `92.3K 🔥` `+206%`
1. [李雪健已经完全听不见了 (Li Xuejian has completely lost his hearing.)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E5%81%A5%E5%B7%B2%E7%BB%8F%E5%AE%8C%E5%85%A8%E5%90%AC%E4%B8%8D%E8%A7%81%E4%BA%86%23) `217.2K 🔥` `-46%`
1. [任敏漂亮到不敢认 (Ren Min is too beautiful to recognize)](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E6%BC%82%E4%BA%AE%E5%88%B0%E4%B8%8D%E6%95%A2%E8%AE%A4%23) `166.9K 🔥` `-58%`

Updated at 2026-08-13 07:47:42

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
