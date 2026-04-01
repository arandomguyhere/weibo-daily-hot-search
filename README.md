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

1. [雄安新区9岁了 (Xiongan New Area turns 9 years old)](https://s.weibo.com/weibo?q=%23%E9%9B%84%E5%AE%89%E6%96%B0%E5%8C%BA9%E5%B2%81%E4%BA%86%23) `614.1K 🔥` `NEW`
1. [凯越机车致歉](https://s.weibo.com/weibo?q=%23%E5%87%AF%E8%B6%8A%E6%9C%BA%E8%BD%A6%E8%87%B4%E6%AD%89%23) `343.6K 🔥` `NEW`
1. [伊朗总统说遵从最高领袖指示](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AF%B4%E9%81%B5%E4%BB%8E%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E6%8C%87%E7%A4%BA%23) `337.2K 🔥` `NEW`
1. [新能源车充电价格与油价无关](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E5%85%85%E7%94%B5%E4%BB%B7%E6%A0%BC%E4%B8%8E%E6%B2%B9%E4%BB%B7%E6%97%A0%E5%85%B3%23) `335.4K 🔥` `NEW`
1. [谁能演张雪](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%83%BD%E6%BC%94%E5%BC%A0%E9%9B%AA%23) `333.3K 🔥` `NEW`
1. [这才叫热锅凉油](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E5%8F%AB%E7%83%AD%E9%94%85%E5%87%89%E6%B2%B9%23) `323.3K 🔥` `NEW`
1. [马立奥有妹妹了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%8B%E5%A5%A5%E6%9C%89%E5%A6%B9%E5%A6%B9%E4%BA%86%23) `318.7K 🔥` `NEW`
1. [甲骨文3万人一觉睡醒工作没了](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%AA%A8%E6%96%873%E4%B8%87%E4%BA%BA%E4%B8%80%E8%A7%89%E7%9D%A1%E9%86%92%E5%B7%A5%E4%BD%9C%E6%B2%A1%E4%BA%86%23) `313.3K 🔥` `NEW`
1. [杨紫直播](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9B%B4%E6%92%AD%23) `305.9K 🔥` `NEW`
1. [无需粉底液这才是军人本色](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%9C%80%E7%B2%89%E5%BA%95%E6%B6%B2%E8%BF%99%E6%89%8D%E6%98%AF%E5%86%9B%E4%BA%BA%E6%9C%AC%E8%89%B2%23) `294.7K 🔥` `NEW`
1. [特朗普称伊朗新政权总统请求停火 (Trump says new Iranian regime president asks for ceasefire)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%BC%8A%E6%9C%97%E6%96%B0%E6%94%BF%E6%9D%83%E6%80%BB%E7%BB%9F%E8%AF%B7%E6%B1%82%E5%81%9C%E7%81%AB%23) `268.7K 🔥` `NEW`
1. [男子遗产大半留给妻儿母亲弟弟不服](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%81%97%E4%BA%A7%E5%A4%A7%E5%8D%8A%E7%95%99%E7%BB%99%E5%A6%BB%E5%84%BF%E6%AF%8D%E4%BA%B2%E5%BC%9F%E5%BC%9F%E4%B8%8D%E6%9C%8D%23) `203.7K 🔥` `NEW`
1. [全红婵一天只吃一顿饭引热议](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E4%B8%80%E5%A4%A9%E5%8F%AA%E5%90%83%E4%B8%80%E9%A1%BF%E9%A5%AD%E5%BC%95%E7%83%AD%E8%AE%AE%23) `199.6K 🔥` `NEW`
1. [马君妍马杨得女](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%90%9B%E5%A6%8D%E9%A9%AC%E6%9D%A8%E5%BE%97%E5%A5%B3%23) `199.4K 🔥` `NEW`
1. [七旬男子欲强奸女精神病人未遂](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%97%AC%E7%94%B7%E5%AD%90%E6%AC%B2%E5%BC%BA%E5%A5%B8%E5%A5%B3%E7%B2%BE%E7%A5%9E%E7%97%85%E4%BA%BA%E6%9C%AA%E9%81%82%23) `192.4K 🔥` `NEW`
1. [女子瞒重病订婚向男友索600万治病](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9E%92%E9%87%8D%E7%97%85%E8%AE%A2%E5%A9%9A%E5%90%91%E7%94%B7%E5%8F%8B%E7%B4%A2600%E4%B8%87%E6%B2%BB%E7%97%85%23) `183.4K 🔥` `NEW`
1. [WB战胜JDG](https://s.weibo.com/weibo?q=%23WB%E6%88%98%E8%83%9CJDG%23) `177.7K 🔥` `NEW`
1. [英国首相回应特朗普要退出北约](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E9%A6%96%E7%9B%B8%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E8%A6%81%E9%80%80%E5%87%BA%E5%8C%97%E7%BA%A6%23) `175.3K 🔥` `NEW`
1. [明星买张雪机车也得排队](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E4%B9%B0%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%B9%9F%E5%BE%97%E6%8E%92%E9%98%9F%23) `175.1K 🔥` `NEW`
1. [在盒马App低价买到商品被拒发货](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E7%9B%92%E9%A9%ACApp%E4%BD%8E%E4%BB%B7%E4%B9%B0%E5%88%B0%E5%95%86%E5%93%81%E8%A2%AB%E6%8B%92%E5%8F%91%E8%B4%A7%23) `174.1K 🔥` `NEW`
1. [小学要求早上6点40到校否则罚站 (Elementary schools require you to arrive at school at 6:40 a.m. otherwise you will be punished by standing still)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E8%A6%81%E6%B1%82%E6%97%A9%E4%B8%8A6%E7%82%B940%E5%88%B0%E6%A0%A1%E5%90%A6%E5%88%99%E7%BD%9A%E7%AB%99%23) `173.5K 🔥` `NEW`
1. [高市早苗对马克龙施展龟派气功](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%AF%B9%E9%A9%AC%E5%85%8B%E9%BE%99%E6%96%BD%E5%B1%95%E9%BE%9F%E6%B4%BE%E6%B0%94%E5%8A%9F%23) `173.0K 🔥` `NEW`
1. [陈都灵工作室连夜招人整改](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%BF%9E%E5%A4%9C%E6%8B%9B%E4%BA%BA%E6%95%B4%E6%94%B9%23) `172.6K 🔥` `NEW`
1. [女子遭屠夫儿子杀害时被十余人目睹](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD%E5%B1%A0%E5%A4%AB%E5%84%BF%E5%AD%90%E6%9D%80%E5%AE%B3%E6%97%B6%E8%A2%AB%E5%8D%81%E4%BD%99%E4%BA%BA%E7%9B%AE%E7%9D%B9%23) `151.7K 🔥` `NEW`
1. [金鹤龙给迪丽热巴化的美神灵主妆](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E7%BB%99%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8C%96%E7%9A%84%E7%BE%8E%E7%A5%9E%E7%81%B5%E4%B8%BB%E5%A6%86%23) `128.8K 🔥` `NEW`
1. [小米揽入特斯拉两员大将](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%8F%BD%E5%85%A5%E7%89%B9%E6%96%AF%E6%8B%89%E4%B8%A4%E5%91%98%E5%A4%A7%E5%B0%86%23) `121.9K 🔥` `NEW`
1. [王者荣耀崩了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%B4%A9%E4%BA%86%23) `116.0K 🔥` `NEW`
1. [日本超市卖蔬菜边角料](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%B6%85%E5%B8%82%E5%8D%96%E8%94%AC%E8%8F%9C%E8%BE%B9%E8%A7%92%E6%96%99%23) `115.2K 🔥` `NEW`
1. [JDG遗憾止步春季赛](https://s.weibo.com/weibo?q=%23JDG%E9%81%97%E6%86%BE%E6%AD%A2%E6%AD%A5%E6%98%A5%E5%AD%A3%E8%B5%9B%23) `114.5K 🔥` `NEW`
1. [京城大师赛](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E5%9F%8E%E5%A4%A7%E5%B8%88%E8%B5%9B%23) `95.6K 🔥` `NEW`
1. [暖阳七连MVP (Nuanyang MVP for seven consecutive years)](https://s.weibo.com/weibo?q=%23%E6%9A%96%E9%98%B3%E4%B8%83%E8%BF%9EMVP%23) `92.6K 🔥` `NEW`
1. [白鹿新剧莫离夏天播出](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E5%89%A7%E8%8E%AB%E7%A6%BB%E5%A4%8F%E5%A4%A9%E6%92%AD%E5%87%BA%23) `92.6K 🔥` `NEW`
1. [JDG对战WB](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98WB%23) `326.9K 🔥` `+244%`
1. [内田有纪柏原崇结婚](https://s.weibo.com/weibo?q=%23%E5%86%85%E7%94%B0%E6%9C%89%E7%BA%AA%E6%9F%8F%E5%8E%9F%E5%B4%87%E7%BB%93%E5%A9%9A%23) `315.9K 🔥` `+62%`
1. [李连杰 短剧](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%BF%9E%E6%9D%B0%20%E7%9F%AD%E5%89%A7%23) `312.6K 🔥` `+54%`
1. [有线耳机爆火原因 (Reasons why wired headphones explode)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E7%88%86%E7%81%AB%E5%8E%9F%E5%9B%A0%23) `1.1M 🔥`
1. [你的公积金悄悄变多了 (Your provident fund has quietly increased)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E5%85%AC%E7%A7%AF%E9%87%91%E6%82%84%E6%82%84%E5%8F%98%E5%A4%9A%E4%BA%86%23) `786.4K 🔥`
1. [以色列决定报复法国](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%86%B3%E5%AE%9A%E6%8A%A5%E5%A4%8D%E6%B3%95%E5%9B%BD%23) `340.7K 🔥`
1. [公安部力挺张雪新手禁令 (The Ministry of Public Security supports Zhang Xue’s novice ban)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E9%83%A8%E5%8A%9B%E6%8C%BA%E5%BC%A0%E9%9B%AA%E6%96%B0%E6%89%8B%E7%A6%81%E4%BB%A4%23) `329.7K 🔥`
1. [妹妹看到姐姐遗体惨状当场崩溃](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E7%9C%8B%E5%88%B0%E5%A7%90%E5%A7%90%E9%81%97%E4%BD%93%E6%83%A8%E7%8A%B6%E5%BD%93%E5%9C%BA%E5%B4%A9%E6%BA%83%23) `220.0K 🔥`
1. [优思益声明](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%A3%B0%E6%98%8E%23) `200.1K 🔥`
1. [严浩翔发的是刘耀文](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%8F%91%E7%9A%84%E6%98%AF%E5%88%98%E8%80%80%E6%96%87%23) `197.8K 🔥`
1. [芭乐 早知道烂地里了](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E4%B9%90%20%E6%97%A9%E7%9F%A5%E9%81%93%E7%83%82%E5%9C%B0%E9%87%8C%E4%BA%86%23) `180.0K 🔥`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `174.7K 🔥`
1. [丁程鑫发了严浩翔 (Ding Chengxin sent Yan Haoxiang)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%91%E4%BA%86%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `155.3K 🔥`
1. [成都一凶宅96.6万成交后买家悔拍 (A haunted house in Chengdu was sold for 966,000 yuan and the buyer regretted the sale.)](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E4%B8%80%E5%87%B6%E5%AE%8596.6%E4%B8%87%E6%88%90%E4%BA%A4%E5%90%8E%E4%B9%B0%E5%AE%B6%E6%82%94%E6%8B%8D%23) `106.6K 🔥`
1. [瘫痪小孩为拿手机奇迹站立](https://s.weibo.com/weibo?q=%23%E7%98%AB%E7%97%AA%E5%B0%8F%E5%AD%A9%E4%B8%BA%E6%8B%BF%E6%89%8B%E6%9C%BA%E5%A5%87%E8%BF%B9%E7%AB%99%E7%AB%8B%23) `100.1K 🔥`
1. [女教师被拖行5.9公里致死已两度尸检](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E8%A2%AB%E6%8B%96%E8%A1%8C5.9%E5%85%AC%E9%87%8C%E8%87%B4%E6%AD%BB%E5%B7%B2%E4%B8%A4%E5%BA%A6%E5%B0%B8%E6%A3%80%23) `112.9K 🔥` `-42%`
1. [王子承认逃兵役](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E6%89%BF%E8%AE%A4%E9%80%83%E5%85%B5%E5%BD%B9%23) `97.9K 🔥` `-50%`
1. [369休息](https://s.weibo.com/weibo?q=%23369%E4%BC%91%E6%81%AF%23) `94.8K 🔥` `-69%`
1. [全球股市史诗级暴涨](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%E5%8F%B2%E8%AF%97%E7%BA%A7%E6%9A%B4%E6%B6%A8%23) `93.2K 🔥` `-26%`

Updated at 2026-04-01 22:02:13

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
