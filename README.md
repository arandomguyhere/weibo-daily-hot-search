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

1. [跟李现解锁淘宝闪购过年新发现 (Unlock new discoveries in Taobao flash sales during the New Year with Li Xian)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E6%9D%8E%E7%8E%B0%E8%A7%A3%E9%94%81%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E8%BF%87%E5%B9%B4%E6%96%B0%E5%8F%91%E7%8E%B0%23) `609.1K 🔥` `NEW`
1. [刘佳宇摔倒](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BD%B3%E5%AE%87%E6%91%94%E5%80%92%23) `449.3K 🔥` `NEW`
1. [王者安琪拉典藏皮肤爆料](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%AE%89%E7%90%AA%E6%8B%89%E5%85%B8%E8%97%8F%E7%9A%AE%E8%82%A4%E7%88%86%E6%96%99%23) `375.3K 🔥` `NEW`
1. [湖南卫视春晚](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `268.2K 🔥` `NEW`
1. [青海一家35口人开大巴春节自驾游](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B7%E4%B8%80%E5%AE%B635%E5%8F%A3%E4%BA%BA%E5%BC%80%E5%A4%A7%E5%B7%B4%E6%98%A5%E8%8A%82%E8%87%AA%E9%A9%BE%E6%B8%B8%23) `214.9K 🔥` `NEW`
1. [9岁抗癌女孩去世前整夜呼喊妈妈](https://s.weibo.com/weibo?q=%239%E5%B2%81%E6%8A%97%E7%99%8C%E5%A5%B3%E5%AD%A9%E5%8E%BB%E4%B8%96%E5%89%8D%E6%95%B4%E5%A4%9C%E5%91%BC%E5%96%8A%E5%A6%88%E5%A6%88%23) `190.2K 🔥` `NEW`
1. [女子洗衣机掏出丢失1年金项链](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%8E%8F%E5%87%BA%E4%B8%A2%E5%A4%B11%E5%B9%B4%E9%87%91%E9%A1%B9%E9%93%BE%23) `130.4K 🔥` `NEW`
1. [余茵曾多次与白鹿撞衫](https://s.weibo.com/weibo?q=%23%E4%BD%99%E8%8C%B5%E6%9B%BE%E5%A4%9A%E6%AC%A1%E4%B8%8E%E7%99%BD%E9%B9%BF%E6%92%9E%E8%A1%AB%23) `125.1K 🔥` `NEW`
1. [女护士被堂姐介绍已婚男割喉身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%8A%A4%E5%A3%AB%E8%A2%AB%E5%A0%82%E5%A7%90%E4%BB%8B%E7%BB%8D%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%89%B2%E5%96%89%E8%BA%AB%E4%BA%A1%23) `123.6K 🔥` `NEW`
1. [Jennie200亿韩元买房](https://s.weibo.com/weibo?q=%23Jennie200%E4%BA%BF%E9%9F%A9%E5%85%83%E4%B9%B0%E6%88%BF%23) `115.5K 🔥` `NEW`
1. [王昶钱天一领证vlog (Wang Chang and Qian Tianyi receive certificate vlog)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E9%92%B1%E5%A4%A9%E4%B8%80%E9%A2%86%E8%AF%81vlog%23) `110.5K 🔥` `NEW`
1. [万兽之王巡回演唱会官号](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%8F%B7%23) `109.4K 🔥` `NEW`
1. [网传浪姐7有郑秀晶](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%907%E6%9C%89%E9%83%91%E7%A7%80%E6%99%B6%23) `105.4K 🔥` `NEW`
1. [张馨予 美人鱼上岸了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%20%E7%BE%8E%E4%BA%BA%E9%B1%BC%E4%B8%8A%E5%B2%B8%E4%BA%86%23) `103.4K 🔥` `NEW`
1. [杨幂说自己是老姐姐](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%AF%B4%E8%87%AA%E5%B7%B1%E6%98%AF%E8%80%81%E5%A7%90%E5%A7%90%23) `101.8K 🔥` `NEW`
1. [合肥一块石头引全国网友集体思念](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E4%B8%80%E5%9D%97%E7%9F%B3%E5%A4%B4%E5%BC%95%E5%85%A8%E5%9B%BD%E7%BD%91%E5%8F%8B%E9%9B%86%E4%BD%93%E6%80%9D%E5%BF%B5%23) `101.0K 🔥` `NEW`
1. [郑秀晶大小姐和保镖神图](https://s.weibo.com/weibo?q=%23%E9%83%91%E7%A7%80%E6%99%B6%E5%A4%A7%E5%B0%8F%E5%A7%90%E5%92%8C%E4%BF%9D%E9%95%96%E7%A5%9E%E5%9B%BE%23) `99.2K 🔥` `NEW`
1. [强者Rookie回来了](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E8%80%85Rookie%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `98.7K 🔥` `NEW`
1. [博主保罗妻子回应分娩视频争议](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E4%BF%9D%E7%BD%97%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E5%88%86%E5%A8%A9%E8%A7%86%E9%A2%91%E4%BA%89%E8%AE%AE%23) `94.6K 🔥` `NEW`
1. [小米车主遭特斯拉车主别车辱骂](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%BD%A6%E4%B8%BB%E9%81%AD%E7%89%B9%E6%96%AF%E6%8B%89%E8%BD%A6%E4%B8%BB%E5%88%AB%E8%BD%A6%E8%BE%B1%E9%AA%82%23) `94.6K 🔥` `NEW`
1. [相声演员卢鑫被法院执行悬赏1万 (Crosstalk actor Lu Xin was executed by the court and offered a reward of 10,000 yuan)](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E5%A3%B0%E6%BC%94%E5%91%98%E5%8D%A2%E9%91%AB%E8%A2%AB%E6%B3%95%E9%99%A2%E6%89%A7%E8%A1%8C%E6%82%AC%E8%B5%8F1%E4%B8%87%23) `94.6K 🔥` `NEW`
1. [于东来将退休](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E5%B0%86%E9%80%80%E4%BC%91%23) `78.9K 🔥` `NEW`
1. [女教师群聊八卦被拘案最新进展](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E7%BE%A4%E8%81%8A%E5%85%AB%E5%8D%A6%E8%A2%AB%E6%8B%98%E6%A1%88%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `1.1M 🔥` `+396%`
1. [KK园区2.0内部照首曝光](https://s.weibo.com/weibo?q=%23KK%E5%9B%AD%E5%8C%BA2.0%E5%86%85%E9%83%A8%E7%85%A7%E9%A6%96%E6%9B%9D%E5%85%89%23) `790.5K 🔥` `+504%`
1. [全国房价止跌信号出现 (Signal for national house prices to stop falling appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%88%BF%E4%BB%B7%E6%AD%A2%E8%B7%8C%E4%BF%A1%E5%8F%B7%E5%87%BA%E7%8E%B0%23) `301.4K 🔥` `+176%`
1. [J人已经买好27年的过年机票](https://s.weibo.com/weibo?q=%23J%E4%BA%BA%E5%B7%B2%E7%BB%8F%E4%B9%B0%E5%A5%BD27%E5%B9%B4%E7%9A%84%E8%BF%87%E5%B9%B4%E6%9C%BA%E7%A5%A8%23) `295.9K 🔥` `+142%`
1. [一大批年轻人开始反向过年](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A7%E6%89%B9%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%8F%8D%E5%90%91%E8%BF%87%E5%B9%B4%23) `198.7K 🔥` `+32%`
1. [湖南卫视春晚节目单来了](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9D%A5%E4%BA%86%23) `176.4K 🔥` `+29%`
1. [单板滑雪女子U型场地技巧预赛](https://s.weibo.com/weibo?q=%23%E5%8D%95%E6%9D%BF%E6%BB%91%E9%9B%AA%E5%A5%B3%E5%AD%90U%E5%9E%8B%E5%9C%BA%E5%9C%B0%E6%8A%80%E5%B7%A7%E9%A2%84%E8%B5%9B%23) `165.3K 🔥` `+62%`
1. [日本法律只罚卖淫卖方不罚买方](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B3%95%E5%BE%8B%E5%8F%AA%E7%BD%9A%E5%8D%96%E6%B7%AB%E5%8D%96%E6%96%B9%E4%B8%8D%E7%BD%9A%E4%B9%B0%E6%96%B9%23) `147.2K 🔥` `+21%`
1. [冬奥会](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `131.8K 🔥` `+28%`
1. [坐高铁感受经济脉动 (Take the high-speed rail and feel the pulse of the economy)](https://s.weibo.com/weibo?q=%23%E5%9D%90%E9%AB%98%E9%93%81%E6%84%9F%E5%8F%97%E7%BB%8F%E6%B5%8E%E8%84%89%E5%8A%A8%23) `612.3K 🔥`
1. [长尾猫林允松弛新主张 (Long-tailed cat Lin Yun relaxes new ideas)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%B0%BE%E7%8C%AB%E6%9E%97%E5%85%81%E6%9D%BE%E5%BC%9B%E6%96%B0%E4%B8%BB%E5%BC%A0%23) `298.9K 🔥`
1. [爱泼斯坦羞辱性展示女孩视频曝光](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E7%BE%9E%E8%BE%B1%E6%80%A7%E5%B1%95%E7%A4%BA%E5%A5%B3%E5%AD%A9%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `194.3K 🔥`
1. [保罗在美国被禁言](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%BD%97%E5%9C%A8%E7%BE%8E%E5%9B%BD%E8%A2%AB%E7%A6%81%E8%A8%80%23) `128.3K 🔥`
1. [迪丽热巴 高智感妈咪](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E9%AB%98%E6%99%BA%E6%84%9F%E5%A6%88%E5%92%AA%23) `119.0K 🔥`
1. [喜欢侧睡的受害者出现了](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E4%BE%A7%E7%9D%A1%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `115.2K 🔥`
1. [竟然陪时代峰峻闹了这么久了 (I've been having trouble with Shi Fengjun for so long)](https://s.weibo.com/weibo?q=%23%E7%AB%9F%E7%84%B6%E9%99%AA%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%97%B9%E4%BA%86%E8%BF%99%E4%B9%88%E4%B9%85%E4%BA%86%23) `111.9K 🔥`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `108.8K 🔥`
1. [当两个梗王谈恋爱](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%B8%A4%E4%B8%AA%E6%A2%97%E7%8E%8B%E8%B0%88%E6%81%8B%E7%88%B1%23) `107.3K 🔥`
1. [演员郑恩宇去世 (Actor Jung Eun-woo passes away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%83%91%E6%81%A9%E5%AE%87%E5%8E%BB%E4%B8%96%23) `99.7K 🔥`
1. [徐艺洋回应黄子韬开始不在意颜值 (Xu Yiyang responded that Huang Zitao didn’t care about appearance anymore)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9B%9E%E5%BA%94%E9%BB%84%E5%AD%90%E9%9F%AC%E5%BC%80%E5%A7%8B%E4%B8%8D%E5%9C%A8%E6%84%8F%E9%A2%9C%E5%80%BC%23) `98.3K 🔥`
1. [女子将敬酒服穿脏后焊接吊牌退货 (Woman wears dirty toast clothes and returns tag after welding it)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%86%E6%95%AC%E9%85%92%E6%9C%8D%E7%A9%BF%E8%84%8F%E5%90%8E%E7%84%8A%E6%8E%A5%E5%90%8A%E7%89%8C%E9%80%80%E8%B4%A7%23) `197.4K 🔥` `-30%`
1. [永辉超市CEO发全员信致歉](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BE%89%E8%B6%85%E5%B8%82CEO%E5%8F%91%E5%85%A8%E5%91%98%E4%BF%A1%E8%87%B4%E6%AD%89%23) `153.7K 🔥` `-81%`
1. [方圆阿爆拍了双女主短剧 (Fangyuan Abao filmed a short drama with two female protagonists)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E9%98%BF%E7%88%86%E6%8B%8D%E4%BA%86%E5%8F%8C%E5%A5%B3%E4%B8%BB%E7%9F%AD%E5%89%A7%23) `142.9K 🔥` `-87%`
1. [王者荣耀杨玉环](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%9D%A8%E7%8E%89%E7%8E%AF%23) `120.4K 🔥` `-40%`
1. [白鹿3剧连播反思脚步太快](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF3%E5%89%A7%E8%BF%9E%E6%92%AD%E5%8F%8D%E6%80%9D%E8%84%9A%E6%AD%A5%E5%A4%AA%E5%BF%AB%23) `114.6K 🔥` `-59%`
1. [我将辞职在家研究苏醒这段话 (I will resign and study this passage at home)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B0%86%E8%BE%9E%E8%81%8C%E5%9C%A8%E5%AE%B6%E7%A0%94%E7%A9%B6%E8%8B%8F%E9%86%92%E8%BF%99%E6%AE%B5%E8%AF%9D%23) `114.1K 🔥` `-63%`
1. [14万房子涨到180万等20年才拿回 (It took 20 years to get the house back from 140,000 to 1.8 million)](https://s.weibo.com/weibo?q=%2314%E4%B8%87%E6%88%BF%E5%AD%90%E6%B6%A8%E5%88%B0180%E4%B8%87%E7%AD%8920%E5%B9%B4%E6%89%8D%E6%8B%BF%E5%9B%9E%23) `112.7K 🔥` `-60%`
1. [李一桐新剧空降第一](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E6%96%B0%E5%89%A7%E7%A9%BA%E9%99%8D%E7%AC%AC%E4%B8%80%23) `111.6K 🔥` `-40%`
1. [网红沐言感染合胞病毒](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%B2%90%E8%A8%80%E6%84%9F%E6%9F%93%E5%90%88%E8%83%9E%E7%97%85%E6%AF%92%23) `91.3K 🔥` `-25%`
1. [虞书欣cos黑色碧琪](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3cos%E9%BB%91%E8%89%B2%E7%A2%A7%E7%90%AA%23) `78.9K 🔥` `-35%`

Updated at 2026-02-11 19:27:48

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
