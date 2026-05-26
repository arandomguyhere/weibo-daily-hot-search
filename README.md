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

1. [女干部展示不到100元的耳环 (Female cadre shows off earrings costing less than 100 yuan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%B9%B2%E9%83%A8%E5%B1%95%E7%A4%BA%E4%B8%8D%E5%88%B0100%E5%85%83%E7%9A%84%E8%80%B3%E7%8E%AF%23) `2.6M 🔥` `NEW`
1. [现在就出发](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `1.5M 🔥` `NEW`
1. [暴雨山洪来了怎么办](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E5%B1%B1%E6%B4%AA%E6%9D%A5%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E%23) `1.5M 🔥` `NEW`
1. [白玉兰 利剑玫瑰](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%20%E5%88%A9%E5%89%91%E7%8E%AB%E7%91%B0%23) `1.5M 🔥` `NEW`
1. [30个太阳休一天](https://s.weibo.com/weibo?q=%2330%E4%B8%AA%E5%A4%AA%E9%98%B3%E4%BC%91%E4%B8%80%E5%A4%A9%23) `1.0M 🔥` `NEW`
1. [嗑cp是一个很私人的事儿](https://s.weibo.com/weibo?q=%23%E5%97%91cp%E6%98%AF%E4%B8%80%E4%B8%AA%E5%BE%88%E7%A7%81%E4%BA%BA%E7%9A%84%E4%BA%8B%E5%84%BF%23) `753.6K 🔥` `NEW`
1. [别克LPGA首次移师佘山](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%85%8BLPGA%E9%A6%96%E6%AC%A1%E7%A7%BB%E5%B8%88%E4%BD%98%E5%B1%B1%23) `712.8K 🔥` `NEW`
1. [网传成龙将演黄仁勋](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%88%90%E9%BE%99%E5%B0%86%E6%BC%94%E9%BB%84%E4%BB%81%E5%8B%8B%23) `658.8K 🔥` `NEW`
1. [肯德基热干面](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E7%83%AD%E5%B9%B2%E9%9D%A2%23) `641.0K 🔥` `NEW`
1. [鸿蒙智行正式起诉自媒体圈内人](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E6%AD%A3%E5%BC%8F%E8%B5%B7%E8%AF%89%E8%87%AA%E5%AA%92%E4%BD%93%E5%9C%88%E5%86%85%E4%BA%BA%23) `364.4K 🔥` `NEW`
1. [武契奇到小米汽车工厂参访 (Vucic visits Xiaomi automobile factory)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E5%88%B0%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%B7%A5%E5%8E%82%E5%8F%82%E8%AE%BF%23) `358.2K 🔥` `NEW`
1. [陶喆永远不会塌房 因为早已废墟](https://s.weibo.com/weibo?q=%23%E9%99%B6%E5%96%86%E6%B0%B8%E8%BF%9C%E4%B8%8D%E4%BC%9A%E5%A1%8C%E6%88%BF%20%E5%9B%A0%E4%B8%BA%E6%97%A9%E5%B7%B2%E5%BA%9F%E5%A2%9F%23) `356.0K 🔥` `NEW`
1. [印度电工往变压器上浇水](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B5%E5%B7%A5%E5%BE%80%E5%8F%98%E5%8E%8B%E5%99%A8%E4%B8%8A%E6%B5%87%E6%B0%B4%23) `355.9K 🔥` `NEW`
1. [央视曝光黑作坊电子烟](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E9%BB%91%E4%BD%9C%E5%9D%8A%E7%94%B5%E5%AD%90%E7%83%9F%23) `354.1K 🔥` `NEW`
1. [大润发创始人去世](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%B6%A6%E5%8F%91%E5%88%9B%E5%A7%8B%E4%BA%BA%E5%8E%BB%E4%B8%96%23) `351.3K 🔥` `NEW`
1. [小米汽车发布世界模型全新框架](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%8F%91%E5%B8%83%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B%E5%85%A8%E6%96%B0%E6%A1%86%E6%9E%B6%23) `349.2K 🔥` `NEW`
1. [大爷地铁上疑偷拍拒删视频遭掌掴](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E5%9C%B0%E9%93%81%E4%B8%8A%E7%96%91%E5%81%B7%E6%8B%8D%E6%8B%92%E5%88%A0%E8%A7%86%E9%A2%91%E9%81%AD%E6%8E%8C%E6%8E%B4%23) `348.7K 🔥` `NEW`
1. [沃尔玛回应顾客摸猫后碰熟食](https://s.weibo.com/weibo?q=%23%E6%B2%83%E5%B0%94%E7%8E%9B%E5%9B%9E%E5%BA%94%E9%A1%BE%E5%AE%A2%E6%91%B8%E7%8C%AB%E5%90%8E%E7%A2%B0%E7%86%9F%E9%A3%9F%23) `346.4K 🔥` `NEW`
1. [权志龙Jennie出席香奈儿大秀](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99Jennie%E5%87%BA%E5%B8%AD%E9%A6%99%E5%A5%88%E5%84%BF%E5%A4%A7%E7%A7%80%23) `345.5K 🔥` `NEW`
1. [五星级酒店推12888元自助餐年卡](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%98%9F%E7%BA%A7%E9%85%92%E5%BA%97%E6%8E%A812888%E5%85%83%E8%87%AA%E5%8A%A9%E9%A4%90%E5%B9%B4%E5%8D%A1%23) `343.5K 🔥` `NEW`
1. [人民的玫瑰大厂的玉兰 (People's Rose Magnolia Plant)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E7%9A%84%E7%8E%AB%E7%91%B0%E5%A4%A7%E5%8E%82%E7%9A%84%E7%8E%89%E5%85%B0%23) `341.0K 🔥` `NEW`
1. [秦昊看完分析有点不舒服了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E7%9C%8B%E5%AE%8C%E5%88%86%E6%9E%90%E6%9C%89%E7%82%B9%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `339.7K 🔥` `NEW`
1. [颜凯 be丑学](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%87%AF%20be%E4%B8%91%E5%AD%A6%23) `335.8K 🔥` `NEW`
1. [A股新股王19天暴涨22倍](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%96%B0%E8%82%A1%E7%8E%8B19%E5%A4%A9%E6%9A%B4%E6%B6%A822%E5%80%8D%23) `335.1K 🔥` `NEW`
1. [一人之下 AI作画](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%BA%E4%B9%8B%E4%B8%8B%20AI%E4%BD%9C%E7%94%BB%23) `333.8K 🔥` `NEW`
1. [百万网红林思琪捐款1047万](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E7%BD%91%E7%BA%A2%E6%9E%97%E6%80%9D%E7%90%AA%E6%8D%90%E6%AC%BE1047%E4%B8%87%23) `330.5K 🔥` `NEW`
1. [杭州湿度超亚马孙丛林](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%B9%BF%E5%BA%A6%E8%B6%85%E4%BA%9A%E9%A9%AC%E5%AD%99%E4%B8%9B%E6%9E%97%23) `327.3K 🔥` `NEW`
1. [利特车祸](https://s.weibo.com/weibo?q=%23%E5%88%A9%E7%89%B9%E8%BD%A6%E7%A5%B8%23) `326.0K 🔥` `NEW`
1. [苏芒 产后复工连工位都没了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%8A%92%20%E4%BA%A7%E5%90%8E%E5%A4%8D%E5%B7%A5%E8%BF%9E%E5%B7%A5%E4%BD%8D%E9%83%BD%E6%B2%A1%E4%BA%86%23) `323.9K 🔥` `NEW`
1. [女子患红斑狼疮孕32周失去孩子](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%82%A3%E7%BA%A2%E6%96%91%E7%8B%BC%E7%96%AE%E5%AD%9532%E5%91%A8%E5%A4%B1%E5%8E%BB%E5%AD%A9%E5%AD%90%23) `322.3K 🔥` `NEW`
1. [沈月涨粉超55万 (Shen Yue’s followers increased by over 550,000)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%B6%A8%E7%B2%89%E8%B6%8555%E4%B8%87%23) `320.7K 🔥` `NEW`
1. [王鹤棣不舒服文学已升级](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E4%B8%8D%E8%88%92%E6%9C%8D%E6%96%87%E5%AD%A6%E5%B7%B2%E5%8D%87%E7%BA%A7%23) `318.9K 🔥` `NEW`
1. [韩国游客给中国孩子韩币做纪念](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B8%B8%E5%AE%A2%E7%BB%99%E4%B8%AD%E5%9B%BD%E5%AD%A9%E5%AD%90%E9%9F%A9%E5%B8%81%E5%81%9A%E7%BA%AA%E5%BF%B5%23) `318.7K 🔥` `NEW`
1. [白玉兰](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `316.7K 🔥` `NEW`
1. [白玉兰提名剧集数据](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E5%89%A7%E9%9B%86%E6%95%B0%E6%8D%AE%23) `314.8K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `312.9K 🔥` `NEW`
1. [偷拍裙底男生已取消公务员录用资格](https://s.weibo.com/weibo?q=%23%E5%81%B7%E6%8B%8D%E8%A3%99%E5%BA%95%E7%94%B7%E7%94%9F%E5%B7%B2%E5%8F%96%E6%B6%88%E5%85%AC%E5%8A%A1%E5%91%98%E5%BD%95%E7%94%A8%E8%B5%84%E6%A0%BC%23) `311.9K 🔥` `NEW`
1. [杨紫徐百慧时隔20年二搭演母女](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%BE%90%E7%99%BE%E6%85%A7%E6%97%B6%E9%9A%9420%E5%B9%B4%E4%BA%8C%E6%90%AD%E6%BC%94%E6%AF%8D%E5%A5%B3%23) `308.6K 🔥` `NEW`
1. [谁懂在京东疯狂捡钱的快乐](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E5%9C%A8%E4%BA%AC%E4%B8%9C%E7%96%AF%E7%8B%82%E6%8D%A1%E9%92%B1%E7%9A%84%E5%BF%AB%E4%B9%90%23) `308.0K 🔥` `NEW`
1. [蒋毅与妻子直播吵架](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AF%85%E4%B8%8E%E5%A6%BB%E5%AD%90%E7%9B%B4%E6%92%AD%E5%90%B5%E6%9E%B6%23) `305.7K 🔥` `NEW`
1. [赵丽颖去流量化 (Zhao Liying de-trafficizes)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%8E%BB%E6%B5%81%E9%87%8F%E5%8C%96%23) `302.4K 🔥` `NEW`
1. [曝宋亚轩回归现在就出发4](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9E%E5%BD%92%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `300.9K 🔥` `NEW`
1. [讨厌一个人是不用去翻脸的](https://s.weibo.com/weibo?q=%23%E8%AE%A8%E5%8E%8C%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%98%AF%E4%B8%8D%E7%94%A8%E5%8E%BB%E7%BF%BB%E8%84%B8%E7%9A%84%23) `299.7K 🔥` `NEW`
1. [线上国补券怎么抢成功率高](https://s.weibo.com/weibo?q=%23%E7%BA%BF%E4%B8%8A%E5%9B%BD%E8%A1%A5%E5%88%B8%E6%80%8E%E4%B9%88%E6%8A%A2%E6%88%90%E5%8A%9F%E7%8E%87%E9%AB%98%23) `298.4K 🔥` `NEW`
1. [月薪十万 信息流广告演员](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA%E5%8D%81%E4%B8%87%20%E4%BF%A1%E6%81%AF%E6%B5%81%E5%B9%BF%E5%91%8A%E6%BC%94%E5%91%98%23) `295.7K 🔥` `NEW`
1. [小鹏GX开启大规模交付 (Xpeng GX starts large-scale delivery)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FGX%E5%BC%80%E5%90%AF%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%BA%A4%E4%BB%98%23) `1.5M 🔥` `+68%`
1. [米切尔鼓舞士气无人回应](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%88%87%E5%B0%94%E9%BC%93%E8%88%9E%E5%A3%AB%E6%B0%94%E6%97%A0%E4%BA%BA%E5%9B%9E%E5%BA%94%23) `362.8K 🔥` `-43%`
1. [温岚在ICU抢救了10天 (Wen Lan spent 10 days in ICU)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B2%9A%E5%9C%A8ICU%E6%8A%A2%E6%95%91%E4%BA%8610%E5%A4%A9%23) `361.2K 🔥` `-43%`
1. [王星越说有女朋友了拒加微信](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%E8%AF%B4%E6%9C%89%E5%A5%B3%E6%9C%8B%E5%8F%8B%E4%BA%86%E6%8B%92%E5%8A%A0%E5%BE%AE%E4%BF%A1%23) `359.6K 🔥` `-43%`
1. [学校已报警将追究造谣者责任](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%A0%A1%E5%B7%B2%E6%8A%A5%E8%AD%A6%E5%B0%86%E8%BF%BD%E7%A9%B6%E9%80%A0%E8%B0%A3%E8%80%85%E8%B4%A3%E4%BB%BB%23) `338.8K 🔥` `-46%`
1. [粉丝给沈月送只是沈月奖](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E7%BB%99%E6%B2%88%E6%9C%88%E9%80%81%E5%8F%AA%E6%98%AF%E6%B2%88%E6%9C%88%E5%A5%96%23) `331.4K 🔥` `-47%`
1. [郑钦文需要从资格赛开始打起](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%9C%80%E8%A6%81%E4%BB%8E%E8%B5%84%E6%A0%BC%E8%B5%9B%E5%BC%80%E5%A7%8B%E6%89%93%E8%B5%B7%23) `304.8K 🔥` `-47%`

Updated at 2026-05-26 18:31:04

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
