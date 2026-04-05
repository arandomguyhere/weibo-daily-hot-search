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

1. [梦到已故儿子脚被扎父亲来墓前拔刺 (I dreamed that my deceased son was stabbed in the foot and his father came to the grave to remove the stabbing.)](https://s.weibo.com/weibo?q=%23%E6%A2%A6%E5%88%B0%E5%B7%B2%E6%95%85%E5%84%BF%E5%AD%90%E8%84%9A%E8%A2%AB%E6%89%8E%E7%88%B6%E4%BA%B2%E6%9D%A5%E5%A2%93%E5%89%8D%E6%8B%94%E5%88%BA%23) `1.4M 🔥` `NEW`
1. [王楚钦vs雨果](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E9%9B%A8%E6%9E%9C%23) `867.7K 🔥` `NEW`
1. [陈都灵曾舜晞 戏份](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E6%9B%BE%E8%88%9C%E6%99%9E%20%E6%88%8F%E4%BB%BD%23) `555.0K 🔥` `NEW`
1. [专家辟谣味精在高温下致癌](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%BE%9F%E8%B0%A3%E5%91%B3%E7%B2%BE%E5%9C%A8%E9%AB%98%E6%B8%A9%E4%B8%8B%E8%87%B4%E7%99%8C%23) `318.5K 🔥` `NEW`
1. [蓝色果然抑制食欲](https://s.weibo.com/weibo?q=%23%E8%93%9D%E8%89%B2%E6%9E%9C%E7%84%B6%E6%8A%91%E5%88%B6%E9%A3%9F%E6%AC%B2%23) `176.3K 🔥` `NEW`
1. [松岛辉空4比3林昀儒](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA4%E6%AF%943%E6%9E%97%E6%98%80%E5%84%92%23) `176.2K 🔥` `NEW`
1. [申裕斌回应铜牌](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%A3%95%E6%96%8C%E5%9B%9E%E5%BA%94%E9%93%9C%E7%89%8C%23) `137.7K 🔥` `NEW`
1. [田嘉瑞荧幕初吻是鞠婧祎](https://s.weibo.com/weibo?q=%23%E7%94%B0%E5%98%89%E7%91%9E%E8%8D%A7%E5%B9%95%E5%88%9D%E5%90%BB%E6%98%AF%E9%9E%A0%E5%A9%A7%E7%A5%8E%23) `136.6K 🔥` `NEW`
1. [撒贝宁 章子怡](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%20%E7%AB%A0%E5%AD%90%E6%80%A1%23) `136.1K 🔥` `NEW`
1. [松岛辉空摔拍](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E6%91%94%E6%8B%8D%23) `122.0K 🔥` `NEW`
1. [曝浪姐真人秀录到凌晨4点 (It’s revealed that Sister Lang’s reality show was recorded until 4 a.m.)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B5%AA%E5%A7%90%E7%9C%9F%E4%BA%BA%E7%A7%80%E5%BD%95%E5%88%B0%E5%87%8C%E6%99%A84%E7%82%B9%23) `121.3K 🔥` `NEW`
1. [现在提前还房贷划算吗](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%8F%90%E5%89%8D%E8%BF%98%E6%88%BF%E8%B4%B7%E5%88%92%E7%AE%97%E5%90%97%23) `105.0K 🔥` `NEW`
1. [徐梦洁回应不好听](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%A5%BD%E5%90%AC%23) `102.5K 🔥` `NEW`
1. [粉丝要求红果下架易烊千玺AI短剧](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E8%A6%81%E6%B1%82%E7%BA%A2%E6%9E%9C%E4%B8%8B%E6%9E%B6%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BAAI%E7%9F%AD%E5%89%A7%23) `99.6K 🔥` `NEW`
1. [王曼昱说和莎莎经历了不同程度的困难](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%AF%B4%E5%92%8C%E8%8E%8E%E8%8E%8E%E7%BB%8F%E5%8E%86%E4%BA%86%E4%B8%8D%E5%90%8C%E7%A8%8B%E5%BA%A6%E7%9A%84%E5%9B%B0%E9%9A%BE%23) `96.4K 🔥` `NEW`
1. [申裕斌创造韩国女乒历史](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%A3%95%E6%96%8C%E5%88%9B%E9%80%A0%E9%9F%A9%E5%9B%BD%E5%A5%B3%E4%B9%92%E5%8E%86%E5%8F%B2%23) `96.1K 🔥` `NEW`
1. [男子清明祭祖发现坟墓上长了竹子](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%B8%85%E6%98%8E%E7%A5%AD%E7%A5%96%E5%8F%91%E7%8E%B0%E5%9D%9F%E5%A2%93%E4%B8%8A%E9%95%BF%E4%BA%86%E7%AB%B9%E5%AD%90%23) `96.1K 🔥` `NEW`
1. [裤子买长这样改简单又好看](https://s.weibo.com/weibo?q=%23%E8%A3%A4%E5%AD%90%E4%B9%B0%E9%95%BF%E8%BF%99%E6%A0%B7%E6%94%B9%E7%AE%80%E5%8D%95%E5%8F%88%E5%A5%BD%E7%9C%8B%23) `93.9K 🔥` `NEW`
1. [我家那小子](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%23) `91.2K 🔥` `NEW`
1. [林昀儒vs松岛辉空](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%98%80%E5%84%92vs%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `90.6K 🔥` `NEW`
1. [贾浅浅论文被指涉嫌大面积抄袭 (Jia Qianqian's paper was accused of widespread plagiarism)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%B5%85%E6%B5%85%E8%AE%BA%E6%96%87%E8%A2%AB%E6%8C%87%E6%B6%89%E5%AB%8C%E5%A4%A7%E9%9D%A2%E7%A7%AF%E6%8A%84%E8%A2%AD%23) `88.7K 🔥` `NEW`
1. [中国散户又出手了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%95%A3%E6%88%B7%E5%8F%88%E5%87%BA%E6%89%8B%E4%BA%86%23) `85.7K 🔥` `NEW`
1. [油价暴涨金价大跌](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%9A%B4%E6%B6%A8%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%23) `82.5K 🔥` `NEW`
1. [董宇辉也去黄帝陵参加祭祖了](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E4%B9%9F%E5%8E%BB%E9%BB%84%E5%B8%9D%E9%99%B5%E5%8F%82%E5%8A%A0%E7%A5%AD%E7%A5%96%E4%BA%86%23) `80.5K 🔥` `NEW`
1. [申裕斌回应2比4王曼昱](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%A3%95%E6%96%8C%E5%9B%9E%E5%BA%942%E6%AF%944%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `79.1K 🔥` `NEW`
1. [全世界倒数第一聪明的狗](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%E8%81%AA%E6%98%8E%E7%9A%84%E7%8B%97%23) `73.6K 🔥` `NEW`
1. [摩梭族的男性看起来温温柔柔](https://s.weibo.com/weibo?q=%23%E6%91%A9%E6%A2%AD%E6%97%8F%E7%9A%84%E7%94%B7%E6%80%A7%E7%9C%8B%E8%B5%B7%E6%9D%A5%E6%B8%A9%E6%B8%A9%E6%9F%94%E6%9F%94%23) `70.7K 🔥` `NEW`
1. [被栓的小猫不一定是丧彪](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%A0%93%E7%9A%84%E5%B0%8F%E7%8C%AB%E4%B8%8D%E4%B8%80%E5%AE%9A%E6%98%AF%E4%B8%A7%E5%BD%AA%23) `69.6K 🔥` `NEW`
1. [新婚妻子孕期被骗43万丈夫崩溃](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A9%9A%E5%A6%BB%E5%AD%90%E5%AD%95%E6%9C%9F%E8%A2%AB%E9%AA%9743%E4%B8%87%E4%B8%88%E5%A4%AB%E5%B4%A9%E6%BA%83%23) `68.9K 🔥` `NEW`
1. [属于中国人的恰巴塔](https://s.weibo.com/weibo?q=%23%E5%B1%9E%E4%BA%8E%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%9A%84%E6%81%B0%E5%B7%B4%E5%A1%94%23) `68.2K 🔥` `NEW`
1. [猫 我记得我是真皮 (Cat I remember I am leather)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E6%88%91%E8%AE%B0%E5%BE%97%E6%88%91%E6%98%AF%E7%9C%9F%E7%9A%AE%23) `66.9K 🔥` `NEW`
1. [清明假期新业态解锁新体验 (New business formats unlock new experiences during Qingming holiday)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E5%81%87%E6%9C%9F%E6%96%B0%E4%B8%9A%E6%80%81%E8%A7%A3%E9%94%81%E6%96%B0%E4%BD%93%E9%AA%8C%23) `725.4K 🔥` `+21%`
1. [南方夏天不要穿纯棉](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%A4%8F%E5%A4%A9%E4%B8%8D%E8%A6%81%E7%A9%BF%E7%BA%AF%E6%A3%89%23) `207.5K 🔥` `+160%`
1. [外籍女子上海街头遇男按摩拉客](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E5%A5%B3%E5%AD%90%E4%B8%8A%E6%B5%B7%E8%A1%97%E5%A4%B4%E9%81%87%E7%94%B7%E6%8C%89%E6%91%A9%E6%8B%89%E5%AE%A2%23) `176.5K 🔥` `+65%`
1. [雾妄言武拾光圆房](https://s.weibo.com/weibo?q=%23%E9%9B%BE%E5%A6%84%E8%A8%80%E6%AD%A6%E6%8B%BE%E5%85%89%E5%9C%86%E6%88%BF%23) `157.3K 🔥` `+57%`
1. [夫妻AI写公众号年赚200万](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BBAI%E5%86%99%E5%85%AC%E4%BC%97%E5%8F%B7%E5%B9%B4%E8%B5%9A200%E4%B8%87%23) `402.4K 🔥`
1. [全网最不想火鸡煲店老板称准备倒闭了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E6%9C%80%E4%B8%8D%E6%83%B3%E7%81%AB%E9%B8%A1%E7%85%B2%E5%BA%97%E8%80%81%E6%9D%BF%E7%A7%B0%E5%87%86%E5%A4%87%E5%80%92%E9%97%AD%E4%BA%86%23) `176.7K 🔥`
1. [浪姐美帝](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%BE%8E%E5%B8%9D%23) `176.4K 🔥`
1. [鞠婧祎田嘉瑞吻戏](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%94%B0%E5%98%89%E7%91%9E%E5%90%BB%E6%88%8F%23) `176.2K 🔥`
1. [伊朗称击落一架美军搜救飞机](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%87%BB%E8%90%BD%E4%B8%80%E6%9E%B6%E7%BE%8E%E5%86%9B%E6%90%9C%E6%95%91%E9%A3%9E%E6%9C%BA%23) `79.8K 🔥`
1. [伊朗籍男子在日本被殴打致死 (Iranian man beaten to death in Japan)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%B1%8D%E7%94%B7%E5%AD%90%E5%9C%A8%E6%97%A5%E6%9C%AC%E8%A2%AB%E6%AE%B4%E6%89%93%E8%87%B4%E6%AD%BB%23) `322.9K 🔥` `-70%`
1. [唐艺昕回应阚清子](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%9B%9E%E5%BA%94%E9%98%9A%E6%B8%85%E5%AD%90%23) `249.9K 🔥` `-47%`
1. [特朗普称已救回飞行员 (Trump says pilot rescued)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%B7%B2%E6%95%91%E5%9B%9E%E9%A3%9E%E8%A1%8C%E5%91%98%23) `197.6K 🔥` `-47%`
1. [浪姐今日直播暂停](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BB%8A%E6%97%A5%E7%9B%B4%E6%92%AD%E6%9A%82%E5%81%9C%23) `176.7K 🔥` `-52%`
1. [王曼昱申裕斌爆分](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%94%B3%E8%A3%95%E6%96%8C%E7%88%86%E5%88%86%23) `174.5K 🔥` `-78%`
1. [女孩高铁换胰岛素被警察发现](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%AB%98%E9%93%81%E6%8D%A2%E8%83%B0%E5%B2%9B%E7%B4%A0%E8%A2%AB%E8%AD%A6%E5%AF%9F%E5%8F%91%E7%8E%B0%23) `135.7K 🔥` `-23%`
1. [吴京点赞吐槽浪姐博文](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E7%82%B9%E8%B5%9E%E5%90%90%E6%A7%BD%E6%B5%AA%E5%A7%90%E5%8D%9A%E6%96%87%23) `134.9K 🔥` `-34%`
1. [黄磊二女儿长得好像黄磊](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E4%BA%8C%E5%A5%B3%E5%84%BF%E9%95%BF%E5%BE%97%E5%A5%BD%E5%83%8F%E9%BB%84%E7%A3%8A%23) `108.6K 🔥` `-36%`
1. [张月听了陈昊宇建议](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%90%AC%E4%BA%86%E9%99%88%E6%98%8A%E5%AE%87%E5%BB%BA%E8%AE%AE%23) `95.5K 🔥` `-55%`
1. [董璇说小酒窝不反对张维伊当爸](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E8%AF%B4%E5%B0%8F%E9%85%92%E7%AA%9D%E4%B8%8D%E5%8F%8D%E5%AF%B9%E5%BC%A0%E7%BB%B4%E4%BC%8A%E5%BD%93%E7%88%B8%23) `84.7K 🔥` `-37%`
1. [美5名顶尖科学家离奇失踪或死亡 (Five top U.S. scientists mysteriously disappeared or died)](https://s.weibo.com/weibo?q=%23%E7%BE%8E5%E5%90%8D%E9%A1%B6%E5%B0%96%E7%A7%91%E5%AD%A6%E5%AE%B6%E7%A6%BB%E5%A5%87%E5%A4%B1%E8%B8%AA%E6%88%96%E6%AD%BB%E4%BA%A1%23) `78.0K 🔥` `-62%`

Updated at 2026-04-05 14:44:53

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
