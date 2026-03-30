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

1. [五哈6阵容官宣 (Wuha 6 lineup official announcement)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%886%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `1.1M 🔥` `NEW`
1. [身份证号的X到底咋读](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8F%B7%E7%9A%84X%E5%88%B0%E5%BA%95%E5%92%8B%E8%AF%BB%23) `829.1K 🔥` `NEW`
1. [保姆上门当日病人死亡被索赔130万](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E4%B8%8A%E9%97%A8%E5%BD%93%E6%97%A5%E7%97%85%E4%BA%BA%E6%AD%BB%E4%BA%A1%E8%A2%AB%E7%B4%A2%E8%B5%94130%E4%B8%87%23) `408.4K 🔥` `NEW`
1. [女生橘子洲拍摄旱地拔葱震撼大片](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%A9%98%E5%AD%90%E6%B4%B2%E6%8B%8D%E6%91%84%E6%97%B1%E5%9C%B0%E6%8B%94%E8%91%B1%E9%9C%87%E6%92%BC%E5%A4%A7%E7%89%87%23) `279.4K 🔥` `NEW`
1. [白日提灯播放指数超逐玉](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E6%92%AD%E6%94%BE%E6%8C%87%E6%95%B0%E8%B6%85%E9%80%90%E7%8E%89%23) `274.7K 🔥` `NEW`
1. [广州暴雨](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E6%9A%B4%E9%9B%A8%23) `266.0K 🔥` `NEW`
1. [非洲男子将14岁儿子送往郑州治疗](https://s.weibo.com/weibo?q=%23%E9%9D%9E%E6%B4%B2%E7%94%B7%E5%AD%90%E5%B0%8614%E5%B2%81%E5%84%BF%E5%AD%90%E9%80%81%E5%BE%80%E9%83%91%E5%B7%9E%E6%B2%BB%E7%96%97%23) `262.2K 🔥` `NEW`
1. [伊朗称美停战建议涉伊朗基本权利](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E5%81%9C%E6%88%98%E5%BB%BA%E8%AE%AE%E6%B6%89%E4%BC%8A%E6%9C%97%E5%9F%BA%E6%9C%AC%E6%9D%83%E5%88%A9%23) `251.8K 🔥` `NEW`
1. [Word和PDF已成境外组织窃密利器](https://s.weibo.com/weibo?q=%23Word%E5%92%8CPDF%E5%B7%B2%E6%88%90%E5%A2%83%E5%A4%96%E7%BB%84%E7%BB%87%E7%AA%83%E5%AF%86%E5%88%A9%E5%99%A8%23) `245.8K 🔥` `NEW`
1. [李荣浩说不需要赔偿](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E8%AF%B4%E4%B8%8D%E9%9C%80%E8%A6%81%E8%B5%94%E5%81%BF%23) `238.4K 🔥` `NEW`
1. [全红婵说接受不了这么胖的自己 (Quan Hongchan said she couldn’t accept being so fat.)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E8%AF%B4%E6%8E%A5%E5%8F%97%E4%B8%8D%E4%BA%86%E8%BF%99%E4%B9%88%E8%83%96%E7%9A%84%E8%87%AA%E5%B7%B1%23) `234.8K 🔥` `NEW`
1. [江山大同阵容官宣](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `229.5K 🔥` `NEW`
1. [王者荣耀大乔新皮肤](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%A4%A7%E4%B9%94%E6%96%B0%E7%9A%AE%E8%82%A4%23) `220.0K 🔥` `NEW`
1. [薛之谦因下雨演唱会免费](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%9B%A0%E4%B8%8B%E9%9B%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E5%85%8D%E8%B4%B9%23) `211.8K 🔥` `NEW`
1. [时代少年团 卫龙](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%8D%AB%E9%BE%99%23) `208.9K 🔥` `NEW`
1. [女子打赏男主播后觉得下头要退钱](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%93%E8%B5%8F%E7%94%B7%E4%B8%BB%E6%92%AD%E5%90%8E%E8%A7%89%E5%BE%97%E4%B8%8B%E5%A4%B4%E8%A6%81%E9%80%80%E9%92%B1%23) `177.2K 🔥` `NEW`
1. [朱媛媛去世近一年辛柏青状态](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AA%9B%E5%AA%9B%E5%8E%BB%E4%B8%96%E8%BF%91%E4%B8%80%E5%B9%B4%E8%BE%9B%E6%9F%8F%E9%9D%92%E7%8A%B6%E6%80%81%23) `169.9K 🔥` `NEW`
1. [杨幂江山大同出发进组](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%E5%87%BA%E5%8F%91%E8%BF%9B%E7%BB%84%23) `156.2K 🔥` `NEW`
1. [金匠寿司道歉](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8C%A0%E5%AF%BF%E5%8F%B8%E9%81%93%E6%AD%89%23) `149.1K 🔥` `NEW`
1. [朱正廷方否认恋情](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E6%AD%A3%E5%BB%B7%E6%96%B9%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23) `149.0K 🔥` `NEW`
1. [清明假期下雨地方可真多 (There are so many places where it rains during the Qingming Festival)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E5%81%87%E6%9C%9F%E4%B8%8B%E9%9B%A8%E5%9C%B0%E6%96%B9%E5%8F%AF%E7%9C%9F%E5%A4%9A%23) `145.3K 🔥` `NEW`
1. [湖北一自行车赛突发意外](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E4%B8%80%E8%87%AA%E8%A1%8C%E8%BD%A6%E8%B5%9B%E7%AA%81%E5%8F%91%E6%84%8F%E5%A4%96%23) `116.3K 🔥` `NEW`
1. [欧阳娜娜将参加小鹏MONA发布会](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%B0%86%E5%8F%82%E5%8A%A0%E5%B0%8F%E9%B9%8FMONA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `110.7K 🔥` `NEW`
1. [研究发现炎症后身体会埋下癌症种子](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E5%8F%91%E7%8E%B0%E7%82%8E%E7%97%87%E5%90%8E%E8%BA%AB%E4%BD%93%E4%BC%9A%E5%9F%8B%E4%B8%8B%E7%99%8C%E7%97%87%E7%A7%8D%E5%AD%90%23) `109.1K 🔥` `NEW`
1. [美特种部队数百人抵达中东](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%89%B9%E7%A7%8D%E9%83%A8%E9%98%9F%E6%95%B0%E7%99%BE%E4%BA%BA%E6%8A%B5%E8%BE%BE%E4%B8%AD%E4%B8%9C%23) `104.5K 🔥` `NEW`
1. [全红婵自曝减重困境](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E8%87%AA%E6%9B%9D%E5%87%8F%E9%87%8D%E5%9B%B0%E5%A2%83%23) `100.2K 🔥` `NEW`
1. [大乔微风如诗新皮肤](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%B9%94%E5%BE%AE%E9%A3%8E%E5%A6%82%E8%AF%97%E6%96%B0%E7%9A%AE%E8%82%A4%23) `100.2K 🔥` `NEW`
1. [郑丽文率团来访](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E7%8E%87%E5%9B%A2%E6%9D%A5%E8%AE%BF%23) `99.7K 🔥` `NEW`
1. [基层干部离了稿子不会说话](https://s.weibo.com/weibo?q=%23%E5%9F%BA%E5%B1%82%E5%B9%B2%E9%83%A8%E7%A6%BB%E4%BA%86%E7%A8%BF%E5%AD%90%E4%B8%8D%E4%BC%9A%E8%AF%B4%E8%AF%9D%23) `96.9K 🔥` `NEW`
1. [网贷迎来最强监管](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%B4%B7%E8%BF%8E%E6%9D%A5%E6%9C%80%E5%BC%BA%E7%9B%91%E7%AE%A1%23) `93.5K 🔥` `NEW`
1. [迪丽热巴美式白开水妆 (Dilireba American plain water makeup)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BE%8E%E5%BC%8F%E7%99%BD%E5%BC%80%E6%B0%B4%E5%A6%86%23) `91.0K 🔥` `NEW`
1. [猫 我该不该醒](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E6%88%91%E8%AF%A5%E4%B8%8D%E8%AF%A5%E9%86%92%23) `86.0K 🔥` `NEW`
1. [金价下跌刚需客户下手了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C%E5%88%9A%E9%9C%80%E5%AE%A2%E6%88%B7%E4%B8%8B%E6%89%8B%E4%BA%86%23) `84.9K 🔥` `NEW`
1. [江山大同](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%23) `78.6K 🔥` `NEW`
1. [氯雷他定三兄弟你分得清吗](https://s.weibo.com/weibo?q=%23%E6%B0%AF%E9%9B%B7%E4%BB%96%E5%AE%9A%E4%B8%89%E5%85%84%E5%BC%9F%E4%BD%A0%E5%88%86%E5%BE%97%E6%B8%85%E5%90%97%23) `77.5K 🔥` `NEW`
1. [从未忘记你们浴血护山河](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%9C%AA%E5%BF%98%E8%AE%B0%E4%BD%A0%E4%BB%AC%E6%B5%B4%E8%A1%80%E6%8A%A4%E5%B1%B1%E6%B2%B3%23) `77.0K 🔥` `NEW`
1. [全红婵体重变化原因](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E4%BD%93%E9%87%8D%E5%8F%98%E5%8C%96%E5%8E%9F%E5%9B%A0%23) `76.9K 🔥` `NEW`
1. [曝iPhoneFold将成史上最大改款](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhoneFold%E5%B0%86%E6%88%90%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7%E6%94%B9%E6%AC%BE%23) `76.4K 🔥` `NEW`
1. [杨瀚森NBA第一次技术犯规](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AENBA%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%8A%80%E6%9C%AF%E7%8A%AF%E8%A7%84%23) `71.6K 🔥` `NEW`
1. [仇人看到倪妮这段都释怀了](https://s.weibo.com/weibo?q=%23%E4%BB%87%E4%BA%BA%E7%9C%8B%E5%88%B0%E5%80%AA%E5%A6%AE%E8%BF%99%E6%AE%B5%E9%83%BD%E9%87%8A%E6%80%80%E4%BA%86%23) `70.9K 🔥` `NEW`
1. [猛龙31比0攻击波创纪录 (Raptors' 31-0 offensive wave set a record)](https://s.weibo.com/weibo?q=%23%E7%8C%9B%E9%BE%9931%E6%AF%940%E6%94%BB%E5%87%BB%E6%B3%A2%E5%88%9B%E7%BA%AA%E5%BD%95%23) `70.5K 🔥` `NEW`
1. [以色列总理称已改变中东面貌](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%90%86%E7%A7%B0%E5%B7%B2%E6%94%B9%E5%8F%98%E4%B8%AD%E4%B8%9C%E9%9D%A2%E8%B2%8C%23) `69.4K 🔥` `NEW`
1. [王者荣耀世界抢昵称](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%B8%96%E7%95%8C%E6%8A%A2%E6%98%B5%E7%A7%B0%23) `67.4K 🔥` `NEW`
1. [广州暴雨市民发声](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E6%9A%B4%E9%9B%A8%E5%B8%82%E6%B0%91%E5%8F%91%E5%A3%B0%23) `62.1K 🔥` `NEW`
1. [中立球员首夺WTT常挑冠军](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%AB%8B%E7%90%83%E5%91%98%E9%A6%96%E5%A4%BAWTT%E5%B8%B8%E6%8C%91%E5%86%A0%E5%86%9B%23) `61.2K 🔥` `NEW`
1. [2026中国网络媒体论坛 (2026 China Online Media Forum)](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AA%92%E4%BD%93%E8%AE%BA%E5%9D%9B%23) `634.9K 🔥` `+1418%`
1. [vivo X300 Ultra专业V单 (vivo X300 Ultra professional V single)](https://s.weibo.com/weibo?q=%23vivo%20X300%20Ultra%E4%B8%93%E4%B8%9AV%E5%8D%95%23) `465.1K 🔥` `+714%`
1. [全新QQ3上市王者归来一部到位 (The new QQ3 is launched and the first part of The Return of the King is in place)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0QQ3%E4%B8%8A%E5%B8%82%E7%8E%8B%E8%80%85%E5%BD%92%E6%9D%A5%E4%B8%80%E9%83%A8%E5%88%B0%E4%BD%8D%23) `270.3K 🔥` `+73%`
1. [薛之谦 (Joker Xue)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%23) `142.9K 🔥` `-71%`
1. [宋茜给了内娱十年时间](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%8C%9C%E7%BB%99%E4%BA%86%E5%86%85%E5%A8%B1%E5%8D%81%E5%B9%B4%E6%97%B6%E9%97%B4%23) `140.7K 🔥` `-50%`
1. [张雪机车去年亏损2278万](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%8E%BB%E5%B9%B4%E4%BA%8F%E6%8D%9F2278%E4%B8%87%23) `76.7K 🔥` `-73%`
1. [白鹿说范丞丞现在变了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AF%B4%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%8E%B0%E5%9C%A8%E5%8F%98%E4%BA%86%23) `61.9K 🔥` `-78%`

Updated at 2026-03-30 11:34:00

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
