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

1. [容止 谢景行 (Rong Zhi Xie Jingxing)](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%AD%A2%20%E8%B0%A2%E6%99%AF%E8%A1%8C%23) `1.2M 🔥` `NEW`
1. [中国队米兰冬奥第3金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E7%AC%AC3%E9%87%91%23) `658.3K 🔥` `NEW`
1. [500块压岁钱发出5万的感觉](https://s.weibo.com/weibo?q=%23500%E5%9D%97%E5%8E%8B%E5%B2%81%E9%92%B1%E5%8F%91%E5%87%BA5%E4%B8%87%E7%9A%84%E6%84%9F%E8%A7%89%23) `462.4K 🔥` `NEW`
1. [女子疑似输液过敏导致不适身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%96%91%E4%BC%BC%E8%BE%93%E6%B6%B2%E8%BF%87%E6%95%8F%E5%AF%BC%E8%87%B4%E4%B8%8D%E9%80%82%E8%BA%AB%E4%BA%A1%23) `453.0K 🔥` `NEW`
1. [谷爱凌妈妈眼圈哭红了](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A6%88%E5%A6%88%E7%9C%BC%E5%9C%88%E5%93%AD%E7%BA%A2%E4%BA%86%23) `339.0K 🔥` `NEW`
1. [将门独后原著 大女主](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%8E%9F%E8%91%97%20%E5%A4%A7%E5%A5%B3%E4%B8%BB%23) `310.1K 🔥` `NEW`
1. [手术室为什么会放花生米](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%AF%E5%AE%A4%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E6%94%BE%E8%8A%B1%E7%94%9F%E7%B1%B3%23) `293.8K 🔥` `NEW`
1. [金泰亨说illit像newjeans](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E4%BA%A8%E8%AF%B4illit%E5%83%8Fnewjeans%23) `258.4K 🔥` `NEW`
1. [郭富城说与王一博只聊赛车](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E8%AF%B4%E4%B8%8E%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%8F%AA%E8%81%8A%E8%B5%9B%E8%BD%A6%23) `227.9K 🔥` `NEW`
1. [中国队还有三个夺金点](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E8%BF%98%E6%9C%89%E4%B8%89%E4%B8%AA%E5%A4%BA%E9%87%91%E7%82%B9%23) `195.7K 🔥` `NEW`
1. [沃尔沃总裁硬刚绝望冰壶 (Volvo CEO confronts desperate curler)](https://s.weibo.com/weibo?q=%23%E6%B2%83%E5%B0%94%E6%B2%83%E6%80%BB%E8%A3%81%E7%A1%AC%E5%88%9A%E7%BB%9D%E6%9C%9B%E5%86%B0%E5%A3%B6%23) `185.1K 🔥` `NEW`
1. [谷歌Gemini3.1Pro正式发布](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8CGemini3.1Pro%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83%23) `183.2K 🔥` `NEW`
1. [陈慧琳回应大儿子像宋仲基](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%85%A7%E7%90%B3%E5%9B%9E%E5%BA%94%E5%A4%A7%E5%84%BF%E5%AD%90%E5%83%8F%E5%AE%8B%E4%BB%B2%E5%9F%BA%23) `182.1K 🔥` `NEW`
1. [曝王男融梗](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E7%94%B7%E8%9E%8D%E6%A2%97%23) `178.5K 🔥` `NEW`
1. [贫穷最可怕的是贫穷的思维基因](https://s.weibo.com/weibo?q=%23%E8%B4%AB%E7%A9%B7%E6%9C%80%E5%8F%AF%E6%80%95%E7%9A%84%E6%98%AF%E8%B4%AB%E7%A9%B7%E7%9A%84%E6%80%9D%E7%BB%B4%E5%9F%BA%E5%9B%A0%23) `175.6K 🔥` `NEW`
1. [宁夏地震](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%A4%8F%E5%9C%B0%E9%9C%87%23) `159.1K 🔥` `NEW`
1. [王鹤棣孟子义将门独后饮酒转场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E9%A5%AE%E9%85%92%E8%BD%AC%E5%9C%BA%23) `145.5K 🔥` `NEW`
1. [这部剧一个流量生都没有](https://s.weibo.com/weibo?q=%23%E8%BF%99%E9%83%A8%E5%89%A7%E4%B8%80%E4%B8%AA%E6%B5%81%E9%87%8F%E7%94%9F%E9%83%BD%E6%B2%A1%E6%9C%89%23) `143.2K 🔥` `NEW`
1. [谢霆锋 天啊于适好可爱](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%20%E5%A4%A9%E5%95%8A%E4%BA%8E%E9%80%82%E5%A5%BD%E5%8F%AF%E7%88%B1%23) `137.6K 🔥` `NEW`
1. [郭富城透露小女儿认不出自己](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E9%80%8F%E9%9C%B2%E5%B0%8F%E5%A5%B3%E5%84%BF%E8%AE%A4%E4%B8%8D%E5%87%BA%E8%87%AA%E5%B7%B1%23) `135.7K 🔥` `NEW`
1. [宁忠岩说怀疑教练报假表了 (Ning Zhongyan said he suspected that the coach had reported false reports)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BF%A0%E5%B2%A9%E8%AF%B4%E6%80%80%E7%96%91%E6%95%99%E7%BB%83%E6%8A%A5%E5%81%87%E8%A1%A8%E4%BA%86%23) `130.4K 🔥` `NEW`
1. [何炅的情商又发力了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E7%9A%84%E6%83%85%E5%95%86%E5%8F%88%E5%8F%91%E5%8A%9B%E4%BA%86%23) `106.5K 🔥` `NEW`
1. [一个进厂一个出海一个下海](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E8%BF%9B%E5%8E%82%E4%B8%80%E4%B8%AA%E5%87%BA%E6%B5%B7%E4%B8%80%E4%B8%AA%E4%B8%8B%E6%B5%B7%23) `105.5K 🔥` `NEW`
1. [原来成长是一辈子的事](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%90%E9%95%BF%E6%98%AF%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E4%BA%8B%23) `100.2K 🔥` `NEW`
1. [10岁男孩1.8米高跷过年大跳科目3](https://s.weibo.com/weibo?q=%2310%E5%B2%81%E7%94%B7%E5%AD%A91.8%E7%B1%B3%E9%AB%98%E8%B7%B7%E8%BF%87%E5%B9%B4%E5%A4%A7%E8%B7%B3%E7%A7%91%E7%9B%AE3%23) `100.0K 🔥` `NEW`
1. [怪不得财神爱往潮汕跑](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E8%B4%A2%E7%A5%9E%E7%88%B1%E5%BE%80%E6%BD%AE%E6%B1%95%E8%B7%91%23) `99.8K 🔥` `NEW`
1. [童锦程孩子妈回应不做亲子鉴定](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E9%94%A6%E7%A8%8B%E5%AD%A9%E5%AD%90%E5%A6%88%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%81%9A%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%23) `92.6K 🔥` `NEW`
1. [过年发朋友圈要多800个心眼](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%A6%81%E5%A4%9A800%E4%B8%AA%E5%BF%83%E7%9C%BC%23) `92.3K 🔥` `NEW`
1. [唐宫最顶的一案要来了](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E6%9C%80%E9%A1%B6%E7%9A%84%E4%B8%80%E6%A1%88%E8%A6%81%E6%9D%A5%E4%BA%86%23) `91.5K 🔥` `NEW`
1. [谁拿唐僧洗澡水包饺子了](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%8B%BF%E5%94%90%E5%83%A7%E6%B4%97%E6%BE%A1%E6%B0%B4%E5%8C%85%E9%A5%BA%E5%AD%90%E4%BA%86%23) `83.3K 🔥` `NEW`
1. [谷爱凌说不是故意吓大家 (Gu Ailing said she didn’t mean to scare everyone.)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%AF%B4%E4%B8%8D%E6%98%AF%E6%95%85%E6%84%8F%E5%90%93%E5%A4%A7%E5%AE%B6%23) `849.6K 🔥` `+57%`
1. [一家三口返乡途中患病儿子突然离世](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E8%BF%94%E4%B9%A1%E9%80%94%E4%B8%AD%E6%82%A3%E7%97%85%E5%84%BF%E5%AD%90%E7%AA%81%E7%84%B6%E7%A6%BB%E4%B8%96%23) `520.0K 🔥` `+469%`
1. [吴京 我的夫人姓谢](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E6%88%91%E7%9A%84%E5%A4%AB%E4%BA%BA%E5%A7%93%E8%B0%A2%23) `513.8K 🔥` `+109%`
1. [朱志鑫左航 伯克利 (Zhu Zhixin Zuo Hang Berkeley)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%B7%A6%E8%88%AA%20%E4%BC%AF%E5%85%8B%E5%88%A9%23) `256.4K 🔥` `+107%`
1. [男子自办春晚1天走完17家亲戚](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%87%AA%E5%8A%9E%E6%98%A5%E6%99%9A1%E5%A4%A9%E8%B5%B0%E5%AE%8C17%E5%AE%B6%E4%BA%B2%E6%88%9A%23) `186.9K 🔥` `+105%`
1. [春节机器人卖爆了 (Robots sold out during the Spring Festival)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8D%96%E7%88%86%E4%BA%86%23) `138.4K 🔥` `+48%`
1. [将门独后官宣王鹤棣孟子义](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%AE%98%E5%AE%A3%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AD%9F%E5%AD%90%E4%B9%89%23) `645.7K 🔥`
1. [原来亲戚们都是故意的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BA%B2%E6%88%9A%E4%BB%AC%E9%83%BD%E6%98%AF%E6%95%85%E6%84%8F%E7%9A%84%23) `238.9K 🔥`
1. [谷爱凌为好友受伤而落泪](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E4%B8%BA%E5%A5%BD%E5%8F%8B%E5%8F%97%E4%BC%A4%E8%80%8C%E8%90%BD%E6%B3%AA%23) `127.1K 🔥`
1. [镖人 CP佛跳墙](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20CP%E4%BD%9B%E8%B7%B3%E5%A2%99%23) `97.3K 🔥`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `90.3K 🔥`
1. [将门独后开机 (Turn on the door alone)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%BC%80%E6%9C%BA%23) `496.1K 🔥` `-77%`
1. [将门毒后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%23) `175.1K 🔥` `-62%`
1. [宁忠岩金牌 (Ning Zhongyan gold medal)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BF%A0%E5%B2%A9%E9%87%91%E7%89%8C%23) `172.8K 🔥` `-35%`
1. [刘美贤夺冠 (Liu Meixian won the championship)](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BE%8E%E8%B4%A4%E5%A4%BA%E5%86%A0%23) `171.6K 🔥` `-82%`
1. [将门独后造型 (The unique style of the general’s door)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E9%80%A0%E5%9E%8B%23) `163.5K 🔥` `-37%`
1. [大年初四 扔穷](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E5%9B%9B%20%E6%89%94%E7%A9%B7%23) `155.3K 🔥` `-58%`
1. [谢景行 (Xie Jingxing)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%99%AF%E8%A1%8C%23) `97.2K 🔥` `-49%`
1. [中国队3金3银4铜 (Chinese team 3 golds, 3 silvers and 4 bronzes)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F3%E9%87%913%E9%93%B64%E9%93%9C%23) `94.1K 🔥` `-57%`
1. [顾客称被桔子酒店短信恐吓](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E7%A7%B0%E8%A2%AB%E6%A1%94%E5%AD%90%E9%85%92%E5%BA%97%E7%9F%AD%E4%BF%A1%E6%81%90%E5%90%93%23) `91.9K 🔥` `-60%`

Updated at 2026-02-20 12:29:28

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
