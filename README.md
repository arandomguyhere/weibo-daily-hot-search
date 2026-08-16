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

1. [胖东来将闭门店28个收银口排长龙 (Fat Dong Lai will close its stores and there will be long queues at 28 cashiers.)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%B0%86%E9%97%AD%E9%97%A8%E5%BA%9728%E4%B8%AA%E6%94%B6%E9%93%B6%E5%8F%A3%E6%8E%92%E9%95%BF%E9%BE%99%23) `964.0K 🔥` `NEW`
1. [旺旺晒出无糖低糖新品](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E6%99%92%E5%87%BA%E6%97%A0%E7%B3%96%E4%BD%8E%E7%B3%96%E6%96%B0%E5%93%81%23) `963.1K 🔥` `NEW`
1. [曾辉把炎亚纶炸出来了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%8A%8A%E7%82%8E%E4%BA%9A%E7%BA%B6%E7%82%B8%E5%87%BA%E6%9D%A5%E4%BA%86%23) `962.8K 🔥` `NEW`
1. [女子产后抑郁自缢至亲因财产对簿公堂](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%A7%E5%90%8E%E6%8A%91%E9%83%81%E8%87%AA%E7%BC%A2%E8%87%B3%E4%BA%B2%E5%9B%A0%E8%B4%A2%E4%BA%A7%E5%AF%B9%E7%B0%BF%E5%85%AC%E5%A0%82%23) `348.9K 🔥` `NEW`
1. [女子产后抑郁离世父母与丈夫争夺财产](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%A7%E5%90%8E%E6%8A%91%E9%83%81%E7%A6%BB%E4%B8%96%E7%88%B6%E6%AF%8D%E4%B8%8E%E4%B8%88%E5%A4%AB%E4%BA%89%E5%A4%BA%E8%B4%A2%E4%BA%A7%23) `332.1K 🔥` `NEW`
1. [张睿倒数第一](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%23) `303.8K 🔥` `NEW`
1. [曝谷爱凌LV三公子恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B0%B7%E7%88%B1%E5%87%8CLV%E4%B8%89%E5%85%AC%E5%AD%90%E6%81%8B%E6%83%85%23) `257.1K 🔥` `NEW`
1. [陈熠回应0比4张本美和](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%86%A0%E5%9B%9E%E5%BA%940%E6%AF%944%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `255.8K 🔥` `NEW`
1. [大大降低癌症风险的7个习惯](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A4%A7%E9%99%8D%E4%BD%8E%E7%99%8C%E7%97%87%E9%A3%8E%E9%99%A9%E7%9A%847%E4%B8%AA%E4%B9%A0%E6%83%AF%23) `245.1K 🔥` `NEW`
1. [王楚钦作为国乒男队队长的压力](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BD%9C%E4%B8%BA%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E9%98%9F%E9%95%BF%E7%9A%84%E5%8E%8B%E5%8A%9B%23) `226.2K 🔥` `NEW`
1. [王俊凯王源易烊千玺集齐粉发 (Wang Junkai, Wang Yuan, Yi Yang Qianxi all have pink hair)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E9%9B%86%E9%BD%90%E7%B2%89%E5%8F%91%23) `217.0K 🔥` `NEW`
1. [胖东来闭店裁缝摊称将跟随搬迁](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%97%AD%E5%BA%97%E8%A3%81%E7%BC%9D%E6%91%8A%E7%A7%B0%E5%B0%86%E8%B7%9F%E9%9A%8F%E6%90%AC%E8%BF%81%23) `159.7K 🔥` `NEW`
1. [马嘉祺对张真源说别摸我屁股](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AF%B9%E5%BC%A0%E7%9C%9F%E6%BA%90%E8%AF%B4%E5%88%AB%E6%91%B8%E6%88%91%E5%B1%81%E8%82%A1%23) `151.4K 🔥` `NEW`
1. [蒯曼4比3早田希娜](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC4%E6%AF%943%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%23) `146.6K 🔥` `NEW`
1. [鞠婧祎苏影后造型](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%8B%8F%E5%BD%B1%E5%90%8E%E9%80%A0%E5%9E%8B%23) `146.1K 🔥` `NEW`
1. [王曼昱冲冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%86%B2%E5%86%A0%23) `129.5K 🔥` `NEW`
1. [严浩翔22岁发文](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%9422%E5%B2%81%E5%8F%91%E6%96%87%23) `107.7K 🔥` `NEW`
1. [广西平南突发山体滑坡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%B9%B3%E5%8D%97%E7%AA%81%E5%8F%91%E5%B1%B1%E4%BD%93%E6%BB%91%E5%9D%A1%23) `103.9K 🔥` `NEW`
1. [被诉诈骗女主播家属质疑立案合法性](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%AF%89%E8%AF%88%E9%AA%97%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%AE%B6%E5%B1%9E%E8%B4%A8%E7%96%91%E7%AB%8B%E6%A1%88%E5%90%88%E6%B3%95%E6%80%A7%23) `94.5K 🔥` `NEW`
1. [欢天喜地七仙女选角让人笑哭 (The casting of Seven Fairies in Joy makes people laugh and cry)](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%A4%A9%E5%96%9C%E5%9C%B0%E4%B8%83%E4%BB%99%E5%A5%B3%E9%80%89%E8%A7%92%E8%AE%A9%E4%BA%BA%E7%AC%91%E5%93%AD%23) `2.1M 🔥` `+62%`
1. [以数智物流赋能特色产业发展 (Empowering the development of featured industries with digital and intelligent logistics)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%95%B0%E6%99%BA%E7%89%A9%E6%B5%81%E8%B5%8B%E8%83%BD%E7%89%B9%E8%89%B2%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%23) `963.2K 🔥` `+51%`
1. [王传君终于原谅爱情公寓了 (Wang Chuanjun finally forgives iPartment)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%BA%86%23) `963.1K 🔥` `+89%`
1. [岚图追光S四激光入20万级 (Lantu Zhuiguang S four-laser reaches the 200,000 level)](https://s.weibo.com/weibo?q=%23%E5%B2%9A%E5%9B%BE%E8%BF%BD%E5%85%89S%E5%9B%9B%E6%BF%80%E5%85%89%E5%85%A520%E4%B8%87%E7%BA%A7%23) `394.0K 🔥` `+25%`
1. [奥德赛](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `382.3K 🔥` `+70%`
1. [汉奸石平参拜靖国神社 (Traitor Shi Ping visits Yasukuni Shrine)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A5%B8%E7%9F%B3%E5%B9%B3%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `354.4K 🔥` `+54%`
1. [曹骏披哥席位第一 (Cao Junpi's brother ranks first)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%8A%AB%E5%93%A5%E5%B8%AD%E4%BD%8D%E7%AC%AC%E4%B8%80%23) `327.8K 🔥` `+39%`
1. [曾辉 唱出了飞轮海的感觉 (Zeng Hui sang the feeling of Fahrenheit)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%20%E5%94%B1%E5%87%BA%E4%BA%86%E9%A3%9E%E8%BD%AE%E6%B5%B7%E7%9A%84%E6%84%9F%E8%A7%89%23) `324.1K 🔥` `+126%`
1. [四六级](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%23) `317.2K 🔥` `+331%`
1. [小沈阳秒了 (Little Shenyang is seconds away)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E7%A7%92%E4%BA%86%23) `313.1K 🔥` `+56%`
1. [郭德纲文促会主席团会议发言](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%E6%96%87%E4%BF%83%E4%BC%9A%E4%B8%BB%E5%B8%AD%E5%9B%A2%E4%BC%9A%E8%AE%AE%E5%8F%91%E8%A8%80%23) `309.3K 🔥` `+66%`
1. [生活中如何分辨善妒的人](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%B4%BB%E4%B8%AD%E5%A6%82%E4%BD%95%E5%88%86%E8%BE%A8%E5%96%84%E5%A6%92%E7%9A%84%E4%BA%BA%23) `305.0K 🔥` `+29%`
1. [卫龙还算辣条公司吗](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E9%BE%99%E8%BF%98%E7%AE%97%E8%BE%A3%E6%9D%A1%E5%85%AC%E5%8F%B8%E5%90%97%23) `258.2K 🔥` `+108%`
1. [美国大模型帮日本对AI进行投毒 (American big model helps Japan poison AI)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%B8%AE%E6%97%A5%E6%9C%AC%E5%AF%B9AI%E8%BF%9B%E8%A1%8C%E6%8A%95%E6%AF%92%23) `257.6K 🔥` `+101%`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `256.6K 🔥` `+252%`
1. [李登科曝带朋友找张凌赫合照被拒](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E6%9B%9D%E5%B8%A6%E6%9C%8B%E5%8F%8B%E6%89%BE%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%88%E7%85%A7%E8%A2%AB%E6%8B%92%23) `256.1K 🔥` `+78%`
1. [刘耀文张真源发了20岁和21岁的严浩翔](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%8F%91%E4%BA%8620%E5%B2%81%E5%92%8C21%E5%B2%81%E7%9A%84%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `255.5K 🔥` `+80%`
1. [淑元回应](https://s.weibo.com/weibo?q=%23%E6%B7%91%E5%85%83%E5%9B%9E%E5%BA%94%23) `230.0K 🔥` `+66%`
1. [新乡胖东来搬走前VS搬走后 (Xinxiang Fat Donglai Before Moving VS After Moving)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B9%A1%E8%83%96%E4%B8%9C%E6%9D%A5%E6%90%AC%E8%B5%B0%E5%89%8DVS%E6%90%AC%E8%B5%B0%E5%90%8E%23) `211.8K 🔥` `+47%`
1. [披荆斩棘初舞台排名](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%88%9D%E8%88%9E%E5%8F%B0%E6%8E%92%E5%90%8D%23) `187.0K 🔥` `+81%`
1. [知识以很痛的方式进入了大脑 (Knowledge enters the brain in a painful way)](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E8%AF%86%E4%BB%A5%E5%BE%88%E7%97%9B%E7%9A%84%E6%96%B9%E5%BC%8F%E8%BF%9B%E5%85%A5%E4%BA%86%E5%A4%A7%E8%84%91%23) `143.0K 🔥` `+48%`
1. [日本人街头质疑南京大屠杀 (Japanese people question the Nanjing Massacre on the streets)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E8%A1%97%E5%A4%B4%E8%B4%A8%E7%96%91%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%23) `121.1K 🔥` `+42%`
1. [王传君和关谷神奇和解了 (Wang Chuanjun and Guan Gu reconciled miraculously)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%92%8C%E5%85%B3%E8%B0%B7%E7%A5%9E%E5%A5%87%E5%92%8C%E8%A7%A3%E4%BA%86%23) `116.4K 🔥` `+75%`
1. [山西挖眼案男孩高考721分选了中医学 (Shanxi eye-gouging case boy scored 721 in the college entrance examination and chose traditional Chinese medicine)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%8C%96%E7%9C%BC%E6%A1%88%E7%94%B7%E5%AD%A9%E9%AB%98%E8%80%83721%E5%88%86%E9%80%89%E4%BA%86%E4%B8%AD%E5%8C%BB%E5%AD%A6%23) `104.6K 🔥` `+40%`
1. [曹骏中国人会飞具象化 (Cao Jun, the Chinese can fly, embodied)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%BC%9A%E9%A3%9E%E5%85%B7%E8%B1%A1%E5%8C%96%23) `104.3K 🔥` `+35%`
1. [王橹杰导师选人环节没人选](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%AF%BC%E5%B8%88%E9%80%89%E4%BA%BA%E7%8E%AF%E8%8A%82%E6%B2%A1%E4%BA%BA%E9%80%89%23) `95.0K 🔥` `+30%`
1. [太干净的饭总有一种没吃的错觉 (Meals that are too clean always give the impression that they have not been eaten.)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B2%E5%87%80%E7%9A%84%E9%A5%AD%E6%80%BB%E6%9C%89%E4%B8%80%E7%A7%8D%E6%B2%A1%E5%90%83%E7%9A%84%E9%94%99%E8%A7%89%23) `153.4K 🔥`
1. [央视曝光网红面霜违规添加激素](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E7%BD%91%E7%BA%A2%E9%9D%A2%E9%9C%9C%E8%BF%9D%E8%A7%84%E6%B7%BB%E5%8A%A0%E6%BF%80%E7%B4%A0%23) `114.5K 🔥`
1. [陈熠0比4张本美和 (Chen Yi 0 to 4 Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%86%A00%E6%AF%944%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `297.5K 🔥` `-63%`
1. [鞠婧祎原谅现偶了 (Ju Jingyi forgives me now)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%E4%BA%86%23) `172.2K 🔥` `-26%`
1. [赵丽颖13个月没进组了 (Zhao Liying has not been in the group for 13 months)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%9613%E4%B8%AA%E6%9C%88%E6%B2%A1%E8%BF%9B%E7%BB%84%E4%BA%86%23) `94.8K 🔥` `-59%`

Updated at 2026-08-16 08:58:21

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
