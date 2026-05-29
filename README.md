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

1. [京东手机数码618狂撒补贴直降15% (Jingdong Mobile Digital 618 wildly reduces subsidies by 15%)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%89%8B%E6%9C%BA%E6%95%B0%E7%A0%81618%E7%8B%82%E6%92%92%E8%A1%A5%E8%B4%B4%E7%9B%B4%E9%99%8D15%25%23) `76.5K 🔥` `NEW`
1. [百店发支付宝助威袋为南京队加油](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%BA%97%E5%8F%91%E6%94%AF%E4%BB%98%E5%AE%9D%E5%8A%A9%E5%A8%81%E8%A2%8B%E4%B8%BA%E5%8D%97%E4%BA%AC%E9%98%9F%E5%8A%A0%E6%B2%B9%23) `75.5K 🔥` `NEW`
1. [有没有体面一点的防盗方式](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BD%93%E9%9D%A2%E4%B8%80%E7%82%B9%E7%9A%84%E9%98%B2%E7%9B%97%E6%96%B9%E5%BC%8F%23) `38.4K 🔥` `NEW`
1. [歌手直播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `35.3K 🔥` `NEW`
1. [王力宏演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E6%BC%94%E5%94%B1%E4%BC%9A%23) `35.3K 🔥` `NEW`
1. [齐豫连续两周第一](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%B1%AB%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%91%A8%E7%AC%AC%E4%B8%80%23) `35.2K 🔥` `NEW`
1. [歌手第三期帮唱嘉宾信息](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%B8%89%E6%9C%9F%E5%B8%AE%E5%94%B1%E5%98%89%E5%AE%BE%E4%BF%A1%E6%81%AF%23) `221.8K 🔥`
1. [饿着入睡对胃肠更好吗](https://s.weibo.com/weibo?q=%23%E9%A5%BF%E7%9D%80%E5%85%A5%E7%9D%A1%E5%AF%B9%E8%83%83%E8%82%A0%E6%9B%B4%E5%A5%BD%E5%90%97%23) `85.4K 🔥` `-63%`
1. [又一大国重器硬核刷屏](https://s.weibo.com/weibo?q=%23%E5%8F%88%E4%B8%80%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E7%A1%AC%E6%A0%B8%E5%88%B7%E5%B1%8F%23) `76.5K 🔥` `-67%`
1. [单依纯含金量](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%90%AB%E9%87%91%E9%87%8F%23) `76.5K 🔥` `-67%`
1. [耳帝 歌手第二期非常糟糕 (The second issue of Erdi Singer is very bad)](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%20%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%BA%8C%E6%9C%9F%E9%9D%9E%E5%B8%B8%E7%B3%9F%E7%B3%95%23) `76.5K 🔥` `-67%`
1. [重新定义一户一梯](https://s.weibo.com/weibo?q=%23%E9%87%8D%E6%96%B0%E5%AE%9A%E4%B9%89%E4%B8%80%E6%88%B7%E4%B8%80%E6%A2%AF%23) `76.5K 🔥` `-66%`
1. [歌手 倒数第一竞争激烈](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%E7%AB%9E%E4%BA%89%E6%BF%80%E7%83%88%23) `69.2K 🔥` `-68%`
1. [VOGUE晚宴](https://s.weibo.com/weibo?q=%23VOGUE%E6%99%9A%E5%AE%B4%23) `68.8K 🔥` `-81%`
1. [一家四口有限责任公司](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8%23) `68.4K 🔥` `-70%`
1. [德约科维奇vs丰塞卡](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87vs%E4%B8%B0%E5%A1%9E%E5%8D%A1%23) `68.3K 🔥` `-55%`
1. [范丞丞问第三名怎么你了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E9%97%AE%E7%AC%AC%E4%B8%89%E5%90%8D%E6%80%8E%E4%B9%88%E4%BD%A0%E4%BA%86%23) `67.8K 🔥` `-69%`
1. [白鹿李晨郑恺复宣跑男](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E5%A4%8D%E5%AE%A3%E8%B7%91%E7%94%B7%23) `67.1K 🔥` `-70%`
1. [广东不愧是祖宗严选发配地](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%B8%8D%E6%84%A7%E6%98%AF%E7%A5%96%E5%AE%97%E4%B8%A5%E9%80%89%E5%8F%91%E9%85%8D%E5%9C%B0%23) `66.5K 🔥` `-69%`
1. [刘红兵为了忆秦娥跳楼](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BA%A2%E5%85%B5%E4%B8%BA%E4%BA%86%E5%BF%86%E7%A7%A6%E5%A8%A5%E8%B7%B3%E6%A5%BC%23) `66.5K 🔥` `-66%`
1. [曾沛慈 我觉得不是恶剪 (Zeng Peici, I don’t think it’s a bad cut)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E6%88%91%E8%A7%89%E5%BE%97%E4%B8%8D%E6%98%AF%E6%81%B6%E5%89%AA%23) `62.6K 🔥` `-63%`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `56.1K 🔥` `-90%`
1. [白鹿回复于正于老师](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E4%BA%8E%E6%AD%A3%E4%BA%8E%E8%80%81%E5%B8%88%23) `55.9K 🔥` `-74%`
1. [英雄联盟CN缺席亚运会](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9FCN%E7%BC%BA%E5%B8%AD%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `47.1K 🔥` `-69%`
1. [江浙沪的雨都快把人逼成大文豪了 (The rain in Jiangsu, Zhejiang and Shanghai is almost turning people into great writers)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B5%99%E6%B2%AA%E7%9A%84%E9%9B%A8%E9%83%BD%E5%BF%AB%E6%8A%8A%E4%BA%BA%E9%80%BC%E6%88%90%E5%A4%A7%E6%96%87%E8%B1%AA%E4%BA%86%23) `47.1K 🔥` `-75%`
1. [老人开空调一晚高烧3天肺白大半](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%BC%80%E7%A9%BA%E8%B0%83%E4%B8%80%E6%99%9A%E9%AB%98%E7%83%A73%E5%A4%A9%E8%82%BA%E7%99%BD%E5%A4%A7%E5%8D%8A%23) `47.1K 🔥` `-75%`
1. [窦靖童完全王菲](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%AE%8C%E5%85%A8%E7%8E%8B%E8%8F%B2%23) `47.0K 🔥` `-78%`
1. [VOGUE审美 (VOGUE aesthetic)](https://s.weibo.com/weibo?q=%23VOGUE%E5%AE%A1%E7%BE%8E%23) `45.2K 🔥` `-80%`
1. [魏如萱淘汰](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E6%B7%98%E6%B1%B0%23) `44.2K 🔥` `-77%`
1. [王濛刘雨昕大师课续费了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%88%98%E9%9B%A8%E6%98%95%E5%A4%A7%E5%B8%88%E8%AF%BE%E7%BB%AD%E8%B4%B9%E4%BA%86%23) `44.1K 🔥` `-71%`
1. [39岁博主被虫咬后感染离世](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E5%8D%9A%E4%B8%BB%E8%A2%AB%E8%99%AB%E5%92%AC%E5%90%8E%E6%84%9F%E6%9F%93%E7%A6%BB%E4%B8%96%23) `43.3K 🔥` `-72%`
1. [人在做坏事的时候真的不觉得累](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%9C%A8%E5%81%9A%E5%9D%8F%E4%BA%8B%E7%9A%84%E6%97%B6%E5%80%99%E7%9C%9F%E7%9A%84%E4%B8%8D%E8%A7%89%E5%BE%97%E7%B4%AF%23) `41.3K 🔥` `-73%`
1. [父母姐姐身亡12岁孩子被叔侵占140万](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%A7%90%E5%A7%90%E8%BA%AB%E4%BA%A112%E5%B2%81%E5%AD%A9%E5%AD%90%E8%A2%AB%E5%8F%94%E4%BE%B5%E5%8D%A0140%E4%B8%87%23) `41.0K 🔥` `-78%`
1. [张雪机车回应排位赛第二 (Zhang Xue motorcycle responds to second place in qualifying)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%9B%9E%E5%BA%94%E6%8E%92%E4%BD%8D%E8%B5%9B%E7%AC%AC%E4%BA%8C%23) `40.4K 🔥` `-73%`
1. [神22飞船返回舱着陆](https://s.weibo.com/weibo?q=%23%E7%A5%9E22%E9%A3%9E%E8%88%B9%E8%BF%94%E5%9B%9E%E8%88%B1%E7%9D%80%E9%99%86%23) `40.0K 🔥` `-74%`
1. [神21乘组出舱 (Shen-21 crew exits cabin)](https://s.weibo.com/weibo?q=%23%E7%A5%9E21%E4%B9%98%E7%BB%84%E5%87%BA%E8%88%B1%23) `39.4K 🔥` `-74%`
1. [RW 归期](https://s.weibo.com/weibo?q=%23RW%20%E5%BD%92%E6%9C%9F%23) `39.3K 🔥` `-79%`
1. [魏如萱回应淘汰](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E5%9B%9E%E5%BA%94%E6%B7%98%E6%B1%B0%23) `35.3K 🔥` `-76%`
1. [情侣相约自杀1人身亡1人获刑](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E7%9B%B8%E7%BA%A6%E8%87%AA%E6%9D%801%E4%BA%BA%E8%BA%AB%E4%BA%A11%E4%BA%BA%E8%8E%B7%E5%88%91%23) `35.3K 🔥` `-76%`
1. [AG 陈穿](https://s.weibo.com/weibo?q=%23AG%20%E9%99%88%E7%A9%BF%23) `35.3K 🔥` `-76%`
1. [歌手和声](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%92%8C%E5%A3%B0%23) `35.3K 🔥` `-76%`
1. [LOL亚运预选赛名单公布](https://s.weibo.com/weibo?q=%23LOL%E4%BA%9A%E8%BF%90%E9%A2%84%E9%80%89%E8%B5%9B%E5%90%8D%E5%8D%95%E5%85%AC%E5%B8%83%23) `35.3K 🔥` `-76%`
1. [爱上窦靖童是人之常情](https://s.weibo.com/weibo?q=%23%E7%88%B1%E4%B8%8A%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%98%AF%E4%BA%BA%E4%B9%8B%E5%B8%B8%E6%83%85%23) `35.3K 🔥` `-76%`
1. [李小冉去歌手能进前三](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8E%BB%E6%AD%8C%E6%89%8B%E8%83%BD%E8%BF%9B%E5%89%8D%E4%B8%89%23) `35.3K 🔥` `-76%`
1. [斗罗2唐三回归 (Douluo 2 Tang San returns)](https://s.weibo.com/weibo?q=%23%E6%96%97%E7%BD%972%E5%94%90%E4%B8%89%E5%9B%9E%E5%BD%92%23) `35.3K 🔥` `-77%`
1. [印度政府警告宝莱坞](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%94%BF%E5%BA%9C%E8%AD%A6%E5%91%8A%E5%AE%9D%E8%8E%B1%E5%9D%9E%23) `35.3K 🔥` `-77%`
1. [VOGUE红毯直播 (VOGUE red carpet live broadcast)](https://s.weibo.com/weibo?q=%23VOGUE%E7%BA%A2%E6%AF%AF%E7%9B%B4%E6%92%AD%23) `35.3K 🔥` `-76%`
1. [李小冉去歌手了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8E%BB%E6%AD%8C%E6%89%8B%E4%BA%86%23) `35.3K 🔥` `-77%`
1. [胡彦斌改编修炼爱情](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E6%94%B9%E7%BC%96%E4%BF%AE%E7%82%BC%E7%88%B1%E6%83%85%23) `35.2K 🔥` `-77%`
1. [亚运会电竞项目名单](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E7%94%B5%E7%AB%9E%E9%A1%B9%E7%9B%AE%E5%90%8D%E5%8D%95%23) `35.2K 🔥` `-76%`
1. [结石姐袭榜张碧晨尤长靖](https://s.weibo.com/weibo?q=%23%E7%BB%93%E7%9F%B3%E5%A7%90%E8%A2%AD%E6%A6%9C%E5%BC%A0%E7%A2%A7%E6%99%A8%E5%B0%A4%E9%95%BF%E9%9D%96%23) `35.2K 🔥` `-77%`
1. [发货YES到手YSL](https://s.weibo.com/weibo?q=%23%E5%8F%91%E8%B4%A7YES%E5%88%B0%E6%89%8BYSL%23) `35.2K 🔥` `-77%`

Updated at 2026-05-30 04:06:38

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
