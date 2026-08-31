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

1. [成毅邀你共庆焕彩35载](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E9%82%80%E4%BD%A0%E5%85%B1%E5%BA%86%E7%84%95%E5%BD%A935%E8%BD%BD%23) `168.5K 🔥` `NEW`
1. [吉隆口岸遍布巨石](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E9%81%8D%E5%B8%83%E5%B7%A8%E7%9F%B3%23) `145.5K 🔥` `NEW`
1. [敖瑞鹏和孙千领奖像是在走T台](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E5%92%8C%E5%AD%99%E5%8D%83%E9%A2%86%E5%A5%96%E5%83%8F%E6%98%AF%E5%9C%A8%E8%B5%B0T%E5%8F%B0%23) `121.9K 🔥` `NEW`
1. [黄磊回应不再参加向往的生活](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%86%8D%E5%8F%82%E5%8A%A0%E5%90%91%E5%BE%80%E7%9A%84%E7%94%9F%E6%B4%BB%23) `116.9K 🔥` `NEW`
1. [孙千飞机上收到空姐的信](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E9%A3%9E%E6%9C%BA%E4%B8%8A%E6%94%B6%E5%88%B0%E7%A9%BA%E5%A7%90%E7%9A%84%E4%BF%A1%23) `107.4K 🔥` `NEW`
1. [王鸥回复李小冉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%E5%9B%9E%E5%A4%8D%E6%9D%8E%E5%B0%8F%E5%86%89%23) `92.6K 🔥` `NEW`
1. [子宫状态好的人经期有5个特点](https://s.weibo.com/weibo?q=%23%E5%AD%90%E5%AE%AB%E7%8A%B6%E6%80%81%E5%A5%BD%E7%9A%84%E4%BA%BA%E7%BB%8F%E6%9C%9F%E6%9C%895%E4%B8%AA%E7%89%B9%E7%82%B9%23) `91.8K 🔥` `NEW`
1. [王鸥采访曾说孩子的父亲很重要](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%E9%87%87%E8%AE%BF%E6%9B%BE%E8%AF%B4%E5%AD%A9%E5%AD%90%E7%9A%84%E7%88%B6%E4%BA%B2%E5%BE%88%E9%87%8D%E8%A6%81%23) `87.4K 🔥` `NEW`
1. [新加坡女童申请不要弟妹](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%A5%B3%E7%AB%A5%E7%94%B3%E8%AF%B7%E4%B8%8D%E8%A6%81%E5%BC%9F%E5%A6%B9%23) `83.5K 🔥` `NEW`
1. [张凌赫人比滑梯长](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BA%BA%E6%AF%94%E6%BB%91%E6%A2%AF%E9%95%BF%23) `83.5K 🔥` `NEW`
1. [女子自称工地小工不满11万医美效果](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%87%AA%E7%A7%B0%E5%B7%A5%E5%9C%B0%E5%B0%8F%E5%B7%A5%E4%B8%8D%E6%BB%A111%E4%B8%87%E5%8C%BB%E7%BE%8E%E6%95%88%E6%9E%9C%23) `83.5K 🔥` `NEW`
1. [朱志鑫张极拌嘴其他人的反应](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%BC%A0%E6%9E%81%E6%8B%8C%E5%98%B4%E5%85%B6%E4%BB%96%E4%BA%BA%E7%9A%84%E5%8F%8D%E5%BA%94%23) `83.5K 🔥` `NEW`
1. [如何判断身上有没有癌记好这3个检查](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD%E8%BA%AB%E4%B8%8A%E6%9C%89%E6%B2%A1%E6%9C%89%E7%99%8C%E8%AE%B0%E5%A5%BD%E8%BF%993%E4%B8%AA%E6%A3%80%E6%9F%A5%23) `83.4K 🔥` `NEW`
1. [九成美说考研上岸是拍的小段子](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E6%88%90%E7%BE%8E%E8%AF%B4%E8%80%83%E7%A0%94%E4%B8%8A%E5%B2%B8%E6%98%AF%E6%8B%8D%E7%9A%84%E5%B0%8F%E6%AE%B5%E5%AD%90%23) `83.3K 🔥` `NEW`
1. [谁想到把郑云龙钟楚曦放一个剧里](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%83%B3%E5%88%B0%E6%8A%8A%E9%83%91%E4%BA%91%E9%BE%99%E9%92%9F%E6%A5%9A%E6%9B%A6%E6%94%BE%E4%B8%80%E4%B8%AA%E5%89%A7%E9%87%8C%23) `83.3K 🔥` `NEW`
1. [严丝合缝的两只小狗](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E4%B8%9D%E5%90%88%E7%BC%9D%E7%9A%84%E4%B8%A4%E5%8F%AA%E5%B0%8F%E7%8B%97%23) `83.2K 🔥` `NEW`
1. [塔沟武校学生确诊精神障碍需长期服药](https://s.weibo.com/weibo?q=%23%E5%A1%94%E6%B2%9F%E6%AD%A6%E6%A0%A1%E5%AD%A6%E7%94%9F%E7%A1%AE%E8%AF%8A%E7%B2%BE%E7%A5%9E%E9%9A%9C%E7%A2%8D%E9%9C%80%E9%95%BF%E6%9C%9F%E6%9C%8D%E8%8D%AF%23) `83.2K 🔥` `NEW`
1. [AI小鸭机器人24小时售260万美元](https://s.weibo.com/weibo?q=%23AI%E5%B0%8F%E9%B8%AD%E6%9C%BA%E5%99%A8%E4%BA%BA24%E5%B0%8F%E6%97%B6%E5%94%AE260%E4%B8%87%E7%BE%8E%E5%85%83%23) `83.0K 🔥` `NEW`
1. [郑钦文2比1柳托娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%872%E6%AF%941%E6%9F%B3%E6%89%98%E5%A8%83%23) `796.8K 🔥` `+459%`
1. [特朗普称伊朗已死](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%BC%8A%E6%9C%97%E5%B7%B2%E6%AD%BB%23) `586.8K 🔥` `+748%`
1. [20项措施推动消费扩容升级](https://s.weibo.com/weibo?q=%2320%E9%A1%B9%E6%8E%AA%E6%96%BD%E6%8E%A8%E5%8A%A8%E6%B6%88%E8%B4%B9%E6%89%A9%E5%AE%B9%E5%8D%87%E7%BA%A7%23) `538.1K 🔥` `+494%`
1. [一个超好用的情绪控制技巧](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E8%B6%85%E5%A5%BD%E7%94%A8%E7%9A%84%E6%83%85%E7%BB%AA%E6%8E%A7%E5%88%B6%E6%8A%80%E5%B7%A7%23) `504.7K 🔥` `+292%`
1. [阿根廷国家队致敬队长](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9B%BD%E5%AE%B6%E9%98%9F%E8%87%B4%E6%95%AC%E9%98%9F%E9%95%BF%23) `189.8K 🔥` `+167%`
1. [好直观的降本增效](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E7%9B%B4%E8%A7%82%E7%9A%84%E9%99%8D%E6%9C%AC%E5%A2%9E%E6%95%88%23) `171.6K 🔥` `+224%`
1. [还我季洁](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%88%91%E5%AD%A3%E6%B4%81%23) `148.0K 🔥` `+180%`
1. [尼泊尔泥石流已致939遇难3925失联](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%B7%B2%E8%87%B4939%E9%81%87%E9%9A%BE3925%E5%A4%B1%E8%81%94%23) `127.4K 🔥` `+141%`
1. [杨瀚森绝杀](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%BB%9D%E6%9D%80%23) `116.5K 🔥` `+121%`
1. [两小时演唱会休息了80分钟](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%B0%8F%E6%97%B6%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BC%91%E6%81%AF%E4%BA%8680%E5%88%86%E9%92%9F%23) `112.3K 🔥` `+114%`
1. [女子接收诈骗犯男友261万判不用还](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8E%A5%E6%94%B6%E8%AF%88%E9%AA%97%E7%8A%AF%E7%94%B7%E5%8F%8B261%E4%B8%87%E5%88%A4%E4%B8%8D%E7%94%A8%E8%BF%98%23) `107.9K 🔥` `+115%`
1. [沈腾回应关晓彤无米版徐福烩饭](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%9B%9E%E5%BA%94%E5%85%B3%E6%99%93%E5%BD%A4%E6%97%A0%E7%B1%B3%E7%89%88%E5%BE%90%E7%A6%8F%E7%83%A9%E9%A5%AD%23) `106.1K 🔥` `+103%`
1. [六大行房贷余额少了5000多亿](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%A4%A7%E8%A1%8C%E6%88%BF%E8%B4%B7%E4%BD%99%E9%A2%9D%E5%B0%91%E4%BA%865000%E5%A4%9A%E4%BA%BF%23) `102.9K 🔥` `+104%`
1. [重案六组](https://s.weibo.com/weibo?q=%23%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84%23) `96.8K 🔥` `+86%`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `93.5K 🔥` `+79%`
1. [曝科大讯飞公关副总裁被解职](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E5%85%AC%E5%85%B3%E5%89%AF%E6%80%BB%E8%A3%81%E8%A2%AB%E8%A7%A3%E8%81%8C%23) `93.1K 🔥` `+82%`
1. [办婚礼未领证男方去世判决结果](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%A9%9A%E7%A4%BC%E6%9C%AA%E9%A2%86%E8%AF%81%E7%94%B7%E6%96%B9%E5%8E%BB%E4%B8%96%E5%88%A4%E5%86%B3%E7%BB%93%E6%9E%9C%23) `90.7K 🔥` `+76%`
1. [一种燃脂不掉肌肉的吃饭方法](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%A7%8D%E7%87%83%E8%84%82%E4%B8%8D%E6%8E%89%E8%82%8C%E8%82%89%E7%9A%84%E5%90%83%E9%A5%AD%E6%96%B9%E6%B3%95%23) `90.2K 🔥` `+79%`
1. [日本男星回应电车内性侵高中女生](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E6%98%9F%E5%9B%9E%E5%BA%94%E7%94%B5%E8%BD%A6%E5%86%85%E6%80%A7%E4%BE%B5%E9%AB%98%E4%B8%AD%E5%A5%B3%E7%94%9F%23) `89.7K 🔥` `+71%`
1. [中国影坛最担心的事来了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BD%B1%E5%9D%9B%E6%9C%80%E6%8B%85%E5%BF%83%E7%9A%84%E4%BA%8B%E6%9D%A5%E4%BA%86%23) `83.7K 🔥` `+62%`
1. [经常看书与不看书的差距有多大](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E5%B8%B8%E7%9C%8B%E4%B9%A6%E4%B8%8E%E4%B8%8D%E7%9C%8B%E4%B9%A6%E7%9A%84%E5%B7%AE%E8%B7%9D%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `83.7K 🔥` `+63%`
1. [消化了这段话你就能少走五年弯路](https://s.weibo.com/weibo?q=%23%E6%B6%88%E5%8C%96%E4%BA%86%E8%BF%99%E6%AE%B5%E8%AF%9D%E4%BD%A0%E5%B0%B1%E8%83%BD%E5%B0%91%E8%B5%B0%E4%BA%94%E5%B9%B4%E5%BC%AF%E8%B7%AF%23) `83.7K 🔥` `+66%`
1. [AI长剧后西游记收视第一](https://s.weibo.com/weibo?q=%23AI%E9%95%BF%E5%89%A7%E5%90%8E%E8%A5%BF%E6%B8%B8%E8%AE%B0%E6%94%B6%E8%A7%86%E7%AC%AC%E4%B8%80%23) `83.6K 🔥` `+67%`
1. [沈腾评论关晓彤无米版徐福烩饭](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E8%AF%84%E8%AE%BA%E5%85%B3%E6%99%93%E5%BD%A4%E6%97%A0%E7%B1%B3%E7%89%88%E5%BE%90%E7%A6%8F%E7%83%A9%E9%A5%AD%23) `83.6K 🔥` `+66%`
1. [出生人口 双休落实](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F%E4%BA%BA%E5%8F%A3%20%E5%8F%8C%E4%BC%91%E8%90%BD%E5%AE%9E%23) `83.4K 🔥` `+64%`
1. [iG王者荣耀分部](https://s.weibo.com/weibo?q=%23iG%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%88%86%E9%83%A8%23) `83.3K 🔥` `+65%`
1. [半是蜜糖半是伤 于中中巅峰](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E6%98%AF%E8%9C%9C%E7%B3%96%E5%8D%8A%E6%98%AF%E4%BC%A4%20%E4%BA%8E%E4%B8%AD%E4%B8%AD%E5%B7%85%E5%B3%B0%23) `83.2K 🔥` `+66%`
1. [郑钦文vs柳托娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E6%9F%B3%E6%89%98%E5%A8%83%23) `83.1K 🔥` `+58%`
1. [中国男篮绝杀黎巴嫩男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E7%BB%9D%E6%9D%80%E9%BB%8E%E5%B7%B4%E5%AB%A9%E7%94%B7%E7%AF%AE%23) `83.1K 🔥` `+62%`
1. [出生人口连锁反应](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F%E4%BA%BA%E5%8F%A3%E8%BF%9E%E9%94%81%E5%8F%8D%E5%BA%94%23) `83.0K 🔥` `+66%`
1. [中方回应尼政府拒绝外国救援队](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E5%B0%BC%E6%94%BF%E5%BA%9C%E6%8B%92%E7%BB%9D%E5%A4%96%E5%9B%BD%E6%95%91%E6%8F%B4%E9%98%9F%23) `83.0K 🔥` `+65%`
1. [子涵梓萱的时代已成过去式](https://s.weibo.com/weibo?q=%23%E5%AD%90%E6%B6%B5%E6%A2%93%E8%90%B1%E7%9A%84%E6%97%B6%E4%BB%A3%E5%B7%B2%E6%88%90%E8%BF%87%E5%8E%BB%E5%BC%8F%23) `82.9K 🔥` `+59%`
1. [吉隆口岸唯一能看到的建筑](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%94%AF%E4%B8%80%E8%83%BD%E7%9C%8B%E5%88%B0%E7%9A%84%E5%BB%BA%E7%AD%91%23) `82.9K 🔥` `+60%`

Updated at 2026-09-01 07:26:02

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
