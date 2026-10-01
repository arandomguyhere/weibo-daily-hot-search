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

1. [12306回应买不到票被迫买长乘短](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E4%B9%B0%E4%B8%8D%E5%88%B0%E7%A5%A8%E8%A2%AB%E8%BF%AB%E4%B9%B0%E9%95%BF%E4%B9%98%E7%9F%AD%23) `1.2M 🔥` `NEW`
1. [网友候补成功睡醒发现车已开走](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%80%99%E8%A1%A5%E6%88%90%E5%8A%9F%E7%9D%A1%E9%86%92%E5%8F%91%E7%8E%B0%E8%BD%A6%E5%B7%B2%E5%BC%80%E8%B5%B0%23) `860.0K 🔥` `NEW`
1. [清澈的爱只为中国](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%BE%88%E7%9A%84%E7%88%B1%E5%8F%AA%E4%B8%BA%E4%B8%AD%E5%9B%BD%23) `735.1K 🔥` `NEW`
1. [原央视主持人阿丘被通报](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E5%A4%AE%E8%A7%86%E4%B8%BB%E6%8C%81%E4%BA%BA%E9%98%BF%E4%B8%98%E8%A2%AB%E9%80%9A%E6%8A%A5%23) `726.8K 🔥` `NEW`
1. [中方对日本首相称呼发生变化](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%AF%B9%E6%97%A5%E6%9C%AC%E9%A6%96%E7%9B%B8%E7%A7%B0%E5%91%BC%E5%8F%91%E7%94%9F%E5%8F%98%E5%8C%96%23) `715.0K 🔥` `NEW`
1. [多位球星点赞C罗退集训声明](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E7%90%83%E6%98%9F%E7%82%B9%E8%B5%9EC%E7%BD%97%E9%80%80%E9%9B%86%E8%AE%AD%E5%A3%B0%E6%98%8E%23) `555.5K 🔥` `NEW`
1. [各大车企9月交付量](https://s.weibo.com/weibo?q=%23%E5%90%84%E5%A4%A7%E8%BD%A6%E4%BC%819%E6%9C%88%E4%BA%A4%E4%BB%98%E9%87%8F%23) `342.3K 🔥` `NEW`
1. [小米澎程首月交付超10000台](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E9%A6%96%E6%9C%88%E4%BA%A4%E4%BB%98%E8%B6%8510000%E5%8F%B0%23) `303.0K 🔥` `NEW`
1. [C罗要求葡萄牙主帅公开认错](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%A6%81%E6%B1%82%E8%91%A1%E8%90%84%E7%89%99%E4%B8%BB%E5%B8%85%E5%85%AC%E5%BC%80%E8%AE%A4%E9%94%99%23) `302.9K 🔥` `NEW`
1. [奚梦瑶晒婆婆赠送的婚嫁敬茶礼](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E6%99%92%E5%A9%86%E5%A9%86%E8%B5%A0%E9%80%81%E7%9A%84%E5%A9%9A%E5%AB%81%E6%95%AC%E8%8C%B6%E7%A4%BC%23) `302.8K 🔥` `NEW`
1. [小米汽车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23) `302.4K 🔥` `NEW`
1. [多少明星都没这么多粉丝群](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B0%91%E6%98%8E%E6%98%9F%E9%83%BD%E6%B2%A1%E8%BF%99%E4%B9%88%E5%A4%9A%E7%B2%89%E4%B8%9D%E7%BE%A4%23) `302.1K 🔥` `NEW`
1. [葡足协主席和热苏斯追到机场挽留C罗](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%B6%B3%E5%8D%8F%E4%B8%BB%E5%B8%AD%E5%92%8C%E7%83%AD%E8%8B%8F%E6%96%AF%E8%BF%BD%E5%88%B0%E6%9C%BA%E5%9C%BA%E6%8C%BD%E7%95%99C%E7%BD%97%23) `301.9K 🔥` `NEW`
1. [为啥陈芋汐就能平稳熬过去](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%95%A5%E9%99%88%E8%8A%8B%E6%B1%90%E5%B0%B1%E8%83%BD%E5%B9%B3%E7%A8%B3%E7%86%AC%E8%BF%87%E5%8E%BB%23) `301.8K 🔥` `NEW`
1. [英国世界级AI成果遭群嘲](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E4%B8%96%E7%95%8C%E7%BA%A7AI%E6%88%90%E6%9E%9C%E9%81%AD%E7%BE%A4%E5%98%B2%23) `301.4K 🔥` `NEW`
1. [C罗擅自离开集训或将面临处罚](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%93%85%E8%87%AA%E7%A6%BB%E5%BC%80%E9%9B%86%E8%AE%AD%E6%88%96%E5%B0%86%E9%9D%A2%E4%B8%B4%E5%A4%84%E7%BD%9A%23) `290.7K 🔥` `NEW`
1. [周深在人民日报撰文](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%9C%A8%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E6%92%B0%E6%96%87%23) `283.4K 🔥` `NEW`
1. [曝刘耀文声生不息缺席四期](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E8%80%80%E6%96%87%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E7%BC%BA%E5%B8%AD%E5%9B%9B%E6%9C%9F%23) `278.4K 🔥` `NEW`
1. [赛力斯](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF%23) `278.4K 🔥` `NEW`
1. [桃晚安](https://s.weibo.com/weibo?q=%23%E6%A1%83%E6%99%9A%E5%AE%89%23) `271.6K 🔥` `NEW`
1. [大叔身后戴眼镜的肯定有毒](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%8F%94%E8%BA%AB%E5%90%8E%E6%88%B4%E7%9C%BC%E9%95%9C%E7%9A%84%E8%82%AF%E5%AE%9A%E6%9C%89%E6%AF%92%23) `222.1K 🔥` `NEW`
1. [就给张家齐拿了4个鸡蛋一把青菜](https://s.weibo.com/weibo?q=%23%E5%B0%B1%E7%BB%99%E5%BC%A0%E5%AE%B6%E9%BD%90%E6%8B%BF%E4%BA%864%E4%B8%AA%E9%B8%A1%E8%9B%8B%E4%B8%80%E6%8A%8A%E9%9D%92%E8%8F%9C%23) `220.0K 🔥` `NEW`
1. [坐两个帅哥中间不知谁脚臭](https://s.weibo.com/weibo?q=%23%E5%9D%90%E4%B8%A4%E4%B8%AA%E5%B8%85%E5%93%A5%E4%B8%AD%E9%97%B4%E4%B8%8D%E7%9F%A5%E8%B0%81%E8%84%9A%E8%87%AD%23) `215.7K 🔥` `NEW`
1. [葡萄牙足协回应C罗退出集训](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E8%B6%B3%E5%8D%8F%E5%9B%9E%E5%BA%94C%E7%BD%97%E9%80%80%E5%87%BA%E9%9B%86%E8%AE%AD%23) `214.7K 🔥` `NEW`
1. [官俊臣被体院借调](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E8%A2%AB%E4%BD%93%E9%99%A2%E5%80%9F%E8%B0%83%23) `213.9K 🔥` `NEW`
1. [林锦岐知道许兰香就是沈嘉兰了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E7%9F%A5%E9%81%93%E8%AE%B8%E5%85%B0%E9%A6%99%E5%B0%B1%E6%98%AF%E6%B2%88%E5%98%89%E5%85%B0%E4%BA%86%23) `212.3K 🔥` `NEW`
1. [特斯拉Model3焕新升级](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89Model3%E7%84%95%E6%96%B0%E5%8D%87%E7%BA%A7%23) `200.8K 🔥` `NEW`
1. [年轻人买房别顶格](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B9%B0%E6%88%BF%E5%88%AB%E9%A1%B6%E6%A0%BC%23) `188.5K 🔥` `NEW`
1. [国庆文案](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E6%96%87%E6%A1%88%23) `172.6K 🔥` `NEW`
1. [小米汽车9月交付破4万](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A69%E6%9C%88%E4%BA%A4%E4%BB%98%E7%A0%B44%E4%B8%87%23) `158.5K 🔥` `NEW`
1. [18岁女孩通宵排队看升旗当作成人礼](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%80%9A%E5%AE%B5%E6%8E%92%E9%98%9F%E7%9C%8B%E5%8D%87%E6%97%97%E5%BD%93%E4%BD%9C%E6%88%90%E4%BA%BA%E7%A4%BC%23) `153.5K 🔥` `NEW`
1. [雷军回应小米汽车9月交付量](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A69%E6%9C%88%E4%BA%A4%E4%BB%98%E9%87%8F%23) `151.3K 🔥` `NEW`
1. [心疼陈鹤文](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E9%99%88%E9%B9%A4%E6%96%87%23) `148.9K 🔥` `NEW`
1. [万科股价大涨散户叹息](https://s.weibo.com/weibo?q=%23%E4%B8%87%E7%A7%91%E8%82%A1%E4%BB%B7%E5%A4%A7%E6%B6%A8%E6%95%A3%E6%88%B7%E5%8F%B9%E6%81%AF%23) `147.9K 🔥` `NEW`
1. [闫妮我忘了我也50多了](https://s.weibo.com/weibo?q=%23%E9%97%AB%E5%A6%AE%E6%88%91%E5%BF%98%E4%BA%86%E6%88%91%E4%B9%9F50%E5%A4%9A%E4%BA%86%23) `144.7K 🔥` `NEW`
1. [刚领的结婚证被狗狗撕了](https://s.weibo.com/weibo?q=%23%E5%88%9A%E9%A2%86%E7%9A%84%E7%BB%93%E5%A9%9A%E8%AF%81%E8%A2%AB%E7%8B%97%E7%8B%97%E6%92%95%E4%BA%86%23) `142.6K 🔥` `NEW`
1. [宋旻浩获刑1年缓刑2年](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%97%BB%E6%B5%A9%E8%8E%B7%E5%88%911%E5%B9%B4%E7%BC%93%E5%88%912%E5%B9%B4%23) `142.6K 🔥` `NEW`
1. [蔡徐坤ins发文感慨新旅程](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4ins%E5%8F%91%E6%96%87%E6%84%9F%E6%85%A8%E6%96%B0%E6%97%85%E7%A8%8B%23) `142.1K 🔥` `NEW`
1. [医生意外摸出朋友身上肿瘤](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%84%8F%E5%A4%96%E6%91%B8%E5%87%BA%E6%9C%8B%E5%8F%8B%E8%BA%AB%E4%B8%8A%E8%82%BF%E7%98%A4%23) `141.6K 🔥` `NEW`
1. [天安门放飞10000多只和平鸽](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%89%E9%97%A8%E6%94%BE%E9%A3%9E10000%E5%A4%9A%E5%8F%AA%E5%92%8C%E5%B9%B3%E9%B8%BD%23) `402.2K 🔥` `+129%`
1. [奚梦瑶给女儿买了可爱版菜篮子](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%BB%99%E5%A5%B3%E5%84%BF%E4%B9%B0%E4%BA%86%E5%8F%AF%E7%88%B1%E7%89%88%E8%8F%9C%E7%AF%AE%E5%AD%90%23) `301.4K 🔥` `+56%`
1. [2001和2026找工作对比](https://s.weibo.com/weibo?q=%232001%E5%92%8C2026%E6%89%BE%E5%B7%A5%E4%BD%9C%E5%AF%B9%E6%AF%94%23) `282.8K 🔥` `+170%`
1. [这是国庆的北京](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E5%9B%BD%E5%BA%86%E7%9A%84%E5%8C%97%E4%BA%AC%23) `216.8K 🔥` `+127%`
1. [五星红旗升起这一刻](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%98%9F%E7%BA%A2%E6%97%97%E5%8D%87%E8%B5%B7%E8%BF%99%E4%B8%80%E5%88%BB%23) `216.5K 🔥` `+41%`
1. [冰工厂不语只是一味生产雷霆大冰块](https://s.weibo.com/weibo?q=%23%E5%86%B0%E5%B7%A5%E5%8E%82%E4%B8%8D%E8%AF%AD%E5%8F%AA%E6%98%AF%E4%B8%80%E5%91%B3%E7%94%9F%E4%BA%A7%E9%9B%B7%E9%9C%86%E5%A4%A7%E5%86%B0%E5%9D%97%23) `214.3K 🔥` `+165%`
1. [和公婆分开住才是成家](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%85%AC%E5%A9%86%E5%88%86%E5%BC%80%E4%BD%8F%E6%89%8D%E6%98%AF%E6%88%90%E5%AE%B6%23) `164.0K 🔥` `+56%`
1. [张雪当年的漂亮浙江老板娘要IPO了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%BD%93%E5%B9%B4%E7%9A%84%E6%BC%82%E4%BA%AE%E6%B5%99%E6%B1%9F%E8%80%81%E6%9D%BF%E5%A8%98%E8%A6%81IPO%E4%BA%86%23) `158.7K 🔥` `+101%`
1. [国庆节](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E8%8A%82%23) `459.8K 🔥`
1. [C罗宣布离开国家队集训营](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%A6%BB%E5%BC%80%E5%9B%BD%E5%AE%B6%E9%98%9F%E9%9B%86%E8%AE%AD%E8%90%A5%23) `276.3K 🔥` `-63%`
1. [葡媒称C罗已做出不可逆决定](https://s.weibo.com/weibo?q=%23%E8%91%A1%E5%AA%92%E7%A7%B0C%E7%BD%97%E5%B7%B2%E5%81%9A%E5%87%BA%E4%B8%8D%E5%8F%AF%E9%80%86%E5%86%B3%E5%AE%9A%23) `221.5K 🔥` `-24%`

Updated at 2026-10-01 10:28:35

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
