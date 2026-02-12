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

1. [坏果太多胖东来下架全部智利车厘子 (There are too many bad fruits. Fat Donglai has removed all Chilean cherries from the shelves.)](https://s.weibo.com/weibo?q=%23%E5%9D%8F%E6%9E%9C%E5%A4%AA%E5%A4%9A%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B8%8B%E6%9E%B6%E5%85%A8%E9%83%A8%E6%99%BA%E5%88%A9%E8%BD%A6%E5%8E%98%E5%AD%90%23) `1.1M 🔥` `NEW`
1. [我家的C位年货](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E7%9A%84C%E4%BD%8D%E5%B9%B4%E8%B4%A7%23) `632.6K 🔥` `NEW`
1. [今年为啥没有年三十](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E4%B8%BA%E5%95%A5%E6%B2%A1%E6%9C%89%E5%B9%B4%E4%B8%89%E5%8D%81%23) `501.8K 🔥` `NEW`
1. [爸爸被劝酒女儿站身后霸气挡酒](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E8%A2%AB%E5%8A%9D%E9%85%92%E5%A5%B3%E5%84%BF%E7%AB%99%E8%BA%AB%E5%90%8E%E9%9C%B8%E6%B0%94%E6%8C%A1%E9%85%92%23) `372.4K 🔥` `NEW`
1. [熊猫计划好萌友直播送祝福](https://s.weibo.com/weibo?q=%23%E7%86%8A%E7%8C%AB%E8%AE%A1%E5%88%92%E5%A5%BD%E8%90%8C%E5%8F%8B%E7%9B%B4%E6%92%AD%E9%80%81%E7%A5%9D%E7%A6%8F%23) `285.1K 🔥` `NEW`
1. [生命树集体沉默的60秒](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E9%9B%86%E4%BD%93%E6%B2%89%E9%BB%98%E7%9A%8460%E7%A7%92%23) `162.9K 🔥` `NEW`
1. [蔡徐坤回复无畏](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E5%9B%9E%E5%A4%8D%E6%97%A0%E7%95%8F%23) `159.0K 🔥` `NEW`
1. [生命树今晚自爆两狼](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E4%BB%8A%E6%99%9A%E8%87%AA%E7%88%86%E4%B8%A4%E7%8B%BC%23) `157.9K 🔥` `NEW`
1. [36岁何穗状态](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E4%BD%95%E7%A9%97%E7%8A%B6%E6%80%81%23) `156.2K 🔥` `NEW`
1. [宋亚轩 没有任何击杀但是MVP](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95%E5%87%BB%E6%9D%80%E4%BD%86%E6%98%AFMVP%23) `154.2K 🔥` `NEW`
1. [吃烤全羊发现大量粪便店家赔偿1500 (After eating a roasted whole lamb and finding a lot of feces, the store compensated me 1,500)](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%83%A4%E5%85%A8%E7%BE%8A%E5%8F%91%E7%8E%B0%E5%A4%A7%E9%87%8F%E7%B2%AA%E4%BE%BF%E5%BA%97%E5%AE%B6%E8%B5%94%E5%81%BF1500%23) `153.2K 🔥` `NEW`
1. [杨幂白色高筒袜](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%99%BD%E8%89%B2%E9%AB%98%E7%AD%92%E8%A2%9C%23) `143.3K 🔥` `NEW`
1. [叫爷爷没反应孙子下意识反应太可爱](https://s.weibo.com/weibo?q=%23%E5%8F%AB%E7%88%B7%E7%88%B7%E6%B2%A1%E5%8F%8D%E5%BA%94%E5%AD%99%E5%AD%90%E4%B8%8B%E6%84%8F%E8%AF%86%E5%8F%8D%E5%BA%94%E5%A4%AA%E5%8F%AF%E7%88%B1%23) `118.6K 🔥` `NEW`
1. [左航嗓子哑了](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E5%97%93%E5%AD%90%E5%93%91%E4%BA%86%23) `115.6K 🔥` `NEW`
1. [影石CEO回应年会送房](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E7%9F%B3CEO%E5%9B%9E%E5%BA%94%E5%B9%B4%E4%BC%9A%E9%80%81%E6%88%BF%23) `96.7K 🔥` `NEW`
1. [迪丽热巴棉花娃娃都会跳舞了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%A3%89%E8%8A%B1%E5%A8%83%E5%A8%83%E9%83%BD%E4%BC%9A%E8%B7%B3%E8%88%9E%E4%BA%86%23) `91.7K 🔥` `NEW`
1. [肥猫郑则仕减重70斤感谢周润发](https://s.weibo.com/weibo?q=%23%E8%82%A5%E7%8C%AB%E9%83%91%E5%88%99%E4%BB%95%E5%87%8F%E9%87%8D70%E6%96%A4%E6%84%9F%E8%B0%A2%E5%91%A8%E6%B6%A6%E5%8F%91%23) `83.8K 🔥` `NEW`
1. [Selina说二胎顺其自然](https://s.weibo.com/weibo?q=%23Selina%E8%AF%B4%E4%BA%8C%E8%83%8E%E9%A1%BA%E5%85%B6%E8%87%AA%E7%84%B6%23) `76.9K 🔥` `NEW`
1. [俱乐部称已与樊振东沟通过续约](https://s.weibo.com/weibo?q=%23%E4%BF%B1%E4%B9%90%E9%83%A8%E7%A7%B0%E5%B7%B2%E4%B8%8E%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%B2%9F%E9%80%9A%E8%BF%87%E7%BB%AD%E7%BA%A6%23) `76.7K 🔥` `NEW`
1. [成龙也想下海了](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%BE%99%E4%B9%9F%E6%83%B3%E4%B8%8B%E6%B5%B7%E4%BA%86%23) `76.6K 🔥` `NEW`
1. [倒模自己的耳朵当手机壳 (Mold your own ears to use as phone cases)](https://s.weibo.com/weibo?q=%23%E5%80%92%E6%A8%A1%E8%87%AA%E5%B7%B1%E7%9A%84%E8%80%B3%E6%9C%B5%E5%BD%93%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `76.6K 🔥` `NEW`
1. [54岁农民工提塑料桶和行李返乡过年](https://s.weibo.com/weibo?q=%2354%E5%B2%81%E5%86%9C%E6%B0%91%E5%B7%A5%E6%8F%90%E5%A1%91%E6%96%99%E6%A1%B6%E5%92%8C%E8%A1%8C%E6%9D%8E%E8%BF%94%E4%B9%A1%E8%BF%87%E5%B9%B4%23) `75.7K 🔥` `NEW`
1. [Seedance2.0邀请码一码难求](https://s.weibo.com/weibo?q=%23Seedance2.0%E9%82%80%E8%AF%B7%E7%A0%81%E4%B8%80%E7%A0%81%E9%9A%BE%E6%B1%82%23) `70.9K 🔥` `NEW`
1. [微博之夜 绝美打光](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%20%E7%BB%9D%E7%BE%8E%E6%89%93%E5%85%89%23) `70.2K 🔥` `NEW`
1. [张极攀冰](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9E%81%E6%94%80%E5%86%B0%23) `69.4K 🔥` `NEW`
1. [桃黑黑语音包](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E8%AF%AD%E9%9F%B3%E5%8C%85%23) `69.3K 🔥` `NEW`
1. [吉林省将进行中考改革](https://s.weibo.com/weibo?q=%23%E5%90%89%E6%9E%97%E7%9C%81%E5%B0%86%E8%BF%9B%E8%A1%8C%E4%B8%AD%E8%80%83%E6%94%B9%E9%9D%A9%23) `69.3K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `801.8K 🔥` `+299%`
1. [上淘宝春节不打烊年货小时达 (Go to Taobao and don’t close during the Spring Festival. New Year’s goods are available within hours.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D%E6%98%A5%E8%8A%82%E4%B8%8D%E6%89%93%E7%83%8A%E5%B9%B4%E8%B4%A7%E5%B0%8F%E6%97%B6%E8%BE%BE%23) `605.1K 🔥`
1. [第一次看到一箱草莓毫无食欲](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%88%B0%E4%B8%80%E7%AE%B1%E8%8D%89%E8%8E%93%E6%AF%AB%E6%97%A0%E9%A3%9F%E6%AC%B2%23) `304.4K 🔥`
1. [张馨予 你很有钱是吗 (Zhang Xinyu, are you very rich?)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%20%E4%BD%A0%E5%BE%88%E6%9C%89%E9%92%B1%E6%98%AF%E5%90%97%23) `162.0K 🔥`
1. [王者荣耀马年全明星表演赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E9%A9%AC%E5%B9%B4%E5%85%A8%E6%98%8E%E6%98%9F%E8%A1%A8%E6%BC%94%E8%B5%9B%23) `161.2K 🔥`
1. [庾晚音 北京是个小县城 (Yu Wanyin Beijing is a small county town)](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%99%9A%E9%9F%B3%20%E5%8C%97%E4%BA%AC%E6%98%AF%E4%B8%AA%E5%B0%8F%E5%8E%BF%E5%9F%8E%23) `159.9K 🔥`
1. [母亲花6万为智力残障儿子娶外籍妻子](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%B16%E4%B8%87%E4%B8%BA%E6%99%BA%E5%8A%9B%E6%AE%8B%E9%9A%9C%E5%84%BF%E5%AD%90%E5%A8%B6%E5%A4%96%E7%B1%8D%E5%A6%BB%E5%AD%90%23) `157.7K 🔥`
1. [蒋欣 当年真的错怪你了 (Jiang Xin, I really blamed you wrongly back then)](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%20%E5%BD%93%E5%B9%B4%E7%9C%9F%E7%9A%84%E9%94%99%E6%80%AA%E4%BD%A0%E4%BA%86%23) `156.0K 🔥`
1. [男子就医喊饿竟是全身血液已近流干 (A man went to the doctor and complained that he was hungry, but it turned out that the blood in his body was almost dry)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%B1%E5%8C%BB%E5%96%8A%E9%A5%BF%E7%AB%9F%E6%98%AF%E5%85%A8%E8%BA%AB%E8%A1%80%E6%B6%B2%E5%B7%B2%E8%BF%91%E6%B5%81%E5%B9%B2%23) `152.2K 🔥`
1. [曝陈哲远每年让员工带薪出国旅游](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%99%88%E5%93%B2%E8%BF%9C%E6%AF%8F%E5%B9%B4%E8%AE%A9%E5%91%98%E5%B7%A5%E5%B8%A6%E8%96%AA%E5%87%BA%E5%9B%BD%E6%97%85%E6%B8%B8%23) `100.8K 🔥`
1. [谷爱凌不是输给第一名的第二名](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E4%B8%8D%E6%98%AF%E8%BE%93%E7%BB%99%E7%AC%AC%E4%B8%80%E5%90%8D%E7%9A%84%E7%AC%AC%E4%BA%8C%E5%90%8D%23) `190.8K 🔥` `-74%`
1. [车厘子卖家赌涨价压货](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%8E%98%E5%AD%90%E5%8D%96%E5%AE%B6%E8%B5%8C%E6%B6%A8%E4%BB%B7%E5%8E%8B%E8%B4%A7%23) `163.2K 🔥` `-85%`
1. [纸质文件 (Paper documents)](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E8%B4%A8%E6%96%87%E4%BB%B6%23) `163.1K 🔥` `-50%`
1. [第一批回村的人已经出片了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E5%9B%9E%E6%9D%91%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%87%BA%E7%89%87%E4%BA%86%23) `154.9K 🔥` `-21%`
1. [张凌赫粉丝爬半天山拍了三遍林允 (Fans of Zhang Linghe climbed Half-Tian Mountain to take photos of Lin Yun three times)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%B2%89%E4%B8%9D%E7%88%AC%E5%8D%8A%E5%A4%A9%E5%B1%B1%E6%8B%8D%E4%BA%86%E4%B8%89%E9%81%8D%E6%9E%97%E5%85%81%23) `151.7K 🔥` `-22%`
1. [姐姐被藏尸位置就在弟弟店铺正上方 (The location where my sister’s body was buried is right above my brother’s shop.)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%A2%AB%E8%97%8F%E5%B0%B8%E4%BD%8D%E7%BD%AE%E5%B0%B1%E5%9C%A8%E5%BC%9F%E5%BC%9F%E5%BA%97%E9%93%BA%E6%AD%A3%E4%B8%8A%E6%96%B9%23) `149.7K 🔥` `-24%`
1. [年少有为](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA%23) `147.1K 🔥` `-25%`
1. [杨幂校花学姐](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%A0%A1%E8%8A%B1%E5%AD%A6%E5%A7%90%23) `95.7K 🔥` `-51%`
1. [男子性侵前妻闺蜜被判10年8个月](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E5%89%8D%E5%A6%BB%E9%97%BA%E8%9C%9C%E8%A2%AB%E5%88%A410%E5%B9%B48%E4%B8%AA%E6%9C%88%23) `92.6K 🔥` `-53%`
1. [30岁男子没买车父母不愿出门拜年](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E7%94%B7%E5%AD%90%E6%B2%A1%E4%B9%B0%E8%BD%A6%E7%88%B6%E6%AF%8D%E4%B8%8D%E6%84%BF%E5%87%BA%E9%97%A8%E6%8B%9C%E5%B9%B4%23) `86.9K 🔥` `-56%`
1. [曝惊蛰无声发行方强制影院排片 (Revealed that Jingzhe Silent Distributor forced theaters to schedule movies)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E5%8F%91%E8%A1%8C%E6%96%B9%E5%BC%BA%E5%88%B6%E5%BD%B1%E9%99%A2%E6%8E%92%E7%89%87%23) `79.7K 🔥` `-22%`
1. [孙颖莎头像挂件换成了皇冠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%B4%E5%83%8F%E6%8C%82%E4%BB%B6%E6%8D%A2%E6%88%90%E4%BA%86%E7%9A%87%E5%86%A0%23) `77.1K 🔥` `-25%`
1. [时代少年团跳大绳](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%B7%B3%E5%A4%A7%E7%BB%B3%23) `73.5K 🔥` `-49%`
1. [小伙3万彩礼3万首饰娶埃及姑娘](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%993%E4%B8%87%E5%BD%A9%E7%A4%BC3%E4%B8%87%E9%A6%96%E9%A5%B0%E5%A8%B6%E5%9F%83%E5%8F%8A%E5%A7%91%E5%A8%98%23) `71.9K 🔥` `-63%`

Updated at 2026-02-12 21:39:21

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
