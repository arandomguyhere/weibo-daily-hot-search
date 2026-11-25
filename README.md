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

1. [字节跳动证明赚钱还得靠兄弟](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E8%AF%81%E6%98%8E%E8%B5%9A%E9%92%B1%E8%BF%98%E5%BE%97%E9%9D%A0%E5%85%84%E5%BC%9F%23) `1.2M 🔥` `NEW`
1. [原来快人十步是白小纯](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%BF%AB%E4%BA%BA%E5%8D%81%E6%AD%A5%E6%98%AF%E7%99%BD%E5%B0%8F%E7%BA%AF%23) `862.4K 🔥` `NEW`
1. [神24乘组进驻天宫](https://s.weibo.com/weibo?q=%23%E7%A5%9E24%E4%B9%98%E7%BB%84%E8%BF%9B%E9%A9%BB%E5%A4%A9%E5%AE%AB%23) `685.5K 🔥` `NEW`
1. [科技旗​舰第三代唐上市18.79万起](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%97%97%E2%80%8B%E8%88%B0%E7%AC%AC%E4%B8%89%E4%BB%A3%E5%94%90%E4%B8%8A%E5%B8%8218.79%E4%B8%87%E8%B5%B7%23) `672.0K 🔥` `NEW`
1. [高考667分高颜值学霸回应转行当演员](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83667%E5%88%86%E9%AB%98%E9%A2%9C%E5%80%BC%E5%AD%A6%E9%9C%B8%E5%9B%9E%E5%BA%94%E8%BD%AC%E8%A1%8C%E5%BD%93%E6%BC%94%E5%91%98%23) `348.0K 🔥` `NEW`
1. [特朗普惦记的那道菜全网猜疯了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%83%A6%E8%AE%B0%E7%9A%84%E9%82%A3%E9%81%93%E8%8F%9C%E5%85%A8%E7%BD%91%E7%8C%9C%E7%96%AF%E4%BA%86%23) `327.7K 🔥` `NEW`
1. [朱亚文版朱瞻基](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%BA%9A%E6%96%87%E7%89%88%E6%9C%B1%E7%9E%BB%E5%9F%BA%23) `327.4K 🔥` `NEW`
1. [奇正藏药揭秘冠军勋章背后的故事](https://s.weibo.com/weibo?q=%23%E5%A5%87%E6%AD%A3%E8%97%8F%E8%8D%AF%E6%8F%AD%E7%A7%98%E5%86%A0%E5%86%9B%E5%8B%8B%E7%AB%A0%E8%83%8C%E5%90%8E%E7%9A%84%E6%95%85%E4%BA%8B%23) `327.4K 🔥` `NEW`
1. [印度晒航天员失重训练](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%99%92%E8%88%AA%E5%A4%A9%E5%91%98%E5%A4%B1%E9%87%8D%E8%AE%AD%E7%BB%83%23) `325.5K 🔥` `NEW`
1. [B站拿什么留住不看短剧的人](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E6%8B%BF%E4%BB%80%E4%B9%88%E7%95%99%E4%BD%8F%E4%B8%8D%E7%9C%8B%E7%9F%AD%E5%89%A7%E7%9A%84%E4%BA%BA%23) `323.7K 🔥` `NEW`
1. [斗鱼及创始人陈少杰被执行1.9亿余元](https://s.weibo.com/weibo?q=%23%E6%96%97%E9%B1%BC%E5%8F%8A%E5%88%9B%E5%A7%8B%E4%BA%BA%E9%99%88%E5%B0%91%E6%9D%B0%E8%A2%AB%E6%89%A7%E8%A1%8C1.9%E4%BA%BF%E4%BD%99%E5%85%83%23) `320.1K 🔥` `NEW`
1. [韩网热议Zeus回归T1](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E7%83%AD%E8%AE%AEZeus%E5%9B%9E%E5%BD%92T1%23) `317.9K 🔥` `NEW`
1. [网友抵制王玉雯代言皮草](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8A%B5%E5%88%B6%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%BB%A3%E8%A8%80%E7%9A%AE%E8%8D%89%23) `316.0K 🔥` `NEW`
1. [最帅保洁大叔宣布辞职](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%B8%85%E4%BF%9D%E6%B4%81%E5%A4%A7%E5%8F%94%E5%AE%A3%E5%B8%83%E8%BE%9E%E8%81%8C%23) `315.1K 🔥` `NEW`
1. [还我蒋欣脸颊肉](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%88%91%E8%92%8B%E6%AC%A3%E8%84%B8%E9%A2%8A%E8%82%89%23) `313.2K 🔥` `NEW`
1. [贝儿穿上了妈妈当年上春晚的裙子](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%84%BF%E7%A9%BF%E4%B8%8A%E4%BA%86%E5%A6%88%E5%A6%88%E5%BD%93%E5%B9%B4%E4%B8%8A%E6%98%A5%E6%99%9A%E7%9A%84%E8%A3%99%E5%AD%90%23) `311.8K 🔥` `NEW`
1. [离开腾讯后三十五岁同事就业现状](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%BC%80%E8%85%BE%E8%AE%AF%E5%90%8E%E4%B8%89%E5%8D%81%E4%BA%94%E5%B2%81%E5%90%8C%E4%BA%8B%E5%B0%B1%E4%B8%9A%E7%8E%B0%E7%8A%B6%23) `305.6K 🔥` `NEW`
1. [青稚看白小纯MVP结算画面的反应](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E7%9C%8B%E7%99%BD%E5%B0%8F%E7%BA%AFMVP%E7%BB%93%E7%AE%97%E7%94%BB%E9%9D%A2%E7%9A%84%E5%8F%8D%E5%BA%94%23) `303.5K 🔥` `NEW`
1. [油价](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%23) `303.4K 🔥` `NEW`
1. [成毅两京十五日台网双爆了](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E5%8F%B0%E7%BD%91%E5%8F%8C%E7%88%86%E4%BA%86%23) `302.9K 🔥` `NEW`
1. [小鹏智驾2027年二季度起收费](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E6%99%BA%E9%A9%BE2027%E5%B9%B4%E4%BA%8C%E5%AD%A3%E5%BA%A6%E8%B5%B7%E6%94%B6%E8%B4%B9%23) `302.7K 🔥` `NEW`
1. [巴基斯坦人高喊中巴友谊万岁](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E4%BA%BA%E9%AB%98%E5%96%8A%E4%B8%AD%E5%B7%B4%E5%8F%8B%E8%B0%8A%E4%B8%87%E5%B2%81%23) `302.3K 🔥` `NEW`
1. [AI融脸比换脸更恐怖](https://s.weibo.com/weibo?q=%23AI%E8%9E%8D%E8%84%B8%E6%AF%94%E6%8D%A2%E8%84%B8%E6%9B%B4%E6%81%90%E6%80%96%23) `302.2K 🔥` `NEW`
1. [杨乐乐谈许飞还清300多万违约金](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B9%90%E4%B9%90%E8%B0%88%E8%AE%B8%E9%A3%9E%E8%BF%98%E6%B8%85300%E5%A4%9A%E4%B8%87%E8%BF%9D%E7%BA%A6%E9%87%91%23) `301.9K 🔥` `NEW`
1. [青龙电影奖](https://s.weibo.com/weibo?q=%23%E9%9D%92%E9%BE%99%E7%94%B5%E5%BD%B1%E5%A5%96%23) `301.7K 🔥` `NEW`
1. [拔掉白头发会发生什么](https://s.weibo.com/weibo?q=%23%E6%8B%94%E6%8E%89%E7%99%BD%E5%A4%B4%E5%8F%91%E4%BC%9A%E5%8F%91%E7%94%9F%E4%BB%80%E4%B9%88%23) `299.3K 🔥` `NEW`
1. [文吉儿 鼻子](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%20%E9%BC%BB%E5%AD%90%23) `223.0K 🔥` `NEW`
1. [17岁少年撞死2人逃逸已被控制](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%B0%91%E5%B9%B4%E6%92%9E%E6%AD%BB2%E4%BA%BA%E9%80%83%E9%80%B8%E5%B7%B2%E8%A2%AB%E6%8E%A7%E5%88%B6%23) `213.3K 🔥` `NEW`
1. [斗鱼最新情况](https://s.weibo.com/weibo?q=%23%E6%96%97%E9%B1%BC%E6%9C%80%E6%96%B0%E6%83%85%E5%86%B5%23) `201.3K 🔥` `NEW`
1. [儿子成绩垫底父亲暴怒后心血管堵死](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E6%88%90%E7%BB%A9%E5%9E%AB%E5%BA%95%E7%88%B6%E4%BA%B2%E6%9A%B4%E6%80%92%E5%90%8E%E5%BF%83%E8%A1%80%E7%AE%A1%E5%A0%B5%E6%AD%BB%23) `190.5K 🔥` `NEW`
1. [巴基斯坦航天员在天宫中文唠嗑](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E8%88%AA%E5%A4%A9%E5%91%98%E5%9C%A8%E5%A4%A9%E5%AE%AB%E4%B8%AD%E6%96%87%E5%94%A0%E5%97%91%23) `189.4K 🔥` `NEW`
1. [刘亦菲换手机了](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%8D%A2%E6%89%8B%E6%9C%BA%E4%BA%86%23) `183.7K 🔥` `NEW`
1. [Oo33的鸽](https://s.weibo.com/weibo?q=%23Oo33%E7%9A%84%E9%B8%BD%23) `182.1K 🔥` `NEW`
1. [ON BLG](https://s.weibo.com/weibo?q=%23ON%20BLG%23) `176.8K 🔥` `NEW`
1. [黄仁勋辞职原因曝光](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%BE%9E%E8%81%8C%E5%8E%9F%E5%9B%A0%E6%9B%9D%E5%85%89%23) `176.4K 🔥` `NEW`
1. [小学教材全解 上古真神](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E6%95%99%E6%9D%90%E5%85%A8%E8%A7%A3%20%E4%B8%8A%E5%8F%A4%E7%9C%9F%E7%A5%9E%23) `174.4K 🔥` `NEW`
1. [T1官宣Zeus回归](https://s.weibo.com/weibo?q=%23T1%E5%AE%98%E5%AE%A3Zeus%E5%9B%9E%E5%BD%92%23) `170.8K 🔥` `NEW`
1. [小鹏机器人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `166.2K 🔥` `NEW`
1. [T1对Zeus回归诚意](https://s.weibo.com/weibo?q=%23T1%E5%AF%B9Zeus%E5%9B%9E%E5%BD%92%E8%AF%9A%E6%84%8F%23) `166.0K 🔥` `NEW`
1. [打断情侣求婚服务员已2天未上班](https://s.weibo.com/weibo?q=%23%E6%89%93%E6%96%AD%E6%83%85%E4%BE%A3%E6%B1%82%E5%A9%9A%E6%9C%8D%E5%8A%A1%E5%91%98%E5%B7%B22%E5%A4%A9%E6%9C%AA%E4%B8%8A%E7%8F%AD%23) `163.0K 🔥` `NEW`
1. [青稚为证明不是AI特意拍视频](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E4%B8%BA%E8%AF%81%E6%98%8E%E4%B8%8D%E6%98%AFAI%E7%89%B9%E6%84%8F%E6%8B%8D%E8%A7%86%E9%A2%91%23) `161.4K 🔥` `NEW`
1. [曝文吉儿婚礼推迟了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%96%87%E5%90%89%E5%84%BF%E5%A9%9A%E7%A4%BC%E6%8E%A8%E8%BF%9F%E4%BA%86%23) `156.5K 🔥` `NEW`
1. [Oner Zeus](https://s.weibo.com/weibo?q=%23Oner%20Zeus%23) `149.7K 🔥` `NEW`
1. [三十岁才买到人生第一套睡衣](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8D%81%E5%B2%81%E6%89%8D%E4%B9%B0%E5%88%B0%E4%BA%BA%E7%94%9F%E7%AC%AC%E4%B8%80%E5%A5%97%E7%9D%A1%E8%A1%A3%23) `147.8K 🔥` `NEW`
1. [虞书欣累到在咖啡店睡着](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%B4%AF%E5%88%B0%E5%9C%A8%E5%92%96%E5%95%A1%E5%BA%97%E7%9D%A1%E7%9D%80%23) `145.0K 🔥` `NEW`
1. [马斯克带娃到访英伟达总部](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%B8%A6%E5%A8%83%E5%88%B0%E8%AE%BF%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%80%BB%E9%83%A8%23) `139.7K 🔥` `NEW`
1. [唐嫣新剧有三十而已既视感](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E6%96%B0%E5%89%A7%E6%9C%89%E4%B8%89%E5%8D%81%E8%80%8C%E5%B7%B2%E6%97%A2%E8%A7%86%E6%84%9F%23) `135.9K 🔥` `NEW`
1. [黄金跌破3500美元](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E7%A0%B43500%E7%BE%8E%E5%85%83%23) `133.4K 🔥` `NEW`
1. [青春有你3](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E6%9C%89%E4%BD%A03%23) `129.8K 🔥` `NEW`
1. [这几部才是真的火爆](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%87%A0%E9%83%A8%E6%89%8D%E6%98%AF%E7%9C%9F%E7%9A%84%E7%81%AB%E7%88%86%23) `122.8K 🔥` `NEW`

Updated at 2026-11-25 21:36:21

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
