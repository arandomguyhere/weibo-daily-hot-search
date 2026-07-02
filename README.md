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

1. [C罗8场世界杯淘汰赛0球0助 (Cristiano Ronaldo has 0 goals and 0 assists in 8 World Cup knockout games)](https://s.weibo.com/weibo?q=%23C%E7%BD%978%E5%9C%BA%E4%B8%96%E7%95%8C%E6%9D%AF%E6%B7%98%E6%B1%B0%E8%B5%9B0%E7%90%830%E5%8A%A9%23) `813.8K 🔥` `NEW`
1. [白鹿方回应喝茶替身](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B9%E5%9B%9E%E5%BA%94%E5%96%9D%E8%8C%B6%E6%9B%BF%E8%BA%AB%23) `695.9K 🔥` `NEW`
1. [网传歌手二补阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%AD%8C%E6%89%8B%E4%BA%8C%E8%A1%A5%E9%98%B5%E5%AE%B9%23) `515.9K 🔥` `NEW`
1. [突然发现普通家庭没教社会化](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%99%AE%E9%80%9A%E5%AE%B6%E5%BA%AD%E6%B2%A1%E6%95%99%E7%A4%BE%E4%BC%9A%E5%8C%96%23) `512.4K 🔥` `NEW`
1. [央视见证奕境首测华为乾崑ADS5](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%A7%81%E8%AF%81%E5%A5%95%E5%A2%83%E9%A6%96%E6%B5%8B%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91ADS5%23) `510.8K 🔥` `NEW`
1. [西安赛格称坠楼商户违约套券606万](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E8%B5%9B%E6%A0%BC%E7%A7%B0%E5%9D%A0%E6%A5%BC%E5%95%86%E6%88%B7%E8%BF%9D%E7%BA%A6%E5%A5%97%E5%88%B8606%E4%B8%87%23) `503.6K 🔥` `NEW`
1. [范志毅精准命中荷兰德国出局](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%BF%97%E6%AF%85%E7%B2%BE%E5%87%86%E5%91%BD%E4%B8%AD%E8%8D%B7%E5%85%B0%E5%BE%B7%E5%9B%BD%E5%87%BA%E5%B1%80%23) `500.3K 🔥` `NEW`
1. [公职人员被指拒付525万工程欠款](https://s.weibo.com/weibo?q=%23%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E8%A2%AB%E6%8C%87%E6%8B%92%E4%BB%98525%E4%B8%87%E5%B7%A5%E7%A8%8B%E6%AC%A0%E6%AC%BE%23) `478.6K 🔥` `NEW`
1. [田曦薇Gucci全球广待遇](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87Gucci%E5%85%A8%E7%90%83%E5%B9%BF%E5%BE%85%E9%81%87%23) `469.3K 🔥` `NEW`
1. [曝流量小花拒搭档W姓男星](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B5%81%E9%87%8F%E5%B0%8F%E8%8A%B1%E6%8B%92%E6%90%AD%E6%A1%A3W%E5%A7%93%E7%94%B7%E6%98%9F%23) `446.7K 🔥` `NEW`
1. [姆巴佩的脸怎么了 (What happened to Mbappe’s face?)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%9A%84%E8%84%B8%E6%80%8E%E4%B9%88%E4%BA%86%23) `444.8K 🔥` `NEW`
1. [王橹杰陈浚铭排名第一](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%99%88%E6%B5%9A%E9%93%AD%E6%8E%92%E5%90%8D%E7%AC%AC%E4%B8%80%23) `444.8K 🔥` `NEW`
1. [男子不掀马桶圈妻子跟擦10年后崩溃](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8D%E6%8E%80%E9%A9%AC%E6%A1%B6%E5%9C%88%E5%A6%BB%E5%AD%90%E8%B7%9F%E6%93%A610%E5%B9%B4%E5%90%8E%E5%B4%A9%E6%BA%83%23) `395.6K 🔥` `NEW`
1. [厄尔尼诺升级了](https://s.weibo.com/weibo?q=%23%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E5%8D%87%E7%BA%A7%E4%BA%86%23) `357.5K 🔥` `NEW`
1. [中国男篮12人大名单](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE12%E4%BA%BA%E5%A4%A7%E5%90%8D%E5%8D%95%23) `346.5K 🔥` `NEW`
1. [白鹿替身花絮外泄三类人涉嫌侵权](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9B%BF%E8%BA%AB%E8%8A%B1%E7%B5%AE%E5%A4%96%E6%B3%84%E4%B8%89%E7%B1%BB%E4%BA%BA%E6%B6%89%E5%AB%8C%E4%BE%B5%E6%9D%83%23) `304.9K 🔥` `NEW`
1. [赵一博偶遇蔡文静](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%80%E5%8D%9A%E5%81%B6%E9%81%87%E8%94%A1%E6%96%87%E9%9D%99%23) `245.2K 🔥` `NEW`
1. [TF四代选曲排名](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E9%80%89%E6%9B%B2%E6%8E%92%E5%90%8D%23) `217.9K 🔥` `NEW`
1. [月薪5千男子为结婚给女友转账141万](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA5%E5%8D%83%E7%94%B7%E5%AD%90%E4%B8%BA%E7%BB%93%E5%A9%9A%E7%BB%99%E5%A5%B3%E5%8F%8B%E8%BD%AC%E8%B4%A6141%E4%B8%87%23) `202.0K 🔥` `NEW`
1. [黄子韬正式官宣演唱会](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%AD%A3%E5%BC%8F%E5%AE%98%E5%AE%A3%E6%BC%94%E5%94%B1%E4%BC%9A%23) `193.9K 🔥` `NEW`
1. [佛得角踢赢阿根廷就进16强 (Cape Verde beats Argentina to advance to last 16)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E8%B8%A2%E8%B5%A2%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%B0%B1%E8%BF%9B16%E5%BC%BA%23) `166.5K 🔥` `NEW`
1. [毛不易 音乐节](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%20%E9%9F%B3%E4%B9%90%E8%8A%82%23) `164.1K 🔥` `NEW`
1. [法国超市上架空调大门被人群挤倒](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%B6%85%E5%B8%82%E4%B8%8A%E6%9E%B6%E7%A9%BA%E8%B0%83%E5%A4%A7%E9%97%A8%E8%A2%AB%E4%BA%BA%E7%BE%A4%E6%8C%A4%E5%80%92%23) `158.6K 🔥` `NEW`
1. [男顾客酒后伸手摸老板娘臀部](https://s.weibo.com/weibo?q=%23%E7%94%B7%E9%A1%BE%E5%AE%A2%E9%85%92%E5%90%8E%E4%BC%B8%E6%89%8B%E6%91%B8%E8%80%81%E6%9D%BF%E5%A8%98%E8%87%80%E9%83%A8%23) `157.7K 🔥` `NEW`
1. [小鹏MONAL03价格](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL03%E4%BB%B7%E6%A0%BC%23) `1.1M 🔥` `+223%`
1. [野狗骨头拍出了宋威龙的死角](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%8B%8D%E5%87%BA%E4%BA%86%E5%AE%8B%E5%A8%81%E9%BE%99%E7%9A%84%E6%AD%BB%E8%A7%92%23) `520.0K 🔥` `+62%`
1. [小县城的瑜伽馆审美](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8E%BF%E5%9F%8E%E7%9A%84%E7%91%9C%E4%BC%BD%E9%A6%86%E5%AE%A1%E7%BE%8E%23) `518.0K 🔥` `+34%`
1. [野狗骨头定档](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%AE%9A%E6%A1%A3%23) `514.9K 🔥` `+40%`
1. [茉莉奶白换彩色头像 (Jasmine milk white to color avatar)](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E6%8D%A2%E5%BD%A9%E8%89%B2%E5%A4%B4%E5%83%8F%23) `513.6K 🔥` `+34%`
1. [陈昊森承认与兰西雅恋爱](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%8A%E6%A3%AE%E6%89%BF%E8%AE%A4%E4%B8%8E%E5%85%B0%E8%A5%BF%E9%9B%85%E6%81%8B%E7%88%B1%23) `508.8K 🔥` `+34%`
1. [办公室已经三天没人开口说话了](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%B7%B2%E7%BB%8F%E4%B8%89%E5%A4%A9%E6%B2%A1%E4%BA%BA%E5%BC%80%E5%8F%A3%E8%AF%B4%E8%AF%9D%E4%BA%86%23) `507.0K 🔥` `+35%`
1. [时代峰峻回应时代少年团花字 (Times Fengjun responds to Times Youth League’s colorful characters)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9B%9E%E5%BA%94%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%8A%B1%E5%AD%97%23) `505.5K 🔥` `+39%`
1. [LV 欺负古代人不会注册商标](https://s.weibo.com/weibo?q=%23LV%20%E6%AC%BA%E8%B4%9F%E5%8F%A4%E4%BB%A3%E4%BA%BA%E4%B8%8D%E4%BC%9A%E6%B3%A8%E5%86%8C%E5%95%86%E6%A0%87%23) `505.0K 🔥` `+35%`
1. [非农数据](https://s.weibo.com/weibo?q=%23%E9%9D%9E%E5%86%9C%E6%95%B0%E6%8D%AE%23) `502.5K 🔥` `+39%`
1. [LV起诉茉莉奶白判赔1030万 (LV sues Jasmine Milk and awards 10.3 million yuan in damages)](https://s.weibo.com/weibo?q=%23LV%E8%B5%B7%E8%AF%89%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%88%A4%E8%B5%941030%E4%B8%87%23) `499.7K 🔥` `+41%`
1. [我国发展动能持续迸发](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%8F%91%E5%B1%95%E5%8A%A8%E8%83%BD%E6%8C%81%E7%BB%AD%E8%BF%B8%E5%8F%91%23) `695.9K 🔥`
1. [山航很着急为您服务哈](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%88%AA%E5%BE%88%E7%9D%80%E6%80%A5%E4%B8%BA%E6%82%A8%E6%9C%8D%E5%8A%A1%E5%93%88%23) `695.6K 🔥`
1. [LV你身后空无一人](https://s.weibo.com/weibo?q=%23LV%E4%BD%A0%E8%BA%AB%E5%90%8E%E7%A9%BA%E6%97%A0%E4%B8%80%E4%BA%BA%23) `399.1K 🔥`
1. [百花杀灿如繁星野狗骨头对打](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%AF%B9%E6%89%93%23) `396.6K 🔥`
1. [影视飓风 直播事故](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%20%E7%9B%B4%E6%92%AD%E4%BA%8B%E6%95%85%23) `339.1K 🔥`
1. [熬夜晕倒后尿失禁了](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E6%99%95%E5%80%92%E5%90%8E%E5%B0%BF%E5%A4%B1%E7%A6%81%E4%BA%86%23) `518.8K 🔥` `-32%`
1. [爸爸揍儿子的视频火了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E6%8F%8D%E5%84%BF%E5%AD%90%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `275.0K 🔥` `-28%`
1. [韩红基金会发布情况说明 (Han Hong Foundation releases statement)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E5%8F%91%E5%B8%83%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E%23) `266.7K 🔥` `-28%`
1. [茉莉奶白有点不舒服了 (Jasmine Milk White is feeling a little uncomfortable)](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E6%9C%89%E7%82%B9%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `227.5K 🔥` `-38%`
1. [王俊凯你要不回头看看伴舞 (Wang Junkai, why don’t you look back at the backup dancers?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BD%A0%E8%A6%81%E4%B8%8D%E5%9B%9E%E5%A4%B4%E7%9C%8B%E7%9C%8B%E4%BC%B4%E8%88%9E%23) `225.0K 🔥` `-36%`
1. [国家发改委赴小米集团开展工作调研](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8F%91%E6%94%B9%E5%A7%94%E8%B5%B4%E5%B0%8F%E7%B1%B3%E9%9B%86%E5%9B%A2%E5%BC%80%E5%B1%95%E5%B7%A5%E4%BD%9C%E8%B0%83%E7%A0%94%23) `222.0K 🔥` `-80%`
1. [男子在柬埔寨被两次转卖惨不忍睹](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E6%9F%AC%E5%9F%94%E5%AF%A8%E8%A2%AB%E4%B8%A4%E6%AC%A1%E8%BD%AC%E5%8D%96%E6%83%A8%E4%B8%8D%E5%BF%8D%E7%9D%B9%23) `216.6K 🔥` `-41%`
1. [影视飓风员工下岛第一件事暴揍Tim](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E5%91%98%E5%B7%A5%E4%B8%8B%E5%B2%9B%E7%AC%AC%E4%B8%80%E4%BB%B6%E4%BA%8B%E6%9A%B4%E6%8F%8DTim%23) `198.0K 🔥` `-43%`
1. [桂瑞 排名](https://s.weibo.com/weibo?q=%23%E6%A1%82%E7%91%9E%20%E6%8E%92%E5%90%8D%23) `173.1K 🔥` `-46%`
1. [徐明浩韩国打歌舞台唱中文](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%98%8E%E6%B5%A9%E9%9F%A9%E5%9B%BD%E6%89%93%E6%AD%8C%E8%88%9E%E5%8F%B0%E5%94%B1%E4%B8%AD%E6%96%87%23) `156.3K 🔥` `-55%`

Updated at 2026-07-02 23:33:14

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
