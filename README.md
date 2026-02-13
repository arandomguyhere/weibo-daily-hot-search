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

1. [公司利润2.7亿拿1.8亿发年终奖 (The company made a profit of 270 million and received a year-end bonus of 180 million)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%88%A9%E6%B6%A62.7%E4%BA%BF%E6%8B%BF1.8%E4%BA%BF%E5%8F%91%E5%B9%B4%E7%BB%88%E5%A5%96%23) `1.2M 🔥` `NEW`
1. [王菲 春晚](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%20%E6%98%A5%E6%99%9A%23) `513.3K 🔥` `NEW`
1. [湛江一海滩发现疑似儒艮尸体](https://s.weibo.com/weibo?q=%23%E6%B9%9B%E6%B1%9F%E4%B8%80%E6%B5%B7%E6%BB%A9%E5%8F%91%E7%8E%B0%E7%96%91%E4%BC%BC%E5%84%92%E8%89%AE%E5%B0%B8%E4%BD%93%23) `435.0K 🔥` `NEW`
1. [春节汉文化寻根之旅](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%B1%89%E6%96%87%E5%8C%96%E5%AF%BB%E6%A0%B9%E4%B9%8B%E6%97%85%23) `371.5K 🔥` `NEW`
1. [交警查酒驾意外见家长一秒脸红](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E8%AD%A6%E6%9F%A5%E9%85%92%E9%A9%BE%E6%84%8F%E5%A4%96%E8%A7%81%E5%AE%B6%E9%95%BF%E4%B8%80%E7%A7%92%E8%84%B8%E7%BA%A2%23) `350.8K 🔥` `NEW`
1. [丞磊王楚然 京洛再无佳人](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA%23) `323.4K 🔥` `NEW`
1. [孙龙哽咽是我的问题我承认](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E5%93%BD%E5%92%BD%E6%98%AF%E6%88%91%E7%9A%84%E9%97%AE%E9%A2%98%E6%88%91%E6%89%BF%E8%AE%A4%23) `183.4K 🔥` `NEW`
1. [日本当局再次扣押中国大陆渔船](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BD%93%E5%B1%80%E5%86%8D%E6%AC%A1%E6%89%A3%E6%8A%BC%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E6%B8%94%E8%88%B9%23) `183.1K 🔥` `NEW`
1. [前女友送的40克银镯子内含30克黄金](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A5%B3%E5%8F%8B%E9%80%81%E7%9A%8440%E5%85%8B%E9%93%B6%E9%95%AF%E5%AD%90%E5%86%85%E5%90%AB30%E5%85%8B%E9%BB%84%E9%87%91%23) `181.6K 🔥` `NEW`
1. [方家翊整容](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AE%B6%E7%BF%8A%E6%95%B4%E5%AE%B9%23) `180.4K 🔥` `NEW`
1. [中戏 (Chinese opera)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%23) `179.1K 🔥` `NEW`
1. [明星红包分组](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `178.9K 🔥` `NEW`
1. [以为王俊凯要向周杰伦告白](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%A6%81%E5%90%91%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%91%8A%E7%99%BD%23) `177.2K 🔥` `NEW`
1. [有个一直说话的人真的太重要了](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%B8%AA%E4%B8%80%E7%9B%B4%E8%AF%B4%E8%AF%9D%E7%9A%84%E4%BA%BA%E7%9C%9F%E7%9A%84%E5%A4%AA%E9%87%8D%E8%A6%81%E4%BA%86%23) `176.7K 🔥` `NEW`
1. [我的妈妈是校花开播](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%A6%88%E5%A6%88%E6%98%AF%E6%A0%A1%E8%8A%B1%E5%BC%80%E6%92%AD%23) `176.1K 🔥` `NEW`
1. [林孝埈赛后更新自动回复](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E8%B5%9B%E5%90%8E%E6%9B%B4%E6%96%B0%E8%87%AA%E5%8A%A8%E5%9B%9E%E5%A4%8D%23) `157.7K 🔥` `NEW`
1. [橹穆双人卡](https://s.weibo.com/weibo?q=%23%E6%A9%B9%E7%A9%86%E5%8F%8C%E4%BA%BA%E5%8D%A1%23) `156.7K 🔥` `NEW`
1. [专家称全国六成分娩量在县城](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E5%85%A8%E5%9B%BD%E5%85%AD%E6%88%90%E5%88%86%E5%A8%A9%E9%87%8F%E5%9C%A8%E5%8E%BF%E5%9F%8E%23) `154.5K 🔥` `NEW`
1. [小酒窝朵朵三亚度假](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E6%9C%B5%E6%9C%B5%E4%B8%89%E4%BA%9A%E5%BA%A6%E5%81%87%23) `152.9K 🔥` `NEW`
1. [伴侣感染HPV是不干净吗](https://s.weibo.com/weibo?q=%23%E4%BC%B4%E4%BE%A3%E6%84%9F%E6%9F%93HPV%E6%98%AF%E4%B8%8D%E5%B9%B2%E5%87%80%E5%90%97%23) `149.1K 🔥` `NEW`
1. [红马年能不能穿红 (Can you wear red in the Year of the Red Horse?)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%A9%AC%E5%B9%B4%E8%83%BD%E4%B8%8D%E8%83%BD%E7%A9%BF%E7%BA%A2%23) `146.2K 🔥` `NEW`
1. [开心麻花也是拍上长剧了](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%BF%83%E9%BA%BB%E8%8A%B1%E4%B9%9F%E6%98%AF%E6%8B%8D%E4%B8%8A%E9%95%BF%E5%89%A7%E4%BA%86%23) `130.7K 🔥` `NEW`
1. [男子中940万大奖以为自己没睡醒](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%AD940%E4%B8%87%E5%A4%A7%E5%A5%96%E4%BB%A5%E4%B8%BA%E8%87%AA%E5%B7%B1%E6%B2%A1%E7%9D%A1%E9%86%92%23) `103.8K 🔥` `NEW`
1. [周杰伦杭州演唱会](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%9D%AD%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `100.4K 🔥` `NEW`
1. [微信 贴图](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E8%B4%B4%E5%9B%BE%23) `94.1K 🔥` `NEW`
1. [马年好运到](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E5%A5%BD%E8%BF%90%E5%88%B0%23) `91.6K 🔥` `NEW`
1. [央视主持人的含金量还在上升](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `91.6K 🔥` `NEW`
1. [DeepSeek回应被指冷淡](https://s.weibo.com/weibo?q=%23DeepSeek%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8C%87%E5%86%B7%E6%B7%A1%23) `91.4K 🔥` `NEW`
1. [网红贵州民工回应抚养8个孩子](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E8%B4%B5%E5%B7%9E%E6%B0%91%E5%B7%A5%E5%9B%9E%E5%BA%94%E6%8A%9A%E5%85%BB8%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `89.7K 🔥` `NEW`
1. [生命树杨紫张哲华卧一半没底了](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E6%9D%A8%E7%B4%AB%E5%BC%A0%E5%93%B2%E5%8D%8E%E5%8D%A7%E4%B8%80%E5%8D%8A%E6%B2%A1%E5%BA%95%E4%BA%86%23) `88.6K 🔥` `NEW`
1. [青海省副省长点赞生命树 (Vice Governor of Qinghai Province praised the Tree of Life)](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B7%E7%9C%81%E5%89%AF%E7%9C%81%E9%95%BF%E7%82%B9%E8%B5%9E%E7%94%9F%E5%91%BD%E6%A0%91%23) `76.7K 🔥` `NEW`
1. [任何生物都受不了舟车劳顿](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E4%BD%95%E7%94%9F%E7%89%A9%E9%83%BD%E5%8F%97%E4%B8%8D%E4%BA%86%E8%88%9F%E8%BD%A6%E5%8A%B3%E9%A1%BF%23) `76.4K 🔥` `NEW`
1. [王楚然成何体统落泪吻](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E8%90%BD%E6%B3%AA%E5%90%BB%23) `74.4K 🔥` `NEW`
1. [孙龙摘银后刘少昂比他还激动](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E6%91%98%E9%93%B6%E5%90%8E%E5%88%98%E5%B0%91%E6%98%82%E6%AF%94%E4%BB%96%E8%BF%98%E6%BF%80%E5%8A%A8%23) `73.9K 🔥` `NEW`
1. [金银铜全线上涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E9%93%9C%E5%85%A8%E7%BA%BF%E4%B8%8A%E6%B6%A8%23) `73.9K 🔥` `NEW`
1. [迪丽热巴陈飞宇主演白日提灯](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E4%B8%BB%E6%BC%94%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `73.6K 🔥` `NEW`
1. [无锡威玛犬](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%E5%A8%81%E7%8E%9B%E7%8A%AC%23) `72.2K 🔥` `NEW`
1. [这是剧宣不是官宣啊](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E5%89%A7%E5%AE%A3%E4%B8%8D%E6%98%AF%E5%AE%98%E5%AE%A3%E5%95%8A%23) `68.6K 🔥` `NEW`
1. [潮汕英歌舞到底有多震撼](https://s.weibo.com/weibo?q=%23%E6%BD%AE%E6%B1%95%E8%8B%B1%E6%AD%8C%E8%88%9E%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E9%9C%87%E6%92%BC%23) `68.0K 🔥` `NEW`
1. [中戏已有两位表演系主任主动投案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E5%B7%B2%E6%9C%89%E4%B8%A4%E4%BD%8D%E8%A1%A8%E6%BC%94%E7%B3%BB%E4%B8%BB%E4%BB%BB%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `841.9K 🔥` `+525%`
1. [白日提灯 (day lantern)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `162.9K 🔥` `+39%`
1. [解锁年味儿中的幸福密码](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E9%94%81%E5%B9%B4%E5%91%B3%E5%84%BF%E4%B8%AD%E7%9A%84%E5%B9%B8%E7%A6%8F%E5%AF%86%E7%A0%81%23) `654.7K 🔥`
1. [总台声明](https://s.weibo.com/weibo?q=%23%E6%80%BB%E5%8F%B0%E5%A3%B0%E6%98%8E%23) `248.0K 🔥`
1. [女演员曾公开称美国上流精英吃婴儿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%9B%BE%E5%85%AC%E5%BC%80%E7%A7%B0%E7%BE%8E%E5%9B%BD%E4%B8%8A%E6%B5%81%E7%B2%BE%E8%8B%B1%E5%90%83%E5%A9%B4%E5%84%BF%23) `151.3K 🔥`
1. [BLACKPINK新专配置公开](https://s.weibo.com/weibo?q=%23BLACKPINK%E6%96%B0%E4%B8%93%E9%85%8D%E7%BD%AE%E5%85%AC%E5%BC%80%23) `131.9K 🔥`
1. [李一桐陈雀儿好美](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E9%99%88%E9%9B%80%E5%84%BF%E5%A5%BD%E7%BE%8E%23) `77.2K 🔥`
1. [王鑫被查 (Wang Xin was investigated)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%91%AB%E8%A2%AB%E6%9F%A5%23) `373.2K 🔥` `-68%`
1. [不要跟老人提喜欢吃什么](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%B7%9F%E8%80%81%E4%BA%BA%E6%8F%90%E5%96%9C%E6%AC%A2%E5%90%83%E4%BB%80%E4%B9%88%23) `146.0K 🔥` `-47%`
1. [炎亚纶自曝通过吴尊传话 (Aaron Yan revealed that he sent messages through Wu Zun)](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E8%87%AA%E6%9B%9D%E9%80%9A%E8%BF%87%E5%90%B4%E5%B0%8A%E4%BC%A0%E8%AF%9D%23) `100.4K 🔥` `-25%`
1. [王俊凯新歌 (Wang Junkai's new song)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%96%B0%E6%AD%8C%23) `76.0K 🔥` `-52%`
1. [TFING头像换回来了](https://s.weibo.com/weibo?q=%23TFING%E5%A4%B4%E5%83%8F%E6%8D%A2%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `67.0K 🔥` `-56%`

Updated at 2026-02-13 13:04:38

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
