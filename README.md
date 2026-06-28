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

1. [抖音通报网红诋毁袁隆平 (Douyin reports that Internet celebrities slander Yuan Longping)](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E9%80%9A%E6%8A%A5%E7%BD%91%E7%BA%A2%E8%AF%8B%E6%AF%81%E8%A2%81%E9%9A%86%E5%B9%B3%23) `753.1K 🔥` `NEW`
1. [多领域亮眼成果筑牢经济增长底气](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%A2%86%E5%9F%9F%E4%BA%AE%E7%9C%BC%E6%88%90%E6%9E%9C%E7%AD%91%E7%89%A2%E7%BB%8F%E6%B5%8E%E5%A2%9E%E9%95%BF%E5%BA%95%E6%B0%94%23) `582.1K 🔥` `NEW`
1. [白玉兰把刘亦菲放进战报](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%8A%8A%E5%88%98%E4%BA%A6%E8%8F%B2%E6%94%BE%E8%BF%9B%E6%88%98%E6%8A%A5%23) `244.2K 🔥` `NEW`
1. [大城市本身就是一种情绪价值](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%9F%8E%E5%B8%82%E6%9C%AC%E8%BA%AB%E5%B0%B1%E6%98%AF%E4%B8%80%E7%A7%8D%E6%83%85%E7%BB%AA%E4%BB%B7%E5%80%BC%23) `124.0K 🔥` `NEW`
1. [黄灿灿回到所有人都在的这一天](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%9B%9E%E5%88%B0%E6%89%80%E6%9C%89%E4%BA%BA%E9%83%BD%E5%9C%A8%E7%9A%84%E8%BF%99%E4%B8%80%E5%A4%A9%23) `112.6K 🔥` `NEW`
1. [TF家族运动会](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `97.6K 🔥` `NEW`
1. [金饰克价年内大跌460元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E5%B9%B4%E5%86%85%E5%A4%A7%E8%B7%8C460%E5%85%83%23) `95.7K 🔥` `NEW`
1. [哈兰德发现boss都在下半区](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%8F%91%E7%8E%B0boss%E9%83%BD%E5%9C%A8%E4%B8%8B%E5%8D%8A%E5%8C%BA%23) `95.1K 🔥` `NEW`
1. [陈瑶晒浪姐舞台合集](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%99%92%E6%B5%AA%E5%A7%90%E8%88%9E%E5%8F%B0%E5%90%88%E9%9B%86%23) `94.4K 🔥` `NEW`
1. [耳朵上这个小洞千万别挤](https://s.weibo.com/weibo?q=%23%E8%80%B3%E6%9C%B5%E4%B8%8A%E8%BF%99%E4%B8%AA%E5%B0%8F%E6%B4%9E%E5%8D%83%E4%B8%87%E5%88%AB%E6%8C%A4%23) `87.3K 🔥` `NEW`
1. [微博崩了 (Weibo crashed)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E5%B4%A9%E4%BA%86%23) `85.2K 🔥` `NEW`
1. [严浩翔回应被线下贴脸](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%BA%BF%E4%B8%8B%E8%B4%B4%E8%84%B8%23) `84.6K 🔥` `NEW`
1. [原来大家都是这么恢复能量的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E4%B9%88%E6%81%A2%E5%A4%8D%E8%83%BD%E9%87%8F%E7%9A%84%23) `83.9K 🔥` `NEW`
1. [苹果芯片成本涨45售价狂加250美元](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%8A%AF%E7%89%87%E6%88%90%E6%9C%AC%E6%B6%A845%E5%94%AE%E4%BB%B7%E7%8B%82%E5%8A%A0250%E7%BE%8E%E5%85%83%23) `81.8K 🔥` `NEW`
1. [宁艺卓穿了高定](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E7%A9%BF%E4%BA%86%E9%AB%98%E5%AE%9A%23) `80.2K 🔥` `NEW`
1. [0败的佛得角vs全胜的阿根廷](https://s.weibo.com/weibo?q=%230%E8%B4%A5%E7%9A%84%E4%BD%9B%E5%BE%97%E8%A7%92vs%E5%85%A8%E8%83%9C%E7%9A%84%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `73.2K 🔥` `NEW`
1. [陈瑶眼睛肿了](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E7%9C%BC%E7%9D%9B%E8%82%BF%E4%BA%86%23) `72.9K 🔥` `NEW`
1. [娜扎用男生拍照姿势出片](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E7%94%A8%E7%94%B7%E7%94%9F%E6%8B%8D%E7%85%A7%E5%A7%BF%E5%8A%BF%E5%87%BA%E7%89%87%23) `72.5K 🔥` `NEW`
1. [王腾回应小米股价暴跌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E8%82%A1%E4%BB%B7%E6%9A%B4%E8%B7%8C%23) `72.5K 🔥` `NEW`
1. [金卡戴珊女儿的腿](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%8D%A1%E6%88%B4%E7%8F%8A%E5%A5%B3%E5%84%BF%E7%9A%84%E8%85%BF%23) `72.3K 🔥` `NEW`
1. [恋与深空无效文学 (Love and Deep Space Invalid Literature)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%97%A0%E6%95%88%E6%96%87%E5%AD%A6%23) `72.2K 🔥` `NEW`
1. [舅舅推婴儿车同时溜俩娃和小猫](https://s.weibo.com/weibo?q=%23%E8%88%85%E8%88%85%E6%8E%A8%E5%A9%B4%E5%84%BF%E8%BD%A6%E5%90%8C%E6%97%B6%E6%BA%9C%E4%BF%A9%E5%A8%83%E5%92%8C%E5%B0%8F%E7%8C%AB%23) `72.1K 🔥` `NEW`
1. [外卖备注让骑手帮忙抓天牛](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%A4%87%E6%B3%A8%E8%AE%A9%E9%AA%91%E6%89%8B%E5%B8%AE%E5%BF%99%E6%8A%93%E5%A4%A9%E7%89%9B%23) `72.0K 🔥` `NEW`
1. [白玉兰收官战报](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%94%B6%E5%AE%98%E6%88%98%E6%8A%A5%23) `71.9K 🔥` `NEW`
1. [马丁内斯 崩老头](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%81%E5%86%85%E6%96%AF%20%E5%B4%A9%E8%80%81%E5%A4%B4%23) `71.9K 🔥` `NEW`
1. [边牧被猫尾撩到不知所措](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E7%89%A7%E8%A2%AB%E7%8C%AB%E5%B0%BE%E6%92%A9%E5%88%B0%E4%B8%8D%E7%9F%A5%E6%89%80%E6%8E%AA%23) `71.8K 🔥` `NEW`
1. [韩国队回国没有接机](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E5%9B%9E%E5%9B%BD%E6%B2%A1%E6%9C%89%E6%8E%A5%E6%9C%BA%23) `71.7K 🔥` `NEW`
1. [王楚钦孙颖莎参加欢迎晚宴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E5%8F%82%E5%8A%A0%E6%AC%A2%E8%BF%8E%E6%99%9A%E5%AE%B4%23) `61.5K 🔥` `NEW`
1. [杨紫朝粉丝鞠了三次躬](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%9C%9D%E7%B2%89%E4%B8%9D%E9%9E%A0%E4%BA%86%E4%B8%89%E6%AC%A1%E8%BA%AC%23) `60.3K 🔥` `NEW`
1. [沈月探班谭松韵剧组](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%8E%A2%E7%8F%AD%E8%B0%AD%E6%9D%BE%E9%9F%B5%E5%89%A7%E7%BB%84%23) `58.7K 🔥` `NEW`
1. [LGDNBW对战EDGM (LGDNBW vs. EDGM)](https://s.weibo.com/weibo?q=%23LGDNBW%E5%AF%B9%E6%88%98EDGM%23) `58.6K 🔥` `NEW`
1. [初代蔚来ES8入藏北京汽车博物馆](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%BB%A3%E8%94%9A%E6%9D%A5ES8%E5%85%A5%E8%97%8F%E5%8C%97%E4%BA%AC%E6%B1%BD%E8%BD%A6%E5%8D%9A%E7%89%A9%E9%A6%86%23) `58.0K 🔥` `NEW`
1. [兰州大学成立专项调查组](https://s.weibo.com/weibo?q=%23%E5%85%B0%E5%B7%9E%E5%A4%A7%E5%AD%A6%E6%88%90%E7%AB%8B%E4%B8%93%E9%A1%B9%E8%B0%83%E6%9F%A5%E7%BB%84%23) `57.4K 🔥` `NEW`
1. [世界杯32强全名单](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF32%E5%BC%BA%E5%85%A8%E5%90%8D%E5%8D%95%23) `1.0M 🔥` `-35%`
1. [当小猫闻了一下柴犬的脚](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%B0%8F%E7%8C%AB%E9%97%BB%E4%BA%86%E4%B8%80%E4%B8%8B%E6%9F%B4%E7%8A%AC%E7%9A%84%E8%84%9A%23) `193.0K 🔥` `-41%`
1. [诋毁袁隆平成果网红称大不了就进去 (The Internet celebrity who slandered Yuan Longping said he would go in if it was a big deal.)](https://s.weibo.com/weibo?q=%23%E8%AF%8B%E6%AF%81%E8%A2%81%E9%9A%86%E5%B9%B3%E6%88%90%E6%9E%9C%E7%BD%91%E7%BA%A2%E7%A7%B0%E5%A4%A7%E4%B8%8D%E4%BA%86%E5%B0%B1%E8%BF%9B%E5%8E%BB%23) `158.9K 🔥` `-93%`
1. [复习备考状态拉满 (Review preparation status is full)](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E4%B9%A0%E5%A4%87%E8%80%83%E7%8A%B6%E6%80%81%E6%8B%89%E6%BB%A1%23) `151.6K 🔥` `-47%`
1. [伊朗出局](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%87%BA%E5%B1%80%23) `116.6K 🔥` `-73%`
1. [韩国跪着死伊朗站着死](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%B7%AA%E7%9D%80%E6%AD%BB%E4%BC%8A%E6%9C%97%E7%AB%99%E7%9D%80%E6%AD%BB%23) `100.5K 🔥` `-71%`
1. [玩家回应恋与深空回应](https://s.weibo.com/weibo?q=%23%E7%8E%A9%E5%AE%B6%E5%9B%9E%E5%BA%94%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%23) `100.3K 🔥` `-91%`
1. [恋与深空回应后玩家更生气了](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%E5%90%8E%E7%8E%A9%E5%AE%B6%E6%9B%B4%E7%94%9F%E6%B0%94%E4%BA%86%23) `98.9K 🔥` `-54%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `96.6K 🔥` `-74%`
1. [28岁产妇昏迷家人录孩子哭声鼓气 (28-year-old comatose mother's family recorded her child's cries and cheers)](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E4%BA%A7%E5%A6%87%E6%98%8F%E8%BF%B7%E5%AE%B6%E4%BA%BA%E5%BD%95%E5%AD%A9%E5%AD%90%E5%93%AD%E5%A3%B0%E9%BC%93%E6%B0%94%23) `93.5K 🔥` `-88%`
1. [雷军回应被扣营销帽子](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%89%A3%E8%90%A5%E9%94%80%E5%B8%BD%E5%AD%90%23) `92.0K 🔥` `-70%`
1. [手机代码发现测评博主名字](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E4%BB%A3%E7%A0%81%E5%8F%91%E7%8E%B0%E6%B5%8B%E8%AF%84%E5%8D%9A%E4%B8%BB%E5%90%8D%E5%AD%97%23) `91.6K 🔥` `-57%`
1. [李现 杨紫](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%20%E6%9D%A8%E7%B4%AB%23) `88.3K 🔥` `-83%`
1. [浪姐结束各回各咖](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%BB%93%E6%9D%9F%E5%90%84%E5%9B%9E%E5%90%84%E5%92%96%23) `80.4K 🔥` `-92%`
1. [黄灿灿拿到全季通告费](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%8B%BF%E5%88%B0%E5%85%A8%E5%AD%A3%E9%80%9A%E5%91%8A%E8%B4%B9%23) `73.0K 🔥` `-91%`
1. [韩国淘汰 (South Korea eliminated)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B7%98%E6%B1%B0%23) `69.5K 🔥` `-77%`
1. [甲亢哥得知葡萄牙可能要踢西法哭了 (Brother with hyperthyroidism cried when he learned that Portugal might play against Spain)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E4%BA%A2%E5%93%A5%E5%BE%97%E7%9F%A5%E8%91%A1%E8%90%84%E7%89%99%E5%8F%AF%E8%83%BD%E8%A6%81%E8%B8%A2%E8%A5%BF%E6%B3%95%E5%93%AD%E4%BA%86%23) `61.8K 🔥` `-79%`
1. [迪丽热巴江坂丽奈美甲](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B1%9F%E5%9D%82%E4%B8%BD%E5%A5%88%E7%BE%8E%E7%94%B2%23) `57.5K 🔥` `-89%`

Updated at 2026-06-28 17:30:20

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
