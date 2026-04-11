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

1. [女子从日本带回244本淫秽漫画获刑 (Woman jailed for bringing 244 obscene comics from Japan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%8E%E6%97%A5%E6%9C%AC%E5%B8%A6%E5%9B%9E244%E6%9C%AC%E6%B7%AB%E7%A7%BD%E6%BC%AB%E7%94%BB%E8%8E%B7%E5%88%91%23) `319.4K 🔥` `NEW`
1. [单身久了越来越像甲方](https://s.weibo.com/weibo?q=%23%E5%8D%95%E8%BA%AB%E4%B9%85%E4%BA%86%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%83%8F%E7%94%B2%E6%96%B9%23) `182.7K 🔥` `NEW`
1. [陶昕然叫邓超姐夫](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E5%8F%AB%E9%82%93%E8%B6%85%E5%A7%90%E5%A4%AB%23) `181.5K 🔥` `NEW`
1. [wbti](https://s.weibo.com/weibo?q=%23wbti%23) `154.9K 🔥` `NEW`
1. [原来我真能花100万](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%91%E7%9C%9F%E8%83%BD%E8%8A%B1100%E4%B8%87%23) `154.4K 🔥` `NEW`
1. [闪迪股价1年暴涨2500%](https://s.weibo.com/weibo?q=%23%E9%97%AA%E8%BF%AA%E8%82%A1%E4%BB%B71%E5%B9%B4%E6%9A%B4%E6%B6%A82500%25%23) `111.3K 🔥` `NEW`
1. [五哈是王影璐第一次录综艺](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%E6%98%AF%E7%8E%8B%E5%BD%B1%E7%92%90%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%BD%95%E7%BB%BC%E8%89%BA%23) `103.5K 🔥` `NEW`
1. [韩国遮瑕就买三个品牌](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%81%AE%E7%91%95%E5%B0%B1%E4%B9%B0%E4%B8%89%E4%B8%AA%E5%93%81%E7%89%8C%23) `97.1K 🔥` `NEW`
1. [何超莲樱花照 窦骁视角](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%8E%B2%E6%A8%B1%E8%8A%B1%E7%85%A7%20%E7%AA%A6%E9%AA%81%E8%A7%86%E8%A7%92%23) `96.4K 🔥` `NEW`
1. [小孩问外国游客美国人是不是吃人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E9%97%AE%E5%A4%96%E5%9B%BD%E6%B8%B8%E5%AE%A2%E7%BE%8E%E5%9B%BD%E4%BA%BA%E6%98%AF%E4%B8%8D%E6%98%AF%E5%90%83%E4%BA%BA%23) `93.0K 🔥` `NEW`
1. [武艺说沈月净化了我的眼睛 (Wu Yi said Shen Yue purified my eyes)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E8%89%BA%E8%AF%B4%E6%B2%88%E6%9C%88%E5%87%80%E5%8C%96%E4%BA%86%E6%88%91%E7%9A%84%E7%9C%BC%E7%9D%9B%23) `93.0K 🔥` `NEW`
1. [87岁老人摔倒后在地上躺了一整夜](https://s.weibo.com/weibo?q=%2387%E5%B2%81%E8%80%81%E4%BA%BA%E6%91%94%E5%80%92%E5%90%8E%E5%9C%A8%E5%9C%B0%E4%B8%8A%E8%BA%BA%E4%BA%86%E4%B8%80%E6%95%B4%E5%A4%9C%23) `87.4K 🔥` `NEW`
1. [朱志鑫solo告白弹唱](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABsolo%E5%91%8A%E7%99%BD%E5%BC%B9%E5%94%B1%23) `85.5K 🔥` `NEW`
1. [十日终焉藏海传同一海报团队](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E8%97%8F%E6%B5%B7%E4%BC%A0%E5%90%8C%E4%B8%80%E6%B5%B7%E6%8A%A5%E5%9B%A2%E9%98%9F%23) `76.1K 🔥` `NEW`
1. [小米正式调价](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%AD%A3%E5%BC%8F%E8%B0%83%E4%BB%B7%23) `76.0K 🔥` `NEW`
1. [妻子发现丈夫藏200多枚金币气炸](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E8%97%8F200%E5%A4%9A%E6%9E%9A%E9%87%91%E5%B8%81%E6%B0%94%E7%82%B8%23) `1.1M 🔥` `+518%`
1. [原来冲锋衣是胶水粘的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%B2%E9%94%8B%E8%A1%A3%E6%98%AF%E8%83%B6%E6%B0%B4%E7%B2%98%E7%9A%84%23) `407.1K 🔥` `+68%`
1. [第五人格 (fifth personality)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `300.3K 🔥` `+77%`
1. [美股巨震](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%B7%A8%E9%9C%87%23) `300.3K 🔥` `+98%`
1. [美国一海滩藏发现11具遗体](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E6%B5%B7%E6%BB%A9%E8%97%8F%E5%8F%91%E7%8E%B011%E5%85%B7%E9%81%97%E4%BD%93%23) `256.5K 🔥` `+26%`
1. [华为PuraXMax曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXMax%E6%9B%9D%E5%85%89%23) `154.8K 🔥` `+75%`
1. [这支短片名叫问勇 (This short film is called Wen Yong)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%94%AF%E7%9F%AD%E7%89%87%E5%90%8D%E5%8F%AB%E9%97%AE%E5%8B%87%23) `690.5K 🔥`
1. [马頔 我还要生孩子呢](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%20%E6%88%91%E8%BF%98%E8%A6%81%E7%94%9F%E5%AD%A9%E5%AD%90%E5%91%A2%23) `687.0K 🔥`
1. [孙怡送了一个白眼给芒果 (Sun Yi gave Mango a blank look)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%80%81%E4%BA%86%E4%B8%80%E4%B8%AA%E7%99%BD%E7%9C%BC%E7%BB%99%E8%8A%92%E6%9E%9C%23) `394.8K 🔥`
1. [年锦生气](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E9%94%A6%E7%94%9F%E6%B0%94%23) `301.0K 🔥`
1. [宁艺卓祝福柳智敏](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E7%A5%9D%E7%A6%8F%E6%9F%B3%E6%99%BA%E6%95%8F%23) `300.3K 🔥`
1. [鹿晗是扁头](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%98%AF%E6%89%81%E5%A4%B4%23) `182.1K 🔥`
1. [疑似何与朋友点赞吐槽虞书欣言论 (It is suspected that He and his friends liked and complained about Yu Shuxin’s comments)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E4%BD%95%E4%B8%8E%E6%9C%8B%E5%8F%8B%E7%82%B9%E8%B5%9E%E5%90%90%E6%A7%BD%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%A8%80%E8%AE%BA%23) `154.4K 🔥`
1. [朴宝剑拍的刘诗诗王安宇孙千 (Park Bo Gum's photos of Liu Shishi, Wang Anwoo, and Sun Cheon)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E6%8B%8D%E7%9A%84%E5%88%98%E8%AF%97%E8%AF%97%E7%8E%8B%E5%AE%89%E5%AE%87%E5%AD%99%E5%8D%83%23) `150.8K 🔥`
1. [为什么四月要去荣成吃海鲜](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%9B%9B%E6%9C%88%E8%A6%81%E5%8E%BB%E8%8D%A3%E6%88%90%E5%90%83%E6%B5%B7%E9%B2%9C%23) `111.4K 🔥`
1. [一栗小莎子已化疗4次还有8次 (Yili Xiaoshazi has had 4 chemotherapy treatments and there will be 8 more)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E5%B7%B2%E5%8C%96%E7%96%974%E6%AC%A1%E8%BF%98%E6%9C%898%E6%AC%A1%23) `108.4K 🔥`
1. [苏新皓1000平包店人气](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%931000%E5%B9%B3%E5%8C%85%E5%BA%97%E4%BA%BA%E6%B0%94%23) `85.9K 🔥`
1. [左航提醒大家带外套](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E6%8F%90%E9%86%92%E5%A4%A7%E5%AE%B6%E5%B8%A6%E5%A4%96%E5%A5%97%23) `83.8K 🔥`
1. [王濛 性格耿直又见不得美人儿落泪 (Wang Meng has an upright personality and hates seeing beautiful women cry.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E6%80%A7%E6%A0%BC%E8%80%BF%E7%9B%B4%E5%8F%88%E8%A7%81%E4%B8%8D%E5%BE%97%E7%BE%8E%E4%BA%BA%E5%84%BF%E8%90%BD%E6%B3%AA%23) `792.2K 🔥` `-28%`
1. [爸爸出门上班5个月孩子独自留家 (Dad went to work and the child was left home alone for 5 months)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%87%BA%E9%97%A8%E4%B8%8A%E7%8F%AD5%E4%B8%AA%E6%9C%88%E5%AD%A9%E5%AD%90%E7%8B%AC%E8%87%AA%E7%95%99%E5%AE%B6%23) `304.7K 🔥` `-61%`
1. [莫氏鸡煲老板娘说早20年火会拼命赚](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%A8%98%E8%AF%B4%E6%97%A920%E5%B9%B4%E7%81%AB%E4%BC%9A%E6%8B%BC%E5%91%BD%E8%B5%9A%23) `287.9K 🔥` `-33%`
1. [赵子琪不会再来浪姐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E4%B8%8D%E4%BC%9A%E5%86%8D%E6%9D%A5%E6%B5%AA%E5%A7%90%23) `240.8K 🔥` `-28%`
1. [张婉婷风波后首发文 (Zhang Wanting's first post after the controversy)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E5%8F%91%E6%96%87%23) `154.7K 🔥` `-21%`
1. [TOP演唱会人气](https://s.weibo.com/weibo?q=%23TOP%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%BA%E6%B0%94%23) `154.2K 🔥` `-43%`
1. [海底捞礼物 员工罚款购入](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E7%A4%BC%E7%89%A9%20%E5%91%98%E5%B7%A5%E7%BD%9A%E6%AC%BE%E8%B4%AD%E5%85%A5%23) `130.8K 🔥` `-30%`
1. [向太说存款没有200万别买车](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%AD%98%E6%AC%BE%E6%B2%A1%E6%9C%89200%E4%B8%87%E5%88%AB%E4%B9%B0%E8%BD%A6%23) `129.0K 🔥` `-29%`
1. [时代少年团 演唱会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E6%BC%94%E5%94%B1%E4%BC%9A%23) `112.2K 🔥` `-30%`
1. [19岁高中生复刻贝克汉姆惊天吊射](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E9%AB%98%E4%B8%AD%E7%94%9F%E5%A4%8D%E5%88%BB%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E6%83%8A%E5%A4%A9%E5%90%8A%E5%B0%84%23) `111.6K 🔥` `-67%`
1. [郑钧感谢全网为jagger操碎了心](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A7%E6%84%9F%E8%B0%A2%E5%85%A8%E7%BD%91%E4%B8%BAjagger%E6%93%8D%E7%A2%8E%E4%BA%86%E5%BF%83%23) `108.2K 🔥` `-30%`
1. [以军士兵摆拍互动孩子不停颤抖](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%A3%AB%E5%85%B5%E6%91%86%E6%8B%8D%E4%BA%92%E5%8A%A8%E5%AD%A9%E5%AD%90%E4%B8%8D%E5%81%9C%E9%A2%A4%E6%8A%96%23) `108.1K 🔥` `-44%`
1. [朱志鑫澳门演唱会花墙 (Zhu Zhixin Macau Concert Flower Wall)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E6%BE%B3%E9%97%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8A%B1%E5%A2%99%23) `97.6K 🔥` `-22%`
1. [TOP演唱会](https://s.weibo.com/weibo?q=%23TOP%E6%BC%94%E5%94%B1%E4%BC%9A%23) `97.1K 🔥` `-35%`
1. [白鹿晚餐吃水煮菜 (White Deer eats boiled vegetables for dinner)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%99%9A%E9%A4%90%E5%90%83%E6%B0%B4%E7%85%AE%E8%8F%9C%23) `86.4K 🔥` `-23%`
1. [久坐真的会毁掉一个屁股](https://s.weibo.com/weibo?q=%23%E4%B9%85%E5%9D%90%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%AF%81%E6%8E%89%E4%B8%80%E4%B8%AA%E5%B1%81%E8%82%A1%23) `85.6K 🔥` `-32%`
1. [第五人格赛事 (The fifth personality competition)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E8%B5%9B%E4%BA%8B%23) `76.2K 🔥` `-28%`

Updated at 2026-04-11 16:00:40

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
