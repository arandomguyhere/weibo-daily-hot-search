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

1. [湘雅医院失联学生确认坠江身亡 (Missing student from Xiangya Hospital confirmed to have fallen into river and died)](https://s.weibo.com/weibo?q=%23%E6%B9%98%E9%9B%85%E5%8C%BB%E9%99%A2%E5%A4%B1%E8%81%94%E5%AD%A6%E7%94%9F%E7%A1%AE%E8%AE%A4%E5%9D%A0%E6%B1%9F%E8%BA%AB%E4%BA%A1%23) `1.6M 🔥` `NEW`
1. [致敬每一份不屈的热爱](https://s.weibo.com/weibo?q=%23%E8%87%B4%E6%95%AC%E6%AF%8F%E4%B8%80%E4%BB%BD%E4%B8%8D%E5%B1%88%E7%9A%84%E7%83%AD%E7%88%B1%23) `963.7K 🔥` `NEW`
1. [漂白鸡爪企业致歉](https://s.weibo.com/weibo?q=%23%E6%BC%82%E7%99%BD%E9%B8%A1%E7%88%AA%E4%BC%81%E4%B8%9A%E8%87%B4%E6%AD%89%23) `736.0K 🔥` `NEW`
1. [卖给孩子的可爱卡片竟有上吊暗示](https://s.weibo.com/weibo?q=%23%E5%8D%96%E7%BB%99%E5%AD%A9%E5%AD%90%E7%9A%84%E5%8F%AF%E7%88%B1%E5%8D%A1%E7%89%87%E7%AB%9F%E6%9C%89%E4%B8%8A%E5%90%8A%E6%9A%97%E7%A4%BA%23) `515.9K 🔥` `NEW`
1. [大冰教家长应对孩子不自律](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E6%95%99%E5%AE%B6%E9%95%BF%E5%BA%94%E5%AF%B9%E5%AD%A9%E5%AD%90%E4%B8%8D%E8%87%AA%E5%BE%8B%23) `352.7K 🔥` `NEW`
1. [内塔尼亚胡发视频自证在世](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E5%8F%91%E8%A7%86%E9%A2%91%E8%87%AA%E8%AF%81%E5%9C%A8%E4%B8%96%23) `320.6K 🔥` `NEW`
1. [胖东来回应若检测无错会起诉博主](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%9E%E5%BA%94%E8%8B%A5%E6%A3%80%E6%B5%8B%E6%97%A0%E9%94%99%E4%BC%9A%E8%B5%B7%E8%AF%89%E5%8D%9A%E4%B8%BB%23) `308.1K 🔥` `NEW`
1. [我们的爸爸](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E7%88%B8%E7%88%B8%23) `249.3K 🔥` `NEW`
1. [司宫令开机](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E5%AE%AB%E4%BB%A4%E5%BC%80%E6%9C%BA%23) `223.1K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `223.1K 🔥` `NEW`
1. [湘雅 (Xiangya)](https://s.weibo.com/weibo?q=%23%E6%B9%98%E9%9B%85%23) `222.8K 🔥` `NEW`
1. [泰国抛尸案嫌疑人对话音频曝光](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%8A%9B%E5%B0%B8%E6%A1%88%E5%AB%8C%E7%96%91%E4%BA%BA%E5%AF%B9%E8%AF%9D%E9%9F%B3%E9%A2%91%E6%9B%9D%E5%85%89%23) `222.6K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `222.1K 🔥` `NEW`
1. [樊长玉因身份悬殊不敢回应](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E5%9B%A0%E8%BA%AB%E4%BB%BD%E6%82%AC%E6%AE%8A%E4%B8%8D%E6%95%A2%E5%9B%9E%E5%BA%94%23) `206.6K 🔥` `NEW`
1. [伊朗发布战报](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B8%83%E6%88%98%E6%8A%A5%23) `204.8K 🔥` `NEW`
1. [部分茶叶咖啡中检出伟哥成分](https://s.weibo.com/weibo?q=%23%E9%83%A8%E5%88%86%E8%8C%B6%E5%8F%B6%E5%92%96%E5%95%A1%E4%B8%AD%E6%A3%80%E5%87%BA%E4%BC%9F%E5%93%A5%E6%88%90%E5%88%86%23) `184.9K 🔥` `NEW`
1. [中南大学和湖南卫健委成立联合调查组](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8D%97%E5%A4%A7%E5%AD%A6%E5%92%8C%E6%B9%96%E5%8D%97%E5%8D%AB%E5%81%A5%E5%A7%94%E6%88%90%E7%AB%8B%E8%81%94%E5%90%88%E8%B0%83%E6%9F%A5%E7%BB%84%23) `169.9K 🔥` `NEW`
1. [网络问诊开单秘籍男攻肾虚女攻衰老](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E9%97%AE%E8%AF%8A%E5%BC%80%E5%8D%95%E7%A7%98%E7%B1%8D%E7%94%B7%E6%94%BB%E8%82%BE%E8%99%9A%E5%A5%B3%E6%94%BB%E8%A1%B0%E8%80%81%23) `156.3K 🔥` `NEW`
1. [鹿晗 关晓彤](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `154.7K 🔥` `NEW`
1. [韩国回应被特朗普点名护航海峡](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%89%B9%E6%9C%97%E6%99%AE%E7%82%B9%E5%90%8D%E6%8A%A4%E8%88%AA%E6%B5%B7%E5%B3%A1%23) `150.5K 🔥` `NEW`
1. [田曦薇任豪 我欲乘风 (Tian Xiwei Ren Hao I want to ride the wind)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E4%BB%BB%E8%B1%AA%20%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `150.3K 🔥` `NEW`
1. [315晚会曝光7件事](https://s.weibo.com/weibo?q=%23315%E6%99%9A%E4%BC%9A%E6%9B%9D%E5%85%897%E4%BB%B6%E4%BA%8B%23) `149.2K 🔥` `NEW`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `147.3K 🔥` `NEW`
1. [樊振东倒车球迷安慰别紧张](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%80%92%E8%BD%A6%E7%90%83%E8%BF%B7%E5%AE%89%E6%85%B0%E5%88%AB%E7%B4%A7%E5%BC%A0%23) `142.7K 🔥` `NEW`
1. [刘宇宁不去鸟巢开演唱会的原因](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%B8%8D%E5%8E%BB%E9%B8%9F%E5%B7%A2%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `133.0K 🔥` `NEW`
1. [脑梗最快急救方法](https://s.weibo.com/weibo?q=%23%E8%84%91%E6%A2%97%E6%9C%80%E5%BF%AB%E6%80%A5%E6%95%91%E6%96%B9%E6%B3%95%23) `121.1K 🔥` `NEW`
1. [数十万爆雷车企车主售后困境](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%8D%81%E4%B8%87%E7%88%86%E9%9B%B7%E8%BD%A6%E4%BC%81%E8%BD%A6%E4%B8%BB%E5%94%AE%E5%90%8E%E5%9B%B0%E5%A2%83%23) `121.0K 🔥` `NEW`
1. [丈夫拍下妻子走进催产室的身影](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E6%8B%8D%E4%B8%8B%E5%A6%BB%E5%AD%90%E8%B5%B0%E8%BF%9B%E5%82%AC%E4%BA%A7%E5%AE%A4%E7%9A%84%E8%BA%AB%E5%BD%B1%23) `107.3K 🔥` `NEW`
1. [便秘时一定要试试6种食物](https://s.weibo.com/weibo?q=%23%E4%BE%BF%E7%A7%98%E6%97%B6%E4%B8%80%E5%AE%9A%E8%A6%81%E8%AF%95%E8%AF%956%E7%A7%8D%E9%A3%9F%E7%89%A9%23) `101.7K 🔥` `NEW`
1. [女生从上铺跳下导致黄体破裂](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E4%BB%8E%E4%B8%8A%E9%93%BA%E8%B7%B3%E4%B8%8B%E5%AF%BC%E8%87%B4%E9%BB%84%E4%BD%93%E7%A0%B4%E8%A3%82%23) `101.7K 🔥` `NEW`
1. [谢征樊长玉吵架冷战 (Xie Zheng and Fan Changyu had a cold war)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%A8%8A%E9%95%BF%E7%8E%89%E5%90%B5%E6%9E%B6%E5%86%B7%E6%88%98%23) `100.5K 🔥` `NEW`
1. [夫妻结婚54年打呼噜也不分床睡](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E7%BB%93%E5%A9%9A54%E5%B9%B4%E6%89%93%E5%91%BC%E5%99%9C%E4%B9%9F%E4%B8%8D%E5%88%86%E5%BA%8A%E7%9D%A1%23) `91.1K 🔥` `NEW`
1. [警惕无线键鼠隔空取物式窃密](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%83%95%E6%97%A0%E7%BA%BF%E9%94%AE%E9%BC%A0%E9%9A%94%E7%A9%BA%E5%8F%96%E7%89%A9%E5%BC%8F%E7%AA%83%E5%AF%86%23) `90.8K 🔥` `NEW`
1. [伊朗称美以伤亡约5000人](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E4%BB%A5%E4%BC%A4%E4%BA%A1%E7%BA%A65000%E4%BA%BA%23) `90.1K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `89.2K 🔥` `NEW`
1. [迈克尔B乔丹奥斯卡影帝](https://s.weibo.com/weibo?q=%23%E8%BF%88%E5%85%8B%E5%B0%94B%E4%B9%94%E4%B8%B9%E5%A5%A5%E6%96%AF%E5%8D%A1%E5%BD%B1%E5%B8%9D%23) `88.3K 🔥` `NEW`
1. [网红锅巴公司已停产停售](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E9%94%85%E5%B7%B4%E5%85%AC%E5%8F%B8%E5%B7%B2%E5%81%9C%E4%BA%A7%E5%81%9C%E5%94%AE%23) `87.5K 🔥` `NEW`
1. [特朗普威胁北约](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A8%81%E8%83%81%E5%8C%97%E7%BA%A6%23) `83.3K 🔥` `NEW`
1. [妹妹宝孙颖莎](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E5%AE%9D%E5%AD%99%E9%A2%96%E8%8E%8E%23) `82.1K 🔥` `NEW`
1. [家有七郎开机](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E6%9C%89%E4%B8%83%E9%83%8E%E5%BC%80%E6%9C%BA%23) `81.2K 🔥` `NEW`
1. [勇士vs尼克斯 (Warriors vs Knicks)](https://s.weibo.com/weibo?q=%23%E5%8B%87%E5%A3%ABvs%E5%B0%BC%E5%85%8B%E6%96%AF%23) `78.8K 🔥` `NEW`
1. [央视新闻实测腾势极寒闪充 (CCTV News measured extreme cold flash charging)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%96%B0%E9%97%BB%E5%AE%9E%E6%B5%8B%E8%85%BE%E5%8A%BF%E6%9E%81%E5%AF%92%E9%97%AA%E5%85%85%23) `351.8K 🔥` `+816%`
1. [2026奥斯卡获奖名单 (2026 Oscar winners list)](https://s.weibo.com/weibo?q=%232026%E5%A5%A5%E6%96%AF%E5%8D%A1%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `152.9K 🔥` `+40%`
1. [王俊凯 演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E6%BC%94%E5%94%B1%E4%BC%9A%23) `138.7K 🔥` `+93%`
1. [1岁半宝宝睡醒后哭喊妈妈6小时](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%8D%8A%E5%AE%9D%E5%AE%9D%E7%9D%A1%E9%86%92%E5%90%8E%E5%93%AD%E5%96%8A%E5%A6%88%E5%A6%886%E5%B0%8F%E6%97%B6%23) `197.5K 🔥`
1. [奥斯卡红毯 (oscar red carpet)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E6%96%AF%E5%8D%A1%E7%BA%A2%E6%AF%AF%23) `105.1K 🔥`
1. [315曝光名单 (315 exposure list)](https://s.weibo.com/weibo?q=%23315%E6%9B%9D%E5%85%89%E5%90%8D%E5%8D%95%23) `1.2M 🔥` `-48%`
1. [奥斯卡](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E6%96%AF%E5%8D%A1%23) `150.3K 🔥` `-59%`
1. [315曝光的鸡爪公司股东也在看晚会 (The shareholders of the chicken feet company exposed on March 15 were also watching the party)](https://s.weibo.com/weibo?q=%23315%E6%9B%9D%E5%85%89%E7%9A%84%E9%B8%A1%E7%88%AA%E5%85%AC%E5%8F%B8%E8%82%A1%E4%B8%9C%E4%B9%9F%E5%9C%A8%E7%9C%8B%E6%99%9A%E4%BC%9A%23) `91.5K 🔥` `-74%`
1. [椰子水 兑水加糖 (Coconut water mixed with water and sugar)](https://s.weibo.com/weibo?q=%23%E6%A4%B0%E5%AD%90%E6%B0%B4%20%E5%85%91%E6%B0%B4%E5%8A%A0%E7%B3%96%23) `90.8K 🔥` `-57%`
1. [刘文祥这泼天的富贵你都没接住 (You haven’t even caught Liu Wenxiang’s incredible wealth.)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E8%BF%99%E6%B3%BC%E5%A4%A9%E7%9A%84%E5%AF%8C%E8%B4%B5%E4%BD%A0%E9%83%BD%E6%B2%A1%E6%8E%A5%E4%BD%8F%23) `87.7K 🔥` `-30%`

Updated at 2026-03-16 11:28:32

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
