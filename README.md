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

1. [男子花5600元套中汽车使用权商家反悔 (Man spent 5,600 yuan to get the right to use the car, but the merchant regretted it)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%8A%B15600%E5%85%83%E5%A5%97%E4%B8%AD%E6%B1%BD%E8%BD%A6%E4%BD%BF%E7%94%A8%E6%9D%83%E5%95%86%E5%AE%B6%E5%8F%8D%E6%82%94%23) `1.1M 🔥` `NEW`
1. [你的返程藏着他们满眼的不舍](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E8%BF%94%E7%A8%8B%E8%97%8F%E7%9D%80%E4%BB%96%E4%BB%AC%E6%BB%A1%E7%9C%BC%E7%9A%84%E4%B8%8D%E8%88%8D%23) `614.3K 🔥` `NEW`
1. [贾乃亮看黄景瑜新剧看哭了](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE%E7%9C%8B%E9%BB%84%E6%99%AF%E7%91%9C%E6%96%B0%E5%89%A7%E7%9C%8B%E5%93%AD%E4%BA%86%23) `220.3K 🔥` `NEW`
1. [大冰 谢谢您替我和小姑娘背负厄运](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%20%E8%B0%A2%E8%B0%A2%E6%82%A8%E6%9B%BF%E6%88%91%E5%92%8C%E5%B0%8F%E5%A7%91%E5%A8%98%E8%83%8C%E8%B4%9F%E5%8E%84%E8%BF%90%23) `214.3K 🔥` `NEW`
1. [墨西哥毒枭几乎没有近照流出](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E6%AF%92%E6%9E%AD%E5%87%A0%E4%B9%8E%E6%B2%A1%E6%9C%89%E8%BF%91%E7%85%A7%E6%B5%81%E5%87%BA%23) `125.1K 🔥` `NEW`
1. [马嘉祺高会更新](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E9%AB%98%E4%BC%9A%E6%9B%B4%E6%96%B0%23) `103.8K 🔥` `NEW`
1. [猫11.8斤等于人200斤](https://s.weibo.com/weibo?q=%23%E7%8C%AB11.8%E6%96%A4%E7%AD%89%E4%BA%8E%E4%BA%BA200%E6%96%A4%23) `103.6K 🔥` `NEW`
1. [青2陈品瑄自曝曾被性骚扰](https://s.weibo.com/weibo?q=%23%E9%9D%922%E9%99%88%E5%93%81%E7%91%84%E8%87%AA%E6%9B%9D%E6%9B%BE%E8%A2%AB%E6%80%A7%E9%AA%9A%E6%89%B0%23) `96.1K 🔥` `NEW`
1. [西安雪片大如硬币](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E9%9B%AA%E7%89%87%E5%A4%A7%E5%A6%82%E7%A1%AC%E5%B8%81%23) `84.3K 🔥` `NEW`
1. [第一批年轻人年后离家实录](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%B9%B4%E5%90%8E%E7%A6%BB%E5%AE%B6%E5%AE%9E%E5%BD%95%23) `78.5K 🔥` `NEW`
1. [不敢想象老板多重视这位员工 (I can’t imagine how much the boss values ​​this employee.)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%95%A2%E6%83%B3%E8%B1%A1%E8%80%81%E6%9D%BF%E5%A4%9A%E9%87%8D%E8%A7%86%E8%BF%99%E4%BD%8D%E5%91%98%E5%B7%A5%23) `75.7K 🔥` `NEW`
1. [不要和同事聊假期](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%92%8C%E5%90%8C%E4%BA%8B%E8%81%8A%E5%81%87%E6%9C%9F%23) `74.4K 🔥` `NEW`
1. [如果你发现跟一个人聊天很舒服](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E4%BD%A0%E5%8F%91%E7%8E%B0%E8%B7%9F%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%81%8A%E5%A4%A9%E5%BE%88%E8%88%92%E6%9C%8D%23) `68.6K 🔥` `NEW`
1. [这和九重紫的叶祖新两模两样](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%92%8C%E4%B9%9D%E9%87%8D%E7%B4%AB%E7%9A%84%E5%8F%B6%E7%A5%96%E6%96%B0%E4%B8%A4%E6%A8%A1%E4%B8%A4%E6%A0%B7%23) `68.5K 🔥` `NEW`
1. [还有王安宇插不上的嘴](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%9C%89%E7%8E%8B%E5%AE%89%E5%AE%87%E6%8F%92%E4%B8%8D%E4%B8%8A%E7%9A%84%E5%98%B4%23) `67.5K 🔥` `NEW`
1. [毒枭被击毙引发骚乱多航班停飞](https://s.weibo.com/weibo?q=%23%E6%AF%92%E6%9E%AD%E8%A2%AB%E5%87%BB%E6%AF%99%E5%BC%95%E5%8F%91%E9%AA%9A%E4%B9%B1%E5%A4%9A%E8%88%AA%E7%8F%AD%E5%81%9C%E9%A3%9E%23) `66.1K 🔥` `NEW`
1. [初一家里有43人过完年只剩老人在家](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%80%E5%AE%B6%E9%87%8C%E6%9C%8943%E4%BA%BA%E8%BF%87%E5%AE%8C%E5%B9%B4%E5%8F%AA%E5%89%A9%E8%80%81%E4%BA%BA%E5%9C%A8%E5%AE%B6%23) `367.1K 🔥` `+82%`
1. [初八上班的我就这样 (I was like this when I went to work on the eighth day of the lunar month)](https://s.weibo.com/weibo?q=%23%E5%88%9D%E5%85%AB%E4%B8%8A%E7%8F%AD%E7%9A%84%E6%88%91%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `262.3K 🔥` `+25%`
1. [舅舅看到你剪成这样也会释怀](https://s.weibo.com/weibo?q=%23%E8%88%85%E8%88%85%E7%9C%8B%E5%88%B0%E4%BD%A0%E5%89%AA%E6%88%90%E8%BF%99%E6%A0%B7%E4%B9%9F%E4%BC%9A%E9%87%8A%E6%80%80%23) `251.5K 🔥` `+133%`
1. [谷爱凌晒金牌打脸外媒 (Gu Ailing slapped foreign media in the face after showing off her gold medal)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%99%92%E9%87%91%E7%89%8C%E6%89%93%E8%84%B8%E5%A4%96%E5%AA%92%23) `216.0K 🔥` `+40%`
1. [史上最贵iPhone要来了](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%B4%B5iPhone%E8%A6%81%E6%9D%A5%E4%BA%86%23) `215.4K 🔥` `+42%`
1. [叶祖新合照 想过了官宣没想到是亲戚](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%A5%96%E6%96%B0%E5%90%88%E7%85%A7%20%E6%83%B3%E8%BF%87%E4%BA%86%E5%AE%98%E5%AE%A3%E6%B2%A1%E6%83%B3%E5%88%B0%E6%98%AF%E4%BA%B2%E6%88%9A%23) `214.8K 🔥` `+40%`
1. [打麻将微信步数一万多 (More than 10,000 steps in playing mahjong on WeChat)](https://s.weibo.com/weibo?q=%23%E6%89%93%E9%BA%BB%E5%B0%86%E5%BE%AE%E4%BF%A1%E6%AD%A5%E6%95%B0%E4%B8%80%E4%B8%87%E5%A4%9A%23) `198.3K 🔥` `+63%`
1. [易梦玲称将捐出全部直播收入](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E7%A7%B0%E5%B0%86%E6%8D%90%E5%87%BA%E5%85%A8%E9%83%A8%E7%9B%B4%E6%92%AD%E6%94%B6%E5%85%A5%23) `189.5K 🔥` `+29%`
1. [夫妻争吵男子抛子入河妻子跳河施救](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E4%BA%89%E5%90%B5%E7%94%B7%E5%AD%90%E6%8A%9B%E5%AD%90%E5%85%A5%E6%B2%B3%E5%A6%BB%E5%AD%90%E8%B7%B3%E6%B2%B3%E6%96%BD%E6%95%91%23) `189.0K 🔥` `+30%`
1. [易梦玲晒比基尼照](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E6%99%92%E6%AF%94%E5%9F%BA%E5%B0%BC%E7%85%A7%23) `126.0K 🔥` `+66%`
1. [孟子义将门独后首次出妆](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E9%A6%96%E6%AC%A1%E5%87%BA%E5%A6%86%23) `287.6K 🔥`
1. [星河入梦 春节档遗珠 (Dreaming of the Starry River, a treasure left behind during the Spring Festival)](https://s.weibo.com/weibo?q=%23%E6%98%9F%E6%B2%B3%E5%85%A5%E6%A2%A6%20%E6%98%A5%E8%8A%82%E6%A1%A3%E9%81%97%E7%8F%A0%23) `216.6K 🔥`
1. [杨幂 这么来历不明的二维码也要扫吗](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E8%BF%99%E4%B9%88%E6%9D%A5%E5%8E%86%E4%B8%8D%E6%98%8E%E7%9A%84%E4%BA%8C%E7%BB%B4%E7%A0%81%E4%B9%9F%E8%A6%81%E6%89%AB%E5%90%97%23) `213.9K 🔥`
1. [韩国偶遇白鹿曾舜晞逛街](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%81%B6%E9%81%87%E7%99%BD%E9%B9%BF%E6%9B%BE%E8%88%9C%E6%99%9E%E9%80%9B%E8%A1%97%23) `180.4K 🔥`
1. [第一个吃甘蔗比吃螃蟹更厉害](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%90%83%E7%94%98%E8%94%97%E6%AF%94%E5%90%83%E8%9E%83%E8%9F%B9%E6%9B%B4%E5%8E%89%E5%AE%B3%23) `126.9K 🔥`
1. [美29岁女教师与未成年发生关系被捕 (29-year-old female teacher in the United States was arrested for having sex with a minor)](https://s.weibo.com/weibo?q=%23%E7%BE%8E29%E5%B2%81%E5%A5%B3%E6%95%99%E5%B8%88%E4%B8%8E%E6%9C%AA%E6%88%90%E5%B9%B4%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%E8%A2%AB%E6%8D%95%23) `126.7K 🔥`
1. [黄一鸣整了马甲线](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%B8%80%E9%B8%A3%E6%95%B4%E4%BA%86%E9%A9%AC%E7%94%B2%E7%BA%BF%23) `124.1K 🔥`
1. [问界M9起火声明](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E8%B5%B7%E7%81%AB%E5%A3%B0%E6%98%8E%23) `123.5K 🔥`
1. [曝厚本被不让江山除名 (It was revealed that Hou Ben was not allowed to be removed from the list)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8E%9A%E6%9C%AC%E8%A2%AB%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E9%99%A4%E5%90%8D%23) `120.9K 🔥`
1. [哈尔滨300多只东北虎将轻断食](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8300%E5%A4%9A%E5%8F%AA%E4%B8%9C%E5%8C%97%E8%99%8E%E5%B0%86%E8%BD%BB%E6%96%AD%E9%A3%9F%23) `115.0K 🔥`
1. [男子聚餐夜宵后体内滤出7斤油](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%81%9A%E9%A4%90%E5%A4%9C%E5%AE%B5%E5%90%8E%E4%BD%93%E5%86%85%E6%BB%A4%E5%87%BA7%E6%96%A4%E6%B2%B9%23) `110.0K 🔥`
1. [谷爱凌脑回路](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%84%91%E5%9B%9E%E8%B7%AF%23) `104.4K 🔥`
1. [闵熙珍带newjeans和日本财阀见面](https://s.weibo.com/weibo?q=%23%E9%97%B5%E7%86%99%E7%8F%8D%E5%B8%A6newjeans%E5%92%8C%E6%97%A5%E6%9C%AC%E8%B4%A2%E9%98%80%E8%A7%81%E9%9D%A2%23) `88.2K 🔥`
1. [吴京 人老了干什么都心酸](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E4%BA%BA%E8%80%81%E4%BA%86%E5%B9%B2%E4%BB%80%E4%B9%88%E9%83%BD%E5%BF%83%E9%85%B8%23) `84.3K 🔥`
1. [零负债人群的生活方式](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E8%B4%9F%E5%80%BA%E4%BA%BA%E7%BE%A4%E7%9A%84%E7%94%9F%E6%B4%BB%E6%96%B9%E5%BC%8F%23) `84.1K 🔥`
1. [张凌赫遗传是门学问 (Zhang Linghe Inheritance is a science)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%81%97%E4%BC%A0%E6%98%AF%E9%97%A8%E5%AD%A6%E9%97%AE%23) `70.6K 🔥`
1. [男子躲厕所过个瘾致高铁晚点](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BA%B2%E5%8E%95%E6%89%80%E8%BF%87%E4%B8%AA%E7%98%BE%E8%87%B4%E9%AB%98%E9%93%81%E6%99%9A%E7%82%B9%23) `799.1K 🔥` `-27%`
1. [西安大雪 (Heavy snow in Xi'an)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E5%A4%A7%E9%9B%AA%23) `128.4K 🔥` `-83%`
1. [疑似杨洋回家养伤](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%9D%A8%E6%B4%8B%E5%9B%9E%E5%AE%B6%E5%85%BB%E4%BC%A4%23) `110.9K 🔥` `-26%`
1. [过年后的银行ATM机](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%90%8E%E7%9A%84%E9%93%B6%E8%A1%8CATM%E6%9C%BA%23) `99.5K 🔥` `-53%`
1. [陈妍希说林心如女儿长的太好看了 (Michelle Chen said Ruby Lin’s daughter is so pretty)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E8%AF%B4%E6%9E%97%E5%BF%83%E5%A6%82%E5%A5%B3%E5%84%BF%E9%95%BF%E7%9A%84%E5%A4%AA%E5%A5%BD%E7%9C%8B%E4%BA%86%23) `74.1K 🔥` `-40%`
1. [墨西哥 (Mexico)](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%23) `70.7K 🔥` `-43%`
1. [李柯以给短剧上强度了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9F%AF%E4%BB%A5%E7%BB%99%E7%9F%AD%E5%89%A7%E4%B8%8A%E5%BC%BA%E5%BA%A6%E4%BA%86%23) `70.3K 🔥` `-43%`
1. [江湖夜雨十年灯 (Rivers and lakes night rain ten years of lanterns)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B9%96%E5%A4%9C%E9%9B%A8%E5%8D%81%E5%B9%B4%E7%81%AF%23) `66.0K 🔥` `-41%`

Updated at 2026-02-23 16:53:55

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
