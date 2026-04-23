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

1. [夜巴黎账号被封禁 (Night in Paris account banned)](https://s.weibo.com/weibo?q=%23%E5%A4%9C%E5%B7%B4%E9%BB%8E%E8%B4%A6%E5%8F%B7%E8%A2%AB%E5%B0%81%E7%A6%81%23) `1.2M 🔥` `NEW`
1. [服务业这些领域将迎大改变](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E5%8A%A1%E4%B8%9A%E8%BF%99%E4%BA%9B%E9%A2%86%E5%9F%9F%E5%B0%86%E8%BF%8E%E5%A4%A7%E6%94%B9%E5%8F%98%23) `661.6K 🔥` `NEW`
1. [华为乾崑技术大会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%8A%80%E6%9C%AF%E5%A4%A7%E4%BC%9A%23) `576.8K 🔥` `NEW`
1. [北京排队王齐聚金融街](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%8E%92%E9%98%9F%E7%8E%8B%E9%BD%90%E8%81%9A%E9%87%91%E8%9E%8D%E8%A1%97%23) `421.0K 🔥` `NEW`
1. [樊振东冠军目光永远聚焦顶级较量](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%86%A0%E5%86%9B%E7%9B%AE%E5%85%89%E6%B0%B8%E8%BF%9C%E8%81%9A%E7%84%A6%E9%A1%B6%E7%BA%A7%E8%BE%83%E9%87%8F%23) `414.8K 🔥` `NEW`
1. [华为乾崑智驾ADS5](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%99%BA%E9%A9%BEADS5%23) `404.7K 🔥` `NEW`
1. [美部长称600美元降到10美元是降价600%](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%83%A8%E9%95%BF%E7%A7%B0600%E7%BE%8E%E5%85%83%E9%99%8D%E5%88%B010%E7%BE%8E%E5%85%83%E6%98%AF%E9%99%8D%E4%BB%B7600%25%23) `398.5K 🔥` `NEW`
1. [何润东黄晓明 王不见王](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E9%BB%84%E6%99%93%E6%98%8E%20%E7%8E%8B%E4%B8%8D%E8%A7%81%E7%8E%8B%23) `397.6K 🔥` `NEW`
1. [遭踹后掌掴女子保安身份曝光](https://s.weibo.com/weibo?q=%23%E9%81%AD%E8%B8%B9%E5%90%8E%E6%8E%8C%E6%8E%B4%E5%A5%B3%E5%AD%90%E4%BF%9D%E5%AE%89%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `394.5K 🔥` `NEW`
1. [鸿蒙座舱可识别后排乘客胸腔起伏](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E5%BA%A7%E8%88%B1%E5%8F%AF%E8%AF%86%E5%88%AB%E5%90%8E%E6%8E%92%E4%B9%98%E5%AE%A2%E8%83%B8%E8%85%94%E8%B5%B7%E4%BC%8F%23) `378.5K 🔥` `NEW`
1. [夜巴黎 (night paris)](https://s.weibo.com/weibo?q=%23%E5%A4%9C%E5%B7%B4%E9%BB%8E%23) `375.2K 🔥` `NEW`
1. [刘宇宁曾自曝离婚无娃](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%9B%BE%E8%87%AA%E6%9B%9D%E7%A6%BB%E5%A9%9A%E6%97%A0%E5%A8%83%23) `367.6K 🔥` `NEW`
1. [范丞丞直播](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9B%B4%E6%92%AD%23) `364.2K 🔥` `NEW`
1. [国际乒联称马龙是goat](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E4%B9%92%E8%81%94%E7%A7%B0%E9%A9%AC%E9%BE%99%E6%98%AFgoat%23) `361.5K 🔥` `NEW`
1. [极氪回应黄晓明狂撒红包安利009](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA%E5%9B%9E%E5%BA%94%E9%BB%84%E6%99%93%E6%98%8E%E7%8B%82%E6%92%92%E7%BA%A2%E5%8C%85%E5%AE%89%E5%88%A9009%23) `359.6K 🔥` `NEW`
1. [4岁男孩告诉爸爸自己前世是抗战老兵](https://s.weibo.com/weibo?q=%234%E5%B2%81%E7%94%B7%E5%AD%A9%E5%91%8A%E8%AF%89%E7%88%B8%E7%88%B8%E8%87%AA%E5%B7%B1%E5%89%8D%E4%B8%96%E6%98%AF%E6%8A%97%E6%88%98%E8%80%81%E5%85%B5%23) `354.9K 🔥` `NEW`
1. [崔丽丽回应是否会带货](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E4%BC%9A%E5%B8%A6%E8%B4%A7%23) `351.9K 🔥` `NEW`
1. [女子指甲总长13米涂一次需20瓶指甲油](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8C%87%E7%94%B2%E6%80%BB%E9%95%BF13%E7%B1%B3%E6%B6%82%E4%B8%80%E6%AC%A1%E9%9C%8020%E7%93%B6%E6%8C%87%E7%94%B2%E6%B2%B9%23) `346.2K 🔥` `NEW`
1. [唐艺昕回应没网感](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%9B%9E%E5%BA%94%E6%B2%A1%E7%BD%91%E6%84%9F%23) `343.7K 🔥` `NEW`
1. [外国人震惊中国水果摊老板开门睡觉](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E9%9C%87%E6%83%8A%E4%B8%AD%E5%9B%BD%E6%B0%B4%E6%9E%9C%E6%91%8A%E8%80%81%E6%9D%BF%E5%BC%80%E9%97%A8%E7%9D%A1%E8%A7%89%23) `842.1K 🔥` `+225%`
1. [民政局回应马頔李纯结婚证是手写的 (Civil Affairs Bureau responded that Ma Di and Li Chun’s marriage certificate was handwritten)](https://s.weibo.com/weibo?q=%23%E6%B0%91%E6%94%BF%E5%B1%80%E5%9B%9E%E5%BA%94%E9%A9%AC%E9%A0%94%E6%9D%8E%E7%BA%AF%E7%BB%93%E5%A9%9A%E8%AF%81%E6%98%AF%E6%89%8B%E5%86%99%E7%9A%84%23) `559.4K 🔥` `+127%`
1. [小猫吐了一颗小乳牙 (The kitten spit out a baby tooth)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%90%90%E4%BA%86%E4%B8%80%E9%A2%97%E5%B0%8F%E4%B9%B3%E7%89%99%23) `491.4K 🔥` `+59%`
1. [曾沛慈已婚](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%B7%B2%E5%A9%9A%23) `413.2K 🔥` `+43%`
1. [张凌赫田曦薇 假封面](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%81%87%E5%B0%81%E9%9D%A2%23) `410.3K 🔥` `+87%`
1. [掌掴停车女子保安已停职](https://s.weibo.com/weibo?q=%23%E6%8E%8C%E6%8E%B4%E5%81%9C%E8%BD%A6%E5%A5%B3%E5%AD%90%E4%BF%9D%E5%AE%89%E5%B7%B2%E5%81%9C%E8%81%8C%23) `408.4K 🔥` `+139%`
1. [刘宇宁否认与宋祖儿恋情](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%90%A6%E8%AE%A4%E4%B8%8E%E5%AE%8B%E7%A5%96%E5%84%BF%E6%81%8B%E6%83%85%23) `406.6K 🔥` `+47%`
1. [唐艺昕袜子都跳破了 (Tang Yixin’s socks were torn)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E8%A2%9C%E5%AD%90%E9%83%BD%E8%B7%B3%E7%A0%B4%E4%BA%86%23) `402.2K 🔥` `+70%`
1. [宋威龙张凌赫同品牌同姿势](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%8C%E5%93%81%E7%89%8C%E5%90%8C%E5%A7%BF%E5%8A%BF%23) `401.9K 🔥` `+75%`
1. [宫颈粘液栓是什么](https://s.weibo.com/weibo?q=%23%E5%AE%AB%E9%A2%88%E7%B2%98%E6%B6%B2%E6%A0%93%E6%98%AF%E4%BB%80%E4%B9%88%23) `392.9K 🔥` `+135%`
1. [崔丽丽案发前年薪120多万元](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E6%A1%88%E5%8F%91%E5%89%8D%E5%B9%B4%E8%96%AA120%E5%A4%9A%E4%B8%87%E5%85%83%23) `391.9K 🔥` `+75%`
1. [华晨宇演唱会场地开始拆了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9C%BA%E5%9C%B0%E5%BC%80%E5%A7%8B%E6%8B%86%E4%BA%86%23) `386.3K 🔥` `+74%`
1. [谢娜在浪姐群发张杰](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9C%A8%E6%B5%AA%E5%A7%90%E7%BE%A4%E5%8F%91%E5%BC%A0%E6%9D%B0%23) `385.0K 🔥` `+77%`
1. [金莎线下状态 (Jinsha offline status)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E7%BA%BF%E4%B8%8B%E7%8A%B6%E6%80%81%23) `383.8K 🔥` `+72%`
1. [女子乘高铁被26寸行李箱砸伤头](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%98%E9%AB%98%E9%93%81%E8%A2%AB26%E5%AF%B8%E8%A1%8C%E6%9D%8E%E7%AE%B1%E7%A0%B8%E4%BC%A4%E5%A4%B4%23) `381.9K 🔥` `+69%`
1. [何润东和老婆是在夜店认识的 (Peter Ho and his wife met in a nightclub)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%92%8C%E8%80%81%E5%A9%86%E6%98%AF%E5%9C%A8%E5%A4%9C%E5%BA%97%E8%AE%A4%E8%AF%86%E7%9A%84%23) `373.1K 🔥` `+66%`
1. [转卖女大学生电诈园要求撤掉报道](https://s.weibo.com/weibo?q=%23%E8%BD%AC%E5%8D%96%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%94%B5%E8%AF%88%E5%9B%AD%E8%A6%81%E6%B1%82%E6%92%A4%E6%8E%89%E6%8A%A5%E9%81%93%23) `368.3K 🔥` `+67%`
1. [普通人一生的收入](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E4%B8%80%E7%94%9F%E7%9A%84%E6%94%B6%E5%85%A5%23) `362.8K 🔥` `+62%`
1. [陆地cp](https://s.weibo.com/weibo?q=%23%E9%99%86%E5%9C%B0cp%23) `357.1K 🔥` `+63%`
1. [朴宝剑张元英 演员脸和爱豆脸 (Park Bo Gum, Jang Won Young, actor face and idol face)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E5%BC%A0%E5%85%83%E8%8B%B1%20%E6%BC%94%E5%91%98%E8%84%B8%E5%92%8C%E7%88%B1%E8%B1%86%E8%84%B8%23) `353.7K 🔥` `+59%`
1. [突然发现事缓则圆可能是真的](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E4%BA%8B%E7%BC%93%E5%88%99%E5%9C%86%E5%8F%AF%E8%83%BD%E6%98%AF%E7%9C%9F%E7%9A%84%23) `349.8K 🔥` `+60%`
1. [杨洋怎么还长十年前的样子](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%80%8E%E4%B9%88%E8%BF%98%E9%95%BF%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E6%A0%B7%E5%AD%90%23) `344.9K 🔥` `+93%`
1. [鹿晗去王勉家带了臭豆腐](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8E%BB%E7%8E%8B%E5%8B%89%E5%AE%B6%E5%B8%A6%E4%BA%86%E8%87%AD%E8%B1%86%E8%85%90%23) `339.9K 🔥` `+57%`
1. [宋祖儿被指瘦脱相了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E8%A2%AB%E6%8C%87%E7%98%A6%E8%84%B1%E7%9B%B8%E4%BA%86%23) `337.2K 🔥` `+135%`
1. [泰国榴莲正在疯狂涌入](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%A6%B4%E8%8E%B2%E6%AD%A3%E5%9C%A8%E7%96%AF%E7%8B%82%E6%B6%8C%E5%85%A5%23) `334.3K 🔥` `+45%`
1. [花251块买的女装 (Women’s clothing bought for 251 yuan)](https://s.weibo.com/weibo?q=%23%E8%8A%B1251%E5%9D%97%E4%B9%B0%E7%9A%84%E5%A5%B3%E8%A3%85%23) `340.9K 🔥`
1. [食物热量越来越极端了](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E7%89%A9%E7%83%AD%E9%87%8F%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%9E%81%E7%AB%AF%E4%BA%86%23) `422.0K 🔥` `-22%`
1. [Image2 消除AI味儿 (Image2 Eliminate the smell of AI)](https://s.weibo.com/weibo?q=%23Image2%20%E6%B6%88%E9%99%A4AI%E5%91%B3%E5%84%BF%23) `420.7K 🔥` `-45%`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `419.3K 🔥` `-28%`
1. [员工建600多个工作群离职拒交接](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%BB%BA600%E5%A4%9A%E4%B8%AA%E5%B7%A5%E4%BD%9C%E7%BE%A4%E7%A6%BB%E8%81%8C%E6%8B%92%E4%BA%A4%E6%8E%A5%23) `417.7K 🔥` `-61%`
1. [家长向老师索要试卷引发激烈争执](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%90%91%E8%80%81%E5%B8%88%E7%B4%A2%E8%A6%81%E8%AF%95%E5%8D%B7%E5%BC%95%E5%8F%91%E6%BF%80%E7%83%88%E4%BA%89%E6%89%A7%23) `388.5K 🔥` `-34%`
1. [伊称已收到首笔霍尔木兹通行费](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%A7%B0%E5%B7%B2%E6%94%B6%E5%88%B0%E9%A6%96%E7%AC%94%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E9%80%9A%E8%A1%8C%E8%B4%B9%23) `376.9K 🔥` `-36%`
1. [志愿军烈士遗骸安葬仪式](https://s.weibo.com/weibo?q=%23%E5%BF%97%E6%84%BF%E5%86%9B%E7%83%88%E5%A3%AB%E9%81%97%E9%AA%B8%E5%AE%89%E8%91%AC%E4%BB%AA%E5%BC%8F%23) `370.1K 🔥` `-42%`

Updated at 2026-04-23 20:50:48

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
