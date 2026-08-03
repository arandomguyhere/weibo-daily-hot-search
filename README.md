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

1. [宗庆后之子出任新公司董事长 (Zong Qinghou’s son becomes chairman of new company)](https://s.weibo.com/weibo?q=%23%E5%AE%97%E5%BA%86%E5%90%8E%E4%B9%8B%E5%AD%90%E5%87%BA%E4%BB%BB%E6%96%B0%E5%85%AC%E5%8F%B8%E8%91%A3%E4%BA%8B%E9%95%BF%23) `1.4M 🔥` `NEW`
1. [173万亿为什么花不出去](https://s.weibo.com/weibo?q=%23173%E4%B8%87%E4%BA%BF%E4%B8%BA%E4%BB%80%E4%B9%88%E8%8A%B1%E4%B8%8D%E5%87%BA%E5%8E%BB%23) `888.6K 🔥` `NEW`
1. [跨越全球的东风长剑](https://s.weibo.com/weibo?q=%23%E8%B7%A8%E8%B6%8A%E5%85%A8%E7%90%83%E7%9A%84%E4%B8%9C%E9%A3%8E%E9%95%BF%E5%89%91%23) `873.5K 🔥` `NEW`
1. [原来自己很少睡过舒服觉](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%87%AA%E5%B7%B1%E5%BE%88%E5%B0%91%E7%9D%A1%E8%BF%87%E8%88%92%E6%9C%8D%E8%A7%89%23) `870.9K 🔥` `NEW`
1. [现在年轻人已经克服异地了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%85%8B%E6%9C%8D%E5%BC%82%E5%9C%B0%E4%BA%86%23) `756.3K 🔥` `NEW`
1. [马嘉祺正数第一懂严浩翔](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%AD%A3%E6%95%B0%E7%AC%AC%E4%B8%80%E6%87%82%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `536.9K 🔥` `NEW`
1. [孙颖莎多处劳损正系统康复](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%9A%E5%A4%84%E5%8A%B3%E6%8D%9F%E6%AD%A3%E7%B3%BB%E7%BB%9F%E5%BA%B7%E5%A4%8D%23) `527.3K 🔥` `NEW`
1. [易烊千玺 打码更糟糕了](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E6%89%93%E7%A0%81%E6%9B%B4%E7%B3%9F%E7%B3%95%E4%BA%86%23) `520.1K 🔥` `NEW`
1. [罗正晒流水回应千万存款](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E6%99%92%E6%B5%81%E6%B0%B4%E5%9B%9E%E5%BA%94%E5%8D%83%E4%B8%87%E5%AD%98%E6%AC%BE%23) `515.3K 🔥` `NEW`
1. [安睡裤广告吐槽女生月经气味大](https://s.weibo.com/weibo?q=%23%E5%AE%89%E7%9D%A1%E8%A3%A4%E5%B9%BF%E5%91%8A%E5%90%90%E6%A7%BD%E5%A5%B3%E7%94%9F%E6%9C%88%E7%BB%8F%E6%B0%94%E5%91%B3%E5%A4%A7%23) `505.4K 🔥` `NEW`
1. [姜潮麦迪娜终于要办婚礼了 (Jiang Chao and Medina are finally going to have a wedding)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E7%BB%88%E4%BA%8E%E8%A6%81%E5%8A%9E%E5%A9%9A%E7%A4%BC%E4%BA%86%23) `499.5K 🔥` `NEW`
1. [霍仙姑 傀儡](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E4%BB%99%E5%A7%91%20%E5%82%80%E5%84%A1%23) `491.7K 🔥` `NEW`
1. [全球大模型进入DeepSeek斩杀区](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%BF%9B%E5%85%A5DeepSeek%E6%96%A9%E6%9D%80%E5%8C%BA%23) `482.5K 🔥` `NEW`
1. [胡锡进谈竹知了被投诉下架](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E8%B0%88%E7%AB%B9%E7%9F%A5%E4%BA%86%E8%A2%AB%E6%8A%95%E8%AF%89%E4%B8%8B%E6%9E%B6%23) `466.1K 🔥` `NEW`
1. [金鹰奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `463.6K 🔥` `NEW`
1. [孔雪儿去哪儿进修的演技](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E5%8E%BB%E5%93%AA%E5%84%BF%E8%BF%9B%E4%BF%AE%E7%9A%84%E6%BC%94%E6%8A%80%23) `454.8K 🔥` `NEW`
1. [中国人心目中天庭的样子在外网爆火](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%BF%83%E7%9B%AE%E4%B8%AD%E5%A4%A9%E5%BA%AD%E7%9A%84%E6%A0%B7%E5%AD%90%E5%9C%A8%E5%A4%96%E7%BD%91%E7%88%86%E7%81%AB%23) `452.3K 🔥` `NEW`
1. [20岁李嫣近照](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E6%9D%8E%E5%AB%A3%E8%BF%91%E7%85%A7%23) `442.4K 🔥` `NEW`
1. [长大后吃西瓜的方式变了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E5%90%83%E8%A5%BF%E7%93%9C%E7%9A%84%E6%96%B9%E5%BC%8F%E5%8F%98%E4%BA%86%23) `417.3K 🔥` `NEW`
1. [店员笑了半小时才拉开帘子吧](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%91%98%E7%AC%91%E4%BA%86%E5%8D%8A%E5%B0%8F%E6%97%B6%E6%89%8D%E6%8B%89%E5%BC%80%E5%B8%98%E5%AD%90%E5%90%A7%23) `350.6K 🔥` `NEW`
1. [网传刺棠海报 (Ci Tang poster posted online)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%88%BA%E6%A3%A0%E6%B5%B7%E6%8A%A5%23) `233.7K 🔥` `NEW`
1. [iPhone被曝最高或涨价超千元](https://s.weibo.com/weibo?q=%23iPhone%E8%A2%AB%E6%9B%9D%E6%9C%80%E9%AB%98%E6%88%96%E6%B6%A8%E4%BB%B7%E8%B6%85%E5%8D%83%E5%85%83%23) `232.9K 🔥` `NEW`
1. [美国制裁洽洽瓜子思念水饺](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%88%B6%E8%A3%81%E6%B4%BD%E6%B4%BD%E7%93%9C%E5%AD%90%E6%80%9D%E5%BF%B5%E6%B0%B4%E9%A5%BA%23) `232.4K 🔥` `NEW`
1. [新冠检测阳性率超20%连续数周上升](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%86%A0%E6%A3%80%E6%B5%8B%E9%98%B3%E6%80%A7%E7%8E%87%E8%B6%8520%25%E8%BF%9E%E7%BB%AD%E6%95%B0%E5%91%A8%E4%B8%8A%E5%8D%87%23) `231.6K 🔥` `NEW`
1. [单亲妈妈扛沙养家 儿子给同学买榴莲](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%88%E6%89%9B%E6%B2%99%E5%85%BB%E5%AE%B6%20%E5%84%BF%E5%AD%90%E7%BB%99%E5%90%8C%E5%AD%A6%E4%B9%B0%E6%A6%B4%E8%8E%B2%23) `230.6K 🔥` `NEW`
1. [涉事抗生素牛蛙已下架](https://s.weibo.com/weibo?q=%23%E6%B6%89%E4%BA%8B%E6%8A%97%E7%94%9F%E7%B4%A0%E7%89%9B%E8%9B%99%E5%B7%B2%E4%B8%8B%E6%9E%B6%23) `229.8K 🔥` `NEW`
1. [罗正被扒太入戏亲女演员](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E8%A2%AB%E6%89%92%E5%A4%AA%E5%85%A5%E6%88%8F%E4%BA%B2%E5%A5%B3%E6%BC%94%E5%91%98%23) `228.8K 🔥` `NEW`
1. [谢贤去世后谢婷婷晒一家与亲友聚会照](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%8E%BB%E4%B8%96%E5%90%8E%E8%B0%A2%E5%A9%B7%E5%A9%B7%E6%99%92%E4%B8%80%E5%AE%B6%E4%B8%8E%E4%BA%B2%E5%8F%8B%E8%81%9A%E4%BC%9A%E7%85%A7%23) `228.5K 🔥` `NEW`
1. [大冰公开恋情](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E5%85%AC%E5%BC%80%E6%81%8B%E6%83%85%23) `227.2K 🔥` `NEW`
1. [装修最后悔的是哪件事](https://s.weibo.com/weibo?q=%23%E8%A3%85%E4%BF%AE%E6%9C%80%E5%90%8E%E6%82%94%E7%9A%84%E6%98%AF%E5%93%AA%E4%BB%B6%E4%BA%8B%23) `226.1K 🔥` `NEW`
1. [迪丽热巴你听听我的心慌不慌 (Dilireba, please listen to my panic.)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BD%A0%E5%90%AC%E5%90%AC%E6%88%91%E7%9A%84%E5%BF%83%E6%85%8C%E4%B8%8D%E6%85%8C%23) `225.5K 🔥` `NEW`
1. [领导学会AI后我工作量翻倍了](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%AF%BC%E5%AD%A6%E4%BC%9AAI%E5%90%8E%E6%88%91%E5%B7%A5%E4%BD%9C%E9%87%8F%E7%BF%BB%E5%80%8D%E4%BA%86%23) `224.8K 🔥` `NEW`
1. [红米新一代国屏之光](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E7%B1%B3%E6%96%B0%E4%B8%80%E4%BB%A3%E5%9B%BD%E5%B1%8F%E4%B9%8B%E5%85%89%23) `223.4K 🔥` `NEW`
1. [第一次见这样的李兰迪](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E8%BF%99%E6%A0%B7%E7%9A%84%E6%9D%8E%E5%85%B0%E8%BF%AA%23) `222.9K 🔥` `NEW`
1. [台风白海豚已露全脸](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%B7%B2%E9%9C%B2%E5%85%A8%E8%84%B8%23) `221.2K 🔥` `NEW`
1. [A股半导体多股大跌](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%A4%9A%E8%82%A1%E5%A4%A7%E8%B7%8C%23) `221.1K 🔥` `NEW`
1. [中国女博士采访诺兰火爆外网](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%8D%9A%E5%A3%AB%E9%87%87%E8%AE%BF%E8%AF%BA%E5%85%B0%E7%81%AB%E7%88%86%E5%A4%96%E7%BD%91%23) `214.4K 🔥` `NEW`
1. [普通人去漫展才是误闯天家](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E5%8E%BB%E6%BC%AB%E5%B1%95%E6%89%8D%E6%98%AF%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%23) `210.2K 🔥` `NEW`
1. [柳智敏音乐节状态](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E9%9F%B3%E4%B9%90%E8%8A%82%E7%8A%B6%E6%80%81%23) `209.5K 🔥` `NEW`
1. [心动9男嘉宾围着一个人转](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A89%E7%94%B7%E5%98%89%E5%AE%BE%E5%9B%B4%E7%9D%80%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%BD%AC%23) `206.9K 🔥` `NEW`
1. [闺蜜合伙开咖啡7个月亏光80万 (Best friends jointly opened a coffee shop and lost 800,000 yuan in 7 months)](https://s.weibo.com/weibo?q=%23%E9%97%BA%E8%9C%9C%E5%90%88%E4%BC%99%E5%BC%80%E5%92%96%E5%95%A17%E4%B8%AA%E6%9C%88%E4%BA%8F%E5%85%8980%E4%B8%87%23) `203.2K 🔥` `NEW`
1. [舒淇说跟冯德伦历任女友都很熟](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E8%AF%B4%E8%B7%9F%E5%86%AF%E5%BE%B7%E4%BC%A6%E5%8E%86%E4%BB%BB%E5%A5%B3%E5%8F%8B%E9%83%BD%E5%BE%88%E7%86%9F%23) `202.1K 🔥` `NEW`
1. [男子常吃牛蛙被怪病缠身12年](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B8%B8%E5%90%83%E7%89%9B%E8%9B%99%E8%A2%AB%E6%80%AA%E7%97%85%E7%BC%A0%E8%BA%AB12%E5%B9%B4%23) `200.3K 🔥` `NEW`
1. [韩国股市逾百万账户爆仓](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E5%B8%82%E9%80%BE%E7%99%BE%E4%B8%87%E8%B4%A6%E6%88%B7%E7%88%86%E4%BB%93%23) `488.0K 🔥` `+81%`
1. [豆包简直是压力全吃之人](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%AE%80%E7%9B%B4%E6%98%AF%E5%8E%8B%E5%8A%9B%E5%85%A8%E5%90%83%E4%B9%8B%E4%BA%BA%23) `796.4K 🔥`
1. [内娱居然还有这么多积压的剧](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%B1%85%E7%84%B6%E8%BF%98%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E7%A7%AF%E5%8E%8B%E7%9A%84%E5%89%A7%23) `537.6K 🔥`
1. [瑞幸对嘴喷奶油员工已开除](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%AF%B9%E5%98%B4%E5%96%B7%E5%A5%B6%E6%B2%B9%E5%91%98%E5%B7%A5%E5%B7%B2%E5%BC%80%E9%99%A4%23) `478.4K 🔥`
1. [曝理想CEO李想将迎来第六娃](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%90%86%E6%83%B3CEO%E6%9D%8E%E6%83%B3%E5%B0%86%E8%BF%8E%E6%9D%A5%E7%AC%AC%E5%85%AD%E5%A8%83%23) `416.9K 🔥`
1. [女儿考上北大 请大家喝水](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%80%83%E4%B8%8A%E5%8C%97%E5%A4%A7%20%E8%AF%B7%E5%A4%A7%E5%AE%B6%E5%96%9D%E6%B0%B4%23) `584.0K 🔥` `-36%`
1. [魏晨让关晓彤实现高跟鞋自由](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E8%AE%A9%E5%85%B3%E6%99%93%E5%BD%A4%E5%AE%9E%E7%8E%B0%E9%AB%98%E8%B7%9F%E9%9E%8B%E8%87%AA%E7%94%B1%23) `213.3K 🔥` `-63%`

Updated at 2026-08-03 16:21:00

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
