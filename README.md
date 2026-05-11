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

1. [孙颖莎晒照总结世乒赛 (Sun Yingsha takes photos to summarize the World Table Tennis Championships)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%99%92%E7%85%A7%E6%80%BB%E7%BB%93%E4%B8%96%E4%B9%92%E8%B5%9B%23) `1.1M 🔥` `NEW`
1. [一图读懂家庭应急物资该备什么](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E8%AF%BB%E6%87%82%E5%AE%B6%E5%BA%AD%E5%BA%94%E6%80%A5%E7%89%A9%E8%B5%84%E8%AF%A5%E5%A4%87%E4%BB%80%E4%B9%88%23) `675.5K 🔥` `NEW`
1. [李晨 五哈](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%20%E4%BA%94%E5%93%88%23) `659.2K 🔥` `NEW`
1. [国乐无双内娱最听劝的音综](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%90%E6%97%A0%E5%8F%8C%E5%86%85%E5%A8%B1%E6%9C%80%E5%90%AC%E5%8A%9D%E7%9A%84%E9%9F%B3%E7%BB%BC%23) `547.0K 🔥` `NEW`
1. [三亚游泳耳朵里爬出了螃蟹](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E6%B8%B8%E6%B3%B3%E8%80%B3%E6%9C%B5%E9%87%8C%E7%88%AC%E5%87%BA%E4%BA%86%E8%9E%83%E8%9F%B9%23) `457.2K 🔥` `NEW`
1. [南京山姆欠租金887万](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%B1%B1%E5%A7%86%E6%AC%A0%E7%A7%9F%E9%87%91887%E4%B8%87%23) `352.2K 🔥` `NEW`
1. [武汉大学犯了不该回应时乱回应大忌](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%E7%8A%AF%E4%BA%86%E4%B8%8D%E8%AF%A5%E5%9B%9E%E5%BA%94%E6%97%B6%E4%B9%B1%E5%9B%9E%E5%BA%94%E5%A4%A7%E5%BF%8C%23) `348.5K 🔥` `NEW`
1. [公司欠债倒闭五只猫咪员工被法拍](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E6%AC%A0%E5%80%BA%E5%80%92%E9%97%AD%E4%BA%94%E5%8F%AA%E7%8C%AB%E5%92%AA%E5%91%98%E5%B7%A5%E8%A2%AB%E6%B3%95%E6%8B%8D%23) `347.0K 🔥` `NEW`
1. [A股进入牛市下半场](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%BF%9B%E5%85%A5%E7%89%9B%E5%B8%82%E4%B8%8B%E5%8D%8A%E5%9C%BA%23) `345.4K 🔥` `NEW`
1. [中方决定不同意台湾地区参加世卫大会](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%86%B3%E5%AE%9A%E4%B8%8D%E5%90%8C%E6%84%8F%E5%8F%B0%E6%B9%BE%E5%9C%B0%E5%8C%BA%E5%8F%82%E5%8A%A0%E4%B8%96%E5%8D%AB%E5%A4%A7%E4%BC%9A%23) `343.4K 🔥` `NEW`
1. [王俊凯出发录中餐厅路透 (Wang Junkai sets out to record Chinese restaurant Reuters)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%87%BA%E5%8F%91%E5%BD%95%E4%B8%AD%E9%A4%90%E5%8E%85%E8%B7%AF%E9%80%8F%23) `343.4K 🔥` `NEW`
1. [穆祉丞 个代](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E4%B8%AA%E4%BB%A3%23) `332.5K 🔥` `NEW`
1. [微信转账组合支付](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%BD%AC%E8%B4%A6%E7%BB%84%E5%90%88%E6%94%AF%E4%BB%98%23) `311.9K 🔥` `NEW`
1. [优酷续集 原班人马](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B7%E7%BB%AD%E9%9B%86%20%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `302.9K 🔥` `NEW`
1. [美国总统外访后勤保障规模有多大](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%80%BB%E7%BB%9F%E5%A4%96%E8%AE%BF%E5%90%8E%E5%8B%A4%E4%BF%9D%E9%9A%9C%E8%A7%84%E6%A8%A1%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `246.1K 🔥` `NEW`
1. [嫁金钗](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%23) `245.9K 🔥` `NEW`
1. [闪闪看见黄一鸣整容害怕](https://s.weibo.com/weibo?q=%23%E9%97%AA%E9%97%AA%E7%9C%8B%E8%A7%81%E9%BB%84%E4%B8%80%E9%B8%A3%E6%95%B4%E5%AE%B9%E5%AE%B3%E6%80%95%23) `237.6K 🔥` `NEW`
1. [小米新一代智能座舱入网](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0%E4%B8%80%E4%BB%A3%E6%99%BA%E8%83%BD%E5%BA%A7%E8%88%B1%E5%85%A5%E7%BD%91%23) `237.5K 🔥` `NEW`
1. [叔叔起诉民政局要求分割侄子遗产](https://s.weibo.com/weibo?q=%23%E5%8F%94%E5%8F%94%E8%B5%B7%E8%AF%89%E6%B0%91%E6%94%BF%E5%B1%80%E8%A6%81%E6%B1%82%E5%88%86%E5%89%B2%E4%BE%84%E5%AD%90%E9%81%97%E4%BA%A7%23) `237.2K 🔥` `NEW`
1. [杨丽萍教小酒窝孔雀舞](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%BD%E8%90%8D%E6%95%99%E5%B0%8F%E9%85%92%E7%AA%9D%E5%AD%94%E9%9B%80%E8%88%9E%23) `237.2K 🔥` `NEW`
1. [唐艺昕的妆像当年郑恺化的 (Tang Yixin’s makeup resembles that of Zheng Kai)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E7%9A%84%E5%A6%86%E5%83%8F%E5%BD%93%E5%B9%B4%E9%83%91%E6%81%BA%E5%8C%96%E7%9A%84%23) `236.8K 🔥` `NEW`
1. [AI 掠夺水资源](https://s.weibo.com/weibo?q=%23AI%20%E6%8E%A0%E5%A4%BA%E6%B0%B4%E8%B5%84%E6%BA%90%23) `236.7K 🔥` `NEW`
1. [女子离婚多年被判共还前夫百万欠债](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A%E5%A4%9A%E5%B9%B4%E8%A2%AB%E5%88%A4%E5%85%B1%E8%BF%98%E5%89%8D%E5%A4%AB%E7%99%BE%E4%B8%87%E6%AC%A0%E5%80%BA%23) `236.6K 🔥` `NEW`
1. [天舟十号将人工胚胎送上太空](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%88%9F%E5%8D%81%E5%8F%B7%E5%B0%86%E4%BA%BA%E5%B7%A5%E8%83%9A%E8%83%8E%E9%80%81%E4%B8%8A%E5%A4%AA%E7%A9%BA%23) `236.3K 🔥` `NEW`
1. [梁靖崑夺冠后回复妻子打错字](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E5%A4%BA%E5%86%A0%E5%90%8E%E5%9B%9E%E5%A4%8D%E5%A6%BB%E5%AD%90%E6%89%93%E9%94%99%E5%AD%97%23) `235.8K 🔥` `NEW`
1. [虞书欣说不再依赖姐姐梗过时了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%AF%B4%E4%B8%8D%E5%86%8D%E4%BE%9D%E8%B5%96%E5%A7%90%E5%A7%90%E6%A2%97%E8%BF%87%E6%97%B6%E4%BA%86%23) `235.7K 🔥` `NEW`
1. [建议不要给自己的人生加重量](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E7%BB%99%E8%87%AA%E5%B7%B1%E7%9A%84%E4%BA%BA%E7%94%9F%E5%8A%A0%E9%87%8D%E9%87%8F%23) `235.3K 🔥` `NEW`
1. [女孩误拧油门150斤卤菜全毁](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%AF%AF%E6%8B%A7%E6%B2%B9%E9%97%A8150%E6%96%A4%E5%8D%A4%E8%8F%9C%E5%85%A8%E6%AF%81%23) `235.2K 🔥` `NEW`
1. [为什么上班后胖得越来越快](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8A%E7%8F%AD%E5%90%8E%E8%83%96%E5%BE%97%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%BF%AB%23) `232.1K 🔥` `NEW`
1. [马龙总结伦敦世乒赛](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E6%80%BB%E7%BB%93%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%23) `211.2K 🔥` `NEW`
1. [宋妍霏机场偶遇沈梦辰杜海涛 (Song Yanfei meets Shen Mengchen and Du Haitao at the airport)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A6%8D%E9%9C%8F%E6%9C%BA%E5%9C%BA%E5%81%B6%E9%81%87%E6%B2%88%E6%A2%A6%E8%BE%B0%E6%9D%9C%E6%B5%B7%E6%B6%9B%23) `199.0K 🔥` `NEW`
1. [突然意识到会做饭的人有多厉害](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E4%BC%9A%E5%81%9A%E9%A5%AD%E7%9A%84%E4%BA%BA%E6%9C%89%E5%A4%9A%E5%8E%89%E5%AE%B3%23) `196.8K 🔥` `NEW`
1. [A股飙升见证历史](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%A3%99%E5%8D%87%E8%A7%81%E8%AF%81%E5%8E%86%E5%8F%B2%23) `194.6K 🔥` `NEW`
1. [打印店回应高中生凌晨外出复印失联](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8D%B0%E5%BA%97%E5%9B%9E%E5%BA%94%E9%AB%98%E4%B8%AD%E7%94%9F%E5%87%8C%E6%99%A8%E5%A4%96%E5%87%BA%E5%A4%8D%E5%8D%B0%E5%A4%B1%E8%81%94%23) `182.5K 🔥` `NEW`
1. [本田中国4月销量腰斩](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E7%94%B0%E4%B8%AD%E5%9B%BD4%E6%9C%88%E9%94%80%E9%87%8F%E8%85%B0%E6%96%A9%23) `166.4K 🔥` `NEW`
1. [美开发者基于DeepSeek做爆款工具](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%BC%80%E5%8F%91%E8%80%85%E5%9F%BA%E4%BA%8EDeepSeek%E5%81%9A%E7%88%86%E6%AC%BE%E5%B7%A5%E5%85%B7%23) `161.5K 🔥` `NEW`
1. [李嘉格男友恋爱后胖了20斤](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E6%A0%BC%E7%94%B7%E5%8F%8B%E6%81%8B%E7%88%B1%E5%90%8E%E8%83%96%E4%BA%8620%E6%96%A4%23) `161.2K 🔥` `NEW`
1. [雪糕是糖油混合物具象化了](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E7%B3%95%E6%98%AF%E7%B3%96%E6%B2%B9%E6%B7%B7%E5%90%88%E7%89%A9%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `623.1K 🔥` `+66%`
1. [村驴减脂餐教程](https://s.weibo.com/weibo?q=%23%E6%9D%91%E9%A9%B4%E5%87%8F%E8%84%82%E9%A4%90%E6%95%99%E7%A8%8B%23) `497.0K 🔥` `+102%`
1. [前台笑了半小时才说出wifi密码](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%8F%B0%E7%AC%91%E4%BA%86%E5%8D%8A%E5%B0%8F%E6%97%B6%E6%89%8D%E8%AF%B4%E5%87%BAwifi%E5%AF%86%E7%A0%81%23) `599.0K 🔥`
1. [陈伟霆何穗儿子小名 (William Chan's nickname for He Sui's son)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%BD%95%E7%A9%97%E5%84%BF%E5%AD%90%E5%B0%8F%E5%90%8D%23) `248.4K 🔥`
1. [比亚迪海鸥也能上激光雷达了](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E6%B5%B7%E9%B8%A5%E4%B9%9F%E8%83%BD%E4%B8%8A%E6%BF%80%E5%85%89%E9%9B%B7%E8%BE%BE%E4%BA%86%23) `236.1K 🔥`
1. [梅婷12岁女儿好高](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A9%B712%E5%B2%81%E5%A5%B3%E5%84%BF%E5%A5%BD%E9%AB%98%23) `197.2K 🔥`
1. [优酷9部剧集官宣第二部](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B79%E9%83%A8%E5%89%A7%E9%9B%86%E5%AE%98%E5%AE%A3%E7%AC%AC%E4%BA%8C%E9%83%A8%23) `841.8K 🔥` `-24%`
1. [贾跃亭被任命为FF全球CEO](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E8%B7%83%E4%BA%AD%E8%A2%AB%E4%BB%BB%E5%91%BD%E4%B8%BAFF%E5%85%A8%E7%90%83CEO%23) `351.9K 🔥` `-47%`
1. [建议爱躺着玩手机的反复观看](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%88%B1%E8%BA%BA%E7%9D%80%E7%8E%A9%E6%89%8B%E6%9C%BA%E7%9A%84%E5%8F%8D%E5%A4%8D%E8%A7%82%E7%9C%8B%23) `235.5K 🔥` `-78%`
1. [中方宣布特朗普访华日期 (China announces date of Trump’s visit to China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%AE%A3%E5%B8%83%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%97%A5%E6%9C%9F%23) `208.0K 🔥` `-79%`
1. [少年歌行2等了四年终于开拍](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%B9%B4%E6%AD%8C%E8%A1%8C2%E7%AD%89%E4%BA%86%E5%9B%9B%E5%B9%B4%E7%BB%88%E4%BA%8E%E5%BC%80%E6%8B%8D%23) `172.5K 🔥` `-69%`
1. [刘涛天庭编制](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E5%A4%A9%E5%BA%AD%E7%BC%96%E5%88%B6%23) `163.9K 🔥` `-75%`
1. [暗河传2官宣](https://s.weibo.com/weibo?q=%23%E6%9A%97%E6%B2%B3%E4%BC%A02%E5%AE%98%E5%AE%A3%23) `163.1K 🔥` `-86%`

Updated at 2026-05-11 16:37:37

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
