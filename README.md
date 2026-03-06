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

1. [3月6日两会日程 (Agenda for the two sessions on March 6)](https://s.weibo.com/weibo?q=%233%E6%9C%886%E6%97%A5%E4%B8%A4%E4%BC%9A%E6%97%A5%E7%A8%8B%23) `605.0K 🔥` `NEW`
1. [曾舜晞浅香品牌代言人](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E6%B5%85%E9%A6%99%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `373.1K 🔥` `NEW`
1. [AI相关产业规模将超10万亿元](https://s.weibo.com/weibo?q=%23AI%E7%9B%B8%E5%85%B3%E4%BA%A7%E4%B8%9A%E8%A7%84%E6%A8%A1%E5%B0%86%E8%B6%8510%E4%B8%87%E4%BA%BF%E5%85%83%23) `353.1K 🔥` `NEW`
1. [预计今年GDP增量超6万亿元](https://s.weibo.com/weibo?q=%23%E9%A2%84%E8%AE%A1%E4%BB%8A%E5%B9%B4GDP%E5%A2%9E%E9%87%8F%E8%B6%856%E4%B8%87%E4%BA%BF%E5%85%83%23) `319.9K 🔥` `NEW`
1. [建议儿童机票价始终具备优惠属性](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%84%BF%E7%AB%A5%E6%9C%BA%E7%A5%A8%E4%BB%B7%E5%A7%8B%E7%BB%88%E5%85%B7%E5%A4%87%E4%BC%98%E6%83%A0%E5%B1%9E%E6%80%A7%23) `169.8K 🔥` `NEW`
1. [破5亿播放AI短剧成本仅3000](https://s.weibo.com/weibo?q=%23%E7%A0%B45%E4%BA%BF%E6%92%AD%E6%94%BEAI%E7%9F%AD%E5%89%A7%E6%88%90%E6%9C%AC%E4%BB%853000%23) `160.7K 🔥` `NEW`
1. [避免女性在生育与事业间被迫二选一](https://s.weibo.com/weibo?q=%23%E9%81%BF%E5%85%8D%E5%A5%B3%E6%80%A7%E5%9C%A8%E7%94%9F%E8%82%B2%E4%B8%8E%E4%BA%8B%E4%B8%9A%E9%97%B4%E8%A2%AB%E8%BF%AB%E4%BA%8C%E9%80%89%E4%B8%80%23) `155.7K 🔥` `NEW`
1. [小鹏G6超级增程六项全能一步到位](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FG6%E8%B6%85%E7%BA%A7%E5%A2%9E%E7%A8%8B%E5%85%AD%E9%A1%B9%E5%85%A8%E8%83%BD%E4%B8%80%E6%AD%A5%E5%88%B0%E4%BD%8D%23) `141.1K 🔥` `NEW`
1. [千问妇女节活动](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%A6%87%E5%A5%B3%E8%8A%82%E6%B4%BB%E5%8A%A8%23) `115.5K 🔥` `NEW`
1. [ZSLin对战DOU5](https://s.weibo.com/weibo?q=%23ZSLin%E5%AF%B9%E6%88%98DOU5%23) `97.6K 🔥` `NEW`
1. [猫 哥你别吃了我害怕 (Cat, brother, don’t eat it, I’m afraid)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E5%93%A5%E4%BD%A0%E5%88%AB%E5%90%83%E4%BA%86%E6%88%91%E5%AE%B3%E6%80%95%23) `93.3K 🔥` `NEW`
1. [医生说春天是养头发的好时机](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E6%98%A5%E5%A4%A9%E6%98%AF%E5%85%BB%E5%A4%B4%E5%8F%91%E7%9A%84%E5%A5%BD%E6%97%B6%E6%9C%BA%23) `90.5K 🔥` `NEW`
1. [得闲谨制最终票房4.12亿](https://s.weibo.com/weibo?q=%23%E5%BE%97%E9%97%B2%E8%B0%A8%E5%88%B6%E6%9C%80%E7%BB%88%E7%A5%A8%E6%88%BF4.12%E4%BA%BF%23) `90.5K 🔥` `NEW`
1. [建议给应届生发租房补贴](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%BB%99%E5%BA%94%E5%B1%8A%E7%94%9F%E5%8F%91%E7%A7%9F%E6%88%BF%E8%A1%A5%E8%B4%B4%23) `90.5K 🔥` `NEW`
1. [黄景瑜设计戴帽子简直神来之笔](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E8%AE%BE%E8%AE%A1%E6%88%B4%E5%B8%BD%E5%AD%90%E7%AE%80%E7%9B%B4%E7%A5%9E%E6%9D%A5%E4%B9%8B%E7%AC%94%23) `90.5K 🔥` `NEW`
1. [委员呼吁减轻年轻人生育负担](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%91%BC%E5%90%81%E5%87%8F%E8%BD%BB%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%94%9F%E8%82%B2%E8%B4%9F%E6%8B%85%23) `74.1K 🔥` `NEW`
1. [逐玉追剧日历](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E8%BF%BD%E5%89%A7%E6%97%A5%E5%8E%86%23) `74.0K 🔥` `NEW`
1. [曝周翊然竞争十日终焉被pass](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%91%A8%E7%BF%8A%E7%84%B6%E7%AB%9E%E4%BA%89%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E8%A2%ABpass%23) `73.7K 🔥` `NEW`
1. [我只是一般大人](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%8F%AA%E6%98%AF%E4%B8%80%E8%88%AC%E5%A4%A7%E4%BA%BA%23) `72.9K 🔥` `NEW`
1. [经济主题记者会](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E6%B5%8E%E4%B8%BB%E9%A2%98%E8%AE%B0%E8%80%85%E4%BC%9A%23) `1.0M 🔥` `+74%`
1. [多地官宣春假清明连休6天 (Officials in many places announced that the Spring Festival will be closed for 6 consecutive days during Qingming Festival)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%AE%98%E5%AE%A3%E6%98%A5%E5%81%87%E6%B8%85%E6%98%8E%E8%BF%9E%E4%BC%916%E5%A4%A9%23) `724.6K 🔥` `+238%`
1. [青海省委书记看生命树落泪 (Secretary of Qinghai Provincial Party Committee sheds tears when looking at the Tree of Life)](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B7%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0%E7%9C%8B%E7%94%9F%E5%91%BD%E6%A0%91%E8%90%BD%E6%B3%AA%23) `429.2K 🔥` `+95%`
1. [印度对美国炸船行为保持沉默](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%AF%B9%E7%BE%8E%E5%9B%BD%E7%82%B8%E8%88%B9%E8%A1%8C%E4%B8%BA%E4%BF%9D%E6%8C%81%E6%B2%89%E9%BB%98%23) `301.8K 🔥` `+74%`
1. [季洁扮演者王茜回应重案六组翻拍 (Wang Qian, who plays Ji Jie, responds to the remake of Serious Case Six)](https://s.weibo.com/weibo?q=%23%E5%AD%A3%E6%B4%81%E6%89%AE%E6%BC%94%E8%80%85%E7%8E%8B%E8%8C%9C%E5%9B%9E%E5%BA%94%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84%E7%BF%BB%E6%8B%8D%23) `194.0K 🔥` `+28%`
1. [孩子大了后要帮孩子完成社会化](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%A4%A7%E4%BA%86%E5%90%8E%E8%A6%81%E5%B8%AE%E5%AD%A9%E5%AD%90%E5%AE%8C%E6%88%90%E7%A4%BE%E4%BC%9A%E5%8C%96%23) `170.0K 🔥` `+77%`
1. [开工就点拼好饭 (Just order a meal when you start working)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B7%A5%E5%B0%B1%E7%82%B9%E6%8B%BC%E5%A5%BD%E9%A5%AD%23) `439.7K 🔥`
1. [政府工作报告中的民生热词](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%E4%B8%AD%E7%9A%84%E6%B0%91%E7%94%9F%E7%83%AD%E8%AF%8D%23) `341.1K 🔥`
1. [伊朗称击中美国林肯号航母](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%87%BB%E4%B8%AD%E7%BE%8E%E5%9B%BD%E6%9E%97%E8%82%AF%E5%8F%B7%E8%88%AA%E6%AF%8D%23) `306.0K 🔥`
1. [刘国梁回应樊振东一出一回](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%E5%9B%9E%E5%BA%94%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%80%E5%87%BA%E4%B8%80%E5%9B%9E%23) `304.4K 🔥`
1. [女子产后21天突发大出血晕倒车库](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%A7%E5%90%8E21%E5%A4%A9%E7%AA%81%E5%8F%91%E5%A4%A7%E5%87%BA%E8%A1%80%E6%99%95%E5%80%92%E8%BD%A6%E5%BA%93%23) `235.3K 🔥`
1. [Kep1er徐永恩退团](https://s.weibo.com/weibo?q=%23Kep1er%E5%BE%90%E6%B0%B8%E6%81%A9%E9%80%80%E5%9B%A2%23) `149.8K 🔥`
1. [十日终焉原著齐夏相貌平平](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%8E%9F%E8%91%97%E9%BD%90%E5%A4%8F%E7%9B%B8%E8%B2%8C%E5%B9%B3%E5%B9%B3%23) `116.4K 🔥`
1. [娜扎我互联网的好闺蜜](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E6%88%91%E4%BA%92%E8%81%94%E7%BD%91%E7%9A%84%E5%A5%BD%E9%97%BA%E8%9C%9C%23) `115.7K 🔥`
1. [伊朗外长说以色列优先意味美国最后 (Iran's foreign minister says Israel first means America last)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E8%AF%B4%E4%BB%A5%E8%89%B2%E5%88%97%E4%BC%98%E5%85%88%E6%84%8F%E5%91%B3%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%90%8E%23) `97.8K 🔥`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `93.4K 🔥`
1. [比亚迪闪充站建设真的猛](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E9%97%AA%E5%85%85%E7%AB%99%E5%BB%BA%E8%AE%BE%E7%9C%9F%E7%9A%84%E7%8C%9B%23) `93.3K 🔥`
1. [生孩子还带了个执法记录姨](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%AD%A9%E5%AD%90%E8%BF%98%E5%B8%A6%E4%BA%86%E4%B8%AA%E6%89%A7%E6%B3%95%E8%AE%B0%E5%BD%95%E5%A7%A8%23) `90.5K 🔥`
1. [两会](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%23) `83.7K 🔥`
1. [原神莉奈娅](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%E8%8E%89%E5%A5%88%E5%A8%85%23) `81.4K 🔥`
1. [千问 (Qianwen)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%23) `428.2K 🔥` `-28%`
1. [小米发布国内第一个手机版龙虾 (Xiaomi releases China’s first mobile version of Lobster)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E5%9B%BD%E5%86%85%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%89%8B%E6%9C%BA%E7%89%88%E9%BE%99%E8%99%BE%23) `373.1K 🔥` `-52%`
1. [千问宣布妇女节再次请客](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%AE%A3%E5%B8%83%E5%A6%87%E5%A5%B3%E8%8A%82%E5%86%8D%E6%AC%A1%E8%AF%B7%E5%AE%A2%23) `373.1K 🔥` `-36%`
1. [逐玉 智能倍速看剧](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E6%99%BA%E8%83%BD%E5%80%8D%E9%80%9F%E7%9C%8B%E5%89%A7%23) `297.8K 🔥` `-72%`
1. [不要热水洗头时梳头发](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%83%AD%E6%B0%B4%E6%B4%97%E5%A4%B4%E6%97%B6%E6%A2%B3%E5%A4%B4%E5%8F%91%23) `206.9K 🔥` `-31%`
1. [张维伊救的不是董璇是房主任 (The person Zhang Weiyi saved was not Dong Xuan but Director Fang)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%B4%E4%BC%8A%E6%95%91%E7%9A%84%E4%B8%8D%E6%98%AF%E8%91%A3%E7%92%87%E6%98%AF%E6%88%BF%E4%B8%BB%E4%BB%BB%23) `176.3K 🔥` `-32%`
1. [霸王茶姬免单 (Overlord Cha Ji free order)](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%85%8D%E5%8D%95%23) `139.2K 🔥` `-49%`
1. [老舅妈嫩娘去世 (My old aunt and young lady passed away)](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%88%85%E5%A6%88%E5%AB%A9%E5%A8%98%E5%8E%BB%E4%B8%96%23) `103.8K 🔥` `-32%`
1. [印度失联战斗机确认坠毁](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A4%B1%E8%81%94%E6%88%98%E6%96%97%E6%9C%BA%E7%A1%AE%E8%AE%A4%E5%9D%A0%E6%AF%81%23) `101.5K 🔥` `-22%`
1. [男子吃火锅花113元发票抽奖中了10万 (Man ate hot pot and spent 113 yuan on receipts and won 100,000 yuan in a lottery)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%90%83%E7%81%AB%E9%94%85%E8%8A%B1113%E5%85%83%E5%8F%91%E7%A5%A8%E6%8A%BD%E5%A5%96%E4%B8%AD%E4%BA%8610%E4%B8%87%23) `90.4K 🔥` `-38%`
1. [伊朗军队誓为遭击沉军舰复仇](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%9B%E9%98%9F%E8%AA%93%E4%B8%BA%E9%81%AD%E5%87%BB%E6%B2%89%E5%86%9B%E8%88%B0%E5%A4%8D%E4%BB%87%23) `84.9K 🔥` `-52%`
1. [王传君把徐志胜一撮毛扯下来了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E6%8A%8A%E5%BE%90%E5%BF%97%E8%83%9C%E4%B8%80%E6%92%AE%E6%AF%9B%E6%89%AF%E4%B8%8B%E6%9D%A5%E4%BA%86%23) `77.4K 🔥` `-33%`

Updated at 2026-03-06 15:51:19

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
