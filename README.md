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

1. [上5休1上5休3上3休7上3休1](https://s.weibo.com/weibo?q=%23%E4%B8%8A5%E4%BC%911%E4%B8%8A5%E4%BC%913%E4%B8%8A3%E4%BC%917%E4%B8%8A3%E4%BC%911%23) `4.2M 🔥` `NEW`
1. [醉驾致夫妻身亡公职人员岗位职责曝光](https://s.weibo.com/weibo?q=%23%E9%86%89%E9%A9%BE%E8%87%B4%E5%A4%AB%E5%A6%BB%E8%BA%AB%E4%BA%A1%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E5%B2%97%E4%BD%8D%E8%81%8C%E8%B4%A3%E6%9B%9D%E5%85%89%23) `1.2M 🔥` `NEW`
1. [哈兰德 恩佐](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%20%E6%81%A9%E4%BD%90%23) `601.9K 🔥` `NEW`
1. [警方通报越野车高架上坠落致1死](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E8%B6%8A%E9%87%8E%E8%BD%A6%E9%AB%98%E6%9E%B6%E4%B8%8A%E5%9D%A0%E8%90%BD%E8%87%B41%E6%AD%BB%23) `475.6K 🔥` `NEW`
1. [官方辟谣广西一商场游泳池坍塌](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%B9%BF%E8%A5%BF%E4%B8%80%E5%95%86%E5%9C%BA%E6%B8%B8%E6%B3%B3%E6%B1%A0%E5%9D%8D%E5%A1%8C%23) `472.2K 🔥` `NEW`
1. [5种不舒服高度警惕脑出血](https://s.weibo.com/weibo?q=%235%E7%A7%8D%E4%B8%8D%E8%88%92%E6%9C%8D%E9%AB%98%E5%BA%A6%E8%AD%A6%E6%83%95%E8%84%91%E5%87%BA%E8%A1%80%23) `456.5K 🔥` `NEW`
1. [罗永浩吐槽野人先生后特意提示](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%90%90%E6%A7%BD%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E5%90%8E%E7%89%B9%E6%84%8F%E6%8F%90%E7%A4%BA%23) `323.2K 🔥` `NEW`
1. [韩国股市放大招](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E5%B8%82%E6%94%BE%E5%A4%A7%E6%8B%9B%23) `194.7K 🔥` `NEW`
1. [井柏然送孙千的衣服代言人是刘雯](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E9%80%81%E5%AD%99%E5%8D%83%E7%9A%84%E8%A1%A3%E6%9C%8D%E4%BB%A3%E8%A8%80%E4%BA%BA%E6%98%AF%E5%88%98%E9%9B%AF%23) `193.6K 🔥` `NEW`
1. [黄灿灿103斤被粉丝说太胖了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF103%E6%96%A4%E8%A2%AB%E7%B2%89%E4%B8%9D%E8%AF%B4%E5%A4%AA%E8%83%96%E4%BA%86%23) `192.5K 🔥` `NEW`
1. [恩佐 曼市德比数据](https://s.weibo.com/weibo?q=%23%E6%81%A9%E4%BD%90%20%E6%9B%BC%E5%B8%82%E5%BE%B7%E6%AF%94%E6%95%B0%E6%8D%AE%23) `189.0K 🔥` `NEW`
1. [原来每个月都有适合旅游的城市](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%AF%8F%E4%B8%AA%E6%9C%88%E9%83%BD%E6%9C%89%E9%80%82%E5%90%88%E6%97%85%E6%B8%B8%E7%9A%84%E5%9F%8E%E5%B8%82%23) `187.3K 🔥` `NEW`
1. [陈冠希45岁直播状态](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%86%A0%E5%B8%8C45%E5%B2%81%E7%9B%B4%E6%92%AD%E7%8A%B6%E6%80%81%23) `186.2K 🔥` `NEW`
1. [亚朵店长谐音叫县长助理叫政委](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%9C%B5%E5%BA%97%E9%95%BF%E8%B0%90%E9%9F%B3%E5%8F%AB%E5%8E%BF%E9%95%BF%E5%8A%A9%E7%90%86%E5%8F%AB%E6%94%BF%E5%A7%94%23) `185.2K 🔥` `NEW`
1. [郑恺苗苗在加拿大租了一个月房子](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E8%8B%97%E8%8B%97%E5%9C%A8%E5%8A%A0%E6%8B%BF%E5%A4%A7%E7%A7%9F%E4%BA%86%E4%B8%80%E4%B8%AA%E6%9C%88%E6%88%BF%E5%AD%90%23) `183.9K 🔥` `NEW`
1. [李梦这段演得真好](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%A2%A6%E8%BF%99%E6%AE%B5%E6%BC%94%E5%BE%97%E7%9C%9F%E5%A5%BD%23) `183.3K 🔥` `NEW`
1. [英国 分裂](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%20%E5%88%86%E8%A3%82%23) `182.8K 🔥` `NEW`
1. [王鹤棣请客白鹿开到荼蘼剧组](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%AF%B7%E5%AE%A2%E7%99%BD%E9%B9%BF%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%E5%89%A7%E7%BB%84%23) `180.1K 🔥` `NEW`
1. [华为Mate90系列曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate90%E7%B3%BB%E5%88%97%E6%9B%9D%E5%85%89%23) `179.6K 🔥` `NEW`
1. [隐翅虫灼伤网友抓狂](https://s.weibo.com/weibo?q=%23%E9%9A%90%E7%BF%85%E8%99%AB%E7%81%BC%E4%BC%A4%E7%BD%91%E5%8F%8B%E6%8A%93%E7%8B%82%23) `177.5K 🔥` `NEW`
1. [Shanks艾特Cube和Heng](https://s.weibo.com/weibo?q=%23Shanks%E8%89%BE%E7%89%B9Cube%E5%92%8CHeng%23) `174.0K 🔥` `NEW`
1. [Knight自责](https://s.weibo.com/weibo?q=%23Knight%E8%87%AA%E8%B4%A3%23) `173.5K 🔥` `NEW`
1. [Tarzan赛后拥抱Viper](https://s.weibo.com/weibo?q=%23Tarzan%E8%B5%9B%E5%90%8E%E6%8B%A5%E6%8A%B1Viper%23) `172.1K 🔥` `NEW`
1. [陈哲远工作人员疑似是李相沅站姐](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E7%96%91%E4%BC%BC%E6%98%AF%E6%9D%8E%E7%9B%B8%E6%B2%85%E7%AB%99%E5%A7%90%23) `168.7K 🔥` `NEW`
1. [医院11年收贿1.84亿为何没人吹哨](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A211%E5%B9%B4%E6%94%B6%E8%B4%BF1.84%E4%BA%BF%E4%B8%BA%E4%BD%95%E6%B2%A1%E4%BA%BA%E5%90%B9%E5%93%A8%23) `168.2K 🔥` `NEW`
1. [兰香如故男女主第七集终于说上话了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%94%B7%E5%A5%B3%E4%B8%BB%E7%AC%AC%E4%B8%83%E9%9B%86%E7%BB%88%E4%BA%8E%E8%AF%B4%E4%B8%8A%E8%AF%9D%E4%BA%86%23) `167.0K 🔥` `NEW`
1. [我国硬核成果上新了](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%A1%AC%E6%A0%B8%E6%88%90%E6%9E%9C%E4%B8%8A%E6%96%B0%E4%BA%86%23) `971.0K 🔥` `+63%`
1. [大学生生活费才3000](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%94%9F%E6%B4%BB%E8%B4%B9%E6%89%8D3000%23) `804.4K 🔥` `+41%`
1. [井柏然孙千体面](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E4%BD%93%E9%9D%A2%23) `321.3K 🔥` `+97%`
1. [英国](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%23) `197.2K 🔥` `+22%`
1. [情侣在演唱会求婚遭后排喊坐下](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%9C%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E6%B1%82%E5%A9%9A%E9%81%AD%E5%90%8E%E6%8E%92%E5%96%8A%E5%9D%90%E4%B8%8B%23) `195.8K 🔥` `+22%`
1. [彭小苒直播穿的衣服](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%E7%9B%B4%E6%92%AD%E7%A9%BF%E7%9A%84%E8%A1%A3%E6%9C%8D%23) `195.3K 🔥` `+23%`
1. [彭小苒工作室致歉声明](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `190.9K 🔥` `+75%`
1. [人类语言被AI一秒抛弃](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E8%AF%AD%E8%A8%80%E8%A2%ABAI%E4%B8%80%E7%A7%92%E6%8A%9B%E5%BC%83%23) `190.4K 🔥` `+54%`
1. [张本美和说一直没有赢过孙颖莎](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E8%AF%B4%E4%B8%80%E7%9B%B4%E6%B2%A1%E6%9C%89%E8%B5%A2%E8%BF%87%E5%AD%99%E9%A2%96%E8%8E%8E%23) `186.9K 🔥` `+139%`
1. [被举报116次的烧烤店被责令整改](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%B8%BE%E6%8A%A5116%E6%AC%A1%E7%9A%84%E7%83%A7%E7%83%A4%E5%BA%97%E8%A2%AB%E8%B4%A3%E4%BB%A4%E6%95%B4%E6%94%B9%23) `181.6K 🔥` `+37%`
1. [东京没下雨也没淋湿巴黎](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E4%BA%AC%E6%B2%A1%E4%B8%8B%E9%9B%A8%E4%B9%9F%E6%B2%A1%E6%B7%8B%E6%B9%BF%E5%B7%B4%E9%BB%8E%23) `181.1K 🔥` `+132%`
1. [张本美和冠军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E5%86%A0%E5%86%9B%23) `178.5K 🔥` `+129%`
1. [英超承认哈兰德进球有效是误判](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%B6%85%E6%89%BF%E8%AE%A4%E5%93%88%E5%85%B0%E5%BE%B7%E8%BF%9B%E7%90%83%E6%9C%89%E6%95%88%E6%98%AF%E8%AF%AF%E5%88%A4%23) `175.9K 🔥` `+125%`
1. [白桃星座一周运势](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%E4%B8%80%E5%91%A8%E8%BF%90%E5%8A%BF%23) `174.9K 🔥` `+35%`
1. [罗永浩怀念钟薛高](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%80%80%E5%BF%B5%E9%92%9F%E8%96%9B%E9%AB%98%23) `171.0K 🔥` `+572%`
1. [渔民落水11天后事都办了他回来了](https://s.weibo.com/weibo?q=%23%E6%B8%94%E6%B0%91%E8%90%BD%E6%B0%B411%E5%A4%A9%E5%90%8E%E4%BA%8B%E9%83%BD%E5%8A%9E%E4%BA%86%E4%BB%96%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `170.2K 🔥` `+178%`
1. [陈妍希儿子星星也是回避型人格](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%84%BF%E5%AD%90%E6%98%9F%E6%98%9F%E4%B9%9F%E6%98%AF%E5%9B%9E%E9%81%BF%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `166.3K 🔥` `+551%`
1. [三大AI巨头联手呼吁放缓开发步伐](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%A7AI%E5%B7%A8%E5%A4%B4%E8%81%94%E6%89%8B%E5%91%BC%E5%90%81%E6%94%BE%E7%BC%93%E5%BC%80%E5%8F%91%E6%AD%A5%E4%BC%90%23) `165.4K 🔥` `+200%`
1. [OPPO FindX10外观设计](https://s.weibo.com/weibo?q=%23OPPO%20FindX10%E5%A4%96%E8%A7%82%E8%AE%BE%E8%AE%A1%23) `164.5K 🔥` `+169%`
1. [谭松韵回复李嘉鑫](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%9B%9E%E5%A4%8D%E6%9D%8E%E5%98%89%E9%91%AB%23) `163.7K 🔥` `+479%`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `197.3K 🔥`
1. [我国从来没有第一学历这个概念](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%BB%8E%E6%9D%A5%E6%B2%A1%E6%9C%89%E7%AC%AC%E4%B8%80%E5%AD%A6%E5%8E%86%E8%BF%99%E4%B8%AA%E6%A6%82%E5%BF%B5%23) `192.0K 🔥`
1. [美网男单决赛 难看](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E7%94%B7%E5%8D%95%E5%86%B3%E8%B5%9B%20%E9%9A%BE%E7%9C%8B%23) `176.2K 🔥`
1. [iPhone18Pro勃艮第酒红色卖爆了](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%8B%83%E8%89%AE%E7%AC%AC%E9%85%92%E7%BA%A2%E8%89%B2%E5%8D%96%E7%88%86%E4%BA%86%23) `188.8K 🔥` `-30%`
1. [中国足球小将西班牙捧杯](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%B3%E7%90%83%E5%B0%8F%E5%B0%86%E8%A5%BF%E7%8F%AD%E7%89%99%E6%8D%A7%E6%9D%AF%23) `171.6K 🔥` `-34%`

Updated at 2026-09-14 09:34:25

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
