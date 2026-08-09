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

1. [王传君 披荆斩棘 (Wang Chuanjun overcoming obstacles)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%20%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%23) `576.6K 🔥` `NEW`
1. [田曦薇没刘海差点认不出来](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%B2%A1%E5%88%98%E6%B5%B7%E5%B7%AE%E7%82%B9%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `408.9K 🔥` `NEW`
1. [曹骏圈内人缘](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%9C%88%E5%86%85%E4%BA%BA%E7%BC%98%23) `404.6K 🔥` `NEW`
1. [左航晒耳洞](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E6%99%92%E8%80%B3%E6%B4%9E%23) `403.8K 🔥` `NEW`
1. [上海外卖停送](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%96%E5%8D%96%E5%81%9C%E9%80%81%23) `399.1K 🔥` `NEW`
1. [Lisa十周年行程争议](https://s.weibo.com/weibo?q=%23Lisa%E5%8D%81%E5%91%A8%E5%B9%B4%E8%A1%8C%E7%A8%8B%E4%BA%89%E8%AE%AE%23) `392.5K 🔥` `NEW`
1. [唐九洲看了披哥阵容天塌了](https://s.weibo.com/weibo?q=%23%E5%94%90%E4%B9%9D%E6%B4%B2%E7%9C%8B%E4%BA%86%E6%8A%AB%E5%93%A5%E9%98%B5%E5%AE%B9%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `298.6K 🔥` `NEW`
1. [无穷小亮 曹操摔碗](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%A9%B7%E5%B0%8F%E4%BA%AE%20%E6%9B%B9%E6%93%8D%E6%91%94%E7%A2%97%23) `287.0K 🔥` `NEW`
1. [九门吴老狗变干尸](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%90%B4%E8%80%81%E7%8B%97%E5%8F%98%E5%B9%B2%E5%B0%B8%23) `202.2K 🔥` `NEW`
1. [花开锦绣开播反馈](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E5%BC%80%E6%92%AD%E5%8F%8D%E9%A6%88%23) `202.2K 🔥` `NEW`
1. [关晓彤喊话披荆斩棘冲冲冲 (Guan Xiaotong’s slogan is to overcome all obstacles and rush forward)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%96%8A%E8%AF%9D%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%86%B2%E5%86%B2%E5%86%B2%23) `185.3K 🔥` `NEW`
1. [泽连斯基喊话韩国不担心吗](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E5%96%8A%E8%AF%9D%E9%9F%A9%E5%9B%BD%E4%B8%8D%E6%8B%85%E5%BF%83%E5%90%97%23) `168.0K 🔥` `NEW`
1. [儿子去世老人要查孙子血缘儿媳拒绝](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%8E%BB%E4%B8%96%E8%80%81%E4%BA%BA%E8%A6%81%E6%9F%A5%E5%AD%99%E5%AD%90%E8%A1%80%E7%BC%98%E5%84%BF%E5%AA%B3%E6%8B%92%E7%BB%9D%23) `407.0K 🔥` `+52%`
1. [泰国嫌犯供述杀害中国富商之子过程](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%AB%8C%E7%8A%AF%E4%BE%9B%E8%BF%B0%E6%9D%80%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%AF%8C%E5%95%86%E4%B9%8B%E5%AD%90%E8%BF%87%E7%A8%8B%23) `402.5K 🔥` `+129%`
1. [微信状态 新型日记本](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%8A%B6%E6%80%81%20%E6%96%B0%E5%9E%8B%E6%97%A5%E8%AE%B0%E6%9C%AC%23) `393.8K 🔥` `+109%`
1. [女子住ICU嫂子花70万救她1命](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8FICU%E5%AB%82%E5%AD%90%E8%8A%B170%E4%B8%87%E6%95%91%E5%A5%B91%E5%91%BD%23) `289.3K 🔥` `+34%`
1. [白海豚最大可能登陆地点](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%9C%80%E5%A4%A7%E5%8F%AF%E8%83%BD%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%23) `914.0K 🔥`
1. [邵兵上披哥认人发了狠忘了情](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%85%B5%E4%B8%8A%E6%8A%AB%E5%93%A5%E8%AE%A4%E4%BA%BA%E5%8F%91%E4%BA%86%E7%8B%A0%E5%BF%98%E4%BA%86%E6%83%85%23) `612.4K 🔥`
1. [伯爵熠眼心动 (The earl's eyes are moved)](https://s.weibo.com/weibo?q=%23%E4%BC%AF%E7%88%B5%E7%86%A0%E7%9C%BC%E5%BF%83%E5%8A%A8%23) `574.9K 🔥`
1. [王楚钦入选中国品牌青年榜 (Wang Chuqin was selected into the China Brand Youth List)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%85%A5%E9%80%89%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%E9%9D%92%E5%B9%B4%E6%A6%9C%23) `573.9K 🔥`
1. [上海极端强降雨](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9E%81%E7%AB%AF%E5%BC%BA%E9%99%8D%E9%9B%A8%23) `410.2K 🔥`
1. [上半年国内手机销量TOP30出炉 (Top 30 domestic mobile phone sales in the first half of the year released)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%9B%BD%E5%86%85%E6%89%8B%E6%9C%BA%E9%94%80%E9%87%8FTOP30%E5%87%BA%E7%82%89%23) `409.1K 🔥`
1. [古二曝繁花剧组有人吸毒](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E4%BA%8C%E6%9B%9D%E7%B9%81%E8%8A%B1%E5%89%A7%E7%BB%84%E6%9C%89%E4%BA%BA%E5%90%B8%E6%AF%92%23) `407.4K 🔥`
1. [韩雨彤 鼻子 (Han Yutong nose)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E9%9B%A8%E5%BD%A4%20%E9%BC%BB%E5%AD%90%23) `405.8K 🔥`
1. [父亲节俭供养留学女儿反遭辱骂](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E8%8A%82%E4%BF%AD%E4%BE%9B%E5%85%BB%E7%95%99%E5%AD%A6%E5%A5%B3%E5%84%BF%E5%8F%8D%E9%81%AD%E8%BE%B1%E9%AA%82%23) `405.4K 🔥`
1. [孕妇生病 硬抗](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E7%94%9F%E7%97%85%20%E7%A1%AC%E6%8A%97%23) `401.8K 🔥`
1. [费大厨小炒肉比赛 没人试吃](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E5%B0%8F%E7%82%92%E8%82%89%E6%AF%94%E8%B5%9B%20%E6%B2%A1%E4%BA%BA%E8%AF%95%E5%90%83%23) `401.3K 🔥`
1. [iPhone18Pro 涨价](https://s.weibo.com/weibo?q=%23iPhone18Pro%20%E6%B6%A8%E4%BB%B7%23) `400.4K 🔥`
1. [荷兰弟婚礼 瞒着全世界办了三天](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E5%A9%9A%E7%A4%BC%20%E7%9E%92%E7%9D%80%E5%85%A8%E4%B8%96%E7%95%8C%E5%8A%9E%E4%BA%86%E4%B8%89%E5%A4%A9%23) `398.7K 🔥`
1. [全上海都在偶遇赵丽颖](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%8A%E6%B5%B7%E9%83%BD%E5%9C%A8%E5%81%B6%E9%81%87%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `398.1K 🔥`
1. [长崎将把南京大屠杀改为南京事件](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%B4%8E%E5%B0%86%E6%8A%8A%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%E6%94%B9%E4%B8%BA%E5%8D%97%E4%BA%AC%E4%BA%8B%E4%BB%B6%23) `306.4K 🔥`
1. [王艺迪2比4张本美和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AA2%E6%AF%944%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `293.5K 🔥`
1. [刘亦菲下沉市场路人缘 (Liu Yifei sinks into the market and is popular among passers-by)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E8%B7%AF%E4%BA%BA%E7%BC%98%23) `293.3K 🔥`
1. [杨幂 老年人作息](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E8%80%81%E5%B9%B4%E4%BA%BA%E4%BD%9C%E6%81%AF%23) `292.7K 🔥`
1. [U17国足阿森纳并列冠军 (U17 national football team Arsenal tied for championship)](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B3%E9%98%BF%E6%A3%AE%E7%BA%B3%E5%B9%B6%E5%88%97%E5%86%A0%E5%86%9B%23) `239.3K 🔥`
1. [刘宇宁第一次走秀就走到了巴黎](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%B5%B0%E7%A7%80%E5%B0%B1%E8%B5%B0%E5%88%B0%E4%BA%86%E5%B7%B4%E9%BB%8E%23) `203.4K 🔥`
1. [保护脊柱腰椎 幻想自己有一条尾巴](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%8A%A4%E8%84%8A%E6%9F%B1%E8%85%B0%E6%A4%8E%20%E5%B9%BB%E6%83%B3%E8%87%AA%E5%B7%B1%E6%9C%89%E4%B8%80%E6%9D%A1%E5%B0%BE%E5%B7%B4%23) `202.2K 🔥`
1. [苹果官网删除千问使用手册](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%AE%98%E7%BD%91%E5%88%A0%E9%99%A4%E5%8D%83%E9%97%AE%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C%23) `168.3K 🔥`
1. [车企回归实体按键](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BC%81%E5%9B%9E%E5%BD%92%E5%AE%9E%E4%BD%93%E6%8C%89%E9%94%AE%23) `167.8K 🔥`
1. [披荆斩棘阵容官宣 (Official announcement of the lineup to overcome all obstacles)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `1.7M 🔥` `-43%`
1. [我国日均词元调用量超千倍增长](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%97%A5%E5%9D%87%E8%AF%8D%E5%85%83%E8%B0%83%E7%94%A8%E9%87%8F%E8%B6%85%E5%8D%83%E5%80%8D%E5%A2%9E%E9%95%BF%23) `754.0K 🔥` `-28%`
1. [酥就是油多 脆就是糖多](https://s.weibo.com/weibo?q=%23%E9%85%A5%E5%B0%B1%E6%98%AF%E6%B2%B9%E5%A4%9A%20%E8%84%86%E5%B0%B1%E6%98%AF%E7%B3%96%E5%A4%9A%23) `750.7K 🔥` `-28%`
1. [J人是这样备注的](https://s.weibo.com/weibo?q=%23J%E4%BA%BA%E6%98%AF%E8%BF%99%E6%A0%B7%E5%A4%87%E6%B3%A8%E7%9A%84%23) `410.6K 🔥` `-34%`
1. [薛之谦杭州站退换票方案](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%9D%AD%E5%B7%9E%E7%AB%99%E9%80%80%E6%8D%A2%E7%A5%A8%E6%96%B9%E6%A1%88%23) `322.8K 🔥` `-41%`
1. [天才女友总制片人怎么了](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%E6%80%BB%E5%88%B6%E7%89%87%E4%BA%BA%E6%80%8E%E4%B9%88%E4%BA%86%23) `240.6K 🔥` `-34%`
1. [花开锦绣开播 (The flowers are blooming and the embroidery is blooming)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E5%BC%80%E6%92%AD%23) `238.7K 🔥` `-30%`
1. [金智秀也开始闯美了](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E4%B9%9F%E5%BC%80%E5%A7%8B%E9%97%AF%E7%BE%8E%E4%BA%86%23) `224.2K 🔥` `-21%`
1. [陈幸同4比1蒯曼 (Chen Xingtong 4 to 1 Kuaiman)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B9%B8%E5%90%8C4%E6%AF%941%E8%92%AF%E6%9B%BC%23) `223.5K 🔥` `-21%`
1. [王家卫古二聊天记录](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%B6%E5%8D%AB%E5%8F%A4%E4%BA%8C%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `222.9K 🔥` `-38%`
1. [上海台风 (Shanghai Typhoon)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%8F%B0%E9%A3%8E%23) `172.6K 🔥` `-39%`
1. [白海豚台风红色预警](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%8F%B0%E9%A3%8E%E7%BA%A2%E8%89%B2%E9%A2%84%E8%AD%A6%23) `167.7K 🔥` `-28%`

Updated at 2026-08-09 14:02:41

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
