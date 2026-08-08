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

1. [伯爵熠眼心动 (The earl's eyes are moved)](https://s.weibo.com/weibo?q=%23%E4%BC%AF%E7%88%B5%E7%86%A0%E7%9C%BC%E5%BF%83%E5%8A%A8%23) `114.8K 🔥` `NEW`
1. [KSG夺得KWC冠军](https://s.weibo.com/weibo?q=%23KSG%E5%A4%BA%E5%BE%97KWC%E5%86%A0%E5%86%9B%23) `83.3K 🔥` `NEW`
1. [温岭全力搜救被卷走9岁男孩](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B2%AD%E5%85%A8%E5%8A%9B%E6%90%9C%E6%95%91%E8%A2%AB%E5%8D%B7%E8%B5%B09%E5%B2%81%E7%94%B7%E5%AD%A9%23) `74.7K 🔥` `NEW`
1. [FMVP句号](https://s.weibo.com/weibo?q=%23FMVP%E5%8F%A5%E5%8F%B7%23) `70.6K 🔥` `NEW`
1. [童锦程孩子妈自曝怀孕后鼻子变大](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E9%94%A6%E7%A8%8B%E5%AD%A9%E5%AD%90%E5%A6%88%E8%87%AA%E6%9B%9D%E6%80%80%E5%AD%95%E5%90%8E%E9%BC%BB%E5%AD%90%E5%8F%98%E5%A4%A7%23) `58.8K 🔥` `NEW`
1. [河南三支一扶笔试将重考](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E7%AC%94%E8%AF%95%E5%B0%86%E9%87%8D%E8%80%83%23) `57.9K 🔥` `NEW`
1. [陈小春金志文看宋亚轩唱歌的眼神](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E9%87%91%E5%BF%97%E6%96%87%E7%9C%8B%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%94%B1%E6%AD%8C%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `56.8K 🔥` `NEW`
1. [宇树科技上市](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%8A%E5%B8%82%23) `52.8K 🔥` `NEW`
1. [台风白海豚 (Typhoon White Dolphin)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `694.9K 🔥` `+34%`
1. [金价猛涨踏空的人哭麻了 (The price of gold soared, and those who were short-changed cried numbly.)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%8C%9B%E6%B6%A8%E8%B8%8F%E7%A9%BA%E7%9A%84%E4%BA%BA%E5%93%AD%E9%BA%BB%E4%BA%86%23) `516.2K 🔥` `+878%`
1. [本周这些数据最值得关注 (These data are most noteworthy this week)](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE%E6%9C%80%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23) `398.2K 🔥` `+33%`
1. [发现父母开始看自己脸色了 (I found that my parents started to look at me)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E7%88%B6%E6%AF%8D%E5%BC%80%E5%A7%8B%E7%9C%8B%E8%87%AA%E5%B7%B1%E8%84%B8%E8%89%B2%E4%BA%86%23) `140.0K 🔥` `+35%`
1. [微博文化之夜之这是谁 (Weibo Culture Night: Who is this?)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%B9%8B%E5%A4%9C%E4%B9%8B%E8%BF%99%E6%98%AF%E8%B0%81%23) `76.8K 🔥` `+27%`
1. [陈伟霆说我还以为去了成毅的演唱会 (William Chan said that I thought I went to Cheng Yi’s concert)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%AF%B4%E6%88%91%E8%BF%98%E4%BB%A5%E4%B8%BA%E5%8E%BB%E4%BA%86%E6%88%90%E6%AF%85%E7%9A%84%E6%BC%94%E5%94%B1%E4%BC%9A%23) `75.0K 🔥` `+41%`
1. [这种手机壳可能是医疗垃圾做的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E6%89%8B%E6%9C%BA%E5%A3%B3%E5%8F%AF%E8%83%BD%E6%98%AF%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%E5%81%9A%E7%9A%84%23) `74.6K 🔥` `+45%`
1. [国乒围剿张本美和 (National table tennis encircles and suppresses Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%9B%B4%E5%89%BF%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `74.2K 🔥` `+24%`
1. [殡仪馆回应情侣平潭拍日出坠崖 (Funeral home responds to couple falling off cliff while filming sunrise in Pingtan)](https://s.weibo.com/weibo?q=%23%E6%AE%A1%E4%BB%AA%E9%A6%86%E5%9B%9E%E5%BA%94%E6%83%85%E4%BE%A3%E5%B9%B3%E6%BD%AD%E6%8B%8D%E6%97%A5%E5%87%BA%E5%9D%A0%E5%B4%96%23) `66.5K 🔥` `+37%`
1. [卫生巾应该分坐用跟躺用 (Sanitary napkins should be used separately for sitting and lying down)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%BA%94%E8%AF%A5%E5%88%86%E5%9D%90%E7%94%A8%E8%B7%9F%E8%BA%BA%E7%94%A8%23) `64.5K 🔥` `+38%`
1. [奥德赛](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `61.8K 🔥` `+29%`
1. [白海豚开始发力了 (The white dolphin is starting to exert its strength)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%BC%80%E5%A7%8B%E5%8F%91%E5%8A%9B%E4%BA%86%23) `61.6K 🔥` `+34%`
1. [AI帮你开发以前要花钱的功能 (AI helps you develop features that previously cost money)](https://s.weibo.com/weibo?q=%23AI%E5%B8%AE%E4%BD%A0%E5%BC%80%E5%8F%91%E4%BB%A5%E5%89%8D%E8%A6%81%E8%8A%B1%E9%92%B1%E7%9A%84%E5%8A%9F%E8%83%BD%23) `61.3K 🔥` `+42%`
1. [粉丝说西村力今天演唱会状态特别好 (Fans said that Riki Nishimura was in particularly good condition during today’s concert)](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E8%AF%B4%E8%A5%BF%E6%9D%91%E5%8A%9B%E4%BB%8A%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8A%B6%E6%80%81%E7%89%B9%E5%88%AB%E5%A5%BD%23) `61.2K 🔥` `+34%`
1. [小夜灯 性早熟 (night light precocious puberty)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%9C%E7%81%AF%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `60.7K 🔥` `+33%`
1. [常吃4种食物不易得胃癌 (Eating 4 kinds of foods regularly is less likely to cause gastric cancer)](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%90%834%E7%A7%8D%E9%A3%9F%E7%89%A9%E4%B8%8D%E6%98%93%E5%BE%97%E8%83%83%E7%99%8C%23) `60.4K 🔥` `+33%`
1. [很瘦但是个胖子 (Very thin but fat)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E7%98%A6%E4%BD%86%E6%98%AF%E4%B8%AA%E8%83%96%E5%AD%90%23) `60.0K 🔥` `+30%`
1. [沈腾感谢惠英红](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%84%9F%E8%B0%A2%E6%83%A0%E8%8B%B1%E7%BA%A2%23) `59.9K 🔥` `+30%`
1. [钟意状态](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%E7%8A%B6%E6%80%81%23) `59.6K 🔥` `+29%`
1. [孙子考取上海交大爷爷感谢亲家母](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E8%80%83%E5%8F%96%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E7%88%B7%E7%88%B7%E6%84%9F%E8%B0%A2%E4%BA%B2%E5%AE%B6%E6%AF%8D%23) `59.3K 🔥` `+30%`
1. [迪丽热巴香港造型 (Dilireba Hong Kong style)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A6%99%E6%B8%AF%E9%80%A0%E5%9E%8B%23) `58.6K 🔥` `+28%`
1. [20岁中国男子在泰国被刺多刀身亡](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%90%E5%9C%A8%E6%B3%B0%E5%9B%BD%E8%A2%AB%E5%88%BA%E5%A4%9A%E5%88%80%E8%BA%AB%E4%BA%A1%23) `58.4K 🔥` `+35%`
1. [柬埔寨一园区围殴中国人致1死3伤 (A Chinese man was beaten up in a park in Cambodia, killing one and injuring three others.)](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E4%B8%80%E5%9B%AD%E5%8C%BA%E5%9B%B4%E6%AE%B4%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%87%B41%E6%AD%BB3%E4%BC%A4%23) `57.7K 🔥` `+32%`
1. [男主持出轨生子前妻诉返20万被驳 (Male host cheated on his ex-wife and gave birth to a child, but his lawsuit to pay back NT$200,000 was dismissed)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B8%BB%E6%8C%81%E5%87%BA%E8%BD%A8%E7%94%9F%E5%AD%90%E5%89%8D%E5%A6%BB%E8%AF%89%E8%BF%9420%E4%B8%87%E8%A2%AB%E9%A9%B3%23) `57.4K 🔥` `+33%`
1. [武契奇涉乌克兰表态 (Vucic’s stance on Ukraine)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E6%B6%89%E4%B9%8C%E5%85%8B%E5%85%B0%E8%A1%A8%E6%80%81%23) `57.1K 🔥` `+32%`
1. [俄两女子错过航班闯停机坪拦飞机 (Two Russian women missed their flight and blocked it on the tarmac)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B8%A4%E5%A5%B3%E5%AD%90%E9%94%99%E8%BF%87%E8%88%AA%E7%8F%AD%E9%97%AF%E5%81%9C%E6%9C%BA%E5%9D%AA%E6%8B%A6%E9%A3%9E%E6%9C%BA%23) `56.3K 🔥` `+30%`
1. [向下对齐是亲密关系最大的诅咒 (Downward alignment is the greatest curse of intimacy)](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%B8%8B%E5%AF%B9%E9%BD%90%E6%98%AF%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E6%9C%80%E5%A4%A7%E7%9A%84%E8%AF%85%E5%92%92%23) `56.1K 🔥` `+25%`
1. [柬埔寨一园区15人围殴4名中国人 (15 people beat up 4 Chinese in a park in Cambodia)](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E4%B8%80%E5%9B%AD%E5%8C%BA15%E4%BA%BA%E5%9B%B4%E6%AE%B44%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%BA%BA%23) `55.9K 🔥` `+29%`
1. [被锦鲤打脸了的小金毛 (The little golden retriever was slapped in the face by a koi carp)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%94%A6%E9%B2%A4%E6%89%93%E8%84%B8%E4%BA%86%E7%9A%84%E5%B0%8F%E9%87%91%E6%AF%9B%23) `55.4K 🔥` `+28%`
1. [爷爷不泡茶 店员打人 (Grandpa didn’t make tea, so the clerk beat me)](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6%20%E5%BA%97%E5%91%98%E6%89%93%E4%BA%BA%23) `55.0K 🔥` `+27%`
1. [成绩好就随便吃14岁男孩吃出糖尿病 (A 14-year-old boy develops diabetes by eating whatever he wants if he has good grades)](https://s.weibo.com/weibo?q=%23%E6%88%90%E7%BB%A9%E5%A5%BD%E5%B0%B1%E9%9A%8F%E4%BE%BF%E5%90%8314%E5%B2%81%E7%94%B7%E5%AD%A9%E5%90%83%E5%87%BA%E7%B3%96%E5%B0%BF%E7%97%85%23) `54.8K 🔥` `+21%`
1. [陈小春帮宋亚轩整理胸花 (Jordan Chan helps Song Yaxuan arrange the corsage)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E5%B8%AE%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%95%B4%E7%90%86%E8%83%B8%E8%8A%B1%23) `54.5K 🔥` `+22%`
1. [沈腾演技](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%BC%94%E6%8A%80%23) `54.3K 🔥` `+23%`
1. [印度男子奸杀女孩离开警局缠满绷带 (Indian man rapes and kills girl and leaves police station covered with bandages)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E5%A5%B8%E6%9D%80%E5%A5%B3%E5%AD%A9%E7%A6%BB%E5%BC%80%E8%AD%A6%E5%B1%80%E7%BC%A0%E6%BB%A1%E7%BB%B7%E5%B8%A6%23) `53.9K 🔥` `+25%`
1. [西村力演唱会的发言](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E5%8F%91%E8%A8%80%23) `53.7K 🔥` `+22%`
1. [千亿巨头清仓英伟达 (Billionaire giant clears out Nvidia)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%BA%BF%E5%B7%A8%E5%A4%B4%E6%B8%85%E4%BB%93%E8%8B%B1%E4%BC%9F%E8%BE%BE%23) `53.4K 🔥` `+24%`
1. [王源 巡演看一场少一场](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%20%E5%B7%A1%E6%BC%94%E7%9C%8B%E4%B8%80%E5%9C%BA%E5%B0%91%E4%B8%80%E5%9C%BA%23) `52.2K 🔥` `+21%`
1. [长期穿碳板鞋的受害者出现了 (Victims of wearing carbon shoes for a long time appear)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%A9%BF%E7%A2%B3%E6%9D%BF%E9%9E%8B%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `142.6K 🔥`
1. [好像给麻辣烫店的脸太多了 (It seems that the Malatang shop has given too much face)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%83%8F%E7%BB%99%E9%BA%BB%E8%BE%A3%E7%83%AB%E5%BA%97%E7%9A%84%E8%84%B8%E5%A4%AA%E5%A4%9A%E4%BA%86%23) `99.3K 🔥`
1. [情侣平潭翻墙拍日出坠崖](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%B9%B3%E6%BD%AD%E7%BF%BB%E5%A2%99%E6%8B%8D%E6%97%A5%E5%87%BA%E5%9D%A0%E5%B4%96%23) `68.9K 🔥`
1. [王者荣耀电竞世俱杯总决赛 (Glory of Kings E-Sports Club World Cup Finals)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E7%94%B5%E7%AB%9E%E4%B8%96%E4%BF%B1%E6%9D%AF%E6%80%BB%E5%86%B3%E8%B5%9B%23) `51.9K 🔥`
1. [只有小时候发烧才有这种感觉 (I only felt like this when I had a fever when I was a child)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E5%B0%8F%E6%97%B6%E5%80%99%E5%8F%91%E7%83%A7%E6%89%8D%E6%9C%89%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89%23) `228.4K 🔥` `-41%`
1. [华晨宇刺激之夜COS童趣迷兔](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%88%BA%E6%BF%80%E4%B9%8B%E5%A4%9CCOS%E7%AB%A5%E8%B6%A3%E8%BF%B7%E5%85%94%23) `52.9K 🔥` `-80%`

Updated at 2026-08-09 07:13:34

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
