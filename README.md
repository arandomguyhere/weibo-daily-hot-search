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

1. [海康威视取消大小周遭员工抵制](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%B7%E5%A8%81%E8%A7%86%E5%8F%96%E6%B6%88%E5%A4%A7%E5%B0%8F%E5%91%A8%E9%81%AD%E5%91%98%E5%B7%A5%E6%8A%B5%E5%88%B6%23) `2.8M 🔥` `NEW`
1. [女子因超40岁被酒店拒办入住](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E8%B6%8540%E5%B2%81%E8%A2%AB%E9%85%92%E5%BA%97%E6%8B%92%E5%8A%9E%E5%85%A5%E4%BD%8F%23) `1.4M 🔥` `NEW`
1. [服务贸易发展十五五规划来了](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E5%8A%A1%E8%B4%B8%E6%98%93%E5%8F%91%E5%B1%95%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E6%9D%A5%E4%BA%86%23) `1.3M 🔥` `NEW`
1. [问界新M7亮相广州车展](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E6%96%B0M7%E4%BA%AE%E7%9B%B8%E5%B9%BF%E5%B7%9E%E8%BD%A6%E5%B1%95%23) `1.3M 🔥` `NEW`
1. [被大疆竞业范围震撼到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A4%A7%E7%96%86%E7%AB%9E%E4%B8%9A%E8%8C%83%E5%9B%B4%E9%9C%87%E6%92%BC%E5%88%B0%E4%BA%86%23) `1.3M 🔥` `NEW`
1. [文吉儿不止邀请过王子璇](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E4%B8%8D%E6%AD%A2%E9%82%80%E8%AF%B7%E8%BF%87%E7%8E%8B%E5%AD%90%E7%92%87%23) `960.0K 🔥` `NEW`
1. [赖冠霖一下就get到了赵昭仪的愤怒](https://s.weibo.com/weibo?q=%23%E8%B5%96%E5%86%A0%E9%9C%96%E4%B8%80%E4%B8%8B%E5%B0%B1get%E5%88%B0%E4%BA%86%E8%B5%B5%E6%98%AD%E4%BB%AA%E7%9A%84%E6%84%A4%E6%80%92%23) `540.7K 🔥` `NEW`
1. [入冬仪式感是第一桶炸鸡给的](https://s.weibo.com/weibo?q=%23%E5%85%A5%E5%86%AC%E4%BB%AA%E5%BC%8F%E6%84%9F%E6%98%AF%E7%AC%AC%E4%B8%80%E6%A1%B6%E7%82%B8%E9%B8%A1%E7%BB%99%E7%9A%84%23) `524.1K 🔥` `NEW`
1. [On直播哭了](https://s.weibo.com/weibo?q=%23On%E7%9B%B4%E6%92%AD%E5%93%AD%E4%BA%86%23) `515.2K 🔥` `NEW`
1. [曾经80万的车现在卖5万](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E7%BB%8F80%E4%B8%87%E7%9A%84%E8%BD%A6%E7%8E%B0%E5%9C%A8%E5%8D%965%E4%B8%87%23) `503.2K 🔥` `NEW`
1. [警方回应50余人摘蜜桔仅留下10元](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%9450%E4%BD%99%E4%BA%BA%E6%91%98%E8%9C%9C%E6%A1%94%E4%BB%85%E7%95%99%E4%B8%8B10%E5%85%83%23) `390.4K 🔥` `NEW`
1. [印度天价婚宴现场民众哄抢食物](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A4%A9%E4%BB%B7%E5%A9%9A%E5%AE%B4%E7%8E%B0%E5%9C%BA%E6%B0%91%E4%BC%97%E5%93%84%E6%8A%A2%E9%A3%9F%E7%89%A9%23) `289.3K 🔥` `NEW`
1. [赵昭仪曝被导演开黄腔](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E6%9B%9D%E8%A2%AB%E5%AF%BC%E6%BC%94%E5%BC%80%E9%BB%84%E8%85%94%23) `286.6K 🔥` `NEW`
1. [海康威视部分高管带头否定新规](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%B7%E5%A8%81%E8%A7%86%E9%83%A8%E5%88%86%E9%AB%98%E7%AE%A1%E5%B8%A6%E5%A4%B4%E5%90%A6%E5%AE%9A%E6%96%B0%E8%A7%84%23) `284.2K 🔥` `NEW`
1. [曝天娱高层一开始就知道厉娜想跳槽](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A4%A9%E5%A8%B1%E9%AB%98%E5%B1%82%E4%B8%80%E5%BC%80%E5%A7%8B%E5%B0%B1%E7%9F%A5%E9%81%93%E5%8E%89%E5%A8%9C%E6%83%B3%E8%B7%B3%E6%A7%BD%23) `283.0K 🔥` `NEW`
1. [马天宇加回张萌微信](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%8A%A0%E5%9B%9E%E5%BC%A0%E8%90%8C%E5%BE%AE%E4%BF%A1%23) `280.5K 🔥` `NEW`
1. [赵昭仪合作导演清单](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E5%90%88%E4%BD%9C%E5%AF%BC%E6%BC%94%E6%B8%85%E5%8D%95%23) `277.4K 🔥` `NEW`
1. [宝马的含金量还在上升](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E9%A9%AC%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `273.2K 🔥` `NEW`
1. [许飞这是人能承受的痛苦吗](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E8%BF%99%E6%98%AF%E4%BA%BA%E8%83%BD%E6%89%BF%E5%8F%97%E7%9A%84%E7%97%9B%E8%8B%A6%E5%90%97%23) `272.1K 🔥` `NEW`
1. [特朗普送深圳酒店总经理徽章袖扣](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E9%80%81%E6%B7%B1%E5%9C%B3%E9%85%92%E5%BA%97%E6%80%BB%E7%BB%8F%E7%90%86%E5%BE%BD%E7%AB%A0%E8%A2%96%E6%89%A3%23) `271.4K 🔥` `NEW`
1. [杜锋说男篮缺凝聚力](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E9%94%8B%E8%AF%B4%E7%94%B7%E7%AF%AE%E7%BC%BA%E5%87%9D%E8%81%9A%E5%8A%9B%23) `269.3K 🔥` `NEW`
1. [别把豆包当医生](https://s.weibo.com/weibo?q=%23%E5%88%AB%E6%8A%8A%E8%B1%86%E5%8C%85%E5%BD%93%E5%8C%BB%E7%94%9F%23) `269.1K 🔥` `NEW`
1. [助理给孙千送外卖的视频外网火了](https://s.weibo.com/weibo?q=%23%E5%8A%A9%E7%90%86%E7%BB%99%E5%AD%99%E5%8D%83%E9%80%81%E5%A4%96%E5%8D%96%E7%9A%84%E8%A7%86%E9%A2%91%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `267.5K 🔥` `NEW`
1. [许飞厉娜说没有争吵](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%8E%89%E5%A8%9C%E8%AF%B4%E6%B2%A1%E6%9C%89%E4%BA%89%E5%90%B5%23) `265.6K 🔥` `NEW`
1. [杨蓉遗传病暂无根治手段](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%93%89%E9%81%97%E4%BC%A0%E7%97%85%E6%9A%82%E6%97%A0%E6%A0%B9%E6%B2%BB%E6%89%8B%E6%AE%B5%23) `264.5K 🔥` `NEW`
1. [被白小纯青稚情感肘击到窒息](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E6%83%85%E6%84%9F%E8%82%98%E5%87%BB%E5%88%B0%E7%AA%92%E6%81%AF%23) `262.1K 🔥` `NEW`
1. [A股又爆发](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8F%88%E7%88%86%E5%8F%91%23) `261.2K 🔥` `NEW`
1. [特朗普怒了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%80%92%E4%BA%86%23) `260.4K 🔥` `NEW`
1. [王楚然全世界最尊重冬天穿搭之人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%85%A8%E4%B8%96%E7%95%8C%E6%9C%80%E5%B0%8A%E9%87%8D%E5%86%AC%E5%A4%A9%E7%A9%BF%E6%90%AD%E4%B9%8B%E4%BA%BA%23) `257.8K 🔥` `NEW`
1. [好好生活官宣定档](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A5%BD%E7%94%9F%E6%B4%BB%E5%AE%98%E5%AE%A3%E5%AE%9A%E6%A1%A3%23) `257.7K 🔥` `NEW`
1. [厉娜身上有非常重的重建痕迹](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E8%BA%AB%E4%B8%8A%E6%9C%89%E9%9D%9E%E5%B8%B8%E9%87%8D%E7%9A%84%E9%87%8D%E5%BB%BA%E7%97%95%E8%BF%B9%23) `234.2K 🔥` `NEW`
1. [高市称和普京聊了30分钟俄方否认](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E7%A7%B0%E5%92%8C%E6%99%AE%E4%BA%AC%E8%81%8A%E4%BA%8630%E5%88%86%E9%92%9F%E4%BF%84%E6%96%B9%E5%90%A6%E8%AE%A4%23) `234.1K 🔥` `NEW`
1. [曝Viper拒绝BLG续约邀请](https://s.weibo.com/weibo?q=%23%E6%9B%9DViper%E6%8B%92%E7%BB%9DBLG%E7%BB%AD%E7%BA%A6%E9%82%80%E8%AF%B7%23) `233.5K 🔥` `NEW`
1. [梅尼耶妻子否认合照女明星不贴胸贴](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%B0%BC%E8%80%B6%E5%A6%BB%E5%AD%90%E5%90%A6%E8%AE%A4%E5%90%88%E7%85%A7%E5%A5%B3%E6%98%8E%E6%98%9F%E4%B8%8D%E8%B4%B4%E8%83%B8%E8%B4%B4%23) `233.0K 🔥` `NEW`
1. [走错果园摘走数百斤蜜桔仅留下10元](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E9%94%99%E6%9E%9C%E5%9B%AD%E6%91%98%E8%B5%B0%E6%95%B0%E7%99%BE%E6%96%A4%E8%9C%9C%E6%A1%94%E4%BB%85%E7%95%99%E4%B8%8B10%E5%85%83%23) `232.8K 🔥` `NEW`
1. [失独68岁女子冒险产下龙凤胎](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E7%8B%AC68%E5%B2%81%E5%A5%B3%E5%AD%90%E5%86%92%E9%99%A9%E4%BA%A7%E4%B8%8B%E9%BE%99%E5%87%A4%E8%83%8E%23) `232.3K 🔥` `NEW`
1. [爱情公寓众人月薪](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%BC%97%E4%BA%BA%E6%9C%88%E8%96%AA%23) `232.2K 🔥` `NEW`
1. [坐苹果箱自由](https://s.weibo.com/weibo?q=%23%E5%9D%90%E8%8B%B9%E6%9E%9C%E7%AE%B1%E8%87%AA%E7%94%B1%23) `226.6K 🔥` `NEW`
1. [人社局非常重视三只松鼠宿舍问题](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%A4%BE%E5%B1%80%E9%9D%9E%E5%B8%B8%E9%87%8D%E8%A7%86%E4%B8%89%E5%8F%AA%E6%9D%BE%E9%BC%A0%E5%AE%BF%E8%88%8D%E9%97%AE%E9%A2%98%23) `223.5K 🔥` `NEW`
1. [失去了文王才知道文王的重要性](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E5%8E%BB%E4%BA%86%E6%96%87%E7%8E%8B%E6%89%8D%E7%9F%A5%E9%81%93%E6%96%87%E7%8E%8B%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23) `218.1K 🔥` `NEW`
1. [有些食物是炎症加速器](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%9B%E9%A3%9F%E7%89%A9%E6%98%AF%E7%82%8E%E7%97%87%E5%8A%A0%E9%80%9F%E5%99%A8%23) `207.0K 🔥` `NEW`
1. [仇人见到宋雨琦这个样子也要释怀了](https://s.weibo.com/weibo?q=%23%E4%BB%87%E4%BA%BA%E8%A7%81%E5%88%B0%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%BF%99%E4%B8%AA%E6%A0%B7%E5%AD%90%E4%B9%9F%E8%A6%81%E9%87%8A%E6%80%80%E4%BA%86%23) `203.8K 🔥` `NEW`
1. [Viper跟观众告别](https://s.weibo.com/weibo?q=%23Viper%E8%B7%9F%E8%A7%82%E4%BC%97%E5%91%8A%E5%88%AB%23) `203.3K 🔥` `NEW`
1. [海康威视试行965工作制被指变相降薪](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%B7%E5%A8%81%E8%A7%86%E8%AF%95%E8%A1%8C965%E5%B7%A5%E4%BD%9C%E5%88%B6%E8%A2%AB%E6%8C%87%E5%8F%98%E7%9B%B8%E9%99%8D%E8%96%AA%23) `196.5K 🔥` `NEW`
1. [泰国男子当众袭胸女歌手跪地道歉](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E7%94%B7%E5%AD%90%E5%BD%93%E4%BC%97%E8%A2%AD%E8%83%B8%E5%A5%B3%E6%AD%8C%E6%89%8B%E8%B7%AA%E5%9C%B0%E9%81%93%E6%AD%89%23) `195.9K 🔥` `NEW`
1. [长期炎症是至少8种癌症的帮凶](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%82%8E%E7%97%87%E6%98%AF%E8%87%B3%E5%B0%918%E7%A7%8D%E7%99%8C%E7%97%87%E7%9A%84%E5%B8%AE%E5%87%B6%23) `183.1K 🔥` `NEW`
1. [华为MateX8有什么大不一样](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMateX8%E6%9C%89%E4%BB%80%E4%B9%88%E5%A4%A7%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `180.9K 🔥` `NEW`
1. [李昀锐李一桐 不只是结婚而已](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E6%9D%8E%E4%B8%80%E6%A1%90%20%E4%B8%8D%E5%8F%AA%E6%98%AF%E7%BB%93%E5%A9%9A%E8%80%8C%E5%B7%B2%23) `179.3K 🔥` `NEW`
1. [蒋欣 你不是驾崩了吗](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%20%E4%BD%A0%E4%B8%8D%E6%98%AF%E9%A9%BE%E5%B4%A9%E4%BA%86%E5%90%97%23) `176.7K 🔥` `NEW`
1. [央视主持人罕见不解质疑郭士强换人](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%BD%95%E8%A7%81%E4%B8%8D%E8%A7%A3%E8%B4%A8%E7%96%91%E9%83%AD%E5%A3%AB%E5%BC%BA%E6%8D%A2%E4%BA%BA%23) `173.2K 🔥` `NEW`
1. [小米HAD发布最新版本](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3HAD%E5%8F%91%E5%B8%83%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC%23) `173.1K 🔥` `NEW`

Updated at 2026-11-27 12:58:27

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
