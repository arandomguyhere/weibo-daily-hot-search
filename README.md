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

1. [小马糕 (pony cake)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E7%B3%95%23) `186.3K 🔥` `NEW`
1. [时代少年团 外务](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%A4%96%E5%8A%A1%23) `183.2K 🔥` `NEW`
1. [谷爱凌青花瓷龙战袍绝美](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%9D%92%E8%8A%B1%E7%93%B7%E9%BE%99%E6%88%98%E8%A2%8D%E7%BB%9D%E7%BE%8E%23) `178.7K 🔥` `NEW`
1. [问界M9车主聚会堪比春晚](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E8%BD%A6%E4%B8%BB%E8%81%9A%E4%BC%9A%E5%A0%AA%E6%AF%94%E6%98%A5%E6%99%9A%23) `176.7K 🔥` `NEW`
1. [车厘子价格崩了口感也崩了](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%8E%98%E5%AD%90%E4%BB%B7%E6%A0%BC%E5%B4%A9%E4%BA%86%E5%8F%A3%E6%84%9F%E4%B9%9F%E5%B4%A9%E4%BA%86%23) `174.9K 🔥` `NEW`
1. [一个普通人被121个热搜改变之后](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%E4%BA%BA%E8%A2%AB121%E4%B8%AA%E7%83%AD%E6%90%9C%E6%94%B9%E5%8F%98%E4%B9%8B%E5%90%8E%23) `172.7K 🔥` `NEW`
1. [至此生命树已成艺术](https://s.weibo.com/weibo?q=%23%E8%87%B3%E6%AD%A4%E7%94%9F%E5%91%BD%E6%A0%91%E5%B7%B2%E6%88%90%E8%89%BA%E6%9C%AF%23) `148.1K 🔥` `NEW`
1. [生命树白菊爆头](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E7%99%BD%E8%8F%8A%E7%88%86%E5%A4%B4%23) `130.3K 🔥` `NEW`
1. [张艺谋看王鹤棣这小伙子有礼貌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E8%B0%8B%E7%9C%8B%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%BF%99%E5%B0%8F%E4%BC%99%E5%AD%90%E6%9C%89%E7%A4%BC%E8%B2%8C%23) `129.0K 🔥` `NEW`
1. [吴克群说做自媒体拍吃喝很无聊](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%85%8B%E7%BE%A4%E8%AF%B4%E5%81%9A%E8%87%AA%E5%AA%92%E4%BD%93%E6%8B%8D%E5%90%83%E5%96%9D%E5%BE%88%E6%97%A0%E8%81%8A%23) `113.8K 🔥` `NEW`
1. [宝宝爬到床边爸爸睡梦中惊醒抓住 (The baby crawled to the bedside and the father woke up in his sleep and grabbed him)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%AE%9D%E7%88%AC%E5%88%B0%E5%BA%8A%E8%BE%B9%E7%88%B8%E7%88%B8%E7%9D%A1%E6%A2%A6%E4%B8%AD%E6%83%8A%E9%86%92%E6%8A%93%E4%BD%8F%23) `108.3K 🔥` `NEW`
1. [iG对战NIP](https://s.weibo.com/weibo?q=%23iG%E5%AF%B9%E6%88%98NIP%23) `106.6K 🔥` `NEW`
1. [人民日报评南京博物院受赠文物事件](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%8D%97%E4%BA%AC%E5%8D%9A%E7%89%A9%E9%99%A2%E5%8F%97%E8%B5%A0%E6%96%87%E7%89%A9%E4%BA%8B%E4%BB%B6%23) `94.1K 🔥` `NEW`
1. [北欧卖酱肉包情侣称最高日入2千](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%AC%A7%E5%8D%96%E9%85%B1%E8%82%89%E5%8C%85%E6%83%85%E4%BE%A3%E7%A7%B0%E6%9C%80%E9%AB%98%E6%97%A5%E5%85%A52%E5%8D%83%23) `89.5K 🔥` `NEW`
1. [郑钦文时隔133天重返赛场](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%97%B6%E9%9A%94133%E5%A4%A9%E9%87%8D%E8%BF%94%E8%B5%9B%E5%9C%BA%23) `89.5K 🔥` `NEW`
1. [被郭艾伦一招KO的人出现了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%83%AD%E8%89%BE%E4%BC%A6%E4%B8%80%E6%8B%9BKO%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `87.7K 🔥` `NEW`
1. [男子在女厕所偷拍摔倒被当场抓获](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%A5%B3%E5%8E%95%E6%89%80%E5%81%B7%E6%8B%8D%E6%91%94%E5%80%92%E8%A2%AB%E5%BD%93%E5%9C%BA%E6%8A%93%E8%8E%B7%23) `85.2K 🔥` `NEW`
1. [苏翊鸣堆雪球比赛第一名](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%A0%86%E9%9B%AA%E7%90%83%E6%AF%94%E8%B5%9B%E7%AC%AC%E4%B8%80%E5%90%8D%23) `84.0K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `76.2K 🔥` `NEW`
1. [谷爱凌回应米兰冬奥银牌](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%93%B6%E7%89%8C%23) `1.1M 🔥` `+84%`
1. [开始推理吧4 (Let’s start reasoning 4)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A74%23) `808.2K 🔥` `+53%`
1. [陈飞宇 阿瑟帅回宫了](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%20%E9%98%BF%E7%91%9F%E5%B8%85%E5%9B%9E%E5%AE%AB%E4%BA%86%23) `284.5K 🔥` `+162%`
1. [动车组终点站有科幻片那味儿了](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E8%BD%A6%E7%BB%84%E7%BB%88%E7%82%B9%E7%AB%99%E6%9C%89%E7%A7%91%E5%B9%BB%E7%89%87%E9%82%A3%E5%91%B3%E5%84%BF%E4%BA%86%23) `624.7K 🔥`
1. [男子让6个月孩子看电视女友劝阻后被打](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AE%A96%E4%B8%AA%E6%9C%88%E5%AD%A9%E5%AD%90%E7%9C%8B%E7%94%B5%E8%A7%86%E5%A5%B3%E5%8F%8B%E5%8A%9D%E9%98%BB%E5%90%8E%E8%A2%AB%E6%89%93%23) `184.6K 🔥`
1. [易烊千玺打耳洞了](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%89%93%E8%80%B3%E6%B4%9E%E4%BA%86%23) `173.8K 🔥`
1. [谷爱凌第二滑23.00分 (Gu Ailing skated second with 23.00 points)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%BA%8C%E6%BB%9123.00%E5%88%86%23) `126.6K 🔥`
1. [网传丁程鑫常驻开推4](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E4%B8%81%E7%A8%8B%E9%91%AB%E5%B8%B8%E9%A9%BB%E5%BC%80%E6%8E%A84%23) `124.8K 🔥`
1. [全球首届机器人春晚在京东年货节 (The world's first robot Spring Festival Gala at JD New Year Festival)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E5%B1%8A%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%98%A5%E6%99%9A%E5%9C%A8%E4%BA%AC%E4%B8%9C%E5%B9%B4%E8%B4%A7%E8%8A%82%23) `373.0K 🔥` `-34%`
1. [郑钦文vs肯宁](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%82%AF%E5%AE%81%23) `254.0K 🔥` `-27%`
1. [网传开推4没有迪丽热巴](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BC%80%E6%8E%A84%E6%B2%A1%E6%9C%89%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `253.3K 🔥` `-34%`
1. [南京博物院事件最新通报 (The latest report on the incident at Nanjing Museum)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%8D%9A%E7%89%A9%E9%99%A2%E4%BA%8B%E4%BB%B6%E6%9C%80%E6%96%B0%E9%80%9A%E6%8A%A5%23) `244.9K 🔥` `-82%`
1. [谷爱凌决赛 (Gu Ailing finals)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%B3%E8%B5%9B%23) `233.2K 🔥` `-51%`
1. [谷爱凌冬奥银牌](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%AC%E5%A5%A5%E9%93%B6%E7%89%8C%23) `200.8K 🔥` `-36%`
1. [保姆按要求分房睡老人离世成被告](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E6%8C%89%E8%A6%81%E6%B1%82%E5%88%86%E6%88%BF%E7%9D%A1%E8%80%81%E4%BA%BA%E7%A6%BB%E4%B8%96%E6%88%90%E8%A2%AB%E5%91%8A%23) `185.8K 🔥` `-36%`
1. [金晨风波后现身澳门 (Jin Chen appeared in Macau after the incident)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E9%A3%8E%E6%B3%A2%E5%90%8E%E7%8E%B0%E8%BA%AB%E6%BE%B3%E9%97%A8%23) `185.5K 🔥` `-36%`
1. [爱泼斯坦被爆可能没死 (Epstein may not be dead after being exposed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E8%A2%AB%E7%88%86%E5%8F%AF%E8%83%BD%E6%B2%A1%E6%AD%BB%23) `183.5K 🔥` `-37%`
1. [谷爱凌第一跳后哭了](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E8%B7%B3%E5%90%8E%E5%93%AD%E4%BA%86%23) `182.8K 🔥` `-25%`
1. [多只小鸟撞西安万象城玻璃墙死亡 (Several birds died after hitting the glass wall of Xi'an Vientiane City)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%8F%AA%E5%B0%8F%E9%B8%9F%E6%92%9E%E8%A5%BF%E5%AE%89%E4%B8%87%E8%B1%A1%E5%9F%8E%E7%8E%BB%E7%92%83%E5%A2%99%E6%AD%BB%E4%BA%A1%23) `180.2K 🔥` `-37%`
1. [丝芭学历最高的人出现了](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%E5%AD%A6%E5%8E%86%E6%9C%80%E9%AB%98%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `172.8K 🔥` `-36%`
1. [贾乃亮公司年会奖励万元红包](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE%E5%85%AC%E5%8F%B8%E5%B9%B4%E4%BC%9A%E5%A5%96%E5%8A%B1%E4%B8%87%E5%85%83%E7%BA%A2%E5%8C%85%23) `155.9K 🔥` `-46%`
1. [这家人的住商好高 (This family's residential property is so high)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%AE%B6%E4%BA%BA%E7%9A%84%E4%BD%8F%E5%95%86%E5%A5%BD%E9%AB%98%23) `133.2K 🔥` `-26%`
1. [只要华为不跪产品就不贵](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E8%A6%81%E5%8D%8E%E4%B8%BA%E4%B8%8D%E8%B7%AA%E4%BA%A7%E5%93%81%E5%B0%B1%E4%B8%8D%E8%B4%B5%23) `112.0K 🔥` `-39%`
1. [杨幂被朱一龙吓到尖叫](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%A2%AB%E6%9C%B1%E4%B8%80%E9%BE%99%E5%90%93%E5%88%B0%E5%B0%96%E5%8F%AB%23) `100.3K 🔥` `-42%`
1. [张元英 镜头](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%20%E9%95%9C%E5%A4%B4%23) `99.9K 🔥` `-32%`
1. [杨洋吸血鬼伯爵 (Count Yang Yang vampire)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%90%B8%E8%A1%80%E9%AC%BC%E4%BC%AF%E7%88%B5%23) `90.3K 🔥` `-36%`
1. [谷爱凌跟妈妈边抱边哭40秒](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%B7%9F%E5%A6%88%E5%A6%88%E8%BE%B9%E6%8A%B1%E8%BE%B9%E5%93%AD40%E7%A7%92%23) `89.6K 🔥` `-34%`
1. [15岁男生天生神力面无表情掰苹果](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E7%94%B7%E7%94%9F%E5%A4%A9%E7%94%9F%E7%A5%9E%E5%8A%9B%E9%9D%A2%E6%97%A0%E8%A1%A8%E6%83%85%E6%8E%B0%E8%8B%B9%E6%9E%9C%23) `89.5K 🔥` `-24%`
1. [陈梦去看谷爱凌决赛了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A2%A6%E5%8E%BB%E7%9C%8B%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%B3%E8%B5%9B%E4%BA%86%23) `89.5K 🔥` `-41%`
1. [生命树 (tree of life)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `85.6K 🔥` `-32%`
1. [徐湖平正接受审查调查 (Xu Huping is under review and investigation)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B9%96%E5%B9%B3%E6%AD%A3%E6%8E%A5%E5%8F%97%E5%AE%A1%E6%9F%A5%E8%B0%83%E6%9F%A5%23) `81.3K 🔥` `-36%`
1. [格雷莫德](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E9%9B%B7%E8%8E%AB%E5%BE%B7%23) `79.9K 🔥` `-73%`

Updated at 2026-02-09 23:39:30

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
