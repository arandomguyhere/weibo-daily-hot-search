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

1. [踹保安后被掌掴女子耳膜穿孔 (Woman's eardrum perforated after being slapped after kicking security guard)](https://s.weibo.com/weibo?q=%23%E8%B8%B9%E4%BF%9D%E5%AE%89%E5%90%8E%E8%A2%AB%E6%8E%8C%E6%8E%B4%E5%A5%B3%E5%AD%90%E8%80%B3%E8%86%9C%E7%A9%BF%E5%AD%94%23) `1.9M 🔥` `NEW`
1. [志愿军烈士遗骸安葬仪式](https://s.weibo.com/weibo?q=%23%E5%BF%97%E6%84%BF%E5%86%9B%E7%83%88%E5%A3%AB%E9%81%97%E9%AA%B8%E5%AE%89%E8%91%AC%E4%BB%AA%E5%BC%8F%23) `913.8K 🔥` `NEW`
1. [岚图泰山X8预售53分钟订单破1万5](https://s.weibo.com/weibo?q=%23%E5%B2%9A%E5%9B%BE%E6%B3%B0%E5%B1%B1X8%E9%A2%84%E5%94%AE53%E5%88%86%E9%92%9F%E8%AE%A2%E5%8D%95%E7%A0%B41%E4%B8%875%23) `900.5K 🔥` `NEW`
1. [医生提醒40至60岁为神经梅毒高发人群](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%9240%E8%87%B360%E5%B2%81%E4%B8%BA%E7%A5%9E%E7%BB%8F%E6%A2%85%E6%AF%92%E9%AB%98%E5%8F%91%E4%BA%BA%E7%BE%A4%23) `896.2K 🔥` `NEW`
1. [谢娜李小冉回应不和传闻](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%9D%8E%E5%B0%8F%E5%86%89%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%92%8C%E4%BC%A0%E9%97%BB%23) `871.5K 🔥` `NEW`
1. [曝广州一知名酒楼吃出嚼过的槟榔](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B9%BF%E5%B7%9E%E4%B8%80%E7%9F%A5%E5%90%8D%E9%85%92%E6%A5%BC%E5%90%83%E5%87%BA%E5%9A%BC%E8%BF%87%E7%9A%84%E6%A7%9F%E6%A6%94%23) `755.5K 🔥` `NEW`
1. [保安被踹后掌掴女子附近商户发声](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%AE%89%E8%A2%AB%E8%B8%B9%E5%90%8E%E6%8E%8C%E6%8E%B4%E5%A5%B3%E5%AD%90%E9%99%84%E8%BF%91%E5%95%86%E6%88%B7%E5%8F%91%E5%A3%B0%23) `736.5K 🔥` `NEW`
1. [A股 4100点](https://s.weibo.com/weibo?q=%23A%E8%82%A1%204100%E7%82%B9%23) `363.8K 🔥` `NEW`
1. [员工建600多个工作群离职拒交接](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%BB%BA600%E5%A4%9A%E4%B8%AA%E5%B7%A5%E4%BD%9C%E7%BE%A4%E7%A6%BB%E8%81%8C%E6%8B%92%E4%BA%A4%E6%8E%A5%23) `363.7K 🔥` `NEW`
1. [崔丽丽与丈夫携手走进法庭](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E4%B8%8E%E4%B8%88%E5%A4%AB%E6%90%BA%E6%89%8B%E8%B5%B0%E8%BF%9B%E6%B3%95%E5%BA%AD%23) `362.6K 🔥` `NEW`
1. [11岁娃偷钱买手机挨骂老板又卖他一个 (11-year-old boy stole money to buy a mobile phone and was scolded by his boss for selling him another one)](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E5%A8%83%E5%81%B7%E9%92%B1%E4%B9%B0%E6%89%8B%E6%9C%BA%E6%8C%A8%E9%AA%82%E8%80%81%E6%9D%BF%E5%8F%88%E5%8D%96%E4%BB%96%E4%B8%80%E4%B8%AA%23) `360.7K 🔥` `NEW`
1. [华策影视大涨](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E7%AD%96%E5%BD%B1%E8%A7%86%E5%A4%A7%E6%B6%A8%23) `319.8K 🔥` `NEW`
1. [伊能静说孙杨不靠谱](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%AF%B4%E5%AD%99%E6%9D%A8%E4%B8%8D%E9%9D%A0%E8%B0%B1%23) `262.5K 🔥` `NEW`
1. [百花杀hi6剧宣](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80hi6%E5%89%A7%E5%AE%A3%23) `260.1K 🔥` `NEW`
1. [全新奔驰纯电GLC](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%A5%94%E9%A9%B0%E7%BA%AF%E7%94%B5GLC%23) `254.2K 🔥` `NEW`
1. [尚界Z7疑似故障驾驶员在车内用手机](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%E7%96%91%E4%BC%BC%E6%95%85%E9%9A%9C%E9%A9%BE%E9%A9%B6%E5%91%98%E5%9C%A8%E8%BD%A6%E5%86%85%E7%94%A8%E6%89%8B%E6%9C%BA%23) `248.8K 🔥` `NEW`
1. [3大避孕套品牌回应涨价](https://s.weibo.com/weibo?q=%233%E5%A4%A7%E9%81%BF%E5%AD%95%E5%A5%97%E5%93%81%E7%89%8C%E5%9B%9E%E5%BA%94%E6%B6%A8%E4%BB%B7%23) `238.4K 🔥` `NEW`
1. [宋祖儿被指瘦脱相了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E8%A2%AB%E6%8C%87%E7%98%A6%E8%84%B1%E7%9B%B8%E4%BA%86%23) `224.4K 🔥` `NEW`
1. [管乐被李雪女儿的学舞速度震惊到了](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E4%B9%90%E8%A2%AB%E6%9D%8E%E9%9B%AA%E5%A5%B3%E5%84%BF%E7%9A%84%E5%AD%A6%E8%88%9E%E9%80%9F%E5%BA%A6%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `216.7K 🔥` `NEW`
1. [朴志训采访提及赖冠霖](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BF%97%E8%AE%AD%E9%87%87%E8%AE%BF%E6%8F%90%E5%8F%8A%E8%B5%96%E5%86%A0%E9%9C%96%23) `209.4K 🔥` `NEW`
1. [北影节闭幕式第一波官宣 (The first wave of official announcements for the closing ceremony of the Beijing Film Festival)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%BD%B1%E8%8A%82%E9%97%AD%E5%B9%95%E5%BC%8F%E7%AC%AC%E4%B8%80%E6%B3%A2%E5%AE%98%E5%AE%A3%23) `160.6K 🔥` `NEW`
1. [布克救球砸到对手被吹技犯](https://s.weibo.com/weibo?q=%23%E5%B8%83%E5%85%8B%E6%95%91%E7%90%83%E7%A0%B8%E5%88%B0%E5%AF%B9%E6%89%8B%E8%A2%AB%E5%90%B9%E6%8A%80%E7%8A%AF%23) `159.3K 🔥` `NEW`
1. [崔丽丽回应被质疑太亢奋不像受害者](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%B4%A8%E7%96%91%E5%A4%AA%E4%BA%A2%E5%A5%8B%E4%B8%8D%E5%83%8F%E5%8F%97%E5%AE%B3%E8%80%85%23) `148.5K 🔥` `NEW`
1. [李小冉王濛乘风的沈腾马丽](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%8E%8B%E6%BF%9B%E4%B9%98%E9%A3%8E%E7%9A%84%E6%B2%88%E8%85%BE%E9%A9%AC%E4%B8%BD%23) `142.2K 🔥` `NEW`
1. [花251块买的女装](https://s.weibo.com/weibo?q=%23%E8%8A%B1251%E5%9D%97%E4%B9%B0%E7%9A%84%E5%A5%B3%E8%A3%85%23) `131.2K 🔥` `NEW`
1. [奚梦瑶方圆同框](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E6%96%B9%E5%9C%86%E5%90%8C%E6%A1%86%23) `130.8K 🔥` `NEW`
1. [4家A股公司集体跌停](https://s.weibo.com/weibo?q=%234%E5%AE%B6A%E8%82%A1%E5%85%AC%E5%8F%B8%E9%9B%86%E4%BD%93%E8%B7%8C%E5%81%9C%23) `130.3K 🔥` `NEW`
1. [教育局回应保安在小学附近掌掴女子](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E4%BF%9D%E5%AE%89%E5%9C%A8%E5%B0%8F%E5%AD%A6%E9%99%84%E8%BF%91%E6%8E%8C%E6%8E%B4%E5%A5%B3%E5%AD%90%23) `961.7K 🔥` `+231%`
1. [库克称苹果地图发布是首个重大错误 (Cook calls Apple Maps launch its first big mistake)](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E7%A7%B0%E8%8B%B9%E6%9E%9C%E5%9C%B0%E5%9B%BE%E5%8F%91%E5%B8%83%E6%98%AF%E9%A6%96%E4%B8%AA%E9%87%8D%E5%A4%A7%E9%94%99%E8%AF%AF%23) `722.2K 🔥` `+33%`
1. [女生游泳月卡只用23天](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%B8%B8%E6%B3%B3%E6%9C%88%E5%8D%A1%E5%8F%AA%E7%94%A823%E5%A4%A9%23) `683.8K 🔥` `+44%`
1. [金莎孙丞潇备孕](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E5%A4%87%E5%AD%95%23) `629.8K 🔥` `+47%`
1. [学历全家最高 工资全家最低 (The highest education level in the family, the lowest salary in the family)](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E5%8E%86%E5%85%A8%E5%AE%B6%E6%9C%80%E9%AB%98%20%E5%B7%A5%E8%B5%84%E5%85%A8%E5%AE%B6%E6%9C%80%E4%BD%8E%23) `582.3K 🔥` `+22%`
1. [陆地cp](https://s.weibo.com/weibo?q=%23%E9%99%86%E5%9C%B0cp%23) `361.4K 🔥` `+29%`
1. [宋祖儿 刘宇宁](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%20%E5%88%98%E5%AE%87%E5%AE%81%23) `359.4K 🔥` `+30%`
1. [男子痴呆与20年前高危性行为史有关](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%97%B4%E5%91%86%E4%B8%8E20%E5%B9%B4%E5%89%8D%E9%AB%98%E5%8D%B1%E6%80%A7%E8%A1%8C%E4%B8%BA%E5%8F%B2%E6%9C%89%E5%85%B3%23) `215.6K 🔥` `+21%`
1. [马頔李纯结婚证是手写的](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E6%9D%8E%E7%BA%AF%E7%BB%93%E5%A9%9A%E8%AF%81%E6%98%AF%E6%89%8B%E5%86%99%E7%9A%84%23) `763.2K 🔥`
1. [微小说大赛发百万奖金](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%B0%8F%E8%AF%B4%E5%A4%A7%E8%B5%9B%E5%8F%91%E7%99%BE%E4%B8%87%E5%A5%96%E9%87%91%23) `762.5K 🔥`
1. [镜片装反孩子暴涨到900度妈妈崩溃 (The child’s lens was installed backwards and the temperature soared to 900 degrees, and the mother collapsed)](https://s.weibo.com/weibo?q=%23%E9%95%9C%E7%89%87%E8%A3%85%E5%8F%8D%E5%AD%A9%E5%AD%90%E6%9A%B4%E6%B6%A8%E5%88%B0900%E5%BA%A6%E5%A6%88%E5%A6%88%E5%B4%A9%E6%BA%83%23) `739.2K 🔥`
1. [男子整日疑妻出轨确诊神经梅毒晚期](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%95%B4%E6%97%A5%E7%96%91%E5%A6%BB%E5%87%BA%E8%BD%A8%E7%A1%AE%E8%AF%8A%E7%A5%9E%E7%BB%8F%E6%A2%85%E6%AF%92%E6%99%9A%E6%9C%9F%23) `699.6K 🔥`
1. [用奶茶袋子当通勤包的人小心](https://s.weibo.com/weibo?q=%23%E7%94%A8%E5%A5%B6%E8%8C%B6%E8%A2%8B%E5%AD%90%E5%BD%93%E9%80%9A%E5%8B%A4%E5%8C%85%E7%9A%84%E4%BA%BA%E5%B0%8F%E5%BF%83%23) `689.3K 🔥`
1. [娜扎 这真是人类能长出来的脸吗](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%20%E8%BF%99%E7%9C%9F%E6%98%AF%E4%BA%BA%E7%B1%BB%E8%83%BD%E9%95%BF%E5%87%BA%E6%9D%A5%E7%9A%84%E8%84%B8%E5%90%97%23) `215.2K 🔥`
1. [男子24岁仍未发育](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9024%E5%B2%81%E4%BB%8D%E6%9C%AA%E5%8F%91%E8%82%B2%23) `188.4K 🔥`
1. [赛后嫖娼派对套餐价格达数千欧元 (Post-game prostitution party packages cost thousands of euros)](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%90%8E%E5%AB%96%E5%A8%BC%E6%B4%BE%E5%AF%B9%E5%A5%97%E9%A4%90%E4%BB%B7%E6%A0%BC%E8%BE%BE%E6%95%B0%E5%8D%83%E6%AC%A7%E5%85%83%23) `487.7K 🔥` `-21%`
1. [QQ音乐巅峰榜十大艺人](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%E5%B7%85%E5%B3%B0%E6%A6%9C%E5%8D%81%E5%A4%A7%E8%89%BA%E4%BA%BA%23) `396.6K 🔥` `-66%`
1. [宋慧乔长发现身 (Song Hye Kyo has long hair and is pregnant)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E9%95%BF%E5%8F%91%E7%8E%B0%E8%BA%AB%23) `358.8K 🔥` `-23%`
1. [面试把公司聊解散了](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E6%8A%8A%E5%85%AC%E5%8F%B8%E8%81%8A%E8%A7%A3%E6%95%A3%E4%BA%86%23) `234.0K 🔥` `-52%`
1. [曝夜巴黎逼迫主播跟鳄鱼同一个鱼缸](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A4%9C%E5%B7%B4%E9%BB%8E%E9%80%BC%E8%BF%AB%E4%B8%BB%E6%92%AD%E8%B7%9F%E9%B3%84%E9%B1%BC%E5%90%8C%E4%B8%80%E4%B8%AA%E9%B1%BC%E7%BC%B8%23) `180.9K 🔥` `-38%`
1. [陈奕恒王橹杰左奇函韩国到达](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%B7%A6%E5%A5%87%E5%87%BD%E9%9F%A9%E5%9B%BD%E5%88%B0%E8%BE%BE%23) `158.4K 🔥` `-22%`
1. [亚马尔赛季报销](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E8%B5%9B%E5%AD%A3%E6%8A%A5%E9%94%80%23) `152.5K 🔥` `-69%`
1. [原来在职场有人撑腰是这种感觉](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%9C%A8%E8%81%8C%E5%9C%BA%E6%9C%89%E4%BA%BA%E6%92%91%E8%85%B0%E6%98%AF%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89%23) `138.5K 🔥` `-28%`
1. [张凌赫帮粉丝修图](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B8%AE%E7%B2%89%E4%B8%9D%E4%BF%AE%E5%9B%BE%23) `136.5K 🔥` `-44%`
1. [王楚钦孙颖莎亮相世乒赛GOAT纪录片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%AE%E7%9B%B8%E4%B8%96%E4%B9%92%E8%B5%9BGOAT%E7%BA%AA%E5%BD%95%E7%89%87%23) `128.8K 🔥` `-49%`

Updated at 2026-04-23 15:15:52

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
