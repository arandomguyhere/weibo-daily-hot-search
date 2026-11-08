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

1. [多地中小学延迟到校取消早读](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E4%B8%AD%E5%B0%8F%E5%AD%A6%E5%BB%B6%E8%BF%9F%E5%88%B0%E6%A0%A1%E5%8F%96%E6%B6%88%E6%97%A9%E8%AF%BB%23) `1.2M 🔥` `NEW`
1. [TheShy评分](https://s.weibo.com/weibo?q=%23TheShy%E8%AF%84%E5%88%86%23) `819.7K 🔥` `NEW`
1. [今天第27个中国记者节](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E7%AC%AC27%E4%B8%AA%E4%B8%AD%E5%9B%BD%E8%AE%B0%E8%80%85%E8%8A%82%23) `812.3K 🔥` `NEW`
1. [外国人不理解中国人不用邮件办公](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E4%B8%8D%E7%90%86%E8%A7%A3%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%B8%8D%E7%94%A8%E9%82%AE%E4%BB%B6%E5%8A%9E%E5%85%AC%23) `810.0K 🔥` `NEW`
1. [马天宇 不想再接触人类](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%20%E4%B8%8D%E6%83%B3%E5%86%8D%E6%8E%A5%E8%A7%A6%E4%BA%BA%E7%B1%BB%23) `807.6K 🔥` `NEW`
1. [文吉儿结婚前必须要解决和王子璇的事](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E7%BB%93%E5%A9%9A%E5%89%8D%E5%BF%85%E9%A1%BB%E8%A6%81%E8%A7%A3%E5%86%B3%E5%92%8C%E7%8E%8B%E5%AD%90%E7%92%87%E7%9A%84%E4%BA%8B%23) `761.0K 🔥` `NEW`
1. [Jiaqi评论区](https://s.weibo.com/weibo?q=%23Jiaqi%E8%AF%84%E8%AE%BA%E5%8C%BA%23) `689.9K 🔥` `NEW`
1. [iG队史首次在世界赛BO5不敌韩国队](https://s.weibo.com/weibo?q=%23iG%E9%98%9F%E5%8F%B2%E9%A6%96%E6%AC%A1%E5%9C%A8%E4%B8%96%E7%95%8C%E8%B5%9BBO5%E4%B8%8D%E6%95%8C%E9%9F%A9%E5%9B%BD%E9%98%9F%23) `503.5K 🔥` `NEW`
1. [曝金鸡奖获奖名单](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%87%91%E9%B8%A1%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `503.5K 🔥` `NEW`
1. [青稚删除让他别和白小纯和好的回复](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E5%88%A0%E9%99%A4%E8%AE%A9%E4%BB%96%E5%88%AB%E5%92%8C%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%92%8C%E5%A5%BD%E7%9A%84%E5%9B%9E%E5%A4%8D%23) `503.4K 🔥` `NEW`
1. [小糯米听到刘恺威有新女友的反应](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B3%AF%E7%B1%B3%E5%90%AC%E5%88%B0%E5%88%98%E6%81%BA%E5%A8%81%E6%9C%89%E6%96%B0%E5%A5%B3%E5%8F%8B%E7%9A%84%E5%8F%8D%E5%BA%94%23) `503.3K 🔥` `NEW`
1. [超市给姆巴佩代言饮料贴红牌清库存](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%B8%82%E7%BB%99%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BB%A3%E8%A8%80%E9%A5%AE%E6%96%99%E8%B4%B4%E7%BA%A2%E7%89%8C%E6%B8%85%E5%BA%93%E5%AD%98%23) `502.9K 🔥` `NEW`
1. [青稚前女友](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E5%89%8D%E5%A5%B3%E5%8F%8B%23) `481.5K 🔥` `NEW`
1. [许飞厉娜两个人默契地都没有下车](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%8E%89%E5%A8%9C%E4%B8%A4%E4%B8%AA%E4%BA%BA%E9%BB%98%E5%A5%91%E5%9C%B0%E9%83%BD%E6%B2%A1%E6%9C%89%E4%B8%8B%E8%BD%A6%23) `473.7K 🔥` `NEW`
1. [GEN战胜iG](https://s.weibo.com/weibo?q=%23GEN%E6%88%98%E8%83%9CiG%23) `452.3K 🔥` `NEW`
1. [海洋怎么孕育出这么大的哺乳动物](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B4%8B%E6%80%8E%E4%B9%88%E5%AD%95%E8%82%B2%E5%87%BA%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E5%93%BA%E4%B9%B3%E5%8A%A8%E7%89%A9%23) `344.0K 🔥` `NEW`
1. [奔驰承认L3自动驾驶推进太超前](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E6%89%BF%E8%AE%A4L3%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E6%8E%A8%E8%BF%9B%E5%A4%AA%E8%B6%85%E5%89%8D%23) `330.0K 🔥` `NEW`
1. [Ning力挺TheShy](https://s.weibo.com/weibo?q=%23Ning%E5%8A%9B%E6%8C%BATheShy%23) `328.3K 🔥` `NEW`
1. [jiaqi失误](https://s.weibo.com/weibo?q=%23jiaqi%E5%A4%B1%E8%AF%AF%23) `324.4K 🔥` `NEW`
1. [电竞圈 非法调岗](https://s.weibo.com/weibo?q=%23%E7%94%B5%E7%AB%9E%E5%9C%88%20%E9%9D%9E%E6%B3%95%E8%B0%83%E5%B2%97%23) `322.6K 🔥` `NEW`
1. [BLG LPL最后的希望](https://s.weibo.com/weibo?q=%23BLG%20LPL%E6%9C%80%E5%90%8E%E7%9A%84%E5%B8%8C%E6%9C%9B%23) `230.0K 🔥` `NEW`
1. [波兰枪击6死16伤](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E5%85%B0%E6%9E%AA%E5%87%BB6%E6%AD%BB16%E4%BC%A4%23) `218.6K 🔥` `NEW`
1. [iG输GEN后台画面曝光](https://s.weibo.com/weibo?q=%23iG%E8%BE%93GEN%E5%90%8E%E5%8F%B0%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `213.8K 🔥` `NEW`
1. [wei说GEN有点强我们也努力了](https://s.weibo.com/weibo?q=%23wei%E8%AF%B4GEN%E6%9C%89%E7%82%B9%E5%BC%BA%E6%88%91%E4%BB%AC%E4%B9%9F%E5%8A%AA%E5%8A%9B%E4%BA%86%23) `211.2K 🔥` `NEW`
1. [美国华裔回中国后发现远超预期](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8D%8E%E8%A3%94%E5%9B%9E%E4%B8%AD%E5%9B%BD%E5%90%8E%E5%8F%91%E7%8E%B0%E8%BF%9C%E8%B6%85%E9%A2%84%E6%9C%9F%23) `207.6K 🔥` `NEW`
1. [嫁金钗大结局争议](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%A4%A7%E7%BB%93%E5%B1%80%E4%BA%89%E8%AE%AE%23) `205.4K 🔥` `NEW`
1. [Chovy刷新S赛最好成绩](https://s.weibo.com/weibo?q=%23Chovy%E5%88%B7%E6%96%B0S%E8%B5%9B%E6%9C%80%E5%A5%BD%E6%88%90%E7%BB%A9%23) `202.9K 🔥` `NEW`
1. [济南倒饭姐不许同行摆摊](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%8D%97%E5%80%92%E9%A5%AD%E5%A7%90%E4%B8%8D%E8%AE%B8%E5%90%8C%E8%A1%8C%E6%91%86%E6%91%8A%23) `193.9K 🔥` `NEW`
1. [女乒今年首次无缘冠军赛4强](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B9%92%E4%BB%8A%E5%B9%B4%E9%A6%96%E6%AC%A1%E6%97%A0%E7%BC%98%E5%86%A0%E5%86%9B%E8%B5%9B4%E5%BC%BA%23) `174.9K 🔥` `NEW`
1. [仰望鼎曜全球首发](https://s.weibo.com/weibo?q=%23%E4%BB%B0%E6%9C%9B%E9%BC%8E%E6%9B%9C%E5%85%A8%E7%90%83%E9%A6%96%E5%8F%91%23) `172.7K 🔥` `NEW`
1. [W盛典 最牛阵容](https://s.weibo.com/weibo?q=%23W%E7%9B%9B%E5%85%B8%20%E6%9C%80%E7%89%9B%E9%98%B5%E5%AE%B9%23) `171.7K 🔥` `NEW`
1. [富士康印度工厂遭遇滑铁卢](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E5%A3%AB%E5%BA%B7%E5%8D%B0%E5%BA%A6%E5%B7%A5%E5%8E%82%E9%81%AD%E9%81%87%E6%BB%91%E9%93%81%E5%8D%A2%23) `158.6K 🔥` `NEW`
1. [iG选手赛后互相安慰](https://s.weibo.com/weibo?q=%23iG%E9%80%89%E6%89%8B%E8%B5%9B%E5%90%8E%E4%BA%92%E7%9B%B8%E5%AE%89%E6%85%B0%23) `152.7K 🔥` `NEW`
1. [后会友期 恰逢各个圈子都很闲](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%20%E6%81%B0%E9%80%A2%E5%90%84%E4%B8%AA%E5%9C%88%E5%AD%90%E9%83%BD%E5%BE%88%E9%97%B2%23) `149.5K 🔥` `NEW`
1. [江南今何在 今日说法](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%8D%97%E4%BB%8A%E4%BD%95%E5%9C%A8%20%E4%BB%8A%E6%97%A5%E8%AF%B4%E6%B3%95%23) `149.3K 🔥` `NEW`
1. [教练叫暂停被松岛辉空拒绝](https://s.weibo.com/weibo?q=%23%E6%95%99%E7%BB%83%E5%8F%AB%E6%9A%82%E5%81%9C%E8%A2%AB%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E6%8B%92%E7%BB%9D%23) `146.3K 🔥` `NEW`
1. [皇马与瓦伦西亚爆发冲突](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E4%B8%8E%E7%93%A6%E4%BC%A6%E8%A5%BF%E4%BA%9A%E7%88%86%E5%8F%91%E5%86%B2%E7%AA%81%23) `146.1K 🔥` `NEW`
1. [英国老公拒吃中餐被夸有毅力有原则](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E8%80%81%E5%85%AC%E6%8B%92%E5%90%83%E4%B8%AD%E9%A4%90%E8%A2%AB%E5%A4%B8%E6%9C%89%E6%AF%85%E5%8A%9B%E6%9C%89%E5%8E%9F%E5%88%99%23) `476.8K 🔥` `+268%`
1. [易烊千玺](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `412.4K 🔥` `+219%`
1. [马天宇和张萌被审判](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%92%8C%E5%BC%A0%E8%90%8C%E8%A2%AB%E5%AE%A1%E5%88%A4%23) `330.4K 🔥` `+156%`
1. [王楚然表白完黄景瑜愣住了两秒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%A1%A8%E7%99%BD%E5%AE%8C%E9%BB%84%E6%99%AF%E7%91%9C%E6%84%A3%E4%BD%8F%E4%BA%86%E4%B8%A4%E7%A7%92%23) `321.7K 🔥` `+185%`
1. [王俊凯卡清迈零点祝王源生日快乐](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8D%A1%E6%B8%85%E8%BF%88%E9%9B%B6%E7%82%B9%E7%A5%9D%E7%8E%8B%E6%BA%90%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90%23) `320.9K 🔥` `+150%`
1. [爸爸去哪儿3重聚为康康庆生](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%8E%BB%E5%93%AA%E5%84%BF3%E9%87%8D%E8%81%9A%E4%B8%BA%E5%BA%B7%E5%BA%B7%E5%BA%86%E7%94%9F%23) `301.7K 🔥` `+137%`
1. [武松打虎监控封存多年后流出](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%9D%BE%E6%89%93%E8%99%8E%E7%9B%91%E6%8E%A7%E5%B0%81%E5%AD%98%E5%A4%9A%E5%B9%B4%E5%90%8E%E6%B5%81%E5%87%BA%23) `210.3K 🔥` `+182%`
1. [孩子不在家夫妻还需要在一起吗](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%B8%8D%E5%9C%A8%E5%AE%B6%E5%A4%AB%E5%A6%BB%E8%BF%98%E9%9C%80%E8%A6%81%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%90%97%23) `178.2K 🔥` `+39%`
1. [鹿晗投资天霸至今没拿过分红](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%8A%95%E8%B5%84%E5%A4%A9%E9%9C%B8%E8%87%B3%E4%BB%8A%E6%B2%A1%E6%8B%BF%E8%BF%87%E5%88%86%E7%BA%A2%23) `177.1K 🔥` `+153%`
1. [王楚然滴眼药水把沈腾震撼到了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%BB%B4%E7%9C%BC%E8%8D%AF%E6%B0%B4%E6%8A%8A%E6%B2%88%E8%85%BE%E9%9C%87%E6%92%BC%E5%88%B0%E4%BA%86%23) `161.7K 🔥` `+113%`
1. [于正求厉娜原谅许飞](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E6%B1%82%E5%8E%89%E5%A8%9C%E5%8E%9F%E8%B0%85%E8%AE%B8%E9%A3%9E%23) `326.2K 🔥` `-23%`
1. [8省份大到暴雪](https://s.weibo.com/weibo?q=%238%E7%9C%81%E4%BB%BD%E5%A4%A7%E5%88%B0%E6%9A%B4%E9%9B%AA%23) `255.6K 🔥` `-62%`
1. [iG对战GEN](https://s.weibo.com/weibo?q=%23iG%E5%AF%B9%E6%88%98GEN%23) `153.1K 🔥` `-83%`

Updated at 2026-11-08 10:41:43

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
