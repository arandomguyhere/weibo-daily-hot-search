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

1. [C罗回应葡萄牙淘汰 (Ronaldo responds to Portugal's elimination)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%9B%9E%E5%BA%94%E8%91%A1%E8%90%84%E7%89%99%E6%B7%98%E6%B1%B0%23) `1.4M 🔥` `NEW`
1. [王濛聊到浪姐随意更改赛制](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%81%8A%E5%88%B0%E6%B5%AA%E5%A7%90%E9%9A%8F%E6%84%8F%E6%9B%B4%E6%94%B9%E8%B5%9B%E5%88%B6%23) `665.2K 🔥` `NEW`
1. [三星利润](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%88%A9%E6%B6%A6%23) `578.9K 🔥` `NEW`
1. [野狗骨头小说](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%B0%8F%E8%AF%B4%23) `578.1K 🔥` `NEW`
1. [罗德里向B席道歉](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%BE%B7%E9%87%8C%E5%90%91B%E5%B8%AD%E9%81%93%E6%AD%89%23) `576.0K 🔥` `NEW`
1. [在中国再小众的需求也不小众](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%AD%E5%9B%BD%E5%86%8D%E5%B0%8F%E4%BC%97%E7%9A%84%E9%9C%80%E6%B1%82%E4%B9%9F%E4%B8%8D%E5%B0%8F%E4%BC%97%23) `571.6K 🔥` `NEW`
1. [深圳暴雨](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%9A%B4%E9%9B%A8%23) `565.6K 🔥` `NEW`
1. [美国vs比利时](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BDvs%E6%AF%94%E5%88%A9%E6%97%B6%23) `559.0K 🔥` `NEW`
1. [三星预计Q2利润暴增1810%](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E9%A2%84%E8%AE%A1Q2%E5%88%A9%E6%B6%A6%E6%9A%B4%E5%A2%9E1810%25%23) `548.5K 🔥` `NEW`
1. [我家那闺女 陈妍希黄灿灿](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%20%E9%99%88%E5%A6%8D%E5%B8%8C%E9%BB%84%E7%81%BF%E7%81%BF%23) `547.2K 🔥` `NEW`
1. [迪丽热巴练出一身肌肉线条 (Dilireba has developed a muscular body)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BB%83%E5%87%BA%E4%B8%80%E8%BA%AB%E8%82%8C%E8%82%89%E7%BA%BF%E6%9D%A1%23) `544.7K 🔥` `NEW`
1. [王俊凯王源来学抢票技巧](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90%E6%9D%A5%E5%AD%A6%E6%8A%A2%E7%A5%A8%E6%8A%80%E5%B7%A7%23) `536.3K 🔥` `NEW`
1. [李昀锐换了新发色](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E6%8D%A2%E4%BA%86%E6%96%B0%E5%8F%91%E8%89%B2%23) `525.7K 🔥` `NEW`
1. [比利时领先美国](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E9%A2%86%E5%85%88%E7%BE%8E%E5%9B%BD%23) `523.1K 🔥` `NEW`
1. [刘烨安娜17周年礼物是空调](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%83%A8%E5%AE%89%E5%A8%9C17%E5%91%A8%E5%B9%B4%E7%A4%BC%E7%89%A9%E6%98%AF%E7%A9%BA%E8%B0%83%23) `517.1K 🔥` `NEW`
1. [湖北强对流天气8死1失联](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E5%BC%BA%E5%AF%B9%E6%B5%81%E5%A4%A9%E6%B0%948%E6%AD%BB1%E5%A4%B1%E8%81%94%23) `514.4K 🔥` `NEW`
1. [LV 茉莉奶白](https://s.weibo.com/weibo?q=%23LV%20%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%23) `505.8K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `504.1K 🔥` `NEW`
1. [香港黑帮头目垄断工地盒饭年赚千万](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%BB%91%E5%B8%AE%E5%A4%B4%E7%9B%AE%E5%9E%84%E6%96%AD%E5%B7%A5%E5%9C%B0%E7%9B%92%E9%A5%AD%E5%B9%B4%E8%B5%9A%E5%8D%83%E4%B8%87%23) `500.7K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `496.0K 🔥` `NEW`
1. [麦琳素颜状态 (Mai Lin's bare makeup state)](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%90%B3%E7%B4%A0%E9%A2%9C%E7%8A%B6%E6%80%81%23) `475.6K 🔥` `NEW`
1. [王楚钦孙颖莎没张嘴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%B2%A1%E5%BC%A0%E5%98%B4%23) `471.2K 🔥` `NEW`
1. [湖北出现龙卷风](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E5%87%BA%E7%8E%B0%E9%BE%99%E5%8D%B7%E9%A3%8E%23) `468.4K 🔥` `NEW`
1. [广西抗洪 (Guangxi flood fighting)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%8A%97%E6%B4%AA%23) `1.8M 🔥` `+131%`
1. [还我佛得角](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%88%91%E4%BD%9B%E5%BE%97%E8%A7%92%23) `1.5M 🔥` `+78%`
1. [LV被指垄断中国古纹样 (LV is accused of monopolizing ancient Chinese patterns)](https://s.weibo.com/weibo?q=%23LV%E8%A2%AB%E6%8C%87%E5%9E%84%E6%96%AD%E4%B8%AD%E5%9B%BD%E5%8F%A4%E7%BA%B9%E6%A0%B7%23) `1.4M 🔥` `+36%`
1. [全新坦克300年轻人的潮流大玩具](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%9D%A6%E5%85%8B300%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E6%BD%AE%E6%B5%81%E5%A4%A7%E7%8E%A9%E5%85%B7%23) `479.7K 🔥` `+95%`
1. [台风巴威](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%23) `564.4K 🔥`
1. [苹果涨涨涨](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%B6%A8%E6%B6%A8%E6%B6%A8%23) `551.5K 🔥`
1. [暴雨天牢记这些保命知识 (Remember these life-saving tips on rainy days)](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E5%A4%A9%E7%89%A2%E8%AE%B0%E8%BF%99%E4%BA%9B%E4%BF%9D%E5%91%BD%E7%9F%A5%E8%AF%86%23) `1.4M 🔥` `-29%`
1. [C罗最后一舞遗憾落幕 (Cristiano Ronaldo’s last dance ended with regret)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%9C%80%E5%90%8E%E4%B8%80%E8%88%9E%E9%81%97%E6%86%BE%E8%90%BD%E5%B9%95%23) `1.2M 🔥` `-68%`
1. [葡萄牙0比1西班牙](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%990%E6%AF%941%E8%A5%BF%E7%8F%AD%E7%89%99%23) `570.2K 🔥` `-69%`
1. [C罗哭了](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%93%AD%E4%BA%86%23) `561.3K 🔥` `-75%`
1. [真正的强大是敢于让别人不舒服](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%BC%BA%E5%A4%A7%E6%98%AF%E6%95%A2%E4%BA%8E%E8%AE%A9%E5%88%AB%E4%BA%BA%E4%B8%8D%E8%88%92%E6%9C%8D%23) `555.6K 🔥` `-31%`
1. [美富豪与19岁儿子换血后自曝患病 (American billionaire reveals he is ill after blood transfusion with 19-year-old son)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AF%8C%E8%B1%AA%E4%B8%8E19%E5%B2%81%E5%84%BF%E5%AD%90%E6%8D%A2%E8%A1%80%E5%90%8E%E8%87%AA%E6%9B%9D%E6%82%A3%E7%97%85%23) `540.1K 🔥` `-27%`
1. [王俊凯旁边的是谁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%97%81%E8%BE%B9%E7%9A%84%E6%98%AF%E8%B0%81%23) `537.7K 🔥` `-29%`
1. [没有最好的朋友才是我最舒服的状态 (I am most comfortable without a best friend)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E6%9C%80%E5%A5%BD%E7%9A%84%E6%9C%8B%E5%8F%8B%E6%89%8D%E6%98%AF%E6%88%91%E6%9C%80%E8%88%92%E6%9C%8D%E7%9A%84%E7%8A%B6%E6%80%81%23) `533.3K 🔥` `-30%`
1. [虞书欣晒与陈靖可合照 (Yu Shuxin took a photo with Chen Jingke)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%99%92%E4%B8%8E%E9%99%88%E9%9D%96%E5%8F%AF%E5%90%88%E7%85%A7%23) `528.0K 🔥` `-37%`
1. [郝熠然巴黎高定周](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%E5%B7%B4%E9%BB%8E%E9%AB%98%E5%AE%9A%E5%91%A8%23) `521.8K 🔥` `-31%`
1. [国际足联主席发表声明](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E4%B8%BB%E5%B8%AD%E5%8F%91%E8%A1%A8%E5%A3%B0%E6%98%8E%23) `511.4K 🔥` `-38%`
1. [西班牙世界杯连续6场零封](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BF%9E%E7%BB%AD6%E5%9C%BA%E9%9B%B6%E5%B0%81%23) `509.4K 🔥` `-30%`
1. [马丁内斯宣布离任 (Martinez announces his resignation)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%81%E5%86%85%E6%96%AF%E5%AE%A3%E5%B8%83%E7%A6%BB%E4%BB%BB%23) `499.4K 🔥` `-32%`
1. [无人机转移广西强降雨被困人员](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%BD%AC%E7%A7%BB%E5%B9%BF%E8%A5%BF%E5%BC%BA%E9%99%8D%E9%9B%A8%E8%A2%AB%E5%9B%B0%E4%BA%BA%E5%91%98%23) `492.4K 🔥` `-41%`
1. [李柯以张翅 剧宣](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9F%AF%E4%BB%A5%E5%BC%A0%E7%BF%85%20%E5%89%A7%E5%AE%A3%23) `490.0K 🔥` `-41%`
1. [以总理称印度是14亿人口小国](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%80%BB%E7%90%86%E7%A7%B0%E5%8D%B0%E5%BA%A6%E6%98%AF14%E4%BA%BF%E4%BA%BA%E5%8F%A3%E5%B0%8F%E5%9B%BD%23) `485.8K 🔥` `-29%`
1. [曾舜晞抱孟子义的狗自拍](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E6%8A%B1%E5%AD%9F%E5%AD%90%E4%B9%89%E7%9A%84%E7%8B%97%E8%87%AA%E6%8B%8D%23) `484.8K 🔥` `-39%`
1. [徐良我二婚的时候你一定要来](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E6%88%91%E4%BA%8C%E5%A9%9A%E7%9A%84%E6%97%B6%E5%80%99%E4%BD%A0%E4%B8%80%E5%AE%9A%E8%A6%81%E6%9D%A5%23) `482.1K 🔥` `-40%`
1. [C罗亚马尔拥抱 (C royalamar hug)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%BA%9A%E9%A9%AC%E5%B0%94%E6%8B%A5%E6%8A%B1%23) `471.6K 🔥` `-42%`
1. [葡萄牙vs西班牙 (Portugal vs Spain)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99vs%E8%A5%BF%E7%8F%AD%E7%89%99%23) `464.6K 🔥` `-40%`
1. [字节 草地牛](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%20%E8%8D%89%E5%9C%B0%E7%89%9B%23) `460.3K 🔥` `-42%`

Updated at 2026-07-07 09:20:48

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
