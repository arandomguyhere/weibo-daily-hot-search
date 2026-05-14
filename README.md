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

1. [中美元首在祈年殿广场合影 (The heads of state of China and the United States took a group photo at the Square of the Hall of Prayer for Good Harvests)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%9C%A8%E7%A5%88%E5%B9%B4%E6%AE%BF%E5%B9%BF%E5%9C%BA%E5%90%88%E5%BD%B1%23) `2.3M 🔥` `NEW`
1. [这些美方代表在中美元首会谈会场](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E7%BE%8E%E6%96%B9%E4%BB%A3%E8%A1%A8%E5%9C%A8%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E8%B0%88%E4%BC%9A%E5%9C%BA%23) `1.5M 🔥` `NEW`
1. [爸爸当家](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BD%93%E5%AE%B6%23) `614.3K 🔥` `NEW`
1. [阿嬷爆了之后 业内连夜学习潮汕文化](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%AC%B7%E7%88%86%E4%BA%86%E4%B9%8B%E5%90%8E%20%E4%B8%9A%E5%86%85%E8%BF%9E%E5%A4%9C%E5%AD%A6%E4%B9%A0%E6%BD%AE%E6%B1%95%E6%96%87%E5%8C%96%23) `484.8K 🔥` `NEW`
1. [巩立姣减重50斤](https://s.weibo.com/weibo?q=%23%E5%B7%A9%E7%AB%8B%E5%A7%A3%E5%87%8F%E9%87%8D50%E6%96%A4%23) `479.7K 🔥` `NEW`
1. [瑶一瑶跪下感谢妈妈](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E8%B7%AA%E4%B8%8B%E6%84%9F%E8%B0%A2%E5%A6%88%E5%A6%88%23) `475.4K 🔥` `NEW`
1. [特朗普感叹大美中国](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%84%9F%E5%8F%B9%E5%A4%A7%E7%BE%8E%E4%B8%AD%E5%9B%BD%23) `473.6K 🔥` `NEW`
1. [爱喝粥和爱喝咖啡的人都沉默了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%96%9D%E7%B2%A5%E5%92%8C%E7%88%B1%E5%96%9D%E5%92%96%E5%95%A1%E7%9A%84%E4%BA%BA%E9%83%BD%E6%B2%89%E9%BB%98%E4%BA%86%23) `469.7K 🔥` `NEW`
1. [特朗普参观天坛感叹惊艳](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%82%E8%A7%82%E5%A4%A9%E5%9D%9B%E6%84%9F%E5%8F%B9%E6%83%8A%E8%89%B3%23) `458.3K 🔥` `NEW`
1. [吴宣仪成立个人工作室](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%88%90%E7%AB%8B%E4%B8%AA%E4%BA%BA%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `458.1K 🔥` `NEW`
1. [警方通报河北一火锅店发生刑案 (Police report a criminal case at a hotpot restaurant in Hebei)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E6%B2%B3%E5%8C%97%E4%B8%80%E7%81%AB%E9%94%85%E5%BA%97%E5%8F%91%E7%94%9F%E5%88%91%E6%A1%88%23) `449.0K 🔥` `NEW`
1. [黄仁勋点赞库克比耶](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%82%B9%E8%B5%9E%E5%BA%93%E5%85%8B%E6%AF%94%E8%80%B6%23) `429.4K 🔥` `NEW`
1. [秦昊说孙杨不坑自己专坑我们](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E8%AF%B4%E5%AD%99%E6%9D%A8%E4%B8%8D%E5%9D%91%E8%87%AA%E5%B7%B1%E4%B8%93%E5%9D%91%E6%88%91%E4%BB%AC%23) `409.6K 🔥` `NEW`
1. [中美关系新定位](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E6%96%B0%E5%AE%9A%E4%BD%8D%23) `382.1K 🔥` `NEW`
1. [武大取消预约是高校该有的格局](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E5%8F%96%E6%B6%88%E9%A2%84%E7%BA%A6%E6%98%AF%E9%AB%98%E6%A0%A1%E8%AF%A5%E6%9C%89%E7%9A%84%E6%A0%BC%E5%B1%80%23) `341.6K 🔥` `NEW`
1. [何赛飞悬肘写毛笔字签名](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B5%9B%E9%A3%9E%E6%82%AC%E8%82%98%E5%86%99%E6%AF%9B%E7%AC%94%E5%AD%97%E7%AD%BE%E5%90%8D%23) `302.4K 🔥` `NEW`
1. [中美元首参观天坛高清大图](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%8F%82%E8%A7%82%E5%A4%A9%E5%9D%9B%E9%AB%98%E6%B8%85%E5%A4%A7%E5%9B%BE%23) `295.8K 🔥` `NEW`
1. [日本批量生成AI视频抹黑中国](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%89%B9%E9%87%8F%E7%94%9F%E6%88%90AI%E8%A7%86%E9%A2%91%E6%8A%B9%E9%BB%91%E4%B8%AD%E5%9B%BD%23) `295.7K 🔥` `NEW`
1. [A股放量1222亿调整](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%94%BE%E9%87%8F1222%E4%BA%BF%E8%B0%83%E6%95%B4%23) `268.9K 🔥` `NEW`
1. [网友清迈偶遇周杰伦陪昆凌录中餐厅](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%B8%85%E8%BF%88%E5%81%B6%E9%81%87%E5%91%A8%E6%9D%B0%E4%BC%A6%E9%99%AA%E6%98%86%E5%87%8C%E5%BD%95%E4%B8%AD%E9%A4%90%E5%8E%85%23) `224.5K 🔥` `NEW`
1. [腾讯成立800人团队适配鸿蒙 (Tencent sets up a team of 800 people to adapt to Hongmeng)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E6%88%90%E7%AB%8B800%E4%BA%BA%E5%9B%A2%E9%98%9F%E9%80%82%E9%85%8D%E9%B8%BF%E8%92%99%23) `169.1K 🔥` `NEW`
1. [外媒记者镜头下的中国排面](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%AA%92%E8%AE%B0%E8%80%85%E9%95%9C%E5%A4%B4%E4%B8%8B%E7%9A%84%E4%B8%AD%E5%9B%BD%E6%8E%92%E9%9D%A2%23) `167.8K 🔥` `NEW`
1. [谈莉娜产后8天仍刀口痛](https://s.weibo.com/weibo?q=%23%E8%B0%88%E8%8E%89%E5%A8%9C%E4%BA%A7%E5%90%8E8%E5%A4%A9%E4%BB%8D%E5%88%80%E5%8F%A3%E7%97%9B%23) `158.2K 🔥` `NEW`
1. [章若楠台词](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%8F%B0%E8%AF%8D%23) `157.3K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `157.2K 🔥` `NEW`
1. [蔡少芬 我有个乖女苏丽珊](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%B0%91%E8%8A%AC%20%E6%88%91%E6%9C%89%E4%B8%AA%E4%B9%96%E5%A5%B3%E8%8B%8F%E4%B8%BD%E7%8F%8A%23) `156.9K 🔥` `NEW`
1. [日系车三巨头卖不动了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%B3%BB%E8%BD%A6%E4%B8%89%E5%B7%A8%E5%A4%B4%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `156.0K 🔥` `NEW`
1. [Jonathan迪奥早春秀亮相洛杉矶](https://s.weibo.com/weibo?q=%23Jonathan%E8%BF%AA%E5%A5%A5%E6%97%A9%E6%98%A5%E7%A7%80%E4%BA%AE%E7%9B%B8%E6%B4%9B%E6%9D%89%E7%9F%B6%23) `155.3K 🔥` `NEW`
1. [刘诗雯世乒赛回国喜提埃安N60](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E9%9B%AF%E4%B8%96%E4%B9%92%E8%B5%9B%E5%9B%9E%E5%9B%BD%E5%96%9C%E6%8F%90%E5%9F%83%E5%AE%89N60%23) `154.8K 🔥` `NEW`
1. [特朗普参观天坛](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%82%E8%A7%82%E5%A4%A9%E5%9D%9B%23) `8.3M 🔥` `+1577%`
1. [白鹿演唱会票价加起来是十年 (The total ticket price for the White Deer concert is ten years)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%E5%8A%A0%E8%B5%B7%E6%9D%A5%E6%98%AF%E5%8D%81%E5%B9%B4%23) `1.5M 🔥` `+128%`
1. [男童海底捞奔跑撞上高温红油锅](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E6%B5%B7%E5%BA%95%E6%8D%9E%E5%A5%94%E8%B7%91%E6%92%9E%E4%B8%8A%E9%AB%98%E6%B8%A9%E7%BA%A2%E6%B2%B9%E9%94%85%23) `466.6K 🔥` `+55%`
1. [刘海为什么不能叫张海](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%B7%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%83%BD%E5%8F%AB%E5%BC%A0%E6%B5%B7%23) `563.2K 🔥`
1. [特朗普说二三把手我都不让他们来](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%BA%8C%E4%B8%89%E6%8A%8A%E6%89%8B%E6%88%91%E9%83%BD%E4%B8%8D%E8%AE%A9%E4%BB%96%E4%BB%AC%E6%9D%A5%23) `477.7K 🔥`
1. [鹿晗寸头](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%AF%B8%E5%A4%B4%23) `476.1K 🔥`
1. [薯片透明包装](https://s.weibo.com/weibo?q=%23%E8%96%AF%E7%89%87%E9%80%8F%E6%98%8E%E5%8C%85%E8%A3%85%23) `472.2K 🔥`
1. [金冬天一颗葡萄吃了一分多钟](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%86%AC%E5%A4%A9%E4%B8%80%E9%A2%97%E8%91%A1%E8%90%84%E5%90%83%E4%BA%86%E4%B8%80%E5%88%86%E5%A4%9A%E9%92%9F%23) `463.4K 🔥`
1. [何九华宣布当爸 (He Jiuhua announces becoming a father)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B9%9D%E5%8D%8E%E5%AE%A3%E5%B8%83%E5%BD%93%E7%88%B8%23) `460.1K 🔥`
1. [王鸥 何九华](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%20%E4%BD%95%E4%B9%9D%E5%8D%8E%23) `427.0K 🔥`
1. [IU回答不再依赖姐姐算长大吗](https://s.weibo.com/weibo?q=%23IU%E5%9B%9E%E7%AD%94%E4%B8%8D%E5%86%8D%E4%BE%9D%E8%B5%96%E5%A7%90%E5%A7%90%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `378.8K 🔥`
1. [为什么衣服只喜欢穿一年](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A1%A3%E6%9C%8D%E5%8F%AA%E5%96%9C%E6%AC%A2%E7%A9%BF%E4%B8%80%E5%B9%B4%23) `336.3K 🔥`
1. [豆包 嬉皮笑脸 (Bean bag hippie smiley face)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E5%AC%89%E7%9A%AE%E7%AC%91%E8%84%B8%23) `483.3K 🔥` `-25%`
1. [中美经贸团队达成积极成果](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E7%BB%8F%E8%B4%B8%E5%9B%A2%E9%98%9F%E8%BE%BE%E6%88%90%E7%A7%AF%E6%9E%81%E6%88%90%E6%9E%9C%23) `481.4K 🔥` `-54%`
1. [台湾问题处理好了中美关系就能稳定](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E9%97%AE%E9%A2%98%E5%A4%84%E7%90%86%E5%A5%BD%E4%BA%86%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E5%B0%B1%E8%83%BD%E7%A8%B3%E5%AE%9A%23) `468.7K 🔥` `-30%`
1. [中美领导人会谈 (Sino-US leaders’ talks)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%A2%86%E5%AF%BC%E4%BA%BA%E4%BC%9A%E8%B0%88%23) `462.1K 🔥` `-70%`
1. [特朗普访华欢迎仪式 (Trump's visit to China welcome ceremony)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E4%BB%AA%E5%BC%8F%23) `298.9K 🔥` `-40%`
1. [网红白冰再被禁言](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%99%BD%E5%86%B0%E5%86%8D%E8%A2%AB%E7%A6%81%E8%A8%80%23) `295.7K 🔥` `-29%`
1. [杨洋回应谁说这杨洋老啊](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%9B%9E%E5%BA%94%E8%B0%81%E8%AF%B4%E8%BF%99%E6%9D%A8%E6%B4%8B%E8%80%81%E5%95%8A%23) `189.4K 🔥` `-58%`
1. [异形榴莲的出肉率](https://s.weibo.com/weibo?q=%23%E5%BC%82%E5%BD%A2%E6%A6%B4%E8%8E%B2%E7%9A%84%E5%87%BA%E8%82%89%E7%8E%87%23) `156.2K 🔥` `-44%`
1. [特朗普访华欢迎仪式高清大图](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E4%BB%AA%E5%BC%8F%E9%AB%98%E6%B8%85%E5%A4%A7%E5%9B%BE%23) `155.7K 🔥` `-40%`

Updated at 2026-05-14 16:11:47

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
