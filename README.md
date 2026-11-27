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

1. [三只松鼠一夜整改反而让人唏嘘](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8F%AA%E6%9D%BE%E9%BC%A0%E4%B8%80%E5%A4%9C%E6%95%B4%E6%94%B9%E5%8F%8D%E8%80%8C%E8%AE%A9%E4%BA%BA%E5%94%8F%E5%98%98%23) `1.2M 🔥` `NEW`
1. [曾经大胃王如今吃一口都奢侈](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E7%BB%8F%E5%A4%A7%E8%83%83%E7%8E%8B%E5%A6%82%E4%BB%8A%E5%90%83%E4%B8%80%E5%8F%A3%E9%83%BD%E5%A5%A2%E4%BE%88%23) `889.1K 🔥` `NEW`
1. [新质生产力大咖说AI季](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%B4%A8%E7%94%9F%E4%BA%A7%E5%8A%9B%E5%A4%A7%E5%92%96%E8%AF%B4AI%E5%AD%A3%23) `800.7K 🔥` `NEW`
1. [9系之上唯有世家](https://s.weibo.com/weibo?q=%239%E7%B3%BB%E4%B9%8B%E4%B8%8A%E5%94%AF%E6%9C%89%E4%B8%96%E5%AE%B6%23) `794.1K 🔥` `NEW`
1. [厉娜重新跟你做朋友原话被删](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E9%87%8D%E6%96%B0%E8%B7%9F%E4%BD%A0%E5%81%9A%E6%9C%8B%E5%8F%8B%E5%8E%9F%E8%AF%9D%E8%A2%AB%E5%88%A0%23) `791.8K 🔥` `NEW`
1. [多平台已下架纸质短剧](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B9%B3%E5%8F%B0%E5%B7%B2%E4%B8%8B%E6%9E%B6%E7%BA%B8%E8%B4%A8%E7%9F%AD%E5%89%A7%23) `469.7K 🔥` `NEW`
1. [医保局工作人员直播间辱骂咨询者](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E5%B1%80%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E7%9B%B4%E6%92%AD%E9%97%B4%E8%BE%B1%E9%AA%82%E5%92%A8%E8%AF%A2%E8%80%85%23) `407.5K 🔥` `NEW`
1. [我的宝藏食谱](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%AE%9D%E8%97%8F%E9%A3%9F%E8%B0%B1%23) `363.9K 🔥` `NEW`
1. [法医刘良自曝被悬赏](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%8C%BB%E5%88%98%E8%89%AF%E8%87%AA%E6%9B%9D%E8%A2%AB%E6%82%AC%E8%B5%8F%23) `341.4K 🔥` `NEW`
1. [369和Knight谈BLG新AD](https://s.weibo.com/weibo?q=%23369%E5%92%8CKnight%E8%B0%88BLG%E6%96%B0AD%23) `341.3K 🔥` `NEW`
1. [官方通报济南医保主播辱骂咨询者](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%B5%8E%E5%8D%97%E5%8C%BB%E4%BF%9D%E4%B8%BB%E6%92%AD%E8%BE%B1%E9%AA%82%E5%92%A8%E8%AF%A2%E8%80%85%23) `339.0K 🔥` `NEW`
1. [三只松鼠20亿园区容不下一间好宿舍](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8F%AA%E6%9D%BE%E9%BC%A020%E4%BA%BF%E5%9B%AD%E5%8C%BA%E5%AE%B9%E4%B8%8D%E4%B8%8B%E4%B8%80%E9%97%B4%E5%A5%BD%E5%AE%BF%E8%88%8D%23) `337.5K 🔥` `NEW`
1. [中国女子在泰国遭绑架被施暴](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%B3%B0%E5%9B%BD%E9%81%AD%E7%BB%91%E6%9E%B6%E8%A2%AB%E6%96%BD%E6%9A%B4%23) `336.8K 🔥` `NEW`
1. [马天宇 我都40了肯定有过亲密关系啊](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%20%E6%88%91%E9%83%BD40%E4%BA%86%E8%82%AF%E5%AE%9A%E6%9C%89%E8%BF%87%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E5%95%8A%23) `335.4K 🔥` `NEW`
1. [赖冠霖对赵昭仪说自己剧组随便坐](https://s.weibo.com/weibo?q=%23%E8%B5%96%E5%86%A0%E9%9C%96%E5%AF%B9%E8%B5%B5%E6%98%AD%E4%BB%AA%E8%AF%B4%E8%87%AA%E5%B7%B1%E5%89%A7%E7%BB%84%E9%9A%8F%E4%BE%BF%E5%9D%90%23) `334.5K 🔥` `NEW`
1. [梅毒阳性育儿嫂手渗血时仍护理婴儿](https://s.weibo.com/weibo?q=%23%E6%A2%85%E6%AF%92%E9%98%B3%E6%80%A7%E8%82%B2%E5%84%BF%E5%AB%82%E6%89%8B%E6%B8%97%E8%A1%80%E6%97%B6%E4%BB%8D%E6%8A%A4%E7%90%86%E5%A9%B4%E5%84%BF%23) `332.1K 🔥` `NEW`
1. [3c](https://s.weibo.com/weibo?q=%233c%23) `331.4K 🔥` `NEW`
1. [小伊伊老公发离婚判决书](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%8A%E4%BC%8A%E8%80%81%E5%85%AC%E5%8F%91%E7%A6%BB%E5%A9%9A%E5%88%A4%E5%86%B3%E4%B9%A6%23) `329.6K 🔥` `NEW`
1. [章梓馨何江官宣分手](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%A2%93%E9%A6%A8%E4%BD%95%E6%B1%9F%E5%AE%98%E5%AE%A3%E5%88%86%E6%89%8B%23) `327.7K 🔥` `NEW`
1. [胡歌刘涛 吻戏](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E5%88%98%E6%B6%9B%20%E5%90%BB%E6%88%8F%23) `327.6K 🔥` `NEW`
1. [俄乌阵亡军人遗体交换250换22](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B9%8C%E9%98%B5%E4%BA%A1%E5%86%9B%E4%BA%BA%E9%81%97%E4%BD%93%E4%BA%A4%E6%8D%A2250%E6%8D%A222%23) `327.6K 🔥` `NEW`
1. [小米世界模型2.0实时渲染](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8B2.0%E5%AE%9E%E6%97%B6%E6%B8%B2%E6%9F%93%23) `327.4K 🔥` `NEW`
1. [辛芷蕾这对赵昭仪来说和救命有什么区别](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E8%BF%99%E5%AF%B9%E8%B5%B5%E6%98%AD%E4%BB%AA%E6%9D%A5%E8%AF%B4%E5%92%8C%E6%95%91%E5%91%BD%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%23) `327.4K 🔥` `NEW`
1. [妈妈用四十二岁回应二十一岁](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%94%A8%E5%9B%9B%E5%8D%81%E4%BA%8C%E5%B2%81%E5%9B%9E%E5%BA%94%E4%BA%8C%E5%8D%81%E4%B8%80%E5%B2%81%23) `327.1K 🔥` `NEW`
1. [马天宇回应财务自由](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%9B%9E%E5%BA%94%E8%B4%A2%E5%8A%A1%E8%87%AA%E7%94%B1%23) `327.1K 🔥` `NEW`
1. [带壳宝宝分娩手术要求很高](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E5%A3%B3%E5%AE%9D%E5%AE%9D%E5%88%86%E5%A8%A9%E6%89%8B%E6%9C%AF%E8%A6%81%E6%B1%82%E5%BE%88%E9%AB%98%23) `326.9K 🔥` `NEW`
1. [荣耀700首销破纪录](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80700%E9%A6%96%E9%94%80%E7%A0%B4%E7%BA%AA%E5%BD%95%23) `326.8K 🔥` `NEW`
1. [发现了换手机的最佳时机](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%BA%86%E6%8D%A2%E6%89%8B%E6%9C%BA%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BA%23) `326.6K 🔥` `NEW`
1. [妻子出轨生子丈夫选择抚养第三者急了](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%87%BA%E8%BD%A8%E7%94%9F%E5%AD%90%E4%B8%88%E5%A4%AB%E9%80%89%E6%8B%A9%E6%8A%9A%E5%85%BB%E7%AC%AC%E4%B8%89%E8%80%85%E6%80%A5%E4%BA%86%23) `326.5K 🔥` `NEW`
1. [科创板一天收复全年跌幅](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%88%9B%E6%9D%BF%E4%B8%80%E5%A4%A9%E6%94%B6%E5%A4%8D%E5%85%A8%E5%B9%B4%E8%B7%8C%E5%B9%85%23) `326.4K 🔥` `NEW`
1. [两京十五日拉闸停电式结尾](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E6%8B%89%E9%97%B8%E5%81%9C%E7%94%B5%E5%BC%8F%E7%BB%93%E5%B0%BE%23) `326.3K 🔥` `NEW`
1. [伞兵ob后会友期要气得维持不住人形了](https://s.weibo.com/weibo?q=%23%E4%BC%9E%E5%85%B5ob%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E8%A6%81%E6%B0%94%E5%BE%97%E7%BB%B4%E6%8C%81%E4%B8%8D%E4%BD%8F%E4%BA%BA%E5%BD%A2%E4%BA%86%23) `326.2K 🔥` `NEW`
1. [第一次听说吃雪蛤直接抵制](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%90%AC%E8%AF%B4%E5%90%83%E9%9B%AA%E8%9B%A4%E7%9B%B4%E6%8E%A5%E6%8A%B5%E5%88%B6%23) `326.0K 🔥` `NEW`
1. [白小纯青稚在暗示什么](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E5%9C%A8%E6%9A%97%E7%A4%BA%E4%BB%80%E4%B9%88%23) `326.0K 🔥` `NEW`
1. [杨紫ELLE季候风大片造型](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%ABELLE%E5%AD%A3%E5%80%99%E9%A3%8E%E5%A4%A7%E7%89%87%E9%80%A0%E5%9E%8B%23) `325.9K 🔥` `NEW`
1. [MG宣布停产燃油车](https://s.weibo.com/weibo?q=%23MG%E5%AE%A3%E5%B8%83%E5%81%9C%E4%BA%A7%E7%87%83%E6%B2%B9%E8%BD%A6%23) `317.6K 🔥` `NEW`
1. [法医刘良称徽剑以一己之力揭开黑幕](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%8C%BB%E5%88%98%E8%89%AF%E7%A7%B0%E5%BE%BD%E5%89%91%E4%BB%A5%E4%B8%80%E5%B7%B1%E4%B9%8B%E5%8A%9B%E6%8F%AD%E5%BC%80%E9%BB%91%E5%B9%95%23) `316.3K 🔥` `NEW`
1. [厉娜掉粉](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E6%8E%89%E7%B2%89%23) `316.1K 🔥` `NEW`
1. [闪电 还是前任好](https://s.weibo.com/weibo?q=%23%E9%97%AA%E7%94%B5%20%E8%BF%98%E6%98%AF%E5%89%8D%E4%BB%BB%E5%A5%BD%23) `315.2K 🔥` `NEW`
1. [KPL选手直播禁玩三角洲](https://s.weibo.com/weibo?q=%23KPL%E9%80%89%E6%89%8B%E7%9B%B4%E6%92%AD%E7%A6%81%E7%8E%A9%E4%B8%89%E8%A7%92%E6%B4%B2%23) `303.3K 🔥` `NEW`
1. [辛芷蕾花少又迎来宣发期](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E8%8A%B1%E5%B0%91%E5%8F%88%E8%BF%8E%E6%9D%A5%E5%AE%A3%E5%8F%91%E6%9C%9F%23) `302.0K 🔥` `NEW`
1. [文吉儿说王子璇都是假意](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E8%AF%B4%E7%8E%8B%E5%AD%90%E7%92%87%E9%83%BD%E6%98%AF%E5%81%87%E6%84%8F%23) `301.9K 🔥` `NEW`
1. [TF夏季运动会纪录片](https://s.weibo.com/weibo?q=%23TF%E5%A4%8F%E5%AD%A3%E8%BF%90%E5%8A%A8%E4%BC%9A%E7%BA%AA%E5%BD%95%E7%89%87%23) `273.5K 🔥` `NEW`
1. [田曦薇见到亲戚直接飙方言](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%A7%81%E5%88%B0%E4%BA%B2%E6%88%9A%E7%9B%B4%E6%8E%A5%E9%A3%99%E6%96%B9%E8%A8%80%23) `245.3K 🔥` `NEW`
1. [女生想谈恋爱朋友说跟我谈呗](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%83%B3%E8%B0%88%E6%81%8B%E7%88%B1%E6%9C%8B%E5%8F%8B%E8%AF%B4%E8%B7%9F%E6%88%91%E8%B0%88%E5%91%97%23) `245.3K 🔥` `NEW`
1. [男子去世前曾为已去世女友守灵3天](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E5%89%8D%E6%9B%BE%E4%B8%BA%E5%B7%B2%E5%8E%BB%E4%B8%96%E5%A5%B3%E5%8F%8B%E5%AE%88%E7%81%B53%E5%A4%A9%23) `244.2K 🔥` `NEW`
1. [张郁梓方否认恋情](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%83%81%E6%A2%93%E6%96%B9%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23) `243.9K 🔥` `NEW`
1. [张真源张郁梓的时间线](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%BC%A0%E9%83%81%E6%A2%93%E7%9A%84%E6%97%B6%E9%97%B4%E7%BA%BF%23) `243.3K 🔥` `NEW`
1. [刘亦菲超绝头身比](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E8%B6%85%E7%BB%9D%E5%A4%B4%E8%BA%AB%E6%AF%94%23) `242.4K 🔥` `NEW`
1. [伊能静共情许飞这段话原来是被剪了](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E5%85%B1%E6%83%85%E8%AE%B8%E9%A3%9E%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%8E%9F%E6%9D%A5%E6%98%AF%E8%A2%AB%E5%89%AA%E4%BA%86%23) `241.9K 🔥` `NEW`
1. [泰国女歌手遭袭胸踹男子脸](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%A5%B3%E6%AD%8C%E6%89%8B%E9%81%AD%E8%A2%AD%E8%83%B8%E8%B8%B9%E7%94%B7%E5%AD%90%E8%84%B8%23) `241.4K 🔥` `NEW`
1. [白小纯全世界最珍视礼物之人](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%85%A8%E4%B8%96%E7%95%8C%E6%9C%80%E7%8F%8D%E8%A7%86%E7%A4%BC%E7%89%A9%E4%B9%8B%E4%BA%BA%23) `240.9K 🔥` `NEW`

Updated at 2026-11-27 22:53:31

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
