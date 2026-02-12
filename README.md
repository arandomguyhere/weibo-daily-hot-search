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

1. [纸质文件 (Paper documents)](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E8%B4%A8%E6%96%87%E4%BB%B6%23) `328.5K 🔥` `NEW`
1. [庾晚音 北京是个小县城](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%99%9A%E9%9F%B3%20%E5%8C%97%E4%BA%AC%E6%98%AF%E4%B8%AA%E5%B0%8F%E5%8E%BF%E5%9F%8E%23) `197.6K 🔥` `NEW`
1. [可是妈妈何炅不是别的黄毛](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E6%98%AF%E5%A6%88%E5%A6%88%E4%BD%95%E7%82%85%E4%B8%8D%E6%98%AF%E5%88%AB%E7%9A%84%E9%BB%84%E6%AF%9B%23) `197.1K 🔥` `NEW`
1. [母亲花6万为智力残障儿子娶外籍妻子](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%B16%E4%B8%87%E4%B8%BA%E6%99%BA%E5%8A%9B%E6%AE%8B%E9%9A%9C%E5%84%BF%E5%AD%90%E5%A8%B6%E5%A4%96%E7%B1%8D%E5%A6%BB%E5%AD%90%23) `196.8K 🔥` `NEW`
1. [王者新春AppStore有礼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E6%98%A5AppStore%E6%9C%89%E7%A4%BC%23) `196.4K 🔥` `NEW`
1. [小伙3万彩礼3万首饰娶埃及姑娘](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%993%E4%B8%87%E5%BD%A9%E7%A4%BC3%E4%B8%87%E9%A6%96%E9%A5%B0%E5%A8%B6%E5%9F%83%E5%8F%8A%E5%A7%91%E5%A8%98%23) `195.3K 🔥` `NEW`
1. [杜甫遇上Seedance2.0](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E7%94%AB%E9%81%87%E4%B8%8ASeedance2.0%23) `178.2K 🔥` `NEW`
1. [央行将开展10000亿逆回购操作](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A1%8C%E5%B0%86%E5%BC%80%E5%B1%9510000%E4%BA%BF%E9%80%86%E5%9B%9E%E8%B4%AD%E6%93%8D%E4%BD%9C%23) `177.9K 🔥` `NEW`
1. [救人英雄栾留伟曾说让店门口排长队](https://s.weibo.com/weibo?q=%23%E6%95%91%E4%BA%BA%E8%8B%B1%E9%9B%84%E6%A0%BE%E7%95%99%E4%BC%9F%E6%9B%BE%E8%AF%B4%E8%AE%A9%E5%BA%97%E9%97%A8%E5%8F%A3%E6%8E%92%E9%95%BF%E9%98%9F%23) `177.8K 🔥` `NEW`
1. [鞠婧祎做了雪花玫瑰花](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%81%9A%E4%BA%86%E9%9B%AA%E8%8A%B1%E7%8E%AB%E7%91%B0%E8%8A%B1%23) `174.9K 🔥` `NEW`
1. [男子就医喊饿竟是全身血液已近流干 (A man went to the doctor and complained that he was hungry, but it turned out that the blood in his body was almost dry)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%B1%E5%8C%BB%E5%96%8A%E9%A5%BF%E7%AB%9F%E6%98%AF%E5%85%A8%E8%BA%AB%E8%A1%80%E6%B6%B2%E5%B7%B2%E8%BF%91%E6%B5%81%E5%B9%B2%23) `155.4K 🔥` `NEW`
1. [六家人合建的农村自建房像所学校](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%AE%B6%E4%BA%BA%E5%90%88%E5%BB%BA%E7%9A%84%E5%86%9C%E6%9D%91%E8%87%AA%E5%BB%BA%E6%88%BF%E5%83%8F%E6%89%80%E5%AD%A6%E6%A0%A1%23) `147.8K 🔥` `NEW`
1. [时代少年团跳大绳](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%B7%B3%E5%A4%A7%E7%BB%B3%23) `143.1K 🔥` `NEW`
1. [日本军备70年三连跳](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%86%9B%E5%A4%8770%E5%B9%B4%E4%B8%89%E8%BF%9E%E8%B7%B3%23) `103.3K 🔥` `NEW`
1. [曝惊蛰无声发行方强制影院排片](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E5%8F%91%E8%A1%8C%E6%96%B9%E5%BC%BA%E5%88%B6%E5%BD%B1%E9%99%A2%E6%8E%92%E7%89%87%23) `102.5K 🔥` `NEW`
1. [一诺主持全明星表演赛](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E4%B8%BB%E6%8C%81%E5%85%A8%E6%98%8E%E6%98%9F%E8%A1%A8%E6%BC%94%E8%B5%9B%23) `88.9K 🔥` `NEW`
1. [孙颖莎王楚钦王曼昱新春祝福](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%96%B0%E6%98%A5%E7%A5%9D%E7%A6%8F%23) `88.8K 🔥` `NEW`
1. [严厉打击无AI标识虚假不实信息](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%8E%89%E6%89%93%E5%87%BB%E6%97%A0AI%E6%A0%87%E8%AF%86%E8%99%9A%E5%81%87%E4%B8%8D%E5%AE%9E%E4%BF%A1%E6%81%AF%23) `621.0K 🔥` `+207%`
1. [钢架雪车](https://s.weibo.com/weibo?q=%23%E9%92%A2%E6%9E%B6%E9%9B%AA%E8%BD%A6%23) `261.9K 🔥` `+92%`
1. [第一次看到一箱草莓毫无食欲](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%88%B0%E4%B8%80%E7%AE%B1%E8%8D%89%E8%8E%93%E6%AF%AB%E6%97%A0%E9%A3%9F%E6%AC%B2%23) `259.4K 🔥` `+23%`
1. [成龙把掉地上的口香糖捡起来吃了 (Jackie Chan picked up the chewing gum that fell on the floor and ate it)](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%BE%99%E6%8A%8A%E6%8E%89%E5%9C%B0%E4%B8%8A%E7%9A%84%E5%8F%A3%E9%A6%99%E7%B3%96%E6%8D%A1%E8%B5%B7%E6%9D%A5%E5%90%83%E4%BA%86%23) `234.3K 🔥` `+235%`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `200.9K 🔥` `+23%`
1. [高市早苗或将释放三大恶魔](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%88%96%E5%B0%86%E9%87%8A%E6%94%BE%E4%B8%89%E5%A4%A7%E6%81%B6%E9%AD%94%23) `197.3K 🔥` `+57%`
1. [30岁男子没买车父母不愿出门拜年](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E7%94%B7%E5%AD%90%E6%B2%A1%E4%B9%B0%E8%BD%A6%E7%88%B6%E6%AF%8D%E4%B8%8D%E6%84%BF%E5%87%BA%E9%97%A8%E6%8B%9C%E5%B9%B4%23) `196.7K 🔥` `+120%`
1. [张馨予 你很有钱是吗 (Zhang Xinyu, are you very rich?)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%20%E4%BD%A0%E5%BE%88%E6%9C%89%E9%92%B1%E6%98%AF%E5%90%97%23) `196.2K 🔥` `+23%`
1. [男子性侵前妻闺蜜被判10年8个月](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E5%89%8D%E5%A6%BB%E9%97%BA%E8%9C%9C%E8%A2%AB%E5%88%A410%E5%B9%B48%E4%B8%AA%E6%9C%88%23) `196.1K 🔥` `+24%`
1. [蒋欣 当年真的错怪你了 (Jiang Xin, I really blamed you wrongly back then)](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%20%E5%BD%93%E5%B9%B4%E7%9C%9F%E7%9A%84%E9%94%99%E6%80%AA%E4%BD%A0%E4%BA%86%23) `195.8K 🔥` `+25%`
1. [张凌赫粉丝爬半天山拍了三遍林允 (Fans of Zhang Linghe climbed Half-Tian Mountain to take photos of Lin Yun three times)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%B2%89%E4%B8%9D%E7%88%AC%E5%8D%8A%E5%A4%A9%E5%B1%B1%E6%8B%8D%E4%BA%86%E4%B8%89%E9%81%8D%E6%9E%97%E5%85%81%23) `195.7K 🔥` `+47%`
1. [姐姐被藏尸位置就在弟弟店铺正上方 (The location where my sister’s body was buried is right above my brother’s shop.)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%A2%AB%E8%97%8F%E5%B0%B8%E4%BD%8D%E7%BD%AE%E5%B0%B1%E5%9C%A8%E5%BC%9F%E5%BC%9F%E5%BA%97%E9%93%BA%E6%AD%A3%E4%B8%8A%E6%96%B9%23) `195.7K 🔥` `+27%`
1. [杨幂校花学姐](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%A0%A1%E8%8A%B1%E5%AD%A6%E5%A7%90%23) `195.5K 🔥` `+25%`
1. [立威廉 短剧应该只能用手机看吧](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%A8%81%E5%BB%89%20%E7%9F%AD%E5%89%A7%E5%BA%94%E8%AF%A5%E5%8F%AA%E8%83%BD%E7%94%A8%E6%89%8B%E6%9C%BA%E7%9C%8B%E5%90%A7%23) `103.4K 🔥` `+32%`
1. [曝陈哲远每年让员工带薪出国旅游](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%99%88%E5%93%B2%E8%BF%9C%E6%AF%8F%E5%B9%B4%E8%AE%A9%E5%91%98%E5%B7%A5%E5%B8%A6%E8%96%AA%E5%87%BA%E5%9B%BD%E6%97%85%E6%B8%B8%23) `88.8K 🔥` `+26%`
1. [车厘子卖家赌涨价压货](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%8E%98%E5%AD%90%E5%8D%96%E5%AE%B6%E8%B5%8C%E6%B6%A8%E4%BB%B7%E5%8E%8B%E8%B4%A7%23) `1.1M 🔥`
1. [谷爱凌不是输给第一名的第二名](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E4%B8%8D%E6%98%AF%E8%BE%93%E7%BB%99%E7%AC%AC%E4%B8%80%E5%90%8D%E7%9A%84%E7%AC%AC%E4%BA%8C%E5%90%8D%23) `747.9K 🔥`
1. [上淘宝春节不打烊年货小时达 (Go to Taobao and don’t close during the Spring Festival. New Year’s goods are available within hours.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D%E6%98%A5%E8%8A%82%E4%B8%8D%E6%89%93%E7%83%8A%E5%B9%B4%E8%B4%A7%E5%B0%8F%E6%97%B6%E8%BE%BE%23) `559.5K 🔥`
1. [中戏表演系原主任陈刚主动投案 (Chen Gang, former director of the Chinese Opera Performance Department, voluntarily surrendered)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E8%A1%A8%E6%BC%94%E7%B3%BB%E5%8E%9F%E4%B8%BB%E4%BB%BB%E9%99%88%E5%88%9A%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `198.0K 🔥`
1. [团购12箱车厘子收到陈年僵尸果 (Group purchase of 12 boxes of cherries and received aged zombie fruit)](https://s.weibo.com/weibo?q=%23%E5%9B%A2%E8%B4%AD12%E7%AE%B1%E8%BD%A6%E5%8E%98%E5%AD%90%E6%94%B6%E5%88%B0%E9%99%88%E5%B9%B4%E5%83%B5%E5%B0%B8%E6%9E%9C%23) `197.2K 🔥`
1. [马年本命年攻略 (Guide to the Year of the Horse)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%9C%AC%E5%91%BD%E5%B9%B4%E6%94%BB%E7%95%A5%23) `197.0K 🔥`
1. [第一批回村的人已经出片了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E5%9B%9E%E6%9D%91%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%87%BA%E7%89%87%E4%BA%86%23) `196.5K 🔥`
1. [年少有为](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA%23) `196.4K 🔥`
1. [20岁邓恩熙演30岁蒋龙的妈 (20-year-old Deng Enxi plays 30-year-old Jiang Long’s mother)](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E9%82%93%E6%81%A9%E7%86%99%E6%BC%9430%E5%B2%81%E8%92%8B%E9%BE%99%E7%9A%84%E5%A6%88%23) `195.3K 🔥`
1. [无畏支持蔡徐坤新歌](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E6%94%AF%E6%8C%81%E8%94%A1%E5%BE%90%E5%9D%A4%E6%96%B0%E6%AD%8C%23) `177.8K 🔥`
1. [程潇 我只眼神给出去](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%20%E6%88%91%E5%8F%AA%E7%9C%BC%E7%A5%9E%E7%BB%99%E5%87%BA%E5%8E%BB%23) `103.2K 🔥`
1. [舌头翘一翘身体好坏都知道](https://s.weibo.com/weibo?q=%23%E8%88%8C%E5%A4%B4%E7%BF%98%E4%B8%80%E7%BF%98%E8%BA%AB%E4%BD%93%E5%A5%BD%E5%9D%8F%E9%83%BD%E7%9F%A5%E9%81%93%23) `82.4K 🔥`
1. [王者荣耀马年全明星表演赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E9%A9%AC%E5%B9%B4%E5%85%A8%E6%98%8E%E6%98%9F%E8%A1%A8%E6%BC%94%E8%B5%9B%23) `197.5K 🔥` `-61%`
1. [沈阳暴风雨温泉洗浴](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%9A%B4%E9%A3%8E%E9%9B%A8%E6%B8%A9%E6%B3%89%E6%B4%97%E6%B5%B4%23) `103.4K 🔥` `-44%`
1. [时代少年团你们吵到陈都灵了 (Times Youth League, you have made a noise with Chen Duling)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%BD%A0%E4%BB%AC%E5%90%B5%E5%88%B0%E9%99%88%E9%83%BD%E7%81%B5%E4%BA%86%23) `103.3K 🔥` `-33%`
1. [孙颖莎头像挂件换成了皇冠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%B4%E5%83%8F%E6%8C%82%E4%BB%B6%E6%8D%A2%E6%88%90%E4%BA%86%E7%9A%87%E5%86%A0%23) `103.2K 🔥` `-43%`
1. [ILLIT NewJeans](https://s.weibo.com/weibo?q=%23ILLIT%20NewJeans%23) `101.3K 🔥` `-34%`
1. [孙颖莎ELLE 6个封面 (Sun Yingsha ELLE 6 covers)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%206%E4%B8%AA%E5%B0%81%E9%9D%A2%23) `87.3K 🔥` `-45%`

Updated at 2026-02-12 19:58:11

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
