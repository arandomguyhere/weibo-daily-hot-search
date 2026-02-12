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

1. [男子用AI一夜赚够一线房首付 (Man uses AI to earn enough down payment for first-tier house overnight)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%94%A8AI%E4%B8%80%E5%A4%9C%E8%B5%9A%E5%A4%9F%E4%B8%80%E7%BA%BF%E6%88%BF%E9%A6%96%E4%BB%98%23) `1.2M 🔥` `NEW`
1. [2025年全国结婚登记676.3万对](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0676.3%E4%B8%87%E5%AF%B9%23) `857.5K 🔥` `NEW`
1. [你的回家路有多少人守护](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E5%9B%9E%E5%AE%B6%E8%B7%AF%E6%9C%89%E5%A4%9A%E5%B0%91%E4%BA%BA%E5%AE%88%E6%8A%A4%23) `694.5K 🔥` `NEW`
1. [李健 春晚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%20%E6%98%A5%E6%99%9A%23) `388.8K 🔥` `NEW`
1. [马年拍马屁](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%8B%8D%E9%A9%AC%E5%B1%81%23) `287.4K 🔥` `NEW`
1. [微博红包](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E7%BA%A2%E5%8C%85%23) `255.9K 🔥` `NEW`
1. [中国速滑米兰冬奥首枚奖牌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%9F%E6%BB%91%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E6%9E%9A%E5%A5%96%E7%89%8C%23) `253.4K 🔥` `NEW`
1. [成毅朱瞻基特辑](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%9C%B1%E7%9E%BB%E5%9F%BA%E7%89%B9%E8%BE%91%23) `185.1K 🔥` `NEW`
1. [当街摔死多只兔子摊贩被行拘5天](https://s.weibo.com/weibo?q=%23%E5%BD%93%E8%A1%97%E6%91%94%E6%AD%BB%E5%A4%9A%E5%8F%AA%E5%85%94%E5%AD%90%E6%91%8A%E8%B4%A9%E8%A2%AB%E8%A1%8C%E6%8B%985%E5%A4%A9%23) `184.3K 🔥` `NEW`
1. [闵熙珍胜诉](https://s.weibo.com/weibo?q=%23%E9%97%B5%E7%86%99%E7%8F%8D%E8%83%9C%E8%AF%89%23) `183.7K 🔥` `NEW`
1. [孙颖莎ELLE (Sun Yingsha ELLE)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%23) `183.3K 🔥` `NEW`
1. [孙颖莎ELLE 6个封面](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EELLE%206%E4%B8%AA%E5%B0%81%E9%9D%A2%23) `183.0K 🔥` `NEW`
1. [郭京飞透露全家满意的奥秘](https://s.weibo.com/weibo?q=%23%E9%83%AD%E4%BA%AC%E9%A3%9E%E9%80%8F%E9%9C%B2%E5%85%A8%E5%AE%B6%E6%BB%A1%E6%84%8F%E7%9A%84%E5%A5%A5%E7%A7%98%23) `182.2K 🔥` `NEW`
1. [过年3件套第一批受害者出现](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B43%E4%BB%B6%E5%A5%97%E7%AC%AC%E4%B8%80%E6%89%B9%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%23) `182.1K 🔥` `NEW`
1. [春节上门喂猫10天赚9000元](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E4%B8%8A%E9%97%A8%E5%96%82%E7%8C%AB10%E5%A4%A9%E8%B5%9A9000%E5%85%83%23) `181.5K 🔥` `NEW`
1. [国际雪联阴阳谷爱凌后道歉](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E9%9B%AA%E8%81%94%E9%98%B4%E9%98%B3%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%8E%E9%81%93%E6%AD%89%23) `181.4K 🔥` `NEW`
1. [陈妍希官宣喜综](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%AE%98%E5%AE%A3%E5%96%9C%E7%BB%BC%23) `181.3K 🔥` `NEW`
1. [长期侧睡对颜值的影响](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%BE%A7%E7%9D%A1%E5%AF%B9%E9%A2%9C%E5%80%BC%E7%9A%84%E5%BD%B1%E5%93%8D%23) `181.3K 🔥` `NEW`
1. [法国3名婴儿因食用问题奶粉死亡](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD3%E5%90%8D%E5%A9%B4%E5%84%BF%E5%9B%A0%E9%A3%9F%E7%94%A8%E9%97%AE%E9%A2%98%E5%A5%B6%E7%B2%89%E6%AD%BB%E4%BA%A1%23) `178.2K 🔥` `NEW`
1. [薛文姐35年前乳汁救武警今患癌](https://s.weibo.com/weibo?q=%23%E8%96%9B%E6%96%87%E5%A7%9035%E5%B9%B4%E5%89%8D%E4%B9%B3%E6%B1%81%E6%95%91%E6%AD%A6%E8%AD%A6%E4%BB%8A%E6%82%A3%E7%99%8C%23) `163.7K 🔥` `NEW`
1. [成毅两京十五日台词 (Cheng Yi and Two Capitals on the 15th)](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E5%8F%B0%E8%AF%8D%23) `161.0K 🔥` `NEW`
1. [从Deepseek到Seedance中国AI成了](https://s.weibo.com/weibo?q=%23%E4%BB%8EDeepseek%E5%88%B0Seedance%E4%B8%AD%E5%9B%BDAI%E6%88%90%E4%BA%86%23) `156.6K 🔥` `NEW`
1. [明日乐园杀青](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E4%B9%90%E5%9B%AD%E6%9D%80%E9%9D%92%23) `146.6K 🔥` `NEW`
1. [赫丽摸金宇](https://s.weibo.com/weibo?q=%23%E8%B5%AB%E4%B8%BD%E6%91%B8%E9%87%91%E5%AE%87%23) `140.8K 🔥` `NEW`
1. [猕猴桃牛肉](https://s.weibo.com/weibo?q=%23%E7%8C%95%E7%8C%B4%E6%A1%83%E7%89%9B%E8%82%89%23) `126.6K 🔥` `NEW`
1. [敖瑞鹏王玉雯和平精英cos](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1cos%23) `126.1K 🔥` `NEW`
1. [王子文蒋欣再合作](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E6%96%87%E8%92%8B%E6%AC%A3%E5%86%8D%E5%90%88%E4%BD%9C%23) `124.7K 🔥` `NEW`
1. [极氪8X启动车企首次环中国路测](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA8X%E5%90%AF%E5%8A%A8%E8%BD%A6%E4%BC%81%E9%A6%96%E6%AC%A1%E7%8E%AF%E4%B8%AD%E5%9B%BD%E8%B7%AF%E6%B5%8B%23) `123.7K 🔥` `NEW`
1. [男子年会醉酒回家后倒地大小便失禁](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B9%B4%E4%BC%9A%E9%86%89%E9%85%92%E5%9B%9E%E5%AE%B6%E5%90%8E%E5%80%92%E5%9C%B0%E5%A4%A7%E5%B0%8F%E4%BE%BF%E5%A4%B1%E7%A6%81%23) `122.6K 🔥` `NEW`
1. [姐姐被藏尸位置就在弟弟店铺正上方](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%A2%AB%E8%97%8F%E5%B0%B8%E4%BD%8D%E7%BD%AE%E5%B0%B1%E5%9C%A8%E5%BC%9F%E5%BC%9F%E5%BA%97%E9%93%BA%E6%AD%A3%E4%B8%8A%E6%96%B9%23) `122.2K 🔥` `NEW`
1. [部分去日本航线取消全部航班 (All flights to Japan canceled)](https://s.weibo.com/weibo?q=%23%E9%83%A8%E5%88%86%E5%8E%BB%E6%97%A5%E6%9C%AC%E8%88%AA%E7%BA%BF%E5%8F%96%E6%B6%88%E5%85%A8%E9%83%A8%E8%88%AA%E7%8F%AD%23) `121.5K 🔥` `NEW`
1. [相亲吃烤肉](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E4%BA%B2%E5%90%83%E7%83%A4%E8%82%89%23) `117.1K 🔥` `NEW`
1. [周深杂志](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%9D%82%E5%BF%97%23) `114.8K 🔥` `NEW`
1. [伦纳德准绝杀火箭](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E7%BA%B3%E5%BE%B7%E5%87%86%E7%BB%9D%E6%9D%80%E7%81%AB%E7%AE%AD%23) `113.7K 🔥` `NEW`
1. [刘少昂林孝埈孙龙1000米分组](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E6%9E%97%E5%AD%9D%E5%9F%88%E5%AD%99%E9%BE%991000%E7%B1%B3%E5%88%86%E7%BB%84%23) `103.7K 🔥` `NEW`
1. [任嘉伦直播](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E7%9B%B4%E6%92%AD%23) `102.1K 🔥` `NEW`
1. [郑嘉颖现在比九子夺嫡的时候还累](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%98%89%E9%A2%96%E7%8E%B0%E5%9C%A8%E6%AF%94%E4%B9%9D%E5%AD%90%E5%A4%BA%E5%AB%A1%E7%9A%84%E6%97%B6%E5%80%99%E8%BF%98%E7%B4%AF%23) `101.6K 🔥` `NEW`
1. [哥哥安抚腮腺炎弟弟得知传染秒变脸](https://s.weibo.com/weibo?q=%23%E5%93%A5%E5%93%A5%E5%AE%89%E6%8A%9A%E8%85%AE%E8%85%BA%E7%82%8E%E5%BC%9F%E5%BC%9F%E5%BE%97%E7%9F%A5%E4%BC%A0%E6%9F%93%E7%A7%92%E5%8F%98%E8%84%B8%23) `98.4K 🔥` `NEW`
1. [比亚迪与曼城足球俱乐部达成合作 (BYD reaches cooperation with Manchester City Football Club)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E4%B8%8E%E6%9B%BC%E5%9F%8E%E8%B6%B3%E7%90%83%E4%BF%B1%E4%B9%90%E9%83%A8%E8%BE%BE%E6%88%90%E5%90%88%E4%BD%9C%23) `579.2K 🔥` `+173%`
1. [玫瑰丛生定档 (Rose bushes scheduled)](https://s.weibo.com/weibo?q=%23%E7%8E%AB%E7%91%B0%E4%B8%9B%E7%94%9F%E5%AE%9A%E6%A1%A3%23) `420.0K 🔥` `+190%`
1. [李一桐高情商公关](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E9%AB%98%E6%83%85%E5%95%86%E5%85%AC%E5%85%B3%23) `184.4K 🔥`
1. [李一桐发了49999的红包](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%8F%91%E4%BA%8649999%E7%9A%84%E7%BA%A2%E5%8C%85%23) `182.7K 🔥`
1. [游乐王子的女儿感染合胞病毒 (The daughter of the amusement prince is infected with syncytial virus)](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E4%B9%90%E7%8E%8B%E5%AD%90%E7%9A%84%E5%A5%B3%E5%84%BF%E6%84%9F%E6%9F%93%E5%90%88%E8%83%9E%E7%97%85%E6%AF%92%23) `181.4K 🔥`
1. [宋旻浩或将被判刑](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%97%BB%E6%B5%A9%E6%88%96%E5%B0%86%E8%A2%AB%E5%88%A4%E5%88%91%23) `181.3K 🔥`
1. [男子称亲吻搂抱女子说不算恋爱](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A7%B0%E4%BA%B2%E5%90%BB%E6%90%82%E6%8A%B1%E5%A5%B3%E5%AD%90%E8%AF%B4%E4%B8%8D%E7%AE%97%E6%81%8B%E7%88%B1%23) `181.2K 🔥`
1. [两名小孩扔爆竹致1200年古树起火](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%90%8D%E5%B0%8F%E5%AD%A9%E6%89%94%E7%88%86%E7%AB%B9%E8%87%B41200%E5%B9%B4%E5%8F%A4%E6%A0%91%E8%B5%B7%E7%81%AB%23) `292.5K 🔥` `-64%`
1. [生小孩需要一个发达的前额叶 (Having a baby requires a developed prefrontal lobe)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%B0%8F%E5%AD%A9%E9%9C%80%E8%A6%81%E4%B8%80%E4%B8%AA%E5%8F%91%E8%BE%BE%E7%9A%84%E5%89%8D%E9%A2%9D%E5%8F%B6%23) `220.4K 🔥` `-34%`
1. [春运路上藏着这些马年彩蛋 (These Year of the Horse Easter Eggs are Hidden on the Spring Festival Transport Road)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%BF%90%E8%B7%AF%E4%B8%8A%E8%97%8F%E7%9D%80%E8%BF%99%E4%BA%9B%E9%A9%AC%E5%B9%B4%E5%BD%A9%E8%9B%8B%23) `185.0K 🔥` `-69%`
1. [体操运动员坠楼涉事教练被立案调查 (Coach involved in gymnast's fall is under investigation)](https://s.weibo.com/weibo?q=%23%E4%BD%93%E6%93%8D%E8%BF%90%E5%8A%A8%E5%91%98%E5%9D%A0%E6%A5%BC%E6%B6%89%E4%BA%8B%E6%95%99%E7%BB%83%E8%A2%AB%E7%AB%8B%E6%A1%88%E8%B0%83%E6%9F%A5%23) `181.2K 🔥` `-83%`
1. [开始推理吧 接原班人马](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A7%20%E6%8E%A5%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `159.1K 🔥` `-53%`
1. [ZB1将以五人组活动](https://s.weibo.com/weibo?q=%23ZB1%E5%B0%86%E4%BB%A5%E4%BA%94%E4%BA%BA%E7%BB%84%E6%B4%BB%E5%8A%A8%23) `119.0K 🔥` `-39%`
1. [春节中国赴日旅客量腰斩了](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E4%B8%AD%E5%9B%BD%E8%B5%B4%E6%97%A5%E6%97%85%E5%AE%A2%E9%87%8F%E8%85%B0%E6%96%A9%E4%BA%86%23) `113.9K 🔥` `-42%`

Updated at 2026-02-12 12:37:12

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
