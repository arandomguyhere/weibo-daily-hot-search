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

1. [奚梦瑶婚礼 (Xi Mengyao's wedding)](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%23) `241.5K 🔥` `NEW`
1. [杨紫 豆包](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E8%B1%86%E5%8C%85%23) `240.3K 🔥` `NEW`
1. [张凌赫与名媛合影](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%8E%E5%90%8D%E5%AA%9B%E5%90%88%E5%BD%B1%23) `236.3K 🔥` `NEW`
1. [向太说真正有钱人不会给小孩买名牌](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E7%9C%9F%E6%AD%A3%E6%9C%89%E9%92%B1%E4%BA%BA%E4%B8%8D%E4%BC%9A%E7%BB%99%E5%B0%8F%E5%AD%A9%E4%B9%B0%E5%90%8D%E7%89%8C%23) `233.6K 🔥` `NEW`
1. [网友晒田曦薇初中毕业照](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%99%92%E7%94%B0%E6%9B%A6%E8%96%87%E5%88%9D%E4%B8%AD%E6%AF%95%E4%B8%9A%E7%85%A7%23) `233.3K 🔥` `NEW`
1. [于正 晚晚](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%20%E6%99%9A%E6%99%9A%23) `227.7K 🔥` `NEW`
1. [何超欣与何猷君奚梦瑶婚礼合照](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E6%AC%A3%E4%B8%8E%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%E5%90%88%E7%85%A7%23) `225.8K 🔥` `NEW`
1. [美加墨世界杯倒计时10天](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8A%A0%E5%A2%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E5%80%92%E8%AE%A1%E6%97%B610%E5%A4%A9%23) `221.0K 🔥` `NEW`
1. [丈夫当街抢娃反怼清华女博士不要脸](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%BD%93%E8%A1%97%E6%8A%A2%E5%A8%83%E5%8F%8D%E6%80%BC%E6%B8%85%E5%8D%8E%E5%A5%B3%E5%8D%9A%E5%A3%AB%E4%B8%8D%E8%A6%81%E8%84%B8%23) `220.4K 🔥` `NEW`
1. [黄仁勋官宣联手宇树造参考人形机器人](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%AE%98%E5%AE%A3%E8%81%94%E6%89%8B%E5%AE%87%E6%A0%91%E9%80%A0%E5%8F%82%E8%80%83%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `219.0K 🔥` `NEW`
1. [张凌赫小时候是学校合唱团的 (Zhang Linghe was a member of the school choir when he was a child)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B0%8F%E6%97%B6%E5%80%99%E6%98%AF%E5%AD%A6%E6%A0%A1%E5%90%88%E5%94%B1%E5%9B%A2%E7%9A%84%23) `216.8K 🔥` `NEW`
1. [晚晚疑似怀孕了](https://s.weibo.com/weibo?q=%23%E6%99%9A%E6%99%9A%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%E4%BA%86%23) `207.9K 🔥` `NEW`
1. [虞书欣晒小小欣](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%99%92%E5%B0%8F%E5%B0%8F%E6%AC%A3%23) `207.4K 🔥` `NEW`
1. [何超莲罕晒三房全家福](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%8E%B2%E7%BD%95%E6%99%92%E4%B8%89%E6%88%BF%E5%85%A8%E5%AE%B6%E7%A6%8F%23) `204.2K 🔥` `NEW`
1. [英伟达市值一夜大增3190亿美元](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC%E4%B8%80%E5%A4%9C%E5%A4%A7%E5%A2%9E3190%E4%BA%BF%E7%BE%8E%E5%85%83%23) `201.8K 🔥` `NEW`
1. [邓紫棋何超莲合照](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E4%BD%95%E8%B6%85%E8%8E%B2%E5%90%88%E7%85%A7%23) `196.1K 🔥` `NEW`
1. [那英带娃 王菲谢霆锋秀恩爱](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%B8%A6%E5%A8%83%20%E7%8E%8B%E8%8F%B2%E8%B0%A2%E9%9C%86%E9%94%8B%E7%A7%80%E6%81%A9%E7%88%B1%23) `195.0K 🔥` `NEW`
1. [豆包将正式付费 (Doubao will be officially paid)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%B0%86%E6%AD%A3%E5%BC%8F%E4%BB%98%E8%B4%B9%23) `857.2K 🔥` `+204%`
1. [豆包免费部分](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%85%8D%E8%B4%B9%E9%83%A8%E5%88%86%23) `638.3K 🔥` `+231%`
1. [长征十二号乙运载火箭首飞成功](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E5%8D%81%E4%BA%8C%E5%8F%B7%E4%B9%99%E8%BF%90%E8%BD%BD%E7%81%AB%E7%AE%AD%E9%A6%96%E9%A3%9E%E6%88%90%E5%8A%9F%23) `483.6K 🔥` `+225%`
1. [台湾岛内统一声浪持续高涨](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%B2%9B%E5%86%85%E7%BB%9F%E4%B8%80%E5%A3%B0%E6%B5%AA%E6%8C%81%E7%BB%AD%E9%AB%98%E6%B6%A8%23) `399.3K 🔥` `+694%`
1. [伊朗暂停通过中间人同美国对话 (Iran suspends talks with US through intermediaries)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9A%82%E5%81%9C%E9%80%9A%E8%BF%87%E4%B8%AD%E9%97%B4%E4%BA%BA%E5%90%8C%E7%BE%8E%E5%9B%BD%E5%AF%B9%E8%AF%9D%23) `256.8K 🔥` `+324%`
1. [人糊涂起来就这样莫名其妙](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B3%8A%E6%B6%82%E8%B5%B7%E6%9D%A5%E5%B0%B1%E8%BF%99%E6%A0%B7%E8%8E%AB%E5%90%8D%E5%85%B6%E5%A6%99%23) `245.3K 🔥` `+387%`
1. [黄仁勋称无所不能的电脑来了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0%E6%97%A0%E6%89%80%E4%B8%8D%E8%83%BD%E7%9A%84%E7%94%B5%E8%84%91%E6%9D%A5%E4%BA%86%23) `244.1K 🔥` `+388%`
1. [记者卧底500人群聊揭秘崩老头内幕](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E5%8D%A7%E5%BA%95500%E4%BA%BA%E7%BE%A4%E8%81%8A%E6%8F%AD%E7%A7%98%E5%B4%A9%E8%80%81%E5%A4%B4%E5%86%85%E5%B9%95%23) `243.8K 🔥` `+240%`
1. [白云机场一航班落地滑行58分钟](https://s.weibo.com/weibo?q=%23%E7%99%BD%E4%BA%91%E6%9C%BA%E5%9C%BA%E4%B8%80%E8%88%AA%E7%8F%AD%E8%90%BD%E5%9C%B0%E6%BB%91%E8%A1%8C58%E5%88%86%E9%92%9F%23) `242.7K 🔥` `+297%`
1. [梁靖崑说张本智和瞎忙活 (Liang Jingkun said Zhang Benzhi was busy working in vain)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E8%AF%B4%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%9E%8E%E5%BF%99%E6%B4%BB%23) `238.9K 🔥` `+376%`
1. [虞书欣演长剧导短剧](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%BC%94%E9%95%BF%E5%89%A7%E5%AF%BC%E7%9F%AD%E5%89%A7%23) `237.6K 🔥` `+369%`
1. [当努力型遇上天赋型](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%8A%AA%E5%8A%9B%E5%9E%8B%E9%81%87%E4%B8%8A%E5%A4%A9%E8%B5%8B%E5%9E%8B%23) `235.9K 🔥` `+365%`
1. [TOP 新疆](https://s.weibo.com/weibo?q=%23TOP%20%E6%96%B0%E7%96%86%23) `231.4K 🔥` `+365%`
1. [瑞幸把HelloKitty写成HeeloKitty](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E6%8A%8AHelloKitty%E5%86%99%E6%88%90HeeloKitty%23) `231.0K 🔥` `+279%`
1. [嫌潮汕火锅太淡欲写5000字差评 (I think Chaoshan hotpot is too bland and I want to write a 5,000-word negative review)](https://s.weibo.com/weibo?q=%23%E5%AB%8C%E6%BD%AE%E6%B1%95%E7%81%AB%E9%94%85%E5%A4%AA%E6%B7%A1%E6%AC%B2%E5%86%995000%E5%AD%97%E5%B7%AE%E8%AF%84%23) `229.0K 🔥` `+359%`
1. [大部分人都对尺寸没有概念 (Most people have no concept of size)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%83%A8%E5%88%86%E4%BA%BA%E9%83%BD%E5%AF%B9%E5%B0%BA%E5%AF%B8%E6%B2%A1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `226.7K 🔥` `+357%`
1. [俄5岁女童被男邻居强行抱走](https://s.weibo.com/weibo?q=%23%E4%BF%845%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%A2%AB%E7%94%B7%E9%82%BB%E5%B1%85%E5%BC%BA%E8%A1%8C%E6%8A%B1%E8%B5%B0%23) `224.4K 🔥` `+350%`
1. [这段话彻底杀死了我的钝感力 (This passage completely killed my insensitivity)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%BD%BB%E5%BA%95%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E9%92%9D%E6%84%9F%E5%8A%9B%23) `224.1K 🔥` `+352%`
1. [路边加微信KTV女孩可能是崩老头](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%BE%B9%E5%8A%A0%E5%BE%AE%E4%BF%A1KTV%E5%A5%B3%E5%AD%A9%E5%8F%AF%E8%83%BD%E6%98%AF%E5%B4%A9%E8%80%81%E5%A4%B4%23) `221.8K 🔥` `+345%`
1. [一个普通人的最大幸运](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%E4%BA%BA%E7%9A%84%E6%9C%80%E5%A4%A7%E5%B9%B8%E8%BF%90%23) `217.6K 🔥` `+339%`
1. [也就老虎换小猫早挠你了](https://s.weibo.com/weibo?q=%23%E4%B9%9F%E5%B0%B1%E8%80%81%E8%99%8E%E6%8D%A2%E5%B0%8F%E7%8C%AB%E6%97%A9%E6%8C%A0%E4%BD%A0%E4%BA%86%23) `214.9K 🔥` `+336%`
1. [产检发现性病丈夫认为妻子故意隐瞒](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E6%A3%80%E5%8F%91%E7%8E%B0%E6%80%A7%E7%97%85%E4%B8%88%E5%A4%AB%E8%AE%A4%E4%B8%BA%E5%A6%BB%E5%AD%90%E6%95%85%E6%84%8F%E9%9A%90%E7%9E%92%23) `214.2K 🔥` `+332%`
1. [日本菲律宾想联手偷](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%83%B3%E8%81%94%E6%89%8B%E5%81%B7%23) `212.4K 🔥` `+332%`
1. [田本昌看杨紫韩东君吻戏不舒服了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9C%AC%E6%98%8C%E7%9C%8B%E6%9D%A8%E7%B4%AB%E9%9F%A9%E4%B8%9C%E5%90%9B%E5%90%BB%E6%88%8F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `211.8K 🔥` `+332%`
1. [法国情侣夸中餐日本网民破防](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%83%85%E4%BE%A3%E5%A4%B8%E4%B8%AD%E9%A4%90%E6%97%A5%E6%9C%AC%E7%BD%91%E6%B0%91%E7%A0%B4%E9%98%B2%23) `210.7K 🔥` `+325%`
1. [37岁男子花200元换一个月陪聊](https://s.weibo.com/weibo?q=%2337%E5%B2%81%E7%94%B7%E5%AD%90%E8%8A%B1200%E5%85%83%E6%8D%A2%E4%B8%80%E4%B8%AA%E6%9C%88%E9%99%AA%E8%81%8A%23) `209.2K 🔥` `+320%`
1. [管泽元 我错过了什么](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%20%E6%88%91%E9%94%99%E8%BF%87%E4%BA%86%E4%BB%80%E4%B9%88%23) `205.9K 🔥` `+319%`
1. [王兴兴身家飙升至140亿元 (Wang Xingxing’s net worth soars to 14 billion yuan)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%85%B4%E5%85%B4%E8%BA%AB%E5%AE%B6%E9%A3%99%E5%8D%87%E8%87%B3140%E4%BA%BF%E5%85%83%23) `203.8K 🔥` `+316%`
1. [苏新皓歌手全民举荐第一 (Su Xinhao ranks first in the national recommendation for singers)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E6%AD%8C%E6%89%8B%E5%85%A8%E6%B0%91%E4%B8%BE%E8%8D%90%E7%AC%AC%E4%B8%80%23) `200.8K 🔥` `+306%`
1. [53岁脑死亡患者移植猪肝猪肾 (53-year-old brain-dead patient receives pig liver and pig kidney transplant)](https://s.weibo.com/weibo?q=%2353%E5%B2%81%E8%84%91%E6%AD%BB%E4%BA%A1%E6%82%A3%E8%80%85%E7%A7%BB%E6%A4%8D%E7%8C%AA%E8%82%9D%E7%8C%AA%E8%82%BE%23) `199.9K 🔥` `+305%`
1. [WE你要毁了LPL吗](https://s.weibo.com/weibo?q=%23WE%E4%BD%A0%E8%A6%81%E6%AF%81%E4%BA%86LPL%E5%90%97%23) `198.9K 🔥` `+300%`
1. [灵魂摆渡](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%23) `197.4K 🔥` `+300%`
1. [伊朗计划彻底封锁霍尔木兹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AE%A1%E5%88%92%E5%BD%BB%E5%BA%95%E5%B0%81%E9%94%81%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `194.8K 🔥` `+298%`

Updated at 2026-06-02 07:26:27

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
