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

1. [曹骏二公分组](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E4%BA%8C%E5%85%AC%E5%88%86%E7%BB%84%23) `485.1K 🔥` `NEW`
1. [第二届世界人形机器人运动会](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%8C%E5%B1%8A%E4%B8%96%E7%95%8C%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `289.9K 🔥` `NEW`
1. [诬告强奸是否真零成本](https://s.weibo.com/weibo?q=%23%E8%AF%AC%E5%91%8A%E5%BC%BA%E5%A5%B8%E6%98%AF%E5%90%A6%E7%9C%9F%E9%9B%B6%E6%88%90%E6%9C%AC%23) `266.9K 🔥` `NEW`
1. [告时代峰峻都要排队](https://s.weibo.com/weibo?q=%23%E5%91%8A%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%83%BD%E8%A6%81%E6%8E%92%E9%98%9F%23) `266.3K 🔥` `NEW`
1. [甜馨否认恋爱](https://s.weibo.com/weibo?q=%23%E7%94%9C%E9%A6%A8%E5%90%A6%E8%AE%A4%E6%81%8B%E7%88%B1%23) `265.2K 🔥` `NEW`
1. [直击广州猎德村派钱现场](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E5%87%BB%E5%B9%BF%E5%B7%9E%E7%8C%8E%E5%BE%B7%E6%9D%91%E6%B4%BE%E9%92%B1%E7%8E%B0%E5%9C%BA%23) `265.0K 🔥` `NEW`
1. [律师回应保险员与已婚男开房180次](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E5%9B%9E%E5%BA%94%E4%BF%9D%E9%99%A9%E5%91%98%E4%B8%8E%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%BC%80%E6%88%BF180%E6%AC%A1%23) `264.4K 🔥` `NEW`
1. [武警警官学院35公斤新生礼包开箱](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E8%AD%A6%E8%AD%A6%E5%AE%98%E5%AD%A6%E9%99%A235%E5%85%AC%E6%96%A4%E6%96%B0%E7%94%9F%E7%A4%BC%E5%8C%85%E5%BC%80%E7%AE%B1%23) `185.6K 🔥` `NEW`
1. [那英女儿小苹果这么大了](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%A5%B3%E5%84%BF%E5%B0%8F%E8%8B%B9%E6%9E%9C%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `172.6K 🔥` `NEW`
1. [温婉为避风头会戴墨镜短暂露脸](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%A9%89%E4%B8%BA%E9%81%BF%E9%A3%8E%E5%A4%B4%E4%BC%9A%E6%88%B4%E5%A2%A8%E9%95%9C%E7%9F%AD%E6%9A%82%E9%9C%B2%E8%84%B8%23) `163.8K 🔥` `NEW`
1. [蔡徐坤关闭INS群组](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E5%85%B3%E9%97%ADINS%E7%BE%A4%E7%BB%84%23) `139.9K 🔥` `NEW`
1. [龚俊张晚意马思纯李沁张雅琪自拍](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E5%BC%A0%E6%99%9A%E6%84%8F%E9%A9%AC%E6%80%9D%E7%BA%AF%E6%9D%8E%E6%B2%81%E5%BC%A0%E9%9B%85%E7%90%AA%E8%87%AA%E6%8B%8D%23) `138.2K 🔥` `NEW`
1. [九尾武则天MVP](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E6%AD%A6%E5%88%99%E5%A4%A9MVP%23) `125.6K 🔥` `NEW`
1. [我的前半生删去原著罗子君女儿](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%88%A0%E5%8E%BB%E5%8E%9F%E8%91%97%E7%BD%97%E5%AD%90%E5%90%9B%E5%A5%B3%E5%84%BF%23) `1.1M 🔥` `+172%`
1. [女子溺亡十几个摄像头拍不到肇事船](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%BA%BA%E4%BA%A1%E5%8D%81%E5%87%A0%E4%B8%AA%E6%91%84%E5%83%8F%E5%A4%B4%E6%8B%8D%E4%B8%8D%E5%88%B0%E8%82%87%E4%BA%8B%E8%88%B9%23) `770.6K 🔥` `+95%`
1. [黄灿灿让张月买单被经纪人骂](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E8%AE%A9%E5%BC%A0%E6%9C%88%E4%B9%B0%E5%8D%95%E8%A2%AB%E7%BB%8F%E7%BA%AA%E4%BA%BA%E9%AA%82%23) `530.9K 🔥` `+32%`
1. [去韩国唯一学会的东西](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E9%9F%A9%E5%9B%BD%E5%94%AF%E4%B8%80%E5%AD%A6%E4%BC%9A%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `266.8K 🔥` `+101%`
1. [巴西女子遭前男友多重器械囚禁现场](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%A5%B3%E5%AD%90%E9%81%AD%E5%89%8D%E7%94%B7%E5%8F%8B%E5%A4%9A%E9%87%8D%E5%99%A8%E6%A2%B0%E5%9B%9A%E7%A6%81%E7%8E%B0%E5%9C%BA%23) `226.5K 🔥` `+26%`
1. [处暑撞上出伏这几件事记得做](https://s.weibo.com/weibo?q=%23%E5%A4%84%E6%9A%91%E6%92%9E%E4%B8%8A%E5%87%BA%E4%BC%8F%E8%BF%99%E5%87%A0%E4%BB%B6%E4%BA%8B%E8%AE%B0%E5%BE%97%E5%81%9A%23) `749.4K 🔥`
1. [最近是全体教师最脆弱的时候](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%BF%91%E6%98%AF%E5%85%A8%E4%BD%93%E6%95%99%E5%B8%88%E6%9C%80%E8%84%86%E5%BC%B1%E7%9A%84%E6%97%B6%E5%80%99%23) `739.6K 🔥`
1. [甲醛白菜源头被端了](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E6%BA%90%E5%A4%B4%E8%A2%AB%E7%AB%AF%E4%BA%86%23) `190.3K 🔥`
1. [老人进店离世家属声称要把遗体放门口](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E8%BF%9B%E5%BA%97%E7%A6%BB%E4%B8%96%E5%AE%B6%E5%B1%9E%E5%A3%B0%E7%A7%B0%E8%A6%81%E6%8A%8A%E9%81%97%E4%BD%93%E6%94%BE%E9%97%A8%E5%8F%A3%23) `181.3K 🔥`
1. [陈瑶听到黄灿灿说自己的缺点后哭了](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%90%AC%E5%88%B0%E9%BB%84%E7%81%BF%E7%81%BF%E8%AF%B4%E8%87%AA%E5%B7%B1%E7%9A%84%E7%BC%BA%E7%82%B9%E5%90%8E%E5%93%AD%E4%BA%86%23) `154.8K 🔥`
1. [街边烤鸭炉被人打开让狗啃](https://s.weibo.com/weibo?q=%23%E8%A1%97%E8%BE%B9%E7%83%A4%E9%B8%AD%E7%82%89%E8%A2%AB%E4%BA%BA%E6%89%93%E5%BC%80%E8%AE%A9%E7%8B%97%E5%95%83%23) `149.7K 🔥`
1. [秦牛正威曾被顶流团队要求退居幕后](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%89%9B%E6%AD%A3%E5%A8%81%E6%9B%BE%E8%A2%AB%E9%A1%B6%E6%B5%81%E5%9B%A2%E9%98%9F%E8%A6%81%E6%B1%82%E9%80%80%E5%B1%85%E5%B9%95%E5%90%8E%23) `140.1K 🔥`
1. [王传君说的是乔任梁吗 (Is Wang Chuanjun talking about Qiao Renliang?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E8%AF%B4%E7%9A%84%E6%98%AF%E4%B9%94%E4%BB%BB%E6%A2%81%E5%90%97%23) `138.9K 🔥`
1. [马斯克母亲谈儿子推荐中国](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%AF%8D%E4%BA%B2%E8%B0%88%E5%84%BF%E5%AD%90%E6%8E%A8%E8%8D%90%E4%B8%AD%E5%9B%BD%23) `125.2K 🔥`
1. [超强台风沙德尔直径超1000公里](https://s.weibo.com/weibo?q=%23%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%E7%9B%B4%E5%BE%84%E8%B6%851000%E5%85%AC%E9%87%8C%23) `121.3K 🔥`
1. [上班立什么人设最吃香](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E7%AB%8B%E4%BB%80%E4%B9%88%E4%BA%BA%E8%AE%BE%E6%9C%80%E5%90%83%E9%A6%99%23) `275.2K 🔥` `-32%`
1. [什么时候看到凌玲梗能不笑](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E7%9C%8B%E5%88%B0%E5%87%8C%E7%8E%B2%E6%A2%97%E8%83%BD%E4%B8%8D%E7%AC%91%23) `274.8K 🔥` `-75%`
1. [张远维权五代彩带](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E7%BB%B4%E6%9D%83%E4%BA%94%E4%BB%A3%E5%BD%A9%E5%B8%A6%23) `266.6K 🔥` `-34%`
1. [一张成人票困住独自乘车的孩子](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BC%A0%E6%88%90%E4%BA%BA%E7%A5%A8%E5%9B%B0%E4%BD%8F%E7%8B%AC%E8%87%AA%E4%B9%98%E8%BD%A6%E7%9A%84%E5%AD%A9%E5%AD%90%23) `266.1K 🔥` `-34%`
1. [王传君 乔任梁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%20%E4%B9%94%E4%BB%BB%E6%A2%81%23) `265.8K 🔥` `-34%`
1. [找到梁博了](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%88%B0%E6%A2%81%E5%8D%9A%E4%BA%86%23) `265.7K 🔥` `-33%`
1. [阿里巴巴拟配售800亿港元新股](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4%E6%8B%9F%E9%85%8D%E5%94%AE800%E4%BA%BF%E6%B8%AF%E5%85%83%E6%96%B0%E8%82%A1%23) `265.3K 🔥` `-28%`
1. [温婉售卖高仿巴黎世家T恤Prada背心](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%A9%89%E5%94%AE%E5%8D%96%E9%AB%98%E4%BB%BF%E5%B7%B4%E9%BB%8E%E4%B8%96%E5%AE%B6T%E6%81%A4Prada%E8%83%8C%E5%BF%83%23) `265.1K 🔥` `-67%`
1. [小米官宣新一代玄戒芯片技术发布会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%AE%98%E5%AE%A3%E6%96%B0%E4%B8%80%E4%BB%A3%E7%8E%84%E6%88%92%E8%8A%AF%E7%89%87%E6%8A%80%E6%9C%AF%E5%8F%91%E5%B8%83%E4%BC%9A%23) `264.9K 🔥` `-34%`
1. [卫生巾居然能卷成这样](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%B1%85%E7%84%B6%E8%83%BD%E5%8D%B7%E6%88%90%E8%BF%99%E6%A0%B7%23) `264.8K 🔥` `-24%`
1. [张智霖儿子担任演唱会吉他手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%BA%E9%9C%96%E5%84%BF%E5%AD%90%E6%8B%85%E4%BB%BB%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%89%E4%BB%96%E6%89%8B%23) `264.7K 🔥` `-32%`
1. [丁禹兮孟子义拍了电梯抱](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8B%8D%E4%BA%86%E7%94%B5%E6%A2%AF%E6%8A%B1%23) `264.4K 🔥` `-24%`
1. [公务员也是养家糊口的职业](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8A%A1%E5%91%98%E4%B9%9F%E6%98%AF%E5%85%BB%E5%AE%B6%E7%B3%8A%E5%8F%A3%E7%9A%84%E8%81%8C%E4%B8%9A%23) `264.3K 🔥` `-34%`
1. [魏笑直播](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E7%AC%91%E7%9B%B4%E6%92%AD%23) `264.2K 🔥` `-32%`
1. [韩红基金会回应救护车采购质疑](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E5%9B%9E%E5%BA%94%E6%95%91%E6%8A%A4%E8%BD%A6%E9%87%87%E8%B4%AD%E8%B4%A8%E7%96%91%23) `188.0K 🔥` `-46%`
1. [小狗洗澡洗得太干净主人不敢认](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E6%B4%97%E6%BE%A1%E6%B4%97%E5%BE%97%E5%A4%AA%E5%B9%B2%E5%87%80%E4%B8%BB%E4%BA%BA%E4%B8%8D%E6%95%A2%E8%AE%A4%23) `170.1K 🔥` `-32%`
1. [娜扎体验韩国化妆室](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E4%BD%93%E9%AA%8C%E9%9F%A9%E5%9B%BD%E5%8C%96%E5%A6%86%E5%AE%A4%23) `168.1K 🔥` `-47%`
1. [网红温婉偷税被罚后换号复活](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%B8%A9%E5%A9%89%E5%81%B7%E7%A8%8E%E8%A2%AB%E7%BD%9A%E5%90%8E%E6%8D%A2%E5%8F%B7%E5%A4%8D%E6%B4%BB%23) `152.0K 🔥` `-62%`
1. [玉米一种很健康的食物](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B1%B3%E4%B8%80%E7%A7%8D%E5%BE%88%E5%81%A5%E5%BA%B7%E7%9A%84%E9%A3%9F%E7%89%A9%23) `139.2K 🔥` `-22%`
1. [王橹杰演技](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%BC%94%E6%8A%80%23) `125.1K 🔥` `-34%`
1. [梦中那片海在那英演唱会团建](https://s.weibo.com/weibo?q=%23%E6%A2%A6%E4%B8%AD%E9%82%A3%E7%89%87%E6%B5%B7%E5%9C%A8%E9%82%A3%E8%8B%B1%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A2%E5%BB%BA%23) `124.9K 🔥` `-24%`

Updated at 2026-08-23 16:49:03

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
