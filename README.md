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

1. [小城良方云包场拿下爱奇艺史冠](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E4%BA%91%E5%8C%85%E5%9C%BA%E6%8B%BF%E4%B8%8B%E7%88%B1%E5%A5%87%E8%89%BA%E5%8F%B2%E5%86%A0%23) `485.1K 🔥` `NEW`
1. [今天买家电家居 京东就是更便宜](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E4%B9%B0%E5%AE%B6%E7%94%B5%E5%AE%B6%E5%B1%85%20%E4%BA%AC%E4%B8%9C%E5%B0%B1%E6%98%AF%E6%9B%B4%E4%BE%BF%E5%AE%9C%23) `365.9K 🔥` `NEW`
1. [10万包洗脸巾邀你试](https://s.weibo.com/weibo?q=%2310%E4%B8%87%E5%8C%85%E6%B4%97%E8%84%B8%E5%B7%BE%E9%82%80%E4%BD%A0%E8%AF%95%23) `343.4K 🔥` `NEW`
1. [谷歌市值蒸发超5000亿美元](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8C%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%91%E8%B6%855000%E4%BA%BF%E7%BE%8E%E5%85%83%23) `336.8K 🔥` `NEW`
1. [梁靖崑隔空喊话西蒙高茨](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E9%9A%94%E7%A9%BA%E5%96%8A%E8%AF%9D%E8%A5%BF%E8%92%99%E9%AB%98%E8%8C%A8%23) `320.4K 🔥` `NEW`
1. [当父母就不要怕被孩子恨](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%88%B6%E6%AF%8D%E5%B0%B1%E4%B8%8D%E8%A6%81%E6%80%95%E8%A2%AB%E5%AD%A9%E5%AD%90%E6%81%A8%23) `135.7K 🔥` `NEW`
1. [成都游客夜拍以为是云结果是大山](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E6%B8%B8%E5%AE%A2%E5%A4%9C%E6%8B%8D%E4%BB%A5%E4%B8%BA%E6%98%AF%E4%BA%91%E7%BB%93%E6%9E%9C%E6%98%AF%E5%A4%A7%E5%B1%B1%23) `80.9K 🔥` `NEW`
1. [太子妃以为知道旧事就能拿捏魏娆](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%AD%90%E5%A6%83%E4%BB%A5%E4%B8%BA%E7%9F%A5%E9%81%93%E6%97%A7%E4%BA%8B%E5%B0%B1%E8%83%BD%E6%8B%BF%E6%8D%8F%E9%AD%8F%E5%A8%86%23) `60.9K 🔥` `NEW`
1. [你的鸡蛋摄入量是多少](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E9%B8%A1%E8%9B%8B%E6%91%84%E5%85%A5%E9%87%8F%E6%98%AF%E5%A4%9A%E5%B0%91%23) `57.9K 🔥` `NEW`
1. [A股兆易创新业绩暴增股价反跌](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%85%86%E6%98%93%E5%88%9B%E6%96%B0%E4%B8%9A%E7%BB%A9%E6%9A%B4%E5%A2%9E%E8%82%A1%E4%BB%B7%E5%8F%8D%E8%B7%8C%23) `50.8K 🔥` `NEW`
1. [31岁老师脑出血昏迷家属感谢捐款](https://s.weibo.com/weibo?q=%2331%E5%B2%81%E8%80%81%E5%B8%88%E8%84%91%E5%87%BA%E8%A1%80%E6%98%8F%E8%BF%B7%E5%AE%B6%E5%B1%9E%E6%84%9F%E8%B0%A2%E6%8D%90%E6%AC%BE%23) `50.8K 🔥` `NEW`
1. [医生称用豆包不代表医术不行](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%A7%B0%E7%94%A8%E8%B1%86%E5%8C%85%E4%B8%8D%E4%BB%A3%E8%A1%A8%E5%8C%BB%E6%9C%AF%E4%B8%8D%E8%A1%8C%23) `50.7K 🔥` `NEW`
1. [沈阳康平县成立专项调查组](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E5%BA%B7%E5%B9%B3%E5%8E%BF%E6%88%90%E7%AB%8B%E4%B8%93%E9%A1%B9%E8%B0%83%E6%9F%A5%E7%BB%84%23) `50.7K 🔥` `NEW`
1. [长久工作会消磨掉很多期待](https://s.weibo.com/weibo?q=%23%E9%95%BF%E4%B9%85%E5%B7%A5%E4%BD%9C%E4%BC%9A%E6%B6%88%E7%A3%A8%E6%8E%89%E5%BE%88%E5%A4%9A%E6%9C%9F%E5%BE%85%23) `50.7K 🔥` `NEW`
1. [女高管刚下飞机被整形机构接走手术](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%AB%98%E7%AE%A1%E5%88%9A%E4%B8%8B%E9%A3%9E%E6%9C%BA%E8%A2%AB%E6%95%B4%E5%BD%A2%E6%9C%BA%E6%9E%84%E6%8E%A5%E8%B5%B0%E6%89%8B%E6%9C%AF%23) `50.6K 🔥` `NEW`
1. [红果红了](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%BA%A2%E4%BA%86%23) `647.9K 🔥` `+67%`
1. [全面从严治党是全党的共同责任](https://s.weibo.com/weibo?q=%23%E5%85%A8%E9%9D%A2%E4%BB%8E%E4%B8%A5%E6%B2%BB%E5%85%9A%E6%98%AF%E5%85%A8%E5%85%9A%E7%9A%84%E5%85%B1%E5%90%8C%E8%B4%A3%E4%BB%BB%23) `365.9K 🔥` `+306%`
1. [小城良方云包场强势来袭](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E4%BA%91%E5%8C%85%E5%9C%BA%E5%BC%BA%E5%8A%BF%E6%9D%A5%E8%A2%AD%23) `365.2K 🔥` `+306%`
1. [王腾创业首款智能戒指](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E5%88%9B%E4%B8%9A%E9%A6%96%E6%AC%BE%E6%99%BA%E8%83%BD%E6%88%92%E6%8C%87%23) `357.7K 🔥` `+297%`
1. [日剧VIVANT是赤裸裸敌视中国](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%89%A7VIVANT%E6%98%AF%E8%B5%A4%E8%A3%B8%E8%A3%B8%E6%95%8C%E8%A7%86%E4%B8%AD%E5%9B%BD%23) `344.0K 🔥` `+440%`
1. [王腾感谢小米和雷总](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E6%84%9F%E8%B0%A2%E5%B0%8F%E7%B1%B3%E5%92%8C%E9%9B%B7%E6%80%BB%23) `329.2K 🔥` `+267%`
1. [数说中国海洋经济动力澎湃](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%B4%E4%B8%AD%E5%9B%BD%E6%B5%B7%E6%B4%8B%E7%BB%8F%E6%B5%8E%E5%8A%A8%E5%8A%9B%E6%BE%8E%E6%B9%83%23) `321.8K 🔥` `+259%`
1. [人民日报锐评年轻人养不起老人了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E9%94%90%E8%AF%84%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%85%BB%E4%B8%8D%E8%B5%B7%E8%80%81%E4%BA%BA%E4%BA%86%23) `311.8K 🔥` `+249%`
1. [把大体老师遗骨当玩物配当医生吗](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E5%A4%A7%E4%BD%93%E8%80%81%E5%B8%88%E9%81%97%E9%AA%A8%E5%BD%93%E7%8E%A9%E7%89%A9%E9%85%8D%E5%BD%93%E5%8C%BB%E7%94%9F%E5%90%97%23) `298.9K 🔥` `+234%`
1. [给阿嬷的情书为何口碑反转](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E4%B8%BA%E4%BD%95%E5%8F%A3%E7%A2%91%E5%8F%8D%E8%BD%AC%23) `258.8K 🔥` `+190%`
1. [感觉厉娜能活99岁](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E5%8E%89%E5%A8%9C%E8%83%BD%E6%B4%BB99%E5%B2%81%23) `119.2K 🔥` `+34%`
1. [78名学生共用针头调查要给社会交代](https://s.weibo.com/weibo?q=%2378%E5%90%8D%E5%AD%A6%E7%94%9F%E5%85%B1%E7%94%A8%E9%92%88%E5%A4%B4%E8%B0%83%E6%9F%A5%E8%A6%81%E7%BB%99%E7%A4%BE%E4%BC%9A%E4%BA%A4%E4%BB%A3%23) `107.9K 🔥` `+48%`
1. [李宇春翻查何洁婚礼短信到凌晨两点](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E7%BF%BB%E6%9F%A5%E4%BD%95%E6%B4%81%E5%A9%9A%E7%A4%BC%E7%9F%AD%E4%BF%A1%E5%88%B0%E5%87%8C%E6%99%A8%E4%B8%A4%E7%82%B9%23) `96.8K 🔥` `+39%`
1. [医生回应男子吃凉土豆蘸辣椒瘦22斤](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E5%90%83%E5%87%89%E5%9C%9F%E8%B1%86%E8%98%B8%E8%BE%A3%E6%A4%92%E7%98%A622%E6%96%A4%23) `94.0K 🔥` `+72%`
1. [女生看到天地辽阔觉得不必在一起](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E7%9C%8B%E5%88%B0%E5%A4%A9%E5%9C%B0%E8%BE%BD%E9%98%94%E8%A7%89%E5%BE%97%E4%B8%8D%E5%BF%85%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `84.9K 🔥` `+105%`
1. [红果短剧凭什么这么红](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%87%AD%E4%BB%80%E4%B9%88%E8%BF%99%E4%B9%88%E7%BA%A2%23) `69.1K 🔥` `+27%`
1. [梨泰院幸存者称现场几乎没警察](https://s.weibo.com/weibo?q=%23%E6%A2%A8%E6%B3%B0%E9%99%A2%E5%B9%B8%E5%AD%98%E8%80%85%E7%A7%B0%E7%8E%B0%E5%9C%BA%E5%87%A0%E4%B9%8E%E6%B2%A1%E8%AD%A6%E5%AF%9F%23) `61.3K 🔥` `+80%`
1. [姆巴佩曾代言饮品单日销量为0](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%9B%BE%E4%BB%A3%E8%A8%80%E9%A5%AE%E5%93%81%E5%8D%95%E6%97%A5%E9%94%80%E9%87%8F%E4%B8%BA0%23) `106.9K 🔥`
1. [小鹏MONAL05价格炸裂](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL05%E4%BB%B7%E6%A0%BC%E7%82%B8%E8%A3%82%23) `103.9K 🔥`
1. [女裤裆部太长做成吊裆裤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%A4%E8%A3%86%E9%83%A8%E5%A4%AA%E9%95%BF%E5%81%9A%E6%88%90%E5%90%8A%E8%A3%86%E8%A3%A4%23) `73.2K 🔥`
1. [多亏何洁才有初代顶流李宇春](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BA%8F%E4%BD%95%E6%B4%81%E6%89%8D%E6%9C%89%E5%88%9D%E4%BB%A3%E9%A1%B6%E6%B5%81%E6%9D%8E%E5%AE%87%E6%98%A5%23) `71.9K 🔥`
1. [原来有这么多不用和人打交道的工作](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E4%B8%8D%E7%94%A8%E5%92%8C%E4%BA%BA%E6%89%93%E4%BA%A4%E9%81%93%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `71.4K 🔥`
1. [王安宇直播说了3次田曦薇很好看](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E7%9B%B4%E6%92%AD%E8%AF%B4%E4%BA%863%E6%AC%A1%E7%94%B0%E6%9B%A6%E8%96%87%E5%BE%88%E5%A5%BD%E7%9C%8B%23) `66.9K 🔥`
1. [中级会计](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BA%A7%E4%BC%9A%E8%AE%A1%23) `61.2K 🔥`
1. [难怪说钟楚曦两年能画出一套房](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E8%AF%B4%E9%92%9F%E6%A5%9A%E6%9B%A6%E4%B8%A4%E5%B9%B4%E8%83%BD%E7%94%BB%E5%87%BA%E4%B8%80%E5%A5%97%E6%88%BF%23) `55.8K 🔥`
1. [三轮车被吹水中溺亡女生是尖子生](https://s.weibo.com/weibo?q=%23%E4%B8%89%E8%BD%AE%E8%BD%A6%E8%A2%AB%E5%90%B9%E6%B0%B4%E4%B8%AD%E6%BA%BA%E4%BA%A1%E5%A5%B3%E7%94%9F%E6%98%AF%E5%B0%96%E5%AD%90%E7%94%9F%23) `52.1K 🔥`
1. [马天宇给黄凯写序没收钱](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E7%BB%99%E9%BB%84%E5%87%AF%E5%86%99%E5%BA%8F%E6%B2%A1%E6%94%B6%E9%92%B1%23) `50.8K 🔥`
1. [将门毒后书粉好硬气](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%E4%B9%A6%E7%B2%89%E5%A5%BD%E7%A1%AC%E6%B0%94%23) `50.8K 🔥`
1. [曝某女艺人不敢与梅尼耶妻子合照](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E5%A5%B3%E8%89%BA%E4%BA%BA%E4%B8%8D%E6%95%A2%E4%B8%8E%E6%A2%85%E5%B0%BC%E8%80%B6%E5%A6%BB%E5%AD%90%E5%90%88%E7%85%A7%23) `50.8K 🔥`
1. [星巴克遭不消费人群抵制](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%E9%81%AD%E4%B8%8D%E6%B6%88%E8%B4%B9%E4%BA%BA%E7%BE%A4%E6%8A%B5%E5%88%B6%23) `61.5K 🔥` `-29%`
1. [疑似王子璇文吉儿知情人爆料](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%8E%8B%E5%AD%90%E7%92%87%E6%96%87%E5%90%89%E5%84%BF%E7%9F%A5%E6%83%85%E4%BA%BA%E7%88%86%E6%96%99%23) `50.9K 🔥` `-27%`
1. [李玉刚承认自己创业一败涂地](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%89%E5%88%9A%E6%89%BF%E8%AE%A4%E8%87%AA%E5%B7%B1%E5%88%9B%E4%B8%9A%E4%B8%80%E8%B4%A5%E6%B6%82%E5%9C%B0%23) `50.9K 🔥` `-26%`
1. [女高管隆胸死亡前曾抱怨全是坑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%AB%98%E7%AE%A1%E9%9A%86%E8%83%B8%E6%AD%BB%E4%BA%A1%E5%89%8D%E6%9B%BE%E6%8A%B1%E6%80%A8%E5%85%A8%E6%98%AF%E5%9D%91%23) `50.8K 🔥` `-28%`
1. [文吉儿上证据后王子璇失忆表现](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E4%B8%8A%E8%AF%81%E6%8D%AE%E5%90%8E%E7%8E%8B%E5%AD%90%E7%92%87%E5%A4%B1%E5%BF%86%E8%A1%A8%E7%8E%B0%23) `50.7K 🔥` `-43%`
1. [C罗发文感谢球迷](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%8F%91%E6%96%87%E6%84%9F%E8%B0%A2%E7%90%83%E8%BF%B7%23) `50.7K 🔥` `-28%`

Updated at 2026-10-30 07:00:25

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
