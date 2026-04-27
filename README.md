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

1. [上海迪士尼男子被劝烟殴打劝烟者 (A Shanghai Disney man was beaten up after being persuaded to smoke.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%AA%E5%A3%AB%E5%B0%BC%E7%94%B7%E5%AD%90%E8%A2%AB%E5%8A%9D%E7%83%9F%E6%AE%B4%E6%89%93%E5%8A%9D%E7%83%9F%E8%80%85%23) `1.5M 🔥` `NEW`
1. [马龙送国乒出征](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E9%80%81%E5%9B%BD%E4%B9%92%E5%87%BA%E5%BE%81%23) `938.4K 🔥` `NEW`
1. [醋酸美甲](https://s.weibo.com/weibo?q=%23%E9%86%8B%E9%85%B8%E7%BE%8E%E7%94%B2%23) `803.6K 🔥` `NEW`
1. [卢昱晓方确认演恰逢雨连天](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E6%96%B9%E7%A1%AE%E8%AE%A4%E6%BC%94%E6%81%B0%E9%80%A2%E9%9B%A8%E8%BF%9E%E5%A4%A9%23) `736.6K 🔥` `NEW`
1. [火箭湖人赛后一片混乱](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%AD%E6%B9%96%E4%BA%BA%E8%B5%9B%E5%90%8E%E4%B8%80%E7%89%87%E6%B7%B7%E4%B9%B1%23) `521.5K 🔥` `NEW`
1. [王者芈月联动新皮肤敖闰](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8A%88%E6%9C%88%E8%81%94%E5%8A%A8%E6%96%B0%E7%9A%AE%E8%82%A4%E6%95%96%E9%97%B0%23) `512.0K 🔥` `NEW`
1. [南方人为什么执着于通风](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E6%89%A7%E7%9D%80%E4%BA%8E%E9%80%9A%E9%A3%8E%23) `351.5K 🔥` `NEW`
1. [上海迪士尼回应游客劝阻吸烟被打](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%9B%9E%E5%BA%94%E6%B8%B8%E5%AE%A2%E5%8A%9D%E9%98%BB%E5%90%B8%E7%83%9F%E8%A2%AB%E6%89%93%23) `344.2K 🔥` `NEW`
1. [黄杨钿甜首次回应耳环风波](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%9D%A8%E9%92%BF%E7%94%9C%E9%A6%96%E6%AC%A1%E5%9B%9E%E5%BA%94%E8%80%B3%E7%8E%AF%E9%A3%8E%E6%B3%A2%23) `343.8K 🔥` `NEW`
1. [平台明确不要的艺人](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E6%98%8E%E7%A1%AE%E4%B8%8D%E8%A6%81%E7%9A%84%E8%89%BA%E4%BA%BA%23) `343.4K 🔥` `NEW`
1. [国乒男女队拍摄出征合影 (The national table tennis men's and women's teams took group photos on their expedition)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%A5%B3%E9%98%9F%E6%8B%8D%E6%91%84%E5%87%BA%E5%BE%81%E5%90%88%E5%BD%B1%23) `341.4K 🔥` `NEW`
1. [恰逢雨连天](https://s.weibo.com/weibo?q=%23%E6%81%B0%E9%80%A2%E9%9B%A8%E8%BF%9E%E5%A4%A9%23) `329.2K 🔥` `NEW`
1. [曝易梦玲整容](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%98%93%E6%A2%A6%E7%8E%B2%E6%95%B4%E5%AE%B9%23) `326.0K 🔥` `NEW`
1. [主播离职3天前俞敏洪说他们在休假](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E7%A6%BB%E8%81%8C3%E5%A4%A9%E5%89%8D%E4%BF%9E%E6%95%8F%E6%B4%AA%E8%AF%B4%E4%BB%96%E4%BB%AC%E5%9C%A8%E4%BC%91%E5%81%87%23) `321.9K 🔥` `NEW`
1. [曝演员片酬已经跌到低点](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%BC%94%E5%91%98%E7%89%87%E9%85%AC%E5%B7%B2%E7%BB%8F%E8%B7%8C%E5%88%B0%E4%BD%8E%E7%82%B9%23) `319.0K 🔥` `NEW`
1. [买纸巾得多个心眼](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%BA%B8%E5%B7%BE%E5%BE%97%E5%A4%9A%E4%B8%AA%E5%BF%83%E7%9C%BC%23) `312.0K 🔥` `NEW`
1. [轰炸中伊朗国宝来到中国](https://s.weibo.com/weibo?q=%23%E8%BD%B0%E7%82%B8%E4%B8%AD%E4%BC%8A%E6%9C%97%E5%9B%BD%E5%AE%9D%E6%9D%A5%E5%88%B0%E4%B8%AD%E5%9B%BD%23) `278.2K 🔥` `NEW`
1. [曝90生不止四部剧没过会](https://s.weibo.com/weibo?q=%23%E6%9B%9D90%E7%94%9F%E4%B8%8D%E6%AD%A2%E5%9B%9B%E9%83%A8%E5%89%A7%E6%B2%A1%E8%BF%87%E4%BC%9A%23) `276.1K 🔥` `NEW`
1. [林志玲抱4岁儿子吃早餐](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E7%8E%B2%E6%8A%B14%E5%B2%81%E5%84%BF%E5%AD%90%E5%90%83%E6%97%A9%E9%A4%90%23) `274.0K 🔥` `NEW`
1. [被我爸的道歉方式震惊了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%88%91%E7%88%B8%E7%9A%84%E9%81%93%E6%AD%89%E6%96%B9%E5%BC%8F%E9%9C%87%E6%83%8A%E4%BA%86%23) `269.8K 🔥` `NEW`
1. [马思纯拍过尺度最大的亲密戏 (The largest intimate scene Ma Sichun has ever filmed)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E6%8B%8D%E8%BF%87%E5%B0%BA%E5%BA%A6%E6%9C%80%E5%A4%A7%E7%9A%84%E4%BA%B2%E5%AF%86%E6%88%8F%23) `255.4K 🔥` `NEW`
1. [艾顿被驱逐](https://s.weibo.com/weibo?q=%23%E8%89%BE%E9%A1%BF%E8%A2%AB%E9%A9%B1%E9%80%90%23) `252.8K 🔥` `NEW`
1. [电费比房租还高](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%B4%B9%E6%AF%94%E6%88%BF%E7%A7%9F%E8%BF%98%E9%AB%98%23) `248.8K 🔥` `NEW`
1. [恋与深空爱浴卡](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E7%88%B1%E6%B5%B4%E5%8D%A1%23) `248.7K 🔥` `NEW`
1. [马伯骞弟弟婚礼](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%AF%E9%AA%9E%E5%BC%9F%E5%BC%9F%E5%A9%9A%E7%A4%BC%23) `248.4K 🔥` `NEW`
1. [恋与深空 偷跑](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E5%81%B7%E8%B7%91%23) `243.2K 🔥` `NEW`
1. [马頔抱李纯鬼鬼祟祟](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E6%8A%B1%E6%9D%8E%E7%BA%AF%E9%AC%BC%E9%AC%BC%E7%A5%9F%E7%A5%9F%23) `231.2K 🔥` `NEW`
1. [只有美术生才能懂得这个含金量](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E7%BE%8E%E6%9C%AF%E7%94%9F%E6%89%8D%E8%83%BD%E6%87%82%E5%BE%97%E8%BF%99%E4%B8%AA%E5%90%AB%E9%87%91%E9%87%8F%23) `230.8K 🔥` `NEW`
1. [孙怡眼前一黑又一黑吧](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9C%BC%E5%89%8D%E4%B8%80%E9%BB%91%E5%8F%88%E4%B8%80%E9%BB%91%E5%90%A7%23) `207.8K 🔥` `NEW`
1. [小罗伯特肯尼迪被拍到抛下妻子逃走](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%BD%97%E4%BC%AF%E7%89%B9%E8%82%AF%E5%B0%BC%E8%BF%AA%E8%A2%AB%E6%8B%8D%E5%88%B0%E6%8A%9B%E4%B8%8B%E5%A6%BB%E5%AD%90%E9%80%83%E8%B5%B0%23) `205.7K 🔥` `NEW`
1. [离家近工资低vs离家远工资高 (Low wages near home vs high wages far away from home)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%AE%B6%E8%BF%91%E5%B7%A5%E8%B5%84%E4%BD%8Evs%E7%A6%BB%E5%AE%B6%E8%BF%9C%E5%B7%A5%E8%B5%84%E9%AB%98%23) `204.6K 🔥` `NEW`
1. [小米玄戒O1芯片已出货超100万颗](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%8E%84%E6%88%92O1%E8%8A%AF%E7%89%87%E5%B7%B2%E5%87%BA%E8%B4%A7%E8%B6%85100%E4%B8%87%E9%A2%97%23) `200.4K 🔥` `NEW`
1. [大批用户申请退出东方甄选会员](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%89%B9%E7%94%A8%E6%88%B7%E7%94%B3%E8%AF%B7%E9%80%80%E5%87%BA%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E4%BC%9A%E5%91%98%23) `181.0K 🔥` `NEW`
1. [每代人有每代人的三大件](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%BB%A3%E4%BA%BA%E6%9C%89%E6%AF%8F%E4%BB%A3%E4%BA%BA%E7%9A%84%E4%B8%89%E5%A4%A7%E4%BB%B6%23) `180.5K 🔥` `NEW`
1. [包贝尔女儿六年过去还喜欢李现](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%A5%B3%E5%84%BF%E5%85%AD%E5%B9%B4%E8%BF%87%E5%8E%BB%E8%BF%98%E5%96%9C%E6%AC%A2%E6%9D%8E%E7%8E%B0%23) `180.2K 🔥` `NEW`
1. [5200亿CPO概念龙头触及涨停](https://s.weibo.com/weibo?q=%235200%E4%BA%BFCPO%E6%A6%82%E5%BF%B5%E9%BE%99%E5%A4%B4%E8%A7%A6%E5%8F%8A%E6%B6%A8%E5%81%9C%23) `180.0K 🔥` `NEW`
1. [小红书客服回应俞浩怒批小红书](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%BA%A2%E4%B9%A6%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E4%BF%9E%E6%B5%A9%E6%80%92%E6%89%B9%E5%B0%8F%E7%BA%A2%E4%B9%A6%23) `179.6K 🔥` `NEW`
1. [李想称理想L9领先大众9X两代](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%83%B3%E7%A7%B0%E7%90%86%E6%83%B3L9%E9%A2%86%E5%85%88%E5%A4%A7%E4%BC%979X%E4%B8%A4%E4%BB%A3%23) `179.3K 🔥` `NEW`
1. [丁禹兮尔木萄全球品牌代言人 (Ding Yuxi Ermutao global brand spokesperson)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%B0%94%E6%9C%A8%E8%90%84%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `517.9K 🔥` `+81%`
1. [五一叠加春假加出文旅消费新活力](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%8F%A0%E5%8A%A0%E6%98%A5%E5%81%87%E5%8A%A0%E5%87%BA%E6%96%87%E6%97%85%E6%B6%88%E8%B4%B9%E6%96%B0%E6%B4%BB%E5%8A%9B%23) `806.2K 🔥`
1. [陆毅因嘴巴紫去医院做了大检查 (Lu Yi went to the hospital for a major check-up because of his purple mouth.)](https://s.weibo.com/weibo?q=%23%E9%99%86%E6%AF%85%E5%9B%A0%E5%98%B4%E5%B7%B4%E7%B4%AB%E5%8E%BB%E5%8C%BB%E9%99%A2%E5%81%9A%E4%BA%86%E5%A4%A7%E6%A3%80%E6%9F%A5%23) `314.8K 🔥`
1. [唐艺昕情商](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E6%83%85%E5%95%86%23) `258.2K 🔥`
1. [身份证照片千万不要直接发 (Never send ID photos directly)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E7%85%A7%E7%89%87%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%9B%B4%E6%8E%A5%E5%8F%91%23) `231.6K 🔥`
1. [东方甄选拒绝第二个董宇辉 (Oriental Selection rejects second Dong Yuhui)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%8B%92%E7%BB%9D%E7%AC%AC%E4%BA%8C%E4%B8%AA%E8%91%A3%E5%AE%87%E8%BE%89%23) `414.8K 🔥` `-65%`
1. [安静公主掉美颜](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%9D%99%E5%85%AC%E4%B8%BB%E6%8E%89%E7%BE%8E%E9%A2%9C%23) `265.5K 🔥` `-22%`
1. [讨好型人格请反复阅读](https://s.weibo.com/weibo?q=%23%E8%AE%A8%E5%A5%BD%E5%9E%8B%E4%BA%BA%E6%A0%BC%E8%AF%B7%E5%8F%8D%E5%A4%8D%E9%98%85%E8%AF%BB%23) `257.8K 🔥` `-68%`
1. [湖人vs火箭](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BAvs%E7%81%AB%E7%AE%AD%23) `252.1K 🔥` `-30%`
1. [追觅俞浩怒批小红书](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E4%BF%9E%E6%B5%A9%E6%80%92%E6%89%B9%E5%B0%8F%E7%BA%A2%E4%B9%A6%23) `252.0K 🔥` `-71%`
1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `224.4K 🔥` `-37%`
1. [原来百家讲坛是真的在教东西](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%99%BE%E5%AE%B6%E8%AE%B2%E5%9D%9B%E6%98%AF%E7%9C%9F%E7%9A%84%E5%9C%A8%E6%95%99%E4%B8%9C%E8%A5%BF%23) `179.0K 🔥` `-25%`
1. [连续两周上四休三 (Two weeks in a row, four days off and three days off)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%91%A8%E4%B8%8A%E5%9B%9B%E4%BC%91%E4%B8%89%23) `178.8K 🔥` `-55%`

Updated at 2026-04-27 14:16:35

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
