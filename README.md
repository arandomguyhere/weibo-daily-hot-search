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

1. [国足vs喀麦隆 (National Football Team vs Cameroon)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3vs%E5%96%80%E9%BA%A6%E9%9A%86%23) `1.0M 🔥` `NEW`
1. [我不成仙](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E6%88%90%E4%BB%99%23) `772.5K 🔥` `NEW`
1. [大通全新星际L上市](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%80%9A%E5%85%A8%E6%96%B0%E6%98%9F%E9%99%85L%E4%B8%8A%E5%B8%82%23) `528.8K 🔥` `NEW`
1. [虞书欣崔叡娜cha](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B4%94%E5%8F%A1%E5%A8%9Ccha%23) `421.4K 🔥` `NEW`
1. [官方通报男子玩真人CS高坠身亡](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E7%8E%A9%E7%9C%9F%E4%BA%BACS%E9%AB%98%E5%9D%A0%E8%BA%AB%E4%BA%A1%23) `419.0K 🔥` `NEW`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `409.6K 🔥` `NEW`
1. [张雪谈雷军与挖孔机盖事件](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%B0%88%E9%9B%B7%E5%86%9B%E4%B8%8E%E6%8C%96%E5%AD%94%E6%9C%BA%E7%9B%96%E4%BA%8B%E4%BB%B6%23) `343.0K 🔥` `NEW`
1. [国足首发身价670万欧](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E9%A6%96%E5%8F%91%E8%BA%AB%E4%BB%B7670%E4%B8%87%E6%AC%A7%23) `258.3K 🔥` `NEW`
1. [心态崩了底妆没崩](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%80%81%E5%B4%A9%E4%BA%86%E5%BA%95%E5%A6%86%E6%B2%A1%E5%B4%A9%23) `205.3K 🔥` `NEW`
1. [黄油年糕被改名为韩国年糕](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B2%B9%E5%B9%B4%E7%B3%95%E8%A2%AB%E6%94%B9%E5%90%8D%E4%B8%BA%E9%9F%A9%E5%9B%BD%E5%B9%B4%E7%B3%95%23) `195.8K 🔥` `NEW`
1. [森林北自曝曾抑制身高 (Forest North revealed that he had suppressed his height)](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E5%8C%97%E8%87%AA%E6%9B%9D%E6%9B%BE%E6%8A%91%E5%88%B6%E8%BA%AB%E9%AB%98%23) `124.5K 🔥` `NEW`
1. [阿沁曾说自己靠版权年收入破千万](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%B2%81%E6%9B%BE%E8%AF%B4%E8%87%AA%E5%B7%B1%E9%9D%A0%E7%89%88%E6%9D%83%E5%B9%B4%E6%94%B6%E5%85%A5%E7%A0%B4%E5%8D%83%E4%B8%87%23) `120.3K 🔥` `NEW`
1. [国足9分钟内连丢2球](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B39%E5%88%86%E9%92%9F%E5%86%85%E8%BF%9E%E4%B8%A22%E7%90%83%23) `104.4K 🔥` `NEW`
1. [一年前离职的时候就预判了今天](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B9%B4%E5%89%8D%E7%A6%BB%E8%81%8C%E7%9A%84%E6%97%B6%E5%80%99%E5%B0%B1%E9%A2%84%E5%88%A4%E4%BA%86%E4%BB%8A%E5%A4%A9%23) `104.3K 🔥` `NEW`
1. [张雪机车订单排到六月底](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%AE%A2%E5%8D%95%E6%8E%92%E5%88%B0%E5%85%AD%E6%9C%88%E5%BA%95%23) `103.2K 🔥` `NEW`
1. [广州长隆回应狮子静坐淋雨](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E9%95%BF%E9%9A%86%E5%9B%9E%E5%BA%94%E7%8B%AE%E5%AD%90%E9%9D%99%E5%9D%90%E6%B7%8B%E9%9B%A8%23) `102.3K 🔥` `NEW`
1. [张雪机车上贴的红糖一天卖了300单](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%B8%8A%E8%B4%B4%E7%9A%84%E7%BA%A2%E7%B3%96%E4%B8%80%E5%A4%A9%E5%8D%96%E4%BA%86300%E5%8D%95%23) `94.5K 🔥` `NEW`
1. [李维嘉辟谣暴瘦至98斤](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BB%B4%E5%98%89%E8%BE%9F%E8%B0%A3%E6%9A%B4%E7%98%A6%E8%87%B398%E6%96%A4%23) `92.8K 🔥` `NEW`
1. [国足落后喀麦隆](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E8%90%BD%E5%90%8E%E5%96%80%E9%BA%A6%E9%9A%86%23) `91.3K 🔥` `NEW`
1. [儿子被打妈妈要求别告诉爸爸爷爷](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E8%A2%AB%E6%89%93%E5%A6%88%E5%A6%88%E8%A6%81%E6%B1%82%E5%88%AB%E5%91%8A%E8%AF%89%E7%88%B8%E7%88%B8%E7%88%B7%E7%88%B7%23) `88.8K 🔥` `NEW`
1. [焦虑型人格第二天有事belike (Anxious personality has something to be like the next day)](https://s.weibo.com/weibo?q=%23%E7%84%A6%E8%99%91%E5%9E%8B%E4%BA%BA%E6%A0%BC%E7%AC%AC%E4%BA%8C%E5%A4%A9%E6%9C%89%E4%BA%8Bbelike%23) `83.9K 🔥` `NEW`
1. [DeepSeek崩了](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B4%A9%E4%BA%86%23) `83.0K 🔥` `NEW`
1. [恭喜你发明了鸡蛋冻干](https://s.weibo.com/weibo?q=%23%E6%81%AD%E5%96%9C%E4%BD%A0%E5%8F%91%E6%98%8E%E4%BA%86%E9%B8%A1%E8%9B%8B%E5%86%BB%E5%B9%B2%23) `80.2K 🔥` `NEW`
1. [交通银行分红公告现低级失误](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E9%80%9A%E9%93%B6%E8%A1%8C%E5%88%86%E7%BA%A2%E5%85%AC%E5%91%8A%E7%8E%B0%E4%BD%8E%E7%BA%A7%E5%A4%B1%E8%AF%AF%23) `78.2K 🔥` `NEW`
1. [伊朗最大岛屿遭美以袭击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E5%A4%A7%E5%B2%9B%E5%B1%BF%E9%81%AD%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%23) `398.0K 🔥` `+149%`
1. [韩国向中国14城发放十年签](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%90%91%E4%B8%AD%E5%9B%BD14%E5%9F%8E%E5%8F%91%E6%94%BE%E5%8D%81%E5%B9%B4%E7%AD%BE%23) `381.4K 🔥` `+67%`
1. [地球使用费](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E4%BD%BF%E7%94%A8%E8%B4%B9%23) `374.4K 🔥` `+125%`
1. [AI演员 拼尸块](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%20%E6%8B%BC%E5%B0%B8%E5%9D%97%23) `356.7K 🔥` `+119%`
1. [鹿晗超绝版权意识 (Luhan has extraordinary copyright awareness)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%B6%85%E7%BB%9D%E7%89%88%E6%9D%83%E6%84%8F%E8%AF%86%23) `338.9K 🔥` `+110%`
1. [爸爸去哪儿的阿拉蕾长大了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%8E%BB%E5%93%AA%E5%84%BF%E7%9A%84%E9%98%BF%E6%8B%89%E8%95%BE%E9%95%BF%E5%A4%A7%E4%BA%86%23) `300.9K 🔥` `+81%`
1. [在意遇难博士床上四件套用了7年](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%84%8F%E9%81%87%E9%9A%BE%E5%8D%9A%E5%A3%AB%E5%BA%8A%E4%B8%8A%E5%9B%9B%E4%BB%B6%E5%A5%97%E7%94%A8%E4%BA%867%E5%B9%B4%23) `262.5K 🔥` `+60%`
1. [人民日报曾评单依纯李白改编争议 (People's Daily once commented on the controversy over Shan Yichun's adaptation of Li Bai)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E6%9B%BE%E8%AF%84%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%9D%8E%E7%99%BD%E6%94%B9%E7%BC%96%E4%BA%89%E8%AE%AE%23) `260.4K 🔥` `+57%`
1. [广州大暴雨把动物也整emo了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%A4%A7%E6%9A%B4%E9%9B%A8%E6%8A%8A%E5%8A%A8%E7%89%A9%E4%B9%9F%E6%95%B4emo%E4%BA%86%23) `236.7K 🔥` `+22%`
1. [冰湖重生月鳞绮纪对打](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%AF%B9%E6%89%93%23) `102.9K 🔥` `+29%`
1. [卜凡团播](https://s.weibo.com/weibo?q=%23%E5%8D%9C%E5%87%A1%E5%9B%A2%E6%92%AD%23) `178.1K 🔥`
1. [马嘉祺月鳞绮纪OST](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AAOST%23) `164.9K 🔥`
1. [5种炎症确认与癌症有关 (5 types of inflammation confirmed to be linked to cancer)](https://s.weibo.com/weibo?q=%235%E7%A7%8D%E7%82%8E%E7%97%87%E7%A1%AE%E8%AE%A4%E4%B8%8E%E7%99%8C%E7%97%87%E6%9C%89%E5%85%B3%23) `135.4K 🔥`
1. [美军使用钻地弹袭击伊大型弹药库](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E4%BD%BF%E7%94%A8%E9%92%BB%E5%9C%B0%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BC%8A%E5%A4%A7%E5%9E%8B%E5%BC%B9%E8%8D%AF%E5%BA%93%23) `102.0K 🔥`
1. [10部影片定档2026五一档](https://s.weibo.com/weibo?q=%2310%E9%83%A8%E5%BD%B1%E7%89%87%E5%AE%9A%E6%A1%A32026%E4%BA%94%E4%B8%80%E6%A1%A3%23) `91.9K 🔥`
1. [鞠婧祎工作室声明 (Ju Jingyi Studio Statement)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A3%B0%E6%98%8E%23) `7.6M 🔥` `-22%`
1. [中国人海上百米高空吊装百米叶片](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B5%B7%E4%B8%8A%E7%99%BE%E7%B1%B3%E9%AB%98%E7%A9%BA%E5%90%8A%E8%A3%85%E7%99%BE%E7%B1%B3%E5%8F%B6%E7%89%87%23) `616.7K 🔥` `-58%`
1. [地铁吐血女孩账户因转账频繁被封](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E8%B4%A6%E6%88%B7%E5%9B%A0%E8%BD%AC%E8%B4%A6%E9%A2%91%E7%B9%81%E8%A2%AB%E5%B0%81%23) `386.0K 🔥` `-79%`
1. [月鳞绮纪OST](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AAOST%23) `134.9K 🔥` `-65%`
1. [曝iPhoneXX将配屏下摄像头 (It is revealed that iPhone XX will be equipped with an under-screen camera)](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhoneXX%E5%B0%86%E9%85%8D%E5%B1%8F%E4%B8%8B%E6%91%84%E5%83%8F%E5%A4%B4%23) `122.2K 🔥` `-24%`
1. [陈都灵预告15秒换了13套衣服](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E9%A2%84%E5%91%8A15%E7%A7%92%E6%8D%A2%E4%BA%8613%E5%A5%97%E8%A1%A3%E6%9C%8D%23) `111.7K 🔥` `-49%`
1. [00后女生逆袭考上985竟是病了](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%A5%B3%E7%94%9F%E9%80%86%E8%A2%AD%E8%80%83%E4%B8%8A985%E7%AB%9F%E6%98%AF%E7%97%85%E4%BA%86%23) `105.1K 🔥` `-31%`
1. [月鳞绮纪定档 (Moonscale Qi Ji is scheduled to be released)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%AE%9A%E6%A1%A3%23) `102.2K 🔥` `-35%`
1. [午睡时间超过1小时死亡风险增加30%](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%97%B6%E9%97%B4%E8%B6%85%E8%BF%871%E5%B0%8F%E6%97%B6%E6%AD%BB%E4%BA%A1%E9%A3%8E%E9%99%A9%E5%A2%9E%E5%8A%A030%25%23) `88.3K 🔥` `-44%`
1. [邓紫棋巡演内地六站](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%B7%A1%E6%BC%94%E5%86%85%E5%9C%B0%E5%85%AD%E7%AB%99%23) `81.1K 🔥` `-45%`
1. [数学考17的人学会计](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E8%80%8317%E7%9A%84%E4%BA%BA%E5%AD%A6%E4%BC%9A%E8%AE%A1%23) `78.5K 🔥` `-54%`
1. [张雪机车一战封神](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%B8%80%E6%88%98%E5%B0%81%E7%A5%9E%23) `76.9K 🔥` `-54%`

Updated at 2026-03-31 15:09:04

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
