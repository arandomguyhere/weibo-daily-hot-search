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

1. [梅姨同居老汉说她曾带3名女孩回家 (The old man living with Aunt Mei said she once brought three girls home)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%90%8C%E5%B1%85%E8%80%81%E6%B1%89%E8%AF%B4%E5%A5%B9%E6%9B%BE%E5%B8%A63%E5%90%8D%E5%A5%B3%E5%AD%A9%E5%9B%9E%E5%AE%B6%23) `992.6K 🔥` `NEW`
1. [隐身的名字女性友谊不隐身](https://s.weibo.com/weibo?q=%23%E9%9A%90%E8%BA%AB%E7%9A%84%E5%90%8D%E5%AD%97%E5%A5%B3%E6%80%A7%E5%8F%8B%E8%B0%8A%E4%B8%8D%E9%9A%90%E8%BA%AB%23) `296.7K 🔥` `NEW`
1. [梅姨去年年底就已落网](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%8E%BB%E5%B9%B4%E5%B9%B4%E5%BA%95%E5%B0%B1%E5%B7%B2%E8%90%BD%E7%BD%91%23) `180.9K 🔥` `NEW`
1. [伊媒称一架美国战斗机被击落](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%AA%92%E7%A7%B0%E4%B8%80%E6%9E%B6%E7%BE%8E%E5%9B%BD%E6%88%98%E6%96%97%E6%9C%BA%E8%A2%AB%E5%87%BB%E8%90%BD%23) `157.8K 🔥` `NEW`
1. [Mate80风驰版首创仿生羽翼涡扇](https://s.weibo.com/weibo?q=%23Mate80%E9%A3%8E%E9%A9%B0%E7%89%88%E9%A6%96%E5%88%9B%E4%BB%BF%E7%94%9F%E7%BE%BD%E7%BF%BC%E6%B6%A1%E6%89%87%23) `129.9K 🔥` `NEW`
1. [鸿蒙5和鸿蒙6终端设备数超5000万](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%995%E5%92%8C%E9%B8%BF%E8%92%996%E7%BB%88%E7%AB%AF%E8%AE%BE%E5%A4%87%E6%95%B0%E8%B6%855000%E4%B8%87%23) `129.0K 🔥` `NEW`
1. [等太湖湾音乐节官宣](https://s.weibo.com/weibo?q=%23%E7%AD%89%E5%A4%AA%E6%B9%96%E6%B9%BE%E9%9F%B3%E4%B9%90%E8%8A%82%E5%AE%98%E5%AE%A3%23) `120.1K 🔥` `NEW`
1. [中东战事来到危险临界点](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E6%88%98%E4%BA%8B%E6%9D%A5%E5%88%B0%E5%8D%B1%E9%99%A9%E4%B8%B4%E7%95%8C%E7%82%B9%23) `118.8K 🔥` `NEW`
1. [郑合惠子将门独后妆造](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%A6%86%E9%80%A0%23) `102.5K 🔥` `NEW`
1. [梅姨案未过20年追诉时效](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%A1%88%E6%9C%AA%E8%BF%8720%E5%B9%B4%E8%BF%BD%E8%AF%89%E6%97%B6%E6%95%88%23) `102.3K 🔥` `NEW`
1. [长期不换社交头像的人 (People who don’t change their social avatars for a long time)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%B8%8D%E6%8D%A2%E7%A4%BE%E4%BA%A4%E5%A4%B4%E5%83%8F%E7%9A%84%E4%BA%BA%23) `102.1K 🔥` `NEW`
1. [现货黄金失守4200](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%E5%A4%B1%E5%AE%884200%23) `91.5K 🔥` `NEW`
1. [张凌赫现身浙江仙居拍摄归鸾](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%B0%E8%BA%AB%E6%B5%99%E6%B1%9F%E4%BB%99%E5%B1%85%E6%8B%8D%E6%91%84%E5%BD%92%E9%B8%BE%23) `87.1K 🔥` `NEW`
1. [情侣酒局后女子坠亡家属向男友索赔](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E9%85%92%E5%B1%80%E5%90%8E%E5%A5%B3%E5%AD%90%E5%9D%A0%E4%BA%A1%E5%AE%B6%E5%B1%9E%E5%90%91%E7%94%B7%E5%8F%8B%E7%B4%A2%E8%B5%94%23) `81.2K 🔥` `NEW`
1. [申聪为抓获梅姨提供关键物证](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%81%AA%E4%B8%BA%E6%8A%93%E8%8E%B7%E6%A2%85%E5%A7%A8%E6%8F%90%E4%BE%9B%E5%85%B3%E9%94%AE%E7%89%A9%E8%AF%81%23) `80.2K 🔥` `NEW`
1. [房产中介为吃26万差价分饰两角](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%BA%A7%E4%B8%AD%E4%BB%8B%E4%B8%BA%E5%90%8326%E4%B8%87%E5%B7%AE%E4%BB%B7%E5%88%86%E9%A5%B0%E4%B8%A4%E8%A7%92%23) `80.0K 🔥` `NEW`
1. [伊朗称整体战局正在扭转](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%95%B4%E4%BD%93%E6%88%98%E5%B1%80%E6%AD%A3%E5%9C%A8%E6%89%AD%E8%BD%AC%23) `79.6K 🔥` `NEW`
1. [倪妮睡觉也要开着武林外传](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E7%9D%A1%E8%A7%89%E4%B9%9F%E8%A6%81%E5%BC%80%E7%9D%80%E6%AD%A6%E6%9E%97%E5%A4%96%E4%BC%A0%23) `76.8K 🔥` `NEW`
1. [80天宝宝对妈妈说了句可爱](https://s.weibo.com/weibo?q=%2380%E5%A4%A9%E5%AE%9D%E5%AE%9D%E5%AF%B9%E5%A6%88%E5%A6%88%E8%AF%B4%E4%BA%86%E5%8F%A5%E5%8F%AF%E7%88%B1%23) `76.6K 🔥` `NEW`
1. [龚俊拍1集需2袋瓜子](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E6%8B%8D1%E9%9B%86%E9%9C%802%E8%A2%8B%E7%93%9C%E5%AD%90%23) `76.5K 🔥` `NEW`
1. [丞磊徐若晗到底是剧宣还是官宣 (Is Cheng Lei and Xu Ruohan a drama announcement or an official announcement?)](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E5%BE%90%E8%8B%A5%E6%99%97%E5%88%B0%E5%BA%95%E6%98%AF%E5%89%A7%E5%AE%A3%E8%BF%98%E6%98%AF%E5%AE%98%E5%AE%A3%23) `66.4K 🔥` `NEW`
1. [对国内成品油价格采取临时调控 (Adopt temporary controls on domestic refined oil prices)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E5%9B%BD%E5%86%85%E6%88%90%E5%93%81%E6%B2%B9%E4%BB%B7%E6%A0%BC%E9%87%87%E5%8F%96%E4%B8%B4%E6%97%B6%E8%B0%83%E6%8E%A7%23) `2.2M 🔥` `+44%`
1. [去年没换手机的人后悔了吗](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%B9%B4%E6%B2%A1%E6%8D%A2%E6%89%8B%E6%9C%BA%E7%9A%84%E4%BA%BA%E5%90%8E%E6%82%94%E4%BA%86%E5%90%97%23) `290.3K 🔥` `+83%`
1. [微厘空间02组卫星发射圆满成功](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8E%98%E7%A9%BA%E9%97%B402%E7%BB%84%E5%8D%AB%E6%98%9F%E5%8F%91%E5%B0%84%E5%9C%86%E6%BB%A1%E6%88%90%E5%8A%9F%23) `768.3K 🔥`
1. [华为发布会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `320.7K 🔥`
1. [老中医离世后儿子上交460g罂粟壳](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%AD%E5%8C%BB%E7%A6%BB%E4%B8%96%E5%90%8E%E5%84%BF%E5%AD%90%E4%B8%8A%E4%BA%A4460g%E7%BD%82%E7%B2%9F%E5%A3%B3%23) `271.7K 🔥`
1. [逐玉里康婆子的大孙子现实长这样](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%87%8C%E5%BA%B7%E5%A9%86%E5%AD%90%E7%9A%84%E5%A4%A7%E5%AD%99%E5%AD%90%E7%8E%B0%E5%AE%9E%E9%95%BF%E8%BF%99%E6%A0%B7%23) `222.6K 🔥`
1. [万茜徒手拎起190斤观众](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8C%9C%E5%BE%92%E6%89%8B%E6%8B%8E%E8%B5%B7190%E6%96%A4%E8%A7%82%E4%BC%97%23) `202.3K 🔥`
1. [长期喝桶装水的人天塌了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%96%9D%E6%A1%B6%E8%A3%85%E6%B0%B4%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `197.0K 🔥`
1. [金价八连跌抄底大军越买越跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%85%AB%E8%BF%9E%E8%B7%8C%E6%8A%84%E5%BA%95%E5%A4%A7%E5%86%9B%E8%B6%8A%E4%B9%B0%E8%B6%8A%E8%B7%8C%23) `192.2K 🔥`
1. [学生2死11伤事故肇事司机已被控制 (The driver responsible for the accident that killed 2 students and injured 11 has been controlled)](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%94%9F2%E6%AD%BB11%E4%BC%A4%E4%BA%8B%E6%95%85%E8%82%87%E4%BA%8B%E5%8F%B8%E6%9C%BA%E5%B7%B2%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `173.9K 🔥`
1. [日本教授中国旅游后感叹日本变态](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%95%99%E6%8E%88%E4%B8%AD%E5%9B%BD%E6%97%85%E6%B8%B8%E5%90%8E%E6%84%9F%E5%8F%B9%E6%97%A5%E6%9C%AC%E5%8F%98%E6%80%81%23) `168.3K 🔥`
1. [女子脖子疼一周确诊胃癌已全身转移 (Woman suffered from neck pain for a week and was diagnosed with gastric cancer that has metastasized throughout the body)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%84%96%E5%AD%90%E7%96%BC%E4%B8%80%E5%91%A8%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E5%B7%B2%E5%85%A8%E8%BA%AB%E8%BD%AC%E7%A7%BB%23) `128.7K 🔥`
1. [时代少年团 跑男](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E8%B7%91%E7%94%B7%23) `116.7K 🔥`
1. [金饰价从最高点大跌约340元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E4%BB%8E%E6%9C%80%E9%AB%98%E7%82%B9%E5%A4%A7%E8%B7%8C%E7%BA%A6340%E5%85%83%23) `113.4K 🔥`
1. [张凌赫喜欢浴池吻 好糟糕的原因](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%96%9C%E6%AC%A2%E6%B5%B4%E6%B1%A0%E5%90%BB%20%E5%A5%BD%E7%B3%9F%E7%B3%95%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `102.7K 🔥`
1. [黄金猴市来了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%8C%B4%E5%B8%82%E6%9D%A5%E4%BA%86%23) `355.5K 🔥` `-35%`
1. [弟弟偷抵32万新车哥哥气炸](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E5%81%B7%E6%8A%B532%E4%B8%87%E6%96%B0%E8%BD%A6%E5%93%A5%E5%93%A5%E6%B0%94%E7%82%B8%23) `315.6K 🔥` `-64%`
1. [眉姐姐来卖丑衣服了](https://s.weibo.com/weibo?q=%23%E7%9C%89%E5%A7%90%E5%A7%90%E6%9D%A5%E5%8D%96%E4%B8%91%E8%A1%A3%E6%9C%8D%E4%BA%86%23) `195.4K 🔥` `-43%`
1. [A股行情](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%A1%8C%E6%83%85%23) `130.1K 🔥` `-34%`
1. [胡歌耿超解码中国人自己的高端拉格](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E8%80%BF%E8%B6%85%E8%A7%A3%E7%A0%81%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E9%AB%98%E7%AB%AF%E6%8B%89%E6%A0%BC%23) `129.6K 🔥` `-28%`
1. [金价年内涨幅已清零](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%B9%B4%E5%86%85%E6%B6%A8%E5%B9%85%E5%B7%B2%E6%B8%85%E9%9B%B6%23) `129.4K 🔥` `-33%`
1. [逐玉豆瓣6.8 (Zhuyu Douban 6.8)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E8%B1%86%E7%93%A36.8%23) `128.6K 🔥` `-22%`
1. [股市 (stock market)](https://s.weibo.com/weibo?q=%23%E8%82%A1%E5%B8%82%23) `97.9K 🔥` `-37%`
1. [网传郭晓婷王天辰合作现偶 (It is rumored on the Internet that Guo Xiaoting and Wang Tianchen are collaborating together)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E5%90%88%E4%BD%9C%E7%8E%B0%E5%81%B6%23) `91.6K 🔥` `-42%`
1. [32岁孕妈怀孕后容貌变化明显 (32-year-old pregnant mother’s appearance changed significantly after pregnancy)](https://s.weibo.com/weibo?q=%2332%E5%B2%81%E5%AD%95%E5%A6%88%E6%80%80%E5%AD%95%E5%90%8E%E5%AE%B9%E8%B2%8C%E5%8F%98%E5%8C%96%E6%98%8E%E6%98%BE%23) `86.8K 🔥` `-33%`
1. [央视公布梅姨案细节 (CCTV releases details of Aunt Mei’s case)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%85%AC%E5%B8%83%E6%A2%85%E5%A7%A8%E6%A1%88%E7%BB%86%E8%8A%82%23) `84.2K 🔥` `-53%`
1. [小酒窝被周也宠成小公主](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E8%A2%AB%E5%91%A8%E4%B9%9F%E5%AE%A0%E6%88%90%E5%B0%8F%E5%85%AC%E4%B8%BB%23) `79.0K 🔥` `-27%`
1. [将门毒后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%23) `78.4K 🔥` `-49%`
1. [国务院挂牌督办贵州赫章交通事故](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8A%A1%E9%99%A2%E6%8C%82%E7%89%8C%E7%9D%A3%E5%8A%9E%E8%B4%B5%E5%B7%9E%E8%B5%AB%E7%AB%A0%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%23) `74.8K 🔥` `-48%`
1. [伊朗导弹上写着感谢西班牙首相](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E4%B8%8A%E5%86%99%E7%9D%80%E6%84%9F%E8%B0%A2%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E7%9B%B8%23) `71.5K 🔥` `-78%`

Updated at 2026-03-23 16:12:54

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
