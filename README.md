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

1. [四六级 (Level 4 and Level 6)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%23) `2.1M 🔥` `NEW`
1. [青春华章两弹一星铸丰碑](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%E4%B8%A4%E5%BC%B9%E4%B8%80%E6%98%9F%E9%93%B8%E4%B8%B0%E7%A2%91%23) `1.7M 🔥` `NEW`
1. [凡人修仙传](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `1.2M 🔥` `NEW`
1. [美国4比1巴拉圭](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD4%E6%AF%941%E5%B7%B4%E6%8B%89%E5%9C%AD%23) `901.0K 🔥` `NEW`
1. [2026重庆车展](https://s.weibo.com/weibo?q=%232026%E9%87%8D%E5%BA%86%E8%BD%A6%E5%B1%95%23) `900.4K 🔥` `NEW`
1. [上海通报男幼师溺亡](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%80%9A%E6%8A%A5%E7%94%B7%E5%B9%BC%E5%B8%88%E6%BA%BA%E4%BA%A1%23) `899.6K 🔥` `NEW`
1. [何炅你不喜欢可以不说](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E4%BD%A0%E4%B8%8D%E5%96%9C%E6%AC%A2%E5%8F%AF%E4%BB%A5%E4%B8%8D%E8%AF%B4%23) `888.8K 🔥` `NEW`
1. [雷军回应装600斤车厘子被指违规](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E8%A3%85600%E6%96%A4%E8%BD%A6%E5%8E%98%E5%AD%90%E8%A2%AB%E6%8C%87%E8%BF%9D%E8%A7%84%23) `763.1K 🔥` `NEW`
1. [王安宇说当年很勉强才考上中传](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%AF%B4%E5%BD%93%E5%B9%B4%E5%BE%88%E5%8B%89%E5%BC%BA%E6%89%8D%E8%80%83%E4%B8%8A%E4%B8%AD%E4%BC%A0%23) `592.1K 🔥` `NEW`
1. [韩国网友批Lisa世界杯开幕式歌曲低俗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%89%B9Lisa%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E5%B9%95%E5%BC%8F%E6%AD%8C%E6%9B%B2%E4%BD%8E%E4%BF%97%23) `591.7K 🔥` `NEW`
1. [原来瘦了真的会变聪明 (It turns out that losing weight really makes you smarter)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%98%A6%E4%BA%86%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%8F%98%E8%81%AA%E6%98%8E%23) `587.4K 🔥` `NEW`
1. [鹿晗素人时期就是爱豆完成体了](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%B4%A0%E4%BA%BA%E6%97%B6%E6%9C%9F%E5%B0%B1%E6%98%AF%E7%88%B1%E8%B1%86%E5%AE%8C%E6%88%90%E4%BD%93%E4%BA%86%23) `464.0K 🔥` `NEW`
1. [王俊凯工作室老板知道这号吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%80%81%E6%9D%BF%E7%9F%A5%E9%81%93%E8%BF%99%E5%8F%B7%E5%90%97%23) `390.7K 🔥` `NEW`
1. [Lisa世界杯开幕式热舞](https://s.weibo.com/weibo?q=%23Lisa%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E5%B9%95%E5%BC%8F%E7%83%AD%E8%88%9E%23) `386.6K 🔥` `NEW`
1. [巴拉圭乌龙球](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E4%B9%8C%E9%BE%99%E7%90%83%23) `333.0K 🔥` `NEW`
1. [胡彦斌疑似黑脸](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E7%96%91%E4%BC%BC%E9%BB%91%E8%84%B8%23) `327.1K 🔥` `NEW`
1. [黄金上涨原因](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%8A%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `214.4K 🔥` `NEW`
1. [小米徐洁云回应车厘子事件](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%BE%90%E6%B4%81%E4%BA%91%E5%9B%9E%E5%BA%94%E8%BD%A6%E5%8E%98%E5%AD%90%E4%BA%8B%E4%BB%B6%23) `214.2K 🔥` `NEW`
1. [17岁的校草鹿晗](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E7%9A%84%E6%A0%A1%E8%8D%89%E9%B9%BF%E6%99%97%23) `214.0K 🔥` `NEW`
1. [张若昀唐艺昕赶不上飞机了还在饭撒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%94%90%E8%89%BA%E6%98%95%E8%B5%B6%E4%B8%8D%E4%B8%8A%E9%A3%9E%E6%9C%BA%E4%BA%86%E8%BF%98%E5%9C%A8%E9%A5%AD%E6%92%92%23) `213.9K 🔥` `NEW`
1. [张百乔小雪婚变传闻时间线 (Timeline of rumors about Zhang Baiqiao Xiaoxue’s marriage change)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%99%BE%E4%B9%94%E5%B0%8F%E9%9B%AA%E5%A9%9A%E5%8F%98%E4%BC%A0%E9%97%BB%E6%97%B6%E9%97%B4%E7%BA%BF%23) `213.4K 🔥` `NEW`
1. [傅诗淇可以跟成毅平番了](https://s.weibo.com/weibo?q=%23%E5%82%85%E8%AF%97%E6%B7%87%E5%8F%AF%E4%BB%A5%E8%B7%9F%E6%88%90%E6%AF%85%E5%B9%B3%E7%95%AA%E4%BA%86%23) `213.3K 🔥` `NEW`
1. [余承东坦言自己留的算力很有限](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%9D%A6%E8%A8%80%E8%87%AA%E5%B7%B1%E7%95%99%E7%9A%84%E7%AE%97%E5%8A%9B%E5%BE%88%E6%9C%89%E9%99%90%23) `213.0K 🔥` `NEW`
1. [侯明昊真就自己去面试上了](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E7%9C%9F%E5%B0%B1%E8%87%AA%E5%B7%B1%E5%8E%BB%E9%9D%A2%E8%AF%95%E4%B8%8A%E4%BA%86%23) `212.9K 🔥` `NEW`
1. [男子同时交往7个白富美骗了数百万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%90%8C%E6%97%B6%E4%BA%A4%E5%BE%807%E4%B8%AA%E7%99%BD%E5%AF%8C%E7%BE%8E%E9%AA%97%E4%BA%86%E6%95%B0%E7%99%BE%E4%B8%87%23) `212.5K 🔥` `NEW`
1. [伊朗美国已就协议文本达成一致](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%BE%8E%E5%9B%BD%E5%B7%B2%E5%B0%B1%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC%E8%BE%BE%E6%88%90%E4%B8%80%E8%87%B4%23) `212.4K 🔥` `NEW`
1. [张凌赫将参加海峡论坛](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B0%86%E5%8F%82%E5%8A%A0%E6%B5%B7%E5%B3%A1%E8%AE%BA%E5%9D%9B%23) `212.4K 🔥` `NEW`
1. [原来明星私下都互叫对方本名](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E6%98%9F%E7%A7%81%E4%B8%8B%E9%83%BD%E4%BA%92%E5%8F%AB%E5%AF%B9%E6%96%B9%E6%9C%AC%E5%90%8D%23) `212.3K 🔥` `NEW`
1. [南部档案破万](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E7%A0%B4%E4%B8%87%23) `212.2K 🔥` `NEW`
1. [美国队杀疯了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%98%9F%E6%9D%80%E7%96%AF%E4%BA%86%23) `212.2K 🔥` `NEW`
1. [一个月用500斤药水进行腹透的生活 (A life of using 500 pounds of medicine for abdominal dialysis in one month)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%9C%88%E7%94%A8500%E6%96%A4%E8%8D%AF%E6%B0%B4%E8%BF%9B%E8%A1%8C%E8%85%B9%E9%80%8F%E7%9A%84%E7%94%9F%E6%B4%BB%23) `212.1K 🔥` `NEW`
1. [C罗耳钉吸睛](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%80%B3%E9%92%89%E5%90%B8%E7%9D%9B%23) `212.1K 🔥` `NEW`
1. [2026世界杯首个乌龙球](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E4%B8%AA%E4%B9%8C%E9%BE%99%E7%90%83%23) `205.0K 🔥` `NEW`
1. [翘楚辱追](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E8%BE%B1%E8%BF%BD%23) `198.1K 🔥` `NEW`
1. [迪丽热巴品牌宠儿](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%93%81%E7%89%8C%E5%AE%A0%E5%84%BF%23) `196.3K 🔥` `NEW`
1. [英格兰队世界杯物资被盗光了](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%9F%E4%B8%96%E7%95%8C%E6%9D%AF%E7%89%A9%E8%B5%84%E8%A2%AB%E7%9B%97%E5%85%89%E4%BA%86%23) `195.6K 🔥` `NEW`
1. [梁朝伟说被要求着装隆重辛芷蕾笑了](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E8%AF%B4%E8%A2%AB%E8%A6%81%E6%B1%82%E7%9D%80%E8%A3%85%E9%9A%86%E9%87%8D%E8%BE%9B%E8%8A%B7%E8%95%BE%E7%AC%91%E4%BA%86%23) `182.4K 🔥` `NEW`
1. [小金毛誓死追随少主](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%87%91%E6%AF%9B%E8%AA%93%E6%AD%BB%E8%BF%BD%E9%9A%8F%E5%B0%91%E4%B8%BB%23) `177.7K 🔥` `NEW`
1. [情侣入住智能民宿凌晨被投不雅视频](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%85%A5%E4%BD%8F%E6%99%BA%E8%83%BD%E6%B0%91%E5%AE%BF%E5%87%8C%E6%99%A8%E8%A2%AB%E6%8A%95%E4%B8%8D%E9%9B%85%E8%A7%86%E9%A2%91%23) `168.7K 🔥` `NEW`
1. [郑秀妍疑似回应被臭到了](https://s.weibo.com/weibo?q=%23%E9%83%91%E7%A7%80%E5%A6%8D%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%87%AD%E5%88%B0%E4%BA%86%23) `160.8K 🔥` `NEW`
1. [国乒混双全军覆没 (National Table Tennis Mixed Doubles were wiped out)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E6%B7%B7%E5%8F%8C%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `155.9K 🔥` `NEW`
1. [张百乔小雪感情经历](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%99%BE%E4%B9%94%E5%B0%8F%E9%9B%AA%E6%84%9F%E6%83%85%E7%BB%8F%E5%8E%86%23) `154.9K 🔥` `NEW`
1. [豆包AI不知SpaceX上市](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85AI%E4%B8%8D%E7%9F%A5SpaceX%E4%B8%8A%E5%B8%82%23) `152.3K 🔥` `NEW`
1. [加拿大开幕式 翻车](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%BC%80%E5%B9%95%E5%BC%8F%20%E7%BF%BB%E8%BD%A6%23) `6.3M 🔥` `+164%`
1. [四级 (Level 4)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E7%BA%A7%23) `1.5M 🔥` `+211%`
1. [美国世界杯开幕式](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E5%B9%95%E5%BC%8F%23) `480.1K 🔥`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `213.7K 🔥`
1. [张碧晨淘汰 (Zhang Bichen eliminated)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E6%B7%98%E6%B1%B0%23) `212.5K 🔥` `-54%`
1. [白鹿母校发文 (Bailu alma mater issued a message)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%AF%8D%E6%A0%A1%E5%8F%91%E6%96%87%23) `203.0K 🔥` `-22%`
1. [加拿大1比1波黑](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A71%E6%AF%941%E6%B3%A2%E9%BB%91%23) `161.4K 🔥` `-83%`
1. [日本快要啥都缺了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BF%AB%E8%A6%81%E5%95%A5%E9%83%BD%E7%BC%BA%E4%BA%86%23) `154.4K 🔥` `-40%`

Updated at 2026-06-13 11:38:27

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
