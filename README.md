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

1. [张雪机车补偿 (Zhang Xue motorcycle compensation)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%A1%A5%E5%81%BF%23) `1.1M 🔥` `NEW`
1. [侯明昊 歌手2026](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%20%E6%AD%8C%E6%89%8B2026%23) `767.8K 🔥` `NEW`
1. [人开始变老的表现](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%8F%98%E8%80%81%E7%9A%84%E8%A1%A8%E7%8E%B0%23) `729.9K 🔥` `NEW`
1. [日本人称手机设置为中文感觉很清爽](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E7%A7%B0%E6%89%8B%E6%9C%BA%E8%AE%BE%E7%BD%AE%E4%B8%BA%E4%B8%AD%E6%96%87%E6%84%9F%E8%A7%89%E5%BE%88%E6%B8%85%E7%88%BD%23) `598.4K 🔥` `NEW`
1. [陈奕恒的手机壁纸是jennie](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E7%9A%84%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8%E6%98%AFjennie%23) `434.1K 🔥` `NEW`
1. [陈妍希告了陈晓粉丝](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%91%8A%E4%BA%86%E9%99%88%E6%99%93%E7%B2%89%E4%B8%9D%23) `413.5K 🔥` `NEW`
1. [中国首个智能虾上车](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A6%96%E4%B8%AA%E6%99%BA%E8%83%BD%E8%99%BE%E4%B8%8A%E8%BD%A6%23) `412.3K 🔥` `NEW`
1. [伊朗对一名摩萨德骨干处以绞刑](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E4%B8%80%E5%90%8D%E6%91%A9%E8%90%A8%E5%BE%B7%E9%AA%A8%E5%B9%B2%E5%A4%84%E4%BB%A5%E7%BB%9E%E5%88%91%23) `411.3K 🔥` `NEW`
1. [妇联谈小伙希望父母不要再生了](https://s.weibo.com/weibo?q=%23%E5%A6%87%E8%81%94%E8%B0%88%E5%B0%8F%E4%BC%99%E5%B8%8C%E6%9C%9B%E7%88%B6%E6%AF%8D%E4%B8%8D%E8%A6%81%E5%86%8D%E7%94%9F%E4%BA%86%23) `410.0K 🔥` `NEW`
1. [体检无异常发现却是癌症晚期](https://s.weibo.com/weibo?q=%23%E4%BD%93%E6%A3%80%E6%97%A0%E5%BC%82%E5%B8%B8%E5%8F%91%E7%8E%B0%E5%8D%B4%E6%98%AF%E7%99%8C%E7%97%87%E6%99%9A%E6%9C%9F%23) `403.9K 🔥` `NEW`
1. [首批2名外籍航天员为巴基斯坦籍 (The first two foreign astronauts are Pakistani nationals)](https://s.weibo.com/weibo?q=%23%E9%A6%96%E6%89%B92%E5%90%8D%E5%A4%96%E7%B1%8D%E8%88%AA%E5%A4%A9%E5%91%98%E4%B8%BA%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E7%B1%8D%23) `400.6K 🔥` `NEW`
1. [全新问界M9静态评测首发](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E9%97%AE%E7%95%8CM9%E9%9D%99%E6%80%81%E8%AF%84%E6%B5%8B%E9%A6%96%E5%8F%91%23) `399.5K 🔥` `NEW`
1. [夫妻鱼塘双双溺亡留下两孩子](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E9%B1%BC%E5%A1%98%E5%8F%8C%E5%8F%8C%E6%BA%BA%E4%BA%A1%E7%95%99%E4%B8%8B%E4%B8%A4%E5%AD%A9%E5%AD%90%23) `339.9K 🔥` `NEW`
1. [田曦薇是刘海黑长直最权威的姐姐](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%98%AF%E5%88%98%E6%B5%B7%E9%BB%91%E9%95%BF%E7%9B%B4%E6%9C%80%E6%9D%83%E5%A8%81%E7%9A%84%E5%A7%90%E5%A7%90%23) `280.3K 🔥` `NEW`
1. [报考公安杨某媛与网传并非同一人](https://s.weibo.com/weibo?q=%23%E6%8A%A5%E8%80%83%E5%85%AC%E5%AE%89%E6%9D%A8%E6%9F%90%E5%AA%9B%E4%B8%8E%E7%BD%91%E4%BC%A0%E5%B9%B6%E9%9D%9E%E5%90%8C%E4%B8%80%E4%BA%BA%23) `215.6K 🔥` `NEW`
1. [谭松韵上的是客栈还是密逃](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E4%B8%8A%E7%9A%84%E6%98%AF%E5%AE%A2%E6%A0%88%E8%BF%98%E6%98%AF%E5%AF%86%E9%80%83%23) `215.3K 🔥` `NEW`
1. [文俊辉模仿李小冉](https://s.weibo.com/weibo?q=%23%E6%96%87%E4%BF%8A%E8%BE%89%E6%A8%A1%E4%BB%BF%E6%9D%8E%E5%B0%8F%E5%86%89%23) `213.6K 🔥` `NEW`
1. [官方辟谣聘用武大性骚扰事件当事人](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E8%81%98%E7%94%A8%E6%AD%A6%E5%A4%A7%E6%80%A7%E9%AA%9A%E6%89%B0%E4%BA%8B%E4%BB%B6%E5%BD%93%E4%BA%8B%E4%BA%BA%23) `194.3K 🔥` `NEW`
1. [杨幂江山大同到底有多少套衣服](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E5%B0%91%E5%A5%97%E8%A1%A3%E6%9C%8D%23) `193.9K 🔥` `NEW`
1. [英国2008年后出生者终身禁止购烟](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD2008%E5%B9%B4%E5%90%8E%E5%87%BA%E7%94%9F%E8%80%85%E7%BB%88%E8%BA%AB%E7%A6%81%E6%AD%A2%E8%B4%AD%E7%83%9F%23) `183.9K 🔥` `NEW`
1. [看演唱会四不原则 (Four things to avoid when watching a concert)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%9B%E4%B8%8D%E5%8E%9F%E5%88%99%23) `183.0K 🔥` `NEW`
1. [女子不孕多年一次怀4胞胎](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E5%AD%95%E5%A4%9A%E5%B9%B4%E4%B8%80%E6%AC%A1%E6%80%804%E8%83%9E%E8%83%8E%23) `171.0K 🔥` `NEW`
1. [宋祖儿大红大绿](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E5%A4%A7%E7%BA%A2%E5%A4%A7%E7%BB%BF%23) `171.0K 🔥` `NEW`
1. [胡祎阳张照愉道歉](https://s.weibo.com/weibo?q=%23%E8%83%A1%E7%A5%8E%E9%98%B3%E5%BC%A0%E7%85%A7%E6%84%89%E9%81%93%E6%AD%89%23) `158.6K 🔥` `NEW`
1. [女子脚踹保安被扇事件警方已立案](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%84%9A%E8%B8%B9%E4%BF%9D%E5%AE%89%E8%A2%AB%E6%89%87%E4%BA%8B%E4%BB%B6%E8%AD%A6%E6%96%B9%E5%B7%B2%E7%AB%8B%E6%A1%88%23) `853.3K 🔥` `+359%`
1. [BMW进入新世代 (BMW enters a new generation)](https://s.weibo.com/weibo?q=%23BMW%E8%BF%9B%E5%85%A5%E6%96%B0%E4%B8%96%E4%BB%A3%23) `826.4K 🔥` `+23%`
1. [詹姆斯暴扣杀死比赛](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E6%9A%B4%E6%89%A3%E6%9D%80%E6%AD%BB%E6%AF%94%E8%B5%9B%23) `449.0K 🔥` `+42%`
1. [陈妍希申请强制执行](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E7%94%B3%E8%AF%B7%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%23) `443.2K 🔥` `+41%`
1. [宋祖儿的脸 女娲炫技](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E7%9A%84%E8%84%B8%20%E5%A5%B3%E5%A8%B2%E7%82%AB%E6%8A%80%23) `434.1K 🔥` `+45%`
1. [员工称不涨工资干不了3天后被离职](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E7%A7%B0%E4%B8%8D%E6%B6%A8%E5%B7%A5%E8%B5%84%E5%B9%B2%E4%B8%8D%E4%BA%863%E5%A4%A9%E5%90%8E%E8%A2%AB%E7%A6%BB%E8%81%8C%23) `413.8K 🔥` `+40%`
1. [GUCCI田曦薇张凌赫大片](https://s.weibo.com/weibo?q=%23GUCCI%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%A7%E7%89%87%23) `412.8K 🔥` `+35%`
1. [曝男明星KTV亲女网红 (It is revealed that a male star in KTV is married to a female internet celebrity)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%94%B7%E6%98%8E%E6%98%9FKTV%E4%BA%B2%E5%A5%B3%E7%BD%91%E7%BA%A2%23) `408.9K 🔥` `+31%`
1. [lululemon质检结果 (lululemon quality inspection results)](https://s.weibo.com/weibo?q=%23lululemon%E8%B4%A8%E6%A3%80%E7%BB%93%E6%9E%9C%23) `396.5K 🔥` `+133%`
1. [朱珠把保洁服穿出高定感](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E6%8A%8A%E4%BF%9D%E6%B4%81%E6%9C%8D%E7%A9%BF%E5%87%BA%E9%AB%98%E5%AE%9A%E6%84%9F%23) `351.3K 🔥` `+30%`
1. [文班亚马确诊为脑震荡](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E7%A1%AE%E8%AF%8A%E4%B8%BA%E8%84%91%E9%9C%87%E8%8D%A1%23) `347.4K 🔥` `+59%`
1. [接英雄回家](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E8%8B%B1%E9%9B%84%E5%9B%9E%E5%AE%B6%23) `830.8K 🔥`
1. [中国新燃油旗舰全新瑞虎9上市](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E7%87%83%E6%B2%B9%E6%97%97%E8%88%B0%E5%85%A8%E6%96%B0%E7%91%9E%E8%99%8E9%E4%B8%8A%E5%B8%82%23) `655.1K 🔥`
1. [华晨宇喂猫吃巧克力蛋糕](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%96%82%E7%8C%AB%E5%90%83%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%9B%8B%E7%B3%95%23) `347.4K 🔥`
1. [林子烨 5600不如和豆包聊 (Lin Ziye 5600 Why not chat with Doubao)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%205600%E4%B8%8D%E5%A6%82%E5%92%8C%E8%B1%86%E5%8C%85%E8%81%8A%23) `306.1K 🔥`
1. [98年本科女孩做保洁爸妈认为扫大街](https://s.weibo.com/weibo?q=%2398%E5%B9%B4%E6%9C%AC%E7%A7%91%E5%A5%B3%E5%AD%A9%E5%81%9A%E4%BF%9D%E6%B4%81%E7%88%B8%E5%A6%88%E8%AE%A4%E4%B8%BA%E6%89%AB%E5%A4%A7%E8%A1%97%23) `211.1K 🔥`
1. [女孩每月下腹剧痛检查发现是石女](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%AF%8F%E6%9C%88%E4%B8%8B%E8%85%B9%E5%89%A7%E7%97%9B%E6%A3%80%E6%9F%A5%E5%8F%91%E7%8E%B0%E6%98%AF%E7%9F%B3%E5%A5%B3%23) `193.6K 🔥`
1. [10倍大牛股爆雷2万散户被埋](https://s.weibo.com/weibo?q=%2310%E5%80%8D%E5%A4%A7%E7%89%9B%E8%82%A1%E7%88%86%E9%9B%B72%E4%B8%87%E6%95%A3%E6%88%B7%E8%A2%AB%E5%9F%8B%23) `180.7K 🔥`
1. [王楚钦孙颖莎先后上训](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E5%85%88%E5%90%8E%E4%B8%8A%E8%AE%AD%23) `157.6K 🔥`
1. [湖人2比0火箭 (Lakers 2-0 Rockets)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA2%E6%AF%940%E7%81%AB%E7%AE%AD%23) `157.5K 🔥`
1. [虞书欣戛纳生图 (Yu Shuxin's Cannes birth photo)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%88%9B%E7%BA%B3%E7%94%9F%E5%9B%BE%23) `680.4K 🔥` `-26%`
1. [以为库克真加入小米汽车了 (I thought Cook really joined Xiaomi Motors)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E5%BA%93%E5%85%8B%E7%9C%9F%E5%8A%A0%E5%85%A5%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E4%BA%86%23) `648.7K 🔥` `-46%`
1. [民政局称20岁小伙养6弟妹系人设](https://s.weibo.com/weibo?q=%23%E6%B0%91%E6%94%BF%E5%B1%80%E7%A7%B020%E5%B2%81%E5%B0%8F%E4%BC%99%E5%85%BB6%E5%BC%9F%E5%A6%B9%E7%B3%BB%E4%BA%BA%E8%AE%BE%23) `450.4K 🔥` `-59%`
1. [国台办回应张凌赫被喊话赴台交流](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A2%AB%E5%96%8A%E8%AF%9D%E8%B5%B4%E5%8F%B0%E4%BA%A4%E6%B5%81%23) `441.3K 🔥` `-51%`
1. [终于知道为什么有些人做菜难吃了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E4%BA%9B%E4%BA%BA%E5%81%9A%E8%8F%9C%E9%9A%BE%E5%90%83%E4%BA%86%23) `410.0K 🔥` `-34%`
1. [网传披荆斩棘6阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%986%E9%98%B5%E5%AE%B9%23) `375.1K 🔥` `-59%`
1. [曹德旺说大不了把美国工厂关掉](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E5%BE%B7%E6%97%BA%E8%AF%B4%E5%A4%A7%E4%B8%8D%E4%BA%86%E6%8A%8A%E7%BE%8E%E5%9B%BD%E5%B7%A5%E5%8E%82%E5%85%B3%E6%8E%89%23) `359.2K 🔥` `-26%`
1. [王安宇见面会票价](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A7%81%E9%9D%A2%E4%BC%9A%E7%A5%A8%E4%BB%B7%23) `181.6K 🔥` `-37%`

Updated at 2026-04-22 18:39:19

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
