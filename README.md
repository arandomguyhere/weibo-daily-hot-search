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

1. [巴西绝杀 (Brazil's buzzer beater)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E7%BB%9D%E6%9D%80%23) `5.6M 🔥` `NEW`
1. [巴西醒醒 这是淘汰赛](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E9%86%92%E9%86%92%20%E8%BF%99%E6%98%AF%E6%B7%98%E6%B1%B0%E8%B5%9B%23) `923.9K 🔥` `NEW`
1. [孙兴慜道歉](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%85%B4%E6%85%9C%E9%81%93%E6%AD%89%23) `401.6K 🔥` `NEW`
1. [巴西扳平比分](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E6%89%B3%E5%B9%B3%E6%AF%94%E5%88%86%23) `392.0K 🔥` `NEW`
1. [日本 高位逼抢](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%20%E9%AB%98%E4%BD%8D%E9%80%BC%E6%8A%A2%23) `155.6K 🔥` `NEW`
1. [花少8要去世界杯举办国](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E8%A6%81%E5%8E%BB%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%BE%E5%8A%9E%E5%9B%BD%23) `87.9K 🔥` `NEW`
1. [巴西半场0比1日本](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%8D%8A%E5%9C%BA0%E6%AF%941%E6%97%A5%E6%9C%AC%23) `72.5K 🔥` `NEW`
1. [有酒店推行24小时退房制](https://s.weibo.com/weibo?q=%23%E6%9C%89%E9%85%92%E5%BA%97%E6%8E%A8%E8%A1%8C24%E5%B0%8F%E6%97%B6%E9%80%80%E6%88%BF%E5%88%B6%23) `43.1K 🔥` `NEW`
1. [谢依霖说杨幂是聚会第一把张罗手](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E4%BE%9D%E9%9C%96%E8%AF%B4%E6%9D%A8%E5%B9%82%E6%98%AF%E8%81%9A%E4%BC%9A%E7%AC%AC%E4%B8%80%E6%8A%8A%E5%BC%A0%E7%BD%97%E6%89%8B%23) `43.1K 🔥` `NEW`
1. [这些7月新规影响你我](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B7%E6%9C%88%E6%96%B0%E8%A7%84%E5%BD%B1%E5%93%8D%E4%BD%A0%E6%88%91%23) `1.1M 🔥` `+69%`
1. [徐亮怒斥世界杯踢假球 (Xu Liang angrily denounced World Cup match-fixing)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E4%BA%AE%E6%80%92%E6%96%A5%E4%B8%96%E7%95%8C%E6%9D%AF%E8%B8%A2%E5%81%87%E7%90%83%23) `134.5K 🔥` `+30%`
1. [巴西vs日本 (Brazil vs Japan)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BFvs%E6%97%A5%E6%9C%AC%23) `3.0M 🔥`
1. [日本进球](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%BF%9B%E7%90%83%23) `672.2K 🔥`
1. [女子清吧被陌生人投放伟哥 (Woman was given Viagra by a stranger at a bar)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B8%85%E5%90%A7%E8%A2%AB%E9%99%8C%E7%94%9F%E4%BA%BA%E6%8A%95%E6%94%BE%E4%BC%9F%E5%93%A5%23) `189.2K 🔥`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `107.7K 🔥`
1. [日本16强魔咒](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC16%E5%BC%BA%E9%AD%94%E5%92%92%23) `86.8K 🔥`
1. [爱直接对嘴喝饮料的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%9B%B4%E6%8E%A5%E5%AF%B9%E5%98%B4%E5%96%9D%E9%A5%AE%E6%96%99%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `217.1K 🔥` `-67%`
1. [恋与深空回应争议](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `197.2K 🔥` `-77%`
1. [詹姆斯 勇士](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%20%E5%8B%87%E5%A3%AB%23) `190.8K 🔥` `-51%`
1. [马航MH370传来最新消息](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E8%88%AAMH370%E4%BC%A0%E6%9D%A5%E6%9C%80%E6%96%B0%E6%B6%88%E6%81%AF%23) `174.0K 🔥` `-69%`
1. [王源近几年没有路演了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%BF%91%E5%87%A0%E5%B9%B4%E6%B2%A1%E6%9C%89%E8%B7%AF%E6%BC%94%E4%BA%86%23) `157.7K 🔥` `-59%`
1. [81岁老人被男子买光菜回家车祸去世](https://s.weibo.com/weibo?q=%2381%E5%B2%81%E8%80%81%E4%BA%BA%E8%A2%AB%E7%94%B7%E5%AD%90%E4%B9%B0%E5%85%89%E8%8F%9C%E5%9B%9E%E5%AE%B6%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96%23) `103.9K 🔥` `-48%`
1. [巴西若输日本将创36年最差纪录 (If Brazil loses to Japan, it will set its worst record in 36 years)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E8%8B%A5%E8%BE%93%E6%97%A5%E6%9C%AC%E5%B0%86%E5%88%9B36%E5%B9%B4%E6%9C%80%E5%B7%AE%E7%BA%AA%E5%BD%95%23) `93.0K 🔥` `-52%`
1. [免费试吃发差评被店家挂店门避雷](https://s.weibo.com/weibo?q=%23%E5%85%8D%E8%B4%B9%E8%AF%95%E5%90%83%E5%8F%91%E5%B7%AE%E8%AF%84%E8%A2%AB%E5%BA%97%E5%AE%B6%E6%8C%82%E5%BA%97%E9%97%A8%E9%81%BF%E9%9B%B7%23) `90.5K 🔥` `-30%`
1. [不开心就去看三年前的购物订单](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BC%80%E5%BF%83%E5%B0%B1%E5%8E%BB%E7%9C%8B%E4%B8%89%E5%B9%B4%E5%89%8D%E7%9A%84%E8%B4%AD%E7%89%A9%E8%AE%A2%E5%8D%95%23) `84.2K 🔥` `-54%`
1. [杨紫获白玉兰视后为何争议难平](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%8E%B7%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%E4%B8%BA%E4%BD%95%E4%BA%89%E8%AE%AE%E9%9A%BE%E5%B9%B3%23) `83.3K 🔥` `-54%`
1. [千万不要随便扣肚脐](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E9%9A%8F%E4%BE%BF%E6%89%A3%E8%82%9A%E8%84%90%23) `80.8K 🔥` `-62%`
1. [一直以为方便面汤是要倒掉的](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%BB%A5%E4%B8%BA%E6%96%B9%E4%BE%BF%E9%9D%A2%E6%B1%A4%E6%98%AF%E8%A6%81%E5%80%92%E6%8E%89%E7%9A%84%23) `75.9K 🔥` `-70%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `59.9K 🔥` `-63%`
1. [檀健次王楚然吻戏看热了](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%90%BB%E6%88%8F%E7%9C%8B%E7%83%AD%E4%BA%86%23) `59.7K 🔥` `-67%`
1. [科学备孕男女都要上心](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%AD%A6%E5%A4%87%E5%AD%95%E7%94%B7%E5%A5%B3%E9%83%BD%E8%A6%81%E4%B8%8A%E5%BF%83%23) `55.6K 🔥` `-48%`
1. [建议不要突然完全停止喝咖啡](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E7%AA%81%E7%84%B6%E5%AE%8C%E5%85%A8%E5%81%9C%E6%AD%A2%E5%96%9D%E5%92%96%E5%95%A1%23) `54.5K 🔥` `-49%`
1. [全网说丑的玫瑰空调卖了5万台 (50,000 units of the Rose air conditioner that everyone on the Internet said was ugly were sold)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E8%AF%B4%E4%B8%91%E7%9A%84%E7%8E%AB%E7%91%B0%E7%A9%BA%E8%B0%83%E5%8D%96%E4%BA%865%E4%B8%87%E5%8F%B0%23) `54.3K 🔥` `-49%`
1. [恋与深空已删除锅里洗澡文案 (Love and Deep Space has deleted the text "Bathing in a Pot")](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%B7%B2%E5%88%A0%E9%99%A4%E9%94%85%E9%87%8C%E6%B4%97%E6%BE%A1%E6%96%87%E6%A1%88%23) `54.0K 🔥` `-50%`
1. [真实感受到千香是积压剧了](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%AE%9E%E6%84%9F%E5%8F%97%E5%88%B0%E5%8D%83%E9%A6%99%E6%98%AF%E7%A7%AF%E5%8E%8B%E5%89%A7%E4%BA%86%23) `50.7K 🔥` `-67%`
1. [李在明向韩国两大财阀90度鞠躬](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E5%90%91%E9%9F%A9%E5%9B%BD%E4%B8%A4%E5%A4%A7%E8%B4%A2%E9%98%8090%E5%BA%A6%E9%9E%A0%E8%BA%AC%23) `45.3K 🔥` `-57%`
1. [当我知道豆包有后台审核人员 (When I knew Doubao had backend reviewers)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E7%9F%A5%E9%81%93%E8%B1%86%E5%8C%85%E6%9C%89%E5%90%8E%E5%8F%B0%E5%AE%A1%E6%A0%B8%E4%BA%BA%E5%91%98%23) `44.4K 🔥` `-64%`
1. [关晓彤一路小跑迎接爸爸探班](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E4%B8%80%E8%B7%AF%E5%B0%8F%E8%B7%91%E8%BF%8E%E6%8E%A5%E7%88%B8%E7%88%B8%E6%8E%A2%E7%8F%AD%23) `43.1K 🔥` `-63%`
1. [好像看到了人类带孩子崩溃的样子](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%83%8F%E7%9C%8B%E5%88%B0%E4%BA%86%E4%BA%BA%E7%B1%BB%E5%B8%A6%E5%AD%A9%E5%AD%90%E5%B4%A9%E6%BA%83%E7%9A%84%E6%A0%B7%E5%AD%90%23) `43.1K 🔥` `-59%`
1. [主人解开狗绳2只狗将路人撕咬致死](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E8%A7%A3%E5%BC%80%E7%8B%97%E7%BB%B32%E5%8F%AA%E7%8B%97%E5%B0%86%E8%B7%AF%E4%BA%BA%E6%92%95%E5%92%AC%E8%87%B4%E6%AD%BB%23) `43.1K 🔥` `-60%`
1. [男子身高一米八二仍做断骨增高](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BA%AB%E9%AB%98%E4%B8%80%E7%B1%B3%E5%85%AB%E4%BA%8C%E4%BB%8D%E5%81%9A%E6%96%AD%E9%AA%A8%E5%A2%9E%E9%AB%98%23) `43.1K 🔥` `-60%`
1. [张碧晨一开口梦回逐玉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E4%B8%80%E5%BC%80%E5%8F%A3%E6%A2%A6%E5%9B%9E%E9%80%90%E7%8E%89%23) `43.1K 🔥` `-60%`
1. [千香 (Chika)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%A6%99%23) `43.1K 🔥` `-59%`
1. [刘宇宁是去进货了吗](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%98%AF%E5%8E%BB%E8%BF%9B%E8%B4%A7%E4%BA%86%E5%90%97%23) `43.1K 🔥` `-59%`
1. [怕iPhone涨价的用户已紧急换新](https://s.weibo.com/weibo?q=%23%E6%80%95iPhone%E6%B6%A8%E4%BB%B7%E7%9A%84%E7%94%A8%E6%88%B7%E5%B7%B2%E7%B4%A7%E6%80%A5%E6%8D%A2%E6%96%B0%23) `43.1K 🔥` `-60%`
1. [穆祉丞年度人气艺人 (Mu Zhicheng Popular Artist of the Year)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%B9%B4%E5%BA%A6%E4%BA%BA%E6%B0%94%E8%89%BA%E4%BA%BA%23) `43.1K 🔥` `-59%`
1. [问心2神一集鬼三集](https://s.weibo.com/weibo?q=%23%E9%97%AE%E5%BF%832%E7%A5%9E%E4%B8%80%E9%9B%86%E9%AC%BC%E4%B8%89%E9%9B%86%23) `43.1K 🔥` `-59%`
1. [张月感谢了每一公的队友](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%84%9F%E8%B0%A2%E4%BA%86%E6%AF%8F%E4%B8%80%E5%85%AC%E7%9A%84%E9%98%9F%E5%8F%8B%23) `43.1K 🔥` `-59%`
1. [英语考了145的人竟然教数学](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%AF%AD%E8%80%83%E4%BA%86145%E7%9A%84%E4%BA%BA%E7%AB%9F%E7%84%B6%E6%95%99%E6%95%B0%E5%AD%A6%23) `43.1K 🔥` `-59%`
1. [张凌赫杨超越 峨眉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9D%A8%E8%B6%85%E8%B6%8A%20%E5%B3%A8%E7%9C%89%23) `43.1K 🔥` `-59%`

Updated at 2026-06-30 03:27:33

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
