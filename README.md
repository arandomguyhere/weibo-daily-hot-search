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

1. [旺旺二公子回应配料表建议 (Wangwang Er Gongzi responded to the ingredient list suggestion)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E4%BA%8C%E5%85%AC%E5%AD%90%E5%9B%9E%E5%BA%94%E9%85%8D%E6%96%99%E8%A1%A8%E5%BB%BA%E8%AE%AE%23) `614.4K 🔥` `NEW`
1. [手机涨价别着急换新](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E5%88%AB%E7%9D%80%E6%80%A5%E6%8D%A2%E6%96%B0%23) `548.8K 🔥` `NEW`
1. [30岁男子被母亲送进戒网瘾机构](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E7%94%B7%E5%AD%90%E8%A2%AB%E6%AF%8D%E4%BA%B2%E9%80%81%E8%BF%9B%E6%88%92%E7%BD%91%E7%98%BE%E6%9C%BA%E6%9E%84%23) `536.9K 🔥` `NEW`
1. [张本美和早田希娜瑞典大满贯夺冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%E7%91%9E%E5%85%B8%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%A4%BA%E5%86%A0%23) `361.7K 🔥` `NEW`
1. [程晓波被查前近三个月未公开露面](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E6%B3%A2%E8%A2%AB%E6%9F%A5%E5%89%8D%E8%BF%91%E4%B8%89%E4%B8%AA%E6%9C%88%E6%9C%AA%E5%85%AC%E5%BC%80%E9%9C%B2%E9%9D%A2%23) `161.4K 🔥` `NEW`
1. [宋亚轩缺席国乐那期在拍运动会](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%BC%BA%E5%B8%AD%E5%9B%BD%E4%B9%90%E9%82%A3%E6%9C%9F%E5%9C%A8%E6%8B%8D%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `150.6K 🔥` `NEW`
1. [李在明称将追责亲日反民族行为者](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E7%A7%B0%E5%B0%86%E8%BF%BD%E8%B4%A3%E4%BA%B2%E6%97%A5%E5%8F%8D%E6%B0%91%E6%97%8F%E8%A1%8C%E4%B8%BA%E8%80%85%23) `138.4K 🔥` `NEW`
1. [看似吃个大鸡排其实就吃了个鸡蛋](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%BC%BC%E5%90%83%E4%B8%AA%E5%A4%A7%E9%B8%A1%E6%8E%92%E5%85%B6%E5%AE%9E%E5%B0%B1%E5%90%83%E4%BA%86%E4%B8%AA%E9%B8%A1%E8%9B%8B%23) `134.0K 🔥` `NEW`
1. [披荆斩棘直播 (Overcoming obstacles live broadcast)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `1.2M 🔥` `+29%`
1. [山西挖眼案男孩高考721分选了中医学](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%8C%96%E7%9C%BC%E6%A1%88%E7%94%B7%E5%AD%A9%E9%AB%98%E8%80%83721%E5%88%86%E9%80%89%E4%BA%86%E4%B8%AD%E5%8C%BB%E5%AD%A6%23) `858.2K 🔥`
1. [豪华旗舰神行者8震撼33.99万元起 (The luxury flagship Freelander 8 is shocking, starting from 339,900 yuan)](https://s.weibo.com/weibo?q=%23%E8%B1%AA%E5%8D%8E%E6%97%97%E8%88%B0%E7%A5%9E%E8%A1%8C%E8%80%858%E9%9C%87%E6%92%BC33.99%E4%B8%87%E5%85%83%E8%B5%B7%23) `652.1K 🔥`
1. [50秒看中国的绿色奇迹 (50 seconds to see China’s green miracle)](https://s.weibo.com/weibo?q=%2350%E7%A7%92%E7%9C%8B%E4%B8%AD%E5%9B%BD%E7%9A%84%E7%BB%BF%E8%89%B2%E5%A5%87%E8%BF%B9%23) `656.4K 🔥` `-28%`
1. [王传君终于原谅爱情公寓了 (Wang Chuanjun finally forgives iPartment)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%BA%86%23) `651.5K 🔥` `-28%`
1. [汉奸石平参拜靖国神社](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A5%B8%E7%9F%B3%E5%B9%B3%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `644.2K 🔥` `-62%`
1. [小沈阳秒了 (Little Shenyang is seconds away)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E7%A7%92%E4%BA%86%23) `638.0K 🔥` `-27%`
1. [主播母亲回应榜一大哥打赏千万要陪睡 (The mother of the anchor responded to the reward given by the top brother, so she must sleep with her)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E6%AF%8D%E4%BA%B2%E5%9B%9E%E5%BA%94%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E6%89%93%E8%B5%8F%E5%8D%83%E4%B8%87%E8%A6%81%E9%99%AA%E7%9D%A1%23) `632.0K 🔥` `-25%`
1. [金鹰奖 赛制改革](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E8%B5%9B%E5%88%B6%E6%94%B9%E9%9D%A9%23) `625.0K 🔥` `-30%`
1. [胖东来 刑释人员 (Fat Donglai, ex-convict)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E9%87%8A%E4%BA%BA%E5%91%98%23) `610.3K 🔥` `-31%`
1. [曾辉 唱出了飞轮海的感觉](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%20%E5%94%B1%E5%87%BA%E4%BA%86%E9%A3%9E%E8%BD%AE%E6%B5%B7%E7%9A%84%E6%84%9F%E8%A7%89%23) `598.5K 🔥` `-29%`
1. [时代少年团 古茗](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%8F%A4%E8%8C%97%23) `594.7K 🔥` `-31%`
1. [Bin 回归 (Bin returns)](https://s.weibo.com/weibo?q=%23Bin%20%E5%9B%9E%E5%BD%92%23) `582.8K 🔥` `-33%`
1. [好多明星暴瘦 (Many celebrities have lost weight)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E6%98%8E%E6%98%9F%E6%9A%B4%E7%98%A6%23) `579.6K 🔥` `-34%`
1. [赵丽颖13个月没进组了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%9613%E4%B8%AA%E6%9C%88%E6%B2%A1%E8%BF%9B%E7%BB%84%E4%BA%86%23) `568.3K 🔥` `-33%`
1. [C罗若离婚乔治娜每月将获10万欧元](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%8B%A5%E7%A6%BB%E5%A9%9A%E4%B9%94%E6%B2%BB%E5%A8%9C%E6%AF%8F%E6%9C%88%E5%B0%86%E8%8E%B710%E4%B8%87%E6%AC%A7%E5%85%83%23) `562.9K 🔥` `-30%`
1. [日本人街头质疑南京大屠杀](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E8%A1%97%E5%A4%B4%E8%B4%A8%E7%96%91%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%23) `553.7K 🔥` `-33%`
1. [曾辉陈若轩 卧龙凤雏 (Zeng Hui Chen Ruoxuan Wolong Fengchu)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E9%99%88%E8%8B%A5%E8%BD%A9%20%E5%8D%A7%E9%BE%99%E5%87%A4%E9%9B%8F%23) `539.3K 🔥` `-38%`
1. [张睿 中国内地郭富城 (Zhang Rui, Mainland China, Aaron Kwok)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%20%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E9%83%AD%E5%AF%8C%E5%9F%8E%23) `537.7K 🔥` `-30%`
1. [虞书欣下腰](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%8B%E8%85%B0%23) `536.6K 🔥` `-32%`
1. [余文乐赢了曹骏 (Shawn Yue defeated Cao Jun)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%E8%B5%A2%E4%BA%86%E6%9B%B9%E9%AA%8F%23) `487.7K 🔥` `-41%`
1. [这和亲生的有什么区别](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%92%8C%E4%BA%B2%E7%94%9F%E7%9A%84%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%23) `454.7K 🔥` `-43%`
1. [曝与张凌赫合照价格](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%8E%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%88%E7%85%A7%E4%BB%B7%E6%A0%BC%23) `444.3K 🔥` `-46%`
1. [OMG陈若轩你吓到我了 (OMG Chen Ruoxuan, you scared me)](https://s.weibo.com/weibo?q=%23OMG%E9%99%88%E8%8B%A5%E8%BD%A9%E4%BD%A0%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23) `411.1K 🔥` `-46%`
1. [韩方强烈敦促日本领导人正视历史](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%96%B9%E5%BC%BA%E7%83%88%E6%95%A6%E4%BF%83%E6%97%A5%E6%9C%AC%E9%A2%86%E5%AF%BC%E4%BA%BA%E6%AD%A3%E8%A7%86%E5%8E%86%E5%8F%B2%23) `408.6K 🔥` `-52%`
1. [曹骏跳操前后对比 (Comparison before and after Cao Jun's jumping exercises)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E8%B7%B3%E6%93%8D%E5%89%8D%E5%90%8E%E5%AF%B9%E6%AF%94%23) `406.5K 🔥` `-50%`
1. [张本智和4比0大勒布伦](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C4%E6%AF%940%E5%A4%A7%E5%8B%92%E5%B8%83%E4%BC%A6%23) `400.1K 🔥` `-55%`
1. [谁杀死了驾校 (Who killed the driving school?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%80%E6%AD%BB%E4%BA%86%E9%A9%BE%E6%A0%A1%23) `396.0K 🔥` `-52%`
1. [李彩领李彩演妈妈患癌](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%BD%A9%E9%A2%86%E6%9D%8E%E5%BD%A9%E6%BC%94%E5%A6%88%E5%A6%88%E6%82%A3%E7%99%8C%23) `396.0K 🔥` `-49%`
1. [王俊凯听到粉丝表白的反应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%90%AC%E5%88%B0%E7%B2%89%E4%B8%9D%E8%A1%A8%E7%99%BD%E7%9A%84%E5%8F%8D%E5%BA%94%23) `369.8K 🔥` `-52%`
1. [张睿 梦回新还珠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%20%E6%A2%A6%E5%9B%9E%E6%96%B0%E8%BF%98%E7%8F%A0%23) `361.1K 🔥` `-54%`
1. [阿云嘎 夯](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BA%91%E5%98%8E%20%E5%A4%AF%23) `315.6K 🔥` `-61%`
1. [人到中年一定要舍得吃](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E4%B8%80%E5%AE%9A%E8%A6%81%E8%88%8D%E5%BE%97%E5%90%83%23) `209.2K 🔥` `-71%`
1. [王俊凯徐洁儿友谊](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%BE%90%E6%B4%81%E5%84%BF%E5%8F%8B%E8%B0%8A%23) `203.2K 🔥` `-76%`
1. [余文乐 港星的含金量还在上升](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%20%E6%B8%AF%E6%98%9F%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `203.1K 🔥` `-72%`
1. [中国男篮vs乌拉圭男篮 (Chinese Men's Basketball Team vs Uruguay Men's Basketball Team)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E4%B9%8C%E6%8B%89%E5%9C%AD%E7%94%B7%E7%AF%AE%23) `198.9K 🔥` `-75%`
1. [曝宋亚轩刘耀文又去自驾游了 (It was revealed that Song Yaxuan and Liu Yaowen went on a self-driving trip again)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%88%98%E8%80%80%E6%96%87%E5%8F%88%E5%8E%BB%E8%87%AA%E9%A9%BE%E6%B8%B8%E4%BA%86%23) `196.7K 🔥` `-40%`
1. [杜华向虞书欣打听张彬彬](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E5%90%91%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%89%93%E5%90%AC%E5%BC%A0%E5%BD%AC%E5%BD%AC%23) `167.5K 🔥` `-78%`
1. [邓超给初代跑男合照签名 (Deng Chao signed a group photo with the first generation of Running Man)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E7%BB%99%E5%88%9D%E4%BB%A3%E8%B7%91%E7%94%B7%E5%90%88%E7%85%A7%E7%AD%BE%E5%90%8D%23) `160.5K 🔥` `-53%`
1. [电影院直播樊振东比赛黄金位已售罄 (The prime seats for the live broadcast of Fan Zhendong’s match in cinemas have been sold out)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E9%99%A2%E7%9B%B4%E6%92%AD%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AF%94%E8%B5%9B%E9%BB%84%E9%87%91%E4%BD%8D%E5%B7%B2%E5%94%AE%E7%BD%84%23) `154.2K 🔥` `-83%`
1. [当我有一个快递到了](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E6%9C%89%E4%B8%80%E4%B8%AA%E5%BF%AB%E9%80%92%E5%88%B0%E4%BA%86%23) `147.1K 🔥` `-81%`
1. [被AI投毒后假400售后上门真演戏](https://s.weibo.com/weibo?q=%23%E8%A2%ABAI%E6%8A%95%E6%AF%92%E5%90%8E%E5%81%87400%E5%94%AE%E5%90%8E%E4%B8%8A%E9%97%A8%E7%9C%9F%E6%BC%94%E6%88%8F%23) `135.0K 🔥` `-84%`
1. [四川一村落1996人有33对双胞胎 (A village in Sichuan has 33 sets of twins among 1,996 people)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B8%80%E6%9D%91%E8%90%BD1996%E4%BA%BA%E6%9C%8933%E5%AF%B9%E5%8F%8C%E8%83%9E%E8%83%8E%23) `131.6K 🔥` `-82%`

Updated at 2026-08-15 23:18:47

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
