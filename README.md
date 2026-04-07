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

1. [两位小米联合创始人退出小米科技 (Two Xiaomi co-founders exit Xiaomi Technology)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BD%8D%E5%B0%8F%E7%B1%B3%E8%81%94%E5%90%88%E5%88%9B%E5%A7%8B%E4%BA%BA%E9%80%80%E5%87%BA%E5%B0%8F%E7%B1%B3%E7%A7%91%E6%8A%80%23) `734.4K 🔥` `NEW`
1. [伊朗对美以发动第99波打击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E7%BE%8E%E4%BB%A5%E5%8F%91%E5%8A%A8%E7%AC%AC99%E6%B3%A2%E6%89%93%E5%87%BB%23) `708.0K 🔥` `NEW`
1. [华为Pura90系列曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura90%E7%B3%BB%E5%88%97%E6%9B%9D%E5%85%89%23) `700.9K 🔥` `NEW`
1. [九尾的新发型](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E7%9A%84%E6%96%B0%E5%8F%91%E5%9E%8B%23) `494.7K 🔥` `NEW`
1. [开心消消乐](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%BF%83%E6%B6%88%E6%B6%88%E4%B9%90%23) `461.6K 🔥` `NEW`
1. [陈丽华是叶赫那拉氏第八代后裔](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E6%98%AF%E5%8F%B6%E8%B5%AB%E9%82%A3%E6%8B%89%E6%B0%8F%E7%AC%AC%E5%85%AB%E4%BB%A3%E5%90%8E%E8%A3%94%23) `375.8K 🔥` `NEW`
1. [专家回应健身的人老了死得干脆](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%9B%9E%E5%BA%94%E5%81%A5%E8%BA%AB%E7%9A%84%E4%BA%BA%E8%80%81%E4%BA%86%E6%AD%BB%E5%BE%97%E5%B9%B2%E8%84%86%23) `258.0K 🔥` `NEW`
1. [时代少年团年度最好笑物料](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B9%B4%E5%BA%A6%E6%9C%80%E5%A5%BD%E7%AC%91%E7%89%A9%E6%96%99%23) `125.7K 🔥` `NEW`
1. [极氪8X官宣4月17日正式上市](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA8X%E5%AE%98%E5%AE%A34%E6%9C%8817%E6%97%A5%E6%AD%A3%E5%BC%8F%E4%B8%8A%E5%B8%82%23) `120.8K 🔥` `NEW`
1. [泰国知名高校情侣双亡墙上血书遗言](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E7%9F%A5%E5%90%8D%E9%AB%98%E6%A0%A1%E6%83%85%E4%BE%A3%E5%8F%8C%E4%BA%A1%E5%A2%99%E4%B8%8A%E8%A1%80%E4%B9%A6%E9%81%97%E8%A8%80%23) `119.7K 🔥` `NEW`
1. [严浩翔新专概念世界 (The conceptual world of Yan Haoxiang's new album)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E4%B8%93%E6%A6%82%E5%BF%B5%E4%B8%96%E7%95%8C%23) `117.5K 🔥` `NEW`
1. [孙俪小助理好爱她](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%B0%8F%E5%8A%A9%E7%90%86%E5%A5%BD%E7%88%B1%E5%A5%B9%23) `109.2K 🔥` `NEW`
1. [iPhone斜挎包](https://s.weibo.com/weibo?q=%23iPhone%E6%96%9C%E6%8C%8E%E5%8C%85%23) `95.5K 🔥` `NEW`
1. [京城大师赛](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E5%9F%8E%E5%A4%A7%E5%B8%88%E8%B5%9B%23) `80.2K 🔥` `NEW`
1. [陈赫曝爱情公寓每天拍16个小时](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E6%9B%9D%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E6%AF%8F%E5%A4%A9%E6%8B%8D16%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `79.2K 🔥` `NEW`
1. [市监局介入3盆米饭被收78元](https://s.weibo.com/weibo?q=%23%E5%B8%82%E7%9B%91%E5%B1%80%E4%BB%8B%E5%85%A53%E7%9B%86%E7%B1%B3%E9%A5%AD%E8%A2%AB%E6%94%B678%E5%85%83%23) `71.7K 🔥` `NEW`
1. [国家继续出手调控油价 (The state continues to regulate oil prices)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%BB%A7%E7%BB%AD%E5%87%BA%E6%89%8B%E8%B0%83%E6%8E%A7%E6%B2%B9%E4%BB%B7%23) `1.0M 🔥` `+35%`
1. [5月放假12天 (12 days off in May)](https://s.weibo.com/weibo?q=%235%E6%9C%88%E6%94%BE%E5%81%8712%E5%A4%A9%23) `757.3K 🔥` `+224%`
1. [曝某牛奶直播间涉黄涉低俗](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E7%89%9B%E5%A5%B6%E7%9B%B4%E6%92%AD%E9%97%B4%E6%B6%89%E9%BB%84%E6%B6%89%E4%BD%8E%E4%BF%97%23) `747.8K 🔥` `+61%`
1. [伊朗总统说已准备好牺牲](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AF%B4%E5%B7%B2%E5%87%86%E5%A4%87%E5%A5%BD%E7%89%BA%E7%89%B2%23) `740.8K 🔥` `+90%`
1. [张本智和近距离感受国乒队魂](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%BF%91%E8%B7%9D%E7%A6%BB%E6%84%9F%E5%8F%97%E5%9B%BD%E4%B9%92%E9%98%9F%E9%AD%82%23) `724.6K 🔥` `+274%`
1. [警方通报车辆坠河致5死](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E8%BD%A6%E8%BE%86%E5%9D%A0%E6%B2%B3%E8%87%B45%E6%AD%BB%23) `717.7K 🔥` `+270%`
1. [浪姐取消直播后被喊话退钱 (Sister Lang was asked to refund her money after canceling the live broadcast)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%8F%96%E6%B6%88%E7%9B%B4%E6%92%AD%E5%90%8E%E8%A2%AB%E5%96%8A%E8%AF%9D%E9%80%80%E9%92%B1%23) `700.4K 🔥` `+37%`
1. [把蓝莓当消炎药吃](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E8%93%9D%E8%8E%93%E5%BD%93%E6%B6%88%E7%82%8E%E8%8D%AF%E5%90%83%23) `667.7K 🔥` `+256%`
1. [不要跟不熟的人互关](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%B7%9F%E4%B8%8D%E7%86%9F%E7%9A%84%E4%BA%BA%E4%BA%92%E5%85%B3%23) `531.0K 🔥` `+396%`
1. [陈丽华叫迟重瑞迟先生 (Chen Lihua calls Mr. Chi Chong Rui Chi)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E5%8F%AB%E8%BF%9F%E9%87%8D%E7%91%9E%E8%BF%9F%E5%85%88%E7%94%9F%23) `505.1K 🔥` `+178%`
1. [日本撞人族被抓后鞠躬道歉](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%92%9E%E4%BA%BA%E6%97%8F%E8%A2%AB%E6%8A%93%E5%90%8E%E9%9E%A0%E8%BA%AC%E9%81%93%E6%AD%89%23) `490.6K 🔥` `+166%`
1. [浪姐一公小考取消直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%80%E5%85%AC%E5%B0%8F%E8%80%83%E5%8F%96%E6%B6%88%E7%9B%B4%E6%92%AD%23) `476.3K 🔥` `+166%`
1. [韩国人称为吃地瓜条专门来中国](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%A7%B0%E4%B8%BA%E5%90%83%E5%9C%B0%E7%93%9C%E6%9D%A1%E4%B8%93%E9%97%A8%E6%9D%A5%E4%B8%AD%E5%9B%BD%23) `473.2K 🔥` `+168%`
1. [迟重瑞为陈丽华光头36年](https://s.weibo.com/weibo?q=%23%E8%BF%9F%E9%87%8D%E7%91%9E%E4%B8%BA%E9%99%88%E4%B8%BD%E5%8D%8E%E5%85%89%E5%A4%B436%E5%B9%B4%23) `457.2K 🔥` `+283%`
1. [虞书欣工作室 审美](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%AE%A1%E7%BE%8E%23) `354.7K 🔥` `+193%`
1. [鞠婧祎含泪拥抱十年老粉](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%90%AB%E6%B3%AA%E6%8B%A5%E6%8A%B1%E5%8D%81%E5%B9%B4%E8%80%81%E7%B2%89%23) `341.5K 🔥` `+220%`
1. [周杰伦 江语晨 (Jay Chou Jiang Yuchen)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%20%E6%B1%9F%E8%AF%AD%E6%99%A8%23) `216.8K 🔥` `+85%`
1. [宋祖儿帽子比脸大了一圈](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E5%B8%BD%E5%AD%90%E6%AF%94%E8%84%B8%E5%A4%A7%E4%BA%86%E4%B8%80%E5%9C%88%23) `146.6K 🔥` `+26%`
1. [小徐谈研究生有多挣钱 (Xiao Xu talks about how much money graduate students make)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%BE%90%E8%B0%88%E7%A0%94%E7%A9%B6%E7%94%9F%E6%9C%89%E5%A4%9A%E6%8C%A3%E9%92%B1%23) `131.1K 🔥` `+25%`
1. [陈丽华育有一儿二女](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E8%82%B2%E6%9C%89%E4%B8%80%E5%84%BF%E4%BA%8C%E5%A5%B3%23) `101.7K 🔥` `+23%`
1. [天舟十号飞行任务标识正式发布 (Tianzhou-10 mission logo officially released)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%88%9F%E5%8D%81%E5%8F%B7%E9%A3%9E%E8%A1%8C%E4%BB%BB%E5%8A%A1%E6%A0%87%E8%AF%86%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83%23) `752.2K 🔥`
1. [郑丽文率团抵达](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E7%8E%87%E5%9B%A2%E6%8A%B5%E8%BE%BE%23) `132.7K 🔥`
1. [虞书欣和Jennie同款发型 (Yu Shuxin and Jennie have the same hairstyle)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%92%8CJennie%E5%90%8C%E6%AC%BE%E5%8F%91%E5%9E%8B%23) `100.1K 🔥`
1. [浪姐录播 无字幕](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%BD%95%E6%92%AD%20%E6%97%A0%E5%AD%97%E5%B9%95%23) `96.2K 🔥`
1. [黄金或面临长期盘整](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%88%96%E9%9D%A2%E4%B8%B4%E9%95%BF%E6%9C%9F%E7%9B%98%E6%95%B4%23) `95.3K 🔥`
1. [反诈老陈连续4年晒纳税](https://s.weibo.com/weibo?q=%23%E5%8F%8D%E8%AF%88%E8%80%81%E9%99%88%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E6%99%92%E7%BA%B3%E7%A8%8E%23) `95.2K 🔥`
1. [魏大勋青岛进组十日终焉](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E9%9D%92%E5%B2%9B%E8%BF%9B%E7%BB%84%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `84.1K 🔥`
1. [鞠婧祎怎么变成小鸭子啦](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%80%8E%E4%B9%88%E5%8F%98%E6%88%90%E5%B0%8F%E9%B8%AD%E5%AD%90%E5%95%A6%23) `72.9K 🔥`
1. [外交部回应郑丽文率团访问大陆](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E9%83%91%E4%B8%BD%E6%96%87%E7%8E%87%E5%9B%A2%E8%AE%BF%E9%97%AE%E5%A4%A7%E9%99%86%23) `71.1K 🔥`
1. [十日终焉最新阵容 (The latest lineup of Ten Days End)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E6%9C%80%E6%96%B0%E9%98%B5%E5%AE%B9%23) `510.1K 🔥` `-53%`
1. [张雪撞了人母亲赔3万多没责骂一句](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%92%9E%E4%BA%86%E4%BA%BA%E6%AF%8D%E4%BA%B2%E8%B5%943%E4%B8%87%E5%A4%9A%E6%B2%A1%E8%B4%A3%E9%AA%82%E4%B8%80%E5%8F%A5%23) `120.8K 🔥` `-42%`
1. [黄晓明现身交警队 (Huang Xiaoming appeared at the traffic police team)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E7%8E%B0%E8%BA%AB%E4%BA%A4%E8%AD%A6%E9%98%9F%23) `78.2K 🔥` `-25%`
1. [陈丽华儿子担任富华国际集团总裁 (Chen Laiwa’s son serves as president of Fuhua International Group)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E5%84%BF%E5%AD%90%E6%8B%85%E4%BB%BB%E5%AF%8C%E5%8D%8E%E5%9B%BD%E9%99%85%E9%9B%86%E5%9B%A2%E6%80%BB%E8%A3%81%23) `76.4K 🔥` `-47%`
1. [喜人奇妙夜](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%BA%BA%E5%A5%87%E5%A6%99%E5%A4%9C%23) `76.2K 🔥` `-24%`

Updated at 2026-04-07 19:40:31

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
