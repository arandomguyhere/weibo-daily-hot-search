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

1. [田曦薇的微醺感藏不住了 (Tian Xiwei couldn't hide her tipsy feeling.)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%9A%84%E5%BE%AE%E9%86%BA%E6%84%9F%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `318.5K 🔥` `NEW`
1. [空枪真疯遇劲敌](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%E7%9C%9F%E7%96%AF%E9%81%87%E5%8A%B2%E6%95%8C%23) `306.1K 🔥` `NEW`
1. [梅尼耶女友与迪丽热巴合照](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%B0%BC%E8%80%B6%E5%A5%B3%E5%8F%8B%E4%B8%8E%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%88%E7%85%A7%23) `272.8K 🔥` `NEW`
1. [台风沙德尔](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%B2%99%E5%BE%B7%E5%B0%94%23) `228.0K 🔥` `NEW`
1. [中国洗碗视频被外网称教科书](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B4%97%E7%A2%97%E8%A7%86%E9%A2%91%E8%A2%AB%E5%A4%96%E7%BD%91%E7%A7%B0%E6%95%99%E7%A7%91%E4%B9%A6%23) `225.4K 🔥` `NEW`
1. [杨天真曝影视寒冬现状](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%E6%9B%9D%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E7%8E%B0%E7%8A%B6%23) `204.0K 🔥` `NEW`
1. [看关晓彤吃减脂餐都觉得香](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%83%E5%87%8F%E8%84%82%E9%A4%90%E9%83%BD%E8%A7%89%E5%BE%97%E9%A6%99%23) `189.9K 🔥` `NEW`
1. [百万粉丝网红制售淫秽视频被批捕](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E7%B2%89%E4%B8%9D%E7%BD%91%E7%BA%A2%E5%88%B6%E5%94%AE%E6%B7%AB%E7%A7%BD%E8%A7%86%E9%A2%91%E8%A2%AB%E6%89%B9%E6%8D%95%23) `183.4K 🔥` `NEW`
1. [绍兴 六月欣](https://s.weibo.com/weibo?q=%23%E7%BB%8D%E5%85%B4%20%E5%85%AD%E6%9C%88%E6%AC%A3%23) `182.2K 🔥` `NEW`
1. [陈柏霖后悔逃兵](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%9F%8F%E9%9C%96%E5%90%8E%E6%82%94%E9%80%83%E5%85%B5%23) `181.9K 🔥` `NEW`
1. [黄子韬直播偷亲徐艺洋 (Huang Zitao secretly kisses Xu Yiyang live broadcast)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E7%9B%B4%E6%92%AD%E5%81%B7%E4%BA%B2%E5%BE%90%E8%89%BA%E6%B4%8B%23) `179.9K 🔥` `NEW`
1. [基辛格妻子去世](https://s.weibo.com/weibo?q=%23%E5%9F%BA%E8%BE%9B%E6%A0%BC%E5%A6%BB%E5%AD%90%E5%8E%BB%E4%B8%96%23) `179.4K 🔥` `NEW`
1. [CodexHarness开源](https://s.weibo.com/weibo?q=%23CodexHarness%E5%BC%80%E6%BA%90%23) `172.5K 🔥` `NEW`
1. [孟子义郝念角色照](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E9%83%9D%E5%BF%B5%E8%A7%92%E8%89%B2%E7%85%A7%23) `423.7K 🔥` `+52%`
1. [网购水果骗局](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%B4%AD%E6%B0%B4%E6%9E%9C%E9%AA%97%E5%B1%80%23) `228.5K 🔥` `+37%`
1. [宝马iX3价格 (BMW iX3 price)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E9%A9%ACiX3%E4%BB%B7%E6%A0%BC%23) `1.2M 🔥`
1. [泡泡玛特IP格局大变 (Big changes in the IP landscape of Bubble Mart)](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9IP%E6%A0%BC%E5%B1%80%E5%A4%A7%E5%8F%98%23) `851.6K 🔥`
1. [县域消费迎重磅利好](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%9F%9F%E6%B6%88%E8%B4%B9%E8%BF%8E%E9%87%8D%E7%A3%85%E5%88%A9%E5%A5%BD%23) `680.9K 🔥`
1. [单位没有人情味](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BD%8D%E6%B2%A1%E6%9C%89%E4%BA%BA%E6%83%85%E5%91%B3%23) `641.6K 🔥`
1. [哈尔滨速滑运动员截肢](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E9%80%9F%E6%BB%91%E8%BF%90%E5%8A%A8%E5%91%98%E6%88%AA%E8%82%A2%23) `577.5K 🔥`
1. [EDG官宣Stew加入](https://s.weibo.com/weibo?q=%23EDG%E5%AE%98%E5%AE%A3Stew%E5%8A%A0%E5%85%A5%23) `424.0K 🔥`
1. [凌玲的道歉邮件有错别字](https://s.weibo.com/weibo?q=%23%E5%87%8C%E7%8E%B2%E7%9A%84%E9%81%93%E6%AD%89%E9%82%AE%E4%BB%B6%E6%9C%89%E9%94%99%E5%88%AB%E5%AD%97%23) `423.3K 🔥`
1. [外貌红利 人高马大 (Appearance bonus: tall and powerful)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E8%B2%8C%E7%BA%A2%E5%88%A9%20%E4%BA%BA%E9%AB%98%E9%A9%AC%E5%A4%A7%23) `310.1K 🔥`
1. [25万级奶爸车打到15万 (The 250,000-class nanny car costs 150,000)](https://s.weibo.com/weibo?q=%2325%E4%B8%87%E7%BA%A7%E5%A5%B6%E7%88%B8%E8%BD%A6%E6%89%93%E5%88%B015%E4%B8%87%23) `308.6K 🔥`
1. [王者荣耀 国服孙策](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%20%E5%9B%BD%E6%9C%8D%E5%AD%99%E7%AD%96%23) `304.5K 🔥`
1. [杜兰特NBA历史总收入第一](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B9NBA%E5%8E%86%E5%8F%B2%E6%80%BB%E6%94%B6%E5%85%A5%E7%AC%AC%E4%B8%80%23) `218.4K 🔥`
1. [胡锡进谈北大教授灵活就业是福利言论](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E8%B0%88%E5%8C%97%E5%A4%A7%E6%95%99%E6%8E%88%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E6%98%AF%E7%A6%8F%E5%88%A9%E8%A8%80%E8%AE%BA%23) `204.0K 🔥`
1. [将门毒后广播剧投票 (Vote for the radio drama after Jiangmen was poisoned)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%E5%B9%BF%E6%92%AD%E5%89%A7%E6%8A%95%E7%A5%A8%23) `183.5K 🔥`
1. [醒来定档](https://s.weibo.com/weibo?q=%23%E9%86%92%E6%9D%A5%E5%AE%9A%E6%A1%A3%23) `179.2K 🔥`
1. [爱在无尽夏开机路透](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%E5%BC%80%E6%9C%BA%E8%B7%AF%E9%80%8F%23) `174.4K 🔥`
1. [陈妍希我家那闺女官宣](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%E5%AE%98%E5%AE%A3%23) `170.6K 🔥`
1. [北大教授称灵活就业是福利](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E6%95%99%E6%8E%88%E7%A7%B0%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E6%98%AF%E7%A6%8F%E5%88%A9%23) `616.7K 🔥` `-22%`
1. [奇瑞是中国车更是全球车 (Chery is a Chinese car and a global car)](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E%E6%98%AF%E4%B8%AD%E5%9B%BD%E8%BD%A6%E6%9B%B4%E6%98%AF%E5%85%A8%E7%90%83%E8%BD%A6%23) `517.2K 🔥` `-28%`
1. [网红卖淫秽视频被抓时问会判刑吗 (If an internet celebrity is caught selling pornographic videos, will he be sentenced?)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%8D%96%E6%B7%AB%E7%A7%BD%E8%A7%86%E9%A2%91%E8%A2%AB%E6%8A%93%E6%97%B6%E9%97%AE%E4%BC%9A%E5%88%A4%E5%88%91%E5%90%97%23) `487.4K 🔥` `-32%`
1. [公摊 霍英东 (Public stall Fok Yingdong)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E6%91%8A%20%E9%9C%8D%E8%8B%B1%E4%B8%9C%23) `423.1K 🔥` `-48%`
1. [赵丽颖儿子想想7岁身高](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%84%BF%E5%AD%90%E6%83%B3%E6%83%B37%E5%B2%81%E8%BA%AB%E9%AB%98%23) `422.7K 🔥` `-27%`
1. [美莎克致广西两地159死10失联](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%8E%8E%E5%85%8B%E8%87%B4%E5%B9%BF%E8%A5%BF%E4%B8%A4%E5%9C%B0159%E6%AD%BB10%E5%A4%B1%E8%81%94%23) `422.2K 🔥` `-41%`
1. [孙骁骁说生二胎是对老公和婆家的肯定 (Sun Xiaojie said that having a second child is an affirmation to her husband and in-laws)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%AA%81%E9%AA%81%E8%AF%B4%E7%94%9F%E4%BA%8C%E8%83%8E%E6%98%AF%E5%AF%B9%E8%80%81%E5%85%AC%E5%92%8C%E5%A9%86%E5%AE%B6%E7%9A%84%E8%82%AF%E5%AE%9A%23) `370.2K 🔥` `-48%`
1. [时代少年团F1商标相似度](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2F1%E5%95%86%E6%A0%87%E7%9B%B8%E4%BC%BC%E5%BA%A6%23) `308.8K 🔥` `-21%`
1. [大冰称婚后上交工资是三观问题](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E7%A7%B0%E5%A9%9A%E5%90%8E%E4%B8%8A%E4%BA%A4%E5%B7%A5%E8%B5%84%E6%98%AF%E4%B8%89%E8%A7%82%E9%97%AE%E9%A2%98%23) `304.8K 🔥` `-49%`
1. [曹格儿子表白女友](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E6%A0%BC%E5%84%BF%E5%AD%90%E8%A1%A8%E7%99%BD%E5%A5%B3%E5%8F%8B%23) `260.4K 🔥` `-64%`
1. [王者荣耀全网寻撞持刀男子外卖员 (King of Glory searches for male deliveryman armed with knife)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%85%A8%E7%BD%91%E5%AF%BB%E6%92%9E%E6%8C%81%E5%88%80%E7%94%B7%E5%AD%90%E5%A4%96%E5%8D%96%E5%91%98%23) `237.1K 🔥` `-35%`
1. [韩雪 你是要气死妈妈吗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E9%9B%AA%20%E4%BD%A0%E6%98%AF%E8%A6%81%E6%B0%94%E6%AD%BB%E5%A6%88%E5%A6%88%E5%90%97%23) `228.5K 🔥` `-44%`
1. [河清海晏开机](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E6%B8%85%E6%B5%B7%E6%99%8F%E5%BC%80%E6%9C%BA%23) `228.5K 🔥` `-68%`
1. [美国赌AI中国全都要](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%B5%8CAI%E4%B8%AD%E5%9B%BD%E5%85%A8%E9%83%BD%E8%A6%81%23) `225.8K 🔥` `-30%`
1. [长城偶遇冯绍峰父子](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%9F%8E%E5%81%B6%E9%81%87%E5%86%AF%E7%BB%8D%E5%B3%B0%E7%88%B6%E5%AD%90%23) `225.2K 🔥` `-35%`
1. [曝魏子宸飞机上与路人合照](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%AD%8F%E5%AD%90%E5%AE%B8%E9%A3%9E%E6%9C%BA%E4%B8%8A%E4%B8%8E%E8%B7%AF%E4%BA%BA%E5%90%88%E7%85%A7%23) `224.7K 🔥` `-21%`
1. [张雪说送到统一为止 (Zhang Xue said that it would be sent to Tongyuan)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%AF%B4%E9%80%81%E5%88%B0%E7%BB%9F%E4%B8%80%E4%B8%BA%E6%AD%A2%23) `216.9K 🔥` `-27%`
1. [家用爆款享界V8来了 (The popular household model Xiangjie V8 is here)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E7%94%A8%E7%88%86%E6%AC%BE%E4%BA%AB%E7%95%8CV8%E6%9D%A5%E4%BA%86%23) `208.2K 🔥` `-41%`
1. [孕早期胎停大多不是孕妇个人过失](https://s.weibo.com/weibo?q=%23%E5%AD%95%E6%97%A9%E6%9C%9F%E8%83%8E%E5%81%9C%E5%A4%A7%E5%A4%9A%E4%B8%8D%E6%98%AF%E5%AD%95%E5%A6%87%E4%B8%AA%E4%BA%BA%E8%BF%87%E5%A4%B1%23) `169.3K 🔥` `-27%`

Updated at 2026-08-21 13:01:21

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
