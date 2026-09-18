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

1. [一千元班费引发的家长群大战](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8D%83%E5%85%83%E7%8F%AD%E8%B4%B9%E5%BC%95%E5%8F%91%E7%9A%84%E5%AE%B6%E9%95%BF%E7%BE%A4%E5%A4%A7%E6%88%98%23) `1.7M 🔥` `NEW`
1. [原来百家讲坛是真的在教东西](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%99%BE%E5%AE%B6%E8%AE%B2%E5%9D%9B%E6%98%AF%E7%9C%9F%E7%9A%84%E5%9C%A8%E6%95%99%E4%B8%9C%E8%A5%BF%23) `976.1K 🔥` `NEW`
1. [每个中国人都不能忘记九一八](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%B8%AA%E4%B8%AD%E5%9B%BD%E4%BA%BA%E9%83%BD%E4%B8%8D%E8%83%BD%E5%BF%98%E8%AE%B0%E4%B9%9D%E4%B8%80%E5%85%AB%23) `789.1K 🔥` `NEW`
1. [十一高铁票涨价](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%80%E9%AB%98%E9%93%81%E7%A5%A8%E6%B6%A8%E4%BB%B7%23) `780.7K 🔥` `NEW`
1. [梅毒被称为皮肤性病科模仿大师](https://s.weibo.com/weibo?q=%23%E6%A2%85%E6%AF%92%E8%A2%AB%E7%A7%B0%E4%B8%BA%E7%9A%AE%E8%82%A4%E6%80%A7%E7%97%85%E7%A7%91%E6%A8%A1%E4%BB%BF%E5%A4%A7%E5%B8%88%23) `663.1K 🔥` `NEW`
1. [人民币升破6.7](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%B8%81%E5%8D%87%E7%A0%B46.7%23) `627.2K 🔥` `NEW`
1. [12306回应国庆高铁票涨价](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E5%9B%BD%E5%BA%86%E9%AB%98%E9%93%81%E7%A5%A8%E6%B6%A8%E4%BB%B7%23) `440.9K 🔥` `NEW`
1. [网传2026湾区升明月节目单](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A02026%E6%B9%BE%E5%8C%BA%E5%8D%87%E6%98%8E%E6%9C%88%E8%8A%82%E7%9B%AE%E5%8D%95%23) `386.1K 🔥` `NEW`
1. [坠亡幼童父亲称出殡按最高规格](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E7%88%B6%E4%BA%B2%E7%A7%B0%E5%87%BA%E6%AE%A1%E6%8C%89%E6%9C%80%E9%AB%98%E8%A7%84%E6%A0%BC%23) `382.9K 🔥` `NEW`
1. [诬告小孩者被滴滴司机反告](https://s.weibo.com/weibo?q=%23%E8%AF%AC%E5%91%8A%E5%B0%8F%E5%AD%A9%E8%80%85%E8%A2%AB%E6%BB%B4%E6%BB%B4%E5%8F%B8%E6%9C%BA%E5%8F%8D%E5%91%8A%23) `381.4K 🔥` `NEW`
1. [冯绍峰脸怎么了](https://s.weibo.com/weibo?q=%23%E5%86%AF%E7%BB%8D%E5%B3%B0%E8%84%B8%E6%80%8E%E4%B9%88%E4%BA%86%23) `378.4K 🔥` `NEW`
1. [iPhone18Pro黄牛一天一个价](https://s.weibo.com/weibo?q=%23iPhone18Pro%E9%BB%84%E7%89%9B%E4%B8%80%E5%A4%A9%E4%B8%80%E4%B8%AA%E4%BB%B7%23) `361.3K 🔥` `NEW`
1. [广东两地被曝硫磺熏笋](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%B8%A4%E5%9C%B0%E8%A2%AB%E6%9B%9D%E7%A1%AB%E7%A3%BA%E7%86%8F%E7%AC%8B%23) `342.1K 🔥` `NEW`
1. [广西孙子无血缘案奶奶听证后晕倒](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%AD%99%E5%AD%90%E6%97%A0%E8%A1%80%E7%BC%98%E6%A1%88%E5%A5%B6%E5%A5%B6%E5%90%AC%E8%AF%81%E5%90%8E%E6%99%95%E5%80%92%23) `331.5K 🔥` `NEW`
1. [月薪4万就是每天都有1333](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA4%E4%B8%87%E5%B0%B1%E6%98%AF%E6%AF%8F%E5%A4%A9%E9%83%BD%E6%9C%891333%23) `312.0K 🔥` `NEW`
1. [我国楼市进入存量时代](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%A5%BC%E5%B8%82%E8%BF%9B%E5%85%A5%E5%AD%98%E9%87%8F%E6%97%B6%E4%BB%A3%23) `291.3K 🔥` `NEW`
1. [生娃后失明失聪女子妹妹称不生小孩](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%A8%83%E5%90%8E%E5%A4%B1%E6%98%8E%E5%A4%B1%E8%81%AA%E5%A5%B3%E5%AD%90%E5%A6%B9%E5%A6%B9%E7%A7%B0%E4%B8%8D%E7%94%9F%E5%B0%8F%E5%AD%A9%23) `285.4K 🔥` `NEW`
1. [黄牛在西湖苹果店门口喊价抢单](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%89%9B%E5%9C%A8%E8%A5%BF%E6%B9%96%E8%8B%B9%E6%9E%9C%E5%BA%97%E9%97%A8%E5%8F%A3%E5%96%8A%E4%BB%B7%E6%8A%A2%E5%8D%95%23) `284.9K 🔥` `NEW`
1. [曝何瑞贤有孩子了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%95%E7%91%9E%E8%B4%A4%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23) `284.3K 🔥` `NEW`
1. [iPhone18换一万斤粮食](https://s.weibo.com/weibo?q=%23iPhone18%E6%8D%A2%E4%B8%80%E4%B8%87%E6%96%A4%E7%B2%AE%E9%A3%9F%23) `284.0K 🔥` `NEW`
1. [不要去回避人生课题](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%8E%BB%E5%9B%9E%E9%81%BF%E4%BA%BA%E7%94%9F%E8%AF%BE%E9%A2%98%23) `283.6K 🔥` `NEW`
1. [冲奖剧怎么了](https://s.weibo.com/weibo?q=%23%E5%86%B2%E5%A5%96%E5%89%A7%E6%80%8E%E4%B9%88%E4%BA%86%23) `283.6K 🔥` `NEW`
1. [粉笔最新小作文被指不尊重女性](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E6%9C%80%E6%96%B0%E5%B0%8F%E4%BD%9C%E6%96%87%E8%A2%AB%E6%8C%87%E4%B8%8D%E5%B0%8A%E9%87%8D%E5%A5%B3%E6%80%A7%23) `281.5K 🔥` `NEW`
1. [兰香如故三小姐不是真心想救老二](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E4%B8%89%E5%B0%8F%E5%A7%90%E4%B8%8D%E6%98%AF%E7%9C%9F%E5%BF%83%E6%83%B3%E6%95%91%E8%80%81%E4%BA%8C%23) `278.7K 🔥` `NEW`
1. [床虱酒店地图](https://s.weibo.com/weibo?q=%23%E5%BA%8A%E8%99%B1%E9%85%92%E5%BA%97%E5%9C%B0%E5%9B%BE%23) `256.8K 🔥` `NEW`
1. [南医大学生坠亡事件造谣账号被处置](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%8C%BB%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%9D%A0%E4%BA%A1%E4%BA%8B%E4%BB%B6%E9%80%A0%E8%B0%A3%E8%B4%A6%E5%8F%B7%E8%A2%AB%E5%A4%84%E7%BD%AE%23) `255.3K 🔥` `NEW`
1. [人一旦独居就会解锁过日子系统](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E7%8B%AC%E5%B1%85%E5%B0%B1%E4%BC%9A%E8%A7%A3%E9%94%81%E8%BF%87%E6%97%A5%E5%AD%90%E7%B3%BB%E7%BB%9F%23) `255.3K 🔥` `NEW`
1. [查监控才知道猫为啥钻宝宝被窝](https://s.weibo.com/weibo?q=%23%E6%9F%A5%E7%9B%91%E6%8E%A7%E6%89%8D%E7%9F%A5%E9%81%93%E7%8C%AB%E4%B8%BA%E5%95%A5%E9%92%BB%E5%AE%9D%E5%AE%9D%E8%A2%AB%E7%AA%9D%23) `255.2K 🔥` `NEW`
1. [中国男篮918晚对阵日本男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE918%E6%99%9A%E5%AF%B9%E9%98%B5%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE%23) `251.0K 🔥` `NEW`
1. [日本加息](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8A%A0%E6%81%AF%23) `242.7K 🔥` `NEW`
1. [牛都知道不能从它身上下来](https://s.weibo.com/weibo?q=%23%E7%89%9B%E9%83%BD%E7%9F%A5%E9%81%93%E4%B8%8D%E8%83%BD%E4%BB%8E%E5%AE%83%E8%BA%AB%E4%B8%8A%E4%B8%8B%E6%9D%A5%23) `211.8K 🔥` `NEW`
1. [兰香如故赐婚只有大爷自己开心](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%B5%90%E5%A9%9A%E5%8F%AA%E6%9C%89%E5%A4%A7%E7%88%B7%E8%87%AA%E5%B7%B1%E5%BC%80%E5%BF%83%23) `200.8K 🔥` `NEW`
1. [维嘉的脸是开源了吗](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%98%89%E7%9A%84%E8%84%B8%E6%98%AF%E5%BC%80%E6%BA%90%E4%BA%86%E5%90%97%23) `190.4K 🔥` `NEW`
1. [中国射击队因酒店远不参加亚运开幕式](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%84%E5%87%BB%E9%98%9F%E5%9B%A0%E9%85%92%E5%BA%97%E8%BF%9C%E4%B8%8D%E5%8F%82%E5%8A%A0%E4%BA%9A%E8%BF%90%E5%BC%80%E5%B9%95%E5%BC%8F%23) `189.0K 🔥` `NEW`
1. [狗狗目睹抓狗现场吓到不敢动](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E7%9B%AE%E7%9D%B9%E6%8A%93%E7%8B%97%E7%8E%B0%E5%9C%BA%E5%90%93%E5%88%B0%E4%B8%8D%E6%95%A2%E5%8A%A8%23) `183.9K 🔥` `NEW`
1. [30岁是人生的一道分水岭](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E6%98%AF%E4%BA%BA%E7%94%9F%E7%9A%84%E4%B8%80%E9%81%93%E5%88%86%E6%B0%B4%E5%B2%AD%23) `179.1K 🔥` `NEW`
1. [林大爷强娶兰香为妻](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%A4%A7%E7%88%B7%E5%BC%BA%E5%A8%B6%E5%85%B0%E9%A6%99%E4%B8%BA%E5%A6%BB%23) `173.2K 🔥` `NEW`
1. [美国小孩发现了老干妈的新吃法](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B0%8F%E5%AD%A9%E5%8F%91%E7%8E%B0%E4%BA%86%E8%80%81%E5%B9%B2%E5%A6%88%E7%9A%84%E6%96%B0%E5%90%83%E6%B3%95%23) `168.2K 🔥` `NEW`
1. [只说给到6500绝口不提怎么拿](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E8%AF%B4%E7%BB%99%E5%88%B06500%E7%BB%9D%E5%8F%A3%E4%B8%8D%E6%8F%90%E6%80%8E%E4%B9%88%E6%8B%BF%23) `166.3K 🔥` `NEW`
1. [刘雯去北极也要煮小米粥](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E5%8E%BB%E5%8C%97%E6%9E%81%E4%B9%9F%E8%A6%81%E7%85%AE%E5%B0%8F%E7%B1%B3%E7%B2%A5%23) `165.5K 🔥` `NEW`
1. [卖豆浆何必靠丝袜](https://s.weibo.com/weibo?q=%23%E5%8D%96%E8%B1%86%E6%B5%86%E4%BD%95%E5%BF%85%E9%9D%A0%E4%B8%9D%E8%A2%9C%23) `164.4K 🔥` `NEW`
1. [妈妈嘱咐双胞胎一个别惹事一个别怂](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%98%B1%E5%92%90%E5%8F%8C%E8%83%9E%E8%83%8E%E4%B8%80%E4%B8%AA%E5%88%AB%E6%83%B9%E4%BA%8B%E4%B8%80%E4%B8%AA%E5%88%AB%E6%80%82%23) `158.8K 🔥` `NEW`
1. [小猫寄养五天以为主人不要它了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%AF%84%E5%85%BB%E4%BA%94%E5%A4%A9%E4%BB%A5%E4%B8%BA%E4%B8%BB%E4%BA%BA%E4%B8%8D%E8%A6%81%E5%AE%83%E4%BA%86%23) `145.4K 🔥` `NEW`
1. [女方拒绝亲子鉴定法院没办法](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%96%B9%E6%8B%92%E7%BB%9D%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%E6%B3%95%E9%99%A2%E6%B2%A1%E5%8A%9E%E6%B3%95%23) `145.3K 🔥` `NEW`
1. [硫磺竹笋](https://s.weibo.com/weibo?q=%23%E7%A1%AB%E7%A3%BA%E7%AB%B9%E7%AC%8B%23) `140.4K 🔥` `NEW`
1. [我们来了 刘雯](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%20%E5%88%98%E9%9B%AF%23) `715.8K 🔥` `+142%`
1. [UFO高速飞过墨西哥城上空](https://s.weibo.com/weibo?q=%23UFO%E9%AB%98%E9%80%9F%E9%A3%9E%E8%BF%87%E5%A2%A8%E8%A5%BF%E5%93%A5%E5%9F%8E%E4%B8%8A%E7%A9%BA%23) `285.4K 🔥` `+63%`
1. [GEO终于有标准了](https://s.weibo.com/weibo?q=%23GEO%E7%BB%88%E4%BA%8E%E6%9C%89%E6%A0%87%E5%87%86%E4%BA%86%23) `783.2K 🔥`
1. [曝85花和老公已离婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D85%E8%8A%B1%E5%92%8C%E8%80%81%E5%85%AC%E5%B7%B2%E7%A6%BB%E5%A9%9A%23) `218.5K 🔥`
1. [上1休1上5休3](https://s.weibo.com/weibo?q=%23%E4%B8%8A1%E4%BC%911%E4%B8%8A5%E4%BC%913%23) `284.6K 🔥` `-79%`
1. [918](https://s.weibo.com/weibo?q=%23918%23) `255.5K 🔥` `-79%`

Updated at 2026-09-18 13:44:57

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
