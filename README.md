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

1. [高考成绩 (College Entrance Examination Results)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%23) `4.5M 🔥` `NEW`
1. [波士顿大学回复钟美美](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E5%A3%AB%E9%A1%BF%E5%A4%A7%E5%AD%A6%E5%9B%9E%E5%A4%8D%E9%92%9F%E7%BE%8E%E7%BE%8E%23) `1.6M 🔥` `NEW`
1. [7省区市大到暴雨](https://s.weibo.com/weibo?q=%237%E7%9C%81%E5%8C%BA%E5%B8%82%E5%A4%A7%E5%88%B0%E6%9A%B4%E9%9B%A8%23) `1.4M 🔥` `NEW`
1. [哈兰德偷喝对方门将的水](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%81%B7%E5%96%9D%E5%AF%B9%E6%96%B9%E9%97%A8%E5%B0%86%E7%9A%84%E6%B0%B4%23) `1.4M 🔥` `NEW`
1. [只喝水不喝饮料的朋友](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E5%96%9D%E6%B0%B4%E4%B8%8D%E5%96%9D%E9%A5%AE%E6%96%99%E7%9A%84%E6%9C%8B%E5%8F%8B%23) `1.3M 🔥` `NEW`
1. [秦彻](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%BD%BB%23) `1.2M 🔥` `NEW`
1. [律师说法](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%AF%B4%E6%B3%95%23) `1.2M 🔥` `NEW`
1. [字母哥被交易至热火](https://s.weibo.com/weibo?q=%23%E5%AD%97%E6%AF%8D%E5%93%A5%E8%A2%AB%E4%BA%A4%E6%98%93%E8%87%B3%E7%83%AD%E7%81%AB%23) `1.1M 🔥` `NEW`
1. [地球超新鲜2阵容官宣](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E8%B6%85%E6%96%B0%E9%B2%9C2%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `965.7K 🔥` `NEW`
1. [冯小刚宣发被批绑架观众](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%B0%8F%E5%88%9A%E5%AE%A3%E5%8F%91%E8%A2%AB%E6%89%B9%E7%BB%91%E6%9E%B6%E8%A7%82%E4%BC%97%23) `963.0K 🔥` `NEW`
1. [华为宣布对智驾兜底 (Huawei announces it’s taking full advantage of smart driving)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%AE%A3%E5%B8%83%E5%AF%B9%E6%99%BA%E9%A9%BE%E5%85%9C%E5%BA%95%23) `958.3K 🔥` `NEW`
1. [1岁半男童被生父女友踢死](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%8D%8A%E7%94%B7%E7%AB%A5%E8%A2%AB%E7%94%9F%E7%88%B6%E5%A5%B3%E5%8F%8B%E8%B8%A2%E6%AD%BB%23) `955.1K 🔥` `NEW`
1. [李金铭已签约MCN](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%B7%B2%E7%AD%BE%E7%BA%A6MCN%23) `950.3K 🔥` `NEW`
1. [哈兰德梅开二度](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `945.3K 🔥` `NEW`
1. [压力又给到C罗了](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%8A%9B%E5%8F%88%E7%BB%99%E5%88%B0C%E7%BD%97%E4%BA%86%23) `940.5K 🔥` `NEW`
1. [郭敬明新人撞脸三人](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E6%96%B0%E4%BA%BA%E6%92%9E%E8%84%B8%E4%B8%89%E4%BA%BA%23) `929.7K 🔥` `NEW`
1. [世界杯32强已产生6席](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF32%E5%BC%BA%E5%B7%B2%E4%BA%A7%E7%94%9F6%E5%B8%AD%23) `926.5K 🔥` `NEW`
1. [追觅汽车量产面临不确定性](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E6%B1%BD%E8%BD%A6%E9%87%8F%E4%BA%A7%E9%9D%A2%E4%B8%B4%E4%B8%8D%E7%A1%AE%E5%AE%9A%E6%80%A7%23) `916.5K 🔥` `NEW`
1. [近期鼻病毒检测阳性率上升](https://s.weibo.com/weibo?q=%23%E8%BF%91%E6%9C%9F%E9%BC%BB%E7%97%85%E6%AF%92%E6%A3%80%E6%B5%8B%E9%98%B3%E6%80%A7%E7%8E%87%E4%B8%8A%E5%8D%87%23) `904.9K 🔥` `NEW`
1. [甲骨文裁员2.1万人](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%AA%A8%E6%96%87%E8%A3%81%E5%91%982.1%E4%B8%87%E4%BA%BA%23) `901.6K 🔥` `NEW`
1. [汪苏泷邓紫棋合作曲 (A collaboration between Wang Sulong and Deng Ziqi)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E9%82%93%E7%B4%AB%E6%A3%8B%E5%90%88%E4%BD%9C%E6%9B%B2%23) `897.5K 🔥` `NEW`
1. [钟美美留学每年需近70万元](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%BE%8E%E7%BE%8E%E7%95%99%E5%AD%A6%E6%AF%8F%E5%B9%B4%E9%9C%80%E8%BF%9170%E4%B8%87%E5%85%83%23) `890.3K 🔥` `NEW`
1. [伊朗向中方通报伊美谈判情况](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%91%E4%B8%AD%E6%96%B9%E9%80%9A%E6%8A%A5%E4%BC%8A%E7%BE%8E%E8%B0%88%E5%88%A4%E6%83%85%E5%86%B5%23) `886.8K 🔥` `NEW`
1. [姆巴佩吐槽世界杯补水暂停规则](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%90%90%E6%A7%BD%E4%B8%96%E7%95%8C%E6%9D%AF%E8%A1%A5%E6%B0%B4%E6%9A%82%E5%81%9C%E8%A7%84%E5%88%99%23) `884.8K 🔥` `NEW`
1. [虞书欣草帽披肩](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%8D%89%E5%B8%BD%E6%8A%AB%E8%82%A9%23) `876.1K 🔥` `NEW`
1. [李登科聊迪丽热巴杨紫没有电影资源](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E8%81%8A%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9D%A8%E7%B4%AB%E6%B2%A1%E6%9C%89%E7%94%B5%E5%BD%B1%E8%B5%84%E6%BA%90%23) `872.5K 🔥` `NEW`
1. [恋与深空 退游](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E9%80%80%E6%B8%B8%23) `867.8K 🔥` `NEW`
1. [30岁女警为救跳楼轻生者牺牲](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%A5%B3%E8%AD%A6%E4%B8%BA%E6%95%91%E8%B7%B3%E6%A5%BC%E8%BD%BB%E7%94%9F%E8%80%85%E7%89%BA%E7%89%B2%23) `865.7K 🔥` `NEW`
1. [姆巴佩升至世界杯射手榜第二](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8D%87%E8%87%B3%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%84%E6%89%8B%E6%A6%9C%E7%AC%AC%E4%BA%8C%23) `858.9K 🔥` `NEW`
1. [曾沛慈 奥利奥](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E5%A5%A5%E5%88%A9%E5%A5%A5%23) `854.0K 🔥` `NEW`
1. [世界杯现场擦摄像头 (Wiping the camera at the World Cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E7%8E%B0%E5%9C%BA%E6%93%A6%E6%91%84%E5%83%8F%E5%A4%B4%23) `850.2K 🔥` `NEW`
1. [多款知名纸尿裤由代工厂生产](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BE%E7%9F%A5%E5%90%8D%E7%BA%B8%E5%B0%BF%E8%A3%A4%E7%94%B1%E4%BB%A3%E5%B7%A5%E5%8E%82%E7%94%9F%E4%BA%A7%23) `840.3K 🔥` `NEW`
1. [马嘉祺学士服毕业照](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AD%A6%E5%A3%AB%E6%9C%8D%E6%AF%95%E4%B8%9A%E7%85%A7%23) `834.7K 🔥` `NEW`
1. [吴尊自己也提文莱人的梗了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%B0%8A%E8%87%AA%E5%B7%B1%E4%B9%9F%E6%8F%90%E6%96%87%E8%8E%B1%E4%BA%BA%E7%9A%84%E6%A2%97%E4%BA%86%23) `832.0K 🔥` `NEW`
1. [胖东来在研究制定一年带薪丧假](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9C%A8%E7%A0%94%E7%A9%B6%E5%88%B6%E5%AE%9A%E4%B8%80%E5%B9%B4%E5%B8%A6%E8%96%AA%E4%B8%A7%E5%81%87%23) `824.4K 🔥` `NEW`
1. [董璇张维伊庆祝结婚一周年](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%BC%A0%E7%BB%B4%E4%BC%8A%E5%BA%86%E7%A5%9D%E7%BB%93%E5%A9%9A%E4%B8%80%E5%91%A8%E5%B9%B4%23) `821.8K 🔥` `NEW`
1. [贾乃亮减脂期吃草](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE%E5%87%8F%E8%84%82%E6%9C%9F%E5%90%83%E8%8D%89%23) `812.2K 🔥` `NEW`
1. [兰德尔被交易到篮网](https://s.weibo.com/weibo?q=%23%E5%85%B0%E5%BE%B7%E5%B0%94%E8%A2%AB%E4%BA%A4%E6%98%93%E5%88%B0%E7%AF%AE%E7%BD%91%23) `805.5K 🔥` `NEW`
1. [恋与深空新角色国外玩家评价](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%96%B0%E8%A7%92%E8%89%B2%E5%9B%BD%E5%A4%96%E7%8E%A9%E5%AE%B6%E8%AF%84%E4%BB%B7%23) `803.1K 🔥` `NEW`
1. [郑嘉颖账号下全是发婚纱照的](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%98%89%E9%A2%96%E8%B4%A6%E5%8F%B7%E4%B8%8B%E5%85%A8%E6%98%AF%E5%8F%91%E5%A9%9A%E7%BA%B1%E7%85%A7%E7%9A%84%23) `797.0K 🔥` `NEW`
1. [浪姐商务 (Lang Jie Business)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%95%86%E5%8A%A1%23) `790.6K 🔥` `NEW`
1. [何小鹏称MONA首款SUV对标30万级开发](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%B0%8F%E9%B9%8F%E7%A7%B0MONA%E9%A6%96%E6%AC%BESUV%E5%AF%B9%E6%A0%8730%E4%B8%87%E7%BA%A7%E5%BC%80%E5%8F%91%23) `789.9K 🔥` `NEW`
1. [白玉兰视后终极预测](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%E7%BB%88%E6%9E%81%E9%A2%84%E6%B5%8B%23) `785.0K 🔥` `NEW`
1. [刘宇宁说丁程鑫是被宠坏的人生](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B4%E4%B8%81%E7%A8%8B%E9%91%AB%E6%98%AF%E8%A2%AB%E5%AE%A0%E5%9D%8F%E7%9A%84%E4%BA%BA%E7%94%9F%23) `779.7K 🔥` `NEW`
1. [SK海力士三星电子盘中跳水](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E4%B8%89%E6%98%9F%E7%94%B5%E5%AD%90%E7%9B%98%E4%B8%AD%E8%B7%B3%E6%B0%B4%23) `775.3K 🔥` `NEW`
1. [韩红为冯小刚新电影站台引争议](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E4%B8%BA%E5%86%AF%E5%B0%8F%E5%88%9A%E6%96%B0%E7%94%B5%E5%BD%B1%E7%AB%99%E5%8F%B0%E5%BC%95%E4%BA%89%E8%AE%AE%23) `767.0K 🔥` `NEW`
1. [郑嘉颖破防了](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%98%89%E9%A2%96%E7%A0%B4%E9%98%B2%E4%BA%86%23) `933.6K 🔥` `+133%`
1. [会接话是一种高级能力](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E6%8E%A5%E8%AF%9D%E6%98%AF%E4%B8%80%E7%A7%8D%E9%AB%98%E7%BA%A7%E8%83%BD%E5%8A%9B%23) `921.3K 🔥` `+54%`
1. [美联储今年不降息黄金恐崩](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E4%BB%8A%E5%B9%B4%E4%B8%8D%E9%99%8D%E6%81%AF%E9%BB%84%E9%87%91%E6%81%90%E5%B4%A9%23) `912.0K 🔥` `+793%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `816.7K 🔥` `+259%`
1. [李金铭农村综艺那家人已败诉 (Li Jinming’s rural variety show’s family has lost the lawsuit)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%86%9C%E6%9D%91%E7%BB%BC%E8%89%BA%E9%82%A3%E5%AE%B6%E4%BA%BA%E5%B7%B2%E8%B4%A5%E8%AF%89%23) `843.5K 🔥` `-41%`

Updated at 2026-06-23 12:36:07

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
