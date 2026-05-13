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

1. [日本人全球对线破大防 (The Japanese broke the defense line around the world)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%85%A8%E7%90%83%E5%AF%B9%E7%BA%BF%E7%A0%B4%E5%A4%A7%E9%98%B2%23) `259.0K 🔥` `NEW`
1. [何炅演唱会没通知何炅](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E6%BC%94%E5%94%B1%E4%BC%9A%E6%B2%A1%E9%80%9A%E7%9F%A5%E4%BD%95%E7%82%85%23) `182.9K 🔥` `NEW`
1. [柳岩停更时间线](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B2%A9%E5%81%9C%E6%9B%B4%E6%97%B6%E9%97%B4%E7%BA%BF%23) `161.9K 🔥` `NEW`
1. [高敏感人群一生的主线任务](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%95%8F%E6%84%9F%E4%BA%BA%E7%BE%A4%E4%B8%80%E7%94%9F%E7%9A%84%E4%B8%BB%E7%BA%BF%E4%BB%BB%E5%8A%A1%23) `156.0K 🔥` `NEW`
1. [美股芯片股遭抛售潮](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E8%8A%AF%E7%89%87%E8%82%A1%E9%81%AD%E6%8A%9B%E5%94%AE%E6%BD%AE%23) `153.8K 🔥` `NEW`
1. [张本智和致敬马龙樊振东](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%87%B4%E6%95%AC%E9%A9%AC%E9%BE%99%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `111.3K 🔥` `NEW`
1. [豆包 我不敢动饶雪漫这四个字](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E6%88%91%E4%B8%8D%E6%95%A2%E5%8A%A8%E9%A5%B6%E9%9B%AA%E6%BC%AB%E8%BF%99%E5%9B%9B%E4%B8%AA%E5%AD%97%23) `106.6K 🔥` `NEW`
1. [夏天了迪丽热巴还在穿毛衣](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A4%A9%E4%BA%86%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%98%E5%9C%A8%E7%A9%BF%E6%AF%9B%E8%A1%A3%23) `106.5K 🔥` `NEW`
1. [保时捷称被抄袭致敬有些许无奈](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E7%A7%B0%E8%A2%AB%E6%8A%84%E8%A2%AD%E8%87%B4%E6%95%AC%E6%9C%89%E4%BA%9B%E8%AE%B8%E6%97%A0%E5%A5%88%23) `94.8K 🔥` `NEW`
1. [曼城3比0水晶宫](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8E3%E6%AF%940%E6%B0%B4%E6%99%B6%E5%AE%AB%23) `91.6K 🔥` `NEW`
1. [网红白冰复更被吐槽 (Internet celebrity Bai Bingfu is even more criticized)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%99%BD%E5%86%B0%E5%A4%8D%E6%9B%B4%E8%A2%AB%E5%90%90%E6%A7%BD%23) `83.6K 🔥` `NEW`
1. [许嵩官宣新专辑新巡演](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E5%AE%98%E5%AE%A3%E6%96%B0%E4%B8%93%E8%BE%91%E6%96%B0%E5%B7%A1%E6%BC%94%23) `83.0K 🔥` `NEW`
1. [九章四号研制成功](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E7%AB%A0%E5%9B%9B%E5%8F%B7%E7%A0%94%E5%88%B6%E6%88%90%E5%8A%9F%23) `80.1K 🔥` `NEW`
1. [曝百万网红为逃120元门票走山路](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BE%E4%B8%87%E7%BD%91%E7%BA%A2%E4%B8%BA%E9%80%83120%E5%85%83%E9%97%A8%E7%A5%A8%E8%B5%B0%E5%B1%B1%E8%B7%AF%23) `72.4K 🔥` `NEW`
1. [越南老太冲进网吧打孙子结果认错人](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E8%80%81%E5%A4%AA%E5%86%B2%E8%BF%9B%E7%BD%91%E5%90%A7%E6%89%93%E5%AD%99%E5%AD%90%E7%BB%93%E6%9E%9C%E8%AE%A4%E9%94%99%E4%BA%BA%23) `70.4K 🔥` `NEW`
1. [杨幂烫伤 演员和角色命运共振](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%83%AB%E4%BC%A4%20%E6%BC%94%E5%91%98%E5%92%8C%E8%A7%92%E8%89%B2%E5%91%BD%E8%BF%90%E5%85%B1%E6%8C%AF%23) `69.3K 🔥` `NEW`
1. [德牧以为自己还是只小狗勾](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%89%A7%E4%BB%A5%E4%B8%BA%E8%87%AA%E5%B7%B1%E8%BF%98%E6%98%AF%E5%8F%AA%E5%B0%8F%E7%8B%97%E5%8B%BE%23) `65.3K 🔥` `NEW`
1. [虞书欣工作室出图](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%87%BA%E5%9B%BE%23) `64.1K 🔥` `NEW`
1. [金晨 眼泪把面膜冲没了](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%20%E7%9C%BC%E6%B3%AA%E6%8A%8A%E9%9D%A2%E8%86%9C%E5%86%B2%E6%B2%A1%E4%BA%86%23) `59.4K 🔥` `NEW`
1. [特朗普抵京 (Trump arrives in Beijing)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E4%BA%AC%23) `1.3M 🔥` `+154%`
1. [日本爆发大规模反战抗议活动](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%88%86%E5%8F%91%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%8F%8D%E6%88%98%E6%8A%97%E8%AE%AE%E6%B4%BB%E5%8A%A8%23) `761.9K 🔥` `+392%`
1. [天舟十号货运飞船发射任务全回顾 (A full review of the Tianzhou-10 cargo spacecraft launch mission)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%88%9F%E5%8D%81%E5%8F%B7%E8%B4%A7%E8%BF%90%E9%A3%9E%E8%88%B9%E5%8F%91%E5%B0%84%E4%BB%BB%E5%8A%A1%E5%85%A8%E5%9B%9E%E9%A1%BE%23) `582.4K 🔥` `+94%`
1. [国际足联希望中国队能参与世界杯](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E5%B8%8C%E6%9C%9B%E4%B8%AD%E5%9B%BD%E9%98%9F%E8%83%BD%E5%8F%82%E4%B8%8E%E4%B8%96%E7%95%8C%E6%9D%AF%23) `318.6K 🔥` `+285%`
1. [马化腾回应AI掉队](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%8C%96%E8%85%BE%E5%9B%9E%E5%BA%94AI%E6%8E%89%E9%98%9F%23) `249.1K 🔥` `+139%`
1. [低智商犯罪](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `196.1K 🔥` `+137%`
1. [雨霖铃播了4集打了4集](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E9%9C%96%E9%93%83%E6%92%AD%E4%BA%864%E9%9B%86%E6%89%93%E4%BA%864%E9%9B%86%23) `194.2K 🔥` `+134%`
1. [多位国乒名将祝福刘炜珊](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E5%9B%BD%E4%B9%92%E5%90%8D%E5%B0%86%E7%A5%9D%E7%A6%8F%E5%88%98%E7%82%9C%E7%8F%8A%23) `191.2K 🔥` `+390%`
1. [华南理工被偷拍女生隐忍到下课 (A girl from South China University of Technology was secretly filmed and endured it until the end of get out of class)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%8D%97%E7%90%86%E5%B7%A5%E8%A2%AB%E5%81%B7%E6%8B%8D%E5%A5%B3%E7%94%9F%E9%9A%90%E5%BF%8D%E5%88%B0%E4%B8%8B%E8%AF%BE%23) `186.4K 🔥` `+125%`
1. [23岁研究生遭遇车祸心智如幼童](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E7%A0%94%E7%A9%B6%E7%94%9F%E9%81%AD%E9%81%87%E8%BD%A6%E7%A5%B8%E5%BF%83%E6%99%BA%E5%A6%82%E5%B9%BC%E7%AB%A5%23) `174.8K 🔥` `+111%`
1. [特朗普访问中国现场画面 (Live footage of Trump’s visit to China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E9%97%AE%E4%B8%AD%E5%9B%BD%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `173.7K 🔥` `+110%`
1. [摸腿事件脱口秀女演员一年还没走出来](https://s.weibo.com/weibo?q=%23%E6%91%B8%E8%85%BF%E4%BA%8B%E4%BB%B6%E8%84%B1%E5%8F%A3%E7%A7%80%E5%A5%B3%E6%BC%94%E5%91%98%E4%B8%80%E5%B9%B4%E8%BF%98%E6%B2%A1%E8%B5%B0%E5%87%BA%E6%9D%A5%23) `169.3K 🔥` `+105%`
1. [曝某古装剧组恶意炒cp](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E5%8F%A4%E8%A3%85%E5%89%A7%E7%BB%84%E6%81%B6%E6%84%8F%E7%82%92cp%23) `157.4K 🔥` `+90%`
1. [67岁产女妈妈现已卧床](https://s.weibo.com/weibo?q=%2367%E5%B2%81%E4%BA%A7%E5%A5%B3%E5%A6%88%E5%A6%88%E7%8E%B0%E5%B7%B2%E5%8D%A7%E5%BA%8A%23) `156.7K 🔥` `+90%`
1. [小米挖孔机盖案法院认定存夸大宣传 (Xiaomi hole digging machine cover case, court finds exaggerated propaganda)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%8C%96%E5%AD%94%E6%9C%BA%E7%9B%96%E6%A1%88%E6%B3%95%E9%99%A2%E8%AE%A4%E5%AE%9A%E5%AD%98%E5%A4%B8%E5%A4%A7%E5%AE%A3%E4%BC%A0%23) `155.9K 🔥` `+276%`
1. [老人砍绊脚绳不料宝宝坐到刀上 (The old man cut the stumbling rope, but the baby sat on the knife)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%A0%8D%E7%BB%8A%E8%84%9A%E7%BB%B3%E4%B8%8D%E6%96%99%E5%AE%9D%E5%AE%9D%E5%9D%90%E5%88%B0%E5%88%80%E4%B8%8A%23) `155.3K 🔥` `+121%`
1. [檀健次车裂戏 (Tan Jian's car cracking scene)](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E8%BD%A6%E8%A3%82%E6%88%8F%23) `154.1K 🔥` `+103%`
1. [男子等电梯里看到mini版自己](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%AD%89%E7%94%B5%E6%A2%AF%E9%87%8C%E7%9C%8B%E5%88%B0mini%E7%89%88%E8%87%AA%E5%B7%B1%23) `150.9K 🔥` `+82%`
1. [随特朗普访华的商界代表有谁 (Who are the business representatives who accompanied Trump on his visit to China?)](https://s.weibo.com/weibo?q=%23%E9%9A%8F%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E7%9A%84%E5%95%86%E7%95%8C%E4%BB%A3%E8%A1%A8%E6%9C%89%E8%B0%81%23) `149.0K 🔥` `+147%`
1. [月薪1.6万放羊已有两对夫妻试岗](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA1.6%E4%B8%87%E6%94%BE%E7%BE%8A%E5%B7%B2%E6%9C%89%E4%B8%A4%E5%AF%B9%E5%A4%AB%E5%A6%BB%E8%AF%95%E5%B2%97%23) `142.8K 🔥` `+124%`
1. [雨霖铃 (Yu Linling)](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E9%9C%96%E9%93%83%23) `118.1K 🔥` `+35%`
1. [中国人疯狂追求奶茶面包超进化 (Chinese people are crazy about the super evolution of milk tea bread)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%96%AF%E7%8B%82%E8%BF%BD%E6%B1%82%E5%A5%B6%E8%8C%B6%E9%9D%A2%E5%8C%85%E8%B6%85%E8%BF%9B%E5%8C%96%23) `112.8K 🔥` `+57%`
1. [又一艘邮轮疑似暴发疫情1人死亡](https://s.weibo.com/weibo?q=%23%E5%8F%88%E4%B8%80%E8%89%98%E9%82%AE%E8%BD%AE%E7%96%91%E4%BC%BC%E6%9A%B4%E5%8F%91%E7%96%AB%E6%83%851%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `106.7K 🔥` `+167%`
1. [猫咪知道主人给它打电话就是回家](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E7%9F%A5%E9%81%93%E4%B8%BB%E4%BA%BA%E7%BB%99%E5%AE%83%E6%89%93%E7%94%B5%E8%AF%9D%E5%B0%B1%E6%98%AF%E5%9B%9E%E5%AE%B6%23) `106.6K 🔥` `+98%`
1. [美股半导体板块大跌](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%9D%BF%E5%9D%97%E5%A4%A7%E8%B7%8C%23) `99.3K 🔥` `+48%`
1. [谁还没到李佳琦直播间抢小样](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%BF%98%E6%B2%A1%E5%88%B0%E6%9D%8E%E4%BD%B3%E7%90%A6%E7%9B%B4%E6%92%AD%E9%97%B4%E6%8A%A2%E5%B0%8F%E6%A0%B7%23) `73.6K 🔥` `+88%`
1. [田曦薇告别低智商犯罪](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%91%8A%E5%88%AB%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `67.4K 🔥` `+72%`
1. [小米四款新车曝光 (Xiaomi’s four new cars revealed)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9B%E6%AC%BE%E6%96%B0%E8%BD%A6%E6%9B%9D%E5%85%89%23) `59.6K 🔥` `+53%`
1. [一代人有一代人的带娃邪修 (One generation after another, there are evil cultivators who take care of their children.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E5%B8%A6%E5%A8%83%E9%82%AA%E4%BF%AE%23) `309.4K 🔥`
1. [此人的气血强度恐怕在我之上](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E4%BA%BA%E7%9A%84%E6%B0%94%E8%A1%80%E5%BC%BA%E5%BA%A6%E6%81%90%E6%80%95%E5%9C%A8%E6%88%91%E4%B9%8B%E4%B8%8A%23) `81.6K 🔥`
1. [雨霖铃杨洋演技](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E9%9C%96%E9%93%83%E6%9D%A8%E6%B4%8B%E6%BC%94%E6%8A%80%23) `64.6K 🔥` `-22%`

Updated at 2026-05-14 07:40:49

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
