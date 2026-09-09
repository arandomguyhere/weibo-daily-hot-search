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

1. [康康爷爷睡梦中离世](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%BA%B7%E7%88%B7%E7%88%B7%E7%9D%A1%E6%A2%A6%E4%B8%AD%E7%A6%BB%E4%B8%96%23) `2.3M 🔥` `NEW`
1. [宁德时代已报警](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `2.0M 🔥` `NEW`
1. [感受长征出发前的峥嵘岁月](https://s.weibo.com/weibo?q=%23%E6%84%9F%E5%8F%97%E9%95%BF%E5%BE%81%E5%87%BA%E5%8F%91%E5%89%8D%E7%9A%84%E5%B3%A5%E5%B5%98%E5%B2%81%E6%9C%88%23) `1.7M 🔥` `NEW`
1. [iPhone18Pro小号灵动岛](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%B0%8F%E5%8F%B7%E7%81%B5%E5%8A%A8%E5%B2%9B%23) `1.6M 🔥` `NEW`
1. [梅姨证件照曝光](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%AF%81%E4%BB%B6%E7%85%A7%E6%9B%9D%E5%85%89%23) `1.6M 🔥` `NEW`
1. [捐赠人回应被资助女孩质问没打生活费](https://s.weibo.com/weibo?q=%23%E6%8D%90%E8%B5%A0%E4%BA%BA%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%B5%84%E5%8A%A9%E5%A5%B3%E5%AD%A9%E8%B4%A8%E9%97%AE%E6%B2%A1%E6%89%93%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `889.4K 🔥` `NEW`
1. [白鹿常华森吻戏好苏](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B8%B8%E5%8D%8E%E6%A3%AE%E5%90%BB%E6%88%8F%E5%A5%BD%E8%8B%8F%23) `609.4K 🔥` `NEW`
1. [戚薇AI脸演丧尸片了](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87AI%E8%84%B8%E6%BC%94%E4%B8%A7%E5%B0%B8%E7%89%87%E4%BA%86%23) `540.7K 🔥` `NEW`
1. [国乒今日三战三负](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E4%BB%8A%E6%97%A5%E4%B8%89%E6%88%98%E4%B8%89%E8%B4%9F%23) `537.7K 🔥` `NEW`
1. [被指摸臀4岁男孩已正常返校上学](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%8C%87%E6%91%B8%E8%87%804%E5%B2%81%E7%94%B7%E5%AD%A9%E5%B7%B2%E6%AD%A3%E5%B8%B8%E8%BF%94%E6%A0%A1%E4%B8%8A%E5%AD%A6%23) `536.1K 🔥` `NEW`
1. [低保户 空调](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E4%BF%9D%E6%88%B7%20%E7%A9%BA%E8%B0%83%23) `525.1K 🔥` `NEW`
1. [高圆圆说在结婚后的几年是痛苦的](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%9C%86%E5%9C%86%E8%AF%B4%E5%9C%A8%E7%BB%93%E5%A9%9A%E5%90%8E%E7%9A%84%E5%87%A0%E5%B9%B4%E6%98%AF%E7%97%9B%E8%8B%A6%E7%9A%84%23) `517.9K 🔥` `NEW`
1. [河南地震](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%9C%B0%E9%9C%87%23) `447.8K 🔥` `NEW`
1. [迪丽热巴明示](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%98%8E%E7%A4%BA%23) `415.1K 🔥` `NEW`
1. [梅姨](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%23) `341.5K 🔥` `NEW`
1. [田曦薇侯明昊 大唐辟珠记](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E4%BE%AF%E6%98%8E%E6%98%8A%20%E5%A4%A7%E5%94%90%E8%BE%9F%E7%8F%A0%E8%AE%B0%23) `330.0K 🔥` `NEW`
1. [柬诈骗园区内有设手术室的医院](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E8%AF%88%E9%AA%97%E5%9B%AD%E5%8C%BA%E5%86%85%E6%9C%89%E8%AE%BE%E6%89%8B%E6%9C%AF%E5%AE%A4%E7%9A%84%E5%8C%BB%E9%99%A2%23) `327.0K 🔥` `NEW`
1. [章子怡易烊千玺陈飞宇活动生图](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E9%99%88%E9%A3%9E%E5%AE%87%E6%B4%BB%E5%8A%A8%E7%94%9F%E5%9B%BE%23) `325.5K 🔥` `NEW`
1. [梅姨至少有两个亲生孩子](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%87%B3%E5%B0%91%E6%9C%89%E4%B8%A4%E4%B8%AA%E4%BA%B2%E7%94%9F%E5%AD%A9%E5%AD%90%23) `322.8K 🔥` `NEW`
1. [杨洋晒小羊蛋糕](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%99%92%E5%B0%8F%E7%BE%8A%E8%9B%8B%E7%B3%95%23) `322.1K 🔥` `NEW`
1. [终于吃上教师资格证的红利了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E5%90%83%E4%B8%8A%E6%95%99%E5%B8%88%E8%B5%84%E6%A0%BC%E8%AF%81%E7%9A%84%E7%BA%A2%E5%88%A9%E4%BA%86%23) `321.6K 🔥` `NEW`
1. [林小宅晒梓渝合照](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%B0%8F%E5%AE%85%E6%99%92%E6%A2%93%E6%B8%9D%E5%90%88%E7%85%A7%23) `321.4K 🔥` `NEW`
1. [爱情公寓超长iPhone18](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E8%B6%85%E9%95%BFiPhone18%23) `319.3K 🔥` `NEW`
1. [寿司郎手捂冻虾员工已离职](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%E6%89%8B%E6%8D%82%E5%86%BB%E8%99%BE%E5%91%98%E5%B7%A5%E5%B7%B2%E7%A6%BB%E8%81%8C%23) `303.2K 🔥` `NEW`
1. [科技新一说用真金白银支持苹果](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80%E8%AF%B4%E7%94%A8%E7%9C%9F%E9%87%91%E7%99%BD%E9%93%B6%E6%94%AF%E6%8C%81%E8%8B%B9%E6%9E%9C%23) `287.8K 🔥` `NEW`
1. [一转眼iPhone都成年了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%BD%AC%E7%9C%BCiPhone%E9%83%BD%E6%88%90%E5%B9%B4%E4%BA%86%23) `280.6K 🔥` `NEW`
1. [明星价值 缩水](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E4%BB%B7%E5%80%BC%20%E7%BC%A9%E6%B0%B4%23) `258.2K 🔥` `NEW`
1. [早春晴朗杀疯了](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E6%9D%80%E7%96%AF%E4%BA%86%23) `250.1K 🔥` `NEW`
1. [18岁男生熬夜猝死账号取名早些睡](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E7%94%B7%E7%94%9F%E7%86%AC%E5%A4%9C%E7%8C%9D%E6%AD%BB%E8%B4%A6%E5%8F%B7%E5%8F%96%E5%90%8D%E6%97%A9%E4%BA%9B%E7%9D%A1%23) `245.7K 🔥` `NEW`
1. [蒯曼2比3韩莹](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC2%E6%AF%943%E9%9F%A9%E8%8E%B9%23) `229.5K 🔥` `NEW`
1. [以为是学生后来才知道是新娘](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%98%AF%E5%AD%A6%E7%94%9F%E5%90%8E%E6%9D%A5%E6%89%8D%E7%9F%A5%E9%81%93%E6%98%AF%E6%96%B0%E5%A8%98%23) `229.2K 🔥` `NEW`
1. [郑钦文莱巴金娜美网数据对比](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E7%BE%8E%E7%BD%91%E6%95%B0%E6%8D%AE%E5%AF%B9%E6%AF%94%23) `225.4K 🔥` `NEW`
1. [黄景瑜有好朋狗了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E6%9C%89%E5%A5%BD%E6%9C%8B%E7%8B%97%E4%BA%86%23) `206.1K 🔥` `NEW`
1. [曝LPL明年取消涅槃](https://s.weibo.com/weibo?q=%23%E6%9B%9DLPL%E6%98%8E%E5%B9%B4%E5%8F%96%E6%B6%88%E6%B6%85%E6%A7%83%23) `194.3K 🔥` `NEW`
1. [S16资格赛赛程](https://s.weibo.com/weibo?q=%23S16%E8%B5%84%E6%A0%BC%E8%B5%9B%E8%B5%9B%E7%A8%8B%23) `185.7K 🔥` `NEW`
1. [4岁男童触碰纠纷不能变成流量猎物](https://s.weibo.com/weibo?q=%234%E5%B2%81%E7%94%B7%E7%AB%A5%E8%A7%A6%E7%A2%B0%E7%BA%A0%E7%BA%B7%E4%B8%8D%E8%83%BD%E5%8F%98%E6%88%90%E6%B5%81%E9%87%8F%E7%8C%8E%E7%89%A9%23) `176.9K 🔥` `NEW`
1. [赖冠霖退圈的原因](https://s.weibo.com/weibo?q=%23%E8%B5%96%E5%86%A0%E9%9C%96%E9%80%80%E5%9C%88%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `176.8K 🔥` `NEW`
1. [曾辉录披哥胖了11斤](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%BD%95%E6%8A%AB%E5%93%A5%E8%83%96%E4%BA%8611%E6%96%A4%23) `163.1K 🔥` `NEW`
1. [豆包崩了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%B4%A9%E4%BA%86%23) `163.0K 🔥` `NEW`
1. [lumi和桃说当年装的很累](https://s.weibo.com/weibo?q=%23lumi%E5%92%8C%E6%A1%83%E8%AF%B4%E5%BD%93%E5%B9%B4%E8%A3%85%E7%9A%84%E5%BE%88%E7%B4%AF%23) `162.9K 🔥` `NEW`
1. [庾澄庆再回应歌手被淘汰](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E5%86%8D%E5%9B%9E%E5%BA%94%E6%AD%8C%E6%89%8B%E8%A2%AB%E6%B7%98%E6%B1%B0%23) `162.8K 🔥` `NEW`
1. [父亲回应48万三代积蓄被儿子刷光](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%9448%E4%B8%87%E4%B8%89%E4%BB%A3%E7%A7%AF%E8%93%84%E8%A2%AB%E5%84%BF%E5%AD%90%E5%88%B7%E5%85%89%23) `162.7K 🔥` `NEW`
1. [赖冠霖疑似结婚了](https://s.weibo.com/weibo?q=%23%E8%B5%96%E5%86%A0%E9%9C%96%E7%96%91%E4%BC%BC%E7%BB%93%E5%A9%9A%E4%BA%86%23) `530.9K 🔥` `+38%`
1. [iPhone Duo](https://s.weibo.com/weibo?q=%23iPhone%20Duo%23) `324.4K 🔥`
1. [刘亦菲删除照片](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%88%A0%E9%99%A4%E7%85%A7%E7%89%87%23) `320.6K 🔥`
1. [A股市场正在经历一场深刻的风格重塑](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B8%82%E5%9C%BA%E6%AD%A3%E5%9C%A8%E7%BB%8F%E5%8E%86%E4%B8%80%E5%9C%BA%E6%B7%B1%E5%88%BB%E7%9A%84%E9%A3%8E%E6%A0%BC%E9%87%8D%E5%A1%91%23) `294.7K 🔥`
1. [iPhone18系列](https://s.weibo.com/weibo?q=%23iPhone18%E7%B3%BB%E5%88%97%23) `321.1K 🔥` `-68%`
1. [尼古拉斯凯奇房塌了](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%8F%A4%E6%8B%89%E6%96%AF%E5%87%AF%E5%A5%87%E6%88%BF%E5%A1%8C%E4%BA%86%23) `206.5K 🔥` `-44%`
1. [女子隧道内爬出副驾从车顶跳下](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9A%A7%E9%81%93%E5%86%85%E7%88%AC%E5%87%BA%E5%89%AF%E9%A9%BE%E4%BB%8E%E8%BD%A6%E9%A1%B6%E8%B7%B3%E4%B8%8B%23) `163.1K 🔥` `-54%`

Updated at 2026-09-09 22:13:26

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
