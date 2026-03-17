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

1. [山姆多次被零售企业控诉 (Sam has been sued many times by retail companies)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%A4%9A%E6%AC%A1%E8%A2%AB%E9%9B%B6%E5%94%AE%E4%BC%81%E4%B8%9A%E6%8E%A7%E8%AF%89%23) `1.1M 🔥` `NEW`
1. [最平整折叠屏OPPOFindN6全球首发](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%B9%B3%E6%95%B4%E6%8A%98%E5%8F%A0%E5%B1%8FOPPOFindN6%E5%85%A8%E7%90%83%E9%A6%96%E5%8F%91%23) `428.0K 🔥` `NEW`
1. [被美国架在火上的日本](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%BE%8E%E5%9B%BD%E6%9E%B6%E5%9C%A8%E7%81%AB%E4%B8%8A%E7%9A%84%E6%97%A5%E6%9C%AC%23) `266.1K 🔥` `NEW`
1. [汕头自建房致12死火灾系使用蚊香引发](https://s.weibo.com/weibo?q=%23%E6%B1%95%E5%A4%B4%E8%87%AA%E5%BB%BA%E6%88%BF%E8%87%B412%E6%AD%BB%E7%81%AB%E7%81%BE%E7%B3%BB%E4%BD%BF%E7%94%A8%E8%9A%8A%E9%A6%99%E5%BC%95%E5%8F%91%23) `232.5K 🔥` `NEW`
1. [鸿蒙系统6到底是难用够用还是好用](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E7%B3%BB%E7%BB%9F6%E5%88%B0%E5%BA%95%E6%98%AF%E9%9A%BE%E7%94%A8%E5%A4%9F%E7%94%A8%E8%BF%98%E6%98%AF%E5%A5%BD%E7%94%A8%23) `228.8K 🔥` `NEW`
1. [NX8告别老三样拥抱AI新五件](https://s.weibo.com/weibo?q=%23NX8%E5%91%8A%E5%88%AB%E8%80%81%E4%B8%89%E6%A0%B7%E6%8B%A5%E6%8A%B1AI%E6%96%B0%E4%BA%94%E4%BB%B6%23) `220.9K 🔥` `NEW`
1. [湖人战胜火箭](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E6%88%98%E8%83%9C%E7%81%AB%E7%AE%AD%23) `216.3K 🔥` `NEW`
1. [男子泳池浅水区溺亡警方介入调查](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%B3%B3%E6%B1%A0%E6%B5%85%E6%B0%B4%E5%8C%BA%E6%BA%BA%E4%BA%A1%E8%AD%A6%E6%96%B9%E4%BB%8B%E5%85%A5%E8%B0%83%E6%9F%A5%23) `184.5K 🔥` `NEW`
1. [易烊千玺新惊喜预热](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%96%B0%E6%83%8A%E5%96%9C%E9%A2%84%E7%83%AD%23) `183.6K 🔥` `NEW`
1. [周迅金色长发](https://s.weibo.com/weibo?q=%23%E5%91%A8%E8%BF%85%E9%87%91%E8%89%B2%E9%95%BF%E5%8F%91%23) `147.0K 🔥` `NEW`
1. [小巷人家第二部 (Alley People Part 2)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%E7%AC%AC%E4%BA%8C%E9%83%A8%23) `94.8K 🔥` `NEW`
1. [王一博瑞士回国路透](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%91%9E%E5%A3%AB%E5%9B%9E%E5%9B%BD%E8%B7%AF%E9%80%8F%23) `94.5K 🔥` `NEW`
1. [易烊千玺网站歌曲投票](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%BD%91%E7%AB%99%E6%AD%8C%E6%9B%B2%E6%8A%95%E7%A5%A8%23) `90.9K 🔥` `NEW`
1. [81岁老人为外籍外孙女寻意定监护人](https://s.weibo.com/weibo?q=%2381%E5%B2%81%E8%80%81%E4%BA%BA%E4%B8%BA%E5%A4%96%E7%B1%8D%E5%A4%96%E5%AD%99%E5%A5%B3%E5%AF%BB%E6%84%8F%E5%AE%9A%E7%9B%91%E6%8A%A4%E4%BA%BA%23) `90.5K 🔥` `NEW`
1. [日媒炒作中国卫星每10分钟过一次日本](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E7%82%92%E4%BD%9C%E4%B8%AD%E5%9B%BD%E5%8D%AB%E6%98%9F%E6%AF%8F10%E5%88%86%E9%92%9F%E8%BF%87%E4%B8%80%E6%AC%A1%E6%97%A5%E6%9C%AC%23) `85.3K 🔥` `NEW`
1. [养QQ宠物的那批人回来了](https://s.weibo.com/weibo?q=%23%E5%85%BBQQ%E5%AE%A0%E7%89%A9%E7%9A%84%E9%82%A3%E6%89%B9%E4%BA%BA%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `83.5K 🔥` `NEW`
1. [泰柬边境电诈园实行企业化管理](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E6%9F%AC%E8%BE%B9%E5%A2%83%E7%94%B5%E8%AF%88%E5%9B%AD%E5%AE%9E%E8%A1%8C%E4%BC%81%E4%B8%9A%E5%8C%96%E7%AE%A1%E7%90%86%23) `83.3K 🔥` `NEW`
1. [中国籍男子在日本遭抢劫嫌犯被抓](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%B1%8D%E7%94%B7%E5%AD%90%E5%9C%A8%E6%97%A5%E6%9C%AC%E9%81%AD%E6%8A%A2%E5%8A%AB%E5%AB%8C%E7%8A%AF%E8%A2%AB%E6%8A%93%23) `81.4K 🔥` `NEW`
1. [怦然心动20岁冬季定档](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%E5%86%AC%E5%AD%A3%E5%AE%9A%E6%A1%A3%23) `79.2K 🔥` `NEW`
1. [医生谈规培生处境](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%B0%88%E8%A7%84%E5%9F%B9%E7%94%9F%E5%A4%84%E5%A2%83%23) `73.8K 🔥` `NEW`
1. [工位按职级排 (Job positions are arranged by rank)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%8D%E6%8C%89%E8%81%8C%E7%BA%A7%E6%8E%92%23) `73.6K 🔥` `NEW`
1. [性格好的小狗鱼可以随便摸](https://s.weibo.com/weibo?q=%23%E6%80%A7%E6%A0%BC%E5%A5%BD%E7%9A%84%E5%B0%8F%E7%8B%97%E9%B1%BC%E5%8F%AF%E4%BB%A5%E9%9A%8F%E4%BE%BF%E6%91%B8%23) `70.8K 🔥` `NEW`
1. [欲买桂花同载酒 少年游吃撑了](https://s.weibo.com/weibo?q=%23%E6%AC%B2%E4%B9%B0%E6%A1%82%E8%8A%B1%E5%90%8C%E8%BD%BD%E9%85%92%20%E5%B0%91%E5%B9%B4%E6%B8%B8%E5%90%83%E6%92%91%E4%BA%86%23) `69.4K 🔥` `NEW`
1. [杜兰特对里夫斯恶意犯规](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B9%E5%AF%B9%E9%87%8C%E5%A4%AB%E6%96%AF%E6%81%B6%E6%84%8F%E7%8A%AF%E8%A7%84%23) `69.3K 🔥` `NEW`
1. [ZARA拉夫劳伦被点名通报](https://s.weibo.com/weibo?q=%23ZARA%E6%8B%89%E5%A4%AB%E5%8A%B3%E4%BC%A6%E8%A2%AB%E7%82%B9%E5%90%8D%E9%80%9A%E6%8A%A5%23) `415.4K 🔥` `+55%`
1. [蒋超良被逮捕](https://s.weibo.com/weibo?q=%23%E8%92%8B%E8%B6%85%E8%89%AF%E8%A2%AB%E9%80%AE%E6%8D%95%23) `309.0K 🔥` `+63%`
1. [伊朗对以色列心脏地带展开袭击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E4%BB%A5%E8%89%B2%E5%88%97%E5%BF%83%E8%84%8F%E5%9C%B0%E5%B8%A6%E5%B1%95%E5%BC%80%E8%A2%AD%E5%87%BB%23) `233.7K 🔥` `+134%`
1. [莫斯科遭大量无人机袭击 (Moscow was attacked by a large number of drones)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%96%AF%E7%A7%91%E9%81%AD%E5%A4%A7%E9%87%8F%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%A2%AD%E5%87%BB%23) `753.9K 🔥`
1. [中国机器人开始打网球了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%BC%80%E5%A7%8B%E6%89%93%E7%BD%91%E7%90%83%E4%BA%86%23) `625.4K 🔥`
1. [全是不想坐B座的聪明人](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%98%AF%E4%B8%8D%E6%83%B3%E5%9D%90B%E5%BA%A7%E7%9A%84%E8%81%AA%E6%98%8E%E4%BA%BA%23) `299.5K 🔥`
1. [安阳内黄荠菜地野菜免费挖为谣言](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%98%B3%E5%86%85%E9%BB%84%E8%8D%A0%E8%8F%9C%E5%9C%B0%E9%87%8E%E8%8F%9C%E5%85%8D%E8%B4%B9%E6%8C%96%E4%B8%BA%E8%B0%A3%E8%A8%80%23) `282.2K 🔥`
1. [伊朗警告日本 (Iran warns Japan)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AD%A6%E5%91%8A%E6%97%A5%E6%9C%AC%23) `228.5K 🔥`
1. [AI 裁员 (AI layoffs)](https://s.weibo.com/weibo?q=%23AI%20%E8%A3%81%E5%91%98%23) `224.4K 🔥`
1. [高中生斑马线过马路被撞飞身亡](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E6%96%91%E9%A9%AC%E7%BA%BF%E8%BF%87%E9%A9%AC%E8%B7%AF%E8%A2%AB%E6%92%9E%E9%A3%9E%E8%BA%AB%E4%BA%A1%23) `223.1K 🔥`
1. [赵本山近况](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E8%BF%91%E5%86%B5%23) `214.3K 🔥`
1. [公司把猫裁了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E6%8A%8A%E7%8C%AB%E8%A3%81%E4%BA%86%23) `211.4K 🔥`
1. [睡得晚和睡得少哪个更伤身体](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%BE%97%E6%99%9A%E5%92%8C%E7%9D%A1%E5%BE%97%E5%B0%91%E5%93%AA%E4%B8%AA%E6%9B%B4%E4%BC%A4%E8%BA%AB%E4%BD%93%23) `211.2K 🔥`
1. [逐玉 韩国](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E9%9F%A9%E5%9B%BD%23) `195.3K 🔥`
1. [金价下跌却买不进](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C%E5%8D%B4%E4%B9%B0%E4%B8%8D%E8%BF%9B%23) `163.2K 🔥`
1. [鹿哈方称将追究工厂责任](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E5%93%88%E6%96%B9%E7%A7%B0%E5%B0%86%E8%BF%BD%E7%A9%B6%E5%B7%A5%E5%8E%82%E8%B4%A3%E4%BB%BB%23) `119.3K 🔥`
1. [多方回应高中生过斑马线被撞飞身亡 (Many parties responded to the news that a high school student was hit and killed while crossing a zebra crossing.)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E9%AB%98%E4%B8%AD%E7%94%9F%E8%BF%87%E6%96%91%E9%A9%AC%E7%BA%BF%E8%A2%AB%E6%92%9E%E9%A3%9E%E8%BA%AB%E4%BA%A1%23) `92.4K 🔥`
1. [樊振东转发杜塞官宣发文](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%BD%AC%E5%8F%91%E6%9D%9C%E5%A1%9E%E5%AE%98%E5%AE%A3%E5%8F%91%E6%96%87%23) `85.1K 🔥`
1. [包文婧产后10个月开练普拉提](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E4%BA%A7%E5%90%8E10%E4%B8%AA%E6%9C%88%E5%BC%80%E7%BB%83%E6%99%AE%E6%8B%89%E6%8F%90%23) `178.4K 🔥` `-25%`
1. [鹿晗专辑发售 (Luhan album released)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%B8%93%E8%BE%91%E5%8F%91%E5%94%AE%23) `112.6K 🔥` `-55%`
1. [当公交车突然没了台阶](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%85%AC%E4%BA%A4%E8%BD%A6%E7%AA%81%E7%84%B6%E6%B2%A1%E4%BA%86%E5%8F%B0%E9%98%B6%23) `95.1K 🔥` `-58%`
1. [刘文祥 杨国福粉丝](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%20%E6%9D%A8%E5%9B%BD%E7%A6%8F%E7%B2%89%E4%B8%9D%23) `88.0K 🔥` `-61%`
1. [张凌赫说舍不得逐玉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AF%B4%E8%88%8D%E4%B8%8D%E5%BE%97%E9%80%90%E7%8E%89%23) `87.8K 🔥` `-22%`
1. [刘在石经常使用的破冰问题](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9C%A8%E7%9F%B3%E7%BB%8F%E5%B8%B8%E4%BD%BF%E7%94%A8%E7%9A%84%E7%A0%B4%E5%86%B0%E9%97%AE%E9%A2%98%23) `85.0K 🔥` `-53%`
1. [李一桐 天选种田文女主](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%20%E5%A4%A9%E9%80%89%E7%A7%8D%E7%94%B0%E6%96%87%E5%A5%B3%E4%B8%BB%23) `84.8K 🔥` `-57%`
1. [郑合惠子任宥纶同款手机壳](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E4%BB%BB%E5%AE%A5%E7%BA%B6%E5%90%8C%E6%AC%BE%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `83.1K 🔥` `-52%`
1. [章子怡嗑cp战绩可查](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E5%97%91cp%E6%88%98%E7%BB%A9%E5%8F%AF%E6%9F%A5%23) `79.2K 🔥` `-23%`
1. [张凌赫说浴池戏像打架](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AF%B4%E6%B5%B4%E6%B1%A0%E6%88%8F%E5%83%8F%E6%89%93%E6%9E%B6%23) `70.6K 🔥` `-30%`

Updated at 2026-03-17 14:15:09

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
