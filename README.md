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

1. [旺旺 配料表 (Wangwang ingredient list)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%20%E9%85%8D%E6%96%99%E8%A1%A8%23) `1.2M 🔥` `NEW`
1. [还能活51年却只有21天自由支配的时间](https://s.weibo.com/weibo?q=%23%E8%BF%98%E8%83%BD%E6%B4%BB51%E5%B9%B4%E5%8D%B4%E5%8F%AA%E6%9C%8921%E5%A4%A9%E8%87%AA%E7%94%B1%E6%94%AF%E9%85%8D%E7%9A%84%E6%97%B6%E9%97%B4%23) `313.3K 🔥` `NEW`
1. [陈浚铭踢腿陈思罕刘海飞了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%E8%B8%A2%E8%85%BF%E9%99%88%E6%80%9D%E7%BD%95%E5%88%98%E6%B5%B7%E9%A3%9E%E4%BA%86%23) `246.1K 🔥` `NEW`
1. [短剧 按摩大脑](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%20%E6%8C%89%E6%91%A9%E5%A4%A7%E8%84%91%23) `205.3K 🔥` `NEW`
1. [35岁男子第二性征没发育尴尬看儿科](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E7%94%B7%E5%AD%90%E7%AC%AC%E4%BA%8C%E6%80%A7%E5%BE%81%E6%B2%A1%E5%8F%91%E8%82%B2%E5%B0%B4%E5%B0%AC%E7%9C%8B%E5%84%BF%E7%A7%91%23) `170.3K 🔥` `NEW`
1. [牛被电死后印度人疯狂破坏变压器](https://s.weibo.com/weibo?q=%23%E7%89%9B%E8%A2%AB%E7%94%B5%E6%AD%BB%E5%90%8E%E5%8D%B0%E5%BA%A6%E4%BA%BA%E7%96%AF%E7%8B%82%E7%A0%B4%E5%9D%8F%E5%8F%98%E5%8E%8B%E5%99%A8%23) `160.5K 🔥` `NEW`
1. [2人飞身拦保时捷避免百万损失](https://s.weibo.com/weibo?q=%232%E4%BA%BA%E9%A3%9E%E8%BA%AB%E6%8B%A6%E4%BF%9D%E6%97%B6%E6%8D%B7%E9%81%BF%E5%85%8D%E7%99%BE%E4%B8%87%E6%8D%9F%E5%A4%B1%23) `145.6K 🔥` `NEW`
1. [余文乐推152公斤雪橇仅用14秒](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%E6%8E%A8152%E5%85%AC%E6%96%A4%E9%9B%AA%E6%A9%87%E4%BB%85%E7%94%A814%E7%A7%92%23) `130.5K 🔥` `NEW`
1. [檀丝空枪云包场4小时上总榜第四](https://s.weibo.com/weibo?q=%23%E6%AA%80%E4%B8%9D%E7%A9%BA%E6%9E%AA%E4%BA%91%E5%8C%85%E5%9C%BA4%E5%B0%8F%E6%97%B6%E4%B8%8A%E6%80%BB%E6%A6%9C%E7%AC%AC%E5%9B%9B%23) `126.0K 🔥` `NEW`
1. [医保政策 抢救成本](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E6%94%BF%E7%AD%96%20%E6%8A%A2%E6%95%91%E6%88%90%E6%9C%AC%23) `124.3K 🔥` `NEW`
1. [宁博宇将赴瑞典做博士后 (Ning Boyu will go to Sweden to do postdoctoral work)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%8D%9A%E5%AE%87%E5%B0%86%E8%B5%B4%E7%91%9E%E5%85%B8%E5%81%9A%E5%8D%9A%E5%A3%AB%E5%90%8E%23) `123.8K 🔥` `NEW`
1. [胖东来首批刑释职工30人无一离职](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%A6%96%E6%89%B9%E5%88%91%E9%87%8A%E8%81%8C%E5%B7%A530%E4%BA%BA%E6%97%A0%E4%B8%80%E7%A6%BB%E8%81%8C%23) `1.3M 🔥` `+335%`
1. [终于知道为什么戴眼镜是斜的了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%B4%E7%9C%BC%E9%95%9C%E6%98%AF%E6%96%9C%E7%9A%84%E4%BA%86%23) `810.6K 🔥` `+167%`
1. [牛来 (Niu Lai)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%23) `388.5K 🔥` `+23%`
1. [董璇带小酒窝纠正体态](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%B8%A6%E5%B0%8F%E9%85%92%E7%AA%9D%E7%BA%A0%E6%AD%A3%E4%BD%93%E6%80%81%23) `268.5K 🔥` `+46%`
1. [路易吉正式认罪 (Luigi formally pleads guilty)](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E6%98%93%E5%90%89%E6%AD%A3%E5%BC%8F%E8%AE%A4%E7%BD%AA%23) `245.2K 🔥` `+27%`
1. [半夜去爸妈房间偷猫](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%A4%9C%E5%8E%BB%E7%88%B8%E5%A6%88%E6%88%BF%E9%97%B4%E5%81%B7%E7%8C%AB%23) `161.8K 🔥` `+21%`
1. [日本 拜鬼](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%20%E6%8B%9C%E9%AC%BC%23) `1.5M 🔥`
1. [中国China成为潮流 (China China has become a trend)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDChina%E6%88%90%E4%B8%BA%E6%BD%AE%E6%B5%81%23) `1.2M 🔥`
1. [网友集体呼吁旺旺减糖](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%9B%86%E4%BD%93%E5%91%BC%E5%90%81%E6%97%BA%E6%97%BA%E5%87%8F%E7%B3%96%23) `1.2M 🔥`
1. [王嘉尔吃自己的瓜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%90%83%E8%87%AA%E5%B7%B1%E7%9A%84%E7%93%9C%23) `309.3K 🔥`
1. [曝内娱把热度高的大IP拍完了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%86%85%E5%A8%B1%E6%8A%8A%E7%83%AD%E5%BA%A6%E9%AB%98%E7%9A%84%E5%A4%A7IP%E6%8B%8D%E5%AE%8C%E4%BA%86%23) `301.5K 🔥`
1. [印尼7.7级地震](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC7.7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `292.1K 🔥`
1. [谢霆锋二儿子近照曝光 (Recent photos of Nicholas Tse’s second son exposed)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E4%BA%8C%E5%84%BF%E5%AD%90%E8%BF%91%E7%85%A7%E6%9B%9D%E5%85%89%23) `270.7K 🔥`
1. [要被关晓彤这双腿给晃晕了 (I'm going to be stunned by Guan Xiaotong's legs.)](https://s.weibo.com/weibo?q=%23%E8%A6%81%E8%A2%AB%E5%85%B3%E6%99%93%E5%BD%A4%E8%BF%99%E5%8F%8C%E8%85%BF%E7%BB%99%E6%99%83%E6%99%95%E4%BA%86%23) `246.8K 🔥`
1. [路虎BBA保时捷价格大跳水 (Land Rover BBA Porsche prices plummet)](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%99%8EBBA%E4%BF%9D%E6%97%B6%E6%8D%B7%E4%BB%B7%E6%A0%BC%E5%A4%A7%E8%B7%B3%E6%B0%B4%23) `209.8K 🔥`
1. [答应保姆涨薪后反手让她带薪休假](https://s.weibo.com/weibo?q=%23%E7%AD%94%E5%BA%94%E4%BF%9D%E5%A7%86%E6%B6%A8%E8%96%AA%E5%90%8E%E5%8F%8D%E6%89%8B%E8%AE%A9%E5%A5%B9%E5%B8%A6%E8%96%AA%E4%BC%91%E5%81%87%23) `209.7K 🔥`
1. [曝王嘉尔纹身是宋雨琦粉丝名](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E7%BA%B9%E8%BA%AB%E6%98%AF%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%B2%89%E4%B8%9D%E5%90%8D%23) `208.6K 🔥`
1. [张雅琪 湖南卫视下场 (Zhang Yaqi’s end at Hunan Satellite TV)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E4%B8%8B%E5%9C%BA%23) `208.4K 🔥`
1. [C罗追平世界纪录](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%BF%BD%E5%B9%B3%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `207.4K 🔥`
1. [曝时代少年团加开演唱会](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%8A%A0%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `206.9K 🔥`
1. [isa原生家庭 (isa’s original family)](https://s.weibo.com/weibo?q=%23isa%E5%8E%9F%E7%94%9F%E5%AE%B6%E5%BA%AD%23) `206.6K 🔥`
1. [沈梦辰回应披哥最累的是沈梦辰](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%9B%9E%E5%BA%94%E6%8A%AB%E5%93%A5%E6%9C%80%E7%B4%AF%E7%9A%84%E6%98%AF%E6%B2%88%E6%A2%A6%E8%BE%B0%23) `204.3K 🔥`
1. [喻言 体面](https://s.weibo.com/weibo?q=%23%E5%96%BB%E8%A8%80%20%E4%BD%93%E9%9D%A2%23) `180.9K 🔥`
1. [猝死前24小时身体发出的提醒](https://s.weibo.com/weibo?q=%23%E7%8C%9D%E6%AD%BB%E5%89%8D24%E5%B0%8F%E6%97%B6%E8%BA%AB%E4%BD%93%E5%8F%91%E5%87%BA%E7%9A%84%E6%8F%90%E9%86%92%23) `172.9K 🔥`
1. [郭宇欣新剧清醒到让人心疼](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E6%96%B0%E5%89%A7%E6%B8%85%E9%86%92%E5%88%B0%E8%AE%A9%E4%BA%BA%E5%BF%83%E7%96%BC%23) `171.9K 🔥`
1. [比尔盖茨女儿被曝涉嫌电信欺诈](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E5%A5%B3%E5%84%BF%E8%A2%AB%E6%9B%9D%E6%B6%89%E5%AB%8C%E7%94%B5%E4%BF%A1%E6%AC%BA%E8%AF%88%23) `170.2K 🔥`
1. [林诗栋蒯曼 混双第五冠 (Lin Shidong and Kuai Man won the fifth mixed doubles title)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E8%92%AF%E6%9B%BC%20%E6%B7%B7%E5%8F%8C%E7%AC%AC%E4%BA%94%E5%86%A0%23) `166.7K 🔥`
1. [东契奇称湖人现有阵容能冲冠 (Doncic says Lakers’ current lineup can make it to the championship)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%A5%91%E5%A5%87%E7%A7%B0%E6%B9%96%E4%BA%BA%E7%8E%B0%E6%9C%89%E9%98%B5%E5%AE%B9%E8%83%BD%E5%86%B2%E5%86%A0%23) `162.8K 🔥`
1. [61岁乘客被吸出飞机窗外](https://s.weibo.com/weibo?q=%2361%E5%B2%81%E4%B9%98%E5%AE%A2%E8%A2%AB%E5%90%B8%E5%87%BA%E9%A3%9E%E6%9C%BA%E7%AA%97%E5%A4%96%23) `148.8K 🔥`
1. [北京 冰雹](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%20%E5%86%B0%E9%9B%B9%23) `146.3K 🔥`
1. [披哥初舞台pk](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E5%88%9D%E8%88%9E%E5%8F%B0pk%23) `141.8K 🔥`
1. [旺旺最大的对手竟是糖](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E6%9C%80%E5%A4%A7%E7%9A%84%E5%AF%B9%E6%89%8B%E7%AB%9F%E6%98%AF%E7%B3%96%23) `719.1K 🔥` `-48%`
1. [王传君体脂率25.5%](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E4%BD%93%E8%84%82%E7%8E%8725.5%25%23) `371.7K 🔥` `-27%`
1. [旺旺集团面临重大经营危机](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%9B%86%E5%9B%A2%E9%9D%A2%E4%B8%B4%E9%87%8D%E5%A4%A7%E7%BB%8F%E8%90%A5%E5%8D%B1%E6%9C%BA%23) `247.2K 🔥` `-27%`
1. [国乒男单无缘八强 (National table tennis men's singles missed the quarterfinals)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E6%97%A0%E7%BC%98%E5%85%AB%E5%BC%BA%23) `205.8K 🔥` `-37%`
1. [Wenbo在基地晕倒 (Wenbo fainted at the base)](https://s.weibo.com/weibo?q=%23Wenbo%E5%9C%A8%E5%9F%BA%E5%9C%B0%E6%99%95%E5%80%92%23) `204.4K 🔥` `-41%`
1. [女孩停用网红面霜后成激素脸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%81%9C%E7%94%A8%E7%BD%91%E7%BA%A2%E9%9D%A2%E9%9C%9C%E5%90%8E%E6%88%90%E6%BF%80%E7%B4%A0%E8%84%B8%23) `194.4K 🔥` `-35%`
1. [印尼7.7级地震引发海啸](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC7.7%E7%BA%A7%E5%9C%B0%E9%9C%87%E5%BC%95%E5%8F%91%E6%B5%B7%E5%95%B8%23) `130.8K 🔥` `-55%`
1. [邓紫棋发型十五分钟就淋直了](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%8F%91%E5%9E%8B%E5%8D%81%E4%BA%94%E5%88%86%E9%92%9F%E5%B0%B1%E6%B7%8B%E7%9B%B4%E4%BA%86%23) `124.2K 🔥` `-22%`

Updated at 2026-08-15 12:01:08

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
