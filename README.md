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

1. [查收人民海军的硬核祝福 (Check out the hard-core blessings from the People’s Navy)](https://s.weibo.com/weibo?q=%23%E6%9F%A5%E6%94%B6%E4%BA%BA%E6%B0%91%E6%B5%B7%E5%86%9B%E7%9A%84%E7%A1%AC%E6%A0%B8%E7%A5%9D%E7%A6%8F%23) `665.0K 🔥` `NEW`
1. [王橹杰听到穆祉丞唱过的歌脸红了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%90%AC%E5%88%B0%E7%A9%86%E7%A5%89%E4%B8%9E%E5%94%B1%E8%BF%87%E7%9A%84%E6%AD%8C%E8%84%B8%E7%BA%A2%E4%BA%86%23) `514.2K 🔥` `NEW`
1. [赵心童vs威尔逊](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5vs%E5%A8%81%E5%B0%94%E9%80%8A%23) `400.0K 🔥` `NEW`
1. [小狗妞妞去世](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%A6%9E%E5%A6%9E%E5%8E%BB%E4%B8%96%23) `321.6K 🔥` `NEW`
1. [解放军建军99周年](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%BB%BA%E5%86%9B99%E5%91%A8%E5%B9%B4%23) `297.6K 🔥` `NEW`
1. [房主任母女关系](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E6%AF%8D%E5%A5%B3%E5%85%B3%E7%B3%BB%23) `291.0K 🔥` `NEW`
1. [OpenAI 价格战](https://s.weibo.com/weibo?q=%23OpenAI%20%E4%BB%B7%E6%A0%BC%E6%88%98%23) `286.9K 🔥` `NEW`
1. [美国财长买入日元笔记被拍](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%B4%A2%E9%95%BF%E4%B9%B0%E5%85%A5%E6%97%A5%E5%85%83%E7%AC%94%E8%AE%B0%E8%A2%AB%E6%8B%8D%23) `274.8K 🔥` `NEW`
1. [曝徐艺洋给罗正介绍工作](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BE%90%E8%89%BA%E6%B4%8B%E7%BB%99%E7%BD%97%E6%AD%A3%E4%BB%8B%E7%BB%8D%E5%B7%A5%E4%BD%9C%23) `253.5K 🔥` `NEW`
1. [月薪6万躺平看云的神仙工作](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA6%E4%B8%87%E8%BA%BA%E5%B9%B3%E7%9C%8B%E4%BA%91%E7%9A%84%E7%A5%9E%E4%BB%99%E5%B7%A5%E4%BD%9C%23) `224.6K 🔥` `NEW`
1. [丁程鑫彩排戴着刘宇宁送的手串 (Ding Chengxin rehearsed wearing a bracelet given by Liu Yuning)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BD%A9%E6%8E%92%E6%88%B4%E7%9D%80%E5%88%98%E5%AE%87%E5%AE%81%E9%80%81%E7%9A%84%E6%89%8B%E4%B8%B2%23) `220.0K 🔥` `NEW`
1. [机器人练字比我还努力](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%BB%83%E5%AD%97%E6%AF%94%E6%88%91%E8%BF%98%E5%8A%AA%E5%8A%9B%23) `218.8K 🔥` `NEW`
1. [BLG战胜JDG](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CJDG%23) `213.6K 🔥` `NEW`
1. [杨丞琳照片被判AI](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%9E%E7%90%B3%E7%85%A7%E7%89%87%E8%A2%AB%E5%88%A4AI%23) `213.0K 🔥` `NEW`
1. [你好星期六下期是九门剧组](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E4%B8%8B%E6%9C%9F%E6%98%AF%E4%B9%9D%E9%97%A8%E5%89%A7%E7%BB%84%23) `199.6K 🔥` `NEW`
1. [31岁网文作者产子次日成半植物人](https://s.weibo.com/weibo?q=%2331%E5%B2%81%E7%BD%91%E6%96%87%E4%BD%9C%E8%80%85%E4%BA%A7%E5%AD%90%E6%AC%A1%E6%97%A5%E6%88%90%E5%8D%8A%E6%A4%8D%E7%89%A9%E4%BA%BA%23) `197.3K 🔥` `NEW`
1. [怀双胞胎1个流产1个105天后出生](https://s.weibo.com/weibo?q=%23%E6%80%80%E5%8F%8C%E8%83%9E%E8%83%8E1%E4%B8%AA%E6%B5%81%E4%BA%A71%E4%B8%AA105%E5%A4%A9%E5%90%8E%E5%87%BA%E7%94%9F%23) `192.2K 🔥` `NEW`
1. [医生10级美颜照已换回正常](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F10%E7%BA%A7%E7%BE%8E%E9%A2%9C%E7%85%A7%E5%B7%B2%E6%8D%A2%E5%9B%9E%E6%AD%A3%E5%B8%B8%23) `173.6K 🔥` `NEW`
1. [掉进大渡河失联6岁男童确认遇难](https://s.weibo.com/weibo?q=%23%E6%8E%89%E8%BF%9B%E5%A4%A7%E6%B8%A1%E6%B2%B3%E5%A4%B1%E8%81%946%E5%B2%81%E7%94%B7%E7%AB%A5%E7%A1%AE%E8%AE%A4%E9%81%87%E9%9A%BE%23) `168.0K 🔥` `NEW`
1. [巨型章鱼紧紧吸在男子背上不肯下来](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E5%9E%8B%E7%AB%A0%E9%B1%BC%E7%B4%A7%E7%B4%A7%E5%90%B8%E5%9C%A8%E7%94%B7%E5%AD%90%E8%83%8C%E4%B8%8A%E4%B8%8D%E8%82%AF%E4%B8%8B%E6%9D%A5%23) `151.1K 🔥` `NEW`
1. [LPL登峰组大局已定 (The overall situation of the LPL summit group has been decided)](https://s.weibo.com/weibo?q=%23LPL%E7%99%BB%E5%B3%B0%E7%BB%84%E5%A4%A7%E5%B1%80%E5%B7%B2%E5%AE%9A%23) `150.0K 🔥` `NEW`
1. [存储芯片成A股半导体市值增量王](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E6%88%90A%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%B8%82%E5%80%BC%E5%A2%9E%E9%87%8F%E7%8E%8B%23) `143.1K 🔥` `NEW`
1. [杭州出现罕见雨幡 (Rare rain flags appear in Hangzhou)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%87%BA%E7%8E%B0%E7%BD%95%E8%A7%81%E9%9B%A8%E5%B9%A1%23) `375.0K 🔥` `+71%`
1. [奥德赛 (Odyssey)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `857.6K 🔥`
1. [送到你床上撕开快递员最丑陋的傲慢](https://s.weibo.com/weibo?q=%23%E9%80%81%E5%88%B0%E4%BD%A0%E5%BA%8A%E4%B8%8A%E6%92%95%E5%BC%80%E5%BF%AB%E9%80%92%E5%91%98%E6%9C%80%E4%B8%91%E9%99%8B%E7%9A%84%E5%82%B2%E6%85%A2%23) `317.3K 🔥`
1. [董璇也怀疑周也是自己女儿](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E4%B9%9F%E6%80%80%E7%96%91%E5%91%A8%E4%B9%9F%E6%98%AF%E8%87%AA%E5%B7%B1%E5%A5%B3%E5%84%BF%23) `305.0K 🔥`
1. [集中供冷是什么神仙体验](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%B8%AD%E4%BE%9B%E5%86%B7%E6%98%AF%E4%BB%80%E4%B9%88%E7%A5%9E%E4%BB%99%E4%BD%93%E9%AA%8C%23) `281.6K 🔥`
1. [杨丞琳胖了6斤](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%9E%E7%90%B3%E8%83%96%E4%BA%866%E6%96%A4%23) `271.6K 🔥`
1. [时代少年团限定新发色](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%99%90%E5%AE%9A%E6%96%B0%E5%8F%91%E8%89%B2%23) `264.3K 🔥`
1. [外婆朋友圈背景是床边一面墙](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%A9%86%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%83%8C%E6%99%AF%E6%98%AF%E5%BA%8A%E8%BE%B9%E4%B8%80%E9%9D%A2%E5%A2%99%23) `258.0K 🔥`
1. [39岁女子乳腺癌复发卧床难自理](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E5%A5%B3%E5%AD%90%E4%B9%B3%E8%85%BA%E7%99%8C%E5%A4%8D%E5%8F%91%E5%8D%A7%E5%BA%8A%E9%9A%BE%E8%87%AA%E7%90%86%23) `167.4K 🔥`
1. [出生时被抱错两女子错换37年人生 (Two women who were carried in the wrong arms at birth exchanged 37 years of their lives.)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F%E6%97%B6%E8%A2%AB%E6%8A%B1%E9%94%99%E4%B8%A4%E5%A5%B3%E5%AD%90%E9%94%99%E6%8D%A237%E5%B9%B4%E4%BA%BA%E7%94%9F%23) `1.2M 🔥` `-33%`
1. [找对象的尽头是初高中同学](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%B0%BD%E5%A4%B4%E6%98%AF%E5%88%9D%E9%AB%98%E4%B8%AD%E5%90%8C%E5%AD%A6%23) `591.1K 🔥` `-21%`
1. [年会不能停2我的理想打工副本 (The annual meeting cannot be stopped 2 copies of my ideal part-time job)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BC%9A%E4%B8%8D%E8%83%BD%E5%81%9C2%E6%88%91%E7%9A%84%E7%90%86%E6%83%B3%E6%89%93%E5%B7%A5%E5%89%AF%E6%9C%AC%23) `392.8K 🔥` `-30%`
1. [登机柜台出现了好小众词汇](https://s.weibo.com/weibo?q=%23%E7%99%BB%E6%9C%BA%E6%9F%9C%E5%8F%B0%E5%87%BA%E7%8E%B0%E4%BA%86%E5%A5%BD%E5%B0%8F%E4%BC%97%E8%AF%8D%E6%B1%87%23) `371.7K 🔥` `-36%`
1. [五公划区 (Five public districts)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E5%88%92%E5%8C%BA%23) `333.5K 🔥` `-46%`
1. [逐玉作者道歉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%BD%9C%E8%80%85%E9%81%93%E6%AD%89%23) `327.6K 🔥` `-21%`
1. [黄多多晒与弟弟妹妹合影](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E6%99%92%E4%B8%8E%E5%BC%9F%E5%BC%9F%E5%A6%B9%E5%A6%B9%E5%90%88%E5%BD%B1%23) `230.3K 🔥` `-30%`
1. [陈瑶回应九门霍仙姑下线](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%9B%9E%E5%BA%94%E4%B9%9D%E9%97%A8%E9%9C%8D%E4%BB%99%E5%A7%91%E4%B8%8B%E7%BA%BF%23) `222.3K 🔥` `-57%`
1. [西班牙称5万移民几乎全部遣返](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%A7%B05%E4%B8%87%E7%A7%BB%E6%B0%91%E5%87%A0%E4%B9%8E%E5%85%A8%E9%83%A8%E9%81%A3%E8%BF%94%23) `215.4K 🔥` `-34%`
1. [王承渲终于回来了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%89%BF%E6%B8%B2%E7%BB%88%E4%BA%8E%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `213.1K 🔥` `-30%`
1. [女子住酒店退房搬空用品只剩电视](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%85%92%E5%BA%97%E9%80%80%E6%88%BF%E6%90%AC%E7%A9%BA%E7%94%A8%E5%93%81%E5%8F%AA%E5%89%A9%E7%94%B5%E8%A7%86%23) `212.0K 🔥` `-36%`
1. [陈瑶霍仙姑下线了](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E9%9C%8D%E4%BB%99%E5%A7%91%E4%B8%8B%E7%BA%BF%E4%BA%86%23) `204.4K 🔥` `-36%`
1. [5万人游进西班牙后4.8万人游回去了](https://s.weibo.com/weibo?q=%235%E4%B8%87%E4%BA%BA%E6%B8%B8%E8%BF%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E5%90%8E4.8%E4%B8%87%E4%BA%BA%E6%B8%B8%E5%9B%9E%E5%8E%BB%E4%BA%86%23) `196.6K 🔥` `-36%`
1. [王橹杰白发狼尾造型 (Wang Lujie white hair wolf tail style)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%99%BD%E5%8F%91%E7%8B%BC%E5%B0%BE%E9%80%A0%E5%9E%8B%23) `193.1K 🔥` `-40%`
1. [女子重病离世再婚丈夫索要彩礼金饰](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%87%8D%E7%97%85%E7%A6%BB%E4%B8%96%E5%86%8D%E5%A9%9A%E4%B8%88%E5%A4%AB%E7%B4%A2%E8%A6%81%E5%BD%A9%E7%A4%BC%E9%87%91%E9%A5%B0%23) `159.6K 🔥` `-50%`
1. [房主任改变不了女儿重复自己的命运](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E6%94%B9%E5%8F%98%E4%B8%8D%E4%BA%86%E5%A5%B3%E5%84%BF%E9%87%8D%E5%A4%8D%E8%87%AA%E5%B7%B1%E7%9A%84%E5%91%BD%E8%BF%90%23) `146.2K 🔥` `-54%`
1. [方程豹7月销量超4万辆](https://s.weibo.com/weibo?q=%23%E6%96%B9%E7%A8%8B%E8%B1%B97%E6%9C%88%E9%94%80%E9%87%8F%E8%B6%854%E4%B8%87%E8%BE%86%23) `142.8K 🔥` `-56%`
1. [左奇函杨博文选曲骨骼谢幕](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E6%9D%A8%E5%8D%9A%E6%96%87%E9%80%89%E6%9B%B2%E9%AA%A8%E9%AA%BC%E8%B0%A2%E5%B9%95%23) `136.7K 🔥` `-58%`
1. [赵心童轰出单杆139分](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E8%BD%B0%E5%87%BA%E5%8D%95%E6%9D%86139%E5%88%86%23) `120.5K 🔥` `-35%`

Updated at 2026-08-01 22:49:32

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
