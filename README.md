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

1. [主角 泄漏 (Protagonist leaked)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E6%B3%84%E6%BC%8F%23) `1.5M 🔥` `NEW`
1. [神21神23交接空间站钥匙](https://s.weibo.com/weibo?q=%23%E7%A5%9E21%E7%A5%9E23%E4%BA%A4%E6%8E%A5%E7%A9%BA%E9%97%B4%E7%AB%99%E9%92%A5%E5%8C%99%23) `732.5K 🔥` `NEW`
1. [活荔枝 死荔枝](https://s.weibo.com/weibo?q=%23%E6%B4%BB%E8%8D%94%E6%9E%9D%20%E6%AD%BB%E8%8D%94%E6%9E%9D%23) `708.4K 🔥` `NEW`
1. [浪姐节目组发甲醛检测报告](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%8A%82%E7%9B%AE%E7%BB%84%E5%8F%91%E7%94%B2%E9%86%9B%E6%A3%80%E6%B5%8B%E6%8A%A5%E5%91%8A%23) `681.7K 🔥` `NEW`
1. [张凌赫第一个发现王玉雯不见了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%91%E7%8E%B0%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%B8%8D%E8%A7%81%E4%BA%86%23) `614.5K 🔥` `NEW`
1. [晨光携京东给考生送福](https://s.weibo.com/weibo?q=%23%E6%99%A8%E5%85%89%E6%90%BA%E4%BA%AC%E4%B8%9C%E7%BB%99%E8%80%83%E7%94%9F%E9%80%81%E7%A6%8F%23) `602.1K 🔥` `NEW`
1. [现在的鞋底越做越窄了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E9%9E%8B%E5%BA%95%E8%B6%8A%E5%81%9A%E8%B6%8A%E7%AA%84%E4%BA%86%23) `536.7K 🔥` `NEW`
1. [李斌回应50万买宝马还是买蔚来](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%8C%E5%9B%9E%E5%BA%9450%E4%B8%87%E4%B9%B0%E5%AE%9D%E9%A9%AC%E8%BF%98%E6%98%AF%E4%B9%B0%E8%94%9A%E6%9D%A5%23) `287.1K 🔥` `NEW`
1. [小米超大众丰田成全球新能源第七](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%B6%85%E5%A4%A7%E4%BC%97%E4%B8%B0%E7%94%B0%E6%88%90%E5%85%A8%E7%90%83%E6%96%B0%E8%83%BD%E6%BA%90%E7%AC%AC%E4%B8%83%23) `286.2K 🔥` `NEW`
1. [BLG五人全员一阵](https://s.weibo.com/weibo?q=%23BLG%E4%BA%94%E4%BA%BA%E5%85%A8%E5%91%98%E4%B8%80%E9%98%B5%23) `284.1K 🔥` `NEW`
1. [曝刘恺威新恋情 (Hawick Lau's new relationship revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E6%81%BA%E5%A8%81%E6%96%B0%E6%81%8B%E6%83%85%23) `281.0K 🔥` `NEW`
1. [孙怡长文告别三公](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%95%BF%E6%96%87%E5%91%8A%E5%88%AB%E4%B8%89%E5%85%AC%23) `276.2K 🔥` `NEW`
1. [王安宇随手一拍都是大片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E9%9A%8F%E6%89%8B%E4%B8%80%E6%8B%8D%E9%83%BD%E6%98%AF%E5%A4%A7%E7%89%87%23) `273.4K 🔥` `NEW`
1. [美国年轻人街头围攻外卖机器人](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B9%B4%E8%BD%BB%E4%BA%BA%E8%A1%97%E5%A4%B4%E5%9B%B4%E6%94%BB%E5%A4%96%E5%8D%96%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `268.2K 🔥` `NEW`
1. [多区洗衣机会成为主流吗](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%8C%BA%E6%B4%97%E8%A1%A3%E6%9C%BA%E4%BC%9A%E6%88%90%E4%B8%BA%E4%B8%BB%E6%B5%81%E5%90%97%23) `265.8K 🔥` `NEW`
1. [亚朵酒店道歉8个月后再现卫生问题](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%9C%B5%E9%85%92%E5%BA%97%E9%81%93%E6%AD%898%E4%B8%AA%E6%9C%88%E5%90%8E%E5%86%8D%E7%8E%B0%E5%8D%AB%E7%94%9F%E9%97%AE%E9%A2%98%23) `264.4K 🔥` `NEW`
1. [秦昊说被伊能静删习惯了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E8%AF%B4%E8%A2%AB%E4%BC%8A%E8%83%BD%E9%9D%99%E5%88%A0%E4%B9%A0%E6%83%AF%E4%BA%86%23) `262.4K 🔥` `NEW`
1. [曝景甜降价出售上海豪宅](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%99%AF%E7%94%9C%E9%99%8D%E4%BB%B7%E5%87%BA%E5%94%AE%E4%B8%8A%E6%B5%B7%E8%B1%AA%E5%AE%85%23) `259.6K 🔥` `NEW`
1. [会玩是一种很稀缺的能力](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E7%8E%A9%E6%98%AF%E4%B8%80%E7%A7%8D%E5%BE%88%E7%A8%80%E7%BC%BA%E7%9A%84%E8%83%BD%E5%8A%9B%23) `258.4K 🔥` `NEW`
1. [Liz鼻部疑似整形](https://s.weibo.com/weibo?q=%23Liz%E9%BC%BB%E9%83%A8%E7%96%91%E4%BC%BC%E6%95%B4%E5%BD%A2%23) `258.2K 🔥` `NEW`
1. [孟加拉国酷似特朗普水牛宰杀前得救 (Bangladesh lookalike Trump buffalo saved before slaughter)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%8A%A0%E6%8B%89%E5%9B%BD%E9%85%B7%E4%BC%BC%E7%89%B9%E6%9C%97%E6%99%AE%E6%B0%B4%E7%89%9B%E5%AE%B0%E6%9D%80%E5%89%8D%E5%BE%97%E6%95%91%23) `254.9K 🔥` `NEW`
1. [孙杨被张豆豆拉黑后用监控喊话](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E8%A2%AB%E5%BC%A0%E8%B1%86%E8%B1%86%E6%8B%89%E9%BB%91%E5%90%8E%E7%94%A8%E7%9B%91%E6%8E%A7%E5%96%8A%E8%AF%9D%23) `253.4K 🔥` `NEW`
1. [iG仁川人只剩JackeyLove](https://s.weibo.com/weibo?q=%23iG%E4%BB%81%E5%B7%9D%E4%BA%BA%E5%8F%AA%E5%89%A9JackeyLove%23) `251.6K 🔥` `NEW`
1. [司机将被丢弃娃娃洗净挂满垃圾车](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E5%B0%86%E8%A2%AB%E4%B8%A2%E5%BC%83%E5%A8%83%E5%A8%83%E6%B4%97%E5%87%80%E6%8C%82%E6%BB%A1%E5%9E%83%E5%9C%BE%E8%BD%A6%23) `249.3K 🔥` `NEW`
1. [父母会好奇你的生活痕迹](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E4%BC%9A%E5%A5%BD%E5%A5%87%E4%BD%A0%E7%9A%84%E7%94%9F%E6%B4%BB%E7%97%95%E8%BF%B9%23) `248.6K 🔥` `NEW`
1. [伊朗革命卫队据报向美油轮开火](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E6%8D%AE%E6%8A%A5%E5%90%91%E7%BE%8E%E6%B2%B9%E8%BD%AE%E5%BC%80%E7%81%AB%23) `233.6K 🔥` `NEW`
1. [5类人要少吃香蕉](https://s.weibo.com/weibo?q=%235%E7%B1%BB%E4%BA%BA%E8%A6%81%E5%B0%91%E5%90%83%E9%A6%99%E8%95%89%23) `233.2K 🔥` `NEW`
1. [536分捡漏上北大学生作品已不可见](https://s.weibo.com/weibo?q=%23536%E5%88%86%E6%8D%A1%E6%BC%8F%E4%B8%8A%E5%8C%97%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%BD%9C%E5%93%81%E5%B7%B2%E4%B8%8D%E5%8F%AF%E8%A7%81%23) `212.0K 🔥` `NEW`
1. [养狗后正式确诊为子涵妈](https://s.weibo.com/weibo?q=%23%E5%85%BB%E7%8B%97%E5%90%8E%E6%AD%A3%E5%BC%8F%E7%A1%AE%E8%AF%8A%E4%B8%BA%E5%AD%90%E6%B6%B5%E5%A6%88%23) `194.3K 🔥` `NEW`
1. [严浩翔和老师合影](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%92%8C%E8%80%81%E5%B8%88%E5%90%88%E5%BD%B1%23) `190.3K 🔥` `NEW`
1. [iPhoneUltra保护壳曝光 (iPhone Ultra protective case exposed)](https://s.weibo.com/weibo?q=%23iPhoneUltra%E4%BF%9D%E6%8A%A4%E5%A3%B3%E6%9B%9D%E5%85%89%23) `187.5K 🔥` `NEW`
1. [领克10+刷新百万跑车圈速记录](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B10%2B%E5%88%B7%E6%96%B0%E7%99%BE%E4%B8%87%E8%B7%91%E8%BD%A6%E5%9C%88%E9%80%9F%E8%AE%B0%E5%BD%95%23) `181.6K 🔥` `NEW`
1. [主角刘红兵疑似车祸去世](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E5%88%98%E7%BA%A2%E5%85%B5%E7%96%91%E4%BC%BC%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96%23) `180.8K 🔥` `NEW`
1. [朱志鑫一口气发了100张照片](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E4%B8%80%E5%8F%A3%E6%B0%94%E5%8F%91%E4%BA%86100%E5%BC%A0%E7%85%A7%E7%89%87%23) `180.5K 🔥` `NEW`
1. [男子疑遭妻子家暴后跳楼警方不立案](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%96%91%E9%81%AD%E5%A6%BB%E5%AD%90%E5%AE%B6%E6%9A%B4%E5%90%8E%E8%B7%B3%E6%A5%BC%E8%AD%A6%E6%96%B9%E4%B8%8D%E7%AB%8B%E6%A1%88%23) `178.9K 🔥` `NEW`
1. [国际月经日](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E6%9C%88%E7%BB%8F%E6%97%A5%23) `176.9K 🔥` `NEW`
1. [漳州泡药杨梅已损失超1.2亿](https://s.weibo.com/weibo?q=%23%E6%BC%B3%E5%B7%9E%E6%B3%A1%E8%8D%AF%E6%9D%A8%E6%A2%85%E5%B7%B2%E6%8D%9F%E5%A4%B1%E8%B6%851.2%E4%BA%BF%23) `155.3K 🔥` `NEW`
1. [AG赵腾 赛训团队无任何变动](https://s.weibo.com/weibo?q=%23AG%E8%B5%B5%E8%85%BE%20%E8%B5%9B%E8%AE%AD%E5%9B%A2%E9%98%9F%E6%97%A0%E4%BB%BB%E4%BD%95%E5%8F%98%E5%8A%A8%23) `153.3K 🔥` `NEW`
1. [李心洁终于知道罗伯特是AI了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%BF%83%E6%B4%81%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E7%BD%97%E4%BC%AF%E7%89%B9%E6%98%AFAI%E4%BA%86%23) `153.1K 🔥` `NEW`
1. [吴世勋全中文安慰粉丝](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E5%85%A8%E4%B8%AD%E6%96%87%E5%AE%89%E6%85%B0%E7%B2%89%E4%B8%9D%23) `153.1K 🔥` `NEW`
1. [711雪糕 劣爆了 (711 ice cream is so bad)](https://s.weibo.com/weibo?q=%23711%E9%9B%AA%E7%B3%95%20%E5%8A%A3%E7%88%86%E4%BA%86%23) `882.6K 🔥` `-35%`
1. [小巷人家2是原班人马](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%E6%98%AF%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `280.3K 🔥` `-65%`
1. [周一请假和周五请假是不一样的](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B8%80%E8%AF%B7%E5%81%87%E5%92%8C%E5%91%A8%E4%BA%94%E8%AF%B7%E5%81%87%E6%98%AF%E4%B8%8D%E4%B8%80%E6%A0%B7%E7%9A%84%23) `277.0K 🔥` `-66%`
1. [印度留学生称感觉内脏在沸腾](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%95%99%E5%AD%A6%E7%94%9F%E7%A7%B0%E6%84%9F%E8%A7%89%E5%86%85%E8%84%8F%E5%9C%A8%E6%B2%B8%E8%85%BE%23) `272.2K 🔥` `-28%`
1. [孕检一切正常孩子一岁多确诊SMA](https://s.weibo.com/weibo?q=%23%E5%AD%95%E6%A3%80%E4%B8%80%E5%88%87%E6%AD%A3%E5%B8%B8%E5%AD%A9%E5%AD%90%E4%B8%80%E5%B2%81%E5%A4%9A%E7%A1%AE%E8%AF%8ASMA%23) `268.7K 🔥` `-34%`
1. [杭州非法试管婴儿事件情况通报](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%9D%9E%E6%B3%95%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%E4%BA%8B%E4%BB%B6%E6%83%85%E5%86%B5%E9%80%9A%E6%8A%A5%23) `236.4K 🔥` `-71%`
1. [陈小希爸妈为沈月发声](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E5%B8%8C%E7%88%B8%E5%A6%88%E4%B8%BA%E6%B2%88%E6%9C%88%E5%8F%91%E5%A3%B0%23) `234.5K 🔥` `-44%`
1. [浪姐宿舍 甲醛 (Sister Lang's Dormitory Formaldehyde)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%AE%BF%E8%88%8D%20%E7%94%B2%E9%86%9B%23) `219.9K 🔥` `-48%`
1. [芒果一口气宣了89部大剧 (Mango announced 89 dramas in one breath)](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E4%B8%80%E5%8F%A3%E6%B0%94%E5%AE%A3%E4%BA%8689%E9%83%A8%E5%A4%A7%E5%89%A7%23) `160.7K 🔥` `-91%`
1. [詹姆斯阵营立场正式曝光](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E9%98%B5%E8%90%A5%E7%AB%8B%E5%9C%BA%E6%AD%A3%E5%BC%8F%E6%9B%9D%E5%85%89%23) `153.1K 🔥` `-58%`

Updated at 2026-05-28 16:29:34

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
