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

1. [张雪峰公司发布讣告 (Zhang Xuefeng's company releases obituary)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%85%AC%E5%8F%B8%E5%8F%91%E5%B8%83%E8%AE%A3%E5%91%8A%23) `35.4M 🔥` `NEW`
1. [张雪峰去世](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%8E%BB%E4%B8%96%23) `23.0M 🔥` `NEW`
1. [心源性猝死](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%23) `5.5M 🔥` `NEW`
1. [太空加油站新进展](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E7%A9%BA%E5%8A%A0%E6%B2%B9%E7%AB%99%E6%96%B0%E8%BF%9B%E5%B1%95%23) `1.1M 🔥` `NEW`
1. [4成心源性猝死患者不到40岁](https://s.weibo.com/weibo?q=%234%E6%88%90%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%E6%82%A3%E8%80%85%E4%B8%8D%E5%88%B040%E5%B2%81%23) `435.4K 🔥` `NEW`
1. [张雪峰曾回应如何面对死亡](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E6%9B%BE%E5%9B%9E%E5%BA%94%E5%A6%82%E4%BD%95%E9%9D%A2%E5%AF%B9%E6%AD%BB%E4%BA%A1%23) `348.0K 🔥` `NEW`
1. [张雪峰曾说跑完步自信感爆棚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E6%9B%BE%E8%AF%B4%E8%B7%91%E5%AE%8C%E6%AD%A5%E8%87%AA%E4%BF%A1%E6%84%9F%E7%88%86%E6%A3%9A%23) `343.6K 🔥` `NEW`
1. [曾经只值10元的二手机现在回收价500](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E7%BB%8F%E5%8F%AA%E5%80%BC10%E5%85%83%E7%9A%84%E4%BA%8C%E6%89%8B%E6%9C%BA%E7%8E%B0%E5%9C%A8%E5%9B%9E%E6%94%B6%E4%BB%B7500%23) `333.0K 🔥` `NEW`
1. [张雪峰系心源性猝死](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E7%B3%BB%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%23) `332.7K 🔥` `NEW`
1. [与梅姨同居三年老汉家门窗紧闭](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E6%A2%85%E5%A7%A8%E5%90%8C%E5%B1%85%E4%B8%89%E5%B9%B4%E8%80%81%E6%B1%89%E5%AE%B6%E9%97%A8%E7%AA%97%E7%B4%A7%E9%97%AD%23) `332.2K 🔥` `NEW`
1. [薛之谦 设身处地ing (Joker Xue puts himself in his shoes)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%20%E8%AE%BE%E8%BA%AB%E5%A4%84%E5%9C%B0ing%23) `331.4K 🔥` `NEW`
1. [章若楠遇上任重是真的难哄了](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E9%81%87%E4%B8%8A%E4%BB%BB%E9%87%8D%E6%98%AF%E7%9C%9F%E7%9A%84%E9%9A%BE%E5%93%84%E4%BA%86%23) `330.3K 🔥` `NEW`
1. [用AI伪造病历1个月敲诈4家餐厅](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E4%BC%AA%E9%80%A0%E7%97%85%E5%8E%861%E4%B8%AA%E6%9C%88%E6%95%B2%E8%AF%884%E5%AE%B6%E9%A4%90%E5%8E%85%23) `330.3K 🔥` `NEW`
1. [地铁吐血女孩曾是白衣天使](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E6%9B%BE%E6%98%AF%E7%99%BD%E8%A1%A3%E5%A4%A9%E4%BD%BF%23) `330.2K 🔥` `NEW`
1. [三甲医生解读地铁吐血女孩病症](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E8%A7%A3%E8%AF%BB%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E7%97%85%E7%97%87%23) `330.1K 🔥` `NEW`
1. [章若楠角色热度破亿](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%A7%92%E8%89%B2%E7%83%AD%E5%BA%A6%E7%A0%B4%E4%BA%BF%23) `330.0K 🔥` `NEW`
1. [迪士尼更新了迪丽热巴祝福视频](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%E6%9B%B4%E6%96%B0%E4%BA%86%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%A5%9D%E7%A6%8F%E8%A7%86%E9%A2%91%23) `329.7K 🔥` `NEW`
1. [王俊凯 有人在吗WJK在](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E6%9C%89%E4%BA%BA%E5%9C%A8%E5%90%97WJK%E5%9C%A8%23) `329.7K 🔥` `NEW`
1. [外交部回应日方拟将中日关系降级](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E6%97%A5%E6%96%B9%E6%8B%9F%E5%B0%86%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%E9%99%8D%E7%BA%A7%23) `1.3M 🔥` `+467%`
1. [4岁女童就诊177次患者是母亲](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%B0%B1%E8%AF%8A177%E6%AC%A1%E6%82%A3%E8%80%85%E6%98%AF%E6%AF%8D%E4%BA%B2%23) `1.0M 🔥` `+93%`
1. [地铁吐血女孩已离开华西医院 (The girl who vomited blood on the subway has left West China Hospital)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E5%B7%B2%E7%A6%BB%E5%BC%80%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%23) `681.9K 🔥` `+45%`
1. [李艺彤 短剧](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%89%BA%E5%BD%A4%20%E7%9F%AD%E5%89%A7%23) `344.4K 🔥` `+28%`
1. [钟南山提醒此类情况及时就诊](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E6%8F%90%E9%86%92%E6%AD%A4%E7%B1%BB%E6%83%85%E5%86%B5%E5%8F%8A%E6%97%B6%E5%B0%B1%E8%AF%8A%23) `336.2K 🔥` `+80%`
1. [张凌赫蓝色花蝴蝶造型](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%93%9D%E8%89%B2%E8%8A%B1%E8%9D%B4%E8%9D%B6%E9%80%A0%E5%9E%8B%23) `335.7K 🔥` `+102%`
1. [管泽元升级当爸](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%E5%8D%87%E7%BA%A7%E5%BD%93%E7%88%B8%23) `335.4K 🔥` `+32%`
1. [睡觉是延长心脏寿命最好的方式](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E6%98%AF%E5%BB%B6%E9%95%BF%E5%BF%83%E8%84%8F%E5%AF%BF%E5%91%BD%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B9%E5%BC%8F%23) `335.3K 🔥` `+39%`
1. [泽尻英龙华40岁状态](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E5%B0%BB%E8%8B%B1%E9%BE%99%E5%8D%8E40%E5%B2%81%E7%8A%B6%E6%80%81%23) `334.8K 🔥` `+47%`
1. [阮经天和女友十指紧扣逛街](https://s.weibo.com/weibo?q=%23%E9%98%AE%E7%BB%8F%E5%A4%A9%E5%92%8C%E5%A5%B3%E5%8F%8B%E5%8D%81%E6%8C%87%E7%B4%A7%E6%89%A3%E9%80%9B%E8%A1%97%23) `334.3K 🔥` `+39%`
1. [黄金大幅回撤 (Gold retreats sharply)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%A4%A7%E5%B9%85%E5%9B%9E%E6%92%A4%23) `334.0K 🔥` `+47%`
1. [日本 (Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%23) `333.5K 🔥` `+141%`
1. [伊朗喊美国做个了断](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%96%8A%E7%BE%8E%E5%9B%BD%E5%81%9A%E4%B8%AA%E4%BA%86%E6%96%AD%23) `333.3K 🔥` `+32%`
1. [孔雪儿逐玉红利](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E9%80%90%E7%8E%89%E7%BA%A2%E5%88%A9%23) `332.1K 🔥` `+143%`
1. [周大福一口价金饰比当前金价贵 (Chow Tai Fook fixed-price gold jewelry is more expensive than the current gold price)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%A4%A7%E7%A6%8F%E4%B8%80%E5%8F%A3%E4%BB%B7%E9%87%91%E9%A5%B0%E6%AF%94%E5%BD%93%E5%89%8D%E9%87%91%E4%BB%B7%E8%B4%B5%23) `331.7K 🔥` `+209%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `331.3K 🔥` `+169%`
1. [医院招护士女性须持证男性可后考](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E6%8B%9B%E6%8A%A4%E5%A3%AB%E5%A5%B3%E6%80%A7%E9%A1%BB%E6%8C%81%E8%AF%81%E7%94%B7%E6%80%A7%E5%8F%AF%E5%90%8E%E8%80%83%23) `330.9K 🔥` `+32%`
1. [公司称不方便告知张雪峰是否在公司](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E7%A7%B0%E4%B8%8D%E6%96%B9%E4%BE%BF%E5%91%8A%E7%9F%A5%E5%BC%A0%E9%9B%AA%E5%B3%B0%E6%98%AF%E5%90%A6%E5%9C%A8%E5%85%AC%E5%8F%B8%23) `330.5K 🔥` `+66%`
1. [崇礼偶遇王一博滑雪](https://s.weibo.com/weibo?q=%23%E5%B4%87%E7%A4%BC%E5%81%B6%E9%81%87%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%BB%91%E9%9B%AA%23) `330.4K 🔥` `+190%`
1. [宋威龙说男人最好的医美是医美](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%AF%B4%E7%94%B7%E4%BA%BA%E6%9C%80%E5%A5%BD%E7%9A%84%E5%8C%BB%E7%BE%8E%E6%98%AF%E5%8C%BB%E7%BE%8E%23) `330.1K 🔥` `+254%`
1. [53岁独身女子去世留下600万遗产](https://s.weibo.com/weibo?q=%2353%E5%B2%81%E7%8B%AC%E8%BA%AB%E5%A5%B3%E5%AD%90%E5%8E%BB%E4%B8%96%E7%95%99%E4%B8%8B600%E4%B8%87%E9%81%97%E4%BA%A7%23) `329.9K 🔥` `+168%`
1. [黄金为什么越战越跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%BA%E4%BB%80%E4%B9%88%E8%B6%8A%E6%88%98%E8%B6%8A%E8%B7%8C%23) `329.9K 🔥` `+176%`
1. [中方要求日方立即彻查严惩](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E8%A6%81%E6%B1%82%E6%97%A5%E6%96%B9%E7%AB%8B%E5%8D%B3%E5%BD%BB%E6%9F%A5%E4%B8%A5%E6%83%A9%23) `329.8K 🔥` `+168%`
1. [问界M8焕新升级首发评测](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM8%E7%84%95%E6%96%B0%E5%8D%87%E7%BA%A7%E9%A6%96%E5%8F%91%E8%AF%84%E6%B5%8B%23) `1.1M 🔥`
1. [以色列被打穿了 (Israel is penetrated)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AB%E6%89%93%E7%A9%BF%E4%BA%86%23) `531.3K 🔥`
1. [草莓下火锅 (Strawberry hot pot)](https://s.weibo.com/weibo?q=%23%E8%8D%89%E8%8E%93%E4%B8%8B%E7%81%AB%E9%94%85%23) `514.6K 🔥`
1. [文淇 年轻女演员演主角等于没票房 (Wen Qi: If a young actress plays the leading role, it means she won’t get any box office.)](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%20%E5%B9%B4%E8%BD%BB%E5%A5%B3%E6%BC%94%E5%91%98%E6%BC%94%E4%B8%BB%E8%A7%92%E7%AD%89%E4%BA%8E%E6%B2%A1%E7%A5%A8%E6%88%BF%23) `503.2K 🔥`
1. [张凌赫陈哲远将军造型对比](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%99%88%E5%93%B2%E8%BF%9C%E5%B0%86%E5%86%9B%E9%80%A0%E5%9E%8B%E5%AF%B9%E6%AF%94%23) `396.3K 🔥`
1. [留几手向周杰伦道歉 (Leave a few hands to apologize to Jay Chou)](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E5%90%91%E5%91%A8%E6%9D%B0%E4%BC%A6%E9%81%93%E6%AD%89%23) `336.1K 🔥`
1. [齐旻的死是被人下了十年的慢性毒](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%97%BB%E7%9A%84%E6%AD%BB%E6%98%AF%E8%A2%AB%E4%BA%BA%E4%B8%8B%E4%BA%86%E5%8D%81%E5%B9%B4%E7%9A%84%E6%85%A2%E6%80%A7%E6%AF%92%23) `442.9K 🔥` `-92%`
1. [地铁吐血女孩去年已安排好后事](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E5%8E%BB%E5%B9%B4%E5%B7%B2%E5%AE%89%E6%8E%92%E5%A5%BD%E5%90%8E%E4%BA%8B%23) `334.9K 🔥` `-21%`
1. [周杰伦新歌口碑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E6%AD%8C%E5%8F%A3%E7%A2%91%23) `333.6K 🔥` `-26%`

Updated at 2026-03-24 22:48:36

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
