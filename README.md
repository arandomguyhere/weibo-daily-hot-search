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

1. [郑昌圣 人体解剖学讲师](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%98%8C%E5%9C%A3%20%E4%BA%BA%E4%BD%93%E8%A7%A3%E5%89%96%E5%AD%A6%E8%AE%B2%E5%B8%88%23) `487.8K 🔥` `NEW`
1. [Gucci秋冬大片](https://s.weibo.com/weibo?q=%23Gucci%E7%A7%8B%E5%86%AC%E5%A4%A7%E7%89%87%23) `482.4K 🔥` `NEW`
1. [年轻人真的把多运动听进去了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9C%9F%E7%9A%84%E6%8A%8A%E5%A4%9A%E8%BF%90%E5%8A%A8%E5%90%AC%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `478.5K 🔥` `NEW`
1. [宋雨琦肿成蜜蜂小狗](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%82%BF%E6%88%90%E8%9C%9C%E8%9C%82%E5%B0%8F%E7%8B%97%23) `442.6K 🔥` `NEW`
1. [小米澎程自在的空间](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E8%87%AA%E5%9C%A8%E7%9A%84%E7%A9%BA%E9%97%B4%23) `441.7K 🔥` `NEW`
1. [未定事件簿德芙合作取消](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%AE%9A%E4%BA%8B%E4%BB%B6%E7%B0%BF%E5%BE%B7%E8%8A%99%E5%90%88%E4%BD%9C%E5%8F%96%E6%B6%88%23) `370.4K 🔥` `NEW`
1. [社保有多厉害可能超乎你的想象](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%E5%8F%AF%E8%83%BD%E8%B6%85%E4%B9%8E%E4%BD%A0%E7%9A%84%E6%83%B3%E8%B1%A1%23) `337.0K 🔥` `NEW`
1. [鸭货三巨头大量门店关闭](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E8%B4%A7%E4%B8%89%E5%B7%A8%E5%A4%B4%E5%A4%A7%E9%87%8F%E9%97%A8%E5%BA%97%E5%85%B3%E9%97%AD%23) `336.5K 🔥` `NEW`
1. [直观感受到了中药的威力](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E8%A7%82%E6%84%9F%E5%8F%97%E5%88%B0%E4%BA%86%E4%B8%AD%E8%8D%AF%E7%9A%84%E5%A8%81%E5%8A%9B%23) `274.8K 🔥` `NEW`
1. [AI让满分学生不敢进考场](https://s.weibo.com/weibo?q=%23AI%E8%AE%A9%E6%BB%A1%E5%88%86%E5%AD%A6%E7%94%9F%E4%B8%8D%E6%95%A2%E8%BF%9B%E8%80%83%E5%9C%BA%23) `266.9K 🔥` `NEW`
1. [原北大最年轻副校长贪腐近20年](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E5%8C%97%E5%A4%A7%E6%9C%80%E5%B9%B4%E8%BD%BB%E5%89%AF%E6%A0%A1%E9%95%BF%E8%B4%AA%E8%85%90%E8%BF%9120%E5%B9%B4%23) `162.4K 🔥` `NEW`
1. [西藏吉隆口岸情况](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%83%85%E5%86%B5%23) `162.3K 🔥` `NEW`
1. [西藏泥石流](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `7.6M 🔥` `+115%`
1. [刘翔求助](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E6%B1%82%E5%8A%A9%23) `2.9M 🔥` `+27%`
1. [欢子称为披哥损失百万](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E7%A7%B0%E4%B8%BA%E6%8A%AB%E5%93%A5%E6%8D%9F%E5%A4%B1%E7%99%BE%E4%B8%87%23) `852.7K 🔥` `+36%`
1. [GANT全球品牌代言人宋威龙](https://s.weibo.com/weibo?q=%23GANT%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%AE%8B%E5%A8%81%E9%BE%99%23) `530.2K 🔥` `+42%`
1. [运动对人的改变被严重低估了](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E5%AF%B9%E4%BA%BA%E7%9A%84%E6%94%B9%E5%8F%98%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E4%BA%86%23) `524.7K 🔥` `+112%`
1. [在韩遇害女生本可邮寄毕业证回国](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E6%9C%AC%E5%8F%AF%E9%82%AE%E5%AF%84%E6%AF%95%E4%B8%9A%E8%AF%81%E5%9B%9E%E5%9B%BD%23) `520.8K 🔥` `+158%`
1. [鸿蒙成世界第三大手机操作系统](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%88%90%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%89%E5%A4%A7%E6%89%8B%E6%9C%BA%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%23) `485.4K 🔥` `+173%`
1. [包文婧生二胎产后抑郁](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E7%94%9F%E4%BA%8C%E8%83%8E%E4%BA%A7%E5%90%8E%E6%8A%91%E9%83%81%23) `474.1K 🔥` `+26%`
1. [西藏泥石流 吓人](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%20%E5%90%93%E4%BA%BA%23) `471.8K 🔥` `+144%`
1. [黄景瑜被九寨沟净化了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E8%A2%AB%E4%B9%9D%E5%AF%A8%E6%B2%9F%E5%87%80%E5%8C%96%E4%BA%86%23) `440.7K 🔥` `+75%`
1. [网友劝包文婧离婚](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%8A%9D%E5%8C%85%E6%96%87%E5%A9%A7%E7%A6%BB%E5%A9%9A%23) `437.9K 🔥` `+76%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `437.7K 🔥` `+76%`
1. [万千气象瞰宁夏](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9E%B0%E5%AE%81%E5%A4%8F%23) `1.3M 🔥`
1. [蔡徐坤代言 起亚全新赛图斯上市](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E4%BB%A3%E8%A8%80%20%E8%B5%B7%E4%BA%9A%E5%85%A8%E6%96%B0%E8%B5%9B%E5%9B%BE%E6%96%AF%E4%B8%8A%E5%B8%82%23) `970.6K 🔥`
1. [泥石流致西藏吉隆重大人员伤亡失联](https://s.weibo.com/weibo?q=%23%E6%B3%A5%E7%9F%B3%E6%B5%81%E8%87%B4%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E9%87%8D%E5%A4%A7%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%E5%A4%B1%E8%81%94%23) `776.1K 🔥`
1. [欢乐颂3可以开拍了](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E4%B9%90%E9%A2%823%E5%8F%AF%E4%BB%A5%E5%BC%80%E6%8B%8D%E4%BA%86%23) `526.7K 🔥`
1. [吉隆口岸](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%23) `520.0K 🔥`
1. [郑昌圣 分尸](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%98%8C%E5%9C%A3%20%E5%88%86%E5%B0%B8%23) `516.2K 🔥`
1. [香港为何能吃到放心蔬菜](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E4%B8%BA%E4%BD%95%E8%83%BD%E5%90%83%E5%88%B0%E6%94%BE%E5%BF%83%E8%94%AC%E8%8F%9C%23) `512.5K 🔥`
1. [张延张锦程离婚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BB%B6%E5%BC%A0%E9%94%A6%E7%A8%8B%E7%A6%BB%E5%A9%9A%23) `489.7K 🔥`
1. [欢子起诉湖南卫视](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E8%B5%B7%E8%AF%89%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%23) `475.1K 🔥`
1. [虞书欣 丝巾当抹胸穿](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E4%B8%9D%E5%B7%BE%E5%BD%93%E6%8A%B9%E8%83%B8%E7%A9%BF%23) `462.5K 🔥`
1. [韩警方搜寻焚烧厂找遇害女生遗体](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E6%90%9C%E5%AF%BB%E7%84%9A%E7%83%A7%E5%8E%82%E6%89%BE%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E9%81%97%E4%BD%93%23) `439.9K 🔥`
1. [国家反诈中心测出德芙声明是AI](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8F%8D%E8%AF%88%E4%B8%AD%E5%BF%83%E6%B5%8B%E5%87%BA%E5%BE%B7%E8%8A%99%E5%A3%B0%E6%98%8E%E6%98%AFAI%23) `439.0K 🔥`
1. [郭晓东 张杰站哥随时待命](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E4%B8%9C%20%E5%BC%A0%E6%9D%B0%E7%AB%99%E5%93%A5%E9%9A%8F%E6%97%B6%E5%BE%85%E5%91%BD%23) `265.4K 🔥`
1. [西藏吉隆泥石流救援最新进展](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E6%95%91%E6%8F%B4%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `229.0K 🔥`
1. [纽约市长宣布建国营供销社](https://s.weibo.com/weibo?q=%23%E7%BA%BD%E7%BA%A6%E5%B8%82%E9%95%BF%E5%AE%A3%E5%B8%83%E5%BB%BA%E5%9B%BD%E8%90%A5%E4%BE%9B%E9%94%80%E7%A4%BE%23) `168.3K 🔥`
1. [网传时代峰峻要搬出长江国际了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%A6%81%E6%90%AC%E5%87%BA%E9%95%BF%E6%B1%9F%E5%9B%BD%E9%99%85%E4%BA%86%23) `166.1K 🔥`
1. [范丞丞晒了现发团合照](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%99%92%E4%BA%86%E7%8E%B0%E5%8F%91%E5%9B%A2%E5%90%88%E7%85%A7%23) `531.0K 🔥` `-39%`
1. [央视曝光擦边手办乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E6%93%A6%E8%BE%B9%E6%89%8B%E5%8A%9E%E4%B9%B1%E8%B1%A1%23) `528.7K 🔥` `-21%`
1. [孙千第一集穿的假名牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E7%AC%AC%E4%B8%80%E9%9B%86%E7%A9%BF%E7%9A%84%E5%81%87%E5%90%8D%E7%89%8C%23) `512.1K 🔥` `-24%`
1. [网友小梅道歉信](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%B0%8F%E6%A2%85%E9%81%93%E6%AD%89%E4%BF%A1%23) `497.9K 🔥` `-21%`
1. [史上最快离职之人](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%BF%AB%E7%A6%BB%E8%81%8C%E4%B9%8B%E4%BA%BA%23) `409.7K 🔥` `-38%`
1. [在韩遇害女生部分遗体被丢弃](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E9%83%A8%E5%88%86%E9%81%97%E4%BD%93%E8%A2%AB%E4%B8%A2%E5%BC%83%23) `402.6K 🔥` `-64%`
1. [王橹杰蓝莓拟人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%93%9D%E8%8E%93%E6%8B%9F%E4%BA%BA%23) `336.1K 🔥` `-32%`
1. [金鹰奖 刘亦菲国籍](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E5%88%98%E4%BA%A6%E8%8F%B2%E5%9B%BD%E7%B1%8D%23) `299.7K 🔥` `-24%`
1. [范丞丞给黄景瑜P墨镜](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%BB%99%E9%BB%84%E6%99%AF%E7%91%9CP%E5%A2%A8%E9%95%9C%23) `260.9K 🔥` `-28%`
1. [丈夫带婚内孩子去看出轨生的孩子](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%B8%A6%E5%A9%9A%E5%86%85%E5%AD%A9%E5%AD%90%E5%8E%BB%E7%9C%8B%E5%87%BA%E8%BD%A8%E7%94%9F%E7%9A%84%E5%AD%A9%E5%AD%90%23) `215.1K 🔥` `-57%`
1. [刘亦菲幼儿园就是高颅顶](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%B0%B1%E6%98%AF%E9%AB%98%E9%A2%85%E9%A1%B6%23) `182.6K 🔥` `-40%`
1. [小酒窝给杜华女儿让C位](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E7%BB%99%E6%9D%9C%E5%8D%8E%E5%A5%B3%E5%84%BF%E8%AE%A9C%E4%BD%8D%23) `179.3K 🔥` `-29%`

Updated at 2026-08-26 18:23:45

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
