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

1. [丝芭总裁王子杰去世 (Siba President Wang Zijie passed away)](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%E6%80%BB%E8%A3%81%E7%8E%8B%E5%AD%90%E6%9D%B0%E5%8E%BB%E4%B8%96%23) `8.0M 🔥` `NEW`
1. [医生回应35岁孕妇吃冰箱剩菜后去世](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%9435%E5%B2%81%E5%AD%95%E5%A6%87%E5%90%83%E5%86%B0%E7%AE%B1%E5%89%A9%E8%8F%9C%E5%90%8E%E5%8E%BB%E4%B8%96%23) `1.1M 🔥` `NEW`
1. [全国工程建设小阳春](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%B7%A5%E7%A8%8B%E5%BB%BA%E8%AE%BE%E5%B0%8F%E9%98%B3%E6%98%A5%23) `603.8K 🔥` `NEW`
1. [赵子琪为上浪姐下了血本](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E4%B8%BA%E4%B8%8A%E6%B5%AA%E5%A7%90%E4%B8%8B%E4%BA%86%E8%A1%80%E6%9C%AC%23) `513.7K 🔥` `NEW`
1. [网盘禁止传播海外影视资源](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%9B%98%E7%A6%81%E6%AD%A2%E4%BC%A0%E6%92%AD%E6%B5%B7%E5%A4%96%E5%BD%B1%E8%A7%86%E8%B5%84%E6%BA%90%23) `384.9K 🔥` `NEW`
1. [芒果化妆师把陶昕然化成王鸥了](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%8C%96%E5%A6%86%E5%B8%88%E6%8A%8A%E9%99%B6%E6%98%95%E7%84%B6%E5%8C%96%E6%88%90%E7%8E%8B%E9%B8%A5%E4%BA%86%23) `383.8K 🔥` `NEW`
1. [小狗叼东西证明自己不咬人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%8F%BC%E4%B8%9C%E8%A5%BF%E8%AF%81%E6%98%8E%E8%87%AA%E5%B7%B1%E4%B8%8D%E5%92%AC%E4%BA%BA%23) `255.1K 🔥` `NEW`
1. [勇士vs快船](https://s.weibo.com/weibo?q=%23%E5%8B%87%E5%A3%ABvs%E5%BF%AB%E8%88%B9%23) `251.1K 🔥` `NEW`
1. [浙江癌症发病率死亡率首位均为肺癌](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E7%99%8C%E7%97%87%E5%8F%91%E7%97%85%E7%8E%87%E6%AD%BB%E4%BA%A1%E7%8E%87%E9%A6%96%E4%BD%8D%E5%9D%87%E4%B8%BA%E8%82%BA%E7%99%8C%23) `246.5K 🔥` `NEW`
1. [丙午年 心脏](https://s.weibo.com/weibo?q=%23%E4%B8%99%E5%8D%88%E5%B9%B4%20%E5%BF%83%E8%84%8F%23) `245.1K 🔥` `NEW`
1. [向华强女儿说向太拿烟头烫她 (Xiang Huaqiang’s daughter said that Mrs. Xiang burned her with a cigarette butt)](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%8D%8E%E5%BC%BA%E5%A5%B3%E5%84%BF%E8%AF%B4%E5%90%91%E5%A4%AA%E6%8B%BF%E7%83%9F%E5%A4%B4%E7%83%AB%E5%A5%B9%23) `241.7K 🔥` `NEW`
1. [小黄豆自曝在泼水节被喷未知液体](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86%E8%87%AA%E6%9B%9D%E5%9C%A8%E6%B3%BC%E6%B0%B4%E8%8A%82%E8%A2%AB%E5%96%B7%E6%9C%AA%E7%9F%A5%E6%B6%B2%E4%BD%93%23) `239.4K 🔥` `NEW`
1. [医院测出智障高三学生再发声](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E6%B5%8B%E5%87%BA%E6%99%BA%E9%9A%9C%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E5%86%8D%E5%8F%91%E5%A3%B0%23) `237.0K 🔥` `NEW`
1. [赵子琪张慧雯吵架是怎么剪辑出来的](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E5%BC%A0%E6%85%A7%E9%9B%AF%E5%90%B5%E6%9E%B6%E6%98%AF%E6%80%8E%E4%B9%88%E5%89%AA%E8%BE%91%E5%87%BA%E6%9D%A5%E7%9A%84%23) `229.5K 🔥` `NEW`
1. [易烊千玺 华为](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E5%8D%8E%E4%B8%BA%23) `201.2K 🔥` `NEW`
1. [央视点赞小鹏GX首发航空级安全冗余](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%82%B9%E8%B5%9E%E5%B0%8F%E9%B9%8FGX%E9%A6%96%E5%8F%91%E8%88%AA%E7%A9%BA%E7%BA%A7%E5%AE%89%E5%85%A8%E5%86%97%E4%BD%99%23) `182.6K 🔥` `NEW`
1. [后来才知道无聊就是好命](https://s.weibo.com/weibo?q=%23%E5%90%8E%E6%9D%A5%E6%89%8D%E7%9F%A5%E9%81%93%E6%97%A0%E8%81%8A%E5%B0%B1%E6%98%AF%E5%A5%BD%E5%91%BD%23) `151.2K 🔥` `NEW`
1. [朱一龙吃蛋糕嘴全黑了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%90%83%E8%9B%8B%E7%B3%95%E5%98%B4%E5%85%A8%E9%BB%91%E4%BA%86%23) `150.7K 🔥` `NEW`
1. [穆祉丞证件照](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%AF%81%E4%BB%B6%E7%85%A7%23) `149.4K 🔥` `NEW`
1. [王子杰曾说决不允许黑幕和潜规则](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E6%9D%B0%E6%9B%BE%E8%AF%B4%E5%86%B3%E4%B8%8D%E5%85%81%E8%AE%B8%E9%BB%91%E5%B9%95%E5%92%8C%E6%BD%9C%E8%A7%84%E5%88%99%23) `134.0K 🔥` `NEW`
1. [朋友圈这样发涉嫌违法 (It is illegal to post in Moments like this)](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%BF%99%E6%A0%B7%E5%8F%91%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `125.6K 🔥` `NEW`
1. [周润发张国荣纵横四海定档](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B6%A6%E5%8F%91%E5%BC%A0%E5%9B%BD%E8%8D%A3%E7%BA%B5%E6%A8%AA%E5%9B%9B%E6%B5%B7%E5%AE%9A%E6%A1%A3%23) `125.6K 🔥` `NEW`
1. [邓凯孔雪儿路透](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E5%AD%94%E9%9B%AA%E5%84%BF%E8%B7%AF%E9%80%8F%23) `125.2K 🔥` `NEW`
1. [圆明园被劫掠文物或有望回中国](https://s.weibo.com/weibo?q=%23%E5%9C%86%E6%98%8E%E5%9B%AD%E8%A2%AB%E5%8A%AB%E6%8E%A0%E6%96%87%E7%89%A9%E6%88%96%E6%9C%89%E6%9C%9B%E5%9B%9E%E4%B8%AD%E5%9B%BD%23) `124.9K 🔥` `NEW`
1. [沃尔沃费总裁系列叕上新了](https://s.weibo.com/weibo?q=%23%E6%B2%83%E5%B0%94%E6%B2%83%E8%B4%B9%E6%80%BB%E8%A3%81%E7%B3%BB%E5%88%97%E5%8F%95%E4%B8%8A%E6%96%B0%E4%BA%86%23) `124.5K 🔥` `NEW`
1. [警方通报骑车遭开门杀被碾压身亡](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E9%AA%91%E8%BD%A6%E9%81%AD%E5%BC%80%E9%97%A8%E6%9D%80%E8%A2%AB%E7%A2%BE%E5%8E%8B%E8%BA%AB%E4%BA%A1%23) `124.2K 🔥` `NEW`
1. [外籍人员境内违规捕蝶被钓鱼者识破](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E4%BA%BA%E5%91%98%E5%A2%83%E5%86%85%E8%BF%9D%E8%A7%84%E6%8D%95%E8%9D%B6%E8%A2%AB%E9%92%93%E9%B1%BC%E8%80%85%E8%AF%86%E7%A0%B4%23) `124.0K 🔥` `NEW`
1. [王子杰好友发文悼念](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E6%9D%B0%E5%A5%BD%E5%8F%8B%E5%8F%91%E6%96%87%E6%82%BC%E5%BF%B5%23) `123.9K 🔥` `NEW`
1. [KPOP四大社将合作成立公司](https://s.weibo.com/weibo?q=%23KPOP%E5%9B%9B%E5%A4%A7%E7%A4%BE%E5%B0%86%E5%90%88%E4%BD%9C%E6%88%90%E7%AB%8B%E5%85%AC%E5%8F%B8%23) `117.2K 🔥` `NEW`
1. [外籍乘客对着营区拍照被司机送进部队](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E4%B9%98%E5%AE%A2%E5%AF%B9%E7%9D%80%E8%90%A5%E5%8C%BA%E6%8B%8D%E7%85%A7%E8%A2%AB%E5%8F%B8%E6%9C%BA%E9%80%81%E8%BF%9B%E9%83%A8%E9%98%9F%23) `104.2K 🔥` `NEW`
1. [鹤男粉丝脱粉 (Henan fans lose their fans)](https://s.weibo.com/weibo?q=%23%E9%B9%A4%E7%94%B7%E7%B2%89%E4%B8%9D%E8%84%B1%E7%B2%89%23) `104.0K 🔥` `NEW`
1. [陈律曝刘聪三个月借了自己50万](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BE%8B%E6%9B%9D%E5%88%98%E8%81%AA%E4%B8%89%E4%B8%AA%E6%9C%88%E5%80%9F%E4%BA%86%E8%87%AA%E5%B7%B150%E4%B8%87%23) `99.8K 🔥` `NEW`
1. [小伙快递被同事误拆群里发文后被辞](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%BF%AB%E9%80%92%E8%A2%AB%E5%90%8C%E4%BA%8B%E8%AF%AF%E6%8B%86%E7%BE%A4%E9%87%8C%E5%8F%91%E6%96%87%E5%90%8E%E8%A2%AB%E8%BE%9E%23) `92.2K 🔥` `NEW`
1. [边牧路边等主人却被无故打碎骨头](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E7%89%A7%E8%B7%AF%E8%BE%B9%E7%AD%89%E4%B8%BB%E4%BA%BA%E5%8D%B4%E8%A2%AB%E6%97%A0%E6%95%85%E6%89%93%E7%A2%8E%E9%AA%A8%E5%A4%B4%23) `91.8K 🔥` `NEW`
1. [某地光伏下乡变毁房陷阱](https://s.weibo.com/weibo?q=%23%E6%9F%90%E5%9C%B0%E5%85%89%E4%BC%8F%E4%B8%8B%E4%B9%A1%E5%8F%98%E6%AF%81%E6%88%BF%E9%99%B7%E9%98%B1%23) `91.7K 🔥` `NEW`
1. [光遇](https://s.weibo.com/weibo?q=%23%E5%85%89%E9%81%87%23) `91.7K 🔥` `NEW`
1. [间谍外逃被一村民拦下](https://s.weibo.com/weibo?q=%23%E9%97%B4%E8%B0%8D%E5%A4%96%E9%80%83%E8%A2%AB%E4%B8%80%E6%9D%91%E6%B0%91%E6%8B%A6%E4%B8%8B%23) `87.2K 🔥` `NEW`
1. [爱心公众孙颖莎](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%BF%83%E5%85%AC%E4%BC%97%E5%AD%99%E9%A2%96%E8%8E%8E%23) `81.6K 🔥` `NEW`
1. [武汉市原市长周先旺被起诉](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%B8%82%E5%8E%9F%E5%B8%82%E9%95%BF%E5%91%A8%E5%85%88%E6%97%BA%E8%A2%AB%E8%B5%B7%E8%AF%89%23) `78.8K 🔥` `NEW`
1. [徐洁儿看到自己一公倒数第一的反应](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E7%9C%8B%E5%88%B0%E8%87%AA%E5%B7%B1%E4%B8%80%E5%85%AC%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%E7%9A%84%E5%8F%8D%E5%BA%94%23) `75.9K 🔥` `NEW`
1. [四渡定档 (Sidu scheduled)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E6%B8%A1%E5%AE%9A%E6%A1%A3%23) `72.9K 🔥` `NEW`
1. [小米18Pro屏幕参数曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E5%B1%8F%E5%B9%95%E5%8F%82%E6%95%B0%E6%9B%9D%E5%85%89%23) `72.9K 🔥` `NEW`
1. [4月16日埃安N60新品时尚大秀 (Aian N60 new product fashion show on April 16th)](https://s.weibo.com/weibo?q=%234%E6%9C%8816%E6%97%A5%E5%9F%83%E5%AE%89N60%E6%96%B0%E5%93%81%E6%97%B6%E5%B0%9A%E5%A4%A7%E7%A7%80%23) `520.9K 🔥` `+146%`
1. [曝鹤男年龄造假](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%B9%A4%E7%94%B7%E5%B9%B4%E9%BE%84%E9%80%A0%E5%81%87%23) `181.9K 🔥` `+25%`
1. [建议大家自己做饭](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%87%AA%E5%B7%B1%E5%81%9A%E9%A5%AD%23) `151.2K 🔥` `+34%`
1. [河南一景区露脚踝大象系演员扮演](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%80%E6%99%AF%E5%8C%BA%E9%9C%B2%E8%84%9A%E8%B8%9D%E5%A4%A7%E8%B1%A1%E7%B3%BB%E6%BC%94%E5%91%98%E6%89%AE%E6%BC%94%23) `777.0K 🔥`
1. [伊朗总统感谢中国](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23) `153.0K 🔥`
1. [越吃越胖素菜名单](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%90%83%E8%B6%8A%E8%83%96%E7%B4%A0%E8%8F%9C%E5%90%8D%E5%8D%95%23) `135.7K 🔥`
1. [吴向飞发李荣浩相关情况说明](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%90%91%E9%A3%9E%E5%8F%91%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9B%B8%E5%85%B3%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E%23) `92.0K 🔥`
1. [法国将不义之财归还被抢掠的中国 (France returns ill-gotten gains to plundered China)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%B0%86%E4%B8%8D%E4%B9%89%E4%B9%8B%E8%B4%A2%E5%BD%92%E8%BF%98%E8%A2%AB%E6%8A%A2%E6%8E%A0%E7%9A%84%E4%B8%AD%E5%9B%BD%23) `84.0K 🔥` `-78%`
1. [迪丽热巴白日提灯全集有广](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%85%A8%E9%9B%86%E6%9C%89%E5%B9%BF%23) `72.8K 🔥` `-25%`

Updated at 2026-04-16 12:25:30

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
