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

1. [内娱请把古偶还给少男少女 (Domestic entertainment, please return the ancient dolls to boys and girls)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E8%AF%B7%E6%8A%8A%E5%8F%A4%E5%81%B6%E8%BF%98%E7%BB%99%E5%B0%91%E7%94%B7%E5%B0%91%E5%A5%B3%23) `955.2K 🔥` `NEW`
1. [江浙沪孩子最苦的可能就是退休后](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B5%99%E6%B2%AA%E5%AD%A9%E5%AD%90%E6%9C%80%E8%8B%A6%E7%9A%84%E5%8F%AF%E8%83%BD%E5%B0%B1%E6%98%AF%E9%80%80%E4%BC%91%E5%90%8E%23) `698.3K 🔥` `NEW`
1. [惠民生促消费双向发力](https://s.weibo.com/weibo?q=%23%E6%83%A0%E6%B0%91%E7%94%9F%E4%BF%83%E6%B6%88%E8%B4%B9%E5%8F%8C%E5%90%91%E5%8F%91%E5%8A%9B%23) `650.9K 🔥` `NEW`
1. [老人买肉买走了最难卖的一块](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%B9%B0%E8%82%89%E4%B9%B0%E8%B5%B0%E4%BA%86%E6%9C%80%E9%9A%BE%E5%8D%96%E7%9A%84%E4%B8%80%E5%9D%97%23) `636.6K 🔥` `NEW`
1. [迪丽热巴听到周星驰女儿的表情](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%AC%E5%88%B0%E5%91%A8%E6%98%9F%E9%A9%B0%E5%A5%B3%E5%84%BF%E7%9A%84%E8%A1%A8%E6%83%85%23) `635.4K 🔥` `NEW`
1. [暑期档长剧 裸播](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%A1%A3%E9%95%BF%E5%89%A7%20%E8%A3%B8%E6%92%AD%23) `621.6K 🔥` `NEW`
1. [长鑫科技公告](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%85%AC%E5%91%8A%23) `428.8K 🔥` `NEW`
1. [多地开始抢老人](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%BC%80%E5%A7%8B%E6%8A%A2%E8%80%81%E4%BA%BA%23) `402.9K 🔥` `NEW`
1. [妻子孕四月发现丈夫海量亲密照](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%AD%95%E5%9B%9B%E6%9C%88%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E6%B5%B7%E9%87%8F%E4%BA%B2%E5%AF%86%E7%85%A7%23) `358.9K 🔥` `NEW`
1. [钎城 九尾](https://s.weibo.com/weibo?q=%23%E9%92%8E%E5%9F%8E%20%E4%B9%9D%E5%B0%BE%23) `290.3K 🔥` `NEW`
1. [于正编辑掉和陈都灵合照 (Yu Zheng edited out the photo with Chen Duling)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E7%BC%96%E8%BE%91%E6%8E%89%E5%92%8C%E9%99%88%E9%83%BD%E7%81%B5%E5%90%88%E7%85%A7%23) `289.4K 🔥` `NEW`
1. [极品贵公子井川里予 备注脑婆](https://s.weibo.com/weibo?q=%23%E6%9E%81%E5%93%81%E8%B4%B5%E5%85%AC%E5%AD%90%E4%BA%95%E5%B7%9D%E9%87%8C%E4%BA%88%20%E5%A4%87%E6%B3%A8%E8%84%91%E5%A9%86%23) `276.4K 🔥` `NEW`
1. [央视曝光湖南一地纸上种田](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E6%B9%96%E5%8D%97%E4%B8%80%E5%9C%B0%E7%BA%B8%E4%B8%8A%E7%A7%8D%E7%94%B0%23) `272.5K 🔥` `NEW`
1. [章若楠跑男化妆师评论区被阴阳白干](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%B7%91%E7%94%B7%E5%8C%96%E5%A6%86%E5%B8%88%E8%AF%84%E8%AE%BA%E5%8C%BA%E8%A2%AB%E9%98%B4%E9%98%B3%E7%99%BD%E5%B9%B2%23) `267.9K 🔥` `NEW`
1. [张元英的13岁和21岁](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%9A%8413%E5%B2%81%E5%92%8C21%E5%B2%81%23) `257.0K 🔥` `NEW`
1. [敌敌畏渗到大腿男生被下病危通知](https://s.weibo.com/weibo?q=%23%E6%95%8C%E6%95%8C%E7%95%8F%E6%B8%97%E5%88%B0%E5%A4%A7%E8%85%BF%E7%94%B7%E7%94%9F%E8%A2%AB%E4%B8%8B%E7%97%85%E5%8D%B1%E9%80%9A%E7%9F%A5%23) `254.1K 🔥` `NEW`
1. [于正晒白鹿短发旧照](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E6%99%92%E7%99%BD%E9%B9%BF%E7%9F%AD%E5%8F%91%E6%97%A7%E7%85%A7%23) `253.7K 🔥` `NEW`
1. [多位歌手缺席突围赛](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E6%AD%8C%E6%89%8B%E7%BC%BA%E5%B8%AD%E7%AA%81%E5%9B%B4%E8%B5%9B%23) `250.1K 🔥` `NEW`
1. [贝克汉姆世界杯收入超所有球员](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E4%B8%96%E7%95%8C%E6%9D%AF%E6%94%B6%E5%85%A5%E8%B6%85%E6%89%80%E6%9C%89%E7%90%83%E5%91%98%23) `232.5K 🔥` `NEW`
1. [中国燃油车只剩最后一根续命稻草](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%87%83%E6%B2%B9%E8%BD%A6%E5%8F%AA%E5%89%A9%E6%9C%80%E5%90%8E%E4%B8%80%E6%A0%B9%E7%BB%AD%E5%91%BD%E7%A8%BB%E8%8D%89%23) `227.8K 🔥` `NEW`
1. [入伏后做好6件事攒气血 (Do 6 things to save energy and blood after entering the ambush)](https://s.weibo.com/weibo?q=%23%E5%85%A5%E4%BC%8F%E5%90%8E%E5%81%9A%E5%A5%BD6%E4%BB%B6%E4%BA%8B%E6%94%92%E6%B0%94%E8%A1%80%23) `227.2K 🔥` `NEW`
1. [八仙口碑](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E5%8F%A3%E7%A2%91%23) `226.5K 🔥` `NEW`
1. [虞书欣名品腰臀比](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%90%8D%E5%93%81%E8%85%B0%E8%87%80%E6%AF%94%23) `221.3K 🔥` `NEW`
1. [感觉谈恋爱真的很尴尬](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E8%B0%88%E6%81%8B%E7%88%B1%E7%9C%9F%E7%9A%84%E5%BE%88%E5%B0%B4%E5%B0%AC%23) `216.0K 🔥` `NEW`
1. [北电表演录取的前十名](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B5%E8%A1%A8%E6%BC%94%E5%BD%95%E5%8F%96%E7%9A%84%E5%89%8D%E5%8D%81%E5%90%8D%23) `212.2K 🔥` `NEW`
1. [朋友圈只适合分享浮于表面的东西](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%8F%AA%E9%80%82%E5%90%88%E5%88%86%E4%BA%AB%E6%B5%AE%E4%BA%8E%E8%A1%A8%E9%9D%A2%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `209.5K 🔥` `NEW`
1. [白鹿黑粉道歉信](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%BB%91%E7%B2%89%E9%81%93%E6%AD%89%E4%BF%A1%23) `201.5K 🔥` `NEW`
1. [巴西总统批评巴西国家队](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E6%80%BB%E7%BB%9F%E6%89%B9%E8%AF%84%E5%B7%B4%E8%A5%BF%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `197.0K 🔥` `NEW`
1. [伊朗前总统内贾德被软禁](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%89%8D%E6%80%BB%E7%BB%9F%E5%86%85%E8%B4%BE%E5%BE%B7%E8%A2%AB%E8%BD%AF%E7%A6%81%23) `189.0K 🔥` `NEW`
1. [小米机器人装配成功率98%](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%A3%85%E9%85%8D%E6%88%90%E5%8A%9F%E7%8E%8798%25%23) `186.7K 🔥` `NEW`
1. [许宏宇张雅钦牵手散步 (Xu Hongyu and Zhang Yaqin hold hands for a walk)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%8F%E5%AE%87%E5%BC%A0%E9%9B%85%E9%92%A6%E7%89%B5%E6%89%8B%E6%95%A3%E6%AD%A5%23) `185.9K 🔥` `NEW`
1. [男子回应在妻子孕期出轨留亲密照](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E5%9C%A8%E5%A6%BB%E5%AD%90%E5%AD%95%E6%9C%9F%E5%87%BA%E8%BD%A8%E7%95%99%E4%BA%B2%E5%AF%86%E7%85%A7%23) `178.9K 🔥` `NEW`
1. [虞书欣 全世界正数第一会穿搭](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E5%85%A8%E4%B8%96%E7%95%8C%E6%AD%A3%E6%95%B0%E7%AC%AC%E4%B8%80%E4%BC%9A%E7%A9%BF%E6%90%AD%23) `177.2K 🔥` `NEW`
1. [施南生是蒋南孙原型](https://s.weibo.com/weibo?q=%23%E6%96%BD%E5%8D%97%E7%94%9F%E6%98%AF%E8%92%8B%E5%8D%97%E5%AD%99%E5%8E%9F%E5%9E%8B%23) `173.9K 🔥` `NEW`
1. [养老金向低收入群体倾斜](https://s.weibo.com/weibo?q=%23%E5%85%BB%E8%80%81%E9%87%91%E5%90%91%E4%BD%8E%E6%94%B6%E5%85%A5%E7%BE%A4%E4%BD%93%E5%80%BE%E6%96%9C%23) `162.3K 🔥` `NEW`
1. [曝十日终焉也有张雅钦](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E4%B9%9F%E6%9C%89%E5%BC%A0%E9%9B%85%E9%92%A6%23) `162.0K 🔥` `NEW`
1. [周星驰迪丽热巴路演神图](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B7%AF%E6%BC%94%E7%A5%9E%E5%9B%BE%23) `161.5K 🔥` `NEW`
1. [明明心情好还是躯体化了](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%8E%E5%BF%83%E6%83%85%E5%A5%BD%E8%BF%98%E6%98%AF%E8%BA%AF%E4%BD%93%E5%8C%96%E4%BA%86%23) `158.3K 🔥` `NEW`
1. [张凌赫说丁程鑫为艺术献身](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AF%B4%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%BA%E8%89%BA%E6%9C%AF%E7%8C%AE%E8%BA%AB%23) `157.8K 🔥` `NEW`
1. [女子追尾身亡男友副驾睡觉被起诉](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%BD%E5%B0%BE%E8%BA%AB%E4%BA%A1%E7%94%B7%E5%8F%8B%E5%89%AF%E9%A9%BE%E7%9D%A1%E8%A7%89%E8%A2%AB%E8%B5%B7%E8%AF%89%23) `157.0K 🔥` `NEW`
1. [感动中国2025年度人物 (Touching China's 2025 Person of the Year)](https://s.weibo.com/weibo?q=%23%E6%84%9F%E5%8A%A8%E4%B8%AD%E5%9B%BD2025%E5%B9%B4%E5%BA%A6%E4%BA%BA%E7%89%A9%23) `154.0K 🔥` `NEW`
1. [曝玉簟秋提档播出](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%89%E7%B0%9F%E7%A7%8B%E6%8F%90%E6%A1%A3%E6%92%AD%E5%87%BA%23) `153.3K 🔥` `NEW`
1. [虞书欣收下粉丝送的拼豆](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%94%B6%E4%B8%8B%E7%B2%89%E4%B8%9D%E9%80%81%E7%9A%84%E6%8B%BC%E8%B1%86%23) `151.1K 🔥` `NEW`
1. [突然发现了神态的重要性](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E4%BA%86%E7%A5%9E%E6%80%81%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23) `136.6K 🔥` `NEW`
1. [百花杀S加级](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80S%E5%8A%A0%E7%BA%A7%23) `134.8K 🔥` `NEW`
1. [邹市明谈创业失败原因](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E8%B0%88%E5%88%9B%E4%B8%9A%E5%A4%B1%E8%B4%A5%E5%8E%9F%E5%9B%A0%23) `131.1K 🔥` `NEW`
1. [世界杯决赛球队](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E7%90%83%E9%98%9F%23) `130.7K 🔥` `NEW`
1. [王一博吃西瓜彩蛋](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%90%83%E8%A5%BF%E7%93%9C%E5%BD%A9%E8%9B%8B%23) `130.6K 🔥` `NEW`
1. [伊朗称美进入正式战争状态](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E8%BF%9B%E5%85%A5%E6%AD%A3%E5%BC%8F%E6%88%98%E4%BA%89%E7%8A%B6%E6%80%81%23) `128.6K 🔥` `NEW`
1. [AI预测法国对战西班牙赛果](https://s.weibo.com/weibo?q=%23AI%E9%A2%84%E6%B5%8B%E6%B3%95%E5%9B%BD%E5%AF%B9%E6%88%98%E8%A5%BF%E7%8F%AD%E7%89%99%E8%B5%9B%E6%9E%9C%23) `127.6K 🔥` `NEW`

Updated at 2026-07-15 00:23:46

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
