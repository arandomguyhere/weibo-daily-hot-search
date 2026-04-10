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

1. [浪姐直播 对口型 (Sister Lang live lip-syncing)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%20%E5%AF%B9%E5%8F%A3%E5%9E%8B%23) `2.6M 🔥` `NEW`
1. [我国海水直接制氢取得研究新突破](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B5%B7%E6%B0%B4%E7%9B%B4%E6%8E%A5%E5%88%B6%E6%B0%A2%E5%8F%96%E5%BE%97%E7%A0%94%E7%A9%B6%E6%96%B0%E7%AA%81%E7%A0%B4%23) `788.3K 🔥` `NEW`
1. [深化创业板改革正式启动](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%8C%96%E5%88%9B%E4%B8%9A%E6%9D%BF%E6%94%B9%E9%9D%A9%E6%AD%A3%E5%BC%8F%E5%90%AF%E5%8A%A8%23) `787.3K 🔥` `NEW`
1. [谢娜裙摆被踩掉了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E8%A3%99%E6%91%86%E8%A2%AB%E8%B8%A9%E6%8E%89%E4%BA%86%23) `785.7K 🔥` `NEW`
1. [冰湖重生官微删博](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%AE%98%E5%BE%AE%E5%88%A0%E5%8D%9A%23) `465.2K 🔥` `NEW`
1. [张雪拍卖1分钟结束](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%8B%8D%E5%8D%961%E5%88%86%E9%92%9F%E7%BB%93%E6%9D%9F%23) `388.6K 🔥` `NEW`
1. [极氪更强7系更强GT](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA%E6%9B%B4%E5%BC%BA7%E7%B3%BB%E6%9B%B4%E5%BC%BAGT%23) `250.0K 🔥` `NEW`
1. [这些品牌竟然都是假洋牌](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%93%81%E7%89%8C%E7%AB%9F%E7%84%B6%E9%83%BD%E6%98%AF%E5%81%87%E6%B4%8B%E7%89%8C%23) `242.8K 🔥` `NEW`
1. [疑似涉伊朗战事内幕交易被曝](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%B6%89%E4%BC%8A%E6%9C%97%E6%88%98%E4%BA%8B%E5%86%85%E5%B9%95%E4%BA%A4%E6%98%93%E8%A2%AB%E6%9B%9D%23) `241.5K 🔥` `NEW`
1. [孙怡组真唱](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%BB%84%E7%9C%9F%E5%94%B1%23) `239.2K 🔥` `NEW`
1. [城北的花 如听仙乐耳暂明 (The flowers in the north of the city are like listening to fairy music, and the ears are temporarily bright)](https://s.weibo.com/weibo?q=%23%E5%9F%8E%E5%8C%97%E7%9A%84%E8%8A%B1%20%E5%A6%82%E5%90%AC%E4%BB%99%E4%B9%90%E8%80%B3%E6%9A%82%E6%98%8E%23) `237.8K 🔥` `NEW`
1. [母亲隐忍不离婚4岁女儿终遭毒手](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E9%9A%90%E5%BF%8D%E4%B8%8D%E7%A6%BB%E5%A9%9A4%E5%B2%81%E5%A5%B3%E5%84%BF%E7%BB%88%E9%81%AD%E6%AF%92%E6%89%8B%23) `236.0K 🔥` `NEW`
1. [周杰伦方回应演唱会划水](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%BC%94%E5%94%B1%E4%BC%9A%E5%88%92%E6%B0%B4%23) `231.3K 🔥` `NEW`
1. [曾沛慈团904票](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2904%E7%A5%A8%23) `226.9K 🔥` `NEW`
1. [奔跑吧ins取关TWS](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7ins%E5%8F%96%E5%85%B3TWS%23) `225.1K 🔥` `NEW`
1. [JDG对战AL](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98AL%23) `220.1K 🔥` `NEW`
1. [赵丽颖工作室疑似表达对捆绑的不满](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%96%91%E4%BC%BC%E8%A1%A8%E8%BE%BE%E5%AF%B9%E6%8D%86%E7%BB%91%E7%9A%84%E4%B8%8D%E6%BB%A1%23) `219.4K 🔥` `NEW`
1. [快乐家族在张杰演唱会团建](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E4%B9%90%E5%AE%B6%E6%97%8F%E5%9C%A8%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A2%E5%BB%BA%23) `215.7K 🔥` `NEW`
1. [黄瓜拌菠萝火了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E6%8B%8C%E8%8F%A0%E8%90%9D%E7%81%AB%E4%BA%86%23) `198.5K 🔥` `NEW`
1. [白鹿晒晚餐](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%99%92%E6%99%9A%E9%A4%90%23) `129.7K 🔥` `NEW`
1. [一秒看透极氪安全黑科技 (See through the black technology of Krypton security in one second)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%A7%92%E7%9C%8B%E9%80%8F%E6%9E%81%E6%B0%AA%E5%AE%89%E5%85%A8%E9%BB%91%E7%A7%91%E6%8A%80%23) `121.7K 🔥` `NEW`
1. [张凌赫新剧这一秒过火路透](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%96%B0%E5%89%A7%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%B7%AF%E9%80%8F%23) `109.9K 🔥` `NEW`
1. [95后女生回村养6万条蛇年入百万](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%A5%B3%E7%94%9F%E5%9B%9E%E6%9D%91%E5%85%BB6%E4%B8%87%E6%9D%A1%E8%9B%87%E5%B9%B4%E5%85%A5%E7%99%BE%E4%B8%87%23) `99.8K 🔥` `NEW`
1. [鸡煲老板遇撞脸刘雨鑫记者场面失控](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E9%81%87%E6%92%9E%E8%84%B8%E5%88%98%E9%9B%A8%E9%91%AB%E8%AE%B0%E8%80%85%E5%9C%BA%E9%9D%A2%E5%A4%B1%E6%8E%A7%23) `88.9K 🔥` `NEW`
1. [安妮海瑟薇裙子出自中国设计师之手](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%A6%AE%E6%B5%B7%E7%91%9F%E8%96%87%E8%A3%99%E5%AD%90%E5%87%BA%E8%87%AA%E4%B8%AD%E5%9B%BD%E8%AE%BE%E8%AE%A1%E5%B8%88%E4%B9%8B%E6%89%8B%23) `78.9K 🔥` `NEW`
1. [乒乓外交](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E5%A4%96%E4%BA%A4%23) `71.2K 🔥` `NEW`
1. [洪知秀直播](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E7%9F%A5%E7%A7%80%E7%9B%B4%E6%92%AD%23) `71.1K 🔥` `NEW`
1. [张怡宁马龙热聊](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%80%A1%E5%AE%81%E9%A9%AC%E9%BE%99%E7%83%AD%E8%81%8A%23) `70.5K 🔥` `NEW`
1. [波兰国家队助教晨跑时晕倒去世](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E5%85%B0%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%8A%A9%E6%95%99%E6%99%A8%E8%B7%91%E6%97%B6%E6%99%95%E5%80%92%E5%8E%BB%E4%B8%96%23) `66.5K 🔥` `NEW`
1. [填埋奔驰车祭祀当事人致歉](https://s.weibo.com/weibo?q=%23%E5%A1%AB%E5%9F%8B%E5%A5%94%E9%A9%B0%E8%BD%A6%E7%A5%AD%E7%A5%80%E5%BD%93%E4%BA%8B%E4%BA%BA%E8%87%B4%E6%AD%89%23) `66.2K 🔥` `NEW`
1. [吴世勋西装金丝眼镜 (Wu Shixun suit gold glasses)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E8%A5%BF%E8%A3%85%E9%87%91%E4%B8%9D%E7%9C%BC%E9%95%9C%23) `64.7K 🔥` `NEW`
1. [22岁女生被害母亲近三个月频繁吐血](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E5%A5%B3%E7%94%9F%E8%A2%AB%E5%AE%B3%E6%AF%8D%E4%BA%B2%E8%BF%91%E4%B8%89%E4%B8%AA%E6%9C%88%E9%A2%91%E7%B9%81%E5%90%90%E8%A1%80%23) `62.7K 🔥` `NEW`
1. [婴儿出生9斤一个月瘦到7斤](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%87%BA%E7%94%9F9%E6%96%A4%E4%B8%80%E4%B8%AA%E6%9C%88%E7%98%A6%E5%88%B07%E6%96%A4%23) `1.0M 🔥` `+689%`
1. [浪姐一公直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%80%E5%85%AC%E7%9B%B4%E6%92%AD%23) `232.3K 🔥` `+70%`
1. [发现了辛苦了这句话的最佳回复](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%BA%86%E8%BE%9B%E8%8B%A6%E4%BA%86%E8%BF%99%E5%8F%A5%E8%AF%9D%E7%9A%84%E6%9C%80%E4%BD%B3%E5%9B%9E%E5%A4%8D%23) `200.6K 🔥`
1. [赵丽颖工作室发楚乔传采访 (Zhao Liying's studio releases Chu Qiao biography interview)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E6%A5%9A%E4%B9%94%E4%BC%A0%E9%87%87%E8%AE%BF%23) `129.5K 🔥`
1. [十日终焉开机 (Will be launched in ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%BC%80%E6%9C%BA%23) `121.0K 🔥`
1. [为什么穿睡衣那么显瘦](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%A9%BF%E7%9D%A1%E8%A1%A3%E9%82%A3%E4%B9%88%E6%98%BE%E7%98%A6%23) `109.9K 🔥`
1. [刘诗诗王安宇孙千同框](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E7%8E%8B%E5%AE%89%E5%AE%87%E5%AD%99%E5%8D%83%E5%90%8C%E6%A1%86%23) `66.5K 🔥`
1. [莫氏鸡煲公开秘方 (Mo’s Chicken Pot Secret Recipe Revealed)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%85%AC%E5%BC%80%E7%A7%98%E6%96%B9%23) `227.8K 🔥` `-77%`
1. [金正恩会见王毅](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%AD%A3%E6%81%A9%E4%BC%9A%E8%A7%81%E7%8E%8B%E6%AF%85%23) `80.2K 🔥` `-39%`
1. [男子微信群多次侮辱全红婵被拘 (Man was arrested for repeatedly insulting Quan Hongchan in WeChat group)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BE%AE%E4%BF%A1%E7%BE%A4%E5%A4%9A%E6%AC%A1%E4%BE%AE%E8%BE%B1%E5%85%A8%E7%BA%A2%E5%A9%B5%E8%A2%AB%E6%8B%98%23) `79.9K 🔥` `-96%`
1. [穆祉丞去看张杰演唱会了](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%8E%BB%E7%9C%8B%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `79.7K 🔥` `-35%`
1. [原来王楚然早期长这样啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%97%A9%E6%9C%9F%E9%95%BF%E8%BF%99%E6%A0%B7%E5%95%8A%23) `79.3K 🔥` `-35%`
1. [957报名考编 (957 registration exam)](https://s.weibo.com/weibo?q=%23957%E6%8A%A5%E5%90%8D%E8%80%83%E7%BC%96%23) `79.1K 🔥` `-41%`
1. [冰湖重生](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%23) `78.6K 🔥` `-34%`
1. [中方回应日本降级中日关系 (China responds to Japan's downgrade of Sino-Japanese relations)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E9%99%8D%E7%BA%A7%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%23) `73.5K 🔥` `-56%`
1. [周也亮相穿普拉达的女王2首映](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E4%BA%AE%E7%9B%B8%E7%A9%BF%E6%99%AE%E6%8B%89%E8%BE%BE%E7%9A%84%E5%A5%B3%E7%8E%8B2%E9%A6%96%E6%98%A0%23) `73.2K 🔥` `-70%`
1. [杨洋为了升金V发博](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E4%B8%BA%E4%BA%86%E5%8D%87%E9%87%91V%E5%8F%91%E5%8D%9A%23) `72.7K 🔥` `-43%`
1. [刘诗诗送朴宝剑宝瓶花 (Liu Shishi gave Park Bo Sword and vase of flowers)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E9%80%81%E6%9C%B4%E5%AE%9D%E5%89%91%E5%AE%9D%E7%93%B6%E8%8A%B1%23) `67.1K 🔥` `-43%`
1. [雷军回应小米冰淇淋 (Lei Jun responds to Xiaomi ice cream)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E5%86%B0%E6%B7%87%E6%B7%8B%23) `66.5K 🔥` `-52%`
1. [儿子离世被媳孙善意隐瞒老人索赔50万 (The death of his son was concealed by his daughter-in-law and his grandson kindly concealed it. The old man claimed compensation for 500,000 yuan.)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E7%A6%BB%E4%B8%96%E8%A2%AB%E5%AA%B3%E5%AD%99%E5%96%84%E6%84%8F%E9%9A%90%E7%9E%92%E8%80%81%E4%BA%BA%E7%B4%A2%E8%B5%9450%E4%B8%87%23) `62.9K 🔥` `-53%`

Updated at 2026-04-10 21:48:53

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
