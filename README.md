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

1. [四川一升学宴突发事故5人死亡 (5 people died in accident at Sichuan Yisheng University Banquet)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B8%80%E5%8D%87%E5%AD%A6%E5%AE%B4%E7%AA%81%E5%8F%91%E4%BA%8B%E6%95%855%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `3.8M 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `1.4M 🔥` `NEW`
1. [厨房纸 致癌物](https://s.weibo.com/weibo?q=%23%E5%8E%A8%E6%88%BF%E7%BA%B8%20%E8%87%B4%E7%99%8C%E7%89%A9%23) `1.1M 🔥` `NEW`
1. [宇树科技高开629.44%](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E9%AB%98%E5%BC%80629.44%25%23) `619.2K 🔥` `NEW`
1. [宇树90后创始人身家超1300亿元](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%9190%E5%90%8E%E5%88%9B%E5%A7%8B%E4%BA%BA%E8%BA%AB%E5%AE%B6%E8%B6%851300%E4%BA%BF%E5%85%83%23) `495.2K 🔥` `NEW`
1. [我的前半生原著没有贺涵](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%8E%9F%E8%91%97%E6%B2%A1%E6%9C%89%E8%B4%BA%E6%B6%B5%23) `466.5K 🔥` `NEW`
1. [爱奇艺Q2财报提到的剧集](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BAQ2%E8%B4%A2%E6%8A%A5%E6%8F%90%E5%88%B0%E7%9A%84%E5%89%A7%E9%9B%86%23) `465.1K 🔥` `NEW`
1. [女子买猫窝到货后爬出一只猫](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B0%E7%8C%AB%E7%AA%9D%E5%88%B0%E8%B4%A7%E5%90%8E%E7%88%AC%E5%87%BA%E4%B8%80%E5%8F%AA%E7%8C%AB%23) `460.1K 🔥` `NEW`
1. [女孩深夜遭强奸4人均称只是协助](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%B7%B1%E5%A4%9C%E9%81%AD%E5%BC%BA%E5%A5%B84%E4%BA%BA%E5%9D%87%E7%A7%B0%E5%8F%AA%E6%98%AF%E5%8D%8F%E5%8A%A9%23) `459.3K 🔥` `NEW`
1. [武磊官博发文寻人](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E7%A3%8A%E5%AE%98%E5%8D%9A%E5%8F%91%E6%96%87%E5%AF%BB%E4%BA%BA%23) `456.1K 🔥` `NEW`
1. [胚胎案丈夫看第三者被抓反问妻子 (In the embryo case, the husband was caught looking at a third person and asked his wife)](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E4%B8%88%E5%A4%AB%E7%9C%8B%E7%AC%AC%E4%B8%89%E8%80%85%E8%A2%AB%E6%8A%93%E5%8F%8D%E9%97%AE%E5%A6%BB%E5%AD%90%23) `447.0K 🔥` `NEW`
1. [库迪 免单](https://s.weibo.com/weibo?q=%23%E5%BA%93%E8%BF%AA%20%E5%85%8D%E5%8D%95%23) `442.7K 🔥` `NEW`
1. [去有风的地方](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E6%9C%89%E9%A3%8E%E7%9A%84%E5%9C%B0%E6%96%B9%23) `440.2K 🔥` `NEW`
1. [4个月宝宝头发起球以为是蚊子](https://s.weibo.com/weibo?q=%234%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E5%A4%B4%E5%8F%91%E8%B5%B7%E7%90%83%E4%BB%A5%E4%B8%BA%E6%98%AF%E8%9A%8A%E5%AD%90%23) `437.0K 🔥` `NEW`
1. [杨迪以前以为谢娜喜欢他](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%BF%AA%E4%BB%A5%E5%89%8D%E4%BB%A5%E4%B8%BA%E8%B0%A2%E5%A8%9C%E5%96%9C%E6%AC%A2%E4%BB%96%23) `424.6K 🔥` `NEW`
1. [宇树科技上市日](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%8A%E5%B8%82%E6%97%A5%23) `422.2K 🔥` `NEW`
1. [朱志鑫赛车服电竞男主](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E8%B5%9B%E8%BD%A6%E6%9C%8D%E7%94%B5%E7%AB%9E%E7%94%B7%E4%B8%BB%23) `418.0K 🔥` `NEW`
1. [王欣瑜0比2萨巴伦卡](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AC%A3%E7%91%9C0%E6%AF%942%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%23) `411.2K 🔥` `NEW`
1. [七夕民政局门口含糖量超标](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E6%B0%91%E6%94%BF%E5%B1%80%E9%97%A8%E5%8F%A3%E5%90%AB%E7%B3%96%E9%87%8F%E8%B6%85%E6%A0%87%23) `404.9K 🔥` `NEW`
1. [穆西亚拉晕倒](https://s.weibo.com/weibo?q=%23%E7%A9%86%E8%A5%BF%E4%BA%9A%E6%8B%89%E6%99%95%E5%80%92%23) `391.4K 🔥` `NEW`
1. [日本将在澳大利亚试射远程导弹 (Japan to test launch long-range missile in Australia)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%B0%86%E5%9C%A8%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E8%AF%95%E5%B0%84%E8%BF%9C%E7%A8%8B%E5%AF%BC%E5%BC%B9%23) `389.8K 🔥` `NEW`
1. [BLACKPINK出道至今妆容变化](https://s.weibo.com/weibo?q=%23BLACKPINK%E5%87%BA%E9%81%93%E8%87%B3%E4%BB%8A%E5%A6%86%E5%AE%B9%E5%8F%98%E5%8C%96%23) `384.9K 🔥` `NEW`
1. [BIGBANG20周年纪念视频](https://s.weibo.com/weibo?q=%23BIGBANG20%E5%91%A8%E5%B9%B4%E7%BA%AA%E5%BF%B5%E8%A7%86%E9%A2%91%23) `375.0K 🔥` `NEW`
1. [中国重复使用火箭陆地回收成功](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%87%8D%E5%A4%8D%E4%BD%BF%E7%94%A8%E7%81%AB%E7%AE%AD%E9%99%86%E5%9C%B0%E5%9B%9E%E6%94%B6%E6%88%90%E5%8A%9F%23) `1.2M 🔥` `+65%`
1. [谢谢你 我的宝藏医生 (Thank you my treasure doctor)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B0%A2%E4%BD%A0%20%E6%88%91%E7%9A%84%E5%AE%9D%E8%97%8F%E5%8C%BB%E7%94%9F%23) `1.1M 🔥` `+556%`
1. [爽爽爽爽空枪爽爽爽爽](https://s.weibo.com/weibo?q=%23%E7%88%BD%E7%88%BD%E7%88%BD%E7%88%BD%E7%A9%BA%E6%9E%AA%E7%88%BD%E7%88%BD%E7%88%BD%E7%88%BD%23) `475.7K 🔥` `+141%`
1. [公积金 强制缴纳 (Provident fund compulsory payment)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%20%E5%BC%BA%E5%88%B6%E7%BC%B4%E7%BA%B3%23) `450.1K 🔥` `+50%`
1. [粉笔李梦圆离职](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E6%9D%8E%E6%A2%A6%E5%9C%86%E7%A6%BB%E8%81%8C%23) `439.1K 🔥` `+138%`
1. [迪丽热巴克拉恋人剧本照进现实](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%8B%E6%8B%89%E6%81%8B%E4%BA%BA%E5%89%A7%E6%9C%AC%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E%23) `434.9K 🔥` `+34%`
1. [穆祉丞自拍P了眉钉和颜文字](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%87%AA%E6%8B%8DP%E4%BA%86%E7%9C%89%E9%92%89%E5%92%8C%E9%A2%9C%E6%96%87%E5%AD%97%23) `432.9K 🔥` `+147%`
1. [蓝盈莹上浪姐确实赢麻了](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E4%B8%8A%E6%B5%AA%E5%A7%90%E7%A1%AE%E5%AE%9E%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `421.7K 🔥` `+74%`
1. [比野生狗奶还永久的存在出现了 (A more permanent existence than wild dog milk appears)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E9%87%8E%E7%94%9F%E7%8B%97%E5%A5%B6%E8%BF%98%E6%B0%B8%E4%B9%85%E7%9A%84%E5%AD%98%E5%9C%A8%E5%87%BA%E7%8E%B0%E4%BA%86%23) `410.0K 🔥` `+32%`
1. [真心喜欢一个人是什么样的 (What does it feel like to really like someone?)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%BF%83%E5%96%9C%E6%AC%A2%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%23) `407.2K 🔥` `+51%`
1. [Dior全球公关总监去世 (Dior's global PR director dies)](https://s.weibo.com/weibo?q=%23Dior%E5%85%A8%E7%90%83%E5%85%AC%E5%85%B3%E6%80%BB%E7%9B%91%E5%8E%BB%E4%B8%96%23) `402.9K 🔥` `+66%`
1. [柯洁装弱智赢AI围棋 (Ke Jie pretends to be mentally retarded and wins AI Go)](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B4%81%E8%A3%85%E5%BC%B1%E6%99%BA%E8%B5%A2AI%E5%9B%B4%E6%A3%8B%23) `399.7K 🔥` `+143%`
1. [甲状腺最怕的坏习惯 (The bad habits thyroid fears most)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E6%9C%80%E6%80%95%E7%9A%84%E5%9D%8F%E4%B9%A0%E6%83%AF%23) `395.4K 🔥` `+64%`
1. [你的经济属于什么水平](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E7%BB%8F%E6%B5%8E%E5%B1%9E%E4%BA%8E%E4%BB%80%E4%B9%88%E6%B0%B4%E5%B9%B3%23) `393.8K 🔥` `+74%`
1. [那英北京演唱会嘉宾 (Guests at Na Ying's Beijing concert)](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%8C%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%23) `382.0K 🔥` `+56%`
1. [刘亦菲携爱宠登芭莎九月封面](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%90%BA%E7%88%B1%E5%AE%A0%E7%99%BB%E8%8A%AD%E8%8E%8E%E4%B9%9D%E6%9C%88%E5%B0%81%E9%9D%A2%23) `377.5K 🔥` `+116%`
1. [顶替案哥哥称看弟弟状态憔悴很心疼](https://s.weibo.com/weibo?q=%23%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%93%A5%E5%93%A5%E7%A7%B0%E7%9C%8B%E5%BC%9F%E5%BC%9F%E7%8A%B6%E6%80%81%E6%86%94%E6%82%B4%E5%BE%88%E5%BF%83%E7%96%BC%23) `373.5K 🔥` `+191%`
1. [丁禹兮陪看花开锦绣红温了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E9%99%AA%E7%9C%8B%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E7%BA%A2%E6%B8%A9%E4%BA%86%23) `371.6K 🔥` `+60%`
1. [女子开门杀反遭关门杀 (Woman opens door to kill but closes door to kill her)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BC%80%E9%97%A8%E6%9D%80%E5%8F%8D%E9%81%AD%E5%85%B3%E9%97%A8%E6%9D%80%23) `455.1K 🔥`
1. [章子怡套现3亿 (Zhang Ziyi cashed out 300 million)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E5%A5%97%E7%8E%B03%E4%BA%BF%23) `452.7K 🔥`
1. [李现回沙溪古镇了 (Li Xian returned to Shaxi Ancient Town)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%9B%9E%E6%B2%99%E6%BA%AA%E5%8F%A4%E9%95%87%E4%BA%86%23) `426.6K 🔥`
1. [七夕文案](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E6%96%87%E6%A1%88%23) `415.4K 🔥`
1. [AirPods5曝光](https://s.weibo.com/weibo?q=%23AirPods5%E6%9B%9D%E5%85%89%23) `413.7K 🔥`
1. [调查组通报杭州酒局事件 (Investigation team reports incident at Hangzhou Wine Bureau)](https://s.weibo.com/weibo?q=%23%E8%B0%83%E6%9F%A5%E7%BB%84%E9%80%9A%E6%8A%A5%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `398.1K 🔥`
1. [公积金 (provident fund)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%23) `386.1K 🔥`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `462.3K 🔥` `-55%`
1. [朱雀三号 (Suzaku No.3)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%9B%80%E4%B8%89%E5%8F%B7%23) `445.8K 🔥` `-82%`
1. [胖东来招聘不包含性侵犯罪人员 (Fat Dong Lai recruits people who do not include sexual assault crimes)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%8B%9B%E8%81%98%E4%B8%8D%E5%8C%85%E5%90%AB%E6%80%A7%E4%BE%B5%E7%8A%AF%E7%BD%AA%E4%BA%BA%E5%91%98%23) `430.0K 🔥` `-26%`
1. [做事千万不要有状态洁癖](https://s.weibo.com/weibo?q=%23%E5%81%9A%E4%BA%8B%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%9C%89%E7%8A%B6%E6%80%81%E6%B4%81%E7%99%96%23) `380.2K 🔥` `-21%`

Updated at 2026-08-19 10:30:40

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
