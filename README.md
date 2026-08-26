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

1. [西藏泥石流265人失联3人遇难 (265 people missing, 3 killed in mudslide in Tibet)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81265%E4%BA%BA%E5%A4%B1%E8%81%943%E4%BA%BA%E9%81%87%E9%9A%BE%23) `1.8M 🔥` `NEW`
1. [台湾童星徐杰去世](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E7%AB%A5%E6%98%9F%E5%BE%90%E6%9D%B0%E5%8E%BB%E4%B8%96%23) `1.8M 🔥` `NEW`
1. [学费被家长充错成话费了](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E8%B4%B9%E8%A2%AB%E5%AE%B6%E9%95%BF%E5%85%85%E9%94%99%E6%88%90%E8%AF%9D%E8%B4%B9%E4%BA%86%23) `903.0K 🔥` `NEW`
1. [索赔1.9万老人家属报警要求追责](https://s.weibo.com/weibo?q=%23%E7%B4%A2%E8%B5%941.9%E4%B8%87%E8%80%81%E4%BA%BA%E5%AE%B6%E5%B1%9E%E6%8A%A5%E8%AD%A6%E8%A6%81%E6%B1%82%E8%BF%BD%E8%B4%A3%23) `846.9K 🔥` `NEW`
1. [现在就出发](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `816.2K 🔥` `NEW`
1. [宗馥莉汽水铺直播98场仅卖10万元](https://s.weibo.com/weibo?q=%23%E5%AE%97%E9%A6%A5%E8%8E%89%E6%B1%BD%E6%B0%B4%E9%93%BA%E7%9B%B4%E6%92%AD98%E5%9C%BA%E4%BB%85%E5%8D%9610%E4%B8%87%E5%85%83%23) `445.0K 🔥` `NEW`
1. [张极免检生图](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9E%81%E5%85%8D%E6%A3%80%E7%94%9F%E5%9B%BE%23) `420.8K 🔥` `NEW`
1. [吉隆口岸仍处于失联状态](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E4%BB%8D%E5%A4%84%E4%BA%8E%E5%A4%B1%E8%81%94%E7%8A%B6%E6%80%81%23) `370.6K 🔥` `NEW`
1. [黄金价格持续上涨](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%BB%B7%E6%A0%BC%E6%8C%81%E7%BB%AD%E4%B8%8A%E6%B6%A8%23) `359.5K 🔥` `NEW`
1. [和吴克群一起解锁稳稳的幸福](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%90%B4%E5%85%8B%E7%BE%A4%E4%B8%80%E8%B5%B7%E8%A7%A3%E9%94%81%E7%A8%B3%E7%A8%B3%E7%9A%84%E5%B9%B8%E7%A6%8F%23) `358.4K 🔥` `NEW`
1. [网友给奥运冠军刘翔做职业规划 (Netizens give Olympic champion Liu Xiang career planning)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%BB%99%E5%A5%A5%E8%BF%90%E5%86%A0%E5%86%9B%E5%88%98%E7%BF%94%E5%81%9A%E8%81%8C%E4%B8%9A%E8%A7%84%E5%88%92%23) `358.3K 🔥` `NEW`
1. [宗馥莉旗下啵啵汽水铺销售遇冷](https://s.weibo.com/weibo?q=%23%E5%AE%97%E9%A6%A5%E8%8E%89%E6%97%97%E4%B8%8B%E5%95%B5%E5%95%B5%E6%B1%BD%E6%B0%B4%E9%93%BA%E9%94%80%E5%94%AE%E9%81%87%E5%86%B7%23) `338.4K 🔥` `NEW`
1. [西部战区空军派无人机赴吉隆勘察](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E9%83%A8%E6%88%98%E5%8C%BA%E7%A9%BA%E5%86%9B%E6%B4%BE%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%B5%B4%E5%90%89%E9%9A%86%E5%8B%98%E5%AF%9F%23) `302.9K 🔥` `NEW`
1. [泥石流亲历者第一次见女警那么着急](https://s.weibo.com/weibo?q=%23%E6%B3%A5%E7%9F%B3%E6%B5%81%E4%BA%B2%E5%8E%86%E8%80%85%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%A5%B3%E8%AD%A6%E9%82%A3%E4%B9%88%E7%9D%80%E6%80%A5%23) `266.8K 🔥` `NEW`
1. [安踏前CEO前脚说爱国扭头搬家美国](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8F%E5%89%8DCEO%E5%89%8D%E8%84%9A%E8%AF%B4%E7%88%B1%E5%9B%BD%E6%89%AD%E5%A4%B4%E6%90%AC%E5%AE%B6%E7%BE%8E%E5%9B%BD%23) `265.3K 🔥` `NEW`
1. [刘翔遵从本心还是承担责任](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E9%81%B5%E4%BB%8E%E6%9C%AC%E5%BF%83%E8%BF%98%E6%98%AF%E6%89%BF%E6%8B%85%E8%B4%A3%E4%BB%BB%23) `261.6K 🔥` `NEW`
1. [金晨搓澡被认出后社死](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E6%90%93%E6%BE%A1%E8%A2%AB%E8%AE%A4%E5%87%BA%E5%90%8E%E7%A4%BE%E6%AD%BB%23) `228.0K 🔥` `NEW`
1. [特斯拉中国报警](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E4%B8%AD%E5%9B%BD%E6%8A%A5%E8%AD%A6%23) `218.7K 🔥` `NEW`
1. [西藏泥石流救援现场](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%E6%95%91%E6%8F%B4%E7%8E%B0%E5%9C%BA%23) `2.6M 🔥` `+226%`
1. [刘翔如果买断安置费有多少](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%A6%82%E6%9E%9C%E4%B9%B0%E6%96%AD%E5%AE%89%E7%BD%AE%E8%B4%B9%E6%9C%89%E5%A4%9A%E5%B0%91%23) `2.0M 🔥` `+79%`
1. [中国新能源汽车为何能领跑全球 (Why can China’s new energy vehicles lead the world?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E4%B8%BA%E4%BD%95%E8%83%BD%E9%A2%86%E8%B7%91%E5%85%A8%E7%90%83%23) `1.8M 🔥` `+45%`
1. [你的第一个个人机器人](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E4%B8%AA%E4%BA%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `1.8M 🔥` `+119%`
1. [尼泊尔山洪航拍 (Aerial photography of flash floods in Nepal)](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E8%88%AA%E6%8B%8D%23) `993.0K 🔥` `+39%`
1. [吉隆口岸](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%23) `751.5K 🔥` `+50%`
1. [成毅用工作人员肩膀压腿](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%94%A8%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E8%82%A9%E8%86%80%E5%8E%8B%E8%85%BF%23) `816.4K 🔥`
1. [侯卓成起诉王垲智](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E8%B5%B7%E8%AF%89%E7%8E%8B%E5%9E%B2%E6%99%BA%23) `735.0K 🔥`
1. [尼泊尔山洪遇难人数升至72人](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%B1%B1%E6%B4%AA%E9%81%87%E9%9A%BE%E4%BA%BA%E6%95%B0%E5%8D%87%E8%87%B372%E4%BA%BA%23) `455.5K 🔥`
1. [牛来模型确认为智谱GLM系列](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E6%A8%A1%E5%9E%8B%E7%A1%AE%E8%AE%A4%E4%B8%BA%E6%99%BA%E8%B0%B1GLM%E7%B3%BB%E5%88%97%23) `413.9K 🔥`
1. [包文婧曾说再信包贝尔一次](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E6%9B%BE%E8%AF%B4%E5%86%8D%E4%BF%A1%E5%8C%85%E8%B4%9D%E5%B0%94%E4%B8%80%E6%AC%A1%23) `388.1K 🔥`
1. [爱情公寓官方换头像](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%AE%98%E6%96%B9%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `365.2K 🔥`
1. [磁场干净的人有奶香味](https://s.weibo.com/weibo?q=%23%E7%A3%81%E5%9C%BA%E5%B9%B2%E5%87%80%E7%9A%84%E4%BA%BA%E6%9C%89%E5%A5%B6%E9%A6%99%E5%91%B3%23) `364.4K 🔥`
1. [包贝尔内娱第一位许愿柳使用者](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%86%85%E5%A8%B1%E7%AC%AC%E4%B8%80%E4%BD%8D%E8%AE%B8%E6%84%BF%E6%9F%B3%E4%BD%BF%E7%94%A8%E8%80%85%23) `362.9K 🔥`
1. [侯卓成说亏欠杨汝晴](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E8%AF%B4%E4%BA%8F%E6%AC%A0%E6%9D%A8%E6%B1%9D%E6%99%B4%23) `360.6K 🔥`
1. [欢子搞错被告了](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E6%90%9E%E9%94%99%E8%A2%AB%E5%91%8A%E4%BA%86%23) `360.0K 🔥`
1. [包文婧转发区 (Bao Wenjing forwarding area)](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E8%BD%AC%E5%8F%91%E5%8C%BA%23) `359.0K 🔥`
1. [宁静力挺湖南卫视 (Tranquility supports Hunan Satellite TV)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E5%8A%9B%E6%8C%BA%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%23) `341.2K 🔥`
1. [欢子起诉湖南卫视](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E8%B5%B7%E8%AF%89%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%23) `336.5K 🔥`
1. [这竟然是冯绍峰](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%AB%9F%E7%84%B6%E6%98%AF%E5%86%AF%E7%BB%8D%E5%B3%B0%23) `296.8K 🔥`
1. [开胸手术和感染 治好晚期癌症 (Thoracotomy and infection, curing late-stage cancer)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%83%B8%E6%89%8B%E6%9C%AF%E5%92%8C%E6%84%9F%E6%9F%93%20%E6%B2%BB%E5%A5%BD%E6%99%9A%E6%9C%9F%E7%99%8C%E7%97%87%23) `227.0K 🔥`
1. [刘翔年保底收入1400万元 (Liu Xiang’s annual guaranteed income is 14 million yuan)](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%B9%B4%E4%BF%9D%E5%BA%95%E6%94%B6%E5%85%A51400%E4%B8%87%E5%85%83%23) `788.8K 🔥` `-80%`
1. [上海体育局回应刘翔求助 (Shanghai Sports Bureau responds to Liu Xiang’s request for help)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BD%93%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E5%88%98%E7%BF%94%E6%B1%82%E5%8A%A9%23) `763.0K 🔥` `-84%`
1. [尼泊尔北部山洪致近400人失联 (Nearly 400 people missing due to flash floods in northern Nepal)](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E5%8C%97%E9%83%A8%E5%B1%B1%E6%B4%AA%E8%87%B4%E8%BF%91400%E4%BA%BA%E5%A4%B1%E8%81%94%23) `705.4K 🔥` `-42%`
1. [年轻人不会被电诈的原因 (Reasons why young people will not be scammed by phone)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%8D%E4%BC%9A%E8%A2%AB%E7%94%B5%E8%AF%88%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `468.4K 🔥` `-40%`
1. [王安宇晒与贾冰白敬亭合照放C位](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%99%92%E4%B8%8E%E8%B4%BE%E5%86%B0%E7%99%BD%E6%95%AC%E4%BA%AD%E5%90%88%E7%85%A7%E6%94%BEC%E4%BD%8D%23) `365.9K 🔥` `-52%`
1. [泥石流致西藏吉隆重大人员伤亡失联](https://s.weibo.com/weibo?q=%23%E6%B3%A5%E7%9F%B3%E6%B5%81%E8%87%B4%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E9%87%8D%E5%A4%A7%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%E5%A4%B1%E8%81%94%23) `360.2K 🔥` `-33%`
1. [宋雨琦肿成蜜蜂小狗](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%82%BF%E6%88%90%E8%9C%9C%E8%9C%82%E5%B0%8F%E7%8B%97%23) `357.4K 🔥` `-40%`
1. [社保有多厉害可能超乎你的想象](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%E5%8F%AF%E8%83%BD%E8%B6%85%E4%B9%8E%E4%BD%A0%E7%9A%84%E6%83%B3%E8%B1%A1%23) `314.0K 🔥` `-33%`
1. [惠普向华为支付专利许可费用](https://s.weibo.com/weibo?q=%23%E6%83%A0%E6%99%AE%E5%90%91%E5%8D%8E%E4%B8%BA%E6%94%AF%E4%BB%98%E4%B8%93%E5%88%A9%E8%AE%B8%E5%8F%AF%E8%B4%B9%E7%94%A8%23) `299.4K 🔥` `-30%`
1. [年轻人真的把多运动听进去了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9C%9F%E7%9A%84%E6%8A%8A%E5%A4%9A%E8%BF%90%E5%8A%A8%E5%90%AC%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `284.5K 🔥` `-63%`
1. [千万不要把秘密留在行李箱 (Never leave secrets in your suitcase)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E7%A7%98%E5%AF%86%E7%95%99%E5%9C%A8%E8%A1%8C%E6%9D%8E%E7%AE%B1%23) `277.2K 🔥` `-25%`

Updated at 2026-08-26 22:57:44

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
