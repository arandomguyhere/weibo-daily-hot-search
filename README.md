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

1. [李纯吐槽自己妈妈没苦硬吃 (Li Chun complained that his mother did not have to endure hardships)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BA%AF%E5%90%90%E6%A7%BD%E8%87%AA%E5%B7%B1%E5%A6%88%E5%A6%88%E6%B2%A1%E8%8B%A6%E7%A1%AC%E5%90%83%23) `58.2K 🔥` `NEW`
1. [武汉有轨电车与电动车相撞 (Tram collides with electric car in Wuhan)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E6%9C%89%E8%BD%A8%E7%94%B5%E8%BD%A6%E4%B8%8E%E7%94%B5%E5%8A%A8%E8%BD%A6%E7%9B%B8%E6%92%9E%23) `617.5K 🔥` `+188%`
1. [男子卖房为母治病打赏女主播22.5万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%96%E6%88%BF%E4%B8%BA%E6%AF%8D%E6%B2%BB%E7%97%85%E6%89%93%E8%B5%8F%E5%A5%B3%E4%B8%BB%E6%92%AD22.5%E4%B8%87%23) `436.0K 🔥` `+978%`
1. [春日经济活力的关键何在 (What's the key to economic vitality in Kasuga?)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%97%A5%E7%BB%8F%E6%B5%8E%E6%B4%BB%E5%8A%9B%E7%9A%84%E5%85%B3%E9%94%AE%E4%BD%95%E5%9C%A8%23) `344.0K 🔥` `+104%`
1. [在全世界偶遇中国符号 (Encountering Chinese symbols around the world)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%85%A8%E4%B8%96%E7%95%8C%E5%81%B6%E9%81%87%E4%B8%AD%E5%9B%BD%E7%AC%A6%E5%8F%B7%23) `343.2K 🔥` `+109%`
1. [美以或对伊朗采取割草模式](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E6%88%96%E5%AF%B9%E4%BC%8A%E6%9C%97%E9%87%87%E5%8F%96%E5%89%B2%E8%8D%89%E6%A8%A1%E5%BC%8F%23) `336.4K 🔥` `+154%`
1. [以色列总理对美国提要求 (Israeli PM makes demands on U.S.)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%90%86%E5%AF%B9%E7%BE%8E%E5%9B%BD%E6%8F%90%E8%A6%81%E6%B1%82%23) `130.8K 🔥` `+135%`
1. [将门独后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%23) `88.0K 🔥` `+173%`
1. [范丞丞花西子彩妆代言人](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%8A%B1%E8%A5%BF%E5%AD%90%E5%BD%A9%E5%A6%86%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `86.3K 🔥` `+123%`
1. [莫氏鸡煲评论区发声明](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%8F%91%E5%A3%B0%E6%98%8E%23) `85.8K 🔥` `+157%`
1. [降至300元的降脂针被纳入医保 (Lipid-lowering injections costing NT$300 are included in medical insurance)](https://s.weibo.com/weibo?q=%23%E9%99%8D%E8%87%B3300%E5%85%83%E7%9A%84%E9%99%8D%E8%84%82%E9%92%88%E8%A2%AB%E7%BA%B3%E5%85%A5%E5%8C%BB%E4%BF%9D%23) `78.7K 🔥` `+107%`
1. [迪丽热巴待播剧](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BE%85%E6%92%AD%E5%89%A7%23) `72.3K 🔥` `+217%`
1. [大疆Pocket4 (DJI Pocket4)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%23) `71.9K 🔥` `+148%`
1. [sbti测试是啥](https://s.weibo.com/weibo?q=%23sbti%E6%B5%8B%E8%AF%95%E6%98%AF%E5%95%A5%23) `71.8K 🔥` `+149%`
1. [瘫痪女孩误买邓紫棋演唱会票平台拒退](https://s.weibo.com/weibo?q=%23%E7%98%AB%E7%97%AA%E5%A5%B3%E5%AD%A9%E8%AF%AF%E4%B9%B0%E9%82%93%E7%B4%AB%E6%A3%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E5%B9%B3%E5%8F%B0%E6%8B%92%E9%80%80%23) `71.3K 🔥` `+156%`
1. [贾浅浅仍保持沉默 (Jia Qianqian remained silent)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%B5%85%E6%B5%85%E4%BB%8D%E4%BF%9D%E6%8C%81%E6%B2%89%E9%BB%98%23) `70.7K 🔥` `+204%`
1. [测sbti要笑晕了 (I'm going to faint from laughter when I test SBTI.)](https://s.weibo.com/weibo?q=%23%E6%B5%8Bsbti%E8%A6%81%E7%AC%91%E6%99%95%E4%BA%86%23) `70.4K 🔥` `+157%`
1. [离异父母均拒接孩子司机当场怒斥](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%BC%82%E7%88%B6%E6%AF%8D%E5%9D%87%E6%8B%92%E6%8E%A5%E5%AD%A9%E5%AD%90%E5%8F%B8%E6%9C%BA%E5%BD%93%E5%9C%BA%E6%80%92%E6%96%A5%23) `70.0K 🔥` `+170%`
1. [白宫称美伊将于11日上午举行首轮会谈 (The White House said the United States and Iran will hold the first round of talks on the morning of the 11th)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E7%A7%B0%E7%BE%8E%E4%BC%8A%E5%B0%86%E4%BA%8E11%E6%97%A5%E4%B8%8A%E5%8D%88%E4%B8%BE%E8%A1%8C%E9%A6%96%E8%BD%AE%E4%BC%9A%E8%B0%88%23) `69.2K 🔥` `+159%`
1. [陈添祥长文道歉](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B7%BB%E7%A5%A5%E9%95%BF%E6%96%87%E9%81%93%E6%AD%89%23) `68.5K 🔥` `+182%`
1. [伊朗谈判条件今非昔比 (Iran’s negotiating conditions are no longer what they used to be)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%B0%88%E5%88%A4%E6%9D%A1%E4%BB%B6%E4%BB%8A%E9%9D%9E%E6%98%94%E6%AF%94%23) `68.3K 🔥` `+179%`
1. [人民日报评吴克群](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%90%B4%E5%85%8B%E7%BE%A4%23) `58.1K 🔥` `+149%`
1. [开心消消乐程序员写给女友的情书 (A love letter written by a Happy Xiaoxiao Le programmer to his girlfriend)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%BF%83%E6%B6%88%E6%B6%88%E4%B9%90%E7%A8%8B%E5%BA%8F%E5%91%98%E5%86%99%E7%BB%99%E5%A5%B3%E5%8F%8B%E7%9A%84%E6%83%85%E4%B9%A6%23) `57.9K 🔥` `+148%`
1. [刘强东和章泽天新公司叫天强](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BC%BA%E4%B8%9C%E5%92%8C%E7%AB%A0%E6%B3%BD%E5%A4%A9%E6%96%B0%E5%85%AC%E5%8F%B8%E5%8F%AB%E5%A4%A9%E5%BC%BA%23) `57.6K 🔥` `+174%`
1. [赵丽颖楚乔传城墙爆破花絮](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%A5%9A%E4%B9%94%E4%BC%A0%E5%9F%8E%E5%A2%99%E7%88%86%E7%A0%B4%E8%8A%B1%E7%B5%AE%23) `45.4K 🔥` `+129%`
1. [平台将助力瘫痪女孩看邓紫棋演唱会 (The platform will help paralyzed girls watch Deng Ziqi’s concert)](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E5%B0%86%E5%8A%A9%E5%8A%9B%E7%98%AB%E7%97%AA%E5%A5%B3%E5%AD%A9%E7%9C%8B%E9%82%93%E7%B4%AB%E6%A3%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `44.9K 🔥` `+89%`
1. [女子头痛硬扛7天昏迷确诊李斯特菌 (Woman was diagnosed with listeria after enduring headache and coma for 7 days)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A4%B4%E7%97%9B%E7%A1%AC%E6%89%9B7%E5%A4%A9%E6%98%8F%E8%BF%B7%E7%A1%AE%E8%AF%8A%E6%9D%8E%E6%96%AF%E7%89%B9%E8%8F%8C%23) `44.3K 🔥` `+89%`
1. [阚清子只睡了两个小时](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%8F%AA%E7%9D%A1%E4%BA%86%E4%B8%A4%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `42.4K 🔥` `+87%`
1. [刘畊宏再晒王俊凯小泡芙合照 (Liu Genghong posted another photo of Wang Junkai’s puff puffs)](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%8A%E5%AE%8F%E5%86%8D%E6%99%92%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B0%8F%E6%B3%A1%E8%8A%99%E5%90%88%E7%85%A7%23) `39.3K 🔥` `+100%`
1. [浑身是血的美军上校15分钟被转移](https://s.weibo.com/weibo?q=%23%E6%B5%91%E8%BA%AB%E6%98%AF%E8%A1%80%E7%9A%84%E7%BE%8E%E5%86%9B%E4%B8%8A%E6%A0%A115%E5%88%86%E9%92%9F%E8%A2%AB%E8%BD%AC%E7%A7%BB%23) `36.3K 🔥` `+75%`
1. [男二被防爆 当观众坐第一排 (The second male lead was caught in an explosion while the audience was sitting in the front row)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%BA%8C%E8%A2%AB%E9%98%B2%E7%88%86%20%E5%BD%93%E8%A7%82%E4%BC%97%E5%9D%90%E7%AC%AC%E4%B8%80%E6%8E%92%23) `35.9K 🔥` `+82%`
1. [伊朗表示不会对以侵略行为保持沉默 (Iran says it will not remain silent on aggression)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A1%A8%E7%A4%BA%E4%B8%8D%E4%BC%9A%E5%AF%B9%E4%BB%A5%E4%BE%B5%E7%95%A5%E8%A1%8C%E4%B8%BA%E4%BF%9D%E6%8C%81%E6%B2%89%E9%BB%98%23) `35.5K 🔥` `+79%`
1. [伊朗总统说手扣扳机绝不抛弃黎巴嫩](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AF%B4%E6%89%8B%E6%89%A3%E6%89%B3%E6%9C%BA%E7%BB%9D%E4%B8%8D%E6%8A%9B%E5%BC%83%E9%BB%8E%E5%B7%B4%E5%AB%A9%23) `34.1K 🔥` `+67%`
1. [父亲回应平台全额退瘫痪女儿票钱 (Father responds to platform to fully refund paralyzed daughter’s tickets)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%B9%B3%E5%8F%B0%E5%85%A8%E9%A2%9D%E9%80%80%E7%98%AB%E7%97%AA%E5%A5%B3%E5%84%BF%E7%A5%A8%E9%92%B1%23) `33.7K 🔥` `+71%`
1. [王毅同朝鲜外相崔善姬举行会谈](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%90%8C%E6%9C%9D%E9%B2%9C%E5%A4%96%E7%9B%B8%E5%B4%94%E5%96%84%E5%A7%AC%E4%B8%BE%E8%A1%8C%E4%BC%9A%E8%B0%88%23) `33.1K 🔥` `+41%`
1. [金莎孙丞潇领证](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E9%A2%86%E8%AF%81%23) `33.0K 🔥` `+66%`
1. [鞠婧祎一念从容 (Ju Jingyi calmly thinks)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%B8%80%E5%BF%B5%E4%BB%8E%E5%AE%B9%23) `33.0K 🔥` `+48%`
1. [美议员称外星人已与人类会面 (US congressman says aliens have met humans)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%AE%AE%E5%91%98%E7%A7%B0%E5%A4%96%E6%98%9F%E4%BA%BA%E5%B7%B2%E4%B8%8E%E4%BA%BA%E7%B1%BB%E4%BC%9A%E9%9D%A2%23) `33.0K 🔥` `+66%`
1. [小米YU7入门级版本 (Xiaomi YU7 entry-level version)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7%E5%85%A5%E9%97%A8%E7%BA%A7%E7%89%88%E6%9C%AC%23) `33.0K 🔥` `+67%`
1. [美议员称外星人已与人类接触 (US congressman says aliens have made contact with humans)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%AE%AE%E5%91%98%E7%A7%B0%E5%A4%96%E6%98%9F%E4%BA%BA%E5%B7%B2%E4%B8%8E%E4%BA%BA%E7%B1%BB%E6%8E%A5%E8%A7%A6%23) `33.0K 🔥` `+67%`
1. [多情者 (Passionate)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%83%85%E8%80%85%23) `33.0K 🔥` `+67%`
1. [洋葱飞船音乐节 取消](https://s.weibo.com/weibo?q=%23%E6%B4%8B%E8%91%B1%E9%A3%9E%E8%88%B9%E9%9F%B3%E4%B9%90%E8%8A%82%20%E5%8F%96%E6%B6%88%23) `33.0K 🔥` `+67%`
1. [孙杨3比0姚钧涛](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A83%E6%AF%940%E5%A7%9A%E9%92%A7%E6%B6%9B%23) `33.0K 🔥` `+67%`
1. [白日提灯第28集无广 (Lantern in the Daytime Episode 28 Wu Guang)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%AC%AC28%E9%9B%86%E6%97%A0%E5%B9%BF%23) `33.0K 🔥` `+68%`
1. [你好1983收官 (Hello 1983 ends)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%E6%94%B6%E5%AE%98%23) `33.0K 🔥` `+67%`
1. [被现实版莫奈花园美哭了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%8E%B0%E5%AE%9E%E7%89%88%E8%8E%AB%E5%A5%88%E8%8A%B1%E5%9B%AD%E7%BE%8E%E5%93%AD%E4%BA%86%23) `33.0K 🔥` `+67%`
1. [乘风2026 (Chengfeng 2026)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `33.0K 🔥` `+67%`
1. [丁俊晖发长文回信球迷](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96%E5%8F%91%E9%95%BF%E6%96%87%E5%9B%9E%E4%BF%A1%E7%90%83%E8%BF%B7%23) `32.9K 🔥` `+67%`
1. [美伊谈判三大分歧](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%88%A4%E4%B8%89%E5%A4%A7%E5%88%86%E6%AD%A7%23) `32.9K 🔥` `+66%`
1. [就贾浅浅涉嫌抄袭问题启动调查 (Launched investigation into Jia Qianqian's suspected plagiarism)](https://s.weibo.com/weibo?q=%23%E5%B0%B1%E8%B4%BE%E6%B5%85%E6%B5%85%E6%B6%89%E5%AB%8C%E6%8A%84%E8%A2%AD%E9%97%AE%E9%A2%98%E5%90%AF%E5%8A%A8%E8%B0%83%E6%9F%A5%23) `32.9K 🔥` `+66%`
1. [没认出乌兰图雅](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E8%AE%A4%E5%87%BA%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%23) `32.9K 🔥` `+145%`
1. [一条生命换一张7.6万元罚单 (A life for a 76,000 yuan fine)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9D%A1%E7%94%9F%E5%91%BD%E6%8D%A2%E4%B8%80%E5%BC%A07.6%E4%B8%87%E5%85%83%E7%BD%9A%E5%8D%95%23) `69.0K 🔥` `-77%`

Updated at 2026-04-10 07:00:53

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
