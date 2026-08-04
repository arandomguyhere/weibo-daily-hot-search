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

1. [印度新机场落成民众跳进喷泉嬉戏 (People jump into the fountain to play at India's new airport)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%96%B0%E6%9C%BA%E5%9C%BA%E8%90%BD%E6%88%90%E6%B0%91%E4%BC%97%E8%B7%B3%E8%BF%9B%E5%96%B7%E6%B3%89%E5%AC%89%E6%88%8F%23) `35.5K 🔥` `NEW`
1. [从一个烂苹果到第8代果菌王](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E4%B8%80%E4%B8%AA%E7%83%82%E8%8B%B9%E6%9E%9C%E5%88%B0%E7%AC%AC8%E4%BB%A3%E6%9E%9C%E8%8F%8C%E7%8E%8B%23) `35.5K 🔥` `NEW`
1. [花海给钎城拍了好多照片](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7%E7%BB%99%E9%92%8E%E5%9F%8E%E6%8B%8D%E4%BA%86%E5%A5%BD%E5%A4%9A%E7%85%A7%E7%89%87%23) `35.5K 🔥` `NEW`
1. [泰航拒绝20多名中国乘客登机 (Thai Airways refused to board more than 20 Chinese passengers)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E8%88%AA%E6%8B%92%E7%BB%9D20%E5%A4%9A%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%B9%98%E5%AE%A2%E7%99%BB%E6%9C%BA%23) `206.7K 🔥`
1. [天才女友语文成绩148](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%E8%AF%AD%E6%96%87%E6%88%90%E7%BB%A9148%23) `105.9K 🔥`
1. [卫星互联网低轨23组卫星发射成功 (23 sets of satellite Internet satellites in low orbit were successfully launched)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E6%98%9F%E4%BA%92%E8%81%94%E7%BD%91%E4%BD%8E%E8%BD%A823%E7%BB%84%E5%8D%AB%E6%98%9F%E5%8F%91%E5%B0%84%E6%88%90%E5%8A%9F%23) `88.2K 🔥`
1. [怪不得有人看病能在诊室待很久](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E6%9C%89%E4%BA%BA%E7%9C%8B%E7%97%85%E8%83%BD%E5%9C%A8%E8%AF%8A%E5%AE%A4%E5%BE%85%E5%BE%88%E4%B9%85%23) `88.1K 🔥`
1. [鸿蒙智行回应竹知了事件 (Hongmeng Zhixing responds to Zhu Zhi incident)](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E5%9B%9E%E5%BA%94%E7%AB%B9%E7%9F%A5%E4%BA%86%E4%BA%8B%E4%BB%B6%23) `73.9K 🔥`
1. [心理学上有个词叫螃蟹效应 (There is a term in psychology called the crab effect.)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%90%86%E5%AD%A6%E4%B8%8A%E6%9C%89%E4%B8%AA%E8%AF%8D%E5%8F%AB%E8%9E%83%E8%9F%B9%E6%95%88%E5%BA%94%23) `49.3K 🔥`
1. [金鹰奖 提名规则](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E6%8F%90%E5%90%8D%E8%A7%84%E5%88%99%23) `43.4K 🔥`
1. [中式片假名能不能离开我的生活 (Can Chinese katakana leave my life?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%BC%8F%E7%89%87%E5%81%87%E5%90%8D%E8%83%BD%E4%B8%8D%E8%83%BD%E7%A6%BB%E5%BC%80%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB%23) `51.2K 🔥` `-26%`
1. [死刑改死缓被害人家属十年后才知晓](https://s.weibo.com/weibo?q=%23%E6%AD%BB%E5%88%91%E6%94%B9%E6%AD%BB%E7%BC%93%E8%A2%AB%E5%AE%B3%E4%BA%BA%E5%AE%B6%E5%B1%9E%E5%8D%81%E5%B9%B4%E5%90%8E%E6%89%8D%E7%9F%A5%E6%99%93%23) `38.5K 🔥` `-26%`
1. [抱冬瓜降温第一批受害者出现 (The first victims of hugging winter melon to cool down appear)](https://s.weibo.com/weibo?q=%23%E6%8A%B1%E5%86%AC%E7%93%9C%E9%99%8D%E6%B8%A9%E7%AC%AC%E4%B8%80%E6%89%B9%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%23) `36.8K 🔥` `-81%`
1. [阿根廷队长为西班牙火灾捐款](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E9%95%BF%E4%B8%BA%E8%A5%BF%E7%8F%AD%E7%89%99%E7%81%AB%E7%81%BE%E6%8D%90%E6%AC%BE%23) `36.7K 🔥` `-29%`
1. [光模块](https://s.weibo.com/weibo?q=%23%E5%85%89%E6%A8%A1%E5%9D%97%23) `36.5K 🔥` `-29%`
1. [女孩8岁独居床头放菜刀现考上一本](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A98%E5%B2%81%E7%8B%AC%E5%B1%85%E5%BA%8A%E5%A4%B4%E6%94%BE%E8%8F%9C%E5%88%80%E7%8E%B0%E8%80%83%E4%B8%8A%E4%B8%80%E6%9C%AC%23) `36.0K 🔥` `-30%`
1. [宜宾地震 (Yibin earthquake)](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%23) `35.7K 🔥` `-31%`
1. [婚外胚胎案妻子称丈夫报警](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E7%A7%B0%E4%B8%88%E5%A4%AB%E6%8A%A5%E8%AD%A6%23) `35.6K 🔥` `-31%`
1. [女子被小三后实名举报985博士后](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%B0%8F%E4%B8%89%E5%90%8E%E5%AE%9E%E5%90%8D%E4%B8%BE%E6%8A%A5985%E5%8D%9A%E5%A3%AB%E5%90%8E%23) `35.6K 🔥` `-31%`
1. [八仙 (the Eight Immortals)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `35.6K 🔥` `-31%`
1. [上了年纪后的一些无意识行为](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%86%E5%B9%B4%E7%BA%AA%E5%90%8E%E7%9A%84%E4%B8%80%E4%BA%9B%E6%97%A0%E6%84%8F%E8%AF%86%E8%A1%8C%E4%B8%BA%23) `35.6K 🔥` `-31%`
1. [泰航尚未说明具体拒载中国乘客原因](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E8%88%AA%E5%B0%9A%E6%9C%AA%E8%AF%B4%E6%98%8E%E5%85%B7%E4%BD%93%E6%8B%92%E8%BD%BD%E4%B8%AD%E5%9B%BD%E4%B9%98%E5%AE%A2%E5%8E%9F%E5%9B%A0%23) `35.6K 🔥` `-31%`
1. [内娱新四大名著](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%96%B0%E5%9B%9B%E5%A4%A7%E5%90%8D%E8%91%97%23) `35.6K 🔥` `-31%`
1. [当十岁的妹妹有了自己的微信](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%8D%81%E5%B2%81%E7%9A%84%E5%A6%B9%E5%A6%B9%E6%9C%89%E4%BA%86%E8%87%AA%E5%B7%B1%E7%9A%84%E5%BE%AE%E4%BF%A1%23) `35.6K 🔥` `-31%`
1. [每天提早上班就为了看别人家狗](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E6%8F%90%E6%97%A9%E4%B8%8A%E7%8F%AD%E5%B0%B1%E4%B8%BA%E4%BA%86%E7%9C%8B%E5%88%AB%E4%BA%BA%E5%AE%B6%E7%8B%97%23) `35.6K 🔥` `-31%`
1. [蝴蝶振翅小伙2年成功增重30斤](https://s.weibo.com/weibo?q=%23%E8%9D%B4%E8%9D%B6%E6%8C%AF%E7%BF%85%E5%B0%8F%E4%BC%992%E5%B9%B4%E6%88%90%E5%8A%9F%E5%A2%9E%E9%87%8D30%E6%96%A4%23) `35.6K 🔥` `-31%`
1. [美拟禁新型光模块草案](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%8B%9F%E7%A6%81%E6%96%B0%E5%9E%8B%E5%85%89%E6%A8%A1%E5%9D%97%E8%8D%89%E6%A1%88%23) `35.6K 🔥` `-31%`
1. [胡锡进说鸿蒙智行声明值得一读 (Hu Xijin said Hongmeng Zhixing’s statement is worth reading)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E8%AF%B4%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E5%A3%B0%E6%98%8E%E5%80%BC%E5%BE%97%E4%B8%80%E8%AF%BB%23) `35.6K 🔥` `-31%`
1. [影视寒冬最不愁找工作的人 (The person who least worries about finding a job in the cold winter of film and television)](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E6%9C%80%E4%B8%8D%E6%84%81%E6%89%BE%E5%B7%A5%E4%BD%9C%E7%9A%84%E4%BA%BA%23) `35.6K 🔥` `-31%`
1. [鸿蒙智行针对侵权内容并非玩具](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E9%92%88%E5%AF%B9%E4%BE%B5%E6%9D%83%E5%86%85%E5%AE%B9%E5%B9%B6%E9%9D%9E%E7%8E%A9%E5%85%B7%23) `35.6K 🔥` `-31%`
1. [时差巴黎铁塔摄影大赛](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%B7%AE%E5%B7%B4%E9%BB%8E%E9%93%81%E5%A1%94%E6%91%84%E5%BD%B1%E5%A4%A7%E8%B5%9B%23) `35.6K 🔥` `-31%`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `35.6K 🔥` `-31%`
1. [冷冻肉超过这个时间就别吃了](https://s.weibo.com/weibo?q=%23%E5%86%B7%E5%86%BB%E8%82%89%E8%B6%85%E8%BF%87%E8%BF%99%E4%B8%AA%E6%97%B6%E9%97%B4%E5%B0%B1%E5%88%AB%E5%90%83%E4%BA%86%23) `35.6K 🔥` `-31%`
1. [小男孩浴室唱歌的视频火了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%94%B7%E5%AD%A9%E6%B5%B4%E5%AE%A4%E5%94%B1%E6%AD%8C%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `35.6K 🔥` `-31%`
1. [地球超新鲜2 弹幕 (Earth Fresh 2 Barrage)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E8%B6%85%E6%96%B0%E9%B2%9C2%20%E5%BC%B9%E5%B9%95%23) `35.6K 🔥` `-31%`
1. [樊振东的奥运金牌含金量有多高](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%9A%84%E5%A5%A5%E8%BF%90%E9%87%91%E7%89%8C%E5%90%AB%E9%87%91%E9%87%8F%E6%9C%89%E5%A4%9A%E9%AB%98%23) `35.6K 🔥` `-31%`
1. [发朋友圈还要幸福者退让原则](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%BF%98%E8%A6%81%E5%B9%B8%E7%A6%8F%E8%80%85%E9%80%80%E8%AE%A9%E5%8E%9F%E5%88%99%23) `35.6K 🔥` `-31%`
1. [住酒店被蚊子咬墙皮砸头索赔5千元](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E9%85%92%E5%BA%97%E8%A2%AB%E8%9A%8A%E5%AD%90%E5%92%AC%E5%A2%99%E7%9A%AE%E7%A0%B8%E5%A4%B4%E7%B4%A2%E8%B5%945%E5%8D%83%E5%85%83%23) `35.6K 🔥` `-31%`
1. [轻松绷住](https://s.weibo.com/weibo?q=%23%E8%BD%BB%E6%9D%BE%E7%BB%B7%E4%BD%8F%23) `35.6K 🔥` `-31%`
1. [一诺在巴黎收集铁塔的昼与夜 (Yinuo collects the day and night of the Eiffel Tower in Paris)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%9C%A8%E5%B7%B4%E9%BB%8E%E6%94%B6%E9%9B%86%E9%93%81%E5%A1%94%E7%9A%84%E6%98%BC%E4%B8%8E%E5%A4%9C%23) `35.6K 🔥` `-31%`
1. [阿根廷中国行对手可能是国足](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%AD%E5%9B%BD%E8%A1%8C%E5%AF%B9%E6%89%8B%E5%8F%AF%E8%83%BD%E6%98%AF%E5%9B%BD%E8%B6%B3%23) `35.5K 🔥` `-31%`
1. [官方通报卫生巾疑有虫卵](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8D%AB%E7%94%9F%E5%B7%BE%E7%96%91%E6%9C%89%E8%99%AB%E5%8D%B5%23) `35.5K 🔥` `-31%`
1. [建议大家买行李箱不要太大众](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B9%B0%E8%A1%8C%E6%9D%8E%E7%AE%B1%E4%B8%8D%E8%A6%81%E5%A4%AA%E5%A4%A7%E4%BC%97%23) `35.5K 🔥` `-31%`
1. [韩国取消检察机关侦查权](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%8F%96%E6%B6%88%E6%A3%80%E5%AF%9F%E6%9C%BA%E5%85%B3%E4%BE%A6%E6%9F%A5%E6%9D%83%23) `35.5K 🔥` `-31%`
1. [无畏摄影不收徒](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E6%91%84%E5%BD%B1%E4%B8%8D%E6%94%B6%E5%BE%92%23) `35.5K 🔥` `-31%`
1. [情绪价值十年前罗子君随手就给了](https://s.weibo.com/weibo?q=%23%E6%83%85%E7%BB%AA%E4%BB%B7%E5%80%BC%E5%8D%81%E5%B9%B4%E5%89%8D%E7%BD%97%E5%AD%90%E5%90%9B%E9%9A%8F%E6%89%8B%E5%B0%B1%E7%BB%99%E4%BA%86%23) `35.5K 🔥` `-31%`
1. [陈哲远看九门曾舜晞看御廷谣 (Chen Zheyuan watched the Nine Gates and Zeng Shunxi watched the Royal Court Ballad)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E7%9C%8B%E4%B9%9D%E9%97%A8%E6%9B%BE%E8%88%9C%E6%99%9E%E7%9C%8B%E5%BE%A1%E5%BB%B7%E8%B0%A3%23) `35.5K 🔥` `-31%`
1. [小偷叫3辆货拉拉拖走价值20万摩托车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%81%B7%E5%8F%AB3%E8%BE%86%E8%B4%A7%E6%8B%89%E6%8B%89%E6%8B%96%E8%B5%B0%E4%BB%B7%E5%80%BC20%E4%B8%87%E6%91%A9%E6%89%98%E8%BD%A6%23) `35.5K 🔥` `-31%`
1. [女子旅游错把丧葬品当纪念品买下](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%97%85%E6%B8%B8%E9%94%99%E6%8A%8A%E4%B8%A7%E8%91%AC%E5%93%81%E5%BD%93%E7%BA%AA%E5%BF%B5%E5%93%81%E4%B9%B0%E4%B8%8B%23) `35.5K 🔥` `-82%`
1. [8岁女孩独居两年后被老师收养](https://s.weibo.com/weibo?q=%238%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%8B%AC%E5%B1%85%E4%B8%A4%E5%B9%B4%E5%90%8E%E8%A2%AB%E8%80%81%E5%B8%88%E6%94%B6%E5%85%BB%23) `35.5K 🔥` `-31%`

Updated at 2026-08-05 05:21:17

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
