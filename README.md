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

1. [许家印一审被判无期 (Xu Jiayin was sentenced to life in the first instance)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E4%B8%80%E5%AE%A1%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%23) `6.4M 🔥` `NEW`
1. [12377湖北开麦了](https://s.weibo.com/weibo?q=%2312377%E6%B9%96%E5%8C%97%E5%BC%80%E9%BA%A6%E4%BA%86%23) `1.3M 🔥` `NEW`
1. [兄妹恋和姐弟恋真的不一样](https://s.weibo.com/weibo?q=%23%E5%85%84%E5%A6%B9%E6%81%8B%E5%92%8C%E5%A7%90%E5%BC%9F%E6%81%8B%E7%9C%9F%E7%9A%84%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `1.3M 🔥` `NEW`
1. [恒大集团被罚88.2亿元](https://s.weibo.com/weibo?q=%23%E6%81%92%E5%A4%A7%E9%9B%86%E5%9B%A2%E8%A2%AB%E7%BD%9A88.2%E4%BA%BF%E5%85%83%23) `1.1M 🔥` `NEW`
1. [蔡徐坤起亚品牌代言人](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E8%B5%B7%E4%BA%9A%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `1.0M 🔥` `NEW`
1. [早春晴朗官宣OST阵容](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%AE%98%E5%AE%A3OST%E9%98%B5%E5%AE%B9%23) `857.9K 🔥` `NEW`
1. [警方回应车库出租被存放尸体](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E8%BD%A6%E5%BA%93%E5%87%BA%E7%A7%9F%E8%A2%AB%E5%AD%98%E6%94%BE%E5%B0%B8%E4%BD%93%23) `846.7K 🔥` `NEW`
1. [网友辣评支付宝100道假题](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%BE%A3%E8%AF%84%E6%94%AF%E4%BB%98%E5%AE%9D100%E9%81%93%E5%81%87%E9%A2%98%23) `824.0K 🔥` `NEW`
1. [男子查出胃溃疡70天后确诊胃癌](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9F%A5%E5%87%BA%E8%83%83%E6%BA%83%E7%96%A170%E5%A4%A9%E5%90%8E%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%23) `817.8K 🔥` `NEW`
1. [金季被全季酒店索赔十万元](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%A3%E8%A2%AB%E5%85%A8%E5%AD%A3%E9%85%92%E5%BA%97%E7%B4%A2%E8%B5%94%E5%8D%81%E4%B8%87%E5%85%83%23) `815.0K 🔥` `NEW`
1. [宇树上市第2天王兴兴最新发声 (Wang Xingxing’s latest statement on the second day of Yushu’s listing)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E4%B8%8A%E5%B8%82%E7%AC%AC2%E5%A4%A9%E7%8E%8B%E5%85%B4%E5%85%B4%E6%9C%80%E6%96%B0%E5%8F%91%E5%A3%B0%23) `808.8K 🔥` `NEW`
1. [蔡徐坤的满配新搭档](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E7%9A%84%E6%BB%A1%E9%85%8D%E6%96%B0%E6%90%AD%E6%A1%A3%23) `803.3K 🔥` `NEW`
1. [女子拒搭讪被辱骂涉事男子已到案](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%92%E6%90%AD%E8%AE%AA%E8%A2%AB%E8%BE%B1%E9%AA%82%E6%B6%89%E4%BA%8B%E7%94%B7%E5%AD%90%E5%B7%B2%E5%88%B0%E6%A1%88%23) `792.5K 🔥` `NEW`
1. [苹果9月发布会日期](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C9%E6%9C%88%E5%8F%91%E5%B8%83%E4%BC%9A%E6%97%A5%E6%9C%9F%23) `785.0K 🔥` `NEW`
1. [我家那闺女2026定档](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B32026%E5%AE%9A%E6%A1%A3%23) `769.8K 🔥` `NEW`
1. [空枪豆瓣7.1分](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%E8%B1%86%E7%93%A37.1%E5%88%86%23) `764.6K 🔥` `NEW`
1. [管泽元谈黑神话钟馗](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%E8%B0%88%E9%BB%91%E7%A5%9E%E8%AF%9D%E9%92%9F%E9%A6%97%23) `753.8K 🔥` `NEW`
1. [河北医院赤裸女童父母无智力障碍](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E5%8C%BB%E9%99%A2%E8%B5%A4%E8%A3%B8%E5%A5%B3%E7%AB%A5%E7%88%B6%E6%AF%8D%E6%97%A0%E6%99%BA%E5%8A%9B%E9%9A%9C%E7%A2%8D%23) `729.7K 🔥` `NEW`
1. [王橹杰比1穆祉丞的表情](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%AF%941%E7%A9%86%E7%A5%89%E4%B8%9E%E7%9A%84%E8%A1%A8%E6%83%85%23) `724.9K 🔥` `NEW`
1. [Lisa晒新纹身baby](https://s.weibo.com/weibo?q=%23Lisa%E6%99%92%E6%96%B0%E7%BA%B9%E8%BA%ABbaby%23) `721.8K 🔥` `NEW`
1. [安以轩代陈荣炼取款遭拒 (An Yixuan's withdrawal of money on behalf of Chen Ronglian was rejected)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E4%BB%A5%E8%BD%A9%E4%BB%A3%E9%99%88%E8%8D%A3%E7%82%BC%E5%8F%96%E6%AC%BE%E9%81%AD%E6%8B%92%23) `715.3K 🔥` `NEW`
1. [李兰迪千夜奇谭出妆](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E5%8D%83%E5%A4%9C%E5%A5%87%E8%B0%AD%E5%87%BA%E5%A6%86%23) `709.5K 🔥` `NEW`
1. [黑神话钟馗制作成本](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%A5%9E%E8%AF%9D%E9%92%9F%E9%A6%97%E5%88%B6%E4%BD%9C%E6%88%90%E6%9C%AC%23) `703.8K 🔥` `NEW`
1. [我家那闺女2026官宣节奏](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B32026%E5%AE%98%E5%AE%A3%E8%8A%82%E5%A5%8F%23) `686.6K 🔥` `NEW`
1. [连续值了5年夜班 只愿你健健康康 (I have been working night shifts for 5 consecutive years. I just wish you good health.)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD%E5%80%BC%E4%BA%865%E5%B9%B4%E5%A4%9C%E7%8F%AD%20%E5%8F%AA%E6%84%BF%E4%BD%A0%E5%81%A5%E5%81%A5%E5%BA%B7%E5%BA%B7%23) `1.3M 🔥` `+66%`
1. [抢公章](https://s.weibo.com/weibo?q=%23%E6%8A%A2%E5%85%AC%E7%AB%A0%23) `1.0M 🔥` `+120%`
1. [彭小苒承认恋情](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `851.0K 🔥` `+82%`
1. [艾滋病检测结果不得告知配偶 (HIV test results must not be disclosed to spouse)](https://s.weibo.com/weibo?q=%23%E8%89%BE%E6%BB%8B%E7%97%85%E6%A3%80%E6%B5%8B%E7%BB%93%E6%9E%9C%E4%B8%8D%E5%BE%97%E5%91%8A%E7%9F%A5%E9%85%8D%E5%81%B6%23) `836.6K 🔥` `+80%`
1. [任重宣布孙骁骁二胎](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E9%87%8D%E5%AE%A3%E5%B8%83%E5%AD%99%E9%AA%81%E9%AA%81%E4%BA%8C%E8%83%8E%23) `831.8K 🔥` `+80%`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `827.9K 🔥` `+76%`
1. [时代少年团 古茗](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%8F%A4%E8%8C%97%23) `777.4K 🔥` `+89%`
1. [鹤岗化城市名单](https://s.weibo.com/weibo?q=%23%E9%B9%A4%E5%B2%97%E5%8C%96%E5%9F%8E%E5%B8%82%E5%90%8D%E5%8D%95%23) `760.2K 🔥` `+136%`
1. [理想汽车宇树科技梦幻联动 (Li Auto Yushu Technology Dream Linkage)](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A6%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E6%A2%A6%E5%B9%BB%E8%81%94%E5%8A%A8%23) `751.6K 🔥` `+86%`
1. [遭枪击身亡处长女儿曾遭死亡威胁](https://s.weibo.com/weibo?q=%23%E9%81%AD%E6%9E%AA%E5%87%BB%E8%BA%AB%E4%BA%A1%E5%A4%84%E9%95%BF%E5%A5%B3%E5%84%BF%E6%9B%BE%E9%81%AD%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `747.7K 🔥` `+82%`
1. [小米人形机器人现场视频曝光 (Xiaomi humanoid robot live video exposed)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%8E%B0%E5%9C%BA%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `741.2K 🔥` `+70%`
1. [济南震感](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%8D%97%E9%9C%87%E6%84%9F%23) `735.0K 🔥` `+61%`
1. [女子凌晨倒掉24瓶爱心水被拍下 (Woman was filmed pouring out 24 bottles of love water in the early morning)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8C%E6%99%A8%E5%80%92%E6%8E%8924%E7%93%B6%E7%88%B1%E5%BF%83%E6%B0%B4%E8%A2%AB%E6%8B%8D%E4%B8%8B%23) `705.2K 🔥` `+62%`
1. [女儿有10万压岁钱每月还要2500生活费](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%9C%8910%E4%B8%87%E5%8E%8B%E5%B2%81%E9%92%B1%E6%AF%8F%E6%9C%88%E8%BF%98%E8%A6%812500%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `696.5K 🔥` `+63%`
1. [公积金修改前vs修改后](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E4%BF%AE%E6%94%B9%E5%89%8Dvs%E4%BF%AE%E6%94%B9%E5%90%8E%23) `693.4K 🔥` `+206%`
1. [空枪 李嘉诚儿子绑架案](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%20%E6%9D%8E%E5%98%89%E8%AF%9A%E5%84%BF%E5%AD%90%E7%BB%91%E6%9E%B6%E6%A1%88%23) `683.2K 🔥` `+72%`
1. [宇树科技跌超15% (Yushu Technology fell more than 15%)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E8%B7%8C%E8%B6%8515%25%23) `681.5K 🔥` `+68%`
1. [电视剧蝉今日开播](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E8%9D%89%E4%BB%8A%E6%97%A5%E5%BC%80%E6%92%AD%23) `673.5K 🔥` `+331%`
1. [女儿拒动用十万压岁钱支付生活费 (Daughter refuses to use 100,000 New Year's money to pay for living expenses)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%8B%92%E5%8A%A8%E7%94%A8%E5%8D%81%E4%B8%87%E5%8E%8B%E5%B2%81%E9%92%B1%E6%94%AF%E4%BB%98%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `1.4M 🔥`
1. [警方通报青岛男子辱骂女游客](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E9%9D%92%E5%B2%9B%E7%94%B7%E5%AD%90%E8%BE%B1%E9%AA%82%E5%A5%B3%E6%B8%B8%E5%AE%A2%23) `1.0M 🔥`
1. [我家那闺女](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%23) `860.3K 🔥`
1. [宇树大跌](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%A4%A7%E8%B7%8C%23) `851.6K 🔥`
1. [总裁助理骗局 (President Assistant Scam)](https://s.weibo.com/weibo?q=%23%E6%80%BB%E8%A3%81%E5%8A%A9%E7%90%86%E9%AA%97%E5%B1%80%23) `795.5K 🔥`
1. [黑神话](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%A5%9E%E8%AF%9D%23) `774.9K 🔥`
1. [全季酒店 再追究对我们对你都不好](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%AD%A3%E9%85%92%E5%BA%97%20%E5%86%8D%E8%BF%BD%E7%A9%B6%E5%AF%B9%E6%88%91%E4%BB%AC%E5%AF%B9%E4%BD%A0%E9%83%BD%E4%B8%8D%E5%A5%BD%23) `737.6K 🔥`
1. [7个China热词讲透中国潮](https://s.weibo.com/weibo?q=%237%E4%B8%AAChina%E7%83%AD%E8%AF%8D%E8%AE%B2%E9%80%8F%E4%B8%AD%E5%9B%BD%E6%BD%AE%23) `839.7K 🔥` `-22%`
1. [河南濮阳地震 (Earthquake in Puyang, Henan)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%BF%AE%E9%98%B3%E5%9C%B0%E9%9C%87%23) `798.5K 🔥` `-42%`

Updated at 2026-08-20 12:18:27

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
