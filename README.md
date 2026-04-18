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

1. [一组数据看懂中国经济含金量 (A set of data to understand the gold content of China’s economy)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BB%84%E6%95%B0%E6%8D%AE%E7%9C%8B%E6%87%82%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%90%AB%E9%87%91%E9%87%8F%23) `747.6K 🔥` `NEW`
1. [王濛cue黎明](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9Bcue%E9%BB%8E%E6%98%8E%23) `743.0K 🔥` `NEW`
1. [文化漫游郑当时](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%8C%96%E6%BC%AB%E6%B8%B8%E9%83%91%E5%BD%93%E6%97%B6%23) `735.1K 🔥` `NEW`
1. [李小冉一公才知道自己唱歌难听](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E5%85%AC%E6%89%8D%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E5%94%B1%E6%AD%8C%E9%9A%BE%E5%90%AC%23) `677.3K 🔥` `NEW`
1. [太阳淘汰勇士](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E9%98%B3%E6%B7%98%E6%B1%B0%E5%8B%87%E5%A3%AB%23) `345.0K 🔥` `NEW`
1. [曝金智秀的哥哥家暴](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%87%91%E6%99%BA%E7%A7%80%E7%9A%84%E5%93%A5%E5%93%A5%E5%AE%B6%E6%9A%B4%23) `344.0K 🔥` `NEW`
1. [张雪机车仅以0.071秒差距落后榜首](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%BB%85%E4%BB%A50.071%E7%A7%92%E5%B7%AE%E8%B7%9D%E8%90%BD%E5%90%8E%E6%A6%9C%E9%A6%96%23) `342.3K 🔥` `NEW`
1. [曾沛慈 垫完你的垫你的](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E5%9E%AB%E5%AE%8C%E4%BD%A0%E7%9A%84%E5%9E%AB%E4%BD%A0%E7%9A%84%23) `340.9K 🔥` `NEW`
1. [特朗普称22日前无协议或重燃战火](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B022%E6%97%A5%E5%89%8D%E6%97%A0%E5%8D%8F%E8%AE%AE%E6%88%96%E9%87%8D%E7%87%83%E6%88%98%E7%81%AB%23) `340.6K 🔥` `NEW`
1. [女子靠试管阻断截瘫遗传生健康女婴](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9D%A0%E8%AF%95%E7%AE%A1%E9%98%BB%E6%96%AD%E6%88%AA%E7%98%AB%E9%81%97%E4%BC%A0%E7%94%9F%E5%81%A5%E5%BA%B7%E5%A5%B3%E5%A9%B4%23) `339.9K 🔥` `NEW`
1. [17岁少年离世前还在看暗黑动漫 (17-year-old boy was still watching dark anime before his death)](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%B0%91%E5%B9%B4%E7%A6%BB%E4%B8%96%E5%89%8D%E8%BF%98%E5%9C%A8%E7%9C%8B%E6%9A%97%E9%BB%91%E5%8A%A8%E6%BC%AB%23) `337.6K 🔥` `NEW`
1. [于适演唱会被瑷尔博士痛上头了](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E7%91%B7%E5%B0%94%E5%8D%9A%E5%A3%AB%E7%97%9B%E4%B8%8A%E5%A4%B4%E4%BA%86%23) `337.0K 🔥` `NEW`
1. [马頔说幸亏我结婚了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E8%AF%B4%E5%B9%B8%E4%BA%8F%E6%88%91%E7%BB%93%E5%A9%9A%E4%BA%86%23) `334.2K 🔥` `NEW`
1. [尹正自曝把摩托车全卖了](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%AD%A3%E8%87%AA%E6%9B%9D%E6%8A%8A%E6%91%A9%E6%89%98%E8%BD%A6%E5%85%A8%E5%8D%96%E4%BA%86%23) `333.4K 🔥` `NEW`
1. [深圳被政府挽留的面包店开始限购了](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E8%A2%AB%E6%94%BF%E5%BA%9C%E6%8C%BD%E7%95%99%E7%9A%84%E9%9D%A2%E5%8C%85%E5%BA%97%E5%BC%80%E5%A7%8B%E9%99%90%E8%B4%AD%E4%BA%86%23) `330.5K 🔥` `NEW`
1. [杨紫作品豆瓣分数](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%BD%9C%E5%93%81%E8%B1%86%E7%93%A3%E5%88%86%E6%95%B0%23) `327.3K 🔥` `NEW`
1. [我安慰人就阚清子这样](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%89%E6%85%B0%E4%BA%BA%E5%B0%B1%E9%98%9A%E6%B8%85%E5%AD%90%E8%BF%99%E6%A0%B7%23) `326.0K 🔥` `NEW`
1. [红鲤鱼绿鲤鱼与驴在潍坊都飞上天](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%B2%A4%E9%B1%BC%E7%BB%BF%E9%B2%A4%E9%B1%BC%E4%B8%8E%E9%A9%B4%E5%9C%A8%E6%BD%8D%E5%9D%8A%E9%83%BD%E9%A3%9E%E4%B8%8A%E5%A4%A9%23) `324.4K 🔥` `NEW`
1. [小学生春游下车发现是自己家](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%94%9F%E6%98%A5%E6%B8%B8%E4%B8%8B%E8%BD%A6%E5%8F%91%E7%8E%B0%E6%98%AF%E8%87%AA%E5%B7%B1%E5%AE%B6%23) `323.2K 🔥` `NEW`
1. [排位赛王一博成绩](https://s.weibo.com/weibo?q=%23%E6%8E%92%E4%BD%8D%E8%B5%9B%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%88%90%E7%BB%A9%23) `322.3K 🔥` `NEW`
1. [惠英红 紫翡配美人 (Hui Yinghong purple jade with beauty)](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%20%E7%B4%AB%E7%BF%A1%E9%85%8D%E7%BE%8E%E4%BA%BA%23) `285.9K 🔥` `NEW`
1. [官方通报商户在公厕冲洗冷冻肉](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%95%86%E6%88%B7%E5%9C%A8%E5%85%AC%E5%8E%95%E5%86%B2%E6%B4%97%E5%86%B7%E5%86%BB%E8%82%89%23) `259.5K 🔥` `NEW`
1. [李楷灿恋情风波后发泡泡](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%A5%B7%E7%81%BF%E6%81%8B%E6%83%85%E9%A3%8E%E6%B3%A2%E5%90%8E%E5%8F%91%E6%B3%A1%E6%B3%A1%23) `257.9K 🔥` `NEW`
1. [电池卡扣断裂判全损电车维修多离谱](https://s.weibo.com/weibo?q=%23%E7%94%B5%E6%B1%A0%E5%8D%A1%E6%89%A3%E6%96%AD%E8%A3%82%E5%88%A4%E5%85%A8%E6%8D%9F%E7%94%B5%E8%BD%A6%E7%BB%B4%E4%BF%AE%E5%A4%9A%E7%A6%BB%E8%B0%B1%23) `202.0K 🔥` `NEW`
1. [谁敢听达拉崩吧小考](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E5%90%AC%E8%BE%BE%E6%8B%89%E5%B4%A9%E5%90%A7%E5%B0%8F%E8%80%83%23) `1.2M 🔥` `+361%`
1. [看苏超上京东领霸王餐 (Watch Su Chao go to JD.com to receive Overlord meal)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E8%8B%8F%E8%B6%85%E4%B8%8A%E4%BA%AC%E4%B8%9C%E9%A2%86%E9%9C%B8%E7%8E%8B%E9%A4%90%23) `746.1K 🔥` `+172%`
1. [娜塔莉波特曼怀孕](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E5%A1%94%E8%8E%89%E6%B3%A2%E7%89%B9%E6%9B%BC%E6%80%80%E5%AD%95%23) `254.2K 🔥` `+31%`
1. [美国准备解冻200亿美元伊朗资金](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%87%86%E5%A4%87%E8%A7%A3%E5%86%BB200%E4%BA%BF%E7%BE%8E%E5%85%83%E4%BC%8A%E6%9C%97%E8%B5%84%E9%87%91%23) `250.2K 🔥` `+72%`
1. [雷军在临沂一服务区被米粉送炒鸡 (Lei Jun was served fried chicken by rice noodles in a service area in Linyi)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9C%A8%E4%B8%B4%E6%B2%82%E4%B8%80%E6%9C%8D%E5%8A%A1%E5%8C%BA%E8%A2%AB%E7%B1%B3%E7%B2%89%E9%80%81%E7%82%92%E9%B8%A1%23) `237.5K 🔥` `+63%`
1. [小米18Pro配置全面曝光 (Xiaomi 18Pro configuration fully exposed)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E9%85%8D%E7%BD%AE%E5%85%A8%E9%9D%A2%E6%9B%9D%E5%85%89%23) `234.8K 🔥` `+48%`
1. [雷军回应YU7二排比迈巴赫多一度](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94YU7%E4%BA%8C%E6%8E%92%E6%AF%94%E8%BF%88%E5%B7%B4%E8%B5%AB%E5%A4%9A%E4%B8%80%E5%BA%A6%23) `219.1K 🔥` `+51%`
1. [美团发文回应被罚](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%BD%9A%23) `211.1K 🔥` `+45%`
1. [淘宝闪购回应被处罚](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%A4%84%E7%BD%9A%23) `192.3K 🔥` `+32%`
1. [麻辣烫阿姨下跪道歉后家长仍嘲讽 (Malatang auntie knelt down to apologize, but parents still laughed at her)](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E7%83%AB%E9%98%BF%E5%A7%A8%E4%B8%8B%E8%B7%AA%E9%81%93%E6%AD%89%E5%90%8E%E5%AE%B6%E9%95%BF%E4%BB%8D%E5%98%B2%E8%AE%BD%23) `745.8K 🔥`
1. [大冰一句话解决买二手房的膈应](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E4%B8%80%E5%8F%A5%E8%AF%9D%E8%A7%A3%E5%86%B3%E4%B9%B0%E4%BA%8C%E6%89%8B%E6%88%BF%E7%9A%84%E8%86%88%E5%BA%94%23) `745.4K 🔥`
1. [公积金功能上新了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E5%8A%9F%E8%83%BD%E4%B8%8A%E6%96%B0%E4%BA%86%23) `552.4K 🔥`
1. [许凯 怪我](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%87%AF%20%E6%80%AA%E6%88%91%23) `343.2K 🔥`
1. [21岁女子闪婚生活7天后想离婚](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%A5%B3%E5%AD%90%E9%97%AA%E5%A9%9A%E7%94%9F%E6%B4%BB7%E5%A4%A9%E5%90%8E%E6%83%B3%E7%A6%BB%E5%A9%9A%23) `332.9K 🔥`
1. [孙怡回应和阚清子关系 (Sun Yi responds to her relationship with Kan Qingzi)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%9B%9E%E5%BA%94%E5%92%8C%E9%98%9A%E6%B8%85%E5%AD%90%E5%85%B3%E7%B3%BB%23) `331.7K 🔥`
1. [伊朗发布霍尔木兹海峡船舶通行新规](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B8%83%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%88%B9%E8%88%B6%E9%80%9A%E8%A1%8C%E6%96%B0%E8%A7%84%23) `326.8K 🔥`
1. [jisoo的哥哥已婚 (jisoo’s brother is married)](https://s.weibo.com/weibo?q=%23jisoo%E7%9A%84%E5%93%A5%E5%93%A5%E5%B7%B2%E5%A9%9A%23) `299.4K 🔥`
1. [一个蛋糕引出7平台35.97亿元罚单 (A cake led to a 3.597 billion yuan fine on 7 platforms)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E8%9B%8B%E7%B3%95%E5%BC%95%E5%87%BA7%E5%B9%B3%E5%8F%B035.97%E4%BA%BF%E5%85%83%E7%BD%9A%E5%8D%95%23) `868.9K 🔥` `-28%`
1. [403元凉拌土鸡放20多勺糖](https://s.weibo.com/weibo?q=%23403%E5%85%83%E5%87%89%E6%8B%8C%E5%9C%9F%E9%B8%A1%E6%94%BE20%E5%A4%9A%E5%8B%BA%E7%B3%96%23) `344.3K 🔥` `-26%`
1. [李小冉让贺峻霖小嘴巴闭起来](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%AE%A9%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%B0%8F%E5%98%B4%E5%B7%B4%E9%97%AD%E8%B5%B7%E6%9D%A5%23) `338.7K 🔥` `-51%`
1. [雷军不建议有司机的大老板买小米](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E4%B8%8D%E5%BB%BA%E8%AE%AE%E6%9C%89%E5%8F%B8%E6%9C%BA%E7%9A%84%E5%A4%A7%E8%80%81%E6%9D%BF%E4%B9%B0%E5%B0%8F%E7%B1%B3%23) `336.3K 🔥` `-23%`
1. [女子跳楼被男友拽5分钟后坠亡 (Woman jumped off building and fell to death after being dragged by her boyfriend for 5 minutes)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B7%B3%E6%A5%BC%E8%A2%AB%E7%94%B7%E5%8F%8B%E6%8B%BD5%E5%88%86%E9%92%9F%E5%90%8E%E5%9D%A0%E4%BA%A1%23) `335.6K 🔥` `-21%`
1. [浪姐二公小考](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E5%B0%8F%E8%80%83%23) `330.9K 🔥` `-70%`
1. [花少8姐姐三句不离小鲜肉 (Hua Shao 8’s sister never leaves Xiaoxianrou)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E5%A7%90%E5%A7%90%E4%B8%89%E5%8F%A5%E4%B8%8D%E7%A6%BB%E5%B0%8F%E9%B2%9C%E8%82%89%23) `329.9K 🔥` `-40%`
1. [39岁高龄产妇子宫患癌仍坚持生育](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E9%AB%98%E9%BE%84%E4%BA%A7%E5%A6%87%E5%AD%90%E5%AE%AB%E6%82%A3%E7%99%8C%E4%BB%8D%E5%9D%9A%E6%8C%81%E7%94%9F%E8%82%B2%23) `296.3K 🔥` `-25%`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `294.2K 🔥` `-28%`
1. [江苏事业编](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E4%BA%8B%E4%B8%9A%E7%BC%96%23) `261.9K 🔥` `-31%`
1. [中国新能源产品成了海外抢手货](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E8%83%BD%E6%BA%90%E4%BA%A7%E5%93%81%E6%88%90%E4%BA%86%E6%B5%B7%E5%A4%96%E6%8A%A2%E6%89%8B%E8%B4%A7%23) `225.3K 🔥` `-72%`

Updated at 2026-04-18 14:45:26

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
