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

1. [辛巴悬赏百万元威胁前高管 (Simba threatens former executive with million-dollar bounty)](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E5%B7%B4%E6%82%AC%E8%B5%8F%E7%99%BE%E4%B8%87%E5%85%83%E5%A8%81%E8%83%81%E5%89%8D%E9%AB%98%E7%AE%A1%23) `1.0M 🔥` `NEW`
1. [孙杨方否认妈妈和节目组联系](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E6%96%B9%E5%90%A6%E8%AE%A4%E5%A6%88%E5%A6%88%E5%92%8C%E8%8A%82%E7%9B%AE%E7%BB%84%E8%81%94%E7%B3%BB%23) `767.3K 🔥` `NEW`
1. [原来真的有人能把字写成这样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E8%83%BD%E6%8A%8A%E5%AD%97%E5%86%99%E6%88%90%E8%BF%99%E6%A0%B7%23) `743.0K 🔥` `NEW`
1. [马頔嘴替](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E5%98%B4%E6%9B%BF%23) `742.8K 🔥` `NEW`
1. [比亚迪宣布涨价](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%AE%A3%E5%B8%83%E6%B6%A8%E4%BB%B7%23) `742.3K 🔥` `NEW`
1. [孙杨前女友曾发文吐槽孙杨妈妈](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%89%8D%E5%A5%B3%E5%8F%8B%E6%9B%BE%E5%8F%91%E6%96%87%E5%90%90%E6%A7%BD%E5%AD%99%E6%9D%A8%E5%A6%88%E5%A6%88%23) `249.7K 🔥` `NEW`
1. [东方甄选yoyo发声](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89yoyo%E5%8F%91%E5%A3%B0%23) `249.3K 🔥` `NEW`
1. [GUCCI官宣宁艺卓](https://s.weibo.com/weibo?q=%23GUCCI%E5%AE%98%E5%AE%A3%E5%AE%81%E8%89%BA%E5%8D%93%23) `249.1K 🔥` `NEW`
1. [孙杨张豆豆是双方母亲撮合在一起的](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E6%98%AF%E5%8F%8C%E6%96%B9%E6%AF%8D%E4%BA%B2%E6%92%AE%E5%90%88%E5%9C%A8%E4%B8%80%E8%B5%B7%E7%9A%84%23) `248.3K 🔥` `NEW`
1. [孙杨家庭环境](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%AE%B6%E5%BA%AD%E7%8E%AF%E5%A2%83%23) `247.8K 🔥` `NEW`
1. [英国王嘲讽美国特朗普表情亮了 (The King of England mocked Trump and his expression lit up)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E7%8E%8B%E5%98%B2%E8%AE%BD%E7%BE%8E%E5%9B%BD%E7%89%B9%E6%9C%97%E6%99%AE%E8%A1%A8%E6%83%85%E4%BA%AE%E4%BA%86%23) `247.6K 🔥` `NEW`
1. [乐华就吴宣仪事件发声明](https://s.weibo.com/weibo?q=%23%E4%B9%90%E5%8D%8E%E5%B0%B1%E5%90%B4%E5%AE%A3%E4%BB%AA%E4%BA%8B%E4%BB%B6%E5%8F%91%E5%A3%B0%E6%98%8E%23) `247.3K 🔥` `NEW`
1. [李小冉王濛唐艺昕三公小考再合体](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%8E%8B%E6%BF%9B%E5%94%90%E8%89%BA%E6%98%95%E4%B8%89%E5%85%AC%E5%B0%8F%E8%80%83%E5%86%8D%E5%90%88%E4%BD%93%23) `246.2K 🔥` `NEW`
1. [杨瀚森完成了NBA菜鸟赛季](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E5%AE%8C%E6%88%90%E4%BA%86NBA%E8%8F%9C%E9%B8%9F%E8%B5%9B%E5%AD%A3%23) `245.8K 🔥` `NEW`
1. [尹锡悦二审获刑7年](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E4%BA%8C%E5%AE%A1%E8%8E%B7%E5%88%917%E5%B9%B4%23) `245.4K 🔥` `NEW`
1. [男子在足浴店逃单前台懵了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E8%B6%B3%E6%B5%B4%E5%BA%97%E9%80%83%E5%8D%95%E5%89%8D%E5%8F%B0%E6%87%B5%E4%BA%86%23) `245.1K 🔥` `NEW`
1. [陈晓宋轶开机同框](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%99%93%E5%AE%8B%E8%BD%B6%E5%BC%80%E6%9C%BA%E5%90%8C%E6%A1%86%23) `244.8K 🔥` `NEW`
1. [央视曝光医保卡变购物卡](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%8C%BB%E4%BF%9D%E5%8D%A1%E5%8F%98%E8%B4%AD%E7%89%A9%E5%8D%A1%23) `219.1K 🔥` `NEW`
1. [A股迎大反转](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%BF%8E%E5%A4%A7%E5%8F%8D%E8%BD%AC%23) `217.8K 🔥` `NEW`
1. [郎朗回复宁艺卓](https://s.weibo.com/weibo?q=%23%E9%83%8E%E6%9C%97%E5%9B%9E%E5%A4%8D%E5%AE%81%E8%89%BA%E5%8D%93%23) `203.7K 🔥` `NEW`
1. [被淘汰的水果 (eliminated fruit)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%B7%98%E6%B1%B0%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `198.7K 🔥` `NEW`
1. [1岁半男婴被抢奶奶和男友被疑卖孙](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%8D%8A%E7%94%B7%E5%A9%B4%E8%A2%AB%E6%8A%A2%E5%A5%B6%E5%A5%B6%E5%92%8C%E7%94%B7%E5%8F%8B%E8%A2%AB%E7%96%91%E5%8D%96%E5%AD%99%23) `164.4K 🔥` `NEW`
1. [恋与深空火柴人](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E7%81%AB%E6%9F%B4%E4%BA%BA%23) `153.0K 🔥` `NEW`
1. [特朗普插队英王尴尬旁观](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8F%92%E9%98%9F%E8%8B%B1%E7%8E%8B%E5%B0%B4%E5%B0%AC%E6%97%81%E8%A7%82%23) `149.6K 🔥` `NEW`
1. [大衣哥遭踹门后把木门换成了铁门](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%A1%A3%E5%93%A5%E9%81%AD%E8%B8%B9%E9%97%A8%E5%90%8E%E6%8A%8A%E6%9C%A8%E9%97%A8%E6%8D%A2%E6%88%90%E4%BA%86%E9%93%81%E9%97%A8%23) `148.4K 🔥` `NEW`
1. [格力集团原董事长周乐伟主动投案](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E5%8A%9B%E9%9B%86%E5%9B%A2%E5%8E%9F%E8%91%A3%E4%BA%8B%E9%95%BF%E5%91%A8%E4%B9%90%E4%BC%9F%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `145.7K 🔥` `NEW`
1. [云合无法计算有效播放量](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%90%88%E6%97%A0%E6%B3%95%E8%AE%A1%E7%AE%97%E6%9C%89%E6%95%88%E6%92%AD%E6%94%BE%E9%87%8F%23) `142.5K 🔥` `NEW`
1. [这剧情我以为是飞驰人生4](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%89%A7%E6%83%85%E6%88%91%E4%BB%A5%E4%B8%BA%E6%98%AF%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F4%23) `141.6K 🔥` `NEW`
1. [东方甄选主播离职潮后大手笔激励](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E4%B8%BB%E6%92%AD%E7%A6%BB%E8%81%8C%E6%BD%AE%E5%90%8E%E5%A4%A7%E6%89%8B%E7%AC%94%E6%BF%80%E5%8A%B1%23) `136.8K 🔥` `NEW`
1. [留几手说给前妻还债](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E8%AF%B4%E7%BB%99%E5%89%8D%E5%A6%BB%E8%BF%98%E5%80%BA%23) `134.2K 🔥` `NEW`
1. [王楚钦出行偶遇高茨 (Wang Chuqin met Gauci by chance while traveling)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%87%BA%E8%A1%8C%E5%81%B6%E9%81%87%E9%AB%98%E8%8C%A8%23) `122.0K 🔥` `NEW`
1. [国台办回应郑丽文6月将访美](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E9%83%91%E4%B8%BD%E6%96%876%E6%9C%88%E5%B0%86%E8%AE%BF%E7%BE%8E%23) `120.5K 🔥` `NEW`
1. [谢娜回应演唱会票价](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9B%9E%E5%BA%94%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%23) `120.4K 🔥` `NEW`
1. [朋友圈改版](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%94%B9%E7%89%88%23) `2.3M 🔥`
1. [霸王茶姬疑喝出水银市监局已介入](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E7%96%91%E5%96%9D%E5%87%BA%E6%B0%B4%E9%93%B6%E5%B8%82%E7%9B%91%E5%B1%80%E5%B7%B2%E4%BB%8B%E5%85%A5%23) `577.1K 🔥`
1. [小狗每次拿外卖都把家具暴打一遍](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E6%AF%8F%E6%AC%A1%E6%8B%BF%E5%A4%96%E5%8D%96%E9%83%BD%E6%8A%8A%E5%AE%B6%E5%85%B7%E6%9A%B4%E6%89%93%E4%B8%80%E9%81%8D%23) `514.4K 🔥`
1. [新中国首条通江达海大运河来了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%AD%E5%9B%BD%E9%A6%96%E6%9D%A1%E9%80%9A%E6%B1%9F%E8%BE%BE%E6%B5%B7%E5%A4%A7%E8%BF%90%E6%B2%B3%E6%9D%A5%E4%BA%86%23) `774.0K 🔥` `-52%`
1. [偏偏宠爱阵容](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%E9%98%B5%E5%AE%B9%23) `249.8K 🔥` `-45%`
1. [吴宣仪母亲被赶出公司](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%AF%8D%E4%BA%B2%E8%A2%AB%E8%B5%B6%E5%87%BA%E5%85%AC%E5%8F%B8%23) `248.7K 🔥` `-52%`
1. [百亩蒜薹被近千人2天抽完](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%BA%A9%E8%92%9C%E8%96%B9%E8%A2%AB%E8%BF%91%E5%8D%83%E4%BA%BA2%E5%A4%A9%E6%8A%BD%E5%AE%8C%23) `248.5K 🔥` `-39%`
1. [请假10天5天连做5台手术男子发声 (A man who took 10 days off and had 5 surgeries in a row speaks out)](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E5%81%8710%E5%A4%A95%E5%A4%A9%E8%BF%9E%E5%81%9A5%E5%8F%B0%E6%89%8B%E6%9C%AF%E7%94%B7%E5%AD%90%E5%8F%91%E5%A3%B0%23) `246.9K 🔥` `-50%`
1. [这比被出轨更令人难以接受 (This is more unacceptable than being cheated on)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AF%94%E8%A2%AB%E5%87%BA%E8%BD%A8%E6%9B%B4%E4%BB%A4%E4%BA%BA%E9%9A%BE%E4%BB%A5%E6%8E%A5%E5%8F%97%23) `246.7K 🔥` `-47%`
1. [曝王一博没见过自己的演艺合同](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%B2%A1%E8%A7%81%E8%BF%87%E8%87%AA%E5%B7%B1%E7%9A%84%E6%BC%94%E8%89%BA%E5%90%88%E5%90%8C%23) `246.6K 🔥` `-49%`
1. [十年前的婚纱照](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `245.6K 🔥` `-45%`
1. [我国新发现13个亿吨级油田](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%96%B0%E5%8F%91%E7%8E%B013%E4%B8%AA%E4%BA%BF%E5%90%A8%E7%BA%A7%E6%B2%B9%E7%94%B0%23) `222.3K 🔥` `-51%`
1. [偏偏宠爱](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%23) `210.7K 🔥` `-74%`
1. [曝乐华不允许艺人查看工作合同](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B9%90%E5%8D%8E%E4%B8%8D%E5%85%81%E8%AE%B8%E8%89%BA%E4%BA%BA%E6%9F%A5%E7%9C%8B%E5%B7%A5%E4%BD%9C%E5%90%88%E5%90%8C%23) `195.0K 🔥` `-59%`
1. [赛琳娜老公cue比丑帖](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E7%90%B3%E5%A8%9C%E8%80%81%E5%85%ACcue%E6%AF%94%E4%B8%91%E5%B8%96%23) `186.7K 🔥` `-59%`
1. [33岁杨紫拍戏状态](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E6%9D%A8%E7%B4%AB%E6%8B%8D%E6%88%8F%E7%8A%B6%E6%80%81%23) `147.8K 🔥` `-64%`
1. [王楚钦放狠话](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%94%BE%E7%8B%A0%E8%AF%9D%23) `141.5K 🔥` `-75%`

Updated at 2026-04-29 15:12:33

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
