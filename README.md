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

1. [生态文旅激活消费新活力 (Ecological cultural tourism activates new vitality in consumption)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%80%81%E6%96%87%E6%97%85%E6%BF%80%E6%B4%BB%E6%B6%88%E8%B4%B9%E6%96%B0%E6%B4%BB%E5%8A%9B%23) `776.3K 🔥` `NEW`
1. [伊朗最高领袖说将给敌人新的惨败](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E8%AF%B4%E5%B0%86%E7%BB%99%E6%95%8C%E4%BA%BA%E6%96%B0%E7%9A%84%E6%83%A8%E8%B4%A5%23) `478.1K 🔥` `NEW`
1. [俄大巴事故乘客据称多为中国工人](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%A4%A7%E5%B7%B4%E4%BA%8B%E6%95%85%E4%B9%98%E5%AE%A2%E6%8D%AE%E7%A7%B0%E5%A4%9A%E4%B8%BA%E4%B8%AD%E5%9B%BD%E5%B7%A5%E4%BA%BA%23) `369.1K 🔥` `NEW`
1. [金智秀哥哥的妻子发ins](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%93%A5%E5%93%A5%E7%9A%84%E5%A6%BB%E5%AD%90%E5%8F%91ins%23) `366.3K 🔥` `NEW`
1. [张杰演唱会偶遇马嘉祺丁程鑫贺峻霖](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E5%81%B6%E9%81%87%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%81%E7%A8%8B%E9%91%AB%E8%B4%BA%E5%B3%BB%E9%9C%96%23) `359.1K 🔥` `NEW`
1. [樊振东波尔日内瓦旅行](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%B3%A2%E5%B0%94%E6%97%A5%E5%86%85%E7%93%A6%E6%97%85%E8%A1%8C%23) `357.6K 🔥` `NEW`
1. [鞠婧祎周边](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%91%A8%E8%BE%B9%23) `293.6K 🔥` `NEW`
1. [梅婷女儿名字叫曾慕梅](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A9%B7%E5%A5%B3%E5%84%BF%E5%90%8D%E5%AD%97%E5%8F%AB%E6%9B%BE%E6%85%95%E6%A2%85%23) `289.1K 🔥` `NEW`
1. [张雪直言别把张雪机车搞成邪教](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E7%9B%B4%E8%A8%80%E5%88%AB%E6%8A%8A%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%90%9E%E6%88%90%E9%82%AA%E6%95%99%23) `246.4K 🔥` `NEW`
1. [罗大美父亲称死刑执行也无胜利可言](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%A4%A7%E7%BE%8E%E7%88%B6%E4%BA%B2%E7%A7%B0%E6%AD%BB%E5%88%91%E6%89%A7%E8%A1%8C%E4%B9%9F%E6%97%A0%E8%83%9C%E5%88%A9%E5%8F%AF%E8%A8%80%23) `246.1K 🔥` `NEW`
1. [王嘉尔在推特怼黑粉 (Wang Jiaer criticized anti-fans on Twitter)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%9C%A8%E6%8E%A8%E7%89%B9%E6%80%BC%E9%BB%91%E7%B2%89%23) `237.0K 🔥` `NEW`
1. [男子应聘高薪司机变贷款11万购车](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BA%94%E8%81%98%E9%AB%98%E8%96%AA%E5%8F%B8%E6%9C%BA%E5%8F%98%E8%B4%B7%E6%AC%BE11%E4%B8%87%E8%B4%AD%E8%BD%A6%23) `212.4K 🔥` `NEW`
1. [霸王归来宿迁2比0领先南京](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E5%BD%92%E6%9D%A5%E5%AE%BF%E8%BF%812%E6%AF%940%E9%A2%86%E5%85%88%E5%8D%97%E4%BA%AC%23) `211.5K 🔥` `NEW`
1. [张雪机车为什么被罚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%E7%BD%9A%23) `187.0K 🔥` `NEW`
1. [宿迁vs南京 (Suqian vs Nanjing)](https://s.weibo.com/weibo?q=%23%E5%AE%BF%E8%BF%81vs%E5%8D%97%E4%BA%AC%23) `1.9M 🔥` `+63%`
1. [陈紫函不上浪姐的原因](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%B4%AB%E5%87%BD%E4%B8%8D%E4%B8%8A%E6%B5%AA%E5%A7%90%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `766.9K 🔥` `+63%`
1. [张凌赫ins更新萌照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%ABins%E6%9B%B4%E6%96%B0%E8%90%8C%E7%85%A7%23) `446.9K 🔥` `+91%`
1. [56岁雷军连续直播15小时 (56-year-old Lei Jun broadcast live for 15 hours continuously)](https://s.weibo.com/weibo?q=%2356%E5%B2%81%E9%9B%B7%E5%86%9B%E8%BF%9E%E7%BB%AD%E7%9B%B4%E6%92%AD15%E5%B0%8F%E6%97%B6%23) `376.5K 🔥` `+21%`
1. [六位数的狗坐在七位数的车里 (Six-figure dog in seven-figure car)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%BD%8D%E6%95%B0%E7%9A%84%E7%8B%97%E5%9D%90%E5%9C%A8%E4%B8%83%E4%BD%8D%E6%95%B0%E7%9A%84%E8%BD%A6%E9%87%8C%23) `317.1K 🔥` `+41%`
1. [张小斐被虫子吓得弹起来了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E8%A2%AB%E8%99%AB%E5%AD%90%E5%90%93%E5%BE%97%E5%BC%B9%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `295.7K 🔥` `+44%`
1. [48岁TVB视后田蕊妮再度患癌](https://s.weibo.com/weibo?q=%2348%E5%B2%81TVB%E8%A7%86%E5%90%8E%E7%94%B0%E8%95%8A%E5%A6%AE%E5%86%8D%E5%BA%A6%E6%82%A3%E7%99%8C%23) `245.9K 🔥` `+35%`
1. [日本远程导弹射程覆盖中国军港 (Japan's long-range missile range covers Chinese military ports)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%BF%9C%E7%A8%8B%E5%AF%BC%E5%BC%B9%E5%B0%84%E7%A8%8B%E8%A6%86%E7%9B%96%E4%B8%AD%E5%9B%BD%E5%86%9B%E6%B8%AF%23) `229.4K 🔥` `+31%`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `925.1K 🔥`
1. [看苏超上京东领霸王餐 (Watch Su Chao go to JD.com to receive Overlord meal)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E8%8B%8F%E8%B6%85%E4%B8%8A%E4%BA%AC%E4%B8%9C%E9%A2%86%E9%9C%B8%E7%8E%8B%E9%A4%90%23) `768.3K 🔥`
1. [中国城市宜居水平排行榜](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9F%8E%E5%B8%82%E5%AE%9C%E5%B1%85%E6%B0%B4%E5%B9%B3%E6%8E%92%E8%A1%8C%E6%A6%9C%23) `653.2K 🔥`
1. [姜贞羽淘汰](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E8%B4%9E%E7%BE%BD%E6%B7%98%E6%B1%B0%23) `651.9K 🔥`
1. [解放军凌晨四点管控日舰过航台湾海峡 (The People's Liberation Army controls Japanese ships passing through the Taiwan Strait at 4 a.m.)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%87%8C%E6%99%A8%E5%9B%9B%E7%82%B9%E7%AE%A1%E6%8E%A7%E6%97%A5%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `497.6K 🔥`
1. [何润东霸王全妆](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E9%9C%B8%E7%8E%8B%E5%85%A8%E5%A6%86%23) `474.7K 🔥`
1. [张雪机车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `466.0K 🔥`
1. [时代少年团 郭敬明审美](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%83%AD%E6%95%AC%E6%98%8E%E5%AE%A1%E7%BE%8E%23) `421.7K 🔥`
1. [日媒集体噤声](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E9%9B%86%E4%BD%93%E5%99%A4%E5%A3%B0%23) `379.7K 🔥`
1. [孟美岐解约乐华的第一个活动](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E7%BE%8E%E5%B2%90%E8%A7%A3%E7%BA%A6%E4%B9%90%E5%8D%8E%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%B4%BB%E5%8A%A8%23) `378.4K 🔥`
1. [雷军激动到破音了 (Lei Jun was so excited that his voice broke.)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%BF%80%E5%8A%A8%E5%88%B0%E7%A0%B4%E9%9F%B3%E4%BA%86%23) `371.5K 🔥`
1. [五一航班大面积取消 (Widespread cancellation of May Day flights)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E8%88%AA%E7%8F%AD%E5%A4%A7%E9%9D%A2%E7%A7%AF%E5%8F%96%E6%B6%88%23) `365.5K 🔥`
1. [朱孝天上节目被打](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AD%9D%E5%A4%A9%E4%B8%8A%E8%8A%82%E7%9B%AE%E8%A2%AB%E6%89%93%23) `361.2K 🔥`
1. [张婉婷坐飞机惊恐发作差点被驱逐 (Zhang Wanting had a panic attack on a plane and was almost deported)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E5%9D%90%E9%A3%9E%E6%9C%BA%E6%83%8A%E6%81%90%E5%8F%91%E4%BD%9C%E5%B7%AE%E7%82%B9%E8%A2%AB%E9%A9%B1%E9%80%90%23) `342.1K 🔥`
1. [内耗人的终极解药](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%80%97%E4%BA%BA%E7%9A%84%E7%BB%88%E6%9E%81%E8%A7%A3%E8%8D%AF%23) `325.7K 🔥`
1. [雷军在临沂一服务区被米粉送炒鸡](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9C%A8%E4%B8%B4%E6%B2%82%E4%B8%80%E6%9C%8D%E5%8A%A1%E5%8C%BA%E8%A2%AB%E7%B1%B3%E7%B2%89%E9%80%81%E7%82%92%E9%B8%A1%23) `318.2K 🔥`
1. [龚俊拍了刘宇宁唱天问](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E6%8B%8D%E4%BA%86%E5%88%98%E5%AE%87%E5%AE%81%E5%94%B1%E5%A4%A9%E9%97%AE%23) `310.4K 🔥`
1. [日本赌国运老毛病又犯了 (Japan’s old habit of betting on national fortunes has returned)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%B5%8C%E5%9B%BD%E8%BF%90%E8%80%81%E6%AF%9B%E7%97%85%E5%8F%88%E7%8A%AF%E4%BA%86%23) `293.7K 🔥`
1. [许凯 怪我 (Xu Kai Blame me)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%87%AF%20%E6%80%AA%E6%88%91%23) `248.2K 🔥`
1. [新数字技术是非遗传承的工具](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%95%B0%E5%AD%97%E6%8A%80%E6%9C%AF%E6%98%AF%E9%9D%9E%E9%81%97%E4%BC%A0%E6%89%BF%E7%9A%84%E5%B7%A5%E5%85%B7%23) `632.5K 🔥` `-21%`
1. [日本在马关条约签订日闯入台海](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%A8%E9%A9%AC%E5%85%B3%E6%9D%A1%E7%BA%A6%E7%AD%BE%E8%AE%A2%E6%97%A5%E9%97%AF%E5%85%A5%E5%8F%B0%E6%B5%B7%23) `624.9K 🔥` `-35%`
1. [张雪机车首回合第4](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E9%A6%96%E5%9B%9E%E5%90%88%E7%AC%AC4%23) `573.7K 🔥` `-29%`
1. [萧蔷翻温峥嵘白眼 (Xiao Qiang rolled her eyes at Wen Zhengrong)](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E7%BF%BB%E6%B8%A9%E5%B3%A5%E5%B5%98%E7%99%BD%E7%9C%BC%23) `471.7K 🔥` `-45%`
1. [澳门老炮质问B太](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E8%80%81%E7%82%AE%E8%B4%A8%E9%97%AEB%E5%A4%AA%23) `336.9K 🔥` `-24%`
1. [何润东现身宿迁奥体 (Peter Ho appeared at Suqian Olympic Stadium)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E7%8E%B0%E8%BA%AB%E5%AE%BF%E8%BF%81%E5%A5%A5%E4%BD%93%23) `321.3K 🔥` `-27%`
1. [深圳一小学老师批改作业时崩溃大哭](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%E6%89%B9%E6%94%B9%E4%BD%9C%E4%B8%9A%E6%97%B6%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `249.7K 🔥` `-24%`
1. [女子机场两次拒绝帮陌生人带行李 (Woman refused to help strangers with luggage at airport twice)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9C%BA%E5%9C%BA%E4%B8%A4%E6%AC%A1%E6%8B%92%E7%BB%9D%E5%B8%AE%E9%99%8C%E7%94%9F%E4%BA%BA%E5%B8%A6%E8%A1%8C%E6%9D%8E%23) `240.7K 🔥` `-35%`
1. [李小冉 你吃过麻辣拌吗 (Li Xiaoran, have you ever eaten spicy mix?)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E4%BD%A0%E5%90%83%E8%BF%87%E9%BA%BB%E8%BE%A3%E6%8B%8C%E5%90%97%23) `230.5K 🔥` `-28%`
1. [伊朗恢复对霍尔木兹海峡的控制](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%81%A2%E5%A4%8D%E5%AF%B9%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E7%9A%84%E6%8E%A7%E5%88%B6%23) `210.8K 🔥` `-49%`

Updated at 2026-04-18 22:27:42

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
