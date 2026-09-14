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

1. [享界G9总有享法在路上](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8CG9%E6%80%BB%E6%9C%89%E4%BA%AB%E6%B3%95%E5%9C%A8%E8%B7%AF%E4%B8%8A%23) `191.9K 🔥` `NEW`
1. [王星越伯希和品牌代言人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%E4%BC%AF%E5%B8%8C%E5%92%8C%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `100.8K 🔥` `NEW`
1. [iOS升级包版本显示Bug](https://s.weibo.com/weibo?q=%23iOS%E5%8D%87%E7%BA%A7%E5%8C%85%E7%89%88%E6%9C%AC%E6%98%BE%E7%A4%BABug%23) `66.2K 🔥` `NEW`
1. [DeepSeek深夜服务崩溃](https://s.weibo.com/weibo?q=%23DeepSeek%E6%B7%B1%E5%A4%9C%E6%9C%8D%E5%8A%A1%E5%B4%A9%E6%BA%83%23) `66.1K 🔥` `NEW`
1. [有些话能让你一瞬间清醒](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%9B%E8%AF%9D%E8%83%BD%E8%AE%A9%E4%BD%A0%E4%B8%80%E7%9E%AC%E9%97%B4%E6%B8%85%E9%86%92%23) `65.8K 🔥` `NEW`
1. [五指山暴雨打破1958年以来历史纪录](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%8C%87%E5%B1%B1%E6%9A%B4%E9%9B%A8%E6%89%93%E7%A0%B41958%E5%B9%B4%E4%BB%A5%E6%9D%A5%E5%8E%86%E5%8F%B2%E7%BA%AA%E5%BD%95%23) `65.6K 🔥` `NEW`
1. [地铁上两个老外拍视频靠在女孩肩膀上](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E4%B8%8A%E4%B8%A4%E4%B8%AA%E8%80%81%E5%A4%96%E6%8B%8D%E8%A7%86%E9%A2%91%E9%9D%A0%E5%9C%A8%E5%A5%B3%E5%AD%A9%E8%82%A9%E8%86%80%E4%B8%8A%23) `64.8K 🔥` `NEW`
1. [HYROX联合创始人致歉](https://s.weibo.com/weibo?q=%23HYROX%E8%81%94%E5%90%88%E5%88%9B%E5%A7%8B%E4%BA%BA%E8%87%B4%E6%AD%89%23) `64.8K 🔥` `NEW`
1. [40岁化妆师教你如何打造专业级底妆](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E5%8C%96%E5%A6%86%E5%B8%88%E6%95%99%E4%BD%A0%E5%A6%82%E4%BD%95%E6%89%93%E9%80%A0%E4%B8%93%E4%B8%9A%E7%BA%A7%E5%BA%95%E5%A6%86%23) `64.5K 🔥` `NEW`
1. [四川省教育厅回应高校13天假期自由](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E7%9C%81%E6%95%99%E8%82%B2%E5%8E%85%E5%9B%9E%E5%BA%94%E9%AB%98%E6%A0%A113%E5%A4%A9%E5%81%87%E6%9C%9F%E8%87%AA%E7%94%B1%23) `64.4K 🔥` `NEW`
1. [王者四个新皮肤](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%9B%9B%E4%B8%AA%E6%96%B0%E7%9A%AE%E8%82%A4%23) `63.3K 🔥` `NEW`
1. [杭州有股民两周亏200多万](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%9C%89%E8%82%A1%E6%B0%91%E4%B8%A4%E5%91%A8%E4%BA%8F200%E5%A4%9A%E4%B8%87%23) `63.0K 🔥` `NEW`
1. [搜泸州跳出泸州东站一车人全买错票](https://s.weibo.com/weibo?q=%23%E6%90%9C%E6%B3%B8%E5%B7%9E%E8%B7%B3%E5%87%BA%E6%B3%B8%E5%B7%9E%E4%B8%9C%E7%AB%99%E4%B8%80%E8%BD%A6%E4%BA%BA%E5%85%A8%E4%B9%B0%E9%94%99%E7%A5%A8%23) `62.7K 🔥` `NEW`
1. [美联储加息预期升温金价跌了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E5%8A%A0%E6%81%AF%E9%A2%84%E6%9C%9F%E5%8D%87%E6%B8%A9%E9%87%91%E4%BB%B7%E8%B7%8C%E4%BA%86%23) `62.1K 🔥` `NEW`
1. [猕猴桃是全世界最团结的水果](https://s.weibo.com/weibo?q=%23%E7%8C%95%E7%8C%B4%E6%A1%83%E6%98%AF%E5%85%A8%E4%B8%96%E7%95%8C%E6%9C%80%E5%9B%A2%E7%BB%93%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `430.5K 🔥` `+684%`
1. [黄斌公开炮轰罗永浩](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%96%8C%E5%85%AC%E5%BC%80%E7%82%AE%E8%BD%B0%E7%BD%97%E6%B0%B8%E6%B5%A9%23) `310.7K 🔥` `+39%`
1. [网络安全宣传周亮点揭秘](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E5%AE%A3%E4%BC%A0%E5%91%A8%E4%BA%AE%E7%82%B9%E6%8F%AD%E7%A7%98%23) `242.7K 🔥` `+82%`
1. [我国灵活就业人员规模已超过2亿人](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E4%BA%BA%E5%91%98%E8%A7%84%E6%A8%A1%E5%B7%B2%E8%B6%85%E8%BF%872%E4%BA%BF%E4%BA%BA%23) `177.6K 🔥` `+133%`
1. [终于知道为什么有人工作能力这么强](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E4%BA%BA%E5%B7%A5%E4%BD%9C%E8%83%BD%E5%8A%9B%E8%BF%99%E4%B9%88%E5%BC%BA%23) `119.3K 🔥` `+106%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `98.0K 🔥` `+121%`
1. [罗永浩 黄斌](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%20%E9%BB%84%E6%96%8C%23) `80.2K 🔥` `+49%`
1. [疑似中国籍教练印尼射杀玳瑁](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E4%B8%AD%E5%9B%BD%E7%B1%8D%E6%95%99%E7%BB%83%E5%8D%B0%E5%B0%BC%E5%B0%84%E6%9D%80%E7%8E%B3%E7%91%81%23) `71.6K 🔥` `+31%`
1. [自称演唱会求婚事件当事人发声](https://s.weibo.com/weibo?q=%23%E8%87%AA%E7%A7%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E6%B1%82%E5%A9%9A%E4%BA%8B%E4%BB%B6%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `70.1K 🔥` `+29%`
1. [郑合惠子一出场刘学义都变帅了](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E4%B8%80%E5%87%BA%E5%9C%BA%E5%88%98%E5%AD%A6%E4%B9%89%E9%83%BD%E5%8F%98%E5%B8%85%E4%BA%86%23) `70.1K 🔥` `+24%`
1. [女子因7旬老人居住环境脏乱捅其6刀](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A07%E6%97%AC%E8%80%81%E4%BA%BA%E5%B1%85%E4%BD%8F%E7%8E%AF%E5%A2%83%E8%84%8F%E4%B9%B1%E6%8D%85%E5%85%B66%E5%88%80%23) `67.7K 🔥` `+26%`
1. [小区售水机的水还敢喝吗](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E5%94%AE%E6%B0%B4%E6%9C%BA%E7%9A%84%E6%B0%B4%E8%BF%98%E6%95%A2%E5%96%9D%E5%90%97%23) `67.6K 🔥` `+52%`
1. [演唱会求婚为什么越来越招人烦](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E6%B1%82%E5%A9%9A%E4%B8%BA%E4%BB%80%E4%B9%88%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%8B%9B%E4%BA%BA%E7%83%A6%23) `67.4K 🔥` `+48%`
1. [井柏然曾被问有没有爱上过对手](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%9B%BE%E8%A2%AB%E9%97%AE%E6%9C%89%E6%B2%A1%E6%9C%89%E7%88%B1%E4%B8%8A%E8%BF%87%E5%AF%B9%E6%89%8B%23) `67.3K 🔥` `+79%`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `67.2K 🔥` `+37%`
1. [父亲撞死人儿子顶包全家串供](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E6%92%9E%E6%AD%BB%E4%BA%BA%E5%84%BF%E5%AD%90%E9%A1%B6%E5%8C%85%E5%85%A8%E5%AE%B6%E4%B8%B2%E4%BE%9B%23) `67.0K 🔥` `+51%`
1. [面试完才懂关系户有多动人](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E5%AE%8C%E6%89%8D%E6%87%82%E5%85%B3%E7%B3%BB%E6%88%B7%E6%9C%89%E5%A4%9A%E5%8A%A8%E4%BA%BA%23) `66.8K 🔥` `+50%`
1. [苹果回应iPhone18Pro破发](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%9B%9E%E5%BA%94iPhone18Pro%E7%A0%B4%E5%8F%91%23) `66.7K 🔥` `+50%`
1. [不要轻易向任何人输出观点](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%BD%BB%E6%98%93%E5%90%91%E4%BB%BB%E4%BD%95%E4%BA%BA%E8%BE%93%E5%87%BA%E8%A7%82%E7%82%B9%23) `66.6K 🔥` `+50%`
1. [兰香如故热度](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%83%AD%E5%BA%A6%23) `66.5K 🔥` `+55%`
1. [年轻人长期熬夜后的精神状态](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E9%95%BF%E6%9C%9F%E7%86%AC%E5%A4%9C%E5%90%8E%E7%9A%84%E7%B2%BE%E7%A5%9E%E7%8A%B6%E6%80%81%23) `66.3K 🔥` `+49%`
1. [广汽 重组](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E6%B1%BD%20%E9%87%8D%E7%BB%84%23) `65.9K 🔥` `+92%`
1. [失业三个月免费烘焙课遇到认真老师](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E4%B8%9A%E4%B8%89%E4%B8%AA%E6%9C%88%E5%85%8D%E8%B4%B9%E7%83%98%E7%84%99%E8%AF%BE%E9%81%87%E5%88%B0%E8%AE%A4%E7%9C%9F%E8%80%81%E5%B8%88%23) `65.4K 🔥` `+74%`
1. [人这一生最要紧的就是学会跑路](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%BF%99%E4%B8%80%E7%94%9F%E6%9C%80%E8%A6%81%E7%B4%A7%E7%9A%84%E5%B0%B1%E6%98%AF%E5%AD%A6%E4%BC%9A%E8%B7%91%E8%B7%AF%23) `65.3K 🔥` `+90%`
1. [碘缺乏是甲状腺结节的危险因素](https://s.weibo.com/weibo?q=%23%E7%A2%98%E7%BC%BA%E4%B9%8F%E6%98%AF%E7%94%B2%E7%8A%B6%E8%85%BA%E7%BB%93%E8%8A%82%E7%9A%84%E5%8D%B1%E9%99%A9%E5%9B%A0%E7%B4%A0%23) `65.0K 🔥` `+89%`
1. [妈妈吃无碘盐致女儿2岁多不会说话](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%90%83%E6%97%A0%E7%A2%98%E7%9B%90%E8%87%B4%E5%A5%B3%E5%84%BF2%E5%B2%81%E5%A4%9A%E4%B8%8D%E4%BC%9A%E8%AF%B4%E8%AF%9D%23) `64.2K 🔥` `+56%`
1. [韩国三星食堂的午餐](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%89%E6%98%9F%E9%A3%9F%E5%A0%82%E7%9A%84%E5%8D%88%E9%A4%90%23) `64.0K 🔥` `+71%`
1. [现在AI视频越来越邪门了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8AI%E8%A7%86%E9%A2%91%E8%B6%8A%E6%9D%A5%E8%B6%8A%E9%82%AA%E9%97%A8%E4%BA%86%23) `63.9K 🔥` `+73%`
1. [原来洗澡和沐浴真的不一样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B4%97%E6%BE%A1%E5%92%8C%E6%B2%90%E6%B5%B4%E7%9C%9F%E7%9A%84%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `63.6K 🔥` `+71%`
1. [未来五年扩招医学本科和硕士](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E6%89%A9%E6%8B%9B%E5%8C%BB%E5%AD%A6%E6%9C%AC%E7%A7%91%E5%92%8C%E7%A1%95%E5%A3%AB%23) `63.5K 🔥` `+85%`
1. [人民日报点名三件流量炒作事件](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E7%82%B9%E5%90%8D%E4%B8%89%E4%BB%B6%E6%B5%81%E9%87%8F%E7%82%92%E4%BD%9C%E4%BA%8B%E4%BB%B6%23) `63.0K 🔥` `+21%`
1. [钟薛高已成老赖](https://s.weibo.com/weibo?q=%23%E9%92%9F%E8%96%9B%E9%AB%98%E5%B7%B2%E6%88%90%E8%80%81%E8%B5%96%23) `62.4K 🔥` `+81%`
1. [英国 分裂](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%20%E5%88%86%E8%A3%82%23) `62.2K 🔥` `+81%`
1. [刘学义郑合惠子 cp感玄学](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%20cp%E6%84%9F%E7%8E%84%E5%AD%A6%23) `100.5K 🔥`
1. [鞠婧祎这是拍戏还是蹦极](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%BF%99%E6%98%AF%E6%8B%8D%E6%88%8F%E8%BF%98%E6%98%AF%E8%B9%A6%E6%9E%81%23) `73.0K 🔥`
1. [海南大暴雨特大暴雨](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8D%97%E5%A4%A7%E6%9A%B4%E9%9B%A8%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `67.8K 🔥`
1. [王者S45赛季战令皮肤](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85S45%E8%B5%9B%E5%AD%A3%E6%88%98%E4%BB%A4%E7%9A%AE%E8%82%A4%23) `62.6K 🔥`
1. [脑梗前三天身体发出的预警](https://s.weibo.com/weibo?q=%23%E8%84%91%E6%A2%97%E5%89%8D%E4%B8%89%E5%A4%A9%E8%BA%AB%E4%BD%93%E5%8F%91%E5%87%BA%E7%9A%84%E9%A2%84%E8%AD%A6%23) `112.5K 🔥` `-31%`

Updated at 2026-09-15 06:27:28

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
