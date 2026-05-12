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

1. [揭秘HBN亚洲有效抗老 (Revealing the secret of HBN Asia’s effective anti-aging effect)](https://s.weibo.com/weibo?q=%23%E6%8F%AD%E7%A7%98HBN%E4%BA%9A%E6%B4%B2%E6%9C%89%E6%95%88%E6%8A%97%E8%80%81%23) `348.4K 🔥` `NEW`
1. [中国为什么送人工胚胎上太空](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%BA%E4%BB%80%E4%B9%88%E9%80%81%E4%BA%BA%E5%B7%A5%E8%83%9A%E8%83%8E%E4%B8%8A%E5%A4%AA%E7%A9%BA%23) `343.9K 🔥` `NEW`
1. [宇树称会调整机甲售价](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%B0%E4%BC%9A%E8%B0%83%E6%95%B4%E6%9C%BA%E7%94%B2%E5%94%AE%E4%BB%B7%23) `328.2K 🔥` `NEW`
1. [李想称自研芯片被质疑跟风烧钱](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%83%B3%E7%A7%B0%E8%87%AA%E7%A0%94%E8%8A%AF%E7%89%87%E8%A2%AB%E8%B4%A8%E7%96%91%E8%B7%9F%E9%A3%8E%E7%83%A7%E9%92%B1%23) `316.0K 🔥` `NEW`
1. [遭15岁男孩冲撞女子称检查出了别的](https://s.weibo.com/weibo?q=%23%E9%81%AD15%E5%B2%81%E7%94%B7%E5%AD%A9%E5%86%B2%E6%92%9E%E5%A5%B3%E5%AD%90%E7%A7%B0%E6%A3%80%E6%9F%A5%E5%87%BA%E4%BA%86%E5%88%AB%E7%9A%84%23) `294.1K 🔥` `NEW`
1. [曝某升咖艺人想抢李宇春跨年压轴](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E5%8D%87%E5%92%96%E8%89%BA%E4%BA%BA%E6%83%B3%E6%8A%A2%E6%9D%8E%E5%AE%87%E6%98%A5%E8%B7%A8%E5%B9%B4%E5%8E%8B%E8%BD%B4%23) `262.2K 🔥` `NEW`
1. [辛芷蕾](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%23) `214.5K 🔥` `NEW`
1. [涉偷拍男生与拟录公务员姓名院校一致](https://s.weibo.com/weibo?q=%23%E6%B6%89%E5%81%B7%E6%8B%8D%E7%94%B7%E7%94%9F%E4%B8%8E%E6%8B%9F%E5%BD%95%E5%85%AC%E5%8A%A1%E5%91%98%E5%A7%93%E5%90%8D%E9%99%A2%E6%A0%A1%E4%B8%80%E8%87%B4%23) `209.8K 🔥` `NEW`
1. [当母虎头露出来时才知小虎多小](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%AF%8D%E8%99%8E%E5%A4%B4%E9%9C%B2%E5%87%BA%E6%9D%A5%E6%97%B6%E6%89%8D%E7%9F%A5%E5%B0%8F%E8%99%8E%E5%A4%9A%E5%B0%8F%23) `171.1K 🔥` `NEW`
1. [汪海林的发言](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B5%B7%E6%9E%97%E7%9A%84%E5%8F%91%E8%A8%80%23) `165.9K 🔥` `NEW`
1. [单场次见面会 亏本 (Loss money for a single meeting)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E5%9C%BA%E6%AC%A1%E8%A7%81%E9%9D%A2%E4%BC%9A%20%E4%BA%8F%E6%9C%AC%23) `152.0K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `151.5K 🔥` `NEW`
1. [F勒布伦回应被王楚钦打哭](https://s.weibo.com/weibo?q=%23F%E5%8B%92%E5%B8%83%E4%BC%A6%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%93%E5%93%AD%23) `121.4K 🔥` `NEW`
1. [汪涵有多爱吃槟榔](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B6%B5%E6%9C%89%E5%A4%9A%E7%88%B1%E5%90%83%E6%A7%9F%E6%A6%94%23) `99.6K 🔥` `NEW`
1. [邱泽母亲节送许玮甯两束花](https://s.weibo.com/weibo?q=%23%E9%82%B1%E6%B3%BD%E6%AF%8D%E4%BA%B2%E8%8A%82%E9%80%81%E8%AE%B8%E7%8E%AE%E7%94%AF%E4%B8%A4%E6%9D%9F%E8%8A%B1%23) `94.8K 🔥` `NEW`
1. [存储芯片股重挫](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E8%82%A1%E9%87%8D%E6%8C%AB%23) `90.6K 🔥` `NEW`
1. [旺旺副董点赞刘宇宁](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E5%89%AF%E8%91%A3%E7%82%B9%E8%B5%9E%E5%88%98%E5%AE%87%E5%AE%81%23) `81.5K 🔥` `NEW`
1. [曝限薪令前顶流1.8亿片酬](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%99%90%E8%96%AA%E4%BB%A4%E5%89%8D%E9%A1%B6%E6%B5%811.8%E4%BA%BF%E7%89%87%E9%85%AC%23) `77.2K 🔥` `NEW`
1. [李昀锐工作室点赞廖慧佳](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%82%B9%E8%B5%9E%E5%BB%96%E6%85%A7%E4%BD%B3%23) `73.9K 🔥` `NEW`
1. [逐玉奖项](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%A5%96%E9%A1%B9%23) `72.7K 🔥` `NEW`
1. [宋亚轩 重庆 (Song Yaxuan Chongqing)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E9%87%8D%E5%BA%86%23) `58.6K 🔥` `NEW`
1. [特朗普访华](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%23) `1.3M 🔥` `+193%`
1. [南京审计大学偷拍男生被开除 (Nanjing Audit University boy was expelled for secretly filming him)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%AE%A1%E8%AE%A1%E5%A4%A7%E5%AD%A6%E5%81%B7%E6%8B%8D%E7%94%B7%E7%94%9F%E8%A2%AB%E5%BC%80%E9%99%A4%23) `1.3M 🔥` `+296%`
1. [舒某编造涉人造大米网络谣言被罚](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%9F%90%E7%BC%96%E9%80%A0%E6%B6%89%E4%BA%BA%E9%80%A0%E5%A4%A7%E7%B1%B3%E7%BD%91%E7%BB%9C%E8%B0%A3%E8%A8%80%E8%A2%AB%E7%BD%9A%23) `740.5K 🔥` `+254%`
1. [跑男争议不该先定罪后解读](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E4%BA%89%E8%AE%AE%E4%B8%8D%E8%AF%A5%E5%85%88%E5%AE%9A%E7%BD%AA%E5%90%8E%E8%A7%A3%E8%AF%BB%23) `522.1K 🔥` `+224%`
1. [白鹿演唱会过审](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E8%BF%87%E5%AE%A1%23) `414.2K 🔥` `+163%`
1. [下午休是性价比最高的半天假 (Taking an afternoon break is the most cost-effective half-day break)](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%8D%88%E4%BC%91%E6%98%AF%E6%80%A7%E4%BB%B7%E6%AF%94%E6%9C%80%E9%AB%98%E7%9A%84%E5%8D%8A%E5%A4%A9%E5%81%87%23) `357.4K 🔥` `+218%`
1. [AG战胜狼队](https://s.weibo.com/weibo?q=%23AG%E6%88%98%E8%83%9C%E7%8B%BC%E9%98%9F%23) `347.3K 🔥` `+906%`
1. [67岁产女的妈妈现已卧床 (The 67-year-old mother who gave birth to a daughter is now bedridden)](https://s.weibo.com/weibo?q=%2367%E5%B2%81%E4%BA%A7%E5%A5%B3%E7%9A%84%E5%A6%88%E5%A6%88%E7%8E%B0%E5%B7%B2%E5%8D%A7%E5%BA%8A%23) `314.1K 🔥` `+321%`
1. [辛芷蕾新片演黄柳霜](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E6%96%B0%E7%89%87%E6%BC%94%E9%BB%84%E6%9F%B3%E9%9C%9C%23) `293.8K 🔥` `+187%`
1. [以防你没见过坚果年轻时的样子 (Just in case you haven’t seen Nuts look like when they were young)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%98%B2%E4%BD%A0%E6%B2%A1%E8%A7%81%E8%BF%87%E5%9D%9A%E6%9E%9C%E5%B9%B4%E8%BD%BB%E6%97%B6%E7%9A%84%E6%A0%B7%E5%AD%90%23) `287.8K 🔥` `+269%`
1. [藏海传2断层第一](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A02%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%23) `218.5K 🔥` `+176%`
1. [全球昆虫正在以惊人速度灭绝](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%98%86%E8%99%AB%E6%AD%A3%E5%9C%A8%E4%BB%A5%E6%83%8A%E4%BA%BA%E9%80%9F%E5%BA%A6%E7%81%AD%E7%BB%9D%23) `217.1K 🔥` `+197%`
1. [第一次看到金丝楠木狗](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%88%B0%E9%87%91%E4%B8%9D%E6%A5%A0%E6%9C%A8%E7%8B%97%23) `179.7K 🔥` `+102%`
1. [高能量的人有什么特征 (What are the characteristics of high-energy people?)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%83%BD%E9%87%8F%E7%9A%84%E4%BA%BA%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E5%BE%81%23) `157.1K 🔥` `+247%`
1. [4月汽车销量前10仅1款油车 (There was only one gasoline-powered vehicle among the top 10 best-selling cars in April)](https://s.weibo.com/weibo?q=%234%E6%9C%88%E6%B1%BD%E8%BD%A6%E9%94%80%E9%87%8F%E5%89%8D10%E4%BB%851%E6%AC%BE%E6%B2%B9%E8%BD%A6%23) `133.9K 🔥` `+153%`
1. [宋亚轩你好吗 端午档](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%BD%A0%E5%A5%BD%E5%90%97%20%E7%AB%AF%E5%8D%88%E6%A1%A3%23) `133.6K 🔥` `+131%`
1. [女子反对生娃再领证被诉返30万彩礼 (A woman opposed to having a baby and then getting a certificate was sued to pay back the 300,000-dollar gift)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8F%8D%E5%AF%B9%E7%94%9F%E5%A8%83%E5%86%8D%E9%A2%86%E8%AF%81%E8%A2%AB%E8%AF%89%E8%BF%9430%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `123.7K 🔥` `+158%`
1. [给阿嬷的情书 (A love letter to grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `101.6K 🔥` `+120%`
1. [女生没电脑在电竞馆学习获免单](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%B2%A1%E7%94%B5%E8%84%91%E5%9C%A8%E7%94%B5%E7%AB%9E%E9%A6%86%E5%AD%A6%E4%B9%A0%E8%8E%B7%E5%85%8D%E5%8D%95%23) `97.7K 🔥` `+37%`
1. [一诺哽咽](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%93%BD%E5%92%BD%23) `96.2K 🔥` `+71%`
1. [当地回应偷拍裙底男生已拟录公务员 (Local response: A boy secretly photographed up his skirt has been considered for employment as a civil servant)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%9C%B0%E5%9B%9E%E5%BA%94%E5%81%B7%E6%8B%8D%E8%A3%99%E5%BA%95%E7%94%B7%E7%94%9F%E5%B7%B2%E6%8B%9F%E5%BD%95%E5%85%AC%E5%8A%A1%E5%91%98%23) `85.8K 🔥` `+299%`
1. [孙颖莎打匹克球赢了振臂欢呼 (Sun Yingsha won cheers while playing pickleball)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%89%93%E5%8C%B9%E5%85%8B%E7%90%83%E8%B5%A2%E4%BA%86%E6%8C%AF%E8%87%82%E6%AC%A2%E5%91%BC%23) `79.6K 🔥` `+76%`
1. [55岁大妈和邻居吵架后气死](https://s.weibo.com/weibo?q=%2355%E5%B2%81%E5%A4%A7%E5%A6%88%E5%92%8C%E9%82%BB%E5%B1%85%E5%90%B5%E6%9E%B6%E5%90%8E%E6%B0%94%E6%AD%BB%23) `75.9K 🔥` `+161%`
1. [狗 这水怎么会咬舌头](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E8%BF%99%E6%B0%B4%E6%80%8E%E4%B9%88%E4%BC%9A%E5%92%AC%E8%88%8C%E5%A4%B4%23) `68.4K 🔥` `+95%`
1. [公司买50箱飞天茅台41箱是假货](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E4%B9%B050%E7%AE%B1%E9%A3%9E%E5%A4%A9%E8%8C%85%E5%8F%B041%E7%AE%B1%E6%98%AF%E5%81%87%E8%B4%A7%23) `63.7K 🔥` `+104%`
1. [2700次恶意仅退款男子获刑](https://s.weibo.com/weibo?q=%232700%E6%AC%A1%E6%81%B6%E6%84%8F%E4%BB%85%E9%80%80%E6%AC%BE%E7%94%B7%E5%AD%90%E8%8E%B7%E5%88%91%23) `61.0K 🔥` `+150%`
1. [深铁集团再借万科25亿 (Shenzhen Railway Group borrows another 2.5 billion from Vanke)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E9%93%81%E9%9B%86%E5%9B%A2%E5%86%8D%E5%80%9F%E4%B8%87%E7%A7%9125%E4%BA%BF%23) `55.7K 🔥` `+160%`
1. [宇树载人变形机甲发布](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E8%BD%BD%E4%BA%BA%E5%8F%98%E5%BD%A2%E6%9C%BA%E7%94%B2%E5%8F%91%E5%B8%83%23) `53.1K 🔥` `+113%`
1. [95花扎堆开演唱会](https://s.weibo.com/weibo?q=%2395%E8%8A%B1%E6%89%8E%E5%A0%86%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `51.5K 🔥` `+134%`
1. [夏天首次开空调要注意什么 (What should you pay attention to when turning on the air conditioner for the first time in summer?)](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A4%A9%E9%A6%96%E6%AC%A1%E5%BC%80%E7%A9%BA%E8%B0%83%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BB%80%E4%B9%88%23) `48.0K 🔥` `+102%`
1. [成毅usmile笑容加全球品牌代言人](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85usmile%E7%AC%91%E5%AE%B9%E5%8A%A0%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `589.9K 🔥`

Updated at 2026-05-13 07:18:59

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
