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

1. [鸿蒙智行回应竹知了事件 (Hongmeng Zhixing responds to Zhu Zhi incident)](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E5%9B%9E%E5%BA%94%E7%AB%B9%E7%9F%A5%E4%BA%86%E4%BA%8B%E4%BB%B6%23) `1.3M 🔥` `NEW`
1. [谁是联合利刃未来战场主角](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%98%AF%E8%81%94%E5%90%88%E5%88%A9%E5%88%83%E6%9C%AA%E6%9D%A5%E6%88%98%E5%9C%BA%E4%B8%BB%E8%A7%92%23) `857.0K 🔥` `NEW`
1. [微信翻译 清朝变明朝](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%BF%BB%E8%AF%91%20%E6%B8%85%E6%9C%9D%E5%8F%98%E6%98%8E%E6%9C%9D%23) `488.7K 🔥` `NEW`
1. [地球超新鲜2 弹幕](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E8%B6%85%E6%96%B0%E9%B2%9C2%20%E5%BC%B9%E5%B9%95%23) `439.9K 🔥` `NEW`
1. [九尾退出时差3录制](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E9%80%80%E5%87%BA%E6%97%B6%E5%B7%AE3%E5%BD%95%E5%88%B6%23) `438.1K 🔥` `NEW`
1. [gmm艺人不参加文化交流之夜](https://s.weibo.com/weibo?q=%23gmm%E8%89%BA%E4%BA%BA%E4%B8%8D%E5%8F%82%E5%8A%A0%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B9%8B%E5%A4%9C%23) `430.6K 🔥` `NEW`
1. [张婧仪发高烧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%8F%91%E9%AB%98%E7%83%A7%23) `417.4K 🔥` `NEW`
1. [徐艺洋晒与全红婵合照](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E6%99%92%E4%B8%8E%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%90%88%E7%85%A7%23) `410.1K 🔥` `NEW`
1. [中际旭创禁售传闻](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%99%85%E6%97%AD%E5%88%9B%E7%A6%81%E5%94%AE%E4%BC%A0%E9%97%BB%23) `404.7K 🔥` `NEW`
1. [冷冻肉超过这个时间就别吃了](https://s.weibo.com/weibo?q=%23%E5%86%B7%E5%86%BB%E8%82%89%E8%B6%85%E8%BF%87%E8%BF%99%E4%B8%AA%E6%97%B6%E9%97%B4%E5%B0%B1%E5%88%AB%E5%90%83%E4%BA%86%23) `377.5K 🔥` `NEW`
1. [我们的少年时代2 (Our Boyhood 2)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `365.2K 🔥` `NEW`
1. [死刑改死缓被害人家属十年后才知晓](https://s.weibo.com/weibo?q=%23%E6%AD%BB%E5%88%91%E6%94%B9%E6%AD%BB%E7%BC%93%E8%A2%AB%E5%AE%B3%E4%BA%BA%E5%AE%B6%E5%B1%9E%E5%8D%81%E5%B9%B4%E5%90%8E%E6%89%8D%E7%9F%A5%E6%99%93%23) `364.5K 🔥` `NEW`
1. [虞书欣篮球赛场贝微微](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%AF%AE%E7%90%83%E8%B5%9B%E5%9C%BA%E8%B4%9D%E5%BE%AE%E5%BE%AE%23) `363.3K 🔥` `NEW`
1. [墨女网红被前男友毒枭父亲谋杀](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%A2%AB%E5%89%8D%E7%94%B7%E5%8F%8B%E6%AF%92%E6%9E%AD%E7%88%B6%E4%BA%B2%E8%B0%8B%E6%9D%80%23) `362.9K 🔥` `NEW`
1. [陈哲远看九门曾舜晞看御廷谣](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E7%9C%8B%E4%B9%9D%E9%97%A8%E6%9B%BE%E8%88%9C%E6%99%9E%E7%9C%8B%E5%BE%A1%E5%BB%B7%E8%B0%A3%23) `361.7K 🔥` `NEW`
1. [曾沛慈方发声明](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E6%96%B9%E5%8F%91%E5%A3%B0%E6%98%8E%23) `360.4K 🔥` `NEW`
1. [武汉制冰师傅1年休5个月月入20万元](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%88%B6%E5%86%B0%E5%B8%88%E5%82%851%E5%B9%B4%E4%BC%915%E4%B8%AA%E6%9C%88%E6%9C%88%E5%85%A520%E4%B8%87%E5%85%83%23) `359.0K 🔥` `NEW`
1. [时差巴黎铁塔摄影大赛](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%B7%AE%E5%B7%B4%E9%BB%8E%E9%93%81%E5%A1%94%E6%91%84%E5%BD%B1%E5%A4%A7%E8%B5%9B%23) `358.1K 🔥` `NEW`
1. [宋亚轩严浩翔贺峻霖发色像理发店色卡](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%8F%91%E8%89%B2%E5%83%8F%E7%90%86%E5%8F%91%E5%BA%97%E8%89%B2%E5%8D%A1%23) `356.6K 🔥` `NEW`
1. [影视寒冬最不愁找工作的人](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E6%9C%80%E4%B8%8D%E6%84%81%E6%89%BE%E5%B7%A5%E4%BD%9C%E7%9A%84%E4%BA%BA%23) `346.0K 🔥` `NEW`
1. [范丞丞说正太扭腰来不了 (Fan Chengcheng said that Mr. Zhengtai couldn’t come because he twisted his waist.)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%AF%B4%E6%AD%A3%E5%A4%AA%E6%89%AD%E8%85%B0%E6%9D%A5%E4%B8%8D%E4%BA%86%23) `337.1K 🔥` `NEW`
1. [黄灿灿曾自曝喜欢了曾沛慈十多年](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%9B%BE%E8%87%AA%E6%9B%9D%E5%96%9C%E6%AC%A2%E4%BA%86%E6%9B%BE%E6%B2%9B%E6%85%88%E5%8D%81%E5%A4%9A%E5%B9%B4%23) `331.1K 🔥` `NEW`
1. [宋亚轩不想讨论就直说](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%8D%E6%83%B3%E8%AE%A8%E8%AE%BA%E5%B0%B1%E7%9B%B4%E8%AF%B4%23) `297.5K 🔥` `NEW`
1. [李飞把TFBOYS签名照放保险柜](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A3%9E%E6%8A%8ATFBOYS%E7%AD%BE%E5%90%8D%E7%85%A7%E6%94%BE%E4%BF%9D%E9%99%A9%E6%9F%9C%23) `294.3K 🔥` `NEW`
1. [心理学上有个词叫螃蟹效应](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%90%86%E5%AD%A6%E4%B8%8A%E6%9C%89%E4%B8%AA%E8%AF%8D%E5%8F%AB%E8%9E%83%E8%9F%B9%E6%95%88%E5%BA%94%23) `289.9K 🔥` `NEW`
1. [穆祉丞叫粉丝兄弟](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%8F%AB%E7%B2%89%E4%B8%9D%E5%85%84%E5%BC%9F%23) `289.6K 🔥` `NEW`
1. [韩国高温已致16人死亡](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%AB%98%E6%B8%A9%E5%B7%B2%E8%87%B416%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `178.2K 🔥` `NEW`
1. [外国小哥模仿虞书欣这段好搞笑](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E5%B0%8F%E5%93%A5%E6%A8%A1%E4%BB%BF%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%BF%99%E6%AE%B5%E5%A5%BD%E6%90%9E%E7%AC%91%23) `169.1K 🔥` `NEW`
1. [婚外胚胎案夫妻是白手起家](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%A4%AB%E5%A6%BB%E6%98%AF%E7%99%BD%E6%89%8B%E8%B5%B7%E5%AE%B6%23) `164.6K 🔥` `NEW`
1. [宋茜鎏金长裙](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%8C%9C%E9%8E%8F%E9%87%91%E9%95%BF%E8%A3%99%23) `161.3K 🔥` `NEW`
1. [野狗骨头 (wild dog bones)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `157.5K 🔥` `NEW`
1. [周启豪1比3松岛辉空](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%90%AF%E8%B1%AA1%E6%AF%943%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `146.9K 🔥` `NEW`
1. [天才女友炽夏2.0](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%E7%82%BD%E5%A4%8F2.0%23) `141.7K 🔥` `NEW`
1. [韩国罕见高温致19死](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%95%E8%A7%81%E9%AB%98%E6%B8%A9%E8%87%B419%E6%AD%BB%23) `136.2K 🔥` `NEW`
1. [泰航拒绝20多名中国乘客登机](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E8%88%AA%E6%8B%92%E7%BB%9D20%E5%A4%9A%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%B9%98%E5%AE%A2%E7%99%BB%E6%9C%BA%23) `2.7M 🔥` `+192%`
1. [人不在工位一定要把豆包关了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%8D%E5%9C%A8%E5%B7%A5%E4%BD%8D%E4%B8%80%E5%AE%9A%E8%A6%81%E6%8A%8A%E8%B1%86%E5%8C%85%E5%85%B3%E4%BA%86%23) `758.7K 🔥` `+48%`
1. [内娱新四大名著 (Four new masterpieces of domestic entertainment)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%96%B0%E5%9B%9B%E5%A4%A7%E5%90%8D%E8%91%97%23) `585.5K 🔥` `+31%`
1. [疑似梁文锋早期微博被扒](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%A2%81%E6%96%87%E9%94%8B%E6%97%A9%E6%9C%9F%E5%BE%AE%E5%8D%9A%E8%A2%AB%E6%89%92%23) `340.6K 🔥` `+74%`
1. [发朋友圈还要幸福者退让原则 (Posting on Moments requires the principle of giving in to those who are happy)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%BF%98%E8%A6%81%E5%B9%B8%E7%A6%8F%E8%80%85%E9%80%80%E8%AE%A9%E5%8E%9F%E5%88%99%23) `458.0K 🔥`
1. [田曦薇猫咪外貌引韩网热议](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%8C%AB%E5%92%AA%E5%A4%96%E8%B2%8C%E5%BC%95%E9%9F%A9%E7%BD%91%E7%83%AD%E8%AE%AE%23) `426.4K 🔥`
1. [当十岁的妹妹有了自己的微信](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%8D%81%E5%B2%81%E7%9A%84%E5%A6%B9%E5%A6%B9%E6%9C%89%E4%BA%86%E8%87%AA%E5%B7%B1%E7%9A%84%E5%BE%AE%E4%BF%A1%23) `359.9K 🔥`
1. [情绪价值十年前罗子君随手就给了](https://s.weibo.com/weibo?q=%23%E6%83%85%E7%BB%AA%E4%BB%B7%E5%80%BC%E5%8D%81%E5%B9%B4%E5%89%8D%E7%BD%97%E5%AD%90%E5%90%9B%E9%9A%8F%E6%89%8B%E5%B0%B1%E7%BB%99%E4%BA%86%23) `145.2K 🔥`
1. [建议大家买行李箱不要太大众 (It is recommended that you don’t buy suitcases that are too popular.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B9%B0%E8%A1%8C%E6%9D%8E%E7%AE%B1%E4%B8%8D%E8%A6%81%E5%A4%AA%E5%A4%A7%E4%BC%97%23) `650.1K 🔥` `-31%`
1. [光模块](https://s.weibo.com/weibo?q=%23%E5%85%89%E6%A8%A1%E5%9D%97%23) `422.8K 🔥` `-55%`
1. [花海游戏账号被盗](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7%E6%B8%B8%E6%88%8F%E8%B4%A6%E5%8F%B7%E8%A2%AB%E7%9B%97%23) `407.8K 🔥` `-56%`
1. [禁止将本书用于人工智能训练](https://s.weibo.com/weibo?q=%23%E7%A6%81%E6%AD%A2%E5%B0%86%E6%9C%AC%E4%B9%A6%E7%94%A8%E4%BA%8E%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E8%AE%AD%E7%BB%83%23) `310.4K 🔥` `-68%`
1. [甄嬛传AB组妆容差异](https://s.weibo.com/weibo?q=%23%E7%94%84%E5%AC%9B%E4%BC%A0AB%E7%BB%84%E5%A6%86%E5%AE%B9%E5%B7%AE%E5%BC%82%23) `200.0K 🔥` `-62%`
1. [大冰直播假牙掉了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E7%9B%B4%E6%92%AD%E5%81%87%E7%89%99%E6%8E%89%E4%BA%86%23) `171.9K 🔥` `-67%`
1. [婚外胚胎案男子让女儿提供明细才给钱](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E7%94%B7%E5%AD%90%E8%AE%A9%E5%A5%B3%E5%84%BF%E6%8F%90%E4%BE%9B%E6%98%8E%E7%BB%86%E6%89%8D%E7%BB%99%E9%92%B1%23) `138.5K 🔥` `-55%`
1. [张凌赫晒了这一秒过火全家福](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%99%92%E4%BA%86%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%85%A8%E5%AE%B6%E7%A6%8F%23) `137.9K 🔥` `-74%`

Updated at 2026-08-04 22:41:06

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
