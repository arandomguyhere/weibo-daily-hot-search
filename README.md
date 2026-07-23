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

1. [贴地飞行领克07GT上市14.58万起 (Lynk & Co's 07GT, which flies close to the ground, is launched with a starting price of 145,800)](https://s.weibo.com/weibo?q=%23%E8%B4%B4%E5%9C%B0%E9%A3%9E%E8%A1%8C%E9%A2%86%E5%85%8B07GT%E4%B8%8A%E5%B8%8214.58%E4%B8%87%E8%B5%B7%23) `722.7K 🔥` `NEW`
1. [中国超级跑车锦标赛回应闫闯吐槽](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%85%E7%BA%A7%E8%B7%91%E8%BD%A6%E9%94%A6%E6%A0%87%E8%B5%9B%E5%9B%9E%E5%BA%94%E9%97%AB%E9%97%AF%E5%90%90%E6%A7%BD%23) `137.0K 🔥` `NEW`
1. [主办方回应博主内涵王一博参赛](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E5%8A%9E%E6%96%B9%E5%9B%9E%E5%BA%94%E5%8D%9A%E4%B8%BB%E5%86%85%E6%B6%B5%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%8F%82%E8%B5%9B%23) `123.0K 🔥` `NEW`
1. [女数学家王虹才35岁](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%B0%E5%AD%A6%E5%AE%B6%E7%8E%8B%E8%99%B9%E6%89%8D35%E5%B2%81%23) `119.2K 🔥` `NEW`
1. [鹭卓安抚粉丝](https://s.weibo.com/weibo?q=%23%E9%B9%AD%E5%8D%93%E5%AE%89%E6%8A%9A%E7%B2%89%E4%B8%9D%23) `116.2K 🔥` `NEW`
1. [钟雅婷收到北大录取通知书](https://s.weibo.com/weibo?q=%23%E9%92%9F%E9%9B%85%E5%A9%B7%E6%94%B6%E5%88%B0%E5%8C%97%E5%A4%A7%E5%BD%95%E5%8F%96%E9%80%9A%E7%9F%A5%E4%B9%A6%23) `114.7K 🔥` `NEW`
1. [迪丽热巴穿红袜子](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%A9%BF%E7%BA%A2%E8%A2%9C%E5%AD%90%23) `109.0K 🔥` `NEW`
1. [邓佳鑫回复左航说谢谢](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BD%B3%E9%91%AB%E5%9B%9E%E5%A4%8D%E5%B7%A6%E8%88%AA%E8%AF%B4%E8%B0%A2%E8%B0%A2%23) `108.8K 🔥` `NEW`
1. [曝演员又要降薪了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%BC%94%E5%91%98%E5%8F%88%E8%A6%81%E9%99%8D%E8%96%AA%E4%BA%86%23) `108.2K 🔥` `NEW`
1. [赵又廷说没流量接不到商业大片](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%8F%88%E5%BB%B7%E8%AF%B4%E6%B2%A1%E6%B5%81%E9%87%8F%E6%8E%A5%E4%B8%8D%E5%88%B0%E5%95%86%E4%B8%9A%E5%A4%A7%E7%89%87%23) `107.2K 🔥` `NEW`
1. [歌手歌单王源雪崩 (Singer playlist Wang Yuanxuebang)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%AD%8C%E5%8D%95%E7%8E%8B%E6%BA%90%E9%9B%AA%E5%B4%A9%23) `107.1K 🔥` `NEW`
1. [范丞丞来到了碳水的天堂](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%9D%A5%E5%88%B0%E4%BA%86%E7%A2%B3%E6%B0%B4%E7%9A%84%E5%A4%A9%E5%A0%82%23) `103.5K 🔥` `NEW`
1. [大一时期的李现](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%B8%80%E6%97%B6%E6%9C%9F%E7%9A%84%E6%9D%8E%E7%8E%B0%23) `98.9K 🔥` `NEW`
1. [白鹿常华森二搭了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B8%B8%E5%8D%8E%E6%A3%AE%E4%BA%8C%E6%90%AD%E4%BA%86%23) `77.0K 🔥` `NEW`
1. [左航邓佳鑫循环互动](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E9%82%93%E4%BD%B3%E9%91%AB%E5%BE%AA%E7%8E%AF%E4%BA%92%E5%8A%A8%23) `77.0K 🔥` `NEW`
1. [丘成桐希望王虹邓煜回国任教](https://s.weibo.com/weibo?q=%23%E4%B8%98%E6%88%90%E6%A1%90%E5%B8%8C%E6%9C%9B%E7%8E%8B%E8%99%B9%E9%82%93%E7%85%9C%E5%9B%9E%E5%9B%BD%E4%BB%BB%E6%95%99%23) `1.2M 🔥` `+299%`
1. [菲尔兹奖 (fields medal)](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%23) `759.4K 🔥` `+164%`
1. [中国汽车加速全球化布局](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B1%BD%E8%BD%A6%E5%8A%A0%E9%80%9F%E5%85%A8%E7%90%83%E5%8C%96%E5%B8%83%E5%B1%80%23) `722.9K 🔥` `+102%`
1. [过度分享其实也是一种打扰 (Oversharing is actually a kind of interruption)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E5%88%86%E4%BA%AB%E5%85%B6%E5%AE%9E%E4%B9%9F%E6%98%AF%E4%B8%80%E7%A7%8D%E6%89%93%E6%89%B0%23) `709.1K 🔥` `+181%`
1. [十个勤天 (Ten days of hard work)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%23) `507.0K 🔥` `+119%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `463.4K 🔥` `+91%`
1. [陈哲远把网友笑进急诊了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E6%8A%8A%E7%BD%91%E5%8F%8B%E7%AC%91%E8%BF%9B%E6%80%A5%E8%AF%8A%E4%BA%86%23) `173.2K 🔥` `+184%`
1. [中国女排黑八奇迹](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92%E9%BB%91%E5%85%AB%E5%A5%87%E8%BF%B9%23) `125.9K 🔥` `+76%`
1. [王虹回应获菲尔兹奖 (Wang Hong responds to winning Fields Medal)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E5%9B%9E%E5%BA%94%E8%8E%B7%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%23) `113.1K 🔥` `+33%`
1. [鹿晗把共享充电宝价格打下来了 (Luhan lowers the price of shared power bank)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%8A%8A%E5%85%B1%E4%BA%AB%E5%85%85%E7%94%B5%E5%AE%9D%E4%BB%B7%E6%A0%BC%E6%89%93%E4%B8%8B%E6%9D%A5%E4%BA%86%23) `109.5K 🔥` `+67%`
1. [不要随意把照片和视频发给AI (Don’t send photos and videos to AI at will)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E9%9A%8F%E6%84%8F%E6%8A%8A%E7%85%A7%E7%89%87%E5%92%8C%E8%A7%86%E9%A2%91%E5%8F%91%E7%BB%99AI%23) `109.3K 🔥` `+102%`
1. [王虹 (Wang Hong)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%23) `108.6K 🔥` `+28%`
1. [金价四连涨深圳水贝又挤爆了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%9B%9B%E8%BF%9E%E6%B6%A8%E6%B7%B1%E5%9C%B3%E6%B0%B4%E8%B4%9D%E5%8F%88%E6%8C%A4%E7%88%86%E4%BA%86%23) `107.7K 🔥` `+79%`
1. [这其实是你的宠物突然想你了 (This is actually because your pet suddenly misses you.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%85%B6%E5%AE%9E%E6%98%AF%E4%BD%A0%E7%9A%84%E5%AE%A0%E7%89%A9%E7%AA%81%E7%84%B6%E6%83%B3%E4%BD%A0%E4%BA%86%23) `107.4K 🔥` `+81%`
1. [云南一小学现54.7公斤可食用口蘑](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E4%B8%80%E5%B0%8F%E5%AD%A6%E7%8E%B054.7%E5%85%AC%E6%96%A4%E5%8F%AF%E9%A3%9F%E7%94%A8%E5%8F%A3%E8%98%91%23) `106.4K 🔥` `+153%`
1. [付费占广场违规集资均可追责](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%B4%B9%E5%8D%A0%E5%B9%BF%E5%9C%BA%E8%BF%9D%E8%A7%84%E9%9B%86%E8%B5%84%E5%9D%87%E5%8F%AF%E8%BF%BD%E8%B4%A3%23) `105.7K 🔥` `+33%`
1. [北京大学祝贺邓煜王虹](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%A5%9D%E8%B4%BA%E9%82%93%E7%85%9C%E7%8E%8B%E8%99%B9%23) `104.3K 🔥` `+62%`
1. [张凌赫抱王楚然的时候还掂了一下 (Zhang Linghe also weighed Wang Churan when he hugged him)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8A%B1%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%9A%84%E6%97%B6%E5%80%99%E8%BF%98%E6%8E%82%E4%BA%86%E4%B8%80%E4%B8%8B%23) `103.4K 🔥` `+78%`
1. [一直不理解打招呼文化 (I never understood the culture of greeting)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%B8%8D%E7%90%86%E8%A7%A3%E6%89%93%E6%8B%9B%E5%91%BC%E6%96%87%E5%8C%96%23) `102.1K 🔥` `+75%`
1. [邓煜 不请我吃星期四的](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%85%9C%20%E4%B8%8D%E8%AF%B7%E6%88%91%E5%90%83%E6%98%9F%E6%9C%9F%E5%9B%9B%E7%9A%84%23) `100.6K 🔥` `+65%`
1. [如此肥美的肉遇到了吃商极低的人 (Such plump meat meets people with extremely low eater quotient)](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%AD%A4%E8%82%A5%E7%BE%8E%E7%9A%84%E8%82%89%E9%81%87%E5%88%B0%E4%BA%86%E5%90%83%E5%95%86%E6%9E%81%E4%BD%8E%E7%9A%84%E4%BA%BA%23) `96.9K 🔥` `+113%`
1. [使用AI后开始理解领导了](https://s.weibo.com/weibo?q=%23%E4%BD%BF%E7%94%A8AI%E5%90%8E%E5%BC%80%E5%A7%8B%E7%90%86%E8%A7%A3%E9%A2%86%E5%AF%BC%E4%BA%86%23) `87.5K 🔥` `+108%`
1. [张凌赫王楚然床戏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%BA%8A%E6%88%8F%23) `84.3K 🔥` `+28%`
1. [滔搏卖爆了](https://s.weibo.com/weibo?q=%23%E6%BB%94%E6%90%8F%E5%8D%96%E7%88%86%E4%BA%86%23) `83.4K 🔥` `+80%`
1. [嫌母亲丢人不让去婚礼员工遭辞退](https://s.weibo.com/weibo?q=%23%E5%AB%8C%E6%AF%8D%E4%BA%B2%E4%B8%A2%E4%BA%BA%E4%B8%8D%E8%AE%A9%E5%8E%BB%E5%A9%9A%E7%A4%BC%E5%91%98%E5%B7%A5%E9%81%AD%E8%BE%9E%E9%80%80%23) `82.4K 🔥` `+52%`
1. [Wenbo 团队 (Wenbo Team)](https://s.weibo.com/weibo?q=%23Wenbo%20%E5%9B%A2%E9%98%9F%23) `82.4K 🔥` `+94%`
1. [猫咪是怎么知道蛇的致命部位的 (How does a cat know a snake’s fatal part?)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E6%98%AF%E6%80%8E%E4%B9%88%E7%9F%A5%E9%81%93%E8%9B%87%E7%9A%84%E8%87%B4%E5%91%BD%E9%83%A8%E4%BD%8D%E7%9A%84%23) `81.8K 🔥` `+93%`
1. [中国籍数学家首获菲尔兹奖 (Chinese mathematician wins Fields Medal for first time)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%B1%8D%E6%95%B0%E5%AD%A6%E5%AE%B6%E9%A6%96%E8%8E%B7%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%23) `79.8K 🔥` `+71%`
1. [小狗小心翼翼靠近想要摸它的善良女孩 (The puppy cautiously approaches the kind girl who wants to pet it)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%B0%8F%E5%BF%83%E7%BF%BC%E7%BF%BC%E9%9D%A0%E8%BF%91%E6%83%B3%E8%A6%81%E6%91%B8%E5%AE%83%E7%9A%84%E5%96%84%E8%89%AF%E5%A5%B3%E5%AD%A9%23) `78.8K 🔥` `+87%`
1. [别让贫困生喝咖啡争议撕裂舆论](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E8%B4%AB%E5%9B%B0%E7%94%9F%E5%96%9D%E5%92%96%E5%95%A1%E4%BA%89%E8%AE%AE%E6%92%95%E8%A3%82%E8%88%86%E8%AE%BA%23) `77.8K 🔥` `+83%`
1. [邓煜 知乎](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%85%9C%20%E7%9F%A5%E4%B9%8E%23) `109.7K 🔥`
1. [毛大庆删博 (Mao Daqing deletes blog)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%A4%A7%E5%BA%86%E5%88%A0%E5%8D%9A%23) `77.0K 🔥`
1. [左眼跳财右眼跳相信科学](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E7%9C%BC%E8%B7%B3%E8%B4%A2%E5%8F%B3%E7%9C%BC%E8%B7%B3%E7%9B%B8%E4%BF%A1%E7%A7%91%E5%AD%A6%23) `722.4K 🔥` `-36%`
1. [重庆山体崩塌11死50失联](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C11%E6%AD%BB50%E5%A4%B1%E8%81%94%23) `124.2K 🔥` `-73%`
1. [家长称女儿多张幼儿园毕业照走光 (Parents say many of their daughter’s kindergarten graduation photos were leaked)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E7%A7%B0%E5%A5%B3%E5%84%BF%E5%A4%9A%E5%BC%A0%E5%B9%BC%E5%84%BF%E5%9B%AD%E6%AF%95%E4%B8%9A%E7%85%A7%E8%B5%B0%E5%85%89%23) `121.3K 🔥` `-37%`
1. [余宇涵澄清抽烟 (Yu Yuhan clarifies smoking)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%AE%87%E6%B6%B5%E6%BE%84%E6%B8%85%E6%8A%BD%E7%83%9F%23) `108.1K 🔥` `-67%`

Updated at 2026-07-24 07:40:06

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
