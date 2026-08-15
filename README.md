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

1. [时代少年团 (Times Youth League)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%23) `100.7K 🔥` `NEW`
1. [奥德赛](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `92.1K 🔥` `NEW`
1. [淑元回应](https://s.weibo.com/weibo?q=%23%E6%B7%91%E5%85%83%E5%9B%9E%E5%BA%94%23) `91.9K 🔥` `NEW`
1. [宋亚轩](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%23) `91.8K 🔥` `NEW`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `91.7K 🔥` `NEW`
1. [欢天喜地七仙女选角让人笑哭 (The casting of Seven Fairies in Joy makes people laugh and cry)](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%A4%A9%E5%96%9C%E5%9C%B0%E4%B8%83%E4%BB%99%E5%A5%B3%E9%80%89%E8%A7%92%E8%AE%A9%E4%BA%BA%E7%AC%91%E5%93%AD%23) `1.2M 🔥` `+26%`
1. [网传追觅大家电解散 (According to the Internet, Zhui Mi major appliances are disbanded)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%BF%BD%E8%A7%85%E5%A4%A7%E5%AE%B6%E7%94%B5%E8%A7%A3%E6%95%A3%23) `720.3K 🔥` `+33%`
1. [以数智物流赋能特色产业发展 (Empowering the development of featured industries with digital and intelligent logistics)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%95%B0%E6%99%BA%E7%89%A9%E6%B5%81%E8%B5%8B%E8%83%BD%E7%89%B9%E8%89%B2%E4%BA%A7%E4%B8%9A%E5%8F%91%E5%B1%95%23) `543.7K 🔥` `+22%`
1. [曹骏披哥席位第一 (Cao Junpi's brother ranks first)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%8A%AB%E5%93%A5%E5%B8%AD%E4%BD%8D%E7%AC%AC%E4%B8%80%23) `192.6K 🔥` `+109%`
1. [汉奸石平参拜靖国神社](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A5%B8%E7%9F%B3%E5%B9%B3%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `190.1K 🔥` `+37%`
1. [卫龙还算辣条公司吗](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E9%BE%99%E8%BF%98%E7%AE%97%E8%BE%A3%E6%9D%A1%E5%85%AC%E5%8F%B8%E5%90%97%23) `139.0K 🔥` `+95%`
1. [网友建议旺旺开发无糖产品 (Netizens suggested that Want Want develop sugar-free products)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%BB%BA%E8%AE%AE%E6%97%BA%E6%97%BA%E5%BC%80%E5%8F%91%E6%97%A0%E7%B3%96%E4%BA%A7%E5%93%81%23) `107.1K 🔥` `+38%`
1. [曾辉 唱出了飞轮海的感觉 (Zeng Hui sang the feeling of Fahrenheit)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%20%E5%94%B1%E5%87%BA%E4%BA%86%E9%A3%9E%E8%BD%AE%E6%B5%B7%E7%9A%84%E6%84%9F%E8%A7%89%23) `105.5K 🔥` `+33%`
1. [刘耀文张真源发了20岁和21岁的严浩翔](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%8F%91%E4%BA%8620%E5%B2%81%E5%92%8C21%E5%B2%81%E7%9A%84%E4%B8%A5%E6%B5%A9%E7%BF%94%23) `104.9K 🔥` `+32%`
1. [新乡胖东来搬走前VS搬走后 (Xinxiang Fat Donglai Before Moving VS After Moving)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B9%A1%E8%83%96%E4%B8%9C%E6%9D%A5%E6%90%AC%E8%B5%B0%E5%89%8DVS%E6%90%AC%E8%B5%B0%E5%90%8E%23) `104.0K 🔥` `+29%`
1. [贺峻霖](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%23) `103.5K 🔥` `+40%`
1. [美国大模型帮日本对AI进行投毒 (American big model helps Japan poison AI)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%B8%AE%E6%97%A5%E6%9C%AC%E5%AF%B9AI%E8%BF%9B%E8%A1%8C%E6%8A%95%E6%AF%92%23) `101.9K 🔥` `+38%`
1. [日本人街头质疑南京大屠杀 (Japanese people question the Nanjing Massacre on the streets)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E8%A1%97%E5%A4%B4%E8%B4%A8%E7%96%91%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%23) `101.1K 🔥` `+112%`
1. [知识以很痛的方式进入了大脑 (Knowledge enters the brain in a painful way)](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E8%AF%86%E4%BB%A5%E5%BE%88%E7%97%9B%E7%9A%84%E6%96%B9%E5%BC%8F%E8%BF%9B%E5%85%A5%E4%BA%86%E5%A4%A7%E8%84%91%23) `92.0K 🔥` `+107%`
1. [曹骏中国人会飞具象化 (Cao Jun, the Chinese can fly, embodied)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%BC%9A%E9%A3%9E%E5%85%B7%E8%B1%A1%E5%8C%96%23) `92.0K 🔥` `+107%`
1. [央视曝光网红面霜违规添加激素](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E7%BD%91%E7%BA%A2%E9%9D%A2%E9%9C%9C%E8%BF%9D%E8%A7%84%E6%B7%BB%E5%8A%A0%E6%BF%80%E7%B4%A0%23) `92.0K 🔥` `+60%`
1. [唐艺昕说除了李小冉谁会说自己是顶流 (Tang Yixin said that except Li Xiaoran, who would say that she is a top-notch person?)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E8%AF%B4%E9%99%A4%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%E8%B0%81%E4%BC%9A%E8%AF%B4%E8%87%AA%E5%B7%B1%E6%98%AF%E9%A1%B6%E6%B5%81%23) `92.0K 🔥` `+97%`
1. [严浩翔的22岁](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9A%8422%E5%B2%81%23) `92.0K 🔥` `+49%`
1. [山西挖眼案男孩高考721分选了中医学 (Shanxi eye-gouging case boy scored 721 in the college entrance examination and chose traditional Chinese medicine)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%8C%96%E7%9C%BC%E6%A1%88%E7%94%B7%E5%AD%A9%E9%AB%98%E8%80%83721%E5%88%86%E9%80%89%E4%BA%86%E4%B8%AD%E5%8C%BB%E5%AD%A6%23) `92.0K 🔥` `+75%`
1. [被前夫杀害女子被家人劝说离婚后仍同居 (The woman who was killed by her ex-husband was persuaded by her family to divorce and still lived together.)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%89%8D%E5%A4%AB%E6%9D%80%E5%AE%B3%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%AE%B6%E4%BA%BA%E5%8A%9D%E8%AF%B4%E7%A6%BB%E5%A9%9A%E5%90%8E%E4%BB%8D%E5%90%8C%E5%B1%85%23) `91.9K 🔥` `+105%`
1. [看似吃个大鸡排其实就吃了个鸡蛋 (It looks like I'm eating a big chicken steak, but I'm actually eating an egg.)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%BC%BC%E5%90%83%E4%B8%AA%E5%A4%A7%E9%B8%A1%E6%8E%92%E5%85%B6%E5%AE%9E%E5%B0%B1%E5%90%83%E4%BA%86%E4%B8%AA%E9%B8%A1%E8%9B%8B%23) `91.9K 🔥` `+107%`
1. [王橹杰导师选人环节没人选](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%AF%BC%E5%B8%88%E9%80%89%E4%BA%BA%E7%8E%AF%E8%8A%82%E6%B2%A1%E4%BA%BA%E9%80%89%23) `91.9K 🔥` `+81%`
1. [Bin 回归 (Bin returns)](https://s.weibo.com/weibo?q=%23Bin%20%E5%9B%9E%E5%BD%92%23) `91.9K 🔥` `+38%`
1. [杜华好好谢谢齐思钧吧 (Du Hua, please thank Qi Sijun.)](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E5%A5%BD%E5%A5%BD%E8%B0%A2%E8%B0%A2%E9%BD%90%E6%80%9D%E9%92%A7%E5%90%A7%23) `91.8K 🔥` `+23%`
1. [如何找到自己的天赋](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E6%89%BE%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E5%A4%A9%E8%B5%8B%23) `91.8K 🔥` `+82%`
1. [旺旺感谢关注和支持 (Wangwang thanks you for your attention and support)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E6%84%9F%E8%B0%A2%E5%85%B3%E6%B3%A8%E5%92%8C%E6%94%AF%E6%8C%81%23) `91.8K 🔥` `+72%`
1. [日本民众冒雨游行抗议右翼政客拜鬼 (Japanese people march in the rain to protest against right-wing politicians worshiping ghosts)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B0%91%E4%BC%97%E5%86%92%E9%9B%A8%E6%B8%B8%E8%A1%8C%E6%8A%97%E8%AE%AE%E5%8F%B3%E7%BF%BC%E6%94%BF%E5%AE%A2%E6%8B%9C%E9%AC%BC%23) `91.8K 🔥` `+106%`
1. [C罗若离婚乔治娜每月将获10万欧元 (Georgina will receive 100,000 euros a month if Ronaldo divorces)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%8B%A5%E7%A6%BB%E5%A9%9A%E4%B9%94%E6%B2%BB%E5%A8%9C%E6%AF%8F%E6%9C%88%E5%B0%86%E8%8E%B710%E4%B8%87%E6%AC%A7%E5%85%83%23) `91.7K 🔥` `+106%`
1. [张睿危险 (Zhang Rui is dangerous)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E5%8D%B1%E9%99%A9%23) `91.7K 🔥` `+103%`
1. [虞书欣下腰 (Yu Shuxin lowered her waist)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%8B%E8%85%B0%23) `91.7K 🔥` `+106%`
1. [这和亲生的有什么区别 (What's the difference between this and a biological one?)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%92%8C%E4%BA%B2%E7%94%9F%E7%9A%84%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%23) `91.6K 🔥` `+106%`
1. [王俊凯听到粉丝表白的反应 (Wang Junkai’s reaction when he heard fans’ confession)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%90%AC%E5%88%B0%E7%B2%89%E4%B8%9D%E8%A1%A8%E7%99%BD%E7%9A%84%E5%8F%8D%E5%BA%94%23) `91.6K 🔥` `+106%`
1. [张睿 中国内地郭富城](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%20%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E9%83%AD%E5%AF%8C%E5%9F%8E%23) `91.6K 🔥` `+106%`
1. [获千万打赏女主播涉诈骗被公诉 (Female anchor who received tens of millions of dollars in rewards was prosecuted for fraud)](https://s.weibo.com/weibo?q=%23%E8%8E%B7%E5%8D%83%E4%B8%87%E6%89%93%E8%B5%8F%E5%A5%B3%E4%B8%BB%E6%92%AD%E6%B6%89%E8%AF%88%E9%AA%97%E8%A2%AB%E5%85%AC%E8%AF%89%23) `91.6K 🔥` `+106%`
1. [阿云嘎 夯 (Ayunga ram)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BA%91%E5%98%8E%20%E5%A4%AF%23) `91.6K 🔥` `+108%`
1. [特朗普发AI视频带华盛顿游白宫 (Trump sends AI video to take Washington on a tour of the White House)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91AI%E8%A7%86%E9%A2%91%E5%B8%A6%E5%8D%8E%E7%9B%9B%E9%A1%BF%E6%B8%B8%E7%99%BD%E5%AE%AB%23) `91.5K 🔥` `+106%`
1. [张本智和晋级瑞典大满贯4强](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E6%99%8B%E7%BA%A7%E7%91%9E%E5%85%B8%E5%A4%A7%E6%BB%A1%E8%B4%AF4%E5%BC%BA%23) `91.5K 🔥` `+106%`
1. [王传君终于原谅爱情公寓了 (Wang Chuanjun finally forgives iPartment)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%BA%86%23) `385.1K 🔥`
1. [生活中如何分辨善妒的人](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%B4%BB%E4%B8%AD%E5%A6%82%E4%BD%95%E5%88%86%E8%BE%A8%E5%96%84%E5%A6%92%E7%9A%84%E4%BA%BA%23) `194.3K 🔥`
1. [披荆斩棘初舞台排名](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%88%9D%E8%88%9E%E5%8F%B0%E6%8E%92%E5%90%8D%23) `125.4K 🔥`
1. [太干净的饭总有一种没吃的错觉 (Meals that are too clean always give the impression that they have not been eaten.)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B2%E5%87%80%E7%9A%84%E9%A5%AD%E6%80%BB%E6%9C%89%E4%B8%80%E7%A7%8D%E6%B2%A1%E5%90%83%E7%9A%84%E9%94%99%E8%A7%89%23) `109.0K 🔥`
1. [郭德纲文促会主席团会议发言](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%E6%96%87%E4%BF%83%E4%BC%9A%E4%B8%BB%E5%B8%AD%E5%9B%A2%E4%BC%9A%E8%AE%AE%E5%8F%91%E8%A8%80%23) `108.2K 🔥`
1. [小沈阳秒了 (Little Shenyang is seconds away)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E7%A7%92%E4%BA%86%23) `107.7K 🔥` `-42%`
1. [直观看见了女儿奴的诞生 (Directly saw the birth of my daughter-slave)](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E8%A7%82%E7%9C%8B%E8%A7%81%E4%BA%86%E5%A5%B3%E5%84%BF%E5%A5%B4%E7%9A%84%E8%AF%9E%E7%94%9F%23) `91.7K 🔥` `-52%`

Updated at 2026-08-16 07:33:46

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
