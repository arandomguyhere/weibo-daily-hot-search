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

1. [金鹰奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `658.5K 🔥` `NEW`
1. [多款APP被通报](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BEAPP%E8%A2%AB%E9%80%9A%E6%8A%A5%23) `574.9K 🔥` `NEW`
1. [宁波致1死4伤车祸司机突发疾病](https://s.weibo.com/weibo?q=%23%E5%AE%81%E6%B3%A2%E8%87%B41%E6%AD%BB4%E4%BC%A4%E8%BD%A6%E7%A5%B8%E5%8F%B8%E6%9C%BA%E7%AA%81%E5%8F%91%E7%96%BE%E7%97%85%23) `403.0K 🔥` `NEW`
1. [爱情公寓](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%23) `373.0K 🔥` `NEW`
1. [杨幂掉提](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8E%89%E6%8F%90%23) `352.0K 🔥` `NEW`
1. [龙餐馆918在日本上映](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86918%E5%9C%A8%E6%97%A5%E6%9C%AC%E4%B8%8A%E6%98%A0%23) `318.0K 🔥` `NEW`
1. [原来不是挂面不好吃](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%98%AF%E6%8C%82%E9%9D%A2%E4%B8%8D%E5%A5%BD%E5%90%83%23) `317.3K 🔥` `NEW`
1. [洪峰裹挟杂物冲击广西大桥](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B3%B0%E8%A3%B9%E6%8C%9F%E6%9D%82%E7%89%A9%E5%86%B2%E5%87%BB%E5%B9%BF%E8%A5%BF%E5%A4%A7%E6%A1%A5%23) `315.2K 🔥` `NEW`
1. [40岁飞人博尔特求婚成功](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E9%A3%9E%E4%BA%BA%E5%8D%9A%E5%B0%94%E7%89%B9%E6%B1%82%E5%A9%9A%E6%88%90%E5%8A%9F%23) `313.9K 🔥` `NEW`
1. [A股成交1.83万亿缩量1756亿](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%88%90%E4%BA%A41.83%E4%B8%87%E4%BA%BF%E7%BC%A9%E9%87%8F1756%E4%BA%BF%23) `313.7K 🔥` `NEW`
1. [曝iPhone18Pro涨幅堪称温和](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E6%B6%A8%E5%B9%85%E5%A0%AA%E7%A7%B0%E6%B8%A9%E5%92%8C%23) `267.9K 🔥` `NEW`
1. [和AI的聊天记录能有多离谱](https://s.weibo.com/weibo?q=%23%E5%92%8CAI%E7%9A%84%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E8%83%BD%E6%9C%89%E5%A4%9A%E7%A6%BB%E8%B0%B1%23) `232.4K 🔥` `NEW`
1. [九尾发了多少个黄子弘凡](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E5%8F%91%E4%BA%86%E5%A4%9A%E5%B0%91%E4%B8%AA%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%23) `202.7K 🔥` `NEW`
1. [代旭谭松韵春禾之上杀青](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%97%AD%E8%B0%AD%E6%9D%BE%E9%9F%B5%E6%98%A5%E7%A6%BE%E4%B9%8B%E4%B8%8A%E6%9D%80%E9%9D%92%23) `185.3K 🔥` `NEW`
1. [网传1.9万获返还遭索赔家属称不知情](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A01.9%E4%B8%87%E8%8E%B7%E8%BF%94%E8%BF%98%E9%81%AD%E7%B4%A2%E8%B5%94%E5%AE%B6%E5%B1%9E%E7%A7%B0%E4%B8%8D%E7%9F%A5%E6%83%85%23) `1.2M 🔥` `+134%`
1. [中国连续17年保持全球第二大进口市场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%BF%9E%E7%BB%AD17%E5%B9%B4%E4%BF%9D%E6%8C%81%E5%85%A8%E7%90%83%E7%AC%AC%E4%BA%8C%E5%A4%A7%E8%BF%9B%E5%8F%A3%E5%B8%82%E5%9C%BA%23) `892.6K 🔥` `+28%`
1. [女子用3年垃圾桶才发现用错了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A83%E5%B9%B4%E5%9E%83%E5%9C%BE%E6%A1%B6%E6%89%8D%E5%8F%91%E7%8E%B0%E7%94%A8%E9%94%99%E4%BA%86%23) `753.9K 🔥` `+141%`
1. [德芙文案 翻车](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E8%8A%99%E6%96%87%E6%A1%88%20%E7%BF%BB%E8%BD%A6%23) `1.1M 🔥`
1. [癌症疫苗来了](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%E6%9D%A5%E4%BA%86%23) `532.0K 🔥`
1. [金鹰奖提名名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `372.2K 🔥`
1. [乳房触诊20多次后发现结节摸不到](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A20%E5%A4%9A%E6%AC%A1%E5%90%8E%E5%8F%91%E7%8E%B0%E7%BB%93%E8%8A%82%E6%91%B8%E4%B8%8D%E5%88%B0%23) `356.4K 🔥`
1. [张凌赫母校不请张凌赫因为安保不行](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%AF%8D%E6%A0%A1%E4%B8%8D%E8%AF%B7%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%A0%E4%B8%BA%E5%AE%89%E4%BF%9D%E4%B8%8D%E8%A1%8C%23) `347.0K 🔥`
1. [监控拍下男子割喉杀害前女友过程](https://s.weibo.com/weibo?q=%23%E7%9B%91%E6%8E%A7%E6%8B%8D%E4%B8%8B%E7%94%B7%E5%AD%90%E5%89%B2%E5%96%89%E6%9D%80%E5%AE%B3%E5%89%8D%E5%A5%B3%E5%8F%8B%E8%BF%87%E7%A8%8B%23) `336.0K 🔥`
1. [曾舜晞跟孟子义吵架会哭](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E8%B7%9F%E5%AD%9F%E5%AD%90%E4%B9%89%E5%90%B5%E6%9E%B6%E4%BC%9A%E5%93%AD%23) `328.1K 🔥`
1. [大众汽车拟裁员5万人 史上最大重组](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97%E6%B1%BD%E8%BD%A6%E6%8B%9F%E8%A3%81%E5%91%985%E4%B8%87%E4%BA%BA%20%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7%E9%87%8D%E7%BB%84%23) `322.3K 🔥`
1. [自动驾驶状态违法由车企担责](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B6%E7%8A%B6%E6%80%81%E8%BF%9D%E6%B3%95%E7%94%B1%E8%BD%A6%E4%BC%81%E6%8B%85%E8%B4%A3%23) `321.7K 🔥`
1. [氧化菊删除权志龙签名酒视频](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%E5%88%A0%E9%99%A4%E6%9D%83%E5%BF%97%E9%BE%99%E7%AD%BE%E5%90%8D%E9%85%92%E8%A7%86%E9%A2%91%23) `320.9K 🔥`
1. [第一批拒绝上岸的人出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%8B%92%E7%BB%9D%E4%B8%8A%E5%B2%B8%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `320.0K 🔥`
1. [孙浩评论了刘浩存](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%B5%A9%E8%AF%84%E8%AE%BA%E4%BA%86%E5%88%98%E6%B5%A9%E5%AD%98%23) `319.9K 🔥`
1. [成都蛋烘糕奶奶被镜头霸凌](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E8%9B%8B%E7%83%98%E7%B3%95%E5%A5%B6%E5%A5%B6%E8%A2%AB%E9%95%9C%E5%A4%B4%E9%9C%B8%E5%87%8C%23) `318.5K 🔥`
1. [刘亦菲回复祝福](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%9B%9E%E5%A4%8D%E7%A5%9D%E7%A6%8F%23) `316.7K 🔥`
1. [济公4制片人说对网红不感冒](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%85%AC4%E5%88%B6%E7%89%87%E4%BA%BA%E8%AF%B4%E5%AF%B9%E7%BD%91%E7%BA%A2%E4%B8%8D%E6%84%9F%E5%86%92%23) `315.8K 🔥`
1. [85岁爷爷把8岁自闭孙子当正常娃带](https://s.weibo.com/weibo?q=%2385%E5%B2%81%E7%88%B7%E7%88%B7%E6%8A%8A8%E5%B2%81%E8%87%AA%E9%97%AD%E5%AD%99%E5%AD%90%E5%BD%93%E6%AD%A3%E5%B8%B8%E5%A8%83%E5%B8%A6%23) `312.9K 🔥`
1. [科比生前最后一张公开照片](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%AF%94%E7%94%9F%E5%89%8D%E6%9C%80%E5%90%8E%E4%B8%80%E5%BC%A0%E5%85%AC%E5%BC%80%E7%85%A7%E7%89%87%23) `298.3K 🔥`
1. [于正说周柯宇母语不是中文](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E8%AF%B4%E5%91%A8%E6%9F%AF%E5%AE%87%E6%AF%8D%E8%AF%AD%E4%B8%8D%E6%98%AF%E4%B8%AD%E6%96%87%23) `279.9K 🔥`
1. [惠英红吃纸这段看得人头皮发麻](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E5%90%83%E7%BA%B8%E8%BF%99%E6%AE%B5%E7%9C%8B%E5%BE%97%E4%BA%BA%E5%A4%B4%E7%9A%AE%E5%8F%91%E9%BA%BB%23) `268.1K 🔥`
1. [徐克感谢向太为他澄清没有孩子](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%85%8B%E6%84%9F%E8%B0%A2%E5%90%91%E5%A4%AA%E4%B8%BA%E4%BB%96%E6%BE%84%E6%B8%85%E6%B2%A1%E6%9C%89%E5%AD%A9%E5%AD%90%23) `254.6K 🔥`
1. [钟丽缇报复张伦硕直播助眠](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E6%8A%A5%E5%A4%8D%E5%BC%A0%E4%BC%A6%E7%A1%95%E7%9B%B4%E6%92%AD%E5%8A%A9%E7%9C%A0%23) `241.5K 🔥`
1. [林子濠是林依轮儿子](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E6%BF%A0%E6%98%AF%E6%9E%97%E4%BE%9D%E8%BD%AE%E5%84%BF%E5%AD%90%23) `227.1K 🔥`
1. [余秀华希望一百年后人类灭亡](https://s.weibo.com/weibo?q=%23%E4%BD%99%E7%A7%80%E5%8D%8E%E5%B8%8C%E6%9C%9B%E4%B8%80%E7%99%BE%E5%B9%B4%E5%90%8E%E4%BA%BA%E7%B1%BB%E7%81%AD%E4%BA%A1%23) `469.6K 🔥` `-46%`
1. [双世宠妃男女主现状](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%B8%96%E5%AE%A0%E5%A6%83%E7%94%B7%E5%A5%B3%E4%B8%BB%E7%8E%B0%E7%8A%B6%23) `323.0K 🔥` `-31%`
1. [王楚钦100周世排第一](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6100%E5%91%A8%E4%B8%96%E6%8E%92%E7%AC%AC%E4%B8%80%23) `312.4K 🔥` `-27%`
1. [成都蛋烘糕奶奶儿子已因病去世](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E8%9B%8B%E7%83%98%E7%B3%95%E5%A5%B6%E5%A5%B6%E5%84%BF%E5%AD%90%E5%B7%B2%E5%9B%A0%E7%97%85%E5%8E%BB%E4%B8%96%23) `235.7K 🔥` `-23%`
1. [樊振东一饭封神2](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%80%E9%A5%AD%E5%B0%81%E7%A5%9E2%23) `232.2K 🔥` `-27%`
1. [官方确认帮扶老人遭索赔店主不担责](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E7%A1%AE%E8%AE%A4%E5%B8%AE%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E5%BA%97%E4%B8%BB%E4%B8%8D%E6%8B%85%E8%B4%A3%23) `217.5K 🔥` `-36%`
1. [卓沅初舞台被叫停](https://s.weibo.com/weibo?q=%23%E5%8D%93%E6%B2%85%E5%88%9D%E8%88%9E%E5%8F%B0%E8%A2%AB%E5%8F%AB%E5%81%9C%23) `214.7K 🔥` `-32%`
1. [鞠婧祎腿好长](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%85%BF%E5%A5%BD%E9%95%BF%23) `186.8K 🔥` `-35%`
1. [林依轮回应林子濠恋情](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E8%BD%AE%E5%9B%9E%E5%BA%94%E6%9E%97%E5%AD%90%E6%BF%A0%E6%81%8B%E6%83%85%23) `186.4K 🔥` `-41%`
1. [店家支付的1.9万元或获补贴返还 (The 19,000 yuan paid by the store may be refunded with subsidies)](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%AE%B6%E6%94%AF%E4%BB%98%E7%9A%841.9%E4%B8%87%E5%85%83%E6%88%96%E8%8E%B7%E8%A1%A5%E8%B4%B4%E8%BF%94%E8%BF%98%23) `185.4K 🔥` `-43%`
1. [印度高管赴华签证过审率骤降](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%AB%98%E7%AE%A1%E8%B5%B4%E5%8D%8E%E7%AD%BE%E8%AF%81%E8%BF%87%E5%AE%A1%E7%8E%87%E9%AA%A4%E9%99%8D%23) `185.3K 🔥` `-45%`

Updated at 2026-08-25 16:10:29

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
