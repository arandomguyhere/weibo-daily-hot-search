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

1. [百花奖 (Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `842.3K 🔥` `NEW`
1. [姚琛程潇 标准的男人女人](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E7%90%9B%E7%A8%8B%E6%BD%87%20%E6%A0%87%E5%87%86%E7%9A%84%E7%94%B7%E4%BA%BA%E5%A5%B3%E4%BA%BA%23) `377.7K 🔥` `NEW`
1. [台风白海豚过境迪士尼变水上乐园](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E8%BF%87%E5%A2%83%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%8F%98%E6%B0%B4%E4%B8%8A%E4%B9%90%E5%9B%AD%23) `372.7K 🔥` `NEW`
1. [张凌赫直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9B%B4%E6%92%AD%23) `362.9K 🔥` `NEW`
1. [婴儿被子蒙头快窒息时小猫扒醒宝妈](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%AD%90%E8%92%99%E5%A4%B4%E5%BF%AB%E7%AA%92%E6%81%AF%E6%97%B6%E5%B0%8F%E7%8C%AB%E6%89%92%E9%86%92%E5%AE%9D%E5%A6%88%23) `352.2K 🔥` `NEW`
1. [白海豚登陆后路径图](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E7%99%BB%E9%99%86%E5%90%8E%E8%B7%AF%E5%BE%84%E5%9B%BE%23) `347.9K 🔥` `NEW`
1. [SBS夏日歌谣大战MC失误争议](https://s.weibo.com/weibo?q=%23SBS%E5%A4%8F%E6%97%A5%E6%AD%8C%E8%B0%A3%E5%A4%A7%E6%88%98MC%E5%A4%B1%E8%AF%AF%E4%BA%89%E8%AE%AE%23) `345.3K 🔥` `NEW`
1. [王安宇问到李光洁痛处了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E9%97%AE%E5%88%B0%E6%9D%8E%E5%85%89%E6%B4%81%E7%97%9B%E5%A4%84%E4%BA%86%23) `335.7K 🔥` `NEW`
1. [赵寅成背后拉手](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AF%85%E6%88%90%E8%83%8C%E5%90%8E%E6%8B%89%E6%89%8B%23) `333.3K 🔥` `NEW`
1. [寒山寺猫咪吵架回头全是人](https://s.weibo.com/weibo?q=%23%E5%AF%92%E5%B1%B1%E5%AF%BA%E7%8C%AB%E5%92%AA%E5%90%B5%E6%9E%B6%E5%9B%9E%E5%A4%B4%E5%85%A8%E6%98%AF%E4%BA%BA%23) `329.2K 🔥` `NEW`
1. [SBS女团合作舞台 (SBS girl group collaboration stage)](https://s.weibo.com/weibo?q=%23SBS%E5%A5%B3%E5%9B%A2%E5%90%88%E4%BD%9C%E8%88%9E%E5%8F%B0%23) `325.1K 🔥` `NEW`
1. [患者走了医生躲角落哭半小时](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E8%B5%B0%E4%BA%86%E5%8C%BB%E7%94%9F%E8%BA%B2%E8%A7%92%E8%90%BD%E5%93%AD%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `321.2K 🔥` `NEW`
1. [上海有居民家中被淹](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9C%89%E5%B1%85%E6%B0%91%E5%AE%B6%E4%B8%AD%E8%A2%AB%E6%B7%B9%23) `320.8K 🔥` `NEW`
1. [医疗垃圾 手机壳](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%20%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `400.2K 🔥` `+27%`
1. [龙餐馆 奥斯卡](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E5%A5%A5%E6%96%AF%E5%8D%A1%23) `1.2M 🔥`
1. [朱一龙鼻子怎么了 (What happened to Zhu Yilong’s nose?)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E9%BC%BB%E5%AD%90%E6%80%8E%E4%B9%88%E4%BA%86%23) `399.1K 🔥`
1. [自闭症哥哥的话唠妹妹堪比心理医生](https://s.weibo.com/weibo?q=%23%E8%87%AA%E9%97%AD%E7%97%87%E5%93%A5%E5%93%A5%E7%9A%84%E8%AF%9D%E5%94%A0%E5%A6%B9%E5%A6%B9%E5%A0%AA%E6%AF%94%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F%23) `397.5K 🔥`
1. [耳机左右耳电量未解之谜 (The mystery of the battery capacity of the left and right earphones)](https://s.weibo.com/weibo?q=%23%E8%80%B3%E6%9C%BA%E5%B7%A6%E5%8F%B3%E8%80%B3%E7%94%B5%E9%87%8F%E6%9C%AA%E8%A7%A3%E4%B9%8B%E8%B0%9C%23) `394.1K 🔥`
1. [曝iPhone18Pro黑色被取消 (iPhone 18 Pro black color revealed to have been cancelled)](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E9%BB%91%E8%89%B2%E8%A2%AB%E5%8F%96%E6%B6%88%23) `392.3K 🔥`
1. [迪丽热巴给路人打码](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BB%99%E8%B7%AF%E4%BA%BA%E6%89%93%E7%A0%81%23) `386.4K 🔥`
1. [儿子去世孙子不捧骨灰盒被查出非亲生](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%8E%BB%E4%B8%96%E5%AD%99%E5%AD%90%E4%B8%8D%E6%8D%A7%E9%AA%A8%E7%81%B0%E7%9B%92%E8%A2%AB%E6%9F%A5%E5%87%BA%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `385.5K 🔥`
1. [田曦薇没刘海差点认不出来 (Tian Xiwei is almost unrecognizable without bangs)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%B2%A1%E5%88%98%E6%B5%B7%E5%B7%AE%E7%82%B9%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `383.2K 🔥`
1. [伊朗最高领袖与总统会谈](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E4%B8%8E%E6%80%BB%E7%BB%9F%E4%BC%9A%E8%B0%88%23) `381.0K 🔥`
1. [程晓玥谈离婚](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E8%B0%88%E7%A6%BB%E5%A9%9A%23) `380.2K 🔥`
1. [台风琵鹭来了 (Typhoon Spoonbill is coming)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%90%B5%E9%B9%AD%E6%9D%A5%E4%BA%86%23) `375.3K 🔥`
1. [记者发现白海豚风眼就在身后 (Reporters discovered that the eye of the white dolphin was right behind them)](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E5%8F%91%E7%8E%B0%E7%99%BD%E6%B5%B7%E8%B1%9A%E9%A3%8E%E7%9C%BC%E5%B0%B1%E5%9C%A8%E8%BA%AB%E5%90%8E%23) `373.6K 🔥`
1. [男孩1年暴长20厘米全身长满纹 (Boy grows 20 centimeters in one year and is covered in lines)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A91%E5%B9%B4%E6%9A%B4%E9%95%BF20%E5%8E%98%E7%B1%B3%E5%85%A8%E8%BA%AB%E9%95%BF%E6%BB%A1%E7%BA%B9%23) `370.8K 🔥`
1. [人鱼](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E9%B1%BC%23) `368.4K 🔥`
1. [张本美和 国乒最大威胁](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%20%E5%9B%BD%E4%B9%92%E6%9C%80%E5%A4%A7%E5%A8%81%E8%83%81%23) `365.6K 🔥`
1. [郑雅贤为中文回复道歉](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%9B%85%E8%B4%A4%E4%B8%BA%E4%B8%AD%E6%96%87%E5%9B%9E%E5%A4%8D%E9%81%93%E6%AD%89%23) `360.8K 🔥`
1. [老坛酸菜 脚踩 (Laotan pickled cabbage)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%9D%9B%E9%85%B8%E8%8F%9C%20%E8%84%9A%E8%B8%A9%23) `360.2K 🔥`
1. [印度女子出轨被撞破在院子内遭毒打](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E5%AD%90%E5%87%BA%E8%BD%A8%E8%A2%AB%E6%92%9E%E7%A0%B4%E5%9C%A8%E9%99%A2%E5%AD%90%E5%86%85%E9%81%AD%E6%AF%92%E6%89%93%23) `357.0K 🔥`
1. [沈月 希腊神女](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%20%E5%B8%8C%E8%85%8A%E7%A5%9E%E5%A5%B3%23) `356.2K 🔥`
1. [娜扎称眼睛恢复情况不太妙](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E7%A7%B0%E7%9C%BC%E7%9D%9B%E6%81%A2%E5%A4%8D%E6%83%85%E5%86%B5%E4%B8%8D%E5%A4%AA%E5%A6%99%23) `354.6K 🔥`
1. [张凌赫锁骨](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%94%81%E9%AA%A8%23) `349.9K 🔥`
1. [听泉鉴宝炒股亏到吃泡面](https://s.weibo.com/weibo?q=%23%E5%90%AC%E6%B3%89%E9%89%B4%E5%AE%9D%E7%82%92%E8%82%A1%E4%BA%8F%E5%88%B0%E5%90%83%E6%B3%A1%E9%9D%A2%23) `349.7K 🔥`
1. [柳周cp](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%91%A8cp%23) `342.7K 🔥`
1. [月经前的9个身体信号 (9 body signals before your period)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E5%89%8D%E7%9A%849%E4%B8%AA%E8%BA%AB%E4%BD%93%E4%BF%A1%E5%8F%B7%23) `342.2K 🔥`
1. [穆祉丞直播 (Mu Zhicheng live broadcast)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%9B%B4%E6%92%AD%23) `338.9K 🔥`
1. [龙餐馆 比我不是药神好十个抓娃娃](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E6%AF%94%E6%88%91%E4%B8%8D%E6%98%AF%E8%8D%AF%E7%A5%9E%E5%A5%BD%E5%8D%81%E4%B8%AA%E6%8A%93%E5%A8%83%E5%A8%83%23) `330.2K 🔥`
1. [A股人形机器人第一股正式登场 (The first stock of A-share humanoid robots officially debuts)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%AC%AC%E4%B8%80%E8%82%A1%E6%AD%A3%E5%BC%8F%E7%99%BB%E5%9C%BA%23) `327.1K 🔥`
1. [金冬天田柾国点赞同一条帖子](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%86%AC%E5%A4%A9%E7%94%B0%E6%9F%BE%E5%9B%BD%E7%82%B9%E8%B5%9E%E5%90%8C%E4%B8%80%E6%9D%A1%E5%B8%96%E5%AD%90%23) `324.4K 🔥`
1. [中国制造硬核瞬间](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%88%B6%E9%80%A0%E7%A1%AC%E6%A0%B8%E7%9E%AC%E9%97%B4%23) `678.2K 🔥` `-34%`
1. [沈腾 影帝](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%20%E5%BD%B1%E5%B8%9D%23) `642.2K 🔥` `-37%`
1. [白海豚提前登陆 (White dolphins land early)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%8F%90%E5%89%8D%E7%99%BB%E9%99%86%23) `396.1K 🔥` `-52%`
1. [张本兄妹同时夺冠 (Brother and sister Zhang Ben won the championship at the same time)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E5%85%84%E5%A6%B9%E5%90%8C%E6%97%B6%E5%A4%BA%E5%86%A0%23) `391.1K 🔥` `-87%`
1. [国乒再次无缘冠军赛冠军](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%86%8D%E6%AC%A1%E6%97%A0%E7%BC%98%E5%86%A0%E5%86%9B%E8%B5%9B%E5%86%A0%E5%86%9B%23) `388.6K 🔥` `-72%`
1. [迪丽热巴素颜香港plog](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%B4%A0%E9%A2%9C%E9%A6%99%E6%B8%AFplog%23) `366.8K 🔥` `-55%`
1. [低估了白海豚](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E4%BC%B0%E4%BA%86%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `339.9K 🔥` `-54%`
1. [白海豚 没囤东西就来了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%20%E6%B2%A1%E5%9B%A4%E4%B8%9C%E8%A5%BF%E5%B0%B1%E6%9D%A5%E4%BA%86%23) `333.8K 🔥` `-59%`

Updated at 2026-08-09 21:56:40

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
