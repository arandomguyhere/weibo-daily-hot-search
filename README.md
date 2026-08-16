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

1. [龙餐馆提供了一种新的反战观 (Dragon Restaurant offers a new anti-war perspective)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E6%8F%90%E4%BE%9B%E4%BA%86%E4%B8%80%E7%A7%8D%E6%96%B0%E7%9A%84%E5%8F%8D%E6%88%98%E8%A7%82%23) `272.2K 🔥` `NEW`
1. [时代少年团个人能力排名](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%B8%AA%E4%BA%BA%E8%83%BD%E5%8A%9B%E6%8E%92%E5%90%8D%23) `263.3K 🔥` `NEW`
1. [Jennie东京音乐节造型](https://s.weibo.com/weibo?q=%23Jennie%E4%B8%9C%E4%BA%AC%E9%9F%B3%E4%B9%90%E8%8A%82%E9%80%A0%E5%9E%8B%23) `237.2K 🔥` `NEW`
1. [GEN对战T1](https://s.weibo.com/weibo?q=%23GEN%E5%AF%B9%E6%88%98T1%23) `229.1K 🔥` `NEW`
1. [男艺人TMEA盛典红毯生图](https://s.weibo.com/weibo?q=%23%E7%94%B7%E8%89%BA%E4%BA%BATMEA%E7%9B%9B%E5%85%B8%E7%BA%A2%E6%AF%AF%E7%94%9F%E5%9B%BE%23) `227.2K 🔥` `NEW`
1. [朱志鑫下腰](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E4%B8%8B%E8%85%B0%23) `212.0K 🔥` `NEW`
1. [秦彻密约](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%BD%BB%E5%AF%86%E7%BA%A6%23) `169.8K 🔥` `NEW`
1. [龙餐馆未被采纳的海报](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E6%9C%AA%E8%A2%AB%E9%87%87%E7%BA%B3%E7%9A%84%E6%B5%B7%E6%8A%A5%23) `157.6K 🔥` `NEW`
1. [很多食物都是面朝下更好吃](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E9%A3%9F%E7%89%A9%E9%83%BD%E6%98%AF%E9%9D%A2%E6%9C%9D%E4%B8%8B%E6%9B%B4%E5%A5%BD%E5%90%83%23) `154.4K 🔥` `NEW`
1. [货主称价值158万黑胡椒存冷库消失](https://s.weibo.com/weibo?q=%23%E8%B4%A7%E4%B8%BB%E7%A7%B0%E4%BB%B7%E5%80%BC158%E4%B8%87%E9%BB%91%E8%83%A1%E6%A4%92%E5%AD%98%E5%86%B7%E5%BA%93%E6%B6%88%E5%A4%B1%23) `150.9K 🔥` `NEW`
1. [厄尔尼诺让糖价起飞了 (El Niño sends sugar prices soaring)](https://s.weibo.com/weibo?q=%23%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E8%AE%A9%E7%B3%96%E4%BB%B7%E8%B5%B7%E9%A3%9E%E4%BA%86%23) `150.3K 🔥` `NEW`
1. [TMEA节目单](https://s.weibo.com/weibo?q=%23TMEA%E8%8A%82%E7%9B%AE%E5%8D%95%23) `149.7K 🔥` `NEW`
1. [市民投诉月光太亮影响睡眠](https://s.weibo.com/weibo?q=%23%E5%B8%82%E6%B0%91%E6%8A%95%E8%AF%89%E6%9C%88%E5%85%89%E5%A4%AA%E4%BA%AE%E5%BD%B1%E5%93%8D%E7%9D%A1%E7%9C%A0%23) `146.1K 🔥` `NEW`
1. [苹果被督促放弃采购中国芯片](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%A2%AB%E7%9D%A3%E4%BF%83%E6%94%BE%E5%BC%83%E9%87%87%E8%B4%AD%E4%B8%AD%E5%9B%BD%E8%8A%AF%E7%89%87%23) `134.5K 🔥` `NEW`
1. [网红小家电集体吃灰了 (Internet celebrity small home appliances are collectively in ashes)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%AE%B6%E7%94%B5%E9%9B%86%E4%BD%93%E5%90%83%E7%81%B0%E4%BA%86%23) `720.5K 🔥` `+50%`
1. [韩网友点评新疆伊犁草原](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E5%8F%8B%E7%82%B9%E8%AF%84%E6%96%B0%E7%96%86%E4%BC%8A%E7%8A%81%E8%8D%89%E5%8E%9F%23) `227.4K 🔥` `+40%`
1. [VG解散](https://s.weibo.com/weibo?q=%23VG%E8%A7%A3%E6%95%A3%23) `177.6K 🔥` `+32%`
1. [这个班的名字都好听](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E7%8F%AD%E7%9A%84%E5%90%8D%E5%AD%97%E9%83%BD%E5%A5%BD%E5%90%AC%23) `176.7K 🔥` `+21%`
1. [我们的少年时代2 绷不住](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%20%E7%BB%B7%E4%B8%8D%E4%BD%8F%23) `175.4K 🔥` `+25%`
1. [朱镕基同志遗体18日火化 (Comrade Zhu Rongji’s body was cremated on the 18th)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%9318%E6%97%A5%E7%81%AB%E5%8C%96%23) `1.0M 🔥`
1. [我国现代化应急体系建设提速 (The construction of my country's modern emergency response system speeds up)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%8E%B0%E4%BB%A3%E5%8C%96%E5%BA%94%E6%80%A5%E4%BD%93%E7%B3%BB%E5%BB%BA%E8%AE%BE%E6%8F%90%E9%80%9F%23) `567.0K 🔥`
1. [疑似龙餐馆找沈腾演男主的原因](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E9%BE%99%E9%A4%90%E9%A6%86%E6%89%BE%E6%B2%88%E8%85%BE%E6%BC%94%E7%94%B7%E4%B8%BB%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `518.3K 🔥`
1. [景德镇做的陶瓷还是太超前了](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%BE%B7%E9%95%87%E5%81%9A%E7%9A%84%E9%99%B6%E7%93%B7%E8%BF%98%E6%98%AF%E5%A4%AA%E8%B6%85%E5%89%8D%E4%BA%86%23) `415.9K 🔥`
1. [央视调查幼小衔接超前学 (CCTV investigates transition from primary school to advanced school)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B0%83%E6%9F%A5%E5%B9%BC%E5%B0%8F%E8%A1%94%E6%8E%A5%E8%B6%85%E5%89%8D%E5%AD%A6%23) `354.4K 🔥`
1. [等了好久的妆造是遗照](https://s.weibo.com/weibo?q=%23%E7%AD%89%E4%BA%86%E5%A5%BD%E4%B9%85%E7%9A%84%E5%A6%86%E9%80%A0%E6%98%AF%E9%81%97%E7%85%A7%23) `276.8K 🔥`
1. [瑞幸七夕联名 翻车](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E4%B8%83%E5%A4%95%E8%81%94%E5%90%8D%20%E7%BF%BB%E8%BD%A6%23) `271.9K 🔥`
1. [何穗妊娠纹 (He Sui stretch marks)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E5%A6%8A%E5%A8%A0%E7%BA%B9%23) `260.8K 🔥`
1. [沈佳润白到发光](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E7%99%BD%E5%88%B0%E5%8F%91%E5%85%89%23) `243.1K 🔥`
1. [黑粉给白鹿道歉](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%B2%89%E7%BB%99%E7%99%BD%E9%B9%BF%E9%81%93%E6%AD%89%23) `228.9K 🔥`
1. [以色列高官极端言论震惊国际社会](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%AB%98%E5%AE%98%E6%9E%81%E7%AB%AF%E8%A8%80%E8%AE%BA%E9%9C%87%E6%83%8A%E5%9B%BD%E9%99%85%E7%A4%BE%E4%BC%9A%23) `228.7K 🔥`
1. [马正阳声音侵权声明 (Ma Zhengyang’s voice infringement statement)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%AD%A3%E9%98%B3%E5%A3%B0%E9%9F%B3%E4%BE%B5%E6%9D%83%E5%A3%B0%E6%98%8E%23) `228.5K 🔥`
1. [曝谷爱凌LV三公子恋情 (Gu Ailing’s love affair with LV’s third son revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B0%B7%E7%88%B1%E5%87%8CLV%E4%B8%89%E5%85%AC%E5%AD%90%E6%81%8B%E6%83%85%23) `228.1K 🔥`
1. [什么东西成年了才意识到很贵 (What do you need to realize as an adult that something is expensive?)](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E4%B8%9C%E8%A5%BF%E6%88%90%E5%B9%B4%E4%BA%86%E6%89%8D%E6%84%8F%E8%AF%86%E5%88%B0%E5%BE%88%E8%B4%B5%23) `227.9K 🔥`
1. [结婚12年3孩2个非亲生男子最新发声](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A12%E5%B9%B43%E5%AD%A92%E4%B8%AA%E9%9D%9E%E4%BA%B2%E7%94%9F%E7%94%B7%E5%AD%90%E6%9C%80%E6%96%B0%E5%8F%91%E5%A3%B0%23) `227.1K 🔥`
1. [王橹杰哭戏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%93%AD%E6%88%8F%23) `212.3K 🔥`
1. [39岁知名儿科医生不幸去世](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E7%9F%A5%E5%90%8D%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E4%B8%8D%E5%B9%B8%E5%8E%BB%E4%B8%96%23) `208.9K 🔥`
1. [伊朗称三名飞行员被卡塔尔活捉 (Iran says three pilots were captured alive by Qatar)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E4%B8%89%E5%90%8D%E9%A3%9E%E8%A1%8C%E5%91%98%E8%A2%AB%E5%8D%A1%E5%A1%94%E5%B0%94%E6%B4%BB%E6%8D%89%23) `176.7K 🔥`
1. [赵本山女儿自曝患三种精神疾病](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E5%A5%B3%E5%84%BF%E8%87%AA%E6%9B%9D%E6%82%A3%E4%B8%89%E7%A7%8D%E7%B2%BE%E7%A5%9E%E7%96%BE%E7%97%85%23) `176.4K 🔥`
1. [当你在周末的下午睡着了 (When you fall asleep on a weekend afternoon)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E5%9C%A8%E5%91%A8%E6%9C%AB%E7%9A%84%E4%B8%8B%E5%8D%88%E7%9D%A1%E7%9D%80%E4%BA%86%23) `160.4K 🔥`
1. [70岁老人轻拍女孩头部家长愤怒推倒](https://s.weibo.com/weibo?q=%2370%E5%B2%81%E8%80%81%E4%BA%BA%E8%BD%BB%E6%8B%8D%E5%A5%B3%E5%AD%A9%E5%A4%B4%E9%83%A8%E5%AE%B6%E9%95%BF%E6%84%A4%E6%80%92%E6%8E%A8%E5%80%92%23) `160.0K 🔥`
1. [日本战斗分队在俄乌战场与俄军作战 (Japanese combat units fought with Russian troops on the Russian-Ukrainian battlefield)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%88%98%E6%96%97%E5%88%86%E9%98%9F%E5%9C%A8%E4%BF%84%E4%B9%8C%E6%88%98%E5%9C%BA%E4%B8%8E%E4%BF%84%E5%86%9B%E4%BD%9C%E6%88%98%23) `153.3K 🔥`
1. [虞书欣凌晨下班上午武训 (Yu Shuxin gets off work early in the morning and does martial arts training in the morning)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%87%8C%E6%99%A8%E4%B8%8B%E7%8F%AD%E4%B8%8A%E5%8D%88%E6%AD%A6%E8%AE%AD%23) `138.1K 🔥`
1. [雷军晒15年前小米手机发布会](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%99%9215%E5%B9%B4%E5%89%8D%E5%B0%8F%E7%B1%B3%E6%89%8B%E6%9C%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `135.5K 🔥`
1. [严浩翔听到张峻豪放狠话的反应 (Yan Haoxiang's reaction when he heard Zhang Junhao's harsh words)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%90%AC%E5%88%B0%E5%BC%A0%E5%B3%BB%E8%B1%AA%E6%94%BE%E7%8B%A0%E8%AF%9D%E7%9A%84%E5%8F%8D%E5%BA%94%23) `415.8K 🔥` `-24%`
1. [沪上阿姨 涉不正当竞争](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%20%E6%B6%89%E4%B8%8D%E6%AD%A3%E5%BD%93%E7%AB%9E%E4%BA%89%23) `382.5K 🔥` `-32%`
1. [真的建议要从源头减少家务](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E5%BB%BA%E8%AE%AE%E8%A6%81%E4%BB%8E%E6%BA%90%E5%A4%B4%E5%87%8F%E5%B0%91%E5%AE%B6%E5%8A%A1%23) `253.8K 🔥` `-27%`
1. [赵丽颖短发黑裙拍立得 (Zhao Liying short hair black skirt Polaroid)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%9F%AD%E5%8F%91%E9%BB%91%E8%A3%99%E6%8B%8D%E7%AB%8B%E5%BE%97%23) `150.2K 🔥` `-21%`
1. [宝格丽酒店的正确退房仪式 (Correct check-out ceremony at Bulgari Hotel)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E9%85%92%E5%BA%97%E7%9A%84%E6%AD%A3%E7%A1%AE%E9%80%80%E6%88%BF%E4%BB%AA%E5%BC%8F%23) `141.0K 🔥` `-22%`
1. [余依婷0.02秒绝杀夺金 (Yu Yiting won the gold medal with a 0.02-second kill)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E4%BE%9D%E5%A9%B70.02%E7%A7%92%E7%BB%9D%E6%9D%80%E5%A4%BA%E9%87%91%23) `134.1K 🔥` `-21%`

Updated at 2026-08-16 18:29:37

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
