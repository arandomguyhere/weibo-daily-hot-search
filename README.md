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

1. [新加坡街头印度人多的吓人 (There are so many Indians on the streets of Singapore that it’s scary)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E8%A1%97%E5%A4%B4%E5%8D%B0%E5%BA%A6%E4%BA%BA%E5%A4%9A%E7%9A%84%E5%90%93%E4%BA%BA%23) `2.1M 🔥` `NEW`
1. [宾利车内藏3千万财物小偷盗走30万](https://s.weibo.com/weibo?q=%23%E5%AE%BE%E5%88%A9%E8%BD%A6%E5%86%85%E8%97%8F3%E5%8D%83%E4%B8%87%E8%B4%A2%E7%89%A9%E5%B0%8F%E5%81%B7%E7%9B%97%E8%B5%B030%E4%B8%87%23) `941.9K 🔥` `NEW`
1. [科技工作者一生坚守的赤诚心声](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E5%B7%A5%E4%BD%9C%E8%80%85%E4%B8%80%E7%94%9F%E5%9D%9A%E5%AE%88%E7%9A%84%E8%B5%A4%E8%AF%9A%E5%BF%83%E5%A3%B0%23) `908.0K 🔥` `NEW`
1. [启境GT7预售价格21.99万起](https://s.weibo.com/weibo?q=%23%E5%90%AF%E5%A2%83GT7%E9%A2%84%E5%94%AE%E4%BB%B7%E6%A0%BC21.99%E4%B8%87%E8%B5%B7%23) `906.3K 🔥` `NEW`
1. [白鹿背着李晨送的包](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%83%8C%E7%9D%80%E6%9D%8E%E6%99%A8%E9%80%81%E7%9A%84%E5%8C%85%23) `906.0K 🔥` `NEW`
1. [梁文峰对华为的态度](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E5%B3%B0%E5%AF%B9%E5%8D%8E%E4%B8%BA%E7%9A%84%E6%80%81%E5%BA%A6%23) `893.3K 🔥` `NEW`
1. [窦靖童紧张到喊妈妈救命](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E7%B4%A7%E5%BC%A0%E5%88%B0%E5%96%8A%E5%A6%88%E5%A6%88%E6%95%91%E5%91%BD%23) `891.6K 🔥` `NEW`
1. [京东秒送618大牌请客](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E7%A7%92%E9%80%81618%E5%A4%A7%E7%89%8C%E8%AF%B7%E5%AE%A2%23) `891.3K 🔥` `NEW`
1. [女子想买1斤荔枝一个操作收到100斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%83%B3%E4%B9%B01%E6%96%A4%E8%8D%94%E6%9E%9D%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E6%94%B6%E5%88%B0100%E6%96%A4%23) `889.6K 🔥` `NEW`
1. [新疆 祛湿气](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%20%E7%A5%9B%E6%B9%BF%E6%B0%94%23) `849.0K 🔥` `NEW`
1. [榴莲仅退款事件商家已报警 (The merchant has called the police over the durian-only refund incident)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%BA%8B%E4%BB%B6%E5%95%86%E5%AE%B6%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `560.8K 🔥` `NEW`
1. [张雪机车继续冲击冠军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%BB%A7%E7%BB%AD%E5%86%B2%E5%87%BB%E5%86%A0%E5%86%9B%23) `554.0K 🔥` `NEW`
1. [林沐然 本升专](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%B2%90%E7%84%B6%20%E6%9C%AC%E5%8D%87%E4%B8%93%23) `552.5K 🔥` `NEW`
1. [高会泡泡](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BC%9A%E6%B3%A1%E6%B3%A1%23) `551.8K 🔥` `NEW`
1. [孟子义cue了李昀锐](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89cue%E4%BA%86%E6%9D%8E%E6%98%80%E9%94%90%23) `522.0K 🔥` `NEW`
1. [性格软才是最大的bug](https://s.weibo.com/weibo?q=%23%E6%80%A7%E6%A0%BC%E8%BD%AF%E6%89%8D%E6%98%AF%E6%9C%80%E5%A4%A7%E7%9A%84bug%23) `494.1K 🔥` `NEW`
1. [演员刘洵去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%88%98%E6%B4%B5%E5%8E%BB%E4%B8%96%23) `405.5K 🔥` `NEW`
1. [特斯拉满血版FSD体验](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E6%BB%A1%E8%A1%80%E7%89%88FSD%E4%BD%93%E9%AA%8C%23) `405.5K 🔥` `NEW`
1. [工体15米装置](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9315%E7%B1%B3%E8%A3%85%E7%BD%AE%23) `405.5K 🔥` `NEW`
1. [至今无人能破内马尔转会费](https://s.weibo.com/weibo?q=%23%E8%87%B3%E4%BB%8A%E6%97%A0%E4%BA%BA%E8%83%BD%E7%A0%B4%E5%86%85%E9%A9%AC%E5%B0%94%E8%BD%AC%E4%BC%9A%E8%B4%B9%23) `405.5K 🔥` `NEW`
1. [白鹿孟子义说今天穿长裤太开心了 (Bailu Meng Ziyi said that she was so happy to wear trousers today)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AD%9F%E5%AD%90%E4%B9%89%E8%AF%B4%E4%BB%8A%E5%A4%A9%E7%A9%BF%E9%95%BF%E8%A3%A4%E5%A4%AA%E5%BC%80%E5%BF%83%E4%BA%86%23) `405.4K 🔥` `NEW`
1. [把糖果当神药卖他还要跟记者表示表示](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E7%B3%96%E6%9E%9C%E5%BD%93%E7%A5%9E%E8%8D%AF%E5%8D%96%E4%BB%96%E8%BF%98%E8%A6%81%E8%B7%9F%E8%AE%B0%E8%80%85%E8%A1%A8%E7%A4%BA%E8%A1%A8%E7%A4%BA%23) `405.4K 🔥` `NEW`
1. [减肥第一名冬瓜苹果煮水](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E7%AC%AC%E4%B8%80%E5%90%8D%E5%86%AC%E7%93%9C%E8%8B%B9%E6%9E%9C%E7%85%AE%E6%B0%B4%23) `405.4K 🔥` `NEW`
1. [浪姐四公小考](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC%E5%B0%8F%E8%80%83%23) `405.3K 🔥` `NEW`
1. [曾沛慈唐艺昕团危险团](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%94%90%E8%89%BA%E6%98%95%E5%9B%A2%E5%8D%B1%E9%99%A9%E5%9B%A2%23) `362.7K 🔥` `NEW`
1. [多名幼儿园小朋友被老师用热熔胶烫伤](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%B0%8F%E6%9C%8B%E5%8F%8B%E8%A2%AB%E8%80%81%E5%B8%88%E7%94%A8%E7%83%AD%E7%86%94%E8%83%B6%E7%83%AB%E4%BC%A4%23) `324.2K 🔥` `NEW`
1. [susan说小考倒一](https://s.weibo.com/weibo?q=%23susan%E8%AF%B4%E5%B0%8F%E8%80%83%E5%80%92%E4%B8%80%23) `314.0K 🔥` `NEW`
1. [小狗将瘫痪主人拽下床躲过大火](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%B0%86%E7%98%AB%E7%97%AA%E4%B8%BB%E4%BA%BA%E6%8B%BD%E4%B8%8B%E5%BA%8A%E8%BA%B2%E8%BF%87%E5%A4%A7%E7%81%AB%23) `275.6K 🔥` `NEW`
1. [洪潇为虞书欣发声](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E6%BD%87%E4%B8%BA%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8F%91%E5%A3%B0%23) `268.1K 🔥` `NEW`
1. [黄仁勋谈华为新突破](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%B0%88%E5%8D%8E%E4%B8%BA%E6%96%B0%E7%AA%81%E7%A0%B4%23) `265.7K 🔥` `NEW`
1. [保时捷为避奥迪猛打方向盘撞向路人 (Porsche swerves to avoid Audi and hits passerby)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E4%B8%BA%E9%81%BF%E5%A5%A5%E8%BF%AA%E7%8C%9B%E6%89%93%E6%96%B9%E5%90%91%E7%9B%98%E6%92%9E%E5%90%91%E8%B7%AF%E4%BA%BA%23) `264.9K 🔥` `NEW`
1. [京东黄金手链92折](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E9%BB%84%E9%87%91%E6%89%8B%E9%93%BE92%E6%8A%98%23) `261.1K 🔥` `NEW`
1. [6月狗屎运最旺的星座](https://s.weibo.com/weibo?q=%236%E6%9C%88%E7%8B%97%E5%B1%8E%E8%BF%90%E6%9C%80%E6%97%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `259.5K 🔥` `NEW`
1. [再见朋友综艺真要来了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%E7%BB%BC%E8%89%BA%E7%9C%9F%E8%A6%81%E6%9D%A5%E4%BA%86%23) `250.2K 🔥` `NEW`
1. [湖南衡阳发生氢氟酸罐车泄漏事件](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E8%A1%A1%E9%98%B3%E5%8F%91%E7%94%9F%E6%B0%A2%E6%B0%9F%E9%85%B8%E7%BD%90%E8%BD%A6%E6%B3%84%E6%BC%8F%E4%BA%8B%E4%BB%B6%23) `230.7K 🔥` `NEW`
1. [第五人格赛事](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E8%B5%9B%E4%BA%8B%23) `167.8K 🔥` `NEW`
1. [被呵斥幼童仅在飞机刚降落时不适哭泣](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%91%B5%E6%96%A5%E5%B9%BC%E7%AB%A5%E4%BB%85%E5%9C%A8%E9%A3%9E%E6%9C%BA%E5%88%9A%E9%99%8D%E8%90%BD%E6%97%B6%E4%B8%8D%E9%80%82%E5%93%AD%E6%B3%A3%23) `157.5K 🔥` `NEW`
1. [周六福足银手镯事件](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%85%AD%E7%A6%8F%E8%B6%B3%E9%93%B6%E6%89%8B%E9%95%AF%E4%BA%8B%E4%BB%B6%23) `155.0K 🔥` `NEW`
1. [误诊致流产女子大出血才知怀孕](https://s.weibo.com/weibo?q=%23%E8%AF%AF%E8%AF%8A%E8%87%B4%E6%B5%81%E4%BA%A7%E5%A5%B3%E5%AD%90%E5%A4%A7%E5%87%BA%E8%A1%80%E6%89%8D%E7%9F%A5%E6%80%80%E5%AD%95%23) `147.4K 🔥` `NEW`
1. [外卖大战后1600万骑手过剩](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%A4%A7%E6%88%98%E5%90%8E1600%E4%B8%87%E9%AA%91%E6%89%8B%E8%BF%87%E5%89%A9%23) `144.3K 🔥` `NEW`
1. [结石姐cue华晨宇 (Stone sister cue Hua Chenyu)](https://s.weibo.com/weibo?q=%23%E7%BB%93%E7%9F%B3%E5%A7%90cue%E5%8D%8E%E6%99%A8%E5%AE%87%23) `141.0K 🔥` `NEW`
1. [男子当街殴打女子孩子交警果断出手](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BD%93%E8%A1%97%E6%AE%B4%E6%89%93%E5%A5%B3%E5%AD%90%E5%AD%A9%E5%AD%90%E4%BA%A4%E8%AD%A6%E6%9E%9C%E6%96%AD%E5%87%BA%E6%89%8B%23) `139.4K 🔥` `NEW`
1. [杨紫回应网友开始理解邱莹莹了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%9B%9E%E5%BA%94%E7%BD%91%E5%8F%8B%E5%BC%80%E5%A7%8B%E7%90%86%E8%A7%A3%E9%82%B1%E8%8E%B9%E8%8E%B9%E4%BA%86%23) `139.1K 🔥` `NEW`
1. [耀眼](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%23) `134.8K 🔥` `NEW`
1. [曝赛力斯将发布新品牌赛豆科技](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B5%9B%E5%8A%9B%E6%96%AF%E5%B0%86%E5%8F%91%E5%B8%83%E6%96%B0%E5%93%81%E7%89%8C%E8%B5%9B%E8%B1%86%E7%A7%91%E6%8A%80%23) `130.2K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `129.6K 🔥` `NEW`
1. [科技股调整原因](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E8%82%A1%E8%B0%83%E6%95%B4%E5%8E%9F%E5%9B%A0%23) `129.6K 🔥` `NEW`
1. [下周天考数学 可下周天是高考](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%91%A8%E5%A4%A9%E8%80%83%E6%95%B0%E5%AD%A6%20%E5%8F%AF%E4%B8%8B%E5%91%A8%E5%A4%A9%E6%98%AF%E9%AB%98%E8%80%83%23) `549.0K 🔥` `+151%`
1. [林沐然转学全面停止](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%B2%90%E7%84%B6%E8%BD%AC%E5%AD%A6%E5%85%A8%E9%9D%A2%E5%81%9C%E6%AD%A2%23) `416.6K 🔥` `+53%`
1. [魏如萱发长文](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E5%8F%91%E9%95%BF%E6%96%87%23) `250.2K 🔥` `-55%`
1. [多方回应女大学生被骗进戒网瘾学校 (Multiple responses to female college students being tricked into enrolling in Internet addiction treatment school)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%A2%AB%E9%AA%97%E8%BF%9B%E6%88%92%E7%BD%91%E7%98%BE%E5%AD%A6%E6%A0%A1%23) `225.2K 🔥` `-21%`
1. [饿着入睡对胃肠更好吗 (Is sleeping hungry better for your gastrointestinal health?)](https://s.weibo.com/weibo?q=%23%E9%A5%BF%E7%9D%80%E5%85%A5%E7%9D%A1%E5%AF%B9%E8%83%83%E8%82%A0%E6%9B%B4%E5%A5%BD%E5%90%97%23) `134.6K 🔥` `-59%`

Updated at 2026-05-30 13:30:35

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
