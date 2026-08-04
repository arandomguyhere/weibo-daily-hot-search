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

1. [卫生巾 虫卵 (sanitary napkin eggs)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%20%E8%99%AB%E5%8D%B5%23) `1.6M 🔥` `NEW`
1. [上海雪花膏破产](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%9B%AA%E8%8A%B1%E8%86%8F%E7%A0%B4%E4%BA%A7%23) `1.2M 🔥` `NEW`
1. [5个案例看我国经济动能向新结构向优](https://s.weibo.com/weibo?q=%235%E4%B8%AA%E6%A1%88%E4%BE%8B%E7%9C%8B%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%8A%A8%E8%83%BD%E5%90%91%E6%96%B0%E7%BB%93%E6%9E%84%E5%90%91%E4%BC%98%23) `735.7K 🔥` `NEW`
1. [发朋友圈还要幸福者退让原则](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%BF%98%E8%A6%81%E5%B9%B8%E7%A6%8F%E8%80%85%E9%80%80%E8%AE%A9%E5%8E%9F%E5%88%99%23) `726.1K 🔥` `NEW`
1. [建议大家买行李箱不要太大众](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B9%B0%E8%A1%8C%E6%9D%8E%E7%AE%B1%E4%B8%8D%E8%A6%81%E5%A4%AA%E5%A4%A7%E4%BC%97%23) `720.2K 🔥` `NEW`
1. [婚外试管丈夫发声明患癌妻子气吐了](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%AF%95%E7%AE%A1%E4%B8%88%E5%A4%AB%E5%8F%91%E5%A3%B0%E6%98%8E%E6%82%A3%E7%99%8C%E5%A6%BB%E5%AD%90%E6%B0%94%E5%90%90%E4%BA%86%23) `719.6K 🔥` `NEW`
1. [央视纪录片红楼梦第一集被惊艳到了](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BA%AA%E5%BD%95%E7%89%87%E7%BA%A2%E6%A5%BC%E6%A2%A6%E7%AC%AC%E4%B8%80%E9%9B%86%E8%A2%AB%E6%83%8A%E8%89%B3%E5%88%B0%E4%BA%86%23) `634.6K 🔥` `NEW`
1. [T1战胜HLE](https://s.weibo.com/weibo?q=%23T1%E6%88%98%E8%83%9CHLE%23) `345.8K 🔥` `NEW`
1. [大冰直播假牙掉了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E7%9B%B4%E6%92%AD%E5%81%87%E7%89%99%E6%8E%89%E4%BA%86%23) `345.5K 🔥` `NEW`
1. [第一次对大骨架有了清晰的认知](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E5%A4%A7%E9%AA%A8%E6%9E%B6%E6%9C%89%E4%BA%86%E6%B8%85%E6%99%B0%E7%9A%84%E8%AE%A4%E7%9F%A5%23) `343.2K 🔥` `NEW`
1. [时代少年团 讨好感 (Times Youth League Sense of Pleasure)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E8%AE%A8%E5%A5%BD%E6%84%9F%23) `341.7K 🔥` `NEW`
1. [疑似梁文峰早期微博被扒](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%A2%81%E6%96%87%E5%B3%B0%E6%97%A9%E6%9C%9F%E5%BE%AE%E5%8D%9A%E8%A2%AB%E6%89%92%23) `340.5K 🔥` `NEW`
1. [甄嬛传AB组妆容差异](https://s.weibo.com/weibo?q=%23%E7%94%84%E5%AC%9B%E4%BC%A0AB%E7%BB%84%E5%A6%86%E5%AE%B9%E5%B7%AE%E5%BC%82%23) `339.7K 🔥` `NEW`
1. [颜值垫底双马尾小狗2400元卖掉了](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%80%BC%E5%9E%AB%E5%BA%95%E5%8F%8C%E9%A9%AC%E5%B0%BE%E5%B0%8F%E7%8B%972400%E5%85%83%E5%8D%96%E6%8E%89%E4%BA%86%23) `339.4K 🔥` `NEW`
1. [婚外胚胎案男子未回应伪造结婚证](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E7%94%B7%E5%AD%90%E6%9C%AA%E5%9B%9E%E5%BA%94%E4%BC%AA%E9%80%A0%E7%BB%93%E5%A9%9A%E8%AF%81%23) `337.9K 🔥` `NEW`
1. [花海澜无双签名](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7%E6%BE%9C%E6%97%A0%E5%8F%8C%E7%AD%BE%E5%90%8D%23) `337.4K 🔥` `NEW`
1. [国庆 请3休13](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%20%E8%AF%B73%E4%BC%9113%23) `335.8K 🔥` `NEW`
1. [上海飞东京飞机险撞机](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%A3%9E%E4%B8%9C%E4%BA%AC%E9%A3%9E%E6%9C%BA%E9%99%A9%E6%92%9E%E6%9C%BA%23) `334.7K 🔥` `NEW`
1. [电视剧人鱼今日开播](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E4%BA%BA%E9%B1%BC%E4%BB%8A%E6%97%A5%E5%BC%80%E6%92%AD%23) `333.2K 🔥` `NEW`
1. [张若昀回应写给唐艺昕备忘录爆火](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%9B%9E%E5%BA%94%E5%86%99%E7%BB%99%E5%94%90%E8%89%BA%E6%98%95%E5%A4%87%E5%BF%98%E5%BD%95%E7%88%86%E7%81%AB%23) `333.2K 🔥` `NEW`
1. [歌手总决赛赛制官宣 (Official announcement of the singer finals competition system)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%E8%B5%9B%E5%88%B6%E5%AE%98%E5%AE%A3%23) `271.6K 🔥` `NEW`
1. [黄灿灿方回应争议](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%96%B9%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `232.9K 🔥` `NEW`
1. [感受到虞书欣169身高了](https://s.weibo.com/weibo?q=%23%E6%84%9F%E5%8F%97%E5%88%B0%E8%99%9E%E4%B9%A6%E6%AC%A3169%E8%BA%AB%E9%AB%98%E4%BA%86%23) `229.4K 🔥` `NEW`
1. [两名女店员被炸身亡震动日本](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%90%8D%E5%A5%B3%E5%BA%97%E5%91%98%E8%A2%AB%E7%82%B8%E8%BA%AB%E4%BA%A1%E9%9C%87%E5%8A%A8%E6%97%A5%E6%9C%AC%23) `223.0K 🔥` `NEW`
1. [穆祉丞这什么雷霆视角](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%BF%99%E4%BB%80%E4%B9%88%E9%9B%B7%E9%9C%86%E8%A7%86%E8%A7%92%23) `210.7K 🔥` `NEW`
1. [迪丽热巴是闵塔鲨甲方](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%98%AF%E9%97%B5%E5%A1%94%E9%B2%A8%E7%94%B2%E6%96%B9%23) `200.1K 🔥` `NEW`
1. [胚胎案妻子说丈夫索要孩子花销明细](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E8%AF%B4%E4%B8%88%E5%A4%AB%E7%B4%A2%E8%A6%81%E5%AD%A9%E5%AD%90%E8%8A%B1%E9%94%80%E6%98%8E%E7%BB%86%23) `193.3K 🔥` `NEW`
1. [全伊伦照片是宋威龙拍的吗](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%BC%8A%E4%BC%A6%E7%85%A7%E7%89%87%E6%98%AF%E5%AE%8B%E5%A8%81%E9%BE%99%E6%8B%8D%E7%9A%84%E5%90%97%23) `190.5K 🔥` `NEW`
1. [心动9嘉宾刚见面就一块了](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A89%E5%98%89%E5%AE%BE%E5%88%9A%E8%A7%81%E9%9D%A2%E5%B0%B1%E4%B8%80%E5%9D%97%E4%BA%86%23) `188.6K 🔥` `NEW`
1. [Claude究竟吃了多少个鲁迅](https://s.weibo.com/weibo?q=%23Claude%E7%A9%B6%E7%AB%9F%E5%90%83%E4%BA%86%E5%A4%9A%E5%B0%91%E4%B8%AA%E9%B2%81%E8%BF%85%23) `187.2K 🔥` `NEW`
1. [给KPL的巴黎心愿单 (Paris wish list for KPL)](https://s.weibo.com/weibo?q=%23%E7%BB%99KPL%E7%9A%84%E5%B7%B4%E9%BB%8E%E5%BF%83%E6%84%BF%E5%8D%95%23) `185.0K 🔥` `NEW`
1. [白敬亭郭晓婷好正的民国cp](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E9%83%AD%E6%99%93%E5%A9%B7%E5%A5%BD%E6%AD%A3%E7%9A%84%E6%B0%91%E5%9B%BDcp%23) `185.0K 🔥` `NEW`
1. [禁止将本书用于人工智能训练](https://s.weibo.com/weibo?q=%23%E7%A6%81%E6%AD%A2%E5%B0%86%E6%9C%AC%E4%B9%A6%E7%94%A8%E4%BA%8E%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E8%AE%AD%E7%BB%83%23) `178.8K 🔥` `NEW`
1. [蒋欣自己评论了路透图说自己装](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%E8%87%AA%E5%B7%B1%E8%AF%84%E8%AE%BA%E4%BA%86%E8%B7%AF%E9%80%8F%E5%9B%BE%E8%AF%B4%E8%87%AA%E5%B7%B1%E8%A3%85%23) `167.3K 🔥` `NEW`
1. [Haru拍的贺峻霖](https://s.weibo.com/weibo?q=%23Haru%E6%8B%8D%E7%9A%84%E8%B4%BA%E5%B3%BB%E9%9C%96%23) `161.3K 🔥` `NEW`
1. [ewc首发选拔官方回应](https://s.weibo.com/weibo?q=%23ewc%E9%A6%96%E5%8F%91%E9%80%89%E6%8B%94%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%23) `152.6K 🔥` `NEW`
1. [Angelababy羌族服饰路透](https://s.weibo.com/weibo?q=%23Angelababy%E7%BE%8C%E6%97%8F%E6%9C%8D%E9%A5%B0%E8%B7%AF%E9%80%8F%23) `152.6K 🔥` `NEW`
1. [汕尾地震](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%B0%BE%E5%9C%B0%E9%9C%87%23) `147.6K 🔥` `NEW`
1. [业内人士称银行从不午休是不敢第一个休](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E4%BA%BA%E5%A3%AB%E7%A7%B0%E9%93%B6%E8%A1%8C%E4%BB%8E%E4%B8%8D%E5%8D%88%E4%BC%91%E6%98%AF%E4%B8%8D%E6%95%A2%E7%AC%AC%E4%B8%80%E4%B8%AA%E4%BC%91%23) `147.2K 🔥` `NEW`
1. [谁来管管AI漫剧女主的穿搭](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E7%AE%A1%E7%AE%A1AI%E6%BC%AB%E5%89%A7%E5%A5%B3%E4%B8%BB%E7%9A%84%E7%A9%BF%E6%90%AD%23) `710.5K 🔥` `+86%`
1. [方圆疑似做了腰腹环吸 (Fangyuan is suspected of having a waist and abdomen ring.)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E7%96%91%E4%BC%BC%E5%81%9A%E4%BA%86%E8%85%B0%E8%85%B9%E7%8E%AF%E5%90%B8%23) `344.2K 🔥`
1. [医院最难治的就是病人的反骨 (The most difficult thing to treat in the hospital is the patient’s rebelliousness)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E6%9C%80%E9%9A%BE%E6%B2%BB%E7%9A%84%E5%B0%B1%E6%98%AF%E7%97%85%E4%BA%BA%E7%9A%84%E5%8F%8D%E9%AA%A8%23) `236.3K 🔥`
1. [为什么冰箱能一直开但空调不能 (Why can the refrigerator be turned on all the time but the air conditioner cannot?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%86%B0%E7%AE%B1%E8%83%BD%E4%B8%80%E7%9B%B4%E5%BC%80%E4%BD%86%E7%A9%BA%E8%B0%83%E4%B8%8D%E8%83%BD%23) `480.1K 🔥` `-59%`
1. [全球第三大富豪易主](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E7%AC%AC%E4%B8%89%E5%A4%A7%E5%AF%8C%E8%B1%AA%E6%98%93%E4%B8%BB%23) `342.3K 🔥` `-61%`
1. [女子山姆40元买披萨吃出108元剪刀](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B1%B1%E5%A7%8640%E5%85%83%E4%B9%B0%E6%8A%AB%E8%90%A8%E5%90%83%E5%87%BA108%E5%85%83%E5%89%AA%E5%88%80%23) `336.0K 🔥` `-60%`
1. [小眼睛多平台撤销李荣浩作曲](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%9C%BC%E7%9D%9B%E5%A4%9A%E5%B9%B3%E5%8F%B0%E6%92%A4%E9%94%80%E6%9D%8E%E8%8D%A3%E6%B5%A9%E4%BD%9C%E6%9B%B2%23) `222.4K 🔥` `-73%`
1. [歌手总决赛帮唱](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%E5%B8%AE%E5%94%B1%23) `220.3K 🔥` `-78%`
1. [洞洞鞋真的是脚气培养皿吗](https://s.weibo.com/weibo?q=%23%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9C%9F%E7%9A%84%E6%98%AF%E8%84%9A%E6%B0%94%E5%9F%B9%E5%85%BB%E7%9A%BF%E5%90%97%23) `215.4K 🔥` `-35%`
1. [1人操控100个账号把旅游搭子骗去新疆](https://s.weibo.com/weibo?q=%231%E4%BA%BA%E6%93%8D%E6%8E%A7100%E4%B8%AA%E8%B4%A6%E5%8F%B7%E6%8A%8A%E6%97%85%E6%B8%B8%E6%90%AD%E5%AD%90%E9%AA%97%E5%8E%BB%E6%96%B0%E7%96%86%23) `152.5K 🔥` `-65%`

Updated at 2026-08-04 18:05:54

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
