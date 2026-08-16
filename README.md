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

1. [王曼昱回应4比0蒯曼 (Wang Manyu responded 4-0 Kuaiman)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%9B%9E%E5%BA%944%E6%AF%940%E8%92%AF%E6%9B%BC%23) `435.5K 🔥` `NEW`
1. [狼队对战AG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98AG%23) `424.5K 🔥` `NEW`
1. [Jennie因服装问题道歉](https://s.weibo.com/weibo?q=%23Jennie%E5%9B%A0%E6%9C%8D%E8%A3%85%E9%97%AE%E9%A2%98%E9%81%93%E6%AD%89%23) `420.9K 🔥` `NEW`
1. [传销头目开书院暴力管教被刑拘](https://s.weibo.com/weibo?q=%23%E4%BC%A0%E9%94%80%E5%A4%B4%E7%9B%AE%E5%BC%80%E4%B9%A6%E9%99%A2%E6%9A%B4%E5%8A%9B%E7%AE%A1%E6%95%99%E8%A2%AB%E5%88%91%E6%8B%98%23) `408.4K 🔥` `NEW`
1. [王橹杰摔倒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%91%94%E5%80%92%23) `400.2K 🔥` `NEW`
1. [谷爱凌最后一个吃到自己的瓜](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%90%83%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E7%93%9C%23) `397.0K 🔥` `NEW`
1. [艾米进组几天瘦了一大圈](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E8%BF%9B%E7%BB%84%E5%87%A0%E5%A4%A9%E7%98%A6%E4%BA%86%E4%B8%80%E5%A4%A7%E5%9C%88%23) `392.7K 🔥` `NEW`
1. [米卡音色流氓](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8D%A1%E9%9F%B3%E8%89%B2%E6%B5%81%E6%B0%93%23) `371.8K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `346.0K 🔥` `NEW`
1. [准大学生暑假送外卖3天倒亏700多](https://s.weibo.com/weibo?q=%23%E5%87%86%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%9A%91%E5%81%87%E9%80%81%E5%A4%96%E5%8D%963%E5%A4%A9%E5%80%92%E4%BA%8F700%E5%A4%9A%23) `333.8K 🔥` `NEW`
1. [慢慢喜欢你 (Slowly falling in love with you)](https://s.weibo.com/weibo?q=%23%E6%85%A2%E6%85%A2%E5%96%9C%E6%AC%A2%E4%BD%A0%23) `333.3K 🔥` `NEW`
1. [唐九洲米卡 青春有你pk创造营](https://s.weibo.com/weibo?q=%23%E5%94%90%E4%B9%9D%E6%B4%B2%E7%B1%B3%E5%8D%A1%20%E9%9D%92%E6%98%A5%E6%9C%89%E4%BD%A0pk%E5%88%9B%E9%80%A0%E8%90%A5%23) `333.1K 🔥` `NEW`
1. [WBG 厂长BP](https://s.weibo.com/weibo?q=%23WBG%20%E5%8E%82%E9%95%BFBP%23) `300.0K 🔥` `NEW`
1. [单依纯二封内地最佳女歌手](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E4%BA%8C%E5%B0%81%E5%86%85%E5%9C%B0%E6%9C%80%E4%BD%B3%E5%A5%B3%E6%AD%8C%E6%89%8B%23) `295.7K 🔥` `NEW`
1. [7名县委常委在土坯房上班](https://s.weibo.com/weibo?q=%237%E5%90%8D%E5%8E%BF%E5%A7%94%E5%B8%B8%E5%A7%94%E5%9C%A8%E5%9C%9F%E5%9D%AF%E6%88%BF%E4%B8%8A%E7%8F%AD%23) `286.6K 🔥` `NEW`
1. [陈奕恒摔倒](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E6%91%94%E5%80%92%23) `522.8K 🔥` `+58%`
1. [王艺迪4比2复仇张本美和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AA4%E6%AF%942%E5%A4%8D%E4%BB%87%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `482.2K 🔥` `+46%`
1. [WBG对战IG](https://s.weibo.com/weibo?q=%23WBG%E5%AF%B9%E6%88%98IG%23) `435.5K 🔥` `+73%`
1. [沈佳润还是藏不住事的年纪](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E8%BF%98%E6%98%AF%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%8B%E7%9A%84%E5%B9%B4%E7%BA%AA%23) `418.7K 🔥` `+34%`
1. [鞠婧祎方告黑进度更新](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%96%B9%E5%91%8A%E9%BB%91%E8%BF%9B%E5%BA%A6%E6%9B%B4%E6%96%B0%23) `415.3K 🔥` `+27%`
1. [网红小家电集体吃灰了 (Internet celebrity small home appliances are collectively in ashes)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%8F%E5%AE%B6%E7%94%B5%E9%9B%86%E4%BD%93%E5%90%83%E7%81%B0%E4%BA%86%23) `413.0K 🔥` `+24%`
1. [美国女子怀孕八个月却每天吸食芬太尼 (American woman smokes fentanyl every day, eight months pregnant)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E5%85%AB%E4%B8%AA%E6%9C%88%E5%8D%B4%E6%AF%8F%E5%A4%A9%E5%90%B8%E9%A3%9F%E8%8A%AC%E5%A4%AA%E5%B0%BC%23) `408.6K 🔥` `+22%`
1. [苹果阿里合作新进展](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E9%98%BF%E9%87%8C%E5%90%88%E4%BD%9C%E6%96%B0%E8%BF%9B%E5%B1%95%23) `391.6K 🔥` `+53%`
1. [朱镕基同志遗体18日火化 (Comrade Zhu Rongji’s body was cremated on the 18th)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%9318%E6%97%A5%E7%81%AB%E5%8C%96%23) `1.0M 🔥`
1. [王橹杰 上春山](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E4%B8%8A%E6%98%A5%E5%B1%B1%23) `430.9K 🔥`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `394.4K 🔥`
1. [段永平1300亿持仓曝光](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E6%B0%B8%E5%B9%B31300%E4%BA%BF%E6%8C%81%E4%BB%93%E6%9B%9D%E5%85%89%23) `394.1K 🔥`
1. [贺峻霖给严浩翔照片加了美颜 (He Junlin added beauty to Yan Haoxiang's photos)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%BB%99%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%85%A7%E7%89%87%E5%8A%A0%E4%BA%86%E7%BE%8E%E9%A2%9C%23) `393.1K 🔥`
1. [曝谷爱凌LV三公子恋情 (Gu Ailing’s love affair with LV’s third son revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B0%B7%E7%88%B1%E5%87%8CLV%E4%B8%89%E5%85%AC%E5%AD%90%E6%81%8B%E6%83%85%23) `392.3K 🔥`
1. [陈奕恒陈思罕Teeth](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E9%99%88%E6%80%9D%E7%BD%95Teeth%23) `390.7K 🔥`
1. [披荆斩棘直播](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `390.0K 🔥`
1. [什么东西成年了才意识到很贵 (What do you need to realize as an adult that something is expensive?)](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E4%B8%9C%E8%A5%BF%E6%88%90%E5%B9%B4%E4%BA%86%E6%89%8D%E6%84%8F%E8%AF%86%E5%88%B0%E5%BE%88%E8%B4%B5%23) `389.7K 🔥`
1. [现在的小学生都进化成这样了吗 (Have all primary school students today evolved like this?)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%B0%8F%E5%AD%A6%E7%94%9F%E9%83%BD%E8%BF%9B%E5%8C%96%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `387.0K 🔥`
1. [鹿晗天资是很残忍的东西](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%A4%A9%E8%B5%84%E6%98%AF%E5%BE%88%E6%AE%8B%E5%BF%8D%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `375.6K 🔥`
1. [韩网友点评新疆伊犁草原](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E5%8F%8B%E7%82%B9%E8%AF%84%E6%96%B0%E7%96%86%E4%BC%8A%E7%8A%81%E8%8D%89%E5%8E%9F%23) `314.4K 🔥`
1. [张彬彬台风好帅](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E5%8F%B0%E9%A3%8E%E5%A5%BD%E5%B8%85%23) `310.4K 🔥`
1. [虞书欣穿戏服聚会 (Yu Shuxin wears costume to party)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%A9%BF%E6%88%8F%E6%9C%8D%E8%81%9A%E4%BC%9A%23) `287.4K 🔥`
1. [以色列高官极端言论震惊国际社会](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%AB%98%E5%AE%98%E6%9E%81%E7%AB%AF%E8%A8%80%E8%AE%BA%E9%9C%87%E6%83%8A%E5%9B%BD%E9%99%85%E7%A4%BE%E4%BC%9A%23) `282.6K 🔥`
1. [马正阳声音侵权声明 (Ma Zhengyang’s voice infringement statement)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%AD%A3%E9%98%B3%E5%A3%B0%E9%9F%B3%E4%BE%B5%E6%9D%83%E5%A3%B0%E6%98%8E%23) `282.0K 🔥`
1. [市民打12345投诉月光太亮影响睡觉 (Citizens called 12345 to complain that the moonlight was too bright and affected their sleep.)](https://s.weibo.com/weibo?q=%23%E5%B8%82%E6%B0%91%E6%89%9312345%E6%8A%95%E8%AF%89%E6%9C%88%E5%85%89%E5%A4%AA%E4%BA%AE%E5%BD%B1%E5%93%8D%E7%9D%A1%E8%A7%89%23) `712.6K 🔥` `-26%`
1. [为中国航天点赞 (Thumbs up for China Aerospace)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E7%82%B9%E8%B5%9E%23) `562.2K 🔥` `-37%`
1. [魏子宸太有杰尼斯味了 (Wei Zichen looks so Johnny-like)](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A4%AA%E6%9C%89%E6%9D%B0%E5%B0%BC%E6%96%AF%E5%91%B3%E4%BA%86%23) `560.5K 🔥` `-36%`
1. [请3天假连休13天](https://s.weibo.com/weibo?q=%23%E8%AF%B73%E5%A4%A9%E5%81%87%E8%BF%9E%E4%BC%9113%E5%A4%A9%23) `537.1K 🔥` `-38%`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `447.9K 🔥` `-22%`
1. [谷爱凌否认恋情](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23) `434.4K 🔥` `-24%`
1. [时代少年团个人能力排名](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%B8%AA%E4%BA%BA%E8%83%BD%E5%8A%9B%E6%8E%92%E5%90%8D%23) `428.5K 🔥` `-23%`
1. [王曼昱vs蒯曼 (Wang Manyu vs. Kuai Man)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E8%92%AF%E6%9B%BC%23) `405.5K 🔥` `-43%`
1. [沈佳润白到发光 (Shen Jiarun is so white that she glows)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E7%99%BD%E5%88%B0%E5%8F%91%E5%85%89%23) `397.5K 🔥` `-53%`
1. [四代唱刺了](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E4%BB%A3%E5%94%B1%E5%88%BA%E4%BA%86%23) `344.8K 🔥` `-48%`
1. [王艺迪vs张本美和 (Wang Yidi vs. Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AAvs%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `304.9K 🔥` `-44%`

Updated at 2026-08-16 21:18:31

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
