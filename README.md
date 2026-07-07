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

1. [广西南宁防汛救灾发布会 (Nanning, Guangxi Flood Prevention and Relief Press Conference)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%8D%97%E5%AE%81%E9%98%B2%E6%B1%9B%E6%95%91%E7%81%BE%E5%8F%91%E5%B8%83%E4%BC%9A%23) `1.1M 🔥` `NEW`
1. [比利时官方嘲讽美国](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E5%AE%98%E6%96%B9%E5%98%B2%E8%AE%BD%E7%BE%8E%E5%9B%BD%23) `1.0M 🔥` `NEW`
1. [抓实一上一下打好防汛硬仗](https://s.weibo.com/weibo?q=%23%E6%8A%93%E5%AE%9E%E4%B8%80%E4%B8%8A%E4%B8%80%E4%B8%8B%E6%89%93%E5%A5%BD%E9%98%B2%E6%B1%9B%E7%A1%AC%E4%BB%97%23) `973.5K 🔥` `NEW`
1. [全世界都在笑话美国](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E9%83%BD%E5%9C%A8%E7%AC%91%E8%AF%9D%E7%BE%8E%E5%9B%BD%23) `838.4K 🔥` `NEW`
1. [浙大校徽 阿玛尼](https://s.weibo.com/weibo?q=%23%E6%B5%99%E5%A4%A7%E6%A0%A1%E5%BE%BD%20%E9%98%BF%E7%8E%9B%E5%B0%BC%23) `746.0K 🔥` `NEW`
1. [前华为天才少年吐槽DeepSeek面试](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%8D%8E%E4%B8%BA%E5%A4%A9%E6%89%8D%E5%B0%91%E5%B9%B4%E5%90%90%E6%A7%BDDeepSeek%E9%9D%A2%E8%AF%95%23) `722.9K 🔥` `NEW`
1. [迪丽热巴封闭特训三个月](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B0%81%E9%97%AD%E7%89%B9%E8%AE%AD%E4%B8%89%E4%B8%AA%E6%9C%88%23) `721.4K 🔥` `NEW`
1. [半熟恋人](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA%23) `717.3K 🔥` `NEW`
1. [湖北强对流天气已致11死](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E5%BC%BA%E5%AF%B9%E6%B5%81%E5%A4%A9%E6%B0%94%E5%B7%B2%E8%87%B411%E6%AD%BB%23) `713.0K 🔥` `NEW`
1. [法国足协官方声明](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%B6%B3%E5%8D%8F%E5%AE%98%E6%96%B9%E5%A3%B0%E6%98%8E%23) `709.8K 🔥` `NEW`
1. [金子涵发明星名单 (Jin Jinhan's celebrity list)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%8F%91%E6%98%8E%E6%98%9F%E5%90%8D%E5%8D%95%23) `707.5K 🔥` `NEW`
1. [等退休是场巨大的骗局](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%80%80%E4%BC%91%E6%98%AF%E5%9C%BA%E5%B7%A8%E5%A4%A7%E7%9A%84%E9%AA%97%E5%B1%80%23) `705.5K 🔥` `NEW`
1. [灿如繁星 教资在颤抖](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%20%E6%95%99%E8%B5%84%E5%9C%A8%E9%A2%A4%E6%8A%96%23) `701.4K 🔥` `NEW`
1. [苏醒 世界从此清静了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%20%E4%B8%96%E7%95%8C%E4%BB%8E%E6%AD%A4%E6%B8%85%E9%9D%99%E4%BA%86%23) `698.9K 🔥` `NEW`
1. [特朗普说比利时赢球有黑幕](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E6%AF%94%E5%88%A9%E6%97%B6%E8%B5%A2%E7%90%83%E6%9C%89%E9%BB%91%E5%B9%95%23) `692.8K 🔥` `NEW`
1. [邓为花少私服](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E8%8A%B1%E5%B0%91%E7%A7%81%E6%9C%8D%23) `690.8K 🔥` `NEW`
1. [世界杯赛场上新一代的要强登场](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%B5%9B%E5%9C%BA%E4%B8%8A%E6%96%B0%E4%B8%80%E4%BB%A3%E7%9A%84%E8%A6%81%E5%BC%BA%E7%99%BB%E5%9C%BA%23) `688.4K 🔥` `NEW`
1. [鹿晗 关晓彤](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `683.0K 🔥` `NEW`
1. [LV等大牌集体撞款中国传统纹样](https://s.weibo.com/weibo?q=%23LV%E7%AD%89%E5%A4%A7%E7%89%8C%E9%9B%86%E4%BD%93%E6%92%9E%E6%AC%BE%E4%B8%AD%E5%9B%BD%E4%BC%A0%E7%BB%9F%E7%BA%B9%E6%A0%B7%23) `680.3K 🔥` `NEW`
1. [高市早苗获颁日本珠宝最佳佩戴者奖](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%8E%B7%E9%A2%81%E6%97%A5%E6%9C%AC%E7%8F%A0%E5%AE%9D%E6%9C%80%E4%BD%B3%E4%BD%A9%E6%88%B4%E8%80%85%E5%A5%96%23) `674.2K 🔥` `NEW`
1. [在变瘦神器直播间说实话就会被拉黑 (If you tell the truth in the slimming magic tool live broadcast room, you will be blocked)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8F%98%E7%98%A6%E7%A5%9E%E5%99%A8%E7%9B%B4%E6%92%AD%E9%97%B4%E8%AF%B4%E5%AE%9E%E8%AF%9D%E5%B0%B1%E4%BC%9A%E8%A2%AB%E6%8B%89%E9%BB%91%23) `668.6K 🔥` `NEW`
1. [金子涵怎么了](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E6%80%8E%E4%B9%88%E4%BA%86%23) `665.3K 🔥` `NEW`
1. [699分女孩选择学医被批认知太低](https://s.weibo.com/weibo?q=%23699%E5%88%86%E5%A5%B3%E5%AD%A9%E9%80%89%E6%8B%A9%E5%AD%A6%E5%8C%BB%E8%A2%AB%E6%89%B9%E8%AE%A4%E7%9F%A5%E5%A4%AA%E4%BD%8E%23) `664.6K 🔥` `NEW`
1. [我喜欢不着急的人](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%96%9C%E6%AC%A2%E4%B8%8D%E7%9D%80%E6%80%A5%E7%9A%84%E4%BA%BA%23) `659.4K 🔥` `NEW`
1. [我们的少年时代2飞页](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E9%A3%9E%E9%A1%B5%23) `656.8K 🔥` `NEW`
1. [阚清子 牌子货看到没](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%20%E7%89%8C%E5%AD%90%E8%B4%A7%E7%9C%8B%E5%88%B0%E6%B2%A1%23) `652.0K 🔥` `NEW`
1. [C罗称葡萄牙在我之前没有任何冠军](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%A7%B0%E8%91%A1%E8%90%84%E7%89%99%E5%9C%A8%E6%88%91%E4%B9%8B%E5%89%8D%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95%E5%86%A0%E5%86%9B%23) `650.6K 🔥` `NEW`
1. [功夫女足 周杰伦阿信](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%20%E5%91%A8%E6%9D%B0%E4%BC%A6%E9%98%BF%E4%BF%A1%23) `644.7K 🔥` `NEW`
1. [王宝强带女友参加婚礼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%9D%E5%BC%BA%E5%B8%A6%E5%A5%B3%E5%8F%8B%E5%8F%82%E5%8A%A0%E5%A9%9A%E7%A4%BC%23) `642.1K 🔥` `NEW`
1. [美国门将大失误](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%97%A8%E5%B0%86%E5%A4%A7%E5%A4%B1%E8%AF%AF%23) `639.7K 🔥` `NEW`
1. [黄冈龙卷风致多人伤亡失联 (Huanggang tornado causes many casualties and missing contacts)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%86%88%E9%BE%99%E5%8D%B7%E9%A3%8E%E8%87%B4%E5%A4%9A%E4%BA%BA%E4%BC%A4%E4%BA%A1%E5%A4%B1%E8%81%94%23) `637.5K 🔥` `NEW`
1. [巨无霸台风可能登陆我国](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E6%97%A0%E9%9C%B8%E5%8F%B0%E9%A3%8E%E5%8F%AF%E8%83%BD%E7%99%BB%E9%99%86%E6%88%91%E5%9B%BD%23) `633.3K 🔥` `NEW`
1. [世界杯8强6席已定](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF8%E5%BC%BA6%E5%B8%AD%E5%B7%B2%E5%AE%9A%23) `628.5K 🔥` `NEW`
1. [陈星旭 没空调开什么酒店](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%20%E6%B2%A1%E7%A9%BA%E8%B0%83%E5%BC%80%E4%BB%80%E4%B9%88%E9%85%92%E5%BA%97%23) `624.7K 🔥` `NEW`
1. [当你被学校开除但你爸是校长](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E8%A2%AB%E5%AD%A6%E6%A0%A1%E5%BC%80%E9%99%A4%E4%BD%86%E4%BD%A0%E7%88%B8%E6%98%AF%E6%A0%A1%E9%95%BF%23) `617.8K 🔥` `NEW`
1. [第一次见报仇小孩](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E6%8A%A5%E4%BB%87%E5%B0%8F%E5%AD%A9%23) `615.4K 🔥` `NEW`
1. [王宝强带冯清参加婚礼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%9D%E5%BC%BA%E5%B8%A6%E5%86%AF%E6%B8%85%E5%8F%82%E5%8A%A0%E5%A9%9A%E7%A4%BC%23) `609.7K 🔥` `NEW`
1. [米兰偶遇素颜关晓彤](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%81%B6%E9%81%87%E7%B4%A0%E9%A2%9C%E5%85%B3%E6%99%93%E5%BD%A4%23) `604.7K 🔥` `NEW`
1. [Claude被封 天才程序员陨落](https://s.weibo.com/weibo?q=%23Claude%E8%A2%AB%E5%B0%81%20%E5%A4%A9%E6%89%8D%E7%A8%8B%E5%BA%8F%E5%91%98%E9%99%A8%E8%90%BD%23) `599.8K 🔥` `NEW`
1. [赵丽颖一向是什么年龄做什么事](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%B8%80%E5%90%91%E6%98%AF%E4%BB%80%E4%B9%88%E5%B9%B4%E9%BE%84%E5%81%9A%E4%BB%80%E4%B9%88%E4%BA%8B%23) `594.9K 🔥` `NEW`
1. [特朗普称不知道红牌还要禁赛 (Trump said he didn’t know he would be suspended due to red card)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%BA%A2%E7%89%8C%E8%BF%98%E8%A6%81%E7%A6%81%E8%B5%9B%23) `591.9K 🔥` `NEW`
1. [功夫女足海外版预告](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E6%B5%B7%E5%A4%96%E7%89%88%E9%A2%84%E5%91%8A%23) `587.6K 🔥` `NEW`
1. [苏醒谈葡萄牙淘汰](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E8%B0%88%E8%91%A1%E8%90%84%E7%89%99%E6%B7%98%E6%B1%B0%23) `582.9K 🔥` `NEW`
1. [12306回应改了凌晨票提示语](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E6%94%B9%E4%BA%86%E5%87%8C%E6%99%A8%E7%A5%A8%E6%8F%90%E7%A4%BA%E8%AF%AD%23) `581.5K 🔥` `NEW`
1. [野狗骨头穿帮镜头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E7%A9%BF%E5%B8%AE%E9%95%9C%E5%A4%B4%23) `576.8K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `612.5K 🔥` `+22%`
1. [三星利润](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%88%A9%E6%B6%A6%23) `678.2K 🔥`
1. [香港黑帮头目垄断工地盒饭年赚千万](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%BB%91%E5%B8%AE%E5%A4%B4%E7%9B%AE%E5%9E%84%E6%96%AD%E5%B7%A5%E5%9C%B0%E7%9B%92%E9%A5%AD%E5%B9%B4%E8%B5%9A%E5%8D%83%E4%B8%87%23) `600.7K 🔥`
1. [王濛聊到浪姐随意更改赛制](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%81%8A%E5%88%B0%E6%B5%AA%E5%A7%90%E9%9A%8F%E6%84%8F%E6%9B%B4%E6%94%B9%E8%B5%9B%E5%88%B6%23) `573.2K 🔥`
1. [广西抗洪 (Guangxi flood fighting)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%8A%97%E6%B4%AA%23) `622.7K 🔥` `-65%`

Updated at 2026-07-07 13:13:40

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
