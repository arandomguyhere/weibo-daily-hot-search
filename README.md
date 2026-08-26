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

1. [在韩遇害女生生前最后监控曝光](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E7%94%9F%E5%89%8D%E6%9C%80%E5%90%8E%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `802.2K 🔥` `NEW`
1. [嫌疑人和在韩遇害女生系师生关系](https://s.weibo.com/weibo?q=%23%E5%AB%8C%E7%96%91%E4%BA%BA%E5%92%8C%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E7%B3%BB%E5%B8%88%E7%94%9F%E5%85%B3%E7%B3%BB%23) `700.2K 🔥` `NEW`
1. [张杰首次担任巡演总导演](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%A6%96%E6%AC%A1%E6%8B%85%E4%BB%BB%E5%B7%A1%E6%BC%94%E6%80%BB%E5%AF%BC%E6%BC%94%23) `578.5K 🔥` `NEW`
1. [童星片场被强奸指控迪士尼不作为](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E6%98%9F%E7%89%87%E5%9C%BA%E8%A2%AB%E5%BC%BA%E5%A5%B8%E6%8C%87%E6%8E%A7%E8%BF%AA%E5%A3%AB%E5%B0%BC%E4%B8%8D%E4%BD%9C%E4%B8%BA%23) `510.8K 🔥` `NEW`
1. [包文婧包贝尔时间线](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E5%8C%85%E8%B4%9D%E5%B0%94%E6%97%B6%E9%97%B4%E7%BA%BF%23) `507.1K 🔥` `NEW`
1. [洪崖洞2人疑触电目击者称水深10cm](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B4%96%E6%B4%9E2%E4%BA%BA%E7%96%91%E8%A7%A6%E7%94%B5%E7%9B%AE%E5%87%BB%E8%80%85%E7%A7%B0%E6%B0%B4%E6%B7%B110cm%23) `462.8K 🔥` `NEW`
1. [蛋烘糕奶奶](https://s.weibo.com/weibo?q=%23%E8%9B%8B%E7%83%98%E7%B3%95%E5%A5%B6%E5%A5%B6%23) `452.0K 🔥` `NEW`
1. [张杰官宣杭州演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%AE%98%E5%AE%A3%E6%9D%AD%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `412.3K 🔥` `NEW`
1. [好雨知时节](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E9%9B%A8%E7%9F%A5%E6%97%B6%E8%8A%82%23) `333.9K 🔥` `NEW`
1. [慢性乙肝迈入功能性治愈时代](https://s.weibo.com/weibo?q=%23%E6%85%A2%E6%80%A7%E4%B9%99%E8%82%9D%E8%BF%88%E5%85%A5%E5%8A%9F%E8%83%BD%E6%80%A7%E6%B2%BB%E6%84%88%E6%97%B6%E4%BB%A3%23) `230.1K 🔥` `NEW`
1. [10名干部变身外卖骑手14天跑1148单](https://s.weibo.com/weibo?q=%2310%E5%90%8D%E5%B9%B2%E9%83%A8%E5%8F%98%E8%BA%AB%E5%A4%96%E5%8D%96%E9%AA%91%E6%89%8B14%E5%A4%A9%E8%B7%911148%E5%8D%95%23) `216.7K 🔥` `NEW`
1. [关晓彤有人天生吃饭就香](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%9C%89%E4%BA%BA%E5%A4%A9%E7%94%9F%E5%90%83%E9%A5%AD%E5%B0%B1%E9%A6%99%23) `216.5K 🔥` `NEW`
1. [获救船员回忆万吨货轮沉没经过](https://s.weibo.com/weibo?q=%23%E8%8E%B7%E6%95%91%E8%88%B9%E5%91%98%E5%9B%9E%E5%BF%86%E4%B8%87%E5%90%A8%E8%B4%A7%E8%BD%AE%E6%B2%89%E6%B2%A1%E7%BB%8F%E8%BF%87%23) `216.4K 🔥` `NEW`
1. [曹格自曝帮儿子追女朋友](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E6%A0%BC%E8%87%AA%E6%9B%9D%E5%B8%AE%E5%84%BF%E5%AD%90%E8%BF%BD%E5%A5%B3%E6%9C%8B%E5%8F%8B%23) `216.3K 🔥` `NEW`
1. [詹姆斯成NBA首位现役亿万富翁](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E6%88%90NBA%E9%A6%96%E4%BD%8D%E7%8E%B0%E5%BD%B9%E4%BA%BF%E4%B8%87%E5%AF%8C%E7%BF%81%23) `168.1K 🔥` `NEW`
1. [原来真的有人可以审美这么好](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E5%8F%AF%E4%BB%A5%E5%AE%A1%E7%BE%8E%E8%BF%99%E4%B9%88%E5%A5%BD%23) `168.1K 🔥` `NEW`
1. [洪崖洞附近母女疑触电女儿尚未脱险](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B4%96%E6%B4%9E%E9%99%84%E8%BF%91%E6%AF%8D%E5%A5%B3%E7%96%91%E8%A7%A6%E7%94%B5%E5%A5%B3%E5%84%BF%E5%B0%9A%E6%9C%AA%E8%84%B1%E9%99%A9%23) `1.2M 🔥` `+38%`
1. [敢和欧盟标准较真的鲜奶](https://s.weibo.com/weibo?q=%23%E6%95%A2%E5%92%8C%E6%AC%A7%E7%9B%9F%E6%A0%87%E5%87%86%E8%BE%83%E7%9C%9F%E7%9A%84%E9%B2%9C%E5%A5%B6%23) `519.9K 🔥` `+124%`
1. [包贝尔包文婧去年才生二胎](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%8C%85%E6%96%87%E5%A9%A7%E5%8E%BB%E5%B9%B4%E6%89%8D%E7%94%9F%E4%BA%8C%E8%83%8E%23) `517.8K 🔥` `+35%`
1. [金鹰奖 刘亦菲国籍](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E5%88%98%E4%BA%A6%E8%8F%B2%E5%9B%BD%E7%B1%8D%23) `517.1K 🔥` `+40%`
1. [外卖员车祸去世DNA鉴定儿子非亲生](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%91%98%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96DNA%E9%89%B4%E5%AE%9A%E5%84%BF%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `512.0K 🔥` `+222%`
1. [小猫把自己睡成小手套了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E6%8A%8A%E8%87%AA%E5%B7%B1%E7%9D%A1%E6%88%90%E5%B0%8F%E6%89%8B%E5%A5%97%E4%BA%86%23) `509.1K 🔥` `+121%`
1. [杭州电梯事件 监控未被覆盖](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%94%B5%E6%A2%AF%E4%BA%8B%E4%BB%B6%20%E7%9B%91%E6%8E%A7%E6%9C%AA%E8%A2%AB%E8%A6%86%E7%9B%96%23) `499.0K 🔥` `+39%`
1. [早春晴朗 (Sunny early spring)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `497.7K 🔥` `+218%`
1. [理想MEGA发布会定档9月2日](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3MEGA%E5%8F%91%E5%B8%83%E4%BC%9A%E5%AE%9A%E6%A1%A39%E6%9C%882%E6%97%A5%23) `452.8K 🔥` `+40%`
1. [电视变彩色后真实世界反了](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%8F%98%E5%BD%A9%E8%89%B2%E5%90%8E%E7%9C%9F%E5%AE%9E%E4%B8%96%E7%95%8C%E5%8F%8D%E4%BA%86%23) `408.2K 🔥` `+77%`
1. [男子去世妻子反常公婆带孙做DNA](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E5%A6%BB%E5%AD%90%E5%8F%8D%E5%B8%B8%E5%85%AC%E5%A9%86%E5%B8%A6%E5%AD%99%E5%81%9ADNA%23) `338.5K 🔥` `+114%`
1. [DeepSeek启动IPO筹备](https://s.weibo.com/weibo?q=%23DeepSeek%E5%90%AF%E5%8A%A8IPO%E7%AD%B9%E5%A4%87%23) `333.7K 🔥` `+109%`
1. [重庆警方通报2行人疑触电](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A52%E8%A1%8C%E4%BA%BA%E7%96%91%E8%A7%A6%E7%94%B5%23) `333.7K 🔥` `+109%`
1. [电视剧醒来开播](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E9%86%92%E6%9D%A5%E5%BC%80%E6%92%AD%23) `313.0K 🔥` `+75%`
1. [实体店铺涨租](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%BD%93%E5%BA%97%E9%93%BA%E6%B6%A8%E7%A7%9F%23) `242.0K 🔥` `+53%`
1. [台风沙德尔大拐弯](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%E5%A4%A7%E6%8B%90%E5%BC%AF%23) `209.8K 🔥` `+36%`
1. [女骑手高速狂飙时速超200公里玩手机](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%AA%91%E6%89%8B%E9%AB%98%E9%80%9F%E7%8B%82%E9%A3%99%E6%97%B6%E9%80%9F%E8%B6%85200%E5%85%AC%E9%87%8C%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `184.2K 🔥` `+21%`
1. [防台风安全防护攻略请收好](https://s.weibo.com/weibo?q=%23%E9%98%B2%E5%8F%B0%E9%A3%8E%E5%AE%89%E5%85%A8%E9%98%B2%E6%8A%A4%E6%94%BB%E7%95%A5%E8%AF%B7%E6%94%B6%E5%A5%BD%23) `820.1K 🔥`
1. [过得好的人最明显的标志 (The most obvious sign of a person who is doing well)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BE%97%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9C%80%E6%98%8E%E6%98%BE%E7%9A%84%E6%A0%87%E5%BF%97%23) `749.2K 🔥`
1. [陈赫被问爱情公寓回归季](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E8%A2%AB%E9%97%AE%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%9B%9E%E5%BD%92%E5%AD%A3%23) `523.7K 🔥`
1. [张真源凌晨开车去接马嘉祺](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%87%8C%E6%99%A8%E5%BC%80%E8%BD%A6%E5%8E%BB%E6%8E%A5%E9%A9%AC%E5%98%89%E7%A5%BA%23) `379.6K 🔥`
1. [复仇者联盟5](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E4%BB%87%E8%80%85%E8%81%94%E7%9B%9F5%23) `367.5K 🔥`
1. [济州岛连环失踪案](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%B7%9E%E5%B2%9B%E8%BF%9E%E7%8E%AF%E5%A4%B1%E8%B8%AA%E6%A1%88%23) `333.7K 🔥`
1. [成毅 打戏严父 (Cheng Yi plays Yan Fu)](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%20%E6%89%93%E6%88%8F%E4%B8%A5%E7%88%B6%23) `223.0K 🔥`
1. [goodthings 难听](https://s.weibo.com/weibo?q=%23goodthings%20%E9%9A%BE%E5%90%AC%23) `213.2K 🔥`
1. [小天才手表回应给101斤女孩判偏重](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%A9%E6%89%8D%E6%89%8B%E8%A1%A8%E5%9B%9E%E5%BA%94%E7%BB%99101%E6%96%A4%E5%A5%B3%E5%AD%A9%E5%88%A4%E5%81%8F%E9%87%8D%23) `168.3K 🔥`
1. [杀害中国女生嫌犯男扮女装混淆警方](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%8A%AF%E7%94%B7%E6%89%AE%E5%A5%B3%E8%A3%85%E6%B7%B7%E6%B7%86%E8%AD%A6%E6%96%B9%23) `861.9K 🔥` `-30%`
1. [报案人就是凶手](https://s.weibo.com/weibo?q=%23%E6%8A%A5%E6%A1%88%E4%BA%BA%E5%B0%B1%E6%98%AF%E5%87%B6%E6%89%8B%23) `734.3K 🔥` `-82%`
1. [洪崖洞目击者称担心触电不敢救 (Witnesses in Hongyadong said they were afraid of being electrocuted and did not dare to save people.)](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B4%96%E6%B4%9E%E7%9B%AE%E5%87%BB%E8%80%85%E7%A7%B0%E6%8B%85%E5%BF%83%E8%A7%A6%E7%94%B5%E4%B8%8D%E6%95%A2%E6%95%91%23) `381.6K 🔥` `-32%`
1. [医生谈1米67女孩101斤被认定偏重](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%B0%881%E7%B1%B367%E5%A5%B3%E5%AD%A9101%E6%96%A4%E8%A2%AB%E8%AE%A4%E5%AE%9A%E5%81%8F%E9%87%8D%23) `310.2K 🔥` `-22%`
1. [济公4制片人杨涛发博了](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%85%AC4%E5%88%B6%E7%89%87%E4%BA%BA%E6%9D%A8%E6%B6%9B%E5%8F%91%E5%8D%9A%E4%BA%86%23) `216.7K 🔥` `-26%`
1. [国自然](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%87%AA%E7%84%B6%23) `216.1K 🔥` `-44%`
1. [请3天假休13天 机票搜索热度大涨](https://s.weibo.com/weibo?q=%23%E8%AF%B73%E5%A4%A9%E5%81%87%E4%BC%9113%E5%A4%A9%20%E6%9C%BA%E7%A5%A8%E6%90%9C%E7%B4%A2%E7%83%AD%E5%BA%A6%E5%A4%A7%E6%B6%A8%23) `194.9K 🔥` `-24%`
1. [赵丽颖对接回应身体状况](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%AF%B9%E6%8E%A5%E5%9B%9E%E5%BA%94%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `169.1K 🔥` `-26%`

Updated at 2026-08-26 13:04:27

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
