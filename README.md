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

1. [2027研究生报考人数347万](https://s.weibo.com/weibo?q=%232027%E7%A0%94%E7%A9%B6%E7%94%9F%E6%8A%A5%E8%80%83%E4%BA%BA%E6%95%B0347%E4%B8%87%23) `1.1M 🔥` `NEW`
1. [后会友期陈晓楠评论区](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E9%99%88%E6%99%93%E6%A5%A0%E8%AF%84%E8%AE%BA%E5%8C%BA%23) `826.9K 🔥` `NEW`
1. [多元供给赋能线上消费新活力](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%85%83%E4%BE%9B%E7%BB%99%E8%B5%8B%E8%83%BD%E7%BA%BF%E4%B8%8A%E6%B6%88%E8%B4%B9%E6%96%B0%E6%B4%BB%E5%8A%9B%23) `676.8K 🔥` `NEW`
1. [考研人数](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E4%BA%BA%E6%95%B0%23) `471.9K 🔥` `NEW`
1. [放二十年的金砖被物理好的人取走了](https://s.weibo.com/weibo?q=%23%E6%94%BE%E4%BA%8C%E5%8D%81%E5%B9%B4%E7%9A%84%E9%87%91%E7%A0%96%E8%A2%AB%E7%89%A9%E7%90%86%E5%A5%BD%E7%9A%84%E4%BA%BA%E5%8F%96%E8%B5%B0%E4%BA%86%23) `470.1K 🔥` `NEW`
1. [王子璇听到白小纯说青稚是太子爷的表情](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E5%90%AC%E5%88%B0%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%AF%B4%E9%9D%92%E7%A8%9A%E6%98%AF%E5%A4%AA%E5%AD%90%E7%88%B7%E7%9A%84%E8%A1%A8%E6%83%85%23) `463.1K 🔥` `NEW`
1. [黄仁勋刚辞职美媒就给中国扣帽子](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%88%9A%E8%BE%9E%E8%81%8C%E7%BE%8E%E5%AA%92%E5%B0%B1%E7%BB%99%E4%B8%AD%E5%9B%BD%E6%89%A3%E5%B8%BD%E5%AD%90%23) `459.2K 🔥` `NEW`
1. [广西百色学院一男子在楼之间走钢丝](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%99%BE%E8%89%B2%E5%AD%A6%E9%99%A2%E4%B8%80%E7%94%B7%E5%AD%90%E5%9C%A8%E6%A5%BC%E4%B9%8B%E9%97%B4%E8%B5%B0%E9%92%A2%E4%B8%9D%23) `452.6K 🔥` `NEW`
1. [阿姨照料患癌男同事14年开销AA制](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A7%A8%E7%85%A7%E6%96%99%E6%82%A3%E7%99%8C%E7%94%B7%E5%90%8C%E4%BA%8B14%E5%B9%B4%E5%BC%80%E9%94%80AA%E5%88%B6%23) `448.9K 🔥` `NEW`
1. [AI找到BLG赢GEN的办法了](https://s.weibo.com/weibo?q=%23AI%E6%89%BE%E5%88%B0BLG%E8%B5%A2GEN%E7%9A%84%E5%8A%9E%E6%B3%95%E4%BA%86%23) `446.9K 🔥` `NEW`
1. [宋雨琦转发中国台湾被韩网热议](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%BD%AC%E5%8F%91%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%E8%A2%AB%E9%9F%A9%E7%BD%91%E7%83%AD%E8%AE%AE%23) `439.0K 🔥` `NEW`
1. [金晨发文秒删](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E5%8F%91%E6%96%87%E7%A7%92%E5%88%A0%23) `436.1K 🔥` `NEW`
1. [刘欢墓地曝光](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%A2%93%E5%9C%B0%E6%9B%9D%E5%85%89%23) `430.4K 🔥` `NEW`
1. [英伟达员工投票请求黄仁勋回归](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%91%98%E5%B7%A5%E6%8A%95%E7%A5%A8%E8%AF%B7%E6%B1%82%E9%BB%84%E4%BB%81%E5%8B%8B%E5%9B%9E%E5%BD%92%23) `423.7K 🔥` `NEW`
1. [青稚后悔了](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E5%90%8E%E6%82%94%E4%BA%86%23) `422.2K 🔥` `NEW`
1. [曝魏晨被雪藏的原因](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%AD%8F%E6%99%A8%E8%A2%AB%E9%9B%AA%E8%97%8F%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `419.5K 🔥` `NEW`
1. [黄仁勋辞职前自嘲我就是个人渣](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%BE%9E%E8%81%8C%E5%89%8D%E8%87%AA%E5%98%B2%E6%88%91%E5%B0%B1%E6%98%AF%E4%B8%AA%E4%BA%BA%E6%B8%A3%23) `415.4K 🔥` `NEW`
1. [英伟达更新黄仁勋为创始人](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%9B%B4%E6%96%B0%E9%BB%84%E4%BB%81%E5%8B%8B%E4%B8%BA%E5%88%9B%E5%A7%8B%E4%BA%BA%23) `405.9K 🔥` `NEW`
1. [上海00后女生靠AI卖穿戴甲月入10万](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B700%E5%90%8E%E5%A5%B3%E7%94%9F%E9%9D%A0AI%E5%8D%96%E7%A9%BF%E6%88%B4%E7%94%B2%E6%9C%88%E5%85%A510%E4%B8%87%23) `385.1K 🔥` `NEW`
1. [黄仁勋离任损失仅占个人资产0.07%](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A6%BB%E4%BB%BB%E6%8D%9F%E5%A4%B1%E4%BB%85%E5%8D%A0%E4%B8%AA%E4%BA%BA%E8%B5%84%E4%BA%A70.07%25%23) `384.6K 🔥` `NEW`
1. [大象妈妈让小象谢谢大姨](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%B1%A1%E5%A6%88%E5%A6%88%E8%AE%A9%E5%B0%8F%E8%B1%A1%E8%B0%A2%E8%B0%A2%E5%A4%A7%E5%A7%A8%23) `384.6K 🔥` `NEW`
1. [白小纯说青稚是天霸战队太子爷](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%AF%B4%E9%9D%92%E7%A8%9A%E6%98%AF%E5%A4%A9%E9%9C%B8%E6%88%98%E9%98%9F%E5%A4%AA%E5%AD%90%E7%88%B7%23) `384.5K 🔥` `NEW`
1. [曝许飞厉娜解约雪藏原因](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%AE%B8%E9%A3%9E%E5%8E%89%E5%A8%9C%E8%A7%A3%E7%BA%A6%E9%9B%AA%E8%97%8F%E5%8E%9F%E5%9B%A0%23) `379.0K 🔥` `NEW`
1. [宋亚轩回归现发胡先煦的反应](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9E%E5%BD%92%E7%8E%B0%E5%8F%91%E8%83%A1%E5%85%88%E7%85%A6%E7%9A%84%E5%8F%8D%E5%BA%94%23) `343.6K 🔥` `NEW`
1. [张萌后悔叫马天宇上节目](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E5%90%8E%E6%82%94%E5%8F%AB%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B8%8A%E8%8A%82%E7%9B%AE%23) `338.2K 🔥` `NEW`
1. [有英伟达员工称已经开始找工作了](https://s.weibo.com/weibo?q=%23%E6%9C%89%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%91%98%E5%B7%A5%E7%A7%B0%E5%B7%B2%E7%BB%8F%E5%BC%80%E5%A7%8B%E6%89%BE%E5%B7%A5%E4%BD%9C%E4%BA%86%23) `315.0K 🔥` `NEW`
1. [叶舒华在台湾综艺说了Chinese](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E8%88%92%E5%8D%8E%E5%9C%A8%E5%8F%B0%E6%B9%BE%E7%BB%BC%E8%89%BA%E8%AF%B4%E4%BA%86Chinese%23) `314.3K 🔥` `NEW`
1. [长发厉娜](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%8F%91%E5%8E%89%E5%A8%9C%23) `267.7K 🔥` `NEW`
1. [胡歌绯闻女友上中老年恋综](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E7%BB%AF%E9%97%BB%E5%A5%B3%E5%8F%8B%E4%B8%8A%E4%B8%AD%E8%80%81%E5%B9%B4%E6%81%8B%E7%BB%BC%23) `245.2K 🔥` `NEW`
1. [女子遭楼上5孩吵闹上门被骂脏话](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD%E6%A5%BC%E4%B8%8A5%E5%AD%A9%E5%90%B5%E9%97%B9%E4%B8%8A%E9%97%A8%E8%A2%AB%E9%AA%82%E8%84%8F%E8%AF%9D%23) `216.3K 🔥` `NEW`
1. [杭州临平既是生活也是未来](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%B8%B4%E5%B9%B3%E6%97%A2%E6%98%AF%E7%94%9F%E6%B4%BB%E4%B9%9F%E6%98%AF%E6%9C%AA%E6%9D%A5%23) `211.6K 🔥` `NEW`
1. [网购北面冲锋衣口袋里发现身份证](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%B4%AD%E5%8C%97%E9%9D%A2%E5%86%B2%E9%94%8B%E8%A1%A3%E5%8F%A3%E8%A2%8B%E9%87%8C%E5%8F%91%E7%8E%B0%E8%BA%AB%E4%BB%BD%E8%AF%81%23) `209.9K 🔥` `NEW`
1. [男子花四千多元做AI短剧火了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%8A%B1%E5%9B%9B%E5%8D%83%E5%A4%9A%E5%85%83%E5%81%9AAI%E7%9F%AD%E5%89%A7%E7%81%AB%E4%BA%86%23) `209.0K 🔥` `NEW`
1. [周鸿祎回应黄仁勋辞职对中国AI影响](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%B8%BF%E7%A5%8E%E5%9B%9E%E5%BA%94%E9%BB%84%E4%BB%81%E5%8B%8B%E8%BE%9E%E8%81%8C%E5%AF%B9%E4%B8%AD%E5%9B%BDAI%E5%BD%B1%E5%93%8D%23) `205.8K 🔥` `NEW`
1. [刘欢得知癌细胞疑似转移仍跨年献唱](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%BE%97%E7%9F%A5%E7%99%8C%E7%BB%86%E8%83%9E%E7%96%91%E4%BC%BC%E8%BD%AC%E7%A7%BB%E4%BB%8D%E8%B7%A8%E5%B9%B4%E7%8C%AE%E5%94%B1%23) `195.3K 🔥` `NEW`
1. [S16决赛海报公布](https://s.weibo.com/weibo?q=%23S16%E5%86%B3%E8%B5%9B%E6%B5%B7%E6%8A%A5%E5%85%AC%E5%B8%83%23) `178.9K 🔥` `NEW`
1. [AMD](https://s.weibo.com/weibo?q=%23AMD%23) `177.4K 🔥` `NEW`
1. [倪妮穿的旗袍是张信哲的收藏](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E7%A9%BF%E7%9A%84%E6%97%97%E8%A2%8D%E6%98%AF%E5%BC%A0%E4%BF%A1%E5%93%B2%E7%9A%84%E6%94%B6%E8%97%8F%23) `172.8K 🔥` `NEW`
1. [张萌说刚续费了美颜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E8%AF%B4%E5%88%9A%E7%BB%AD%E8%B4%B9%E4%BA%86%E7%BE%8E%E9%A2%9C%23) `149.7K 🔥` `NEW`
1. [杨超越早期经历](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E6%97%A9%E6%9C%9F%E7%BB%8F%E5%8E%86%23) `148.8K 🔥` `NEW`
1. [白小纯这经历真的是人能承受的吗](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%BF%99%E7%BB%8F%E5%8E%86%E7%9C%9F%E7%9A%84%E6%98%AF%E4%BA%BA%E8%83%BD%E6%89%BF%E5%8F%97%E7%9A%84%E5%90%97%23) `148.8K 🔥` `NEW`
1. [金价跌了想买金饰的人开始算账了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E4%BA%86%E6%83%B3%E4%B9%B0%E9%87%91%E9%A5%B0%E7%9A%84%E4%BA%BA%E5%BC%80%E5%A7%8B%E7%AE%97%E8%B4%A6%E4%BA%86%23) `148.8K 🔥` `NEW`
1. [KPL年总决赛嘉宾天团就位](https://s.weibo.com/weibo?q=%23KPL%E5%B9%B4%E6%80%BB%E5%86%B3%E8%B5%9B%E5%98%89%E5%AE%BE%E5%A4%A9%E5%9B%A2%E5%B0%B1%E4%BD%8D%23) `136.7K 🔥` `NEW`
1. [独生女陪护母亲后想生孩子](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E7%94%9F%E5%A5%B3%E9%99%AA%E6%8A%A4%E6%AF%8D%E4%BA%B2%E5%90%8E%E6%83%B3%E7%94%9F%E5%AD%A9%E5%AD%90%23) `130.1K 🔥` `NEW`
1. [微软Outlook服务宕机](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E8%BD%AFOutlook%E6%9C%8D%E5%8A%A1%E5%AE%95%E6%9C%BA%23) `122.4K 🔥` `NEW`
1. [张小斐 杨幂坐在我的玉腿上](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%20%E6%9D%A8%E5%B9%82%E5%9D%90%E5%9C%A8%E6%88%91%E7%9A%84%E7%8E%89%E8%85%BF%E4%B8%8A%23) `121.1K 🔥` `NEW`
1. [王楚然喝豆汁vs宋亚轩喝豆汁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%96%9D%E8%B1%86%E6%B1%81vs%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%96%9D%E8%B1%86%E6%B1%81%23) `116.5K 🔥` `NEW`
1. [白鹿手势舞原来是这样拍的](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%89%8B%E5%8A%BF%E8%88%9E%E5%8E%9F%E6%9D%A5%E6%98%AF%E8%BF%99%E6%A0%B7%E6%8B%8D%E7%9A%84%23) `116.0K 🔥` `NEW`
1. [我画地为牢了外套](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E4%BA%86%E5%A4%96%E5%A5%97%23) `116.0K 🔥` `NEW`
1. [文吉儿后面几期要怎么办](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E5%90%8E%E9%9D%A2%E5%87%A0%E6%9C%9F%E8%A6%81%E6%80%8E%E4%B9%88%E5%8A%9E%23) `115.5K 🔥` `NEW`
1. [麻辣王子品牌大使小鬼王琳凯](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E7%8E%8B%E5%AD%90%E5%93%81%E7%89%8C%E5%A4%A7%E4%BD%BF%E5%B0%8F%E9%AC%BC%E7%8E%8B%E7%90%B3%E5%87%AF%23) `461.5K 🔥` `+469%`

Updated at 2026-11-13 14:56:15

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
