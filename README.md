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

1. [煤矿爆炸时247人下井仅记录124人 (When the coal mine exploded, 247 people went down and only 124 were recorded.)](https://s.weibo.com/weibo?q=%23%E7%85%A4%E7%9F%BF%E7%88%86%E7%82%B8%E6%97%B6247%E4%BA%BA%E4%B8%8B%E4%BA%95%E4%BB%85%E8%AE%B0%E5%BD%95124%E4%BA%BA%23) `2.1M 🔥` `NEW`
1. [李晨郑恺 不舒服](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%20%E4%B8%8D%E8%88%92%E6%9C%8D%23) `943.9K 🔥` `NEW`
1. [德国性侵案涉多名985毕业生](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E6%80%A7%E4%BE%B5%E6%A1%88%E6%B6%89%E5%A4%9A%E5%90%8D985%E6%AF%95%E4%B8%9A%E7%94%9F%23) `840.6K 🔥` `NEW`
1. [张彬彬曾因王鹤棣脑震荡](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E6%9B%BE%E5%9B%A0%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%84%91%E9%9C%87%E8%8D%A1%23) `826.9K 🔥` `NEW`
1. [遇见桃运收获京喜](https://s.weibo.com/weibo?q=%23%E9%81%87%E8%A7%81%E6%A1%83%E8%BF%90%E6%94%B6%E8%8E%B7%E4%BA%AC%E5%96%9C%23) `815.3K 🔥` `NEW`
1. [霸王茶姬geelato新品爆火](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%ACgeelato%E6%96%B0%E5%93%81%E7%88%86%E7%81%AB%23) `771.4K 🔥` `NEW`
1. [武契奇抵京](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E6%8A%B5%E4%BA%AC%23) `682.5K 🔥` `NEW`
1. [第一幕都不觉得她化妆了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E5%B9%95%E9%83%BD%E4%B8%8D%E8%A7%89%E5%BE%97%E5%A5%B9%E5%8C%96%E5%A6%86%E4%BA%86%23) `674.1K 🔥` `NEW`
1. [学历不是评判标准但的确影响思考能力](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E5%8E%86%E4%B8%8D%E6%98%AF%E8%AF%84%E5%88%A4%E6%A0%87%E5%87%86%E4%BD%86%E7%9A%84%E7%A1%AE%E5%BD%B1%E5%93%8D%E6%80%9D%E8%80%83%E8%83%BD%E5%8A%9B%23) `416.5K 🔥` `NEW`
1. [女儿被缰绳绕颈妈妈跑不过马好绝望](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%A2%AB%E7%BC%B0%E7%BB%B3%E7%BB%95%E9%A2%88%E5%A6%88%E5%A6%88%E8%B7%91%E4%B8%8D%E8%BF%87%E9%A9%AC%E5%A5%BD%E7%BB%9D%E6%9C%9B%23) `411.6K 🔥` `NEW`
1. [孙怡 女儿出名妈妈就有了名字 (Sun Yi’s daughter is famous and her mother has a name)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%A5%B3%E5%84%BF%E5%87%BA%E5%90%8D%E5%A6%88%E5%A6%88%E5%B0%B1%E6%9C%89%E4%BA%86%E5%90%8D%E5%AD%97%23) `408.8K 🔥` `NEW`
1. [刘宇宁说因为粉丝和朋友产生隔阂很傻](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B4%E5%9B%A0%E4%B8%BA%E7%B2%89%E4%B8%9D%E5%92%8C%E6%9C%8B%E5%8F%8B%E4%BA%A7%E7%94%9F%E9%9A%94%E9%98%82%E5%BE%88%E5%82%BB%23) `408.2K 🔥` `NEW`
1. [尼克斯3比0骑士](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%85%8B%E6%96%AF3%E6%AF%940%E9%AA%91%E5%A3%AB%23) `404.7K 🔥` `NEW`
1. [当AI有一副人的身体](https://s.weibo.com/weibo?q=%23%E5%BD%93AI%E6%9C%89%E4%B8%80%E5%89%AF%E4%BA%BA%E7%9A%84%E8%BA%AB%E4%BD%93%23) `403.6K 🔥` `NEW`
1. [123人没登记就下井了](https://s.weibo.com/weibo?q=%23123%E4%BA%BA%E6%B2%A1%E7%99%BB%E8%AE%B0%E5%B0%B1%E4%B8%8B%E4%BA%95%E4%BA%86%23) `402.1K 🔥` `NEW`
1. [地铁吐血女孩石门捐款次日被送急诊](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E7%9F%B3%E9%97%A8%E6%8D%90%E6%AC%BE%E6%AC%A1%E6%97%A5%E8%A2%AB%E9%80%81%E6%80%A5%E8%AF%8A%23) `398.9K 🔥` `NEW`
1. [沈月涨粉量](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%B6%A8%E7%B2%89%E9%87%8F%23) `396.8K 🔥` `NEW`
1. [广东湿到冒泡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E6%B9%BF%E5%88%B0%E5%86%92%E6%B3%A1%23) `394.9K 🔥` `NEW`
1. [小区养马拖死女童马主人被立案](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E5%85%BB%E9%A9%AC%E6%8B%96%E6%AD%BB%E5%A5%B3%E7%AB%A5%E9%A9%AC%E4%B8%BB%E4%BA%BA%E8%A2%AB%E7%AB%8B%E6%A1%88%23) `392.3K 🔥` `NEW`
1. [给阿嬷的情书票房破十亿](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E7%A0%B4%E5%8D%81%E4%BA%BF%23) `391.5K 🔥` `NEW`
1. [只要站起来会发现水其实很浅 (As soon as you stand up, you will find that the water is actually very shallow)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E8%A6%81%E7%AB%99%E8%B5%B7%E6%9D%A5%E4%BC%9A%E5%8F%91%E7%8E%B0%E6%B0%B4%E5%85%B6%E5%AE%9E%E5%BE%88%E6%B5%85%23) `388.5K 🔥` `NEW`
1. [张凌赫太多人的隐私就不发了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%AA%E5%A4%9A%E4%BA%BA%E7%9A%84%E9%9A%90%E7%A7%81%E5%B0%B1%E4%B8%8D%E5%8F%91%E4%BA%86%23) `386.8K 🔥` `NEW`
1. [每天刷手机5小时以上的人都怎么样了](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%88%B7%E6%89%8B%E6%9C%BA5%E5%B0%8F%E6%97%B6%E4%BB%A5%E4%B8%8A%E7%9A%84%E4%BA%BA%E9%83%BD%E6%80%8E%E4%B9%88%E6%A0%B7%E4%BA%86%23) `382.8K 🔥` `NEW`
1. [杨紫张一山军训合照](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%BC%A0%E4%B8%80%E5%B1%B1%E5%86%9B%E8%AE%AD%E5%90%88%E7%85%A7%23) `381.8K 🔥` `NEW`
1. [这得多甜刘宇宁都唱夹起来了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%BE%97%E5%A4%9A%E7%94%9C%E5%88%98%E5%AE%87%E5%AE%81%E9%83%BD%E5%94%B1%E5%A4%B9%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `377.8K 🔥` `NEW`
1. [重庆永川暴雨](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E6%B0%B8%E5%B7%9D%E6%9A%B4%E9%9B%A8%23) `376.2K 🔥` `NEW`
1. [惠英红 算你不对算你没用](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E7%AE%97%E4%BD%A0%E4%B8%8D%E5%AF%B9%E7%AE%97%E4%BD%A0%E6%B2%A1%E7%94%A8%23) `372.2K 🔥` `NEW`
1. [枪击发生时特朗普正在白宫](https://s.weibo.com/weibo?q=%23%E6%9E%AA%E5%87%BB%E5%8F%91%E7%94%9F%E6%97%B6%E7%89%B9%E6%9C%97%E6%99%AE%E6%AD%A3%E5%9C%A8%E7%99%BD%E5%AE%AB%23) `370.0K 🔥` `NEW`
1. [EXO回忆参加快乐大本营](https://s.weibo.com/weibo?q=%23EXO%E5%9B%9E%E5%BF%86%E5%8F%82%E5%8A%A0%E5%BF%AB%E4%B9%90%E5%A4%A7%E6%9C%AC%E8%90%A5%23) `368.5K 🔥` `NEW`
1. [严浩翔捡东西吓得贺峻霖摸眼睛](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%8D%A1%E4%B8%9C%E8%A5%BF%E5%90%93%E5%BE%97%E8%B4%BA%E5%B3%BB%E9%9C%96%E6%91%B8%E7%9C%BC%E7%9D%9B%23) `367.1K 🔥` `NEW`
1. [爬行能解决大部分体态问题 (Crawling can solve most posture problems)](https://s.weibo.com/weibo?q=%23%E7%88%AC%E8%A1%8C%E8%83%BD%E8%A7%A3%E5%86%B3%E5%A4%A7%E9%83%A8%E5%88%86%E4%BD%93%E6%80%81%E9%97%AE%E9%A2%98%23) `364.0K 🔥` `NEW`
1. [本周狗屎运最旺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E7%8B%97%E5%B1%8E%E8%BF%90%E6%9C%80%E6%97%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `362.4K 🔥` `NEW`
1. [华为培训会是认识时代少年团](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%9F%B9%E8%AE%AD%E4%BC%9A%E6%98%AF%E8%AE%A4%E8%AF%86%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%23) `358.8K 🔥` `NEW`
1. [张大奕怀二胎](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A7%E5%A5%95%E6%80%80%E4%BA%8C%E8%83%8E%23) `356.9K 🔥` `NEW`
1. [男子踩中蛇窝被咬10多口](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B8%A9%E4%B8%AD%E8%9B%87%E7%AA%9D%E8%A2%AB%E5%92%AC10%E5%A4%9A%E5%8F%A3%23) `355.3K 🔥` `NEW`
1. [针对重庆启动国家四级救灾应急响应](https://s.weibo.com/weibo?q=%23%E9%92%88%E5%AF%B9%E9%87%8D%E5%BA%86%E5%90%AF%E5%8A%A8%E5%9B%BD%E5%AE%B6%E5%9B%9B%E7%BA%A7%E6%95%91%E7%81%BE%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94%23) `351.7K 🔥` `NEW`
1. [宠物博主不一定要有猫](https://s.weibo.com/weibo?q=%23%E5%AE%A0%E7%89%A9%E5%8D%9A%E4%B8%BB%E4%B8%8D%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9C%89%E7%8C%AB%23) `350.5K 🔥` `NEW`
1. [重庆永川暴雨致多人失联](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E6%B0%B8%E5%B7%9D%E6%9A%B4%E9%9B%A8%E8%87%B4%E5%A4%9A%E4%BA%BA%E5%A4%B1%E8%81%94%23) `347.8K 🔥` `NEW`
1. [AI时代最不可替代的东西](https://s.weibo.com/weibo?q=%23AI%E6%97%B6%E4%BB%A3%E6%9C%80%E4%B8%8D%E5%8F%AF%E6%9B%BF%E4%BB%A3%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `342.5K 🔥` `NEW`
1. [山西煤矿事故现场机器人参与搜救](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E7%8E%B0%E5%9C%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8F%82%E4%B8%8E%E6%90%9C%E6%95%91%23) `339.5K 🔥` `NEW`
1. [武契奇首次对华进行国事访问 (Vucic pays first state visit to China)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E9%A6%96%E6%AC%A1%E5%AF%B9%E5%8D%8E%E8%BF%9B%E8%A1%8C%E5%9B%BD%E4%BA%8B%E8%AE%BF%E9%97%AE%23) `338.4K 🔥` `NEW`
1. [日本订购400枚战斧交付将严重延误](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%AE%A2%E8%B4%AD400%E6%9E%9A%E6%88%98%E6%96%A7%E4%BA%A4%E4%BB%98%E5%B0%86%E4%B8%A5%E9%87%8D%E5%BB%B6%E8%AF%AF%23) `336.5K 🔥` `NEW`
1. [大奉打更人 (Da Feng the watchman)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A5%89%E6%89%93%E6%9B%B4%E4%BA%BA%23) `1.3M 🔥` `+55%`
1. [神舟二十三号出征 (Shenzhou 23 sets off)](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%88%9F%E4%BA%8C%E5%8D%81%E4%B8%89%E5%8F%B7%E5%87%BA%E5%BE%81%23) `975.9K 🔥` `+212%`
1. [不舒服文学](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%88%92%E6%9C%8D%E6%96%87%E5%AD%A6%23) `385.9K 🔥` `+24%`
1. [王鹤棣沈月 再见朋友](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%B2%88%E6%9C%88%20%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%23) `416.2K 🔥`
1. [程涛为白鹿发声](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%B6%9B%E4%B8%BA%E7%99%BD%E9%B9%BF%E5%8F%91%E5%A3%B0%23) `374.5K 🔥`
1. [6岁患癌女童冻存卵巢](https://s.weibo.com/weibo?q=%236%E5%B2%81%E6%82%A3%E7%99%8C%E5%A5%B3%E7%AB%A5%E5%86%BB%E5%AD%98%E5%8D%B5%E5%B7%A2%23) `360.3K 🔥`
1. [一诺哭了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%93%AD%E4%BA%86%23) `344.3K 🔥`
1. [李晨郑恺跑男停宣了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E8%B7%91%E7%94%B7%E5%81%9C%E5%AE%A3%E4%BA%86%23) `414.1K 🔥` `-35%`
1. [赵今麦流浪地球3杀青](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%833%E6%9D%80%E9%9D%92%23) `346.8K 🔥` `-41%`

Updated at 2026-05-24 13:44:44

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
