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

1. [重庆彭水发现失联中巴车残骸 (Wreckage of missing minibus found in Pengshui, Chongqing)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%8F%91%E7%8E%B0%E5%A4%B1%E8%81%94%E4%B8%AD%E5%B7%B4%E8%BD%A6%E6%AE%8B%E9%AA%B8%23) `1.2M 🔥` `NEW`
1. [多部电影撤出暑期档](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%83%A8%E7%94%B5%E5%BD%B1%E6%92%A4%E5%87%BA%E6%9A%91%E6%9C%9F%E6%A1%A3%23) `668.6K 🔥` `NEW`
1. [红霞成为本世纪登陆广东最强初台](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%9C%9E%E6%88%90%E4%B8%BA%E6%9C%AC%E4%B8%96%E7%BA%AA%E7%99%BB%E9%99%86%E5%B9%BF%E4%B8%9C%E6%9C%80%E5%BC%BA%E5%88%9D%E5%8F%B0%23) `661.3K 🔥` `NEW`
1. [长鑫科技周边酒店一房难求](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%91%A8%E8%BE%B9%E9%85%92%E5%BA%97%E4%B8%80%E6%88%BF%E9%9A%BE%E6%B1%82%23) `481.4K 🔥` `NEW`
1. [Hope闪现骗过导播](https://s.weibo.com/weibo?q=%23Hope%E9%97%AA%E7%8E%B0%E9%AA%97%E8%BF%87%E5%AF%BC%E6%92%AD%23) `478.7K 🔥` `NEW`
1. [土耳其女排3比1巴西女排](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E5%A5%B3%E6%8E%923%E6%AF%941%E5%B7%B4%E8%A5%BF%E5%A5%B3%E6%8E%92%23) `475.6K 🔥` `NEW`
1. [李宏毅是第一个起诉李登科的](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%8F%E6%AF%85%E6%98%AF%E7%AC%AC%E4%B8%80%E4%B8%AA%E8%B5%B7%E8%AF%89%E6%9D%8E%E7%99%BB%E7%A7%91%E7%9A%84%23) `474.1K 🔥` `NEW`
1. [王一博第二名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%AC%AC%E4%BA%8C%E5%90%8D%23) `471.5K 🔥` `NEW`
1. [现在的电影扑街就撤档](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E7%94%B5%E5%BD%B1%E6%89%91%E8%A1%97%E5%B0%B1%E6%92%A4%E6%A1%A3%23) `465.3K 🔥` `NEW`
1. [张凌赫王楚然都这样了付辛博你还不走](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%83%BD%E8%BF%99%E6%A0%B7%E4%BA%86%E4%BB%98%E8%BE%9B%E5%8D%9A%E4%BD%A0%E8%BF%98%E4%B8%8D%E8%B5%B0%23) `362.9K 🔥` `NEW`
1. [李宏毅方硬刚李登科 (Li Hongyi Fang Gang Li Dengke)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%8F%E6%AF%85%E6%96%B9%E7%A1%AC%E5%88%9A%E6%9D%8E%E7%99%BB%E7%A7%91%23) `354.0K 🔥` `NEW`
1. [王楚钦 被岁月摧残得不错](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%20%E8%A2%AB%E5%B2%81%E6%9C%88%E6%91%A7%E6%AE%8B%E5%BE%97%E4%B8%8D%E9%94%99%23) `353.1K 🔥` `NEW`
1. [鞠婧祎简直跟自带磨皮一样](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%AE%80%E7%9B%B4%E8%B7%9F%E8%87%AA%E5%B8%A6%E7%A3%A8%E7%9A%AE%E4%B8%80%E6%A0%B7%23) `351.9K 🔥` `NEW`
1. [张元英为mlb开球](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E4%B8%BAmlb%E5%BC%80%E7%90%83%23) `345.0K 🔥` `NEW`
1. [伊朗称暂停对等打击美行动](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%9A%82%E5%81%9C%E5%AF%B9%E7%AD%89%E6%89%93%E5%87%BB%E7%BE%8E%E8%A1%8C%E5%8A%A8%23) `342.9K 🔥` `NEW`
1. [我的前半生名场面翻红](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%90%8D%E5%9C%BA%E9%9D%A2%E7%BF%BB%E7%BA%A2%23) `336.6K 🔥` `NEW`
1. [等等长成美式甜弟了](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%AD%89%E9%95%BF%E6%88%90%E7%BE%8E%E5%BC%8F%E7%94%9C%E5%BC%9F%E4%BA%86%23) `335.7K 🔥` `NEW`
1. [一家三口AI识菇中毒4岁女童进ICU](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3AI%E8%AF%86%E8%8F%87%E4%B8%AD%E6%AF%924%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%BF%9BICU%23) `334.2K 🔥` `NEW`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `329.9K 🔥` `NEW`
1. [群星闪耀时 吴磊](https://s.weibo.com/weibo?q=%23%E7%BE%A4%E6%98%9F%E9%97%AA%E8%80%80%E6%97%B6%20%E5%90%B4%E7%A3%8A%23) `327.1K 🔥` `NEW`
1. [营收近60亿绿源为何还要擦边 (Why does Luyuan, with a revenue of nearly 6 billion, still brush aside the sidelines?)](https://s.weibo.com/weibo?q=%23%E8%90%A5%E6%94%B6%E8%BF%9160%E4%BA%BF%E7%BB%BF%E6%BA%90%E4%B8%BA%E4%BD%95%E8%BF%98%E8%A6%81%E6%93%A6%E8%BE%B9%23) `325.3K 🔥` `NEW`
1. [学校强制老师无偿陪餐摊派到人](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%A0%A1%E5%BC%BA%E5%88%B6%E8%80%81%E5%B8%88%E6%97%A0%E5%81%BF%E9%99%AA%E9%A4%90%E6%91%8A%E6%B4%BE%E5%88%B0%E4%BA%BA%23) `323.4K 🔥` `NEW`
1. [王俊凯当潮汐漫溢巡回演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%BD%93%E6%BD%AE%E6%B1%90%E6%BC%AB%E6%BA%A2%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `315.9K 🔥` `NEW`
1. [长鑫科技首日成交测算](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E9%A6%96%E6%97%A5%E6%88%90%E4%BA%A4%E6%B5%8B%E7%AE%97%23) `312.3K 🔥` `NEW`
1. [蔡徐坤TheDeadman演唱会](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4TheDeadman%E6%BC%94%E5%94%B1%E4%BC%9A%23) `308.3K 🔥` `NEW`
1. [长鑫科技上市对A股有何影响](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%B8%8A%E5%B8%82%E5%AF%B9A%E8%82%A1%E6%9C%89%E4%BD%95%E5%BD%B1%E5%93%8D%23) `302.5K 🔥` `NEW`
1. [许嵩演唱会](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E6%BC%94%E5%94%B1%E4%BC%9A%23) `301.0K 🔥` `NEW`
1. [欧豪娜扎染了同款发色](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E8%B1%AA%E5%A8%9C%E6%89%8E%E6%9F%93%E4%BA%86%E5%90%8C%E6%AC%BE%E5%8F%91%E8%89%B2%23) `300.2K 🔥` `NEW`
1. [群星闪耀时撤档 (Canceling when the stars shine)](https://s.weibo.com/weibo?q=%23%E7%BE%A4%E6%98%9F%E9%97%AA%E8%80%80%E6%97%B6%E6%92%A4%E6%A1%A3%23) `917.6K 🔥` `+27%`
1. [暑假博物馆热度拉满 (Museums are very popular during summer vacation)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E5%81%87%E5%8D%9A%E7%89%A9%E9%A6%86%E7%83%AD%E5%BA%A6%E6%8B%89%E6%BB%A1%23) `681.2K 🔥` `+66%`
1. [原来请假是不需要理由的 (It turns out that there is no need for a reason to ask for leave.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%AF%B7%E5%81%87%E6%98%AF%E4%B8%8D%E9%9C%80%E8%A6%81%E7%90%86%E7%94%B1%E7%9A%84%23) `673.2K 🔥` `+84%`
1. [不要长期向AI倾泻心事](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E9%95%BF%E6%9C%9F%E5%90%91AI%E5%80%BE%E6%B3%BB%E5%BF%83%E4%BA%8B%23) `480.9K 🔥` `+193%`
1. [又一女生称被gmm工作人员污蔑插队](https://s.weibo.com/weibo?q=%23%E5%8F%88%E4%B8%80%E5%A5%B3%E7%94%9F%E7%A7%B0%E8%A2%ABgmm%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E6%B1%A1%E8%94%91%E6%8F%92%E9%98%9F%23) `435.3K 🔥` `+236%`
1. [昆凌是昆凌的姓 (Kunling is the surname of Kunling)](https://s.weibo.com/weibo?q=%23%E6%98%86%E5%87%8C%E6%98%AF%E6%98%86%E5%87%8C%E7%9A%84%E5%A7%93%23) `350.0K 🔥` `+21%`
1. [花二十多万买了个48平的海景房 (I spent more than 200,000 yuan to buy a 48-square-meter sea-view house.)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E4%BA%8C%E5%8D%81%E5%A4%9A%E4%B8%87%E4%B9%B0%E4%BA%86%E4%B8%AA48%E5%B9%B3%E7%9A%84%E6%B5%B7%E6%99%AF%E6%88%BF%23) `347.8K 🔥` `+182%`
1. [朱志鑫凌晨发博回复粉丝 (Zhu Zhixin posted a reply to fans in the early morning)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%87%8C%E6%99%A8%E5%8F%91%E5%8D%9A%E5%9B%9E%E5%A4%8D%E7%B2%89%E4%B8%9D%23) `346.0K 🔥` `+169%`
1. [电影功夫女足](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `339.7K 🔥` `+102%`
1. [亲密关系容易产生轻视 (Intimacy can easily lead to contempt)](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E5%AE%B9%E6%98%93%E4%BA%A7%E7%94%9F%E8%BD%BB%E8%A7%86%23) `338.6K 🔥` `+124%`
1. [百万粉丝女网红贩卖私密视频被逮捕 (Female Internet celebrity with millions of fans was arrested for selling private videos)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E7%B2%89%E4%B8%9D%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%B4%A9%E5%8D%96%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91%E8%A2%AB%E9%80%AE%E6%8D%95%23) `331.6K 🔥` `+160%`
1. [怪不得总打不到蚊子](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E6%80%BB%E6%89%93%E4%B8%8D%E5%88%B0%E8%9A%8A%E5%AD%90%23) `327.3K 🔥` `+151%`
1. [终于明白职场没有朋友的含义了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%98%8E%E7%99%BD%E8%81%8C%E5%9C%BA%E6%B2%A1%E6%9C%89%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%90%AB%E4%B9%89%E4%BA%86%23) `320.1K 🔥` `+149%`
1. [迪丽热巴名字长还有这好处 (Dilireba’s long name also has this advantage)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%8D%E5%AD%97%E9%95%BF%E8%BF%98%E6%9C%89%E8%BF%99%E5%A5%BD%E5%A4%84%23) `318.4K 🔥` `+153%`
1. [小刺猬偷吃西瓜因太可爱逃过一劫](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%88%BA%E7%8C%AC%E5%81%B7%E5%90%83%E8%A5%BF%E7%93%9C%E5%9B%A0%E5%A4%AA%E5%8F%AF%E7%88%B1%E9%80%83%E8%BF%87%E4%B8%80%E5%8A%AB%23) `317.8K 🔥` `+167%`
1. [林瀚强吻晚晚 (Lin Han forced to kiss Wan Wan)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%80%9A%E5%BC%BA%E5%90%BB%E6%99%9A%E6%99%9A%23) `313.2K 🔥` `+68%`
1. [鹿晗粉碎热搜词条 (Luhan crushes hot search terms)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%B2%89%E7%A2%8E%E7%83%AD%E6%90%9C%E8%AF%8D%E6%9D%A1%23) `310.5K 🔥` `+169%`
1. [00后网格员已找到应该被铭记 (The post-00 grid member has been found and should be remembered)](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E7%BD%91%E6%A0%BC%E5%91%98%E5%B7%B2%E6%89%BE%E5%88%B0%E5%BA%94%E8%AF%A5%E8%A2%AB%E9%93%AD%E8%AE%B0%23) `305.8K 🔥` `+163%`
1. [少年心气是不可再生之物 (The youthful spirit is an irreplaceable thing)](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%B9%B4%E5%BF%83%E6%B0%94%E6%98%AF%E4%B8%8D%E5%8F%AF%E5%86%8D%E7%94%9F%E4%B9%8B%E7%89%A9%23) `305.5K 🔥` `+161%`
1. [四川九寨沟景区泥石流](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B9%9D%E5%AF%A8%E6%B2%9F%E6%99%AF%E5%8C%BA%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `297.4K 🔥` `+138%`
1. [原来小区是这样命名的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B0%8F%E5%8C%BA%E6%98%AF%E8%BF%99%E6%A0%B7%E5%91%BD%E5%90%8D%E7%9A%84%23) `295.0K 🔥` `+145%`
1. [杭州已经发展成这样了吗 (Has Hangzhou developed like this?)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%B7%B2%E7%BB%8F%E5%8F%91%E5%B1%95%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `471.1K 🔥`

Updated at 2026-07-27 08:12:54

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
