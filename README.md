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

1. [狼队对战KSG (Wolves vs. KSG)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98KSG%23) `145.2K 🔥` `NEW`
1. [马嘉祺高会](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E9%AB%98%E4%BC%9A%23) `145.0K 🔥` `NEW`
1. [月租万元小区房成为研究生宿舍](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%A7%9F%E4%B8%87%E5%85%83%E5%B0%8F%E5%8C%BA%E6%88%BF%E6%88%90%E4%B8%BA%E7%A0%94%E7%A9%B6%E7%94%9F%E5%AE%BF%E8%88%8D%23) `139.1K 🔥` `NEW`
1. [郑丽文参观故宫](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E5%8F%82%E8%A7%82%E6%95%85%E5%AE%AB%23) `127.8K 🔥` `NEW`
1. [30多岁程序员熬夜喝咖啡确诊帕金森](https://s.weibo.com/weibo?q=%2330%E5%A4%9A%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E7%86%AC%E5%A4%9C%E5%96%9D%E5%92%96%E5%95%A1%E7%A1%AE%E8%AF%8A%E5%B8%95%E9%87%91%E6%A3%AE%23) `122.5K 🔥` `NEW`
1. [TOP演唱会听到哨子声就把音乐调大](https://s.weibo.com/weibo?q=%23TOP%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%AC%E5%88%B0%E5%93%A8%E5%AD%90%E5%A3%B0%E5%B0%B1%E6%8A%8A%E9%9F%B3%E4%B9%90%E8%B0%83%E5%A4%A7%23) `120.8K 🔥` `NEW`
1. [花海决不缺席总决赛](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7%E5%86%B3%E4%B8%8D%E7%BC%BA%E5%B8%AD%E6%80%BB%E5%86%B3%E8%B5%9B%23) `104.8K 🔥` `NEW`
1. [莫式鸡煲又迎来了外国百万网红](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%BC%8F%E9%B8%A1%E7%85%B2%E5%8F%88%E8%BF%8E%E6%9D%A5%E4%BA%86%E5%A4%96%E5%9B%BD%E7%99%BE%E4%B8%87%E7%BD%91%E7%BA%A2%23) `94.0K 🔥` `NEW`
1. [汪峰前妻回应分财产](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E5%89%8D%E5%A6%BB%E5%9B%9E%E5%BA%94%E5%88%86%E8%B4%A2%E4%BA%A7%23) `84.8K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `84.6K 🔥` `NEW`
1. [蒸架买到了高锰钢 (I bought high manganese steel for the steaming rack.)](https://s.weibo.com/weibo?q=%23%E8%92%B8%E6%9E%B6%E4%B9%B0%E5%88%B0%E4%BA%86%E9%AB%98%E9%94%B0%E9%92%A2%23) `80.3K 🔥` `NEW`
1. [高尔夫这样打我也是没有办法了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B0%94%E5%A4%AB%E8%BF%99%E6%A0%B7%E6%89%93%E6%88%91%E4%B9%9F%E6%98%AF%E6%B2%A1%E6%9C%89%E5%8A%9E%E6%B3%95%E4%BA%86%23) `75.7K 🔥` `NEW`
1. [曝曾沛慈退出浪姐 (It is revealed that Zeng Peici quits Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9B%BE%E6%B2%9B%E6%85%88%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `611.7K 🔥` `+26%`
1. [妻子发现丈夫藏200多枚金币气炸](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E8%97%8F200%E5%A4%9A%E6%9E%9A%E9%87%91%E5%B8%81%E6%B0%94%E7%82%B8%23) `1.1M 🔥`
1. [女子从日本带回244本淫秽漫画获刑 (Woman jailed for bringing 244 obscene comics from Japan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%8E%E6%97%A5%E6%9C%AC%E5%B8%A6%E5%9B%9E244%E6%9C%AC%E6%B7%AB%E7%A7%BD%E6%BC%AB%E7%94%BB%E8%8E%B7%E5%88%91%23) `789.3K 🔥`
1. [这支短片名叫问勇 (This short film is called Wen Yong)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%94%AF%E7%9F%AD%E7%89%87%E5%90%8D%E5%8F%AB%E9%97%AE%E5%8B%87%23) `624.0K 🔥`
1. [原来我真能花100万](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%91%E7%9C%9F%E8%83%BD%E8%8A%B1100%E4%B8%87%23) `233.1K 🔥`
1. [孙怡 赵子琪淘汰发布会](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E8%B5%B5%E5%AD%90%E7%90%AA%E6%B7%98%E6%B1%B0%E5%8F%91%E5%B8%83%E4%BC%9A%23) `232.6K 🔥`
1. [美国一海滩藏发现11具遗体](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E6%B5%B7%E6%BB%A9%E8%97%8F%E5%8F%91%E7%8E%B011%E5%85%B7%E9%81%97%E4%BD%93%23) `192.3K 🔥`
1. [原来冲锋衣是胶水粘的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%B2%E9%94%8B%E8%A1%A3%E6%98%AF%E8%83%B6%E6%B0%B4%E7%B2%98%E7%9A%84%23) `183.1K 🔥`
1. [马頔 我还要生孩子呢](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%20%E6%88%91%E8%BF%98%E8%A6%81%E7%94%9F%E5%AD%A9%E5%AD%90%E5%91%A2%23) `145.1K 🔥`
1. [十日终焉长安二十四计海报](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%95%BF%E5%AE%89%E4%BA%8C%E5%8D%81%E5%9B%9B%E8%AE%A1%E6%B5%B7%E6%8A%A5%23) `144.8K 🔥`
1. [谢娜右边臀腿瞬间凉凉透风 (Xie Na's right buttocks and legs were instantly cool and ventilated)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%8F%B3%E8%BE%B9%E8%87%80%E8%85%BF%E7%9E%AC%E9%97%B4%E5%87%89%E5%87%89%E9%80%8F%E9%A3%8E%23) `144.7K 🔥`
1. [美股巨震](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%B7%A8%E9%9C%87%23) `144.6K 🔥`
1. [张靓颖怒斥工作人员泄露未发行作品 (Zhang Liangying angrily scolded the staff for leaking unreleased works)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E6%80%92%E6%96%A5%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E6%B3%84%E9%9C%B2%E6%9C%AA%E5%8F%91%E8%A1%8C%E4%BD%9C%E5%93%81%23) `144.2K 🔥`
1. [张慧雯回应争议](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `143.6K 🔥`
1. [终于知道北京人为什么不爱出门了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E5%8C%97%E4%BA%AC%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%88%B1%E5%87%BA%E9%97%A8%E4%BA%86%23) `125.9K 🔥`
1. [张婉婷风波后首发文 (Zhang Wanting's first post after the controversy)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E5%8F%91%E6%96%87%23) `118.1K 🔥`
1. [美国已同意解冻伊朗海外资产](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B7%B2%E5%90%8C%E6%84%8F%E8%A7%A3%E5%86%BB%E4%BC%8A%E6%9C%97%E6%B5%B7%E5%A4%96%E8%B5%84%E4%BA%A7%23) `117.6K 🔥`
1. [爸爸出门上班5个月孩子独自留家 (Dad went to work and the child was left home alone for 5 months)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%87%BA%E9%97%A8%E4%B8%8A%E7%8F%AD5%E4%B8%AA%E6%9C%88%E5%AD%A9%E5%AD%90%E7%8B%AC%E8%87%AA%E7%95%99%E5%AE%B6%23) `112.7K 🔥`
1. [郑丽文收到机器手礼物秒变郑三岁 (Zheng Liwen received a gift of a robot hand and instantly became Zheng three years old)](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E6%94%B6%E5%88%B0%E6%9C%BA%E5%99%A8%E6%89%8B%E7%A4%BC%E7%89%A9%E7%A7%92%E5%8F%98%E9%83%91%E4%B8%89%E5%B2%81%23) `105.7K 🔥`
1. [朴宝剑拍的刘诗诗王安宇孙千 (Park Bo Gum's photos of Liu Shishi, Wang Anwoo, and Sun Cheon)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E6%8B%8D%E7%9A%84%E5%88%98%E8%AF%97%E8%AF%97%E7%8E%8B%E5%AE%89%E5%AE%87%E5%AD%99%E5%8D%83%23) `102.1K 🔥`
1. [导演温成林突发心梗去世](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E6%BC%94%E6%B8%A9%E6%88%90%E6%9E%97%E7%AA%81%E5%8F%91%E5%BF%83%E6%A2%97%E5%8E%BB%E4%B8%96%23) `99.2K 🔥`
1. [终于有人能把上班的累描述出来了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E8%83%BD%E6%8A%8A%E4%B8%8A%E7%8F%AD%E7%9A%84%E7%B4%AF%E6%8F%8F%E8%BF%B0%E5%87%BA%E6%9D%A5%E4%BA%86%23) `85.7K 🔥`
1. [sakee开火THOME (sakee fire THOME)](https://s.weibo.com/weibo?q=%23sakee%E5%BC%80%E7%81%ABTHOME%23) `81.3K 🔥`
1. [海底捞礼物 员工罚款购入](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E7%A4%BC%E7%89%A9%20%E5%91%98%E5%B7%A5%E7%BD%9A%E6%AC%BE%E8%B4%AD%E5%85%A5%23) `81.3K 🔥`
1. [孙颖莎接受央视采访](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%8E%A5%E5%8F%97%E5%A4%AE%E8%A7%86%E9%87%87%E8%AE%BF%23) `79.2K 🔥`
1. [刁蛮公主逍遥王导演逝世](https://s.weibo.com/weibo?q=%23%E5%88%81%E8%9B%AE%E5%85%AC%E4%B8%BB%E9%80%8D%E9%81%A5%E7%8E%8B%E5%AF%BC%E6%BC%94%E9%80%9D%E4%B8%96%23) `77.4K 🔥`
1. [向太说存款没有200万别买车](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%AD%98%E6%AC%BE%E6%B2%A1%E6%9C%89200%E4%B8%87%E5%88%AB%E4%B9%B0%E8%BD%A6%23) `74.9K 🔥`
1. [网友致歉称与何与不熟 (Netizens apologized and said they were not familiar with He Yu)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%87%B4%E6%AD%89%E7%A7%B0%E4%B8%8E%E4%BD%95%E4%B8%8E%E4%B8%8D%E7%86%9F%23) `72.7K 🔥`
1. [李想朋友圈飙脏话 (Li Xiang’s WeChat Moments are filled with swear words)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%83%B3%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%A3%99%E8%84%8F%E8%AF%9D%23) `231.8K 🔥` `-25%`
1. [wbti](https://s.weibo.com/weibo?q=%23wbti%23) `144.9K 🔥` `-38%`
1. [孙怡说以后不当队长了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%AF%B4%E4%BB%A5%E5%90%8E%E4%B8%8D%E5%BD%93%E9%98%9F%E9%95%BF%E4%BA%86%23) `126.6K 🔥` `-22%`
1. [周渝民妻子宣布复出](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B8%9D%E6%B0%91%E5%A6%BB%E5%AD%90%E5%AE%A3%E5%B8%83%E5%A4%8D%E5%87%BA%23) `123.7K 🔥` `-21%`
1. [408名村民困危山下说雨季来了只能等死](https://s.weibo.com/weibo?q=%23408%E5%90%8D%E6%9D%91%E6%B0%91%E5%9B%B0%E5%8D%B1%E5%B1%B1%E4%B8%8B%E8%AF%B4%E9%9B%A8%E5%AD%A3%E6%9D%A5%E4%BA%86%E5%8F%AA%E8%83%BD%E7%AD%89%E6%AD%BB%23) `104.7K 🔥` `-33%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `91.0K 🔥` `-43%`
1. [宁艺卓祝福柳智敏](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E7%A5%9D%E7%A6%8F%E6%9F%B3%E6%99%BA%E6%95%8F%23) `89.1K 🔥` `-21%`
1. [莫氏鸡煲老板娘说早20年火会拼命赚 (The proprietress of Mo’s Chicken Pot said she would have worked hard to make money if she had become popular 20 years earlier)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%A8%98%E8%AF%B4%E6%97%A920%E5%B9%B4%E7%81%AB%E4%BC%9A%E6%8B%BC%E5%91%BD%E8%B5%9A%23) `83.9K 🔥` `-23%`
1. [汉堡馒头减肥法](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A0%A1%E9%A6%92%E5%A4%B4%E5%87%8F%E8%82%A5%E6%B3%95%23) `77.7K 🔥` `-54%`
1. [仅靠卖车企业已经无法盈利了](https://s.weibo.com/weibo?q=%23%E4%BB%85%E9%9D%A0%E5%8D%96%E8%BD%A6%E4%BC%81%E4%B8%9A%E5%B7%B2%E7%BB%8F%E6%97%A0%E6%B3%95%E7%9B%88%E5%88%A9%E4%BA%86%23) `70.9K 🔥` `-53%`

Updated at 2026-04-11 18:26:25

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
