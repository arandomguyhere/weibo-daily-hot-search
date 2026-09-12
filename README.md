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

1. [罗永浩谈付航脱口秀禁黄牛票入场](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%B0%88%E4%BB%98%E8%88%AA%E8%84%B1%E5%8F%A3%E7%A7%80%E7%A6%81%E9%BB%84%E7%89%9B%E7%A5%A8%E5%85%A5%E5%9C%BA%23) `1.1M 🔥` `NEW`
1. [金砖合作打造互联互通贸易通道](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A0%96%E5%90%88%E4%BD%9C%E6%89%93%E9%80%A0%E4%BA%92%E8%81%94%E4%BA%92%E9%80%9A%E8%B4%B8%E6%98%93%E9%80%9A%E9%81%93%23) `738.9K 🔥` `NEW`
1. [一条小团团首播](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9D%A1%E5%B0%8F%E5%9B%A2%E5%9B%A2%E9%A6%96%E6%92%AD%23) `736.7K 🔥` `NEW`
1. [茶叶蛋vs白煮蛋](https://s.weibo.com/weibo?q=%23%E8%8C%B6%E5%8F%B6%E8%9B%8Bvs%E7%99%BD%E7%85%AE%E8%9B%8B%23) `434.8K 🔥` `NEW`
1. [说唱巅峰对决2026总决赛](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E5%94%B1%E5%B7%85%E5%B3%B0%E5%AF%B9%E5%86%B32026%E6%80%BB%E5%86%B3%E8%B5%9B%23) `434.2K 🔥` `NEW`
1. [肥肉煮熟切片包豆沙一个月卖8万元](https://s.weibo.com/weibo?q=%23%E8%82%A5%E8%82%89%E7%85%AE%E7%86%9F%E5%88%87%E7%89%87%E5%8C%85%E8%B1%86%E6%B2%99%E4%B8%80%E4%B8%AA%E6%9C%88%E5%8D%968%E4%B8%87%E5%85%83%23) `433.4K 🔥` `NEW`
1. [AL对战IG](https://s.weibo.com/weibo?q=%23AL%E5%AF%B9%E6%88%98IG%23) `432.7K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `432.0K 🔥` `NEW`
1. [苹果18 抢不到](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C18%20%E6%8A%A2%E4%B8%8D%E5%88%B0%23) `431.8K 🔥` `NEW`
1. [Lisa说YG限制她很多](https://s.weibo.com/weibo?q=%23Lisa%E8%AF%B4YG%E9%99%90%E5%88%B6%E5%A5%B9%E5%BE%88%E5%A4%9A%23) `430.9K 🔥` `NEW`
1. [200部AI短剧才出1个爆款](https://s.weibo.com/weibo?q=%23200%E9%83%A8AI%E7%9F%AD%E5%89%A7%E6%89%8D%E5%87%BA1%E4%B8%AA%E7%88%86%E6%AC%BE%23) `429.9K 🔥` `NEW`
1. [女婴在月子中心无呼吸心跳送医死亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A9%B4%E5%9C%A8%E6%9C%88%E5%AD%90%E4%B8%AD%E5%BF%83%E6%97%A0%E5%91%BC%E5%90%B8%E5%BF%83%E8%B7%B3%E9%80%81%E5%8C%BB%E6%AD%BB%E4%BA%A1%23) `429.7K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `428.7K 🔥` `NEW`
1. [在豆包抢iPhone18Pro首批现货](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E8%B1%86%E5%8C%85%E6%8A%A2iPhone18Pro%E9%A6%96%E6%89%B9%E7%8E%B0%E8%B4%A7%23) `428.6K 🔥` `NEW`
1. [全国最大泡泡玛特开业](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%9C%80%E5%A4%A7%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E5%BC%80%E4%B8%9A%23) `427.8K 🔥` `NEW`
1. [15名同事合买彩票中奖3000万](https://s.weibo.com/weibo?q=%2315%E5%90%8D%E5%90%8C%E4%BA%8B%E5%90%88%E4%B9%B0%E5%BD%A9%E7%A5%A8%E4%B8%AD%E5%A5%963000%E4%B8%87%23) `427.4K 🔥` `NEW`
1. [iPhone18Pro开卖天猫货量管够](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%BC%80%E5%8D%96%E5%A4%A9%E7%8C%AB%E8%B4%A7%E9%87%8F%E7%AE%A1%E5%A4%9F%23) `426.4K 🔥` `NEW`
1. [公职人员醉驾超速致夫妻双亡](https://s.weibo.com/weibo?q=%23%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E9%86%89%E9%A9%BE%E8%B6%85%E9%80%9F%E8%87%B4%E5%A4%AB%E5%A6%BB%E5%8F%8C%E4%BA%A1%23) `426.2K 🔥` `NEW`
1. [赵樱子宋承宪自拍](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90%E5%AE%8B%E6%89%BF%E5%AE%AA%E8%87%AA%E6%8B%8D%23) `425.2K 🔥` `NEW`
1. [刘美含兰香如故演丫鬟](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BE%8E%E5%90%AB%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%BC%94%E4%B8%AB%E9%AC%9F%23) `377.1K 🔥` `NEW`
1. [多地小学改为养老院](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%B0%8F%E5%AD%A6%E6%94%B9%E4%B8%BA%E5%85%BB%E8%80%81%E9%99%A2%23) `365.3K 🔥` `NEW`
1. [教资科三](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%B5%84%E7%A7%91%E4%B8%89%23) `351.3K 🔥` `NEW`
1. [张元英Dior大秀](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1Dior%E5%A4%A7%E7%A7%80%23) `346.7K 🔥` `NEW`
1. [魏哲鸣的智性告白](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%93%B2%E9%B8%A3%E7%9A%84%E6%99%BA%E6%80%A7%E5%91%8A%E7%99%BD%23) `301.3K 🔥` `NEW`
1. [雷军赴徐州交付小米澎程原因](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%B5%B4%E5%BE%90%E5%B7%9E%E4%BA%A4%E4%BB%98%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E5%8E%9F%E5%9B%A0%23) `296.6K 🔥` `NEW`
1. [鞠婧祎直播](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%9B%B4%E6%92%AD%23) `251.9K 🔥` `NEW`
1. [狼队对战TTG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98TTG%23) `234.7K 🔥` `NEW`
1. [突然发现大家的吃商到了极致](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%AE%B6%E7%9A%84%E5%90%83%E5%95%86%E5%88%B0%E4%BA%86%E6%9E%81%E8%87%B4%23) `220.9K 🔥` `NEW`
1. [苹果官网AppleStore开启维护](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%AE%98%E7%BD%91AppleStore%E5%BC%80%E5%90%AF%E7%BB%B4%E6%8A%A4%23) `191.3K 🔥` `NEW`
1. [AL碾压了iG](https://s.weibo.com/weibo?q=%23AL%E7%A2%BE%E5%8E%8B%E4%BA%86iG%23) `185.8K 🔥` `NEW`
1. [张家齐在国家队都是阶段性朋友](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%9C%A8%E5%9B%BD%E5%AE%B6%E9%98%9F%E9%83%BD%E6%98%AF%E9%98%B6%E6%AE%B5%E6%80%A7%E6%9C%8B%E5%8F%8B%23) `182.6K 🔥` `NEW`
1. [巴林男篮赛后拒绝握手](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%9E%97%E7%94%B7%E7%AF%AE%E8%B5%9B%E5%90%8E%E6%8B%92%E7%BB%9D%E6%8F%A1%E6%89%8B%23) `180.7K 🔥` `NEW`
1. [宋雨琦海边度假照片](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%B5%B7%E8%BE%B9%E5%BA%A6%E5%81%87%E7%85%A7%E7%89%87%23) `178.2K 🔥` `NEW`
1. [刘宇宁直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%23) `167.5K 🔥` `NEW`
1. [苹果官网预售卡顿](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%AE%98%E7%BD%91%E9%A2%84%E5%94%AE%E5%8D%A1%E9%A1%BF%23) `160.2K 🔥` `NEW`
1. [卢昱晓张凌赫体型差](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BD%93%E5%9E%8B%E5%B7%AE%23) `160.2K 🔥` `NEW`
1. [郑佩佩给花少1成员打分](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%BD%A9%E4%BD%A9%E7%BB%99%E8%8A%B1%E5%B0%911%E6%88%90%E5%91%98%E6%89%93%E5%88%86%23) `159.1K 🔥` `NEW`
1. [印度一地村民将技术人员绑信号塔上](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E5%9C%B0%E6%9D%91%E6%B0%91%E5%B0%86%E6%8A%80%E6%9C%AF%E4%BA%BA%E5%91%98%E7%BB%91%E4%BF%A1%E5%8F%B7%E5%A1%94%E4%B8%8A%23) `159.0K 🔥` `NEW`
1. [AL虐泉iG](https://s.weibo.com/weibo?q=%23AL%E8%99%90%E6%B3%89iG%23) `158.5K 🔥` `NEW`
1. [安倍遇刺时一名路人曾被警察撞骨折](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%80%8D%E9%81%87%E5%88%BA%E6%97%B6%E4%B8%80%E5%90%8D%E8%B7%AF%E4%BA%BA%E6%9B%BE%E8%A2%AB%E8%AD%A6%E5%AF%9F%E6%92%9E%E9%AA%A8%E6%8A%98%23) `157.9K 🔥` `NEW`
1. [梅姨抛弃3岁亲生儿子](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%8A%9B%E5%BC%833%E5%B2%81%E4%BA%B2%E7%94%9F%E5%84%BF%E5%AD%90%23) `156.9K 🔥` `NEW`
1. [华为展翼三折叠今日开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%B1%95%E7%BF%BC%E4%B8%89%E6%8A%98%E5%8F%A0%E4%BB%8A%E6%97%A5%E5%BC%80%E5%94%AE%23) `737.8K 🔥` `+37%`
1. [普京称不明白G7为什么还叫大国](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%A7%B0%E4%B8%8D%E6%98%8E%E7%99%BDG7%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%98%E5%8F%AB%E5%A4%A7%E5%9B%BD%23) `430.6K 🔥` `+24%`
1. [郭文韬当爸](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%96%87%E9%9F%AC%E5%BD%93%E7%88%B8%23) `378.2K 🔥`
1. [必须查清烧烤店两个月被查15次](https://s.weibo.com/weibo?q=%23%E5%BF%85%E9%A1%BB%E6%9F%A5%E6%B8%85%E7%83%A7%E7%83%A4%E5%BA%97%E4%B8%A4%E4%B8%AA%E6%9C%88%E8%A2%AB%E6%9F%A515%E6%AC%A1%23) `294.4K 🔥`
1. [iPhoneDuo溢价至79999元](https://s.weibo.com/weibo?q=%23iPhoneDuo%E6%BA%A2%E4%BB%B7%E8%87%B379999%E5%85%83%23) `253.8K 🔥`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `775.1K 🔥` `-32%`
1. [郑佩佩自传里写的花少](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%BD%A9%E4%BD%A9%E8%87%AA%E4%BC%A0%E9%87%8C%E5%86%99%E7%9A%84%E8%8A%B1%E5%B0%91%23) `434.1K 🔥` `-34%`
1. [付航脱口秀1000张黄牛票无法入场](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%88%AA%E8%84%B1%E5%8F%A3%E7%A7%801000%E5%BC%A0%E9%BB%84%E7%89%9B%E7%A5%A8%E6%97%A0%E6%B3%95%E5%85%A5%E5%9C%BA%23) `425.4K 🔥` `-34%`
1. [支付宝 假APP](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%20%E5%81%87APP%23) `388.4K 🔥` `-41%`
1. [名校硕士因第一学历是专科遭大厂拒绝](https://s.weibo.com/weibo?q=%23%E5%90%8D%E6%A0%A1%E7%A1%95%E5%A3%AB%E5%9B%A0%E7%AC%AC%E4%B8%80%E5%AD%A6%E5%8E%86%E6%98%AF%E4%B8%93%E7%A7%91%E9%81%AD%E5%A4%A7%E5%8E%82%E6%8B%92%E7%BB%9D%23) `179.9K 🔥` `-46%`

Updated at 2026-09-12 20:32:19

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
