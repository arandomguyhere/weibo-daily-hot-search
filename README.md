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

1. [财神窦占龙动画开播](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E7%A5%9E%E7%AA%A6%E5%8D%A0%E9%BE%99%E5%8A%A8%E7%94%BB%E5%BC%80%E6%92%AD%23) `783.5K 🔥` `NEW`
1. [王俊凯王源TOP张峻豪TF四代同时演出](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90TOP%E5%BC%A0%E5%B3%BB%E8%B1%AATF%E5%9B%9B%E4%BB%A3%E5%90%8C%E6%97%B6%E6%BC%94%E5%87%BA%23) `760.0K 🔥` `NEW`
1. [牛来是为拿百万补贴吗](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E6%98%AF%E4%B8%BA%E6%8B%BF%E7%99%BE%E4%B8%87%E8%A1%A5%E8%B4%B4%E5%90%97%23) `528.5K 🔥` `NEW`
1. [奥迪e-tron满电就位](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AAe-tron%E6%BB%A1%E7%94%B5%E5%B0%B1%E4%BD%8D%23) `242.0K 🔥` `NEW`
1. [第一批看牛来的人发声了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%9C%8B%E7%89%9B%E6%9D%A5%E7%9A%84%E4%BA%BA%E5%8F%91%E5%A3%B0%E4%BA%86%23) `219.1K 🔥` `NEW`
1. [瑞幸联名 份子钱](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E8%81%94%E5%90%8D%20%E4%BB%BD%E5%AD%90%E9%92%B1%23) `203.3K 🔥` `NEW`
1. [等了好久的妆造是遗照](https://s.weibo.com/weibo?q=%23%E7%AD%89%E4%BA%86%E5%A5%BD%E4%B9%85%E7%9A%84%E5%A6%86%E9%80%A0%E6%98%AF%E9%81%97%E7%85%A7%23) `201.6K 🔥` `NEW`
1. [女儿产后自杀母亲回应被指重男轻女](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E4%BA%A7%E5%90%8E%E8%87%AA%E6%9D%80%E6%AF%8D%E4%BA%B2%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8C%87%E9%87%8D%E7%94%B7%E8%BD%BB%E5%A5%B3%23) `200.5K 🔥` `NEW`
1. [朱一龙为了拍空枪每天学粤语学到疯](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E4%B8%BA%E4%BA%86%E6%8B%8D%E7%A9%BA%E6%9E%AA%E6%AF%8F%E5%A4%A9%E5%AD%A6%E7%B2%A4%E8%AF%AD%E5%AD%A6%E5%88%B0%E7%96%AF%23) `155.1K 🔥` `NEW`
1. [瑞幸七夕联名 素人情侣](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E4%B8%83%E5%A4%95%E8%81%94%E5%90%8D%20%E7%B4%A0%E4%BA%BA%E6%83%85%E4%BE%A3%23) `149.8K 🔥` `NEW`
1. [邓为迪奥合照](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E8%BF%AA%E5%A5%A5%E5%90%88%E7%85%A7%23) `148.3K 🔥` `NEW`
1. [其实人最好的状态就是销声匿迹](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E4%BA%BA%E6%9C%80%E5%A5%BD%E7%9A%84%E7%8A%B6%E6%80%81%E5%B0%B1%E6%98%AF%E9%94%80%E5%A3%B0%E5%8C%BF%E8%BF%B9%23) `143.6K 🔥` `NEW`
1. [独居后才发现有这么多家务活要干](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E5%B1%85%E5%90%8E%E6%89%8D%E5%8F%91%E7%8E%B0%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E5%AE%B6%E5%8A%A1%E6%B4%BB%E8%A6%81%E5%B9%B2%23) `141.7K 🔥` `NEW`
1. [张睿一看手机天又塌了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E4%B8%80%E7%9C%8B%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%8F%88%E5%A1%8C%E4%BA%86%23) `778.0K 🔥` `+23%`
1. [突然发现世界真的会奖励善良的人 (Suddenly I discovered that the world really rewards kind people)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E4%B8%96%E7%95%8C%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%A5%96%E5%8A%B1%E5%96%84%E8%89%AF%E7%9A%84%E4%BA%BA%23) `712.2K 🔥` `+24%`
1. [你好星期六七夕全员错付](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E4%B8%83%E5%A4%95%E5%85%A8%E5%91%98%E9%94%99%E4%BB%98%23) `1.1M 🔥`
1. [胖东来将闭门店28个收银口排长龙 (Fat Dong Lai will close its stores and there will be long queues at 28 cashiers.)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%B0%86%E9%97%AD%E9%97%A8%E5%BA%9728%E4%B8%AA%E6%94%B6%E9%93%B6%E5%8F%A3%E6%8E%92%E9%95%BF%E9%BE%99%23) `790.6K 🔥`
1. [进货式游中国火了 (Purchase-style travel to China is popular)](https://s.weibo.com/weibo?q=%23%E8%BF%9B%E8%B4%A7%E5%BC%8F%E6%B8%B8%E4%B8%AD%E5%9B%BD%E7%81%AB%E4%BA%86%23) `786.2K 🔥`
1. [打赏要求陪睡男子为9家企业法人](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%B5%8F%E8%A6%81%E6%B1%82%E9%99%AA%E7%9D%A1%E7%94%B7%E5%AD%90%E4%B8%BA9%E5%AE%B6%E4%BC%81%E4%B8%9A%E6%B3%95%E4%BA%BA%23) `774.4K 🔥`
1. [恋爱AA制还有必要谈吗 (Is it still necessary to talk about the AA system of love?)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%88%B1AA%E5%88%B6%E8%BF%98%E6%9C%89%E5%BF%85%E8%A6%81%E8%B0%88%E5%90%97%23) `760.2K 🔥`
1. [曾辉清唱后孙楠表情](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%B8%85%E5%94%B1%E5%90%8E%E5%AD%99%E6%A5%A0%E8%A1%A8%E6%83%85%23) `336.1K 🔥`
1. [手机涨价何时是个头](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E4%BD%95%E6%97%B6%E6%98%AF%E4%B8%AA%E5%A4%B4%23) `242.2K 🔥`
1. [曝谷爱凌LV三公子恋情 (Gu Ailing’s love affair with LV’s third son revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B0%B7%E7%88%B1%E5%87%8CLV%E4%B8%89%E5%85%AC%E5%AD%90%E6%81%8B%E6%83%85%23) `236.8K 🔥`
1. [女子产后抑郁自杀生前备忘录曝光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%A7%E5%90%8E%E6%8A%91%E9%83%81%E8%87%AA%E6%9D%80%E7%94%9F%E5%89%8D%E5%A4%87%E5%BF%98%E5%BD%95%E6%9B%9D%E5%85%89%23) `232.3K 🔥`
1. [旺旺晒出无糖低糖新品 (Want Want launches new sugar-free and low-sugar products)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E6%99%92%E5%87%BA%E6%97%A0%E7%B3%96%E4%BD%8E%E7%B3%96%E6%96%B0%E5%93%81%23) `212.3K 🔥`
1. [你好星期六发了我们的少年时代2](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E5%8F%91%E4%BA%86%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `212.1K 🔥`
1. [带大3个非亲生孙女婆婆哀求留下一个](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E5%A4%A73%E4%B8%AA%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%AD%99%E5%A5%B3%E5%A9%86%E5%A9%86%E5%93%80%E6%B1%82%E7%95%99%E4%B8%8B%E4%B8%80%E4%B8%AA%23) `210.1K 🔥`
1. [菲律宾防长指挥军队抓捕中国工人](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E9%98%B2%E9%95%BF%E6%8C%87%E6%8C%A5%E5%86%9B%E9%98%9F%E6%8A%93%E6%8D%95%E4%B8%AD%E5%9B%BD%E5%B7%A5%E4%BA%BA%23) `204.8K 🔥`
1. [曝C罗家人都未出席婚礼](https://s.weibo.com/weibo?q=%23%E6%9B%9DC%E7%BD%97%E5%AE%B6%E4%BA%BA%E9%83%BD%E6%9C%AA%E5%87%BA%E5%B8%AD%E5%A9%9A%E7%A4%BC%23) `190.1K 🔥`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `182.5K 🔥`
1. [被公诉女主播已赔偿榜一大哥200万 (The female anchor who was prosecuted has compensated the top brother on the list 2 million)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%85%AC%E8%AF%89%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%B7%B2%E8%B5%94%E5%81%BF%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5200%E4%B8%87%23) `178.0K 🔥`
1. [国乒围剿张本美和](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%9B%B4%E5%89%BF%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `160.4K 🔥`
1. [于东来饭店消费380元支付600元](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E9%A5%AD%E5%BA%97%E6%B6%88%E8%B4%B9380%E5%85%83%E6%94%AF%E4%BB%98600%E5%85%83%23) `155.2K 🔥`
1. [严查社保实缴会逼企业裁员吗](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%9F%A5%E7%A4%BE%E4%BF%9D%E5%AE%9E%E7%BC%B4%E4%BC%9A%E9%80%BC%E4%BC%81%E4%B8%9A%E8%A3%81%E5%91%98%E5%90%97%23) `140.7K 🔥`
1. [王祖贤说我们是用AI不是被AI用](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4%E8%AF%B4%E6%88%91%E4%BB%AC%E6%98%AF%E7%94%A8AI%E4%B8%8D%E6%98%AF%E8%A2%ABAI%E7%94%A8%23) `137.6K 🔥`
1. [许昌店主称胖东来附近店面会很难抢 (A store owner in Xuchang said it would be difficult to grab a store near Fat Dong Lai)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%8C%E5%BA%97%E4%B8%BB%E7%A7%B0%E8%83%96%E4%B8%9C%E6%9D%A5%E9%99%84%E8%BF%91%E5%BA%97%E9%9D%A2%E4%BC%9A%E5%BE%88%E9%9A%BE%E6%8A%A2%23) `345.2K 🔥` `-26%`
1. [雷军晒15年前小米手机发布会](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%99%9215%E5%B9%B4%E5%89%8D%E5%B0%8F%E7%B1%B3%E6%89%8B%E6%9C%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `327.1K 🔥` `-48%`
1. [王传君终于原谅爱情公寓了 (Wang Chuanjun finally forgives iPartment)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%BA%86%23) `309.2K 🔥` `-27%`
1. [群演待遇 8小时后1.5倍工资](https://s.weibo.com/weibo?q=%23%E7%BE%A4%E6%BC%94%E5%BE%85%E9%81%87%208%E5%B0%8F%E6%97%B6%E5%90%8E1.5%E5%80%8D%E5%B7%A5%E8%B5%84%23) `305.1K 🔥` `-24%`
1. [中国籍男子在靖国神社附近挥舞国旗](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%B1%8D%E7%94%B7%E5%AD%90%E5%9C%A8%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E9%99%84%E8%BF%91%E6%8C%A5%E8%88%9E%E5%9B%BD%E6%97%97%23) `290.4K 🔥` `-21%`
1. [曾辉把炎亚纶炸出来了 (Zeng Hui blew up Yan Yalun)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%8A%8A%E7%82%8E%E4%BA%9A%E7%BA%B6%E7%82%B8%E5%87%BA%E6%9D%A5%E4%BA%86%23) `272.6K 🔥` `-54%`
1. [日军在南京每晚一千起强奸案](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%86%9B%E5%9C%A8%E5%8D%97%E4%BA%AC%E6%AF%8F%E6%99%9A%E4%B8%80%E5%8D%83%E8%B5%B7%E5%BC%BA%E5%A5%B8%E6%A1%88%23) `241.8K 🔥` `-40%`
1. [我们的少年时代2开播热度](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E5%BC%80%E6%92%AD%E7%83%AD%E5%BA%A6%23) `226.9K 🔥` `-31%`
1. [沪上阿姨 蹭流量 (Auntie from Shanghai, using traffic)](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%20%E8%B9%AD%E6%B5%81%E9%87%8F%23) `207.0K 🔥` `-22%`
1. [四六级 (Level 4 and Level 6)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%23) `197.3K 🔥` `-22%`
1. [我们的少年时代2主角设定](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E4%B8%BB%E8%A7%92%E8%AE%BE%E5%AE%9A%23) `167.2K 🔥` `-37%`
1. [王橹杰我们的少年时代2C位](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32C%E4%BD%8D%23) `155.1K 🔥` `-24%`
1. [老人闯高速身亡子女索赔13万 (Elderly man dies after running on highway, children claim compensation for RMB 130,000)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E9%97%AF%E9%AB%98%E9%80%9F%E8%BA%AB%E4%BA%A1%E5%AD%90%E5%A5%B3%E7%B4%A2%E8%B5%9413%E4%B8%87%23) `146.3K 🔥` `-32%`
1. [韩国强烈批评日本](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%BC%BA%E7%83%88%E6%89%B9%E8%AF%84%E6%97%A5%E6%9C%AC%23) `137.8K 🔥` `-53%`

Updated at 2026-08-16 13:47:09

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
