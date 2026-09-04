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

1. [极限挑战 重拍](https://s.weibo.com/weibo?q=%23%E6%9E%81%E9%99%90%E6%8C%91%E6%88%98%20%E9%87%8D%E6%8B%8D%23) `696.3K 🔥` `NEW`
1. [花少2嘉宾干活表](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E5%98%89%E5%AE%BE%E5%B9%B2%E6%B4%BB%E8%A1%A8%23) `604.0K 🔥` `NEW`
1. [把青春华章写在祖国大地上](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%E5%86%99%E5%9C%A8%E7%A5%96%E5%9B%BD%E5%A4%A7%E5%9C%B0%E4%B8%8A%23) `570.1K 🔥` `NEW`
1. [2015湖南台综艺有多神](https://s.weibo.com/weibo?q=%232015%E6%B9%96%E5%8D%97%E5%8F%B0%E7%BB%BC%E8%89%BA%E6%9C%89%E5%A4%9A%E7%A5%9E%23) `550.2K 🔥` `NEW`
1. [为什么现在这么流行耳夹式耳机](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E8%BF%99%E4%B9%88%E6%B5%81%E8%A1%8C%E8%80%B3%E5%A4%B9%E5%BC%8F%E8%80%B3%E6%9C%BA%23) `439.8K 🔥` `NEW`
1. [张雪机车法国站排位赛包揽前二](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%B3%95%E5%9B%BD%E7%AB%99%E6%8E%92%E4%BD%8D%E8%B5%9B%E5%8C%85%E6%8F%BD%E5%89%8D%E4%BA%8C%23) `326.2K 🔥` `NEW`
1. [上快手看超级夏晚](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%BF%AB%E6%89%8B%E7%9C%8B%E8%B6%85%E7%BA%A7%E5%A4%8F%E6%99%9A%23) `325.2K 🔥` `NEW`
1. [要你管 难听](https://s.weibo.com/weibo?q=%23%E8%A6%81%E4%BD%A0%E7%AE%A1%20%E9%9A%BE%E5%90%AC%23) `324.6K 🔥` `NEW`
1. [Pro Max命名被吐槽泛滥](https://s.weibo.com/weibo?q=%23Pro%20Max%E5%91%BD%E5%90%8D%E8%A2%AB%E5%90%90%E6%A7%BD%E6%B3%9B%E6%BB%A5%23) `206.9K 🔥` `NEW`
1. [日本请求俄拆纪念碑菊花纹章遭拒](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%AF%B7%E6%B1%82%E4%BF%84%E6%8B%86%E7%BA%AA%E5%BF%B5%E7%A2%91%E8%8F%8A%E8%8A%B1%E7%BA%B9%E7%AB%A0%E9%81%AD%E6%8B%92%23) `181.5K 🔥` `NEW`
1. [莆田暴雨亲历者饿得受不了](https://s.weibo.com/weibo?q=%23%E8%8E%86%E7%94%B0%E6%9A%B4%E9%9B%A8%E4%BA%B2%E5%8E%86%E8%80%85%E9%A5%BF%E5%BE%97%E5%8F%97%E4%B8%8D%E4%BA%86%23) `173.3K 🔥` `NEW`
1. [刘雯评论区](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E8%AF%84%E8%AE%BA%E5%8C%BA%23) `173.3K 🔥` `NEW`
1. [2岁男童把家中百草枯当饮料喝下](https://s.weibo.com/weibo?q=%232%E5%B2%81%E7%94%B7%E7%AB%A5%E6%8A%8A%E5%AE%B6%E4%B8%AD%E7%99%BE%E8%8D%89%E6%9E%AF%E5%BD%93%E9%A5%AE%E6%96%99%E5%96%9D%E4%B8%8B%23) `172.7K 🔥` `NEW`
1. [宁静 谁说小爽坏了](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%20%E8%B0%81%E8%AF%B4%E5%B0%8F%E7%88%BD%E5%9D%8F%E4%BA%86%23) `172.1K 🔥` `NEW`
1. [炎亚纶很想上花少](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E5%BE%88%E6%83%B3%E4%B8%8A%E8%8A%B1%E5%B0%91%23) `171.6K 🔥` `NEW`
1. [王楚钦退赛1000卫冕积分即将清零](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%80%80%E8%B5%9B1000%E5%8D%AB%E5%86%95%E7%A7%AF%E5%88%86%E5%8D%B3%E5%B0%86%E6%B8%85%E9%9B%B6%23) `171.0K 🔥` `NEW`
1. [路人根本没兴趣和耐心回看花少6](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E6%A0%B9%E6%9C%AC%E6%B2%A1%E5%85%B4%E8%B6%A3%E5%92%8C%E8%80%90%E5%BF%83%E5%9B%9E%E7%9C%8B%E8%8A%B1%E5%B0%916%23) `170.2K 🔥` `NEW`
1. [纪姿含北电落榜](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%A7%BF%E5%90%AB%E5%8C%97%E7%94%B5%E8%90%BD%E6%A6%9C%23) `169.8K 🔥` `NEW`
1. [特朗普发文赞赏美国8月非农数据](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91%E6%96%87%E8%B5%9E%E8%B5%8F%E7%BE%8E%E5%9B%BD8%E6%9C%88%E9%9D%9E%E5%86%9C%E6%95%B0%E6%8D%AE%23) `169.1K 🔥` `NEW`
1. [华为何庭波再更新韬定律论文](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%BD%95%E5%BA%AD%E6%B3%A2%E5%86%8D%E6%9B%B4%E6%96%B0%E9%9F%AC%E5%AE%9A%E5%BE%8B%E8%AE%BA%E6%96%87%23) `169.0K 🔥` `NEW`
1. [28岁的人生应该是什么样呢](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E7%9A%84%E4%BA%BA%E7%94%9F%E5%BA%94%E8%AF%A5%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E5%91%A2%23) `168.5K 🔥` `NEW`
1. [出轨跟纸片人啥关系](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A8%E8%B7%9F%E7%BA%B8%E7%89%87%E4%BA%BA%E5%95%A5%E5%85%B3%E7%B3%BB%23) `167.7K 🔥` `NEW`
1. [将40岁的身体恢复到25岁的方法](https://s.weibo.com/weibo?q=%23%E5%B0%8640%E5%B2%81%E7%9A%84%E8%BA%AB%E4%BD%93%E6%81%A2%E5%A4%8D%E5%88%B025%E5%B2%81%E7%9A%84%E6%96%B9%E6%B3%95%23) `167.0K 🔥` `NEW`
1. [Lisa曝BLACKPINK时期曾隐藏恋爱](https://s.weibo.com/weibo?q=%23Lisa%E6%9B%9DBLACKPINK%E6%97%B6%E6%9C%9F%E6%9B%BE%E9%9A%90%E8%97%8F%E6%81%8B%E7%88%B1%23) `166.5K 🔥` `NEW`
1. [曹骏回应难听](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%9B%9E%E5%BA%94%E9%9A%BE%E5%90%AC%23) `166.2K 🔥` `NEW`
1. [松岛辉空或将登顶世界第一](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E6%88%96%E5%B0%86%E7%99%BB%E9%A1%B6%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23) `165.8K 🔥` `NEW`
1. [王赫野跳舞像赵四](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%B5%AB%E9%87%8E%E8%B7%B3%E8%88%9E%E5%83%8F%E8%B5%B5%E5%9B%9B%23) `162.2K 🔥` `NEW`
1. [同花顺](https://s.weibo.com/weibo?q=%23%E5%90%8C%E8%8A%B1%E9%A1%BA%23) `145.2K 🔥` `NEW`
1. [教育部回应教师不敢管学生](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E6%95%99%E5%B8%88%E4%B8%8D%E6%95%A2%E7%AE%A1%E5%AD%A6%E7%94%9F%23) `142.2K 🔥` `NEW`
1. [尼泊尔900人被困在6个隧道内](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94900%E4%BA%BA%E8%A2%AB%E5%9B%B0%E5%9C%A86%E4%B8%AA%E9%9A%A7%E9%81%93%E5%86%85%23) `141.9K 🔥` `NEW`
1. [莆田被困老人称已断水断粮](https://s.weibo.com/weibo?q=%23%E8%8E%86%E7%94%B0%E8%A2%AB%E5%9B%B0%E8%80%81%E4%BA%BA%E7%A7%B0%E5%B7%B2%E6%96%AD%E6%B0%B4%E6%96%AD%E7%B2%AE%23) `141.6K 🔥` `NEW`
1. [宋雨琦瘦成啥了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%98%A6%E6%88%90%E5%95%A5%E4%BA%86%23) `141.2K 🔥` `NEW`
1. [韩国学校挂明星不挂科学家](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%AD%A6%E6%A0%A1%E6%8C%82%E6%98%8E%E6%98%9F%E4%B8%8D%E6%8C%82%E7%A7%91%E5%AD%A6%E5%AE%B6%23) `141.0K 🔥` `NEW`
1. [曹骏让节目组把训练镜头放出来](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E8%AE%A9%E8%8A%82%E7%9B%AE%E7%BB%84%E6%8A%8A%E8%AE%AD%E7%BB%83%E9%95%9C%E5%A4%B4%E6%94%BE%E5%87%BA%E6%9D%A5%23) `140.6K 🔥` `NEW`
1. [陈若轩淘汰待定](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%8B%A5%E8%BD%A9%E6%B7%98%E6%B1%B0%E5%BE%85%E5%AE%9A%23) `136.7K 🔥` `NEW`
1. [狼队第20次晋级决赛](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E7%AC%AC20%E6%AC%A1%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `133.3K 🔥` `NEW`
1. [杨博文助眠vlog](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E5%8A%A9%E7%9C%A0vlog%23) `130.7K 🔥` `NEW`
1. [本西蒙斯重返NBA](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E8%A5%BF%E8%92%99%E6%96%AF%E9%87%8D%E8%BF%94NBA%23) `127.3K 🔥` `NEW`
1. [金希澈的爱猫希范去世](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%B8%8C%E6%BE%88%E7%9A%84%E7%88%B1%E7%8C%AB%E5%B8%8C%E8%8C%83%E5%8E%BB%E4%B8%96%23) `123.2K 🔥` `NEW`
1. [寿司郎给孩子接小便的家长回应](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%E7%BB%99%E5%AD%A9%E5%AD%90%E6%8E%A5%E5%B0%8F%E4%BE%BF%E7%9A%84%E5%AE%B6%E9%95%BF%E5%9B%9E%E5%BA%94%23) `122.2K 🔥` `NEW`
1. [黄晓明明天爱心基金感谢梓渝](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E6%98%8E%E5%A4%A9%E7%88%B1%E5%BF%83%E5%9F%BA%E9%87%91%E6%84%9F%E8%B0%A2%E6%A2%93%E6%B8%9D%23) `121.3K 🔥` `NEW`
1. [井柏然到杭州了](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%B0%E6%9D%AD%E5%B7%9E%E4%BA%86%23) `121.2K 🔥` `NEW`
1. [栾念盯着前男友照顾尚之桃](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E7%9B%AF%E7%9D%80%E5%89%8D%E7%94%B7%E5%8F%8B%E7%85%A7%E9%A1%BE%E5%B0%9A%E4%B9%8B%E6%A1%83%23) `120.0K 🔥` `NEW`
1. [配型发现非亲生女儿称妈妈常问我死了吗](https://s.weibo.com/weibo?q=%23%E9%85%8D%E5%9E%8B%E5%8F%91%E7%8E%B0%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B3%E5%84%BF%E7%A7%B0%E5%A6%88%E5%A6%88%E5%B8%B8%E9%97%AE%E6%88%91%E6%AD%BB%E4%BA%86%E5%90%97%23) `118.3K 🔥` `NEW`
1. [孙千听到今天星期五的反应](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%90%AC%E5%88%B0%E4%BB%8A%E5%A4%A9%E6%98%9F%E6%9C%9F%E4%BA%94%E7%9A%84%E5%8F%8D%E5%BA%94%23) `113.5K 🔥` `NEW`
1. [网传TF家族新音取消](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0TF%E5%AE%B6%E6%97%8F%E6%96%B0%E9%9F%B3%E5%8F%96%E6%B6%88%23) `112.7K 🔥` `NEW`
1. [狼队冲击进决赛](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%86%B2%E5%87%BB%E8%BF%9B%E5%86%B3%E8%B5%9B%23) `109.5K 🔥` `NEW`
1. [有人想靠复盘花少6洗白](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E6%83%B3%E9%9D%A0%E5%A4%8D%E7%9B%98%E8%8A%B1%E5%B0%916%E6%B4%97%E7%99%BD%23) `106.9K 🔥` `NEW`
1. [陈若轩道歉](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%8B%A5%E8%BD%A9%E9%81%93%E6%AD%89%23) `106.5K 🔥` `NEW`
1. [特朗普称美联储应该降息](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E8%81%94%E5%82%A8%E5%BA%94%E8%AF%A5%E9%99%8D%E6%81%AF%23) `105.7K 🔥` `NEW`
1. [日本东京满街劣质AI广告](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%9C%E4%BA%AC%E6%BB%A1%E8%A1%97%E5%8A%A3%E8%B4%A8AI%E5%B9%BF%E5%91%8A%23) `105.5K 🔥` `NEW`

Updated at 2026-09-05 00:57:14

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
