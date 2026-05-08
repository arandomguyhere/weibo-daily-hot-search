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

1. [以旧换新助推智能消费升级 (Trade-in old products for new ones to promote smart consumption upgrades)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E5%8A%A9%E6%8E%A8%E6%99%BA%E8%83%BD%E6%B6%88%E8%B4%B9%E5%8D%87%E7%BA%A7%23) `998.3K 🔥` `NEW`
1. [JDG对战DRG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98DRG%23) `303.8K 🔥` `NEW`
1. [难怪马頔会喜欢孙丞潇](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E9%A9%AC%E9%A0%94%E4%BC%9A%E5%96%9C%E6%AC%A2%E5%AD%99%E4%B8%9E%E6%BD%87%23) `285.8K 🔥` `NEW`
1. [网友拿走女子相机故意评论区炫耀](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8B%BF%E8%B5%B0%E5%A5%B3%E5%AD%90%E7%9B%B8%E6%9C%BA%E6%95%85%E6%84%8F%E8%AF%84%E8%AE%BA%E5%8C%BA%E7%82%AB%E8%80%80%23) `284.3K 🔥` `NEW`
1. [霍尔木兹海峡遇袭船上有中国籍船员](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E9%81%87%E8%A2%AD%E8%88%B9%E4%B8%8A%E6%9C%89%E4%B8%AD%E5%9B%BD%E7%B1%8D%E8%88%B9%E5%91%98%23) `271.9K 🔥` `NEW`
1. [曝时代少年团新企划](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%96%B0%E4%BC%81%E5%88%92%23) `257.2K 🔥` `NEW`
1. [OPPO 文案价值观](https://s.weibo.com/weibo?q=%23OPPO%20%E6%96%87%E6%A1%88%E4%BB%B7%E5%80%BC%E8%A7%82%23) `256.5K 🔥` `NEW`
1. [汉坦病毒](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%23) `253.0K 🔥` `NEW`
1. [小米汽车高层调整](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E9%AB%98%E5%B1%82%E8%B0%83%E6%95%B4%23) `213.0K 🔥` `NEW`
1. [王心凌还是权威](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E5%87%8C%E8%BF%98%E6%98%AF%E6%9D%83%E5%A8%81%23) `212.5K 🔥` `NEW`
1. [詹姆斯一句0比2堵住所有问题 (James blocked all problems with 0 to 2)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%80%E5%8F%A50%E6%AF%942%E5%A0%B5%E4%BD%8F%E6%89%80%E6%9C%89%E9%97%AE%E9%A2%98%23) `210.7K 🔥` `NEW`
1. [Uzi说人气被自己玩没了](https://s.weibo.com/weibo?q=%23Uzi%E8%AF%B4%E4%BA%BA%E6%B0%94%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%8E%A9%E6%B2%A1%E4%BA%86%23) `209.0K 🔥` `NEW`
1. [恩新cp](https://s.weibo.com/weibo?q=%23%E6%81%A9%E6%96%B0cp%23) `208.3K 🔥` `NEW`
1. [网传浪姐三公不淘汰](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E4%B8%8D%E6%B7%98%E6%B1%B0%23) `201.3K 🔥` `NEW`
1. [Switch2官宣涨价](https://s.weibo.com/weibo?q=%23Switch2%E5%AE%98%E5%AE%A3%E6%B6%A8%E4%BB%B7%23) `190.0K 🔥` `NEW`
1. [KPL挑战者杯](https://s.weibo.com/weibo?q=%23KPL%E6%8C%91%E6%88%98%E8%80%85%E6%9D%AF%23) `189.1K 🔥` `NEW`
1. [中疾控回应汉坦病毒疫情](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%96%BE%E6%8E%A7%E5%9B%9E%E5%BA%94%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E7%96%AB%E6%83%85%23) `160.7K 🔥` `NEW`
1. [宇树机器人在韩国当和尚了](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%9C%A8%E9%9F%A9%E5%9B%BD%E5%BD%93%E5%92%8C%E5%B0%9A%E4%BA%86%23) `159.1K 🔥` `NEW`
1. [张凌赫说炒土豆丝是保命菜系](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AF%B4%E7%82%92%E5%9C%9F%E8%B1%86%E4%B8%9D%E6%98%AF%E4%BF%9D%E5%91%BD%E8%8F%9C%E7%B3%BB%23) `158.7K 🔥` `NEW`
1. [溺亡镇干部因赌博欠贷款37万元](https://s.weibo.com/weibo?q=%23%E6%BA%BA%E4%BA%A1%E9%95%87%E5%B9%B2%E9%83%A8%E5%9B%A0%E8%B5%8C%E5%8D%9A%E6%AC%A0%E8%B4%B7%E6%AC%BE37%E4%B8%87%E5%85%83%23) `158.4K 🔥` `NEW`
1. [浪姐三公录播舞台 (Lang Jie Sangong recording stage)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E5%BD%95%E6%92%AD%E8%88%9E%E5%8F%B0%23) `158.3K 🔥` `NEW`
1. [央媒提醒选纸巾别踩这些坑](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E5%AA%92%E6%8F%90%E9%86%92%E9%80%89%E7%BA%B8%E5%B7%BE%E5%88%AB%E8%B8%A9%E8%BF%99%E4%BA%9B%E5%9D%91%23) `141.3K 🔥` `NEW`
1. [怦然心动20岁冬季](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%E5%86%AC%E5%AD%A3%23) `129.0K 🔥` `NEW`
1. [榴莲仅退款买家被行拘](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `3.0M 🔥` `+253%`
1. [台湾出现汉坦病毒致死病例](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%87%BA%E7%8E%B0%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E8%87%B4%E6%AD%BB%E7%97%85%E4%BE%8B%23) `1.2M 🔥` `+421%`
1. [央视或低价拿下世界杯转播权 (CCTV may win the World Cup broadcasting rights at a low price)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%88%96%E4%BD%8E%E4%BB%B7%E6%8B%BF%E4%B8%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `611.9K 🔥` `+101%`
1. [孟子义确实红的档期有点满](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%A1%AE%E5%AE%9E%E7%BA%A2%E7%9A%84%E6%A1%A3%E6%9C%9F%E6%9C%89%E7%82%B9%E6%BB%A1%23) `477.9K 🔥` `+113%`
1. [向佑在南昌某酒吧被网友拍到](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%91%E5%9C%A8%E5%8D%97%E6%98%8C%E6%9F%90%E9%85%92%E5%90%A7%E8%A2%AB%E7%BD%91%E5%8F%8B%E6%8B%8D%E5%88%B0%23) `268.9K 🔥` `+28%`
1. [网友神助攻 黄子韬被请上岗 (Netizens help Huang Zitao to be hired)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%A5%9E%E5%8A%A9%E6%94%BB%20%E9%BB%84%E5%AD%90%E9%9F%AC%E8%A2%AB%E8%AF%B7%E4%B8%8A%E5%B2%97%23) `477.9K 🔥`
1. [斜方肌就是一个巨大的讨好型人格](https://s.weibo.com/weibo?q=%23%E6%96%9C%E6%96%B9%E8%82%8C%E5%B0%B1%E6%98%AF%E4%B8%80%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E8%AE%A8%E5%A5%BD%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `328.3K 🔥`
1. [向太不满向佑恋情称绝不认这种儿媳](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E4%B8%8D%E6%BB%A1%E5%90%91%E4%BD%91%E6%81%8B%E6%83%85%E7%A7%B0%E7%BB%9D%E4%B8%8D%E8%AE%A4%E8%BF%99%E7%A7%8D%E5%84%BF%E5%AA%B3%23) `290.8K 🔥`
1. [智能手表配手串 buff叠满 (Smart watch with bracelet full of buffs)](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%83%BD%E6%89%8B%E8%A1%A8%E9%85%8D%E6%89%8B%E4%B8%B2%20buff%E5%8F%A0%E6%BB%A1%23) `211.8K 🔥`
1. [老人子宫切除20年后CT报告正常](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%AD%90%E5%AE%AB%E5%88%87%E9%99%A420%E5%B9%B4%E5%90%8ECT%E6%8A%A5%E5%91%8A%E6%AD%A3%E5%B8%B8%23) `196.5K 🔥`
1. [白敬亭 简醇全球品牌代言人 (Bai Jingting, global brand spokesperson of Jian Chun)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E7%AE%80%E9%86%87%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `972.1K 🔥` `-47%`
1. [湖南卫视综艺本周停播](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E7%BB%BC%E8%89%BA%E6%9C%AC%E5%91%A8%E5%81%9C%E6%92%AD%23) `893.5K 🔥` `-38%`
1. [工作后大家的朋友圈都变了 (After work, everyone’s circle of friends has changed.)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E5%A4%A7%E5%AE%B6%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%83%BD%E5%8F%98%E4%BA%86%23) `472.8K 🔥` `-51%`
1. [淘宝免单 (Taobao free order)](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%23) `291.8K 🔥` `-71%`
1. [孙恩盛掉美颜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%81%A9%E7%9B%9B%E6%8E%89%E7%BE%8E%E9%A2%9C%23) `279.0K 🔥` `-23%`
1. [张杰在谢娜庆功宴上敬酒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%9C%A8%E8%B0%A2%E5%A8%9C%E5%BA%86%E5%8A%9F%E5%AE%B4%E4%B8%8A%E6%95%AC%E9%85%92%23) `274.7K 🔥` `-58%`
1. [王暖暖发文恐惧不敢睡被送来抢救](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9A%96%E6%9A%96%E5%8F%91%E6%96%87%E6%81%90%E6%83%A7%E4%B8%8D%E6%95%A2%E7%9D%A1%E8%A2%AB%E9%80%81%E6%9D%A5%E6%8A%A2%E6%95%91%23) `265.8K 🔥` `-26%`
1. [浏阳烟花厂爆炸已致37死 (Explosion at Liuyang fireworks factory kills 37)](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E5%B7%B2%E8%87%B437%E6%AD%BB%23) `262.3K 🔥` `-66%`
1. [田曦薇 分不清标题和弹幕谁更好笑](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%88%86%E4%B8%8D%E6%B8%85%E6%A0%87%E9%A2%98%E5%92%8C%E5%BC%B9%E5%B9%95%E8%B0%81%E6%9B%B4%E5%A5%BD%E7%AC%91%23) `248.0K 🔥` `-30%`
1. [美国小鸟疑似用废弃针头筑巢](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B0%8F%E9%B8%9F%E7%96%91%E4%BC%BC%E7%94%A8%E5%BA%9F%E5%BC%83%E9%92%88%E5%A4%B4%E7%AD%91%E5%B7%A2%23) `246.7K 🔥` `-31%`
1. [榴莲仅退款买家发声](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E5%8F%91%E5%A3%B0%23) `211.8K 🔥` `-41%`
1. [陈漫拍Angelababy](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%BC%AB%E6%8B%8DAngelababy%23) `210.6K 🔥` `-41%`
1. [这一刻所有偶像剧都要弱爆了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%88%BB%E6%89%80%E6%9C%89%E5%81%B6%E5%83%8F%E5%89%A7%E9%83%BD%E8%A6%81%E5%BC%B1%E7%88%86%E4%BA%86%23) `209.8K 🔥` `-61%`
1. [袁娅维报平安 (Yuan Yawei reported safety)](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%A8%85%E7%BB%B4%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `208.8K 🔥` `-26%`
1. [今我二人 今我夫妻二人 (Now we are two. Now we are husband and wife.)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%88%91%E4%BA%8C%E4%BA%BA%20%E4%BB%8A%E6%88%91%E5%A4%AB%E5%A6%BB%E4%BA%8C%E4%BA%BA%23) `195.4K 🔥` `-35%`
1. [香港拿下世界杯转播权](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%8B%BF%E4%B8%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `192.8K 🔥` `-47%`
1. [热巴的造型因metgala又在外网火了 (Reba’s style became popular on the Internet again due to metgala)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E7%9A%84%E9%80%A0%E5%9E%8B%E5%9B%A0metgala%E5%8F%88%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `158.4K 🔥` `-54%`
1. [211毕业生为脑瘫儿子卖房当蜘蛛人](https://s.weibo.com/weibo?q=%23211%E6%AF%95%E4%B8%9A%E7%94%9F%E4%B8%BA%E8%84%91%E7%98%AB%E5%84%BF%E5%AD%90%E5%8D%96%E6%88%BF%E5%BD%93%E8%9C%98%E8%9B%9B%E4%BA%BA%23) `140.1K 🔥` `-60%`

Updated at 2026-05-08 16:52:34

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
