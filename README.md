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

1. [佳偶天成定档 (Couples are made in heaven)](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%E5%AE%9A%E6%A1%A3%23) `1.4M 🔥` `NEW`
1. [涉密单位人员下班闲聊致泄密](https://s.weibo.com/weibo?q=%23%E6%B6%89%E5%AF%86%E5%8D%95%E4%BD%8D%E4%BA%BA%E5%91%98%E4%B8%8B%E7%8F%AD%E9%97%B2%E8%81%8A%E8%87%B4%E6%B3%84%E5%AF%86%23) `915.5K 🔥` `NEW`
1. [万千气象看湖南](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E6%B9%96%E5%8D%97%23) `811.2K 🔥` `NEW`
1. [买点便宜衣服穿就显年轻了](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%82%B9%E4%BE%BF%E5%AE%9C%E8%A1%A3%E6%9C%8D%E7%A9%BF%E5%B0%B1%E6%98%BE%E5%B9%B4%E8%BD%BB%E4%BA%86%23) `805.9K 🔥` `NEW`
1. [伊朗油轮突破美国海上封锁](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%B2%B9%E8%BD%AE%E7%AA%81%E7%A0%B4%E7%BE%8E%E5%9B%BD%E6%B5%B7%E4%B8%8A%E5%B0%81%E9%94%81%23) `786.7K 🔥` `NEW`
1. [这句话让我决定每天多喝水了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%8F%A5%E8%AF%9D%E8%AE%A9%E6%88%91%E5%86%B3%E5%AE%9A%E6%AF%8F%E5%A4%A9%E5%A4%9A%E5%96%9D%E6%B0%B4%E4%BA%86%23) `715.3K 🔥` `NEW`
1. [入职第一周vs入职一年](https://s.weibo.com/weibo?q=%23%E5%85%A5%E8%81%8C%E7%AC%AC%E4%B8%80%E5%91%A8vs%E5%85%A5%E8%81%8C%E4%B8%80%E5%B9%B4%23) `699.1K 🔥` `NEW`
1. [张若昀钟楚曦领衔主演开端](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E9%92%9F%E6%A5%9A%E6%9B%A6%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%BC%80%E7%AB%AF%23) `544.9K 🔥` `NEW`
1. [全部暴露 孩子归谁](https://s.weibo.com/weibo?q=%23%E5%85%A8%E9%83%A8%E6%9A%B4%E9%9C%B2%20%E5%AD%A9%E5%AD%90%E5%BD%92%E8%B0%81%23) `530.5K 🔥` `NEW`
1. [邓紫棋患地中海贫血](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E6%82%A3%E5%9C%B0%E4%B8%AD%E6%B5%B7%E8%B4%AB%E8%A1%80%23) `519.6K 🔥` `NEW`
1. [綦美合潮牌 (Qimeihe trendy brand)](https://s.weibo.com/weibo?q=%23%E7%B6%A6%E7%BE%8E%E5%90%88%E6%BD%AE%E7%89%8C%23) `512.8K 🔥` `NEW`
1. [泰女子泼水节昏迷体内检出听话水](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%A5%B3%E5%AD%90%E6%B3%BC%E6%B0%B4%E8%8A%82%E6%98%8F%E8%BF%B7%E4%BD%93%E5%86%85%E6%A3%80%E5%87%BA%E5%90%AC%E8%AF%9D%E6%B0%B4%23) `509.4K 🔥` `NEW`
1. [王勉晒鹿晗拍立得合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8B%89%E6%99%92%E9%B9%BF%E6%99%97%E6%8B%8D%E7%AB%8B%E5%BE%97%E5%90%88%E7%85%A7%23) `485.6K 🔥` `NEW`
1. [方博以哈萨克斯坦球员身份注册WTT](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%8D%9A%E4%BB%A5%E5%93%88%E8%90%A8%E5%85%8B%E6%96%AF%E5%9D%A6%E7%90%83%E5%91%98%E8%BA%AB%E4%BB%BD%E6%B3%A8%E5%86%8CWTT%23) `450.3K 🔥` `NEW`
1. [雾里青官宣](https://s.weibo.com/weibo?q=%23%E9%9B%BE%E9%87%8C%E9%9D%92%E5%AE%98%E5%AE%A3%23) `416.8K 🔥` `NEW`
1. [小学生遭9人群殴岂能被白打](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%94%9F%E9%81%AD9%E4%BA%BA%E7%BE%A4%E6%AE%B4%E5%B2%82%E8%83%BD%E8%A2%AB%E7%99%BD%E6%89%93%23) `336.9K 🔥` `NEW`
1. [蔡徐坤的运动系质感美学](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E7%9A%84%E8%BF%90%E5%8A%A8%E7%B3%BB%E8%B4%A8%E6%84%9F%E7%BE%8E%E5%AD%A6%23) `311.2K 🔥` `NEW`
1. [黄金跳水暴跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%B3%E6%B0%B4%E6%9A%B4%E8%B7%8C%23) `303.4K 🔥` `NEW`
1. [迪丽热巴的幸运哲学](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E5%B9%B8%E8%BF%90%E5%93%B2%E5%AD%A6%23) `283.1K 🔥` `NEW`
1. [沙溢大儿子和女生逛街](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%BA%A2%E5%A4%A7%E5%84%BF%E5%AD%90%E5%92%8C%E5%A5%B3%E7%94%9F%E9%80%9B%E8%A1%97%23) `282.7K 🔥` `NEW`
1. [开拓者vs马刺 (Trail Blazers vs Spurs)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8B%93%E8%80%85vs%E9%A9%AC%E5%88%BA%23) `276.9K 🔥` `NEW`
1. [三位华人女数学家同时获奖](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BD%8D%E5%8D%8E%E4%BA%BA%E5%A5%B3%E6%95%B0%E5%AD%A6%E5%AE%B6%E5%90%8C%E6%97%B6%E8%8E%B7%E5%A5%96%23) `276.1K 🔥` `NEW`
1. [河北当地回应红色地下水灌溉麦田](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E5%BD%93%E5%9C%B0%E5%9B%9E%E5%BA%94%E7%BA%A2%E8%89%B2%E5%9C%B0%E4%B8%8B%E6%B0%B4%E7%81%8C%E6%BA%89%E9%BA%A6%E7%94%B0%23) `276.1K 🔥` `NEW`
1. [天才女友](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%23) `276.1K 🔥` `NEW`
1. [2026爱奇艺造梦片单](https://s.weibo.com/weibo?q=%232026%E7%88%B1%E5%A5%87%E8%89%BA%E9%80%A0%E6%A2%A6%E7%89%87%E5%8D%95%23) `274.5K 🔥` `NEW`
1. [24岁女研究生回应赢发呆比赛冠军](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E5%9B%9E%E5%BA%94%E8%B5%A2%E5%8F%91%E5%91%86%E6%AF%94%E8%B5%9B%E5%86%A0%E5%86%9B%23) `271.1K 🔥` `NEW`
1. [迪丽热巴两个卫蓝对手戏](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%A4%E4%B8%AA%E5%8D%AB%E8%93%9D%E5%AF%B9%E6%89%8B%E6%88%8F%23) `270.7K 🔥` `NEW`
1. [小城良方](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%23) `270.3K 🔥` `NEW`
1. [遭家暴俏黄蓉离婚给了前夫25万](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%AE%B6%E6%9A%B4%E4%BF%8F%E9%BB%84%E8%93%89%E7%A6%BB%E5%A9%9A%E7%BB%99%E4%BA%86%E5%89%8D%E5%A4%AB25%E4%B8%87%23) `241.4K 🔥` `NEW`
1. [折月亮首发预告](https://s.weibo.com/weibo?q=%23%E6%8A%98%E6%9C%88%E4%BA%AE%E9%A6%96%E5%8F%91%E9%A2%84%E5%91%8A%23) `237.0K 🔥` `NEW`
1. [碧血蝉预告 (Blue Blood Cicada trailer)](https://s.weibo.com/weibo?q=%23%E7%A2%A7%E8%A1%80%E8%9D%89%E9%A2%84%E5%91%8A%23) `233.4K 🔥` `NEW`
1. [杨紫家业婚服镜头](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%AE%B6%E4%B8%9A%E5%A9%9A%E6%9C%8D%E9%95%9C%E5%A4%B4%23) `229.6K 🔥` `NEW`
1. [玄彬孙艺珍儿子拍的夫妇照](https://s.weibo.com/weibo?q=%23%E7%8E%84%E5%BD%AC%E5%AD%99%E8%89%BA%E7%8F%8D%E5%84%BF%E5%AD%90%E6%8B%8D%E7%9A%84%E5%A4%AB%E5%A6%87%E7%85%A7%23) `216.9K 🔥` `NEW`
1. [iOS27全新Siri界面](https://s.weibo.com/weibo?q=%23iOS27%E5%85%A8%E6%96%B0Siri%E7%95%8C%E9%9D%A2%23) `214.8K 🔥` `NEW`
1. [多厂商仍未公开辅助驾驶里程](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%8E%82%E5%95%86%E4%BB%8D%E6%9C%AA%E5%85%AC%E5%BC%80%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E9%87%8C%E7%A8%8B%23) `211.6K 🔥` `NEW`
1. [豆包回应豆脚机器人](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%9B%9E%E5%BA%94%E8%B1%86%E8%84%9A%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `206.2K 🔥` `NEW`
1. [英伟达178美元黄仁勋毛衣走红](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE178%E7%BE%8E%E5%85%83%E9%BB%84%E4%BB%81%E5%8B%8B%E6%AF%9B%E8%A1%A3%E8%B5%B0%E7%BA%A2%23) `200.5K 🔥` `NEW`
1. [黄晓明一张含金量极高的合影](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E4%B8%80%E5%BC%A0%E5%90%AB%E9%87%91%E9%87%8F%E6%9E%81%E9%AB%98%E7%9A%84%E5%90%88%E5%BD%B1%23) `197.4K 🔥` `NEW`
1. [顶层花坛里拆出掩埋近30年白骨](https://s.weibo.com/weibo?q=%23%E9%A1%B6%E5%B1%82%E8%8A%B1%E5%9D%9B%E9%87%8C%E6%8B%86%E5%87%BA%E6%8E%A9%E5%9F%8B%E8%BF%9130%E5%B9%B4%E7%99%BD%E9%AA%A8%23) `196.2K 🔥` `NEW`
1. [姆巴佩代言东鹏补水啦 (Mbappe endorses Dongpeng to replenish water)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BB%A3%E8%A8%80%E4%B8%9C%E9%B9%8F%E8%A1%A5%E6%B0%B4%E5%95%A6%23) `726.1K 🔥` `+618%`
1. [程序员追不上机器人干脆开电瓶车跟](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E5%BA%8F%E5%91%98%E8%BF%BD%E4%B8%8D%E4%B8%8A%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B9%B2%E8%84%86%E5%BC%80%E7%94%B5%E7%93%B6%E8%BD%A6%E8%B7%9F%23) `544.3K 🔥` `+42%`
1. [业内对田曦薇的评价 (Industry comments on Tian Xiwei)](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E5%AF%B9%E7%94%B0%E6%9B%A6%E8%96%87%E7%9A%84%E8%AF%84%E4%BB%B7%23) `502.7K 🔥` `+49%`
1. [金像奖爆冷 (Academy Awards upset)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E7%88%86%E5%86%B7%23) `772.0K 🔥`
1. [李雨桐爆料薛之谦被拘谁该颤抖](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E7%88%86%E6%96%99%E8%96%9B%E4%B9%8B%E8%B0%A6%E8%A2%AB%E6%8B%98%E8%B0%81%E8%AF%A5%E9%A2%A4%E6%8A%96%23) `353.9K 🔥`
1. [五哈老舅回归 (Uncle Wuha returns)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%E8%80%81%E8%88%85%E5%9B%9E%E5%BD%92%23) `327.4K 🔥`
1. [张艺凡回应脱鞋合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%87%A1%E5%9B%9E%E5%BA%94%E8%84%B1%E9%9E%8B%E5%90%88%E7%85%A7%23) `288.6K 🔥`
1. [一小时不到只花了六分钟](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B0%8F%E6%97%B6%E4%B8%8D%E5%88%B0%E5%8F%AA%E8%8A%B1%E4%BA%86%E5%85%AD%E5%88%86%E9%92%9F%23) `282.9K 🔥`
1. [鹿晗 关晓彤](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `9.4M 🔥` `-37%`
1. [金银突发跳水](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E7%AA%81%E5%8F%91%E8%B7%B3%E6%B0%B4%23) `272.0K 🔥` `-24%`
1. [韩警方就中国女生被日男子骚扰致歉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E5%B0%B1%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E8%A2%AB%E6%97%A5%E7%94%B7%E5%AD%90%E9%AA%9A%E6%89%B0%E8%87%B4%E6%AD%89%23) `230.4K 🔥` `-41%`
1. [上班时间禁止偷吃同事](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%97%B6%E9%97%B4%E7%A6%81%E6%AD%A2%E5%81%B7%E5%90%83%E5%90%8C%E4%BA%8B%23) `199.2K 🔥` `-29%`

Updated at 2026-04-20 12:31:33

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
