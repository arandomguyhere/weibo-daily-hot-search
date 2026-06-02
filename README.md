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

1. [公安交管局就综艺安全带P图发声 (Public Security and Traffic Management Bureau speaks out on variety show seat belt photos)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E4%BA%A4%E7%AE%A1%E5%B1%80%E5%B0%B1%E7%BB%BC%E8%89%BA%E5%AE%89%E5%85%A8%E5%B8%A6P%E5%9B%BE%E5%8F%91%E5%A3%B0%23) `1.5M 🔥` `NEW`
1. [库里签约李宁](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E7%AD%BE%E7%BA%A6%E6%9D%8E%E5%AE%81%23) `708.7K 🔥` `NEW`
1. [两大芯片巨头互攻](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A4%A7%E8%8A%AF%E7%89%87%E5%B7%A8%E5%A4%B4%E4%BA%92%E6%94%BB%23) `702.0K 🔥` `NEW`
1. [虞书欣复刻小兰花施法手势](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A4%8D%E5%88%BB%E5%B0%8F%E5%85%B0%E8%8A%B1%E6%96%BD%E6%B3%95%E6%89%8B%E5%8A%BF%23) `662.2K 🔥` `NEW`
1. [王嘉尔转场张杰演唱会视频](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E8%BD%AC%E5%9C%BA%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A7%86%E9%A2%91%23) `466.4K 🔥` `NEW`
1. [前火箭主帅阿德尔曼离世](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%81%AB%E7%AE%AD%E4%B8%BB%E5%B8%85%E9%98%BF%E5%BE%B7%E5%B0%94%E6%9B%BC%E7%A6%BB%E4%B8%96%23) `283.3K 🔥` `NEW`
1. [给阿嬷的情书票房超过镖人](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E8%B6%85%E8%BF%87%E9%95%96%E4%BA%BA%23) `282.1K 🔥` `NEW`
1. [坦桑尼亚被绑架中国人被勒索1.4亿元](https://s.weibo.com/weibo?q=%23%E5%9D%A6%E6%A1%91%E5%B0%BC%E4%BA%9A%E8%A2%AB%E7%BB%91%E6%9E%B6%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%A2%AB%E5%8B%92%E7%B4%A21.4%E4%BA%BF%E5%85%83%23) `281.8K 🔥` `NEW`
1. [奚梦瑶晒婚礼照片](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E6%99%92%E5%A9%9A%E7%A4%BC%E7%85%A7%E7%89%87%23) `279.5K 🔥` `NEW`
1. [陈妍希六一晒孩子照片](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%85%AD%E4%B8%80%E6%99%92%E5%AD%A9%E5%AD%90%E7%85%A7%E7%89%87%23) `278.1K 🔥` `NEW`
1. [陈都灵睡觉是化妆师主动提出 (Chen Duling went to bed because the makeup artist took the initiative)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E7%9D%A1%E8%A7%89%E6%98%AF%E5%8C%96%E5%A6%86%E5%B8%88%E4%B8%BB%E5%8A%A8%E6%8F%90%E5%87%BA%23) `275.8K 🔥` `NEW`
1. [有些钱看似乱花其实是在救命](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%9B%E9%92%B1%E7%9C%8B%E4%BC%BC%E4%B9%B1%E8%8A%B1%E5%85%B6%E5%AE%9E%E6%98%AF%E5%9C%A8%E6%95%91%E5%91%BD%23) `273.8K 🔥` `NEW`
1. [何超莲评论祝福何猷君](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%8E%B2%E8%AF%84%E8%AE%BA%E7%A5%9D%E7%A6%8F%E4%BD%95%E7%8C%B7%E5%90%9B%23) `271.2K 🔥` `NEW`
1. [长鑫科技](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%23) `268.8K 🔥` `NEW`
1. [算力价格](https://s.weibo.com/weibo?q=%23%E7%AE%97%E5%8A%9B%E4%BB%B7%E6%A0%BC%23) `268.3K 🔥` `NEW`
1. [奚梦瑶婚礼伴手礼](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `263.9K 🔥` `NEW`
1. [2人网暴抗洪女干部被罚](https://s.weibo.com/weibo?q=%232%E4%BA%BA%E7%BD%91%E6%9A%B4%E6%8A%97%E6%B4%AA%E5%A5%B3%E5%B9%B2%E9%83%A8%E8%A2%AB%E7%BD%9A%23) `261.4K 🔥` `NEW`
1. [cortis巡演](https://s.weibo.com/weibo?q=%23cortis%E5%B7%A1%E6%BC%94%23) `259.6K 🔥` `NEW`
1. [萧敬腾到新疆都得干着唱完歌](https://s.weibo.com/weibo?q=%23%E8%90%A7%E6%95%AC%E8%85%BE%E5%88%B0%E6%96%B0%E7%96%86%E9%83%BD%E5%BE%97%E5%B9%B2%E7%9D%80%E5%94%B1%E5%AE%8C%E6%AD%8C%23) `257.9K 🔥` `NEW`
1. [迪丽热巴嘉人六月刊封面](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%98%89%E4%BA%BA%E5%85%AD%E6%9C%88%E5%88%8A%E5%B0%81%E9%9D%A2%23) `257.7K 🔥` `NEW`
1. [夏美 (Natsumi)](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E7%BE%8E%23) `255.2K 🔥` `NEW`
1. [突然发现这周六好6](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E8%BF%99%E5%91%A8%E5%85%AD%E5%A5%BD6%23) `253.4K 🔥` `NEW`
1. [熬夜加班天天外卖女子全身瘙痒变黄](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E5%8A%A0%E7%8F%AD%E5%A4%A9%E5%A4%A9%E5%A4%96%E5%8D%96%E5%A5%B3%E5%AD%90%E5%85%A8%E8%BA%AB%E7%98%99%E7%97%92%E5%8F%98%E9%BB%84%23) `252.4K 🔥` `NEW`
1. [iPhoneUltra配色曝光](https://s.weibo.com/weibo?q=%23iPhoneUltra%E9%85%8D%E8%89%B2%E6%9B%9D%E5%85%89%23) `250.5K 🔥` `NEW`
1. [小鹏前员工违约竞业协议被诉近千万](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E5%89%8D%E5%91%98%E5%B7%A5%E8%BF%9D%E7%BA%A6%E7%AB%9E%E4%B8%9A%E5%8D%8F%E8%AE%AE%E8%A2%AB%E8%AF%89%E8%BF%91%E5%8D%83%E4%B8%87%23) `249.3K 🔥` `NEW`
1. [终于等到孟子义现代剧](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%AD%89%E5%88%B0%E5%AD%9F%E5%AD%90%E4%B9%89%E7%8E%B0%E4%BB%A3%E5%89%A7%23) `248.1K 🔥` `NEW`
1. [A股科创板整体暴涨](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%A7%91%E5%88%9B%E6%9D%BF%E6%95%B4%E4%BD%93%E6%9A%B4%E6%B6%A8%23) `245.8K 🔥` `NEW`
1. [马嘉祺草莓项链](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E8%8D%89%E8%8E%93%E9%A1%B9%E9%93%BE%23) `244.6K 🔥` `NEW`
1. [男子绑架5岁女童小男孩勇敢顶门呼救](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BB%91%E6%9E%B65%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%B0%8F%E7%94%B7%E5%AD%A9%E5%8B%87%E6%95%A2%E9%A1%B6%E9%97%A8%E5%91%BC%E6%95%91%23) `242.9K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `240.4K 🔥` `NEW`
1. [邵闯拍的花神杨紫 (Yang Zi, the flower god photographed by Shao Chuang)](https://s.weibo.com/weibo?q=%23%E9%82%B5%E9%97%AF%E6%8B%8D%E7%9A%84%E8%8A%B1%E7%A5%9E%E6%9D%A8%E7%B4%AB%23) `236.2K 🔥` `NEW`
1. [梅婷刘琳一起过六一](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A9%B7%E5%88%98%E7%90%B3%E4%B8%80%E8%B5%B7%E8%BF%87%E5%85%AD%E4%B8%80%23) `234.7K 🔥` `NEW`
1. [葡萄牙世界杯首训](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E8%AE%AD%23) `231.9K 🔥` `NEW`
1. [学生穿中山装参加成人礼瞬间加辈](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%94%9F%E7%A9%BF%E4%B8%AD%E5%B1%B1%E8%A3%85%E5%8F%82%E5%8A%A0%E6%88%90%E4%BA%BA%E7%A4%BC%E7%9E%AC%E9%97%B4%E5%8A%A0%E8%BE%88%23) `230.9K 🔥` `NEW`
1. [日本偷天换日](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%81%B7%E5%A4%A9%E6%8D%A2%E6%97%A5%23) `228.7K 🔥` `NEW`
1. [豆包免费部分](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%85%8D%E8%B4%B9%E9%83%A8%E5%88%86%23) `918.0K 🔥` `+44%`
1. [长征十二号乙运载火箭首飞成功](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E5%8D%81%E4%BA%8C%E5%8F%B7%E4%B9%99%E8%BF%90%E8%BD%BD%E7%81%AB%E7%AE%AD%E9%A6%96%E9%A3%9E%E6%88%90%E5%8A%9F%23) `740.6K 🔥` `+53%`
1. [无论谁赢球都来找蒙牛 (Whoever wins will come to Mengniu)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E8%AE%BA%E8%B0%81%E8%B5%A2%E7%90%83%E9%83%BD%E6%9D%A5%E6%89%BE%E8%92%99%E7%89%9B%23) `735.2K 🔥` `+441%`
1. [向太说真正有钱人不会给小孩买名牌](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E7%9C%9F%E6%AD%A3%E6%9C%89%E9%92%B1%E4%BA%BA%E4%B8%8D%E4%BC%9A%E7%BB%99%E5%B0%8F%E5%AD%A9%E4%B9%B0%E5%90%8D%E7%89%8C%23) `274.9K 🔥`
1. [瑞幸把HelloKitty写成HeeloKitty](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E6%8A%8AHelloKitty%E5%86%99%E6%88%90HeeloKitty%23) `270.5K 🔥`
1. [于正 晚晚](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%20%E6%99%9A%E6%99%9A%23) `266.0K 🔥`
1. [大部分人都对尺寸没有概念 (Most people have no concept of size)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%83%A8%E5%88%86%E4%BA%BA%E9%83%BD%E5%AF%B9%E5%B0%BA%E5%AF%B8%E6%B2%A1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `265.8K 🔥`
1. [网友晒田曦薇初中毕业照 (Netizens share photos of Tian Xiwei’s junior high school graduation)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%99%92%E7%94%B0%E6%9B%A6%E8%96%87%E5%88%9D%E4%B8%AD%E6%AF%95%E4%B8%9A%E7%85%A7%23) `262.0K 🔥`
1. [嫌潮汕火锅太淡欲写5000字差评 (I think Chaoshan hotpot is too bland and I want to write a 5,000-word negative review)](https://s.weibo.com/weibo?q=%23%E5%AB%8C%E6%BD%AE%E6%B1%95%E7%81%AB%E9%94%85%E5%A4%AA%E6%B7%A1%E6%AC%B2%E5%86%995000%E5%AD%97%E5%B7%AE%E8%AF%84%23) `254.6K 🔥`
1. [人糊涂起来就这样莫名其妙](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B3%8A%E6%B6%82%E8%B5%B7%E6%9D%A5%E5%B0%B1%E8%BF%99%E6%A0%B7%E8%8E%AB%E5%90%8D%E5%85%B6%E5%A6%99%23) `243.2K 🔥`
1. [杨紫 豆包](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E8%B1%86%E5%8C%85%23) `239.8K 🔥`
1. [黄仁勋官宣联手宇树造参考人形机器人](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%AE%98%E5%AE%A3%E8%81%94%E6%89%8B%E5%AE%87%E6%A0%91%E9%80%A0%E5%8F%82%E8%80%83%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `238.1K 🔥`
1. [路边加微信KTV女孩可能是崩老头](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%BE%B9%E5%8A%A0%E5%BE%AE%E4%BF%A1KTV%E5%A5%B3%E5%AD%A9%E5%8F%AF%E8%83%BD%E6%98%AF%E5%B4%A9%E8%80%81%E5%A4%B4%23) `236.5K 🔥`
1. [梁靖崑说张本智和瞎忙活 (Liang Jingkun said Zhang Benzhi was busy working in vain)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E8%AF%B4%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%9E%8E%E5%BF%99%E6%B4%BB%23) `233.6K 🔥`
1. [产检发现性病丈夫认为妻子故意隐瞒](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E6%A3%80%E5%8F%91%E7%8E%B0%E6%80%A7%E7%97%85%E4%B8%88%E5%A4%AB%E8%AE%A4%E4%B8%BA%E5%A6%BB%E5%AD%90%E6%95%85%E6%84%8F%E9%9A%90%E7%9E%92%23) `227.5K 🔥`
1. [台湾岛内统一声浪持续高涨](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%B2%9B%E5%86%85%E7%BB%9F%E4%B8%80%E5%A3%B0%E6%B5%AA%E6%8C%81%E7%BB%AD%E9%AB%98%E6%B6%A8%23) `277.4K 🔥` `-31%`

Updated at 2026-06-02 09:59:30

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
