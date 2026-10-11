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

1. [被字节开除实习生创业获2亿美元估值](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AD%97%E8%8A%82%E5%BC%80%E9%99%A4%E5%AE%9E%E4%B9%A0%E7%94%9F%E5%88%9B%E4%B8%9A%E8%8E%B72%E4%BA%BF%E7%BE%8E%E5%85%83%E4%BC%B0%E5%80%BC%23) `891.0K 🔥` `NEW`
1. [每一个名字都是山河丰碑](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%B8%80%E4%B8%AA%E5%90%8D%E5%AD%97%E9%83%BD%E6%98%AF%E5%B1%B1%E6%B2%B3%E4%B8%B0%E7%A2%91%23) `697.4K 🔥` `NEW`
1. [王楚然现发4口碑反转](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%8E%B0%E5%8F%914%E5%8F%A3%E7%A2%91%E5%8F%8D%E8%BD%AC%23) `510.2K 🔥` `NEW`
1. [周启豪vs松岛辉空](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%90%AF%E8%B1%AAvs%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `428.3K 🔥` `NEW`
1. [西门龙霆](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E9%97%A8%E9%BE%99%E9%9C%86%23) `412.6K 🔥` `NEW`
1. [泰国警方称胡星宋华婷或被转移至缅甸](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E8%AD%A6%E6%96%B9%E7%A7%B0%E8%83%A1%E6%98%9F%E5%AE%8B%E5%8D%8E%E5%A9%B7%E6%88%96%E8%A2%AB%E8%BD%AC%E7%A7%BB%E8%87%B3%E7%BC%85%E7%94%B8%23) `357.2K 🔥` `NEW`
1. [在曼谷失联摄影师已回国](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%9B%BC%E8%B0%B7%E5%A4%B1%E8%81%94%E6%91%84%E5%BD%B1%E5%B8%88%E5%B7%B2%E5%9B%9E%E5%9B%BD%23) `322.4K 🔥` `NEW`
1. [林昀儒4比3雨果](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%98%80%E5%84%924%E6%AF%943%E9%9B%A8%E6%9E%9C%23) `289.8K 🔥` `NEW`
1. [汽车刹车踏板绝不应该在驾驶中断裂](https://s.weibo.com/weibo?q=%23%E6%B1%BD%E8%BD%A6%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E7%BB%9D%E4%B8%8D%E5%BA%94%E8%AF%A5%E5%9C%A8%E9%A9%BE%E9%A9%B6%E4%B8%AD%E6%96%AD%E8%A3%82%23) `280.0K 🔥` `NEW`
1. [社保](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%23) `279.6K 🔥` `NEW`
1. [胡歌称拍仙剑三很无聊](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E7%A7%B0%E6%8B%8D%E4%BB%99%E5%89%91%E4%B8%89%E5%BE%88%E6%97%A0%E8%81%8A%23) `279.2K 🔥` `NEW`
1. [闫妮自曝离婚后还会去前夫家里打掼蛋](https://s.weibo.com/weibo?q=%23%E9%97%AB%E5%A6%AE%E8%87%AA%E6%9B%9D%E7%A6%BB%E5%A9%9A%E5%90%8E%E8%BF%98%E4%BC%9A%E5%8E%BB%E5%89%8D%E5%A4%AB%E5%AE%B6%E9%87%8C%E6%89%93%E6%8E%BC%E8%9B%8B%23) `278.3K 🔥` `NEW`
1. [代露娃被导演说没有教养](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E8%A2%AB%E5%AF%BC%E6%BC%94%E8%AF%B4%E6%B2%A1%E6%9C%89%E6%95%99%E5%85%BB%23) `277.8K 🔥` `NEW`
1. [人民日报评刹车踏板风波](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%88%B9%E8%BD%A6%E8%B8%8F%E6%9D%BF%E9%A3%8E%E6%B3%A2%23) `277.1K 🔥` `NEW`
1. [金子涵称脸上被打了100多针](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E7%A7%B0%E8%84%B8%E4%B8%8A%E8%A2%AB%E6%89%93%E4%BA%86100%E5%A4%9A%E9%92%88%23) `276.9K 🔥` `NEW`
1. [电诈园区打人视频曝光](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E6%89%93%E4%BA%BA%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `276.3K 🔥` `NEW`
1. [难怪田曦薇有故人之姿](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E7%94%B0%E6%9B%A6%E8%96%87%E6%9C%89%E6%95%85%E4%BA%BA%E4%B9%8B%E5%A7%BF%23) `275.4K 🔥` `NEW`
1. [白鹿新剧被张亮扇巴掌](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E5%89%A7%E8%A2%AB%E5%BC%A0%E4%BA%AE%E6%89%87%E5%B7%B4%E6%8E%8C%23) `234.7K 🔥` `NEW`
1. [梅艳芳家人称拿不出赎金](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%89%B3%E8%8A%B3%E5%AE%B6%E4%BA%BA%E7%A7%B0%E6%8B%BF%E4%B8%8D%E5%87%BA%E8%B5%8E%E9%87%91%23) `233.7K 🔥` `NEW`
1. [遭咬死男子戴耳机跳舞求和老虎合影](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%92%AC%E6%AD%BB%E7%94%B7%E5%AD%90%E6%88%B4%E8%80%B3%E6%9C%BA%E8%B7%B3%E8%88%9E%E6%B1%82%E5%92%8C%E8%80%81%E8%99%8E%E5%90%88%E5%BD%B1%23) `233.2K 🔥` `NEW`
1. [迪丽热巴拍摄导演助理巴巴](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8B%8D%E6%91%84%E5%AF%BC%E6%BC%94%E5%8A%A9%E7%90%86%E5%B7%B4%E5%B7%B4%23) `232.3K 🔥` `NEW`
1. [46岁数学家凭AI炒股登上富豪榜](https://s.weibo.com/weibo?q=%2346%E5%B2%81%E6%95%B0%E5%AD%A6%E5%AE%B6%E5%87%ADAI%E7%82%92%E8%82%A1%E7%99%BB%E4%B8%8A%E5%AF%8C%E8%B1%AA%E6%A6%9C%23) `232.0K 🔥` `NEW`
1. [山西佛光寺出头之日冰箱贴火了](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%BD%9B%E5%85%89%E5%AF%BA%E5%87%BA%E5%A4%B4%E4%B9%8B%E6%97%A5%E5%86%B0%E7%AE%B1%E8%B4%B4%E7%81%AB%E4%BA%86%23) `223.9K 🔥` `NEW`
1. [施永青建议推会漏的避孕套](https://s.weibo.com/weibo?q=%23%E6%96%BD%E6%B0%B8%E9%9D%92%E5%BB%BA%E8%AE%AE%E6%8E%A8%E4%BC%9A%E6%BC%8F%E7%9A%84%E9%81%BF%E5%AD%95%E5%A5%97%23) `217.9K 🔥` `NEW`
1. [林俊杰七七牵手逛街](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%B8%83%E4%B8%83%E7%89%B5%E6%89%8B%E9%80%9B%E8%A1%97%23) `200.2K 🔥` `NEW`
1. [胖东来盖个楼又狠狠出圈了](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E7%9B%96%E4%B8%AA%E6%A5%BC%E5%8F%88%E7%8B%A0%E7%8B%A0%E5%87%BA%E5%9C%88%E4%BA%86%23) `193.3K 🔥` `NEW`
1. [代露娃离家出走真实情况](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%E7%A6%BB%E5%AE%B6%E5%87%BA%E8%B5%B0%E7%9C%9F%E5%AE%9E%E6%83%85%E5%86%B5%23) `192.7K 🔥` `NEW`
1. [白鹿杀青第一天就想进组](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%80%E9%9D%92%E7%AC%AC%E4%B8%80%E5%A4%A9%E5%B0%B1%E6%83%B3%E8%BF%9B%E7%BB%84%23) `190.8K 🔥` `NEW`
1. [双方父母都觉得自己占了天大的便宜](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E6%96%B9%E7%88%B6%E6%AF%8D%E9%83%BD%E8%A7%89%E5%BE%97%E8%87%AA%E5%B7%B1%E5%8D%A0%E4%BA%86%E5%A4%A9%E5%A4%A7%E7%9A%84%E4%BE%BF%E5%AE%9C%23) `190.5K 🔥` `NEW`
1. [岸本齐史 暗影崛起](https://s.weibo.com/weibo?q=%23%E5%B2%B8%E6%9C%AC%E9%BD%90%E5%8F%B2%20%E6%9A%97%E5%BD%B1%E5%B4%9B%E8%B5%B7%23) `188.9K 🔥` `NEW`
1. [70%肝癌患者早期无明显症状](https://s.weibo.com/weibo?q=%2370%25%E8%82%9D%E7%99%8C%E6%82%A3%E8%80%85%E6%97%A9%E6%9C%9F%E6%97%A0%E6%98%8E%E6%98%BE%E7%97%87%E7%8A%B6%23) `180.0K 🔥` `NEW`
1. [包贝尔包文婧一同出游](https://s.weibo.com/weibo?q=%23%E5%8C%85%E8%B4%9D%E5%B0%94%E5%8C%85%E6%96%87%E5%A9%A7%E4%B8%80%E5%90%8C%E5%87%BA%E6%B8%B8%23) `167.2K 🔥` `NEW`
1. [刘琳琳用了宁艺卓的文案](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%90%B3%E7%90%B3%E7%94%A8%E4%BA%86%E5%AE%81%E8%89%BA%E5%8D%93%E7%9A%84%E6%96%87%E6%A1%88%23) `167.0K 🔥` `NEW`
1. [丁禹兮拒绝拥抱孟子义路透](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%8B%92%E7%BB%9D%E6%8B%A5%E6%8A%B1%E5%AD%9F%E5%AD%90%E4%B9%89%E8%B7%AF%E9%80%8F%23) `155.8K 🔥` `NEW`
1. [中网决赛一票难求](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BD%91%E5%86%B3%E8%B5%9B%E4%B8%80%E7%A5%A8%E9%9A%BE%E6%B1%82%23) `154.9K 🔥` `NEW`
1. [明日方舟国家图书馆联动](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E5%9B%BD%E5%AE%B6%E5%9B%BE%E4%B9%A6%E9%A6%86%E8%81%94%E5%8A%A8%23) `150.1K 🔥` `NEW`
1. [多起中国公民赴泰失联](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%B5%B7%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E8%B5%B4%E6%B3%B0%E5%A4%B1%E8%81%94%23) `147.1K 🔥` `NEW`
1. [服装店被质疑用猫毛做皮草](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E8%A3%85%E5%BA%97%E8%A2%AB%E8%B4%A8%E7%96%91%E7%94%A8%E7%8C%AB%E6%AF%9B%E5%81%9A%E7%9A%AE%E8%8D%89%23) `144.9K 🔥` `NEW`
1. [胡歌车祸后接拍仙剑三](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E8%BD%A6%E7%A5%B8%E5%90%8E%E6%8E%A5%E6%8B%8D%E4%BB%99%E5%89%91%E4%B8%89%23) `144.9K 🔥` `NEW`
1. [潘玮柏自曝瘦了26斤](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%8E%AE%E6%9F%8F%E8%87%AA%E6%9B%9D%E7%98%A6%E4%BA%8626%E6%96%A4%23) `143.5K 🔥` `NEW`
1. [马斯克说泽连斯基太过分了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E8%AF%B4%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E5%A4%AA%E8%BF%87%E5%88%86%E4%BA%86%23) `136.9K 🔥` `NEW`
1. [4种小便异常提示肾出问题](https://s.weibo.com/weibo?q=%234%E7%A7%8D%E5%B0%8F%E4%BE%BF%E5%BC%82%E5%B8%B8%E6%8F%90%E7%A4%BA%E8%82%BE%E5%87%BA%E9%97%AE%E9%A2%98%23) `134.0K 🔥` `NEW`
1. [赵丽颖官宣AI潮玩人气大赛](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%AE%98%E5%AE%A3AI%E6%BD%AE%E7%8E%A9%E4%BA%BA%E6%B0%94%E5%A4%A7%E8%B5%9B%23) `130.7K 🔥` `NEW`
1. [王濛说贝克汉姆是帅一辈子的偶像](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%AF%B4%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E6%98%AF%E5%B8%85%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E5%81%B6%E5%83%8F%23) `129.1K 🔥` `NEW`
1. [喜欢吃肉的人建议反复观看](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E5%90%83%E8%82%89%E7%9A%84%E4%BA%BA%E5%BB%BA%E8%AE%AE%E5%8F%8D%E5%A4%8D%E8%A7%82%E7%9C%8B%23) `128.9K 🔥` `NEW`
1. [大二专科生称靠切片三年赚七百万](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BA%8C%E4%B8%93%E7%A7%91%E7%94%9F%E7%A7%B0%E9%9D%A0%E5%88%87%E7%89%87%E4%B8%89%E5%B9%B4%E8%B5%9A%E4%B8%83%E7%99%BE%E4%B8%87%23) `1.5M 🔥` `+1005%`
1. [谢娜刘烨十多年都没有同台过](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%88%98%E7%83%A8%E5%8D%81%E5%A4%9A%E5%B9%B4%E9%83%BD%E6%B2%A1%E6%9C%89%E5%90%8C%E5%8F%B0%E8%BF%87%23) `275.4K 🔥` `+130%`
1. [虎鲸妈妈带幼崽尸体十七天](https://s.weibo.com/weibo?q=%23%E8%99%8E%E9%B2%B8%E5%A6%88%E5%A6%88%E5%B8%A6%E5%B9%BC%E5%B4%BD%E5%B0%B8%E4%BD%93%E5%8D%81%E4%B8%83%E5%A4%A9%23) `235.2K 🔥` `-49%`
1. [利雅得机场遭袭致12死309伤](https://s.weibo.com/weibo?q=%23%E5%88%A9%E9%9B%85%E5%BE%97%E6%9C%BA%E5%9C%BA%E9%81%AD%E8%A2%AD%E8%87%B412%E6%AD%BB309%E4%BC%A4%23) `163.9K 🔥` `-88%`
1. [尿毒症大多是吃出来的](https://s.weibo.com/weibo?q=%23%E5%B0%BF%E6%AF%92%E7%97%87%E5%A4%A7%E5%A4%9A%E6%98%AF%E5%90%83%E5%87%BA%E6%9D%A5%E7%9A%84%23) `154.9K 🔥` `-47%`

Updated at 2026-10-11 14:18:35

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
