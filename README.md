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

1. [秦昊汤唯领衔主演孔雀东南飞 (Qin Hao and Tang Wei star in Peacock Flying Southeast)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E6%B1%A4%E5%94%AF%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%AD%94%E9%9B%80%E4%B8%9C%E5%8D%97%E9%A3%9E%23) `376.2K 🔥` `NEW`
1. [外语专业大退潮曾经的王牌不香了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E8%AF%AD%E4%B8%93%E4%B8%9A%E5%A4%A7%E9%80%80%E6%BD%AE%E6%9B%BE%E7%BB%8F%E7%9A%84%E7%8E%8B%E7%89%8C%E4%B8%8D%E9%A6%99%E4%BA%86%23) `190.5K 🔥` `NEW`
1. [喝牛奶开出了隐藏款勺子](https://s.weibo.com/weibo?q=%23%E5%96%9D%E7%89%9B%E5%A5%B6%E5%BC%80%E5%87%BA%E4%BA%86%E9%9A%90%E8%97%8F%E6%AC%BE%E5%8B%BA%E5%AD%90%23) `189.9K 🔥` `NEW`
1. [王菲 你我经历的一刻](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%20%E4%BD%A0%E6%88%91%E7%BB%8F%E5%8E%86%E7%9A%84%E4%B8%80%E5%88%BB%23) `189.1K 🔥` `NEW`
1. [Angelababy撕拉片 权威脸蛋](https://s.weibo.com/weibo?q=%23Angelababy%E6%92%95%E6%8B%89%E7%89%87%20%E6%9D%83%E5%A8%81%E8%84%B8%E8%9B%8B%23) `161.2K 🔥` `NEW`
1. [乡镇公务员相亲称现实有时远超感情](https://s.weibo.com/weibo?q=%23%E4%B9%A1%E9%95%87%E5%85%AC%E5%8A%A1%E5%91%98%E7%9B%B8%E4%BA%B2%E7%A7%B0%E7%8E%B0%E5%AE%9E%E6%9C%89%E6%97%B6%E8%BF%9C%E8%B6%85%E6%84%9F%E6%83%85%23) `155.4K 🔥` `NEW`
1. [郭富城王一博 法拉利遇上兰博基尼](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E6%B3%95%E6%8B%89%E5%88%A9%E9%81%87%E4%B8%8A%E5%85%B0%E5%8D%9A%E5%9F%BA%E5%B0%BC%23) `152.6K 🔥` `NEW`
1. [明星回老家也得穿省服](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E5%9B%9E%E8%80%81%E5%AE%B6%E4%B9%9F%E5%BE%97%E7%A9%BF%E7%9C%81%E6%9C%8D%23) `149.4K 🔥` `NEW`
1. [沃尔沃XC70冰封40天破冰而出](https://s.weibo.com/weibo?q=%23%E6%B2%83%E5%B0%94%E6%B2%83XC70%E5%86%B0%E5%B0%8140%E5%A4%A9%E7%A0%B4%E5%86%B0%E8%80%8C%E5%87%BA%23) `148.1K 🔥` `NEW`
1. [谷爱凌被迫损失1天U池训练时间](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%A2%AB%E8%BF%AB%E6%8D%9F%E5%A4%B11%E5%A4%A9U%E6%B1%A0%E8%AE%AD%E7%BB%83%E6%97%B6%E9%97%B4%23) `137.2K 🔥` `NEW`
1. [千问第二波薅羊毛攻略 (Qianwen second wave wool harvesting strategy)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%AC%AC%E4%BA%8C%E6%B3%A2%E8%96%85%E7%BE%8A%E6%AF%9B%E6%94%BB%E7%95%A5%23) `129.5K 🔥` `NEW`
1. [王鹤棣 长红至今的前辈还有谁在](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E9%95%BF%E7%BA%A2%E8%87%B3%E4%BB%8A%E7%9A%84%E5%89%8D%E8%BE%88%E8%BF%98%E6%9C%89%E8%B0%81%E5%9C%A8%23) `122.9K 🔥` `NEW`
1. [白鹿7天10组物料](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF7%E5%A4%A910%E7%BB%84%E7%89%A9%E6%96%99%23) `117.3K 🔥` `NEW`
1. [向佐郭碧婷3岁儿子留长发](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E9%83%AD%E7%A2%A7%E5%A9%B73%E5%B2%81%E5%84%BF%E5%AD%90%E7%95%99%E9%95%BF%E5%8F%91%23) `117.2K 🔥` `NEW`
1. [罗小黑](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%B0%8F%E9%BB%91%23) `117.2K 🔥` `NEW`
1. [杨丽萍67岁仍在学习AI](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%BD%E8%90%8D67%E5%B2%81%E4%BB%8D%E5%9C%A8%E5%AD%A6%E4%B9%A0AI%23) `116.8K 🔥` `NEW`
1. [副省长电话被拉黑后](https://s.weibo.com/weibo?q=%23%E5%89%AF%E7%9C%81%E9%95%BF%E7%94%B5%E8%AF%9D%E8%A2%AB%E6%8B%89%E9%BB%91%E5%90%8E%23) `116.8K 🔥` `NEW`
1. [过年做美甲别窝囊](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%81%9A%E7%BE%8E%E7%94%B2%E5%88%AB%E7%AA%9D%E5%9B%8A%23) `116.7K 🔥` `NEW`
1. [上千问请你看惊蛰无声](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%83%E9%97%AE%E8%AF%B7%E4%BD%A0%E7%9C%8B%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `101.8K 🔥` `NEW`
1. [差5分钟赶上回家火车女子崩溃大哭](https://s.weibo.com/weibo?q=%23%E5%B7%AE5%E5%88%86%E9%92%9F%E8%B5%B6%E4%B8%8A%E5%9B%9E%E5%AE%B6%E7%81%AB%E8%BD%A6%E5%A5%B3%E5%AD%90%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `99.3K 🔥` `NEW`
1. [狗 没大没小的 (Dogs, big or small)](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E6%B2%A1%E5%A4%A7%E6%B2%A1%E5%B0%8F%E7%9A%84%23) `97.5K 🔥` `NEW`
1. [宋威龙和新郎官有什么区别](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%92%8C%E6%96%B0%E9%83%8E%E5%AE%98%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%23) `94.5K 🔥` `NEW`
1. [张柏芝儿子身高](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%84%BF%E5%AD%90%E8%BA%AB%E9%AB%98%23) `88.8K 🔥` `NEW`
1. [迅猛龙自曝身体状况](https://s.weibo.com/weibo?q=%23%E8%BF%85%E7%8C%9B%E9%BE%99%E8%87%AA%E6%9B%9D%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `87.5K 🔥` `NEW`
1. [曝Caps加入LOL名人堂](https://s.weibo.com/weibo?q=%23%E6%9B%9DCaps%E5%8A%A0%E5%85%A5LOL%E5%90%8D%E4%BA%BA%E5%A0%82%23) `87.4K 🔥` `NEW`
1. [真正的狸猫换太子](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%8B%B8%E7%8C%AB%E6%8D%A2%E5%A4%AA%E5%AD%90%23) `86.0K 🔥` `NEW`
1. [白菊找回了多杰也找回了少年气性](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%8F%8A%E6%89%BE%E5%9B%9E%E4%BA%86%E5%A4%9A%E6%9D%B0%E4%B9%9F%E6%89%BE%E5%9B%9E%E4%BA%86%E5%B0%91%E5%B9%B4%E6%B0%94%E6%80%A7%23) `81.0K 🔥` `NEW`
1. [王楚钦蹲下与小朋友合影](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B9%B2%E4%B8%8B%E4%B8%8E%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%90%88%E5%BD%B1%23) `80.1K 🔥` `NEW`
1. [马年春晚部分节目单曝光](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%98%A5%E6%99%9A%E9%83%A8%E5%88%86%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9B%9D%E5%85%89%23) `1.1M 🔥` `+35%`
1. [谷爱凌吐槽国际雪联安排不公平](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%90%E6%A7%BD%E5%9B%BD%E9%99%85%E9%9B%AA%E8%81%94%E5%AE%89%E6%8E%92%E4%B8%8D%E5%85%AC%E5%B9%B3%23) `775.5K 🔥` `+101%`
1. [与捷途共赴新年第一缕曙光 (Celebrate the first light of the new year with Jietu)](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E6%8D%B7%E9%80%94%E5%85%B1%E8%B5%B4%E6%96%B0%E5%B9%B4%E7%AC%AC%E4%B8%80%E7%BC%95%E6%9B%99%E5%85%89%23) `423.2K 🔥` `+226%`
1. [家政大姐带4个空瓶回家过年 (The housekeeping lady brought 4 empty bottles home for the New Year)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E6%94%BF%E5%A4%A7%E5%A7%90%E5%B8%A64%E4%B8%AA%E7%A9%BA%E7%93%B6%E5%9B%9E%E5%AE%B6%E8%BF%87%E5%B9%B4%23) `164.8K 🔥` `+54%`
1. [伤心swimming晒聊天转账记录](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%E6%99%92%E8%81%8A%E5%A4%A9%E8%BD%AC%E8%B4%A6%E8%AE%B0%E5%BD%95%23) `117.1K 🔥` `+21%`
1. [京彩闹春不打烊](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E5%BD%A9%E9%97%B9%E6%98%A5%E4%B8%8D%E6%89%93%E7%83%8A%23) `611.3K 🔥`
1. [女子左手被50吨冲床碾成泥](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B7%A6%E6%89%8B%E8%A2%AB50%E5%90%A8%E5%86%B2%E5%BA%8A%E7%A2%BE%E6%88%90%E6%B3%A5%23) `117.3K 🔥`
1. [白敬亭 宋轶](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `117.3K 🔥`
1. [伤心swimming发完整时间线](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%E5%8F%91%E5%AE%8C%E6%95%B4%E6%97%B6%E9%97%B4%E7%BA%BF%23) `117.0K 🔥`
1. [宋轶 情侣背景](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%20%E6%83%85%E4%BE%A3%E8%83%8C%E6%99%AF%23) `117.0K 🔥`
1. [金饰价格一夜跌17元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E4%B8%80%E5%A4%9C%E8%B7%8C17%E5%85%83%23) `114.9K 🔥`
1. [曝黄子弘凡爸爸诈骗学生 (Exposed Huang Zihongfan’s father defrauded students)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E7%88%B8%E7%88%B8%E8%AF%88%E9%AA%97%E5%AD%A6%E7%94%9F%23) `87.6K 🔥`
1. [惊蛰无声](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `85.4K 🔥`
1. [裁判无视中国队员举手示意 (The referee ignored the Chinese player’s raise of hands)](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%E6%97%A0%E8%A7%86%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%91%98%E4%B8%BE%E6%89%8B%E7%A4%BA%E6%84%8F%23) `186.1K 🔥` `-83%`
1. [深圳18岁CEO爆火后现状](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B318%E5%B2%81CEO%E7%88%86%E7%81%AB%E5%90%8E%E7%8E%B0%E7%8A%B6%23) `161.8K 🔥` `-52%`
1. [网红99元4斤带货牛肉自称假一赔万 (Internet celebrity sells 4 pounds of beef for 99 yuan, claiming to be fake and paying 10,000 yuan)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A299%E5%85%834%E6%96%A4%E5%B8%A6%E8%B4%A7%E7%89%9B%E8%82%89%E8%87%AA%E7%A7%B0%E5%81%87%E4%B8%80%E8%B5%94%E4%B8%87%23) `145.4K 🔥` `-23%`
1. [cbc解说林孝埈摔倒似脚下冰面裂开 (CBC explains that Lin Xiaoqun fell as if the ice beneath his feet cracked)](https://s.weibo.com/weibo?q=%23cbc%E8%A7%A3%E8%AF%B4%E6%9E%97%E5%AD%9D%E5%9F%88%E6%91%94%E5%80%92%E4%BC%BC%E8%84%9A%E4%B8%8B%E5%86%B0%E9%9D%A2%E8%A3%82%E5%BC%80%23) `117.0K 🔥` `-46%`
1. [电影镖人新春版特别预告](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E9%95%96%E4%BA%BA%E6%96%B0%E6%98%A5%E7%89%88%E7%89%B9%E5%88%AB%E9%A2%84%E5%91%8A%23) `116.9K 🔥` `-23%`
1. [黄子韬回应扇了徐艺洋](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9B%9E%E5%BA%94%E6%89%87%E4%BA%86%E5%BE%90%E8%89%BA%E6%B4%8B%23) `116.4K 🔥` `-38%`
1. [留几手聊葛夕上春晚](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E8%81%8A%E8%91%9B%E5%A4%95%E4%B8%8A%E6%98%A5%E6%99%9A%23) `116.0K 🔥` `-38%`
1. [为什么朋友圈没人秀恩爱了 (Why is no one showing affection in the circle of friends anymore?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B2%A1%E4%BA%BA%E7%A7%80%E6%81%A9%E7%88%B1%E4%BA%86%23) `87.8K 🔥` `-59%`
1. [王一博太燃根本拦不住](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%A4%AA%E7%87%83%E6%A0%B9%E6%9C%AC%E6%8B%A6%E4%B8%8D%E4%BD%8F%23) `87.0K 🔥` `-59%`
1. [张凌赫超话20秒语音](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B6%85%E8%AF%9D20%E7%A7%92%E8%AF%AD%E9%9F%B3%23) `79.9K 🔥` `-22%`

Updated at 2026-02-15 13:04:18

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
