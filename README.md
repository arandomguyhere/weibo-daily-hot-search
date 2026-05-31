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

1. [法国高温致7人死亡中国留学生发声 (High temperature in France kills 7 Chinese students speak out)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%AB%98%E6%B8%A9%E8%87%B47%E4%BA%BA%E6%AD%BB%E4%BA%A1%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%8F%91%E5%A3%B0%23) `1.2M 🔥` `NEW`
1. [央视起底娜塔莎暴力解压玩具](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B5%B7%E5%BA%95%E5%A8%9C%E5%A1%94%E8%8E%8E%E6%9A%B4%E5%8A%9B%E8%A7%A3%E5%8E%8B%E7%8E%A9%E5%85%B7%23) `1.1M 🔥` `NEW`
1. [智博会发布200余项创新成果](https://s.weibo.com/weibo?q=%23%E6%99%BA%E5%8D%9A%E4%BC%9A%E5%8F%91%E5%B8%83200%E4%BD%99%E9%A1%B9%E5%88%9B%E6%96%B0%E6%88%90%E6%9E%9C%23) `942.4K 🔥` `NEW`
1. [停止自嬷](https://s.weibo.com/weibo?q=%23%E5%81%9C%E6%AD%A2%E8%87%AA%E5%AC%B7%23) `940.1K 🔥` `NEW`
1. [曾沛慈长文告别三公](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E9%95%BF%E6%96%87%E5%91%8A%E5%88%AB%E4%B8%89%E5%85%AC%23) `934.3K 🔥` `NEW`
1. [过度防晒](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E9%98%B2%E6%99%92%23) `866.4K 🔥` `NEW`
1. [黄仁勋在英伟达台北总部调侃居家办公](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%9C%A8%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%8F%B0%E5%8C%97%E6%80%BB%E9%83%A8%E8%B0%83%E4%BE%83%E5%B1%85%E5%AE%B6%E5%8A%9E%E5%85%AC%23) `689.8K 🔥` `NEW`
1. [接机张月时接到了浪姐节目组电话](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E6%9C%BA%E5%BC%A0%E6%9C%88%E6%97%B6%E6%8E%A5%E5%88%B0%E4%BA%86%E6%B5%AA%E5%A7%90%E8%8A%82%E7%9B%AE%E7%BB%84%E7%94%B5%E8%AF%9D%23) `527.8K 🔥` `NEW`
1. [vogue红毯 疲惫](https://s.weibo.com/weibo?q=%23vogue%E7%BA%A2%E6%AF%AF%20%E7%96%B2%E6%83%AB%23) `462.2K 🔥` `NEW`
1. [南天门计划最新进展曝光](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%A4%A9%E9%97%A8%E8%AE%A1%E5%88%92%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%E6%9B%9D%E5%85%89%23) `396.6K 🔥` `NEW`
1. [李小冉秒删博 (Li Xiaoran deleted his blog instantly)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%A7%92%E5%88%A0%E5%8D%9A%23) `382.3K 🔥` `NEW`
1. [白鹿求粉丝别喊了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%B1%82%E7%B2%89%E4%B8%9D%E5%88%AB%E5%96%8A%E4%BA%86%23) `272.8K 🔥` `NEW`
1. [韩庚鹿晗SM师兄弟合体](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%BA%9A%E9%B9%BF%E6%99%97SM%E5%B8%88%E5%85%84%E5%BC%9F%E5%90%88%E4%BD%93%23) `272.3K 🔥` `NEW`
1. [曝短剧演员陈添祥延毕2年](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%9F%AD%E5%89%A7%E6%BC%94%E5%91%98%E9%99%88%E6%B7%BB%E7%A5%A5%E5%BB%B6%E6%AF%952%E5%B9%B4%23) `271.5K 🔥` `NEW`
1. [新娘墓前拜别母亲红盖头飘落](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%A2%93%E5%89%8D%E6%8B%9C%E5%88%AB%E6%AF%8D%E4%BA%B2%E7%BA%A2%E7%9B%96%E5%A4%B4%E9%A3%98%E8%90%BD%23) `271.4K 🔥` `NEW`
1. [男子隐瞒HPV致女友感染赔偿1.5万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%9A%90%E7%9E%92HPV%E8%87%B4%E5%A5%B3%E5%8F%8B%E6%84%9F%E6%9F%93%E8%B5%94%E5%81%BF1.5%E4%B8%87%23) `256.9K 🔥` `NEW`
1. [岳雨婷曝短剧行业有很多捷径](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%9B%A8%E5%A9%B7%E6%9B%9D%E7%9F%AD%E5%89%A7%E8%A1%8C%E4%B8%9A%E6%9C%89%E5%BE%88%E5%A4%9A%E6%8D%B7%E5%BE%84%23) `254.9K 🔥` `NEW`
1. [孙俪的痣没了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E7%9A%84%E7%97%A3%E6%B2%A1%E4%BA%86%23) `236.5K 🔥` `NEW`
1. [王濛浪姐淘汰感言都想好了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%B5%AA%E5%A7%90%E6%B7%98%E6%B1%B0%E6%84%9F%E8%A8%80%E9%83%BD%E6%83%B3%E5%A5%BD%E4%BA%86%23) `220.3K 🔥` `NEW`
1. [印度老人悬挂在高层窗外偷拍邻居](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E8%80%81%E4%BA%BA%E6%82%AC%E6%8C%82%E5%9C%A8%E9%AB%98%E5%B1%82%E7%AA%97%E5%A4%96%E5%81%B7%E6%8B%8D%E9%82%BB%E5%B1%85%23) `218.8K 🔥` `NEW`
1. [江山大同 (Jiangshan Datong)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%23) `218.4K 🔥` `NEW`
1. [重庆一凶宅39万余元起拍](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E4%B8%80%E5%87%B6%E5%AE%8539%E4%B8%87%E4%BD%99%E5%85%83%E8%B5%B7%E6%8B%8D%23) `218.0K 🔥` `NEW`
1. [咖啡减肥这样喝才有效](https://s.weibo.com/weibo?q=%23%E5%92%96%E5%95%A1%E5%87%8F%E8%82%A5%E8%BF%99%E6%A0%B7%E5%96%9D%E6%89%8D%E6%9C%89%E6%95%88%23) `217.8K 🔥` `NEW`
1. [张凌赫直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9B%B4%E6%92%AD%23) `215.8K 🔥` `NEW`
1. [谢霆锋曾回应与王菲世纪牵手](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%9B%BE%E5%9B%9E%E5%BA%94%E4%B8%8E%E7%8E%8B%E8%8F%B2%E4%B8%96%E7%BA%AA%E7%89%B5%E6%89%8B%23) `213.2K 🔥` `NEW`
1. [服务员争了半天谁去送这个包间](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E5%8A%A1%E5%91%98%E4%BA%89%E4%BA%86%E5%8D%8A%E5%A4%A9%E8%B0%81%E5%8E%BB%E9%80%81%E8%BF%99%E4%B8%AA%E5%8C%85%E9%97%B4%23) `212.6K 🔥` `NEW`
1. [宋亚轩超快反应拉手刹](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%B6%85%E5%BF%AB%E5%8F%8D%E5%BA%94%E6%8B%89%E6%89%8B%E5%88%B9%23) `209.6K 🔥` `NEW`
1. [怪不得鹿晗这么瘦](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%B9%BF%E6%99%97%E8%BF%99%E4%B9%88%E7%98%A6%23) `207.2K 🔥` `NEW`
1. [亚历山大谈文班亚马表现](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E5%8E%86%E5%B1%B1%E5%A4%A7%E8%B0%88%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E8%A1%A8%E7%8E%B0%23) `206.2K 🔥` `NEW`
1. [中方代表团现场质问荷兰国防大臣](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E4%BB%A3%E8%A1%A8%E5%9B%A2%E7%8E%B0%E5%9C%BA%E8%B4%A8%E9%97%AE%E8%8D%B7%E5%85%B0%E5%9B%BD%E9%98%B2%E5%A4%A7%E8%87%A3%23) `204.8K 🔥` `NEW`
1. [半导体韬定律 (Semiconductor Taoist Law)](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%AF%BC%E4%BD%93%E9%9F%AC%E5%AE%9A%E5%BE%8B%23) `201.5K 🔥` `NEW`
1. [租房也要趁618过上高配版生活](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E6%88%BF%E4%B9%9F%E8%A6%81%E8%B6%81618%E8%BF%87%E4%B8%8A%E9%AB%98%E9%85%8D%E7%89%88%E7%94%9F%E6%B4%BB%23) `200.1K 🔥` `NEW`
1. [文班亚马想给波波维奇打电话](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E6%83%B3%E7%BB%99%E6%B3%A2%E6%B3%A2%E7%BB%B4%E5%A5%87%E6%89%93%E7%94%B5%E8%AF%9D%23) `197.2K 🔥` `NEW`
1. [郭晓婷只有她出场时没用运镜](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E5%8F%AA%E6%9C%89%E5%A5%B9%E5%87%BA%E5%9C%BA%E6%97%B6%E6%B2%A1%E7%94%A8%E8%BF%90%E9%95%9C%23) `195.5K 🔥` `NEW`
1. [618夏日续命神器大盘点](https://s.weibo.com/weibo?q=%23618%E5%A4%8F%E6%97%A5%E7%BB%AD%E5%91%BD%E7%A5%9E%E5%99%A8%E5%A4%A7%E7%9B%98%E7%82%B9%23) `191.3K 🔥` `NEW`
1. [第一次被一只猫的长相攻击到了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A2%AB%E4%B8%80%E5%8F%AA%E7%8C%AB%E7%9A%84%E9%95%BF%E7%9B%B8%E6%94%BB%E5%87%BB%E5%88%B0%E4%BA%86%23) `173.2K 🔥` `NEW`
1. [618家装开始卷服务了](https://s.weibo.com/weibo?q=%23618%E5%AE%B6%E8%A3%85%E5%BC%80%E5%A7%8B%E5%8D%B7%E6%9C%8D%E5%8A%A1%E4%BA%86%23) `161.3K 🔥` `NEW`
1. [马頔又缺装修经费了吗](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E5%8F%88%E7%BC%BA%E8%A3%85%E4%BF%AE%E7%BB%8F%E8%B4%B9%E4%BA%86%E5%90%97%23) `161.2K 🔥` `NEW`
1. [空调安装避坑指南](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E5%AE%89%E8%A3%85%E9%81%BF%E5%9D%91%E6%8C%87%E5%8D%97%23) `161.1K 🔥` `NEW`
1. [任敏否认霸凌同组演员](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E5%90%A6%E8%AE%A4%E9%9C%B8%E5%87%8C%E5%90%8C%E7%BB%84%E6%BC%94%E5%91%98%23) `161.1K 🔥` `NEW`
1. [618上淘宝买爆款抽888元红包 (Go to Taobao to buy popular items on 618 and get an 888 yuan red envelope)](https://s.weibo.com/weibo?q=%23618%E4%B8%8A%E6%B7%98%E5%AE%9D%E4%B9%B0%E7%88%86%E6%AC%BE%E6%8A%BD888%E5%85%83%E7%BA%A2%E5%8C%85%23) `940.6K 🔥` `+54%`
1. [天猫618星光大赏 (Tmall 618 Starlight Awards)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB618%E6%98%9F%E5%85%89%E5%A4%A7%E8%B5%8F%23) `850.8K 🔥` `+257%`
1. [华为感谢美国制裁](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%84%9F%E8%B0%A2%E7%BE%8E%E5%9B%BD%E5%88%B6%E8%A3%81%23) `803.9K 🔥` `+61%`
1. [考的越难 手在面部的位置越高](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%9A%84%E8%B6%8A%E9%9A%BE%20%E6%89%8B%E5%9C%A8%E9%9D%A2%E9%83%A8%E7%9A%84%E4%BD%8D%E7%BD%AE%E8%B6%8A%E9%AB%98%23) `573.2K 🔥`
1. [刘德华妻子60岁状态](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BE%B7%E5%8D%8E%E5%A6%BB%E5%AD%9060%E5%B2%81%E7%8A%B6%E6%80%81%23) `380.4K 🔥`
1. [清华硕士从事纹眉1年最高月入10万](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E7%A1%95%E5%A3%AB%E4%BB%8E%E4%BA%8B%E7%BA%B9%E7%9C%891%E5%B9%B4%E6%9C%80%E9%AB%98%E6%9C%88%E5%85%A510%E4%B8%87%23) `273.0K 🔥` `-66%`
1. [姆巴佩遭巴黎球迷辱骂](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%81%AD%E5%B7%B4%E9%BB%8E%E7%90%83%E8%BF%B7%E8%BE%B1%E9%AA%82%23) `272.1K 🔥` `-35%`
1. [李小冉怎么了 (What happened to Li Xiaoran?)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%80%8E%E4%B9%88%E4%BA%86%23) `254.6K 🔥` `-40%`
1. [终于知道结婚的意义是什么了 (I finally know what the meaning of marriage is)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E7%BB%93%E5%A9%9A%E7%9A%84%E6%84%8F%E4%B9%89%E6%98%AF%E4%BB%80%E4%B9%88%E4%BA%86%23) `252.4K 🔥` `-37%`
1. [姜乘澜 眼线膏](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%20%E7%9C%BC%E7%BA%BF%E8%86%8F%23) `210.9K 🔥` `-65%`
1. [中国留学生因印度高温提前回国 (Chinese students return home early due to high temperature in India)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%9B%A0%E5%8D%B0%E5%BA%A6%E9%AB%98%E6%B8%A9%E6%8F%90%E5%89%8D%E5%9B%9E%E5%9B%BD%23) `194.4K 🔥` `-83%`
1. [时代峰峻辟谣王橹杰恋情](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%BE%9F%E8%B0%A3%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%81%8B%E6%83%85%23) `191.0K 🔥` `-54%`

Updated at 2026-05-31 17:17:50

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
