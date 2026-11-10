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

1. [石家庄天降陨石最大单体35公斤](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%AE%B6%E5%BA%84%E5%A4%A9%E9%99%8D%E9%99%A8%E7%9F%B3%E6%9C%80%E5%A4%A7%E5%8D%95%E4%BD%9335%E5%85%AC%E6%96%A4%23) `817.9K 🔥` `NEW`
1. [问界M9M8携手金鸡百花电影节](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9M8%E6%90%BA%E6%89%8B%E9%87%91%E9%B8%A1%E7%99%BE%E8%8A%B1%E7%94%B5%E5%BD%B1%E8%8A%82%23) `588.2K 🔥` `NEW`
1. [男子搬家遭敲诈威胁除非把房子卖了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%90%AC%E5%AE%B6%E9%81%AD%E6%95%B2%E8%AF%88%E5%A8%81%E8%83%81%E9%99%A4%E9%9D%9E%E6%8A%8A%E6%88%BF%E5%AD%90%E5%8D%96%E4%BA%86%23) `254.8K 🔥` `NEW`
1. [美股高开高走科技股大涨](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E9%AB%98%E5%BC%80%E9%AB%98%E8%B5%B0%E7%A7%91%E6%8A%80%E8%82%A1%E5%A4%A7%E6%B6%A8%23) `238.2K 🔥` `NEW`
1. [张凌赫是真升咖了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%98%AF%E7%9C%9F%E5%8D%87%E5%92%96%E4%BA%86%23) `237.6K 🔥` `NEW`
1. [网络辟谣标签](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E8%BE%9F%E8%B0%A3%E6%A0%87%E7%AD%BE%23) `237.3K 🔥` `NEW`
1. [德牧不是狗是家里人](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%89%A7%E4%B8%8D%E6%98%AF%E7%8B%97%E6%98%AF%E5%AE%B6%E9%87%8C%E4%BA%BA%23) `237.0K 🔥` `NEW`
1. [iPhoneAir2机模曝光](https://s.weibo.com/weibo?q=%23iPhoneAir2%E6%9C%BA%E6%A8%A1%E6%9B%9D%E5%85%89%23) `235.2K 🔥` `NEW`
1. [美股高开高走原因](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E9%AB%98%E5%BC%80%E9%AB%98%E8%B5%B0%E5%8E%9F%E5%9B%A0%23) `233.6K 🔥` `NEW`
1. [W盛典红毯神级镜头出现了](https://s.weibo.com/weibo?q=%23W%E7%9B%9B%E5%85%B8%E7%BA%A2%E6%AF%AF%E7%A5%9E%E7%BA%A7%E9%95%9C%E5%A4%B4%E5%87%BA%E7%8E%B0%E4%BA%86%23) `232.4K 🔥` `NEW`
1. [白小纯说去韩国打了水光针](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%AF%B4%E5%8E%BB%E9%9F%A9%E5%9B%BD%E6%89%93%E4%BA%86%E6%B0%B4%E5%85%89%E9%92%88%23) `230.7K 🔥` `NEW`
1. [白敬亭果然看上井柏然的衣服了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E6%9E%9C%E7%84%B6%E7%9C%8B%E4%B8%8A%E4%BA%95%E6%9F%8F%E7%84%B6%E7%9A%84%E8%A1%A3%E6%9C%8D%E4%BA%86%23) `229.6K 🔥` `NEW`
1. [油价突然直线跳水](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E7%AA%81%E7%84%B6%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%23) `228.7K 🔥` `NEW`
1. [杨幂给倪妮整理裙摆](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%BB%99%E5%80%AA%E5%A6%AE%E6%95%B4%E7%90%86%E8%A3%99%E6%91%86%23) `228.6K 🔥` `NEW`
1. [王传君坦言爱情公寓只是份工作](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%9D%A6%E8%A8%80%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%8F%AA%E6%98%AF%E4%BB%BD%E5%B7%A5%E4%BD%9C%23) `224.0K 🔥` `NEW`
1. [黄仁勋 佩奇](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%20%E4%BD%A9%E5%A5%87%23) `223.8K 🔥` `NEW`
1. [花坛埋尸案女子曾每年给儿子织毛衣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%9D%9B%E5%9F%8B%E5%B0%B8%E6%A1%88%E5%A5%B3%E5%AD%90%E6%9B%BE%E6%AF%8F%E5%B9%B4%E7%BB%99%E5%84%BF%E5%AD%90%E7%BB%87%E6%AF%9B%E8%A1%A3%23) `222.5K 🔥` `NEW`
1. [金晨 没澄清不住海边没有妹妹](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%20%E6%B2%A1%E6%BE%84%E6%B8%85%E4%B8%8D%E4%BD%8F%E6%B5%B7%E8%BE%B9%E6%B2%A1%E6%9C%89%E5%A6%B9%E5%A6%B9%23) `221.5K 🔥` `NEW`
1. [迪丽热巴自曝有人加其父母微信骚扰](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%87%AA%E6%9B%9D%E6%9C%89%E4%BA%BA%E5%8A%A0%E5%85%B6%E7%88%B6%E6%AF%8D%E5%BE%AE%E4%BF%A1%E9%AA%9A%E6%89%B0%23) `214.8K 🔥` `NEW`
1. [立冬后要改一下睡觉时间](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%86%AC%E5%90%8E%E8%A6%81%E6%94%B9%E4%B8%80%E4%B8%8B%E7%9D%A1%E8%A7%89%E6%97%B6%E9%97%B4%23) `177.3K 🔥` `NEW`
1. [林一在卢昱晓家里直播](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E5%9C%A8%E5%8D%A2%E6%98%B1%E6%99%93%E5%AE%B6%E9%87%8C%E7%9B%B4%E6%92%AD%23) `152.2K 🔥` `NEW`
1. [后会友期除了当事人都上线吃瓜了](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E9%99%A4%E4%BA%86%E5%BD%93%E4%BA%8B%E4%BA%BA%E9%83%BD%E4%B8%8A%E7%BA%BF%E5%90%83%E7%93%9C%E4%BA%86%23) `146.8K 🔥` `NEW`
1. [从洗洁精就能看出来设计师的重要性](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%B4%97%E6%B4%81%E7%B2%BE%E5%B0%B1%E8%83%BD%E7%9C%8B%E5%87%BA%E6%9D%A5%E8%AE%BE%E8%AE%A1%E5%B8%88%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23) `146.3K 🔥` `NEW`
1. [童家堡](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E5%AE%B6%E5%A0%A1%23) `142.4K 🔥` `NEW`
1. [前队友谈被青稚压力](https://s.weibo.com/weibo?q=%23%E5%89%8D%E9%98%9F%E5%8F%8B%E8%B0%88%E8%A2%AB%E9%9D%92%E7%A8%9A%E5%8E%8B%E5%8A%9B%23) `140.5K 🔥` `NEW`
1. [一碗免费面咋把隔壁小店逼到想搬家](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%A2%97%E5%85%8D%E8%B4%B9%E9%9D%A2%E5%92%8B%E6%8A%8A%E9%9A%94%E5%A3%81%E5%B0%8F%E5%BA%97%E9%80%BC%E5%88%B0%E6%83%B3%E6%90%AC%E5%AE%B6%23) `129.0K 🔥` `NEW`
1. [男子回应结婚25年不让妻子上班](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E7%BB%93%E5%A9%9A25%E5%B9%B4%E4%B8%8D%E8%AE%A9%E5%A6%BB%E5%AD%90%E4%B8%8A%E7%8F%AD%23) `126.5K 🔥` `NEW`
1. [一个录了十几天的友综而已](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E5%BD%95%E4%BA%86%E5%8D%81%E5%87%A0%E5%A4%A9%E7%9A%84%E5%8F%8B%E7%BB%BC%E8%80%8C%E5%B7%B2%23) `126.0K 🔥` `NEW`
1. [时代少年团粉丝喊了七周年快乐](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%B2%89%E4%B8%9D%E5%96%8A%E4%BA%86%E4%B8%83%E5%91%A8%E5%B9%B4%E5%BF%AB%E4%B9%90%23) `120.9K 🔥` `NEW`
1. [比亚迪荷兰办公室遭突击搜查](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E8%8D%B7%E5%85%B0%E5%8A%9E%E5%85%AC%E5%AE%A4%E9%81%AD%E7%AA%81%E5%87%BB%E6%90%9C%E6%9F%A5%23) `109.7K 🔥` `NEW`
1. [虞书欣钟楚曦互动](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%92%9F%E6%A5%9A%E6%9B%A6%E4%BA%92%E5%8A%A8%23) `106.0K 🔥` `NEW`
1. [原来许飞的衣服在这买的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%AE%B8%E9%A3%9E%E7%9A%84%E8%A1%A3%E6%9C%8D%E5%9C%A8%E8%BF%99%E4%B9%B0%E7%9A%84%23) `90.6K 🔥` `NEW`
1. [太原火灾为何这么严重](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%E4%B8%BA%E4%BD%95%E8%BF%99%E4%B9%88%E4%B8%A5%E9%87%8D%23) `90.5K 🔥` `NEW`
1. [辛芷蕾W盛典内场](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BEW%E7%9B%9B%E5%85%B8%E5%86%85%E5%9C%BA%23) `80.5K 🔥` `NEW`
1. [医生说药有点贵结账十七块六](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E8%8D%AF%E6%9C%89%E7%82%B9%E8%B4%B5%E7%BB%93%E8%B4%A6%E5%8D%81%E4%B8%83%E5%9D%97%E5%85%AD%23) `74.6K 🔥` `NEW`
1. [黄仁勋的恋爱脑伤到了哪些硅谷大佬](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%9A%84%E6%81%8B%E7%88%B1%E8%84%91%E4%BC%A4%E5%88%B0%E4%BA%86%E5%93%AA%E4%BA%9B%E7%A1%85%E8%B0%B7%E5%A4%A7%E4%BD%AC%23) `73.9K 🔥` `NEW`
1. [深圳降温天冷深圳人可别着凉](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E9%99%8D%E6%B8%A9%E5%A4%A9%E5%86%B7%E6%B7%B1%E5%9C%B3%E4%BA%BA%E5%8F%AF%E5%88%AB%E7%9D%80%E5%87%89%23) `72.8K 🔥` `NEW`
1. [朱志鑫画的这是什么](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E7%94%BB%E7%9A%84%E8%BF%99%E6%98%AF%E4%BB%80%E4%B9%88%23) `72.8K 🔥` `NEW`
1. [白小纯 王子璇](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E7%8E%8B%E5%AD%90%E7%92%87%23) `1.2M 🔥` `-91%`
1. [铸牢共同体中华一家亲](https://s.weibo.com/weibo?q=%23%E9%93%B8%E7%89%A2%E5%85%B1%E5%90%8C%E4%BD%93%E4%B8%AD%E5%8D%8E%E4%B8%80%E5%AE%B6%E4%BA%B2%23) `661.5K 🔥` `-63%`
1. [大型SUV第一名是小米澎程N90](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%9E%8BSUV%E7%AC%AC%E4%B8%80%E5%90%8D%E6%98%AF%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90%23) `235.6K 🔥` `-89%`
1. [老人将6亿遗产留给再婚妻子](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%B0%866%E4%BA%BF%E9%81%97%E4%BA%A7%E7%95%99%E7%BB%99%E5%86%8D%E5%A9%9A%E5%A6%BB%E5%AD%90%23) `233.0K 🔥` `-40%`
1. [山姆现20元一包泡面](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E7%8E%B020%E5%85%83%E4%B8%80%E5%8C%85%E6%B3%A1%E9%9D%A2%23) `228.4K 🔥` `-48%`
1. [白小纯在发现有人没上车的30秒](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%9C%A8%E5%8F%91%E7%8E%B0%E6%9C%89%E4%BA%BA%E6%B2%A1%E4%B8%8A%E8%BD%A6%E7%9A%8430%E7%A7%92%23) `226.6K 🔥` `-48%`
1. [白敬亭井柏然 你穿着貂我露着背](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E4%BA%95%E6%9F%8F%E7%84%B6%20%E4%BD%A0%E7%A9%BF%E7%9D%80%E8%B2%82%E6%88%91%E9%9C%B2%E7%9D%80%E8%83%8C%23) `225.8K 🔥` `-43%`
1. [舍友狗去世全宿舍要披麻戴孝吗](https://s.weibo.com/weibo?q=%23%E8%88%8D%E5%8F%8B%E7%8B%97%E5%8E%BB%E4%B8%96%E5%85%A8%E5%AE%BF%E8%88%8D%E8%A6%81%E6%8A%AB%E9%BA%BB%E6%88%B4%E5%AD%9D%E5%90%97%23) `219.8K 🔥` `-25%`
1. [曝白小纯小号和王子璇发了同一棵树](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%B0%8F%E5%8F%B7%E5%92%8C%E7%8E%8B%E5%AD%90%E7%92%87%E5%8F%91%E4%BA%86%E5%90%8C%E4%B8%80%E6%A3%B5%E6%A0%91%23) `219.3K 🔥` `-86%`
1. [刘诗诗躲了半天还是没躲过](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E8%BA%B2%E4%BA%86%E5%8D%8A%E5%A4%A9%E8%BF%98%E6%98%AF%E6%B2%A1%E8%BA%B2%E8%BF%87%23) `183.1K 🔥` `-62%`
1. [用空气炸锅烤奶茶太香了](https://s.weibo.com/weibo?q=%23%E7%94%A8%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%83%A4%E5%A5%B6%E8%8C%B6%E5%A4%AA%E9%A6%99%E4%BA%86%23) `150.4K 🔥` `-49%`
1. [白小纯青稚飞升](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E9%A3%9E%E5%8D%87%23) `119.7K 🔥` `-74%`
1. [舍友用婴幼儿洗发水我满脸问号](https://s.weibo.com/weibo?q=%23%E8%88%8D%E5%8F%8B%E7%94%A8%E5%A9%B4%E5%B9%BC%E5%84%BF%E6%B4%97%E5%8F%91%E6%B0%B4%E6%88%91%E6%BB%A1%E8%84%B8%E9%97%AE%E5%8F%B7%23) `100.8K 🔥` `-68%`
1. [W盛典内场](https://s.weibo.com/weibo?q=%23W%E7%9B%9B%E5%85%B8%E5%86%85%E5%9C%BA%23) `74.8K 🔥` `-96%`

Updated at 2026-11-10 08:10:20

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
