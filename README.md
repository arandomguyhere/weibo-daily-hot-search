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

1. [爷爷生前录音赠孙女百万遗产无效 (Grandpa’s recording of a million-dollar inheritance gift to his granddaughter is invalid)](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E7%94%9F%E5%89%8D%E5%BD%95%E9%9F%B3%E8%B5%A0%E5%AD%99%E5%A5%B3%E7%99%BE%E4%B8%87%E9%81%97%E4%BA%A7%E6%97%A0%E6%95%88%23) `1.1M 🔥` `NEW`
1. [京东买药十周年 想补贴的药你说了算](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E4%B9%B0%E8%8D%AF%E5%8D%81%E5%91%A8%E5%B9%B4%20%E6%83%B3%E8%A1%A5%E8%B4%B4%E7%9A%84%E8%8D%AF%E4%BD%A0%E8%AF%B4%E4%BA%86%E7%AE%97%23) `616.9K 🔥` `NEW`
1. [李小冉一公第一名](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E5%85%AC%E7%AC%AC%E4%B8%80%E5%90%8D%23) `611.9K 🔥` `NEW`
1. [泰国泼水节216人死亡](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82216%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `493.9K 🔥` `NEW`
1. [警惕二手交易陷阱](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%83%95%E4%BA%8C%E6%89%8B%E4%BA%A4%E6%98%93%E9%99%B7%E9%98%B1%23) `297.8K 🔥` `NEW`
1. [日本诋毁邻国是为再军事化辩护](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%AF%8B%E6%AF%81%E9%82%BB%E5%9B%BD%E6%98%AF%E4%B8%BA%E5%86%8D%E5%86%9B%E4%BA%8B%E5%8C%96%E8%BE%A9%E6%8A%A4%23) `142.9K 🔥` `NEW`
1. [单依纯王菲 造型](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E7%8E%8B%E8%8F%B2%20%E9%80%A0%E5%9E%8B%23) `142.5K 🔥` `NEW`
1. [郭敬明 选秀](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%20%E9%80%89%E7%A7%80%23) `141.6K 🔥` `NEW`
1. [中方否决涉霍尔木兹海峡决议草案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%90%A6%E5%86%B3%E6%B6%89%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%86%B3%E8%AE%AE%E8%8D%89%E6%A1%88%23) `140.5K 🔥` `NEW`
1. [孙怡动用人脉当上了最不想当的队长](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%8A%A8%E7%94%A8%E4%BA%BA%E8%84%89%E5%BD%93%E4%B8%8A%E4%BA%86%E6%9C%80%E4%B8%8D%E6%83%B3%E5%BD%93%E7%9A%84%E9%98%9F%E9%95%BF%23) `139.9K 🔥` `NEW`
1. [李纯爸爸回应李纯马頔恋情曝光 (Li Chun’s father responds to Li Chun and Ma Di’s relationship exposure)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BA%AF%E7%88%B8%E7%88%B8%E5%9B%9E%E5%BA%94%E6%9D%8E%E7%BA%AF%E9%A9%AC%E9%A0%94%E6%81%8B%E6%83%85%E6%9B%9D%E5%85%89%23) `139.1K 🔥` `NEW`
1. [从郑州出发寻根世界](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E9%83%91%E5%B7%9E%E5%87%BA%E5%8F%91%E5%AF%BB%E6%A0%B9%E4%B8%96%E7%95%8C%23) `138.7K 🔥` `NEW`
1. [终末地最大方的一集](https://s.weibo.com/weibo?q=%23%E7%BB%88%E6%9C%AB%E5%9C%B0%E6%9C%80%E5%A4%A7%E6%96%B9%E7%9A%84%E4%B8%80%E9%9B%86%23) `137.5K 🔥` `NEW`
1. [朴春手写信回应曝朴山多拉涉毒](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E6%98%A5%E6%89%8B%E5%86%99%E4%BF%A1%E5%9B%9E%E5%BA%94%E6%9B%9D%E6%9C%B4%E5%B1%B1%E5%A4%9A%E6%8B%89%E6%B6%89%E6%AF%92%23) `136.8K 🔥` `NEW`
1. [向太每月给向华强前妻10万赡养费](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%AF%8F%E6%9C%88%E7%BB%99%E5%90%91%E5%8D%8E%E5%BC%BA%E5%89%8D%E5%A6%BB10%E4%B8%87%E8%B5%A1%E5%85%BB%E8%B4%B9%23) `135.2K 🔥` `NEW`
1. [主体性好强的一句一下就被点醒了](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BD%93%E6%80%A7%E5%A5%BD%E5%BC%BA%E7%9A%84%E4%B8%80%E5%8F%A5%E4%B8%80%E4%B8%8B%E5%B0%B1%E8%A2%AB%E7%82%B9%E9%86%92%E4%BA%86%23) `131.5K 🔥` `NEW`
1. [朴彩英宋雨琦活动生图](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BD%A9%E8%8B%B1%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%B4%BB%E5%8A%A8%E7%94%9F%E5%9B%BE%23) `130.2K 🔥` `NEW`
1. [念相思开通官微](https://s.weibo.com/weibo?q=%23%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%BC%80%E9%80%9A%E5%AE%98%E5%BE%AE%23) `123.3K 🔥` `NEW`
1. [黎巴嫩民众庆祝黎以临时停火生效](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E5%B7%B4%E5%AB%A9%E6%B0%91%E4%BC%97%E5%BA%86%E7%A5%9D%E9%BB%8E%E4%BB%A5%E4%B8%B4%E6%97%B6%E5%81%9C%E7%81%AB%E7%94%9F%E6%95%88%23) `91.4K 🔥` `NEW`
1. [家长为儿子选高中竟只看有无马桶](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E4%B8%BA%E5%84%BF%E5%AD%90%E9%80%89%E9%AB%98%E4%B8%AD%E7%AB%9F%E5%8F%AA%E7%9C%8B%E6%9C%89%E6%97%A0%E9%A9%AC%E6%A1%B6%23) `86.6K 🔥` `NEW`
1. [浪姐一公乘风值排名 (Langjie Yigong Chengfeng Value Ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%80%E5%85%AC%E4%B9%98%E9%A3%8E%E5%80%BC%E6%8E%92%E5%90%8D%23) `86.6K 🔥` `NEW`
1. [雷军说被黑最惨的都是最优秀公司](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E8%A2%AB%E9%BB%91%E6%9C%80%E6%83%A8%E7%9A%84%E9%83%BD%E6%98%AF%E6%9C%80%E4%BC%98%E7%A7%80%E5%85%AC%E5%8F%B8%23) `86.6K 🔥` `NEW`
1. [加拿大鹅快把新西兰人逼疯了](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E9%B9%85%E5%BF%AB%E6%8A%8A%E6%96%B0%E8%A5%BF%E5%85%B0%E4%BA%BA%E9%80%BC%E7%96%AF%E4%BA%86%23) `85.4K 🔥` `NEW`
1. [朝鲜发声直指日本](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E5%8F%91%E5%A3%B0%E7%9B%B4%E6%8C%87%E6%97%A5%E6%9C%AC%23) `85.3K 🔥` `NEW`
1. [王濛李小冉 老夫老妻](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%9D%8E%E5%B0%8F%E5%86%89%20%E8%80%81%E5%A4%AB%E8%80%81%E5%A6%BB%23) `85.3K 🔥` `NEW`
1. [周深官宣大眼音乐节](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%AE%98%E5%AE%A3%E5%A4%A7%E7%9C%BC%E9%9F%B3%E4%B9%90%E8%8A%82%23) `85.3K 🔥` `NEW`
1. [张月陈瑶浪姐二公二搭](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E4%BA%8C%E6%90%AD%23) `83.9K 🔥` `NEW`
1. [月鳞绮纪HE](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AAHE%23) `82.9K 🔥` `NEW`
1. [雷军称考虑过出大众配置车型](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A7%B0%E8%80%83%E8%99%91%E8%BF%87%E5%87%BA%E5%A4%A7%E4%BC%97%E9%85%8D%E7%BD%AE%E8%BD%A6%E5%9E%8B%23) `81.4K 🔥` `NEW`
1. [KPL老乡杯采访](https://s.weibo.com/weibo?q=%23KPL%E8%80%81%E4%B9%A1%E6%9D%AF%E9%87%87%E8%AE%BF%23) `80.7K 🔥` `NEW`
1. [乳腺癌高危人群建议30岁起每年检查 (People at high risk of breast cancer are recommended to have annual check-ups starting at the age of 30)](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E8%85%BA%E7%99%8C%E9%AB%98%E5%8D%B1%E4%BA%BA%E7%BE%A4%E5%BB%BA%E8%AE%AE30%E5%B2%81%E8%B5%B7%E6%AF%8F%E5%B9%B4%E6%A3%80%E6%9F%A5%23) `79.9K 🔥` `NEW`
1. [被阴天的紫外线背刺了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%98%B4%E5%A4%A9%E7%9A%84%E7%B4%AB%E5%A4%96%E7%BA%BF%E8%83%8C%E5%88%BA%E4%BA%86%23) `76.7K 🔥` `NEW`
1. [舒淇给自己煮瘦面](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E7%BB%99%E8%87%AA%E5%B7%B1%E7%85%AE%E7%98%A6%E9%9D%A2%23) `75.3K 🔥` `NEW`
1. [乘风二公真人秀 (Chengfeng Ergong reality show)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E4%BA%8C%E5%85%AC%E7%9C%9F%E4%BA%BA%E7%A7%80%23) `773.8K 🔥` `+317%`
1. [以色列剧本被撕了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%89%A7%E6%9C%AC%E8%A2%AB%E6%92%95%E4%BA%86%23) `281.7K 🔥` `+115%`
1. [雷军直播](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%9B%B4%E6%92%AD%23) `143.9K 🔥` `+41%`
1. [广州越秀公园惊现猫蛇大战](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E8%B6%8A%E7%A7%80%E5%85%AC%E5%9B%AD%E6%83%8A%E7%8E%B0%E7%8C%AB%E8%9B%87%E5%A4%A7%E6%88%98%23) `135.6K 🔥` `+31%`
1. [TF四代 八小只](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%20%E5%85%AB%E5%B0%8F%E5%8F%AA%23) `128.7K 🔥` `+28%`
1. [首发首展首秀集中亮相消博会](https://s.weibo.com/weibo?q=%23%E9%A6%96%E5%8F%91%E9%A6%96%E5%B1%95%E9%A6%96%E7%A7%80%E9%9B%86%E4%B8%AD%E4%BA%AE%E7%9B%B8%E6%B6%88%E5%8D%9A%E4%BC%9A%23) `619.5K 🔥`
1. [鹿晗工作室 躺平](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E8%BA%BA%E5%B9%B3%23) `132.3K 🔥`
1. [阿拉蕾长这么高了 (Arale has grown so tall)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%8B%89%E8%95%BE%E9%95%BF%E8%BF%99%E4%B9%88%E9%AB%98%E4%BA%86%23) `132.1K 🔥`
1. [章若楠工作室喊话剧方](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%96%8A%E8%AF%9D%E5%89%A7%E6%96%B9%23) `131.3K 🔥`
1. [曝清清性骚扰 (Qingqing sexual harassment exposed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B8%85%E6%B8%85%E6%80%A7%E9%AA%9A%E6%89%B0%23) `129.9K 🔥`
1. [贝嫂回应与大儿子决裂 (Beckham responds to breakup with eldest son)](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%AB%82%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%A4%A7%E5%84%BF%E5%AD%90%E5%86%B3%E8%A3%82%23) `104.8K 🔥`
1. [章若楠片场拍戏走神 (Zhang Ruonan was distracted during filming on the set)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%89%87%E5%9C%BA%E6%8B%8D%E6%88%8F%E8%B5%B0%E7%A5%9E%23) `358.4K 🔥` `-40%`
1. [雷军回应是否做10万以内车型](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E5%81%9A10%E4%B8%87%E4%BB%A5%E5%86%85%E8%BD%A6%E5%9E%8B%23) `144.1K 🔥` `-82%`
1. [中国女生在韩遭男子性骚扰被劝和解](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%9C%A8%E9%9F%A9%E9%81%AD%E7%94%B7%E5%AD%90%E6%80%A7%E9%AA%9A%E6%89%B0%E8%A2%AB%E5%8A%9D%E5%92%8C%E8%A7%A3%23) `136.5K 🔥` `-51%`
1. [北影节主持人裙子 吸雨变色 (Beijing Film Festival host's skirt changes color after absorbing rain)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%BD%B1%E8%8A%82%E4%B8%BB%E6%8C%81%E4%BA%BA%E8%A3%99%E5%AD%90%20%E5%90%B8%E9%9B%A8%E5%8F%98%E8%89%B2%23) `134.0K 🔥` `-88%`
1. [爸爸 又怎么了我的大小姐](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%20%E5%8F%88%E6%80%8E%E4%B9%88%E4%BA%86%E6%88%91%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%A7%90%23) `133.3K 🔥` `-73%`
1. [幼儿园老师回应睡过头被孩子们叫醒](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%80%81%E5%B8%88%E5%9B%9E%E5%BA%94%E7%9D%A1%E8%BF%87%E5%A4%B4%E8%A2%AB%E5%AD%A9%E5%AD%90%E4%BB%AC%E5%8F%AB%E9%86%92%23) `128.9K 🔥` `-46%`
1. [清清否认性骚扰](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%B8%85%E5%90%A6%E8%AE%A4%E6%80%A7%E9%AA%9A%E6%89%B0%23) `85.9K 🔥` `-34%`
1. [中国向伊朗提供58吨物资援助](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%90%91%E4%BC%8A%E6%9C%97%E6%8F%90%E4%BE%9B58%E5%90%A8%E7%89%A9%E8%B5%84%E6%8F%B4%E5%8A%A9%23) `84.7K 🔥` `-67%`

Updated at 2026-04-17 14:18:16

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
