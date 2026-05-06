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

1. [花少 恋综 (Hua Shao Lian Zong)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%20%E6%81%8B%E7%BB%BC%23) `3.5M 🔥` `NEW`
1. [合肥市委书记费高云被查](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%B8%82%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%B4%B9%E9%AB%98%E4%BA%91%E8%A2%AB%E6%9F%A5%23) `1.1M 🔥` `NEW`
1. [致敬国之重器背后的青年力量](https://s.weibo.com/weibo?q=%23%E8%87%B4%E6%95%AC%E5%9B%BD%E4%B9%8B%E9%87%8D%E5%99%A8%E8%83%8C%E5%90%8E%E7%9A%84%E9%9D%92%E5%B9%B4%E5%8A%9B%E9%87%8F%23) `867.7K 🔥` `NEW`
1. [油价暴跌了](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%9A%B4%E8%B7%8C%E4%BA%86%23) `810.6K 🔥` `NEW`
1. [荔枝披萨](https://s.weibo.com/weibo?q=%23%E8%8D%94%E6%9E%9D%E6%8A%AB%E8%90%A8%23) `735.8K 🔥` `NEW`
1. [视组白玉兰预测提名名单](https://s.weibo.com/weibo?q=%23%E8%A7%86%E7%BB%84%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `448.6K 🔥` `NEW`
1. [时代峰峻回应穆祉丞没饭撒](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9B%9E%E5%BA%94%E7%A9%86%E7%A5%89%E4%B8%9E%E6%B2%A1%E9%A5%AD%E6%92%92%23) `387.2K 🔥` `NEW`
1. [假期订酒店订到公安局](https://s.weibo.com/weibo?q=%23%E5%81%87%E6%9C%9F%E8%AE%A2%E9%85%92%E5%BA%97%E8%AE%A2%E5%88%B0%E5%85%AC%E5%AE%89%E5%B1%80%23) `383.3K 🔥` `NEW`
1. [合作演员为卢昱晓发声](https://s.weibo.com/weibo?q=%23%E5%90%88%E4%BD%9C%E6%BC%94%E5%91%98%E4%B8%BA%E5%8D%A2%E6%98%B1%E6%99%93%E5%8F%91%E5%A3%B0%23) `381.9K 🔥` `NEW`
1. [胖东来19名管理人员被降级](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A519%E5%90%8D%E7%AE%A1%E7%90%86%E4%BA%BA%E5%91%98%E8%A2%AB%E9%99%8D%E7%BA%A7%23) `378.4K 🔥` `NEW`
1. [刘宇宁像巨人一样就出来了 (Liu Yuning came out like a giant)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%83%8F%E5%B7%A8%E4%BA%BA%E4%B8%80%E6%A0%B7%E5%B0%B1%E5%87%BA%E6%9D%A5%E4%BA%86%23) `376.5K 🔥` `NEW`
1. [iPhone17或成史上最长寿苹果手机](https://s.weibo.com/weibo?q=%23iPhone17%E6%88%96%E6%88%90%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%95%BF%E5%AF%BF%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%23) `374.1K 🔥` `NEW`
1. [跟着中国国家地理去旅行](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E4%B8%AD%E5%9B%BD%E5%9B%BD%E5%AE%B6%E5%9C%B0%E7%90%86%E5%8E%BB%E6%97%85%E8%A1%8C%23) `370.8K 🔥` `NEW`
1. [林诗栋vsO约内斯库](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8BvsO%E7%BA%A6%E5%86%85%E6%96%AF%E5%BA%93%23) `367.5K 🔥` `NEW`
1. [60年开封灌汤包旁现开卦灌汤包](https://s.weibo.com/weibo?q=%2360%E5%B9%B4%E5%BC%80%E5%B0%81%E7%81%8C%E6%B1%A4%E5%8C%85%E6%97%81%E7%8E%B0%E5%BC%80%E5%8D%A6%E7%81%8C%E6%B1%A4%E5%8C%85%23) `365.8K 🔥` `NEW`
1. [德甲](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%94%B2%23) `360.5K 🔥` `NEW`
1. [宋慧乔腰线](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E8%85%B0%E7%BA%BF%23) `358.9K 🔥` `NEW`
1. [敏沙 剧宣](https://s.weibo.com/weibo?q=%23%E6%95%8F%E6%B2%99%20%E5%89%A7%E5%AE%A3%23) `352.3K 🔥` `NEW`
1. [张一山满满的幸福](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E5%B1%B1%E6%BB%A1%E6%BB%A1%E7%9A%84%E5%B9%B8%E7%A6%8F%23) `349.6K 🔥` `NEW`
1. [Angelababy江南雨景氛围感](https://s.weibo.com/weibo?q=%23Angelababy%E6%B1%9F%E5%8D%97%E9%9B%A8%E6%99%AF%E6%B0%9B%E5%9B%B4%E6%84%9F%23) `347.1K 🔥` `NEW`
1. [人一旦出了国旅游 (Once a person travels abroad,)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E5%87%BA%E4%BA%86%E5%9B%BD%E6%97%85%E6%B8%B8%23) `344.7K 🔥` `NEW`
1. [兔子是通过耳朵输液的](https://s.weibo.com/weibo?q=%23%E5%85%94%E5%AD%90%E6%98%AF%E9%80%9A%E8%BF%87%E8%80%B3%E6%9C%B5%E8%BE%93%E6%B6%B2%E7%9A%84%23) `343.8K 🔥` `NEW`
1. [吸血鬼日记男主退圈后负债千万美元](https://s.weibo.com/weibo?q=%23%E5%90%B8%E8%A1%80%E9%AC%BC%E6%97%A5%E8%AE%B0%E7%94%B7%E4%B8%BB%E9%80%80%E5%9C%88%E5%90%8E%E8%B4%9F%E5%80%BA%E5%8D%83%E4%B8%87%E7%BE%8E%E5%85%83%23) `341.3K 🔥` `NEW`
1. [女子宫外孕胚胎长在人体最粗血管上](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AE%AB%E5%A4%96%E5%AD%95%E8%83%9A%E8%83%8E%E9%95%BF%E5%9C%A8%E4%BA%BA%E4%BD%93%E6%9C%80%E7%B2%97%E8%A1%80%E7%AE%A1%E4%B8%8A%23) `338.2K 🔥` `NEW`
1. [敖瑞鹏为E7X冷落了心爱小摩托](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E4%B8%BAE7X%E5%86%B7%E8%90%BD%E4%BA%86%E5%BF%83%E7%88%B1%E5%B0%8F%E6%91%A9%E6%89%98%23) `334.6K 🔥` `NEW`
1. [菩萨手拍卖 文物流失](https://s.weibo.com/weibo?q=%23%E8%8F%A9%E8%90%A8%E6%89%8B%E6%8B%8D%E5%8D%96%20%E6%96%87%E7%89%A9%E6%B5%81%E5%A4%B1%23) `332.4K 🔥` `NEW`
1. [女子趁男友熟睡刷脸21次盗转27万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B6%81%E7%94%B7%E5%8F%8B%E7%86%9F%E7%9D%A1%E5%88%B7%E8%84%B821%E6%AC%A1%E7%9B%97%E8%BD%AC27%E4%B8%87%23) `330.5K 🔥` `NEW`
1. [爸爸赶海陷入淤泥孩子大喊别动](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E8%B5%B6%E6%B5%B7%E9%99%B7%E5%85%A5%E6%B7%A4%E6%B3%A5%E5%AD%A9%E5%AD%90%E5%A4%A7%E5%96%8A%E5%88%AB%E5%8A%A8%23) `329.8K 🔥` `NEW`
1. [市委书记自费撸串捧场捐髓烧烤店主](https://s.weibo.com/weibo?q=%23%E5%B8%82%E5%A7%94%E4%B9%A6%E8%AE%B0%E8%87%AA%E8%B4%B9%E6%92%B8%E4%B8%B2%E6%8D%A7%E5%9C%BA%E6%8D%90%E9%AB%93%E7%83%A7%E7%83%A4%E5%BA%97%E4%B8%BB%23) `325.1K 🔥` `NEW`
1. [帆帆回应](https://s.weibo.com/weibo?q=%23%E5%B8%86%E5%B8%86%E5%9B%9E%E5%BA%94%23) `321.3K 🔥` `NEW`
1. [井柏然走路刘雯化 (Jing Boran walks and Liu Wenhua)](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E8%B5%B0%E8%B7%AF%E5%88%98%E9%9B%AF%E5%8C%96%23) `320.4K 🔥` `NEW`
1. [小米新公司含电池制造业务](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0%E5%85%AC%E5%8F%B8%E5%90%AB%E7%94%B5%E6%B1%A0%E5%88%B6%E9%80%A0%E4%B8%9A%E5%8A%A1%23) `311.5K 🔥` `NEW`
1. [6万国民车飞上天](https://s.weibo.com/weibo?q=%236%E4%B8%87%E5%9B%BD%E6%B0%91%E8%BD%A6%E9%A3%9E%E4%B8%8A%E5%A4%A9%23) `416.6K 🔥` `-40%`
1. [下午洗澡是一种混沌的感觉](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%8D%88%E6%B4%97%E6%BE%A1%E6%98%AF%E4%B8%80%E7%A7%8D%E6%B7%B7%E6%B2%8C%E7%9A%84%E6%84%9F%E8%A7%89%23) `388.3K 🔥` `-28%`
1. [淘宝免单轮番上阵](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%E8%BD%AE%E7%95%AA%E4%B8%8A%E9%98%B5%23) `384.8K 🔥` `-64%`
1. [张子枫手臂都是伤疤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E6%89%8B%E8%87%82%E9%83%BD%E6%98%AF%E4%BC%A4%E7%96%A4%23) `379.6K 🔥` `-22%`
1. [卢昱晓不敬业争议](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E4%B8%8D%E6%95%AC%E4%B8%9A%E4%BA%89%E8%AE%AE%23) `373.4K 🔥` `-35%`
1. [王心凌演出被镭射激光烫到腿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E5%87%8C%E6%BC%94%E5%87%BA%E8%A2%AB%E9%95%AD%E5%B0%84%E6%BF%80%E5%85%89%E7%83%AB%E5%88%B0%E8%85%BF%23) `369.3K 🔥` `-58%`
1. [拧巴的人谈恋爱belike](https://s.weibo.com/weibo?q=%23%E6%8B%A7%E5%B7%B4%E7%9A%84%E4%BA%BA%E8%B0%88%E6%81%8B%E7%88%B1belike%23) `362.8K 🔥` `-54%`
1. [长大后才懂父母为啥总在家里吃饭](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E6%89%8D%E6%87%82%E7%88%B6%E6%AF%8D%E4%B8%BA%E5%95%A5%E6%80%BB%E5%9C%A8%E5%AE%B6%E9%87%8C%E5%90%83%E9%A5%AD%23) `362.0K 🔥` `-24%`
1. [谢娜演唱会上座率 (Xie Na's concert attendance rate)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `356.4K 🔥` `-39%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `353.7K 🔥` `-27%`
1. [时代少年团五一演唱会带动消费14亿](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%BA%94%E4%B8%80%E6%BC%94%E5%94%B1%E4%BC%9A%E5%B8%A6%E5%8A%A8%E6%B6%88%E8%B4%B914%E4%BA%BF%23) `351.8K 🔥` `-26%`
1. [王橹杰高会 (Wang Lujie Gaohui)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%AB%98%E4%BC%9A%23) `339.3K 🔥` `-29%`
1. [外地车误入夜市被堆满垃圾掰断车牌](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9C%B0%E8%BD%A6%E8%AF%AF%E5%85%A5%E5%A4%9C%E5%B8%82%E8%A2%AB%E5%A0%86%E6%BB%A1%E5%9E%83%E5%9C%BE%E6%8E%B0%E6%96%AD%E8%BD%A6%E7%89%8C%23) `335.9K 🔥` `-40%`
1. [一家人在山姆接了3大袋免费芥末酱](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%BA%BA%E5%9C%A8%E5%B1%B1%E5%A7%86%E6%8E%A5%E4%BA%863%E5%A4%A7%E8%A2%8B%E5%85%8D%E8%B4%B9%E8%8A%A5%E6%9C%AB%E9%85%B1%23) `327.5K 🔥` `-41%`
1. [张一山回应与杨紫20年友情 (Zhang Yishan responded to his 20-year friendship with Yang Zi)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E5%B1%B1%E5%9B%9E%E5%BA%94%E4%B8%8E%E6%9D%A8%E7%B4%AB20%E5%B9%B4%E5%8F%8B%E6%83%85%23) `323.9K 🔥` `-40%`
1. [韩国民众对中国好感度达6年最高](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B0%91%E4%BC%97%E5%AF%B9%E4%B8%AD%E5%9B%BD%E5%A5%BD%E6%84%9F%E5%BA%A6%E8%BE%BE6%E5%B9%B4%E6%9C%80%E9%AB%98%23) `318.7K 🔥` `-32%`
1. [丢失7年手机突然发定位机主找回](https://s.weibo.com/weibo?q=%23%E4%B8%A2%E5%A4%B17%E5%B9%B4%E6%89%8B%E6%9C%BA%E7%AA%81%E7%84%B6%E5%8F%91%E5%AE%9A%E4%BD%8D%E6%9C%BA%E4%B8%BB%E6%89%BE%E5%9B%9E%23) `315.7K 🔥` `-53%`
1. [小米首台万级大电池手机曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A6%96%E5%8F%B0%E4%B8%87%E7%BA%A7%E5%A4%A7%E7%94%B5%E6%B1%A0%E6%89%8B%E6%9C%BA%E6%9B%9D%E5%85%89%23) `314.7K 🔥` `-25%`
1. [XC70被连续撞击三次会怎样](https://s.weibo.com/weibo?q=%23XC70%E8%A2%AB%E8%BF%9E%E7%BB%AD%E6%92%9E%E5%87%BB%E4%B8%89%E6%AC%A1%E4%BC%9A%E6%80%8E%E6%A0%B7%23) `313.5K 🔥` `-23%`

Updated at 2026-05-06 17:11:14

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
