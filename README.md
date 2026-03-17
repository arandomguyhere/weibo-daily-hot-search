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

1. [闫妮演我在闲鱼赚美了 (Yan Ni played I and I made a lot of money in Xianyu)](https://s.weibo.com/weibo?q=%23%E9%97%AB%E5%A6%AE%E6%BC%94%E6%88%91%E5%9C%A8%E9%97%B2%E9%B1%BC%E8%B5%9A%E7%BE%8E%E4%BA%86%23) `668.5K 🔥` `NEW`
1. [美国驻伊拉克大使馆遭袭起火](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%A9%BB%E4%BC%8A%E6%8B%89%E5%85%8B%E5%A4%A7%E4%BD%BF%E9%A6%86%E9%81%AD%E8%A2%AD%E8%B5%B7%E7%81%AB%23) `309.8K 🔥` `NEW`
1. [网络辟谣标签](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E8%BE%9F%E8%B0%A3%E6%A0%87%E7%AD%BE%23) `289.2K 🔥` `NEW`
1. [马拉松冠军冲刺时被强行带离赛道](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%8B%89%E6%9D%BE%E5%86%A0%E5%86%9B%E5%86%B2%E5%88%BA%E6%97%B6%E8%A2%AB%E5%BC%BA%E8%A1%8C%E5%B8%A6%E7%A6%BB%E8%B5%9B%E9%81%93%23) `276.6K 🔥` `NEW`
1. [邓凯跑了8年龙套](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E8%B7%91%E4%BA%868%E5%B9%B4%E9%BE%99%E5%A5%97%23) `210.6K 🔥` `NEW`
1. [魏大勋起诉黑粉侵权](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E8%B5%B7%E8%AF%89%E9%BB%91%E7%B2%89%E4%BE%B5%E6%9D%83%23) `137.4K 🔥` `NEW`
1. [消防员救人后手抖个不停](https://s.weibo.com/weibo?q=%23%E6%B6%88%E9%98%B2%E5%91%98%E6%95%91%E4%BA%BA%E5%90%8E%E6%89%8B%E6%8A%96%E4%B8%AA%E4%B8%8D%E5%81%9C%23) `136.6K 🔥` `NEW`
1. [巴基斯坦称打击阿富汗军事设施](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E7%A7%B0%E6%89%93%E5%87%BB%E9%98%BF%E5%AF%8C%E6%B1%97%E5%86%9B%E4%BA%8B%E8%AE%BE%E6%96%BD%23) `124.6K 🔥` `NEW`
1. [美国陷入孤立](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%99%B7%E5%85%A5%E5%AD%A4%E7%AB%8B%23) `112.5K 🔥` `NEW`
1. [白鹿三天瘦了三斤](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%89%E5%A4%A9%E7%98%A6%E4%BA%86%E4%B8%89%E6%96%A4%23) `112.5K 🔥` `NEW`
1. [伊朗战术策略已准备多年 (Iran's tactical strategy has been prepared for years)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%88%98%E6%9C%AF%E7%AD%96%E7%95%A5%E5%B7%B2%E5%87%86%E5%A4%87%E5%A4%9A%E5%B9%B4%23) `112.5K 🔥` `NEW`
1. [养生是最靠谱的长期主义](https://s.weibo.com/weibo?q=%23%E5%85%BB%E7%94%9F%E6%98%AF%E6%9C%80%E9%9D%A0%E8%B0%B1%E7%9A%84%E9%95%BF%E6%9C%9F%E4%B8%BB%E4%B9%89%23) `112.0K 🔥` `NEW`
1. [7旬女子打破家族活不过50岁诅咒](https://s.weibo.com/weibo?q=%237%E6%97%AC%E5%A5%B3%E5%AD%90%E6%89%93%E7%A0%B4%E5%AE%B6%E6%97%8F%E6%B4%BB%E4%B8%8D%E8%BF%8750%E5%B2%81%E8%AF%85%E5%92%92%23) `94.6K 🔥` `NEW`
1. [美军被曝对伊朗退出选项](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%A2%AB%E6%9B%9D%E5%AF%B9%E4%BC%8A%E6%9C%97%E9%80%80%E5%87%BA%E9%80%89%E9%A1%B9%23) `94.6K 🔥` `NEW`
1. [内马尔回应落选](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%9B%9E%E5%BA%94%E8%90%BD%E9%80%89%23) `94.4K 🔥` `NEW`
1. [孔雪儿 谁说内娱爱豆不会演戏的](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%20%E8%B0%81%E8%AF%B4%E5%86%85%E5%A8%B1%E7%88%B1%E8%B1%86%E4%B8%8D%E4%BC%9A%E6%BC%94%E6%88%8F%E7%9A%84%23) `94.1K 🔥` `NEW`
1. [美国越陷越深](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%B6%8A%E9%99%B7%E8%B6%8A%E6%B7%B1%23) `89.7K 🔥` `NEW`
1. [美股高开高收](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E9%AB%98%E5%BC%80%E9%AB%98%E6%94%B6%23) `82.8K 🔥` `NEW`
1. [龙虾安全养殖手册](https://s.weibo.com/weibo?q=%23%E9%BE%99%E8%99%BE%E5%AE%89%E5%85%A8%E5%85%BB%E6%AE%96%E6%89%8B%E5%86%8C%23) `76.1K 🔥` `NEW`
1. [中美巴黎经贸磋商谈了什么](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%B7%B4%E9%BB%8E%E7%BB%8F%E8%B4%B8%E7%A3%8B%E5%95%86%E8%B0%88%E4%BA%86%E4%BB%80%E4%B9%88%23) `73.1K 🔥` `NEW`
1. [勇士vs奇才 (Warriors vs Wizards)](https://s.weibo.com/weibo?q=%23%E5%8B%87%E5%A3%ABvs%E5%A5%87%E6%89%8D%23) `72.0K 🔥` `NEW`
1. [最佳睡眠到底是几个小时 (What are the best hours of sleep?)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E4%BD%B3%E7%9D%A1%E7%9C%A0%E5%88%B0%E5%BA%95%E6%98%AF%E5%87%A0%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `1.2M 🔥` `+26%`
1. [入职未满1年怀孕请假被拒获赔10万 (She was compensated NT$100,000 when she was refused leave due to pregnancy less than 1 year after joining the company.)](https://s.weibo.com/weibo?q=%23%E5%85%A5%E8%81%8C%E6%9C%AA%E6%BB%A11%E5%B9%B4%E6%80%80%E5%AD%95%E8%AF%B7%E5%81%87%E8%A2%AB%E6%8B%92%E8%8E%B7%E8%B5%9410%E4%B8%87%23) `814.0K 🔥` `+2987%`
1. [奋进十五五你会看到这样的中国 (You will see China like this during the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%A5%8B%E8%BF%9B%E5%8D%81%E4%BA%94%E4%BA%94%E4%BD%A0%E4%BC%9A%E7%9C%8B%E5%88%B0%E8%BF%99%E6%A0%B7%E7%9A%84%E4%B8%AD%E5%9B%BD%23) `685.0K 🔥` `+29%`
1. [爸爸买彩票中748万不告诉孩子](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%B9%B0%E5%BD%A9%E7%A5%A8%E4%B8%AD748%E4%B8%87%E4%B8%8D%E5%91%8A%E8%AF%89%E5%AD%A9%E5%AD%90%23) `621.6K 🔥` `+2042%`
1. [美宜佳被曝光后半小时无一人进店 (No one entered Meiyijia store for half an hour after it was exposed)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%9C%E4%BD%B3%E8%A2%AB%E6%9B%9D%E5%85%89%E5%90%8E%E5%8D%8A%E5%B0%8F%E6%97%B6%E6%97%A0%E4%B8%80%E4%BA%BA%E8%BF%9B%E5%BA%97%23) `254.5K 🔥` `+873%`
1. [鹿哈毛肚事件获商家退款消费者发声](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E5%93%88%E6%AF%9B%E8%82%9A%E4%BA%8B%E4%BB%B6%E8%8E%B7%E5%95%86%E5%AE%B6%E9%80%80%E6%AC%BE%E6%B6%88%E8%B4%B9%E8%80%85%E5%8F%91%E5%A3%B0%23) `230.6K 🔥` `+926%`
1. [永辉公开喊话山姆 (Yonghui publicly calls out Sam)](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BE%89%E5%85%AC%E5%BC%80%E5%96%8A%E8%AF%9D%E5%B1%B1%E5%A7%86%23) `212.0K 🔥` `+731%`
1. [六国发布联合声明](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%9B%BD%E5%8F%91%E5%B8%83%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%23) `195.1K 🔥` `+648%`
1. [赵丽颖 电影 (Zhao Liying movies)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E7%94%B5%E5%BD%B1%23) `172.3K 🔥` `+623%`
1. [张凌赫回复谢征](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%A4%8D%E8%B0%A2%E5%BE%81%23) `160.4K 🔥` `+530%`
1. [不挑食 感观度低 (Not picky about food, low sensory perception)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%8C%91%E9%A3%9F%20%E6%84%9F%E8%A7%82%E5%BA%A6%E4%BD%8E%23) `151.9K 🔥` `+486%`
1. [邓凯演技](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E6%BC%94%E6%8A%80%23) `146.8K 🔥` `+203%`
1. [租客装修后退房房东让恢复成毛坯](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E5%AE%A2%E8%A3%85%E4%BF%AE%E5%90%8E%E9%80%80%E6%88%BF%E6%88%BF%E4%B8%9C%E8%AE%A9%E6%81%A2%E5%A4%8D%E6%88%90%E6%AF%9B%E5%9D%AF%23) `112.6K 🔥` `+335%`
1. [网传张凌赫主演许你星河千里](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%BB%E6%BC%94%E8%AE%B8%E4%BD%A0%E6%98%9F%E6%B2%B3%E5%8D%83%E9%87%8C%23) `112.5K 🔥` `+285%`
1. [42岁女子从不抽烟确诊肺癌晚期](https://s.weibo.com/weibo?q=%2342%E5%B2%81%E5%A5%B3%E5%AD%90%E4%BB%8E%E4%B8%8D%E6%8A%BD%E7%83%9F%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%23) `111.4K 🔥` `+361%`
1. [伊朗打击美军阿联酋基地弹药库 (Iran strikes ammunition depot at US military base in UAE)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%E9%98%BF%E8%81%94%E9%85%8B%E5%9F%BA%E5%9C%B0%E5%BC%B9%E8%8D%AF%E5%BA%93%23) `110.5K 🔥` `+328%`
1. [因为瞿颖盒马的菠菜都标上英文了 (Because Quying Hema’s spinach is all labeled in English)](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E7%9E%BF%E9%A2%96%E7%9B%92%E9%A9%AC%E7%9A%84%E8%8F%A0%E8%8F%9C%E9%83%BD%E6%A0%87%E4%B8%8A%E8%8B%B1%E6%96%87%E4%BA%86%23) `107.9K 🔥` `+364%`
1. [18岁女孩腹中肿块里还有24颗牙齿](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%85%B9%E4%B8%AD%E8%82%BF%E5%9D%97%E9%87%8C%E8%BF%98%E6%9C%8924%E9%A2%97%E7%89%99%E9%BD%BF%23) `97.5K 🔥` `+376%`
1. [瞿颖好大的雨啊 (Qu Ying It’s raining heavily)](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E5%A5%BD%E5%A4%A7%E7%9A%84%E9%9B%A8%E5%95%8A%23) `94.3K 🔥` `+223%`
1. [伊朗对美以发动57波打击 (Iran launches 57 waves of strikes against the United States and Israel)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E7%BE%8E%E4%BB%A5%E5%8F%91%E5%8A%A857%E6%B3%A2%E6%89%93%E5%87%BB%23) `94.2K 🔥` `+129%`
1. [BLG战胜BFX (BLG defeated BFX)](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CBFX%23) `93.1K 🔥` `+148%`
1. [管泽元 (Guan Zeyuan)](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%23) `90.6K 🔥` `+291%`
1. [本周做什么都顺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `90.6K 🔥` `+206%`
1. [截瘫女子植入脑机1年后能刷手机了 (Paraplegic woman can swipe her phone one year after implanting brain machine)](https://s.weibo.com/weibo?q=%23%E6%88%AA%E7%98%AB%E5%A5%B3%E5%AD%90%E6%A4%8D%E5%85%A5%E8%84%91%E6%9C%BA1%E5%B9%B4%E5%90%8E%E8%83%BD%E5%88%B7%E6%89%8B%E6%9C%BA%E4%BA%86%23) `87.2K 🔥` `+232%`
1. [Bin 外战看BLG (Bin Watch BLG during foreign wars)](https://s.weibo.com/weibo?q=%23Bin%20%E5%A4%96%E6%88%98%E7%9C%8BBLG%23) `79.4K 🔥` `+38%`
1. [宇宙闪烁请注意 (Please note that the universe is twinkling)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E5%AE%99%E9%97%AA%E7%83%81%E8%AF%B7%E6%B3%A8%E6%84%8F%23) `71.4K 🔥` `+207%`
1. [中美讨论了哪些议题 (What issues did China and the United States discuss?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E8%AE%A8%E8%AE%BA%E4%BA%86%E5%93%AA%E4%BA%9B%E8%AE%AE%E9%A2%98%23) `70.4K 🔥` `+215%`
1. [爱吃薯片的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E8%96%AF%E7%89%87%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `66.2K 🔥` `+138%`
1. [我国将适度超前推进新基建](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%B0%86%E9%80%82%E5%BA%A6%E8%B6%85%E5%89%8D%E6%8E%A8%E8%BF%9B%E6%96%B0%E5%9F%BA%E5%BB%BA%23) `61.4K 🔥` `+133%`
1. [市监局回应查封40件网红鹅肝](https://s.weibo.com/weibo?q=%23%E5%B8%82%E7%9B%91%E5%B1%80%E5%9B%9E%E5%BA%94%E6%9F%A5%E5%B0%8140%E4%BB%B6%E7%BD%91%E7%BA%A2%E9%B9%85%E8%82%9D%23) `60.1K 🔥` `+136%`
1. [胖东来169元1克拉方糖戒指再上架 (Pang Donglai’s 169 yuan 1 carat sugar cube ring is back on the shelves)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5169%E5%85%831%E5%85%8B%E6%8B%89%E6%96%B9%E7%B3%96%E6%88%92%E6%8C%87%E5%86%8D%E4%B8%8A%E6%9E%B6%23) `331.8K 🔥` `-52%`

Updated at 2026-03-17 09:06:25

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
