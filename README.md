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

1. [美伊达成和平协议 (US and Iran reach peace agreement)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E8%BE%BE%E6%88%90%E5%92%8C%E5%B9%B3%E5%8D%8F%E8%AE%AE%23) `1.7M 🔥` `NEW`
1. [日本绝平荷兰](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BB%9D%E5%B9%B3%E8%8D%B7%E5%85%B0%23) `799.8K 🔥` `NEW`
1. [刘耀文](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%23) `238.8K 🔥` `NEW`
1. [时代少年团给贺峻霖的祝福](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%BB%99%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%9A%84%E7%A5%9D%E7%A6%8F%23) `233.3K 🔥` `NEW`
1. [宋亚轩](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%23) `159.8K 🔥` `NEW`
1. [什么是系统级AI](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%98%AF%E7%B3%BB%E7%BB%9F%E7%BA%A7AI%23) `140.2K 🔥` `NEW`
1. [贺峻霖](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%23) `129.7K 🔥` `NEW`
1. [7比1成德国球迷专属回忆](https://s.weibo.com/weibo?q=%237%E6%AF%941%E6%88%90%E5%BE%B7%E5%9B%BD%E7%90%83%E8%BF%B7%E4%B8%93%E5%B1%9E%E5%9B%9E%E5%BF%86%23) `114.6K 🔥` `NEW`
1. [特朗普称美伊协议完成](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E4%BC%8A%E5%8D%8F%E8%AE%AE%E5%AE%8C%E6%88%90%23) `114.1K 🔥` `NEW`
1. [张若昀帮孙怡林允程潇李思潼拍合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%B8%AE%E5%AD%99%E6%80%A1%E6%9E%97%E5%85%81%E7%A8%8B%E6%BD%87%E6%9D%8E%E6%80%9D%E6%BD%BC%E6%8B%8D%E5%90%88%E7%85%A7%23) `114.1K 🔥` `NEW`
1. [程晓玥说二胎是酒后意外怀的 (Cheng Xiaoyue said that her second child was accidentally conceived after drinking.)](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E8%AF%B4%E4%BA%8C%E8%83%8E%E6%98%AF%E9%85%92%E5%90%8E%E6%84%8F%E5%A4%96%E6%80%80%E7%9A%84%23) `99.6K 🔥` `NEW`
1. [SK海力士押注AI](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E6%8A%BC%E6%B3%A8AI%23) `85.5K 🔥` `NEW`
1. [AMD营销嘲讽苹果](https://s.weibo.com/weibo?q=%23AMD%E8%90%A5%E9%94%80%E5%98%B2%E8%AE%BD%E8%8B%B9%E6%9E%9C%23) `85.5K 🔥` `NEW`
1. [荷兰2比2日本](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B02%E6%AF%942%E6%97%A5%E6%9C%AC%23) `3.0M 🔥` `+5725%`
1. [报志愿前先搞懂这些概念 (Understand these concepts before applying to volunteer)](https://s.weibo.com/weibo?q=%23%E6%8A%A5%E5%BF%97%E6%84%BF%E5%89%8D%E5%85%88%E6%90%9E%E6%87%82%E8%BF%99%E4%BA%9B%E6%A6%82%E5%BF%B5%23) `1.6M 🔥` `+580%`
1. [2026理想Livis Day](https://s.weibo.com/weibo?q=%232026%E7%90%86%E6%83%B3Livis%20Day%23) `1.6M 🔥` `+1011%`
1. [德国7比1库拉索](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD7%E6%AF%941%E5%BA%93%E6%8B%89%E7%B4%A2%23) `1.6M 🔥` `+331%`
1. [78岁库拉索主帅哭了 (The 78-year-old Curacao coach cried)](https://s.weibo.com/weibo?q=%2378%E5%B2%81%E5%BA%93%E6%8B%89%E7%B4%A2%E4%B8%BB%E5%B8%85%E5%93%AD%E4%BA%86%23) `704.5K 🔥` `+255%`
1. [陕西地震 (Shaanxi earthquake)](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF%E5%9C%B0%E9%9C%87%23) `587.8K 🔥` `+199%`
1. [香蜜沉沉烬如霜宣发期](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%9C%9C%E6%B2%89%E6%B2%89%E7%83%AC%E5%A6%82%E9%9C%9C%E5%AE%A3%E5%8F%91%E6%9C%9F%23) `423.2K 🔥` `+266%`
1. [我是演员董子健 最近很空](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%98%AF%E6%BC%94%E5%91%98%E8%91%A3%E5%AD%90%E5%81%A5%20%E6%9C%80%E8%BF%91%E5%BE%88%E7%A9%BA%23) `244.8K 🔥` `+102%`
1. [荷兰球衣太晃眼](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E7%90%83%E8%A1%A3%E5%A4%AA%E6%99%83%E7%9C%BC%23) `243.6K 🔥` `+103%`
1. [刘冲和白鹿合照安利莫离](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%92%8C%E7%99%BD%E9%B9%BF%E5%90%88%E7%85%A7%E5%AE%89%E5%88%A9%E8%8E%AB%E7%A6%BB%23) `218.5K 🔥` `+283%`
1. [当我以为熬夜对我没有影响时 (When I thought staying up late had no effect on me)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E4%BB%A5%E4%B8%BA%E7%86%AC%E5%A4%9C%E5%AF%B9%E6%88%91%E6%B2%A1%E6%9C%89%E5%BD%B1%E5%93%8D%E6%97%B6%23) `201.9K 🔥` `+165%`
1. [西安震感](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E9%9C%87%E6%84%9F%23) `178.6K 🔥` `+217%`
1. [唐僧要是被他抓了孙悟空都来不及救 (If Tang Monk was captured by him, Sun Wukong would not be able to save him in time.)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%83%A7%E8%A6%81%E6%98%AF%E8%A2%AB%E4%BB%96%E6%8A%93%E4%BA%86%E5%AD%99%E6%82%9F%E7%A9%BA%E9%83%BD%E6%9D%A5%E4%B8%8D%E5%8F%8A%E6%95%91%23) `149.4K 🔥` `+280%`
1. [德国vs库拉索 (Germany vs Curacao)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BDvs%E5%BA%93%E6%8B%89%E7%B4%A2%23) `144.1K 🔥` `+135%`
1. [世界饮食美国化只有中国没变](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E9%A5%AE%E9%A3%9F%E7%BE%8E%E5%9B%BD%E5%8C%96%E5%8F%AA%E6%9C%89%E4%B8%AD%E5%9B%BD%E6%B2%A1%E5%8F%98%23) `138.5K 🔥` `+331%`
1. [白鹿手臂居然是自己咬的](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%89%8B%E8%87%82%E5%B1%85%E7%84%B6%E6%98%AF%E8%87%AA%E5%B7%B1%E5%92%AC%E7%9A%84%23) `138.2K 🔥` `+210%`
1. [德国队杀疯了 (The German team went crazy)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E9%98%9F%E6%9D%80%E7%96%AF%E4%BA%86%23) `137.3K 🔥` `+120%`
1. [库拉索人口15.8万](https://s.weibo.com/weibo?q=%23%E5%BA%93%E6%8B%89%E7%B4%A2%E4%BA%BA%E5%8F%A315.8%E4%B8%87%23) `131.4K 🔥` `+106%`
1. [王骁 耳骨钉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%20%E8%80%B3%E9%AA%A8%E9%92%89%23) `126.5K 🔥` `+291%`
1. [沈腾以为神级救场 结果全漏了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E4%BB%A5%E4%B8%BA%E7%A5%9E%E7%BA%A7%E6%95%91%E5%9C%BA%20%E7%BB%93%E6%9E%9C%E5%85%A8%E6%BC%8F%E4%BA%86%23) `114.5K 🔥` `+174%`
1. [台公开解放军无侦10影像疑似在壮胆 (Taiwan releases PLA Undetected 10 video, suspected to be emboldening)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%85%AC%E5%BC%80%E8%A7%A3%E6%94%BE%E5%86%9B%E6%97%A0%E4%BE%A610%E5%BD%B1%E5%83%8F%E7%96%91%E4%BC%BC%E5%9C%A8%E5%A3%AE%E8%83%86%23) `114.1K 🔥` `+186%`
1. [日本闪电扳平](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%97%AA%E7%94%B5%E6%89%B3%E5%B9%B3%23) `108.3K 🔥` `+22%`
1. [幼年形态就已经能看懂这么多了 (In his infant form, he could already understand so much.)](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%B9%B4%E5%BD%A2%E6%80%81%E5%B0%B1%E5%B7%B2%E7%BB%8F%E8%83%BD%E7%9C%8B%E6%87%82%E8%BF%99%E4%B9%88%E5%A4%9A%E4%BA%86%23) `107.1K 🔥` `+167%`
1. [朋友圈很少人发世界杯了](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%BE%88%E5%B0%91%E4%BA%BA%E5%8F%91%E4%B8%96%E7%95%8C%E6%9D%AF%E4%BA%86%23) `101.8K 🔥` `+119%`
1. [世界杯出现了真正的预言家 (A real prophet appears in the World Cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%87%BA%E7%8E%B0%E4%BA%86%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%A2%84%E8%A8%80%E5%AE%B6%23) `100.7K 🔥` `+66%`
1. [荷兰日本14分钟3球](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E6%97%A5%E6%9C%AC14%E5%88%86%E9%92%9F3%E7%90%83%23) `96.0K 🔥` `+45%`
1. [超能消毒液不能与洗衣液同用 (Super disinfectant cannot be used with laundry detergent)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%83%BD%E6%B6%88%E6%AF%92%E6%B6%B2%E4%B8%8D%E8%83%BD%E4%B8%8E%E6%B4%97%E8%A1%A3%E6%B6%B2%E5%90%8C%E7%94%A8%23) `92.6K 🔥` `+164%`
1. [王俊凯憋不住了张若昀还在加料](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%86%8B%E4%B8%8D%E4%BD%8F%E4%BA%86%E5%BC%A0%E8%8B%A5%E6%98%80%E8%BF%98%E5%9C%A8%E5%8A%A0%E6%96%99%23) `86.1K 🔥` `+114%`
1. [爸爸嫌弃爷爷做饭难吃被6岁闺女说哭 (Dad dislikes grandpa’s cooking and his 6-year-old daughter makes him cry)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%AB%8C%E5%BC%83%E7%88%B7%E7%88%B7%E5%81%9A%E9%A5%AD%E9%9A%BE%E5%90%83%E8%A2%AB6%E5%B2%81%E9%97%BA%E5%A5%B3%E8%AF%B4%E5%93%AD%23) `85.7K 🔥` `+151%`
1. [李兰迪说蔡依林是妈咪 (Li Randi said Jolin Tsai is mommy)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E8%AF%B4%E8%94%A1%E4%BE%9D%E6%9E%97%E6%98%AF%E5%A6%88%E5%92%AA%23) `85.6K 🔥` `+54%`
1. [男子去世欠49万房贷父母放弃继承](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E6%AC%A049%E4%B8%87%E6%88%BF%E8%B4%B7%E7%88%B6%E6%AF%8D%E6%94%BE%E5%BC%83%E7%BB%A7%E6%89%BF%23) `85.6K 🔥` `+164%`
1. [王俊凯刘昊然吴磊8年前合照 (Wang Junkai, Liu Haoran and Wu Lei took a group photo 8 years ago)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%88%98%E6%98%8A%E7%84%B6%E5%90%B4%E7%A3%8A8%E5%B9%B4%E5%89%8D%E5%90%88%E7%85%A7%23) `85.6K 🔥` `+165%`
1. [Jackeylove刷新LPL亚军纪录 (Jackeylove breaks LPL runner-up record)](https://s.weibo.com/weibo?q=%23Jackeylove%E5%88%B7%E6%96%B0LPL%E4%BA%9A%E5%86%9B%E7%BA%AA%E5%BD%95%23) `85.6K 🔥` `+170%`
1. [德国5分钟闪击 (Germany 5 minute blitz)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD5%E5%88%86%E9%92%9F%E9%97%AA%E5%87%BB%23) `85.5K 🔥` `+136%`
1. [德国7比1梦回2014](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD7%E6%AF%941%E6%A2%A6%E5%9B%9E2014%23) `85.7K 🔥`
1. [荷兰vs日本 (Netherlands vs Japan)](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0vs%E6%97%A5%E6%9C%AC%23) `226.0K 🔥` `-81%`
1. [张凌赫活动证件上用的真名 (Zhang Linghe’s real name used on his event ID)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%B4%BB%E5%8A%A8%E8%AF%81%E4%BB%B6%E4%B8%8A%E7%94%A8%E7%9A%84%E7%9C%9F%E5%90%8D%23) `104.9K 🔥` `-41%`
1. [陈坤 我还活着呢](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%9D%A4%20%E6%88%91%E8%BF%98%E6%B4%BB%E7%9D%80%E5%91%A2%23) `87.5K 🔥` `-77%`

Updated at 2026-06-15 07:15:02

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
