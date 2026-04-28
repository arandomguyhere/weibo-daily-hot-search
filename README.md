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

1. [欧冠 (Champions League)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%23) `805.2K 🔥` `NEW`
1. [白冰上海买豪宅后一年搬进别墅](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E4%B8%8A%E6%B5%B7%E4%B9%B0%E8%B1%AA%E5%AE%85%E5%90%8E%E4%B8%80%E5%B9%B4%E6%90%AC%E8%BF%9B%E5%88%AB%E5%A2%85%23) `276.3K 🔥` `NEW`
1. [任敏被粉丝催着减肥](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E8%A2%AB%E7%B2%89%E4%B8%9D%E5%82%AC%E7%9D%80%E5%87%8F%E8%82%A5%23) `275.1K 🔥` `NEW`
1. [白冰被曝偷税后评论区被刷屏](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E8%A2%AB%E6%9B%9D%E5%81%B7%E7%A8%8E%E5%90%8E%E8%AF%84%E8%AE%BA%E5%8C%BA%E8%A2%AB%E5%88%B7%E5%B1%8F%23) `233.0K 🔥` `NEW`
1. [被强奸杀害女生房间仍保持原来样子](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%BC%BA%E5%A5%B8%E6%9D%80%E5%AE%B3%E5%A5%B3%E7%94%9F%E6%88%BF%E9%97%B4%E4%BB%8D%E4%BF%9D%E6%8C%81%E5%8E%9F%E6%9D%A5%E6%A0%B7%E5%AD%90%23) `165.2K 🔥` `NEW`
1. [韩汶栩 第四个嫂子](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%20%E7%AC%AC%E5%9B%9B%E4%B8%AA%E5%AB%82%E5%AD%90%23) `165.0K 🔥` `NEW`
1. [韩汶栩 ZXY雨](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%20ZXY%E9%9B%A8%23) `164.9K 🔥` `NEW`
1. [A股低迷原因找到了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BD%8E%E8%BF%B7%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `164.9K 🔥` `NEW`
1. [迪奥副总裁亲自迎接迪丽热巴](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A5%A5%E5%89%AF%E6%80%BB%E8%A3%81%E4%BA%B2%E8%87%AA%E8%BF%8E%E6%8E%A5%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `162.4K 🔥` `NEW`
1. [崔家溪退赛陈芋汐再换搭档](https://s.weibo.com/weibo?q=%23%E5%B4%94%E5%AE%B6%E6%BA%AA%E9%80%80%E8%B5%9B%E9%99%88%E8%8A%8B%E6%B1%90%E5%86%8D%E6%8D%A2%E6%90%AD%E6%A1%A3%23) `131.5K 🔥` `NEW`
1. [欧冠联赛 (Champions League)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E8%81%94%E8%B5%9B%23) `114.0K 🔥` `NEW`
1. [OpenAI爆出大利空](https://s.weibo.com/weibo?q=%23OpenAI%E7%88%86%E5%87%BA%E5%A4%A7%E5%88%A9%E7%A9%BA%23) `106.3K 🔥` `NEW`
1. [这竟然是变形计里的丽姐](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%AB%9F%E7%84%B6%E6%98%AF%E5%8F%98%E5%BD%A2%E8%AE%A1%E9%87%8C%E7%9A%84%E4%B8%BD%E5%A7%90%23) `105.4K 🔥` `NEW`
1. [权志龙将太郎吉赛尔合照](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99%E5%B0%86%E5%A4%AA%E9%83%8E%E5%90%89%E8%B5%9B%E5%B0%94%E5%90%88%E7%85%A7%23) `84.8K 🔥` `NEW`
1. [人越淡事越顺你越放松结果越好](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%B6%8A%E6%B7%A1%E4%BA%8B%E8%B6%8A%E9%A1%BA%E4%BD%A0%E8%B6%8A%E6%94%BE%E6%9D%BE%E7%BB%93%E6%9E%9C%E8%B6%8A%E5%A5%BD%23) `84.8K 🔥` `NEW`
1. [朋友圈改版](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%94%B9%E7%89%88%23) `2.1M 🔥` `+82%`
1. [五一全社会流动预计超15亿人次](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%85%A8%E7%A4%BE%E4%BC%9A%E6%B5%81%E5%8A%A8%E9%A2%84%E8%AE%A1%E8%B6%8515%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `726.0K 🔥` `+106%`
1. [飞猪五一免单送送送送送送送 (Fliggy’s May 1st free order, get it, get it, get it, get it)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E7%8C%AA%E4%BA%94%E4%B8%80%E5%85%8D%E5%8D%95%E9%80%81%E9%80%81%E9%80%81%E9%80%81%E9%80%81%E9%80%81%E9%80%81%23) `723.4K 🔥` `+117%`
1. [铁证 刘宇宁 (Ironclad evidence Liu Yuning)](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%AF%81%20%E5%88%98%E5%AE%87%E5%AE%81%23) `717.5K 🔥` `+149%`
1. [腾讯客服回应朋友圈排版变了](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%8E%92%E7%89%88%E5%8F%98%E4%BA%86%23) `717.0K 🔥` `+614%`
1. [21.99万起极狐问道V9预售 (Jihu Wendao V9 pre-sale starts at 219,900)](https://s.weibo.com/weibo?q=%2321.99%E4%B8%87%E8%B5%B7%E6%9E%81%E7%8B%90%E9%97%AE%E9%81%93V9%E9%A2%84%E5%94%AE%23) `373.3K 🔥` `+457%`
1. [玉龙雪山景区报警 (Jade Dragon Snow Mountain Scenic Area Alarm)](https://s.weibo.com/weibo?q=%23%E7%8E%89%E9%BE%99%E9%9B%AA%E5%B1%B1%E6%99%AF%E5%8C%BA%E6%8A%A5%E8%AD%A6%23) `369.5K 🔥` `+181%`
1. [第一次知道羽绒服能这么补 (This is the first time I know that down jackets can be so mend)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9F%A5%E9%81%93%E7%BE%BD%E7%BB%92%E6%9C%8D%E8%83%BD%E8%BF%99%E4%B9%88%E8%A1%A5%23) `339.3K 🔥` `+159%`
1. [普通人长见识最快的方式](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E9%95%BF%E8%A7%81%E8%AF%86%E6%9C%80%E5%BF%AB%E7%9A%84%E6%96%B9%E5%BC%8F%23) `292.8K 🔥` `+115%`
1. [不敢想i人住进去得有多幸福 (I can’t imagine how happy I will be living there.)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%95%A2%E6%83%B3i%E4%BA%BA%E4%BD%8F%E8%BF%9B%E5%8E%BB%E5%BE%97%E6%9C%89%E5%A4%9A%E5%B9%B8%E7%A6%8F%23) `278.6K 🔥` `+109%`
1. [33岁迪丽热巴状态](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%8A%B6%E6%80%81%23) `273.3K 🔥` `+227%`
1. [天云 (Tianyun)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E4%BA%91%23) `270.5K 🔥` `+145%`
1. [阿联酋退出石油输出国组织 (UAE withdraws from OPEC)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%81%94%E9%85%8B%E9%80%80%E5%87%BA%E7%9F%B3%E6%B2%B9%E8%BE%93%E5%87%BA%E5%9B%BD%E7%BB%84%E7%BB%87%23) `269.1K 🔥` `+127%`
1. [出轨女被情人杀害案发细节曝光](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A8%E5%A5%B3%E8%A2%AB%E6%83%85%E4%BA%BA%E6%9D%80%E5%AE%B3%E6%A1%88%E5%8F%91%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `214.0K 🔥` `+112%`
1. [银河左岸音乐节演出时间表](https://s.weibo.com/weibo?q=%23%E9%93%B6%E6%B2%B3%E5%B7%A6%E5%B2%B8%E9%9F%B3%E4%B9%90%E8%8A%82%E6%BC%94%E5%87%BA%E6%97%B6%E9%97%B4%E8%A1%A8%23) `165.3K 🔥` `+69%`
1. [黄子弘凡 银河左岸出场顺序](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%20%E9%93%B6%E6%B2%B3%E5%B7%A6%E5%B2%B8%E5%87%BA%E5%9C%BA%E9%A1%BA%E5%BA%8F%23) `165.3K 🔥` `+66%`
1. [阿联酋退出或是欧佩克终结的开始 (UAE withdrawal could be the beginning of the end for OPEC)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%81%94%E9%85%8B%E9%80%80%E5%87%BA%E6%88%96%E6%98%AF%E6%AC%A7%E4%BD%A9%E5%85%8B%E7%BB%88%E7%BB%93%E7%9A%84%E5%BC%80%E5%A7%8B%23) `165.2K 🔥` `+89%`
1. [男子许诺3万包养费骗4人发生关系](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AE%B8%E8%AF%BA3%E4%B8%87%E5%8C%85%E5%85%BB%E8%B4%B9%E9%AA%974%E4%BA%BA%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%23) `165.1K 🔥` `+69%`
1. [小钰回应谣言 (Xiaoyu responds to rumors)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%92%B0%E5%9B%9E%E5%BA%94%E8%B0%A3%E8%A8%80%23) `165.1K 🔥` `+54%`
1. [建议所有女性多做力量训练](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%89%80%E6%9C%89%E5%A5%B3%E6%80%A7%E5%A4%9A%E5%81%9A%E5%8A%9B%E9%87%8F%E8%AE%AD%E7%BB%83%23) `165.0K 🔥` `+70%`
1. [还以为重播何以笙箫默了](https://s.weibo.com/weibo?q=%23%E8%BF%98%E4%BB%A5%E4%B8%BA%E9%87%8D%E6%92%AD%E4%BD%95%E4%BB%A5%E7%AC%99%E7%AE%AB%E9%BB%98%E4%BA%86%23) `164.8K 🔥` `+89%`
1. [易烊千玺画的直立行走 (Walking upright painted by Yi Yang Qianxi)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%94%BB%E7%9A%84%E7%9B%B4%E7%AB%8B%E8%A1%8C%E8%B5%B0%23) `164.8K 🔥` `+94%`
1. [男子为娶情人逼妻子堕胎遭拒后杀妻 (Man kills wife after forcing her to have abortion to marry lover)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%BA%E5%A8%B6%E6%83%85%E4%BA%BA%E9%80%BC%E5%A6%BB%E5%AD%90%E5%A0%95%E8%83%8E%E9%81%AD%E6%8B%92%E5%90%8E%E6%9D%80%E5%A6%BB%23) `164.8K 🔥` `+86%`
1. [断崖式垮脸其实就是水毒](https://s.weibo.com/weibo?q=%23%E6%96%AD%E5%B4%96%E5%BC%8F%E5%9E%AE%E8%84%B8%E5%85%B6%E5%AE%9E%E5%B0%B1%E6%98%AF%E6%B0%B4%E6%AF%92%23) `158.5K 🔥` `+55%`
1. [员工厕所玩手机照片被发400人群](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%8E%95%E6%89%80%E7%8E%A9%E6%89%8B%E6%9C%BA%E7%85%A7%E7%89%87%E8%A2%AB%E5%8F%91400%E4%BA%BA%E7%BE%A4%23) `145.0K 🔥` `+47%`
1. [黄金跌透了吗 (Has gold fallen through the cracks?)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E9%80%8F%E4%BA%86%E5%90%97%23) `118.1K 🔥` `+36%`
1. [爱情没有神话 秦雯](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%B2%A1%E6%9C%89%E7%A5%9E%E8%AF%9D%20%E7%A7%A6%E9%9B%AF%23) `84.7K 🔥` `+219%`
1. [李小冉清唱惊鸿一面 (Li Xiaoran sings a cappella and is amazing)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%B8%85%E5%94%B1%E6%83%8A%E9%B8%BF%E4%B8%80%E9%9D%A2%23) `84.7K 🔥` `+69%`
1. [佳偶天成 念无双 (A match made in heaven Nian Wushuang)](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%20%E5%BF%B5%E6%97%A0%E5%8F%8C%23) `84.7K 🔥` `+70%`
1. [情绪压力对一个人体态的影响](https://s.weibo.com/weibo?q=%23%E6%83%85%E7%BB%AA%E5%8E%8B%E5%8A%9B%E5%AF%B9%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%BD%93%E6%80%81%E7%9A%84%E5%BD%B1%E5%93%8D%23) `464.2K 🔥`
1. [单亲爸爸因长相血型查出儿子非亲生](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BA%B2%E7%88%B8%E7%88%B8%E5%9B%A0%E9%95%BF%E7%9B%B8%E8%A1%80%E5%9E%8B%E6%9F%A5%E5%87%BA%E5%84%BF%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `103.0K 🔥`
1. [变形计农村主人公丽姐港大研学 (The rural protagonist Li Jie of Metamorphosis is studying at the University of Hong Kong)](https://s.weibo.com/weibo?q=%23%E5%8F%98%E5%BD%A2%E8%AE%A1%E5%86%9C%E6%9D%91%E4%B8%BB%E4%BA%BA%E5%85%AC%E4%B8%BD%E5%A7%90%E6%B8%AF%E5%A4%A7%E7%A0%94%E5%AD%A6%23) `99.2K 🔥`
1. [副校长在工作群发亲密信息后撤回](https://s.weibo.com/weibo?q=%23%E5%89%AF%E6%A0%A1%E9%95%BF%E5%9C%A8%E5%B7%A5%E4%BD%9C%E7%BE%A4%E5%8F%91%E4%BA%B2%E5%AF%86%E4%BF%A1%E6%81%AF%E5%90%8E%E6%92%A4%E5%9B%9E%23) `98.0K 🔥`
1. [小狗唯一的朋友小猫去世了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%94%AF%E4%B8%80%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%B0%8F%E7%8C%AB%E5%8E%BB%E4%B8%96%E4%BA%86%23) `95.5K 🔥`
1. [身体你饿了就直接吃我的脂肪](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E4%BD%A0%E9%A5%BF%E4%BA%86%E5%B0%B1%E7%9B%B4%E6%8E%A5%E5%90%83%E6%88%91%E7%9A%84%E8%84%82%E8%82%AA%23) `94.0K 🔥`
1. [妹妹冒用双胞胎姐姐证件](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E5%86%92%E7%94%A8%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A7%90%E5%A7%90%E8%AF%81%E4%BB%B6%23) `87.6K 🔥`
1. [乐道L80 (Letao L80)](https://s.weibo.com/weibo?q=%23%E4%B9%90%E9%81%93L80%23) `84.7K 🔥`

Updated at 2026-04-29 07:33:37

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
