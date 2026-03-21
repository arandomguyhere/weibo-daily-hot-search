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

1. [梅姨落网被拐儿童钟彬激动得吐了 (Aunt Mei was arrested and the kidnapped child Zhong Bin was so excited that she vomited)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%90%BD%E7%BD%91%E8%A2%AB%E6%8B%90%E5%84%BF%E7%AB%A5%E9%92%9F%E5%BD%AC%E6%BF%80%E5%8A%A8%E5%BE%97%E5%90%90%E4%BA%86%23) `326.3K 🔥` `NEW`
1. [孙海洋谈梅姨被抓](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%B7%E6%B4%8B%E8%B0%88%E6%A2%85%E5%A7%A8%E8%A2%AB%E6%8A%93%23) `154.8K 🔥` `NEW`
1. [迪丽热巴工作室审美](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%AE%A1%E7%BE%8E%23) `141.5K 🔥` `NEW`
1. [WB对战KSG](https://s.weibo.com/weibo?q=%23WB%E5%AF%B9%E6%88%98KSG%23) `136.5K 🔥` `NEW`
1. [男明星最权威现场](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%98%8E%E6%98%9F%E6%9C%80%E6%9D%83%E5%A8%81%E7%8E%B0%E5%9C%BA%23) `129.2K 🔥` `NEW`
1. [孙海洋说梅姨像鬼一样存在着](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%B7%E6%B4%8B%E8%AF%B4%E6%A2%85%E5%A7%A8%E5%83%8F%E9%AC%BC%E4%B8%80%E6%A0%B7%E5%AD%98%E5%9C%A8%E7%9D%80%23) `127.3K 🔥` `NEW`
1. [谁不想急头白脸穿这一身](https://s.weibo.com/weibo?q=%23%E8%B0%81%E4%B8%8D%E6%83%B3%E6%80%A5%E5%A4%B4%E7%99%BD%E8%84%B8%E7%A9%BF%E8%BF%99%E4%B8%80%E8%BA%AB%23) `121.9K 🔥` `NEW`
1. [我妈把元祖机养到了40岁](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A6%88%E6%8A%8A%E5%85%83%E7%A5%96%E6%9C%BA%E5%85%BB%E5%88%B0%E4%BA%8640%E5%B2%81%23) `121.8K 🔥` `NEW`
1. [田曦薇说她和长玉相似度80%](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%AF%B4%E5%A5%B9%E5%92%8C%E9%95%BF%E7%8E%89%E7%9B%B8%E4%BC%BC%E5%BA%A680%25%23) `91.7K 🔥` `NEW`
1. [梅姨男友称与其同居3年没拍照片](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%94%B7%E5%8F%8B%E7%A7%B0%E4%B8%8E%E5%85%B6%E5%90%8C%E5%B1%853%E5%B9%B4%E6%B2%A1%E6%8B%8D%E7%85%A7%E7%89%87%23) `82.6K 🔥` `NEW`
1. [北京WBG获胜 (Beijing WBG wins)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%ACWBG%E8%8E%B7%E8%83%9C%23) `81.6K 🔥` `NEW`
1. [还原梅姨画像神笔警探发声](https://s.weibo.com/weibo?q=%23%E8%BF%98%E5%8E%9F%E6%A2%85%E5%A7%A8%E7%94%BB%E5%83%8F%E7%A5%9E%E7%AC%94%E8%AD%A6%E6%8E%A2%E5%8F%91%E5%A3%B0%23) `73.1K 🔥` `NEW`
1. [隔着屏幕我都闻到酸味了](https://s.weibo.com/weibo?q=%23%E9%9A%94%E7%9D%80%E5%B1%8F%E5%B9%95%E6%88%91%E9%83%BD%E9%97%BB%E5%88%B0%E9%85%B8%E5%91%B3%E4%BA%86%23) `69.3K 🔥` `NEW`
1. [行政果切被老板说不够高档](https://s.weibo.com/weibo?q=%23%E8%A1%8C%E6%94%BF%E6%9E%9C%E5%88%87%E8%A2%AB%E8%80%81%E6%9D%BF%E8%AF%B4%E4%B8%8D%E5%A4%9F%E9%AB%98%E6%A1%A3%23) `63.0K 🔥` `NEW`
1. [黄金失守4500美元](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%A4%B1%E5%AE%884500%E7%BE%8E%E5%85%83%23) `62.9K 🔥` `NEW`
1. [中国人搞纯爱两个人一起考上清华](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%90%9E%E7%BA%AF%E7%88%B1%E4%B8%A4%E4%B8%AA%E4%BA%BA%E4%B8%80%E8%B5%B7%E8%80%83%E4%B8%8A%E6%B8%85%E5%8D%8E%23) `62.6K 🔥` `NEW`
1. [孔雪儿邓凯将录制hi6](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E9%82%93%E5%87%AF%E5%B0%86%E5%BD%95%E5%88%B6hi6%23) `62.4K 🔥` `NEW`
1. [WIEA阵容](https://s.weibo.com/weibo?q=%23WIEA%E9%98%B5%E5%AE%B9%23) `62.1K 🔥` `NEW`
1. [这下可以边吃边燃脂了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8B%E5%8F%AF%E4%BB%A5%E8%BE%B9%E5%90%83%E8%BE%B9%E7%87%83%E8%84%82%E4%BA%86%23) `60.5K 🔥` `NEW`
1. [当你在网上买了个狗窝没看尺码](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E5%9C%A8%E7%BD%91%E4%B8%8A%E4%B9%B0%E4%BA%86%E4%B8%AA%E7%8B%97%E7%AA%9D%E6%B2%A1%E7%9C%8B%E5%B0%BA%E7%A0%81%23) `58.6K 🔥` `NEW`
1. [自制黄瓜薯片 (Homemade Cucumber Crisps)](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%88%B6%E9%BB%84%E7%93%9C%E8%96%AF%E7%89%87%23) `57.8K 🔥` `NEW`
1. [什么是减压深睡裤 (What are pressure relief pajamas?)](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%98%AF%E5%87%8F%E5%8E%8B%E6%B7%B1%E7%9D%A1%E8%A3%A4%23) `868.4K 🔥` `+183%`
1. [苏翊鸣呼吁男生预防HPV](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%91%BC%E5%90%81%E7%94%B7%E7%94%9F%E9%A2%84%E9%98%B2HPV%23) `210.1K 🔥` `+36%`
1. [徐志胜自曝创业月亏12万](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E8%87%AA%E6%9B%9D%E5%88%9B%E4%B8%9A%E6%9C%88%E4%BA%8F12%E4%B8%87%23) `200.0K 🔥` `+52%`
1. [余华英](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%8D%8E%E8%8B%B1%23) `139.4K 🔥` `+69%`
1. [梅姨画像](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%94%BB%E5%83%8F%23) `135.0K 🔥` `+50%`
1. [清明小长假火车购票日历 (Qingming Festival Train Ticketing Calendar)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E5%B0%8F%E9%95%BF%E5%81%87%E7%81%AB%E8%BD%A6%E8%B4%AD%E7%A5%A8%E6%97%A5%E5%8E%86%23) `1.1M 🔥`
1. [董事长病逝未成年女儿继承9亿股票](https://s.weibo.com/weibo?q=%23%E8%91%A3%E4%BA%8B%E9%95%BF%E7%97%85%E9%80%9D%E6%9C%AA%E6%88%90%E5%B9%B4%E5%A5%B3%E5%84%BF%E7%BB%A7%E6%89%BF9%E4%BA%BF%E8%82%A1%E7%A5%A8%23) `395.8K 🔥`
1. [章子怡采访刘烨憋笑](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E9%87%87%E8%AE%BF%E5%88%98%E7%83%A8%E6%86%8B%E7%AC%91%23) `152.3K 🔥`
1. [网友通过倪妮悄悄话分析出汤唯怀孕了 (Netizens analyzed that Tang Wei was pregnant through Ni Ni’s whispers)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%80%9A%E8%BF%87%E5%80%AA%E5%A6%AE%E6%82%84%E6%82%84%E8%AF%9D%E5%88%86%E6%9E%90%E5%87%BA%E6%B1%A4%E5%94%AF%E6%80%80%E5%AD%95%E4%BA%86%23) `148.7K 🔥`
1. [伊朗有意日本船只通行霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%89%E6%84%8F%E6%97%A5%E6%9C%AC%E8%88%B9%E5%8F%AA%E9%80%9A%E8%A1%8C%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `146.4K 🔥`
1. [15岁女生派出所办公室内遭猥亵](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E5%A5%B3%E7%94%9F%E6%B4%BE%E5%87%BA%E6%89%80%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%86%85%E9%81%AD%E7%8C%A5%E4%BA%B5%23) `144.1K 🔥`
1. [风雨廊亭梦已醒 上完厕所丢行李](https://s.weibo.com/weibo?q=%23%E9%A3%8E%E9%9B%A8%E5%BB%8A%E4%BA%AD%E6%A2%A6%E5%B7%B2%E9%86%92%20%E4%B8%8A%E5%AE%8C%E5%8E%95%E6%89%80%E4%B8%A2%E8%A1%8C%E6%9D%8E%23) `132.4K 🔥`
1. [金价大跌情侣火速买五金 (Couple rushes to buy hardware after gold price plummets)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E6%83%85%E4%BE%A3%E7%81%AB%E9%80%9F%E4%B9%B0%E4%BA%94%E9%87%91%23) `124.4K 🔥`
1. [官方通报月经弄脏卧铺事件详情](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E4%BA%8B%E4%BB%B6%E8%AF%A6%E6%83%85%23) `121.5K 🔥`
1. [感觉迪丽热巴工作室换人了](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%8D%A2%E4%BA%BA%E4%BA%86%23) `106.6K 🔥`
1. [3月婴儿独自在家被子盖脸近2分钟](https://s.weibo.com/weibo?q=%233%E6%9C%88%E5%A9%B4%E5%84%BF%E7%8B%AC%E8%87%AA%E5%9C%A8%E5%AE%B6%E8%A2%AB%E5%AD%90%E7%9B%96%E8%84%B8%E8%BF%912%E5%88%86%E9%92%9F%23) `100.0K 🔥`
1. [郝阿三资源](https://s.weibo.com/weibo?q=%23%E9%83%9D%E9%98%BF%E4%B8%89%E8%B5%84%E6%BA%90%23) `95.7K 🔥`
1. [永远被灵器认主的设定爽到 (The setting of always being recognized as the master by the spiritual weapon is so cool)](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BF%9C%E8%A2%AB%E7%81%B5%E5%99%A8%E8%AE%A4%E4%B8%BB%E7%9A%84%E8%AE%BE%E5%AE%9A%E7%88%BD%E5%88%B0%23) `68.1K 🔥`
1. [逐玉 反向入侵短剧](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%8F%8D%E5%90%91%E5%85%A5%E4%BE%B5%E7%9F%AD%E5%89%A7%23) `59.5K 🔥`
1. [梅姨被逮捕 (Aunt May was arrested)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%A2%AB%E9%80%AE%E6%8D%95%23) `6.0M 🔥` `-24%`
1. [谢某某就是梅姨](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%9F%90%E6%9F%90%E5%B0%B1%E6%98%AF%E6%A2%85%E5%A7%A8%23) `1.4M 🔥` `-33%`
1. [白象 土豆泥火鸡面 (White Elephant Mashed Potato Turkey Noodles)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%B1%A1%20%E5%9C%9F%E8%B1%86%E6%B3%A5%E7%81%AB%E9%B8%A1%E9%9D%A2%23) `742.0K 🔥` `-21%`
1. [终于有人吐槽手语舞了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E5%90%90%E6%A7%BD%E6%89%8B%E8%AF%AD%E8%88%9E%E4%BA%86%23) `155.5K 🔥` `-32%`
1. [梅姨被逮杨妞花发声 (Aunt Mei was arrested and Yang Niuhua spoke out)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%A2%AB%E9%80%AE%E6%9D%A8%E5%A6%9E%E8%8A%B1%E5%8F%91%E5%A3%B0%23) `122.6K 🔥` `-69%`
1. [以色列全国多地遭导弹袭击](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%85%A8%E5%9B%BD%E5%A4%9A%E5%9C%B0%E9%81%AD%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `83.1K 🔥` `-24%`
1. [梅姨同伙2人已被执行死刑](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%90%8C%E4%BC%992%E4%BA%BA%E5%B7%B2%E8%A2%AB%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `78.2K 🔥` `-26%`
1. [95号油价或破10元 (No. 95 oil price may break 10 yuan)](https://s.weibo.com/weibo?q=%2395%E5%8F%B7%E6%B2%B9%E4%BB%B7%E6%88%96%E7%A0%B410%E5%85%83%23) `76.0K 🔥` `-49%`
1. [虞书欣专辑签售会 (Yu Shuxin’s album signing event)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%93%E8%BE%91%E7%AD%BE%E5%94%AE%E4%BC%9A%23) `72.9K 🔥` `-49%`
1. [逐玉全上桌](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%85%A8%E4%B8%8A%E6%A1%8C%23) `72.8K 🔥` `-29%`
1. [邓为孔雪儿 百妖谱](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E5%AD%94%E9%9B%AA%E5%84%BF%20%E7%99%BE%E5%A6%96%E8%B0%B1%23) `68.6K 🔥` `-39%`
1. [曝汤唯疑怀二胎](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B1%A4%E5%94%AF%E7%96%91%E6%80%80%E4%BA%8C%E8%83%8E%23) `60.0K 🔥` `-31%`

Updated at 2026-03-21 14:56:10

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
