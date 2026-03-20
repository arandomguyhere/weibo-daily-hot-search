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

1. [释永信涉嫌4项罪名 (Shi Yongxin is suspected of 4 crimes)](https://s.weibo.com/weibo?q=%23%E9%87%8A%E6%B0%B8%E4%BF%A1%E6%B6%89%E5%AB%8C4%E9%A1%B9%E7%BD%AA%E5%90%8D%23) `1.1M 🔥` `NEW`
1. [新版闲鱼10s内算清了我的家产](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%89%88%E9%97%B2%E9%B1%BC10s%E5%86%85%E7%AE%97%E6%B8%85%E4%BA%86%E6%88%91%E7%9A%84%E5%AE%B6%E4%BA%A7%23) `570.4K 🔥` `NEW`
1. [马頔说有李纯后不单纯了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E8%AF%B4%E6%9C%89%E6%9D%8E%E7%BA%AF%E5%90%8E%E4%B8%8D%E5%8D%95%E7%BA%AF%E4%BA%86%23) `258.0K 🔥` `NEW`
1. [周鸿祎谈AI的青春期](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%B8%BF%E7%A5%8E%E8%B0%88AI%E7%9A%84%E9%9D%92%E6%98%A5%E6%9C%9F%23) `240.7K 🔥` `NEW`
1. [四川绵竹3.4级地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E7%BB%B5%E7%AB%B93.4%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `145.0K 🔥` `NEW`
1. [怪不得爸妈要各一间卧室](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E7%88%B8%E5%A6%88%E8%A6%81%E5%90%84%E4%B8%80%E9%97%B4%E5%8D%A7%E5%AE%A4%23) `120.6K 🔥` `NEW`
1. [双休但不是休周末的工作](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BC%91%E4%BD%86%E4%B8%8D%E6%98%AF%E4%BC%91%E5%91%A8%E6%9C%AB%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `114.6K 🔥` `NEW`
1. [雷军希望新SU7订单交付持平](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%B8%8C%E6%9C%9B%E6%96%B0SU7%E8%AE%A2%E5%8D%95%E4%BA%A4%E4%BB%98%E6%8C%81%E5%B9%B3%23) `102.7K 🔥` `NEW`
1. [第一次见这么标准的不合适](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E8%BF%99%E4%B9%88%E6%A0%87%E5%87%86%E7%9A%84%E4%B8%8D%E5%90%88%E9%80%82%23) `98.2K 🔥` `NEW`
1. [新任印度驻华大使取了个中国名字](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%BB%BB%E5%8D%B0%E5%BA%A6%E9%A9%BB%E5%8D%8E%E5%A4%A7%E4%BD%BF%E5%8F%96%E4%BA%86%E4%B8%AA%E4%B8%AD%E5%9B%BD%E5%90%8D%E5%AD%97%23) `98.2K 🔥` `NEW`
1. [妈妈瞒着病重女儿偷偷看最后一眼 (Mother secretly takes one last look at seriously ill daughter without telling her)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%9E%92%E7%9D%80%E7%97%85%E9%87%8D%E5%A5%B3%E5%84%BF%E5%81%B7%E5%81%B7%E7%9C%8B%E6%9C%80%E5%90%8E%E4%B8%80%E7%9C%BC%23) `97.4K 🔥` `NEW`
1. [胡先煦这么瘦了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E8%BF%99%E4%B9%88%E7%98%A6%E4%BA%86%23) `97.0K 🔥` `NEW`
1. [孟佳开撕品牌方](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E4%BD%B3%E5%BC%80%E6%92%95%E5%93%81%E7%89%8C%E6%96%B9%23) `95.4K 🔥` `NEW`
1. [青岛真的只为你倾倒](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E7%9C%9F%E7%9A%84%E5%8F%AA%E4%B8%BA%E4%BD%A0%E5%80%BE%E5%80%92%23) `88.5K 🔥` `NEW`
1. [张子枫 希腊神女](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%20%E5%B8%8C%E8%85%8A%E7%A5%9E%E5%A5%B3%23) `88.5K 🔥` `NEW`
1. [周杰伦弟子上音综被待定](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%BC%9F%E5%AD%90%E4%B8%8A%E9%9F%B3%E7%BB%BC%E8%A2%AB%E5%BE%85%E5%AE%9A%23) `85.9K 🔥` `NEW`
1. [王勉第一次见马頔就被骂了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8B%89%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E9%A9%AC%E9%A0%94%E5%B0%B1%E8%A2%AB%E9%AA%82%E4%BA%86%23) `85.7K 🔥` `NEW`
1. [校车司机聚餐后失联已超300天](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E8%BD%A6%E5%8F%B8%E6%9C%BA%E8%81%9A%E9%A4%90%E5%90%8E%E5%A4%B1%E8%81%94%E5%B7%B2%E8%B6%85300%E5%A4%A9%23) `85.5K 🔥` `NEW`
1. [田曦薇经纪人给张凌赫拍的吗](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%BB%8F%E7%BA%AA%E4%BA%BA%E7%BB%99%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8B%8D%E7%9A%84%E5%90%97%23) `85.1K 🔥` `NEW`
1. [热巴陈飞宇这段不建议外放](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E8%BF%99%E6%AE%B5%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%A4%96%E6%94%BE%23) `84.8K 🔥` `NEW`
1. [刘轩丞新剧镜头被删 (Scenes from Liu Xuancheng's new drama deleted)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%BD%A9%E4%B8%9E%E6%96%B0%E5%89%A7%E9%95%9C%E5%A4%B4%E8%A2%AB%E5%88%A0%23) `84.2K 🔥` `NEW`
1. [字节超60亿美元出售沐瞳科技](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E8%B6%8560%E4%BA%BF%E7%BE%8E%E5%85%83%E5%87%BA%E5%94%AE%E6%B2%90%E7%9E%B3%E7%A7%91%E6%8A%80%23) `76.5K 🔥` `NEW`
1. [穆祉丞站着干饭](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%AB%99%E7%9D%80%E5%B9%B2%E9%A5%AD%23) `75.9K 🔥` `NEW`
1. [A股尾盘又跳水了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B0%BE%E7%9B%98%E5%8F%88%E8%B7%B3%E6%B0%B4%E4%BA%86%23) `74.0K 🔥` `NEW`
1. [曾舜晞直播谈演员AI焦虑](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E7%9B%B4%E6%92%AD%E8%B0%88%E6%BC%94%E5%91%98AI%E7%84%A6%E8%99%91%23) `71.7K 🔥` `NEW`
1. [发型易容术](https://s.weibo.com/weibo?q=%23%E5%8F%91%E5%9E%8B%E6%98%93%E5%AE%B9%E6%9C%AF%23) `240.5K 🔥` `+86%`
1. [女子买8套老破小月收租2.1万 (A woman bought 8 old and dilapidated apartments and collected rent of 21,000 yuan a month)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B08%E5%A5%97%E8%80%81%E7%A0%B4%E5%B0%8F%E6%9C%88%E6%94%B6%E7%A7%9F2.1%E4%B8%87%23) `762.9K 🔥`
1. [二月二最硬核龙抬头 (The most hard-core dragon raises its head on February 2nd)](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%9C%88%E4%BA%8C%E6%9C%80%E7%A1%AC%E6%A0%B8%E9%BE%99%E6%8A%AC%E5%A4%B4%23) `598.7K 🔥`
1. [伊朗伊斯兰革命卫队发言人身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BC%8A%E6%96%AF%E5%85%B0%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E5%8F%91%E8%A8%80%E4%BA%BA%E8%BA%AB%E4%BA%A1%23) `241.5K 🔥`
1. [迪丽热巴红衣女鬼塑](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BA%A2%E8%A1%A3%E5%A5%B3%E9%AC%BC%E5%A1%91%23) `108.9K 🔥`
1. [BTS回归 (BTS returns)](https://s.weibo.com/weibo?q=%23BTS%E5%9B%9E%E5%BD%92%23) `106.3K 🔥`
1. [你好1983 市长爱上离婚带娃的她](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%20%E5%B8%82%E9%95%BF%E7%88%B1%E4%B8%8A%E7%A6%BB%E5%A9%9A%E5%B8%A6%E5%A8%83%E7%9A%84%E5%A5%B9%23) `101.2K 🔥`
1. [网易严选 玩梗](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%98%93%E4%B8%A5%E9%80%89%20%E7%8E%A9%E6%A2%97%23) `88.5K 🔥`
1. [刘浩存CMG盛典造型 (Liu Haocun CMG ceremony style)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98CMG%E7%9B%9B%E5%85%B8%E9%80%A0%E5%9E%8B%23) `69.5K 🔥`
1. [重庆市长胡衡华被查 (Chongqing Mayor Hu Henghua was investigated)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B8%82%E9%95%BF%E8%83%A1%E8%A1%A1%E5%8D%8E%E8%A2%AB%E6%9F%A5%23) `340.8K 🔥` `-68%`
1. [腾讯包场白日提灯 (Tencent private day lantern)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%8C%85%E5%9C%BA%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `159.8K 🔥` `-25%`
1. [33岁抗癌博主阿润离世 (33-year-old anti-cancer blogger Arun passed away)](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E9%98%BF%E6%B6%A6%E7%A6%BB%E4%B8%96%23) `127.2K 🔥` `-38%`
1. [高市早苗嘲笑拜登照片](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%98%B2%E7%AC%91%E6%8B%9C%E7%99%BB%E7%85%A7%E7%89%87%23) `124.7K 🔥` `-36%`
1. [铁路通报女子月经弄脏卧铺事件](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E4%BA%8B%E4%BB%B6%23) `110.7K 🔥` `-44%`
1. [孟佳 品牌邀请看秀不让进场](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E4%BD%B3%20%E5%93%81%E7%89%8C%E9%82%80%E8%AF%B7%E7%9C%8B%E7%A7%80%E4%B8%8D%E8%AE%A9%E8%BF%9B%E5%9C%BA%23) `97.9K 🔥` `-51%`
1. [张凌赫工作室 拍出了张凌赫的死角](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E6%8B%8D%E5%87%BA%E4%BA%86%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E6%AD%BB%E8%A7%92%23) `97.7K 🔥` `-50%`
1. [留几手听到葛夕官宣恋情后的反应](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E5%90%AC%E5%88%B0%E8%91%9B%E5%A4%95%E5%AE%98%E5%AE%A3%E6%81%8B%E6%83%85%E5%90%8E%E7%9A%84%E5%8F%8D%E5%BA%94%23) `97.0K 🔥` `-25%`
1. [42岁婆婆刚给儿子娶完媳妇就怀孕了 (The 42-year-old mother-in-law became pregnant just after marrying her son)](https://s.weibo.com/weibo?q=%2342%E5%B2%81%E5%A9%86%E5%A9%86%E5%88%9A%E7%BB%99%E5%84%BF%E5%AD%90%E5%A8%B6%E5%AE%8C%E5%AA%B3%E5%A6%87%E5%B0%B1%E6%80%80%E5%AD%95%E4%BA%86%23) `96.8K 🔥` `-25%`
1. [曝AI短剧使用杨紫的脸](https://s.weibo.com/weibo?q=%23%E6%9B%9DAI%E7%9F%AD%E5%89%A7%E4%BD%BF%E7%94%A8%E6%9D%A8%E7%B4%AB%E7%9A%84%E8%84%B8%23) `95.6K 🔥` `-51%`
1. [山姆被曝冷鲜猪肉是数月前屠宰的 (Sam’s chilled pork was revealed to have been slaughtered months ago)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E8%A2%AB%E6%9B%9D%E5%86%B7%E9%B2%9C%E7%8C%AA%E8%82%89%E6%98%AF%E6%95%B0%E6%9C%88%E5%89%8D%E5%B1%A0%E5%AE%B0%E7%9A%84%23) `93.7K 🔥` `-54%`
1. [手胖的人解释不清了](https://s.weibo.com/weibo?q=%23%E6%89%8B%E8%83%96%E7%9A%84%E4%BA%BA%E8%A7%A3%E9%87%8A%E4%B8%8D%E6%B8%85%E4%BA%86%23) `88.1K 🔥` `-33%`
1. [曝王一博乐华续约](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B9%90%E5%8D%8E%E7%BB%AD%E7%BA%A6%23) `87.4K 🔥` `-55%`
1. [单依纯 维密](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E7%BB%B4%E5%AF%86%23) `87.1K 🔥` `-37%`
1. [经期3个表现警惕子宫腺肌症 (3 symptoms during menstruation to alert you to adenomyosis)](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E6%9C%9F3%E4%B8%AA%E8%A1%A8%E7%8E%B0%E8%AD%A6%E6%83%95%E5%AD%90%E5%AE%AB%E8%85%BA%E8%82%8C%E7%97%87%23) `86.4K 🔥` `-39%`
1. [李维嘉崩溃大哭到无法主持](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BB%B4%E5%98%89%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%E5%88%B0%E6%97%A0%E6%B3%95%E4%B8%BB%E6%8C%81%23) `86.2K 🔥` `-34%`
1. [女子举报退休领导母亲名下巨额财产](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%BE%E6%8A%A5%E9%80%80%E4%BC%91%E9%A2%86%E5%AF%BC%E6%AF%8D%E4%BA%B2%E5%90%8D%E4%B8%8B%E5%B7%A8%E9%A2%9D%E8%B4%A2%E4%BA%A7%23) `84.7K 🔥` `-44%`
1. [奥沙利文单杆153分创纪录](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E6%B2%99%E5%88%A9%E6%96%87%E5%8D%95%E6%9D%86153%E5%88%86%E5%88%9B%E7%BA%AA%E5%BD%95%23) `74.5K 🔥` `-30%`

Updated at 2026-03-20 17:53:11

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
