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

1. [四川地震 (Sichuan earthquake)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `2.7M 🔥` `NEW`
1. [成都震感](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E9%9C%87%E6%84%9F%23) `1.0M 🔥` `NEW`
1. [丁真劝向佐退圈](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%9C%9F%E5%8A%9D%E5%90%91%E4%BD%90%E9%80%80%E5%9C%88%23) `505.5K 🔥` `NEW`
1. [无畏契约](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%23) `463.9K 🔥` `NEW`
1. [邓超忘给孙俪准备16年纪念日的礼物](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%BF%98%E7%BB%99%E5%AD%99%E4%BF%AA%E5%87%86%E5%A4%8716%E5%B9%B4%E7%BA%AA%E5%BF%B5%E6%97%A5%E7%9A%84%E7%A4%BC%E7%89%A9%23) `194.2K 🔥` `NEW`
1. [爱泼斯坦在巴黎红房间拍下女孩跳舞](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%9C%A8%E5%B7%B4%E9%BB%8E%E7%BA%A2%E6%88%BF%E9%97%B4%E6%8B%8D%E4%B8%8B%E5%A5%B3%E5%AD%A9%E8%B7%B3%E8%88%9E%23) `192.1K 🔥` `NEW`
1. [四川绵阳地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E7%BB%B5%E9%98%B3%E5%9C%B0%E9%9C%87%23) `177.2K 🔥` `NEW`
1. [苏翊鸣与金墩墩的热爱接力](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E4%B8%8E%E9%87%91%E5%A2%A9%E5%A2%A9%E7%9A%84%E7%83%AD%E7%88%B1%E6%8E%A5%E5%8A%9B%23) `166.3K 🔥` `NEW`
1. [张本智和vs户上隼辅](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8Cvs%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `161.0K 🔥` `NEW`
1. [00后拜年方式](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E6%8B%9C%E5%B9%B4%E6%96%B9%E5%BC%8F%23) `119.9K 🔥` `NEW`
1. [韩国运动员盒饭 (Korean athlete lunch box)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%BF%90%E5%8A%A8%E5%91%98%E7%9B%92%E9%A5%AD%23) `110.1K 🔥` `NEW`
1. [爸爸弯了一辈子的腰终于断了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BC%AF%E4%BA%86%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E8%85%B0%E7%BB%88%E4%BA%8E%E6%96%AD%E4%BA%86%23) `107.6K 🔥` `NEW`
1. [张凌赫无畏契约上班](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E4%B8%8A%E7%8F%AD%23) `96.6K 🔥` `NEW`
1. [美团和窦文涛把天聊到我心里了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%92%8C%E7%AA%A6%E6%96%87%E6%B6%9B%E6%8A%8A%E5%A4%A9%E8%81%8A%E5%88%B0%E6%88%91%E5%BF%83%E9%87%8C%E4%BA%86%23) `93.5K 🔥` `NEW`
1. [王楚然丞磊扣子扣在一起](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%9E%E7%A3%8A%E6%89%A3%E5%AD%90%E6%89%A3%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `93.5K 🔥` `NEW`
1. [成何体统男二女二私会男主女主看戏](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E7%94%B7%E4%BA%8C%E5%A5%B3%E4%BA%8C%E7%A7%81%E4%BC%9A%E7%94%B7%E4%B8%BB%E5%A5%B3%E4%B8%BB%E7%9C%8B%E6%88%8F%23) `93.5K 🔥` `NEW`
1. [王曼昱4比2战胜张本美和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B14%E6%AF%942%E6%88%98%E8%83%9C%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `93.5K 🔥` `NEW`
1. [爆雷的第四大汽车巨头有14个汽车品牌](https://s.weibo.com/weibo?q=%23%E7%88%86%E9%9B%B7%E7%9A%84%E7%AC%AC%E5%9B%9B%E5%A4%A7%E6%B1%BD%E8%BD%A6%E5%B7%A8%E5%A4%B4%E6%9C%8914%E4%B8%AA%E6%B1%BD%E8%BD%A6%E5%93%81%E7%89%8C%23) `88.0K 🔥` `NEW`
1. [张凌赫耳夹皮衣造型](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%80%B3%E5%A4%B9%E7%9A%AE%E8%A1%A3%E9%80%A0%E5%9E%8B%23) `87.2K 🔥` `NEW`
1. [朵莉亚神骥鸣幻洲皮肤爆料](https://s.weibo.com/weibo?q=%23%E6%9C%B5%E8%8E%89%E4%BA%9A%E7%A5%9E%E9%AA%A5%E9%B8%A3%E5%B9%BB%E6%B4%B2%E7%9A%AE%E8%82%A4%E7%88%86%E6%96%99%23) `86.0K 🔥` `NEW`
1. [GALA看你干的好事 (GALA, look at the good things you have done)](https://s.weibo.com/weibo?q=%23GALA%E7%9C%8B%E4%BD%A0%E5%B9%B2%E7%9A%84%E5%A5%BD%E4%BA%8B%23) `79.3K 🔥` `NEW`
1. [窗里窗外皆是归途的美好](https://s.weibo.com/weibo?q=%23%E7%AA%97%E9%87%8C%E7%AA%97%E5%A4%96%E7%9A%86%E6%98%AF%E5%BD%92%E9%80%94%E7%9A%84%E7%BE%8E%E5%A5%BD%23) `840.9K 🔥` `+29%`
1. [闪购新春礼盒用美团 (Flash sale New Year gift box with Meituan)](https://s.weibo.com/weibo?q=%23%E9%97%AA%E8%B4%AD%E6%96%B0%E6%98%A5%E7%A4%BC%E7%9B%92%E7%94%A8%E7%BE%8E%E5%9B%A2%23) `794.0K 🔥` `+276%`
1. [女子吐槽飞机餐仅一根青菜配米饭](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%90%E6%A7%BD%E9%A3%9E%E6%9C%BA%E9%A4%90%E4%BB%85%E4%B8%80%E6%A0%B9%E9%9D%92%E8%8F%9C%E9%85%8D%E7%B1%B3%E9%A5%AD%23) `280.2K 🔥` `+161%`
1. [王楚钦男单争冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%94%B7%E5%8D%95%E4%BA%89%E5%86%A0%23) `217.5K 🔥` `+43%`
1. [千问 (Qianwen)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%23) `192.7K 🔥` `+35%`
1. [白鹿发开播红包](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%91%E5%BC%80%E6%92%AD%E7%BA%A2%E5%8C%85%23) `190.5K 🔥` `+34%`
1. [梁源发文怼吴克群](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%BA%90%E5%8F%91%E6%96%87%E6%80%BC%E5%90%B4%E5%85%8B%E7%BE%A4%23) `189.2K 🔥` `+33%`
1. [老一辈对子女睡懒觉的执念](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E5%AF%B9%E5%AD%90%E5%A5%B3%E7%9D%A1%E6%87%92%E8%A7%89%E7%9A%84%E6%89%A7%E5%BF%B5%23) `187.6K 🔥` `+32%`
1. [爱吃柚子的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E6%9F%9A%E5%AD%90%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `182.2K 🔥` `+28%`
1. [坐直不是脊柱喜欢的完美姿势 (Sitting up straight is not the perfect position for your spine)](https://s.weibo.com/weibo?q=%23%E5%9D%90%E7%9B%B4%E4%B8%8D%E6%98%AF%E8%84%8A%E6%9F%B1%E5%96%9C%E6%AC%A2%E7%9A%84%E5%AE%8C%E7%BE%8E%E5%A7%BF%E5%8A%BF%23) `113.6K 🔥` `+25%`
1. [女子做美甲后摔倒致指甲断裂](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%9A%E7%BE%8E%E7%94%B2%E5%90%8E%E6%91%94%E5%80%92%E8%87%B4%E6%8C%87%E7%94%B2%E6%96%AD%E8%A3%82%23) `99.1K 🔥` `+26%`
1. [千问AI购物战绩](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AEAI%E8%B4%AD%E7%89%A9%E6%88%98%E7%BB%A9%23) `274.9K 🔥`
1. [华晨宇脖子上的唇印 (Lip prints on Hua Chenyu’s neck)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E8%84%96%E5%AD%90%E4%B8%8A%E7%9A%84%E5%94%87%E5%8D%B0%23) `166.2K 🔥`
1. [断联一年的闺蜜突然发消息](https://s.weibo.com/weibo?q=%23%E6%96%AD%E8%81%94%E4%B8%80%E5%B9%B4%E7%9A%84%E9%97%BA%E8%9C%9C%E7%AA%81%E7%84%B6%E5%8F%91%E6%B6%88%E6%81%AF%23) `165.4K 🔥`
1. [Bin腹肌对标Gala](https://s.weibo.com/weibo?q=%23Bin%E8%85%B9%E8%82%8C%E5%AF%B9%E6%A0%87Gala%23) `155.5K 🔥`
1. [吴克群帮农民卖掉3万斤菜 (Wu Kequn helps farmers sell 30,000 kilograms of vegetables)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%85%8B%E7%BE%A4%E5%B8%AE%E5%86%9C%E6%B0%91%E5%8D%96%E6%8E%893%E4%B8%87%E6%96%A4%E8%8F%9C%23) `148.3K 🔥`
1. [演唱会背痛包 偶像比粉丝先认出对方](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E8%83%8C%E7%97%9B%E5%8C%85%20%E5%81%B6%E5%83%8F%E6%AF%94%E7%B2%89%E4%B8%9D%E5%85%88%E8%AE%A4%E5%87%BA%E5%AF%B9%E6%96%B9%23) `118.7K 🔥`
1. [华东政法大学学生起诉微信收提现费](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%9C%E6%94%BF%E6%B3%95%E5%A4%A7%E5%AD%A6%E5%AD%A6%E7%94%9F%E8%B5%B7%E8%AF%89%E5%BE%AE%E4%BF%A1%E6%94%B6%E6%8F%90%E7%8E%B0%E8%B4%B9%23) `108.3K 🔥`
1. [男生感染HPV后果很严重 (The consequences of HPV infection for boys are serious)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%84%9F%E6%9F%93HPV%E5%90%8E%E6%9E%9C%E5%BE%88%E4%B8%A5%E9%87%8D%23) `97.0K 🔥`
1. [小马糕 (pony cake)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E7%B3%95%23) `87.8K 🔥`
1. [LPL选手集体上线看Bin腹肌照](https://s.weibo.com/weibo?q=%23LPL%E9%80%89%E6%89%8B%E9%9B%86%E4%BD%93%E4%B8%8A%E7%BA%BF%E7%9C%8BBin%E8%85%B9%E8%82%8C%E7%85%A7%23) `82.9K 🔥`
1. [这才是真正的道歉](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%81%93%E6%AD%89%23) `257.3K 🔥` `-60%`
1. [王曼昱VS张本美和 (Wang Manyu VS Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1VS%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `203.5K 🔥` `-81%`
1. [李昀锐的桃花马在孟子义那](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%9A%84%E6%A1%83%E8%8A%B1%E9%A9%AC%E5%9C%A8%E5%AD%9F%E5%AD%90%E4%B9%89%E9%82%A3%23) `194.9K 🔥` `-70%`
1. [全球第四大汽车巨头爆雷](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E7%AC%AC%E5%9B%9B%E5%A4%A7%E6%B1%BD%E8%BD%A6%E5%B7%A8%E5%A4%B4%E7%88%86%E9%9B%B7%23) `187.3K 🔥` `-75%`
1. [谢依霖回应提问赵丽颖](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E4%BE%9D%E9%9C%96%E5%9B%9E%E5%BA%94%E6%8F%90%E9%97%AE%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `123.6K 🔥` `-38%`
1. [苏翊鸣疑似被日本裁判压分 (Su Yiming is suspected of being scored by the Japanese referee)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%96%91%E4%BC%BC%E8%A2%AB%E6%97%A5%E6%9C%AC%E8%A3%81%E5%88%A4%E5%8E%8B%E5%88%86%23) `106.1K 🔥` `-25%`
1. [巨火但很反感的梗](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E7%81%AB%E4%BD%86%E5%BE%88%E5%8F%8D%E6%84%9F%E7%9A%84%E6%A2%97%23) `97.0K 🔥` `-32%`
1. [张维伊被内推再见爱人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%B4%E4%BC%8A%E8%A2%AB%E5%86%85%E6%8E%A8%E5%86%8D%E8%A7%81%E7%88%B1%E4%BA%BA%23) `91.8K 🔥` `-35%`
1. [王一博点赞了苏翊鸣](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%82%B9%E8%B5%9E%E4%BA%86%E8%8B%8F%E7%BF%8A%E9%B8%A3%23) `85.5K 🔥` `-21%`
1. [偶遇杨洋吃铁锅炖](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E6%9D%A8%E6%B4%8B%E5%90%83%E9%93%81%E9%94%85%E7%82%96%23) `82.0K 🔥` `-27%`

Updated at 2026-02-08 15:08:07

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
