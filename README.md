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

1. [家长在班级群自报干部身份 (Parents self-report their status as cadres in the class group)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%9C%A8%E7%8F%AD%E7%BA%A7%E7%BE%A4%E8%87%AA%E6%8A%A5%E5%B9%B2%E9%83%A8%E8%BA%AB%E4%BB%BD%23) `727.5K 🔥` `NEW`
1. [微信新功能专治各种看不见](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%96%B0%E5%8A%9F%E8%83%BD%E4%B8%93%E6%B2%BB%E5%90%84%E7%A7%8D%E7%9C%8B%E4%B8%8D%E8%A7%81%23) `417.2K 🔥` `NEW`
1. [开局之年看山西](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E5%B1%B1%E8%A5%BF%23) `338.7K 🔥` `NEW`
1. [花少2毛阿敏放现在算虐待老人](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E6%AF%9B%E9%98%BF%E6%95%8F%E6%94%BE%E7%8E%B0%E5%9C%A8%E7%AE%97%E8%99%90%E5%BE%85%E8%80%81%E4%BA%BA%23) `317.6K 🔥` `NEW`
1. [李月汝护照遗失缺席世界杯](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9C%88%E6%B1%9D%E6%8A%A4%E7%85%A7%E9%81%97%E5%A4%B1%E7%BC%BA%E5%B8%AD%E4%B8%96%E7%95%8C%E6%9D%AF%23) `229.8K 🔥` `NEW`
1. [吉隆泥石流遇难21人失联541人](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E9%81%87%E9%9A%BE21%E4%BA%BA%E5%A4%B1%E8%81%94541%E4%BA%BA%23) `170.5K 🔥` `NEW`
1. [吾恩见不得粉丝为我难过](https://s.weibo.com/weibo?q=%23%E5%90%BE%E6%81%A9%E8%A7%81%E4%B8%8D%E5%BE%97%E7%B2%89%E4%B8%9D%E4%B8%BA%E6%88%91%E9%9A%BE%E8%BF%87%23) `163.1K 🔥` `NEW`
1. [张雪惊讶97岁李锦记掌门人喝冰可乐](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%83%8A%E8%AE%B697%E5%B2%81%E6%9D%8E%E9%94%A6%E8%AE%B0%E6%8E%8C%E9%97%A8%E4%BA%BA%E5%96%9D%E5%86%B0%E5%8F%AF%E4%B9%90%23) `137.7K 🔥` `NEW`
1. [中国队女篮世界杯12人名单](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%A5%B3%E7%AF%AE%E4%B8%96%E7%95%8C%E6%9D%AF12%E4%BA%BA%E5%90%8D%E5%8D%95%23) `100.9K 🔥` `NEW`
1. [宁静花少2偶像来了人设对比](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E8%8A%B1%E5%B0%912%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%E4%BA%BA%E8%AE%BE%E5%AF%B9%E6%AF%94%23) `100.3K 🔥` `NEW`
1. [没有性生活也有必要打HPV疫苗 (It is necessary to get HPV vaccine even if you don’t have sex)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E6%80%A7%E7%94%9F%E6%B4%BB%E4%B9%9F%E6%9C%89%E5%BF%85%E8%A6%81%E6%89%93HPV%E7%96%AB%E8%8B%97%23) `100.3K 🔥` `NEW`
1. [杀害中国女生嫌犯供述作案过程](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%8A%AF%E4%BE%9B%E8%BF%B0%E4%BD%9C%E6%A1%88%E8%BF%87%E7%A8%8B%23) `100.3K 🔥` `NEW`
1. [幼儿园上午开学下午停办](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E4%B8%8A%E5%8D%88%E5%BC%80%E5%AD%A6%E4%B8%8B%E5%8D%88%E5%81%9C%E5%8A%9E%23) `100.2K 🔥` `NEW`
1. [辽宁中考 历史不计入总分](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E4%B8%AD%E8%80%83%20%E5%8E%86%E5%8F%B2%E4%B8%8D%E8%AE%A1%E5%85%A5%E6%80%BB%E5%88%86%23) `99.2K 🔥` `NEW`
1. [一针99万元外国人来中国抗癌](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%92%8899%E4%B8%87%E5%85%83%E5%A4%96%E5%9B%BD%E4%BA%BA%E6%9D%A5%E4%B8%AD%E5%9B%BD%E6%8A%97%E7%99%8C%23) `98.7K 🔥` `NEW`
1. [好讨厌需要靠争抢来的东西](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E8%AE%A8%E5%8E%8C%E9%9C%80%E8%A6%81%E9%9D%A0%E4%BA%89%E6%8A%A2%E6%9D%A5%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `97.4K 🔥` `NEW`
1. [花少4开始一个杨幂结束七个杨幂](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%914%E5%BC%80%E5%A7%8B%E4%B8%80%E4%B8%AA%E6%9D%A8%E5%B9%82%E7%BB%93%E6%9D%9F%E4%B8%83%E4%B8%AA%E6%9D%A8%E5%B9%82%23) `96.5K 🔥` `NEW`
1. [乌克兰两部门在基辅交火](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E4%B8%A4%E9%83%A8%E9%97%A8%E5%9C%A8%E5%9F%BA%E8%BE%85%E4%BA%A4%E7%81%AB%23) `96.5K 🔥` `NEW`
1. [何超琼17岁就和父亲出去应酬了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E7%90%BC17%E5%B2%81%E5%B0%B1%E5%92%8C%E7%88%B6%E4%BA%B2%E5%87%BA%E5%8E%BB%E5%BA%94%E9%85%AC%E4%BA%86%23) `96.5K 🔥` `NEW`
1. [爸爸牺牲妈妈瞒10年儿子考上军校](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E7%89%BA%E7%89%B2%E5%A6%88%E5%A6%88%E7%9E%9210%E5%B9%B4%E5%84%BF%E5%AD%90%E8%80%83%E4%B8%8A%E5%86%9B%E6%A0%A1%23) `96.4K 🔥` `NEW`
1. [突然发现有车之后心态变了 (My mentality changed after I suddenly discovered that I had a car.)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%9C%89%E8%BD%A6%E4%B9%8B%E5%90%8E%E5%BF%83%E6%80%81%E5%8F%98%E4%BA%86%23) `96.4K 🔥` `NEW`
1. [花少4整季最大的矛盾](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%914%E6%95%B4%E5%AD%A3%E6%9C%80%E5%A4%A7%E7%9A%84%E7%9F%9B%E7%9B%BE%23) `96.4K 🔥` `NEW`
1. [命运不会让你错过属于你的东西](https://s.weibo.com/weibo?q=%23%E5%91%BD%E8%BF%90%E4%B8%8D%E4%BC%9A%E8%AE%A9%E4%BD%A0%E9%94%99%E8%BF%87%E5%B1%9E%E4%BA%8E%E4%BD%A0%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `96.4K 🔥` `NEW`
1. [果然年轻人开店活人感就是重](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%BA%97%E6%B4%BB%E4%BA%BA%E6%84%9F%E5%B0%B1%E6%98%AF%E9%87%8D%23) `96.4K 🔥` `NEW`
1. [好像连吃月饼也出现代沟了](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%83%8F%E8%BF%9E%E5%90%83%E6%9C%88%E9%A5%BC%E4%B9%9F%E5%87%BA%E7%8E%B0%E4%BB%A3%E6%B2%9F%E4%BA%86%23) `96.3K 🔥` `NEW`
1. [井柏然Luke国贸下班大片](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6Luke%E5%9B%BD%E8%B4%B8%E4%B8%8B%E7%8F%AD%E5%A4%A7%E7%89%87%23) `96.3K 🔥` `NEW`
1. [女子喝冰冻可乐瞬间满嘴血](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%96%9D%E5%86%B0%E5%86%BB%E5%8F%AF%E4%B9%90%E7%9E%AC%E9%97%B4%E6%BB%A1%E5%98%B4%E8%A1%80%23) `96.3K 🔥` `NEW`
1. [为什么爱流向不缺爱的人](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%88%B1%E6%B5%81%E5%90%91%E4%B8%8D%E7%BC%BA%E7%88%B1%E7%9A%84%E4%BA%BA%23) `96.3K 🔥` `NEW`
1. [手机涨价以为会疯抢结果询价都没人](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E4%BB%A5%E4%B8%BA%E4%BC%9A%E7%96%AF%E6%8A%A2%E7%BB%93%E6%9E%9C%E8%AF%A2%E4%BB%B7%E9%83%BD%E6%B2%A1%E4%BA%BA%23) `96.2K 🔥` `NEW`
1. [尼泊尔泥石流中现房屋般大小巨石](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81%E4%B8%AD%E7%8E%B0%E6%88%BF%E5%B1%8B%E8%88%AC%E5%A4%A7%E5%B0%8F%E5%B7%A8%E7%9F%B3%23) `96.2K 🔥` `NEW`
1. [每个中国人都该记住0903 (Every Chinese should remember 0903)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%B8%AA%E4%B8%AD%E5%9B%BD%E4%BA%BA%E9%83%BD%E8%AF%A5%E8%AE%B0%E4%BD%8F0903%23) `96.2K 🔥` `NEW`
1. [搜救犬救援时发现幸存者的反应](https://s.weibo.com/weibo?q=%23%E6%90%9C%E6%95%91%E7%8A%AC%E6%95%91%E6%8F%B4%E6%97%B6%E5%8F%91%E7%8E%B0%E5%B9%B8%E5%AD%98%E8%80%85%E7%9A%84%E5%8F%8D%E5%BA%94%23) `96.2K 🔥` `NEW`
1. [书源把武则天选错成梦奇](https://s.weibo.com/weibo?q=%23%E4%B9%A6%E6%BA%90%E6%8A%8A%E6%AD%A6%E5%88%99%E5%A4%A9%E9%80%89%E9%94%99%E6%88%90%E6%A2%A6%E5%A5%87%23) `96.2K 🔥` `NEW`
1. [花儿与少年2026官宣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B42026%E5%AE%98%E5%AE%A3%23) `96.1K 🔥` `NEW`
1. [通用搭配技巧我好像悟了](https://s.weibo.com/weibo?q=%23%E9%80%9A%E7%94%A8%E6%90%AD%E9%85%8D%E6%8A%80%E5%B7%A7%E6%88%91%E5%A5%BD%E5%83%8F%E6%82%9F%E4%BA%86%23) `96.1K 🔥` `NEW`
1. [富爸爸穷爸爸作者自曝负债12亿美元](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E7%88%B8%E7%88%B8%E7%A9%B7%E7%88%B8%E7%88%B8%E4%BD%9C%E8%80%85%E8%87%AA%E6%9B%9D%E8%B4%9F%E5%80%BA12%E4%BA%BF%E7%BE%8E%E5%85%83%23) `96.1K 🔥` `NEW`
1. [爸爸以为妈妈接住了不料宝宝摔落在地](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%BB%A5%E4%B8%BA%E5%A6%88%E5%A6%88%E6%8E%A5%E4%BD%8F%E4%BA%86%E4%B8%8D%E6%96%99%E5%AE%9D%E5%AE%9D%E6%91%94%E8%90%BD%E5%9C%A8%E5%9C%B0%23) `96.1K 🔥` `NEW`
1. [直观感受到长期大量阅读的好处](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E8%A7%82%E6%84%9F%E5%8F%97%E5%88%B0%E9%95%BF%E6%9C%9F%E5%A4%A7%E9%87%8F%E9%98%85%E8%AF%BB%E7%9A%84%E5%A5%BD%E5%A4%84%23) `96.0K 🔥` `NEW`
1. [独居真的只适合个别人](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E5%B1%85%E7%9C%9F%E7%9A%84%E5%8F%AA%E9%80%82%E5%90%88%E4%B8%AA%E5%88%AB%E4%BA%BA%23) `96.0K 🔥` `NEW`
1. [消防员说吉隆救援途中遇熊和狼](https://s.weibo.com/weibo?q=%23%E6%B6%88%E9%98%B2%E5%91%98%E8%AF%B4%E5%90%89%E9%9A%86%E6%95%91%E6%8F%B4%E9%80%94%E4%B8%AD%E9%81%87%E7%86%8A%E5%92%8C%E7%8B%BC%23) `96.0K 🔥` `NEW`
1. [韩凶手抛尸时神态异常平静 (The Korean murderer looked unusually calm when he dumped the body)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%87%B6%E6%89%8B%E6%8A%9B%E5%B0%B8%E6%97%B6%E7%A5%9E%E6%80%81%E5%BC%82%E5%B8%B8%E5%B9%B3%E9%9D%99%23) `96.0K 🔥` `NEW`
1. [杨洋花少2里唯一一次无理要求](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E8%8A%B1%E5%B0%912%E9%87%8C%E5%94%AF%E4%B8%80%E4%B8%80%E6%AC%A1%E6%97%A0%E7%90%86%E8%A6%81%E6%B1%82%23) `95.9K 🔥` `NEW`
1. [HLE让二追三T1](https://s.weibo.com/weibo?q=%23HLE%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89T1%23) `95.9K 🔥` `NEW`
1. [尼泊尔泥石流遇难人数升至1204人](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%B3%A5%E7%9F%B3%E6%B5%81%E9%81%87%E9%9A%BE%E4%BA%BA%E6%95%B0%E5%8D%87%E8%87%B31204%E4%BA%BA%23) `95.9K 🔥` `NEW`
1. [TES突破联赛队史](https://s.weibo.com/weibo?q=%23TES%E7%AA%81%E7%A0%B4%E8%81%94%E8%B5%9B%E9%98%9F%E5%8F%B2%23) `95.9K 🔥` `NEW`
1. [只有花少4搭了一季帐篷](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E8%8A%B1%E5%B0%914%E6%90%AD%E4%BA%86%E4%B8%80%E5%AD%A3%E5%B8%90%E7%AF%B7%23) `95.8K 🔥` `NEW`
1. [胡锡进称星宇道歉不够](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E7%A7%B0%E6%98%9F%E5%AE%87%E9%81%93%E6%AD%89%E4%B8%8D%E5%A4%9F%23) `95.8K 🔥` `NEW`
1. [老一辈是不是都这么天真](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E6%98%AF%E4%B8%8D%E6%98%AF%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A9%E7%9C%9F%23) `95.8K 🔥` `NEW`
1. [宁静录制第二天就发现花少2节目本质](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E5%BD%95%E5%88%B6%E7%AC%AC%E4%BA%8C%E5%A4%A9%E5%B0%B1%E5%8F%91%E7%8E%B0%E8%8A%B1%E5%B0%912%E8%8A%82%E7%9B%AE%E6%9C%AC%E8%B4%A8%23) `95.8K 🔥` `NEW`
1. [3899元的戴森牙刷真不坑穷人](https://s.weibo.com/weibo?q=%233899%E5%85%83%E7%9A%84%E6%88%B4%E6%A3%AE%E7%89%99%E5%88%B7%E7%9C%9F%E4%B8%8D%E5%9D%91%E7%A9%B7%E4%BA%BA%23) `95.8K 🔥` `NEW`

Updated at 2026-09-03 01:19:08

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
