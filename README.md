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

1. [仰望汽车26款闪充焕新升级 (Look up to 26 new and upgraded flash charging models of cars)](https://s.weibo.com/weibo?q=%23%E4%BB%B0%E6%9C%9B%E6%B1%BD%E8%BD%A626%E6%AC%BE%E9%97%AA%E5%85%85%E7%84%95%E6%96%B0%E5%8D%87%E7%BA%A7%23) `35.6K 🔥` `NEW`
1. [晓兮小贝坦白局](https://s.weibo.com/weibo?q=%23%E6%99%93%E5%85%AE%E5%B0%8F%E8%B4%9D%E5%9D%A6%E7%99%BD%E5%B1%80%23) `22.3K 🔥` `NEW`
1. [我使馆提醒近期避免前往日本](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BD%BF%E9%A6%86%E6%8F%90%E9%86%92%E8%BF%91%E6%9C%9F%E9%81%BF%E5%85%8D%E5%89%8D%E5%BE%80%E6%97%A5%E6%9C%AC%23) `65.2K 🔥`
1. [人大代表反问微短剧爽完之后呢 (The National People's Congress representative asked what will happen after the mini-short play is over?)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E5%8F%8D%E9%97%AE%E5%BE%AE%E7%9F%AD%E5%89%A7%E7%88%BD%E5%AE%8C%E4%B9%8B%E5%90%8E%E5%91%A2%23) `41.8K 🔥`
1. [在中国式现代化新征程上策马奔腾 (Galloping forward on the new journey of Chinese-style modernization)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%AD%E5%9B%BD%E5%BC%8F%E7%8E%B0%E4%BB%A3%E5%8C%96%E6%96%B0%E5%BE%81%E7%A8%8B%E4%B8%8A%E7%AD%96%E9%A9%AC%E5%A5%94%E8%85%BE%23) `36.4K 🔥`
1. [社保迎来第六险](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E8%BF%8E%E6%9D%A5%E7%AC%AC%E5%85%AD%E9%99%A9%23) `32.7K 🔥`
1. [谈到美国电网中国白发院士笑了](https://s.weibo.com/weibo?q=%23%E8%B0%88%E5%88%B0%E7%BE%8E%E5%9B%BD%E7%94%B5%E7%BD%91%E4%B8%AD%E5%9B%BD%E7%99%BD%E5%8F%91%E9%99%A2%E5%A3%AB%E7%AC%91%E4%BA%86%23) `30.1K 🔥`
1. [伊朗沉没军舰已找到80具遗体](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%B2%89%E6%B2%A1%E5%86%9B%E8%88%B0%E5%B7%B2%E6%89%BE%E5%88%B080%E5%85%B7%E9%81%97%E4%BD%93%23) `30.1K 🔥`
1. [纯真年代 真替身 (The Age of Innocence, True Substitute)](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%20%E7%9C%9F%E6%9B%BF%E8%BA%AB%23) `29.2K 🔥`
1. [流动草莓摊因网友评价太好吃火了 (The mobile strawberry stand became popular because netizens commented that it was so delicious.)](https://s.weibo.com/weibo?q=%23%E6%B5%81%E5%8A%A8%E8%8D%89%E8%8E%93%E6%91%8A%E5%9B%A0%E7%BD%91%E5%8F%8B%E8%AF%84%E4%BB%B7%E5%A4%AA%E5%A5%BD%E5%90%83%E7%81%AB%E4%BA%86%23) `29.1K 🔥`
1. [建议鼓励大学生加入家政行业](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E9%BC%93%E5%8A%B1%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%8A%A0%E5%85%A5%E5%AE%B6%E6%94%BF%E8%A1%8C%E4%B8%9A%23) `29.0K 🔥`
1. [IF椰子水严正声明](https://s.weibo.com/weibo?q=%23IF%E6%A4%B0%E5%AD%90%E6%B0%B4%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `28.9K 🔥`
1. [中东局势彻底失控](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%B1%80%E5%8A%BF%E5%BD%BB%E5%BA%95%E5%A4%B1%E6%8E%A7%23) `28.7K 🔥`
1. [王鹤棣紫衣少年谢景行 (Wang Hedi, the boy in purple, Xie Jingxing)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%B4%AB%E8%A1%A3%E5%B0%91%E5%B9%B4%E8%B0%A2%E6%99%AF%E8%A1%8C%23) `28.4K 🔥`
1. [叶璇说拍短剧老爽了](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%92%87%E8%AF%B4%E6%8B%8D%E7%9F%AD%E5%89%A7%E8%80%81%E7%88%BD%E4%BA%86%23) `28.2K 🔥`
1. [苹果发布会 (Apple conference)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `28.0K 🔥`
1. [车停半个月被老鼠囤了20斤粮食](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%81%9C%E5%8D%8A%E4%B8%AA%E6%9C%88%E8%A2%AB%E8%80%81%E9%BC%A0%E5%9B%A4%E4%BA%8620%E6%96%A4%E7%B2%AE%E9%A3%9F%23) `27.8K 🔥`
1. [建议废除劳务派遣制度 (It is recommended to abolish the labor dispatch system)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%BA%9F%E9%99%A4%E5%8A%B3%E5%8A%A1%E6%B4%BE%E9%81%A3%E5%88%B6%E5%BA%A6%23) `26.7K 🔥`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `24.6K 🔥`
1. [凭微信转账记录起诉同学还钱被驳回](https://s.weibo.com/weibo?q=%23%E5%87%AD%E5%BE%AE%E4%BF%A1%E8%BD%AC%E8%B4%A6%E8%AE%B0%E5%BD%95%E8%B5%B7%E8%AF%89%E5%90%8C%E5%AD%A6%E8%BF%98%E9%92%B1%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `22.7K 🔥`
1. [最长学期后迎来史上最短学期 (The longest semester is followed by the shortest semester in history)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%95%BF%E5%AD%A6%E6%9C%9F%E5%90%8E%E8%BF%8E%E6%9D%A5%E5%8F%B2%E4%B8%8A%E6%9C%80%E7%9F%AD%E5%AD%A6%E6%9C%9F%23) `22.7K 🔥` `-28%`
1. [保时捷Taycan (Porsche Taycan)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7Taycan%23) `22.7K 🔥` `-24%`
1. [迪丽热巴报平安](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `22.7K 🔥` `-23%`
1. [伊朗玫瑰宫遭袭前后对比](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%8E%AB%E7%91%B0%E5%AE%AB%E9%81%AD%E8%A2%AD%E5%89%8D%E5%90%8E%E5%AF%B9%E6%AF%94%23) `22.6K 🔥` `-22%`
1. [中国游客在日本目睹老太被壮汉撞飞](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%9C%A8%E6%97%A5%E6%9C%AC%E7%9B%AE%E7%9D%B9%E8%80%81%E5%A4%AA%E8%A2%AB%E5%A3%AE%E6%B1%89%E6%92%9E%E9%A3%9E%23) `22.6K 🔥` `-21%`
1. [美国为何非要搞垮伊朗 (Why does the United States insist on destroying Iran?)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%BA%E4%BD%95%E9%9D%9E%E8%A6%81%E6%90%9E%E5%9E%AE%E4%BC%8A%E6%9C%97%23) `22.6K 🔥` `-21%`
1. [微信转账1万没写借条同学不还钱了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%BD%AC%E8%B4%A61%E4%B8%87%E6%B2%A1%E5%86%99%E5%80%9F%E6%9D%A1%E5%90%8C%E5%AD%A6%E4%B8%8D%E8%BF%98%E9%92%B1%E4%BA%86%23) `22.5K 🔥` `-21%`
1. [伊朗展开高强度连环反击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B1%95%E5%BC%80%E9%AB%98%E5%BC%BA%E5%BA%A6%E8%BF%9E%E7%8E%AF%E5%8F%8D%E5%87%BB%23) `22.5K 🔥` `-21%`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `22.5K 🔥` `-21%`
1. [哈梅内伊之子平安 (Peace to Khamenei’s son)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E4%B9%8B%E5%AD%90%E5%B9%B3%E5%AE%89%23) `22.4K 🔥` `-22%`
1. [易烊千玺告眼镜公司侵权索赔50.5万 (Yi Yang Qianxi sues an eyewear company for infringement of RMB 505,000)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%91%8A%E7%9C%BC%E9%95%9C%E5%85%AC%E5%8F%B8%E4%BE%B5%E6%9D%83%E7%B4%A2%E8%B5%9450.5%E4%B8%87%23) `22.4K 🔥` `-22%`
1. [西班牙首相重申反战立场 (Spanish Prime Minister reiterates anti-war stance)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E7%9B%B8%E9%87%8D%E7%94%B3%E5%8F%8D%E6%88%98%E7%AB%8B%E5%9C%BA%23) `22.4K 🔥` `-22%`
1. [建议将香港机场纳入国际航空体系 (It is recommended that Hong Kong Airport be integrated into the international aviation system)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%86%E9%A6%99%E6%B8%AF%E6%9C%BA%E5%9C%BA%E7%BA%B3%E5%85%A5%E5%9B%BD%E9%99%85%E8%88%AA%E7%A9%BA%E4%BD%93%E7%B3%BB%23) `22.3K 🔥` `-22%`
1. [韩蛇蝎美人被确认为反社会人格 (Korean femme fatale confirmed to be anti-social personality)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%9B%87%E8%9D%8E%E7%BE%8E%E4%BA%BA%E8%A2%AB%E7%A1%AE%E8%AE%A4%E4%B8%BA%E5%8F%8D%E7%A4%BE%E4%BC%9A%E4%BA%BA%E6%A0%BC%23) `22.3K 🔥` `-22%`
1. [彩礼设6万元上限治标更要治本 (Setting a NT$60,000 cap on betrothal gifts should only address the symptoms rather than the root cause)](https://s.weibo.com/weibo?q=%23%E5%BD%A9%E7%A4%BC%E8%AE%BE6%E4%B8%87%E5%85%83%E4%B8%8A%E9%99%90%E6%B2%BB%E6%A0%87%E6%9B%B4%E8%A6%81%E6%B2%BB%E6%9C%AC%23) `22.3K 🔥` `-22%`
1. [弟弟你的相貌很容易让人轻敌啊 (Brother, your appearance makes it easy for others to underestimate you.)](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E4%BD%A0%E7%9A%84%E7%9B%B8%E8%B2%8C%E5%BE%88%E5%AE%B9%E6%98%93%E8%AE%A9%E4%BA%BA%E8%BD%BB%E6%95%8C%E5%95%8A%23) `22.3K 🔥` `-22%`
1. [Bin 先锋赛给大伙带个冠军回来 (Bin Pioneer Tournament brings back a champion to everyone)](https://s.weibo.com/weibo?q=%23Bin%20%E5%85%88%E9%94%8B%E8%B5%9B%E7%BB%99%E5%A4%A7%E4%BC%99%E5%B8%A6%E4%B8%AA%E5%86%A0%E5%86%9B%E5%9B%9E%E6%9D%A5%23) `22.3K 🔥` `-22%`
1. [63岁失独妈妈剖腹产生下健康女婴](https://s.weibo.com/weibo?q=%2363%E5%B2%81%E5%A4%B1%E7%8B%AC%E5%A6%88%E5%A6%88%E5%89%96%E8%85%B9%E4%BA%A7%E7%94%9F%E4%B8%8B%E5%81%A5%E5%BA%B7%E5%A5%B3%E5%A9%B4%23) `22.3K 🔥` `-22%`
1. [TTG对战AG](https://s.weibo.com/weibo?q=%23TTG%E5%AF%B9%E6%88%98AG%23) `22.3K 🔥` `-22%`
1. [米兰时装周](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E6%97%B6%E8%A3%85%E5%91%A8%23) `22.3K 🔥` `-22%`
1. [给你宇宙](https://s.weibo.com/weibo?q=%23%E7%BB%99%E4%BD%A0%E5%AE%87%E5%AE%99%23) `22.3K 🔥` `-24%`
1. [纯真年代的爱情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `22.3K 🔥` `-22%`
1. [宋平同志逝世 (Comrade Song Ping passed away)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B9%B3%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `22.3K 🔥` `-22%`
1. [KPL春季赛](https://s.weibo.com/weibo?q=%23KPL%E6%98%A5%E5%AD%A3%E8%B5%9B%23) `22.3K 🔥` `-22%`
1. [小狗做雾化不理解但很配合 (The puppy doesn’t understand the nebulization process but is very cooperative.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%81%9A%E9%9B%BE%E5%8C%96%E4%B8%8D%E7%90%86%E8%A7%A3%E4%BD%86%E5%BE%88%E9%85%8D%E5%90%88%23) `22.3K 🔥` `-22%`
1. [虞书欣林晚星报道](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%9E%97%E6%99%9A%E6%98%9F%E6%8A%A5%E9%81%93%23) `22.3K 🔥` `-22%`
1. [MacBookNeo定价4599元起 (MacBook Neo starts at 4,599 yuan)](https://s.weibo.com/weibo?q=%23MacBookNeo%E5%AE%9A%E4%BB%B74599%E5%85%83%E8%B5%B7%23) `22.3K 🔥` `-22%`
1. [王嘉尔 TecatePalNorte](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%20TecatePalNorte%23) `22.3K 🔥` `-58%`
1. [灿如繁星](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%23) `22.3K 🔥` `-22%`
1. [女员工手一抖摔破3000多元飞天茅台 (Female employee shook her hand and broke more than 3,000 yuan of Feitian Moutai)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%91%98%E5%B7%A5%E6%89%8B%E4%B8%80%E6%8A%96%E6%91%94%E7%A0%B43000%E5%A4%9A%E5%85%83%E9%A3%9E%E5%A4%A9%E8%8C%85%E5%8F%B0%23) `22.3K 🔥` `-22%`
1. [1克拉钻石价格已经1000多了 (The price of 1 carat diamond is already over 1,000)](https://s.weibo.com/weibo?q=%231%E5%85%8B%E6%8B%89%E9%92%BB%E7%9F%B3%E4%BB%B7%E6%A0%BC%E5%B7%B2%E7%BB%8F1000%E5%A4%9A%E4%BA%86%23) `22.3K 🔥` `-22%`

Updated at 2026-03-05 04:19:33

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
