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

1. [美议员称外星人已与人类接触 (US congressman says aliens have made contact with humans)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%AE%AE%E5%91%98%E7%A7%B0%E5%A4%96%E6%98%9F%E4%BA%BA%E5%B7%B2%E4%B8%8E%E4%BA%BA%E7%B1%BB%E6%8E%A5%E8%A7%A6%23) `803.9K 🔥` `NEW`
1. [冰湖重生淳儿受辱戏](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E6%B7%B3%E5%84%BF%E5%8F%97%E8%BE%B1%E6%88%8F%23) `335.2K 🔥` `NEW`
1. [向鹏止步太原站男单首轮](https://s.weibo.com/weibo?q=%23%E5%90%91%E9%B9%8F%E6%AD%A2%E6%AD%A5%E5%A4%AA%E5%8E%9F%E7%AB%99%E7%94%B7%E5%8D%95%E9%A6%96%E8%BD%AE%23) `197.3K 🔥` `NEW`
1. [外交部再回应特朗普关税言论](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%86%8D%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E5%85%B3%E7%A8%8E%E8%A8%80%E8%AE%BA%23) `197.3K 🔥` `NEW`
1. [张萌曾考虑换脸黄杨钿甜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E6%9B%BE%E8%80%83%E8%99%91%E6%8D%A2%E8%84%B8%E9%BB%84%E6%9D%A8%E9%92%BF%E7%94%9C%23) `197.3K 🔥` `NEW`
1. [文章开饭店了](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E5%BC%80%E9%A5%AD%E5%BA%97%E4%BA%86%23) `95.8K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `94.9K 🔥` `NEW`
1. [李纯马頔不办婚礼不拍婚纱照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BA%AF%E9%A9%AC%E9%A0%94%E4%B8%8D%E5%8A%9E%E5%A9%9A%E7%A4%BC%E4%B8%8D%E6%8B%8D%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `87.9K 🔥` `NEW`
1. [一杯咸奶茶相当于直接吃下一块腐乳](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9D%AF%E5%92%B8%E5%A5%B6%E8%8C%B6%E7%9B%B8%E5%BD%93%E4%BA%8E%E7%9B%B4%E6%8E%A5%E5%90%83%E4%B8%8B%E4%B8%80%E5%9D%97%E8%85%90%E4%B9%B3%23) `83.1K 🔥` `NEW`
1. [江淮汽车3月销量2.91万辆](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B7%AE%E6%B1%BD%E8%BD%A63%E6%9C%88%E9%94%80%E9%87%8F2.91%E4%B8%87%E8%BE%86%23) `76.1K 🔥` `NEW`
1. [薛之谦青岛抢票 (Joker Xue Qingdao tickets)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E9%9D%92%E5%B2%9B%E6%8A%A2%E7%A5%A8%23) `74.8K 🔥` `NEW`
1. [树藤因能荡秋千走红被蒙面人砍断](https://s.weibo.com/weibo?q=%23%E6%A0%91%E8%97%A4%E5%9B%A0%E8%83%BD%E8%8D%A1%E7%A7%8B%E5%8D%83%E8%B5%B0%E7%BA%A2%E8%A2%AB%E8%92%99%E9%9D%A2%E4%BA%BA%E7%A0%8D%E6%96%AD%23) `73.6K 🔥` `NEW`
1. [霍思燕的另一只狗也夺冠了](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E7%9A%84%E5%8F%A6%E4%B8%80%E5%8F%AA%E7%8B%97%E4%B9%9F%E5%A4%BA%E5%86%A0%E4%BA%86%23) `73.6K 🔥` `NEW`
1. [70岁追星奶奶勇闯短剧圈](https://s.weibo.com/weibo?q=%2370%E5%B2%81%E8%BF%BD%E6%98%9F%E5%A5%B6%E5%A5%B6%E5%8B%87%E9%97%AF%E7%9F%AD%E5%89%A7%E5%9C%88%23) `73.5K 🔥` `NEW`
1. [81岁的潘迎紫](https://s.weibo.com/weibo?q=%2381%E5%B2%81%E7%9A%84%E6%BD%98%E8%BF%8E%E7%B4%AB%23) `71.5K 🔥` `NEW`
1. [武汉暴雨大桥再现雨帘瀑布](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E6%9A%B4%E9%9B%A8%E5%A4%A7%E6%A1%A5%E5%86%8D%E7%8E%B0%E9%9B%A8%E5%B8%98%E7%80%91%E5%B8%83%23) `71.2K 🔥` `NEW`
1. [小猫不要吃草莓](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%B8%8D%E8%A6%81%E5%90%83%E8%8D%89%E8%8E%93%23) `70.9K 🔥` `NEW`
1. [女子空腹半斤蓝莓连吃两天患胃石症](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A9%BA%E8%85%B9%E5%8D%8A%E6%96%A4%E8%93%9D%E8%8E%93%E8%BF%9E%E5%90%83%E4%B8%A4%E5%A4%A9%E6%82%A3%E8%83%83%E7%9F%B3%E7%97%87%23) `69.4K 🔥` `NEW`
1. [爷爷卖16000个烧饼孙女打赏给主播 (Grandpa sold 16,000 sesame seed cakes and granddaughter rewarded the anchor)](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E5%8D%9616000%E4%B8%AA%E7%83%A7%E9%A5%BC%E5%AD%99%E5%A5%B3%E6%89%93%E8%B5%8F%E7%BB%99%E4%B8%BB%E6%92%AD%23) `1.1M 🔥` `+43%`
1. [多次试管流产后夫妻因生育起分歧](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%A1%E8%AF%95%E7%AE%A1%E6%B5%81%E4%BA%A7%E5%90%8E%E5%A4%AB%E5%A6%BB%E5%9B%A0%E7%94%9F%E8%82%B2%E8%B5%B7%E5%88%86%E6%AD%A7%23) `208.6K 🔥` `+60%`
1. [金莎回应质疑](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%9B%9E%E5%BA%94%E8%B4%A8%E7%96%91%23) `197.4K 🔥` `+52%`
1. [最新暴雨强对流预警 (Latest heavy rain and severe convection warning)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E6%96%B0%E6%9A%B4%E9%9B%A8%E5%BC%BA%E5%AF%B9%E6%B5%81%E9%A2%84%E8%AD%A6%23) `610.0K 🔥`
1. [女孩玩拼豆不幸触电离世 (Girl dies after being electrocuted while playing Pinto)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%8E%A9%E6%8B%BC%E8%B1%86%E4%B8%8D%E5%B9%B8%E8%A7%A6%E7%94%B5%E7%A6%BB%E4%B8%96%23) `151.5K 🔥`
1. [黄金再反转](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%86%8D%E5%8F%8D%E8%BD%AC%23) `112.3K 🔥`
1. [胃癌真的是拖出来的](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E7%9C%9F%E7%9A%84%E6%98%AF%E6%8B%96%E5%87%BA%E6%9D%A5%E7%9A%84%23) `110.5K 🔥`
1. [迟重瑞现身陈丽华告别仪式 (Chi Chongrui appeared at Chan Laiwa's farewell ceremony)](https://s.weibo.com/weibo?q=%23%E8%BF%9F%E9%87%8D%E7%91%9E%E7%8E%B0%E8%BA%AB%E9%99%88%E4%B8%BD%E5%8D%8E%E5%91%8A%E5%88%AB%E4%BB%AA%E5%BC%8F%23) `80.8K 🔥`
1. [瘫痪女孩误买邓紫棋演唱会票平台拒退](https://s.weibo.com/weibo?q=%23%E7%98%AB%E7%97%AA%E5%A5%B3%E5%AD%A9%E8%AF%AF%E4%B9%B0%E9%82%93%E7%B4%AB%E6%A3%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E5%B9%B3%E5%8F%B0%E6%8B%92%E9%80%80%23) `472.2K 🔥` `-22%`
1. [男子被保时捷车主当交警面威胁](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E4%BF%9D%E6%97%B6%E6%8D%B7%E8%BD%A6%E4%B8%BB%E5%BD%93%E4%BA%A4%E8%AD%A6%E9%9D%A2%E5%A8%81%E8%83%81%23) `229.8K 🔥` `-78%`
1. [辛芷蕾大众汽车焕新代言人](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%A4%A7%E4%BC%97%E6%B1%BD%E8%BD%A6%E7%84%95%E6%96%B0%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `221.7K 🔥` `-35%`
1. [美国的停火谈判被以色列加了备注 (U.S. ceasefire talks were remarked by Israel)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%9A%84%E5%81%9C%E7%81%AB%E8%B0%88%E5%88%A4%E8%A2%AB%E4%BB%A5%E8%89%B2%E5%88%97%E5%8A%A0%E4%BA%86%E5%A4%87%E6%B3%A8%23) `197.3K 🔥` `-59%`
1. [民勤种树女生遭恶意凝视引众怒](https://s.weibo.com/weibo?q=%23%E6%B0%91%E5%8B%A4%E7%A7%8D%E6%A0%91%E5%A5%B3%E7%94%9F%E9%81%AD%E6%81%B6%E6%84%8F%E5%87%9D%E8%A7%86%E5%BC%95%E4%BC%97%E6%80%92%23) `144.3K 🔥` `-25%`
1. [伊朗外长说美国必须二选一](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E8%AF%B4%E7%BE%8E%E5%9B%BD%E5%BF%85%E9%A1%BB%E4%BA%8C%E9%80%89%E4%B8%80%23) `121.7K 🔥` `-29%`
1. [张萌曾找过楚乔传原班人马](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E6%9B%BE%E6%89%BE%E8%BF%87%E6%A5%9A%E4%B9%94%E4%BC%A0%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `121.0K 🔥` `-38%`
1. [中国军队有足够的能力反制威胁挑衅](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E9%98%9F%E6%9C%89%E8%B6%B3%E5%A4%9F%E7%9A%84%E8%83%BD%E5%8A%9B%E5%8F%8D%E5%88%B6%E5%A8%81%E8%83%81%E6%8C%91%E8%A1%85%23) `105.6K 🔥` `-49%`
1. [重生之我是Hero久诚 (Rebirth: I am Hero Jiucheng)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E7%94%9F%E4%B9%8B%E6%88%91%E6%98%AFHero%E4%B9%85%E8%AF%9A%23) `96.0K 🔥` `-51%`
1. [金莎孙丞潇领证 (Jinsha Sun Chengxiao receives the certificate)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E9%A2%86%E8%AF%81%23) `95.7K 🔥` `-30%`
1. [papi酱已退出papitube](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E5%B7%B2%E9%80%80%E5%87%BApapitube%23) `91.9K 🔥` `-31%`
1. [权志龙收入曝光](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99%E6%94%B6%E5%85%A5%E6%9B%9D%E5%85%89%23) `90.4K 🔥` `-26%`
1. [35岁孕妇吃冰箱剩菜后去世](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%AD%95%E5%A6%87%E5%90%83%E5%86%B0%E7%AE%B1%E5%89%A9%E8%8F%9C%E5%90%8E%E5%8E%BB%E4%B8%96%23) `88.4K 🔥` `-30%`
1. [曝当红男艺人曾阻止男二出席剧宣](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BD%93%E7%BA%A2%E7%94%B7%E8%89%BA%E4%BA%BA%E6%9B%BE%E9%98%BB%E6%AD%A2%E7%94%B7%E4%BA%8C%E5%87%BA%E5%B8%AD%E5%89%A7%E5%AE%A3%23) `86.3K 🔥` `-33%`
1. [孙杨张豆豆有孩子了 (Sun Yang and Zhang Doudou have a child)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23) `82.3K 🔥` `-39%`
1. [新娘准备入场大妈想抢喜被摁住](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%87%86%E5%A4%87%E5%85%A5%E5%9C%BA%E5%A4%A7%E5%A6%88%E6%83%B3%E6%8A%A2%E5%96%9C%E8%A2%AB%E6%91%81%E4%BD%8F%23) `76.1K 🔥` `-26%`
1. [金子涵直播疑似求救 (Jin Jinhan's live broadcast is suspected of asking for help)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E7%9B%B4%E6%92%AD%E7%96%91%E4%BC%BC%E6%B1%82%E6%95%91%23) `76.1K 🔥` `-36%`
1. [霍思燕回应爱犬在泰国夺冠 (Huo Siyan responded to her dog winning the championship in Thailand)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E5%9B%9E%E5%BA%94%E7%88%B1%E7%8A%AC%E5%9C%A8%E6%B3%B0%E5%9B%BD%E5%A4%BA%E5%86%A0%23) `76.1K 🔥` `-43%`
1. [迪丽热巴不知道市面上有什么剧本](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%8D%E7%9F%A5%E9%81%93%E5%B8%82%E9%9D%A2%E4%B8%8A%E6%9C%89%E4%BB%80%E4%B9%88%E5%89%A7%E6%9C%AC%23) `75.0K 🔥` `-29%`
1. [等我老了才不会玩这些梗](https://s.weibo.com/weibo?q=%23%E7%AD%89%E6%88%91%E8%80%81%E4%BA%86%E6%89%8D%E4%B8%8D%E4%BC%9A%E7%8E%A9%E8%BF%99%E4%BA%9B%E6%A2%97%23) `73.7K 🔥` `-23%`
1. [金子涵称后脑勺伤疤是植发手术留下的 (Jin Jinhan said the scar on the back of his head was caused by hair transplant surgery)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E7%A7%B0%E5%90%8E%E8%84%91%E5%8B%BA%E4%BC%A4%E7%96%A4%E6%98%AF%E6%A4%8D%E5%8F%91%E6%89%8B%E6%9C%AF%E7%95%99%E4%B8%8B%E7%9A%84%23) `73.7K 🔥` `-26%`
1. [张予曦毕雯珺合伙人海报站位](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%AF%95%E9%9B%AF%E7%8F%BA%E5%90%88%E4%BC%99%E4%BA%BA%E6%B5%B7%E6%8A%A5%E7%AB%99%E4%BD%8D%23) `73.5K 🔥` `-26%`
1. [郑合惠子签约杨幂新公司](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E7%AD%BE%E7%BA%A6%E6%9D%A8%E5%B9%82%E6%96%B0%E5%85%AC%E5%8F%B8%23) `71.2K 🔥` `-43%`
1. [猫咪掉进百斤酒缸捞出后已快断片 (The cat fell into a 100-pound wine vat and was almost in pieces after being fished out)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E6%8E%89%E8%BF%9B%E7%99%BE%E6%96%A4%E9%85%92%E7%BC%B8%E6%8D%9E%E5%87%BA%E5%90%8E%E5%B7%B2%E5%BF%AB%E6%96%AD%E7%89%87%23) `70.1K 🔥` `-24%`
1. [中方表态伊朗称停火条款遭破坏](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E8%A1%A8%E6%80%81%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%81%9C%E7%81%AB%E6%9D%A1%E6%AC%BE%E9%81%AD%E7%A0%B4%E5%9D%8F%23) `69.5K 🔥` `-23%`

Updated at 2026-04-09 18:49:45

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
