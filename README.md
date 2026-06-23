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

1. [微信迎史上最大更新 (WeChat welcomes biggest update in history)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%BF%8E%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7%E6%9B%B4%E6%96%B0%23) `2.9M 🔥` `NEW`
1. [万千气象看重庆](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E9%87%8D%E5%BA%86%23) `813.3K 🔥` `NEW`
1. [一眼千年是郑州](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9C%BC%E5%8D%83%E5%B9%B4%E6%98%AF%E9%83%91%E5%B7%9E%23) `812.0K 🔥` `NEW`
1. [张婧仪曾因为减肥爆哭](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%9B%BE%E5%9B%A0%E4%B8%BA%E5%87%8F%E8%82%A5%E7%88%86%E5%93%AD%23) `776.5K 🔥` `NEW`
1. [祁煜 恋与深空救世主](https://s.weibo.com/weibo?q=%23%E7%A5%81%E7%85%9C%20%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%95%91%E4%B8%96%E4%B8%BB%23) `653.2K 🔥` `NEW`
1. [陈都灵的角色从夯到夯](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E7%9A%84%E8%A7%92%E8%89%B2%E4%BB%8E%E5%A4%AF%E5%88%B0%E5%A4%AF%23) `639.0K 🔥` `NEW`
1. [迪丽热巴利剑玫瑰8.1掉到6.4](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%88%A9%E5%89%91%E7%8E%AB%E7%91%B08.1%E6%8E%89%E5%88%B06.4%23) `637.2K 🔥` `NEW`
1. [终于懂韩国人看我们吃西瓜的感觉了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%9C%8B%E6%88%91%E4%BB%AC%E5%90%83%E8%A5%BF%E7%93%9C%E7%9A%84%E6%84%9F%E8%A7%89%E4%BA%86%23) `393.8K 🔥` `NEW`
1. [腾讯招商大会把演员真名写在艺名前](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E6%8B%9B%E5%95%86%E5%A4%A7%E4%BC%9A%E6%8A%8A%E6%BC%94%E5%91%98%E7%9C%9F%E5%90%8D%E5%86%99%E5%9C%A8%E8%89%BA%E5%90%8D%E5%89%8D%23) `390.6K 🔥` `NEW`
1. [乔欣变样了](https://s.weibo.com/weibo?q=%23%E4%B9%94%E6%AC%A3%E5%8F%98%E6%A0%B7%E4%BA%86%23) `390.3K 🔥` `NEW`
1. [黄金 (gold)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `387.8K 🔥` `NEW`
1. [冯小刚垃圾观众言论被翻出](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%B0%8F%E5%88%9A%E5%9E%83%E5%9C%BE%E8%A7%82%E4%BC%97%E8%A8%80%E8%AE%BA%E8%A2%AB%E7%BF%BB%E5%87%BA%23) `385.5K 🔥` `NEW`
1. [公司开始上四休三了但降工资](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%BC%80%E5%A7%8B%E4%B8%8A%E5%9B%9B%E4%BC%91%E4%B8%89%E4%BA%86%E4%BD%86%E9%99%8D%E5%B7%A5%E8%B5%84%23) `385.2K 🔥` `NEW`
1. [马嘉祺宋亚轩没拍毕业合照](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%B2%A1%E6%8B%8D%E6%AF%95%E4%B8%9A%E5%90%88%E7%85%A7%23) `383.5K 🔥` `NEW`
1. [北京牛new排队 疯狂](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E7%89%9Bnew%E6%8E%92%E9%98%9F%20%E7%96%AF%E7%8B%82%23) `381.2K 🔥` `NEW`
1. [广德交通事故3岁男孩仍在ICU抢救](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%853%E5%B2%81%E7%94%B7%E5%AD%A9%E4%BB%8D%E5%9C%A8ICU%E6%8A%A2%E6%95%91%23) `378.8K 🔥` `NEW`
1. [葡萄牙队主帅回应批评](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E9%98%9F%E4%B8%BB%E5%B8%85%E5%9B%9E%E5%BA%94%E6%89%B9%E8%AF%84%23) `376.4K 🔥` `NEW`
1. [李金铭 南温妈妈](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%20%E5%8D%97%E6%B8%A9%E5%A6%88%E5%A6%88%23) `376.3K 🔥` `NEW`
1. [A4纸.zip](https://s.weibo.com/weibo?q=%23A4%E7%BA%B8.zip%23) `372.8K 🔥` `NEW`
1. [法国2岁4岁幼童车内热死](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD2%E5%B2%814%E5%B2%81%E5%B9%BC%E7%AB%A5%E8%BD%A6%E5%86%85%E7%83%AD%E6%AD%BB%23) `371.1K 🔥` `NEW`
1. [黄婷婷方回应被换角 (Huang Tingting responded to being replaced)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A9%B7%E5%A9%B7%E6%96%B9%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8D%A2%E8%A7%92%23) `369.4K 🔥` `NEW`
1. [穆祉丞照片里工作人员的胳膊没P掉](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%85%A7%E7%89%87%E9%87%8C%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E7%9A%84%E8%83%B3%E8%86%8A%E6%B2%A1P%E6%8E%89%23) `368.1K 🔥` `NEW`
1. [向太说梁朝伟是假社恐](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E6%A2%81%E6%9C%9D%E4%BC%9F%E6%98%AF%E5%81%87%E7%A4%BE%E6%81%90%23) `367.3K 🔥` `NEW`
1. [敖子逸你向马嘉祺丁程鑫学学带娃吧](https://s.weibo.com/weibo?q=%23%E6%95%96%E5%AD%90%E9%80%B8%E4%BD%A0%E5%90%91%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%81%E7%A8%8B%E9%91%AB%E5%AD%A6%E5%AD%A6%E5%B8%A6%E5%A8%83%E5%90%A7%23) `365.6K 🔥` `NEW`
1. [韩国世越号惨案一名幸存学生死亡](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%96%E8%B6%8A%E5%8F%B7%E6%83%A8%E6%A1%88%E4%B8%80%E5%90%8D%E5%B9%B8%E5%AD%98%E5%AD%A6%E7%94%9F%E6%AD%BB%E4%BA%A1%23) `362.5K 🔥` `NEW`
1. [欧阳娜娜给年轻人种草乌梅子酱MONA](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E7%BB%99%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%A7%8D%E8%8D%89%E4%B9%8C%E6%A2%85%E5%AD%90%E9%85%B1MONA%23) `361.6K 🔥` `NEW`
1. [哈兰德与女友雨中拥吻](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E4%B8%8E%E5%A5%B3%E5%8F%8B%E9%9B%A8%E4%B8%AD%E6%8B%A5%E5%90%BB%23) `359.5K 🔥` `NEW`
1. [日本网友怒喷高市早苗换车](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E6%80%92%E5%96%B7%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%8D%A2%E8%BD%A6%23) `358.1K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `349.6K 🔥` `NEW`
1. [听问心2多喝开水准没错](https://s.weibo.com/weibo?q=%23%E5%90%AC%E9%97%AE%E5%BF%832%E5%A4%9A%E5%96%9D%E5%BC%80%E6%B0%B4%E5%87%86%E6%B2%A1%E9%94%99%23) `347.8K 🔥` `NEW`
1. [候鸟老人选择在青岛康养 (Migrant elderly man chooses Qingdao for health care)](https://s.weibo.com/weibo?q=%23%E5%80%99%E9%B8%9F%E8%80%81%E4%BA%BA%E9%80%89%E6%8B%A9%E5%9C%A8%E9%9D%92%E5%B2%9B%E5%BA%B7%E5%85%BB%23) `345.2K 🔥` `NEW`
1. [塔克拉玛干沙漠下暴雨](https://s.weibo.com/weibo?q=%23%E5%A1%94%E5%85%8B%E6%8B%89%E7%8E%9B%E5%B9%B2%E6%B2%99%E6%BC%A0%E4%B8%8B%E6%9A%B4%E9%9B%A8%23) `344.1K 🔥` `NEW`
1. [孙权新皮肤仙扇使者](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%83%E6%96%B0%E7%9A%AE%E8%82%A4%E4%BB%99%E6%89%87%E4%BD%BF%E8%80%85%23) `341.6K 🔥` `NEW`
1. [金价狂泻30%](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%8B%82%E6%B3%BB30%25%23) `340.2K 🔥` `NEW`
1. [孙俪本名孙丽](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%9C%AC%E5%90%8D%E5%AD%99%E4%B8%BD%23) `337.9K 🔥` `NEW`
1. [敖尹](https://s.weibo.com/weibo?q=%23%E6%95%96%E5%B0%B9%23) `336.3K 🔥` `NEW`
1. [入职第一天就被领导咬了](https://s.weibo.com/weibo?q=%23%E5%85%A5%E8%81%8C%E7%AC%AC%E4%B8%80%E5%A4%A9%E5%B0%B1%E8%A2%AB%E9%A2%86%E5%AF%BC%E5%92%AC%E4%BA%86%23) `335.1K 🔥` `NEW`
1. [陈凯琳否认郑嘉颖拉黑网友](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%87%AF%E7%90%B3%E5%90%A6%E8%AE%A4%E9%83%91%E5%98%89%E9%A2%96%E6%8B%89%E9%BB%91%E7%BD%91%E5%8F%8B%23) `332.6K 🔥` `NEW`
1. [腾讯海报标注宋祖儿本名](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E6%B5%B7%E6%8A%A5%E6%A0%87%E6%B3%A8%E5%AE%8B%E7%A5%96%E5%84%BF%E6%9C%AC%E5%90%8D%23) `328.4K 🔥` `NEW`
1. [Seedance2.5即将发布](https://s.weibo.com/weibo?q=%23Seedance2.5%E5%8D%B3%E5%B0%86%E5%8F%91%E5%B8%83%23) `324.1K 🔥` `NEW`
1. [兰香如故 (Orchid fragrance remains the same)](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `321.9K 🔥` `NEW`
1. [女孩中考查分查到隐藏款](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B8%AD%E8%80%83%E6%9F%A5%E5%88%86%E6%9F%A5%E5%88%B0%E9%9A%90%E8%97%8F%E6%AC%BE%23) `320.5K 🔥` `NEW`
1. [高考成绩 (College Entrance Examination Results)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%23) `1.7M 🔥` `-62%`
1. [只喝水不喝饮料的朋友](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E5%96%9D%E6%B0%B4%E4%B8%8D%E5%96%9D%E9%A5%AE%E6%96%99%E7%9A%84%E6%9C%8B%E5%8F%8B%23) `796.6K 🔥` `-37%`
1. [哈兰德偷喝对方门将的水](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%81%B7%E5%96%9D%E5%AF%B9%E6%96%B9%E9%97%A8%E5%B0%86%E7%9A%84%E6%B0%B4%23) `633.3K 🔥` `-55%`
1. [30岁女警为救跳楼轻生者牺牲](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%A5%B3%E8%AD%A6%E4%B8%BA%E6%95%91%E8%B7%B3%E6%A5%BC%E8%BD%BB%E7%94%9F%E8%80%85%E7%89%BA%E7%89%B2%23) `355.5K 🔥` `-59%`
1. [郭敬明新人撞脸三人](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E6%96%B0%E4%BA%BA%E6%92%9E%E8%84%B8%E4%B8%89%E4%BA%BA%23) `354.6K 🔥` `-62%`
1. [甲骨文裁员2.1万人](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%AA%A8%E6%96%87%E8%A3%81%E5%91%982.1%E4%B8%87%E4%BA%BA%23) `351.5K 🔥` `-61%`
1. [李金铭农村综艺那家人居然还在发她](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%86%9C%E6%9D%91%E7%BB%BC%E8%89%BA%E9%82%A3%E5%AE%B6%E4%BA%BA%E5%B1%85%E7%84%B6%E8%BF%98%E5%9C%A8%E5%8F%91%E5%A5%B9%23) `349.9K 🔥` `-41%`
1. [波士顿大学回复钟美美](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E5%A3%AB%E9%A1%BF%E5%A4%A7%E5%AD%A6%E5%9B%9E%E5%A4%8D%E9%92%9F%E7%BE%8E%E7%BE%8E%23) `330.8K 🔥` `-80%`
1. [字母哥被交易至热火](https://s.weibo.com/weibo?q=%23%E5%AD%97%E6%AF%8D%E5%93%A5%E8%A2%AB%E4%BA%A4%E6%98%93%E8%87%B3%E7%83%AD%E7%81%AB%23) `328.7K 🔥` `-71%`
1. [追觅汽车量产面临不确定性 (Chase Auto’s mass production faces uncertainty)](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E6%B1%BD%E8%BD%A6%E9%87%8F%E4%BA%A7%E9%9D%A2%E4%B8%B4%E4%B8%8D%E7%A1%AE%E5%AE%9A%E6%80%A7%23) `326.4K 🔥` `-64%`

Updated at 2026-06-23 16:18:09

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
