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

1. [郑钦文实现千万分之一概率事件](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%AE%9E%E7%8E%B0%E5%8D%83%E4%B8%87%E5%88%86%E4%B9%8B%E4%B8%80%E6%A6%82%E7%8E%87%E4%BA%8B%E4%BB%B6%23) `1.7M 🔥` `NEW`
1. [小米澎程SUV现已开售](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BSUV%E7%8E%B0%E5%B7%B2%E5%BC%80%E5%94%AE%23) `1.2M 🔥` `NEW`
1. [联合国发布了新版世界地图](https://s.weibo.com/weibo?q=%23%E8%81%94%E5%90%88%E5%9B%BD%E5%8F%91%E5%B8%83%E4%BA%86%E6%96%B0%E7%89%88%E4%B8%96%E7%95%8C%E5%9C%B0%E5%9B%BE%23) `1.2M 🔥` `NEW`
1. [郑钦文美网挑战莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BE%8E%E7%BD%91%E6%8C%91%E6%88%98%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `822.4K 🔥` `NEW`
1. [拉面范中国国家队的选择](https://s.weibo.com/weibo?q=%23%E6%8B%89%E9%9D%A2%E8%8C%83%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E9%98%9F%E7%9A%84%E9%80%89%E6%8B%A9%23) `807.9K 🔥` `NEW`
1. [美网回应郑钦文0比5逆转](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E5%9B%9E%E5%BA%94%E9%83%91%E9%92%A6%E6%96%870%E6%AF%945%E9%80%86%E8%BD%AC%23) `691.1K 🔥` `NEW`
1. [中国女篮20分大胜意大利女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE20%E5%88%86%E5%A4%A7%E8%83%9C%E6%84%8F%E5%A4%A7%E5%88%A9%E5%A5%B3%E7%AF%AE%23) `601.3K 🔥` `NEW`
1. [孙远翥跳楼原因](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%BF%9C%E7%BF%A5%E8%B7%B3%E6%A5%BC%E5%8E%9F%E5%9B%A0%23) `369.1K 🔥` `NEW`
1. [花少5播放量](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%915%E6%92%AD%E6%94%BE%E9%87%8F%23) `366.9K 🔥` `NEW`
1. [小米澎程N70锁单](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN70%E9%94%81%E5%8D%95%23) `361.9K 🔥` `NEW`
1. [张家齐恋爱被前男友当炫耀资本](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E6%81%8B%E7%88%B1%E8%A2%AB%E5%89%8D%E7%94%B7%E5%8F%8B%E5%BD%93%E7%82%AB%E8%80%80%E8%B5%84%E6%9C%AC%23) `356.1K 🔥` `NEW`
1. [宝格丽小公主缺席晚宴](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E5%B0%8F%E5%85%AC%E4%B8%BB%E7%BC%BA%E5%B8%AD%E6%99%9A%E5%AE%B4%23) `349.5K 🔥` `NEW`
1. [绝不允许歪曲篡改抗战歌曲](https://s.weibo.com/weibo?q=%23%E7%BB%9D%E4%B8%8D%E5%85%81%E8%AE%B8%E6%AD%AA%E6%9B%B2%E7%AF%A1%E6%94%B9%E6%8A%97%E6%88%98%E6%AD%8C%E6%9B%B2%23) `343.6K 🔥` `NEW`
1. [美股休市 科技股反弹](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E4%BC%91%E5%B8%82%20%E7%A7%91%E6%8A%80%E8%82%A1%E5%8F%8D%E5%BC%B9%23) `301.4K 🔥` `NEW`
1. [余承东 华为](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%20%E5%8D%8E%E4%B8%BA%23) `292.6K 🔥` `NEW`
1. [郑钦文莱巴金娜5次交手记录](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C5%E6%AC%A1%E4%BA%A4%E6%89%8B%E8%AE%B0%E5%BD%95%23) `285.9K 🔥` `NEW`
1. [倪妮井柏然分手原因](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%86%E6%89%8B%E5%8E%9F%E5%9B%A0%23) `249.0K 🔥` `NEW`
1. [郑钦文下轮将战莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%B8%8B%E8%BD%AE%E5%B0%86%E6%88%98%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `237.1K 🔥` `NEW`
1. [栾念肚子痛弹幕](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E8%82%9A%E5%AD%90%E7%97%9B%E5%BC%B9%E5%B9%95%23) `230.1K 🔥` `NEW`
1. [莱巴金娜争世界第一](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E4%BA%89%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23) `226.1K 🔥` `NEW`
1. [华为MateXT2首拆](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMateXT2%E9%A6%96%E6%8B%86%23) `218.7K 🔥` `NEW`
1. [男童被指摸臀父母要求女子道歉](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E8%A2%AB%E6%8C%87%E6%91%B8%E8%87%80%E7%88%B6%E6%AF%8D%E8%A6%81%E6%B1%82%E5%A5%B3%E5%AD%90%E9%81%93%E6%AD%89%23) `158.7K 🔥` `NEW`
1. [吴磊宝格丽晚宴造型](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E5%AE%9D%E6%A0%BC%E4%B8%BD%E6%99%9A%E5%AE%B4%E9%80%A0%E5%9E%8B%23) `143.7K 🔥` `NEW`
1. [日本不婚族老阿姨](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%8D%E5%A9%9A%E6%97%8F%E8%80%81%E9%98%BF%E5%A7%A8%23) `143.0K 🔥` `NEW`
1. [低保家庭女孩把追星放心底也是成长](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E4%BF%9D%E5%AE%B6%E5%BA%AD%E5%A5%B3%E5%AD%A9%E6%8A%8A%E8%BF%BD%E6%98%9F%E6%94%BE%E5%BF%83%E5%BA%95%E4%B9%9F%E6%98%AF%E6%88%90%E9%95%BF%23) `134.4K 🔥` `NEW`
1. [美网](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%23) `128.1K 🔥` `NEW`
1. [张家齐录完我家那闺女就搬家了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%BD%95%E5%AE%8C%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%E5%B0%B1%E6%90%AC%E5%AE%B6%E4%BA%86%23) `115.6K 🔥` `NEW`
1. [116号车手向王一博道歉](https://s.weibo.com/weibo?q=%23116%E5%8F%B7%E8%BD%A6%E6%89%8B%E5%90%91%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%81%93%E6%AD%89%23) `112.1K 🔥` `NEW`
1. [小米龙甲电池针刺不起火](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%BE%99%E7%94%B2%E7%94%B5%E6%B1%A0%E9%92%88%E5%88%BA%E4%B8%8D%E8%B5%B7%E7%81%AB%23) `110.6K 🔥` `NEW`
1. [郑钦文逆转震惊美网](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%80%86%E8%BD%AC%E9%9C%87%E6%83%8A%E7%BE%8E%E7%BD%91%23) `2.8M 🔥` `+144%`
1. [时代楷模王戟最想对年轻人说](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E6%A5%B7%E6%A8%A1%E7%8E%8B%E6%88%9F%E6%9C%80%E6%83%B3%E5%AF%B9%E5%B9%B4%E8%BD%BB%E4%BA%BA%E8%AF%B4%23) `1.2M 🔥` `+282%`
1. [余承东建议苹果用户买华为备用机](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%BB%BA%E8%AE%AE%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%E4%B9%B0%E5%8D%8E%E4%B8%BA%E5%A4%87%E7%94%A8%E6%9C%BA%23) `1.2M 🔥` `+584%`
1. [斯瓦泰克不敌郑钦文哭了](https://s.weibo.com/weibo?q=%23%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%E4%B8%8D%E6%95%8C%E9%83%91%E9%92%A6%E6%96%87%E5%93%AD%E4%BA%86%23) `351.6K 🔥` `+28%`
1. [偶像剧 软色情宣传](https://s.weibo.com/weibo?q=%23%E5%81%B6%E5%83%8F%E5%89%A7%20%E8%BD%AF%E8%89%B2%E6%83%85%E5%AE%A3%E4%BC%A0%23) `346.2K 🔥` `+189%`
1. [赵一鸣致歉](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%80%E9%B8%A3%E8%87%B4%E6%AD%89%23) `304.6K 🔥` `+49%`
1. [失业者假装上班挤满图书馆](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E4%B8%9A%E8%80%85%E5%81%87%E8%A3%85%E4%B8%8A%E7%8F%AD%E6%8C%A4%E6%BB%A1%E5%9B%BE%E4%B9%A6%E9%A6%86%23) `299.3K 🔥` `+413%`
1. [郑钦文vs斯瓦泰克](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%23) `285.3K 🔥` `+43%`
1. [郑钦文三进美网8强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%B8%89%E8%BF%9B%E7%BE%8E%E7%BD%918%E5%BC%BA%23) `258.1K 🔥` `+187%`
1. [婚内强奸案男方姐姐称婚内不算强奸](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%86%85%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%94%B7%E6%96%B9%E5%A7%90%E5%A7%90%E7%A7%B0%E5%A9%9A%E5%86%85%E4%B8%8D%E7%AE%97%E5%BC%BA%E5%A5%B8%23) `253.8K 🔥` `+173%`
1. [日本驻印度大使恒河沐浴](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%A9%BB%E5%8D%B0%E5%BA%A6%E5%A4%A7%E4%BD%BF%E6%81%92%E6%B2%B3%E6%B2%90%E6%B5%B4%23) `244.2K 🔥` `+359%`
1. [用AI训练AI](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E8%AE%AD%E7%BB%83AI%23) `238.3K 🔥` `+352%`
1. [为什么年轻人都不喜欢带机械表了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B9%B4%E8%BD%BB%E4%BA%BA%E9%83%BD%E4%B8%8D%E5%96%9C%E6%AC%A2%E5%B8%A6%E6%9C%BA%E6%A2%B0%E8%A1%A8%E4%BA%86%23) `209.8K 🔥` `+294%`
1. [他以为没吃到的是荷包蛋](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%BB%A5%E4%B8%BA%E6%B2%A1%E5%90%83%E5%88%B0%E7%9A%84%E6%98%AF%E8%8D%B7%E5%8C%85%E8%9B%8B%23) `209.1K 🔥` `+248%`
1. [宝格丽高珠晚宴](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E9%AB%98%E7%8F%A0%E6%99%9A%E5%AE%B4%23) `170.8K 🔥` `+115%`
1. [鸿蒙7正式发布](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%997%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83%23) `164.3K 🔥` `+122%`
1. [哪个行业已经悄悄好起来了](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%B8%AA%E8%A1%8C%E4%B8%9A%E5%B7%B2%E7%BB%8F%E6%82%84%E6%82%84%E5%A5%BD%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `130.5K 🔥` `+130%`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `115.8K 🔥` `+59%`
1. [小米澎程N90售价](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90%E5%94%AE%E4%BB%B7%23) `115.4K 🔥` `+118%`
1. [杨洋 反正你也播不了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%20%E5%8F%8D%E6%AD%A3%E4%BD%A0%E4%B9%9F%E6%92%AD%E4%B8%8D%E4%BA%86%23) `361.2K 🔥`
1. [斯瓦泰克回应被逆转](https://s.weibo.com/weibo?q=%23%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%80%86%E8%BD%AC%23) `309.5K 🔥` `-21%`
1. [任国超的第一部剧来了](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%9B%BD%E8%B6%85%E7%9A%84%E7%AC%AC%E4%B8%80%E9%83%A8%E5%89%A7%E6%9D%A5%E4%BA%86%23) `250.9K 🔥` `-34%`
1. [王一博工作室把粉丝的话当文案](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%8A%8A%E7%B2%89%E4%B8%9D%E7%9A%84%E8%AF%9D%E5%BD%93%E6%96%87%E6%A1%88%23) `226.5K 🔥` `-44%`

Updated at 2026-09-08 08:36:17

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
