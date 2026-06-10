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

1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `1.1M 🔥` `NEW`
1. [papi酱私藏好物大公开](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E7%A7%81%E8%97%8F%E5%A5%BD%E7%89%A9%E5%A4%A7%E5%85%AC%E5%BC%80%23) `769.3K 🔥` `NEW`
1. [世界杯揭幕战](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%8F%AD%E5%B9%95%E6%88%98%23) `747.6K 🔥` `NEW`
1. [小米AI上岛](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3AI%E4%B8%8A%E5%B2%9B%23) `717.3K 🔥` `NEW`
1. [千万别让冰箱贴毁了你的冰箱](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E8%AE%A9%E5%86%B0%E7%AE%B1%E8%B4%B4%E6%AF%81%E4%BA%86%E4%BD%A0%E7%9A%84%E5%86%B0%E7%AE%B1%23) `658.0K 🔥` `NEW`
1. [南部档案到底播不播](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E5%88%B0%E5%BA%95%E6%92%AD%E4%B8%8D%E6%92%AD%23) `657.6K 🔥` `NEW`
1. [第一批高考生已出发](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E9%AB%98%E8%80%83%E7%94%9F%E5%B7%B2%E5%87%BA%E5%8F%91%23) `596.3K 🔥` `NEW`
1. [中国已补齐台湾岛东部海底地图](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B7%B2%E8%A1%A5%E9%BD%90%E5%8F%B0%E6%B9%BE%E5%B2%9B%E4%B8%9C%E9%83%A8%E6%B5%B7%E5%BA%95%E5%9C%B0%E5%9B%BE%23) `323.1K 🔥` `NEW`
1. [谢娜演唱会被抵制的原因](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E6%8A%B5%E5%88%B6%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `322.8K 🔥` `NEW`
1. [白鹿凤囚凰十七集才出场](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%87%A4%E5%9B%9A%E5%87%B0%E5%8D%81%E4%B8%83%E9%9B%86%E6%89%8D%E5%87%BA%E5%9C%BA%23) `321.9K 🔥` `NEW`
1. [13岁脑瘫女孩留遗书跳楼坠亡 (13-year-old girl with cerebral palsy jumped to death after leaving suicide note)](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E8%84%91%E7%98%AB%E5%A5%B3%E5%AD%A9%E7%95%99%E9%81%97%E4%B9%A6%E8%B7%B3%E6%A5%BC%E5%9D%A0%E4%BA%A1%23) `321.6K 🔥` `NEW`
1. [黄灿灿袋装豆浆臂](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E8%A2%8B%E8%A3%85%E8%B1%86%E6%B5%86%E8%87%82%23) `320.1K 🔥` `NEW`
1. [花旗预测金价或跌至3500美元](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%97%97%E9%A2%84%E6%B5%8B%E9%87%91%E4%BB%B7%E6%88%96%E8%B7%8C%E8%87%B33500%E7%BE%8E%E5%85%83%23) `318.9K 🔥` `NEW`
1. [蔡依林故宫](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E6%95%85%E5%AE%AB%23) `318.2K 🔥` `NEW`
1. [曝明星扎堆去大孤山的原因](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%98%8E%E6%98%9F%E6%89%8E%E5%A0%86%E5%8E%BB%E5%A4%A7%E5%AD%A4%E5%B1%B1%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `318.2K 🔥` `NEW`
1. [张雪坐地铁误用房卡顺利通过闸机](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%9D%90%E5%9C%B0%E9%93%81%E8%AF%AF%E7%94%A8%E6%88%BF%E5%8D%A1%E9%A1%BA%E5%88%A9%E9%80%9A%E8%BF%87%E9%97%B8%E6%9C%BA%23) `317.3K 🔥` `NEW`
1. [官方通报苏州一工地大量村民挖宝](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E8%8B%8F%E5%B7%9E%E4%B8%80%E5%B7%A5%E5%9C%B0%E5%A4%A7%E9%87%8F%E6%9D%91%E6%B0%91%E6%8C%96%E5%AE%9D%23) `316.7K 🔥` `NEW`
1. [迪丽热巴陈飞宇 情侣手链](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%20%E6%83%85%E4%BE%A3%E6%89%8B%E9%93%BE%23) `315.9K 🔥` `NEW`
1. [于娜首次公开丈夫去世细节](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E5%A8%9C%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%E4%B8%88%E5%A4%AB%E5%8E%BB%E4%B8%96%E7%BB%86%E8%8A%82%23) `315.2K 🔥` `NEW`
1. [别在职场散发弱者气息](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%9C%A8%E8%81%8C%E5%9C%BA%E6%95%A3%E5%8F%91%E5%BC%B1%E8%80%85%E6%B0%94%E6%81%AF%23) `314.3K 🔥` `NEW`
1. [刘浩存 我看手机 (Liu Haocun I look at my phone)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E6%88%91%E7%9C%8B%E6%89%8B%E6%9C%BA%23) `313.7K 🔥` `NEW`
1. [虞书欣主演长生骨排景](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%BB%E6%BC%94%E9%95%BF%E7%94%9F%E9%AA%A8%E6%8E%92%E6%99%AF%23) `313.4K 🔥` `NEW`
1. [专家称A股回调三百多点是难得机遇](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0A%E8%82%A1%E5%9B%9E%E8%B0%83%E4%B8%89%E7%99%BE%E5%A4%9A%E7%82%B9%E6%98%AF%E9%9A%BE%E5%BE%97%E6%9C%BA%E9%81%87%23) `312.1K 🔥` `NEW`
1. [本田电动车业务损失惨重](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E7%94%B0%E7%94%B5%E5%8A%A8%E8%BD%A6%E4%B8%9A%E5%8A%A1%E6%8D%9F%E5%A4%B1%E6%83%A8%E9%87%8D%23) `309.1K 🔥` `NEW`
1. [凤囚凰编剧回应](https://s.weibo.com/weibo?q=%23%E5%87%A4%E5%9B%9A%E5%87%B0%E7%BC%96%E5%89%A7%E5%9B%9E%E5%BA%94%23) `307.1K 🔥` `NEW`
1. [鹅腿阿姨微信被禁止转账](https://s.weibo.com/weibo?q=%23%E9%B9%85%E8%85%BF%E9%98%BF%E5%A7%A8%E5%BE%AE%E4%BF%A1%E8%A2%AB%E7%A6%81%E6%AD%A2%E8%BD%AC%E8%B4%A6%23) `304.1K 🔥` `NEW`
1. [网传徐洁儿嗓子坏了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BE%90%E6%B4%81%E5%84%BF%E5%97%93%E5%AD%90%E5%9D%8F%E4%BA%86%23) `303.2K 🔥` `NEW`
1. [蒙淇淇称莫离有团队原创内容](https://s.weibo.com/weibo?q=%23%E8%92%99%E6%B7%87%E6%B7%87%E7%A7%B0%E8%8E%AB%E7%A6%BB%E6%9C%89%E5%9B%A2%E9%98%9F%E5%8E%9F%E5%88%9B%E5%86%85%E5%AE%B9%23) `282.0K 🔥` `NEW`
1. [黑衣女疑与宝马男出轨丈夫砸车](https://s.weibo.com/weibo?q=%23%E9%BB%91%E8%A1%A3%E5%A5%B3%E7%96%91%E4%B8%8E%E5%AE%9D%E9%A9%AC%E7%94%B7%E5%87%BA%E8%BD%A8%E4%B8%88%E5%A4%AB%E7%A0%B8%E8%BD%A6%23) `251.7K 🔥` `NEW`
1. [高考结束](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%BB%93%E6%9D%9F%23) `238.8K 🔥` `NEW`
1. [187万起拍高尔夫会籍还需41万转让费 (Golf membership starts at 1.87 million and requires 410,000 transfer fee)](https://s.weibo.com/weibo?q=%23187%E4%B8%87%E8%B5%B7%E6%8B%8D%E9%AB%98%E5%B0%94%E5%A4%AB%E4%BC%9A%E7%B1%8D%E8%BF%98%E9%9C%8041%E4%B8%87%E8%BD%AC%E8%AE%A9%E8%B4%B9%23) `236.0K 🔥` `NEW`
1. [莫离 盛世嫡妃](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%20%E7%9B%9B%E4%B8%96%E5%AB%A1%E5%A6%83%23) `235.6K 🔥` `NEW`
1. [最节俭的人投胎到我家了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%8A%82%E4%BF%AD%E7%9A%84%E4%BA%BA%E6%8A%95%E8%83%8E%E5%88%B0%E6%88%91%E5%AE%B6%E4%BA%86%23) `235.3K 🔥` `NEW`
1. [谢娜本身也是专业歌手](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%9C%AC%E8%BA%AB%E4%B9%9F%E6%98%AF%E4%B8%93%E4%B8%9A%E6%AD%8C%E6%89%8B%23) `235.2K 🔥` `NEW`
1. [穆祉丞演唱会](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `235.1K 🔥` `NEW`
1. [王鹤棣将门毒后台词听力测试](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%E5%8F%B0%E8%AF%8D%E5%90%AC%E5%8A%9B%E6%B5%8B%E8%AF%95%23) `207.0K 🔥` `NEW`
1. [观众为莫离发声](https://s.weibo.com/weibo?q=%23%E8%A7%82%E4%BC%97%E4%B8%BA%E8%8E%AB%E7%A6%BB%E5%8F%91%E5%A3%B0%23) `195.3K 🔥` `NEW`
1. [黄金投资何去何从](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%8A%95%E8%B5%84%E4%BD%95%E5%8E%BB%E4%BD%95%E4%BB%8E%23) `188.0K 🔥` `NEW`
1. [外国人热议应该让中国举办世界杯](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E7%83%AD%E8%AE%AE%E5%BA%94%E8%AF%A5%E8%AE%A9%E4%B8%AD%E5%9B%BD%E4%B8%BE%E5%8A%9E%E4%B8%96%E7%95%8C%E6%9D%AF%23) `164.9K 🔥` `NEW`
1. [梅西称想好好享受这届世界杯](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E7%A7%B0%E6%83%B3%E5%A5%BD%E5%A5%BD%E4%BA%AB%E5%8F%97%E8%BF%99%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%23) `163.0K 🔥` `NEW`
1. [上海市副市长陈宇剑被查 (Shanghai Vice Mayor Chen Yujian is under investigation)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%B8%82%E5%89%AF%E5%B8%82%E9%95%BF%E9%99%88%E5%AE%87%E5%89%91%E8%A2%AB%E6%9F%A5%23) `804.5K 🔥` `+70%`
1. [数读数字中国跨越式发展](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E6%95%B0%E5%AD%97%E4%B8%AD%E5%9B%BD%E8%B7%A8%E8%B6%8A%E5%BC%8F%E5%8F%91%E5%B1%95%23) `790.1K 🔥` `-49%`
1. [下周是很善良的一周](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%91%A8%E6%98%AF%E5%BE%88%E5%96%84%E8%89%AF%E7%9A%84%E4%B8%80%E5%91%A8%23) `323.6K 🔥` `-77%`
1. [20岁黄多多状态](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E9%BB%84%E5%A4%9A%E5%A4%9A%E7%8A%B6%E6%80%81%23) `321.0K 🔥` `-31%`
1. [妈妈确诊到离世39天](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%A1%AE%E8%AF%8A%E5%88%B0%E7%A6%BB%E4%B8%9639%E5%A4%A9%23) `319.5K 🔥` `-38%`
1. [于正为白鹿火力全开](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E4%B8%BA%E7%99%BD%E9%B9%BF%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80%23) `314.9K 🔥` `-40%`
1. [运营商杀熟](https://s.weibo.com/weibo?q=%23%E8%BF%90%E8%90%A5%E5%95%86%E6%9D%80%E7%86%9F%23) `286.9K 🔥` `-46%`
1. [陈赫老婆张子萱42岁状态 (Chen He’s wife Zhang Zixuan’s 42-year-old status)](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E8%80%81%E5%A9%86%E5%BC%A0%E5%AD%90%E8%90%B142%E5%B2%81%E7%8A%B6%E6%80%81%23) `267.5K 🔥` `-47%`
1. [张凌赫补偿金特殊备注](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A1%A5%E5%81%BF%E9%87%91%E7%89%B9%E6%AE%8A%E5%A4%87%E6%B3%A8%23) `250.5K 🔥` `-52%`
1. [清北 广东录取率](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8C%97%20%E5%B9%BF%E4%B8%9C%E5%BD%95%E5%8F%96%E7%8E%87%23) `196.6K 🔥` `-58%`
1. [孙千躲张凌赫怀里](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E8%BA%B2%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%80%80%E9%87%8C%23) `181.7K 🔥` `-78%`

Updated at 2026-06-10 19:57:12

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
