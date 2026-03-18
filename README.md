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

1. [南京地铁 (Nanjing Metro)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%9C%B0%E9%93%81%23) `776.8K 🔥` `NEW`
1. [微信能折叠发图了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%83%BD%E6%8A%98%E5%8F%A0%E5%8F%91%E5%9B%BE%E4%BA%86%23) `272.3K 🔥` `NEW`
1. [网传当年不肯嫁东风在接触杨紫](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BD%93%E5%B9%B4%E4%B8%8D%E8%82%AF%E5%AB%81%E4%B8%9C%E9%A3%8E%E5%9C%A8%E6%8E%A5%E8%A7%A6%E6%9D%A8%E7%B4%AB%23) `179.8K 🔥` `NEW`
1. [一箱12瓶纯净水每瓶都有针眼](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AE%B112%E7%93%B6%E7%BA%AF%E5%87%80%E6%B0%B4%E6%AF%8F%E7%93%B6%E9%83%BD%E6%9C%89%E9%92%88%E7%9C%BC%23) `179.4K 🔥` `NEW`
1. [逐玉金爷暗恋樊长玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%87%91%E7%88%B7%E6%9A%97%E6%81%8B%E6%A8%8A%E9%95%BF%E7%8E%89%23) `135.6K 🔥` `NEW`
1. [征玉夫妇终于正式圆房](https://s.weibo.com/weibo?q=%23%E5%BE%81%E7%8E%89%E5%A4%AB%E5%A6%87%E7%BB%88%E4%BA%8E%E6%AD%A3%E5%BC%8F%E5%9C%86%E6%88%BF%23) `124.5K 🔥` `NEW`
1. [曼城vs皇马](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8Evs%E7%9A%87%E9%A9%AC%23) `108.5K 🔥` `NEW`
1. [张凌赫演这段前跟导演聊到凌晨三点](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%BC%94%E8%BF%99%E6%AE%B5%E5%89%8D%E8%B7%9F%E5%AF%BC%E6%BC%94%E8%81%8A%E5%88%B0%E5%87%8C%E6%99%A8%E4%B8%89%E7%82%B9%23) `102.1K 🔥` `NEW`
1. [伊朗对美以展开新一阶段强力打击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E7%BE%8E%E4%BB%A5%E5%B1%95%E5%BC%80%E6%96%B0%E4%B8%80%E9%98%B6%E6%AE%B5%E5%BC%BA%E5%8A%9B%E6%89%93%E5%87%BB%23) `101.0K 🔥` `NEW`
1. [金价暴涨的第一批受害者出现了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9A%B4%E6%B6%A8%E7%9A%84%E7%AC%AC%E4%B8%80%E6%89%B9%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `93.3K 🔥` `NEW`
1. [健身房倒闭教练自费上完877节课 (Gym closed down and coach completed 877 classes at his own expense)](https://s.weibo.com/weibo?q=%23%E5%81%A5%E8%BA%AB%E6%88%BF%E5%80%92%E9%97%AD%E6%95%99%E7%BB%83%E8%87%AA%E8%B4%B9%E4%B8%8A%E5%AE%8C877%E8%8A%82%E8%AF%BE%23) `85.5K 🔥` `NEW`
1. [3月的图书馆真的恐怖](https://s.weibo.com/weibo?q=%233%E6%9C%88%E7%9A%84%E5%9B%BE%E4%B9%A6%E9%A6%86%E7%9C%9F%E7%9A%84%E6%81%90%E6%80%96%23) `80.2K 🔥` `NEW`
1. [欧冠](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%23) `72.9K 🔥` `NEW`
1. [中国女足主帅米利西奇离任](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B3%E4%B8%BB%E5%B8%85%E7%B1%B3%E5%88%A9%E8%A5%BF%E5%A5%87%E7%A6%BB%E4%BB%BB%23) `69.8K 🔥` `NEW`
1. [邓凯回应怎么这么窄](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E5%9B%9E%E5%BA%94%E6%80%8E%E4%B9%88%E8%BF%99%E4%B9%88%E7%AA%84%23) `65.9K 🔥` `NEW`
1. [拉里贾尼儿子和副手身亡](https://s.weibo.com/weibo?q=%23%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E5%84%BF%E5%AD%90%E5%92%8C%E5%89%AF%E6%89%8B%E8%BA%AB%E4%BA%A1%23) `65.9K 🔥` `NEW`
1. [钉钉发布企业级AI工作平台悟空](https://s.weibo.com/weibo?q=%23%E9%92%89%E9%92%89%E5%8F%91%E5%B8%83%E4%BC%81%E4%B8%9A%E7%BA%A7AI%E5%B7%A5%E4%BD%9C%E5%B9%B3%E5%8F%B0%E6%82%9F%E7%A9%BA%23) `399.0K 🔥` `+116%`
1. [拉里贾尼与其子死于以军空袭](https://s.weibo.com/weibo?q=%23%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E4%B8%8E%E5%85%B6%E5%AD%90%E6%AD%BB%E4%BA%8E%E4%BB%A5%E5%86%9B%E7%A9%BA%E8%A2%AD%23) `212.0K 🔥` `+49%`
1. [奇瑞犀牛电池360度安全防护](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E%E7%8A%80%E7%89%9B%E7%94%B5%E6%B1%A0360%E5%BA%A6%E5%AE%89%E5%85%A8%E9%98%B2%E6%8A%A4%23) `195.7K 🔥` `+41%`
1. [美国夫妻藏匿190具遗体致腐烂获刑 (American couple jailed for hiding 190 bodies and causing them to rot)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%AB%E5%A6%BB%E8%97%8F%E5%8C%BF190%E5%85%B7%E9%81%97%E4%BD%93%E8%87%B4%E8%85%90%E7%83%82%E8%8E%B7%E5%88%91%23) `195.0K 🔥` `+25%`
1. [多地宣布生物地理不再计入中考总分 (Many places announced that biogeography will no longer be counted in the total score of the high school entrance examination)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%AE%A3%E5%B8%83%E7%94%9F%E7%89%A9%E5%9C%B0%E7%90%86%E4%B8%8D%E5%86%8D%E8%AE%A1%E5%85%A5%E4%B8%AD%E8%80%83%E6%80%BB%E5%88%86%23) `1.1M 🔥`
1. [家电进化开倍速了吗](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E7%94%B5%E8%BF%9B%E5%8C%96%E5%BC%80%E5%80%8D%E9%80%9F%E4%BA%86%E5%90%97%23) `624.4K 🔥`
1. [一人公司爆火银行坐不住了 (One-person company explodes and banks cannot sit still)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%BA%E5%85%AC%E5%8F%B8%E7%88%86%E7%81%AB%E9%93%B6%E8%A1%8C%E5%9D%90%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `150.5K 🔥`
1. [儿童水枪竟从隐私部位喷水 (Children's water gun sprays water from private parts)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E7%AB%A5%E6%B0%B4%E6%9E%AA%E7%AB%9F%E4%BB%8E%E9%9A%90%E7%A7%81%E9%83%A8%E4%BD%8D%E5%96%B7%E6%B0%B4%23) `150.4K 🔥`
1. [吕严说蒋诗萌就是用生酮瘦下来的 (Lu Yan said that Jiang Shimeng lost weight using ketosis)](https://s.weibo.com/weibo?q=%23%E5%90%95%E4%B8%A5%E8%AF%B4%E8%92%8B%E8%AF%97%E8%90%8C%E5%B0%B1%E6%98%AF%E7%94%A8%E7%94%9F%E9%85%AE%E7%98%A6%E4%B8%8B%E6%9D%A5%E7%9A%84%23) `150.0K 🔥`
1. [内塔尼亚胡说拉里贾尼已身亡 (Netanyahu says Larijani is dead)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E8%AF%B4%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E5%B7%B2%E8%BA%AB%E4%BA%A1%23) `149.6K 🔥`
1. [男子遭前同事背调杀月薪降5000 (A man was betrayed by a former colleague and his monthly salary was reduced by 5,000)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%81%AD%E5%89%8D%E5%90%8C%E4%BA%8B%E8%83%8C%E8%B0%83%E6%9D%80%E6%9C%88%E8%96%AA%E9%99%8D5000%23) `149.0K 🔥`
1. [谢征樊长玉圆房吻 (Xie Zheng and Fan Changyu consummate the kiss)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%A8%8A%E9%95%BF%E7%8E%89%E5%9C%86%E6%88%BF%E5%90%BB%23) `148.6K 🔥`
1. [儿媳挪用婆婆900万给姐姐300万遗产 (Daughter-in-law misappropriated 9 million from mother-in-law and gave 3 million inheritance to sister)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AA%B3%E6%8C%AA%E7%94%A8%E5%A9%86%E5%A9%86900%E4%B8%87%E7%BB%99%E5%A7%90%E5%A7%90300%E4%B8%87%E9%81%97%E4%BA%A7%23) `148.4K 🔥`
1. [小巷人家2官宣 (Alley People 2 Official Announcement)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%E5%AE%98%E5%AE%A3%23) `148.0K 🔥`
1. [周杰伦新歌预告 (Jay Chou's new song preview)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E6%AD%8C%E9%A2%84%E5%91%8A%23) `147.9K 🔥`
1. [宝马大降价30万 (BMW cuts price by RMB 300,000)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E9%A9%AC%E5%A4%A7%E9%99%8D%E4%BB%B730%E4%B8%87%23) `140.2K 🔥`
1. [郑恺苗苗公开三胎小女儿](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E8%8B%97%E8%8B%97%E5%85%AC%E5%BC%80%E4%B8%89%E8%83%8E%E5%B0%8F%E5%A5%B3%E5%84%BF%23) `133.6K 🔥`
1. [女子怀孕2个月后脑出血智力仅3岁](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%952%E4%B8%AA%E6%9C%88%E5%90%8E%E8%84%91%E5%87%BA%E8%A1%80%E6%99%BA%E5%8A%9B%E4%BB%853%E5%B2%81%23) `131.8K 🔥`
1. [伊朗的新战法让美国很头疼 (Iran's new tactics give the United States a headache)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E6%96%B0%E6%88%98%E6%B3%95%E8%AE%A9%E7%BE%8E%E5%9B%BD%E5%BE%88%E5%A4%B4%E7%96%BC%23) `131.5K 🔥`
1. [美反恐中心主任称无法昧良心支持对伊战争](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8F%8D%E6%81%90%E4%B8%AD%E5%BF%83%E4%B8%BB%E4%BB%BB%E7%A7%B0%E6%97%A0%E6%B3%95%E6%98%A7%E8%89%AF%E5%BF%83%E6%94%AF%E6%8C%81%E5%AF%B9%E4%BC%8A%E6%88%98%E4%BA%89%23) `119.1K 🔥`
1. [刘文祥3名员工后厨抽烟吐槽315](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A53%E5%90%8D%E5%91%98%E5%B7%A5%E5%90%8E%E5%8E%A8%E6%8A%BD%E7%83%9F%E5%90%90%E6%A7%BD315%23) `215.0K 🔥` `-68%`
1. [有人出价8千元购买淮山手 (Someone offered 8,000 yuan to buy Huaishan hand)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E5%87%BA%E4%BB%B78%E5%8D%83%E5%85%83%E8%B4%AD%E4%B9%B0%E6%B7%AE%E5%B1%B1%E6%89%8B%23) `96.3K 🔥` `-30%`
1. [小巷人家2 范丞丞卢昱晓 (Alley People 2 Fan Chengcheng Lu Yuxiao)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%20%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%8D%A2%E6%98%B1%E6%99%93%23) `92.6K 🔥` `-31%`
1. [韩国网友吐槽逐玉 (Korean netizens complain about chasing jade)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E5%90%90%E6%A7%BD%E9%80%90%E7%8E%89%23) `86.7K 🔥` `-36%`
1. [3岁女童被虐死生父女友已执行死刑](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%A2%AB%E8%99%90%E6%AD%BB%E7%94%9F%E7%88%B6%E5%A5%B3%E5%8F%8B%E5%B7%B2%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `83.6K 🔥` `-38%`
1. [周杰伦预热新专辑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E9%A2%84%E7%83%AD%E6%96%B0%E4%B8%93%E8%BE%91%23) `76.5K 🔥` `-43%`
1. [伊朗最高领袖驳回斡旋提案](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E9%A9%B3%E5%9B%9E%E6%96%A1%E6%97%8B%E6%8F%90%E6%A1%88%23) `71.9K 🔥` `-46%`
1. [赖清德侮辱台湾抗日先烈 (Lai Qingde insulted Taiwan’s anti-Japanese martyrs)](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E4%BE%AE%E8%BE%B1%E5%8F%B0%E6%B9%BE%E6%8A%97%E6%97%A5%E5%85%88%E7%83%88%23) `70.2K 🔥` `-48%`
1. [20岁女子瘦到皮包骨查出脂肪肝 (A 20-year-old woman was so skinny that she was diagnosed with fatty liver disease)](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%A5%B3%E5%AD%90%E7%98%A6%E5%88%B0%E7%9A%AE%E5%8C%85%E9%AA%A8%E6%9F%A5%E5%87%BA%E8%84%82%E8%82%AA%E8%82%9D%23) `65.9K 🔥` `-52%`
1. [招聘不建议大龄报名公司负责人发声](https://s.weibo.com/weibo?q=%23%E6%8B%9B%E8%81%98%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%A4%A7%E9%BE%84%E6%8A%A5%E5%90%8D%E5%85%AC%E5%8F%B8%E8%B4%9F%E8%B4%A3%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `65.9K 🔥` `-52%`
1. [金价银价下跌原因找到了 (The reason for the fall in gold and silver prices has been found)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E4%B8%8B%E8%B7%8C%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `65.9K 🔥` `-51%`
1. [你好1983播出反馈](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%E6%92%AD%E5%87%BA%E5%8F%8D%E9%A6%88%23) `65.9K 🔥` `-51%`
1. [明日方舟 (Arknights)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%23) `65.9K 🔥` `-51%`
1. [曝小巷人家2以庄图南李佳为主视角](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%E4%BB%A5%E5%BA%84%E5%9B%BE%E5%8D%97%E6%9D%8E%E4%BD%B3%E4%B8%BA%E4%B8%BB%E8%A7%86%E8%A7%92%23) `65.9K 🔥` `-51%`
1. [一个烟头夺走22条生命谁该担责](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%83%9F%E5%A4%B4%E5%A4%BA%E8%B5%B022%E6%9D%A1%E7%94%9F%E5%91%BD%E8%B0%81%E8%AF%A5%E6%8B%85%E8%B4%A3%23) `65.9K 🔥` `-51%`

Updated at 2026-03-18 08:02:57

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
