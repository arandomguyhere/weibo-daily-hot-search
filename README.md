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

1. [中国不需要也不可能复制SpaceX (China does not need and cannot copy SpaceX)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%8D%E9%9C%80%E8%A6%81%E4%B9%9F%E4%B8%8D%E5%8F%AF%E8%83%BD%E5%A4%8D%E5%88%B6SpaceX%23) `1.5M 🔥` `NEW`
1. [英格兰队遭盗窃只剩1个足球](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%9F%E9%81%AD%E7%9B%97%E7%AA%83%E5%8F%AA%E5%89%A91%E4%B8%AA%E8%B6%B3%E7%90%83%23) `873.9K 🔥` `NEW`
1. [考生家长勿轻信神秘通道](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%94%9F%E5%AE%B6%E9%95%BF%E5%8B%BF%E8%BD%BB%E4%BF%A1%E7%A5%9E%E7%A7%98%E9%80%9A%E9%81%93%23) `722.8K 🔥` `NEW`
1. [韩庚鹿晗说朝鲜语](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%BA%9A%E9%B9%BF%E6%99%97%E8%AF%B4%E6%9C%9D%E9%B2%9C%E8%AF%AD%23) `708.3K 🔥` `NEW`
1. [老外第一次来中国不理解的事情](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%9D%A5%E4%B8%AD%E5%9B%BD%E4%B8%8D%E7%90%86%E8%A7%A3%E7%9A%84%E4%BA%8B%E6%83%85%23) `669.4K 🔥` `NEW`
1. [王玉雯一把薅走王安宇](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%B8%80%E6%8A%8A%E8%96%85%E8%B5%B0%E7%8E%8B%E5%AE%89%E5%AE%87%23) `667.0K 🔥` `NEW`
1. [年轻运动首选](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E8%BF%90%E5%8A%A8%E9%A6%96%E9%80%89%23) `659.1K 🔥` `NEW`
1. [含蓄的中国人终于抽象到老外了](https://s.weibo.com/weibo?q=%23%E5%90%AB%E8%93%84%E7%9A%84%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%BB%88%E4%BA%8E%E6%8A%BD%E8%B1%A1%E5%88%B0%E8%80%81%E5%A4%96%E4%BA%86%23) `654.0K 🔥` `NEW`
1. [男子报警称满月婴儿被保姆抱走](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8A%A5%E8%AD%A6%E7%A7%B0%E6%BB%A1%E6%9C%88%E5%A9%B4%E5%84%BF%E8%A2%AB%E4%BF%9D%E5%A7%86%E6%8A%B1%E8%B5%B0%23) `557.4K 🔥` `NEW`
1. [四级作文](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E7%BA%A7%E4%BD%9C%E6%96%87%23) `349.4K 🔥` `NEW`
1. [黄灿灿工作室员工在张月身后抽烟 (An employee of Huang Cancan Studio smokes behind Zhang Yue)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%91%98%E5%B7%A5%E5%9C%A8%E5%BC%A0%E6%9C%88%E8%BA%AB%E5%90%8E%E6%8A%BD%E7%83%9F%23) `349.0K 🔥` `NEW`
1. [四级翻译 一日为师终身为父](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E7%BA%A7%E7%BF%BB%E8%AF%91%20%E4%B8%80%E6%97%A5%E4%B8%BA%E5%B8%88%E7%BB%88%E8%BA%AB%E4%B8%BA%E7%88%B6%23) `342.2K 🔥` `NEW`
1. [任素汐原名叫任国涛](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E7%B4%A0%E6%B1%90%E5%8E%9F%E5%90%8D%E5%8F%AB%E4%BB%BB%E5%9B%BD%E6%B6%9B%23) `339.6K 🔥` `NEW`
1. [45岁安以轩状态](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E5%AE%89%E4%BB%A5%E8%BD%A9%E7%8A%B6%E6%80%81%23) `336.0K 🔥` `NEW`
1. [大爷查出肺癌结果是辣椒卡肺里了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E6%9F%A5%E5%87%BA%E8%82%BA%E7%99%8C%E7%BB%93%E6%9E%9C%E6%98%AF%E8%BE%A3%E6%A4%92%E5%8D%A1%E8%82%BA%E9%87%8C%E4%BA%86%23) `331.2K 🔥` `NEW`
1. [丁禹兮 求求上天给我一点运气吧](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%20%E6%B1%82%E6%B1%82%E4%B8%8A%E5%A4%A9%E7%BB%99%E6%88%91%E4%B8%80%E7%82%B9%E8%BF%90%E6%B0%94%E5%90%A7%23) `327.5K 🔥` `NEW`
1. [马嘉祺 透视裤](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%20%E9%80%8F%E8%A7%86%E8%A3%A4%23) `323.5K 🔥` `NEW`
1. [日本不高兴了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%8D%E9%AB%98%E5%85%B4%E4%BA%86%23) `323.3K 🔥` `NEW`
1. [医生说长期禁欲生殖系统真的会老](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E9%95%BF%E6%9C%9F%E7%A6%81%E6%AC%B2%E7%94%9F%E6%AE%96%E7%B3%BB%E7%BB%9F%E7%9C%9F%E7%9A%84%E4%BC%9A%E8%80%81%23) `318.3K 🔥` `NEW`
1. [李小冉 镜头](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E9%95%9C%E5%A4%B4%23) `316.3K 🔥` `NEW`
1. [张月江语晨 各有各的baby要拍 (Zhang Yuejiang Yuchen Everyone has his or her own baby to photograph)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%B1%9F%E8%AF%AD%E6%99%A8%20%E5%90%84%E6%9C%89%E5%90%84%E7%9A%84baby%E8%A6%81%E6%8B%8D%23) `314.4K 🔥` `NEW`
1. [60岁男子与女子车内亲密猝死](https://s.weibo.com/weibo?q=%2360%E5%B2%81%E7%94%B7%E5%AD%90%E4%B8%8E%E5%A5%B3%E5%AD%90%E8%BD%A6%E5%86%85%E4%BA%B2%E5%AF%86%E7%8C%9D%E6%AD%BB%23) `311.3K 🔥` `NEW`
1. [黄灿灿工作室道歉](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%81%93%E6%AD%89%23) `309.5K 🔥` `NEW`
1. [王俊凯活粉程度](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%B4%BB%E7%B2%89%E7%A8%8B%E5%BA%A6%23) `307.7K 🔥` `NEW`
1. [金价银价大涨了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E5%A4%A7%E6%B6%A8%E4%BA%86%23) `283.3K 🔥` `NEW`
1. [九鹭非香把七时吉祥重新做成AI剧了](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%B9%AD%E9%9D%9E%E9%A6%99%E6%8A%8A%E4%B8%83%E6%97%B6%E5%90%89%E7%A5%A5%E9%87%8D%E6%96%B0%E5%81%9A%E6%88%90AI%E5%89%A7%E4%BA%86%23) `283.3K 🔥` `NEW`
1. [Prada内外网的认领顺序](https://s.weibo.com/weibo?q=%23Prada%E5%86%85%E5%A4%96%E7%BD%91%E7%9A%84%E8%AE%A4%E9%A2%86%E9%A1%BA%E5%BA%8F%23) `274.7K 🔥` `NEW`
1. [他用了4年的机油桶整洁如新](https://s.weibo.com/weibo?q=%23%E4%BB%96%E7%94%A8%E4%BA%864%E5%B9%B4%E7%9A%84%E6%9C%BA%E6%B2%B9%E6%A1%B6%E6%95%B4%E6%B4%81%E5%A6%82%E6%96%B0%23) `272.4K 🔥` `NEW`
1. [张凌赫海峡论坛6分钟脱稿演讲](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%B5%B7%E5%B3%A1%E8%AE%BA%E5%9D%9B6%E5%88%86%E9%92%9F%E8%84%B1%E7%A8%BF%E6%BC%94%E8%AE%B2%23) `269.6K 🔥` `NEW`
1. [BLG和WE队长互相喊话](https://s.weibo.com/weibo?q=%23BLG%E5%92%8CWE%E9%98%9F%E9%95%BF%E4%BA%92%E7%9B%B8%E5%96%8A%E8%AF%9D%23) `261.2K 🔥` `NEW`
1. [演员李立群吐槽台湾看不到世界杯 (Actor Li Liqun complains about Taiwan not being able to see the World Cup)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E6%9D%8E%E7%AB%8B%E7%BE%A4%E5%90%90%E6%A7%BD%E5%8F%B0%E6%B9%BE%E7%9C%8B%E4%B8%8D%E5%88%B0%E4%B8%96%E7%95%8C%E6%9D%AF%23) `259.6K 🔥` `NEW`
1. [安以轩曾说输了算她的](https://s.weibo.com/weibo?q=%23%E5%AE%89%E4%BB%A5%E8%BD%A9%E6%9B%BE%E8%AF%B4%E8%BE%93%E4%BA%86%E7%AE%97%E5%A5%B9%E7%9A%84%23) `231.4K 🔥` `NEW`
1. [下半年婚运最强的星座](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%8D%8A%E5%B9%B4%E5%A9%9A%E8%BF%90%E6%9C%80%E5%BC%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `207.3K 🔥` `NEW`
1. [29岁姑娘吃完饭就忍不住呕吐](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E5%A7%91%E5%A8%98%E5%90%83%E5%AE%8C%E9%A5%AD%E5%B0%B1%E5%BF%8D%E4%B8%8D%E4%BD%8F%E5%91%95%E5%90%90%23) `204.6K 🔥` `NEW`
1. [曾沛慈杂志](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E6%9D%82%E5%BF%97%23) `200.4K 🔥` `NEW`
1. [四级答案](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E7%BA%A7%E7%AD%94%E6%A1%88%23) `193.0K 🔥` `NEW`
1. [马頔装修到软装了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E8%A3%85%E4%BF%AE%E5%88%B0%E8%BD%AF%E8%A3%85%E4%BA%86%23) `191.7K 🔥` `NEW`
1. [丁禹兮张新成 阿公的档案](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%BC%A0%E6%96%B0%E6%88%90%20%E9%98%BF%E5%85%AC%E7%9A%84%E6%A1%A3%E6%A1%88%23) `165.9K 🔥` `NEW`
1. [香港母女同日坠楼女儿年仅12岁](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%AF%8D%E5%A5%B3%E5%90%8C%E6%97%A5%E5%9D%A0%E6%A5%BC%E5%A5%B3%E5%84%BF%E5%B9%B4%E4%BB%8512%E5%B2%81%23) `161.0K 🔥` `NEW`
1. [莫离把原配写成元配](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E6%8A%8A%E5%8E%9F%E9%85%8D%E5%86%99%E6%88%90%E5%85%83%E9%85%8D%23) `160.9K 🔥` `NEW`
1. [林俊杰出发蔡依林演唱会 (Junjie Lin launches Jolin Tsai concert)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%87%BA%E5%8F%91%E8%94%A1%E4%BE%9D%E6%9E%97%E6%BC%94%E5%94%B1%E4%BC%9A%23) `160.6K 🔥` `NEW`
1. [网传阿里合伙人周靖人拟离职](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E9%98%BF%E9%87%8C%E5%90%88%E4%BC%99%E4%BA%BA%E5%91%A8%E9%9D%96%E4%BA%BA%E6%8B%9F%E7%A6%BB%E8%81%8C%23) `160.2K 🔥` `NEW`
1. [用最local的方式打开世界杯短片](https://s.weibo.com/weibo?q=%23%E7%94%A8%E6%9C%80local%E7%9A%84%E6%96%B9%E5%BC%8F%E6%89%93%E5%BC%80%E4%B8%96%E7%95%8C%E6%9D%AF%E7%9F%AD%E7%89%87%23) `159.4K 🔥` `NEW`
1. [美国限制外国使用大模型](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%99%90%E5%88%B6%E5%A4%96%E5%9B%BD%E4%BD%BF%E7%94%A8%E5%A4%A7%E6%A8%A1%E5%9E%8B%23) `159.0K 🔥` `NEW`
1. [特朗普转发伊朗外长表态](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BD%AC%E5%8F%91%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E8%A1%A8%E6%80%81%23) `158.2K 🔥` `NEW`
1. [陈瑶何宣林饭量](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E4%BD%95%E5%AE%A3%E6%9E%97%E9%A5%AD%E9%87%8F%23) `157.8K 🔥` `NEW`
1. [球迷惊喜日京东拍卖限量球衣](https://s.weibo.com/weibo?q=%23%E7%90%83%E8%BF%B7%E6%83%8A%E5%96%9C%E6%97%A5%E4%BA%AC%E4%B8%9C%E6%8B%8D%E5%8D%96%E9%99%90%E9%87%8F%E7%90%83%E8%A1%A3%23) `714.6K 🔥` `+220%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `271.2K 🔥` `+27%`
1. [原来瘦了真的会变聪明 (It turns out that losing weight really makes you smarter)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%98%A6%E4%BA%86%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%8F%98%E8%81%AA%E6%98%8E%23) `563.7K 🔥`
1. [韩国网友批Lisa世界杯开幕式歌曲低俗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%89%B9Lisa%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E5%B9%95%E5%BC%8F%E6%AD%8C%E6%9B%B2%E4%BD%8E%E4%BF%97%23) `342.9K 🔥` `-42%`
1. [雷军回应装600斤车厘子被指违规](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E8%A3%85600%E6%96%A4%E8%BD%A6%E5%8E%98%E5%AD%90%E8%A2%AB%E6%8C%87%E8%BF%9D%E8%A7%84%23) `322.1K 🔥` `-58%`
1. [凡人修仙传 (A Mortal’s Story of Cultivation into Immortality)](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `220.2K 🔥` `-82%`

Updated at 2026-06-13 15:35:11

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
