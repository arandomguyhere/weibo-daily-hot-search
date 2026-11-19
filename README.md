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

1. [中俄美三国元首会晤](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E4%B8%89%E5%9B%BD%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%23) `2.1M 🔥` `NEW`
1. [APEC领导人休息室温馨画面](https://s.weibo.com/weibo?q=%23APEC%E9%A2%86%E5%AF%BC%E4%BA%BA%E4%BC%91%E6%81%AF%E5%AE%A4%E6%B8%A9%E9%A6%A8%E7%94%BB%E9%9D%A2%23) `1.2M 🔥` `NEW`
1. [APEC强劲发力激活亚太经贸新动能](https://s.weibo.com/weibo?q=%23APEC%E5%BC%BA%E5%8A%B2%E5%8F%91%E5%8A%9B%E6%BF%80%E6%B4%BB%E4%BA%9A%E5%A4%AA%E7%BB%8F%E8%B4%B8%E6%96%B0%E5%8A%A8%E8%83%BD%23) `1.1M 🔥` `NEW`
1. [和文物碰个面](https://s.weibo.com/weibo?q=%23%E5%92%8C%E6%96%87%E7%89%A9%E7%A2%B0%E4%B8%AA%E9%9D%A2%23) `1.1M 🔥` `NEW`
1. [特朗普会见普京时打趣问这是谁](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%BC%9A%E8%A7%81%E6%99%AE%E4%BA%AC%E6%97%B6%E6%89%93%E8%B6%A3%E9%97%AE%E8%BF%99%E6%98%AF%E8%B0%81%23) `1.1M 🔥` `NEW`
1. [中美元首深圳会晤](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E6%B7%B1%E5%9C%B3%E4%BC%9A%E6%99%A4%23) `775.8K 🔥` `NEW`
1. [竞燃之夜红毯](https://s.weibo.com/weibo?q=%23%E7%AB%9E%E7%87%83%E4%B9%8B%E5%A4%9C%E7%BA%A2%E6%AF%AF%23) `623.6K 🔥` `NEW`
1. [微博竞燃之夜](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%AB%9E%E7%87%83%E4%B9%8B%E5%A4%9C%23) `603.0K 🔥` `NEW`
1. [许飞 我们没有掰](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E6%88%91%E4%BB%AC%E6%B2%A1%E6%9C%89%E6%8E%B0%23) `452.6K 🔥` `NEW`
1. [APEC中国年进入高光时刻](https://s.weibo.com/weibo?q=%23APEC%E4%B8%AD%E5%9B%BD%E5%B9%B4%E8%BF%9B%E5%85%A5%E9%AB%98%E5%85%89%E6%97%B6%E5%88%BB%23) `452.3K 🔥` `NEW`
1. [亚太创新合作呈现普惠新特点](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E5%A4%AA%E5%88%9B%E6%96%B0%E5%90%88%E4%BD%9C%E5%91%88%E7%8E%B0%E6%99%AE%E6%83%A0%E6%96%B0%E7%89%B9%E7%82%B9%23) `450.5K 🔥` `NEW`
1. [胖东来撤走后降到四百万依然没有人接盘](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%92%A4%E8%B5%B0%E5%90%8E%E9%99%8D%E5%88%B0%E5%9B%9B%E7%99%BE%E4%B8%87%E4%BE%9D%E7%84%B6%E6%B2%A1%E6%9C%89%E4%BA%BA%E6%8E%A5%E7%9B%98%23) `449.6K 🔥` `NEW`
1. [马斯克小儿子说爱中国](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%B0%8F%E5%84%BF%E5%AD%90%E8%AF%B4%E7%88%B1%E4%B8%AD%E5%9B%BD%23) `448.5K 🔥` `NEW`
1. [王子璇白眼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E7%99%BD%E7%9C%BC%23) `446.4K 🔥` `NEW`
1. [伊能静 张萌马天宇不适合做朋友](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%20%E5%BC%A0%E8%90%8C%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B8%8D%E9%80%82%E5%90%88%E5%81%9A%E6%9C%8B%E5%8F%8B%23) `445.8K 🔥` `NEW`
1. [白小纯 青稚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E9%9D%92%E7%A8%9A%23) `444.8K 🔥` `NEW`
1. [于东来不还价撤店](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E4%B8%8D%E8%BF%98%E4%BB%B7%E6%92%A4%E5%BA%97%23) `442.9K 🔥` `NEW`
1. [马斯克小儿子玩具都是中国制造](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%B0%8F%E5%84%BF%E5%AD%90%E7%8E%A9%E5%85%B7%E9%83%BD%E6%98%AF%E4%B8%AD%E5%9B%BD%E5%88%B6%E9%80%A0%23) `441.3K 🔥` `NEW`
1. [马斯克又带着小儿子来中国了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%8F%88%E5%B8%A6%E7%9D%80%E5%B0%8F%E5%84%BF%E5%AD%90%E6%9D%A5%E4%B8%AD%E5%9B%BD%E4%BA%86%23) `440.4K 🔥` `NEW`
1. [APEC重要讲话](https://s.weibo.com/weibo?q=%23APEC%E9%87%8D%E8%A6%81%E8%AE%B2%E8%AF%9D%23) `439.5K 🔥` `NEW`
1. [特朗普一脸笑容落座开启热聊](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%80%E8%84%B8%E7%AC%91%E5%AE%B9%E8%90%BD%E5%BA%A7%E5%BC%80%E5%90%AF%E7%83%AD%E8%81%8A%23) `437.2K 🔥` `NEW`
1. [甄嬛传剧组故意没让颖儿学礼仪](https://s.weibo.com/weibo?q=%23%E7%94%84%E5%AC%9B%E4%BC%A0%E5%89%A7%E7%BB%84%E6%95%85%E6%84%8F%E6%B2%A1%E8%AE%A9%E9%A2%96%E5%84%BF%E5%AD%A6%E7%A4%BC%E4%BB%AA%23) `436.6K 🔥` `NEW`
1. [王子璇说只有文吉儿换了软卧包间](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E8%AF%B4%E5%8F%AA%E6%9C%89%E6%96%87%E5%90%89%E5%84%BF%E6%8D%A2%E4%BA%86%E8%BD%AF%E5%8D%A7%E5%8C%85%E9%97%B4%23) `435.1K 🔥` `NEW`
1. [青稚 先救根儿](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%20%E5%85%88%E6%95%91%E6%A0%B9%E5%84%BF%23) `433.3K 🔥` `NEW`
1. [杨超越董思成亲了4小时的吻戏](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%91%A3%E6%80%9D%E6%88%90%E4%BA%B2%E4%BA%864%E5%B0%8F%E6%97%B6%E7%9A%84%E5%90%BB%E6%88%8F%23) `433.3K 🔥` `NEW`
1. [APEC第33次领导人非正式会议举行](https://s.weibo.com/weibo?q=%23APEC%E7%AC%AC33%E6%AC%A1%E9%A2%86%E5%AF%BC%E4%BA%BA%E9%9D%9E%E6%AD%A3%E5%BC%8F%E4%BC%9A%E8%AE%AE%E4%B8%BE%E8%A1%8C%23) `385.9K 🔥` `NEW`
1. [陈晓楠文吉儿聊不下去了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%99%93%E6%A5%A0%E6%96%87%E5%90%89%E5%84%BF%E8%81%8A%E4%B8%8D%E4%B8%8B%E5%8E%BB%E4%BA%86%23) `372.4K 🔥` `NEW`
1. [特朗普和普京握手并拍了拍肩膀](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%92%8C%E6%99%AE%E4%BA%AC%E6%8F%A1%E6%89%8B%E5%B9%B6%E6%8B%8D%E4%BA%86%E6%8B%8D%E8%82%A9%E8%86%80%23) `342.7K 🔥` `NEW`
1. [液氧乐队主唱张宇去世](https://s.weibo.com/weibo?q=%23%E6%B6%B2%E6%B0%A7%E4%B9%90%E9%98%9F%E4%B8%BB%E5%94%B1%E5%BC%A0%E5%AE%87%E5%8E%BB%E4%B8%96%23) `325.9K 🔥` `NEW`
1. [球星公益行让温暖守护在身边](https://s.weibo.com/weibo?q=%23%E7%90%83%E6%98%9F%E5%85%AC%E7%9B%8A%E8%A1%8C%E8%AE%A9%E6%B8%A9%E6%9A%96%E5%AE%88%E6%8A%A4%E5%9C%A8%E8%BA%AB%E8%BE%B9%23) `285.6K 🔥` `NEW`
1. [智能门锁自己开门给外卖小哥吓懵了](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%83%BD%E9%97%A8%E9%94%81%E8%87%AA%E5%B7%B1%E5%BC%80%E9%97%A8%E7%BB%99%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E5%90%93%E6%87%B5%E4%BA%86%23) `283.0K 🔥` `NEW`
1. [中俄美元首座驾首次同框](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E7%BE%8E%E5%85%83%E9%A6%96%E5%BA%A7%E9%A9%BE%E9%A6%96%E6%AC%A1%E5%90%8C%E6%A1%86%23) `281.5K 🔥` `NEW`
1. [TTG竞燃之夜出发图](https://s.weibo.com/weibo?q=%23TTG%E7%AB%9E%E7%87%83%E4%B9%8B%E5%A4%9C%E5%87%BA%E5%8F%91%E5%9B%BE%23) `271.9K 🔥` `NEW`
1. [被捂死女童生父一家拒养凶手女儿](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%8D%82%E6%AD%BB%E5%A5%B3%E7%AB%A5%E7%94%9F%E7%88%B6%E4%B8%80%E5%AE%B6%E6%8B%92%E5%85%BB%E5%87%B6%E6%89%8B%E5%A5%B3%E5%84%BF%23) `266.2K 🔥` `NEW`
1. [后会友期观察室 努力是天赋](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%A7%82%E5%AF%9F%E5%AE%A4%20%E5%8A%AA%E5%8A%9B%E6%98%AF%E5%A4%A9%E8%B5%8B%23) `265.7K 🔥` `NEW`
1. [对刘宇宁的身高有了具象化表达](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%88%98%E5%AE%87%E5%AE%81%E7%9A%84%E8%BA%AB%E9%AB%98%E6%9C%89%E4%BA%86%E5%85%B7%E8%B1%A1%E5%8C%96%E8%A1%A8%E8%BE%BE%23) `252.9K 🔥` `NEW`
1. [马天宇哭到张萌后悔](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%93%AD%E5%88%B0%E5%BC%A0%E8%90%8C%E5%90%8E%E6%82%94%23) `236.3K 🔥` `NEW`
1. [A股成交1.31万亿](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%88%90%E4%BA%A41.31%E4%B8%87%E4%BA%BF%23) `229.4K 🔥` `NEW`
1. [伊能静一眼看出许飞委屈和痛苦](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E4%B8%80%E7%9C%BC%E7%9C%8B%E5%87%BA%E8%AE%B8%E9%A3%9E%E5%A7%94%E5%B1%88%E5%92%8C%E7%97%9B%E8%8B%A6%23) `226.4K 🔥` `NEW`
1. [上海大爷假结婚帮人入学10年难离婚](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%A7%E7%88%B7%E5%81%87%E7%BB%93%E5%A9%9A%E5%B8%AE%E4%BA%BA%E5%85%A5%E5%AD%A610%E5%B9%B4%E9%9A%BE%E7%A6%BB%E5%A9%9A%23) `222.6K 🔥` `NEW`
1. [白敬亭开美颜后秒变张踩玲](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E5%BC%80%E7%BE%8E%E9%A2%9C%E5%90%8E%E7%A7%92%E5%8F%98%E5%BC%A0%E8%B8%A9%E7%8E%B2%23) `212.6K 🔥` `NEW`
1. [APEC经济体领导人戴特色围巾合影](https://s.weibo.com/weibo?q=%23APEC%E7%BB%8F%E6%B5%8E%E4%BD%93%E9%A2%86%E5%AF%BC%E4%BA%BA%E6%88%B4%E7%89%B9%E8%89%B2%E5%9B%B4%E5%B7%BE%E5%90%88%E5%BD%B1%23) `201.9K 🔥` `NEW`
1. [华为超薄表](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%B6%85%E8%96%84%E8%A1%A8%23) `200.1K 🔥` `NEW`
1. [王一博 演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E6%BC%94%E5%94%B1%E4%BC%9A%23) `199.1K 🔥` `NEW`
1. [中美元首步入会场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E6%AD%A5%E5%85%A5%E4%BC%9A%E5%9C%BA%23) `187.1K 🔥` `NEW`
1. [姚安娜摆摊卖瓷器被游客砍价](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%AE%89%E5%A8%9C%E6%91%86%E6%91%8A%E5%8D%96%E7%93%B7%E5%99%A8%E8%A2%AB%E6%B8%B8%E5%AE%A2%E7%A0%8D%E4%BB%B7%23) `187.1K 🔥` `NEW`
1. [前夫曝韦雪生孩子花费百万](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A4%AB%E6%9B%9D%E9%9F%A6%E9%9B%AA%E7%94%9F%E5%AD%A9%E5%AD%90%E8%8A%B1%E8%B4%B9%E7%99%BE%E4%B8%87%23) `173.0K 🔥` `NEW`
1. [GTA6的彩蛋](https://s.weibo.com/weibo?q=%23GTA6%E7%9A%84%E5%BD%A9%E8%9B%8B%23) `168.8K 🔥` `NEW`
1. [金店老板说金价已经到底了](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%BA%97%E8%80%81%E6%9D%BF%E8%AF%B4%E9%87%91%E4%BB%B7%E5%B7%B2%E7%BB%8F%E5%88%B0%E5%BA%95%E4%BA%86%23) `160.7K 🔥` `NEW`
1. [虞书欣还是没学会用登山杖](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%BF%98%E6%98%AF%E6%B2%A1%E5%AD%A6%E4%BC%9A%E7%94%A8%E7%99%BB%E5%B1%B1%E6%9D%96%23) `149.0K 🔥` `NEW`
1. [百岁山2026年APEC会议战略合作伙伴](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%B2%81%E5%B1%B12026%E5%B9%B4APEC%E4%BC%9A%E8%AE%AE%E6%88%98%E7%95%A5%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4%23) `619.7K 🔥` `+478%`
1. [特朗普在车内未拉窗帘欣赏深圳夜景](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9C%A8%E8%BD%A6%E5%86%85%E6%9C%AA%E6%8B%89%E7%AA%97%E5%B8%98%E6%AC%A3%E8%B5%8F%E6%B7%B1%E5%9C%B3%E5%A4%9C%E6%99%AF%23) `255.6K 🔥` `-76%`

Updated at 2026-11-19 15:52:11

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
