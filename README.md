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

1. [厦大回应644分考生误报分校 (Xiamen University responds: 644 candidates misreported their branch campus)](https://s.weibo.com/weibo?q=%23%E5%8E%A6%E5%A4%A7%E5%9B%9E%E5%BA%94644%E5%88%86%E8%80%83%E7%94%9F%E8%AF%AF%E6%8A%A5%E5%88%86%E6%A0%A1%23) `3.6M 🔥` `NEW`
1. [滔搏卖爆了](https://s.weibo.com/weibo?q=%23%E6%BB%94%E6%90%8F%E5%8D%96%E7%88%86%E4%BA%86%23) `1.5M 🔥` `NEW`
1. [以旧换新带动消费提质升级](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E5%B8%A6%E5%8A%A8%E6%B6%88%E8%B4%B9%E6%8F%90%E8%B4%A8%E5%8D%87%E7%BA%A7%23) `903.2K 🔥` `NEW`
1. [留给黑马逆袭的时间不多了](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%BB%99%E9%BB%91%E9%A9%AC%E9%80%86%E8%A2%AD%E7%9A%84%E6%97%B6%E9%97%B4%E4%B8%8D%E5%A4%9A%E4%BA%86%23) `788.4K 🔥` `NEW`
1. [孙亚龙力挺Bin](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BA%9A%E9%BE%99%E5%8A%9B%E6%8C%BABin%23) `658.4K 🔥` `NEW`
1. [除了死工资外还能做什么副业](https://s.weibo.com/weibo?q=%23%E9%99%A4%E4%BA%86%E6%AD%BB%E5%B7%A5%E8%B5%84%E5%A4%96%E8%BF%98%E8%83%BD%E5%81%9A%E4%BB%80%E4%B9%88%E5%89%AF%E4%B8%9A%23) `644.0K 🔥` `NEW`
1. [云南白药官宣周深双身份](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E7%99%BD%E8%8D%AF%E5%AE%98%E5%AE%A3%E5%91%A8%E6%B7%B1%E5%8F%8C%E8%BA%AB%E4%BB%BD%23) `601.5K 🔥` `NEW`
1. [厦大回应644分考生误填马来分校](https://s.weibo.com/weibo?q=%23%E5%8E%A6%E5%A4%A7%E5%9B%9E%E5%BA%94644%E5%88%86%E8%80%83%E7%94%9F%E8%AF%AF%E5%A1%AB%E9%A9%AC%E6%9D%A5%E5%88%86%E6%A0%A1%23) `560.6K 🔥` `NEW`
1. [健身邪修](https://s.weibo.com/weibo?q=%23%E5%81%A5%E8%BA%AB%E9%82%AA%E4%BF%AE%23) `391.1K 🔥` `NEW`
1. [电影八仙](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%23) `308.3K 🔥` `NEW`
1. [功夫女足票房超17亿 (Kung Fu Girls’ soccer box office exceeds 1.7 billion)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E8%B6%8517%E4%BA%BF%23) `262.1K 🔥` `NEW`
1. [别让贫困生喝咖啡争议撕裂舆论](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E8%B4%AB%E5%9B%B0%E7%94%9F%E5%96%9D%E5%92%96%E5%95%A1%E4%BA%89%E8%AE%AE%E6%92%95%E8%A3%82%E8%88%86%E8%AE%BA%23) `261.0K 🔥` `NEW`
1. [我前额叶受损的原因找到了](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%89%8D%E9%A2%9D%E5%8F%B6%E5%8F%97%E6%8D%9F%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `255.9K 🔥` `NEW`
1. [时团我们的少年时代2片尾曲](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%9B%A2%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E7%89%87%E5%B0%BE%E6%9B%B2%23) `251.6K 🔥` `NEW`
1. [DeepSeek华为合作](https://s.weibo.com/weibo?q=%23DeepSeek%E5%8D%8E%E4%B8%BA%E5%90%88%E4%BD%9C%23) `250.4K 🔥` `NEW`
1. [地温高达84度火焰山景区喊话游客](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E6%B8%A9%E9%AB%98%E8%BE%BE84%E5%BA%A6%E7%81%AB%E7%84%B0%E5%B1%B1%E6%99%AF%E5%8C%BA%E5%96%8A%E8%AF%9D%E6%B8%B8%E5%AE%A2%23) `249.4K 🔥` `NEW`
1. [荷兰弟上海买森马](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E4%B8%8A%E6%B5%B7%E4%B9%B0%E6%A3%AE%E9%A9%AC%23) `249.1K 🔥` `NEW`
1. [十个勤天团巡伴手礼](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E5%9B%A2%E5%B7%A1%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `247.5K 🔥` `NEW`
1. [男子捡到旧彩票守号中5400万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8D%A1%E5%88%B0%E6%97%A7%E5%BD%A9%E7%A5%A8%E5%AE%88%E5%8F%B7%E4%B8%AD5400%E4%B8%87%23) `246.5K 🔥` `NEW`
1. [叶舒华又瘦了](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E8%88%92%E5%8D%8E%E5%8F%88%E7%98%A6%E4%BA%86%23) `245.4K 🔥` `NEW`
1. [王俊凯演唱会战报 (Wang Junkai concert report)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E6%88%98%E6%8A%A5%23) `244.1K 🔥` `NEW`
1. [A股缩量4580亿](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%BC%A9%E9%87%8F4580%E4%BA%BF%23) `241.7K 🔥` `NEW`
1. [贺峻霖发长文告别桃花坞](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%8F%91%E9%95%BF%E6%96%87%E5%91%8A%E5%88%AB%E6%A1%83%E8%8A%B1%E5%9D%9E%23) `239.1K 🔥` `NEW`
1. [马伊琍 我让你顺你才顺](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%8A%E7%90%8D%20%E6%88%91%E8%AE%A9%E4%BD%A0%E9%A1%BA%E4%BD%A0%E6%89%8D%E9%A1%BA%23) `221.0K 🔥` `NEW`
1. [车主直行被强行变道的女骑士敲窗警告](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%B8%BB%E7%9B%B4%E8%A1%8C%E8%A2%AB%E5%BC%BA%E8%A1%8C%E5%8F%98%E9%81%93%E7%9A%84%E5%A5%B3%E9%AA%91%E5%A3%AB%E6%95%B2%E7%AA%97%E8%AD%A6%E5%91%8A%23) `191.5K 🔥` `NEW`
1. [女子搬运150斤黄鸡蛋瞬间全碎](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%90%AC%E8%BF%90150%E6%96%A4%E9%BB%84%E9%B8%A1%E8%9B%8B%E7%9E%AC%E9%97%B4%E5%85%A8%E7%A2%8E%23) `186.5K 🔥` `NEW`
1. [老一辈女演员吻戏没轻没重的](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E5%A5%B3%E6%BC%94%E5%91%98%E5%90%BB%E6%88%8F%E6%B2%A1%E8%BD%BB%E6%B2%A1%E9%87%8D%E7%9A%84%23) `167.2K 🔥` `NEW`
1. [张凌赫跳舞逗笑陈妍希](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B7%B3%E8%88%9E%E9%80%97%E7%AC%91%E9%99%88%E5%A6%8D%E5%B8%8C%23) `161.2K 🔥` `NEW`
1. [MG总经理发单曲我抄](https://s.weibo.com/weibo?q=%23MG%E6%80%BB%E7%BB%8F%E7%90%86%E5%8F%91%E5%8D%95%E6%9B%B2%E6%88%91%E6%8A%84%23) `155.6K 🔥` `NEW`
1. [把AI训练成自己去相亲](https://s.weibo.com/weibo?q=%23%E6%8A%8AAI%E8%AE%AD%E7%BB%83%E6%88%90%E8%87%AA%E5%B7%B1%E5%8E%BB%E7%9B%B8%E4%BA%B2%23) `155.3K 🔥` `NEW`
1. [朱志鑫左航 Myman (Zhu Zhixin Zuohang Myman)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%B7%A6%E8%88%AA%20Myman%23) `155.2K 🔥` `NEW`
1. [王一博珠海试车](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%8F%A0%E6%B5%B7%E8%AF%95%E8%BD%A6%23) `155.0K 🔥` `NEW`
1. [黄灿灿买小鹏MONAL03也要等3个月](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%B9%B0%E5%B0%8F%E9%B9%8FMONAL03%E4%B9%9F%E8%A6%81%E7%AD%893%E4%B8%AA%E6%9C%88%23) `152.3K 🔥` `NEW`
1. [没想到在西藏创业离不开的是拼多多](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%83%B3%E5%88%B0%E5%9C%A8%E8%A5%BF%E8%97%8F%E5%88%9B%E4%B8%9A%E7%A6%BB%E4%B8%8D%E5%BC%80%E7%9A%84%E6%98%AF%E6%8B%BC%E5%A4%9A%E5%A4%9A%23) `151.1K 🔥` `NEW`
1. [MG总经理RAP回应抄袭](https://s.weibo.com/weibo?q=%23MG%E6%80%BB%E7%BB%8F%E7%90%86RAP%E5%9B%9E%E5%BA%94%E6%8A%84%E8%A2%AD%23) `150.3K 🔥` `NEW`
1. [FIFA发布世界杯海报罗德里C位](https://s.weibo.com/weibo?q=%23FIFA%E5%8F%91%E5%B8%83%E4%B8%96%E7%95%8C%E6%9D%AF%E6%B5%B7%E6%8A%A5%E7%BD%97%E5%BE%B7%E9%87%8CC%E4%BD%8D%23) `150.1K 🔥` `NEW`
1. [中国羽毛球公开赛第一批受益者出现](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BE%BD%E6%AF%9B%E7%90%83%E5%85%AC%E5%BC%80%E8%B5%9B%E7%AC%AC%E4%B8%80%E6%89%B9%E5%8F%97%E7%9B%8A%E8%80%85%E5%87%BA%E7%8E%B0%23) `146.4K 🔥` `NEW`
1. [JDG对战AL](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98AL%23) `141.6K 🔥` `NEW`
1. [男子对女同事开黄腔被打遭开除称不公](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%AF%B9%E5%A5%B3%E5%90%8C%E4%BA%8B%E5%BC%80%E9%BB%84%E8%85%94%E8%A2%AB%E6%89%93%E9%81%AD%E5%BC%80%E9%99%A4%E7%A7%B0%E4%B8%8D%E5%85%AC%23) `729.3K 🔥`
1. [谁敢认这是娜扎](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E8%AE%A4%E8%BF%99%E6%98%AF%E5%A8%9C%E6%89%8E%23) `259.2K 🔥` `-34%`
1. [时代峰峻学历排行榜 (Times Fengjun Education Ranking)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%AD%A6%E5%8E%86%E6%8E%92%E8%A1%8C%E6%A6%9C%23) `257.5K 🔥` `-34%`
1. [前经纪人怒斥王菲破坏锋芝婚姻谣言](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%80%92%E6%96%A5%E7%8E%8B%E8%8F%B2%E7%A0%B4%E5%9D%8F%E9%94%8B%E8%8A%9D%E5%A9%9A%E5%A7%BB%E8%B0%A3%E8%A8%80%23) `254.3K 🔥` `-34%`
1. [虞书欣 丝巾当上衣穿 (Yu Shuxin wears silk scarf as top)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E4%B8%9D%E5%B7%BE%E5%BD%93%E4%B8%8A%E8%A1%A3%E7%A9%BF%23) `253.5K 🔥` `-33%`
1. [荣耀更换logo (Honor changes logo)](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E6%9B%B4%E6%8D%A2logo%23) `252.2K 🔥` `-69%`
1. [外星人到底有没有认真找地球](https://s.weibo.com/weibo?q=%23%E5%A4%96%E6%98%9F%E4%BA%BA%E5%88%B0%E5%BA%95%E6%9C%89%E6%B2%A1%E6%9C%89%E8%AE%A4%E7%9C%9F%E6%89%BE%E5%9C%B0%E7%90%83%23) `247.2K 🔥` `-32%`
1. [白鹿碎花泳衣](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%A2%8E%E8%8A%B1%E6%B3%B3%E8%A1%A3%23) `236.2K 🔥` `-36%`
1. [男子AI伪造烂水果仅退款连累全县](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90AI%E4%BC%AA%E9%80%A0%E7%83%82%E6%B0%B4%E6%9E%9C%E4%BB%85%E9%80%80%E6%AC%BE%E8%BF%9E%E7%B4%AF%E5%85%A8%E5%8E%BF%23) `235.8K 🔥` `-38%`
1. [耳石症自救方法](https://s.weibo.com/weibo?q=%23%E8%80%B3%E7%9F%B3%E7%97%87%E8%87%AA%E6%95%91%E6%96%B9%E6%B3%95%23) `234.1K 🔥` `-37%`
1. [郭碧婷说女儿很漂亮](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E8%AF%B4%E5%A5%B3%E5%84%BF%E5%BE%88%E6%BC%82%E4%BA%AE%23) `220.2K 🔥` `-33%`
1. [演员寇占文被法院悬赏](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%AF%87%E5%8D%A0%E6%96%87%E8%A2%AB%E6%B3%95%E9%99%A2%E6%82%AC%E8%B5%8F%23) `191.4K 🔥` `-48%`
1. [王楚钦1比2徐海东](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A61%E6%AF%942%E5%BE%90%E6%B5%B7%E4%B8%9C%23) `187.5K 🔥` `-48%`
1. [滔搏暴力打折甩卖耐克库存 (Taobao violently discounts and sells Nike inventory)](https://s.weibo.com/weibo?q=%23%E6%BB%94%E6%90%8F%E6%9A%B4%E5%8A%9B%E6%89%93%E6%8A%98%E7%94%A9%E5%8D%96%E8%80%90%E5%85%8B%E5%BA%93%E5%AD%98%23) `170.3K 🔥` `-85%`

Updated at 2026-07-23 19:18:14

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
