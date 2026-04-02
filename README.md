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

1. [乘风直播节奏好慢 (Chengfeng live broadcast is so slow)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E7%9B%B4%E6%92%AD%E8%8A%82%E5%A5%8F%E5%A5%BD%E6%85%A2%23) `1.1M 🔥` `NEW`
1. [与辉同行致歉](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E8%BE%89%E5%90%8C%E8%A1%8C%E8%87%B4%E6%AD%89%23) `837.4K 🔥` `NEW`
1. [多城实施住房公积金新政](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9F%8E%E5%AE%9E%E6%96%BD%E4%BD%8F%E6%88%BF%E5%85%AC%E7%A7%AF%E9%87%91%E6%96%B0%E6%94%BF%23) `666.5K 🔥` `NEW`
1. [张天爱变样了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A9%E7%88%B1%E5%8F%98%E6%A0%B7%E4%BA%86%23) `647.3K 🔥` `NEW`
1. [伊朗航空航天部队司令巡视地下导弹基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%88%AA%E7%A9%BA%E8%88%AA%E5%A4%A9%E9%83%A8%E9%98%9F%E5%8F%B8%E4%BB%A4%E5%B7%A1%E8%A7%86%E5%9C%B0%E4%B8%8B%E5%AF%BC%E5%BC%B9%E5%9F%BA%E5%9C%B0%23) `240.9K 🔥` `NEW`
1. [博主嘴唇发紫粉丝隔空诊出心脏病](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E5%98%B4%E5%94%87%E5%8F%91%E7%B4%AB%E7%B2%89%E4%B8%9D%E9%9A%94%E7%A9%BA%E8%AF%8A%E5%87%BA%E5%BF%83%E8%84%8F%E7%97%85%23) `169.2K 🔥` `NEW`
1. [孙颖莎2比7落后完成逆转](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E2%E6%AF%947%E8%90%BD%E5%90%8E%E5%AE%8C%E6%88%90%E9%80%86%E8%BD%AC%23) `153.7K 🔥` `NEW`
1. [美国头大了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%B4%E5%A4%A7%E4%BA%86%23) `141.0K 🔥` `NEW`
1. [王俊凯送考徐洁儿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%80%81%E8%80%83%E5%BE%90%E6%B4%81%E5%84%BF%23) `140.8K 🔥` `NEW`
1. [黄灿灿问范玮琪有版权吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E9%97%AE%E8%8C%83%E7%8E%AE%E7%90%AA%E6%9C%89%E7%89%88%E6%9D%83%E5%90%97%23) `140.5K 🔥` `NEW`
1. [伊朗袭击美军隐秘据点致37人死亡 (Iran attacks secret military base, killing 37)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E7%BE%8E%E5%86%9B%E9%9A%90%E7%A7%98%E6%8D%AE%E7%82%B9%E8%87%B437%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `140.4K 🔥` `NEW`
1. [佛山鸡煲太火爆老板开小号黑自己](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%B1%B1%E9%B8%A1%E7%85%B2%E5%A4%AA%E7%81%AB%E7%88%86%E8%80%81%E6%9D%BF%E5%BC%80%E5%B0%8F%E5%8F%B7%E9%BB%91%E8%87%AA%E5%B7%B1%23) `140.3K 🔥` `NEW`
1. [特朗普说宴会厅都建不了算什么国王](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E5%AE%B4%E4%BC%9A%E5%8E%85%E9%83%BD%E5%BB%BA%E4%B8%8D%E4%BA%86%E7%AE%97%E4%BB%80%E4%B9%88%E5%9B%BD%E7%8E%8B%23) `130.1K 🔥` `NEW`
1. [金价持续大蹦极](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%8C%81%E7%BB%AD%E5%A4%A7%E8%B9%A6%E6%9E%81%23) `122.7K 🔥` `NEW`
1. [陈妍希方致歉](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%96%B9%E8%87%B4%E6%AD%89%23) `120.2K 🔥` `NEW`
1. [白鹿素颜做饭自拍](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%B4%A0%E9%A2%9C%E5%81%9A%E9%A5%AD%E8%87%AA%E6%8B%8D%23) `117.2K 🔥` `NEW`
1. [阿瑟不卖的时候反耳嗑到了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%91%9F%E4%B8%8D%E5%8D%96%E7%9A%84%E6%97%B6%E5%80%99%E5%8F%8D%E8%80%B3%E5%97%91%E5%88%B0%E4%BA%86%23) `114.0K 🔥` `NEW`
1. [KSG对战DYG](https://s.weibo.com/weibo?q=%23KSG%E5%AF%B9%E6%88%98DYG%23) `113.7K 🔥` `NEW`
1. [王艺迪vs张本美和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AAvs%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `110.1K 🔥` `NEW`
1. [乘风直播时长](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E7%9B%B4%E6%92%AD%E6%97%B6%E9%95%BF%23) `101.9K 🔥` `NEW`
1. [发明这个咖啡喝法的简直是天才 (Whoever invented this way of drinking coffee is a genius.)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%98%8E%E8%BF%99%E4%B8%AA%E5%92%96%E5%95%A1%E5%96%9D%E6%B3%95%E7%9A%84%E7%AE%80%E7%9B%B4%E6%98%AF%E5%A4%A9%E6%89%8D%23) `97.7K 🔥` `NEW`
1. [汉堡店踢踹4岁女孩女子已道歉](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A0%A1%E5%BA%97%E8%B8%A2%E8%B8%B94%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%A5%B3%E5%AD%90%E5%B7%B2%E9%81%93%E6%AD%89%23) `86.4K 🔥` `NEW`
1. [小猫会自己打开小床晒太阳](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%BC%9A%E8%87%AA%E5%B7%B1%E6%89%93%E5%BC%80%E5%B0%8F%E5%BA%8A%E6%99%92%E5%A4%AA%E9%98%B3%23) `84.7K 🔥` `NEW`
1. [曾沛慈好高](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%A5%BD%E9%AB%98%23) `81.9K 🔥` `NEW`
1. [李若彤与辉同行等要为优思益担责吗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8B%A5%E5%BD%A4%E4%B8%8E%E8%BE%89%E5%90%8C%E8%A1%8C%E7%AD%89%E8%A6%81%E4%B8%BA%E4%BC%98%E6%80%9D%E7%9B%8A%E6%8B%85%E8%B4%A3%E5%90%97%23) `79.7K 🔥` `NEW`
1. [理想比亚迪车主斗气致小米车主撞伤](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E6%AF%94%E4%BA%9A%E8%BF%AA%E8%BD%A6%E4%B8%BB%E6%96%97%E6%B0%94%E8%87%B4%E5%B0%8F%E7%B1%B3%E8%BD%A6%E4%B8%BB%E6%92%9E%E4%BC%A4%23) `79.7K 🔥` `NEW`
1. [李小冉谢娜王鸥闺蜜组](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%B0%A2%E5%A8%9C%E7%8E%8B%E9%B8%A5%E9%97%BA%E8%9C%9C%E7%BB%84%23) `79.7K 🔥` `NEW`
1. [曝TOP5大厂有两家在接洽豆包](https://s.weibo.com/weibo?q=%23%E6%9B%9DTOP5%E5%A4%A7%E5%8E%82%E6%9C%89%E4%B8%A4%E5%AE%B6%E5%9C%A8%E6%8E%A5%E6%B4%BD%E8%B1%86%E5%8C%85%23) `79.7K 🔥` `NEW`
1. [王濛 浪姐直播太磨叽了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%E5%A4%AA%E7%A3%A8%E5%8F%BD%E4%BA%86%23) `79.7K 🔥` `NEW`
1. [女子20万买170g金条藏豆瓣酱里](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%9020%E4%B8%87%E4%B9%B0170g%E9%87%91%E6%9D%A1%E8%97%8F%E8%B1%86%E7%93%A3%E9%85%B1%E9%87%8C%23) `79.7K 🔥` `NEW`
1. [谢娜控场能力 (Xie Na's field control ability)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%8E%A7%E5%9C%BA%E8%83%BD%E5%8A%9B%23) `239.6K 🔥` `+169%`
1. [TF塑光T气垫发布会](https://s.weibo.com/weibo?q=%23TF%E5%A1%91%E5%85%89T%E6%B0%94%E5%9E%AB%E5%8F%91%E5%B8%83%E4%BC%9A%23) `233.6K 🔥` `+26%`
1. [刘亦菲几乎没有法令纹](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%87%A0%E4%B9%8E%E6%B2%A1%E6%9C%89%E6%B3%95%E4%BB%A4%E7%BA%B9%23) `140.3K 🔥` `+32%`
1. [华为畅享90满电奔赴 (Huawei Enjoys 90% Charge on the Road)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E7%95%85%E4%BA%AB90%E6%BB%A1%E7%94%B5%E5%A5%94%E8%B5%B4%23) `666.3K 🔥`
1. [女子赠侄子旧手机致出轨照外泄](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B5%A0%E4%BE%84%E5%AD%90%E6%97%A7%E6%89%8B%E6%9C%BA%E8%87%B4%E5%87%BA%E8%BD%A8%E7%85%A7%E5%A4%96%E6%B3%84%23) `140.7K 🔥`
1. [夏克立回应再婚生女](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%85%8B%E7%AB%8B%E5%9B%9E%E5%BA%94%E5%86%8D%E5%A9%9A%E7%94%9F%E5%A5%B3%23) `124.8K 🔥`
1. [老式水果为什么消失了](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%BC%8F%E6%B0%B4%E6%9E%9C%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B6%88%E5%A4%B1%E4%BA%86%23) `116.0K 🔥`
1. [以色列遭到开战以来最大规模导弹袭击](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%81%AD%E5%88%B0%E5%BC%80%E6%88%98%E4%BB%A5%E6%9D%A5%E6%9C%80%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `86.2K 🔥`
1. [三部门约谈抖音淘天小红书 (Three departments interviewed Douyin, Taotian and Xiaohongshu)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%83%A8%E9%97%A8%E7%BA%A6%E8%B0%88%E6%8A%96%E9%9F%B3%E6%B7%98%E5%A4%A9%E5%B0%8F%E7%BA%A2%E4%B9%A6%23) `228.2K 🔥` `-79%`
1. [迪丽热巴 古偶](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E5%8F%A4%E5%81%B6%23) `140.9K 🔥` `-71%`
1. [李荣浩方否认恋人抄袭 (Li Ronghao denies plagiarism by his lover)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%96%B9%E5%90%A6%E8%AE%A4%E6%81%8B%E4%BA%BA%E6%8A%84%E8%A2%AD%23) `135.1K 🔥` `-36%`
1. [iPhone18Pro模具偷跑](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%A8%A1%E5%85%B7%E5%81%B7%E8%B7%91%23) `132.2K 🔥` `-38%`
1. [张元英下巴](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E4%B8%8B%E5%B7%B4%23) `128.8K 🔥` `-30%`
1. [女子104000元买80g金条店员报警 (Woman bought 80g gold bar for 104,000 yuan and store clerk called the police)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90104000%E5%85%83%E4%B9%B080g%E9%87%91%E6%9D%A1%E5%BA%97%E5%91%98%E6%8A%A5%E8%AD%A6%23) `93.7K 🔥` `-49%`
1. [孙颖莎蒯曼都更换球衣 (Sun Yingsha and Kuai Mandu change their jerseys)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%92%AF%E6%9B%BC%E9%83%BD%E6%9B%B4%E6%8D%A2%E7%90%83%E8%A1%A3%23) `91.3K 🔥` `-23%`
1. [已吃两瓶优思益消费者发声 (Consumers who have eaten two bottles of Usiyi speak out)](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E5%90%83%E4%B8%A4%E7%93%B6%E4%BC%98%E6%80%9D%E7%9B%8A%E6%B6%88%E8%B4%B9%E8%80%85%E5%8F%91%E5%A3%B0%23) `90.7K 🔥` `-57%`
1. [乘风初见面直播](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E5%88%9D%E8%A7%81%E9%9D%A2%E7%9B%B4%E6%92%AD%23) `89.2K 🔥` `-81%`
1. [你好1983结局](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%E7%BB%93%E5%B1%80%23) `83.6K 🔥` `-63%`
1. [被时代淘汰的水果 (Fruits that have been eliminated by the times)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%97%B6%E4%BB%A3%E6%B7%98%E6%B1%B0%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `79.9K 🔥` `-61%`
1. [魏晨 老辈子就是会疼人](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%20%E8%80%81%E8%BE%88%E5%AD%90%E5%B0%B1%E6%98%AF%E4%BC%9A%E7%96%BC%E4%BA%BA%23) `79.7K 🔥` `-38%`
1. [离职守恒定律 (Conservation law of turnover)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E5%AE%88%E6%81%92%E5%AE%9A%E5%BE%8B%23) `79.7K 🔥` `-62%`
1. [王安宇 宽肩窄腰](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%20%E5%AE%BD%E8%82%A9%E7%AA%84%E8%85%B0%23) `79.7K 🔥` `-27%`

Updated at 2026-04-02 21:57:30

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
