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

1. [中国首款整车智能体芯片星空 (China's first vehicle-mounted intelligent chip starry sky)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A6%96%E6%AC%BE%E6%95%B4%E8%BD%A6%E6%99%BA%E8%83%BD%E4%BD%93%E8%8A%AF%E7%89%87%E6%98%9F%E7%A9%BA%23) `376.6K 🔥` `NEW`
1. [歌手2026](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `329.9K 🔥` `NEW`
1. [茶颜悦色要卖卤味了](https://s.weibo.com/weibo?q=%23%E8%8C%B6%E9%A2%9C%E6%82%A6%E8%89%B2%E8%A6%81%E5%8D%96%E5%8D%A4%E5%91%B3%E4%BA%86%23) `253.1K 🔥` `NEW`
1. [朴信惠眼睛 断崖式衰老](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E4%BF%A1%E6%83%A0%E7%9C%BC%E7%9D%9B%20%E6%96%AD%E5%B4%96%E5%BC%8F%E8%A1%B0%E8%80%81%23) `252.6K 🔥` `NEW`
1. [年轻人第一台性能车](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%AC%AC%E4%B8%80%E5%8F%B0%E6%80%A7%E8%83%BD%E8%BD%A6%23) `247.9K 🔥` `NEW`
1. [大冰谈如何锻炼输出表达能力](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E8%B0%88%E5%A6%82%E4%BD%95%E9%94%BB%E7%82%BC%E8%BE%93%E5%87%BA%E8%A1%A8%E8%BE%BE%E8%83%BD%E5%8A%9B%23) `247.2K 🔥` `NEW`
1. [孙怡回浪姐宿舍](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%9B%9E%E6%B5%AA%E5%A7%90%E5%AE%BF%E8%88%8D%23) `240.6K 🔥` `NEW`
1. [谁能拒绝黄景瑜的黑色座驾](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%83%BD%E6%8B%92%E7%BB%9D%E9%BB%84%E6%99%AF%E7%91%9C%E7%9A%84%E9%BB%91%E8%89%B2%E5%BA%A7%E9%A9%BE%23) `239.3K 🔥` `NEW`
1. [原来芯片发布会可以这么浪漫](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%8A%AF%E7%89%87%E5%8F%91%E5%B8%83%E4%BC%9A%E5%8F%AF%E4%BB%A5%E8%BF%99%E4%B9%88%E6%B5%AA%E6%BC%AB%23) `239.2K 🔥` `NEW`
1. [中国交警雨天执勤的视频在国外火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%A4%E8%AD%A6%E9%9B%A8%E5%A4%A9%E6%89%A7%E5%8B%A4%E7%9A%84%E8%A7%86%E9%A2%91%E5%9C%A8%E5%9B%BD%E5%A4%96%E7%81%AB%E4%BA%86%23) `239.1K 🔥` `NEW`
1. [花少导演面试王星越 (Director Hua Shao interviews Wang Xingyue)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%AF%BC%E6%BC%94%E9%9D%A2%E8%AF%95%E7%8E%8B%E6%98%9F%E8%B6%8A%23) `232.7K 🔥` `NEW`
1. [见面真的太重要了](https://s.weibo.com/weibo?q=%23%E8%A7%81%E9%9D%A2%E7%9C%9F%E7%9A%84%E5%A4%AA%E9%87%8D%E8%A6%81%E4%BA%86%23) `192.8K 🔥` `NEW`
1. [不要在上班的时候说分手](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%9C%A8%E4%B8%8A%E7%8F%AD%E7%9A%84%E6%97%B6%E5%80%99%E8%AF%B4%E5%88%86%E6%89%8B%23) `180.5K 🔥` `NEW`
1. [何润东 原来刘涛回福建是这种感觉](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%20%E5%8E%9F%E6%9D%A5%E5%88%98%E6%B6%9B%E5%9B%9E%E7%A6%8F%E5%BB%BA%E6%98%AF%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89%23) `164.1K 🔥` `NEW`
1. [考研生拼单买盗版网课被告上法院](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E7%94%9F%E6%8B%BC%E5%8D%95%E4%B9%B0%E7%9B%97%E7%89%88%E7%BD%91%E8%AF%BE%E8%A2%AB%E5%91%8A%E4%B8%8A%E6%B3%95%E9%99%A2%23) `151.9K 🔥` `NEW`
1. [鸿蒙智行发布会](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `151.2K 🔥` `NEW`
1. [美政客称中国可能在大蒜里植入芯片](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%94%BF%E5%AE%A2%E7%A7%B0%E4%B8%AD%E5%9B%BD%E5%8F%AF%E8%83%BD%E5%9C%A8%E5%A4%A7%E8%92%9C%E9%87%8C%E6%A4%8D%E5%85%A5%E8%8A%AF%E7%89%87%23) `135.7K 🔥` `NEW`
1. [日本人称手机设置为中文感觉很清爽](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E7%A7%B0%E6%89%8B%E6%9C%BA%E8%AE%BE%E7%BD%AE%E4%B8%BA%E4%B8%AD%E6%96%87%E6%84%9F%E8%A7%89%E5%BE%88%E6%B8%85%E7%88%BD%23) `1.4M 🔥` `+135%`
1. [首批2名外籍航天员为巴基斯坦籍 (The first two foreign astronauts are Pakistani nationals)](https://s.weibo.com/weibo?q=%23%E9%A6%96%E6%89%B92%E5%90%8D%E5%A4%96%E7%B1%8D%E8%88%AA%E5%A4%A9%E5%91%98%E4%B8%BA%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E7%B1%8D%23) `907.8K 🔥` `+127%`
1. [女子不孕多年一次怀4胞胎](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E5%AD%95%E5%A4%9A%E5%B9%B4%E4%B8%80%E6%AC%A1%E6%80%804%E8%83%9E%E8%83%8E%23) `243.3K 🔥` `+42%`
1. [英国2008年后出生者终身禁止购烟](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD2008%E5%B9%B4%E5%90%8E%E5%87%BA%E7%94%9F%E8%80%85%E7%BB%88%E8%BA%AB%E7%A6%81%E6%AD%A2%E8%B4%AD%E7%83%9F%23) `240.0K 🔥` `+31%`
1. [女孩每月下腹剧痛检查发现是石女 (The girl suffers from severe lower abdominal pain every month and is found to be a stone girl during examination)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%AF%8F%E6%9C%88%E4%B8%8B%E8%85%B9%E5%89%A7%E7%97%9B%E6%A3%80%E6%9F%A5%E5%8F%91%E7%8E%B0%E6%98%AF%E7%9F%B3%E5%A5%B3%23) `235.8K 🔥` `+22%`
1. [接英雄回家](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E8%8B%B1%E9%9B%84%E5%9B%9E%E5%AE%B6%23) `696.4K 🔥`
1. [国台办回应张凌赫被喊话赴台交流](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A2%AB%E5%96%8A%E8%AF%9D%E8%B5%B4%E5%8F%B0%E4%BA%A4%E6%B5%81%23) `373.3K 🔥`
1. [田曦薇是刘海黑长直最权威的姐姐](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%98%AF%E5%88%98%E6%B5%B7%E9%BB%91%E9%95%BF%E7%9B%B4%E6%9C%80%E6%9D%83%E5%A8%81%E7%9A%84%E5%A7%90%E5%A7%90%23) `234.4K 🔥`
1. [看演唱会四不原则 (Four things to avoid when watching a concert)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%9B%E4%B8%8D%E5%8E%9F%E5%88%99%23) `181.1K 🔥`
1. [以为库克真加入小米汽车了 (I thought Cook really joined Xiaomi Motors)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E5%BA%93%E5%85%8B%E7%9C%9F%E5%8A%A0%E5%85%A5%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E4%BA%86%23) `337.9K 🔥` `-48%`
1. [中国新燃油旗舰全新瑞虎9上市](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E7%87%83%E6%B2%B9%E6%97%97%E8%88%B0%E5%85%A8%E6%96%B0%E7%91%9E%E8%99%8E9%E4%B8%8A%E5%B8%82%23) `316.0K 🔥` `-52%`
1. [终于知道为什么有些人做菜难吃了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E4%BA%9B%E4%BA%BA%E5%81%9A%E8%8F%9C%E9%9A%BE%E5%90%83%E4%BA%86%23) `312.5K 🔥` `-24%`
1. [民政局称20岁小伙养6弟妹系人设](https://s.weibo.com/weibo?q=%23%E6%B0%91%E6%94%BF%E5%B1%80%E7%A7%B020%E5%B2%81%E5%B0%8F%E4%BC%99%E5%85%BB6%E5%BC%9F%E5%A6%B9%E7%B3%BB%E4%BA%BA%E8%AE%BE%23) `286.4K 🔥` `-36%`
1. [夫妻鱼塘双双溺亡留下两孩子](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E9%B1%BC%E5%A1%98%E5%8F%8C%E5%8F%8C%E6%BA%BA%E4%BA%A1%E7%95%99%E4%B8%8B%E4%B8%A4%E5%AD%A9%E5%AD%90%23) `257.6K 🔥` `-24%`
1. [詹姆斯暴扣杀死比赛](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E6%9A%B4%E6%89%A3%E6%9D%80%E6%AD%BB%E6%AF%94%E8%B5%9B%23) `256.8K 🔥` `-43%`
1. [侯明昊 歌手2026](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%20%E6%AD%8C%E6%89%8B2026%23) `255.4K 🔥` `-67%`
1. [陈妍希告了陈晓粉丝 (Chen Yanxi sued Chen Xiao fans)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%91%8A%E4%BA%86%E9%99%88%E6%99%93%E7%B2%89%E4%B8%9D%23) `254.3K 🔥` `-39%`
1. [虞书欣戛纳生图 (Yu Shuxin's Cannes birth photo)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%88%9B%E7%BA%B3%E7%94%9F%E5%9B%BE%23) `250.9K 🔥` `-63%`
1. [员工称不涨工资干不了3天后被离职](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E7%A7%B0%E4%B8%8D%E6%B6%A8%E5%B7%A5%E8%B5%84%E5%B9%B2%E4%B8%8D%E4%BA%863%E5%A4%A9%E5%90%8E%E8%A2%AB%E7%A6%BB%E8%81%8C%23) `250.2K 🔥` `-40%`
1. [陈妍希申请强制执行](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E7%94%B3%E8%AF%B7%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%23) `249.0K 🔥` `-44%`
1. [曹德旺说大不了把美国工厂关掉](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E5%BE%B7%E6%97%BA%E8%AF%B4%E5%A4%A7%E4%B8%8D%E4%BA%86%E6%8A%8A%E7%BE%8E%E5%9B%BD%E5%B7%A5%E5%8E%82%E5%85%B3%E6%8E%89%23) `246.8K 🔥` `-31%`
1. [体检无异常发现却是癌症晚期](https://s.weibo.com/weibo?q=%23%E4%BD%93%E6%A3%80%E6%97%A0%E5%BC%82%E5%B8%B8%E5%8F%91%E7%8E%B0%E5%8D%B4%E6%98%AF%E7%99%8C%E7%97%87%E6%99%9A%E6%9C%9F%23) `245.6K 🔥` `-39%`
1. [陈奕恒的手机壁纸是jennie](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E7%9A%84%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8%E6%98%AFjennie%23) `245.2K 🔥` `-44%`
1. [张雪机车补偿 (Zhang Xue motorcycle compensation)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%A1%A5%E5%81%BF%23) `242.5K 🔥` `-79%`
1. [曝男明星KTV亲女网红 (It is revealed that a male star in KTV is married to a female internet celebrity)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%94%B7%E6%98%8E%E6%98%9FKTV%E4%BA%B2%E5%A5%B3%E7%BD%91%E7%BA%A2%23) `241.4K 🔥` `-41%`
1. [网传披荆斩棘6阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%986%E9%98%B5%E5%AE%B9%23) `239.3K 🔥` `-36%`
1. [GUCCI田曦薇张凌赫大片](https://s.weibo.com/weibo?q=%23GUCCI%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%A7%E7%89%87%23) `239.2K 🔥` `-42%`
1. [林子烨 5600不如和豆包聊 (Lin Ziye 5600 Why not chat with Doubao)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%205600%E4%B8%8D%E5%A6%82%E5%92%8C%E8%B1%86%E5%8C%85%E8%81%8A%23) `239.2K 🔥` `-22%`
1. [华晨宇喂猫吃巧克力蛋糕](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%96%82%E7%8C%AB%E5%90%83%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%9B%8B%E7%B3%95%23) `239.1K 🔥` `-31%`
1. [lululemon质检结果 (lululemon quality inspection results)](https://s.weibo.com/weibo?q=%23lululemon%E8%B4%A8%E6%A3%80%E7%BB%93%E6%9E%9C%23) `223.6K 🔥` `-44%`
1. [文班亚马确诊为脑震荡](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E7%A1%AE%E8%AF%8A%E4%B8%BA%E8%84%91%E9%9C%87%E8%8D%A1%23) `173.1K 🔥` `-50%`
1. [文俊辉模仿李小冉 (Wen Junhui imitates Li Xiaoran)](https://s.weibo.com/weibo?q=%23%E6%96%87%E4%BF%8A%E8%BE%89%E6%A8%A1%E4%BB%BF%E6%9D%8E%E5%B0%8F%E5%86%89%23) `168.6K 🔥` `-21%`
1. [报考公安杨某媛与网传并非同一人](https://s.weibo.com/weibo?q=%23%E6%8A%A5%E8%80%83%E5%85%AC%E5%AE%89%E6%9D%A8%E6%9F%90%E5%AA%9B%E4%B8%8E%E7%BD%91%E4%BC%A0%E5%B9%B6%E9%9D%9E%E5%90%8C%E4%B8%80%E4%BA%BA%23) `165.2K 🔥` `-23%`
1. [98年本科女孩做保洁爸妈认为扫大街](https://s.weibo.com/weibo?q=%2398%E5%B9%B4%E6%9C%AC%E7%A7%91%E5%A5%B3%E5%AD%A9%E5%81%9A%E4%BF%9D%E6%B4%81%E7%88%B8%E5%A6%88%E8%AE%A4%E4%B8%BA%E6%89%AB%E5%A4%A7%E8%A1%97%23) `145.5K 🔥` `-31%`
1. [王安宇见面会票价](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A7%81%E9%9D%A2%E4%BC%9A%E7%A5%A8%E4%BB%B7%23) `144.2K 🔥` `-21%`

Updated at 2026-04-22 19:43:38

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
