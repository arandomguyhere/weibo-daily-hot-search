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

1. [张雪机车排名一路狂飙 (Zhang Xue’s motorcycle rankings are soaring all the way)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8E%92%E5%90%8D%E4%B8%80%E8%B7%AF%E7%8B%82%E9%A3%99%23) `800.3K 🔥` `NEW`
1. [中国新能源产品成了海外抢手货](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E8%83%BD%E6%BA%90%E4%BA%A7%E5%93%81%E6%88%90%E4%BA%86%E6%B5%B7%E5%A4%96%E6%8A%A2%E6%89%8B%E8%B4%A7%23) `637.5K 🔥` `NEW`
1. [花少8姐姐三句不离小鲜肉](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E5%A7%90%E5%A7%90%E4%B8%89%E5%8F%A5%E4%B8%8D%E7%A6%BB%E5%B0%8F%E9%B2%9C%E8%82%89%23) `605.1K 🔥` `NEW`
1. [大众这波郭培合作审美在大气层](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97%E8%BF%99%E6%B3%A2%E9%83%AD%E5%9F%B9%E5%90%88%E4%BD%9C%E5%AE%A1%E7%BE%8E%E5%9C%A8%E5%A4%A7%E6%B0%94%E5%B1%82%23) `585.5K 🔥` `NEW`
1. [饮食清淡真的会失去很多](https://s.weibo.com/weibo?q=%23%E9%A5%AE%E9%A3%9F%E6%B8%85%E6%B7%A1%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%A4%B1%E5%8E%BB%E5%BE%88%E5%A4%9A%23) `561.8K 🔥` `NEW`
1. [伊朗发布霍尔木兹海峡船舶通行新规](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B8%83%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%88%B9%E8%88%B6%E9%80%9A%E8%A1%8C%E6%96%B0%E8%A7%84%23) `524.9K 🔥` `NEW`
1. [雷军回应YU7二排比迈巴赫多一度](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94YU7%E4%BA%8C%E6%8E%92%E6%AF%94%E8%BF%88%E5%B7%B4%E8%B5%AB%E5%A4%9A%E4%B8%80%E5%BA%A6%23) `486.1K 🔥` `NEW`
1. [403元凉拌土鸡放20多勺糖](https://s.weibo.com/weibo?q=%23403%E5%85%83%E5%87%89%E6%8B%8C%E5%9C%9F%E9%B8%A1%E6%94%BE20%E5%A4%9A%E5%8B%BA%E7%B3%96%23) `343.3K 🔥` `NEW`
1. [何润东和老婆结婚10年没生孩子](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%92%8C%E8%80%81%E5%A9%86%E7%BB%93%E5%A9%9A10%E5%B9%B4%E6%B2%A1%E7%94%9F%E5%AD%A9%E5%AD%90%23) `339.8K 🔥` `NEW`
1. [全网最会做鸡的三个人齐聚广东](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E6%9C%80%E4%BC%9A%E5%81%9A%E9%B8%A1%E7%9A%84%E4%B8%89%E4%B8%AA%E4%BA%BA%E9%BD%90%E8%81%9A%E5%B9%BF%E4%B8%9C%23) `339.0K 🔥` `NEW`
1. [网友拍日出拍到了易烊千玺 (Netizens took photos of Yi Yang Qianxi during sunrise photos)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8B%8D%E6%97%A5%E5%87%BA%E6%8B%8D%E5%88%B0%E4%BA%86%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `337.4K 🔥` `NEW`
1. [魏晨躲在张杰背后笑](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E8%BA%B2%E5%9C%A8%E5%BC%A0%E6%9D%B0%E8%83%8C%E5%90%8E%E7%AC%91%23) `336.2K 🔥` `NEW`
1. [39岁高龄产妇子宫患癌仍坚持生育](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E9%AB%98%E9%BE%84%E4%BA%A7%E5%A6%87%E5%AD%90%E5%AE%AB%E6%82%A3%E7%99%8C%E4%BB%8D%E5%9D%9A%E6%8C%81%E7%94%9F%E8%82%B2%23) `335.2K 🔥` `NEW`
1. [时代少年团抢票](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%8A%A2%E7%A5%A8%23) `333.5K 🔥` `NEW`
1. [法国给日本上了一课](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%BB%99%E6%97%A5%E6%9C%AC%E4%B8%8A%E4%BA%86%E4%B8%80%E8%AF%BE%23) `332.9K 🔥` `NEW`
1. [李沁苏州活动晚宴生图](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%81%E8%8B%8F%E5%B7%9E%E6%B4%BB%E5%8A%A8%E6%99%9A%E5%AE%B4%E7%94%9F%E5%9B%BE%23) `331.4K 🔥` `NEW`
1. [jisoo的哥哥已婚](https://s.weibo.com/weibo?q=%23jisoo%E7%9A%84%E5%93%A5%E5%93%A5%E5%B7%B2%E5%A9%9A%23) `330.1K 🔥` `NEW`
1. [曝花少8大姐是吴君如](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%8A%B1%E5%B0%918%E5%A4%A7%E5%A7%90%E6%98%AF%E5%90%B4%E5%90%9B%E5%A6%82%23) `326.8K 🔥` `NEW`
1. [易烊千玺注册新商标](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%B3%A8%E5%86%8C%E6%96%B0%E5%95%86%E6%A0%87%23) `326.5K 🔥` `NEW`
1. [张杰曾让爸妈参加魏晨婚礼](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%9B%BE%E8%AE%A9%E7%88%B8%E5%A6%88%E5%8F%82%E5%8A%A0%E9%AD%8F%E6%99%A8%E5%A9%9A%E7%A4%BC%23) `266.7K 🔥` `NEW`
1. [网传鞠婧祎千香引定档时间 (It is reported on the Internet that Ju Jingyi Qianxiang Yin has a scheduled release date)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8D%83%E9%A6%99%E5%BC%95%E5%AE%9A%E6%A1%A3%E6%97%B6%E9%97%B4%23) `225.8K 🔥` `NEW`
1. [小米18Pro配置全面曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E9%85%8D%E7%BD%AE%E5%85%A8%E9%9D%A2%E6%9B%9D%E5%85%89%23) `225.6K 🔥` `NEW`
1. [曝再见朋友接触井柏然付辛博](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%E6%8E%A5%E8%A7%A6%E4%BA%95%E6%9F%8F%E7%84%B6%E4%BB%98%E8%BE%9B%E5%8D%9A%23) `225.5K 🔥` `NEW`
1. [这才是医生说的清淡饮食](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E5%8C%BB%E7%94%9F%E8%AF%B4%E7%9A%84%E6%B8%85%E6%B7%A1%E9%A5%AE%E9%A3%9F%23) `197.4K 🔥` `NEW`
1. [替外卖员赔200元解围辅警发声](https://s.weibo.com/weibo?q=%23%E6%9B%BF%E5%A4%96%E5%8D%96%E5%91%98%E8%B5%94200%E5%85%83%E8%A7%A3%E5%9B%B4%E8%BE%85%E8%AD%A6%E5%8F%91%E5%A3%B0%23) `196.3K 🔥` `NEW`
1. [泰国泼水节亲历者发声](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82%E4%BA%B2%E5%8E%86%E8%80%85%E5%8F%91%E5%A3%B0%23) `196.0K 🔥` `NEW`
1. [武艺唱心愿便利贴 王濛进步好大](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E8%89%BA%E5%94%B1%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%20%E7%8E%8B%E6%BF%9B%E8%BF%9B%E6%AD%A5%E5%A5%BD%E5%A4%A7%23) `195.9K 🔥` `NEW`
1. [淘宝闪购回应被处罚](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%A4%84%E7%BD%9A%23) `192.3K 🔥` `NEW`
1. [老年男性群体较抗拒癌症筛查](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B9%B4%E7%94%B7%E6%80%A7%E7%BE%A4%E4%BD%93%E8%BE%83%E6%8A%97%E6%8B%92%E7%99%8C%E7%97%87%E7%AD%9B%E6%9F%A5%23) `179.2K 🔥` `NEW`
1. [曾舜晞回应月鳞绮纪戏份](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E5%9B%9E%E5%BA%94%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E6%88%8F%E4%BB%BD%23) `178.9K 🔥` `NEW`
1. [勇士vs太阳 (Warriors vs Suns)](https://s.weibo.com/weibo?q=%23%E5%8B%87%E5%A3%ABvs%E5%A4%AA%E9%98%B3%23) `156.0K 🔥` `NEW`
1. [李小冉徐洁儿 姐狗味](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%BE%90%E6%B4%81%E5%84%BF%20%E5%A7%90%E7%8B%97%E5%91%B3%23) `155.5K 🔥` `NEW`
1. [TF四代见面会开园福利](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E8%A7%81%E9%9D%A2%E4%BC%9A%E5%BC%80%E5%9B%AD%E7%A6%8F%E5%88%A9%23) `137.2K 🔥` `NEW`
1. [黄灿灿曾沛慈去哪我去哪](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%9B%BE%E6%B2%9B%E6%85%88%E5%8E%BB%E5%93%AA%E6%88%91%E5%8E%BB%E5%93%AA%23) `110.5K 🔥` `NEW`
1. [台湾中视称藏海传是近五年最强古装剧](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E4%B8%AD%E8%A7%86%E7%A7%B0%E8%97%8F%E6%B5%B7%E4%BC%A0%E6%98%AF%E8%BF%91%E4%BA%94%E5%B9%B4%E6%9C%80%E5%BC%BA%E5%8F%A4%E8%A3%85%E5%89%A7%23) `110.1K 🔥` `NEW`
1. [美团发文回应被罚](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%BD%9A%23) `109.0K 🔥` `NEW`
1. [电池卡扣断裂判全损电车维修多离谱](https://s.weibo.com/weibo?q=%23%E7%94%B5%E6%B1%A0%E5%8D%A1%E6%89%A3%E6%96%AD%E8%A3%82%E5%88%A4%E5%85%A8%E6%8D%9F%E7%94%B5%E8%BD%A6%E7%BB%B4%E4%BF%AE%E5%A4%9A%E7%A6%BB%E8%B0%B1%23) `108.7K 🔥` `NEW`
1. [雷军不建议有司机的大老板买小米](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E4%B8%8D%E5%BB%BA%E8%AE%AE%E6%9C%89%E5%8F%B8%E6%9C%BA%E7%9A%84%E5%A4%A7%E8%80%81%E6%9D%BF%E4%B9%B0%E5%B0%8F%E7%B1%B3%23) `1.1M 🔥` `+408%`
1. [女孩偷偷领结婚证爷爷得知心痛落泪](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%81%B7%E5%81%B7%E9%A2%86%E7%BB%93%E5%A9%9A%E8%AF%81%E7%88%B7%E7%88%B7%E5%BE%97%E7%9F%A5%E5%BF%83%E7%97%9B%E8%90%BD%E6%B3%AA%23) `603.8K 🔥` `+159%`
1. [谢娜爆料浪姐录制时厕所门是锁的 (Xie Na revealed that the toilet door was locked when Sister Lang was recording)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%88%86%E6%96%99%E6%B5%AA%E5%A7%90%E5%BD%95%E5%88%B6%E6%97%B6%E5%8E%95%E6%89%80%E9%97%A8%E6%98%AF%E9%94%81%E7%9A%84%23) `585.9K 🔥` `+47%`
1. [女子同房后出血2000ml相当总血量一半](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%8C%E6%88%BF%E5%90%8E%E5%87%BA%E8%A1%802000ml%E7%9B%B8%E5%BD%93%E6%80%BB%E8%A1%80%E9%87%8F%E4%B8%80%E5%8D%8A%23) `328.3K 🔥` `+41%`
1. [女子跳楼被男友拽5分钟后坠亡 (Woman jumped off building and fell to death after being dragged by her boyfriend for 5 minutes)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B7%B3%E6%A5%BC%E8%A2%AB%E7%94%B7%E5%8F%8B%E6%8B%BD5%E5%88%86%E9%92%9F%E5%90%8E%E5%9D%A0%E4%BA%A1%23) `342.9K 🔥`
1. [孙怡回应和阚清子关系 (Sun Yi responds to her relationship with Kan Qingzi)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%9B%9E%E5%BA%94%E5%92%8C%E9%98%9A%E6%B8%85%E5%AD%90%E5%85%B3%E7%B3%BB%23) `341.5K 🔥`
1. [黄金大幅暴涨](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%A4%A7%E5%B9%85%E6%9A%B4%E6%B6%A8%23) `319.9K 🔥`
1. [橘子海乐队 华为](https://s.weibo.com/weibo?q=%23%E6%A9%98%E5%AD%90%E6%B5%B7%E4%B9%90%E9%98%9F%20%E5%8D%8E%E4%B8%BA%23) `180.4K 🔥`
1. [Angelababy陈赫拥抱 (Angelababy Chen He hugs)](https://s.weibo.com/weibo?q=%23Angelababy%E9%99%88%E8%B5%AB%E6%8B%A5%E6%8A%B1%23) `269.1K 🔥` `-24%`
1. [解放军护卫舰与外舰缠斗20小时](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E6%8A%A4%E5%8D%AB%E8%88%B0%E4%B8%8E%E5%A4%96%E8%88%B0%E7%BC%A0%E6%96%9720%E5%B0%8F%E6%97%B6%23) `226.0K 🔥` `-80%`
1. [氧化菊 泼水节 (Chrysanthemum water splashing festival)](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%20%E6%B3%BC%E6%B0%B4%E8%8A%82%23) `225.6K 🔥` `-39%`
1. [张雪机车夺得超级杆位赛第二名 (Zhang Xue motorcycle won second place in super pole race)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%BE%97%E8%B6%85%E7%BA%A7%E6%9D%86%E4%BD%8D%E8%B5%9B%E7%AC%AC%E4%BA%8C%E5%90%8D%23) `196.0K 🔥` `-60%`
1. [霍尔木兹海峡开放 (Strait of Hormuz opens)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%BC%80%E6%94%BE%23) `110.8K 🔥` `-87%`
1. [换电池小卡扣要13万新能源车主崩溃 (130,000 new energy car owners will collapse when replacing a small battery buckle)](https://s.weibo.com/weibo?q=%23%E6%8D%A2%E7%94%B5%E6%B1%A0%E5%B0%8F%E5%8D%A1%E6%89%A3%E8%A6%8113%E4%B8%87%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E4%B8%BB%E5%B4%A9%E6%BA%83%23) `109.4K 🔥` `-53%`

Updated at 2026-04-18 11:28:12

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
