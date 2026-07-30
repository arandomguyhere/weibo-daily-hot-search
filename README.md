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

1. [美股 (US stocks)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `1.5M 🔥` `NEW`
1. [国际足联正式对阿根廷足协启动调查](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E6%AD%A3%E5%BC%8F%E5%AF%B9%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%B6%B3%E5%8D%8F%E5%90%AF%E5%8A%A8%E8%B0%83%E6%9F%A5%23) `675.7K 🔥` `NEW`
1. [电影悟空大圣宣布撤档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%82%9F%E7%A9%BA%E5%A4%A7%E5%9C%A3%E5%AE%A3%E5%B8%83%E6%92%A4%E6%A1%A3%23) `591.6K 🔥` `NEW`
1. [趵突泉积水及腰系谣言](https://s.weibo.com/weibo?q=%23%E8%B6%B5%E7%AA%81%E6%B3%89%E7%A7%AF%E6%B0%B4%E5%8F%8A%E8%85%B0%E7%B3%BB%E8%B0%A3%E8%A8%80%23) `576.3K 🔥` `NEW`
1. [保时捷回应中国市场下滑32%](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E5%9B%9E%E5%BA%94%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E4%B8%8B%E6%BB%9132%25%23) `214.2K 🔥` `NEW`
1. [343斤网红玻璃桥跳舞被催促赶紧走](https://s.weibo.com/weibo?q=%23343%E6%96%A4%E7%BD%91%E7%BA%A2%E7%8E%BB%E7%92%83%E6%A1%A5%E8%B7%B3%E8%88%9E%E8%A2%AB%E5%82%AC%E4%BF%83%E8%B5%B6%E7%B4%A7%E8%B5%B0%23) `212.5K 🔥` `NEW`
1. [关晓彤背链](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%83%8C%E9%93%BE%23) `210.2K 🔥` `NEW`
1. [李登科问迪丽热巴VOGUE在哪买](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E9%97%AE%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4VOGUE%E5%9C%A8%E5%93%AA%E4%B9%B0%23) `209.4K 🔥` `NEW`
1. [美股尾盘大跳水原因](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%B0%BE%E7%9B%98%E5%A4%A7%E8%B7%B3%E6%B0%B4%E5%8E%9F%E5%9B%A0%23) `208.3K 🔥` `NEW`
1. [17岁小将爆冷击败世界冠军蒯曼](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%B0%8F%E5%B0%86%E7%88%86%E5%86%B7%E5%87%BB%E8%B4%A5%E4%B8%96%E7%95%8C%E5%86%A0%E5%86%9B%E8%92%AF%E6%9B%BC%23) `206.0K 🔥` `NEW`
1. [鉴宝网红炒股亏光父母积蓄遭拉黑 (Jianbao Internet celebrity lost all his parents’ savings by stock trading and was blackmailed)](https://s.weibo.com/weibo?q=%23%E9%89%B4%E5%AE%9D%E7%BD%91%E7%BA%A2%E7%82%92%E8%82%A1%E4%BA%8F%E5%85%89%E7%88%B6%E6%AF%8D%E7%A7%AF%E8%93%84%E9%81%AD%E6%8B%89%E9%BB%91%23) `202.8K 🔥` `NEW`
1. [朱志鑫问这样爱会不会感觉累](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E9%97%AE%E8%BF%99%E6%A0%B7%E7%88%B1%E4%BC%9A%E4%B8%8D%E4%BC%9A%E6%84%9F%E8%A7%89%E7%B4%AF%23) `201.9K 🔥` `NEW`
1. [格雷厄姆葬礼](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E9%9B%B7%E5%8E%84%E5%A7%86%E8%91%AC%E7%A4%BC%23) `199.0K 🔥` `NEW`
1. [赛里木湖每人75元自驾服务费引争议](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E6%AF%8F%E4%BA%BA75%E5%85%83%E8%87%AA%E9%A9%BE%E6%9C%8D%E5%8A%A1%E8%B4%B9%E5%BC%95%E4%BA%89%E8%AE%AE%23) `197.6K 🔥` `NEW`
1. [官俊臣晒TF四代合照](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E6%99%92TF%E5%9B%9B%E4%BB%A3%E5%90%88%E7%85%A7%23) `195.5K 🔥` `NEW`
1. [差点没认出这是王菊](https://s.weibo.com/weibo?q=%23%E5%B7%AE%E7%82%B9%E6%B2%A1%E8%AE%A4%E5%87%BA%E8%BF%99%E6%98%AF%E7%8E%8B%E8%8F%8A%23) `192.9K 🔥` `NEW`
1. [黄多多的清冷和黄少艾的俏皮可爱](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E7%9A%84%E6%B8%85%E5%86%B7%E5%92%8C%E9%BB%84%E5%B0%91%E8%89%BE%E7%9A%84%E4%BF%8F%E7%9A%AE%E5%8F%AF%E7%88%B1%23) `192.1K 🔥` `NEW`
1. [国铁昆明局被罚300万元](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%93%81%E6%98%86%E6%98%8E%E5%B1%80%E8%A2%AB%E7%BD%9A300%E4%B8%87%E5%85%83%23) `190.0K 🔥` `NEW`
1. [Meta发完财报股价又崩了](https://s.weibo.com/weibo?q=%23Meta%E5%8F%91%E5%AE%8C%E8%B4%A2%E6%8A%A5%E8%82%A1%E4%BB%B7%E5%8F%88%E5%B4%A9%E4%BA%86%23) `185.1K 🔥` `NEW`
1. [吴尊女儿采访荷兰弟赞达亚](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%B0%8A%E5%A5%B3%E5%84%BF%E9%87%87%E8%AE%BF%E8%8D%B7%E5%85%B0%E5%BC%9F%E8%B5%9E%E8%BE%BE%E4%BA%9A%23) `184.9K 🔥` `NEW`
1. [周佑凌咬柳柳耳朵 (Zhou Youling bites Liu Liu's ear)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%E5%92%AC%E6%9F%B3%E6%9F%B3%E8%80%B3%E6%9C%B5%23) `180.5K 🔥` `NEW`
1. [苏新皓甘拜铲丝下风](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E7%94%98%E6%8B%9C%E9%93%B2%E4%B8%9D%E4%B8%8B%E9%A3%8E%23) `179.2K 🔥` `NEW`
1. [人际关系处不长久的原因找到了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E9%99%85%E5%85%B3%E7%B3%BB%E5%A4%84%E4%B8%8D%E9%95%BF%E4%B9%85%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `178.8K 🔥` `NEW`
1. [影视飓风发十周年激励金](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E5%8F%91%E5%8D%81%E5%91%A8%E5%B9%B4%E6%BF%80%E5%8A%B1%E9%87%91%23) `174.4K 🔥` `NEW`
1. [AI故事讲不下去了吗](https://s.weibo.com/weibo?q=%23AI%E6%95%85%E4%BA%8B%E8%AE%B2%E4%B8%8D%E4%B8%8B%E5%8E%BB%E4%BA%86%E5%90%97%23) `173.9K 🔥` `NEW`
1. [官方通报乒乓球运动员挥拳击打对手](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B9%92%E4%B9%93%E7%90%83%E8%BF%90%E5%8A%A8%E5%91%98%E6%8C%A5%E6%8B%B3%E5%87%BB%E6%89%93%E5%AF%B9%E6%89%8B%23) `876.7K 🔥` `+169%`
1. [制胜预告片震撼首发](https://s.weibo.com/weibo?q=%23%E5%88%B6%E8%83%9C%E9%A2%84%E5%91%8A%E7%89%87%E9%9C%87%E6%92%BC%E9%A6%96%E5%8F%91%23) `706.2K 🔥` `+71%`
1. [奇瑞捷豹路虎神行者8首车下线 (Chery Jaguar Land Rover Freelander 8 rolls off production line)](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E%E6%8D%B7%E8%B1%B9%E8%B7%AF%E8%99%8E%E7%A5%9E%E8%A1%8C%E8%80%858%E9%A6%96%E8%BD%A6%E4%B8%8B%E7%BA%BF%23) `677.3K 🔥` `+291%`
1. [小区电梯失控从31楼下坠到负2楼 (The elevator in the community lost control and fell from the 31st floor to the negative 2nd floor.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E7%94%B5%E6%A2%AF%E5%A4%B1%E6%8E%A7%E4%BB%8E31%E6%A5%BC%E4%B8%8B%E5%9D%A0%E5%88%B0%E8%B4%9F2%E6%A5%BC%23) `581.6K 🔥` `+87%`
1. [不要被人当五折券用 (Don't be used as a 50% off coupon)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%A2%AB%E4%BA%BA%E5%BD%93%E4%BA%94%E6%8A%98%E5%88%B8%E7%94%A8%23) `210.8K 🔥` `+116%`
1. [不抠字眼是一种认知高的表现](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%8A%A0%E5%AD%97%E7%9C%BC%E6%98%AF%E4%B8%80%E7%A7%8D%E8%AE%A4%E7%9F%A5%E9%AB%98%E7%9A%84%E8%A1%A8%E7%8E%B0%23) `204.4K 🔥` `+121%`
1. [张泽禹道歉 (Zhang Zeyu apologizes)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%BD%E7%A6%B9%E9%81%93%E6%AD%89%23) `195.9K 🔥` `+95%`
1. [央视3分钟评上汽MG新能源技术 (CCTV 3-minute review of SAIC MG’s new energy technology)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%863%E5%88%86%E9%92%9F%E8%AF%84%E4%B8%8A%E6%B1%BDMG%E6%96%B0%E8%83%BD%E6%BA%90%E6%8A%80%E6%9C%AF%23) `194.8K 🔥` `+223%`
1. [当两个老头彼此是对方世界的全部](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%B8%A4%E4%B8%AA%E8%80%81%E5%A4%B4%E5%BD%BC%E6%AD%A4%E6%98%AF%E5%AF%B9%E6%96%B9%E4%B8%96%E7%95%8C%E7%9A%84%E5%85%A8%E9%83%A8%23) `189.6K 🔥` `+218%`
1. [保姆因不能生育拐走雇主家10月大男婴](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E5%9B%A0%E4%B8%8D%E8%83%BD%E7%94%9F%E8%82%B2%E6%8B%90%E8%B5%B0%E9%9B%87%E4%B8%BB%E5%AE%B610%E6%9C%88%E5%A4%A7%E7%94%B7%E5%A9%B4%23) `188.4K 🔥` `+200%`
1. [已经忘了微信是怎么取代QQ的了 (I have forgotten how WeChat replaced QQ)](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E5%BF%98%E4%BA%86%E5%BE%AE%E4%BF%A1%E6%98%AF%E6%80%8E%E4%B9%88%E5%8F%96%E4%BB%A3QQ%E7%9A%84%E4%BA%86%23) `187.6K 🔥` `+119%`
1. [自家冰箱里拿出来的雪糕不要着急吃 (Don’t be in a hurry to eat the ice cream you took out of your refrigerator)](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%AE%B6%E5%86%B0%E7%AE%B1%E9%87%8C%E6%8B%BF%E5%87%BA%E6%9D%A5%E7%9A%84%E9%9B%AA%E7%B3%95%E4%B8%8D%E8%A6%81%E7%9D%80%E6%80%A5%E5%90%83%23) `182.7K 🔥` `+153%`
1. [司晓迪反复碰瓷艺人收割流量该管了 (Si Xiaodi repeatedly touched the porcelain artist and harvested traffic. It’s time to control it.)](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%99%93%E8%BF%AA%E5%8F%8D%E5%A4%8D%E7%A2%B0%E7%93%B7%E8%89%BA%E4%BA%BA%E6%94%B6%E5%89%B2%E6%B5%81%E9%87%8F%E8%AF%A5%E7%AE%A1%E4%BA%86%23) `181.5K 🔥` `+165%`
1. [赛里木湖75元自驾服务费已依法备案](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%9675%E5%85%83%E8%87%AA%E9%A9%BE%E6%9C%8D%E5%8A%A1%E8%B4%B9%E5%B7%B2%E4%BE%9D%E6%B3%95%E5%A4%87%E6%A1%88%23) `177.8K 🔥` `+189%`
1. [周星驰做客董宇辉直播间](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%81%9A%E5%AE%A2%E8%91%A3%E5%AE%87%E8%BE%89%E7%9B%B4%E6%92%AD%E9%97%B4%23) `176.8K 🔥` `+184%`
1. [蜘蛛侠4 (spider man 4)](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A04%23) `176.0K 🔥` `+201%`
1. [网友曝胖东来直饮水成免费取水点](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%9B%9D%E8%83%96%E4%B8%9C%E6%9D%A5%E7%9B%B4%E9%A5%AE%E6%B0%B4%E6%88%90%E5%85%8D%E8%B4%B9%E5%8F%96%E6%B0%B4%E7%82%B9%23) `567.5K 🔥`
1. [十日终焉杀青出现了血月](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E6%9D%80%E9%9D%92%E5%87%BA%E7%8E%B0%E4%BA%86%E8%A1%80%E6%9C%88%23) `207.0K 🔥`
1. [保安与业主冲突后摔下楼梯身亡](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%AE%89%E4%B8%8E%E4%B8%9A%E4%B8%BB%E5%86%B2%E7%AA%81%E5%90%8E%E6%91%94%E4%B8%8B%E6%A5%BC%E6%A2%AF%E8%BA%AB%E4%BA%A1%23) `200.8K 🔥`
1. [日本在731这天成立新特高课其心可诛 (Japan set up a new special higher education course on July 31, which is a shame.)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%A8731%E8%BF%99%E5%A4%A9%E6%88%90%E7%AB%8B%E6%96%B0%E7%89%B9%E9%AB%98%E8%AF%BE%E5%85%B6%E5%BF%83%E5%8F%AF%E8%AF%9B%23) `198.5K 🔥`
1. [白鹿也太偶像剧了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B9%9F%E5%A4%AA%E5%81%B6%E5%83%8F%E5%89%A7%E4%BA%86%23) `186.3K 🔥`
1. [美联储宣布维持利率不变 (Fed announces keeping interest rates unchanged)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E5%AE%A3%E5%B8%83%E7%BB%B4%E6%8C%81%E5%88%A9%E7%8E%87%E4%B8%8D%E5%8F%98%23) `213.4K 🔥` `-71%`
1. [千万不要把手机交给商家写好评](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E6%89%8B%E6%9C%BA%E4%BA%A4%E7%BB%99%E5%95%86%E5%AE%B6%E5%86%99%E5%A5%BD%E8%AF%84%23) `204.9K 🔥` `-36%`
1. [修杰楷开庭认罪请求缓刑](https://s.weibo.com/weibo?q=%23%E4%BF%AE%E6%9D%B0%E6%A5%B7%E5%BC%80%E5%BA%AD%E8%AE%A4%E7%BD%AA%E8%AF%B7%E6%B1%82%E7%BC%93%E5%88%91%23) `200.3K 🔥` `-42%`
1. [李佳薇方要求周锐公开道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E8%96%87%E6%96%B9%E8%A6%81%E6%B1%82%E5%91%A8%E9%94%90%E5%85%AC%E5%BC%80%E9%81%93%E6%AD%89%23) `183.7K 🔥` `-37%`

Updated at 2026-07-30 08:12:30

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
