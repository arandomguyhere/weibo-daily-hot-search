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

1. [武网施晗爆冷淘汰伊埃拉](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E7%BD%91%E6%96%BD%E6%99%97%E7%88%86%E5%86%B7%E6%B7%98%E6%B1%B0%E4%BC%8A%E5%9F%83%E6%8B%89%23) `419.8K 🔥` `NEW`
1. [走再远也别忘了于都河](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E5%86%8D%E8%BF%9C%E4%B9%9F%E5%88%AB%E5%BF%98%E4%BA%86%E4%BA%8E%E9%83%BD%E6%B2%B3%23) `333.4K 🔥` `NEW`
1. [朋友离世后我送的同人本被卖](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E7%A6%BB%E4%B8%96%E5%90%8E%E6%88%91%E9%80%81%E7%9A%84%E5%90%8C%E4%BA%BA%E6%9C%AC%E8%A2%AB%E5%8D%96%23) `255.4K 🔥` `NEW`
1. [刘学义是谭松韵的铁粉](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%98%AF%E8%B0%AD%E6%9D%BE%E9%9F%B5%E7%9A%84%E9%93%81%E7%B2%89%23) `119.6K 🔥` `NEW`
1. [大汉下线定格王朝千万里程碑](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%B1%89%E4%B8%8B%E7%BA%BF%E5%AE%9A%E6%A0%BC%E7%8E%8B%E6%9C%9D%E5%8D%83%E4%B8%87%E9%87%8C%E7%A8%8B%E7%A2%91%23) `117.8K 🔥` `NEW`
1. [C罗生涯第981球](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%94%9F%E6%B6%AF%E7%AC%AC981%E7%90%83%23) `105.4K 🔥` `NEW`
1. [A股 存储芯片](https://s.weibo.com/weibo?q=%23A%E8%82%A1%20%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%23) `90.4K 🔥` `NEW`
1. [霸王茶姬加盟商发声](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%8A%A0%E7%9B%9F%E5%95%86%E5%8F%91%E5%A3%B0%23) `90.3K 🔥` `NEW`
1. [备婚女生因三金折现和父母争吵](https://s.weibo.com/weibo?q=%23%E5%A4%87%E5%A9%9A%E5%A5%B3%E7%94%9F%E5%9B%A0%E4%B8%89%E9%87%91%E6%8A%98%E7%8E%B0%E5%92%8C%E7%88%B6%E6%AF%8D%E4%BA%89%E5%90%B5%23) `89.1K 🔥` `NEW`
1. [谭松韵计划27岁结婚30岁前生娃](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E8%AE%A1%E5%88%9227%E5%B2%81%E7%BB%93%E5%A9%9A30%E5%B2%81%E5%89%8D%E7%94%9F%E5%A8%83%23) `89.1K 🔥` `NEW`
1. [崔晋妈妈推荐视频文案](https://s.weibo.com/weibo?q=%23%E5%B4%94%E6%99%8B%E5%A6%88%E5%A6%88%E6%8E%A8%E8%8D%90%E8%A7%86%E9%A2%91%E6%96%87%E6%A1%88%23) `87.9K 🔥` `NEW`
1. [什么叫隐形职场霸凌](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E5%8F%AB%E9%9A%90%E5%BD%A2%E8%81%8C%E5%9C%BA%E9%9C%B8%E5%87%8C%23) `81.1K 🔥` `NEW`
1. [劳务外包的代价落到谁头上](https://s.weibo.com/weibo?q=%23%E5%8A%B3%E5%8A%A1%E5%A4%96%E5%8C%85%E7%9A%84%E4%BB%A3%E4%BB%B7%E8%90%BD%E5%88%B0%E8%B0%81%E5%A4%B4%E4%B8%8A%23) `79.9K 🔥` `NEW`
1. [中国科学院通报](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6%E9%99%A2%E9%80%9A%E6%8A%A5%23) `72.8K 🔥` `NEW`
1. [性格好的人根本不觉得被惹](https://s.weibo.com/weibo?q=%23%E6%80%A7%E6%A0%BC%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%A0%B9%E6%9C%AC%E4%B8%8D%E8%A7%89%E5%BE%97%E8%A2%AB%E6%83%B9%23) `71.7K 🔥` `NEW`
1. [张继科说乒乓球热度是他带起来的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%AF%B4%E4%B9%92%E4%B9%93%E7%90%83%E7%83%AD%E5%BA%A6%E6%98%AF%E4%BB%96%E5%B8%A6%E8%B5%B7%E6%9D%A5%E7%9A%84%23) `67.1K 🔥` `NEW`
1. [王一博试车后悠闲地骑车](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%AF%95%E8%BD%A6%E5%90%8E%E6%82%A0%E9%97%B2%E5%9C%B0%E9%AA%91%E8%BD%A6%23) `63.9K 🔥` `NEW`
1. [多方回应男子楼上百日宴楼下婚宴](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E6%A5%BC%E4%B8%8A%E7%99%BE%E6%97%A5%E5%AE%B4%E6%A5%BC%E4%B8%8B%E5%A9%9A%E5%AE%B4%23) `63.4K 🔥` `NEW`
1. [南方人睡东北大炕不习惯](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E4%BA%BA%E7%9D%A1%E4%B8%9C%E5%8C%97%E5%A4%A7%E7%82%95%E4%B8%8D%E4%B9%A0%E6%83%AF%23) `48.7K 🔥` `NEW`
1. [没点艺术细菌都刷不到](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E7%82%B9%E8%89%BA%E6%9C%AF%E7%BB%86%E8%8F%8C%E9%83%BD%E5%88%B7%E4%B8%8D%E5%88%B0%23) `48.6K 🔥` `NEW`
1. [垃圾桶上挂着闺蜜的发箍](https://s.weibo.com/weibo?q=%23%E5%9E%83%E5%9C%BE%E6%A1%B6%E4%B8%8A%E6%8C%82%E7%9D%80%E9%97%BA%E8%9C%9C%E7%9A%84%E5%8F%91%E7%AE%8D%23) `48.5K 🔥` `NEW`
1. [鹿晗说陈赫一直播声音就特别夹](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%AF%B4%E9%99%88%E8%B5%AB%E4%B8%80%E7%9B%B4%E6%92%AD%E5%A3%B0%E9%9F%B3%E5%B0%B1%E7%89%B9%E5%88%AB%E5%A4%B9%23) `48.4K 🔥` `NEW`
1. [郑钦文比李娜更孤独](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%AF%94%E6%9D%8E%E5%A8%9C%E6%9B%B4%E5%AD%A4%E7%8B%AC%23) `48.2K 🔥` `NEW`
1. [霸王茶姬错峰下单5分钟到手](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E9%94%99%E5%B3%B0%E4%B8%8B%E5%8D%955%E5%88%86%E9%92%9F%E5%88%B0%E6%89%8B%23) `48.2K 🔥` `NEW`
1. [人也许是演的但猫真睡着了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B9%9F%E8%AE%B8%E6%98%AF%E6%BC%94%E7%9A%84%E4%BD%86%E7%8C%AB%E7%9C%9F%E7%9D%A1%E7%9D%80%E4%BA%86%23) `48.2K 🔥` `NEW`
1. [大众发布会提刹车踩不断](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97%E5%8F%91%E5%B8%83%E4%BC%9A%E6%8F%90%E5%88%B9%E8%BD%A6%E8%B8%A9%E4%B8%8D%E6%96%AD%23) `48.2K 🔥` `NEW`
1. [郭宇欣涨粉了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E6%B6%A8%E7%B2%89%E4%BA%86%23) `47.6K 🔥` `NEW`
1. [第一批吃石榴不吐籽的受害者出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E5%90%83%E7%9F%B3%E6%A6%B4%E4%B8%8D%E5%90%90%E7%B1%BD%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `46.7K 🔥` `NEW`
1. [连丞磊本人都被玉簟秋震惊到了](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%B8%9E%E7%A3%8A%E6%9C%AC%E4%BA%BA%E9%83%BD%E8%A2%AB%E7%8E%89%E7%B0%9F%E7%A7%8B%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `46.3K 🔥` `NEW`
1. [国乒多人已获WTT总决赛女单参赛资格](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A4%9A%E4%BA%BA%E5%B7%B2%E8%8E%B7WTT%E6%80%BB%E5%86%B3%E8%B5%9B%E5%A5%B3%E5%8D%95%E5%8F%82%E8%B5%9B%E8%B5%84%E6%A0%BC%23) `45.0K 🔥` `NEW`
1. [小猫挣钱给主人买锅](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E6%8C%A3%E9%92%B1%E7%BB%99%E4%B8%BB%E4%BA%BA%E4%B9%B0%E9%94%85%23) `45.0K 🔥` `NEW`
1. [怪不得都说多吃十字花科蔬菜](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%83%BD%E8%AF%B4%E5%A4%9A%E5%90%83%E5%8D%81%E5%AD%97%E8%8A%B1%E7%A7%91%E8%94%AC%E8%8F%9C%23) `45.0K 🔥` `NEW`
1. [武网大屏展示王欣瑜冠军头衔0](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E7%BD%91%E5%A4%A7%E5%B1%8F%E5%B1%95%E7%A4%BA%E7%8E%8B%E6%AC%A3%E7%91%9C%E5%86%A0%E5%86%9B%E5%A4%B4%E8%A1%940%23) `45.0K 🔥` `NEW`
1. [施晗说我是中网名誉亚军](https://s.weibo.com/weibo?q=%23%E6%96%BD%E6%99%97%E8%AF%B4%E6%88%91%E6%98%AF%E4%B8%AD%E7%BD%91%E5%90%8D%E8%AA%89%E4%BA%9A%E5%86%9B%23) `45.0K 🔥` `NEW`
1. [陈小纭曾被称为迪士尼在逃公主](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E7%BA%AD%E6%9B%BE%E8%A2%AB%E7%A7%B0%E4%B8%BA%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%9C%A8%E9%80%83%E5%85%AC%E4%B8%BB%23) `45.0K 🔥` `NEW`
1. [郑钦文团队一天就得花五万多块](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%9B%A2%E9%98%9F%E4%B8%80%E5%A4%A9%E5%B0%B1%E5%BE%97%E8%8A%B1%E4%BA%94%E4%B8%87%E5%A4%9A%E5%9D%97%23) `561.2K 🔥` `-35%`
1. [小说里产后妻子被嘲丈夫出手](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%AF%B4%E9%87%8C%E4%BA%A7%E5%90%8E%E5%A6%BB%E5%AD%90%E8%A2%AB%E5%98%B2%E4%B8%88%E5%A4%AB%E5%87%BA%E6%89%8B%23) `123.7K 🔥` `-74%`
1. [陈小纭已经是完全认不出的程度了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E7%BA%AD%E5%B7%B2%E7%BB%8F%E6%98%AF%E5%AE%8C%E5%85%A8%E8%AE%A4%E4%B8%8D%E5%87%BA%E7%9A%84%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `115.8K 🔥` `-56%`
1. [内娱来了五位AI艺人](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%9D%A5%E4%BA%86%E4%BA%94%E4%BD%8DAI%E8%89%BA%E4%BA%BA%23) `100.9K 🔥` `-75%`
1. [郭宇欣收拾收拾准备升咖](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E6%94%B6%E6%8B%BE%E6%94%B6%E6%8B%BE%E5%87%86%E5%A4%87%E5%8D%87%E5%92%96%23) `86.3K 🔥` `-67%`
1. [女子左臀疼1个月挤出发黑注射针头](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B7%A6%E8%87%80%E7%96%BC1%E4%B8%AA%E6%9C%88%E6%8C%A4%E5%87%BA%E5%8F%91%E9%BB%91%E6%B3%A8%E5%B0%84%E9%92%88%E5%A4%B4%23) `80.0K 🔥` `-84%`
1. [曝时代少年团10月个人行程](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A210%E6%9C%88%E4%B8%AA%E4%BA%BA%E8%A1%8C%E7%A8%8B%23) `74.1K 🔥` `-72%`
1. [女子就餐被拍肩膀突然暴怒摔盘](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%B1%E9%A4%90%E8%A2%AB%E6%8B%8D%E8%82%A9%E8%86%80%E7%AA%81%E7%84%B6%E6%9A%B4%E6%80%92%E6%91%94%E7%9B%98%23) `70.4K 🔥` `-68%`
1. [身上出现一黄二红三黑要查肝](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%B8%8A%E5%87%BA%E7%8E%B0%E4%B8%80%E9%BB%84%E4%BA%8C%E7%BA%A2%E4%B8%89%E9%BB%91%E8%A6%81%E6%9F%A5%E8%82%9D%23) `70.4K 🔥` `-68%`
1. [我不是药神原型陆勇即将停药](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E6%98%AF%E8%8D%AF%E7%A5%9E%E5%8E%9F%E5%9E%8B%E9%99%86%E5%8B%87%E5%8D%B3%E5%B0%86%E5%81%9C%E8%8D%AF%23) `60.2K 🔥` `-77%`
1. [5类人最容易被肝癌盯上](https://s.weibo.com/weibo?q=%235%E7%B1%BB%E4%BA%BA%E6%9C%80%E5%AE%B9%E6%98%93%E8%A2%AB%E8%82%9D%E7%99%8C%E7%9B%AF%E4%B8%8A%23) `58.4K 🔥` `-70%`
1. [鹿晗说谁是你老公](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%AF%B4%E8%B0%81%E6%98%AF%E4%BD%A0%E8%80%81%E5%85%AC%23) `52.6K 🔥` `-80%`
1. [郑钦文收入九成来自代言](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%94%B6%E5%85%A5%E4%B9%9D%E6%88%90%E6%9D%A5%E8%87%AA%E4%BB%A3%E8%A8%80%23) `48.8K 🔥` `-96%`
1. [李娜自曝宣布退役后一个月怀孕](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%A8%9C%E8%87%AA%E6%9B%9D%E5%AE%A3%E5%B8%83%E9%80%80%E5%BD%B9%E5%90%8E%E4%B8%80%E4%B8%AA%E6%9C%88%E6%80%80%E5%AD%95%23) `48.2K 🔥` `-82%`
1. [霸王茶姬买一送一成本谁买单](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E4%B9%B0%E4%B8%80%E9%80%81%E4%B8%80%E6%88%90%E6%9C%AC%E8%B0%81%E4%B9%B0%E5%8D%95%23) `45.0K 🔥` `-83%`
1. [霸王茶姬回应买一送一活动初衷](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%9B%9E%E5%BA%94%E4%B9%B0%E4%B8%80%E9%80%81%E4%B8%80%E6%B4%BB%E5%8A%A8%E5%88%9D%E8%A1%B7%23) `45.0K 🔥` `-83%`

Updated at 2026-10-13 06:56:08

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
