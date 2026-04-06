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

1. [今年白玉兰视帝入围预测 (Prediction of this year’s Magnolia TV Emperor finalists)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%B8%9D%E5%85%A5%E5%9B%B4%E9%A2%84%E6%B5%8B%23) `745.9K 🔥` `NEW`
1. [安徽6岁失联女童确认遇害](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD6%E5%B2%81%E5%A4%B1%E8%81%94%E5%A5%B3%E7%AB%A5%E7%A1%AE%E8%AE%A4%E9%81%87%E5%AE%B3%23) `598.1K 🔥` `NEW`
1. [老夫妻近3万买戒指后被店家跟踪](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%AB%E5%A6%BB%E8%BF%913%E4%B8%87%E4%B9%B0%E6%88%92%E6%8C%87%E5%90%8E%E8%A2%AB%E5%BA%97%E5%AE%B6%E8%B7%9F%E8%B8%AA%23) `262.7K 🔥` `NEW`
1. [陈宝仓潜伏身份证明首次公开](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%AE%9D%E4%BB%93%E6%BD%9C%E4%BC%8F%E8%BA%AB%E4%BB%BD%E8%AF%81%E6%98%8E%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%23) `198.1K 🔥` `NEW`
1. [文章和女儿合照被说像明星](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E5%92%8C%E5%A5%B3%E5%84%BF%E5%90%88%E7%85%A7%E8%A2%AB%E8%AF%B4%E5%83%8F%E6%98%8E%E6%98%9F%23) `187.7K 🔥` `NEW`
1. [大批游客徒步南太行后逛胖东来](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%89%B9%E6%B8%B8%E5%AE%A2%E5%BE%92%E6%AD%A5%E5%8D%97%E5%A4%AA%E8%A1%8C%E5%90%8E%E9%80%9B%E8%83%96%E4%B8%9C%E6%9D%A5%23) `140.0K 🔥` `NEW`
1. [11岁女孩患肝衰竭和白血病双眼变绿](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%82%A3%E8%82%9D%E8%A1%B0%E7%AB%AD%E5%92%8C%E7%99%BD%E8%A1%80%E7%97%85%E5%8F%8C%E7%9C%BC%E5%8F%98%E7%BB%BF%23) `139.5K 🔥` `NEW`
1. [中国男生在宿舍做的风铃在iG上爆火](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%94%9F%E5%9C%A8%E5%AE%BF%E8%88%8D%E5%81%9A%E7%9A%84%E9%A3%8E%E9%93%83%E5%9C%A8iG%E4%B8%8A%E7%88%86%E7%81%AB%23) `98.2K 🔥` `NEW`
1. [美军长途奔袭伊朗靠兴奋剂提神](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E9%95%BF%E9%80%94%E5%A5%94%E8%A2%AD%E4%BC%8A%E6%9C%97%E9%9D%A0%E5%85%B4%E5%A5%8B%E5%89%82%E6%8F%90%E7%A5%9E%23) `97.1K 🔥` `NEW`
1. [女孩趁妈妈吹头发横穿马路被车撞倒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%B6%81%E5%A6%88%E5%A6%88%E5%90%B9%E5%A4%B4%E5%8F%91%E6%A8%AA%E7%A9%BF%E9%A9%AC%E8%B7%AF%E8%A2%AB%E8%BD%A6%E6%92%9E%E5%80%92%23) `95.1K 🔥` `NEW`
1. [张婧仪方AI短剧侵权维权 (Zhang Jingyifang AI short play infringement rights protection)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%96%B9AI%E7%9F%AD%E5%89%A7%E4%BE%B5%E6%9D%83%E7%BB%B4%E6%9D%83%23) `82.9K 🔥` `NEW`
1. [再上18天班休5天](https://s.weibo.com/weibo?q=%23%E5%86%8D%E4%B8%8A18%E5%A4%A9%E7%8F%AD%E4%BC%915%E5%A4%A9%23) `76.5K 🔥` `NEW`
1. [伊朗称美营救行动或为窃取浓缩铀](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E8%90%A5%E6%95%91%E8%A1%8C%E5%8A%A8%E6%88%96%E4%B8%BA%E7%AA%83%E5%8F%96%E6%B5%93%E7%BC%A9%E9%93%80%23) `74.2K 🔥` `NEW`
1. [香港飞香港的航班 (flights from Hong Kong to Hong Kong)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%A3%9E%E9%A6%99%E6%B8%AF%E7%9A%84%E8%88%AA%E7%8F%AD%23) `1.1M 🔥` `+28%`
1. [14枚导弹命中以色列人口密集区](https://s.weibo.com/weibo?q=%2314%E6%9E%9A%E5%AF%BC%E5%BC%B9%E5%91%BD%E4%B8%AD%E4%BB%A5%E8%89%B2%E5%88%97%E4%BA%BA%E5%8F%A3%E5%AF%86%E9%9B%86%E5%8C%BA%23) `497.1K 🔥` `+426%`
1. [大学生高铁怒吼熊孩子到底是谁错了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E9%AB%98%E9%93%81%E6%80%92%E5%90%BC%E7%86%8A%E5%AD%A9%E5%AD%90%E5%88%B0%E5%BA%95%E6%98%AF%E8%B0%81%E9%94%99%E4%BA%86%23) `318.8K 🔥` `+317%`
1. [许昕说我会回国家队](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E8%AF%B4%E6%88%91%E4%BC%9A%E5%9B%9E%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `201.7K 🔥` `+52%`
1. [侯宇浪姐直播睡觉](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%AE%87%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%E7%9D%A1%E8%A7%89%23) `176.7K 🔥` `+37%`
1. [i人佟丽娅生了个e人儿子](https://s.weibo.com/weibo?q=%23i%E4%BA%BA%E4%BD%9F%E4%B8%BD%E5%A8%85%E7%94%9F%E4%BA%86%E4%B8%AAe%E4%BA%BA%E5%84%BF%E5%AD%90%23) `139.9K 🔥` `+47%`
1. [解锁神二十一乘组最新工作周记](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E9%94%81%E7%A5%9E%E4%BA%8C%E5%8D%81%E4%B8%80%E4%B9%98%E7%BB%84%E6%9C%80%E6%96%B0%E5%B7%A5%E4%BD%9C%E5%91%A8%E8%AE%B0%23) `620.9K 🔥`
1. [特别讨厌食堂的标语](https://s.weibo.com/weibo?q=%23%E7%89%B9%E5%88%AB%E8%AE%A8%E5%8E%8C%E9%A3%9F%E5%A0%82%E7%9A%84%E6%A0%87%E8%AF%AD%23) `185.0K 🔥`
1. [猎罪图鉴 (Hunting crime illustrated book)](https://s.weibo.com/weibo?q=%23%E7%8C%8E%E7%BD%AA%E5%9B%BE%E9%89%B4%23) `180.7K 🔥`
1. [父亲问儿子要2000元投资款被拒](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E9%97%AE%E5%84%BF%E5%AD%90%E8%A6%812000%E5%85%83%E6%8A%95%E8%B5%84%E6%AC%BE%E8%A2%AB%E6%8B%92%23) `160.8K 🔥`
1. [伊能静曝和秦昊结婚原因](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E6%9B%9D%E5%92%8C%E7%A7%A6%E6%98%8A%E7%BB%93%E5%A9%9A%E5%8E%9F%E5%9B%A0%23) `160.5K 🔥`
1. [时代峰峻的销冠都在这了 (All the top sellers of the times are here.)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E7%9A%84%E9%94%80%E5%86%A0%E9%83%BD%E5%9C%A8%E8%BF%99%E4%BA%86%23) `135.6K 🔥`
1. [易中天获奖励20万元](https://s.weibo.com/weibo?q=%23%E6%98%93%E4%B8%AD%E5%A4%A9%E8%8E%B7%E5%A5%96%E5%8A%B120%E4%B8%87%E5%85%83%23) `103.0K 🔥`
1. [徒弟说贺娇龙去世时才40公斤 (The apprentice said that He Jiaolong was only 40 kilograms when he died.)](https://s.weibo.com/weibo?q=%23%E5%BE%92%E5%BC%9F%E8%AF%B4%E8%B4%BA%E5%A8%87%E9%BE%99%E5%8E%BB%E4%B8%96%E6%97%B6%E6%89%8D40%E5%85%AC%E6%96%A4%23) `98.5K 🔥`
1. [卫生巾价格或上涨3%至8% (Sanitary napkin prices may rise by 3% to 8%)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E4%BB%B7%E6%A0%BC%E6%88%96%E4%B8%8A%E6%B6%A83%25%E8%87%B38%25%23) `98.3K 🔥`
1. [林宇辉 猎罪图鉴3不拍了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AE%87%E8%BE%89%20%E7%8C%8E%E7%BD%AA%E5%9B%BE%E9%89%B43%E4%B8%8D%E6%8B%8D%E4%BA%86%23) `91.9K 🔥`
1. [多位艺人工作室发布短剧侵权声明](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E8%89%BA%E4%BA%BA%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E5%B8%83%E7%9F%AD%E5%89%A7%E4%BE%B5%E6%9D%83%E5%A3%B0%E6%98%8E%23) `82.3K 🔥`
1. [美宇航员太空中意外半裸出镜](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%87%E8%88%AA%E5%91%98%E5%A4%AA%E7%A9%BA%E4%B8%AD%E6%84%8F%E5%A4%96%E5%8D%8A%E8%A3%B8%E5%87%BA%E9%95%9C%23) `75.8K 🔥`
1. [美军营救飞行员内幕曝光](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%90%A5%E6%95%91%E9%A3%9E%E8%A1%8C%E5%91%98%E5%86%85%E5%B9%95%E6%9B%9D%E5%85%89%23) `71.1K 🔥`
1. [蔡徐坤演唱会中场休息不到30秒](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%AD%E5%9C%BA%E4%BC%91%E6%81%AF%E4%B8%8D%E5%88%B030%E7%A7%92%23) `67.5K 🔥`
1. [曝柠萌影视怕剧本写完檀健次不演](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%A0%E8%90%8C%E5%BD%B1%E8%A7%86%E6%80%95%E5%89%A7%E6%9C%AC%E5%86%99%E5%AE%8C%E6%AA%80%E5%81%A5%E6%AC%A1%E4%B8%8D%E6%BC%94%23) `344.6K 🔥` `-45%`
1. [王濛 别让武将干这个 (Wang Meng, don’t let the generals do this.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E5%88%AB%E8%AE%A9%E6%AD%A6%E5%B0%86%E5%B9%B2%E8%BF%99%E4%B8%AA%23) `195.0K 🔥` `-83%`
1. [一世鹰名毁于伊弹 (The eagle's reputation was ruined by the Iraqi bombs)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%96%E9%B9%B0%E5%90%8D%E6%AF%81%E4%BA%8E%E4%BC%8A%E5%BC%B9%23) `160.5K 🔥` `-24%`
1. [贺思慕血洗二十四殿](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%80%9D%E6%85%95%E8%A1%80%E6%B4%97%E4%BA%8C%E5%8D%81%E5%9B%9B%E6%AE%BF%23) `146.7K 🔥` `-31%`
1. [莫氏鸡煲被传遭文旅施压开门营业 (Mo’s Chicken Pot is rumored to be under pressure from cultural tourism to open for business)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%A2%AB%E4%BC%A0%E9%81%AD%E6%96%87%E6%97%85%E6%96%BD%E5%8E%8B%E5%BC%80%E9%97%A8%E8%90%A5%E4%B8%9A%23) `123.6K 🔥` `-35%`
1. [Angelababy家里摆满了粉丝的礼物](https://s.weibo.com/weibo?q=%23Angelababy%E5%AE%B6%E9%87%8C%E6%91%86%E6%BB%A1%E4%BA%86%E7%B2%89%E4%B8%9D%E7%9A%84%E7%A4%BC%E7%89%A9%23) `104.4K 🔥` `-30%`
1. [男子故意绊服务员面汤洒顾客身上](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%95%85%E6%84%8F%E7%BB%8A%E6%9C%8D%E5%8A%A1%E5%91%98%E9%9D%A2%E6%B1%A4%E6%B4%92%E9%A1%BE%E5%AE%A2%E8%BA%AB%E4%B8%8A%23) `100.0K 🔥` `-24%`
1. [佟丽娅看朵朵饭撒的眼神](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E7%9C%8B%E6%9C%B5%E6%9C%B5%E9%A5%AD%E6%92%92%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `99.3K 🔥` `-24%`
1. [我竟然在看到礼物的一瞬间对比价格](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%AB%9F%E7%84%B6%E5%9C%A8%E7%9C%8B%E5%88%B0%E7%A4%BC%E7%89%A9%E7%9A%84%E4%B8%80%E7%9E%AC%E9%97%B4%E5%AF%B9%E6%AF%94%E4%BB%B7%E6%A0%BC%23) `97.1K 🔥` `-54%`
1. [孙颖莎长文总结世界杯 (Sun Yingsha’s long article summarizes the World Cup)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%95%BF%E6%96%87%E6%80%BB%E7%BB%93%E4%B8%96%E7%95%8C%E6%9D%AF%23) `94.7K 🔥` `-27%`
1. [王楚钦回复许昕大脑处于宕机状态了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%A4%8D%E8%AE%B8%E6%98%95%E5%A4%A7%E8%84%91%E5%A4%84%E4%BA%8E%E5%AE%95%E6%9C%BA%E7%8A%B6%E6%80%81%E4%BA%86%23) `84.6K 🔥` `-45%`
1. [本周做什么都顺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `79.8K 🔥` `-59%`
1. [校园周边毒玩具泛滥](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E5%9B%AD%E5%91%A8%E8%BE%B9%E6%AF%92%E7%8E%A9%E5%85%B7%E6%B3%9B%E6%BB%A5%23) `76.9K 🔥` `-57%`
1. [伊朗打击美军的黎波里号两栖攻击舰](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%E7%9A%84%E9%BB%8E%E6%B3%A2%E9%87%8C%E5%8F%B7%E4%B8%A4%E6%A0%96%E6%94%BB%E5%87%BB%E8%88%B0%23) `76.6K 🔥` `-42%`
1. [安崎选人 (An Qi selects people)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E9%80%89%E4%BA%BA%23) `72.1K 🔥` `-52%`
1. [田曦薇素颜饭撒](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%B4%A0%E9%A2%9C%E9%A5%AD%E6%92%92%23) `68.2K 🔥` `-24%`
1. [刘国正谈王楚钦世界杯夺冠含金量](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%AD%A3%E8%B0%88%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%BA%E5%86%A0%E5%90%AB%E9%87%91%E9%87%8F%23) `67.4K 🔥` `-22%`

Updated at 2026-04-06 22:50:14

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
