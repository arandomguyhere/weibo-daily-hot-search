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

1. [红果VIP 付费 (Hongguo VIP paid)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9CVIP%20%E4%BB%98%E8%B4%B9%23) `7.5M 🔥` `NEW`
1. [红果回应VIP付费](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%9B%9E%E5%BA%94VIP%E4%BB%98%E8%B4%B9%23) `1.6M 🔥` `NEW`
1. [莫雷加德认证樊振东定海神针](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E8%AE%A4%E8%AF%81%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%AE%9A%E6%B5%B7%E7%A5%9E%E9%92%88%23) `640.6K 🔥` `NEW`
1. [曝iPhone18Pro定价激进](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E5%AE%9A%E4%BB%B7%E6%BF%80%E8%BF%9B%23) `466.2K 🔥` `NEW`
1. [豆包错误率](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E9%94%99%E8%AF%AF%E7%8E%87%23) `437.9K 🔥` `NEW`
1. [消失的人票房破2亿](https://s.weibo.com/weibo?q=%23%E6%B6%88%E5%A4%B1%E7%9A%84%E4%BA%BA%E7%A5%A8%E6%88%BF%E7%A0%B42%E4%BA%BF%23) `434.1K 🔥` `NEW`
1. [豆包把付费说的如此清新脱俗](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%8A%8A%E4%BB%98%E8%B4%B9%E8%AF%B4%E7%9A%84%E5%A6%82%E6%AD%A4%E6%B8%85%E6%96%B0%E8%84%B1%E4%BF%97%23) `412.8K 🔥` `NEW`
1. [订婚强奸案男子出狱父母一夜未眠](https://s.weibo.com/weibo?q=%23%E8%AE%A2%E5%A9%9A%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%94%B7%E5%AD%90%E5%87%BA%E7%8B%B1%E7%88%B6%E6%AF%8D%E4%B8%80%E5%A4%9C%E6%9C%AA%E7%9C%A0%23) `403.4K 🔥` `NEW`
1. [中国向联合国发出警告](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%90%91%E8%81%94%E5%90%88%E5%9B%BD%E5%8F%91%E5%87%BA%E8%AD%A6%E5%91%8A%23) `302.9K 🔥` `NEW`
1. [BABYMONSTER回归](https://s.weibo.com/weibo?q=%23BABYMONSTER%E5%9B%9E%E5%BD%92%23) `296.3K 🔥` `NEW`
1. [订婚强奸案男子刑满出狱 (Engagement rape man released from prison after serving sentence)](https://s.weibo.com/weibo?q=%23%E8%AE%A2%E5%A9%9A%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%94%B7%E5%AD%90%E5%88%91%E6%BB%A1%E5%87%BA%E7%8B%B1%23) `294.2K 🔥` `NEW`
1. [门牙 疑似票房造假](https://s.weibo.com/weibo?q=%23%E9%97%A8%E7%89%99%20%E7%96%91%E4%BC%BC%E7%A5%A8%E6%88%BF%E9%80%A0%E5%81%87%23) `291.0K 🔥` `NEW`
1. [800一晚老式宾馆年轻人五一抢着住](https://s.weibo.com/weibo?q=%23800%E4%B8%80%E6%99%9A%E8%80%81%E5%BC%8F%E5%AE%BE%E9%A6%86%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%BA%94%E4%B8%80%E6%8A%A2%E7%9D%80%E4%BD%8F%23) `287.3K 🔥` `NEW`
1. [邮轮暴发致命病毒靠港求医遭拒](https://s.weibo.com/weibo?q=%23%E9%82%AE%E8%BD%AE%E6%9A%B4%E5%8F%91%E8%87%B4%E5%91%BD%E7%97%85%E6%AF%92%E9%9D%A0%E6%B8%AF%E6%B1%82%E5%8C%BB%E9%81%AD%E6%8B%92%23) `285.2K 🔥` `NEW`
1. [美军重兵介入霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E9%87%8D%E5%85%B5%E4%BB%8B%E5%85%A5%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `283.8K 🔥` `NEW`
1. [现在谈恋爱才是赶上好时候了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E8%B0%88%E6%81%8B%E7%88%B1%E6%89%8D%E6%98%AF%E8%B5%B6%E4%B8%8A%E5%A5%BD%E6%97%B6%E5%80%99%E4%BA%86%23) `283.0K 🔥` `NEW`
1. [choom](https://s.weibo.com/weibo?q=%23choom%23) `280.7K 🔥` `NEW`
1. [郭涛15岁女儿身高](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%B6%9B15%E5%B2%81%E5%A5%B3%E5%84%BF%E8%BA%AB%E9%AB%98%23) `279.8K 🔥` `NEW`
1. [过度独立 心理创伤](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E7%8B%AC%E7%AB%8B%20%E5%BF%83%E7%90%86%E5%88%9B%E4%BC%A4%23) `278.9K 🔥` `NEW`
1. [黄灿灿误入业主群](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E8%AF%AF%E5%85%A5%E4%B8%9A%E4%B8%BB%E7%BE%A4%23) `276.3K 🔥` `NEW`
1. [赵樱子自曝在娱乐圈混不下去的原因 (Zhao Yingzi reveals why she can’t survive in the entertainment industry)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90%E8%87%AA%E6%9B%9D%E5%9C%A8%E5%A8%B1%E4%B9%90%E5%9C%88%E6%B7%B7%E4%B8%8D%E4%B8%8B%E5%8E%BB%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `273.5K 🔥` `NEW`
1. [中国对美国说不](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%AF%B9%E7%BE%8E%E5%9B%BD%E8%AF%B4%E4%B8%8D%23) `270.2K 🔥` `NEW`
1. [撒贝宁设宴款待妻子娘家人](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%E8%AE%BE%E5%AE%B4%E6%AC%BE%E5%BE%85%E5%A6%BB%E5%AD%90%E5%A8%98%E5%AE%B6%E4%BA%BA%23) `268.7K 🔥` `NEW`
1. [女顾客想要40码鞋反被男主播嘲讽](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%A1%BE%E5%AE%A2%E6%83%B3%E8%A6%8140%E7%A0%81%E9%9E%8B%E5%8F%8D%E8%A2%AB%E7%94%B7%E4%B8%BB%E6%92%AD%E5%98%B2%E8%AE%BD%23) `263.6K 🔥` `NEW`
1. [樊振东寄语所有青年](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%AF%84%E8%AF%AD%E6%89%80%E6%9C%89%E9%9D%92%E5%B9%B4%23) `262.5K 🔥` `NEW`
1. [刘雨昕锐评王濛粉裙造型](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E6%98%95%E9%94%90%E8%AF%84%E7%8E%8B%E6%BF%9B%E7%B2%89%E8%A3%99%E9%80%A0%E5%9E%8B%23) `260.1K 🔥` `NEW`
1. [南非失踪商人疑被大肚鳄鱼吞食](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%9D%9E%E5%A4%B1%E8%B8%AA%E5%95%86%E4%BA%BA%E7%96%91%E8%A2%AB%E5%A4%A7%E8%82%9A%E9%B3%84%E9%B1%BC%E5%90%9E%E9%A3%9F%23) `257.8K 🔥` `NEW`
1. [关晓彤比耶转场](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%AF%94%E8%80%B6%E8%BD%AC%E5%9C%BA%23) `256.6K 🔥` `NEW`
1. [陈凯琳带三个娃都没这么难这么累](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%87%AF%E7%90%B3%E5%B8%A6%E4%B8%89%E4%B8%AA%E5%A8%83%E9%83%BD%E6%B2%A1%E8%BF%99%E4%B9%88%E9%9A%BE%E8%BF%99%E4%B9%88%E7%B4%AF%23) `255.0K 🔥` `NEW`
1. [强烈建议大家去狂刷考公综艺](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E7%83%88%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8E%BB%E7%8B%82%E5%88%B7%E8%80%83%E5%85%AC%E7%BB%BC%E8%89%BA%23) `706.1K 🔥` `+160%`
1. [突然意识到开封就是开封的意思 (I suddenly realized that Kaifeng means Kaifeng.)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E5%BC%80%E5%B0%81%E5%B0%B1%E6%98%AF%E5%BC%80%E5%B0%81%E7%9A%84%E6%84%8F%E6%80%9D%23) `691.2K 🔥` `+137%`
1. [央视五四晚会官宣](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E4%BA%94%E5%9B%9B%E6%99%9A%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `426.4K 🔥` `+25%`
1. [方圆自曝与网红合拍不给合作费](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E8%87%AA%E6%9B%9D%E4%B8%8E%E7%BD%91%E7%BA%A2%E5%90%88%E6%8B%8D%E4%B8%8D%E7%BB%99%E5%90%88%E4%BD%9C%E8%B4%B9%23) `304.2K 🔥`
1. [金价又又又跌了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%8F%88%E5%8F%88%E5%8F%88%E8%B7%8C%E4%BA%86%23) `301.2K 🔥`
1. [男子住酒店捅了蟑螂窝了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BD%8F%E9%85%92%E5%BA%97%E6%8D%85%E4%BA%86%E8%9F%91%E8%9E%82%E7%AA%9D%E4%BA%86%23) `298.4K 🔥`
1. [白敬亭 宋轶](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `297.6K 🔥`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `293.8K 🔥`
1. [韦雪怒斥小三](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E9%9B%AA%E6%80%92%E6%96%A5%E5%B0%8F%E4%B8%89%23) `290.6K 🔥`
1. [张凌赫田曦薇 妇唱夫随 (Zhang Linghe and Tian Xiwei, the wife sings and her husband follows her)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%20%E5%A6%87%E5%94%B1%E5%A4%AB%E9%9A%8F%23) `288.0K 🔥`
1. [原来幸福的人都在这样生活](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B9%B8%E7%A6%8F%E7%9A%84%E4%BA%BA%E9%83%BD%E5%9C%A8%E8%BF%99%E6%A0%B7%E7%94%9F%E6%B4%BB%23) `272.4K 🔥`
1. [心理学上你只会爱上三种人](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%90%86%E5%AD%A6%E4%B8%8A%E4%BD%A0%E5%8F%AA%E4%BC%9A%E7%88%B1%E4%B8%8A%E4%B8%89%E7%A7%8D%E4%BA%BA%23) `270.8K 🔥`
1. [王源入选伯克利杰出校友 (Wang Yuan selected as Berkeley Distinguished Alumni)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%85%A5%E9%80%89%E4%BC%AF%E5%85%8B%E5%88%A9%E6%9D%B0%E5%87%BA%E6%A0%A1%E5%8F%8B%23) `264.3K 🔥`
1. [豆包 付费 (Bean bag paid)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E4%BB%98%E8%B4%B9%23) `12.2M 🔥` `-54%`
1. [中国青年好young的](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%9D%92%E5%B9%B4%E5%A5%BDyoung%E7%9A%84%23) `1.2M 🔥` `-29%`
1. [豆包 笨还收费](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E7%AC%A8%E8%BF%98%E6%94%B6%E8%B4%B9%23) `395.5K 🔥` `-30%`
1. [二十七八岁什么感觉](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%8D%81%E4%B8%83%E5%85%AB%E5%B2%81%E4%BB%80%E4%B9%88%E6%84%9F%E8%A7%89%23) `392.0K 🔥` `-53%`
1. [女子搭网约车强抢方向盘酿车祸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%90%AD%E7%BD%91%E7%BA%A6%E8%BD%A6%E5%BC%BA%E6%8A%A2%E6%96%B9%E5%90%91%E7%9B%98%E9%85%BF%E8%BD%A6%E7%A5%B8%23) `300.2K 🔥` `-86%`
1. [高铁ABC座很暧昧](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81ABC%E5%BA%A7%E5%BE%88%E6%9A%A7%E6%98%A7%23) `274.7K 🔥` `-36%`
1. [布洛芬头一回累晕菜了](https://s.weibo.com/weibo?q=%23%E5%B8%83%E6%B4%9B%E8%8A%AC%E5%A4%B4%E4%B8%80%E5%9B%9E%E7%B4%AF%E6%99%95%E8%8F%9C%E4%BA%86%23) `266.3K 🔥` `-49%`
1. [马嘉祺丁程鑫雨爱](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%81%E7%A8%8B%E9%91%AB%E9%9B%A8%E7%88%B1%23) `258.7K 🔥` `-24%`

Updated at 2026-05-04 18:01:14

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
