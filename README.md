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

1. [遭割喉男孩还有一段气管没找到 (The boy whose throat was cut still had a piece of trachea that was not found)](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%89%B2%E5%96%89%E7%94%B7%E5%AD%A9%E8%BF%98%E6%9C%89%E4%B8%80%E6%AE%B5%E6%B0%94%E7%AE%A1%E6%B2%A1%E6%89%BE%E5%88%B0%23) `1.1M 🔥` `NEW`
1. [中国式现代化万千气象看江西](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%8F%E7%8E%B0%E4%BB%A3%E5%8C%96%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E6%B1%9F%E8%A5%BF%23) `651.7K 🔥` `NEW`
1. [逆天邪神年番开播](https://s.weibo.com/weibo?q=%23%E9%80%86%E5%A4%A9%E9%82%AA%E7%A5%9E%E5%B9%B4%E7%95%AA%E5%BC%80%E6%92%AD%23) `619.3K 🔥` `NEW`
1. [曾沛慈 汪东城](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E6%B1%AA%E4%B8%9C%E5%9F%8E%23) `612.1K 🔥` `NEW`
1. [警方回应泼水节多人向车内喷水](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B3%BC%E6%B0%B4%E8%8A%82%E5%A4%9A%E4%BA%BA%E5%90%91%E8%BD%A6%E5%86%85%E5%96%B7%E6%B0%B4%23) `262.1K 🔥` `NEW`
1. [张伦硕 还是想要一个自己的孩子](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%A6%E7%A1%95%20%E8%BF%98%E6%98%AF%E6%83%B3%E8%A6%81%E4%B8%80%E4%B8%AA%E8%87%AA%E5%B7%B1%E7%9A%84%E5%AD%A9%E5%AD%90%23) `256.8K 🔥` `NEW`
1. [创作官次元产粮局](https://s.weibo.com/weibo?q=%23%E5%88%9B%E4%BD%9C%E5%AE%98%E6%AC%A1%E5%85%83%E4%BA%A7%E7%B2%AE%E5%B1%80%23) `248.0K 🔥` `NEW`
1. [心源性疾病](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%BA%90%E6%80%A7%E7%96%BE%E7%97%85%23) `226.2K 🔥` `NEW`
1. [勇士淘汰快船](https://s.weibo.com/weibo?q=%23%E5%8B%87%E5%A3%AB%E6%B7%98%E6%B1%B0%E5%BF%AB%E8%88%B9%23) `201.4K 🔥` `NEW`
1. [男子伸咸猪手被女老板扇飞眼镜](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BC%B8%E5%92%B8%E7%8C%AA%E6%89%8B%E8%A2%AB%E5%A5%B3%E8%80%81%E6%9D%BF%E6%89%87%E9%A3%9E%E7%9C%BC%E9%95%9C%23) `158.3K 🔥` `NEW`
1. [唐禹哲自首出发图 (Tang Yuzhe surrenders and sets off)](https://s.weibo.com/weibo?q=%23%E5%94%90%E7%A6%B9%E5%93%B2%E8%87%AA%E9%A6%96%E5%87%BA%E5%8F%91%E5%9B%BE%23) `155.9K 🔥` `NEW`
1. [曝王子杰去世系工伤](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%AD%90%E6%9D%B0%E5%8E%BB%E4%B8%96%E7%B3%BB%E5%B7%A5%E4%BC%A4%23) `152.9K 🔥` `NEW`
1. [伊朗首都突发炸弹袭击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E7%AA%81%E5%8F%91%E7%82%B8%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `150.9K 🔥` `NEW`
1. [小米18Pro新增AI按键](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E6%96%B0%E5%A2%9EAI%E6%8C%89%E9%94%AE%23) `149.3K 🔥` `NEW`
1. [退役军人投靠间谍自导自演举报被查](https://s.weibo.com/weibo?q=%23%E9%80%80%E5%BD%B9%E5%86%9B%E4%BA%BA%E6%8A%95%E9%9D%A0%E9%97%B4%E8%B0%8D%E8%87%AA%E5%AF%BC%E8%87%AA%E6%BC%94%E4%B8%BE%E6%8A%A5%E8%A2%AB%E6%9F%A5%23) `148.6K 🔥` `NEW`
1. [美民主党弹劾防长赫格塞思](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%B0%91%E4%B8%BB%E5%85%9A%E5%BC%B9%E5%8A%BE%E9%98%B2%E9%95%BF%E8%B5%AB%E6%A0%BC%E5%A1%9E%E6%80%9D%23) `147.2K 🔥` `NEW`
1. [在春日宁波遇见光影中国](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%98%A5%E6%97%A5%E5%AE%81%E6%B3%A2%E9%81%87%E8%A7%81%E5%85%89%E5%BD%B1%E4%B8%AD%E5%9B%BD%23) `145.3K 🔥` `NEW`
1. [朱珠把外卖袋拎成秀场了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E6%8A%8A%E5%A4%96%E5%8D%96%E8%A2%8B%E6%8B%8E%E6%88%90%E7%A7%80%E5%9C%BA%E4%BA%86%23) `144.2K 🔥` `NEW`
1. [男子拍大量视频照片记录迷奸女友](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%8D%E5%A4%A7%E9%87%8F%E8%A7%86%E9%A2%91%E7%85%A7%E7%89%87%E8%AE%B0%E5%BD%95%E8%BF%B7%E5%A5%B8%E5%A5%B3%E5%8F%8B%23) `142.8K 🔥` `NEW`
1. [鞠婧祎应援会声明](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%BA%94%E6%8F%B4%E4%BC%9A%E5%A3%B0%E6%98%8E%23) `142.6K 🔥` `NEW`
1. [陈瑶还原张显宗我牙疼 (Chen Yao restores Zhang Xianzong, I have a toothache)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E8%BF%98%E5%8E%9F%E5%BC%A0%E6%98%BE%E5%AE%97%E6%88%91%E7%89%99%E7%96%BC%23) `141.3K 🔥` `NEW`
1. [印19岁男子涉诱奸180名少女拍视频](https://s.weibo.com/weibo?q=%23%E5%8D%B019%E5%B2%81%E7%94%B7%E5%AD%90%E6%B6%89%E8%AF%B1%E5%A5%B8180%E5%90%8D%E5%B0%91%E5%A5%B3%E6%8B%8D%E8%A7%86%E9%A2%91%23) `140.4K 🔥` `NEW`
1. [SNH48公式照也变黑白](https://s.weibo.com/weibo?q=%23SNH48%E5%85%AC%E5%BC%8F%E7%85%A7%E4%B9%9F%E5%8F%98%E9%BB%91%E7%99%BD%23) `129.4K 🔥` `NEW`
1. [库里就是三分的神](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E5%B0%B1%E6%98%AF%E4%B8%89%E5%88%86%E7%9A%84%E7%A5%9E%23) `118.6K 🔥` `NEW`
1. [曝花三三被榜一大哥起诉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%8A%B1%E4%B8%89%E4%B8%89%E8%A2%AB%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E8%B5%B7%E8%AF%89%23) `114.0K 🔥` `NEW`
1. [日本11岁男童失踪20余天惊人反转](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC11%E5%B2%81%E7%94%B7%E7%AB%A5%E5%A4%B1%E8%B8%AA20%E4%BD%99%E5%A4%A9%E6%83%8A%E4%BA%BA%E5%8F%8D%E8%BD%AC%23) `109.3K 🔥` `NEW`
1. [唐艺昕陶昕然cos祺贵人安小鸟](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E9%99%B6%E6%98%95%E7%84%B6cos%E7%A5%BA%E8%B4%B5%E4%BA%BA%E5%AE%89%E5%B0%8F%E9%B8%9F%23) `107.7K 🔥` `NEW`
1. [王子杰去世正值鞠婧祎官司关键期](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E6%9D%B0%E5%8E%BB%E4%B8%96%E6%AD%A3%E5%80%BC%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%AE%98%E5%8F%B8%E5%85%B3%E9%94%AE%E6%9C%9F%23) `106.6K 🔥` `NEW`
1. [孙杨张豆豆差点引起家庭矛盾](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E5%B7%AE%E7%82%B9%E5%BC%95%E8%B5%B7%E5%AE%B6%E5%BA%AD%E7%9F%9B%E7%9B%BE%23) `99.6K 🔥` `NEW`
1. [于正又夸赵晴好看了](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%8F%88%E5%A4%B8%E8%B5%B5%E6%99%B4%E5%A5%BD%E7%9C%8B%E4%BA%86%23) `93.2K 🔥` `NEW`
1. [63岁退休老人教同龄人用AI (A 63-year-old retired man teaches his peers how to use AI)](https://s.weibo.com/weibo?q=%2363%E5%B2%81%E9%80%80%E4%BC%91%E8%80%81%E4%BA%BA%E6%95%99%E5%90%8C%E9%BE%84%E4%BA%BA%E7%94%A8AI%23) `91.8K 🔥` `NEW`
1. [无限暖暖](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%99%90%E6%9A%96%E6%9A%96%23) `90.4K 🔥` `NEW`
1. [徐洁儿浪姐从第一到一般太虐了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E6%B5%AA%E5%A7%90%E4%BB%8E%E7%AC%AC%E4%B8%80%E5%88%B0%E4%B8%80%E8%88%AC%E5%A4%AA%E8%99%90%E4%BA%86%23) `87.3K 🔥` `NEW`
1. [孙怡乘风时光机造型是黎璃](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E4%B9%98%E9%A3%8E%E6%97%B6%E5%85%89%E6%9C%BA%E9%80%A0%E5%9E%8B%E6%98%AF%E9%BB%8E%E7%92%83%23) `81.4K 🔥` `NEW`
1. [习惯性吃撑](https://s.weibo.com/weibo?q=%23%E4%B9%A0%E6%83%AF%E6%80%A7%E5%90%83%E6%92%91%23) `74.1K 🔥` `NEW`
1. [A股半日缩量1222亿](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E6%97%A5%E7%BC%A9%E9%87%8F1222%E4%BA%BF%23) `73.5K 🔥` `NEW`
1. [狗被吊死宠物医院门店数量超50家](https://s.weibo.com/weibo?q=%23%E7%8B%97%E8%A2%AB%E5%90%8A%E6%AD%BB%E5%AE%A0%E7%89%A9%E5%8C%BB%E9%99%A2%E9%97%A8%E5%BA%97%E6%95%B0%E9%87%8F%E8%B6%8550%E5%AE%B6%23) `71.3K 🔥` `NEW`
1. [40岁霍福德三分投疯了](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E9%9C%8D%E7%A6%8F%E5%BE%B7%E4%B8%89%E5%88%86%E6%8A%95%E7%96%AF%E4%BA%86%23) `67.3K 🔥` `NEW`
1. [丝芭头像已变黑白](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%E5%A4%B4%E5%83%8F%E5%B7%B2%E5%8F%98%E9%BB%91%E7%99%BD%23) `65.9K 🔥` `NEW`
1. [医院测出智障高三学生再发声](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E6%B5%8B%E5%87%BA%E6%99%BA%E9%9A%9C%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E5%86%8D%E5%8F%91%E5%A3%B0%23) `793.0K 🔥` `+235%`
1. [外籍乘客对着营区拍照被司机送进部队 (Foreign passengers took photos of the camp and were sent to the army by the driver)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E4%B9%98%E5%AE%A2%E5%AF%B9%E7%9D%80%E8%90%A5%E5%8C%BA%E6%8B%8D%E7%85%A7%E8%A2%AB%E5%8F%B8%E6%9C%BA%E9%80%81%E8%BF%9B%E9%83%A8%E9%98%9F%23) `186.7K 🔥` `+79%`
1. [光遇](https://s.weibo.com/weibo?q=%23%E5%85%89%E9%81%87%23) `155.8K 🔥` `+70%`
1. [陈律曝刘聪三个月借了自己50万](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BE%8B%E6%9B%9D%E5%88%98%E8%81%AA%E4%B8%89%E4%B8%AA%E6%9C%88%E5%80%9F%E4%BA%86%E8%87%AA%E5%B7%B150%E4%B8%87%23) `130.5K 🔥` `+31%`
1. [朋友圈这样发涉嫌违法 (It is illegal to post in Moments like this)](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%BF%99%E6%A0%B7%E5%8F%91%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `105.0K 🔥`
1. [小米18Pro屏幕参数曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Pro%E5%B1%8F%E5%B9%95%E5%8F%82%E6%95%B0%E6%9B%9D%E5%85%89%23) `65.9K 🔥`
1. [向华强女儿说向太拿烟头烫她 (Xiang Huaqiang’s daughter said that Mrs. Xiang burned her with a cigarette butt)](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%8D%8E%E5%BC%BA%E5%A5%B3%E5%84%BF%E8%AF%B4%E5%90%91%E5%A4%AA%E6%8B%BF%E7%83%9F%E5%A4%B4%E7%83%AB%E5%A5%B9%23) `158.1K 🔥` `-35%`
1. [全国工程建设小阳春](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%B7%A5%E7%A8%8B%E5%BB%BA%E8%AE%BE%E5%B0%8F%E9%98%B3%E6%98%A5%23) `153.6K 🔥` `-75%`
1. [赵子琪为上浪姐下了血本](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E4%B8%BA%E4%B8%8A%E6%B5%AA%E5%A7%90%E4%B8%8B%E4%BA%86%E8%A1%80%E6%9C%AC%23) `151.4K 🔥` `-71%`
1. [小黄豆自曝在泼水节被喷未知液体](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86%E8%87%AA%E6%9B%9D%E5%9C%A8%E6%B3%BC%E6%B0%B4%E8%8A%82%E8%A2%AB%E5%96%B7%E6%9C%AA%E7%9F%A5%E6%B6%B2%E4%BD%93%23) `116.0K 🔥` `-52%`
1. [小狗叼东西证明自己不咬人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%8F%BC%E4%B8%9C%E8%A5%BF%E8%AF%81%E6%98%8E%E8%87%AA%E5%B7%B1%E4%B8%8D%E5%92%AC%E4%BA%BA%23) `104.0K 🔥` `-59%`
1. [医生回应35岁孕妇吃冰箱剩菜后去世](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%9435%E5%B2%81%E5%AD%95%E5%A6%87%E5%90%83%E5%86%B0%E7%AE%B1%E5%89%A9%E8%8F%9C%E5%90%8E%E5%8E%BB%E4%B8%96%23) `90.4K 🔥` `-91%`
1. [易烊千玺 华为](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E5%8D%8E%E4%B8%BA%23) `73.9K 🔥` `-63%`

Updated at 2026-04-16 14:19:15

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
