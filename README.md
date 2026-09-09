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

1. [早春晴朗大结局](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%A4%A7%E7%BB%93%E5%B1%80%23) `1.6M 🔥` `NEW`
1. [梅姨在广州摆摊卖切块芒果](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%9C%A8%E5%B9%BF%E5%B7%9E%E6%91%86%E6%91%8A%E5%8D%96%E5%88%87%E5%9D%97%E8%8A%92%E6%9E%9C%23) `962.3K 🔥` `NEW`
1. [服贸会今日开幕](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E8%B4%B8%E4%BC%9A%E4%BB%8A%E6%97%A5%E5%BC%80%E5%B9%95%23) `796.2K 🔥` `NEW`
1. [女孩去邻居家吃饭惨遭夫妻分尸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%8E%BB%E9%82%BB%E5%B1%85%E5%AE%B6%E5%90%83%E9%A5%AD%E6%83%A8%E9%81%AD%E5%A4%AB%E5%A6%BB%E5%88%86%E5%B0%B8%23) `783.9K 🔥` `NEW`
1. [美网仅剩郑钦文与前五种子](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E4%BB%85%E5%89%A9%E9%83%91%E9%92%A6%E6%96%87%E4%B8%8E%E5%89%8D%E4%BA%94%E7%A7%8D%E5%AD%90%23) `762.0K 🔥` `NEW`
1. [栾念求婚成功](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E6%B1%82%E5%A9%9A%E6%88%90%E5%8A%9F%23) `519.4K 🔥` `NEW`
1. [TF2026绝色之夜](https://s.weibo.com/weibo?q=%23TF2026%E7%BB%9D%E8%89%B2%E4%B9%8B%E5%A4%9C%23) `488.6K 🔥` `NEW`
1. [复方甘草片 低钾血](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E6%96%B9%E7%94%98%E8%8D%89%E7%89%87%20%E4%BD%8E%E9%92%BE%E8%A1%80%23) `464.4K 🔥` `NEW`
1. [西电学生回应数学开学考](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%94%B5%E5%AD%A6%E7%94%9F%E5%9B%9E%E5%BA%94%E6%95%B0%E5%AD%A6%E5%BC%80%E5%AD%A6%E8%80%83%23) `457.6K 🔥` `NEW`
1. [荣耀Magic9系列定档9月28日](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80Magic9%E7%B3%BB%E5%88%97%E5%AE%9A%E6%A1%A39%E6%9C%8828%E6%97%A5%23) `436.3K 🔥` `NEW`
1. [早春晴朗2026优酷剧集破万天数TOP1](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%972026%E4%BC%98%E9%85%B7%E5%89%A7%E9%9B%86%E7%A0%B4%E4%B8%87%E5%A4%A9%E6%95%B0TOP1%23) `434.7K 🔥` `NEW`
1. [有了低保就一定要活成穷人样子么](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%86%E4%BD%8E%E4%BF%9D%E5%B0%B1%E4%B8%80%E5%AE%9A%E8%A6%81%E6%B4%BB%E6%88%90%E7%A9%B7%E4%BA%BA%E6%A0%B7%E5%AD%90%E4%B9%88%23) `434.0K 🔥` `NEW`
1. [被台湾省人点赞10万的简中文豪](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%8F%B0%E6%B9%BE%E7%9C%81%E4%BA%BA%E7%82%B9%E8%B5%9E10%E4%B8%87%E7%9A%84%E7%AE%80%E4%B8%AD%E6%96%87%E8%B1%AA%23) `432.0K 🔥` `NEW`
1. [被指控摸臀男童父亲发声](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%8C%87%E6%8E%A7%E6%91%B8%E8%87%80%E7%94%B7%E7%AB%A5%E7%88%B6%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `430.7K 🔥` `NEW`
1. [丈夫称为保护孕妻杀害邻居女孩](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E7%A7%B0%E4%B8%BA%E4%BF%9D%E6%8A%A4%E5%AD%95%E5%A6%BB%E6%9D%80%E5%AE%B3%E9%82%BB%E5%B1%85%E5%A5%B3%E5%AD%A9%23) `429.7K 🔥` `NEW`
1. [柯淳演电影了](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B7%B3%E6%BC%94%E7%94%B5%E5%BD%B1%E4%BA%86%23) `370.3K 🔥` `NEW`
1. [一只羊脱衣全过程](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%AA%E7%BE%8A%E8%84%B1%E8%A1%A3%E5%85%A8%E8%BF%87%E7%A8%8B%23) `351.3K 🔥` `NEW`
1. [电影活色生香定档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%B4%BB%E8%89%B2%E7%94%9F%E9%A6%99%E5%AE%9A%E6%A1%A3%23) `326.4K 🔥` `NEW`
1. [美伊以冲突](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E4%BB%A5%E5%86%B2%E7%AA%81%23) `325.7K 🔥` `NEW`
1. [8月汽车销量前10全是纯电](https://s.weibo.com/weibo?q=%238%E6%9C%88%E6%B1%BD%E8%BD%A6%E9%94%80%E9%87%8F%E5%89%8D10%E5%85%A8%E6%98%AF%E7%BA%AF%E7%94%B5%23) `324.9K 🔥` `NEW`
1. [我国没规定强制双休不等于单休合法](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B2%A1%E8%A7%84%E5%AE%9A%E5%BC%BA%E5%88%B6%E5%8F%8C%E4%BC%91%E4%B8%8D%E7%AD%89%E4%BA%8E%E5%8D%95%E4%BC%91%E5%90%88%E6%B3%95%23) `323.6K 🔥` `NEW`
1. [为躲债假离婚后发现妻子真出轨](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E8%BA%B2%E5%80%BA%E5%81%87%E7%A6%BB%E5%A9%9A%E5%90%8E%E5%8F%91%E7%8E%B0%E5%A6%BB%E5%AD%90%E7%9C%9F%E5%87%BA%E8%BD%A8%23) `320.1K 🔥` `NEW`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `318.9K 🔥` `NEW`
1. [刘浩存后援会暂停工作](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%90%8E%E6%8F%B4%E4%BC%9A%E6%9A%82%E5%81%9C%E5%B7%A5%E4%BD%9C%23) `318.8K 🔥` `NEW`
1. [郭富城握手礼仪被研究透了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E6%8F%A1%E6%89%8B%E7%A4%BC%E4%BB%AA%E8%A2%AB%E7%A0%94%E7%A9%B6%E9%80%8F%E4%BA%86%23) `302.5K 🔥` `NEW`
1. [小S问女儿晒辣照前怎么不先问妈妈](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E9%97%AE%E5%A5%B3%E5%84%BF%E6%99%92%E8%BE%A3%E7%85%A7%E5%89%8D%E6%80%8E%E4%B9%88%E4%B8%8D%E5%85%88%E9%97%AE%E5%A6%88%E5%A6%88%23) `299.9K 🔥` `NEW`
1. [别让教师节的心意变成家长的焦虑](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E6%95%99%E5%B8%88%E8%8A%82%E7%9A%84%E5%BF%83%E6%84%8F%E5%8F%98%E6%88%90%E5%AE%B6%E9%95%BF%E7%9A%84%E7%84%A6%E8%99%91%23) `298.8K 🔥` `NEW`
1. [硬座出差 软裁员](https://s.weibo.com/weibo?q=%23%E7%A1%AC%E5%BA%A7%E5%87%BA%E5%B7%AE%20%E8%BD%AF%E8%A3%81%E5%91%98%23) `298.4K 🔥` `NEW`
1. [安静公主宣布暂时退网](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%9D%99%E5%85%AC%E4%B8%BB%E5%AE%A3%E5%B8%83%E6%9A%82%E6%97%B6%E9%80%80%E7%BD%91%23) `293.3K 🔥` `NEW`
1. [王晓慧C位](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%85%A7C%E4%BD%8D%23) `291.4K 🔥` `NEW`
1. [栾念尚之桃结局](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E7%BB%93%E5%B1%80%23) `238.6K 🔥` `NEW`
1. [被砸宝马车主称暂缓赔偿先救孩子](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%A0%B8%E5%AE%9D%E9%A9%AC%E8%BD%A6%E4%B8%BB%E7%A7%B0%E6%9A%82%E7%BC%93%E8%B5%94%E5%81%BF%E5%85%88%E6%95%91%E5%AD%A9%E5%AD%90%23) `209.8K 🔥` `NEW`
1. [小S看到女儿晒辣照的反应](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E7%9C%8B%E5%88%B0%E5%A5%B3%E5%84%BF%E6%99%92%E8%BE%A3%E7%85%A7%E7%9A%84%E5%8F%8D%E5%BA%94%23) `208.7K 🔥` `NEW`
1. [王晓慧 吸粉类长相](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%93%E6%85%A7%20%E5%90%B8%E7%B2%89%E7%B1%BB%E9%95%BF%E7%9B%B8%23) `207.1K 🔥` `NEW`
1. [女子向大雁塔景区雨水井塞不明物](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%91%E5%A4%A7%E9%9B%81%E5%A1%94%E6%99%AF%E5%8C%BA%E9%9B%A8%E6%B0%B4%E4%BA%95%E5%A1%9E%E4%B8%8D%E6%98%8E%E7%89%A9%23) `198.9K 🔥` `NEW`
1. [女子支付宝账户被哈啰盗刷6551元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%94%AF%E4%BB%98%E5%AE%9D%E8%B4%A6%E6%88%B7%E8%A2%AB%E5%93%88%E5%95%B0%E7%9B%97%E5%88%B76551%E5%85%83%23) `197.2K 🔥` `NEW`
1. [母亲跳河女儿哭喊是爸爸的错](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%B7%B3%E6%B2%B3%E5%A5%B3%E5%84%BF%E5%93%AD%E5%96%8A%E6%98%AF%E7%88%B8%E7%88%B8%E7%9A%84%E9%94%99%23) `194.5K 🔥` `NEW`
1. [曝泽尻英龙华桥本良亮恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B3%BD%E5%B0%BB%E8%8B%B1%E9%BE%99%E5%8D%8E%E6%A1%A5%E6%9C%AC%E8%89%AF%E4%BA%AE%E6%81%8B%E6%83%85%23) `192.0K 🔥` `NEW`
1. [栾念尚之桃地下恋被曝光](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E5%9C%B0%E4%B8%8B%E6%81%8B%E8%A2%AB%E6%9B%9D%E5%85%89%23) `188.0K 🔥` `NEW`
1. [李想称i9全世界绝无仅有](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%83%B3%E7%A7%B0i9%E5%85%A8%E4%B8%96%E7%95%8C%E7%BB%9D%E6%97%A0%E4%BB%85%E6%9C%89%23) `184.7K 🔥` `NEW`
1. [遭女友分尸男子曾供女友3孩上学](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%A5%B3%E5%8F%8B%E5%88%86%E5%B0%B8%E7%94%B7%E5%AD%90%E6%9B%BE%E4%BE%9B%E5%A5%B3%E5%8F%8B3%E5%AD%A9%E4%B8%8A%E5%AD%A6%23) `182.6K 🔥` `NEW`
1. [钎城蔡文姬五杀](https://s.weibo.com/weibo?q=%23%E9%92%8E%E5%9F%8E%E8%94%A1%E6%96%87%E5%A7%AC%E4%BA%94%E6%9D%80%23) `181.5K 🔥` `NEW`
1. [AI演员方桃子登时尚杂志](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%E6%96%B9%E6%A1%83%E5%AD%90%E7%99%BB%E6%97%B6%E5%B0%9A%E6%9D%82%E5%BF%97%23) `179.6K 🔥` `NEW`
1. [印尼火山爆发的前几秒钟](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC%E7%81%AB%E5%B1%B1%E7%88%86%E5%8F%91%E7%9A%84%E5%89%8D%E5%87%A0%E7%A7%92%E9%92%9F%23) `169.2K 🔥` `NEW`
1. [女子为借钱偷拍亲密视频要挟某局长](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%BA%E5%80%9F%E9%92%B1%E5%81%B7%E6%8B%8D%E4%BA%B2%E5%AF%86%E8%A7%86%E9%A2%91%E8%A6%81%E6%8C%9F%E6%9F%90%E5%B1%80%E9%95%BF%23) `168.8K 🔥` `NEW`
1. [刘雯全球收入第三的超模](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E5%85%A8%E7%90%83%E6%94%B6%E5%85%A5%E7%AC%AC%E4%B8%89%E7%9A%84%E8%B6%85%E6%A8%A1%23) `369.2K 🔥`
1. [井柏然 倪妮](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E5%80%AA%E5%A6%AE%23) `322.4K 🔥`
1. [A股散户吐槽美股科技股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%95%A3%E6%88%B7%E5%90%90%E6%A7%BD%E7%BE%8E%E8%82%A1%E7%A7%91%E6%8A%80%E8%82%A1%23) `312.1K 🔥`
1. [小学生梦游从7楼坠下砸烂宝马车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%94%9F%E6%A2%A6%E6%B8%B8%E4%BB%8E7%E6%A5%BC%E5%9D%A0%E4%B8%8B%E7%A0%B8%E7%83%82%E5%AE%9D%E9%A9%AC%E8%BD%A6%23) `247.8K 🔥`
1. [这段话杀死了内耗型人格](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E6%9D%80%E6%AD%BB%E4%BA%86%E5%86%85%E8%80%97%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `312.0K 🔥` `-64%`
1. [毛泽东逝世50周年](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%B3%BD%E4%B8%9C%E9%80%9D%E4%B8%9650%E5%91%A8%E5%B9%B4%23) `174.3K 🔥` `-72%`

Updated at 2026-09-09 13:20:27

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
