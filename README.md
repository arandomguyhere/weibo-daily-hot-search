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

1. [华南理工男生偷拍女同学裙底 (A boy from South China University of Technology secretly photographed a female classmate’s skirt)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%8D%97%E7%90%86%E5%B7%A5%E7%94%B7%E7%94%9F%E5%81%B7%E6%8B%8D%E5%A5%B3%E5%90%8C%E5%AD%A6%E8%A3%99%E5%BA%95%23) `970.1K 🔥` `NEW`
1. [程十安改名姜乘澜回归](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E5%8D%81%E5%AE%89%E6%94%B9%E5%90%8D%E5%A7%9C%E4%B9%98%E6%BE%9C%E5%9B%9E%E5%BD%92%23) `726.7K 🔥` `NEW`
1. [女子闪婚闪离起诉要千万房产的99%](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%97%AA%E5%A9%9A%E9%97%AA%E7%A6%BB%E8%B5%B7%E8%AF%89%E8%A6%81%E5%8D%83%E4%B8%87%E6%88%BF%E4%BA%A7%E7%9A%8499%25%23) `492.2K 🔥` `NEW`
1. [跟孙颖莎组个安心局](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E5%AD%99%E9%A2%96%E8%8E%8E%E7%BB%84%E4%B8%AA%E5%AE%89%E5%BF%83%E5%B1%80%23) `473.9K 🔥` `NEW`
1. [黄灿灿瘦了好多](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E7%98%A6%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `468.4K 🔥` `NEW`
1. [小米新耳机将采用全新形态设计](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0%E8%80%B3%E6%9C%BA%E5%B0%86%E9%87%87%E7%94%A8%E5%85%A8%E6%96%B0%E5%BD%A2%E6%80%81%E8%AE%BE%E8%AE%A1%23) `351.5K 🔥` `NEW`
1. [Chovy遭削弱](https://s.weibo.com/weibo?q=%23Chovy%E9%81%AD%E5%89%8A%E5%BC%B1%23) `350.1K 🔥` `NEW`
1. [张元英雷霆平底鞋](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E9%9B%B7%E9%9C%86%E5%B9%B3%E5%BA%95%E9%9E%8B%23) `349.4K 🔥` `NEW`
1. [夏天了迪丽热巴还在穿毛衣](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A4%A9%E4%BA%86%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%98%E5%9C%A8%E7%A9%BF%E6%AF%9B%E8%A1%A3%23) `347.4K 🔥` `NEW`
1. [孙颖莎祝福孙铭阳](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%A5%9D%E7%A6%8F%E5%AD%99%E9%93%AD%E9%98%B3%23) `344.7K 🔥` `NEW`
1. [女孩穿吊带等地铁遇暖心提醒 (Girl wears suspenders and waits for subway to receive heart-warming reminder)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%A9%BF%E5%90%8A%E5%B8%A6%E7%AD%89%E5%9C%B0%E9%93%81%E9%81%87%E6%9A%96%E5%BF%83%E6%8F%90%E9%86%92%23) `343.9K 🔥` `NEW`
1. [北京机场高速附近挂起中美国旗](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9C%BA%E5%9C%BA%E9%AB%98%E9%80%9F%E9%99%84%E8%BF%91%E6%8C%82%E8%B5%B7%E4%B8%AD%E7%BE%8E%E5%9B%BD%E6%97%97%23) `342.8K 🔥` `NEW`
1. [突然弹出一堆券我人傻了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%BC%B9%E5%87%BA%E4%B8%80%E5%A0%86%E5%88%B8%E6%88%91%E4%BA%BA%E5%82%BB%E4%BA%86%23) `341.3K 🔥` `NEW`
1. [曝知名男歌手音乐节假唱](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%9F%A5%E5%90%8D%E7%94%B7%E6%AD%8C%E6%89%8B%E9%9F%B3%E4%B9%90%E8%8A%82%E5%81%87%E5%94%B1%23) `339.1K 🔥` `NEW`
1. [网传柳岩疑似怀孕](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%9F%B3%E5%B2%A9%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%23) `337.7K 🔥` `NEW`
1. [曝何炅要开演唱会](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%95%E7%82%85%E8%A6%81%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `335.8K 🔥` `NEW`
1. [鹿晗发箍挂脖](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8F%91%E7%AE%8D%E6%8C%82%E8%84%96%23) `334.8K 🔥` `NEW`
1. [瞿颖王俊凯中餐厅同框](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%AD%E9%A4%90%E5%8E%85%E5%90%8C%E6%A1%86%23) `329.1K 🔥` `NEW`
1. [自助餐没吃几口就饱的元凶](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%8A%A9%E9%A4%90%E6%B2%A1%E5%90%83%E5%87%A0%E5%8F%A3%E5%B0%B1%E9%A5%B1%E7%9A%84%E5%85%83%E5%87%B6%23) `306.1K 🔥` `NEW`
1. [精神病院男子吃馒头噎死保险拒赔](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%A5%9E%E7%97%85%E9%99%A2%E7%94%B7%E5%AD%90%E5%90%83%E9%A6%92%E5%A4%B4%E5%99%8E%E6%AD%BB%E4%BF%9D%E9%99%A9%E6%8B%92%E8%B5%94%23) `291.6K 🔥` `NEW`
1. [阳台突然出现了六个小狗头 (Six puppy heads suddenly appeared on the balcony)](https://s.weibo.com/weibo?q=%23%E9%98%B3%E5%8F%B0%E7%AA%81%E7%84%B6%E5%87%BA%E7%8E%B0%E4%BA%86%E5%85%AD%E4%B8%AA%E5%B0%8F%E7%8B%97%E5%A4%B4%23) `192.4K 🔥` `NEW`
1. [刘晓庆自曝不生孩子原因](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%86%E8%87%AA%E6%9B%9D%E4%B8%8D%E7%94%9F%E5%AD%A9%E5%AD%90%E5%8E%9F%E5%9B%A0%23) `191.5K 🔥` `NEW`
1. [原来防晒服才是穿搭届的万金油](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%98%B2%E6%99%92%E6%9C%8D%E6%89%8D%E6%98%AF%E7%A9%BF%E6%90%AD%E5%B1%8A%E7%9A%84%E4%B8%87%E9%87%91%E6%B2%B9%23) `181.1K 🔥` `NEW`
1. [日本单身妈妈福利院勒死两女儿](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8D%95%E8%BA%AB%E5%A6%88%E5%A6%88%E7%A6%8F%E5%88%A9%E9%99%A2%E5%8B%92%E6%AD%BB%E4%B8%A4%E5%A5%B3%E5%84%BF%23) `178.2K 🔥` `NEW`
1. [谁还没到李佳琦直播间抢小样](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%BF%98%E6%B2%A1%E5%88%B0%E6%9D%8E%E4%BD%B3%E7%90%A6%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8A%A2%E5%B0%8F%E6%A0%B7%23) `175.2K 🔥` `NEW`
1. [留学生在悉尼麦当劳被流浪汉掰断手](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%AD%A6%E7%94%9F%E5%9C%A8%E6%82%89%E5%B0%BC%E9%BA%A6%E5%BD%93%E5%8A%B3%E8%A2%AB%E6%B5%81%E6%B5%AA%E6%B1%89%E6%8E%B0%E6%96%AD%E6%89%8B%23) `172.8K 🔥` `NEW`
1. [雨霖铃](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E9%9C%96%E9%93%83%23) `163.2K 🔥` `NEW`
1. [直观的感受到了搭配的重要性](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E8%A7%82%E7%9A%84%E6%84%9F%E5%8F%97%E5%88%B0%E4%BA%86%E6%90%AD%E9%85%8D%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23) `162.3K 🔥` `NEW`
1. [原来真有国际请病假日](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E6%9C%89%E5%9B%BD%E9%99%85%E8%AF%B7%E7%97%85%E5%81%87%E6%97%A5%23) `161.7K 🔥` `NEW`
1. [向太回应向佐郭碧婷分居两地](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E5%9B%9E%E5%BA%94%E5%90%91%E4%BD%90%E9%83%AD%E7%A2%A7%E5%A9%B7%E5%88%86%E5%B1%85%E4%B8%A4%E5%9C%B0%23) `161.6K 🔥` `NEW`
1. [孟子坤胜诉 (Meng Zikun wins the lawsuit)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E5%9D%A4%E8%83%9C%E8%AF%89%23) `156.5K 🔥` `NEW`
1. [小米发布自动驾驶模型](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E6%A8%A1%E5%9E%8B%23) `147.8K 🔥` `NEW`
1. [欢迎特朗普访问中国](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E9%97%AE%E4%B8%AD%E5%9B%BD%23) `2.1M 🔥` `+408%`
1. [封神2特效 不如AI](https://s.weibo.com/weibo?q=%23%E5%B0%81%E7%A5%9E2%E7%89%B9%E6%95%88%20%E4%B8%8D%E5%A6%82AI%23) `658.6K 🔥` `+243%`
1. [于正回应白鹿争议 (Yu Zheng responds to the Bailu controversy)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E7%99%BD%E9%B9%BF%E4%BA%89%E8%AE%AE%23) `345.6K 🔥`
1. [用不用心谈恋爱真的很明显](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%B8%8D%E7%94%A8%E5%BF%83%E8%B0%88%E6%81%8B%E7%88%B1%E7%9C%9F%E7%9A%84%E5%BE%88%E6%98%8E%E6%98%BE%23) `338.7K 🔥`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `335.7K 🔥`
1. [北方多地迎今年首个高温日](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%96%B9%E5%A4%9A%E5%9C%B0%E8%BF%8E%E4%BB%8A%E5%B9%B4%E9%A6%96%E4%B8%AA%E9%AB%98%E6%B8%A9%E6%97%A5%23) `768.4K 🔥` `-29%`
1. [歌手2026 舞美](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%20%E8%88%9E%E7%BE%8E%23) `350.9K 🔥` `-31%`
1. [特朗普访华 (Trump's visit to China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%23) `346.4K 🔥` `-75%`
1. [吴京 什么李心洁谁](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E4%BB%80%E4%B9%88%E6%9D%8E%E5%BF%83%E6%B4%81%E8%B0%81%23) `291.6K 🔥` `-31%`
1. [特朗普回应访华团高管名单](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%9E%E5%BA%94%E8%AE%BF%E5%8D%8E%E5%9B%A2%E9%AB%98%E7%AE%A1%E5%90%8D%E5%8D%95%23) `290.6K 🔥` `-31%`
1. [豆包收费 大模型将告别免费时代 (Doubao charges, large models will bid farewell to the free era)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%94%B6%E8%B4%B9%20%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%B0%86%E5%91%8A%E5%88%AB%E5%85%8D%E8%B4%B9%E6%97%B6%E4%BB%A3%23) `289.1K 🔥` `-43%`
1. [白鹿已成立独资工作室](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B7%B2%E6%88%90%E7%AB%8B%E7%8B%AC%E8%B5%84%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `213.7K 🔥` `-49%`
1. [左航cos孙权](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AAcos%E5%AD%99%E6%9D%83%23) `207.8K 🔥` `-50%`
1. [开花店真的要有审美](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%8A%B1%E5%BA%97%E7%9C%9F%E7%9A%84%E8%A6%81%E6%9C%89%E5%AE%A1%E7%BE%8E%23) `183.0K 🔥` `-80%`
1. [公瑾爆蛋](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%91%BE%E7%88%86%E8%9B%8B%23) `171.7K 🔥` `-61%`
1. [孙怡捂鼻子下班 (Sun Yi covers her nose and gets off work)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E6%8D%82%E9%BC%BB%E5%AD%90%E4%B8%8B%E7%8F%AD%23) `164.5K 🔥` `-61%`
1. [金曲奖入围名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9B%B2%E5%A5%96%E5%85%A5%E5%9B%B4%E5%90%8D%E5%8D%95%23) `157.5K 🔥` `-66%`
1. [十年前的裤子vs现在的裤子](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E8%A3%A4%E5%AD%90vs%E7%8E%B0%E5%9C%A8%E7%9A%84%E8%A3%A4%E5%AD%90%23) `156.7K 🔥` `-62%`

Updated at 2026-05-13 18:41:54

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
