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

1. [谢娜成都演唱会票价 (Xie Na Chengdu concert ticket price)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%88%90%E9%83%BD%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%23) `293.5K 🔥` `NEW`
1. [曝同一个艺人四部剧都没过会](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%90%8C%E4%B8%80%E4%B8%AA%E8%89%BA%E4%BA%BA%E5%9B%9B%E9%83%A8%E5%89%A7%E9%83%BD%E6%B2%A1%E8%BF%87%E4%BC%9A%23) `76.3K 🔥` `NEW`
1. [恭喜那些洗袜子不翻面的人](https://s.weibo.com/weibo?q=%23%E6%81%AD%E5%96%9C%E9%82%A3%E4%BA%9B%E6%B4%97%E8%A2%9C%E5%AD%90%E4%B8%8D%E7%BF%BB%E9%9D%A2%E7%9A%84%E4%BA%BA%23) `76.1K 🔥` `NEW`
1. [郭碧婷劝小鹿不要生二胎](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E5%8A%9D%E5%B0%8F%E9%B9%BF%E4%B8%8D%E8%A6%81%E7%94%9F%E4%BA%8C%E8%83%8E%23) `75.6K 🔥` `NEW`
1. [7岁男童冲出马路被撞交警判全责](https://s.weibo.com/weibo?q=%237%E5%B2%81%E7%94%B7%E7%AB%A5%E5%86%B2%E5%87%BA%E9%A9%AC%E8%B7%AF%E8%A2%AB%E6%92%9E%E4%BA%A4%E8%AD%A6%E5%88%A4%E5%85%A8%E8%B4%A3%23) `75.2K 🔥` `NEW`
1. [小狗洗澡洗得太干净主人懵了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E6%B4%97%E6%BE%A1%E6%B4%97%E5%BE%97%E5%A4%AA%E5%B9%B2%E5%87%80%E4%B8%BB%E4%BA%BA%E6%87%B5%E4%BA%86%23) `74.1K 🔥` `NEW`
1. [张婉婷回应宋宁峰借钱还网贷](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E5%9B%9E%E5%BA%94%E5%AE%8B%E5%AE%81%E5%B3%B0%E5%80%9F%E9%92%B1%E8%BF%98%E7%BD%91%E8%B4%B7%23) `73.7K 🔥` `NEW`
1. [莫氏鸡煲老板原本是中医](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%8E%9F%E6%9C%AC%E6%98%AF%E4%B8%AD%E5%8C%BB%23) `72.5K 🔥` `NEW`
1. [被扇耳光小学生家长说孩子有错在先](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%89%87%E8%80%B3%E5%85%89%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%AE%B6%E9%95%BF%E8%AF%B4%E5%AD%A9%E5%AD%90%E6%9C%89%E9%94%99%E5%9C%A8%E5%85%88%23) `61.7K 🔥` `NEW`
1. [陶昕然表现](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E8%A1%A8%E7%8E%B0%23) `52.0K 🔥` `NEW`
1. [适合减脂期吃的水油焖菜 (Stewed vegetables suitable for fat loss period)](https://s.weibo.com/weibo?q=%23%E9%80%82%E5%90%88%E5%87%8F%E8%84%82%E6%9C%9F%E5%90%83%E7%9A%84%E6%B0%B4%E6%B2%B9%E7%84%96%E8%8F%9C%23) `50.5K 🔥` `NEW`
1. [每天喝2杯咖啡的好处](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%96%9D2%E6%9D%AF%E5%92%96%E5%95%A1%E7%9A%84%E5%A5%BD%E5%A4%84%23) `48.8K 🔥` `NEW`
1. [浪姐连着两天淘汰两个央视前主持人](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%BF%9E%E7%9D%80%E4%B8%A4%E5%A4%A9%E6%B7%98%E6%B1%B0%E4%B8%A4%E4%B8%AA%E5%A4%AE%E8%A7%86%E5%89%8D%E4%B8%BB%E6%8C%81%E4%BA%BA%23) `48.0K 🔥` `NEW`
1. [男子因针灸四肢瘫痪诊所被判赔241万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E9%92%88%E7%81%B8%E5%9B%9B%E8%82%A2%E7%98%AB%E7%97%AA%E8%AF%8A%E6%89%80%E8%A2%AB%E5%88%A4%E8%B5%94241%E4%B8%87%23) `47.4K 🔥` `NEW`
1. [女子1天爬2次华山收到景区问候 (Woman climbs Mount Huashan twice in one day and receives greetings from scenic spot)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%901%E5%A4%A9%E7%88%AC2%E6%AC%A1%E5%8D%8E%E5%B1%B1%E6%94%B6%E5%88%B0%E6%99%AF%E5%8C%BA%E9%97%AE%E5%80%99%23) `1.1M 🔥` `+25%`
1. [海底捞已通知一千多家门店内部排查 (Haidilao has notified more than a thousand stores for internal inspections)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E5%B7%B2%E9%80%9A%E7%9F%A5%E4%B8%80%E5%8D%83%E5%A4%9A%E5%AE%B6%E9%97%A8%E5%BA%97%E5%86%85%E9%83%A8%E6%8E%92%E6%9F%A5%23) `779.1K 🔥` `+26%`
1. [我国经济一季度交出亮眼答卷 (my country’s economy delivered impressive results in the first quarter)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E4%B8%80%E5%AD%A3%E5%BA%A6%E4%BA%A4%E5%87%BA%E4%BA%AE%E7%9C%BC%E7%AD%94%E5%8D%B7%23) `605.7K 🔥` `+28%`
1. [孙怡阚清子直播零互动 (Sun Yi Kan Qingzi live broadcast with zero interaction)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%98%9A%E6%B8%85%E5%AD%90%E7%9B%B4%E6%92%AD%E9%9B%B6%E4%BA%92%E5%8A%A8%23) `556.7K 🔥` `+37%`
1. [美伊第三轮谈判结束](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E7%AC%AC%E4%B8%89%E8%BD%AE%E8%B0%88%E5%88%A4%E7%BB%93%E6%9D%9F%23) `299.6K 🔥` `+426%`
1. [无忧渡](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%BF%A7%E6%B8%A1%23) `74.6K 🔥` `+31%`
1. [美国答应伊朗先决条件的可能性有多大](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%AD%94%E5%BA%94%E4%BC%8A%E6%9C%97%E5%85%88%E5%86%B3%E6%9D%A1%E4%BB%B6%E7%9A%84%E5%8F%AF%E8%83%BD%E6%80%A7%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `72.6K 🔥` `+28%`
1. [巴基斯坦总理分别会见伊美谈判成员](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E6%80%BB%E7%90%86%E5%88%86%E5%88%AB%E4%BC%9A%E8%A7%81%E4%BC%8A%E7%BE%8E%E8%B0%88%E5%88%A4%E6%88%90%E5%91%98%23) `72.6K 🔥` `+28%`
1. [李小冉口误喊赵兆老公 (Li Xiaoran mistakenly called Zhao Zhao’s husband)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8F%A3%E8%AF%AF%E5%96%8A%E8%B5%B5%E5%85%86%E8%80%81%E5%85%AC%23) `70.8K 🔥` `+24%`
1. [直播晕倒被辞退女主播发声 (Female anchor who fainted during live broadcast and was fired speaks out)](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E6%99%95%E5%80%92%E8%A2%AB%E8%BE%9E%E9%80%80%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%8F%91%E5%A3%B0%23) `195.2K 🔥`
1. [美伊谈判最新进展](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%88%A4%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `74.4K 🔥`
1. [李斌称新车迭代太快造成浪费](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%8C%E7%A7%B0%E6%96%B0%E8%BD%A6%E8%BF%AD%E4%BB%A3%E5%A4%AA%E5%BF%AB%E9%80%A0%E6%88%90%E6%B5%AA%E8%B4%B9%23) `74.3K 🔥`
1. [维妮娜是央视前主持人 (Wenina is a former host of CCTV)](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%A6%AE%E5%A8%9C%E6%98%AF%E5%A4%AE%E8%A7%86%E5%89%8D%E4%B8%BB%E6%8C%81%E4%BA%BA%23) `73.6K 🔥`
1. [俩弟弟长得像妈妈哥哥却长得像爸爸 (The two younger brothers look like their mother, but their elder brother looks like their father.)](https://s.weibo.com/weibo?q=%23%E4%BF%A9%E5%BC%9F%E5%BC%9F%E9%95%BF%E5%BE%97%E5%83%8F%E5%A6%88%E5%A6%88%E5%93%A5%E5%93%A5%E5%8D%B4%E9%95%BF%E5%BE%97%E5%83%8F%E7%88%B8%E7%88%B8%23) `73.1K 🔥`
1. [江语晨胜诉浪姐后台哭成一片](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E8%83%9C%E8%AF%89%E6%B5%AA%E5%A7%90%E5%90%8E%E5%8F%B0%E5%93%AD%E6%88%90%E4%B8%80%E7%89%87%23) `73.0K 🔥`
1. [印媒称印度眼睁睁看自己被边缘化](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%AA%92%E7%A7%B0%E5%8D%B0%E5%BA%A6%E7%9C%BC%E7%9D%81%E7%9D%81%E7%9C%8B%E8%87%AA%E5%B7%B1%E8%A2%AB%E8%BE%B9%E7%BC%98%E5%8C%96%23) `72.8K 🔥`
1. [萧蔷58岁身材 (Xiao Qiang's 58-year-old figure)](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B758%E5%B2%81%E8%BA%AB%E6%9D%90%23) `72.8K 🔥`
1. [金鹤龙化的田曦薇 (Tian Xiwei transformed into a golden crane and a dragon)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E5%8C%96%E7%9A%84%E7%94%B0%E6%9B%A6%E8%96%87%23) `69.6K 🔥`
1. [35岁是癌症风险关键分水岭](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E6%98%AF%E7%99%8C%E7%97%87%E9%A3%8E%E9%99%A9%E5%85%B3%E9%94%AE%E5%88%86%E6%B0%B4%E5%B2%AD%23) `61.7K 🔥`
1. [金饰开始拼促销最高克减360 (Gold jewelry starts promotion with maximum discount of 360)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%BC%80%E5%A7%8B%E6%8B%BC%E4%BF%83%E9%94%80%E6%9C%80%E9%AB%98%E5%85%8B%E5%87%8F360%23) `51.1K 🔥`
1. [杨紫生命树登上新闻联播](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%94%9F%E5%91%BD%E6%A0%91%E7%99%BB%E4%B8%8A%E6%96%B0%E9%97%BB%E8%81%94%E6%92%AD%23) `48.8K 🔥`
1. [心愿便利贴 不好听但溺爱了 (Wish post-it notes don’t sound good but I love you)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%20%E4%B8%8D%E5%A5%BD%E5%90%AC%E4%BD%86%E6%BA%BA%E7%88%B1%E4%BA%86%23) `46.9K 🔥`
1. [苏超常州3比0南通 (Su Chao Changzhou 3-0 Nantong)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%B8%B8%E5%B7%9E3%E6%AF%940%E5%8D%97%E9%80%9A%23) `76.9K 🔥` `-64%`
1. [天大图书馆留言板火了 (Tianda Library message board is popular)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%A4%A7%E5%9B%BE%E4%B9%A6%E9%A6%86%E7%95%99%E8%A8%80%E6%9D%BF%E7%81%AB%E4%BA%86%23) `76.8K 🔥` `-64%`
1. [伊美谈判延长1天](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%BE%8E%E8%B0%88%E5%88%A4%E5%BB%B6%E9%95%BF1%E5%A4%A9%23) `76.6K 🔥` `-63%`
1. [伊媒曝出伊朗提出的谈判前提条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%AA%92%E6%9B%9D%E5%87%BA%E4%BC%8A%E6%9C%97%E6%8F%90%E5%87%BA%E7%9A%84%E8%B0%88%E5%88%A4%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6%23) `75.7K 🔥` `-63%`
1. [齐思钧主持能力 (Qi Sijun’s hosting ability)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E4%B8%BB%E6%8C%81%E8%83%BD%E5%8A%9B%23) `75.3K 🔥` `-66%`
1. [维妮娜淘汰 (Venina eliminated)](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%A6%AE%E5%A8%9C%E6%B7%98%E6%B1%B0%23) `75.0K 🔥` `-57%`
1. [美媒称数艘美军舰通过霍尔木兹](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E6%95%B0%E8%89%98%E7%BE%8E%E5%86%9B%E8%88%B0%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `72.7K 🔥` `-66%`
1. [浪姐版傲慢与偏见](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%89%88%E5%82%B2%E6%85%A2%E4%B8%8E%E5%81%8F%E8%A7%81%23) `54.9K 🔥` `-36%`
1. [生命树取景地接待超15万人次 (The Tree of Life location received over 150,000 visitors)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%8F%96%E6%99%AF%E5%9C%B0%E6%8E%A5%E5%BE%85%E8%B6%8515%E4%B8%87%E4%BA%BA%E6%AC%A1%23) `49.2K 🔥` `-21%`
1. [谢娜直播官宣演唱会](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%9B%B4%E6%92%AD%E5%AE%98%E5%AE%A3%E6%BC%94%E5%94%B1%E4%BC%9A%23) `45.3K 🔥` `-21%`
1. [美媒称数艘美海军舰船通过霍尔木兹海峡 (US media reported that several US Navy ships passed through the Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E6%95%B0%E8%89%98%E7%BE%8E%E6%B5%B7%E5%86%9B%E8%88%B0%E8%88%B9%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `44.3K 🔥` `-22%`
1. [苏超50台机器人雨中齐舞 (50 robots from Suchao dance together in the rain)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%8550%E5%8F%B0%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%9B%A8%E4%B8%AD%E9%BD%90%E8%88%9E%23) `44.3K 🔥` `-22%`
1. [存储还能涨多久](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%BF%98%E8%83%BD%E6%B6%A8%E5%A4%9A%E4%B9%85%23) `44.3K 🔥` `-22%`

Updated at 2026-04-12 08:02:49

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
