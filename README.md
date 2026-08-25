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

1. [小伙把腹胀当胃病查出肝癌晚期 (Man mistook abdominal bloating for stomach trouble and was diagnosed with late-stage liver cancer)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E6%8A%8A%E8%85%B9%E8%83%80%E5%BD%93%E8%83%83%E7%97%85%E6%9F%A5%E5%87%BA%E8%82%9D%E7%99%8C%E6%99%9A%E6%9C%9F%23) `38.9K 🔥` `NEW`
1. [约8500名朝鲜兵员部署至俄乌前线](https://s.weibo.com/weibo?q=%23%E7%BA%A68500%E5%90%8D%E6%9C%9D%E9%B2%9C%E5%85%B5%E5%91%98%E9%83%A8%E7%BD%B2%E8%87%B3%E4%BF%84%E4%B9%8C%E5%89%8D%E7%BA%BF%23) `38.8K 🔥` `NEW`
1. [30多国准备派兵乌克兰](https://s.weibo.com/weibo?q=%2330%E5%A4%9A%E5%9B%BD%E5%87%86%E5%A4%87%E6%B4%BE%E5%85%B5%E4%B9%8C%E5%85%8B%E5%85%B0%23) `74.9K 🔥`
1. [这种黑色小飞虫是移动病菌库](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E9%BB%91%E8%89%B2%E5%B0%8F%E9%A3%9E%E8%99%AB%E6%98%AF%E7%A7%BB%E5%8A%A8%E7%97%85%E8%8F%8C%E5%BA%93%23) `52.8K 🔥`
1. [医生谈1米67女孩101斤被认定偏重](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%B0%881%E7%B1%B367%E5%A5%B3%E5%AD%A9101%E6%96%A4%E8%A2%AB%E8%AE%A4%E5%AE%9A%E5%81%8F%E9%87%8D%23) `50.9K 🔥`
1. [杭州警方通报女子称在电梯遭骚扰](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%9C%A8%E7%94%B5%E6%A2%AF%E9%81%AD%E9%AA%9A%E6%89%B0%23) `49.5K 🔥`
1. [金鹰奖提名名单 (Golden Eagle Award Nomination List)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `48.9K 🔥`
1. [白鹿的奖运](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9A%84%E5%A5%96%E8%BF%90%23) `42.3K 🔥`
1. [灵活就业 社保压力 (Flexible employment and social security pressure)](https://s.weibo.com/weibo?q=%23%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%20%E7%A4%BE%E4%BF%9D%E5%8E%8B%E5%8A%9B%23) `42.2K 🔥`
1. [在韩失联女生已遇害 (Missing girl in South Korea has been killed)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E5%B7%B2%E9%81%87%E5%AE%B3%23) `41.3K 🔥`
1. [内娱十年前真的很流行谈恋爱和结婚 (Domestic entertainment was really popular about dating and marriage ten years ago)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9C%9F%E7%9A%84%E5%BE%88%E6%B5%81%E8%A1%8C%E8%B0%88%E6%81%8B%E7%88%B1%E5%92%8C%E7%BB%93%E5%A9%9A%23) `41.0K 🔥`
1. [朱志鑫cue到troublemaker](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABcue%E5%88%B0troublemaker%23) `39.8K 🔥`
1. [我驻釜山总领事馆要求严惩凶手](https://s.weibo.com/weibo?q=%23%E6%88%91%E9%A9%BB%E9%87%9C%E5%B1%B1%E6%80%BB%E9%A2%86%E4%BA%8B%E9%A6%86%E8%A6%81%E6%B1%82%E4%B8%A5%E6%83%A9%E5%87%B6%E6%89%8B%23) `39.8K 🔥`
1. [乳房触诊当事医生称已起诉](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A%E5%BD%93%E4%BA%8B%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%B7%B2%E8%B5%B7%E8%AF%89%23) `39.7K 🔥`
1. [小米阔折叠原型机加了风扇 (Xiaomi’s foldable prototype phone adds a fan)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%98%94%E6%8A%98%E5%8F%A0%E5%8E%9F%E5%9E%8B%E6%9C%BA%E5%8A%A0%E4%BA%86%E9%A3%8E%E6%89%87%23) `39.7K 🔥`
1. [苹果M6芯片 (Apple M6 chip)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CM6%E8%8A%AF%E7%89%87%23) `39.6K 🔥`
1. [韩警方将对遇害女生遗体进行尸检](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E5%B0%86%E5%AF%B9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E9%81%97%E4%BD%93%E8%BF%9B%E8%A1%8C%E5%B0%B8%E6%A3%80%23) `39.6K 🔥`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `39.5K 🔥`
1. [高考英语40分成邮轮双语主持人 (College Entrance Examination English 40 points bilingual host on cruise ship)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E8%8B%B1%E8%AF%AD40%E5%88%86%E6%88%90%E9%82%AE%E8%BD%AE%E5%8F%8C%E8%AF%AD%E4%B8%BB%E6%8C%81%E4%BA%BA%23) `39.5K 🔥`
1. [何以悬空寺爆火 (Why did the Hanging Temple explode?)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%BB%A5%E6%82%AC%E7%A9%BA%E5%AF%BA%E7%88%86%E7%81%AB%23) `39.5K 🔥`
1. [早春晴朗 (Sunny early spring)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `39.4K 🔥`
1. [13岁用AI接百万商单](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E7%94%A8AI%E6%8E%A5%E7%99%BE%E4%B8%87%E5%95%86%E5%8D%95%23) `39.3K 🔥`
1. [这份卤肉教程堪比一篇论文](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BB%BD%E5%8D%A4%E8%82%89%E6%95%99%E7%A8%8B%E5%A0%AA%E6%AF%94%E4%B8%80%E7%AF%87%E8%AE%BA%E6%96%87%23) `39.3K 🔥`
1. [人真是环境的产物](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%9C%9F%E6%98%AF%E7%8E%AF%E5%A2%83%E7%9A%84%E4%BA%A7%E7%89%A9%23) `39.3K 🔥`
1. [原来这种身材是天选种地人](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E7%A7%8D%E8%BA%AB%E6%9D%90%E6%98%AF%E5%A4%A9%E9%80%89%E7%A7%8D%E5%9C%B0%E4%BA%BA%23) `39.2K 🔥`
1. [邻居否认牌馆去世老人与店主不熟 (Neighbors deny that the old man who passed away at the card shop was not familiar with the shop owner)](https://s.weibo.com/weibo?q=%23%E9%82%BB%E5%B1%85%E5%90%A6%E8%AE%A4%E7%89%8C%E9%A6%86%E5%8E%BB%E4%B8%96%E8%80%81%E4%BA%BA%E4%B8%8E%E5%BA%97%E4%B8%BB%E4%B8%8D%E7%86%9F%23) `39.2K 🔥`
1. [提醒中国公民暂勿前往斯威士兰 (Chinese citizens are reminded not to travel to Swaziland for the time being)](https://s.weibo.com/weibo?q=%23%E6%8F%90%E9%86%92%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E6%9A%82%E5%8B%BF%E5%89%8D%E5%BE%80%E6%96%AF%E5%A8%81%E5%A3%AB%E5%85%B0%23) `39.1K 🔥`
1. [女子因裁员焦虑每天通宵学习](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E8%A3%81%E5%91%98%E7%84%A6%E8%99%91%E6%AF%8F%E5%A4%A9%E9%80%9A%E5%AE%B5%E5%AD%A6%E4%B9%A0%23) `39.1K 🔥`
1. [爱情公寓 王冠](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%20%E7%8E%8B%E5%86%A0%23) `39.1K 🔥`
1. [原来大家都是这样防止被套话的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E9%98%B2%E6%AD%A2%E8%A2%AB%E5%A5%97%E8%AF%9D%E7%9A%84%23) `39.0K 🔥`
1. [律师解读电梯骚扰事件女子被立案](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB%E7%94%B5%E6%A2%AF%E9%AA%9A%E6%89%B0%E4%BA%8B%E4%BB%B6%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%AB%8B%E6%A1%88%23) `39.0K 🔥`
1. [72%教师下班后仍需及时回信息 (72% of teachers still need to reply to messages in a timely manner after get off work)](https://s.weibo.com/weibo?q=%2372%25%E6%95%99%E5%B8%88%E4%B8%8B%E7%8F%AD%E5%90%8E%E4%BB%8D%E9%9C%80%E5%8F%8A%E6%97%B6%E5%9B%9E%E4%BF%A1%E6%81%AF%23) `38.9K 🔥`
1. [苹果发布全球首款量产2nm芯片 (Apple releases the world's first mass-produced 2nm chip)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E5%85%A8%E7%90%83%E9%A6%96%E6%AC%BE%E9%87%8F%E4%BA%A72nm%E8%8A%AF%E7%89%87%23) `38.8K 🔥`
1. [过得好的人最明显的标志 (The most obvious sign of a person who is doing well)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BE%97%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9C%80%E6%98%8E%E6%98%BE%E7%9A%84%E6%A0%87%E5%BF%97%23) `605.4K 🔥` `-33%`
1. [杀害在韩女生嫌疑人曾自称男友报警 (The suspect who killed a Korean girl once claimed to be her boyfriend and called the police)](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E5%9C%A8%E9%9F%A9%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%96%91%E4%BA%BA%E6%9B%BE%E8%87%AA%E7%A7%B0%E7%94%B7%E5%8F%8B%E6%8A%A5%E8%AD%A6%23) `397.5K 🔥` `-32%`
1. [6张网建设进度条刷新 (6 network construction progress bars refreshed)](https://s.weibo.com/weibo?q=%236%E5%BC%A0%E7%BD%91%E5%BB%BA%E8%AE%BE%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%88%B7%E6%96%B0%23) `240.0K 🔥` `-35%`
1. [孙红雷新座驾泰钽700上市了 (Sun Honglei’s new car Taitan 700 is launched)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E6%96%B0%E5%BA%A7%E9%A9%BE%E6%B3%B0%E9%92%BD700%E4%B8%8A%E5%B8%82%E4%BA%86%23) `220.7K 🔥` `-31%`
1. [中国公民尽快撤离斯威士兰 (Chinese citizens evacuate Swaziland as soon as possible)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%B0%BD%E5%BF%AB%E6%92%A4%E7%A6%BB%E6%96%AF%E5%A8%81%E5%A3%AB%E5%85%B0%23) `187.8K 🔥` `-23%`
1. [刘亦菲掉提金鹰奖最佳女主 (Liu Yifei was nominated for the Golden Eagle Award for Best Actress)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%8E%89%E6%8F%90%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%23) `132.9K 🔥` `-22%`
1. [13岁上海女孩靠AI三天赚1.8万元](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E4%B8%8A%E6%B5%B7%E5%A5%B3%E5%AD%A9%E9%9D%A0AI%E4%B8%89%E5%A4%A9%E8%B5%9A1.8%E4%B8%87%E5%85%83%23) `74.6K 🔥` `-29%`
1. [爱情公寓网传名单没有陈赫王传君金世佳](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E7%BD%91%E4%BC%A0%E5%90%8D%E5%8D%95%E6%B2%A1%E6%9C%89%E9%99%88%E8%B5%AB%E7%8E%8B%E4%BC%A0%E5%90%9B%E9%87%91%E4%B8%96%E4%BD%B3%23) `60.2K 🔥` `-26%`
1. [在嫌疑人住处发现在韩遇害女生遗体 (The body of a girl killed in South Korea was found at the suspect's residence)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%AB%8C%E7%96%91%E4%BA%BA%E4%BD%8F%E5%A4%84%E5%8F%91%E7%8E%B0%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E9%81%97%E4%BD%93%23) `58.9K 🔥` `-24%`
1. [原来只有我上班在乱穿](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%8F%AA%E6%9C%89%E6%88%91%E4%B8%8A%E7%8F%AD%E5%9C%A8%E4%B9%B1%E7%A9%BF%23) `57.2K 🔥` `-33%`
1. [洪崖洞](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B4%96%E6%B4%9E%23) `55.1K 🔥` `-25%`
1. [赴韩失联女生父母至今仍不知情 (Parents of missing girl who went to South Korea still don’t know)](https://s.weibo.com/weibo?q=%23%E8%B5%B4%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E7%88%B6%E6%AF%8D%E8%87%B3%E4%BB%8A%E4%BB%8D%E4%B8%8D%E7%9F%A5%E6%83%85%23) `52.5K 🔥` `-22%`
1. [爱情公寓](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%23) `50.4K 🔥` `-23%`
1. [goodthings 难听](https://s.weibo.com/weibo?q=%23goodthings%20%E9%9A%BE%E5%90%AC%23) `49.5K 🔥` `-31%`
1. [在韩失联中国女生死因或涉暴力犯罪 (Cause of death of missing Chinese girl in South Korea may be related to violent crime)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E6%AD%BB%E5%9B%A0%E6%88%96%E6%B6%89%E6%9A%B4%E5%8A%9B%E7%8A%AF%E7%BD%AA%23) `47.9K 🔥` `-23%`
1. [考公女子在星巴克撑伞备考](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%85%AC%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%98%9F%E5%B7%B4%E5%85%8B%E6%92%91%E4%BC%9E%E5%A4%87%E8%80%83%23) `39.9K 🔥` `-21%`
1. [亚运会预算超标](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E9%A2%84%E7%AE%97%E8%B6%85%E6%A0%87%23) `39.8K 🔥` `-21%`
1. [25岁失联中国女生不太会说韩语 (25-year-old missing Chinese girl doesn’t speak Korean well)](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E4%B8%8D%E5%A4%AA%E4%BC%9A%E8%AF%B4%E9%9F%A9%E8%AF%AD%23) `38.7K 🔥` `-46%`

Updated at 2026-08-26 03:44:44

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
