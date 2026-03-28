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

1. [宋威龙签约天浩盛世 (Song Weilong signed a contract with Tianhao Shengshi)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%AD%BE%E7%BA%A6%E5%A4%A9%E6%B5%A9%E7%9B%9B%E4%B8%96%23) `192.4K 🔥` `NEW`
1. [日本欲在距台110公里岛屿部署导弹](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%AC%B2%E5%9C%A8%E8%B7%9D%E5%8F%B0110%E5%85%AC%E9%87%8C%E5%B2%9B%E5%B1%BF%E9%83%A8%E7%BD%B2%E5%AF%BC%E5%BC%B9%23) `184.6K 🔥` `NEW`
1. [王俊凯工作室出图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%87%BA%E5%9B%BE%23) `182.6K 🔥` `NEW`
1. [白日提灯疑似被恶意打分](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%96%91%E4%BC%BC%E8%A2%AB%E6%81%B6%E6%84%8F%E6%89%93%E5%88%86%23) `131.3K 🔥` `NEW`
1. [小S全身拉伸法](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%85%A8%E8%BA%AB%E6%8B%89%E4%BC%B8%E6%B3%95%23) `96.8K 🔥` `NEW`
1. [小猪因为溜肩逃过一劫](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AA%E5%9B%A0%E4%B8%BA%E6%BA%9C%E8%82%A9%E9%80%83%E8%BF%87%E4%B8%80%E5%8A%AB%23) `87.8K 🔥` `NEW`
1. [白鹿说泥滩才是最夯的](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AF%B4%E6%B3%A5%E6%BB%A9%E6%89%8D%E6%98%AF%E6%9C%80%E5%A4%AF%E7%9A%84%23) `77.8K 🔥` `NEW`
1. [如果你发现跟一个人聊天很舒服](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E4%BD%A0%E5%8F%91%E7%8E%B0%E8%B7%9F%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%81%8A%E5%A4%A9%E5%BE%88%E8%88%92%E6%9C%8D%23) `69.1K 🔥` `NEW`
1. [40岁心梗幸存者已辞职回农村静养](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E5%BF%83%E6%A2%97%E5%B9%B8%E5%AD%98%E8%80%85%E5%B7%B2%E8%BE%9E%E8%81%8C%E5%9B%9E%E5%86%9C%E6%9D%91%E9%9D%99%E5%85%BB%23) `787.6K 🔥` `+136%`
1. [正能量创作者大会](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E8%83%BD%E9%87%8F%E5%88%9B%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%23) `608.2K 🔥` `+188%`
1. [李昌钰父亲在太平轮海难中去世 (Li Changyu’s father died in the Taiping shipwreck)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E7%88%B6%E4%BA%B2%E5%9C%A8%E5%A4%AA%E5%B9%B3%E8%BD%AE%E6%B5%B7%E9%9A%BE%E4%B8%AD%E5%8E%BB%E4%B8%96%23) `306.8K 🔥` `+77%`
1. [事业编 (Career Editor)](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E4%B8%9A%E7%BC%96%23) `217.5K 🔥` `+115%`
1. [升糖刺客](https://s.weibo.com/weibo?q=%23%E5%8D%87%E7%B3%96%E5%88%BA%E5%AE%A2%23) `202.8K 🔥` `+145%`
1. [青菜焦虑症](https://s.weibo.com/weibo?q=%23%E9%9D%92%E8%8F%9C%E7%84%A6%E8%99%91%E7%97%87%23) `194.9K 🔥` `+83%`
1. [新娘回应小伙用吸粪车做婚车](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E5%B0%8F%E4%BC%99%E7%94%A8%E5%90%B8%E7%B2%AA%E8%BD%A6%E5%81%9A%E5%A9%9A%E8%BD%A6%23) `154.1K 🔥` `+75%`
1. [粉底液将军被嘲不该仅演员承担](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%E8%A2%AB%E5%98%B2%E4%B8%8D%E8%AF%A5%E4%BB%85%E6%BC%94%E5%91%98%E6%89%BF%E6%8B%85%23) `153.6K 🔥` `+69%`
1. [白日提灯热度](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%83%AD%E5%BA%A6%23) `1.1M 🔥`
1. [OC茶话绘 (OC tea painting)](https://s.weibo.com/weibo?q=%23OC%E8%8C%B6%E8%AF%9D%E7%BB%98%23) `343.8K 🔥`
1. [李昌钰去世 (Li Changyu passed away)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E5%8E%BB%E4%B8%96%23) `296.3K 🔥`
1. [一人安利一部国漫](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%BA%E5%AE%89%E5%88%A9%E4%B8%80%E9%83%A8%E5%9B%BD%E6%BC%AB%23) `296.1K 🔥`
1. [理发店潜规则](https://s.weibo.com/weibo?q=%23%E7%90%86%E5%8F%91%E5%BA%97%E6%BD%9C%E8%A7%84%E5%88%99%23) `296.1K 🔥`
1. [徐良删除汪苏泷后会无期作词作曲](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E5%88%A0%E9%99%A4%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%90%8E%E4%BC%9A%E6%97%A0%E6%9C%9F%E4%BD%9C%E8%AF%8D%E4%BD%9C%E6%9B%B2%23) `282.0K 🔥`
1. [东风导弹射程覆盖全日本 (Dongfeng missile range covers all of Japan)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%A3%8E%E5%AF%BC%E5%BC%B9%E5%B0%84%E7%A8%8B%E8%A6%86%E7%9B%96%E5%85%A8%E6%97%A5%E6%9C%AC%23) `220.8K 🔥`
1. [阚清子想从116斤瘦到90斤](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%83%B3%E4%BB%8E116%E6%96%A4%E7%98%A6%E5%88%B090%E6%96%A4%23) `214.4K 🔥`
1. [张凌赫多年前发文抨击影视圈 (Zhang Linghe published an article criticizing the film and television industry many years ago)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%9A%E5%B9%B4%E5%89%8D%E5%8F%91%E6%96%87%E6%8A%A8%E5%87%BB%E5%BD%B1%E8%A7%86%E5%9C%88%23) `213.2K 🔥`
1. [全红婵19岁气场全开](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B519%E5%B2%81%E6%B0%94%E5%9C%BA%E5%85%A8%E5%BC%80%23) `208.4K 🔥`
1. [孔雪儿工作室发文](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E6%96%87%23) `205.7K 🔥`
1. [杨幂直播换了一双博肯鞋](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%9B%B4%E6%92%AD%E6%8D%A2%E4%BA%86%E4%B8%80%E5%8F%8C%E5%8D%9A%E8%82%AF%E9%9E%8B%23) `198.5K 🔥`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `189.0K 🔥`
1. [伊朗首都巨大爆炸](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E5%B7%A8%E5%A4%A7%E7%88%86%E7%82%B8%23) `183.8K 🔥`
1. [粉底液将军 高跟鞋女战士](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%20%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%A5%B3%E6%88%98%E5%A3%AB%23) `175.6K 🔥`
1. [QQ音乐巅峰之夜红毯](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E7%BA%A2%E6%AF%AF%23) `152.8K 🔥`
1. [香蕉一开始其实是直的](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%95%89%E4%B8%80%E5%BC%80%E5%A7%8B%E5%85%B6%E5%AE%9E%E6%98%AF%E7%9B%B4%E7%9A%84%23) `144.6K 🔥`
1. [不要让任何人白嫖你的福气 (Don't let anyone take advantage of your blessings)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%AE%A9%E4%BB%BB%E4%BD%95%E4%BA%BA%E7%99%BD%E5%AB%96%E4%BD%A0%E7%9A%84%E7%A6%8F%E6%B0%94%23) `119.2K 🔥`
1. [严浩翔Fly概念视频 (Yan Haoxiang Fly concept video)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94Fly%E6%A6%82%E5%BF%B5%E8%A7%86%E9%A2%91%23) `107.7K 🔥`
1. [白日提灯开播](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%BC%80%E6%92%AD%23) `97.3K 🔥`
1. [李小冉问浪姐会恶剪吗 (Li Xiaoran asked Sister Lang if she would be a bad shearer)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E9%97%AE%E6%B5%AA%E5%A7%90%E4%BC%9A%E6%81%B6%E5%89%AA%E5%90%97%23) `88.6K 🔥`
1. [严浩翔跑男上班状态 (Yan Haoxiang running man working status)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%B7%91%E7%94%B7%E4%B8%8A%E7%8F%AD%E7%8A%B6%E6%80%81%23) `77.8K 🔥`
1. [馄饨15块钱打包费150块](https://s.weibo.com/weibo?q=%23%E9%A6%84%E9%A5%A815%E5%9D%97%E9%92%B1%E6%89%93%E5%8C%85%E8%B4%B9150%E5%9D%97%23) `77.8K 🔥`
1. [周末真正滋养大脑的方式](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9C%AB%E7%9C%9F%E6%AD%A3%E6%BB%8B%E5%85%BB%E5%A4%A7%E8%84%91%E7%9A%84%E6%96%B9%E5%BC%8F%23) `76.1K 🔥`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `75.7K 🔥`
1. [李昌钰曾说章莹颖尸体能找到 (Li Changyu once said that Zhang Yingying’s body can be found)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E6%9B%BE%E8%AF%B4%E7%AB%A0%E8%8E%B9%E9%A2%96%E5%B0%B8%E4%BD%93%E8%83%BD%E6%89%BE%E5%88%B0%23) `329.9K 🔥` `-58%`
1. [祝绪丹 虞书欣 (Zhu Xudan Yu Shuxin)](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E7%BB%AA%E4%B8%B9%20%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `124.9K 🔥` `-29%`
1. [李小龙遗孀琳达近况](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E9%BE%99%E9%81%97%E5%AD%80%E7%90%B3%E8%BE%BE%E8%BF%91%E5%86%B5%23) `116.6K 🔥` `-32%`
1. [也门胡塞武装参战](https://s.weibo.com/weibo?q=%23%E4%B9%9F%E9%97%A8%E8%83%A1%E5%A1%9E%E6%AD%A6%E8%A3%85%E5%8F%82%E6%88%98%23) `97.3K 🔥` `-54%`
1. [不给彩礼就不结婚或成违法行为 (If you don’t give a bride price, you won’t get married or it will be illegal.)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%BB%99%E5%BD%A9%E7%A4%BC%E5%B0%B1%E4%B8%8D%E7%BB%93%E5%A9%9A%E6%88%96%E6%88%90%E8%BF%9D%E6%B3%95%E8%A1%8C%E4%B8%BA%23) `94.1K 🔥` `-27%`
1. [95后小伙吸粪车做婚车迎娶新娘](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%B0%8F%E4%BC%99%E5%90%B8%E7%B2%AA%E8%BD%A6%E5%81%9A%E5%A9%9A%E8%BD%A6%E8%BF%8E%E5%A8%B6%E6%96%B0%E5%A8%98%23) `79.9K 🔥` `-24%`
1. [张子萱42岁状态 (Zhang Zixuan’s 42-year-old status)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E8%90%B142%E5%B2%81%E7%8A%B6%E6%80%81%23) `77.7K 🔥` `-41%`
1. [李遐怡DOK2公开恋情](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%81%90%E6%80%A1DOK2%E5%85%AC%E5%BC%80%E6%81%8B%E6%83%85%23) `76.8K 🔥` `-38%`
1. [五哈 (Five ha)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%23) `75.2K 🔥` `-36%`
1. [老鼠干成10后社交硬通货](https://s.weibo.com/weibo?q=%23%E8%80%81%E9%BC%A0%E5%B9%B2%E6%88%9010%E5%90%8E%E7%A4%BE%E4%BA%A4%E7%A1%AC%E9%80%9A%E8%B4%A7%23) `69.2K 🔥` `-24%`
1. [全红婵成最年轻奥运三冠王](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E6%88%90%E6%9C%80%E5%B9%B4%E8%BD%BB%E5%A5%A5%E8%BF%90%E4%B8%89%E5%86%A0%E7%8E%8B%23) `68.5K 🔥` `-35%`

Updated at 2026-03-28 15:55:57

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
