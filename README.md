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

1. [刘文祥 (Liu Wenxiang)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%23) `862.4K 🔥` `NEW`
1. [25岁儿子毕业不工作急哭父亲](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%84%BF%E5%AD%90%E6%AF%95%E4%B8%9A%E4%B8%8D%E5%B7%A5%E4%BD%9C%E6%80%A5%E5%93%AD%E7%88%B6%E4%BA%B2%23) `596.1K 🔥` `NEW`
1. [网红锅巴厂原料和鞋垫一起烤](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E9%94%85%E5%B7%B4%E5%8E%82%E5%8E%9F%E6%96%99%E5%92%8C%E9%9E%8B%E5%9E%AB%E4%B8%80%E8%B5%B7%E7%83%A4%23) `389.5K 🔥` `NEW`
1. [100万装出了10万的装修效果](https://s.weibo.com/weibo?q=%23100%E4%B8%87%E8%A3%85%E5%87%BA%E4%BA%8610%E4%B8%87%E7%9A%84%E8%A3%85%E4%BF%AE%E6%95%88%E6%9E%9C%23) `369.6K 🔥` `NEW`
1. [金融315](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%9E%8D315%23) `316.0K 🔥` `NEW`
1. [高质量睡眠对人的改变](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B4%A8%E9%87%8F%E7%9D%A1%E7%9C%A0%E5%AF%B9%E4%BA%BA%E7%9A%84%E6%94%B9%E5%8F%98%23) `232.0K 🔥` `NEW`
1. [泡椒凤爪的泡椒竟是印上去的](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%A4%92%E5%87%A4%E7%88%AA%E7%9A%84%E6%B3%A1%E6%A4%92%E7%AB%9F%E6%98%AF%E5%8D%B0%E4%B8%8A%E5%8E%BB%E7%9A%84%23) `164.3K 🔥` `NEW`
1. [网友卢浮宫偶遇素颜刘亦菲](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%8D%A2%E6%B5%AE%E5%AE%AB%E5%81%B6%E9%81%87%E7%B4%A0%E9%A2%9C%E5%88%98%E4%BA%A6%E8%8F%B2%23) `163.6K 🔥` `NEW`
1. [泰国遇害中国女子丈夫发声](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E9%81%87%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E4%B8%88%E5%A4%AB%E5%8F%91%E5%A3%B0%23) `163.6K 🔥` `NEW`
1. [她俩从连体婴到形同陌路](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E4%BF%A9%E4%BB%8E%E8%BF%9E%E4%BD%93%E5%A9%B4%E5%88%B0%E5%BD%A2%E5%90%8C%E9%99%8C%E8%B7%AF%23) `163.1K 🔥` `NEW`
1. [国内成品油价格将迎调整 (Domestic refined oil prices will be adjusted)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E6%88%90%E5%93%81%E6%B2%B9%E4%BB%B7%E6%A0%BC%E5%B0%86%E8%BF%8E%E8%B0%83%E6%95%B4%23) `162.8K 🔥` `NEW`
1. [谢娜晒老家学校旁边的面](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%99%92%E8%80%81%E5%AE%B6%E5%AD%A6%E6%A0%A1%E6%97%81%E8%BE%B9%E7%9A%84%E9%9D%A2%23) `154.8K 🔥` `NEW`
1. [蒯曼4比1王艺迪](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC4%E6%AF%941%E7%8E%8B%E8%89%BA%E8%BF%AA%23) `140.7K 🔥` `NEW`
1. [方圆自曝不火了就去国外读书](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E8%87%AA%E6%9B%9D%E4%B8%8D%E7%81%AB%E4%BA%86%E5%B0%B1%E5%8E%BB%E5%9B%BD%E5%A4%96%E8%AF%BB%E4%B9%A6%23) `139.2K 🔥` `NEW`
1. [看完瞿颖我的清迈病犯了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E7%9E%BF%E9%A2%96%E6%88%91%E7%9A%84%E6%B8%85%E8%BF%88%E7%97%85%E7%8A%AF%E4%BA%86%23) `136.9K 🔥` `NEW`
1. [中国爸爸带娃视频在推特上火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%88%B8%E7%88%B8%E5%B8%A6%E5%A8%83%E8%A7%86%E9%A2%91%E5%9C%A8%E6%8E%A8%E7%89%B9%E4%B8%8A%E7%81%AB%E4%BA%86%23) `136.1K 🔥` `NEW`
1. [美宜佳假烟比真烟更毒](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%9C%E4%BD%B3%E5%81%87%E7%83%9F%E6%AF%94%E7%9C%9F%E7%83%9F%E6%9B%B4%E6%AF%92%23) `129.3K 🔥` `NEW`
1. [人民教育家于漪逝世](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%95%99%E8%82%B2%E5%AE%B6%E4%BA%8E%E6%BC%AA%E9%80%9D%E4%B8%96%23) `107.1K 🔥` `NEW`
1. [不给女儿买校服但给儿子买新书](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%BB%99%E5%A5%B3%E5%84%BF%E4%B9%B0%E6%A0%A1%E6%9C%8D%E4%BD%86%E7%BB%99%E5%84%BF%E5%AD%90%E4%B9%B0%E6%96%B0%E4%B9%A6%23) `106.1K 🔥` `NEW`
1. [邓凯回应孔雪儿想演强制爱](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E5%9B%9E%E5%BA%94%E5%AD%94%E9%9B%AA%E5%84%BF%E6%83%B3%E6%BC%94%E5%BC%BA%E5%88%B6%E7%88%B1%23) `103.1K 🔥` `NEW`
1. [伊朗官员称乌克兰已成打击目标 (Iranian officials say Ukraine has been targeted)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AE%98%E5%91%98%E7%A7%B0%E4%B9%8C%E5%85%8B%E5%85%B0%E5%B7%B2%E6%88%90%E6%89%93%E5%87%BB%E7%9B%AE%E6%A0%87%23) `102.1K 🔥` `NEW`
1. [伊朗第51轮军事行动](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%AC%AC51%E8%BD%AE%E5%86%9B%E4%BA%8B%E8%A1%8C%E5%8A%A8%23) `102.1K 🔥` `NEW`
1. [央视调查某茶饮品牌遭恶意抹黑始末](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B0%83%E6%9F%A5%E6%9F%90%E8%8C%B6%E9%A5%AE%E5%93%81%E7%89%8C%E9%81%AD%E6%81%B6%E6%84%8F%E6%8A%B9%E9%BB%91%E5%A7%8B%E6%9C%AB%23) `102.1K 🔥` `NEW`
1. [东契奇绝杀掘金](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%A5%91%E5%A5%87%E7%BB%9D%E6%9D%80%E6%8E%98%E9%87%91%23) `100.1K 🔥` `NEW`
1. [丞磊徐若晗吻脖子路透](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E5%BE%90%E8%8B%A5%E6%99%97%E5%90%BB%E8%84%96%E5%AD%90%E8%B7%AF%E9%80%8F%23) `97.4K 🔥` `NEW`
1. [今日鲜奶铺卖的不全是鲜牛奶](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E9%B2%9C%E5%A5%B6%E9%93%BA%E5%8D%96%E7%9A%84%E4%B8%8D%E5%85%A8%E6%98%AF%E9%B2%9C%E7%89%9B%E5%A5%B6%23) `95.7K 🔥` `NEW`
1. [315问题车展](https://s.weibo.com/weibo?q=%23315%E9%97%AE%E9%A2%98%E8%BD%A6%E5%B1%95%23) `90.9K 🔥` `NEW`
1. [男子称结婚3年妻子在家不到15天](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A7%B0%E7%BB%93%E5%A9%9A3%E5%B9%B4%E5%A6%BB%E5%AD%90%E5%9C%A8%E5%AE%B6%E4%B8%8D%E5%88%B015%E5%A4%A9%23) `87.5K 🔥` `NEW`
1. [知名演员夸樊振东可爱](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E5%90%8D%E6%BC%94%E5%91%98%E5%A4%B8%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8F%AF%E7%88%B1%23) `83.5K 🔥` `NEW`
1. [终于理解不是一家人不进一家门了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E4%B8%8D%E6%98%AF%E4%B8%80%E5%AE%B6%E4%BA%BA%E4%B8%8D%E8%BF%9B%E4%B8%80%E5%AE%B6%E9%97%A8%E4%BA%86%23) `81.4K 🔥` `NEW`
1. [315不是一天的事 (315 is not a day thing)](https://s.weibo.com/weibo?q=%23315%E4%B8%8D%E6%98%AF%E4%B8%80%E5%A4%A9%E7%9A%84%E4%BA%8B%23) `80.4K 🔥` `NEW`
1. [谢谢AI成功让我笑了出来](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B0%A2AI%E6%88%90%E5%8A%9F%E8%AE%A9%E6%88%91%E7%AC%91%E4%BA%86%E5%87%BA%E6%9D%A5%23) `79.9K 🔥` `NEW`
1. [山西捞冰醋](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%8D%9E%E5%86%B0%E9%86%8B%23) `78.5K 🔥` `NEW`
1. [全世界都陪秦海璐看小说胡闹](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E9%83%BD%E9%99%AA%E7%A7%A6%E6%B5%B7%E7%92%90%E7%9C%8B%E5%B0%8F%E8%AF%B4%E8%83%A1%E9%97%B9%23) `77.0K 🔥` `NEW`
1. [梁婷 成毅年龄这个事怪我](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%A9%B7%20%E6%88%90%E6%AF%85%E5%B9%B4%E9%BE%84%E8%BF%99%E4%B8%AA%E4%BA%8B%E6%80%AA%E6%88%91%23) `76.3K 🔥` `NEW`
1. [梁婷 成毅报户口的时候报大一岁](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%A9%B7%20%E6%88%90%E6%AF%85%E6%8A%A5%E6%88%B7%E5%8F%A3%E7%9A%84%E6%97%B6%E5%80%99%E6%8A%A5%E5%A4%A7%E4%B8%80%E5%B2%81%23) `155.1K 🔥` `+87%`
1. [315](https://s.weibo.com/weibo?q=%23315%23) `1.2M 🔥`
1. [未来5年民生保障再加力](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E6%B0%91%E7%94%9F%E4%BF%9D%E9%9A%9C%E5%86%8D%E5%8A%A0%E5%8A%9B%23) `673.5K 🔥`
1. [专家建议工作日缩至4天](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE%E5%B7%A5%E4%BD%9C%E6%97%A5%E7%BC%A9%E8%87%B34%E5%A4%A9%23) `169.9K 🔥`
1. [成毅 年龄](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%20%E5%B9%B4%E9%BE%84%23) `164.1K 🔥`
1. [花少 花儿与中老年](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%20%E8%8A%B1%E5%84%BF%E4%B8%8E%E4%B8%AD%E8%80%81%E5%B9%B4%23) `134.9K 🔥`
1. [谢征掉马被打看的好爽 (It feels so good to see Xie Zheng fall off his horse and get beaten)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%8E%89%E9%A9%AC%E8%A2%AB%E6%89%93%E7%9C%8B%E7%9A%84%E5%A5%BD%E7%88%BD%23) `132.6K 🔥`
1. [机器人正要进电梯被男子一脚踹倒](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%AD%A3%E8%A6%81%E8%BF%9B%E7%94%B5%E6%A2%AF%E8%A2%AB%E7%94%B7%E5%AD%90%E4%B8%80%E8%84%9A%E8%B8%B9%E5%80%92%23) `176.3K 🔥` `-79%`
1. [古巴](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%B7%B4%23) `108.8K 🔥` `-46%`
1. [张凌赫田曦薇逐玉最后一场戏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E9%80%90%E7%8E%89%E6%9C%80%E5%90%8E%E4%B8%80%E5%9C%BA%E6%88%8F%23) `102.1K 🔥` `-50%`
1. [宁娘天选女主](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%A8%98%E5%A4%A9%E9%80%89%E5%A5%B3%E4%B8%BB%23) `99.8K 🔥` `-63%`
1. [时代少年团 外务 (Times Youth League Foreign Affairs)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%A4%96%E5%8A%A1%23) `92.1K 🔥` `-54%`
1. [谢征好有礼貌](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E5%A5%BD%E6%9C%89%E7%A4%BC%E8%B2%8C%23) `91.4K 🔥` `-36%`
1. [三里屯真人模特](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%87%8C%E5%B1%AF%E7%9C%9F%E4%BA%BA%E6%A8%A1%E7%89%B9%23) `81.7K 🔥` `-60%`
1. [章子怡为角色增重20斤](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E4%B8%BA%E8%A7%92%E8%89%B2%E5%A2%9E%E9%87%8D20%E6%96%A4%23) `78.8K 🔥` `-41%`
1. [胖东来鸡蛋被指人工色素超标](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%B8%A1%E8%9B%8B%E8%A2%AB%E6%8C%87%E4%BA%BA%E5%B7%A5%E8%89%B2%E7%B4%A0%E8%B6%85%E6%A0%87%23) `75.3K 🔥` `-63%`

Updated at 2026-03-15 12:59:33

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
