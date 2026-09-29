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

1. [Tiffany月饼](https://s.weibo.com/weibo?q=%23Tiffany%E6%9C%88%E9%A5%BC%23) `1.6M 🔥` `NEW`
1. [林诗栋夺冠秦志戬鼓掌又撤回](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E5%A4%BA%E5%86%A0%E7%A7%A6%E5%BF%97%E6%88%AC%E9%BC%93%E6%8E%8C%E5%8F%88%E6%92%A4%E5%9B%9E%23) `1.3M 🔥` `NEW`
1. [看看青春的模样](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%9C%8B%E9%9D%92%E6%98%A5%E7%9A%84%E6%A8%A1%E6%A0%B7%23) `1.0M 🔥` `NEW`
1. [智界R7售价23.98万元起](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CR7%E5%94%AE%E4%BB%B723.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `978.6K 🔥` `NEW`
1. [仅退款把商家逼成什么程度了](https://s.weibo.com/weibo?q=%23%E4%BB%85%E9%80%80%E6%AC%BE%E6%8A%8A%E5%95%86%E5%AE%B6%E9%80%BC%E6%88%90%E4%BB%80%E4%B9%88%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `934.9K 🔥` `NEW`
1. [中国队和平精英亚运会银牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E4%BA%9A%E8%BF%90%E4%BC%9A%E9%93%B6%E7%89%8C%23) `831.7K 🔥` `NEW`
1. [那英演唱会致敬刘欢不该一罚了之](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E6%BC%94%E5%94%B1%E4%BC%9A%E8%87%B4%E6%95%AC%E5%88%98%E6%AC%A2%E4%B8%8D%E8%AF%A5%E4%B8%80%E7%BD%9A%E4%BA%86%E4%B9%8B%23) `801.4K 🔥` `NEW`
1. [叶信之 二婚](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%BF%A1%E4%B9%8B%20%E4%BA%8C%E5%A9%9A%23) `730.2K 🔥` `NEW`
1. [宫廷糕点 泼天流量](https://s.weibo.com/weibo?q=%23%E5%AE%AB%E5%BB%B7%E7%B3%95%E7%82%B9%20%E6%B3%BC%E5%A4%A9%E6%B5%81%E9%87%8F%23) `391.1K 🔥` `NEW`
1. [仅退款被拒男子900家店下单2700次](https://s.weibo.com/weibo?q=%23%E4%BB%85%E9%80%80%E6%AC%BE%E8%A2%AB%E6%8B%92%E7%94%B7%E5%AD%90900%E5%AE%B6%E5%BA%97%E4%B8%8B%E5%8D%952700%E6%AC%A1%23) `385.5K 🔥` `NEW`
1. [瑞幸联名表情包 像尿](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E8%81%94%E5%90%8D%E8%A1%A8%E6%83%85%E5%8C%85%20%E5%83%8F%E5%B0%BF%23) `385.3K 🔥` `NEW`
1. [Tiffany 捂嘴](https://s.weibo.com/weibo?q=%23Tiffany%20%E6%8D%82%E5%98%B4%23) `385.2K 🔥` `NEW`
1. [Tiffany中国区负责人致歉](https://s.weibo.com/weibo?q=%23Tiffany%E4%B8%AD%E5%9B%BD%E5%8C%BA%E8%B4%9F%E8%B4%A3%E4%BA%BA%E8%87%B4%E6%AD%89%23) `385.1K 🔥` `NEW`
1. [锤娜丽莎长文谈我家那闺女](https://s.weibo.com/weibo?q=%23%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E9%95%BF%E6%96%87%E8%B0%88%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%23) `384.8K 🔥` `NEW`
1. [成都Tiffany道歉艺名太好笑](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BDTiffany%E9%81%93%E6%AD%89%E8%89%BA%E5%90%8D%E5%A4%AA%E5%A5%BD%E7%AC%91%23) `384.6K 🔥` `NEW`
1. [成都文旅回应那英唱弯弯的月亮](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E6%96%87%E6%97%85%E5%9B%9E%E5%BA%94%E9%82%A3%E8%8B%B1%E5%94%B1%E5%BC%AF%E5%BC%AF%E7%9A%84%E6%9C%88%E4%BA%AE%23) `384.3K 🔥` `NEW`
1. [生病是一场巨大的清算](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%97%85%E6%98%AF%E4%B8%80%E5%9C%BA%E5%B7%A8%E5%A4%A7%E7%9A%84%E6%B8%85%E7%AE%97%23) `365.9K 🔥` `NEW`
1. [羽毛球女双决赛](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E6%AF%9B%E7%90%83%E5%A5%B3%E5%8F%8C%E5%86%B3%E8%B5%9B%23) `317.1K 🔥` `NEW`
1. [多方回应男子被狗咬没打疫苗离世](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E8%A2%AB%E7%8B%97%E5%92%AC%E6%B2%A1%E6%89%93%E7%96%AB%E8%8B%97%E7%A6%BB%E4%B8%96%23) `257.0K 🔥` `NEW`
1. [华为Mate90发布会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate90%E5%8F%91%E5%B8%83%E4%BC%9A%23) `254.8K 🔥` `NEW`
1. [食欲啊性欲啊玩俄罗斯方块就好了](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E6%AC%B2%E5%95%8A%E6%80%A7%E6%AC%B2%E5%95%8A%E7%8E%A9%E4%BF%84%E7%BD%97%E6%96%AF%E6%96%B9%E5%9D%97%E5%B0%B1%E5%A5%BD%E4%BA%86%23) `252.2K 🔥` `NEW`
1. [性吸引力是第一要素](https://s.weibo.com/weibo?q=%23%E6%80%A7%E5%90%B8%E5%BC%95%E5%8A%9B%E6%98%AF%E7%AC%AC%E4%B8%80%E8%A6%81%E7%B4%A0%23) `249.8K 🔥` `NEW`
1. [不会旅游的人建议反复观看](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BC%9A%E6%97%85%E6%B8%B8%E7%9A%84%E4%BA%BA%E5%BB%BA%E8%AE%AE%E5%8F%8D%E5%A4%8D%E8%A7%82%E7%9C%8B%23) `248.4K 🔥` `NEW`
1. [华为光变巨炮相机](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%85%89%E5%8F%98%E5%B7%A8%E7%82%AE%E7%9B%B8%E6%9C%BA%23) `244.6K 🔥` `NEW`
1. [8天卖了1千多万元的超长蛋挞全是皮](https://s.weibo.com/weibo?q=%238%E5%A4%A9%E5%8D%96%E4%BA%861%E5%8D%83%E5%A4%9A%E4%B8%87%E5%85%83%E7%9A%84%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E%E5%85%A8%E6%98%AF%E7%9A%AE%23) `243.1K 🔥` `NEW`
1. [乌合之众定档](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%90%88%E4%B9%8B%E4%BC%97%E5%AE%9A%E6%A1%A3%23) `231.4K 🔥` `NEW`
1. [王玉雯忘了28号](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%BF%98%E4%BA%8628%E5%8F%B7%23) `220.2K 🔥` `NEW`
1. [超长蛋挞的第一个受害者出现了](https://s.weibo.com/weibo?q=%23%E8%B6%85%E9%95%BF%E8%9B%8B%E6%8C%9E%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `219.2K 🔥` `NEW`
1. [科技新一说学好英语非常重要](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80%E8%AF%B4%E5%AD%A6%E5%A5%BD%E8%8B%B1%E8%AF%AD%E9%9D%9E%E5%B8%B8%E9%87%8D%E8%A6%81%23) `213.2K 🔥` `NEW`
1. [成都宫廷糕点回应Tiffany月饼事件](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%AE%AB%E5%BB%B7%E7%B3%95%E7%82%B9%E5%9B%9E%E5%BA%94Tiffany%E6%9C%88%E9%A5%BC%E4%BA%8B%E4%BB%B6%23) `212.1K 🔥` `NEW`
1. [老人报警丢4万民警找出23万](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%8A%A5%E8%AD%A6%E4%B8%A24%E4%B8%87%E6%B0%91%E8%AD%A6%E6%89%BE%E5%87%BA23%E4%B8%87%23) `210.8K 🔥` `NEW`
1. [生米给周深的打卡祝福铺满全国](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%B1%B3%E7%BB%99%E5%91%A8%E6%B7%B1%E7%9A%84%E6%89%93%E5%8D%A1%E7%A5%9D%E7%A6%8F%E9%93%BA%E6%BB%A1%E5%85%A8%E5%9B%BD%23) `206.3K 🔥` `NEW`
1. [iQOO16](https://s.weibo.com/weibo?q=%23iQOO16%23) `201.6K 🔥` `NEW`
1. [曝王晓慧首部剧搭丁禹兮](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E6%99%93%E6%85%A7%E9%A6%96%E9%83%A8%E5%89%A7%E6%90%AD%E4%B8%81%E7%A6%B9%E5%85%AE%23) `198.8K 🔥` `NEW`
1. [邓亚萍谈林诗栋获男单金牌](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%B0%88%E6%9E%97%E8%AF%97%E6%A0%8B%E8%8E%B7%E7%94%B7%E5%8D%95%E9%87%91%E7%89%8C%23) `194.7K 🔥` `NEW`
1. [上海月嫂月薪破两万](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9C%88%E5%AB%82%E6%9C%88%E8%96%AA%E7%A0%B4%E4%B8%A4%E4%B8%87%23) `189.4K 🔥` `NEW`
1. [被父母落出租屋男孩小区里翻垃圾桶](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%88%B6%E6%AF%8D%E8%90%BD%E5%87%BA%E7%A7%9F%E5%B1%8B%E7%94%B7%E5%AD%A9%E5%B0%8F%E5%8C%BA%E9%87%8C%E7%BF%BB%E5%9E%83%E5%9C%BE%E6%A1%B6%23) `187.2K 🔥` `NEW`
1. [刘欢西方音乐史课程700多人抢](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E8%A5%BF%E6%96%B9%E9%9F%B3%E4%B9%90%E5%8F%B2%E8%AF%BE%E7%A8%8B700%E5%A4%9A%E4%BA%BA%E6%8A%A2%23) `185.1K 🔥` `NEW`
1. [Mate90砍掉了8GB入门内存](https://s.weibo.com/weibo?q=%23Mate90%E7%A0%8D%E6%8E%89%E4%BA%868GB%E5%85%A5%E9%97%A8%E5%86%85%E5%AD%98%23) `182.6K 🔥` `NEW`
1. [方媛与何猷君妈妈合照](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E4%B8%8E%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A6%88%E5%A6%88%E5%90%88%E7%85%A7%23) `172.1K 🔥` `NEW`
1. [张家齐妈是不是觉得奥运冠军会嫁豪门](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E6%98%AF%E4%B8%8D%E6%98%AF%E8%A7%89%E5%BE%97%E5%A5%A5%E8%BF%90%E5%86%A0%E5%86%9B%E4%BC%9A%E5%AB%81%E8%B1%AA%E9%97%A8%23) `159.9K 🔥` `NEW`
1. [20万消费换不来一盒送对的Tiffany月饼](https://s.weibo.com/weibo?q=%2320%E4%B8%87%E6%B6%88%E8%B4%B9%E6%8D%A2%E4%B8%8D%E6%9D%A5%E4%B8%80%E7%9B%92%E9%80%81%E5%AF%B9%E7%9A%84Tiffany%E6%9C%88%E9%A5%BC%23) `158.7K 🔥` `NEW`
1. [女儿外孙遭家暴华裔夫妇射杀女婿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%A4%96%E5%AD%99%E9%81%AD%E5%AE%B6%E6%9A%B4%E5%8D%8E%E8%A3%94%E5%A4%AB%E5%A6%87%E5%B0%84%E6%9D%80%E5%A5%B3%E5%A9%BF%23) `157.8K 🔥` `NEW`
1. [披荆斩棘四公小考](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%9B%9B%E5%85%AC%E5%B0%8F%E8%80%83%23) `151.0K 🔥` `NEW`
1. [亚运会和平精英](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%23) `143.8K 🔥` `NEW`
1. [短剧顶流们都来参加美好奇妙夜了](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E9%A1%B6%E6%B5%81%E4%BB%AC%E9%83%BD%E6%9D%A5%E5%8F%82%E5%8A%A0%E7%BE%8E%E5%A5%BD%E5%A5%87%E5%A6%99%E5%A4%9C%E4%BA%86%23) `137.5K 🔥` `NEW`
1. [女儿回应父亲省钱没打狂犬疫苗离世](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%9B%9E%E5%BA%94%E7%88%B6%E4%BA%B2%E7%9C%81%E9%92%B1%E6%B2%A1%E6%89%93%E7%8B%82%E7%8A%AC%E7%96%AB%E8%8B%97%E7%A6%BB%E4%B8%96%23) `136.5K 🔥` `NEW`
1. [刘圣书受伤](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9C%A3%E4%B9%A6%E5%8F%97%E4%BC%A4%23) `135.8K 🔥` `NEW`
1. [贵州龙里一交通事故致7死](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E9%BE%99%E9%87%8C%E4%B8%80%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%E8%87%B47%E6%AD%BB%23) `214.2K 🔥` `+45%`

Updated at 2026-09-29 15:26:46

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
