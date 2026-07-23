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

1. [这份山洪避险口诀请收好 (Please keep this flash flood avoidance tips)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BB%BD%E5%B1%B1%E6%B4%AA%E9%81%BF%E9%99%A9%E5%8F%A3%E8%AF%80%E8%AF%B7%E6%94%B6%E5%A5%BD%23) `1.3M 🔥` `NEW`
1. [成毅路过短剧](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E8%B7%AF%E8%BF%87%E7%9F%AD%E5%89%A7%23) `610.4K 🔥` `NEW`
1. [华晨宇首位全球前10中国内地歌手](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E9%A6%96%E4%BD%8D%E5%85%A8%E7%90%83%E5%89%8D10%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E6%AD%8C%E6%89%8B%23) `414.9K 🔥` `NEW`
1. [中国足球的下一场已经开场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%B3%E7%90%83%E7%9A%84%E4%B8%8B%E4%B8%80%E5%9C%BA%E5%B7%B2%E7%BB%8F%E5%BC%80%E5%9C%BA%23) `307.8K 🔥` `NEW`
1. [中国女排vs美国女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E7%BE%8E%E5%9B%BD%E5%A5%B3%E6%8E%92%23) `303.3K 🔥` `NEW`
1. [长鑫科技上市时间定了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%B8%8A%E5%B8%82%E6%97%B6%E9%97%B4%E5%AE%9A%E4%BA%86%23) `285.6K 🔥` `NEW`
1. [高分考生误报厦大马来分校不是第一次](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%88%86%E8%80%83%E7%94%9F%E8%AF%AF%E6%8A%A5%E5%8E%A6%E5%A4%A7%E9%A9%AC%E6%9D%A5%E5%88%86%E6%A0%A1%E4%B8%8D%E6%98%AF%E7%AC%AC%E4%B8%80%E6%AC%A1%23) `285.6K 🔥` `NEW`
1. [刘耀文推荐穆祉丞](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%8E%A8%E8%8D%90%E7%A9%86%E7%A5%89%E4%B8%9E%23) `284.9K 🔥` `NEW`
1. [向太力挺王菲谢霆锋](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E5%8A%9B%E6%8C%BA%E7%8E%8B%E8%8F%B2%E8%B0%A2%E9%9C%86%E9%94%8B%23) `284.5K 🔥` `NEW`
1. [张凌赫王楚然床戏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%BA%8A%E6%88%8F%23) `283.3K 🔥` `NEW`
1. [AL战胜JDG (AL defeated JDG)](https://s.weibo.com/weibo?q=%23AL%E6%88%98%E8%83%9CJDG%23) `283.2K 🔥` `NEW`
1. [英皇严正声明](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E7%9A%87%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `282.5K 🔥` `NEW`
1. [孙亚龙曝Bin自降薪水](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BA%9A%E9%BE%99%E6%9B%9DBin%E8%87%AA%E9%99%8D%E8%96%AA%E6%B0%B4%23) `281.9K 🔥` `NEW`
1. [邓佳鑫直播](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BD%B3%E9%91%AB%E7%9B%B4%E6%92%AD%23) `281.4K 🔥` `NEW`
1. [金冬天的抓力](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%86%AC%E5%A4%A9%E7%9A%84%E6%8A%93%E5%8A%9B%23) `281.1K 🔥` `NEW`
1. [父亲谢贤去世后谢霆锋首次露面](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E8%B0%A2%E8%B4%A4%E5%8E%BB%E4%B8%96%E5%90%8E%E8%B0%A2%E9%9C%86%E9%94%8B%E9%A6%96%E6%AC%A1%E9%9C%B2%E9%9D%A2%23) `278.7K 🔥` `NEW`
1. [付辛博演技](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%BE%9B%E5%8D%9A%E6%BC%94%E6%8A%80%23) `276.3K 🔥` `NEW`
1. [杨幂晒大暑养生食补](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%99%92%E5%A4%A7%E6%9A%91%E5%85%BB%E7%94%9F%E9%A3%9F%E8%A1%A5%23) `275.4K 🔥` `NEW`
1. [七旬母亲被判替女还债百万案二审开庭](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%97%AC%E6%AF%8D%E4%BA%B2%E8%A2%AB%E5%88%A4%E6%9B%BF%E5%A5%B3%E8%BF%98%E5%80%BA%E7%99%BE%E4%B8%87%E6%A1%88%E4%BA%8C%E5%AE%A1%E5%BC%80%E5%BA%AD%23) `274.3K 🔥` `NEW`
1. [韩国向中国赠还清代石狮文物](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%90%91%E4%B8%AD%E5%9B%BD%E8%B5%A0%E8%BF%98%E6%B8%85%E4%BB%A3%E7%9F%B3%E7%8B%AE%E6%96%87%E7%89%A9%23) `271.4K 🔥` `NEW`
1. [AL 圣枪哥 (AL Holy Gun Brother)](https://s.weibo.com/weibo?q=%23AL%20%E5%9C%A3%E6%9E%AA%E5%93%A5%23) `177.8K 🔥` `NEW`
1. [大学生称在DIOR兼职遭职场霸凌](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%A7%B0%E5%9C%A8DIOR%E5%85%BC%E8%81%8C%E9%81%AD%E8%81%8C%E5%9C%BA%E9%9C%B8%E5%87%8C%23) `174.7K 🔥` `NEW`
1. [旅客疑因火车下铺床下放行李引争执](https://s.weibo.com/weibo?q=%23%E6%97%85%E5%AE%A2%E7%96%91%E5%9B%A0%E7%81%AB%E8%BD%A6%E4%B8%8B%E9%93%BA%E5%BA%8A%E4%B8%8B%E6%94%BE%E8%A1%8C%E6%9D%8E%E5%BC%95%E4%BA%89%E6%89%A7%23) `173.1K 🔥` `NEW`
1. [亚运会国足进死亡小组](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%9B%BD%E8%B6%B3%E8%BF%9B%E6%AD%BB%E4%BA%A1%E5%B0%8F%E7%BB%84%23) `173.0K 🔥` `NEW`
1. [8人吃烧烤被收22套餐具费](https://s.weibo.com/weibo?q=%238%E4%BA%BA%E5%90%83%E7%83%A7%E7%83%A4%E8%A2%AB%E6%94%B622%E5%A5%97%E9%A4%90%E5%85%B7%E8%B4%B9%23) `140.6K 🔥` `NEW`
1. [成毅莲花楼还有物料](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E8%8E%B2%E8%8A%B1%E6%A5%BC%E8%BF%98%E6%9C%89%E7%89%A9%E6%96%99%23) `127.2K 🔥` `NEW`
1. [别让贫困生喝咖啡争议撕裂舆论](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E8%B4%AB%E5%9B%B0%E7%94%9F%E5%96%9D%E5%92%96%E5%95%A1%E4%BA%89%E8%AE%AE%E6%92%95%E8%A3%82%E8%88%86%E8%AE%BA%23) `1.6M 🔥` `+515%`
1. [老一辈女演员吻戏没轻没重的](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E5%A5%B3%E6%BC%94%E5%91%98%E5%90%BB%E6%88%8F%E6%B2%A1%E8%BD%BB%E6%B2%A1%E9%87%8D%E7%9A%84%23) `273.6K 🔥` `+64%`
1. [女子搬运150斤黄鸡蛋瞬间全碎](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%90%AC%E8%BF%90150%E6%96%A4%E9%BB%84%E9%B8%A1%E8%9B%8B%E7%9E%AC%E9%97%B4%E5%85%A8%E7%A2%8E%23) `253.9K 🔥` `+36%`
1. [男子捡到旧彩票守号中5400万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8D%A1%E5%88%B0%E6%97%A7%E5%BD%A9%E7%A5%A8%E5%AE%88%E5%8F%B7%E4%B8%AD5400%E4%B8%87%23) `285.2K 🔥`
1. [我前额叶受损的原因找到了 (The cause of my prefrontal lobe damage was found)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%89%8D%E9%A2%9D%E5%8F%B6%E5%8F%97%E6%8D%9F%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `284.0K 🔥`
1. [谁敢认这是娜扎](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E8%AE%A4%E8%BF%99%E6%98%AF%E5%A8%9C%E6%89%8E%23) `283.8K 🔥`
1. [时团我们的少年时代2片尾曲](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%9B%A2%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E7%89%87%E5%B0%BE%E6%9B%B2%23) `282.3K 🔥`
1. [DeepSeek华为合作](https://s.weibo.com/weibo?q=%23DeepSeek%E5%8D%8E%E4%B8%BA%E5%90%88%E4%BD%9C%23) `281.8K 🔥`
1. [荣耀更换logo (Honor changes logo)](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E6%9B%B4%E6%8D%A2logo%23) `275.6K 🔥`
1. [白鹿碎花泳衣](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%A2%8E%E8%8A%B1%E6%B3%B3%E8%A1%A3%23) `270.6K 🔥`
1. [荷兰弟上海买森马](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E4%B8%8A%E6%B5%B7%E4%B9%B0%E6%A3%AE%E9%A9%AC%23) `269.9K 🔥`
1. [前经纪人怒斥王菲破坏锋芝婚姻谣言](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%80%92%E6%96%A5%E7%8E%8B%E8%8F%B2%E7%A0%B4%E5%9D%8F%E9%94%8B%E8%8A%9D%E5%A9%9A%E5%A7%BB%E8%B0%A3%E8%A8%80%23) `250.6K 🔥`
1. [时代峰峻学历排行榜 (Times Fengjun Education Ranking)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%AD%A6%E5%8E%86%E6%8E%92%E8%A1%8C%E6%A6%9C%23) `238.4K 🔥`
1. [外星人到底有没有认真找地球](https://s.weibo.com/weibo?q=%23%E5%A4%96%E6%98%9F%E4%BA%BA%E5%88%B0%E5%BA%95%E6%9C%89%E6%B2%A1%E6%9C%89%E8%AE%A4%E7%9C%9F%E6%89%BE%E5%9C%B0%E7%90%83%23) `224.1K 🔥`
1. [十个勤天团巡伴手礼](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E5%9B%A2%E5%B7%A1%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `212.5K 🔥`
1. [叶舒华又瘦了](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E8%88%92%E5%8D%8E%E5%8F%88%E7%98%A6%E4%BA%86%23) `207.1K 🔥`
1. [FIFA发布世界杯海报罗德里C位 (FIFA releases World Cup poster Rodri C position)](https://s.weibo.com/weibo?q=%23FIFA%E5%8F%91%E5%B8%83%E4%B8%96%E7%95%8C%E6%9D%AF%E6%B5%B7%E6%8A%A5%E7%BD%97%E5%BE%B7%E9%87%8CC%E4%BD%8D%23) `159.0K 🔥`
1. [厦大回应644分考生误报分校 (Xiamen University responds: 644 candidates misreported their branch campus)](https://s.weibo.com/weibo?q=%23%E5%8E%A6%E5%A4%A7%E5%9B%9E%E5%BA%94644%E5%88%86%E8%80%83%E7%94%9F%E8%AF%AF%E6%8A%A5%E5%88%86%E6%A0%A1%23) `2.3M 🔥` `-37%`
1. [滔搏卖爆了](https://s.weibo.com/weibo?q=%23%E6%BB%94%E6%90%8F%E5%8D%96%E7%88%86%E4%BA%86%23) `1.1M 🔥` `-27%`
1. [男子对女同事开黄腔被打遭开除称不公](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%AF%B9%E5%A5%B3%E5%90%8C%E4%BA%8B%E5%BC%80%E9%BB%84%E8%85%94%E8%A2%AB%E6%89%93%E9%81%AD%E5%BC%80%E9%99%A4%E7%A7%B0%E4%B8%8D%E5%85%AC%23) `279.4K 🔥` `-62%`
1. [虞书欣 丝巾当上衣穿 (Yu Shuxin wears silk scarf as top)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E4%B8%9D%E5%B7%BE%E5%BD%93%E4%B8%8A%E8%A1%A3%E7%A9%BF%23) `173.1K 🔥` `-32%`
1. [孙亚龙力挺Bin](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BA%9A%E9%BE%99%E5%8A%9B%E6%8C%BABin%23) `154.8K 🔥` `-76%`
1. [功夫女足票房超17亿 (Kung Fu Girls’ soccer box office exceeds 1.7 billion)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E8%B6%8517%E4%BA%BF%23) `133.1K 🔥` `-49%`
1. [耳石症自救方法](https://s.weibo.com/weibo?q=%23%E8%80%B3%E7%9F%B3%E7%97%87%E8%87%AA%E6%95%91%E6%96%B9%E6%B3%95%23) `127.3K 🔥` `-46%`
1. [A股缩量4580亿](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%BC%A9%E9%87%8F4580%E4%BA%BF%23) `127.0K 🔥` `-47%`

Updated at 2026-07-23 20:52:16

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
