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

1. [黄斌公开炮轰罗永浩](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%96%8C%E5%85%AC%E5%BC%80%E7%82%AE%E8%BD%B0%E7%BD%97%E6%B0%B8%E6%B5%A9%23) `223.8K 🔥` `NEW`
1. [脑梗前三天身体发出的预警](https://s.weibo.com/weibo?q=%23%E8%84%91%E6%A2%97%E5%89%8D%E4%B8%89%E5%A4%A9%E8%BA%AB%E4%BD%93%E5%8F%91%E5%87%BA%E7%9A%84%E9%A2%84%E8%AD%A6%23) `163.2K 🔥` `NEW`
1. [网络安全宣传周亮点揭秘](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E5%AE%A3%E4%BC%A0%E5%91%A8%E4%BA%AE%E7%82%B9%E6%8F%AD%E7%A7%98%23) `133.6K 🔥` `NEW`
1. [刘学义郑合惠子 cp感玄学](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%20cp%E6%84%9F%E7%8E%84%E5%AD%A6%23) `114.4K 🔥` `NEW`
1. [我国灵活就业人员规模已超过2亿人](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E4%BA%BA%E5%91%98%E8%A7%84%E6%A8%A1%E5%B7%B2%E8%B6%85%E8%BF%872%E4%BA%BF%E4%BA%BA%23) `76.2K 🔥` `NEW`
1. [鞠婧祎这是拍戏还是蹦极](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%BF%99%E6%98%AF%E6%8B%8D%E6%88%8F%E8%BF%98%E6%98%AF%E8%B9%A6%E6%9E%81%23) `70.1K 🔥` `NEW`
1. [海南大暴雨特大暴雨](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8D%97%E5%A4%A7%E6%9A%B4%E9%9B%A8%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `59.1K 🔥` `NEW`
1. [终于知道为什么有人工作能力这么强](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E4%BA%BA%E5%B7%A5%E4%BD%9C%E8%83%BD%E5%8A%9B%E8%BF%99%E4%B9%88%E5%BC%BA%23) `57.8K 🔥` `NEW`
1. [郑合惠子一出场刘学义都变帅了](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E4%B8%80%E5%87%BA%E5%9C%BA%E5%88%98%E5%AD%A6%E4%B9%89%E9%83%BD%E5%8F%98%E5%B8%85%E4%BA%86%23) `56.7K 🔥` `NEW`
1. [王者S45赛季战令皮肤](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85S45%E8%B5%9B%E5%AD%A3%E6%88%98%E4%BB%A4%E7%9A%AE%E8%82%A4%23) `55.1K 🔥` `NEW`
1. [猕猴桃是全世界最团结的水果](https://s.weibo.com/weibo?q=%23%E7%8C%95%E7%8C%B4%E6%A1%83%E6%98%AF%E5%85%A8%E4%B8%96%E7%95%8C%E6%9C%80%E5%9B%A2%E7%BB%93%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `54.9K 🔥` `NEW`
1. [疑似中国籍教练印尼射杀玳瑁](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E4%B8%AD%E5%9B%BD%E7%B1%8D%E6%95%99%E7%BB%83%E5%8D%B0%E5%B0%BC%E5%B0%84%E6%9D%80%E7%8E%B3%E7%91%81%23) `54.5K 🔥` `NEW`
1. [自称演唱会求婚事件当事人发声](https://s.weibo.com/weibo?q=%23%E8%87%AA%E7%A7%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E6%B1%82%E5%A9%9A%E4%BA%8B%E4%BB%B6%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `54.2K 🔥` `NEW`
1. [女子因7旬老人居住环境脏乱捅其6刀](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A07%E6%97%AC%E8%80%81%E4%BA%BA%E5%B1%85%E4%BD%8F%E7%8E%AF%E5%A2%83%E8%84%8F%E4%B9%B1%E6%8D%85%E5%85%B66%E5%88%80%23) `53.9K 🔥` `NEW`
1. [罗永浩 黄斌](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%20%E9%BB%84%E6%96%8C%23) `53.9K 🔥` `NEW`
1. [人民日报点名三件流量炒作事件](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E7%82%B9%E5%90%8D%E4%B8%89%E4%BB%B6%E6%B5%81%E9%87%8F%E7%82%92%E4%BD%9C%E4%BA%8B%E4%BB%B6%23) `51.9K 🔥` `NEW`
1. [台风杜鹃要来了](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%9D%9C%E9%B9%83%E8%A6%81%E6%9D%A5%E4%BA%86%23) `49.7K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `48.9K 🔥` `NEW`
1. [演唱会求婚为什么越来越招人烦](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E6%B1%82%E5%A9%9A%E4%B8%BA%E4%BB%80%E4%B9%88%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%8B%9B%E4%BA%BA%E7%83%A6%23) `45.6K 🔥` `NEW`
1. [父亲撞死人儿子顶包全家串供](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E6%92%9E%E6%AD%BB%E4%BA%BA%E5%84%BF%E5%AD%90%E9%A1%B6%E5%8C%85%E5%85%A8%E5%AE%B6%E4%B8%B2%E4%BE%9B%23) `44.5K 🔥` `NEW`
1. [面试完才懂关系户有多动人](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E5%AE%8C%E6%89%8D%E6%87%82%E5%85%B3%E7%B3%BB%E6%88%B7%E6%9C%89%E5%A4%9A%E5%8A%A8%E4%BA%BA%23) `44.5K 🔥` `NEW`
1. [苹果回应iPhone18Pro破发](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%9B%9E%E5%BA%94iPhone18Pro%E7%A0%B4%E5%8F%91%23) `44.4K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `44.4K 🔥` `NEW`
1. [年轻人长期熬夜后的精神状态](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E9%95%BF%E6%9C%9F%E7%86%AC%E5%A4%9C%E5%90%8E%E7%9A%84%E7%B2%BE%E7%A5%9E%E7%8A%B6%E6%80%81%23) `44.4K 🔥` `NEW`
1. [不要轻易向任何人输出观点](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%BD%BB%E6%98%93%E5%90%91%E4%BB%BB%E4%BD%95%E4%BA%BA%E8%BE%93%E5%87%BA%E8%A7%82%E7%82%B9%23) `44.4K 🔥` `NEW`
1. [小区售水机的水还敢喝吗](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E5%94%AE%E6%B0%B4%E6%9C%BA%E7%9A%84%E6%B0%B4%E8%BF%98%E6%95%A2%E5%96%9D%E5%90%97%23) `44.4K 🔥` `NEW`
1. [兰香如故热度](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%83%AD%E5%BA%A6%23) `43.0K 🔥` `NEW`
1. [Bin独自训练](https://s.weibo.com/weibo?q=%23Bin%E7%8B%AC%E8%87%AA%E8%AE%AD%E7%BB%83%23) `41.6K 🔥` `NEW`
1. [妈妈吃无碘盐致女儿2岁多不会说话](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%90%83%E6%97%A0%E7%A2%98%E7%9B%90%E8%87%B4%E5%A5%B3%E5%84%BF2%E5%B2%81%E5%A4%9A%E4%B8%8D%E4%BC%9A%E8%AF%B4%E8%AF%9D%23) `41.1K 🔥` `NEW`
1. [井柏然曾被问有没有爱上过对手](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%9B%BE%E8%A2%AB%E9%97%AE%E6%9C%89%E6%B2%A1%E6%9C%89%E7%88%B1%E4%B8%8A%E8%BF%87%E5%AF%B9%E6%89%8B%23) `37.5K 🔥` `NEW`
1. [失业三个月免费烘焙课遇到认真老师](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E4%B8%9A%E4%B8%89%E4%B8%AA%E6%9C%88%E5%85%8D%E8%B4%B9%E7%83%98%E7%84%99%E8%AF%BE%E9%81%87%E5%88%B0%E8%AE%A4%E7%9C%9F%E8%80%81%E5%B8%88%23) `37.5K 🔥` `NEW`
1. [韩国三星食堂的午餐](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%89%E6%98%9F%E9%A3%9F%E5%A0%82%E7%9A%84%E5%8D%88%E9%A4%90%23) `37.5K 🔥` `NEW`
1. [原来洗澡和沐浴真的不一样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B4%97%E6%BE%A1%E5%92%8C%E6%B2%90%E6%B5%B4%E7%9C%9F%E7%9A%84%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `37.2K 🔥` `NEW`
1. [现在AI视频越来越邪门了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8AI%E8%A7%86%E9%A2%91%E8%B6%8A%E6%9D%A5%E8%B6%8A%E9%82%AA%E9%97%A8%E4%BA%86%23) `36.9K 🔥` `NEW`
1. [苹果或推出三款折叠屏手机](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%88%96%E6%8E%A8%E5%87%BA%E4%B8%89%E6%AC%BE%E6%8A%98%E5%8F%A0%E5%B1%8F%E6%89%8B%E6%9C%BA%23) `36.9K 🔥` `NEW`
1. [Fly 狼队](https://s.weibo.com/weibo?q=%23Fly%20%E7%8B%BC%E9%98%9F%23) `36.3K 🔥` `NEW`
1. [谭松韵说兰香和九皋的cp太邪门了](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E8%AF%B4%E5%85%B0%E9%A6%99%E5%92%8C%E4%B9%9D%E7%9A%8B%E7%9A%84cp%E5%A4%AA%E9%82%AA%E9%97%A8%E4%BA%86%23) `34.4K 🔥` `NEW`
1. [广汽 重组](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E6%B1%BD%20%E9%87%8D%E7%BB%84%23) `34.4K 🔥` `NEW`
1. [哪些机型可以升级iOS27](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%BA%9B%E6%9C%BA%E5%9E%8B%E5%8F%AF%E4%BB%A5%E5%8D%87%E7%BA%A7iOS27%23) `34.4K 🔥` `NEW`
1. [英国 分裂](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%20%E5%88%86%E8%A3%82%23) `34.4K 🔥` `NEW`
1. [爱情公寓原来是这么前卫](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%8E%9F%E6%9D%A5%E6%98%AF%E8%BF%99%E4%B9%88%E5%89%8D%E5%8D%AB%23) `34.4K 🔥` `NEW`
1. [未来五年扩招医学本科和硕士](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E6%89%A9%E6%8B%9B%E5%8C%BB%E5%AD%A6%E6%9C%AC%E7%A7%91%E5%92%8C%E7%A1%95%E5%A3%AB%23) `34.4K 🔥` `NEW`
1. [BLG排名被GEN反超](https://s.weibo.com/weibo?q=%23BLG%E6%8E%92%E5%90%8D%E8%A2%ABGEN%E5%8F%8D%E8%B6%85%23) `34.4K 🔥` `NEW`
1. [兰香如故 男主二婚](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%20%E7%94%B7%E4%B8%BB%E4%BA%8C%E5%A9%9A%23) `34.4K 🔥` `NEW`
1. [小胖快闪耍大牌](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%83%96%E5%BF%AB%E9%97%AA%E8%80%8D%E5%A4%A7%E7%89%8C%23) `34.4K 🔥` `NEW`
1. [人这一生最要紧的就是学会跑路](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%BF%99%E4%B8%80%E7%94%9F%E6%9C%80%E8%A6%81%E7%B4%A7%E7%9A%84%E5%B0%B1%E6%98%AF%E5%AD%A6%E4%BC%9A%E8%B7%91%E8%B7%AF%23) `34.4K 🔥` `NEW`
1. [碘缺乏是甲状腺结节的危险因素](https://s.weibo.com/weibo?q=%23%E7%A2%98%E7%BC%BA%E4%B9%8F%E6%98%AF%E7%94%B2%E7%8A%B6%E8%85%BA%E7%BB%93%E8%8A%82%E7%9A%84%E5%8D%B1%E9%99%A9%E5%9B%A0%E7%B4%A0%23) `34.4K 🔥` `NEW`
1. [钟薛高已成老赖](https://s.weibo.com/weibo?q=%23%E9%92%9F%E8%96%9B%E9%AB%98%E5%B7%B2%E6%88%90%E8%80%81%E8%B5%96%23) `34.4K 🔥` `NEW`
1. [乌克兰人向俄军发坐标让轰炸征兵办](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E4%BA%BA%E5%90%91%E4%BF%84%E5%86%9B%E5%8F%91%E5%9D%90%E6%A0%87%E8%AE%A9%E8%BD%B0%E7%82%B8%E5%BE%81%E5%85%B5%E5%8A%9E%23) `34.4K 🔥` `NEW`
1. [莱巴金娜入围年终总决赛](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E5%85%A5%E5%9B%B4%E5%B9%B4%E7%BB%88%E6%80%BB%E5%86%B3%E8%B5%9B%23) `34.4K 🔥` `NEW`

Updated at 2026-09-15 03:06:13

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
