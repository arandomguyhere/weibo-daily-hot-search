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

1. [铁路出行迎返程高峰 (Railway travel welcomes return peak)](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E5%87%BA%E8%A1%8C%E8%BF%8E%E8%BF%94%E7%A8%8B%E9%AB%98%E5%B3%B0%23) `643.7K 🔥` `NEW`
1. [曝柠檬影视怕剧本写完檀健次不演](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%A0%E6%AA%AC%E5%BD%B1%E8%A7%86%E6%80%95%E5%89%A7%E6%9C%AC%E5%86%99%E5%AE%8C%E6%AA%80%E5%81%A5%E6%AC%A1%E4%B8%8D%E6%BC%94%23) `335.5K 🔥` `NEW`
1. [育婴师喂水致宝宝被呛进ICU](https://s.weibo.com/weibo?q=%23%E8%82%B2%E5%A9%B4%E5%B8%88%E5%96%82%E6%B0%B4%E8%87%B4%E5%AE%9D%E5%AE%9D%E8%A2%AB%E5%91%9B%E8%BF%9BICU%23) `329.6K 🔥` `NEW`
1. [百词斩把忮忌加上了](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%AF%8D%E6%96%A9%E6%8A%8A%E5%BF%AE%E5%BF%8C%E5%8A%A0%E4%B8%8A%E4%BA%86%23) `321.1K 🔥` `NEW`
1. [太平年里赛足球吴越风采看嘉兴](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E9%87%8C%E8%B5%9B%E8%B6%B3%E7%90%83%E5%90%B4%E8%B6%8A%E9%A3%8E%E9%87%87%E7%9C%8B%E5%98%89%E5%85%B4%23) `145.7K 🔥` `NEW`
1. [校园周边毒玩具泛滥](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E5%9B%AD%E5%91%A8%E8%BE%B9%E6%AF%92%E7%8E%A9%E5%85%B7%E6%B3%9B%E6%BB%A5%23) `143.6K 🔥` `NEW`
1. [佟丽娅看朵朵饭撒的眼神](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E7%9C%8B%E6%9C%B5%E6%9C%B5%E9%A5%AD%E6%92%92%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `142.9K 🔥` `NEW`
1. [咖啡店摆700字须知内含禁乱扔丝袜](https://s.weibo.com/weibo?q=%23%E5%92%96%E5%95%A1%E5%BA%97%E6%91%86700%E5%AD%97%E9%A1%BB%E7%9F%A5%E5%86%85%E5%90%AB%E7%A6%81%E4%B9%B1%E6%89%94%E4%B8%9D%E8%A2%9C%23) `136.7K 🔥` `NEW`
1. [我竟然在看到礼物的一瞬间对比价格](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%AB%9F%E7%84%B6%E5%9C%A8%E7%9C%8B%E5%88%B0%E7%A4%BC%E7%89%A9%E7%9A%84%E4%B8%80%E7%9E%AC%E9%97%B4%E5%AF%B9%E6%AF%94%E4%BB%B7%E6%A0%BC%23) `87.0K 🔥` `NEW`
1. [TF家族8名新生代演员全员上线](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F8%E5%90%8D%E6%96%B0%E7%94%9F%E4%BB%A3%E6%BC%94%E5%91%98%E5%85%A8%E5%91%98%E4%B8%8A%E7%BA%BF%23) `82.8K 🔥` `NEW`
1. [邱贻可恭喜孙颖莎三连冠 (Qiu Yike congratulates Sun Yingsha for winning three consecutive championships)](https://s.weibo.com/weibo?q=%23%E9%82%B1%E8%B4%BB%E5%8F%AF%E6%81%AD%E5%96%9C%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%89%E8%BF%9E%E5%86%A0%23) `82.6K 🔥` `NEW`
1. [王楚钦世排第1林诗栋第5](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%96%E6%8E%92%E7%AC%AC1%E6%9E%97%E8%AF%97%E6%A0%8B%E7%AC%AC5%23) `73.0K 🔥` `NEW`
1. [蔡徐坤演唱会中场休息不到30秒](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%AD%E5%9C%BA%E4%BC%91%E6%81%AF%E4%B8%8D%E5%88%B030%E7%A7%92%23) `72.1K 🔥` `NEW`
1. [特别讨厌食堂的标语](https://s.weibo.com/weibo?q=%23%E7%89%B9%E5%88%AB%E8%AE%A8%E5%8E%8C%E9%A3%9F%E5%A0%82%E7%9A%84%E6%A0%87%E8%AF%AD%23) `65.6K 🔥` `NEW`
1. [爱上没什么了不起爱下去才了不起](https://s.weibo.com/weibo?q=%23%E7%88%B1%E4%B8%8A%E6%B2%A1%E4%BB%80%E4%B9%88%E4%BA%86%E4%B8%8D%E8%B5%B7%E7%88%B1%E4%B8%8B%E5%8E%BB%E6%89%8D%E4%BA%86%E4%B8%8D%E8%B5%B7%23) `61.8K 🔥` `NEW`
1. [贺思慕抽走段胥记忆](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%80%9D%E6%85%95%E6%8A%BD%E8%B5%B0%E6%AE%B5%E8%83%A5%E8%AE%B0%E5%BF%86%23) `52.1K 🔥` `NEW`
1. [猎罪图鉴](https://s.weibo.com/weibo?q=%23%E7%8C%8E%E7%BD%AA%E5%9B%BE%E9%89%B4%23) `1.1M 🔥` `+413%`
1. [莫氏鸡煲被传遭文旅施压开门营业 (Mo’s Chicken Pot is rumored to be under pressure from cultural tourism to open for business)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%A2%AB%E4%BC%A0%E9%81%AD%E6%96%87%E6%97%85%E6%96%BD%E5%8E%8B%E5%BC%80%E9%97%A8%E8%90%A5%E4%B8%9A%23) `783.9K 🔥` `+139%`
1. [一世鹰名毁于伊弹](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%96%E9%B9%B0%E5%90%8D%E6%AF%81%E4%BA%8E%E4%BC%8A%E5%BC%B9%23) `536.5K 🔥` `+310%`
1. [本周做什么都顺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `277.5K 🔥` `+31%`
1. [伊能静曝和秦昊结婚原因](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E6%9B%9D%E5%92%8C%E7%A7%A6%E6%98%8A%E7%BB%93%E5%A9%9A%E5%8E%9F%E5%9B%A0%23) `216.7K 🔥` `+67%`
1. [时代峰峻的销冠都在这了 (All the top sellers of the times are here.)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E7%9A%84%E9%94%80%E5%86%A0%E9%83%BD%E5%9C%A8%E8%BF%99%E4%BA%86%23) `216.5K 🔥` `+66%`
1. [王楚钦回复许昕大脑处于宕机状态了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%A4%8D%E8%AE%B8%E6%98%95%E5%A4%A7%E8%84%91%E5%A4%84%E4%BA%8E%E5%AE%95%E6%9C%BA%E7%8A%B6%E6%80%81%E4%BA%86%23) `216.3K 🔥` `+312%`
1. [埃及航班行李全部丢失中国乘客发声 (Chinese passengers speak out after all their luggage was lost on Egypt flight)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E8%88%AA%E7%8F%AD%E8%A1%8C%E6%9D%8E%E5%85%A8%E9%83%A8%E4%B8%A2%E5%A4%B1%E4%B8%AD%E5%9B%BD%E4%B9%98%E5%AE%A2%E5%8F%91%E5%A3%B0%23) `215.6K 🔥` `+32%`
1. [林宇辉 猎罪图鉴3不拍了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AE%87%E8%BE%89%20%E7%8C%8E%E7%BD%AA%E5%9B%BE%E9%89%B43%E4%B8%8D%E6%8B%8D%E4%BA%86%23) `213.0K 🔥` `+32%`
1. [Angelababy家里摆满了粉丝的礼物](https://s.weibo.com/weibo?q=%23Angelababy%E5%AE%B6%E9%87%8C%E6%91%86%E6%BB%A1%E4%BA%86%E7%B2%89%E4%B8%9D%E7%9A%84%E7%A4%BC%E7%89%A9%23) `203.0K 🔥` `+56%`
1. [人民日报评多人带货优思益翻车](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%A4%9A%E4%BA%BA%E5%B8%A6%E8%B4%A7%E4%BC%98%E6%80%9D%E7%9B%8A%E7%BF%BB%E8%BD%A6%23) `100.9K 🔥` `+29%`
1. [桃黑黑道歉 (Taoheihei apologizes)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E9%81%93%E6%AD%89%23) `167.1K 🔥`
1. [短发李一桐 芭比娃娃](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%8F%91%E6%9D%8E%E4%B8%80%E6%A1%90%20%E8%8A%AD%E6%AF%94%E5%A8%83%E5%A8%83%23) `152.0K 🔥`
1. [卫生巾价格或上涨3%至8% (Sanitary napkin prices may rise by 3% to 8%)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E4%BB%B7%E6%A0%BC%E6%88%96%E4%B8%8A%E6%B6%A83%25%E8%87%B38%25%23) `115.4K 🔥`
1. [田曦薇素颜饭撒](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%B4%A0%E9%A2%9C%E9%A5%AD%E6%92%92%23) `87.2K 🔥`
1. [月鳞绮纪云合S加剧集](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E4%BA%91%E5%90%88S%E5%8A%A0%E5%89%A7%E9%9B%86%23) `77.8K 🔥`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `61.9K 🔥`
1. [朵朵和陈思诚共用一张脸 (Duoduo and Chen Sicheng share the same face)](https://s.weibo.com/weibo?q=%23%E6%9C%B5%E6%9C%B5%E5%92%8C%E9%99%88%E6%80%9D%E8%AF%9A%E5%85%B1%E7%94%A8%E4%B8%80%E5%BC%A0%E8%84%B8%23) `60.0K 🔥`
1. [有一种惊艳叫贵州马路边](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%B8%80%E7%A7%8D%E6%83%8A%E8%89%B3%E5%8F%AB%E8%B4%B5%E5%B7%9E%E9%A9%AC%E8%B7%AF%E8%BE%B9%23) `54.4K 🔥`
1. [香港飞香港的航班 (flights from Hong Kong to Hong Kong)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%A3%9E%E9%A6%99%E6%B8%AF%E7%9A%84%E8%88%AA%E7%8F%AD%23) `329.0K 🔥` `-59%`
1. [孙颖莎长文总结世界杯 (Sun Yingsha’s long article summarizes the World Cup)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%95%BF%E6%96%87%E6%80%BB%E7%BB%93%E4%B8%96%E7%95%8C%E6%9D%AF%23) `217.3K 🔥` `-80%`
1. [台湾春卷中毒人数增至134人 (Number of spring roll poisoning cases in Taiwan rises to 134)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E6%98%A5%E5%8D%B7%E4%B8%AD%E6%AF%92%E4%BA%BA%E6%95%B0%E5%A2%9E%E8%87%B3134%E4%BA%BA%23) `141.9K 🔥` `-35%`
1. [樊振东23岁成就世界杯四冠王](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C23%E5%B2%81%E6%88%90%E5%B0%B1%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%86%A0%E7%8E%8B%23) `115.3K 🔥` `-30%`
1. [美伊停火协议或将于6日生效 (The US-Iran ceasefire agreement may come into effect on the 6th)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E5%8D%8F%E8%AE%AE%E6%88%96%E5%B0%86%E4%BA%8E6%E6%97%A5%E7%94%9F%E6%95%88%23) `110.5K 🔥` `-44%`
1. [美宇航员太空中意外半裸出镜](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%87%E8%88%AA%E5%91%98%E5%A4%AA%E7%A9%BA%E4%B8%AD%E6%84%8F%E5%A4%96%E5%8D%8A%E8%A3%B8%E5%87%BA%E9%95%9C%23) `97.8K 🔥` `-23%`
1. [江山大同杨幂路透](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%E6%9D%A8%E5%B9%82%E8%B7%AF%E9%80%8F%23) `87.1K 🔥` `-45%`
1. [孕妇在飞纽约航班上高空产子](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E5%9C%A8%E9%A3%9E%E7%BA%BD%E7%BA%A6%E8%88%AA%E7%8F%AD%E4%B8%8A%E9%AB%98%E7%A9%BA%E4%BA%A7%E5%AD%90%23) `85.5K 🔥` `-45%`
1. [美营救飞行员附近炸出约28个弹坑](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%90%A5%E6%95%91%E9%A3%9E%E8%A1%8C%E5%91%98%E9%99%84%E8%BF%91%E7%82%B8%E5%87%BA%E7%BA%A628%E4%B8%AA%E5%BC%B9%E5%9D%91%23) `77.2K 🔥` `-47%`
1. [王楚钦晒世界杯大合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%99%92%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%A7%E5%90%88%E7%85%A7%23) `76.9K 🔥` `-41%`
1. [最全的布洛芬品种都在曹操墓前了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%85%A8%E7%9A%84%E5%B8%83%E6%B4%9B%E8%8A%AC%E5%93%81%E7%A7%8D%E9%83%BD%E5%9C%A8%E6%9B%B9%E6%93%8D%E5%A2%93%E5%89%8D%E4%BA%86%23) `71.5K 🔥` `-47%`
1. [杜海涛开车接机沈梦辰](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E6%B5%B7%E6%B6%9B%E5%BC%80%E8%BD%A6%E6%8E%A5%E6%9C%BA%E6%B2%88%E6%A2%A6%E8%BE%B0%23) `69.5K 🔥` `-23%`
1. [洗衣液是需要反应时间的](https://s.weibo.com/weibo?q=%23%E6%B4%97%E8%A1%A3%E6%B6%B2%E6%98%AF%E9%9C%80%E8%A6%81%E5%8F%8D%E5%BA%94%E6%97%B6%E9%97%B4%E7%9A%84%23) `63.9K 🔥` `-57%`
1. [国内金饰价格大跌 (Domestic gold jewelery prices plummet)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E5%A4%A7%E8%B7%8C%23) `58.1K 🔥` `-43%`

Updated at 2026-04-06 20:35:06

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
