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

1. [iPhoneDuo 折痕](https://s.weibo.com/weibo?q=%23iPhoneDuo%20%E6%8A%98%E7%97%95%23) `2.4M 🔥` `NEW`
1. [华为折叠屏](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%8A%98%E5%8F%A0%E5%B1%8F%23) `1.1M 🔥` `NEW`
1. [青春华章](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%23) `811.7K 🔥` `NEW`
1. [iPhone18Pro颜色 男士内裤](https://s.weibo.com/weibo?q=%23iPhone18Pro%E9%A2%9C%E8%89%B2%20%E7%94%B7%E5%A3%AB%E5%86%85%E8%A3%A4%23) `805.5K 🔥` `NEW`
1. [梅姨首任丈夫称她生两个儿子后离开](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E9%A6%96%E4%BB%BB%E4%B8%88%E5%A4%AB%E7%A7%B0%E5%A5%B9%E7%94%9F%E4%B8%A4%E4%B8%AA%E5%84%BF%E5%AD%90%E5%90%8E%E7%A6%BB%E5%BC%80%23) `796.0K 🔥` `NEW`
1. [日本梅毒男性20到60岁女性20左右](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%A2%85%E6%AF%92%E7%94%B7%E6%80%A720%E5%88%B060%E5%B2%81%E5%A5%B3%E6%80%A720%E5%B7%A6%E5%8F%B3%23) `785.9K 🔥` `NEW`
1. [海氏海诺小黄人联名](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B0%8F%E6%B5%B7%E8%AF%BA%E5%B0%8F%E9%BB%84%E4%BA%BA%E8%81%94%E5%90%8D%23) `660.6K 🔥` `NEW`
1. [刘翔名下体育公司已注销](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%90%8D%E4%B8%8B%E4%BD%93%E8%82%B2%E5%85%AC%E5%8F%B8%E5%B7%B2%E6%B3%A8%E9%94%80%23) `553.8K 🔥` `NEW`
1. [徐艺洋时隔一个月再夺冠](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E6%97%B6%E9%9A%94%E4%B8%80%E4%B8%AA%E6%9C%88%E5%86%8D%E5%A4%BA%E5%86%A0%23) `528.2K 🔥` `NEW`
1. [兰香如故14首OST](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%8514%E9%A6%96OST%23) `526.3K 🔥` `NEW`
1. [哪位嫂子会用上iPhone的新功能](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%BD%8D%E5%AB%82%E5%AD%90%E4%BC%9A%E7%94%A8%E4%B8%8AiPhone%E7%9A%84%E6%96%B0%E5%8A%9F%E8%83%BD%23) `523.5K 🔥` `NEW`
1. [都谁熬夜看苹果发布会了](https://s.weibo.com/weibo?q=%23%E9%83%BD%E8%B0%81%E7%86%AC%E5%A4%9C%E7%9C%8B%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%E4%BA%86%23) `521.4K 🔥` `NEW`
1. [宝格丽越南公关回应刘亦菲裁掉胡玉荷](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E8%B6%8A%E5%8D%97%E5%85%AC%E5%85%B3%E5%9B%9E%E5%BA%94%E5%88%98%E4%BA%A6%E8%8F%B2%E8%A3%81%E6%8E%89%E8%83%A1%E7%8E%89%E8%8D%B7%23) `518.9K 🔥` `NEW`
1. [上海竞体中心回应刘翔称已买断](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%AB%9E%E4%BD%93%E4%B8%AD%E5%BF%83%E5%9B%9E%E5%BA%94%E5%88%98%E7%BF%94%E7%A7%B0%E5%B7%B2%E4%B9%B0%E6%96%AD%23) `515.2K 🔥` `NEW`
1. [时尚博主曝刘亦菲裁掉胡玉荷的原因](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%B0%9A%E5%8D%9A%E4%B8%BB%E6%9B%9D%E5%88%98%E4%BA%A6%E8%8F%B2%E8%A3%81%E6%8E%89%E8%83%A1%E7%8E%89%E8%8D%B7%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `514.3K 🔥` `NEW`
1. [温铁军称40万可让农民有车有房](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E9%93%81%E5%86%9B%E7%A7%B040%E4%B8%87%E5%8F%AF%E8%AE%A9%E5%86%9C%E6%B0%91%E6%9C%89%E8%BD%A6%E6%9C%89%E6%88%BF%23) `510.8K 🔥` `NEW`
1. [刘恋曾是奥美总监](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%8B%E6%9B%BE%E6%98%AF%E5%A5%A5%E7%BE%8E%E6%80%BB%E7%9B%91%23) `508.7K 🔥` `NEW`
1. [栾念尚之桃复合吻戏太hot了](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E5%A4%8D%E5%90%88%E5%90%BB%E6%88%8F%E5%A4%AAhot%E4%BA%86%23) `505.0K 🔥` `NEW`
1. [学者称交锋对台具文攻警告意味](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E8%80%85%E7%A7%B0%E4%BA%A4%E9%94%8B%E5%AF%B9%E5%8F%B0%E5%85%B7%E6%96%87%E6%94%BB%E8%AD%A6%E5%91%8A%E6%84%8F%E5%91%B3%23) `503.3K 🔥` `NEW`
1. [老吃家才懂杨紫推荐的零食含金量](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%90%83%E5%AE%B6%E6%89%8D%E6%87%82%E6%9D%A8%E7%B4%AB%E6%8E%A8%E8%8D%90%E7%9A%84%E9%9B%B6%E9%A3%9F%E5%90%AB%E9%87%91%E9%87%8F%23) `500.4K 🔥` `NEW`
1. [天价基因疗法药物中国降价140万元](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E4%BB%B7%E5%9F%BA%E5%9B%A0%E7%96%97%E6%B3%95%E8%8D%AF%E7%89%A9%E4%B8%AD%E5%9B%BD%E9%99%8D%E4%BB%B7140%E4%B8%87%E5%85%83%23) `496.3K 🔥` `NEW`
1. [华为展翼三折叠左右都行](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%B1%95%E7%BF%BC%E4%B8%89%E6%8A%98%E5%8F%A0%E5%B7%A6%E5%8F%B3%E9%83%BD%E8%A1%8C%23) `493.2K 🔥` `NEW`
1. [井柏然孙千花絮比正片还甜](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E8%8A%B1%E7%B5%AE%E6%AF%94%E6%AD%A3%E7%89%87%E8%BF%98%E7%94%9C%23) `492.3K 🔥` `NEW`
1. [刘翔工资卡11年0支出](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%B7%A5%E8%B5%84%E5%8D%A111%E5%B9%B40%E6%94%AF%E5%87%BA%23) `490.2K 🔥` `NEW`
1. [日本暴发梅毒疫情](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%9A%B4%E5%8F%91%E6%A2%85%E6%AF%92%E7%96%AB%E6%83%85%23) `487.1K 🔥` `NEW`
1. [疑迪丽热巴回应恋情传闻](https://s.weibo.com/weibo?q=%23%E7%96%91%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9B%9E%E5%BA%94%E6%81%8B%E6%83%85%E4%BC%A0%E9%97%BB%23) `484.4K 🔥` `NEW`
1. [演员王新昉离世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%8E%8B%E6%96%B0%E6%98%89%E7%A6%BB%E4%B8%96%23) `481.0K 🔥` `NEW`
1. [iPhone17涨价](https://s.weibo.com/weibo?q=%23iPhone17%E6%B6%A8%E4%BB%B7%23) `478.5K 🔥` `NEW`
1. [三星嘲讽苹果iPhoneDuo](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%98%B2%E8%AE%BD%E8%8B%B9%E6%9E%9CiPhoneDuo%23) `473.3K 🔥` `NEW`
1. [vivoX500系列首曝](https://s.weibo.com/weibo?q=%23vivoX500%E7%B3%BB%E5%88%97%E9%A6%96%E6%9B%9D%23) `472.2K 🔥` `NEW`
1. [苹果折叠屏](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%8A%98%E5%8F%A0%E5%B1%8F%23) `469.7K 🔥` `NEW`
1. [车间裸奔事件不能到不是宁德就结束了](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E9%97%B4%E8%A3%B8%E5%A5%94%E4%BA%8B%E4%BB%B6%E4%B8%8D%E8%83%BD%E5%88%B0%E4%B8%8D%E6%98%AF%E5%AE%81%E5%BE%B7%E5%B0%B1%E7%BB%93%E6%9D%9F%E4%BA%86%23) `466.1K 🔥` `NEW`
1. [宇树科技跌破500元](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E8%B7%8C%E7%A0%B4500%E5%85%83%23) `465.2K 🔥` `NEW`
1. [贾乃亮说直播带货门槛比拍戏高](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE%E8%AF%B4%E7%9B%B4%E6%92%AD%E5%B8%A6%E8%B4%A7%E9%97%A8%E6%A7%9B%E6%AF%94%E6%8B%8D%E6%88%8F%E9%AB%98%23) `461.0K 🔥` `NEW`
1. [陆贞传奇剧组是有圆脸KPI吗](https://s.weibo.com/weibo?q=%23%E9%99%86%E8%B4%9E%E4%BC%A0%E5%A5%87%E5%89%A7%E7%BB%84%E6%98%AF%E6%9C%89%E5%9C%86%E8%84%B8KPI%E5%90%97%23) `460.7K 🔥` `NEW`
1. [刘翔安置制度被指不公](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%AE%89%E7%BD%AE%E5%88%B6%E5%BA%A6%E8%A2%AB%E6%8C%87%E4%B8%8D%E5%85%AC%23) `456.5K 🔥` `NEW`
1. [iPhone首款折叠屏天猫新品发布](https://s.weibo.com/weibo?q=%23iPhone%E9%A6%96%E6%AC%BE%E6%8A%98%E5%8F%A0%E5%B1%8F%E5%A4%A9%E7%8C%AB%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%23) `455.3K 🔥` `NEW`
1. [天才小熊猫又来总结苹果发布会了](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E5%B0%8F%E7%86%8A%E7%8C%AB%E5%8F%88%E6%9D%A5%E6%80%BB%E7%BB%93%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%E4%BA%86%23) `453.0K 🔥` `NEW`
1. [花少第一期你怎么看](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E7%AC%AC%E4%B8%80%E6%9C%9F%E4%BD%A0%E6%80%8E%E4%B9%88%E7%9C%8B%23) `449.4K 🔥` `NEW`
1. [你不说是杨洋还以为是时代峰峻](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B8%8D%E8%AF%B4%E6%98%AF%E6%9D%A8%E6%B4%8B%E8%BF%98%E4%BB%A5%E4%B8%BA%E6%98%AF%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%23) `446.2K 🔥` `NEW`
1. [三大运营商回应iPhoneDuo仅支持eSIM](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%A7%E8%BF%90%E8%90%A5%E5%95%86%E5%9B%9E%E5%BA%94iPhoneDuo%E4%BB%85%E6%94%AF%E6%8C%81eSIM%23) `443.9K 🔥` `NEW`
1. [栾念给卢克办了5000块的洗澡卡](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E7%BB%99%E5%8D%A2%E5%85%8B%E5%8A%9E%E4%BA%865000%E5%9D%97%E7%9A%84%E6%B4%97%E6%BE%A1%E5%8D%A1%23) `442.6K 🔥` `NEW`
1. [关晓彤新剧鸟屎炸鸡该怎么吃](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%96%B0%E5%89%A7%E9%B8%9F%E5%B1%8E%E7%82%B8%E9%B8%A1%E8%AF%A5%E6%80%8E%E4%B9%88%E5%90%83%23) `440.3K 🔥` `NEW`
1. [高德扫街榜创吉尼斯世界纪录](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%BE%B7%E6%89%AB%E8%A1%97%E6%A6%9C%E5%88%9B%E5%90%89%E5%B0%BC%E6%96%AF%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `437.0K 🔥` `NEW`
1. [2026外滩大会](https://s.weibo.com/weibo?q=%232026%E5%A4%96%E6%BB%A9%E5%A4%A7%E4%BC%9A%23) `434.0K 🔥` `NEW`
1. [iPhone 非AI生成认证](https://s.weibo.com/weibo?q=%23iPhone%20%E9%9D%9EAI%E7%94%9F%E6%88%90%E8%AE%A4%E8%AF%81%23) `433.3K 🔥` `NEW`
1. [警方通报鲜花饼吐痰事件](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E9%B2%9C%E8%8A%B1%E9%A5%BC%E5%90%90%E7%97%B0%E4%BA%8B%E4%BB%B6%23) `426.6K 🔥` `NEW`
1. [刘恋想问早春晴朗作者自己是不是原型](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%8B%E6%83%B3%E9%97%AE%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E4%BD%9C%E8%80%85%E8%87%AA%E5%B7%B1%E6%98%AF%E4%B8%8D%E6%98%AF%E5%8E%9F%E5%9E%8B%23) `475.5K 🔥`
1. [教师节](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E8%8A%82%23) `529.4K 🔥` `-62%`
1. [iPhone18Pro价格](https://s.weibo.com/weibo?q=%23iPhone18Pro%E4%BB%B7%E6%A0%BC%23) `499.2K 🔥` `-97%`

Updated at 2026-09-10 13:12:15

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
