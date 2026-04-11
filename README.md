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

1. [潮汐车道自动切换太丝滑 (Tidal lane automatic switching is too smooth)](https://s.weibo.com/weibo?q=%23%E6%BD%AE%E6%B1%90%E8%BD%A6%E9%81%93%E8%87%AA%E5%8A%A8%E5%88%87%E6%8D%A2%E5%A4%AA%E4%B8%9D%E6%BB%91%23) `809.6K 🔥` `NEW`
1. [国风BGM打开中国舰也太燃了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%A3%8EBGM%E6%89%93%E5%BC%80%E4%B8%AD%E5%9B%BD%E8%88%B0%E4%B9%9F%E5%A4%AA%E7%87%83%E4%BA%86%23) `606.5K 🔥` `NEW`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `386.2K 🔥` `NEW`
1. [李小冉唐艺昕一公造型](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%94%90%E8%89%BA%E6%98%95%E4%B8%80%E5%85%AC%E9%80%A0%E5%9E%8B%23) `165.7K 🔥` `NEW`
1. [深大回应研究生入住月租万元小区](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%A4%A7%E5%9B%9E%E5%BA%94%E7%A0%94%E7%A9%B6%E7%94%9F%E5%85%A5%E4%BD%8F%E6%9C%88%E7%A7%9F%E4%B8%87%E5%85%83%E5%B0%8F%E5%8C%BA%23) `136.4K 🔥` `NEW`
1. [韩女团成员牙疼因没空治疗直接拔了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A5%B3%E5%9B%A2%E6%88%90%E5%91%98%E7%89%99%E7%96%BC%E5%9B%A0%E6%B2%A1%E7%A9%BA%E6%B2%BB%E7%96%97%E7%9B%B4%E6%8E%A5%E6%8B%94%E4%BA%86%23) `130.8K 🔥` `NEW`
1. [美官员否认解冻伊朗资产消息](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%98%E5%91%98%E5%90%A6%E8%AE%A4%E8%A7%A3%E5%86%BB%E4%BC%8A%E6%9C%97%E8%B5%84%E4%BA%A7%E6%B6%88%E6%81%AF%23) `125.8K 🔥` `NEW`
1. [周深苏超现场首唱热烈盛开](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E8%8B%8F%E8%B6%85%E7%8E%B0%E5%9C%BA%E9%A6%96%E5%94%B1%E7%83%AD%E7%83%88%E7%9B%9B%E5%BC%80%23) `125.6K 🔥` `NEW`
1. [姜贞羽差点高位截瘫](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E8%B4%9E%E7%BE%BD%E5%B7%AE%E7%82%B9%E9%AB%98%E4%BD%8D%E6%88%AA%E7%98%AB%23) `124.5K 🔥` `NEW`
1. [苏超刚开赛名场面就来了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%88%9A%E5%BC%80%E8%B5%9B%E5%90%8D%E5%9C%BA%E9%9D%A2%E5%B0%B1%E6%9D%A5%E4%BA%86%23) `123.6K 🔥` `NEW`
1. [种地吧直播 (Farm Bar live broadcast)](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%E7%9B%B4%E6%92%AD%23) `121.8K 🔥` `NEW`
1. [孙怡有种老实人被气疯了的感觉](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E6%9C%89%E7%A7%8D%E8%80%81%E5%AE%9E%E4%BA%BA%E8%A2%AB%E6%B0%94%E7%96%AF%E4%BA%86%E7%9A%84%E6%84%9F%E8%A7%89%23) `121.0K 🔥` `NEW`
1. [伊朗取得两大战略性收益](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%96%E5%BE%97%E4%B8%A4%E5%A4%A7%E6%88%98%E7%95%A5%E6%80%A7%E6%94%B6%E7%9B%8A%23) `111.1K 🔥` `NEW`
1. [狼队醒醒](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E9%86%92%E9%86%92%23) `95.4K 🔥` `NEW`
1. [张云雷红毯人气](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%91%E9%9B%B7%E7%BA%A2%E6%AF%AF%E4%BA%BA%E6%B0%94%23) `93.8K 🔥` `NEW`
1. [男子自带茅台就餐发现味道不对报警](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%87%AA%E5%B8%A6%E8%8C%85%E5%8F%B0%E5%B0%B1%E9%A4%90%E5%8F%91%E7%8E%B0%E5%91%B3%E9%81%93%E4%B8%8D%E5%AF%B9%E6%8A%A5%E8%AD%A6%23) `88.0K 🔥` `NEW`
1. [莫氏鸡煲要大变样了](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%A6%81%E5%A4%A7%E5%8F%98%E6%A0%B7%E4%BA%86%23) `83.2K 🔥` `NEW`
1. [iG战胜WE](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CWE%23) `76.1K 🔥` `NEW`
1. [苏超直播](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E7%9B%B4%E6%92%AD%23) `1.1M 🔥` `+438%`
1. [女高管自制Excel表及时发现乳腺癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%AB%98%E7%AE%A1%E8%87%AA%E5%88%B6Excel%E8%A1%A8%E5%8F%8A%E6%97%B6%E5%8F%91%E7%8E%B0%E4%B9%B3%E8%85%BA%E7%99%8C%23) `397.6K 🔥` `+389%`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `256.8K 🔥` `+67%`
1. [狼队对战KSG (Wolves vs. KSG)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98KSG%23) `252.5K 🔥`
1. [原来我真能花100万](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%91%E7%9C%9F%E8%83%BD%E8%8A%B1100%E4%B8%87%23) `197.8K 🔥`
1. [曝曾沛慈退出浪姐 (It is revealed that Zeng Peici quits Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9B%BE%E6%B2%9B%E6%85%88%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `188.7K 🔥`
1. [张予曦毕雯珺合伙人零互动](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%AF%95%E9%9B%AF%E7%8F%BA%E5%90%88%E4%BC%99%E4%BA%BA%E9%9B%B6%E4%BA%92%E5%8A%A8%23) `182.9K 🔥`
1. [十日终焉长安二十四计海报](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%95%BF%E5%AE%89%E4%BA%8C%E5%8D%81%E5%9B%9B%E8%AE%A1%E6%B5%B7%E6%8A%A5%23) `160.4K 🔥`
1. [Danielle更新iG](https://s.weibo.com/weibo?q=%23Danielle%E6%9B%B4%E6%96%B0iG%23) `153.0K 🔥`
1. [孙怡 赵子琪淘汰发布会](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E8%B5%B5%E5%AD%90%E7%90%AA%E6%B7%98%E6%B1%B0%E5%8F%91%E5%B8%83%E4%BC%9A%23) `152.1K 🔥`
1. [马頔 我还要生孩子呢 (Ma Di, I still want to have a baby.)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%20%E6%88%91%E8%BF%98%E8%A6%81%E7%94%9F%E5%AD%A9%E5%AD%90%E5%91%A2%23) `147.4K 🔥`
1. [美国一海滩藏发现11具遗体](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E6%B5%B7%E6%BB%A9%E8%97%8F%E5%8F%91%E7%8E%B011%E5%85%B7%E9%81%97%E4%BD%93%23) `141.6K 🔥`
1. [TOP演唱会听到哨子声就把音乐调大](https://s.weibo.com/weibo?q=%23TOP%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%AC%E5%88%B0%E5%93%A8%E5%AD%90%E5%A3%B0%E5%B0%B1%E6%8A%8A%E9%9F%B3%E4%B9%90%E8%B0%83%E5%A4%A7%23) `132.0K 🔥`
1. [30多岁程序员熬夜喝咖啡确诊帕金森](https://s.weibo.com/weibo?q=%2330%E5%A4%9A%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E7%86%AC%E5%A4%9C%E5%96%9D%E5%92%96%E5%95%A1%E7%A1%AE%E8%AF%8A%E5%B8%95%E9%87%91%E6%A3%AE%23) `127.1K 🔥`
1. [马嘉祺高会](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E9%AB%98%E4%BC%9A%23) `127.0K 🔥`
1. [谢娜右边臀腿瞬间凉凉透风 (Xie Na's right buttocks and legs were instantly cool and ventilated)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%8F%B3%E8%BE%B9%E8%87%80%E8%85%BF%E7%9E%AC%E9%97%B4%E5%87%89%E5%87%89%E9%80%8F%E9%A3%8E%23) `127.0K 🔥`
1. [苏超常州vs南通首发名单 (Su Chao Changzhou vs Nantong starting lineup)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%B8%B8%E5%B7%9Evs%E5%8D%97%E9%80%9A%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95%23) `126.6K 🔥`
1. [郑丽文收到机器手礼物秒变郑三岁 (Zheng Liwen received a gift of a robot hand and instantly became Zheng three years old)](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E6%94%B6%E5%88%B0%E6%9C%BA%E5%99%A8%E6%89%8B%E7%A4%BC%E7%89%A9%E7%A7%92%E5%8F%98%E9%83%91%E4%B8%89%E5%B2%81%23) `97.9K 🔥`
1. [钢铁森林](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%23) `93.5K 🔥`
1. [导演温成林突发心梗去世](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E6%BC%94%E6%B8%A9%E6%88%90%E6%9E%97%E7%AA%81%E5%8F%91%E5%BF%83%E6%A2%97%E5%8E%BB%E4%B8%96%23) `76.5K 🔥`
1. [妻子发现丈夫藏200多枚金币气炸](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E8%97%8F200%E5%A4%9A%E6%9E%9A%E9%87%91%E5%B8%81%E6%B0%94%E7%82%B8%23) `460.7K 🔥` `-58%`
1. [月租万元小区房成为研究生宿舍](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%A7%9F%E4%B8%87%E5%85%83%E5%B0%8F%E5%8C%BA%E6%88%BF%E6%88%90%E4%B8%BA%E7%A0%94%E7%A9%B6%E7%94%9F%E5%AE%BF%E8%88%8D%23) `194.7K 🔥` `-29%`
1. [女子从日本带回244本淫秽漫画获刑 (Woman jailed for bringing 244 obscene comics from Japan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%8E%E6%97%A5%E6%9C%AC%E5%B8%A6%E5%9B%9E244%E6%9C%AC%E6%B7%AB%E7%A7%BD%E6%BC%AB%E7%94%BB%E8%8E%B7%E5%88%91%23) `168.5K 🔥` `-29%`
1. [郑丽文参观故宫](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E5%8F%82%E8%A7%82%E6%95%85%E5%AE%AB%23) `122.6K 🔥` `-84%`
1. [张靓颖怒斥工作人员泄露未发行作品 (Zhang Liangying angrily scolded the staff for leaking unreleased works)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E6%80%92%E6%96%A5%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E6%B3%84%E9%9C%B2%E6%9C%AA%E5%8F%91%E8%A1%8C%E4%BD%9C%E5%93%81%23) `107.7K 🔥` `-22%`
1. [原来冲锋衣是胶水粘的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%B2%E9%94%8B%E8%A1%A3%E6%98%AF%E8%83%B6%E6%B0%B4%E7%B2%98%E7%9A%84%23) `103.7K 🔥` `-33%`
1. [终于知道北京人为什么不爱出门了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E5%8C%97%E4%BA%AC%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%88%B1%E5%87%BA%E9%97%A8%E4%BA%86%23) `95.7K 🔥` `-30%`
1. [张慧雯回应争议](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `86.2K 🔥` `-37%`
1. [wbti](https://s.weibo.com/weibo?q=%23wbti%23) `82.8K 🔥` `-27%`
1. [老夫妻捡到铁疙瘩上交竟是国宝 (An old couple picked up an iron lump and turned it in, it turned out to be a national treasure)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%AB%E5%A6%BB%E6%8D%A1%E5%88%B0%E9%93%81%E7%96%99%E7%98%A9%E4%B8%8A%E4%BA%A4%E7%AB%9F%E6%98%AF%E5%9B%BD%E5%AE%9D%23) `82.6K 🔥` `-32%`
1. [张婉婷风波后首发文 (Zhang Wanting's first post after the controversy)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E5%8F%91%E6%96%87%23) `80.7K 🔥` `-38%`
1. [莫氏鸡煲老板娘说早20年火会拼命赚 (The proprietress of Mo’s Chicken Pot said she would have worked hard to make money if she had become popular 20 years earlier)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%A8%98%E8%AF%B4%E6%97%A920%E5%B9%B4%E7%81%AB%E4%BC%9A%E6%8B%BC%E5%91%BD%E8%B5%9A%23) `78.9K 🔥` `-22%`

Updated at 2026-04-11 19:41:06

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
