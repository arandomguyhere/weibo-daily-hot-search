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

1. [广西洪水 (Guangxi floods)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%23) `4.6M 🔥` `NEW`
1. [杨有林死刑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%9C%89%E6%9E%97%E6%AD%BB%E5%88%91%23) `1.3M 🔥` `NEW`
1. [美丽中国建设十五五规划释放利好](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E9%87%8A%E6%94%BE%E5%88%A9%E5%A5%BD%23) `964.8K 🔥` `NEW`
1. [哈兰德连发5条中文动态](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%BF%9E%E5%8F%915%E6%9D%A1%E4%B8%AD%E6%96%87%E5%8A%A8%E6%80%81%23) `792.0K 🔥` `NEW`
1. [暗星抢到票了吗](https://s.weibo.com/weibo?q=%23%E6%9A%97%E6%98%9F%E6%8A%A2%E5%88%B0%E7%A5%A8%E4%BA%86%E5%90%97%23) `665.4K 🔥` `NEW`
1. [大麦崩了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E5%B4%A9%E4%BA%86%23) `576.7K 🔥` `NEW`
1. [王鹤棣把派对开到微博了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%8A%8A%E6%B4%BE%E5%AF%B9%E5%BC%80%E5%88%B0%E5%BE%AE%E5%8D%9A%E4%BA%86%23) `526.2K 🔥` `NEW`
1. [欧足联声明](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E8%B6%B3%E8%81%94%E5%A3%B0%E6%98%8E%23) `506.6K 🔥` `NEW`
1. [迪丽热巴张艺兴8年3搭](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BC%A0%E8%89%BA%E5%85%B48%E5%B9%B43%E6%90%AD%23) `505.8K 🔥` `NEW`
1. [中方试射导弹不针对任何特定国家](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E8%AF%95%E5%B0%84%E5%AF%BC%E5%BC%B9%E4%B8%8D%E9%92%88%E5%AF%B9%E4%BB%BB%E4%BD%95%E7%89%B9%E5%AE%9A%E5%9B%BD%E5%AE%B6%23) `502.8K 🔥` `NEW`
1. [曝华为Mate90正在芯片装测 (Huawei Mate90 is exposed to chip installation and testing)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BAMate90%E6%AD%A3%E5%9C%A8%E8%8A%AF%E7%89%87%E8%A3%85%E6%B5%8B%23) `500.6K 🔥` `NEW`
1. [关晓彤心疼你都有时差](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%BF%83%E7%96%BC%E4%BD%A0%E9%83%BD%E6%9C%89%E6%97%B6%E5%B7%AE%23) `497.3K 🔥` `NEW`
1. [Poka晒与司晓迪聊天记录](https://s.weibo.com/weibo?q=%23Poka%E6%99%92%E4%B8%8E%E5%8F%B8%E6%99%93%E8%BF%AA%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `495.0K 🔥` `NEW`
1. [六蓝水库决堤](https://s.weibo.com/weibo?q=%23%E5%85%AD%E8%93%9D%E6%B0%B4%E5%BA%93%E5%86%B3%E5%A0%A4%23) `493.1K 🔥` `NEW`
1. [影视寒冬具象化了](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `491.6K 🔥` `NEW`
1. [朱珠身高166体重108](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E8%BA%AB%E9%AB%98166%E4%BD%93%E9%87%8D108%23) `464.3K 🔥` `NEW`
1. [中国男篮战胜中国台北男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E6%88%98%E8%83%9C%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E7%94%B7%E7%AF%AE%23) `463.7K 🔥` `NEW`
1. [吃不出寿司郎和711寿司便当区别](https://s.weibo.com/weibo?q=%23%E5%90%83%E4%B8%8D%E5%87%BA%E5%AF%BF%E5%8F%B8%E9%83%8E%E5%92%8C711%E5%AF%BF%E5%8F%B8%E4%BE%BF%E5%BD%93%E5%8C%BA%E5%88%AB%23) `460.3K 🔥` `NEW`
1. [A股医药煤炭板块大涨](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8C%BB%E8%8D%AF%E7%85%A4%E7%82%AD%E6%9D%BF%E5%9D%97%E5%A4%A7%E6%B6%A8%23) `458.0K 🔥` `NEW`
1. [一图看广西雨情](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E7%9C%8B%E5%B9%BF%E8%A5%BF%E9%9B%A8%E6%83%85%23) `456.9K 🔥` `NEW`
1. [世界第一把解放双手的免提伞 (The world’s first hands-free umbrella)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%E6%8A%8A%E8%A7%A3%E6%94%BE%E5%8F%8C%E6%89%8B%E7%9A%84%E5%85%8D%E6%8F%90%E4%BC%9E%23) `453.7K 🔥` `NEW`
1. [司晓迪曝汪苏泷恋情](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%99%93%E8%BF%AA%E6%9B%9D%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%81%8B%E6%83%85%23) `452.1K 🔥` `NEW`
1. [过去24小时广西下了多少雨](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%8E%BB24%E5%B0%8F%E6%97%B6%E5%B9%BF%E8%A5%BF%E4%B8%8B%E4%BA%86%E5%A4%9A%E5%B0%91%E9%9B%A8%23) `447.6K 🔥` `NEW`
1. [到底是谁抢到了王俊凯的票](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E6%98%AF%E8%B0%81%E6%8A%A2%E5%88%B0%E4%BA%86%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%9A%84%E7%A5%A8%23) `446.0K 🔥` `NEW`
1. [周星驰回来了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `443.5K 🔥` `NEW`
1. [公司要给我涨薪我怎么拒绝](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%A6%81%E7%BB%99%E6%88%91%E6%B6%A8%E8%96%AA%E6%88%91%E6%80%8E%E4%B9%88%E6%8B%92%E7%BB%9D%23) `441.4K 🔥` `NEW`
1. [正午阳光公子哥 侯鸿亮儿子](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E5%85%AC%E5%AD%90%E5%93%A5%20%E4%BE%AF%E9%B8%BF%E4%BA%AE%E5%84%BF%E5%AD%90%23) `438.5K 🔥` `NEW`
1. [papi酱 好实用的图](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%20%E5%A5%BD%E5%AE%9E%E7%94%A8%E7%9A%84%E5%9B%BE%23) `436.0K 🔥` `NEW`
1. [美客机在空中被烟花击中](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%A2%E6%9C%BA%E5%9C%A8%E7%A9%BA%E4%B8%AD%E8%A2%AB%E7%83%9F%E8%8A%B1%E5%87%BB%E4%B8%AD%23) `435.1K 🔥` `NEW`
1. [迪丽热巴代言投广功夫女足](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BB%A3%E8%A8%80%E6%8A%95%E5%B9%BF%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `431.4K 🔥` `NEW`
1. [一种很新的分蛋糕方式 (A very new way of dividing the cake)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%A7%8D%E5%BE%88%E6%96%B0%E7%9A%84%E5%88%86%E8%9B%8B%E7%B3%95%E6%96%B9%E5%BC%8F%23) `429.8K 🔥` `NEW`
1. [时代峰峻未给四代正确引导](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%9C%AA%E7%BB%99%E5%9B%9B%E4%BB%A3%E6%AD%A3%E7%A1%AE%E5%BC%95%E5%AF%BC%23) `428.5K 🔥` `NEW`
1. [国际足联震惊整个足球界](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E9%9C%87%E6%83%8A%E6%95%B4%E4%B8%AA%E8%B6%B3%E7%90%83%E7%95%8C%23) `425.2K 🔥` `NEW`
1. [Poka 夏夏](https://s.weibo.com/weibo?q=%23Poka%20%E5%A4%8F%E5%A4%8F%23) `423.5K 🔥` `NEW`
1. [去面试发现HR被辞退了](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E9%9D%A2%E8%AF%95%E5%8F%91%E7%8E%B0HR%E8%A2%AB%E8%BE%9E%E9%80%80%E4%BA%86%23) `420.9K 🔥` `NEW`
1. [网红刘一手离婚](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%88%98%E4%B8%80%E6%89%8B%E7%A6%BB%E5%A9%9A%23) `418.7K 🔥` `NEW`
1. [KPL赛程](https://s.weibo.com/weibo?q=%23KPL%E8%B5%9B%E7%A8%8B%23) `414.9K 🔥` `NEW`
1. [汪苏泷快来收媒人费](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%BF%AB%E6%9D%A5%E6%94%B6%E5%AA%92%E4%BA%BA%E8%B4%B9%23) `411.3K 🔥` `NEW`
1. [程潇资助贫困高中女生](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E8%B5%84%E5%8A%A9%E8%B4%AB%E5%9B%B0%E9%AB%98%E4%B8%AD%E5%A5%B3%E7%94%9F%23) `409.2K 🔥` `NEW`
1. [米勒直播剃寸头染发](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8B%92%E7%9B%B4%E6%92%AD%E5%89%83%E5%AF%B8%E5%A4%B4%E6%9F%93%E5%8F%91%23) `407.5K 🔥` `NEW`
1. [国际乒联解说称孙颖莎是女乒最强选手 (ITTF commentator says Sun Yingsha is the strongest female table tennis player)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E4%B9%92%E8%81%94%E8%A7%A3%E8%AF%B4%E7%A7%B0%E5%AD%99%E9%A2%96%E8%8E%8E%E6%98%AF%E5%A5%B3%E4%B9%92%E6%9C%80%E5%BC%BA%E9%80%89%E6%89%8B%23) `406.1K 🔥` `NEW`
1. [郝熠然直播](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%E7%9B%B4%E6%92%AD%23) `401.7K 🔥` `NEW`
1. [广西多个村庄淹水超1米](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%A4%9A%E4%B8%AA%E6%9D%91%E5%BA%84%E6%B7%B9%E6%B0%B4%E8%B6%851%E7%B1%B3%23) `398.9K 🔥` `NEW`
1. [哈兰德回复陈赫](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%9B%9E%E5%A4%8D%E9%99%88%E8%B5%AB%23) `397.5K 🔥` `NEW`
1. [何与探班孟子义](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E6%8E%A2%E7%8F%AD%E5%AD%9F%E5%AD%90%E4%B9%89%23) `394.1K 🔥` `NEW`
1. [iPhoneUltra和18ProMax对比](https://s.weibo.com/weibo?q=%23iPhoneUltra%E5%92%8C18ProMax%E5%AF%B9%E6%AF%94%23) `393.3K 🔥` `NEW`
1. [800km纯电干进18万](https://s.weibo.com/weibo?q=%23800km%E7%BA%AF%E7%94%B5%E5%B9%B2%E8%BF%9B18%E4%B8%87%23) `389.7K 🔥` `NEW`
1. [陈靖可看虞书欣卖萌的反应](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9D%96%E5%8F%AF%E7%9C%8B%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8D%96%E8%90%8C%E7%9A%84%E5%8F%8D%E5%BA%94%23) `388.0K 🔥` `NEW`
1. [鹿晗关晓彤的最后一次互动 (Luhan and Guan Xiaotong’s last interaction)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%85%B3%E6%99%93%E5%BD%A4%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E4%BA%92%E5%8A%A8%23) `449.7K 🔥` `+24%`
1. [冉莹颖邹市明三次离婚没离成](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E9%82%B9%E5%B8%82%E6%98%8E%E4%B8%89%E6%AC%A1%E7%A6%BB%E5%A9%9A%E6%B2%A1%E7%A6%BB%E6%88%90%23) `403.6K 🔥` `+97%`
1. [哈兰德又偷喝了对方门将的水](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%8F%88%E5%81%B7%E5%96%9D%E4%BA%86%E5%AF%B9%E6%96%B9%E9%97%A8%E5%B0%86%E7%9A%84%E6%B0%B4%23) `417.0K 🔥` `-59%`

Updated at 2026-07-06 18:58:31

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
