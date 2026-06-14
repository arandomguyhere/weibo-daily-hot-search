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

1. [男子去世欠49万房贷父母放弃继承 (Man dies owing 490,000 in mortgage loan, parents give up inheritance)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E6%AC%A049%E4%B8%87%E6%88%BF%E8%B4%B7%E7%88%B6%E6%AF%8D%E6%94%BE%E5%BC%83%E7%BB%A7%E6%89%BF%23) `1.2M 🔥` `NEW`
1. [世界杯出现了真正的预言家](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%87%BA%E7%8E%B0%E4%BA%86%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%A2%84%E8%A8%80%E5%AE%B6%23) `862.1K 🔥` `NEW`
1. [多地铁路开辟农资运输绿色通道](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E9%93%81%E8%B7%AF%E5%BC%80%E8%BE%9F%E5%86%9C%E8%B5%84%E8%BF%90%E8%BE%93%E7%BB%BF%E8%89%B2%E9%80%9A%E9%81%93%23) `791.2K 🔥` `NEW`
1. [敖瑞鹏痛失4部第一顺位](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E7%97%9B%E5%A4%B14%E9%83%A8%E7%AC%AC%E4%B8%80%E9%A1%BA%E4%BD%8D%23) `789.1K 🔥` `NEW`
1. [当我以为熬夜对我没有影响时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E4%BB%A5%E4%B8%BA%E7%86%AC%E5%A4%9C%E5%AF%B9%E6%88%91%E6%B2%A1%E6%9C%89%E5%BD%B1%E5%93%8D%E6%97%B6%23) `785.6K 🔥` `NEW`
1. [王俊凯憋不住了张若昀还在加料](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%86%8B%E4%B8%8D%E4%BD%8F%E4%BA%86%E5%BC%A0%E8%8B%A5%E6%98%80%E8%BF%98%E5%9C%A8%E5%8A%A0%E6%96%99%23) `753.8K 🔥` `NEW`
1. [拍照没网感的原因找到了](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E7%85%A7%E6%B2%A1%E7%BD%91%E6%84%9F%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `676.8K 🔥` `NEW`
1. [唐僧要是被他抓了孙悟空都来不及救](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%83%A7%E8%A6%81%E6%98%AF%E8%A2%AB%E4%BB%96%E6%8A%93%E4%BA%86%E5%AD%99%E6%82%9F%E7%A9%BA%E9%83%BD%E6%9D%A5%E4%B8%8D%E5%8F%8A%E6%95%91%23) `501.0K 🔥` `NEW`
1. [内蒙古额济纳旗交通事故致6死](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%92%99%E5%8F%A4%E9%A2%9D%E6%B5%8E%E7%BA%B3%E6%97%97%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%E8%87%B46%E6%AD%BB%23) `348.4K 🔥` `NEW`
1. [王俊凯看文淇做表情包的反应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%9C%8B%E6%96%87%E6%B7%87%E5%81%9A%E8%A1%A8%E6%83%85%E5%8C%85%E7%9A%84%E5%8F%8D%E5%BA%94%23) `348.1K 🔥` `NEW`
1. [张雪机车 (Zhang Xue motorcycle)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `348.0K 🔥` `NEW`
1. [10家A股公司退市 超25万股民踩雷](https://s.weibo.com/weibo?q=%2310%E5%AE%B6A%E8%82%A1%E5%85%AC%E5%8F%B8%E9%80%80%E5%B8%82%20%E8%B6%8525%E4%B8%87%E8%82%A1%E6%B0%91%E8%B8%A9%E9%9B%B7%23) `347.9K 🔥` `NEW`
1. [朱芳雨说输了把球吃掉](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%8A%B3%E9%9B%A8%E8%AF%B4%E8%BE%93%E4%BA%86%E6%8A%8A%E7%90%83%E5%90%83%E6%8E%89%23) `347.9K 🔥` `NEW`
1. [雷军收到YU7车主送的蒜鸟玩偶](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%94%B6%E5%88%B0YU7%E8%BD%A6%E4%B8%BB%E9%80%81%E7%9A%84%E8%92%9C%E9%B8%9F%E7%8E%A9%E5%81%B6%23) `347.7K 🔥` `NEW`
1. [迪卡侬回应网店模仿官方品牌销售](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%8D%A1%E4%BE%AC%E5%9B%9E%E5%BA%94%E7%BD%91%E5%BA%97%E6%A8%A1%E4%BB%BF%E5%AE%98%E6%96%B9%E5%93%81%E7%89%8C%E9%94%80%E5%94%AE%23) `347.6K 🔥` `NEW`
1. [世界杯除了国足几乎都上场了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E9%99%A4%E4%BA%86%E5%9B%BD%E8%B6%B3%E5%87%A0%E4%B9%8E%E9%83%BD%E4%B8%8A%E5%9C%BA%E4%BA%86%23) `347.4K 🔥` `NEW`
1. [陈坤 我还活着呢](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%9D%A4%20%E6%88%91%E8%BF%98%E6%B4%BB%E7%9D%80%E5%91%A2%23) `347.1K 🔥` `NEW`
1. [男子在公园转盘上疯狂旋转1小时](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%85%AC%E5%9B%AD%E8%BD%AC%E7%9B%98%E4%B8%8A%E7%96%AF%E7%8B%82%E6%97%8B%E8%BD%AC1%E5%B0%8F%E6%97%B6%23) `347.1K 🔥` `NEW`
1. [吴磊 没有女朋友](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%20%E6%B2%A1%E6%9C%89%E5%A5%B3%E6%9C%8B%E5%8F%8B%23) `346.9K 🔥` `NEW`
1. [没想到大学生是孙悦](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%83%B3%E5%88%B0%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%98%AF%E5%AD%99%E6%82%A6%23) `346.9K 🔥` `NEW`
1. [沈腾以为神级救场 结果全漏了 (Shen Teng thought he was coming to the rescue, but everything turned out to be missing.)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E4%BB%A5%E4%B8%BA%E7%A5%9E%E7%BA%A7%E6%95%91%E5%9C%BA%20%E7%BB%93%E6%9E%9C%E5%85%A8%E6%BC%8F%E4%BA%86%23) `346.6K 🔥` `NEW`
1. [女子患上美女病严重者可导致瘫痪](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%82%A3%E4%B8%8A%E7%BE%8E%E5%A5%B3%E7%97%85%E4%B8%A5%E9%87%8D%E8%80%85%E5%8F%AF%E5%AF%BC%E8%87%B4%E7%98%AB%E7%97%AA%23) `346.4K 🔥` `NEW`
1. [蚂蚁集团正秘密测试AI版支付宝](https://s.weibo.com/weibo?q=%23%E8%9A%82%E8%9A%81%E9%9B%86%E5%9B%A2%E6%AD%A3%E7%A7%98%E5%AF%86%E6%B5%8B%E8%AF%95AI%E7%89%88%E6%94%AF%E4%BB%98%E5%AE%9D%23) `346.1K 🔥` `NEW`
1. [王橹杰穿了蓝粉色星星外套](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%A9%BF%E4%BA%86%E8%93%9D%E7%B2%89%E8%89%B2%E6%98%9F%E6%98%9F%E5%A4%96%E5%A5%97%23) `346.1K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `307.2K 🔥` `NEW`
1. [黄灿灿浪姐合照](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%B5%AA%E5%A7%90%E5%90%88%E7%85%A7%23) `289.1K 🔥` `NEW`
1. [张雪机车第9位完赛](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%AC%AC9%E4%BD%8D%E5%AE%8C%E8%B5%9B%23) `247.8K 🔥` `NEW`
1. [京东来微博电影之夜营业了](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%9D%A5%E5%BE%AE%E5%8D%9A%E7%94%B5%E5%BD%B1%E4%B9%8B%E5%A4%9C%E8%90%A5%E4%B8%9A%E4%BA%86%23) `237.7K 🔥` `NEW`
1. [网红店员工用自己筷子试吃顾客菜](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%BA%97%E5%91%98%E5%B7%A5%E7%94%A8%E8%87%AA%E5%B7%B1%E7%AD%B7%E5%AD%90%E8%AF%95%E5%90%83%E9%A1%BE%E5%AE%A2%E8%8F%9C%23) `231.5K 🔥` `NEW`
1. [爸爸嫌弃爷爷做饭难吃被6岁闺女说哭](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%AB%8C%E5%BC%83%E7%88%B7%E7%88%B7%E5%81%9A%E9%A5%AD%E9%9A%BE%E5%90%83%E8%A2%AB6%E5%B2%81%E9%97%BA%E5%A5%B3%E8%AF%B4%E5%93%AD%23) `214.0K 🔥` `NEW`
1. [LV回应9万元包疑似展销品 (LV responds that 90,000 yuan bag is suspected to be on display)](https://s.weibo.com/weibo?q=%23LV%E5%9B%9E%E5%BA%949%E4%B8%87%E5%85%83%E5%8C%85%E7%96%91%E4%BC%BC%E5%B1%95%E9%94%80%E5%93%81%23) `185.5K 🔥` `NEW`
1. [小S和许雅钧合拍手势舞](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%92%8C%E8%AE%B8%E9%9B%85%E9%92%A7%E5%90%88%E6%8B%8D%E6%89%8B%E5%8A%BF%E8%88%9E%23) `158.2K 🔥` `NEW`
1. [天梭全球形象代言人杨瀚森 (Tissot global image spokesperson Yang Hansen)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%A2%AD%E5%85%A8%E7%90%83%E5%BD%A2%E8%B1%A1%E4%BB%A3%E8%A8%80%E4%BA%BA%E6%9D%A8%E7%80%9A%E6%A3%AE%23) `727.6K 🔥` `+83%`
1. [网友说陈坤被替换了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%AF%B4%E9%99%88%E5%9D%A4%E8%A2%AB%E6%9B%BF%E6%8D%A2%E4%BA%86%23) `348.6K 🔥` `+40%`
1. [白鹿手臂居然是自己咬的](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%89%8B%E8%87%82%E5%B1%85%E7%84%B6%E6%98%AF%E8%87%AA%E5%B7%B1%E5%92%AC%E7%9A%84%23) `348.2K 🔥` `+46%`
1. [孙怡胸口怎么了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%83%B8%E5%8F%A3%E6%80%8E%E4%B9%88%E4%BA%86%23) `347.4K 🔥` `+37%`
1. [沈腾和昨天是一个人吗](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%92%8C%E6%98%A8%E5%A4%A9%E6%98%AF%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%90%97%23) `346.7K 🔥` `+34%`
1. [这是美国白宫](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E7%BE%8E%E5%9B%BD%E7%99%BD%E5%AE%AB%23) `346.3K 🔥` `+47%`
1. [黄渤 黄晓明终于变成了黄博 (Huang Bo and Huang Xiaoming finally became Huang Bo)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B8%A4%20%E9%BB%84%E6%99%93%E6%98%8E%E7%BB%88%E4%BA%8E%E5%8F%98%E6%88%90%E4%BA%86%E9%BB%84%E5%8D%9A%23) `346.0K 🔥` `+75%`
1. [我是演员董子健 最近很空](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%98%AF%E6%BC%94%E5%91%98%E8%91%A3%E5%AD%90%E5%81%A5%20%E6%9C%80%E8%BF%91%E5%BE%88%E7%A9%BA%23) `217.5K 🔥` `+34%`
1. [京东外卖大牌请客狂撒千万份 (JD.com’s big-name takeout brands are selling out tens of millions of servings)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%A4%96%E5%8D%96%E5%A4%A7%E7%89%8C%E8%AF%B7%E5%AE%A2%E7%8B%82%E6%92%92%E5%8D%83%E4%B8%87%E4%BB%BD%23) `789.6K 🔥`
1. [大学里最被劝退的专业 它排第一](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E9%87%8C%E6%9C%80%E8%A2%AB%E5%8A%9D%E9%80%80%E7%9A%84%E4%B8%93%E4%B8%9A%20%E5%AE%83%E6%8E%92%E7%AC%AC%E4%B8%80%23) `256.3K 🔥`
1. [黄大炜去世 (Huang Dawei passed away)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%A7%E7%82%9C%E5%8E%BB%E4%B8%96%23) `236.4K 🔥`
1. [97岁网红刘老太离世 (Internet celebrity Mrs. Liu passed away at the age of 97)](https://s.weibo.com/weibo?q=%2397%E5%B2%81%E7%BD%91%E7%BA%A2%E5%88%98%E8%80%81%E5%A4%AA%E7%A6%BB%E4%B8%96%23) `229.7K 🔥`
1. [迪丽热巴机场私服好清新](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9C%BA%E5%9C%BA%E7%A7%81%E6%9C%8D%E5%A5%BD%E6%B8%85%E6%96%B0%23) `165.6K 🔥`
1. [程晓玥说二胎是酒后意外怀的 (Cheng Xiaoyue said that her second child was accidentally conceived after drinking.)](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E8%AF%B4%E4%BA%8C%E8%83%8E%E6%98%AF%E9%85%92%E5%90%8E%E6%84%8F%E5%A4%96%E6%80%80%E7%9A%84%23) `153.7K 🔥`
1. [上海还是太超前了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%98%E6%98%AF%E5%A4%AA%E8%B6%85%E5%89%8D%E4%BA%86%23) `352.3K 🔥` `-49%`
1. [微博电影之夜内场](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%94%B5%E5%BD%B1%E4%B9%8B%E5%A4%9C%E5%86%85%E5%9C%BA%23) `348.6K 🔥` `-68%`
1. [李思潼获奖感言](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%E8%8E%B7%E5%A5%96%E6%84%9F%E8%A8%80%23) `298.7K 🔥` `-57%`
1. [大鱼海棠导演情商](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%B1%BC%E6%B5%B7%E6%A3%A0%E5%AF%BC%E6%BC%94%E6%83%85%E5%95%86%23) `204.7K 🔥` `-50%`
1. [T1晋级MSI](https://s.weibo.com/weibo?q=%23T1%E6%99%8B%E7%BA%A7MSI%23) `160.5K 🔥` `-77%`
1. [美被曝同意伊朗稀释浓缩铀库存](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%A2%AB%E6%9B%9D%E5%90%8C%E6%84%8F%E4%BC%8A%E6%9C%97%E7%A8%80%E9%87%8A%E6%B5%93%E7%BC%A9%E9%93%80%E5%BA%93%E5%AD%98%23) `153.1K 🔥` `-26%`

Updated at 2026-06-14 22:42:24

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
