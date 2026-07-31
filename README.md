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

1. [百花奖 (Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `834.7K 🔥` `NEW`
1. [读懂好感度攀升背后的中国魅力](https://s.weibo.com/weibo?q=%23%E8%AF%BB%E6%87%82%E5%A5%BD%E6%84%9F%E5%BA%A6%E6%94%80%E5%8D%87%E8%83%8C%E5%90%8E%E7%9A%84%E4%B8%AD%E5%9B%BD%E9%AD%85%E5%8A%9B%23) `753.2K 🔥` `NEW`
1. [一直对月薪4千没概念直到换成天](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E5%AF%B9%E6%9C%88%E8%96%AA4%E5%8D%83%E6%B2%A1%E6%A6%82%E5%BF%B5%E7%9B%B4%E5%88%B0%E6%8D%A2%E6%88%90%E5%A4%A9%23) `750.9K 🔥` `NEW`
1. [突然发现朋友月薪五万](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%9C%8B%E5%8F%8B%E6%9C%88%E8%96%AA%E4%BA%94%E4%B8%87%23) `749.2K 🔥` `NEW`
1. [夏日CJ逛展指南](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E6%97%A5CJ%E9%80%9B%E5%B1%95%E6%8C%87%E5%8D%97%23) `547.8K 🔥` `NEW`
1. [油价](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%23) `459.0K 🔥` `NEW`
1. [王楚钦恐怖如斯的核心](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%81%90%E6%80%96%E5%A6%82%E6%96%AF%E7%9A%84%E6%A0%B8%E5%BF%83%23) `428.3K 🔥` `NEW`
1. [电影八仙](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%23) `378.6K 🔥` `NEW`
1. [DeepSeekV4Flash正式版上线](https://s.weibo.com/weibo?q=%23DeepSeekV4Flash%E6%AD%A3%E5%BC%8F%E7%89%88%E4%B8%8A%E7%BA%BF%23) `373.7K 🔥` `NEW`
1. [消防员 劳务派遣](https://s.weibo.com/weibo?q=%23%E6%B6%88%E9%98%B2%E5%91%98%20%E5%8A%B3%E5%8A%A1%E6%B4%BE%E9%81%A3%23) `372.7K 🔥` `NEW`
1. [男子恶意撞死高三学生先后追了3次 (Man maliciously hit and killed a senior high school student and chased him three times)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%81%B6%E6%84%8F%E6%92%9E%E6%AD%BB%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E5%85%88%E5%90%8E%E8%BF%BD%E4%BA%863%E6%AC%A1%23) `364.3K 🔥` `NEW`
1. [虞书欣大腿淤青](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A4%A7%E8%85%BF%E6%B7%A4%E9%9D%92%23) `360.3K 🔥` `NEW`
1. [敖瑞鹏工作室回应接中剧](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%9B%9E%E5%BA%94%E6%8E%A5%E4%B8%AD%E5%89%A7%23) `350.2K 🔥` `NEW`
1. [连云港火灾 消防](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E7%81%AB%E7%81%BE%20%E6%B6%88%E9%98%B2%23) `349.3K 🔥` `NEW`
1. [攒了一年钱买的自行车没骑就走了](https://s.weibo.com/weibo?q=%23%E6%94%92%E4%BA%86%E4%B8%80%E5%B9%B4%E9%92%B1%E4%B9%B0%E7%9A%84%E8%87%AA%E8%A1%8C%E8%BD%A6%E6%B2%A1%E9%AA%91%E5%B0%B1%E8%B5%B0%E4%BA%86%23) `318.3K 🔥` `NEW`
1. [何广智回应恋情](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%B9%BF%E6%99%BA%E5%9B%9E%E5%BA%94%E6%81%8B%E6%83%85%23) `315.7K 🔥` `NEW`
1. [7月A股收官](https://s.weibo.com/weibo?q=%237%E6%9C%88A%E8%82%A1%E6%94%B6%E5%AE%98%23) `246.5K 🔥` `NEW`
1. [发现人是真的不能gap](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%BA%BA%E6%98%AF%E7%9C%9F%E7%9A%84%E4%B8%8D%E8%83%BDgap%23) `219.1K 🔥` `NEW`
1. [老人捡空瓶再灌水卖5元一瓶](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%8D%A1%E7%A9%BA%E7%93%B6%E5%86%8D%E7%81%8C%E6%B0%B4%E5%8D%965%E5%85%83%E4%B8%80%E7%93%B6%23) `217.2K 🔥` `NEW`
1. [赞达亚荷兰弟互画肖像外网爆火](https://s.weibo.com/weibo?q=%23%E8%B5%9E%E8%BE%BE%E4%BA%9A%E8%8D%B7%E5%85%B0%E5%BC%9F%E4%BA%92%E7%94%BB%E8%82%96%E5%83%8F%E5%A4%96%E7%BD%91%E7%88%86%E7%81%AB%23) `210.1K 🔥` `NEW`
1. [郭艾伦告别广州龙狮 (Guo Ailun bids farewell to Guangzhou Dragons and Lions)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E5%91%8A%E5%88%AB%E5%B9%BF%E5%B7%9E%E9%BE%99%E7%8B%AE%23) `179.0K 🔥` `NEW`
1. [Seedance2.5接入豆包专业版](https://s.weibo.com/weibo?q=%23Seedance2.5%E6%8E%A5%E5%85%A5%E8%B1%86%E5%8C%85%E4%B8%93%E4%B8%9A%E7%89%88%23) `178.5K 🔥` `NEW`
1. [挡住刘亦菲的脸展示珠宝](https://s.weibo.com/weibo?q=%23%E6%8C%A1%E4%BD%8F%E5%88%98%E4%BA%A6%E8%8F%B2%E7%9A%84%E8%84%B8%E5%B1%95%E7%A4%BA%E7%8F%A0%E5%AE%9D%23) `176.9K 🔥` `NEW`
1. [老板3千招大学生退孩子万元暑假班](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF3%E5%8D%83%E6%8B%9B%E5%A4%A7%E5%AD%A6%E7%94%9F%E9%80%80%E5%AD%A9%E5%AD%90%E4%B8%87%E5%85%83%E6%9A%91%E5%81%87%E7%8F%AD%23) `176.5K 🔥` `NEW`
1. [一件事坚持了10年会发生什么](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%B6%E4%BA%8B%E5%9D%9A%E6%8C%81%E4%BA%8610%E5%B9%B4%E4%BC%9A%E5%8F%91%E7%94%9F%E4%BB%80%E4%B9%88%23) `174.0K 🔥` `NEW`
1. [宋威龙徒手抓知了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BE%92%E6%89%8B%E6%8A%93%E7%9F%A5%E4%BA%86%23) `162.3K 🔥` `NEW`
1. [十个勤天刚上班vs上班四年](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E5%88%9A%E4%B8%8A%E7%8F%ADvs%E4%B8%8A%E7%8F%AD%E5%9B%9B%E5%B9%B4%23) `160.1K 🔥` `NEW`
1. [男子用私密视频勒索前女友50多次](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%94%A8%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91%E5%8B%92%E7%B4%A2%E5%89%8D%E5%A5%B3%E5%8F%8B50%E5%A4%9A%E6%AC%A1%23) `156.3K 🔥` `NEW`
1. [这一秒过火想要的片头belike](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E6%83%B3%E8%A6%81%E7%9A%84%E7%89%87%E5%A4%B4belike%23) `151.7K 🔥` `NEW`
1. [宋亚轩刘耀文未发布合照](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%88%98%E8%80%80%E6%96%87%E6%9C%AA%E5%8F%91%E5%B8%83%E5%90%88%E7%85%A7%23) `151.0K 🔥` `NEW`
1. [九门开一次门消失一个人 (Once the nine doors open, one person disappears.)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%BC%80%E4%B8%80%E6%AC%A1%E9%97%A8%E6%B6%88%E5%A4%B1%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `150.9K 🔥` `NEW`
1. [杨超越6年后还是心动忙内](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A6%E5%B9%B4%E5%90%8E%E8%BF%98%E6%98%AF%E5%BF%83%E5%8A%A8%E5%BF%99%E5%86%85%23) `150.9K 🔥` `NEW`
1. [连云港母女救援责任认定仍在调查](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E6%AF%8D%E5%A5%B3%E6%95%91%E6%8F%B4%E8%B4%A3%E4%BB%BB%E8%AE%A4%E5%AE%9A%E4%BB%8D%E5%9C%A8%E8%B0%83%E6%9F%A5%23) `150.9K 🔥` `NEW`
1. [当妈妈把欧洲特产蒸了后](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%A6%88%E5%A6%88%E6%8A%8A%E6%AC%A7%E6%B4%B2%E7%89%B9%E4%BA%A7%E8%92%B8%E4%BA%86%E5%90%8E%23) `150.9K 🔥` `NEW`
1. [长鑫员工千万身家锁定三年](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E5%91%98%E5%B7%A5%E5%8D%83%E4%B8%87%E8%BA%AB%E5%AE%B6%E9%94%81%E5%AE%9A%E4%B8%89%E5%B9%B4%23) `145.3K 🔥` `NEW`
1. [宋亚轩舍不得删的照片](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%88%8D%E4%B8%8D%E5%BE%97%E5%88%A0%E7%9A%84%E7%85%A7%E7%89%87%23) `143.7K 🔥` `NEW`
1. [小澈复播状态](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%BE%88%E5%A4%8D%E6%92%AD%E7%8A%B6%E6%80%81%23) `143.6K 🔥` `NEW`
1. [KPL进入闫浩时代](https://s.weibo.com/weibo?q=%23KPL%E8%BF%9B%E5%85%A5%E9%97%AB%E6%B5%A9%E6%97%B6%E4%BB%A3%23) `138.4K 🔥` `NEW`
1. [特斯拉正式引入豆包](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E6%AD%A3%E5%BC%8F%E5%BC%95%E5%85%A5%E8%B1%86%E5%8C%85%23) `136.5K 🔥` `NEW`
1. [C罗晒与16岁儿子肌肉合照](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%99%92%E4%B8%8E16%E5%B2%81%E5%84%BF%E5%AD%90%E8%82%8C%E8%82%89%E5%90%88%E7%85%A7%23) `1.1M 🔥` `+77%`
1. [卫健委回应原配申请销毁婚外胚胎 (Health Commission responds to original wife’s request to destroy extramarital embryos)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E5%9B%9E%E5%BA%94%E5%8E%9F%E9%85%8D%E7%94%B3%E8%AF%B7%E9%94%80%E6%AF%81%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%23) `241.0K 🔥` `+21%`
1. [李晟十日终焉领口带血](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%9F%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%A2%86%E5%8F%A3%E5%B8%A6%E8%A1%80%23) `745.6K 🔥`
1. [唐艺昕张若昀女儿近照](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%BC%A0%E8%8B%A5%E6%98%80%E5%A5%B3%E5%84%BF%E8%BF%91%E7%85%A7%23) `246.2K 🔥` `-44%`
1. [贵州通天河伴漂 擦边](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E9%80%9A%E5%A4%A9%E6%B2%B3%E4%BC%B4%E6%BC%82%20%E6%93%A6%E8%BE%B9%23) `240.5K 🔥` `-30%`
1. [看到请假记录天都塌了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%88%B0%E8%AF%B7%E5%81%87%E8%AE%B0%E5%BD%95%E5%A4%A9%E9%83%BD%E5%A1%8C%E4%BA%86%23) `233.2K 🔥` `-29%`
1. [林大厨让王俊凯不要生气](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%A4%A7%E5%8E%A8%E8%AE%A9%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%8D%E8%A6%81%E7%94%9F%E6%B0%94%23) `179.4K 🔥` `-58%`
1. [三伏天喝啥最补水](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BC%8F%E5%A4%A9%E5%96%9D%E5%95%A5%E6%9C%80%E8%A1%A5%E6%B0%B4%23) `177.5K 🔥` `-27%`
1. [白鹿八月行程图穿高定](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%85%AB%E6%9C%88%E8%A1%8C%E7%A8%8B%E5%9B%BE%E7%A9%BF%E9%AB%98%E5%AE%9A%23) `174.4K 🔥` `-60%`
1. [第一次对薄有了新的认知](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%96%84%E6%9C%89%E4%BA%86%E6%96%B0%E7%9A%84%E8%AE%A4%E7%9F%A5%23) `167.0K 🔥` `-48%`
1. [丈夫与小三试管反怪妻子毁自己孩子 (Husband and mistress blame wife for ruining their child)](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E4%B8%8E%E5%B0%8F%E4%B8%89%E8%AF%95%E7%AE%A1%E5%8F%8D%E6%80%AA%E5%A6%BB%E5%AD%90%E6%AF%81%E8%87%AA%E5%B7%B1%E5%AD%A9%E5%AD%90%23) `135.5K 🔥` `-43%`

Updated at 2026-07-31 16:29:43

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
