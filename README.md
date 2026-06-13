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

1. [俞小平被查 (Yu Xiaoping was investigated)](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E5%B0%8F%E5%B9%B3%E8%A2%AB%E6%9F%A5%23) `795.4K 🔥` `NEW`
1. [全新一代问界M9开启全国交付](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E4%B8%80%E4%BB%A3%E9%97%AE%E7%95%8CM9%E5%BC%80%E5%90%AF%E5%85%A8%E5%9B%BD%E4%BA%A4%E4%BB%98%23) `588.4K 🔥` `NEW`
1. [孙怡买500本曾沛慈杂志](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E4%B9%B0500%E6%9C%AC%E6%9B%BE%E6%B2%9B%E6%85%88%E6%9D%82%E5%BF%97%23) `583.0K 🔥` `NEW`
1. [长生骨男主](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9F%E9%AA%A8%E7%94%B7%E4%B8%BB%23) `536.0K 🔥` `NEW`
1. [男子带10万现金还贷被银行拒收](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B8%A610%E4%B8%87%E7%8E%B0%E9%87%91%E8%BF%98%E8%B4%B7%E8%A2%AB%E9%93%B6%E8%A1%8C%E6%8B%92%E6%94%B6%23) `341.5K 🔥` `NEW`
1. [孙怡真给曾沛慈下聘礼了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9C%9F%E7%BB%99%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%8B%E8%81%98%E7%A4%BC%E4%BA%86%23) `340.2K 🔥` `NEW`
1. [傅明将完成个人世界杯执法首秀](https://s.weibo.com/weibo?q=%23%E5%82%85%E6%98%8E%E5%B0%86%E5%AE%8C%E6%88%90%E4%B8%AA%E4%BA%BA%E4%B8%96%E7%95%8C%E6%9D%AF%E6%89%A7%E6%B3%95%E9%A6%96%E7%A7%80%23) `336.7K 🔥` `NEW`
1. [张百乔回应离婚传言](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%99%BE%E4%B9%94%E5%9B%9E%E5%BA%94%E7%A6%BB%E5%A9%9A%E4%BC%A0%E8%A8%80%23) `335.0K 🔥` `NEW`
1. [王楚然元气十连拍](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%85%83%E6%B0%94%E5%8D%81%E8%BF%9E%E6%8B%8D%23) `329.7K 🔥` `NEW`
1. [姜十七承认整容了](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%8D%81%E4%B8%83%E6%89%BF%E8%AE%A4%E6%95%B4%E5%AE%B9%E4%BA%86%23) `322.4K 🔥` `NEW`
1. [G20](https://s.weibo.com/weibo?q=%23G20%23) `319.0K 🔥` `NEW`
1. [六级答案星火](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%E7%AD%94%E6%A1%88%E6%98%9F%E7%81%AB%23) `317.5K 🔥` `NEW`
1. [虞书欣长生骨单人过会](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%95%BF%E7%94%9F%E9%AA%A8%E5%8D%95%E4%BA%BA%E8%BF%87%E4%BC%9A%23) `314.9K 🔥` `NEW`
1. [英格兰队大部分失窃装备已找回](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%9F%E5%A4%A7%E9%83%A8%E5%88%86%E5%A4%B1%E7%AA%83%E8%A3%85%E5%A4%87%E5%B7%B2%E6%89%BE%E5%9B%9E%23) `308.8K 🔥` `NEW`
1. [哈兰德哈王老吉广告火爆海外](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%93%88%E7%8E%8B%E8%80%81%E5%90%89%E5%B9%BF%E5%91%8A%E7%81%AB%E7%88%86%E6%B5%B7%E5%A4%96%23) `307.4K 🔥` `NEW`
1. [男子杀害发小一审被判死刑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B3%E5%8F%91%E5%B0%8F%E4%B8%80%E5%AE%A1%E8%A2%AB%E5%88%A4%E6%AD%BB%E5%88%91%23) `305.7K 🔥` `NEW`
1. [WE艰难的BO5](https://s.weibo.com/weibo?q=%23WE%E8%89%B0%E9%9A%BE%E7%9A%84BO5%23) `303.5K 🔥` `NEW`
1. [丁禹兮穿西装在泳池直播](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%A9%BF%E8%A5%BF%E8%A3%85%E5%9C%A8%E6%B3%B3%E6%B1%A0%E7%9B%B4%E6%92%AD%23) `298.7K 🔥` `NEW`
1. [瑞思拜押中六级翻译](https://s.weibo.com/weibo?q=%23%E7%91%9E%E6%80%9D%E6%8B%9C%E6%8A%BC%E4%B8%AD%E5%85%AD%E7%BA%A7%E7%BF%BB%E8%AF%91%23) `297.3K 🔥` `NEW`
1. [香港偶遇吴世勋](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%81%B6%E9%81%87%E5%90%B4%E4%B8%96%E5%8B%8B%23) `292.3K 🔥` `NEW`
1. [清迈偶遇瞿颖一家四口 (Encountering Qu Ying’s family of four in Chiang Mai)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%BF%88%E5%81%B6%E9%81%87%E7%9E%BF%E9%A2%96%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%23) `291.3K 🔥` `NEW`
1. [代斯骑马图太美被判定为ai](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%96%AF%E9%AA%91%E9%A9%AC%E5%9B%BE%E5%A4%AA%E7%BE%8E%E8%A2%AB%E5%88%A4%E5%AE%9A%E4%B8%BAai%23) `265.5K 🔥` `NEW`
1. [找工作就是运气问题](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%B7%A5%E4%BD%9C%E5%B0%B1%E6%98%AF%E8%BF%90%E6%B0%94%E9%97%AE%E9%A2%98%23) `233.1K 🔥` `NEW`
1. [时代少年团直播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%92%AD%23) `227.7K 🔥` `NEW`
1. [谢依霖这段表演千万别给女儿看](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E4%BE%9D%E9%9C%96%E8%BF%99%E6%AE%B5%E8%A1%A8%E6%BC%94%E5%8D%83%E4%B8%87%E5%88%AB%E7%BB%99%E5%A5%B3%E5%84%BF%E7%9C%8B%23) `208.1K 🔥` `NEW`
1. [六级段落匹配](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%E6%AE%B5%E8%90%BD%E5%8C%B9%E9%85%8D%23) `199.3K 🔥` `NEW`
1. [于东来称满分100给员工打10分](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E7%A7%B0%E6%BB%A1%E5%88%86100%E7%BB%99%E5%91%98%E5%B7%A5%E6%89%9310%E5%88%86%23) `190.5K 🔥` `NEW`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `183.4K 🔥` `NEW`
1. [黄金罕见大涨](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%BD%95%E8%A7%81%E5%A4%A7%E6%B6%A8%23) `171.7K 🔥` `NEW`
1. [雷军测试直播计划7小时实际5小时](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%B5%8B%E8%AF%95%E7%9B%B4%E6%92%AD%E8%AE%A1%E5%88%927%E5%B0%8F%E6%97%B6%E5%AE%9E%E9%99%855%E5%B0%8F%E6%97%B6%23) `170.6K 🔥` `NEW`
1. [我的朋友圈点赞原则 (Like principles for my circle of friends)](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%82%B9%E8%B5%9E%E5%8E%9F%E5%88%99%23) `170.0K 🔥` `NEW`
1. [网红小贝饿了腿骨裂了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E8%B4%9D%E9%A5%BF%E4%BA%86%E8%85%BF%E9%AA%A8%E8%A3%82%E4%BA%86%23) `168.3K 🔥` `NEW`
1. [马宁哭了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E5%93%AD%E4%BA%86%23) `389.4K 🔥` `+51%`
1. [4个小时的拼豆就这样白拼了](https://s.weibo.com/weibo?q=%234%E4%B8%AA%E5%B0%8F%E6%97%B6%E7%9A%84%E6%8B%BC%E8%B1%86%E5%B0%B1%E8%BF%99%E6%A0%B7%E7%99%BD%E6%8B%BC%E4%BA%86%23) `324.6K 🔥` `+44%`
1. [央行狂买黄金金价却暴跌](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A1%8C%E7%8B%82%E4%B9%B0%E9%BB%84%E9%87%91%E9%87%91%E4%BB%B7%E5%8D%B4%E6%9A%B4%E8%B7%8C%23) `311.5K 🔥` `+75%`
1. [六级听力 (Level 6 Listening)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%E5%90%AC%E5%8A%9B%23) `338.3K 🔥`
1. [中国不需要也不可能复制SpaceX (China does not need and cannot copy SpaceX)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%8D%E9%9C%80%E8%A6%81%E4%B9%9F%E4%B8%8D%E5%8F%AF%E8%83%BD%E5%A4%8D%E5%88%B6SpaceX%23) `320.4K 🔥`
1. [英语六级阅读](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%AF%AD%E5%85%AD%E7%BA%A7%E9%98%85%E8%AF%BB%23) `278.9K 🔥`
1. [医生说长期禁欲生殖系统真的会老](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E9%95%BF%E6%9C%9F%E7%A6%81%E6%AC%B2%E7%94%9F%E6%AE%96%E7%B3%BB%E7%BB%9F%E7%9C%9F%E7%9A%84%E4%BC%9A%E8%80%81%23) `268.0K 🔥`
1. [电子商务我恨你](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1%E6%88%91%E6%81%A8%E4%BD%A0%23) `257.8K 🔥`
1. [六级 (Level 6)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%23) `1.1M 🔥` `-85%`
1. [文化中国行赏非遗之美](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%8C%96%E4%B8%AD%E5%9B%BD%E8%A1%8C%E8%B5%8F%E9%9D%9E%E9%81%97%E4%B9%8B%E7%BE%8E%23) `621.6K 🔥` `-54%`
1. [睡觉的权威性我后知后觉](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E7%9A%84%E6%9D%83%E5%A8%81%E6%80%A7%E6%88%91%E5%90%8E%E7%9F%A5%E5%90%8E%E8%A7%89%23) `426.0K 🔥` `-49%`
1. [年轻运动首选 (The first choice for young sports)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E8%BF%90%E5%8A%A8%E9%A6%96%E9%80%89%23) `403.7K 🔥` `-39%`
1. [六级答案](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%E7%AD%94%E6%A1%88%23) `332.3K 🔥` `-25%`
1. [海陆变样了](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E9%99%86%E5%8F%98%E6%A0%B7%E4%BA%86%23) `331.6K 🔥` `-25%`
1. [六级翻译](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%E7%BF%BB%E8%AF%91%23) `326.0K 🔥` `-82%`
1. [曝女顶流是梅西C罗梦女](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A5%B3%E9%A1%B6%E6%B5%81%E6%98%AF%E6%A2%85%E8%A5%BFC%E7%BD%97%E6%A2%A6%E5%A5%B3%23) `313.3K 🔥` `-29%`
1. [长生骨](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9F%E9%AA%A8%23) `302.6K 🔥` `-31%`
1. [于正否认白鹿是靠山](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%90%A6%E8%AE%A4%E7%99%BD%E9%B9%BF%E6%98%AF%E9%9D%A0%E5%B1%B1%23) `263.2K 🔥` `-41%`
1. [单依纯纯妹妹2.0演唱会](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E7%BA%AF%E5%A6%B9%E5%A6%B92.0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `189.2K 🔥` `-58%`
1. [60岁男子与女子车内亲密猝死](https://s.weibo.com/weibo?q=%2360%E5%B2%81%E7%94%B7%E5%AD%90%E4%B8%8E%E5%A5%B3%E5%AD%90%E8%BD%A6%E5%86%85%E4%BA%B2%E5%AF%86%E7%8C%9D%E6%AD%BB%23) `176.7K 🔥` `-42%`

Updated at 2026-06-13 20:04:36

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
