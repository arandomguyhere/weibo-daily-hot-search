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

1. [总有一个转角让你爱上青岛 (There is always a corner that makes you fall in love with Qingdao)](https://s.weibo.com/weibo?q=%23%E6%80%BB%E6%9C%89%E4%B8%80%E4%B8%AA%E8%BD%AC%E8%A7%92%E8%AE%A9%E4%BD%A0%E7%88%B1%E4%B8%8A%E9%9D%92%E5%B2%9B%23) `626.3K 🔥` `NEW`
1. [郭麒麟 爸爸还是您不争气啊](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%20%E7%88%B8%E7%88%B8%E8%BF%98%E6%98%AF%E6%82%A8%E4%B8%8D%E4%BA%89%E6%B0%94%E5%95%8A%23) `625.5K 🔥` `NEW`
1. [用智搜打开湖南卫视春晚](https://s.weibo.com/weibo?q=%23%E7%94%A8%E6%99%BA%E6%90%9C%E6%89%93%E5%BC%80%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `351.3K 🔥` `NEW`
1. [DeepSeek更新新模型](https://s.weibo.com/weibo?q=%23DeepSeek%E6%9B%B4%E6%96%B0%E6%96%B0%E6%A8%A1%E5%9E%8B%23) `122.6K 🔥` `NEW`
1. [月薪2000的环卫工困在电子镣铐](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA2000%E7%9A%84%E7%8E%AF%E5%8D%AB%E5%B7%A5%E5%9B%B0%E5%9C%A8%E7%94%B5%E5%AD%90%E9%95%A3%E9%93%90%23) `98.4K 🔥` `NEW`
1. [叶祖新经纪人最喜欢张凌赫](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%A5%96%E6%96%B0%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%80%E5%96%9C%E6%AC%A2%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `96.8K 🔥` `NEW`
1. [小伙说被教练骂头发娘化肚子怀孕](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E8%AF%B4%E8%A2%AB%E6%95%99%E7%BB%83%E9%AA%82%E5%A4%B4%E5%8F%91%E5%A8%98%E5%8C%96%E8%82%9A%E5%AD%90%E6%80%80%E5%AD%95%23) `96.6K 🔥` `NEW`
1. [超市老板投资黄金赚千万全分给员工](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%B8%82%E8%80%81%E6%9D%BF%E6%8A%95%E8%B5%84%E9%BB%84%E9%87%91%E8%B5%9A%E5%8D%83%E4%B8%87%E5%85%A8%E5%88%86%E7%BB%99%E5%91%98%E5%B7%A5%23) `96.6K 🔥` `NEW`
1. [现货黄金重回5100美元](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%E9%87%8D%E5%9B%9E5100%E7%BE%8E%E5%85%83%23) `96.6K 🔥` `NEW`
1. [多家银行清退贵金属三无客户](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E9%93%B6%E8%A1%8C%E6%B8%85%E9%80%80%E8%B4%B5%E9%87%91%E5%B1%9E%E4%B8%89%E6%97%A0%E5%AE%A2%E6%88%B7%23) `90.5K 🔥` `NEW`
1. [孙颖莎说回家有种轻松的氛围 (Sun Yingsha said that there is a relaxing atmosphere when she goes home)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E5%9B%9E%E5%AE%B6%E6%9C%89%E7%A7%8D%E8%BD%BB%E6%9D%BE%E7%9A%84%E6%B0%9B%E5%9B%B4%23) `87.0K 🔥` `NEW`
1. [刘佳宇摔得好重](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BD%B3%E5%AE%87%E6%91%94%E5%BE%97%E5%A5%BD%E9%87%8D%23) `85.6K 🔥` `NEW`
1. [女友无法原谅挪威出轨选手](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%8F%8B%E6%97%A0%E6%B3%95%E5%8E%9F%E8%B0%85%E6%8C%AA%E5%A8%81%E5%87%BA%E8%BD%A8%E9%80%89%E6%89%8B%23) `82.2K 🔥` `NEW`
1. [刘佳宇摔倒](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BD%B3%E5%AE%87%E6%91%94%E5%80%92%23) `1.2M 🔥` `+156%`
1. [湖南卫视春晚](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `850.1K 🔥` `+217%`
1. [青海一家35口人开大巴春节自驾游](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B7%E4%B8%80%E5%AE%B635%E5%8F%A3%E4%BA%BA%E5%BC%80%E5%A4%A7%E5%B7%B4%E6%98%A5%E8%8A%82%E8%87%AA%E9%A9%BE%E6%B8%B8%23) `388.5K 🔥` `+81%`
1. [9岁抗癌女孩去世前整夜呼喊妈妈](https://s.weibo.com/weibo?q=%239%E5%B2%81%E6%8A%97%E7%99%8C%E5%A5%B3%E5%AD%A9%E5%8E%BB%E4%B8%96%E5%89%8D%E6%95%B4%E5%A4%9C%E5%91%BC%E5%96%8A%E5%A6%88%E5%A6%88%23) `242.7K 🔥` `+28%`
1. [杨幂说自己是老姐姐](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%AF%B4%E8%87%AA%E5%B7%B1%E6%98%AF%E8%80%81%E5%A7%90%E5%A7%90%23) `242.7K 🔥` `+138%`
1. [保罗在美国被禁言](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%BD%97%E5%9C%A8%E7%BE%8E%E5%9B%BD%E8%A2%AB%E7%A6%81%E8%A8%80%23) `242.3K 🔥` `+89%`
1. [余茵曾多次与白鹿撞衫](https://s.weibo.com/weibo?q=%23%E4%BD%99%E8%8C%B5%E6%9B%BE%E5%A4%9A%E6%AC%A1%E4%B8%8E%E7%99%BD%E9%B9%BF%E6%92%9E%E8%A1%AB%23) `241.5K 🔥` `+93%`
1. [女子将敬酒服穿脏后焊接吊牌退货 (Woman wears dirty toast clothes and returns tag after welding it)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%86%E6%95%AC%E9%85%92%E6%9C%8D%E7%A9%BF%E8%84%8F%E5%90%8E%E7%84%8A%E6%8E%A5%E5%90%8A%E7%89%8C%E9%80%80%E8%B4%A7%23) `241.3K 🔥` `+22%`
1. [爱泼斯坦羞辱性展示女孩视频曝光 (Video of Epstein humiliatingly showing girls exposed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E7%BE%9E%E8%BE%B1%E6%80%A7%E5%B1%95%E7%A4%BA%E5%A5%B3%E5%AD%A9%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `241.1K 🔥` `+24%`
1. [迪丽热巴 高智感妈咪](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E9%AB%98%E6%99%BA%E6%84%9F%E5%A6%88%E5%92%AA%23) `226.4K 🔥` `+90%`
1. [Jennie200亿韩元买房](https://s.weibo.com/weibo?q=%23Jennie200%E4%BA%BF%E9%9F%A9%E5%85%83%E4%B9%B0%E6%88%BF%23) `192.2K 🔥` `+66%`
1. [小米车主遭特斯拉车主别车辱骂](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%BD%A6%E4%B8%BB%E9%81%AD%E7%89%B9%E6%96%AF%E6%8B%89%E8%BD%A6%E4%B8%BB%E5%88%AB%E8%BD%A6%E8%BE%B1%E9%AA%82%23) `190.0K 🔥` `+101%`
1. [网传浪姐7有郑秀晶](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%907%E6%9C%89%E9%83%91%E7%A7%80%E6%99%B6%23) `170.2K 🔥` `+61%`
1. [王者荣耀杨玉环](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%9D%A8%E7%8E%89%E7%8E%AF%23) `157.2K 🔥` `+31%`
1. [坐高铁感受经济脉动 (Take the high-speed rail and feel the pulse of the economy)](https://s.weibo.com/weibo?q=%23%E5%9D%90%E9%AB%98%E9%93%81%E6%84%9F%E5%8F%97%E7%BB%8F%E6%B5%8E%E8%84%89%E5%8A%A8%23) `645.7K 🔥`
1. [全国房价止跌信号出现 (Signal for national house prices to stop falling appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%88%BF%E4%BB%B7%E6%AD%A2%E8%B7%8C%E4%BF%A1%E5%8F%B7%E5%87%BA%E7%8E%B0%23) `299.9K 🔥`
1. [J人已经买好27年的过年机票](https://s.weibo.com/weibo?q=%23J%E4%BA%BA%E5%B7%B2%E7%BB%8F%E4%B9%B0%E5%A5%BD27%E5%B9%B4%E7%9A%84%E8%BF%87%E5%B9%B4%E6%9C%BA%E7%A5%A8%23) `251.7K 🔥`
1. [日本法律只罚卖淫卖方不罚买方](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B3%95%E5%BE%8B%E5%8F%AA%E7%BD%9A%E5%8D%96%E6%B7%AB%E5%8D%96%E6%96%B9%E4%B8%8D%E7%BD%9A%E4%B9%B0%E6%96%B9%23) `167.5K 🔥`
1. [方圆阿爆拍了双女主短剧 (Fangyuan Abao filmed a short drama with two female protagonists)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E9%98%BF%E7%88%86%E6%8B%8D%E4%BA%86%E5%8F%8C%E5%A5%B3%E4%B8%BB%E7%9F%AD%E5%89%A7%23) `163.6K 🔥`
1. [女护士被堂姐介绍已婚男割喉身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%8A%A4%E5%A3%AB%E8%A2%AB%E5%A0%82%E5%A7%90%E4%BB%8B%E7%BB%8D%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%89%B2%E5%96%89%E8%BA%AB%E4%BA%A1%23) `147.2K 🔥`
1. [白鹿3剧连播反思脚步太快](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF3%E5%89%A7%E8%BF%9E%E6%92%AD%E5%8F%8D%E6%80%9D%E8%84%9A%E6%AD%A5%E5%A4%AA%E5%BF%AB%23) `132.4K 🔥`
1. [成何体统 (In what manner)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `129.7K 🔥`
1. [万兽之王巡回演唱会官号](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%8F%B7%23) `119.7K 🔥`
1. [相声演员卢鑫被法院执行悬赏1万 (Crosstalk actor Lu Xin was executed by the court and offered a reward of 10,000 yuan)](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E5%A3%B0%E6%BC%94%E5%91%98%E5%8D%A2%E9%91%AB%E8%A2%AB%E6%B3%95%E9%99%A2%E6%89%A7%E8%A1%8C%E6%82%AC%E8%B5%8F1%E4%B8%87%23) `99.1K 🔥`
1. [演员郑恩宇去世 (Actor Jung Eun-woo passes away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%83%91%E6%81%A9%E5%AE%87%E5%8E%BB%E4%B8%96%23) `97.9K 🔥`
1. [王昶钱天一领证vlog (Wang Chang and Qian Tianyi receive certificate vlog)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E9%92%B1%E5%A4%A9%E4%B8%80%E9%A2%86%E8%AF%81vlog%23) `97.8K 🔥`
1. [竟然陪时代峰峻闹了这么久了 (I've been having trouble with Shi Fengjun for so long)](https://s.weibo.com/weibo?q=%23%E7%AB%9F%E7%84%B6%E9%99%AA%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%97%B9%E4%BA%86%E8%BF%99%E4%B9%88%E4%B9%85%E4%BA%86%23) `94.7K 🔥`
1. [郑秀晶大小姐和保镖神图](https://s.weibo.com/weibo?q=%23%E9%83%91%E7%A7%80%E6%99%B6%E5%A4%A7%E5%B0%8F%E5%A7%90%E5%92%8C%E4%BF%9D%E9%95%96%E7%A5%9E%E5%9B%BE%23) `88.7K 🔥`
1. [博主保罗妻子回应分娩视频争议](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E4%BF%9D%E7%BD%97%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E5%88%86%E5%A8%A9%E8%A7%86%E9%A2%91%E4%BA%89%E8%AE%AE%23) `83.5K 🔥`
1. [KK园区2.0内部照首曝光](https://s.weibo.com/weibo?q=%23KK%E5%9B%AD%E5%8C%BA2.0%E5%86%85%E9%83%A8%E7%85%A7%E9%A6%96%E6%9B%9D%E5%85%89%23) `482.8K 🔥` `-39%`
1. [女教师群聊八卦被拘案最新进展](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E7%BE%A4%E8%81%8A%E5%85%AB%E5%8D%A6%E8%A2%AB%E6%8B%98%E6%A1%88%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `241.9K 🔥` `-78%`
1. [王者安琪拉典藏皮肤爆料](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%AE%89%E7%90%AA%E6%8B%89%E5%85%B8%E8%97%8F%E7%9A%AE%E8%82%A4%E7%88%86%E6%96%99%23) `161.7K 🔥` `-57%`
1. [一大批年轻人开始反向过年](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A7%E6%89%B9%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%8F%8D%E5%90%91%E8%BF%87%E5%B9%B4%23) `136.8K 🔥` `-31%`
1. [湖南卫视春晚节目单来了](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9D%A5%E4%BA%86%23) `118.8K 🔥` `-33%`
1. [单板滑雪女子U型场地技巧预赛](https://s.weibo.com/weibo?q=%23%E5%8D%95%E6%9D%BF%E6%BB%91%E9%9B%AA%E5%A5%B3%E5%AD%90U%E5%9E%8B%E5%9C%BA%E5%9C%B0%E6%8A%80%E5%B7%A7%E9%A2%84%E8%B5%9B%23) `109.1K 🔥` `-34%`
1. [冬奥会 (winter olympics)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `98.1K 🔥` `-26%`
1. [喜欢侧睡的受害者出现了](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E4%BE%A7%E7%9D%A1%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `89.5K 🔥` `-22%`
1. [李一桐新剧空降第一](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E6%96%B0%E5%89%A7%E7%A9%BA%E9%99%8D%E7%AC%AC%E4%B8%80%23) `81.6K 🔥` `-27%`

Updated at 2026-02-11 20:05:29

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
