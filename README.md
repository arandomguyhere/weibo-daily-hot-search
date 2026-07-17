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

1. [曲婉婷患癌 (Qu Wanting suffers from cancer)](https://s.weibo.com/weibo?q=%23%E6%9B%B2%E5%A9%89%E5%A9%B7%E6%82%A3%E7%99%8C%23) `7.6M 🔥` `NEW`
1. [重庆彭水山体垮塌](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%9E%AE%E5%A1%8C%23) `1.5M 🔥` `NEW`
1. [佛得角门将回应加盟迈阿密国际](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E5%9B%9E%E5%BA%94%E5%8A%A0%E7%9B%9F%E8%BF%88%E9%98%BF%E5%AF%86%E5%9B%BD%E9%99%85%23) `882.9K 🔥` `NEW`
1. [世界人工智能大会今天开幕](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%A4%A7%E4%BC%9A%E4%BB%8A%E5%A4%A9%E5%BC%80%E5%B9%95%23) `733.1K 🔥` `NEW`
1. [两只老虎的歌词终于解密了](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%8F%AA%E8%80%81%E8%99%8E%E7%9A%84%E6%AD%8C%E8%AF%8D%E7%BB%88%E4%BA%8E%E8%A7%A3%E5%AF%86%E4%BA%86%23) `723.0K 🔥` `NEW`
1. [林更新变特别出演](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%9B%B4%E6%96%B0%E5%8F%98%E7%89%B9%E5%88%AB%E5%87%BA%E6%BC%94%23) `700.2K 🔥` `NEW`
1. [LV老板被责令补税1.74亿元](https://s.weibo.com/weibo?q=%23LV%E8%80%81%E6%9D%BF%E8%A2%AB%E8%B4%A3%E4%BB%A4%E8%A1%A5%E7%A8%8E1.74%E4%BA%BF%E5%85%83%23) `674.7K 🔥` `NEW`
1. [WAIC2026](https://s.weibo.com/weibo?q=%23WAIC2026%23) `658.5K 🔥` `NEW`
1. [爱奇艺717官宣阵容](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA717%E5%AE%98%E5%AE%A3%E9%98%B5%E5%AE%B9%23) `657.5K 🔥` `NEW`
1. [怀孕女子疑因嫉妒捂死男友3岁女儿](https://s.weibo.com/weibo?q=%23%E6%80%80%E5%AD%95%E5%A5%B3%E5%AD%90%E7%96%91%E5%9B%A0%E5%AB%89%E5%A6%92%E6%8D%82%E6%AD%BB%E7%94%B7%E5%8F%8B3%E5%B2%81%E5%A5%B3%E5%84%BF%23) `640.1K 🔥` `NEW`
1. [疯狂星期四 送西瓜 (Crazy Thursday Giveaway Watermelon)](https://s.weibo.com/weibo?q=%23%E7%96%AF%E7%8B%82%E6%98%9F%E6%9C%9F%E5%9B%9B%20%E9%80%81%E8%A5%BF%E7%93%9C%23) `627.5K 🔥` `NEW`
1. [韩国惨遭AI泡沫绞杀局](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%83%A8%E9%81%ADAI%E6%B3%A1%E6%B2%AB%E7%BB%9E%E6%9D%80%E5%B1%80%23) `626.0K 🔥` `NEW`
1. [冉莹颖买了多少双高跟鞋](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E4%B9%B0%E4%BA%86%E5%A4%9A%E5%B0%91%E5%8F%8C%E9%AB%98%E8%B7%9F%E9%9E%8B%23) `619.3K 🔥` `NEW`
1. [阿根廷队未能按计划前往决赛城市](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E6%9C%AA%E8%83%BD%E6%8C%89%E8%AE%A1%E5%88%92%E5%89%8D%E5%BE%80%E5%86%B3%E8%B5%9B%E5%9F%8E%E5%B8%82%23) `615.6K 🔥` `NEW`
1. [孕妇捂死3岁女童最高或仅判无期](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E6%8D%82%E6%AD%BB3%E5%B2%81%E5%A5%B3%E7%AB%A5%E6%9C%80%E9%AB%98%E6%88%96%E4%BB%85%E5%88%A4%E6%97%A0%E6%9C%9F%23) `614.4K 🔥` `NEW`
1. [韩娱对待男性和女性的差异](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A8%B1%E5%AF%B9%E5%BE%85%E7%94%B7%E6%80%A7%E5%92%8C%E5%A5%B3%E6%80%A7%E7%9A%84%E5%B7%AE%E5%BC%82%23) `611.1K 🔥` `NEW`
1. [蔡徐坤 抢票](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%20%E6%8A%A2%E7%A5%A8%23) `606.2K 🔥` `NEW`
1. [A股长期来看还要创新高](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%95%BF%E6%9C%9F%E6%9D%A5%E7%9C%8B%E8%BF%98%E8%A6%81%E5%88%9B%E6%96%B0%E9%AB%98%23) `600.7K 🔥` `NEW`
1. [店主赠老顾客22元彩票中508万](https://s.weibo.com/weibo?q=%23%E5%BA%97%E4%B8%BB%E8%B5%A0%E8%80%81%E9%A1%BE%E5%AE%A222%E5%85%83%E5%BD%A9%E7%A5%A8%E4%B8%AD508%E4%B8%87%23) `599.8K 🔥` `NEW`
1. [雷军称小米增程亏电油耗很低](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A7%B0%E5%B0%8F%E7%B1%B3%E5%A2%9E%E7%A8%8B%E4%BA%8F%E7%94%B5%E6%B2%B9%E8%80%97%E5%BE%88%E4%BD%8E%23) `596.2K 🔥` `NEW`
1. [重庆彭水山体垮塌事故目击者发声 (Witnesses of Chongqing Pengshui mountain collapse accident speak out)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%9E%AE%E5%A1%8C%E4%BA%8B%E6%95%85%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `593.3K 🔥` `NEW`
1. [种地吧有虞书欣](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%E6%9C%89%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `591.0K 🔥` `NEW`
1. [蔡徐坤澳门演唱会开售](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%BE%B3%E9%97%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BC%80%E5%94%AE%23) `581.3K 🔥` `NEW`
1. [时代峰峻运动会多名艺人身体不适](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%A4%9A%E5%90%8D%E8%89%BA%E4%BA%BA%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `578.7K 🔥` `NEW`
1. [ofo停更5年突然发文皮肤病援助](https://s.weibo.com/weibo?q=%23ofo%E5%81%9C%E6%9B%B45%E5%B9%B4%E7%AA%81%E7%84%B6%E5%8F%91%E6%96%87%E7%9A%AE%E8%82%A4%E7%97%85%E6%8F%B4%E5%8A%A9%23) `574.1K 🔥` `NEW`
1. [内娱明星眼里的虞书欣](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%98%8E%E6%98%9F%E7%9C%BC%E9%87%8C%E7%9A%84%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `567.2K 🔥` `NEW`
1. [长大后突然变成了父母的人脉](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E7%AA%81%E7%84%B6%E5%8F%98%E6%88%90%E4%BA%86%E7%88%B6%E6%AF%8D%E7%9A%84%E4%BA%BA%E8%84%89%23) `566.4K 🔥` `NEW`
1. [英格兰见到了上帝之脚](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E8%A7%81%E5%88%B0%E4%BA%86%E4%B8%8A%E5%B8%9D%E4%B9%8B%E8%84%9A%23) `561.6K 🔥` `NEW`
1. [如何判断自己该离职了](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD%E8%87%AA%E5%B7%B1%E8%AF%A5%E7%A6%BB%E8%81%8C%E4%BA%86%23) `560.0K 🔥` `NEW`
1. [建议大家少喝肉汤](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%B0%91%E5%96%9D%E8%82%89%E6%B1%A4%23) `556.9K 🔥` `NEW`
1. [重庆彭水山体垮塌有人员被埋 (Chongqing Pengshui mountain collapsed, some people were buried)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%9E%AE%E5%A1%8C%E6%9C%89%E4%BA%BA%E5%91%98%E8%A2%AB%E5%9F%8B%23) `554.2K 🔥` `NEW`
1. [职场里我最欣赏这种人](https://s.weibo.com/weibo?q=%23%E8%81%8C%E5%9C%BA%E9%87%8C%E6%88%91%E6%9C%80%E6%AC%A3%E8%B5%8F%E8%BF%99%E7%A7%8D%E4%BA%BA%23) `547.8K 🔥` `NEW`
1. [何穗陈伟霆儿子腿长](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E9%99%88%E4%BC%9F%E9%9C%86%E5%84%BF%E5%AD%90%E8%85%BF%E9%95%BF%23) `545.5K 🔥` `NEW`
1. [官方通报教师读博6年毕业前去世](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%95%99%E5%B8%88%E8%AF%BB%E5%8D%9A6%E5%B9%B4%E6%AF%95%E4%B8%9A%E5%89%8D%E5%8E%BB%E4%B8%96%23) `540.9K 🔥` `NEW`
1. [妈妈回应沐言不上娃综](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E6%B2%90%E8%A8%80%E4%B8%8D%E4%B8%8A%E5%A8%83%E7%BB%BC%23) `537.9K 🔥` `NEW`
1. [范丞丞藏不住事更藏不住香](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%8B%E6%9B%B4%E8%97%8F%E4%B8%8D%E4%BD%8F%E9%A6%99%23) `533.8K 🔥` `NEW`
1. [恋与深空宣发转战游戏内](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%AE%A3%E5%8F%91%E8%BD%AC%E6%88%98%E6%B8%B8%E6%88%8F%E5%86%85%23) `531.3K 🔥` `NEW`
1. [龚俊宋祖儿 等风热吻你](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E5%AE%8B%E7%A5%96%E5%84%BF%20%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `530.3K 🔥` `NEW`
1. [岛内民调称88%青年愿上战场结果翻车](https://s.weibo.com/weibo?q=%23%E5%B2%9B%E5%86%85%E6%B0%91%E8%B0%83%E7%A7%B088%25%E9%9D%92%E5%B9%B4%E6%84%BF%E4%B8%8A%E6%88%98%E5%9C%BA%E7%BB%93%E6%9E%9C%E7%BF%BB%E8%BD%A6%23) `526.2K 🔥` `NEW`
1. [有自媒体以挂简历形式预告官员落马](https://s.weibo.com/weibo?q=%23%E6%9C%89%E8%87%AA%E5%AA%92%E4%BD%93%E4%BB%A5%E6%8C%82%E7%AE%80%E5%8E%86%E5%BD%A2%E5%BC%8F%E9%A2%84%E5%91%8A%E5%AE%98%E5%91%98%E8%90%BD%E9%A9%AC%23) `523.5K 🔥` `NEW`
1. [特朗普确认将出席世界杯决赛 (Trump confirmed to attend World Cup final)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A1%AE%E8%AE%A4%E5%B0%86%E5%87%BA%E5%B8%AD%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `520.8K 🔥` `NEW`
1. [BOSS直聘暑期严打涉黄招聘](https://s.weibo.com/weibo?q=%23BOSS%E7%9B%B4%E8%81%98%E6%9A%91%E6%9C%9F%E4%B8%A5%E6%89%93%E6%B6%89%E9%BB%84%E6%8B%9B%E8%81%98%23) `516.0K 🔥` `NEW`
1. [不敢想王鹤棣孟子义这段播出时有多美味](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%95%A2%E6%83%B3%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AD%9F%E5%AD%90%E4%B9%89%E8%BF%99%E6%AE%B5%E6%92%AD%E5%87%BA%E6%97%B6%E6%9C%89%E5%A4%9A%E7%BE%8E%E5%91%B3%23) `514.3K 🔥` `NEW`
1. [三伏天减重食谱来了](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BC%8F%E5%A4%A9%E5%87%8F%E9%87%8D%E9%A3%9F%E8%B0%B1%E6%9D%A5%E4%BA%86%23) `512.1K 🔥` `NEW`
1. [A股水平仍处长期均值](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%B0%B4%E5%B9%B3%E4%BB%8D%E5%A4%84%E9%95%BF%E6%9C%9F%E5%9D%87%E5%80%BC%23) `508.3K 🔥` `NEW`
1. [法国队疑再次出现内讧](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%9F%E7%96%91%E5%86%8D%E6%AC%A1%E5%87%BA%E7%8E%B0%E5%86%85%E8%AE%A7%23) `504.5K 🔥` `NEW`
1. [白鹿或将转型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%88%96%E5%B0%86%E8%BD%AC%E5%9E%8B%23) `588.0K 🔥`
1. [油价](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%23) `583.5K 🔥`
1. [李登科说白鹿已经入局资本赛道了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E8%AF%B4%E7%99%BD%E9%B9%BF%E5%B7%B2%E7%BB%8F%E5%85%A5%E5%B1%80%E8%B5%84%E6%9C%AC%E8%B5%9B%E9%81%93%E4%BA%86%23) `571.0K 🔥`
1. [以后快递地址只写到小区](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%BF%AB%E9%80%92%E5%9C%B0%E5%9D%80%E5%8F%AA%E5%86%99%E5%88%B0%E5%B0%8F%E5%8C%BA%23) `609.1K 🔥` `-34%`
1. [沙特巨型西瓜为何国内少见 (Why are giant Saudi watermelons so rare in China?)](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9%E5%B7%A8%E5%9E%8B%E8%A5%BF%E7%93%9C%E4%B8%BA%E4%BD%95%E5%9B%BD%E5%86%85%E5%B0%91%E8%A7%81%23) `549.2K 🔥` `-38%`

Updated at 2026-07-17 12:26:20

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
