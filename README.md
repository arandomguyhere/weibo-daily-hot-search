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

1. [巴西队世界杯26人名单 (Brazil's 26-man World Cup roster)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E9%98%9F%E4%B8%96%E7%95%8C%E6%9D%AF26%E4%BA%BA%E5%90%8D%E5%8D%95%23) `1.0M 🔥` `NEW`
1. [张艺兴君佩全球首位品牌代言人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%85%B4%E5%90%9B%E4%BD%A9%E5%85%A8%E7%90%83%E9%A6%96%E4%BD%8D%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `657.1K 🔥` `NEW`
1. [中国中医药大会](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%AD%E5%8C%BB%E8%8D%AF%E5%A4%A7%E4%BC%9A%23) `203.1K 🔥` `NEW`
1. [感觉AI治好了我多年的老花眼](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89AI%E6%B2%BB%E5%A5%BD%E4%BA%86%E6%88%91%E5%A4%9A%E5%B9%B4%E7%9A%84%E8%80%81%E8%8A%B1%E7%9C%BC%23) `187.8K 🔥` `NEW`
1. [毛巾少爷发声](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%B7%BE%E5%B0%91%E7%88%B7%E5%8F%91%E5%A3%B0%23) `187.5K 🔥` `NEW`
1. [男子酒后多次骚扰女童被打索赔36万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E%E5%A4%9A%E6%AC%A1%E9%AA%9A%E6%89%B0%E5%A5%B3%E7%AB%A5%E8%A2%AB%E6%89%93%E7%B4%A2%E8%B5%9436%E4%B8%87%23) `187.2K 🔥` `NEW`
1. [王者520皮肤爆料](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85520%E7%9A%AE%E8%82%A4%E7%88%86%E6%96%99%23) `185.7K 🔥` `NEW`
1. [沃什将于22日宣誓就任美联储主席](https://s.weibo.com/weibo?q=%23%E6%B2%83%E4%BB%80%E5%B0%86%E4%BA%8E22%E6%97%A5%E5%AE%A3%E8%AA%93%E5%B0%B1%E4%BB%BB%E7%BE%8E%E8%81%94%E5%82%A8%E4%B8%BB%E5%B8%AD%23) `185.3K 🔥` `NEW`
1. [马斯克发视频点赞重庆东站](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%8F%91%E8%A7%86%E9%A2%91%E7%82%B9%E8%B5%9E%E9%87%8D%E5%BA%86%E4%B8%9C%E7%AB%99%23) `184.7K 🔥` `NEW`
1. [曝阿娇没有去阿Sa的婚礼](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%98%BF%E5%A8%87%E6%B2%A1%E6%9C%89%E5%8E%BB%E9%98%BFSa%E7%9A%84%E5%A9%9A%E7%A4%BC%23) `184.3K 🔥` `NEW`
1. [预制菜已经进化到开展会了 (Prepared dishes have evolved into a party)](https://s.weibo.com/weibo?q=%23%E9%A2%84%E5%88%B6%E8%8F%9C%E5%B7%B2%E7%BB%8F%E8%BF%9B%E5%8C%96%E5%88%B0%E5%BC%80%E5%B1%95%E4%BC%9A%E4%BA%86%23) `183.8K 🔥` `NEW`
1. [阿森纳1比0伯恩利](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B31%E6%AF%940%E4%BC%AF%E6%81%A9%E5%88%A9%23) `180.7K 🔥` `NEW`
1. [羊怕小朋友力气不够还知道搭把手](https://s.weibo.com/weibo?q=%23%E7%BE%8A%E6%80%95%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%8A%9B%E6%B0%94%E4%B8%8D%E5%A4%9F%E8%BF%98%E7%9F%A5%E9%81%93%E6%90%AD%E6%8A%8A%E6%89%8B%23) `166.8K 🔥` `NEW`
1. [五月天向柳州地震捐助100万元](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%9C%88%E5%A4%A9%E5%90%91%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E6%8D%90%E5%8A%A9100%E4%B8%87%E5%85%83%23) `166.3K 🔥` `NEW`
1. [面试看见铺这种地毯的公司要避雷](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E7%9C%8B%E8%A7%81%E9%93%BA%E8%BF%99%E7%A7%8D%E5%9C%B0%E6%AF%AF%E7%9A%84%E5%85%AC%E5%8F%B8%E8%A6%81%E9%81%BF%E9%9B%B7%23) `157.8K 🔥` `NEW`
1. [比药水杨梅更可怕的是别家都这样](https://s.weibo.com/weibo?q=%23%E6%AF%94%E8%8D%AF%E6%B0%B4%E6%9D%A8%E6%A2%85%E6%9B%B4%E5%8F%AF%E6%80%95%E7%9A%84%E6%98%AF%E5%88%AB%E5%AE%B6%E9%83%BD%E8%BF%99%E6%A0%B7%23) `104.9K 🔥` `NEW`
1. [帕梅拉夏天减肥法](https://s.weibo.com/weibo?q=%23%E5%B8%95%E6%A2%85%E6%8B%89%E5%A4%8F%E5%A4%A9%E5%87%8F%E8%82%A5%E6%B3%95%23) `91.1K 🔥` `NEW`
1. [520大屏文案已去恋爱化](https://s.weibo.com/weibo?q=%23520%E5%A4%A7%E5%B1%8F%E6%96%87%E6%A1%88%E5%B7%B2%E5%8E%BB%E6%81%8B%E7%88%B1%E5%8C%96%23) `73.4K 🔥` `NEW`
1. [祖峰 角色猥琐但本人儒雅](https://s.weibo.com/weibo?q=%23%E7%A5%96%E5%B3%B0%20%E8%A7%92%E8%89%B2%E7%8C%A5%E7%90%90%E4%BD%86%E6%9C%AC%E4%BA%BA%E5%84%92%E9%9B%85%23) `67.7K 🔥` `NEW`
1. [马斯克对OpenAI诉讼被驳回](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%AF%B9OpenAI%E8%AF%89%E8%AE%BC%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `66.7K 🔥` `NEW`
1. [特朗普连发15张图分享中国记忆 (Trump posts 15 pictures to share memories of China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BF%9E%E5%8F%9115%E5%BC%A0%E5%9B%BE%E5%88%86%E4%BA%AB%E4%B8%AD%E5%9B%BD%E8%AE%B0%E5%BF%86%23) `716.7K 🔥` `+103%`
1. [2026中国网络文明大会 (2026 China Internet Civilization Conference)](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E6%96%87%E6%98%8E%E5%A4%A7%E4%BC%9A%23) `663.4K 🔥` `+132%`
1. [长这么大终于听懂了商鞅变法](https://s.weibo.com/weibo?q=%23%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E7%BB%88%E4%BA%8E%E5%90%AC%E6%87%82%E4%BA%86%E5%95%86%E9%9E%85%E5%8F%98%E6%B3%95%23) `656.4K 🔥` `+35%`
1. [小朋友的世界是没有退路的 (There is no way out in the world of children)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9C%8B%E5%8F%8B%E7%9A%84%E4%B8%96%E7%95%8C%E6%98%AF%E6%B2%A1%E6%9C%89%E9%80%80%E8%B7%AF%E7%9A%84%23) `449.8K 🔥` `+136%`
1. [柳州地震遇难夫妻是当地菜市场商贩](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E9%81%87%E9%9A%BE%E5%A4%AB%E5%A6%BB%E6%98%AF%E5%BD%93%E5%9C%B0%E8%8F%9C%E5%B8%82%E5%9C%BA%E5%95%86%E8%B4%A9%23) `348.0K 🔥` `+382%`
1. [杨紫曹磊对手戏](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%9B%B9%E7%A3%8A%E5%AF%B9%E6%89%8B%E6%88%8F%23) `195.5K 🔥` `+77%`
1. [唐艺昕 这下妆卸干净了](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%20%E8%BF%99%E4%B8%8B%E5%A6%86%E5%8D%B8%E5%B9%B2%E5%87%80%E4%BA%86%23) `188.0K 🔥` `+203%`
1. [全村62人患癌多名村民发声 (62 people in the village are suffering from cancer, many villagers speak out)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%9D%9162%E4%BA%BA%E6%82%A3%E7%99%8C%E5%A4%9A%E5%90%8D%E6%9D%91%E6%B0%91%E5%8F%91%E5%A3%B0%23) `187.4K 🔥` `+158%`
1. [真有人在豆包预约餐厅 (Someone really made a restaurant reservation at Doubao)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%9C%89%E4%BA%BA%E5%9C%A8%E8%B1%86%E5%8C%85%E9%A2%84%E7%BA%A6%E9%A4%90%E5%8E%85%23) `187.0K 🔥` `+38%`
1. [孙杨曾致电马云寻求人生方向](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E6%9B%BE%E8%87%B4%E7%94%B5%E9%A9%AC%E4%BA%91%E5%AF%BB%E6%B1%82%E4%BA%BA%E7%94%9F%E6%96%B9%E5%90%91%23) `186.4K 🔥` `+156%`
1. [以防你没见过遛大型犬](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%98%B2%E4%BD%A0%E6%B2%A1%E8%A7%81%E8%BF%87%E9%81%9B%E5%A4%A7%E5%9E%8B%E7%8A%AC%23) `185.7K 🔥` `+155%`
1. [王安宇一手拉田曦薇一手拉黄明昊 (Wang Anyu holds Tian Xiwei in one hand and Huang Minghao in the other)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E4%B8%80%E6%89%8B%E6%8B%89%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%80%E6%89%8B%E6%8B%89%E9%BB%84%E6%98%8E%E6%98%8A%23) `185.0K 🔥` `+177%`
1. [柳州地震的原因找到了](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `183.7K 🔥` `+178%`
1. [娜塔莎无下限广告引学生模仿 (Natasha's no-limit advertisement attracts students to imitate)](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E5%A1%94%E8%8E%8E%E6%97%A0%E4%B8%8B%E9%99%90%E5%B9%BF%E5%91%8A%E5%BC%95%E5%AD%A6%E7%94%9F%E6%A8%A1%E4%BB%BF%23) `177.3K 🔥` `+145%`
1. [给阿嬷的情书 微博长尾效应](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E5%BE%AE%E5%8D%9A%E9%95%BF%E5%B0%BE%E6%95%88%E5%BA%94%23) `168.9K 🔥` `+155%`
1. [刘宇宁警官造型路透 (Police officer Liu Yuning style Reuters)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AD%A6%E5%AE%98%E9%80%A0%E5%9E%8B%E8%B7%AF%E9%80%8F%23) `167.3K 🔥` `+223%`
1. [特朗普访华整晚都在谈台湾问题 (Trump spent the whole night talking about Taiwan during his visit to China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%95%B4%E6%99%9A%E9%83%BD%E5%9C%A8%E8%B0%88%E5%8F%B0%E6%B9%BE%E9%97%AE%E9%A2%98%23) `147.6K 🔥` `+206%`
1. [老人恶意划车被拍车主报警](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%81%B6%E6%84%8F%E5%88%92%E8%BD%A6%E8%A2%AB%E6%8B%8D%E8%BD%A6%E4%B8%BB%E6%8A%A5%E8%AD%A6%23) `135.7K 🔥` `+116%`
1. [上海交大通报学生私吞竞赛奖金 (Shanghai Jiao Tong University reports that students misappropriated competition prize money)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E9%80%9A%E6%8A%A5%E5%AD%A6%E7%94%9F%E7%A7%81%E5%90%9E%E7%AB%9E%E8%B5%9B%E5%A5%96%E9%87%91%23) `132.5K 🔥` `+48%`
1. [本周做什么都顺的星座TOP4 (Top 4 zodiac signs that will go well with anything you do this week)](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7TOP4%23) `125.9K 🔥` `+126%`
1. [为什么领导总是那么精力充沛 (Why are leaders always so energetic?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E9%A2%86%E5%AF%BC%E6%80%BB%E6%98%AF%E9%82%A3%E4%B9%88%E7%B2%BE%E5%8A%9B%E5%85%85%E6%B2%9B%23) `107.4K 🔥` `+39%`
1. [台湾人疯狂批发霸王茶姬回家](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E4%BA%BA%E7%96%AF%E7%8B%82%E6%89%B9%E5%8F%91%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%9B%9E%E5%AE%B6%23) `106.1K 🔥` `+119%`
1. [武汉一村庄585人62人患癌](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E4%B8%80%E6%9D%91%E5%BA%84585%E4%BA%BA62%E4%BA%BA%E6%82%A3%E7%99%8C%23) `104.3K 🔥` `+45%`
1. [杨子家族疯狂套现超28亿](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%AD%90%E5%AE%B6%E6%97%8F%E7%96%AF%E7%8B%82%E5%A5%97%E7%8E%B0%E8%B6%8528%E4%BA%BF%23) `98.7K 🔥` `+37%`
1. [给阿嬷的情书 暴走老奶 (A love letter to my grandma, the runaway grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E6%9A%B4%E8%B5%B0%E8%80%81%E5%A5%B6%23) `73.9K 🔥` `+76%`
1. [五月天演唱会内地收官](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%9C%88%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E5%86%85%E5%9C%B0%E6%94%B6%E5%AE%98%23) `68.9K 🔥` `+65%`
1. [广州震感 (Guangzhou earthquake)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E9%9C%87%E6%84%9F%23) `67.1K 🔥` `+60%`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `66.7K 🔥` `+60%`
1. [王濛瘦成鹿晗了 (Wang Meng lost weight and became Lu Han)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%98%A6%E6%88%90%E9%B9%BF%E6%99%97%E4%BA%86%23) `186.5K 🔥` `-31%`
1. [唐艺昕9年了妆还没卸干净](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%959%E5%B9%B4%E4%BA%86%E5%A6%86%E8%BF%98%E6%B2%A1%E5%8D%B8%E5%B9%B2%E5%87%80%23) `186.1K 🔥` `-32%`
1. [曝蔡卓妍含泪控诉丈夫 (Charlene Choi tearfully accuses her husband)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%94%A1%E5%8D%93%E5%A6%8D%E5%90%AB%E6%B3%AA%E6%8E%A7%E8%AF%89%E4%B8%88%E5%A4%AB%23) `184.8K 🔥` `-29%`
1. [周杰伦昆凌大女儿长这么大了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%98%86%E5%87%8C%E5%A4%A7%E5%A5%B3%E5%84%BF%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `184.0K 🔥` `-32%`

Updated at 2026-05-19 07:45:06

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
