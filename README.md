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

1. [APEC](https://s.weibo.com/weibo?q=%23APEC%23) `1.1M 🔥` `NEW`
1. [一组数字看APEC深圳之约](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BB%84%E6%95%B0%E5%AD%97%E7%9C%8BAPEC%E6%B7%B1%E5%9C%B3%E4%B9%8B%E7%BA%A6%23) `659.2K 🔥` `NEW`
1. [经常朝左边睡觉对心脏的影响](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E5%B8%B8%E6%9C%9D%E5%B7%A6%E8%BE%B9%E7%9D%A1%E8%A7%89%E5%AF%B9%E5%BF%83%E8%84%8F%E7%9A%84%E5%BD%B1%E5%93%8D%23) `586.2K 🔥` `NEW`
1. [周杰伦27年演唱会官宣](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A627%E5%B9%B4%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `392.4K 🔥` `NEW`
1. [深圳街头APEC氛围拉满](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E8%A1%97%E5%A4%B4APEC%E6%B0%9B%E5%9B%B4%E6%8B%89%E6%BB%A1%23) `390.4K 🔥` `NEW`
1. [厨师干咳一年半确诊肺癌晚期](https://s.weibo.com/weibo?q=%23%E5%8E%A8%E5%B8%88%E5%B9%B2%E5%92%B3%E4%B8%80%E5%B9%B4%E5%8D%8A%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%23) `382.8K 🔥` `NEW`
1. [登顶珠峰夏伯渝最爱这首中国诗](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%A1%B6%E7%8F%A0%E5%B3%B0%E5%A4%8F%E4%BC%AF%E6%B8%9D%E6%9C%80%E7%88%B1%E8%BF%99%E9%A6%96%E4%B8%AD%E5%9B%BD%E8%AF%97%23) `369.5K 🔥` `NEW`
1. [俄美运输机亮相深圳宝安机场](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BE%8E%E8%BF%90%E8%BE%93%E6%9C%BA%E4%BA%AE%E7%9B%B8%E6%B7%B1%E5%9C%B3%E5%AE%9D%E5%AE%89%E6%9C%BA%E5%9C%BA%23) `365.0K 🔥` `NEW`
1. [南风律师要求虞书欣工作室道歉](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%A3%8E%E5%BE%8B%E5%B8%88%E8%A6%81%E6%B1%82%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%81%93%E6%AD%89%23) `354.9K 🔥` `NEW`
1. [17家车企被点名查账](https://s.weibo.com/weibo?q=%2317%E5%AE%B6%E8%BD%A6%E4%BC%81%E8%A2%AB%E7%82%B9%E5%90%8D%E6%9F%A5%E8%B4%A6%23) `351.2K 🔥` `NEW`
1. [BLG成员现场观战篮网76人比赛](https://s.weibo.com/weibo?q=%23BLG%E6%88%90%E5%91%98%E7%8E%B0%E5%9C%BA%E8%A7%82%E6%88%98%E7%AF%AE%E7%BD%9176%E4%BA%BA%E6%AF%94%E8%B5%9B%23) `345.7K 🔥` `NEW`
1. [信小呆锦鲤奖品实为代金券](https://s.weibo.com/weibo?q=%23%E4%BF%A1%E5%B0%8F%E5%91%86%E9%94%A6%E9%B2%A4%E5%A5%96%E5%93%81%E5%AE%9E%E4%B8%BA%E4%BB%A3%E9%87%91%E5%88%B8%23) `338.0K 🔥` `NEW`
1. [iPhone20Pro四微曲玻璃样品曝光](https://s.weibo.com/weibo?q=%23iPhone20Pro%E5%9B%9B%E5%BE%AE%E6%9B%B2%E7%8E%BB%E7%92%83%E6%A0%B7%E5%93%81%E6%9B%9D%E5%85%89%23) `333.9K 🔥` `NEW`
1. [方博回应退出马斯喀特赛](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%8D%9A%E5%9B%9E%E5%BA%94%E9%80%80%E5%87%BA%E9%A9%AC%E6%96%AF%E5%96%80%E7%89%B9%E8%B5%9B%23) `317.8K 🔥` `NEW`
1. [沈奕斐说沟通根本解决不了婚姻问题](https://s.weibo.com/weibo?q=%23%E6%B2%88%E5%A5%95%E6%96%90%E8%AF%B4%E6%B2%9F%E9%80%9A%E6%A0%B9%E6%9C%AC%E8%A7%A3%E5%86%B3%E4%B8%8D%E4%BA%86%E5%A9%9A%E5%A7%BB%E9%97%AE%E9%A2%98%23) `314.7K 🔥` `NEW`
1. [深圳小学生和APEC有个约定](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%92%8CAPEC%E6%9C%89%E4%B8%AA%E7%BA%A6%E5%AE%9A%23) `308.1K 🔥` `NEW`
1. [周杰伦遗憾落选格莱美](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E9%81%97%E6%86%BE%E8%90%BD%E9%80%89%E6%A0%BC%E8%8E%B1%E7%BE%8E%23) `304.4K 🔥` `NEW`
1. [加拿大总理发布抵达深圳视频](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%80%BB%E7%90%86%E5%8F%91%E5%B8%83%E6%8A%B5%E8%BE%BE%E6%B7%B1%E5%9C%B3%E8%A7%86%E9%A2%91%23) `301.2K 🔥` `NEW`
1. [信小呆辞职兑奖花光积蓄](https://s.weibo.com/weibo?q=%23%E4%BF%A1%E5%B0%8F%E5%91%86%E8%BE%9E%E8%81%8C%E5%85%91%E5%A5%96%E8%8A%B1%E5%85%89%E7%A7%AF%E8%93%84%23) `299.1K 🔥` `NEW`
1. [浙江47岁婆婆生三胎](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F47%E5%B2%81%E5%A9%86%E5%A9%86%E7%94%9F%E4%B8%89%E8%83%8E%23) `298.7K 🔥` `NEW`
1. [医生辟谣左侧睡根本不伤心](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%BE%9F%E8%B0%A3%E5%B7%A6%E4%BE%A7%E7%9D%A1%E6%A0%B9%E6%9C%AC%E4%B8%8D%E4%BC%A4%E5%BF%83%23) `297.0K 🔥` `NEW`
1. [HLE官宣Homme和Sin离队](https://s.weibo.com/weibo?q=%23HLE%E5%AE%98%E5%AE%A3Homme%E5%92%8CSin%E7%A6%BB%E9%98%9F%23) `214.6K 🔥` `NEW`
1. [美国发布AI芯片远程访问新规](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%91%E5%B8%83AI%E8%8A%AF%E7%89%87%E8%BF%9C%E7%A8%8B%E8%AE%BF%E9%97%AE%E6%96%B0%E8%A7%84%23) `200.7K 🔥` `NEW`
1. [BLG重回夺冠地看NBA](https://s.weibo.com/weibo?q=%23BLG%E9%87%8D%E5%9B%9E%E5%A4%BA%E5%86%A0%E5%9C%B0%E7%9C%8BNBA%23) `199.0K 🔥` `NEW`
1. [GenG好多thankyou](https://s.weibo.com/weibo?q=%23GenG%E5%A5%BD%E5%A4%9Athankyou%23) `198.9K 🔥` `NEW`
1. [iPhoneDuo新增人脸识别解锁](https://s.weibo.com/weibo?q=%23iPhoneDuo%E6%96%B0%E5%A2%9E%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB%E8%A7%A3%E9%94%81%23) `198.6K 🔥` `NEW`
1. [人到中年要重建夫妻关系](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E8%A6%81%E9%87%8D%E5%BB%BA%E5%A4%AB%E5%A6%BB%E5%85%B3%E7%B3%BB%23) `189.1K 🔥` `NEW`
1. [母亲称C罗在葡萄牙队被欺骗没得到尊重](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E7%A7%B0C%E7%BD%97%E5%9C%A8%E8%91%A1%E8%90%84%E7%89%99%E9%98%9F%E8%A2%AB%E6%AC%BA%E9%AA%97%E6%B2%A1%E5%BE%97%E5%88%B0%E5%B0%8A%E9%87%8D%23) `173.9K 🔥` `NEW`
1. [热苏斯回应C罗母亲争议言论](https://s.weibo.com/weibo?q=%23%E7%83%AD%E8%8B%8F%E6%96%AF%E5%9B%9E%E5%BA%94C%E7%BD%97%E6%AF%8D%E4%BA%B2%E4%BA%89%E8%AE%AE%E8%A8%80%E8%AE%BA%23) `161.0K 🔥` `NEW`
1. [整个人面部组织一下子清爽了](https://s.weibo.com/weibo?q=%23%E6%95%B4%E4%B8%AA%E4%BA%BA%E9%9D%A2%E9%83%A8%E7%BB%84%E7%BB%87%E4%B8%80%E4%B8%8B%E5%AD%90%E6%B8%85%E7%88%BD%E4%BA%86%23) `158.6K 🔥` `NEW`
1. [Bin在LDL出道首秀是我主持](https://s.weibo.com/weibo?q=%23Bin%E5%9C%A8LDL%E5%87%BA%E9%81%93%E9%A6%96%E7%A7%80%E6%98%AF%E6%88%91%E4%B8%BB%E6%8C%81%23) `148.6K 🔥` `NEW`
1. [格莱美华语0提](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E8%8E%B1%E7%BE%8E%E5%8D%8E%E8%AF%AD0%E6%8F%90%23) `147.9K 🔥` `NEW`
1. [公婆拿钱催生如今抱娃到手软](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%A9%86%E6%8B%BF%E9%92%B1%E5%82%AC%E7%94%9F%E5%A6%82%E4%BB%8A%E6%8A%B1%E5%A8%83%E5%88%B0%E6%89%8B%E8%BD%AF%23) `146.3K 🔥` `NEW`
1. [Faker回应一直留在T1](https://s.weibo.com/weibo?q=%23Faker%E5%9B%9E%E5%BA%94%E4%B8%80%E7%9B%B4%E7%95%99%E5%9C%A8T1%23) `143.4K 🔥` `NEW`
1. [特朗普称或与金正恩会面](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E6%88%96%E4%B8%8E%E9%87%91%E6%AD%A3%E6%81%A9%E4%BC%9A%E9%9D%A2%23) `132.5K 🔥` `NEW`
1. [乔欣宣传蒋欣新剧多喜一家人](https://s.weibo.com/weibo?q=%23%E4%B9%94%E6%AC%A3%E5%AE%A3%E4%BC%A0%E8%92%8B%E6%AC%A3%E6%96%B0%E5%89%A7%E5%A4%9A%E5%96%9C%E4%B8%80%E5%AE%B6%E4%BA%BA%23) `131.0K 🔥` `NEW`
1. [张远妈妈怕爸爸回来找不到家](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E5%A6%88%E5%A6%88%E6%80%95%E7%88%B8%E7%88%B8%E5%9B%9E%E6%9D%A5%E6%89%BE%E4%B8%8D%E5%88%B0%E5%AE%B6%23) `121.3K 🔥` `NEW`
1. [向佐用一口流利的英语给女儿讲故事](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E7%94%A8%E4%B8%80%E5%8F%A3%E6%B5%81%E5%88%A9%E7%9A%84%E8%8B%B1%E8%AF%AD%E7%BB%99%E5%A5%B3%E5%84%BF%E8%AE%B2%E6%95%85%E4%BA%8B%23) `114.6K 🔥` `NEW`
1. [刘耀文全英文对话](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%85%A8%E8%8B%B1%E6%96%87%E5%AF%B9%E8%AF%9D%23) `110.9K 🔥` `NEW`
1. [裁判误判致国乒比赛中断11分钟](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%E8%AF%AF%E5%88%A4%E8%87%B4%E5%9B%BD%E4%B9%92%E6%AF%94%E8%B5%9B%E4%B8%AD%E6%96%AD11%E5%88%86%E9%92%9F%23) `109.4K 🔥` `NEW`
1. [恢复专注力需要反多巴胺](https://s.weibo.com/weibo?q=%23%E6%81%A2%E5%A4%8D%E4%B8%93%E6%B3%A8%E5%8A%9B%E9%9C%80%E8%A6%81%E5%8F%8D%E5%A4%9A%E5%B7%B4%E8%83%BA%23) `778.6K 🔥` `+1347%`
1. [蒋欣这段哭戏可以进北影教材](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%E8%BF%99%E6%AE%B5%E5%93%AD%E6%88%8F%E5%8F%AF%E4%BB%A5%E8%BF%9B%E5%8C%97%E5%BD%B1%E6%95%99%E6%9D%90%23) `374.4K 🔥` `+779%`
1. [被虞书欣起诉网友发文](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%B5%B7%E8%AF%89%E7%BD%91%E5%8F%8B%E5%8F%91%E6%96%87%23) `327.1K 🔥` `+270%`
1. [吃了点didi喂](https://s.weibo.com/weibo?q=%23%E5%90%83%E4%BA%86%E7%82%B9didi%E5%96%82%23) `302.9K 🔥` `+226%`
1. [建议大家不要一直穿同一双鞋](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%8D%E8%A6%81%E4%B8%80%E7%9B%B4%E7%A9%BF%E5%90%8C%E4%B8%80%E5%8F%8C%E9%9E%8B%23) `243.0K 🔥` `+266%`
1. [什么岗位可以随时请一周假](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E5%B2%97%E4%BD%8D%E5%8F%AF%E4%BB%A5%E9%9A%8F%E6%97%B6%E8%AF%B7%E4%B8%80%E5%91%A8%E5%81%87%23) `207.1K 🔥` `+270%`
1. [金子涵称被家人骗到了精神病院](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E7%A7%B0%E8%A2%AB%E5%AE%B6%E4%BA%BA%E9%AA%97%E5%88%B0%E4%BA%86%E7%B2%BE%E7%A5%9E%E7%97%85%E9%99%A2%23) `199.0K 🔥` `+136%`
1. [金价创今年以来新低](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%88%9B%E4%BB%8A%E5%B9%B4%E4%BB%A5%E6%9D%A5%E6%96%B0%E4%BD%8E%23) `188.8K 🔥` `+227%`
1. [新007是帕丁森](https://s.weibo.com/weibo?q=%23%E6%96%B0007%E6%98%AF%E5%B8%95%E4%B8%81%E6%A3%AE%23) `141.4K 🔥` `+144%`
1. [人一旦用过折叠手机](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E7%94%A8%E8%BF%87%E6%8A%98%E5%8F%A0%E6%89%8B%E6%9C%BA%23) `111.0K 🔥` `+93%`

Updated at 2026-11-17 10:21:16

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
