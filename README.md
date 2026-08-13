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

1. [我国生态治理迈向新阶段 (my country's ecological governance enters a new stage)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%94%9F%E6%80%81%E6%B2%BB%E7%90%86%E8%BF%88%E5%90%91%E6%96%B0%E9%98%B6%E6%AE%B5%23) `588.6K 🔥` `NEW`
1. [小米澎湃OS4发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E6%B9%83OS4%E5%8F%91%E5%B8%83%23) `585.8K 🔥` `NEW`
1. [情侣懒得拍婚纱照交给豆包](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E6%87%92%E5%BE%97%E6%8B%8D%E5%A9%9A%E7%BA%B1%E7%85%A7%E4%BA%A4%E7%BB%99%E8%B1%86%E5%8C%85%23) `582.3K 🔥` `NEW`
1. [峰哥5000元请邹市明打一场](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A55000%E5%85%83%E8%AF%B7%E9%82%B9%E5%B8%82%E6%98%8E%E6%89%93%E4%B8%80%E5%9C%BA%23) `559.0K 🔥` `NEW`
1. [重罚台风请假员工公司多年0人参保](https://s.weibo.com/weibo?q=%23%E9%87%8D%E7%BD%9A%E5%8F%B0%E9%A3%8E%E8%AF%B7%E5%81%87%E5%91%98%E5%B7%A5%E5%85%AC%E5%8F%B8%E5%A4%9A%E5%B9%B40%E4%BA%BA%E5%8F%82%E4%BF%9D%23) `546.8K 🔥` `NEW`
1. [2026暑期最热cp](https://s.weibo.com/weibo?q=%232026%E6%9A%91%E6%9C%9F%E6%9C%80%E7%83%ADcp%23) `522.4K 🔥` `NEW`
1. [手机壳 偷拍](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%A3%B3%20%E5%81%B7%E6%8B%8D%23) `521.0K 🔥` `NEW`
1. [披荆斩棘](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%23) `408.9K 🔥` `NEW`
1. [章若楠被金靖穿搭可爱到受不了](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%A2%AB%E9%87%91%E9%9D%96%E7%A9%BF%E6%90%AD%E5%8F%AF%E7%88%B1%E5%88%B0%E5%8F%97%E4%B8%8D%E4%BA%86%23) `384.3K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `358.7K 🔥` `NEW`
1. [3孩非亲生妻子希望与丈夫一刀两断 (Wife with 3 non-biological children wants to break up with her husband)](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A6%BB%E5%AD%90%E5%B8%8C%E6%9C%9B%E4%B8%8E%E4%B8%88%E5%A4%AB%E4%B8%80%E5%88%80%E4%B8%A4%E6%96%AD%23) `355.1K 🔥` `NEW`
1. [TFBOYS的歌多少带点预言](https://s.weibo.com/weibo?q=%23TFBOYS%E7%9A%84%E6%AD%8C%E5%A4%9A%E5%B0%91%E5%B8%A6%E7%82%B9%E9%A2%84%E8%A8%80%23) `355.1K 🔥` `NEW`
1. [西班牙日全食](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E6%97%A5%E5%85%A8%E9%A3%9F%23) `340.4K 🔥` `NEW`
1. [独生子女父母陆续步入高龄](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E7%94%9F%E5%AD%90%E5%A5%B3%E7%88%B6%E6%AF%8D%E9%99%86%E7%BB%AD%E6%AD%A5%E5%85%A5%E9%AB%98%E9%BE%84%23) `335.9K 🔥` `NEW`
1. [沐言给姜潮麦迪娜撒花](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E7%BB%99%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E6%92%92%E8%8A%B1%23) `289.0K 🔥` `NEW`
1. [博主称胡锡进AI认知太低](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E7%A7%B0%E8%83%A1%E9%94%A1%E8%BF%9BAI%E8%AE%A4%E7%9F%A5%E5%A4%AA%E4%BD%8E%23) `265.2K 🔥` `NEW`
1. [梁家辉在人民日报撰文](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E5%9C%A8%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E6%92%B0%E6%96%87%23) `259.2K 🔥` `NEW`
1. [8万级SUV已经卷到这种程度了吗](https://s.weibo.com/weibo?q=%238%E4%B8%87%E7%BA%A7SUV%E5%B7%B2%E7%BB%8F%E5%8D%B7%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%E5%90%97%23) `249.3K 🔥` `NEW`
1. [TF四代五公](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%23) `243.1K 🔥` `NEW`
1. [为什么结婚少了离婚多了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%BB%93%E5%A9%9A%E5%B0%91%E4%BA%86%E7%A6%BB%E5%A9%9A%E5%A4%9A%E4%BA%86%23) `236.9K 🔥` `NEW`
1. [胖东来能搬小商户搬不动 (Fat Donglai can move small businesses, but he can't.)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%83%BD%E6%90%AC%E5%B0%8F%E5%95%86%E6%88%B7%E6%90%AC%E4%B8%8D%E5%8A%A8%23) `231.7K 🔥` `NEW`
1. [色情网站卖偷拍设备称可返现](https://s.weibo.com/weibo?q=%23%E8%89%B2%E6%83%85%E7%BD%91%E7%AB%99%E5%8D%96%E5%81%B7%E6%8B%8D%E8%AE%BE%E5%A4%87%E7%A7%B0%E5%8F%AF%E8%BF%94%E7%8E%B0%23) `226.9K 🔥` `NEW`
1. [胡先煦好结实的身材](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E5%A5%BD%E7%BB%93%E5%AE%9E%E7%9A%84%E8%BA%AB%E6%9D%90%23) `224.2K 🔥` `NEW`
1. [国际左撇子日](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E5%B7%A6%E6%92%87%E5%AD%90%E6%97%A5%23) `217.8K 🔥` `NEW`
1. [九门](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `217.0K 🔥` `NEW`
1. [贺涵怎么跑爱丁堡去了](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%B6%B5%E6%80%8E%E4%B9%88%E8%B7%91%E7%88%B1%E4%B8%81%E5%A0%A1%E5%8E%BB%E4%BA%86%23) `216.6K 🔥` `NEW`
1. [部门回应炸鸡店后厨员工掏裤裆后夹餐](https://s.weibo.com/weibo?q=%23%E9%83%A8%E9%97%A8%E5%9B%9E%E5%BA%94%E7%82%B8%E9%B8%A1%E5%BA%97%E5%90%8E%E5%8E%A8%E5%91%98%E5%B7%A5%E6%8E%8F%E8%A3%A4%E8%A3%86%E5%90%8E%E5%A4%B9%E9%A4%90%23) `215.0K 🔥` `NEW`
1. [男子南太行山徒步失联最新发现](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%97%E5%A4%AA%E8%A1%8C%E5%B1%B1%E5%BE%92%E6%AD%A5%E5%A4%B1%E8%81%94%E6%9C%80%E6%96%B0%E5%8F%91%E7%8E%B0%23) `213.9K 🔥` `NEW`
1. [女子称穿一次性内裤走路时脱落](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E7%A9%BF%E4%B8%80%E6%AC%A1%E6%80%A7%E5%86%85%E8%A3%A4%E8%B5%B0%E8%B7%AF%E6%97%B6%E8%84%B1%E8%90%BD%23) `211.9K 🔥` `NEW`
1. [曝张凌赫孙千刺棠领衔主演](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AD%99%E5%8D%83%E5%88%BA%E6%A3%A0%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%23) `194.1K 🔥` `NEW`
1. [小米新折叠屏手机曝光 (Xiaomi’s new foldable screen phone revealed)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0%E6%8A%98%E5%8F%A0%E5%B1%8F%E6%89%8B%E6%9C%BA%E6%9B%9D%E5%85%89%23) `192.5K 🔥` `NEW`
1. [Wenbo或重返BLG首发](https://s.weibo.com/weibo?q=%23Wenbo%E6%88%96%E9%87%8D%E8%BF%94BLG%E9%A6%96%E5%8F%91%23) `186.8K 🔥` `NEW`
1. [网传英伟达欲投资中际旭创新易盛](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%AC%B2%E6%8A%95%E8%B5%84%E4%B8%AD%E9%99%85%E6%97%AD%E5%88%9B%E6%96%B0%E6%98%93%E7%9B%9B%23) `161.0K 🔥` `NEW`
1. [那英坚持普拉提快10年了](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%9D%9A%E6%8C%81%E6%99%AE%E6%8B%89%E6%8F%90%E5%BF%AB10%E5%B9%B4%E4%BA%86%23) `124.8K 🔥` `NEW`
1. [檀健次谢却山究竟有多少神图](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E8%B0%A2%E5%8D%B4%E5%B1%B1%E7%A9%B6%E7%AB%9F%E6%9C%89%E5%A4%9A%E5%B0%91%E7%A5%9E%E5%9B%BE%23) `124.8K 🔥` `NEW`
1. [胖东来许昌老店关闭周边商户发声 (Fat Dong Lai’s old store in Xuchang closes surrounding businesses to speak out)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%AE%B8%E6%98%8C%E8%80%81%E5%BA%97%E5%85%B3%E9%97%AD%E5%91%A8%E8%BE%B9%E5%95%86%E6%88%B7%E5%8F%91%E5%A3%B0%23) `724.9K 🔥` `+28%`
1. [姜潮麦迪娜新疆婚礼含金量太高了 (Jiang Chao Medina’s wedding in Xinjiang is too valuable)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E6%96%B0%E7%96%86%E5%A9%9A%E7%A4%BC%E5%90%AB%E9%87%91%E9%87%8F%E5%A4%AA%E9%AB%98%E4%BA%86%23) `370.6K 🔥` `+87%`
1. [艾米给邓为喂了什么](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E7%BB%99%E9%82%93%E4%B8%BA%E5%96%82%E4%BA%86%E4%BB%80%E4%B9%88%23) `348.3K 🔥` `+112%`
1. [升学宴35桌无人上桌 (No one served at table 35 of the entrance banquet)](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B435%E6%A1%8C%E6%97%A0%E4%BA%BA%E4%B8%8A%E6%A1%8C%23) `334.8K 🔥` `+31%`
1. [阚清子开机照戴了浪姐队戒](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%BC%80%E6%9C%BA%E7%85%A7%E6%88%B4%E4%BA%86%E6%B5%AA%E5%A7%90%E9%98%9F%E6%88%92%23) `261.1K 🔥` `+45%`
1. [小猫约架带家长还打不过](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%BA%A6%E6%9E%B6%E5%B8%A6%E5%AE%B6%E9%95%BF%E8%BF%98%E6%89%93%E4%B8%8D%E8%BF%87%23) `222.5K 🔥` `+32%`
1. [长期血糖失控可能会经历什么](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E8%A1%80%E7%B3%96%E5%A4%B1%E6%8E%A7%E5%8F%AF%E8%83%BD%E4%BC%9A%E7%BB%8F%E5%8E%86%E4%BB%80%E4%B9%88%23) `204.6K 🔥` `+23%`
1. [朱镕基同志逝世 (Comrade Zhu Rongji passed away)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `1.0M 🔥`
1. [骑行辅警被刺死其父亲发声](https://s.weibo.com/weibo?q=%23%E9%AA%91%E8%A1%8C%E8%BE%85%E8%AD%A6%E8%A2%AB%E5%88%BA%E6%AD%BB%E5%85%B6%E7%88%B6%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `379.7K 🔥`
1. [刘晓庆 女帝和她的将相 (Liu Xiaoqing The Empress and Her Generals)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%86%20%E5%A5%B3%E5%B8%9D%E5%92%8C%E5%A5%B9%E7%9A%84%E5%B0%86%E7%9B%B8%23) `373.8K 🔥`
1. [比Lululemon还贵的瑜伽服来中国了 (Yoga clothes more expensive than Lululemon are coming to China)](https://s.weibo.com/weibo?q=%23%E6%AF%94Lululemon%E8%BF%98%E8%B4%B5%E7%9A%84%E7%91%9C%E4%BC%BD%E6%9C%8D%E6%9D%A5%E4%B8%AD%E5%9B%BD%E4%BA%86%23) `361.2K 🔥`
1. [卢伟冰官宣小米澎湃OS4](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E4%BC%9F%E5%86%B0%E5%AE%98%E5%AE%A3%E5%B0%8F%E7%B1%B3%E6%BE%8E%E6%B9%83OS4%23) `202.3K 🔥`
1. [邹市明45岁重返拳击赛场 (Zou Shiming returns to boxing at the age of 45)](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E45%E5%B2%81%E9%87%8D%E8%BF%94%E6%8B%B3%E5%87%BB%E8%B5%9B%E5%9C%BA%23) `306.2K 🔥` `-64%`
1. [曝曾辉送考人不是韩雨彤了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9B%BE%E8%BE%89%E9%80%81%E8%80%83%E4%BA%BA%E4%B8%8D%E6%98%AF%E9%9F%A9%E9%9B%A8%E5%BD%A4%E4%BA%86%23) `299.3K 🔥` `-22%`
1. [金价油价全涨了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%B2%B9%E4%BB%B7%E5%85%A8%E6%B6%A8%E4%BA%86%23) `248.3K 🔥` `-47%`
1. [男子分手十多年想要回30克金手镯](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%88%86%E6%89%8B%E5%8D%81%E5%A4%9A%E5%B9%B4%E6%83%B3%E8%A6%81%E5%9B%9E30%E5%85%8B%E9%87%91%E6%89%8B%E9%95%AF%23) `213.8K 🔥` `-58%`

Updated at 2026-08-13 13:12:53

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
