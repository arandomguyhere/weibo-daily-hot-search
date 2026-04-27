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

1. [东方甄选拒绝第二个董宇辉 (Oriental Selection rejects second Dong Yuhui)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%8B%92%E7%BB%9D%E7%AC%AC%E4%BA%8C%E4%B8%AA%E8%91%A3%E5%AE%87%E8%BE%89%23) `1.2M 🔥` `NEW`
1. [追觅俞浩怒批小红书](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E4%BF%9E%E6%B5%A9%E6%80%92%E6%89%B9%E5%B0%8F%E7%BA%A2%E4%B9%A6%23) `868.4K 🔥` `NEW`
1. [五一叠加春假加出文旅消费新活力](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%8F%A0%E5%8A%A0%E6%98%A5%E5%81%87%E5%8A%A0%E5%87%BA%E6%96%87%E6%97%85%E6%B6%88%E8%B4%B9%E6%96%B0%E6%B4%BB%E5%8A%9B%23) `819.4K 🔥` `NEW`
1. [讨好型人格请反复阅读](https://s.weibo.com/weibo?q=%23%E8%AE%A8%E5%A5%BD%E5%9E%8B%E4%BA%BA%E6%A0%BC%E8%AF%B7%E5%8F%8D%E5%A4%8D%E9%98%85%E8%AF%BB%23) `815.7K 🔥` `NEW`
1. [曾沛慈耳返](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%80%B3%E8%BF%94%23) `532.7K 🔥` `NEW`
1. [住建局回应1.5亿补偿款仅付500万](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E5%BB%BA%E5%B1%80%E5%9B%9E%E5%BA%941.5%E4%BA%BF%E8%A1%A5%E5%81%BF%E6%AC%BE%E4%BB%85%E4%BB%98500%E4%B8%87%23) `472.5K 🔥` `NEW`
1. [别让政策红利变成钱包黑洞](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E6%94%BF%E7%AD%96%E7%BA%A2%E5%88%A9%E5%8F%98%E6%88%90%E9%92%B1%E5%8C%85%E9%BB%91%E6%B4%9E%23) `464.7K 🔥` `NEW`
1. [湖人vs火箭](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BAvs%E7%81%AB%E7%AE%AD%23) `359.1K 🔥` `NEW`
1. [甘望星为了当演员拔掉5颗牙](https://s.weibo.com/weibo?q=%23%E7%94%98%E6%9C%9B%E6%98%9F%E4%B8%BA%E4%BA%86%E5%BD%93%E6%BC%94%E5%91%98%E6%8B%94%E6%8E%895%E9%A2%97%E7%89%99%23) `344.2K 🔥` `NEW`
1. [医生回应男孩睾丸扭转羞于就医坏死](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%A9%E7%9D%BE%E4%B8%B8%E6%89%AD%E8%BD%AC%E7%BE%9E%E4%BA%8E%E5%B0%B1%E5%8C%BB%E5%9D%8F%E6%AD%BB%23) `343.5K 🔥` `NEW`
1. [陆毅因嘴巴紫去医院做了大检查 (Lu Yi went to the hospital for a major check-up because of his purple mouth.)](https://s.weibo.com/weibo?q=%23%E9%99%86%E6%AF%85%E5%9B%A0%E5%98%B4%E5%B7%B4%E7%B4%AB%E5%8E%BB%E5%8C%BB%E9%99%A2%E5%81%9A%E4%BA%86%E5%A4%A7%E6%A3%80%E6%9F%A5%23) `343.0K 🔥` `NEW`
1. [安静公主掉美颜](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%9D%99%E5%85%AC%E4%B8%BB%E6%8E%89%E7%BE%8E%E9%A2%9C%23) `341.9K 🔥` `NEW`
1. [工厂被强拆1.5亿补偿款仅获500万](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E5%8E%82%E8%A2%AB%E5%BC%BA%E6%8B%861.5%E4%BA%BF%E8%A1%A5%E5%81%BF%E6%AC%BE%E4%BB%85%E8%8E%B7500%E4%B8%87%23) `341.3K 🔥` `NEW`
1. [谢楠曾播报萧蔷退赛打车跑路](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%E6%9B%BE%E6%92%AD%E6%8A%A5%E8%90%A7%E8%94%B7%E9%80%80%E8%B5%9B%E6%89%93%E8%BD%A6%E8%B7%91%E8%B7%AF%23) `340.4K 🔥` `NEW`
1. [刘耀文裤子](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%A3%A4%E5%AD%90%23) `340.1K 🔥` `NEW`
1. [恋与深空PV呢](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BAPV%E5%91%A2%23) `339.5K 🔥` `NEW`
1. [歌手要变年综吗](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E8%A6%81%E5%8F%98%E5%B9%B4%E7%BB%BC%E5%90%97%23) `338.5K 🔥` `NEW`
1. [社保基金最新调仓曝光](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E5%9F%BA%E9%87%91%E6%9C%80%E6%96%B0%E8%B0%83%E4%BB%93%E6%9B%9D%E5%85%89%23) `337.5K 🔥` `NEW`
1. [老外踮脚看中国智造](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E8%B8%AE%E8%84%9A%E7%9C%8B%E4%B8%AD%E5%9B%BD%E6%99%BA%E9%80%A0%23) `336.6K 🔥` `NEW`
1. [男子骑电鸡被撞骨折仍全责](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%AA%91%E7%94%B5%E9%B8%A1%E8%A2%AB%E6%92%9E%E9%AA%A8%E6%8A%98%E4%BB%8D%E5%85%A8%E8%B4%A3%23) `336.4K 🔥` `NEW`
1. [丁俊晖回应被赵心童击败 (Ding Junhui responded to being defeated by Zhao Xintong)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%B5%B5%E5%BF%83%E7%AB%A5%E5%87%BB%E8%B4%A5%23) `297.4K 🔥` `NEW`
1. [柳智敏蛇塑回归](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E8%9B%87%E5%A1%91%E5%9B%9E%E5%BD%92%23) `256.1K 🔥` `NEW`
1. [金靖也走不出小说完结痛](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E4%B9%9F%E8%B5%B0%E4%B8%8D%E5%87%BA%E5%B0%8F%E8%AF%B4%E5%AE%8C%E7%BB%93%E7%97%9B%23) `254.0K 🔥` `NEW`
1. [嘴唇发紫不代表有健康问题](https://s.weibo.com/weibo?q=%23%E5%98%B4%E5%94%87%E5%8F%91%E7%B4%AB%E4%B8%8D%E4%BB%A3%E8%A1%A8%E6%9C%89%E5%81%A5%E5%BA%B7%E9%97%AE%E9%A2%98%23) `252.2K 🔥` `NEW`
1. [某免费观影APP疯狂盗取正版资源牟利](https://s.weibo.com/weibo?q=%23%E6%9F%90%E5%85%8D%E8%B4%B9%E8%A7%82%E5%BD%B1APP%E7%96%AF%E7%8B%82%E7%9B%97%E5%8F%96%E6%AD%A3%E7%89%88%E8%B5%84%E6%BA%90%E7%89%9F%E5%88%A9%23) `244.8K 🔥` `NEW`
1. [内塔尼亚胡就白宫晚宴枪击事件表态](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E5%B0%B1%E7%99%BD%E5%AE%AB%E6%99%9A%E5%AE%B4%E6%9E%AA%E5%87%BB%E4%BA%8B%E4%BB%B6%E8%A1%A8%E6%80%81%23) `243.7K 🔥` `NEW`
1. [身份证照片千万不要直接发](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E7%85%A7%E7%89%87%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%9B%B4%E6%8E%A5%E5%8F%91%23) `241.4K 🔥` `NEW`
1. [黄晓明晒父母踏青打卡潦草小狗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E6%99%92%E7%88%B6%E6%AF%8D%E8%B8%8F%E9%9D%92%E6%89%93%E5%8D%A1%E6%BD%A6%E8%8D%89%E5%B0%8F%E7%8B%97%23) `240.7K 🔥` `NEW`
1. [原来百家讲坛是真的在教东西](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%99%BE%E5%AE%B6%E8%AE%B2%E5%9D%9B%E6%98%AF%E7%9C%9F%E7%9A%84%E5%9C%A8%E6%95%99%E4%B8%9C%E8%A5%BF%23) `239.0K 🔥` `NEW`
1. [唐艺昕情商](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E6%83%85%E5%95%86%23) `237.2K 🔥` `NEW`
1. [张婧仪李现CP感 (Zhang Jingyi and Li Xian’s CP feelings)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%9D%8E%E7%8E%B0CP%E6%84%9F%23) `236.1K 🔥` `NEW`
1. [赵心童晒与丁俊晖旧照](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E6%99%92%E4%B8%8E%E4%B8%81%E4%BF%8A%E6%99%96%E6%97%A7%E7%85%A7%23) `197.5K 🔥` `NEW`
1. [金莎孙丞潇婚后线下好甜](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E5%A9%9A%E5%90%8E%E7%BA%BF%E4%B8%8B%E5%A5%BD%E7%94%9C%23) `195.7K 🔥` `NEW`
1. [DeepSeek连续两天降价](https://s.weibo.com/weibo?q=%23DeepSeek%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%A4%A9%E9%99%8D%E4%BB%B7%23) `173.6K 🔥` `NEW`
1. [被曝厨师往锅里吐口水餐馆已停业](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%9B%9D%E5%8E%A8%E5%B8%88%E5%BE%80%E9%94%85%E9%87%8C%E5%90%90%E5%8F%A3%E6%B0%B4%E9%A4%90%E9%A6%86%E5%B7%B2%E5%81%9C%E4%B8%9A%23) `169.2K 🔥` `NEW`
1. [中国海军超强阵势围观美日菲军演](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B5%B7%E5%86%9B%E8%B6%85%E5%BC%BA%E9%98%B5%E5%8A%BF%E5%9B%B4%E8%A7%82%E7%BE%8E%E6%97%A5%E8%8F%B2%E5%86%9B%E6%BC%94%23) `164.2K 🔥` `NEW`
1. [颜宁回应混不下去回国了言论](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%AE%81%E5%9B%9E%E5%BA%94%E6%B7%B7%E4%B8%8D%E4%B8%8B%E5%8E%BB%E5%9B%9E%E5%9B%BD%E4%BA%86%E8%A8%80%E8%AE%BA%23) `146.7K 🔥` `NEW`
1. [马嘉祺丁程鑫雨爱彩排](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%81%E7%A8%8B%E9%91%AB%E9%9B%A8%E7%88%B1%E5%BD%A9%E6%8E%92%23) `139.8K 🔥` `NEW`
1. [浪姐一对一包分配](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%80%E5%AF%B9%E4%B8%80%E5%8C%85%E5%88%86%E9%85%8D%23) `130.8K 🔥` `NEW`
1. [周杰伦拿到人生第一个网球冠军](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%8B%BF%E5%88%B0%E4%BA%BA%E7%94%9F%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%BD%91%E7%90%83%E5%86%A0%E5%86%9B%23) `114.9K 🔥` `NEW`
1. [连续两周上四休三 (Two weeks in a row, four days off and three days off)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%91%A8%E4%B8%8A%E5%9B%9B%E4%BC%91%E4%B8%89%23) `394.6K 🔥` `+46%`
1. [浴室除霉菌 霉菌视角 (Bathroom Mold Removal Mold Perspective)](https://s.weibo.com/weibo?q=%23%E6%B5%B4%E5%AE%A4%E9%99%A4%E9%9C%89%E8%8F%8C%20%E9%9C%89%E8%8F%8C%E8%A7%86%E8%A7%92%23) `129.9K 🔥` `+74%`
1. [张颂文没看过狂飙 (Zhang Songwen has never watched Kuangbiao)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A2%82%E6%96%87%E6%B2%A1%E7%9C%8B%E8%BF%87%E7%8B%82%E9%A3%99%23) `250.5K 🔥`
1. [网店卖8年假耐克赚了126万 (Online store earns 1.26 million from selling 8-year-old fake Nike)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%BA%97%E5%8D%968%E5%B9%B4%E5%81%87%E8%80%90%E5%85%8B%E8%B5%9A%E4%BA%86126%E4%B8%87%23) `159.4K 🔥`
1. [张月的实力 (Zhang Yue’s strength)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E7%9A%84%E5%AE%9E%E5%8A%9B%23) `119.0K 🔥`
1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `358.4K 🔥` `-67%`
1. [身份证照片最接近别人肉眼看到的自己 (The ID photo is the closest to what others see of you.)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E7%85%A7%E7%89%87%E6%9C%80%E6%8E%A5%E8%BF%91%E5%88%AB%E4%BA%BA%E8%82%89%E7%9C%BC%E7%9C%8B%E5%88%B0%E7%9A%84%E8%87%AA%E5%B7%B1%23) `255.4K 🔥` `-66%`
1. [特朗普夫人反应迅速](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%AB%E4%BA%BA%E5%8F%8D%E5%BA%94%E8%BF%85%E9%80%9F%23) `246.6K 🔥` `-69%`
1. [宝妈18万坐月子违约被要求赔2万](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%8818%E4%B8%87%E5%9D%90%E6%9C%88%E5%AD%90%E8%BF%9D%E7%BA%A6%E8%A2%AB%E8%A6%81%E6%B1%82%E8%B5%942%E4%B8%87%23) `172.8K 🔥` `-39%`
1. [东方甄选正在变成普通直播电商](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%AD%A3%E5%9C%A8%E5%8F%98%E6%88%90%E6%99%AE%E9%80%9A%E7%9B%B4%E6%92%AD%E7%94%B5%E5%95%86%23) `166.6K 🔥` `-25%`

Updated at 2026-04-27 11:34:02

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
