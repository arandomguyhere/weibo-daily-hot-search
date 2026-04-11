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

1. [王濛 性格耿直又见不得美人儿落泪 (Wang Meng has an upright personality and hates seeing beautiful women cry.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E6%80%A7%E6%A0%BC%E8%80%BF%E7%9B%B4%E5%8F%88%E8%A7%81%E4%B8%8D%E5%BE%97%E7%BE%8E%E4%BA%BA%E5%84%BF%E8%90%BD%E6%B3%AA%23) `1.1M 🔥` `NEW`
1. [这支短片名叫问勇](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%94%AF%E7%9F%AD%E7%89%87%E5%90%8D%E5%8F%AB%E9%97%AE%E5%8B%87%23) `611.3K 🔥` `NEW`
1. [莫氏鸡煲老板娘说早20年火会拼命赚](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%A8%98%E8%AF%B4%E6%97%A920%E5%B9%B4%E7%81%AB%E4%BC%9A%E6%8B%BC%E5%91%BD%E8%B5%9A%23) `428.6K 🔥` `NEW`
1. [年锦生气](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E9%94%A6%E7%94%9F%E6%B0%94%23) `350.0K 🔥` `NEW`
1. [煤矿开采致山体空壳村民家成危房](https://s.weibo.com/weibo?q=%23%E7%85%A4%E7%9F%BF%E5%BC%80%E9%87%87%E8%87%B4%E5%B1%B1%E4%BD%93%E7%A9%BA%E5%A3%B3%E6%9D%91%E6%B0%91%E5%AE%B6%E6%88%90%E5%8D%B1%E6%88%BF%23) `342.9K 🔥` `NEW`
1. [何与朋友道歉](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E6%9C%8B%E5%8F%8B%E9%81%93%E6%AD%89%23) `275.4K 🔥` `NEW`
1. [TOP演唱会人气](https://s.weibo.com/weibo?q=%23TOP%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%BA%E6%B0%94%23) `271.1K 🔥` `NEW`
1. [原来冲锋衣是胶水粘的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%B2%E9%94%8B%E8%A1%A3%E6%98%AF%E8%83%B6%E6%B0%B4%E7%B2%98%E7%9A%84%23) `242.1K 🔥` `NEW`
1. [美国一海滩藏发现11具遗体](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E6%B5%B7%E6%BB%A9%E8%97%8F%E5%8F%91%E7%8E%B011%E5%85%B7%E9%81%97%E4%BD%93%23) `202.8K 🔥` `NEW`
1. [小米新SU7功能即将向其他车型推送](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0SU7%E5%8A%9F%E8%83%BD%E5%8D%B3%E5%B0%86%E5%90%91%E5%85%B6%E4%BB%96%E8%BD%A6%E5%9E%8B%E6%8E%A8%E9%80%81%23) `201.6K 🔥` `NEW`
1. [养父母索赔姚策生父母一审被驳回 (The adoptive parents’ claim against Yao Ce’s biological parents was rejected in the first instance)](https://s.weibo.com/weibo?q=%23%E5%85%BB%E7%88%B6%E6%AF%8D%E7%B4%A2%E8%B5%94%E5%A7%9A%E7%AD%96%E7%94%9F%E7%88%B6%E6%AF%8D%E4%B8%80%E5%AE%A1%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `198.8K 🔥` `NEW`
1. [亚锦赛凤凰组合无缘决赛](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%94%A6%E8%B5%9B%E5%87%A4%E5%87%B0%E7%BB%84%E5%90%88%E6%97%A0%E7%BC%98%E5%86%B3%E8%B5%9B%23) `196.8K 🔥` `NEW`
1. [张婉婷风波后首发文](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E5%8F%91%E6%96%87%23) `194.9K 🔥` `NEW`
1. [莫氏鸡煲老板娘回忆爆火前的日子](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%A8%98%E5%9B%9E%E5%BF%86%E7%88%86%E7%81%AB%E5%89%8D%E7%9A%84%E6%97%A5%E5%AD%90%23) `193.4K 🔥` `NEW`
1. [郑丽文在清华附中秒变三好学生](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E5%9C%A8%E6%B8%85%E5%8D%8E%E9%99%84%E4%B8%AD%E7%A7%92%E5%8F%98%E4%B8%89%E5%A5%BD%E5%AD%A6%E7%94%9F%23) `191.1K 🔥` `NEW`
1. [萧敬腾把雨下到米哈游总部](https://s.weibo.com/weibo?q=%23%E8%90%A7%E6%95%AC%E8%85%BE%E6%8A%8A%E9%9B%A8%E4%B8%8B%E5%88%B0%E7%B1%B3%E5%93%88%E6%B8%B8%E6%80%BB%E9%83%A8%23) `191.1K 🔥` `NEW`
1. [男孩给太爷爷烧纸猫后竟收到真猫](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E7%BB%99%E5%A4%AA%E7%88%B7%E7%88%B7%E7%83%A7%E7%BA%B8%E7%8C%AB%E5%90%8E%E7%AB%9F%E6%94%B6%E5%88%B0%E7%9C%9F%E7%8C%AB%23) `182.9K 🔥` `NEW`
1. [妻子发现丈夫藏200多枚金币气炸](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E8%97%8F200%E5%A4%9A%E6%9E%9A%E9%87%91%E5%B8%81%E6%B0%94%E7%82%B8%23) `180.1K 🔥` `NEW`
1. [美股巨震](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E5%B7%A8%E9%9C%87%23) `151.5K 🔥` `NEW`
1. [TOP演唱会](https://s.weibo.com/weibo?q=%23TOP%E6%BC%94%E5%94%B1%E4%BC%9A%23) `149.8K 🔥` `NEW`
1. [朱志鑫澳门演唱会花墙 (Zhu Zhixin Macau Concert Flower Wall)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E6%BE%B3%E9%97%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8A%B1%E5%A2%99%23) `125.5K 🔥` `NEW`
1. [国风BGM打开中国舰也太燃了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%A3%8EBGM%E6%89%93%E5%BC%80%E4%B8%AD%E5%9B%BD%E8%88%B0%E4%B9%9F%E5%A4%AA%E7%87%83%E4%BA%86%23) `114.8K 🔥` `NEW`
1. [有种老年人看不懂智能手机的无奈感](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%A7%8D%E8%80%81%E5%B9%B4%E4%BA%BA%E7%9C%8B%E4%B8%8D%E6%87%82%E6%99%BA%E8%83%BD%E6%89%8B%E6%9C%BA%E7%9A%84%E6%97%A0%E5%A5%88%E6%84%9F%23) `108.2K 🔥` `NEW`
1. [张极直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9E%81%E7%9B%B4%E6%92%AD%23) `94.0K 🔥` `NEW`
1. [为什么四月要去荣成吃海鲜](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%9B%9B%E6%9C%88%E8%A6%81%E5%8E%BB%E8%8D%A3%E6%88%90%E5%90%83%E6%B5%B7%E9%B2%9C%23) `92.6K 🔥` `NEW`
1. [叶一茜团在宿舍等赵子琪](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%E5%9B%A2%E5%9C%A8%E5%AE%BF%E8%88%8D%E7%AD%89%E8%B5%B5%E5%AD%90%E7%90%AA%23) `91.5K 🔥` `NEW`
1. [左航提醒大家带外套](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E6%8F%90%E9%86%92%E5%A4%A7%E5%AE%B6%E5%B8%A6%E5%A4%96%E5%A5%97%23) `90.9K 🔥` `NEW`
1. [四川资中县3.9级地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E8%B5%84%E4%B8%AD%E5%8E%BF3.9%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `88.8K 🔥` `NEW`
1. [苏新皓1000平包店人气](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%931000%E5%B9%B3%E5%8C%85%E5%BA%97%E4%BA%BA%E6%B0%94%23) `88.4K 🔥` `NEW`
1. [马頔 我还要生孩子呢](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%20%E6%88%91%E8%BF%98%E8%A6%81%E7%94%9F%E5%AD%A9%E5%AD%90%E5%91%A2%23) `596.0K 🔥` `+25%`
1. [孙怡送了一个白眼给芒果 (Sun Yi gave Mango a blank look)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%80%81%E4%BA%86%E4%B8%80%E4%B8%AA%E7%99%BD%E7%9C%BC%E7%BB%99%E8%8A%92%E6%9E%9C%23) `403.2K 🔥` `+107%`
1. [用奔驰陪葬当事人被批评教育](https://s.weibo.com/weibo?q=%23%E7%94%A8%E5%A5%94%E9%A9%B0%E9%99%AA%E8%91%AC%E5%BD%93%E4%BA%8B%E4%BA%BA%E8%A2%AB%E6%89%B9%E8%AF%84%E6%95%99%E8%82%B2%23) `353.4K 🔥` `+108%`
1. [19岁高中生复刻贝克汉姆惊天吊射](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E9%AB%98%E4%B8%AD%E7%94%9F%E5%A4%8D%E5%88%BB%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E6%83%8A%E5%A4%A9%E5%90%8A%E5%B0%84%23) `342.9K 🔥` `+102%`
1. [宁艺卓祝福柳智敏](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E7%A5%9D%E7%A6%8F%E6%9F%B3%E6%99%BA%E6%95%8F%23) `333.7K 🔥` `+112%`
1. [赵子琪不会再来浪姐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E4%B8%8D%E4%BC%9A%E5%86%8D%E6%9D%A5%E6%B5%AA%E5%A7%90%23) `332.4K 🔥` `+96%`
1. [韩国人称被叫小韩感觉不适](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%A7%B0%E8%A2%AB%E5%8F%AB%E5%B0%8F%E9%9F%A9%E6%84%9F%E8%A7%89%E4%B8%8D%E9%80%82%23) `328.8K 🔥` `+158%`
1. [华为PuraXMax曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXMax%E6%9B%9D%E5%85%89%23) `88.6K 🔥` `+34%`
1. [以军士兵摆拍互动孩子不停颤抖](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%A3%AB%E5%85%B5%E6%91%86%E6%8B%8D%E4%BA%92%E5%8A%A8%E5%AD%A9%E5%AD%90%E4%B8%8D%E5%81%9C%E9%A2%A4%E6%8A%96%23) `194.2K 🔥`
1. [疑似何与朋友点赞吐槽虞书欣言论 (It is suspected that He and his friends liked and complained about Yu Shuxin’s comments)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E4%BD%95%E4%B8%8E%E6%9C%8B%E5%8F%8B%E7%82%B9%E8%B5%9E%E5%90%90%E6%A7%BD%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%A8%80%E8%AE%BA%23) `188.0K 🔥`
1. [海底捞礼物 员工罚款购入](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E7%A4%BC%E7%89%A9%20%E5%91%98%E5%B7%A5%E7%BD%9A%E6%AC%BE%E8%B4%AD%E5%85%A5%23) `187.7K 🔥`
1. [鹿晗是扁头](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%98%AF%E6%89%81%E5%A4%B4%23) `186.3K 🔥`
1. [朴宝剑拍的刘诗诗王安宇孙千 (Park Bo Gum's photos of Liu Shishi, Wang Anwoo, and Sun Cheon)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E6%8B%8D%E7%9A%84%E5%88%98%E8%AF%97%E8%AF%97%E7%8E%8B%E5%AE%89%E5%AE%87%E5%AD%99%E5%8D%83%23) `184.0K 🔥`
1. [向太说存款没有200万别买车](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%AD%98%E6%AC%BE%E6%B2%A1%E6%9C%89200%E4%B8%87%E5%88%AB%E4%B9%B0%E8%BD%A6%23) `180.6K 🔥`
1. [时代少年团 演唱会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E6%BC%94%E5%94%B1%E4%BC%9A%23) `159.3K 🔥`
1. [郑钧感谢全网为jagger操碎了心](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A7%E6%84%9F%E8%B0%A2%E5%85%A8%E7%BD%91%E4%B8%BAjagger%E6%93%8D%E7%A2%8E%E4%BA%86%E5%BF%83%23) `155.3K 🔥`
1. [一栗小莎子已化疗4次还有8次 (Yili Xiaoshazi has had 4 chemotherapy treatments and there will be 8 more)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E5%B7%B2%E5%8C%96%E7%96%974%E6%AC%A1%E8%BF%98%E6%9C%898%E6%AC%A1%23) `136.2K 🔥`
1. [白鹿晚餐吃水煮菜 (White Deer eats boiled vegetables for dinner)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%99%9A%E9%A4%90%E5%90%83%E6%B0%B4%E7%85%AE%E8%8F%9C%23) `111.7K 🔥`
1. [爸爸出门上班5个月孩子独自留家 (Dad went to work and the child was left home alone for 5 months)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%87%BA%E9%97%A8%E4%B8%8A%E7%8F%AD5%E4%B8%AA%E6%9C%88%E5%AD%A9%E5%AD%90%E7%8B%AC%E8%87%AA%E7%95%99%E5%AE%B6%23) `784.9K 🔥` `-27%`
1. [久坐真的会毁掉一个屁股](https://s.weibo.com/weibo?q=%23%E4%B9%85%E5%9D%90%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%AF%81%E6%8E%89%E4%B8%80%E4%B8%AA%E5%B1%81%E8%82%A1%23) `125.8K 🔥` `-26%`
1. [第五人格赛事](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E8%B5%9B%E4%BA%8B%23) `105.1K 🔥` `-25%`

Updated at 2026-04-11 15:18:28

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
