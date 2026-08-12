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

1. [C罗五个孩子出席婚礼 (Ronaldo's five children attended the wedding)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%BA%94%E4%B8%AA%E5%AD%A9%E5%AD%90%E5%87%BA%E5%B8%AD%E5%A9%9A%E7%A4%BC%23) `1.2M 🔥` `NEW`
1. [高钾晚餐可以让人睡得更香](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%92%BE%E6%99%9A%E9%A4%90%E5%8F%AF%E4%BB%A5%E8%AE%A9%E4%BA%BA%E7%9D%A1%E5%BE%97%E6%9B%B4%E9%A6%99%23) `1.2M 🔥` `NEW`
1. [茅台的红丝带原来是这样用的](https://s.weibo.com/weibo?q=%23%E8%8C%85%E5%8F%B0%E7%9A%84%E7%BA%A2%E4%B8%9D%E5%B8%A6%E5%8E%9F%E6%9D%A5%E6%98%AF%E8%BF%99%E6%A0%B7%E7%94%A8%E7%9A%84%23) `467.1K 🔥` `NEW`
1. [日全食](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%85%A8%E9%A3%9F%23) `462.2K 🔥` `NEW`
1. [白海豚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `447.9K 🔥` `NEW`
1. [陈俊生离婚后为什么对平儿不好](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E7%94%9F%E7%A6%BB%E5%A9%9A%E5%90%8E%E4%B8%BA%E4%BB%80%E4%B9%88%E5%AF%B9%E5%B9%B3%E5%84%BF%E4%B8%8D%E5%A5%BD%23) `447.0K 🔥` `NEW`
1. [比亚迪海獭日本订单破千](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E6%B5%B7%E7%8D%AD%E6%97%A5%E6%9C%AC%E8%AE%A2%E5%8D%95%E7%A0%B4%E5%8D%83%23) `436.1K 🔥` `NEW`
1. [谁家领导出来送外卖了](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%AE%B6%E9%A2%86%E5%AF%BC%E5%87%BA%E6%9D%A5%E9%80%81%E5%A4%96%E5%8D%96%E4%BA%86%23) `434.7K 🔥` `NEW`
1. [男子不堪炸街噪音刺死辅警被判死刑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8D%E5%A0%AA%E7%82%B8%E8%A1%97%E5%99%AA%E9%9F%B3%E5%88%BA%E6%AD%BB%E8%BE%85%E8%AD%A6%E8%A2%AB%E5%88%A4%E6%AD%BB%E5%88%91%23) `424.7K 🔥` `NEW`
1. [业内认为蒋奇明是下一个大演员](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E8%AE%A4%E4%B8%BA%E8%92%8B%E5%A5%87%E6%98%8E%E6%98%AF%E4%B8%8B%E4%B8%80%E4%B8%AA%E5%A4%A7%E6%BC%94%E5%91%98%23) `414.8K 🔥` `NEW`
1. [原神 (Genshin Impact)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `377.3K 🔥` `NEW`
1. [iPhone18Pro相机3大升级](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%9B%B8%E6%9C%BA3%E5%A4%A7%E5%8D%87%E7%BA%A7%23) `357.3K 🔥` `NEW`
1. [陈思诚现身女友家乡](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E7%8E%B0%E8%BA%AB%E5%A5%B3%E5%8F%8B%E5%AE%B6%E4%B9%A1%23) `353.7K 🔥` `NEW`
1. [徐梦洁参加活动被老同学偶遇了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E5%8F%82%E5%8A%A0%E6%B4%BB%E5%8A%A8%E8%A2%AB%E8%80%81%E5%90%8C%E5%AD%A6%E5%81%B6%E9%81%87%E4%BA%86%23) `345.3K 🔥` `NEW`
1. [步惊云脱口秀 杀猪盘](https://s.weibo.com/weibo?q=%23%E6%AD%A5%E6%83%8A%E4%BA%91%E8%84%B1%E5%8F%A3%E7%A7%80%20%E6%9D%80%E7%8C%AA%E7%9B%98%23) `344.0K 🔥` `NEW`
1. [雾里青杀青剧照](https://s.weibo.com/weibo?q=%23%E9%9B%BE%E9%87%8C%E9%9D%92%E6%9D%80%E9%9D%92%E5%89%A7%E7%85%A7%23) `339.4K 🔥` `NEW`
1. [国行苹果AI支持机型](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%A1%8C%E8%8B%B9%E6%9E%9CAI%E6%94%AF%E6%8C%81%E6%9C%BA%E5%9E%8B%23) `339.3K 🔥` `NEW`
1. [3孩非亲生男子最放不下大女儿](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E7%94%B7%E5%AD%90%E6%9C%80%E6%94%BE%E4%B8%8D%E4%B8%8B%E5%A4%A7%E5%A5%B3%E5%84%BF%23) `339.3K 🔥` `NEW`
1. [约会网友40万金表没了](https://s.weibo.com/weibo?q=%23%E7%BA%A6%E4%BC%9A%E7%BD%91%E5%8F%8B40%E4%B8%87%E9%87%91%E8%A1%A8%E6%B2%A1%E4%BA%86%23) `297.1K 🔥` `NEW`
1. [台风灿鸿袭击日本](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%81%BF%E9%B8%BF%E8%A2%AD%E5%87%BB%E6%97%A5%E6%9C%AC%23) `254.9K 🔥` `NEW`
1. [C罗晒婚戒照 (Cristiano Ronaldo posts wedding ring photo)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%99%92%E5%A9%9A%E6%88%92%E7%85%A7%23) `253.0K 🔥` `NEW`
1. [汪峰透露女儿留学时最扎心一幕](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E9%80%8F%E9%9C%B2%E5%A5%B3%E5%84%BF%E7%95%99%E5%AD%A6%E6%97%B6%E6%9C%80%E6%89%8E%E5%BF%83%E4%B8%80%E5%B9%95%23) `231.8K 🔥` `NEW`
1. [C罗官宣结婚复刻订婚日期](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%98%E5%AE%A3%E7%BB%93%E5%A9%9A%E5%A4%8D%E5%88%BB%E8%AE%A2%E5%A9%9A%E6%97%A5%E6%9C%9F%23) `215.8K 🔥` `NEW`
1. [王宝强 Hello树先生](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%9D%E5%BC%BA%20Hello%E6%A0%91%E5%85%88%E7%94%9F%23) `200.1K 🔥` `NEW`
1. [主持人调侃白鹿长成这样有什么烦恼](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%8C%81%E4%BA%BA%E8%B0%83%E4%BE%83%E7%99%BD%E9%B9%BF%E9%95%BF%E6%88%90%E8%BF%99%E6%A0%B7%E6%9C%89%E4%BB%80%E4%B9%88%E7%83%A6%E6%81%BC%23) `161.8K 🔥` `NEW`
1. [郭兰英将演唱版权无偿捐献给国家](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%85%B0%E8%8B%B1%E5%B0%86%E6%BC%94%E5%94%B1%E7%89%88%E6%9D%83%E6%97%A0%E5%81%BF%E6%8D%90%E7%8C%AE%E7%BB%99%E5%9B%BD%E5%AE%B6%23) `159.2K 🔥` `NEW`
1. [文俊辉内娱最稀缺的长跑型演员](https://s.weibo.com/weibo?q=%23%E6%96%87%E4%BF%8A%E8%BE%89%E5%86%85%E5%A8%B1%E6%9C%80%E7%A8%80%E7%BC%BA%E7%9A%84%E9%95%BF%E8%B7%91%E5%9E%8B%E6%BC%94%E5%91%98%23) `144.2K 🔥` `NEW`
1. [九门湘西往事 删减](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E6%B9%98%E8%A5%BF%E5%BE%80%E4%BA%8B%20%E5%88%A0%E5%87%8F%23) `140.5K 🔥` `NEW`
1. [女子花1万5找情感专家遭扑倒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B11%E4%B8%875%E6%89%BE%E6%83%85%E6%84%9F%E4%B8%93%E5%AE%B6%E9%81%AD%E6%89%91%E5%80%92%23) `139.0K 🔥` `NEW`
1. [刘德华的情绪管理能力](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BE%B7%E5%8D%8E%E7%9A%84%E6%83%85%E7%BB%AA%E7%AE%A1%E7%90%86%E8%83%BD%E5%8A%9B%23) `138.9K 🔥` `NEW`
1. [合肥国仪量子上市 (Hefei Guoyi Quantum goes public)](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%9B%BD%E4%BB%AA%E9%87%8F%E5%AD%90%E4%B8%8A%E5%B8%82%23) `132.2K 🔥` `NEW`
1. [请查收这份暴雨天避险指南 (Please check this guide to avoid heavy rainstorms)](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%9F%A5%E6%94%B6%E8%BF%99%E4%BB%BD%E6%9A%B4%E9%9B%A8%E5%A4%A9%E9%81%BF%E9%99%A9%E6%8C%87%E5%8D%97%23) `1.2M 🔥` `+25%`
1. [六公主力挺赵丽颖百花奖 (Six Princesses Support Zhao Liying Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%85%AC%E4%B8%BB%E5%8A%9B%E6%8C%BA%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%99%BE%E8%8A%B1%E5%A5%96%23) `594.5K 🔥` `+91%`
1. [马伊琍想让谁顺谁就顺极了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%8A%E7%90%8D%E6%83%B3%E8%AE%A9%E8%B0%81%E9%A1%BA%E8%B0%81%E5%B0%B1%E9%A1%BA%E6%9E%81%E4%BA%86%23) `416.6K 🔥` `+74%`
1. [日本篡改历史被反噬了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%AF%A1%E6%94%B9%E5%8E%86%E5%8F%B2%E8%A2%AB%E5%8F%8D%E5%99%AC%E4%BA%86%23) `370.7K 🔥` `+57%`
1. [欢迎来龙餐馆票房](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E7%A5%A8%E6%88%BF%23) `364.0K 🔥` `+55%`
1. [忙到晕倒炸鸡店员工已结算工资离职 (Fried chicken restaurant employee was so busy that he fainted and resigned after paying his salary)](https://s.weibo.com/weibo?q=%23%E5%BF%99%E5%88%B0%E6%99%95%E5%80%92%E7%82%B8%E9%B8%A1%E5%BA%97%E5%91%98%E5%B7%A5%E5%B7%B2%E7%BB%93%E7%AE%97%E5%B7%A5%E8%B5%84%E7%A6%BB%E8%81%8C%23) `352.9K 🔥` `+51%`
1. [赵一鸣涉事店铺老板回应](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%80%E9%B8%A3%E6%B6%89%E4%BA%8B%E5%BA%97%E9%93%BA%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%23) `343.7K 🔥` `+45%`
1. [中598万男子称保密怕影响妻子孩子](https://s.weibo.com/weibo?q=%23%E4%B8%AD598%E4%B8%87%E7%94%B7%E5%AD%90%E7%A7%B0%E4%BF%9D%E5%AF%86%E6%80%95%E5%BD%B1%E5%93%8D%E5%A6%BB%E5%AD%90%E5%AD%A9%E5%AD%90%23) `189.5K 🔥` `+318%`
1. [C罗宣布结婚 (Cristiano Ronaldo announces marriage)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `4.5M 🔥`
1. [贺峻霖向往的生活常驻 (The life that He Junlin longs for is permanent)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%90%91%E5%BE%80%E7%9A%84%E7%94%9F%E6%B4%BB%E5%B8%B8%E9%A9%BB%23) `340.6K 🔥`
1. [众球星祝贺C罗](https://s.weibo.com/weibo?q=%23%E4%BC%97%E7%90%83%E6%98%9F%E7%A5%9D%E8%B4%BAC%E7%BD%97%23) `283.4K 🔥`
1. [Angelababy时隔一年千鸟格造型](https://s.weibo.com/weibo?q=%23Angelababy%E6%97%B6%E9%9A%94%E4%B8%80%E5%B9%B4%E5%8D%83%E9%B8%9F%E6%A0%BC%E9%80%A0%E5%9E%8B%23) `279.4K 🔥`
1. [曝刺棠女主换成杨超越了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%BA%E6%A3%A0%E5%A5%B3%E4%B8%BB%E6%8D%A2%E6%88%90%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%BA%86%23) `135.2K 🔥`
1. [郭兰英逝世 (Guo Lanying passed away)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%85%B0%E8%8B%B1%E9%80%9D%E4%B8%96%23) `374.0K 🔥` `-70%`
1. [曝赵一鸣4块牛肉干64元复称仅17元 (It was revealed that Zhao Yiming’s 4 pieces of beef jerky cost 64 yuan and were renamed to only 17 yuan.)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B5%B5%E4%B8%80%E9%B8%A34%E5%9D%97%E7%89%9B%E8%82%89%E5%B9%B264%E5%85%83%E5%A4%8D%E7%A7%B0%E4%BB%8517%E5%85%83%23) `354.4K 🔥` `-59%`
1. [上海暴雨](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `275.3K 🔥` `-70%`
1. [高考444分考生回应被殡葬专业录取 (Candidates who scored 444 points in the college entrance examination responded that they were admitted to the funeral major)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83444%E5%88%86%E8%80%83%E7%94%9F%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%AE%A1%E8%91%AC%E4%B8%93%E4%B8%9A%E5%BD%95%E5%8F%96%23) `187.0K 🔥` `-22%`
1. [结婚40年都AA制丈夫认为公平合理 (After 40 years of marriage, my husband thinks it is fair and reasonable)](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A40%E5%B9%B4%E9%83%BDAA%E5%88%B6%E4%B8%88%E5%A4%AB%E8%AE%A4%E4%B8%BA%E5%85%AC%E5%B9%B3%E5%90%88%E7%90%86%23) `144.9K 🔥` `-32%`
1. [雷军回应小米自研发光材料](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E8%87%AA%E7%A0%94%E5%8F%91%E5%85%89%E6%9D%90%E6%96%99%23) `132.7K 🔥` `-46%`

Updated at 2026-08-12 10:43:18

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
