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

1. [日本7.7级地震 (Japan magnitude 7.7 earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `1.1M 🔥` `NEW`
1. [MCN回应女孩挪用1700万打赏主播](https://s.weibo.com/weibo?q=%23MCN%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A81700%E4%B8%87%E6%89%93%E8%B5%8F%E4%B8%BB%E6%92%AD%23) `785.3K 🔥` `NEW`
1. [当中文遇上锦绣山河的中国传统色](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%B8%AD%E6%96%87%E9%81%87%E4%B8%8A%E9%94%A6%E7%BB%A3%E5%B1%B1%E6%B2%B3%E7%9A%84%E4%B8%AD%E5%9B%BD%E4%BC%A0%E7%BB%9F%E8%89%B2%23) `598.3K 🔥` `NEW`
1. [全新坦克700上市42.8万元起](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%9D%A6%E5%85%8B700%E4%B8%8A%E5%B8%8242.8%E4%B8%87%E5%85%83%E8%B5%B7%23) `598.2K 🔥` `NEW`
1. [19岁女孩挪用1700万当榜一大姐](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A81700%E4%B8%87%E5%BD%93%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%A7%90%23) `597.7K 🔥` `NEW`
1. [各国网民线上嘲讽日本人](https://s.weibo.com/weibo?q=%23%E5%90%84%E5%9B%BD%E7%BD%91%E6%B0%91%E7%BA%BF%E4%B8%8A%E5%98%B2%E8%AE%BD%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `483.8K 🔥` `NEW`
1. [爱奇艺称AI艺人库仅是合作意愿](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%A7%B0AI%E8%89%BA%E4%BA%BA%E5%BA%93%E4%BB%85%E6%98%AF%E5%90%88%E4%BD%9C%E6%84%8F%E6%84%BF%23) `299.5K 🔥` `NEW`
1. [唐汉霄是音乐诗人吧](https://s.weibo.com/weibo?q=%23%E5%94%90%E6%B1%89%E9%9C%84%E6%98%AF%E9%9F%B3%E4%B9%90%E8%AF%97%E4%BA%BA%E5%90%A7%23) `299.5K 🔥` `NEW`
1. [逐玉的成功在于第三集续看率95%](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%9A%84%E6%88%90%E5%8A%9F%E5%9C%A8%E4%BA%8E%E7%AC%AC%E4%B8%89%E9%9B%86%E7%BB%AD%E7%9C%8B%E7%8E%8795%25%23) `299.5K 🔥` `NEW`
1. [持股市值不到7万元成第8大股东](https://s.weibo.com/weibo?q=%23%E6%8C%81%E8%82%A1%E5%B8%82%E5%80%BC%E4%B8%8D%E5%88%B07%E4%B8%87%E5%85%83%E6%88%90%E7%AC%AC8%E5%A4%A7%E8%82%A1%E4%B8%9C%23) `297.5K 🔥` `NEW`
1. [华为PuraXMax价格 (Huawei PuraXMax price)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXMax%E4%BB%B7%E6%A0%BC%23) `294.1K 🔥` `NEW`
1. [Bin哥VN三杀](https://s.weibo.com/weibo?q=%23Bin%E5%93%A5VN%E4%B8%89%E6%9D%80%23) `293.4K 🔥` `NEW`
1. [郭富城买了让女友痛哭流涕的礼物](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E4%B9%B0%E4%BA%86%E8%AE%A9%E5%A5%B3%E5%8F%8B%E7%97%9B%E5%93%AD%E6%B5%81%E6%B6%95%E7%9A%84%E7%A4%BC%E7%89%A9%23) `291.6K 🔥` `NEW`
1. [爱奇艺股价从46美元跌到1.4美元](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E8%82%A1%E4%BB%B7%E4%BB%8E46%E7%BE%8E%E5%85%83%E8%B7%8C%E5%88%B01.4%E7%BE%8E%E5%85%83%23) `289.0K 🔥` `NEW`
1. [叶祖新的脸怎么了](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%A5%96%E6%96%B0%E7%9A%84%E8%84%B8%E6%80%8E%E4%B9%88%E4%BA%86%23) `287.8K 🔥` `NEW`
1. [曝王楚然早就融了AI](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%97%A9%E5%B0%B1%E8%9E%8D%E4%BA%86AI%23) `285.6K 🔥` `NEW`
1. [宝妈拆快递剪断7个月宝宝食指](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E6%8B%86%E5%BF%AB%E9%80%92%E5%89%AA%E6%96%AD7%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E9%A3%9F%E6%8C%87%23) `284.5K 🔥` `NEW`
1. [田曦薇 想跑路可以直说](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%83%B3%E8%B7%91%E8%B7%AF%E5%8F%AF%E4%BB%A5%E7%9B%B4%E8%AF%B4%23) `282.5K 🔥` `NEW`
1. [爱奇艺](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%23) `281.1K 🔥` `NEW`
1. [长期使用空气炸锅的人都怎么样了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%BD%BF%E7%94%A8%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%9A%84%E4%BA%BA%E9%83%BD%E6%80%8E%E4%B9%88%E6%A0%B7%E4%BA%86%23) `280.3K 🔥` `NEW`
1. [备孕女子花2.3万治HPV最终子宫切除 (Woman trying to get pregnant spends RMB 23,000 on HPV treatment and ends up having hysterectomy)](https://s.weibo.com/weibo?q=%23%E5%A4%87%E5%AD%95%E5%A5%B3%E5%AD%90%E8%8A%B12.3%E4%B8%87%E6%B2%BBHPV%E6%9C%80%E7%BB%88%E5%AD%90%E5%AE%AB%E5%88%87%E9%99%A4%23) `279.9K 🔥` `NEW`
1. [马斯克被法国检方传唤](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E8%A2%AB%E6%B3%95%E5%9B%BD%E6%A3%80%E6%96%B9%E4%BC%A0%E5%94%A4%23) `279.0K 🔥` `NEW`
1. [易梦玲是瘦了还是do脸了](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E6%98%AF%E7%98%A6%E4%BA%86%E8%BF%98%E6%98%AFdo%E8%84%B8%E4%BA%86%23) `277.2K 🔥` `NEW`
1. [时代峰峻大楼被雷劈了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%A4%A7%E6%A5%BC%E8%A2%AB%E9%9B%B7%E5%8A%88%E4%BA%86%23) `276.4K 🔥` `NEW`
1. [天津市血液中心称已报警](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E5%B8%82%E8%A1%80%E6%B6%B2%E4%B8%AD%E5%BF%83%E7%A7%B0%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `275.8K 🔥` `NEW`
1. [招财俊宝 SK狐狸](https://s.weibo.com/weibo?q=%23%E6%8B%9B%E8%B4%A2%E4%BF%8A%E5%AE%9D%20SK%E7%8B%90%E7%8B%B8%23) `274.9K 🔥` `NEW`
1. [颖儿付辛博女儿近照](https://s.weibo.com/weibo?q=%23%E9%A2%96%E5%84%BF%E4%BB%98%E8%BE%9B%E5%8D%9A%E5%A5%B3%E5%84%BF%E8%BF%91%E7%85%A7%23) `273.9K 🔥` `NEW`
1. [东莞一男子把唇上肿瘤当痘痘挤了8年](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%8E%9E%E4%B8%80%E7%94%B7%E5%AD%90%E6%8A%8A%E5%94%87%E4%B8%8A%E8%82%BF%E7%98%A4%E5%BD%93%E7%97%98%E7%97%98%E6%8C%A4%E4%BA%868%E5%B9%B4%23) `273.2K 🔥` `NEW`
1. [爱奇艺顶级IP赚了118亿](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E9%A1%B6%E7%BA%A7IP%E8%B5%9A%E4%BA%86118%E4%BA%BF%23) `272.7K 🔥` `NEW`
1. [苏醒说AI艺人这方向真的对么](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E8%AF%B4AI%E8%89%BA%E4%BA%BA%E8%BF%99%E6%96%B9%E5%90%91%E7%9C%9F%E7%9A%84%E5%AF%B9%E4%B9%88%23) `261.9K 🔥` `NEW`
1. [1岁宝宝被单独留车内1小时几近虚脱 (1-year-old baby nearly collapsed after being left alone in car for an hour)](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%AE%9D%E5%AE%9D%E8%A2%AB%E5%8D%95%E7%8B%AC%E7%95%99%E8%BD%A6%E5%86%851%E5%B0%8F%E6%97%B6%E5%87%A0%E8%BF%91%E8%99%9A%E8%84%B1%23) `241.1K 🔥` `NEW`
1. [严浩翔是说唱巅峰对决赛事组](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%98%AF%E8%AF%B4%E5%94%B1%E5%B7%85%E5%B3%B0%E5%AF%B9%E5%86%B3%E8%B5%9B%E4%BA%8B%E7%BB%84%23) `228.1K 🔥` `NEW`
1. [宁德时代股东一口气转让238亿元股票](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E8%82%A1%E4%B8%9C%E4%B8%80%E5%8F%A3%E6%B0%94%E8%BD%AC%E8%AE%A9238%E4%BA%BF%E5%85%83%E8%82%A1%E7%A5%A8%23) `222.1K 🔥` `NEW`
1. [金智秀方回应哥哥家暴争议](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%96%B9%E5%9B%9E%E5%BA%94%E5%93%A5%E5%93%A5%E5%AE%B6%E6%9A%B4%E4%BA%89%E8%AE%AE%23) `203.7K 🔥` `NEW`
1. [林子烨被吐槽态度差](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%E8%A2%AB%E5%90%90%E6%A7%BD%E6%80%81%E5%BA%A6%E5%B7%AE%23) `200.5K 🔥` `NEW`
1. [幼童被父亲女友虐死前说我爱妈妈](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E8%A2%AB%E7%88%B6%E4%BA%B2%E5%A5%B3%E5%8F%8B%E8%99%90%E6%AD%BB%E5%89%8D%E8%AF%B4%E6%88%91%E7%88%B1%E5%A6%88%E5%A6%88%23) `183.7K 🔥` `NEW`
1. [弟弟去世赔50万5个姐姐起争执](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E5%8E%BB%E4%B8%96%E8%B5%9450%E4%B8%875%E4%B8%AA%E5%A7%90%E5%A7%90%E8%B5%B7%E4%BA%89%E6%89%A7%23) `179.1K 🔥` `NEW`
1. [汪东城凌晨刷礼物](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E4%B8%9C%E5%9F%8E%E5%87%8C%E6%99%A8%E5%88%B7%E7%A4%BC%E7%89%A9%23) `176.2K 🔥` `NEW`
1. [谢娜今天第一天联排乐队](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%BB%8A%E5%A4%A9%E7%AC%AC%E4%B8%80%E5%A4%A9%E8%81%94%E6%8E%92%E4%B9%90%E9%98%9F%23) `173.8K 🔥` `NEW`
1. [老人打赏花330万却交不起15元电费](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%89%93%E8%B5%8F%E8%8A%B1330%E4%B8%87%E5%8D%B4%E4%BA%A4%E4%B8%8D%E8%B5%B715%E5%85%83%E7%94%B5%E8%B4%B9%23) `160.3K 🔥` `NEW`
1. [爱奇艺综艺全面夯爆 (iQIYI Variety Shows Are Comprehensive)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%BB%BC%E8%89%BA%E5%85%A8%E9%9D%A2%E5%A4%AF%E7%88%86%23) `160.2K 🔥` `NEW`
1. [刘宇宁回应是否会被AI抢饭碗](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E4%BC%9A%E8%A2%ABAI%E6%8A%A2%E9%A5%AD%E7%A2%97%23) `159.0K 🔥` `NEW`
1. [虐死男友3岁儿子凶手称忍不住不打](https://s.weibo.com/weibo?q=%23%E8%99%90%E6%AD%BB%E7%94%B7%E5%8F%8B3%E5%B2%81%E5%84%BF%E5%AD%90%E5%87%B6%E6%89%8B%E7%A7%B0%E5%BF%8D%E4%B8%8D%E4%BD%8F%E4%B8%8D%E6%89%93%23) `150.2K 🔥` `NEW`
1. [日本未来一周可能发生同等规模地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%9C%AA%E6%9D%A5%E4%B8%80%E5%91%A8%E5%8F%AF%E8%83%BD%E5%8F%91%E7%94%9F%E5%90%8C%E7%AD%89%E8%A7%84%E6%A8%A1%E5%9C%B0%E9%9C%87%23) `113.0K 🔥` `NEW`
1. [爱奇艺 底线](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%20%E5%BA%95%E7%BA%BF%23) `112.5K 🔥` `NEW`
1. [丁俊晖晋级世锦赛16强](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96%E6%99%8B%E7%BA%A7%E4%B8%96%E9%94%A6%E8%B5%9B16%E5%BC%BA%23) `110.5K 🔥` `NEW`
1. [上海男篮vs辽宁男篮](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B7%E7%AF%AEvs%E8%BE%BD%E5%AE%81%E7%94%B7%E7%AF%AE%23) `110.5K 🔥` `NEW`
1. [丁俊晖回应将对阵赵心童](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96%E5%9B%9E%E5%BA%94%E5%B0%86%E5%AF%B9%E9%98%B5%E8%B5%B5%E5%BF%83%E7%AB%A5%23) `110.2K 🔥` `NEW`
1. [追王一博把71岁奶奶变成17岁了](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%8A%8A71%E5%B2%81%E5%A5%B6%E5%A5%B6%E5%8F%98%E6%88%9017%E5%B2%81%E4%BA%86%23) `106.6K 🔥` `NEW`
1. [AI版成何体统逐玉](https://s.weibo.com/weibo?q=%23AI%E7%89%88%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E9%80%90%E7%8E%89%23) `104.9K 🔥` `NEW`
1. [女数学家王虹获科学界奥斯卡 (Female mathematician Wang Hong wins Oscar in science)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%B0%E5%AD%A6%E5%AE%B6%E7%8E%8B%E8%99%B9%E8%8E%B7%E7%A7%91%E5%AD%A6%E7%95%8C%E5%A5%A5%E6%96%AF%E5%8D%A1%23) `100.8K 🔥` `NEW`
1. [华为非凡大师女表一分钟全部售罄](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%9D%9E%E5%87%A1%E5%A4%A7%E5%B8%88%E5%A5%B3%E8%A1%A8%E4%B8%80%E5%88%86%E9%92%9F%E5%85%A8%E9%83%A8%E5%94%AE%E7%BD%84%23) `100.1K 🔥` `NEW`

Updated at 2026-04-21 00:12:18

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
