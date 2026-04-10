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

1. [微信回应夫妻用AI写公众号年赚200万 (WeChat responds to couple using AI to write public accounts and earn 2 million a year)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%9B%9E%E5%BA%94%E5%A4%AB%E5%A6%BB%E7%94%A8AI%E5%86%99%E5%85%AC%E4%BC%97%E5%8F%B7%E5%B9%B4%E8%B5%9A200%E4%B8%87%23) `1.1M 🔥` `NEW`
1. [普京宣布停火32小时](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%AE%A3%E5%B8%83%E5%81%9C%E7%81%AB32%E5%B0%8F%E6%97%B6%23) `778.2K 🔥` `NEW`
1. [逐玉没播前就定了将门独后副cp](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%B2%A1%E6%92%AD%E5%89%8D%E5%B0%B1%E5%AE%9A%E4%BA%86%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%89%AFcp%23) `496.5K 🔥` `NEW`
1. [马頔主动向李纯道歉](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E4%B8%BB%E5%8A%A8%E5%90%91%E6%9D%8E%E7%BA%AF%E9%81%93%E6%AD%89%23) `408.5K 🔥` `NEW`
1. [女子晒手指被劝去医院果然查出问题](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%99%92%E6%89%8B%E6%8C%87%E8%A2%AB%E5%8A%9D%E5%8E%BB%E5%8C%BB%E9%99%A2%E6%9E%9C%E7%84%B6%E6%9F%A5%E5%87%BA%E9%97%AE%E9%A2%98%23) `373.1K 🔥` `NEW`
1. [莫氏鸡煲老板盼来了救兵](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E7%9B%BC%E6%9D%A5%E4%BA%86%E6%95%91%E5%85%B5%23) `345.0K 🔥` `NEW`
1. [sbti尤物](https://s.weibo.com/weibo?q=%23sbti%E5%B0%A4%E7%89%A9%23) `200.6K 🔥` `NEW`
1. [专家称古法生育影响婴儿智力发育](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E5%8F%A4%E6%B3%95%E7%94%9F%E8%82%B2%E5%BD%B1%E5%93%8D%E5%A9%B4%E5%84%BF%E6%99%BA%E5%8A%9B%E5%8F%91%E8%82%B2%23) `190.7K 🔥` `NEW`
1. [李小冉社交](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%A4%BE%E4%BA%A4%23) `183.1K 🔥` `NEW`
1. [华为Pura90系列外观曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura90%E7%B3%BB%E5%88%97%E5%A4%96%E8%A7%82%E6%9B%9D%E5%85%89%23) `154.3K 🔥` `NEW`
1. [张凌赫的商务汇总 (Zhang Linghe’s business summary)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E5%95%86%E5%8A%A1%E6%B1%87%E6%80%BB%23) `130.9K 🔥` `NEW`
1. [伊朗最高领袖外事顾问伤重不治身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%A4%96%E4%BA%8B%E9%A1%BE%E9%97%AE%E4%BC%A4%E9%87%8D%E4%B8%8D%E6%B2%BB%E8%BA%AB%E4%BA%A1%23) `130.5K 🔥` `NEW`
1. [sbti测试者发声](https://s.weibo.com/weibo?q=%23sbti%E6%B5%8B%E8%AF%95%E8%80%85%E5%8F%91%E5%A3%B0%23) `130.3K 🔥` `NEW`
1. [sbti 视角](https://s.weibo.com/weibo?q=%23sbti%20%E8%A7%86%E8%A7%92%23) `128.5K 🔥` `NEW`
1. [武汉暴雨破纪录](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E6%9A%B4%E9%9B%A8%E7%A0%B4%E7%BA%AA%E5%BD%95%23) `119.0K 🔥` `NEW`
1. [小女孩被离异父母双双拒收后续](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A5%B3%E5%AD%A9%E8%A2%AB%E7%A6%BB%E5%BC%82%E7%88%B6%E6%AF%8D%E5%8F%8C%E5%8F%8C%E6%8B%92%E6%94%B6%E5%90%8E%E7%BB%AD%23) `115.3K 🔥` `NEW`
1. [日本自卫队420人登上菲律宾](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%87%AA%E5%8D%AB%E9%98%9F420%E4%BA%BA%E7%99%BB%E4%B8%8A%E8%8F%B2%E5%BE%8B%E5%AE%BE%23) `110.4K 🔥` `NEW`
1. [猫咪不慎掉进百斤大酒缸被送医](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E4%B8%8D%E6%85%8E%E6%8E%89%E8%BF%9B%E7%99%BE%E6%96%A4%E5%A4%A7%E9%85%92%E7%BC%B8%E8%A2%AB%E9%80%81%E5%8C%BB%23) `108.3K 🔥` `NEW`
1. [俄乌或将停火](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B9%8C%E6%88%96%E5%B0%86%E5%81%9C%E7%81%AB%23) `100.1K 🔥` `NEW`
1. [SBTI作者深夜发布新链接](https://s.weibo.com/weibo?q=%23SBTI%E4%BD%9C%E8%80%85%E6%B7%B1%E5%A4%9C%E5%8F%91%E5%B8%83%E6%96%B0%E9%93%BE%E6%8E%A5%23) `97.7K 🔥` `NEW`
1. [小米汽车3月销量21440辆 (Xiaomi Motors sold 21,440 units in March)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A63%E6%9C%88%E9%94%80%E9%87%8F21440%E8%BE%86%23) `92.5K 🔥` `NEW`
1. [小狗吃冰淇淋就会变成小海豹](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%90%83%E5%86%B0%E6%B7%87%E6%B7%8B%E5%B0%B1%E4%BC%9A%E5%8F%98%E6%88%90%E5%B0%8F%E6%B5%B7%E8%B1%B9%23) `91.1K 🔥` `NEW`
1. [柯南M30预告新一小兰](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E5%8D%97M30%E9%A2%84%E5%91%8A%E6%96%B0%E4%B8%80%E5%B0%8F%E5%85%B0%23) `90.3K 🔥` `NEW`
1. [多方回应73岁骑友抄近路摔倒身亡](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%9473%E5%B2%81%E9%AA%91%E5%8F%8B%E6%8A%84%E8%BF%91%E8%B7%AF%E6%91%94%E5%80%92%E8%BA%AB%E4%BA%A1%23) `88.6K 🔥` `NEW`
1. [警方回应男子开路虎加油500元逃单](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E5%BC%80%E8%B7%AF%E8%99%8E%E5%8A%A0%E6%B2%B9500%E5%85%83%E9%80%83%E5%8D%95%23) `85.7K 🔥` `NEW`
1. [柯南剧场版M30](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E5%8D%97%E5%89%A7%E5%9C%BA%E7%89%88M30%23) `84.5K 🔥` `NEW`
1. [王者荣耀世界](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%B8%96%E7%95%8C%23) `84.3K 🔥` `NEW`
1. [SBTI回应MBTI](https://s.weibo.com/weibo?q=%23SBTI%E5%9B%9E%E5%BA%94MBTI%23) `84.3K 🔥` `NEW`
1. [深圳车公庙惊现超大枕头](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E8%BD%A6%E5%85%AC%E5%BA%99%E6%83%8A%E7%8E%B0%E8%B6%85%E5%A4%A7%E6%9E%95%E5%A4%B4%23) `84.0K 🔥` `NEW`
1. [卫健委回应企业要求体检前吃排铅药](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E5%9B%9E%E5%BA%94%E4%BC%81%E4%B8%9A%E8%A6%81%E6%B1%82%E4%BD%93%E6%A3%80%E5%89%8D%E5%90%83%E6%8E%92%E9%93%85%E8%8D%AF%23) `77.9K 🔥` `NEW`
1. [黎巴嫩真主党游击战让以色列头疼 (Hezbollah's guerrilla war in Lebanon gives Israel a headache)](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E5%B7%B4%E5%AB%A9%E7%9C%9F%E4%B8%BB%E5%85%9A%E6%B8%B8%E5%87%BB%E6%88%98%E8%AE%A9%E4%BB%A5%E8%89%B2%E5%88%97%E5%A4%B4%E7%96%BC%23) `76.7K 🔥` `NEW`
1. [华为小鹏为何纷纷闯入摩托车赛道](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%B0%8F%E9%B9%8F%E4%B8%BA%E4%BD%95%E7%BA%B7%E7%BA%B7%E9%97%AF%E5%85%A5%E6%91%A9%E6%89%98%E8%BD%A6%E8%B5%9B%E9%81%93%23) `74.8K 🔥` `NEW`
1. [以军大规模空袭黎巴嫩致303死1150伤](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%A9%BA%E8%A2%AD%E9%BB%8E%E5%B7%B4%E5%AB%A9%E8%87%B4303%E6%AD%BB1150%E4%BC%A4%23) `73.8K 🔥` `NEW`
1. [CORTIS中国区首代馥蕾诗](https://s.weibo.com/weibo?q=%23CORTIS%E4%B8%AD%E5%9B%BD%E5%8C%BA%E9%A6%96%E4%BB%A3%E9%A6%A5%E8%95%BE%E8%AF%97%23) `375.2K 🔥` `+112%`
1. [霍尔木兹海峡完全关闭](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%AE%8C%E5%85%A8%E5%85%B3%E9%97%AD%23) `350.4K 🔥` `+231%`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `202.7K 🔥` `+223%`
1. [伊朗最高领袖提出三点主张](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E6%8F%90%E5%87%BA%E4%B8%89%E7%82%B9%E4%B8%BB%E5%BC%A0%23) `196.3K 🔥` `+90%`
1. [金子涵的收藏](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E7%9A%84%E6%94%B6%E8%97%8F%23) `185.6K 🔥` `+77%`
1. [离异父母均拒接孩子司机当场怒斥](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%BC%82%E7%88%B6%E6%AF%8D%E5%9D%87%E6%8B%92%E6%8E%A5%E5%AD%A9%E5%AD%90%E5%8F%B8%E6%9C%BA%E5%BD%93%E5%9C%BA%E6%80%92%E6%96%A5%23) `180.4K 🔥` `+76%`
1. [胃病癌变前的6个求救信号](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%97%85%E7%99%8C%E5%8F%98%E5%89%8D%E7%9A%846%E4%B8%AA%E6%B1%82%E6%95%91%E4%BF%A1%E5%8F%B7%23) `129.7K 🔥` `+162%`
1. [人民日报评吴克群 (People's Daily comments on Wu Kequn)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%90%B4%E5%85%8B%E7%BE%A4%23) `127.8K 🔥` `+25%`
1. [开心消消乐程序员写给女友的情书 (A love letter written by a Happy Xiaoxiao Le programmer to his girlfriend)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%BF%83%E6%B6%88%E6%B6%88%E4%B9%90%E7%A8%8B%E5%BA%8F%E5%91%98%E5%86%99%E7%BB%99%E5%A5%B3%E5%8F%8B%E7%9A%84%E6%83%85%E4%B9%A6%23) `116.3K 🔥` `+63%`
1. [李小冉我每天吃一个唐僧 (Li Xiaoran I eat a Tang Monk every day)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%88%91%E6%AF%8F%E5%A4%A9%E5%90%83%E4%B8%80%E4%B8%AA%E5%94%90%E5%83%A7%23) `112.6K 🔥` `+52%`
1. [李昀锐面部生理性颤抖](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E9%9D%A2%E9%83%A8%E7%94%9F%E7%90%86%E6%80%A7%E9%A2%A4%E6%8A%96%23) `110.5K 🔥` `+59%`
1. [春日经济活力的关键何在 (What's the key to economic vitality in Kasuga?)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%97%A5%E7%BB%8F%E6%B5%8E%E6%B4%BB%E5%8A%9B%E7%9A%84%E5%85%B3%E9%94%AE%E4%BD%95%E5%9C%A8%23) `646.9K 🔥`
1. [海湾国家慌了 (Gulf countries panic)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B9%BE%E5%9B%BD%E5%AE%B6%E6%85%8C%E4%BA%86%23) `457.1K 🔥`
1. [大疆Pocket4 (DJI Pocket4)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%23) `89.1K 🔥`
1. [迪丽热巴待播剧](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BE%85%E6%92%AD%E5%89%A7%23) `89.0K 🔥`
1. [美以伊停火全是戏](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E4%BC%8A%E5%81%9C%E7%81%AB%E5%85%A8%E6%98%AF%E6%88%8F%23) `84.2K 🔥`
1. [男子卖房为母治病打赏女主播22.5万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%96%E6%88%BF%E4%B8%BA%E6%AF%8D%E6%B2%BB%E7%97%85%E6%89%93%E8%B5%8F%E5%A5%B3%E4%B8%BB%E6%92%AD22.5%E4%B8%87%23) `131.2K 🔥` `-81%`
1. [武汉有轨电车与电动车相撞 (Tram collides with electric car in Wuhan)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E6%9C%89%E8%BD%A8%E7%94%B5%E8%BD%A6%E4%B8%8E%E7%94%B5%E5%8A%A8%E8%BD%A6%E7%9B%B8%E6%92%9E%23) `130.4K 🔥` `-87%`

Updated at 2026-04-10 09:06:42

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
