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

1. [三个维度解读前7月国民经济成绩单 (Interpretation of the national economic report card for the first seven months from three dimensions)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%AA%E7%BB%B4%E5%BA%A6%E8%A7%A3%E8%AF%BB%E5%89%8D7%E6%9C%88%E5%9B%BD%E6%B0%91%E7%BB%8F%E6%B5%8E%E6%88%90%E7%BB%A9%E5%8D%95%23) `702.1K 🔥` `NEW`
1. [酒局被猥亵女生照片被网上传播](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%B1%80%E8%A2%AB%E7%8C%A5%E4%BA%B5%E5%A5%B3%E7%94%9F%E7%85%A7%E7%89%87%E8%A2%AB%E7%BD%91%E4%B8%8A%E4%BC%A0%E6%92%AD%23) `666.8K 🔥` `NEW`
1. [李昀锐孟子义七夕物料不像演的](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%83%E5%A4%95%E7%89%A9%E6%96%99%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `400.8K 🔥` `NEW`
1. [小米澎程N70二排空间比腿长](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN70%E4%BA%8C%E6%8E%92%E7%A9%BA%E9%97%B4%E6%AF%94%E8%85%BF%E9%95%BF%23) `397.3K 🔥` `NEW`
1. [蒙古不法分子擅闯中资营地侮辱员工](https://s.weibo.com/weibo?q=%23%E8%92%99%E5%8F%A4%E4%B8%8D%E6%B3%95%E5%88%86%E5%AD%90%E6%93%85%E9%97%AF%E4%B8%AD%E8%B5%84%E8%90%A5%E5%9C%B0%E4%BE%AE%E8%BE%B1%E5%91%98%E5%B7%A5%23) `395.5K 🔥` `NEW`
1. [杭州酒局受害女生一度情绪崩溃](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E5%8F%97%E5%AE%B3%E5%A5%B3%E7%94%9F%E4%B8%80%E5%BA%A6%E6%83%85%E7%BB%AA%E5%B4%A9%E6%BA%83%23) `393.0K 🔥` `NEW`
1. [小沈阳姚琛就这样陪曾辉胡闹](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E5%A7%9A%E7%90%9B%E5%B0%B1%E8%BF%99%E6%A0%B7%E9%99%AA%E6%9B%BE%E8%BE%89%E8%83%A1%E9%97%B9%23) `389.6K 🔥` `NEW`
1. [七夕体验被张凌赫周边包围的快乐](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E4%BD%93%E9%AA%8C%E8%A2%AB%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%91%A8%E8%BE%B9%E5%8C%85%E5%9B%B4%E7%9A%84%E5%BF%AB%E4%B9%90%23) `387.8K 🔥` `NEW`
1. [律师提醒酒局遇骚扰别忍快报警](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E6%8F%90%E9%86%92%E9%85%92%E5%B1%80%E9%81%87%E9%AA%9A%E6%89%B0%E5%88%AB%E5%BF%8D%E5%BF%AB%E6%8A%A5%E8%AD%A6%23) `351.2K 🔥` `NEW`
1. [Selina和男友带娃](https://s.weibo.com/weibo?q=%23Selina%E5%92%8C%E7%94%B7%E5%8F%8B%E5%B8%A6%E5%A8%83%23) `350.1K 🔥` `NEW`
1. [TOP无畏契约表演赛直播 (TOP fearless contract exhibition match live broadcast)](https://s.weibo.com/weibo?q=%23TOP%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E8%A1%A8%E6%BC%94%E8%B5%9B%E7%9B%B4%E6%92%AD%23) `312.8K 🔥` `NEW`
1. [人到中年爱好开始逐渐离谱了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E7%88%B1%E5%A5%BD%E5%BC%80%E5%A7%8B%E9%80%90%E6%B8%90%E7%A6%BB%E8%B0%B1%E4%BA%86%23) `292.1K 🔥` `NEW`
1. [终于理解为什么老一辈总是见面那么多话](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E4%B8%BA%E4%BB%80%E4%B9%88%E8%80%81%E4%B8%80%E8%BE%88%E6%80%BB%E6%98%AF%E8%A7%81%E9%9D%A2%E9%82%A3%E4%B9%88%E5%A4%9A%E8%AF%9D%23) `280.1K 🔥` `NEW`
1. [小欢喜2可以来递本子了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%AC%A2%E5%96%9C2%E5%8F%AF%E4%BB%A5%E6%9D%A5%E9%80%92%E6%9C%AC%E5%AD%90%E4%BA%86%23) `256.3K 🔥` `NEW`
1. [七夕多家花店爆单](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E5%A4%9A%E5%AE%B6%E8%8A%B1%E5%BA%97%E7%88%86%E5%8D%95%23) `253.1K 🔥` `NEW`
1. [2026KPL夏季赛](https://s.weibo.com/weibo?q=%232026KPL%E5%A4%8F%E5%AD%A3%E8%B5%9B%23) `226.3K 🔥` `NEW`
1. [宇树科技中签女子开盘就卖出 (The woman who won the lottery at Yushu Technology sold at the opening)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E7%AD%BE%E5%A5%B3%E5%AD%90%E5%BC%80%E7%9B%98%E5%B0%B1%E5%8D%96%E5%87%BA%23) `1.4M 🔥` `+52%`
1. [受害者同事听说杭州酒局事件哭了](https://s.weibo.com/weibo?q=%23%E5%8F%97%E5%AE%B3%E8%80%85%E5%90%8C%E4%BA%8B%E5%90%AC%E8%AF%B4%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%E5%93%AD%E4%BA%86%23) `544.8K 🔥` `+25%`
1. [范丞丞怎么瘦了这么多](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%80%8E%E4%B9%88%E7%98%A6%E4%BA%86%E8%BF%99%E4%B9%88%E5%A4%9A%23) `416.1K 🔥` `+34%`
1. [无畏契约](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%23) `399.0K 🔥` `+74%`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `387.6K 🔥` `+28%`
1. [孟子义李昀锐白天避嫌晚上营业 (Meng Ziyi and Li Yunrui avoid suspicion during the day and open business at night)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E7%99%BD%E5%A4%A9%E9%81%BF%E5%AB%8C%E6%99%9A%E4%B8%8A%E8%90%A5%E4%B8%9A%23) `660.4K 🔥`
1. [升学宴逃生村民称身旁邻居当场遇难](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B4%E9%80%83%E7%94%9F%E6%9D%91%E6%B0%91%E7%A7%B0%E8%BA%AB%E6%97%81%E9%82%BB%E5%B1%85%E5%BD%93%E5%9C%BA%E9%81%87%E9%9A%BE%23) `502.0K 🔥`
1. [七夕 冷清](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E5%86%B7%E6%B8%85%23) `429.3K 🔥`
1. [减肥避谶](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E9%81%BF%E8%B0%B6%23) `426.7K 🔥`
1. [韩国被曝性贿赂3名中国足协人士](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%A2%AB%E6%9B%9D%E6%80%A7%E8%B4%BF%E8%B5%823%E5%90%8D%E4%B8%AD%E5%9B%BD%E8%B6%B3%E5%8D%8F%E4%BA%BA%E5%A3%AB%23) `420.0K 🔥`
1. [女孩深夜遭强奸4人均称只是协助](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%B7%B1%E5%A4%9C%E9%81%AD%E5%BC%BA%E5%A5%B84%E4%BA%BA%E5%9D%87%E7%A7%B0%E5%8F%AA%E6%98%AF%E5%8D%8F%E5%8A%A9%23) `410.5K 🔥`
1. [蓝盈莹要求工作群消息尽量秒回](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E8%A6%81%E6%B1%82%E5%B7%A5%E4%BD%9C%E7%BE%A4%E6%B6%88%E6%81%AF%E5%B0%BD%E9%87%8F%E7%A7%92%E5%9B%9E%23) `405.2K 🔥`
1. [白鹿七夕剧宣好忙](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%83%E5%A4%95%E5%89%A7%E5%AE%A3%E5%A5%BD%E5%BF%99%23) `398.3K 🔥`
1. [关晓彤 少量蘸料中加入大量香菜](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%20%E5%B0%91%E9%87%8F%E8%98%B8%E6%96%99%E4%B8%AD%E5%8A%A0%E5%85%A5%E5%A4%A7%E9%87%8F%E9%A6%99%E8%8F%9C%23) `391.5K 🔥`
1. [iPhone17涨价倒计时](https://s.weibo.com/weibo?q=%23iPhone17%E6%B6%A8%E4%BB%B7%E5%80%92%E8%AE%A1%E6%97%B6%23) `381.6K 🔥`
1. [四川一升学宴突发事故5人死亡 (5 people died in accident at Sichuan Yisheng University Banquet)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B8%80%E5%8D%87%E5%AD%A6%E5%AE%B4%E7%AA%81%E5%8F%91%E4%BA%8B%E6%95%855%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `364.4K 🔥`
1. [披荆斩棘一公突袭直播 (Overcoming thorns and thorns, a male raids live broadcast)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%80%E5%85%AC%E7%AA%81%E8%A2%AD%E7%9B%B4%E6%92%AD%23) `333.1K 🔥`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `316.4K 🔥`
1. [喜欢你我也是](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E4%BD%A0%E6%88%91%E4%B9%9F%E6%98%AF%23) `293.3K 🔥`
1. [空枪](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `280.8K 🔥`
1. [虞书欣estherhouse崩了 (Yu Shuxin estherhouse collapsed)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3estherhouse%E5%B4%A9%E4%BA%86%23) `252.0K 🔥`
1. [喜欢你6十个人成了4对](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E4%BD%A06%E5%8D%81%E4%B8%AA%E4%BA%BA%E6%88%90%E4%BA%864%E5%AF%B9%23) `203.7K 🔥`
1. [剩菜剩饭直接喂猪违法](https://s.weibo.com/weibo?q=%23%E5%89%A9%E8%8F%9C%E5%89%A9%E9%A5%AD%E7%9B%B4%E6%8E%A5%E5%96%82%E7%8C%AA%E8%BF%9D%E6%B3%95%23) `916.3K 🔥` `-21%`
1. [网络辟谣标签](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E8%BE%9F%E8%B0%A3%E6%A0%87%E7%AD%BE%23) `537.5K 🔥` `-47%`
1. [胖东来 刑期五年以上门槛 (Fat Donglai’s sentence exceeds the threshold of five years)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E6%9C%9F%E4%BA%94%E5%B9%B4%E4%BB%A5%E4%B8%8A%E9%97%A8%E6%A7%9B%23) `533.0K 🔥` `-30%`
1. [厨房纸 致癌物](https://s.weibo.com/weibo?q=%23%E5%8E%A8%E6%88%BF%E7%BA%B8%20%E8%87%B4%E7%99%8C%E7%89%A9%23) `436.9K 🔥` `-33%`
1. [白鹿和彭冠英常华森都有贴脸剧照 (Bai Lu and Peng Guanying and Chang Huasen both have photos showing their faces)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%92%8C%E5%BD%AD%E5%86%A0%E8%8B%B1%E5%B8%B8%E5%8D%8E%E6%A3%AE%E9%83%BD%E6%9C%89%E8%B4%B4%E8%84%B8%E5%89%A7%E7%85%A7%23) `433.7K 🔥` `-33%`
1. [窦唯女儿自曝与父亲20年无联系](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E5%94%AF%E5%A5%B3%E5%84%BF%E8%87%AA%E6%9B%9D%E4%B8%8E%E7%88%B6%E4%BA%B220%E5%B9%B4%E6%97%A0%E8%81%94%E7%B3%BB%23) `378.7K 🔥` `-21%`
1. [宇树股价跳水带崩机器人板块](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E8%82%A1%E4%BB%B7%E8%B7%B3%E6%B0%B4%E5%B8%A6%E5%B4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9D%BF%E5%9D%97%23) `276.8K 🔥` `-43%`
1. [昀牵孟绕](https://s.weibo.com/weibo?q=%23%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%23) `206.9K 🔥` `-43%`
1. [顺风车司机回应为何把女孩锁车内 (The ride-hailing driver responded why he locked the girl in the car)](https://s.weibo.com/weibo?q=%23%E9%A1%BA%E9%A3%8E%E8%BD%A6%E5%8F%B8%E6%9C%BA%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BD%95%E6%8A%8A%E5%A5%B3%E5%AD%A9%E9%94%81%E8%BD%A6%E5%86%85%23) `205.8K 🔥` `-36%`
1. [尚公主 (Princess Shang)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `205.5K 🔥` `-37%`
1. [王兴兴拿下90后新首富 (Wang Xingxing becomes the new richest man born in the 1990s)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%85%B4%E5%85%B4%E6%8B%BF%E4%B8%8B90%E5%90%8E%E6%96%B0%E9%A6%96%E5%AF%8C%23) `203.9K 🔥` `-27%`

Updated at 2026-08-19 14:26:06

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
