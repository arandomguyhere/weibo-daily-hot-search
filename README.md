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

1. [甘孜通报稻城亚丁景区违规封堵省道 (Ganzi notified Daocheng Yading Scenic Area of ​​illegally blocking provincial roads)](https://s.weibo.com/weibo?q=%23%E7%94%98%E5%AD%9C%E9%80%9A%E6%8A%A5%E7%A8%BB%E5%9F%8E%E4%BA%9A%E4%B8%81%E6%99%AF%E5%8C%BA%E8%BF%9D%E8%A7%84%E5%B0%81%E5%A0%B5%E7%9C%81%E9%81%93%23) `966.6K 🔥` `NEW`
1. [翘楚定档](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E5%AE%9A%E6%A1%A3%23) `771.4K 🔥` `NEW`
1. [三夏大规模小麦机收全面展开](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%8F%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%B0%8F%E9%BA%A6%E6%9C%BA%E6%94%B6%E5%85%A8%E9%9D%A2%E5%B1%95%E5%BC%80%23) `682.1K 🔥` `NEW`
1. [比亚迪为城市领航及智能泊车兜底](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E4%B8%BA%E5%9F%8E%E5%B8%82%E9%A2%86%E8%88%AA%E5%8F%8A%E6%99%BA%E8%83%BD%E6%B3%8A%E8%BD%A6%E5%85%9C%E5%BA%95%23) `646.6K 🔥` `NEW`
1. [同一个人的早上和晚上区别有多大](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E6%97%A9%E4%B8%8A%E5%92%8C%E6%99%9A%E4%B8%8A%E5%8C%BA%E5%88%AB%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `622.9K 🔥` `NEW`
1. [姜乘澜眼镜妆](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E7%9C%BC%E9%95%9C%E5%A6%86%23) `605.0K 🔥` `NEW`
1. [小巷人家2剧情](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%E5%89%A7%E6%83%85%23) `470.9K 🔥` `NEW`
1. [全新吉利星愿上市6.18万起](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%90%89%E5%88%A9%E6%98%9F%E6%84%BF%E4%B8%8A%E5%B8%826.18%E4%B8%87%E8%B5%B7%23) `450.8K 🔥` `NEW`
1. [解放军驱离荷兰军机现场画面](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E9%A9%B1%E7%A6%BB%E8%8D%B7%E5%85%B0%E5%86%9B%E6%9C%BA%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `446.0K 🔥` `NEW`
1. [杨紫白玉兰切片换了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E5%88%87%E7%89%87%E6%8D%A2%E4%BA%86%23) `411.5K 🔥` `NEW`
1. [多国博主都曾在富士山下便利店跳舞 (Bloggers from many countries have danced at the convenience store under Mount Fuji)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E5%8D%9A%E4%B8%BB%E9%83%BD%E6%9B%BE%E5%9C%A8%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B%E4%BE%BF%E5%88%A9%E5%BA%97%E8%B7%B3%E8%88%9E%23) `408.7K 🔥` `NEW`
1. [古德温绝杀](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%BE%B7%E6%B8%A9%E7%BB%9D%E6%9D%80%23) `405.3K 🔥` `NEW`
1. [张子枫是严浩翔答辩老师](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E6%98%AF%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%AD%94%E8%BE%A9%E8%80%81%E5%B8%88%23) `400.9K 🔥` `NEW`
1. [陈妍希晒断掉的骨头](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%99%92%E6%96%AD%E6%8E%89%E7%9A%84%E9%AA%A8%E5%A4%B4%23) `393.6K 🔥` `NEW`
1. [双汇的傲慢比抗生素超标更可怕](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E6%B1%87%E7%9A%84%E5%82%B2%E6%85%A2%E6%AF%94%E6%8A%97%E7%94%9F%E7%B4%A0%E8%B6%85%E6%A0%87%E6%9B%B4%E5%8F%AF%E6%80%95%23) `387.9K 🔥` `NEW`
1. [柳智敏腿型](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E8%85%BF%E5%9E%8B%23) `382.2K 🔥` `NEW`
1. [第一次对宋亚轩的身高有了实感](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%9A%84%E8%BA%AB%E9%AB%98%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `381.1K 🔥` `NEW`
1. [高校教职工生日蛋糕预算66万](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E6%95%99%E8%81%8C%E5%B7%A5%E7%94%9F%E6%97%A5%E8%9B%8B%E7%B3%95%E9%A2%84%E7%AE%9766%E4%B8%87%23) `319.2K 🔥` `NEW`
1. [欧阳娣娣晒与严浩翔合照](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%A3%E5%A8%A3%E6%99%92%E4%B8%8E%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%90%88%E7%85%A7%23) `319.0K 🔥` `NEW`
1. [Angelababy 马甲线](https://s.weibo.com/weibo?q=%23Angelababy%20%E9%A9%AC%E7%94%B2%E7%BA%BF%23) `318.7K 🔥` `NEW`
1. [男子遭妻子家暴跳楼身亡细节公开 (Details of man who jumped from building to death after being violently raped by his wife are revealed)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%81%AD%E5%A6%BB%E5%AD%90%E5%AE%B6%E6%9A%B4%E8%B7%B3%E6%A5%BC%E8%BA%AB%E4%BA%A1%E7%BB%86%E8%8A%82%E5%85%AC%E5%BC%80%23) `314.8K 🔥` `NEW`
1. [广东90后女生用AI接了400万大单](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C90%E5%90%8E%E5%A5%B3%E7%94%9F%E7%94%A8AI%E6%8E%A5%E4%BA%86400%E4%B8%87%E5%A4%A7%E5%8D%95%23) `308.9K 🔥` `NEW`
1. [曝Jennie和内娱顶流谈过恋爱](https://s.weibo.com/weibo?q=%23%E6%9B%9DJennie%E5%92%8C%E5%86%85%E5%A8%B1%E9%A1%B6%E6%B5%81%E8%B0%88%E8%BF%87%E6%81%8B%E7%88%B1%23) `308.4K 🔥` `NEW`
1. [曝景甜降价出售上海豪宅](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%99%AF%E7%94%9C%E9%99%8D%E4%BB%B7%E5%87%BA%E5%94%AE%E4%B8%8A%E6%B5%B7%E8%B1%AA%E5%AE%85%23) `308.4K 🔥` `NEW`
1. [印度 空调外机](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%20%E7%A9%BA%E8%B0%83%E5%A4%96%E6%9C%BA%23) `307.5K 🔥` `NEW`
1. [刘恺威 李晓峰](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%BA%E5%A8%81%20%E6%9D%8E%E6%99%93%E5%B3%B0%23) `306.9K 🔥` `NEW`
1. [田曦薇看张凌赫穿大深V的表情](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%9C%8B%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%A9%BF%E5%A4%A7%E6%B7%B1V%E7%9A%84%E8%A1%A8%E6%83%85%23) `284.8K 🔥` `NEW`
1. [贵州大学招聘要求配偶为本校博士](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E5%A4%A7%E5%AD%A6%E6%8B%9B%E8%81%98%E8%A6%81%E6%B1%82%E9%85%8D%E5%81%B6%E4%B8%BA%E6%9C%AC%E6%A0%A1%E5%8D%9A%E5%A3%AB%23) `226.7K 🔥` `NEW`
1. [吴彤你别念了宋亚轩要笑晕了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A4%E4%BD%A0%E5%88%AB%E5%BF%B5%E4%BA%86%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%A6%81%E7%AC%91%E6%99%95%E4%BA%86%23) `223.6K 🔥` `NEW`
1. [金饰价格集体大跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E9%9B%86%E4%BD%93%E5%A4%A7%E8%B7%8C%23) `218.8K 🔥` `NEW`
1. [张函瑞明明cha被下架 (Zhang Hanrui Mingcha was removed from the shelves)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E6%98%8E%E6%98%8Echa%E8%A2%AB%E4%B8%8B%E6%9E%B6%23) `214.1K 🔥` `NEW`
1. [中国自研高算力芯片突破4纳米](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%87%AA%E7%A0%94%E9%AB%98%E7%AE%97%E5%8A%9B%E8%8A%AF%E7%89%87%E7%AA%81%E7%A0%B44%E7%BA%B3%E7%B1%B3%23) `201.2K 🔥` `NEW`
1. [主角好虐](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E5%A5%BD%E8%99%90%23) `199.0K 🔥` `NEW`
1. [辛纳法网爆冷出局](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E7%BA%B3%E6%B3%95%E7%BD%91%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23) `194.5K 🔥` `NEW`
1. [戚薇李承铉儿子都这么大了](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E6%9D%8E%E6%89%BF%E9%93%89%E5%84%BF%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `193.2K 🔥` `NEW`
1. [吴世勋一天来两次微博](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E4%B8%80%E5%A4%A9%E6%9D%A5%E4%B8%A4%E6%AC%A1%E5%BE%AE%E5%8D%9A%23) `174.4K 🔥` `NEW`
1. [女子微信辱骂他人被多人围殴成脑震荡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BE%AE%E4%BF%A1%E8%BE%B1%E9%AA%82%E4%BB%96%E4%BA%BA%E8%A2%AB%E5%A4%9A%E4%BA%BA%E5%9B%B4%E6%AE%B4%E6%88%90%E8%84%91%E9%9C%87%E8%8D%A1%23) `174.2K 🔥` `NEW`
1. [黄磊我也不舒服了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E6%88%91%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `174.2K 🔥` `NEW`
1. [赵今麦王安宇 一念江南](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%8E%8B%E5%AE%89%E5%AE%87%20%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `171.6K 🔥` `NEW`
1. [会说话在工作中很重要](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E8%AF%B4%E8%AF%9D%E5%9C%A8%E5%B7%A5%E4%BD%9C%E4%B8%AD%E5%BE%88%E9%87%8D%E8%A6%81%23) `158.3K 🔥` `NEW`
1. [胡歌李沁吻戏 (Hu Ge and Li Qin kiss scene)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E6%9D%8E%E6%B2%81%E5%90%BB%E6%88%8F%23) `156.2K 🔥` `NEW`
1. [耀眼](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%23) `153.1K 🔥` `NEW`
1. [Keria太夸张了](https://s.weibo.com/weibo?q=%23Keria%E5%A4%AA%E5%A4%B8%E5%BC%A0%E4%BA%86%23) `150.6K 🔥` `NEW`
1. [91岁演员罗兰回应被TVB除名](https://s.weibo.com/weibo?q=%2391%E5%B2%81%E6%BC%94%E5%91%98%E7%BD%97%E5%85%B0%E5%9B%9E%E5%BA%94%E8%A2%ABTVB%E9%99%A4%E5%90%8D%23) `150.3K 🔥` `NEW`
1. [撒贝宁cue樊振东](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81cue%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `129.1K 🔥` `NEW`
1. [杨鹤通 曹云金](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E9%B9%A4%E9%80%9A%20%E6%9B%B9%E4%BA%91%E9%87%91%23) `127.9K 🔥` `NEW`
1. [布朗空砍50分](https://s.weibo.com/weibo?q=%23%E5%B8%83%E6%9C%97%E7%A9%BA%E7%A0%8D50%E5%88%86%23) `125.6K 🔥` `NEW`
1. [终于有人把自卑和敏感形容出来了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E6%8A%8A%E8%87%AA%E5%8D%91%E5%92%8C%E6%95%8F%E6%84%9F%E5%BD%A2%E5%AE%B9%E5%87%BA%E6%9D%A5%E4%BA%86%23) `124.2K 🔥` `NEW`
1. [医生总结防胃癌的方法](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%80%BB%E7%BB%93%E9%98%B2%E8%83%83%E7%99%8C%E7%9A%84%E6%96%B9%E6%B3%95%23) `121.7K 🔥` `NEW`
1. [A股集体大涨原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%9B%86%E4%BD%93%E5%A4%A7%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `120.3K 🔥` `NEW`
1. [周也恋情风波后首更博 (Zhou Ye’s first blog update after his love affair)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E6%81%8B%E6%83%85%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E6%9B%B4%E5%8D%9A%23) `120.3K 🔥` `NEW`

Updated at 2026-05-29 00:21:10

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
