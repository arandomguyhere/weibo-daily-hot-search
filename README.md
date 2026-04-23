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

1. [打洲又养虾 荣耀笔记本夯到家 (Traveling to the island and raising shrimps, the Honor notebook is ready for home)](https://s.weibo.com/weibo?q=%23%E6%89%93%E6%B4%B2%E5%8F%88%E5%85%BB%E8%99%BE%20%E8%8D%A3%E8%80%80%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%A4%AF%E5%88%B0%E5%AE%B6%23) `676.6K 🔥` `NEW`
1. [男子整日疑妻出轨确诊神经梅毒晚期](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%95%B4%E6%97%A5%E7%96%91%E5%A6%BB%E5%87%BA%E8%BD%A8%E7%A1%AE%E8%AF%8A%E7%A5%9E%E7%BB%8F%E6%A2%85%E6%AF%92%E6%99%9A%E6%9C%9F%23) `668.1K 🔥` `NEW`
1. [用奶茶袋子当通勤包的人小心](https://s.weibo.com/weibo?q=%23%E7%94%A8%E5%A5%B6%E8%8C%B6%E8%A2%8B%E5%AD%90%E5%BD%93%E9%80%9A%E5%8B%A4%E5%8C%85%E7%9A%84%E4%BA%BA%E5%B0%8F%E5%BF%83%23) `653.9K 🔥` `NEW`
1. [马頔李纯结婚证是手写的](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E6%9D%8E%E7%BA%AF%E7%BB%93%E5%A9%9A%E8%AF%81%E6%98%AF%E6%89%8B%E5%86%99%E7%9A%84%23) `651.5K 🔥` `NEW`
1. [微小说大赛发百万奖金](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%B0%8F%E8%AF%B4%E5%A4%A7%E8%B5%9B%E5%8F%91%E7%99%BE%E4%B8%87%E5%A5%96%E9%87%91%23) `648.3K 🔥` `NEW`
1. [赛后嫖娼派对套餐价格达数千欧元](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%90%8E%E5%AB%96%E5%A8%BC%E6%B4%BE%E5%AF%B9%E5%A5%97%E9%A4%90%E4%BB%B7%E6%A0%BC%E8%BE%BE%E6%95%B0%E5%8D%83%E6%AC%A7%E5%85%83%23) `615.3K 🔥` `NEW`
1. [亚马尔赛季报销](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E8%B5%9B%E5%AD%A3%E6%8A%A5%E9%94%80%23) `484.9K 🔥` `NEW`
1. [男子被扒光绑树上婚闹现场视频曝光](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E6%89%92%E5%85%89%E7%BB%91%E6%A0%91%E4%B8%8A%E5%A9%9A%E9%97%B9%E7%8E%B0%E5%9C%BA%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `480.4K 🔥` `NEW`
1. [进博物馆才知道针孔摄像头这么小](https://s.weibo.com/weibo?q=%23%E8%BF%9B%E5%8D%9A%E7%89%A9%E9%A6%86%E6%89%8D%E7%9F%A5%E9%81%93%E9%92%88%E5%AD%94%E6%91%84%E5%83%8F%E5%A4%B4%E8%BF%99%E4%B9%88%E5%B0%8F%23) `471.0K 🔥` `NEW`
1. [爱奇艺广告尺度](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E5%B9%BF%E5%91%8A%E5%B0%BA%E5%BA%A6%23) `468.3K 🔥` `NEW`
1. [宋慧乔长发现身 (Song Hye Kyo has long hair and is pregnant)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E9%95%BF%E5%8F%91%E7%8E%B0%E8%BA%AB%23) `465.5K 🔥` `NEW`
1. [金莎孙丞潇备孕](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E5%A4%87%E5%AD%95%23) `429.6K 🔥` `NEW`
1. [教育局回应保安在小学附近掌掴女子](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E4%BF%9D%E5%AE%89%E5%9C%A8%E5%B0%8F%E5%AD%A6%E9%99%84%E8%BF%91%E6%8E%8C%E6%8E%B4%E5%A5%B3%E5%AD%90%23) `290.3K 🔥` `NEW`
1. [曝夜巴黎逼迫主播跟鳄鱼同一个鱼缸](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A4%9C%E5%B7%B4%E9%BB%8E%E9%80%BC%E8%BF%AB%E4%B8%BB%E6%92%AD%E8%B7%9F%E9%B3%84%E9%B1%BC%E5%90%8C%E4%B8%80%E4%B8%AA%E9%B1%BC%E7%BC%B8%23) `290.3K 🔥` `NEW`
1. [Nudo色彩叠叠乐](https://s.weibo.com/weibo?q=%23Nudo%E8%89%B2%E5%BD%A9%E5%8F%A0%E5%8F%A0%E4%B9%90%23) `284.0K 🔥` `NEW`
1. [欧莱雅 穆祉丞](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E8%8E%B1%E9%9B%85%20%E7%A9%86%E7%A5%89%E4%B8%9E%23) `255.7K 🔥` `NEW`
1. [王楚钦孙颖莎亮相世乒赛GOAT纪录片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%AE%E7%9B%B8%E4%B8%96%E4%B9%92%E8%B5%9BGOAT%E7%BA%AA%E5%BD%95%E7%89%87%23) `252.7K 🔥` `NEW`
1. [让病人边工作边透析的制衣厂仍亏损](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E7%97%85%E4%BA%BA%E8%BE%B9%E5%B7%A5%E4%BD%9C%E8%BE%B9%E9%80%8F%E6%9E%90%E7%9A%84%E5%88%B6%E8%A1%A3%E5%8E%82%E4%BB%8D%E4%BA%8F%E6%8D%9F%23) `251.0K 🔥` `NEW`
1. [公司能抠门到什么程度](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%83%BD%E6%8A%A0%E9%97%A8%E5%88%B0%E4%BB%80%E4%B9%88%E7%A8%8B%E5%BA%A6%23) `210.5K 🔥` `NEW`
1. [娜扎 这真是人类能长出来的脸吗](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%20%E8%BF%99%E7%9C%9F%E6%98%AF%E4%BA%BA%E7%B1%BB%E8%83%BD%E9%95%BF%E5%87%BA%E6%9D%A5%E7%9A%84%E8%84%B8%E5%90%97%23) `206.1K 🔥` `NEW`
1. [欢瑞世纪跌停 (Huanrui century drops to limit)](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E7%91%9E%E4%B8%96%E7%BA%AA%E8%B7%8C%E5%81%9C%23) `202.9K 🔥` `NEW`
1. [陈奕恒王橹杰左奇函韩国到达](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%B7%A6%E5%A5%87%E5%87%BD%E9%9F%A9%E5%9B%BD%E5%88%B0%E8%BE%BE%23) `202.6K 🔥` `NEW`
1. [原来在职场有人撑腰是这种感觉](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%9C%A8%E8%81%8C%E5%9C%BA%E6%9C%89%E4%BA%BA%E6%92%91%E8%85%B0%E6%98%AF%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89%23) `191.7K 🔥` `NEW`
1. [A股万亿科技巨头诞生](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%87%E4%BA%BF%E7%A7%91%E6%8A%80%E5%B7%A8%E5%A4%B4%E8%AF%9E%E7%94%9F%23) `188.9K 🔥` `NEW`
1. [3省份人均可支配收入超2万元](https://s.weibo.com/weibo?q=%233%E7%9C%81%E4%BB%BD%E4%BA%BA%E5%9D%87%E5%8F%AF%E6%94%AF%E9%85%8D%E6%94%B6%E5%85%A5%E8%B6%852%E4%B8%87%E5%85%83%23) `184.4K 🔥` `NEW`
1. [男子24岁仍未发育](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9024%E5%B2%81%E4%BB%8D%E6%9C%AA%E5%8F%91%E8%82%B2%23) `182.8K 🔥` `NEW`
1. [Easyhoon加入T1](https://s.weibo.com/weibo?q=%23Easyhoon%E5%8A%A0%E5%85%A5T1%23) `181.1K 🔥` `NEW`
1. [男子痴呆与20年前高危性行为史有关](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%97%B4%E5%91%86%E4%B8%8E20%E5%B9%B4%E5%89%8D%E9%AB%98%E5%8D%B1%E6%80%A7%E8%A1%8C%E4%B8%BA%E5%8F%B2%E6%9C%89%E5%85%B3%23) `178.6K 🔥` `NEW`
1. [45岁的关智斌和47岁严宽同框](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%9A%84%E5%85%B3%E6%99%BA%E6%96%8C%E5%92%8C47%E5%B2%81%E4%B8%A5%E5%AE%BD%E5%90%8C%E6%A1%86%23) `156.8K 🔥` `NEW`
1. [怒怼空乘不会中文当事女子发声](https://s.weibo.com/weibo?q=%23%E6%80%92%E6%80%BC%E7%A9%BA%E4%B9%98%E4%B8%8D%E4%BC%9A%E4%B8%AD%E6%96%87%E5%BD%93%E4%BA%8B%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `145.1K 🔥` `NEW`
1. [太阳vs雷霆 (sun vs thunder)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E9%98%B3vs%E9%9B%B7%E9%9C%86%23) `144.4K 🔥` `NEW`
1. [QQ音乐巅峰榜十大艺人](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%E5%B7%85%E5%B3%B0%E6%A6%9C%E5%8D%81%E5%A4%A7%E8%89%BA%E4%BA%BA%23) `1.2M 🔥` `+157%`
1. [学历全家最高 工资全家最低](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E5%8E%86%E5%85%A8%E5%AE%B6%E6%9C%80%E9%AB%98%20%E5%B7%A5%E8%B5%84%E5%85%A8%E5%AE%B6%E6%9C%80%E4%BD%8E%23) `478.5K 🔥` `+131%`
1. [女生游泳月卡只用23天](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%B8%B8%E6%B3%B3%E6%9C%88%E5%8D%A1%E5%8F%AA%E7%94%A823%E5%A4%A9%23) `474.0K 🔥` `+103%`
1. [人民海军成立77周年](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%B5%B7%E5%86%9B%E6%88%90%E7%AB%8B77%E5%91%A8%E5%B9%B4%23) `687.4K 🔥`
1. [陆地cp](https://s.weibo.com/weibo?q=%23%E9%99%86%E5%9C%B0cp%23) `281.3K 🔥`
1. [宋祖儿 刘宇宁](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%20%E5%88%98%E5%AE%87%E5%AE%81%23) `277.1K 🔥`
1. [稀土公司副总向境外泄露7项国家秘密](https://s.weibo.com/weibo?q=%23%E7%A8%80%E5%9C%9F%E5%85%AC%E5%8F%B8%E5%89%AF%E6%80%BB%E5%90%91%E5%A2%83%E5%A4%96%E6%B3%84%E9%9C%B27%E9%A1%B9%E5%9B%BD%E5%AE%B6%E7%A7%98%E5%AF%86%23) `249.0K 🔥`
1. [曝刘宇宁宋祖儿同款地板家具](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E5%AE%87%E5%AE%81%E5%AE%8B%E7%A5%96%E5%84%BF%E5%90%8C%E6%AC%BE%E5%9C%B0%E6%9D%BF%E5%AE%B6%E5%85%B7%23) `247.3K 🔥`
1. [马頔一个人把妻旅老婆团夸成翘嘴](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%8A%8A%E5%A6%BB%E6%97%85%E8%80%81%E5%A9%86%E5%9B%A2%E5%A4%B8%E6%88%90%E7%BF%98%E5%98%B4%23) `244.6K 🔥`
1. [镜片装反孩子暴涨到900度妈妈崩溃 (The child’s lens was installed backwards and the temperature soared to 900 degrees, and the mother collapsed)](https://s.weibo.com/weibo?q=%23%E9%95%9C%E7%89%87%E8%A3%85%E5%8F%8D%E5%AD%A9%E5%AD%90%E6%9A%B4%E6%B6%A8%E5%88%B0900%E5%BA%A6%E5%A6%88%E5%A6%88%E5%B4%A9%E6%BA%83%23) `853.0K 🔥` `-31%`
1. [库克称苹果地图发布是首个重大错误 (Cook calls Apple Maps launch its first big mistake)](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E7%A7%B0%E8%8B%B9%E6%9E%9C%E5%9C%B0%E5%9B%BE%E5%8F%91%E5%B8%83%E6%98%AF%E9%A6%96%E4%B8%AA%E9%87%8D%E5%A4%A7%E9%94%99%E8%AF%AF%23) `541.8K 🔥` `-23%`
1. [面试把公司聊解散了](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E6%8A%8A%E5%85%AC%E5%8F%B8%E8%81%8A%E8%A7%A3%E6%95%A3%E4%BA%86%23) `485.3K 🔥` `-27%`
1. [女子怒怼空乘不会中文还飞国际航班](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%92%E6%80%BC%E7%A9%BA%E4%B9%98%E4%B8%8D%E4%BC%9A%E4%B8%AD%E6%96%87%E8%BF%98%E9%A3%9E%E5%9B%BD%E9%99%85%E8%88%AA%E7%8F%AD%23) `275.5K 🔥` `-69%`
1. [李昀锐公主抱最痛的一次](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%85%AC%E4%B8%BB%E6%8A%B1%E6%9C%80%E7%97%9B%E7%9A%84%E4%B8%80%E6%AC%A1%23) `260.2K 🔥` `-54%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `256.5K 🔥` `-45%`
1. [张凌赫帮粉丝修图](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B8%AE%E7%B2%89%E4%B8%9D%E4%BF%AE%E5%9B%BE%23) `244.9K 🔥` `-48%`
1. [尹正 嫌尬了滚出去](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%AD%A3%20%E5%AB%8C%E5%B0%AC%E4%BA%86%E6%BB%9A%E5%87%BA%E5%8E%BB%23) `209.3K 🔥` `-54%`
1. [谢娜新节目娜就聊姐姐](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%96%B0%E8%8A%82%E7%9B%AE%E5%A8%9C%E5%B0%B1%E8%81%8A%E5%A7%90%E5%A7%90%23) `174.2K 🔥` `-42%`
1. [伊能静张豆豆发生争执被孙杨识破](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E5%BC%A0%E8%B1%86%E8%B1%86%E5%8F%91%E7%94%9F%E4%BA%89%E6%89%A7%E8%A2%AB%E5%AD%99%E6%9D%A8%E8%AF%86%E7%A0%B4%23) `143.6K 🔥` `-48%`
1. [李小冉王濛唐艺昕hi6合照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%8E%8B%E6%BF%9B%E5%94%90%E8%89%BA%E6%98%95hi6%E5%90%88%E7%85%A7%23) `143.5K 🔥` `-43%`
1. [奥利奥 时代少年团 (Oreo Times Youth League)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%A5%A5%20%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%23) `142.6K 🔥` `-43%`

Updated at 2026-04-23 13:40:47

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
