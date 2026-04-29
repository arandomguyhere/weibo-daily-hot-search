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

1. [多平台已下架毒品前体 (Drug precursors have been removed from many platforms)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B9%B3%E5%8F%B0%E5%B7%B2%E4%B8%8B%E6%9E%B6%E6%AF%92%E5%93%81%E5%89%8D%E4%BD%93%23) `1.4M 🔥` `NEW`
1. [空包出游用美团闪购](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E5%8C%85%E5%87%BA%E6%B8%B8%E7%94%A8%E7%BE%8E%E5%9B%A2%E9%97%AA%E8%B4%AD%23) `812.6K 🔥` `NEW`
1. [体育老师考教资太尴尬了](https://s.weibo.com/weibo?q=%23%E4%BD%93%E8%82%B2%E8%80%81%E5%B8%88%E8%80%83%E6%95%99%E8%B5%84%E5%A4%AA%E5%B0%B4%E5%B0%AC%E4%BA%86%23) `798.1K 🔥` `NEW`
1. [日本广岛爆炸现场视频](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%B9%BF%E5%B2%9B%E7%88%86%E7%82%B8%E7%8E%B0%E5%9C%BA%E8%A7%86%E9%A2%91%23) `580.7K 🔥` `NEW`
1. [宗师道歉](https://s.weibo.com/weibo?q=%23%E5%AE%97%E5%B8%88%E9%81%93%E6%AD%89%23) `501.4K 🔥` `NEW`
1. [白鹿奔跑吧本次最后一次上班](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%94%E8%B7%91%E5%90%A7%E6%9C%AC%E6%AC%A1%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E4%B8%8A%E7%8F%AD%23) `489.0K 🔥` `NEW`
1. [一个探店博主为何能偷税近千万](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%8E%A2%E5%BA%97%E5%8D%9A%E4%B8%BB%E4%B8%BA%E4%BD%95%E8%83%BD%E5%81%B7%E7%A8%8E%E8%BF%91%E5%8D%83%E4%B8%87%23) `463.3K 🔥` `NEW`
1. [男子为娶情人捂死孕妻伪造车祸](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%BA%E5%A8%B6%E6%83%85%E4%BA%BA%E6%8D%82%E6%AD%BB%E5%AD%95%E5%A6%BB%E4%BC%AA%E9%80%A0%E8%BD%A6%E7%A5%B8%23) `446.7K 🔥` `NEW`
1. [虞书欣ins点赞Angelababy](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3ins%E7%82%B9%E8%B5%9EAngelababy%23) `431.2K 🔥` `NEW`
1. [迪丽热巴金刚发型](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%87%91%E5%88%9A%E5%8F%91%E5%9E%8B%23) `421.2K 🔥` `NEW`
1. [宋威龙田曦薇 潮热雨季未解之谜 (Song Wei, Long Tian Xiwei The Unsolved Mysteries of Hot Flashes and Rainy Season)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%BD%AE%E7%83%AD%E9%9B%A8%E5%AD%A3%E6%9C%AA%E8%A7%A3%E4%B9%8B%E8%B0%9C%23) `410.0K 🔥` `NEW`
1. [于文文被蔡卓妍结婚吓一跳](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%96%87%E6%96%87%E8%A2%AB%E8%94%A1%E5%8D%93%E5%A6%8D%E7%BB%93%E5%A9%9A%E5%90%93%E4%B8%80%E8%B7%B3%23) `399.8K 🔥` `NEW`
1. [阚清子欣赏一下自己的精修图](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%AC%A3%E8%B5%8F%E4%B8%80%E4%B8%8B%E8%87%AA%E5%B7%B1%E7%9A%84%E7%B2%BE%E4%BF%AE%E5%9B%BE%23) `329.1K 🔥` `NEW`
1. [永远不要惹减肥的人](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BF%9C%E4%B8%8D%E8%A6%81%E6%83%B9%E5%87%8F%E8%82%A5%E7%9A%84%E4%BA%BA%23) `271.1K 🔥` `NEW`
1. [美国国防部正式申请更名为战争部](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%9B%BD%E9%98%B2%E9%83%A8%E6%AD%A3%E5%BC%8F%E7%94%B3%E8%AF%B7%E6%9B%B4%E5%90%8D%E4%B8%BA%E6%88%98%E4%BA%89%E9%83%A8%23) `248.5K 🔥` `NEW`
1. [曹骏徐正溪一武一文乱世同行](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%BE%90%E6%AD%A3%E6%BA%AA%E4%B8%80%E6%AD%A6%E4%B8%80%E6%96%87%E4%B9%B1%E4%B8%96%E5%90%8C%E8%A1%8C%23) `248.4K 🔥` `NEW`
1. [吉娜评论宁艺卓](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%A8%9C%E8%AF%84%E8%AE%BA%E5%AE%81%E8%89%BA%E5%8D%93%23) `247.1K 🔥` `NEW`
1. [东方甄选初代核心主播已全员离开](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%88%9D%E4%BB%A3%E6%A0%B8%E5%BF%83%E4%B8%BB%E6%92%AD%E5%B7%B2%E5%85%A8%E5%91%98%E7%A6%BB%E5%BC%80%23) `247.0K 🔥` `NEW`
1. [韩汶栩韩家大院](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%E9%9F%A9%E5%AE%B6%E5%A4%A7%E9%99%A2%23) `246.1K 🔥` `NEW`
1. [华为折叠屏对比iPhone折叠屏](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%8A%98%E5%8F%A0%E5%B1%8F%E5%AF%B9%E6%AF%94iPhone%E6%8A%98%E5%8F%A0%E5%B1%8F%23) `245.8K 🔥` `NEW`
1. [Meta准备撤销对Manus收购 (Meta prepares to withdraw acquisition of Manus)](https://s.weibo.com/weibo?q=%23Meta%E5%87%86%E5%A4%87%E6%92%A4%E9%94%80%E5%AF%B9Manus%E6%94%B6%E8%B4%AD%23) `245.1K 🔥` `NEW`
1. [央视评白冰偷税被查](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%AF%84%E7%99%BD%E5%86%B0%E5%81%B7%E7%A8%8E%E8%A2%AB%E6%9F%A5%23) `244.4K 🔥` `NEW`
1. [黄金涨到天花板了吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%B6%A8%E5%88%B0%E5%A4%A9%E8%8A%B1%E6%9D%BF%E4%BA%86%E5%90%97%23) `243.6K 🔥` `NEW`
1. [白冰掉粉速度肉眼可见](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E6%8E%89%E7%B2%89%E9%80%9F%E5%BA%A6%E8%82%89%E7%9C%BC%E5%8F%AF%E8%A7%81%23) `243.0K 🔥` `NEW`
1. [白冰从发廊小哥到偷税网红](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E4%BB%8E%E5%8F%91%E5%BB%8A%E5%B0%8F%E5%93%A5%E5%88%B0%E5%81%B7%E7%A8%8E%E7%BD%91%E7%BA%A2%23) `234.1K 🔥` `NEW`
1. [何超欣清华毕业后留校](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E6%AC%A3%E6%B8%85%E5%8D%8E%E6%AF%95%E4%B8%9A%E5%90%8E%E7%95%99%E6%A0%A1%23) `210.7K 🔥` `NEW`
1. [瑶一瑶妈妈回应被吐槽身材](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%90%90%E6%A7%BD%E8%BA%AB%E6%9D%90%23) `199.5K 🔥` `NEW`
1. [赵心童墨菲第二阶段战平](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E5%A2%A8%E8%8F%B2%E7%AC%AC%E4%BA%8C%E9%98%B6%E6%AE%B5%E6%88%98%E5%B9%B3%23) `188.3K 🔥` `NEW`
1. [巴黎5比4拜仁创下多项纪录](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E5%E6%AF%944%E6%8B%9C%E4%BB%81%E5%88%9B%E4%B8%8B%E5%A4%9A%E9%A1%B9%E7%BA%AA%E5%BD%95%23) `182.0K 🔥` `NEW`
1. [从今天起她拥有了新的人生](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E4%BB%8A%E5%A4%A9%E8%B5%B7%E5%A5%B9%E6%8B%A5%E6%9C%89%E4%BA%86%E6%96%B0%E7%9A%84%E4%BA%BA%E7%94%9F%23) `179.4K 🔥` `NEW`
1. [美国华盛顿2起枪击多人伤 (2 shootings in Washington, US, injures many)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8D%8E%E7%9B%9B%E9%A1%BF2%E8%B5%B7%E6%9E%AA%E5%87%BB%E5%A4%9A%E4%BA%BA%E4%BC%A4%23) `178.3K 🔥` `NEW`
1. [唐嫣到底还要管何家这点事多久](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%88%B0%E5%BA%95%E8%BF%98%E8%A6%81%E7%AE%A1%E4%BD%95%E5%AE%B6%E8%BF%99%E7%82%B9%E4%BA%8B%E5%A4%9A%E4%B9%85%23) `178.3K 🔥` `NEW`
1. [刘宇宁新角色高原](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%96%B0%E8%A7%92%E8%89%B2%E9%AB%98%E5%8E%9F%23) `178.3K 🔥` `NEW`
1. [朋友圈改版](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%94%B9%E7%89%88%23) `5.9M 🔥` `+177%`
1. [五一全社会流动预计超15亿人次](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%85%A8%E7%A4%BE%E4%BC%9A%E6%B5%81%E5%8A%A8%E9%A2%84%E8%AE%A1%E8%B6%8515%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `1.1M 🔥` `+50%`
1. [杨洋也来大连踏春赏樱喝青岛白啤](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E4%B9%9F%E6%9D%A5%E5%A4%A7%E8%BF%9E%E8%B8%8F%E6%98%A5%E8%B5%8F%E6%A8%B1%E5%96%9D%E9%9D%92%E5%B2%9B%E7%99%BD%E5%95%A4%23) `493.7K 🔥` `+100%`
1. [第一次知道羽绒服能这么补 (This is the first time I know that down jackets can be so mend)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9F%A5%E9%81%93%E7%BE%BD%E7%BB%92%E6%9C%8D%E8%83%BD%E8%BF%99%E4%B9%88%E8%A1%A5%23) `481.9K 🔥` `+42%`
1. [不敢想i人住进去得有多幸福 (I can’t imagine how happy I will be living there.)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%95%A2%E6%83%B3i%E4%BA%BA%E4%BD%8F%E8%BF%9B%E5%8E%BB%E5%BE%97%E6%9C%89%E5%A4%9A%E5%B9%B8%E7%A6%8F%23) `375.2K 🔥` `+35%`
1. [男子许诺3万包养费骗4人发生关系](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AE%B8%E8%AF%BA3%E4%B8%87%E5%8C%85%E5%85%BB%E8%B4%B9%E9%AA%974%E4%BA%BA%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%23) `268.0K 🔥` `+62%`
1. [建议所有女性多做力量训练](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%89%80%E6%9C%89%E5%A5%B3%E6%80%A7%E5%A4%9A%E5%81%9A%E5%8A%9B%E9%87%8F%E8%AE%AD%E7%BB%83%23) `208.9K 🔥` `+27%`
1. [人越淡事越顺你越放松结果越好](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%B6%8A%E6%B7%A1%E4%BA%8B%E8%B6%8A%E9%A1%BA%E4%BD%A0%E8%B6%8A%E6%94%BE%E6%9D%BE%E7%BB%93%E6%9E%9C%E8%B6%8A%E5%A5%BD%23) `196.8K 🔥` `+132%`
1. [黄金跌透了吗 (Has gold fallen through the cracks?)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E9%80%8F%E4%BA%86%E5%90%97%23) `178.3K 🔥` `+51%`
1. [情绪压力对一个人体态的影响](https://s.weibo.com/weibo?q=%23%E6%83%85%E7%BB%AA%E5%8E%8B%E5%8A%9B%E5%AF%B9%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%BD%93%E6%80%81%E7%9A%84%E5%BD%B1%E5%93%8D%23) `484.0K 🔥`
1. [玉龙雪山景区报警 (Jade Dragon Snow Mountain Scenic Area Alarm)](https://s.weibo.com/weibo?q=%23%E7%8E%89%E9%BE%99%E9%9B%AA%E5%B1%B1%E6%99%AF%E5%8C%BA%E6%8A%A5%E8%AD%A6%23) `414.2K 🔥`
1. [阿联酋退出石油输出国组织 (UAE withdraws from OPEC)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%81%94%E9%85%8B%E9%80%80%E5%87%BA%E7%9F%B3%E6%B2%B9%E8%BE%93%E5%87%BA%E5%9B%BD%E7%BB%84%E7%BB%87%23) `244.5K 🔥`
1. [天云 (Tianyun)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E4%BA%91%23) `243.9K 🔥`
1. [出轨女被情人杀害案发细节曝光 (Details of cheating woman murdered by lover revealed)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A8%E5%A5%B3%E8%A2%AB%E6%83%85%E4%BA%BA%E6%9D%80%E5%AE%B3%E6%A1%88%E5%8F%91%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `178.3K 🔥`
1. [黄子弘凡 银河左岸出场顺序](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%20%E9%93%B6%E6%B2%B3%E5%B7%A6%E5%B2%B8%E5%87%BA%E5%9C%BA%E9%A1%BA%E5%BA%8F%23) `178.3K 🔥`
1. [铁证 刘宇宁 (Ironclad evidence Liu Yuning)](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%AF%81%20%E5%88%98%E5%AE%87%E5%AE%81%23) `465.9K 🔥` `-35%`
1. [腾讯客服回应朋友圈排版变了](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%8E%92%E7%89%88%E5%8F%98%E4%BA%86%23) `251.4K 🔥` `-65%`
1. [欧冠 (Champions League)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%23) `224.7K 🔥` `-72%`
1. [任敏被粉丝催着减肥](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E8%A2%AB%E7%B2%89%E4%B8%9D%E5%82%AC%E7%9D%80%E5%87%8F%E8%82%A5%23) `182.9K 🔥` `-34%`

Updated at 2026-04-29 09:21:09

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
