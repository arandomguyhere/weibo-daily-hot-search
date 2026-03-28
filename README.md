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

1. [女子被羁押821天无罪释放国赔被叫停 (The woman was released without charge after 821 days in custody and the state compensation was suspended.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%BE%81%E6%8A%BC821%E5%A4%A9%E6%97%A0%E7%BD%AA%E9%87%8A%E6%94%BE%E5%9B%BD%E8%B5%94%E8%A2%AB%E5%8F%AB%E5%81%9C%23) `694.3K 🔥` `NEW`
1. [删除汪苏泷名字让徐良又生气又煎熬](https://s.weibo.com/weibo?q=%23%E5%88%A0%E9%99%A4%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%90%8D%E5%AD%97%E8%AE%A9%E5%BE%90%E8%89%AF%E5%8F%88%E7%94%9F%E6%B0%94%E5%8F%88%E7%85%8E%E7%86%AC%23) `487.2K 🔥` `NEW`
1. [女子半年没回家卧室开窗变邻居阳台](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%8A%E5%B9%B4%E6%B2%A1%E5%9B%9E%E5%AE%B6%E5%8D%A7%E5%AE%A4%E5%BC%80%E7%AA%97%E5%8F%98%E9%82%BB%E5%B1%85%E9%98%B3%E5%8F%B0%23) `189.9K 🔥` `NEW`
1. [杨紫给黄灿灿的浪姐建议](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%BB%99%E9%BB%84%E7%81%BF%E7%81%BF%E7%9A%84%E6%B5%AA%E5%A7%90%E5%BB%BA%E8%AE%AE%23) `71.1K 🔥` `NEW`
1. [白鹿回来复盘撕名牌](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E6%9D%A5%E5%A4%8D%E7%9B%98%E6%92%95%E5%90%8D%E7%89%8C%23) `59.3K 🔥` `NEW`
1. [以军对伊朗大规模空袭](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%A9%BA%E8%A2%AD%23) `51.2K 🔥` `NEW`
1. [小猴穿游客衣服酷似拜师时的悟空](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%B4%E7%A9%BF%E6%B8%B8%E5%AE%A2%E8%A1%A3%E6%9C%8D%E9%85%B7%E4%BC%BC%E6%8B%9C%E5%B8%88%E6%97%B6%E7%9A%84%E6%82%9F%E7%A9%BA%23) `50.2K 🔥` `NEW`
1. [严屹宽回应法拉利遇法拉利](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%E5%9B%9E%E5%BA%94%E6%B3%95%E6%8B%89%E5%88%A9%E9%81%87%E6%B3%95%E6%8B%89%E5%88%A9%23) `49.4K 🔥` `NEW`
1. [我不希望敌人捡到我的电视就能看](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E5%B8%8C%E6%9C%9B%E6%95%8C%E4%BA%BA%E6%8D%A1%E5%88%B0%E6%88%91%E7%9A%84%E7%94%B5%E8%A7%86%E5%B0%B1%E8%83%BD%E7%9C%8B%23) `49.1K 🔥` `NEW`
1. [以军一天3轮空袭伊朗](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E4%B8%80%E5%A4%A93%E8%BD%AE%E7%A9%BA%E8%A2%AD%E4%BC%8A%E6%9C%97%23) `45.7K 🔥` `NEW`
1. [时代少年团奔跑吧凌晨下班 (Times Youth League, Let’s Run, get off work early in the morning)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%A5%94%E8%B7%91%E5%90%A7%E5%87%8C%E6%99%A8%E4%B8%8B%E7%8F%AD%23) `45.6K 🔥` `NEW`
1. [吴镇宇回应4年前扇刘耀文巴掌](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E5%9B%9E%E5%BA%944%E5%B9%B4%E5%89%8D%E6%89%87%E5%88%98%E8%80%80%E6%96%87%E5%B7%B4%E6%8E%8C%23) `42.6K 🔥` `NEW`
1. [伊朗袭击沙特基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E6%B2%99%E7%89%B9%E5%9F%BA%E5%9C%B0%23) `39.8K 🔥` `NEW`
1. [刘宇宁好六喊话自己](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%A5%BD%E5%85%AD%E5%96%8A%E8%AF%9D%E8%87%AA%E5%B7%B1%23) `37.7K 🔥` `NEW`
1. [向余望点射破门](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%99%E6%9C%9B%E7%82%B9%E5%B0%84%E7%A0%B4%E9%97%A8%23) `37.1K 🔥` `NEW`
1. [世上顶好顶好的老太婆走了 (The best old woman in the world is gone)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B8%8A%E9%A1%B6%E5%A5%BD%E9%A1%B6%E5%A5%BD%E7%9A%84%E8%80%81%E5%A4%AA%E5%A9%86%E8%B5%B0%E4%BA%86%23) `984.3K 🔥` `+87%`
1. [政企新媒体怎么火出圈 (How do new media in government and enterprises become popular?)](https://s.weibo.com/weibo?q=%23%E6%94%BF%E4%BC%81%E6%96%B0%E5%AA%92%E4%BD%93%E6%80%8E%E4%B9%88%E7%81%AB%E5%87%BA%E5%9C%88%23) `571.8K 🔥` `+35%`
1. [伊朗连遭重创绝地反击 (Iran was hit hard and fought back)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%BF%9E%E9%81%AD%E9%87%8D%E5%88%9B%E7%BB%9D%E5%9C%B0%E5%8F%8D%E5%87%BB%23) `278.9K 🔥` `+31%`
1. [以色列三面受敌 (Israel is surrounded by enemies on three sides)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%89%E9%9D%A2%E5%8F%97%E6%95%8C%23) `206.1K 🔥` `+25%`
1. [迪丽热巴有高度近视 (Dilraba is highly myopic)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9C%89%E9%AB%98%E5%BA%A6%E8%BF%91%E8%A7%86%23) `183.8K 🔥` `+60%`
1. [氦气价格暴涨50% (Helium prices skyrocketed by 50%)](https://s.weibo.com/weibo?q=%23%E6%B0%A6%E6%B0%94%E4%BB%B7%E6%A0%BC%E6%9A%B4%E6%B6%A850%25%23) `114.1K 🔥` `+202%`
1. [油价又飙升了 (Oil prices soar again)](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E5%8F%88%E9%A3%99%E5%8D%87%E4%BA%86%23) `113.5K 🔥` `+28%`
1. [站姐愚人节团建预告 (Zhanjie’s April Fool’s Day Team Building Preview)](https://s.weibo.com/weibo?q=%23%E7%AB%99%E5%A7%90%E6%84%9A%E4%BA%BA%E8%8A%82%E5%9B%A2%E5%BB%BA%E9%A2%84%E5%91%8A%23) `111.2K 🔥` `+28%`
1. [杨臣刚自曝因老鼠爱大米收入1.7亿 (Yang Chengang revealed that he earned 170 million because rats love rice.)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%87%A3%E5%88%9A%E8%87%AA%E6%9B%9D%E5%9B%A0%E8%80%81%E9%BC%A0%E7%88%B1%E5%A4%A7%E7%B1%B3%E6%94%B6%E5%85%A51.7%E4%BA%BF%23) `109.3K 🔥` `+30%`
1. [以军参谋长说以军常规部队已崩溃](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%8F%82%E8%B0%8B%E9%95%BF%E8%AF%B4%E4%BB%A5%E5%86%9B%E5%B8%B8%E8%A7%84%E9%83%A8%E9%98%9F%E5%B7%B2%E5%B4%A9%E6%BA%83%23) `109.1K 🔥` `+28%`
1. [低精力人群的周末安排belike](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E4%BA%BA%E7%BE%A4%E7%9A%84%E5%91%A8%E6%9C%AB%E5%AE%89%E6%8E%92belike%23) `107.6K 🔥` `+63%`
1. [张凌赫大一曾分享暗恋细节](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%A7%E4%B8%80%E6%9B%BE%E5%88%86%E4%BA%AB%E6%9A%97%E6%81%8B%E7%BB%86%E8%8A%82%23) `93.1K 🔥` `+25%`
1. [严浩翔上线](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E4%B8%8A%E7%BA%BF%23) `87.3K 🔥` `+131%`
1. [女顾客打印后要求归类被拒当场崩溃 (After printing, the female customer asked for classification and was refused. She collapsed on the spot.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%A1%BE%E5%AE%A2%E6%89%93%E5%8D%B0%E5%90%8E%E8%A6%81%E6%B1%82%E5%BD%92%E7%B1%BB%E8%A2%AB%E6%8B%92%E5%BD%93%E5%9C%BA%E5%B4%A9%E6%BA%83%23) `85.9K 🔥` `+67%`
1. [女子在家被流浪狗咬伤3天后狗死了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%AE%B6%E8%A2%AB%E6%B5%81%E6%B5%AA%E7%8B%97%E5%92%AC%E4%BC%A43%E5%A4%A9%E5%90%8E%E7%8B%97%E6%AD%BB%E4%BA%86%23) `82.1K 🔥` `+62%`
1. [现货黄金 (spot gold)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `61.9K 🔥` `+60%`
1. [中国AI不会因几张邀请函停滞 (China’s AI will not stop with a few invitations)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDAI%E4%B8%8D%E4%BC%9A%E5%9B%A0%E5%87%A0%E5%BC%A0%E9%82%80%E8%AF%B7%E5%87%BD%E5%81%9C%E6%BB%9E%23) `54.3K 🔥` `+27%`
1. [11岁的我觉得这顿饭夯爆了 (As an 11-year-old me, I thought this meal was awesome.)](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E7%9A%84%E6%88%91%E8%A7%89%E5%BE%97%E8%BF%99%E9%A1%BF%E9%A5%AD%E5%A4%AF%E7%88%86%E4%BA%86%23) `50.7K 🔥` `+34%`
1. [泰国与伊朗达成协议 (Thailand and Iran reach agreement)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E4%B8%8E%E4%BC%8A%E6%9C%97%E8%BE%BE%E6%88%90%E5%8D%8F%E8%AE%AE%23) `50.3K 🔥` `+31%`
1. [白鹿留洋大小姐造型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%95%99%E6%B4%8B%E5%A4%A7%E5%B0%8F%E5%A7%90%E9%80%A0%E5%9E%8B%23) `47.7K 🔥` `+26%`
1. [女子断碳水2月确诊糖尿病前期 (Woman cuts carbs and is diagnosed with prediabetes in February)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%96%AD%E7%A2%B3%E6%B0%B42%E6%9C%88%E7%A1%AE%E8%AF%8A%E7%B3%96%E5%B0%BF%E7%97%85%E5%89%8D%E6%9C%9F%23) `114.5K 🔥`
1. [伊朗正式回应美国15点停火协议 (Iran formally responds to US 15-point ceasefire agreement)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A3%E5%BC%8F%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%9B%BD15%E7%82%B9%E5%81%9C%E7%81%AB%E5%8D%8F%E8%AE%AE%23) `110.6K 🔥`
1. [高三学生请求拆除鸟巢校长写信回应 (Senior high school students request to demolish the Bird's Nest, principal responds with letter)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E8%AF%B7%E6%B1%82%E6%8B%86%E9%99%A4%E9%B8%9F%E5%B7%A2%E6%A0%A1%E9%95%BF%E5%86%99%E4%BF%A1%E5%9B%9E%E5%BA%94%23) `107.3K 🔥`
1. [幼儿园自理比赛女孩靠佛系速度获胜](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%87%AA%E7%90%86%E6%AF%94%E8%B5%9B%E5%A5%B3%E5%AD%A9%E9%9D%A0%E4%BD%9B%E7%B3%BB%E9%80%9F%E5%BA%A6%E8%8E%B7%E8%83%9C%23) `89.9K 🔥`
1. [俄罗斯4月1日起禁止汽油出口](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF4%E6%9C%881%E6%97%A5%E8%B5%B7%E7%A6%81%E6%AD%A2%E6%B1%BD%E6%B2%B9%E5%87%BA%E5%8F%A3%23) `64.7K 🔥`
1. [代旭 男主剧 (Dai Xu male protagonist drama)](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%97%AD%20%E7%94%B7%E4%B8%BB%E5%89%A7%23) `48.9K 🔥`
1. [伊朗称无人机大规模打击以色列目标 (Iran says drones hit Israeli targets on a massive scale)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%89%93%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%E7%9B%AE%E6%A0%87%23) `45.4K 🔥`
1. [R1SE任豪回来了](https://s.weibo.com/weibo?q=%23R1SE%E4%BB%BB%E8%B1%AA%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `45.4K 🔥`
1. [王俊凯蹦迪版心引力 (Wang Junkai disco version of gravity)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%B9%A6%E8%BF%AA%E7%89%88%E5%BF%83%E5%BC%95%E5%8A%9B%23) `39.2K 🔥`
1. [穿上春装被误认为是保洁 (Wearing spring clothes was mistaken for cleaning)](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E4%B8%8A%E6%98%A5%E8%A3%85%E8%A2%AB%E8%AF%AF%E8%AE%A4%E4%B8%BA%E6%98%AF%E4%BF%9D%E6%B4%81%23) `37.5K 🔥`
1. [檀健次谢却山家主气场 (Tan Jianci thanks the aura of the head of the Queshan family)](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E8%B0%A2%E5%8D%B4%E5%B1%B1%E5%AE%B6%E4%B8%BB%E6%B0%94%E5%9C%BA%23) `37.4K 🔥`
1. [陈哲远锁凶正确率百分百 (Chen Zheyuan's lock accuracy is 100%)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E9%94%81%E5%87%B6%E6%AD%A3%E7%A1%AE%E7%8E%87%E7%99%BE%E5%88%86%E7%99%BE%23) `37.3K 🔥`
1. [美国最强导弹击落了美国最强战机 (America's most powerful missile shot down America's most powerful fighter jet)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E5%AF%BC%E5%BC%B9%E5%87%BB%E8%90%BD%E4%BA%86%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E6%88%98%E6%9C%BA%23) `37.1K 🔥`
1. [金价又涨了 (Gold price rises again)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%8F%88%E6%B6%A8%E4%BA%86%23) `37.1K 🔥`
1. [徐良方致歉声明 (Xu Liangfang’s apology statement)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E6%96%B9%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `112.3K 🔥` `-48%`

Updated at 2026-03-29 07:51:02

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
