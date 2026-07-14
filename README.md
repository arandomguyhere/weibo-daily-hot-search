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

1. [请愿逐出阿根廷人数已超500万 (Number of people petitioning for deportation from Argentina exceeds 5 million)](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%84%BF%E9%80%90%E5%87%BA%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BA%BA%E6%95%B0%E5%B7%B2%E8%B6%85500%E4%B8%87%23) `1.8M 🔥` `NEW`
1. [邹市明上海黄浦江边场馆年租金5000万](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E4%B8%8A%E6%B5%B7%E9%BB%84%E6%B5%A6%E6%B1%9F%E8%BE%B9%E5%9C%BA%E9%A6%86%E5%B9%B4%E7%A7%9F%E9%87%915000%E4%B8%87%23) `1.1M 🔥` `NEW`
1. [青春主场踏歌而行](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E4%B8%BB%E5%9C%BA%E8%B8%8F%E6%AD%8C%E8%80%8C%E8%A1%8C%23) `901.3K 🔥` `NEW`
1. [AI杀死时尚行业](https://s.weibo.com/weibo?q=%23AI%E6%9D%80%E6%AD%BB%E6%97%B6%E5%B0%9A%E8%A1%8C%E4%B8%9A%23) `745.4K 🔥` `NEW`
1. [途观帕萨特夏日风暴](https://s.weibo.com/weibo?q=%23%E9%80%94%E8%A7%82%E5%B8%95%E8%90%A8%E7%89%B9%E5%A4%8F%E6%97%A5%E9%A3%8E%E6%9A%B4%23) `670.0K 🔥` `NEW`
1. [疑AI照片拿了摄影比赛一等奖](https://s.weibo.com/weibo?q=%23%E7%96%91AI%E7%85%A7%E7%89%87%E6%8B%BF%E4%BA%86%E6%91%84%E5%BD%B1%E6%AF%94%E8%B5%9B%E4%B8%80%E7%AD%89%E5%A5%96%23) `633.1K 🔥` `NEW`
1. [去音乐节后没有容貌焦虑了](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E9%9F%B3%E4%B9%90%E8%8A%82%E5%90%8E%E6%B2%A1%E6%9C%89%E5%AE%B9%E8%B2%8C%E7%84%A6%E8%99%91%E4%BA%86%23) `577.7K 🔥` `NEW`
1. [小S和大女儿Elly小姐不熙娣合体花絮](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%92%8C%E5%A4%A7%E5%A5%B3%E5%84%BFElly%E5%B0%8F%E5%A7%90%E4%B8%8D%E7%86%99%E5%A8%A3%E5%90%88%E4%BD%93%E8%8A%B1%E7%B5%AE%23) `481.3K 🔥` `NEW`
1. [美国25岁女子性侵男童并录像](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD25%E5%B2%81%E5%A5%B3%E5%AD%90%E6%80%A7%E4%BE%B5%E7%94%B7%E7%AB%A5%E5%B9%B6%E5%BD%95%E5%83%8F%23) `453.9K 🔥` `NEW`
1. [章若楠跑男化妆师评论区被阴阳白干](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%B7%91%E7%94%B7%E5%8C%96%E5%A6%86%E5%B8%88%E8%AF%84%E8%AE%BA%E5%8C%BA%E8%A2%AB%E9%98%B4%E9%98%B3%E7%99%BD%E5%B9%B2%23) `393.9K 🔥` `NEW`
1. [邹市明场馆年卡定价8.8万 (The annual card of Zoushi Ming Stadium is priced at 88,000)](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%9C%BA%E9%A6%86%E5%B9%B4%E5%8D%A1%E5%AE%9A%E4%BB%B78.8%E4%B8%87%23) `387.4K 🔥` `NEW`
1. [A股半导体产业](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E4%BA%A7%E4%B8%9A%23) `330.6K 🔥` `NEW`
1. [摄协回应摄影比赛一等奖明显AI生成](https://s.weibo.com/weibo?q=%23%E6%91%84%E5%8D%8F%E5%9B%9E%E5%BA%94%E6%91%84%E5%BD%B1%E6%AF%94%E8%B5%9B%E4%B8%80%E7%AD%89%E5%A5%96%E6%98%8E%E6%98%BEAI%E7%94%9F%E6%88%90%23) `296.2K 🔥` `NEW`
1. [名创优品涉事博主账号已私密](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E6%B6%89%E4%BA%8B%E5%8D%9A%E4%B8%BB%E8%B4%A6%E5%8F%B7%E5%B7%B2%E7%A7%81%E5%AF%86%23) `290.8K 🔥` `NEW`
1. [老人欲挤购座儿童座位被拒后指责家长](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%AC%B2%E6%8C%A4%E8%B4%AD%E5%BA%A7%E5%84%BF%E7%AB%A5%E5%BA%A7%E4%BD%8D%E8%A2%AB%E6%8B%92%E5%90%8E%E6%8C%87%E8%B4%A3%E5%AE%B6%E9%95%BF%23) `290.8K 🔥` `NEW`
1. [安宥真抽中住房申购惹不满](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%AE%A5%E7%9C%9F%E6%8A%BD%E4%B8%AD%E4%BD%8F%E6%88%BF%E7%94%B3%E8%B4%AD%E6%83%B9%E4%B8%8D%E6%BB%A1%23) `282.3K 🔥` `NEW`
1. [第一批注销校园卡的人发现不对劲了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%B3%A8%E9%94%80%E6%A0%A1%E5%9B%AD%E5%8D%A1%E7%9A%84%E4%BA%BA%E5%8F%91%E7%8E%B0%E4%B8%8D%E5%AF%B9%E5%8A%B2%E4%BA%86%23) `265.9K 🔥` `NEW`
1. [目前被曝不和JYP续约的TWICE成员](https://s.weibo.com/weibo?q=%23%E7%9B%AE%E5%89%8D%E8%A2%AB%E6%9B%9D%E4%B8%8D%E5%92%8CJYP%E7%BB%AD%E7%BA%A6%E7%9A%84TWICE%E6%88%90%E5%91%98%23) `241.1K 🔥` `NEW`
1. [迪丽热巴钰珑发型原来是周星驰同款](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%92%B0%E7%8F%91%E5%8F%91%E5%9E%8B%E5%8E%9F%E6%9D%A5%E6%98%AF%E5%91%A8%E6%98%9F%E9%A9%B0%E5%90%8C%E6%AC%BE%23) `234.5K 🔥` `NEW`
1. [金智媛22岁刘Rachel时期](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E5%AA%9B22%E5%B2%81%E5%88%98Rachel%E6%97%B6%E6%9C%9F%23) `232.7K 🔥` `NEW`
1. [AI生成环卫工照片获摄影比赛一等奖 (AI-generated photos of sanitation workers won first prize in photography competition)](https://s.weibo.com/weibo?q=%23AI%E7%94%9F%E6%88%90%E7%8E%AF%E5%8D%AB%E5%B7%A5%E7%85%A7%E7%89%87%E8%8E%B7%E6%91%84%E5%BD%B1%E6%AF%94%E8%B5%9B%E4%B8%80%E7%AD%89%E5%A5%96%23) `227.3K 🔥` `NEW`
1. [杨瀚森18分10板5助](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE18%E5%88%8610%E6%9D%BF5%E5%8A%A9%23) `223.8K 🔥` `NEW`
1. [杨坤回应无法参加歌手突围赛](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9D%A4%E5%9B%9E%E5%BA%94%E6%97%A0%E6%B3%95%E5%8F%82%E5%8A%A0%E6%AD%8C%E6%89%8B%E7%AA%81%E5%9B%B4%E8%B5%9B%23) `201.4K 🔥` `NEW`
1. [感觉自己好像职场巨婴](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E8%87%AA%E5%B7%B1%E5%A5%BD%E5%83%8F%E8%81%8C%E5%9C%BA%E5%B7%A8%E5%A9%B4%23) `200.9K 🔥` `NEW`
1. [小城良方待播](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%BE%85%E6%92%AD%23) `200.6K 🔥` `NEW`
1. [刘琳皱纹一点都不让修](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%90%B3%E7%9A%B1%E7%BA%B9%E4%B8%80%E7%82%B9%E9%83%BD%E4%B8%8D%E8%AE%A9%E4%BF%AE%23) `200.5K 🔥` `NEW`
1. [苗靖人设 国产剧少见](https://s.weibo.com/weibo?q=%23%E8%8B%97%E9%9D%96%E4%BA%BA%E8%AE%BE%20%E5%9B%BD%E4%BA%A7%E5%89%A7%E5%B0%91%E8%A7%81%23) `199.7K 🔥` `NEW`
1. [雷军称小米澎程空间布局与GL8相似](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A7%B0%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E7%A9%BA%E9%97%B4%E5%B8%83%E5%B1%80%E4%B8%8EGL8%E7%9B%B8%E4%BC%BC%23) `199.6K 🔥` `NEW`
1. [小米高管回应澎程为何测试三年](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%AB%98%E7%AE%A1%E5%9B%9E%E5%BA%94%E6%BE%8E%E7%A8%8B%E4%B8%BA%E4%BD%95%E6%B5%8B%E8%AF%95%E4%B8%89%E5%B9%B4%23) `199.5K 🔥` `NEW`
1. [韩国散户杠杆爆仓](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%95%A3%E6%88%B7%E6%9D%A0%E6%9D%86%E7%88%86%E4%BB%93%23) `176.4K 🔥` `NEW`
1. [被长期主义的消费观震惊到了 (I was shocked by the long-term consumption outlook)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%95%BF%E6%9C%9F%E4%B8%BB%E4%B9%89%E7%9A%84%E6%B6%88%E8%B4%B9%E8%A7%82%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `869.5K 🔥` `+82%`
1. [田曦薇机场假装粉丝拍王安宇](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%9C%BA%E5%9C%BA%E5%81%87%E8%A3%85%E7%B2%89%E4%B8%9D%E6%8B%8D%E7%8E%8B%E5%AE%89%E5%AE%87%23) `323.7K 🔥` `+29%`
1. [赤峰一民宿禁止夫妻情侣入住 (Chifeng B&B prohibits couples from staying)](https://s.weibo.com/weibo?q=%23%E8%B5%A4%E5%B3%B0%E4%B8%80%E6%B0%91%E5%AE%BF%E7%A6%81%E6%AD%A2%E5%A4%AB%E5%A6%BB%E6%83%85%E4%BE%A3%E5%85%A5%E4%BD%8F%23) `233.8K 🔥` `+21%`
1. [邹市明2亿理财亏损始末](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E2%E4%BA%BF%E7%90%86%E8%B4%A2%E4%BA%8F%E6%8D%9F%E5%A7%8B%E6%9C%AB%23) `423.4K 🔥`
1. [AI脸 恐怖谷效应](https://s.weibo.com/weibo?q=%23AI%E8%84%B8%20%E6%81%90%E6%80%96%E8%B0%B7%E6%95%88%E5%BA%94%23) `369.2K 🔥`
1. [一万块钱可以花多久](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%87%E5%9D%97%E9%92%B1%E5%8F%AF%E4%BB%A5%E8%8A%B1%E5%A4%9A%E4%B9%85%23) `287.8K 🔥`
1. [韩女减重小贴士 (Weight loss tips for Korean women)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A5%B3%E5%87%8F%E9%87%8D%E5%B0%8F%E8%B4%B4%E5%A3%AB%23) `284.3K 🔥`
1. [易烊千玺好多东西都是粉色的](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%A5%BD%E5%A4%9A%E4%B8%9C%E8%A5%BF%E9%83%BD%E6%98%AF%E7%B2%89%E8%89%B2%E7%9A%84%23) `200.0K 🔥`
1. [阿根廷主帅回击请愿逐出阿根廷 (Argentina coach fires back on petition to be expelled from Argentina)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%BB%E5%B8%85%E5%9B%9E%E5%87%BB%E8%AF%B7%E6%84%BF%E9%80%90%E5%87%BA%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `675.5K 🔥` `-22%`
1. [张碧晨弃赛声明](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E5%BC%83%E8%B5%9B%E5%A3%B0%E6%98%8E%23) `484.9K 🔥` `-37%`
1. [哈兰德买买买](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E4%B9%B0%E4%B9%B0%E4%B9%B0%23) `314.8K 🔥` `-52%`
1. [乐事回应薯片中被曝出现蓝色异物](https://s.weibo.com/weibo?q=%23%E4%B9%90%E4%BA%8B%E5%9B%9E%E5%BA%94%E8%96%AF%E7%89%87%E4%B8%AD%E8%A2%AB%E6%9B%9D%E5%87%BA%E7%8E%B0%E8%93%9D%E8%89%B2%E5%BC%82%E7%89%A9%23) `296.4K 🔥` `-75%`
1. [家有儿女放在今天be like](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E6%94%BE%E5%9C%A8%E4%BB%8A%E5%A4%A9be%20like%23) `279.0K 🔥` `-44%`
1. [乐事 蓝色薯片 (Lay's Blue Potato Chips)](https://s.weibo.com/weibo?q=%23%E4%B9%90%E4%BA%8B%20%E8%93%9D%E8%89%B2%E8%96%AF%E7%89%87%23) `257.8K 🔥` `-66%`
1. [女子怀二胎工资从7000降到4500 (The salary of a woman pregnant with her second child drops from 7,000 to 4,500)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E4%BA%8C%E8%83%8E%E5%B7%A5%E8%B5%84%E4%BB%8E7000%E9%99%8D%E5%88%B04500%23) `219.2K 🔥` `-54%`
1. [汪东城自曝与初恋分手原因](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E4%B8%9C%E5%9F%8E%E8%87%AA%E6%9B%9D%E4%B8%8E%E5%88%9D%E6%81%8B%E5%88%86%E6%89%8B%E5%8E%9F%E5%9B%A0%23) `216.1K 🔥` `-54%`
1. [易烊千玺 连头发都是爱你的形状](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E8%BF%9E%E5%A4%B4%E5%8F%91%E9%83%BD%E6%98%AF%E7%88%B1%E4%BD%A0%E7%9A%84%E5%BD%A2%E7%8A%B6%23) `214.8K 🔥` `-57%`
1. [马兴瑞被双开 (Ma Xingrui was double kicked)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%B4%E7%91%9E%E8%A2%AB%E5%8F%8C%E5%BC%80%23) `201.4K 🔥` `-60%`
1. [沈阳暴雨 (Heavy rain in Shenyang)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%9A%B4%E9%9B%A8%23) `200.1K 🔥` `-60%`
1. [名创优品致歉](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E8%87%B4%E6%AD%89%23) `199.5K 🔥` `-36%`
1. [法国男子来上海出差背了一台空调回国](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%94%B7%E5%AD%90%E6%9D%A5%E4%B8%8A%E6%B5%B7%E5%87%BA%E5%B7%AE%E8%83%8C%E4%BA%86%E4%B8%80%E5%8F%B0%E7%A9%BA%E8%B0%83%E5%9B%9E%E5%9B%BD%23) `182.6K 🔥` `-50%`

Updated at 2026-07-14 16:35:16

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
