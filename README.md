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

1. [快递 涨价 (Express price increase)](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%20%E6%B6%A8%E4%BB%B7%23) `1.2M 🔥` `NEW`
1. [尚界Z7谁看谁尚头](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%E8%B0%81%E7%9C%8B%E8%B0%81%E5%B0%9A%E5%A4%B4%23) `646.5K 🔥` `NEW`
1. [赵丽颖版楚乔传](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%89%88%E6%A5%9A%E4%B9%94%E4%BC%A0%23) `489.0K 🔥` `NEW`
1. [张萌冰湖重生直播哭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E7%9B%B4%E6%92%AD%E5%93%AD%E4%BA%86%23) `414.5K 🔥` `NEW`
1. [中国国际时装周南京站](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9B%BD%E9%99%85%E6%97%B6%E8%A3%85%E5%91%A8%E5%8D%97%E4%BA%AC%E7%AB%99%23) `356.0K 🔥` `NEW`
1. [黄金涨跌逻辑变了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%B6%A8%E8%B7%8C%E9%80%BB%E8%BE%91%E5%8F%98%E4%BA%86%23) `290.0K 🔥` `NEW`
1. [莫氏鸡煲老板说自己养的鸡早卖完了](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E8%AF%B4%E8%87%AA%E5%B7%B1%E5%85%BB%E7%9A%84%E9%B8%A1%E6%97%A9%E5%8D%96%E5%AE%8C%E4%BA%86%23) `181.1K 🔥` `NEW`
1. [刘耀文流口水 AI生成](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%B5%81%E5%8F%A3%E6%B0%B4%20AI%E7%94%9F%E6%88%90%23) `177.9K 🔥` `NEW`
1. [特朗普威胁对向伊朗供武的国家加税](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A8%81%E8%83%81%E5%AF%B9%E5%90%91%E4%BC%8A%E6%9C%97%E4%BE%9B%E6%AD%A6%E7%9A%84%E5%9B%BD%E5%AE%B6%E5%8A%A0%E7%A8%8E%23) `176.6K 🔥` `NEW`
1. [吃12个汉堡被拉黑女子不接受道歉](https://s.weibo.com/weibo?q=%23%E5%90%8312%E4%B8%AA%E6%B1%89%E5%A0%A1%E8%A2%AB%E6%8B%89%E9%BB%91%E5%A5%B3%E5%AD%90%E4%B8%8D%E6%8E%A5%E5%8F%97%E9%81%93%E6%AD%89%23) `162.0K 🔥` `NEW`
1. [洲际酒店的霸王条款该收场了 (It’s time for the InterContinental Hotel’s dominance clause to end)](https://s.weibo.com/weibo?q=%23%E6%B4%B2%E9%99%85%E9%85%92%E5%BA%97%E7%9A%84%E9%9C%B8%E7%8E%8B%E6%9D%A1%E6%AC%BE%E8%AF%A5%E6%94%B6%E5%9C%BA%E4%BA%86%23) `160.9K 🔥` `NEW`
1. [吃了会肠胃胀气的食物](https://s.weibo.com/weibo?q=%23%E5%90%83%E4%BA%86%E4%BC%9A%E8%82%A0%E8%83%83%E8%83%80%E6%B0%94%E7%9A%84%E9%A3%9F%E7%89%A9%23) `159.8K 🔥` `NEW`
1. [浪姐倒数第一竞争太激烈了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%E7%AB%9E%E4%BA%89%E5%A4%AA%E6%BF%80%E7%83%88%E4%BA%86%23) `158.9K 🔥` `NEW`
1. [杨幂冯湮儿路透](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%86%AF%E6%B9%AE%E5%84%BF%E8%B7%AF%E9%80%8F%23) `146.0K 🔥` `NEW`
1. [周杰伦给王俊凯杨迪变魔术](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%BB%99%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%9D%A8%E8%BF%AA%E5%8F%98%E9%AD%94%E6%9C%AF%23) `141.3K 🔥` `NEW`
1. [长大后才意识到父母有多厉害](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E6%89%8D%E6%84%8F%E8%AF%86%E5%88%B0%E7%88%B6%E6%AF%8D%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%23) `139.1K 🔥` `NEW`
1. [刘宇宁被叫帅哥的反应](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%A2%AB%E5%8F%AB%E5%B8%85%E5%93%A5%E7%9A%84%E5%8F%8D%E5%BA%94%23) `138.8K 🔥` `NEW`
1. [浪姐](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `131.6K 🔥` `NEW`
1. [新阿维塔12重新定义时代好车](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%98%BF%E7%BB%B4%E5%A1%9412%E9%87%8D%E6%96%B0%E5%AE%9A%E4%B9%89%E6%97%B6%E4%BB%A3%E5%A5%BD%E8%BD%A6%23) `129.0K 🔥` `NEW`
1. [大麦发了王俊凯](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E5%8F%91%E4%BA%86%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `126.5K 🔥` `NEW`
1. [上报78亿实际到账不足1亿 (The reported 7.8 billion was actually less than 100 million received.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%8A%A578%E4%BA%BF%E5%AE%9E%E9%99%85%E5%88%B0%E8%B4%A6%E4%B8%8D%E8%B6%B31%E4%BA%BF%23) `115.9K 🔥` `NEW`
1. [原来焦虑症是这么来的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%84%A6%E8%99%91%E7%97%87%E6%98%AF%E8%BF%99%E4%B9%88%E6%9D%A5%E7%9A%84%23) `108.4K 🔥` `NEW`
1. [荣耀张雪机车战略合作](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%88%98%E7%95%A5%E5%90%88%E4%BD%9C%23) `99.2K 🔥` `NEW`
1. [世乒赛国乒男团卫冕难度空前](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B9%92%E8%B5%9B%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%8D%AB%E5%86%95%E9%9A%BE%E5%BA%A6%E7%A9%BA%E5%89%8D%23) `97.4K 🔥` `NEW`
1. [油价跳水金价上涨股市上涨](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E8%B7%B3%E6%B0%B4%E9%87%91%E4%BB%B7%E4%B8%8A%E6%B6%A8%E8%82%A1%E5%B8%82%E4%B8%8A%E6%B6%A8%23) `96.3K 🔥` `NEW`
1. [尖扎黄河特大桥事故致13死3失联](https://s.weibo.com/weibo?q=%23%E5%B0%96%E6%89%8E%E9%BB%84%E6%B2%B3%E7%89%B9%E5%A4%A7%E6%A1%A5%E4%BA%8B%E6%95%85%E8%87%B413%E6%AD%BB3%E5%A4%B1%E8%81%94%23) `94.0K 🔥` `NEW`
1. [超市2小时接到7笔五粮液订单报警](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%B8%822%E5%B0%8F%E6%97%B6%E6%8E%A5%E5%88%B07%E7%AC%94%E4%BA%94%E7%B2%AE%E6%B6%B2%E8%AE%A2%E5%8D%95%E6%8A%A5%E8%AD%A6%23) `93.6K 🔥` `NEW`
1. [当代年轻人的减肥现状](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BB%A3%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E5%87%8F%E8%82%A5%E7%8E%B0%E7%8A%B6%23) `90.5K 🔥` `NEW`
1. [小猫发现沙发抓不破后气得躺下了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%8F%91%E7%8E%B0%E6%B2%99%E5%8F%91%E6%8A%93%E4%B8%8D%E7%A0%B4%E5%90%8E%E6%B0%94%E5%BE%97%E8%BA%BA%E4%B8%8B%E4%BA%86%23) `90.1K 🔥` `NEW`
1. [邓凯直播](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E7%9B%B4%E6%92%AD%23) `89.1K 🔥` `NEW`
1. [穆祉丞 代言 (Mu Zhicheng endorsement)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E4%BB%A3%E8%A8%80%23) `85.4K 🔥` `NEW`
1. [阿维塔06T价格](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BB%B4%E5%A1%9406T%E4%BB%B7%E6%A0%BC%23) `81.0K 🔥` `NEW`
1. [浪姐白买版权](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%99%BD%E4%B9%B0%E7%89%88%E6%9D%83%23) `942.4K 🔥` `+292%`
1. [晒娃被网友催赶紧去医院宝妈发声](https://s.weibo.com/weibo?q=%23%E6%99%92%E5%A8%83%E8%A2%AB%E7%BD%91%E5%8F%8B%E5%82%AC%E8%B5%B6%E7%B4%A7%E5%8E%BB%E5%8C%BB%E9%99%A2%E5%AE%9D%E5%A6%88%E5%8F%91%E5%A3%B0%23) `244.7K 🔥` `+163%`
1. [时代峰峻声明](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%A3%B0%E6%98%8E%23) `167.3K 🔥` `+45%`
1. [春日经济新图景](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%97%A5%E7%BB%8F%E6%B5%8E%E6%96%B0%E5%9B%BE%E6%99%AF%23) `680.0K 🔥`
1. [失业的人可以从大冰这个角度找到机会 (Unemployed people can find opportunities from the perspective of Dabing)](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E4%B8%9A%E7%9A%84%E4%BA%BA%E5%8F%AF%E4%BB%A5%E4%BB%8E%E5%A4%A7%E5%86%B0%E8%BF%99%E4%B8%AA%E8%A7%92%E5%BA%A6%E6%89%BE%E5%88%B0%E6%9C%BA%E4%BC%9A%23) `173.4K 🔥`
1. [金子涵说的是谁](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E8%AF%B4%E7%9A%84%E6%98%AF%E8%B0%81%23) `160.4K 🔥`
1. [婆媳长期一起生活接连患乳腺癌](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%AA%B3%E9%95%BF%E6%9C%9F%E4%B8%80%E8%B5%B7%E7%94%9F%E6%B4%BB%E6%8E%A5%E8%BF%9E%E6%82%A3%E4%B9%B3%E8%85%BA%E7%99%8C%23) `159.2K 🔥`
1. [樊振东放弃伦敦世乒赛资格 (Fan Zhendong gives up qualification for World Table Tennis Championships in London)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%94%BE%E5%BC%83%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E8%B5%84%E6%A0%BC%23) `556.0K 🔥` `-64%`
1. [住酒店不带毛巾的人天塌了 (If you stay in a hotel without a towel, the sky is falling.)](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E9%85%92%E5%BA%97%E4%B8%8D%E5%B8%A6%E6%AF%9B%E5%B7%BE%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `204.0K 🔥` `-26%`
1. [江语晨 抚养权官司](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%20%E6%8A%9A%E5%85%BB%E6%9D%83%E5%AE%98%E5%8F%B8%23) `163.5K 🔥` `-24%`
1. [十日终焉官微 用户1231 (Ten Days End Yan Official WeChat User 1231)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%AE%98%E5%BE%AE%20%E7%94%A8%E6%88%B71231%23) `161.8K 🔥` `-25%`
1. [刘思维当爸爸了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%80%9D%E7%BB%B4%E5%BD%93%E7%88%B8%E7%88%B8%E4%BA%86%23) `161.8K 🔥` `-21%`
1. [秦志戬回应伦敦世乒赛名单 (Qin Zhijian responded to the London World Table Tennis Championships list)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%BF%97%E6%88%AC%E5%9B%9E%E5%BA%94%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%90%8D%E5%8D%95%23) `161.4K 🔥` `-26%`
1. [日本73岁老人来中国求职](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC73%E5%B2%81%E8%80%81%E4%BA%BA%E6%9D%A5%E4%B8%AD%E5%9B%BD%E6%B1%82%E8%81%8C%23) `158.2K 🔥` `-47%`
1. [伊朗拉万炼油厂发生爆炸](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8B%89%E4%B8%87%E7%82%BC%E6%B2%B9%E5%8E%82%E5%8F%91%E7%94%9F%E7%88%86%E7%82%B8%23) `138.1K 🔥` `-45%`
1. [哪吒2票房升至全球第4 (Ne Zha 2 box office rises to 4th in the world)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%922%E7%A5%A8%E6%88%BF%E5%8D%87%E8%87%B3%E5%85%A8%E7%90%83%E7%AC%AC4%23) `137.8K 🔥` `-84%`
1. [桃花坞](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E%23) `102.7K 🔥` `-28%`
1. [刘宇宁直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%23) `94.6K 🔥` `-54%`
1. [迪丽热巴花魁造型](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%8A%B1%E9%AD%81%E9%80%A0%E5%9E%8B%23) `93.3K 🔥` `-56%`

Updated at 2026-04-08 22:21:37

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
