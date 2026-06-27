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

1. [浪姐 依旧难听 (Sister Lang is still ugly)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E4%BE%9D%E6%97%A7%E9%9A%BE%E5%90%AC%23) `1.3M 🔥` `NEW`
1. [中国机电产品加速出海](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%BA%E7%94%B5%E4%BA%A7%E5%93%81%E5%8A%A0%E9%80%9F%E5%87%BA%E6%B5%B7%23) `953.0K 🔥` `NEW`
1. [王濛李小冉和结婚有什么区别](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%9D%8E%E5%B0%8F%E5%86%89%E5%92%8C%E7%BB%93%E5%A9%9A%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%23) `944.7K 🔥` `NEW`
1. [曾沛慈团唱跳 夯](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2%E5%94%B1%E8%B7%B3%20%E5%A4%AF%23) `875.6K 🔥` `NEW`
1. [恋与制作人](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E5%88%B6%E4%BD%9C%E4%BA%BA%23) `522.2K 🔥` `NEW`
1. [吴艳妮12秒99夺冠](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE12%E7%A7%9299%E5%A4%BA%E5%86%A0%23) `483.2K 🔥` `NEW`
1. [高敏感人都去学农吧](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%95%8F%E6%84%9F%E4%BA%BA%E9%83%BD%E5%8E%BB%E5%AD%A6%E5%86%9C%E5%90%A7%23) `483.2K 🔥` `NEW`
1. [李小冉 假拉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%81%87%E6%8B%89%23) `483.0K 🔥` `NEW`
1. [AG对战RW](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98RW%23) `482.5K 🔥` `NEW`
1. [奔驰取消德国9万名员工年终奖](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E5%8F%96%E6%B6%88%E5%BE%B7%E5%9B%BD9%E4%B8%87%E5%90%8D%E5%91%98%E5%B7%A5%E5%B9%B4%E7%BB%88%E5%A5%96%23) `482.3K 🔥` `NEW`
1. [陈瑶忘词 (Chen Yao Forgot Ci)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%BF%98%E8%AF%8D%23) `482.0K 🔥` `NEW`
1. [国际滑联力挺王濛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E6%BB%91%E8%81%94%E5%8A%9B%E6%8C%BA%E7%8E%8B%E6%BF%9B%23) `481.8K 🔥` `NEW`
1. [穆祉丞恋人](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%81%8B%E4%BA%BA%23) `480.8K 🔥` `NEW`
1. [欧洲抢购中国空调](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E6%8A%A2%E8%B4%AD%E4%B8%AD%E5%9B%BD%E7%A9%BA%E8%B0%83%23) `479.9K 🔥` `NEW`
1. [韩国队出线概率有多大](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E5%87%BA%E7%BA%BF%E6%A6%82%E7%8E%87%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `479.0K 🔥` `NEW`
1. [Hey girl 全季最佳](https://s.weibo.com/weibo?q=%23Hey%20girl%20%E5%85%A8%E5%AD%A3%E6%9C%80%E4%BD%B3%23) `478.1K 🔥` `NEW`
1. [应急部门回应女子玩水被卡石缝身亡](https://s.weibo.com/weibo?q=%23%E5%BA%94%E6%80%A5%E9%83%A8%E9%97%A8%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E7%8E%A9%E6%B0%B4%E8%A2%AB%E5%8D%A1%E7%9F%B3%E7%BC%9D%E8%BA%AB%E4%BA%A1%23) `476.6K 🔥` `NEW`
1. [曾沛慈团905票](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2905%E7%A5%A8%23) `475.8K 🔥` `NEW`
1. [女孩高考708分称清华爸爸是榜样](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%AB%98%E8%80%83708%E5%88%86%E7%A7%B0%E6%B8%85%E5%8D%8E%E7%88%B8%E7%88%B8%E6%98%AF%E6%A6%9C%E6%A0%B7%23) `474.5K 🔥` `NEW`
1. [王橹杰泡泡 咴啊](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%B3%A1%E6%B3%A1%20%E5%92%B4%E5%95%8A%23) `473.9K 🔥` `NEW`
1. [奥利奥乘风决赛 (Oreo Windward Finals)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%A5%A5%E4%B9%98%E9%A3%8E%E5%86%B3%E8%B5%9B%23) `472.3K 🔥` `NEW`
1. [张月团918票](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2918%E7%A5%A8%23) `471.1K 🔥` `NEW`
1. [陈情令开播七周年醉戾悔](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%83%85%E4%BB%A4%E5%BC%80%E6%92%AD%E4%B8%83%E5%91%A8%E5%B9%B4%E9%86%89%E6%88%BE%E6%82%94%23) `470.3K 🔥` `NEW`
1. [荣耀机器人到重庆也得拍落地签](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%88%B0%E9%87%8D%E5%BA%86%E4%B9%9F%E5%BE%97%E6%8B%8D%E8%90%BD%E5%9C%B0%E7%AD%BE%23) `469.3K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `467.8K 🔥` `NEW`
1. [瑶台月下](https://s.weibo.com/weibo?q=%23%E7%91%B6%E5%8F%B0%E6%9C%88%E4%B8%8B%23) `467.2K 🔥` `NEW`
1. [高考分数](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%23) `465.9K 🔥` `NEW`
1. [毛晓彤递问心2的刀子了](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E9%80%92%E9%97%AE%E5%BF%832%E7%9A%84%E5%88%80%E5%AD%90%E4%BA%86%23) `464.9K 🔥` `NEW`
1. [阚清子不舒服吗](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E4%B8%8D%E8%88%92%E6%9C%8D%E5%90%97%23) `464.5K 🔥` `NEW`
1. [北大哲学系主任的毕业致辞火了](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E5%93%B2%E5%AD%A6%E7%B3%BB%E4%B8%BB%E4%BB%BB%E7%9A%84%E6%AF%95%E4%B8%9A%E8%87%B4%E8%BE%9E%E7%81%AB%E4%BA%86%23) `461.8K 🔥` `NEW`
1. [张月陈瑶像去结婚的 (Zhang Yue and Chen Yao seem to be getting married)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%E5%83%8F%E5%8E%BB%E7%BB%93%E5%A9%9A%E7%9A%84%23) `434.2K 🔥` `NEW`
1. [赵兆没来浪姐总决赛](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%85%86%E6%B2%A1%E6%9D%A5%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%23) `420.6K 🔥` `NEW`
1. [芒果什么时候原谅DNA](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%8E%9F%E8%B0%85DNA%23) `393.9K 🔥` `NEW`
1. [黄灿灿真成rapstar了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E7%9C%9F%E6%88%90rapstar%E4%BA%86%23) `365.5K 🔥` `NEW`
1. [通过衣服吊牌看成本价的方法](https://s.weibo.com/weibo?q=%23%E9%80%9A%E8%BF%87%E8%A1%A3%E6%9C%8D%E5%90%8A%E7%89%8C%E7%9C%8B%E6%88%90%E6%9C%AC%E4%BB%B7%E7%9A%84%E6%96%B9%E6%B3%95%23) `358.8K 🔥` `NEW`
1. [孙怡团883 高了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%9B%A2883%20%E9%AB%98%E4%BA%86%23) `357.9K 🔥` `NEW`
1. [穆祉丞演唱会蓝粉海](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E8%93%9D%E7%B2%89%E6%B5%B7%23) `357.8K 🔥` `NEW`
1. [浪姐总决赛](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%23) `3.5M 🔥` `+320%`
1. [不穿的衣服可以拿来挂耳环](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%A9%BF%E7%9A%84%E8%A1%A3%E6%9C%8D%E5%8F%AF%E4%BB%A5%E6%8B%BF%E6%9D%A5%E6%8C%82%E8%80%B3%E7%8E%AF%23) `890.8K 🔥` `+37%`
1. [华为乾崑助力全新猛士M817上市 (Huawei Qiankun helps launch the new Warrior M817)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E5%8A%A9%E5%8A%9B%E5%85%A8%E6%96%B0%E7%8C%9B%E5%A3%ABM817%E4%B8%8A%E5%B8%82%23) `871.8K 🔥` `+124%`
1. [欧洲极端高温热死15000人](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E6%9E%81%E7%AB%AF%E9%AB%98%E6%B8%A9%E7%83%AD%E6%AD%BB15000%E4%BA%BA%23) `481.4K 🔥` `+83%`
1. [机枪坠落砸死日本精锐部队成员 (Machine gun falls and kills member of Japanese elite troops)](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E6%9E%AA%E5%9D%A0%E8%90%BD%E7%A0%B8%E6%AD%BB%E6%97%A5%E6%9C%AC%E7%B2%BE%E9%94%90%E9%83%A8%E9%98%9F%E6%88%90%E5%91%98%23) `472.0K 🔥` `+31%`
1. [不叠被子主义](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%8F%A0%E8%A2%AB%E5%AD%90%E4%B8%BB%E4%B9%89%23) `448.8K 🔥` `+28%`
1. [去家务化意识](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%AE%B6%E5%8A%A1%E5%8C%96%E6%84%8F%E8%AF%86%23) `407.2K 🔥` `+23%`
1. [班主任说要解散班级群 (The class teacher said that the class group will be disbanded)](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E8%AF%B4%E8%A6%81%E8%A7%A3%E6%95%A3%E7%8F%AD%E7%BA%A7%E7%BE%A4%23) `846.9K 🔥`
1. [日方对辽宁舰编队滋扰发生重大变化](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%96%B9%E5%AF%B9%E8%BE%BD%E5%AE%81%E8%88%B0%E7%BC%96%E9%98%9F%E6%BB%8B%E6%89%B0%E5%8F%91%E7%94%9F%E9%87%8D%E5%A4%A7%E5%8F%98%E5%8C%96%23) `473.3K 🔥`
1. [佛得角足协副主席感谢中国](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E8%B6%B3%E5%8D%8F%E5%89%AF%E4%B8%BB%E5%B8%AD%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23) `469.0K 🔥`
1. [杨紫爸爸请粉丝吃冰淇淋](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%88%B8%E7%88%B8%E8%AF%B7%E7%B2%89%E4%B8%9D%E5%90%83%E5%86%B0%E6%B7%87%E6%B7%8B%23) `466.0K 🔥`
1. [杨紫粉底液](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%B2%89%E5%BA%95%E6%B6%B2%23) `481.9K 🔥` `-31%`
1. [金曲奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9B%B2%E5%A5%96%23) `477.7K 🔥` `-30%`
1. [韩国第8 (South Korea 8th)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%AC%AC8%23) `475.5K 🔥` `-56%`

Updated at 2026-06-27 21:48:12

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
