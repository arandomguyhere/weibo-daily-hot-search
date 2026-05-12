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

1. [特朗普访华 (Trump's visit to China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%23) `2.7M 🔥` `NEW`
1. [从4月先行指标看我国经济持续向好](https://s.weibo.com/weibo?q=%23%E4%BB%8E4%E6%9C%88%E5%85%88%E8%A1%8C%E6%8C%87%E6%A0%87%E7%9C%8B%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E6%8C%81%E7%BB%AD%E5%90%91%E5%A5%BD%23) `1.0M 🔥` `NEW`
1. [樊振东加盟杜塞上百家企业竞价赞助](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8A%A0%E7%9B%9F%E6%9D%9C%E5%A1%9E%E4%B8%8A%E7%99%BE%E5%AE%B6%E4%BC%81%E4%B8%9A%E7%AB%9E%E4%BB%B7%E8%B5%9E%E5%8A%A9%23) `693.3K 🔥` `NEW`
1. [一念江南通告单有黄杨钿甜朱志鑫](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E9%80%9A%E5%91%8A%E5%8D%95%E6%9C%89%E9%BB%84%E6%9D%A8%E9%92%BF%E7%94%9C%E6%9C%B1%E5%BF%97%E9%91%AB%23) `691.4K 🔥` `NEW`
1. [宜宾地震](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%23) `635.6K 🔥` `NEW`
1. [给阿嬷的情书](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `610.4K 🔥` `NEW`
1. [李昀锐工作室点赞廖慧佳](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%82%B9%E8%B5%9E%E5%BB%96%E6%85%A7%E4%BD%B3%23) `507.9K 🔥` `NEW`
1. [曝限薪令前顶流1.8亿片酬](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%99%90%E8%96%AA%E4%BB%A4%E5%89%8D%E9%A1%B6%E6%B5%811.8%E4%BA%BF%E7%89%87%E9%85%AC%23) `473.7K 🔥` `NEW`
1. [江苏税务回应偷拍男生拟录公务员](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E7%A8%8E%E5%8A%A1%E5%9B%9E%E5%BA%94%E5%81%B7%E6%8B%8D%E7%94%B7%E7%94%9F%E6%8B%9F%E5%BD%95%E5%85%AC%E5%8A%A1%E5%91%98%23) `461.7K 🔥` `NEW`
1. [汪海林的发言](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B5%B7%E6%9E%97%E7%9A%84%E5%8F%91%E8%A8%80%23) `430.2K 🔥` `NEW`
1. [宋亚轩 重庆 (Song Yaxuan Chongqing)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E9%87%8D%E5%BA%86%23) `414.1K 🔥` `NEW`
1. [清清 一直送](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%B8%85%20%E4%B8%80%E7%9B%B4%E9%80%81%23) `413.0K 🔥` `NEW`
1. [辛芷蕾 赵婷](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%20%E8%B5%B5%E5%A9%B7%23) `325.7K 🔥` `NEW`
1. [2700次恶意仅退款男子获刑](https://s.weibo.com/weibo?q=%232700%E6%AC%A1%E6%81%B6%E6%84%8F%E4%BB%85%E9%80%80%E6%AC%BE%E7%94%B7%E5%AD%90%E8%8E%B7%E5%88%91%23) `297.4K 🔥` `NEW`
1. [曝某升咖艺人想抢李宇春跨年压轴](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E5%8D%87%E5%92%96%E8%89%BA%E4%BA%BA%E6%83%B3%E6%8A%A2%E6%9D%8E%E5%AE%87%E6%98%A5%E8%B7%A8%E5%B9%B4%E5%8E%8B%E8%BD%B4%23) `296.7K 🔥` `NEW`
1. [以防你没见过坚果年轻时的样子](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%98%B2%E4%BD%A0%E6%B2%A1%E8%A7%81%E8%BF%87%E5%9D%9A%E6%9E%9C%E5%B9%B4%E8%BD%BB%E6%97%B6%E7%9A%84%E6%A0%B7%E5%AD%90%23) `294.2K 🔥` `NEW`
1. [55岁大妈和邻居吵架后气死](https://s.weibo.com/weibo?q=%2355%E5%B2%81%E5%A4%A7%E5%A6%88%E5%92%8C%E9%82%BB%E5%B1%85%E5%90%B5%E6%9E%B6%E5%90%8E%E6%B0%94%E6%AD%BB%23) `262.3K 🔥` `NEW`
1. [北京男篮vs广东男篮](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E7%94%B7%E7%AF%AEvs%E5%B9%BF%E4%B8%9C%E7%94%B7%E7%AF%AE%23) `261.6K 🔥` `NEW`
1. [藏海传2断层第一](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A02%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%23) `261.5K 🔥` `NEW`
1. [给阿嬷的情书 商科女发光发热](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E5%95%86%E7%A7%91%E5%A5%B3%E5%8F%91%E5%85%89%E5%8F%91%E7%83%AD%23) `260.1K 🔥` `NEW`
1. [深铁集团再借万科25亿 (Shenzhen Railway Group borrows another 2.5 billion from Vanke)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E9%93%81%E9%9B%86%E5%9B%A2%E5%86%8D%E5%80%9F%E4%B8%87%E7%A7%9125%E4%BA%BF%23) `259.6K 🔥` `NEW`
1. [金智媛宝格丽入场视频](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E5%AA%9B%E5%AE%9D%E6%A0%BC%E4%B8%BD%E5%85%A5%E5%9C%BA%E8%A7%86%E9%A2%91%23) `247.4K 🔥` `NEW`
1. [女子反对生娃再领证被诉返30万彩礼](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8F%8D%E5%AF%B9%E7%94%9F%E5%A8%83%E5%86%8D%E9%A2%86%E8%AF%81%E8%A2%AB%E8%AF%89%E8%BF%9430%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `245.0K 🔥` `NEW`
1. [王俊凯给同学的初中毕业寄语](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%BB%99%E5%90%8C%E5%AD%A6%E7%9A%84%E5%88%9D%E4%B8%AD%E6%AF%95%E4%B8%9A%E5%AF%84%E8%AF%AD%23) `218.5K 🔥` `NEW`
1. [四川泸定地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E6%B3%B8%E5%AE%9A%E5%9C%B0%E9%9C%87%23) `210.7K 🔥` `NEW`
1. [当地回应偷拍裙底男生已拟录公务员](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%9C%B0%E5%9B%9E%E5%BA%94%E5%81%B7%E6%8B%8D%E8%A3%99%E5%BA%95%E7%94%B7%E7%94%9F%E5%B7%B2%E6%8B%9F%E5%BD%95%E5%85%AC%E5%8A%A1%E5%91%98%23) `210.0K 🔥` `NEW`
1. [换新水表后收到5000天价水费单](https://s.weibo.com/weibo?q=%23%E6%8D%A2%E6%96%B0%E6%B0%B4%E8%A1%A8%E5%90%8E%E6%94%B6%E5%88%B05000%E5%A4%A9%E4%BB%B7%E6%B0%B4%E8%B4%B9%E5%8D%95%23) `208.9K 🔥` `NEW`
1. [多地将现较大范围高温天气](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%B0%86%E7%8E%B0%E8%BE%83%E5%A4%A7%E8%8C%83%E5%9B%B4%E9%AB%98%E6%B8%A9%E5%A4%A9%E6%B0%94%23) `206.5K 🔥` `NEW`
1. [大妈超市偷肉类百货藏腰间堪比仓鼠](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A6%88%E8%B6%85%E5%B8%82%E5%81%B7%E8%82%89%E7%B1%BB%E7%99%BE%E8%B4%A7%E8%97%8F%E8%85%B0%E9%97%B4%E5%A0%AA%E6%AF%94%E4%BB%93%E9%BC%A0%23) `205.7K 🔥` `NEW`
1. [95花扎堆开演唱会](https://s.weibo.com/weibo?q=%2395%E8%8A%B1%E6%89%8E%E5%A0%86%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `198.4K 🔥` `NEW`
1. [为啥大学不爱招文科生了 (Why don’t universities recruit liberal arts students anymore?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%95%A5%E5%A4%A7%E5%AD%A6%E4%B8%8D%E7%88%B1%E6%8B%9B%E6%96%87%E7%A7%91%E7%94%9F%E4%BA%86%23) `198.1K 🔥` `NEW`
1. [跑男争议不该先定罪后解读](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E4%BA%89%E8%AE%AE%E4%B8%8D%E8%AF%A5%E5%85%88%E5%AE%9A%E7%BD%AA%E5%90%8E%E8%A7%A3%E8%AF%BB%23) `196.6K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `195.2K 🔥` `NEW`
1. [腾讯收购喜马拉雅股权案获批](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E6%94%B6%E8%B4%AD%E5%96%9C%E9%A9%AC%E6%8B%89%E9%9B%85%E8%82%A1%E6%9D%83%E6%A1%88%E8%8E%B7%E6%89%B9%23) `192.6K 🔥` `NEW`
1. [狗 这水怎么会咬舌头](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E8%BF%99%E6%B0%B4%E6%80%8E%E4%B9%88%E4%BC%9A%E5%92%AC%E8%88%8C%E5%A4%B4%23) `192.0K 🔥` `NEW`
1. [4月汽车销量前10仅1款油车](https://s.weibo.com/weibo?q=%234%E6%9C%88%E6%B1%BD%E8%BD%A6%E9%94%80%E9%87%8F%E5%89%8D10%E4%BB%851%E6%AC%BE%E6%B2%B9%E8%BD%A6%23) `1.4M 🔥` `+164%`
1. [白鹿演唱会过审](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E8%BF%87%E5%AE%A1%23) `942.1K 🔥` `+36%`
1. [下午休是性价比最高的半天假](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%8D%88%E4%BC%91%E6%98%AF%E6%80%A7%E4%BB%B7%E6%AF%94%E6%9C%80%E9%AB%98%E7%9A%84%E5%8D%8A%E5%A4%A9%E5%81%87%23) `868.1K 🔥` `+342%`
1. [汪涵有多爱吃槟榔](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B6%B5%E6%9C%89%E5%A4%9A%E7%88%B1%E5%90%83%E6%A7%9F%E6%A6%94%23) `528.2K 🔥` `+21%`
1. [宋祖儿纯素颜](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E7%BA%AF%E7%B4%A0%E9%A2%9C%23) `286.8K 🔥` `+24%`
1. [建议不要在小环境中待太久 (It is recommended not to stay in a small environment for too long)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E5%9C%A8%E5%B0%8F%E7%8E%AF%E5%A2%83%E4%B8%AD%E5%BE%85%E5%A4%AA%E4%B9%85%23) `532.5K 🔥`
1. [狼队对战AG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98AG%23) `497.3K 🔥`
1. [颜如晶半年瘦了60斤](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%A6%82%E6%99%B6%E5%8D%8A%E5%B9%B4%E7%98%A6%E4%BA%8660%E6%96%A4%23) `253.4K 🔥`
1. [恋与深空回应擦边低俗争议](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%E6%93%A6%E8%BE%B9%E4%BD%8E%E4%BF%97%E4%BA%89%E8%AE%AE%23) `252.1K 🔥`
1. [考试坐严浩翔前面的同学发声](https://s.weibo.com/weibo?q=%23%E8%80%83%E8%AF%95%E5%9D%90%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%89%8D%E9%9D%A2%E7%9A%84%E5%90%8C%E5%AD%A6%E5%8F%91%E5%A3%B0%23) `296.2K 🔥` `-35%`
1. [白敬亭沈腾合开新公司 (Bai Jingting, Shen Teng jointly open new company)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E6%B2%88%E8%85%BE%E5%90%88%E5%BC%80%E6%96%B0%E5%85%AC%E5%8F%B8%23) `256.7K 🔥` `-41%`
1. [hybe拒绝宫脇咲良参与创作](https://s.weibo.com/weibo?q=%23hybe%E6%8B%92%E7%BB%9D%E5%AE%AB%E8%84%87%E5%92%B2%E8%89%AF%E5%8F%82%E4%B8%8E%E5%88%9B%E4%BD%9C%23) `249.6K 🔥` `-44%`
1. [杨幂北魏复原妆](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%8C%97%E9%AD%8F%E5%A4%8D%E5%8E%9F%E5%A6%86%23) `211.4K 🔥` `-50%`
1. [深圳夫妻囤存储芯片5个月狂涨320亿](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%A4%AB%E5%A6%BB%E5%9B%A4%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%875%E4%B8%AA%E6%9C%88%E7%8B%82%E6%B6%A8320%E4%BA%BF%23) `207.5K 🔥` `-56%`
1. [王俊凯中餐厅招商能力](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%AD%E9%A4%90%E5%8E%85%E6%8B%9B%E5%95%86%E8%83%BD%E5%8A%9B%23) `205.1K 🔥` `-64%`

Updated at 2026-05-12 23:20:10

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
