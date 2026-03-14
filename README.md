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

1. [KSG战胜AG (KSG defeated AG)](https://s.weibo.com/weibo?q=%23KSG%E6%88%98%E8%83%9CAG%23) `311.2K 🔥` `NEW`
1. [内娱明星在Tiffany晚宴团建](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%98%8E%E6%98%9F%E5%9C%A8Tiffany%E6%99%9A%E5%AE%B4%E5%9B%A2%E5%BB%BA%23) `147.0K 🔥` `NEW`
1. [著名哲学家哈贝马斯去世](https://s.weibo.com/weibo?q=%23%E8%91%97%E5%90%8D%E5%93%B2%E5%AD%A6%E5%AE%B6%E5%93%88%E8%B4%9D%E9%A9%AC%E6%96%AF%E5%8E%BB%E4%B8%96%23) `147.0K 🔥` `NEW`
1. [文淇路演亲了粉丝](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%E8%B7%AF%E6%BC%94%E4%BA%B2%E4%BA%86%E7%B2%89%E4%B8%9D%23) `140.5K 🔥` `NEW`
1. [王皓王楚钦复盘比赛失利](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%8D%E7%9B%98%E6%AF%94%E8%B5%9B%E5%A4%B1%E5%88%A9%23) `132.3K 🔥` `NEW`
1. [柯淳人帅心善买了残疾人的水果](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B7%B3%E4%BA%BA%E5%B8%85%E5%BF%83%E5%96%84%E4%B9%B0%E4%BA%86%E6%AE%8B%E7%96%BE%E4%BA%BA%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `130.5K 🔥` `NEW`
1. [谢征试探长玉](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E8%AF%95%E6%8E%A2%E9%95%BF%E7%8E%89%23) `112.7K 🔥` `NEW`
1. [中超](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%B6%85%23) `112.7K 🔥` `NEW`
1. [袋鼠妈妈被曝虚假宣传孕妇适用](https://s.weibo.com/weibo?q=%23%E8%A2%8B%E9%BC%A0%E5%A6%88%E5%A6%88%E8%A2%AB%E6%9B%9D%E8%99%9A%E5%81%87%E5%AE%A3%E4%BC%A0%E5%AD%95%E5%A6%87%E9%80%82%E7%94%A8%23) `111.9K 🔥` `NEW`
1. [女孩看了一眼领养猫合同背上网贷](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%9C%8B%E4%BA%86%E4%B8%80%E7%9C%BC%E9%A2%86%E5%85%BB%E7%8C%AB%E5%90%88%E5%90%8C%E8%83%8C%E4%B8%8A%E7%BD%91%E8%B4%B7%23) `111.8K 🔥` `NEW`
1. [李宇春裸背红裙 (Li Yuchun bare back red dress)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E8%A3%B8%E8%83%8C%E7%BA%A2%E8%A3%99%23) `111.4K 🔥` `NEW`
1. [原来张凌赫是在callback谢征](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%98%AF%E5%9C%A8callback%E8%B0%A2%E5%BE%81%23) `98.7K 🔥` `NEW`
1. [陈哲远 我台词没那么差](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%20%E6%88%91%E5%8F%B0%E8%AF%8D%E6%B2%A1%E9%82%A3%E4%B9%88%E5%B7%AE%23) `90.9K 🔥` `NEW`
1. [韩综男主持当众殴打女主持](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BB%BC%E7%94%B7%E4%B8%BB%E6%8C%81%E5%BD%93%E4%BC%97%E6%AE%B4%E6%89%93%E5%A5%B3%E4%B8%BB%E6%8C%81%23) `1.1M 🔥` `+865%`
1. [暗访10家便利店10家都卖假烟](https://s.weibo.com/weibo?q=%23%E6%9A%97%E8%AE%BF10%E5%AE%B6%E4%BE%BF%E5%88%A9%E5%BA%9710%E5%AE%B6%E9%83%BD%E5%8D%96%E5%81%87%E7%83%9F%23) `816.5K 🔥` `+333%`
1. [逐玉热度超过宁安如梦](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%83%AD%E5%BA%A6%E8%B6%85%E8%BF%87%E5%AE%81%E5%AE%89%E5%A6%82%E6%A2%A6%23) `348.5K 🔥` `+127%`
1. [吉利银河迈入长续航时代 (Geely Galaxy enters the era of long battery life)](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%88%A9%E9%93%B6%E6%B2%B3%E8%BF%88%E5%85%A5%E9%95%BF%E7%BB%AD%E8%88%AA%E6%97%B6%E4%BB%A3%23) `320.7K 🔥` `+51%`
1. [第一次被一个柜子惊艳到](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A2%AB%E4%B8%80%E4%B8%AA%E6%9F%9C%E5%AD%90%E6%83%8A%E8%89%B3%E5%88%B0%23) `320.1K 🔥` `+27%`
1. [人民大会堂的同款老式热水瓶已停产](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%E7%9A%84%E5%90%8C%E6%AC%BE%E8%80%81%E5%BC%8F%E7%83%AD%E6%B0%B4%E7%93%B6%E5%B7%B2%E5%81%9C%E4%BA%A7%23) `308.3K 🔥` `+43%`
1. [成毅撤诉](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%92%A4%E8%AF%89%23) `307.6K 🔥` `+45%`
1. [中国34岁女子在泰国被抛尸水沟](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD34%E5%B2%81%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%B3%B0%E5%9B%BD%E8%A2%AB%E6%8A%9B%E5%B0%B8%E6%B0%B4%E6%B2%9F%23) `303.6K 🔥` `+51%`
1. [唐嫣张若昀主持 (Tang Yan hosted by Zhang Ruoyun)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%BC%A0%E8%8B%A5%E6%98%80%E4%B8%BB%E6%8C%81%23) `302.9K 🔥` `+50%`
1. [AG对战KSG (AG vs. KSG)](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `284.0K 🔥` `+45%`
1. [胡先煦看了黄子弘凡演唱会](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E7%9C%8B%E4%BA%86%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E6%BC%94%E5%94%B1%E4%BC%9A%23) `203.6K 🔥` `+47%`
1. [两人敲晕老年犬丢垃圾桶致死被罚款](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BA%BA%E6%95%B2%E6%99%95%E8%80%81%E5%B9%B4%E7%8A%AC%E4%B8%A2%E5%9E%83%E5%9C%BE%E6%A1%B6%E8%87%B4%E6%AD%BB%E8%A2%AB%E7%BD%9A%E6%AC%BE%23) `148.3K 🔥` `+42%`
1. [春晚与周深同台女孩靠输血维持生命](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E4%B8%8E%E5%91%A8%E6%B7%B1%E5%90%8C%E5%8F%B0%E5%A5%B3%E5%AD%A9%E9%9D%A0%E8%BE%93%E8%A1%80%E7%BB%B4%E6%8C%81%E7%94%9F%E5%91%BD%23) `133.3K 🔥` `+52%`
1. [十五五民生红包](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E6%B0%91%E7%94%9F%E7%BA%A2%E5%8C%85%23) `639.3K 🔥`
1. [美团外卖周末半价吃大餐 (Meituan Takeaway offers half-price meals on weekends)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E5%91%A8%E6%9C%AB%E5%8D%8A%E4%BB%B7%E5%90%83%E5%A4%A7%E9%A4%90%23) `592.8K 🔥`
1. [爱奇艺海外播放量前十作品 (iQIYI’s top ten most played overseas works)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E6%B5%B7%E5%A4%96%E6%92%AD%E6%94%BE%E9%87%8F%E5%89%8D%E5%8D%81%E4%BD%9C%E5%93%81%23) `321.1K 🔥`
1. [王楚钦差点吐了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%B7%AE%E7%82%B9%E5%90%90%E4%BA%86%23) `310.2K 🔥`
1. [王冕官宣生子](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%86%95%E5%AE%98%E5%AE%A3%E7%94%9F%E5%AD%90%23) `145.1K 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `141.9K 🔥`
1. [日本考虑购买俄罗斯石油](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%80%83%E8%99%91%E8%B4%AD%E4%B9%B0%E4%BF%84%E7%BD%97%E6%96%AF%E7%9F%B3%E6%B2%B9%23) `134.1K 🔥`
1. [林依晨称因熬夜和压力患脑部囊肿](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E7%A7%B0%E5%9B%A0%E7%86%AC%E5%A4%9C%E5%92%8C%E5%8E%8B%E5%8A%9B%E6%82%A3%E8%84%91%E9%83%A8%E5%9B%8A%E8%82%BF%23) `133.8K 🔥`
1. [伊朗称袭击美军中东三大军事基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E8%A2%AD%E5%87%BB%E7%BE%8E%E5%86%9B%E4%B8%AD%E4%B8%9C%E4%B8%89%E5%A4%A7%E5%86%9B%E4%BA%8B%E5%9F%BA%E5%9C%B0%23) `133.1K 🔥`
1. [黄子弘凡鸟巢上座率 (Huang Zihongfan Bird's Nest attendance rate)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E9%B8%9F%E5%B7%A2%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `131.6K 🔥`
1. [一栗小莎子近况](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E8%BF%91%E5%86%B5%23) `131.1K 🔥`
1. [孔雪儿邓凯浴池戏 (Kong Xueer and Deng Kai bath scene)](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E9%82%93%E5%87%AF%E6%B5%B4%E6%B1%A0%E6%88%8F%23) `117.9K 🔥`
1. [TOP直播 (TOP live broadcast)](https://s.weibo.com/weibo?q=%23TOP%E7%9B%B4%E6%92%AD%23) `111.0K 🔥`
1. [生菜是最伟大的蔬菜](https://s.weibo.com/weibo?q=%23%E7%94%9F%E8%8F%9C%E6%98%AF%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E8%94%AC%E8%8F%9C%23) `103.3K 🔥`
1. [原来这就叫感官过载呀](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E5%8F%AB%E6%84%9F%E5%AE%98%E8%BF%87%E8%BD%BD%E5%91%80%23) `91.7K 🔥`
1. [央视315晚会点了4个领域 (CCTV 315 Party highlighted 4 areas)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86315%E6%99%9A%E4%BC%9A%E7%82%B9%E4%BA%864%E4%B8%AA%E9%A2%86%E5%9F%9F%23) `322.5K 🔥` `-58%`
1. [王楚钦2比4松岛辉空 (Wang Chuqin 2 to 4 Matsushima Terukong)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A62%E6%AF%944%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `304.7K 🔥` `-72%`
1. [刘文祥麻辣烫回应鸭肉当猪肉牛肉卖](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E9%BA%BB%E8%BE%A3%E7%83%AB%E5%9B%9E%E5%BA%94%E9%B8%AD%E8%82%89%E5%BD%93%E7%8C%AA%E8%82%89%E7%89%9B%E8%82%89%E5%8D%96%23) `152.9K 🔥` `-31%`
1. [女子翻丈夫手机发现其出轨几十人](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%BF%BB%E4%B8%88%E5%A4%AB%E6%89%8B%E6%9C%BA%E5%8F%91%E7%8E%B0%E5%85%B6%E5%87%BA%E8%BD%A8%E5%87%A0%E5%8D%81%E4%BA%BA%23) `144.0K 🔥` `-31%`
1. [李宇春张靓颖周笔畅该来的都没来](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E5%BC%A0%E9%9D%93%E9%A2%96%E5%91%A8%E7%AC%94%E7%95%85%E8%AF%A5%E6%9D%A5%E7%9A%84%E9%83%BD%E6%B2%A1%E6%9D%A5%23) `141.1K 🔥` `-46%`
1. [王楚钦从1比7到11比8 (Wang Chuqin went from 1 to 7 to 11 to 8)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BB%8E1%E6%AF%947%E5%88%B011%E6%AF%948%23) `131.0K 🔥` `-24%`
1. [女孩长期便血以为是痔疮结果是癌症 (Girl's long-term blood in stool thought it was hemorrhoids but turned out to be cancer)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%95%BF%E6%9C%9F%E4%BE%BF%E8%A1%80%E4%BB%A5%E4%B8%BA%E6%98%AF%E7%97%94%E7%96%AE%E7%BB%93%E6%9E%9C%E6%98%AF%E7%99%8C%E7%97%87%23) `114.5K 🔥` `-23%`
1. [逐玉预告](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%A2%84%E5%91%8A%23) `113.1K 🔥` `-41%`
1. [谢征替樊长玉受罚](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%9B%BF%E6%A8%8A%E9%95%BF%E7%8E%89%E5%8F%97%E7%BD%9A%23) `91.6K 🔥` `-31%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `90.4K 🔥` `-34%`

Updated at 2026-03-14 22:56:12

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
