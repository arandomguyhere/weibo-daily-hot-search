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

1. [A股市值前10红了9个 (9 of the top 10 A-share stocks by market value are in the red)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B8%82%E5%80%BC%E5%89%8D10%E7%BA%A2%E4%BA%869%E4%B8%AA%23) `1.2M 🔥` `NEW`
1. [人民军队制胜大片太燃了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%86%9B%E9%98%9F%E5%88%B6%E8%83%9C%E5%A4%A7%E7%89%87%E5%A4%AA%E7%87%83%E4%BA%86%23) `679.0K 🔥` `NEW`
1. [Mikimoto高级珠宝亚洲首展](https://s.weibo.com/weibo?q=%23Mikimoto%E9%AB%98%E7%BA%A7%E7%8F%A0%E5%AE%9D%E4%BA%9A%E6%B4%B2%E9%A6%96%E5%B1%95%23) `674.7K 🔥` `NEW`
1. [退休后旅游根本没有意义](https://s.weibo.com/weibo?q=%23%E9%80%80%E4%BC%91%E5%90%8E%E6%97%85%E6%B8%B8%E6%A0%B9%E6%9C%AC%E6%B2%A1%E6%9C%89%E6%84%8F%E4%B9%89%23) `666.2K 🔥` `NEW`
1. [不建议大家买深色蛋糕](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B9%B0%E6%B7%B1%E8%89%B2%E8%9B%8B%E7%B3%95%23) `645.2K 🔥` `NEW`
1. [这私房菜有点太私房了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%81%E6%88%BF%E8%8F%9C%E6%9C%89%E7%82%B9%E5%A4%AA%E7%A7%81%E6%88%BF%E4%BA%86%23) `640.9K 🔥` `NEW`
1. [吴谨言和前夫哥三搭了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%E5%92%8C%E5%89%8D%E5%A4%AB%E5%93%A5%E4%B8%89%E6%90%AD%E4%BA%86%23) `614.2K 🔥` `NEW`
1. [九门开播](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%BC%80%E6%92%AD%23) `576.7K 🔥` `NEW`
1. [KPL梦之队表演赛阵容](https://s.weibo.com/weibo?q=%23KPL%E6%A2%A6%E4%B9%8B%E9%98%9F%E8%A1%A8%E6%BC%94%E8%B5%9B%E9%98%B5%E5%AE%B9%23) `574.5K 🔥` `NEW`
1. [小米澎程实车内饰曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E5%AE%9E%E8%BD%A6%E5%86%85%E9%A5%B0%E6%9B%9D%E5%85%89%23) `568.0K 🔥` `NEW`
1. [最美教师出轨学生家长致学生休学 (The most beautiful teacher cheated on a student's parents, causing the student to suspend school)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E7%BE%8E%E6%95%99%E5%B8%88%E5%87%BA%E8%BD%A8%E5%AD%A6%E7%94%9F%E5%AE%B6%E9%95%BF%E8%87%B4%E5%AD%A6%E7%94%9F%E4%BC%91%E5%AD%A6%23) `556.0K 🔥` `NEW`
1. [宋祖儿剪短发](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E5%89%AA%E7%9F%AD%E5%8F%91%23) `489.9K 🔥` `NEW`
1. [魏家凉皮涨价后你还会排队吗](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AE%B6%E5%87%89%E7%9A%AE%E6%B6%A8%E4%BB%B7%E5%90%8E%E4%BD%A0%E8%BF%98%E4%BC%9A%E6%8E%92%E9%98%9F%E5%90%97%23) `424.9K 🔥` `NEW`
1. [格莱美删除BTS表演舞台](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E8%8E%B1%E7%BE%8E%E5%88%A0%E9%99%A4BTS%E8%A1%A8%E6%BC%94%E8%88%9E%E5%8F%B0%23) `423.6K 🔥` `NEW`
1. [王腾谈王虹戴智能戒指](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E8%B0%88%E7%8E%8B%E8%99%B9%E6%88%B4%E6%99%BA%E8%83%BD%E6%88%92%E6%8C%87%23) `385.2K 🔥` `NEW`
1. [陈瑶剧宣人脉](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%89%A7%E5%AE%A3%E4%BA%BA%E8%84%89%23) `367.8K 🔥` `NEW`
1. [第一次看到母亲的收入](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%88%B0%E6%AF%8D%E4%BA%B2%E7%9A%84%E6%94%B6%E5%85%A5%23) `365.3K 🔥` `NEW`
1. [白鹿只有一部待播剧了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%AA%E6%9C%89%E4%B8%80%E9%83%A8%E5%BE%85%E6%92%AD%E5%89%A7%E4%BA%86%23) `364.3K 🔥` `NEW`
1. [金九封面预告人选](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%B9%9D%E5%B0%81%E9%9D%A2%E9%A2%84%E5%91%8A%E4%BA%BA%E9%80%89%23) `362.2K 🔥` `NEW`
1. [844克黄金被扣押36年申请返还被驳](https://s.weibo.com/weibo?q=%23844%E5%85%8B%E9%BB%84%E9%87%91%E8%A2%AB%E6%89%A3%E6%8A%BC36%E5%B9%B4%E7%94%B3%E8%AF%B7%E8%BF%94%E8%BF%98%E8%A2%AB%E9%A9%B3%23) `341.5K 🔥` `NEW`
1. [九门 (nine gates)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `341.4K 🔥` `NEW`
1. [日本震后网上出现涉华阴谋论](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%9C%87%E5%90%8E%E7%BD%91%E4%B8%8A%E5%87%BA%E7%8E%B0%E6%B6%89%E5%8D%8E%E9%98%B4%E8%B0%8B%E8%AE%BA%23) `335.0K 🔥` `NEW`
1. [宁艺卓Gucci黑长直](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93Gucci%E9%BB%91%E9%95%BF%E7%9B%B4%23) `329.6K 🔥` `NEW`
1. [尹新月配音没换](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%96%B0%E6%9C%88%E9%85%8D%E9%9F%B3%E6%B2%A1%E6%8D%A2%23) `322.2K 🔥` `NEW`
1. [拥有24h内洗澡证明的人才能出门](https://s.weibo.com/weibo?q=%23%E6%8B%A5%E6%9C%8924h%E5%86%85%E6%B4%97%E6%BE%A1%E8%AF%81%E6%98%8E%E7%9A%84%E4%BA%BA%E6%89%8D%E8%83%BD%E5%87%BA%E9%97%A8%23) `320.8K 🔥` `NEW`
1. [中国技术视频看哭](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%8A%80%E6%9C%AF%E8%A7%86%E9%A2%91%E7%9C%8B%E5%93%AD%23) `319.8K 🔥` `NEW`
1. [胡一天callback了9年前的微博](https://s.weibo.com/weibo?q=%23%E8%83%A1%E4%B8%80%E5%A4%A9callback%E4%BA%869%E5%B9%B4%E5%89%8D%E7%9A%84%E5%BE%AE%E5%8D%9A%23) `319.6K 🔥` `NEW`
1. [TF四代五公什么时候官宣](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%AE%98%E5%AE%A3%23) `311.9K 🔥` `NEW`
1. [马嘉祺家里那位还记得吗](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AE%B6%E9%87%8C%E9%82%A3%E4%BD%8D%E8%BF%98%E8%AE%B0%E5%BE%97%E5%90%97%23) `246.5K 🔥` `NEW`
1. [花少姐姐对张雅琪的提点](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%A7%90%E5%A7%90%E5%AF%B9%E5%BC%A0%E9%9B%85%E7%90%AA%E7%9A%84%E6%8F%90%E7%82%B9%23) `246.2K 🔥` `NEW`
1. [谢霆锋一句话让女厨师坚持12年 (Nicholas Tse's words made the female chef stick with her for 12 years)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E4%B8%80%E5%8F%A5%E8%AF%9D%E8%AE%A9%E5%A5%B3%E5%8E%A8%E5%B8%88%E5%9D%9A%E6%8C%8112%E5%B9%B4%23) `246.1K 🔥` `NEW`
1. [祖父种的百年古树被林业局转赠书院](https://s.weibo.com/weibo?q=%23%E7%A5%96%E7%88%B6%E7%A7%8D%E7%9A%84%E7%99%BE%E5%B9%B4%E5%8F%A4%E6%A0%91%E8%A2%AB%E6%9E%97%E4%B8%9A%E5%B1%80%E8%BD%AC%E8%B5%A0%E4%B9%A6%E9%99%A2%23) `246.1K 🔥` `NEW`
1. [天才女友身高差好对味](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%E8%BA%AB%E9%AB%98%E5%B7%AE%E5%A5%BD%E5%AF%B9%E5%91%B3%23) `246.0K 🔥` `NEW`
1. [怀疑大家都悄悄的找到了好工作](https://s.weibo.com/weibo?q=%23%E6%80%80%E7%96%91%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%82%84%E6%82%84%E7%9A%84%E6%89%BE%E5%88%B0%E4%BA%86%E5%A5%BD%E5%B7%A5%E4%BD%9C%23) `246.0K 🔥` `NEW`
1. [王楚钦周启豪vs林诗栋赵钊彦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%91%A8%E5%90%AF%E8%B1%AAvs%E6%9E%97%E8%AF%97%E6%A0%8B%E8%B5%B5%E9%92%8A%E5%BD%A6%23) `245.9K 🔥` `NEW`
1. [九门包场人脉](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%8C%85%E5%9C%BA%E4%BA%BA%E8%84%89%23) `245.9K 🔥` `NEW`
1. [热巴VOGUE封面色迪奥380](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4VOGUE%E5%B0%81%E9%9D%A2%E8%89%B2%E8%BF%AA%E5%A5%A5380%23) `244.6K 🔥` `NEW`
1. [汪顺爬衢州江郎山](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E9%A1%BA%E7%88%AC%E8%A1%A2%E5%B7%9E%E6%B1%9F%E9%83%8E%E5%B1%B1%23) `240.8K 🔥` `NEW`
1. [MG格局](https://s.weibo.com/weibo?q=%23MG%E6%A0%BC%E5%B1%80%23) `235.9K 🔥` `NEW`
1. [刘亦菲浮城如戏台W平面电影](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%B5%AE%E5%9F%8E%E5%A6%82%E6%88%8F%E5%8F%B0W%E5%B9%B3%E9%9D%A2%E7%94%B5%E5%BD%B1%23) `235.7K 🔥` `NEW`
1. [陈伟霆曾舜晞浴池合照 (William Chan and Tsang Shunxi bathing pool photo)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E6%9B%BE%E8%88%9C%E6%99%9E%E6%B5%B4%E6%B1%A0%E5%90%88%E7%85%A7%23) `230.5K 🔥` `NEW`
1. [洗衣机上有诡异奶奶](https://s.weibo.com/weibo?q=%23%E6%B4%97%E8%A1%A3%E6%9C%BA%E4%B8%8A%E6%9C%89%E8%AF%A1%E5%BC%82%E5%A5%B6%E5%A5%B6%23) `559.7K 🔥` `+279%`
1. [医保家庭共济沦为套现工具](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E5%AE%B6%E5%BA%AD%E5%85%B1%E6%B5%8E%E6%B2%A6%E4%B8%BA%E5%A5%97%E7%8E%B0%E5%B7%A5%E5%85%B7%23) `342.4K 🔥` `+46%`
1. [AI公司被曝大量收购旧书](https://s.weibo.com/weibo?q=%23AI%E5%85%AC%E5%8F%B8%E8%A2%AB%E6%9B%9D%E5%A4%A7%E9%87%8F%E6%94%B6%E8%B4%AD%E6%97%A7%E4%B9%A6%23) `341.8K 🔥` `+133%`
1. [28岁女子脖子酸痛按了几下脑梗了](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E5%A5%B3%E5%AD%90%E8%84%96%E5%AD%90%E9%85%B8%E7%97%9B%E6%8C%89%E4%BA%86%E5%87%A0%E4%B8%8B%E8%84%91%E6%A2%97%E4%BA%86%23) `273.4K 🔥`
1. [天价退票费全额退了 (The sky-high refund fee has been refunded in full)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E4%BB%B7%E9%80%80%E7%A5%A8%E8%B4%B9%E5%85%A8%E9%A2%9D%E9%80%80%E4%BA%86%23) `861.6K 🔥` `-65%`
1. [30岁小伙负债170万卖饺子翻身](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%B0%8F%E4%BC%99%E8%B4%9F%E5%80%BA170%E4%B8%87%E5%8D%96%E9%A5%BA%E5%AD%90%E7%BF%BB%E8%BA%AB%23) `551.4K 🔥` `-40%`
1. [张雅琪 花少](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E8%8A%B1%E5%B0%91%23) `529.3K 🔥` `-38%`
1. [白鹿周翊然透明爱人MV亲了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%91%A8%E7%BF%8A%E7%84%B6%E9%80%8F%E6%98%8E%E7%88%B1%E4%BA%BAMV%E4%BA%B2%E4%BA%86%23) `405.2K 🔥` `-59%`
1. [A股科技退潮](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%A7%91%E6%8A%80%E9%80%80%E6%BD%AE%23) `370.1K 🔥` `-69%`
1. [阿根廷队3人或面临长期禁赛](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F3%E4%BA%BA%E6%88%96%E9%9D%A2%E4%B8%B4%E9%95%BF%E6%9C%9F%E7%A6%81%E8%B5%9B%23) `241.7K 🔥` `-42%`

Updated at 2026-07-30 14:13:53

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
