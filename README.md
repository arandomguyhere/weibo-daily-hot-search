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

1. [朱镕基同志遗体在京火化 (Comrade Zhu Rongji's body was cremated in Beijing)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%93%E5%9C%A8%E4%BA%AC%E7%81%AB%E5%8C%96%23) `1.3M 🔥` `NEW`
1. [厄尔尼诺事件大概率历史最强](https://s.weibo.com/weibo?q=%23%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E4%BA%8B%E4%BB%B6%E5%A4%A7%E6%A6%82%E7%8E%87%E5%8E%86%E5%8F%B2%E6%9C%80%E5%BC%BA%23) `434.9K 🔥` `NEW`
1. [特朗普还对人民大会堂念念不忘](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BF%98%E5%AF%B9%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%E5%BF%B5%E5%BF%B5%E4%B8%8D%E5%BF%98%23) `297.0K 🔥` `NEW`
1. [幸运咖 阴阳瑞幸](https://s.weibo.com/weibo?q=%23%E5%B9%B8%E8%BF%90%E5%92%96%20%E9%98%B4%E9%98%B3%E7%91%9E%E5%B9%B8%23) `293.0K 🔥` `NEW`
1. [林志颖说林俊杰女友很乖很腼腆](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E8%AF%B4%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%A5%B3%E5%8F%8B%E5%BE%88%E4%B9%96%E5%BE%88%E8%85%BC%E8%85%86%23) `292.4K 🔥` `NEW`
1. [学籍顶替案哥哥称因举报6年没工作](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%B1%8D%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%93%A5%E5%93%A5%E7%A7%B0%E5%9B%A0%E4%B8%BE%E6%8A%A56%E5%B9%B4%E6%B2%A1%E5%B7%A5%E4%BD%9C%23) `283.0K 🔥` `NEW`
1. [法国婚姻制度致全民搭伙时代来临](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%A9%9A%E5%A7%BB%E5%88%B6%E5%BA%A6%E8%87%B4%E5%85%A8%E6%B0%91%E6%90%AD%E4%BC%99%E6%97%B6%E4%BB%A3%E6%9D%A5%E4%B8%B4%23) `282.0K 🔥` `NEW`
1. [日本很火的发际线纹身贴](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BE%88%E7%81%AB%E7%9A%84%E5%8F%91%E9%99%85%E7%BA%BF%E7%BA%B9%E8%BA%AB%E8%B4%B4%23) `261.0K 🔥` `NEW`
1. [AI回答坠机前要不要叫醒爱人](https://s.weibo.com/weibo?q=%23AI%E5%9B%9E%E7%AD%94%E5%9D%A0%E6%9C%BA%E5%89%8D%E8%A6%81%E4%B8%8D%E8%A6%81%E5%8F%AB%E9%86%92%E7%88%B1%E4%BA%BA%23) `255.5K 🔥` `NEW`
1. [少时2 您不要再胡闹了](https://s.weibo.com/weibo?q=%23%E5%B0%91%E6%97%B62%20%E6%82%A8%E4%B8%8D%E8%A6%81%E5%86%8D%E8%83%A1%E9%97%B9%E4%BA%86%23) `254.9K 🔥` `NEW`
1. [第一次和少年时代2打视频电话 (First video call with Boyhood 2)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%92%8C%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E6%89%93%E8%A7%86%E9%A2%91%E7%94%B5%E8%AF%9D%23) `253.3K 🔥` `NEW`
1. [苹果折叠屏能直接当直板夹了](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%8A%98%E5%8F%A0%E5%B1%8F%E8%83%BD%E7%9B%B4%E6%8E%A5%E5%BD%93%E7%9B%B4%E6%9D%BF%E5%A4%B9%E4%BA%86%23) `248.7K 🔥` `NEW`
1. [瓜帅怒吼哈兰德场面曝光](https://s.weibo.com/weibo?q=%23%E7%93%9C%E5%B8%85%E6%80%92%E5%90%BC%E5%93%88%E5%85%B0%E5%BE%B7%E5%9C%BA%E9%9D%A2%E6%9B%9D%E5%85%89%23) `247.7K 🔥` `NEW`
1. [AI漫剧畸形审美遭逐帧审判](https://s.weibo.com/weibo?q=%23AI%E6%BC%AB%E5%89%A7%E7%95%B8%E5%BD%A2%E5%AE%A1%E7%BE%8E%E9%81%AD%E9%80%90%E5%B8%A7%E5%AE%A1%E5%88%A4%23) `244.6K 🔥` `NEW`
1. [游泳 腺病毒](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%B3%B3%20%E8%85%BA%E7%97%85%E6%AF%92%23) `1.3M 🔥` `+22%`
1. [前7个月全国网上商品零售额增长4.6% (National online retail sales increased by 4.6% in the first seven months)](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E4%B8%AA%E6%9C%88%E5%85%A8%E5%9B%BD%E7%BD%91%E4%B8%8A%E5%95%86%E5%93%81%E9%9B%B6%E5%94%AE%E9%A2%9D%E5%A2%9E%E9%95%BF4.6%25%23) `1.3M 🔥` `+24%`
1. [睡前9分钟清除皮质醇的废物](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%89%8D9%E5%88%86%E9%92%9F%E6%B8%85%E9%99%A4%E7%9A%AE%E8%B4%A8%E9%86%87%E7%9A%84%E5%BA%9F%E7%89%A9%23) `1.2M 🔥` `+30%`
1. [巴基斯坦博主看欢迎来龙餐馆不适](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E5%8D%9A%E4%B8%BB%E7%9C%8B%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E4%B8%8D%E9%80%82%23) `1.1M 🔥` `+23%`
1. [蜜雪冰城 盘账数杯子不数钱](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%20%E7%9B%98%E8%B4%A6%E6%95%B0%E6%9D%AF%E5%AD%90%E4%B8%8D%E6%95%B0%E9%92%B1%23) `712.2K 🔥` `+56%`
1. [王一博看到自己表情包belike](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9C%8B%E5%88%B0%E8%87%AA%E5%B7%B1%E8%A1%A8%E6%83%85%E5%8C%85belike%23) `246.6K 🔥` `+78%`
1. [胡先煦这么帅了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E8%BF%99%E4%B9%88%E5%B8%85%E4%BA%86%23) `287.9K 🔥`
1. [BBA大降价 宝马5系跌至28万 (BBA big price cut: BMW 5 Series drops to 280,000)](https://s.weibo.com/weibo?q=%23BBA%E5%A4%A7%E9%99%8D%E4%BB%B7%20%E5%AE%9D%E9%A9%AC5%E7%B3%BB%E8%B7%8C%E8%87%B328%E4%B8%87%23) `277.2K 🔥`
1. [林志颖说kimi不想出道 (Lin Zhiying said Kimi doesn’t want to debut)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E8%AF%B4kimi%E4%B8%8D%E6%83%B3%E5%87%BA%E9%81%93%23) `275.0K 🔥`
1. [杭州酒局事件受害女子家人回应 (The family of the woman victim in the Hangzhou Wine Bureau incident responds)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%E5%8F%97%E5%AE%B3%E5%A5%B3%E5%AD%90%E5%AE%B6%E4%BA%BA%E5%9B%9E%E5%BA%94%23) `273.9K 🔥`
1. [在华18年日本人参拜靖国神社](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8D%8E18%E5%B9%B4%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `269.9K 🔥`
1. [学籍顶替案母亲称弟弟当公务员后飘了](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%B1%8D%E9%A1%B6%E6%9B%BF%E6%A1%88%E6%AF%8D%E4%BA%B2%E7%A7%B0%E5%BC%9F%E5%BC%9F%E5%BD%93%E5%85%AC%E5%8A%A1%E5%91%98%E5%90%8E%E9%A3%98%E4%BA%86%23) `264.7K 🔥`
1. [3孩非亲生奶奶想尽快送走3个孙女](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B6%E5%A5%B6%E6%83%B3%E5%B0%BD%E5%BF%AB%E9%80%81%E8%B5%B03%E4%B8%AA%E5%AD%99%E5%A5%B3%23) `264.1K 🔥`
1. [王橹杰比董洁亲儿子还小一岁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%AF%94%E8%91%A3%E6%B4%81%E4%BA%B2%E5%84%BF%E5%AD%90%E8%BF%98%E5%B0%8F%E4%B8%80%E5%B2%81%23) `263.1K 🔥`
1. [被容嬷嬷凶相骗了近30年](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%B9%E5%AC%B7%E5%AC%B7%E5%87%B6%E7%9B%B8%E9%AA%97%E4%BA%86%E8%BF%9130%E5%B9%B4%23) `250.3K 🔥`
1. [12345 滥用](https://s.weibo.com/weibo?q=%2312345%20%E6%BB%A5%E7%94%A8%23) `298.1K 🔥` `-35%`
1. [重器 流氓罪死刑 (Heavy weapon, death penalty for hooliganism)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%99%A8%20%E6%B5%81%E6%B0%93%E7%BD%AA%E6%AD%BB%E5%88%91%23) `295.9K 🔥` `-38%`
1. [易立竞当面拆穿蓝盈莹](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%AB%8B%E7%AB%9E%E5%BD%93%E9%9D%A2%E6%8B%86%E7%A9%BF%E8%93%9D%E7%9B%88%E8%8E%B9%23) `294.5K 🔥` `-34%`
1. [刘亦菲素颜穿79.8元防晒衣](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%B4%A0%E9%A2%9C%E7%A9%BF79.8%E5%85%83%E9%98%B2%E6%99%92%E8%A1%A3%23) `290.6K 🔥` `-33%`
1. [BBA集体大降价 (BBA collective big price reduction)](https://s.weibo.com/weibo?q=%23BBA%E9%9B%86%E4%BD%93%E5%A4%A7%E9%99%8D%E4%BB%B7%23) `290.0K 🔥` `-67%`
1. [贺涵PPT做得太丑了](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%B6%B5PPT%E5%81%9A%E5%BE%97%E5%A4%AA%E4%B8%91%E4%BA%86%23) `287.1K 🔥` `-33%`
1. [红车误入婚车车队成主角 (The red car mistakenly enters the wedding car convoy and becomes the protagonist)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E8%BD%A6%E8%AF%AF%E5%85%A5%E5%A9%9A%E8%BD%A6%E8%BD%A6%E9%98%9F%E6%88%90%E4%B8%BB%E8%A7%92%23) `284.9K 🔥` `-35%`
1. [带摄像头AirPods实机演示曝光 (Actual demonstration of AirPods with camera exposed)](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E6%91%84%E5%83%8F%E5%A4%B4AirPods%E5%AE%9E%E6%9C%BA%E6%BC%94%E7%A4%BA%E6%9B%9D%E5%85%89%23) `283.9K 🔥` `-22%`
1. [张若昀白客玩蔡徐坤梗 (Zhang Ruoyun plays with Cai Xukun)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E7%99%BD%E5%AE%A2%E7%8E%A9%E8%94%A1%E5%BE%90%E5%9D%A4%E6%A2%97%23) `279.6K 🔥` `-30%`
1. [时代峰峻半夜发招聘 (Times Fengjun issued recruitment in the middle of the night)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%8D%8A%E5%A4%9C%E5%8F%91%E6%8B%9B%E8%81%98%23) `279.1K 🔥` `-30%`
1. [刘亦菲高定是工作防晒衣是生活 (Liu Yifei’s haute couture is for work and sun protection clothing is for life)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E9%AB%98%E5%AE%9A%E6%98%AF%E5%B7%A5%E4%BD%9C%E9%98%B2%E6%99%92%E8%A1%A3%E6%98%AF%E7%94%9F%E6%B4%BB%23) `275.6K 🔥` `-35%`
1. [李嫣几乎看不见唇腭裂修复痕迹 (Li Yan’s cleft lip and palate repair traces are almost invisible)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AB%A3%E5%87%A0%E4%B9%8E%E7%9C%8B%E4%B8%8D%E8%A7%81%E5%94%87%E8%85%AD%E8%A3%82%E4%BF%AE%E5%A4%8D%E7%97%95%E8%BF%B9%23) `271.7K 🔥` `-21%`
1. [吴建豪回应妻子被曝学历造假](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BB%BA%E8%B1%AA%E5%9B%9E%E5%BA%94%E5%A6%BB%E5%AD%90%E8%A2%AB%E6%9B%9D%E5%AD%A6%E5%8E%86%E9%80%A0%E5%81%87%23) `270.0K 🔥` `-36%`
1. [招商蛇口总部开展调查 (China Merchants Shekou Headquarters launches investigation)](https://s.weibo.com/weibo?q=%23%E6%8B%9B%E5%95%86%E8%9B%87%E5%8F%A3%E6%80%BB%E9%83%A8%E5%BC%80%E5%B1%95%E8%B0%83%E6%9F%A5%23) `267.5K 🔥` `-30%`
1. [赵海峰酒局 拿地潜规则](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%B5%B7%E5%B3%B0%E9%85%92%E5%B1%80%20%E6%8B%BF%E5%9C%B0%E6%BD%9C%E8%A7%84%E5%88%99%23) `266.0K 🔥` `-24%`
1. [3孩非亲生女方认为男方理应养孩子 (The woman who has 3 children who is not her biological child thinks that the man should raise the children)](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B3%E6%96%B9%E8%AE%A4%E4%B8%BA%E7%94%B7%E6%96%B9%E7%90%86%E5%BA%94%E5%85%BB%E5%AD%A9%E5%AD%90%23) `259.4K 🔥` `-36%`
1. [为什么榴莲降价反而吐槽多了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%A6%B4%E8%8E%B2%E9%99%8D%E4%BB%B7%E5%8F%8D%E8%80%8C%E5%90%90%E6%A7%BD%E5%A4%9A%E4%BA%86%23) `257.4K 🔥` `-39%`
1. [高考只差一分却过上了两种人生](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%8F%AA%E5%B7%AE%E4%B8%80%E5%88%86%E5%8D%B4%E8%BF%87%E4%B8%8A%E4%BA%86%E4%B8%A4%E7%A7%8D%E4%BA%BA%E7%94%9F%23) `251.2K 🔥` `-41%`
1. [好莱坞女星战胜抑郁后猝然离世](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E8%8E%B1%E5%9D%9E%E5%A5%B3%E6%98%9F%E6%88%98%E8%83%9C%E6%8A%91%E9%83%81%E5%90%8E%E7%8C%9D%E7%84%B6%E7%A6%BB%E4%B8%96%23) `243.5K 🔥` `-38%`
1. [卖129单108单差评被迫闭店](https://s.weibo.com/weibo?q=%23%E5%8D%96129%E5%8D%95108%E5%8D%95%E5%B7%AE%E8%AF%84%E8%A2%AB%E8%BF%AB%E9%97%AD%E5%BA%97%23) `241.8K 🔥` `-47%`

Updated at 2026-08-18 15:19:40

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
