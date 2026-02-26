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

1. [文淇穿封面上封面 (Wen Qi wears cover on cover)](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%E7%A9%BF%E5%B0%81%E9%9D%A2%E4%B8%8A%E5%B0%81%E9%9D%A2%23) `615.0K 🔥` `NEW`
1. [金正恩称韩国是彻底的敌国](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%AD%A3%E6%81%A9%E7%A7%B0%E9%9F%A9%E5%9B%BD%E6%98%AF%E5%BD%BB%E5%BA%95%E7%9A%84%E6%95%8C%E5%9B%BD%23) `612.5K 🔥` `NEW`
1. [关晓彤这段戏我比男主更先爱上女主](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%BF%99%E6%AE%B5%E6%88%8F%E6%88%91%E6%AF%94%E7%94%B7%E4%B8%BB%E6%9B%B4%E5%85%88%E7%88%B1%E4%B8%8A%E5%A5%B3%E4%B8%BB%23) `605.4K 🔥` `NEW`
1. [男子节后返家价值几万乌龟全被煮](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%8A%82%E5%90%8E%E8%BF%94%E5%AE%B6%E4%BB%B7%E5%80%BC%E5%87%A0%E4%B8%87%E4%B9%8C%E9%BE%9F%E5%85%A8%E8%A2%AB%E7%85%AE%23) `554.7K 🔥` `NEW`
1. [王安宇推了半天凶手是自己](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%8E%A8%E4%BA%86%E5%8D%8A%E5%A4%A9%E5%87%B6%E6%89%8B%E6%98%AF%E8%87%AA%E5%B7%B1%23) `197.9K 🔥` `NEW`
1. [三星发布会现场直击](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%8F%91%E5%B8%83%E4%BC%9A%E7%8E%B0%E5%9C%BA%E7%9B%B4%E5%87%BB%23) `196.9K 🔥` `NEW`
1. [马年春节聊金子和AI的多了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%98%A5%E8%8A%82%E8%81%8A%E9%87%91%E5%AD%90%E5%92%8CAI%E7%9A%84%E5%A4%9A%E4%BA%86%23) `196.5K 🔥` `NEW`
1. [小猫守家26天在主人床上拉满便便](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%AE%88%E5%AE%B626%E5%A4%A9%E5%9C%A8%E4%B8%BB%E4%BA%BA%E5%BA%8A%E4%B8%8A%E6%8B%89%E6%BB%A1%E4%BE%BF%E4%BE%BF%23) `193.6K 🔥` `NEW`
1. [唐国强也去演短剧了](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%9B%BD%E5%BC%BA%E4%B9%9F%E5%8E%BB%E6%BC%94%E7%9F%AD%E5%89%A7%E4%BA%86%23) `165.6K 🔥` `NEW`
1. [高铭暄逝世](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%AD%E6%9A%84%E9%80%9D%E4%B8%96%23) `162.4K 🔥` `NEW`
1. [周涛也开始拍短剧了 (Zhou Tao also started filming short plays)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B6%9B%E4%B9%9F%E5%BC%80%E5%A7%8B%E6%8B%8D%E7%9F%AD%E5%89%A7%E4%BA%86%23) `144.2K 🔥` `NEW`
1. [垃圾桶内有小孩父亲称不要救他](https://s.weibo.com/weibo?q=%23%E5%9E%83%E5%9C%BE%E6%A1%B6%E5%86%85%E6%9C%89%E5%B0%8F%E5%AD%A9%E7%88%B6%E4%BA%B2%E7%A7%B0%E4%B8%8D%E8%A6%81%E6%95%91%E4%BB%96%23) `126.0K 🔥` `NEW`
1. [姐妹凭塑料袋舞创下吉尼斯世界纪录](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A6%B9%E5%87%AD%E5%A1%91%E6%96%99%E8%A2%8B%E8%88%9E%E5%88%9B%E4%B8%8B%E5%90%89%E5%B0%BC%E6%96%AF%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `111.5K 🔥` `NEW`
1. [沈凌在papi热烈欢迎越描越黑](https://s.weibo.com/weibo?q=%23%E6%B2%88%E5%87%8C%E5%9C%A8papi%E7%83%AD%E7%83%88%E6%AC%A2%E8%BF%8E%E8%B6%8A%E6%8F%8F%E8%B6%8A%E9%BB%91%23) `111.3K 🔥` `NEW`
1. [吃百家饭的小满长大了](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%99%BE%E5%AE%B6%E9%A5%AD%E7%9A%84%E5%B0%8F%E6%BB%A1%E9%95%BF%E5%A4%A7%E4%BA%86%23) `107.2K 🔥` `NEW`
1. [猫 待会去了姥姥家使劲哭](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E5%BE%85%E4%BC%9A%E5%8E%BB%E4%BA%86%E5%A7%A5%E5%A7%A5%E5%AE%B6%E4%BD%BF%E5%8A%B2%E5%93%AD%23) `101.0K 🔥` `NEW`
1. [份子钱是最烦人的钱包刺客](https://s.weibo.com/weibo?q=%23%E4%BB%BD%E5%AD%90%E9%92%B1%E6%98%AF%E6%9C%80%E7%83%A6%E4%BA%BA%E7%9A%84%E9%92%B1%E5%8C%85%E5%88%BA%E5%AE%A2%23) `96.5K 🔥` `NEW`
1. [120抵达后40分钟拒抬老人致死](https://s.weibo.com/weibo?q=%23120%E6%8A%B5%E8%BE%BE%E5%90%8E40%E5%88%86%E9%92%9F%E6%8B%92%E6%8A%AC%E8%80%81%E4%BA%BA%E8%87%B4%E6%AD%BB%23) `95.1K 🔥` `NEW`
1. [坐顺风车排泄后失联男子被封号](https://s.weibo.com/weibo?q=%23%E5%9D%90%E9%A1%BA%E9%A3%8E%E8%BD%A6%E6%8E%92%E6%B3%84%E5%90%8E%E5%A4%B1%E8%81%94%E7%94%B7%E5%AD%90%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `91.6K 🔥` `NEW`
1. [张本美和鹰眼挑战失败](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E9%B9%B0%E7%9C%BC%E6%8C%91%E6%88%98%E5%A4%B1%E8%B4%A5%23) `88.6K 🔥` `NEW`
1. [A股主线逻辑爆发 (A-share mainline logic breaks out)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%BB%E7%BA%BF%E9%80%BB%E8%BE%91%E7%88%86%E5%8F%91%23) `78.3K 🔥` `NEW`
1. [夜王票房破亿](https://s.weibo.com/weibo?q=%23%E5%A4%9C%E7%8E%8B%E7%A5%A8%E6%88%BF%E7%A0%B4%E4%BA%BF%23) `72.0K 🔥` `NEW`
1. [男子中669万刷朋友圈查彩票才发现](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%AD669%E4%B8%87%E5%88%B7%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%9F%A5%E5%BD%A9%E7%A5%A8%E6%89%8D%E5%8F%91%E7%8E%B0%23) `824.7K 🔥` `+912%`
1. [刘晓庆75岁再演少女](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%8675%E5%B2%81%E5%86%8D%E6%BC%94%E5%B0%91%E5%A5%B3%23) `587.9K 🔥` `+122%`
1. [上海迪士尼10岁生日](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%AA%E5%A3%AB%E5%B0%BC10%E5%B2%81%E7%94%9F%E6%97%A5%23) `584.8K 🔥` `+140%`
1. [花10万做折角腰整形醒来浑身血水](https://s.weibo.com/weibo?q=%23%E8%8A%B110%E4%B8%87%E5%81%9A%E6%8A%98%E8%A7%92%E8%85%B0%E6%95%B4%E5%BD%A2%E9%86%92%E6%9D%A5%E6%B5%91%E8%BA%AB%E8%A1%80%E6%B0%B4%23) `584.0K 🔥` `+100%`
1. [女子嘴角起泡未重视竟脑死亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%98%B4%E8%A7%92%E8%B5%B7%E6%B3%A1%E6%9C%AA%E9%87%8D%E8%A7%86%E7%AB%9F%E8%84%91%E6%AD%BB%E4%BA%A1%23) `566.4K 🔥` `+183%`
1. [董宇辉休了工作以来最长春节假](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E4%BC%91%E4%BA%86%E5%B7%A5%E4%BD%9C%E4%BB%A5%E6%9D%A5%E6%9C%80%E9%95%BF%E6%98%A5%E8%8A%82%E5%81%87%23) `547.7K 🔥` `+135%`
1. [向佑不满遗产分配直喊不公平](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%91%E4%B8%8D%E6%BB%A1%E9%81%97%E4%BA%A7%E5%88%86%E9%85%8D%E7%9B%B4%E5%96%8A%E4%B8%8D%E5%85%AC%E5%B9%B3%23) `537.2K 🔥` `+295%`
1. [男演员点赞和刘晓庆搭戏是工伤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%BC%94%E5%91%98%E7%82%B9%E8%B5%9E%E5%92%8C%E5%88%98%E6%99%93%E5%BA%86%E6%90%AD%E6%88%8F%E6%98%AF%E5%B7%A5%E4%BC%A4%23) `533.1K 🔥` `+293%`
1. [爱泼斯坦案曝光霍金与比基尼女子合影 (Epstein case exposes Hawking posing with bikini woman)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E6%9B%9D%E5%85%89%E9%9C%8D%E9%87%91%E4%B8%8E%E6%AF%94%E5%9F%BA%E5%B0%BC%E5%A5%B3%E5%AD%90%E5%90%88%E5%BD%B1%23) `283.9K 🔥` `+110%`
1. [鹿哈说没有鹿晗就没有自己的今天](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E5%93%88%E8%AF%B4%E6%B2%A1%E6%9C%89%E9%B9%BF%E6%99%97%E5%B0%B1%E6%B2%A1%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E4%BB%8A%E5%A4%A9%23) `277.2K 🔥` `+105%`
1. [带孩子有多累具像化了](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E5%AD%A9%E5%AD%90%E6%9C%89%E5%A4%9A%E7%B4%AF%E5%85%B7%E5%83%8F%E5%8C%96%E4%BA%86%23) `261.3K 🔥` `+94%`
1. [男子地铁猥亵女子称像年轻时的妻子](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%B0%E9%93%81%E7%8C%A5%E4%BA%B5%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%83%8F%E5%B9%B4%E8%BD%BB%E6%97%B6%E7%9A%84%E5%A6%BB%E5%AD%90%23) `238.0K 🔥` `+189%`
1. [周杰伦结婚田馥甄有了讽刺的情书](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%BB%93%E5%A9%9A%E7%94%B0%E9%A6%A5%E7%94%84%E6%9C%89%E4%BA%86%E8%AE%BD%E5%88%BA%E7%9A%84%E6%83%85%E4%B9%A6%23) `194.9K 🔥` `+49%`
1. [医生建议做美甲至少保留一个原甲](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E5%81%9A%E7%BE%8E%E7%94%B2%E8%87%B3%E5%B0%91%E4%BF%9D%E7%95%99%E4%B8%80%E4%B8%AA%E5%8E%9F%E7%94%B2%23) `191.6K 🔥` `+51%`
1. [神童与父母断绝联系](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E7%AB%A5%E4%B8%8E%E7%88%B6%E6%AF%8D%E6%96%AD%E7%BB%9D%E8%81%94%E7%B3%BB%23) `188.1K 🔥` `+41%`
1. [2026考研查分时间](https://s.weibo.com/weibo?q=%232026%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86%E6%97%B6%E9%97%B4%23) `128.4K 🔥` `+29%`
1. [微信能看图片使用次数了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%83%BD%E7%9C%8B%E5%9B%BE%E7%89%87%E4%BD%BF%E7%94%A8%E6%AC%A1%E6%95%B0%E4%BA%86%23) `1.1M 🔥`
1. [美国从陈志案获利150亿美元 (The United States gained US$15 billion from the Chen Zhi case)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BB%8E%E9%99%88%E5%BF%97%E6%A1%88%E8%8E%B7%E5%88%A9150%E4%BA%BF%E7%BE%8E%E5%85%83%23) `617.6K 🔥`
1. [考研成绩 (Postgraduate entrance examination results)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E6%88%90%E7%BB%A9%23) `194.6K 🔥`
1. [时代峰峻否认王橹杰私联](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%90%A6%E8%AE%A4%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%A7%81%E8%81%94%23) `132.8K 🔥`
1. [杨幂柳智敏Prada撞衫 (Yang Mi and Liu Zhimin in Prada shirt)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9F%B3%E6%99%BA%E6%95%8FPrada%E6%92%9E%E8%A1%AB%23) `112.4K 🔥`
1. [中国音乐家纽约路边换胎被撞身亡](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%9F%B3%E4%B9%90%E5%AE%B6%E7%BA%BD%E7%BA%A6%E8%B7%AF%E8%BE%B9%E6%8D%A2%E8%83%8E%E8%A2%AB%E6%92%9E%E8%BA%AB%E4%BA%A1%23) `103.0K 🔥`
1. [小说妹苦了一年又一年 (The novel girl suffered year after year)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%AF%B4%E5%A6%B9%E8%8B%A6%E4%BA%86%E4%B8%80%E5%B9%B4%E5%8F%88%E4%B8%80%E5%B9%B4%23) `87.5K 🔥`
1. [何老师晦气的东西到手就扔](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%80%81%E5%B8%88%E6%99%A6%E6%B0%94%E7%9A%84%E4%B8%9C%E8%A5%BF%E5%88%B0%E6%89%8B%E5%B0%B1%E6%89%94%23) `71.6K 🔥`
1. [俄乌冲突 (Russia-Ukraine conflict)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B9%8C%E5%86%B2%E7%AA%81%23) `199.3K 🔥` `-76%`
1. [台湾女孩疑在日本街头被恶意撞倒](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%A5%B3%E5%AD%A9%E7%96%91%E5%9C%A8%E6%97%A5%E6%9C%AC%E8%A1%97%E5%A4%B4%E8%A2%AB%E6%81%B6%E6%84%8F%E6%92%9E%E5%80%92%23) `89.9K 🔥` `-33%`
1. [迪丽热巴王楚然 处处为营只为得到你](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E5%A4%84%E5%A4%84%E4%B8%BA%E8%90%A5%E5%8F%AA%E4%B8%BA%E5%BE%97%E5%88%B0%E4%BD%A0%23) `89.8K 🔥` `-33%`
1. [刘浩存开工跳蒙古舞](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%BC%80%E5%B7%A5%E8%B7%B3%E8%92%99%E5%8F%A4%E8%88%9E%23) `86.1K 🔥` `-25%`
1. [企业招聘限男性限已婚已育](https://s.weibo.com/weibo?q=%23%E4%BC%81%E4%B8%9A%E6%8B%9B%E8%81%98%E9%99%90%E7%94%B7%E6%80%A7%E9%99%90%E5%B7%B2%E5%A9%9A%E5%B7%B2%E8%82%B2%23) `81.2K 🔥` `-40%`
1. [胖东来回应针织衫只赚1块1](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%9E%E5%BA%94%E9%92%88%E7%BB%87%E8%A1%AB%E5%8F%AA%E8%B5%9A1%E5%9D%971%23) `67.5K 🔥` `-31%`

Updated at 2026-02-26 15:17:47

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
