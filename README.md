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

1. [上京东买手机电脑以旧换新低至0元](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%AC%E4%B8%9C%E4%B9%B0%E6%89%8B%E6%9C%BA%E7%94%B5%E8%84%91%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E4%BD%8E%E8%87%B30%E5%85%83%23) `95.9K 🔥` `NEW`
1. [盛艾敬一节舞蹈课50元](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E4%B8%80%E8%8A%82%E8%88%9E%E8%B9%88%E8%AF%BE50%E5%85%83%23) `64.8K 🔥` `NEW`
1. [全红婵扎起小辫跳手指舞](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E6%89%8E%E8%B5%B7%E5%B0%8F%E8%BE%AB%E8%B7%B3%E6%89%8B%E6%8C%87%E8%88%9E%23) `52.9K 🔥` `NEW`
1. [怕被闻到躲楼道吃芒果](https://s.weibo.com/weibo?q=%23%E6%80%95%E8%A2%AB%E9%97%BB%E5%88%B0%E8%BA%B2%E6%A5%BC%E9%81%93%E5%90%83%E8%8A%92%E6%9E%9C%23) `52.6K 🔥` `NEW`
1. [小白 阿策](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%99%BD%20%E9%98%BF%E7%AD%96%23) `52.6K 🔥` `NEW`
1. [我们的社会只筛选不培养](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E7%A4%BE%E4%BC%9A%E5%8F%AA%E7%AD%9B%E9%80%89%E4%B8%8D%E5%9F%B9%E5%85%BB%23) `52.2K 🔥` `NEW`
1. [小米SU9LUX商标公告](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3SU9LUX%E5%95%86%E6%A0%87%E5%85%AC%E5%91%8A%23) `52.2K 🔥` `NEW`
1. [李昀锐和孟子义坐同辆高铁去录节目](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%92%8C%E5%AD%9F%E5%AD%90%E4%B9%89%E5%9D%90%E5%90%8C%E8%BE%86%E9%AB%98%E9%93%81%E5%8E%BB%E5%BD%95%E8%8A%82%E7%9B%AE%23) `51.9K 🔥` `NEW`
1. [原本想说韩国人为啥大惊小怪的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9C%AC%E6%83%B3%E8%AF%B4%E9%9F%A9%E5%9B%BD%E4%BA%BA%E4%B8%BA%E5%95%A5%E5%A4%A7%E6%83%8A%E5%B0%8F%E6%80%AA%E7%9A%84%23) `51.8K 🔥` `NEW`
1. [全红婵长成大姑娘了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E9%95%BF%E6%88%90%E5%A4%A7%E5%A7%91%E5%A8%98%E4%BA%86%23) `51.3K 🔥` `NEW`
1. [巴黎Celine精品店遭到了洗劫](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8ECeline%E7%B2%BE%E5%93%81%E5%BA%97%E9%81%AD%E5%88%B0%E4%BA%86%E6%B4%97%E5%8A%AB%23) `51.3K 🔥` `NEW`
1. [网红王扁摆摊被打](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%8E%8B%E6%89%81%E6%91%86%E6%91%8A%E8%A2%AB%E6%89%93%23) `45.0K 🔥` `NEW`
1. [大家都问薪无愧](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AE%B6%E9%83%BD%E9%97%AE%E8%96%AA%E6%97%A0%E6%84%A7%23) `44.5K 🔥` `NEW`
1. [2026KPL年总选队仪式](https://s.weibo.com/weibo?q=%232026KPL%E5%B9%B4%E6%80%BB%E9%80%89%E9%98%9F%E4%BB%AA%E5%BC%8F%23) `43.1K 🔥` `NEW`
1. [孕妇被快递员找上门吓到先兆流产](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E8%A2%AB%E5%BF%AB%E9%80%92%E5%91%98%E6%89%BE%E4%B8%8A%E9%97%A8%E5%90%93%E5%88%B0%E5%85%88%E5%85%86%E6%B5%81%E4%BA%A7%23) `42.2K 🔥` `NEW`
1. [AI剧真实到几乎可以替代演员](https://s.weibo.com/weibo?q=%23AI%E5%89%A7%E7%9C%9F%E5%AE%9E%E5%88%B0%E5%87%A0%E4%B9%8E%E5%8F%AF%E4%BB%A5%E6%9B%BF%E4%BB%A3%E6%BC%94%E5%91%98%23) `95.3K 🔥`
1. [日本出现取消吃饭现象](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%87%BA%E7%8E%B0%E5%8F%96%E6%B6%88%E5%90%83%E9%A5%AD%E7%8E%B0%E8%B1%A1%23) `200.9K 🔥` `-81%`
1. [白桃星座](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%23) `109.9K 🔥` `-79%`
1. [广交会AI新品热度拉满](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9AAI%E6%96%B0%E5%93%81%E7%83%AD%E5%BA%A6%E6%8B%89%E6%BB%A1%23) `96.0K 🔥` `-82%`
1. [黄磊带着黄多多交际一开口落落大方](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E5%B8%A6%E7%9D%80%E9%BB%84%E5%A4%9A%E5%A4%9A%E4%BA%A4%E9%99%85%E4%B8%80%E5%BC%80%E5%8F%A3%E8%90%BD%E8%90%BD%E5%A4%A7%E6%96%B9%23) `95.7K 🔥` `-82%`
1. [盛艾敬哭了](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E5%93%AD%E4%BA%86%23) `94.9K 🔥` `-68%`
1. [曝白宇疑似当爸爸了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E5%AE%87%E7%96%91%E4%BC%BC%E5%BD%93%E7%88%B8%E7%88%B8%E4%BA%86%23) `94.9K 🔥` `-69%`
1. [恐惧冷漠精致利己的尖子生](https://s.weibo.com/weibo?q=%23%E6%81%90%E6%83%A7%E5%86%B7%E6%BC%A0%E7%B2%BE%E8%87%B4%E5%88%A9%E5%B7%B1%E7%9A%84%E5%B0%96%E5%AD%90%E7%94%9F%23) `94.1K 🔥` `-86%`
1. [莫大披旭日旗留学生早有劣迹](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%A4%A7%E6%8A%AB%E6%97%AD%E6%97%A5%E6%97%97%E7%95%99%E5%AD%A6%E7%94%9F%E6%97%A9%E6%9C%89%E5%8A%A3%E8%BF%B9%23) `75.3K 🔥` `-75%`
1. [民警回应男子服刑期间转走其1.9万](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E6%9C%8D%E5%88%91%E6%9C%9F%E9%97%B4%E8%BD%AC%E8%B5%B0%E5%85%B61.9%E4%B8%87%23) `66.0K 🔥` `-40%`
1. [曝张雅钦疑似怀孕](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E9%9B%85%E9%92%A6%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%23) `65.9K 🔥` `-78%`
1. [难怪我拿不到像徐艺洋这样的大结果](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E6%88%91%E6%8B%BF%E4%B8%8D%E5%88%B0%E5%83%8F%E5%BE%90%E8%89%BA%E6%B4%8B%E8%BF%99%E6%A0%B7%E7%9A%84%E5%A4%A7%E7%BB%93%E6%9E%9C%23) `65.9K 🔥` `-45%`
1. [梅艳芳骨灰或流向东南亚](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%89%B3%E8%8A%B3%E9%AA%A8%E7%81%B0%E6%88%96%E6%B5%81%E5%90%91%E4%B8%9C%E5%8D%97%E4%BA%9A%23) `65.7K 🔥` `-78%`
1. [中国女留学生英国遇害案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%95%99%E5%AD%A6%E7%94%9F%E8%8B%B1%E5%9B%BD%E9%81%87%E5%AE%B3%E6%A1%88%23) `65.5K 🔥` `-78%`
1. [法国民众这次真急了](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%B0%91%E4%BC%97%E8%BF%99%E6%AC%A1%E7%9C%9F%E6%80%A5%E4%BA%86%23) `65.3K 🔥` `-82%`
1. [鹿晗舞台摔倒](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%88%9E%E5%8F%B0%E6%91%94%E5%80%92%23) `63.5K 🔥` `-78%`
1. [尔冬升曝男演员曾投诉男导演性骚扰](https://s.weibo.com/weibo?q=%23%E5%B0%94%E5%86%AC%E5%8D%87%E6%9B%9D%E7%94%B7%E6%BC%94%E5%91%98%E6%9B%BE%E6%8A%95%E8%AF%89%E7%94%B7%E5%AF%BC%E6%BC%94%E6%80%A7%E9%AA%9A%E6%89%B0%23) `62.5K 🔥` `-71%`
1. [神父弥撒时被十字架砸中身亡](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E7%88%B6%E5%BC%A5%E6%92%92%E6%97%B6%E8%A2%AB%E5%8D%81%E5%AD%97%E6%9E%B6%E7%A0%B8%E4%B8%AD%E8%BA%AB%E4%BA%A1%23) `60.4K 🔥` `-80%`
1. [中国式旅游已经被玩成固定模板](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%8F%E6%97%85%E6%B8%B8%E5%B7%B2%E7%BB%8F%E8%A2%AB%E7%8E%A9%E6%88%90%E5%9B%BA%E5%AE%9A%E6%A8%A1%E6%9D%BF%23) `60.2K 🔥` `-72%`
1. [原来这样的家庭真的存在啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%A0%B7%E7%9A%84%E5%AE%B6%E5%BA%AD%E7%9C%9F%E7%9A%84%E5%AD%98%E5%9C%A8%E5%95%8A%23) `60.1K 🔥` `-63%`
1. [网友推算徐艺洋孕期时间线](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8E%A8%E7%AE%97%E5%BE%90%E8%89%BA%E6%B4%8B%E5%AD%95%E6%9C%9F%E6%97%B6%E9%97%B4%E7%BA%BF%23) `60.1K 🔥` `-72%`
1. [狼队选DYG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E9%80%89DYG%23) `59.5K 🔥` `-71%`
1. [乳癌患者自述确诊前身体异常](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E7%99%8C%E6%82%A3%E8%80%85%E8%87%AA%E8%BF%B0%E7%A1%AE%E8%AF%8A%E5%89%8D%E8%BA%AB%E4%BD%93%E5%BC%82%E5%B8%B8%23) `59.1K 🔥` `-52%`
1. [盛艾敬母亲员工还去学校接爱敬放学](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E6%AF%8D%E4%BA%B2%E5%91%98%E5%B7%A5%E8%BF%98%E5%8E%BB%E5%AD%A6%E6%A0%A1%E6%8E%A5%E7%88%B1%E6%95%AC%E6%94%BE%E5%AD%A6%23) `56.9K 🔥` `-70%`
1. [在梅边](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%A2%85%E8%BE%B9%23) `54.7K 🔥` `-83%`
1. [Angelababy回应被说显老](https://s.weibo.com/weibo?q=%23Angelababy%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%AF%B4%E6%98%BE%E8%80%81%23) `52.9K 🔥` `-78%`
1. [特朗普呼吁法国关闭边境](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%91%BC%E5%90%81%E6%B3%95%E5%9B%BD%E5%85%B3%E9%97%AD%E8%BE%B9%E5%A2%83%23) `51.6K 🔥` `-64%`
1. [张雪机车德比斯年度亚军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%BE%B7%E6%AF%94%E6%96%AF%E5%B9%B4%E5%BA%A6%E4%BA%9A%E5%86%9B%23) `51.3K 🔥` `-60%`
1. [网传王一博明年演唱会](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%98%8E%E5%B9%B4%E6%BC%94%E5%94%B1%E4%BC%9A%23) `51.2K 🔥` `-60%`
1. [嫁金钗魏娆认亲被拒](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E9%AD%8F%E5%A8%86%E8%AE%A4%E4%BA%B2%E8%A2%AB%E6%8B%92%23) `47.5K 🔥` `-62%`
1. [郑钦文结束2026赛季](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%BB%93%E6%9D%9F2026%E8%B5%9B%E5%AD%A3%23) `46.5K 🔥` `-79%`
1. [刘丁硕说樊振东都不会正眼看我一眼](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E8%AF%B4%E6%A8%8A%E6%8C%AF%E4%B8%9C%E9%83%BD%E4%B8%8D%E4%BC%9A%E6%AD%A3%E7%9C%BC%E7%9C%8B%E6%88%91%E4%B8%80%E7%9C%BC%23) `46.5K 🔥` `-84%`
1. [S16抽签预测](https://s.weibo.com/weibo?q=%23S16%E6%8A%BD%E7%AD%BE%E9%A2%84%E6%B5%8B%23) `41.9K 🔥` `-70%`
1. [吴奇隆在步步惊心等戏的间歇自己练功](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%A5%87%E9%9A%86%E5%9C%A8%E6%AD%A5%E6%AD%A5%E6%83%8A%E5%BF%83%E7%AD%89%E6%88%8F%E7%9A%84%E9%97%B4%E6%AD%87%E8%87%AA%E5%B7%B1%E7%BB%83%E5%8A%9F%23) `39.1K 🔥` `-81%`

Updated at 2026-10-19 02:54:19

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
