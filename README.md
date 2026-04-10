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

1. [小米食堂发布小米冰激凌 (Xiaomi Canteen releases Xiaomi ice cream)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A3%9F%E5%A0%82%E5%8F%91%E5%B8%83%E5%B0%8F%E7%B1%B3%E5%86%B0%E6%BF%80%E5%87%8C%23) `1.1M 🔥` `NEW`
1. [男子追求女技师被拒举报浴场涉黄](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%BD%E6%B1%82%E5%A5%B3%E6%8A%80%E5%B8%88%E8%A2%AB%E6%8B%92%E4%B8%BE%E6%8A%A5%E6%B5%B4%E5%9C%BA%E6%B6%89%E9%BB%84%23) `777.2K 🔥` `NEW`
1. [高质量发展中国行](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E4%B8%AD%E5%9B%BD%E8%A1%8C%23) `606.9K 🔥` `NEW`
1. [日本外交蓝皮书降级中日关系](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%96%E4%BA%A4%E8%93%9D%E7%9A%AE%E4%B9%A6%E9%99%8D%E7%BA%A7%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%23) `430.4K 🔥` `NEW`
1. [男子杀害4岁女儿后报溺水假警](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B34%E5%B2%81%E5%A5%B3%E5%84%BF%E5%90%8E%E6%8A%A5%E6%BA%BA%E6%B0%B4%E5%81%87%E8%AD%A6%23) `428.7K 🔥` `NEW`
1. [耳屎对身体有害是谣言](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B1%8E%E5%AF%B9%E8%BA%AB%E4%BD%93%E6%9C%89%E5%AE%B3%E6%98%AF%E8%B0%A3%E8%A8%80%23) `428.7K 🔥` `NEW`
1. [李晟十日终焉选角好贴脸](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%9F%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%80%89%E8%A7%92%E5%A5%BD%E8%B4%B4%E8%84%B8%23) `428.6K 🔥` `NEW`
1. [痔疮手术9天后死亡医院只赔1万](https://s.weibo.com/weibo?q=%23%E7%97%94%E7%96%AE%E6%89%8B%E6%9C%AF9%E5%A4%A9%E5%90%8E%E6%AD%BB%E4%BA%A1%E5%8C%BB%E9%99%A2%E5%8F%AA%E8%B5%941%E4%B8%87%23) `428.5K 🔥` `NEW`
1. [我奶的联系人备注](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A5%B6%E7%9A%84%E8%81%94%E7%B3%BB%E4%BA%BA%E5%A4%87%E6%B3%A8%23) `376.6K 🔥` `NEW`
1. [边伯贤离开INB100](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E4%BC%AF%E8%B4%A4%E7%A6%BB%E5%BC%80INB100%23) `204.6K 🔥` `NEW`
1. [猪的抑郁症表现行为 (Depression behavior in pigs)](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E7%9A%84%E6%8A%91%E9%83%81%E7%97%87%E8%A1%A8%E7%8E%B0%E8%A1%8C%E4%B8%BA%23) `202.9K 🔥` `NEW`
1. [研究发现血型和疾病的发生有相关性](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E5%8F%91%E7%8E%B0%E8%A1%80%E5%9E%8B%E5%92%8C%E7%96%BE%E7%97%85%E7%9A%84%E5%8F%91%E7%94%9F%E6%9C%89%E7%9B%B8%E5%85%B3%E6%80%A7%23) `197.6K 🔥` `NEW`
1. [谢娜给张杰约按摩被拒](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%BB%99%E5%BC%A0%E6%9D%B0%E7%BA%A6%E6%8C%89%E6%91%A9%E8%A2%AB%E6%8B%92%23) `178.4K 🔥` `NEW`
1. [边伯贤金珉锡金钟大解约](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E4%BC%AF%E8%B4%A4%E9%87%91%E7%8F%89%E9%94%A1%E9%87%91%E9%92%9F%E5%A4%A7%E8%A7%A3%E7%BA%A6%23) `175.9K 🔥` `NEW`
1. [樊振东弃赛不是退缩是规划](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BC%83%E8%B5%9B%E4%B8%8D%E6%98%AF%E9%80%80%E7%BC%A9%E6%98%AF%E8%A7%84%E5%88%92%23) `152.2K 🔥` `NEW`
1. [莫氏鸡煲员工吃了10多天外卖](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%91%98%E5%B7%A5%E5%90%83%E4%BA%8610%E5%A4%9A%E5%A4%A9%E5%A4%96%E5%8D%96%23) `137.1K 🔥` `NEW`
1. [毛晓慧领衔主演十日终焉](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E6%85%A7%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `115.0K 🔥` `NEW`
1. [小米冰淇淋真有小米](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%86%B0%E6%B7%87%E6%B7%8B%E7%9C%9F%E6%9C%89%E5%B0%8F%E7%B1%B3%23) `101.3K 🔥` `NEW`
1. [妻子称丈夫杀害4岁女儿是为骗保](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%A7%B0%E4%B8%88%E5%A4%AB%E6%9D%80%E5%AE%B34%E5%B2%81%E5%A5%B3%E5%84%BF%E6%98%AF%E4%B8%BA%E9%AA%97%E4%BF%9D%23) `95.0K 🔥` `NEW`
1. [央视曝光越南相亲真相](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E8%B6%8A%E5%8D%97%E7%9B%B8%E4%BA%B2%E7%9C%9F%E7%9B%B8%23) `94.1K 🔥` `NEW`
1. [金子涵想拥有自己的家庭 (Jin Jinhan wants to have his own family)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E6%83%B3%E6%8B%A5%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E5%AE%B6%E5%BA%AD%23) `92.6K 🔥` `NEW`
1. [奥迪E7X媒体闭门沟通会泄密](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AAE7X%E5%AA%92%E4%BD%93%E9%97%AD%E9%97%A8%E6%B2%9F%E9%80%9A%E4%BC%9A%E6%B3%84%E5%AF%86%23) `84.0K 🔥` `NEW`
1. [杨紫在腾讯破三万率100%](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%9C%A8%E8%85%BE%E8%AE%AF%E7%A0%B4%E4%B8%89%E4%B8%87%E7%8E%87100%25%23) `83.4K 🔥` `NEW`
1. [罗永浩谈奔驰豪车被当陪葬品](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%B0%88%E5%A5%94%E9%A9%B0%E8%B1%AA%E8%BD%A6%E8%A2%AB%E5%BD%93%E9%99%AA%E8%91%AC%E5%93%81%23) `83.3K 🔥` `NEW`
1. [民政局回应用真奔驰车陪葬](https://s.weibo.com/weibo?q=%23%E6%B0%91%E6%94%BF%E5%B1%80%E5%9B%9E%E5%BA%94%E7%94%A8%E7%9C%9F%E5%A5%94%E9%A9%B0%E8%BD%A6%E9%99%AA%E8%91%AC%23) `83.1K 🔥` `NEW`
1. [沈月晒8年前照片](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%99%928%E5%B9%B4%E5%89%8D%E7%85%A7%E7%89%87%23) `77.1K 🔥` `NEW`
1. [银行网点招人要求男185cm女175cm](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E7%BD%91%E7%82%B9%E6%8B%9B%E4%BA%BA%E8%A6%81%E6%B1%82%E7%94%B7185cm%E5%A5%B3175cm%23) `73.4K 🔥` `NEW`
1. [李现帮我拍了拍立得](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%B8%AE%E6%88%91%E6%8B%8D%E4%BA%86%E6%8B%8D%E7%AB%8B%E5%BE%97%23) `72.9K 🔥` `NEW`
1. [美国男子不满工资烧毁10亿元货物](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%94%B7%E5%AD%90%E4%B8%8D%E6%BB%A1%E5%B7%A5%E8%B5%84%E7%83%A7%E6%AF%8110%E4%BA%BF%E5%85%83%E8%B4%A7%E7%89%A9%23) `70.4K 🔥` `NEW`
1. [小猫反复确认能不能出去玩](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%8F%8D%E5%A4%8D%E7%A1%AE%E8%AE%A4%E8%83%BD%E4%B8%8D%E8%83%BD%E5%87%BA%E5%8E%BB%E7%8E%A9%23) `70.1K 🔥` `NEW`
1. [曝华为14周销量超苹果成第一 (Huawei's sales surpassed Apple's to become No. 1 in 14 weeks)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BA14%E5%91%A8%E9%94%80%E9%87%8F%E8%B6%85%E8%8B%B9%E6%9E%9C%E6%88%90%E7%AC%AC%E4%B8%80%23) `69.6K 🔥` `NEW`
1. [小米冰淇淋延续汽车命名方式](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%86%B0%E6%B7%87%E6%B7%8B%E5%BB%B6%E7%BB%AD%E6%B1%BD%E8%BD%A6%E5%91%BD%E5%90%8D%E6%96%B9%E5%BC%8F%23) `59.8K 🔥` `NEW`
1. [张维伊吃汉堡馒头4天减2.6斤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%B4%E4%BC%8A%E5%90%83%E6%B1%89%E5%A0%A1%E9%A6%92%E5%A4%B44%E5%A4%A9%E5%87%8F2.6%E6%96%A4%23) `58.1K 🔥` `NEW`
1. [老人生前埋20万现金叮嘱留儿女](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%94%9F%E5%89%8D%E5%9F%8B20%E4%B8%87%E7%8E%B0%E9%87%91%E5%8F%AE%E5%98%B1%E7%95%99%E5%84%BF%E5%A5%B3%23) `57.7K 🔥` `NEW`
1. [魏建军内部会议痛斥定语技术营销](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%BB%BA%E5%86%9B%E5%86%85%E9%83%A8%E4%BC%9A%E8%AE%AE%E7%97%9B%E6%96%A5%E5%AE%9A%E8%AF%AD%E6%8A%80%E6%9C%AF%E8%90%A5%E9%94%80%23) `55.9K 🔥` `NEW`
1. [安徽省考](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E7%9C%81%E8%80%83%23) `55.6K 🔥` `NEW`
1. [谢娜剧透张杰演唱会有惊喜](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%89%A7%E9%80%8F%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E6%9C%89%E6%83%8A%E5%96%9C%23) `54.9K 🔥` `NEW`
1. [王者你已急哭头像框](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E4%BD%A0%E5%B7%B2%E6%80%A5%E5%93%AD%E5%A4%B4%E5%83%8F%E6%A1%86%23) `53.4K 🔥` `NEW`
1. [伊朗最高领袖发表最新声明](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%8F%91%E8%A1%A8%E6%9C%80%E6%96%B0%E5%A3%B0%E6%98%8E%23) `208.9K 🔥` `+208%`
1. [医生分析黄子韬嘴唇发紫原因 (Doctor analyzes the cause of Huang Zitao’s purple lips)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%88%86%E6%9E%90%E9%BB%84%E5%AD%90%E9%9F%AC%E5%98%B4%E5%94%87%E5%8F%91%E7%B4%AB%E5%8E%9F%E5%9B%A0%23) `201.0K 🔥` `+53%`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `147.3K 🔥`
1. [种地吧 (Farm it)](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `66.9K 🔥`
1. [浪姐 (Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `55.2K 🔥`
1. [十日终焉开机 (Will be launched in ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%BC%80%E6%9C%BA%23) `205.2K 🔥` `-83%`
1. [浪姐曾邀请孟子义被拒绝了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%9B%BE%E9%82%80%E8%AF%B7%E5%AD%9F%E5%AD%90%E4%B9%89%E8%A2%AB%E6%8B%92%E7%BB%9D%E4%BA%86%23) `129.2K 🔥` `-48%`
1. [马頔说李纯很假](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E8%AF%B4%E6%9D%8E%E7%BA%AF%E5%BE%88%E5%81%87%23) `88.1K 🔥` `-24%`
1. [用人民币感受日本物价](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%BA%BA%E6%B0%91%E5%B8%81%E6%84%9F%E5%8F%97%E6%97%A5%E6%9C%AC%E7%89%A9%E4%BB%B7%23) `70.4K 🔥` `-47%`
1. [楚乔传](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%23) `61.7K 🔥` `-24%`
1. [初三女生被5名舍友殴打校长被停职](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%89%E5%A5%B3%E7%94%9F%E8%A2%AB5%E5%90%8D%E8%88%8D%E5%8F%8B%E6%AE%B4%E6%89%93%E6%A0%A1%E9%95%BF%E8%A2%AB%E5%81%9C%E8%81%8C%23) `51.9K 🔥` `-39%`

Updated at 2026-04-10 16:00:37

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
