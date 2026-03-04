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

1. [第一次在考研上感受到学霸控分 (For the first time in the postgraduate entrance examination, I felt that my academic dominance controlled my scores.)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%9C%A8%E8%80%83%E7%A0%94%E4%B8%8A%E6%84%9F%E5%8F%97%E5%88%B0%E5%AD%A6%E9%9C%B8%E6%8E%A7%E5%88%86%23) `853.4K 🔥` `NEW`
1. [2026两会日程预告](https://s.weibo.com/weibo?q=%232026%E4%B8%A4%E4%BC%9A%E6%97%A5%E7%A8%8B%E9%A2%84%E5%91%8A%23) `690.2K 🔥` `NEW`
1. [飞驰人生3暂列全球票房年榜第一](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E6%9A%82%E5%88%97%E5%85%A8%E7%90%83%E7%A5%A8%E6%88%BF%E5%B9%B4%E6%A6%9C%E7%AC%AC%E4%B8%80%23) `278.8K 🔥` `NEW`
1. [古茗免单](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E8%8C%97%E5%85%8D%E5%8D%95%23) `277.6K 🔥` `NEW`
1. [杨幂汤圆头像](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%B1%A4%E5%9C%86%E5%A4%B4%E5%83%8F%23) `211.7K 🔥` `NEW`
1. [雨天午睡很舒服就要小心了](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E5%A4%A9%E5%8D%88%E7%9D%A1%E5%BE%88%E8%88%92%E6%9C%8D%E5%B0%B1%E8%A6%81%E5%B0%8F%E5%BF%83%E4%BA%86%23) `202.0K 🔥` `NEW`
1. [淘宝凑齐短剧四小花旦](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%87%91%E9%BD%90%E7%9F%AD%E5%89%A7%E5%9B%9B%E5%B0%8F%E8%8A%B1%E6%97%A6%23) `168.1K 🔥` `NEW`
1. [没有性生活也会感染HPV吗](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E6%80%A7%E7%94%9F%E6%B4%BB%E4%B9%9F%E4%BC%9A%E6%84%9F%E6%9F%93HPV%E5%90%97%23) `167.6K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `166.4K 🔥` `NEW`
1. [谁家男主一边擦伤一边擦边](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%AE%B6%E7%94%B7%E4%B8%BB%E4%B8%80%E8%BE%B9%E6%93%A6%E4%BC%A4%E4%B8%80%E8%BE%B9%E6%93%A6%E8%BE%B9%23) `156.2K 🔥` `NEW`
1. [肛门周围长东西一定是痔疮吗 (Is the growth around the anus definitely hemorrhoids?)](https://s.weibo.com/weibo?q=%23%E8%82%9B%E9%97%A8%E5%91%A8%E5%9B%B4%E9%95%BF%E4%B8%9C%E8%A5%BF%E4%B8%80%E5%AE%9A%E6%98%AF%E7%97%94%E7%96%AE%E5%90%97%23) `154.3K 🔥` `NEW`
1. [复旦大学生活码 复活码](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%B4%BB%E7%A0%81%20%E5%A4%8D%E6%B4%BB%E7%A0%81%23) `132.0K 🔥` `NEW`
1. [甘肃地震](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E5%9C%B0%E9%9C%87%23) `113.4K 🔥` `NEW`
1. [中国第2部以法典命名的法律](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%AC%AC2%E9%83%A8%E4%BB%A5%E6%B3%95%E5%85%B8%E5%91%BD%E5%90%8D%E7%9A%84%E6%B3%95%E5%BE%8B%23) `91.9K 🔥` `NEW`
1. [孙颖莎剪剪剪](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%89%AA%E5%89%AA%E5%89%AA%23) `89.2K 🔥` `NEW`
1. [猫 少触碰我](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E5%B0%91%E8%A7%A6%E7%A2%B0%E6%88%91%23) `79.7K 🔥` `NEW`
1. [建议生育支持体系覆盖孩子0到18岁](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%94%9F%E8%82%B2%E6%94%AF%E6%8C%81%E4%BD%93%E7%B3%BB%E8%A6%86%E7%9B%96%E5%AD%A9%E5%AD%900%E5%88%B018%E5%B2%81%23) `79.3K 🔥` `NEW`
1. [雷军秒变热门打卡点](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A7%92%E5%8F%98%E7%83%AD%E9%97%A8%E6%89%93%E5%8D%A1%E7%82%B9%23) `79.1K 🔥` `NEW`
1. [老外的歌真的经不起直译](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E7%9A%84%E6%AD%8C%E7%9C%9F%E7%9A%84%E7%BB%8F%E4%B8%8D%E8%B5%B7%E7%9B%B4%E8%AF%91%23) `78.3K 🔥` `NEW`
1. [去酒店洗衣服](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E9%85%92%E5%BA%97%E6%B4%97%E8%A1%A3%E6%9C%8D%23) `76.5K 🔥` `NEW`
1. [建议彩礼金额不超过6万元 (It is recommended that the amount of the betrothal gift should not exceed 60,000 yuan)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%BD%A9%E7%A4%BC%E9%87%91%E9%A2%9D%E4%B8%8D%E8%B6%85%E8%BF%876%E4%B8%87%E5%85%83%23) `1.2M 🔥` `+609%`
1. [跟刘宇宁来京东38节领五色花 (Follow Liu Yuning to JD.com’s 38th Festival to receive colorful flowers)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E5%88%98%E5%AE%87%E5%AE%81%E6%9D%A5%E4%BA%AC%E4%B8%9C38%E8%8A%82%E9%A2%86%E4%BA%94%E8%89%B2%E8%8A%B1%23) `668.5K 🔥` `+29%`
1. [建议基础教育学制缩短为532](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%9F%BA%E7%A1%80%E6%95%99%E8%82%B2%E5%AD%A6%E5%88%B6%E7%BC%A9%E7%9F%AD%E4%B8%BA532%23) `327.2K 🔥` `+107%`
1. [岳雨婷 人在巴黎缺席看秀](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%9B%A8%E5%A9%B7%20%E4%BA%BA%E5%9C%A8%E5%B7%B4%E9%BB%8E%E7%BC%BA%E5%B8%AD%E7%9C%8B%E7%A7%80%23) `218.7K 🔥` `+89%`
1. [郭晓婷说王天辰吻戏像牛耕地](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E8%AF%B4%E7%8E%8B%E5%A4%A9%E8%BE%B0%E5%90%BB%E6%88%8F%E5%83%8F%E7%89%9B%E8%80%95%E5%9C%B0%23) `216.7K 🔥` `+108%`
1. [赖伟明学范丞丞的手势舞 照抄广告](https://s.weibo.com/weibo?q=%23%E8%B5%96%E4%BC%9F%E6%98%8E%E5%AD%A6%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9A%84%E6%89%8B%E5%8A%BF%E8%88%9E%20%E7%85%A7%E6%8A%84%E5%B9%BF%E5%91%8A%23) `213.1K 🔥` `+26%`
1. [伊朗称击毁美军第三套萨德系统](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%87%BB%E6%AF%81%E7%BE%8E%E5%86%9B%E7%AC%AC%E4%B8%89%E5%A5%97%E8%90%A8%E5%BE%B7%E7%B3%BB%E7%BB%9F%23) `167.3K 🔥`
1. [霍尔木兹海峡十多艘油轮被炮弹击中](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%8D%81%E5%A4%9A%E8%89%98%E6%B2%B9%E8%BD%AE%E8%A2%AB%E7%82%AE%E5%BC%B9%E5%87%BB%E4%B8%AD%23) `165.5K 🔥`
1. [伊朗库姆遭袭 (Attack on Qom, Iran)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%BA%93%E5%A7%86%E9%81%AD%E8%A2%AD%23) `163.7K 🔥`
1. [乌克兰愿帮忙拦截伊朗无人机](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E6%84%BF%E5%B8%AE%E5%BF%99%E6%8B%A6%E6%88%AA%E4%BC%8A%E6%9C%97%E6%97%A0%E4%BA%BA%E6%9C%BA%23) `160.2K 🔥`
1. [伊朗遇难学生一个个墓穴让人心碎](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%81%87%E9%9A%BE%E5%AD%A6%E7%94%9F%E4%B8%80%E4%B8%AA%E4%B8%AA%E5%A2%93%E7%A9%B4%E8%AE%A9%E4%BA%BA%E5%BF%83%E7%A2%8E%23) `154.1K 🔥`
1. [北京下雪 (It's snowing in Beijing)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E4%B8%8B%E9%9B%AA%23) `294.1K 🔥` `-74%`
1. [伊朗首都全天遭轮番打击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E5%85%A8%E5%A4%A9%E9%81%AD%E8%BD%AE%E7%95%AA%E6%89%93%E5%87%BB%23) `290.4K 🔥` `-25%`
1. [男生也要预防HPV (Boys should also prevent HPV)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E4%B9%9F%E8%A6%81%E9%A2%84%E9%98%B2HPV%23) `282.3K 🔥` `-27%`
1. [吃一口饭倒欠200卡路里](https://s.weibo.com/weibo?q=%23%E5%90%83%E4%B8%80%E5%8F%A3%E9%A5%AD%E5%80%92%E6%AC%A0200%E5%8D%A1%E8%B7%AF%E9%87%8C%23) `220.5K 🔥` `-43%`
1. [十四届全国人大四次会议发布会](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E5%8F%91%E5%B8%83%E4%BC%9A%23) `219.0K 🔥` `-73%`
1. [伊朗导弹击中美第五舰队总部瞬间](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E7%BE%8E%E7%AC%AC%E4%BA%94%E8%88%B0%E9%98%9F%E6%80%BB%E9%83%A8%E7%9E%AC%E9%97%B4%23) `214.9K 🔥` `-39%`
1. [日本撞人族事件多发 (Incidents of collisions with human beings occur frequently in Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%92%9E%E4%BA%BA%E6%97%8F%E4%BA%8B%E4%BB%B6%E5%A4%9A%E5%8F%91%23) `210.9K 🔥` `-37%`
1. [中国石油跌停](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%B3%E6%B2%B9%E8%B7%8C%E5%81%9C%23) `199.6K 🔥` `-41%`
1. [岳雨婷缺席balmain看秀](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%9B%A8%E5%A9%B7%E7%BC%BA%E5%B8%ADbalmain%E7%9C%8B%E7%A7%80%23) `180.1K 🔥` `-46%`
1. [两会 (two sessions)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%23) `163.9K 🔥` `-58%`
1. [全红婵在村里聚完餐骑车离开](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%9C%A8%E6%9D%91%E9%87%8C%E8%81%9A%E5%AE%8C%E9%A4%90%E9%AA%91%E8%BD%A6%E7%A6%BB%E5%BC%80%23) `161.2K 🔥` `-35%`
1. [金饰克价一夜跌71元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E4%B8%80%E5%A4%9C%E8%B7%8C71%E5%85%83%23) `151.0K 🔥` `-26%`
1. [法国派出航母 (France dispatches aircraft carrier)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%B4%BE%E5%87%BA%E8%88%AA%E6%AF%8D%23) `128.7K 🔥` `-21%`
1. [十四届全国人大四次会议议程](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E8%AE%AE%E7%A8%8B%23) `114.9K 🔥` `-73%`
1. [王楚然花神传到巴黎了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%8A%B1%E7%A5%9E%E4%BC%A0%E5%88%B0%E5%B7%B4%E9%BB%8E%E4%BA%86%23) `98.7K 🔥` `-50%`
1. [上班的意义具像化了 (The meaning of going to work becomes concrete)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E7%9A%84%E6%84%8F%E4%B9%89%E5%85%B7%E5%83%8F%E5%8C%96%E4%BA%86%23) `95.9K 🔥` `-21%`
1. [建议高速年度3000公里免费](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E9%AB%98%E9%80%9F%E5%B9%B4%E5%BA%A63000%E5%85%AC%E9%87%8C%E5%85%8D%E8%B4%B9%23) `93.1K 🔥` `-43%`
1. [朴彩英绿裙看秀](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BD%A9%E8%8B%B1%E7%BB%BF%E8%A3%99%E7%9C%8B%E7%A7%80%23) `83.9K 🔥` `-47%`
1. [甜茶首次来华](https://s.weibo.com/weibo?q=%23%E7%94%9C%E8%8C%B6%E9%A6%96%E6%AC%A1%E6%9D%A5%E5%8D%8E%23) `83.6K 🔥` `-61%`
1. [王一博粉丝 斗歌 (Wang Yibo fans Dou Ge)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%B2%89%E4%B8%9D%20%E6%96%97%E6%AD%8C%23) `72.5K 🔥` `-34%`

Updated at 2026-03-04 13:28:03

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
