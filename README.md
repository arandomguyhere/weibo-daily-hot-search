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

1. [王莉霞严重违纪违法被双开 (Wang Lixia was double fired for serious violation of discipline and law)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8E%89%E9%9C%9E%E4%B8%A5%E9%87%8D%E8%BF%9D%E7%BA%AA%E8%BF%9D%E6%B3%95%E8%A2%AB%E5%8F%8C%E5%BC%80%23) `240.8K 🔥` `NEW`
1. [马斯克感慨Seedance2.0发展快](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%84%9F%E6%85%A8Seedance2.0%E5%8F%91%E5%B1%95%E5%BF%AB%23) `229.5K 🔥` `NEW`
1. [ILLIT NewJeans](https://s.weibo.com/weibo?q=%23ILLIT%20NewJeans%23) `171.9K 🔥` `NEW`
1. [荷兰选手回应与廉子文碰撞](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E9%80%89%E6%89%8B%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%BB%89%E5%AD%90%E6%96%87%E7%A2%B0%E6%92%9E%23) `161.6K 🔥` `NEW`
1. [医生建议刷牙后先别漱口](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E5%88%B7%E7%89%99%E5%90%8E%E5%85%88%E5%88%AB%E6%BC%B1%E5%8F%A3%23) `152.8K 🔥` `NEW`
1. [剧还没播先吻上王子文](https://s.weibo.com/weibo?q=%23%E5%89%A7%E8%BF%98%E6%B2%A1%E6%92%AD%E5%85%88%E5%90%BB%E4%B8%8A%E7%8E%8B%E5%AD%90%E6%96%87%23) `133.3K 🔥` `NEW`
1. [辛芷蕾倪妮高叶 火象三人组](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%80%AA%E5%A6%AE%E9%AB%98%E5%8F%B6%20%E7%81%AB%E8%B1%A1%E4%B8%89%E4%BA%BA%E7%BB%84%23) `117.1K 🔥` `NEW`
1. [千问说买得开心过两天见](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E8%AF%B4%E4%B9%B0%E5%BE%97%E5%BC%80%E5%BF%83%E8%BF%87%E4%B8%A4%E5%A4%A9%E8%A7%81%23) `106.3K 🔥` `NEW`
1. [王莉霞被双开](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8E%89%E9%9C%9E%E8%A2%AB%E5%8F%8C%E5%BC%80%23) `101.3K 🔥` `NEW`
1. [iPhone18Pro再爆料](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%86%8D%E7%88%86%E6%96%99%23) `89.2K 🔥` `NEW`
1. [成何体统红玫瑰和白茉莉 (What a decent red rose and white jasmine)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E7%BA%A2%E7%8E%AB%E7%91%B0%E5%92%8C%E7%99%BD%E8%8C%89%E8%8E%89%23) `87.2K 🔥` `NEW`
1. [刘宇宁2026全都要](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%812026%E5%85%A8%E9%83%BD%E8%A6%81%23) `86.5K 🔥` `NEW`
1. [女子用药后突然耳聋药店只赔200](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A8%E8%8D%AF%E5%90%8E%E7%AA%81%E7%84%B6%E8%80%B3%E8%81%8B%E8%8D%AF%E5%BA%97%E5%8F%AA%E8%B5%94200%23) `86.2K 🔥` `NEW`
1. [安徽一小伙迎娶00后埃及女生](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E4%B8%80%E5%B0%8F%E4%BC%99%E8%BF%8E%E5%A8%B600%E5%90%8E%E5%9F%83%E5%8F%8A%E5%A5%B3%E7%94%9F%23) `82.8K 🔥` `NEW`
1. [第一次有人把祛魅讲这么清楚](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%9C%89%E4%BA%BA%E6%8A%8A%E7%A5%9B%E9%AD%85%E8%AE%B2%E8%BF%99%E4%B9%88%E6%B8%85%E6%A5%9A%23) `79.7K 🔥` `NEW`
1. [惊蛰无声](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `78.6K 🔥` `NEW`
1. [过年第一批烫发的人](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%89%B9%E7%83%AB%E5%8F%91%E7%9A%84%E4%BA%BA%23) `77.4K 🔥` `NEW`
1. [Seedance2.0上线](https://s.weibo.com/weibo?q=%23Seedance2.0%E4%B8%8A%E7%BA%BF%23) `75.6K 🔥` `NEW`
1. [钟南山院士说会用证据让全世界服气](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E9%99%A2%E5%A3%AB%E8%AF%B4%E4%BC%9A%E7%94%A8%E8%AF%81%E6%8D%AE%E8%AE%A9%E5%85%A8%E4%B8%96%E7%95%8C%E6%9C%8D%E6%B0%94%23) `1.1M 🔥` `+397%`
1. [杭州有一趟永不发车的列车](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%9C%89%E4%B8%80%E8%B6%9F%E6%B0%B8%E4%B8%8D%E5%8F%91%E8%BD%A6%E7%9A%84%E5%88%97%E8%BD%A6%23) `786.4K 🔥` `+750%`
1. [赵樱子do高颅顶 (Zhao Yingzi do high skull)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90do%E9%AB%98%E9%A2%85%E9%A1%B6%23) `175.6K 🔥` `+34%`
1. [微博红包](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%BA%A2%E5%8C%85%23) `169.5K 🔥` `+30%`
1. [宋威龙晒被赵今麦扯开的领带](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%99%92%E8%A2%AB%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%89%AF%E5%BC%80%E7%9A%84%E9%A2%86%E5%B8%A6%23) `167.4K 🔥` `+28%`
1. [李一桐发了49999的红包](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%8F%91%E4%BA%8649999%E7%9A%84%E7%BA%A2%E5%8C%85%23) `164.2K 🔥` `+26%`
1. [前妻回应陶白白爆火时飘了](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A6%BB%E5%9B%9E%E5%BA%94%E9%99%B6%E7%99%BD%E7%99%BD%E7%88%86%E7%81%AB%E6%97%B6%E9%A3%98%E4%BA%86%23) `156.9K 🔥` `+21%`
1. [谁懂刘亦菲脸的对称度](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E5%88%98%E4%BA%A6%E8%8F%B2%E8%84%B8%E7%9A%84%E5%AF%B9%E7%A7%B0%E5%BA%A6%23) `153.9K 🔥` `+53%`
1. [中国人离登月又近了一步 (The Chinese are one step closer to landing on the moon)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%A6%BB%E7%99%BB%E6%9C%88%E5%8F%88%E8%BF%91%E4%BA%86%E4%B8%80%E6%AD%A5%23) `601.0K 🔥`
1. [上淘宝春节不打烊年货小时达 (Go to Taobao and don’t close during the Spring Festival. New Year’s goods are available within hours.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B7%98%E5%AE%9D%E6%98%A5%E8%8A%82%E4%B8%8D%E6%89%93%E7%83%8A%E5%B9%B4%E8%B4%A7%E5%B0%8F%E6%97%B6%E8%BE%BE%23) `527.5K 🔥`
1. [相亲吃烤肉](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E4%BA%B2%E5%90%83%E7%83%A4%E8%82%89%23) `236.0K 🔥`
1. [两名小孩扔爆竹致1200年古树起火](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%90%8D%E5%B0%8F%E5%AD%A9%E6%89%94%E7%88%86%E7%AB%B9%E8%87%B41200%E5%B9%B4%E5%8F%A4%E6%A0%91%E8%B5%B7%E7%81%AB%23) `207.9K 🔥`
1. [法国3名婴儿因食用问题奶粉死亡](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD3%E5%90%8D%E5%A9%B4%E5%84%BF%E5%9B%A0%E9%A3%9F%E7%94%A8%E9%97%AE%E9%A2%98%E5%A5%B6%E7%B2%89%E6%AD%BB%E4%BA%A1%23) `177.8K 🔥`
1. [孙颖莎ELLE 6个封面](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%206%E4%B8%AA%E5%B0%81%E9%9D%A2%23) `153.4K 🔥`
1. [李一桐高情商公关 (Li Yitong's high emotional intelligence public relations)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E9%AB%98%E6%83%85%E5%95%86%E5%85%AC%E5%85%B3%23) `153.4K 🔥`
1. [姐姐被藏尸位置就在弟弟店铺正上方 (The location where my sister’s body was buried is right above my brother’s shop.)](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%A2%AB%E8%97%8F%E5%B0%B8%E4%BD%8D%E7%BD%AE%E5%B0%B1%E5%9C%A8%E5%BC%9F%E5%BC%9F%E5%BA%97%E9%93%BA%E6%AD%A3%E4%B8%8A%E6%96%B9%23) `153.1K 🔥`
1. [二胎妈妈跪求丈夫离婚放过自己](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E8%83%8E%E5%A6%88%E5%A6%88%E8%B7%AA%E6%B1%82%E4%B8%88%E5%A4%AB%E7%A6%BB%E5%A9%9A%E6%94%BE%E8%BF%87%E8%87%AA%E5%B7%B1%23) `153.0K 🔥`
1. [马思纯王楚然 表妹长大了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E8%A1%A8%E5%A6%B9%E9%95%BF%E5%A4%A7%E4%BA%86%23) `152.5K 🔥`
1. [井柏然就这样静静等着刘雯](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%B0%B1%E8%BF%99%E6%A0%B7%E9%9D%99%E9%9D%99%E7%AD%89%E7%9D%80%E5%88%98%E9%9B%AF%23) `152.5K 🔥`
1. [爱泼斯坦最神秘女友身份曝光](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%9C%80%E7%A5%9E%E7%A7%98%E5%A5%B3%E5%8F%8B%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `138.6K 🔥`
1. [为什么奶茶封口还要盖盖子](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%A5%B6%E8%8C%B6%E5%B0%81%E5%8F%A3%E8%BF%98%E8%A6%81%E7%9B%96%E7%9B%96%E5%AD%90%23) `92.3K 🔥`
1. [长期侧睡对颜值的影响](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%BE%A7%E7%9D%A1%E5%AF%B9%E9%A2%9C%E5%80%BC%E7%9A%84%E5%BD%B1%E5%93%8D%23) `92.3K 🔥`
1. [李乃文陈飞宇 大孤山吃草莓](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%83%E6%96%87%E9%99%88%E9%A3%9E%E5%AE%87%20%E5%A4%A7%E5%AD%A4%E5%B1%B1%E5%90%83%E8%8D%89%E8%8E%93%23) `90.8K 🔥`
1. [成毅朱瞻基特辑](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%9C%B1%E7%9E%BB%E5%9F%BA%E7%89%B9%E8%BE%91%23) `80.8K 🔥`
1. [杨瀚森半个NBA职业生涯是摸爬滚打](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E5%8D%8A%E4%B8%AANBA%E8%81%8C%E4%B8%9A%E7%94%9F%E6%B6%AF%E6%98%AF%E6%91%B8%E7%88%AC%E6%BB%9A%E6%89%93%23) `80.0K 🔥`
1. [从Deepseek到Seedance中国AI成了 (From Deepseek to Seedance China’s AI has become)](https://s.weibo.com/weibo?q=%23%E4%BB%8EDeepseek%E5%88%B0Seedance%E4%B8%AD%E5%9B%BDAI%E6%88%90%E4%BA%86%23) `251.0K 🔥` `-76%`
1. [2025年全国结婚登记676.3万对](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0676.3%E4%B8%87%E5%AF%B9%23) `180.0K 🔥` `-76%`
1. [陈妍希官宣喜综 (Michelle Chen officially announces wedding)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%AE%98%E5%AE%A3%E5%96%9C%E7%BB%BC%23) `96.8K 🔥` `-56%`
1. [游乐王子的女儿感染合胞病毒 (The daughter of the amusement prince is infected with syncytial virus)](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E4%B9%90%E7%8E%8B%E5%AD%90%E7%9A%84%E5%A5%B3%E5%84%BF%E6%84%9F%E6%9F%93%E5%90%88%E8%83%9E%E7%97%85%E6%AF%92%23) `92.5K 🔥` `-29%`
1. [孙颖莎ELLE (Sun Yingsha ELLE)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%23) `91.8K 🔥` `-29%`
1. [李健 春晚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%20%E6%98%A5%E6%99%9A%23) `86.1K 🔥` `-42%`
1. [姜珮瑶拿火把 疯批美人](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E7%8F%AE%E7%91%B6%E6%8B%BF%E7%81%AB%E6%8A%8A%20%E7%96%AF%E6%89%B9%E7%BE%8E%E4%BA%BA%23) `84.0K 🔥` `-26%`
1. [中国速滑米兰冬奥首枚奖牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%9F%E6%BB%91%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E6%9E%9A%E5%A5%96%E7%89%8C%23) `78.0K 🔥` `-40%`

Updated at 2026-02-12 14:51:20

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
