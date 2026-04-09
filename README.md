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

1. [海湾国家慌了 (Gulf countries panic)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B9%BE%E5%9B%BD%E5%AE%B6%E6%85%8C%E4%BA%86%23) `542.9K 🔥` `NEW`
1. [CORTIS中国区首代馥蕾诗](https://s.weibo.com/weibo?q=%23CORTIS%E4%B8%AD%E5%9B%BD%E5%8C%BA%E9%A6%96%E4%BB%A3%E9%A6%A5%E8%95%BE%E8%AF%97%23) `176.9K 🔥` `NEW`
1. [sbti 孤儿](https://s.weibo.com/weibo?q=%23sbti%20%E5%AD%A4%E5%84%BF%23) `170.5K 🔥` `NEW`
1. [sbti人格测试](https://s.weibo.com/weibo?q=%23sbti%E4%BA%BA%E6%A0%BC%E6%B5%8B%E8%AF%95%23) `107.2K 🔥` `NEW`
1. [霍尔木兹海峡完全关闭](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%AE%8C%E5%85%A8%E5%85%B3%E9%97%AD%23) `105.8K 🔥` `NEW`
1. [尤物](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E7%89%A9%23) `104.9K 🔥` `NEW`
1. [金子涵的收藏](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E7%9A%84%E6%94%B6%E8%97%8F%23) `104.8K 🔥` `NEW`
1. [伊朗最高领袖提出三点主张](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E6%8F%90%E5%87%BA%E4%B8%89%E7%82%B9%E4%B8%BB%E5%BC%A0%23) `103.1K 🔥` `NEW`
1. [美以伊停火全是戏](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E4%BC%8A%E5%81%9C%E7%81%AB%E5%85%A8%E6%98%AF%E6%88%8F%23) `101.6K 🔥` `NEW`
1. [sbti妈妈](https://s.weibo.com/weibo?q=%23sbti%E5%A6%88%E5%A6%88%23) `97.4K 🔥` `NEW`
1. [李小冉我每天吃一个唐僧 (Li Xiaoran I eat a Tang Monk every day)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%88%91%E6%AF%8F%E5%A4%A9%E5%90%83%E4%B8%80%E4%B8%AA%E5%94%90%E5%83%A7%23) `74.0K 🔥` `NEW`
1. [李昀锐面部生理性颤抖](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E9%9D%A2%E9%83%A8%E7%94%9F%E7%90%86%E6%80%A7%E9%A2%A4%E6%8A%96%23) `69.5K 🔥` `NEW`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `62.8K 🔥` `NEW`
1. [黎巴嫩首都遭以军密集空袭](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E5%B7%B4%E5%AB%A9%E9%A6%96%E9%83%BD%E9%81%AD%E4%BB%A5%E5%86%9B%E5%AF%86%E9%9B%86%E7%A9%BA%E8%A2%AD%23) `58.3K 🔥` `NEW`
1. [胃病癌变前的6个求救信号](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%97%85%E7%99%8C%E5%8F%98%E5%89%8D%E7%9A%846%E4%B8%AA%E6%B1%82%E6%95%91%E4%BF%A1%E5%8F%B7%23) `49.5K 🔥` `NEW`
1. [拿捏者](https://s.weibo.com/weibo?q=%23%E6%8B%BF%E6%8D%8F%E8%80%85%23) `48.2K 🔥` `NEW`
1. [孟子义可以来浪姐踢馆](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%8F%AF%E4%BB%A5%E6%9D%A5%E6%B5%AA%E5%A7%90%E8%B8%A2%E9%A6%86%23) `48.1K 🔥` `NEW`
1. [武汉有轨电车与电动车相撞 (Tram collides with electric car in Wuhan)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E6%9C%89%E8%BD%A8%E7%94%B5%E8%BD%A6%E4%B8%8E%E7%94%B5%E5%8A%A8%E8%BD%A6%E7%9B%B8%E6%92%9E%23) `981.3K 🔥` `+59%`
1. [男子卖房为母治病打赏女主播22.5万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%96%E6%88%BF%E4%B8%BA%E6%AF%8D%E6%B2%BB%E7%97%85%E6%89%93%E8%B5%8F%E5%A5%B3%E4%B8%BB%E6%92%AD22.5%E4%B8%87%23) `688.8K 🔥` `+58%`
1. [春日经济活力的关键何在 (What's the key to economic vitality in Kasuga?)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%97%A5%E7%BB%8F%E6%B5%8E%E6%B4%BB%E5%8A%9B%E7%9A%84%E5%85%B3%E9%94%AE%E4%BD%95%E5%9C%A8%23) `566.3K 🔥` `+65%`
1. [华为高尔夫手表今日开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%AB%98%E5%B0%94%E5%A4%AB%E6%89%8B%E8%A1%A8%E4%BB%8A%E6%97%A5%E5%BC%80%E5%94%AE%23) `552.5K 🔥` `+1683%`
1. [李纯吐槽自己妈妈没苦硬吃 (Li Chun complained that his mother did not have to endure hardships)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BA%AF%E5%90%90%E6%A7%BD%E8%87%AA%E5%B7%B1%E5%A6%88%E5%A6%88%E6%B2%A1%E8%8B%A6%E7%A1%AC%E5%90%83%23) `278.1K 🔥` `+378%`
1. [降至300元的降脂针被纳入医保 (Lipid-lowering injections costing NT$300 are included in medical insurance)](https://s.weibo.com/weibo?q=%23%E9%99%8D%E8%87%B3300%E5%85%83%E7%9A%84%E9%99%8D%E8%84%82%E9%92%88%E8%A2%AB%E7%BA%B3%E5%85%A5%E5%8C%BB%E4%BF%9D%23) `125.8K 🔥` `+60%`
1. [莫氏鸡煲评论区发声明](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%8F%91%E5%A3%B0%E6%98%8E%23) `112.3K 🔥` `+31%`
1. [大疆Pocket4 (DJI Pocket4)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%23) `107.2K 🔥` `+49%`
1. [sbti测试是啥 (What is the sbti test?)](https://s.weibo.com/weibo?q=%23sbti%E6%B5%8B%E8%AF%95%E6%98%AF%E5%95%A5%23) `106.6K 🔥` `+49%`
1. [将门独后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%23) `106.0K 🔥` `+21%`
1. [瘫痪女孩误买邓紫棋演唱会票平台拒退](https://s.weibo.com/weibo?q=%23%E7%98%AB%E7%97%AA%E5%A5%B3%E5%AD%A9%E8%AF%AF%E4%B9%B0%E9%82%93%E7%B4%AB%E6%A3%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E5%B9%B3%E5%8F%B0%E6%8B%92%E9%80%80%23) `104.5K 🔥` `+46%`
1. [离异父母均拒接孩子司机当场怒斥](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%BC%82%E7%88%B6%E6%AF%8D%E5%9D%87%E6%8B%92%E6%8E%A5%E5%AD%A9%E5%AD%90%E5%8F%B8%E6%9C%BA%E5%BD%93%E5%9C%BA%E6%80%92%E6%96%A5%23) `102.7K 🔥` `+47%`
1. [测sbti要笑晕了 (I'm going to faint from laughter when I test SBTI.)](https://s.weibo.com/weibo?q=%23%E6%B5%8Bsbti%E8%A6%81%E7%AC%91%E6%99%95%E4%BA%86%23) `102.4K 🔥` `+46%`
1. [人民日报评吴克群](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%90%B4%E5%85%8B%E7%BE%A4%23) `101.9K 🔥` `+75%`
1. [陈添祥长文道歉](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B7%BB%E7%A5%A5%E9%95%BF%E6%96%87%E9%81%93%E6%AD%89%23) `101.3K 🔥` `+48%`
1. [迪丽热巴待播剧](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BE%85%E6%92%AD%E5%89%A7%23) `92.6K 🔥` `+28%`
1. [伊朗表示不会对以侵略行为保持沉默 (Iran says it will not remain silent on aggression)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A1%A8%E7%A4%BA%E4%B8%8D%E4%BC%9A%E5%AF%B9%E4%BB%A5%E4%BE%B5%E7%95%A5%E8%A1%8C%E4%B8%BA%E4%BF%9D%E6%8C%81%E6%B2%89%E9%BB%98%23) `92.3K 🔥` `+160%`
1. [刘强东和章泽天新公司叫天强](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BC%BA%E4%B8%9C%E5%92%8C%E7%AB%A0%E6%B3%BD%E5%A4%A9%E6%96%B0%E5%85%AC%E5%8F%B8%E5%8F%AB%E5%A4%A9%E5%BC%BA%23) `78.1K 🔥` `+36%`
1. [女子头痛硬扛7天昏迷确诊李斯特菌 (Woman was diagnosed with listeria after enduring headache and coma for 7 days)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A4%B4%E7%97%9B%E7%A1%AC%E6%89%9B7%E5%A4%A9%E6%98%8F%E8%BF%B7%E7%A1%AE%E8%AF%8A%E6%9D%8E%E6%96%AF%E7%89%B9%E8%8F%8C%23) `71.7K 🔥` `+62%`
1. [开心消消乐程序员写给女友的情书 (A love letter written by a Happy Xiaoxiao Le programmer to his girlfriend)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%BF%83%E6%B6%88%E6%B6%88%E4%B9%90%E7%A8%8B%E5%BA%8F%E5%91%98%E5%86%99%E7%BB%99%E5%A5%B3%E5%8F%8B%E7%9A%84%E6%83%85%E4%B9%A6%23) `71.5K 🔥` `+23%`
1. [刘畊宏再晒王俊凯小泡芙合照 (Liu Genghong posted another photo of Wang Junkai’s puff puffs)](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%8A%E5%AE%8F%E5%86%8D%E6%99%92%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B0%8F%E6%B3%A1%E8%8A%99%E5%90%88%E7%85%A7%23) `56.8K 🔥` `+44%`
1. [男二被防爆 当观众坐第一排 (The second male lead was caught in an explosion while the audience was sitting in the front row)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%BA%8C%E8%A2%AB%E9%98%B2%E7%88%86%20%E5%BD%93%E8%A7%82%E4%BC%97%E5%9D%90%E7%AC%AC%E4%B8%80%E6%8E%92%23) `55.6K 🔥` `+55%`
1. [伊朗总统说手扣扳机绝不抛弃黎巴嫩](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AF%B4%E6%89%8B%E6%89%A3%E6%89%B3%E6%9C%BA%E7%BB%9D%E4%B8%8D%E6%8A%9B%E5%BC%83%E9%BB%8E%E5%B7%B4%E5%AB%A9%23) `48.3K 🔥` `+42%`
1. [王毅同朝鲜外相崔善姬举行会谈](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%90%8C%E6%9C%9D%E9%B2%9C%E5%A4%96%E7%9B%B8%E5%B4%94%E5%96%84%E5%A7%AC%E4%B8%BE%E8%A1%8C%E4%BC%9A%E8%B0%88%23) `48.1K 🔥` `+45%`
1. [小米YU7入门级版本 (Xiaomi YU7 entry-level version)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7%E5%85%A5%E9%97%A8%E7%BA%A7%E7%89%88%E6%9C%AC%23) `48.1K 🔥` `+46%`
1. [浑身是血的美军上校15分钟被转移 (The U.S. Army colonel covered in blood was transferred in 15 minutes)](https://s.weibo.com/weibo?q=%23%E6%B5%91%E8%BA%AB%E6%98%AF%E8%A1%80%E7%9A%84%E7%BE%8E%E5%86%9B%E4%B8%8A%E6%A0%A115%E5%88%86%E9%92%9F%E8%A2%AB%E8%BD%AC%E7%A7%BB%23) `48.1K 🔥` `+32%`
1. [多情者 (Passionate)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%83%85%E8%80%85%23) `48.1K 🔥` `+46%`
1. [金莎孙丞潇领证](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E9%A2%86%E8%AF%81%23) `48.1K 🔥` `+45%`
1. [父亲回应平台全额退瘫痪女儿票钱 (Father responds to platform to fully refund paralyzed daughter’s tickets)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%B9%B3%E5%8F%B0%E5%85%A8%E9%A2%9D%E9%80%80%E7%98%AB%E7%97%AA%E5%A5%B3%E5%84%BF%E7%A5%A8%E9%92%B1%23) `48.1K 🔥` `+43%`
1. [孙杨3比0姚钧涛](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A83%E6%AF%940%E5%A7%9A%E9%92%A7%E6%B6%9B%23) `48.1K 🔥` `+46%`
1. [美以或对伊朗采取割草模式](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E6%88%96%E5%AF%B9%E4%BC%8A%E6%9C%97%E9%87%87%E5%8F%96%E5%89%B2%E8%8D%89%E6%A8%A1%E5%BC%8F%23) `346.9K 🔥`
1. [伊朗谈判条件今非昔比 (Iran’s negotiating conditions are no longer what they used to be)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%B0%88%E5%88%A4%E6%9D%A1%E4%BB%B6%E4%BB%8A%E9%9D%9E%E6%98%94%E6%AF%94%23) `65.6K 🔥`
1. [平台将助力瘫痪女孩看邓紫棋演唱会 (The platform will help paralyzed girls watch Deng Ziqi’s concert)](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E5%B0%86%E5%8A%A9%E5%8A%9B%E7%98%AB%E7%97%AA%E5%A5%B3%E5%AD%A9%E7%9C%8B%E9%82%93%E7%B4%AB%E6%A3%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `52.7K 🔥`
1. [赵丽颖楚乔传城墙爆破花絮](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%A5%9A%E4%B9%94%E4%BC%A0%E5%9F%8E%E5%A2%99%E7%88%86%E7%A0%B4%E8%8A%B1%E7%B5%AE%23) `48.1K 🔥`
1. [以色列总理对美国提要求 (Israeli PM makes demands on U.S.)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%90%86%E5%AF%B9%E7%BE%8E%E5%9B%BD%E6%8F%90%E8%A6%81%E6%B1%82%23) `103.6K 🔥` `-21%`

Updated at 2026-04-10 07:49:36

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
