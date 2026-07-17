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

1. [发现好多人开空调抠抠搜搜的 (I found a lot of people turning on the air conditioner and fussing about it.)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A5%BD%E5%A4%9A%E4%BA%BA%E5%BC%80%E7%A9%BA%E8%B0%83%E6%8A%A0%E6%8A%A0%E6%90%9C%E6%90%9C%E7%9A%84%23) `1.2M 🔥` `NEW`
1. [2026世界人工智能大会何以圈粉](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%A4%A7%E4%BC%9A%E4%BD%95%E4%BB%A5%E5%9C%88%E7%B2%89%23) `733.4K 🔥` `NEW`
1. [法国替补出战季军战](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%9B%BF%E8%A1%A5%E5%87%BA%E6%88%98%E5%AD%A3%E5%86%9B%E6%88%98%23) `644.7K 🔥` `NEW`
1. [A股正迎来年内难得的黄金买点](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%AD%A3%E8%BF%8E%E6%9D%A5%E5%B9%B4%E5%86%85%E9%9A%BE%E5%BE%97%E7%9A%84%E9%BB%84%E9%87%91%E4%B9%B0%E7%82%B9%23) `544.3K 🔥` `NEW`
1. [八仙 暑期档最大黑马](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%20%E6%9A%91%E6%9C%9F%E6%A1%A3%E6%9C%80%E5%A4%A7%E9%BB%91%E9%A9%AC%23) `432.1K 🔥` `NEW`
1. [阿媒质疑赖斯三次捂嘴未被处罚](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%AA%92%E8%B4%A8%E7%96%91%E8%B5%96%E6%96%AF%E4%B8%89%E6%AC%A1%E6%8D%82%E5%98%B4%E6%9C%AA%E8%A2%AB%E5%A4%84%E7%BD%9A%23) `428.1K 🔥` `NEW`
1. [对虞书欣的身高有了实感](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9A%84%E8%BA%AB%E9%AB%98%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `425.8K 🔥` `NEW`
1. [创业板大跌引满仓抄底](https://s.weibo.com/weibo?q=%23%E5%88%9B%E4%B8%9A%E6%9D%BF%E5%A4%A7%E8%B7%8C%E5%BC%95%E6%BB%A1%E4%BB%93%E6%8A%84%E5%BA%95%23) `421.6K 🔥` `NEW`
1. [张极受伤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9E%81%E5%8F%97%E4%BC%A4%23) `418.3K 🔥` `NEW`
1. [穆祉丞指挥王橹杰撕名牌](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%8C%87%E6%8C%A5%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%92%95%E5%90%8D%E7%89%8C%23) `417.5K 🔥` `NEW`
1. [西红柿炒蛋在日本火了 (Tomato scrambled eggs are popular in Japan)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%BA%A2%E6%9F%BF%E7%82%92%E8%9B%8B%E5%9C%A8%E6%97%A5%E6%9C%AC%E7%81%AB%E4%BA%86%23) `415.0K 🔥` `NEW`
1. [陈瑶开车张月坐副驾](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%BC%80%E8%BD%A6%E5%BC%A0%E6%9C%88%E5%9D%90%E5%89%AF%E9%A9%BE%23) `411.5K 🔥` `NEW`
1. [王俊凯演唱会免费提供女性用品](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%85%8D%E8%B4%B9%E6%8F%90%E4%BE%9B%E5%A5%B3%E6%80%A7%E7%94%A8%E5%93%81%23) `410.9K 🔥` `NEW`
1. [LV五年告了1691次是维权还是垄断](https://s.weibo.com/weibo?q=%23LV%E4%BA%94%E5%B9%B4%E5%91%8A%E4%BA%861691%E6%AC%A1%E6%98%AF%E7%BB%B4%E6%9D%83%E8%BF%98%E6%98%AF%E5%9E%84%E6%96%AD%23) `387.2K 🔥` `NEW`
1. [博主捏造小米SU7测评视频被判刑](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E6%8D%8F%E9%80%A0%E5%B0%8F%E7%B1%B3SU7%E6%B5%8B%E8%AF%84%E8%A7%86%E9%A2%91%E8%A2%AB%E5%88%A4%E5%88%91%23) `376.7K 🔥` `NEW`
1. [中方没有兴趣也从未干涉美国大选](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E6%B2%A1%E6%9C%89%E5%85%B4%E8%B6%A3%E4%B9%9F%E4%BB%8E%E6%9C%AA%E5%B9%B2%E6%B6%89%E7%BE%8E%E5%9B%BD%E5%A4%A7%E9%80%89%23) `373.8K 🔥` `NEW`
1. [王橹杰饭撒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%A5%AD%E6%92%92%23) `371.3K 🔥` `NEW`
1. [左航把穆祉丞撕了](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E6%8A%8A%E7%A9%86%E7%A5%89%E4%B8%9E%E6%92%95%E4%BA%86%23) `327.0K 🔥` `NEW`
1. [16位诺贝尔奖得主联名发出AI警告](https://s.weibo.com/weibo?q=%2316%E4%BD%8D%E8%AF%BA%E8%B4%9D%E5%B0%94%E5%A5%96%E5%BE%97%E4%B8%BB%E8%81%94%E5%90%8D%E5%8F%91%E5%87%BAAI%E8%AD%A6%E5%91%8A%23) `325.7K 🔥` `NEW`
1. [网传迪丽热巴窦骁加盟破春光](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AA%A6%E9%AA%81%E5%8A%A0%E7%9B%9F%E7%A0%B4%E6%98%A5%E5%85%89%23) `303.9K 🔥` `NEW`
1. [这下全商场都知道了 (Now the whole mall knows about it)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8B%E5%85%A8%E5%95%86%E5%9C%BA%E9%83%BD%E7%9F%A5%E9%81%93%E4%BA%86%23) `240.9K 🔥` `NEW`
1. [虞书欣给十个勤天送礼物](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%BB%99%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E9%80%81%E7%A4%BC%E7%89%A9%23) `218.8K 🔥` `NEW`
1. [孟子义李昀锐 合体活动](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%20%E5%90%88%E4%BD%93%E6%B4%BB%E5%8A%A8%23) `214.4K 🔥` `NEW`
1. [向太说徐克至今没有孩子](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%BE%90%E5%85%8B%E8%87%B3%E4%BB%8A%E6%B2%A1%E6%9C%89%E5%AD%A9%E5%AD%90%23) `209.9K 🔥` `NEW`
1. [莎头被问对阵夫妻档反应呆萌](https://s.weibo.com/weibo?q=%23%E8%8E%8E%E5%A4%B4%E8%A2%AB%E9%97%AE%E5%AF%B9%E9%98%B5%E5%A4%AB%E5%A6%BB%E6%A1%A3%E5%8F%8D%E5%BA%94%E5%91%86%E8%90%8C%23) `207.6K 🔥` `NEW`
1. [唐嫣ccd好美](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3ccd%E5%A5%BD%E7%BE%8E%23) `195.6K 🔥` `NEW`
1. [陈浚铭摔了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%E6%91%94%E4%BA%86%23) `190.5K 🔥` `NEW`
1. [张小斐迪丽热巴这段不像演的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E6%AE%B5%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `187.6K 🔥` `NEW`
1. [峰哥称不再点评A股](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E7%A7%B0%E4%B8%8D%E5%86%8D%E7%82%B9%E8%AF%84A%E8%82%A1%23) `185.6K 🔥` `NEW`
1. [这才是打工人需要的工作交接](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E6%89%93%E5%B7%A5%E4%BA%BA%E9%9C%80%E8%A6%81%E7%9A%84%E5%B7%A5%E4%BD%9C%E4%BA%A4%E6%8E%A5%23) `182.0K 🔥` `NEW`
1. [选伴侣要想到父母离世那天 (When choosing a partner, think about the day your parents died)](https://s.weibo.com/weibo?q=%23%E9%80%89%E4%BC%B4%E4%BE%A3%E8%A6%81%E6%83%B3%E5%88%B0%E7%88%B6%E6%AF%8D%E7%A6%BB%E4%B8%96%E9%82%A3%E5%A4%A9%23) `179.7K 🔥` `NEW`
1. [重庆彭水山体垮塌今晚预计有大暴雨](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%9E%AE%E5%A1%8C%E4%BB%8A%E6%99%9A%E9%A2%84%E8%AE%A1%E6%9C%89%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `178.3K 🔥` `NEW`
1. [没种过月季的人真不知道](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E7%A7%8D%E8%BF%87%E6%9C%88%E5%AD%A3%E7%9A%84%E4%BA%BA%E7%9C%9F%E4%B8%8D%E7%9F%A5%E9%81%93%23) `178.1K 🔥` `NEW`
1. [朱苏蒙眼撕名牌](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%8B%8F%E8%92%99%E7%9C%BC%E6%92%95%E5%90%8D%E7%89%8C%23) `173.2K 🔥` `NEW`
1. [牛冠凯段冬妍逆转晋级8强](https://s.weibo.com/weibo?q=%23%E7%89%9B%E5%86%A0%E5%87%AF%E6%AE%B5%E5%86%AC%E5%A6%8D%E9%80%86%E8%BD%AC%E6%99%8B%E7%BA%A78%E5%BC%BA%23) `172.8K 🔥` `NEW`
1. [TF运动会 撕名牌](https://s.weibo.com/weibo?q=%23TF%E8%BF%90%E5%8A%A8%E4%BC%9A%20%E6%92%95%E5%90%8D%E7%89%8C%23) `171.8K 🔥` `NEW`
1. [重庆彭水山体垮塌已救出10人](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%9E%AE%E5%A1%8C%E5%B7%B2%E6%95%91%E5%87%BA10%E4%BA%BA%23) `150.7K 🔥` `NEW`
1. [上京东买功夫女足电影票 (Buy Kung Fu Girls movie tickets on JD.com)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%AC%E4%B8%9C%E4%B9%B0%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%94%B5%E5%BD%B1%E7%A5%A8%23) `710.3K 🔥` `+28%`
1. [建议大家少喝肉汤 (It is recommended that you drink less broth)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%B0%91%E5%96%9D%E8%82%89%E6%B1%A4%23) `434.5K 🔥`
1. [孙燕姿 曲婉婷](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%20%E6%9B%B2%E5%A9%89%E5%A9%B7%23) `424.4K 🔥`
1. [野狗骨头改编 删掉男主情史](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%94%B9%E7%BC%96%20%E5%88%A0%E6%8E%89%E7%94%B7%E4%B8%BB%E6%83%85%E5%8F%B2%23) `154.8K 🔥`
1. [两只老虎的歌词终于解密了](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%8F%AA%E8%80%81%E8%99%8E%E7%9A%84%E6%AD%8C%E8%AF%8D%E7%BB%88%E4%BA%8E%E8%A7%A3%E5%AF%86%E4%BA%86%23) `1.5M 🔥` `-51%`
1. [以后大家拼的就是身体了 (From now on, everyone will be fighting for their bodies.)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%A4%A7%E5%AE%B6%E6%8B%BC%E7%9A%84%E5%B0%B1%E6%98%AF%E8%BA%AB%E4%BD%93%E4%BA%86%23) `476.3K 🔥` `-43%`
1. [重庆彭水山体垮塌](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%9E%AE%E5%A1%8C%23) `434.2K 🔥` `-37%`
1. [白鹿官方工作室发文](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AE%98%E6%96%B9%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E6%96%87%23) `325.6K 🔥` `-34%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `227.9K 🔥` `-58%`
1. [官方回应气象台不敢报40度](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B0%94%E8%B1%A1%E5%8F%B0%E4%B8%8D%E6%95%A2%E6%8A%A540%E5%BA%A6%23) `211.0K 🔥` `-68%`
1. [男子帮台湾游客拍照竟是失联的大伯](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B8%AE%E5%8F%B0%E6%B9%BE%E6%B8%B8%E5%AE%A2%E6%8B%8D%E7%85%A7%E7%AB%9F%E6%98%AF%E5%A4%B1%E8%81%94%E7%9A%84%E5%A4%A7%E4%BC%AF%23) `188.6K 🔥` `-61%`
1. [BLG申请世一上商标](https://s.weibo.com/weibo?q=%23BLG%E7%94%B3%E8%AF%B7%E4%B8%96%E4%B8%80%E4%B8%8A%E5%95%86%E6%A0%87%23) `171.8K 🔥` `-72%`
1. [美甲的天敌竟然是小龙虾 (The natural enemy of manicure is crayfish)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%94%B2%E7%9A%84%E5%A4%A9%E6%95%8C%E7%AB%9F%E7%84%B6%E6%98%AF%E5%B0%8F%E9%BE%99%E8%99%BE%23) `163.6K 🔥` `-34%`
1. [小黄豆抢蔡徐坤的票卡住了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86%E6%8A%A2%E8%94%A1%E5%BE%90%E5%9D%A4%E7%9A%84%E7%A5%A8%E5%8D%A1%E4%BD%8F%E4%BA%86%23) `150.8K 🔥` `-74%`

Updated at 2026-07-17 16:57:33

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
