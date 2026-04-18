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

1. [日本已彻底撕掉伪装 (Japan has completely shed its disguise)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%B7%B2%E5%BD%BB%E5%BA%95%E6%92%95%E6%8E%89%E4%BC%AA%E8%A3%85%23) `337.0K 🔥` `NEW`
1. [何润东不想让妻子受人工助孕的苦](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E4%B8%8D%E6%83%B3%E8%AE%A9%E5%A6%BB%E5%AD%90%E5%8F%97%E4%BA%BA%E5%B7%A5%E5%8A%A9%E5%AD%95%E7%9A%84%E8%8B%A6%23) `316.3K 🔥` `NEW`
1. [解放军护卫舰已随时准备开火](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E6%8A%A4%E5%8D%AB%E8%88%B0%E5%B7%B2%E9%9A%8F%E6%97%B6%E5%87%86%E5%A4%87%E5%BC%80%E7%81%AB%23) `298.2K 🔥` `NEW`
1. [刘德华年前已得知潘宏彬死讯](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BE%B7%E5%8D%8E%E5%B9%B4%E5%89%8D%E5%B7%B2%E5%BE%97%E7%9F%A5%E6%BD%98%E5%AE%8F%E5%BD%AC%E6%AD%BB%E8%AE%AF%23) `297.1K 🔥` `NEW`
1. [林允儿棒球开球](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%85%81%E5%84%BF%E6%A3%92%E7%90%83%E5%BC%80%E7%90%83%23) `295.2K 🔥` `NEW`
1. [黄河诗词被刘钧演活了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B2%B3%E8%AF%97%E8%AF%8D%E8%A2%AB%E5%88%98%E9%92%A7%E6%BC%94%E6%B4%BB%E4%BA%86%23) `293.1K 🔥` `NEW`
1. [霸王归来宿迁2比0领先南京](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E5%BD%92%E6%9D%A5%E5%AE%BF%E8%BF%812%E6%AF%940%E9%A2%86%E5%85%88%E5%8D%97%E4%BA%AC%23) `277.1K 🔥` `NEW`
1. [张雪机车为什么被罚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A2%AB%E7%BD%9A%23) `860.3K 🔥` `+60%`
1. [泰国泼水节疑有人向人嘴里射毒水](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82%E7%96%91%E6%9C%89%E4%BA%BA%E5%90%91%E4%BA%BA%E5%98%B4%E9%87%8C%E5%B0%84%E6%AF%92%E6%B0%B4%23) `467.1K 🔥` `+33%`
1. [亚马逊创始人与56岁妻子正积极备孕 (Amazon founder and 56-year-old wife are actively preparing for pregnancy)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E9%80%8A%E5%88%9B%E5%A7%8B%E4%BA%BA%E4%B8%8E56%E5%B2%81%E5%A6%BB%E5%AD%90%E6%AD%A3%E7%A7%AF%E6%9E%81%E5%A4%87%E5%AD%95%23) `310.8K 🔥` `+84%`
1. [日本赌国运老毛病又犯了 (Japan’s old habit of betting on national fortunes has returned)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%B5%8C%E5%9B%BD%E8%BF%90%E8%80%81%E6%AF%9B%E7%97%85%E5%8F%88%E7%8A%AF%E4%BA%86%23) `291.2K 🔥` `+29%`
1. [王嘉尔在推特怼黑粉 (Wang Jiaer criticized anti-fans on Twitter)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%9C%A8%E6%8E%A8%E7%89%B9%E6%80%BC%E9%BB%91%E7%B2%89%23) `288.5K 🔥` `+34%`
1. [龚俊拍了刘宇宁唱天问](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E6%8B%8D%E4%BA%86%E5%88%98%E5%AE%87%E5%AE%81%E5%94%B1%E5%A4%A9%E9%97%AE%23) `286.6K 🔥` `+32%`
1. [六位数的狗坐在七位数的车里 (Six-figure dog in seven-figure car)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%BD%8D%E6%95%B0%E7%9A%84%E7%8B%97%E5%9D%90%E5%9C%A8%E4%B8%83%E4%BD%8D%E6%95%B0%E7%9A%84%E8%BD%A6%E9%87%8C%23) `284.7K 🔥` `+29%`
1. [张婉婷坐飞机惊恐发作差点被驱逐 (Zhang Wanting had a panic attack on a plane and was almost deported)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E5%9D%90%E9%A3%9E%E6%9C%BA%E6%83%8A%E6%81%90%E5%8F%91%E4%BD%9C%E5%B7%AE%E7%82%B9%E8%A2%AB%E9%A9%B1%E9%80%90%23) `284.2K 🔥` `+29%`
1. [苏超徐州队3比0泰州队 (Xuzhou team in the Jiangsu Super League 3-0 Taizhou team)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%BE%90%E5%B7%9E%E9%98%9F3%E6%AF%940%E6%B3%B0%E5%B7%9E%E9%98%9F%23) `282.8K 🔥` `+56%`
1. [宿迁vs南京 (Suqian vs Nanjing)](https://s.weibo.com/weibo?q=%23%E5%AE%BF%E8%BF%81vs%E5%8D%97%E4%BA%AC%23) `1.2M 🔥`
1. [生态文旅激活消费新活力 (Ecological cultural tourism activates new vitality in consumption)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%80%81%E6%96%87%E6%97%85%E6%BF%80%E6%B4%BB%E6%B6%88%E8%B4%B9%E6%96%B0%E6%B4%BB%E5%8A%9B%23) `705.8K 🔥`
1. [陈紫函不上浪姐的原因](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%B4%AB%E5%87%BD%E4%B8%8D%E4%B8%8A%E6%B5%AA%E5%A7%90%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `653.3K 🔥`
1. [姜贞羽淘汰](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E8%B4%9E%E7%BE%BD%E6%B7%98%E6%B1%B0%23) `485.2K 🔥`
1. [大众这波郭培合作审美在大气层 (Volkswagen’s Guo Pei collaboration aesthetic is in the atmosphere)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97%E8%BF%99%E6%B3%A2%E9%83%AD%E5%9F%B9%E5%90%88%E4%BD%9C%E5%AE%A1%E7%BE%8E%E5%9C%A8%E5%A4%A7%E6%B0%94%E5%B1%82%23) `484.9K 🔥`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `340.9K 🔥`
1. [柳智敏穿的长裙只要92元](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E7%A9%BF%E7%9A%84%E9%95%BF%E8%A3%99%E5%8F%AA%E8%A6%8192%E5%85%83%23) `340.2K 🔥`
1. [萧蔷翻温峥嵘白眼 (Xiao Qiang rolled her eyes at Wen Zhengrong)](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E7%BF%BB%E6%B8%A9%E5%B3%A5%E5%B5%98%E7%99%BD%E7%9C%BC%23) `337.8K 🔥`
1. [何润东霸王全妆](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E9%9C%B8%E7%8E%8B%E5%85%A8%E5%A6%86%23) `334.9K 🔥`
1. [张凌赫ins更新萌照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%ABins%E6%9B%B4%E6%96%B0%E8%90%8C%E7%85%A7%23) `333.4K 🔥`
1. [日媒集体噤声](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E9%9B%86%E4%BD%93%E5%99%A4%E5%A3%B0%23) `331.6K 🔥`
1. [56岁雷军连续直播15小时 (56-year-old Lei Jun broadcast live for 15 hours continuously)](https://s.weibo.com/weibo?q=%2356%E5%B2%81%E9%9B%B7%E5%86%9B%E8%BF%9E%E7%BB%AD%E7%9B%B4%E6%92%AD15%E5%B0%8F%E6%97%B6%23) `329.9K 🔥`
1. [雷军说无意做穿搭博主](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E6%97%A0%E6%84%8F%E5%81%9A%E7%A9%BF%E6%90%AD%E5%8D%9A%E4%B8%BB%23) `328.3K 🔥`
1. [雷军激动到破音了 (Lei Jun was so excited that his voice broke.)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%BF%80%E5%8A%A8%E5%88%B0%E7%A0%B4%E9%9F%B3%E4%BA%86%23) `326.3K 🔥`
1. [雷军在临沂一服务区被米粉送炒鸡](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9C%A8%E4%B8%B4%E6%B2%82%E4%B8%80%E6%9C%8D%E5%8A%A1%E5%8C%BA%E8%A2%AB%E7%B1%B3%E7%B2%89%E9%80%81%E7%82%92%E9%B8%A1%23) `324.5K 🔥`
1. [金智秀哥哥的妻子发ins](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%93%A5%E5%93%A5%E7%9A%84%E5%A6%BB%E5%AD%90%E5%8F%91ins%23) `324.3K 🔥`
1. [五一航班大面积取消 (Widespread cancellation of May Day flights)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E8%88%AA%E7%8F%AD%E5%A4%A7%E9%9D%A2%E7%A7%AF%E5%8F%96%E6%B6%88%23) `322.6K 🔥`
1. [朱孝天上节目被打 (Zhu Xiaotian was beaten on the show)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AD%9D%E5%A4%A9%E4%B8%8A%E8%8A%82%E7%9B%AE%E8%A2%AB%E6%89%93%23) `319.7K 🔥`
1. [澳门老炮质问B太](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E8%80%81%E7%82%AE%E8%B4%A8%E9%97%AEB%E5%A4%AA%23) `318.1K 🔥`
1. [梅婷女儿名字叫曾慕梅](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A9%B7%E5%A5%B3%E5%84%BF%E5%90%8D%E5%AD%97%E5%8F%AB%E6%9B%BE%E6%85%95%E6%A2%85%23) `317.9K 🔥`
1. [内耗人的终极解药 (The ultimate antidote for internal dissipation)](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%80%97%E4%BA%BA%E7%9A%84%E7%BB%88%E6%9E%81%E8%A7%A3%E8%8D%AF%23) `313.3K 🔥`
1. [48岁TVB视后田蕊妮再度患癌](https://s.weibo.com/weibo?q=%2348%E5%B2%81TVB%E8%A7%86%E5%90%8E%E7%94%B0%E8%95%8A%E5%A6%AE%E5%86%8D%E5%BA%A6%E6%82%A3%E7%99%8C%23) `312.4K 🔥`
1. [谢娜录了时代少年团直拍](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%BD%95%E4%BA%86%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%8B%8D%23) `308.8K 🔥`
1. [张小斐被虫子吓得弹起来了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E8%A2%AB%E8%99%AB%E5%AD%90%E5%90%93%E5%BE%97%E5%BC%B9%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `308.4K 🔥`
1. [张雪机车首回合第4](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E9%A6%96%E5%9B%9E%E5%90%88%E7%AC%AC4%23) `305.8K 🔥`
1. [孟美岐解约乐华的第一个活动](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E7%BE%8E%E5%B2%90%E8%A7%A3%E7%BA%A6%E4%B9%90%E5%8D%8E%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%B4%BB%E5%8A%A8%23) `304.4K 🔥`
1. [时代少年团 郭敬明审美 (Times Youth League Guo Jingming’s Aesthetics)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%83%AD%E6%95%AC%E6%98%8E%E5%AE%A1%E7%BE%8E%23) `300.8K 🔥`
1. [张杰演唱会偶遇马嘉祺丁程鑫贺峻霖](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E5%81%B6%E9%81%87%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%81%E7%A8%8B%E9%91%AB%E8%B4%BA%E5%B3%BB%E9%9C%96%23) `300.2K 🔥`
1. [樊振东波尔日内瓦旅行](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%B3%A2%E5%B0%94%E6%97%A5%E5%86%85%E7%93%A6%E6%97%85%E8%A1%8C%23) `289.5K 🔥`
1. [伊朗恢复对霍尔木兹海峡的控制 (Iran resumes control of Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%81%A2%E5%A4%8D%E5%AF%B9%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E7%9A%84%E6%8E%A7%E5%88%B6%23) `279.1K 🔥`
1. [中国城市宜居水平排行榜 (Ranking list of livability level of Chinese cities)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9F%8E%E5%B8%82%E5%AE%9C%E5%B1%85%E6%B0%B4%E5%B9%B3%E6%8E%92%E8%A1%8C%E6%A6%9C%23) `563.9K 🔥` `-36%`
1. [日本在马关条约签订日闯入台海](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%A8%E9%A9%AC%E5%85%B3%E6%9D%A1%E7%BA%A6%E7%AD%BE%E8%AE%A2%E6%97%A5%E9%97%AF%E5%85%A5%E5%8F%B0%E6%B5%B7%23) `370.9K 🔥` `-21%`
1. [解放军凌晨四点管控日舰过航台湾海峡 (The People's Liberation Army controls Japanese ships passing through the Taiwan Strait at 4 a.m.)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%87%8C%E6%99%A8%E5%9B%9B%E7%82%B9%E7%AE%A1%E6%8E%A7%E6%97%A5%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `341.8K 🔥` `-24%`
1. [张雪机车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `303.2K 🔥` `-27%`

Updated at 2026-04-18 23:53:37

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
