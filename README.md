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

1. [iPhone17Pro史上最低价](https://s.weibo.com/weibo?q=%23iPhone17Pro%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%BD%8E%E4%BB%B7%23) `1.6M 🔥` `NEW`
1. [车主称坠楼砸车小孩家长态度转变](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%B8%BB%E7%A7%B0%E5%9D%A0%E6%A5%BC%E7%A0%B8%E8%BD%A6%E5%B0%8F%E5%AD%A9%E5%AE%B6%E9%95%BF%E6%80%81%E5%BA%A6%E8%BD%AC%E5%8F%98%23) `1.5M 🔥` `NEW`
1. [辽E点看法](https://s.weibo.com/weibo?q=%23%E8%BE%BDE%E7%82%B9%E7%9C%8B%E6%B3%95%23) `1.3M 🔥` `NEW`
1. [洪水中被蛇咬身亡女子家属起诉养殖户](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E6%B0%B4%E4%B8%AD%E8%A2%AB%E8%9B%87%E5%92%AC%E8%BA%AB%E4%BA%A1%E5%A5%B3%E5%AD%90%E5%AE%B6%E5%B1%9E%E8%B5%B7%E8%AF%89%E5%85%BB%E6%AE%96%E6%88%B7%23) `1.2M 🔥` `NEW`
1. [库克 华为](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%20%E5%8D%8E%E4%B8%BA%23) `559.0K 🔥` `NEW`
1. [李现李一桐剧宣](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E6%9D%8E%E4%B8%80%E6%A1%90%E5%89%A7%E5%AE%A3%23) `490.6K 🔥` `NEW`
1. [开学季两类病毒防范常见误区](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AD%A6%E5%AD%A3%E4%B8%A4%E7%B1%BB%E7%97%85%E6%AF%92%E9%98%B2%E8%8C%83%E5%B8%B8%E8%A7%81%E8%AF%AF%E5%8C%BA%23) `467.0K 🔥` `NEW`
1. [景德镇学院通报宿舍调整事件](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%BE%B7%E9%95%87%E5%AD%A6%E9%99%A2%E9%80%9A%E6%8A%A5%E5%AE%BF%E8%88%8D%E8%B0%83%E6%95%B4%E4%BA%8B%E4%BB%B6%23) `434.4K 🔥` `NEW`
1. [萨巴伦卡莱巴金娜美网争冠](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E7%BE%8E%E7%BD%91%E4%BA%89%E5%86%A0%23) `380.2K 🔥` `NEW`
1. [复刻栾念的家](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E5%88%BB%E6%A0%BE%E5%BF%B5%E7%9A%84%E5%AE%B6%23) `322.5K 🔥` `NEW`
1. [花儿与少年8](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B48%23) `321.3K 🔥` `NEW`
1. [邻居表示梅姨儿子20多岁是个傻儿子](https://s.weibo.com/weibo?q=%23%E9%82%BB%E5%B1%85%E8%A1%A8%E7%A4%BA%E6%A2%85%E5%A7%A8%E5%84%BF%E5%AD%9020%E5%A4%9A%E5%B2%81%E6%98%AF%E4%B8%AA%E5%82%BB%E5%84%BF%E5%AD%90%23) `319.2K 🔥` `NEW`
1. [章若楠说大家卸了妆都长一样](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%AF%B4%E5%A4%A7%E5%AE%B6%E5%8D%B8%E4%BA%86%E5%A6%86%E9%83%BD%E9%95%BF%E4%B8%80%E6%A0%B7%23) `316.5K 🔥` `NEW`
1. [范丞丞ins发抽烟照](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9Eins%E5%8F%91%E6%8A%BD%E7%83%9F%E7%85%A7%23) `314.7K 🔥` `NEW`
1. [苹果价格把我的购物欲治好了](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E4%BB%B7%E6%A0%BC%E6%8A%8A%E6%88%91%E7%9A%84%E8%B4%AD%E7%89%A9%E6%AC%B2%E6%B2%BB%E5%A5%BD%E4%BA%86%23) `310.3K 🔥` `NEW`
1. [谭松韵人缘](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E4%BA%BA%E7%BC%98%23) `307.9K 🔥` `NEW`
1. [小S大女儿二女儿创立品牌](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%A4%A7%E5%A5%B3%E5%84%BF%E4%BA%8C%E5%A5%B3%E5%84%BF%E5%88%9B%E7%AB%8B%E5%93%81%E7%89%8C%23) `305.0K 🔥` `NEW`
1. [第一批用阿福的人瘦了500万斤](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%94%A8%E9%98%BF%E7%A6%8F%E7%9A%84%E4%BA%BA%E7%98%A6%E4%BA%86500%E4%B8%87%E6%96%A4%23) `304.1K 🔥` `NEW`
1. [井柏然刘雯顶峰相见](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%E9%A1%B6%E5%B3%B0%E7%9B%B8%E8%A7%81%23) `302.5K 🔥` `NEW`
1. [A股又调整](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8F%88%E8%B0%83%E6%95%B4%23) `300.9K 🔥` `NEW`
1. [我还在用正太苹果](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%BF%98%E5%9C%A8%E7%94%A8%E6%AD%A3%E5%A4%AA%E8%8B%B9%E6%9E%9C%23) `299.7K 🔥` `NEW`
1. [杭州一阿里员工被派去看苹果发布会](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%B8%80%E9%98%BF%E9%87%8C%E5%91%98%E5%B7%A5%E8%A2%AB%E6%B4%BE%E5%8E%BB%E7%9C%8B%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `298.2K 🔥` `NEW`
1. [跨省抓女儿父母 处罚](https://s.weibo.com/weibo?q=%23%E8%B7%A8%E7%9C%81%E6%8A%93%E5%A5%B3%E5%84%BF%E7%88%B6%E6%AF%8D%20%E5%A4%84%E7%BD%9A%23) `297.1K 🔥` `NEW`
1. [刘雯纽约时装周开场](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E7%BA%BD%E7%BA%A6%E6%97%B6%E8%A3%85%E5%91%A8%E5%BC%80%E5%9C%BA%23) `281.9K 🔥` `NEW`
1. [江西台记者采访遭殴打](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%A5%BF%E5%8F%B0%E8%AE%B0%E8%80%85%E9%87%87%E8%AE%BF%E9%81%AD%E6%AE%B4%E6%89%93%23) `258.8K 🔥` `NEW`
1. [谭松韵从16岁演到80岁](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E4%BB%8E16%E5%B2%81%E6%BC%94%E5%88%B080%E5%B2%81%23) `258.1K 🔥` `NEW`
1. [披荆斩棘三公组队](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%89%E5%85%AC%E7%BB%84%E9%98%9F%23) `256.2K 🔥` `NEW`
1. [星宇股份三副总一年长两岁](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E4%B8%89%E5%89%AF%E6%80%BB%E4%B8%80%E5%B9%B4%E9%95%BF%E4%B8%A4%E5%B2%81%23) `254.4K 🔥` `NEW`
1. [胡军李乃文对穆祉丞满眼都是心疼](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%86%9B%E6%9D%8E%E4%B9%83%E6%96%87%E5%AF%B9%E7%A9%86%E7%A5%89%E4%B8%9E%E6%BB%A1%E7%9C%BC%E9%83%BD%E6%98%AF%E5%BF%83%E7%96%BC%23) `251.5K 🔥` `NEW`
1. [燃油车卖不动了加油站怎么办](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%E5%8A%A0%E6%B2%B9%E7%AB%99%E6%80%8E%E4%B9%88%E5%8A%9E%23) `250.9K 🔥` `NEW`
1. [911未公开视频](https://s.weibo.com/weibo?q=%23911%E6%9C%AA%E5%85%AC%E5%BC%80%E8%A7%86%E9%A2%91%23) `249.2K 🔥` `NEW`
1. [不得不说此人的懒商极高](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BE%97%E4%B8%8D%E8%AF%B4%E6%AD%A4%E4%BA%BA%E7%9A%84%E6%87%92%E5%95%86%E6%9E%81%E9%AB%98%23) `247.0K 🔥` `NEW`
1. [高芙无缘美网决赛](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%8A%99%E6%97%A0%E7%BC%98%E7%BE%8E%E7%BD%91%E5%86%B3%E8%B5%9B%23) `240.0K 🔥` `NEW`
1. [中国男篮大胜哈萨克斯坦](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E5%A4%A7%E8%83%9C%E5%93%88%E8%90%A8%E5%85%8B%E6%96%AF%E5%9D%A6%23) `220.4K 🔥` `NEW`
1. [收入断层第一的顶级超模](https://s.weibo.com/weibo?q=%23%E6%94%B6%E5%85%A5%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%E7%9A%84%E9%A1%B6%E7%BA%A7%E8%B6%85%E6%A8%A1%23) `211.7K 🔥` `NEW`
1. [监控拍下泰国僧人和女同伙不雅画面](https://s.weibo.com/weibo?q=%23%E7%9B%91%E6%8E%A7%E6%8B%8D%E4%B8%8B%E6%B3%B0%E5%9B%BD%E5%83%A7%E4%BA%BA%E5%92%8C%E5%A5%B3%E5%90%8C%E4%BC%99%E4%B8%8D%E9%9B%85%E7%94%BB%E9%9D%A2%23) `210.8K 🔥` `NEW`
1. [井柏然私服单品最高价四万七](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E7%A7%81%E6%9C%8D%E5%8D%95%E5%93%81%E6%9C%80%E9%AB%98%E4%BB%B7%E5%9B%9B%E4%B8%87%E4%B8%83%23) `210.4K 🔥` `NEW`
1. [兰香如故开播](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%BC%80%E6%92%AD%23) `203.5K 🔥` `NEW`
1. [央视独家青岛失火货轮舱内视频](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%8B%AC%E5%AE%B6%E9%9D%92%E5%B2%9B%E5%A4%B1%E7%81%AB%E8%B4%A7%E8%BD%AE%E8%88%B1%E5%86%85%E8%A7%86%E9%A2%91%23) `203.2K 🔥` `NEW`
1. [电视剧公主杀青](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E5%85%AC%E4%B8%BB%E6%9D%80%E9%9D%92%23) `196.2K 🔥` `NEW`
1. [章子怡 回春](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%20%E5%9B%9E%E6%98%A5%23) `174.7K 🔥` `NEW`
1. [ModelYP 小米YU7GT](https://s.weibo.com/weibo?q=%23ModelYP%20%E5%B0%8F%E7%B1%B3YU7GT%23) `173.3K 🔥` `NEW`
1. [久坐久躺一定要练踝泵运动](https://s.weibo.com/weibo?q=%23%E4%B9%85%E5%9D%90%E4%B9%85%E8%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E7%BB%83%E8%B8%9D%E6%B3%B5%E8%BF%90%E5%8A%A8%23) `170.3K 🔥` `NEW`
1. [iPhone18系列中美价差三大原因](https://s.weibo.com/weibo?q=%23iPhone18%E7%B3%BB%E5%88%97%E4%B8%AD%E7%BE%8E%E4%BB%B7%E5%B7%AE%E4%B8%89%E5%A4%A7%E5%8E%9F%E5%9B%A0%23) `166.8K 🔥` `NEW`
1. [会过日子是顶级生存能力](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E8%BF%87%E6%97%A5%E5%AD%90%E6%98%AF%E9%A1%B6%E7%BA%A7%E7%94%9F%E5%AD%98%E8%83%BD%E5%8A%9B%23) `166.0K 🔥` `NEW`
1. [宋剑仁案宣判](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%89%91%E4%BB%81%E6%A1%88%E5%AE%A3%E5%88%A4%23) `158.1K 🔥` `NEW`
1. [田栩宁什么时候原谅音乐节](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%A0%A9%E5%AE%81%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%8E%9F%E8%B0%85%E9%9F%B3%E4%B9%90%E8%8A%82%23) `158.1K 🔥` `NEW`
1. [OpenAI暂停GPTPro订阅](https://s.weibo.com/weibo?q=%23OpenAI%E6%9A%82%E5%81%9CGPTPro%E8%AE%A2%E9%98%85%23) `157.8K 🔥` `NEW`
1. [月薪1w是月薪5K的六倍](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA1w%E6%98%AF%E6%9C%88%E8%96%AA5K%E7%9A%84%E5%85%AD%E5%80%8D%23) `312.5K 🔥`
1. [车间裸奔员工因离职情绪失控](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E9%97%B4%E8%A3%B8%E5%A5%94%E5%91%98%E5%B7%A5%E5%9B%A0%E7%A6%BB%E8%81%8C%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `211.3K 🔥` `-36%`
1. [建议大家把内裤袜子丢洗衣机洗](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E6%8A%8A%E5%86%85%E8%A3%A4%E8%A2%9C%E5%AD%90%E4%B8%A2%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%B4%97%23) `201.1K 🔥` `-70%`

Updated at 2026-09-11 12:58:44

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
