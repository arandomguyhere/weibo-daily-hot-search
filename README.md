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

1. [公积金改革大潮真的来了 (The tide of provident fund reform is really coming)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%94%B9%E9%9D%A9%E5%A4%A7%E6%BD%AE%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `1.2M 🔥` `NEW`
1. [蔡猛说王曼昱后续或将暂停比赛](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%8C%9B%E8%AF%B4%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%90%8E%E7%BB%AD%E6%88%96%E5%B0%86%E6%9A%82%E5%81%9C%E6%AF%94%E8%B5%9B%23) `146.9K 🔥` `NEW`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `95.4K 🔥` `NEW`
1. [杜兰特回应阿德巴约83分](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B9%E5%9B%9E%E5%BA%94%E9%98%BF%E5%BE%B7%E5%B7%B4%E7%BA%A683%E5%88%86%23) `87.9K 🔥` `NEW`
1. [伊朗警告将报复美以银行目标](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AD%A6%E5%91%8A%E5%B0%86%E6%8A%A5%E5%A4%8D%E7%BE%8E%E4%BB%A5%E9%93%B6%E8%A1%8C%E7%9B%AE%E6%A0%87%23) `87.7K 🔥` `NEW`
1. [长辈做饭有多惊人](https://s.weibo.com/weibo?q=%23%E9%95%BF%E8%BE%88%E5%81%9A%E9%A5%AD%E6%9C%89%E5%A4%9A%E6%83%8A%E4%BA%BA%23) `80.7K 🔥` `NEW`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `78.1K 🔥` `NEW`
1. [马化腾官宣全系龙虾矩阵](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%8C%96%E8%85%BE%E5%AE%98%E5%AE%A3%E5%85%A8%E7%B3%BB%E9%BE%99%E8%99%BE%E7%9F%A9%E9%98%B5%23) `77.5K 🔥` `NEW`
1. [金价杀疯了山东直接去地下2700米挖](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9D%80%E7%96%AF%E4%BA%86%E5%B1%B1%E4%B8%9C%E7%9B%B4%E6%8E%A5%E5%8E%BB%E5%9C%B0%E4%B8%8B2700%E7%B1%B3%E6%8C%96%23) `75.7K 🔥` `NEW`
1. [张凌赫逐玉追剧团逆应援](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%90%E7%8E%89%E8%BF%BD%E5%89%A7%E5%9B%A2%E9%80%86%E5%BA%94%E6%8F%B4%23) `75.6K 🔥` `NEW`
1. [英语老师干脆讲点自己喜欢的 (English teacher, just tell me something you like)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%AF%AD%E8%80%81%E5%B8%88%E5%B9%B2%E8%84%86%E8%AE%B2%E7%82%B9%E8%87%AA%E5%B7%B1%E5%96%9C%E6%AC%A2%E7%9A%84%23) `74.9K 🔥` `NEW`
1. [QClaw](https://s.weibo.com/weibo?q=%23QClaw%23) `74.7K 🔥` `NEW`
1. [建议允许60岁以上农民工继续务工](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%85%81%E8%AE%B860%E5%B2%81%E4%BB%A5%E4%B8%8A%E5%86%9C%E6%B0%91%E5%B7%A5%E7%BB%A7%E7%BB%AD%E5%8A%A1%E5%B7%A5%23) `832.3K 🔥` `+342%`
1. [天选喝奶茶体质](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E9%80%89%E5%96%9D%E5%A5%B6%E8%8C%B6%E4%BD%93%E8%B4%A8%23) `131.4K 🔥` `+29%`
1. [政协会议圆满完成各项议程](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%8D%8F%E4%BC%9A%E8%AE%AE%E5%9C%86%E6%BB%A1%E5%AE%8C%E6%88%90%E5%90%84%E9%A1%B9%E8%AE%AE%E7%A8%8B%23) `686.9K 🔥`
1. [MiuMiu](https://s.weibo.com/weibo?q=%23MiuMiu%23) `144.3K 🔥`
1. [伊朗下起毒雨](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%8B%E8%B5%B7%E6%AF%92%E9%9B%A8%23) `135.3K 🔥`
1. [逐玉 赋魅](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E8%B5%8B%E9%AD%85%23) `133.8K 🔥`
1. [5岁男童总腿疼以为长个子确诊白血病 (5-year-old boy suffers from constant leg pain and thinks he has grown taller and is diagnosed with leukemia)](https://s.weibo.com/weibo?q=%235%E5%B2%81%E7%94%B7%E7%AB%A5%E6%80%BB%E8%85%BF%E7%96%BC%E4%BB%A5%E4%B8%BA%E9%95%BF%E4%B8%AA%E5%AD%90%E7%A1%AE%E8%AF%8A%E7%99%BD%E8%A1%80%E7%97%85%23) `95.4K 🔥`
1. [妈妈听儿子话囤黄金3年赚40万](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%90%AC%E5%84%BF%E5%AD%90%E8%AF%9D%E5%9B%A4%E9%BB%84%E9%87%913%E5%B9%B4%E8%B5%9A40%E4%B8%87%23) `88.1K 🔥`
1. [原来何老师从小就是何老师了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BD%95%E8%80%81%E5%B8%88%E4%BB%8E%E5%B0%8F%E5%B0%B1%E6%98%AF%E4%BD%95%E8%80%81%E5%B8%88%E4%BA%86%23) `87.9K 🔥`
1. [周也张婧仪宋威龙张凌赫 全员修罗场 (Zhou Ye, Zhang Jingyi, Song Weilong, Zhang Linghe, all members of Shura Field)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E5%85%A8%E5%91%98%E4%BF%AE%E7%BD%97%E5%9C%BA%23) `81.6K 🔥`
1. [6部萨德发射车运出监控画面曝光](https://s.weibo.com/weibo?q=%236%E9%83%A8%E8%90%A8%E5%BE%B7%E5%8F%91%E5%B0%84%E8%BD%A6%E8%BF%90%E5%87%BA%E7%9B%91%E6%8E%A7%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `75.4K 🔥`
1. [刘亦菲冷到攥拳头仍大方营业](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%86%B7%E5%88%B0%E6%94%A5%E6%8B%B3%E5%A4%B4%E4%BB%8D%E5%A4%A7%E6%96%B9%E8%90%A5%E4%B8%9A%23) `75.2K 🔥`
1. [JDG对战KSG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98KSG%23) `75.1K 🔥`
1. [谢小侯爷有一双琥珀色的美丽眼睛](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%B0%8F%E4%BE%AF%E7%88%B7%E6%9C%89%E4%B8%80%E5%8F%8C%E7%90%A5%E7%8F%80%E8%89%B2%E7%9A%84%E7%BE%8E%E4%B8%BD%E7%9C%BC%E7%9D%9B%23) `74.9K 🔥`
1. [薛之谦广州场二开](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%B9%BF%E5%B7%9E%E5%9C%BA%E4%BA%8C%E5%BC%80%23) `74.6K 🔥`
1. [国防部回应日本部署远程导弹 (Ministry of National Defense responds to Japan's deployment of long-range missiles)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E9%83%A8%E7%BD%B2%E8%BF%9C%E7%A8%8B%E5%AF%BC%E5%BC%B9%23) `248.6K 🔥` `-77%`
1. [人大代表随身带针走到哪扎到哪 (Deputies to the National People’s Congress carry needles with them wherever they go.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E9%9A%8F%E8%BA%AB%E5%B8%A6%E9%92%88%E8%B5%B0%E5%88%B0%E5%93%AA%E6%89%8E%E5%88%B0%E5%93%AA%23) `232.2K 🔥` `-70%`
1. [伊朗总统之子称最高领袖平安](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E4%B9%8B%E5%AD%90%E7%A7%B0%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%B9%B3%E5%AE%89%23) `215.3K 🔥` `-45%`
1. [华师大回应师范本科不再输出教师](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%B8%88%E5%A4%A7%E5%9B%9E%E5%BA%94%E5%B8%88%E8%8C%83%E6%9C%AC%E7%A7%91%E4%B8%8D%E5%86%8D%E8%BE%93%E5%87%BA%E6%95%99%E5%B8%88%23) `151.5K 🔥` `-28%`
1. [建议允许未休年假两年内结转使用 (It is recommended that untaken annual leave be allowed to be carried forward within two years.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%85%81%E8%AE%B8%E6%9C%AA%E4%BC%91%E5%B9%B4%E5%81%87%E4%B8%A4%E5%B9%B4%E5%86%85%E7%BB%93%E8%BD%AC%E4%BD%BF%E7%94%A8%23) `150.6K 🔥` `-29%`
1. [十五五蓝图中的职业新图景 (New career prospects in the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%93%9D%E5%9B%BE%E4%B8%AD%E7%9A%84%E8%81%8C%E4%B8%9A%E6%96%B0%E5%9B%BE%E6%99%AF%23) `148.5K 🔥` `-28%`
1. [华莱士正式宣布退市 (Wallace officially announced its delisting)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%8E%B1%E5%A3%AB%E6%AD%A3%E5%BC%8F%E5%AE%A3%E5%B8%83%E9%80%80%E5%B8%82%23) `141.8K 🔥` `-28%`
1. [双人餐是需要两份主食饮料的](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BA%BA%E9%A4%90%E6%98%AF%E9%9C%80%E8%A6%81%E4%B8%A4%E4%BB%BD%E4%B8%BB%E9%A3%9F%E9%A5%AE%E6%96%99%E7%9A%84%23) `141.1K 🔥` `-27%`
1. [七部云合破40%的剧](https://s.weibo.com/weibo?q=%23%E4%B8%83%E9%83%A8%E4%BA%91%E5%90%88%E7%A0%B440%25%E7%9A%84%E5%89%A7%23) `137.8K 🔥` `-25%`
1. [逐玉云合破40了 (Zhuyuyun broke 40 together)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%BA%91%E5%90%88%E7%A0%B440%E4%BA%86%23) `136.4K 🔥` `-21%`
1. [不二之臣](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BA%8C%E4%B9%8B%E8%87%A3%23) `102.5K 🔥` `-22%`
1. [80元Lululemon发圈卖断货](https://s.weibo.com/weibo?q=%2380%E5%85%83Lululemon%E5%8F%91%E5%9C%88%E5%8D%96%E6%96%AD%E8%B4%A7%23) `95.4K 🔥` `-47%`
1. [我们的少年时代2开通官微 (Our Boyhood 2 launches official WeChat account)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E5%BC%80%E9%80%9A%E5%AE%98%E5%BE%AE%23) `95.4K 🔥` `-79%`
1. [中餐厅10网传阵容](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%8510%E7%BD%91%E4%BC%A0%E9%98%B5%E5%AE%B9%23) `95.4K 🔥` `-76%`
1. [取微信名要慎重 (Be careful when choosing a WeChat name)](https://s.weibo.com/weibo?q=%23%E5%8F%96%E5%BE%AE%E4%BF%A1%E5%90%8D%E8%A6%81%E6%85%8E%E9%87%8D%23) `95.4K 🔥` `-36%`
1. [梁朝伟走势](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E8%B5%B0%E5%8A%BF%23) `95.4K 🔥` `-35%`
1. [甜茶关晓彤合照](https://s.weibo.com/weibo?q=%23%E7%94%9C%E8%8C%B6%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%88%E7%85%A7%23) `95.4K 🔥` `-36%`
1. [AG 首发](https://s.weibo.com/weibo?q=%23AG%20%E9%A6%96%E5%8F%91%23) `93.5K 🔥` `-30%`
1. [白玉兰预测 (Magnolia Forecast)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%23) `88.4K 🔥` `-38%`
1. [豆包万能P图口令](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E4%B8%87%E8%83%BDP%E5%9B%BE%E5%8F%A3%E4%BB%A4%23) `87.7K 🔥` `-49%`
1. [联合国16位专家呼吁日本道歉](https://s.weibo.com/weibo?q=%23%E8%81%94%E5%90%88%E5%9B%BD16%E4%BD%8D%E4%B8%93%E5%AE%B6%E5%91%BC%E5%90%81%E6%97%A5%E6%9C%AC%E9%81%93%E6%AD%89%23) `75.3K 🔥` `-42%`
1. [金店店员谈金不响银不跳 (The gold shop clerk talks about gold not ringing and silver not dancing)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%BA%97%E5%BA%97%E5%91%98%E8%B0%88%E9%87%91%E4%B8%8D%E5%93%8D%E9%93%B6%E4%B8%8D%E8%B7%B3%23) `75.0K 🔥` `-26%`

Updated at 2026-03-11 18:34:32

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
