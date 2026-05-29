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

1. [点击看618夏日歌会节目单 (Click to see the program list of 618 Summer Concert)](https://s.weibo.com/weibo?q=%23%E7%82%B9%E5%87%BB%E7%9C%8B618%E5%A4%8F%E6%97%A5%E6%AD%8C%E4%BC%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `379.4K 🔥` `NEW`
1. [16.99万元起领克10+和10正式上市](https://s.weibo.com/weibo?q=%2316.99%E4%B8%87%E5%85%83%E8%B5%B7%E9%A2%86%E5%85%8B10%2B%E5%92%8C10%E6%AD%A3%E5%BC%8F%E4%B8%8A%E5%B8%82%23) `229.2K 🔥` `NEW`
1. [神21航天员平安抵京](https://s.weibo.com/weibo?q=%23%E7%A5%9E21%E8%88%AA%E5%A4%A9%E5%91%98%E5%B9%B3%E5%AE%89%E6%8A%B5%E4%BA%AC%23) `192.1K 🔥` `NEW`
1. [林沐然中戏转入湖南艺术职业学院](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%B2%90%E7%84%B6%E4%B8%AD%E6%88%8F%E8%BD%AC%E5%85%A5%E6%B9%96%E5%8D%97%E8%89%BA%E6%9C%AF%E8%81%8C%E4%B8%9A%E5%AD%A6%E9%99%A2%23) `191.2K 🔥` `NEW`
1. [刘亦菲彭冠英同款](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%BD%AD%E5%86%A0%E8%8B%B1%E5%90%8C%E6%AC%BE%23) `190.2K 🔥` `NEW`
1. [31岁离异带4娃妈妈因自信走红](https://s.weibo.com/weibo?q=%2331%E5%B2%81%E7%A6%BB%E5%BC%82%E5%B8%A64%E5%A8%83%E5%A6%88%E5%A6%88%E5%9B%A0%E8%87%AA%E4%BF%A1%E8%B5%B0%E7%BA%A2%23) `189.4K 🔥` `NEW`
1. [虞书欣仍未取关潘宥诚](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BB%8D%E6%9C%AA%E5%8F%96%E5%85%B3%E6%BD%98%E5%AE%A5%E8%AF%9A%23) `188.7K 🔥` `NEW`
1. [德约科维奇无缘法网16强](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87%E6%97%A0%E7%BC%98%E6%B3%95%E7%BD%9116%E5%BC%BA%23) `187.3K 🔥` `NEW`
1. [古天乐回应向太曝其曾坐牢](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E5%9B%9E%E5%BA%94%E5%90%91%E5%A4%AA%E6%9B%9D%E5%85%B6%E6%9B%BE%E5%9D%90%E7%89%A2%23) `186.0K 🔥` `NEW`
1. [许我耀眼 现实版](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%88%91%E8%80%80%E7%9C%BC%20%E7%8E%B0%E5%AE%9E%E7%89%88%23) `185.2K 🔥` `NEW`
1. [秦昊说就过呗还能离咋地 (Qin Hao said he could just pass by, how could he leave?)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E8%AF%B4%E5%B0%B1%E8%BF%87%E5%91%97%E8%BF%98%E8%83%BD%E7%A6%BB%E5%92%8B%E5%9C%B0%23) `182.5K 🔥` `NEW`
1. [心脉受损的人一眼就可以看出来](https://s.weibo.com/weibo?q=%23%E5%BF%83%E8%84%89%E5%8F%97%E6%8D%9F%E7%9A%84%E4%BA%BA%E4%B8%80%E7%9C%BC%E5%B0%B1%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%87%BA%E6%9D%A5%23) `181.9K 🔥` `NEW`
1. [石蕊曝和肖旭谈了13年恋爱](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E8%95%8A%E6%9B%9D%E5%92%8C%E8%82%96%E6%97%AD%E8%B0%88%E4%BA%8613%E5%B9%B4%E6%81%8B%E7%88%B1%23) `180.8K 🔥` `NEW`
1. [李晨扛着白鹿踩指压板](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E6%89%9B%E7%9D%80%E7%99%BD%E9%B9%BF%E8%B8%A9%E6%8C%87%E5%8E%8B%E6%9D%BF%23) `176.5K 🔥` `NEW`
1. [上海同济专家提醒4个症状尽早做肠镜](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%90%8C%E6%B5%8E%E4%B8%93%E5%AE%B6%E6%8F%90%E9%86%924%E4%B8%AA%E7%97%87%E7%8A%B6%E5%B0%BD%E6%97%A9%E5%81%9A%E8%82%A0%E9%95%9C%23) `174.8K 🔥` `NEW`
1. [刘诗诗赵今麦郭晓婷合照](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E8%B5%B5%E4%BB%8A%E9%BA%A6%E9%83%AD%E6%99%93%E5%A9%B7%E5%90%88%E7%85%A7%23) `171.9K 🔥` `NEW`
1. [铁路新规6月1日起实施](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E6%96%B0%E8%A7%846%E6%9C%881%E6%97%A5%E8%B5%B7%E5%AE%9E%E6%96%BD%23) `167.2K 🔥` `NEW`
1. [刘诗诗掀头纱](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E6%8E%80%E5%A4%B4%E7%BA%B1%23) `166.1K 🔥` `NEW`
1. [欧阳娜娜拿风筝光脚走红毯](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E6%8B%BF%E9%A3%8E%E7%AD%9D%E5%85%89%E8%84%9A%E8%B5%B0%E7%BA%A2%E6%AF%AF%23) `163.2K 🔥` `NEW`
1. [淡淡穿不上的礼服黄灿灿穿上了](https://s.weibo.com/weibo?q=%23%E6%B7%A1%E6%B7%A1%E7%A9%BF%E4%B8%8D%E4%B8%8A%E7%9A%84%E7%A4%BC%E6%9C%8D%E9%BB%84%E7%81%BF%E7%81%BF%E7%A9%BF%E4%B8%8A%E4%BA%86%23) `159.5K 🔥` `NEW`
1. [张凌赫问王玉雯戴珍珠睡觉不硌吗 (Zhang Linghe asked Wang Yuwen if she felt comfortable wearing pearls while sleeping.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%97%AE%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%88%B4%E7%8F%8D%E7%8F%A0%E7%9D%A1%E8%A7%89%E4%B8%8D%E7%A1%8C%E5%90%97%23) `157.4K 🔥` `NEW`
1. [59岁TVB男星回应继承15亿港元遗产](https://s.weibo.com/weibo?q=%2359%E5%B2%81TVB%E7%94%B7%E6%98%9F%E5%9B%9E%E5%BA%94%E7%BB%A7%E6%89%BF15%E4%BA%BF%E6%B8%AF%E5%85%83%E9%81%97%E4%BA%A7%23) `156.2K 🔥` `NEW`
1. [纸嫁衣9罗浮梦](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%AB%81%E8%A1%A39%E7%BD%97%E6%B5%AE%E6%A2%A6%23) `154.9K 🔥` `NEW`
1. [歌手第三期帮唱嘉宾信息](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%B8%89%E6%9C%9F%E5%B8%AE%E5%94%B1%E5%98%89%E5%AE%BE%E4%BF%A1%E6%81%AF%23) `869.8K 🔥` `+198%`
1. [父母姐姐身亡12岁孩子被叔侵占140万](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%A7%90%E5%A7%90%E8%BA%AB%E4%BA%A112%E5%B2%81%E5%AD%A9%E5%AD%90%E8%A2%AB%E5%8F%94%E4%BE%B5%E5%8D%A0140%E4%B8%87%23) `648.6K 🔥` `+1460%`
1. [又一大国重器硬核刷屏](https://s.weibo.com/weibo?q=%23%E5%8F%88%E4%B8%80%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E7%A1%AC%E6%A0%B8%E5%88%B7%E5%B1%8F%23) `498.5K 🔥` `+211%`
1. [一家四口有限责任公司](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8%23) `323.4K 🔥` `+50%`
1. [歌手 倒数第一竞争激烈](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%E7%AB%9E%E4%BA%89%E6%BF%80%E7%83%88%23) `276.2K 🔥` `+195%`
1. [饿着入睡对胃肠更好吗 (Is sleeping hungry better for your gastrointestinal health?)](https://s.weibo.com/weibo?q=%23%E9%A5%BF%E7%9D%80%E5%85%A5%E7%9D%A1%E5%AF%B9%E8%83%83%E8%82%A0%E6%9B%B4%E5%A5%BD%E5%90%97%23) `235.2K 🔥` `+162%`
1. [耳帝 歌手第二期非常糟糕 (The second issue of Erdi Singer is very bad)](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%20%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%BA%8C%E6%9C%9F%E9%9D%9E%E5%B8%B8%E7%B3%9F%E7%B3%95%23) `219.8K 🔥` `+61%`
1. [VOGUE晚宴](https://s.weibo.com/weibo?q=%23VOGUE%E6%99%9A%E5%AE%B4%23) `201.4K 🔥` `+176%`
1. [人在做坏事的时候真的不觉得累](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%9C%A8%E5%81%9A%E5%9D%8F%E4%BA%8B%E7%9A%84%E6%97%B6%E5%80%99%E7%9C%9F%E7%9A%84%E4%B8%8D%E8%A7%89%E5%BE%97%E7%B4%AF%23) `193.1K 🔥` `+398%`
1. [广东不愧是祖宗严选发配地 (Guangdong is worthy of being the place carefully selected by our ancestors.)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%B8%8D%E6%84%A7%E6%98%AF%E7%A5%96%E5%AE%97%E4%B8%A5%E9%80%89%E5%8F%91%E9%85%8D%E5%9C%B0%23) `186.7K 🔥` `+170%`
1. [老人开空调一晚高烧3天肺白大半 (An old man had a high fever after turning on the air conditioner for three days, and most of his lungs turned white for three days.)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%BC%80%E7%A9%BA%E8%B0%83%E4%B8%80%E6%99%9A%E9%AB%98%E7%83%A73%E5%A4%A9%E8%82%BA%E7%99%BD%E5%A4%A7%E5%8D%8A%23) `183.5K 🔥` `+289%`
1. [白鹿李晨郑恺复宣跑男](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E5%A4%8D%E5%AE%A3%E8%B7%91%E7%94%B7%23) `179.9K 🔥` `+163%`
1. [重新定义一户一梯](https://s.weibo.com/weibo?q=%23%E9%87%8D%E6%96%B0%E5%AE%9A%E4%B9%89%E4%B8%80%E6%88%B7%E4%B8%80%E6%A2%AF%23) `178.4K 🔥` `+155%`
1. [范丞丞问第三名怎么你了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E9%97%AE%E7%AC%AC%E4%B8%89%E5%90%8D%E6%80%8E%E4%B9%88%E4%BD%A0%E4%BA%86%23) `176.3K 🔥` `+153%`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `173.9K 🔥` `+181%`
1. [江浙沪的雨都快把人逼成大文豪了 (The rain in Jiangsu, Zhejiang and Shanghai is almost turning people into great writers)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B5%99%E6%B2%AA%E7%9A%84%E9%9B%A8%E9%83%BD%E5%BF%AB%E6%8A%8A%E4%BA%BA%E9%80%BC%E6%88%90%E5%A4%A7%E6%96%87%E8%B1%AA%E4%BA%86%23) `172.8K 🔥` `+223%`
1. [单依纯含金量](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%90%AB%E9%87%91%E9%87%8F%23) `170.6K 🔥` `+149%`
1. [39岁博主被虫咬后感染离世](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E5%8D%9A%E4%B8%BB%E8%A2%AB%E8%99%AB%E5%92%AC%E5%90%8E%E6%84%9F%E6%9F%93%E7%A6%BB%E4%B8%96%23) `170.3K 🔥` `+235%`
1. [窦靖童完全王菲](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%AE%8C%E5%85%A8%E7%8E%8B%E8%8F%B2%23) `169.1K 🔥` `+261%`
1. [魏如萱淘汰](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E6%B7%98%E6%B1%B0%23) `168.4K 🔥` `+397%`
1. [VOGUE审美 (VOGUE aesthetic)](https://s.weibo.com/weibo?q=%23VOGUE%E5%AE%A1%E7%BE%8E%23) `164.8K 🔥` `+262%`
1. [爱上窦靖童是人之常情](https://s.weibo.com/weibo?q=%23%E7%88%B1%E4%B8%8A%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%98%AF%E4%BA%BA%E4%B9%8B%E5%B8%B8%E6%83%85%23) `163.8K 🔥` `+383%`
1. [LOL亚运预选赛名单公布](https://s.weibo.com/weibo?q=%23LOL%E4%BA%9A%E8%BF%90%E9%A2%84%E9%80%89%E8%B5%9B%E5%90%8D%E5%8D%95%E5%85%AC%E5%B8%83%23) `162.3K 🔥` `+380%`
1. [RW 归期 (RW return date)](https://s.weibo.com/weibo?q=%23RW%20%E5%BD%92%E6%9C%9F%23) `160.9K 🔥` `+376%`
1. [王濛刘雨昕大师课续费了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%88%98%E9%9B%A8%E6%98%95%E5%A4%A7%E5%B8%88%E8%AF%BE%E7%BB%AD%E8%B4%B9%E4%BA%86%23) `160.0K 🔥` `+340%`
1. [德约科维奇vs丰塞卡](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BA%A6%E7%A7%91%E7%BB%B4%E5%A5%87vs%E4%B8%B0%E5%A1%9E%E5%8D%A1%23) `157.8K 🔥` `+126%`
1. [英雄联盟CN缺席亚运会](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9FCN%E7%BC%BA%E5%B8%AD%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `154.0K 🔥` `+285%`
1. [发货YES到手YSL](https://s.weibo.com/weibo?q=%23%E5%8F%91%E8%B4%A7YES%E5%88%B0%E6%89%8BYSL%23) `153.4K 🔥` `+336%`
1. [领克10](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B10%23) `178.3K 🔥`

Updated at 2026-05-30 07:39:09

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
