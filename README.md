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

1. [白玉兰内场 (Magnolia infield)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E5%86%85%E5%9C%BA%23) `12.2M 🔥` `NEW`
1. [白玉兰视帝视后最终预测](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%B8%9D%E8%A7%86%E5%90%8E%E6%9C%80%E7%BB%88%E9%A2%84%E6%B5%8B%23) `2.8M 🔥` `NEW`
1. [625亿元国补资金已经下达](https://s.weibo.com/weibo?q=%23625%E4%BA%BF%E5%85%83%E5%9B%BD%E8%A1%A5%E8%B5%84%E9%87%91%E5%B7%B2%E7%BB%8F%E4%B8%8B%E8%BE%BE%23) `1.8M 🔥` `NEW`
1. [万妮达赢了传奇哥](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E8%B5%A2%E4%BA%86%E4%BC%A0%E5%A5%87%E5%93%A5%23) `1.5M 🔥` `NEW`
1. [中国人就吃恨海情天这套](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%B0%B1%E5%90%83%E6%81%A8%E6%B5%B7%E6%83%85%E5%A4%A9%E8%BF%99%E5%A5%97%23) `608.1K 🔥` `NEW`
1. [微信朋友圈互删清空对方全部痕迹](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%BA%92%E5%88%A0%E6%B8%85%E7%A9%BA%E5%AF%B9%E6%96%B9%E5%85%A8%E9%83%A8%E7%97%95%E8%BF%B9%23) `584.2K 🔥` `NEW`
1. [张继科乒乓球百分大战](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E4%B9%92%E4%B9%93%E7%90%83%E7%99%BE%E5%88%86%E5%A4%A7%E6%88%98%23) `584.0K 🔥` `NEW`
1. [警方通报男子恶意仅退款榴莲](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E6%81%B6%E6%84%8F%E4%BB%85%E9%80%80%E6%AC%BE%E6%A6%B4%E8%8E%B2%23) `583.9K 🔥` `NEW`
1. [女子称酒后被性侵涉事男子妻子发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%85%92%E5%90%8E%E8%A2%AB%E6%80%A7%E4%BE%B5%E6%B6%89%E4%BA%8B%E7%94%B7%E5%AD%90%E5%A6%BB%E5%AD%90%E5%8F%91%E5%A3%B0%23) `583.6K 🔥` `NEW`
1. [原来黎深建模是百面千相的大佬做的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%BB%8E%E6%B7%B1%E5%BB%BA%E6%A8%A1%E6%98%AF%E7%99%BE%E9%9D%A2%E5%8D%83%E7%9B%B8%E7%9A%84%E5%A4%A7%E4%BD%AC%E5%81%9A%E7%9A%84%23) `583.4K 🔥` `NEW`
1. [缉毒警的遗言被警嫂一巴掌打断 (The anti-narcotics police officer’s last words were interrupted by a slap from the police wife)](https://s.weibo.com/weibo?q=%23%E7%BC%89%E6%AF%92%E8%AD%A6%E7%9A%84%E9%81%97%E8%A8%80%E8%A2%AB%E8%AD%A6%E5%AB%82%E4%B8%80%E5%B7%B4%E6%8E%8C%E6%89%93%E6%96%AD%23) `583.2K 🔥` `NEW`
1. [男子体验16元祛痘背上了4万多贷款](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BD%93%E9%AA%8C16%E5%85%83%E7%A5%9B%E7%97%98%E8%83%8C%E4%B8%8A%E4%BA%864%E4%B8%87%E5%A4%9A%E8%B4%B7%E6%AC%BE%23) `582.8K 🔥` `NEW`
1. [DeepSeek为何大规模招人](https://s.weibo.com/weibo?q=%23DeepSeek%E4%B8%BA%E4%BD%95%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8B%9B%E4%BA%BA%23) `582.6K 🔥` `NEW`
1. [孙俪我最差也是第五名了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%88%91%E6%9C%80%E5%B7%AE%E4%B9%9F%E6%98%AF%E7%AC%AC%E4%BA%94%E5%90%8D%E4%BA%86%23) `582.6K 🔥` `NEW`
1. [白宇杨幂中国电视节目海外推广大使](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%87%E6%9D%A8%E5%B9%82%E4%B8%AD%E5%9B%BD%E7%94%B5%E8%A7%86%E8%8A%82%E7%9B%AE%E6%B5%B7%E5%A4%96%E6%8E%A8%E5%B9%BF%E5%A4%A7%E4%BD%BF%23) `582.5K 🔥` `NEW`
1. [人类对折叠屏的开发不足1%](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E5%AF%B9%E6%8A%98%E5%8F%A0%E5%B1%8F%E7%9A%84%E5%BC%80%E5%8F%91%E4%B8%8D%E8%B6%B31%25%23) `582.2K 🔥` `NEW`
1. [歌手直播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `582.1K 🔥` `NEW`
1. [西安住持做法事被控诈骗案检方撤诉](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%BD%8F%E6%8C%81%E5%81%9A%E6%B3%95%E4%BA%8B%E8%A2%AB%E6%8E%A7%E8%AF%88%E9%AA%97%E6%A1%88%E6%A3%80%E6%96%B9%E6%92%A4%E8%AF%89%23) `581.9K 🔥` `NEW`
1. [建成3年的文旅新地标被改烧烤店](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E6%88%903%E5%B9%B4%E7%9A%84%E6%96%87%E6%97%85%E6%96%B0%E5%9C%B0%E6%A0%87%E8%A2%AB%E6%94%B9%E7%83%A7%E7%83%A4%E5%BA%97%23) `581.5K 🔥` `NEW`
1. [杨紫的手半天没出来](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9A%84%E6%89%8B%E5%8D%8A%E5%A4%A9%E6%B2%A1%E5%87%BA%E6%9D%A5%23) `581.4K 🔥` `NEW`
1. [白玉兰座位 (magnolia seat)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E5%BA%A7%E4%BD%8D%23) `581.3K 🔥` `NEW`
1. [万妮达完全女王](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E5%AE%8C%E5%85%A8%E5%A5%B3%E7%8E%8B%23) `581.1K 🔥` `NEW`
1. [侯明昊选的歌太难了](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E9%80%89%E7%9A%84%E6%AD%8C%E5%A4%AA%E9%9A%BE%E4%BA%86%23) `581.0K 🔥` `NEW`
1. [折叠屏控虾秒变AgentPhone](https://s.weibo.com/weibo?q=%23%E6%8A%98%E5%8F%A0%E5%B1%8F%E6%8E%A7%E8%99%BE%E7%A7%92%E5%8F%98AgentPhone%23) `573.9K 🔥` `NEW`
1. [齐豫嗓子怎么了](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%B1%AB%E5%97%93%E5%AD%90%E6%80%8E%E4%B9%88%E4%BA%86%23) `573.8K 🔥` `NEW`
1. [岸田文雄谈中日关系走向](https://s.weibo.com/weibo?q=%23%E5%B2%B8%E7%94%B0%E6%96%87%E9%9B%84%E8%B0%88%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%E8%B5%B0%E5%90%91%23) `488.1K 🔥` `NEW`
1. [周杰伦演唱会](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `483.9K 🔥` `NEW`
1. [杨紫 明媚的水蜜桃](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E6%98%8E%E5%AA%9A%E7%9A%84%E6%B0%B4%E8%9C%9C%E6%A1%83%23) `473.8K 🔥` `NEW`
1. [启境GT7首搭华为乾崑ADS5](https://s.weibo.com/weibo?q=%23%E5%90%AF%E5%A2%83GT7%E9%A6%96%E6%90%AD%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91ADS5%23) `441.5K 🔥` `NEW`
1. [河南南阳通报无主冻货被查扣拍卖](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%8D%97%E9%98%B3%E9%80%9A%E6%8A%A5%E6%97%A0%E4%B8%BB%E5%86%BB%E8%B4%A7%E8%A2%AB%E6%9F%A5%E6%89%A3%E6%8B%8D%E5%8D%96%23) `440.2K 🔥` `NEW`
1. [朝鲜反腐少将被查 (North Korea’s anti-corruption major general under investigation)](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E5%8F%8D%E8%85%90%E5%B0%91%E5%B0%86%E8%A2%AB%E6%9F%A5%23) `428.7K 🔥` `NEW`
1. [歌手顺序](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E9%A1%BA%E5%BA%8F%23) `426.7K 🔥` `NEW`
1. [看超级少女变超拽少女 (Watch a super girl become a super girl)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E8%B6%85%E7%BA%A7%E5%B0%91%E5%A5%B3%E5%8F%98%E8%B6%85%E6%8B%BD%E5%B0%91%E5%A5%B3%23) `593.8K 🔥` `+39%`
1. [工作后才明白爸妈为什么买熟菜回家](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%90%8E%E6%89%8D%E6%98%8E%E7%99%BD%E7%88%B8%E5%A6%88%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B9%B0%E7%86%9F%E8%8F%9C%E5%9B%9E%E5%AE%B6%23) `584.3K 🔥` `+185%`
1. [时代少年团 运动会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `581.9K 🔥`
1. [杨幂 绿瓷美人](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E7%BB%BF%E7%93%B7%E7%BE%8E%E4%BA%BA%23) `583.8K 🔥` `-37%`
1. [刘亦菲白玉兰出逃一周年](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%99%BD%E7%8E%89%E5%85%B0%E5%87%BA%E9%80%83%E4%B8%80%E5%91%A8%E5%B9%B4%23) `583.7K 🔥` `-32%`
1. [白玉兰 (white magnolia)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `583.2K 🔥` `-46%`
1. [亚洲市场暴跌](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%B4%B2%E5%B8%82%E5%9C%BA%E6%9A%B4%E8%B7%8C%23) `583.0K 🔥` `-36%`
1. [再进化下去西瓜皮要没有了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%BF%9B%E5%8C%96%E4%B8%8B%E5%8E%BB%E8%A5%BF%E7%93%9C%E7%9A%AE%E8%A6%81%E6%B2%A1%E6%9C%89%E4%BA%86%23) `582.9K 🔥` `-36%`
1. [爸爸一躺下小孩面相变了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%B8%80%E8%BA%BA%E4%B8%8B%E5%B0%8F%E5%AD%A9%E9%9D%A2%E7%9B%B8%E5%8F%98%E4%BA%86%23) `582.0K 🔥` `-38%`
1. [A股缩量419亿调整 (A-share shrinkage adjusted by 41.9 billion)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%BC%A9%E9%87%8F419%E4%BA%BF%E8%B0%83%E6%95%B4%23) `581.7K 🔥` `-23%`
1. [郑钦文vs西尼亚科娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%A5%BF%E5%B0%BC%E4%BA%9A%E7%A7%91%E5%A8%83%23) `581.2K 🔥` `-50%`
1. [AG 首发名单 (AG starting list)](https://s.weibo.com/weibo?q=%23AG%20%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95%23) `573.9K 🔥` `-43%`
1. [白玉兰红毯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E7%BA%A2%E6%AF%AF%23) `564.2K 🔥` `-48%`
1. [恋与深空 (Love and deep space)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `516.3K 🔥` `-33%`
1. [苹果涨价引山姆代购潮 (Apple price increase triggers Sam's purchasing trend)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%B6%A8%E4%BB%B7%E5%BC%95%E5%B1%B1%E5%A7%86%E4%BB%A3%E8%B4%AD%E6%BD%AE%23) `485.6K 🔥` `-58%`
1. [白鹿新歌抄袭质疑被拆解](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E6%AD%8C%E6%8A%84%E8%A2%AD%E8%B4%A8%E7%96%91%E8%A2%AB%E6%8B%86%E8%A7%A3%23) `440.1K 🔥` `-40%`
1. [关晓彤瘦了好多](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%98%A6%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `427.7K 🔥` `-39%`

Updated at 2026-06-26 21:26:09

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
