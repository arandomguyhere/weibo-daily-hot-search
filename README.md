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

1. [婚外试管丈夫声称离婚5个0不属实 (Extramarital IVF Husband’s Claim That Divorce Was Five Zeroes Isn’t True)](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%AF%95%E7%AE%A1%E4%B8%88%E5%A4%AB%E5%A3%B0%E7%A7%B0%E7%A6%BB%E5%A9%9A5%E4%B8%AA0%E4%B8%8D%E5%B1%9E%E5%AE%9E%23) `2.2M 🔥` `NEW`
1. [花开锦绣定档](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E5%AE%9A%E6%A1%A3%23) `1.7M 🔥` `NEW`
1. [我军三型无人机成体系应用首次公开](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%86%9B%E4%B8%89%E5%9E%8B%E6%97%A0%E4%BA%BA%E6%9C%BA%E6%88%90%E4%BD%93%E7%B3%BB%E5%BA%94%E7%94%A8%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%23) `1.3M 🔥` `NEW`
1. [不要抽穷公司的团建奖](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E6%8A%BD%E7%A9%B7%E5%85%AC%E5%8F%B8%E7%9A%84%E5%9B%A2%E5%BB%BA%E5%A5%96%23) `1.2M 🔥` `NEW`
1. [张凌赫卢昱晓 刺棠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8D%A2%E6%98%B1%E6%99%93%20%E5%88%BA%E6%A3%A0%23) `978.7K 🔥` `NEW`
1. [DeepSeek斩杀线](https://s.weibo.com/weibo?q=%23DeepSeek%E6%96%A9%E6%9D%80%E7%BA%BF%23) `887.1K 🔥` `NEW`
1. [这届微小说作者全是狠人](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%8A%E5%BE%AE%E5%B0%8F%E8%AF%B4%E4%BD%9C%E8%80%85%E5%85%A8%E6%98%AF%E7%8B%A0%E4%BA%BA%23) `752.3K 🔥` `NEW`
1. [歌手总决赛帮唱](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%E5%B8%AE%E5%94%B1%23) `688.8K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `665.6K 🔥` `NEW`
1. [吴敬平将去樊振东杜塞尔多夫俱乐部](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%95%AC%E5%B9%B3%E5%B0%86%E5%8E%BB%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%E4%BF%B1%E4%B9%90%E9%83%A8%23) `508.0K 🔥` `NEW`
1. [周也发光野玫瑰 (Zhou Ye Glowing Wild Rose)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%8F%91%E5%85%89%E9%87%8E%E7%8E%AB%E7%91%B0%23) `485.4K 🔥` `NEW`
1. [钟美美回应4年留学花费约300万](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%BE%8E%E7%BE%8E%E5%9B%9E%E5%BA%944%E5%B9%B4%E7%95%99%E5%AD%A6%E8%8A%B1%E8%B4%B9%E7%BA%A6300%E4%B8%87%23) `475.0K 🔥` `NEW`
1. [几乎灭绝的床虱为何又卷土重来](https://s.weibo.com/weibo?q=%23%E5%87%A0%E4%B9%8E%E7%81%AD%E7%BB%9D%E7%9A%84%E5%BA%8A%E8%99%B1%E4%B8%BA%E4%BD%95%E5%8F%88%E5%8D%B7%E5%9C%9F%E9%87%8D%E6%9D%A5%23) `444.0K 🔥` `NEW`
1. [钟美美称被父亲家暴至今恐惧敲门声](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%BE%8E%E7%BE%8E%E7%A7%B0%E8%A2%AB%E7%88%B6%E4%BA%B2%E5%AE%B6%E6%9A%B4%E8%87%B3%E4%BB%8A%E6%81%90%E6%83%A7%E6%95%B2%E9%97%A8%E5%A3%B0%23) `411.4K 🔥` `NEW`
1. [终于知道自助小火锅限时的原因了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E8%87%AA%E5%8A%A9%E5%B0%8F%E7%81%AB%E9%94%85%E9%99%90%E6%97%B6%E7%9A%84%E5%8E%9F%E5%9B%A0%E4%BA%86%23) `375.9K 🔥` `NEW`
1. [8成以上用户愿意帮李斌卖车](https://s.weibo.com/weibo?q=%238%E6%88%90%E4%BB%A5%E4%B8%8A%E7%94%A8%E6%88%B7%E6%84%BF%E6%84%8F%E5%B8%AE%E6%9D%8E%E6%96%8C%E5%8D%96%E8%BD%A6%23) `342.6K 🔥` `NEW`
1. [日本员工拒绝返回商场躲过爆炸](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%91%98%E5%B7%A5%E6%8B%92%E7%BB%9D%E8%BF%94%E5%9B%9E%E5%95%86%E5%9C%BA%E8%BA%B2%E8%BF%87%E7%88%86%E7%82%B8%23) `334.6K 🔥` `NEW`
1. [杜兰特称当年勇士不比如今76人](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B9%E7%A7%B0%E5%BD%93%E5%B9%B4%E5%8B%87%E5%A3%AB%E4%B8%8D%E6%AF%94%E5%A6%82%E4%BB%8A76%E4%BA%BA%23) `276.3K 🔥` `NEW`
1. [7岁女童性早熟竟是美甲贴纸所致](https://s.weibo.com/weibo?q=%237%E5%B2%81%E5%A5%B3%E7%AB%A5%E6%80%A7%E6%97%A9%E7%86%9F%E7%AB%9F%E6%98%AF%E7%BE%8E%E7%94%B2%E8%B4%B4%E7%BA%B8%E6%89%80%E8%87%B4%23) `276.2K 🔥` `NEW`
1. [婚外胚胎案妻子回应丈夫转生活费](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E4%B8%88%E5%A4%AB%E8%BD%AC%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `276.1K 🔥` `NEW`
1. [9岁女孩性早熟骨骼已接近闭合 (A 9-year-old girl has precocious puberty and her bones are close to closing)](https://s.weibo.com/weibo?q=%239%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%80%A7%E6%97%A9%E7%86%9F%E9%AA%A8%E9%AA%BC%E5%B7%B2%E6%8E%A5%E8%BF%91%E9%97%AD%E5%90%88%23) `274.5K 🔥` `NEW`
1. [偶遇宋威龙全伊伦散步](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%AE%8B%E5%A8%81%E9%BE%99%E5%85%A8%E4%BC%8A%E4%BC%A6%E6%95%A3%E6%AD%A5%23) `272.7K 🔥` `NEW`
1. [丁程鑫 避谶](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%20%E9%81%BF%E8%B0%B6%23) `272.4K 🔥` `NEW`
1. [日本多次向外国灾区送千纸鹤被婉拒](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%9A%E6%AC%A1%E5%90%91%E5%A4%96%E5%9B%BD%E7%81%BE%E5%8C%BA%E9%80%81%E5%8D%83%E7%BA%B8%E9%B9%A4%E8%A2%AB%E5%A9%89%E6%8B%92%23) `270.7K 🔥` `NEW`
1. [打工人三件套集体大涨价](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%B7%A5%E4%BA%BA%E4%B8%89%E4%BB%B6%E5%A5%97%E9%9B%86%E4%BD%93%E5%A4%A7%E6%B6%A8%E4%BB%B7%23) `269.5K 🔥` `NEW`
1. [罗正经纪人问到底动了谁的蛋糕](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E7%BB%8F%E7%BA%AA%E4%BA%BA%E9%97%AE%E5%88%B0%E5%BA%95%E5%8A%A8%E4%BA%86%E8%B0%81%E7%9A%84%E8%9B%8B%E7%B3%95%23) `268.6K 🔥` `NEW`
1. [TF四代五公抢票](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%E6%8A%A2%E7%A5%A8%23) `266.6K 🔥` `NEW`
1. [张真源OMG你吓到摄像大哥了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90OMG%E4%BD%A0%E5%90%93%E5%88%B0%E6%91%84%E5%83%8F%E5%A4%A7%E5%93%A5%E4%BA%86%23) `266.0K 🔥` `NEW`
1. [韩国年轻人正进入无恋爱社会](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%AD%A3%E8%BF%9B%E5%85%A5%E6%97%A0%E6%81%8B%E7%88%B1%E7%A4%BE%E4%BC%9A%23) `264.2K 🔥` `NEW`
1. [樊振东巴黎夺冠成就超级金满贯](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B7%B4%E9%BB%8E%E5%A4%BA%E5%86%A0%E6%88%90%E5%B0%B1%E8%B6%85%E7%BA%A7%E9%87%91%E6%BB%A1%E8%B4%AF%23) `262.8K 🔥` `NEW`
1. [王一博在新西兰还穿大棉袄 (Wang Yibo even wore a large cotton-padded jacket in New Zealand)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%9C%A8%E6%96%B0%E8%A5%BF%E5%85%B0%E8%BF%98%E7%A9%BF%E5%A4%A7%E6%A3%89%E8%A2%84%23) `260.7K 🔥` `NEW`
1. [丈夫称愿意销毁胚胎患癌妻子回应](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E7%A7%B0%E6%84%BF%E6%84%8F%E9%94%80%E6%AF%81%E8%83%9A%E8%83%8E%E6%82%A3%E7%99%8C%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%23) `258.4K 🔥` `NEW`
1. [终于有人把夏天的感觉形容出来了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E6%8A%8A%E5%A4%8F%E5%A4%A9%E7%9A%84%E6%84%9F%E8%A7%89%E5%BD%A2%E5%AE%B9%E5%87%BA%E6%9D%A5%E4%BA%86%23) `257.4K 🔥` `NEW`
1. [Wendy的胯引起热议](https://s.weibo.com/weibo?q=%23Wendy%E7%9A%84%E8%83%AF%E5%BC%95%E8%B5%B7%E7%83%AD%E8%AE%AE%23) `255.6K 🔥` `NEW`
1. [谁家男女主白天叫夫君晚上捅刀子](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%AE%B6%E7%94%B7%E5%A5%B3%E4%B8%BB%E7%99%BD%E5%A4%A9%E5%8F%AB%E5%A4%AB%E5%90%9B%E6%99%9A%E4%B8%8A%E6%8D%85%E5%88%80%E5%AD%90%23) `252.8K 🔥` `NEW`
1. [A股光又回来了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%85%89%E5%8F%88%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `252.0K 🔥` `NEW`
1. [钟丽缇自曝每周染发遮盖白发](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E8%87%AA%E6%9B%9D%E6%AF%8F%E5%91%A8%E6%9F%93%E5%8F%91%E9%81%AE%E7%9B%96%E7%99%BD%E5%8F%91%23) `251.5K 🔥` `NEW`
1. [面试要精通AI 入职不给配token](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E8%A6%81%E7%B2%BE%E9%80%9AAI%20%E5%85%A5%E8%81%8C%E4%B8%8D%E7%BB%99%E9%85%8Dtoken%23) `249.5K 🔥` `NEW`
1. [钟美美感谢当年教育局接线员言论](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%BE%8E%E7%BE%8E%E6%84%9F%E8%B0%A2%E5%BD%93%E5%B9%B4%E6%95%99%E8%82%B2%E5%B1%80%E6%8E%A5%E7%BA%BF%E5%91%98%E8%A8%80%E8%AE%BA%23) `248.9K 🔥` `NEW`
1. [钟美美谈拉黑父亲原因](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%BE%8E%E7%BE%8E%E8%B0%88%E6%8B%89%E9%BB%91%E7%88%B6%E4%BA%B2%E5%8E%9F%E5%9B%A0%23) `247.6K 🔥` `NEW`
1. [仙剑翻拍吗我有人选 (Is there a remake of Fairy Sword? I have a candidate)](https://s.weibo.com/weibo?q=%23%E4%BB%99%E5%89%91%E7%BF%BB%E6%8B%8D%E5%90%97%E6%88%91%E6%9C%89%E4%BA%BA%E9%80%89%23) `244.6K 🔥` `NEW`
1. [婚外胚胎案患癌妻子已报案](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E6%82%A3%E7%99%8C%E5%A6%BB%E5%AD%90%E5%B7%B2%E6%8A%A5%E6%A1%88%23) `242.2K 🔥` `NEW`
1. [怪不得那么多人选择去澳大利亚留学](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%82%A3%E4%B9%88%E5%A4%9A%E4%BA%BA%E9%80%89%E6%8B%A9%E5%8E%BB%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E7%95%99%E5%AD%A6%23) `239.6K 🔥` `NEW`
1. [罗正一年花170元146给了苹果 (Luo Zheng spent 170 yuan 146 a year on Apple)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E4%B8%80%E5%B9%B4%E8%8A%B1170%E5%85%83146%E7%BB%99%E4%BA%86%E8%8B%B9%E6%9E%9C%23) `403.0K 🔥` `+29%`
1. [杀个西瓜吃欧洲西瓜太硬了](https://s.weibo.com/weibo?q=%23%E6%9D%80%E4%B8%AA%E8%A5%BF%E7%93%9C%E5%90%83%E6%AC%A7%E6%B4%B2%E8%A5%BF%E7%93%9C%E5%A4%AA%E7%A1%AC%E4%BA%86%23) `261.8K 🔥`
1. [马嘉祺丁程鑫严浩翔身体现状](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%BA%AB%E4%BD%93%E7%8E%B0%E7%8A%B6%23) `259.2K 🔥`
1. [迪丽热巴 闵塔鲨 (Dilraba Minta Shark)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E9%97%B5%E5%A1%94%E9%B2%A8%23) `254.8K 🔥`
1. [建议不要和已产生隔阂的人示好](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E5%92%8C%E5%B7%B2%E4%BA%A7%E7%94%9F%E9%9A%94%E9%98%82%E7%9A%84%E4%BA%BA%E7%A4%BA%E5%A5%BD%23) `241.1K 🔥`
1. [国庆假期上3休7上3](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%81%87%E6%9C%9F%E4%B8%8A3%E4%BC%917%E4%B8%8A3%23) `622.8K 🔥` `-68%`
1. [东莞9岁女孩确诊性早熟 (9-year-old girl in Dongguan diagnosed with precocious puberty)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%8E%9E9%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%A1%AE%E8%AF%8A%E6%80%A7%E6%97%A9%E7%86%9F%23) `246.1K 🔥` `-22%`
1. [钟美美自曝38岁母亲求职一年未果](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%BE%8E%E7%BE%8E%E8%87%AA%E6%9B%9D38%E5%B2%81%E6%AF%8D%E4%BA%B2%E6%B1%82%E8%81%8C%E4%B8%80%E5%B9%B4%E6%9C%AA%E6%9E%9C%23) `243.9K 🔥` `-21%`

Updated at 2026-08-04 12:30:31

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
