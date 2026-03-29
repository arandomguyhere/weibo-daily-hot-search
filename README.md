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

1. [郑州中小学4月放3天春假为谣言 (Zhengzhou primary and secondary schools will have three days of spring break in April as a rumor)](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E4%B8%AD%E5%B0%8F%E5%AD%A64%E6%9C%88%E6%94%BE3%E5%A4%A9%E6%98%A5%E5%81%87%E4%B8%BA%E8%B0%A3%E8%A8%80%23) `443.6K 🔥` `NEW`
1. [伊朗反向威胁美方](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%8D%E5%90%91%E5%A8%81%E8%83%81%E7%BE%8E%E6%96%B9%23) `437.4K 🔥` `NEW`
1. [以色列一工业区因伊朗导弹袭击起火](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%80%E5%B7%A5%E4%B8%9A%E5%8C%BA%E5%9B%A0%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E8%B5%B7%E7%81%AB%23) `437.3K 🔥` `NEW`
1. [蔡依林演唱会](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E6%BC%94%E5%94%B1%E4%BC%9A%23) `437.3K 🔥` `NEW`
1. [DOTA2](https://s.weibo.com/weibo?q=%23DOTA2%23) `436.8K 🔥` `NEW`
1. [伊发动第86波攻势](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%8F%91%E5%8A%A8%E7%AC%AC86%E6%B3%A2%E6%94%BB%E5%8A%BF%23) `436.4K 🔥` `NEW`
1. [报告称我国不孕不育夫妇将逐年增加 (The report states that the number of infertile couples in my country will increase year by year.)](https://s.weibo.com/weibo?q=%23%E6%8A%A5%E5%91%8A%E7%A7%B0%E6%88%91%E5%9B%BD%E4%B8%8D%E5%AD%95%E4%B8%8D%E8%82%B2%E5%A4%AB%E5%A6%87%E5%B0%86%E9%80%90%E5%B9%B4%E5%A2%9E%E5%8A%A0%23) `609.1K 🔥` `-26%`
1. [张雪机车夺冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%23) `445.6K 🔥` `-49%`
1. [2026中国网络媒体论坛](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AA%92%E4%BD%93%E8%AE%BA%E5%9D%9B%23) `445.3K 🔥` `-49%`
1. [凌晨3点孩子等家长睡熟偷平板玩](https://s.weibo.com/weibo?q=%23%E5%87%8C%E6%99%A83%E7%82%B9%E5%AD%A9%E5%AD%90%E7%AD%89%E5%AE%B6%E9%95%BF%E7%9D%A1%E7%86%9F%E5%81%B7%E5%B9%B3%E6%9D%BF%E7%8E%A9%23) `445.1K 🔥` `-48%`
1. [以色列还能撑多久](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%BF%98%E8%83%BD%E6%92%91%E5%A4%9A%E4%B9%85%23) `444.4K 🔥` `-47%`
1. [白桃星座一周运势 (Weekly horoscope for Baitao zodiac sign)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%E4%B8%80%E5%91%A8%E8%BF%90%E5%8A%BF%23) `443.9K 🔥` `-47%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `443.3K 🔥` `-48%`
1. [伊朗向美以进一步摊牌](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%91%E7%BE%8E%E4%BB%A5%E8%BF%9B%E4%B8%80%E6%AD%A5%E6%91%8A%E7%89%8C%23) `442.8K 🔥` `-47%`
1. [中国将在长江水下开高铁 (China plans to build high-speed rail under water in the Yangtze River)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%86%E5%9C%A8%E9%95%BF%E6%B1%9F%E6%B0%B4%E4%B8%8B%E5%BC%80%E9%AB%98%E9%93%81%23) `442.2K 🔥` `-49%`
1. [迪丽热巴什么时候原谅现偶](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%23) `441.9K 🔥` `-28%`
1. [李荣浩4连质问单依纯](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A94%E8%BF%9E%E8%B4%A8%E9%97%AE%E5%8D%95%E4%BE%9D%E7%BA%AF%23) `441.4K 🔥` `-46%`
1. [DeepSeek崩了](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B4%A9%E4%BA%86%23) `440.9K 🔥` `-49%`
1. [薛之谦](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%23) `440.6K 🔥` `-28%`
1. [田曦薇被裙子勒成这样](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%A2%AB%E8%A3%99%E5%AD%90%E5%8B%92%E6%88%90%E8%BF%99%E6%A0%B7%23) `439.8K 🔥` `-28%`
1. [美海军第五舰队设施遭精准打击](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%B5%B7%E5%86%9B%E7%AC%AC%E4%BA%94%E8%88%B0%E9%98%9F%E8%AE%BE%E6%96%BD%E9%81%AD%E7%B2%BE%E5%87%86%E6%89%93%E5%87%BB%23) `439.4K 🔥` `-24%`
1. [时代峰峻否认网传聊天记录](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%90%A6%E8%AE%A4%E7%BD%91%E4%BC%A0%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `438.8K 🔥` `-46%`
1. [单依纯 舞娘 (Shan Yichun Dancer)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E8%88%9E%E5%A8%98%23) `438.2K 🔥` `-28%`
1. [狼队让三追四](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E8%AE%A9%E4%B8%89%E8%BF%BD%E5%9B%9B%23) `438.0K 🔥` `-44%`
1. [薛之谦因为下雨退票](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%9B%A0%E4%B8%BA%E4%B8%8B%E9%9B%A8%E9%80%80%E7%A5%A8%23) `437.6K 🔥` `-43%`
1. [亚洲3国与伊朗达成协议](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%B4%B23%E5%9B%BD%E4%B8%8E%E4%BC%8A%E6%9C%97%E8%BE%BE%E6%88%90%E5%8D%8F%E8%AE%AE%23) `437.6K 🔥` `-29%`
1. [张凌赫摄影师 撕拉片不是P的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%91%84%E5%BD%B1%E5%B8%88%20%E6%92%95%E6%8B%89%E7%89%87%E4%B8%8D%E6%98%AFP%E7%9A%84%23) `437.5K 🔥` `-28%`
1. [严浩翔分享歌曲](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%88%86%E4%BA%AB%E6%AD%8C%E6%9B%B2%23) `437.5K 🔥` `-28%`
1. [迪丽热巴演技](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%BC%94%E6%8A%80%23) `437.4K 🔥` `-27%`
1. [田曦薇拍青天大老爷手势舞](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%8B%8D%E9%9D%92%E5%A4%A9%E5%A4%A7%E8%80%81%E7%88%B7%E6%89%8B%E5%8A%BF%E8%88%9E%23) `437.3K 🔥` `-27%`
1. [女生举报老师性骚扰失败状告公安机关](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E4%B8%BE%E6%8A%A5%E8%80%81%E5%B8%88%E6%80%A7%E9%AA%9A%E6%89%B0%E5%A4%B1%E8%B4%A5%E7%8A%B6%E5%91%8A%E5%85%AC%E5%AE%89%E6%9C%BA%E5%85%B3%23) `437.2K 🔥` `-27%`
1. [儿子一家去世老人骑行30年治愈自己](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E4%B8%80%E5%AE%B6%E5%8E%BB%E4%B8%96%E8%80%81%E4%BA%BA%E9%AA%91%E8%A1%8C30%E5%B9%B4%E6%B2%BB%E6%84%88%E8%87%AA%E5%B7%B1%23) `437.2K 🔥` `-27%`
1. [九寨沟震后首次实拍到野生大熊猫活体 (Wild giant pandas photographed alive for first time after Jiuzhaigou earthquake)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E9%9C%87%E5%90%8E%E9%A6%96%E6%AC%A1%E5%AE%9E%E6%8B%8D%E5%88%B0%E9%87%8E%E7%94%9F%E5%A4%A7%E7%86%8A%E7%8C%AB%E6%B4%BB%E4%BD%93%23) `437.1K 🔥` `-25%`
1. [胡塞武装为何此时介入美以伊战局](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%A1%9E%E6%AD%A6%E8%A3%85%E4%B8%BA%E4%BD%95%E6%AD%A4%E6%97%B6%E4%BB%8B%E5%85%A5%E7%BE%8E%E4%BB%A5%E4%BC%8A%E6%88%98%E5%B1%80%23) `437.1K 🔥` `-25%`
1. [檀健次美甲](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%BE%8E%E7%94%B2%23) `437.1K 🔥` `-27%`
1. [北京偶遇宋亚轩贺峻霖](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%81%B6%E9%81%87%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%B4%BA%E5%B3%BB%E9%9C%96%23) `437.0K 🔥` `-26%`
1. [狼队对战KSG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98KSG%23) `437.0K 🔥` `-26%`
1. [汪苏泷巡演](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%B7%A1%E6%BC%94%23) `437.0K 🔥` `-26%`
1. [带状疱疹72小时内一定要做这件事](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E7%8A%B6%E7%96%B1%E7%96%B972%E5%B0%8F%E6%97%B6%E5%86%85%E4%B8%80%E5%AE%9A%E8%A6%81%E5%81%9A%E8%BF%99%E4%BB%B6%E4%BA%8B%23) `436.9K 🔥` `-25%`
1. [美军两栖攻击舰抵达中东 (US amphibious assault ship arrives in the Middle East)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E4%B8%A4%E6%A0%96%E6%94%BB%E5%87%BB%E8%88%B0%E6%8A%B5%E8%BE%BE%E4%B8%AD%E4%B8%9C%23) `436.9K 🔥` `-26%`
1. [桃黑黑再次预言热巴新剧](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%86%8D%E6%AC%A1%E9%A2%84%E8%A8%80%E7%83%AD%E5%B7%B4%E6%96%B0%E5%89%A7%23) `436.8K 🔥` `-22%`
1. [雀巢12吨巧克力被盗 (12 tons of Nestlé chocolate stolen)](https://s.weibo.com/weibo?q=%23%E9%9B%80%E5%B7%A212%E5%90%A8%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%A2%AB%E7%9B%97%23) `436.7K 🔥` `-28%`
1. [孙颖莎瘦了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%98%A6%E4%BA%86%23) `436.7K 🔥` `-25%`
1. [Breathe加入iG](https://s.weibo.com/weibo?q=%23Breathe%E5%8A%A0%E5%85%A5iG%23) `436.7K 🔥` `-25%`
1. [仙逆 (Immortal Ni)](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `436.6K 🔥` `-23%`
1. [KPL十年第四次让三追四](https://s.weibo.com/weibo?q=%23KPL%E5%8D%81%E5%B9%B4%E7%AC%AC%E5%9B%9B%E6%AC%A1%E8%AE%A9%E4%B8%89%E8%BF%BD%E5%9B%9B%23) `436.6K 🔥` `-27%`
1. [白鹿入夏ccd](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%85%A5%E5%A4%8Fccd%23) `436.5K 🔥` `-23%`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `436.5K 🔥` `-25%`
1. [至少要上三年班才会变成会上班的人](https://s.weibo.com/weibo?q=%23%E8%87%B3%E5%B0%91%E8%A6%81%E4%B8%8A%E4%B8%89%E5%B9%B4%E7%8F%AD%E6%89%8D%E4%BC%9A%E5%8F%98%E6%88%90%E4%BC%9A%E4%B8%8A%E7%8F%AD%E7%9A%84%E4%BA%BA%23) `436.4K 🔥` `-23%`
1. [美国洛杉矶示威现场画面曝光 (Footage of demonstration scene in Los Angeles, USA exposed)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%B4%9B%E6%9D%89%E7%9F%B6%E7%A4%BA%E5%A8%81%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `436.4K 🔥` `-24%`
1. [车企已卷至日供29元](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BC%81%E5%B7%B2%E5%8D%B7%E8%87%B3%E6%97%A5%E4%BE%9B29%E5%85%83%23) `436.3K 🔥` `-24%`

Updated at 2026-03-30 00:58:20

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
