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

1. [陆克华受贿1.89亿余元 (Lu Kehua accepted more than 189 million yuan in bribes)](https://s.weibo.com/weibo?q=%23%E9%99%86%E5%85%8B%E5%8D%8E%E5%8F%97%E8%B4%BF1.89%E4%BA%BF%E4%BD%99%E5%85%83%23) `914.5K 🔥` `NEW`
1. [中国男团vs韩国对阵名单](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2vs%E9%9F%A9%E5%9B%BD%E5%AF%B9%E9%98%B5%E5%90%8D%E5%8D%95%23) `771.2K 🔥` `NEW`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `737.1K 🔥` `NEW`
1. [彭昱畅邀毕业生0押金住自如](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E6%98%B1%E7%95%85%E9%82%80%E6%AF%95%E4%B8%9A%E7%94%9F0%E6%8A%BC%E9%87%91%E4%BD%8F%E8%87%AA%E5%A6%82%23) `680.3K 🔥` `NEW`
1. [榴莲仅退款商家拒绝调解](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E5%95%86%E5%AE%B6%E6%8B%92%E7%BB%9D%E8%B0%83%E8%A7%A3%23) `476.3K 🔥` `NEW`
1. [许昕为世乒赛开场](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E4%B8%BA%E4%B8%96%E4%B9%92%E8%B5%9B%E5%BC%80%E5%9C%BA%23) `465.5K 🔥` `NEW`
1. [王楚钦vs吴晙诚](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%90%B4%E6%99%99%E8%AF%9A%23) `424.5K 🔥` `NEW`
1. [早期刘三姐演出全裸桥段](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%9C%9F%E5%88%98%E4%B8%89%E5%A7%90%E6%BC%94%E5%87%BA%E5%85%A8%E8%A3%B8%E6%A1%A5%E6%AE%B5%23) `420.9K 🔥` `NEW`
1. [浏阳烟花厂爆炸时的监控无法查看](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E6%97%B6%E7%9A%84%E7%9B%91%E6%8E%A7%E6%97%A0%E6%B3%95%E6%9F%A5%E7%9C%8B%23) `404.5K 🔥` `NEW`
1. [赢家 田曦薇](https://s.weibo.com/weibo?q=%23%E8%B5%A2%E5%AE%B6%20%E7%94%B0%E6%9B%A6%E8%96%87%23) `379.7K 🔥` `NEW`
1. [中国男团vs韩国 (Chinese men's team vs. South Korea)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2vs%E9%9F%A9%E5%9B%BD%23) `301.1K 🔥` `NEW`
1. [刚出锅的洞洞鞋](https://s.weibo.com/weibo?q=%23%E5%88%9A%E5%87%BA%E9%94%85%E7%9A%84%E6%B4%9E%E6%B4%9E%E9%9E%8B%23) `279.3K 🔥` `NEW`
1. [敏京和胜勇在一起了](https://s.weibo.com/weibo?q=%23%E6%95%8F%E4%BA%AC%E5%92%8C%E8%83%9C%E5%8B%87%E5%9C%A8%E4%B8%80%E8%B5%B7%E4%BA%86%23) `226.4K 🔥` `NEW`
1. [百想艺术大赏](https://s.weibo.com/weibo?q=%23%E7%99%BE%E6%83%B3%E8%89%BA%E6%9C%AF%E5%A4%A7%E8%B5%8F%23) `218.8K 🔥` `NEW`
1. [宋亚轩初中校运会旧照](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%88%9D%E4%B8%AD%E6%A0%A1%E8%BF%90%E4%BC%9A%E6%97%A7%E7%85%A7%23) `212.9K 🔥` `NEW`
1. [这老师已经不属于桃李满天下了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%80%81%E5%B8%88%E5%B7%B2%E7%BB%8F%E4%B8%8D%E5%B1%9E%E4%BA%8E%E6%A1%83%E6%9D%8E%E6%BB%A1%E5%A4%A9%E4%B8%8B%E4%BA%86%23) `194.6K 🔥` `NEW`
1. [戛纳电影节华语艺人出席名单](https://s.weibo.com/weibo?q=%23%E6%88%9B%E7%BA%B3%E7%94%B5%E5%BD%B1%E8%8A%82%E5%8D%8E%E8%AF%AD%E8%89%BA%E4%BA%BA%E5%87%BA%E5%B8%AD%E5%90%8D%E5%8D%95%23) `163.5K 🔥` `NEW`
1. [全香港都在偶遇陈奕迅](https://s.weibo.com/weibo?q=%23%E5%85%A8%E9%A6%99%E6%B8%AF%E9%83%BD%E5%9C%A8%E5%81%B6%E9%81%87%E9%99%88%E5%A5%95%E8%BF%85%23) `115.1K 🔥` `NEW`
1. [王欣瑜vs伊埃拉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AC%A3%E7%91%9Cvs%E4%BC%8A%E5%9F%83%E6%8B%89%23) `111.5K 🔥` `NEW`
1. [张凌赫晕船晕到脸色发白](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%99%95%E8%88%B9%E6%99%95%E5%88%B0%E8%84%B8%E8%89%B2%E5%8F%91%E7%99%BD%23) `104.3K 🔥` `NEW`
1. [皮皮虾事件亲属回应客人签字确认才做 (Relatives of the Pipi Shrimp Incident responded that they would only do it after the customer signed and confirmed it)](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E7%9A%AE%E8%99%BE%E4%BA%8B%E4%BB%B6%E4%BA%B2%E5%B1%9E%E5%9B%9E%E5%BA%94%E5%AE%A2%E4%BA%BA%E7%AD%BE%E5%AD%97%E7%A1%AE%E8%AE%A4%E6%89%8D%E5%81%9A%23) `751.9K 🔥` `+360%`
1. [TOP吃饭用盆装菜](https://s.weibo.com/weibo?q=%23TOP%E5%90%83%E9%A5%AD%E7%94%A8%E7%9B%86%E8%A3%85%E8%8F%9C%23) `388.2K 🔥` `+142%`
1. [外网把中国视频偷给日本成常态 (It has become normal for external networks to steal Chinese videos to Japan)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E6%8A%8A%E4%B8%AD%E5%9B%BD%E8%A7%86%E9%A2%91%E5%81%B7%E7%BB%99%E6%97%A5%E6%9C%AC%E6%88%90%E5%B8%B8%E6%80%81%23) `312.1K 🔥` `+94%`
1. [小米18系列或成最激进一代](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318%E7%B3%BB%E5%88%97%E6%88%96%E6%88%90%E6%9C%80%E6%BF%80%E8%BF%9B%E4%B8%80%E4%BB%A3%23) `304.7K 🔥` `+56%`
1. [台湾出现汉坦病毒致死病例](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%87%BA%E7%8E%B0%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E8%87%B4%E6%AD%BB%E7%97%85%E4%BE%8B%23) `302.9K 🔥` `+85%`
1. [吴艳妮强迫症爆发整理家](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE%E5%BC%BA%E8%BF%AB%E7%97%87%E7%88%86%E5%8F%91%E6%95%B4%E7%90%86%E5%AE%B6%23) `266.9K 🔥` `+64%`
1. [以旧换新助推智能消费升级 (Trade-in old products for new ones to promote smart consumption upgrades)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E5%8A%A9%E6%8E%A8%E6%99%BA%E8%83%BD%E6%B6%88%E8%B4%B9%E5%8D%87%E7%BA%A7%23) `784.0K 🔥`
1. [向太不满向佑恋情称绝不认这种儿媳](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E4%B8%8D%E6%BB%A1%E5%90%91%E4%BD%91%E6%81%8B%E6%83%85%E7%A7%B0%E7%BB%9D%E4%B8%8D%E8%AE%A4%E8%BF%99%E7%A7%8D%E5%84%BF%E5%AA%B3%23) `412.7K 🔥`
1. [张艺谋 刘三姐](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E8%B0%8B%20%E5%88%98%E4%B8%89%E5%A7%90%23) `397.8K 🔥`
1. [工作后大家的朋友圈都变了 (After work, everyone’s circle of friends has changed.)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E5%A4%A7%E5%AE%B6%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%83%BD%E5%8F%98%E4%BA%86%23) `380.1K 🔥`
1. [汪海林限高](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B5%B7%E6%9E%97%E9%99%90%E9%AB%98%23) `378.2K 🔥`
1. [汉坦病毒 (hantavirus)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%23) `304.1K 🔥`
1. [男生感染HPV身体会怎样](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%84%9F%E6%9F%93HPV%E8%BA%AB%E4%BD%93%E4%BC%9A%E6%80%8E%E6%A0%B7%23) `298.6K 🔥`
1. [孙恩盛掉美颜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%81%A9%E7%9B%9B%E6%8E%89%E7%BE%8E%E9%A2%9C%23) `267.2K 🔥`
1. [新娘的陪嫁是一对龙凤胎 (The bride's dowry is a pair of twins)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%9A%84%E9%99%AA%E5%AB%81%E6%98%AF%E4%B8%80%E5%AF%B9%E9%BE%99%E5%87%A4%E8%83%8E%23) `183.0K 🔥`
1. [Uzi说人气被自己玩没了](https://s.weibo.com/weibo?q=%23Uzi%E8%AF%B4%E4%BA%BA%E6%B0%94%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%8E%A9%E6%B2%A1%E4%BA%86%23) `152.6K 🔥`
1. [陈漫拍Angelababy](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%BC%AB%E6%8B%8DAngelababy%23) `146.6K 🔥`
1. [汪海林回应被限高](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B5%B7%E6%9E%97%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%99%90%E9%AB%98%23) `134.8K 🔥`
1. [榴莲仅退款买家被行拘](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `1.7M 🔥` `-36%`
1. [湖南卫视综艺本周停播](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E7%BB%BC%E8%89%BA%E6%9C%AC%E5%91%A8%E5%81%9C%E6%92%AD%23) `621.1K 🔥` `-41%`
1. [央视或低价拿下世界杯转播权 (CCTV may win the World Cup broadcasting rights at a low price)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%88%96%E4%BD%8E%E4%BB%B7%E6%8B%BF%E4%B8%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `297.7K 🔥` `-43%`
1. [OPPO回应母亲节文案争议 (OPPO responds to Mother’s Day copywriting controversy)](https://s.weibo.com/weibo?q=%23OPPO%E5%9B%9E%E5%BA%94%E6%AF%8D%E4%BA%B2%E8%8A%82%E6%96%87%E6%A1%88%E4%BA%89%E8%AE%AE%23) `216.7K 🔥` `-60%`
1. [詹姆斯一句0比2堵住所有问题 (James blocked all problems with 0 to 2)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%80%E5%8F%A50%E6%AF%942%E5%A0%B5%E4%BD%8F%E6%89%80%E6%9C%89%E9%97%AE%E9%A2%98%23) `210.0K 🔥` `-48%`
1. [DeepSeek崩了](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B4%A9%E4%BA%86%23) `193.0K 🔥` `-43%`
1. [曝时代少年团新企划](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%96%B0%E4%BC%81%E5%88%92%23) `191.8K 🔥` `-26%`
1. [难怪马頔会喜欢孙丞潇](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E9%A9%AC%E9%A0%94%E4%BC%9A%E5%96%9C%E6%AC%A2%E5%AD%99%E4%B8%9E%E6%BD%87%23) `186.4K 🔥` `-47%`
1. [孟子义确实红的档期有点满](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%A1%AE%E5%AE%9E%E7%BA%A2%E7%9A%84%E6%A1%A3%E6%9C%9F%E6%9C%89%E7%82%B9%E6%BB%A1%23) `169.4K 🔥` `-52%`
1. [英方裁定2名中国公民有罪 (Britain finds two Chinese citizens guilty)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%96%B9%E8%A3%81%E5%AE%9A2%E5%90%8D%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E6%9C%89%E7%BD%AA%23) `118.2K 🔥` `-67%`
1. [中疾控回应汉坦病毒疫情](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%96%BE%E6%8E%A7%E5%9B%9E%E5%BA%94%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E7%96%AB%E6%83%85%23) `102.3K 🔥` `-37%`
1. [Switch2官宣涨价](https://s.weibo.com/weibo?q=%23Switch2%E5%AE%98%E5%AE%A3%E6%B6%A8%E4%BB%B7%23) `100.9K 🔥` `-38%`
1. [暴发致命病毒邮轮即将靠岸](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E5%8F%91%E8%87%B4%E5%91%BD%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E5%8D%B3%E5%B0%86%E9%9D%A0%E5%B2%B8%23) `99.3K 🔥` `-70%`

Updated at 2026-05-08 19:49:24

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
