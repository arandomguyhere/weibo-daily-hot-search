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

1. [钱天一官宣结婚后读博 (Qian Tianyi officially announced that he will study for a Ph.D. after getting married)](https://s.weibo.com/weibo?q=%23%E9%92%B1%E5%A4%A9%E4%B8%80%E5%AE%98%E5%AE%A3%E7%BB%93%E5%A9%9A%E5%90%8E%E8%AF%BB%E5%8D%9A%23) `297.1K 🔥` `NEW`
1. [微博文化交流之夜澳门站](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B9%8B%E5%A4%9C%E6%BE%B3%E9%97%A8%E7%AB%99%23) `266.1K 🔥` `NEW`
1. [江语晨小考前一晚被前夫告了](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%B0%8F%E8%80%83%E5%89%8D%E4%B8%80%E6%99%9A%E8%A2%AB%E5%89%8D%E5%A4%AB%E5%91%8A%E4%BA%86%23) `95.8K 🔥` `NEW`
1. [斗破苍穹](https://s.weibo.com/weibo?q=%23%E6%96%97%E7%A0%B4%E8%8B%8D%E7%A9%B9%23) `94.9K 🔥` `NEW`
1. [江语晨前夫](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%89%8D%E5%A4%AB%23) `94.1K 🔥` `NEW`
1. [为什么大陆的留学生能力都那么强](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A4%A7%E9%99%86%E7%9A%84%E7%95%99%E5%AD%A6%E7%94%9F%E8%83%BD%E5%8A%9B%E9%83%BD%E9%82%A3%E4%B9%88%E5%BC%BA%23) `93.2K 🔥` `NEW`
1. [歌手周深苏超开幕式献唱](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%91%A8%E6%B7%B1%E8%8B%8F%E8%B6%85%E5%BC%80%E5%B9%95%E5%BC%8F%E7%8C%AE%E5%94%B1%23) `92.4K 🔥` `NEW`
1. [伊朗提出与美谈判前提条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8F%90%E5%87%BA%E4%B8%8E%E7%BE%8E%E8%B0%88%E5%88%A4%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6%23) `90.0K 🔥` `NEW`
1. [田曦薇直播](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%9B%B4%E6%92%AD%23) `89.3K 🔥` `NEW`
1. [花三百块测出自己是智障](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E4%B8%89%E7%99%BE%E5%9D%97%E6%B5%8B%E5%87%BA%E8%87%AA%E5%B7%B1%E6%98%AF%E6%99%BA%E9%9A%9C%23) `87.9K 🔥` `NEW`
1. [苏超开幕式排面拉满了 (The opening ceremony of the Scottish Premiership is packed with people)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%BC%80%E5%B9%95%E5%BC%8F%E6%8E%92%E9%9D%A2%E6%8B%89%E6%BB%A1%E4%BA%86%23) `84.6K 🔥` `NEW`
1. [阿森纳vs伯恩茅斯](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3vs%E4%BC%AF%E6%81%A9%E8%8C%85%E6%96%AF%23) `82.5K 🔥` `NEW`
1. [小米正式调价](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%AD%A3%E5%BC%8F%E8%B0%83%E4%BB%B7%23) `81.6K 🔥` `NEW`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `1.1M 🔥` `+190%`
1. [曝曾沛慈退出浪姐 (It is revealed that Zeng Peici quits Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9B%BE%E6%B2%9B%E6%85%88%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `641.1K 🔥` `+240%`
1. [狼队对战KSG (Wolves vs. KSG)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98KSG%23) `403.3K 🔥` `+60%`
1. [李小冉唐艺昕一公造型](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%94%90%E8%89%BA%E6%98%95%E4%B8%80%E5%85%AC%E9%80%A0%E5%9E%8B%23) `258.5K 🔥` `+56%`
1. [姜贞羽差点高位截瘫](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E8%B4%9E%E7%BE%BD%E5%B7%AE%E7%82%B9%E9%AB%98%E4%BD%8D%E6%88%AA%E7%98%AB%23) `205.9K 🔥` `+65%`
1. [伊朗取得两大战略性收益](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%96%E5%BE%97%E4%B8%A4%E5%A4%A7%E6%88%98%E7%95%A5%E6%80%A7%E6%94%B6%E7%9B%8A%23) `178.9K 🔥` `+61%`
1. [韩女团成员牙疼因没空治疗直接拔了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A5%B3%E5%9B%A2%E6%88%90%E5%91%98%E7%89%99%E7%96%BC%E5%9B%A0%E6%B2%A1%E7%A9%BA%E6%B2%BB%E7%96%97%E7%9B%B4%E6%8E%A5%E6%8B%94%E4%BA%86%23) `178.6K 🔥` `+36%`
1. [莫氏鸡煲要大变样了](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%A6%81%E5%A4%A7%E5%8F%98%E6%A0%B7%E4%BA%86%23) `153.6K 🔥` `+85%`
1. [男子自带茅台就餐发现味道不对报警](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%87%AA%E5%B8%A6%E8%8C%85%E5%8F%B0%E5%B0%B1%E9%A4%90%E5%8F%91%E7%8E%B0%E5%91%B3%E9%81%93%E4%B8%8D%E5%AF%B9%E6%8A%A5%E8%AD%A6%23) `128.6K 🔥` `+46%`
1. [国风BGM打开中国舰也太燃了 (It’s too hot to open the Chinese ship with the Chinese style BGM)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%A3%8EBGM%E6%89%93%E5%BC%80%E4%B8%AD%E5%9B%BD%E8%88%B0%E4%B9%9F%E5%A4%AA%E7%87%83%E4%BA%86%23) `644.3K 🔥`
1. [女高管自制Excel表及时发现乳腺癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%AB%98%E7%AE%A1%E8%87%AA%E5%88%B6Excel%E8%A1%A8%E5%8F%8A%E6%97%B6%E5%8F%91%E7%8E%B0%E4%B9%B3%E8%85%BA%E7%99%8C%23) `371.1K 🔥`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `248.2K 🔥`
1. [张予曦毕雯珺合伙人零互动](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%AF%95%E9%9B%AF%E7%8F%BA%E5%90%88%E4%BC%99%E4%BA%BA%E9%9B%B6%E4%BA%92%E5%8A%A8%23) `220.4K 🔥`
1. [十日终焉长安二十四计海报](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%95%BF%E5%AE%89%E4%BA%8C%E5%8D%81%E5%9B%9B%E8%AE%A1%E6%B5%B7%E6%8A%A5%23) `178.1K 🔥`
1. [原来我真能花100万](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%91%E7%9C%9F%E8%83%BD%E8%8A%B1100%E4%B8%87%23) `173.6K 🔥`
1. [孙怡 赵子琪淘汰发布会](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E8%B5%B5%E5%AD%90%E7%90%AA%E6%B7%98%E6%B1%B0%E5%8F%91%E5%B8%83%E4%BC%9A%23) `166.1K 🔥`
1. [马頔 我还要生孩子呢 (Ma Di, I still want to have a baby.)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%20%E6%88%91%E8%BF%98%E8%A6%81%E7%94%9F%E5%AD%A9%E5%AD%90%E5%91%A2%23) `148.5K 🔥`
1. [TOP演唱会听到哨子声就把音乐调大](https://s.weibo.com/weibo?q=%23TOP%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%AC%E5%88%B0%E5%93%A8%E5%AD%90%E5%A3%B0%E5%B0%B1%E6%8A%8A%E9%9F%B3%E4%B9%90%E8%B0%83%E5%A4%A7%23) `147.7K 🔥`
1. [孙怡有种老实人被气疯了的感觉](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E6%9C%89%E7%A7%8D%E8%80%81%E5%AE%9E%E4%BA%BA%E8%A2%AB%E6%B0%94%E7%96%AF%E4%BA%86%E7%9A%84%E6%84%9F%E8%A7%89%23) `138.0K 🔥`
1. [谢娜右边臀腿瞬间凉凉透风 (Xie Na's right buttocks and legs were instantly cool and ventilated)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%8F%B3%E8%BE%B9%E8%87%80%E8%85%BF%E7%9E%AC%E9%97%B4%E5%87%89%E5%87%89%E9%80%8F%E9%A3%8E%23) `136.4K 🔥`
1. [马嘉祺高会](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E9%AB%98%E4%BC%9A%23) `129.5K 🔥`
1. [周深苏超现场首唱热烈盛开](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E8%8B%8F%E8%B6%85%E7%8E%B0%E5%9C%BA%E9%A6%96%E5%94%B1%E7%83%AD%E7%83%88%E7%9B%9B%E5%BC%80%23) `129.1K 🔥`
1. [张靓颖怒斥工作人员泄露未发行作品 (Zhang Liangying angrily scolded the staff for leaking unreleased works)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E6%80%92%E6%96%A5%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E6%B3%84%E9%9C%B2%E6%9C%AA%E5%8F%91%E8%A1%8C%E4%BD%9C%E5%93%81%23) `94.5K 🔥`
1. [终于知道北京人为什么不爱出门了 (Finally I understand why Beijingers don’t like to go out anymore)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E5%8C%97%E4%BA%AC%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%88%B1%E5%87%BA%E9%97%A8%E4%BA%86%23) `93.7K 🔥`
1. [钢铁森林](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%23) `85.0K 🔥`
1. [苏超直播](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E7%9B%B4%E6%92%AD%23) `837.3K 🔥` `-24%`
1. [妻子发现丈夫藏200多枚金币气炸](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E8%97%8F200%E5%A4%9A%E6%9E%9A%E9%87%91%E5%B8%81%E6%B0%94%E7%82%B8%23) `341.3K 🔥` `-26%`
1. [潮汐车道自动切换太丝滑 (Tidal lane automatic switching is too smooth)](https://s.weibo.com/weibo?q=%23%E6%BD%AE%E6%B1%90%E8%BD%A6%E9%81%93%E8%87%AA%E5%8A%A8%E5%88%87%E6%8D%A2%E5%A4%AA%E4%B8%9D%E6%BB%91%23) `299.8K 🔥` `-63%`
1. [月租万元小区房成为研究生宿舍](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%A7%9F%E4%B8%87%E5%85%83%E5%B0%8F%E5%8C%BA%E6%88%BF%E6%88%90%E4%B8%BA%E7%A0%94%E7%A9%B6%E7%94%9F%E5%AE%BF%E8%88%8D%23) `139.2K 🔥` `-29%`
1. [女子从日本带回244本淫秽漫画获刑 (Woman jailed for bringing 244 obscene comics from Japan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%8E%E6%97%A5%E6%9C%AC%E5%B8%A6%E5%9B%9E244%E6%9C%AC%E6%B7%AB%E7%A7%BD%E6%BC%AB%E7%94%BB%E8%8E%B7%E5%88%91%23) `129.6K 🔥` `-23%`
1. [美国一海滩藏发现11具遗体](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E6%B5%B7%E6%BB%A9%E8%97%8F%E5%8F%91%E7%8E%B011%E5%85%B7%E9%81%97%E4%BD%93%23) `96.1K 🔥` `-32%`
1. [郑丽文参观故宫](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E5%8F%82%E8%A7%82%E6%95%85%E5%AE%AB%23) `95.6K 🔥` `-22%`
1. [Danielle更新iG](https://s.weibo.com/weibo?q=%23Danielle%E6%9B%B4%E6%96%B0iG%23) `95.3K 🔥` `-38%`
1. [苏超常州vs南通首发名单 (Su Chao Changzhou vs Nantong starting lineup)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%B8%B8%E5%B7%9Evs%E5%8D%97%E9%80%9A%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95%23) `93.0K 🔥` `-26%`
1. [种地吧直播 (Farm Bar live broadcast)](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%E7%9B%B4%E6%92%AD%23) `92.6K 🔥` `-24%`
1. [苏超刚开赛名场面就来了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%88%9A%E5%BC%80%E8%B5%9B%E5%90%8D%E5%9C%BA%E9%9D%A2%E5%B0%B1%E6%9D%A5%E4%BA%86%23) `89.4K 🔥` `-28%`
1. [原来冲锋衣是胶水粘的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%B2%E9%94%8B%E8%A1%A3%E6%98%AF%E8%83%B6%E6%B0%B4%E7%B2%98%E7%9A%84%23) `81.6K 🔥` `-21%`

Updated at 2026-04-11 20:01:12

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
