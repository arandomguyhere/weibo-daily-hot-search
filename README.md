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

1. [张杰热血开场 (Zhang Jie's passionate opening)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E7%83%AD%E8%A1%80%E5%BC%80%E5%9C%BA%23) `15.2K 🔥` `NEW`
1. [天才游戏票房破3000万](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E6%B8%B8%E6%88%8F%E7%A5%A8%E6%88%BF%E7%A0%B43000%E4%B8%87%23) `43.2K 🔥` `-71%`
1. [老夫妻近3万买戒指后被店家跟踪](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%AB%E5%A6%BB%E8%BF%913%E4%B8%87%E4%B9%B0%E6%88%92%E6%8C%87%E5%90%8E%E8%A2%AB%E5%BA%97%E5%AE%B6%E8%B7%9F%E8%B8%AA%23) `36.6K 🔥` `-27%`
1. [清明假期预计跨区域流动8.4亿人次 (An estimated 840 million people will move across regions during the Tomb Sweeping Day holiday)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E5%81%87%E6%9C%9F%E9%A2%84%E8%AE%A1%E8%B7%A8%E5%8C%BA%E5%9F%9F%E6%B5%81%E5%8A%A88.4%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `29.3K 🔥` `-66%`
1. [伊朗拒绝停火强调须永久结束战争 (Iran rejects ceasefire, stresses need to permanently end war)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8B%92%E7%BB%9D%E5%81%9C%E7%81%AB%E5%BC%BA%E8%B0%83%E9%A1%BB%E6%B0%B8%E4%B9%85%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%23) `28.9K 🔥` `-59%`
1. [香港飞香港的航班 (flights from Hong Kong to Hong Kong)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%A3%9E%E9%A6%99%E6%B8%AF%E7%9A%84%E8%88%AA%E7%8F%AD%23) `27.9K 🔥` `-74%`
1. [14枚导弹命中以色列人口密集区 (14 missiles hit densely populated areas of Israel)](https://s.weibo.com/weibo?q=%2314%E6%9E%9A%E5%AF%BC%E5%BC%B9%E5%91%BD%E4%B8%AD%E4%BB%A5%E8%89%B2%E5%88%97%E4%BA%BA%E5%8F%A3%E5%AF%86%E9%9B%86%E5%8C%BA%23) `27.9K 🔥` `-42%`
1. [安徽女童失联地后面是一片田地](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E5%A5%B3%E7%AB%A5%E5%A4%B1%E8%81%94%E5%9C%B0%E5%90%8E%E9%9D%A2%E6%98%AF%E4%B8%80%E7%89%87%E7%94%B0%E5%9C%B0%23) `27.8K 🔥` `-39%`
1. [我竟然在看到礼物的一瞬间对比价格](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%AB%9F%E7%84%B6%E5%9C%A8%E7%9C%8B%E5%88%B0%E7%A4%BC%E7%89%A9%E7%9A%84%E4%B8%80%E7%9E%AC%E9%97%B4%E5%AF%B9%E6%AF%94%E4%BB%B7%E6%A0%BC%23) `25.7K 🔥` `-24%`
1. [父亲问儿子要2000元投资款被拒](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E9%97%AE%E5%84%BF%E5%AD%90%E8%A6%812000%E5%85%83%E6%8A%95%E8%B5%84%E6%AC%BE%E8%A2%AB%E6%8B%92%23) `23.8K 🔥` `-25%`
1. [莫氏鸡煲被传遭文旅施压开门营业](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%A2%AB%E4%BC%A0%E9%81%AD%E6%96%87%E6%97%85%E6%96%BD%E5%8E%8B%E5%BC%80%E9%97%A8%E8%90%A5%E4%B8%9A%23) `21.5K 🔥` `-40%`
1. [美军运输机残骸中发现一美士兵遗体 (Body of an American soldier found in the wreckage of a US military transport plane)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%BF%90%E8%BE%93%E6%9C%BA%E6%AE%8B%E9%AA%B8%E4%B8%AD%E5%8F%91%E7%8E%B0%E4%B8%80%E7%BE%8E%E5%A3%AB%E5%85%B5%E9%81%97%E4%BD%93%23) `21.2K 🔥` `-32%`
1. [何炅谢娜李维嘉KTV照](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E8%B0%A2%E5%A8%9C%E6%9D%8E%E7%BB%B4%E5%98%89KTV%E7%85%A7%23) `21.0K 🔥` `-32%`
1. [文章和女儿合照被说像明星](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E5%92%8C%E5%A5%B3%E5%84%BF%E5%90%88%E7%85%A7%E8%A2%AB%E8%AF%B4%E5%83%8F%E6%98%8E%E6%98%9F%23) `20.8K 🔥` `-32%`
1. [被大冰断家务事的三观给征服](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A4%A7%E5%86%B0%E6%96%AD%E5%AE%B6%E5%8A%A1%E4%BA%8B%E7%9A%84%E4%B8%89%E8%A7%82%E7%BB%99%E5%BE%81%E6%9C%8D%23) `20.6K 🔥` `-30%`
1. [伊朗的棋越下越大 (Iran's chess moves are getting bigger and bigger)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E6%A3%8B%E8%B6%8A%E4%B8%8B%E8%B6%8A%E5%A4%A7%23) `20.1K 🔥` `-31%`
1. [曝柠萌影视怕剧本写完檀健次不演](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%A0%E8%90%8C%E5%BD%B1%E8%A7%86%E6%80%95%E5%89%A7%E6%9C%AC%E5%86%99%E5%AE%8C%E6%AA%80%E5%81%A5%E6%AC%A1%E4%B8%8D%E6%BC%94%23) `20.0K 🔥` `-32%`
1. [曾舜晞陈都灵角色cp超话登顶](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E9%99%88%E9%83%BD%E7%81%B5%E8%A7%92%E8%89%B2cp%E8%B6%85%E8%AF%9D%E7%99%BB%E9%A1%B6%23) `19.5K 🔥` `-31%`
1. [伊朗就美国提议作出回应](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B0%B1%E7%BE%8E%E5%9B%BD%E6%8F%90%E8%AE%AE%E4%BD%9C%E5%87%BA%E5%9B%9E%E5%BA%94%23) `19.4K 🔥` `-29%`
1. [王濛 别让武将干这个](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E5%88%AB%E8%AE%A9%E6%AD%A6%E5%B0%86%E5%B9%B2%E8%BF%99%E4%B8%AA%23) `19.2K 🔥` `-31%`
1. [一世鹰名毁于伊弹](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%96%E9%B9%B0%E5%90%8D%E6%AF%81%E4%BA%8E%E4%BC%8A%E5%BC%B9%23) `19.0K 🔥` `-30%`
1. [i人佟丽娅生了个e人儿子 (i person Tong Liya gave birth to an e person son)](https://s.weibo.com/weibo?q=%23i%E4%BA%BA%E4%BD%9F%E4%B8%BD%E5%A8%85%E7%94%9F%E4%BA%86%E4%B8%AAe%E4%BA%BA%E5%84%BF%E5%AD%90%23) `19.0K 🔥` `-30%`
1. [卫生巾或通过减量不加价隐性涨价](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E6%88%96%E9%80%9A%E8%BF%87%E5%87%8F%E9%87%8F%E4%B8%8D%E5%8A%A0%E4%BB%B7%E9%9A%90%E6%80%A7%E6%B6%A8%E4%BB%B7%23) `19.0K 🔥` `-30%`
1. [中国男生在宿舍做的风铃在iG上爆火 (The wind chime made by Chinese boys in the dormitory went viral on iG)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%94%9F%E5%9C%A8%E5%AE%BF%E8%88%8D%E5%81%9A%E7%9A%84%E9%A3%8E%E9%93%83%E5%9C%A8iG%E4%B8%8A%E7%88%86%E7%81%AB%23) `19.0K 🔥` `-30%`
1. [今年白玉兰视帝入围预测](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%B8%9D%E5%85%A5%E5%9B%B4%E9%A2%84%E6%B5%8B%23) `18.5K 🔥` `-32%`
1. [猎罪图鉴 (Hunting crime illustrated book)](https://s.weibo.com/weibo?q=%23%E7%8C%8E%E7%BD%AA%E5%9B%BE%E9%89%B4%23) `18.5K 🔥` `-32%`
1. [伊朗导弹密集突破以色列防空 (Iranian missiles penetrate Israeli air defenses intensively)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%AF%86%E9%9B%86%E7%AA%81%E7%A0%B4%E4%BB%A5%E8%89%B2%E5%88%97%E9%98%B2%E7%A9%BA%23) `17.7K 🔥` `-35%`
1. [伊朗回应美方停战提议 (Iran responds to US ceasefire proposal)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9B%9E%E5%BA%94%E7%BE%8E%E6%96%B9%E5%81%9C%E6%88%98%E6%8F%90%E8%AE%AE%23) `17.5K 🔥` `-35%`
1. [家事法庭](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%BA%8B%E6%B3%95%E5%BA%AD%23) `17.3K 🔥` `-36%`
1. [伊发动第98波攻势](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%8F%91%E5%8A%A8%E7%AC%AC98%E6%B3%A2%E6%94%BB%E5%8A%BF%23) `17.1K 🔥` `-37%`
1. [早点吃晚餐有多重要 (How important is it to have an early dinner?)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%82%B9%E5%90%83%E6%99%9A%E9%A4%90%E6%9C%89%E5%A4%9A%E9%87%8D%E8%A6%81%23) `16.7K 🔥` `-38%`
1. [易中天获奖励20万元](https://s.weibo.com/weibo?q=%23%E6%98%93%E4%B8%AD%E5%A4%A9%E8%8E%B7%E5%A5%96%E5%8A%B120%E4%B8%87%E5%85%83%23) `16.2K 🔥` `-40%`
1. [男子故意绊服务员面汤洒顾客身上](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%95%85%E6%84%8F%E7%BB%8A%E6%9C%8D%E5%8A%A1%E5%91%98%E9%9D%A2%E6%B1%A4%E6%B4%92%E9%A1%BE%E5%AE%A2%E8%BA%AB%E4%B8%8A%23) `15.7K 🔥` `-42%`
1. [美宇航员太空中意外半裸出镜](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%87%E8%88%AA%E5%91%98%E5%A4%AA%E7%A9%BA%E4%B8%AD%E6%84%8F%E5%A4%96%E5%8D%8A%E8%A3%B8%E5%87%BA%E9%95%9C%23) `15.6K 🔥` `-42%`
1. [伊朗称美营救行动或为窃取浓缩铀](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E8%90%A5%E6%95%91%E8%A1%8C%E5%8A%A8%E6%88%96%E4%B8%BA%E7%AA%83%E5%8F%96%E6%B5%93%E7%BC%A9%E9%93%80%23) `15.5K 🔥` `-69%`
1. [Angelababy家里摆满了粉丝的礼物](https://s.weibo.com/weibo?q=%23Angelababy%E5%AE%B6%E9%87%8C%E6%91%86%E6%BB%A1%E4%BA%86%E7%B2%89%E4%B8%9D%E7%9A%84%E7%A4%BC%E7%89%A9%23) `15.2K 🔥` `-44%`
1. [代斯发了和张月陈瑶徐梦洁合照](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%96%AF%E5%8F%91%E4%BA%86%E5%92%8C%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%E5%BE%90%E6%A2%A6%E6%B4%81%E5%90%88%E7%85%A7%23) `15.2K 🔥` `-44%`
1. [伊能静曝和秦昊结婚原因](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E6%9B%9D%E5%92%8C%E7%A7%A6%E6%98%8A%E7%BB%93%E5%A9%9A%E5%8E%9F%E5%9B%A0%23) `15.2K 🔥` `-44%`
1. [伊朗打击美军的黎波里号两栖攻击舰 (Iran attacks US amphibious assault ship USS Tripoli)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%E7%9A%84%E9%BB%8E%E6%B3%A2%E9%87%8C%E5%8F%B7%E4%B8%A4%E6%A0%96%E6%94%BB%E5%87%BB%E8%88%B0%23) `15.2K 🔥` `-44%`
1. [徒弟说贺娇龙去世时才40公斤](https://s.weibo.com/weibo?q=%23%E5%BE%92%E5%BC%9F%E8%AF%B4%E8%B4%BA%E5%A8%87%E9%BE%99%E5%8E%BB%E4%B8%96%E6%97%B6%E6%89%8D40%E5%85%AC%E6%96%A4%23) `15.2K 🔥` `-44%`
1. [蔡徐坤演唱会中场休息不到30秒 (The intermission at Cai Xukun’s concert was less than 30 seconds)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%AD%E5%9C%BA%E4%BC%91%E6%81%AF%E4%B8%8D%E5%88%B030%E7%A7%92%23) `15.2K 🔥` `-44%`
1. [热巴贺思慕腾讯首个破2亿女性角色](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E8%B4%BA%E6%80%9D%E6%85%95%E8%85%BE%E8%AE%AF%E9%A6%96%E4%B8%AA%E7%A0%B42%E4%BA%BF%E5%A5%B3%E6%80%A7%E8%A7%92%E8%89%B2%23) `15.2K 🔥` `-44%`
1. [伊朗发动第97波打击 (Iran launches 97th wave of strikes)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%8A%A8%E7%AC%AC97%E6%B3%A2%E6%89%93%E5%87%BB%23) `15.2K 🔥` `-44%`
1. [女孩趁妈妈吹头发横穿马路被车撞倒 (Girl was hit by a car while her mother was blowing her hair while she was crossing the road)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%B6%81%E5%A6%88%E5%A6%88%E5%90%B9%E5%A4%B4%E5%8F%91%E6%A8%AA%E7%A9%BF%E9%A9%AC%E8%B7%AF%E8%A2%AB%E8%BD%A6%E6%92%9E%E5%80%92%23) `15.2K 🔥` `-44%`
1. [鞠婧祎陈都灵 我是姐姐亲手养大的](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E9%99%88%E9%83%BD%E7%81%B5%20%E6%88%91%E6%98%AF%E5%A7%90%E5%A7%90%E4%BA%B2%E6%89%8B%E5%85%BB%E5%A4%A7%E7%9A%84%23) `15.2K 🔥` `-44%`
1. [许昕说我会回国家队](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E8%AF%B4%E6%88%91%E4%BC%9A%E5%9B%9E%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `15.2K 🔥` `-44%`
1. [龚俊方发维权声明](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E6%96%B9%E5%8F%91%E7%BB%B4%E6%9D%83%E5%A3%B0%E6%98%8E%23) `15.2K 🔥` `-44%`
1. [阿尔忒弥斯2号任务绕月返回轨道解析](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E5%BF%92%E5%BC%A5%E6%96%AF2%E5%8F%B7%E4%BB%BB%E5%8A%A1%E7%BB%95%E6%9C%88%E8%BF%94%E5%9B%9E%E8%BD%A8%E9%81%93%E8%A7%A3%E6%9E%90%23) `15.2K 🔥` `-70%`
1. [时代峰峻的销冠都在这了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E7%9A%84%E9%94%80%E5%86%A0%E9%83%BD%E5%9C%A8%E8%BF%99%E4%BA%86%23) `15.2K 🔥` `-44%`
1. [孙颖莎长文总结世界杯](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%95%BF%E6%96%87%E6%80%BB%E7%BB%93%E4%B8%96%E7%95%8C%E6%9D%AF%23) `15.2K 🔥` `-44%`

Updated at 2026-04-07 03:37:37

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
