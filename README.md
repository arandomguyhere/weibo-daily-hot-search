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

1. [iG对战GEN](https://s.weibo.com/weibo?q=%23iG%E5%AF%B9%E6%88%98GEN%23) `903.7K 🔥` `NEW`
1. [曾舜晞喊你看京东校园之星总决赛](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E5%96%8A%E4%BD%A0%E7%9C%8B%E4%BA%AC%E4%B8%9C%E6%A0%A1%E5%9B%AD%E4%B9%8B%E6%98%9F%E6%80%BB%E5%86%B3%E8%B5%9B%23) `437.9K 🔥` `NEW`
1. [于正求厉娜原谅许飞](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E6%B1%82%E5%8E%89%E5%A8%9C%E5%8E%9F%E8%B0%85%E8%AE%B8%E9%A3%9E%23) `425.1K 🔥` `NEW`
1. [陈熠0比4温特](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%86%A00%E6%AF%944%E6%B8%A9%E7%89%B9%23) `194.9K 🔥` `NEW`
1. [莱巴金娜退出年终总决赛](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E9%80%80%E5%87%BA%E5%B9%B4%E7%BB%88%E6%80%BB%E5%86%B3%E8%B5%9B%23) `165.0K 🔥` `NEW`
1. [松岛辉空2比4弗朗西斯卡](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA2%E6%AF%944%E5%BC%97%E6%9C%97%E8%A5%BF%E6%96%AF%E5%8D%A1%23) `162.3K 🔥` `NEW`
1. [网友发现棉服填充物是聚酯纤维](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%8F%91%E7%8E%B0%E6%A3%89%E6%9C%8D%E5%A1%AB%E5%85%85%E7%89%A9%E6%98%AF%E8%81%9A%E9%85%AF%E7%BA%A4%E7%BB%B4%23) `151.7K 🔥` `NEW`
1. [日军侵华时也曾用漫才做宣传](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%86%9B%E4%BE%B5%E5%8D%8E%E6%97%B6%E4%B9%9F%E6%9B%BE%E7%94%A8%E6%BC%AB%E6%89%8D%E5%81%9A%E5%AE%A3%E4%BC%A0%23) `150.6K 🔥` `NEW`
1. [白小纯青稚的关系已经成了一门学问](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E7%9A%84%E5%85%B3%E7%B3%BB%E5%B7%B2%E7%BB%8F%E6%88%90%E4%BA%86%E4%B8%80%E9%97%A8%E5%AD%A6%E9%97%AE%23) `130.0K 🔥` `NEW`
1. [英国老公拒吃中餐被夸有毅力有原则](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E8%80%81%E5%85%AC%E6%8B%92%E5%90%83%E4%B8%AD%E9%A4%90%E8%A2%AB%E5%A4%B8%E6%9C%89%E6%AF%85%E5%8A%9B%E6%9C%89%E5%8E%9F%E5%88%99%23) `129.7K 🔥` `NEW`
1. [易烊千玺](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `129.5K 🔥` `NEW`
1. [王俊凯卡清迈零点祝王源生日快乐](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8D%A1%E6%B8%85%E8%BF%88%E9%9B%B6%E7%82%B9%E7%A5%9D%E7%8E%8B%E6%BA%90%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90%23) `128.3K 🔥` `NEW`
1. [日乒3人晋级女单四强](https://s.weibo.com/weibo?q=%23%E6%97%A5%E4%B9%923%E4%BA%BA%E6%99%8B%E7%BA%A7%E5%A5%B3%E5%8D%95%E5%9B%9B%E5%BC%BA%23) `126.9K 🔥` `NEW`
1. [Canyon琪亚娜杀穿iG](https://s.weibo.com/weibo?q=%23Canyon%E7%90%AA%E4%BA%9A%E5%A8%9C%E6%9D%80%E7%A9%BFiG%23) `126.7K 🔥` `NEW`
1. [gen一比零领先ig](https://s.weibo.com/weibo?q=%23gen%E4%B8%80%E6%AF%94%E9%9B%B6%E9%A2%86%E5%85%88ig%23) `113.6K 🔥` `NEW`
1. [消息称苹果折叠屏铰链问题查明](https://s.weibo.com/weibo?q=%23%E6%B6%88%E6%81%AF%E7%A7%B0%E8%8B%B9%E6%9E%9C%E6%8A%98%E5%8F%A0%E5%B1%8F%E9%93%B0%E9%93%BE%E9%97%AE%E9%A2%98%E6%9F%A5%E6%98%8E%23) `113.1K 🔥` `NEW`
1. [我天塌了蒜苔居然是碳水啊](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A4%A9%E5%A1%8C%E4%BA%86%E8%92%9C%E8%8B%94%E5%B1%85%E7%84%B6%E6%98%AF%E7%A2%B3%E6%B0%B4%E5%95%8A%23) `113.1K 🔥` `NEW`
1. [iG开局爆炸](https://s.weibo.com/weibo?q=%23iG%E5%BC%80%E5%B1%80%E7%88%86%E7%82%B8%23) `100.1K 🔥` `NEW`
1. [瓦伦西亚vs皇马](https://s.weibo.com/weibo?q=%23%E7%93%A6%E4%BC%A6%E8%A5%BF%E4%BA%9Avs%E7%9A%87%E9%A9%AC%23) `97.5K 🔥` `NEW`
1. [偷拍丈夫出轨妻子回应为何安装监控](https://s.weibo.com/weibo?q=%23%E5%81%B7%E6%8B%8D%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A8%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BD%95%E5%AE%89%E8%A3%85%E7%9B%91%E6%8E%A7%23) `78.5K 🔥` `NEW`
1. [王俊凯](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `78.5K 🔥` `NEW`
1. [谁看到马天宇的家庭都会流泪](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%9C%8B%E5%88%B0%E9%A9%AC%E5%A4%A9%E5%AE%87%E7%9A%84%E5%AE%B6%E5%BA%AD%E9%83%BD%E4%BC%9A%E6%B5%81%E6%B3%AA%23) `76.9K 🔥` `NEW`
1. [王楚然滴眼药水把沈腾震撼到了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%BB%B4%E7%9C%BC%E8%8D%AF%E6%B0%B4%E6%8A%8A%E6%B2%88%E8%85%BE%E9%9C%87%E6%92%BC%E5%88%B0%E4%BA%86%23) `76.0K 🔥` `NEW`
1. [iG醒醒](https://s.weibo.com/weibo?q=%23iG%E9%86%92%E9%86%92%23) `75.4K 🔥` `NEW`
1. [武松打虎监控封存多年后流出](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%9D%BE%E6%89%93%E8%99%8E%E7%9B%91%E6%8E%A7%E5%B0%81%E5%AD%98%E5%A4%9A%E5%B9%B4%E5%90%8E%E6%B5%81%E5%87%BA%23) `74.6K 🔥` `NEW`
1. [诺丁汉森林3比1曼城](https://s.weibo.com/weibo?q=%23%E8%AF%BA%E4%B8%81%E6%B1%89%E6%A3%AE%E6%9E%973%E6%AF%941%E6%9B%BC%E5%9F%8E%23) `72.8K 🔥` `NEW`
1. [刘力扬是我告的密行了吧](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%8A%9B%E6%89%AC%E6%98%AF%E6%88%91%E5%91%8A%E7%9A%84%E5%AF%86%E8%A1%8C%E4%BA%86%E5%90%A7%23) `72.4K 🔥` `NEW`
1. [Canyon梦回S10](https://s.weibo.com/weibo?q=%23Canyon%E6%A2%A6%E5%9B%9ES10%23) `70.7K 🔥` `NEW`
1. [丁程鑫还回来当偶像吗](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%BF%98%E5%9B%9E%E6%9D%A5%E5%BD%93%E5%81%B6%E5%83%8F%E5%90%97%23) `69.8K 🔥` `NEW`
1. [hi6收视拿到大芒果了](https://s.weibo.com/weibo?q=%23hi6%E6%94%B6%E8%A7%86%E6%8B%BF%E5%88%B0%E5%A4%A7%E8%8A%92%E6%9E%9C%E4%BA%86%23) `65.0K 🔥` `NEW`
1. [王一博585车组获亚军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A585%E8%BD%A6%E7%BB%84%E8%8E%B7%E4%BA%9A%E5%86%9B%23) `63.1K 🔥` `NEW`
1. [欧洲多地抗议AI数据中心](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E5%A4%9A%E5%9C%B0%E6%8A%97%E8%AE%AEAI%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%23) `57.1K 🔥` `NEW`
1. [8省份大到暴雪](https://s.weibo.com/weibo?q=%238%E7%9C%81%E4%BB%BD%E5%A4%A7%E5%88%B0%E6%9A%B4%E9%9B%AA%23) `674.1K 🔥` `+782%`
1. [共赴APEC之约](https://s.weibo.com/weibo?q=%23%E5%85%B1%E8%B5%B4APEC%E4%B9%8B%E7%BA%A6%23) `516.2K 🔥` `+590%`
1. [马天宇和张萌被审判](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%92%8C%E5%BC%A0%E8%90%8C%E8%A2%AB%E5%AE%A1%E5%88%A4%23) `128.9K 🔥` `+81%`
1. [孩子不在家夫妻还需要在一起吗](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%B8%8D%E5%9C%A8%E5%AE%B6%E5%A4%AB%E5%A6%BB%E8%BF%98%E9%9C%80%E8%A6%81%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%90%97%23) `127.9K 🔥` `+106%`
1. [爸爸去哪儿3重聚为康康庆生](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%8E%BB%E5%93%AA%E5%84%BF3%E9%87%8D%E8%81%9A%E4%B8%BA%E5%BA%B7%E5%BA%B7%E5%BA%86%E7%94%9F%23) `127.2K 🔥` `+80%`
1. [王楚然表白完黄景瑜愣住了两秒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%A1%A8%E7%99%BD%E5%AE%8C%E9%BB%84%E6%99%AF%E7%91%9C%E6%84%A3%E4%BD%8F%E4%BA%86%E4%B8%A4%E7%A7%92%23) `113.0K 🔥` `+189%`
1. [博主私信发现两人偷情对话](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E7%A7%81%E4%BF%A1%E5%8F%91%E7%8E%B0%E4%B8%A4%E4%BA%BA%E5%81%B7%E6%83%85%E5%AF%B9%E8%AF%9D%23) `105.6K 🔥` `+68%`
1. [两千万粉博主称不投流卖三万](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%8D%83%E4%B8%87%E7%B2%89%E5%8D%9A%E4%B8%BB%E7%A7%B0%E4%B8%8D%E6%8A%95%E6%B5%81%E5%8D%96%E4%B8%89%E4%B8%87%23) `95.1K 🔥` `+64%`
1. [炎亚纶这次我真得站你这边了](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E8%BF%99%E6%AC%A1%E6%88%91%E7%9C%9F%E5%BE%97%E7%AB%99%E4%BD%A0%E8%BF%99%E8%BE%B9%E4%BA%86%23) `88.9K 🔥` `+49%`
1. [北京的雪有多大](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E7%9A%84%E9%9B%AA%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `81.6K 🔥` `+134%`
1. [刘丹透露小糯米在英国读书](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%B9%E9%80%8F%E9%9C%B2%E5%B0%8F%E7%B3%AF%E7%B1%B3%E5%9C%A8%E8%8B%B1%E5%9B%BD%E8%AF%BB%E4%B9%A6%23) `80.4K 🔥` `+78%`
1. [五毒之人碰到纯阳之体](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%AF%92%E4%B9%8B%E4%BA%BA%E7%A2%B0%E5%88%B0%E7%BA%AF%E9%98%B3%E4%B9%8B%E4%BD%93%23) `72.2K 🔥` `+86%`
1. [国乒男单6站冠军赛仅1次晋级决赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%956%E7%AB%99%E5%86%A0%E5%86%9B%E8%B5%9B%E4%BB%851%E6%AC%A1%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `68.8K 🔥` `+23%`
1. [大S剥虾论八年后被读懂](https://s.weibo.com/weibo?q=%23%E5%A4%A7S%E5%89%A5%E8%99%BE%E8%AE%BA%E5%85%AB%E5%B9%B4%E5%90%8E%E8%A2%AB%E8%AF%BB%E6%87%82%23) `67.0K 🔥` `+66%`
1. [朋友竟是欠租三年的租客](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E7%AB%9F%E6%98%AF%E6%AC%A0%E7%A7%9F%E4%B8%89%E5%B9%B4%E7%9A%84%E7%A7%9F%E5%AE%A2%23) `66.4K 🔥` `+70%`
1. [战国宝珠酷似蓝色星球](https://s.weibo.com/weibo?q=%23%E6%88%98%E5%9B%BD%E5%AE%9D%E7%8F%A0%E9%85%B7%E4%BC%BC%E8%93%9D%E8%89%B2%E6%98%9F%E7%90%83%23) `63.1K 🔥` `+101%`
1. [梁文锋DeepSeek不止国运级](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8BDeepSeek%E4%B8%8D%E6%AD%A2%E5%9B%BD%E8%BF%90%E7%BA%A7%23) `56.4K 🔥` `+49%`
1. [今何在](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E4%BD%95%E5%9C%A8%23) `73.8K 🔥`
1. [鹿晗投资天霸至今没拿过分红](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%8A%95%E8%B5%84%E5%A4%A9%E9%9C%B8%E8%87%B3%E4%BB%8A%E6%B2%A1%E6%8B%BF%E8%BF%87%E5%88%86%E7%BA%A2%23) `70.1K 🔥`

Updated at 2026-11-08 07:35:58

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
