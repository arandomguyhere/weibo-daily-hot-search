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

1. [进货式游中国火了 (Purchase-style travel to China is popular)](https://s.weibo.com/weibo?q=%23%E8%BF%9B%E8%B4%A7%E5%BC%8F%E6%B8%B8%E4%B8%AD%E5%9B%BD%E7%81%AB%E4%BA%86%23) `679.8K 🔥` `NEW`
1. [中国博主发布进入靖国神社视频](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8D%9A%E4%B8%BB%E5%8F%91%E5%B8%83%E8%BF%9B%E5%85%A5%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E8%A7%86%E9%A2%91%23) `286.1K 🔥` `NEW`
1. [沪上阿姨 蹭流量](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%20%E8%B9%AD%E6%B5%81%E9%87%8F%23) `283.3K 🔥` `NEW`
1. [蒋奇明的演技已经到了化境](https://s.weibo.com/weibo?q=%23%E8%92%8B%E5%A5%87%E6%98%8E%E7%9A%84%E6%BC%94%E6%8A%80%E5%B7%B2%E7%BB%8F%E5%88%B0%E4%BA%86%E5%8C%96%E5%A2%83%23) `282.6K 🔥` `NEW`
1. [宋亚轩上个音综大合照还是站旁边](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%8A%E4%B8%AA%E9%9F%B3%E7%BB%BC%E5%A4%A7%E5%90%88%E7%85%A7%E8%BF%98%E6%98%AF%E7%AB%99%E6%97%81%E8%BE%B9%23) `281.7K 🔥` `NEW`
1. [李乃文给穆祉丞当经纪人去电玩城](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%83%E6%96%87%E7%BB%99%E7%A9%86%E7%A5%89%E4%B8%9E%E5%BD%93%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%8E%BB%E7%94%B5%E7%8E%A9%E5%9F%8E%23) `279.8K 🔥` `NEW`
1. [西甲揭幕战](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%94%B2%E6%8F%AD%E5%B9%95%E6%88%98%23) `278.2K 🔥` `NEW`
1. [生态环境法典彰显中国的远见和定力](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%80%81%E7%8E%AF%E5%A2%83%E6%B3%95%E5%85%B8%E5%BD%B0%E6%98%BE%E4%B8%AD%E5%9B%BD%E7%9A%84%E8%BF%9C%E8%A7%81%E5%92%8C%E5%AE%9A%E5%8A%9B%23) `277.3K 🔥` `NEW`
1. [车银优的近照](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E9%93%B6%E4%BC%98%E7%9A%84%E8%BF%91%E7%85%A7%23) `272.3K 🔥` `NEW`
1. [父母尽量别跟孩子说4类话](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%B0%BD%E9%87%8F%E5%88%AB%E8%B7%9F%E5%AD%A9%E5%AD%90%E8%AF%B44%E7%B1%BB%E8%AF%9D%23) `217.9K 🔥` `NEW`
1. [造谣青岛大学旭日旗者被拘 (Those who spread rumors about Qingdao University’s Rising Sun Flag were detained)](https://s.weibo.com/weibo?q=%23%E9%80%A0%E8%B0%A3%E9%9D%92%E5%B2%9B%E5%A4%A7%E5%AD%A6%E6%97%AD%E6%97%A5%E6%97%97%E8%80%85%E8%A2%AB%E6%8B%98%23) `215.8K 🔥` `NEW`
1. [炎亚纶为飞轮海发声](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E4%B8%BA%E9%A3%9E%E8%BD%AE%E6%B5%B7%E5%8F%91%E5%A3%B0%23) `214.6K 🔥` `NEW`
1. [TheShy带队冲击骑士之路](https://s.weibo.com/weibo?q=%23TheShy%E5%B8%A6%E9%98%9F%E5%86%B2%E5%87%BB%E9%AA%91%E5%A3%AB%E4%B9%8B%E8%B7%AF%23) `120.4K 🔥` `NEW`
1. [严浩翔把票投给了叶润泽](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%8A%8A%E7%A5%A8%E6%8A%95%E7%BB%99%E4%BA%86%E5%8F%B6%E6%B6%A6%E6%B3%BD%23) `119.3K 🔥` `NEW`
1. [二手豪华车保值率大跌](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%89%8B%E8%B1%AA%E5%8D%8E%E8%BD%A6%E4%BF%9D%E5%80%BC%E7%8E%87%E5%A4%A7%E8%B7%8C%23) `118.3K 🔥` `NEW`
1. [菲律宾防长指挥军队抓捕中国工人](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E9%98%B2%E9%95%BF%E6%8C%87%E6%8C%A5%E5%86%9B%E9%98%9F%E6%8A%93%E6%8D%95%E4%B8%AD%E5%9B%BD%E5%B7%A5%E4%BA%BA%23) `116.9K 🔥` `NEW`
1. [胖东来将闭门店28个收银口排长龙 (Fat Dong Lai will close its stores and there will be long queues at 28 cashiers.)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%B0%86%E9%97%AD%E9%97%A8%E5%BA%9728%E4%B8%AA%E6%94%B6%E9%93%B6%E5%8F%A3%E6%8E%92%E9%95%BF%E9%BE%99%23) `1.4M 🔥` `+46%`
1. [四六级](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%23) `508.1K 🔥` `+60%`
1. [胖东来闭店裁缝摊称将跟随搬迁](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%97%AD%E5%BA%97%E8%A3%81%E7%BC%9D%E6%91%8A%E7%A7%B0%E5%B0%86%E8%B7%9F%E9%9A%8F%E6%90%AC%E8%BF%81%23) `442.3K 🔥` `+177%`
1. [王楚钦作为国乒男队队长的压力](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BD%9C%E4%B8%BA%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E9%98%9F%E9%95%BF%E7%9A%84%E5%8E%8B%E5%8A%9B%23) `281.7K 🔥` `+25%`
1. [日本人街头质疑南京大屠杀 (Japanese people question the Nanjing Massacre on the streets)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E8%A1%97%E5%A4%B4%E8%B4%A8%E7%96%91%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%23) `214.8K 🔥` `+77%`
1. [鞠婧祎苏影后造型](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%8B%8F%E5%BD%B1%E5%90%8E%E9%80%A0%E5%9E%8B%23) `181.1K 🔥` `+24%`
1. [被诉诈骗女主播家属质疑立案合法性 (Family members of female anchor accused of defrauding question legality of filing case)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%AF%89%E8%AF%88%E9%AA%97%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%AE%B6%E5%B1%9E%E8%B4%A8%E7%96%91%E7%AB%8B%E6%A1%88%E5%90%88%E6%B3%95%E6%80%A7%23) `168.7K 🔥` `+79%`
1. [旺旺晒出无糖低糖新品](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E6%99%92%E5%87%BA%E6%97%A0%E7%B3%96%E4%BD%8E%E7%B3%96%E6%96%B0%E5%93%81%23) `914.7K 🔥`
1. [汉奸石平参拜靖国神社 (Traitor Shi Ping visits Yasukuni Shrine)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A5%B8%E7%9F%B3%E5%B9%B3%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `407.2K 🔥`
1. [女子产后抑郁自缢至亲因财产对簿公堂](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%A7%E5%90%8E%E6%8A%91%E9%83%81%E8%87%AA%E7%BC%A2%E8%87%B3%E4%BA%B2%E5%9B%A0%E8%B4%A2%E4%BA%A7%E5%AF%B9%E7%B0%BF%E5%85%AC%E5%A0%82%23) `285.3K 🔥`
1. [曹骏披哥席位第一 (Cao Junpi's brother ranks first)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%8A%AB%E5%93%A5%E5%B8%AD%E4%BD%8D%E7%AC%AC%E4%B8%80%23) `284.1K 🔥`
1. [李登科曝带朋友找张凌赫合照被拒](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E6%9B%9D%E5%B8%A6%E6%9C%8B%E5%8F%8B%E6%89%BE%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%88%E7%85%A7%E8%A2%AB%E6%8B%92%23) `281.0K 🔥`
1. [曝谷爱凌LV三公子恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B0%B7%E7%88%B1%E5%87%8CLV%E4%B8%89%E5%85%AC%E5%AD%90%E6%81%8B%E6%83%85%23) `276.2K 🔥`
1. [大大降低癌症风险的7个习惯](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A4%A7%E9%99%8D%E4%BD%8E%E7%99%8C%E7%97%87%E9%A3%8E%E9%99%A9%E7%9A%847%E4%B8%AA%E4%B9%A0%E6%83%AF%23) `275.4K 🔥`
1. [卫龙还算辣条公司吗](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E9%BE%99%E8%BF%98%E7%AE%97%E8%BE%A3%E6%9D%A1%E5%85%AC%E5%8F%B8%E5%90%97%23) `274.1K 🔥`
1. [小沈阳秒了 (Little Shenyang is seconds away)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E7%A7%92%E4%BA%86%23) `260.8K 🔥`
1. [披荆斩棘初舞台排名](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%88%9D%E8%88%9E%E5%8F%B0%E6%8E%92%E5%90%8D%23) `153.1K 🔥`
1. [王曼昱冲冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%B2%E5%86%A0%23) `148.7K 🔥`
1. [鞠婧祎原谅现偶了 (Ju Jingyi forgives me now)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%E4%BA%86%23) `148.6K 🔥`
1. [马嘉祺对张真源说别摸我屁股](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AF%B9%E5%BC%A0%E7%9C%9F%E6%BA%90%E8%AF%B4%E5%88%AB%E6%91%B8%E6%88%91%E5%B1%81%E8%82%A1%23) `146.6K 🔥`
1. [曾辉把炎亚纶炸出来了 (Zeng Hui blew up Yan Yalun)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%8A%8A%E7%82%8E%E4%BA%9A%E7%BA%B6%E7%82%B8%E5%87%BA%E6%9D%A5%E4%BA%86%23) `645.2K 🔥` `-33%`
1. [王传君终于原谅爱情公寓了 (Wang Chuanjun finally forgives iPartment)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%BA%86%23) `495.5K 🔥` `-49%`
1. [奥德赛](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `285.7K 🔥` `-25%`
1. [欢天喜地七仙女选角让人笑哭 (The casting of Seven Fairies in Joy makes people laugh and cry)](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%A4%A9%E5%96%9C%E5%9C%B0%E4%B8%83%E4%BB%99%E5%A5%B3%E9%80%89%E8%A7%92%E8%AE%A9%E4%BA%BA%E7%AC%91%E5%93%AD%23) `279.1K 🔥` `-87%`
1. [以数智物流赋能特色产业发展 (Empowering the development of featured industries with digital and intelligent logistics)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%95%B0%E6%99%BA%E7%89%A9%E6%B5%81%E8%B5%8B%E8%83%BD%E7%89%B9%E8%89%B2%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%23) `272.6K 🔥` `-72%`
1. [曾辉 唱出了飞轮海的感觉 (Zeng Hui sang the feeling of Fahrenheit)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%20%E5%94%B1%E5%87%BA%E4%BA%86%E9%A3%9E%E8%BD%AE%E6%B5%B7%E7%9A%84%E6%84%9F%E8%A7%89%23) `210.5K 🔥` `-35%`
1. [生活中如何分辨善妒的人](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%B4%BB%E4%B8%AD%E5%A6%82%E4%BD%95%E5%88%86%E8%BE%A8%E5%96%84%E5%A6%92%E7%9A%84%E4%BA%BA%23) `186.3K 🔥` `-39%`
1. [刘耀文张真源发了20岁和21岁的严浩翔](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%8F%91%E4%BA%8620%E5%B2%81%E5%92%8C21%E5%B2%81%E7%9A%84%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `163.1K 🔥` `-36%`
1. [陈熠回应0比4张本美和](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%86%A0%E5%9B%9E%E5%BA%940%E6%AF%944%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `152.3K 🔥` `-40%`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `151.8K 🔥` `-41%`
1. [淑元回应](https://s.weibo.com/weibo?q=%23%E6%B7%91%E5%85%83%E5%9B%9E%E5%BA%94%23) `149.0K 🔥` `-35%`
1. [新乡胖东来搬走前VS搬走后 (Xinxiang Fat Donglai Before Moving VS After Moving)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B9%A1%E8%83%96%E4%B8%9C%E6%9D%A5%E6%90%AC%E8%B5%B0%E5%89%8DVS%E6%90%AC%E8%B5%B0%E5%90%8E%23) `146.2K 🔥` `-31%`
1. [郭德纲文促会主席团会议发言](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%E6%96%87%E4%BF%83%E4%BC%9A%E4%B8%BB%E5%B8%AD%E5%9B%A2%E4%BC%9A%E8%AE%AE%E5%8F%91%E8%A8%80%23) `145.9K 🔥` `-53%`
1. [王俊凯王源易烊千玺集齐粉发 (Wang Junkai, Wang Yuan, Yi Yang Qianxi all have pink hair)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E9%9B%86%E9%BD%90%E7%B2%89%E5%8F%91%23) `143.4K 🔥` `-34%`

Updated at 2026-08-16 10:23:35

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
