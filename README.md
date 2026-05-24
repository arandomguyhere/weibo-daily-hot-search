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

1. [苗苗工作室回应 (Miaomiao Studio’s response)](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%9B%9E%E5%BA%94%23) `1.1M 🔥` `NEW`
1. [煤矿19点半爆炸工人22点才被通知](https://s.weibo.com/weibo?q=%23%E7%85%A4%E7%9F%BF19%E7%82%B9%E5%8D%8A%E7%88%86%E7%82%B8%E5%B7%A5%E4%BA%BA22%E7%82%B9%E6%89%8D%E8%A2%AB%E9%80%9A%E7%9F%A5%23) `391.8K 🔥` `NEW`
1. [宝莲妆造](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E8%8E%B2%E5%A6%86%E9%80%A0%23) `348.8K 🔥` `NEW`
1. [iOS27全新功能](https://s.weibo.com/weibo?q=%23iOS27%E5%85%A8%E6%96%B0%E5%8A%9F%E8%83%BD%23) `345.9K 🔥` `NEW`
1. [苗苗也不舒服了](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `345.4K 🔥` `NEW`
1. [王鹤棣曾让沈月吸二手烟](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%9B%BE%E8%AE%A9%E6%B2%88%E6%9C%88%E5%90%B8%E4%BA%8C%E6%89%8B%E7%83%9F%23) `343.7K 🔥` `NEW`
1. [德国性侵案主犯直播作案过程](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E6%80%A7%E4%BE%B5%E6%A1%88%E4%B8%BB%E7%8A%AF%E7%9B%B4%E6%92%AD%E4%BD%9C%E6%A1%88%E8%BF%87%E7%A8%8B%23) `336.2K 🔥` `NEW`
1. [王楚然高反是睡着了还是晕了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%AB%98%E5%8F%8D%E6%98%AF%E7%9D%A1%E7%9D%80%E4%BA%86%E8%BF%98%E6%98%AF%E6%99%95%E4%BA%86%23) `333.9K 🔥` `NEW`
1. [一诺打招呼](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E6%89%93%E6%8B%9B%E5%91%BC%23) `330.8K 🔥` `NEW`
1. [刘诗诗越南活动](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E8%B6%8A%E5%8D%97%E6%B4%BB%E5%8A%A8%23) `328.7K 🔥` `NEW`
1. [烘焙展上4大妈将展品一扫而空 (Four aunts swept away all the exhibits at the baking show)](https://s.weibo.com/weibo?q=%23%E7%83%98%E7%84%99%E5%B1%95%E4%B8%8A4%E5%A4%A7%E5%A6%88%E5%B0%86%E5%B1%95%E5%93%81%E4%B8%80%E6%89%AB%E8%80%8C%E7%A9%BA%23) `326.2K 🔥` `NEW`
1. [拒同房女子称不是因嫌弃丈夫而吐](https://s.weibo.com/weibo?q=%23%E6%8B%92%E5%90%8C%E6%88%BF%E5%A5%B3%E5%AD%90%E7%A7%B0%E4%B8%8D%E6%98%AF%E5%9B%A0%E5%AB%8C%E5%BC%83%E4%B8%88%E5%A4%AB%E8%80%8C%E5%90%90%23) `316.1K 🔥` `NEW`
1. [印度高温肆虐蝙蝠从树上坠落奄奄一息](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%AB%98%E6%B8%A9%E8%82%86%E8%99%90%E8%9D%99%E8%9D%A0%E4%BB%8E%E6%A0%91%E4%B8%8A%E5%9D%A0%E8%90%BD%E5%A5%84%E5%A5%84%E4%B8%80%E6%81%AF%23) `314.1K 🔥` `NEW`
1. [小猫等了28年终于被收养了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%AD%89%E4%BA%8628%E5%B9%B4%E7%BB%88%E4%BA%8E%E8%A2%AB%E6%94%B6%E5%85%BB%E4%BA%86%23) `313.0K 🔥` `NEW`
1. [重庆永川特大暴雨](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E6%B0%B8%E5%B7%9D%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `307.5K 🔥` `NEW`
1. [任权前女友回怼薛小婉](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%9D%83%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%9B%9E%E6%80%BC%E8%96%9B%E5%B0%8F%E5%A9%89%23) `306.6K 🔥` `NEW`
1. [婚后2年未同房女方否认身体有障碍](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%90%8E2%E5%B9%B4%E6%9C%AA%E5%90%8C%E6%88%BF%E5%A5%B3%E6%96%B9%E5%90%A6%E8%AE%A4%E8%BA%AB%E4%BD%93%E6%9C%89%E9%9A%9C%E7%A2%8D%23) `305.7K 🔥` `NEW`
1. [张予曦的讨厌真的很明显](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E7%9A%84%E8%AE%A8%E5%8E%8C%E7%9C%9F%E7%9A%84%E5%BE%88%E6%98%8E%E6%98%BE%23) `302.7K 🔥` `NEW`
1. [鹿晗 五哈forever](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E4%BA%94%E5%93%88forever%23) `301.5K 🔥` `NEW`
1. [CORTIS一位](https://s.weibo.com/weibo?q=%23CORTIS%E4%B8%80%E4%BD%8D%23) `298.7K 🔥` `NEW`
1. [法网 (French Open)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E7%BD%91%23) `296.7K 🔥` `NEW`
1. [重庆永川暴雨3死17失联](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E6%B0%B8%E5%B7%9D%E6%9A%B4%E9%9B%A83%E6%AD%BB17%E5%A4%B1%E8%81%94%23) `290.3K 🔥` `NEW`
1. [浪姐三公彩排直击](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E5%BD%A9%E6%8E%92%E7%9B%B4%E5%87%BB%23) `288.2K 🔥` `NEW`
1. [燃油车被时代抛弃了吗](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E8%A2%AB%E6%97%B6%E4%BB%A3%E6%8A%9B%E5%BC%83%E4%BA%86%E5%90%97%23) `285.6K 🔥` `NEW`
1. [周鸿祎谈马斯克大尺度预言](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%B8%BF%E7%A5%8E%E8%B0%88%E9%A9%AC%E6%96%AF%E5%85%8B%E5%A4%A7%E5%B0%BA%E5%BA%A6%E9%A2%84%E8%A8%80%23) `282.4K 🔥` `NEW`
1. [田嘉瑞去参加婚礼了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E5%98%89%E7%91%9E%E5%8E%BB%E5%8F%82%E5%8A%A0%E5%A9%9A%E7%A4%BC%E4%BA%86%23) `279.4K 🔥` `NEW`
1. [武汉停课停业](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%81%9C%E8%AF%BE%E5%81%9C%E4%B8%9A%23) `1.5M 🔥` `+86%`
1. [国产600公斤推力级涡扇发动机首飞成功](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7600%E5%85%AC%E6%96%A4%E6%8E%A8%E5%8A%9B%E7%BA%A7%E6%B6%A1%E6%89%87%E5%8F%91%E5%8A%A8%E6%9C%BA%E9%A6%96%E9%A3%9E%E6%88%90%E5%8A%9F%23) `1.1M 🔥` `+29%`
1. [两个淡人生了个浓人宝宝](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E6%B7%A1%E4%BA%BA%E7%94%9F%E4%BA%86%E4%B8%AA%E6%B5%93%E4%BA%BA%E5%AE%9D%E5%AE%9D%23) `1.1M 🔥` `+30%`
1. [煤矿爆炸时247人下井仅记录124人 (When the coal mine exploded, 247 people went down and only 124 were recorded.)](https://s.weibo.com/weibo?q=%23%E7%85%A4%E7%9F%BF%E7%88%86%E7%82%B8%E6%97%B6247%E4%BA%BA%E4%B8%8B%E4%BA%95%E4%BB%85%E8%AE%B0%E5%BD%95124%E4%BA%BA%23) `1.1M 🔥`
1. [王鹤棣 沈月](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E6%B2%88%E6%9C%88%23) `944.2K 🔥`
1. [第一幕都不觉得她化妆了 (In the first scene, I didn’t even think she was wearing makeup.)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E5%B9%95%E9%83%BD%E4%B8%8D%E8%A7%89%E5%BE%97%E5%A5%B9%E5%8C%96%E5%A6%86%E4%BA%86%23) `347.4K 🔥`
1. [不舒服文学下沉出圈](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%88%92%E6%9C%8D%E6%96%87%E5%AD%A6%E4%B8%8B%E6%B2%89%E5%87%BA%E5%9C%88%23) `338.0K 🔥`
1. [BTS成员闵玧其插队被骂 (BTS member Min Yoongi was scolded for jumping in line)](https://s.weibo.com/weibo?q=%23BTS%E6%88%90%E5%91%98%E9%97%B5%E7%8E%A7%E5%85%B6%E6%8F%92%E9%98%9F%E8%A2%AB%E9%AA%82%23) `333.5K 🔥`
1. [五月天阿信道歉](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%9C%88%E5%A4%A9%E9%98%BF%E4%BF%A1%E9%81%93%E6%AD%89%23) `329.1K 🔥`
1. [最后他的脸型居然被完全复制了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%90%8E%E4%BB%96%E7%9A%84%E8%84%B8%E5%9E%8B%E5%B1%85%E7%84%B6%E8%A2%AB%E5%AE%8C%E5%85%A8%E5%A4%8D%E5%88%B6%E4%BA%86%23) `324.8K 🔥`
1. [曝杨紫在接触女君和熹](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E7%B4%AB%E5%9C%A8%E6%8E%A5%E8%A7%A6%E5%A5%B3%E5%90%9B%E5%92%8C%E7%86%B9%23) `322.6K 🔥`
1. [孙怡 女儿出名妈妈就有了名字 (Sun Yi’s daughter is famous and her mother has a name)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%A5%B3%E5%84%BF%E5%87%BA%E5%90%8D%E5%A6%88%E5%A6%88%E5%B0%B1%E6%9C%89%E4%BA%86%E5%90%8D%E5%AD%97%23) `320.1K 🔥`
1. [鹿晗控诉五哈P图严重](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%8E%A7%E8%AF%89%E4%BA%94%E5%93%88P%E5%9B%BE%E4%B8%A5%E9%87%8D%23) `319.1K 🔥`
1. [郭碧婷爸爸晒与向笙向芷合照](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%88%B8%E7%88%B8%E6%99%92%E4%B8%8E%E5%90%91%E7%AC%99%E5%90%91%E8%8A%B7%E5%90%88%E7%85%A7%23) `312.2K 🔥`
1. [杜江霍思燕为妈妈庆祝70大寿](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E6%B1%9F%E9%9C%8D%E6%80%9D%E7%87%95%E4%B8%BA%E5%A6%88%E5%A6%88%E5%BA%86%E7%A5%9D70%E5%A4%A7%E5%AF%BF%23) `310.0K 🔥`
1. [野泳男子嬉戏中将4名女孩逼向深水区](https://s.weibo.com/weibo?q=%23%E9%87%8E%E6%B3%B3%E7%94%B7%E5%AD%90%E5%AC%89%E6%88%8F%E4%B8%AD%E5%B0%864%E5%90%8D%E5%A5%B3%E5%AD%A9%E9%80%BC%E5%90%91%E6%B7%B1%E6%B0%B4%E5%8C%BA%23) `299.4K 🔥`
1. [2女儿溺亡父亲索赔270万判赔9.2万](https://s.weibo.com/weibo?q=%232%E5%A5%B3%E5%84%BF%E6%BA%BA%E4%BA%A1%E7%88%B6%E4%BA%B2%E7%B4%A2%E8%B5%94270%E4%B8%87%E5%88%A4%E8%B5%949.2%E4%B8%87%23) `295.2K 🔥`
1. [女子因漏放吸管辱骂砸打店员 (Woman insults and hits store clerk for missing straw)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E6%BC%8F%E6%94%BE%E5%90%B8%E7%AE%A1%E8%BE%B1%E9%AA%82%E7%A0%B8%E6%89%93%E5%BA%97%E5%91%98%23) `293.2K 🔥`
1. [霸王茶姬geelato新品爆火](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%ACgeelato%E6%96%B0%E5%93%81%E7%88%86%E7%81%AB%23) `291.3K 🔥`
1. [EXO回忆参加快乐大本营](https://s.weibo.com/weibo?q=%23EXO%E5%9B%9E%E5%BF%86%E5%8F%82%E5%8A%A0%E5%BF%AB%E4%B9%90%E5%A4%A7%E6%9C%AC%E8%90%A5%23) `287.4K 🔥`
1. [武契奇抵京](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E6%8A%B5%E4%BA%AC%23) `283.7K 🔥`
1. [男子踩中蛇窝被咬10多口](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B8%A9%E4%B8%AD%E8%9B%87%E7%AA%9D%E8%A2%AB%E5%92%AC10%E5%A4%9A%E5%8F%A3%23) `341.2K 🔥` `-54%`
1. [李晨郑恺跑男停宣了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E8%B7%91%E7%94%B7%E5%81%9C%E5%AE%A3%E4%BA%86%23) `339.6K 🔥` `-59%`
1. [盒马60元一斤网红葡萄卖断货](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC60%E5%85%83%E4%B8%80%E6%96%A4%E7%BD%91%E7%BA%A2%E8%91%A1%E8%90%84%E5%8D%96%E6%96%AD%E8%B4%A7%23) `321.5K 🔥` `-42%`

Updated at 2026-05-24 18:09:25

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
