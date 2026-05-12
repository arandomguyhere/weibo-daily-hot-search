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

1. [樊振东无缘名古屋亚运会 (Fan Zhendong missed the Nagoya Asian Games)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%97%A0%E7%BC%98%E5%90%8D%E5%8F%A4%E5%B1%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `1.7M 🔥` `NEW`
1. [燃油附加费 涨价](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E9%99%84%E5%8A%A0%E8%B4%B9%20%E6%B6%A8%E4%BB%B7%23) `889.2K 🔥` `NEW`
1. [白鹿演唱会过审](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E8%BF%87%E5%AE%A1%23) `695.2K 🔥` `NEW`
1. [王俊凯中餐厅招商能力](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%AD%E9%A4%90%E5%8E%85%E6%8B%9B%E5%95%86%E8%83%BD%E5%8A%9B%23) `573.5K 🔥` `NEW`
1. [4月汽车销量前10仅1款油车](https://s.weibo.com/weibo?q=%234%E6%9C%88%E6%B1%BD%E8%BD%A6%E9%94%80%E9%87%8F%E5%89%8D10%E4%BB%851%E6%AC%BE%E6%B2%B9%E8%BD%A6%23) `517.6K 🔥` `NEW`
1. [山东一地被曝大片农田遭污水覆盖](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%B8%80%E5%9C%B0%E8%A2%AB%E6%9B%9D%E5%A4%A7%E7%89%87%E5%86%9C%E7%94%B0%E9%81%AD%E6%B1%A1%E6%B0%B4%E8%A6%86%E7%9B%96%23) `464.0K 🔥` `NEW`
1. [考试坐严浩翔前面的同学发声](https://s.weibo.com/weibo?q=%23%E8%80%83%E8%AF%95%E5%9D%90%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%89%8D%E9%9D%A2%E7%9A%84%E5%90%8C%E5%AD%A6%E5%8F%91%E5%A3%B0%23) `452.5K 🔥` `NEW`
1. [狼队对战AG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98AG%23) `447.1K 🔥` `NEW`
1. [hybe拒绝宫脇咲良参与创作](https://s.weibo.com/weibo?q=%23hybe%E6%8B%92%E7%BB%9D%E5%AE%AB%E8%84%87%E5%92%B2%E8%89%AF%E5%8F%82%E4%B8%8E%E5%88%9B%E4%BD%9C%23) `442.9K 🔥` `NEW`
1. [汪涵有多爱吃槟榔](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B6%B5%E6%9C%89%E5%A4%9A%E7%88%B1%E5%90%83%E6%A7%9F%E6%A6%94%23) `437.5K 🔥` `NEW`
1. [白敬亭沈腾合开新公司 (Bai Jingting, Shen Teng jointly open new company)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E6%B2%88%E8%85%BE%E5%90%88%E5%BC%80%E6%96%B0%E5%85%AC%E5%8F%B8%23) `432.7K 🔥` `NEW`
1. [低智商犯罪单更](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%E5%8D%95%E6%9B%B4%23) `429.1K 🔥` `NEW`
1. [僵尸车霸占公共道路该清了](https://s.weibo.com/weibo?q=%23%E5%83%B5%E5%B0%B8%E8%BD%A6%E9%9C%B8%E5%8D%A0%E5%85%AC%E5%85%B1%E9%81%93%E8%B7%AF%E8%AF%A5%E6%B8%85%E4%BA%86%23) `425.5K 🔥` `NEW`
1. [惊现活蛇火锅店老板致歉](https://s.weibo.com/weibo?q=%23%E6%83%8A%E7%8E%B0%E6%B4%BB%E8%9B%87%E7%81%AB%E9%94%85%E5%BA%97%E8%80%81%E6%9D%BF%E8%87%B4%E6%AD%89%23) `423.1K 🔥` `NEW`
1. [杨幂北魏复原妆](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%8C%97%E9%AD%8F%E5%A4%8D%E5%8E%9F%E5%A6%86%23) `421.8K 🔥` `NEW`
1. [时代少年团 真维斯](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E7%9C%9F%E7%BB%B4%E6%96%AF%23) `421.6K 🔥` `NEW`
1. [恋与深空回应擦边低俗争议](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%E6%93%A6%E8%BE%B9%E4%BD%8E%E4%BF%97%E4%BA%89%E8%AE%AE%23) `247.8K 🔥` `NEW`
1. [颜如晶半年瘦了60斤](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%A6%82%E6%99%B6%E5%8D%8A%E5%B9%B4%E7%98%A6%E4%BA%8660%E6%96%A4%23) `247.3K 🔥` `NEW`
1. [低智商犯罪](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `247.3K 🔥` `NEW`
1. [老人参加康养旅游买下66万的房子](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%8F%82%E5%8A%A0%E5%BA%B7%E5%85%BB%E6%97%85%E6%B8%B8%E4%B9%B0%E4%B8%8B66%E4%B8%87%E7%9A%84%E6%88%BF%E5%AD%90%23) `246.8K 🔥` `NEW`
1. [沪上阿姨报警 (Auntie from Shanghai calls the police)](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%E6%8A%A5%E8%AD%A6%23) `245.2K 🔥` `NEW`
1. [宋祖儿纯素颜](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E7%BA%AF%E7%B4%A0%E9%A2%9C%23) `231.0K 🔥` `NEW`
1. [AG剧透](https://s.weibo.com/weibo?q=%23AG%E5%89%A7%E9%80%8F%23) `221.6K 🔥` `NEW`
1. [宁波老人跟团旅游买了套近70万的房子](https://s.weibo.com/weibo?q=%23%E5%AE%81%E6%B3%A2%E8%80%81%E4%BA%BA%E8%B7%9F%E5%9B%A2%E6%97%85%E6%B8%B8%E4%B9%B0%E4%BA%86%E5%A5%97%E8%BF%9170%E4%B8%87%E7%9A%84%E6%88%BF%E5%AD%90%23) `198.1K 🔥` `NEW`
1. [下午休是性价比最高的半天假](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%8D%88%E4%BC%91%E6%98%AF%E6%80%A7%E4%BB%B7%E6%AF%94%E6%9C%80%E9%AB%98%E7%9A%84%E5%8D%8A%E5%A4%A9%E5%81%87%23) `196.6K 🔥` `NEW`
1. [当母虎头露出来时才知小虎多小](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%AF%8D%E8%99%8E%E5%A4%B4%E9%9C%B2%E5%87%BA%E6%9D%A5%E6%97%B6%E6%89%8D%E7%9F%A5%E5%B0%8F%E8%99%8E%E5%A4%9A%E5%B0%8F%23) `192.0K 🔥` `NEW`
1. [90后新婚夫妻同患罕见病双双瘫痪](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E6%96%B0%E5%A9%9A%E5%A4%AB%E5%A6%BB%E5%90%8C%E6%82%A3%E7%BD%95%E8%A7%81%E7%97%85%E5%8F%8C%E5%8F%8C%E7%98%AB%E7%97%AA%23) `187.7K 🔥` `NEW`
1. [辛芷蕾 奉俊昊电影](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%20%E5%A5%89%E4%BF%8A%E6%98%8A%E7%94%B5%E5%BD%B1%23) `183.7K 🔥` `NEW`
1. [人在4点钟左右耳根子会特别软](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%9C%A84%E7%82%B9%E9%92%9F%E5%B7%A6%E5%8F%B3%E8%80%B3%E6%A0%B9%E5%AD%90%E4%BC%9A%E7%89%B9%E5%88%AB%E8%BD%AF%23) `169.7K 🔥` `NEW`
1. [宇树机甲 民用交通工具](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E7%94%B2%20%E6%B0%91%E7%94%A8%E4%BA%A4%E9%80%9A%E5%B7%A5%E5%85%B7%23) `466.0K 🔥` `+55%`
1. [女孩退礼服事件合唱团称受牵连 (The choir claimed to be implicated in the incident of girl taking off her dress)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%80%80%E7%A4%BC%E6%9C%8D%E4%BA%8B%E4%BB%B6%E5%90%88%E5%94%B1%E5%9B%A2%E7%A7%B0%E5%8F%97%E7%89%B5%E8%BF%9E%23) `434.2K 🔥` `+38%`
1. [抖音评论区 陈赫眼中含泪](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E8%AF%84%E8%AE%BA%E5%8C%BA%20%E9%99%88%E8%B5%AB%E7%9C%BC%E4%B8%AD%E5%90%AB%E6%B3%AA%23) `431.2K 🔥` `+37%`
1. [印度游客在莫斯科喷泉水池洗衣服 (Indian tourists wash clothes in Moscow fountain pool)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%9C%A8%E8%8E%AB%E6%96%AF%E7%A7%91%E5%96%B7%E6%B3%89%E6%B0%B4%E6%B1%A0%E6%B4%97%E8%A1%A3%E6%9C%8D%23) `245.7K 🔥` `+91%`
1. [科学避险自救指南](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%AD%A6%E9%81%BF%E9%99%A9%E8%87%AA%E6%95%91%E6%8C%87%E5%8D%97%23) `700.0K 🔥`
1. [宋慧乔在朋友婚礼上致辞](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E5%9C%A8%E6%9C%8B%E5%8F%8B%E5%A9%9A%E7%A4%BC%E4%B8%8A%E8%87%B4%E8%BE%9E%23) `244.9K 🔥`
1. [王曼昱给孙颖莎看手机](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%BB%99%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9C%8B%E6%89%8B%E6%9C%BA%23) `244.0K 🔥`
1. [张元英黑色抹胸丝绒裙 (Zhang Yuanying black strapless velvet skirt)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E9%BB%91%E8%89%B2%E6%8A%B9%E8%83%B8%E4%B8%9D%E7%BB%92%E8%A3%99%23) `244.0K 🔥`
1. [李天泽近况](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%A4%A9%E6%B3%BD%E8%BF%91%E5%86%B5%23) `160.3K 🔥`
1. [建议不要在小环境中待太久](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E5%9C%A8%E5%B0%8F%E7%8E%AF%E5%A2%83%E4%B8%AD%E5%BE%85%E5%A4%AA%E4%B9%85%23) `613.5K 🔥` `-26%`
1. [深圳夫妻囤存储芯片5个月狂涨320亿](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%A4%AB%E5%A6%BB%E5%9B%A4%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%875%E4%B8%AA%E6%9C%88%E7%8B%82%E6%B6%A8320%E4%BA%BF%23) `476.7K 🔥` `-42%`
1. [巴掌榴莲](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8E%8C%E6%A6%B4%E8%8E%B2%23) `438.5K 🔥` `-46%`
1. [南京审计大学通报男生偷拍 (Nanjing Audit University reports boys secretly photographed)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%AE%A1%E8%AE%A1%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E7%94%B7%E7%94%9F%E5%81%B7%E6%8B%8D%23) `423.1K 🔥` `-64%`
1. [放羊的星星演员李威被判刑](https://s.weibo.com/weibo?q=%23%E6%94%BE%E7%BE%8A%E7%9A%84%E6%98%9F%E6%98%9F%E6%BC%94%E5%91%98%E6%9D%8E%E5%A8%81%E8%A2%AB%E5%88%A4%E5%88%91%23) `246.1K 🔥` `-21%`
1. [白鹿综艺互动为何会被逐帧审判 (Why is Bailu Variety Show Interactive being judged frame by frame?)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%BC%E8%89%BA%E4%BA%92%E5%8A%A8%E4%B8%BA%E4%BD%95%E4%BC%9A%E8%A2%AB%E9%80%90%E5%B8%A7%E5%AE%A1%E5%88%A4%23) `244.6K 🔥` `-22%`
1. [中方强烈谴责巴方有关行径](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%BC%BA%E7%83%88%E8%B0%B4%E8%B4%A3%E5%B7%B4%E6%96%B9%E6%9C%89%E5%85%B3%E8%A1%8C%E5%BE%84%23) `220.0K 🔥` `-74%`
1. [原来健康的人身体是静音的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%81%A5%E5%BA%B7%E7%9A%84%E4%BA%BA%E8%BA%AB%E4%BD%93%E6%98%AF%E9%9D%99%E9%9F%B3%E7%9A%84%23) `211.9K 🔥` `-70%`
1. [德国跨国迷奸案](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E8%B7%A8%E5%9B%BD%E8%BF%B7%E5%A5%B8%E6%A1%88%23) `195.2K 🔥` `-35%`
1. [空调 霉菌 (Air conditioning mold)](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%20%E9%9C%89%E8%8F%8C%23) `176.3K 🔥` `-38%`
1. [消杀公司愿为误开房门赔30倍房费](https://s.weibo.com/weibo?q=%23%E6%B6%88%E6%9D%80%E5%85%AC%E5%8F%B8%E6%84%BF%E4%B8%BA%E8%AF%AF%E5%BC%80%E6%88%BF%E9%97%A8%E8%B5%9430%E5%80%8D%E6%88%BF%E8%B4%B9%23) `162.4K 🔥` `-47%`
1. [网传歌手2026首发人数](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%AD%8C%E6%89%8B2026%E9%A6%96%E5%8F%91%E4%BA%BA%E6%95%B0%23) `149.3K 🔥` `-53%`

Updated at 2026-05-12 20:24:00

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
