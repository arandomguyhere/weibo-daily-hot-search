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

1. [红果短剧自砍摇钱树](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E8%87%AA%E7%A0%8D%E6%91%87%E9%92%B1%E6%A0%91%23) `593.1K 🔥` `NEW`
1. [长生 AG](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9F%20AG%23) `528.8K 🔥` `NEW`
1. [长征硬核知识点十问十答](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E7%A1%AC%E6%A0%B8%E7%9F%A5%E8%AF%86%E7%82%B9%E5%8D%81%E9%97%AE%E5%8D%81%E7%AD%94%23) `399.4K 🔥` `NEW`
1. [比亚迪第二代海鸥7万级唯一闪充](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E7%AC%AC%E4%BA%8C%E4%BB%A3%E6%B5%B7%E9%B8%A57%E4%B8%87%E7%BA%A7%E5%94%AF%E4%B8%80%E9%97%AA%E5%85%85%23) `395.5K 🔥` `NEW`
1. [AG 退役](https://s.weibo.com/weibo?q=%23AG%20%E9%80%80%E5%BD%B9%23) `379.6K 🔥` `NEW`
1. [张小斐 救场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%20%E6%95%91%E5%9C%BA%23) `211.1K 🔥` `NEW`
1. [曝自费高定艺人名字](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E5%90%8D%E5%AD%97%23) `200.6K 🔥` `NEW`
1. [芭莎 有人在后台不出来](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E8%8E%8E%20%E6%9C%89%E4%BA%BA%E5%9C%A8%E5%90%8E%E5%8F%B0%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `188.1K 🔥` `NEW`
1. [原来明星租一次高定这么贵啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E6%98%9F%E7%A7%9F%E4%B8%80%E6%AC%A1%E9%AB%98%E5%AE%9A%E8%BF%99%E4%B9%88%E8%B4%B5%E5%95%8A%23) `182.9K 🔥` `NEW`
1. [泽连斯基愿保留75%领土以达和平](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E6%84%BF%E4%BF%9D%E7%95%9975%25%E9%A2%86%E5%9C%9F%E4%BB%A5%E8%BE%BE%E5%92%8C%E5%B9%B3%23) `177.3K 🔥` `NEW`
1. [和女同事相处真的要小心分寸](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%A5%B3%E5%90%8C%E4%BA%8B%E7%9B%B8%E5%A4%84%E7%9C%9F%E7%9A%84%E8%A6%81%E5%B0%8F%E5%BF%83%E5%88%86%E5%AF%B8%23) `177.2K 🔥` `NEW`
1. [蔡文静在张小斐之前走完红毯了](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%9C%A8%E5%BC%A0%E5%B0%8F%E6%96%90%E4%B9%8B%E5%89%8D%E8%B5%B0%E5%AE%8C%E7%BA%A2%E6%AF%AF%E4%BA%86%23) `177.1K 🔥` `NEW`
1. [罗晋和唐嫣讨论女儿画的画](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%99%8B%E5%92%8C%E5%94%90%E5%AB%A3%E8%AE%A8%E8%AE%BA%E5%A5%B3%E5%84%BF%E7%94%BB%E7%9A%84%E7%94%BB%23) `176.9K 🔥` `NEW`
1. [杨幂压轴](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%8E%8B%E8%BD%B4%23) `176.5K 🔥` `NEW`
1. [网友物理推导问界M9车速](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%89%A9%E7%90%86%E6%8E%A8%E5%AF%BC%E9%97%AE%E7%95%8CM9%E8%BD%A6%E9%80%9F%23) `174.4K 🔥` `NEW`
1. [嫁金钗](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%23) `158.1K 🔥` `NEW`
1. [女孩回应撞脸大S](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%9B%9E%E5%BA%94%E6%92%9E%E8%84%B8%E5%A4%A7S%23) `156.7K 🔥` `NEW`
1. [印度男子谋杀39岁中国女子终身监禁](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E8%B0%8B%E6%9D%8039%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E7%BB%88%E8%BA%AB%E7%9B%91%E7%A6%81%23) `155.9K 🔥` `NEW`
1. [男子身中17刀身亡17岁少年被刑拘](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BA%AB%E4%B8%AD17%E5%88%80%E8%BA%AB%E4%BA%A117%E5%B2%81%E5%B0%91%E5%B9%B4%E8%A2%AB%E5%88%91%E6%8B%98%23) `154.5K 🔥` `NEW`
1. [穆霍娃入围总决赛](https://s.weibo.com/weibo?q=%23%E7%A9%86%E9%9C%8D%E5%A8%83%E5%85%A5%E5%9B%B4%E6%80%BB%E5%86%B3%E8%B5%9B%23) `153.9K 🔥` `NEW`
1. [影视飓风iPhoneDuo评测](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8EiPhoneDuo%E8%AF%84%E6%B5%8B%23) `153.2K 🔥` `NEW`
1. [祖海高定压轴款](https://s.weibo.com/weibo?q=%23%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%E5%8E%8B%E8%BD%B4%E6%AC%BE%23) `152.2K 🔥` `NEW`
1. [料酒去腥的惊天骗局](https://s.weibo.com/weibo?q=%23%E6%96%99%E9%85%92%E5%8E%BB%E8%85%A5%E7%9A%84%E6%83%8A%E5%A4%A9%E9%AA%97%E5%B1%80%23) `148.1K 🔥` `NEW`
1. [白鹿开毯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%80%E6%AF%AF%23) `147.3K 🔥` `NEW`
1. [16岁男孩睡梦中睾丸扭转720度](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E7%94%B7%E5%AD%A9%E7%9D%A1%E6%A2%A6%E4%B8%AD%E7%9D%BE%E4%B8%B8%E6%89%AD%E8%BD%AC720%E5%BA%A6%23) `147.1K 🔥` `NEW`
1. [芭莎晚宴](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E8%8E%8E%E6%99%9A%E5%AE%B4%23) `129.8K 🔥` `NEW`
1. [樊振东这次发文又引用了中庸和孟子](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%BF%99%E6%AC%A1%E5%8F%91%E6%96%87%E5%8F%88%E5%BC%95%E7%94%A8%E4%BA%86%E4%B8%AD%E5%BA%B8%E5%92%8C%E5%AD%9F%E5%AD%90%23) `128.6K 🔥` `NEW`
1. [女子在冰箱养蛙现吃现捞](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%86%B0%E7%AE%B1%E5%85%BB%E8%9B%99%E7%8E%B0%E5%90%83%E7%8E%B0%E6%8D%9E%23) `128.6K 🔥` `NEW`
1. [问界道路救援中心曾拨打122](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E9%81%93%E8%B7%AF%E6%95%91%E6%8F%B4%E4%B8%AD%E5%BF%83%E6%9B%BE%E6%8B%A8%E6%89%93122%23) `128.5K 🔥` `NEW`
1. [上海婚纱店认领祖海高定](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A9%9A%E7%BA%B1%E5%BA%97%E8%AE%A4%E9%A2%86%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%23) `128.5K 🔥` `NEW`
1. [蔡文静好惨啊](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%A5%BD%E6%83%A8%E5%95%8A%23) `128.5K 🔥` `NEW`
1. [刘铮亮父亲冬泳溺亡](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%93%AE%E4%BA%AE%E7%88%B6%E4%BA%B2%E5%86%AC%E6%B3%B3%E6%BA%BA%E4%BA%A1%23) `128.4K 🔥` `NEW`
1. [妈妈染上AI短剧后无法自拔](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%9F%93%E4%B8%8AAI%E7%9F%AD%E5%89%A7%E5%90%8E%E6%97%A0%E6%B3%95%E8%87%AA%E6%8B%94%23) `128.4K 🔥` `NEW`
1. [2026共创之夜节目抽象剧透](https://s.weibo.com/weibo?q=%232026%E5%85%B1%E5%88%9B%E4%B9%8B%E5%A4%9C%E8%8A%82%E7%9B%AE%E6%8A%BD%E8%B1%A1%E5%89%A7%E9%80%8F%23) `128.0K 🔥` `NEW`
1. [盛艾敬父母欠薪遭韩网批评](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E7%88%B6%E6%AF%8D%E6%AC%A0%E8%96%AA%E9%81%AD%E9%9F%A9%E7%BD%91%E6%89%B9%E8%AF%84%23) `127.0K 🔥` `NEW`
1. [芭莎内场座位](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E8%8E%8E%E5%86%85%E5%9C%BA%E5%BA%A7%E4%BD%8D%23) `121.8K 🔥` `NEW`
1. [曝自费高定艺人把品牌pr气坏了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E6%8A%8A%E5%93%81%E7%89%8Cpr%E6%B0%94%E5%9D%8F%E4%BA%86%23) `120.9K 🔥` `NEW`
1. [陈天润恋情传闻](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A4%A9%E6%B6%A6%E6%81%8B%E6%83%85%E4%BC%A0%E9%97%BB%23) `105.1K 🔥` `NEW`
1. [问界辟谣网传电池爆燃智驾撞击](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E8%BE%9F%E8%B0%A3%E7%BD%91%E4%BC%A0%E7%94%B5%E6%B1%A0%E7%88%86%E7%87%83%E6%99%BA%E9%A9%BE%E6%92%9E%E5%87%BB%23) `101.9K 🔥` `NEW`
1. [小城良方收视冲顶](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E6%94%B6%E8%A7%86%E5%86%B2%E9%A1%B6%23) `101.7K 🔥` `NEW`
1. [小城良方老派演员剧宣方式](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E8%80%81%E6%B4%BE%E6%BC%94%E5%91%98%E5%89%A7%E5%AE%A3%E6%96%B9%E5%BC%8F%23) `98.9K 🔥` `NEW`
1. [钟意长生拥抱](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%E9%95%BF%E7%94%9F%E6%8B%A5%E6%8A%B1%23) `98.1K 🔥` `NEW`
1. [PHP](https://s.weibo.com/weibo?q=%23PHP%23) `93.8K 🔥` `NEW`
1. [一诺状态](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E7%8A%B6%E6%80%81%23) `92.5K 🔥` `NEW`
1. [iPhoneDuo折痕真实体验](https://s.weibo.com/weibo?q=%23iPhoneDuo%E6%8A%98%E7%97%95%E7%9C%9F%E5%AE%9E%E4%BD%93%E9%AA%8C%23) `90.5K 🔥` `NEW`
1. [白鹿芭莎第二套](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8A%AD%E8%8E%8E%E7%AC%AC%E4%BA%8C%E5%A5%97%23) `90.4K 🔥` `NEW`
1. [校方回应李子祺博士期间不上临床](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E6%96%B9%E5%9B%9E%E5%BA%94%E6%9D%8E%E5%AD%90%E7%A5%BA%E5%8D%9A%E5%A3%AB%E6%9C%9F%E9%97%B4%E4%B8%8D%E4%B8%8A%E4%B8%B4%E5%BA%8A%23) `87.5K 🔥` `NEW`
1. [买了网红衣服走进现实生活](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E4%BA%86%E7%BD%91%E7%BA%A2%E8%A1%A3%E6%9C%8D%E8%B5%B0%E8%BF%9B%E7%8E%B0%E5%AE%9E%E7%94%9F%E6%B4%BB%23) `79.7K 🔥` `NEW`
1. [蔡天凤案证人听到电锯持续近30分钟](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E6%A1%88%E8%AF%81%E4%BA%BA%E5%90%AC%E5%88%B0%E7%94%B5%E9%94%AF%E6%8C%81%E7%BB%AD%E8%BF%9130%E5%88%86%E9%92%9F%23) `76.8K 🔥` `NEW`

Updated at 2026-10-22 01:41:57

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
