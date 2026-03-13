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

1. [十五五新程上我们有底气有动力 (We have the confidence and motivation to embark on the new journey of the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E6%96%B0%E7%A8%8B%E4%B8%8A%E6%88%91%E4%BB%AC%E6%9C%89%E5%BA%95%E6%B0%94%E6%9C%89%E5%8A%A8%E5%8A%9B%23) `663.4K 🔥` `NEW`
1. [海尔智慧家庭定制你的AI生活](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%B0%94%E6%99%BA%E6%85%A7%E5%AE%B6%E5%BA%AD%E5%AE%9A%E5%88%B6%E4%BD%A0%E7%9A%84AI%E7%94%9F%E6%B4%BB%23) `361.7K 🔥` `NEW`
1. [中俄安理会硬刚美国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E5%AE%89%E7%90%86%E4%BC%9A%E7%A1%AC%E5%88%9A%E7%BE%8E%E5%9B%BD%23) `209.1K 🔥` `NEW`
1. [鹿晗umbro茵宝品牌代言人](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97umbro%E8%8C%B5%E5%AE%9D%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `206.6K 🔥` `NEW`
1. [孙颖莎vs迪亚兹](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E8%BF%AA%E4%BA%9A%E5%85%B9%23) `185.0K 🔥` `NEW`
1. [gse 抢日乙鸡蛋](https://s.weibo.com/weibo?q=%23gse%20%E6%8A%A2%E6%97%A5%E4%B9%99%E9%B8%A1%E8%9B%8B%23) `140.5K 🔥` `NEW`
1. [伊朗称对林肯号航母发动袭击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%AF%B9%E6%9E%97%E8%82%AF%E5%8F%B7%E8%88%AA%E6%AF%8D%E5%8F%91%E5%8A%A8%E8%A2%AD%E5%87%BB%23) `140.3K 🔥` `NEW`
1. [王安宇一瓶接一瓶](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E4%B8%80%E7%93%B6%E6%8E%A5%E4%B8%80%E7%93%B6%23) `140.2K 🔥` `NEW`
1. [宝妈精力透支想打6800一次的抗衰针](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E7%B2%BE%E5%8A%9B%E9%80%8F%E6%94%AF%E6%83%B3%E6%89%936800%E4%B8%80%E6%AC%A1%E7%9A%84%E6%8A%97%E8%A1%B0%E9%92%88%23) `138.1K 🔥` `NEW`
1. [收购人员称草莓规格和生产日期随便写](https://s.weibo.com/weibo?q=%23%E6%94%B6%E8%B4%AD%E4%BA%BA%E5%91%98%E7%A7%B0%E8%8D%89%E8%8E%93%E8%A7%84%E6%A0%BC%E5%92%8C%E7%94%9F%E4%BA%A7%E6%97%A5%E6%9C%9F%E9%9A%8F%E4%BE%BF%E5%86%99%23) `137.4K 🔥` `NEW`
1. [突然发现这样喝牛奶不会弄脏手 (Suddenly I realized that drinking milk like this won’t dirty my hands.)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E8%BF%99%E6%A0%B7%E5%96%9D%E7%89%9B%E5%A5%B6%E4%B8%8D%E4%BC%9A%E5%BC%84%E8%84%8F%E6%89%8B%23) `128.2K 🔥` `NEW`
1. [孙颖莎3比0迪亚兹](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E3%E6%AF%940%E8%BF%AA%E4%BA%9A%E5%85%B9%23) `105.8K 🔥` `NEW`
1. [日本高官承认出轨高市让用工作弥补](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%AB%98%E5%AE%98%E6%89%BF%E8%AE%A4%E5%87%BA%E8%BD%A8%E9%AB%98%E5%B8%82%E8%AE%A9%E7%94%A8%E5%B7%A5%E4%BD%9C%E5%BC%A5%E8%A1%A5%23) `105.8K 🔥` `NEW`
1. [6800元一针细胞回春到底什么来头](https://s.weibo.com/weibo?q=%236800%E5%85%83%E4%B8%80%E9%92%88%E7%BB%86%E8%83%9E%E5%9B%9E%E6%98%A5%E5%88%B0%E5%BA%95%E4%BB%80%E4%B9%88%E6%9D%A5%E5%A4%B4%23) `84.7K 🔥` `NEW`
1. [81岁爷爷误食了我的火鸡面](https://s.weibo.com/weibo?q=%2381%E5%B2%81%E7%88%B7%E7%88%B7%E8%AF%AF%E9%A3%9F%E4%BA%86%E6%88%91%E7%9A%84%E7%81%AB%E9%B8%A1%E9%9D%A2%23) `80.3K 🔥` `NEW`
1. [江浙沪周边游圣体](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B5%99%E6%B2%AA%E5%91%A8%E8%BE%B9%E6%B8%B8%E5%9C%A3%E4%BD%93%23) `77.4K 🔥` `NEW`
1. [入住小区8年才知吃的是井水](https://s.weibo.com/weibo?q=%23%E5%85%A5%E4%BD%8F%E5%B0%8F%E5%8C%BA8%E5%B9%B4%E6%89%8D%E7%9F%A5%E5%90%83%E7%9A%84%E6%98%AF%E4%BA%95%E6%B0%B4%23) `75.7K 🔥` `NEW`
1. [张凌赫田曦薇偷偷比心](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E5%81%B7%E5%81%B7%E6%AF%94%E5%BF%83%23) `72.3K 🔥` `NEW`
1. [冻干草莓 农药](https://s.weibo.com/weibo?q=%23%E5%86%BB%E5%B9%B2%E8%8D%89%E8%8E%93%20%E5%86%9C%E8%8D%AF%23) `71.5K 🔥` `NEW`
1. [中美将在法国举行经贸磋商](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%B0%86%E5%9C%A8%E6%B3%95%E5%9B%BD%E4%B8%BE%E8%A1%8C%E7%BB%8F%E8%B4%B8%E7%A3%8B%E5%95%86%23) `68.5K 🔥` `NEW`
1. [微信 朋友圈编辑 (WeChat Moments Editor)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%BC%96%E8%BE%91%23) `847.1K 🔥` `+362%`
1. [谢征给樊长玉刮痧](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E7%BB%99%E6%A8%8A%E9%95%BF%E7%8E%89%E5%88%AE%E7%97%A7%23) `174.3K 🔥` `+125%`
1. [当年轻人贴冰箱贴的思路打开后](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%B9%B4%E8%BD%BB%E4%BA%BA%E8%B4%B4%E5%86%B0%E7%AE%B1%E8%B4%B4%E7%9A%84%E6%80%9D%E8%B7%AF%E6%89%93%E5%BC%80%E5%90%8E%23) `133.9K 🔥` `+47%`
1. [国产手机涨价2000元 (Domestic mobile phone prices increase by 2,000 yuan)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B72000%E5%85%83%23) `1.1M 🔥`
1. [中腰部演员将被AI替代](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%85%B0%E9%83%A8%E6%BC%94%E5%91%98%E5%B0%86%E8%A2%ABAI%E6%9B%BF%E4%BB%A3%23) `180.7K 🔥`
1. [女子屡遭凌晨强制投丰巢快递柜](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B1%A1%E9%81%AD%E5%87%8C%E6%99%A8%E5%BC%BA%E5%88%B6%E6%8A%95%E4%B8%B0%E5%B7%A2%E5%BF%AB%E9%80%92%E6%9F%9C%23) `170.0K 🔥`
1. [王鹤润 王玉雯](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%B6%A6%20%E7%8E%8B%E7%8E%89%E9%9B%AF%23) `132.8K 🔥`
1. [你好1983定档](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%E5%AE%9A%E6%A1%A3%23) `112.3K 🔥`
1. [女子流清鼻涕4年竟是脑子漏水](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B5%81%E6%B8%85%E9%BC%BB%E6%B6%954%E5%B9%B4%E7%AB%9F%E6%98%AF%E8%84%91%E5%AD%90%E6%BC%8F%E6%B0%B4%23) `105.7K 🔥`
1. [遇难女生最后1条朋友圈说能见度为0](https://s.weibo.com/weibo?q=%23%E9%81%87%E9%9A%BE%E5%A5%B3%E7%94%9F%E6%9C%80%E5%90%8E1%E6%9D%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%AF%B4%E8%83%BD%E8%A7%81%E5%BA%A6%E4%B8%BA0%23) `90.3K 🔥`
1. [看看那个被炸死的7岁伊朗女孩](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%9C%8B%E9%82%A3%E4%B8%AA%E8%A2%AB%E7%82%B8%E6%AD%BB%E7%9A%847%E5%B2%81%E4%BC%8A%E6%9C%97%E5%A5%B3%E5%AD%A9%23) `71.4K 🔥`
1. [别让你的微信隐私在裸奔 (Don’t let your WeChat privacy slip away naked)](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E4%BD%A0%E7%9A%84%E5%BE%AE%E4%BF%A1%E9%9A%90%E7%A7%81%E5%9C%A8%E8%A3%B8%E5%A5%94%23) `219.7K 🔥` `-32%`
1. [多款100%椰子水被曝兑水加糖](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BE100%25%E6%A4%B0%E5%AD%90%E6%B0%B4%E8%A2%AB%E6%9B%9D%E5%85%91%E6%B0%B4%E5%8A%A0%E7%B3%96%23) `211.2K 🔥` `-42%`
1. [为什么现在冰箱门越来越多了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E5%86%B0%E7%AE%B1%E9%97%A8%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E4%BA%86%23) `200.6K 🔥` `-39%`
1. [政协委员说国家统一才有安定未来](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%8D%8F%E5%A7%94%E5%91%98%E8%AF%B4%E5%9B%BD%E5%AE%B6%E7%BB%9F%E4%B8%80%E6%89%8D%E6%9C%89%E5%AE%89%E5%AE%9A%E6%9C%AA%E6%9D%A5%23) `184.7K 🔥` `-43%`
1. [世界从中国两会看到新机遇 (The world sees new opportunities from China’s Two Sessions)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%BB%8E%E4%B8%AD%E5%9B%BD%E4%B8%A4%E4%BC%9A%E7%9C%8B%E5%88%B0%E6%96%B0%E6%9C%BA%E9%81%87%23) `183.1K 🔥` `-43%`
1. [谁敢相信这是九年前的张凌赫](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E7%9B%B8%E4%BF%A1%E8%BF%99%E6%98%AF%E4%B9%9D%E5%B9%B4%E5%89%8D%E7%9A%84%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `182.7K 🔥` `-43%`
1. [豆包 消极怠工](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E6%B6%88%E6%9E%81%E6%80%A0%E5%B7%A5%23) `181.5K 🔥` `-43%`
1. [老人拒透露500枚金币下落被关十年 (An old man was imprisoned for ten years for refusing to disclose the whereabouts of 500 gold coins)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%8B%92%E9%80%8F%E9%9C%B2500%E6%9E%9A%E9%87%91%E5%B8%81%E4%B8%8B%E8%90%BD%E8%A2%AB%E5%85%B3%E5%8D%81%E5%B9%B4%23) `144.8K 🔥` `-54%`
1. [谭松韵长文回应王劲松](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%E7%8E%8B%E5%8A%B2%E6%9D%BE%23) `136.4K 🔥` `-57%`
1. [佟湘玉李大嘴办婚礼了](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E6%B9%98%E7%8E%89%E6%9D%8E%E5%A4%A7%E5%98%B4%E5%8A%9E%E5%A9%9A%E7%A4%BC%E4%BA%86%23) `135.6K 🔥` `-71%`
1. [保洁员发现男子被遗忘核磁共振机](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%B4%81%E5%91%98%E5%8F%91%E7%8E%B0%E7%94%B7%E5%AD%90%E8%A2%AB%E9%81%97%E5%BF%98%E6%A0%B8%E7%A3%81%E5%85%B1%E6%8C%AF%E6%9C%BA%23) `132.3K 🔥` `-23%`
1. [丈夫意外去世女子求解锁手机](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E6%84%8F%E5%A4%96%E5%8E%BB%E4%B8%96%E5%A5%B3%E5%AD%90%E6%B1%82%E8%A7%A3%E9%94%81%E6%89%8B%E6%9C%BA%23) `114.6K 🔥` `-39%`
1. [毛主席纪念堂3月16日起暂停开放 (Chairman Mao Memorial Hall will be closed from March 16)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%BB%E5%B8%AD%E7%BA%AA%E5%BF%B5%E5%A0%823%E6%9C%8816%E6%97%A5%E8%B5%B7%E6%9A%82%E5%81%9C%E5%BC%80%E6%94%BE%23) `106.0K 🔥` `-67%`
1. [90年代订奶](https://s.weibo.com/weibo?q=%2390%E5%B9%B4%E4%BB%A3%E8%AE%A2%E5%A5%B6%23) `102.4K 🔥` `-24%`
1. [韩国知名男星涉嫌借权势性侵](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%9F%A5%E5%90%8D%E7%94%B7%E6%98%9F%E6%B6%89%E5%AB%8C%E5%80%9F%E6%9D%83%E5%8A%BF%E6%80%A7%E4%BE%B5%23) `87.7K 🔥` `-40%`
1. [微信新功能被称为社恐福音](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%96%B0%E5%8A%9F%E8%83%BD%E8%A2%AB%E7%A7%B0%E4%B8%BA%E7%A4%BE%E6%81%90%E7%A6%8F%E9%9F%B3%23) `86.8K 🔥` `-89%`
1. [杨紫向品牌方赠汉服引惊叹](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%90%91%E5%93%81%E7%89%8C%E6%96%B9%E8%B5%A0%E6%B1%89%E6%9C%8D%E5%BC%95%E6%83%8A%E5%8F%B9%23) `86.5K 🔥` `-52%`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `84.5K 🔥` `-42%`
1. [杨紫不染发是因为大家喜欢黑色](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B8%8D%E6%9F%93%E5%8F%91%E6%98%AF%E5%9B%A0%E4%B8%BA%E5%A4%A7%E5%AE%B6%E5%96%9C%E6%AC%A2%E9%BB%91%E8%89%B2%23) `71.0K 🔥` `-22%`
1. [韩佳人上海游体验中国网红妆 (Han Jiaren experiences Chinese internet celebrity makeup during her trip to Shanghai)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E4%BD%B3%E4%BA%BA%E4%B8%8A%E6%B5%B7%E6%B8%B8%E4%BD%93%E9%AA%8C%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BA%A2%E5%A6%86%23) `70.5K 🔥` `-35%`
1. [丁真控诉十个勤天](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%9C%9F%E6%8E%A7%E8%AF%89%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%23) `68.7K 🔥` `-42%`

Updated at 2026-03-13 14:30:23

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
