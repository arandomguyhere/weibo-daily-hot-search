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

1. [3名男孩虐猫致死家长发声 (Parents of 3 boys who tortured cats to death speak out)](https://s.weibo.com/weibo?q=%233%E5%90%8D%E7%94%B7%E5%AD%A9%E8%99%90%E7%8C%AB%E8%87%B4%E6%AD%BB%E5%AE%B6%E9%95%BF%E5%8F%91%E5%A3%B0%23) `1.4M 🔥` `NEW`
1. [迪丽热巴听到周星驰女儿的表情](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%AC%E5%88%B0%E5%91%A8%E6%98%9F%E9%A9%B0%E5%A5%B3%E5%84%BF%E7%9A%84%E8%A1%A8%E6%83%85%23) `955.9K 🔥` `NEW`
1. [多地开始抢老人](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%BC%80%E5%A7%8B%E6%8A%A2%E8%80%81%E4%BA%BA%23) `758.6K 🔥` `NEW`
1. [长鑫科技公告](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%85%AC%E5%91%8A%23) `757.1K 🔥` `NEW`
1. [老人买肉买走了最难卖的一块](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%B9%B0%E8%82%89%E4%B9%B0%E8%B5%B0%E4%BA%86%E6%9C%80%E9%9A%BE%E5%8D%96%E7%9A%84%E4%B8%80%E5%9D%97%23) `590.7K 🔥` `NEW`
1. [钎城 九尾](https://s.weibo.com/weibo?q=%23%E9%92%8E%E5%9F%8E%20%E4%B9%9D%E5%B0%BE%23) `468.1K 🔥` `NEW`
1. [江浙沪孩子最苦的可能就是退休后](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B5%99%E6%B2%AA%E5%AD%A9%E5%AD%90%E6%9C%80%E8%8B%A6%E7%9A%84%E5%8F%AF%E8%83%BD%E5%B0%B1%E6%98%AF%E9%80%80%E4%BC%91%E5%90%8E%23) `460.1K 🔥` `NEW`
1. [张元英的13岁和21岁](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%9A%8413%E5%B2%81%E5%92%8C21%E5%B2%81%23) `455.5K 🔥` `NEW`
1. [虞书欣名品腰臀比](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%90%8D%E5%93%81%E8%85%B0%E8%87%80%E6%AF%94%23) `451.7K 🔥` `NEW`
1. [养老金向低收入群体倾斜](https://s.weibo.com/weibo?q=%23%E5%85%BB%E8%80%81%E9%87%91%E5%90%91%E4%BD%8E%E6%94%B6%E5%85%A5%E7%BE%A4%E4%BD%93%E5%80%BE%E6%96%9C%23) `400.9K 🔥` `NEW`
1. [许宏宇张雅钦牵手散步 (Xu Hongyu and Zhang Yaqin hold hands for a walk)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%8F%E5%AE%87%E5%BC%A0%E9%9B%85%E9%92%A6%E7%89%B5%E6%89%8B%E6%95%A3%E6%AD%A5%23) `400.8K 🔥` `NEW`
1. [姆巴佩赛前发声](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%B5%9B%E5%89%8D%E5%8F%91%E5%A3%B0%23) `400.6K 🔥` `NEW`
1. [警方介入小区3名男孩虐猫致死亡](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E4%BB%8B%E5%85%A5%E5%B0%8F%E5%8C%BA3%E5%90%8D%E7%94%B7%E5%AD%A9%E8%99%90%E7%8C%AB%E8%87%B4%E6%AD%BB%E4%BA%A1%23) `400.5K 🔥` `NEW`
1. [八仙口碑](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E5%8F%A3%E7%A2%91%23) `393.9K 🔥` `NEW`
1. [曝十日终焉也有张雅钦](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E4%B9%9F%E6%9C%89%E5%BC%A0%E9%9B%85%E9%92%A6%23) `392.9K 🔥` `NEW`
1. [央视曝光湖南一地纸上种田](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E6%B9%96%E5%8D%97%E4%B8%80%E5%9C%B0%E7%BA%B8%E4%B8%8A%E7%A7%8D%E7%94%B0%23) `388.8K 🔥` `NEW`
1. [白鹿黑粉道歉信](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%BB%91%E7%B2%89%E9%81%93%E6%AD%89%E4%BF%A1%23) `373.3K 🔥` `NEW`
1. [感动中国2025年度人物](https://s.weibo.com/weibo?q=%23%E6%84%9F%E5%8A%A8%E4%B8%AD%E5%9B%BD2025%E5%B9%B4%E5%BA%A6%E4%BA%BA%E7%89%A9%23) `257.0K 🔥` `NEW`
1. [曝玉簟秋提档播出](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%89%E7%B0%9F%E7%A7%8B%E6%8F%90%E6%A1%A3%E6%92%AD%E5%87%BA%23) `256.5K 🔥` `NEW`
1. [突然发现了神态的重要性](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E4%BA%86%E7%A5%9E%E6%80%81%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23) `254.3K 🔥` `NEW`
1. [英阿大战裁判 (British-Arab war referee)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%98%BF%E5%A4%A7%E6%88%98%E8%A3%81%E5%88%A4%23) `215.1K 🔥` `NEW`
1. [美国CPI](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BDCPI%23) `214.0K 🔥` `NEW`
1. [虞书欣收下粉丝送的拼豆](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%94%B6%E4%B8%8B%E7%B2%89%E4%B8%9D%E9%80%81%E7%9A%84%E6%8B%BC%E8%B1%86%23) `182.6K 🔥` `NEW`
1. [伊朗称美进入正式战争状态](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E8%BF%9B%E5%85%A5%E6%AD%A3%E5%BC%8F%E6%88%98%E4%BA%89%E7%8A%B6%E6%80%81%23) `166.6K 🔥` `NEW`
1. [我使馆提醒中国公民谨慎来孟娶妻](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BD%BF%E9%A6%86%E6%8F%90%E9%86%92%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E8%B0%A8%E6%85%8E%E6%9D%A5%E5%AD%9F%E5%A8%B6%E5%A6%BB%23) `155.3K 🔥` `NEW`
1. [小米机器人装配成功率98%](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%A3%85%E9%85%8D%E6%88%90%E5%8A%9F%E7%8E%8798%25%23) `155.1K 🔥` `NEW`
1. [上半年外贸稳规模优结构成效明显 (In the first half of the year, foreign trade achieved significant results in stabilizing scale and optimizing structure.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%A4%96%E8%B4%B8%E7%A8%B3%E8%A7%84%E6%A8%A1%E4%BC%98%E7%BB%93%E6%9E%84%E6%88%90%E6%95%88%E6%98%8E%E6%98%BE%23) `1.1M 🔥` `+45%`
1. [姆巴佩喊你看法拦西](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%96%8A%E4%BD%A0%E7%9C%8B%E6%B3%95%E6%8B%A6%E8%A5%BF%23) `991.4K 🔥` `+30%`
1. [妻子孕四月发现丈夫海量亲密照](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%AD%95%E5%9B%9B%E6%9C%88%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E6%B5%B7%E9%87%8F%E4%BA%B2%E5%AF%86%E7%85%A7%23) `621.6K 🔥` `+62%`
1. [入伏后做好6件事攒气血](https://s.weibo.com/weibo?q=%23%E5%85%A5%E4%BC%8F%E5%90%8E%E5%81%9A%E5%A5%BD6%E4%BB%B6%E4%BA%8B%E6%94%92%E6%B0%94%E8%A1%80%23) `395.9K 🔥` `+21%`
1. [张籽沐北电录取](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%B1%BD%E6%B2%90%E5%8C%97%E7%94%B5%E5%BD%95%E5%8F%96%23) `254.8K 🔥` `+39%`
1. [内娱请把古偶还给少男少女 (Domestic entertainment, please return the ancient dolls to boys and girls)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E8%AF%B7%E6%8A%8A%E5%8F%A4%E5%81%B6%E8%BF%98%E7%BB%99%E5%B0%91%E7%94%B7%E5%B0%91%E5%A5%B3%23) `1.6M 🔥`
1. [多位歌手缺席突围赛](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E6%AD%8C%E6%89%8B%E7%BC%BA%E5%B8%AD%E7%AA%81%E5%9B%B4%E8%B5%9B%23) `591.1K 🔥`
1. [章若楠跑男化妆师评论区被阴阳白干](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%B7%91%E7%94%B7%E5%8C%96%E5%A6%86%E5%B8%88%E8%AF%84%E8%AE%BA%E5%8C%BA%E8%A2%AB%E9%98%B4%E9%98%B3%E7%99%BD%E5%B9%B2%23) `465.0K 🔥`
1. [敌敌畏渗到大腿男生被下病危通知 (Boy was notified of critical illness after dichlorvos seeped into his thigh)](https://s.weibo.com/weibo?q=%23%E6%95%8C%E6%95%8C%E7%95%8F%E6%B8%97%E5%88%B0%E5%A4%A7%E8%85%BF%E7%94%B7%E7%94%9F%E8%A2%AB%E4%B8%8B%E7%97%85%E5%8D%B1%E9%80%9A%E7%9F%A5%23) `457.7K 🔥`
1. [北电表演录取的前十名](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B5%E8%A1%A8%E6%BC%94%E5%BD%95%E5%8F%96%E7%9A%84%E5%89%8D%E5%8D%81%E5%90%8D%23) `384.3K 🔥`
1. [朋友圈只适合分享浮于表面的东西 (Moments are only suitable for sharing superficial things)](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%8F%AA%E9%80%82%E5%90%88%E5%88%86%E4%BA%AB%E6%B5%AE%E4%BA%8E%E8%A1%A8%E9%9D%A2%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `260.3K 🔥`
1. [男子回应在妻子孕期出轨留亲密照](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E5%9C%A8%E5%A6%BB%E5%AD%90%E5%AD%95%E6%9C%9F%E5%87%BA%E8%BD%A8%E7%95%99%E4%BA%B2%E5%AF%86%E7%85%A7%23) `258.5K 🔥`
1. [感觉谈恋爱真的很尴尬](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E8%B0%88%E6%81%8B%E7%88%B1%E7%9C%9F%E7%9A%84%E5%BE%88%E5%B0%B4%E5%B0%AC%23) `255.2K 🔥`
1. [明明心情好还是躯体化了](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%8E%E5%BF%83%E6%83%85%E5%A5%BD%E8%BF%98%E6%98%AF%E8%BA%AF%E4%BD%93%E5%8C%96%E4%BA%86%23) `206.3K 🔥`
1. [野狗骨头这段幸好没烂俗的接吻](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E8%BF%99%E6%AE%B5%E5%B9%B8%E5%A5%BD%E6%B2%A1%E7%83%82%E4%BF%97%E7%9A%84%E6%8E%A5%E5%90%BB%23) `183.2K 🔥`
1. [享界G9获批北京L3自动驾驶测试牌照](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8CG9%E8%8E%B7%E6%89%B9%E5%8C%97%E4%BA%ACL3%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E6%B5%8B%E8%AF%95%E7%89%8C%E7%85%A7%23) `155.1K 🔥`
1. [中国燃油车只剩最后一根续命稻草](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%87%83%E6%B2%B9%E8%BD%A6%E5%8F%AA%E5%89%A9%E6%9C%80%E5%90%8E%E4%B8%80%E6%A0%B9%E7%BB%AD%E5%91%BD%E7%A8%BB%E8%8D%89%23) `400.7K 🔥` `-24%`
1. [巴西总统批评巴西国家队 (Brazilian president criticizes Brazil national team)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E6%80%BB%E7%BB%9F%E6%89%B9%E8%AF%84%E5%B7%B4%E8%A5%BF%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `400.4K 🔥` `-35%`
1. [女子追尾身亡男友副驾睡觉被起诉 (Woman killed in rear-end collision, boyfriend charged while sleeping in front passenger seat)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%BD%E5%B0%BE%E8%BA%AB%E4%BA%A1%E7%94%B7%E5%8F%8B%E5%89%AF%E9%A9%BE%E7%9D%A1%E8%A7%89%E8%A2%AB%E8%B5%B7%E8%AF%89%23) `346.7K 🔥` `-68%`
1. [伊朗前总统内贾德被软禁](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%89%8D%E6%80%BB%E7%BB%9F%E5%86%85%E8%B4%BE%E5%BE%B7%E8%A2%AB%E8%BD%AF%E7%A6%81%23) `261.2K 🔥` `-36%`
1. [疑AI照片拿了摄影比赛一等奖](https://s.weibo.com/weibo?q=%23%E7%96%91AI%E7%85%A7%E7%89%87%E6%8B%BF%E4%BA%86%E6%91%84%E5%BD%B1%E6%AF%94%E8%B5%9B%E4%B8%80%E7%AD%89%E5%A5%96%23) `260.9K 🔥` `-50%`
1. [虞书欣 全世界正数第一会穿搭 (Yu Shuxin is the best in the world at dressing up)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E5%85%A8%E4%B8%96%E7%95%8C%E6%AD%A3%E6%95%B0%E7%AC%AC%E4%B8%80%E4%BC%9A%E7%A9%BF%E6%90%AD%23) `259.5K 🔥` `-51%`
1. [谁让迪丽热巴唱的大魔王好无语](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%AE%A9%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%94%B1%E7%9A%84%E5%A4%A7%E9%AD%94%E7%8E%8B%E5%A5%BD%E6%97%A0%E8%AF%AD%23) `255.7K 🔥` `-54%`
1. [离开JYP的TWICE成员 (TWICE members who left JYP)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%BC%80JYP%E7%9A%84TWICE%E6%88%90%E5%91%98%23) `165.6K 🔥` `-40%`
1. [TF家族公众号更新严浩翔](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E5%85%AC%E4%BC%97%E5%8F%B7%E6%9B%B4%E6%96%B0%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `160.4K 🔥` `-38%`

Updated at 2026-07-14 23:01:59

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
