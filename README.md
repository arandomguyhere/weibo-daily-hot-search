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

1. [新华社追问国乒男队怎么了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8D%8E%E7%A4%BE%E8%BF%BD%E9%97%AE%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E6%80%8E%E4%B9%88%E4%BA%86%23) `175.5K 🔥` `NEW`
1. [青稚白小纯对摄影师发火](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%AF%B9%E6%91%84%E5%BD%B1%E5%B8%88%E5%8F%91%E7%81%AB%23) `57.3K 🔥` `NEW`
1. [在乌镇峰会提前体验未来](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B9%8C%E9%95%87%E5%B3%B0%E4%BC%9A%E6%8F%90%E5%89%8D%E4%BD%93%E9%AA%8C%E6%9C%AA%E6%9D%A5%23) `57.1K 🔥` `NEW`
1. [超20万人看了一场假乒乓球比赛](https://s.weibo.com/weibo?q=%23%E8%B6%8520%E4%B8%87%E4%BA%BA%E7%9C%8B%E4%BA%86%E4%B8%80%E5%9C%BA%E5%81%87%E4%B9%92%E4%B9%93%E7%90%83%E6%AF%94%E8%B5%9B%23) `56.9K 🔥` `NEW`
1. [嫁金钗](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%23) `56.6K 🔥` `NEW`
1. [蔡文静父亲全程偏袒无血缘的孙子](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E7%88%B6%E4%BA%B2%E5%85%A8%E7%A8%8B%E5%81%8F%E8%A2%92%E6%97%A0%E8%A1%80%E7%BC%98%E7%9A%84%E5%AD%99%E5%AD%90%23) `56.3K 🔥` `NEW`
1. [马天宇仅互关评论后的杨幂](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%BB%85%E4%BA%92%E5%85%B3%E8%AF%84%E8%AE%BA%E5%90%8E%E7%9A%84%E6%9D%A8%E5%B9%82%23) `55.8K 🔥` `NEW`
1. [鲍蕾娱乐圈理财顶级天花板](https://s.weibo.com/weibo?q=%23%E9%B2%8D%E8%95%BE%E5%A8%B1%E4%B9%90%E5%9C%88%E7%90%86%E8%B4%A2%E9%A1%B6%E7%BA%A7%E5%A4%A9%E8%8A%B1%E6%9D%BF%23) `55.4K 🔥` `NEW`
1. [红果短剧刷到天亮](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%88%B7%E5%88%B0%E5%A4%A9%E4%BA%AE%23) `55.2K 🔥` `NEW`
1. [2027或是最舒服年](https://s.weibo.com/weibo?q=%232027%E6%88%96%E6%98%AF%E6%9C%80%E8%88%92%E6%9C%8D%E5%B9%B4%23) `54.8K 🔥` `NEW`
1. [张雪重庆大学开价被学生嫌弃](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%E5%BC%80%E4%BB%B7%E8%A2%AB%E5%AD%A6%E7%94%9F%E5%AB%8C%E5%BC%83%23) `54.5K 🔥` `NEW`
1. [瑞幸新联名放真人被吐槽](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E6%96%B0%E8%81%94%E5%90%8D%E6%94%BE%E7%9C%9F%E4%BA%BA%E8%A2%AB%E5%90%90%E6%A7%BD%23) `54.3K 🔥` `NEW`
1. [长沙烈士公园穿和服带武士刀拍照](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E7%83%88%E5%A3%AB%E5%85%AC%E5%9B%AD%E7%A9%BF%E5%92%8C%E6%9C%8D%E5%B8%A6%E6%AD%A6%E5%A3%AB%E5%88%80%E6%8B%8D%E7%85%A7%23) `53.7K 🔥` `NEW`
1. [唐宣宗被谋弑添新证](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%A3%E5%AE%97%E8%A2%AB%E8%B0%8B%E5%BC%91%E6%B7%BB%E6%96%B0%E8%AF%81%23) `53.7K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `53.2K 🔥` `NEW`
1. [文吉儿王子璇 诡异](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E7%8E%8B%E5%AD%90%E7%92%87%20%E8%AF%A1%E5%BC%82%23) `52.8K 🔥` `NEW`
1. [许飞吴昕十点出发十点醒](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%90%B4%E6%98%95%E5%8D%81%E7%82%B9%E5%87%BA%E5%8F%91%E5%8D%81%E7%82%B9%E9%86%92%23) `52.6K 🔥` `NEW`
1. [Jennie与男伴亲密贴脸](https://s.weibo.com/weibo?q=%23Jennie%E4%B8%8E%E7%94%B7%E4%BC%B4%E4%BA%B2%E5%AF%86%E8%B4%B4%E8%84%B8%23) `52.3K 🔥` `NEW`
1. [玉簟秋](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8B%23) `51.5K 🔥` `NEW`
1. [后会友期提名](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%8F%90%E5%90%8D%23) `51.4K 🔥` `NEW`
1. [蔡文静全家没人在乎她的感受](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%85%A8%E5%AE%B6%E6%B2%A1%E4%BA%BA%E5%9C%A8%E4%B9%8E%E5%A5%B9%E7%9A%84%E6%84%9F%E5%8F%97%23) `50.7K 🔥` `NEW`
1. [后会友期导演回应](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E5%AF%BC%E6%BC%94%E5%9B%9E%E5%BA%94%23) `50.4K 🔥` `NEW`
1. [8岁女孩课间被同学冲撞至脑死亡](https://s.weibo.com/weibo?q=%238%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%AF%BE%E9%97%B4%E8%A2%AB%E5%90%8C%E5%AD%A6%E5%86%B2%E6%92%9E%E8%87%B3%E8%84%91%E6%AD%BB%E4%BA%A1%23) `50.1K 🔥` `NEW`
1. [芒果 我涨停了厉娜](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%20%E6%88%91%E6%B6%A8%E5%81%9C%E4%BA%86%E5%8E%89%E5%A8%9C%23) `48.7K 🔥` `NEW`
1. [日本网友称中文晕碳太厉害](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E7%A7%B0%E4%B8%AD%E6%96%87%E6%99%95%E7%A2%B3%E5%A4%AA%E5%8E%89%E5%AE%B3%23) `47.2K 🔥` `NEW`
1. [荆轲刺秦王监控视频](https://s.weibo.com/weibo?q=%23%E8%8D%86%E8%BD%B2%E5%88%BA%E7%A7%A6%E7%8E%8B%E7%9B%91%E6%8E%A7%E8%A7%86%E9%A2%91%23) `47.2K 🔥` `NEW`
1. [白小纯回头看](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%9B%9E%E5%A4%B4%E7%9C%8B%23) `47.2K 🔥` `NEW`
1. [田田小阿姨曾盗用素人照片](https://s.weibo.com/weibo?q=%23%E7%94%B0%E7%94%B0%E5%B0%8F%E9%98%BF%E5%A7%A8%E6%9B%BE%E7%9B%97%E7%94%A8%E7%B4%A0%E4%BA%BA%E7%85%A7%E7%89%87%23) `47.2K 🔥` `NEW`
1. [黄金突然上涨了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%AA%81%E7%84%B6%E4%B8%8A%E6%B6%A8%E4%BA%86%23) `47.2K 🔥` `NEW`
1. [今年WTT高级别赛事国乒男单仅1冠](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4WTT%E9%AB%98%E7%BA%A7%E5%88%AB%E8%B5%9B%E4%BA%8B%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E4%BB%851%E5%86%A0%23) `47.2K 🔥` `NEW`
1. [解决问题的心态](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E5%86%B3%E9%97%AE%E9%A2%98%E7%9A%84%E5%BF%83%E6%80%81%23) `47.1K 🔥` `NEW`
1. [许飞画地为牢打卡点找到了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E6%89%93%E5%8D%A1%E7%82%B9%E6%89%BE%E5%88%B0%E4%BA%86%23) `47.1K 🔥` `NEW`
1. [后会友期结局](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%BB%93%E5%B1%80%23) `47.1K 🔥` `NEW`
1. [青稚才是最适合去花少2分房的人](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E6%89%8D%E6%98%AF%E6%9C%80%E9%80%82%E5%90%88%E5%8E%BB%E8%8A%B1%E5%B0%912%E5%88%86%E6%88%BF%E7%9A%84%E4%BA%BA%23) `47.1K 🔥` `NEW`
1. [樊振东2年没打WTT仍居第二](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C2%E5%B9%B4%E6%B2%A1%E6%89%93WTT%E4%BB%8D%E5%B1%85%E7%AC%AC%E4%BA%8C%23) `47.1K 🔥` `NEW`
1. [瓶子解说言论涉及JDG与AG](https://s.weibo.com/weibo?q=%23%E7%93%B6%E5%AD%90%E8%A7%A3%E8%AF%B4%E8%A8%80%E8%AE%BA%E6%B6%89%E5%8F%8AJDG%E4%B8%8EAG%23) `47.0K 🔥` `NEW`
1. [抖音副总裁李亮回应被秦朔起诉](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E5%89%AF%E6%80%BB%E8%A3%81%E6%9D%8E%E4%BA%AE%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%A7%A6%E6%9C%94%E8%B5%B7%E8%AF%89%23) `47.0K 🔥` `NEW`
1. [阚清子瘦到98斤了](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E7%98%A6%E5%88%B098%E6%96%A4%E4%BA%86%23) `47.0K 🔥` `NEW`
1. [有些菜到了一定年纪就自动解锁了](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%9B%E8%8F%9C%E5%88%B0%E4%BA%86%E4%B8%80%E5%AE%9A%E5%B9%B4%E7%BA%AA%E5%B0%B1%E8%87%AA%E5%8A%A8%E8%A7%A3%E9%94%81%E4%BA%86%23) `47.0K 🔥` `NEW`
1. [中年人的三件套你总得占一样](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B9%B4%E4%BA%BA%E7%9A%84%E4%B8%89%E4%BB%B6%E5%A5%97%E4%BD%A0%E6%80%BB%E5%BE%97%E5%8D%A0%E4%B8%80%E6%A0%B7%23) `47.0K 🔥` `NEW`
1. [王一博官宣加盟雪邦站](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%AE%98%E5%AE%A3%E5%8A%A0%E7%9B%9F%E9%9B%AA%E9%82%A6%E7%AB%99%23) `46.9K 🔥` `NEW`
1. [耳帝说厉娜太呆萌可爱了](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E8%AF%B4%E5%8E%89%E5%A8%9C%E5%A4%AA%E5%91%86%E8%90%8C%E5%8F%AF%E7%88%B1%E4%BA%86%23) `46.9K 🔥` `NEW`
1. [新娘退场摔倒新郎还在沉浸式撒娃娃](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E9%80%80%E5%9C%BA%E6%91%94%E5%80%92%E6%96%B0%E9%83%8E%E8%BF%98%E5%9C%A8%E6%B2%89%E6%B5%B8%E5%BC%8F%E6%92%92%E5%A8%83%E5%A8%83%23) `46.9K 🔥` `NEW`
1. [宋仲基3岁儿子都这么大了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BB%B2%E5%9F%BA3%E5%B2%81%E5%84%BF%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `46.9K 🔥` `NEW`
1. [喜欢买黄金的人天塌了](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E4%B9%B0%E9%BB%84%E9%87%91%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `46.8K 🔥` `NEW`
1. [广东人说的牡丹楼不是麦当劳](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%BA%BA%E8%AF%B4%E7%9A%84%E7%89%A1%E4%B8%B9%E6%A5%BC%E4%B8%8D%E6%98%AF%E9%BA%A6%E5%BD%93%E5%8A%B3%23) `46.8K 🔥` `NEW`
1. [迪丽热巴黄明昊 从前有只鲸](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%BB%84%E6%98%8E%E6%98%8A%20%E4%BB%8E%E5%89%8D%E6%9C%89%E5%8F%AA%E9%B2%B8%23) `46.8K 🔥` `NEW`
1. [护盘式回购](https://s.weibo.com/weibo?q=%23%E6%8A%A4%E7%9B%98%E5%BC%8F%E5%9B%9E%E8%B4%AD%23) `46.8K 🔥` `NEW`
1. [被焦虑困住时该怎么调节](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%84%A6%E8%99%91%E5%9B%B0%E4%BD%8F%E6%97%B6%E8%AF%A5%E6%80%8E%E4%B9%88%E8%B0%83%E8%8A%82%23) `46.8K 🔥` `NEW`

Updated at 2026-11-03 03:48:16

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
