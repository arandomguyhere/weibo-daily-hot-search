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

1. [山姆品质暴跌你还敢去吗](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%93%81%E8%B4%A8%E6%9A%B4%E8%B7%8C%E4%BD%A0%E8%BF%98%E6%95%A2%E5%8E%BB%E5%90%97%23) `1.5M 🔥` `NEW`
1. [人胖的时候感受不到自己胖](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%83%96%E7%9A%84%E6%97%B6%E5%80%99%E6%84%9F%E5%8F%97%E4%B8%8D%E5%88%B0%E8%87%AA%E5%B7%B1%E8%83%96%23) `367.0K 🔥` `NEW`
1. [2700元搞死一家店铺](https://s.weibo.com/weibo?q=%232700%E5%85%83%E6%90%9E%E6%AD%BB%E4%B8%80%E5%AE%B6%E5%BA%97%E9%93%BA%23) `330.1K 🔥` `NEW`
1. [亚马尔世界波破门](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B8%96%E7%95%8C%E6%B3%A2%E7%A0%B4%E9%97%A8%23) `306.1K 🔥` `NEW`
1. [花30万相亲闪婚22天后女方离家](https://s.weibo.com/weibo?q=%23%E8%8A%B130%E4%B8%87%E7%9B%B8%E4%BA%B2%E9%97%AA%E5%A9%9A22%E5%A4%A9%E5%90%8E%E5%A5%B3%E6%96%B9%E7%A6%BB%E5%AE%B6%23) `290.2K 🔥` `NEW`
1. [医生回应AB型爸和A型妈生出O型娃](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94AB%E5%9E%8B%E7%88%B8%E5%92%8CA%E5%9E%8B%E5%A6%88%E7%94%9F%E5%87%BAO%E5%9E%8B%E5%A8%83%23) `278.6K 🔥` `NEW`
1. [吴越发声AI诈骗太恶劣](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B6%8A%E5%8F%91%E5%A3%B0AI%E8%AF%88%E9%AA%97%E5%A4%AA%E6%81%B6%E5%8A%A3%23) `273.8K 🔥` `NEW`
1. [重阳节](https://s.weibo.com/weibo?q=%23%E9%87%8D%E9%98%B3%E8%8A%82%23) `259.4K 🔥` `NEW`
1. [叶非夜喊话郭宇欣方公开核验](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E9%9D%9E%E5%A4%9C%E5%96%8A%E8%AF%9D%E9%83%AD%E5%AE%87%E6%AC%A3%E6%96%B9%E5%85%AC%E5%BC%80%E6%A0%B8%E9%AA%8C%23) `170.0K 🔥` `NEW`
1. [网传女孩为看演唱会花光弟弟学费](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%A5%B3%E5%AD%A9%E4%B8%BA%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8A%B1%E5%85%89%E5%BC%9F%E5%BC%9F%E5%AD%A6%E8%B4%B9%23) `156.9K 🔥` `NEW`
1. [嫁金钗男主头套晃得要掉](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E7%94%B7%E4%B8%BB%E5%A4%B4%E5%A5%97%E6%99%83%E5%BE%97%E8%A6%81%E6%8E%89%23) `155.9K 🔥` `NEW`
1. [野生大熊猫被话痨大叔整懵了](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%94%9F%E5%A4%A7%E7%86%8A%E7%8C%AB%E8%A2%AB%E8%AF%9D%E7%97%A8%E5%A4%A7%E5%8F%94%E6%95%B4%E6%87%B5%E4%BA%86%23) `145.7K 🔥` `NEW`
1. [蒋依依方辟谣结婚传闻](https://s.weibo.com/weibo?q=%23%E8%92%8B%E4%BE%9D%E4%BE%9D%E6%96%B9%E8%BE%9F%E8%B0%A3%E7%BB%93%E5%A9%9A%E4%BC%A0%E9%97%BB%23) `133.4K 🔥` `NEW`
1. [嫁金钗口碑发酵](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%8F%A3%E7%A2%91%E5%8F%91%E9%85%B5%23) `128.5K 🔥` `NEW`
1. [国博问洛阳挖到什么了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8D%9A%E9%97%AE%E6%B4%9B%E9%98%B3%E6%8C%96%E5%88%B0%E4%BB%80%E4%B9%88%E4%BA%86%23) `116.2K 🔥` `NEW`
1. [原来这个血型天生更易得痔疮](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B8%AA%E8%A1%80%E5%9E%8B%E5%A4%A9%E7%94%9F%E6%9B%B4%E6%98%93%E5%BE%97%E7%97%94%E7%96%AE%23) `114.4K 🔥` `NEW`
1. [我去山东连幼儿园的都比不过](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%8E%BB%E5%B1%B1%E4%B8%9C%E8%BF%9E%E5%B9%BC%E5%84%BF%E5%9B%AD%E7%9A%84%E9%83%BD%E6%AF%94%E4%B8%8D%E8%BF%87%23) `112.5K 🔥` `NEW`
1. [别再让博主的镜头替监管失明买单](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%86%8D%E8%AE%A9%E5%8D%9A%E4%B8%BB%E7%9A%84%E9%95%9C%E5%A4%B4%E6%9B%BF%E7%9B%91%E7%AE%A1%E5%A4%B1%E6%98%8E%E4%B9%B0%E5%8D%95%23) `111.5K 🔥` `NEW`
1. [王楚然就这样被黄景瑜弹飞了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%B0%B1%E8%BF%99%E6%A0%B7%E8%A2%AB%E9%BB%84%E6%99%AF%E7%91%9C%E5%BC%B9%E9%A3%9E%E4%BA%86%23) `96.9K 🔥` `NEW`
1. [丞磊想二搭的女艺人都是徐若晗](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E6%83%B3%E4%BA%8C%E6%90%AD%E7%9A%84%E5%A5%B3%E8%89%BA%E4%BA%BA%E9%83%BD%E6%98%AF%E5%BE%90%E8%8B%A5%E6%99%97%23) `86.7K 🔥` `NEW`
1. [成吉思汗第32代嫡孙女离世](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%90%89%E6%80%9D%E6%B1%97%E7%AC%AC32%E4%BB%A3%E5%AB%A1%E5%AD%99%E5%A5%B3%E7%A6%BB%E4%B8%96%23) `82.3K 🔥` `NEW`
1. [狗子闯祸挨完两拳后一脸如释重负](https://s.weibo.com/weibo?q=%23%E7%8B%97%E5%AD%90%E9%97%AF%E7%A5%B8%E6%8C%A8%E5%AE%8C%E4%B8%A4%E6%8B%B3%E5%90%8E%E4%B8%80%E8%84%B8%E5%A6%82%E9%87%8A%E9%87%8D%E8%B4%9F%23) `73.3K 🔥` `NEW`
1. [杭州大三女孩7个月开20家柠檬奶店](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%A4%A7%E4%B8%89%E5%A5%B3%E5%AD%A97%E4%B8%AA%E6%9C%88%E5%BC%8020%E5%AE%B6%E6%9F%A0%E6%AA%AC%E5%A5%B6%E5%BA%97%23) `894.7K 🔥` `+1362%`
1. [广交会真的太全面了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%85%A8%E9%9D%A2%E4%BA%86%23) `689.8K 🔥` `+171%`
1. [曾辉淘汰王赫野碎了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%B7%98%E6%B1%B0%E7%8E%8B%E8%B5%AB%E9%87%8E%E7%A2%8E%E4%BA%86%23) `320.3K 🔥` `+284%`
1. [徐艺洋弟弟发文](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%BC%9F%E5%BC%9F%E5%8F%91%E6%96%87%23) `275.1K 🔥` `+246%`
1. [AI的吻戏比真人还欲啊](https://s.weibo.com/weibo?q=%23AI%E7%9A%84%E5%90%BB%E6%88%8F%E6%AF%94%E7%9C%9F%E4%BA%BA%E8%BF%98%E6%AC%B2%E5%95%8A%23) `269.1K 🔥` `+336%`
1. [演员招不到黄胖子了](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E6%8B%9B%E4%B8%8D%E5%88%B0%E9%BB%84%E8%83%96%E5%AD%90%E4%BA%86%23) `237.0K 🔥` `+208%`
1. [马斯克飞行汽车遭踢馆](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E9%A3%9E%E8%A1%8C%E6%B1%BD%E8%BD%A6%E9%81%AD%E8%B8%A2%E9%A6%86%23) `195.8K 🔥` `+215%`
1. [嫁金钗这是奔着破纪录去的](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E8%BF%99%E6%98%AF%E5%A5%94%E7%9D%80%E7%A0%B4%E7%BA%AA%E5%BD%95%E5%8E%BB%E7%9A%84%23) `189.0K 🔥` `+54%`
1. [在梅边 夯爆了](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%A2%85%E8%BE%B9%20%E5%A4%AF%E7%88%86%E4%BA%86%23) `166.9K 🔥` `+212%`
1. [特斯拉市值蒸发超6200亿](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%91%E8%B6%856200%E4%BA%BF%23) `158.2K 🔥` `+155%`
1. [皮质醇高的6大身体信号](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E8%B4%A8%E9%86%87%E9%AB%98%E7%9A%846%E5%A4%A7%E8%BA%AB%E4%BD%93%E4%BF%A1%E5%8F%B7%23) `158.0K 🔥` `+206%`
1. [曾辉新综艺官宣](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%96%B0%E7%BB%BC%E8%89%BA%E5%AE%98%E5%AE%A3%23) `153.7K 🔥` `+378%`
1. [美颜突然关掉太恐怖了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%A2%9C%E7%AA%81%E7%84%B6%E5%85%B3%E6%8E%89%E5%A4%AA%E6%81%90%E6%80%96%E4%BA%86%23) `148.4K 🔥` `+359%`
1. [肠癌有3个危险信号](https://s.weibo.com/weibo?q=%23%E8%82%A0%E7%99%8C%E6%9C%893%E4%B8%AA%E5%8D%B1%E9%99%A9%E4%BF%A1%E5%8F%B7%23) `138.7K 🔥` `+171%`
1. [王力宏力赞披哥在梅边舞台](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%8A%9B%E8%B5%9E%E6%8A%AB%E5%93%A5%E5%9C%A8%E6%A2%85%E8%BE%B9%E8%88%9E%E5%8F%B0%23) `118.7K 🔥` `+98%`
1. [中国小姐姐蜗居老头乐在外网走红](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%A7%90%E5%A7%90%E8%9C%97%E5%B1%85%E8%80%81%E5%A4%B4%E4%B9%90%E5%9C%A8%E5%A4%96%E7%BD%91%E8%B5%B0%E7%BA%A2%23) `110.8K 🔥` `+117%`
1. [现役男女演员TOP](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%BD%B9%E7%94%B7%E5%A5%B3%E6%BC%94%E5%91%98TOP%23) `110.5K 🔥` `+42%`
1. [刘丁硕质疑张继科卖鸡排](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E8%B4%A8%E7%96%91%E5%BC%A0%E7%BB%A7%E7%A7%91%E5%8D%96%E9%B8%A1%E6%8E%92%23) `103.5K 🔥` `+71%`
1. [欠薪345万却砸钱送孩子韩国出道](https://s.weibo.com/weibo?q=%23%E6%AC%A0%E8%96%AA345%E4%B8%87%E5%8D%B4%E7%A0%B8%E9%92%B1%E9%80%81%E5%AD%A9%E5%AD%90%E9%9F%A9%E5%9B%BD%E5%87%BA%E9%81%93%23) `97.2K 🔥` `+85%`
1. [卖柠檬奶月营业额超百万女生发声](https://s.weibo.com/weibo?q=%23%E5%8D%96%E6%9F%A0%E6%AA%AC%E5%A5%B6%E6%9C%88%E8%90%A5%E4%B8%9A%E9%A2%9D%E8%B6%85%E7%99%BE%E4%B8%87%E5%A5%B3%E7%94%9F%E5%8F%91%E5%A3%B0%23) `81.0K 🔥` `+191%`
1. [六旬男称追求者排到黄浦江](https://s.weibo.com/weibo?q=%23%E5%85%AD%E6%97%AC%E7%94%B7%E7%A7%B0%E8%BF%BD%E6%B1%82%E8%80%85%E6%8E%92%E5%88%B0%E9%BB%84%E6%B5%A6%E6%B1%9F%23) `77.1K 🔥` `+109%`
1. [日网友称DeepSeek颠覆格局](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%BD%91%E5%8F%8B%E7%A7%B0DeepSeek%E9%A2%A0%E8%A6%86%E6%A0%BC%E5%B1%80%23) `71.9K 🔥` `+125%`
1. [曹骏滑铲空翻](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%BB%91%E9%93%B2%E7%A9%BA%E7%BF%BB%23) `70.5K 🔥` `+145%`
1. [周深首唱大梦归](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E9%A6%96%E5%94%B1%E5%A4%A7%E6%A2%A6%E5%BD%92%23) `69.8K 🔥` `+114%`
1. [埃及新生儿翘二郎腿好悠闲](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E6%96%B0%E7%94%9F%E5%84%BF%E7%BF%98%E4%BA%8C%E9%83%8E%E8%85%BF%E5%A5%BD%E6%82%A0%E9%97%B2%23) `69.7K 🔥` `+118%`
1. [特斯拉飞行汽车被质疑是噱头](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E9%A3%9E%E8%A1%8C%E6%B1%BD%E8%BD%A6%E8%A2%AB%E8%B4%A8%E7%96%91%E6%98%AF%E5%99%B1%E5%A4%B4%23) `319.4K 🔥`

Updated at 2026-10-18 08:15:31

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
