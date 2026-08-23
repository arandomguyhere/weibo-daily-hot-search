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

1. [韦东奕练习册下架原因](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E4%B8%9C%E5%A5%95%E7%BB%83%E4%B9%A0%E5%86%8C%E4%B8%8B%E6%9E%B6%E5%8E%9F%E5%9B%A0%23) `334.5K 🔥` `NEW`
1. [公务员也是养家糊口的职业](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8A%A1%E5%91%98%E4%B9%9F%E6%98%AF%E5%85%BB%E5%AE%B6%E7%B3%8A%E5%8F%A3%E7%9A%84%E8%81%8C%E4%B8%9A%23) `309.9K 🔥` `NEW`
1. [张远维权五代彩带](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E7%BB%B4%E6%9D%83%E4%BA%94%E4%BB%A3%E5%BD%A9%E5%B8%A6%23) `157.4K 🔥` `NEW`
1. [广东确认14岁勇救三人少年系见义勇为](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%A1%AE%E8%AE%A414%E5%B2%81%E5%8B%87%E6%95%91%E4%B8%89%E4%BA%BA%E5%B0%91%E5%B9%B4%E7%B3%BB%E8%A7%81%E4%B9%89%E5%8B%87%E4%B8%BA%23) `153.5K 🔥` `NEW`
1. [马斯克母亲谈儿子推荐中国](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%AF%8D%E4%BA%B2%E8%B0%88%E5%84%BF%E5%AD%90%E6%8E%A8%E8%8D%90%E4%B8%AD%E5%9B%BD%23) `130.9K 🔥` `NEW`
1. [超强台风沙德尔直径超1000公里](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%E7%9B%B4%E5%BE%84%E8%B6%851000%E5%85%AC%E9%87%8C%23) `120.5K 🔥` `NEW`
1. [娜扎体验韩国化妆室](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E4%BD%93%E9%AA%8C%E9%9F%A9%E5%9B%BD%E5%8C%96%E5%A6%86%E5%AE%A4%23) `117.7K 🔥` `NEW`
1. [以色列与土耳其到了战争边缘吗](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%8E%E5%9C%9F%E8%80%B3%E5%85%B6%E5%88%B0%E4%BA%86%E6%88%98%E4%BA%89%E8%BE%B9%E7%BC%98%E5%90%97%23) `113.4K 🔥` `NEW`
1. [LOONG9终止全部团体活动](https://s.weibo.com/weibo?q=%23LOONG9%E7%BB%88%E6%AD%A2%E5%85%A8%E9%83%A8%E5%9B%A2%E4%BD%93%E6%B4%BB%E5%8A%A8%23) `113.4K 🔥` `NEW`
1. [樊振东比赛直播成暑期档黑马](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AF%94%E8%B5%9B%E7%9B%B4%E6%92%AD%E6%88%90%E6%9A%91%E6%9C%9F%E6%A1%A3%E9%BB%91%E9%A9%AC%23) `113.4K 🔥` `NEW`
1. [什么时候看到凌玲梗能不笑](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E7%9C%8B%E5%88%B0%E5%87%8C%E7%8E%B2%E6%A2%97%E8%83%BD%E4%B8%8D%E7%AC%91%23) `972.7K 🔥` `+224%`
1. [找到梁博了](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%88%B0%E6%A2%81%E5%8D%9A%E4%BA%86%23) `915.2K 🔥` `+381%`
1. [45岁网红大帅去世](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%BD%91%E7%BA%A2%E5%A4%A7%E5%B8%85%E5%8E%BB%E4%B8%96%23) `314.7K 🔥` `+48%`
1. [中国人形机器人跑出加速度](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%91%E5%87%BA%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `929.6K 🔥`
1. [最近是全体教师最脆弱的时候](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%BF%91%E6%98%AF%E5%85%A8%E4%BD%93%E6%95%99%E5%B8%88%E6%9C%80%E8%84%86%E5%BC%B1%E7%9A%84%E6%97%B6%E5%80%99%23) `927.4K 🔥`
1. [上班立什么人设最吃香](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E7%AB%8B%E4%BB%80%E4%B9%88%E4%BA%BA%E8%AE%BE%E6%9C%80%E5%90%83%E9%A6%99%23) `533.0K 🔥`
1. [张智霖儿子担任演唱会吉他手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%BA%E9%9C%96%E5%84%BF%E5%AD%90%E6%8B%85%E4%BB%BB%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%89%E4%BB%96%E6%89%8B%23) `350.2K 🔥`
1. [多国印度移民拒签率飙升](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E5%8D%B0%E5%BA%A6%E7%A7%BB%E6%B0%91%E6%8B%92%E7%AD%BE%E7%8E%87%E9%A3%99%E5%8D%87%23) `340.6K 🔥`
1. [王传君 乔任梁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%20%E4%B9%94%E4%BB%BB%E6%A2%81%23) `330.4K 🔥`
1. [王橹杰演技](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%BC%94%E6%8A%80%23) `325.1K 🔥`
1. [蔬菜 甲醛](https://s.weibo.com/weibo?q=%23%E8%94%AC%E8%8F%9C%20%E7%94%B2%E9%86%9B%23) `319.3K 🔥`
1. [卢昱晓瘦了好多](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%98%A6%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `302.6K 🔥`
1. [李金铭李佳航聚餐](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E6%9D%8E%E4%BD%B3%E8%88%AA%E8%81%9A%E9%A4%90%23) `281.1K 🔥`
1. [梦中那片海在那英演唱会团建](https://s.weibo.com/weibo?q=%23%E6%A2%A6%E4%B8%AD%E9%82%A3%E7%89%87%E6%B5%B7%E5%9C%A8%E9%82%A3%E8%8B%B1%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A2%E5%BB%BA%23) `254.2K 🔥`
1. [卫生巾居然能卷成这样](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%B1%85%E7%84%B6%E8%83%BD%E5%8D%B7%E6%88%90%E8%BF%99%E6%A0%B7%23) `253.7K 🔥`
1. [小狗洗澡洗得太干净主人不敢认](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E6%B4%97%E6%BE%A1%E6%B4%97%E5%BE%97%E5%A4%AA%E5%B9%B2%E5%87%80%E4%B8%BB%E4%BA%BA%E4%B8%8D%E6%95%A2%E8%AE%A4%23) `252.7K 🔥`
1. [玉米一种很健康的食物](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B1%B3%E4%B8%80%E7%A7%8D%E5%BE%88%E5%81%A5%E5%BA%B7%E7%9A%84%E9%A3%9F%E7%89%A9%23) `251.7K 🔥`
1. [王传君说的是乔任梁吗 (Is Wang Chuanjun talking about Qiao Renliang?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E8%AF%B4%E7%9A%84%E6%98%AF%E4%B9%94%E4%BB%BB%E6%A2%81%E5%90%97%23) `250.6K 🔥`
1. [韩红基金会回应救护车采购质疑](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E5%9B%9E%E5%BA%94%E6%95%91%E6%8A%A4%E8%BD%A6%E9%87%87%E8%B4%AD%E8%B4%A8%E7%96%91%23) `231.9K 🔥`
1. [巴西女子遭前男友多重器械囚禁现场](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%A5%B3%E5%AD%90%E9%81%AD%E5%89%8D%E7%94%B7%E5%8F%8B%E5%A4%9A%E9%87%8D%E5%99%A8%E6%A2%B0%E5%9B%9A%E7%A6%81%E7%8E%B0%E5%9C%BA%23) `229.2K 🔥`
1. [空枪](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `219.1K 🔥`
1. [只卖一只鞋的人](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E5%8D%96%E4%B8%80%E5%8F%AA%E9%9E%8B%E7%9A%84%E4%BA%BA%23) `201.5K 🔥`
1. [19岁大学生天台走秀挣2万](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%A4%A9%E5%8F%B0%E8%B5%B0%E7%A7%80%E6%8C%A32%E4%B8%87%23) `163.4K 🔥`
1. [老人进店休息离世店家帮扶遭索赔10万](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E8%BF%9B%E5%BA%97%E4%BC%91%E6%81%AF%E7%A6%BB%E4%B8%96%E5%BA%97%E5%AE%B6%E5%B8%AE%E6%89%B6%E9%81%AD%E7%B4%A2%E8%B5%9410%E4%B8%87%23) `2.0M 🔥` `-41%`
1. [网红温婉偷税被罚后换号复活](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%B8%A9%E5%A9%89%E5%81%B7%E7%A8%8E%E8%A2%AB%E7%BD%9A%E5%90%8E%E6%8D%A2%E5%8F%B7%E5%A4%8D%E6%B4%BB%23) `340.9K 🔥` `-69%`
1. [温婉售卖高仿巴黎世家T恤Prada背心](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%A9%89%E5%94%AE%E5%8D%96%E9%AB%98%E4%BB%BF%E5%B7%B4%E9%BB%8E%E4%B8%96%E5%AE%B6T%E6%81%A4Prada%E8%83%8C%E5%BF%83%23) `282.2K 🔥` `-34%`
1. [刘昊然提醒李兰迪调整裙子](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E6%8F%90%E9%86%92%E6%9D%8E%E5%85%B0%E8%BF%AA%E8%B0%83%E6%95%B4%E8%A3%99%E5%AD%90%23) `236.9K 🔥` `-21%`
1. [虞书欣好辣](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A5%BD%E8%BE%A3%23) `188.7K 🔥` `-36%`
1. [巫哲回应好帅](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E5%9B%9E%E5%BA%94%E5%A5%BD%E5%B8%85%23) `186.5K 🔥` `-49%`
1. [我家那闺女2026开播](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B32026%E5%BC%80%E6%92%AD%23) `156.1K 🔥` `-53%`
1. [人民日报谈火车零食占座 (People's Daily talks about snacks occupying seats on trains)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%B0%88%E7%81%AB%E8%BD%A6%E9%9B%B6%E9%A3%9F%E5%8D%A0%E5%BA%A7%23) `147.0K 🔥` `-32%`
1. [店家扶老人被索赔10万对方言论荒唐](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%AE%B6%E6%89%B6%E8%80%81%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%9410%E4%B8%87%E5%AF%B9%E6%96%B9%E8%A8%80%E8%AE%BA%E8%8D%92%E5%94%90%23) `138.9K 🔥` `-46%`
1. [宁艺卓Gucci成衣广告](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93Gucci%E6%88%90%E8%A1%A3%E5%B9%BF%E5%91%8A%23) `137.7K 🔥` `-25%`
1. [金莎听到多子多福的反应](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%90%AC%E5%88%B0%E5%A4%9A%E5%AD%90%E5%A4%9A%E7%A6%8F%E7%9A%84%E5%8F%8D%E5%BA%94%23) `136.2K 🔥` `-27%`
1. [原来明媚又开朗的女生是这样的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E5%AA%9A%E5%8F%88%E5%BC%80%E6%9C%97%E7%9A%84%E5%A5%B3%E7%94%9F%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `131.1K 🔥` `-45%`
1. [程莉莎看郭晓东披哥心疼到睡不着](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E8%8E%89%E8%8E%8E%E7%9C%8B%E9%83%AD%E6%99%93%E4%B8%9C%E6%8A%AB%E5%93%A5%E5%BF%83%E7%96%BC%E5%88%B0%E7%9D%A1%E4%B8%8D%E7%9D%80%23) `131.0K 🔥` `-44%`
1. [宋丹丹穿20年前家有儿女的衣服](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%B8%B9%E4%B8%B9%E7%A9%BF20%E5%B9%B4%E5%89%8D%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E7%9A%84%E8%A1%A3%E6%9C%8D%23) `114.9K 🔥` `-47%`
1. [荣耀机器人400米跑出40.6秒](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E6%9C%BA%E5%99%A8%E4%BA%BA400%E7%B1%B3%E8%B7%91%E5%87%BA40.6%E7%A7%92%23) `113.5K 🔥` `-39%`

Updated at 2026-08-23 15:06:12

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
