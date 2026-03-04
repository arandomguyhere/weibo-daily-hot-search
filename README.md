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

1. [两会看封面 (Look at the cover of the two sessions)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%E7%9C%8B%E5%B0%81%E9%9D%A2%23) `472.5K 🔥` `NEW`
1. [建议推广农村不超过2万彩礼](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8E%A8%E5%B9%BF%E5%86%9C%E6%9D%91%E4%B8%8D%E8%B6%85%E8%BF%872%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `289.2K 🔥` `NEW`
1. [让世界多一度她的空间](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E4%B8%96%E7%95%8C%E5%A4%9A%E4%B8%80%E5%BA%A6%E5%A5%B9%E7%9A%84%E7%A9%BA%E9%97%B4%23) `273.5K 🔥` `NEW`
1. [王励勤回应樊振东归队问题](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%B1%E5%8B%A4%E5%9B%9E%E5%BA%94%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BD%92%E9%98%9F%E9%97%AE%E9%A2%98%23) `270.3K 🔥` `NEW`
1. [问界M9](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%23) `171.8K 🔥` `NEW`
1. [伊朗低成本武器正耗空美国高端弹药](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BD%8E%E6%88%90%E6%9C%AC%E6%AD%A6%E5%99%A8%E6%AD%A3%E8%80%97%E7%A9%BA%E7%BE%8E%E5%9B%BD%E9%AB%98%E7%AB%AF%E5%BC%B9%E8%8D%AF%23) `152.1K 🔥` `NEW`
1. [尊界首搭双光路图像级激光雷达](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8C%E9%A6%96%E6%90%AD%E5%8F%8C%E5%85%89%E8%B7%AF%E5%9B%BE%E5%83%8F%E7%BA%A7%E6%BF%80%E5%85%89%E9%9B%B7%E8%BE%BE%23) `148.4K 🔥` `NEW`
1. [尚界Z7](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%23) `137.2K 🔥` `NEW`
1. [尊界融合感知能力断代领先](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8C%E8%9E%8D%E5%90%88%E6%84%9F%E7%9F%A5%E8%83%BD%E5%8A%9B%E6%96%AD%E4%BB%A3%E9%A2%86%E5%85%88%23) `134.1K 🔥` `NEW`
1. [专家表示伊朗导弹必须改打法](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%A1%A8%E7%A4%BA%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%BF%85%E9%A1%BB%E6%94%B9%E6%89%93%E6%B3%95%23) `134.1K 🔥` `NEW`
1. [王励勤说樊振东回归问题还在联系 (Wang Liqin said the issue of Fan Zhendong’s return is still being discussed)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%B1%E5%8B%A4%E8%AF%B4%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%9E%E5%BD%92%E9%97%AE%E9%A2%98%E8%BF%98%E5%9C%A8%E8%81%94%E7%B3%BB%23) `118.1K 🔥` `NEW`
1. [何老师听到黄毛的反应](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%80%81%E5%B8%88%E5%90%AC%E5%88%B0%E9%BB%84%E6%AF%9B%E7%9A%84%E5%8F%8D%E5%BA%94%23) `112.2K 🔥` `NEW`
1. [你们霸总的衣服还要共享啊](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E9%9C%B8%E6%80%BB%E7%9A%84%E8%A1%A3%E6%9C%8D%E8%BF%98%E8%A6%81%E5%85%B1%E4%BA%AB%E5%95%8A%23) `99.3K 🔥` `NEW`
1. [林诗栋重庆冠军赛退赛](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E9%87%8D%E5%BA%86%E5%86%A0%E5%86%9B%E8%B5%9B%E9%80%80%E8%B5%9B%23) `160.8K 🔥` `+30%`
1. [我国今年将大力提振消费](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%BB%8A%E5%B9%B4%E5%B0%86%E5%A4%A7%E5%8A%9B%E6%8F%90%E6%8C%AF%E6%B6%88%E8%B4%B9%23) `155.9K 🔥` `+33%`
1. [你有点不新鲜了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%9C%89%E7%82%B9%E4%B8%8D%E6%96%B0%E9%B2%9C%E4%BA%86%23) `140.9K 🔥` `+63%`
1. [建议居民身份证去地址化 (It is recommended that resident ID cards be de-addressed)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B1%85%E6%B0%91%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8E%BB%E5%9C%B0%E5%9D%80%E5%8C%96%23) `1.1M 🔥`
1. [建议彩礼金额不超过6万元 (It is recommended that the amount of the betrothal gift should not exceed 60,000 yuan)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%BD%A9%E7%A4%BC%E9%87%91%E9%A2%9D%E4%B8%8D%E8%B6%85%E8%BF%876%E4%B8%87%E5%85%83%23) `787.7K 🔥`
1. [2026两会日程预告 (2026 Two Sessions Schedule Preview)](https://s.weibo.com/weibo?q=%232026%E4%B8%A4%E4%BC%9A%E6%97%A5%E7%A8%8B%E9%A2%84%E5%91%8A%23) `610.4K 🔥`
1. [建议提高个税起征点至8000或1万](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8F%90%E9%AB%98%E4%B8%AA%E7%A8%8E%E8%B5%B7%E5%BE%81%E7%82%B9%E8%87%B38000%E6%88%961%E4%B8%87%23) `323.1K 🔥`
1. [中东局势彻底失控 (The situation in the Middle East is completely out of control)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%B1%80%E5%8A%BF%E5%BD%BB%E5%BA%95%E5%A4%B1%E6%8E%A7%23) `281.2K 🔥`
1. [建议高考英语降为100分](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E9%AB%98%E8%80%83%E8%8B%B1%E8%AF%AD%E9%99%8D%E4%B8%BA100%E5%88%86%23) `259.0K 🔥`
1. [伊拉克被美以当成打伊朗的免费跳板](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E8%A2%AB%E7%BE%8E%E4%BB%A5%E5%BD%93%E6%88%90%E6%89%93%E4%BC%8A%E6%9C%97%E7%9A%84%E5%85%8D%E8%B4%B9%E8%B7%B3%E6%9D%BF%23) `193.2K 🔥`
1. [李幼斌 法拉利老了会变成意大利炮](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B9%BC%E6%96%8C%20%E6%B3%95%E6%8B%89%E5%88%A9%E8%80%81%E4%BA%86%E4%BC%9A%E5%8F%98%E6%88%90%E6%84%8F%E5%A4%A7%E5%88%A9%E7%82%AE%23) `191.3K 🔥`
1. [两会 (two sessions)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%23) `177.4K 🔥`
1. [建议将农村养老金提升至500元每人每月 (It is recommended to increase rural pensions to 500 yuan per person per month)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%86%E5%86%9C%E6%9D%91%E5%85%BB%E8%80%81%E9%87%91%E6%8F%90%E5%8D%87%E8%87%B3500%E5%85%83%E6%AF%8F%E4%BA%BA%E6%AF%8F%E6%9C%88%23) `173.7K 🔥`
1. [雨天午睡很舒服就要小心了 (Taking a nap on a rainy day is very comfortable, so be careful.)](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E5%A4%A9%E5%8D%88%E7%9D%A1%E5%BE%88%E8%88%92%E6%9C%8D%E5%B0%B1%E8%A6%81%E5%B0%8F%E5%BF%83%E4%BA%86%23) `162.1K 🔥`
1. [伊朗宣布击中美军驱逐舰补给舰](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AE%A3%E5%B8%83%E5%87%BB%E4%B8%AD%E7%BE%8E%E5%86%9B%E9%A9%B1%E9%80%90%E8%88%B0%E8%A1%A5%E7%BB%99%E8%88%B0%23) `157.6K 🔥`
1. [肛门周围长东西一定是痔疮吗 (Is the growth around the anus definitely hemorrhoids?)](https://s.weibo.com/weibo?q=%23%E8%82%9B%E9%97%A8%E5%91%A8%E5%9B%B4%E9%95%BF%E4%B8%9C%E8%A5%BF%E4%B8%80%E5%AE%9A%E6%98%AF%E7%97%94%E7%96%AE%E5%90%97%23) `148.3K 🔥`
1. [美军公布最新伤亡情况](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%85%AC%E5%B8%83%E6%9C%80%E6%96%B0%E4%BC%A4%E4%BA%A1%E6%83%85%E5%86%B5%23) `147.9K 🔥`
1. [没有性生活也会感染HPV吗 (Can you get HPV even if you don’t have sex?)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E6%80%A7%E7%94%9F%E6%B4%BB%E4%B9%9F%E4%BC%9A%E6%84%9F%E6%9F%93HPV%E5%90%97%23) `116.2K 🔥`
1. [十四届全国人大四次会议发布会](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E5%8F%91%E5%B8%83%E4%BC%9A%23) `113.4K 🔥`
1. [萨巴伦卡订婚](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E8%AE%A2%E5%A9%9A%23) `111.1K 🔥`
1. [霍尔木兹海峡十多艘油轮被炮弹击中](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%8D%81%E5%A4%9A%E8%89%98%E6%B2%B9%E8%BD%AE%E8%A2%AB%E7%82%AE%E5%BC%B9%E5%87%BB%E4%B8%AD%23) `110.5K 🔥`
1. [十四届全国人大四次会议议程 (Agenda for the Fourth Session of the 14th National People's Congress)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E8%AE%AE%E7%A8%8B%23) `102.6K 🔥`
1. [赖伟明学范丞丞的手势舞 照抄广告](https://s.weibo.com/weibo?q=%23%E8%B5%96%E4%BC%9F%E6%98%8E%E5%AD%A6%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9A%84%E6%89%8B%E5%8A%BF%E8%88%9E%20%E7%85%A7%E6%8A%84%E5%B9%BF%E5%91%8A%23) `95.9K 🔥`
1. [杨幂汤圆头像](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%B1%A4%E5%9C%86%E5%A4%B4%E5%83%8F%23) `89.7K 🔥`
1. [飞驰人生3暂列全球票房年榜第一](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E6%9A%82%E5%88%97%E5%85%A8%E7%90%83%E7%A5%A8%E6%88%BF%E5%B9%B4%E6%A6%9C%E7%AC%AC%E4%B8%80%23) `88.3K 🔥`
1. [恋与深空 (Love and deep space)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `86.7K 🔥`
1. [第一场委员通道 (The first committee member channel)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E5%9C%BA%E5%A7%94%E5%91%98%E9%80%9A%E9%81%93%23) `80.3K 🔥`
1. [大学生返校统一姿势 (College students return to school in unified posture)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%BF%94%E6%A0%A1%E7%BB%9F%E4%B8%80%E5%A7%BF%E5%8A%BF%23) `218.5K 🔥` `-23%`
1. [全国政协十四届四次会议开幕](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%94%BF%E5%8D%8F%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E5%BC%80%E5%B9%95%23) `196.2K 🔥` `-36%`
1. [阿里高层出面挽留林俊旸 (Alibaba executives intervene to retain Lin Junyang)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E9%AB%98%E5%B1%82%E5%87%BA%E9%9D%A2%E6%8C%BD%E7%95%99%E6%9E%97%E4%BF%8A%E6%97%B8%23) `185.0K 🔥` `-26%`
1. [王天辰 就是很想亲](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%20%E5%B0%B1%E6%98%AF%E5%BE%88%E6%83%B3%E4%BA%B2%23) `183.5K 🔥` `-22%`
1. [这竟然是甄嬛传里的温宜公主](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%AB%9F%E7%84%B6%E6%98%AF%E7%94%84%E5%AC%9B%E4%BC%A0%E9%87%8C%E7%9A%84%E6%B8%A9%E5%AE%9C%E5%85%AC%E4%B8%BB%23) `177.7K 🔥` `-21%`
1. [李乃文 去法国排什么队](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%83%E6%96%87%20%E5%8E%BB%E6%B3%95%E5%9B%BD%E6%8E%92%E4%BB%80%E4%B9%88%E9%98%9F%23) `137.0K 🔥` `-27%`
1. [徐璐自曝做了牙贴片](https://s.weibo.com/weibo?q=%23%E5%BE%90%E7%92%90%E8%87%AA%E6%9B%9D%E5%81%9A%E4%BA%86%E7%89%99%E8%B4%B4%E7%89%87%23) `135.3K 🔥` `-34%`
1. [全球股市全线暴跌](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%E5%85%A8%E7%BA%BF%E6%9A%B4%E8%B7%8C%23) `133.6K 🔥` `-26%`
1. [烤肉店辣椒水是干嘛的](https://s.weibo.com/weibo?q=%23%E7%83%A4%E8%82%89%E5%BA%97%E8%BE%A3%E6%A4%92%E6%B0%B4%E6%98%AF%E5%B9%B2%E5%98%9B%E7%9A%84%23) `129.3K 🔥` `-50%`
1. [伊朗首都全天遭轮番打击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E5%85%A8%E5%A4%A9%E9%81%AD%E8%BD%AE%E7%95%AA%E6%89%93%E5%87%BB%23) `93.4K 🔥` `-35%`
1. [鸿蒙智行发布会](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `91.9K 🔥` `-22%`
1. [情久对战JDG](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%B9%85%E5%AF%B9%E6%88%98JDG%23) `81.2K 🔥` `-35%`

Updated at 2026-03-04 16:23:45

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
