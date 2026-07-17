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

1. [曲婉婷母亲贪污3.5亿元职工安置费 (Qu Wanting’s mother embezzled 350 million yuan in employee placement fees)](https://s.weibo.com/weibo?q=%23%E6%9B%B2%E5%A9%89%E5%A9%B7%E6%AF%8D%E4%BA%B2%E8%B4%AA%E6%B1%A13.5%E4%BA%BF%E5%85%83%E8%81%8C%E5%B7%A5%E5%AE%89%E7%BD%AE%E8%B4%B9%23) `2.3M 🔥` `NEW`
1. [功夫女足特效](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%89%B9%E6%95%88%23) `474.3K 🔥` `NEW`
1. [迪丽热巴晒和张小斐合照](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%99%92%E5%92%8C%E5%BC%A0%E5%B0%8F%E6%96%90%E5%90%88%E7%85%A7%23) `473.1K 🔥` `NEW`
1. [清吧伟哥事件](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%90%A7%E4%BC%9F%E5%93%A5%E4%BA%8B%E4%BB%B6%23) `472.7K 🔥` `NEW`
1. [清吧被投放伟哥当事人发声](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%90%A7%E8%A2%AB%E6%8A%95%E6%94%BE%E4%BC%9F%E5%93%A5%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `466.0K 🔥` `NEW`
1. [A股今天暴跌原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BB%8A%E5%A4%A9%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `428.3K 🔥` `NEW`
1. [没有什么稳定的工作](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E4%BB%80%E4%B9%88%E7%A8%B3%E5%AE%9A%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `428.1K 🔥` `NEW`
1. [穆祉丞 什么意思啊你们](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D%E5%95%8A%E4%BD%A0%E4%BB%AC%23) `427.6K 🔥` `NEW`
1. [妙妙](https://s.weibo.com/weibo?q=%23%E5%A6%99%E5%A6%99%23) `427.2K 🔥` `NEW`
1. [黑队淘汰](https://s.weibo.com/weibo?q=%23%E9%BB%91%E9%98%9F%E6%B7%98%E6%B1%B0%23) `426.5K 🔥` `NEW`
1. [穆祉丞手一直在抖 (Mu Zhicheng’s hands kept shaking)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%89%8B%E4%B8%80%E7%9B%B4%E5%9C%A8%E6%8A%96%23) `426.2K 🔥` `NEW`
1. [AI影视创作进入工业化时代](https://s.weibo.com/weibo?q=%23AI%E5%BD%B1%E8%A7%86%E5%88%9B%E4%BD%9C%E8%BF%9B%E5%85%A5%E5%B7%A5%E4%B8%9A%E5%8C%96%E6%97%B6%E4%BB%A3%23) `426.0K 🔥` `NEW`
1. [博主离世后被配阴婚](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E7%A6%BB%E4%B8%96%E5%90%8E%E8%A2%AB%E9%85%8D%E9%98%B4%E5%A9%9A%23) `425.7K 🔥` `NEW`
1. [朱志鑫撕名牌受伤](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E6%92%95%E5%90%8D%E7%89%8C%E5%8F%97%E4%BC%A4%23) `425.7K 🔥` `NEW`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `405.8K 🔥` `NEW`
1. [张奕然把TF家族全介绍出去了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A5%95%E7%84%B6%E6%8A%8ATF%E5%AE%B6%E6%97%8F%E5%85%A8%E4%BB%8B%E7%BB%8D%E5%87%BA%E5%8E%BB%E4%BA%86%23) `398.3K 🔥` `NEW`
1. [29国代表签约签到笔没墨](https://s.weibo.com/weibo?q=%2329%E5%9B%BD%E4%BB%A3%E8%A1%A8%E7%AD%BE%E7%BA%A6%E7%AD%BE%E5%88%B0%E7%AC%94%E6%B2%A1%E5%A2%A8%23) `313.9K 🔥` `NEW`
1. [21岁女孩家中遇害凶手竟是亲生父亲](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%AE%B6%E4%B8%AD%E9%81%87%E5%AE%B3%E5%87%B6%E6%89%8B%E7%AB%9F%E6%98%AF%E4%BA%B2%E7%94%9F%E7%88%B6%E4%BA%B2%23) `292.1K 🔥` `NEW`
1. [妙妙是非常美好的女孩](https://s.weibo.com/weibo?q=%23%E5%A6%99%E5%A6%99%E6%98%AF%E9%9D%9E%E5%B8%B8%E7%BE%8E%E5%A5%BD%E7%9A%84%E5%A5%B3%E5%AD%A9%23) `286.4K 🔥` `NEW`
1. [刘耀文自拍里有宋亚轩](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%87%AA%E6%8B%8D%E9%87%8C%E6%9C%89%E5%AE%8B%E4%BA%9A%E8%BD%A9%23) `282.0K 🔥` `NEW`
1. [被裁掉的女孩 (cut off girl)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%A3%81%E6%8E%89%E7%9A%84%E5%A5%B3%E5%AD%A9%23) `281.5K 🔥` `NEW`
1. [唐嫣檀健次孟子义fendi活动](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E6%AA%80%E5%81%A5%E6%AC%A1%E5%AD%9F%E5%AD%90%E4%B9%89fendi%E6%B4%BB%E5%8A%A8%23) `222.6K 🔥` `NEW`
1. [快三十岁意识到不需要朋友](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E4%B8%89%E5%8D%81%E5%B2%81%E6%84%8F%E8%AF%86%E5%88%B0%E4%B8%8D%E9%9C%80%E8%A6%81%E6%9C%8B%E5%8F%8B%23) `219.6K 🔥` `NEW`
1. [虞书欣种地吧带了8个体育生](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%A7%8D%E5%9C%B0%E5%90%A7%E5%B8%A6%E4%BA%868%E4%B8%AA%E4%BD%93%E8%82%B2%E7%94%9F%23) `202.0K 🔥` `NEW`
1. [阿根廷西班牙都穿主场球衣](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A5%BF%E7%8F%AD%E7%89%99%E9%83%BD%E7%A9%BF%E4%B8%BB%E5%9C%BA%E7%90%83%E8%A1%A3%23) `201.8K 🔥` `NEW`
1. [张峻豪受伤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B3%BB%E8%B1%AA%E5%8F%97%E4%BC%A4%23) `200.3K 🔥` `NEW`
1. [姆巴佩光速变脸](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%85%89%E9%80%9F%E5%8F%98%E8%84%B8%23) `197.7K 🔥` `NEW`
1. [中国游客在日本自驾游被列车撞击](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%9C%A8%E6%97%A5%E6%9C%AC%E8%87%AA%E9%A9%BE%E6%B8%B8%E8%A2%AB%E5%88%97%E8%BD%A6%E6%92%9E%E5%87%BB%23) `194.3K 🔥` `NEW`
1. [马立奥腿上好多淤青](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%8B%E5%A5%A5%E8%85%BF%E4%B8%8A%E5%A5%BD%E5%A4%9A%E6%B7%A4%E9%9D%92%23) `191.6K 🔥` `NEW`
1. [国外月薪10万的穿搭师](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%A4%96%E6%9C%88%E8%96%AA10%E4%B8%87%E7%9A%84%E7%A9%BF%E6%90%AD%E5%B8%88%23) `190.1K 🔥` `NEW`
1. [阿根廷总统确认不会现场观看决赛 (Argentina's president confirms he won't watch final live)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%80%BB%E7%BB%9F%E7%A1%AE%E8%AE%A4%E4%B8%8D%E4%BC%9A%E7%8E%B0%E5%9C%BA%E8%A7%82%E7%9C%8B%E5%86%B3%E8%B5%9B%23) `176.6K 🔥` `NEW`
1. [张小斐从医学角度重新认识了热巴](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E4%BB%8E%E5%8C%BB%E5%AD%A6%E8%A7%92%E5%BA%A6%E9%87%8D%E6%96%B0%E8%AE%A4%E8%AF%86%E4%BA%86%E7%83%AD%E5%B7%B4%23) `172.6K 🔥` `NEW`
1. [LGDNBW对战WB](https://s.weibo.com/weibo?q=%23LGDNBW%E5%AF%B9%E6%88%98WB%23) `172.5K 🔥` `NEW`
1. [GR对战GW](https://s.weibo.com/weibo?q=%23GR%E5%AF%B9%E6%88%98GW%23) `170.2K 🔥` `NEW`
1. [16位诺贝尔奖得主联名发出AI警告](https://s.weibo.com/weibo?q=%2316%E4%BD%8D%E8%AF%BA%E8%B4%9D%E5%B0%94%E5%A5%96%E5%BE%97%E4%B8%BB%E8%81%94%E5%90%8D%E5%8F%91%E5%87%BAAI%E8%AD%A6%E5%91%8A%23) `997.2K 🔥` `+206%`
1. [2026世界人工智能大会何以圈粉](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%A4%A7%E4%BC%9A%E4%BD%95%E4%BB%A5%E5%9C%88%E7%B2%89%23) `812.7K 🔥`
1. [小鹏MONA L03全球上市12.38万元起 (Xpeng MONA L03 is available globally starting from RMB 123,800)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONA%20L03%E5%85%A8%E7%90%83%E4%B8%8A%E5%B8%8212.38%E4%B8%87%E5%85%83%E8%B5%B7%23) `806.2K 🔥`
1. [孙燕姿 曲婉婷](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%20%E6%9B%B2%E5%A9%89%E5%A9%B7%23) `427.8K 🔥`
1. [对虞书欣的身高有了实感](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9A%84%E8%BA%AB%E9%AB%98%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `427.0K 🔥`
1. [西红柿炒蛋在日本火了 (Tomato scrambled eggs are popular in Japan)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%BA%A2%E6%9F%BF%E7%82%92%E8%9B%8B%E5%9C%A8%E6%97%A5%E6%9C%AC%E7%81%AB%E4%BA%86%23) `426.9K 🔥`
1. [重庆彭水山体垮塌](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%9E%AE%E5%A1%8C%23) `402.7K 🔥`
1. [陈瑶开车张月坐副驾](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%BC%80%E8%BD%A6%E5%BC%A0%E6%9C%88%E5%9D%90%E5%89%AF%E9%A9%BE%23) `402.6K 🔥`
1. [选伴侣要想到父母离世那天 (When choosing a partner, think about the day your parents died)](https://s.weibo.com/weibo?q=%23%E9%80%89%E4%BC%B4%E4%BE%A3%E8%A6%81%E6%83%B3%E5%88%B0%E7%88%B6%E6%AF%8D%E7%A6%BB%E4%B8%96%E9%82%A3%E5%A4%A9%23) `192.5K 🔥`
1. [发现好多人开空调抠抠搜搜的 (I found a lot of people turning on the air conditioner and fussing about it.)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A5%BD%E5%A4%9A%E4%BA%BA%E5%BC%80%E7%A9%BA%E8%B0%83%E6%8A%A0%E6%8A%A0%E6%90%9C%E6%90%9C%E7%9A%84%23) `795.1K 🔥` `-33%`
1. [两只老虎的歌词终于解密了 (The lyrics of Two Tigers are finally decrypted)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%8F%AA%E8%80%81%E8%99%8E%E7%9A%84%E6%AD%8C%E8%AF%8D%E7%BB%88%E4%BA%8E%E8%A7%A3%E5%AF%86%E4%BA%86%23) `428.7K 🔥` `-72%`
1. [法国替补出战季军战](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%9B%BF%E8%A1%A5%E5%87%BA%E6%88%98%E5%AD%A3%E5%86%9B%E6%88%98%23) `428.5K 🔥` `-34%`
1. [创业板大跌引满仓抄底](https://s.weibo.com/weibo?q=%23%E5%88%9B%E4%B8%9A%E6%9D%BF%E5%A4%A7%E8%B7%8C%E5%BC%95%E6%BB%A1%E4%BB%93%E6%8A%84%E5%BA%95%23) `297.5K 🔥` `-29%`
1. [以后大家拼的就是身体了 (From now on, everyone will be fighting for their bodies.)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%A4%A7%E5%AE%B6%E6%8B%BC%E7%9A%84%E5%B0%B1%E6%98%AF%E8%BA%AB%E4%BD%93%E4%BA%86%23) `225.8K 🔥` `-53%`
1. [张极受伤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9E%81%E5%8F%97%E4%BC%A4%23) `224.5K 🔥` `-46%`
1. [王俊凯演唱会免费提供女性用品](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%85%8D%E8%B4%B9%E6%8F%90%E4%BE%9B%E5%A5%B3%E6%80%A7%E7%94%A8%E5%93%81%23) `219.5K 🔥` `-47%`
1. [A股正迎来年内难得的黄金买点](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%AD%A3%E8%BF%8E%E6%9D%A5%E5%B9%B4%E5%86%85%E9%9A%BE%E5%BE%97%E7%9A%84%E9%BB%84%E9%87%91%E4%B9%B0%E7%82%B9%23) `183.6K 🔥` `-66%`

Updated at 2026-07-17 18:53:18

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
