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

1. [强闯我驻日使馆不法之徒长相公开 (The faces of the criminals who forced their way into our embassy in Japan are revealed)](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E9%97%AF%E6%88%91%E9%A9%BB%E6%97%A5%E4%BD%BF%E9%A6%86%E4%B8%8D%E6%B3%95%E4%B9%8B%E5%BE%92%E9%95%BF%E7%9B%B8%E5%85%AC%E5%BC%80%23) `810.5K 🔥` `NEW`
1. [家长违停孩子开门杀撞人后逃逸](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E8%BF%9D%E5%81%9C%E5%AD%A9%E5%AD%90%E5%BC%80%E9%97%A8%E6%9D%80%E6%92%9E%E4%BA%BA%E5%90%8E%E9%80%83%E9%80%B8%23) `767.0K 🔥` `NEW`
1. [一笑随歌爱奇艺双榜超逐玉](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%91%E9%9A%8F%E6%AD%8C%E7%88%B1%E5%A5%87%E8%89%BA%E5%8F%8C%E6%A6%9C%E8%B6%85%E9%80%90%E7%8E%89%23) `764.5K 🔥` `NEW`
1. [康平路线下追光plog](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%B9%B3%E8%B7%AF%E7%BA%BF%E4%B8%8B%E8%BF%BD%E5%85%89plog%23) `762.6K 🔥` `NEW`
1. [能做夫妻是有点玄学在身上的](https://s.weibo.com/weibo?q=%23%E8%83%BD%E5%81%9A%E5%A4%AB%E5%A6%BB%E6%98%AF%E6%9C%89%E7%82%B9%E7%8E%84%E5%AD%A6%E5%9C%A8%E8%BA%AB%E4%B8%8A%E7%9A%84%23) `762.3K 🔥` `NEW`
1. [睡眠不足当心运动变成无效消耗](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E7%9C%A0%E4%B8%8D%E8%B6%B3%E5%BD%93%E5%BF%83%E8%BF%90%E5%8A%A8%E5%8F%98%E6%88%90%E6%97%A0%E6%95%88%E6%B6%88%E8%80%97%23) `757.1K 🔥` `NEW`
1. [林志玲51岁体态](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E7%8E%B251%E5%B2%81%E4%BD%93%E6%80%81%23) `751.3K 🔥` `NEW`
1. [原来骑手知道你在看配送进度](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%AA%91%E6%89%8B%E7%9F%A5%E9%81%93%E4%BD%A0%E5%9C%A8%E7%9C%8B%E9%85%8D%E9%80%81%E8%BF%9B%E5%BA%A6%23) `750.6K 🔥` `NEW`
1. [张雪峰追悼会将于周六举行](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E8%BF%BD%E6%82%BC%E4%BC%9A%E5%B0%86%E4%BA%8E%E5%91%A8%E5%85%AD%E4%B8%BE%E8%A1%8C%23) `278.4K 🔥` `NEW`
1. [俄乌战场惊现持枪人形机器人](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B9%8C%E6%88%98%E5%9C%BA%E6%83%8A%E7%8E%B0%E6%8C%81%E6%9E%AA%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `253.3K 🔥` `NEW`
1. [乐华建议向王一博授出股份奖励 (Leroy recommends granting share awards to Wang Yibo)](https://s.weibo.com/weibo?q=%23%E4%B9%90%E5%8D%8E%E5%BB%BA%E8%AE%AE%E5%90%91%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%8E%88%E5%87%BA%E8%82%A1%E4%BB%BD%E5%A5%96%E5%8A%B1%23) `207.8K 🔥` `NEW`
1. [章若楠真维斯甜度超标](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%9C%9F%E7%BB%B4%E6%96%AF%E7%94%9C%E5%BA%A6%E8%B6%85%E6%A0%87%23) `206.8K 🔥` `NEW`
1. [男子停车遇阻起争执后对方摔倒死亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%9C%E8%BD%A6%E9%81%87%E9%98%BB%E8%B5%B7%E4%BA%89%E6%89%A7%E5%90%8E%E5%AF%B9%E6%96%B9%E6%91%94%E5%80%92%E6%AD%BB%E4%BA%A1%23) `205.0K 🔥` `NEW`
1. [继母见女孩学习就虐待殴打撕书](https://s.weibo.com/weibo?q=%23%E7%BB%A7%E6%AF%8D%E8%A7%81%E5%A5%B3%E5%AD%A9%E5%AD%A6%E4%B9%A0%E5%B0%B1%E8%99%90%E5%BE%85%E6%AE%B4%E6%89%93%E6%92%95%E4%B9%A6%23) `204.0K 🔥` `NEW`
1. [微信聊天为什么会出现对方正在输入](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%81%8A%E5%A4%A9%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E5%87%BA%E7%8E%B0%E5%AF%B9%E6%96%B9%E6%AD%A3%E5%9C%A8%E8%BE%93%E5%85%A5%23) `201.6K 🔥` `NEW`
1. [每天3分钟平板撑一个月后的效果](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A93%E5%88%86%E9%92%9F%E5%B9%B3%E6%9D%BF%E6%92%91%E4%B8%80%E4%B8%AA%E6%9C%88%E5%90%8E%E7%9A%84%E6%95%88%E6%9E%9C%23) `200.7K 🔥` `NEW`
1. [女子被骗50万元民警追回100万元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E9%AA%9750%E4%B8%87%E5%85%83%E6%B0%91%E8%AD%A6%E8%BF%BD%E5%9B%9E100%E4%B8%87%E5%85%83%23) `178.0K 🔥` `NEW`
1. [郭敬明 月鳞绮纪](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%20%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `174.8K 🔥` `NEW`
1. [孟子义李昀锐奔跑吧14路透](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E5%A5%94%E8%B7%91%E5%90%A714%E8%B7%AF%E9%80%8F%23) `165.3K 🔥` `NEW`
1. [杨笠回应清空账号](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%AC%A0%E5%9B%9E%E5%BA%94%E6%B8%85%E7%A9%BA%E8%B4%A6%E5%8F%B7%23) `160.3K 🔥` `NEW`
1. [王腾警告调侃雷军一律拉黑 (Wang Teng warns anyone who teases Lei Jun to be blacklisted)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E8%AD%A6%E5%91%8A%E8%B0%83%E4%BE%83%E9%9B%B7%E5%86%9B%E4%B8%80%E5%BE%8B%E6%8B%89%E9%BB%91%23) `149.4K 🔥` `NEW`
1. [刘晓庆外甥方否认造谣](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%86%E5%A4%96%E7%94%A5%E6%96%B9%E5%90%A6%E8%AE%A4%E9%80%A0%E8%B0%A3%23) `138.7K 🔥` `NEW`
1. [多地取消统一早读](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%8F%96%E6%B6%88%E7%BB%9F%E4%B8%80%E6%97%A9%E8%AF%BB%23) `130.9K 🔥` `NEW`
1. [男子在非洲开手机网吧生意火爆](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E9%9D%9E%E6%B4%B2%E5%BC%80%E6%89%8B%E6%9C%BA%E7%BD%91%E5%90%A7%E7%94%9F%E6%84%8F%E7%81%AB%E7%88%86%23) `122.7K 🔥` `NEW`
1. [日本自卫队将登陆菲律宾](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%87%AA%E5%8D%AB%E9%98%9F%E5%B0%86%E7%99%BB%E9%99%86%E8%8F%B2%E5%BE%8B%E5%AE%BE%23) `119.1K 🔥` `NEW`
1. [成千上万只乌鸦在以色列上空盘旋](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%8D%83%E4%B8%8A%E4%B8%87%E5%8F%AA%E4%B9%8C%E9%B8%A6%E5%9C%A8%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%8A%E7%A9%BA%E7%9B%98%E6%97%8B%23) `106.4K 🔥` `NEW`
1. [陶喆抓包员工摸鱼](https://s.weibo.com/weibo?q=%23%E9%99%B6%E5%96%86%E6%8A%93%E5%8C%85%E5%91%98%E5%B7%A5%E6%91%B8%E9%B1%BC%23) `104.7K 🔥` `NEW`
1. [70万韩国青年放弃求职选择休息](https://s.weibo.com/weibo?q=%2370%E4%B8%87%E9%9F%A9%E5%9B%BD%E9%9D%92%E5%B9%B4%E6%94%BE%E5%BC%83%E6%B1%82%E8%81%8C%E9%80%89%E6%8B%A9%E4%BC%91%E6%81%AF%23) `104.6K 🔥` `NEW`
1. [周杰伦淘金小镇MV](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%B7%98%E9%87%91%E5%B0%8F%E9%95%87MV%23) `104.6K 🔥` `NEW`
1. [前体操冠军陷擦边争议后不敢出门](https://s.weibo.com/weibo?q=%23%E5%89%8D%E4%BD%93%E6%93%8D%E5%86%A0%E5%86%9B%E9%99%B7%E6%93%A6%E8%BE%B9%E4%BA%89%E8%AE%AE%E5%90%8E%E4%B8%8D%E6%95%A2%E5%87%BA%E9%97%A8%23) `101.2K 🔥` `NEW`
1. [一个更危险的日本正在冒头 (A more dangerous Japan is emerging)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%8D%B1%E9%99%A9%E7%9A%84%E6%97%A5%E6%9C%AC%E6%AD%A3%E5%9C%A8%E5%86%92%E5%A4%B4%23) `97.9K 🔥` `NEW`
1. [曾经卖300元苹果机现在回收价20](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E7%BB%8F%E5%8D%96300%E5%85%83%E8%8B%B9%E6%9E%9C%E6%9C%BA%E7%8E%B0%E5%9C%A8%E5%9B%9E%E6%94%B6%E4%BB%B720%23) `96.4K 🔥` `NEW`
1. [金山办公回复雷军](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%B1%B1%E5%8A%9E%E5%85%AC%E5%9B%9E%E5%A4%8D%E9%9B%B7%E5%86%9B%23) `95.3K 🔥` `NEW`
1. [小哥爬7楼送外卖看到牌匾瞬间愣住](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%93%A5%E7%88%AC7%E6%A5%BC%E9%80%81%E5%A4%96%E5%8D%96%E7%9C%8B%E5%88%B0%E7%89%8C%E5%8C%BE%E7%9E%AC%E9%97%B4%E6%84%A3%E4%BD%8F%23) `1.1M 🔥` `+42%`
1. [我国成功发射四维高景二号0506星](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%88%90%E5%8A%9F%E5%8F%91%E5%B0%84%E5%9B%9B%E7%BB%B4%E9%AB%98%E6%99%AF%E4%BA%8C%E5%8F%B70506%E6%98%9F%23) `780.1K 🔥` `+25%`
1. [埃安N60盲订开启 (Aian N60 blind order starts)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%AE%89N60%E7%9B%B2%E8%AE%A2%E5%BC%80%E5%90%AF%23) `772.8K 🔥` `+383%`
1. [白鹿留洋大小姐造型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%95%99%E6%B4%8B%E5%A4%A7%E5%B0%8F%E5%A7%90%E9%80%A0%E5%9E%8B%23) `765.3K 🔥` `+270%`
1. [伊朗开出停战5个条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%BC%80%E5%87%BA%E5%81%9C%E6%88%985%E4%B8%AA%E6%9D%A1%E4%BB%B6%23) `759.6K 🔥` `+31%`
1. [你的意外险可能不保猝死](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E6%84%8F%E5%A4%96%E9%99%A9%E5%8F%AF%E8%83%BD%E4%B8%8D%E4%BF%9D%E7%8C%9D%E6%AD%BB%23) `753.3K 🔥` `+710%`
1. [晋江副总裁称开发票是魔法攻击](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E5%89%AF%E6%80%BB%E8%A3%81%E7%A7%B0%E5%BC%80%E5%8F%91%E7%A5%A8%E6%98%AF%E9%AD%94%E6%B3%95%E6%94%BB%E5%87%BB%23) `292.8K 🔥` `+40%`
1. [张雪峰丧事不设追思会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E4%B8%A7%E4%BA%8B%E4%B8%8D%E8%AE%BE%E8%BF%BD%E6%80%9D%E4%BC%9A%23) `208.5K 🔥`
1. [医生谈颜如晶一年减重2.9斤 (Doctor talks about Yan Rujing losing 2.9 pounds in one year)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%B0%88%E9%A2%9C%E5%A6%82%E6%99%B6%E4%B8%80%E5%B9%B4%E5%87%8F%E9%87%8D2.9%E6%96%A4%23) `198.3K 🔥`
1. [吴柳芳谈擦边风波 (Wu Liufang talks about the incident)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%9F%B3%E8%8A%B3%E8%B0%88%E6%93%A6%E8%BE%B9%E9%A3%8E%E6%B3%A2%23) `163.7K 🔥` `-23%`
1. [奔跑吧路透](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E8%B7%AF%E9%80%8F%23) `161.5K 🔥` `-21%`
1. [王俊凯新歌上线](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%96%B0%E6%AD%8C%E4%B8%8A%E7%BA%BF%23) `149.1K 🔥` `-33%`
1. [曝月鳞绮纪又撤档了 (Moonscale Qiji has been withdrawn again)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%8F%88%E6%92%A4%E6%A1%A3%E4%BA%86%23) `146.7K 🔥` `-86%`
1. [伊朗官媒发炸毁自由女神像AI视频](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AE%98%E5%AA%92%E5%8F%91%E7%82%B8%E6%AF%81%E8%87%AA%E7%94%B1%E5%A5%B3%E7%A5%9E%E5%83%8FAI%E8%A7%86%E9%A2%91%23) `141.0K 🔥` `-34%`
1. [汪苏泷明日世界演唱会官宣](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%98%8E%E6%97%A5%E4%B8%96%E7%95%8C%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `104.5K 🔥` `-72%`
1. [饭店将当日剩菜1元卖给深夜骑手](https://s.weibo.com/weibo?q=%23%E9%A5%AD%E5%BA%97%E5%B0%86%E5%BD%93%E6%97%A5%E5%89%A9%E8%8F%9C1%E5%85%83%E5%8D%96%E7%BB%99%E6%B7%B1%E5%A4%9C%E9%AA%91%E6%89%8B%23) `95.8K 🔥` `-27%`
1. [逐玉灵魂名场面没了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%81%B5%E9%AD%82%E5%90%8D%E5%9C%BA%E9%9D%A2%E6%B2%A1%E4%BA%86%23) `94.6K 🔥` `-45%`
1. [张凌赫登了贴吧](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%99%BB%E4%BA%86%E8%B4%B4%E5%90%A7%23) `91.0K 🔥` `-57%`
1. [医院突增跑友检查心脏](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E7%AA%81%E5%A2%9E%E8%B7%91%E5%8F%8B%E6%A3%80%E6%9F%A5%E5%BF%83%E8%84%8F%23) `90.1K 🔥` `-68%`

Updated at 2026-03-26 13:20:04

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
