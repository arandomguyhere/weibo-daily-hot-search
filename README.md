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

1. [警方删除威胁捐日军罪证少年言论 (Police delete teenager's remarks threatening to donate to Japanese army)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%88%A0%E9%99%A4%E5%A8%81%E8%83%81%E6%8D%90%E6%97%A5%E5%86%9B%E7%BD%AA%E8%AF%81%E5%B0%91%E5%B9%B4%E8%A8%80%E8%AE%BA%23) `1.3M 🔥` `NEW`
1. [这四个字读懂上半年中国经济](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%9B%9B%E4%B8%AA%E5%AD%97%E8%AF%BB%E6%87%82%E4%B8%8A%E5%8D%8A%E5%B9%B4%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%23) `685.2K 🔥` `NEW`
1. [黄景瑜为什么不站起来](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%AB%99%E8%B5%B7%E6%9D%A5%23) `516.6K 🔥` `NEW`
1. [婚外胚胎](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%23) `430.7K 🔥` `NEW`
1. [弟弟举报哥哥用自己高考身份读大学](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E4%B8%BE%E6%8A%A5%E5%93%A5%E5%93%A5%E7%94%A8%E8%87%AA%E5%B7%B1%E9%AB%98%E8%80%83%E8%BA%AB%E4%BB%BD%E8%AF%BB%E5%A4%A7%E5%AD%A6%23) `428.0K 🔥` `NEW`
1. [房主任淘汰](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E6%B7%98%E6%B1%B0%23) `425.1K 🔥` `NEW`
1. [林心如霍建华结婚十周年](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%83%E5%A6%82%E9%9C%8D%E5%BB%BA%E5%8D%8E%E7%BB%93%E5%A9%9A%E5%8D%81%E5%91%A8%E5%B9%B4%23) `405.5K 🔥` `NEW`
1. [没人告诉我爬泰山最重要的是内裤](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E4%BA%BA%E5%91%8A%E8%AF%89%E6%88%91%E7%88%AC%E6%B3%B0%E5%B1%B1%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%E5%86%85%E8%A3%A4%23) `405.0K 🔥` `NEW`
1. [歼15飞行员雨中盲操安全着舰](https://s.weibo.com/weibo?q=%23%E6%AD%BC15%E9%A3%9E%E8%A1%8C%E5%91%98%E9%9B%A8%E4%B8%AD%E7%9B%B2%E6%93%8D%E5%AE%89%E5%85%A8%E7%9D%80%E8%88%B0%23) `404.6K 🔥` `NEW`
1. [文淇比基尼好辣](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%E6%AF%94%E5%9F%BA%E5%B0%BC%E5%A5%BD%E8%BE%A3%23) `404.2K 🔥` `NEW`
1. [上海偶遇Angelababy吃甜品 (Meeting Angelababy for dessert in Shanghai)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%81%B6%E9%81%87Angelababy%E5%90%83%E7%94%9C%E5%93%81%23) `403.9K 🔥` `NEW`
1. [节目组给刘宇宁配字](https://s.weibo.com/weibo?q=%23%E8%8A%82%E7%9B%AE%E7%BB%84%E7%BB%99%E5%88%98%E5%AE%87%E5%AE%81%E9%85%8D%E5%AD%97%23) `403.7K 🔥` `NEW`
1. [三寸钉](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%AF%B8%E9%92%89%23) `403.3K 🔥` `NEW`
1. [有一种安全感叫解放军](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%B8%80%E7%A7%8D%E5%AE%89%E5%85%A8%E6%84%9F%E5%8F%AB%E8%A7%A3%E6%94%BE%E5%86%9B%23) `403.1K 🔥` `NEW`
1. [日本为何能维持98%以上就业率](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%BA%E4%BD%95%E8%83%BD%E7%BB%B4%E6%8C%8198%25%E4%BB%A5%E4%B8%8A%E5%B0%B1%E4%B8%9A%E7%8E%87%23) `402.8K 🔥` `NEW`
1. [时代少年团好像七个丁程鑫](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%A5%BD%E5%83%8F%E4%B8%83%E4%B8%AA%E4%B8%81%E7%A8%8B%E9%91%AB%23) `402.5K 🔥` `NEW`
1. [苏醒说今后不再参加熟人以外的真人秀](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E8%AF%B4%E4%BB%8A%E5%90%8E%E4%B8%8D%E5%86%8D%E5%8F%82%E5%8A%A0%E7%86%9F%E4%BA%BA%E4%BB%A5%E5%A4%96%E7%9A%84%E7%9C%9F%E4%BA%BA%E7%A7%80%23) `402.3K 🔥` `NEW`
1. [2万金戒指掉高铁厕所老人发声](https://s.weibo.com/weibo?q=%232%E4%B8%87%E9%87%91%E6%88%92%E6%8C%87%E6%8E%89%E9%AB%98%E9%93%81%E5%8E%95%E6%89%80%E8%80%81%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `367.3K 🔥` `NEW`
1. [蜘蛛侠内地香港屏摄对比](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%E5%86%85%E5%9C%B0%E9%A6%99%E6%B8%AF%E5%B1%8F%E6%91%84%E5%AF%B9%E6%AF%94%23) `366.2K 🔥` `NEW`
1. [俄罗斯姐弟在泰国被杀害](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%A7%90%E5%BC%9F%E5%9C%A8%E6%B3%B0%E5%9B%BD%E8%A2%AB%E6%9D%80%E5%AE%B3%23) `349.0K 🔥` `NEW`
1. [五台山被雷击网友称眼前一白就倒了 (Netizens said that Wutai Mountain was struck by lightning and fell down as soon as their eyes turned white.)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%8F%B0%E5%B1%B1%E8%A2%AB%E9%9B%B7%E5%87%BB%E7%BD%91%E5%8F%8B%E7%A7%B0%E7%9C%BC%E5%89%8D%E4%B8%80%E7%99%BD%E5%B0%B1%E5%80%92%E4%BA%86%23) `344.3K 🔥` `NEW`
1. [九门口碑爆了](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%8F%A3%E7%A2%91%E7%88%86%E4%BA%86%23) `343.6K 🔥` `NEW`
1. [周佑凌拍的柳柳](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%E6%8B%8D%E7%9A%84%E6%9F%B3%E6%9F%B3%23) `324.5K 🔥` `NEW`
1. [杨幂吃全绿素菜](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%90%83%E5%85%A8%E7%BB%BF%E7%B4%A0%E8%8F%9C%23) `284.6K 🔥` `NEW`
1. [孩子颜值问题小时候可以干预](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E9%A2%9C%E5%80%BC%E9%97%AE%E9%A2%98%E5%B0%8F%E6%97%B6%E5%80%99%E5%8F%AF%E4%BB%A5%E5%B9%B2%E9%A2%84%23) `283.7K 🔥` `NEW`
1. [时代峰峻妹 谁来了都得出神图](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%A6%B9%20%E8%B0%81%E6%9D%A5%E4%BA%86%E9%83%BD%E5%BE%97%E5%87%BA%E7%A5%9E%E5%9B%BE%23) `225.2K 🔥` `NEW`
1. [刘宇宁给王玉雯递纸](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%BB%99%E7%8E%8B%E7%8E%89%E9%9B%AF%E9%80%92%E7%BA%B8%23) `224.5K 🔥` `NEW`
1. [浙江泰顺廊桥局部陷落致1死](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E6%B3%B0%E9%A1%BA%E5%BB%8A%E6%A1%A5%E5%B1%80%E9%83%A8%E9%99%B7%E8%90%BD%E8%87%B41%E6%AD%BB%23) `224.3K 🔥` `NEW`
1. [AI要办选秀了](https://s.weibo.com/weibo?q=%23AI%E8%A6%81%E5%8A%9E%E9%80%89%E7%A7%80%E4%BA%86%23) `223.0K 🔥` `NEW`
1. [董宇辉看500遍大话西游是什么概念](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E7%9C%8B500%E9%81%8D%E5%A4%A7%E8%AF%9D%E8%A5%BF%E6%B8%B8%E6%98%AF%E4%BB%80%E4%B9%88%E6%A6%82%E5%BF%B5%23) `221.3K 🔥` `NEW`
1. [光遇 (light encounter)](https://s.weibo.com/weibo?q=%23%E5%85%89%E9%81%87%23) `220.9K 🔥` `NEW`
1. [程青松辟谣杨幂百花奖首女配双提](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E9%9D%92%E6%9D%BE%E8%BE%9F%E8%B0%A3%E6%9D%A8%E5%B9%82%E7%99%BE%E8%8A%B1%E5%A5%96%E9%A6%96%E5%A5%B3%E9%85%8D%E5%8F%8C%E6%8F%90%23) `208.7K 🔥` `NEW`
1. [韩国两女子吸毒后在马路现骇人行为](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%A4%E5%A5%B3%E5%AD%90%E5%90%B8%E6%AF%92%E5%90%8E%E5%9C%A8%E9%A9%AC%E8%B7%AF%E7%8E%B0%E9%AA%87%E4%BA%BA%E8%A1%8C%E4%B8%BA%23) `202.6K 🔥` `NEW`
1. [中美拼人形机器人日本搞炒饭](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E6%8B%BC%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%97%A5%E6%9C%AC%E6%90%9E%E7%82%92%E9%A5%AD%23) `199.2K 🔥` `NEW`
1. [中国p图爆改震惊日本网友](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDp%E5%9B%BE%E7%88%86%E6%94%B9%E9%9C%87%E6%83%8A%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%23) `197.3K 🔥` `NEW`
1. [张婧仪这辈子都不可能主动追人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E8%BF%99%E8%BE%88%E5%AD%90%E9%83%BD%E4%B8%8D%E5%8F%AF%E8%83%BD%E4%B8%BB%E5%8A%A8%E8%BF%BD%E4%BA%BA%23) `191.3K 🔥` `NEW`
1. [美年达小黄人新包装官宣联动 (Mirinda Minions new packaging official announcement linkage)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%B9%B4%E8%BE%BE%E5%B0%8F%E9%BB%84%E4%BA%BA%E6%96%B0%E5%8C%85%E8%A3%85%E5%AE%98%E5%AE%A3%E8%81%94%E5%8A%A8%23) `426.1K 🔥` `+38%`
1. [车企7月份销量数据](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BC%817%E6%9C%88%E4%BB%BD%E9%94%80%E9%87%8F%E6%95%B0%E6%8D%AE%23) `406.0K 🔥` `+97%`
1. [小澈直播被封](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%BE%88%E7%9B%B4%E6%92%AD%E8%A2%AB%E5%B0%81%23) `405.3K 🔥` `+50%`
1. [女生老拉肚子发现吸管内壁全是污垢 (A girl who keeps having diarrhea finds that the inner wall of the straw is full of dirt)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%80%81%E6%8B%89%E8%82%9A%E5%AD%90%E5%8F%91%E7%8E%B0%E5%90%B8%E7%AE%A1%E5%86%85%E5%A3%81%E5%85%A8%E6%98%AF%E6%B1%A1%E5%9E%A2%23) `401.9K 🔥` `+98%`
1. [211大学生应聘暑假工变家教](https://s.weibo.com/weibo?q=%23211%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%BA%94%E8%81%98%E6%9A%91%E5%81%87%E5%B7%A5%E5%8F%98%E5%AE%B6%E6%95%99%23) `376.3K 🔥` `+84%`
1. [AI女团选秀108位参赛9人成团](https://s.weibo.com/weibo?q=%23AI%E5%A5%B3%E5%9B%A2%E9%80%89%E7%A7%80108%E4%BD%8D%E5%8F%82%E8%B5%9B9%E4%BA%BA%E6%88%90%E5%9B%A2%23) `368.6K 🔥` `+84%`
1. [DeepSeekV4Flash正式版跑分出炉 (DeepSeekV4Flash official version running scores released)](https://s.weibo.com/weibo?q=%23DeepSeekV4Flash%E6%AD%A3%E5%BC%8F%E7%89%88%E8%B7%91%E5%88%86%E5%87%BA%E7%82%89%23) `345.0K 🔥` `+107%`
1. [老人高铁如厕掉落金戒指求助无果](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E9%AB%98%E9%93%81%E5%A6%82%E5%8E%95%E6%8E%89%E8%90%BD%E9%87%91%E6%88%92%E6%8C%87%E6%B1%82%E5%8A%A9%E6%97%A0%E6%9E%9C%23) `889.9K 🔥`
1. [公司裁员从胖的开始 (The company's layoffs start with the fat ones)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%A3%81%E5%91%98%E4%BB%8E%E8%83%96%E7%9A%84%E5%BC%80%E5%A7%8B%23) `284.6K 🔥`
1. [林子烨也在看TF四代突围](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%E4%B9%9F%E5%9C%A8%E7%9C%8BTF%E5%9B%9B%E4%BB%A3%E7%AA%81%E5%9B%B4%23) `196.5K 🔥`
1. [奶奶给我做的减脂餐](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E7%BB%99%E6%88%91%E5%81%9A%E7%9A%84%E5%87%8F%E8%84%82%E9%A4%90%23) `406.4K 🔥` `-21%`
1. [喜羊羊新作画面疑似擦边](https://s.weibo.com/weibo?q=%23%E5%96%9C%E7%BE%8A%E7%BE%8A%E6%96%B0%E4%BD%9C%E7%94%BB%E9%9D%A2%E7%96%91%E4%BC%BC%E6%93%A6%E8%BE%B9%23) `406.2K 🔥` `-45%`
1. [莫得闲今日开播](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%BE%97%E9%97%B2%E4%BB%8A%E6%97%A5%E5%BC%80%E6%92%AD%23) `220.3K 🔥` `-65%`

Updated at 2026-08-01 15:14:14

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
