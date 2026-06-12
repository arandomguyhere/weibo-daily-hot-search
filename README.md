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

1. [世界杯在中国的收视率爆了 (World Cup ratings explode in China)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9C%A8%E4%B8%AD%E5%9B%BD%E7%9A%84%E6%94%B6%E8%A7%86%E7%8E%87%E7%88%86%E4%BA%86%23) `1.2M 🔥` `NEW`
1. [内娱闯不进去的赛道短剧闯进去了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E9%97%AF%E4%B8%8D%E8%BF%9B%E5%8E%BB%E7%9A%84%E8%B5%9B%E9%81%93%E7%9F%AD%E5%89%A7%E9%97%AF%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `847.3K 🔥` `NEW`
1. [打卡中国](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8D%A1%E4%B8%AD%E5%9B%BD%23) `790.2K 🔥` `NEW`
1. [陈瑶拒绝了张月三次](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%8B%92%E7%BB%9D%E4%BA%86%E5%BC%A0%E6%9C%88%E4%B8%89%E6%AC%A1%23) `775.2K 🔥` `NEW`
1. [千问预测比分红牌竟然全中](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E9%A2%84%E6%B5%8B%E6%AF%94%E5%88%86%E7%BA%A2%E7%89%8C%E7%AB%9F%E7%84%B6%E5%85%A8%E4%B8%AD%23) `759.9K 🔥` `NEW`
1. [买连衣裙 看手肘](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%BF%9E%E8%A1%A3%E8%A3%99%20%E7%9C%8B%E6%89%8B%E8%82%98%23) `758.9K 🔥` `NEW`
1. [神州租车 为热爱赴山海](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E5%B7%9E%E7%A7%9F%E8%BD%A6%20%E4%B8%BA%E7%83%AD%E7%88%B1%E8%B5%B4%E5%B1%B1%E6%B5%B7%23) `709.9K 🔥` `NEW`
1. [王俊凯包场支持王源](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8C%85%E5%9C%BA%E6%94%AF%E6%8C%81%E7%8E%8B%E6%BA%90%23) `501.0K 🔥` `NEW`
1. [25岁女子为保胎多器官衰竭进ICU](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%A5%B3%E5%AD%90%E4%B8%BA%E4%BF%9D%E8%83%8E%E5%A4%9A%E5%99%A8%E5%AE%98%E8%A1%B0%E7%AB%AD%E8%BF%9BICU%23) `485.3K 🔥` `NEW`
1. [鸿蒙7](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%997%23) `477.5K 🔥` `NEW`
1. [labubu世界杯销量暴涨30倍 (labubu World Cup sales surge 30 times)](https://s.weibo.com/weibo?q=%23labubu%E4%B8%96%E7%95%8C%E6%9D%AF%E9%94%80%E9%87%8F%E6%9A%B4%E6%B6%A830%E5%80%8D%23) `470.6K 🔥` `NEW`
1. [艺人真名艺名汇总](https://s.weibo.com/weibo?q=%23%E8%89%BA%E4%BA%BA%E7%9C%9F%E5%90%8D%E8%89%BA%E5%90%8D%E6%B1%87%E6%80%BB%23) `455.3K 🔥` `NEW`
1. [我一点也不期待2028年](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%80%E7%82%B9%E4%B9%9F%E4%B8%8D%E6%9C%9F%E5%BE%852028%E5%B9%B4%23) `419.1K 🔥` `NEW`
1. [演员陈敏儿去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%99%88%E6%95%8F%E5%84%BF%E5%8E%BB%E4%B8%96%23) `403.0K 🔥` `NEW`
1. [因为饼干太好吃而察觉到不对劲](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E9%A5%BC%E5%B9%B2%E5%A4%AA%E5%A5%BD%E5%90%83%E8%80%8C%E5%AF%9F%E8%A7%89%E5%88%B0%E4%B8%8D%E5%AF%B9%E5%8A%B2%23) `324.7K 🔥` `NEW`
1. [演员表不让单独用艺名了](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E8%A1%A8%E4%B8%8D%E8%AE%A9%E5%8D%95%E7%8B%AC%E7%94%A8%E8%89%BA%E5%90%8D%E4%BA%86%23) `301.5K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `279.0K 🔥` `NEW`
1. [张子墨巡演](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E5%A2%A8%E5%B7%A1%E6%BC%94%23) `228.6K 🔥` `NEW`
1. [曝迪丽热巴与嘉行到期不续](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%8E%E5%98%89%E8%A1%8C%E5%88%B0%E6%9C%9F%E4%B8%8D%E7%BB%AD%23) `227.6K 🔥` `NEW`
1. [Meiko在家意外滑倒致手臂受伤](https://s.weibo.com/weibo?q=%23Meiko%E5%9C%A8%E5%AE%B6%E6%84%8F%E5%A4%96%E6%BB%91%E5%80%92%E8%87%B4%E6%89%8B%E8%87%82%E5%8F%97%E4%BC%A4%23) `227.1K 🔥` `NEW`
1. [陈瑶和孙怡说话时一直看着张月 (Chen Yao kept looking at Zhang Yue when talking to Sun Yi)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%92%8C%E5%AD%99%E6%80%A1%E8%AF%B4%E8%AF%9D%E6%97%B6%E4%B8%80%E7%9B%B4%E7%9C%8B%E7%9D%80%E5%BC%A0%E6%9C%88%23) `225.8K 🔥` `NEW`
1. [第一批在千问建档的人已经去玩了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E5%9C%A8%E5%8D%83%E9%97%AE%E5%BB%BA%E6%A1%A3%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%8E%BB%E7%8E%A9%E4%BA%86%23) `225.3K 🔥` `NEW`
1. [日本轮奸犯入选世界杯获市长声援](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%BD%AE%E5%A5%B8%E7%8A%AF%E5%85%A5%E9%80%89%E4%B8%96%E7%95%8C%E6%9D%AF%E8%8E%B7%E5%B8%82%E9%95%BF%E5%A3%B0%E6%8F%B4%23) `223.6K 🔥` `NEW`
1. [莫离字幕](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E5%AD%97%E5%B9%95%23) `222.6K 🔥` `NEW`
1. [给阿嬷的情书男主王彦桐签约壹心娱乐](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%94%B7%E4%B8%BB%E7%8E%8B%E5%BD%A6%E6%A1%90%E7%AD%BE%E7%BA%A6%E5%A3%B9%E5%BF%83%E5%A8%B1%E4%B9%90%23) `221.9K 🔥` `NEW`
1. [蒙淇淇是学法律的](https://s.weibo.com/weibo?q=%23%E8%92%99%E6%B7%87%E6%B7%87%E6%98%AF%E5%AD%A6%E6%B3%95%E5%BE%8B%E7%9A%84%23) `221.2K 🔥` `NEW`
1. [四六级翻译预测](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E7%BF%BB%E8%AF%91%E9%A2%84%E6%B5%8B%23) `219.8K 🔥` `NEW`
1. [管泽元锐评姆巴佩范志毅当场回怼](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%E9%94%90%E8%AF%84%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%8C%83%E5%BF%97%E6%AF%85%E5%BD%93%E5%9C%BA%E5%9B%9E%E6%80%BC%23) `219.2K 🔥` `NEW`
1. [上海大学通报论文数据存疑问题](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E8%AE%BA%E6%96%87%E6%95%B0%E6%8D%AE%E5%AD%98%E7%96%91%E9%97%AE%E9%A2%98%23) `218.2K 🔥` `NEW`
1. [演员署名按姓氏笔画排列](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%BD%B2%E5%90%8D%E6%8C%89%E5%A7%93%E6%B0%8F%E7%AC%94%E7%94%BB%E6%8E%92%E5%88%97%23) `216.3K 🔥` `NEW`
1. [张元英的走路姿势 (Zhang Yuanying's walking posture)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%9A%84%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%23) `216.2K 🔥` `NEW`
1. [念一辈子本科](https://s.weibo.com/weibo?q=%23%E5%BF%B5%E4%B8%80%E8%BE%88%E5%AD%90%E6%9C%AC%E7%A7%91%23) `214.4K 🔥` `NEW`
1. [张百乔 小雪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%99%BE%E4%B9%94%20%E5%B0%8F%E9%9B%AA%23) `214.0K 🔥` `NEW`
1. [白鹿起诉甄姬不放瓜](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B5%B7%E8%AF%89%E7%94%84%E5%A7%AC%E4%B8%8D%E6%94%BE%E7%93%9C%23) `210.2K 🔥` `NEW`
1. [林允瘦到认不出](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%85%81%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%23) `209.1K 🔥` `NEW`
1. [21岁和26岁差距真的很大](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%92%8C26%E5%B2%81%E5%B7%AE%E8%B7%9D%E7%9C%9F%E7%9A%84%E5%BE%88%E5%A4%A7%23) `208.6K 🔥` `NEW`
1. [SpaceX登陆纳斯达克](https://s.weibo.com/weibo?q=%23SpaceX%E7%99%BB%E9%99%86%E7%BA%B3%E6%96%AF%E8%BE%BE%E5%85%8B%23) `207.2K 🔥` `NEW`
1. [辛芷蕾回应网传项目](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E9%A1%B9%E7%9B%AE%23) `206.3K 🔥` `NEW`
1. [离世男幼师事发3天前还说期待放假](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E4%B8%96%E7%94%B7%E5%B9%BC%E5%B8%88%E4%BA%8B%E5%8F%913%E5%A4%A9%E5%89%8D%E8%BF%98%E8%AF%B4%E6%9C%9F%E5%BE%85%E6%94%BE%E5%81%87%23) `205.5K 🔥` `NEW`
1. [世界杯揭幕战AI连红牌都预测到了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%8F%AD%E5%B9%95%E6%88%98AI%E8%BF%9E%E7%BA%A2%E7%89%8C%E9%83%BD%E9%A2%84%E6%B5%8B%E5%88%B0%E4%BA%86%23) `204.3K 🔥` `NEW`
1. [世界杯直播被递手枪女记者笑着接过 (Female reporter was handed a pistol during World Cup live broadcast and took it with a smile)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E7%9B%B4%E6%92%AD%E8%A2%AB%E9%80%92%E6%89%8B%E6%9E%AA%E5%A5%B3%E8%AE%B0%E8%80%85%E7%AC%91%E7%9D%80%E6%8E%A5%E8%BF%87%23) `203.3K 🔥` `NEW`
1. [刘耀文你让人自己做行吗](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E4%BD%A0%E8%AE%A9%E4%BA%BA%E8%87%AA%E5%B7%B1%E5%81%9A%E8%A1%8C%E5%90%97%23) `202.6K 🔥` `NEW`
1. [王安宇以为手机被丁程鑫拿走](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E4%BB%A5%E4%B8%BA%E6%89%8B%E6%9C%BA%E8%A2%AB%E4%B8%81%E7%A8%8B%E9%91%AB%E6%8B%BF%E8%B5%B0%23) `201.2K 🔥` `NEW`
1. [Lisa登台2026世界杯开幕式](https://s.weibo.com/weibo?q=%23Lisa%E7%99%BB%E5%8F%B02026%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E5%B9%95%E5%BC%8F%23) `200.6K 🔥` `NEW`
1. [公众号已删除马思纯争议文章](https://s.weibo.com/weibo?q=%23%E5%85%AC%E4%BC%97%E5%8F%B7%E5%B7%B2%E5%88%A0%E9%99%A4%E9%A9%AC%E6%80%9D%E7%BA%AF%E4%BA%89%E8%AE%AE%E6%96%87%E7%AB%A0%23) `198.8K 🔥` `NEW`
1. [陈都灵陈哲远笔画一样](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E9%99%88%E5%93%B2%E8%BF%9C%E7%AC%94%E7%94%BB%E4%B8%80%E6%A0%B7%23) `197.7K 🔥` `NEW`
1. [华为鸿蒙7首次亮相](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%B8%BF%E8%92%997%E9%A6%96%E6%AC%A1%E4%BA%AE%E7%9B%B8%23) `196.1K 🔥` `NEW`
1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `197.0K 🔥`
1. [从没见过这样的牛奶发布会](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%B2%A1%E8%A7%81%E8%BF%87%E8%BF%99%E6%A0%B7%E7%9A%84%E7%89%9B%E5%A5%B6%E5%8F%91%E5%B8%83%E4%BC%9A%23) `789.3K 🔥` `-36%`
1. [白鹿学历 (Bailu Educational Qualification)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AD%A6%E5%8E%86%23) `359.4K 🔥` `-97%`
1. [迪丽热巴陈飞宇持续掉粉](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E6%8C%81%E7%BB%AD%E6%8E%89%E7%B2%89%23) `213.0K 🔥` `-35%`
1. [老外也疑惑中国为什么不参加世界杯](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E4%B9%9F%E7%96%91%E6%83%91%E4%B8%AD%E5%9B%BD%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%8F%82%E5%8A%A0%E4%B8%96%E7%95%8C%E6%9D%AF%23) `211.1K 🔥` `-87%`

Updated at 2026-06-12 18:44:15

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
