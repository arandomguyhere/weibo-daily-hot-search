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

1. [教育部回应教师不敢管学生](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E6%95%99%E5%B8%88%E4%B8%8D%E6%95%A2%E7%AE%A1%E5%AD%A6%E7%94%9F%23) `1.1M 🔥` `NEW`
1. [路人根本没兴趣和耐心回看花少6](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E6%A0%B9%E6%9C%AC%E6%B2%A1%E5%85%B4%E8%B6%A3%E5%92%8C%E8%80%90%E5%BF%83%E5%9B%9E%E7%9C%8B%E8%8A%B1%E5%B0%916%23) `809.4K 🔥` `NEW`
1. [亚运会中国体育代表团成立现场图](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%B8%AD%E5%9B%BD%E4%BD%93%E8%82%B2%E4%BB%A3%E8%A1%A8%E5%9B%A2%E6%88%90%E7%AB%8B%E7%8E%B0%E5%9C%BA%E5%9B%BE%23) `620.7K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `566.8K 🔥` `NEW`
1. [特朗普 AI](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%20AI%23) `553.5K 🔥` `NEW`
1. [栾念盯着前男友照顾尚之桃](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E7%9B%AF%E7%9D%80%E5%89%8D%E7%94%B7%E5%8F%8B%E7%85%A7%E9%A1%BE%E5%B0%9A%E4%B9%8B%E6%A1%83%23) `480.2K 🔥` `NEW`
1. [孟子义红之品牌代言人](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%BA%A2%E4%B9%8B%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `477.5K 🔥` `NEW`
1. [邓为花少8情商](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E8%8A%B1%E5%B0%918%E6%83%85%E5%95%86%23) `426.6K 🔥` `NEW`
1. [中国女篮vs美国女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEvs%E7%BE%8E%E5%9B%BD%E5%A5%B3%E7%AF%AE%23) `425.3K 🔥` `NEW`
1. [吉隆泥石流遇难31人失联531人](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E9%81%87%E9%9A%BE31%E4%BA%BA%E5%A4%B1%E8%81%94531%E4%BA%BA%23) `350.8K 🔥` `NEW`
1. [披荆斩棘直播](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `346.9K 🔥` `NEW`
1. [莆田灾情求助](https://s.weibo.com/weibo?q=%23%E8%8E%86%E7%94%B0%E7%81%BE%E6%83%85%E6%B1%82%E5%8A%A9%23) `326.7K 🔥` `NEW`
1. [纪姿含北电落榜](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%A7%BF%E5%90%AB%E5%8C%97%E7%94%B5%E8%90%BD%E6%A6%9C%23) `289.6K 🔥` `NEW`
1. [DK晋级S16全球总决赛](https://s.weibo.com/weibo?q=%23DK%E6%99%8B%E7%BA%A7S16%E5%85%A8%E7%90%83%E6%80%BB%E5%86%B3%E8%B5%9B%23) `272.5K 🔥` `NEW`
1. [福建受灾严重](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E5%8F%97%E7%81%BE%E4%B8%A5%E9%87%8D%23) `272.4K 🔥` `NEW`
1. [非农](https://s.weibo.com/weibo?q=%23%E9%9D%9E%E5%86%9C%23) `271.9K 🔥` `NEW`
1. [沈佳润骨折](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E9%AA%A8%E6%8A%98%23) `271.6K 🔥` `NEW`
1. [莆田一村庄水位逼近二楼仍在涨](https://s.weibo.com/weibo?q=%23%E8%8E%86%E7%94%B0%E4%B8%80%E6%9D%91%E5%BA%84%E6%B0%B4%E4%BD%8D%E9%80%BC%E8%BF%91%E4%BA%8C%E6%A5%BC%E4%BB%8D%E5%9C%A8%E6%B6%A8%23) `271.1K 🔥` `NEW`
1. [出轨跟纸片人啥关系](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A8%E8%B7%9F%E7%BA%B8%E7%89%87%E4%BA%BA%E5%95%A5%E5%85%B3%E7%B3%BB%23) `270.7K 🔥` `NEW`
1. [将40岁的身体恢复到25岁的方法](https://s.weibo.com/weibo?q=%23%E5%B0%8640%E5%B2%81%E7%9A%84%E8%BA%AB%E4%BD%93%E6%81%A2%E5%A4%8D%E5%88%B025%E5%B2%81%E7%9A%84%E6%96%B9%E6%B3%95%23) `270.5K 🔥` `NEW`
1. [为什么现在这么流行耳夹式耳机](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E8%BF%99%E4%B9%88%E6%B5%81%E8%A1%8C%E8%80%B3%E5%A4%B9%E5%BC%8F%E8%80%B3%E6%9C%BA%23) `270.3K 🔥` `NEW`
1. [曹骏让节目组把训练镜头放出来](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E8%AE%A9%E8%8A%82%E7%9B%AE%E7%BB%84%E6%8A%8A%E8%AE%AD%E7%BB%83%E9%95%9C%E5%A4%B4%E6%94%BE%E5%87%BA%E6%9D%A5%23) `269.9K 🔥` `NEW`
1. [金希澈的爱猫希范去世](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%B8%8C%E6%BE%88%E7%9A%84%E7%88%B1%E7%8C%AB%E5%B8%8C%E8%8C%83%E5%8E%BB%E4%B8%96%23) `269.7K 🔥` `NEW`
1. [披哥二公淘汰一位](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E4%BA%8C%E5%85%AC%E6%B7%98%E6%B1%B0%E4%B8%80%E4%BD%8D%23) `269.3K 🔥` `NEW`
1. [莆田房屋倒塌老人求生](https://s.weibo.com/weibo?q=%23%E8%8E%86%E7%94%B0%E6%88%BF%E5%B1%8B%E5%80%92%E5%A1%8C%E8%80%81%E4%BA%BA%E6%B1%82%E7%94%9F%23) `269.0K 🔥` `NEW`
1. [这些居然都是关晓彤](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%B1%85%E7%84%B6%E9%83%BD%E6%98%AF%E5%85%B3%E6%99%93%E5%BD%A4%23) `268.6K 🔥` `NEW`
1. [多个强二线城市房价腰斩](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%B8%AA%E5%BC%BA%E4%BA%8C%E7%BA%BF%E5%9F%8E%E5%B8%82%E6%88%BF%E4%BB%B7%E8%85%B0%E6%96%A9%23) `268.5K 🔥` `NEW`
1. [莆田暴雨一辆SUV开上人行天桥](https://s.weibo.com/weibo?q=%23%E8%8E%86%E7%94%B0%E6%9A%B4%E9%9B%A8%E4%B8%80%E8%BE%86SUV%E5%BC%80%E4%B8%8A%E4%BA%BA%E8%A1%8C%E5%A4%A9%E6%A1%A5%23) `266.4K 🔥` `NEW`
1. [田曦薇无刘海半扎发造型](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%97%A0%E5%88%98%E6%B5%B7%E5%8D%8A%E6%89%8E%E5%8F%91%E9%80%A0%E5%9E%8B%23) `263.5K 🔥` `NEW`
1. [Jisoo陈都灵winter朴志效撞衫](https://s.weibo.com/weibo?q=%23Jisoo%E9%99%88%E9%83%BD%E7%81%B5winter%E6%9C%B4%E5%BF%97%E6%95%88%E6%92%9E%E8%A1%AB%23) `258.7K 🔥` `NEW`
1. [狼队对战JDG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98JDG%23) `254.3K 🔥` `NEW`
1. [吴君如眼神就没离开邓为](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%90%9B%E5%A6%82%E7%9C%BC%E7%A5%9E%E5%B0%B1%E6%B2%A1%E7%A6%BB%E5%BC%80%E9%82%93%E4%B8%BA%23) `253.8K 🔥` `NEW`
1. [5岁女童就医电子病历被标注刁蛮](https://s.weibo.com/weibo?q=%235%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%B0%B1%E5%8C%BB%E7%94%B5%E5%AD%90%E7%97%85%E5%8E%86%E8%A2%AB%E6%A0%87%E6%B3%A8%E5%88%81%E8%9B%AE%23) `253.7K 🔥` `NEW`
1. [王传君队长秀赢了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E9%98%9F%E9%95%BF%E7%A7%80%E8%B5%A2%E4%BA%86%23) `253.7K 🔥` `NEW`
1. [田曦薇没有刘海也超美](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%B2%A1%E6%9C%89%E5%88%98%E6%B5%B7%E4%B9%9F%E8%B6%85%E7%BE%8E%23) `253.2K 🔥` `NEW`
1. [28岁的人生应该是什么样呢](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E7%9A%84%E4%BA%BA%E7%94%9F%E5%BA%94%E8%AF%A5%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E5%91%A2%23) `241.6K 🔥` `NEW`
1. [重庆33岁抗癌博主唐豆豆不幸离世](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%8633%E5%B2%81%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E5%94%90%E8%B1%86%E8%B1%86%E4%B8%8D%E5%B9%B8%E7%A6%BB%E4%B8%96%23) `238.5K 🔥` `NEW`
1. [GPT6改变AI视频生产流程](https://s.weibo.com/weibo?q=%23GPT6%E6%94%B9%E5%8F%98AI%E8%A7%86%E9%A2%91%E7%94%9F%E4%BA%A7%E6%B5%81%E7%A8%8B%23) `235.9K 🔥` `NEW`
1. [福建内涝救援](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E5%86%85%E6%B6%9D%E6%95%91%E6%8F%B4%23) `230.0K 🔥` `NEW`
1. [关晓彤王子奇新剧撕破脸了](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%8E%8B%E5%AD%90%E5%A5%87%E6%96%B0%E5%89%A7%E6%92%95%E7%A0%B4%E8%84%B8%E4%BA%86%23) `222.5K 🔥` `NEW`
1. [披荆斩棘](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%23) `175.1K 🔥` `NEW`
1. [AL战胜LGD](https://s.weibo.com/weibo?q=%23AL%E6%88%98%E8%83%9CLGD%23) `153.5K 🔥` `NEW`
1. [郭涛儿子石头入学北电国际班](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%B6%9B%E5%84%BF%E5%AD%90%E7%9F%B3%E5%A4%B4%E5%85%A5%E5%AD%A6%E5%8C%97%E7%94%B5%E5%9B%BD%E9%99%85%E7%8F%AD%23) `153.4K 🔥` `NEW`
1. [日本东京满街劣质AI广告](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%9C%E4%BA%AC%E6%BB%A1%E8%A1%97%E5%8A%A3%E8%B4%A8AI%E5%B9%BF%E5%91%8A%23) `152.9K 🔥` `NEW`
1. [孙海洋回应人贩子将出狱担心家人安全](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%B7%E6%B4%8B%E5%9B%9E%E5%BA%94%E4%BA%BA%E8%B4%A9%E5%AD%90%E5%B0%86%E5%87%BA%E7%8B%B1%E6%8B%85%E5%BF%83%E5%AE%B6%E4%BA%BA%E5%AE%89%E5%85%A8%23) `151.9K 🔥` `NEW`
1. [宁静 谁说小爽坏了](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%20%E8%B0%81%E8%AF%B4%E5%B0%8F%E7%88%BD%E5%9D%8F%E4%BA%86%23) `335.9K 🔥`
1. [Lisa曝BLACKPINK时期曾隐藏恋爱](https://s.weibo.com/weibo?q=%23Lisa%E6%9B%9DBLACKPINK%E6%97%B6%E6%9C%9F%E6%9B%BE%E9%9A%90%E8%97%8F%E6%81%8B%E7%88%B1%23) `299.3K 🔥`
1. [井柏然直播澄清](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E7%9B%B4%E6%92%AD%E6%BE%84%E6%B8%85%23) `271.5K 🔥` `-55%`
1. [有人想靠复盘花少6洗白](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E6%83%B3%E9%9D%A0%E5%A4%8D%E7%9B%98%E8%8A%B1%E5%B0%916%E6%B4%97%E7%99%BD%23) `221.5K 🔥` `-61%`
1. [小姑娘第一天上幼儿园视频火了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A7%91%E5%A8%98%E7%AC%AC%E4%B8%80%E5%A4%A9%E4%B8%8A%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `175.9K 🔥` `-65%`
1. [鞠婧祎锁骨窝能装下珍珠项链](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E9%94%81%E9%AA%A8%E7%AA%9D%E8%83%BD%E8%A3%85%E4%B8%8B%E7%8F%8D%E7%8F%A0%E9%A1%B9%E9%93%BE%23) `166.6K 🔥` `-44%`

Updated at 2026-09-04 21:25:25

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
