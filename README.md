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

1. [巴黎圣日耳曼4比2巴萨](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BC4%E6%AF%942%E5%B7%B4%E8%90%A8%23) `816.7K 🔥` `NEW`
1. [王一博是istp](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%98%AFistp%23) `151.9K 🔥` `NEW`
1. [网红方丈前妻深夜痛哭](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%96%B9%E4%B8%88%E5%89%8D%E5%A6%BB%E6%B7%B1%E5%A4%9C%E7%97%9B%E5%93%AD%23) `139.5K 🔥` `NEW`
1. [三亚市副市长陈克伯被查](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E5%B8%82%E5%89%AF%E5%B8%82%E9%95%BF%E9%99%88%E5%85%8B%E4%BC%AF%E8%A2%AB%E6%9F%A5%23) `90.7K 🔥` `NEW`
1. [鼓浪屿冷清不复当年盛景](https://s.weibo.com/weibo?q=%23%E9%BC%93%E6%B5%AA%E5%B1%BF%E5%86%B7%E6%B8%85%E4%B8%8D%E5%A4%8D%E5%BD%93%E5%B9%B4%E7%9B%9B%E6%99%AF%23) `89.9K 🔥` `NEW`
1. [女生辞职去旅游父母转4000支持](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%BE%9E%E8%81%8C%E5%8E%BB%E6%97%85%E6%B8%B8%E7%88%B6%E6%AF%8D%E8%BD%AC4000%E6%94%AF%E6%8C%81%23) `89.1K 🔥` `NEW`
1. [国际油价上演大逆转](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E6%B2%B9%E4%BB%B7%E4%B8%8A%E6%BC%94%E5%A4%A7%E9%80%86%E8%BD%AC%23) `88.2K 🔥` `NEW`
1. [钟南山不老秘诀是抗阻训练](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E4%B8%8D%E8%80%81%E7%A7%98%E8%AF%80%E6%98%AF%E6%8A%97%E9%98%BB%E8%AE%AD%E7%BB%83%23) `81.6K 🔥` `NEW`
1. [国乒亚锦赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E4%BA%9A%E9%94%A6%E8%B5%9B%23) `80.3K 🔥` `NEW`
1. [大冰教你百试不爽拒绝借钱](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E6%95%99%E4%BD%A0%E7%99%BE%E8%AF%95%E4%B8%8D%E7%88%BD%E6%8B%92%E7%BB%9D%E5%80%9F%E9%92%B1%23) `80.0K 🔥` `NEW`
1. [塔图姆23中6](https://s.weibo.com/weibo?q=%23%E5%A1%94%E5%9B%BE%E5%A7%8623%E4%B8%AD6%23) `79.6K 🔥` `NEW`
1. [大冰掏心掏肺谈职场](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E6%8E%8F%E5%BF%83%E6%8E%8F%E8%82%BA%E8%B0%88%E8%81%8C%E5%9C%BA%23) `78.6K 🔥` `NEW`
1. [短裙变长裙这也太美了啊](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E8%A3%99%E5%8F%98%E9%95%BF%E8%A3%99%E8%BF%99%E4%B9%9F%E5%A4%AA%E7%BE%8E%E4%BA%86%E5%95%8A%23) `78.5K 🔥` `NEW`
1. [活塞22分逆转凯尔特人](https://s.weibo.com/weibo?q=%23%E6%B4%BB%E5%A1%9E22%E5%88%86%E9%80%86%E8%BD%AC%E5%87%AF%E5%B0%94%E7%89%B9%E4%BA%BA%23) `65.7K 🔥` `NEW`
1. [德国盾构机卖印度需中国放行](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E7%9B%BE%E6%9E%84%E6%9C%BA%E5%8D%96%E5%8D%B0%E5%BA%A6%E9%9C%80%E4%B8%AD%E5%9B%BD%E6%94%BE%E8%A1%8C%23) `64.6K 🔥` `NEW`
1. [贵州花江峡谷大桥水幕瀑布](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E8%8A%B1%E6%B1%9F%E5%B3%A1%E8%B0%B7%E5%A4%A7%E6%A1%A5%E6%B0%B4%E5%B9%95%E7%80%91%E5%B8%83%23) `45.5K 🔥` `NEW`
1. [男子捡到38000元留了道题给失主](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8D%A1%E5%88%B038000%E5%85%83%E7%95%99%E4%BA%86%E9%81%93%E9%A2%98%E7%BB%99%E5%A4%B1%E4%B8%BB%23) `578.8K 🔥` `+1696%`
1. [医保个人账户跨省共济落地全国](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E4%B8%AA%E4%BA%BA%E8%B4%A6%E6%88%B7%E8%B7%A8%E7%9C%81%E5%85%B1%E6%B5%8E%E8%90%BD%E5%9C%B0%E5%85%A8%E5%9B%BD%23) `478.2K 🔥` `+375%`
1. [油车电车10年成本账怎么算](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E8%BD%A6%E7%94%B5%E8%BD%A610%E5%B9%B4%E6%88%90%E6%9C%AC%E8%B4%A6%E6%80%8E%E4%B9%88%E7%AE%97%23) `345.8K 🔥` `+443%`
1. [香港名媛碎尸案曝关键新证词](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%90%8D%E5%AA%9B%E7%A2%8E%E5%B0%B8%E6%A1%88%E6%9B%9D%E5%85%B3%E9%94%AE%E6%96%B0%E8%AF%81%E8%AF%8D%23) `234.6K 🔥` `+84%`
1. [法国乱成一锅粥了还有人威胁中国](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E4%B9%B1%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%E4%BA%86%E8%BF%98%E6%9C%89%E4%BA%BA%E5%A8%81%E8%83%81%E4%B8%AD%E5%9B%BD%23) `221.9K 🔥` `+319%`
1. [体操世锦赛男团决赛](https://s.weibo.com/weibo?q=%23%E4%BD%93%E6%93%8D%E4%B8%96%E9%94%A6%E8%B5%9B%E7%94%B7%E5%9B%A2%E5%86%B3%E8%B5%9B%23) `192.6K 🔥` `+412%`
1. [南海](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B5%B7%23) `165.6K 🔥` `+286%`
1. [到底谁把微信变成工作软件的](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E8%B0%81%E6%8A%8A%E5%BE%AE%E4%BF%A1%E5%8F%98%E6%88%90%E5%B7%A5%E4%BD%9C%E8%BD%AF%E4%BB%B6%E7%9A%84%23) `162.3K 🔥` `+497%`
1. [蔡天凤碎尸案厨具店员出庭作供](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%A4%A9%E5%87%A4%E7%A2%8E%E5%B0%B8%E6%A1%88%E5%8E%A8%E5%85%B7%E5%BA%97%E5%91%98%E5%87%BA%E5%BA%AD%E4%BD%9C%E4%BE%9B%23) `157.5K 🔥` `+568%`
1. [陆毅鲍蕾女儿18岁生日试装](https://s.weibo.com/weibo?q=%23%E9%99%86%E6%AF%85%E9%B2%8D%E8%95%BE%E5%A5%B3%E5%84%BF18%E5%B2%81%E7%94%9F%E6%97%A5%E8%AF%95%E8%A3%85%23) `155.8K 🔥` `+297%`
1. [刘雯维密回归太权威了](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E7%BB%B4%E5%AF%86%E5%9B%9E%E5%BD%92%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23) `146.5K 🔥` `+266%`
1. [广州白云代孕地下手术室被举报](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E7%99%BD%E4%BA%91%E4%BB%A3%E5%AD%95%E5%9C%B0%E4%B8%8B%E6%89%8B%E6%9C%AF%E5%AE%A4%E8%A2%AB%E4%B8%BE%E6%8A%A5%23) `142.8K 🔥` `+355%`
1. [科技新一说宁德时代利润太吓人了](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80%E8%AF%B4%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%88%A9%E6%B6%A6%E5%A4%AA%E5%90%93%E4%BA%BA%E4%BA%86%23) `137.0K 🔥` `+411%`
1. [易梦玲巴黎被偷](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E5%B7%B4%E9%BB%8E%E8%A2%AB%E5%81%B7%23) `136.9K 🔥` `+357%`
1. [等等党赢麻了](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%AD%89%E5%85%9A%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `118.7K 🔥` `+346%`
1. [唐禹哲获刑1年7个月缓刑3年](https://s.weibo.com/weibo?q=%23%E5%94%90%E7%A6%B9%E5%93%B2%E8%8E%B7%E5%88%911%E5%B9%B47%E4%B8%AA%E6%9C%88%E7%BC%93%E5%88%913%E5%B9%B4%23) `90.5K 🔥` `+256%`
1. [沈阳致6死16伤公交事故多人被处理](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E8%87%B46%E6%AD%BB16%E4%BC%A4%E5%85%AC%E4%BA%A4%E4%BA%8B%E6%95%85%E5%A4%9A%E4%BA%BA%E8%A2%AB%E5%A4%84%E7%90%86%23) `89.4K 🔥` `+253%`
1. [理想汽车发布电池保障政策](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A6%E5%8F%91%E5%B8%83%E7%94%B5%E6%B1%A0%E4%BF%9D%E9%9A%9C%E6%94%BF%E7%AD%96%23) `88.9K 🔥` `+277%`
1. [钟南山今天90岁了](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E4%BB%8A%E5%A4%A990%E5%B2%81%E4%BA%86%23) `88.0K 🔥` `+164%`
1. [田曦薇 我望着你不肯后退的眼睛](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%88%91%E6%9C%9B%E7%9D%80%E4%BD%A0%E4%B8%8D%E8%82%AF%E5%90%8E%E9%80%80%E7%9A%84%E7%9C%BC%E7%9D%9B%23) `85.9K 🔥` `+210%`
1. [旭日旗事件涉事学生曾骂劝阻同学](https://s.weibo.com/weibo?q=%23%E6%97%AD%E6%97%A5%E6%97%97%E4%BA%8B%E4%BB%B6%E6%B6%89%E4%BA%8B%E5%AD%A6%E7%94%9F%E6%9B%BE%E9%AA%82%E5%8A%9D%E9%98%BB%E5%90%8C%E5%AD%A6%23) `77.9K 🔥` `+205%`
1. [你怎么养我小我怎么养你老](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%80%8E%E4%B9%88%E5%85%BB%E6%88%91%E5%B0%8F%E6%88%91%E6%80%8E%E4%B9%88%E5%85%BB%E4%BD%A0%E8%80%81%23) `67.2K 🔥` `+186%`
1. [玉簟秋追夫名场面](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8B%E8%BF%BD%E5%A4%AB%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `63.1K 🔥` `+233%`
1. [曝湖南台力捧张雅琪原因](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B9%96%E5%8D%97%E5%8F%B0%E5%8A%9B%E6%8D%A7%E5%BC%A0%E9%9B%85%E7%90%AA%E5%8E%9F%E5%9B%A0%23) `59.9K 🔥` `+44%`
1. [女子往店里搬水男子帮忙却被造黄谣](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BE%80%E5%BA%97%E9%87%8C%E6%90%AC%E6%B0%B4%E7%94%B7%E5%AD%90%E5%B8%AE%E5%BF%99%E5%8D%B4%E8%A2%AB%E9%80%A0%E9%BB%84%E8%B0%A3%23) `58.8K 🔥` `+149%`
1. [吴越这段话我反复听了十几遍](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B6%8A%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%88%91%E5%8F%8D%E5%A4%8D%E5%90%AC%E4%BA%86%E5%8D%81%E5%87%A0%E9%81%8D%23) `57.9K 🔥` `+208%`
1. [医生回应钟南山心梗后每周运动3次](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E9%92%9F%E5%8D%97%E5%B1%B1%E5%BF%83%E6%A2%97%E5%90%8E%E6%AF%8F%E5%91%A8%E8%BF%90%E5%8A%A83%E6%AC%A1%23) `57.5K 🔥` `+145%`
1. [剧集告别信](https://s.weibo.com/weibo?q=%23%E5%89%A7%E9%9B%86%E5%91%8A%E5%88%AB%E4%BF%A1%23) `56.2K 🔥` `+127%`
1. [奚梦瑶走秀时脚被纱挂住了](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E8%B5%B0%E7%A7%80%E6%97%B6%E8%84%9A%E8%A2%AB%E7%BA%B1%E6%8C%82%E4%BD%8F%E4%BA%86%23) `52.4K 🔥` `+122%`
1. [Ally一上来就把男嘉宾钓晕了](https://s.weibo.com/weibo?q=%23Ally%E4%B8%80%E4%B8%8A%E6%9D%A5%E5%B0%B1%E6%8A%8A%E7%94%B7%E5%98%89%E5%AE%BE%E9%92%93%E6%99%95%E4%BA%86%23) `52.0K 🔥` `+149%`
1. [井柏然最有腔调的红毯来了](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%9C%80%E6%9C%89%E8%85%94%E8%B0%83%E7%9A%84%E7%BA%A2%E6%AF%AF%E6%9D%A5%E4%BA%86%23) `48.3K 🔥` `+156%`
1. [小英被指忘本](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E8%A2%AB%E6%8C%87%E5%BF%98%E6%9C%AC%23) `48.1K 🔥` `+99%`
1. [张予曦同款荣耀WIN2上京东有惊喜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E5%90%8C%E6%AC%BE%E8%8D%A3%E8%80%80WIN2%E4%B8%8A%E4%BA%AC%E4%B8%9C%E6%9C%89%E6%83%8A%E5%96%9C%23) `194.6K 🔥`

Updated at 2026-10-21 07:26:34

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
