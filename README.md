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

1. [苹果手机 适合老人 (Apple mobile phone suitable for the elderly)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%20%E9%80%82%E5%90%88%E8%80%81%E4%BA%BA%23) `2.2M 🔥` `NEW`
1. [官方通报赛格商场坠亡事件](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E8%B5%9B%E6%A0%BC%E5%95%86%E5%9C%BA%E5%9D%A0%E4%BA%A1%E4%BA%8B%E4%BB%B6%23) `797.2K 🔥` `NEW`
1. [AI做的动物尺度太大了](https://s.weibo.com/weibo?q=%23AI%E5%81%9A%E7%9A%84%E5%8A%A8%E7%89%A9%E5%B0%BA%E5%BA%A6%E5%A4%AA%E5%A4%A7%E4%BA%86%23) `667.5K 🔥` `NEW`
1. [怪不得淋雨后要洗澡换衣服](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E6%B7%8B%E9%9B%A8%E5%90%8E%E8%A6%81%E6%B4%97%E6%BE%A1%E6%8D%A2%E8%A1%A3%E6%9C%8D%23) `665.4K 🔥` `NEW`
1. [华妃一个月吃了60斤鸡蛋500条鱼](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%A6%83%E4%B8%80%E4%B8%AA%E6%9C%88%E5%90%83%E4%BA%8660%E6%96%A4%E9%B8%A1%E8%9B%8B500%E6%9D%A1%E9%B1%BC%23) `505.5K 🔥` `NEW`
1. [电影欢迎来龙餐馆官宣定档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E5%AE%98%E5%AE%A3%E5%AE%9A%E6%A1%A3%23) `425.5K 🔥` `NEW`
1. [婚外试管案丈夫律师称胚胎已销毁](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%AF%95%E7%AE%A1%E6%A1%88%E4%B8%88%E5%A4%AB%E5%BE%8B%E5%B8%88%E7%A7%B0%E8%83%9A%E8%83%8E%E5%B7%B2%E9%94%80%E6%AF%81%23) `422.1K 🔥` `NEW`
1. [一姐姐在肯德基干了30年](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A7%90%E5%A7%90%E5%9C%A8%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%B9%B2%E4%BA%8630%E5%B9%B4%23) `421.0K 🔥` `NEW`
1. [河南要求领导干部带头休假](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%A6%81%E6%B1%82%E9%A2%86%E5%AF%BC%E5%B9%B2%E9%83%A8%E5%B8%A6%E5%A4%B4%E4%BC%91%E5%81%87%23) `418.8K 🔥` `NEW`
1. [赛格单方面认定违约金核算基数](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E6%A0%BC%E5%8D%95%E6%96%B9%E9%9D%A2%E8%AE%A4%E5%AE%9A%E8%BF%9D%E7%BA%A6%E9%87%91%E6%A0%B8%E7%AE%97%E5%9F%BA%E6%95%B0%23) `411.9K 🔥` `NEW`
1. [曝刘亦菲演过迪士尼高定待遇不同 (It is revealed that Liu Yifei was treated differently after acting in Disney Haute Couture)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E4%BA%A6%E8%8F%B2%E6%BC%94%E8%BF%87%E8%BF%AA%E5%A3%AB%E5%B0%BC%E9%AB%98%E5%AE%9A%E5%BE%85%E9%81%87%E4%B8%8D%E5%90%8C%23) `411.4K 🔥` `NEW`
1. [无畏契约](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%23) `405.9K 🔥` `NEW`
1. [其实已经过上普通人里最好的生活](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E5%B7%B2%E7%BB%8F%E8%BF%87%E4%B8%8A%E6%99%AE%E9%80%9A%E4%BA%BA%E9%87%8C%E6%9C%80%E5%A5%BD%E7%9A%84%E7%94%9F%E6%B4%BB%23) `403.1K 🔥` `NEW`
1. [长剧宣发开始用ai整活了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%89%A7%E5%AE%A3%E5%8F%91%E5%BC%80%E5%A7%8B%E7%94%A8ai%E6%95%B4%E6%B4%BB%E4%BA%86%23) `400.2K 🔥` `NEW`
1. [DeepSeek干完活自己写了个游戏](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B9%B2%E5%AE%8C%E6%B4%BB%E8%87%AA%E5%B7%B1%E5%86%99%E4%BA%86%E4%B8%AA%E6%B8%B8%E6%88%8F%23) `399.3K 🔥` `NEW`
1. [范丞丞手臂贴了纹身贴](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%89%8B%E8%87%82%E8%B4%B4%E4%BA%86%E7%BA%B9%E8%BA%AB%E8%B4%B4%23) `394.9K 🔥` `NEW`
1. [继续深入调查赛格经营行为](https://s.weibo.com/weibo?q=%23%E7%BB%A7%E7%BB%AD%E6%B7%B1%E5%85%A5%E8%B0%83%E6%9F%A5%E8%B5%9B%E6%A0%BC%E7%BB%8F%E8%90%A5%E8%A1%8C%E4%B8%BA%23) `389.0K 🔥` `NEW`
1. [赛格和利和公司已就违约金达成和解](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E6%A0%BC%E5%92%8C%E5%88%A9%E5%92%8C%E5%85%AC%E5%8F%B8%E5%B7%B2%E5%B0%B1%E8%BF%9D%E7%BA%A6%E9%87%91%E8%BE%BE%E6%88%90%E5%92%8C%E8%A7%A3%23) `387.5K 🔥` `NEW`
1. [虞书欣 高开叉](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E9%AB%98%E5%BC%80%E5%8F%89%23) `386.3K 🔥` `NEW`
1. [玩具公司签67亿元算力大单](https://s.weibo.com/weibo?q=%23%E7%8E%A9%E5%85%B7%E5%85%AC%E5%8F%B8%E7%AD%BE67%E4%BA%BF%E5%85%83%E7%AE%97%E5%8A%9B%E5%A4%A7%E5%8D%95%23) `383.4K 🔥` `NEW`
1. [华为同时发布三款鸿蒙电脑含金量 (Huawei releases three high-quality Hongmeng computers at the same time)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%90%8C%E6%97%B6%E5%8F%91%E5%B8%83%E4%B8%89%E6%AC%BE%E9%B8%BF%E8%92%99%E7%94%B5%E8%84%91%E5%90%AB%E9%87%91%E9%87%8F%23) `381.9K 🔥` `NEW`
1. [尊界V800全主动悬架碰撞前抬升](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8CV800%E5%85%A8%E4%B8%BB%E5%8A%A8%E6%82%AC%E6%9E%B6%E7%A2%B0%E6%92%9E%E5%89%8D%E6%8A%AC%E5%8D%87%23) `378.9K 🔥` `NEW`
1. [央视曝午夜直播色情引流乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%8D%88%E5%A4%9C%E7%9B%B4%E6%92%AD%E8%89%B2%E6%83%85%E5%BC%95%E6%B5%81%E4%B9%B1%E8%B1%A1%23) `378.4K 🔥` `NEW`
1. [王一博对暂停接戏很坦然](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%AF%B9%E6%9A%82%E5%81%9C%E6%8E%A5%E6%88%8F%E5%BE%88%E5%9D%A6%E7%84%B6%23) `374.0K 🔥` `NEW`
1. [千山茶客 新文](https://s.weibo.com/weibo?q=%23%E5%8D%83%E5%B1%B1%E8%8C%B6%E5%AE%A2%20%E6%96%B0%E6%96%87%23) `372.8K 🔥` `NEW`
1. [陈奕恒泡泡安慰没抢到票粉丝](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E6%B3%A1%E6%B3%A1%E5%AE%89%E6%85%B0%E6%B2%A1%E6%8A%A2%E5%88%B0%E7%A5%A8%E7%B2%89%E4%B8%9D%23) `369.8K 🔥` `NEW`
1. [公司财务被AI逼跑了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%B4%A2%E5%8A%A1%E8%A2%ABAI%E9%80%BC%E8%B7%91%E4%BA%86%23) `367.5K 🔥` `NEW`
1. [AI开始整顿老板了](https://s.weibo.com/weibo?q=%23AI%E5%BC%80%E5%A7%8B%E6%95%B4%E9%A1%BF%E8%80%81%E6%9D%BF%E4%BA%86%23) `365.8K 🔥` `NEW`
1. [裸聊2分钟被敲诈14笔](https://s.weibo.com/weibo?q=%23%E8%A3%B8%E8%81%8A2%E5%88%86%E9%92%9F%E8%A2%AB%E6%95%B2%E8%AF%8814%E7%AC%94%23) `364.9K 🔥` `NEW`
1. [警方靠时团演唱会周边锁定在逃人员](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%9D%A0%E6%97%B6%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%91%A8%E8%BE%B9%E9%94%81%E5%AE%9A%E5%9C%A8%E9%80%83%E4%BA%BA%E5%91%98%23) `362.9K 🔥` `NEW`
1. [西安赛格商场坠亡男子患有抑郁症 (The man who fell and died in Xi'an SEG Mall suffered from depression)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E8%B5%9B%E6%A0%BC%E5%95%86%E5%9C%BA%E5%9D%A0%E4%BA%A1%E7%94%B7%E5%AD%90%E6%82%A3%E6%9C%89%E6%8A%91%E9%83%81%E7%97%87%23) `360.3K 🔥` `NEW`
1. [侯明昊方呼吁立即停止侵权](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%96%B9%E5%91%BC%E5%90%81%E7%AB%8B%E5%8D%B3%E5%81%9C%E6%AD%A2%E4%BE%B5%E6%9D%83%23) `358.4K 🔥` `NEW`
1. [黄杨钿甜女主剧人鱼开播](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%9D%A8%E9%92%BF%E7%94%9C%E5%A5%B3%E4%B8%BB%E5%89%A7%E4%BA%BA%E9%B1%BC%E5%BC%80%E6%92%AD%23) `353.3K 🔥` `NEW`
1. [田曦薇魏大勋出妆路透](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%AD%8F%E5%A4%A7%E5%8B%8B%E5%87%BA%E5%A6%86%E8%B7%AF%E9%80%8F%23) `352.1K 🔥` `NEW`
1. [尊界V800行业最高标准安全架构](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8CV800%E8%A1%8C%E4%B8%9A%E6%9C%80%E9%AB%98%E6%A0%87%E5%87%86%E5%AE%89%E5%85%A8%E6%9E%B6%E6%9E%84%23) `351.2K 🔥` `NEW`
1. [周佑凌徐绿杨商量告白夜怎么亲](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%E5%BE%90%E7%BB%BF%E6%9D%A8%E5%95%86%E9%87%8F%E5%91%8A%E7%99%BD%E5%A4%9C%E6%80%8E%E4%B9%88%E4%BA%B2%23) `349.0K 🔥` `NEW`
1. [中传 取消艺考](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BC%A0%20%E5%8F%96%E6%B6%88%E8%89%BA%E8%80%83%23) `1.9M 🔥` `+597%`
1. [火遍全球的Chinamaxxing是什么](https://s.weibo.com/weibo?q=%23%E7%81%AB%E9%81%8D%E5%85%A8%E7%90%83%E7%9A%84Chinamaxxing%E6%98%AF%E4%BB%80%E4%B9%88%23) `1.2M 🔥` `+84%`
1. [河南试行周五半天加周末加年假模式](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%AF%95%E8%A1%8C%E5%91%A8%E4%BA%94%E5%8D%8A%E5%A4%A9%E5%8A%A0%E5%91%A8%E6%9C%AB%E5%8A%A0%E5%B9%B4%E5%81%87%E6%A8%A1%E5%BC%8F%23) `573.6K 🔥` `+31%`
1. [只有张馨予理解了珠帘的用意 (Only Zhang Xinyu understood the purpose of the bead curtain)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E5%BC%A0%E9%A6%A8%E4%BA%88%E7%90%86%E8%A7%A3%E4%BA%86%E7%8F%A0%E5%B8%98%E7%9A%84%E7%94%A8%E6%84%8F%23) `416.1K 🔥` `+46%`
1. [为什么高磅数T恤很少人穿了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E9%AB%98%E7%A3%85%E6%95%B0T%E6%81%A4%E5%BE%88%E5%B0%91%E4%BA%BA%E7%A9%BF%E4%BA%86%23) `406.0K 🔥` `+124%`
1. [华为发布会 (Huawei press conference)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `397.4K 🔥` `+27%`
1. [迪丽热巴王与嫣](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%8E%8B%E4%B8%8E%E5%AB%A3%23) `390.5K 🔥` `+30%`
1. [鞠婧祎完全不给代拍好脸色 (Ju Jingyi doesn’t look good on her agent at all)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%AE%8C%E5%85%A8%E4%B8%8D%E7%BB%99%E4%BB%A3%E6%8B%8D%E5%A5%BD%E8%84%B8%E8%89%B2%23) `376.2K 🔥` `+109%`
1. [叠纸客服回应玩家请愿恢复敖尹](https://s.weibo.com/weibo?q=%23%E5%8F%A0%E7%BA%B8%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E7%8E%A9%E5%AE%B6%E8%AF%B7%E6%84%BF%E6%81%A2%E5%A4%8D%E6%95%96%E5%B0%B9%23) `355.7K 🔥` `+75%`
1. [孙俪晒女儿化的妆](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%99%92%E5%A5%B3%E5%84%BF%E5%8C%96%E7%9A%84%E5%A6%86%23) `345.7K 🔥` `+26%`
1. [娇兰蓝调淡香精](https://s.weibo.com/weibo?q=%23%E5%A8%87%E5%85%B0%E8%93%9D%E8%B0%83%E6%B7%A1%E9%A6%99%E7%B2%BE%23) `656.2K 🔥`
1. [C罗晒豪车收藏](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%99%92%E8%B1%AA%E8%BD%A6%E6%94%B6%E8%97%8F%23) `423.9K 🔥`
1. [短剧演员日薪四万](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E6%BC%94%E5%91%98%E6%97%A5%E8%96%AA%E5%9B%9B%E4%B8%87%23) `414.3K 🔥`
1. [韩国宣布国家灾难状态 (South Korea declares national disaster)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%AE%A3%E5%B8%83%E5%9B%BD%E5%AE%B6%E7%81%BE%E9%9A%BE%E7%8A%B6%E6%80%81%23) `408.6K 🔥` `-65%`
1. [金饰大跌金股大涨 (Gold jewelry plummets, gold stocks surge)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%A4%A7%E8%B7%8C%E9%87%91%E8%82%A1%E5%A4%A7%E6%B6%A8%23) `393.9K 🔥` `-54%`

Updated at 2026-08-05 17:49:35

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
