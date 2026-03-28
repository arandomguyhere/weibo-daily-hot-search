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

1. [宝藏饭拍追光计划 (Treasure rice shooting light chasing plan)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E8%97%8F%E9%A5%AD%E6%8B%8D%E8%BF%BD%E5%85%89%E8%AE%A1%E5%88%92%23) `491.2K 🔥` `NEW`
1. [奔跑吧直播](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E7%9B%B4%E6%92%AD%23) `303.5K 🔥` `NEW`
1. [警方辟谣柳州一小区发现人贩子](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E8%BE%9F%E8%B0%A3%E6%9F%B3%E5%B7%9E%E4%B8%80%E5%B0%8F%E5%8C%BA%E5%8F%91%E7%8E%B0%E4%BA%BA%E8%B4%A9%E5%AD%90%23) `281.6K 🔥` `NEW`
1. [李昌钰母亲把13个子女培养成博士](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E6%AF%8D%E4%BA%B2%E6%8A%8A13%E4%B8%AA%E5%AD%90%E5%A5%B3%E5%9F%B9%E5%85%BB%E6%88%90%E5%8D%9A%E5%A3%AB%23) `220.4K 🔥` `NEW`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `214.2K 🔥` `NEW`
1. [以色列多线作战或已在崩溃边缘](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%A4%9A%E7%BA%BF%E4%BD%9C%E6%88%98%E6%88%96%E5%B7%B2%E5%9C%A8%E5%B4%A9%E6%BA%83%E8%BE%B9%E7%BC%98%23) `123.6K 🔥` `NEW`
1. [我家那小子](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%23) `123.4K 🔥` `NEW`
1. [金价急速飙涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%80%A5%E9%80%9F%E9%A3%99%E6%B6%A8%23) `123.3K 🔥` `NEW`
1. [华为王云鹤离职](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E7%8E%8B%E4%BA%91%E9%B9%A4%E7%A6%BB%E8%81%8C%23) `115.7K 🔥` `NEW`
1. [年仅21岁牺牲母亲跨400公里扫墓](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BB%8521%E5%B2%81%E7%89%BA%E7%89%B2%E6%AF%8D%E4%BA%B2%E8%B7%A8400%E5%85%AC%E9%87%8C%E6%89%AB%E5%A2%93%23) `109.6K 🔥` `NEW`
1. [每一个都是我妈会信的程度 (Each one is to the extent that my mother would believe it.)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%B8%80%E4%B8%AA%E9%83%BD%E6%98%AF%E6%88%91%E5%A6%88%E4%BC%9A%E4%BF%A1%E7%9A%84%E7%A8%8B%E5%BA%A6%23) `90.1K 🔥` `NEW`
1. [周传雄回应帮王俊凯写歌](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BC%A0%E9%9B%84%E5%9B%9E%E5%BA%94%E5%B8%AE%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%86%99%E6%AD%8C%23) `72.8K 🔥` `NEW`
1. [一吃自助就忍不住拿便宜货](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%90%83%E8%87%AA%E5%8A%A9%E5%B0%B1%E5%BF%8D%E4%B8%8D%E4%BD%8F%E6%8B%BF%E4%BE%BF%E5%AE%9C%E8%B4%A7%23) `70.7K 🔥` `NEW`
1. [U19国足vs澳大利亚U19首发](https://s.weibo.com/weibo?q=%23U19%E5%9B%BD%E8%B6%B3vs%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9AU19%E9%A6%96%E5%8F%91%23) `69.3K 🔥` `NEW`
1. [建议一次请假请一天](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%80%E6%AC%A1%E8%AF%B7%E5%81%87%E8%AF%B7%E4%B8%80%E5%A4%A9%23) `69.2K 🔥` `NEW`
1. [刘海到底为什么宽](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%B7%E5%88%B0%E5%BA%95%E4%B8%BA%E4%BB%80%E4%B9%88%E5%AE%BD%23) `68.4K 🔥` `NEW`
1. [45岁男子心梗离世2天前还在跑马拉松](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%94%B7%E5%AD%90%E5%BF%83%E6%A2%97%E7%A6%BB%E4%B8%962%E5%A4%A9%E5%89%8D%E8%BF%98%E5%9C%A8%E8%B7%91%E9%A9%AC%E6%8B%89%E6%9D%BE%23) `1.1M 🔥` `+412%`
1. [40岁心梗幸存者已辞职回农村静养](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E5%BF%83%E6%A2%97%E5%B9%B8%E5%AD%98%E8%80%85%E5%B7%B2%E8%BE%9E%E8%81%8C%E5%9B%9E%E5%86%9C%E6%9D%91%E9%9D%99%E5%85%BB%23) `756.8K 🔥` `+134%`
1. [一念江南](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `471.7K 🔥` `+206%`
1. [终于懂大学面积小的含金量了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E5%A4%A7%E5%AD%A6%E9%9D%A2%E7%A7%AF%E5%B0%8F%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E4%BA%86%23) `292.4K 🔥` `+89%`
1. [女子断碳水2月确诊糖尿病前期 (Woman cuts carbs and is diagnosed with prediabetes in February)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%96%AD%E7%A2%B3%E6%B0%B42%E6%9C%88%E7%A1%AE%E8%AF%8A%E7%B3%96%E5%B0%BF%E7%97%85%E5%89%8D%E6%9C%9F%23) `252.9K 🔥` `+64%`
1. [阚清子想从116斤瘦到90斤](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%83%B3%E4%BB%8E116%E6%96%A4%E7%98%A6%E5%88%B090%E6%96%A4%23) `220.6K 🔥` `+28%`
1. [点奶茶要求奶和茶分离 (When ordering milk tea, please separate the milk and tea.)](https://s.weibo.com/weibo?q=%23%E7%82%B9%E5%A5%B6%E8%8C%B6%E8%A6%81%E6%B1%82%E5%A5%B6%E5%92%8C%E8%8C%B6%E5%88%86%E7%A6%BB%23) `203.0K 🔥` `+61%`
1. [正能量创作者大会](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E8%83%BD%E9%87%8F%E5%88%9B%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%23) `594.0K 🔥`
1. [事业编 (Career Editor)](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E4%B8%9A%E7%BC%96%23) `221.7K 🔥`
1. [升糖刺客](https://s.weibo.com/weibo?q=%23%E5%8D%87%E7%B3%96%E5%88%BA%E5%AE%A2%23) `220.8K 🔥`
1. [青菜焦虑症](https://s.weibo.com/weibo?q=%23%E9%9D%92%E8%8F%9C%E7%84%A6%E8%99%91%E7%97%87%23) `182.5K 🔥`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `180.7K 🔥`
1. [张凌赫多年前发文抨击影视圈 (Zhang Linghe published an article criticizing the film and television industry many years ago)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%9A%E5%B9%B4%E5%89%8D%E5%8F%91%E6%96%87%E6%8A%A8%E5%87%BB%E5%BD%B1%E8%A7%86%E5%9C%88%23) `179.2K 🔥`
1. [全红婵19岁气场全开 (Quan Hongchan is full of energy at the age of 19)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B519%E5%B2%81%E6%B0%94%E5%9C%BA%E5%85%A8%E5%BC%80%23) `175.0K 🔥`
1. [宋威龙签约天浩盛世 (Song Weilong signed a contract with Tianhao Shengshi)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%AD%BE%E7%BA%A6%E5%A4%A9%E6%B5%A9%E7%9B%9B%E4%B8%96%23) `169.4K 🔥`
1. [TF四代二班见面会](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%8C%E7%8F%AD%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `161.5K 🔥`
1. [粉底液将军 高跟鞋女战士](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%20%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%A5%B3%E6%88%98%E5%A3%AB%23) `127.5K 🔥`
1. [王俊凯工作室出图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%87%BA%E5%9B%BE%23) `124.0K 🔥`
1. [日本搞大杀器妄图覆盖中国全境](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%90%9E%E5%A4%A7%E6%9D%80%E5%99%A8%E5%A6%84%E5%9B%BE%E8%A6%86%E7%9B%96%E4%B8%AD%E5%9B%BD%E5%85%A8%E5%A2%83%23) `123.9K 🔥`
1. [粉底液将军被嘲不该仅演员承担 (The foundation liquid general was ridiculed and it’s not just the actors who should bear the responsibility)](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%E8%A2%AB%E5%98%B2%E4%B8%8D%E8%AF%A5%E4%BB%85%E6%BC%94%E5%91%98%E6%89%BF%E6%8B%85%23) `100.4K 🔥`
1. [严浩翔Fly概念视频 (Yan Haoxiang Fly concept video)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94Fly%E6%A6%82%E5%BF%B5%E8%A7%86%E9%A2%91%23) `90.7K 🔥`
1. [泰国与伊朗达成油轮通行协议](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E4%B8%8E%E4%BC%8A%E6%9C%97%E8%BE%BE%E6%88%90%E6%B2%B9%E8%BD%AE%E9%80%9A%E8%A1%8C%E5%8D%8F%E8%AE%AE%23) `90.5K 🔥`
1. [煤气灯效应](https://s.weibo.com/weibo?q=%23%E7%85%A4%E6%B0%94%E7%81%AF%E6%95%88%E5%BA%94%23) `85.9K 🔥`
1. [李昌钰唯一被推翻的案件 (The only case in which Li Changyu was overturned)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E5%94%AF%E4%B8%80%E8%A2%AB%E6%8E%A8%E7%BF%BB%E7%9A%84%E6%A1%88%E4%BB%B6%23) `83.2K 🔥`
1. [严浩翔带着八字眉向大家打招呼](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%B8%A6%E7%9D%80%E5%85%AB%E5%AD%97%E7%9C%89%E5%90%91%E5%A4%A7%E5%AE%B6%E6%89%93%E6%8B%9B%E5%91%BC%23) `81.7K 🔥`
1. [怎么我成了大人就不一样了](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E6%88%91%E6%88%90%E4%BA%86%E5%A4%A7%E4%BA%BA%E5%B0%B1%E4%B8%8D%E4%B8%80%E6%A0%B7%E4%BA%86%23) `80.7K 🔥`
1. [白日提灯开播 (Day Lantern is on)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%BC%80%E6%92%AD%23) `68.6K 🔥`
1. [白日提灯热度](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%83%AD%E5%BA%A6%23) `275.6K 🔥` `-75%`
1. [单亲妈妈遭羁押821天被判无罪](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%88%E9%81%AD%E7%BE%81%E6%8A%BC821%E5%A4%A9%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%23) `221.9K 🔥` `-27%`
1. [白日提灯直播 (Lantern live broadcast during the day)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%9B%B4%E6%92%AD%23) `221.3K 🔥` `-39%`
1. [徐良删除汪苏泷后会无期作词作曲](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E5%88%A0%E9%99%A4%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%90%8E%E4%BC%9A%E6%97%A0%E6%9C%9F%E4%BD%9C%E8%AF%8D%E4%BD%9C%E6%9B%B2%23) `221.0K 🔥` `-31%`
1. [新娘回应小伙用吸粪车做婚车](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E5%B0%8F%E4%BC%99%E7%94%A8%E5%90%B8%E7%B2%AA%E8%BD%A6%E5%81%9A%E5%A9%9A%E8%BD%A6%23) `189.5K 🔥` `-76%`
1. [伊朗首都巨大爆炸](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E5%B7%A8%E5%A4%A7%E7%88%86%E7%82%B8%23) `134.1K 🔥` `-21%`
1. [理发店潜规则 (Barber shop hidden rules)](https://s.weibo.com/weibo?q=%23%E7%90%86%E5%8F%91%E5%BA%97%E6%BD%9C%E8%A7%84%E5%88%99%23) `123.7K 🔥` `-23%`
1. [孔雪儿工作室发文](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E6%96%87%23) `81.9K 🔥` `-21%`
1. [白日提灯第3集17分57秒](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%AC%AC3%E9%9B%8617%E5%88%8657%E7%A7%92%23) `69.5K 🔥` `-35%`

Updated at 2026-03-28 17:58:50

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
