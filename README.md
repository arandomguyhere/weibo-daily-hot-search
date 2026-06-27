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

1. [浪姐总决赛妆造 (Sister Lang’s makeup for the finals)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%E5%A6%86%E9%80%A0%23) `1.2M 🔥` `NEW`
1. [中国先进制造链夯爆了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%88%E8%BF%9B%E5%88%B6%E9%80%A0%E9%93%BE%E5%A4%AF%E7%88%86%E4%BA%86%23) `668.3K 🔥` `NEW`
1. [许巍x捷途自由者7PLUS](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B7%8Dx%E6%8D%B7%E9%80%94%E8%87%AA%E7%94%B1%E8%80%857PLUS%23) `664.3K 🔥` `NEW`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `653.4K 🔥` `NEW`
1. [白玉兰评委谈藏海传](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%AF%84%E5%A7%94%E8%B0%88%E8%97%8F%E6%B5%B7%E4%BC%A0%23) `633.1K 🔥` `NEW`
1. [七旬大爷殴打8月大婴儿致死获刑12年](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%97%AC%E5%A4%A7%E7%88%B7%E6%AE%B4%E6%89%938%E6%9C%88%E5%A4%A7%E5%A9%B4%E5%84%BF%E8%87%B4%E6%AD%BB%E8%8E%B7%E5%88%9112%E5%B9%B4%23) `512.1K 🔥` `NEW`
1. [周杰伦演唱会花了1000多的位置](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8A%B1%E4%BA%861000%E5%A4%9A%E7%9A%84%E4%BD%8D%E7%BD%AE%23) `370.9K 🔥` `NEW`
1. [去家务化意识](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%AE%B6%E5%8A%A1%E5%8C%96%E6%84%8F%E8%AF%86%23) `307.6K 🔥` `NEW`
1. [班主任说要解散班级群](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E8%AF%B4%E8%A6%81%E8%A7%A3%E6%95%A3%E7%8F%AD%E7%BA%A7%E7%BE%A4%23) `307.3K 🔥` `NEW`
1. [杨紫粉底液](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%B2%89%E5%BA%95%E6%B6%B2%23) `306.9K 🔥` `NEW`
1. [迪丽热巴 水蜜桃成精了 (Dilireba’s peach has become sperm)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E6%B0%B4%E8%9C%9C%E6%A1%83%E6%88%90%E7%B2%BE%E4%BA%86%23) `305.6K 🔥` `NEW`
1. [穆祉丞演唱会](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `305.2K 🔥` `NEW`
1. [我也没有高压锅驾驶证](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B9%9F%E6%B2%A1%E6%9C%89%E9%AB%98%E5%8E%8B%E9%94%85%E9%A9%BE%E9%A9%B6%E8%AF%81%23) `302.8K 🔥` `NEW`
1. [DeepSeek发布DSpark](https://s.weibo.com/weibo?q=%23DeepSeek%E5%8F%91%E5%B8%83DSpark%23) `302.5K 🔥` `NEW`
1. [吴宣仪语音读本名吴祎琏](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E8%AF%AD%E9%9F%B3%E8%AF%BB%E6%9C%AC%E5%90%8D%E5%90%B4%E7%A5%8E%E7%90%8F%23) `301.4K 🔥` `NEW`
1. [世界冠军与亚洲冠军双双出局](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E5%86%A0%E5%86%9B%E4%B8%8E%E4%BA%9A%E6%B4%B2%E5%86%A0%E5%86%9B%E5%8F%8C%E5%8F%8C%E5%87%BA%E5%B1%80%23) `301.1K 🔥` `NEW`
1. [厦门一女子检出全球从未记录新基因](https://s.weibo.com/weibo?q=%23%E5%8E%A6%E9%97%A8%E4%B8%80%E5%A5%B3%E5%AD%90%E6%A3%80%E5%87%BA%E5%85%A8%E7%90%83%E4%BB%8E%E6%9C%AA%E8%AE%B0%E5%BD%95%E6%96%B0%E5%9F%BA%E5%9B%A0%23) `300.0K 🔥` `NEW`
1. [李冰冰近十年很少出现的原因](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%86%B0%E5%86%B0%E8%BF%91%E5%8D%81%E5%B9%B4%E5%BE%88%E5%B0%91%E5%87%BA%E7%8E%B0%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `299.5K 🔥` `NEW`
1. [人大博士肄业宅家六年靠父母供养](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E5%8D%9A%E5%A3%AB%E8%82%84%E4%B8%9A%E5%AE%85%E5%AE%B6%E5%85%AD%E5%B9%B4%E9%9D%A0%E7%88%B6%E6%AF%8D%E4%BE%9B%E5%85%BB%23) `298.8K 🔥` `NEW`
1. [王鸥我没活干了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%E6%88%91%E6%B2%A1%E6%B4%BB%E5%B9%B2%E4%BA%86%23) `298.1K 🔥` `NEW`
1. [柳智敏团综效果引热议 (Ryu Jimin’s overall effect of the group has sparked heated discussions)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E5%9B%A2%E7%BB%BC%E6%95%88%E6%9E%9C%E5%BC%95%E7%83%AD%E8%AE%AE%23) `297.8K 🔥` `NEW`
1. [张真源十年前的爱心变成了相思锁](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E7%88%B1%E5%BF%83%E5%8F%98%E6%88%90%E4%BA%86%E7%9B%B8%E6%80%9D%E9%94%81%23) `296.9K 🔥` `NEW`
1. [前男友曝黄一鸣是永久封号](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%94%B7%E5%8F%8B%E6%9B%9D%E9%BB%84%E4%B8%80%E9%B8%A3%E6%98%AF%E6%B0%B8%E4%B9%85%E5%B0%81%E5%8F%B7%23) `288.4K 🔥` `NEW`
1. [不穿的衣服可以拿来挂耳环](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%A9%BF%E7%9A%84%E8%A1%A3%E6%9C%8D%E5%8F%AF%E4%BB%A5%E6%8B%BF%E6%9D%A5%E6%8C%82%E8%80%B3%E7%8E%AF%23) `286.7K 🔥` `NEW`
1. [苏新皓被甩飞落水](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E8%A2%AB%E7%94%A9%E9%A3%9E%E8%90%BD%E6%B0%B4%23) `259.4K 🔥` `NEW`
1. [足球小将曾7比0大胜日本](https://s.weibo.com/weibo?q=%23%E8%B6%B3%E7%90%83%E5%B0%8F%E5%B0%86%E6%9B%BE7%E6%AF%940%E5%A4%A7%E8%83%9C%E6%97%A5%E6%9C%AC%23) `256.8K 🔥` `NEW`
1. [任素汐 好好对待没长大的小孩](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E7%B4%A0%E6%B1%90%20%E5%A5%BD%E5%A5%BD%E5%AF%B9%E5%BE%85%E6%B2%A1%E9%95%BF%E5%A4%A7%E7%9A%84%E5%B0%8F%E5%AD%A9%23) `256.4K 🔥` `NEW`
1. [金鹰奖视后大年](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E8%A7%86%E5%90%8E%E5%A4%A7%E5%B9%B4%23) `251.7K 🔥` `NEW`
1. [微醺界又多了一个酒搭子](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E9%86%BA%E7%95%8C%E5%8F%88%E5%A4%9A%E4%BA%86%E4%B8%80%E4%B8%AA%E9%85%92%E6%90%AD%E5%AD%90%23) `245.7K 🔥` `NEW`
1. [生育4孩获公司奖励16万女子发声](https://s.weibo.com/weibo?q=%23%E7%94%9F%E8%82%B24%E5%AD%A9%E8%8E%B7%E5%85%AC%E5%8F%B8%E5%A5%96%E5%8A%B116%E4%B8%87%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `244.7K 🔥` `NEW`
1. [丁禹兮给你们留了道题 (Ding Yuxi left you a question)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%BB%99%E4%BD%A0%E4%BB%AC%E7%95%99%E4%BA%86%E9%81%93%E9%A2%98%23) `244.5K 🔥` `NEW`
1. [金曲奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9B%B2%E5%A5%96%23) `234.6K 🔥` `NEW`
1. [伊朗越位绝杀被吹球员道歉](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%B6%8A%E4%BD%8D%E7%BB%9D%E6%9D%80%E8%A2%AB%E5%90%B9%E7%90%83%E5%91%98%E9%81%93%E6%AD%89%23) `234.5K 🔥` `NEW`
1. [曝美光CEO吐槽苹果涨价](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%BE%8E%E5%85%89CEO%E5%90%90%E6%A7%BD%E8%8B%B9%E6%9E%9C%E6%B6%A8%E4%BB%B7%23) `234.3K 🔥` `NEW`
1. [印度男子喝醉躺在万伏高压线上睡觉](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E5%96%9D%E9%86%89%E8%BA%BA%E5%9C%A8%E4%B8%87%E4%BC%8F%E9%AB%98%E5%8E%8B%E7%BA%BF%E4%B8%8A%E7%9D%A1%E8%A7%89%23) `234.2K 🔥` `NEW`
1. [微信互删的冷知识](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E4%BA%92%E5%88%A0%E7%9A%84%E5%86%B7%E7%9F%A5%E8%AF%86%23) `234.1K 🔥` `NEW`
1. [世界杯32强已确定28席](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF32%E5%BC%BA%E5%B7%B2%E7%A1%AE%E5%AE%9A28%E5%B8%AD%23) `371.8K 🔥` `+52%`
1. [金鹰奖出席率少的原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%87%BA%E5%B8%AD%E7%8E%87%E5%B0%91%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `304.0K 🔥` `+25%`
1. [王安宇声明毕业证和学位证作废](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%A3%B0%E6%98%8E%E6%AF%95%E4%B8%9A%E8%AF%81%E5%92%8C%E5%AD%A6%E4%BD%8D%E8%AF%81%E4%BD%9C%E5%BA%9F%23) `302.2K 🔥` `+24%`
1. [首支出局的世界杯冠军](https://s.weibo.com/weibo?q=%23%E9%A6%96%E6%94%AF%E5%87%BA%E5%B1%80%E7%9A%84%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%23) `298.6K 🔥` `+22%`
1. [王安宇毕业证书丢了 (Wang Anyu lost his graduation certificate)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%AF%95%E4%B8%9A%E8%AF%81%E4%B9%A6%E4%B8%A2%E4%BA%86%23) `306.4K 🔥`
1. [警方称13岁女孩与2男自愿发生关系 (Police say 13-year-old girl had consensual relationship with 2 men)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E7%A7%B013%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%B8%8E2%E7%94%B7%E8%87%AA%E6%84%BF%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%23) `304.8K 🔥`
1. [二手炸鸡](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%89%8B%E7%82%B8%E9%B8%A1%23) `303.4K 🔥`
1. [迪丽热巴金鹰视后价值](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%87%91%E9%B9%B0%E8%A7%86%E5%90%8E%E4%BB%B7%E5%80%BC%23) `300.7K 🔥`
1. [日本悍然模拟攻击辽宁舰](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%82%8D%E7%84%B6%E6%A8%A1%E6%8B%9F%E6%94%BB%E5%87%BB%E8%BE%BD%E5%AE%81%E8%88%B0%23) `299.6K 🔥`
1. [佛得角出线](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%87%BA%E7%BA%BF%23) `297.0K 🔥`
1. [警方回应13岁女孩遭2男性侵被撤案](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%9413%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%81%AD2%E7%94%B7%E6%80%A7%E4%BE%B5%E8%A2%AB%E6%92%A4%E6%A1%88%23) `234.4K 🔥`
1. [韩国第8 (South Korea 8th)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%AC%AC8%23) `998.3K 🔥` `-30%`
1. [微信互删重加朋友圈互动全恢复](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E4%BA%92%E5%88%A0%E9%87%8D%E5%8A%A0%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%BA%92%E5%8A%A8%E5%85%A8%E6%81%A2%E5%A4%8D%23) `305.8K 🔥` `-35%`
1. [杨紫获奖孙俪吴越反应](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%8E%B7%E5%A5%96%E5%AD%99%E4%BF%AA%E5%90%B4%E8%B6%8A%E5%8F%8D%E5%BA%94%23) `304.3K 🔥` `-53%`

Updated at 2026-06-27 18:26:03

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
