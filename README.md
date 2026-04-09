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

1. [女孩玩拼豆不幸触电离世 (Girl dies after being electrocuted while playing Pinto)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%8E%A9%E6%8B%BC%E8%B1%86%E4%B8%8D%E5%B9%B8%E8%A7%A6%E7%94%B5%E7%A6%BB%E4%B8%96%23) `1.2M 🔥` `NEW`
1. [35岁孕妇吃冰箱剩菜后去世](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%AD%95%E5%A6%87%E5%90%83%E5%86%B0%E7%AE%B1%E5%89%A9%E8%8F%9C%E5%90%8E%E5%8E%BB%E4%B8%96%23) `826.9K 🔥` `NEW`
1. [体验式消费点亮春日经济](https://s.weibo.com/weibo?q=%23%E4%BD%93%E9%AA%8C%E5%BC%8F%E6%B6%88%E8%B4%B9%E7%82%B9%E4%BA%AE%E6%98%A5%E6%97%A5%E7%BB%8F%E6%B5%8E%23) `643.2K 🔥` `NEW`
1. [房贷年利率3.8变8.7五年才发现](https://s.weibo.com/weibo?q=%23%E6%88%BF%E8%B4%B7%E5%B9%B4%E5%88%A9%E7%8E%873.8%E5%8F%988.7%E4%BA%94%E5%B9%B4%E6%89%8D%E5%8F%91%E7%8E%B0%23) `375.6K 🔥` `NEW`
1. [多国齐声谴责以色列](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E9%BD%90%E5%A3%B0%E8%B0%B4%E8%B4%A3%E4%BB%A5%E8%89%B2%E5%88%97%23) `354.8K 🔥` `NEW`
1. [十万头猪拱进沙漠治沙真成了](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%87%E5%A4%B4%E7%8C%AA%E6%8B%B1%E8%BF%9B%E6%B2%99%E6%BC%A0%E6%B2%BB%E6%B2%99%E7%9C%9F%E6%88%90%E4%BA%86%23) `349.7K 🔥` `NEW`
1. [辛芷蕾大众汽车焕新代言人](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%A4%A7%E4%BC%97%E6%B1%BD%E8%BD%A6%E7%84%95%E6%96%B0%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `339.7K 🔥` `NEW`
1. [20元中6715万彩票店老板发声](https://s.weibo.com/weibo?q=%2320%E5%85%83%E4%B8%AD6715%E4%B8%87%E5%BD%A9%E7%A5%A8%E5%BA%97%E8%80%81%E6%9D%BF%E5%8F%91%E5%A3%B0%23) `323.4K 🔥` `NEW`
1. [17部影片定档2026五一档](https://s.weibo.com/weibo?q=%2317%E9%83%A8%E5%BD%B1%E7%89%87%E5%AE%9A%E6%A1%A32026%E4%BA%94%E4%B8%80%E6%A1%A3%23) `308.4K 🔥` `NEW`
1. [男子求复合遭女友拒绝次日坠楼身亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%B1%82%E5%A4%8D%E5%90%88%E9%81%AD%E5%A5%B3%E5%8F%8B%E6%8B%92%E7%BB%9D%E6%AC%A1%E6%97%A5%E5%9D%A0%E6%A5%BC%E8%BA%AB%E4%BA%A1%23) `211.3K 🔥` `NEW`
1. [樊振东说现阶段没有强大的抗压能力 (Fan Zhendong said that he does not have strong ability to withstand pressure at this stage.)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%AF%B4%E7%8E%B0%E9%98%B6%E6%AE%B5%E6%B2%A1%E6%9C%89%E5%BC%BA%E5%A4%A7%E7%9A%84%E6%8A%97%E5%8E%8B%E8%83%BD%E5%8A%9B%23) `198.8K 🔥` `NEW`
1. [金莎孙丞潇领证](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E9%A2%86%E8%AF%81%23) `198.1K 🔥` `NEW`
1. [郑合惠子签约杨幂新公司](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E7%AD%BE%E7%BA%A6%E6%9D%A8%E5%B9%82%E6%96%B0%E5%85%AC%E5%8F%B8%23) `196.2K 🔥` `NEW`
1. [乳腺癌早期的5个警示症状](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E8%85%BA%E7%99%8C%E6%97%A9%E6%9C%9F%E7%9A%845%E4%B8%AA%E8%AD%A6%E7%A4%BA%E7%97%87%E7%8A%B6%23) `192.8K 🔥` `NEW`
1. [胃不好的人每天belike](https://s.weibo.com/weibo?q=%23%E8%83%83%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%AF%8F%E5%A4%A9belike%23) `191.7K 🔥` `NEW`
1. [月鳞绮纪胡闹了一天后的cp榜](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E8%83%A1%E9%97%B9%E4%BA%86%E4%B8%80%E5%A4%A9%E5%90%8E%E7%9A%84cp%E6%A6%9C%23) `178.9K 🔥` `NEW`
1. [男子骚扰已婚初中同学要求对方离婚](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%AA%9A%E6%89%B0%E5%B7%B2%E5%A9%9A%E5%88%9D%E4%B8%AD%E5%90%8C%E5%AD%A6%E8%A6%81%E6%B1%82%E5%AF%B9%E6%96%B9%E7%A6%BB%E5%A9%9A%23) `172.2K 🔥` `NEW`
1. [张予曦毕雯珺官宣新综艺](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%AF%95%E9%9B%AF%E7%8F%BA%E5%AE%98%E5%AE%A3%E6%96%B0%E7%BB%BC%E8%89%BA%23) `168.7K 🔥` `NEW`
1. [六小龄童马德华吊唁陈丽华](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%B0%8F%E9%BE%84%E7%AB%A5%E9%A9%AC%E5%BE%B7%E5%8D%8E%E5%90%8A%E5%94%81%E9%99%88%E4%B8%BD%E5%8D%8E%23) `160.0K 🔥` `NEW`
1. [35岁孕妇吃冰箱剩菜不幸去世](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%AD%95%E5%A6%87%E5%90%83%E5%86%B0%E7%AE%B1%E5%89%A9%E8%8F%9C%E4%B8%8D%E5%B9%B8%E5%8E%BB%E4%B8%96%23) `159.5K 🔥` `NEW`
1. [垫底辣孩回应恋情 (The hottie at the bottom responds to love)](https://s.weibo.com/weibo?q=%23%E5%9E%AB%E5%BA%95%E8%BE%A3%E5%AD%A9%E5%9B%9E%E5%BA%94%E6%81%8B%E6%83%85%23) `158.2K 🔥` `NEW`
1. [35岁女子身高154cm腹围159cm](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%A5%B3%E5%AD%90%E8%BA%AB%E9%AB%98154cm%E8%85%B9%E5%9B%B4159cm%23) `156.9K 🔥` `NEW`
1. [范世錡从5个月前埋梗角色](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%96%E9%8C%A1%E4%BB%8E5%E4%B8%AA%E6%9C%88%E5%89%8D%E5%9F%8B%E6%A2%97%E8%A7%92%E8%89%B2%23) `156.0K 🔥` `NEW`
1. [别让舆论逼垮樊振东](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E8%88%86%E8%AE%BA%E9%80%BC%E5%9E%AE%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `156.0K 🔥` `NEW`
1. [以色列议员公开辱骂特朗普](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%AE%AE%E5%91%98%E5%85%AC%E5%BC%80%E8%BE%B1%E9%AA%82%E7%89%B9%E6%9C%97%E6%99%AE%23) `155.5K 🔥` `NEW`
1. [81岁的潘迎紫](https://s.weibo.com/weibo?q=%2381%E5%B2%81%E7%9A%84%E6%BD%98%E8%BF%8E%E7%B4%AB%23) `141.7K 🔥` `NEW`
1. [妈妈帮女儿相亲赚了200多万](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%B8%AE%E5%A5%B3%E5%84%BF%E7%9B%B8%E4%BA%B2%E8%B5%9A%E4%BA%86200%E5%A4%9A%E4%B8%87%23) `138.2K 🔥` `NEW`
1. [张含韵37岁状态](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%90%AB%E9%9F%B537%E5%B2%81%E7%8A%B6%E6%80%81%23) `124.0K 🔥` `NEW`
1. [贾浅浅的论文是如何一路通关的](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%B5%85%E6%B5%85%E7%9A%84%E8%AE%BA%E6%96%87%E6%98%AF%E5%A6%82%E4%BD%95%E4%B8%80%E8%B7%AF%E9%80%9A%E5%85%B3%E7%9A%84%23) `124.0K 🔥` `NEW`
1. [金莎孙丞潇已完成婚前财产公证](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E5%B7%B2%E5%AE%8C%E6%88%90%E5%A9%9A%E5%89%8D%E8%B4%A2%E4%BA%A7%E5%85%AC%E8%AF%81%23) `123.9K 🔥` `NEW`
1. [乳腺结节有3个特征更易癌变 (Breast nodules have 3 characteristics that make them more likely to become cancerous)](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E8%85%BA%E7%BB%93%E8%8A%82%E6%9C%893%E4%B8%AA%E7%89%B9%E5%BE%81%E6%9B%B4%E6%98%93%E7%99%8C%E5%8F%98%23) `117.0K 🔥` `NEW`
1. [肠胃不好的人吃水果要有选择](https://s.weibo.com/weibo?q=%23%E8%82%A0%E8%83%83%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%BA%BA%E5%90%83%E6%B0%B4%E6%9E%9C%E8%A6%81%E6%9C%89%E9%80%89%E6%8B%A9%23) `112.4K 🔥` `NEW`
1. [包文婧说对第二胎没那么上心](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E8%AF%B4%E5%AF%B9%E7%AC%AC%E4%BA%8C%E8%83%8E%E6%B2%A1%E9%82%A3%E4%B9%88%E4%B8%8A%E5%BF%83%23) `112.2K 🔥` `NEW`
1. [NASA发布有史以来最清晰的月球照片](https://s.weibo.com/weibo?q=%23NASA%E5%8F%91%E5%B8%83%E6%9C%89%E5%8F%B2%E4%BB%A5%E6%9D%A5%E6%9C%80%E6%B8%85%E6%99%B0%E7%9A%84%E6%9C%88%E7%90%83%E7%85%A7%E7%89%87%23) `111.1K 🔥` `NEW`
1. [贾浅浅的贾平凹依赖症何时休](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%B5%85%E6%B5%85%E7%9A%84%E8%B4%BE%E5%B9%B3%E5%87%B9%E4%BE%9D%E8%B5%96%E7%97%87%E4%BD%95%E6%97%B6%E4%BC%91%23) `102.4K 🔥` `NEW`
1. [小学生的大问题 大学生的小问题](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E7%94%9F%E7%9A%84%E5%A4%A7%E9%97%AE%E9%A2%98%20%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%9A%84%E5%B0%8F%E9%97%AE%E9%A2%98%23) `102.3K 🔥` `NEW`
1. [一直以为养胃的吃法竟然会伤胃](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%BB%A5%E4%B8%BA%E5%85%BB%E8%83%83%E7%9A%84%E5%90%83%E6%B3%95%E7%AB%9F%E7%84%B6%E4%BC%9A%E4%BC%A4%E8%83%83%23) `96.0K 🔥` `NEW`
1. [樊振东不该承受输赢都不行的处境](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%8D%E8%AF%A5%E6%89%BF%E5%8F%97%E8%BE%93%E8%B5%A2%E9%83%BD%E4%B8%8D%E8%A1%8C%E7%9A%84%E5%A4%84%E5%A2%83%23) `95.7K 🔥` `NEW`
1. [张镇麟回应宁波男篮当场解约外援](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%95%87%E9%BA%9F%E5%9B%9E%E5%BA%94%E5%AE%81%E6%B3%A2%E7%94%B7%E7%AF%AE%E5%BD%93%E5%9C%BA%E8%A7%A3%E7%BA%A6%E5%A4%96%E6%8F%B4%23) `84.3K 🔥` `NEW`
1. [长汀车辆坠河事故家属发声](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%80%E8%BD%A6%E8%BE%86%E5%9D%A0%E6%B2%B3%E4%BA%8B%E6%95%85%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `82.5K 🔥` `NEW`
1. [打开试衣服新思路 (Open up new ideas for trying on clothes)](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%BC%80%E8%AF%95%E8%A1%A3%E6%9C%8D%E6%96%B0%E6%80%9D%E8%B7%AF%23) `75.0K 🔥` `NEW`
1. [金靖说明显感觉到张凌赫太火了 (Jin Jing said that he obviously felt that Zhang Linghe was too hot.)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E8%AF%B4%E6%98%8E%E6%98%BE%E6%84%9F%E8%A7%89%E5%88%B0%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%AA%E7%81%AB%E4%BA%86%23) `178.3K 🔥` `+26%`
1. [金子涵直播疑似求救 (Jin Jinhan's live broadcast is suspected of asking for help)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E7%9B%B4%E6%92%AD%E7%96%91%E4%BC%BC%E6%B1%82%E6%95%91%23) `159.1K 🔥` `+23%`
1. [金子涵否认是秦岚](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%90%A6%E8%AE%A4%E6%98%AF%E7%A7%A6%E5%B2%9A%23) `150.2K 🔥`
1. [疑似林凡发长文谈陆柯燃](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%9E%97%E5%87%A1%E5%8F%91%E9%95%BF%E6%96%87%E8%B0%88%E9%99%86%E6%9F%AF%E7%87%83%23) `115.4K 🔥`
1. [以色列政坛集体破防](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%94%BF%E5%9D%9B%E9%9B%86%E4%BD%93%E7%A0%B4%E9%98%B2%23) `194.3K 🔥` `-59%`
1. [猛禽飞入女子怀里依偎猫咪震惊](https://s.weibo.com/weibo?q=%23%E7%8C%9B%E7%A6%BD%E9%A3%9E%E5%85%A5%E5%A5%B3%E5%AD%90%E6%80%80%E9%87%8C%E4%BE%9D%E5%81%8E%E7%8C%AB%E5%92%AA%E9%9C%87%E6%83%8A%23) `112.1K 🔥` `-27%`
1. [以空袭黎巴嫩致254死1165伤](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E7%A9%BA%E8%A2%AD%E9%BB%8E%E5%B7%B4%E5%AB%A9%E8%87%B4254%E6%AD%BB1165%E4%BC%A4%23) `102.7K 🔥` `-51%`
1. [卤菜店使用四姐二字被索赔50万](https://s.weibo.com/weibo?q=%23%E5%8D%A4%E8%8F%9C%E5%BA%97%E4%BD%BF%E7%94%A8%E5%9B%9B%E5%A7%90%E4%BA%8C%E5%AD%97%E8%A2%AB%E7%B4%A2%E8%B5%9450%E4%B8%87%23) `86.7K 🔥` `-89%`
1. [宁波男篮当场裁掉外援 (Ningbo Men’s Basketball Team lays off foreign players on the spot)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E6%B3%A2%E7%94%B7%E7%AF%AE%E5%BD%93%E5%9C%BA%E8%A3%81%E6%8E%89%E5%A4%96%E6%8F%B4%23) `79.7K 🔥` `-93%`
1. [秦岚工作室声明](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A3%B0%E6%98%8E%23) `77.1K 🔥` `-42%`

Updated at 2026-04-09 13:27:22

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
