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

1. [红霞在广东惠州登陆 (Hongxia lands in Huizhou, Guangdong)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%9C%9E%E5%9C%A8%E5%B9%BF%E4%B8%9C%E6%83%A0%E5%B7%9E%E7%99%BB%E9%99%86%23) `1.5M 🔥` `NEW`
1. [中餐厅5季以来首次亏损](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%855%E5%AD%A3%E4%BB%A5%E6%9D%A5%E9%A6%96%E6%AC%A1%E4%BA%8F%E6%8D%9F%23) `466.0K 🔥` `NEW`
1. [王楚钦说没那么厉害的大哥了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E6%B2%A1%E9%82%A3%E4%B9%88%E5%8E%89%E5%AE%B3%E7%9A%84%E5%A4%A7%E5%93%A5%E4%BA%86%23) `348.7K 🔥` `NEW`
1. [中国粉丝被泰国gmm工作人员打](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%B2%89%E4%B8%9D%E8%A2%AB%E6%B3%B0%E5%9B%BDgmm%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E6%89%93%23) `339.6K 🔥` `NEW`
1. [王一博给摩托姐姐点赞了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%BB%99%E6%91%A9%E6%89%98%E5%A7%90%E5%A7%90%E7%82%B9%E8%B5%9E%E4%BA%86%23) `329.2K 🔥` `NEW`
1. [中餐厅张雅琪这个发型](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E5%BC%A0%E9%9B%85%E7%90%AA%E8%BF%99%E4%B8%AA%E5%8F%91%E5%9E%8B%23) `328.1K 🔥` `NEW`
1. [医生回应女孩正颌手术做反了](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E6%AD%A3%E9%A2%8C%E6%89%8B%E6%9C%AF%E5%81%9A%E5%8F%8D%E4%BA%86%23) `313.1K 🔥` `NEW`
1. [狩谎 欧阳震华](https://s.weibo.com/weibo?q=%23%E7%8B%A9%E8%B0%8E%20%E6%AC%A7%E9%98%B3%E9%9C%87%E5%8D%8E%23) `312.2K 🔥` `NEW`
1. [汪苏泷脱完全场沉默了](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E8%84%B1%E5%AE%8C%E5%85%A8%E5%9C%BA%E6%B2%89%E9%BB%98%E4%BA%86%23) `290.9K 🔥` `NEW`
1. [特朗普称暂停空袭伊朗](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E6%9A%82%E5%81%9C%E7%A9%BA%E8%A2%AD%E4%BC%8A%E6%9C%97%23) `257.7K 🔥` `NEW`
1. [日媒发布宇树G1拆机视频后认输 (Japanese media admits defeat after publishing Yushu G1 disassembly video)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E5%8F%91%E5%B8%83%E5%AE%87%E6%A0%91G1%E6%8B%86%E6%9C%BA%E8%A7%86%E9%A2%91%E5%90%8E%E8%AE%A4%E8%BE%93%23) `255.8K 🔥` `NEW`
1. [鹿晗浪漫疯子](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%B5%AA%E6%BC%AB%E7%96%AF%E5%AD%90%23) `255.5K 🔥` `NEW`
1. [程潇真喝罗云熙假喝](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E7%9C%9F%E5%96%9D%E7%BD%97%E4%BA%91%E7%86%99%E5%81%87%E5%96%9D%23) `236.8K 🔥` `NEW`
1. [男子在家裸体被女邻居发群是谁错了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%AE%B6%E8%A3%B8%E4%BD%93%E8%A2%AB%E5%A5%B3%E9%82%BB%E5%B1%85%E5%8F%91%E7%BE%A4%E6%98%AF%E8%B0%81%E9%94%99%E4%BA%86%23) `196.5K 🔥` `NEW`
1. [台风天深圳人非必要不外出](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%A4%A9%E6%B7%B1%E5%9C%B3%E4%BA%BA%E9%9D%9E%E5%BF%85%E8%A6%81%E4%B8%8D%E5%A4%96%E5%87%BA%23) `166.9K 🔥` `NEW`
1. [波普与灰熊达成买断](https://s.weibo.com/weibo?q=%23%E6%B3%A2%E6%99%AE%E4%B8%8E%E7%81%B0%E7%86%8A%E8%BE%BE%E6%88%90%E4%B9%B0%E6%96%AD%23) `106.8K 🔥` `NEW`
1. [中餐厅史诗级煎熬的一期](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E5%8F%B2%E8%AF%97%E7%BA%A7%E7%85%8E%E7%86%AC%E7%9A%84%E4%B8%80%E6%9C%9F%23) `103.4K 🔥` `NEW`
1. [家属回应幼儿产检正常出生双脚畸形](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E5%9B%9E%E5%BA%94%E5%B9%BC%E5%84%BF%E4%BA%A7%E6%A3%80%E6%AD%A3%E5%B8%B8%E5%87%BA%E7%94%9F%E5%8F%8C%E8%84%9A%E7%95%B8%E5%BD%A2%23) `84.8K 🔥` `NEW`
1. [苏新皓回应神级solo](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%9B%9E%E5%BA%94%E7%A5%9E%E7%BA%A7solo%23) `83.7K 🔥` `NEW`
1. [广州已出现13级阵风](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%B7%B2%E5%87%BA%E7%8E%B013%E7%BA%A7%E9%98%B5%E9%A3%8E%23) `72.4K 🔥` `NEW`
1. [美国女子吸毒精神错乱仰躺推车晃腿 (American woman takes drugs, becomes insane, lies on her back in a stroller and shakes her legs)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%90%B8%E6%AF%92%E7%B2%BE%E7%A5%9E%E9%94%99%E4%B9%B1%E4%BB%B0%E8%BA%BA%E6%8E%A8%E8%BD%A6%E6%99%83%E8%85%BF%23) `70.1K 🔥` `NEW`
1. [中国发布最新款全地形轮足四足机器人](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8F%91%E5%B8%83%E6%9C%80%E6%96%B0%E6%AC%BE%E5%85%A8%E5%9C%B0%E5%BD%A2%E8%BD%AE%E8%B6%B3%E5%9B%9B%E8%B6%B3%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `70.0K 🔥` `NEW`
1. [罗永浩怒斥电视机厂商](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%80%92%E6%96%A5%E7%94%B5%E8%A7%86%E6%9C%BA%E5%8E%82%E5%95%86%23) `895.4K 🔥` `+870%`
1. [中国小写的c惊艳了世界 (Chinese lowercase c amazes the world)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%86%99%E7%9A%84c%E6%83%8A%E8%89%B3%E4%BA%86%E4%B8%96%E7%95%8C%23) `719.3K 🔥` `+65%`
1. [京东美食爆料计划晒视频得千元 (Jingdong Food reveals plan to earn thousands of yuan for posting video)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E7%BE%8E%E9%A3%9F%E7%88%86%E6%96%99%E8%AE%A1%E5%88%92%E6%99%92%E8%A7%86%E9%A2%91%E5%BE%97%E5%8D%83%E5%85%83%23) `559.7K 🔥` `+40%`
1. [存款有100万的人舍不得花30万买车 (People with 1 million in savings are reluctant to spend 300,000 to buy a car)](https://s.weibo.com/weibo?q=%23%E5%AD%98%E6%AC%BE%E6%9C%89100%E4%B8%87%E7%9A%84%E4%BA%BA%E8%88%8D%E4%B8%8D%E5%BE%97%E8%8A%B130%E4%B8%87%E4%B9%B0%E8%BD%A6%23) `372.7K 🔥` `+86%`
1. [佩德里赴约最燃高中生足球联赛 (Pedri's appointment with the most popular high school football league)](https://s.weibo.com/weibo?q=%23%E4%BD%A9%E5%BE%B7%E9%87%8C%E8%B5%B4%E7%BA%A6%E6%9C%80%E7%87%83%E9%AB%98%E4%B8%AD%E7%94%9F%E8%B6%B3%E7%90%83%E8%81%94%E8%B5%9B%23) `353.8K 🔥` `+122%`
1. [红霞七级风圈致汕尾现约2米高浪](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%9C%9E%E4%B8%83%E7%BA%A7%E9%A3%8E%E5%9C%88%E8%87%B4%E6%B1%95%E5%B0%BE%E7%8E%B0%E7%BA%A62%E7%B1%B3%E9%AB%98%E6%B5%AA%23) `345.3K 🔥` `+305%`
1. [男子乘顺风车猝死家属索赔18万 (Family of man who died suddenly while hitchhiking claimed compensation of RMB 180,000)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%98%E9%A1%BA%E9%A3%8E%E8%BD%A6%E7%8C%9D%E6%AD%BB%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%9418%E4%B8%87%23) `341.2K 🔥` `+273%`
1. [新冠疫情升至中流行水平](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%86%A0%E7%96%AB%E6%83%85%E5%8D%87%E8%87%B3%E4%B8%AD%E6%B5%81%E8%A1%8C%E6%B0%B4%E5%B9%B3%23) `334.1K 🔥` `+257%`
1. [原来不是生病了而是年纪到了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E7%94%9F%E7%97%85%E4%BA%86%E8%80%8C%E6%98%AF%E5%B9%B4%E7%BA%AA%E5%88%B0%E4%BA%86%23) `222.1K 🔥` `+148%`
1. [有药店店员不知新冠有特效药](https://s.weibo.com/weibo?q=%23%E6%9C%89%E8%8D%AF%E5%BA%97%E5%BA%97%E5%91%98%E4%B8%8D%E7%9F%A5%E6%96%B0%E5%86%A0%E6%9C%89%E7%89%B9%E6%95%88%E8%8D%AF%23) `162.2K 🔥` `+75%`
1. [现在就出发4 (Let's go now 4)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `152.7K 🔥` `+62%`
1. [世界杯最伟大的照片 (The greatest photos from the World Cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E7%85%A7%E7%89%87%23) `147.8K 🔥` `+67%`
1. [科技股大跌是因为量化砸盘吗](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E8%82%A1%E5%A4%A7%E8%B7%8C%E6%98%AF%E5%9B%A0%E4%B8%BA%E9%87%8F%E5%8C%96%E7%A0%B8%E7%9B%98%E5%90%97%23) `109.1K 🔥` `+21%`
1. [为什么北大比王虹天赋高的人没获奖 (Why didn’t people from Peking University who were more talented than Wang Hong win?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8C%97%E5%A4%A7%E6%AF%94%E7%8E%8B%E8%99%B9%E5%A4%A9%E8%B5%8B%E9%AB%98%E7%9A%84%E4%BA%BA%E6%B2%A1%E8%8E%B7%E5%A5%96%23) `109.0K 🔥` `+27%`
1. [阳台上突然出现了六只小狗头 (Six puppy heads suddenly appeared on the balcony)](https://s.weibo.com/weibo?q=%23%E9%98%B3%E5%8F%B0%E4%B8%8A%E7%AA%81%E7%84%B6%E5%87%BA%E7%8E%B0%E4%BA%86%E5%85%AD%E5%8F%AA%E5%B0%8F%E7%8B%97%E5%A4%B4%23) `107.8K 🔥` `+22%`
1. [携程整改措施](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E6%95%B4%E6%94%B9%E6%8E%AA%E6%96%BD%23) `98.9K 🔥` `+26%`
1. [张雅琪 中餐厅 (Zhang Yaqi Chinese Restaurant)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E4%B8%AD%E9%A4%90%E5%8E%85%23) `352.8K 🔥`
1. [2026首个台风红色预警 (2026 first typhoon red warning)](https://s.weibo.com/weibo?q=%232026%E9%A6%96%E4%B8%AA%E5%8F%B0%E9%A3%8E%E7%BA%A2%E8%89%B2%E9%A2%84%E8%AD%A6%23) `138.4K 🔥`
1. [台风红霞](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%23) `121.1K 🔥`
1. [王楚钦梁靖崑双打1比2 (Wang Chuqin and Liang Jingkun doubles 1 to 2)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%A2%81%E9%9D%96%E5%B4%91%E5%8F%8C%E6%89%931%E6%AF%942%23) `107.3K 🔥`
1. [深圳台风预警升级至红色](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%8F%B0%E9%A3%8E%E9%A2%84%E8%AD%A6%E5%8D%87%E7%BA%A7%E8%87%B3%E7%BA%A2%E8%89%B2%23) `103.8K 🔥`
1. [被裁掉的女孩播放破2亿](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%A3%81%E6%8E%89%E7%9A%84%E5%A5%B3%E5%AD%A9%E6%92%AD%E6%94%BE%E7%A0%B42%E4%BA%BF%23) `101.7K 🔥`
1. [八仙 (the Eight Immortals)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `98.9K 🔥`
1. [张凌赫王楚然从秋千吻到床上 (Zhang Linghe and Wang Churan kissed from the swing to the bed)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%BB%8E%E7%A7%8B%E5%8D%83%E5%90%BB%E5%88%B0%E5%BA%8A%E4%B8%8A%23) `96.4K 🔥`
1. [张凌赫回吻王楚然](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%90%BB%E7%8E%8B%E6%A5%9A%E7%84%B6%23) `94.7K 🔥`
1. [檀健次小心翼翼地拨开了一把头发](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%B0%8F%E5%BF%83%E7%BF%BC%E7%BF%BC%E5%9C%B0%E6%8B%A8%E5%BC%80%E4%BA%86%E4%B8%80%E6%8A%8A%E5%A4%B4%E5%8F%91%23) `93.1K 🔥`
1. [谢霆锋演唱会状态 (Nicholas Tse's concert status)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8A%B6%E6%80%81%23) `75.3K 🔥`
1. [台风红霞已加强为强台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%E5%B7%B2%E5%8A%A0%E5%BC%BA%E4%B8%BA%E5%BC%BA%E5%8F%B0%E9%A3%8E%23) `355.4K 🔥` `-45%`
1. [房企回应被LV起诉四叶雕花侵权 (Real estate companies respond to being sued by LV for infringement of four-leaf carving pattern)](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%BC%81%E5%9B%9E%E5%BA%94%E8%A2%ABLV%E8%B5%B7%E8%AF%89%E5%9B%9B%E5%8F%B6%E9%9B%95%E8%8A%B1%E4%BE%B5%E6%9D%83%23) `95.8K 🔥` `-80%`
1. [王一博与粉丝雨中双向奔赴 (Wang Yibo and his fans ran in both directions in the rain)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%8E%E7%B2%89%E4%B8%9D%E9%9B%A8%E4%B8%AD%E5%8F%8C%E5%90%91%E5%A5%94%E8%B5%B4%23) `70.7K 🔥` `-81%`

Updated at 2026-07-26 08:09:27

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
