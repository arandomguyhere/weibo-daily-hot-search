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

1. [仰望汽车26款闪充焕新升级 (Look up to 26 new and upgraded flash charging models of cars)](https://s.weibo.com/weibo?q=%23%E4%BB%B0%E6%9C%9B%E6%B1%BD%E8%BD%A626%E6%AC%BE%E9%97%AA%E5%85%85%E7%84%95%E6%96%B0%E5%8D%87%E7%BA%A7%23) `620.9K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `266.1K 🔥` `NEW`
1. [猫 讨厌和瘦子拍照](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E8%AE%A8%E5%8E%8C%E5%92%8C%E7%98%A6%E5%AD%90%E6%8B%8D%E7%85%A7%23) `230.7K 🔥` `NEW`
1. [华为MateBookNeo曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMateBookNeo%E6%9B%9D%E5%85%89%23) `211.0K 🔥` `NEW`
1. [建议医务人员薪酬不得与创收挂钩](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%8C%BB%E5%8A%A1%E4%BA%BA%E5%91%98%E8%96%AA%E9%85%AC%E4%B8%8D%E5%BE%97%E4%B8%8E%E5%88%9B%E6%94%B6%E6%8C%82%E9%92%A9%23) `187.0K 🔥` `NEW`
1. [戴眼镜妆容公式](https://s.weibo.com/weibo?q=%23%E6%88%B4%E7%9C%BC%E9%95%9C%E5%A6%86%E5%AE%B9%E5%85%AC%E5%BC%8F%23) `129.3K 🔥` `NEW`
1. [纯真年代的爱情 烂尾](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%20%E7%83%82%E5%B0%BE%23) `128.1K 🔥` `NEW`
1. [伊拉克全境断电](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E5%85%A8%E5%A2%83%E6%96%AD%E7%94%B5%23) `110.1K 🔥` `NEW`
1. [本以为一次煎7条鱼就够吹牛了](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E4%BB%A5%E4%B8%BA%E4%B8%80%E6%AC%A1%E7%85%8E7%E6%9D%A1%E9%B1%BC%E5%B0%B1%E5%A4%9F%E5%90%B9%E7%89%9B%E4%BA%86%23) `110.0K 🔥` `NEW`
1. [广西整个四月都在上四休三](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%95%B4%E4%B8%AA%E5%9B%9B%E6%9C%88%E9%83%BD%E5%9C%A8%E4%B8%8A%E5%9B%9B%E4%BC%91%E4%B8%89%23) `109.4K 🔥` `NEW`
1. [我国就业形势有两大不匹配现象 (There are two major mismatches in my country’s employment situation)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%B0%B1%E4%B8%9A%E5%BD%A2%E5%8A%BF%E6%9C%89%E4%B8%A4%E5%A4%A7%E4%B8%8D%E5%8C%B9%E9%85%8D%E7%8E%B0%E8%B1%A1%23) `106.0K 🔥` `NEW`
1. [赵丽颖第一视角打戏好飒](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%AC%AC%E4%B8%80%E8%A7%86%E8%A7%92%E6%89%93%E6%88%8F%E5%A5%BD%E9%A3%92%23) `93.2K 🔥` `NEW`
1. [上班后理解了长辈](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E5%90%8E%E7%90%86%E8%A7%A3%E4%BA%86%E9%95%BF%E8%BE%88%23) `88.9K 🔥` `NEW`
1. [不建议大学生直接用AI写论文](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%9B%B4%E6%8E%A5%E7%94%A8AI%E5%86%99%E8%AE%BA%E6%96%87%23) `85.2K 🔥` `NEW`
1. [养生壶太全面了](https://s.weibo.com/weibo?q=%23%E5%85%BB%E7%94%9F%E5%A3%B6%E5%A4%AA%E5%85%A8%E9%9D%A2%E4%BA%86%23) `84.1K 🔥` `NEW`
1. [为什么很多演员演戏没有活人感](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%A4%9A%E6%BC%94%E5%91%98%E6%BC%94%E6%88%8F%E6%B2%A1%E6%9C%89%E6%B4%BB%E4%BA%BA%E6%84%9F%23) `79.7K 🔥` `NEW`
1. [春敏修护黄金法则](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%95%8F%E4%BF%AE%E6%8A%A4%E9%BB%84%E9%87%91%E6%B3%95%E5%88%99%23) `79.2K 🔥` `NEW`
1. [比Deepfake更严重的AI出现了](https://s.weibo.com/weibo?q=%23%E6%AF%94Deepfake%E6%9B%B4%E4%B8%A5%E9%87%8D%E7%9A%84AI%E5%87%BA%E7%8E%B0%E4%BA%86%23) `79.2K 🔥` `NEW`
1. [郑业成 我没有脱过那么多衣服](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%9A%E6%88%90%20%E6%88%91%E6%B2%A1%E6%9C%89%E8%84%B1%E8%BF%87%E9%82%A3%E4%B9%88%E5%A4%9A%E8%A1%A3%E6%9C%8D%23) `78.5K 🔥` `NEW`
1. [县城美甲 千禧年遗址](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%9F%8E%E7%BE%8E%E7%94%B2%20%E5%8D%83%E7%A6%A7%E5%B9%B4%E9%81%97%E5%9D%80%23) `74.3K 🔥` `NEW`
1. [孙颖莎诠释独立女性力量 (Sun Yingsha explains the power of independent women)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%A0%E9%87%8A%E7%8B%AC%E7%AB%8B%E5%A5%B3%E6%80%A7%E5%8A%9B%E9%87%8F%23) `74.2K 🔥` `NEW`
1. [建议优化大学生婚育教育体系](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%BC%98%E5%8C%96%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%A9%9A%E8%82%B2%E6%95%99%E8%82%B2%E4%BD%93%E7%B3%BB%23) `1.1M 🔥` `+119%`
1. [建议不调休的代表被记者围住了 (The representative who suggested not taking the day off was surrounded by reporters)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%B0%83%E4%BC%91%E7%9A%84%E4%BB%A3%E8%A1%A8%E8%A2%AB%E8%AE%B0%E8%80%85%E5%9B%B4%E4%BD%8F%E4%BA%86%23) `611.0K 🔥` `+300%`
1. [伊朗首次使用最快自杀式无人机 (Iran uses fastest suicide drone for first time)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E6%AC%A1%E4%BD%BF%E7%94%A8%E6%9C%80%E5%BF%AB%E8%87%AA%E6%9D%80%E5%BC%8F%E6%97%A0%E4%BA%BA%E6%9C%BA%23) `483.8K 🔥` `+90%`
1. [建议春节9天假代表收到很多祝贺 (The representatives received many congratulations on the proposed 9-day Spring Festival holiday.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%98%A5%E8%8A%829%E5%A4%A9%E5%81%87%E4%BB%A3%E8%A1%A8%E6%94%B6%E5%88%B0%E5%BE%88%E5%A4%9A%E7%A5%9D%E8%B4%BA%23) `775.6K 🔥`
1. [政府工作报告里的民生红包](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%E9%87%8C%E7%9A%84%E6%B0%91%E7%94%9F%E7%BA%A2%E5%8C%85%23) `623.0K 🔥`
1. [高铁一等座4元二等座8元](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E4%B8%80%E7%AD%89%E5%BA%A74%E5%85%83%E4%BA%8C%E7%AD%89%E5%BA%A78%E5%85%83%23) `200.4K 🔥`
1. [没有人觉得时代发展很快吗](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E4%BA%BA%E8%A7%89%E5%BE%97%E6%97%B6%E4%BB%A3%E5%8F%91%E5%B1%95%E5%BE%88%E5%BF%AB%E5%90%97%23) `136.2K 🔥`
1. [张小斐走红后 不抢不闹不迎合](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E8%B5%B0%E7%BA%A2%E5%90%8E%20%E4%B8%8D%E6%8A%A2%E4%B8%8D%E9%97%B9%E4%B8%8D%E8%BF%8E%E5%90%88%23) `129.6K 🔥`
1. [翻拍重案六组 (Remake of Serious Cases Group Six)](https://s.weibo.com/weibo?q=%23%E7%BF%BB%E6%8B%8D%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84%23) `612.7K 🔥` `-45%`
1. [建议三孩每月补贴5000元至3岁](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%89%E5%AD%A9%E6%AF%8F%E6%9C%88%E8%A1%A5%E8%B4%B45000%E5%85%83%E8%87%B33%E5%B2%81%23) `229.3K 🔥` `-25%`
1. [建议缩短研究生考录时间](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%BC%A9%E7%9F%AD%E7%A0%94%E7%A9%B6%E7%94%9F%E8%80%83%E5%BD%95%E6%97%B6%E9%97%B4%23) `213.4K 🔥` `-54%`
1. [中方将派特使访问中东](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%86%E6%B4%BE%E7%89%B9%E4%BD%BF%E8%AE%BF%E9%97%AE%E4%B8%AD%E4%B8%9C%23) `197.2K 🔥` `-55%`
1. [女子半年未回家走廊被邻居装修了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%8A%E5%B9%B4%E6%9C%AA%E5%9B%9E%E5%AE%B6%E8%B5%B0%E5%BB%8A%E8%A2%AB%E9%82%BB%E5%B1%85%E8%A3%85%E4%BF%AE%E4%BA%86%23) `192.8K 🔥` `-23%`
1. [麻辣拌史铁生 (Spicy Mixed Shi Tiesheng)](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E6%8B%8C%E5%8F%B2%E9%93%81%E7%94%9F%23) `160.2K 🔥` `-38%`
1. [人大代表说年轻人11点一定要睡觉](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E8%AF%B4%E5%B9%B4%E8%BD%BB%E4%BA%BA11%E7%82%B9%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9D%A1%E8%A7%89%23) `138.8K 🔥` `-25%`
1. [建议尽量不要调休 (It is recommended not to take any time off as much as possible)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%BD%E9%87%8F%E4%B8%8D%E8%A6%81%E8%B0%83%E4%BC%91%23) `132.6K 🔥` `-50%`
1. [neo是定位卖给国外中学生的](https://s.weibo.com/weibo?q=%23neo%E6%98%AF%E5%AE%9A%E4%BD%8D%E5%8D%96%E7%BB%99%E5%9B%BD%E5%A4%96%E4%B8%AD%E5%AD%A6%E7%94%9F%E7%9A%84%23) `132.2K 🔥` `-45%`
1. [张杰鸟巢演唱会12万张票秒罄 (120,000 tickets for Zhang Jie’s Bird’s Nest concert sold out in seconds)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A12%E4%B8%87%E5%BC%A0%E7%A5%A8%E7%A7%92%E7%BD%84%23) `129.3K 🔥` `-49%`
1. [日本正紧张研判是否支援美军](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%AD%A3%E7%B4%A7%E5%BC%A0%E7%A0%94%E5%88%A4%E6%98%AF%E5%90%A6%E6%94%AF%E6%8F%B4%E7%BE%8E%E5%86%9B%23) `128.8K 🔥` `-28%`
1. [郭敬明发了邓为眼部特写 (Guo Jingming posted a close-up of Deng Wei’s eyes)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%8F%91%E4%BA%86%E9%82%93%E4%B8%BA%E7%9C%BC%E9%83%A8%E7%89%B9%E5%86%99%23) `128.7K 🔥` `-27%`
1. [伊朗高官让特朗普想想美以谁优先](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%AB%98%E5%AE%98%E8%AE%A9%E7%89%B9%E6%9C%97%E6%99%AE%E6%83%B3%E6%83%B3%E7%BE%8E%E4%BB%A5%E8%B0%81%E4%BC%98%E5%85%88%23) `128.1K 🔥` `-27%`
1. [伊方称导弹击中一美国油轮](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%96%B9%E7%A7%B0%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E4%B8%80%E7%BE%8E%E5%9B%BD%E6%B2%B9%E8%BD%AE%23) `120.9K 🔥` `-33%`
1. [小偷来了都要先玩俩小时](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%81%B7%E6%9D%A5%E4%BA%86%E9%83%BD%E8%A6%81%E5%85%88%E7%8E%A9%E4%BF%A9%E5%B0%8F%E6%97%B6%23) `119.9K 🔥` `-34%`
1. [霍启刚希望明年春晚有香港分会场](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E5%B8%8C%E6%9C%9B%E6%98%8E%E5%B9%B4%E6%98%A5%E6%99%9A%E6%9C%89%E9%A6%99%E6%B8%AF%E5%88%86%E4%BC%9A%E5%9C%BA%23) `111.4K 🔥` `-51%`
1. [武林外传20年后最大彩蛋](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%9E%97%E5%A4%96%E4%BC%A020%E5%B9%B4%E5%90%8E%E6%9C%80%E5%A4%A7%E5%BD%A9%E8%9B%8B%23) `110.3K 🔥` `-54%`
1. [奶奶你是一块金子放错了地方 (Grandma, you are a piece of gold that has been misplaced.)](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E4%BD%A0%E6%98%AF%E4%B8%80%E5%9D%97%E9%87%91%E5%AD%90%E6%94%BE%E9%94%99%E4%BA%86%E5%9C%B0%E6%96%B9%23) `105.7K 🔥` `-42%`
1. [伊朗袭击以国防部大楼 (Iran attacks Israeli defense building)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E4%BB%A5%E5%9B%BD%E9%98%B2%E9%83%A8%E5%A4%A7%E6%A5%BC%23) `96.0K 🔥` `-35%`
1. [A股迎来大涨](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%BF%8E%E6%9D%A5%E5%A4%A7%E6%B6%A8%23) `86.4K 🔥` `-41%`
1. [35岁就业歧视应该得到了缓解 (35-year-old employment discrimination should be alleviated)](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%B0%B1%E4%B8%9A%E6%AD%A7%E8%A7%86%E5%BA%94%E8%AF%A5%E5%BE%97%E5%88%B0%E4%BA%86%E7%BC%93%E8%A7%A3%23) `79.8K 🔥` `-54%`
1. [伊朗的反击愈发猛烈](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E5%8F%8D%E5%87%BB%E6%84%88%E5%8F%91%E7%8C%9B%E7%83%88%23) `77.5K 🔥` `-48%`
1. [百妖谱](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%A6%96%E8%B0%B1%23) `71.1K 🔥` `-52%`

Updated at 2026-03-05 17:24:27

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
