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

1. [西藏泥石流265人失联3人遇难 (265 people missing, 3 killed in mudslide in Tibet)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81265%E4%BA%BA%E5%A4%B1%E8%81%943%E4%BA%BA%E9%81%87%E9%9A%BE%23) `8.2M 🔥` `NEW`
1. [早春晴朗口碑](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%8F%A3%E7%A2%91%23) `1.6M 🔥` `NEW`
1. [未来五年加快打造新兴支柱产业](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E4%BA%94%E5%B9%B4%E5%8A%A0%E5%BF%AB%E6%89%93%E9%80%A0%E6%96%B0%E5%85%B4%E6%94%AF%E6%9F%B1%E4%BA%A7%E4%B8%9A%23) `1.2M 🔥` `NEW`
1. [台湾童星徐杰去世](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E7%AB%A5%E6%98%9F%E5%BE%90%E6%9D%B0%E5%8E%BB%E4%B8%96%23) `1.2M 🔥` `NEW`
1. [学费被家长充错成话费了](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E8%B4%B9%E8%A2%AB%E5%AE%B6%E9%95%BF%E5%85%85%E9%94%99%E6%88%90%E8%AF%9D%E8%B4%B9%E4%BA%86%23) `633.6K 🔥` `NEW`
1. [男频和女频的区别](https://s.weibo.com/weibo?q=%23%E7%94%B7%E9%A2%91%E5%92%8C%E5%A5%B3%E9%A2%91%E7%9A%84%E5%8C%BA%E5%88%AB%23) `557.6K 🔥` `NEW`
1. [西藏泥石流救援现场](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E6%95%91%E6%8F%B4%E7%8E%B0%E5%9C%BA%23) `457.4K 🔥` `NEW`
1. [年轻人不会被电诈的原因](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%8D%E4%BC%9A%E8%A2%AB%E7%94%B5%E8%AF%88%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `457.2K 🔥` `NEW`
1. [惠英红回应郭晓婷长得像](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E5%9B%9E%E5%BA%94%E9%83%AD%E6%99%93%E5%A9%B7%E9%95%BF%E5%BE%97%E5%83%8F%23) `456.3K 🔥` `NEW`
1. [尼泊尔北部山洪致近400人失联](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%8C%97%E9%83%A8%E5%B1%B1%E6%B4%AA%E8%87%B4%E8%BF%91400%E4%BA%BA%E5%A4%B1%E8%81%94%23) `455.7K 🔥` `NEW`
1. [Gucci官旗给宁艺卓P了裤子 (Gucci official flag gave Ning Yizhuo P pants)](https://s.weibo.com/weibo?q=%23Gucci%E5%AE%98%E6%97%97%E7%BB%99%E5%AE%81%E8%89%BA%E5%8D%93P%E4%BA%86%E8%A3%A4%E5%AD%90%23) `455.0K 🔥` `NEW`
1. [成毅用工作人员肩膀压腿](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%94%A8%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E8%82%A9%E8%86%80%E5%8E%8B%E8%85%BF%23) `454.4K 🔥` `NEW`
1. [吉隆口岸](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%23) `453.4K 🔥` `NEW`
1. [中国游客泥石流逃生朋友失联](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E6%B3%A5%E7%9F%B3%E6%B5%81%E9%80%83%E7%94%9F%E6%9C%8B%E5%8F%8B%E5%A4%B1%E8%81%94%23) `453.0K 🔥` `NEW`
1. [侯卓成起诉王垲智](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E8%B5%B7%E8%AF%89%E7%8E%8B%E5%9E%B2%E6%99%BA%23) `357.3K 🔥` `NEW`
1. [西部战区空军派无人机赴吉隆勘察](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E9%83%A8%E6%88%98%E5%8C%BA%E7%A9%BA%E5%86%9B%E6%B4%BE%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%B5%B4%E5%90%89%E9%9A%86%E5%8B%98%E5%AF%9F%23) `311.1K 🔥` `NEW`
1. [尼泊尔山洪遇难人数升至72人](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E9%81%87%E9%9A%BE%E4%BA%BA%E6%95%B0%E5%8D%87%E8%87%B372%E4%BA%BA%23) `246.1K 🔥` `NEW`
1. [安踏前CEO前脚说爱国扭头搬家美国](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8F%E5%89%8DCEO%E5%89%8D%E8%84%9A%E8%AF%B4%E7%88%B1%E5%9B%BD%E6%89%AD%E5%A4%B4%E6%90%AC%E5%AE%B6%E7%BE%8E%E5%9B%BD%23) `246.1K 🔥` `NEW`
1. [特斯拉中国报警](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E4%B8%AD%E5%9B%BD%E6%8A%A5%E8%AD%A6%23) `246.0K 🔥` `NEW`
1. [俄罗斯火灾致中国公民6死9失联](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%81%AB%E7%81%BE%E8%87%B4%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%916%E6%AD%BB9%E5%A4%B1%E8%81%94%23) `246.0K 🔥` `NEW`
1. [包文婧曾说再信包贝尔一次 (Bao Wenjing once said that she would trust Bao Beier again)](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E6%9B%BE%E8%AF%B4%E5%86%8D%E4%BF%A1%E5%8C%85%E8%B4%9D%E5%B0%94%E4%B8%80%E6%AC%A1%23) `246.0K 🔥` `NEW`
1. [小天才还要逼疯多少家长](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%A9%E6%89%8D%E8%BF%98%E8%A6%81%E9%80%BC%E7%96%AF%E5%A4%9A%E5%B0%91%E5%AE%B6%E9%95%BF%23) `245.9K 🔥` `NEW`
1. [侯卓成说亏欠杨汝晴](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E8%AF%B4%E4%BA%8F%E6%AC%A0%E6%9D%A8%E6%B1%9D%E6%99%B4%23) `245.9K 🔥` `NEW`
1. [章子怡短发狼尾](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E7%9F%AD%E5%8F%91%E7%8B%BC%E5%B0%BE%23) `245.8K 🔥` `NEW`
1. [磁场干净的人有奶香味](https://s.weibo.com/weibo?q=%23%E7%A3%81%E5%9C%BA%E5%B9%B2%E5%87%80%E7%9A%84%E4%BA%BA%E6%9C%89%E5%A5%B6%E9%A6%99%E5%91%B3%23) `245.8K 🔥` `NEW`
1. [包贝尔内娱第一位许愿柳使用者](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%86%85%E5%A8%B1%E7%AC%AC%E4%B8%80%E4%BD%8D%E8%AE%B8%E6%84%BF%E6%9F%B3%E4%BD%BF%E7%94%A8%E8%80%85%23) `245.8K 🔥` `NEW`
1. [爱情公寓官方换头像](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%AE%98%E6%96%B9%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `245.8K 🔥` `NEW`
1. [尼泊尔方面找到97具山洪遇难者遗体](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E6%96%B9%E9%9D%A2%E6%89%BE%E5%88%B097%E5%85%B7%E5%B1%B1%E6%B4%AA%E9%81%87%E9%9A%BE%E8%80%85%E9%81%97%E4%BD%93%23) `245.7K 🔥` `NEW`
1. [欢子搞错被告了](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E6%90%9E%E9%94%99%E8%A2%AB%E5%91%8A%E4%BA%86%23) `244.7K 🔥` `NEW`
1. [黄金价格持续上涨](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%BB%B7%E6%A0%BC%E6%8C%81%E7%BB%AD%E4%B8%8A%E6%B6%A8%23) `243.5K 🔥` `NEW`
1. [麦迪娜减肥的方法太狠了 (Medina’s method of losing weight is too ruthless)](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E8%BF%AA%E5%A8%9C%E5%87%8F%E8%82%A5%E7%9A%84%E6%96%B9%E6%B3%95%E5%A4%AA%E7%8B%A0%E4%BA%86%23) `240.4K 🔥` `NEW`
1. [千万不要把秘密留在行李箱](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E7%A7%98%E5%AF%86%E7%95%99%E5%9C%A8%E8%A1%8C%E6%9D%8E%E7%AE%B1%23) `238.1K 🔥` `NEW`
1. [包文婧曾找赵奕欢当面对峙](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E6%9B%BE%E6%89%BE%E8%B5%B5%E5%A5%95%E6%AC%A2%E5%BD%93%E9%9D%A2%E5%AF%B9%E5%B3%99%23) `237.7K 🔥` `NEW`
1. [欢子起诉湖南卫视](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E8%B5%B7%E8%AF%89%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%23) `236.2K 🔥` `NEW`
1. [原配称想不通第三者比自己大10岁](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E9%85%8D%E7%A7%B0%E6%83%B3%E4%B8%8D%E9%80%9A%E7%AC%AC%E4%B8%89%E8%80%85%E6%AF%94%E8%87%AA%E5%B7%B1%E5%A4%A710%E5%B2%81%23) `231.1K 🔥` `NEW`
1. [警方通报女骑手高速狂飙时速超200公里](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E9%AA%91%E6%89%8B%E9%AB%98%E9%80%9F%E7%8B%82%E9%A3%99%E6%97%B6%E9%80%9F%E8%B6%85200%E5%85%AC%E9%87%8C%23) `210.3K 🔥` `NEW`
1. [现在就出发](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `209.3K 🔥` `NEW`
1. [吉隆口岸仍处于失联状态](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E4%BB%8D%E5%A4%84%E4%BA%8E%E5%A4%B1%E8%81%94%E7%8A%B6%E6%80%81%23) `208.7K 🔥` `NEW`
1. [社保有多厉害可能超乎你的想象](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%E5%8F%AF%E8%83%BD%E8%B6%85%E4%B9%8E%E4%BD%A0%E7%9A%84%E6%83%B3%E8%B1%A1%23) `193.1K 🔥` `NEW`
1. [娜扎演技 进步](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E6%BC%94%E6%8A%80%20%E8%BF%9B%E6%AD%A5%23) `189.6K 🔥` `NEW`
1. [宋雨琦肿成蜜蜂小狗 (Song Yuqi swelled into a bee puppy)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%82%BF%E6%88%90%E8%9C%9C%E8%9C%82%E5%B0%8F%E7%8B%97%23) `186.6K 🔥` `NEW`
1. [婚礼41天丧夫女子被赶出婆家](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%A4%BC41%E5%A4%A9%E4%B8%A7%E5%A4%AB%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%B5%B6%E5%87%BA%E5%A9%86%E5%AE%B6%23) `168.8K 🔥` `NEW`
1. [王安宇晒与贾冰白敬亭合照放C位](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%99%92%E4%B8%8E%E8%B4%BE%E5%86%B0%E7%99%BD%E6%95%AC%E4%BA%AD%E5%90%88%E7%85%A7%E6%94%BEC%E4%BD%8D%23) `159.5K 🔥` `NEW`
1. [DYG周边 贵](https://s.weibo.com/weibo?q=%23DYG%E5%91%A8%E8%BE%B9%20%E8%B4%B5%23) `154.3K 🔥` `NEW`
1. [这竟然是冯绍峰](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%AB%9F%E7%84%B6%E6%98%AF%E5%86%AF%E7%BB%8D%E5%B3%B0%23) `145.1K 🔥` `NEW`
1. [尼泊尔失联外国游客多数来自印度](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%A4%B1%E8%81%94%E5%A4%96%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%A4%9A%E6%95%B0%E6%9D%A5%E8%87%AA%E5%8D%B0%E5%BA%A6%23) `141.9K 🔥` `NEW`
1. [老凤祥业绩](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%87%A4%E7%A5%A5%E4%B8%9A%E7%BB%A9%23) `141.0K 🔥` `NEW`
1. [宁静力挺湖南卫视](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E5%8A%9B%E6%8C%BA%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%23) `136.7K 🔥` `NEW`
1. [网友曝瑞幸联名方曾将台湾列为国家](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%9B%9D%E7%91%9E%E5%B9%B8%E8%81%94%E5%90%8D%E6%96%B9%E6%9B%BE%E5%B0%86%E5%8F%B0%E6%B9%BE%E5%88%97%E4%B8%BA%E5%9B%BD%E5%AE%B6%23) `130.8K 🔥` `NEW`

Updated at 2026-08-27 00:23:51

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
