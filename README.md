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

1. [樊振东欧冠冠军 (Fan Zhendong Champions League Champion)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AC%A7%E5%86%A0%E5%86%A0%E5%86%9B%23) `17.7M 🔥` `NEW`
1. [家业 磨皮](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%20%E7%A3%A8%E7%9A%AE%23) `2.5M 🔥` `NEW`
1. [樊振东赛后摇了摇头](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B5%9B%E5%90%8E%E6%91%87%E4%BA%86%E6%91%87%E5%A4%B4%23) `654.9K 🔥` `NEW`
1. [樊振东失2分](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%A4%B12%E5%88%86%23) `443.3K 🔥` `NEW`
1. [曝最终版白玉兰男主提名](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9C%80%E7%BB%88%E7%89%88%E7%99%BD%E7%8E%89%E5%85%B0%E7%94%B7%E4%B8%BB%E6%8F%90%E5%90%8D%23) `351.9K 🔥` `NEW`
1. [家业刚开播豆瓣大量一星](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E5%88%9A%E5%BC%80%E6%92%AD%E8%B1%86%E7%93%A3%E5%A4%A7%E9%87%8F%E4%B8%80%E6%98%9F%23) `219.7K 🔥` `NEW`
1. [亚历山大MVP](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E5%8E%86%E5%B1%B1%E5%A4%A7MVP%23) `218.1K 🔥` `NEW`
1. [男子拒绝广州调岗山东被炒获赔50万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%92%E7%BB%9D%E5%B9%BF%E5%B7%9E%E8%B0%83%E5%B2%97%E5%B1%B1%E4%B8%9C%E8%A2%AB%E7%82%92%E8%8E%B7%E8%B5%9450%E4%B8%87%23) `217.9K 🔥` `NEW`
1. [店员回应降价iPhone17被疯抢](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%91%98%E5%9B%9E%E5%BA%94%E9%99%8D%E4%BB%B7iPhone17%E8%A2%AB%E7%96%AF%E6%8A%A2%23) `217.5K 🔥` `NEW`
1. [樊振东0比3小勒布伦](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C0%E6%AF%943%E5%B0%8F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `217.3K 🔥` `NEW`
1. [和平统一后台湾可获稳定廉价能源 (After peaceful reunification, Taiwan can obtain stable and cheap energy)](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%BB%9F%E4%B8%80%E5%90%8E%E5%8F%B0%E6%B9%BE%E5%8F%AF%E8%8E%B7%E7%A8%B3%E5%AE%9A%E5%BB%89%E4%BB%B7%E8%83%BD%E6%BA%90%23) `213.4K 🔥` `NEW`
1. [猫咪躲在阴凉地睡觉进屋瞬间震惊了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E8%BA%B2%E5%9C%A8%E9%98%B4%E5%87%89%E5%9C%B0%E7%9D%A1%E8%A7%89%E8%BF%9B%E5%B1%8B%E7%9E%AC%E9%97%B4%E9%9C%87%E6%83%8A%E4%BA%86%23) `211.1K 🔥` `NEW`
1. [专家称4岁以下穿机能鞋干扰足弓发育](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B04%E5%B2%81%E4%BB%A5%E4%B8%8B%E7%A9%BF%E6%9C%BA%E8%83%BD%E9%9E%8B%E5%B9%B2%E6%89%B0%E8%B6%B3%E5%BC%93%E5%8F%91%E8%82%B2%23) `208.4K 🔥` `NEW`
1. [李昀锐丞磊李晨郑恺一起打球](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%9E%E7%A3%8A%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E4%B8%80%E8%B5%B7%E6%89%93%E7%90%83%23) `207.3K 🔥` `NEW`
1. [杨紫李祯热度](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%9D%8E%E7%A5%AF%E7%83%AD%E5%BA%A6%23) `205.6K 🔥` `NEW`
1. [清融小乔大王](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%E5%B0%8F%E4%B9%94%E5%A4%A7%E7%8E%8B%23) `204.8K 🔥` `NEW`
1. [主角 神器认主](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E7%A5%9E%E5%99%A8%E8%AE%A4%E4%B8%BB%23) `204.7K 🔥` `NEW`
1. [男子连买9副耳机全部申请退货](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%9E%E4%B9%B09%E5%89%AF%E8%80%B3%E6%9C%BA%E5%85%A8%E9%83%A8%E7%94%B3%E8%AF%B7%E9%80%80%E8%B4%A7%23) `198.0K 🔥` `NEW`
1. [十个勤天演唱会](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%23) `192.3K 🔥` `NEW`
1. [偶遇谢霆锋买葱油粑粑](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E8%B0%A2%E9%9C%86%E9%94%8B%E4%B9%B0%E8%91%B1%E6%B2%B9%E7%B2%91%E7%B2%91%23) `186.0K 🔥` `NEW`
1. [广西皮卡坠河9人失联均为女性 (Nine people missing after pickup truck fell into river in Guangxi, all women)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%9A%AE%E5%8D%A1%E5%9D%A0%E6%B2%B39%E4%BA%BA%E5%A4%B1%E8%81%94%E5%9D%87%E4%B8%BA%E5%A5%B3%E6%80%A7%23) `171.1K 🔥` `NEW`
1. [樊振东0比3大勒布伦 (Fan Zhendong 0-3 LeBron)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C0%E6%AF%943%E5%A4%A7%E5%8B%92%E5%B8%83%E4%BC%A6%23) `18.8M 🔥` `+261%`
1. [以德润网](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%BE%B7%E6%B6%A6%E7%BD%91%23) `2.7M 🔥` `+26%`
1. [张凌赫gucci大秀登美趋第一](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%ABgucci%E5%A4%A7%E7%A7%80%E7%99%BB%E7%BE%8E%E8%B6%8B%E7%AC%AC%E4%B8%80%23) `434.4K 🔥` `+81%`
1. [八旬老人公交上闭眼休息实则已死亡](https://s.weibo.com/weibo?q=%23%E5%85%AB%E6%97%AC%E8%80%81%E4%BA%BA%E5%85%AC%E4%BA%A4%E4%B8%8A%E9%97%AD%E7%9C%BC%E4%BC%91%E6%81%AF%E5%AE%9E%E5%88%99%E5%B7%B2%E6%AD%BB%E4%BA%A1%23) `425.5K 🔥` `+69%`
1. [小S发文晒全家福](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%8F%91%E6%96%87%E6%99%92%E5%85%A8%E5%AE%B6%E7%A6%8F%23) `403.9K 🔥` `+61%`
1. [张真源头像 (Zhang Zhen's source portrait)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%A4%B4%E5%83%8F%23) `392.4K 🔥` `+56%`
1. [马尔代夫发生史上最严重单次潜水事故](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B0%94%E4%BB%A3%E5%A4%AB%E5%8F%91%E7%94%9F%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%B8%A5%E9%87%8D%E5%8D%95%E6%AC%A1%E6%BD%9C%E6%B0%B4%E4%BA%8B%E6%95%85%23) `308.1K 🔥` `+21%`
1. [金珉奎 夜店](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%8F%89%E5%A5%8E%20%E5%A4%9C%E5%BA%97%23) `220.1K 🔥`
1. [狼队对战JDG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98JDG%23) `219.3K 🔥`
1. [杨超越摆拍800张选9张](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E6%91%86%E6%8B%8D800%E5%BC%A0%E9%80%899%E5%BC%A0%23) `218.5K 🔥`
1. [给阿嬷的情书 (A love letter to grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `211.6K 🔥`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `206.6K 🔥`
1. [张真源严浩翔初现印象排名 (Zhang Zhenyuan Yan Haoxiang's first impression ranking)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%88%9D%E7%8E%B0%E5%8D%B0%E8%B1%A1%E6%8E%92%E5%90%8D%23) `204.5K 🔥`
1. [家业收视率](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `743.6K 🔥` `-64%`
1. [欧冠决赛](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%23) `708.8K 🔥` `-59%`
1. [李冰冰亮相戛纳红毯](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%86%B0%E5%86%B0%E4%BA%AE%E7%9B%B8%E6%88%9B%E7%BA%B3%E7%BA%A2%E6%AF%AF%23) `654.9K 🔥` `-51%`
1. [张雪机车夺得5冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%BE%975%E5%86%A0%23) `628.5K 🔥` `-62%`
1. [刘浩存穿十厘米高跟鞋定点转圈](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%A9%BF%E5%8D%81%E5%8E%98%E7%B1%B3%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%AE%9A%E7%82%B9%E8%BD%AC%E5%9C%88%23) `573.1K 🔥` `-39%`
1. [谢娜晒和李小冉聊天记录](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%99%92%E5%92%8C%E6%9D%8E%E5%B0%8F%E5%86%89%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `441.9K 🔥` `-50%`
1. [李一桐评论去世粉丝博文](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E8%AF%84%E8%AE%BA%E5%8E%BB%E4%B8%96%E7%B2%89%E4%B8%9D%E5%8D%9A%E6%96%87%23) `416.6K 🔥` `-52%`
1. [电脑微信会惩罚每一个恋旧的人 (Computer WeChat will punish everyone who is nostalgic)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%84%91%E5%BE%AE%E4%BF%A1%E4%BC%9A%E6%83%A9%E7%BD%9A%E6%AF%8F%E4%B8%80%E4%B8%AA%E6%81%8B%E6%97%A7%E7%9A%84%E4%BA%BA%23) `402.1K 🔥` `-53%`
1. [苹果华为小米大幅降价原因 (Reasons why Apple, Huawei and Xiaomi slashed prices)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8D%8E%E4%B8%BA%E5%B0%8F%E7%B1%B3%E5%A4%A7%E5%B9%85%E9%99%8D%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `220.8K 🔥` `-36%`
1. [樊振东vs小勒布伦](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E5%B0%8F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `220.4K 🔥` `-92%`
1. [杨紫曾被自己的脖子吓到](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%9B%BE%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%9A%84%E8%84%96%E5%AD%90%E5%90%93%E5%88%B0%23) `219.0K 🔥` `-58%`
1. [樊振东vs大勒布伦 (Fan Zhendong vs Le Brun)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E5%A4%A7%E5%8B%92%E5%B8%83%E4%BC%A6%23) `214.6K 🔥` `-84%`
1. [家业 (family business)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%23) `196.8K 🔥` `-40%`
1. [欧冠 (Champions League)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%23) `196.8K 🔥` `-21%`
1. [下身瘫痪女子育女后丈夫消失7年](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E8%BA%AB%E7%98%AB%E7%97%AA%E5%A5%B3%E5%AD%90%E8%82%B2%E5%A5%B3%E5%90%8E%E4%B8%88%E5%A4%AB%E6%B6%88%E5%A4%B17%E5%B9%B4%23) `183.0K 🔥` `-28%`
1. [长鑫科技一季度营收同比增长719.13%](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%B8%80%E5%AD%A3%E5%BA%A6%E8%90%A5%E6%94%B6%E5%90%8C%E6%AF%94%E5%A2%9E%E9%95%BF719.13%25%23) `181.1K 🔥` `-28%`
1. [男子手机号被豆包乱标成卖猪电话](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%8B%E6%9C%BA%E5%8F%B7%E8%A2%AB%E8%B1%86%E5%8C%85%E4%B9%B1%E6%A0%87%E6%88%90%E5%8D%96%E7%8C%AA%E7%94%B5%E8%AF%9D%23) `176.1K 🔥` `-30%`

Updated at 2026-05-17 23:29:54

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
