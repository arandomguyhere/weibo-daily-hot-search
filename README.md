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

1. [现在就出发 (Let's go now)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `885.8K 🔥` `NEW`
1. [自驾游国家级攻略来了](https://s.weibo.com/weibo?q=%23%E8%87%AA%E9%A9%BE%E6%B8%B8%E5%9B%BD%E5%AE%B6%E7%BA%A7%E6%94%BB%E7%95%A5%E6%9D%A5%E4%BA%86%23) `695.5K 🔥` `NEW`
1. [加木遭遇严重车祸](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%9C%A8%E9%81%AD%E9%81%87%E4%B8%A5%E9%87%8D%E8%BD%A6%E7%A5%B8%23) `499.5K 🔥` `NEW`
1. [安踏品牌前CEO徐阳离职迁居美国](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8F%E5%93%81%E7%89%8C%E5%89%8DCEO%E5%BE%90%E9%98%B3%E7%A6%BB%E8%81%8C%E8%BF%81%E5%B1%85%E7%BE%8E%E5%9B%BD%23) `449.1K 🔥` `NEW`
1. [大不了送外卖暴露了什么](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%B8%8D%E4%BA%86%E9%80%81%E5%A4%96%E5%8D%96%E6%9A%B4%E9%9C%B2%E4%BA%86%E4%BB%80%E4%B9%88%23) `435.9K 🔥` `NEW`
1. [中餐厅给张雅琪配了时钟后期](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E7%BB%99%E5%BC%A0%E9%9B%85%E7%90%AA%E9%85%8D%E4%BA%86%E6%97%B6%E9%92%9F%E5%90%8E%E6%9C%9F%23) `425.7K 🔥` `NEW`
1. [60岁中医侵害18岁护士称双方自愿](https://s.weibo.com/weibo?q=%2360%E5%B2%81%E4%B8%AD%E5%8C%BB%E4%BE%B5%E5%AE%B318%E5%B2%81%E6%8A%A4%E5%A3%AB%E7%A7%B0%E5%8F%8C%E6%96%B9%E8%87%AA%E6%84%BF%23) `341.5K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `244.7K 🔥` `NEW`
1. [AI复原84位皇后容貌](https://s.weibo.com/weibo?q=%23AI%E5%A4%8D%E5%8E%9F84%E4%BD%8D%E7%9A%87%E5%90%8E%E5%AE%B9%E8%B2%8C%23) `243.9K 🔥` `NEW`
1. [青岛文旅关闭评论区堵不住追问](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E6%96%87%E6%97%85%E5%85%B3%E9%97%AD%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%A0%B5%E4%B8%8D%E4%BD%8F%E8%BF%BD%E9%97%AE%23) `243.8K 🔥` `NEW`
1. [爱的本质就是被看见 (The essence of love is to be seen)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%9A%84%E6%9C%AC%E8%B4%A8%E5%B0%B1%E6%98%AF%E8%A2%AB%E7%9C%8B%E8%A7%81%23) `189.2K 🔥` `NEW`
1. [横店长剧在拍仅16部](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%BA%97%E9%95%BF%E5%89%A7%E5%9C%A8%E6%8B%8D%E4%BB%8516%E9%83%A8%23) `185.6K 🔥` `NEW`
1. [用光所有积蓄买房结果亏了快100万](https://s.weibo.com/weibo?q=%23%E7%94%A8%E5%85%89%E6%89%80%E6%9C%89%E7%A7%AF%E8%93%84%E4%B9%B0%E6%88%BF%E7%BB%93%E6%9E%9C%E4%BA%8F%E4%BA%86%E5%BF%AB100%E4%B8%87%23) `184.7K 🔥` `NEW`
1. [长剧醒来久违的大剧质感](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%89%A7%E9%86%92%E6%9D%A5%E4%B9%85%E8%BF%9D%E7%9A%84%E5%A4%A7%E5%89%A7%E8%B4%A8%E6%84%9F%23) `183.8K 🔥` `NEW`
1. [工业新动能持续释放发展活力](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%B8%9A%E6%96%B0%E5%8A%A8%E8%83%BD%E6%8C%81%E7%BB%AD%E9%87%8A%E6%94%BE%E5%8F%91%E5%B1%95%E6%B4%BB%E5%8A%9B%23) `182.3K 🔥` `NEW`
1. [路人镜头下的范丞丞氛围感](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E9%95%9C%E5%A4%B4%E4%B8%8B%E7%9A%84%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%B0%9B%E5%9B%B4%E6%84%9F%23) `181.0K 🔥` `NEW`
1. [第一批坐进小米澎程的人怎么说](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E5%9D%90%E8%BF%9B%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E7%9A%84%E4%BA%BA%E6%80%8E%E4%B9%88%E8%AF%B4%23) `180.9K 🔥` `NEW`
1. [被希林娜依高新歌治愈了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%B8%8C%E6%9E%97%E5%A8%9C%E4%BE%9D%E9%AB%98%E6%96%B0%E6%AD%8C%E6%B2%BB%E6%84%88%E4%BA%86%23) `179.2K 🔥` `NEW`
1. [张雅琪和王俊凯林大厨收拾到凌晨一点半](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%92%8C%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%9E%97%E5%A4%A7%E5%8E%A8%E6%94%B6%E6%8B%BE%E5%88%B0%E5%87%8C%E6%99%A8%E4%B8%80%E7%82%B9%E5%8D%8A%23) `674.3K 🔥` `+107%`
1. [唐狗咬死女子](https://s.weibo.com/weibo?q=%23%E5%94%90%E7%8B%97%E5%92%AC%E6%AD%BB%E5%A5%B3%E5%AD%90%23) `650.0K 🔥` `+270%`
1. [河北代孕 取卵不打麻药 (Hebei surrogacy egg retrieval without anesthesia)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E4%BB%A3%E5%AD%95%20%E5%8F%96%E5%8D%B5%E4%B8%8D%E6%89%93%E9%BA%BB%E8%8D%AF%23) `637.0K 🔥` `+282%`
1. [大众5S国民家轿国民价 (Volkswagen 5S national sedan with national price)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%975S%E5%9B%BD%E6%B0%91%E5%AE%B6%E8%BD%BF%E5%9B%BD%E6%B0%91%E4%BB%B7%23) `629.8K 🔥` `+28%`
1. [V金九刊三套高定](https://s.weibo.com/weibo?q=%23V%E9%87%91%E4%B9%9D%E5%88%8A%E4%B8%89%E5%A5%97%E9%AB%98%E5%AE%9A%23) `594.2K 🔥` `+115%`
1. [赵丽颖儿子想想7岁身高](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%84%BF%E5%AD%90%E6%83%B3%E6%83%B37%E5%B2%81%E8%BA%AB%E9%AB%98%23) `575.5K 🔥` `+22%`
1. [LV老花源自中国千年传统纹样](https://s.weibo.com/weibo?q=%23LV%E8%80%81%E8%8A%B1%E6%BA%90%E8%87%AA%E4%B8%AD%E5%9B%BD%E5%8D%83%E5%B9%B4%E4%BC%A0%E7%BB%9F%E7%BA%B9%E6%A0%B7%23) `460.6K 🔥` `+42%`
1. [网购水果骗局](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%B4%AD%E6%B0%B4%E6%9E%9C%E9%AA%97%E5%B1%80%23) `441.7K 🔥` `+35%`
1. [中新网评青岛男子辱骂女游客](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B0%E7%BD%91%E8%AF%84%E9%9D%92%E5%B2%9B%E7%94%B7%E5%AD%90%E8%BE%B1%E9%AA%82%E5%A5%B3%E6%B8%B8%E5%AE%A2%23) `376.9K 🔥` `+33%`
1. [问界儿童车售价15800](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E5%84%BF%E7%AB%A5%E8%BD%A6%E5%94%AE%E4%BB%B715800%23) `1.2M 🔥`
1. [时团演唱会官摄打码了 (The official photos of the band's concert have been coded)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E6%91%84%E6%89%93%E7%A0%81%E4%BA%86%23) `585.4K 🔥`
1. [时代少年团F1商标相似度](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2F1%E5%95%86%E6%A0%87%E7%9B%B8%E4%BC%BC%E5%BA%A6%23) `482.7K 🔥`
1. [梅尼耶女友与迪丽热巴合照](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%B0%BC%E8%80%B6%E5%A5%B3%E5%8F%8B%E4%B8%8E%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%88%E7%85%A7%23) `453.1K 🔥`
1. [杨天真曝影视寒冬现状](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%E6%9B%9D%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E7%8E%B0%E7%8A%B6%23) `373.4K 🔥`
1. [曹格儿子表白女友 (Cao Ge’s son confesses to his girlfriend)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E6%A0%BC%E5%84%BF%E5%AD%90%E8%A1%A8%E7%99%BD%E5%A5%B3%E5%8F%8B%23) `270.9K 🔥`
1. [美莎克致广西两地159死10失联](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%8E%8E%E5%85%8B%E8%87%B4%E5%B9%BF%E8%A5%BF%E4%B8%A4%E5%9C%B0159%E6%AD%BB10%E5%A4%B1%E8%81%94%23) `244.0K 🔥`
1. [孕早期胎停大多不是孕妇个人过失](https://s.weibo.com/weibo?q=%23%E5%AD%95%E6%97%A9%E6%9C%9F%E8%83%8E%E5%81%9C%E5%A4%A7%E5%A4%9A%E4%B8%8D%E6%98%AF%E5%AD%95%E5%A6%87%E4%B8%AA%E4%BA%BA%E8%BF%87%E5%A4%B1%23) `227.8K 🔥`
1. [印度人袭击疑载有牛肉的卡车致多人丧生](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%BA%BA%E8%A2%AD%E5%87%BB%E7%96%91%E8%BD%BD%E6%9C%89%E7%89%9B%E8%82%89%E7%9A%84%E5%8D%A1%E8%BD%A6%E8%87%B4%E5%A4%9A%E4%BA%BA%E4%B8%A7%E7%94%9F%23) `206.1K 🔥`
1. [单位没有人情味](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BD%8D%E6%B2%A1%E6%9C%89%E4%BA%BA%E6%83%85%E5%91%B3%23) `609.4K 🔥` `-28%`
1. [绍兴 六月欣](https://s.weibo.com/weibo?q=%23%E7%BB%8D%E5%85%B4%20%E5%85%AD%E6%9C%88%E6%AC%A3%23) `586.0K 🔥` `-26%`
1. [胡锡进要求张丹丹道歉](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E8%A6%81%E6%B1%82%E5%BC%A0%E4%B8%B9%E4%B8%B9%E9%81%93%E6%AD%89%23) `539.4K 🔥` `-37%`
1. [谢娜沈梦辰主持对比](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%B2%88%E6%A2%A6%E8%BE%B0%E4%B8%BB%E6%8C%81%E5%AF%B9%E6%AF%94%23) `421.4K 🔥` `-32%`
1. [北大教授称灵活就业是福利](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E6%95%99%E6%8E%88%E7%A7%B0%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E6%98%AF%E7%A6%8F%E5%88%A9%23) `309.3K 🔥` `-35%`
1. [宝马iX3价格 (BMW iX3 price)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E9%A9%ACiX3%E4%BB%B7%E6%A0%BC%23) `273.5K 🔥` `-45%`
1. [陈瑶发了九门大合照](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%8F%91%E4%BA%86%E4%B9%9D%E9%97%A8%E5%A4%A7%E5%90%88%E7%85%A7%23) `243.0K 🔥` `-24%`
1. [泡泡玛特IP格局大变 (Big changes in the IP landscape of Bubble Mart)](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9IP%E6%A0%BC%E5%B1%80%E5%A4%A7%E5%8F%98%23) `210.0K 🔥` `-36%`
1. [中国洗碗视频被外网称教科书 (Chinese dishwashing video is called a textbook by foreign websites)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B4%97%E7%A2%97%E8%A7%86%E9%A2%91%E8%A2%AB%E5%A4%96%E7%BD%91%E7%A7%B0%E6%95%99%E7%A7%91%E4%B9%A6%23) `206.9K 🔥` `-50%`
1. [哈尔滨速滑运动员截肢 (Harbin speed skater's leg amputated)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E9%80%9F%E6%BB%91%E8%BF%90%E5%8A%A8%E5%91%98%E6%88%AA%E8%82%A2%23) `197.2K 🔥` `-44%`
1. [台风沙德尔](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%23) `177.6K 🔥` `-44%`
1. [孙骁骁说生二胎是对老公和婆家的肯定 (Sun Xiaojie said that having a second child is an affirmation to her husband and in-laws)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%AA%81%E9%AA%81%E8%AF%B4%E7%94%9F%E4%BA%8C%E8%83%8E%E6%98%AF%E5%AF%B9%E8%80%81%E5%85%AC%E5%92%8C%E5%A9%86%E5%AE%B6%E7%9A%84%E8%82%AF%E5%AE%9A%23) `177.4K 🔥` `-43%`
1. [大冰称婚后上交工资是三观问题](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E7%A7%B0%E5%A9%9A%E5%90%8E%E4%B8%8A%E4%BA%A4%E5%B7%A5%E8%B5%84%E6%98%AF%E4%B8%89%E8%A7%82%E9%97%AE%E9%A2%98%23) `174.3K 🔥` `-46%`
1. [网红卖淫秽视频被抓时问会判刑吗 (If an internet celebrity is caught selling pornographic videos, will he be sentenced?)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%8D%96%E6%B7%AB%E7%A7%BD%E8%A7%86%E9%A2%91%E8%A2%AB%E6%8A%93%E6%97%B6%E9%97%AE%E4%BC%9A%E5%88%A4%E5%88%91%E5%90%97%23) `167.7K 🔥` `-31%`

Updated at 2026-08-21 15:12:07

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
