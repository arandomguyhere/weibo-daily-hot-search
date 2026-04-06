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

1. [乘风2026一公选歌组队 (Chengfeng 2026 Yi Gong selects songs to form a team)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%80%E5%85%AC%E9%80%89%E6%AD%8C%E7%BB%84%E9%98%9F%23) `1.1M 🔥` `NEW`
1. [知情人透露郭艾伦被骗细节](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E6%83%85%E4%BA%BA%E9%80%8F%E9%9C%B2%E9%83%AD%E8%89%BE%E4%BC%A6%E8%A2%AB%E9%AA%97%E7%BB%86%E8%8A%82%23) `806.7K 🔥` `NEW`
1. [4月草木中都是思念](https://s.weibo.com/weibo?q=%234%E6%9C%88%E8%8D%89%E6%9C%A8%E4%B8%AD%E9%83%BD%E6%98%AF%E6%80%9D%E5%BF%B5%23) `607.1K 🔥` `NEW`
1. [女子住酒店发现装饰画后是门](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%85%92%E5%BA%97%E5%8F%91%E7%8E%B0%E8%A3%85%E9%A5%B0%E7%94%BB%E5%90%8E%E6%98%AF%E9%97%A8%23) `291.6K 🔥` `NEW`
1. [许昕说王楚钦是国乒一号没人能撼动](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%98%AF%E5%9B%BD%E4%B9%92%E4%B8%80%E5%8F%B7%E6%B2%A1%E4%BA%BA%E8%83%BD%E6%92%BC%E5%8A%A8%23) `251.7K 🔥` `NEW`
1. [被酒店标记成水牛了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%85%92%E5%BA%97%E6%A0%87%E8%AE%B0%E6%88%90%E6%B0%B4%E7%89%9B%E4%BA%86%23) `246.1K 🔥` `NEW`
1. [女子为引流造谣西昌发生刑案被拘](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%BA%E5%BC%95%E6%B5%81%E9%80%A0%E8%B0%A3%E8%A5%BF%E6%98%8C%E5%8F%91%E7%94%9F%E5%88%91%E6%A1%88%E8%A2%AB%E6%8B%98%23) `241.6K 🔥` `NEW`
1. [伊朗5名教授60多名大学生遭袭身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%975%E5%90%8D%E6%95%99%E6%8E%8860%E5%A4%9A%E5%90%8D%E5%A4%A7%E5%AD%A6%E7%94%9F%E9%81%AD%E8%A2%AD%E8%BA%AB%E4%BA%A1%23) `233.3K 🔥` `NEW`
1. [正午阳光首部正统武侠剧雨霖铃](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E9%A6%96%E9%83%A8%E6%AD%A3%E7%BB%9F%E6%AD%A6%E4%BE%A0%E5%89%A7%E9%9B%A8%E9%9C%96%E9%93%83%23) `210.2K 🔥` `NEW`
1. [借笔友1200元30年后还2万被拒](https://s.weibo.com/weibo?q=%23%E5%80%9F%E7%AC%94%E5%8F%8B1200%E5%85%8330%E5%B9%B4%E5%90%8E%E8%BF%982%E4%B8%87%E8%A2%AB%E6%8B%92%23) `175.9K 🔥` `NEW`
1. [网友扫墓看到李副官演员墓碑 (Netizens scanned the grave and saw the tombstone of actor Li Adjutant)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%89%AB%E5%A2%93%E7%9C%8B%E5%88%B0%E6%9D%8E%E5%89%AF%E5%AE%98%E6%BC%94%E5%91%98%E5%A2%93%E7%A2%91%23) `170.7K 🔥` `NEW`
1. [机票高铁双双涨价](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E7%A5%A8%E9%AB%98%E9%93%81%E5%8F%8C%E5%8F%8C%E6%B6%A8%E4%BB%B7%23) `166.1K 🔥` `NEW`
1. [偶遇张杰王源一起打高尔夫](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%BC%A0%E6%9D%B0%E7%8E%8B%E6%BA%90%E4%B8%80%E8%B5%B7%E6%89%93%E9%AB%98%E5%B0%94%E5%A4%AB%23) `163.5K 🔥` `NEW`
1. [李副官扮演者15年前因癌症离世](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%89%AF%E5%AE%98%E6%89%AE%E6%BC%94%E8%80%8515%E5%B9%B4%E5%89%8D%E5%9B%A0%E7%99%8C%E7%97%87%E7%A6%BB%E4%B8%96%23) `161.9K 🔥` `NEW`
1. [六旬老人花119万整容后觉得没效果](https://s.weibo.com/weibo?q=%23%E5%85%AD%E6%97%AC%E8%80%81%E4%BA%BA%E8%8A%B1119%E4%B8%87%E6%95%B4%E5%AE%B9%E5%90%8E%E8%A7%89%E5%BE%97%E6%B2%A1%E6%95%88%E6%9E%9C%23) `160.4K 🔥` `NEW`
1. [没想到是低山臭水遇知音](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%83%B3%E5%88%B0%E6%98%AF%E4%BD%8E%E5%B1%B1%E8%87%AD%E6%B0%B4%E9%81%87%E7%9F%A5%E9%9F%B3%23) `136.3K 🔥` `NEW`
1. [被滞留玉龙雪山游客已安全下山](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%BB%9E%E7%95%99%E7%8E%89%E9%BE%99%E9%9B%AA%E5%B1%B1%E6%B8%B8%E5%AE%A2%E5%B7%B2%E5%AE%89%E5%85%A8%E4%B8%8B%E5%B1%B1%23) `123.4K 🔥` `NEW`
1. [王楚钦掌镜下的孙颖莎](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%8E%8C%E9%95%9C%E4%B8%8B%E7%9A%84%E5%AD%99%E9%A2%96%E8%8E%8E%23) `122.8K 🔥` `NEW`
1. [伊朗称或将封锁曼德海峡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%88%96%E5%B0%86%E5%B0%81%E9%94%81%E6%9B%BC%E5%BE%B7%E6%B5%B7%E5%B3%A1%23) `114.0K 🔥` `NEW`
1. [刷牙满屋子乱走](https://s.weibo.com/weibo?q=%23%E5%88%B7%E7%89%99%E6%BB%A1%E5%B1%8B%E5%AD%90%E4%B9%B1%E8%B5%B0%23) `110.9K 🔥` `NEW`
1. [莫氏鸡煲爆火鸡没断货酒先没了 (Moh's Chicken Claypot Exploded Turkey is out of stock, but the wine is out first.)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E7%88%86%E7%81%AB%E9%B8%A1%E6%B2%A1%E6%96%AD%E8%B4%A7%E9%85%92%E5%85%88%E6%B2%A1%E4%BA%86%23) `108.5K 🔥` `NEW`
1. [伊朗打了就跑战术让美军头疼](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%93%E4%BA%86%E5%B0%B1%E8%B7%91%E6%88%98%E6%9C%AF%E8%AE%A9%E7%BE%8E%E5%86%9B%E5%A4%B4%E7%96%BC%23) `107.8K 🔥` `NEW`
1. [官方回应滇池出现绿浪](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%BB%87%E6%B1%A0%E5%87%BA%E7%8E%B0%E7%BB%BF%E6%B5%AA%23) `107.7K 🔥` `NEW`
1. [狗狗像端菜一样被端上来了](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E5%83%8F%E7%AB%AF%E8%8F%9C%E4%B8%80%E6%A0%B7%E8%A2%AB%E7%AB%AF%E4%B8%8A%E6%9D%A5%E4%BA%86%23) `107.7K 🔥` `NEW`
1. [桃黑黑承诺补一年皮肤](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E6%89%BF%E8%AF%BA%E8%A1%A5%E4%B8%80%E5%B9%B4%E7%9A%AE%E8%82%A4%23) `106.7K 🔥` `NEW`
1. [A股73.18亿股限售股将解禁](https://s.weibo.com/weibo?q=%23A%E8%82%A173.18%E4%BA%BF%E8%82%A1%E9%99%90%E5%94%AE%E8%82%A1%E5%B0%86%E8%A7%A3%E7%A6%81%23) `101.4K 🔥` `NEW`
1. [古惑仔耀哥扮演者李道瑜去世](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E6%83%91%E4%BB%94%E8%80%80%E5%93%A5%E6%89%AE%E6%BC%94%E8%80%85%E6%9D%8E%E9%81%93%E7%91%9C%E5%8E%BB%E4%B8%96%23) `100.6K 🔥` `NEW`
1. [贺娇龙生前采访泪流满面](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%A8%87%E9%BE%99%E7%94%9F%E5%89%8D%E9%87%87%E8%AE%BF%E6%B3%AA%E6%B5%81%E6%BB%A1%E9%9D%A2%23) `96.2K 🔥` `NEW`
1. [孙颖莎与何卓佳分享奖杯](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%8E%E4%BD%95%E5%8D%93%E4%BD%B3%E5%88%86%E4%BA%AB%E5%A5%96%E6%9D%AF%23) `89.3K 🔥` `NEW`
1. [王楚钦开启左手将黄金时代](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%BC%80%E5%90%AF%E5%B7%A6%E6%89%8B%E5%B0%86%E9%BB%84%E9%87%91%E6%97%B6%E4%BB%A3%23) `87.3K 🔥` `NEW`
1. [欧洲开始清醒 (Europe is waking up)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E5%BC%80%E5%A7%8B%E6%B8%85%E9%86%92%23) `86.6K 🔥` `NEW`
1. [中国驻沙特大使馆发布重要提醒](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A9%BB%E6%B2%99%E7%89%B9%E5%A4%A7%E4%BD%BF%E9%A6%86%E5%8F%91%E5%B8%83%E9%87%8D%E8%A6%81%E6%8F%90%E9%86%92%23) `83.4K 🔥` `NEW`
1. [王楚钦孙颖莎闪耀澳门市政署大楼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E9%97%AA%E8%80%80%E6%BE%B3%E9%97%A8%E5%B8%82%E6%94%BF%E7%BD%B2%E5%A4%A7%E6%A5%BC%23) `81.7K 🔥` `NEW`
1. [库里复出](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E5%A4%8D%E5%87%BA%23) `80.6K 🔥` `NEW`
1. [王皓偷偷抹泪](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E5%81%B7%E5%81%B7%E6%8A%B9%E6%B3%AA%23) `80.3K 🔥` `NEW`
1. [许昕一句盛世左手谁哭了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E4%B8%80%E5%8F%A5%E7%9B%9B%E4%B8%96%E5%B7%A6%E6%89%8B%E8%B0%81%E5%93%AD%E4%BA%86%23) `77.1K 🔥` `NEW`
1. [果然祖坟冒青烟也有累的时候](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E7%A5%96%E5%9D%9F%E5%86%92%E9%9D%92%E7%83%9F%E4%B9%9F%E6%9C%89%E7%B4%AF%E7%9A%84%E6%97%B6%E5%80%99%23) `75.4K 🔥` `NEW`
1. [乘风直播风味录播](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E7%9B%B4%E6%92%AD%E9%A3%8E%E5%91%B3%E5%BD%95%E6%92%AD%23) `75.0K 🔥` `NEW`
1. [伊称特朗普的鲁莽正将美国拖入地狱](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E7%9A%84%E9%B2%81%E8%8E%BD%E6%AD%A3%E5%B0%86%E7%BE%8E%E5%9B%BD%E6%8B%96%E5%85%A5%E5%9C%B0%E7%8B%B1%23) `174.0K 🔥` `+64%`
1. [NINEPERCENT出道八周年](https://s.weibo.com/weibo?q=%23NINEPERCENT%E5%87%BA%E9%81%93%E5%85%AB%E5%91%A8%E5%B9%B4%23) `159.7K 🔥` `+62%`
1. [女子6.8万新买紫貂遭朋友擅自穿毁 (A woman bought a new sable worth RMB 68,000, but her friend wore it on without permission.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%906.8%E4%B8%87%E6%96%B0%E4%B9%B0%E7%B4%AB%E8%B2%82%E9%81%AD%E6%9C%8B%E5%8F%8B%E6%93%85%E8%87%AA%E7%A9%BF%E6%AF%81%23) `128.2K 🔥` `+30%`
1. [桃黑黑道歉 (Taoheihei apologizes)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E9%81%93%E6%AD%89%23) `172.4K 🔥` `-25%`
1. [女主持人也得乘风破浪吗](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%8C%81%E4%BA%BA%E4%B9%9F%E5%BE%97%E4%B9%98%E9%A3%8E%E7%A0%B4%E6%B5%AA%E5%90%97%23) `167.7K 🔥` `-56%`
1. [Rookie和新女友一起逛街](https://s.weibo.com/weibo?q=%23Rookie%E5%92%8C%E6%96%B0%E5%A5%B3%E5%8F%8B%E4%B8%80%E8%B5%B7%E9%80%9B%E8%A1%97%23) `126.8K 🔥` `-25%`
1. [北京警方提醒苹果手机用户 (Beijing police warn Apple phone users)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E8%AD%A6%E6%96%B9%E6%8F%90%E9%86%92%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%E7%94%A8%E6%88%B7%23) `118.5K 🔥` `-89%`
1. [金银再下跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E5%86%8D%E4%B8%8B%E8%B7%8C%23) `111.8K 🔥` `-52%`
1. [郭艾伦被诈骗近千万 (Guo Ailun was defrauded of nearly 10 million yuan)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E8%A2%AB%E8%AF%88%E9%AA%97%E8%BF%91%E5%8D%83%E4%B8%87%23) `107.9K 🔥` `-53%`
1. [周杰伦3小时演唱会实唱不足90分钟 (Jay Chou's 3-hour concert actually performed for less than 90 minutes)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A63%E5%B0%8F%E6%97%B6%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%9E%E5%94%B1%E4%B8%8D%E8%B6%B390%E5%88%86%E9%92%9F%23) `82.7K 🔥` `-64%`
1. [日本整形医生趁麻醉性侵21名女性](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%95%B4%E5%BD%A2%E5%8C%BB%E7%94%9F%E8%B6%81%E9%BA%BB%E9%86%89%E6%80%A7%E4%BE%B521%E5%90%8D%E5%A5%B3%E6%80%A7%23) `81.7K 🔥` `-51%`
1. [陕西地震 (Shaanxi earthquake)](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF%E5%9C%B0%E9%9C%87%23) `79.0K 🔥` `-69%`
1. [嗯哼快和霍思燕一样高了](https://s.weibo.com/weibo?q=%23%E5%97%AF%E5%93%BC%E5%BF%AB%E5%92%8C%E9%9C%8D%E6%80%9D%E7%87%95%E4%B8%80%E6%A0%B7%E9%AB%98%E4%BA%86%23) `74.4K 🔥` `-38%`

Updated at 2026-04-06 12:37:42

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
