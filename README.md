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

1. [纸尿裤 有毒 (Diapers are toxic)](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%B0%BF%E8%A3%A4%20%E6%9C%89%E6%AF%92%23) `12.4M 🔥` `NEW`
1. [babycare回应](https://s.weibo.com/weibo?q=%23babycare%E5%9B%9E%E5%BA%94%23) `4.4M 🔥` `NEW`
1. [C罗回应葡萄牙爆冷战平](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%9B%9E%E5%BA%94%E8%91%A1%E8%90%84%E7%89%99%E7%88%86%E5%86%B7%E6%88%98%E5%B9%B3%23) `1.3M 🔥` `NEW`
1. [你想知道的端午假期天气](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%83%B3%E7%9F%A5%E9%81%93%E7%9A%84%E7%AB%AF%E5%8D%88%E5%81%87%E6%9C%9F%E5%A4%A9%E6%B0%94%23) `1.0M 🔥` `NEW`
1. [问界M7见证幸福每一刻](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM7%E8%A7%81%E8%AF%81%E5%B9%B8%E7%A6%8F%E6%AF%8F%E4%B8%80%E5%88%BB%23) `999.2K 🔥` `NEW`
1. [曝周冬雨话剧不背台词](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%91%A8%E5%86%AC%E9%9B%A8%E8%AF%9D%E5%89%A7%E4%B8%8D%E8%83%8C%E5%8F%B0%E8%AF%8D%23) `998.0K 🔥` `NEW`
1. [碧芭宝贝回应纸尿裤检出毒物质](https://s.weibo.com/weibo?q=%23%E7%A2%A7%E8%8A%AD%E5%AE%9D%E8%B4%9D%E5%9B%9E%E5%BA%94%E7%BA%B8%E5%B0%BF%E8%A3%A4%E6%A3%80%E5%87%BA%E6%AF%92%E7%89%A9%E8%B4%A8%23) `942.0K 🔥` `NEW`
1. [亨利批C罗只想自己进球](https://s.weibo.com/weibo?q=%23%E4%BA%A8%E5%88%A9%E6%89%B9C%E7%BD%97%E5%8F%AA%E6%83%B3%E8%87%AA%E5%B7%B1%E8%BF%9B%E7%90%83%23) `396.1K 🔥` `NEW`
1. [彩鲸大神榜](https://s.weibo.com/weibo?q=%23%E5%BD%A9%E9%B2%B8%E5%A4%A7%E7%A5%9E%E6%A6%9C%23) `394.7K 🔥` `NEW`
1. [甲酰胺 生殖毒性](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%85%B0%E8%83%BA%20%E7%94%9F%E6%AE%96%E6%AF%92%E6%80%A7%23) `393.5K 🔥` `NEW`
1. [网传浪姐7成团位12人 (It is reported online that 70% of Sister Lang’s group has 12 people)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%907%E6%88%90%E5%9B%A2%E4%BD%8D12%E4%BA%BA%23) `374.9K 🔥` `NEW`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `350.5K 🔥` `NEW`
1. [存储芯片疯狂涨价](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E7%96%AF%E7%8B%82%E6%B6%A8%E4%BB%B7%23) `349.5K 🔥` `NEW`
1. [亚洲队首轮2胜4平3负](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%B4%B2%E9%98%9F%E9%A6%96%E8%BD%AE2%E8%83%9C4%E5%B9%B33%E8%B4%9F%23) `347.7K 🔥` `NEW`
1. [孙怡 我想整但经纪人不让](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E6%88%91%E6%83%B3%E6%95%B4%E4%BD%86%E7%BB%8F%E7%BA%AA%E4%BA%BA%E4%B8%8D%E8%AE%A9%23) `344.8K 🔥` `NEW`
1. [帮宝适](https://s.weibo.com/weibo?q=%23%E5%B8%AE%E5%AE%9D%E9%80%82%23) `342.7K 🔥` `NEW`
1. [沟通删除照片的是刘芮麟太太](https://s.weibo.com/weibo?q=%23%E6%B2%9F%E9%80%9A%E5%88%A0%E9%99%A4%E7%85%A7%E7%89%87%E7%9A%84%E6%98%AF%E5%88%98%E8%8A%AE%E9%BA%9F%E5%A4%AA%E5%A4%AA%23) `342.2K 🔥` `NEW`
1. [甲酰胺 影响肝肾功能](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%85%B0%E8%83%BA%20%E5%BD%B1%E5%93%8D%E8%82%9D%E8%82%BE%E5%8A%9F%E8%83%BD%23) `340.7K 🔥` `NEW`
1. [美国女子因赢球尖叫宠物狗遭击毙](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9B%A0%E8%B5%A2%E7%90%83%E5%B0%96%E5%8F%AB%E5%AE%A0%E7%89%A9%E7%8B%97%E9%81%AD%E5%87%BB%E6%AF%99%23) `339.0K 🔥` `NEW`
1. [孙继海点评C罗表现](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BB%A7%E6%B5%B7%E7%82%B9%E8%AF%84C%E7%BD%97%E8%A1%A8%E7%8E%B0%23) `337.2K 🔥` `NEW`
1. [二房东厨房改卧室致租客中毒身亡 (The second landlord changed the kitchen into a bedroom, causing the tenant to be poisoned and died)](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%88%BF%E4%B8%9C%E5%8E%A8%E6%88%BF%E6%94%B9%E5%8D%A7%E5%AE%A4%E8%87%B4%E7%A7%9F%E5%AE%A2%E4%B8%AD%E6%AF%92%E8%BA%AB%E4%BA%A1%23) `335.0K 🔥` `NEW`
1. [乌兹别克斯坦1比3哥伦比亚](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B9%E5%88%AB%E5%85%8B%E6%96%AF%E5%9D%A61%E6%AF%943%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%23) `333.5K 🔥` `NEW`
1. [西瓜奶砖](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%93%9C%E5%A5%B6%E7%A0%96%23) `333.1K 🔥` `NEW`
1. [曝迪丽热巴确认离开嘉行](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%A1%AE%E8%AE%A4%E7%A6%BB%E5%BC%80%E5%98%89%E8%A1%8C%23) `331.0K 🔥` `NEW`
1. [苹果将涨价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%B0%86%E6%B6%A8%E4%BB%B7%23) `329.5K 🔥` `NEW`
1. [豆包给95花选四大名著角色](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%BB%9995%E8%8A%B1%E9%80%89%E5%9B%9B%E5%A4%A7%E5%90%8D%E8%91%97%E8%A7%92%E8%89%B2%23) `328.0K 🔥` `NEW`
1. [田曦薇 不吃拍照角度压力](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E4%B8%8D%E5%90%83%E6%8B%8D%E7%85%A7%E8%A7%92%E5%BA%A6%E5%8E%8B%E5%8A%9B%23) `325.6K 🔥` `NEW`
1. [特朗普夸莫迪长得太好看了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%B8%E8%8E%AB%E8%BF%AA%E9%95%BF%E5%BE%97%E5%A4%AA%E5%A5%BD%E7%9C%8B%E4%BA%86%23) `324.5K 🔥` `NEW`
1. [张凌赫宋威龙95颜霸组合对打](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AE%8B%E5%A8%81%E9%BE%9995%E9%A2%9C%E9%9C%B8%E7%BB%84%E5%90%88%E5%AF%B9%E6%89%93%23) `321.3K 🔥` `NEW`
1. [好奇纸尿裤](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A5%87%E7%BA%B8%E5%B0%BF%E8%A3%A4%23) `320.2K 🔥` `NEW`
1. [居民当街抬棺送葬多名公职人员被处理 (Residents carried coffins in the street to bury several public officials who were punished)](https://s.weibo.com/weibo?q=%23%E5%B1%85%E6%B0%91%E5%BD%93%E8%A1%97%E6%8A%AC%E6%A3%BA%E9%80%81%E8%91%AC%E5%A4%9A%E5%90%8D%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E8%A2%AB%E5%A4%84%E7%90%86%23) `319.0K 🔥` `NEW`
1. [甲酰胺 致畸](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%85%B0%E8%83%BA%20%E8%87%B4%E7%95%B8%23) `316.3K 🔥` `NEW`
1. [蔡徐坤签售会](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E7%AD%BE%E5%94%AE%E4%BC%9A%23) `315.2K 🔥` `NEW`
1. [babycare](https://s.weibo.com/weibo?q=%23babycare%23) `312.9K 🔥` `NEW`
1. [甲酰胺浓度超标症状](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%85%B0%E8%83%BA%E6%B5%93%E5%BA%A6%E8%B6%85%E6%A0%87%E7%97%87%E7%8A%B6%23) `311.5K 🔥` `NEW`
1. [很多婴幼儿血液中检出甲酰胺](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E5%A9%B4%E5%B9%BC%E5%84%BF%E8%A1%80%E6%B6%B2%E4%B8%AD%E6%A3%80%E5%87%BA%E7%94%B2%E9%85%B0%E8%83%BA%23) `311.2K 🔥` `NEW`
1. [吴倩 我是全中国最会使AI的女演员](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%20%E6%88%91%E6%98%AF%E5%85%A8%E4%B8%AD%E5%9B%BD%E6%9C%80%E4%BC%9A%E4%BD%BFAI%E7%9A%84%E5%A5%B3%E6%BC%94%E5%91%98%23) `309.6K 🔥` `NEW`
1. [小女孩飞扑爸爸怀里被啤酒肚击飞](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A5%B3%E5%AD%A9%E9%A3%9E%E6%89%91%E7%88%B8%E7%88%B8%E6%80%80%E9%87%8C%E8%A2%AB%E5%95%A4%E9%85%92%E8%82%9A%E5%87%BB%E9%A3%9E%23) `307.2K 🔥` `NEW`
1. [张凌赫回母校南师大](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E6%AF%8D%E6%A0%A1%E5%8D%97%E5%B8%88%E5%A4%A7%23) `306.2K 🔥` `NEW`
1. [2岁女儿刚肝移植15天儿子确诊同样病](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%A5%B3%E5%84%BF%E5%88%9A%E8%82%9D%E7%A7%BB%E6%A4%8D15%E5%A4%A9%E5%84%BF%E5%AD%90%E7%A1%AE%E8%AF%8A%E5%90%8C%E6%A0%B7%E7%97%85%23) `305.0K 🔥` `NEW`
1. [黄子韬吼完徐艺洋后秒怂 (Huang Zitao got scared immediately after yelling at Xu Yiyang)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%90%BC%E5%AE%8C%E5%BE%90%E8%89%BA%E6%B4%8B%E5%90%8E%E7%A7%92%E6%80%82%23) `303.1K 🔥` `NEW`
1. [小黄豆抽中蔡徐坤线下签售会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86%E6%8A%BD%E4%B8%AD%E8%94%A1%E5%BE%90%E5%9D%A4%E7%BA%BF%E4%B8%8B%E7%AD%BE%E5%94%AE%E4%BC%9A%23) `300.8K 🔥` `NEW`
1. [齐豫歌手唱这世界那么多人](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%B1%AB%E6%AD%8C%E6%89%8B%E5%94%B1%E8%BF%99%E4%B8%96%E7%95%8C%E9%82%A3%E4%B9%88%E5%A4%9A%E4%BA%BA%23) `299.0K 🔥` `NEW`
1. [京东全价位手机最后一波放价](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%85%A8%E4%BB%B7%E4%BD%8D%E6%89%8B%E6%9C%BA%E6%9C%80%E5%90%8E%E4%B8%80%E6%B3%A2%E6%94%BE%E4%BB%B7%23) `297.5K 🔥` `NEW`
1. [张婧仪顶奢脸](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E9%A1%B6%E5%A5%A2%E8%84%B8%23) `296.9K 🔥` `NEW`
1. [吴倩自曝哺乳一年断奶比孕前瘦十斤](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E8%87%AA%E6%9B%9D%E5%93%BA%E4%B9%B3%E4%B8%80%E5%B9%B4%E6%96%AD%E5%A5%B6%E6%AF%94%E5%AD%95%E5%89%8D%E7%98%A6%E5%8D%81%E6%96%A4%23) `295.1K 🔥` `NEW`
1. [黄金直线涨破4320美元](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%9B%B4%E7%BA%BF%E6%B6%A8%E7%A0%B44320%E7%BE%8E%E5%85%83%23) `293.6K 🔥` `NEW`
1. [揭秘有毒纸尿裤关联公司](https://s.weibo.com/weibo?q=%23%E6%8F%AD%E7%A7%98%E6%9C%89%E6%AF%92%E7%BA%B8%E5%B0%BF%E8%A3%A4%E5%85%B3%E8%81%94%E5%85%AC%E5%8F%B8%23) `291.7K 🔥` `NEW`
1. [iPhone18Pro或涨270美元](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%88%96%E6%B6%A8270%E7%BE%8E%E5%85%83%23) `290.6K 🔥` `NEW`
1. [谢楠凌晨发文](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%E5%87%8C%E6%99%A8%E5%8F%91%E6%96%87%23) `287.8K 🔥` `NEW`
1. [京东联合万达酒店推出看球观赛房 (JD.com joins forces with Wanda Hotels to launch football viewing rooms)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E8%81%94%E5%90%88%E4%B8%87%E8%BE%BE%E9%85%92%E5%BA%97%E6%8E%A8%E5%87%BA%E7%9C%8B%E7%90%83%E8%A7%82%E8%B5%9B%E6%88%BF%23) `286.7K 🔥` `NEW`
1. [邓超报位置](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E6%8A%A5%E4%BD%8D%E7%BD%AE%23) `322.6K 🔥` `+58%`

Updated at 2026-06-18 13:10:21

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
