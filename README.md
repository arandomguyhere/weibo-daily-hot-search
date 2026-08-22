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

1. [稚楚美到我了 (Childish and beautiful to me)](https://s.weibo.com/weibo?q=%23%E7%A8%9A%E6%A5%9A%E7%BE%8E%E5%88%B0%E6%88%91%E4%BA%86%23) `709.5K 🔥` `NEW`
1. [张凌赫周也无畏契约直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%91%A8%E4%B9%9F%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E7%9B%B4%E6%92%AD%23) `291.6K 🔥` `NEW`
1. [刘宇宁杨超越体型差](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%BD%93%E5%9E%8B%E5%B7%AE%23) `287.7K 🔥` `NEW`
1. [TF五代一公](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E4%B8%80%E5%85%AC%23) `259.6K 🔥` `NEW`
1. [马斯克回应癌症疫苗](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%9B%9E%E5%BA%94%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%23) `250.2K 🔥` `NEW`
1. [晋江作者大会淮上](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%E6%B7%AE%E4%B8%8A%23) `223.8K 🔥` `NEW`
1. [云南 二手烟](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%20%E4%BA%8C%E6%89%8B%E7%83%9F%23) `196.3K 🔥` `NEW`
1. [白血病不再是不治之症](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%A1%80%E7%97%85%E4%B8%8D%E5%86%8D%E6%98%AF%E4%B8%8D%E6%B2%BB%E4%B9%8B%E7%97%87%23) `195.9K 🔥` `NEW`
1. [王玉雯一句话把刘宇宁整不会了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%B8%80%E5%8F%A5%E8%AF%9D%E6%8A%8A%E5%88%98%E5%AE%87%E5%AE%81%E6%95%B4%E4%B8%8D%E4%BC%9A%E4%BA%86%23) `155.5K 🔥` `NEW`
1. [李在明称清算亲日派后代](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E7%A7%B0%E6%B8%85%E7%AE%97%E4%BA%B2%E6%97%A5%E6%B4%BE%E5%90%8E%E4%BB%A3%23) `147.3K 🔥` `NEW`
1. [戒网瘾学校为何屡禁不止 (Why do schools for curing Internet addiction keep repeating bans?)](https://s.weibo.com/weibo?q=%23%E6%88%92%E7%BD%91%E7%98%BE%E5%AD%A6%E6%A0%A1%E4%B8%BA%E4%BD%95%E5%B1%A1%E7%A6%81%E4%B8%8D%E6%AD%A2%23) `136.1K 🔥` `NEW`
1. [张凌赫瓦男神](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%93%A6%E7%94%B7%E7%A5%9E%23) `134.9K 🔥` `NEW`
1. [陈俊生给平儿看的课外书是Excel](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E7%94%9F%E7%BB%99%E5%B9%B3%E5%84%BF%E7%9C%8B%E7%9A%84%E8%AF%BE%E5%A4%96%E4%B9%A6%E6%98%AFExcel%23) `130.6K 🔥` `NEW`
1. [妻子工亡获赔108万丈夫拒分岳父母](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%B7%A5%E4%BA%A1%E8%8E%B7%E8%B5%94108%E4%B8%87%E4%B8%88%E5%A4%AB%E6%8B%92%E5%88%86%E5%B2%B3%E7%88%B6%E6%AF%8D%23) `129.1K 🔥` `NEW`
1. [青海祁连县道歉](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B7%E7%A5%81%E8%BF%9E%E5%8E%BF%E9%81%93%E6%AD%89%23) `116.4K 🔥` `NEW`
1. [第一次见辛芷蕾气血不足的样子](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E8%BE%9B%E8%8A%B7%E8%95%BE%E6%B0%94%E8%A1%80%E4%B8%8D%E8%B6%B3%E7%9A%84%E6%A0%B7%E5%AD%90%23) `114.9K 🔥` `NEW`
1. [粉丝曾多次告知时代峰峻图标有风险](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E6%9B%BE%E5%A4%9A%E6%AC%A1%E5%91%8A%E7%9F%A5%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9B%BE%E6%A0%87%E6%9C%89%E9%A3%8E%E9%99%A9%23) `113.0K 🔥` `NEW`
1. [新疆偶遇曾舜晞王祖一梁永棋](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E5%81%B6%E9%81%87%E6%9B%BE%E8%88%9C%E6%99%9E%E7%8E%8B%E7%A5%96%E4%B8%80%E6%A2%81%E6%B0%B8%E6%A3%8B%23) `107.5K 🔥` `NEW`
1. [一斤鸭脖能买一斤牛肉一斤排骨](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%96%A4%E9%B8%AD%E8%84%96%E8%83%BD%E4%B9%B0%E4%B8%80%E6%96%A4%E7%89%9B%E8%82%89%E4%B8%80%E6%96%A4%E6%8E%92%E9%AA%A8%23) `852.1K 🔥` `+81%`
1. [巫哲好帅 (Wu Zhe is so handsome)](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E5%A5%BD%E5%B8%85%23) `732.9K 🔥` `+117%`
1. [晋江作者大会](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%23) `728.7K 🔥` `+308%`
1. [电影大唐妖探今日上映 (The movie "The Demon Detective of the Tang Dynasty" is released today)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%A4%A7%E5%94%90%E5%A6%96%E6%8E%A2%E4%BB%8A%E6%97%A5%E4%B8%8A%E6%98%A0%23) `698.0K 🔥` `+46%`
1. [黑灯连发三条怼梁源 (Black Lantern sends out three messages in succession to attack Liang Yuan)](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%81%AF%E8%BF%9E%E5%8F%91%E4%B8%89%E6%9D%A1%E6%80%BC%E6%A2%81%E6%BA%90%23) `478.5K 🔥` `+76%`
1. [居家办公都发展成这样了 (Home working has developed into this)](https://s.weibo.com/weibo?q=%23%E5%B1%85%E5%AE%B6%E5%8A%9E%E5%85%AC%E9%83%BD%E5%8F%91%E5%B1%95%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `393.8K 🔥` `+35%`
1. [小鹿老公连人工授精都做不了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%E8%80%81%E5%85%AC%E8%BF%9E%E4%BA%BA%E5%B7%A5%E6%8E%88%E7%B2%BE%E9%83%BD%E5%81%9A%E4%B8%8D%E4%BA%86%23) `348.3K 🔥` `+214%`
1. [付费占座行不行总算说明白了 (It’s finally clear whether it’s okay to pay for a seat)](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%B4%B9%E5%8D%A0%E5%BA%A7%E8%A1%8C%E4%B8%8D%E8%A1%8C%E6%80%BB%E7%AE%97%E8%AF%B4%E6%98%8E%E7%99%BD%E4%BA%86%23) `282.9K 🔥` `+29%`
1. [王楚然中不溜时期](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%AD%E4%B8%8D%E6%BA%9C%E6%97%B6%E6%9C%9F%23) `196.1K 🔥` `+23%`
1. [1个视频看懂公积金提取新规 (1 video to understand the new rules for withdrawing provident funds)](https://s.weibo.com/weibo?q=%231%E4%B8%AA%E8%A7%86%E9%A2%91%E7%9C%8B%E6%87%82%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96%E6%96%B0%E8%A7%84%23) `741.7K 🔥`
1. [李宇春CHOUCHOU名创优品潮流合作 (Li Yuchun CHOUCHOU MINISO fashion cooperation)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5CHOUCHOU%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E6%BD%AE%E6%B5%81%E5%90%88%E4%BD%9C%23) `739.6K 🔥`
1. [陈伟霆十年了还没释怀人贩子梗 (William Chan still hasn’t let go of the human trafficker plot after ten years)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E5%8D%81%E5%B9%B4%E4%BA%86%E8%BF%98%E6%B2%A1%E9%87%8A%E6%80%80%E4%BA%BA%E8%B4%A9%E5%AD%90%E6%A2%97%23) `290.0K 🔥`
1. [欢子 退赛](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%20%E9%80%80%E8%B5%9B%23) `282.8K 🔥`
1. [董璇让粉丝不要总是给小酒窝买盲盒了 (Dong Xuan asks fans not to always buy blind boxes for Xiaodimple)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E8%AE%A9%E7%B2%89%E4%B8%9D%E4%B8%8D%E8%A6%81%E6%80%BB%E6%98%AF%E7%BB%99%E5%B0%8F%E9%85%92%E7%AA%9D%E4%B9%B0%E7%9B%B2%E7%9B%92%E4%BA%86%23) `236.8K 🔥`
1. [外国网友怀疑中国农村是AI (Foreign netizens suspect that China’s rural areas are caused by AI)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%80%80%E7%96%91%E4%B8%AD%E5%9B%BD%E5%86%9C%E6%9D%91%E6%98%AFAI%23) `201.7K 🔥`
1. [父子因iPhone争执坠崖母亲也跳下](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%AD%90%E5%9B%A0iPhone%E4%BA%89%E6%89%A7%E5%9D%A0%E5%B4%96%E6%AF%8D%E4%BA%B2%E4%B9%9F%E8%B7%B3%E4%B8%8B%23) `196.3K 🔥`
1. [我对生理期的态度belike (My attitude towards menstrual periods belike)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AF%B9%E7%94%9F%E7%90%86%E6%9C%9F%E7%9A%84%E6%80%81%E5%BA%A6belike%23) `196.0K 🔥`
1. [陈柏霖当庭认罪 (Chen Bolin pleads guilty in court)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%9F%8F%E9%9C%96%E5%BD%93%E5%BA%AD%E8%AE%A4%E7%BD%AA%23) `191.5K 🔥`
1. [秦彻 临界点](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%BD%BB%20%E4%B8%B4%E7%95%8C%E7%82%B9%23) `162.8K 🔥`
1. [大妈骑车戴三级头震惊辅警 (The aunt wearing a three-level headgear while riding a bicycle shocked the auxiliary police)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A6%88%E9%AA%91%E8%BD%A6%E6%88%B4%E4%B8%89%E7%BA%A7%E5%A4%B4%E9%9C%87%E6%83%8A%E8%BE%85%E8%AD%A6%23) `162.3K 🔥`
1. [2026年亚运会](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `150.9K 🔥`
1. [内娱终于放过甄嬛传了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%BB%88%E4%BA%8E%E6%94%BE%E8%BF%87%E7%94%84%E5%AC%9B%E4%BC%A0%E4%BA%86%23) `128.5K 🔥`
1. [6旬母亲焦虑催婚被2儿子拉黑](https://s.weibo.com/weibo?q=%236%E6%97%AC%E6%AF%8D%E4%BA%B2%E7%84%A6%E8%99%91%E5%82%AC%E5%A9%9A%E8%A2%AB2%E5%84%BF%E5%AD%90%E6%8B%89%E9%BB%91%23) `108.8K 🔥`
1. [55元捡漏1.41万项链女子获5元补偿](https://s.weibo.com/weibo?q=%2355%E5%85%83%E6%8D%A1%E6%BC%8F1.41%E4%B8%87%E9%A1%B9%E9%93%BE%E5%A5%B3%E5%AD%90%E8%8E%B75%E5%85%83%E8%A1%A5%E5%81%BF%23) `1.2M 🔥` `-25%`
1. [那英酒红露背裙 (Naying wine red backless skirt)](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E9%85%92%E7%BA%A2%E9%9C%B2%E8%83%8C%E8%A3%99%23) `196.2K 🔥` `-22%`
1. [第一次见外国人出来打假北欧硬面包 (This is the first time I see foreigners cracking down on counterfeit Nordic hard bread.)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%A4%96%E5%9B%BD%E4%BA%BA%E5%87%BA%E6%9D%A5%E6%89%93%E5%81%87%E5%8C%97%E6%AC%A7%E7%A1%AC%E9%9D%A2%E5%8C%85%23) `179.7K 🔥` `-33%`
1. [猥亵骑马游客的教练已离岗](https://s.weibo.com/weibo?q=%23%E7%8C%A5%E4%BA%B5%E9%AA%91%E9%A9%AC%E6%B8%B8%E5%AE%A2%E7%9A%84%E6%95%99%E7%BB%83%E5%B7%B2%E7%A6%BB%E5%B2%97%23) `162.3K 🔥` `-41%`
1. [Angelababy民族服饰变装太绝了](https://s.weibo.com/weibo?q=%23Angelababy%E6%B0%91%E6%97%8F%E6%9C%8D%E9%A5%B0%E5%8F%98%E8%A3%85%E5%A4%AA%E7%BB%9D%E4%BA%86%23) `162.2K 🔥` `-31%`
1. [女星穿香奈儿无底鞋脚掌变黑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%9F%E7%A9%BF%E9%A6%99%E5%A5%88%E5%84%BF%E6%97%A0%E5%BA%95%E9%9E%8B%E8%84%9A%E6%8E%8C%E5%8F%98%E9%BB%91%23) `153.2K 🔥` `-43%`
1. [曝谍报上不封顶补拍20天](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B0%8D%E6%8A%A5%E4%B8%8A%E4%B8%8D%E5%B0%81%E9%A1%B6%E8%A1%A5%E6%8B%8D20%E5%A4%A9%23) `149.1K 🔥` `-51%`
1. [曾辉手机壳是跟韩雨彤的合照](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%98%AF%E8%B7%9F%E9%9F%A9%E9%9B%A8%E5%BD%A4%E7%9A%84%E5%90%88%E7%85%A7%23) `146.5K 🔥` `-40%`
1. [癌症疫苗 (cancer vaccine)](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%23) `137.6K 🔥` `-42%`
1. [早春晴朗1分钟亲了13次 (Kissed 13 times in 1 minute on a sunny day in early spring)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%971%E5%88%86%E9%92%9F%E4%BA%B2%E4%BA%8613%E6%AC%A1%23) `124.4K 🔥` `-30%`
1. [印度少年为要手机致一家三口坠崖](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%B0%91%E5%B9%B4%E4%B8%BA%E8%A6%81%E6%89%8B%E6%9C%BA%E8%87%B4%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%9D%A0%E5%B4%96%23) `105.9K 🔥` `-37%`

Updated at 2026-08-22 14:54:58

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
