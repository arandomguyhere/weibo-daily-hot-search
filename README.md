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

1. [普京结束访华 (Putin ends visit to China)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%BB%93%E6%9D%9F%E8%AE%BF%E5%8D%8E%23) `1.9M 🔥` `NEW`
1. [抖音封了打焦赞直播间](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E5%B0%81%E4%BA%86%E6%89%93%E7%84%A6%E8%B5%9E%E7%9B%B4%E6%92%AD%E9%97%B4%23) `901.6K 🔥` `NEW`
1. [中俄元首会谈现场都有谁](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E5%85%83%E9%A6%96%E4%BC%9A%E8%B0%88%E7%8E%B0%E5%9C%BA%E9%83%BD%E6%9C%89%E8%B0%81%23) `709.6K 🔥` `NEW`
1. [半个娱乐圈都在京东发红包](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E9%83%BD%E5%9C%A8%E4%BA%AC%E4%B8%9C%E5%8F%91%E7%BA%A2%E5%8C%85%23) `708.9K 🔥` `NEW`
1. [为什么520朋友圈秀恩爱的变少了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88520%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%A7%80%E6%81%A9%E7%88%B1%E7%9A%84%E5%8F%98%E5%B0%91%E4%BA%86%23) `707.9K 🔥` `NEW`
1. [别笑张碧晨也要毕业答辩](https://s.weibo.com/weibo?q=%23%E5%88%AB%E7%AC%91%E5%BC%A0%E7%A2%A7%E6%99%A8%E4%B9%9F%E8%A6%81%E6%AF%95%E4%B8%9A%E7%AD%94%E8%BE%A9%23) `701.3K 🔥` `NEW`
1. [中俄两国联合声明](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E4%B8%A4%E5%9B%BD%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%23) `576.0K 🔥` `NEW`
1. [医生辟谣喝醋喝红酒能降血压](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%BE%9F%E8%B0%A3%E5%96%9D%E9%86%8B%E5%96%9D%E7%BA%A2%E9%85%92%E8%83%BD%E9%99%8D%E8%A1%80%E5%8E%8B%23) `565.3K 🔥` `NEW`
1. [胡海泉被歌手淘汰](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%B5%B7%E6%B3%89%E8%A2%AB%E6%AD%8C%E6%89%8B%E6%B7%98%E6%B1%B0%23) `544.6K 🔥` `NEW`
1. [未开封的饮料都可以偷梁换柱](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%BC%80%E5%B0%81%E7%9A%84%E9%A5%AE%E6%96%99%E9%83%BD%E5%8F%AF%E4%BB%A5%E5%81%B7%E6%A2%81%E6%8D%A2%E6%9F%B1%23) `455.7K 🔥` `NEW`
1. [翻倍牛股一字涨停 (Bull stocks double their daily limit)](https://s.weibo.com/weibo?q=%23%E7%BF%BB%E5%80%8D%E7%89%9B%E8%82%A1%E4%B8%80%E5%AD%97%E6%B6%A8%E5%81%9C%23) `455.0K 🔥` `NEW`
1. [EWC电竞世俱杯](https://s.weibo.com/weibo?q=%23EWC%E7%94%B5%E7%AB%9E%E4%B8%96%E4%BF%B1%E6%9D%AF%23) `448.6K 🔥` `NEW`
1. [颜颜回复凯凯](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E9%A2%9C%E5%9B%9E%E5%A4%8D%E5%87%AF%E5%87%AF%23) `441.2K 🔥` `NEW`
1. [湖南石门多处断水断电](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E7%9F%B3%E9%97%A8%E5%A4%9A%E5%A4%84%E6%96%AD%E6%B0%B4%E6%96%AD%E7%94%B5%23) `437.2K 🔥` `NEW`
1. [陈赫在综艺发火了](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%9C%A8%E7%BB%BC%E8%89%BA%E5%8F%91%E7%81%AB%E4%BA%86%23) `432.2K 🔥` `NEW`
1. [鹿晗马鹿合照](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E9%A9%AC%E9%B9%BF%E5%90%88%E7%85%A7%23) `426.9K 🔥` `NEW`
1. [小鹏GX价格炸裂](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FGX%E4%BB%B7%E6%A0%BC%E7%82%B8%E8%A3%82%23) `421.8K 🔥` `NEW`
1. [宋威龙手动打码](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%89%8B%E5%8A%A8%E6%89%93%E7%A0%81%23) `419.1K 🔥` `NEW`
1. [杨梅滞留树上70岁奶奶崩溃哭](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%A2%85%E6%BB%9E%E7%95%99%E6%A0%91%E4%B8%8A70%E5%B2%81%E5%A5%B6%E5%A5%B6%E5%B4%A9%E6%BA%83%E5%93%AD%23) `418.0K 🔥` `NEW`
1. [深圳暴雨](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%9A%B4%E9%9B%A8%23) `412.6K 🔥` `NEW`
1. [小学网购45把伞用后全损退回 (Primary school purchased 45 umbrellas online and returned them all damaged after use)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%BD%91%E8%B4%AD45%E6%8A%8A%E4%BC%9E%E7%94%A8%E5%90%8E%E5%85%A8%E6%8D%9F%E9%80%80%E5%9B%9E%23) `411.1K 🔥` `NEW`
1. [谢依霖谈丈夫重病与事业暂停](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E4%BE%9D%E9%9C%96%E8%B0%88%E4%B8%88%E5%A4%AB%E9%87%8D%E7%97%85%E4%B8%8E%E4%BA%8B%E4%B8%9A%E6%9A%82%E5%81%9C%23) `407.8K 🔥` `NEW`
1. [女子刮大腿疏通胆经像刨木头](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%88%AE%E5%A4%A7%E8%85%BF%E7%96%8F%E9%80%9A%E8%83%86%E7%BB%8F%E5%83%8F%E5%88%A8%E6%9C%A8%E5%A4%B4%23) `405.7K 🔥` `NEW`
1. [粥文be](https://s.weibo.com/weibo?q=%23%E7%B2%A5%E6%96%87be%23) `371.0K 🔥` `NEW`
1. [普京欢迎宴会](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%23) `302.8K 🔥` `NEW`
1. [普京离京](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%A6%BB%E4%BA%AC%23) `281.5K 🔥` `NEW`
1. [李多海怀孕](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%A4%9A%E6%B5%B7%E6%80%80%E5%AD%95%23) `275.4K 🔥` `NEW`
1. [刘浩存穆桂英剧照](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%A9%86%E6%A1%82%E8%8B%B1%E5%89%A7%E7%85%A7%23) `272.9K 🔥` `NEW`
1. [对人是真皮的有了实感](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%BA%BA%E6%98%AF%E7%9C%9F%E7%9A%AE%E7%9A%84%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `261.0K 🔥` `NEW`
1. [给阿嬷的情书](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `252.2K 🔥` `NEW`
1. [张凌赫回复丁程鑫 (Zhang Linghe replied to Ding Chengxin)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%A4%8D%E4%B8%81%E7%A8%8B%E9%91%AB%23) `250.0K 🔥` `NEW`
1. [阳朔一米粉店本地人7元游客13元](https://s.weibo.com/weibo?q=%23%E9%98%B3%E6%9C%94%E4%B8%80%E7%B1%B3%E7%B2%89%E5%BA%97%E6%9C%AC%E5%9C%B0%E4%BA%BA7%E5%85%83%E6%B8%B8%E5%AE%A213%E5%85%83%23) `243.9K 🔥` `NEW`
1. [凯凯回应](https://s.weibo.com/weibo?q=%23%E5%87%AF%E5%87%AF%E5%9B%9E%E5%BA%94%23) `243.7K 🔥` `NEW`
1. [iPhone情侣设置](https://s.weibo.com/weibo?q=%23iPhone%E6%83%85%E4%BE%A3%E8%AE%BE%E7%BD%AE%23) `240.9K 🔥` `NEW`
1. [孙浩演技 最佳男配](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%A9%E6%BC%94%E6%8A%80%20%E6%9C%80%E4%BD%B3%E7%94%B7%E9%85%8D%23) `223.7K 🔥` `NEW`
1. [淑柔扮演者回应为何不进演艺圈](https://s.weibo.com/weibo?q=%23%E6%B7%91%E6%9F%94%E6%89%AE%E6%BC%94%E8%80%85%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BD%95%E4%B8%8D%E8%BF%9B%E6%BC%94%E8%89%BA%E5%9C%88%23) `215.7K 🔥` `NEW`
1. [小鹏发布会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E5%8F%91%E5%B8%83%E4%BC%9A%23) `210.9K 🔥` `NEW`
1. [有种痛苦叫邻居买大车](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%A7%8D%E7%97%9B%E8%8B%A6%E5%8F%AB%E9%82%BB%E5%B1%85%E4%B9%B0%E5%A4%A7%E8%BD%A6%23) `209.7K 🔥` `NEW`
1. [王一菲与嘉行解约](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E8%8F%B2%E4%B8%8E%E5%98%89%E8%A1%8C%E8%A7%A3%E7%BA%A6%23) `203.6K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `203.0K 🔥` `NEW`
1. [普京与26年前抱过的中国男孩见面了 (Putin meets the Chinese boy he hugged 26 years ago)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E4%B8%8E26%E5%B9%B4%E5%89%8D%E6%8A%B1%E8%BF%87%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%A9%E8%A7%81%E9%9D%A2%E4%BA%86%23) `194.3K 🔥` `NEW`
1. [官方通报泡药杨梅](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%B3%A1%E8%8D%AF%E6%9D%A8%E6%A2%85%23) `188.3K 🔥` `NEW`
1. [抖音副总裁谈主角营销争议](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E5%89%AF%E6%80%BB%E8%A3%81%E8%B0%88%E4%B8%BB%E8%A7%92%E8%90%A5%E9%94%80%E4%BA%89%E8%AE%AE%23) `187.7K 🔥` `NEW`
1. [杨梅协会会长恳求消费者给果农生路](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%A2%85%E5%8D%8F%E4%BC%9A%E4%BC%9A%E9%95%BF%E6%81%B3%E6%B1%82%E6%B6%88%E8%B4%B9%E8%80%85%E7%BB%99%E6%9E%9C%E5%86%9C%E7%94%9F%E8%B7%AF%23) `187.7K 🔥` `NEW`
1. [宋亚轩提及作品你好吗](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%8F%90%E5%8F%8A%E4%BD%9C%E5%93%81%E4%BD%A0%E5%A5%BD%E5%90%97%23) `187.7K 🔥` `NEW`
1. [被普京抱过的男孩回应年龄像50多岁](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%99%AE%E4%BA%AC%E6%8A%B1%E8%BF%87%E7%9A%84%E7%94%B7%E5%AD%A9%E5%9B%9E%E5%BA%94%E5%B9%B4%E9%BE%84%E5%83%8F50%E5%A4%9A%E5%B2%81%23) `187.7K 🔥` `NEW`
1. [金莎孙丞潇婚纱照](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `187.6K 🔥` `NEW`
1. [杨幂真的会接住谢依霖](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8E%A5%E4%BD%8F%E8%B0%A2%E4%BE%9D%E9%9C%96%23) `187.6K 🔥` `NEW`
1. [醉酒女钻进锅炉房重度烧伤后中毒身亡](https://s.weibo.com/weibo?q=%23%E9%86%89%E9%85%92%E5%A5%B3%E9%92%BB%E8%BF%9B%E9%94%85%E7%82%89%E6%88%BF%E9%87%8D%E5%BA%A6%E7%83%A7%E4%BC%A4%E5%90%8E%E4%B8%AD%E6%AF%92%E8%BA%AB%E4%BA%A1%23) `187.6K 🔥` `NEW`
1. [福建漳州泡药杨梅事件5人被刑拘](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E6%BC%B3%E5%B7%9E%E6%B3%A1%E8%8D%AF%E6%9D%A8%E6%A2%85%E4%BA%8B%E4%BB%B65%E4%BA%BA%E8%A2%AB%E5%88%91%E6%8B%98%23) `187.6K 🔥` `NEW`
1. [李在明批评三星电子工会越界了 (Lee Jae-myung criticizes Samsung Electronics union for crossing the line)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E6%89%B9%E8%AF%84%E4%B8%89%E6%98%9F%E7%94%B5%E5%AD%90%E5%B7%A5%E4%BC%9A%E8%B6%8A%E7%95%8C%E4%BA%86%23) `187.6K 🔥` `NEW`

Updated at 2026-05-21 00:07:15

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
