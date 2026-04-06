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

1. [北京警方提醒苹果手机用户 (Beijing police warn Apple phone users)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E8%AD%A6%E6%96%B9%E6%8F%90%E9%86%92%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%E7%94%A8%E6%88%B7%23) `1.1M 🔥` `NEW`
1. [女主持人也得乘风破浪吗](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%8C%81%E4%BA%BA%E4%B9%9F%E5%BE%97%E4%B9%98%E9%A3%8E%E7%A0%B4%E6%B5%AA%E5%90%97%23) `378.5K 🔥` `NEW`
1. [伊朗2天击落12架美军战机](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%972%E5%A4%A9%E5%87%BB%E8%90%BD12%E6%9E%B6%E7%BE%8E%E5%86%9B%E6%88%98%E6%9C%BA%23) `271.5K 🔥` `NEW`
1. [高铁上孩童吵闹大学生怒吼瞬间安静](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E4%B8%8A%E5%AD%A9%E7%AB%A5%E5%90%B5%E9%97%B9%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%80%92%E5%90%BC%E7%9E%AC%E9%97%B4%E5%AE%89%E9%9D%99%23) `255.1K 🔥` `NEW`
1. [25岁天才少女拿下超14亿融资](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%A4%A9%E6%89%8D%E5%B0%91%E5%A5%B3%E6%8B%BF%E4%B8%8B%E8%B6%8514%E4%BA%BF%E8%9E%8D%E8%B5%84%23) `249.0K 🔥` `NEW`
1. [谢娜垫话直至转场完成](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9E%AB%E8%AF%9D%E7%9B%B4%E8%87%B3%E8%BD%AC%E5%9C%BA%E5%AE%8C%E6%88%90%23) `231.4K 🔥` `NEW`
1. [桃黑黑道歉](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E9%81%93%E6%AD%89%23) `231.3K 🔥` `NEW`
1. [黄金抛售潮](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%8A%9B%E5%94%AE%E6%BD%AE%23) `230.9K 🔥` `NEW`
1. [金银再下跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E5%86%8D%E4%B8%8B%E8%B7%8C%23) `230.7K 🔥` `NEW`
1. [王楚钦首夺男单冠军的含金量有多高](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%A6%96%E5%A4%BA%E7%94%B7%E5%8D%95%E5%86%A0%E5%86%9B%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E6%9C%89%E5%A4%9A%E9%AB%98%23) `206.3K 🔥` `NEW`
1. [女子烈士陵园遇2老人拦车求助 (Two old men stopped the car and asked for help at the Female Martyrs Cemetery)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%83%88%E5%A3%AB%E9%99%B5%E5%9B%AD%E9%81%872%E8%80%81%E4%BA%BA%E6%8B%A6%E8%BD%A6%E6%B1%82%E5%8A%A9%23) `172.1K 🔥` `NEW`
1. [伊朗这招让美国很难受](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%BF%99%E6%8B%9B%E8%AE%A9%E7%BE%8E%E5%9B%BD%E5%BE%88%E9%9A%BE%E5%8F%97%23) `133.1K 🔥` `NEW`
1. [特鲁姆普回应被赵心童击败](https://s.weibo.com/weibo?q=%23%E7%89%B9%E9%B2%81%E5%A7%86%E6%99%AE%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%B5%B5%E5%BF%83%E7%AB%A5%E5%87%BB%E8%B4%A5%23) `125.5K 🔥` `NEW`
1. [嗯哼快和霍思燕一样高了](https://s.weibo.com/weibo?q=%23%E5%97%AF%E5%93%BC%E5%BF%AB%E5%92%8C%E9%9C%8D%E6%80%9D%E7%87%95%E4%B8%80%E6%A0%B7%E9%AB%98%E4%BA%86%23) `120.8K 🔥` `NEW`
1. [孙颖莎王楚钦澳门城市宣传照](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%BE%B3%E9%97%A8%E5%9F%8E%E5%B8%82%E5%AE%A3%E4%BC%A0%E7%85%A7%23) `114.4K 🔥` `NEW`
1. [吴慷仁这段分手戏夯爆了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%85%B7%E4%BB%81%E8%BF%99%E6%AE%B5%E5%88%86%E6%89%8B%E6%88%8F%E5%A4%AF%E7%88%86%E4%BA%86%23) `111.3K 🔥` `NEW`
1. [33岁程序员午休健身猝死改判工伤](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E5%8D%88%E4%BC%91%E5%81%A5%E8%BA%AB%E7%8C%9D%E6%AD%BB%E6%94%B9%E5%88%A4%E5%B7%A5%E4%BC%A4%23) `107.0K 🔥` `NEW`
1. [伊称特朗普的鲁莽正将美国拖入地狱](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E7%9A%84%E9%B2%81%E8%8E%BD%E6%AD%A3%E5%B0%86%E7%BE%8E%E5%9B%BD%E6%8B%96%E5%85%A5%E5%9C%B0%E7%8B%B1%23) `105.8K 🔥` `NEW`
1. [SJ承诺对坠落3人提供治疗支持](https://s.weibo.com/weibo?q=%23SJ%E6%89%BF%E8%AF%BA%E5%AF%B9%E5%9D%A0%E8%90%BD3%E4%BA%BA%E6%8F%90%E4%BE%9B%E6%B2%BB%E7%96%97%E6%94%AF%E6%8C%81%23) `103.6K 🔥` `NEW`
1. [NINEPERCENT出道八周年](https://s.weibo.com/weibo?q=%23NINEPERCENT%E5%87%BA%E9%81%93%E5%85%AB%E5%91%A8%E5%B9%B4%23) `98.8K 🔥` `NEW`
1. [女子6.8万新买紫貂遭朋友擅自穿毁 (A woman bought a new sable worth RMB 68,000, but her friend wore it on without permission.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%906.8%E4%B8%87%E6%96%B0%E4%B9%B0%E7%B4%AB%E8%B2%82%E9%81%AD%E6%9C%8B%E5%8F%8B%E6%93%85%E8%87%AA%E7%A9%BF%E6%AF%81%23) `98.5K 🔥` `NEW`
1. [现货黄金失守4610美元](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%E5%A4%B1%E5%AE%884610%E7%BE%8E%E5%85%83%23) `97.4K 🔥` `NEW`
1. [原来天地救了无支祁](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A9%E5%9C%B0%E6%95%91%E4%BA%86%E6%97%A0%E6%94%AF%E7%A5%81%23) `94.2K 🔥` `NEW`
1. [亲妈被孩子继母打折5根肋骨](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%A6%88%E8%A2%AB%E5%AD%A9%E5%AD%90%E7%BB%A7%E6%AF%8D%E6%89%93%E6%8A%985%E6%A0%B9%E8%82%8B%E9%AA%A8%23) `93.0K 🔥` `NEW`
1. [张雪打假](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%89%93%E5%81%87%23) `90.8K 🔥` `NEW`
1. [中蒙边境火情](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%92%99%E8%BE%B9%E5%A2%83%E7%81%AB%E6%83%85%23) `88.6K 🔥` `NEW`
1. [孙颖莎依旧把吉祥物放奖杯里](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BE%9D%E6%97%A7%E6%8A%8A%E5%90%89%E7%A5%A5%E7%89%A9%E6%94%BE%E5%A5%96%E6%9D%AF%E9%87%8C%23) `87.0K 🔥` `NEW`
1. [谈莉娜孕晚期去看周杰伦演唱会](https://s.weibo.com/weibo?q=%23%E8%B0%88%E8%8E%89%E5%A8%9C%E5%AD%95%E6%99%9A%E6%9C%9F%E5%8E%BB%E7%9C%8B%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `84.7K 🔥` `NEW`
1. [27万拍下摊位卖猪蹄老板被跟风截胡](https://s.weibo.com/weibo?q=%2327%E4%B8%87%E6%8B%8D%E4%B8%8B%E6%91%8A%E4%BD%8D%E5%8D%96%E7%8C%AA%E8%B9%84%E8%80%81%E6%9D%BF%E8%A2%AB%E8%B7%9F%E9%A3%8E%E6%88%AA%E8%83%A1%23) `82.6K 🔥` `NEW`
1. [罗云熙到底跟多少人合影了](https://s.weibo.com/weibo?q=%23%E7%BD%97%E4%BA%91%E7%86%99%E5%88%B0%E5%BA%95%E8%B7%9F%E5%A4%9A%E5%B0%91%E4%BA%BA%E5%90%88%E5%BD%B1%E4%BA%86%23) `81.8K 🔥` `NEW`
1. [王楚钦谈当今男乒格局 (Wang Chuqin talks about the current landscape of men's table tennis)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B0%88%E5%BD%93%E4%BB%8A%E7%94%B7%E4%B9%92%E6%A0%BC%E5%B1%80%23) `81.7K 🔥` `NEW`
1. [贾浅浅的学术争议到底有多少](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%B5%85%E6%B5%85%E7%9A%84%E5%AD%A6%E6%9C%AF%E4%BA%89%E8%AE%AE%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E5%B0%91%23) `80.3K 🔥` `NEW`
1. [王楚钦被搀扶着下台阶](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%A2%AB%E6%90%80%E6%89%B6%E7%9D%80%E4%B8%8B%E5%8F%B0%E9%98%B6%23) `80.2K 🔥` `NEW`
1. [8个主要产油国决定5月增产](https://s.weibo.com/weibo?q=%238%E4%B8%AA%E4%B8%BB%E8%A6%81%E4%BA%A7%E6%B2%B9%E5%9B%BD%E5%86%B3%E5%AE%9A5%E6%9C%88%E5%A2%9E%E4%BA%A7%23) `76.1K 🔥` `NEW`
1. [SJ首尔演唱会栏杆断裂粉丝坠落](https://s.weibo.com/weibo?q=%23SJ%E9%A6%96%E5%B0%94%E6%BC%94%E5%94%B1%E4%BC%9A%E6%A0%8F%E6%9D%86%E6%96%AD%E8%A3%82%E7%B2%89%E4%B8%9D%E5%9D%A0%E8%90%BD%23) `373.6K 🔥` `+150%`
1. [陕西地震 (Shaanxi earthquake)](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF%E5%9C%B0%E9%9C%87%23) `252.1K 🔥` `+193%`
1. [博物馆回应曹操墓前摆满布洛芬 (Museum responds to Cao Cao’s tomb being filled with ibuprofen)](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E7%89%A9%E9%A6%86%E5%9B%9E%E5%BA%94%E6%9B%B9%E6%93%8D%E5%A2%93%E5%89%8D%E6%91%86%E6%BB%A1%E5%B8%83%E6%B4%9B%E8%8A%AC%23) `231.1K 🔥` `+49%`
1. [黄晓明已去交警部门接受处罚 (Huang Xiaoming has gone to the traffic police department to accept punishment)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%B7%B2%E5%8E%BB%E4%BA%A4%E8%AD%A6%E9%83%A8%E9%97%A8%E6%8E%A5%E5%8F%97%E5%A4%84%E7%BD%9A%23) `230.7K 🔥` `+51%`
1. [伊朗称美军为遮羞轰炸被击落军机](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E5%86%9B%E4%B8%BA%E9%81%AE%E7%BE%9E%E8%BD%B0%E7%82%B8%E8%A2%AB%E5%87%BB%E8%90%BD%E5%86%9B%E6%9C%BA%23) `174.5K 🔥` `+101%`
1. [Rookie和新女友一起逛街](https://s.weibo.com/weibo?q=%23Rookie%E5%92%8C%E6%96%B0%E5%A5%B3%E5%8F%8B%E4%B8%80%E8%B5%B7%E9%80%9B%E8%A1%97%23) `169.7K 🔥` `+81%`
1. [日本整形医生趁麻醉性侵21名女性](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%95%B4%E5%BD%A2%E5%8C%BB%E7%94%9F%E8%B6%81%E9%BA%BB%E9%86%89%E6%80%A7%E4%BE%B521%E5%90%8D%E5%A5%B3%E6%80%A7%23) `167.5K 🔥` `+80%`
1. [王楚钦问孙颖莎你的奖杯帽呢 (Wang Chuqin asked Sun Yingsha where is your trophy hat?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%97%AE%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BD%A0%E7%9A%84%E5%A5%96%E6%9D%AF%E5%B8%BD%E5%91%A2%23) `788.7K 🔥`
1. [先辈给我们的留言 (Messages from our ancestors)](https://s.weibo.com/weibo?q=%23%E5%85%88%E8%BE%88%E7%BB%99%E6%88%91%E4%BB%AC%E7%9A%84%E7%95%99%E8%A8%80%23) `643.9K 🔥`
1. [孙怡浪姐把脚踩在椅子上 (Sister Sun Yilang stepped on the chair)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E6%B5%AA%E5%A7%90%E6%8A%8A%E8%84%9A%E8%B8%A9%E5%9C%A8%E6%A4%85%E5%AD%90%E4%B8%8A%23) `159.1K 🔥`
1. [男子用AI写歌仅版权赚了5位数](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%94%A8AI%E5%86%99%E6%AD%8C%E4%BB%85%E7%89%88%E6%9D%83%E8%B5%9A%E4%BA%865%E4%BD%8D%E6%95%B0%23) `102.1K 🔥`
1. [女生托闺蜜照顾5只猫不料全被饿死](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%89%98%E9%97%BA%E8%9C%9C%E7%85%A7%E9%A1%BE5%E5%8F%AA%E7%8C%AB%E4%B8%8D%E6%96%99%E5%85%A8%E8%A2%AB%E9%A5%BF%E6%AD%BB%23) `98.6K 🔥`
1. [女子晒婆婆升级当奶奶后三天变化 (Woman reveals how her mother-in-law changed in three days after she became a grandmother)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%99%92%E5%A9%86%E5%A9%86%E5%8D%87%E7%BA%A7%E5%BD%93%E5%A5%B6%E5%A5%B6%E5%90%8E%E4%B8%89%E5%A4%A9%E5%8F%98%E5%8C%96%23) `86.6K 🔥`
1. [周杰伦3小时演唱会实唱不足90分钟 (Jay Chou's 3-hour concert actually performed for less than 90 minutes)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A63%E5%B0%8F%E6%97%B6%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%9E%E5%94%B1%E4%B8%8D%E8%B6%B390%E5%88%86%E9%92%9F%23) `231.2K 🔥` `-53%`
1. [郭艾伦被诈骗近千万 (Guo Ailun was defrauded of nearly 10 million yuan)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E8%A2%AB%E8%AF%88%E9%AA%97%E8%BF%91%E5%8D%83%E4%B8%87%23) `231.0K 🔥` `-77%`
1. [孙俪回应梅婷发文 (Sun Li responded to Mei Ting’s post)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%9B%9E%E5%BA%94%E6%A2%85%E5%A9%B7%E5%8F%91%E6%96%87%23) `141.7K 🔥` `-43%`

Updated at 2026-04-06 09:51:39

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
