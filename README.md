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

1. [那艺娜劣迹艺人 (Na Yina's evil artist)](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%89%BA%E5%A8%9C%E5%8A%A3%E8%BF%B9%E8%89%BA%E4%BA%BA%23) `108.0K 🔥` `NEW`
1. [特朗普称将加征10%全球进口关税](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%B0%86%E5%8A%A0%E5%BE%8110%25%E5%85%A8%E7%90%83%E8%BF%9B%E5%8F%A3%E5%85%B3%E7%A8%8E%23) `106.7K 🔥` `NEW`
1. [白鹿孟子义李昀锐拼好剧 又争又抢](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E6%8B%BC%E5%A5%BD%E5%89%A7%20%E5%8F%88%E4%BA%89%E5%8F%88%E6%8A%A2%23) `51.4K 🔥` `NEW`
1. [任子威说这什么比赛啊](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E8%AF%B4%E8%BF%99%E4%BB%80%E4%B9%88%E6%AF%94%E8%B5%9B%E5%95%8A%23) `44.5K 🔥` `NEW`
1. [十个勤天成立三周年](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E6%88%90%E7%AB%8B%E4%B8%89%E5%91%A8%E5%B9%B4%23) `37.5K 🔥` `NEW`
1. [金吉莉1500米金牌](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%90%89%E8%8E%891500%E7%B1%B3%E9%87%91%E7%89%8C%23) `800.7K 🔥` `+23%`
1. [中国非遗给你亿点点震撼 (China’s intangible cultural heritage will shock you a little bit)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%9D%9E%E9%81%97%E7%BB%99%E4%BD%A0%E4%BA%BF%E7%82%B9%E7%82%B9%E9%9C%87%E6%92%BC%23) `607.8K 🔥` `+21%`
1. [沈娇娇是个眼圆脸圆的甜妹](https://s.weibo.com/weibo?q=%23%E6%B2%88%E5%A8%87%E5%A8%87%E6%98%AF%E4%B8%AA%E7%9C%BC%E5%9C%86%E8%84%B8%E5%9C%86%E7%9A%84%E7%94%9C%E5%A6%B9%23) `220.7K 🔥` `+68%`
1. [五路财神](https://s.weibo.com/weibo?q=%23%E4%BA%94%E8%B7%AF%E8%B4%A2%E7%A5%9E%23) `75.4K 🔥` `+30%`
1. [美国或需退还1750亿美元关税](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%88%96%E9%9C%80%E9%80%80%E8%BF%981750%E4%BA%BF%E7%BE%8E%E5%85%83%E5%85%B3%E7%A8%8E%23) `70.9K 🔥` `+42%`
1. [将门独后全阵容官宣](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%85%A8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `59.5K 🔥` `+28%`
1. [年轻人装修的厨房有多方便 (How convenient is the kitchen renovated by young people?)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E8%A3%85%E4%BF%AE%E7%9A%84%E5%8E%A8%E6%88%BF%E6%9C%89%E5%A4%9A%E6%96%B9%E4%BE%BF%23) `57.0K 🔥` `+29%`
1. [目击者还原车辆坠贝加尔湖经过 (Eyewitnesses reconstruct vehicle crashing into Lake Baikal)](https://s.weibo.com/weibo?q=%23%E7%9B%AE%E5%87%BB%E8%80%85%E8%BF%98%E5%8E%9F%E8%BD%A6%E8%BE%86%E5%9D%A0%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%E7%BB%8F%E8%BF%87%23) `52.8K 🔥` `+24%`
1. [将门独后 (The only one left behind)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%23) `45.5K 🔥` `+27%`
1. [迎财神 (Welcome the God of Wealth)](https://s.weibo.com/weibo?q=%23%E8%BF%8E%E8%B4%A2%E7%A5%9E%23) `1.1M 🔥`
1. [王心迪徐梦桃 金牌夫妻 (Wang Xindi Xu Mengtao golden couple)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E8%BF%AA%E5%BE%90%E6%A2%A6%E6%A1%83%20%E9%87%91%E7%89%8C%E5%A4%AB%E5%A6%BB%23) `177.5K 🔥`
1. [正月初五接财神 (Receive the God of Wealth on the fifth day of the first lunar month)](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E6%9C%88%E5%88%9D%E4%BA%94%E6%8E%A5%E8%B4%A2%E7%A5%9E%23) `165.7K 🔥`
1. [将门毒后不是大ip是巨ip (After Jiangmen was poisoned, it was not a big IP but a giant IP.)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%E4%B8%8D%E6%98%AF%E5%A4%A7ip%E6%98%AF%E5%B7%A8ip%23) `159.9K 🔥`
1. [华住回应桔子酒店恐吓女顾客 (Huazhu responds to Orange Hotel’s intimidation of female customers)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BD%8F%E5%9B%9E%E5%BA%94%E6%A1%94%E5%AD%90%E9%85%92%E5%BA%97%E6%81%90%E5%90%93%E5%A5%B3%E9%A1%BE%E5%AE%A2%23) `145.1K 🔥`
1. [王心迪夺冠后李天马大喊回家生孩子 (After Wang Xindi won the championship, Li Tianma shouted to go home and have a baby)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E8%BF%AA%E5%A4%BA%E5%86%A0%E5%90%8E%E6%9D%8E%E5%A4%A9%E9%A9%AC%E5%A4%A7%E5%96%8A%E5%9B%9E%E5%AE%B6%E7%94%9F%E5%AD%A9%E5%AD%90%23) `141.1K 🔥`
1. [将门独后 天崩开局](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%20%E5%A4%A9%E5%B4%A9%E5%BC%80%E5%B1%80%23) `108.2K 🔥`
1. [贝加尔湖事故遇难者遗体被找到 (Bodies of victims of Lake Baikal accident found)](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%E4%BA%8B%E6%95%85%E9%81%87%E9%9A%BE%E8%80%85%E9%81%97%E4%BD%93%E8%A2%AB%E6%89%BE%E5%88%B0%23) `107.5K 🔥`
1. [这种致癌物在春节很常见](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E8%87%B4%E7%99%8C%E7%89%A9%E5%9C%A8%E6%98%A5%E8%8A%82%E5%BE%88%E5%B8%B8%E8%A7%81%23) `106.9K 🔥`
1. [杨幂无意中摔出来意外的感觉 (Yang Mi accidentally fell out and felt unexpected)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%97%A0%E6%84%8F%E4%B8%AD%E6%91%94%E5%87%BA%E6%9D%A5%E6%84%8F%E5%A4%96%E7%9A%84%E6%84%9F%E8%A7%89%23) `106.5K 🔥`
1. [王心迪金牌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E8%BF%AA%E9%87%91%E7%89%8C%23) `106.4K 🔥`
1. [将门独后领衔主演杨仕泽姚弛 (Starring Yang Shize and Yao Chi)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E6%9D%A8%E4%BB%95%E6%B3%BD%E5%A7%9A%E5%BC%9B%23) `94.3K 🔥`
1. [中国游客赴日人数暴跌日媒回应没影响](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%B5%B4%E6%97%A5%E4%BA%BA%E6%95%B0%E6%9A%B4%E8%B7%8C%E6%97%A5%E5%AA%92%E5%9B%9E%E5%BA%94%E6%B2%A1%E5%BD%B1%E5%93%8D%23) `88.0K 🔥`
1. [中国队男子5000米接力B组第一 (China's men's 5000m relay team first place in Group B)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%94%B7%E5%AD%905000%E7%B1%B3%E6%8E%A5%E5%8A%9BB%E7%BB%84%E7%AC%AC%E4%B8%80%23) `85.6K 🔥`
1. [爸爸回应不许家人打扰儿子睡懒觉 (Dad responds that family members are not allowed to disturb his son’s sleep)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%9B%9E%E5%BA%94%E4%B8%8D%E8%AE%B8%E5%AE%B6%E4%BA%BA%E6%89%93%E6%89%B0%E5%84%BF%E5%AD%90%E7%9D%A1%E6%87%92%E8%A7%89%23) `73.6K 🔥`
1. [财神壁纸](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E7%A5%9E%E5%A3%81%E7%BA%B8%23) `72.7K 🔥`
1. [你敢不敢用一年时间重启自己 (Do you dare to take a year to restart yourself?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%95%A2%E4%B8%8D%E6%95%A2%E7%94%A8%E4%B8%80%E5%B9%B4%E6%97%B6%E9%97%B4%E9%87%8D%E5%90%AF%E8%87%AA%E5%B7%B1%23) `72.1K 🔥`
1. [女子发现网购大衣出现手写名字 (Woman discovers handwritten name on coat she purchased online)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8F%91%E7%8E%B0%E7%BD%91%E8%B4%AD%E5%A4%A7%E8%A1%A3%E5%87%BA%E7%8E%B0%E6%89%8B%E5%86%99%E5%90%8D%E5%AD%97%23) `68.5K 🔥`
1. [方家翊整容后小区门禁人脸识别失败 (After Fang Jiayi had plastic surgery, facial recognition failed at the community access control)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AE%B6%E7%BF%8A%E6%95%B4%E5%AE%B9%E5%90%8E%E5%B0%8F%E5%8C%BA%E9%97%A8%E7%A6%81%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB%E5%A4%B1%E8%B4%A5%23) `66.8K 🔥`
1. [这些行为正在偷偷消耗你的气血](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E8%A1%8C%E4%B8%BA%E6%AD%A3%E5%9C%A8%E5%81%B7%E5%81%B7%E6%B6%88%E8%80%97%E4%BD%A0%E7%9A%84%E6%B0%94%E8%A1%80%23) `66.0K 🔥`
1. [全世界为什么只有中国人吃炒菜 (Why are only Chinese people eating stir-fried vegetables in the world?)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%AA%E6%9C%89%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%90%83%E7%82%92%E8%8F%9C%23) `59.4K 🔥`
1. [妹妹回应给60cm哥哥买新衣服](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E5%9B%9E%E5%BA%94%E7%BB%9960cm%E5%93%A5%E5%93%A5%E4%B9%B0%E6%96%B0%E8%A1%A3%E6%9C%8D%23) `59.4K 🔥`
1. [马克龙愤怒回应意大利总理涉法言论](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%8B%E9%BE%99%E6%84%A4%E6%80%92%E5%9B%9E%E5%BA%94%E6%84%8F%E5%A4%A7%E5%88%A9%E6%80%BB%E7%90%86%E6%B6%89%E6%B3%95%E8%A8%80%E8%AE%BA%23) `59.3K 🔥`
1. [方大同去世一周年 (The first anniversary of Fang Datong’s death)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%A4%A7%E5%90%8C%E5%8E%BB%E4%B8%96%E4%B8%80%E5%91%A8%E5%B9%B4%23) `59.0K 🔥`
1. [徐梦桃这张照片含金量超高](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E8%BF%99%E5%BC%A0%E7%85%A7%E7%89%87%E5%90%AB%E9%87%91%E9%87%8F%E8%B6%85%E9%AB%98%23) `50.9K 🔥`
1. [谷爱凌进了第三个决赛 (Gu Ailing entered the third final)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BF%9B%E4%BA%86%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%86%B3%E8%B5%9B%23) `50.3K 🔥`
1. [短剧上星 不匹配电视 (Short drama star, not suitable for TV)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E4%B8%8A%E6%98%9F%20%E4%B8%8D%E5%8C%B9%E9%85%8D%E7%94%B5%E8%A7%86%23) `49.7K 🔥`
1. [火锅店春节4天赚33.9万全给员工 (Hotpot restaurant earns 339,000 yuan in 4 days during Spring Festival, all given to employees)](https://s.weibo.com/weibo?q=%23%E7%81%AB%E9%94%85%E5%BA%97%E6%98%A5%E8%8A%824%E5%A4%A9%E8%B5%9A33.9%E4%B8%87%E5%85%A8%E7%BB%99%E5%91%98%E5%B7%A5%23) `46.9K 🔥`
1. [徐梦桃回应王心迪夺冠 (Xu Mengtao responded to Wang Xindi’s victory)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E5%9B%9E%E5%BA%94%E7%8E%8B%E5%BF%83%E8%BF%AA%E5%A4%BA%E5%86%A0%23) `46.2K 🔥`
1. [苏翊鸣昨天刚和徐梦桃王心迪合影 (Su Yiming just took a photo with Xu Mengtao and Wang Xindi yesterday)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%98%A8%E5%A4%A9%E5%88%9A%E5%92%8C%E5%BE%90%E6%A2%A6%E6%A1%83%E7%8E%8B%E5%BF%83%E8%BF%AA%E5%90%88%E5%BD%B1%23) `40.1K 🔥`
1. [大年初五 (The fifth day of the Lunar New Year)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%BA%94%23) `39.1K 🔥`
1. [大年初五有啥习俗](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%BA%94%E6%9C%89%E5%95%A5%E4%B9%A0%E4%BF%97%23) `38.1K 🔥`
1. [任子威不理解裁判判罚](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E4%B8%8D%E7%90%86%E8%A7%A3%E8%A3%81%E5%88%A4%E5%88%A4%E7%BD%9A%23) `37.5K 🔥`
1. [中国短道队结束米兰冬奥征程 (Chinese short track team ends Milan Winter Olympics journey)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E9%98%9F%E7%BB%93%E6%9D%9F%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E5%BE%81%E7%A8%8B%23) `60.0K 🔥` `-32%`
1. [儿子离家1年母亲在短视频发现踪迹 (One year after her son left home, his mother found traces of him in a short video)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E7%A6%BB%E5%AE%B61%E5%B9%B4%E6%AF%8D%E4%BA%B2%E5%9C%A8%E7%9F%AD%E8%A7%86%E9%A2%91%E5%8F%91%E7%8E%B0%E8%B8%AA%E8%BF%B9%23) `42.5K 🔥` `-42%`
1. [短道速滑](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `40.2K 🔥` `-21%`

Updated at 2026-02-21 07:57:33

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
