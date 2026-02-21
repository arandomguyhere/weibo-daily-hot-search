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

1. [周深五天出了三首好运歌曲 (Three good luck songs were released in the five days of Zhou Shen)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%BA%94%E5%A4%A9%E5%87%BA%E4%BA%86%E4%B8%89%E9%A6%96%E5%A5%BD%E8%BF%90%E6%AD%8C%E6%9B%B2%23) `18.3K 🔥` `NEW`
1. [将门毒后 (After poisoning the door)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%23) `40.2K 🔥`
1. [热气腾腾的中国年 (Steamy Chinese New Year)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E6%B0%94%E8%85%BE%E8%85%BE%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%B9%B4%23) `38.3K 🔥`
1. [王传君录综艺崩溃爆哭 (Wang Chuanjun's variety show collapsed and burst into tears)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%BD%95%E7%BB%BC%E8%89%BA%E5%B4%A9%E6%BA%83%E7%88%86%E5%93%AD%23) `37.8K 🔥`
1. [白鹿 我家923 (Bailu my home 923)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E6%88%91%E5%AE%B6923%23) `37.3K 🔥`
1. [大年初六 (The sixth day of the Lunar New Year)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E5%85%AD%23) `37.3K 🔥`
1. [前方无厕所无烤肠无茶叶蛋 (No toilet ahead, no sausages, no tea eggs)](https://s.weibo.com/weibo?q=%23%E5%89%8D%E6%96%B9%E6%97%A0%E5%8E%95%E6%89%80%E6%97%A0%E7%83%A4%E8%82%A0%E6%97%A0%E8%8C%B6%E5%8F%B6%E8%9B%8B%23) `35.3K 🔥`
1. [谷爱凌决赛时间 (Gu Ailing final time)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%B3%E8%B5%9B%E6%97%B6%E9%97%B4%23) `33.5K 🔥`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `32.0K 🔥`
1. [李晨发跑男团idle合照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E5%8F%91%E8%B7%91%E7%94%B7%E5%9B%A2idle%E5%90%88%E7%85%A7%23) `25.1K 🔥`
1. [结婚五金起步价迈入10万元大关 (The starting price of wedding hardware has reached the 100,000 yuan mark)](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E4%BA%94%E9%87%91%E8%B5%B7%E6%AD%A5%E4%BB%B7%E8%BF%88%E5%85%A510%E4%B8%87%E5%85%83%E5%A4%A7%E5%85%B3%23) `24.6K 🔥`
1. [上门喂猫不让人走 (Feed the cat at your door and won't let it go)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%97%A8%E5%96%82%E7%8C%AB%E4%B8%8D%E8%AE%A9%E4%BA%BA%E8%B5%B0%23) `21.1K 🔥`
1. [李昀锐拍宋雨琦 (Li Yunrui shoots Song Yuqi)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E6%8B%8D%E5%AE%8B%E9%9B%A8%E7%90%A6%23) `20.9K 🔥`
1. [曝齐思钧刘梦章分手 (Qi Sijun and Liu Mengzhang's breakup exposed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%BD%90%E6%80%9D%E9%92%A7%E5%88%98%E6%A2%A6%E7%AB%A0%E5%88%86%E6%89%8B%23) `19.9K 🔥`
1. [今年好几对情侣都分了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E5%A5%BD%E5%87%A0%E5%AF%B9%E6%83%85%E4%BE%A3%E9%83%BD%E5%88%86%E4%BA%86%23) `19.7K 🔥`
1. [初六送穷怎么送](https://s.weibo.com/weibo?q=%23%E5%88%9D%E5%85%AD%E9%80%81%E7%A9%B7%E6%80%8E%E4%B9%88%E9%80%81%23) `19.1K 🔥`
1. [辽宁春晚最大黑马小品以貌取人](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%98%A5%E6%99%9A%E6%9C%80%E5%A4%A7%E9%BB%91%E9%A9%AC%E5%B0%8F%E5%93%81%E4%BB%A5%E8%B2%8C%E5%8F%96%E4%BA%BA%23) `18.8K 🔥`
1. [唐宫奇案 (Strange Cases in the Tang Palace)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%23) `18.8K 🔥`
1. [刘梦章称不存在出轨 (Liu Mengzhang said there was no cheating)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%A2%A6%E7%AB%A0%E7%A7%B0%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%87%BA%E8%BD%A8%23) `18.7K 🔥`
1. [刘浩存初五迎财神自拍 (Liu Haocun takes a selfie on the fifth day of the Lunar New Year to welcome the God of Wealth)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%88%9D%E4%BA%94%E8%BF%8E%E8%B4%A2%E7%A5%9E%E8%87%AA%E6%8B%8D%23) `17.6K 🔥`
1. [施暴者必被法律严惩 (Violence perpetrators must be severely punished by law)](https://s.weibo.com/weibo?q=%23%E6%96%BD%E6%9A%B4%E8%80%85%E5%BF%85%E8%A2%AB%E6%B3%95%E5%BE%8B%E4%B8%A5%E6%83%A9%23) `17.6K 🔥`
1. [北京沙尘暴致大兴机场多趟航班备降 (Sandstorm in Beijing caused multiple flights to divert at Daxing Airport)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%B2%99%E5%B0%98%E6%9A%B4%E8%87%B4%E5%A4%A7%E5%85%B4%E6%9C%BA%E5%9C%BA%E5%A4%9A%E8%B6%9F%E8%88%AA%E7%8F%AD%E5%A4%87%E9%99%8D%23) `17.2K 🔥`
1. [纯真年代的爱情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `17.2K 🔥`
1. [身体5个表现说明需要除湿了 (5 signs your body needs dehumidification)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%935%E4%B8%AA%E8%A1%A8%E7%8E%B0%E8%AF%B4%E6%98%8E%E9%9C%80%E8%A6%81%E9%99%A4%E6%B9%BF%E4%BA%86%23) `17.1K 🔥`
1. [中国队空中技巧混团铜牌 (Chinese team aerials mixed team bronze medal)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%A9%BA%E4%B8%AD%E6%8A%80%E5%B7%A7%E6%B7%B7%E5%9B%A2%E9%93%9C%E7%89%8C%23) `17.1K 🔥`
1. [女财神被游客追得满场跑 (The female Goddess of Wealth was chased all over the place by tourists)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%B4%A2%E7%A5%9E%E8%A2%AB%E6%B8%B8%E5%AE%A2%E8%BF%BD%E5%BE%97%E6%BB%A1%E5%9C%BA%E8%B7%91%23) `17.1K 🔥`
1. [专家提醒过期药害猛如虎](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E6%8F%90%E9%86%92%E8%BF%87%E6%9C%9F%E8%8D%AF%E5%AE%B3%E7%8C%9B%E5%A6%82%E8%99%8E%23) `17.1K 🔥`
1. [徐璐透露目前体重为96斤 (Xu Lu revealed that her current weight is 96 pounds)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E7%92%90%E9%80%8F%E9%9C%B2%E7%9B%AE%E5%89%8D%E4%BD%93%E9%87%8D%E4%B8%BA96%E6%96%A4%23) `17.1K 🔥`
1. [现在就出发 (Let's go now)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `17.1K 🔥`
1. [女子将900克黄金遗忘动车当场吓晕](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%86900%E5%85%8B%E9%BB%84%E9%87%91%E9%81%97%E5%BF%98%E5%8A%A8%E8%BD%A6%E5%BD%93%E5%9C%BA%E5%90%93%E6%99%95%23) `17.1K 🔥`
1. [王力宏关于大同的影片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%85%B3%E4%BA%8E%E5%A4%A7%E5%90%8C%E7%9A%84%E5%BD%B1%E7%89%87%23) `17.1K 🔥`
1. [滑雪比赛为啥非得带手机 (Why do you have to bring a mobile phone to ski competitions?)](https://s.weibo.com/weibo?q=%23%E6%BB%91%E9%9B%AA%E6%AF%94%E8%B5%9B%E4%B8%BA%E5%95%A5%E9%9D%9E%E5%BE%97%E5%B8%A6%E6%89%8B%E6%9C%BA%23) `17.1K 🔥`
1. [欧阳震华暴瘦引热议 (Ouyang Zhenhua's sudden weight loss caused heated discussion)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E9%9C%87%E5%8D%8E%E6%9A%B4%E7%98%A6%E5%BC%95%E7%83%AD%E8%AE%AE%23) `17.1K 🔥`
1. [张元英MiuMiu活动](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1MiuMiu%E6%B4%BB%E5%8A%A8%23) `17.1K 🔥`
1. [范丞丞李昀锐给宋雨琦举手幅 (Fan Chengcheng and Li Yunrui raised their hands to Song Yuqi)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%9D%8E%E6%98%80%E9%94%90%E7%BB%99%E5%AE%8B%E9%9B%A8%E7%90%A6%E4%B8%BE%E6%89%8B%E5%B9%85%23) `17.1K 🔥`
1. [谷爱凌决赛时间更新 (Gu Ailing finals time update)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%B3%E8%B5%9B%E6%97%B6%E9%97%B4%E6%9B%B4%E6%96%B0%23) `17.1K 🔥`
1. [idle演唱会](https://s.weibo.com/weibo?q=%23idle%E6%BC%94%E5%94%B1%E4%BC%9A%23) `17.1K 🔥`
1. [陈丽君连续三年春节期间爆 (Chen Lijun exploded during the Spring Festival for three consecutive years)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E8%BF%9E%E7%BB%AD%E4%B8%89%E5%B9%B4%E6%98%A5%E8%8A%82%E6%9C%9F%E9%97%B4%E7%88%86%23) `17.1K 🔥`
1. [六金郑元松分手](https://s.weibo.com/weibo?q=%23%E5%85%AD%E9%87%91%E9%83%91%E5%85%83%E6%9D%BE%E5%88%86%E6%89%8B%23) `17.1K 🔥`
1. [中国速滑米兰冬奥1金2铜收官](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%9F%E6%BB%91%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A51%E9%87%912%E9%93%9C%E6%94%B6%E5%AE%98%23) `17.1K 🔥`
1. [徐梦桃安慰李天马王心迪吃醋](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E5%AE%89%E6%85%B0%E6%9D%8E%E5%A4%A9%E9%A9%AC%E7%8E%8B%E5%BF%83%E8%BF%AA%E5%90%83%E9%86%8B%23) `17.1K 🔥`
1. [谷爱凌米兰冬奥收官战 (Gu Ailing Milan Winter Olympics final match)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E6%94%B6%E5%AE%98%E6%88%98%23) `17.1K 🔥`
1. [谷爱凌U型场地决赛推迟 (Gu Ailing's U-shaped field final postponed)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8CU%E5%9E%8B%E5%9C%BA%E5%9C%B0%E5%86%B3%E8%B5%9B%E6%8E%A8%E8%BF%9F%23) `52.3K 🔥` `-24%`
1. [苏翊鸣闭幕式旗手 (Su Yiming flag bearer at closing ceremony)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E9%97%AD%E5%B9%95%E5%BC%8F%E6%97%97%E6%89%8B%23) `29.6K 🔥` `-32%`
1. [齐思钧回应分手 (Qi Sijun responded to the breakup)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E5%9B%9E%E5%BA%94%E5%88%86%E6%89%8B%23) `28.8K 🔥` `-24%`
1. [李书名 26岁女房客](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%A6%E5%90%8D%2026%E5%B2%81%E5%A5%B3%E6%88%BF%E5%AE%A2%23) `28.4K 🔥` `-24%`
1. [高敏感人一生的主线任务](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%95%8F%E6%84%9F%E4%BA%BA%E4%B8%80%E7%94%9F%E7%9A%84%E4%B8%BB%E7%BA%BF%E4%BB%BB%E5%8A%A1%23) `27.0K 🔥` `-22%`
1. [刘涛回应妈祖照被设为屏保 (Liu Tao responded to Mazu’s photo being set as a screensaver)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E5%9B%9E%E5%BA%94%E5%A6%88%E7%A5%96%E7%85%A7%E8%A2%AB%E8%AE%BE%E4%B8%BA%E5%B1%8F%E4%BF%9D%23) `25.4K 🔥` `-30%`
1. [谷爱凌称收到过死亡威胁](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%A7%B0%E6%94%B6%E5%88%B0%E8%BF%87%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `21.7K 🔥` `-21%`
1. [游客挤到悔不当初不如在家刷手机](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E6%8C%A4%E5%88%B0%E6%82%94%E4%B8%8D%E5%BD%93%E5%88%9D%E4%B8%8D%E5%A6%82%E5%9C%A8%E5%AE%B6%E5%88%B7%E6%89%8B%E6%9C%BA%23) `20.2K 🔥` `-21%`

Updated at 2026-02-22 04:29:56

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
