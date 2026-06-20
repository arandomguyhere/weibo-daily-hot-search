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

1. [明天将是中国球迷的主场 (Tomorrow will be the home court for Chinese fans)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%A4%A9%E5%B0%86%E6%98%AF%E4%B8%AD%E5%9B%BD%E7%90%83%E8%BF%B7%E7%9A%84%E4%B8%BB%E5%9C%BA%23) `2.7M 🔥` `NEW`
1. [超3000家外资企业追加在华投资](https://s.weibo.com/weibo?q=%23%E8%B6%853000%E5%AE%B6%E5%A4%96%E8%B5%84%E4%BC%81%E4%B8%9A%E8%BF%BD%E5%8A%A0%E5%9C%A8%E5%8D%8E%E6%8A%95%E8%B5%84%23) `818.8K 🔥` `NEW`
1. [长大后终于理解了妈妈的解冻焦虑](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E4%BA%86%E5%A6%88%E5%A6%88%E7%9A%84%E8%A7%A3%E5%86%BB%E7%84%A6%E8%99%91%23) `780.3K 🔥` `NEW`
1. [头一次见把优点全穿出来的](https://s.weibo.com/weibo?q=%23%E5%A4%B4%E4%B8%80%E6%AC%A1%E8%A7%81%E6%8A%8A%E4%BC%98%E7%82%B9%E5%85%A8%E7%A9%BF%E5%87%BA%E6%9D%A5%E7%9A%84%23) `732.9K 🔥` `NEW`
1. [李一桐痛失艺名后首个作品](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E7%97%9B%E5%A4%B1%E8%89%BA%E5%90%8D%E5%90%8E%E9%A6%96%E4%B8%AA%E4%BD%9C%E5%93%81%23) `519.0K 🔥` `NEW`
1. [立陶宛总统说搞不好对华关系就走人](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E9%99%B6%E5%AE%9B%E6%80%BB%E7%BB%9F%E8%AF%B4%E6%90%9E%E4%B8%8D%E5%A5%BD%E5%AF%B9%E5%8D%8E%E5%85%B3%E7%B3%BB%E5%B0%B1%E8%B5%B0%E4%BA%BA%23) `327.9K 🔥` `NEW`
1. [九尾小崽完美联动](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E5%B0%8F%E5%B4%BD%E5%AE%8C%E7%BE%8E%E8%81%94%E5%8A%A8%23) `318.2K 🔥` `NEW`
1. [昨天的孙怡可以娶今天的孙怡](https://s.weibo.com/weibo?q=%23%E6%98%A8%E5%A4%A9%E7%9A%84%E5%AD%99%E6%80%A1%E5%8F%AF%E4%BB%A5%E5%A8%B6%E4%BB%8A%E5%A4%A9%E7%9A%84%E5%AD%99%E6%80%A1%23) `288.1K 🔥` `NEW`
1. [男子醉驾致1死2伤全责变主责](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%86%89%E9%A9%BE%E8%87%B41%E6%AD%BB2%E4%BC%A4%E5%85%A8%E8%B4%A3%E5%8F%98%E4%B8%BB%E8%B4%A3%23) `287.8K 🔥` `NEW`
1. [田曦薇宋威龙亚洲内容大赏出发图](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%AE%8B%E5%A8%81%E9%BE%99%E4%BA%9A%E6%B4%B2%E5%86%85%E5%AE%B9%E5%A4%A7%E8%B5%8F%E5%87%BA%E5%8F%91%E5%9B%BE%23) `287.7K 🔥` `NEW`
1. [德国捂嘴合影全员红牌预定 (All German players posed for a photo covering their mouths and booked red cards)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E6%8D%82%E5%98%B4%E5%90%88%E5%BD%B1%E5%85%A8%E5%91%98%E7%BA%A2%E7%89%8C%E9%A2%84%E5%AE%9A%23) `211.6K 🔥` `NEW`
1. [侯明昊长生骨开机应援](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E9%95%BF%E7%94%9F%E9%AA%A8%E5%BC%80%E6%9C%BA%E5%BA%94%E6%8F%B4%23) `210.7K 🔥` `NEW`
1. [涨完价的iPhone还香吗](https://s.weibo.com/weibo?q=%23%E6%B6%A8%E5%AE%8C%E4%BB%B7%E7%9A%84iPhone%E8%BF%98%E9%A6%99%E5%90%97%23) `209.8K 🔥` `NEW`
1. [宋威龙给釜山一点浓颜震撼](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%BB%99%E9%87%9C%E5%B1%B1%E4%B8%80%E7%82%B9%E6%B5%93%E9%A2%9C%E9%9C%87%E6%92%BC%23) `207.4K 🔥` `NEW`
1. [日本大肆囤积弹药备战](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%A7%E8%82%86%E5%9B%A4%E7%A7%AF%E5%BC%B9%E8%8D%AF%E5%A4%87%E6%88%98%23) `207.3K 🔥` `NEW`
1. [庄法穿婚纱了](https://s.weibo.com/weibo?q=%23%E5%BA%84%E6%B3%95%E7%A9%BF%E5%A9%9A%E7%BA%B1%E4%BA%86%23) `205.7K 🔥` `NEW`
1. [李小冉梦一场造型是全球首穿](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%A2%A6%E4%B8%80%E5%9C%BA%E9%80%A0%E5%9E%8B%E6%98%AF%E5%85%A8%E7%90%83%E9%A6%96%E7%A9%BF%23) `196.3K 🔥` `NEW`
1. [田曦薇好一朵蓝色妖姬](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%A5%BD%E4%B8%80%E6%9C%B5%E8%93%9D%E8%89%B2%E5%A6%96%E5%A7%AC%23) `195.3K 🔥` `NEW`
1. [你们谈恋爱的未必有我追星舍得花钱](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E8%B0%88%E6%81%8B%E7%88%B1%E7%9A%84%E6%9C%AA%E5%BF%85%E6%9C%89%E6%88%91%E8%BF%BD%E6%98%9F%E8%88%8D%E5%BE%97%E8%8A%B1%E9%92%B1%23) `192.3K 🔥` `NEW`
1. [1年500元你会把脸卖给AI短剧吗](https://s.weibo.com/weibo?q=%231%E5%B9%B4500%E5%85%83%E4%BD%A0%E4%BC%9A%E6%8A%8A%E8%84%B8%E5%8D%96%E7%BB%99AI%E7%9F%AD%E5%89%A7%E5%90%97%23) `191.9K 🔥` `NEW`
1. [睡觉用2个枕头更护腰护脊 (Use 2 pillows to protect your waist and spine when sleeping)](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E7%94%A82%E4%B8%AA%E6%9E%95%E5%A4%B4%E6%9B%B4%E6%8A%A4%E8%85%B0%E6%8A%A4%E8%84%8A%23) `176.2K 🔥` `NEW`
1. [六公主把宋亚轩放C位](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%85%AC%E4%B8%BB%E6%8A%8A%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%94%BEC%E4%BD%8D%23) `175.4K 🔥` `NEW`
1. [现在已经没人开腰疼的玩笑了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B7%B2%E7%BB%8F%E6%B2%A1%E4%BA%BA%E5%BC%80%E8%85%B0%E7%96%BC%E7%9A%84%E7%8E%A9%E7%AC%91%E4%BA%86%23) `173.0K 🔥` `NEW`
1. [香港700万黄金劫案已抓7人](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF700%E4%B8%87%E9%BB%84%E9%87%91%E5%8A%AB%E6%A1%88%E5%B7%B2%E6%8A%937%E4%BA%BA%23) `161.0K 🔥` `NEW`
1. [陈建斌大儿子获海淀区三好学生](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BB%BA%E6%96%8C%E5%A4%A7%E5%84%BF%E5%AD%90%E8%8E%B7%E6%B5%B7%E6%B7%80%E5%8C%BA%E4%B8%89%E5%A5%BD%E5%AD%A6%E7%94%9F%23) `160.6K 🔥` `NEW`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `159.8K 🔥` `NEW`
1. [ZmjjKK通宵练枪](https://s.weibo.com/weibo?q=%23ZmjjKK%E9%80%9A%E5%AE%B5%E7%BB%83%E6%9E%AA%23) `159.8K 🔥` `NEW`
1. [阚清子安崎演我跟闺蜜减肥](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%AE%89%E5%B4%8E%E6%BC%94%E6%88%91%E8%B7%9F%E9%97%BA%E8%9C%9C%E5%87%8F%E8%82%A5%23) `158.5K 🔥` `NEW`
1. [张凌赫耳链](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%80%B3%E9%93%BE%23) `146.2K 🔥` `NEW`
1. [首尔歌谣大赏](https://s.weibo.com/weibo?q=%23%E9%A6%96%E5%B0%94%E6%AD%8C%E8%B0%A3%E5%A4%A7%E8%B5%8F%23) `136.4K 🔥` `NEW`
1. [特朗普高市早苗G7翻脸 (Trump's high market, Sanae G7 fall out)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97G7%E7%BF%BB%E8%84%B8%23) `131.0K 🔥` `NEW`
1. [手机电脑全面涨价原因](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E7%94%B5%E8%84%91%E5%85%A8%E9%9D%A2%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `129.8K 🔥` `NEW`
1. [土耳其球迷暴怒](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E7%90%83%E8%BF%B7%E6%9A%B4%E6%80%92%23) `1.0M 🔥` `+46%`
1. [阚清子秒删](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E7%A7%92%E5%88%A0%23) `555.9K 🔥` `+32%`
1. [滴露消毒液广告被指物化女性](https://s.weibo.com/weibo?q=%23%E6%BB%B4%E9%9C%B2%E6%B6%88%E6%AF%92%E6%B6%B2%E5%B9%BF%E5%91%8A%E8%A2%AB%E6%8C%87%E7%89%A9%E5%8C%96%E5%A5%B3%E6%80%A7%23) `190.2K 🔥`
1. [等你年纪大了就知道原因了](https://s.weibo.com/weibo?q=%23%E7%AD%89%E4%BD%A0%E5%B9%B4%E7%BA%AA%E5%A4%A7%E4%BA%86%E5%B0%B1%E7%9F%A5%E9%81%93%E5%8E%9F%E5%9B%A0%E4%BA%86%23) `288.1K 🔥` `-64%`
1. [长生骨男主](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9F%E9%AA%A8%E7%94%B7%E4%B8%BB%23) `287.4K 🔥` `-39%`
1. [人与人沟通也是要消耗token的](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%8E%E4%BA%BA%E6%B2%9F%E9%80%9A%E4%B9%9F%E6%98%AF%E8%A6%81%E6%B6%88%E8%80%97token%E7%9A%84%23) `209.3K 🔥` `-23%`
1. [曝徐艺洋在美国生的孩子 (Exposed Xu Yiyang’s child born in the United States)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9C%A8%E7%BE%8E%E5%9B%BD%E7%94%9F%E7%9A%84%E5%AD%A9%E5%AD%90%23) `204.7K 🔥` `-24%`
1. [苹果全面涨价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%85%A8%E9%9D%A2%E6%B6%A8%E4%BB%B7%23) `202.5K 🔥` `-23%`
1. [毒纸尿裤事件反转再反转](https://s.weibo.com/weibo?q=%23%E6%AF%92%E7%BA%B8%E5%B0%BF%E8%A3%A4%E4%BA%8B%E4%BB%B6%E5%8F%8D%E8%BD%AC%E5%86%8D%E5%8F%8D%E8%BD%AC%23) `198.5K 🔥` `-25%`
1. [李一桐曾舜晞邓为都是艺名 (Li Yitong, Zeng Shun, Xi Dengwei are all stage names)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E6%9B%BE%E8%88%9C%E6%99%9E%E9%82%93%E4%B8%BA%E9%83%BD%E6%98%AF%E8%89%BA%E5%90%8D%23) `174.3K 🔥` `-75%`
1. [张庭儿子女儿颜值](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BA%AD%E5%84%BF%E5%AD%90%E5%A5%B3%E5%84%BF%E9%A2%9C%E5%80%BC%23) `160.2K 🔥` `-38%`
1. [广东的湿度有多夸张 (How exaggerated is the humidity in Guangdong?)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%9A%84%E6%B9%BF%E5%BA%A6%E6%9C%89%E5%A4%9A%E5%A4%B8%E5%BC%A0%23) `159.8K 🔥` `-63%`
1. [虞书欣长生骨第一天定妆](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%95%BF%E7%94%9F%E9%AA%A8%E7%AC%AC%E4%B8%80%E5%A4%A9%E5%AE%9A%E5%A6%86%23) `159.8K 🔥` `-80%`
1. [网传黄子韬徐艺洋产子时间线](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E9%BB%84%E5%AD%90%E9%9F%AC%E5%BE%90%E8%89%BA%E6%B4%8B%E4%BA%A7%E5%AD%90%E6%97%B6%E9%97%B4%E7%BA%BF%23) `151.8K 🔥` `-42%`
1. [土耳其球员急哭了 (Turkish players cried anxiously)](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E7%90%83%E5%91%98%E6%80%A5%E5%93%AD%E4%BA%86%23) `149.5K 🔥` `-87%`
1. [陈奕迅豪掷1.82亿港币购入超级豪宅](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E8%BF%85%E8%B1%AA%E6%8E%B71.82%E4%BA%BF%E6%B8%AF%E5%B8%81%E8%B4%AD%E5%85%A5%E8%B6%85%E7%BA%A7%E8%B1%AA%E5%AE%85%23) `143.3K 🔥` `-51%`
1. [纸尿裤罗生门](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%B0%BF%E8%A3%A4%E7%BD%97%E7%94%9F%E9%97%A8%23) `142.6K 🔥` `-49%`
1. [与凤行番位](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E5%87%A4%E8%A1%8C%E7%95%AA%E4%BD%8D%23) `129.2K 🔥` `-56%`

Updated at 2026-06-20 18:39:50

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
