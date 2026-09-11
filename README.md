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

1. [葫芦爷爷重新挂出葫芦](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E7%88%B7%E7%88%B7%E9%87%8D%E6%96%B0%E6%8C%82%E5%87%BA%E8%91%AB%E8%8A%A6%23) `2.4M 🔥` `NEW`
1. [打假网红铁头一审获刑8年](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%81%87%E7%BD%91%E7%BA%A2%E9%93%81%E5%A4%B4%E4%B8%80%E5%AE%A1%E8%8E%B7%E5%88%918%E5%B9%B4%23) `1.1M 🔥` `NEW`
1. [服贸会上一眼未来](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E8%B4%B8%E4%BC%9A%E4%B8%8A%E4%B8%80%E7%9C%BC%E6%9C%AA%E6%9D%A5%23) `995.5K 🔥` `NEW`
1. [男子编造停捐遭威胁事件被抓](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BC%96%E9%80%A0%E5%81%9C%E6%8D%90%E9%81%AD%E5%A8%81%E8%83%81%E4%BA%8B%E4%BB%B6%E8%A2%AB%E6%8A%93%23) `858.7K 🔥` `NEW`
1. [香蕉地喷3天农药毒死隔壁5万斤牛蛙](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%95%89%E5%9C%B0%E5%96%B73%E5%A4%A9%E5%86%9C%E8%8D%AF%E6%AF%92%E6%AD%BB%E9%9A%94%E5%A3%815%E4%B8%87%E6%96%A4%E7%89%9B%E8%9B%99%23) `739.2K 🔥` `NEW`
1. [罚了51.79亿携程为何还在杀熟](https://s.weibo.com/weibo?q=%23%E7%BD%9A%E4%BA%8651.79%E4%BA%BF%E6%90%BA%E7%A8%8B%E4%B8%BA%E4%BD%95%E8%BF%98%E5%9C%A8%E6%9D%80%E7%86%9F%23) `738.4K 🔥` `NEW`
1. [开985车牌面包车送闺女上学系AI生成](https://s.weibo.com/weibo?q=%23%E5%BC%80985%E8%BD%A6%E7%89%8C%E9%9D%A2%E5%8C%85%E8%BD%A6%E9%80%81%E9%97%BA%E5%A5%B3%E4%B8%8A%E5%AD%A6%E7%B3%BBAI%E7%94%9F%E6%88%90%23) `727.3K 🔥` `NEW`
1. [雷宇扬去世](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%AE%87%E6%89%AC%E5%8E%BB%E4%B8%96%23) `599.0K 🔥` `NEW`
1. [大幅上调日本公民赴华签证规费](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%85%E4%B8%8A%E8%B0%83%E6%97%A5%E6%9C%AC%E5%85%AC%E6%B0%91%E8%B5%B4%E5%8D%8E%E7%AD%BE%E8%AF%81%E8%A7%84%E8%B4%B9%23) `425.9K 🔥` `NEW`
1. [井柏然 现偶整不动了](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E7%8E%B0%E5%81%B6%E6%95%B4%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `412.0K 🔥` `NEW`
1. [白敬亭谭松韵一个叫姐一个叫哥](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E8%B0%AD%E6%9D%BE%E9%9F%B5%E4%B8%80%E4%B8%AA%E5%8F%AB%E5%A7%90%E4%B8%80%E4%B8%AA%E5%8F%AB%E5%93%A5%23) `406.4K 🔥` `NEW`
1. [梅姨](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%23) `406.1K 🔥` `NEW`
1. [再就业男团每人演出60分钟](https://s.weibo.com/weibo?q=%23%E5%86%8D%E5%B0%B1%E4%B8%9A%E7%94%B7%E5%9B%A2%E6%AF%8F%E4%BA%BA%E6%BC%94%E5%87%BA60%E5%88%86%E9%92%9F%23) `402.9K 🔥` `NEW`
1. [姚月茂抖音账号被禁止关注](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E6%9C%88%E8%8C%82%E6%8A%96%E9%9F%B3%E8%B4%A6%E5%8F%B7%E8%A2%AB%E7%A6%81%E6%AD%A2%E5%85%B3%E6%B3%A8%23) `390.3K 🔥` `NEW`
1. [艾特孙千结果井柏然回复了](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%89%B9%E5%AD%99%E5%8D%83%E7%BB%93%E6%9E%9C%E4%BA%95%E6%9F%8F%E7%84%B6%E5%9B%9E%E5%A4%8D%E4%BA%86%23) `389.0K 🔥` `NEW`
1. [男子离婚6年后发现自己被去父留子](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A6%BB%E5%A9%9A6%E5%B9%B4%E5%90%8E%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E8%A2%AB%E5%8E%BB%E7%88%B6%E7%95%99%E5%AD%90%23) `382.6K 🔥` `NEW`
1. [7岁半性早熟女童家里是开炸鸡店的](https://s.weibo.com/weibo?q=%237%E5%B2%81%E5%8D%8A%E6%80%A7%E6%97%A9%E7%86%9F%E5%A5%B3%E7%AB%A5%E5%AE%B6%E9%87%8C%E6%98%AF%E5%BC%80%E7%82%B8%E9%B8%A1%E5%BA%97%E7%9A%84%23) `305.4K 🔥` `NEW`
1. [小米18Fold西野红卖断货](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%E8%A5%BF%E9%87%8E%E7%BA%A2%E5%8D%96%E6%96%AD%E8%B4%A7%23) `293.9K 🔥` `NEW`
1. [周冬雨走到哪儿都是素颜](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E8%B5%B0%E5%88%B0%E5%93%AA%E5%84%BF%E9%83%BD%E6%98%AF%E7%B4%A0%E9%A2%9C%23) `292.2K 🔥` `NEW`
1. [油价12日起上调](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B712%E6%97%A5%E8%B5%B7%E4%B8%8A%E8%B0%83%23) `290.9K 🔥` `NEW`
1. [28岁智障女孩多次生子后离世](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E6%99%BA%E9%9A%9C%E5%A5%B3%E5%AD%A9%E5%A4%9A%E6%AC%A1%E7%94%9F%E5%AD%90%E5%90%8E%E7%A6%BB%E4%B8%96%23) `287.4K 🔥` `NEW`
1. [翁帆50岁状态](https://s.weibo.com/weibo?q=%23%E7%BF%81%E5%B8%8650%E5%B2%81%E7%8A%B6%E6%80%81%23) `285.7K 🔥` `NEW`
1. [小米18Fold折痕](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%E6%8A%98%E7%97%95%23) `284.4K 🔥` `NEW`
1. [中国汽车全球首次使用折叠屏](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B1%BD%E8%BD%A6%E5%85%A8%E7%90%83%E9%A6%96%E6%AC%A1%E4%BD%BF%E7%94%A8%E6%8A%98%E5%8F%A0%E5%B1%8F%23) `283.7K 🔥` `NEW`
1. [早春晴朗豆瓣6.7分](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E8%B1%86%E7%93%A36.7%E5%88%86%23) `280.9K 🔥` `NEW`
1. [林依晨睡沙发](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E7%9D%A1%E6%B2%99%E5%8F%91%23) `278.3K 🔥` `NEW`
1. [全网十大恶猫之首](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E5%8D%81%E5%A4%A7%E6%81%B6%E7%8C%AB%E4%B9%8B%E9%A6%96%23) `276.2K 🔥` `NEW`
1. [货拉拉跳车案](https://s.weibo.com/weibo?q=%23%E8%B4%A7%E6%8B%89%E6%8B%89%E8%B7%B3%E8%BD%A6%E6%A1%88%23) `275.5K 🔥` `NEW`
1. [妇联回应女孩被父母跨省逼婚](https://s.weibo.com/weibo?q=%23%E5%A6%87%E8%81%94%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E8%A2%AB%E7%88%B6%E6%AF%8D%E8%B7%A8%E7%9C%81%E9%80%BC%E5%A9%9A%23) `272.5K 🔥` `NEW`
1. [出门的好处被严重低估了](https://s.weibo.com/weibo?q=%23%E5%87%BA%E9%97%A8%E7%9A%84%E5%A5%BD%E5%A4%84%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E4%BA%86%23) `270.4K 🔥` `NEW`
1. [警方通报江西台记者采访被打](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E6%B1%9F%E8%A5%BF%E5%8F%B0%E8%AE%B0%E8%80%85%E9%87%87%E8%AE%BF%E8%A2%AB%E6%89%93%23) `267.6K 🔥` `NEW`
1. [孙千撒娇喊栾念喊yue了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E6%92%92%E5%A8%87%E5%96%8A%E6%A0%BE%E5%BF%B5%E5%96%8Ayue%E4%BA%86%23) `266.7K 🔥` `NEW`
1. [A股午后深V反弹](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%88%E5%90%8E%E6%B7%B1V%E5%8F%8D%E5%BC%B9%23) `265.3K 🔥` `NEW`
1. [余文乐把曹骏抱起来了](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%E6%8A%8A%E6%9B%B9%E9%AA%8F%E6%8A%B1%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `262.8K 🔥` `NEW`
1. [网易 鸿蒙](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%98%93%20%E9%B8%BF%E8%92%99%23) `261.7K 🔥` `NEW`
1. [75岁周星驰御用配角在线求职](https://s.weibo.com/weibo?q=%2375%E5%B2%81%E5%91%A8%E6%98%9F%E9%A9%B0%E5%BE%A1%E7%94%A8%E9%85%8D%E8%A7%92%E5%9C%A8%E7%BA%BF%E6%B1%82%E8%81%8C%23) `260.9K 🔥` `NEW`
1. [跨省抓女儿逼婚父母将面临什么](https://s.weibo.com/weibo?q=%23%E8%B7%A8%E7%9C%81%E6%8A%93%E5%A5%B3%E5%84%BF%E9%80%BC%E5%A9%9A%E7%88%B6%E6%AF%8D%E5%B0%86%E9%9D%A2%E4%B8%B4%E4%BB%80%E4%B9%88%23) `259.3K 🔥` `NEW`
1. [成熟的无畏帅成啥了](https://s.weibo.com/weibo?q=%23%E6%88%90%E7%86%9F%E7%9A%84%E6%97%A0%E7%95%8F%E5%B8%85%E6%88%90%E5%95%A5%E4%BA%86%23) `257.6K 🔥` `NEW`
1. [孙艺珍说儿子帅想不当演员都难](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%89%BA%E7%8F%8D%E8%AF%B4%E5%84%BF%E5%AD%90%E5%B8%85%E6%83%B3%E4%B8%8D%E5%BD%93%E6%BC%94%E5%91%98%E9%83%BD%E9%9A%BE%23) `256.6K 🔥` `NEW`
1. [成品油价格临时调控](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%93%81%E6%B2%B9%E4%BB%B7%E6%A0%BC%E4%B8%B4%E6%97%B6%E8%B0%83%E6%8E%A7%23) `255.6K 🔥` `NEW`
1. [徐洁云回复科技新一](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E4%BA%91%E5%9B%9E%E5%A4%8D%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80%23) `254.1K 🔥` `NEW`
1. [iPhoneDuo遭爆炒溢价超4000元](https://s.weibo.com/weibo?q=%23iPhoneDuo%E9%81%AD%E7%88%86%E7%82%92%E6%BA%A2%E4%BB%B7%E8%B6%854000%E5%85%83%23) `252.9K 🔥` `NEW`
1. [银河左岸音乐节公告](https://s.weibo.com/weibo?q=%23%E9%93%B6%E6%B2%B3%E5%B7%A6%E5%B2%B8%E9%9F%B3%E4%B9%90%E8%8A%82%E5%85%AC%E5%91%8A%23) `252.0K 🔥` `NEW`
1. [章若楠说大家卸了妆都长一样](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%AF%B4%E5%A4%A7%E5%AE%B6%E5%8D%B8%E4%BA%86%E5%A6%86%E9%83%BD%E9%95%BF%E4%B8%80%E6%A0%B7%23) `302.2K 🔥`
1. [911未公开视频](https://s.weibo.com/weibo?q=%23911%E6%9C%AA%E5%85%AC%E5%BC%80%E8%A7%86%E9%A2%91%23) `288.5K 🔥`
1. [范丞丞ins发抽烟照](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9Eins%E5%8F%91%E6%8A%BD%E7%83%9F%E7%85%A7%23) `282.7K 🔥`
1. [月薪1w是月薪5K的六倍](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA1w%E6%98%AF%E6%9C%88%E8%96%AA5K%E7%9A%84%E5%85%AD%E5%80%8D%23) `268.5K 🔥`
1. [iPhone17Pro史上最低价](https://s.weibo.com/weibo?q=%23iPhone17Pro%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%BD%8E%E4%BB%B7%23) `290.6K 🔥` `-81%`
1. [车主称坠楼砸车小孩家长态度转变](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%B8%BB%E7%A7%B0%E5%9D%A0%E6%A5%BC%E7%A0%B8%E8%BD%A6%E5%B0%8F%E5%AD%A9%E5%AE%B6%E9%95%BF%E6%80%81%E5%BA%A6%E8%BD%AC%E5%8F%98%23) `278.8K 🔥` `-82%`
1. [洪水中被蛇咬身亡女子家属起诉养殖户](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E6%B0%B4%E4%B8%AD%E8%A2%AB%E8%9B%87%E5%92%AC%E8%BA%AB%E4%BA%A1%E5%A5%B3%E5%AD%90%E5%AE%B6%E5%B1%9E%E8%B5%B7%E8%AF%89%E5%85%BB%E6%AE%96%E6%88%B7%23) `271.2K 🔥` `-77%`

Updated at 2026-09-11 17:31:42

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
