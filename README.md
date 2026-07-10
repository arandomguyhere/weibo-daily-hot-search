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

1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `1.7M 🔥` `NEW`
1. [广西贵港教育园区孤岛救援始末](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E8%B4%B5%E6%B8%AF%E6%95%99%E8%82%B2%E5%9B%AD%E5%8C%BA%E5%AD%A4%E5%B2%9B%E6%95%91%E6%8F%B4%E5%A7%8B%E6%9C%AB%23) `804.9K 🔥` `NEW`
1. [姆巴佩的小难题](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%9A%84%E5%B0%8F%E9%9A%BE%E9%A2%98%23) `666.4K 🔥` `NEW`
1. [北京全市已转移近10万人](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%85%A8%E5%B8%82%E5%B7%B2%E8%BD%AC%E7%A7%BB%E8%BF%9110%E4%B8%87%E4%BA%BA%23) `663.5K 🔥` `NEW`
1. [黄金一代未完成的梦](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%80%E4%BB%A3%E6%9C%AA%E5%AE%8C%E6%88%90%E7%9A%84%E6%A2%A6%23) `651.2K 🔥` `NEW`
1. [白鹿每次憋哭就这样](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%AF%8F%E6%AC%A1%E6%86%8B%E5%93%AD%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `632.3K 🔥` `NEW`
1. [巴威预计12日凌晨登陆](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E9%A2%84%E8%AE%A112%E6%97%A5%E5%87%8C%E6%99%A8%E7%99%BB%E9%99%86%23) `572.7K 🔥` `NEW`
1. [德约科维奇vs辛纳](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87vs%E8%BE%9B%E7%BA%B3%23) `560.7K 🔥` `NEW`
1. [迪丽热巴这就是我呀](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E5%B0%B1%E6%98%AF%E6%88%91%E5%91%80%23) `556.5K 🔥` `NEW`
1. [JDG空ban](https://s.weibo.com/weibo?q=%23JDG%E7%A9%BAban%23) `431.9K 🔥` `NEW`
1. [宋威龙工作室有仙人吧 (Is there an immortal in Song Weilong's studio?)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%9C%89%E4%BB%99%E4%BA%BA%E5%90%A7%23) `419.4K 🔥` `NEW`
1. [台风巴威最新研判](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E7%A0%94%E5%88%A4%23) `400.2K 🔥` `NEW`
1. [35岁女高管立遗赠千万资产留给小姨](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%A5%B3%E9%AB%98%E7%AE%A1%E7%AB%8B%E9%81%97%E8%B5%A0%E5%8D%83%E4%B8%87%E8%B5%84%E4%BA%A7%E7%95%99%E7%BB%99%E5%B0%8F%E5%A7%A8%23) `400.0K 🔥` `NEW`
1. [广西一妈妈带4娃被困4天后获救](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E4%B8%80%E5%A6%88%E5%A6%88%E5%B8%A64%E5%A8%83%E8%A2%AB%E5%9B%B04%E5%A4%A9%E5%90%8E%E8%8E%B7%E6%95%91%23) `399.6K 🔥` `NEW`
1. [昀牵孟绕](https://s.weibo.com/weibo?q=%23%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%23) `399.5K 🔥` `NEW`
1. [3岁娃疑乐园游泳后高烧肝功受损](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A8%83%E7%96%91%E4%B9%90%E5%9B%AD%E6%B8%B8%E6%B3%B3%E5%90%8E%E9%AB%98%E7%83%A7%E8%82%9D%E5%8A%9F%E5%8F%97%E6%8D%9F%23) `399.5K 🔥` `NEW`
1. [邓紫棋被歌手弹幕发现了行踪](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E8%A2%AB%E6%AD%8C%E6%89%8B%E5%BC%B9%E5%B9%95%E5%8F%91%E7%8E%B0%E4%BA%86%E8%A1%8C%E8%B8%AA%23) `399.2K 🔥` `NEW`
1. [会打扮是被严重低估的能力](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E6%89%93%E6%89%AE%E6%98%AF%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E7%9A%84%E8%83%BD%E5%8A%9B%23) `399.0K 🔥` `NEW`
1. [周星驰口碑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%8F%A3%E7%A2%91%23) `398.8K 🔥` `NEW`
1. [爱尔兰瑞安航空客机飞行中舷窗炸裂](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%B0%94%E5%85%B0%E7%91%9E%E5%AE%89%E8%88%AA%E7%A9%BA%E5%AE%A2%E6%9C%BA%E9%A3%9E%E8%A1%8C%E4%B8%AD%E8%88%B7%E7%AA%97%E7%82%B8%E8%A3%82%23) `367.8K 🔥` `NEW`
1. [功夫女足 (kung fu women's football)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `354.2K 🔥` `NEW`
1. [孟子义李昀锐你俩在娇羞啥](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E4%BD%A0%E4%BF%A9%E5%9C%A8%E5%A8%87%E7%BE%9E%E5%95%A5%23) `348.7K 🔥` `NEW`
1. [挪威进八强 哈兰德让鲁尼兑现承诺](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E8%BF%9B%E5%85%AB%E5%BC%BA%20%E5%93%88%E5%85%B0%E5%BE%B7%E8%AE%A9%E9%B2%81%E5%B0%BC%E5%85%91%E7%8E%B0%E6%89%BF%E8%AF%BA%23) `317.8K 🔥` `NEW`
1. [冉莹颖自曝处在丧偶式婚姻](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E8%87%AA%E6%9B%9D%E5%A4%84%E5%9C%A8%E4%B8%A7%E5%81%B6%E5%BC%8F%E5%A9%9A%E5%A7%BB%23) `302.9K 🔥` `NEW`
1. [台风天超市被剩下的方便面](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%A4%A9%E8%B6%85%E5%B8%82%E8%A2%AB%E5%89%A9%E4%B8%8B%E7%9A%84%E6%96%B9%E4%BE%BF%E9%9D%A2%23) `277.1K 🔥` `NEW`
1. [刘惜君淘汰](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%83%9C%E5%90%9B%E6%B7%98%E6%B1%B0%23) `276.2K 🔥` `NEW`
1. [飞行员举报情人诈骗700余万新进展](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E8%A1%8C%E5%91%98%E4%B8%BE%E6%8A%A5%E6%83%85%E4%BA%BA%E8%AF%88%E9%AA%97700%E4%BD%99%E4%B8%87%E6%96%B0%E8%BF%9B%E5%B1%95%23) `261.1K 🔥` `NEW`
1. [曝易易紫虞书欣疑似因男生闹掰](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%98%93%E6%98%93%E7%B4%AB%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%96%91%E4%BC%BC%E5%9B%A0%E7%94%B7%E7%94%9F%E9%97%B9%E6%8E%B0%23) `260.1K 🔥` `NEW`
1. [女子遭大狗撕咬20秒狂犬病三级暴露](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD%E5%A4%A7%E7%8B%97%E6%92%95%E5%92%AC20%E7%A7%92%E7%8B%82%E7%8A%AC%E7%97%85%E4%B8%89%E7%BA%A7%E6%9A%B4%E9%9C%B2%23) `255.7K 🔥` `NEW`
1. [耳帝 胡彦斌唱得最不好的一次](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%20%E8%83%A1%E5%BD%A6%E6%96%8C%E5%94%B1%E5%BE%97%E6%9C%80%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%B8%80%E6%AC%A1%23) `250.1K 🔥` `NEW`
1. [功夫女足票房表现 (Kung Fu Girls box office performance)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E8%A1%A8%E7%8E%B0%23) `249.8K 🔥` `NEW`
1. [多地将出现10级以上雷暴大风](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%B0%86%E5%87%BA%E7%8E%B010%E7%BA%A7%E4%BB%A5%E4%B8%8A%E9%9B%B7%E6%9A%B4%E5%A4%A7%E9%A3%8E%23) `205.2K 🔥` `NEW`
1. [庙堂之外](https://s.weibo.com/weibo?q=%23%E5%BA%99%E5%A0%82%E4%B9%8B%E5%A4%96%23) `205.2K 🔥` `NEW`
1. [台风巴威强度将再次加强](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%BC%BA%E5%BA%A6%E5%B0%86%E5%86%8D%E6%AC%A1%E5%8A%A0%E5%BC%BA%23) `205.0K 🔥` `NEW`
1. [歌手突围赛](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%AA%81%E5%9B%B4%E8%B5%9B%23) `193.3K 🔥` `NEW`
1. [霍思燕家的鸟又夺冠了](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E5%AE%B6%E7%9A%84%E9%B8%9F%E5%8F%88%E5%A4%BA%E5%86%A0%E4%BA%86%23) `558.8K 🔥` `+35%`
1. [突然意识到没必要焦虑](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E6%B2%A1%E5%BF%85%E8%A6%81%E7%84%A6%E8%99%91%23) `399.1K 🔥` `+81%`
1. [宋承炫宣布得子](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%89%BF%E7%82%AB%E5%AE%A3%E5%B8%83%E5%BE%97%E5%AD%90%23) `421.5K 🔥`
1. [多位演员无戏可演回家卖菜 (Many actors have no roles to play and go home to sell vegetables)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E6%BC%94%E5%91%98%E6%97%A0%E6%88%8F%E5%8F%AF%E6%BC%94%E5%9B%9E%E5%AE%B6%E5%8D%96%E8%8F%9C%23) `400.1K 🔥`
1. [半导体设备新股暴涨1070%](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%AF%BC%E4%BD%93%E8%AE%BE%E5%A4%87%E6%96%B0%E8%82%A1%E6%9A%B4%E6%B6%A81070%25%23) `399.9K 🔥`
1. [儿子出轨后婆婆上门硬刚替儿媳讨说法](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%87%BA%E8%BD%A8%E5%90%8E%E5%A9%86%E5%A9%86%E4%B8%8A%E9%97%A8%E7%A1%AC%E5%88%9A%E6%9B%BF%E5%84%BF%E5%AA%B3%E8%AE%A8%E8%AF%B4%E6%B3%95%23) `398.8K 🔥`
1. [火灾鞋厂楼顶蓄水池打捞出多具遗体 (Many bodies recovered from reservoir on rooftop of shoe factory after fire)](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%81%BE%E9%9E%8B%E5%8E%82%E6%A5%BC%E9%A1%B6%E8%93%84%E6%B0%B4%E6%B1%A0%E6%89%93%E6%8D%9E%E5%87%BA%E5%A4%9A%E5%85%B7%E9%81%97%E4%BD%93%23) `366.8K 🔥`
1. [薛之谦演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `304.7K 🔥`
1. [李钟硕IU宣布分手 (Lee Jong Suk, IU announce breakup)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%92%9F%E7%A1%95IU%E5%AE%A3%E5%B8%83%E5%88%86%E6%89%8B%23) `275.3K 🔥`
1. [小米澎程通过申报](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E9%80%9A%E8%BF%87%E7%94%B3%E6%8A%A5%23) `205.1K 🔥`
1. [台风巴威位置 (Typhoon Bavi location)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E4%BD%8D%E7%BD%AE%23) `2.2M 🔥` `-28%`
1. [迪丽热巴大腿肌踢成巨肌了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A4%A7%E8%85%BF%E8%82%8C%E8%B8%A2%E6%88%90%E5%B7%A8%E8%82%8C%E4%BA%86%23) `663.4K 🔥` `-21%`
1. [微信红包转账有新变化](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%BA%A2%E5%8C%85%E8%BD%AC%E8%B4%A6%E6%9C%89%E6%96%B0%E5%8F%98%E5%8C%96%23) `663.2K 🔥` `-23%`
1. [台风巴威预计12日凌晨登陆 (Typhoon Bavi is expected to make landfall in the early morning of the 12th)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E9%A2%84%E8%AE%A112%E6%97%A5%E5%87%8C%E6%99%A8%E7%99%BB%E9%99%86%23) `630.6K 🔥` `-47%`
1. [建议大家不要失去打扮欲](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%8D%E8%A6%81%E5%A4%B1%E5%8E%BB%E6%89%93%E6%89%AE%E6%AC%B2%23) `554.1K 🔥` `-29%`
1. [万妮达淘汰](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E6%B7%98%E6%B1%B0%23) `369.7K 🔥` `-60%`
1. [A股回落原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%9B%9E%E8%90%BD%E5%8E%9F%E5%9B%A0%23) `205.0K 🔥` `-36%`

Updated at 2026-07-10 23:58:40

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
