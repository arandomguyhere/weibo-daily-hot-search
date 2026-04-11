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

1. [孙怡阚清子直播零互动 (Sun Yi Kan Qingzi live broadcast with zero interaction)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%98%9A%E6%B8%85%E5%AD%90%E7%9B%B4%E6%92%AD%E9%9B%B6%E4%BA%92%E5%8A%A8%23) `405.4K 🔥` `NEW`
1. [伊美谈判延长1天](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%BE%8E%E8%B0%88%E5%88%A4%E5%BB%B6%E9%95%BF1%E5%A4%A9%23) `208.2K 🔥` `NEW`
1. [伊媒曝出伊朗提出的谈判前提条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%AA%92%E6%9B%9D%E5%87%BA%E4%BC%8A%E6%9C%97%E6%8F%90%E5%87%BA%E7%9A%84%E8%B0%88%E5%88%A4%E5%89%8D%E6%8F%90%E6%9D%A1%E4%BB%B6%23) `206.9K 🔥` `NEW`
1. [维妮娜是央视前主持人](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%A6%AE%E5%A8%9C%E6%98%AF%E5%A4%AE%E8%A7%86%E5%89%8D%E4%B8%BB%E6%8C%81%E4%BA%BA%23) `82.1K 🔥` `NEW`
1. [李斌称新车迭代太快造成浪费](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%8C%E7%A7%B0%E6%96%B0%E8%BD%A6%E8%BF%AD%E4%BB%A3%E5%A4%AA%E5%BF%AB%E9%80%A0%E6%88%90%E6%B5%AA%E8%B4%B9%23) `79.2K 🔥` `NEW`
1. [美伊谈判最新进展](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%88%A4%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `76.1K 🔥` `NEW`
1. [霍尔木兹成美伊谈判矛盾核心](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%88%90%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%88%A4%E7%9F%9B%E7%9B%BE%E6%A0%B8%E5%BF%83%23) `57.0K 🔥` `NEW`
1. [美伊第三轮谈判结束](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E7%AC%AC%E4%B8%89%E8%BD%AE%E8%B0%88%E5%88%A4%E7%BB%93%E6%9D%9F%23) `57.0K 🔥` `NEW`
1. [美国答应伊朗先决条件的可能性有多大](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%AD%94%E5%BA%94%E4%BC%8A%E6%9C%97%E5%85%88%E5%86%B3%E6%9D%A1%E4%BB%B6%E7%9A%84%E5%8F%AF%E8%83%BD%E6%80%A7%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `56.9K 🔥` `NEW`
1. [无忧渡](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%BF%A7%E6%B8%A1%23) `56.8K 🔥` `NEW`
1. [美媒称数艘美海军舰船通过霍尔木兹海峡 (US media reported that several US Navy ships passed through the Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E6%95%B0%E8%89%98%E7%BE%8E%E6%B5%B7%E5%86%9B%E8%88%B0%E8%88%B9%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `56.8K 🔥` `NEW`
1. [杨紫生命树登上新闻联播](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%94%9F%E5%91%BD%E6%A0%91%E7%99%BB%E4%B8%8A%E6%96%B0%E9%97%BB%E8%81%94%E6%92%AD%23) `56.7K 🔥` `NEW`
1. [巴基斯坦总理分别会见伊美谈判成员](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E6%80%BB%E7%90%86%E5%88%86%E5%88%AB%E4%BC%9A%E8%A7%81%E4%BC%8A%E7%BE%8E%E8%B0%88%E5%88%A4%E6%88%90%E5%91%98%23) `56.7K 🔥` `NEW`
1. [存储还能涨多久](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%BF%98%E8%83%BD%E6%B6%A8%E5%A4%9A%E4%B9%85%23) `56.6K 🔥` `NEW`
1. [女子1天爬2次华山收到景区问候 (Woman climbs Mount Huashan twice in one day and receives greetings from scenic spot)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%901%E5%A4%A9%E7%88%AC2%E6%AC%A1%E5%8D%8E%E5%B1%B1%E6%94%B6%E5%88%B0%E6%99%AF%E5%8C%BA%E9%97%AE%E5%80%99%23) `839.9K 🔥` `+51%`
1. [海底捞已通知一千多家门店内部排查 (Haidilao has notified more than a thousand stores for internal inspections)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E5%B7%B2%E9%80%9A%E7%9F%A5%E4%B8%80%E5%8D%83%E5%A4%9A%E5%AE%B6%E9%97%A8%E5%BA%97%E5%86%85%E9%83%A8%E6%8E%92%E6%9F%A5%23) `616.1K 🔥` `+58%`
1. [我国经济一季度交出亮眼答卷 (my country’s economy delivered impressive results in the first quarter)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E4%B8%80%E5%AD%A3%E5%BA%A6%E4%BA%A4%E5%87%BA%E4%BA%AE%E7%9C%BC%E7%AD%94%E5%8D%B7%23) `474.1K 🔥` `+49%`
1. [直播晕倒被辞退女主播发声 (Female anchor who fainted during live broadcast and was fired speaks out)](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E6%99%95%E5%80%92%E8%A2%AB%E8%BE%9E%E9%80%80%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%8F%91%E5%A3%B0%23) `221.5K 🔥` `+55%`
1. [齐思钧主持能力 (Qi Sijun’s hosting ability)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E4%B8%BB%E6%8C%81%E8%83%BD%E5%8A%9B%23) `219.1K 🔥` `+77%`
1. [美媒称数艘美军舰通过霍尔木兹](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E6%95%B0%E8%89%98%E7%BE%8E%E5%86%9B%E8%88%B0%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `216.1K 🔥` `+181%`
1. [苏超常州3比0南通 (Su Chao Changzhou 3-0 Nantong)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E5%B8%B8%E5%B7%9E3%E6%AF%940%E5%8D%97%E9%80%9A%23) `215.0K 🔥` `+402%`
1. [天大图书馆留言板火了 (Tianda Library message board is popular)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%A4%A7%E5%9B%BE%E4%B9%A6%E9%A6%86%E7%95%99%E8%A8%80%E6%9D%BF%E7%81%AB%E4%BA%86%23) `211.1K 🔥` `+394%`
1. [维妮娜淘汰 (Venina eliminated)](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%A6%AE%E5%A8%9C%E6%B7%98%E6%B1%B0%23) `176.4K 🔥` `+132%`
1. [浪姐版傲慢与偏见](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%89%88%E5%82%B2%E6%85%A2%E4%B8%8E%E5%81%8F%E8%A7%81%23) `85.3K 🔥` `+50%`
1. [萧蔷58岁身材 (Xiao Qiang's 58-year-old figure)](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B758%E5%B2%81%E8%BA%AB%E6%9D%90%23) `83.7K 🔥` `+48%`
1. [印媒称印度眼睁睁看自己被边缘化](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%AA%92%E7%A7%B0%E5%8D%B0%E5%BA%A6%E7%9C%BC%E7%9D%81%E7%9D%81%E7%9C%8B%E8%87%AA%E5%B7%B1%E8%A2%AB%E8%BE%B9%E7%BC%98%E5%8C%96%23) `82.2K 🔥` `+33%`
1. [江语晨胜诉浪姐后台哭成一片](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E8%83%9C%E8%AF%89%E6%B5%AA%E5%A7%90%E5%90%8E%E5%8F%B0%E5%93%AD%E6%88%90%E4%B8%80%E7%89%87%23) `79.2K 🔥` `+51%`
1. [35岁是癌症风险关键分水岭](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E6%98%AF%E7%99%8C%E7%97%87%E9%A3%8E%E9%99%A9%E5%85%B3%E9%94%AE%E5%88%86%E6%B0%B4%E5%B2%AD%23) `62.5K 🔥` `+46%`
1. [谢娜直播官宣演唱会](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%9B%B4%E6%92%AD%E5%AE%98%E5%AE%A3%E6%BC%94%E5%94%B1%E4%BC%9A%23) `57.4K 🔥` `+34%`
1. [金饰开始拼促销最高克减360 (Gold jewelry starts promotion with maximum discount of 360)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%BC%80%E5%A7%8B%E6%8B%BC%E4%BF%83%E9%94%80%E6%9C%80%E9%AB%98%E5%85%8B%E5%87%8F360%23) `57.1K 🔥` `+33%`
1. [心愿便利贴 不好听但溺爱了 (Wish post-it notes don’t sound good but I love you)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%20%E4%B8%8D%E5%A5%BD%E5%90%AC%E4%BD%86%E6%BA%BA%E7%88%B1%E4%BA%86%23) `57.0K 🔥` `+33%`
1. [你好星期六下期巅峰喜剧节 (Hello Saturday Next Issue Peak Comedy Festival)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E4%B8%8B%E6%9C%9F%E5%B7%85%E5%B3%B0%E5%96%9C%E5%89%A7%E8%8A%82%23) `57.0K 🔥` `+33%`
1. [谢娜演唱会准备十首唱跳舞台](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E5%87%86%E5%A4%87%E5%8D%81%E9%A6%96%E5%94%B1%E8%B7%B3%E8%88%9E%E5%8F%B0%23) `57.0K 🔥` `+33%`
1. [白日提灯 (day lantern)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `56.9K 🔥` `+33%`
1. [苏超50台机器人雨中齐舞](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%8550%E5%8F%B0%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%9B%A8%E4%B8%AD%E9%BD%90%E8%88%9E%23) `56.9K 🔥` `+33%`
1. [庄法萧蔷 不该pk (Zhuang Fa Xiao Qiang should not pk)](https://s.weibo.com/weibo?q=%23%E5%BA%84%E6%B3%95%E8%90%A7%E8%94%B7%20%E4%B8%8D%E8%AF%A5pk%23) `56.9K 🔥` `+33%`
1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `56.9K 🔥` `+33%`
1. [KSG零封狼队](https://s.weibo.com/weibo?q=%23KSG%E9%9B%B6%E5%B0%81%E7%8B%BC%E9%98%9F%23) `56.8K 🔥` `+33%`
1. [怦然心动20岁 (Heart-thumping 20 years old)](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%23) `56.8K 🔥` `+33%`
1. [我英语水平 乌兰图雅 (My English level Ulan Tuya)](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%8B%B1%E8%AF%AD%E6%B0%B4%E5%B9%B3%20%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%23) `56.7K 🔥` `+33%`
1. [赵子琪置顶是藏海传 (Zhao Ziqi's top story is "The Legend of Tibetan Sea")](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E7%BD%AE%E9%A1%B6%E6%98%AF%E8%97%8F%E6%B5%B7%E4%BC%A0%23) `56.7K 🔥` `+32%`
1. [鸡煲老板透露汤底可补肾后又反悔 (Chicken pot owner revealed that the soup base can nourish the kidneys, then regretted it)](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E9%80%8F%E9%9C%B2%E6%B1%A4%E5%BA%95%E5%8F%AF%E8%A1%A5%E8%82%BE%E5%90%8E%E5%8F%88%E5%8F%8D%E6%82%94%23) `56.7K 🔥` `+33%`
1. [伊媒称伊斯兰堡谈判有可能延长一天 (Iranian media says Islamabad talks may be extended by one day)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%AA%92%E7%A7%B0%E4%BC%8A%E6%96%AF%E5%85%B0%E5%A0%A1%E8%B0%88%E5%88%A4%E6%9C%89%E5%8F%AF%E8%83%BD%E5%BB%B6%E9%95%BF%E4%B8%80%E5%A4%A9%23) `56.7K 🔥` `+33%`
1. [俩弟弟长得像妈妈哥哥却长得像爸爸 (The two younger brothers look like their mother, but their elder brother looks like their father.)](https://s.weibo.com/weibo?q=%23%E4%BF%A9%E5%BC%9F%E5%BC%9F%E9%95%BF%E5%BE%97%E5%83%8F%E5%A6%88%E5%A6%88%E5%93%A5%E5%93%A5%E5%8D%B4%E9%95%BF%E5%BE%97%E5%83%8F%E7%88%B8%E7%88%B8%23) `83.8K 🔥`
1. [生命树取景地接待超15万人次 (The Tree of Life location received over 150,000 visitors)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%8F%96%E6%99%AF%E5%9C%B0%E6%8E%A5%E5%BE%85%E8%B6%8515%E4%B8%87%E4%BA%BA%E6%AC%A1%23) `62.4K 🔥`
1. [李小冉口误喊赵兆老公 (Li Xiaoran mistakenly called Zhao Zhao’s husband)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%8F%A3%E8%AF%AF%E5%96%8A%E8%B5%B5%E5%85%86%E8%80%81%E5%85%AC%23) `57.1K 🔥`
1. [赵子琪 浪姐 (Zhao Ziqi Sister Lang)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%20%E6%B5%AA%E5%A7%90%23) `57.0K 🔥`
1. [伊朗警告美驱逐舰](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AD%A6%E5%91%8A%E7%BE%8E%E9%A9%B1%E9%80%90%E8%88%B0%23) `56.9K 🔥`
1. [金鹤龙化的田曦薇 (Tian Xiwei transformed into a golden crane and a dragon)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E5%8C%96%E7%9A%84%E7%94%B0%E6%9B%A6%E8%96%87%23) `79.0K 🔥` `-56%`

Updated at 2026-04-12 07:35:18

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
