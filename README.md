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

1. [陈熠张本美和爆分 (Chen Yi, Zhang Benmei and explosive scores)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%86%A0%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E7%88%86%E5%88%86%23) `858.3K 🔥` `NEW`
1. [别克至境L7纯电预售16.99万起](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%85%8B%E8%87%B3%E5%A2%83L7%E7%BA%AF%E7%94%B5%E9%A2%84%E5%94%AE16.99%E4%B8%87%E8%B5%B7%23) `784.0K 🔥` `NEW`
1. [怀疑自己比例不好都没怀疑过镜子](https://s.weibo.com/weibo?q=%23%E6%80%80%E7%96%91%E8%87%AA%E5%B7%B1%E6%AF%94%E4%BE%8B%E4%B8%8D%E5%A5%BD%E9%83%BD%E6%B2%A1%E6%80%80%E7%96%91%E8%BF%87%E9%95%9C%E5%AD%90%23) `779.2K 🔥` `NEW`
1. [用惯拼多多发现很多东西不该这么贵](https://s.weibo.com/weibo?q=%23%E7%94%A8%E6%83%AF%E6%8B%BC%E5%A4%9A%E5%A4%9A%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9A%E4%B8%9C%E8%A5%BF%E4%B8%8D%E8%AF%A5%E8%BF%99%E4%B9%88%E8%B4%B5%23) `524.9K 🔥` `NEW`
1. [丁程鑫全世界最尊重时团前缀之人](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%85%A8%E4%B8%96%E7%95%8C%E6%9C%80%E5%B0%8A%E9%87%8D%E6%97%B6%E5%9B%A2%E5%89%8D%E7%BC%80%E4%B9%8B%E4%BA%BA%23) `524.2K 🔥` `NEW`
1. [14岁儿子智力退至婴儿父亲哽咽发声](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%84%BF%E5%AD%90%E6%99%BA%E5%8A%9B%E9%80%80%E8%87%B3%E5%A9%B4%E5%84%BF%E7%88%B6%E4%BA%B2%E5%93%BD%E5%92%BD%E5%8F%91%E5%A3%B0%23) `523.3K 🔥` `NEW`
1. [曝Mina韩国住所和偶像同一区](https://s.weibo.com/weibo?q=%23%E6%9B%9DMina%E9%9F%A9%E5%9B%BD%E4%BD%8F%E6%89%80%E5%92%8C%E5%81%B6%E5%83%8F%E5%90%8C%E4%B8%80%E5%8C%BA%23) `523.0K 🔥` `NEW`
1. [胚胎案原配称除了我没人能扛起这个家](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E7%A7%B0%E9%99%A4%E4%BA%86%E6%88%91%E6%B2%A1%E4%BA%BA%E8%83%BD%E6%89%9B%E8%B5%B7%E8%BF%99%E4%B8%AA%E5%AE%B6%23) `491.0K 🔥` `NEW`
1. [鬼鬼说很想去浪姐但是去不了](https://s.weibo.com/weibo?q=%23%E9%AC%BC%E9%AC%BC%E8%AF%B4%E5%BE%88%E6%83%B3%E5%8E%BB%E6%B5%AA%E5%A7%90%E4%BD%86%E6%98%AF%E5%8E%BB%E4%B8%8D%E4%BA%86%23) `484.1K 🔥` `NEW`
1. [半熟恋人](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA%23) `255.1K 🔥` `NEW`
1. [宇树科技发行价150.8元 (The issue price of Yushu Technology is 150.8 yuan)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E5%8F%91%E8%A1%8C%E4%BB%B7150.8%E5%85%83%23) `252.3K 🔥` `NEW`
1. [985博士后在妻子孕期出轨后续](https://s.weibo.com/weibo?q=%23985%E5%8D%9A%E5%A3%AB%E5%90%8E%E5%9C%A8%E5%A6%BB%E5%AD%90%E5%AD%95%E6%9C%9F%E5%87%BA%E8%BD%A8%E5%90%8E%E7%BB%AD%23) `248.8K 🔥` `NEW`
1. [小黄豆已病倒](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86%E5%B7%B2%E7%97%85%E5%80%92%23) `247.2K 🔥` `NEW`
1. [西村力大吧发长文回应](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E5%A4%A7%E5%90%A7%E5%8F%91%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%23) `243.8K 🔥` `NEW`
1. [日本女网红自杀地与偶像公司同区](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%87%AA%E6%9D%80%E5%9C%B0%E4%B8%8E%E5%81%B6%E5%83%8F%E5%85%AC%E5%8F%B8%E5%90%8C%E5%8C%BA%23) `242.0K 🔥` `NEW`
1. [侯卓成杨汝晴 备婚期](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E6%9D%A8%E6%B1%9D%E6%99%B4%20%E5%A4%87%E5%A9%9A%E6%9C%9F%23) `239.0K 🔥` `NEW`
1. [警方调查日本网红直播自杀](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E8%B0%83%E6%9F%A5%E6%97%A5%E6%9C%AC%E7%BD%91%E7%BA%A2%E7%9B%B4%E6%92%AD%E8%87%AA%E6%9D%80%23) `233.0K 🔥` `NEW`
1. [白鹿请客开到荼蘼剧组](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AF%B7%E5%AE%A2%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%E5%89%A7%E7%BB%84%23) `232.7K 🔥` `NEW`
1. [吕思瞳 小号](https://s.weibo.com/weibo?q=%23%E5%90%95%E6%80%9D%E7%9E%B3%20%E5%B0%8F%E5%8F%B7%23) `232.7K 🔥` `NEW`
1. [陈熠申请医疗暂停被驳回](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%86%A0%E7%94%B3%E8%AF%B7%E5%8C%BB%E7%96%97%E6%9A%82%E5%81%9C%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `232.6K 🔥` `NEW`
1. [TOP的椰综是什么综 (What is the TOP Coconut Zong?)](https://s.weibo.com/weibo?q=%23TOP%E7%9A%84%E6%A4%B0%E7%BB%BC%E6%98%AF%E4%BB%80%E4%B9%88%E7%BB%BC%23) `232.2K 🔥` `NEW`
1. [泰国一公务员因妆容精致引争议](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E4%B8%80%E5%85%AC%E5%8A%A1%E5%91%98%E5%9B%A0%E5%A6%86%E5%AE%B9%E7%B2%BE%E8%87%B4%E5%BC%95%E4%BA%89%E8%AE%AE%23) `230.8K 🔥` `NEW`
1. [和光维权声明](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%85%89%E7%BB%B4%E6%9D%83%E5%A3%B0%E6%98%8E%23) `226.9K 🔥` `NEW`
1. [陈熠2比3张本美和](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%86%A02%E6%AF%943%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `225.6K 🔥` `NEW`
1. [养蛇场近900条蛇出逃他跨省捕获](https://s.weibo.com/weibo?q=%23%E5%85%BB%E8%9B%87%E5%9C%BA%E8%BF%91900%E6%9D%A1%E8%9B%87%E5%87%BA%E9%80%83%E4%BB%96%E8%B7%A8%E7%9C%81%E6%8D%95%E8%8E%B7%23) `221.2K 🔥` `NEW`
1. [交警回应侯明昊违反交规被约谈](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E5%9B%9E%E5%BA%94%E4%BE%AF%E6%98%8E%E6%98%8A%E8%BF%9D%E5%8F%8D%E4%BA%A4%E8%A7%84%E8%A2%AB%E7%BA%A6%E8%B0%88%23) `208.1K 🔥` `NEW`
1. [梅姨被抓前2天记者魏华去世](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%A2%AB%E6%8A%93%E5%89%8D2%E5%A4%A9%E8%AE%B0%E8%80%85%E9%AD%8F%E5%8D%8E%E5%8E%BB%E4%B8%96%23) `206.8K 🔥` `NEW`
1. [刘畊宏女儿小泡芙颜值](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%8A%E5%AE%8F%E5%A5%B3%E5%84%BF%E5%B0%8F%E6%B3%A1%E8%8A%99%E9%A2%9C%E5%80%BC%23) `206.8K 🔥` `NEW`
1. [EWC](https://s.weibo.com/weibo?q=%23EWC%23) `206.8K 🔥` `NEW`
1. [宋亚轩说刘耀文张真源是森林冰火人](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%AF%B4%E5%88%98%E8%80%80%E6%96%87%E5%BC%A0%E7%9C%9F%E6%BA%90%E6%98%AF%E6%A3%AE%E6%9E%97%E5%86%B0%E7%81%AB%E4%BA%BA%23) `201.2K 🔥` `NEW`
1. [比房主任塌房更值得讨论的问题 (There is an issue more worthy of discussion than the house manager's house collapse.)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E6%88%BF%E4%B8%BB%E4%BB%BB%E5%A1%8C%E6%88%BF%E6%9B%B4%E5%80%BC%E5%BE%97%E8%AE%A8%E8%AE%BA%E7%9A%84%E9%97%AE%E9%A2%98%23) `175.5K 🔥` `NEW`
1. [DK对战T1](https://s.weibo.com/weibo?q=%23DK%E5%AF%B9%E6%88%98T1%23) `163.3K 🔥` `NEW`
1. [伊朗总统称与最高领袖联络非常困难](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E4%B8%8E%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E8%81%94%E7%BB%9C%E9%9D%9E%E5%B8%B8%E5%9B%B0%E9%9A%BE%23) `142.8K 🔥` `NEW`
1. [TFBOYS我们的少年时代重播](https://s.weibo.com/weibo?q=%23TFBOYS%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A3%E9%87%8D%E6%92%AD%23) `124.2K 🔥` `NEW`
1. [易烊千玺小小的我刘春和还在发力](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B0%8F%E5%B0%8F%E7%9A%84%E6%88%91%E5%88%98%E6%98%A5%E5%92%8C%E8%BF%98%E5%9C%A8%E5%8F%91%E5%8A%9B%23) `124.0K 🔥` `NEW`
1. [原来不上班有这么多能做的事](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E4%B8%8A%E7%8F%AD%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E8%83%BD%E5%81%9A%E7%9A%84%E4%BA%8B%23) `523.9K 🔥` `+168%`
1. [父亲起诉9岁私生子被儿子斥畜生不如](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E8%B5%B7%E8%AF%899%E5%B2%81%E7%A7%81%E7%94%9F%E5%AD%90%E8%A2%AB%E5%84%BF%E5%AD%90%E6%96%A5%E7%95%9C%E7%94%9F%E4%B8%8D%E5%A6%82%23) `522.7K 🔥` `+57%`
1. [曝侯明昊违反交规被约谈](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BE%AF%E6%98%8E%E6%98%8A%E8%BF%9D%E5%8F%8D%E4%BA%A4%E8%A7%84%E8%A2%AB%E7%BA%A6%E8%B0%88%23) `522.4K 🔥` `+68%`
1. [苏泊尔 擦边 (Supor edge)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%B3%8A%E5%B0%94%20%E6%93%A6%E8%BE%B9%23) `525.1K 🔥`
1. [字节跳动内部严禁蒸馏开源模型 (Distillation of open source models is strictly prohibited within ByteDance)](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E5%86%85%E9%83%A8%E4%B8%A5%E7%A6%81%E8%92%B8%E9%A6%8F%E5%BC%80%E6%BA%90%E6%A8%A1%E5%9E%8B%23) `173.0K 🔥`
1. [金鹰奖 (Golden Eagle Award)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `1.2M 🔥` `-41%`
1. [6图看我国海洋经济稳步增长](https://s.weibo.com/weibo?q=%236%E5%9B%BE%E7%9C%8B%E6%88%91%E5%9B%BD%E6%B5%B7%E6%B4%8B%E7%BB%8F%E6%B5%8E%E7%A8%B3%E6%AD%A5%E5%A2%9E%E9%95%BF%23) `788.1K 🔥` `-24%`
1. [女子用漏洞0元买了3千台电器 (Woman used loophole to buy 3,000 electrical appliances for 0 yuan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A8%E6%BC%8F%E6%B4%9E0%E5%85%83%E4%B9%B0%E4%BA%863%E5%8D%83%E5%8F%B0%E7%94%B5%E5%99%A8%23) `576.4K 🔥` `-45%`
1. [工作其实是很养人的 (Work is actually very nourishing.)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%85%B6%E5%AE%9E%E6%98%AF%E5%BE%88%E5%85%BB%E4%BA%BA%E7%9A%84%23) `525.4K 🔥` `-24%`
1. [田曦薇 有刘海儿漂亮没刘海儿也漂亮](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%9C%89%E5%88%98%E6%B5%B7%E5%84%BF%E6%BC%82%E4%BA%AE%E6%B2%A1%E5%88%98%E6%B5%B7%E5%84%BF%E4%B9%9F%E6%BC%82%E4%BA%AE%23) `238.9K 🔥` `-30%`
1. [千山茶客 来日有信 (Tea guest from Qianshan, there will be a letter in the future)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E5%B1%B1%E8%8C%B6%E5%AE%A2%20%E6%9D%A5%E6%97%A5%E6%9C%89%E4%BF%A1%23) `234.0K 🔥` `-48%`
1. [戚薇真的把自己做成AI了 (Qi Wei really made herself an AI)](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E7%9C%9F%E7%9A%84%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%81%9A%E6%88%90AI%E4%BA%86%23) `228.2K 🔥` `-32%`
1. [时代少年团把丁程鑫刘耀文合照放C位](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%8A%8A%E4%B8%81%E7%A8%8B%E9%91%AB%E5%88%98%E8%80%80%E6%96%87%E5%90%88%E7%85%A7%E6%94%BEC%E4%BD%8D%23) `225.1K 🔥` `-34%`
1. [关之琳模特新男友才27岁](https://s.weibo.com/weibo?q=%23%E5%85%B3%E4%B9%8B%E7%90%B3%E6%A8%A1%E7%89%B9%E6%96%B0%E7%94%B7%E5%8F%8B%E6%89%8D27%E5%B2%81%23) `224.9K 🔥` `-30%`
1. [金鹰奖下午公布提名名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E4%B8%8B%E5%8D%88%E5%85%AC%E5%B8%83%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `207.1K 🔥` `-40%`
1. [日女网红被扒出曾陪酒遭人身攻击 (Japanese internet celebrity was revealed to have been drinking with her and was physically assaulted)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%A2%AB%E6%89%92%E5%87%BA%E6%9B%BE%E9%99%AA%E9%85%92%E9%81%AD%E4%BA%BA%E8%BA%AB%E6%94%BB%E5%87%BB%23) `176.7K 🔥` `-43%`

Updated at 2026-08-06 20:13:26

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
