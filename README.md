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

1. [黄灿灿自曝还未接到戏 (Huang Cancan reveals that he has not received any roles yet)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E8%87%AA%E6%9B%9D%E8%BF%98%E6%9C%AA%E6%8E%A5%E5%88%B0%E6%88%8F%23) `74.3K 🔥` `NEW`
1. [余承东说阔直板巴适得板](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E8%AF%B4%E9%98%94%E7%9B%B4%E6%9D%BF%E5%B7%B4%E9%80%82%E5%BE%97%E6%9D%BF%23) `74.3K 🔥` `NEW`
1. [失业男子饿20天致肾衰竭 (Unemployed man suffers kidney failure after starving for 20 days)](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E4%B8%9A%E7%94%B7%E5%AD%90%E9%A5%BF20%E5%A4%A9%E8%87%B4%E8%82%BE%E8%A1%B0%E7%AB%AD%23) `1.5M 🔥` `+46%`
1. [我国气候异常 (my country's climate anomalies)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B0%94%E5%80%99%E5%BC%82%E5%B8%B8%23) `840.6K 🔥` `+21%`
1. [中国铁路加速驶入AI赋能新阶段 (China's railways are accelerating into a new stage of AI empowerment)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%93%81%E8%B7%AF%E5%8A%A0%E9%80%9F%E9%A9%B6%E5%85%A5AI%E8%B5%8B%E8%83%BD%E6%96%B0%E9%98%B6%E6%AE%B5%23) `669.2K 🔥` `+25%`
1. [智界RX开启预售29.98万至39.98万 (Zhijie RX starts pre-sale from 299,800 to 399,800)](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CRX%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE29.98%E4%B8%87%E8%87%B339.98%E4%B8%87%23) `566.8K 🔥` `+195%`
1. [男子捡3根金条以为假的随手扔掉](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8D%A13%E6%A0%B9%E9%87%91%E6%9D%A1%E4%BB%A5%E4%B8%BA%E5%81%87%E7%9A%84%E9%9A%8F%E6%89%8B%E6%89%94%E6%8E%89%23) `363.3K 🔥` `+228%`
1. [医院能办结婚证了 (The hospital can issue a marriage certificate)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `205.2K 🔥` `+26%`
1. [银行员工称考核压力大自己买1万 (Bank employees said the assessment pressure was so great that they bought 10,000 yuan)](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%91%98%E5%B7%A5%E7%A7%B0%E8%80%83%E6%A0%B8%E5%8E%8B%E5%8A%9B%E5%A4%A7%E8%87%AA%E5%B7%B1%E4%B9%B01%E4%B8%87%23) `176.3K 🔥` `+68%`
1. [马俊生 陈俊生 (Ma Junsheng Chen Junsheng)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BF%8A%E7%94%9F%20%E9%99%88%E4%BF%8A%E7%94%9F%23) `150.7K 🔥` `+46%`
1. [广州地铁回应母亲为孩子硬挤屏蔽门 (Guangzhou Metro responds to mother forcing her child to squeeze through screen door)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%9C%B0%E9%93%81%E5%9B%9E%E5%BA%94%E6%AF%8D%E4%BA%B2%E4%B8%BA%E5%AD%A9%E5%AD%90%E7%A1%AC%E6%8C%A4%E5%B1%8F%E8%94%BD%E9%97%A8%23) `129.0K 🔥` `+34%`
1. [宁艺卓想读大学](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E6%83%B3%E8%AF%BB%E5%A4%A7%E5%AD%A6%23) `128.9K 🔥` `+58%`
1. [婚姻共同财产制度 保护的是身份 (The marital community property system protects identity)](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A7%BB%E5%85%B1%E5%90%8C%E8%B4%A2%E4%BA%A7%E5%88%B6%E5%BA%A6%20%E4%BF%9D%E6%8A%A4%E7%9A%84%E6%98%AF%E8%BA%AB%E4%BB%BD%23) `128.9K 🔥` `+27%`
1. [肿瘤疫苗迎百年破局](https://s.weibo.com/weibo?q=%23%E8%82%BF%E7%98%A4%E7%96%AB%E8%8B%97%E8%BF%8E%E7%99%BE%E5%B9%B4%E7%A0%B4%E5%B1%80%23) `128.8K 🔥` `+22%`
1. [Angelababy说上班是最爱干的事情](https://s.weibo.com/weibo?q=%23Angelababy%E8%AF%B4%E4%B8%8A%E7%8F%AD%E6%98%AF%E6%9C%80%E7%88%B1%E5%B9%B2%E7%9A%84%E4%BA%8B%E6%83%85%23) `128.7K 🔥` `+58%`
1. [女子发现孩子没出地铁强行往车厢挤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8F%91%E7%8E%B0%E5%AD%A9%E5%AD%90%E6%B2%A1%E5%87%BA%E5%9C%B0%E9%93%81%E5%BC%BA%E8%A1%8C%E5%BE%80%E8%BD%A6%E5%8E%A2%E6%8C%A4%23) `128.6K 🔥` `+31%`
1. [1.2亿农村老人谁来为他们发声](https://s.weibo.com/weibo?q=%231.2%E4%BA%BF%E5%86%9C%E6%9D%91%E8%80%81%E4%BA%BA%E8%B0%81%E6%9D%A5%E4%B8%BA%E4%BB%96%E4%BB%AC%E5%8F%91%E5%A3%B0%23) `128.5K 🔥` `+31%`
1. [多地公布七夕结婚领证数据](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%85%AC%E5%B8%83%E4%B8%83%E5%A4%95%E7%BB%93%E5%A9%9A%E9%A2%86%E8%AF%81%E6%95%B0%E6%8D%AE%23) `128.5K 🔥` `+98%`
1. [Selina社媒已停更半年以上](https://s.weibo.com/weibo?q=%23Selina%E7%A4%BE%E5%AA%92%E5%B7%B2%E5%81%9C%E6%9B%B4%E5%8D%8A%E5%B9%B4%E4%BB%A5%E4%B8%8A%23) `128.0K 🔥` `+107%`
1. [宝妈坚持每天推婴儿车晨跑两小时 (Mom insists on pushing the stroller for two hours of morning jogging every day)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E5%9D%9A%E6%8C%81%E6%AF%8F%E5%A4%A9%E6%8E%A8%E5%A9%B4%E5%84%BF%E8%BD%A6%E6%99%A8%E8%B7%91%E4%B8%A4%E5%B0%8F%E6%97%B6%23) `118.9K 🔥` `+32%`
1. [金饰克价一夜飙涨37元 (The price of gold jewelry soared by 37 yuan per gram overnight)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E4%B8%80%E5%A4%9C%E9%A3%99%E6%B6%A837%E5%85%83%23) `109.4K 🔥` `+101%`
1. [曾辉小沈阳这段诡异得像AI生成 (Zeng Hui's Xiao Shenyang episode is so weird that it looks like it was generated by AI)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%B0%8F%E6%B2%88%E9%98%B3%E8%BF%99%E6%AE%B5%E8%AF%A1%E5%BC%82%E5%BE%97%E5%83%8FAI%E7%94%9F%E6%88%90%23) `106.7K 🔥` `+87%`
1. [第五人格 (fifth personality)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `93.6K 🔥` `+26%`
1. [杨旭文孔雪儿 天行九歌 (Yang Xuwen Kong Xueer Nine Songs of Heaven)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%97%AD%E6%96%87%E5%AD%94%E9%9B%AA%E5%84%BF%20%E5%A4%A9%E8%A1%8C%E4%B9%9D%E6%AD%8C%23) `93.2K 🔥` `+25%`
1. [美27岁女子让多人性侵自己2个女儿 (A 27-year-old American woman let multiple people sexually assault her two daughters)](https://s.weibo.com/weibo?q=%23%E7%BE%8E27%E5%B2%81%E5%A5%B3%E5%AD%90%E8%AE%A9%E5%A4%9A%E4%BA%BA%E6%80%A7%E4%BE%B5%E8%87%AA%E5%B7%B12%E4%B8%AA%E5%A5%B3%E5%84%BF%23) `83.6K 🔥` `+27%`
1. [花开锦绣热度破27000](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E7%83%AD%E5%BA%A6%E7%A0%B427000%23) `83.1K 🔥` `+52%`
1. [穿女装进女卫男子膝盖有明显脏污](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E5%A5%B3%E8%A3%85%E8%BF%9B%E5%A5%B3%E5%8D%AB%E7%94%B7%E5%AD%90%E8%86%9D%E7%9B%96%E6%9C%89%E6%98%8E%E6%98%BE%E8%84%8F%E6%B1%A1%23) `74.3K 🔥` `+36%`
1. [广西版檀健次一开口面相都变了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%89%88%E6%AA%80%E5%81%A5%E6%AC%A1%E4%B8%80%E5%BC%80%E5%8F%A3%E9%9D%A2%E7%9B%B8%E9%83%BD%E5%8F%98%E4%BA%86%23) `74.3K 🔥` `+37%`
1. [日本旅游业凉了 (Japan’s tourism industry is in decline)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%97%85%E6%B8%B8%E4%B8%9A%E5%87%89%E4%BA%86%23) `74.3K 🔥` `+24%`
1. [花开锦绣 (Flowers bloom beautifully)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%23) `74.3K 🔥` `+25%`
1. [398一杯的芋圆葡萄 (398 cup of taro grapes)](https://s.weibo.com/weibo?q=%23398%E4%B8%80%E6%9D%AF%E7%9A%84%E8%8A%8B%E5%9C%86%E8%91%A1%E8%90%84%23) `528.9K 🔥`
1. [癌症疫苗 (cancer vaccine)](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%23) `286.4K 🔥`
1. [华晨宇彻底打破演唱会观演边界 (Hua Chenyu completely breaks the boundaries of concert viewing)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%BD%BB%E5%BA%95%E6%89%93%E7%A0%B4%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A7%82%E6%BC%94%E8%BE%B9%E7%95%8C%23) `129.4K 🔥`
1. [何婧婧流产原因是胚胎优胜劣汰](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%A9%A7%E5%A9%A7%E6%B5%81%E4%BA%A7%E5%8E%9F%E5%9B%A0%E6%98%AF%E8%83%9A%E8%83%8E%E4%BC%98%E8%83%9C%E5%8A%A3%E6%B1%B0%23) `129.3K 🔥`
1. [迪丽热巴跑男时期的感觉回来啦](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B7%91%E7%94%B7%E6%97%B6%E6%9C%9F%E7%9A%84%E6%84%9F%E8%A7%89%E5%9B%9E%E6%9D%A5%E5%95%A6%23) `129.1K 🔥`
1. [严浩翔黄子弘凡啥时候认识的](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%95%A5%E6%97%B6%E5%80%99%E8%AE%A4%E8%AF%86%E7%9A%84%23) `128.8K 🔥`
1. [刘宇宁周柯宇没发开推四小作文 (Liu Yuning and Zhou Keyu did not post four short compositions on Twitter)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%91%A8%E6%9F%AF%E5%AE%87%E6%B2%A1%E5%8F%91%E5%BC%80%E6%8E%A8%E5%9B%9B%E5%B0%8F%E4%BD%9C%E6%96%87%23) `108.4K 🔥`
1. [首个治疗性癌症疫苗](https://s.weibo.com/weibo?q=%23%E9%A6%96%E4%B8%AA%E6%B2%BB%E7%96%97%E6%80%A7%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%23) `96.5K 🔥`
1. [学籍案弟弟称在养父母家受宠长大 (Younger brother in student status case says he grew up pampered by his adoptive parents)](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%B1%8D%E6%A1%88%E5%BC%9F%E5%BC%9F%E7%A7%B0%E5%9C%A8%E5%85%BB%E7%88%B6%E6%AF%8D%E5%AE%B6%E5%8F%97%E5%AE%A0%E9%95%BF%E5%A4%A7%23) `96.0K 🔥`
1. [美国脱口秀讲中国人数学天赋](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%84%B1%E5%8F%A3%E7%A7%80%E8%AE%B2%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%95%B0%E5%AD%A6%E5%A4%A9%E8%B5%8B%23) `83.4K 🔥`
1. [中国男篮3人离队](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE3%E4%BA%BA%E7%A6%BB%E9%98%9F%23) `74.3K 🔥`
1. [刘宇宁开推从一个节目变成了家人朋友 (Liu Yuning’s promotion changed from a program to a family friend)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%BC%80%E6%8E%A8%E4%BB%8E%E4%B8%80%E4%B8%AA%E8%8A%82%E7%9B%AE%E5%8F%98%E6%88%90%E4%BA%86%E5%AE%B6%E4%BA%BA%E6%9C%8B%E5%8F%8B%23) `74.3K 🔥`
1. [樊振东正式亮相杜塞尔多夫 (Fan Zhendong officially makes his debut in Dusseldorf)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AD%A3%E5%BC%8F%E4%BA%AE%E7%9B%B8%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%23) `74.3K 🔥`
1. [李在明顺水推舟回应特朗普撤军 (Lee Jae-myung responds to Trump's troop withdrawal)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E9%A1%BA%E6%B0%B4%E6%8E%A8%E8%88%9F%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E6%92%A4%E5%86%9B%23) `74.3K 🔥`
1. [安踏徐阳 迁居美国 (Anta Xu Yang moved to the United States)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8F%E5%BE%90%E9%98%B3%20%E8%BF%81%E5%B1%85%E7%BE%8E%E5%9B%BD%23) `74.3K 🔥`
1. [沈腾又忘记扶杨幂了 (Shen Teng forgot to support Yang Mi again)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%8F%88%E5%BF%98%E8%AE%B0%E6%89%B6%E6%9D%A8%E5%B9%82%E4%BA%86%23) `74.3K 🔥`
1. [致孕妇误服液体医生被停职 (Doctor suspended after pregnant woman accidentally swallowed liquid)](https://s.weibo.com/weibo?q=%23%E8%87%B4%E5%AD%95%E5%A6%87%E8%AF%AF%E6%9C%8D%E6%B6%B2%E4%BD%93%E5%8C%BB%E7%94%9F%E8%A2%AB%E5%81%9C%E8%81%8C%23) `74.3K 🔥`
1. [网友细扒Bin脸部变化细节 (Netizens reveal the details of Bin’s facial changes)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%BB%86%E6%89%92Bin%E8%84%B8%E9%83%A8%E5%8F%98%E5%8C%96%E7%BB%86%E8%8A%82%23) `74.3K 🔥`
1. [女子用公用瑜伽垫后感染HPV (Woman contracted HPV after using public yoga mat)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A8%E5%85%AC%E7%94%A8%E7%91%9C%E4%BC%BD%E5%9E%AB%E5%90%8E%E6%84%9F%E6%9F%93HPV%23) `129.4K 🔥` `-42%`
1. [明白小孩为什么爱看小猪佩奇了 (Understand why children love to watch Peppa Pig)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E7%99%BD%E5%B0%8F%E5%AD%A9%E4%B8%BA%E4%BB%80%E4%B9%88%E7%88%B1%E7%9C%8B%E5%B0%8F%E7%8C%AA%E4%BD%A9%E5%A5%87%E4%BA%86%23) `129.2K 🔥` `-48%`

Updated at 2026-08-21 07:55:58

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
