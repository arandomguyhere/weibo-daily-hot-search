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

1. [中美领导人会谈 (Sino-US leaders’ talks)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%A2%86%E5%AF%BC%E4%BA%BA%E4%BC%9A%E8%B0%88%23) `1.5M 🔥` `NEW`
1. [中美经贸团队达成积极成果](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E7%BB%8F%E8%B4%B8%E5%9B%A2%E9%98%9F%E8%BE%BE%E6%88%90%E7%A7%AF%E6%9E%81%E6%88%90%E6%9E%9C%23) `1.1M 🔥` `NEW`
1. [6张图看铁路老年旅客淡季周中优惠](https://s.weibo.com/weibo?q=%236%E5%BC%A0%E5%9B%BE%E7%9C%8B%E9%93%81%E8%B7%AF%E8%80%81%E5%B9%B4%E6%97%85%E5%AE%A2%E6%B7%A1%E5%AD%A3%E5%91%A8%E4%B8%AD%E4%BC%98%E6%83%A0%23) `735.5K 🔥` `NEW`
1. [台湾问题处理好了中美关系就能稳定](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E9%97%AE%E9%A2%98%E5%A4%84%E7%90%86%E5%A5%BD%E4%BA%86%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E5%B0%B1%E8%83%BD%E7%A8%B3%E5%AE%9A%23) `670.3K 🔥` `NEW`
1. [白鹿演唱会票价加起来是十年](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%E5%8A%A0%E8%B5%B7%E6%9D%A5%E6%98%AF%E5%8D%81%E5%B9%B4%23) `653.8K 🔥` `NEW`
1. [豆包 嬉皮笑脸](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E5%AC%89%E7%9A%AE%E7%AC%91%E8%84%B8%23) `644.1K 🔥` `NEW`
1. [半个电竞圈来濮院电竞节了](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E4%B8%AA%E7%94%B5%E7%AB%9E%E5%9C%88%E6%9D%A5%E6%BF%AE%E9%99%A2%E7%94%B5%E7%AB%9E%E8%8A%82%E4%BA%86%23) `629.9K 🔥` `NEW`
1. [刘海为什么不能叫张海](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%B7%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%83%BD%E5%8F%AB%E5%BC%A0%E6%B5%B7%23) `534.5K 🔥` `NEW`
1. [中美元首合影](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%90%88%E5%BD%B1%23) `501.8K 🔥` `NEW`
1. [日媒吐槽世乒赛规则存在漏洞](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E5%90%90%E6%A7%BD%E4%B8%96%E4%B9%92%E8%B5%9B%E8%A7%84%E5%88%99%E5%AD%98%E5%9C%A8%E6%BC%8F%E6%B4%9E%23) `500.5K 🔥` `NEW`
1. [给阿嬷的情书票房破2亿 (A Love Letter to Grandma grossed over 200 million at the box office)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E7%A0%B42%E4%BA%BF%23) `497.2K 🔥` `NEW`
1. [特朗普参观天坛](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%82%E8%A7%82%E5%A4%A9%E5%9D%9B%23) `494.6K 🔥` `NEW`
1. [鹿晗寸头](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%AF%B8%E5%A4%B4%23) `490.2K 🔥` `NEW`
1. [特朗普说二三把手我都不让他们来](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%BA%8C%E4%B8%89%E6%8A%8A%E6%89%8B%E6%88%91%E9%83%BD%E4%B8%8D%E8%AE%A9%E4%BB%96%E4%BB%AC%E6%9D%A5%23) `489.7K 🔥` `NEW`
1. [薯片透明包装](https://s.weibo.com/weibo?q=%23%E8%96%AF%E7%89%87%E9%80%8F%E6%98%8E%E5%8C%85%E8%A3%85%23) `485.6K 🔥` `NEW`
1. [马斯克360度转圈拍摄人民大会堂](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B360%E5%BA%A6%E8%BD%AC%E5%9C%88%E6%8B%8D%E6%91%84%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `483.9K 🔥` `NEW`
1. [金冬天一颗葡萄吃了一分多钟](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%86%AC%E5%A4%A9%E4%B8%80%E9%A2%97%E8%91%A1%E8%90%84%E5%90%83%E4%BA%86%E4%B8%80%E5%88%86%E5%A4%9A%E9%92%9F%23) `480.8K 🔥` `NEW`
1. [于正宣传白鹿演唱会](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%AE%A3%E4%BC%A0%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `479.3K 🔥` `NEW`
1. [张雪机车820RR暂停生产交付](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6820RR%E6%9A%82%E5%81%9C%E7%94%9F%E4%BA%A7%E4%BA%A4%E4%BB%98%23) `478.1K 🔥` `NEW`
1. [马斯克库克黄仁勋等进入会谈现场](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%BA%93%E5%85%8B%E9%BB%84%E4%BB%81%E5%8B%8B%E7%AD%89%E8%BF%9B%E5%85%A5%E4%BC%9A%E8%B0%88%E7%8E%B0%E5%9C%BA%23) `474.7K 🔥` `NEW`
1. [何九华宣布当爸 (He Jiuhua announces becoming a father)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B9%9D%E5%8D%8E%E5%AE%A3%E5%B8%83%E5%BD%93%E7%88%B8%23) `469.6K 🔥` `NEW`
1. [特朗普说中美关系将会有史以来最好](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E5%B0%86%E4%BC%9A%E6%9C%89%E5%8F%B2%E4%BB%A5%E6%9D%A5%E6%9C%80%E5%A5%BD%23) `469.0K 🔥` `NEW`
1. [IU回答不再依赖姐姐算长大吗](https://s.weibo.com/weibo?q=%23IU%E5%9B%9E%E7%AD%94%E4%B8%8D%E5%86%8D%E4%BE%9D%E8%B5%96%E5%A7%90%E5%A7%90%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `468.8K 🔥` `NEW`
1. [杨洋回应谁说这杨洋老啊](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%9B%9E%E5%BA%94%E8%B0%81%E8%AF%B4%E8%BF%99%E6%9D%A8%E6%B4%8B%E8%80%81%E5%95%8A%23) `450.3K 🔥` `NEW`
1. [中美元首握手](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E6%8F%A1%E6%89%8B%23) `428.3K 🔥` `NEW`
1. [王鸥 何九华](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%20%E4%BD%95%E4%B9%9D%E5%8D%8E%23) `425.1K 🔥` `NEW`
1. [网红白冰再被禁言](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%99%BD%E5%86%B0%E5%86%8D%E8%A2%AB%E7%A6%81%E8%A8%80%23) `418.0K 🔥` `NEW`
1. [中美领导人就重大问题交换意见](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%A2%86%E5%AF%BC%E4%BA%BA%E5%B0%B1%E9%87%8D%E5%A4%A7%E9%97%AE%E9%A2%98%E4%BA%A4%E6%8D%A2%E6%84%8F%E8%A7%81%23) `406.6K 🔥` `NEW`
1. [特朗普访华](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%23) `398.5K 🔥` `NEW`
1. [父母去世哥哥送嫁新娘只拿一张喜钱](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%8E%BB%E4%B8%96%E5%93%A5%E5%93%A5%E9%80%81%E5%AB%81%E6%96%B0%E5%A8%98%E5%8F%AA%E6%8B%BF%E4%B8%80%E5%BC%A0%E5%96%9C%E9%92%B1%23) `345.0K 🔥` `NEW`
1. [跟姜乘澜学洗头 (Learn how to wash your hair with Jiang Chenglan)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E5%A7%9C%E4%B9%98%E6%BE%9C%E5%AD%A6%E6%B4%97%E5%A4%B4%23) `324.8K 🔥` `NEW`
1. [小马云13岁确诊智力二级残疾](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E4%BA%9113%E5%B2%81%E7%A1%AE%E8%AF%8A%E6%99%BA%E5%8A%9B%E4%BA%8C%E7%BA%A7%E6%AE%8B%E7%96%BE%23) `311.4K 🔥` `NEW`
1. [男童海底捞奔跑撞上高温红油锅](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E6%B5%B7%E5%BA%95%E6%8D%9E%E5%A5%94%E8%B7%91%E6%92%9E%E4%B8%8A%E9%AB%98%E6%B8%A9%E7%BA%A2%E6%B2%B9%E9%94%85%23) `300.6K 🔥` `NEW`
1. [为什么衣服只喜欢穿一年](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A1%A3%E6%9C%8D%E5%8F%AA%E5%96%9C%E6%AC%A2%E7%A9%BF%E4%B8%80%E5%B9%B4%23) `287.6K 🔥` `NEW`
1. [异形榴莲的出肉率](https://s.weibo.com/weibo?q=%23%E5%BC%82%E5%BD%A2%E6%A6%B4%E8%8E%B2%E7%9A%84%E5%87%BA%E8%82%89%E7%8E%87%23) `278.3K 🔥` `NEW`
1. [特朗普访华欢迎仪式高清大图](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E4%BB%AA%E5%BC%8F%E9%AB%98%E6%B8%85%E5%A4%A7%E5%9B%BE%23) `259.9K 🔥` `NEW`
1. [新人500元请司仪要求随礼600](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%BA%BA500%E5%85%83%E8%AF%B7%E5%8F%B8%E4%BB%AA%E8%A6%81%E6%B1%82%E9%9A%8F%E7%A4%BC600%23) `255.0K 🔥` `NEW`
1. [孙杨不能跟女生自拍](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E4%B8%8D%E8%83%BD%E8%B7%9F%E5%A5%B3%E7%94%9F%E8%87%AA%E6%8B%8D%23) `251.1K 🔥` `NEW`
1. [周云杰连线34年海尔冰箱老用户](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BA%91%E6%9D%B0%E8%BF%9E%E7%BA%BF34%E5%B9%B4%E6%B5%B7%E5%B0%94%E5%86%B0%E7%AE%B1%E8%80%81%E7%94%A8%E6%88%B7%23) `250.1K 🔥` `NEW`
1. [易烊千玺唱了粉丝选的歌](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%94%B1%E4%BA%86%E7%B2%89%E4%B8%9D%E9%80%89%E7%9A%84%E6%AD%8C%23) `207.9K 🔥` `NEW`
1. [标价15元结账收29.9元 (List price is 15 yuan, checkout charges 29.9 yuan)](https://s.weibo.com/weibo?q=%23%E6%A0%87%E4%BB%B715%E5%85%83%E7%BB%93%E8%B4%A6%E6%94%B629.9%E5%85%83%23) `196.6K 🔥` `NEW`
1. [溺亡男子被同伴运回家73小时才发现](https://s.weibo.com/weibo?q=%23%E6%BA%BA%E4%BA%A1%E7%94%B7%E5%AD%90%E8%A2%AB%E5%90%8C%E4%BC%B4%E8%BF%90%E5%9B%9E%E5%AE%B673%E5%B0%8F%E6%97%B6%E6%89%8D%E5%8F%91%E7%8E%B0%23) `191.2K 🔥` `NEW`
1. [张本美和说需超越孙颖莎才能赢国乒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E8%AF%B4%E9%9C%80%E8%B6%85%E8%B6%8A%E5%AD%99%E9%A2%96%E8%8E%8E%E6%89%8D%E8%83%BD%E8%B5%A2%E5%9B%BD%E4%B9%92%23) `181.8K 🔥` `NEW`
1. [曲家瑞说话papi插不上嘴](https://s.weibo.com/weibo?q=%23%E6%9B%B2%E5%AE%B6%E7%91%9E%E8%AF%B4%E8%AF%9Dpapi%E6%8F%92%E4%B8%8D%E4%B8%8A%E5%98%B4%23) `179.2K 🔥` `NEW`
1. [杨紫远山黛](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%BF%9C%E5%B1%B1%E9%BB%9B%23) `178.2K 🔥` `NEW`
1. [日本盗搬大量中国视频经营人设](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%9B%97%E6%90%AC%E5%A4%A7%E9%87%8F%E4%B8%AD%E5%9B%BD%E8%A7%86%E9%A2%91%E7%BB%8F%E8%90%A5%E4%BA%BA%E8%AE%BE%23) `171.0K 🔥` `NEW`
1. [特朗普访华欢迎仪式 (Trump's visit to China welcome ceremony)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E4%BB%AA%E5%BC%8F%23) `495.9K 🔥` `-90%`
1. [乃万演唱会40元票价](https://s.weibo.com/weibo?q=%23%E4%B9%83%E4%B8%87%E6%BC%94%E5%94%B1%E4%BC%9A40%E5%85%83%E7%A5%A8%E4%BB%B7%23) `401.7K 🔥` `-67%`
1. [贝克汉姆14岁小女儿因不上学被吐槽](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%8614%E5%B2%81%E5%B0%8F%E5%A5%B3%E5%84%BF%E5%9B%A0%E4%B8%8D%E4%B8%8A%E5%AD%A6%E8%A2%AB%E5%90%90%E6%A7%BD%23) `250.0K 🔥` `-42%`
1. [点奶茶时要避开的4个字眼](https://s.weibo.com/weibo?q=%23%E7%82%B9%E5%A5%B6%E8%8C%B6%E6%97%B6%E8%A6%81%E9%81%BF%E5%BC%80%E7%9A%844%E4%B8%AA%E5%AD%97%E7%9C%BC%23) `168.8K 🔥` `-59%`

Updated at 2026-05-14 13:30:17

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
