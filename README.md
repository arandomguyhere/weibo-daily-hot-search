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

1. [暑期档 撤档 (Summer schedule withdrawn)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%A1%A3%20%E6%92%A4%E6%A1%A3%23) `1.2M 🔥` `NEW`
1. [舒蕾王星越达成长效合作](https://s.weibo.com/weibo?q=%23%E8%88%92%E8%95%BE%E7%8E%8B%E6%98%9F%E8%B6%8A%E8%BE%BE%E6%88%90%E9%95%BF%E6%95%88%E5%90%88%E4%BD%9C%23) `1.1M 🔥` `NEW`
1. [多个明星演唱会取消](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%B8%AA%E6%98%8E%E6%98%9F%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%96%E6%B6%88%23) `943.7K 🔥` `NEW`
1. [王者英雄走进校园](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8B%B1%E9%9B%84%E8%B5%B0%E8%BF%9B%E6%A0%A1%E5%9B%AD%23) `545.0K 🔥` `NEW`
1. [以媒称伊朗最高领袖被紧急送医](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%AA%92%E7%A7%B0%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E8%A2%AB%E7%B4%A7%E6%80%A5%E9%80%81%E5%8C%BB%23) `431.4K 🔥` `NEW`
1. [周深问你会深信什么](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E9%97%AE%E4%BD%A0%E4%BC%9A%E6%B7%B1%E4%BF%A1%E4%BB%80%E4%B9%88%23) `410.3K 🔥` `NEW`
1. [自媒体红利期只剩AI了](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%AA%92%E4%BD%93%E7%BA%A2%E5%88%A9%E6%9C%9F%E5%8F%AA%E5%89%A9AI%E4%BA%86%23) `397.1K 🔥` `NEW`
1. [留几手希望葛夕道歉](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E5%B8%8C%E6%9C%9B%E8%91%9B%E5%A4%95%E9%81%93%E6%AD%89%23) `396.6K 🔥` `NEW`
1. [鞠婧祎的美不止一面](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%9A%84%E7%BE%8E%E4%B8%8D%E6%AD%A2%E4%B8%80%E9%9D%A2%23) `364.7K 🔥` `NEW`
1. [日韩网红模仿中国人切西瓜](https://s.weibo.com/weibo?q=%23%E6%97%A5%E9%9F%A9%E7%BD%91%E7%BA%A2%E6%A8%A1%E4%BB%BF%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%88%87%E8%A5%BF%E7%93%9C%23) `360.2K 🔥` `NEW`
1. [薛之谦8月8日9日杭州演唱会取消 (Joker Xue's Hangzhou concert on August 8 and 9 is canceled)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A68%E6%9C%888%E6%97%A59%E6%97%A5%E6%9D%AD%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%96%E6%B6%88%23) `308.4K 🔥` `NEW`
1. [披荆斩棘2026官宣定档](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%982026%E5%AE%98%E5%AE%A3%E5%AE%9A%E6%A1%A3%23) `298.5K 🔥` `NEW`
1. [丁禹兮逆应援为粉丝请化妆师](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E9%80%86%E5%BA%94%E6%8F%B4%E4%B8%BA%E7%B2%89%E4%B8%9D%E8%AF%B7%E5%8C%96%E5%A6%86%E5%B8%88%23) `298.2K 🔥` `NEW`
1. [六公主的头像是陈哲远换的](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%85%AC%E4%B8%BB%E7%9A%84%E5%A4%B4%E5%83%8F%E6%98%AF%E9%99%88%E5%93%B2%E8%BF%9C%E6%8D%A2%E7%9A%84%23) `284.7K 🔥` `NEW`
1. [河南三支一扶重考也是一次信任大考](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E9%87%8D%E8%80%83%E4%B9%9F%E6%98%AF%E4%B8%80%E6%AC%A1%E4%BF%A1%E4%BB%BB%E5%A4%A7%E8%80%83%23) `278.5K 🔥` `NEW`
1. [傅园慧成为浙江大学老师](https://s.weibo.com/weibo?q=%23%E5%82%85%E5%9B%AD%E6%85%A7%E6%88%90%E4%B8%BA%E6%B5%99%E6%B1%9F%E5%A4%A7%E5%AD%A6%E8%80%81%E5%B8%88%23) `268.9K 🔥` `NEW`
1. [胃癌直博生曾向父亲借钱旅游被拒](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E7%9B%B4%E5%8D%9A%E7%94%9F%E6%9B%BE%E5%90%91%E7%88%B6%E4%BA%B2%E5%80%9F%E9%92%B1%E6%97%85%E6%B8%B8%E8%A2%AB%E6%8B%92%23) `229.2K 🔥` `NEW`
1. [金世佳二胎女儿这么大了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%B8%96%E4%BD%B3%E4%BA%8C%E8%83%8E%E5%A5%B3%E5%84%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `212.1K 🔥` `NEW`
1. [孟子义高跟鞋半蹲和粉丝合照](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%8D%8A%E8%B9%B2%E5%92%8C%E7%B2%89%E4%B8%9D%E5%90%88%E7%85%A7%23) `195.1K 🔥` `NEW`
1. [胡彦斌演唱会八城官宣](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E6%BC%94%E5%94%B1%E4%BC%9A%E5%85%AB%E5%9F%8E%E5%AE%98%E5%AE%A3%23) `173.9K 🔥` `NEW`
1. [婆家称儿媳不赡养老人无权分工亡赔偿 (The husband's family claims that the daughter-in-law does not support the elderly and has no right to divide the labor and pay compensation for her death.)](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%AE%B6%E7%A7%B0%E5%84%BF%E5%AA%B3%E4%B8%8D%E8%B5%A1%E5%85%BB%E8%80%81%E4%BA%BA%E6%97%A0%E6%9D%83%E5%88%86%E5%B7%A5%E4%BA%A1%E8%B5%94%E5%81%BF%23) `165.5K 🔥` `NEW`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `158.5K 🔥` `NEW`
1. [荣威新车重大乌龙](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E5%A8%81%E6%96%B0%E8%BD%A6%E9%87%8D%E5%A4%A7%E4%B9%8C%E9%BE%99%23) `152.9K 🔥` `NEW`
1. [幼师两年减少41万人](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%B8%88%E4%B8%A4%E5%B9%B4%E5%87%8F%E5%B0%9141%E4%B8%87%E4%BA%BA%23) `152.9K 🔥` `NEW`
1. [特朗普称要夺回矿产超级大国地位](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%A6%81%E5%A4%BA%E5%9B%9E%E7%9F%BF%E4%BA%A7%E8%B6%85%E7%BA%A7%E5%A4%A7%E5%9B%BD%E5%9C%B0%E4%BD%8D%23) `152.9K 🔥` `NEW`
1. [周星驰携功夫女足主创感谢观众](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E6%90%BA%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%B8%BB%E5%88%9B%E6%84%9F%E8%B0%A2%E8%A7%82%E4%BC%97%23) `152.9K 🔥` `NEW`
1. [向陕西增加调拨3.2万件救灾物资](https://s.weibo.com/weibo?q=%23%E5%90%91%E9%99%95%E8%A5%BF%E5%A2%9E%E5%8A%A0%E8%B0%83%E6%8B%A83.2%E4%B8%87%E4%BB%B6%E6%95%91%E7%81%BE%E7%89%A9%E8%B5%84%23) `1.1M 🔥` `+48%`
1. [关晓彤已到最佳赏味期](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%B7%B2%E5%88%B0%E6%9C%80%E4%BD%B3%E8%B5%8F%E5%91%B3%E6%9C%9F%23) `701.5K 🔥` `+249%`
1. [台风白海豚闭眼意味着什么](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E9%97%AD%E7%9C%BC%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `436.8K 🔥` `+28%`
1. [白鹿柳智敏 蛇塑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9F%B3%E6%99%BA%E6%95%8F%20%E8%9B%87%E5%A1%91%23) `426.1K 🔥` `+49%`
1. [富婆带资进组给自己硬加60多场吻戏 (The rich woman brought money into the group and had more than 60 kissing scenes for herself)](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E5%A9%86%E5%B8%A6%E8%B5%84%E8%BF%9B%E7%BB%84%E7%BB%99%E8%87%AA%E5%B7%B1%E7%A1%AC%E5%8A%A060%E5%A4%9A%E5%9C%BA%E5%90%BB%E6%88%8F%23) `423.0K 🔥` `+77%`
1. [确诊胃癌晚期博士父母发声](https://s.weibo.com/weibo?q=%23%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E5%8D%9A%E5%A3%AB%E7%88%B6%E6%AF%8D%E5%8F%91%E5%A3%B0%23) `418.9K 🔥` `+82%`
1. [王楚然大一形体课越扒越有 (Wang Churan's freshman bodybuilding class got more and more interesting)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%A4%A7%E4%B8%80%E5%BD%A2%E4%BD%93%E8%AF%BE%E8%B6%8A%E6%89%92%E8%B6%8A%E6%9C%89%23) `416.1K 🔥` `+66%`
1. [富婆硬加吻戏短剧已下架](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E5%A9%86%E7%A1%AC%E5%8A%A0%E5%90%BB%E6%88%8F%E7%9F%AD%E5%89%A7%E5%B7%B2%E4%B8%8B%E6%9E%B6%23) `413.3K 🔥` `+45%`
1. [患胃癌晚期直博生总是熬夜吃外卖](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E7%9B%B4%E5%8D%9A%E7%94%9F%E6%80%BB%E6%98%AF%E7%86%AC%E5%A4%9C%E5%90%83%E5%A4%96%E5%8D%96%23) `406.3K 🔥` `+51%`
1. [iPhone18系列发布节奏](https://s.weibo.com/weibo?q=%23iPhone18%E7%B3%BB%E5%88%97%E5%8F%91%E5%B8%83%E8%8A%82%E5%A5%8F%23) `401.6K 🔥` `+109%`
1. [婚前身体检查很重要 (Premarital physical examination is very important)](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%89%8D%E8%BA%AB%E4%BD%93%E6%A3%80%E6%9F%A5%E5%BE%88%E9%87%8D%E8%A6%81%23) `298.3K 🔥` `+56%`
1. [张婧仪泳装路透 (Zhang Jingyi Swimsuit Reuters)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%B3%B3%E8%A3%85%E8%B7%AF%E9%80%8F%23) `277.9K 🔥` `+27%`
1. [乌克兰女子死抱男友阻拦征兵办 (Ukrainian woman hugs her boyfriend to stop military recruitment)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E5%A5%B3%E5%AD%90%E6%AD%BB%E6%8A%B1%E7%94%B7%E5%8F%8B%E9%98%BB%E6%8B%A6%E5%BE%81%E5%85%B5%E5%8A%9E%23) `254.1K 🔥` `+35%`
1. [胡彦斌歌王 (Hu Yanbin King of Songs)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E6%AD%8C%E7%8E%8B%23) `251.4K 🔥` `+32%`
1. [白海豚已闭眼](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%B7%B2%E9%97%AD%E7%9C%BC%23) `1.8M 🔥`
1. [张本智和说面对国乒年轻选手压力消失了 (Zhang Benzhihe said that the pressure disappeared when facing young national table tennis players.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E9%9D%A2%E5%AF%B9%E5%9B%BD%E4%B9%92%E5%B9%B4%E8%BD%BB%E9%80%89%E6%89%8B%E5%8E%8B%E5%8A%9B%E6%B6%88%E5%A4%B1%E4%BA%86%23) `1.1M 🔥`
1. [泰国初中生饮弹自尽前开了26枪 (Thai junior high school student shot 26 times before committing suicide)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%88%9D%E4%B8%AD%E7%94%9F%E9%A5%AE%E5%BC%B9%E8%87%AA%E5%B0%BD%E5%89%8D%E5%BC%80%E4%BA%8626%E6%9E%AA%23) `229.9K 🔥`
1. [向太怒斥婚外胚胎案丈夫](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%80%92%E6%96%A5%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E4%B8%88%E5%A4%AB%23) `164.6K 🔥`
1. [印度人制作的全球智商地图](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%BA%BA%E5%88%B6%E4%BD%9C%E7%9A%84%E5%85%A8%E7%90%83%E6%99%BA%E5%95%86%E5%9C%B0%E5%9B%BE%23) `153.7K 🔥`
1. [时代少年团戒断反应比我严重](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%88%92%E6%96%AD%E5%8F%8D%E5%BA%94%E6%AF%94%E6%88%91%E4%B8%A5%E9%87%8D%23) `152.9K 🔥`
1. [华为阔直板新机曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%98%94%E7%9B%B4%E6%9D%BF%E6%96%B0%E6%9C%BA%E6%9B%9D%E5%85%89%23) `152.9K 🔥`
1. [佛得角门将身价暴涨1000% (Cape Verdean goalkeeper’s net worth skyrockets by 1,000%)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E8%BA%AB%E4%BB%B7%E6%9A%B4%E6%B6%A81000%25%23) `152.9K 🔥`
1. [原来这是追到正缘了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%98%AF%E8%BF%BD%E5%88%B0%E6%AD%A3%E7%BC%98%E4%BA%86%23) `440.6K 🔥` `-34%`
1. [张本智和 零封不算意外 (Zhang Benzhihe’s zero seal is not a surprise)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%20%E9%9B%B6%E5%B0%81%E4%B8%8D%E7%AE%97%E6%84%8F%E5%A4%96%23) `438.3K 🔥` `-33%`
1. [王菲看了窦靖童歌手总决赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E7%9C%8B%E4%BA%86%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%23) `394.5K 🔥` `-29%`
1. [金价突破4400美元](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%AA%81%E7%A0%B44400%E7%BE%8E%E5%85%83%23) `280.0K 🔥` `-39%`

Updated at 2026-08-08 12:51:34

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
