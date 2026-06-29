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

1. [法国紧急下单3万台空调 (France places emergency order for 30,000 air conditioners)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%B4%A7%E6%80%A5%E4%B8%8B%E5%8D%953%E4%B8%87%E5%8F%B0%E7%A9%BA%E8%B0%83%23) `1.1M 🔥` `NEW`
1. [韩剧编剧又升级了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%89%A7%E7%BC%96%E5%89%A7%E5%8F%88%E5%8D%87%E7%BA%A7%E4%BA%86%23) `820.8K 🔥` `NEW`
1. [105年初心滚烫](https://s.weibo.com/weibo?q=%23105%E5%B9%B4%E5%88%9D%E5%BF%83%E6%BB%9A%E7%83%AB%23) `801.6K 🔥` `NEW`
1. [剧宣天才虞书欣发力了](https://s.weibo.com/weibo?q=%23%E5%89%A7%E5%AE%A3%E5%A4%A9%E6%89%8D%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8F%91%E5%8A%9B%E4%BA%86%23) `799.6K 🔥` `NEW`
1. [母亲获赔80万弟弟拿74万姐姐3万](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8E%B7%E8%B5%9480%E4%B8%87%E5%BC%9F%E5%BC%9F%E6%8B%BF74%E4%B8%87%E5%A7%90%E5%A7%903%E4%B8%87%23) `796.8K 🔥` `NEW`
1. [尽量少用玻璃吸管](https://s.weibo.com/weibo?q=%23%E5%B0%BD%E9%87%8F%E5%B0%91%E7%94%A8%E7%8E%BB%E7%92%83%E5%90%B8%E7%AE%A1%23) `786.6K 🔥` `NEW`
1. [杨洋举杯青岛白啤邂逅夏日美好](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E4%B8%BE%E6%9D%AF%E9%9D%92%E5%B2%9B%E7%99%BD%E5%95%A4%E9%82%82%E9%80%85%E5%A4%8F%E6%97%A5%E7%BE%8E%E5%A5%BD%23) `783.0K 🔥` `NEW`
1. [5万块的威力](https://s.weibo.com/weibo?q=%235%E4%B8%87%E5%9D%97%E7%9A%84%E5%A8%81%E5%8A%9B%23) `761.1K 🔥` `NEW`
1. [恋与深空失控领地](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%A4%B1%E6%8E%A7%E9%A2%86%E5%9C%B0%23) `737.1K 🔥` `NEW`
1. [NBA交易](https://s.weibo.com/weibo?q=%23NBA%E4%BA%A4%E6%98%93%23) `575.0K 🔥` `NEW`
1. [广州一高校通报网传禁止小米汽车入校 (A university in Guangzhou reported online that it banned Xiaomi cars from entering the school)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E4%B8%80%E9%AB%98%E6%A0%A1%E9%80%9A%E6%8A%A5%E7%BD%91%E4%BC%A0%E7%A6%81%E6%AD%A2%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%85%A5%E6%A0%A1%23) `569.1K 🔥` `NEW`
1. [47岁吴建豪再婚](https://s.weibo.com/weibo?q=%2347%E5%B2%81%E5%90%B4%E5%BB%BA%E8%B1%AA%E5%86%8D%E5%A9%9A%23) `552.4K 🔥` `NEW`
1. [女儿称是生父强奸所生拒付赡养费](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%A7%B0%E6%98%AF%E7%94%9F%E7%88%B6%E5%BC%BA%E5%A5%B8%E6%89%80%E7%94%9F%E6%8B%92%E4%BB%98%E8%B5%A1%E5%85%BB%E8%B4%B9%23) `538.5K 🔥` `NEW`
1. [杨紫飞奔拥抱胡歌](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%A3%9E%E5%A5%94%E6%8B%A5%E6%8A%B1%E8%83%A1%E6%AD%8C%23) `525.8K 🔥` `NEW`
1. [龟梨和也田中美奈实结婚](https://s.weibo.com/weibo?q=%23%E9%BE%9F%E6%A2%A8%E5%92%8C%E4%B9%9F%E7%94%B0%E4%B8%AD%E7%BE%8E%E5%A5%88%E5%AE%9E%E7%BB%93%E5%A9%9A%23) `508.2K 🔥` `NEW`
1. [法拉利被4个孩子当滑梯玩](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%E8%A2%AB4%E4%B8%AA%E5%AD%A9%E5%AD%90%E5%BD%93%E6%BB%91%E6%A2%AF%E7%8E%A9%23) `506.4K 🔥` `NEW`
1. [尹恩惠自曝14年没谈过恋爱](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%81%A9%E6%83%A0%E8%87%AA%E6%9B%9D14%E5%B9%B4%E6%B2%A1%E8%B0%88%E8%BF%87%E6%81%8B%E7%88%B1%23) `407.0K 🔥` `NEW`
1. [撒旦的腋窝是什么比喻](https://s.weibo.com/weibo?q=%23%E6%92%92%E6%97%A6%E7%9A%84%E8%85%8B%E7%AA%9D%E6%98%AF%E4%BB%80%E4%B9%88%E6%AF%94%E5%96%BB%23) `361.8K 🔥` `NEW`
1. [白宇摘下白玉兰送给杨幂](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%87%E6%91%98%E4%B8%8B%E7%99%BD%E7%8E%89%E5%85%B0%E9%80%81%E7%BB%99%E6%9D%A8%E5%B9%82%23) `361.7K 🔥` `NEW`
1. [三星与SK集团或将投资2000万亿韩元](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E4%B8%8ESK%E9%9B%86%E5%9B%A2%E6%88%96%E5%B0%86%E6%8A%95%E8%B5%842000%E4%B8%87%E4%BA%BF%E9%9F%A9%E5%85%83%23) `361.6K 🔥` `NEW`
1. [江语晨 好恨江语晨前夫 (Jiang Yuchen really hates Jiang Yuchen’s ex-husband)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%20%E5%A5%BD%E6%81%A8%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%89%8D%E5%A4%AB%23) `361.5K 🔥` `NEW`
1. [吴建豪老婆](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BB%BA%E8%B1%AA%E8%80%81%E5%A9%86%23) `361.4K 🔥` `NEW`
1. [外网预言中国举办世界杯时间](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E9%A2%84%E8%A8%80%E4%B8%AD%E5%9B%BD%E4%B8%BE%E5%8A%9E%E4%B8%96%E7%95%8C%E6%9D%AF%E6%97%B6%E9%97%B4%23) `361.3K 🔥` `NEW`
1. [20年前的周杰伦](https://s.weibo.com/weibo?q=%2320%E5%B9%B4%E5%89%8D%E7%9A%84%E5%91%A8%E6%9D%B0%E4%BC%A6%23) `360.5K 🔥` `NEW`
1. [韩国国脚每人获35.5万奖金](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%9B%BD%E8%84%9A%E6%AF%8F%E4%BA%BA%E8%8E%B735.5%E4%B8%87%E5%A5%96%E9%87%91%23) `360.1K 🔥` `NEW`
1. [日本前锋言论激怒巴西](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%89%8D%E9%94%8B%E8%A8%80%E8%AE%BA%E6%BF%80%E6%80%92%E5%B7%B4%E8%A5%BF%23) `323.4K 🔥` `NEW`
1. [孙怡告别浪姐千字文](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%91%8A%E5%88%AB%E6%B5%AA%E5%A7%90%E5%8D%83%E5%AD%97%E6%96%87%23) `257.4K 🔥` `NEW`
1. [葫芦岛居民楼爆炸致3失联8伤](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E5%B2%9B%E5%B1%85%E6%B0%91%E6%A5%BC%E7%88%86%E7%82%B8%E8%87%B43%E5%A4%B1%E8%81%948%E4%BC%A4%23) `246.2K 🔥` `NEW`
1. [在家赤身裸体是否绝对自由](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%AE%B6%E8%B5%A4%E8%BA%AB%E8%A3%B8%E4%BD%93%E6%98%AF%E5%90%A6%E7%BB%9D%E5%AF%B9%E8%87%AA%E7%94%B1%23) `245.5K 🔥` `NEW`
1. [杨紫下沉市场口碑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%23) `242.3K 🔥` `NEW`
1. [内马尔打日本前先买百万美元豪表 (Neymar buys million-dollar luxury watch before playing in Japan)](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E6%89%93%E6%97%A5%E6%9C%AC%E5%89%8D%E5%85%88%E4%B9%B0%E7%99%BE%E4%B8%87%E7%BE%8E%E5%85%83%E8%B1%AA%E8%A1%A8%23) `242.0K 🔥` `NEW`
1. [12人以护剧为名敲诈剧组艺人被抓](https://s.weibo.com/weibo?q=%2312%E4%BA%BA%E4%BB%A5%E6%8A%A4%E5%89%A7%E4%B8%BA%E5%90%8D%E6%95%B2%E8%AF%88%E5%89%A7%E7%BB%84%E8%89%BA%E4%BA%BA%E8%A2%AB%E6%8A%93%23) `241.8K 🔥` `NEW`
1. [恋与深空遭抵制后仍置顶敖尹](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%81%AD%E6%8A%B5%E5%88%B6%E5%90%8E%E4%BB%8D%E7%BD%AE%E9%A1%B6%E6%95%96%E5%B0%B9%23) `224.0K 🔥` `NEW`
1. [恋与深空评分暴跌至1.8](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E8%AF%84%E5%88%86%E6%9A%B4%E8%B7%8C%E8%87%B31.8%23) `216.8K 🔥` `NEW`
1. [AG冠军五人组轮换](https://s.weibo.com/weibo?q=%23AG%E5%86%A0%E5%86%9B%E4%BA%94%E4%BA%BA%E7%BB%84%E8%BD%AE%E6%8D%A2%23) `212.4K 🔥` `NEW`
1. [papi酱回应毕业4年零收入](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E5%9B%9E%E5%BA%94%E6%AF%95%E4%B8%9A4%E5%B9%B4%E9%9B%B6%E6%94%B6%E5%85%A5%23) `211.7K 🔥` `NEW`
1. [谢霆锋王菲十指紧扣一起走](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E7%8E%8B%E8%8F%B2%E5%8D%81%E6%8C%87%E7%B4%A7%E6%89%A3%E4%B8%80%E8%B5%B7%E8%B5%B0%23) `206.1K 🔥` `NEW`
1. [每代父母都困在自己的时代里](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%BB%A3%E7%88%B6%E6%AF%8D%E9%83%BD%E5%9B%B0%E5%9C%A8%E8%87%AA%E5%B7%B1%E7%9A%84%E6%97%B6%E4%BB%A3%E9%87%8C%23) `204.4K 🔥` `NEW`
1. [上班主打一个薪尽自然凉](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E4%B8%BB%E6%89%93%E4%B8%80%E4%B8%AA%E8%96%AA%E5%B0%BD%E8%87%AA%E7%84%B6%E5%87%89%23) `201.2K 🔥` `NEW`
1. [给阿嬷的情书海外口碑](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E6%B5%B7%E5%A4%96%E5%8F%A3%E7%A2%91%23) `198.6K 🔥` `NEW`
1. [曝歌手第七期帮唱阵容 (The singer's seventh supporting singing lineup is revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%B8%83%E6%9C%9F%E5%B8%AE%E5%94%B1%E9%98%B5%E5%AE%B9%23) `198.0K 🔥` `NEW`
1. [光与夜之恋](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `189.7K 🔥` `NEW`
1. [崔韩率还以为韩娱来新人了](https://s.weibo.com/weibo?q=%23%E5%B4%94%E9%9F%A9%E7%8E%87%E8%BF%98%E4%BB%A5%E4%B8%BA%E9%9F%A9%E5%A8%B1%E6%9D%A5%E6%96%B0%E4%BA%BA%E4%BA%86%23) `157.4K 🔥` `NEW`
1. [巴黎两家殡仪馆爆满](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E4%B8%A4%E5%AE%B6%E6%AE%A1%E4%BB%AA%E9%A6%86%E7%88%86%E6%BB%A1%23) `157.3K 🔥` `NEW`
1. [42岁郭碧婷纯素颜状态](https://s.weibo.com/weibo?q=%2342%E5%B2%81%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%BA%AF%E7%B4%A0%E9%A2%9C%E7%8A%B6%E6%80%81%23) `151.6K 🔥` `NEW`
1. [智界V9成为高端圈层共同选择](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CV9%E6%88%90%E4%B8%BA%E9%AB%98%E7%AB%AF%E5%9C%88%E5%B1%82%E5%85%B1%E5%90%8C%E9%80%89%E6%8B%A9%23) `150.6K 🔥` `NEW`
1. [赵今麦娇兰全球总裁LV太子妃合照](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%A8%87%E5%85%B0%E5%85%A8%E7%90%83%E6%80%BB%E8%A3%81LV%E5%A4%AA%E5%AD%90%E5%A6%83%E5%90%88%E7%85%A7%23) `347.1K 🔥`
1. [美的空调 卡bug (Midea air conditioner stuck bug)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%9A%84%E7%A9%BA%E8%B0%83%20%E5%8D%A1bug%23) `247.4K 🔥` `-78%`
1. [四川宜宾地震 (Yibin earthquake in Sichuan)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%23) `182.5K 🔥` `-86%`
1. [iPhone18系列预计将大幅涨价](https://s.weibo.com/weibo?q=%23iPhone18%E7%B3%BB%E5%88%97%E9%A2%84%E8%AE%A1%E5%B0%86%E5%A4%A7%E5%B9%85%E6%B6%A8%E4%BB%B7%23) `151.5K 🔥` `-51%`

Updated at 2026-06-29 14:38:53

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
